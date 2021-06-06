const Course = require('../models/Course');

const createCourse = async (req, res) => {

    const course = await Course.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            course: course
        });
    } catch (error) {
        res.status(40).json({
            status: 'fail',
            error

        });
    }
}

module.exports = { createCourse }