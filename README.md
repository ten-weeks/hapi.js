### Hapi.js
#### This example is just to use hapi.js framework and handling it with `database`.

#### Hapi.js is an open-source framework that provides us with different objects and methods for abstracting HTTP, just you need to install hapi by `$ npm install hapi --save ` , and make connection with server to used it.


#### ***How to do routing and how to access query params and path params:***
 After call hapi, and make connection with server, we can use route that contains object of (method, path, and handler)

```js
 server.route({
  method : 'GET',
  path : '/{userName}',
   handler : function (request,reply){
   reply('Hello World !' + request.params.userName);
  }

});

```


#### ***How to implement views and handlebar.js by vision and handlebars module:***

```js
$ npm install vision --save
$ npm install handlebars --save
```
##### We used vision to add dynamic content from js to html file

vision module contains views that used for add file (html,css,..) reply.view('file_name'), and in handlebars we can use the template to pass variable from js into html file

```js
server.views({
   engines : {
     html : require('handlebars')
   },
   relativeTo : __dirname,
     path : 'templates'
   });
```

#### ***How to server static content:***
We can add static content without vision and handlebars, just by reply what we went as in example above.

#### Inert is amodule that used for add image in website

#### We use postgres databsae to insert,select variable inside handler for hapi server
