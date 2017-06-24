---
author: alex
categories:
- JavaScript
- Node.js
comments: true
date: 2016-12-17T14:58:17Z
slug: uploading-files-with-react-js-and-node-js
tags:
- JavaScript
- node.js
- React.js
title: Uploading files with React.js and Node.js
image: /images/2016/uploading-files-react-node.jpeg
wordpress_id: 976
aliases:
    - /2016/12/uploading-files-with-react-js-and-node-js/
    - /2016/uploading-files-with-react-js-and-node-js/
---

Uploading files is one of the most common tasks performed by web developers. It’s a pretty simple operation when using PHP or other server side frameworks. However, it is not so straightforward when using Node.js, unless you understand how to user [Buffer API](https://nodejs.org/api/buffer.html) for reading streams of binary files (i.e. uploading file content as binary code). Luckily for us, the Node.js community came up with a few solutions.


#### Project set up
We are using React.js on the client, Express.js as the middle (orchestration) layer and external REST API, which is not part of React/Express architecture. One way to handle files is to upload them directly to a server through API from the browser, which may not be ideal in every scenario, for example, when the API is on a different domain or you want to modify the file before sending to API.

Node server is a perfect solution in this case. However, as I mentioned before, developers have to jump through some hoops here. Let’s see how we can do it.

#### Client
Here is a simple input field with an event handler:

<script src="https://gist.github.com/abachuk/ab71e1f3d9c11568097446f6fcbc101d.js"></script>

Let’s go over what’s going on in the client. When the input changes (file is added), the event handler will fire the Redux action creator and pass the file and name as arguments. The action creator will build FormData object, which is required for handling `multipart/form-data`. After we append file and name to the form’s data object, it’s good to go to the server. [Axios](https://github.com/mzabriskie/axios) is a great library for making HTTP requests. In this case, we’re POSTing data to Node.js route. Let’s look at what’s happening on the server.


#### Server

Once the client gives the server a file and other relevant meta info associated with the file, the server has to know how to handle the binary file. Few libraries can help with this. We’ll be using [Multer](https://github.com/expressjs/multer), which is maintained by the Express.js team.

<script src="https://gist.github.com/abachuk/fb66282ba623cb57948defe2209800a5.js"></script>

Let’s go over what’s going on in the server. First, we’re configuring multer to use local `/files/` directory to store uploaded files from the client. It’s important to hold the file somewhere before we send it to REST API, because in most cases we’ll have to provide full path to the files. Another option is to hold it in memory, but that may cause the server to crash. Next, we want to make sure we generate unique file names with file extensions (not provided by default).

The next step is creating the actual route where the client sends FormData and where we pass multer middleware. When the route receives a file, it goes through the middleware first and is stored in our /files directory with a newly generated file name. So, when we get to the callback (which can be refactored to custom middleware), the file is available as part of req object. From here, we can do whatever is needed, in this case, calling our external API (could be S3 or any API that handles files) and passing file and meta info.

#### Conclusion
It may look like an over-engineered solution to a common problem. Nevertheless, there will be cases where you’ll need to use a node server in the middle before sending files to another source. It’s especially tricky when file uploads are not part of the form submit method, and there is a need to handle file uploads independently.
