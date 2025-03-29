const session = require("express-session");
const $Redis = require('../../Config/redis.js');
const { RedisStore } = require("connect-redis");

const $APPS = require('../../Config/app.js');
const { SESSION_SECRET } = new $APPS();

const Main = session({
  store: new RedisStore({ client: $Redis }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});

module.exports = Main;
