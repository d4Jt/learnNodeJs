// nhận đối số vào thì nó map qua và nó toObject từng phần tử bên trong
// đưa từ object constructor về object literal
module.exports = {
   multipleMongooseToObject: function (mongooses) {
      return mongooses.map(mongoose => mongoose.toObject());
   },
   mongooseToObject: function (mongoose) {
      return mongoose ? mongoose.toObject(): mongoose;
   }
};
