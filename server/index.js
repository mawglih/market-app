const express = require('express');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
require('./models/User');
require('./models/Survey');
require('./services/passport');
require('./routes/surveyRoutes');
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 2592999999,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

app.listen(5000);