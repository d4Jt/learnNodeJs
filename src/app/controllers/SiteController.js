const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
   // [GET] /
   index(req, res, next) {
      // Gửi yêu cầu sang model, model chọc vào db và lấy ra dữ liệu và trả dữ liệu lại cho controller
      // Course.find({}, function (err, courses) {
      //    if (!err) {
      //       // trả json về cho client
      //       res.json(courses);
      //    } else {
      //       res.status(400).json({ error: 'ERROR!!!' });
      //    }
      // });

      Course.find({})
         // hoặc trong HTML thay vì this. thì có thể dùng this._doc.
         .then((courses) =>
            res.render('home', {
               courses: multipleMongooseToObject(courses)
            })
         )
         .catch(next);
      //
   }

   // [GET] /search
   search(req, res) {
      res.render('search');
   }
}

module.exports = new SiteController();
