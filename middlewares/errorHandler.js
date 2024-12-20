const express = require('express');
const errorHandler = express.Router();

const isLoggedIn = require("./isLoggedIn");

errorHandler.use((req, res, next) => {
  const error = new Error('Page not found!');
  error.status = 404;
  next(error);
});

errorHandler.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const isDev = process.env.NODE_ENV === 'development';

  res.status(statusCode).render('errorHandler', {
    isLoggedIn,
    error: {
      message: isDev ? err.message : 'Something went wrong!',
      status: statusCode,
      url: req.url
    },
  });
});

module.exports = errorHandler;