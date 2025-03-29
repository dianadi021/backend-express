
const Main = async (app, express) => {  
  try {
    const { Router } = require("express");
    const router = new Router();

    const v1 = await require('./Api/v1.js')(app, express);

    router.use('/v1', v1);
    
    return router;
  } catch ($err) {
    console.error(`Server router error! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;