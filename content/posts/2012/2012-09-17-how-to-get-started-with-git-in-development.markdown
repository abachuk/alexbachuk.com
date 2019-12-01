---
author: alex
category: Software engineering
comments: true
date: 2012-09-17T04:30:30Z
link: http://alexbachuk.com/how-to-get-started-with-git-in-development/
slug: how-to-get-started-with-git-in-development
tags:
  - git
  - github
  - web development
title: How to get started with git in development
url: /2012/09/17/how-to-get-started-with-git-in-development/
wordpress_id: 195
template: post
description: While working with other freelancers on a couple of projects we were having a hard time exchanging the code and collaborating efficiently.  Making changes on live or staging server via FTP is fast and great, but there is one big problem with that - we overwrite each others changes.
---

While working with other freelancers on a couple of projects we were having a hard time exchanging the code and collaborating efficiently.  Making changes on live or staging server via FTP is fast and great, but there is one big problem with that - we overwrite each others changes. Or if I work alone on a project - I just can't keep track of what was done and exactly what file I changed last time. Plus, there is no backup copy of my code unless I manually transfer files to my computer. It all becomes a big mess. There has to be a better way to organize development workflow. That's when we decided to try git as it is very hot topic in development community. Guess what - it works for us perfectly!

Git is a version control system. All of us (who use computer once in awhile) used version control or revision control in one form or another. We all save file as V1 or added date to file name, sent emails with revisions to a document or design... That's version control. Working with code is the same - we need to be able to save revisions at some point or backup before we screw it up really bad (at least to have last working copy) Version control existed for a long time (since 1970 -s) and became popular in 1986 as [CVS](http://en.wikipedia.org/wiki/Concurrent_Versions_System).

All developers should use version control as it makes life so much easier ince you get it. It can work as backup, collaboration or revision system. It may sound too difficult to go through all the steps instead of just logging to FTP and make that small change in CSS... but it pays off to make extra effort and set up local development environment, track everything you do and be able to collaborate with others.

There are 3 most popular version control systems these days:

- [Git](http://git-scm.com/) - what everyone uses

- [Mercurial](http://mercurial.selenic.com/) - similar to git but not as popular

- [SVN (subversions)](http://subversion.tigris.org/) - old school version control

And, of course, the most popular is Git. "_Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency._" Git is a command line tool... mostly. So, to get most of it - you need to get comfortable using terminal (command line). Like most of people I am scared of terminal commands, it's like memorizing math or physics formulas in school. But after forcing myself to use terminal for awhile - I can say it's pretty cool, you can get faster to any file, open text editor, connect to SSH, commit to github, etc. Git can be installed on any computer, shared or dedicated server, you can host git repositories on your [HostGator](http://secure.hostgator.com/~affiliat/cgi-bin/affiliates/clickthru.cgi?id=netxm1) account, but you don't have to go through all the set up and managing process...

Luckily there are great git hosting services like [GitHub](https://github.com/) and [BitBucket](https://bitbucket.org/). If you searched for any jQuery, WordPress or any other plugins  - chances are they were hosted on GitHub. Many developers create demo pages, documentation pages and host code on GitHub to offload traffic from their own servers (which os good when your plugin becomes very popular).  Both GitHub and Bitbucket offer free accounts - so it's very affordable.

Github offers free GUI app for [Mac](http://mac.github.com/) and [Windows](http://windows.github.com/). And Bitbucket offers free app for Mac (my favorite) - [SourceTree](http://www.sourcetreeapp.com/). So, as you can see - terminal skills are optional.

Instead of listing all possible terminal commands - I'll just summarize all basic principles and capabilities of git and UI apps are very easy to use once you know what is what.

## Commit

Commit is a way of saving your changes. Let's say, you're fixing a bug, you fixed it making changes in 3 different files, you commit these changes with comment "Fixes bug ABC". Now everyone on your team can see what was done to fix this bug and what files were modified. And if needed revert changes in the future. It's like creating a snapshot. In [Git documentation](http://git-scm.com/book/en/Git-Branching-What-a-Branch-Is) it sounds:  *When you commit in Git, Git stores a commit object that contains a pointer to the snapshot of the content you staged, the author and message metadata, and zero or more pointers to the commit or commits that were the direct parents of this commit: zero parents for the first commit, one parent for a normal commit, and multiple parents for a commit that results from a merge of two or more branches.*
`$ git commit -m 'Fixes bug ABC'`

## Push

Push is a command that sends commit(s) to repository. If you're fixing 3 bugs - you commit 3 times with different messages, but it's not really exciting to have these fixes on your computer, nobody will find out about these fixes - and "push" does that, it pushes files to Github, your hosted repo, or other remote repository.
`$ git push originRepo remoteRepo`

## Pull

After all bugs are fixed and all to-dos are completed by all developers in your team. It's time to see what everyone has done. So, all developers push code to Github repo and... then pull. Magically - all changes were merged and you have updated code on your computer without copy/pasting. Push is fetching remote repo and merging the code.
`$ git pull origin`

## Branch

When working on new feature or hiring freelancer to help you, it's worth creating new branch. Branch is a copy of master branch but is independent, so nobody (even you) can't break working code. Let's say you're working on cool new app and it's half done - your boss tells you to make that slider awesomer - instead of committing and reverting changes if it's not working, make a new branch. If new code works great and everyone is happy - merge new branch with master, if for some reason it didn't workout, delete new branch and make a new one. While working locally git is smart enough to load only brach you're working on, so you'll have only one folder. Branching is one of the best features of git, it's very easy to use and makes development and collaborating much easier.
`$ git branch development`

## Stash

Stashing is saving changes temporarily without committing. It's not saved in git but still part of repository. So if you need to merge remote repo with local but there some changes in your code and it's not ready for a commit. Just stash the changes, merge the code and work unfinished code then.
`$git stash save "Saving just in case"`
`$git stash list`

Summary

As you can see these are just few commands / features of git. It's way more powerful and has a lot more to discover than what I listed here. And don't worry, once you understand the basics - any UI app is easy to use. Also, a great source for learning everything about git is its documentation. It presented in form of [book](http://git-scm.com/book) and it's free.
