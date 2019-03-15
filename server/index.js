const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();


authRoutes(app);

app.listen(5000);