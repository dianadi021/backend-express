const { createClient } = require("ioredis");
const $APPS = require('../Config/app.js');
const { REDIS_URL, REDIS_HOST, REDIS_PORT, isValidVal } = new $APPS();

const redis_server = (isValidVal(REDIS_URL) ? REDIS_URL : `redis://${REDIS_HOST}:${REDIS_PORT}`);

const redis = createClient({ url: redis_server });

redis.on("error", ($err) => console.error("Redis Error", $err));

redis.on("connect", () => console.log("Connected to Redis!"));

module.exports = redis;