module.exports = function(app){
    var catalogue = require('./catalogueController');
    app.get('/catalogue', catalogue.findAll);
}