var Hapi = require('hapi')

var port = 3000

var server = new Hapi.Server('localhost', port, { cors: false })

server.start(function() {
  console.log('started', port)
})

server.route([{
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: { path: './public', listing: false, index: true }
    }
  }, {
    method: 'GET',
    path: '/about',
    handler: { file: './public/about.html' }
  }, {
    method: 'GET',
    path: '/api/{path*}',
    handler: function (request, reply) {

      reply({foo: ['bar'], bar: 'caramel'});
    }
  }

]);
