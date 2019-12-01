---
author: alex
categories:
- web development
- WordPress
comments: true
date: 2013-01-27T22:51:27Z
link: http://alexbachuk.com/phonegap-and-mobile-web-apps/
slug: phonegap-and-mobile-web-apps
tags:
- mobile web development
- WordPress
title: PhoneGap and mobile web apps
url: /2013/01/27/phonegap-and-mobile-web-apps/
wordpress_id: 378
---

Mobile now is big part of the web. More and more people are getting phones that are more capable than average computers, in terms of HTML5 support. They can detect your location with gps, have great camera (usually more than one), always connected to the Internet, usually support the latest technologies. For web developers - this is great, that means we can build very cool stuff, cutting edge websites use css3 animations, detect user locations, etc. But there is one problem - it's not native app. I know iOS has a very nice way to save web app on the home screen, but for the most clients - the app has to be on iTunes or Google Play, otherwise it is not an "app".

Now, in 2013 we have nice ways to create mobile experience using open technologies such as HTML5, JavaScript and CSS3. But almost every mobile app needs to be written in server side language like Objective C or Java. That's where [PhoneGap](http://phonegap.com/) come is in. It creates "native" wrapper around mobile web app and gives us javascript APIs to access device hardware like camera or gps, wich you can't access using html5 web app.

If you are building game or some "fancy" app where there will be a lot of animation or heavy use of native hardware. It's probably better to build native app from the beginning, but if the app is only to let your users login on the go and check some info or register on your website or let them upload pictures to your database, PhoneGap is perfect solution for that. The biggest advantage of it is - you can convert your web app to multiple mobile platforms including iOS, Android, Windows Phone, etc.

Since I develop all my websites in WordPress, I thought it may be excellent platform for mobile app, since it has everything you need for an app: database, JSON api, user registration and access control, huge plugin repository, post types. I decided to build a simple app just to play around and will be posting my progress here. If you have any ideas for an app or know of any apps (iOS or Android) where WordPress is used as a backend - please leave a comment, I would like to learn more.





## Update: I started writing about how to [develop Phonegap app using WordPress](http://alexbachuk.com/wordpress-and-phonegap-part-1/)




