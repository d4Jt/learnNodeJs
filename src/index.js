const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine }= require('express-handlebars');
const app = express();
const port = 3000;

// khi gặp path này, sẽ kiểm tra với định dạng là file tĩnh cung cấp trong static
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));
// Template engine
// app này sẽ sử dùng template engine là handlebars
app.engine('hbs', engine({ extname: '.hbs' })); 
app.set('view engine', 'hbs'); // đặt cho ứng dụng sử dụng template engine handlebars
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

//  127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
