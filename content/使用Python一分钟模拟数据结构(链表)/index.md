title:使用Python一分钟模拟数据结构(链表)
date:2014-01-09-18-23
---
做数据结构题时，有一个算法是倒序链表。本来想出来了 可还是有点晕乎。我为了证明,写了如下的代码。

<pre><code>
class Node():
  next=None
  def __init__(self,name):
      self.name=name

a=Node('A')
b=Node('B')
c=Node('C')
d=Node('D')
e=Node('E')
a.next=b
b.next=c
c.next=d
d.next=e

HEAD=a
p=HEAD
p=p.next
HEAD.next=None
while p:
	q=p
	p=p.next
	q.next=HEAD.next
	HEAD.next=q

print HEAD.name
while HEAD.next!=None:
  HEAD=HEAD.next
  print  HEAD.namePython
</code></pre>

结果确实可证。而且C语言到Python转化也十分方便。。基本就是去掉; 然后->变点。NULL变None。。