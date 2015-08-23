title:在暨南大学广州本部使用路由器上网
date:2013-03-14-06-21
---
#刚来到暨大
暨大的校园网还是非常给力的，理论极限是10MB/s，而且是24小时提供的。相比于留在天津理工的同学。那小水管。。45K/s..可能会死人。

不过刚来学校时的时候我没有电脑，只能是玩手机。但是吧,我们金三宿舍那手机网络。。QQ短信经常接受延迟，发送失败。到了晚上睡觉时我更是发现 这分明就是飞行模式嘛!

看别人玩电脑那个流畅，我聊天还得出宿舍，真心是受不了，所以9月11号我就定了一个路由器
#刚来到暨大2
![](http://beordle.com/wp-content/uploads/2013/03/8A730F57D45DFE8A914F53605967ABE8_B800_2400_500_75.jpeg)


#买来的路由器是不能够直接使用的。下面我就说说怎么使用。
<!--more-->
首先你要给路由换一个系统。ddwrt 和 openwrt都可以。

像这个就行 <a href="http://code.google.com/p/mentohust-wrt/">http://code.google.com/p/mentohust-wrt/</a>

一般来说 使用 路由器自带的Web系统升级就可以了。这个去网上查一查就知道了，不是重点。

而且要注意的是不是所有的路由器都可以刷的，而且相同型号的不同版本也不一样。这个一定得注意。

一般来说90元以下的路由基本是不可能刷的。

先说一下上面这个mentohust-ddwrt的配置

![](http://beordle.com/wp-content/uploads/2013/03/7536C7BDB7299AE217F7EDBE34FC44D4_B800_2400_500_201.jpeg)

![](http://beordle.com/wp-content/uploads/2013/03/8A5D0D5949BD1B9D779E5ECFA8258D92_B800_2400_500_581.jpeg)

![](http://beordle.com/wp-content/uploads/2013/03/1F6851233B480D00904E8AAAA13EAB09_B800_2400_500_289.jpeg) 

这样就可以鸟。上个图

不过上面的路由现在已经绝迹了。我又弄了一种现在很火的WR703N，他的特点就是很小
![](http://beordle.com/wp-content/uploads/2013/03/EA447782C0EFEFCBD971F842EE0E8B79_B800_2400_50_50.jpeg)
。我本来是用来做机器人的。后来因为太精致了，就想着送人。毕竟一个能在暨大使用的这么小的一个路由器。。好吧，结果为了进暨大社团联合会的交研部。我就把他送给了CB（某屌丝）。。

![](http://beordle.com/wp-content/uploads/2013/03/84FD3F18AED8432025E3906F19B930FA_B800_2400_500_375.jpeg)
TP-LINK TL-WR703N 150M无线迷你型3G路由器

刷openwrt的有毅力，我就只说暨大特有的了。另外你会用到WinSCP,Putty,Telnet。自行Google

修改/etc/config/network文件为

```
config interface 'loopback'              
option ifname 'lo'               
option proto 'static'              
option ipaddr '127.0.0.1'       
option netmask '255.0.0.0'
config interface 'wan'        
option ifname 'eth0'     
option proto 'dhcp'
option macaddr EC:9A:74:4E:41:C8 # this line,you need to add your MAC address,you need to modiy this line only   
config interface 'lan'
option type 'bridge'
option proto 'static'
option ipaddr '192.168.1.1'
option netmask '255.255.255.0'
```
在/etc/rc.local 文件中增加

```
mentohust -u2012052690 -p666666 -d1 -a1 -e30 -neth0 -v3.95 -b1 -w -cudhcpc -i
```

##wr703n玩机失败后初始化方法

笔记本与wr703n 网线直连，设置固定ip以及网关，加电，立即快速抽插reset，蓝色灯超快闪表示成功进入安全模式

```
telent 192.168.1.1
     >>firstboot
     >>reboot
```

我还刷了一种wr720..不过也没什么意思。大同小异。

下面是我把wr703壳拆了，夜晚发出蓝光。异常漂亮 : )

![](http://beordle.com/wp-content/uploads/2013/03/439C0900697CB79E8A799274DE2FE329_B800_2400_500_375.jpeg)

##什么是MAC？

暨南大学本部使用锐捷认证上网，并绑定了MAC地址。MAC地址每台电脑都不一样（确切的说是网卡）。学校通过绑定MAC地址实现一人一号一机上网。因此只有用户名密码正确是不够的。MAC地址当然可以在电脑上查看，不过我更推荐 在<a href="http://mynet.jnu.edu.cn/xywl/xywl_2_1.htm">http://mynet.jnu.edu.cn/xywl/xywl_2_1.htm</a>查询