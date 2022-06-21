var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var session = require('express-session');



var usersRouter = require('./src/routes/users');
var indexRouter = require('./src/routes/index');
var contatoRouter = require('./src/routes/contato');
var cadastroRouter = require('./src/routes/cadastro');
var cadastroClienteRouter = require('./src/routes/cadastroCliente')
var nossoscarrosRouter = require('./src/routes/nossoscarros');
var nossoscarroslogadoRouter = require('./src/routes/nossoscarroslogado');
var noticiasRouter = require('./src/routes/noticias');
var loadingRouter = require('./src/routes/loading'); /* add loading*/ 
var quemsomosRouter = require('./src/routes/quemsomos');
var clientesRouter = require('./src/routes/clientes')
var loginRouter = require('./src/routes/login')
var volvoRouter = require('./src/routes/volvo')
var teslaRouter = require('./src/routes/tesla')
var renaultRouter = require('./src/routes/renault')


var app = express();
//app.use('/users', usersRouter);
// view engine setup

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: '123logarus,hh',
  resave: true,
  saveUninitialized: true
}));

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contato', contatoRouter);
app.use('/cadastro', cadastroRouter);
app.use('/cadastroCliente', cadastroClienteRouter);
app.use('/nossoscarros', nossoscarrosRouter);
app.use('/nossoscarroslogado', nossoscarroslogadoRouter);
app.use('/noticias', noticiasRouter);
app.use('/quemsomos', quemsomosRouter);
app.use('/clientes', clientesRouter);
app.use('/loading',loadingRouter); /* add loading*/ 
app.use('/login', loginRouter);
app.use('/volvo', volvoRouter);
app.use('/tesla', teslaRouter);
app.use('/renault', renaultRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

app.use((req, res, next)=> {
  res.status(404).render('not-found')
 });
//app.use('/enviar_cadastro', enviar_cadastroRouter);
//app.use('/enviar_contato', enviar_contatoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
