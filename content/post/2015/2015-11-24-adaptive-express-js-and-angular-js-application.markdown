---
author: alex
categories:
- JavaScript
- Node.js
comments: true
date: 2015-11-24T03:13:34Z
link: http://alexbachuk.com/adaptive-express-js-and-angular-js-application/
slug: adaptive-express-js-and-angular-js-application
tags:
- Angular.js
- JavaScript
- node.js
- responsive web design
title: Adaptive express.js and angular.js application
url: /2015/11/24/adaptive-express-js-and-angular-js-application/
wordpress_id: 920
---

Mobile web is growing really fast and for some businesses it is a significant (if not majority) amount of traffic. The experience on mobile could be slightly different than desktop or it could be completely different depending on the project or the app. For example, marketing or news website might have similar experience, since its only goal is to deliver the content in accessible way. But, for other websites, like e-commerce mobile experience might be have totally different meaning. For example, users on mobile could be doing last minute purchase or they are on the train or waiting in the line, in that case the website has to have as few distractions as possible.

There are 3 ways to make mobile website: 1) separate mobile website (m-dot) 2) responsive website 3) Adaptive website. Responsive is a great way to repurpose the code written for desktop, add some media queries and optimize graphics, it saves tons of time for developers in terms of coding and maintenance. One code base for all (mobile, tablet and desktop).

What if your app is more complex and mobile web creates a whole new set of difficulties, or let’s say you’d like to support older version of IE for desktop users but want to take advantage of the latest webkit on mobile. Can’t have both at the same time. That’s where adaptive experience comes into play. If creating separate mobile web experience is what you chose for your app, then there is a way to make it adaptive and share a lot of the code between desktop and mobile. Making the app adaptive has few benefits: feature parity, maintenance (share some code), separation (deploy desktop separately from mobile), optimized experience for mobile (not just scaled down responsive website built for desktop).

In this example I want to show how to do it using express.js on the server side and angular.js on the client side. The idea is one express app powers 2 completely separate angular.js apps that share some components (bower and internal). When the initial request is made, express determines whether it’s mobile device or desktop and the route loads correct html (ejs) template, which in turn bootstraps its own angular.js app. Sounds very simple, and it is.

[![server-client-adaptive](http://alexbachuk.com/wp-content/uploads/2015/11/server-client-adaptive.jpg)](http://alexbachuk.com/wp-content/uploads/2015/11/server-client-adaptive.jpg)




### Shared code


We have one server (express.js) that powers both desktop and mobile. All routes on server are the same. On the client we share bower components and internal components.



### Differences


Client code base business logic has to be written separately for mobile (referencing shared components where needed). Routes can be different, but should be the same in order to make feature parity with desktop.

I’m working on a sample “demo” project that will have express and angular set up for both mobile and desktop. Stay tuned or leave a comment if you’re interested or willing to help, that will speed up the process :)
