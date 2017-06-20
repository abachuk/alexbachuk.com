---
author: alex
categories:
- web development
comments: true
date: 2013-02-13T19:40:22Z
link: http://alexbachuk.com/jquery-mobile-active-page-url/
slug: jquery-mobile-active-page-url
tags:
- jquery mobile
- mobile web development
- quick tip
title: jQuery Mobile Active Page URL
url: /2013/02/13/jquery-mobile-active-page-url/
wordpress_id: 418
---

[jQuery mobile](http://alexbachuk.com/jquery-mobile-basics/) contains several pages in DOM at once to make page transition smooth and fast, and also pre-caching static pages. If you need to get current URL, and decided to use 
    
    window.location.href

- it will return previous page URL, because active page is inserted into the DOM via AJAX.
To get current page URL use 
    
    $.mobile.activePage[0].baseURI
