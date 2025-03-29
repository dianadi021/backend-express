const $Functions = require('../../Libraries/Functions.js');

class HelperTrait extends $Functions {
  constructor() {
    super();
  }

  isValidVal(val, key = null, other = null, get = 'bool') {
    const tmpVal = super.getVarValue(val, key);

    if (get === 'value') {
      return tmpVal !== '' && tmpVal != null ? tmpVal : (other ?? '');
    } else if (get === 'equal') {
      return tmpVal == other;
    }
    return tmpVal !== '' && tmpVal != null;
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

  ajaxJSONReturn(code, status, msg, data = {}) {
    return { code, status, message: msg, data };
  }
}

module.exports = HelperTrait;