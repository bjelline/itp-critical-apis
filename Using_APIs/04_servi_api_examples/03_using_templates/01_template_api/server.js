// You will need to install the twit npm module
// npm install twit
// https://github.com/ttezel/twit
// https://dev.twitter.com/rest/public


var servi = require('servi');
var Twit = require('twit');

var twit = new Twit({
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token: 'YOUR_ACCESS_TOKEN',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

var app = new servi(true);

port(8080);

route('/', requestHandler);

function requestHandler(request) {
  twit.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
    console.log(data);

    //request.header("application/json");
    //request.respond(JSON.stringify(data.statuses));
    request.render("templates/page.html", data);
  });
}

start();