---
title: jQuery Mobile Active Page URL
date: "2013-02-13T19:40:25.169Z"
layout: post
path: "/jquery-mobile-active-page-url/"
id: 418
---

[jQuery mobile](http://alexbachuk.com/jquery-mobile-basics/ \"jQuery Mobile basics\") contains several pages in DOM at once to make page transition smooth and fast, and also pre-caching static pages. If you need to get current URL, and decided to use

`window.location.href` – it will return previous page URL, because active page is inserted into the DOM via AJAX.
To get current page URL use `$.mobile.activePage[0].baseURI`
