---
author: alex
categories:
- web development
comments: true
date: 2013-02-07T17:19:25Z
link: http://alexbachuk.com/closures-in-javascript/
slug: closures-in-javascript
tags:
- JavaScript
title: Closures in JavaScript
url: /2013/02/07/closures-in-javascript/
wordpress_id: 408
---

![js-closure](http://alexbachuk.com/wp-content/uploads/2013/02/js-closure.jpg)Closures are very nice way to nest functions inside other functions. Closure function is an inner function within parent function and can access all the variables from the parent function. A function have access to all its variables and methods, and closure functions have access to both outer function's variables and its own. Closures store references of outer variables, not copies and that's why they can change the outer variables' values.

The biggest benefit of using closures is scope, so you don't have to create global variables just access values from other function.


    
    
    function foo (x) {
       return function (y) {
          return x + y;
       };
    
    };
    var fooVar = foo(5);  // return 5+y
    var bar = fooVar(10); // return 5+10 == 15
    




Closures are useful in loops when you need to separate loop and the function inside it. Because as we know it stores reference to a variable and not a copy.
