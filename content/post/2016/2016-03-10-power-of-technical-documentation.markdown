---
author: alex
categories:
- web development
comments: true
date: 2016-03-10T22:15:58Z
link: http://alexbachuk.com/power-of-technical-documentation/
slug: power-of-technical-documentation
tags:
- documentation
- JavaScript
- open source
title: Power of technical documentation
wordpress_id: 950
image: /images/2016/photo-coding.jpg
aliases:
    - /2016/03/power-of-technical-documentation/
    - /2016/power-of-technical-documentation/
---

## Good technical documentation makes a difference

There are so many open source projects out there that it’s hard to sort through them all.  Some of them are successful, some of them not so much. If we take all popular projects (meaning over 2-3 thousands of stars on github) - they all have easy-to-follow detailed documentation. It doesn’t mean documentation makes these projects more successful; it means it removes the friction for developers to try and use the project. Documentation doesn’t have to look like an academic research report or a white paper. It’s just an easy-to-follow guide on how to use and implement a piece of software.

Documentation makes a big difference, not only in the open source world but also internally in big and small companies. If an API team takes the time to write good documentation, that means the front end team is more efficient and there are fewer distractions for both sides. If the front end team documents how the app works and some of the logic behind it, that means the marketing team can learn how to take full advantage of the app during marketing campaigns.

## Making an effort

Even though we all know documentation is very important, very few of us actually take the time and do it. The reason is that it’s not easy: it takes time. It’s so much easier just to write code, ship it and move on to the next one. You think that it’s obvious how the app works: it’s obvious why you have to call additional API to get some data; it’s obvious that a URL should not be accessed directly. But it’s not obvious to anyone but the person who actually made the app.

![drow-owl](/images/2016/drow-owl-1024x664.jpg)

Another reason is that many companies can’t afford to the time it takes to write a documentation. But in the long run, they spend more time and money to figure out how things work or why certain choices were made. Sometimes code gets broken because developers didn’t know about some very specific rules. If it’s inside one person’s head, it doesn’t exist. If you are that person, please take the time and write it down and share with others, unless you’re a control freak and want to keep everything to yourself to bring your value up. Keep in mind that the exact opposite happens  when you share what you know. People appreciate it more; that’s why you see free books, free tutorials, and free open source.

## Planning

If you plan it right, writing documentation is not that hard. You just need to make a habit of documenting every feature (reasonable) after it’s finished. First, make a home for all of your documentation. Some tools worth considering are:

  * [ClassMate](http://classmate.io/) (onboarding, documentation as curriculum), shameless plug
  * [GitBook](https://www.gitbook.com/)
  * [Confluence](https://www.atlassian.com/software/confluence)

Keep it simple with a few screenshots, some paragraphs of description, a URL and a paragraph of technical specs (API used, dependencies, file locations, unit tests, etc). For open source projects, include instructions on how to install the project and a step-by-step guide to get started (one of the most frustrating things when trying new libraries or frameworks), and a demo project. As you can see it’s not a lot, at least to get started.

Here are some of the examples of excellent documentation:

  * [Redux](http://redux.js.org/)
  * [Underscore.js](http://underscorejs.org/)
  * [Meteor.js](http://docs.meteor.com/#/full/)

Even if you decide not to invest in any specific tool or platform, google docs or github readme will work just fine.
