---
image: /uploads/markdown.png
image_alt_tag: google document parser
title: Google document to Github Flavoured Markdown example.
description: >-
  Example of output from my parser for google documents to Github Flavoured
  Markdow.
last_modified_at: 2018-10-09T22:46:37.327Z
categories: computing
tags:
  - google
  - markdown
  - jekyll
comments: true
---

<link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Syncopate" rel="stylesheet" type="text/css">

The **guggesites** client app uses the Google Document class to collect content pass it through my paser to generate **Github Flavoured Markdown** . The Google Drive API is used to collect image urls for the **Markdown** parser to publish documents on the Github pages server. This page is to demonstrate the current capabilities of the script for converting Google documents to **Markdown**.
{:  style="font-size:14px;margin-bottom:8px;"}<!--more-->

You can checkout the Google document used to create this post and the **[Github Markdown file](https://raw.githubusercontent.com/designerwebhosting/peteranoble.co.uk/master/_posts/2017-05-08-markdown-test.md)**{: style="font-weight:normal; color:#0000ff;"} . The Google document will be updated as features are added or improved.
{:  style="font-size:14px;margin-top:8px;"}

This is an example of **coloured text**{: style="font-weight:normal; color:#ff0000;"} and **sized-text**{: style="font-weight:normal; font-size:24px;"} within a paragraph. **Background colour**{: style="font-weight:normal; background-color:#00ffff;"} is supported.
{:  style="line-height:1;"}

How about using a different font family in a paragraph. In this paragraph we are using Arial Black.
{:  style="font-size:14px;line-height:1;margin-top:8px;font-family:Arial Black;"}

## Paragraphs
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

![](https://lh4.googleusercontent.com/xJ-qjpqV67815I7_o8M2W3LY-FARkAGv1QdcmbsfRQhdJ3Ba8zKcuXys4A1NTe27qHjb_u_g8_0iG85kCBkzx9kHUqHZEEX90u2hP62VZLi8sHU8pPk3h4dSApsUwztOglGv0X_N){: style="width: 70.86px; height: 56.91px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"}{:  .img-responsive }This *paragraph* has links and image. These are links to **[guggesites](http://www.guggsites.co.uk/)**{: style="font-weight:normal; color:#0000ff;"} and **[google](https://www.google.com/)**{: style="font-weight:normal; color:#0000ff;"}. Sometimes text needs to be in **bold** and more **bold**. With a bit of ![](https://docs.google.com/drawings/d/smb2nd_cDjILdIL1fTq81qA/image?parent=1fWF_fcBOVK_mc3qKmM4M3ZS3bELhPiNS5jLHpoPMaTc&amp;rev=52&amp;h=66&amp;w=356&amp;ac=1){: style="width: 356.91px; height: 66.18px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"}{:  .img-responsive }.
{:  style="font-size:14px;"}


{:  style="font-size:14px;"}

## Headings
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

# Title parsed as H1
{:  style="font-size:27px;margin-top:8px;margin-bottom:8px;"}

## Subheading parsed as H2
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

# H1
{:  style="font-size:27px;margin-top:8px;margin-bottom:8px;"}

## H2
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

### H3
{:  style="font-size:18px;margin-top:8px;margin-bottom:8px;color:#000000;"}

#### H4
{:  style="font-size:15px;margin-top:8px;margin-bottom:8px;color:#000000;"}

##### H5
{:  style="font-size:13px;margin-top:8px;margin-bottom:8px;color:#000000;"}

###### H6
{:  style="font-size:12px;margin-top:8px;margin-bottom:8px;color:#000000;"}

## Fonts
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

The parser **supports** Google Document *font selection*. The font family styling is added to the style tag of the paragraph. Web safe fonts can be easily used other fonts will need to be linked to in the html header. However not all browsers have the same level of support for web safe fonts. Arial is the default font and does trigger font family selection. Adding non web safe fonts does impact page load speeds.
{:  style="font-size:14px;"}

This is Garmond.
{:  style="font-size:14px;margin-top:8px;font-family:Garamond;"}

This is Time New Roman.
{:  style="font-size:14px;margin-top:8px;font-family:Times New Roman;"}

This is Comic Sans.
{:  style="font-size:14px;margin-top:8px;font-family:Comic Sans MS;"}

This is Arial Black.
{:  style="font-size:14px;margin-top:8px;font-family:Arial Black;"}

This is Droid Serif.
{:  style="font-size:14px;margin-top:8px;font-family:Droid Serif;"}

This is Syncopate. Not web safe but it’s linked to in the header.
{:  style="margin-top:8px;font-family:Syncopate;"}

## Colour
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

Text colouring and highlighting is support.
{:  style="font-size:14px;"}

This text is red.
{:  style="font-size:14px;color:#ff0000;"}

This text is blue.
{:  style="font-size:14px;color:#0000ff;"}

This text is highlighted yellow.
{:  style="font-size:14px;background-color:#ffff00;"}

This text is coloured blue with grey highlight.
{:  style="background-color:#efefef;color:#0000ff;"}

This text is highlighted orange.
{:  style="font-size:14px;background-color:#ff0000;color:#980000;"}

## Paragraph alignment
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

Headings, images and paragraphs can be aligned on the page. This paragraph is left aligned.
{:  style="font-size:14px;margin-top:8px;"}

Paragraphs can be right aligned.
{:  style="font-size:14px;text-align:Right;margin-top:8px;"}

Paragraphs can justified. Another Paragraphs can justified. More Paragraphs can justified. All Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified. Paragraphs can justified.
{:  style="font-size:14px;text-align:Justify;margin-top:8px;"}

**Images can be aligned as well.**
{:  style="text-align:Center;margin-top:8px;"}

![](https://docs.google.com/drawings/d/snDYYAOeo_ha85H2-68Cqqg/image?parent=1fWF_fcBOVK_mc3qKmM4M3ZS3bELhPiNS5jLHpoPMaTc&amp;rev=8&amp;h=134&amp;w=216&amp;ac=1){: style="width: 216.00px; height: 134.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"}{:  .img-responsive }
{:  style="font-size:12px;text-align:Center;margin-top:8px;"}

## Inline Images
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

![](https://lh4.googleusercontent.com/8WPXOxF_ZYQ3rPBmAXAggV1ob9PXccY4MEq1GBd29ULHygoNrlUysrbO9BCXuT7PCCVMUl7jCIB9wOaKf8objEeNhmUCIFT8qRv_PE_O24T3OZiplqmfY-hh0nooO0deEXb7smP9){: style="width: 147.95px; height: 215.91px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"}{:  .img-responsive }This inline image is at the beginning of the paragraph.


## Inline drawing
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

![](https://docs.google.com/drawings/d/saAMis9MBzvHjVXB-aqk9xg/image?parent=1fWF_fcBOVK_mc3qKmM4M3ZS3bELhPiNS5jLHpoPMaTc&amp;rev=1&amp;h=134&amp;w=216&amp;ac=1){: style="width: 216.00px; height: 134.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"}{:  .img-responsive }
{:  style="margin-top:8px;"}

## Tables
{:  style="font-size:22px;margin-top:8px;margin-bottom:8px;"}

This a simple table using css for styling.
{:  style="font-size:14px;margin-top:8px;"}

|   |   |   |
|---|---|---|
|  **Header**{: style="font-weight:bold; font-size:14px;"}|**Header**|**Header**|
| New col|one|two|
| six|Another row|![](https://lh3.googleusercontent.com/l4SopQ4rW_uC8CgNLidUkwHKcBAui6DHAPZCUwaQjvoQrM8lkWRiLQB6kkW4yLi4zR-zrlD9Fbn2yEuJD7UKQyXZgsWt42lBWN8SUNRGLhYRLpl4muUpQJHHGkfkzD2HbPxluWL4){: style="width: 96.91px; height: 161.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"}{:  .img-responsive }|
| bold text in a table|Images and links can be used within a table.|[This should be a link within a table.](https://peteranoble.co.uk/)|
{:  style="border-color:#000000;border-width:1.5px;"}
{:.table}

