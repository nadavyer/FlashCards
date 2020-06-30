const config = require('./utils/config');
const express = require('express');
const logger = require('./utils/logger')
const morgan = require('morgan')
const {unknownEndpoint} = require('./utils/middlewares')
require('express-async-errors');
const cors = require('cors');
const wordsRouter = require('./controllers/words');
const mongoose = require('mongoose');

const app = express();

mongoose.set('useCreateIndex', true);

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  });
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))
app.use('/api/words', wordsRouter);


app.use(unknownEndpoint)


module.exports = app;