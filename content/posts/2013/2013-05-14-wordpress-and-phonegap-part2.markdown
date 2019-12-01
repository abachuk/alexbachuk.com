---
author: alex
category: WordPress
comments: true
date: 2013-05-14T04:36:13Z
link: http://alexbachuk.com/wordpress-and-phonegap-part2/
slug: wordpress-and-phonegap-part2
tags:
  - jquery mobile
  - Phonegap
  - WordPress
title: WordPress and Phonegap (part2)
url: /2013/05/14/wordpress-and-phonegap-part2/
wordpress_id: 485
template: post
description: This part will explain how to get phonegap set up and prepare some boilerplate for our app using jQuery Mobile, CSS and HTML.
---

### This blog post is outdated.

[In Part 1](http://alexbachuk.com/wordpress-and-phonegap-part-1/), we learned how to get WordPress to work as backend platform for our future mobile app. Now we have nicely formatted JSON feed coming from WordPress and we can use it anywhere with ajax request.
This part will explain how to get phonegap set up and prepare some boilerplate for our app using jQuery Mobile, CSS and HTML.

Phonegap has really [well explained guides](http://docs.phonegap.com/en/2.7.0/guide_getting-started_index.md.html#Getting%20Started%20Guides) on setting up phonegap locally for iOS, Android or any other target platform. I recommend to read through the documentation and follow step by step direction, there are some terminal commands involved, but don't panic it's not that bad. Basically all you need to do is install Xcode (for ios) or Eclipse (for android), download phonegap SDK and latest [phonegap source](http://phonegap.com/download/) and then start executing some terminal commands while in source folder you just downloaded.

<!-- ![wordpress-and-phonegap-part2](http://alexbachuk.com/wp-content/uploads/2013/05/wordpress-and-phonegap-part21.jpg) -->

Since it's not web app - testing will be a little different, either iOS or Android emulators or physical devices. Also, we can test javascript, HTML and CSS in the browser as it was regular web app but in that case make sure you disable chrome's (or your browser of choice) same origin policy, because we are going to do GET request to external resource, you can do this by opening chrome passing an arguments:
**mac**:

\$ open -a Google\ Chrome --args --disable-web-security

**pc**:

chrome.exe --disable-web-security

It's not recommended to run chrome in this mode all the time due to security vulnerability.

Time to set up some boilerplate. I have [jQuery mobile boilerplate repo](https://github.com/abachuk/jQueryMobile-starting-template) on github, feel free to use it as a starting point in you development process. Then include these files into your phonegap source folder under www directory. After this you should have www directory that contains index.html, main.js and cordova-2.v.js (phonegap javascripts), static html files and jQuery mobile.

That's it for preparation part. At this point you should have fully functional Phonegap starting point that includes jQuery mobile, HTML and CSS file and obviously all Phonegap dependencies files (which we'll not be touching anytime soon). Our focus for the next part will be creating html pages using JSON feed coming from WordPress.

[Part 3 - building iOS app](http://alexbachuk.com/wordpress-and-phonegap-part3/)
