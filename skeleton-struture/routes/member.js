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
    const messid1=req.body.messid1;
    User.findOne({messid:messid1}).then(user=>{
        if(user){
            const { name, email, phone, password } = req.body;
            Member.findOne({email:email}).then(user1=>{
                if(user1){
                    res.send("Member Already exists")
                }else{
                   // res.send("correct")
                    const newUser = new Member({
                        name, email, phone, password
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            newUser.password = hash;
                            newUser.save().then(savedUser => {
                                //req.flash('success_msg', 'Yor are now registered,please login');
                                res.send("success");
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
