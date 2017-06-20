---
author: alex
categories:
- JavaScript
- Node.js
comments: true
date: 2015-10-06T19:26:02Z
link: http://alexbachuk.com/upload-files-with-meteor-js-aws-and-froala-wysiwyg-package/
slug: upload-files-with-meteor-js-aws-and-froala-wysiwyg-package
tags:
- meteor.js
- wysiwyg
title: Upload files with meteor.js, aws and froala wysiwyg package
url: /2015/10/06/upload-files-with-meteor-js-aws-and-froala-wysiwyg-package/
wordpress_id: 908
---

It’s not very easy to upload files directly to Meteor, although there is a way to “emulate” file system and upload files directly to your server, why not use Amazon S3, which very cheap and fast to host static files. I find that having the separation gives some peace of mind, you can deploy your app, change servers, even delete the app or re-build it from the ground up, without affecting your or users' static files such as images, videos, documents, etc.

I was using [S3 package developed by @Lepozepo](https://github.com/Lepozepo/S3).  The documentation shows how to configure amazon s3 account to allow static file hosting. And it works great, although once thing that wasn’t clear right away and where I got stuck is required by Amazon policy and signature, which is generated on the server side. Specifically I needed this in order to upload images from [Froala WYSIWYG](https://www.froala.com/wysiwyg-editor) to S3.

I spent few days figuring it our, so hopefully this will save you some time.

1. Add both [froala](https://github.com/froala/froala-reactive/) and S3 packages to your Meteor.js app.
2. Add froala reactive to your html template

    
    
    < template name=“MyPost">
      <h2>Add your post</h2 >
      {{> froalaReactive
            _onbeforeSave=doSave
            inlineMode=false
            imageUploadToS3=imageUploadToS3
      }}
    </template >
    



3. in JavaScript file (client) add a helper for this template, here we’re creating a method specified in froalaReactive template above, which uploads a file to amazon using correct  parameters.


    
    
    Template.MyPost.helpers({
      imageUploadToS3: function() {
    
          return {
            bucket: ‘mybucket',
            region: 's3', //'s3-website-us-east-1', //us-east-1
            keyStart: 'data/',
            callback: function (url, key) {
    
            },
            params: {
              acl: 'public-read', // ACL according to Amazon Documentation.
              AWSAccessKeyId: ‘xxxxxxxxx', // Access Key from Amazon.
              policy: Session.get('awsBase').s3Policy,  // Policy string computed in the backend.
              signature: Session.get('awsBase').s3Signature, // Signature computed in the backend.
            }
          }
    
      }
    
    });
    



4. As you see there are few things we need to add like policy and signature, that’s where I was getting stuck for some time. Let’s handle that on the server side.

    
    
    Meteor.methods({
    
        // method for generating and encoding AWS policy and signature on the server @AB
        froalaUpload: function() {
    
          // require crypto module for encoding
          var crypto = Npm.require("crypto");
    
          // setting expiration date, required by AWS
          var expiration = moment.utc(moment().add(2, 'days')).toISOString();
    
          // building policy object, according to AWS documentation
          var s3Policy = {
            "expiration": expiration,
            "conditions": [
              ["starts-with", "$key", "data"],
              {"bucket": “mybucket"},
              {"acl": "public-read"},
              ["starts-with", "$Content-Type", ''],
              {"success_action_status": "201"},
              {"x-requested-with": "xhr"}
            ]
          };
    
          // stringify and encode the policy
          var stringPolicy = JSON.stringify(s3Policy);
          var base64Policy = Buffer(stringPolicy, "utf-8").toString("base64");
    
          // sign the base64 encoded policy
          var signature = crypto.createHmac("sha1", ‘xxx_your_amazon_secret_key_xxxxx')
            .update(new Buffer(base64Policy, "utf-8"))
            .digest("base64");
    
          // build the results object
          var s3Credentials = {
            s3Policy: base64Policy,
            s3Signature: signature
          };
    
          // return S3 signature and policy for client or server to use
          return s3Credentials;
    
        }
    
    });
    



5. Now when we have both policy and signature, let’s go back to the client helper function and call this method to get these values on the client side (at the top of the file):

    
    
    var aws = Meteor.call('froalaUpload', function(error, result){
      Session.set('awsBase', result); // assign results to the session, reactive var wasn't reliable
    });
    



That’s it, now you should have fully functional file upload. Now when user uploads a new file, a method "imageUploadToS3" we specified in html will be called, which saves the image to AWS server, optionally there is a callback in case you need to do anything with the URL. 
