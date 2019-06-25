const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const User = require("../models/user");


router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success_msg","Successfully Logout");
    res.redirect("/member_signin");
});
router.get('/edit/:id', (req, res) => {
    Member.findOne({ _id: req.params.id }).then(data => {
            console.log(data);
            res.send("Id Received");
    });
});
router.post("/edit/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    res.send("Working");
})
router.get("/show",(req,res)=>{
    
        res.redirect("/dashboard");  
    
    
})
router.get("/show:id",(req,res)=>{
    res.send("working");
})


module.exports = router;