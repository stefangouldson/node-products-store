const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Get routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Use routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);
