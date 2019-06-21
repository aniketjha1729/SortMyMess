const express = require("express");
const router = express.Router();
const Member = require("../models/members");

// router.get("/showmember", (req, res) => {
//   res.render("test1");
// });
router.post("/showmember",(req,res)=>{
    messid=req.body.messid;
    Member.find({messid1:messid}).then(mem=>{
        res.render("dashboard", { mem:mem });
        // console.log(mem);
    })
});

module.exports = router;