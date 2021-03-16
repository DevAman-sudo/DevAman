module.exports = function(app){

    // index page //
    app.get('/', function(req, res){
        res.render('index');
    });
    
};