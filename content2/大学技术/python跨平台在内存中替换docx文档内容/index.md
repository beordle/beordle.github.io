title:python跨平台在内存中替换docx文档内容
date:2013-12-15-15-27
---
由于果园的老师可能有点懒，所以让我写一个自动文档生成程序。 :) 

本来生成是想采用doc的。然而却没有找到好的库而作罢。因此采用了reportlab。但是，学院的老师希望生成的文档可以编辑。而且pdf不能简单的用模板替换文本。只能说自己控制格式draw，也不适合多种文档的生成。所以我又摒弃了pdf格式。。

后来 网上找了一个docx库。但是这个库本身存在很多问题。看了docx的代码后发现：不hack的前提下是不能保留图片并替换文字的。就算hack也是会产生临时文件的。所以我只采用了docx的一部分功能，就是替换功能。。而实际上docx是一个zip压缩文档。里面是xml文件和一些图片资源，所以这个问题解决起来并不困难。

```
#codig:utf-8
#!/usr/bin/env python

import StringIO
from docx import *
def replacedocx(file,dict):
zip=open(file,'rb')
zip_buf=zip.read()
memory=StringIO.StringIO()
memory.write(zip_buf)
mydoc = zipfile.ZipFile(memory)
xmlcontent = mydoc.read('word/document.xml')
document = etree.fromstring(xmlcontent)
body = document.xpath('/w:document/w:body', namespaces=nsprefixes)[0]
for key,value in dict.items():
body = replace(body, key, value)
xmlcontent = etree.tostring(document, pretty_print=True)
mydoc.close()

zf = zipfile.ZipFile(memory, "a", zipfile.ZIP_DEFLATED, False)
zf.writestr('word/document.xml',xmlcontent)
zf.close()
return memory.getvalue()
m=replacedocx(u'在学证明.docx',{'xingming':'dd'})
f=open('new.docx','wb')
f.write(m)
```