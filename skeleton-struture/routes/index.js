const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); 
});
router.post("/register",(req,res)=>{
    res.send("Working");
});
router.get("/new",(req,res)=>{
    res.render("test");
})
router.post("/registermess",(req,res)=>{
    res.send("Working");
});
module.exports = router;
