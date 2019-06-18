const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const bcrypt = require("bcryptjs");
router.get("/member_reg", (req, res) => {
    res.render("memberreg");
});
router.get("/member_signin", (req, res) => {
    res.render("membersigin");
});
router.post("/member_reg", (req, res) => {
            const {name,email,phone,password}=req.body;
            Member.findOne({email:email}).then(member=>{
                if(member){
                    res.send("Member is already Registerd");
                }else{
                    const newUser=new Member({
                        name,email,phone,password
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            newUser.password = hash;
                            newUser.save().then(savedUser => {
                                //req.flash('success_msg', 'Yor are now registered,please login');
                                res.send("success");
                            })
                        })
                    })
                }
            })
});

router.post("/member_signin", (req, res) => {
    res.send("membersigin");
});
module.exports = router;
