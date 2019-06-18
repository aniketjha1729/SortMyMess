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
    const messid1 = req.body.messid1;
    // console.log(messid);
    User.findOne({ messid: messid1 }).then(user => {
        if (user) {
            res.send("found");
        } else {
            res.send("Not found");
        }
    })
});

router.post("/member_signin", (req, res) => {
    res.send("membersigin");
});
module.exports = router;
