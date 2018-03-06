var express= require('express');
var methodOverride= ('method-override');
var http = require('http')
var bodyParser= require('body-parser');
var path= require('path');
var exphbs= require ('express-handlebars');

var app= express();
var PORT= 3000;

var models= require('./models');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var routes = require('./controllers/burgers_controllers.js');
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);
app.use(routes);

models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});