class Functions {
  static isNull(val) {
    return val === null || val === 'null';
  }

  static isUndefined(val) {
    return val === undefined || val === 'undefined';
  }

  static getVarValue(val, key = null, def = null) {
    if (key && typeof val === 'object' && val !== null && key in val) {
      return String(val[key]).trim();
    }
    return val !== undefined && val !== null ? String(val).trim() : def;
  }

  static isValEqual(val, key = null, compareValue) {
    return this.getVarValue(val, key) == compareValue;
  }

  static valNotEmpty(val, key = null) {
    const tmpVal = this.getVarValue(val, key);
    return tmpVal !== '' && tmpVal !== undefined && tmpVal !== null;
  }

  static isValidVal(val, key = null, other = null, get = 'bool') {
    const tmpVal = this.getVarValue(val, key);

    if (get === 'value') {
      return tmpVal !== '' && tmpVal != null ? tmpVal : (other ?? '');
    } else if (get === 'equal') {
      return tmpVal == other;
    }
    return tmpVal !== '' && tmpVal != null;
  }
}

module.exports = Functions;
