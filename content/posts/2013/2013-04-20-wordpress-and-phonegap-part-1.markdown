---
author: alex
category: WordPress
comments: true
date: 2013-04-20T17:41:42Z
link: http://alexbachuk.com/wordpress-and-phonegap-part-1/
slug: wordpress-and-phonegap-part-1
tags:
  - API
  - Phonegap
  - WordPress
title: WordPress and Phonegap (part 1)
url: /2013/04/20/wordpress-and-phonegap-part-1/
wordpress_id: 447
template: post
description: WordPress is an excellent CMS and provides a lot of flexibility for developers, users, authors, and everyone who manages websites.
---

WordPress is an excellent CMS and provides a lot of flexibility for developers, users, authors, and everyone who manages websites.

I wrote a [blog post phonegap](http://alexbachuk.com/phonegap-and-mobile-web-apps/) few months ago and few people were interested to learn more how to use WordPress as a backend for a mobile app. [Phonegap](http://phonegap.com/) is just one of the tools you can build a mobile app. WordPress is, in this case, API server, it manages database and all the content stored in there.

There are multiple formats you can display data returned from database, some of them are HTML, XML, [JSON](http://www.json.org/) (what we need), and [XML-RPC](http://codex.wordpress.org/XML-RPC_Support) (default WordPress format for remote publishing).

If you are writing Phonegap app - you are writing it in JavaScript (probably using jQuery to make life easier). Today's standard for communicating with APIs is JSON (XML used to be very popular). So our goal, after WordPress structure is done and some data is stored in database, is to convert posts, pages, comments, and other data to JSON format.

It's not that hard if you are good with PHP. All you have to do is "echo json_encode" your data, but it requires some work. And because WordPress is awesome - there are tons of plugins to do just that. One of my favorite is [JSON-API](http://wordpress.org/extend/plugins/json-api/). Although it hasn't updated for couple years - it works pretty well still.

It gives you access to all the data on your site, just visit URL provided in the plugin dashboard page, URL for recent posts would "example.com/api/get_recent_posts", need to access woocommerceproducts in json format? - No problem. Url would be "example.com/api/get_recent_products" - you get the idea... Also there is a way to authorize users and publish posts via POST request, just turn it on in plugin's settings.

And if are developing in Chrome (like I am) - you can use great API tool like [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) to see your data nicely organized, simple, awesome.

This was very quick introduction how to get started developing WordPress and Phonegap. First thing - build WordPress site and add some content, just enough so you can see JSON structure later on. Second add JSON API plugin, configure it and make a list of all endpoints you need (recent pages, recent posts, recent custom post types, etc).

Next, I will write how to prepare phonegap for Android or iPhone (leave comments what you prefer) nad what we need next to connect Phonegap and WordPress together.

Please, leave comments what you want to learn more about WordPress and JSON.

[Part 2](http://alexbachuk.com/wordpress-and-phonegap-part2/)
[Part 3](http://alexbachuk.com/wordpress-and-phonegap-part3/)
