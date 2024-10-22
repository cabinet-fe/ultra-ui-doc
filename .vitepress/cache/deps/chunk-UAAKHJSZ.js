// node_modules/cat-kit/es/tween-CSc1uvYu.js
function getDataType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
function isObj(value) {
  return getDataType(value) === "object";
}
function isArray(value) {
  return getDataType(value) === "array";
}
function isDate(value) {
  return getDataType(value) === "date";
}
function isUndef(value) {
  return value === void 0;
}
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj2, member, msg) => member.has(obj2) || __typeError("Cannot " + msg);
var __privateGet = (obj2, member, getter) => (__accessCheck(obj2, member, "read from private field"), getter ? getter.call(obj2) : member.get(obj2));
var __privateAdd = (obj2, member, value) => member.has(obj2) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj2) : member.set(obj2, value);
var __privateSet = (obj2, member, value, setter) => (__accessCheck(obj2, member, "write to private field"), member.set(obj2, value), value);
var _str;
function camelCase(str2, type = "lower") {
  if (str2.length === 0) return str2;
  let firstChar = str2[0];
  if (type === "upper") {
    firstChar = firstChar.toUpperCase();
  }
  return firstChar + str2.substring(1).replace(/-[a-z]/g, (s2) => s2.substring(1).toUpperCase());
}
function kebabCase(str2) {
  if (str2.startsWith("-")) {
    console.error("字符串不是驼峰格式的!");
    return str2;
  }
  const ret = str2.replace(/[A-Z]/g, (s2) => "-" + s2.toLowerCase());
  return ret.startsWith("-") ? ret.substring(1) : ret;
}
var Str = class {
  constructor(s2) {
    __privateAdd(this, _str);
    __privateSet(this, _str, s2);
  }
  /**
   * 中划线字符串转驼峰
   * @param type 驼峰类型lower小驼峰, upper大驼峰, 默认lower
   * @returns
   */
  camelCase(type = "lower") {
    return camelCase(__privateGet(this, _str), type);
  }
  /**
   * 将驼峰格式的字符串转化为中划线连接的字符串
   * @returns
   */
  kebabCase() {
    return kebabCase(__privateGet(this, _str));
  }
};
_str = /* @__PURE__ */ new WeakMap();
function str(str2) {
  return new Str(str2);
}
str.joinPath = function joinPath(firstPath, ...paths) {
  let secondPath = paths.filter((p2) => !!p2).join("/").replace(/\/{2,}/g, "/").replace(/^\//, "");
  if (secondPath) {
    secondPath = `/${secondPath}`;
  }
  if (/^(https?|ftp|file):\/\//.test(firstPath)) {
    const origin = firstPath.replace(/:\/*$/, "://");
    if (origin.endsWith("//") || !origin.includes(".")) {
      throw new Error(`无效的URL:${origin}`);
    }
    return `${origin.replace(/\/+$/, "")}${secondPath}`;
  }
  return `${firstPath.replace(/\/+$/, "")}${secondPath}`;
};
var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj2, key, value) => key in obj2 ? __defProp$3(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField$3 = (obj2, key, value) => __defNormalProp$3(obj2, key + "", value);
function int(numbers) {
  const numberStrings = numbers.map((n3) => String(n3));
  const numStringsLen = numberStrings.map((ns) => {
    var _a;
    return ((_a = ns.split(".")[1]) == null ? void 0 : _a.length) ?? 0;
  });
  const factor = Math.pow(10, Math.max(...numStringsLen));
  return {
    /** 整数 */
    ints: numbers.map((n3) => Math.round(n3 * factor)),
    /** 让所有数值成为整数的最小系数 */
    factor
  };
}
function decimalPrecision(decimalPart, precision, carry) {
  if (decimalPart.length <= precision) {
    return decimalPart.padEnd(precision, "0");
  }
  const decimalNum = Math.round(
    +(decimalPart.slice(0, precision) + "." + decimalPart.slice(precision))
  );
  const decimalRet = decimalNum ? String(decimalNum) : "";
  if (decimalRet.length === precision) return decimalRet;
  if (decimalRet.length < precision) {
    return decimalRet.padStart(precision, "0");
  }
  carry();
  return "0".repeat(precision);
}
function toFixed(v, precision) {
  let [int2, decimal = ""] = String(v).split(".");
  let targetPrecision = void 0;
  if (typeof precision === "number") {
    targetPrecision = precision;
  } else {
    const { maxPrecision, minPrecision } = precision;
    if (maxPrecision !== void 0 && decimal.length > maxPrecision) {
      targetPrecision = maxPrecision;
    } else if (minPrecision !== void 0 && decimal.length < minPrecision) {
      targetPrecision = minPrecision;
    }
  }
  if (targetPrecision !== void 0 && Number.isInteger(targetPrecision) && targetPrecision >= 0) {
    decimal = decimalPrecision(
      decimal,
      targetPrecision,
      () => int2 = String(+int2 + 1)
    );
  }
  return decimal ? int2 + "." + decimal : int2;
}
var CN_UPPER_NUM = "零壹贰叁肆伍陆柒捌玖";
var CN_INT_RADICE = ["", "拾", "佰", "仟"];
var CN_INT_UNITS = ["", "万", "亿", "兆"];
var CN_DEC_UNITS = ["角", "分", "毫", "厘"];
var CurrencyFormatters = {
  CNY(num, config) {
    const { precision, minPrecision, maxPrecision } = config || {};
    const isNegative = num < 0;
    num = Math.abs(num);
    let [intPart, decimalPart = ""] = String(num).split(".");
    let targetPrecision = void 0;
    if (precision !== void 0) {
      targetPrecision = precision;
    } else if (maxPrecision !== void 0 && decimalPart.length > maxPrecision) {
      targetPrecision = maxPrecision;
    } else if (minPrecision !== void 0 && decimalPart.length < minPrecision) {
      targetPrecision = minPrecision;
    }
    if (targetPrecision !== void 0 && Number.isInteger(targetPrecision) && targetPrecision >= 0) {
      decimalPart = decimalPrecision(decimalPart, targetPrecision, () => {
        intPart = String(+intPart + 1);
      });
    }
    let result = "";
    for (let i = intPart.length; i > 0; i -= 3) {
      result = "," + intPart.slice(i - 3 < 0 ? 0 : i - 3, i) + result;
    }
    result = result.slice(1);
    if (isNegative) {
      result = "-" + result;
    }
    if (decimalPart) {
      result = result + "." + decimalPart;
    }
    return result;
  },
  CNY_HAN(num, config) {
    if (!num) return "零元整";
    let result = "";
    if (num >= 1e15) return result;
    const isNegative = num < 0;
    let [intPart, decPart] = toFixed(
      num,
      (config == null ? void 0 : config.precision) !== void 0 ? config.precision > 4 ? 4 : config.precision : 4
    ).split(".");
    if (isNegative) {
      intPart = intPart.slice(1);
    }
    let count = 0;
    const IntLen = intPart.length;
    for (let i = 0; i < IntLen; i++) {
      let n3 = intPart.substring(i, i + 1);
      let p2 = IntLen - i - 1;
      let q = p2 / 4;
      let m = p2 % 4;
      if (n3 === "0") {
        count++;
      } else {
        if (count > 0) {
          result += CN_UPPER_NUM[0];
        }
        count = 0;
        result += CN_UPPER_NUM[parseInt(n3)] + CN_INT_RADICE[m];
      }
      if (m === 0 && count < 4) {
        result += CN_INT_UNITS[q];
      }
    }
    result = `${result}元`;
    if (isNegative) {
      result = `负${result}`;
    }
    if (decPart) {
      const decLen = decPart.length;
      for (let i = 0; i < decLen; i++) {
        let n3 = decPart.substring(i, i + 1);
        if (n3 !== "0") result += CN_UPPER_NUM[Number(n3)] + CN_DEC_UNITS[i];
      }
    } else {
      result = `${result}整`;
    }
    return result;
  }
};
var Num = class {
  constructor(n3) {
    __publicField$3(this, "v");
    this.v = n3;
  }
  currency(currencyType, config) {
    if (typeof config === "number") {
      config = {
        precision: config
      };
    }
    return CurrencyFormatters[currencyType](this.v, config);
  }
  /**
   * 指定数字最大保留几位小数点
   * @param precision 位数
   */
  fixed(precision) {
    return toFixed(this.v, precision);
  }
  /**
   * 遍历数字
   */
  each(fn) {
    const { v } = this;
    for (let i = 1; i <= v; i++) {
      fn(i);
    }
  }
  /**
   * 大小区间
   * @param min 最小值
   * @param max 最大值
   * @returns 一个在指定范围内的值
   */
  range(min, max) {
    if (min > max) {
      [min, max] = [max, min];
    }
    if (this.v < min) return min;
    if (this.v > max) return max;
    return this.v;
  }
  /**
   * 限制最大值
   * @param val 最大值
   * @returns 一个不超过最大值的值
   */
  max(val) {
    if (this.v > val) return val;
    return this.v;
  }
  /**
   * 限制最小值
   * @param val 最小值
   * @returns  一个不小于最小值的值
   */
  min(val) {
    if (this.v < val) return val;
    return this.v;
  }
};
var n = function n2(n2) {
  return new Num(n2);
};
n.sum = function(...numbers) {
  return n.plus(...numbers);
};
n.formatter = function(options) {
  const formatter = new Intl.NumberFormat("zh-CN", {
    notation: options.notation,
    style: options.style,
    maximumFractionDigits: options.maximumFractionDigits ?? options.precision,
    minimumFractionDigits: options.minimumFractionDigits ?? options.precision,
    currency: options.style === "currency" ? options.currency ?? "CNY" : options.currency
  });
  return formatter;
};
n.plus = function plus(...numbers) {
  let i = 0;
  let result = 0;
  const { ints, factor } = int(numbers);
  while (i < ints.length) {
    result += ints[i];
    i++;
  }
  return result / factor;
};
n.minus = function minus(...numbers) {
  let i = 0;
  let { ints, factor } = int(numbers);
  let result = ints[0];
  ints = ints.slice(1);
  while (i < ints.length) {
    result -= ints[i];
    i++;
  }
  return result / factor;
};
n.mul = function mul(num1, num2) {
  let {
    ints: [int1, int2],
    factor
  } = int([num1, num2]);
  let result = int1 * int2;
  return result / (factor * factor);
};
n.div = function div(num1, num2) {
  const { ints } = int([num1, num2]);
  return ints[0] / ints[1];
};
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj2, key, value) => key in obj2 ? __defProp$2(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField$2 = (obj2, key, value) => __defNormalProp$2(obj2, typeof key !== "symbol" ? key + "" : key, value);
var _Dater = class _Dater2 {
  constructor(date2) {
    __publicField$2(this, "date");
    if (date2 instanceof _Dater2) {
      this.date = date2.date;
    } else if (isDate(date2)) {
      this.date = date2;
    } else {
      this.date = new Date(date2);
    }
  }
  /** 原始日期对象 */
  get raw() {
    return this.date;
  }
  /** 时间戳 */
  get timestamp() {
    return this.date.getTime();
  }
  setTime(timestamp) {
    this.date.setTime(timestamp);
    return this;
  }
  /** 年 */
  get year() {
    return this.date.getFullYear();
  }
  /**
   * 设置年份
   * @param year 年份
   * @returns
   */
  setYear(year) {
    this.date.setFullYear(year);
    return this;
  }
  /** 月 */
  get month() {
    return this.date.getMonth() + 1;
  }
  /**
   * 设置月份
   * @param month 月份，从1开始
   * @returns
   */
  setMonth(month) {
    this.date.setMonth(month - 1);
    return this;
  }
  /** 周 */
  get weekDay() {
    return this.date.getDay();
  }
  /** 日 */
  get day() {
    return this.date.getDate();
  }
  setDay(day) {
    this.date.setDate(day);
    return this;
  }
  /** 时 */
  get hour() {
    return this.date.getHours();
  }
  /** 时 */
  get hours() {
    return this.date.getHours();
  }
  /**
   * 设置小时
   * @param hours 时
   * @returns
   */
  setHours(hours) {
    this.date.setHours(hours);
    return this;
  }
  /** 分 */
  get minute() {
    return this.date.getMinutes();
  }
  /** 分 */
  get minutes() {
    return this.date.getMinutes();
  }
  /**
   * 设置分
   * @param minutes 分
   */
  setMinutes(minutes) {
    this.date.setMinutes(minutes);
  }
  /** 秒 */
  get second() {
    return this.date.getSeconds();
  }
  /** 秒 */
  get seconds() {
    return this.date.getSeconds();
  }
  /**
   * 设置秒
   * @param sec 秒
   */
  setSeconds(sec) {
    this.date.setSeconds(sec);
  }
  static setMatcher(reg, matcher) {
    _Dater2.matchers[reg] = matcher;
  }
  static use(plugin) {
    plugin(_Dater2);
  }
  /** 获取所有的匹配器 */
  static getMatchers() {
    return _Dater2.matchers;
  }
  /** 格式化日期 */
  format(formatter = "yyyy-MM-dd") {
    Object.keys(_Dater2.matchers).forEach((reg) => {
      formatter = formatter.replace(new RegExp(`(${reg})`), (str2) => {
        return _Dater2.matchers[reg](this, str2.length);
      });
    });
    return formatter;
  }
  /**
   * 计算相对此刻的日期
   * @param timeStep 计算的日期, 负数表示之前的日期, 正数表示之后的日期
   * @param type 时间步长类别, 默认以天为单位
   */
  calc(timeStep, type) {
    let { date: date2 } = this;
    if (type === "days") {
      return new _Dater2(this.timestamp + timeStep * 864e5);
    } else if (type === "weeks") {
      return new _Dater2(this.timestamp + timeStep * 6048e5);
    } else if (type === "months") {
      date2 = new Date(date2.getTime());
      date2.setMonth(timeStep + date2.getMonth());
      return new _Dater2(date2);
    } else {
      date2 = new Date(date2.getTime());
      date2.setFullYear(timeStep + date2.getFullYear());
      return new _Dater2(date2);
    }
  }
  compare(date2, reducer) {
    let dater = new _Dater2(date2);
    if (!reducer) {
      return Math.ceil(Math.abs(this.timestamp - dater.timestamp) / 864e5);
    }
    const year = Math.abs(this.year - dater.year);
    const month = Math.abs(this.month - dater.month);
    const day = Math.abs(this.day - dater.day);
    return reducer(year, month, day);
  }
  /**
   * 跳转至月尾
   * @param offsetMonth 月份偏移量，默认为0，即当月
   */
  toEndOfMonth(offsetMonth = 0) {
    this.date.setMonth(this.month + offsetMonth);
    this.date.setDate(0);
    return this;
  }
  /**
   * 获取这个月的天数
   */
  getDays() {
    const { timestamp } = this;
    const days = this.toEndOfMonth().day;
    this.setTime(timestamp);
    return days;
  }
};
__publicField$2(_Dater, "matchers", {
  yyyy: (date2) => `${date2.year}`,
  YYYY: (date2) => `${date2.year}`,
  "M+": (date2, len) => {
    let month = date2.month + "";
    return len === 1 ? month : `0${month}`.slice(-2);
  },
  "d+": (date2, len) => {
    let day = date2.day + "";
    return len === 1 ? day : `0${day}`.slice(-2);
  },
  "D+": (date2, len) => {
    let day = date2.day + "";
    return len === 1 ? day : `0${day}`.slice(-2);
  },
  "h+": (date2, len) => {
    let hour = date2.hour;
    let strHour = (hour > 12 ? hour - 12 : hour) + "";
    return len === 1 ? strHour : `0${strHour}`.slice(-2);
  },
  "H+": (date2, len) => {
    let Hour = `${date2.hour}`;
    return len === 1 ? Hour : `0${Hour}`.slice(-2);
  },
  "m+": (date2, len) => {
    let mih = `${date2.minute}`;
    return len === 1 ? mih : `0${mih}`.slice(-2);
  },
  "s+": (date2, len) => {
    let sec = `${date2.second}`;
    return len === 1 ? sec : `0${sec}`.slice(-2);
  }
});
var Dater = _Dater;
var date = function(date2) {
  return new Dater(date2 ?? /* @__PURE__ */ new Date());
};
date.use = Dater.use;
date.getMatchers = Dater.getMatchers;
date.setMatcher = Dater.setMatcher;
var getDateTypeStr = (str2, formatter, re) => {
  let matched = formatter.match(re);
  if (matched) {
    return str2.slice(matched.index, matched.index + matched[0].length);
  }
  return "";
};
date.from = function(dateStr, formatter = "yyyy-MM-dd") {
  if (dateStr.length !== formatter.length) {
    console.warn("dateStr与formatter的格式不一致");
    return new Dater(dateStr);
  }
  const YMD = [/(y|Y)+/, /M+/, /d+/].map((re) => getDateTypeStr(dateStr, formatter, re)).filter((item) => !!item).join("-");
  const HMS = [/(h|H)+/, /m+/, /s+/].map((re) => getDateTypeStr(dateStr, formatter, re)).filter((item) => !!item).join(":");
  dateStr = YMD + (HMS ? ` ${HMS}` : "");
  return new Dater(dateStr);
};
function dft(data, cb, childrenKey = "children") {
  if (cb(data) === false) return false;
  let children = data[childrenKey];
  if (children) {
    let i = 0;
    while (i < children.length) {
      if (dft(children[i], cb, childrenKey) === false) break;
      i++;
    }
  }
}
function bft(root, cb, childrenKey = "children") {
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift();
    if (cb(node) === false) break;
    let children = node[childrenKey];
    if (!!children) {
      queue = queue.concat(children);
    }
  }
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj2, key, value) => key in obj2 ? __defProp$1(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField$1 = (obj2, key, value) => __defNormalProp$1(obj2, typeof key !== "symbol" ? key + "" : key, value);
var _Tree = class _Tree2 {
  constructor(root) {
    __publicField$1(this, "root");
    this.root = root;
  }
  /** 节点数量 */
  get size() {
    return this.root.size;
  }
  static create(data, Node, config) {
    const { childrenKey = "children", onNodeCreated } = typeof Node === "function" ? config || {} : Node;
    let createNode;
    if (typeof Node === "function") {
      createNode = (data2, index) => new Node(data2, index);
    } else if (typeof Node === "object") {
      createNode = Node.createNode;
    }
    function generate(data2, index, parent) {
      const node = createNode(data2, index);
      onNodeCreated == null ? void 0 : onNodeCreated(node);
      if (parent) {
        node.parent = parent;
      }
      const children = data2[childrenKey];
      if (children === void 0 || Array.isArray(children)) {
        node.children = children == null ? void 0 : children.map(
          (item, index2) => generate(item, index2, node)
        );
      }
      return node;
    }
    return new _Tree2(generate(data, 0));
  }
  /**
   * 获取节点的子节点
   * @param node 节点
   * @param matcher 匹配函数，用于判断节点是否符合条件
   * @param childrenKey 子节点键名，默认为'children'
   * @returns 符合条件的子节点数组
   */
  static getChildren(node, matcher, childrenKey = "children") {
    let ret = [];
    _Tree2.dft(
      node,
      (node2) => {
        matcher(node2) && ret.push(node2);
      },
      childrenKey
    );
    return ret;
  }
  /**
   * 获取满足条件的第一个子节点。
   *
   * @param node - 父节点。
   * @param matcher - 匹配子节点的条件。
   * @param childrenKey - 访问父节点中子节点的键。
   * @returns 第一个满足条件的子节点，如果没有匹配项则返回 null。
   */
  static getChild(node, matcher, childrenKey = "children") {
    let ret = null;
    _Tree2.bft(
      node,
      (node2) => {
        if (matcher(node2)) {
          ret = node2;
          return false;
        }
        return true;
      },
      childrenKey
    );
    return ret;
  }
  /**
   * 通过索引路径访问子节点节点
   * @param node 树形节点
   * @param indexPath 索引路径。
   * @param childrenKey 子节点key名
   */
  static visit(node, indexPath, childrenKey = "children") {
    var _a;
    let result = node;
    for (let i = 0; i < indexPath.length; i++) {
      const index = indexPath[i];
      if (!result) {
        console.warn("访问的路径内容不存在");
        return void 0;
      }
      result = (_a = result[childrenKey]) == null ? void 0 : _a[index];
    }
    return result;
  }
  /** 追加节点 */
  append(data) {
    return this.root.append(data);
  }
  /**
   * 广度优先遍历树结构，并对每个节点执行回调函数。
   * @param cb - 回调函数，接收当前节点作为参数，返回值为布尔值或无返回值, 当返回值为false时停止遍历。
   * @param childrenKey - 子节点的键名。
   * @returns 返回布尔值，表示是否遇到了回调函数返回 `false` 的节点。
   */
  bft(cb, childrenKey) {
    return _Tree2.bft(this.root, cb, childrenKey);
  }
  /**
   * 深度优先遍历树结构，并对每个节点执行回调函数。
   * @param cb - 回调函数，接收当前节点作为参数，返回值为布尔值或无返回值, 当返回值为false时停止遍历。
   * @param childrenKey - 子节点的键名。
   * @returns 返回布尔值，表示是否遇到了回调函数返回 `false` 的节点。
   */
  dft(cb, childrenKey) {
    return _Tree2.dft(this.root, cb, childrenKey);
  }
};
__publicField$1(_Tree, "dft", dft);
__publicField$1(_Tree, "bft", bft);
var Tree = _Tree;
var Forest = class _Forest {
  constructor(node) {
    __publicField$1(this, "virtualRoot");
    this.virtualRoot = node;
  }
  get nodes() {
    return this.virtualRoot.children;
  }
  /** 节点数量 */
  get size() {
    var _a;
    let sum = 0;
    (_a = this.nodes) == null ? void 0 : _a.forEach((node) => {
      sum += node.size;
    });
    return sum;
  }
  static create(data, Node, config) {
    const { childrenKey = "children", onNodeCreated } = typeof Node === "function" ? config || {} : Node;
    let createNode;
    if (typeof Node === "function") {
      createNode = (data2, index) => new Node(data2, index);
    } else {
      createNode = Node.createNode;
    }
    function generate(data2, index, parent) {
      const node = createNode(data2, index);
      onNodeCreated == null ? void 0 : onNodeCreated(node);
      if (parent) {
        node.parent = parent;
      }
      const children = data2[childrenKey];
      if (Array.isArray(children) || children === void 0) {
        node.children = children == null ? void 0 : children.map(
          (item, index2) => generate(item, index2, node)
        );
      }
      return node;
    }
    const virtualRoot = createNode(void 0, 0);
    const nodes = data.map((item, index) => generate(item, index, virtualRoot));
    virtualRoot.children = nodes;
    return new _Forest(virtualRoot);
  }
  /**
   * 通过索引路径访问子节点节点
   * @param nodes 森林节点
   * @param indexPath 索引路径。
   * @param childrenKey 子节点key名
   */
  static visit(nodes, indexPath, childrenKey = "children") {
    let currentNodes = nodes;
    let result;
    for (let i = 0; i < indexPath.length; i++) {
      const index = indexPath[i];
      if (!currentNodes) {
        return void 0;
      }
      result = currentNodes[index];
      currentNodes = result == null ? void 0 : result[childrenKey];
    }
    return result;
  }
  /** 追加节点 */
  append(data) {
    return this.virtualRoot.append(data);
  }
  /**
   * 广度优先遍历树结构，并对每个节点执行回调函数。
   * @param cb - 回调函数，接收当前节点作为参数，返回值为布尔值或无返回值, 当返回值为false时停止遍历。
   * @param childrenKey - 子节点的键名。
   * @returns 返回布尔值，表示是否遇到了回调函数返回 `false` 的节点。
   */
  bft(cb, childrenKey = "children") {
    let queue = [...this.nodes];
    while (queue.length) {
      const node = queue.shift();
      const result = cb(node);
      if (result === false) return;
      const children = node[childrenKey];
      if (!!children) {
        queue = queue.concat(children);
      }
    }
  }
  /**
   * 深度优先遍历树结构，并对每个节点执行回调函数。
   * @param cb - 回调函数，接收当前节点作为参数，返回值为布尔值或无返回值, 当返回值为false时停止遍历。
   * @param childrenKey - 子节点的键名。
   * @returns 返回布尔值，表示是否遇到了回调函数返回 `false` 的节点。
   */
  dft(cb, childrenKey) {
    let failed = false;
    this.nodes.forEach((node) => {
      const result = dft(node, cb, childrenKey);
      if (result === false) {
        failed = true;
      }
    });
    return failed ? false : void 0;
  }
};
var te = new TextEncoder();
var td = new TextDecoder();
var __defProp = Object.defineProperty;
var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField = (obj2, key, value) => __defNormalProp(obj2, typeof key !== "symbol" ? key + "" : key, value);
var _Tween = class _Tween2 {
  constructor(state, config) {
    __publicField(this, "state");
    __publicField(this, "duration", 300);
    __publicField(this, "onUpdate");
    __publicField(this, "onComplete");
    __publicField(this, "frameId");
    __publicField(this, "easingFunction");
    __publicField(this, "defaultState");
    this.state = state;
    this.defaultState = { ...state };
    const { duration, onUpdate, onComplete, easingFunction } = config || {};
    if (duration !== void 0) {
      this.duration = duration;
    }
    if (onUpdate !== void 0) {
      this.onUpdate = onUpdate;
    }
    if (onComplete !== void 0) {
      this.onComplete = onComplete;
    }
    this.easingFunction = easingFunction || _Tween2.easing.linear;
  }
  /** 请求动画帧 */
  raf(options) {
    const start = performance.now();
    const { onComplete, tick, duration } = options;
    const update = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      tick(progress);
      if (progress < 1) {
        this.frameId = requestAnimationFrame(update);
      } else {
        tick(progress);
        this.stop();
        onComplete();
      }
    };
    this.frameId = requestAnimationFrame(update);
  }
  /**
   * 使用动画将组件状态转换为新状态。
   * @param state 新的状态
   * @param config 动画配置, 优先级高于Tween中的配置
   */
  to(state, config) {
    this.stop();
    const prevState = { ...this.state };
    const stateDistance = Object.keys(state).reduce(
      (acc, key) => {
        if ((state[key] || state[key] === 0) && (prevState[key] || prevState[key] === 0)) {
          acc[key] = state[key] - prevState[key];
        }
        return acc;
      },
      {}
    );
    const duration = (config == null ? void 0 : config.duration) || this.duration;
    const easingFunction = (config == null ? void 0 : config.easingFunction) || this.easingFunction;
    const onComplete = (config == null ? void 0 : config.onComplete) || this.onComplete;
    this.raf({
      duration,
      onComplete: () => {
        var _a;
        for (const key in state) {
          if (key in this.state) {
            this.state[key] = state[key];
          }
        }
        (_a = this.onUpdate) == null ? void 0 : _a.call(this, this.state);
        onComplete == null ? void 0 : onComplete(this.state);
      },
      tick: (progress) => {
        var _a;
        for (const key in stateDistance) {
          const target = prevState[key] + easingFunction(progress) * stateDistance[key];
          this.state[key] = target;
        }
        (_a = this.onUpdate) == null ? void 0 : _a.call(this, this.state);
      }
    });
  }
  back(config) {
    this.to(this.defaultState, config);
  }
  /** 停止动画 */
  stop() {
    if (!this.frameId) return false;
    cancelAnimationFrame(this.frameId);
    this.frameId = void 0;
    return true;
  }
};
__publicField(_Tween, "easing", {
  /** 匀速缓动 */
  linear: (p2) => p2,
  /** 先慢后快 */
  easeInQuad: (p2) => p2 * p2,
  /** 先快后慢 */
  easeOutQuad: (p2) => p2 * (2 - p2),
  /** 先慢后快再慢 */
  easeInOutQuad: (p2) => p2 < 0.5 ? 2 * p2 * p2 : -1 + (4 - 2 * p2) * p2,
  /** 先回弹再运动 */
  easeInBack: (p2) => p2 * p2 * ((2.70158 + 1) * p2 - 1),
  /** 先运动再回弹 */
  easeOutBack: (p2) => {
    return 1 + 2.70158 * Math.pow(p2 - 1, 3) + 1.70158 * Math.pow(p2 - 1, 2);
  },
  /** 先回弹再运动再回弹 */
  easeInOutBack: (p2) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    return p2 < 0.5 ? Math.pow(2 * p2, 2) * ((c2 + 1) * 2 * p2 - c2) / 2 : (Math.pow(2 * p2 - 2, 2) * ((c2 + 1) * (p2 * 2 - 2) + c2) + 2) / 2;
  }
});
var Tween = _Tween;

// node_modules/cat-kit/es/path-C_aJfl6v.js
function last(arr2) {
  return arr2[arr2.length - 1];
}
function omitArr(arr2, indexes) {
  if (Array.isArray(indexes)) {
    if (indexes.length > 10) {
      const s2 = new Set(indexes);
      return arr2.filter((_, index) => !s2.has(index));
    }
    return arr2.filter((_, index) => !indexes.includes(index));
  }
  if (typeof indexes === "number") {
    return [...arr2.slice(0, indexes), ...arr2.slice(indexes + 1)];
  }
  throw new Error("索引类型错误");
}
var __defProp$12 = Object.defineProperty;
var __defNormalProp$12 = (obj2, key, value) => key in obj2 ? __defProp$12(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField$12 = (obj2, key, value) => __defNormalProp$12(obj2, typeof key !== "symbol" ? key + "" : key, value);
var TreeNode = class _TreeNode {
  constructor(data, index) {
    __publicField$12(this, "data");
    __publicField$12(this, "index");
    if (index < 0 || !Number.isInteger(index)) {
      throw new Error(`节点的索引应当是正整数, 传入的索引为${index}`);
    }
    this.data = data;
    this.index = index;
  }
  /** 树深 */
  get depth() {
    let depth = 0;
    let node = this;
    while (node == null ? void 0 : node.parent) {
      depth++;
      node = node.parent;
    }
    return depth;
  }
  /** 节点数量 */
  get size() {
    let s2 = 0;
    this.dft(() => {
      s2++;
    });
    return s2;
  }
  /** 是否是叶子节点 */
  get isLeaf() {
    return !this.children || this.children.length === 0;
  }
  /**
   * 从给定的起始索引开始，减小数组中元素的索引属性。
   * @param arr - 需要重新排序的元素数组。
   * @param startIndex - 开始重新排序的索引。
   */
  static resort(arr2, startIndex) {
    let i = 0;
    while (i < arr2.length) {
      arr2[i].index = i + startIndex;
      i++;
    }
  }
  /**
   * 深度优先遍历
   * @param cb 递归回调
   * @param childrenKey 子节点key
   * @returns
   */
  dft(cb, childrenKey = "children") {
    return dft(this, cb, childrenKey);
  }
  /**
   * 广度优先遍历
   * @param cb 递归回调
   * @param childrenKey 子节点key
   * @returns
   */
  bft(cb, childrenKey = "children") {
    return bft(this, cb, childrenKey);
  }
  /**
   * 从父节点中移除当前节点
   * @returns 移除成功返回true，否则返回false
   */
  remove() {
    if (!this.parent) {
      return false;
    }
    this.parent.removeChild(this);
    return true;
  }
  /**
   * 从当前节点中移除子节点
   * @param childNode 要移除的子节点
   */
  removeChild(childNode) {
    var _a, _b;
    if (childNode.parent !== this || !((_a = this.children) == null ? void 0 : _a.length)) {
      throw new Error("要移除的子节点不存在于当前节点中");
    }
    if (((_b = this.children) == null ? void 0 : _b[childNode.index]) !== childNode) {
      return;
    }
    const result = omitArr(this.children, childNode.index);
    if (!result.length) {
      this.children = void 0;
    } else {
      _TreeNode.resort(result.slice(childNode.index), childNode.index);
      this.children = result;
    }
  }
  /**
   * 在当前节点的子节点最后添加一个子节点。
   * @param data 节点数据
   */
  append(data) {
    var _a;
    const len = ((_a = this.children) == null ? void 0 : _a.length) ?? 0;
    const node = new this.constructor(data, len);
    node.parent = this;
    this.children = [...this.children || [], node];
  }
  /**
   * 插入节点到当前节点的子节点列表中。
   * 如果节点的索引大于当前节点子节点的长度，抛出错误。
   * 如果当前节点没有子节点，则将节点作为唯一子节点。
   * 如果当前节点有子节点，则将节点插入到指定索引的位置，并重新排序子节点列表。
   *
   * @param data 要插入的节点的数据
   * @param index 插入索引
   */
  insert(data, index) {
    const { children } = this;
    const len = (children == null ? void 0 : children.length) ?? 0;
    if (index > len) {
      throw new Error(`节点的索引不能大于当前节点子节点的长度${len}`);
    }
    const node = new this.constructor(data, index);
    node.parent = this;
    if (!children) {
      this.children = [node];
    } else {
      const pre = children.slice(0, node.index);
      const post = children.slice(node.index);
      _TreeNode.resort(post, node.index + 1);
      this.children = [...pre, node, ...post];
    }
  }
  /**
   * 在当前节点的下一个位置添加一个新节点。
   * @param data 节点数据
   */
  addToNext(data) {
    var _a;
    (_a = this.parent) == null ? void 0 : _a.insert(data, this.index + 1);
  }
  /**
   * 在当前节点的上一个位置添加一个新节点。
   * @param data 节点数据
   */
  addToPrev(data) {
    var _a;
    (_a = this.parent) == null ? void 0 : _a.insert(data, this.index);
  }
};
function safeRun(task, dft2) {
  try {
    return task();
  } catch {
    return dft2;
  }
}
function debounce(fn, delay = 300, immediate = true) {
  let timer = void 0;
  return function(...args) {
    timer !== void 0 && clearTimeout(timer);
    if (immediate) {
      let isFree = timer === void 0;
      let hasCall = false;
      if (isFree) {
        fn.call(this, ...args);
        hasCall = true;
      }
      timer = setTimeout(() => {
        timer = void 0;
        !hasCall && fn.call(this, ...args);
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
    }
  };
}

// node_modules/cat-kit/es/common-Dbb2YG5f.js
function omit(target, omitKeys) {
  let ret = {};
  let s2 = new Set(omitKeys);
  for (const key in target) {
    if (!s2.has(key)) {
      ret[key] = target[key];
    }
  }
  omitKeys.forEach((key) => {
    delete ret[key];
  });
  return ret;
}
function pick(target, pickKeys) {
  let ret = {};
  pickKeys.forEach((key) => ret[key] = target[key]);
  return ret;
}
function objKeys(obj2) {
  let keys = [];
  for (const key in obj2) {
    keys.push(key);
  }
  return keys;
}
function objMap(obj2, mapper) {
  const ret = {};
  Object.keys(obj2).forEach((key) => {
    ret[key] = mapper(obj2[key], key);
  });
  return ret;
}
function extend(source, ...targets) {
  for (const key in source) {
    let i = targets.length;
    while (--i >= 0) {
      let v = targets[i][key];
      if (v !== void 0 && v !== null) {
        source[key] = v;
        break;
      }
    }
  }
  return source;
}
function objEach(obj2, fn) {
  Object.keys(obj2).forEach((key) => {
    fn(obj2[key], key);
  });
}
var Obj = class {
  constructor(_source) {
    this._source = _source;
  }
  /**
   * 获取对象的key
   * @returns
   */
  keys() {
    return objKeys(this._source);
  }
  /**
   * 获取某些属性的值
   * @param pickKeys 选择的对象的键的数组
   * @returns
   */
  pick(pickKeys) {
    return pick(this._source, pickKeys);
  }
  /**
   * 循环
   * @param fn 循环中调用的函数
   * @returns
   */
  each(fn) {
    objEach(this._source, fn);
    return this;
  }
  /**
   * 排除一个对象的某些键和值
   * @param omitKeys 排除的对象的键的数组
   * @returns
   */
  omit(omitKeys) {
    return omit(this._source, omitKeys);
  }
  /**
   * 对象映射
   * @param mapper 映射函数
   * @returns
   */
  map(mapper) {
    return objMap(this._source, mapper);
  }
  /**
   * 对象继承
   * @param targets 被继承的目标对象
   * @returns
   */
  extend(...targets) {
    extend(this._source, ...targets);
    return this;
  }
};
function obj(o2) {
  return new Obj(o2);
}
function getChainValue(o2, prop, targetProp) {
  let ret = o2;
  if (targetProp) {
    ret = o2[targetProp];
  }
  prop && prop.split(".").some((p2) => {
    if (p2 === "$last" && Array.isArray(ret)) {
      ret = ret[ret.length - 1];
    } else {
      ret = ret[p2];
    }
    if (!ret) {
      return true;
    }
  });
  return ret;
}
function setChainValue(o2, prop, value) {
  const props = prop.split(".");
  let cur = o2;
  let len = props.length - 1;
  for (let i = 0; i < len; i++) {
    let p2 = props[i];
    if (!cur[p2]) {
      cur[p2] = {};
    }
    cur = cur[p2];
  }
  cur[props[len]] = value;
  return o2;
}
function equal(v1, v2, byKey) {
  if (v1 === v2) return true;
  if (byKey !== void 0) {
    return v1[byKey] === v2[byKey];
  }
  return JSON.stringify(v1) === JSON.stringify(v2);
}

// node_modules/cat-kit/es/fe/cache/cache.js
var __defProp2 = Object.defineProperty;
var __typeError2 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp2 = (obj2, key, value) => key in obj2 ? __defProp2(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField2 = (obj2, key, value) => __defNormalProp2(obj2, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck2 = (obj2, member, msg) => member.has(obj2) || __typeError2("Cannot " + msg);
var __privateGet2 = (obj2, member, getter) => (__accessCheck2(obj2, member, "read from private field"), getter ? getter.call(obj2) : member.get(obj2));
var __privateAdd2 = (obj2, member, value) => member.has(obj2) ? __typeError2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj2) : member.set(obj2, value);
var __privateSet2 = (obj2, member, value, setter) => (__accessCheck2(obj2, member, "write to private field"), member.set(obj2, value), value);
var _store;
var _local;
var _session;
var _WebStorage = class _WebStorage2 {
  constructor(storageType) {
    __privateAdd2(this, _store);
    __publicField2(this, "callbacks", {});
    if (storageType === "local") {
      __privateSet2(this, _store, localStorage);
    } else {
      __privateSet2(this, _store, sessionStorage);
    }
  }
  /**
   * 往缓存里添加单条记录
   * @param key 单个值的键
   * @param value 单个值
   * @param exp 单个值的过期时间, 单位秒
   */
  set(key, value, exp = 0) {
    if (value === null) return this;
    const valueType = typeof value;
    if (!_WebStorage2.enabledType.has(valueType)) return this;
    const temp = { value: null, exp: 0 };
    temp.value = value;
    temp.exp = exp ? Date.now() + exp * 1e3 : 0;
    const cb = this.callbacks[key];
    cb == null ? void 0 : cb.forEach((fn) => fn(key, value, temp));
    __privateGet2(this, _store).setItem(key, JSON.stringify(temp));
    return this;
  }
  get(key, defaultValue = null) {
    let type = getDataType(key);
    if (type === "string") {
      let stringTmp = __privateGet2(this, _store).getItem(key);
      if (stringTmp === null) return defaultValue;
      let tmp = JSON.parse(stringTmp);
      if (tmp.exp > Date.now() || tmp.exp === 0) return tmp.value;
      this.remove(key);
      return defaultValue;
    }
    if (type === "array") {
      return key.map((v) => this.get(v));
    }
    throw Error(
      `get第一个参数的类型应该是string或者array, 但传入的值是${type}类型`
    );
  }
  /**
   * 获取字段过期时间
   * @param key 字段名
   */
  getExpire(key) {
    let stringTmp = __privateGet2(this, _store).getItem(key);
    if (stringTmp === null) return 0;
    try {
      return JSON.parse(stringTmp).exp;
    } catch {
      return 0;
    }
  }
  remove(item) {
    if (item === void 0) {
      __privateGet2(this, _store).clear();
    } else if (typeof item === "string") {
      __privateGet2(this, _store).removeItem(item);
    } else if (Array.isArray(item)) {
      item.forEach((key) => this.remove(key));
    }
    return this;
  }
  /**
   * 添加一个值改动的回调
   * @param key 键
   * @param callback 回调函数
   */
  on(key, callback) {
    const cbs = this.callbacks[key];
    if (cbs) {
      cbs.push(callback);
    } else {
      this.callbacks[key] = [callback];
    }
  }
  off(key) {
    if (typeof key === "string") {
      delete this.callbacks[key];
    } else if (key === void 0) {
      this.callbacks = {};
    } else if (Array.isArray(key)) {
      key.forEach((item) => this.off(item));
    }
  }
};
_store = /* @__PURE__ */ new WeakMap();
__publicField2(_WebStorage, "enabledType", /* @__PURE__ */ new Set([
  "string",
  "number",
  "object",
  "boolean",
  "bigint"
]));
var WebStorage = _WebStorage;
var _WebCache = class _WebCache2 {
  static get session() {
    if (__privateGet2(_WebCache2, _session)) {
      return __privateGet2(_WebCache2, _session);
    }
    __privateSet2(_WebCache2, _session, new WebStorage("session"));
    return __privateGet2(_WebCache2, _session);
  }
  static get local() {
    if (__privateGet2(_WebCache2, _local)) {
      return __privateGet2(_WebCache2, _local);
    }
    __privateSet2(_WebCache2, _local, new WebStorage("local"));
    return __privateGet2(_WebCache2, _local);
  }
  static create(type) {
    return _WebCache2[type];
  }
};
_local = /* @__PURE__ */ new WeakMap();
_session = /* @__PURE__ */ new WeakMap();
__privateAdd2(_WebCache, _local, null);
__privateAdd2(_WebCache, _session, null);

// node_modules/cat-kit/es/fe/worker/worker.js
var _worker;
var _fnString;
var _ctx;
var _scriptURL;
_worker = /* @__PURE__ */ new WeakMap();
_fnString = /* @__PURE__ */ new WeakMap();
_ctx = /* @__PURE__ */ new WeakMap();
_scriptURL = /* @__PURE__ */ new WeakMap();

// node_modules/ultra-ui/shared/constants.js
var o = "U";
var t = `${o.toLowerCase()}-`;
var E = "-";

// node_modules/ultra-ui/utils/helper/make-bem.js
function s(u) {
  function $(n3) {
    const r = `${u}${n3}`;
    return {
      b: r,
      e(e2) {
        return `${r}__${e2}`;
      },
      be(e2, t2) {
        return `${r}-${e2}__${t2}`;
      },
      m(e2) {
        return `${r}--${e2}`;
      },
      em(e2, t2) {
        return `${r}__${e2}--${t2}`;
      }
    };
  }
  function i(n3, r) {
    return arguments.length < 2 ? `is-${n3}` : r !== true ? "" : `is-${n3}`;
  }
  return $.is = i, $;
}

// node_modules/ultra-ui/utils/dom/class-name.js
var e = s(t);

// node_modules/ultra-ui/utils/dom/position.js
function a(t2) {
  const o2 = [];
  let e2 = t2.parentElement;
  for (; e2; )
    e2.scrollHeight > e2.clientHeight && o2.push(e2), e2 = e2.parentElement;
  return o2;
}
var c = /* @__PURE__ */ new Map();
var p = new ResizeObserver((t2) => {
  c.forEach((o2) => o2());
});
function E2(t2, o2) {
  p.observe(t2), c.set(t2, o2);
}
function b(t2) {
  p.unobserve(t2), c.delete(t2);
}

export {
  isObj,
  isArray,
  isUndef,
  kebabCase,
  n,
  date,
  Tree,
  Forest,
  Tween,
  last,
  TreeNode,
  safeRun,
  debounce,
  omit,
  pick,
  objMap,
  obj,
  getChainValue,
  setChainValue,
  equal,
  E,
  e,
  a,
  E2,
  b
};
//# sourceMappingURL=chunk-UAAKHJSZ.js.map
