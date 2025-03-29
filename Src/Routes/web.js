
const Main = async (app, express) => {  
  try {
    const { Router } = require("express");
    const router = new Router();
    
    router.get("/", (req, res) => {
      return res.send("Hello World!");
    });

    return router;
  } catch ($err) {
    console.error(`Server router error! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;