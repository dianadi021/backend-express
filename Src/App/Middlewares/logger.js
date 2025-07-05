const Main = async (req, res, next) => {
  try {
    const $Logs = require("../../Config/logger.js");

    if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
      $Logs.info({
        timestamp: new Date().toISOString(),
        user: req.user || "anonymous",
        path: req.originalUrl,
        method: req.method,
        body: req.body,
      });
    }
  
    return next();
  } catch ($err) {
    console.error(`Error running server! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;