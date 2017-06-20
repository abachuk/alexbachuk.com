---
author: alex
categories:
- JavaScript
- web development
comments: true
date: 2013-11-29T23:03:46Z
link: http://alexbachuk.com/my-experience-with-backbone-js-and-require-js/
slug: my-experience-with-backbone-js-and-require-js
tags:
- Backbone.js
- front end development
- JavaScript
title: My experience with backbone.js and require.js
url: /2013/11/29/my-experience-with-backbone-js-and-require-js/
wordpress_id: 650
---

[Backbone.js](http://backbonejs.org/) is... as some say - just another javascript plugin. And technically it is just 6KB javascript plugin that you can add to pretty much any website or web application, it's MV* library, not a framework. There are not strict rules, developer has freedom to choose their own style of writing an app, for better or worse :)

**Some background**: I've built few web applications with Backbone.js, and I don't have any experience with any other MV* javascript library or framework, so it's hard for me to compare. It took me sometime to understand why so many developers like this library, it looked like it introduces more complexity to already complex application. There are more and more tutorials popping up on the interwebs how to build web applications with Backbone or how to use router, model, collection, etc. But I couldn't find a high view explanation - why would someone use MVC (*) library instead of twenty something jQuery plugins and some hacked together script.

**Maintenance** is one of the most important parts in modern web project. If you built super awesome web app but then few months later it's a pain to add new feature or debug it - it's done wrong. Any web project has to be maintainable, no matter if you are the only one developer or part of a team. Write code, so other humans can read it. Backbone.js may not be the greatest example of super clean code structure as it doesn't provide clear guidance for developers how to structure applications, and that's why there are tens or even hundreds of different ways you can organize the code with Backbone.js. But at the same time it's one of the strengths of this library, more than one way of doing things, gives developers enough freedom to be creative but enough rules to follow to keep it readable.

**Modularity**. Backbone.js on its own is not very helpful to keep the code modular (break down application to smaller independent pieces that can be reused throughout the project or even outside the project). The library provides Models, Collections, Routers and Views classes, instances of which can and should be individual modules. That's where [Require.js](http://requirejs.org/) comes in handy, it's a JavaScript file and module loader, manages JavaScript dependencies and modules. So, combination of Backbone.js and Require.js makes most of front end applications more maintainable, modular and even faster.

**Speed and optimization**. There are tons of ways you can optimize JavaScript application, event delegations, loops, ajax requests, asynchronous loading, cache, repaints and reflows, unnecessary DOM manipulations, etc. The advantage of using a good framework or library, there is a chance most of theses optimizations are already done for you. If you stick to Backbone.js and Require.js conventions, the app will be pretty fast. If you need more strict environment (smaller chance for bugs), there some good frameworks available for Backbone.js - like [Marionette.js](http://marionettejs.com/) or [Chaplin.js](http://chaplinjs.org/)

**Templates**. One of Backbone.js dependencies is [Underscore.js](http://underscorejs.org/), which among other things provides [front end templates](http://alexbachuk.com/javascript-templates/). So, instead of using "append" or "html" on ajax success - you can just use templates, wrapped in script tag. If you have large app, this may become not very maintainable as you mix html and script tags and then number of templates grow. Require.js has [text plugin](http://requirejs.org/docs/api.html#text) which allows you to use regular html files with dynamic values.

These plugins (libraries) are just small part of big picture. JavaScript have become much more than just language for scripting animations. It's the most popular programming language and a lot of large scale application are being built with it. Without any structure any web application becomes a big mess, and it's important to use some kind of framework to keep everything organized and clean.

What front end framework do you prefer?








