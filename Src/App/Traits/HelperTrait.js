const $Functions = require('../../Libraries/Functions.js');

class HelperTrait extends $Functions {
  constructor() {
    super();
  }

  isValidVal(val, get = "bool", other = null, key = null) {
    const tmpVal = (super.isset(key) && key != null ? (super.isset(val[key]) ? val[key] : (super.isset(val) ? val : "")) : val);
    
    if (super.isset(tmpVal)) {
      if (get === "value") {
        return !super.empty(tmpVal) || tmpVal === 0 ? tmpVal : other ?? "";
      } else if (get === "equal") {
        return tmpVal === other;
      } else {
        return !super.empty(tmpVal);
      }
    }

    return get === "value" ? "" : false;
  }

  isValidString(check, value) {
    const patterns = {
      name: /^[a-zA-Z\s]+$/,
      username: /^[a-zA-Z0-9_]{1,21}$/,
      email: /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
    };
    return patterns[check]?.test(value) ?? false;
  }

  getEnvApp(key, $default = "") {
    return process.env[key] ?? $default;
  }
}

module.exports = HelperTrait;