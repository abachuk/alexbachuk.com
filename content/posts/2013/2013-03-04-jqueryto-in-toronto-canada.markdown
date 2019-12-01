---
author: alex
categories:
- web development
comments: true
date: 2013-03-04T02:10:11Z
link: http://alexbachuk.com/jqueryto-in-toronto-canada/
slug: jqueryto-in-toronto-canada
tags:
- conference
- JavaScript
- jquery
title: jQueryTO in Toronto Canada.
url: /2013/03/04/jqueryto-in-toronto-canada/
wordpress_id: 427
---

This was my first web development conference that’s not WordCamp. I started developing with JavaScript quite recently, before that I was using jQuery to manipulate DOM and use others plugins (which works for small websites pretty well). Since it was not that far from New York City - I decided to attend and see what’s new in jQuery world (especially after I saw Paul Irish and Addy Osmani among other speakers). Short conclusion - it was phenomenal.

![jqueryto](http://alexbachuk.com/wp-content/uploads/2013/03/jqueryto.jpg)

Now long conclusion :). The conference was broken into 2 tracks (which is a little disappointing because I wanted to see every talk). I decided to focus on Backbone, best practices and scalability. I’m going to highlight few things I learned, the most interesting stuff, of course everything was very informative and worth knowing.

I learned about package management and Bower package manager which makes the process of adding new javascript plugins, adding images or css  to a project - a one line command instead of copy/pasting/including. It takes assets from bower repository (which is huge) and also provides a way to add custom endpoints (useful for private repos)

    
    bower install jquery



jQuery mobile was one of the big topics at the jQuerTo. Mobile web is getting bigger every day and jQuery Mobile is becoming even more popular. I use jquery Mobile a lot and like it. Ralph Whitebeck (one of the core jqm developers) presented state of jQuery Mobile and it is clear the team is working really hard to make the framework better, more stable and more consistent. They just released 1.3.0 and added few new widgets (panels, dual range slider, responsive tables and grids)

Talk about documentation by Darcy Clarke was interesting as it’s not really related to JavaScript (or jQuery) but address the issue I experience everyday - documentation. This problem exist not only when you work with a team or someone else’s project but even your own work, I keep forgetting what css ids and classes look like and keep rewriting my own styles over and over again. So, documentation like Twitter Bootstrap is awesome because it visually shows you how any element will look like and how to make that happen. Documentation generators are just awesome. KSS and DSS

![jqueryto-me](http://alexbachuk.com/wp-content/uploads/2013/03/jqueryto-me.jpg)How to avoid regression in third party javascript reminded me that every third party script is a very big risk - because whoever provided the script (Google analytics, feedback widget, Facebook like) can do any changes to that script and your site may be broken. As a developers we should test, version control and not auto update such scripts but rather let end user to update to the latest  version, because when they do so - they will notice if something is wrong with their website after the update and can report the issue or revert to older (working version). I think this is very important especially if you are building your own api or provide data to clients using embeddable javascript.

Almost every speaker mentioned Require.js and how great it is for organizing script and manage all the dependencies. There were some great tips on handling projects and organizing the process of web development.

The best talk of Day 1 was presentation by Addy Osmani about performance and optimization. After I saw his talk, I will be optimizing my website asap. Things like rounded corners, box shadows and any properties that cause repainting - are very expensive for performance. When combining these properties, scrolling, fixed position, animations - a website is becoming very slow, especially on mobile. So, the best frame rate for animations on the web is 60 frames per second which matches with approximate refresh rate of monitors and mobile screens (55Hz - 60Hz). At that rate all animations (including scrolling) on website are smooth and snappy. When adding more stuff like big images, resizing images with css, a lot of HTTP requests, causing page repainting, using fixed positioning - frame rate drops to 10-15 fps (or even less). It takes 6 times more resources. As a good example Addy showed us how Pinterest repaints unnecessary elements and how scrolling feels delayed because of that, he also showed how to track these problems in Chrome dev tools. Tip of the day: use profiling and timeline in incognito mode only to avoid plugins and extensions impact on performance. I learned a lot from this presentation.

DAY 2.
Alex McPherson described (very accurately) all javascripts skill/scope levels. Basically there are 4 types of projects:
small (mom’s cat website), which doesn’t require any javascript
medium (regular websites), where you use some plugins, maybe a slider
semi-pro (blog, landing page), where you write some custom javascript, ajax call, starting using object
pro (web app), where you use MVC like backbone, organizing and namespacing everything (maybe with require.js)


I liked the organization suggestion in Derick Bailey’s presentation (he’s the creator of Marionette.js library). He recommends to organize files and code the way we see an application. Include files in folders, use modules, basically hierarchical system and create code for other developers, not computers. That way your app can load individual modules and not entire code (good example is gmail with its widgets for mail, contacts, chat, etc). You can easily assign development to other team members and avoid git conflicts, everyone is responsible for their own module (and life is good, everyone’s happy).

3D web presentation was mind blowing, it’s amazing what javascript can do. three.js library responsible for almost any 3D demo on the web (flash is aside of course). You can write javascript to access GPU directly with WebGL technology and make cool 3D stuff. Too bad not all browsers support that (yes you guessed, Internet Explorer).

I’ve heard a lot about grunt.js but never used it, now I will. I use sass, but sometimes I hesitate, because I know I may need to edit css directly on the server and sass would have to be recompiled. With grunt.js - I can. So, from now on all my websites, even WordPress, should be on sass and who knows, maybe I will some other cool stuff, like concatenate, uglify, lint bunch of files and make all websites I build 3 times faster :)

![kqueryto-pi](http://alexbachuk.com/wp-content/uploads/2013/03/kqueryto-pi.jpg)

Paul Irish, the man, the superstar of front end development community - presented closing keynote. That was funny, informative, amazing and unicorn-y. He announced for the first requestAutoComplete() api for autocompleting personal and credit card information in Chrome, which is very handy. He also showed few ticks in dev tools, some unicorns, and I was one of the lucky people who got Google t-shirts :-), yay!!!

Big thanks to jQueryTO organizers and volunteers, hope to come back in 2014.
