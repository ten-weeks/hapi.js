var hapi = require ('hapi');
var server = new hapi.Server();
var path = require ('path');
var pg = require ('pg');

server.connection ({
  host: 'localhost',
  port : 8080,

});


var config ={
  user : 'postgres',
  database : 'hapi',
  password : '1121993',
  host : 'localhost'
}

var client = new pg.Client(config);

// server.register( require ('inert') , function (err) {
//   if(err){
//     throw err;
//   }
//   server.route({
//     method : 'GET',
//     path : '/facebook.jpg',
//     handler : function (request,reply){
//       reply.file('facebook.jpg');
//     }
//   })
//
// });

client.connect();
server.register( require ('vision') , function (err) {
  if(err){
    throw err;
  }


// server.route({
//   method : 'GET',
//   path : '/{userName}',
//   handler : function (request,reply){
//     var name = request.params.userName
//     reply.view('index', {userName : name});
//   }
//
// });

server.route({
  method : 'GET',
  path : '/',
  handler : function (request,reply){
    client.query('SELECT * FROM people', function(err, result){
      console.log(result.rows[0].name);
      if(err){
      throw err;
    }
      reply('my name is ' + result.rows[0].name);
    })
  }

});

});

// server.views({
//   engines : {
//     html : require('handlebars')
//   },
//   relativeTo : __dirname,
//     path : 'templates'
//   });
//
// })



// server.route({
//   method : 'GET',
//   path : '/home/{userName}',
//   handler : function (request,reply){
//     reply('help me ' + request.params.userName);
//   }
//
// });
// server.route({
//   method : 'GET',
//   path : '/facebook.jpg',
//   handler : function (request,reply){
//     reply.file('facebook.jpg');
//   }
// })


//
// server.route({
//   method : 'GET',
//   path : '/',
//   handler : function (request,reply){
//     reply("<img src = 'facebook.jpg' />");
//   }
// })

// })
server.start( function(){
  console.log('listion to 3000', server.info.uri);
});
