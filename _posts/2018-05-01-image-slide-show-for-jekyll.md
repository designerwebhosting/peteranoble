---
image: /uploads/gugge-post.png
image_alt_tag: guggesites post
title: Easy image slide show for Jekyll static sites.
description: Easy image slide show for Jekyll static sites without plugins.
last_modified_at: 2018-10-07T16:07:43.563Z
categories: computing
comments: true
---
{% assign slideShow = 'https://www.w3schools.com/w3css/img_fjords.jpg,https://www.w3schools.com/w3css/img_lights.jpg,https://www.w3schools.com/w3css/img_mountains.jpg,https://www.w3schools.com/w3css/img_forest.jpg' %}

Posts in the [Jekyll](https://jekyllrb.com "Simple, extendable, static site generator.") static site generator are mostly written using Markdown and adding images is easy. The way they are displayed are not so easily controllable within the markdown editor and multiple images in a slide show, just a complete nigtmare to impliment. Here the [liquid](https://shopify.github.io/liquid/ "Liquid is an open-source template language") 'include' file comes to the rescue.
<!--more-->

I've listed my steps used for Jekyll to impliment image slide shows. 

**1** Create an include html file (slideShow.html) to process your list of image urls for the image slide show. This file can be re-used on various pages or posts with different images. This file is saved in the _includes folder.

{% raw %}
> &lt;div id="gallery">{% for image in include.images %}   
>   &lt;img class="mySlides" src="{{ image }}">{% endfor %}   
>   &lt;button onclick="plusDivs(-1)">&#10094;&lt;/button>   
>   &lt;button onclick="plusDivs(1)">&#10095;&lt;/button>   
> &lt;/div>   
> &lt;script>   
>  var slideIndex = 1;showDivs(slideIndex);   
>  function plusDivs(n) {showDivs(slideIndex += n);}   
>  function showDivs(n) {   
>    var i;   
>    var x = document.getElementsByClassName("mySlides");   
>    if (n > x.length) {slideIndex = 1}    
>    if (n < 1) {slideIndex = x.length}   
>    for (i = 0; i < x.length; i++) {x[i].style.display = "none";}   
>    x[slideIndex-1].style.display = "block";     
>  }  
> &lt;/script>    
{% endraw%}

**2** Add the list of image urls for your image slide show to the YAML front end.

> slideShow:   
> &#45; image1Url   
> &#45; image2Url   
> &#45; Upto how many you want to display.   

**3** Place a liquid include to the image slide show file in your post or page.

> &#123;&#37; include slideShow.html images=page.slideShow &#37;&#125;

**4** Add your styling using css or your website theme classes.

You  now have your image slide show.

{% include modules/slideShow.html images=slideShow %}   

*Image slide show*
{:.w3-center}
