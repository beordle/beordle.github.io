#!/usr/bin/env xcrun python
# coding:utf-8
from mapper import Sandbox,Sandboxs
from jinja2 import Template
from pyquery import PyQuery as pq
from pathlib import Path
from jinja2 import Environment, PackageLoader

SRC='content'
OUTPUT='.'
POSTS_NUM=15

env = Environment(loader=PackageLoader('app', 'static'))

def lazy_cached_load(name):
    print ('initing %s..'% name)
    a=Path(name)
    return a.open().read()

def render(name,**args):
    template = env.get_template(name)
    return template.render(**args)


all_posts=Sandboxs(path=SRC).all().values()
for i in range(len(all_posts)/POSTS_NUM+1):
    posts=all_posts[i * POSTS_NUM:i * POSTS_NUM + POSTS_NUM]
    has_more= i * POSTS_NUM+POSTS_NUM < len(all_posts)
    print posts
    output=Path(OUTPUT)
    if not i+1==1:
        f=output / ("index-%d.html" %(i+1))
    else:
        f=output / "index.html"
    f.open('wb').write(render('category.html', **locals()).encode('utf-8'))
for sandbox in all_posts:
    f=output / 'content' / (sandbox.title.encode('utf-8')+'.html')
    f.open('wb').write(render('single.html', **locals()).encode('utf-8'))