'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
var server = require('http').Server(app);
var cors = require('cors');
var path = require('path');


/**
 * Config 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/vendor', express.static(path.join(__dirname, '/node_modules')));

/**
 * Create HTTP server.
 */
var port = process.env.PORT || 3000;        // set our port


function updateJson(data){
  fs.writeFile(__dirname+"/machines.json", JSON.stringify(data), function (err) {
    if (err) return console.log(err);
    console.log('writing to machine.json');
});
}

var router = express.Router();              

router.get('/api/machines', function(req, res) {
   var machines = JSON.parse(fs.readFileSync(__dirname+'/machines.json', 'utf8'));
   res.setHeader('Content-Type', 'application/json');
   res.send(machines);
});

router.put('/api/machines/', function(req, res) {
    var newMachines = req.body;
    updateJson(newMachines);
    res.setHeader('Content-Type', 'application/json');
    res.send(newMachines);
});


app.use('/', router);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

server.listen(port);

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log('socket ok');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('machineUpdate', (machines) => {
        console.log('server machineUpdate');
        io.emit('machineUpdate', machines);
    });

});