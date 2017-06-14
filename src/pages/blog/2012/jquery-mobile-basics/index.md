---
title: jQuery Mobile basics
date: "2012-07-18T18:15:32.169Z"
layout: post
path: "/jquery-mobile-basics/"
---

[](http://alexbachuk.com/wp-content/uploads/2012/07/jquerymobile.png \"jquerymobile\")\n\n[jQuery Mobile](http://jquerymobile.com/) is touch friendly and AJAX powered framework which was built by jQuery team.\n\nIt is a great framework for building mobile websites or apps and if combine it with responsive design – it becomes even better.  Nowadays everyone knows that the best way to build a website is responsive way,  a “*write once*, run everywhere” style.\n\njQuery mobile uses AJAX for page loading and provides flexible theming tool – [theme roller](http://jquerymobile.com/themeroller/),  default theme is very iOS-like, but it’s very easy to change just changing default CSS. There is even a way to disable JQMF formatting just apply data-role=none and the element will be “untouched”.\n\nThe page structure is straightforward *header, content, footer*. The framework uses HTML5 “data” attribute, which is great for W3C validation.

It’s possible to use multi-page or single-page templates.

### Single Page Templates
are good for single simple page or multiple pages with similar content such page with dialog box or sub-categories. There can be  as many *<div data-role=”page”>* sub-pages  as needed inside one file. The only content is visible is the first *data-role=”page”* content when the page loads.

### Multi Page Templates
are just regular HTML pages with appropriate data attributes. The frameworks adds AJAX [transition](http://jquerymobile.com/demos/1.1.1/docs/pages/page-transitions.html) between the pages (pop, slide, fade, etc). External links can (and should) be treated in different way by adding *rel=”external”* to *<a href>* element.

I created starting template for JQMF project, you can download it [github](https://github.com/abachuk/jQueryMobile-starting-template)",
