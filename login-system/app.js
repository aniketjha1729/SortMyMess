const express=require('express');
const app=express();
const expressLayouts=require('express-ejs-layouts');
const PORT=process.env.PORT||8000;
const mongoose=require('mongoose');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');

require('./config/passport')(passport);

mongoose.connect('mongodb://localhost/trans', { useNewUrlParser: true }, () => {
    console.log("Database Connected");
});


app.use(expressLayouts);
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));


app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();

})

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.listen(PORT,console.log(`Server is up-end running  ${PORT}`));
