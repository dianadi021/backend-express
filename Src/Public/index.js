const Main = async (app, express) => {
  try {
    const $APPS = require('../Config/app.js');
    const { REDIS_USED } = new $APPS();

    const $Cors = require('cors');
    const $Morgan = require('morgan');

    const $Logger = require('../App/Middlewares/logger.js');

    app.use($Cors());
    app.use($Morgan('short'));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use($Logger);

    if (REDIS_USED) {
      const $SessionRedis = require('../App/Middlewares/session.js');

      app.use($SessionRedis);
    }

    await require('../Routes/router.js')(app, express);
  } catch ($err) {
    console.error(`Error running server! Catch:`, $err);
    return $err;
  }
}

module.exports = Main;