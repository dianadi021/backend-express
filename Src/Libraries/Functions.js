function isNull(val) {
  return val === null || val === "null";
}

function isUndefined(val) {
  return val === undefined || val === "undefined";
}

function empty(val) {
  if (isUndefined(val) || isNull(val)) return true;
  if (typeof val === "object" && (Array.isArray(val) ? val.length === 0 : Object.keys(val).length === 0)) return true;
  return val === "" || val === 0;
}

class Functions {
  empty(val) {
    return empty(val);
  }

  isset(val) {
    return !empty(val);
  }
}

module.exports = Functions;
