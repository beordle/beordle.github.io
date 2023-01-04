title:Raspberry Pi树梅派 通过命令 关闭HDMI输出
date:2013-06-29-17-45
---
Raspberry Pi树梅派 通过命令 关闭HDMI输出

一开始找到通用的liunx关闭显示器的命令.但是没用.后来找到了这个命令
<pre>
/opt/vc/bin/tvservice -h

-o, --off Power off the display
-p, --preferred Power on HDMI with preferred settings
/opt/vc/bin/tvservice -o
/opt/vc/bin/tvservice -p

</pre>
至此问题就解决啦~~