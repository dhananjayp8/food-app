const express=require('express');
const testController = require('../controllers/testController');


const router=express.Router();

//GET||POST||UPDATE||DELETE

router.get('/test-user',testController)


module.exports=router;