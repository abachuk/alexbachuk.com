---
author: alex
categories:
- WordPress
comments: true
date: 2013-05-28T01:34:05Z
link: http://alexbachuk.com/wordpress-and-phonegap-part3/
slug: wordpress-and-phonegap-part3
tags:
- ios
- jquery mobile
- Phonegap
title: WordPress and Phonegap (part3)
url: /2013/05/28/wordpress-and-phonegap-part3/
wordpress_id: 509
---

In [part 1](http://alexbachuk.com/wordpress-and-phonegap-part-1/) and [2](http://alexbachuk.com/wordpress-and-phonegap-part2/) we learned how to prepare everything for our mobile app: get data from WordPress in JSON format and setup jQuery mobile and Phonegap boilerplate. Now, it's time to get the mobile app actually do something, in this case I will build app fro my blog and portfolio to demonstrate how to work with different post types.

I will build iOS app, but the same technique applies to Android, Windows phone, Blackberry, etc. You don't need apple developer account to test your app on iOS simulator but if you want to run the app on physical iOS device then you need to enroll in [iOS developer program](https://developer.apple.com/programs/ios/), which is $99 a year.

![ios-phonegap-wordpress-starting-screen](http://alexbachuk.com/wp-content/uploads/2013/05/ios-phonegap-wordpress-starting-screen.jpg) To get started we need phonegap project setup on your local computer with jQuery mobile. For this app I'm using phonegap 2.7, iOS 6.1 simulator, Xcode 4.6.2 and jQuery mobile 1.3.1.

When I start my "blank" app by opening .xcodeproj file in newly created phonegap project directory - I see this screen. That means everything is set up correctly and the app has been compiled to native iOS code (or add native wrapper to be more specific). Sometimes you may encounter few problems and it's very important to set everything up the right way to avoid even more bugs down the road. If you see any error messages or your iOS screen looks different - make sure to checkout [getting started guides](http://docs.phonegap.com/en/2.7.0/guide_getting-started_index.md.html#Getting%20Started%20Guides) and scroll down to "Common problems" section.

We're going to be working with www directory, which contains all the js, html, css and image files used by the app. Add all dependencies in index.html file (and other html files) like jquery, jquery mobile. We're also going to be using font end templating engine [handlebars.js](http://handlebarsjs.com/) to parse JSON feed coming from WordPress into HTML page. Don't forget to add jquery mobile css and some sort of reset (in this case normalize.css) into css directory and reference it in html page <head> section, feel free to erase all css/index.css styles and start adding your own styles instead. I laso added default jquery mobile default icons for this project, but usually I prefer to use [font awesome icon font](http://fortawesome.github.io/Font-Awesome/).

![xcode-compile](http://alexbachuk.com/wp-content/uploads/2013/05/xcode-compile.jpg)Every time you make changes in the code you need to see the progress live. We need to view the app either in iOS simulator or in the browser. Actually we need both, simulator shows us how the app looks in real environment and the browser gives us better idea what's going on in HTML, JavaScript and CSS (using chrome developer tools or firebug). I use MAMP PRO to set up host (myapp.dev) and optionally codekit or livereload to listen to any changes and re-render the view in the browser without refresh. To view updates in the simulator - click "Run" in Xcode to re-compile the app.

Now, let's start adding some content. I think HTML content is very straightforward as well as CSS styles. The most important part of this app is JavaScript. Phonegap comes with index.js file for custom scripts - and that's where we need write all the javascript (if you want - you can create other js files, just need to include them in HTML). This file has some "default" code, but we can erase it and write our own. Note, that index.html has app.initialize(); out of the box, if you modify app object, make sure to apply these changes here as well. I'll be adding methods to app object that have the same name as html pages to organize the script.



## Blog


We need to pull JSON feed coming from WordPress (url is http://alexbachuk.com/api/get_recent_posts/), simple jQuery ajax will do the job.

If we look in the console, we should see object is returned and it contains a lot of information we need, like individual blog posts, comments, images, etc.
![json-response](http://alexbachuk.com/wp-content/uploads/2013/05/json-response.jpg)
If we want to apply jquery mobile styles to compiled template we need to add .trigger('create') after adding the content (see full code below). Basic idea is we fetch blog posts from specified URL (WordPress API) in JSON format, compile handlebars template and then pass received data to the template. in the html file we can loop through all posts and output data in formatted html like h1, div tags. First step is done. What id we need to click on title and open new page with single article? Simple. That's why we use HTML5. Localstorage is the answer. Simply store clicked blog post and show it in the new page. And we don't need to do another ajax request.


    
    
    $('#all-posts').on('click','li', function(e){
      localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
    });
    






## Custom post types


Same with any custom post types, just change URL for ajax request. Fot example to get portfolio post type on my site - url would be http://alexbachuk.com/?json=get_recent_posts&post;_type=portfolio




## Summary


The only thing that left is exporting app in Xcode and put it on app store. If you have apple developer ID - then follow documentation just like any other app.

At this point we have fully working iOS app and it's ready to be shipped to app store, it definitely needs some polishing. For example design and css, I would also improve javascript code, adding some ajax spinners to show the user that content is loading. As you can see WordPress provides nice way to convert any website to an app. You can also add authorization with JSON, refer to plugin documentation.

[Full app code is on github](https://github.com/abachuk/WordPress-jQuery-mobile-and-Phonegap-app-for-iOS), feel free to modify it to your needs. Don't forget to leave comments and let everyone know what you built and what bugs you found.



