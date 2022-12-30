title:终于搞定了python验证码识别的C扩展
date:2013-07-31-12-06
---
以前学校的验证码其实很好识别。不过现在加了一些干扰元素。以前的办法肯定是行不通的了。我再次用Python Image Library写了一个新版本的识别。可能由于是我写的识别算法不够好的缘故。性能实在是低得可怜。 识别一个需要1.7s左右，后来我优化了一些流程。是的，确实节省了30~40%左右的运行时间。1.2s就能够识别。后来实在是不能忍受。网上搜索了一些关于pil性能优化的文章。
在关键部分将
<pre>
image.putpixel((x,y))
image.getpixel((x,y))
</pre>
<!--more-->


换成类似下面这样的代码
<pre>
pimage=image.load()
pimage[x,y]
</pre>
确实性能得到了很大提高。识别一个验证码只需要0.2s左右。但是这可是在我的笔记本上运行的，那台700mhz主频的老爷机可是没有这样的性能的。另外，由于要应用到web服务和微信(微信对于应用的每个请求限制时间为5s)中。这个速度将不堪忍受。所以即使性能得到了质的改善，也是不能接受的。
然后则是打算用c重写这部分代码。找了许久，也分析了一下。就用了Freeimage来做dll了。
<pre>
from ctypes import *
a=CDLL('dlltest.dll')
f=open("test.jpg","rb")
s=f.read()
ret=a.det(s,len(s))
print ret
raw_input()
</pre>

不过目前还没有写完。等写完了再看看性能吧  ：）