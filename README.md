### Hapi.js

#### hapi.js is an open-source framework that provides us with different objects and methods for abstracting HTTP, just you need to install hapi by ``js $ npm install hapi --save ``, and make connection with server to used it


##### how to do routing and how to access query params and path params
 after call hapi, and make connection with server, we can use route that contains object of (method, path, and handler)
 
```js
 server.route({
  method : 'GET',
  path : '/{userName}',
   handler : function (request,reply){
    var name = request.params.userName
   reply.view('index', {userName : name});
  }

});

```


#### how to implement views and handlebar.js

By vision and handlebars module

``js $ npm install vision --save
$ npm install handlebars --save
``
##### we used vision to add dynamic content from js to html file

vision module contains views that used for add file (html,css,..) reply.view('file_name'), and in handlebars we can use the template to pass variable from js into html file

``js
server.views({
   engines : {
     html : require('handlebars')
   },
   relativeTo : __dirname,
     path : 'templates'
   });
``

####  how to server static content
we can add static content without vision and handlebars, just by route any html file

#### inert is amodule that used for add image in website

#### we use postgres databsae to insert,select variable inside handler for hapi server
