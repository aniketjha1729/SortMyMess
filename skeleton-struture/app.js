const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverrid = require('method-override');
const mongoose=require("mongoose");
const PORT = process.env.PORT || 1234;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverrid('_method'));
app.engine('handlebars', exphbs({ defaultLayout: ''}));
app.set('view engine', 'handlebars');


mongoose.connect("mongodb://localhost/Mess", { useNewUrlParser: true }, () => {
  console.log("Database Connected");
});


const home = require('./routes/index');
app.use('/', home);
const member=require("./routes/member");
app.use('/',member);

app.listen(PORT, console.log(`Server is up-end running  ${PORT}`));
