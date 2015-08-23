import markdown
from pyquery import PyQuery as pq
from pathlib import Path
import arrow
import fakeredis
import hashlib
r = fakeredis.FakeStrictRedis()

def _Unicode(x):
    for _ in ('utf-8','gbk'):
        try:
            return x.decode(_)
        except:
            pass
    return x

class Sandbox():
    def __init__(self,i):
            self.path=i
            index= i / 'index.md'
            if not (index).exists():
                assert 1==0,'not a vaild path'
            with index.open(encoding='utf-8') as f:
                content=f.read()

                print index
                self.solve_index_markdown(content)
    def hash(self):
        return hashlib.md5( _Unicode(self.path.parts[-1]).encode('utf-8') ).hexdigest()
    def solve_index_markdown(self,content):
        temp=content.split('---\n')
        if len(temp)==1:
            content=temp
            meta={}
            #no meta
        else:
            meta,content=temp
            #resolve meta info to dict
            meta=dict([  (line[ :line.index(':') ] ,line[ line.index(':')+1: ]   ) for line in meta.splitlines() if ':' in line ])
        self.meta=meta
        self.process_meta_info()
        self.content=content
        self.process_content()
    def process_content(self):
        self.html=markdown.markdown(self.content,extras=['fenced-code-blocks','tables'])


    def process_meta_info(self):
        all_meta_set=self.meta.keys()

        if 'date' in all_meta_set:
            try:
                self.date=arrow.get(self.meta['date'], 'YYYY-MM-DD-HH-mm') 
            except:
                self.date=arrow.get('2000-01-01-00-00-00', 'YYYY-MM-DD-HH-mm') 
        self.key=_Unicode(self.path.parts[-1])
        if 'title' in all_meta_set:
                self.title=self.meta['title']
        else:
                self.title=self.key

    def url_for(self,name):
        url=self.path / name
        if url.exists():
            return url
        else:
            return None
    def buffer_for(self,name):
        _=self.url_for(name)
        if _:
            return _.open('br').read()
        else:
            return None

class Sandboxs():
    def __init__(self,**w):
        self.sandboxs=[x for x in Path(w['path']).iterdir() if x.is_dir()]
    def all(self):
        self.map={i.key:i for i in [Sandbox(x) for x in self.sandboxs] }
        return self.map
if __name__=="__main__":
    docs= Sandboxs(timeout=180).all()
    for i in docs.values():
        print i.title.encode('utf-8')
        print i.html
        print i.hash()
        print len(i.buffer_for('jnu.png'))
        #print Sandbox
