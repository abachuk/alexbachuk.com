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

```
const fruits = {
  apples: 3,
  bananas: 4,
  pears: 1,
  blackberries: 8
}

// always check if Storage is available
if (typeof(Storage)) {
  // saving the object (or JSON) to localStorage
  localStorage.setItem("fruits", JSON.stringify(fruits));

  // retrieving the stringified object from localStorage
  JSON.parse(localStorage.getItem("fruits"))

  // clearing the "fruits" key and value, now if you try to access it - it's null
  localStorage.removeItem('fruits');
}
```

## Add expiration

Even though expiration is not supported in localStorage as it is a simple key/value store, there is a way to be creative and make it work. This may be handy for displaying some date or time sensitive information to the user, like banners or tool tips or recently searched data.

````
// let's define our expiration date
const today = new Date();
let expDate = new Date();
expDate.setDate(today.getDate() + 30); // 30 days expiration

// a searches user does in your app on the first visit, we collect them to save to localStorage
const userRecentlocations = [
{ city: "New York", country: "US", id: "2390230" },
{ city: "Athens", country: "GR", id: "304802" },
{ city: "Kyiv", country: "UA", id: "1239488" }
];

// if localStorage is available, we'll save user's serach history under recentSearches key
if (typeof (Storage)) {
// we can add as much extra data as we want, in our case we are adding expiration
localStorage.setItem("recentSearches", JSON.stringify({
expiration: expDate,
locations: userRecentlocations
}));
}

/** 🦄 **/
// bunch of your app logic
/** 🔥 **/

// when it's time to access previous search history, first we check if we can
if (typeof (Storage)) {
const recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
// then check for expiraiton date before showing to the user
if(new Date(recentSearches.expiration) > new Date()) {
console.log(recentSearches.locations)
} else {
// we can completely clear the value OR display user friendly massage
console.log("Unfortuenately your search history has expired");
}
}

```

```
````
