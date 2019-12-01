---
author: alex
category: JavaScript
comments: true
date: 2017-02-10T15:01:41Z
slug: send-emails-with-ember-js-amazon-ses-firebase
tags:
  - AWS
  - Ember.js
  - Firebase
title: Send emails with Ember.js + Amazon SES + Firebase
wordpress_id: 979
image: /images/2017/send-emails.jpeg
template: post
aliases:
  - /2017/02/10/send-emails-with-ember-js-amazon-ses-firebase/
  - /2017/send-emails-with-ember-js-amazon-ses-firebase/
---

There is a need to build client side only (front end) applications. Tools like [Ember CLI](https://ember-cli.com/), [Create react app](https://github.com/facebookincubator/create-react-app), [Angular 2 CLI](https://cli.angular.io/) make it very easy to bootstrap a JavaScript app in just a few minutes and start building features.

The challenge arises when you need to add a piece of server side logic, like sending emails, uploading files, authentication, or storing some data to the database. In most cases, it doesn’t make sense to add a full blown server, which requires to be maintained and setup . All you want is one or two server side features, right? 😉

[Firebase](https://firebase.google.com/) can solve that problem (partially). It adds missing server side components to your front-end application without managing a server. Think of it as a NoSQL database with built-in API and some extra features like analytics, hosting and authentication.

All examples here are for Ember.js, since that’s the project I was working on when I had the need to add a contact form. But it can be applied to any front end framework where the server is not available or cost effective.

#### The goal

When the user submits a form on a website, it saves the submitted data in the database for future reference and sends an email notification to the website admin containing all the submitted values. This is a simple feature, which comes for free with any CMS or server side framework (WordPress, Ruby on Rails, etc). But this simple feature requires a server. And we don’t want to add server…

![](https://cdn-images-1.medium.com/max/1200/1*wb7vHxVEwNG7txj7vC69zg.png)

#### The solution

We are combining Firebase and AWS simple email service (SES). For low traffic websites — free tier on both services will last you a long time. When the user submits a form — we send an email and save it to the database in parallel.

Here is an implementation for firebase. Add [EmberFire](https://github.com/firebase/emberfire) to your project. After adding API keys to _enviroment.js_, you can start using firebase in your code. Let’s say we have _contact.js_ controller, which handles the form’s “submit” action.

<script src="https://gist.github.com/abachuk/56ffc88dbf654d25110b059091c0395a.js"></script>

That’s all you need to do to save ANY data to Firebase using EmberFire adapter. Pretty easy.

Now, in an ideal world, Firebase would trigger some kind of event and send out an email notifying our admin that the record has been created. But it’s not yet supported. We can use [Amazon SES](https://aws.amazon.com/ses/) instead for this.

1. Sign up for an Amazon account
2. Verify the email address (check your email and click the link). Pay attention to the region, verification, prices and limits that are region specific. ![](https://cdn-images-1.medium.com/max/1200/1*9ZiJT4Et7bcOotTh9ZiwfA.png)
3. By default, the basic account is in sandbox mode. Which means you can only send test emails to verified emails. [Request a limit increase](https://console.aws.amazon.com/support/home?region=us-east-1#/case/create) in order to be able to send emails en masse. [Here is a more detailed documentation](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html). I got mine approved to 50K emails per day within 24 hours (thanks Amazon)
4. Add AWS _npm package npm install aws-sdk -s_, and then add [_ember-browserify_](https://github.com/ef4/ember-browserify) so we can access the npm package in the browser.

**Here is the full contact.js controller:**

<script src="https://gist.github.com/abachuk/46429a0e78b369564f3366556341f614.js"></script>

By combining PaaS like AWS, Firebase and others we can pick and choose what server side features we want to bring to our front end applications without maintaining the servers.
