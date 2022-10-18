const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
   // [GET] /me/courses
   showCourses(req, res, next) {
      Promise.all([
         Course.find({}).sortable(req),
         Course.countDocumentsDeleted(),
      ])
         .then(([courses, deletedCount]) => {
            res.render('me/courses', {
               deletedCount,
               courses: multipleMongooseToObject(courses),
            });
         })
         .catch(next);
   }

   // [GET] /me/recycle-bin
   recycleBin(req, res, next) {
      Course.findDeleted({})
         .then((courses) => {
            res.render('me/recycle-bin', {
               courses: multipleMongooseToObject(courses),
            });
         })
         .catch(next);
   }
}

module.exports = new MeController();