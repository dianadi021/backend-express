
const Main = async (app, express) => {  
  try {
    const { Router } = require("express");
    const router = new Router();
    
    return router;
  } catch ($err) {
    console.error(`Server router error! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;