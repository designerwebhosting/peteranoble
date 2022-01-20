---
layout: post
image: /uploads/circles.svg
image_alt_tag: using code to create svg images.
title: Creating inline SVG images within your content.
description: Using svg to create images for your content.
last_modified_at: 2018-10-07T14:03:53.376Z
categories: computing
comments: true
---

Creating images with code may sound difficult and using a drawing app to make svg images may be the easiest method to use. However for simple images a text editor maybe your friend.
<!--more-->

[W3C]((https://www.w3.org "World Wide Web Consortium ") describes SVG or Scalable Vector Graphics on their web as
>"*... a Web graphics language. SVG defines markup and APIs for creating static or dynamic images, capable of interactivity and animation, including various graphical effects. It can be styled with CSS, and combined with HTML.*" [**W3C**](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html)

<svg viewBox="0 0 200 200" style="width:150px;margin-left:20px;">
   <circle cx="100" cy="100" r="100" stroke="red" stroke-width="1" fill="red" />
   <circle cx="100" cy="100" r="60" stroke="yellow" stroke-width="1" fill="yellow" />
    <text x="60" y="100" fill="black">I love SVG!</text>
</svg> 

## A quick look at using SVG.

- Start with svg tags and the view box.

>**&lt;svg viewBox="0 0 200 200"&gt;&lt;/svg&gt;**

>The viewBox attribute specifyies a given set of graphics stretch to fit a particular container element.

- Add the content of the graphic. For our example circles,

>**&lt;circle cx="100" cy="100" r="100" stroke="red" stroke-width="1" fill="red" /&gt;**

>**&lt;circle cx="100" cy="100" r="60" stroke="red" stroke-width="1" fill="yellow" /&gt;**

>cx and cy are the starting points and r is the radius of the circle. fill defines the colour of the circle. Each item sits on top on the previous.

>**&lt;text x="60" y="100" fill="black"&gt;I love SVG!&lt;/text&gt;**

> And perhaps a little text to finnish our graphic. x and y are the starting point with fill being the colour of the text.

- We can add CSS styling to the svg elelement to control its size, background colours and borders.

>**style="width:150px;"**

- We can even use javascript to alter the stying of the elements within the svg.

>**&lt;button onclick="circle1.style.fill='yellow';"&gt;Click to change to yellow&lt;/button&gt;**

> and add an id attribute to the element to be changed.

>**&lt;circle id="cirle1" cx="100" cy="100" r="60" stroke="red" stroke-width="1" fill="yellow" /&gt;**

<svg viewBox="0 0 200 200" style="width:150px;margin-left:20px;">
   <circle id="circle1" cx="100" cy="100" r="100" stroke="red" stroke-width="1" fill="red" />
   <circle cx="100" cy="100" r="60" stroke="yellow" stroke-width="1" fill="yellow" />
    <text id="text" x="60" y="100" fill="black">I love SVG!</text>
</svg> 
<button style="margin-left:20px;" onclick="circle1.style.fill='green';">Click to change to green</button>
<button style="margin-left:20px;" onclick="text.textContent='Text can chaged too.';">Click to change text</button>

For more information and examples of using SVG, checkout the [w3schools website](https://www.w3schools.com/graphics/svg_intro.asp) . For detailed informaion the [W3C website](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) will fill in the spaces.

