---
author: alex
categories:
- web development
comments: true
date: 2012-07-18T19:15:18Z
link: http://alexbachuk.com/jquery-mobile-basics/
slug: jquery-mobile-basics
tags:
- jquery
- mobile web development
- web development
title: jQuery Mobile basics
url: /2012/07/18/jquery-mobile-basics/
wordpress_id: 15
---

![](http://alexbachuk.com/wp-content/uploads/2012/07/jquerymobile.png)

[jQuery Mobile](http://jquerymobile.com/) is touch friendly and AJAX powered framework which was built by jQuery team.

It is a great framework for building mobile websites or apps and if combine it with responsive design - it becomes even better.  Nowadays everyone knows that the best way to build a website is responsive way,  a “_write once_, run everywhere” style.

jQuery mobile uses AJAX for page loading and provides flexible theming tool - [theme roller](http://jquerymobile.com/themeroller/),  default theme is very iOS-like, but it's very easy to change just changing default CSS. There is even a way to disable JQMF formatting just apply data-role=none and the element will be "untouched".

The page structure is straightforward _header, content, footer_. The framework uses HTML5 "data" attribute, which is great for W3C validation.

It's possible to use multi-page or single-page templates.



### Single Page Templates


are good for single simple page or multiple pages with similar content such page with dialog box or sub-categories. There can be  as many _<div data-role="page">_ sub-pages  as needed inside one file. The only content is visible is the first _data-role="page"_ content when the page loads.


### Multi Page Templates


are just regular HTML pages with appropriate data attributes. The frameworks adds AJAX [transition](http://jquerymobile.com/demos/1.1.1/docs/pages/page-transitions.html) between the pages (pop, slide, fade, etc). External links can (and should) be treated in different way by adding _rel="external"_ to _<a href>_ element.

I created starting template for JQMF project, you can download it [github](https://github.com/abachuk/jQueryMobile-starting-template)

