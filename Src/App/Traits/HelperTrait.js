const $Functions = require("../../Libraries/Functions.js");

class HelperTrait extends $Functions {
  constructor() {
    super();
  }

  isValidVal(val, key = null, mode = "bool", other = null) {
    const tmp = super.getVarValue(val, key, other);
    return {
      value: tmp,
      equal: tmp == other,
      bool: tmp != null && tmp !== "",
    }[mode];
  }

  isValEqual(val, key = null, value) {
    return super.getVarValue(val, key) == value;
  }

  valNotEmpty(val, key = null) {
    const tmp = super.getVarValue(val, key);
    return tmp != null && tmp !== "";
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

  ajaxJSONReturn(code, status, msg, data = []) {
  return { code, status, message: msg, data };
  }
}

module.exports = HelperTrait;
