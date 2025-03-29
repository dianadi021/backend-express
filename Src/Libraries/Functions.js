function isNull(val) {
  return val === null || val === "null";
}

function isUndefined(val) {
  return val === undefined || val === "undefined";
}

function isset(val) {
  return val !== undefined && val !== null;
}

function empty(val) {
  if (val === undefined || val === null) return true;
  if (typeof val === "string") return val.trim() === "";
  if (Array.isArray(val)) return val.length === 0;
  if (typeof val === "object") return Object.keys(val).length === 0;
  if (val === false || val === 0) return true;
  return false;
}

function is_array(val) {
  return Array.isArray(val) || val instanceof Array || val instanceof Object || typeof val === "object";
}

function is_string(val) {
  return typeof val === "string" || val instanceof String;
}

function trim(val) {
  return is_string(val) ? val.trim() : val;
}

class Functions {
  getVarValue(val, key = null, defaultVal = null) {
    let tmpVal = key !== null && val && is_array(val) && isset(val[key]) && !empty(val[key]) ? val[key] : defaultVal;
    tmpVal = key === null && !empty(val) ? val : tmpVal;

    return trim(tmpVal);
  }
}

module.exports = Functions;
