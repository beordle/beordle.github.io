title:Arduino利用NTC 10D-9热敏电阻实现低成本测温
date:2012-07-02-13-39
---
最近在淘宝上购置了很多东西，其中包括NTC 10D-9热敏电阻.才 0.18元，买了6个想做东西。可以做成一个基本无成本的测温系统 以下记录过程
<!--more-->

查询了一下资料,温度与电阻是有函数关系的。

Rt = R *EXP(B*(1/T1-1/T2))

对上面的公式解释如下：

1. Rt 是热敏电阻在T1温度下的阻值；

2. R是热敏电阻在T2常温下的标称阻值；

3. B值是热敏电阻的重要参数；

4. EXP是e的n次方；

5. 这里T1和T2指的是K度即开尔文温度，K度=273.15(绝对温度)+摄氏度；

查询DataSheet得知我用的NTC 10D-9热敏电阻为10欧姆(标准25度), B值是3000

值得注意的是，Exp和ln是反函数，但在Arduino中,math.h库则只有log10和log，log就是ln(非常奇怪)

我导出了它的另一个形式T1=1/(ln(Rt/R) /B + 1/T2 )连接方式为100ohm普通电阻同NTC串联接入3.3V-GND,用A0-GND测量NTC电压。

代码如下
<pre>

#include void setup(){
Serial.begin(9600);
}
void loop(){
double val=analogRead(0);
double fenya=(val/1023)*5;
// 欧姆定律 r/100=fenya/(3.3-fenya)
double r=fenya/(3.3-fenya)*100;
Serial.println( 1/( log(r/10) /3000 + 1/(25+273.15) )-273.15);
delay(1000);
}
</pre>
另外要注意的是,analogRead的单位一般是.0049 volts (4.9 mV) per unit,这个非常坑爹，我调试了半天。





<blockquote>
5 volts / 1024 units or, .0049 volts (4.9 mV) per unit. The input range and resolution can be changed using analogReference().

It takes about 100 microseconds (0.0001 s) to read an analog input, so the maximum reading rate is about 10,000 times a second.

Syntax

analogRead(pin)

Parameters

pin: the number of the analog input pin to read from (0 to 5 on most boards, 0 to 7 on the Mini and Nano, 0 to 15 on the Mega)
</blockquote>



对我来说已经足够精确，而且我这种连接并不是很精确，有很大的提升空间

以下记录了我手握电阻后的温度变化情况

<pre>
27.42
27.42
27.42
27.42
27.42
27.42
27.42
27.42
27.42
27.42
28.60
29.83
30.46
31.11
31.11
31.77
31.77
32.45
32.45
33.14
33.14
33.14
33.14
33.14
33.14
33.85
33.14
33.14
33.85
33.85
33.85
33.85
33.85
33.85
33.85
33.85
33.85
33.85
33.85
33.85
33.85
</pre>
不足：100ohm发热的很厉害,所以阻值会改变,所以越来越不准改进也很简单:使用低电压就可降低发热。要达到足够精确需要串联的电阻越接近NTC越好。（因为用了欧姆定律，而Read的却是int值）或者也可以使用标称电阻大些的热敏电阻