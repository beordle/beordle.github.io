title:对暨南大学教务处的验证码进行机器识别
date:2013-03-14-02-58
---
说来也可笑.我们暨大的教务处就是网页上直接显示出验证码..就是说复制验证码文字到输入框就行.
不过就在前几天,我们大学的教务处系统突然要求数字验证码.应该说这是一个不小的进步。为了自动登陆教务处，这个验证码必须识别出来~基本的思路是先把图片转化为灰度，然后2值化，但是我们的验证码<img src="http://m1.img.libdd.com/farm4/2013/0123/13/D13D3C460F3B5D5F43583B17AF8E068C434E3659B3FFF_46_20.PNG" alt="" />每个字符宽度并非相等。所以我使用这样的代码去统计每一列完全没有黑色点的列（这样有的字符是连结在一起的就没办法了，可以改进下，不过我可能是没那个想法了）

<pre><code>
sizex,sizey=im.size 
list=[]
for x in range(sizex):  
    for y in range(sizey):
        try:
           assert im.getpixel((x,y))==1
        except:
           break
    else:
           list.append(x)

</code></pre>
<!--more-->
<img src="http://m1.img.libdd.com/farm5/2013/0123/13/C3EB9A7F0EB2CA7A58EAAA19D047C142CF5D66958D396_765_529.PNG"></img>
算出每种的HASH然后一样的切割 再通过比较HASH就能识别出验证码了，这里举一个例子

<pre><code>
def get_text_from_image(con):
  lite={'271568e99d4248cec0912d31df7762b9': 'n', '1eadf3ed9e55d684e155020a669086aa': '7', '361ce7a35dab27ab8cacdbe2a49bd26a': 'u', '9efda163c6aaaec7d106ca5491e315d6': 'P', 'fcf1181754f3cf9a02705c846d3603f8': 'f', '1cda899da1f492ee80e8a8a803ca0b82': '5', 'dbfa84d3844bcffa5ec0aee37ba5306f': 'd'}
  string=""
  l=get_image(con)
  for index,i in enumerate(l):
    key=hashlib.md5(i.tostring()).hexdigest()
    string+=lite[key]
  return string
                  
con=requests.get("http://jwc.jnu.edu.cn/web/ValidateCode.aspx").content

</code></pre>

其实原本以为不会这么简单就成功的。其实真正简化了流程的原因就是 它没有一般验证码的噪点 可以归结为有限的219种。大大简化了识别流程。但是字符不等宽又增加了难度。总的来说还是适合我这种新手练手的。

<pre>
D:\Users\Beordle>E:\desktop\code\det.py
3Pxs
</pre>