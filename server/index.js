const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();


authRoutes(app);

app.listen(5000);