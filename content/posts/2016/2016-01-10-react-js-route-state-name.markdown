---
author: alex
category: JavaScript
comments: true
date: 2016-01-10T14:32:52Z
slug: react-js-route-state-name
tags:
  - JavaScript
  - quick tip
  - React.js
title: React.js route state name
wordpress_id: 933
template: post
aliases:
  - /2016/01/react-js-route-state-name/
  - /2016/react-js-route-state-name/
description: "React.js router is at version 2.0 as of now. It’s changing fast. So this may not work few months from now. I had the case where I wanted to create REST URLs but still re-use components where possible. That’s one of the selling points of React as a library. In my case I wanted to re-use form in the “new” and “update” pages"
---

React.js router is at version 2.0 as of now. It’s changing fast. So this may not work few months from now. I had the case where I wanted to create REST URLs but still re-use components where possible. That’s one of the selling points of React as a library. In my case I wanted to re-use form in the “new” and “update” pages. Here is how I got it working:

    <Route component={QuotesSingle} path='/quotes/view/:id' />
    <Route component={QuotesNew} name='edit' path='/quotes/edit/:id' />
    <Route component={QuotesList} path='/quotes/all' />
    <Route component={QuotesNew} name='new' path='/quotes/new' />

You can see I use QuotesNew component for both "edit" and "new" states. [Turns out](http://stackoverflow.com/questions/34571450/route-state-name-in-reactredux/34572118) you can pass any properties you want to your routes, including name and then access it in your component like this:

    componentDidMount (state) {
     if (this.props.route.name === 'edit') {
       this.updateItem()
     }
    }

Now I can re-use components and still be able to perform route specific logic and run conditionals based on where a user is in the app.
