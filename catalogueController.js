var http = require('http');
var rest = require('./catalogueService');
var options = {
  host: 'client.nowtv.com',
  path: '/catalogue'
};

exports.findAll = function(req, res) {
	rest.getJSON(options, function(statusCode, result) {
    console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
    res.statusCode = statusCode;
    res.send(result);
});
};
