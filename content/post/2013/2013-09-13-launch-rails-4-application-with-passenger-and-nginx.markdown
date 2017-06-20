---
author: alex
categories:
- Ruby on Rails
- web development
comments: true
date: 2013-09-13T02:21:02Z
link: http://alexbachuk.com/launch-rails-4-application-with-passenger-and-nginx/
slug: launch-rails-4-application-with-passenger-and-nginx
tags:
- linux
- ruby on rails
- web hosting
title: Launch Rails 4 application with passenger and nginx
url: /2013/09/13/launch-rails-4-application-with-passenger-and-nginx/
wordpress_id: 627
---

I've built simple Rails application. Then I decided to move it to "interwebs" and make it live. But... it wasnt' as straigtforward as I thought. Even though there are gazilion tutorials - it just didn't work. After about work of struggle - finally I figured it out. Here is step by step instruction that worked for me, I borrowed different steps from different tutorials. My stack is Linux, Nginx, Passenger, Ruby 2, Rails 4, MySQL, Node.js.

I decided to use [Digital Ocean](https://www.digitalocean.com) as a web host as its prices are very reasonable and support is great (although they couldn't resolve the issues I had). In this case I use 1GB Ram, 30GB SSD Disk droplet with Ubuntu 12.04 x64. Before you perform all these commands transfer your rails app to some directory, I used filezilla and used same SSH login info (root or other admin username).



	
  1. `ssh root@111.111.1.111` SSH as root, using IP address and password you get by email

	
  2. `adduser alex` Create new username, because using root is not recommended.

	
  3. `visudo` Open sudo config file and add admin privileges to newly created user.

	
  4. `alex ALL=(ALL) ALL)` add this and ctrl+x to save 'y' and enter to overwrite

	
  5. `sudo apt-get update` update system packages

	
  6. `curl -L get.rvm.io | bash -s stable` install ruby version manager

	
  7. `source ~/.rvm/scripts/rvm` load RVM

	
  8. `rvm requirements` install all RVM dependencies

	
  9. `rvm install 2.0.0` install ruby version, in this case 2

	
  10. `rvm use 2.0.0` load installed ruby version as default

	
  11. `rvm rubygems current` install rubygems

	
  12. `gem install rails` install latest rails, in this case Rails 4

	
  13. `gem install passenger` install latest passenger

	
  14. `sudo apt-get install libcurl4-openssl-dev` install openssl required by nginx

	
  15. `rvmsudo passenger-install-nginx-module` select all default options.

	
  16. `sudo apt-get install nodejs` install Node.js

	
  17. `sudo apt-get install npm` install node package manager

	
  18. I tried to update node through npm - even after success node version was the same...

	
  19. Make nginx command available``wget -O init-deb.sh http://library.linode.com/assets/660-init-deb.sh
sudo mv init-deb.sh /etc/init.d/nginx
sudo chmod +x /etc/init.d/nginx
sudo /usr/sbin/update-rc.d -f nginx defaults``after that you can control nginx with
sudo /etc/init.d/nginx stop
sudo /etc/init.d/nginx start
sudo /etc/init.d/nginx restart

	
  20. `sudo nano /opt/nginx/conf/nginx.conf` edit nginx configurations

	
  21. server_name - your IP or domain name, root - location of rails app public folder`server {
listen 80;
server_name example.com;
passenger_enabled on;
root /var/www/my_awesome_rails_app/public;
}`

	
  22. Don't forget to comment out "location / { index.html }" line in config file

	
  23. `sudo /etc/init.d/nginx start` open IP or domain in browser and see welcome message

	
  24. `sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql` install mysql server

	
  25. `sudo mysql_install_db` and then `sudo /usr/bin/mysql_secure_installation`

	
  26. `mysql -u root -p` login to mysql shell with password you just set

	
  27. while in mysql shell create new database and add this to database.yml production

	
  28. `
CREATE DATABASE database name;
CREATE USER 'alex'@'localhost' IDENTIFIED BY 'set_your_password_here';
GRANT ALL PRIVILEGES ON your_database.* TO 'alex'@'localhost' WITH GRANT OPTION;
exit;
`

	
  29. `sudo apt-get install git-core` install git

	
  30. `sudo apt-get install libmysql-ruby libmysqlclient-dev` install mysql adapter for rails

	
  31. `bundle install` CD to your rails app and install all dependencies

	
  32. `rake db:migrate RAILS_ENV=production` run all migrations in production mode

	
  33. `RAILS_ENV=production bundle exec rake assets:precompile` precompile all assets

	
  34. if you see permission error, run `sudo chown -R alex:www-data public` to gain ownership over the directory

	
  35. `sudo /etc/init.d/nginx start` restart nginx


