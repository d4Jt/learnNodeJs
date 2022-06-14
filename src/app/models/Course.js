const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
   {
      name: { type: String, default: '', maxLength: 255 },
      description: { type: String, default: '' },
      image: { type: String, default: '' },
      slug: { type: String, default: '', slug: 'name', unique: true },
      videoId: { type: String, default: '' },
   },
   { timestamps: true }
);

// Adds plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
