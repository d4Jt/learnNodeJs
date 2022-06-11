const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.json()); // xử lý dữ liệu gửi từ code js lên
app.use(express.urlencoded({ extended: true })); // đây là middleware để xử lý dữ liệu từ form submit

// khi gặp path này, sẽ kiểm tra với định dạng là file tĩnh cung cấp trong static
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
// app.use(morgan('combined'));
// Template engine
// app này sẽ sử dùng template engine là handlebars
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs"); // đặt cho ứng dụng sử dụng template engine handlebars
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app)


//  127.0.0.1 - localhost
// start lên 1 web server 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
