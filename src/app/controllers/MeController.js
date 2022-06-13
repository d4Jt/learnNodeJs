const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
   // [GET] /me/courses
   showCourses(req, res, next) {
      Course.find({})
         .then(courses => {
            res.render('me/courses',{ courses: multipleMongooseToObject(courses) });
         })
         .catch(next);
   }
}

module.exports = new MeController();
