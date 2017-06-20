---
author: alex
categories:
- WordPress
comments: true
date: 2013-01-22T01:17:48Z
link: http://alexbachuk.com/quick-tip-load-backbonejs-in-wordpress-the-right-way/
slug: quick-tip-load-backbonejs-in-wordpress-the-right-way
tags:
- JavaScript
- quick tip
- web development
- WordPress
title: 'Quick Tip: Load backbonejs in WordPress (the right way)'
url: /2013/01/22/quick-tip-load-backbonejs-in-wordpress-the-right-way/
wordpress_id: 307
---

Now that WordPress 3.5 sips with Backbone and Underscore - you can easily include them into your WordPress theme and do some fun stuff. Put this code in functions.php

`
function loadBackbone() {
wp_enqueue_script('backbone');
}`

add_action('wp_enqueue_scripts', 'loadBackbone');
