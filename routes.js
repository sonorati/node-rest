module.exports = function(app){
    var catalogue = require('./controllers/catalogueController');
    app.get('/catalogue', catalogue.findAll);
}