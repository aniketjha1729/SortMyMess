const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const User = require("../models/user");
const Data=require("../models/datas");

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success_msg","Successfully Logout");
    res.redirect("/member_signin");
});
router.post('/edit', (req, res) => {
    Member.findOne({ _id: req.body.idUser }).then(data => {
            //console.log(data);
            const newData=new Data({
                user:req.user.id,
                item:req.body.itemName,
                price:req.body.price
            })
        data.member.push(newData);
        data.save().then(savedId => {
            newData.save().then(savedDatas => {
                req.flash('success_msg', "Items Successfully Added");
                res.redirect("dashboard");
            })
        })
            
    });
});
// router.post("/edit/:id",(req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     res.send("Working");
// })
router.get("/show",(req,res)=>{
    
        res.redirect("/dashboard");  
    
    
})
router.get("/show:id",(req,res)=>{
    res.send("working");
})


module.exports = router;