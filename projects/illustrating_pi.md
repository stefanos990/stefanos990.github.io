---
layout: project
title: Illustrating Pi
---
<div class="message">
  What is "Pi"?
</div>

The number π is a mathematical constant, the ratio of a circle's circumference to its diameter, commonly approximated as 3.14159. It has been represented by the Greek letter "π" since the mid-18th century, though it is also sometimes spelled out as "pi" (/paɪ/).

Being an irrational number, π cannot be expressed exactly as a common fraction, although fractions such as 22/7 and other rational numbers are commonly used to approximate π. Consequently its decimal representation never ends and never settles into a permanent repeating pattern. The digits appear to be randomly distributed; however, to date, no proof of this has been discovered.

More on Pi: <a href="http://en.wikipedia.org/wiki/Pi" target="_blank">Wikipedia</a>

<div class="message">
  The Illustration Concept
</div>

So what's the concept here? I thought, what if I could match each of pi's digits to a direction and then draw some of them to see the illustration of some of pi's digits? And so I did. Here is the matching table and the direction concept explained graphically.

<table align="center">
  <tr>
    <th>Digit</th>
    <th>Angle</th>		
    <th>Direction</th>
    <th>Compass</th>
  </tr>

  <tr>
    <td align="center">1</td>
    <td align="center">0°</td>		
    <td align="center">East</td>
    <th rowspan="9"><img src="compass.png" alt="Compass" style="width:75%"> </th>
  </tr> 

  <tr>
    <td align="center">2</td>
    <td align="center">45°</td>		
    <td align="center">Northeast</td>
  </tr> 

  <tr>
    <td align="center">3</td>
    <td align="center">90°</td>		
    <td align="center">North</td>
  </tr> 

   <tr>
    <td align="center">4</td>
    <td align="center">135°</td>		
    <td align="center">Northwest</td>
  </tr> 

   <tr>
    <td align="center">5</td>
    <td align="center">180°</td>		
    <td align="center">West</td>
  </tr> 

   <tr>
    <td align="center">6</td>
    <td align="center">225°</td>		
    <td align="center">Southwest</td>
  </tr> 

   <tr>
    <td align="center">7</td>
    <td align="center">270°</td>		
    <td align="center">South</td>
  </tr>  

  <tr>
    <td align="center">8</td>
    <td align="center">315°</td>		
    <td align="center">Southeast</td>
  </tr> 

   <tr>
    <td align="center">9</td>
    <td align="center">360°</td>		
    <td align="center">East</td>
  </tr>    
</table>
<br>

<div class="message">
  The Code Implementation
</div>

Since I kinda like Python, I used turtle library with Python to read pi's first 10k digits from a text file, put them in a list and then after the matching method let the turtle make some drawing!

<div><python>
from turtle import*
reset()

def move(digit,d):
    if digit!=0:
        left((digit-1)*45)      
        forward(d)
    return

pencolor('white')
sety(150)
pencolor('black')
speed(0)
width(1)

fd = open('pi10k.txt','rU')
pi_digits = [3]
for line in fd:
   for c in line:
       d=int(c)
       pi_digits.append(d)
       
for member in pi_digits:
    move(member,5)
</python></div>

<div>
<iframe src="//www.facebook.com/plugins/share_button.php?href=http://stefanos990.com/blog/first/&amp;layout=button_count&amp;appId=460671367340473" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:85px;" allowTransparency="true"></iframe>

<iframe id="tweet-button" allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?via=stefanos990&amp;count=horizontal&amp;url=http://stefanos990.com/blog/first/&amp;text=First Blog Post"></iframe>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58975019-1', 'auto');
  ga('send', 'pageview');

</script>