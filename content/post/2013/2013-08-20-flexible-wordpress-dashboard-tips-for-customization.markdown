---
author: alex
categories:
- WordPress
comments: true
date: 2013-08-20T02:54:36Z
link: http://alexbachuk.com/flexible-wordpress-dashboard-tips-for-customization/
slug: flexible-wordpress-dashboard-tips-for-customization
tags:
- theme options
- tips
- WordPress
title: Flexible WordPress dashboard, tips for customization
url: /2013/08/20/flexible-wordpress-dashboard-tips-for-customization/
wordpress_id: 609
---

WordPress is my CMS of choice. Every single project I do is very different from the previous one. And not only on the front-end, but on the back-end as well. It's not just static pages and blog, WordPress can do a lot more. But what if you build a project for a client and besides making it look great with CSS, JavaScript animations and making responsive - you also have to make it easy to manage, edit and maintain, what if client is not a web developer? I think it's very important to deliver great user experience to both client and their customers, both back-end and front-end respectively.

![WordPress-custom-post-view](http://alexbachuk.com/wp-content/uploads/2013/08/WordPress-custom-post-view.jpg)
I usually achieve great user experience by customizing WordPress dashboard and it's not about background colors and branding the dashboard (although it's important sometimes as well). the following is my check list of custom stuff I do on pretty much every single project I work on, and it's very different every time, sometimes I have to make a lot more to make the client feel comfortable editing their own content and to be sure all the important content is easily editable, not just pages and posts.



### Custom Post types


The most used custom feature is [Custom post types](http://codex.wordpress.org/Post_Types). Businesses create website to communicate their message and/or promote their services to their customers, so chances are every website, every business has different content, why limiting them to pages and blog posts? How about testimonials, portfolio, galleries, team members, products or services? This feature is available since WordPress 3.0 - great way to make WordPress dashboard more flexible and user friendly.



### Custom menus


The navigation is one of the most important pieces of any website. Make it easy for the end user to quickly go to nay content. That's why clients always will demand greater control over navigation menu, drop downs, multiple menus. WordPress makes it super easy to make any number (reasonable) of menus, and programmatically place them in your theme. All the client needs to do is assign different menus to different areas in their website (header menu, sidebar menu, etc). [More about using and developing menus in codex](http://codex.wordpress.org/Navigation_Menus).



### Meta Boxes


This one I use the most. If there is a need to manage any piece of content outside traditional post, page or post type - meta box may be the answer (although not always). Sometimes I develop [custom meta boxes](http://codex.wordpress.org/Function_Reference/add_meta_box) and sometimes I use [great framework](https://github.com/jaredatch/Custom-Metaboxes-and-Fields-for-WordPress) (I plan to write more detailed blog on this). Meta boxes let you add images, text, radio boxes, drop downs and even repeatable boxes, so it's a perfect addition to custom post types. One of the unique way I've been using meta boxes is create relationship between custom post types (multiple blog posts belong to one magazine issue) or multiple WYSIWYG editors per post or page... Endless possibilities here.



### Theme options or customizer


I used to use it a lot, but not anymore. In my opinion it's great tool for general purpose themes, where client will customize the theme to their needs (color, logo, layout), since I do only custom development - I don't use that much. It's great way to give even more control to a client over their website.



### Custom code


Of course custom code is what makes custom website. I usually put all custom code (metaboxes, theme options, post types) in separate plugin, which allows the client to reuse this code in the future if they decide to switch themes or do complete redesign. Presentation and data separation - very important. Admin CSS is another piece that let's you as a developer to add more style or branding to the dashboard. For example hide WYSYWYG on a page if client won't use it, perhaps you added bunch of meta boxes there.


So, WordPress as a platform is not stopping developers or users from having really custom website or web application. It's not about the tool it's how you use it, WordPress is very flexible tool and it gives both developers and clients opportunity to build something awesome!





