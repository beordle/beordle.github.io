title:多功能操作QQ空间的机器人(Airzonexplorer)
date:2010-05-23-07-58
---
这是一个能够操纵QQ空间的Python的类，基本功能大概 有刷空间，或者是自动发个人状态，查看好友资料等等。这个脚本花了我两天时间(2010.5.22,2010.5.23)现在终于是成了样子了。而且这个脚本可以在Google App Engine上运行（花了一下午调试）。 以后可以在此基础上做一个心情机器人（自动把你在干什么更新，不过未完成）或是踩空间的机器人了（这个已经已完成，今天刷了400次。因为一个QQ只能刷100次） 不久的将来会提供下载 
<pre>
#coding:utf-8
#function preprocess(A)
#{var B="";B+=A.verifycode.value;B=B.toUpperCase();A.p.value=md5(md5_3(A.p.value)+B);return true}
#function md5_3(B)
#{var A=new Array;A=core_md5(str2binl(B),B.length*chrsz);A=core_md5(A,16*chrsz);A=core_md5(A,16*chrsz);return binl2hex(A)}
#function md5(A)
#{return hex_md5(A)}
#http://ptlogin2.qq.com/check?uin=373866172&appid=15004501&r=0.8188270020846197
#http://ptlogin2.qq.com/login?u=373866172&p=C9963335029726E3FF5A39D90171763A&verifycode=!M71&aid=15004501&u1=http%3A%2F%2Fimgcache.qq.com%2Fqzone%2Fv5%2Floginsucc.html&h=1&ptredirect=0&ptlang=2052&from_ui=1&dumy=&fp=loginerroralert
#尚未模拟的请求
#日记分类
#http://b.cnc.qzone.qq.com/cgi-bin/blognew/blog_get_category?uin=790448668&r=0.6558689336575223&g_tk=561036914
#日志信息
#http://b.cnc.qzone.qq.com/cgi-bin/blognew/blog_get_countlist?type=1&uin=790448668&blogids=1274281473&blogids=1274191926&blogids=1273668455&blogids=1273500595&blogids=1273231895&blogids=1272793772&blogids=1272549604&blogids=1272446999&blogids=1272101325&blogids=1271562898&blogids=1271431993&blogids=1271075298&blogids=1270642953&blogids=1270393847&blogids=1268999236&r=0.8619854742499127&g_tk=561036914
#TAG列表，没嘛用
#http://b.cnc.qzone.qq.com/cgi-bin/blognew/blog_get_taglists?reqtype=0&loginuin=373866172&hostuin=790448668&reqtype=0&rnd=1274492168690&g_tk=561036914
#未知用途
#http://statistic.qzone.qq.com/cgi-bin/staytime_stat.cgi?muin=790448668&guin=373866172&stay_time=48.37
#日志列表
#http://b.cnc.qzone.qq.com/cgi-bin/blognew/blog_output_toppage?uin=790448668&vuin=373866172&property=GoRE&getall=1&styledm=cnc.qzonestyle.gtimg.cn&imgdm=cnc.qzs.qq.com&bdm=b.cnc.qzone.qq.com&cate=&numperpage=15&maxlen=68&sorttype=0&arch=0&pos=0&direct=1&timestamp=1274492105&rand=0.33242965893257204
#激动中，终于可以登录QZONE了
#官方JavaScript的实现,我翻译了一下
#我搞了老半天呢...

import urllib,urllib2,hashlib

class QQZone():
  def __init__(self):
    try:
      from google.appengine.api import urlfetch
      self.cookie=True
    except:
      self.cookie=None
    self.enablecookie()

  def c(self,s):
    #编码辅助小函数#utf2gbk
    return s.decode("utf-8").encode("gbk")

  def getverifycode(self,uin):
    "返回临时的验证码"
    def ptui_checkVC(a,verifycode):
      return verifycode
    code="http://ptlogin2.qq.com/check?

uin="+uin+"&appid=15004501&r=0.8188270020846197"
    return eval(urllib2.urlopen(code).read()[:-1])

  def preprocess(self,password,verifycode):
    "将密码进行2次MD5为A，将A再次MD5(但是以大写HEX文本方式输出)与加上验证码的大写

形式合并字符串,再次MD5为HEX文本"""
    def md5_3(s):
      return hashlib.md5(hashlib.md5(hashlib.md5(s).digest()).digest

()).hexdigest().upper()
    def md5(s):
      return hashlib.md5(s).hexdigest().upper()
    return md5(md5_3(password)+verifycode.upper() )

  def enablecookie(self):
    "启用Cookie"
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor())
    urllib2.install_opener(opener)

  def login(self,uin,password):
    "Qzone登录,返回True为成功，False为登录失败"
    def ptuiCB(a,b,c,d):
      if c=="http://imgcache.qq.com/qzone/v5/loginsucc.html":
         return True
      else:
         return False

    def logincookie(cookie):
      #QZone对Cookie有着严格的要求
      ret = ''
      for v in cookie.values():
        if v.key in ["skey","uin","ptcz","pt2gguin"]:
          ret += '%s=%s; ' % (v.key, v.value)
      return ret[:-2]
    self.password=password
    self.uin=uin
    if self.cookie!=None:
      verifycode=self.getverifycode(uin)
      p=self.preprocess(password,verifycode)
      page="http://ptlogin2.qq.com/login?u="+  uin  +"&p="+   p   

+"&verifycode="+  verifycode  +"&aid=15004501&u1=http%3A%2F%2Fimgcache.qq.com%

2Fqzone%2Fv5%

2Floginsucc.html&h=1&ptredirect=0&ptlang=2052&from_ui=1&dumy=&fp=loginerroralert"
      req = urllib2.Request(page)
      req=urllib2.urlopen(req)
      try:
        setcookie=req.headers['Set-Cookie']
      except:
        return
      if eval(req.read()[:-3])==True:
        import Cookie
        setcookie=Cookie.SimpleCookie(setcookie)
        self.cookie=logincookie(setcookie)
      else:
        return
    verifycode=self.getverifycode(uin)
    p=self.preprocess(password,verifycode)
    page="http://ptlogin2.qq.com/login?u="+  uin  +"&p="+   p   +"&verifycode="+  

verifycode  +"&aid=15004501&u1=http%3A%2F%2Fimgcache.qq.com%2Fqzone%2Fv5%

2Floginsucc.html&h=1&ptredirect=0&ptlang=2052&from_ui=1&dumy=&fp=loginerroralert"
    return eval(urllib2.urlopen(page).read()[:-3])





  def footprint(self,hostuin):
#  """
#如果不出意外的话应该是返回如下的字典，就我对QZONE的了解我所能知道的含义是
#love爱心指数
#rain雨露指数
#dayvisit当日浏览次数
#level等级
#sun阳光指数
#visitcount总浏览次数
#{'love': 746, 'rain': 1111, 'nutri': 399, 'dayvisit': 48, 'retcode': 1, 'level':
# 5, 'sun': 1974, 'markchange': 0, 'visitcount': 2992, 'spacemark': 0, 'gardener'
#: 8}
#"""
    def visitCountCallBack(dic):
      return dic
    url="http://g.cnc.qzone.qq.com/fcg-bin/cgi_emotion_list.fcg?

uin="+hostuin+"&loginUin="+self.uin+"&s=885292"

    if self.cookie!=None:
       headers = { 'Cookie' : self.cookie }
       req = urllib2.Request(url, None, headers)
    else:
       req = urllib2.Request(url)

    response = urllib2.urlopen(req)
    try:
      return eval(response.read()[:-1])
    except:
      return False

  def getnick(self,uin):
    """
  得到指定QQ的昵称
支持多QQ。如'373866172,99480963'
返回诸如以下结果
{"99480963":

["http://imgcache.qq.com/qzone_v4/client/userinfo_icon/5001.gif",3,0,0,0,0," 

snow",0],"373866172":

["http://qlogo1.store.qq.com/qzonelogo/373866172/1/1274489190",383,3,0,0,0,"Pure 

Gold",0]}
    """
    def portraitCallBack(dic):
      return dic
    page="http://base.cnc.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?

uins="+uin+"&get_nick=1"
    return eval(urllib2.urlopen(page).read()[:-1]) 

  def getrightquestion(self,uin):
    #获取Qzone鉴权问题,暂时只返回第一个问题，返回多个我用不到
    def _Callback(a):
      return a["items"][0]["q"].decode("utf-8").encode("gbk")
    r = urllib2.Request("http://base.qzone.qq.com/cgi-

bin/right/get_rightquestion_only.cgi?uin="+uin)
    return eval(urllib2.urlopen(r).read()[:-2])

  def rightquestion(uin,answer,question):
   #Qzone鉴权
   #GET
    url = "http://base.qzone.qq.com/cgi-bin/user/cgi_auth"
    params = urllib.urlencode([
      ('uin',uin),
      ('mode','2'),
      ('answer',answer),
      ('question',question),
      ])
    req = urllib2.Request(url)
    return urllib2.urlopen(req,params).read().find(c("鉴权成功"))!=-1

#虽然写了，但是我也不知道干嘛用的
  def keepalive(self,hostuin,uin):
    page="http://statistic.qzone.qq.com/cgi-bin/staytime_stat.cgi?

muin="+hostuin+"&guin="+uin+"&stay_time=19.215&clickstream="
    return urllib2.urlopen(page).read()


  def buddystate(self):
    page="http://sns.qq.com/buddy_state/feed/?webqq_t=1274502131581"
    text=urllib2.urlopen(page).read()
    a=eval( text[text.index("=")+1:-1] )["result"]
    return a#有个重大未解决问题

  def ownqqmel(self):
    #印象
    page="http://apps.qq.com/app/yx/cgi-bin/show_mel?

hc=8&lc=4&time=1274502131586"
    return urllib2.urlopen(page).read().decode("utf-8")

  def qqmel(self):
    #印象
    page="http://apps.qq.com/app/yx/cgi-bin/get_web_feeds?

hc=6&lc=4&c=20&u1=913073915&u2=499986297&u3=164752478&u4=610001229&u5=790448668&u

6=676233546&u7=313057725&u8=451307297&u9=312297502&u10=691374207&u11=1103177265&u

12=741448752&u13=652393872&u14=540601476&u15=377206775&u16=425315602&u17=44491996

4&u18=472820903&u19=100985700&u20=956232214&webqq_t=1274502132420"
    return urllib2.urlopen(page).read().decode("utf-8")

  def weather(self):
    #当地天气  GAE不可用
    page="http://www.soso.com/tb.q?

fn=WEBQQ.obj.QQClient.mainPanel.handleLoadWeather"
    return urllib2.urlopen(page).read().decode("utf-8")

  #登录,重试几次，以免登陆不上
  def trylogin(self,uin,password,times=6):
    self.uin=uin
    self.password=password
    x=0;success=False
    while (not success) and x<times:
      success=self.login(uin,password)
      x+=1
    return success

  def setpublish(self,text,sync=False):
      #text必须是UTF-8编码才行,以qm开头代表同步到QQ签名
      if sync==True:
        text="qm"+text
      url = "http://taotao.qq.com/cgi-bin/emotion_cgi_publish"
      search = urllib.urlencode([('con',text),('who','1')])
      if self.cookie!=None:
        headers={'Cookie':self.cookie}
        req = urllib2.Request(url,None,headers)
      else:
        req = urllib2.Request(url)
      fd = urllib2.urlopen(req,search)
      return
  #获得某人个人信息
  def infocard(self,hostuin):
  #{'astro': 11, 'offsetBirth': 311, 'from': '\xe5\x8d\x97\xe5\xbc\x80', 'qzone': 

2, 'avatarUrl': 'http://qlogo1.store.qq.com/qzonelogo/373866172/1/1274489190', 

'isFriend': 1, 'nickname': 'Pure Gold', 'uin': 373866172}
    def _Callback(dic):
      return dic
    page="http://base.cnc.qzone.qq.com/cgi-bin/user/cgi_personal_card?

uin="+hostuin
    text=urllib2.urlopen(page).read()
    return eval(text[:text.index(";")])
  #获得最近的个人状态更新
  def lastpublish(self,hostuin):
    """callback({
   "archive" : 1,
   "items" : [
      {
         "archive" : -1,
         "comment" : 0,
         "effect" : -1,
         "expression" : -1,
         "id" : "bcbe4816f1c5f84ba5560400",
         "pubDate" : "2010-05-23 14:06:41",
         "pubTime" : "约1小时前",
         "title" : "有了这些机器人，以后做事方便了许多..."
      }
   ]
}
)"""
    def callback(dic):
      return dic["items"]
    page="http://taotao.qq.com/cgi-bin/emotion_cgi_firstutf8?uin="+hostuin
    text=urllib2.urlopen(page).read()
    return eval(text)
</pre>
