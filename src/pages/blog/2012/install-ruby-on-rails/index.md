---
title: Install Ruby on Rails
date: "2012-08-12T01:42:00.169Z"
layout: post
path: "/install-ruby-on-rails/"
---

Recently I started learning ruby on rails. And unlike other languages everything happens mostly in terminal, so next thing I know – I have to use command line now. I tried few tutorials here and there but couldn’t find anything that explained how to properly install ruby and rails step by step, something for ruby beginners. So, I wrote my process here.

I’m using mac and ruby 1.8.7 is pre-installed with Mac OS 10.6 Snow Leopard or later. Xcode has to be installed.

1. First check ruby version, maybe you’re lucky and there is latest one already installed `ruby -v`
2. Update whatever is installed `sudo gem update --system`
3. `sudo gen install rails` this installs rails and all necessary libraries. If you see error “**Failed to build gem native extension**“, make sure “commnad line Tools” are inastalled in Xcode (xcode preferences -> downloads -> components). ![](http://alexbachuk.com/wp-content/uploads/2012/08/xcode-download-prefs.jpg \"xcode-download-prefs\")\
4. `gem list` and rails should be listed there
5. `rails -v` checks what version of rails is installed
6. To upgrade ruby to latest version I used [RVM](https://rvm.io/) (ruby version manager), to install RVM use `curl -L https://get.rvm.io | bash -s stable`
7. restart terminal and load rvm by typing `user$ source ~/.rvm/scripts/rvm`
8. check if rvm is running `source ~/.rvm/scripts/rvm` if you see rvm is a function, everything is working so far.
9. list all possible installation `rvm list known`
10. see what version you’d like to install (in my case it was 1.9.3)
11. install the new version `rvm install 1.9.3` , codess q to continue\n12. finally switch to newly installed version `rvm install 1.9.3` and check `ruby -v` if you see ruby 1.9.3 – it’s all set and you can start using / learning ruby on rails with everything up to date. ![](http://alexbachuk.com/wp-content/uploads/2012/08/rubyv.jpg \"rubyv\")
