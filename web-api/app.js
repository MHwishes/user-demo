const express = require('express');

const config = require('config');
const router = require('./router');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.json());
router(app);

app.listen(config.get('httpPort'), ()=> {
    console.log('server started at http://localhost:' + config.get('httpPort'));   // eslint-disable-line no-console
});
