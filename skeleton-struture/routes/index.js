const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); 
});
router.post("/register",(req,res)=>{
    res.send("Working");
});
module.exports = router;
