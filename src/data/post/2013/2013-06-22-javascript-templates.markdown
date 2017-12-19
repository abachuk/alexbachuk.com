---
author: alex
categories:
- JavaScript
comments: true
date: 2013-06-22T16:23:57Z
link: http://alexbachuk.com/javascript-templates/
slug: javascript-templates
tags:
- Backbone.js
- JavaScript
- underscore.js
title: JavaScript templates
url: /2013/06/22/javascript-templates/
wordpress_id: 563
---

![javascript-templates](http://alexbachuk.com/wp-content/uploads/2013/06/javascript-templates.png)JavaScript is the [most used programming language](https://github.com/languages) now, it's very powerful and can do more than home page slideshow or animations. AJAX is a big part of JavaScript and one of the reasons this language is so popular. It's possible to get any content from the server and send any content back to server, two way communication. Libraries and frameworks like Backbone.js make this process very elegant and organized. Few years ago it was a standard proces to append html in AJAX callback to the DOM, and it works, and if it's done right (append all the content at once instead of at each iteration of a loop), it's even ok. But there is a better way to do it. JavaScript templates.

The basic idea is - get JSON data from the server with AJAX call and pass this data (object) to a template. Template is added in html (php, erb, etc), wrapped in <script> tag with type <text/template> or any other type but not script, so browser just skips it. Templating engine (Underscore, Handlebars, Mustache, Dust.js... or any other) compiles the script (template), replaces variables with real data from JSON object and injects html into specified place in your file. Behind the scenes templating engines search and replace all the values with regular expressions, properly escape quotes and do other "math". And the most important - it keeps html and data out of main JavaScript code, remember - separation of data, logic and presentation. If you have any experience with WordPress (or any other CMS) or Ruby on Rails - it's the same concept but in JavaScript.

I posted [article about Backbone.js](http://alexbachuk.com/backbone-js-explained/) and why it's awesome, so here I will add a snipped of what I used to render data coming from Backbone view. Every time view is changed, data is rendered in attached template, no more no less.  It's recommended to keep any evaluations (loops, if else) from the templates, but in this case I included the loop just to show helper functions that come with template engines, I used [Underscore.js](http://underscorejs.org/#template) in this case because it comes with Backbone.js, but Handlebars and Dust.js are more powerful libraries if you need to handle more complicated templates.






