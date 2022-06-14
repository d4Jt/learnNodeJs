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

   // render trả về dữ liệu theo id
   // [GET] /courses/:id/edit
   edit(req, res, next) {
      Course.findById(req.params.id)
         // render trả dữ liệu vào file views/courses/edit.js
         .then((course) =>
            res.render('courses/edit', { course: mongooseToObject(course) })
         )
         .catch(next);
   }

   // [PUT] /courses/:id
   update(req, res, next) {
      Course.updateOne({ _id: req.params.id }, req.body)
         .then(() => res.redirect('/me/courses'))
         .catch(next);
   }

   // [DELETE] /courses/:id
   delete(req, res, next) {
      // dùng delete từ plugin mongoose-delete
      Course.delete({ _id: req.params.id })
         .then(() => res.redirect('back'))
         .catch(next);
   }

   // [DELETE] /courses/:id
   forceDelete(req, res, next) {
      // dùng delete từ plugin mongoose-delete
      Course.deleteOne({ _id: req.params.id })
         .then(() => res.redirect('back'))
         .catch(next);
   }

   // [PATCH] /courses/:id/restore
   restore(req, res, next) {
      Course.restore({ _id: req.params.id })
         .then(() => res.redirect('back'))
         .catch(next);
   }

   // save dữ liệu vào database
   // [POST] /courses/store
   store(req, res, next) {


      req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      const course = new Course(req.body);
      course
         .save()
         .then(() => res.redirect('/me/courses'))
         .catch((err) => {});

      // res.send('Successfully!!!');
   }
}

module.exports = new CourseController();
