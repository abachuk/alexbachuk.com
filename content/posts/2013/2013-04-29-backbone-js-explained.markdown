---
author: alex
category: JavaScript
comments: true
date: 2013-04-29T20:52:23Z
link: http://alexbachuk.com/backbone-js-explained/
slug: backbone-js-explained
tags:
  - Backbone.js
  - JavaScript
  - JSON
  - WordPress
title: Backbone.js explained
url: /2013/04/29/backbone-js-explained/
wordpress_id: 465
template: post
description: Backbone.js is one of many javascript MVC frameworks, others are Angular.js, Phantom.js, Ember.js. Why backbone? It's very small, only 6K minified, not opinionated, meaning it doesn't dictate how you should organize your code. A lot of big companies (like Pandora, USA Today, New York Times, Rdio) use backbone.js to power their web applications.
---

[Backbone.js](http://backbonejs.org/) is one of many javascript MVC frameworks, others are Angular.js, Phantom.js, Ember.js. Why backbone? It's very small, only 6K minified, not opinionated, meaning it doesn't dictate how you should organize your code. A lot of big companies (like Pandora, USA Today, New York Times, Rdio) use backbone.js to power their web applications.

### What can Backbone.js do for you?

If you write any javascript code at all - you will appreciate the power backbone.js provides. Basically, it helps you organize your code when building ajax or single page applications. jQuery is great, but it's great to a certain point, some sliders, DOM manipulation, simple ajax requests. But when you start building more complexity - it becomes hard to manage all the callback functions. Backbone.js provides Model-View-Controller(router) structure to your app, it won't help you to build another slider or animate twitter logo, use jQuery for that (or CSS3).

### How to start?

Backbone.js has only one hard dependency, it's small library written by the same developer, Jeremy Ashkenas (he also created CoffeScript) - [Underscore.js](http://underscorejs.org/), it's also very small, few kilobytes minified. It's also recommended to use jQuery (or zepto.js) for DOM manipulation. So, using these 3 libraries - you can get started building awesome Backbone.js app.

### Models and Collections

Models in Backbone represent data, let's say I have blog, which contains posts, comments, categories, tags, etc. In this case blog post is a model, category is collection, comment is a model.

### Views

Views contain instructions how to render models or collections, once we receive some data from the server - view picks it up,  formats it, handles adding new or removing models, etc and passes this information to template (Handlebars, Underscore or any other template engine).

### Routers

Routers are responsible for navigation. Backbone.js uses HTML5 history API and gracefully degrades in old browsers (you guessed it - Internet Explorer). When building with backbone.js - in most cases you are building one page page application, so there are no page refresh, that's router's job. It directs application and where user wants to go. For example if I'm on home page of my blog and need to view single blog post, I click on read more button, router passes this post ID to view, view requests model attached to this view to fetch content from the server and then renders the content to template.

### Example App

Let's see how backbone.js works using real example, my blog. All data has to be in JSON format. I've written article on [JSON and WordPress](http://alexbachuk.com/wordpress-and-phonegap-part-1/), here is JSON formatted blog that has all recent posts [http://alexbachuk.com/api/get_recent_posts/](http://alexbachuk.com/api/get_recent_posts/)

1. First, let's add some [simple html boilerplate](http://html5boilerplate.com/)

2) Include 3 libraries: jQuery, Underscore, Backbone

3. Create app.js script file and include it after 3 libraries (preferably before closing </body> tag)

4) Add this script to app.js (please note my JSON feed will not work in your app due to cross origin policy). I use var App and its properties for namespacing (it's much easier to maintain the app)

Below is data loaded with backbone - I may need to style this a little more and maybe add more features like click events, etc.

**Update**: [how to use JavaScript template to render data in HTML document](http://alexbachuk.com/javascript-templates/)
