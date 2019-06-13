const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverrid = require('method-override');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
//###################//
//Method Overrid
//###################//
app.use(methodOverrid('_method'));
app.engine('handlebars', exphbs({ defaultLayout: ''}));
app.set('view engine', 'handlebars');

const home = require('./routes/index');
app.use('/', home);

app.listen(PORT, console.log(`Server is up-end running  ${PORT}`));
