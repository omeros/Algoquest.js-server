import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser = require('cookie-parser');
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import algoquestRouter from './routes/algoquest';

import cors from 'cors';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const corsOptions: cors.CorsOptions = {
  origin: [
    'http://127.0.0.1:8080',
    'http://localhost:8080',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://localhost:3000',
  ],
  credentials: true,
};
app.use(cors(corsOptions))

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/algoquest', algoquestRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use((
  err: createError.HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
