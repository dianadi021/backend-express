
const Main = async (app, express) => {  
  try {
    const { Router } = require("express");
    const router = new Router();

    const roles = await require('../../App/Controllers/Api/V1/roles.js')(app, express);
    
    router.use('/roles', roles);
    
    return router;
  } catch ($err) {
    console.error(`Server router error! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;