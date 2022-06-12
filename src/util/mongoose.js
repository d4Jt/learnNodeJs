// nhận đối số vào thì nó map qua và nó toObject từng phần tử bên trong
module.exports = {
   multipleMongooseToObject: function (mongooses) {
      return mongooses.map(mongoose => mongoose.toObject());
   },
   mongooseToObject: function (mongoose) {
      return mongoose ? mongoose.toObject(): mongoose;
   }
};
