const restify = require('restify');

let server = restify.createServer({
    name: 'zalo-oa',
    version: '1.0.0',
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', function (req, res) {
    res.send(200);
});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});