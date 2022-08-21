const express= require('express');
// const path= require('path');
const { homeController, searchController } = require('../controller/homeController');
const router=express.Router();

router.get('/',homeController );
router.get('/search',searchController );



module.exports=router;