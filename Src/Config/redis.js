const { createClient } = require("ioredis");
const $APPS = require('../Config/app.js');
const { REDIS_URL, REDIS_HOST, REDIS_PORT } = new $APPS();

const redis_server = { url: REDIS_URL, host: REDIS_HOST, port: REDIS_PORT };

const redis = createClient(redis_server);

redis.on("error", ($err) => console.error("Redis Error", $err));

redis.on("connect", () => console.log("Connected to Redis!"));

module.exports = redis;