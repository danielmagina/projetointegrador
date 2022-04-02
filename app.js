var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contatoRouter = require('./routes/contato');
var cadastroRouter = require('./routes/cadastro');
var nossoscarrosRouter = require('./routes/nossoscarros');
var noticiasRouter = require('./routes/noticias');
var quemsomosRouter = require('./routes/quemsomos');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contato', contatoRouter);
app.use('/cadastro', cadastroRouter);
app.use('/nossoscarros', nossoscarrosRouter);
app.use('/noticias', noticiasRouter);
app.use('/quemsomos', quemsomosRouter);
app.use((req,res,next) => {
  res.status(404).render('not-found');
});

//app.use('/enviar_cadastro', enviar_cadastroRouter);
//app.use('/enviar_contato', enviar_contatoRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
