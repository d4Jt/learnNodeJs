const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;


const Course = new Schema({
   name: { type: String, default: '', maxLength: 255 },
   description: { type: String, default: '' },
   image: { type: String, default: '' },
   slug: { type: String, default: '', slug: 'name', unique: true },
   videoId: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Course', Course);
