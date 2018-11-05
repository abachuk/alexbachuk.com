---
author: alex
categories:
- Computer Science
comments: true
date: 2018-11-04T15:01:41Z
slug: localstorage
tags: 
- 
title: LocalStorage
image:
---

LocalStorage is one of the types of [web browser's persistent storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Using localStorage is useful to store text value (or stringified JSON). Up to 5mb. Unlike sessionStorage which clears when user closes the window, localStorage persists until user clears the data.

Expiration date is not supported but there is a way to add expiration date and time to localStorage. It doesn't work the same way as cookie does. I will cover this later. localStorage can also be easily modified from the browser's dev tools. So, evaluate other options if you need to store sensitive information. LocalStorage is scoped to the domain, so only domain that created key/value can access it. Essentially, it's as secure as the cookie.

Most major [browsers support](https://caniuse.com/#feat=namevalue-storage) localStorage, but one thing to keep in mind is a user can explicitly disable it through browser settings. For example mobile safari in private mode disables localStorage automatically. So you always want to check if it's available.

<script src="https://gist.github.com/abachuk/a35c5c4dd900af0e903bef541018c057.js"></script>

## Add expiration

Even though expiration is not supported in localStorage as it is a simple key/value store, there is a way to be creative and make it work. This may be handy for displaying some date or time sensitive information to the user, like banners or tool tips or recently searched data.

<script src="https://gist.github.com/abachuk/ce85832bc843e97a62085cc99e3d8474.js"></script>
