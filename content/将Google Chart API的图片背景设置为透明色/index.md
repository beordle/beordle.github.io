title:将Google Chart API的图片背景设置为透明色
date:2013-04-14-07-21
---
一般来说Google Tex API 提供的图像背景是不透明的，这样对于背景色不是白色的网页看起来不是太美观，还好Google提供了自定义背景的选项。 

>这里将背景设为100%透明，参数是chf=bg,s,00000000 而字体颜色是FF6D7A：chco=FF6D7A。

给出一个示例

https://chart.googleapis.com/chart?chco=FFFFFF&amp;chf=bg,s,00000000&amp;cht=tx&amp;chl=F=ma 效果是这样的![](https://chart.googleapis.com/chart?chco=FF6D7A&chf=bg,s,00000000&cht=tx&chl=F=ma) 还不错吧？