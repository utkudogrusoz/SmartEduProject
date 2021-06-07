const Course = require('../models/Course');
const Category = require('../models/Category');

const createCourse = async (req, res) => {


    try {
        const course = await Course.create(req.body);
        res.status(201).json({
            status: 'success',
            course: course
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error

        });
    }
}

const getCoursesPage = async (req, res) => {
    try {

        const categorySlug = req.query.categories;

        const category = await Category.findOne({ slug: categorySlug });

        let filter = {};

        if (categorySlug) {
            filter = { category: category._id };

        }

        const courses = await Course.find(filter);
        const categories = await Category.find();
        res.status(201).render('courses', {
            categories: categories,
            courses: courses,
            page_name: 'courses'

        });



    } catch (error) {
        res.status(400).json({
            status: 'fail',

        });
    }

}

const getCourse = async (req, res) => {
    try {
        const categories = await Category.find();
        const course = await Course.findOne({
            slug: req.params.slug
        });
        res.status(201).render('course-single', {
            categories: categories,
            course: course,
            page_name: 'courses'

        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',

        })
    }

}

module.exports = {
    createCourse,
    getCoursesPage,
    getCourse
}