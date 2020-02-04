var spawn = require('child_process').exec;

spawn('twitter-proxy');
spawn('http-server');

console.log('Server running on http://localhost:8080');

