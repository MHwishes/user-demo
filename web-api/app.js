const express = require('express');

const config = require('config');
const router = require('./router');
const bodyParser=require('body-parser');
const constra = require('./constant');

const app = express();
app.use(bodyParser.json());
router(app);

app.use((err,req,res,next)=>{
    "use strict";
    if(err.status === constra.httpCode.Internal_Server_Error){
        next(err);
    }
    res.status(err.status).send(err.stack);
});

app.use((err,req,res,next)=>{
    "use strict";
    res.status(err.status).send(err.stack);
});




app.listen(config.get('httpPort'), ()=> {
    console.log('server started at http://localhost:' + config.get('httpPort'));   // eslint-disable-line no-console
});

module.exports=app;