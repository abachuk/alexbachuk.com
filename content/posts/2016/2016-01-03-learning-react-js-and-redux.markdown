---
author: alex
category: JavaScript
comments: true
date: 2016-01-03T20:35:38Z
link: http://alexbachuk.com/learning-react-js-and-redux/
slug: learning-react-js-and-redux
template: post
tags:
  - JavaScript
  - open source
  - React.js
  - Redux
title: Learning React.js and Redux
wordpress_id: 926
aliases:
  - /2016/01/learning-react-js-and-redux/
  - /2016/learning-react-js-and-redux/
description: "I had a hard time learning React.js, because it requires complex boilerplate setup, tooling and special application architecture such as Flux or Redux. After watching many intro videos or tutorials I wasn’t making progress until I decided to develop simple open source project"
---

TL;DR I had a hard time learning React.js, because it requires complex boilerplate setup, tooling and special application architecture such as Flux or Redux. After watching many intro videos or tutorials I wasn’t making progress until I decided to develop simple [open source project](https://github.com/abachuk/quotes) with React+Redux using [open source boilerplate](https://github.com/davezuko/react-redux-starter-kit). As I try to make every feature - I’m learning how to do it with React+Redux and sometimes asking questions on [Stackoverflow](http://stackoverflow.com/questions/34571450/route-state-name-in-reactredux) or [Github](https://github.com/davezuko/react-redux-starter-kit/issues/336#issuecomment-166700444).

Last year [React.js](https://facebook.github.io/react/) has become really popular. At that time I was part of the team which was in the middle of launching a big Angular.js project. My next project after that was based on Angular as well. I’ve heard of React, knew it was next hot framework out there, in addition to (or replacement for) Backbone, Ember and Angular. But I never had a chance and reason to get into React seriously, other than watching some introductory [egghead.io](http://egghead.io) videos. Based on some light reading it became clear - the framework basics were not too complicated after all. And benefits are too good: virtual dom for speed, reusability of components, ES2015 support, ability to develop native apps just to name a few.

Very first Angular. js project was done and while working on my second big Angular.js project, I felt very comfortable with this framework, it’s time to learn something new. I got more interested in learning React. There was some much buzz in the JavaScript community around what Facebook was doing with React.js, many developers also jumped on the React.js bandwagon as well. New technologies like [Flux](https://facebook.github.io/flux/), [GraphQL](https://facebook.github.io/graphql/), React Native, Relay are starting to appear more and more in my [twitter feed](https://twitter.com/netxm) and places like [JavaScript weekly](http://javascriptweekly.com/) and [Hacker News](https://news.ycombinator.com/). These concepts are completely new to me, which makes it harder to learn them. For example, flux is not a framework or library but a concept, a way to structure an app just like MVC... but different.

In my mind all these new frameworks / libraries / concepts are interrelated because Facebook was behind all of them. When I read React tutorials, most of it are based on flux or reflux or redux using graphGL or webpack and babel.js. Which means I have to learn them all at the same time. For a few months I’ve been chasing my tail trying to understand, read APIs and learn React, React Native, Flux, Redux, Webpack, Babel. It was very frustrating. Just take tooling and boilerplate alone, it’s a nightmare. And then a library introduces breaking change. Start all over.

All this time, I kept thinking why not just use [Meteor.js](https://www.meteor.com/)? It’s a full-stack framework that takes care of most of the boilerplate and tooling. It supports ES2015, hot reloading, universal JavaScript, well documented router API, user accounts and authentication, mongoDB support. I’m already very comfortable developing with Meteor.js. I can build average prototype in few weeks. Instead of figuring out how to connect Babel+Redux+React+Webpack+Express+Router together I can spend that time working on app features using Meteor.js.

But, out of curiosity I decided to learn React.js (and related concepts), as 44 thousand developers ([who starred it on github](https://github.com/facebook/react)) can’t be wrong about how awesome it is, right? And looks like it’s becoming the library of choice for many enterprise and startup projects. It may even [kill Angular eventually](https://www.quora.com/Is-React-killing-Angular) (is it Google vs Facebook now?). My decision was: even if I’m not using React for my next side project or work project, I have to be familiar with it. Just like any responsible front end developer would say.

As [mentioned before](https://alexbachuk.com/become-a-better-web-developer/), the best way to learn is by doing. I picked a very simple idea for my project as a playground. It’s a collection of popular quotes or jokes. To avoid even more confusion and challenges I decided to use Firebase instead of a self-hosted database. Firebase has good API documentation and is very similar to mongoDB.

While building this project, I’ll cover the following concepts:

1. Routing

2) Authentication

3. Forms

4) Reusing components

5. Metadata (categories, tags, dates, etc)

6) CRUD (create, read, update, delete)

7. How to work with PaaS (Firebase in this case)

8) React+Redux architecture and best practices (the goal of entire project and side effect after creating it)

I already started [working on this project](https://github.com/abachuk/quotes) (it’s based on [popular boilerplate](https://github.com/davezuko/react-redux-starter-kit)) and decided to make it an open source, there is nothing proprietary about this idea or code anyway. Hopefully it will be useful to other developers if they get stuck or might serve as a reference. If you’re a designer or a developer who wants to contribute, please let me know - I would love to collaborate and keep learning together.

So far there were lots of challenges I had to overcome. [Github](https://github.com/davezuko/react-redux-starter-kit/issues/336#issuecomment-166700444) issue tracker and [stack overflow](http://stackoverflow.com/questions/34571450/route-state-name-in-reactredux) are the best places to get help when you are stuck.

Some of the challenges were:

- how to pass state name to the router

* how to implement redux-forms properly

- how to upload files

* how to dispatch async actions (Firebase API)

- authenticated state and protect some routes with login

* display initial form values for edit view

I plan to write a simple redux intro tutorial and cover some basics I couldn’t understand when I started this project. And then write the same about React. What do YOU want to learn specifically about React+Redux ?
