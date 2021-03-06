const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./routes');
const { errorLogger, errorHandler, httpLog } = require('./middlewares');

const app = express();

// Middelwares
app.use(cors());
app.use(helmet());
//app.use(express.json());
app.use(httpLog);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
// Routes
app.use('/api/v1', routes);

// Errors
app.use(errorLogger);
app.use(errorHandler);

module.exports = { app };
