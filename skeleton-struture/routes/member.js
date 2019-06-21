const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const User=require("../models/user");
const bcrypt = require("bcryptjs");
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const { ensureAuthenticated } = require('../config/auth');

router.get("/member_reg", (req, res) => {
    res.render("memberreg");
});
router.get("/member_signin", (req, res) => {
    res.render("membersigin");
});
router.post("/member_reg", (req, res) => {
    const {messid1, name, email, phone, password } = req.body;
    User.findOne({messid:messid1}).then(user=>{
        if(user){
            Member.findOne({email:email}).then(user1=>{
                if(user1){
                    req.flash("error_msg",'Member alredy exists');
                    res.redirect("member_reg");
                    // res.send("Member Already exists")
                }else{
                   // res.send("correct")
                    const newUser = new Member({
                        messid1,name, email, phone, password
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            newUser.password = hash;
                            newUser.save().then(savedUser => {
                                req.flash('success_msg', 'Yor are now registered,please login');
                                res.redirect('member_signin');
                            });
                        });
                    });
                }
            })
        }else{
            res.send("No messid found");
        }
    })
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>{
    // const messid2=req.body.messid2;
        //console.log(mem);
        res.render('dashboard', {
            //mem:mem,
            email:req.user.email,
            name: req.user.name,
            messid: req.user.messid1
        });
   
})


passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {

    Member.findOne({ email: email }).then(user => {
        if (!user) return done(null, false, { message: 'No User found' });

        bcrypt.compare(password, user.password, (err, matched) => {
            if (err) return err;

            if (matched) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Incorrect password' });
            }
        })
    })
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    Member.findById(id, function (err, user) {
        done(err, user);
    });
});

router.post("/member_signin", (req, res,next) => {
    Member.find({messid1:req.body.messid2}).then(mem=>{
        console.log(mem.length);
        passport.authenticate("local", {
          successRedirect: "/dashboard",
          failureRedirect: "/member_signin",
          failureFlash: "true"
        })(req, res, next);
    })  
});
module.exports = router;
