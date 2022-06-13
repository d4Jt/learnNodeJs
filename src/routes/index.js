const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
   // Action -> Dispatcher -> Function handler
   // mỗi khi có thằng /news nó sẽ chọc vào newsRouter
   // index.js (chính) -> index.js (routes) -> news.js -> NewsController.js
   app.use('/news', newsRouter);
   app.use('/courses', coursesRouter);
   app.use('/', siteRouter);
}

module.exports = route;
