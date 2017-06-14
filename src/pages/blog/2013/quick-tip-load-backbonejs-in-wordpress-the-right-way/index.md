---
title: Quick Tip - Load backbonejs in WordPress (the right way)
date: "2013-01-03T11:53:00.169Z"
layout: post
path: "/quick-tip-load-backbonejs-in-wordpress-the-right-way/"
id: 317
---

Now that WordPress 3.5 sips with Backbone and Underscore – you can easily include them into your WordPress theme and do some fun stuff. Put this code in functions.php
```
function loadBackbone() {
  wp_enqueue_script('backbone');
}
```

`add_action(‘wp_enqueue_scripts’, ‘loadBackbone’);`
