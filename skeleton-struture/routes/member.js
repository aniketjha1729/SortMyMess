const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const User=require("../models/user");
const bcrypt = require("bcryptjs");


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

router.post("/member_signin", (req, res) => {
    res.send("membersigin");
});
module.exports = router;
