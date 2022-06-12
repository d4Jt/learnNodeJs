const Course = require('../models/Course');
class SiteController {
   // [GET] /
   index(req, res) {
      // Gửi yêu cầu sang model, model chọc vào db và lấy ra dữ liệu và trả dữ liệu lại cho controller
      Course.find({}, function (err, courses) {
         if (!err) {
            // trả json về cho client
            res.json(courses);
         } else {
            res.status(400).json({ error: 'ERROR!!!' });
         }
      });
      // res.render('home');
   }

   // [GET] /search
   search(req, res) {
      res.render('search');
   }
}

module.exports = new SiteController();
