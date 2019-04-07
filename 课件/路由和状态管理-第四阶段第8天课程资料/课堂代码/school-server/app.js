var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("jwt secret"));
app.use(express.static(path.join(__dirname, 'public')));

//注册路由
app.use("/api/course", require("./routes/course"));
app.use("/api/class", require("./routes/class"));
app.use("/api/student", require("./routes/student"));
app.use("/api/user", require("./routes/user"));

module.exports = app;
