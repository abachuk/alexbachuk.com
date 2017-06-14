---
title: Customizing WordPress dashboard
date: "2013-02-03T19:58:00.169Z"
layout: post
path: "/customizing-wordpress-dashboard/"
id: 388
---

As a WordPress expert, I almost always try to convince or at least recommend it for any project I do, either it’s small website for business around the corner or startup trying to get off the ground and build minimum viable product, although WordPress is not ultimate solution for any web app out there – it can do a lot of stuff, after all it’s just php files and mysql database, so it can do anything php can do… and it can do a lot. But I leave this discussion for another day.

When I build any website I try to make it intuitive for my client, so in case they need to make any change – they can do it on their own. Right, WordPress can do that. To achieve some simplicity in the dashboard, theme options or bunch of custom fields isn’t enough. It has to be organized the right way and should fee like it belongs to WP dashboard, otherwise you’re creating another barrier for a user or client or even developer that will work after you. So be thoughtful and don’t make a mistake a lot of theme developers do, they throw bunch of theme options into one place, using some third party theme options framework that looks completely out of this world and that’t the end of “customizations”.

## Custom Post Types
![wordpress-dashboard-post-types](http://alexbachuk.com/wp-content/uploads/2013/02/wordpress-dashboard-post-types.jpg)Post types is what makes WordPress very flexible and powerful, I use it almost on every project. Let’s take an example my own website, I have 4 post types here, posts for blog, pages for static content, portfolio for showing my work and testimonials. And you can add as many post types as needed, as long as they have unique name. If you look at the MySQL database you will see that all these post types are stored in `wp_posts` table but have different post_type values (page, portfolio, etc). That makes it very handy in your theme, just specify post type in the loop and there you go, you have your post type showing up on the home page, header, page template, anywhere you want.

There is also a way to group post types into taxonomies. Best example of taxonomies is categories in the posts. So if I wanted I could organize my portfolios into CMSs (although it would make a lot of sense as I do everything in WordPress :), or if you have a podcast or videos – organize it into channels. There are 2 different kinds of taxonomies – hierarchical and not hierarchical. Again, example is, categories and tags. There can be sub-categories (example of hierarchical) and tags (non hierarchical). Taxonomies are stored in `wp_term_taxonomy` table in the database.

So both post types and taxonomies make any WordPress powered website very organized and easy to navigate in the dashboard. If you’re not programmer – there are few plugins that can help you set this up, my favorite is [Custom Post Type UI](http://wordpress.org/extend/plugins/custom-post-type-ui/)\n\n\n

## Meta Boxes
There is a way to add more widgets into page, post or any post type editor – meta boxes. They are useful if pages need more that title and featured image maybe you need to add additional content like introduction, another image or date of an event, and it has to formatted in same way as other pages, if you’re good with HTML – built in wysiwyg should be enough as you can copy and paste html, tweak it , move things around, but what about your clients? So, meta boxes are perfect for that, I like to use framework called [Custom Metaboxes and Fields for WordPress](https://github.com/jaredatch/Custom-Metaboxes-and-Fields-for-WordPress)\n\n<script src=\"https://gist.github.com/4703394.js\"></script>\n\n\n

## Theme Options
Theme options are great for general information, like logo upload, change colors, position of navigation, loading different fonts or scripts, etc. But it is not very useful to put all information there even things that are native to WordPress settings like site name or description. I like to add input fields in the general -> settings for copyright, taglines and other related content because if client goes to change their description they may also need to change copyright in the same place.

![nhp](http://alexbachuk.com/wp-content/uploads/2013/02/nhp.jpg)

I like to use [WordPress Settings API](http://codex.wordpress.org/Settings_API) or frameworks like [NHP](http://leemason.github.com/NHP-Theme-Options-Framework/) or [Options Framework](http://wptheming.com/options-framework-theme/)
