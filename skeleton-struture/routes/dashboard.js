const express = require("express");
const router = express.Router();
const Member = require("../models/members");

router.post("/showmember",(req,res)=>{
    messid=req.body.messid;
    Member.find({messid1:messid}).then(mem=>{
        res.render("dashboard", { mem:mem });
    })
});
router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success_msg","Successfully Logout");
    res.redirect("/member_signin");
})

module.exports = router;