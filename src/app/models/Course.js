const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose); // tự động tăng giá trị id

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
   {
      _id: { type: Number, },
      name: { type: String, default: '', maxLength: 255 },
      description: { type: String, default: '' },
      image: { type: String, default: '' },
      slug: { type: String, default: '', slug: 'name', unique: true },
      videoId: { type: String, default: '' },
   },
   {
      _id: false,
      timestamps: true,
   }
);

// Custom query helpers
CourseSchema.query.sortable = function (req) {
   if (req.query.hasOwnProperty('_sort')) {
      const isValidType = ['asc', 'desc', 'default'].includes(req.query.type);
      return this.sort({
         [req.query.column]: isValidType ? req.query.type : 'desc'
      });
   }
   return this;
}

// Adds plugin
CourseSchema.plugin(AutoIncrement);
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', CourseSchema);
