title:一个每当食堂饭卡被刷时发送短信提醒的程序
date:2013-05-28-17-29
---
代码已实现全部功能。吊炸天
<a href="http://zjd.in/wp-content/uploads/2013/05/20130428010555.png"><img src="http://zjd.in/wp-content/uploads/2013/05/20130428010555.png" alt="20130428010555" width="707" height="421" class="alignnone size-full wp-image-185" /></a>

```
import Image,requests,StringIO,hashlib
def get_image(s):
  image_list=[]
  con=s.get("http://card.jnu.edu.cn:8080/getpasswdPhoto.action").content
  im = Image.open(StringIO.StringIO(con))
  imgry = im.convert('L')

  threshold = 118
  table = []
  for i in range(256):
      if i < threshold:
          table.append(0)
      else:
          table.append(1)

  out = imgry.point(table,'1')
  #out.save('full.jpg')
  l=[]
  for n in range(4):
    for m in range(3):
      t=out.crop((10+36*m,36+36*n,10+23+36*m,36+23+36*n))
      #print n,m
      #t.save(str(n)+str(m)+".png")
      l.append(hashlib.md5(t.tostring()).hexdigest())
  return l

def mix_password(s,password):
  l=get_image(s)
  #print l
  k={'a22bcf7d39d13ca59f3c8396e7eb89db': '4', '60d6fa3d848c9fc74347c3d7c9e86d5c': '0', '3c80aa2efb76384843ce7828ee08a318': 'C', '61e5b4a8285973cb33be84ac78f5b530': '8', '790f3dc990ffc97e56a73771d16528f7': 'X', 'e8fd364d0205838ed1600c5a6b23dbb5': '1', '9421f03c799a7ae78f73726b52df1d36': '5', '0a3ba0c5b9586e8cf5ef848746ee587b': '6', '12c0e7d2f6a6a3f7d8de8cb8f9072112': '7', '2e5103732bd2fa2f86498da3d655e1cc': '2', '53b333cb4bd0960591b696fb2cce5d44': '9', 'f46fac15712d87d3409ae0ffd7acd81d': '3'}

  new_l=['0','1','2','3','4','5','6','7','8','9','C','X']

  l=map(lambda x: k[x],l)

  #{'C': 'C', 'X': 'X', '1': '2', '0': '7', '3': '0', '2': '6', '5': '1', '4': '4', '7': '8', '6': '9', '9': '5', '8': '3'}
  keys_map=dict(zip(l,new_l))
  keys_map_function=lambda x:keys_map[x]
  return  "".join  ( map(keys_map_function,password)  )

def normal_data(data):
  new_data={}
  for k,v in data.items():
     if type(v) is type([]):
         new_data[k]=v[0]
     else:
         new_data[k]=v
  return new_data
```

```

#coding:utf-8 
import requests
import urlparse
from sendemail import sendemail
from pyquery import PyQuery as pq
from detective import mix_password,normal_data
from dateutil.parser import parse
from dateutil.relativedelta import relativedelta
from sms import sendsmsex
import time
def auto_form(url,text,r):
  action=pq(text)("form").attr['action']
  url=urlparse.urljoin(url,action)
  data={}
  for i in pq(text)("form select"):
    data[pq(i).attr['name']] = [pq(j).attr['value'] for j in pq(i)("option")]

  for i in pq(text)("form input"):
    data [ pq(i).attr['name'] ]=pq(i).attr['value']
  methods={'get':r.get,'post':r.post}
  method_name=pq(text)("form").attr['method']
  func=methods[method_name]
  return func,url,data


def login(stuid,password=None):
    if not password: password=stuid[-6:]
    r=requests.session()
    r.headers={'Host':'card.jnu.edu.cn:8080','Referer':'http://card.jnu.edu.cn/platform/cc/index',}
    r.get("http://card.jnu.edu.cn").text
    r.get("http://card.jnu.edu.cn:8080/getCheckpic.action?rand=8000.")

    data={
    'loginType':'2',
    'name':stuid,
    'passwd': mix_password(r,password),
    'rand':'8000',
    'userType':'1'
    }

    r.post("http://card.jnu.edu.cn:8080/loginstudent.action",data=data).text
    # login sucessful on here!!
    return r


def months_data(r):
  text=r.get("http://card.jnu.edu.cn:8080/accounthisTrjn.action").text

  func,url,data= auto_form("http://card.jnu.edu.cn:8080",text,r)
  text=func(url,data=normal_data(data)).text
  func,url,data=auto_form(url,text,r)

  idata={
  'inputEndDate':'20130531',
  'inputStartDate':'20130501',
  }
  data.update(idata)


  text=func(url,data=data).text
  func,url,data=auto_form(url,text,r)
  text=func(url,data=data).text
  func,url,data= auto_form("http://card.jnu.edu.cn:8080",text,r)
  months_list=[]
  for i in pq(text)(".listbg , .listbg2 "):
    colums=[pq(j).text() for j in pq(i)("td")]
    months_list.append([colums[1],colums[2],colums[3],colums[4],parse(colums[0])])#+relativedelta(minutes=+55)])
  return months_list




def today_data(r):
  text=r.get("http://card.jnu.edu.cn:8080/accounttodayTrjn.action").text
  func,url,data= auto_form("http://card.jnu.edu.cn:8080",text,r)
  text=func(url,data=normal_data(data)).text
  today_list=[]
  for i in pq(text)(".listbg , .listbg2 "):
    colums=[pq(j).text() for j in pq(i)("td")]
    today_list.append([colums[1],colums[2],colums[3],colums[4],parse(colums[0])    ])#    +relativedelta(minutes=+55)])
  return today_list

def person_data(r):
  text=r.get('http://card.jnu.edu.cn:8080/accountcardUser.action').text
  s=[]
  for i in pq(text)("td.neiwen"):
     s.append( pq(i).text().replace(u'\xa0', u' ')  )
  return s


def rest_data(r):
  s=person_data(r)
  for i in s:
    if i.find(u'余额')>=0:
      return i.split(u'元')[0]
"""
for stui in range(2012050168,2012059999):
  stuid=str(stui)
  print stuid
  f=open(stuid + '.txt',"w")
  try:
    r=login(stuid)
    dd=person_data(r)
    for k in dd:
       print >>f, k.encode('gbk')

  except:
    pass
  f.close()
exit()
"""

last_num=0
stuid="2012052690"
phone="15625128341"



r=login(stuid)
l=months_data(r)
for k in person_data(r):
   print k

for i in l:
  for j in i:
    print j,
  print 
while not time.sleep(1):
  try:

    r=login(stuid)
    
    l=today_data(r)
    #print 'local times',last_num,',live times',len(l),
    if not last_num==len(l):
      #print
      for i in l:
          for k in i:
            print k,
          print 
      last_num=len(l)
      print l[-1:]
      text=l[-1:][0][1]+", "+l[-1:][0][2]+', '+str(l[-1:][0][4])
      #sendsmsex(phone,text)
      sendemail(text)
  except:
    pass

for i in months_data(r):
  print i

```

```
#coding:utf-8
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


#重写
def sendsmsex(phone,msg):
  print msg[:70]
  sendsms(phone,msg[:70])
  time.sleep(4)
  if len(msg)<=70:
     return
  else:
     sendsmsex(phone,msg[70:])



if __name__=='__main__':

  phone="15625128341"
  text=u"""
  SMS模块加载测试
   """

  sendsmsex(phone,text)
```

