title:用Python在Windows下实现Dota2改键
date:2013-12-15-15-55
---
高中一直在玩dota,写过一个卡尔宏和一个 谜团 圣堂一键大招的改建程序.dota1的话是基于War3的.
只要hook指定按键消息 然后post WM_KEYDOWN的消息即可 

```python
hwnd.PostMessage( win32con.WM_KEYDOWN, int)
hwnd.PostMessage( win32con.WM_KEYUP  , int)
```

不过,在dota2这种方式就失效了,我查了很多方法也都不成功.因为post只有两个参数 肯定是没有我需要的解决方案的.后来看到keybd_event函数,但是也不成功.不过我发现有一个很多程序语焉不详的参数
就是第二个参数,很多程序都是简单的给了0完事.之后参考了msdn的文档,发现了这是一个平常用不到的参数,只在 dx程序中有影响

```python
win32api.keybd_event(int,win32api.MapVirtualKey(VK_CODE], 0),win32con.KEYEVENTF_EXTENDEDKEY,0) 
```

使用此winapi函数和参数完美通过. :) 
具体代码我也不公布了,有兴趣可以找我来拿.

