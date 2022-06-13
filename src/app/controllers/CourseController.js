const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
   // [GET] /courses/:slug
   show(req, res, next) {
      // Gửi yêu cầu sang model, model chọc vào db và lấy ra dữ liệu và trả dữ liệu lại cho controller
      Course.findOne({ slug: req.params.slug })
         .then((course) =>
            res.render('courses/show', { course: mongooseToObject(course) })
         )
         .catch(next);
   }
   // [GET] /courses/create
   create(req, res, next) {
      res.render('courses/create');
   }

   // save dữ liệu vào database
   // [POST] /courses/store
   store(req, res, next) {
      const formData = req.body;

      formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      course
         .save()
         .then(() => res.redirect('/'))
         .catch((err) => {});

      // res.send('Successfully!!!');
   }
}

module.exports = new CourseController();
