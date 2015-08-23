#!/usr/bin/env xcrun python
# coding:utf-8
from mapper import Sandbox,Sandboxs
from jinja2 import Template
from pyquery import PyQuery as pq
from pathlib import Path
from jinja2 import Environment, PackageLoader

SRC='content'
OUTPUT='.'
POSTS_NUM=20
debug=True

#Pelican兼容
AUTHOR=u'Beordle'
INTRO=u'</br>这里隐藏了</br>许多可能有用的东西喔</br>基于知识共享协议'
if debug:
    base_url='/Volumes/HDD/git/blog'
else:
    base_url=''

static_url=base_url+'/static'

env = Environment(loader=PackageLoader('app', 'static'))

def lazy_cached_load(name):
    a=Path(name)
    return a.open().read()

def render(name,**args):
    template = env.get_template(name)
    return template.render(**args)


all_posts=Sandboxs(path=SRC).all().values()
for i in range(len(all_posts)/POSTS_NUM+1):
    posts=all_posts[i * POSTS_NUM:i * POSTS_NUM + POSTS_NUM]
    has_next= i * POSTS_NUM+POSTS_NUM < len(all_posts)
    has_pre= not i==0

    output=Path(OUTPUT)
    pre_url=("index-%d.html" %(i))
    cur_url=("index-%d.html" %(i+1))
    next_url=("index-%d.html" %(i+2))
    
    if i+1==2:
        pre_url=("index.html")
    if i+1==1:
        cur_url=("index.html")

    if not i+1==1:
        f=output / cur_url
    else:
        f=output / cur_url

    f.open('wb').write(render('category.html', **locals()).encode('utf-8'))
for sandbox in all_posts:
    f=sandbox.path / 'index.html'
    f.open('wb').write(render('single.html', **locals()).encode('utf-8'))