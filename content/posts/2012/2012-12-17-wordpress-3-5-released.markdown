---
author: alex
category: WordPress
comments: true
date: 2012-12-17T07:23:53Z
link: http://alexbachuk.com/wordpress-3-5-released/
slug: wordpress-3-5-released
tags:
  - JavaScript
  - web development
  - WordPress
title: WordPress 3.5 released
url: /2012/12/17/wordpress-3-5-released/
wordpress_id: 268
template: post
description: The biggest change is media management. Now it's more intuitive and more easy to upload, manage and configure all your images, audio and video files in one place. Also added drag and drop support and galleries.
---

<!-- ![WordPress-Development-and-notes-onnew-release](http://alexbachuk.com/wp-content/uploads/2012/12/WordPress-Development-and-notes-onnew-release.jpg) -->

[WordPress 3.5](http://wordpress.org/news/2012/12/elvin/) has been released. It's got very nice dashboard clean up. Everything is looking much lighter and feels faster.

The biggest change is media management. Now it's more intuitive and more easy to upload, manage and configure all your images, audio and video files in one place. Also added drag and drop support and galleries.

Entire admin dashboard is retina ready (good news for lucky retina macbooks owners). Link manager, which I used only twice in my 4 years of WordPress development experience. - is now hidden for new installs. But still can be re-enabled if needed.

More under the hood changes include updating libraries like TinyMCE, jQuery, jQuery UI, and SimplePie to their latest version. TinyMCE looks kind of weird now (too white) imo. Added oEmbed support for Instagram and SoundCloud (now in addition to YouTube and Vimeo) - just drop a link in editor and that's it - content is there, no need for iframes and long embed code. But if you need to upload your own video or larger files - default limit went from 32 MB to 40 MB. Also bunch of new functions and filters got implemented like [wp_send_json()](http://codex.wordpress.org/Function_Reference/wp_send_json) and few got deprecated.

Another exciting addition to the WordPress code is [Backbone.js](http://backbonejs.org/) and Underscore.js libraries - that means it's moving into more "ajax" direction. I already have some ideas about building WordPress + Backbone app - sending WP data in JSON format. As a [WordPress developer](http://wordpress.org/support/profile/netxm) - I am glad to see it's moving into app platform direction and not "for blog only" - as people used to call it all the time.

This one is a bit news to me. I thought it would be added in 3.5 release  but it actually was there since 3.4. I'm talking about template sub-directory, you can organize all page templates in one sub-directory (/page-templates/one-column.php) - so this is very cool and helps to keep your theme structure clean and organized.
