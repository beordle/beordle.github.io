title:解决国行android无法安装LINE和Vipper
date:2012-07-19-12-24
---

最近我的国行 MOTO ME863 要安装这 LINE 和 Vipper 两个应用,总是显示addons属性不支持。

在网上找了一下，终于让我找到了解决方法.

如有腾讯应用助手for Android会显示“您的机器不支持Add-on属性”，如果直接用手机装的话就显示：”应用程序未安装“，91和豌豆荚也是显示”安装失败“，让人非常恼火，其实主要原因是阉割了google服务，需要加这三个文件： 

* 地图程序框架：/system/framework/com.google.android.maps.jar； 
* 地图权限：/system/etc/permission/com.google.android.maps.xml；
* 网络定位程序:/data/app_s/NetworkLocation.apk

你只需将上述文件放到手机中的相应位置，重启手机就好了。本人亲测可用。 

方法： 
    首先机器要ROOT，然后用RE管理器，把要复制的文件复制到相应的位置，最后改权限和其他一样644，就是竖着3趟，左边全选，中间最上面选上，右边全空。接着重启机器就好了，重启后你会发现如viber，endomondo，line等软件都可以安装了。 不会修改权限？不是吧，自己查查看。 

具体就是把这三个文件。 
/system/framework/com.google.android.maps.jar；
/system/etc/permission/com.google.android.maps.xml； 
/data/app_s/NetworkLocation.apk。

放到相应位置，没有文件夹的，请自己建立.

谷歌服务中的位置服务下载地址 

 http://vdisk.weibo.com/s/3hfYs 原帖是 http://bbs.gfan.com/android-3857773-1-1.html 。

不过，由于RE管理器的单栏显示特性，使这个工作在设备上十分难于完成。
在这我还是推荐使用 电脑版Root Explorer 和 Total Commander for android