const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const User = require("../models/mess");
const Data=require("../models/datas");

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success_msg","Successfully Logout");
    res.redirect("/member_signin");
});
router.post('/edit', (req, res) => {
    Data.findOne({emailId: req.body.idUser}).then(data => {
        //console.log(data);
        //console.log(parseInt(req.body.itemPrice))
            // const itemData=new Data({
            //     item:req.body.itemName
            // });
            // const priceData=new Data({
            //     price:(parseInt(req.body.itemPrice))
            // })
        data.item.push(req.body.itemName);
        data.price.push(req.body.itemPrice);

        data.save().then(savedData => {
                req.flash('success_msg', "Items Successfully Added");
                res.redirect("dashboard");
        
        })
            
    });
});
router.post("/close",(req,res)=>{
    res.send("Working");
})
router.get("/show",(req,res)=>{
    
        res.redirect("/dashboard");  
    
    
})
router.get("/show:id",(req,res)=>{
    res.send("working");
})


module.exports = router;