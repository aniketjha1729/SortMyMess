const express = require("express");
const router = express.Router();
const Member = require("../models/members");

router.post("/showmember",(req,res)=>{
    messid=req.body.messid;
    email=req.body.email;
    Member.find({messid1:messid}).then(mem=>{
        Member.find({email:email}).then(mem1=>{
            res.render("dashboard", { mem: mem,mem1:mem1});
        })
        
    })
});
router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success_msg","Successfully Logout");
    res.redirect("/member_signin");
});
router.get('/edit/:id', (req, res) => {
    Member.findOne({ _id: req.params.id }).then(data => {
            //res.render("admin/posts/edit", {data: data});
            console.log(data);
            res.send("Id Received");
    });
});


module.exports = router;