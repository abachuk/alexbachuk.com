---
author: alex
category: Software engineering
comments: true
date: 2012-10-13T02:15:07Z
link: http://alexbachuk.com/responsive-web-design/
slug: responsive-web-design
tags:
  - mobile
  - mobile web development
  - responsive web design
title: Responsive web design
url: /2012/10/13/responsive-web-design/
wordpress_id: 252
template: post
description: Responsive web design is a "fancy" term for fluid grid layout that adapts to any screen size. Basically, it's layout that is makes everything easily readable and viewable on mobile and tablet devices.
---

<!-- ![mobile and desktop websites](http://alexbachuk.com/wp-content/uploads/2012/10/RWD.png) -->

Responsive web design is a "fancy" term for fluid grid layout that adapts to any screen size. Basically, it's layout that is makes everything easily readable and viewable on mobile and tablet devices.

I think responsive web design is the best and should be the only way to build mobile websites. Instead of developing websites for desktop and mobile separately and then maintaining two copies of content - just build one, responsive  version and it's optimized for any device available now and in the future. [Google recently announced](https://developers.google.com/webmasters/smartphone-sites/details) that they officially recommend responsive web design as a way to build smartphone-optimized websites. And it became a trend in web design community over the past 2 years. Any website can be build responsive but the _perfect candidate_ is grid based layout.

Responsive web design is controlled by CSS file media queries. All you need to do is specify % width instead of px, include one meta tag and add media queries to re-arrange layout at a certain device width. All major browsers support media queries and most importantly all decent mobile devices support it (iPhone, Android, Windows Phone 7,8)

`<meta name="viewport" content="width=device-width, initial-scale=1">`

I'm in the process of rebuilding my personal website and it definitely will be responsive...

Great resource to find some responsive examples is [MediaQueri.es](http://mediaqueri.es/)
