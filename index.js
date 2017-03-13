var hapi = require('hapi');
var server = new hapi.Server();
var path = require('path');
var pg = require('pg');
var id = 0;
var config = {
    user: 'postgres',
    database: 'hapi',
    password: '1121993',
    host: 'localhost'
}
var client = new pg.Client(config);
client.connect();

server.connection({
    host: 'localhost',
    port: 8080,

});

server.register(require('inert'), function(err) {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/hello.jpg',
        handler: function(request, reply) {
            reply.file('hello.jpg');
        }
    })

});

server.register(require('vision'), function(err) {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.view('main');
        }
    })
    server.route({
        method: 'GET',
        path: '/{userName}',
        handler: function(request, reply) {
            var name = request.params.userName;
            id++;
            client.query(`INSERT INTO people VALUES (${id},\'${name}\');`, function(err) {
                if (err) {
                    throw err;
                }

            })
            reply.view('index');
        }

    });

    server.route({
        method: 'GET',
        path: '/{userName}/display',
        handler: function(request, reply) {
            client.query('SELECT * FROM people', function(err, result) {
                if (err) {
                    throw err;
                }
                var userName = request.params.userName
                var user = result.rows.find(function (item) {
                  return item.name === userName
                })
                reply.view('display', {name : user.name});
            })
        }

    });

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });

})
server.start(function() {
    console.log('listion to 8080', server.info.uri);
});
