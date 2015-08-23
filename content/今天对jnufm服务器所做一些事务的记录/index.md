title:今天对jnufm服务器所做一些事务的记录
date:2013-08-24-21-03
---
jnufm服务器端
1.精简了代码. 有很多代码是无用的.
2.gevent更新至1.0b4 需要注意的是gevent 之前会有dns的bug 这个问题在1.0中得到解决.
我是在 http://www.lfd.uci.edu/~gohlke/pythonlibs/ 上获得的二进制版本,还要注意的是这个版本中没有greenlet的依赖包,主要手动安装.
<!--more-->
3.pip 安装的问题.pip最近版本可能有一些问题
<pre>

C:\Documents and Settings\Administrator>pip install  --use-mirrors python-dateutil
Downloading/unpacking python-dateutil
  Could not fetch URL https://pypi.python.org/simple/python-dateutil/: There was a prob
lem confirming the ssl certificate: <urlopen error [Errno 1] _ssl.c:504: error:1
4090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed>
  Will skip URL https://pypi.python.org/simple/python-dateutil/ when looking for downlo
ad links for python-dateutil
  Could not fetch URL https://pypi.python.org/simple/: There was a problem confi
rming the ssl certificate: <urlopen error [Errno 1] _ssl.c:504: error:14090086:S
SL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed>
  Will skip URL https://pypi.python.org/simple/ when looking for download links
for python-dateutil
  Cannot fetch index base URL https://pypi.python.org/simple/
  Could not fetch URL https://pypi.python.org/simple/python-dateutil/: There was a prob
lem confirming the ssl certificate: <urlopen error [Errno 1] _ssl.c:504: error:1
4090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed>
  Will skip URL https://pypi.python.org/simple/python-dateutil/ when looking for downlo
ad links for python-dateutil
  Could not find any downloads that satisfy the requirement python-dateutil
Cleaning up...
No distributions at all found for python-dateutil
Storing complete log in C:\Documents and Settings\Administrator\pip\pip.log
</pre>
但是使用老版本就可以了.
easy_install pip=1.2.1
解决办法来源于 http://pauljaworski.com/Python/2013/04/19/problems-with-pip/


4.将数据库后端由SQLite更换为MySQL.读写可以由多个进程来进行了

5.由于现在更换了数据库,可以用于生产了,所以开启了5个server backend,使用nginx负载均衡.这样做立即使得性能得到了很大改善.而且更重要的是稳定性得到了质的提升.现在基本不会内部服务器错误.除非是一些我没考虑到的逻辑.而且呢,这样子也充分利用了多核优势(一共是24核)

举个例子
下面是 查询 我们学校校园卡余额的API,参数在字面上是很好理解的.
http://api.jnu.fm/card/rest?stuid=2012052690&password=052690
现在的a/b测试并发性能 
<pre>
Z:\Users\beordle>D:\dev\ab.exe -c 3 -n 10 "http://api.jnu.fm/card/rest?stuid=201
2052690&password=052690"
This is ApacheBench, Version 2.0.40-dev <$Revision: 1.146 $> apache-2.0
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Copyright 1997-2005 The Apache Software Foundation, http://www.apache.org/

Benchmarking api.jnu.fm (be patient).....done


Server Software:        nginx/1.5.3
Server Hostname:        api.jnu.fm
Server Port:            80

Document Path:          /card/rest?stuid=2012052690&password=052690
Document Length:        20 bytes

Concurrency Level:      3
Time taken for tests:   4.335248 seconds
Complete requests:      10
Failed requests:        1
   (Connect: 0, Length: 1, Exceptions: 0)
Write errors:           0
Non-2xx responses:      1
Total transferred:      1694 bytes
HTML transferred:       201 bytes
Requests per second:    2.31 [#/sec] (mean)
Time per request:       1300.574 [ms] (mean)
Time per request:       433.525 [ms] (mean, across all concurrent requests)
Transfer rate:          0.23 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2  177 229.3    142     619
Processing:   563 1110 719.9    908    3041
Waiting:      563 1110 719.6    908    3040
Total:        699 1288 721.5   1134    3045

Percentage of the requests served within a certain time (ms)
  50%   1134
  66%   1238
  75%   1559
  80%   1853
  90%   3045
  95%   3045
  98%   3045
  99%   3045
 100%   3045 (longest request)


</pre>


<pre>
Z:\Users\beordle>D:\dev\ab.exe -c 5 -n 50 "http://api.jnu.fm/card/rest?stuid=201
2052690&password=052690"
This is ApacheBench, Version 2.0.40-dev <$Revision: 1.146 $> apache-2.0
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Copyright 1997-2005 The Apache Software Foundation, http://www.apache.org/

Benchmarking api.jnu.fm (be patient).....done


Server Software:        nginx/1.5.3
Server Hostname:        api.jnu.fm
Server Port:            80

Document Path:          /card/rest?stuid=2012052690&password=052690
Document Length:        20 bytes

Concurrency Level:      5
Time taken for tests:   56.766247 seconds
Complete requests:      50
Failed requests:        13
   (Connect: 0, Length: 13, Exceptions: 0)
Write errors:           0
Non-2xx responses:      13
Total transferred:      8582 bytes
HTML transferred:       1013 bytes
Requests per second:    0.88 [#/sec] (mean)
Time per request:       5676.625 [ms] (mean)
Time per request:       1135.325 [ms] (mean, across all concurrent requests)
Transfer rate:          0.14 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2  912 2302.6    170    9462
Processing:   453 4543 5060.4   2727   22736
Waiting:      453 3769 4332.7   2727   22736
Total:        455 5455 5909.3   3293   25740

Percentage of the requests served within a certain time (ms)
  50%   3293
  66%   4091
  75%  10234
  80%  11119
  90%  13746
  95%  16444
  98%  25740
  99%  25740
 100%  25740 (longest request)
</pre>

这个结果令我很困惑,因为理论上说.前端nginx仅仅转发是不太可能造成并发瓶颈的.后端的话,我至少运行了5个服务器实例,也不可能是主要原因.因此我猜想是学校本身服务器性能不佳导致的(并发不佳,然后数据库也没缓存).但是实在没精力去确认啦..