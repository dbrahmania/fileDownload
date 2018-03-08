# fileDownload

Simple download any file using minimal framework

Requirement
1. FileServer
2. Node
3. Express JS, Express Generator (optional)
4. Request API

## BackEnd Side

**FileServer**
Host the file which you want to download. For sake of simplicity I used a Python SimpleHTTP server.

    python -m SimpleHTTPServer [port]
    python -m SimpleHTTPServer 5000

**Express JS**

To create the server which interacts with the front-end.
In addition to that, makes request to FileServer too.

File: [/routes/user.js](https://github.com/deepak-brahmania/fileDownload/blob/master/routes/users.js)

      router.get('/download', function(req, res) {
	      var data = null;
	      request('http://localhost:5000/xxxx.pdf')
		   .pipe(res.status(200));
        });

  

## Frontend Side
File: [/views/index.jade](https://github.com/deepak-brahmania/fileDownload/blob/master/views/index.jade)

    h1= title
    p Welcome to #{title}
    a(href='/users/download' download='filename') download

That's it. 


