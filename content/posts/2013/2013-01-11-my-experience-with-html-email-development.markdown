---
author: alex
category: HTML
comments: true
date: 2013-01-11T03:09:59Z
link: http://alexbachuk.com/my-experience-with-html-email-development/
slug: my-experience-with-html-email-development
tags:
  - html emails
  - tips
title: My experience with HTML Email development
url: /2013/01/11/my-experience-with-html-email-development/
wordpress_id: 357
template: post
description: I started doing web development around 2008, at that time HTML tables became obsolete and a lot of web developers were advocating for web standards. And as a good practice, I started learning web development the right way, divs and css instead of tables in inline styles.
---

I started doing web development around 2008, at that time HTML tables became obsolete and a lot of web developers were advocating for web standards. And as a good practice, I started learning web development the right way, divs and css instead of tables in inline styles.

In my career I never had to do HTML emails and when clients asked me to make nice HTML email templates - I either outsourced it or directed them to one of the marketplaces to pick pre-made template and then changed a few thing here and there.

But recently I had to roll up my sleeves and do html emails myself :) And here I found out why so many people hate them. It’s simply very inconsistent. There are 6-7 major email clients and they all render html differently. Gmail, Yahoo Mail, Hotmail, AOL (different web browsers), Outlook 203,2010,2011, 2013, Apple Mail (desktop and ios), Android mail, etc. The worst of course is … yes Microsoft’s Outlook. I was surprised to learn that it uses Word (yes MS Word) to render HTML instead of Internet Explorer (which is very far from being a good browser).

![html-email-development-notes](http://alexbachuk.com/wp-content/uploads/2013/01/html-email-development-notes.jpg)

There is some hope though. Some tools were created to help poor developers to deal with this stuff. I personally prefer using Litmus for testing and HTML email boilerplate for starting new project (it has very nice reset and some hacks for Outlook and mobile mail clients).

The main difference is using html tables and inline css for everything, email template needs to be one file, so no external stylesheets, no javascript (email clients don’t support javascript, so no fancy animations).
Here are some additional tips from my experience:

- You can nest as many tables inside table cells as needed, just don’t go too crazy and keep the code organized

* Table rows (tr) can’t be styled and all css should be applied to td’s.

- Remember it can look the same across all platforms and clients.

* Test often (I use litmus.com), pick only few platforms you want to support, don’t try to support all email clients out there, it’s impossible.

- Keep in mind that outlook doesn’t support background image and if you really need to have backgound image - use this hack

* Make sure to run the code by W3C validator and fix as many validation as you can. Don’t try to make it perfect - validation is only to help you (show unclosed tags, missing semicolons, etc) and it’s not mandatory.

For me it’s still something very unusual to work with, but I have to suck it up and deal with all these horrible hacks and inconsistencies, emails are not going anywhere, it’s still #1 marketing tool and looks like email clients are not doing any big improvements in the near future. Next thing for me is to test drive responsive emails as more and more people use phones to check emails (I deleted all emails on my laptop and check emails on the iphone or directly gmail)
