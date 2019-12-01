---
author: alex
category: Websites
comments: true
date: 2015-06-08T02:37:16Z
link: http://alexbachuk.com/web-performance-and-how-to-optimize-a-website-for-speed/
slug: web-performance-and-how-to-optimize-a-website-for-speed
tags:
  - front end development
  - web developer tools
title: Web performance and how to optimize a website for speed
url: /2015/06/08/web-performance-and-how-to-optimize-a-website-for-speed/
wordpress_id: 871
template: post
description: Users are increasingly becoming more impatient, they expect a page to load fast. Especially mobile users, who are mostly on the go and need to access the information fast. Companies like amazon and google invest a lot of effort and have dedicated teams who work on improving not only their websites but helping others to do the same with their websites. In fact Google made speed as one of key components that affect your website rankings in their search results.
---

![web-performance](http://alexbachuk.com/wp-content/uploads/2015/06/web-performance-300x300.jpg)The average website load time is 2.45 seconds, according to Google Analytics blog, posted in 2012. [http://analytics.blogspot.com/2012/04/global-site-speed-overview-how-fast-are.html](http://analytics.blogspot.com/2012/04/global-site-speed-overview-how-fast-are.html). Users are increasingly becoming more impatient, they expect a page to load fast. Especially mobile users, who are mostly on the go and need to access the information fast. Companies like amazon and google invest a lot of effort and have dedicated teams who work on improving not only their websites but helping others to do the same with their websites. In fact Google made speed as one of key components that affect your website rankings in their search results.

### **Tools**

You don’t need to guess, speed optimization is a science, not a guess work. There some tools available for you to utilize and measure the results. One of the best tools is [http://www.webpagetest.org/](http://www.webpagetest.org/), it’s a web based tool that will scan your website and create detailed report in minutes. Breakdown of asset loading time, number of http requests, time to visually load a page and other metrics are very helpful to find where the problematic areas are. Once you know what’s slowing down the load - it’s easier to fix it. Similar tools are built in to google chrome dev tools console, which can be accessed by pressing cmd+shift+c and going to “network” tab. Another free tool to measure website performance is [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/) Insights, which will analyze your website and show breakdown of problematic areas, score and suggestion what to improve. These tools are the great start for finding where your website is.

![web-performance](http://alexbachuk.com/wp-content/uploads/2015/06/web-performance-1024x553.png)

### **What affects web performance**

The are few key areas that affect a web performance. Network connection (latency), server speed (CPU, database load, api response) and then client side code performance. It’s good to be aware of latency and limitation of the internet connection, especially on mobile devices (it’s very unreliable), but we (developers) can’t control it. We do have full control of server speed, it’s always possible to add more CPU, increase RAM, get SSD and add more necessary resources. The client side code is where the most problematic area is and the good news is we can control its performance at least to some extend.

![web-performance-network](http://alexbachuk.com/wp-content/uploads/2015/06/web-performance-network-1024x287.png)

### **Start making it faster**

Here are some things you can do today to improve client side performance:

1. Minify and concatenate CSS and JavaScript. Uglifying and minifying your code can save up to 60-70% of disk space, which means faster file download. By merging few files into one bigger file (concatenation), web server has to make fewer http requests and it means faster download time.

2) Avoid complicated JavaScript loops and unnecessary calculations. There is big chance that somewhere you have a function or a loop that you don’t need, but it’s still getting executed by the browser. Go through the code regularly and clean up unnecessary or old pieces.

3. Reuse the code as much as possible. Duplicating the code takes up more time, harder to maintain, more time to execute and more time to download.

4) Include JavaScript files at the bottom of the html (footer) so page renders before all required scripts are being downloaded, and css at the top (header) to get all html painted correctly without unstyled flash of content.

5. Avoid animation when possible.

6) Use CSS3 wisely, things like scale and transition affect paint time.

7. Avoid re-painting and re-calculation. Changing the dom after website has been loaded means web browser needs to recalculate the position of some elements on the page.

8) Use video instead of animated gifs. GIF images take in some instances up to 1GB of RAM.

9. Use CDN to offload asset loading to third party server (usually geographically close to user’s location).

10) Compress and optimize images. I recommend progressive JPEGs or webp. Or avoid images at all when possible. Icon fonts are great replacement for images and it’s vector based meaning the quality is infinitely scalable on any screen size.

11. In chrome use [User Timing API](http://www.sitepoint.com/discovering-user-timing-api/) (like performance.mark(‘image’) to find load time for any particular piece of code )

### **Speed perception.**

The speed of any website is crucial to its success, and it's important to know how measure the speed and performance of a web app or website.

There are 3 different response time limits (according to [Jacob Nielsen](http://www.nngroup.com/people/jakob-nielsen/) research), the time passed from the moment user interacted with an element on the screen and the app response:

- 100 ms - web page feels instant

- 1000ms - some delay noticeable, but still feels seamless

- 10s - at this point we lost user attention

#### **4 phases of interaction**

- Page load

- Idle (ready for interaction when needed)

- Response to input

- Scrolling and animation (60 fps)

#### **Google came up with RAIL (Response Animation Idle Latency) model to identify key metrics for website performance.**

Response - if time from tap to paint is less than 100ms, then it feels fast, touch move (scroll) to paint, the ideal time is less than 16ms.

Animation - each frame should be completed in less than 16ms.

Idle - the page idle, all background work should be completed and page should be ready for user interaction any moment. It's recommended to complete background work in 50ms chunks.

Load - the website is ready to use in less than 1000 ms. User should see critical content within this time, it could be just navigation, or all the elements above the fold. It's important to know what the critical content is and optimize your website around that.

### **Collaboration**

The best time to improve the performance is before building a project. So, it’s important to be aware of that when working with designers, clients or project managers. When all the team members educated about performance and why it matters, it’s easier to make decisions. Define most important design elements on the page to satisfy business goals and prioritize them, decide what’s not important to the user experience and remove it.
