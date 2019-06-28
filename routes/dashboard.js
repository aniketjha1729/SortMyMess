const express = require("express");
const router = express.Router();
const Data=require("../models/datas");

router.get('/logout', (req, res) => {
    req.logOut();
    req.flash("success_msg","Successfully Logout");
    res.redirect("/member_signin");
});
router.post('/edit', (req, res) => {
    Data.findOne({emailId: req.body.idUser}).then(data => {
        data.item.push(req.body.itemName);
        data.price.push(req.body.itemPrice);
        data.save().then(savedData => {
                req.flash('success_msg', "Items Successfully Added");
                res.redirect("dashboard");
        })
    });
});
router.post("/test",(req,res)=>{
    Data.findOne({emailId:req.body.emailtest}).then(testdata=>{
        var totalSum=0
        for(var i=0;i<testdata.price.length;i++){
            totalSum=totalSum+testdata.price[i];
        }
        console.log(totalSum);
        res.send("kjbb")
    })
})
module.exports = router;