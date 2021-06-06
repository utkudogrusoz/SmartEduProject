const express = require('express');
const courseController=require('../controllers/courseController');

const router=express.Router();

router.route('/createcourse').post(courseController.createCourse); 
router.route('/').get(courseController.getCoursesPage);


module.exports=router;