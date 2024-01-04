const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
// const product = require('./routes/productsRoute');
// const category = require('./routes/categoriesRoute');
// const unit = require('./routes/unitRoute');
// const maker = require('./routes/makerRoute');
// const menu = require('./routes/menuRoute');
// const home = require('./routes/homeRoute');
const game = require('./routes/gameRoute')
const account = require('./routes/accountRoute')
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

// app.use('/admin', product, category, unit, maker);
// app.use('', home);
app.use('/api', game, account);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});