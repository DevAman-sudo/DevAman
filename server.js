// NPM packages //
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const chalk = require('chalk');
const path = require('path');
require('./routes/routes')(app);

// files path //
const staticPath = path.join(__dirname , '/public/');
const viewsPath = path.join(__dirname , '/templates/views/');
const partialsPath = path.join(__dirname , '/templates/partials/');

// express url encode for POST request //
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// To Set The View Engine as handlebars //
app.set('view engine', 'hbs');
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));


// listening app on port 8080 //
app.listen(port , (err) => {
    if (err) {
        console.log(`error found while listening on server === ${err}`);
    } else {
        console.log( chalk.red.bgBlue.bold(`server runnung on    http://127.0.0.1:${port}`));
    }
});