const $HelperTrait = require('../App/Traits/HelperTrait.js');

class App extends $HelperTrait {
  constructor() {
    super();
  }

  APP_AUTHOR = super.getEnvApp("APP_AUTHOR");

  APP_ENV = super.getEnvApp("APP_ENV");
  APP_NAME = super.getEnvApp("APP_NAME");
  APP_VERSION = super.getEnvApp("APP_VERSION");

  APP_PORT = super.getEnvApp("APP_PORT");
  APP_DOMAIN = super.getEnvApp("APP_DOMAIN");

  REDIS_USED = super.isValEqual(super.getEnvApp("REDIS_USED"), null, "true");
  REDIS_URL = super.getEnvApp("REDIS_URL");

  REDIS_HOST = super.getEnvApp("REDIS_HOST");
  REDIS_PORT = super.getEnvApp("REDIS_PORT");

  DB_TYPE = super.getEnvApp("DB_TYPE");

  MONGODB_URL = super.getEnvApp("MONGODB_URL");
  DATABASE_URL = super.getEnvApp("DATABASE_URL");

  DB_DRIVER = super.getEnvApp("DB_DRIVER");
  DB_HOST = super.getEnvApp("DB_HOST");
  DB_PORT = super.getEnvApp("DB_PORT");
  DB_NAME = super.getEnvApp("DB_NAME");
  DB_USER = super.getEnvApp("DB_USER");
  DB_PASS = super.getEnvApp("DB_PASS");

  SESSION_SECRET = super.getEnvApp("SESSION_SECRET");

  APP_SERVER() {
    const APP_ENV = super.getEnvApp("APP_ENV");
    const APP_PORT = super.getEnvApp("APP_PORT");
    const APP_DOMAIN = super.getEnvApp("APP_DOMAIN");

    return super.isValEqual(APP_ENV, null, "development") ? `http://localhost:${APP_PORT}` : `https://${APP_DOMAIN}:${APP_PORT}`;
  }

  DB_SERVER() {
    const DB_TYPE = super.getEnvApp("DB_TYPE");
    const DB_HOST = super.getEnvApp("DB_HOST");
    const DB_PORT = super.getEnvApp("DB_PORT");
    const DB_NAME = super.getEnvApp("DB_NAME");
    const DB_USER = super.getEnvApp("DB_USER");
    const DB_PASS = super.getEnvApp("DB_PASS");
    const DB_DRIVER = super.getEnvApp("DB_DRIVER");
    const MONGODB_URL = super.getEnvApp("MONGODB_URL");
    const DATABASE_URL = super.getEnvApp("DATABASE_URL");

    if (DB_TYPE === "nosql") {
      return super.valNotEmpty(MONGODB_URL) ? MONGODB_URL : `${DB_DRIVER}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    }

    if (DB_TYPE === "sql") {
      return super.valNotEmpty(DATABASE_URL) ? DATABASE_URL : `${DB_DRIVER}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    }
  }
}

module.exports = App;