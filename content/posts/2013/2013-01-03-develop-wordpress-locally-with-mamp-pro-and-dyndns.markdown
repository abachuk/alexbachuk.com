---
author: alex
category: WordPress
comments: true
date: 2013-01-03T16:53:13Z
link: http://alexbachuk.com/develop-wordpress-locally-with-mamp-pro-and-dyndns/
slug: develop-wordpress-locally-with-mamp-pro-and-dyndns
tags:
  - web developer tools
  - WordPress
title: How to develop WordPress locally with mamp pro and dyndns
url: /2013/01/03/develop-wordpress-locally-with-mamp-pro-and-dyndns/
wordpress_id: 280
template: post
description: When developing websites for clients I always try to make everything as transparent as possible. And for that reason I set up staging environment on my web server, something like separate folder and point the client to that URL while I develop the website, so they can keep track of all the changes and we can communicate better.
---

When developing websites for clients I always try to make everything as transparent as possible. And for that reason I set up staging environment on my web server, something like separate folder and point the client to that URL while I develop the website, so they can keep track of all the changes and we can communicate better.

Until few months ago this approach was 100% ok with me, I just developed directly on remote server via FTP (my coda editor is perfect for that), but then I started to notice new cool stuff popping up almost every few months or weeks. I'm talking about things like sass, haml, CoffeeScript, version control (git), tools like live reload and CodeKit. And it's not hard to guess what is the main problem with all this. I can't use all these new shiny front end development toys, because all of them require local development environment. And then I started using MAMP, free LAMP (linux, apache, mysql, php) server for Mac OS. Great. I could use all of that, and after few projects I realized there is another issue with this set up. Clients can't see what I'm working on and in order to show it to them - I need to grab all that and copy to staging server, and I have to do that every few days, just so they can see the latest version. Turns out it's not that practical. What if client logs in to WordPress dashboard and does a few changes, creates new posts, uploads some media. That adds even more work. Now I need to export / import database.

Then I discovered some neat tools like [forwardhq](https://forwardhq.com/) and [localtunnel](http://progrium.com/localtunnel/). But they have a limit in bandwidth or number of websites I can share. So, I decided to dig dipper. It turns out MAMP PRO has DYNDNS service built-in. I already have dyndns pro subscription which is ridiculously cheap (around \$20 a year).

What is needed to set this up:

- [MAMP PRO](http://www.shareit.com/programs.html?productid=300169372#)

* Dyn.com ([pro account](http://dyn.com/dns/dyndns-pro/))

- Network Router (any wireless router should be fine)

* [WordPress Multiple URL support plugin](https://github.com/abachuk/WordPress-multiple-URL-support) or [Relative URL plugin](http://wordpress.org/extend/plugins/relative-url/)

- Internet connection

## Set up MAMP PRO, add your dyndns username and password

![mamppro-add-dns](http://alexbachuk.com/wp-content/uploads/2013/01/mamppro-add-dns.jpg)

## Then set up virtual host (directory with WP or any other site) and add alias, URL that you chose in dyndns

![mamppro-alias](http://alexbachuk.com/wp-content/uploads/2013/01/mamppro-alias.jpg)

After you've done this, make sure you start web server and all three services are running (apache, mysql and dyndns), and you can access you local virtual host (test.dev in my case). If everything is ok, it's time to configure the router and open port 80 for external access. Make your computer IP address static, so it stays the same all the time. Log in to your router (usually it's 192.168.1.1 or something like that) and navigatie to port forwarding section. Enter start port 80, end port 80 for your static IP address. Now you should be able to access you localhost outside the local network using dyndns URL.
![netgear-port-configs](http://alexbachuk.com/wp-content/uploads/2013/01/netgear-port-configs.jpg)

Now if you are running WordPress website - login to the dashboard and install either of these 2 plugins [WordPress Multiple URL support plugin](https://github.com/abachuk/WordPress-multiple-URL-support) or [Relative URL plugin](http://wordpress.org/extend/plugins/relative-url/), activate and it's all set.

![virtual_host](http://alexbachuk.com/wp-content/uploads/2013/01/virtual_host.jpg)
