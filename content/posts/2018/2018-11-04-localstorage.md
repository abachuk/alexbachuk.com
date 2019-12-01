---
author: alex
category: Web development
comments: true
date: 2018-11-04T15:01:41Z
slug: localstorage
template: "post"
tags:
  - HTML5
  - LocalStorage
title: Web storage, different ways to persist the data
image:
description: "While building single page applicaitons (SPA) with JavaScript, there are times when you need to persist some of the data in the browser. It could be an authentication status, shopping cart selection, whether the user has visited your site before, or even more specific information like filter selection, clicks to personilze the user experience.."
socialImage: "/media/42-line-bible.jpg"
---

While building single page applicaitons (SPA) with JavaScript, there are times when you need to persist some of the data in the browser. It could be an authentication status, shopping cart selection, whether the user has visited your site before, or even more specific information like filter selection, clicks to personilze the user experience.

### There are multiple options to do that:

- Cookies
- Web storage
- Indexed database API

## Cookies

[HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) is a small peristent piece of data, stored in the user browser for specified period of time. Cookies are scoped by a domain. Meaning a cookie from google.com can't access cookies from bing.com and vice versa. Unlike other types of web storage, cookies are supported in all browsers. The average browser limit is 4Kb per domain. They are commonly used to hold important information the state like authentication, shopping cart items, selected filters and other.

#### HTTP only cookie

These kind of cookies are only available server side and can't be accessed by `document.cookie` on the client. This type of cookies is more secure as it prevents [XSS attacks](<https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)>).

#### Session cookie

Session cookie clears when user closes the browser. It's behaving similar to sessionStorage. It's helpful when there is a need to perist the state while user is using the application and browsing between different pages or parts of the app.

## Web storage

It's a simple key/value [storage API](https://www.w3.org/TR/webstorage/). All modern browsers [support](https://caniuse.com/#feat=namevalue-storage) web storage API, but with some limitaitons. One thing to keep in mind is a user can explicitly disable it through browser settings. For example mobile safari in private mode disables localStorage automatically. So you always want to check if it's available.

#### LocalStorage

LocalStorage is one of the types of [web browser's persistent storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). Using localStorage is useful to store text value (or stringified JSON). Up to 5mb. Unlike sessionStorage which clears when a user closes the window, localStorage persists until a user clears the data.

Expiration date is not supported but there is a way to add expiration date and time to localStorage. It doesn't work the same way as cookie does. I will cover this later. localStorage can also be easily modified from the browser's dev tools. So, evaluate other options if you need to store sensitive information. LocalStorage is scoped to the domain, so only domain that created key/value can access it. Essentially, it's as secure as the cookie.

`gist:abachuk/a35c5c4dd900af0e903bef541018c057#localStorage.js`

##### Add expiration

Even though expiration is not supported in localStorage as it is a simple key/value store, there is a way to be creative and make it work. This may be handy for displaying some date or time sensitive information to the user, like banners or tool tips or recently searched data.

`gist:abachuk/ce85832bc843e97a62085cc99e3d8474#localStorage-expiration.js`
