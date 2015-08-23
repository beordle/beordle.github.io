title:对Qzone的研究
date:2010-05-22-02-24
---
最近闲着没有事情做，随便接着研究Qzone，之后便写成了如下程序。这个程序比较无厘头，什么也没有做。不过可以运行在Google App Engine上，不停的浏览某个人的Qzone。唯一不足的是似乎腾讯限制了那个”我看过谁“的次数，浏览很多次后就不被记录了。呵呵。有一部分的代码（鉴权部分）是我以前写的QQalbum里面的.

<pre><code>
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
#TAG 列表，没嘛用
#http://b.cnc.qzone.qq.com/cgi-bin/blognew/blog_get_taglists?reqtype=0&loginuin=373866172&hostuin=790448668&reqtype=0&rnd=1274492168690&g_tk=561036914
#未知用途
#http://statistic.qzone.qq.com/cgi-bin/staytime_stat.cgi?muin=790448668&guin=373866172&stay_time=48.37
#日志列表
#http://b.cnc.qzone.qq.com/cgi-bin/blognew/blog_output_toppage?uin=790448668&vuin=373866172&property=GoRE&getall=1&styledm=cnc.qzonestyle.gtimg.cn&imgdm=cnc.qzs.qq.com&bdm=b.cnc.qzone.qq.com&cate=&numperpage=15&maxlen=68&sorttype=0&arch=0&pos=0&direct=1&timestamp=1274492105&rand=0.33242965893257204
#激动中，终于可以登录 QZONE 了
#官方 JavaScript 的实现, 我翻译了一下
#我搞了老半天呢...

def c(s):
    #编码辅助小函数 #utf2gbk
    return s.decode("utf-8").encode("gbk")


import urllib,urllib2,hashlib

def getverifycode(uin):
    " 返回临时的验证码 "
    def ptui_checkVC(a,verifycode):
        return verifycode
    code="http://ptlogin2.qq.com/check?uin="+uin+"&appid=15004501&r=0.8188270020846197"
    return eval(urllib2.urlopen(code).read()[:-1])

def preprocess(password,verifycode):
    " 将密码进行 2 次 MD5 为 A，将 A 再次 MD5(但是以大写 HEX 文本方式输出) 与加上验证码的大写形式合并字符串, 再次 MD5 为 HEX 文本 """
    def md5_3(s):
        return hashlib.md5(hashlib.md5(hashlib.md5(s).digest()).digest()).hexdigest().upper()
    def md5(s):
        return hashlib.md5(s).hexdigest().upper()
    return md5(md5_3(password)+verifycode.upper())

def enablecookie():
    " 启用 Cookie"
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor())
    urllib2.install_opener(opener)

def login(uin,password):
    "Qzone 登录, 返回 True 为成功，False 为登录失败 "
    def ptuiCB(a,b,c,d):
        if c=="http://imgcache.qq.com/qzone/v5/loginsucc.html":
            return True
        else:
            return False
    enablecookie()
    verifycode=getverifycode(uin)
    p=preprocess("zhangjindong",verifycode)
    page="http://ptlogin2.qq.com/login?u="+uin+"&p="+ p +"&verifycode="+verifycode+"&aid=15004501&u1=http%3A%2F%2Fimgcache.qq.com%2Fqzone%2Fv5%2Floginsucc.html&h=1&ptredirect=0&ptlang=2052&from_ui=1&dumy=&fp=loginerroralert"
    return eval(urllib2.urlopen(page).read()[:-3])

def setfootprint(hostuin,uin):
    """
    如果不出意外的话应该是返回如下的字典，就我对 QZONE 的了解我所能知道的含义是
    love 爱心指数
    rain 雨露指数
    dayvisit 当日浏览次数
    level 等级
    sun 阳光指数
    visitcount 总浏览次数
    {'love': 746, 'rain': 1111, 'nutri': 399, 'dayvisit': 48, 'retcode': 1, 'level':
     5, 'sun': 1974, 'markchange': 0, 'visitcount': 2992, 'spacemark': 0, 'gardener'
    : 8}
    """

    def visitCountCallBack(dic):
        return dic
    page="http://g.cnc.qzone.qq.com/fcg-bin/cgi_emotion_list.fcg?uin="+hostuin+"&loginUin="+uin+"&s=885292"
    return eval(urllib2.urlopen(page).read()[:-1])

def getnick(uin):
    """
    得到指定 QQ 的昵称
    支持多 QQ。如'373866172,99480963'
    返回诸如以下结果
    {"99480963":["http://imgcache.qq.com/qzone_v4/client/userinfo_icon/5001.gif",3,0,0,0,0," snow",0],"373866172":["http://qlogo1.store.qq.com/qzonelogo/373866172/1/1274489190",383,3,0,0,0,"Pure Gold",0]}
    """
    def portraitCallBack(dic):
        return dic
    page="http://base.cnc.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins="+uin+"&get_nick=1"
    return eval(urllib2.urlopen(page).read()[:-1])

def getrightquestion(uin):
    #获取 Qzone 鉴权问题, 暂时只返回第一个问题，返回多个我用不到
    def _Callback(a):
        return a["items"][0]["q"].decode("utf-8").encode("gbk")
    r = urllib2.Request("http://base.qzone.qq.com/cgi-bin/right/get_rightquestion_only.cgi?uin="+uin)
    return eval(urllib2.urlopen(r).read()[:-2])

def rightquestion(uin,answer,question):
    #Qzone 鉴权
    url = "http://base.qzone.qq.com/cgi-bin/user/cgi_auth"
    params = urllib.urlencode([
        ('uin',uin),
        ('mode','2'),
        ('answer',answer),
        ('question',question),
        ])
    req = urllib2.Request(url)
    return urllib2.urlopen(req,params).read().find(c(" 鉴权成功 "))!=-1

#虽然写了，但是我也不知道干嘛用的
def keepalive(hostuin,uin):
    page="http://statistic.qzone.qq.com/cgi-bin/staytime_stat.cgi?muin="+hostuin+"&guin="+uin+"&stay_time=19.215&clickstream="
    return urllib2.urlopen(page).read()


#登录, 重试几次，以免登陆不上
x=0;success=0
while (not success) and x<3:
    success=login("373866172","zhangjindong")
    x+=1

print success and c(" 登录成功 ") or c(" 登录失败 "),c(" 尝试 "),x,c(" 次 ")

#模拟浏览，留下一个最近访客的记录
print setfootprint("164752478","373866172")
print rightquestion('425315602',c(" 回答问题 "),getrightquestion('425315602'))and c(" 验证成功 ") or c(" 验证失败 ")
</code></pre>
										