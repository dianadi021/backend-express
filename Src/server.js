(async function () {
  try {
    console.log("Try running the server...");

    const $APPS = require('./Config/app.js');
    const { APP_ENV, APP_PORT, APP_SERVER, isValEqual } = new $APPS();

    const $Express = require("express");
    const app = new $Express();

    await require('./Public/index.js')(app, $Express);

    if (isValEqual(APP_ENV, null, "development")) {
      app.listen(APP_PORT);
    }

    if (isValEqual(APP_ENV, null, "production")) {
      const $fs = require("fs");
      const $https = require('https');

      const $letSSL = {
        key: $fs.readFileSync(`/etc/letsencrypt/live/${APP_DOMAIN}/privkey.pem`),
        cert: $fs.readFileSync(`/etc/letsencrypt/live/${APP_DOMAIN}/cert.pem`),
        ca: $fs.readFileSync(`/etc/letsencrypt/live/${APP_DOMAIN}/fullchain.pem`),
      }

      $https.createServer($letSSL, app).listen(APP_PORT);
    }

    console.log(`Server running at ${APP_SERVER()} 🚀`);
  } catch ($err) {
    console.error(`Error running server! Catch:`, $err);
    return $err;
  }
})();