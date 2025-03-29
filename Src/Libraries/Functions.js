class Functions {
  static isNull(val) {
    return val === null || val === "null";
  }

  static isUndefined(val) {
    return val === undefined || val === "undefined";
  }

  static isset(val) {
    return val !== undefined && val !== null;
  }

  static empty(val) {
    if (Functions.isUndefined(val) || Functions.isNull(val)) return true;
    if (typeof val === "string") return val.trim() === "";
    if (Array.isArray(val)) return val.length === 0;
    if (typeof val === "object") return Object.keys(val).length === 0;
    return val === false || val === 0;
  }

  static is_array(val) {
    return Array.isArray(val);
  }

  static is_string(val) {
    return typeof val === "string";
  }

  static trim(val) {
    return Functions.is_string(val) ? val.trim() : val;
  }

  static arryToJSON(varObj) {
    return JSON.stringify(varObj, null, 2);
  }

  static jsonToArry(varObj) {
    return Array.isArray(varObj) ? varObj : JSON.parse(JSON.stringify(varObj));
  }

  static isValidVal(varObj, key = null, get = 'bool', other = null) {
    switch (get) {
      case 'value':
        return Functions.getVarValue(varObj, key, other);
      case 'equal':
        return Functions.isValEqual(varObj, key, other);
      default:
        return Functions.valNotEmpty(varObj, key);
    }
  }

  static getVarValue(varObj, key = null, defaultValue = null) {
    let tmpVal = key === null ? varObj : defaultValue;
    if (key !== null && typeof varObj === 'object') {
      tmpVal = varObj[key] !== undefined ? varObj[key] : tmpVal;
    }
    return Functions.is_string(tmpVal) ? tmpVal.trim() : tmpVal;
  }

  static isValEqual(varObj, key = null, value) {
    const tmpVar = Functions.getVarValue(varObj, key);
    return tmpVar === value;
  }

  static valNotEmpty(varObj, key = null) {
    const tmpVar = Functions.getVarValue(varObj, key);
    return tmpVar !== undefined && tmpVar !== null;
  }

  static ajaxJSONReturn(code, status, msg, data = []) {
    return JSON.stringify({ code, status, message: msg, data }, null, 2);
  }
}

module.exports = Functions;

