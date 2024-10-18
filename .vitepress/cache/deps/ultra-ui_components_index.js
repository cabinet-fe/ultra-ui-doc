import {
  InsertToNext_default,
  InsertToPrev_default,
  add_child_default,
  arrow_down_default,
  arrow_left_default,
  arrow_right_default,
  arrow_up_default,
  calendar_default,
  check_default,
  circle_check_filled_default,
  circle_close_filled_default,
  close_default,
  d_arrow_left_default,
  d_arrow_right_default,
  delete_default,
  empty_default,
  help_filled_default,
  hide_default,
  info_filled_default,
  loading_default,
  maximum_default,
  minus_default,
  move_default,
  plus_default,
  question_filled_default,
  recover_default,
  search_default,
  view_default,
  warning_filled_default
} from "./chunk-JPNMNY2M.js";
import {
  Fragment,
  KeepAlive,
  Teleport,
  Text as Text2,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  guardReactiveProps,
  h,
  inject,
  isReactive,
  isRef,
  isVNode,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  shallowReactive,
  shallowRef,
  toDisplayString,
  toRaw,
  toRef,
  triggerRef,
  unref,
  useModel,
  useSlots,
  vModelRadio,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XYSSNQS4.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/ultra-ui/shared/constants.js
var o = "U";
var t = `${o.toLowerCase()}-`;
var E = "-";

// node_modules/ultra-ui/utils/helper/make-bem.js
function s(u5) {
  function $12(n8) {
    const r7 = `${u5}${n8}`;
    return {
      b: r7,
      e(e17) {
        return `${r7}__${e17}`;
      },
      be(e17, t10) {
        return `${r7}-${e17}__${t10}`;
      },
      m(e17) {
        return `${r7}--${e17}`;
      },
      em(e17, t10) {
        return `${r7}__${e17}--${t10}`;
      }
    };
  }
  function i4(n8, r7) {
    return arguments.length < 2 ? `is-${n8}` : r7 !== true ? "" : `is-${n8}`;
  }
  return $12.is = i4, $12;
}

// node_modules/ultra-ui/utils/dom/class-name.js
var e = s(t);

// node_modules/ultra-ui/utils/dom/position.js
function a(t10) {
  const o11 = [];
  let e17 = t10.parentElement;
  for (; e17; )
    e17.scrollHeight > e17.clientHeight && o11.push(e17), e17 = e17.parentElement;
  return o11;
}
var c = /* @__PURE__ */ new Map();
var p = new ResizeObserver((t10) => {
  c.forEach((o11) => o11());
});
function E2(t10, o11) {
  p.observe(t10), c.set(t10, o11);
}
function b(t10) {
  p.unobserve(t10), c.delete(t10);
}

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
  return firstChar + str2.substring(1).replace(/-[a-z]/g, (s13) => s13.substring(1).toUpperCase());
}
function kebabCase(str2) {
  if (str2.startsWith("-")) {
    console.error("字符串不是驼峰格式的!");
    return str2;
  }
  const ret = str2.replace(/[A-Z]/g, (s13) => "-" + s13.toLowerCase());
  return ret.startsWith("-") ? ret.substring(1) : ret;
}
var Str = class {
  constructor(s13) {
    __privateAdd(this, _str);
    __privateSet(this, _str, s13);
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
  let secondPath = paths.filter((p5) => !!p5).join("/").replace(/\/{2,}/g, "/").replace(/^\//, "");
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
  const numberStrings = numbers.map((n32) => String(n32));
  const numStringsLen = numberStrings.map((ns) => {
    var _a2;
    return ((_a2 = ns.split(".")[1]) == null ? void 0 : _a2.length) ?? 0;
  });
  const factor = Math.pow(10, Math.max(...numStringsLen));
  return {
    /** 整数 */
    ints: numbers.map((n32) => Math.round(n32 * factor)),
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
function toFixed(v6, precision) {
  let [int2, decimal = ""] = String(v6).split(".");
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
    for (let i4 = intPart.length; i4 > 0; i4 -= 3) {
      result = "," + intPart.slice(i4 - 3 < 0 ? 0 : i4 - 3, i4) + result;
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
    for (let i4 = 0; i4 < IntLen; i4++) {
      let n32 = intPart.substring(i4, i4 + 1);
      let p5 = IntLen - i4 - 1;
      let q8 = p5 / 4;
      let m6 = p5 % 4;
      if (n32 === "0") {
        count++;
      } else {
        if (count > 0) {
          result += CN_UPPER_NUM[0];
        }
        count = 0;
        result += CN_UPPER_NUM[parseInt(n32)] + CN_INT_RADICE[m6];
      }
      if (m6 === 0 && count < 4) {
        result += CN_INT_UNITS[q8];
      }
    }
    result = `${result}元`;
    if (isNegative) {
      result = `负${result}`;
    }
    if (decPart) {
      const decLen = decPart.length;
      for (let i4 = 0; i4 < decLen; i4++) {
        let n32 = decPart.substring(i4, i4 + 1);
        if (n32 !== "0") result += CN_UPPER_NUM[Number(n32)] + CN_DEC_UNITS[i4];
      }
    } else {
      result = `${result}整`;
    }
    return result;
  }
};
var Num = class {
  constructor(n32) {
    __publicField$3(this, "v");
    this.v = n32;
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
    const { v: v6 } = this;
    for (let i4 = 1; i4 <= v6; i4++) {
      fn(i4);
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
  let i4 = 0;
  let result = 0;
  const { ints, factor } = int(numbers);
  while (i4 < ints.length) {
    result += ints[i4];
    i4++;
  }
  return result / factor;
};
n.minus = function minus(...numbers) {
  let i4 = 0;
  let { ints, factor } = int(numbers);
  let result = ints[0];
  ints = ints.slice(1);
  while (i4 < ints.length) {
    result -= ints[i4];
    i4++;
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
var getDateTypeStr = (str2, formatter, re6) => {
  let matched = formatter.match(re6);
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
  const YMD = [/(y|Y)+/, /M+/, /d+/].map((re6) => getDateTypeStr(dateStr, formatter, re6)).filter((item) => !!item).join("-");
  const HMS = [/(h|H)+/, /m+/, /s+/].map((re6) => getDateTypeStr(dateStr, formatter, re6)).filter((item) => !!item).join(":");
  dateStr = YMD + (HMS ? ` ${HMS}` : "");
  return new Dater(dateStr);
};
function dft(data, cb, childrenKey = "children") {
  if (cb(data) === false) return false;
  let children = data[childrenKey];
  if (children) {
    let i4 = 0;
    while (i4 < children.length) {
      if (dft(children[i4], cb, childrenKey) === false) break;
      i4++;
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
  static create(data, Node2, config) {
    const { childrenKey = "children", onNodeCreated } = typeof Node2 === "function" ? config || {} : Node2;
    let createNode;
    if (typeof Node2 === "function") {
      createNode = (data2, index) => new Node2(data2, index);
    } else if (typeof Node2 === "object") {
      createNode = Node2.createNode;
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
    var _a2;
    let result = node;
    for (let i4 = 0; i4 < indexPath.length; i4++) {
      const index = indexPath[i4];
      if (!result) {
        console.warn("访问的路径内容不存在");
        return void 0;
      }
      result = (_a2 = result[childrenKey]) == null ? void 0 : _a2[index];
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
    var _a2;
    let sum = 0;
    (_a2 = this.nodes) == null ? void 0 : _a2.forEach((node) => {
      sum += node.size;
    });
    return sum;
  }
  static create(data, Node2, config) {
    const { childrenKey = "children", onNodeCreated } = typeof Node2 === "function" ? config || {} : Node2;
    let createNode;
    if (typeof Node2 === "function") {
      createNode = (data2, index) => new Node2(data2, index);
    } else {
      createNode = Node2.createNode;
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
    for (let i4 = 0; i4 < indexPath.length; i4++) {
      const index = indexPath[i4];
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
        var _a2;
        for (const key in state) {
          if (key in this.state) {
            this.state[key] = state[key];
          }
        }
        (_a2 = this.onUpdate) == null ? void 0 : _a2.call(this, this.state);
        onComplete == null ? void 0 : onComplete(this.state);
      },
      tick: (progress) => {
        var _a2;
        for (const key in stateDistance) {
          const target = prevState[key] + easingFunction(progress) * stateDistance[key];
          this.state[key] = target;
        }
        (_a2 = this.onUpdate) == null ? void 0 : _a2.call(this, this.state);
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
  linear: (p5) => p5,
  /** 先慢后快 */
  easeInQuad: (p5) => p5 * p5,
  /** 先快后慢 */
  easeOutQuad: (p5) => p5 * (2 - p5),
  /** 先慢后快再慢 */
  easeInOutQuad: (p5) => p5 < 0.5 ? 2 * p5 * p5 : -1 + (4 - 2 * p5) * p5,
  /** 先回弹再运动 */
  easeInBack: (p5) => p5 * p5 * ((2.70158 + 1) * p5 - 1),
  /** 先运动再回弹 */
  easeOutBack: (p5) => {
    return 1 + 2.70158 * Math.pow(p5 - 1, 3) + 1.70158 * Math.pow(p5 - 1, 2);
  },
  /** 先回弹再运动再回弹 */
  easeInOutBack: (p5) => {
    const c1 = 1.70158;
    const c22 = c1 * 1.525;
    return p5 < 0.5 ? Math.pow(2 * p5, 2) * ((c22 + 1) * 2 * p5 - c22) / 2 : (Math.pow(2 * p5 - 2, 2) * ((c22 + 1) * (p5 * 2 - 2) + c22) + 2) / 2;
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
      const s13 = new Set(indexes);
      return arr2.filter((_10, index) => !s13.has(index));
    }
    return arr2.filter((_10, index) => !indexes.includes(index));
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
    let s13 = 0;
    this.dft(() => {
      s13++;
    });
    return s13;
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
    let i4 = 0;
    while (i4 < arr2.length) {
      arr2[i4].index = i4 + startIndex;
      i4++;
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
    var _a2, _b;
    if (childNode.parent !== this || !((_a2 = this.children) == null ? void 0 : _a2.length)) {
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
    var _a2;
    const len = ((_a2 = this.children) == null ? void 0 : _a2.length) ?? 0;
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
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.insert(data, this.index + 1);
  }
  /**
   * 在当前节点的上一个位置添加一个新节点。
   * @param data 节点数据
   */
  addToPrev(data) {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.insert(data, this.index);
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
  let s13 = new Set(omitKeys);
  for (const key in target) {
    if (!s13.has(key)) {
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
    let i4 = targets.length;
    while (--i4 >= 0) {
      let v6 = targets[i4][key];
      if (v6 !== void 0 && v6 !== null) {
        source[key] = v6;
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
function obj(o11) {
  return new Obj(o11);
}
function getChainValue(o11, prop, targetProp) {
  let ret = o11;
  if (targetProp) {
    ret = o11[targetProp];
  }
  prop && prop.split(".").some((p5) => {
    if (p5 === "$last" && Array.isArray(ret)) {
      ret = ret[ret.length - 1];
    } else {
      ret = ret[p5];
    }
    if (!ret) {
      return true;
    }
  });
  return ret;
}
function setChainValue(o11, prop, value) {
  const props = prop.split(".");
  let cur = o11;
  let len = props.length - 1;
  for (let i4 = 0; i4 < len; i4++) {
    let p5 = props[i4];
    if (!cur[p5]) {
      cur[p5] = {};
    }
    cur = cur[p5];
  }
  cur[props[len]] = value;
  return o11;
}
function equal(v1, v22, byKey) {
  if (v1 === v22) return true;
  if (byKey !== void 0) {
    return v1[byKey] === v22[byKey];
  }
  return JSON.stringify(v1) === JSON.stringify(v22);
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
      return key.map((v6) => this.get(v6));
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

// node_modules/ultra-ui/venders/style-CQYA9RXD.js
function f(t10, r7) {
  return t10 === void 0 ? void 0 : typeof t10 == "number" || !isNaN(+t10) ? String(t10) + r7 : t10;
}
function n3(t10, r7) {
  t10.attributeStyleMap ? Object.keys(r7).forEach((e17) => {
    const i4 = r7[e17];
    !i4 && i4 !== 0 ? t10.attributeStyleMap.delete(kebabCase(e17)) : t10.attributeStyleMap.set(kebabCase(e17), i4);
  }) : Object.keys(r7).forEach((e17) => {
    t10.style[e17] = r7[e17];
  });
}
function s2(t10, r7) {
  t10.attributeStyleMap ? r7.forEach((e17) => {
    t10.attributeStyleMap.delete(kebabCase(e17));
  }) : r7.forEach((e17) => {
    t10.style.removeProperty(e17);
  });
}

// node_modules/ultra-ui/venders/icon.vue_vue_type_script_setup_true_lang-2K-MKsM_.js
var k = defineComponent({
  name: "Icon",
  __name: "icon",
  props: {
    size: {}
  },
  setup(e17) {
    const o11 = e17, t10 = e("icon"), n8 = computed(() => ({
      fontSize: f(o11.size, "px")
    }));
    return (r7, z5) => (openBlock(), createElementBlock(
      "i",
      {
        class: normalizeClass(unref(t10).b),
        style: normalizeStyle(n8.value)
      },
      [
        renderSlot(r7.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/utils/helper/create-increase.js
function t2(e17 = 1e3) {
  let r7 = e17;
  return () => r7++;
}

// node_modules/ultra-ui/directives/click-outside/index.js
var n4 = t2(1e3);
var d = shallowReactive(
  /* @__PURE__ */ new Map()
);
var s3 = (t10) => {
  d.forEach(({ el: e17, handler: a6 }) => {
    e17.contains(t10.target) || a6(t10);
  });
};
var r = false;
function c2() {
  r || (document.addEventListener("click", s3, true), r = true);
}
function f2() {
  r && (document.removeEventListener("click", s3, true), r = false);
}
watch(d, async (t10) => {
  if (t10.size > 0)
    return c2();
  f2();
});
var h2 = {
  mounted(t10, e17) {
    if (!e17.value) return;
    const a6 = String(n4());
    t10.dataset.outsideId = a6, d.set(a6, {
      handler: e17.value,
      el: t10
    });
  },
  updated(t10, e17) {
    if (e17.value)
      t10.dataset.outsideId || (t10.dataset.outsideId = String(n4())), d.set(t10.dataset.outsideId, {
        handler: e17.value,
        el: t10
      });
    else {
      if (!t10.dataset.outsideId) return;
      d.delete(t10.dataset.outsideId);
    }
  },
  unmounted(t10) {
    d.delete(t10.dataset.outsideId);
  }
};

// node_modules/ultra-ui/utils/helper/frame.js
function n5(e17) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e17);
  });
}

// node_modules/ultra-ui/directives/ripple/index.js
var r2 = e("ripple");
var f3 = r2.e("wrap");
var x = 300;
var h3 = (t10) => {
  const e17 = t10.currentTarget;
  if (t10.propertyName !== "transform") return;
  e17.removeEventListener("transitionend", h3);
  const s13 = e17.parentElement;
  s13 && (s13.removeChild(e17), s13.getElementsByClassName(f3).length === 0 && (s13.classList.remove(r2.b), delete s13.dataset.class));
};
function $(t10, e17) {
  !t10.classList.contains(r2.b) && t10.classList.add(r2.b), t10.dataset.class = r2.b;
  const { domRect: s13, centerX: n8 = 0, centerY: o11 = 0, rippleClass: g10 } = e17 || {}, i4 = s13 ?? t10.getBoundingClientRect(), E11 = n8 < i4.width / 2 ? i4.width - n8 : n8, C7 = o11 < i4.height / 2 ? i4.height - o11 : o11, d9 = Math.ceil(Math.sqrt(E11 ** 2 + C7 ** 2)), c12 = d9 * 2, a6 = document.createElement("span");
  a6.classList.add(f3);
  const L5 = t10.dataset.duration ? Number(t10.dataset.duration) : x, p5 = g10 ?? t10.dataset.rippleClass;
  p5 && a6.classList.add(p5), n3(a6, {
    width: `${c12}px`,
    height: `${c12}px`,
    left: `${n8 - d9}px`,
    top: `${o11 - d9}px`,
    transition: `transform ${L5}ms cubic-bezier(.82,.84,.28,.92)`,
    transform: "scale3d(0.2, 0.2, 1)"
  }), t10.appendChild(a6), a6.addEventListener("transitionend", h3), n5(() => {
    n3(a6, {
      transform: "scale3d(1, 1, 1)"
    });
  });
}
function v(t10) {
  const e17 = t10.currentTarget, s13 = e17.getBoundingClientRect();
  $(e17, {
    centerX: t10.pageX - s13.left,
    centerY: t10.pageY - s13.top,
    domRect: s13
  });
}
var m = (t10, e17) => {
  e17.value !== false && (typeof e17.value == "string" && (t10.dataset.rippleClass = e17.value), e17.arg && (t10.dataset.duration = e17.arg), t10.addEventListener("mousedown", v));
};
var u = (t10) => {
  delete t10.dataset.rippleClass, delete t10.dataset.duration, t10.removeEventListener("mousedown", v);
};
var T = {
  // 元素的dom挂载后注册按下事件
  mounted: m,
  // 元素卸载前注销事件
  unmounted: u,
  // 元素更新时移除旧有事件并重新添加事件
  updated(t10, e17) {
    t10.dataset.class && t10.classList.add(t10.dataset.class);
    const s13 = !!e17.oldValue;
    e17.value && !s13 ? m(t10, e17) : !e17.value && s13 && u(t10);
  }
};

// node_modules/ultra-ui/compositions/use-config/index.js
var i = reactive({
  animation: true,
  size: "default",
  form: {
    labelWidth: 80
  },
  paginator: {
    pageSize: 40,
    pageSizeOptions: [40, 100, 200, 500, 1e3]
  }
});
watch(
  () => i.size,
  (e17, t10) => {
    t10 && document.documentElement.classList.remove(t10), document.documentElement.classList.add(e17);
  },
  { immediate: true }
);
function c3(e17, t10) {
  Object.keys(t10).forEach((o11) => {
    const a6 = e17[o11], n8 = t10[o11];
    isObj(a6) ? isObj(n8) ? c3(a6, n8) : console.warn(`extend['${o11}']应该是一个对象`) : e17[o11] = n8;
  });
}
function d2() {
  return {
    /** 全局配置 */
    config: readonly(i),
    /**
     * 设置全局配置项
     * @param conf
     */
    setConfig(e17) {
      c3(i, e17);
    }
  };
}

// node_modules/ultra-ui/compositions/use-fallback-props/index.js
function l(n8, e17) {
  const { config: i4 } = d2();
  let r7 = {};
  for (const t10 in e17)
    if (e17.hasOwnProperty(t10)) {
      const f11 = e17[t10], s13 = computed(() => {
        for (let o11 = n8.length - 1; o11 > -1; --o11) {
          const u5 = n8[o11];
          if (u5[t10] !== void 0)
            return u5[t10];
        }
        return i4[t10] ?? f11;
      });
      r7[t10] = s13;
    }
  return r7;
}
function g(n8, e17) {
  return e17 || (e17 = {
    size: "default",
    disabled: false,
    readonly: false
  }), l(n8, e17);
}

// node_modules/ultra-ui/venders/button.vue_vue_type_script_setup_true_lang-BKbobDGl.js
var M = defineComponent({
  name: "Button",
  __name: "button",
  props: {
    type: {},
    text: { type: Boolean },
    plain: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: { default: () => loading_default },
    circle: { type: Boolean },
    disabled: { type: Boolean, default: false },
    icon: {},
    iconSize: {},
    iconPosition: { default: "left" },
    size: {}
  },
  emits: ["click"],
  setup(m6, { expose: b10, emit: y5 }) {
    const o11 = m6, { size: g10 } = l([o11], {
      size: "default"
    }), z5 = y5, n8 = e("button"), k6 = computed(() => [
      n8.b,
      n8.m(g10.value),
      o11.type && n8.m("color-" + o11.type),
      e.is("circle", o11.circle),
      e.is("disabled", o11.disabled),
      e.is("loading", o11.loading),
      e.is("plain", o11.plain),
      e.is("text", o11.text)
    ]), v6 = computed(() => o11.disabled || o11.loading ? false : (o11.plain || o11.text) && o11.type ? e.is(`ripple-${o11.type}`) : true), B7 = (e17) => {
      if (o11.disabled || o11.loading) {
        e17.stopPropagation();
        return;
      }
      z5("click", e17);
    }, f11 = shallowRef();
    return b10({
      el: f11
    }), (e17, E11) => withDirectives((openBlock(), createElementBlock(
      "button",
      mergeProps({
        class: k6.value,
        type: "button"
      }, e17.$attrs, {
        "aria-label": "button",
        onClick: B7,
        ref_key: "buttonRef",
        ref: f11
      }),
      [
        createCommentVNode(" 加载图标 "),
        e17.loading ? (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass([unref(e).is("loading"), e17.$slots.default ? unref(n8).e("icon-left") : null]),
          size: e17.iconSize
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e17.loadingIcon)))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class", "size"])) : createCommentVNode("v-if", true),
        createCommentVNode(" 左侧图标 "),
        e17.icon && e17.iconPosition === "left" && !e17.loading ? (openBlock(), createBlock(unref(k), {
          key: 1,
          class: normalizeClass(e17.$slots.default && unref(n8).e("icon-left")),
          size: e17.iconSize
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e17.icon)))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class", "size"])) : createCommentVNode("v-if", true),
        renderSlot(e17.$slots, "default"),
        createCommentVNode(" 右侧图标 "),
        e17.icon && e17.iconPosition === "right" ? (openBlock(), createBlock(unref(k), {
          key: 2,
          class: normalizeClass(e17.$slots.default && unref(n8).e("icon-right")),
          size: e17.iconSize
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e17.icon)))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class", "size"])) : createCommentVNode("v-if", true)
      ],
      16
      /* FULL_PROPS */
    )), [
      [unref(T), v6.value]
    ]);
  }
});

// node_modules/ultra-ui/components/action/di.js
var o2 = Symbol("ActionDIKey");

// node_modules/ultra-ui/utils/dom/z-index.js
var o3 = t2(1e3);

// node_modules/ultra-ui/utils/helper/vue.js
function h4(t10) {
  return t10.type === Text2;
}
function m2(t10) {
  return t10 && t10.type === Fragment;
}
function p2(t10) {
  return isVNode(t10) && t10.type === "template";
}
function l2(t10, e17 = []) {
  return t10.forEach((r7) => {
    if (!isVNode(r7)) {
      console.log(r7), (typeof r7 == "string" || typeof r7 == "number") && e17.push(createTextVNode(String(r7)));
      return;
    }
    (m2(r7) || p2(r7)) && Array.isArray(r7.children) ? l2(r7.children, e17) : e17.push(r7);
  }), e17;
}
function x2(t10) {
  const e17 = shallowRef(t10());
  return watch(t10, (r7) => {
    e17.value = r7;
  }), e17;
}

// node_modules/ultra-ui/compositions/use-pop/index.js
var G = Math.min;
var Y = Math.max;
var tt = Math.round;
var H = (t10) => ({
  x: t10,
  y: t10
});
var Bt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var Mt = {
  start: "end",
  end: "start"
};
function ct(t10, e17, o11) {
  return Y(t10, G(e17, o11));
}
function Q(t10, e17) {
  return typeof t10 == "function" ? t10(e17) : t10;
}
function z(t10) {
  return t10.split("-")[0];
}
function Z(t10) {
  return t10.split("-")[1];
}
function At(t10) {
  return t10 === "x" ? "y" : "x";
}
function dt(t10) {
  return t10 === "y" ? "height" : "width";
}
function I(t10) {
  return ["top", "bottom"].includes(z(t10)) ? "y" : "x";
}
function mt(t10) {
  return At(I(t10));
}
function Ht(t10, e17, o11) {
  o11 === void 0 && (o11 = false);
  const n8 = Z(t10), i4 = mt(t10), r7 = dt(i4);
  let s13 = i4 === "x" ? n8 === (o11 ? "end" : "start") ? "right" : "left" : n8 === "start" ? "bottom" : "top";
  return e17.reference[r7] > e17.floating[r7] && (s13 = et(s13)), [s13, et(s13)];
}
function _t(t10) {
  const e17 = et(t10);
  return [lt(t10), e17, lt(e17)];
}
function lt(t10) {
  return t10.replace(/start|end/g, (e17) => Mt[e17]);
}
function zt(t10, e17, o11) {
  const n8 = ["left", "right"], i4 = ["right", "left"], r7 = ["top", "bottom"], s13 = ["bottom", "top"];
  switch (t10) {
    case "top":
    case "bottom":
      return o11 ? e17 ? i4 : n8 : e17 ? n8 : i4;
    case "left":
    case "right":
      return e17 ? r7 : s13;
    default:
      return [];
  }
}
function Xt(t10, e17, o11, n8) {
  const i4 = Z(t10);
  let r7 = zt(z(t10), o11 === "start", n8);
  return i4 && (r7 = r7.map((s13) => s13 + "-" + i4), e17 && (r7 = r7.concat(r7.map(lt)))), r7;
}
function et(t10) {
  return t10.replace(/left|right|bottom|top/g, (e17) => Bt[e17]);
}
function Yt(t10) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t10
  };
}
function Rt(t10) {
  return typeof t10 != "number" ? Yt(t10) : {
    top: t10,
    right: t10,
    bottom: t10,
    left: t10
  };
}
function nt(t10) {
  const {
    x: e17,
    y: o11,
    width: n8,
    height: i4
  } = t10;
  return {
    width: n8,
    height: i4,
    top: o11,
    left: e17,
    right: e17 + n8,
    bottom: o11 + i4,
    x: e17,
    y: o11
  };
}
function xt(t10, e17, o11) {
  let {
    reference: n8,
    floating: i4
  } = t10;
  const r7 = I(e17), s13 = mt(e17), c12 = dt(s13), l5 = z(e17), f11 = r7 === "y", d9 = n8.x + n8.width / 2 - i4.width / 2, u5 = n8.y + n8.height / 2 - i4.height / 2, m6 = n8[c12] / 2 - i4[c12] / 2;
  let a6;
  switch (l5) {
    case "top":
      a6 = {
        x: d9,
        y: n8.y - i4.height
      };
      break;
    case "bottom":
      a6 = {
        x: d9,
        y: n8.y + n8.height
      };
      break;
    case "right":
      a6 = {
        x: n8.x + n8.width,
        y: u5
      };
      break;
    case "left":
      a6 = {
        x: n8.x - i4.width,
        y: u5
      };
      break;
    default:
      a6 = {
        x: n8.x,
        y: n8.y
      };
  }
  switch (Z(e17)) {
    case "start":
      a6[s13] -= m6 * (o11 && f11 ? -1 : 1);
      break;
    case "end":
      a6[s13] += m6 * (o11 && f11 ? -1 : 1);
      break;
  }
  return a6;
}
var jt = async (t10, e17, o11) => {
  const {
    placement: n8 = "bottom",
    strategy: i4 = "absolute",
    middleware: r7 = [],
    platform: s13
  } = o11, c12 = r7.filter(Boolean), l5 = await (s13.isRTL == null ? void 0 : s13.isRTL(e17));
  let f11 = await s13.getElementRects({
    reference: t10,
    floating: e17,
    strategy: i4
  }), {
    x: d9,
    y: u5
  } = xt(f11, n8, l5), m6 = n8, a6 = {}, g10 = 0;
  for (let h8 = 0; h8 < c12.length; h8++) {
    const {
      name: w12,
      fn: x12
    } = c12[h8], {
      x: p5,
      y: v6,
      data: A11,
      reset: y5
    } = await x12({
      x: d9,
      y: u5,
      initialPlacement: n8,
      placement: m6,
      strategy: i4,
      middlewareData: a6,
      rects: f11,
      platform: s13,
      elements: {
        reference: t10,
        floating: e17
      }
    });
    d9 = p5 ?? d9, u5 = v6 ?? u5, a6 = {
      ...a6,
      [w12]: {
        ...a6[w12],
        ...A11
      }
    }, y5 && g10 <= 50 && (g10++, typeof y5 == "object" && (y5.placement && (m6 = y5.placement), y5.rects && (f11 = y5.rects === true ? await s13.getElementRects({
      reference: t10,
      floating: e17,
      strategy: i4
    }) : y5.rects), {
      x: d9,
      y: u5
    } = xt(f11, m6, l5)), h8 = -1);
  }
  return {
    x: d9,
    y: u5,
    placement: m6,
    strategy: i4,
    middlewareData: a6
  };
};
async function Et(t10, e17) {
  var o11;
  e17 === void 0 && (e17 = {});
  const {
    x: n8,
    y: i4,
    platform: r7,
    rects: s13,
    elements: c12,
    strategy: l5
  } = t10, {
    boundary: f11 = "clippingAncestors",
    rootBoundary: d9 = "viewport",
    elementContext: u5 = "floating",
    altBoundary: m6 = false,
    padding: a6 = 0
  } = Q(e17, t10), g10 = Rt(a6), w12 = c12[m6 ? u5 === "floating" ? "reference" : "floating" : u5], x12 = nt(await r7.getClippingRect({
    element: (o11 = await (r7.isElement == null ? void 0 : r7.isElement(w12))) == null || o11 ? w12 : w12.contextElement || await (r7.getDocumentElement == null ? void 0 : r7.getDocumentElement(c12.floating)),
    boundary: f11,
    rootBoundary: d9,
    strategy: l5
  })), p5 = u5 === "floating" ? {
    x: n8,
    y: i4,
    width: s13.floating.width,
    height: s13.floating.height
  } : s13.reference, v6 = await (r7.getOffsetParent == null ? void 0 : r7.getOffsetParent(c12.floating)), A11 = await (r7.isElement == null ? void 0 : r7.isElement(v6)) ? await (r7.getScale == null ? void 0 : r7.getScale(v6)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y5 = nt(r7.convertOffsetParentRelativeRectToViewportRelativeRect ? await r7.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c12,
    rect: p5,
    offsetParent: v6,
    strategy: l5
  }) : p5);
  return {
    top: (x12.top - y5.top + g10.top) / A11.y,
    bottom: (y5.bottom - x12.bottom + g10.bottom) / A11.y,
    left: (x12.left - y5.left + g10.left) / A11.x,
    right: (y5.right - x12.right + g10.right) / A11.x
  };
}
var It = (t10) => ({
  name: "arrow",
  options: t10,
  async fn(e17) {
    const {
      x: o11,
      y: n8,
      placement: i4,
      rects: r7,
      platform: s13,
      elements: c12,
      middlewareData: l5
    } = e17, {
      element: f11,
      padding: d9 = 0
    } = Q(t10, e17) || {};
    if (f11 == null)
      return {};
    const u5 = Rt(d9), m6 = {
      x: o11,
      y: n8
    }, a6 = mt(i4), g10 = dt(a6), h8 = await s13.getDimensions(f11), w12 = a6 === "y", x12 = w12 ? "top" : "left", p5 = w12 ? "bottom" : "right", v6 = w12 ? "clientHeight" : "clientWidth", A11 = r7.reference[g10] + r7.reference[a6] - m6[a6] - r7.floating[g10], y5 = m6[a6] - r7.reference[a6], N4 = await (s13.getOffsetParent == null ? void 0 : s13.getOffsetParent(f11));
    let S8 = N4 ? N4[v6] : 0;
    (!S8 || !await (s13.isElement == null ? void 0 : s13.isElement(N4))) && (S8 = c12.floating[v6] || r7.floating[g10]);
    const V6 = A11 / 2 - y5 / 2, L5 = S8 / 2 - h8[g10] / 2 - 1, E11 = G(u5[x12], L5), F6 = G(u5[p5], L5), D4 = E11, W6 = S8 - h8[g10] - F6, b10 = S8 / 2 - h8[g10] / 2 + V6, X5 = ct(D4, b10, W6), k6 = !l5.arrow && Z(i4) != null && b10 !== X5 && r7.reference[g10] / 2 - (b10 < D4 ? E11 : F6) - h8[g10] / 2 < 0, P8 = k6 ? b10 < D4 ? b10 - D4 : b10 - W6 : 0;
    return {
      [a6]: m6[a6] + P8,
      data: {
        [a6]: X5,
        centerOffset: b10 - X5 - P8,
        ...k6 && {
          alignmentOffset: P8
        }
      },
      reset: k6
    };
  }
});
var Kt = function(t10) {
  return t10 === void 0 && (t10 = {}), {
    name: "flip",
    options: t10,
    async fn(e17) {
      var o11, n8;
      const {
        placement: i4,
        middlewareData: r7,
        rects: s13,
        initialPlacement: c12,
        platform: l5,
        elements: f11
      } = e17, {
        mainAxis: d9 = true,
        crossAxis: u5 = true,
        fallbackPlacements: m6,
        fallbackStrategy: a6 = "bestFit",
        fallbackAxisSideDirection: g10 = "none",
        flipAlignment: h8 = true,
        ...w12
      } = Q(t10, e17);
      if ((o11 = r7.arrow) != null && o11.alignmentOffset)
        return {};
      const x12 = z(i4), p5 = I(c12), v6 = z(c12) === c12, A11 = await (l5.isRTL == null ? void 0 : l5.isRTL(f11.floating)), y5 = m6 || (v6 || !h8 ? [et(c12)] : _t(c12)), N4 = g10 !== "none";
      !m6 && N4 && y5.push(...Xt(c12, h8, g10, A11));
      const S8 = [c12, ...y5], V6 = await Et(e17, w12), L5 = [];
      let E11 = ((n8 = r7.flip) == null ? void 0 : n8.overflows) || [];
      if (d9 && L5.push(V6[x12]), u5) {
        const b10 = Ht(i4, s13, A11);
        L5.push(V6[b10[0]], V6[b10[1]]);
      }
      if (E11 = [...E11, {
        placement: i4,
        overflows: L5
      }], !L5.every((b10) => b10 <= 0)) {
        var F6, D4;
        const b10 = (((F6 = r7.flip) == null ? void 0 : F6.index) || 0) + 1, X5 = S8[b10];
        if (X5)
          return {
            data: {
              index: b10,
              overflows: E11
            },
            reset: {
              placement: X5
            }
          };
        let k6 = (D4 = E11.filter((P8) => P8.overflows[0] <= 0).sort((P8, B7) => P8.overflows[1] - B7.overflows[1])[0]) == null ? void 0 : D4.placement;
        if (!k6)
          switch (a6) {
            case "bestFit": {
              var W6;
              const P8 = (W6 = E11.filter((B7) => {
                if (N4) {
                  const M8 = I(B7.placement);
                  return M8 === p5 || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M8 === "y";
                }
                return true;
              }).map((B7) => [B7.placement, B7.overflows.filter((M8) => M8 > 0).reduce((M8, kt2) => M8 + kt2, 0)]).sort((B7, M8) => B7[1] - M8[1])[0]) == null ? void 0 : W6[0];
              P8 && (k6 = P8);
              break;
            }
            case "initialPlacement":
              k6 = c12;
              break;
          }
        if (i4 !== k6)
          return {
            reset: {
              placement: k6
            }
          };
      }
      return {};
    }
  };
};
async function qt(t10, e17) {
  const {
    placement: o11,
    platform: n8,
    elements: i4
  } = t10, r7 = await (n8.isRTL == null ? void 0 : n8.isRTL(i4.floating)), s13 = z(o11), c12 = Z(o11), l5 = I(o11) === "y", f11 = ["left", "top"].includes(s13) ? -1 : 1, d9 = r7 && l5 ? -1 : 1, u5 = Q(e17, t10);
  let {
    mainAxis: m6,
    crossAxis: a6,
    alignmentAxis: g10
  } = typeof u5 == "number" ? {
    mainAxis: u5,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u5.mainAxis || 0,
    crossAxis: u5.crossAxis || 0,
    alignmentAxis: u5.alignmentAxis
  };
  return c12 && typeof g10 == "number" && (a6 = c12 === "end" ? g10 * -1 : g10), l5 ? {
    x: a6 * d9,
    y: m6 * f11
  } : {
    x: m6 * f11,
    y: a6 * d9
  };
}
var Gt = function(t10) {
  return t10 === void 0 && (t10 = 0), {
    name: "offset",
    options: t10,
    async fn(e17) {
      var o11, n8;
      const {
        x: i4,
        y: r7,
        placement: s13,
        middlewareData: c12
      } = e17, l5 = await qt(e17, t10);
      return s13 === ((o11 = c12.offset) == null ? void 0 : o11.placement) && (n8 = c12.arrow) != null && n8.alignmentOffset ? {} : {
        x: i4 + l5.x,
        y: r7 + l5.y,
        data: {
          ...l5,
          placement: s13
        }
      };
    }
  };
};
var Jt = function(t10) {
  return t10 === void 0 && (t10 = {}), {
    name: "shift",
    options: t10,
    async fn(e17) {
      const {
        x: o11,
        y: n8,
        placement: i4
      } = e17, {
        mainAxis: r7 = true,
        crossAxis: s13 = false,
        limiter: c12 = {
          fn: (w12) => {
            let {
              x: x12,
              y: p5
            } = w12;
            return {
              x: x12,
              y: p5
            };
          }
        },
        ...l5
      } = Q(t10, e17), f11 = {
        x: o11,
        y: n8
      }, d9 = await Et(e17, l5), u5 = I(z(i4)), m6 = At(u5);
      let a6 = f11[m6], g10 = f11[u5];
      if (r7) {
        const w12 = m6 === "y" ? "top" : "left", x12 = m6 === "y" ? "bottom" : "right", p5 = a6 + d9[w12], v6 = a6 - d9[x12];
        a6 = ct(p5, a6, v6);
      }
      if (s13) {
        const w12 = u5 === "y" ? "top" : "left", x12 = u5 === "y" ? "bottom" : "right", p5 = g10 + d9[w12], v6 = g10 - d9[x12];
        g10 = ct(p5, g10, v6);
      }
      const h8 = c12.fn({
        ...e17,
        [m6]: a6,
        [u5]: g10
      });
      return {
        ...h8,
        data: {
          x: h8.x - o11,
          y: h8.y - n8,
          enabled: {
            [m6]: r7,
            [u5]: s13
          }
        }
      };
    }
  };
};
function ot() {
  return typeof window < "u";
}
function q(t10) {
  return Ct(t10) ? (t10.nodeName || "").toLowerCase() : "#document";
}
function R(t10) {
  var e17;
  return (t10 == null || (e17 = t10.ownerDocument) == null ? void 0 : e17.defaultView) || window;
}
function $2(t10) {
  var e17;
  return (e17 = (Ct(t10) ? t10.ownerDocument : t10.document) || window.document) == null ? void 0 : e17.documentElement;
}
function Ct(t10) {
  return ot() ? t10 instanceof Node || t10 instanceof R(t10).Node : false;
}
function C(t10) {
  return ot() ? t10 instanceof Element || t10 instanceof R(t10).Element : false;
}
function T2(t10) {
  return ot() ? t10 instanceof HTMLElement || t10 instanceof R(t10).HTMLElement : false;
}
function yt(t10) {
  return !ot() || typeof ShadowRoot > "u" ? false : t10 instanceof ShadowRoot || t10 instanceof R(t10).ShadowRoot;
}
function U(t10) {
  const {
    overflow: e17,
    overflowX: o11,
    overflowY: n8,
    display: i4
  } = O(t10);
  return /auto|scroll|overlay|hidden|clip/.test(e17 + n8 + o11) && !["inline", "contents"].includes(i4);
}
function Qt(t10) {
  return ["table", "td", "th"].includes(q(t10));
}
function it(t10) {
  return [":popover-open", ":modal"].some((e17) => {
    try {
      return t10.matches(e17);
    } catch {
      return false;
    }
  });
}
function gt(t10) {
  const e17 = pt(), o11 = C(t10) ? O(t10) : t10;
  return o11.transform !== "none" || o11.perspective !== "none" || (o11.containerType ? o11.containerType !== "normal" : false) || !e17 && (o11.backdropFilter ? o11.backdropFilter !== "none" : false) || !e17 && (o11.filter ? o11.filter !== "none" : false) || ["transform", "perspective", "filter"].some((n8) => (o11.willChange || "").includes(n8)) || ["paint", "layout", "strict", "content"].some((n8) => (o11.contain || "").includes(n8));
}
function Zt(t10) {
  let e17 = _(t10);
  for (; T2(e17) && !K(e17); ) {
    if (gt(e17))
      return e17;
    if (it(e17))
      return null;
    e17 = _(e17);
  }
  return null;
}
function pt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function K(t10) {
  return ["html", "body", "#document"].includes(q(t10));
}
function O(t10) {
  return R(t10).getComputedStyle(t10);
}
function rt(t10) {
  return C(t10) ? {
    scrollLeft: t10.scrollLeft,
    scrollTop: t10.scrollTop
  } : {
    scrollLeft: t10.scrollX,
    scrollTop: t10.scrollY
  };
}
function _(t10) {
  if (q(t10) === "html")
    return t10;
  const e17 = (
    // Step into the shadow DOM of the parent of a slotted node.
    t10.assignedSlot || // DOM Element detected.
    t10.parentNode || // ShadowRoot detected.
    yt(t10) && t10.host || // Fallback.
    $2(t10)
  );
  return yt(e17) ? e17.host : e17;
}
function Ot(t10) {
  const e17 = _(t10);
  return K(e17) ? t10.ownerDocument ? t10.ownerDocument.body : t10.body : T2(e17) && U(e17) ? e17 : Ot(e17);
}
function ft(t10, e17, o11) {
  var n8;
  e17 === void 0 && (e17 = []), o11 === void 0 && (o11 = true);
  const i4 = Ot(t10), r7 = i4 === ((n8 = t10.ownerDocument) == null ? void 0 : n8.body), s13 = R(i4);
  if (r7) {
    const c12 = at(s13);
    return e17.concat(s13, s13.visualViewport || [], U(i4) ? i4 : [], c12 && o11 ? ft(c12) : []);
  }
  return e17.concat(i4, ft(i4, [], o11));
}
function at(t10) {
  return t10.parent && Object.getPrototypeOf(t10.parent) ? t10.frameElement : null;
}
function Pt(t10) {
  const e17 = O(t10);
  let o11 = parseFloat(e17.width) || 0, n8 = parseFloat(e17.height) || 0;
  const i4 = T2(t10), r7 = i4 ? t10.offsetWidth : o11, s13 = i4 ? t10.offsetHeight : n8, c12 = tt(o11) !== r7 || tt(n8) !== s13;
  return c12 && (o11 = r7, n8 = s13), {
    width: o11,
    height: n8,
    $: c12
  };
}
function Tt(t10) {
  return C(t10) ? t10 : t10.contextElement;
}
function j(t10) {
  const e17 = Tt(t10);
  if (!T2(e17))
    return H(1);
  const o11 = e17.getBoundingClientRect(), {
    width: n8,
    height: i4,
    $: r7
  } = Pt(e17);
  let s13 = (r7 ? tt(o11.width) : o11.width) / n8, c12 = (r7 ? tt(o11.height) : o11.height) / i4;
  return (!s13 || !Number.isFinite(s13)) && (s13 = 1), (!c12 || !Number.isFinite(c12)) && (c12 = 1), {
    x: s13,
    y: c12
  };
}
var Ut = H(0);
function St(t10) {
  const e17 = R(t10);
  return !pt() || !e17.visualViewport ? Ut : {
    x: e17.visualViewport.offsetLeft,
    y: e17.visualViewport.offsetTop
  };
}
function te2(t10, e17, o11) {
  return e17 === void 0 && (e17 = false), !o11 || e17 && o11 !== R(t10) ? false : e17;
}
function J(t10, e17, o11, n8) {
  e17 === void 0 && (e17 = false), o11 === void 0 && (o11 = false);
  const i4 = t10.getBoundingClientRect(), r7 = Tt(t10);
  let s13 = H(1);
  e17 && (n8 ? C(n8) && (s13 = j(n8)) : s13 = j(t10));
  const c12 = te2(r7, o11, n8) ? St(r7) : H(0);
  let l5 = (i4.left + c12.x) / s13.x, f11 = (i4.top + c12.y) / s13.y, d9 = i4.width / s13.x, u5 = i4.height / s13.y;
  if (r7) {
    const m6 = R(r7), a6 = n8 && C(n8) ? R(n8) : n8;
    let g10 = m6, h8 = at(g10);
    for (; h8 && n8 && a6 !== g10; ) {
      const w12 = j(h8), x12 = h8.getBoundingClientRect(), p5 = O(h8), v6 = x12.left + (h8.clientLeft + parseFloat(p5.paddingLeft)) * w12.x, A11 = x12.top + (h8.clientTop + parseFloat(p5.paddingTop)) * w12.y;
      l5 *= w12.x, f11 *= w12.y, d9 *= w12.x, u5 *= w12.y, l5 += v6, f11 += A11, g10 = R(h8), h8 = at(g10);
    }
  }
  return nt({
    width: d9,
    height: u5,
    x: l5,
    y: f11
  });
}
function ee(t10) {
  let {
    elements: e17,
    rect: o11,
    offsetParent: n8,
    strategy: i4
  } = t10;
  const r7 = i4 === "fixed", s13 = $2(n8), c12 = e17 ? it(e17.floating) : false;
  if (n8 === s13 || c12 && r7)
    return o11;
  let l5 = {
    scrollLeft: 0,
    scrollTop: 0
  }, f11 = H(1);
  const d9 = H(0), u5 = T2(n8);
  if ((u5 || !u5 && !r7) && ((q(n8) !== "body" || U(s13)) && (l5 = rt(n8)), T2(n8))) {
    const m6 = J(n8);
    f11 = j(n8), d9.x = m6.x + n8.clientLeft, d9.y = m6.y + n8.clientTop;
  }
  return {
    width: o11.width * f11.x,
    height: o11.height * f11.y,
    x: o11.x * f11.x - l5.scrollLeft * f11.x + d9.x,
    y: o11.y * f11.y - l5.scrollTop * f11.y + d9.y
  };
}
function ne(t10) {
  return Array.from(t10.getClientRects());
}
function ut(t10, e17) {
  const o11 = rt(t10).scrollLeft;
  return e17 ? e17.left + o11 : J($2(t10)).left + o11;
}
function oe(t10) {
  const e17 = $2(t10), o11 = rt(t10), n8 = t10.ownerDocument.body, i4 = Y(e17.scrollWidth, e17.clientWidth, n8.scrollWidth, n8.clientWidth), r7 = Y(e17.scrollHeight, e17.clientHeight, n8.scrollHeight, n8.clientHeight);
  let s13 = -o11.scrollLeft + ut(t10);
  const c12 = -o11.scrollTop;
  return O(n8).direction === "rtl" && (s13 += Y(e17.clientWidth, n8.clientWidth) - i4), {
    width: i4,
    height: r7,
    x: s13,
    y: c12
  };
}
function ie(t10, e17) {
  const o11 = R(t10), n8 = $2(t10), i4 = o11.visualViewport;
  let r7 = n8.clientWidth, s13 = n8.clientHeight, c12 = 0, l5 = 0;
  if (i4) {
    r7 = i4.width, s13 = i4.height;
    const f11 = pt();
    (!f11 || f11 && e17 === "fixed") && (c12 = i4.offsetLeft, l5 = i4.offsetTop);
  }
  return {
    width: r7,
    height: s13,
    x: c12,
    y: l5
  };
}
function re(t10, e17) {
  const o11 = J(t10, true, e17 === "fixed"), n8 = o11.top + t10.clientTop, i4 = o11.left + t10.clientLeft, r7 = T2(t10) ? j(t10) : H(1), s13 = t10.clientWidth * r7.x, c12 = t10.clientHeight * r7.y, l5 = i4 * r7.x, f11 = n8 * r7.y;
  return {
    width: s13,
    height: c12,
    x: l5,
    y: f11
  };
}
function vt(t10, e17, o11) {
  let n8;
  if (e17 === "viewport")
    n8 = ie(t10, o11);
  else if (e17 === "document")
    n8 = oe($2(t10));
  else if (C(e17))
    n8 = re(e17, o11);
  else {
    const i4 = St(t10);
    n8 = {
      ...e17,
      x: e17.x - i4.x,
      y: e17.y - i4.y
    };
  }
  return nt(n8);
}
function Lt(t10, e17) {
  const o11 = _(t10);
  return o11 === e17 || !C(o11) || K(o11) ? false : O(o11).position === "fixed" || Lt(o11, e17);
}
function se(t10, e17) {
  const o11 = e17.get(t10);
  if (o11)
    return o11;
  let n8 = ft(t10, [], false).filter((c12) => C(c12) && q(c12) !== "body"), i4 = null;
  const r7 = O(t10).position === "fixed";
  let s13 = r7 ? _(t10) : t10;
  for (; C(s13) && !K(s13); ) {
    const c12 = O(s13), l5 = gt(s13);
    !l5 && c12.position === "fixed" && (i4 = null), (r7 ? !l5 && !i4 : !l5 && c12.position === "static" && !!i4 && ["absolute", "fixed"].includes(i4.position) || U(s13) && !l5 && Lt(t10, s13)) ? n8 = n8.filter((d9) => d9 !== s13) : i4 = c12, s13 = _(s13);
  }
  return e17.set(t10, n8), n8;
}
function ce(t10) {
  let {
    element: e17,
    boundary: o11,
    rootBoundary: n8,
    strategy: i4
  } = t10;
  const s13 = [...o11 === "clippingAncestors" ? it(e17) ? [] : se(e17, this._c) : [].concat(o11), n8], c12 = s13[0], l5 = s13.reduce((f11, d9) => {
    const u5 = vt(e17, d9, i4);
    return f11.top = Y(u5.top, f11.top), f11.right = G(u5.right, f11.right), f11.bottom = G(u5.bottom, f11.bottom), f11.left = Y(u5.left, f11.left), f11;
  }, vt(e17, c12, i4));
  return {
    width: l5.right - l5.left,
    height: l5.bottom - l5.top,
    x: l5.left,
    y: l5.top
  };
}
function le(t10) {
  const {
    width: e17,
    height: o11
  } = Pt(t10);
  return {
    width: e17,
    height: o11
  };
}
function fe(t10, e17, o11) {
  const n8 = T2(e17), i4 = $2(e17), r7 = o11 === "fixed", s13 = J(t10, true, r7, e17);
  let c12 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l5 = H(0);
  if (n8 || !n8 && !r7)
    if ((q(e17) !== "body" || U(i4)) && (c12 = rt(e17)), n8) {
      const a6 = J(e17, true, r7, e17);
      l5.x = a6.x + e17.clientLeft, l5.y = a6.y + e17.clientTop;
    } else i4 && (l5.x = ut(i4));
  let f11 = 0, d9 = 0;
  if (i4 && !n8 && !r7) {
    const a6 = i4.getBoundingClientRect();
    d9 = a6.top + c12.scrollTop, f11 = a6.left + c12.scrollLeft - // RTL <body> scrollbar.
    ut(i4, a6);
  }
  const u5 = s13.left + c12.scrollLeft - l5.x - f11, m6 = s13.top + c12.scrollTop - l5.y - d9;
  return {
    x: u5,
    y: m6,
    width: s13.width,
    height: s13.height
  };
}
function st(t10) {
  return O(t10).position === "static";
}
function bt(t10, e17) {
  if (!T2(t10) || O(t10).position === "fixed")
    return null;
  if (e17)
    return e17(t10);
  let o11 = t10.offsetParent;
  return $2(t10) === o11 && (o11 = o11.ownerDocument.body), o11;
}
function Dt(t10, e17) {
  const o11 = R(t10);
  if (it(t10))
    return o11;
  if (!T2(t10)) {
    let i4 = _(t10);
    for (; i4 && !K(i4); ) {
      if (C(i4) && !st(i4))
        return i4;
      i4 = _(i4);
    }
    return o11;
  }
  let n8 = bt(t10, e17);
  for (; n8 && Qt(n8) && st(n8); )
    n8 = bt(n8, e17);
  return n8 && K(n8) && st(n8) && !gt(n8) ? o11 : n8 || Zt(t10) || o11;
}
var ae = async function(t10) {
  const e17 = this.getOffsetParent || Dt, o11 = this.getDimensions, n8 = await o11(t10.floating);
  return {
    reference: fe(t10.reference, await e17(t10.floating), t10.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n8.width,
      height: n8.height
    }
  };
};
function ue(t10) {
  return O(t10).direction === "rtl";
}
var de = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ee,
  getDocumentElement: $2,
  getClippingRect: ce,
  getOffsetParent: Dt,
  getElementRects: ae,
  getClientRects: ne,
  getDimensions: le,
  getScale: j,
  isElement: C,
  isRTL: ue
};
var me = Gt;
var ge = Jt;
var pe = Kt;
var he = It;
var we = (t10, e17, o11) => {
  const n8 = /* @__PURE__ */ new Map(), i4 = {
    platform: de,
    ...o11
  }, r7 = {
    ...i4.platform,
    _c: n8
  };
  return jt(t10, e17, {
    ...i4,
    platform: r7
  });
};
function Re(t10) {
  const {
    triggerRef: e17,
    contentRef: o11,
    arrowRef: n8,
    arrowSize: i4 = 10,
    onTriggerPositionChange: r7,
    onAfterUpdate: s13,
    onBeforeUpdate: c12,
    direction: l5,
    alignment: f11
  } = t10, d9 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };
  function u5(p5) {
    return isRef(p5) ? p5.value : p5;
  }
  async function m6() {
    if (!e17.value || !o11.value) return;
    const p5 = [
      me(n8 != null && n8.value ? i4 : 6),
      pe(),
      ge()
    ];
    n8 != null && n8.value && p5.push(he({ element: n8.value })), c12 == null || c12(e17.value, o11.value);
    const v6 = u5(l5) ?? "top", A11 = u5(f11) ?? "center", y5 = await we(e17.value, o11.value, {
      middleware: p5,
      placement: `${v6}${A11 === "center" ? "" : `-${A11}`}`
    });
    s13 == null || s13(y5);
    const { x: N4, y: S8, middlewareData: V6, placement: L5 } = y5;
    if (n3(o11.value, {
      left: `${N4}px`,
      top: `${S8}px`
    }), V6.arrow) {
      const { x: E11, y: F6 } = V6.arrow, D4 = d9[L5.split("-")[0]], W6 = `${i4}px`, b10 = i4 / 2;
      n3(n8.value, {
        width: W6,
        height: W6,
        left: E11 && `${E11 - b10}px`,
        top: F6 && `${F6 - b10}px`,
        [D4]: `-${b10}px`
      });
    }
  }
  watch(e17, () => {
    m6();
  });
  let a6 = [];
  function g10() {
    !r7 || !e17.value || (a6 = a(e17.value), a6.forEach((p5) => {
      p5.addEventListener("scroll", r7);
    }));
  }
  function h8() {
    r7 && (a6.forEach((p5) => {
      p5.removeEventListener("scroll", r7);
    }), a6 = []);
  }
  function w12() {
    r7 && window.addEventListener("resize", r7), e17.value && E2(e17.value, m6);
  }
  function x12() {
    e17.value && b(e17.value), r7 && window.removeEventListener("resize", r7);
  }
  return watch(
    [
      o11,
      () => u5(l5),
      () => u5(f11)
    ],
    ([p5]) => {
      if (p5) {
        g10(), w12();
        return;
      }
      h8(), x12();
    }
  ), onBeforeUnmount(() => {
    h8(), x12();
  }), {
    update: m6
  };
}

// node_modules/ultra-ui/components/tip/di.js
var e2 = Symbol("TipNestDIKey");

// node_modules/ultra-ui/components/node-render/node-render.js
var d3 = defineComponent({
  name: "NodeRender",
  inheritAttrs: false,
  props: {
    /** 渲染内容 */
    content: {
      type: [Object, Array, String, Boolean, Number]
    }
  },
  render() {
    var n8;
    const { content: r7, $slots: e17, $attrs: t10, $props: o11 } = this;
    return r7 === void 0 ? (n8 = e17.default) == null ? void 0 : n8.call(e17) : (Array.isArray(r7) || isVNode(r7) && (r7.props = t10 ? mergeProps(r7.props ?? {}, t10) : o11), r7);
  }
});

// node_modules/ultra-ui/venders/tip.vue_vue_type_script_setup_true_lang-BQ0IdmoK.js
var Re2 = defineComponent({
  name: "Tip",
  __name: "tip",
  props: {
    content: { default: "" },
    style: {},
    class: {},
    trigger: { default: "hover" },
    direction: { default: "top" },
    hideArrow: { type: Boolean },
    alignment: { default: "center" },
    contentTag: { default: "div" }
  },
  setup(S8, { expose: V6 }) {
    const o11 = S8, c12 = e("tip"), m6 = useSlots(), { size: _10 } = l([o11], {
      size: "default"
    }), P8 = computed(() => {
      const e17 = [c12.e("content"), c12.m(_10.value)], t10 = o11.class;
      return Array.isArray(t10) ? [...e17, ...t10] : [...e17, t10];
    }), d9 = shallowRef(), w12 = shallowRef(), R7 = shallowRef(), r7 = shallowRef(false);
    function $12() {
      var l5;
      const e17 = (l5 = m6.default) == null ? void 0 : l5.call(m6);
      return e17 != null && e17.length ? l2(e17)[0] : null;
    }
    const p5 = shallowReactive(/* @__PURE__ */ new Set()), I4 = computed(() => Array.from(p5).some((e17) => e17.value));
    provide(e2, {
      addChild(e17) {
        p5.add(e17);
      },
      removeChild(e17) {
        p5.delete(e17);
      }
    });
    const { addChild: v6, removeChild: g10 } = inject(e2, void 0) || {};
    v6 == null || v6(r7);
    const y5 = computed(() => {
      const { trigger: e17 } = o11, t10 = {};
      return e17 === "click" ? t10.onClick = h8 : e17 === "hover" && (t10.onMouseenter = h8, t10.onMouseleave = f11), t10;
    }), F6 = (e17) => {
      var t10, l5;
      o11.trigger !== "hover" && (o11.trigger === "click" && ((l5 = (t10 = d9.value) == null ? void 0 : t10.$el) != null && l5.contains(e17.target)) || f11());
    };
    let u5;
    const h8 = () => {
      u5 !== void 0 && clearTimeout(u5), r7.value = true;
    }, f11 = () => {
      o11.trigger === "hover" ? u5 = setTimeout(() => {
        r7.value = false;
      }, 250) : r7.value = false;
    }, N4 = x2(() => {
      var e17;
      return (e17 = d9.value) == null ? void 0 : e17.$el;
    });
    Re({
      triggerRef: N4,
      contentRef: w12,
      arrowRef: R7,
      direction: toRef(() => o11.direction),
      alignment: toRef(() => o11.alignment),
      onTriggerPositionChange() {
        f11();
      }
    });
    const k6 = shallowRef();
    function O7(e17) {
      N4.value = e17.triggerDom, k6.value = e17.content, h8();
    }
    return onBeforeUnmount(() => {
      clearTimeout(u5), g10 == null || g10(r7);
    }), V6({
      close: f11,
      trigger: O7
    }), (e17, t10) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        createCommentVNode(" 触发 "),
        createVNode(unref(d3), mergeProps({ ...y5.value, ...e17.$attrs }, {
          content: $12(),
          class: unref(c12).b,
          ref_key: "triggerRef",
          ref: d9
        }), null, 16, ["content", "class"]),
        createCommentVNode(" 弹出内容 "),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "tip" }, {
            default: withCtx(() => [
              r7.value || I4.value ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(e17.contentTag), {
                key: 0,
                class: normalizeClass(P8.value),
                style: normalizeStyle([o11.style, { zIndex: unref(o3)() }]),
                ref_key: "contentRef",
                ref: w12,
                onMouseenter: y5.value.onMouseenter,
                onMouseleave: y5.value.onMouseleave,
                onClick: t10[0] || (t10[0] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  k6.value ? (openBlock(), createBlock(unref(d3), {
                    key: 0,
                    content: k6.value
                  }, null, 8, ["content"])) : createCommentVNode("v-if", true),
                  renderSlot(e17.$slots, "content", {}, () => [
                    createTextVNode(
                      toDisplayString(e17.content),
                      1
                      /* TEXT */
                    )
                  ]),
                  e17.hideArrow ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 1,
                      class: normalizeClass(unref(c12).e("arrow")),
                      ref_key: "arrowRef",
                      ref: R7
                    },
                    null,
                    2
                    /* CLASS */
                  ))
                ]),
                _: 3
                /* FORWARDED */
              }, 40, ["class", "style", "onMouseenter", "onMouseleave"])), [
                [unref(h2), F6]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          })
        ]))
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/compositions/use-form-component/index.js
var r3 = Symbol("FormComponentDIKey");
function i2(o11) {
  if (o11)
    return provide(r3, {
      formProps: o11
    });
  const n8 = inject(r3, void 0) || {};
  return {
    inForm: !!n8,
    ...n8
  };
}

// node_modules/ultra-ui/venders/pop-confirm.vue_vue_type_script_setup_true_lang-Ky0dcG8D.js
var K2 = defineComponent({
  name: "PopConfirm",
  __name: "pop-confirm",
  props: {
    title: {},
    icon: { default: help_filled_default },
    iconColor: { default: "#ffc107" },
    confirmText: { default: "确认" },
    cancelText: { default: "取消" },
    alignment: {},
    direction: { default: "bottom" },
    trigger: { default: "click" },
    contentTag: {}
  },
  emits: ["confirm", "cancel"],
  setup(w12, { emit: g10 }) {
    const s13 = g10, t10 = e("pop-confirm"), r7 = shallowRef(), { formProps: _10 } = i2(), { size: y5 } = g([_10 ?? {}], {
      size: "default"
    }), C7 = () => {
      var e17;
      s13("confirm"), (e17 = r7.value) == null || e17.close();
    }, k6 = () => {
      var e17;
      s13("cancel"), (e17 = r7.value) == null || e17.close();
    };
    return (e17, f11) => (openBlock(), createBlock(unref(Re2), {
      ref_key: "tipRef",
      ref: r7,
      class: normalizeClass(unref(t10).b),
      trigger: e17.trigger,
      direction: e17.direction,
      alignment: e17.alignment,
      "content-tag": e17.contentTag
    }, {
      content: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(t10).m("main"), unref(t10).m(unref(y5))])
          },
          [
            createVNode(unref(k), {
              size: 16,
              class: normalizeClass(unref(t10).m("icon")),
              style: normalizeStyle({ color: e17.iconColor })
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(e17.icon)))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "style"]),
            createBaseVNode(
              "span",
              null,
              toDisplayString(e17.title),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(t10).m("action"))
          },
          [
            createVNode(unref(M), {
              size: "small",
              onClick: k6,
              type: "primary",
              text: ""
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(e17.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            f11[0] || (f11[0] = createTextVNode("   ")),
            createVNode(unref(M), {
              size: "small",
              type: "primary",
              onClick: C7
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(e17.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        )
      ]),
      default: withCtx(() => [
        renderSlot(e17.$slots, "reference")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "trigger", "direction", "alignment", "content-tag"]));
  }
});

// node_modules/ultra-ui/venders/action.vue_vue_type_script_setup_true_lang-a3iqIbt7.js
var S = defineComponent({
  name: "Action",
  __name: "action",
  props: {
    needConfirm: { type: Boolean },
    inDropdown: { type: Boolean, default: false },
    type: { default: "primary" },
    text: { type: Boolean, default: true },
    plain: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {},
    circle: { type: Boolean },
    disabled: { type: Boolean },
    icon: {},
    iconSize: {},
    iconPosition: {},
    size: { default: "small" }
  },
  emits: ["run"],
  setup(d9, { emit: u5 }) {
    const i4 = d9, l5 = u5, r7 = e("action"), o11 = inject(o2, void 0);
    function y5() {
      l5("run"), o11 == null || o11.close();
    }
    return (n8, a6) => n8.needConfirm ? (openBlock(), createBlock(unref(K2), {
      key: 0,
      title: "确认执行此操作吗？",
      onConfirm: y5,
      style: { display: "inline-block" },
      direction: "left"
    }, {
      reference: withCtx(() => [
        createVNode(unref(M), mergeProps({
          class: unref(r7).b
        }, i4), {
          default: withCtx(() => [
            renderSlot(n8.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    })) : (openBlock(), createBlock(unref(M), mergeProps({
      key: 1,
      class: unref(r7).b
    }, i4, {
      onClick: a6[0] || (a6[0] = (g10) => l5("run"))
    }), {
      default: withCtx(() => [
        renderSlot(n8.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 16, ["class"]));
  }
});

// node_modules/ultra-ui/venders/action-group.vue_vue_type_script_setup_true_lang-DKQL2_ev.js
var j2 = defineComponent({
  name: "ActionGroup",
  inheritAttrs: false,
  __name: "action-group",
  props: {
    max: {
      default: 3
    }
  },
  setup(p5) {
    const s13 = p5, u5 = e("action-group"), o11 = useSlots();
    function d9() {
      var a6;
      const r7 = (a6 = o11.default) == null ? void 0 : a6.call(o11);
      if (!r7) return [];
      const n8 = l2(r7).filter(
        // @ts-ignore
        (f11) => {
          var i4;
          return ((i4 = f11.type) == null ? void 0 : i4.name) === "Action";
        }
      ), e17 = n8.slice(0, s13.max - 1), c12 = n8.slice(s13.max - 1), m6 = c12.length ? createVNode(Re2, {
        direction: "bottom",
        class: u5.e("dropdown")
      }, {
        content: () => c12,
        default: () => createVNode(M, {
          text: true,
          size: "small",
          type: "primary"
        }, {
          default: () => [createTextVNode("更多"), createVNode(k, null, {
            default: () => [createVNode(arrow_down_default, null, null)]
          })]
        })
      }) : null;
      return m6 ? [...e17, m6] : e17;
    }
    return (r7, n8) => (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(d9(), (e17) => (openBlock(), createBlock(resolveDynamicComponent(e17), {
        key: e17.key
      }))),
      128
      /* KEYED_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/venders/dropdown.vue_vue_type_script_setup_true_lang-DDkf2suF.js
var oe2 = defineComponent({
  name: "Dropdown",
  inheritAttrs: false,
  __name: "dropdown",
  props: mergeModels({
    trigger: { default: "hover" },
    width: {},
    minWidth: {},
    contentTag: { default: "div" },
    contentClass: {},
    visible: { type: Boolean },
    disabled: { type: Boolean },
    clickWhetherHide: { type: Boolean, default: false }
  }, {
    visible: { type: Boolean },
    visibleModifiers: {}
  }),
  emits: mergeModels(["update:visible"], ["update:visible"]),
  setup(m6, { expose: w12 }) {
    const o11 = m6, B7 = useSlots(), p5 = e("dropdown"), l5 = shallowRef(), v6 = shallowRef();
    let i4;
    const r7 = useModel(m6, "visible");
    let d9;
    function T6() {
      d9 !== void 0 && clearTimeout(d9);
    }
    function u5(e17) {
      T6();
      const { virtual: t10, real: n8 } = e17 || {};
      t10 && t10 instanceof HTMLElement && (l5.value = t10, i4 = n8 || t10), r7.value = true;
    }
    function s13() {
      i4 = void 0, o11.trigger === "hover" ? d9 = setTimeout(() => {
        r7.value = false;
      }, 200) : r7.value = false;
    }
    function W6(e17) {
      var t10;
      o11.clickWhetherHide || o11.trigger === "click" && ((t10 = l5.value) != null && t10.contains(e17.target) || i4 != null && i4.contains(e17.target)) || s13();
    }
    const { update: R7 } = Re({
      triggerRef: l5,
      contentRef: v6,
      direction: "bottom",
      onTriggerPositionChange() {
        s13();
      },
      onBeforeUpdate(e17, t10) {
        n3(t10, {
          width: o11.width ?? `${e17.offsetWidth}px`,
          minWidth: o11.minWidth && o11.minWidth
        });
      }
    }), f11 = computed(() => {
      const { trigger: e17, disabled: t10 } = o11, n8 = {};
      return t10 || e17 === "custom" || (e17 === "click" ? n8.onClick = r7.value ? s13 : u5 : e17 === "hover" && (n8.onMouseenter = u5, n8.onMouseleave = s13)), n8;
    });
    return w12({
      open: u5,
      close: s13,
      /**暴露出更新dropdown内容位置方法 适用与级联选择器组件 */
      updateDropdown: R7
    }), (e17, t10) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        B7.trigger ? (openBlock(), createElementBlock(
          "div",
          mergeProps({
            key: 0,
            class: unref(p5).b
          }, { ...f11.value, ...e17.$attrs }, {
            ref_key: "triggerRef",
            ref: l5
          }),
          [
            renderSlot(e17.$slots, "trigger")
          ],
          16
          /* FULL_PROPS */
        )) : createCommentVNode("v-if", true),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "slide" }, {
            default: withCtx(() => [
              r7.value ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(e17.contentTag), {
                key: 0,
                class: normalizeClass([unref(p5).e("content"), e17.contentClass]),
                ref_key: "contentRef",
                ref: v6,
                style: normalizeStyle({
                  zIndex: unref(o3)()
                }),
                onMouseenter: f11.value.onMouseenter,
                onMouseleave: f11.value.onMouseleave
              }, {
                default: withCtx(() => [
                  renderSlot(e17.$slots, "content")
                ]),
                _: 3
                /* FORWARDED */
              }, 40, ["class", "style", "onMouseenter", "onMouseleave"])), [
                [unref(h2), e17.trigger === "click" ? W6 : void 0]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          })
        ]))
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/compositions/use-drag/index.js
function w(l5) {
  const { target: c12, onDragStart: n8, onDrag: o11, onDragEnd: s13 } = l5;
  let u5 = 0, r7 = 0, a6 = 0, d9 = 0;
  const p5 = document.onselectstart, m6 = (e17) => {
    var t10;
    e17.stopPropagation(), e17.button === 0 && ((t10 = window.getSelection()) == null || t10.removeAllRanges(), e17.stopImmediatePropagation(), u5 = e17.x, r7 = e17.y, n8 == null || n8(e17), document.onselectstart = () => false, document.addEventListener("mousemove", i4, {
      passive: true
    }), document.addEventListener("mouseup", v6));
  }, i4 = (e17) => {
    a6 = e17.x - u5, d9 = e17.y - r7, o11 == null || o11(a6, d9, e17);
  }, v6 = (e17) => {
    document.removeEventListener("mousemove", i4), document.removeEventListener("mouseup", v6), s13 == null || s13(e17.x - u5, e17.y - r7, e17), document.onselectstart = p5;
  };
  watch(
    c12,
    (e17, t10) => {
      t10 == null || t10.removeEventListener("mousedown", m6), e17 && e17.addEventListener("mousedown", m6);
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    var e17;
    (e17 = c12.value) == null || e17.removeEventListener("mousedown", m6), document.removeEventListener("mousemove", i4), document.removeEventListener("mouseup", v6);
  });
}

// node_modules/ultra-ui/components/scroll/di.js
var o4 = Symbol();

// node_modules/ultra-ui/venders/scroll-bar.vue_vue_type_script_setup_true_lang-AGVsxDHJ.js
var q2 = defineComponent({
  name: "ScrollBar",
  __name: "scroll-bar",
  props: {
    type: {}
  },
  emits: ["drag"],
  setup(p5, { expose: v6, emit: g10 }) {
    const s13 = p5, d9 = g10, a6 = shallowRef(0), t10 = shallowRef(0);
    let l5 = 0, i4 = 0;
    const { cls: x12 } = inject(o4), n8 = shallowRef(false), y5 = computed(() => [x12.e(`bar-${s13.type}`), e.is("active", n8.value)]), _10 = s13.type === "x" ? computed(() => ({
      width: a6.value + "px",
      transform: `translateX(${t10.value}px)`
    })) : computed(() => ({
      height: a6.value + "px",
      transform: `translateY(${t10.value}px)`
    })), m6 = shallowRef(), h8 = s13.type === "x" ? (e17, r7) => l5 + e17 : (e17, r7) => l5 + r7;
    return w({
      target: m6,
      onDragStart() {
        n8.value = true, l5 = t10.value;
      },
      onDragEnd() {
        n8.value = false;
      },
      onDrag(e17, r7) {
        const c12 = h8(e17, r7), f11 = i4 - a6.value;
        c12 < 0 ? t10.value = 0 : c12 > f11 ? t10.value = f11 : t10.value = c12, d9("drag", t10.value, a6.value);
      }
    }), v6({
      /** 更新滚动条状态 */
      update(e17, r7) {
        a6.value = e17, t10.value = r7;
      },
      /** 设置轨道尺寸 */
      setTrackSize(e17) {
        i4 = e17;
      }
    }), (e17, r7) => withDirectives((openBlock(), createElementBlock(
      "div",
      {
        ref_key: "domRef",
        ref: m6,
        style: normalizeStyle(unref(_10)),
        class: normalizeClass(y5.value)
      },
      null,
      6
      /* CLASS, STYLE */
    )), [
      [vShow, !!a6.value]
    ]);
  }
});

// node_modules/ultra-ui/compositions/use-resize-observer/index.js
function o5(u5, e17) {
  if (Array.isArray(u5))
    return u5.forEach((f11) => o5(f11, e17));
  u5.value && e17.unobserve(u5.value);
}
function s4(u5) {
  const { targets: e17, onResize: f11 } = u5;
  let n8;
  return Array.isArray(e17) ? watch(
    e17,
    (i4, c12) => {
      !n8 && i4.length && (n8 = new ResizeObserver(f11)), c12.length && c12.forEach((t10) => {
        t10 && (n8 == null || n8.unobserve(t10));
      }), i4.length && i4.forEach((t10) => {
        t10 && (n8 == null || n8.observe(t10));
      });
    },
    { immediate: true }
  ) : watch(
    e17,
    (i4, c12) => {
      !n8 && i4 && (n8 = new ResizeObserver(f11)), c12 && (n8 == null || n8.unobserve(c12)), i4 && (n8 == null || n8.observe(i4));
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    n8 && o5(e17, n8), n8 == null || n8.disconnect(), n8 = void 0;
  }), {
    disconnect() {
      n8 && o5(e17, n8), n8 == null || n8.disconnect();
    }
  };
}

// node_modules/ultra-ui/venders/scroll.vue_vue_type_script_setup_true_lang-CDFaHC0N.js
var X = 20;
var fe2 = defineComponent({
  name: "Scroll",
  __name: "scroll",
  props: {
    tag: { default: "div" },
    height: {},
    always: { type: Boolean },
    contentStyle: {},
    containerStyle: {},
    contentClass: {},
    containerClass: {},
    dragDebounce: {}
  },
  emits: ["scroll", "resize"],
  setup(Y3, { expose: L5, emit: N4 }) {
    const d9 = Y3, w12 = N4, a6 = e("scroll"), $12 = computed(() => [a6.b, e.is("always", d9.always)]), E11 = computed(() => ({
      height: f(d9.height, "px")
    })), y5 = shallowRef(), i4 = shallowRef(), n8 = shallowRef(), m6 = shallowRef(), p5 = shallowRef(), l5 = {
      width: 0,
      height: 0
    };
    s4({
      targets: [y5, i4],
      onResize: (e17) => {
        var t10, o11;
        if (e17.length && i4.value) {
          const { clientHeight: s13, clientWidth: r7 } = i4.value;
          l5.width = r7, l5.height = s13, (t10 = m6.value) == null || t10.setTrackSize(l5.width), (o11 = p5.value) == null || o11.setTrackSize(l5.height), v6(), w12(
            "resize",
            e17.map((g10) => g10.target)
          );
        }
      }
    });
    const v6 = () => {
      var k6, D4, T6, z5;
      if (!n8.value) return;
      const {
        scrollHeight: e17,
        clientHeight: t10,
        scrollTop: o11,
        scrollWidth: s13,
        clientWidth: r7,
        scrollLeft: g10
      } = n8.value;
      if (w12("scroll", { x: g10, y: o11 }), e17 !== t10) {
        const h8 = Math.max(
          t10 / e17 * l5.height,
          X
        ), b10 = o11 / (e17 - t10) * (l5.height - h8);
        (k6 = p5.value) == null || k6.update(h8, b10);
      } else
        (D4 = p5.value) == null || D4.update(0, 0);
      if (s13 !== r7) {
        const h8 = Math.max(
          r7 / s13 * l5.width,
          X
        ), b10 = g10 / (s13 - r7) * (l5.width - h8);
        (T6 = m6.value) == null || T6.update(h8, b10);
      } else
        (z5 = m6.value) == null || z5.update(0, 0);
    }, M8 = debounce(
      (e17, t10) => {
        const o11 = n8.value, { clientWidth: s13, scrollWidth: r7 } = o11;
        o11.scrollLeft = e17 / (l5.width - t10) * (r7 - s13);
      },
      d9.dragDebounce ?? 0,
      false
    ), V6 = debounce(
      (e17, t10) => {
        const o11 = n8.value, { clientHeight: s13, scrollHeight: r7 } = o11;
        o11.scrollTop = e17 / (l5.height - t10) * (r7 - s13);
      },
      d9.dragDebounce ?? 0,
      false
    ), I4 = () => {
      v6();
    }, K6 = (e17) => {
      const t10 = n8.value;
      t10 && t10.scrollTo({
        left: e17,
        behavior: "smooth"
      });
    }, O7 = (e17) => {
      const t10 = n8.value;
      t10 && t10.scrollTo({
        top: e17,
        behavior: "smooth"
      });
    }, P8 = (e17) => {
      e17.x !== void 0 && K6(e17.x), e17.y !== void 0 && O7(e17.y);
    };
    return provide(o4, {
      cls: a6
    }), L5({
      el: i4,
      contentRef: y5,
      containerRef: n8,
      scrollTo: P8,
      update: v6
    }), (e17, t10) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass($12.value),
        style: normalizeStyle(E11.value),
        ref_key: "scrollRef",
        ref: i4
      },
      [
        createBaseVNode(
          "div",
          {
            ref_key: "containerRef",
            ref: n8,
            class: normalizeClass([unref(a6).e("container"), e17.containerClass]),
            onScrollPassive: I4,
            style: normalizeStyle(e17.containerStyle)
          },
          [
            renderSlot(e17.$slots, "content"),
            (openBlock(), createBlock(resolveDynamicComponent(e17.tag), {
              ref_key: "contentRef",
              ref: y5,
              style: normalizeStyle(e17.contentStyle),
              class: normalizeClass([unref(a6).e("content"), e17.contentClass])
            }, {
              default: withCtx(() => [
                renderSlot(e17.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["style", "class"]))
          ],
          38
          /* CLASS, STYLE, NEED_HYDRATION */
        ),
        createVNode(q2, {
          type: "y",
          class: normalizeClass(unref(a6).e("bar-y")),
          onDrag: unref(V6),
          ref_key: "barY",
          ref: p5
        }, null, 8, ["class", "onDrag"]),
        createVNode(q2, {
          type: "x",
          class: normalizeClass(unref(a6).e("bar-x")),
          onDrag: unref(M8),
          ref_key: "barX",
          ref: m6
        }, null, 8, ["class", "onDrag"])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/compositions/use-focus/index.js
function s5(e17) {
  const u5 = ref(false);
  return {
    focus: u5,
    handleBlur: () => {
      u5.value = false, e17 == null || e17(u5.value);
    },
    handleFocus: () => {
      u5.value = true, e17 == null || e17(u5.value);
    }
  };
}

// node_modules/ultra-ui/venders/input.vue_vue_type_script_setup_true_lang-Bqad_9rO.js
var ce2 = ["placeholder", "value", "disabled", "readonly"];
var de2 = {
  key: 1
};
var Ve = defineComponent({
  name: "Input",
  __name: "input",
  props: mergeModels({
    modelValue: {},
    placeholder: {
      default: "请输入"
    },
    prefix: {},
    suffix: {},
    clearable: {
      type: Boolean,
      default: true
    },
    nativeReadonly: {
      type: Boolean
    },
    pattern: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: {
      type: Boolean,
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: void 0
    },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "change", "suffix:click", "prefix:click", "focus", "clear", "blur", "native:input"], ["update:modelValue"]),
  setup(h8, {
    expose: S8,
    emit: z5
  }) {
    var V6, B7;
    const t10 = h8, a6 = z5, l5 = useModel(h8, "modelValue"), s13 = getCurrentInstance(), i4 = e("input"), {
      formProps: I4
    } = i2(), {
      size: R7,
      disabled: p5,
      readonly: x12
    } = g([I4 ?? {}, t10]), {
      focus: w12,
      handleBlur: y5,
      handleFocus: b10
    } = s5((e17) => {
      a6(e17 ? "focus" : "blur");
    }), _10 = computed(() => [i4.b, i4.m(R7.value), e.is("disabled", p5.value), e.is("readonly", x12.value), e.is("focus", w12.value)]), O7 = [i4.e("prefix"), e.is("clickable", !!((V6 = s13 == null ? void 0 : s13.vnode.props) != null && V6["onPrefix:click"]))], D4 = [i4.e("suffix"), e.is("clickable", !!((B7 = s13 == null ? void 0 : s13.vnode.props) != null && B7["onSuffix:click"]))];
    let m6 = false;
    function L5() {
      m6 = true;
    }
    function Y3(e17) {
      m6 = false, g10(e17);
    }
    const g10 = (e17) => {
      if (m6) return;
      const n8 = e17.target.value;
      if (a6("native:input", e17), t10.pattern && !t10.pattern.test(n8)) {
        nextTick(() => {
          e17.target.value = l5.value ?? "";
        });
        return;
      }
      l5.value = n8;
    }, j5 = () => {
      a6("prefix:click", l5.value);
    }, q8 = () => {
      a6("suffix:click", l5.value);
    }, A11 = () => {
      l5.value = "", a6("clear");
    }, v6 = ref(false), G4 = () => {
      v6.value = true;
    }, H4 = () => {
      v6.value = false;
    }, J7 = (e17) => {
      a6("change", e17.target.value);
    }, M8 = shallowRef(), K6 = computed(() => t10.prefix ? `${t10.prefix}${l5.value}` : l5.value);
    return S8({
      el: M8
    }), (e17, n8) => unref(x12) ? (openBlock(), createElementBlock(
      "span",
      de2,
      toDisplayString(K6.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(_10.value),
        onMouseenter: G4,
        onMouseleave: H4
      },
      [e17.$slots.prefix || e17.prefix ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(O7),
        onClick: j5
      }, [renderSlot(e17.$slots, "prefix", {}, () => [createTextVNode(
        toDisplayString(e17.prefix),
        1
        /* TEXT */
      )])])) : createCommentVNode("v-if", true), createBaseVNode("input", {
        class: normalizeClass(unref(i4).e("native")),
        placeholder: t10.placeholder,
        type: "text",
        value: l5.value,
        onInput: g10,
        onChange: J7,
        onFocus: n8[0] || (n8[0] = //@ts-ignore
        (...c12) => unref(b10) && unref(b10)(...c12)),
        onBlur: n8[1] || (n8[1] = //@ts-ignore
        (...c12) => unref(y5) && unref(y5)(...c12)),
        onCompositionstart: L5,
        onCompositionend: Y3,
        autocomplete: "off",
        ref_key: "el",
        ref: M8,
        disabled: unref(p5),
        readonly: e17.nativeReadonly
      }, null, 42, ce2), createVNode(Transition, {
        name: "zoom-in",
        mode: "out-in"
      }, {
        default: withCtx(() => [e17.clearable && l5.value && v6.value && !unref(p5) ? (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass(unref(i4).e("clear")),
          onClick: withModifiers(A11, ["stop"])
        }, {
          default: withCtx(() => [createVNode(unref(close_default))]),
          _: 1
          /* STABLE */
        }, 8, ["class"])) : createCommentVNode("v-if", true)]),
        _: 1
        /* STABLE */
      }), e17.$slots.suffix || e17.suffix ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(D4),
        onClick: q8
      }, [renderSlot(e17.$slots, "suffix", {}, () => [createTextVNode(
        toDisplayString(e17.suffix),
        1
        /* TEXT */
      )])])) : createCommentVNode("v-if", true)],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
});

// node_modules/ultra-ui/components/auto-complete/use-suggestions.js
function w2(f11) {
  const { model: i4, props: a6 } = f11, c12 = shallowRef([]), l5 = shallowRef([]), u5 = shallowRef([]), s13 = computed(() => {
    const { suggestions: e17 } = a6;
    return e17 ? typeof e17 == "function" ? c12.value.concat(u5.value) : l5.value : u5.value;
  }), d9 = computed(() => {
    if (i4.value)
      return s13.value.includes(i4.value) ? void 0 : i4.value;
  });
  return watch(
    [i4, () => a6.suggestions],
    debounce(async ([e17, t10]) => {
      if (typeof t10 == "function") {
        const n8 = await t10(e17);
        c12.value = n8 ?? [];
      } else {
        if (!e17) {
          l5.value = [
            ...t10 ?? [],
            ...u5.value
          ];
          return;
        }
        l5.value = [
          ...(t10 == null ? void 0 : t10.filter((n8) => n8.includes(e17))) ?? [],
          ...u5.value.filter((n8) => n8.includes(e17))
        ];
      }
    }, 200),
    {
      immediate: true
    }
  ), {
    suggestions: s13,
    cachedSuggestion: d9,
    appendedSuggestions: u5
  };
}

// node_modules/ultra-ui/venders/auto-complete.vue_vue_type_script_setup_true_lang-CmytZi4c.js
var oe3 = ["data-key"];
var te3 = ["onClick", "data-key"];
var ae2 = { key: 1 };
var _e = defineComponent({
  name: "AutoComplete",
  inheritAttrs: false,
  __name: "auto-complete",
  props: mergeModels({
    modelValue: {},
    placeholder: { default: "请输入" },
    suggestions: {},
    clearable: { type: Boolean, default: true },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "select"], ["update:modelValue"]),
  setup(g10, { emit: F6 }) {
    const k6 = g10, M8 = F6, a6 = useModel(g10, "modelValue"), s13 = e("auto-complete"), _10 = s13.e("option"), { formProps: N4 } = i2(), { size: m6, disabled: c12, readonly: T6 } = g(
      [N4 ?? {}, k6],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), p5 = shallowRef(), C7 = shallowRef();
    watch(C7, (o11) => {
      if (o11 && a6.value !== void 0) {
        const l5 = o11.contentRef.querySelector(`li[data-key="${a6.value}"]`);
        l5 == null || l5.scrollIntoView({ block: "nearest", inline: "start" });
      }
    });
    const { suggestions: E11, appendedSuggestions: n8, cachedSuggestion: r7 } = w2({
      props: k6,
      model: a6
    }), O7 = (o11) => {
      var l5;
      a6.value = o11, (l5 = p5.value) == null || l5.close(), A11(), M8("select", o11);
    };
    function A11() {
      a6.value && (n8.value = [...n8.value, a6.value]);
    }
    const V6 = (o11) => {
      var l5;
      n8.value = [...n8.value, o11], (l5 = p5.value) == null || l5.close();
    }, h8 = shallowRef(false);
    return (o11, l5) => unref(T6) ? (openBlock(), createElementBlock(
      "span",
      ae2,
      toDisplayString(a6.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      trigger: "click",
      class: normalizeClass([unref(s13).b, unref(s13).m(unref(m6)), unref(e).is("disabled", unref(c12))]),
      ref_key: "dropdownRef",
      ref: p5,
      visible: h8.value,
      "onUpdate:visible": l5[3] || (l5[3] = (t10) => h8.value = t10),
      "content-class": [unref(s13).e("panel"), unref(s13).em("panel", unref(m6))],
      disabled: unref(c12)
    }, {
      trigger: withCtx(() => [
        createCommentVNode(" 单选 "),
        createVNode(unref(Ve), {
          size: unref(m6),
          disabled: unref(c12),
          placeholder: o11.placeholder,
          clearable: o11.clearable,
          modelValue: a6.value,
          "onUpdate:modelValue": l5[0] || (l5[0] = (t10) => a6.value = t10),
          onKeyup: l5[1] || (l5[1] = withKeys((t10) => unref(r7) && V6(unref(r7)), ["enter"]))
        }, null, 8, ["size", "disabled", "placeholder", "clearable", "modelValue"])
      ]),
      content: withCtx(() => [
        createVNode(unref(fe2), {
          tag: "ul",
          class: normalizeClass(unref(s13).e("options")),
          ref_key: "scrollRef",
          ref: C7
        }, {
          default: withCtx(() => [
            unref(r7) ? withDirectives((openBlock(), createElementBlock("li", {
              class: normalizeClass([unref(_10)]),
              onClick: l5[2] || (l5[2] = (t10) => V6(unref(r7))),
              "data-key": unref(r7),
              key: unref(r7)
            }, [
              renderSlot(o11.$slots, "default", normalizeProps(guardReactiveProps({ option: unref(r7), index: -1 })), () => [
                createTextVNode(
                  toDisplayString(unref(r7)),
                  1
                  /* TEXT */
                )
              ])
            ], 10, oe3)), [
              [unref(T), unref(s13).e("ripple")]
            ]) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(E11), (t10, D4) => withDirectives((openBlock(), createElementBlock("li", {
                class: normalizeClass([unref(_10), unref(e).is("selected", t10 === a6.value)]),
                onClick: (se4) => O7(t10),
                "data-key": t10,
                key: t10
              }, [
                renderSlot(o11.$slots, "default", mergeProps({ ref_for: true }, { option: t10, index: D4 }), () => [
                  createTextVNode(
                    toDisplayString(t10),
                    1
                    /* TEXT */
                  )
                ])
              ], 10, te3)), [
                [unref(T), unref(s13).e("ripple")]
              ])),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "visible", "content-class", "disabled"]));
  }
});

// node_modules/ultra-ui/venders/badge.vue_vue_type_script_setup_true_lang-Cj3osIeY.js
var E3 = defineComponent({
  name: "Badge",
  __name: "badge",
  props: {
    value: {},
    type: {},
    color: {},
    hidden: { type: Boolean },
    max: { default: 99 },
    dot: { type: Boolean },
    size: {}
  },
  setup(m6) {
    const o11 = e("badge"), e17 = m6, { size: a6 } = l([e17], {
      size: "default"
    }), d9 = computed(() => e17.dot ? "" : e17.value > e17.max ? `${e17.max}+` : e17.value), f11 = computed(() => [
      o11.e("sup"),
      e17.type && o11.m("color-" + e17.type),
      o11.m(a6.value),
      e.is("dot", e17.dot)
    ]), t10 = shallowRef(), r7 = () => {
      if (t10.value) {
        const { width: s13, height: n8 } = t10.value.getBoundingClientRect();
        n3(t10.value, {
          transform: `translate(-${s13 / 2}px, -${n8 / 2}px)`,
          backgroundColor: e17.color && e17.color
        });
      }
    };
    return watch(
      () => a6.value,
      () => {
        nextTick(() => {
          r7();
        });
      }
    ), onMounted(() => {
      r7();
    }), (s13, n8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(o11).b)
      },
      [
        renderSlot(s13.$slots, "default"),
        s13.hidden ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "sup",
          {
            key: 0,
            class: normalizeClass(f11.value),
            ref_key: "supRef",
            ref: t10
          },
          toDisplayString(d9.value),
          3
          /* TEXT, CLASS */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/layout/di.js
var o6 = Symbol("LayoutDIKey");

// node_modules/ultra-ui/venders/layout-resizer.vue_vue_type_script_setup_true_lang-BsAPpHUq.js
var V = defineComponent({
  name: "LayoutResizer",
  __name: "layout-resizer",
  props: {
    horizontal: { type: Boolean },
    offset: {}
  },
  emits: ["resize", "resize-start", "resize-end"],
  setup(f11, { expose: p5, emit: c12 }) {
    const t10 = f11, s13 = c12, { cls: z5 } = inject(o6), u5 = computed(() => [z5.e("resizer"), e.is("horizontal", t10.horizontal)]), l5 = shallowRef();
    let e17 = t10.offset ?? 0;
    const r7 = shallowReactive({
      x: t10.horizontal ? "0" : e17 + "px",
      y: t10.horizontal ? e17 + "px" : "0"
    });
    let a6 = 0;
    return w({
      target: l5,
      onDragStart() {
        a6 = e17, s13("resize-start");
      },
      onDrag(o11, n8) {
        t10.horizontal ? (e17 = a6 + n8, r7.y = e17 + "px", s13("resize", n8)) : (e17 = a6 + o11, r7.x = e17 + "px", s13("resize", o11));
      },
      onDragEnd() {
        s13("resize-end");
      }
    }), p5({
      update(o11) {
        e17 = o11, t10.horizontal ? r7.y = e17 + "px" : r7.x = e17 + "px";
      }
    }), (o11, n8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(u5.value),
        style: normalizeStyle({
          transform: `translate3d(${unref(r7).x}, ${unref(r7).y}, 0)`
        }),
        ref_key: "resizerRef",
        ref: l5
      },
      [
        createVNode(unref(k), { size: 10 }, {
          default: withCtx(() => [
            createVNode(unref(move_default))
          ]),
          _: 1
          /* STABLE */
        })
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/venders/layout.vue_vue_type_script_setup_true_lang-BQidoazF.js
var Y2 = defineComponent({
  name: "Layout",
  __name: "layout",
  props: {
    tag: { default: "div" },
    gap: {},
    cols: {},
    rows: {},
    resizable: { type: Boolean }
  },
  setup(R7) {
    const a6 = R7, p5 = e("layout"), o11 = ref([]);
    watchEffect(() => {
      const { cols: e17 } = a6;
      if (!e17) {
        o11.value = [];
        return;
      }
      o11.value = typeof e17 == "string" ? e17.split(" ") : e17;
    });
    const g10 = computed(() => {
      const { rows: e17, gap: t10, resizable: s13 } = a6;
      return {
        gridTemplateColumns: o11.value.join(" "),
        gridTemplateRows: e17 ? typeof e17 == "string" ? e17 : e17.join(" ") : "",
        columnGap: s13 ? "10px" : f(t10, "px")
      };
    }), l5 = shallowRef(), m6 = shallowRef([]), c12 = ref([]);
    function d9() {
      const e17 = l5.value;
      if (!a6.resizable || !e17 || !a6.cols)
        return c12.value = [];
      c12.value = o11.value.slice(0, -1).map((t10, s13) => {
        const r7 = e17.children[s13];
        return r7 ? r7.offsetLeft + r7.offsetWidth : 0;
      });
    }
    watch([() => a6.resizable, l5, () => a6.cols], () => {
      nextTick(() => {
        d9();
      });
    }), s4({
      targets: l5,
      onResize() {
        d9(), m6.value.forEach((e17, t10) => {
          e17.update(c12.value[t10]);
        });
      }
    });
    let i4 = "0", n8 = "0";
    const _10 = (e17) => {
      var t10, s13;
      if (i4 = o11.value[e17], n8 = o11.value[e17 + 1], !i4.endsWith("px") && !n8.endsWith("px")) {
        const r7 = (s13 = (t10 = l5.value) == null ? void 0 : t10.children[e17 + 1]) == null ? void 0 : s13.getBoundingClientRect();
        r7 && (n8 = r7.width + "px");
      }
    }, w12 = (e17, t10) => {
      i4 != null && i4.endsWith("px") && (o11.value[t10] = `${parseInt(i4) + e17}px`), n8 != null && n8.endsWith("px") && (o11.value[t10 + 1] = `${parseInt(n8) - e17}px`);
    };
    return provide(o6, {
      cls: p5
    }), (e17, t10) => (openBlock(), createBlock(resolveDynamicComponent(e17.tag), {
      class: normalizeClass(unref(p5).b),
      style: normalizeStyle(g10.value),
      ref_key: "containerRef",
      ref: l5
    }, {
      default: withCtx(() => [
        renderSlot(e17.$slots, "default"),
        createCommentVNode(" 竖向调节 "),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(c12.value, (s13, r7) => (openBlock(), createBlock(V, {
            offset: s13,
            key: r7,
            ref_for: true,
            ref_key: "resizerRefs",
            ref: m6,
            direction: "vertical",
            onResize: (v6) => w12(v6, r7),
            onResizeStart: (v6) => _10(r7)
          }, null, 8, ["offset", "onResize", "onResizeStart"]))),
          128
          /* KEYED_FRAGMENT */
        )),
        createCommentVNode(" 横向调节 "),
        createCommentVNode(` <ULayoutResizer\r
      v-for="item in horizontalResizerList"\r
      :key="item"\r
      direction="horizontal"\r
    /> `)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "style"]));
  }
});

// node_modules/ultra-ui/components/dialog/di.js
var o7 = Symbol("DialogDIKey");

// node_modules/ultra-ui/components/batch-edit/use-edit.js
function L(C7) {
  const { props: i4, emit: f11, tableRef: D4 } = C7, t10 = shallowReactive({
    visible: false,
    type: "create",
    loading: false,
    dataUpdated: false
  }), r7 = shallowRef([]);
  watch(
    () => t10.visible,
    (e17) => {
      e17 || (t10.dataUpdated = false);
    }
  );
  let u5 = true;
  watch(
    () => t10.row,
    (e17) => {
      var a6, n8;
      (a6 = i4.model) == null || a6.resetData(), e17 ? (t10.type = "update", t10.visible = true, u5 = false, (n8 = i4.model) == null || n8.setData(e17.data), nextTick(() => {
        u5 = true;
      })) : t10.visible = false;
    }
  );
  const p5 = (e17, a6) => {
    u5 && (t10.dataUpdated = true), i4.quickEdit && t10.row && setChainValue(t10.row.data, e17, a6);
  };
  watch(
    () => i4.model,
    (e17, a6) => {
      a6 && a6.offChange(p5), e17 && e17.onChange(p5);
    },
    { immediate: true }
  ), watch(
    () => i4.quickEdit,
    (e17) => {
      var a6;
      t10.row = void 0, t10.type = "create", t10.visible = false, t10.dataUpdated = false, (a6 = i4.model) == null || a6.resetData();
    },
    { immediate: true }
  );
  const d9 = computed(() => typeof i4.tree == "string" ? i4.tree : "children");
  function v6(e17) {
    const a6 = [...i4.data ?? []];
    i4.quickEdit && (isReactive(e17) || (e17 = shallowReactive(e17)));
    const n8 = Forest.visit(
      a6 ?? [],
      r7.value.slice(0, -1),
      d9.value
    );
    if (n8) {
      const l5 = n8[d9.value];
      l5 ? l5.splice(last(r7.value), 0, e17) : n8[d9.value] = [e17];
    } else
      a6.splice(last(r7.value), 0, e17);
    return f11("update:data", a6), e17;
  }
  function h8() {
    return safeRun(
      () => {
        var e17;
        return JSON.parse(JSON.stringify(((e17 = i4.model) == null ? void 0 : e17.data) ?? {}));
      },
      {}
    );
  }
  async function o11(e17) {
    var n8, l5;
    t10.parentRow = void 0, t10.row = void 0, t10.type = "create", (n8 = i4.model) == null || n8.resetData(), e17();
    let a6;
    if (i4.quickEdit && (a6 = v6(h8())), await nextTick(), t10.visible = true, a6) {
      const s13 = (l5 = D4.value) == null ? void 0 : l5.getRowByData(a6);
      s13 && (t10.row = s13);
    }
  }
  function E11() {
    const { data: e17 } = i4;
    o11(() => {
      r7.value = [(e17 == null ? void 0 : e17.length) ?? 0];
    });
  }
  function I4(e17) {
    o11(() => {
      r7.value = [...e17.indexes];
    });
  }
  function U3(e17) {
    o11(() => {
      r7.value = [...e17.indexes.slice(0, -1), e17.index + 1];
    });
  }
  function k6(e17) {
    o11(() => {
      var a6;
      t10.parentRow = e17, e17.expanded = true, r7.value = [...e17.indexes, ((a6 = e17.children) == null ? void 0 : a6.length) ?? 0];
    });
  }
  function w12(e17) {
    return async (...a6) => {
      t10.loading = true, t10.row && (t10.row.operating = true);
      try {
        await e17.apply(null, a6);
      } catch (n8) {
        console.log(n8);
      }
      t10.loading = false, t10.row && (t10.row.operating = false);
    };
  }
  const q8 = w12(async () => {
    const { model: e17, saveMethod: a6 } = i4;
    if (!e17 || (e17.clearValidate(), !await e17.validate())) return;
    let l5 = h8();
    if (a6) {
      const s13 = await a6(l5, t10.type, t10.parentRow);
      s13 && (l5 = s13);
    }
    if (t10.dataUpdated = false, t10.type === "create")
      return v6(l5), e17 == null ? void 0 : e17.resetData();
    if (t10.type === "update") {
      const { row: s13 } = t10;
      s13 && e17.allKeys.forEach((g10) => {
        setChainValue(s13.data, g10, getChainValue(l5, g10));
      });
    }
  }), N4 = w12(async (e17) => {
    const { deleteMethod: a6 } = i4;
    a6 && await a6([e17.data]);
    const n8 = [...i4.data ?? []], l5 = Forest.visit(
      n8,
      e17.indexes.slice(0, -1),
      d9.value
    );
    if (l5) {
      const s13 = l5[d9.value];
      s13 ? s13.splice(e17.index, 1) : console.error("行路径不正确");
    } else
      n8.splice(e17.index, 1);
    t10.row === e17 && (t10.row = void 0), f11("update:data", n8);
  });
  function S8() {
    var e17;
    t10.visible = false, t10.row = void 0, t10.parentRow = void 0, (e17 = i4.model) == null || e17.resetData(), r7.value = [];
  }
  return {
    state: t10,
    insertIndexes: r7,
    handleDelete: N4,
    handleInsertChild: k6,
    handleInsertToNext: U3,
    handleInsertToPrev: I4,
    handleCreate: E11,
    handleClose: S8,
    handleSave: q8
  };
}

// node_modules/ultra-ui/components/batch-edit/di.js
var t3 = Symbol("BatchEditDIKey");

// node_modules/ultra-ui/compositions/use-component-props/index.js
function P(f11) {
  return defineComponent({
    name: "ComponentCommonProps",
    inheritAttrs: false,
    props: {
      /** 渲染一个标准html5标签 */
      tag: {
        type: String
      }
    },
    setup(s13, { slots: m6, attrs: p5 }) {
      const u5 = (o11) => {
        var i4;
        if (!o11) {
          console.error("mergeNodesProps期望有1个参数props, 此处为0个");
          return;
        }
        const e17 = l2(((i4 = m6.default) == null ? void 0 : i4.call(m6)) ?? []);
        if (!(e17 != null && e17.length)) return;
        let n8 = 0;
        for (; n8 < e17.length; ) {
          const r7 = e17[n8];
          r7.props || (r7.props = {}), Object.keys(o11).forEach((t10) => {
            r7.props[t10] === void 0 && (r7.props[t10] = o11[t10], p5[t10] !== void 0 && (r7.props[t10] = p5[t10]));
          }), n8++;
        }
        return e17;
      };
      return () => {
        const o11 = isRef(f11) ? f11.value : f11, e17 = u5(o11);
        if (s13.tag) {
          const n8 = Object.keys(p5).reduce((i4, r7) => (r7 in o11 || (i4[r7] = p5[r7]), i4), {});
          return createVNode(s13.tag, n8, e17);
        }
        return e17;
      };
    }
  });
}

// node_modules/ultra-ui/components/card/di.js
var e3 = Symbol("CardDIKey");

// node_modules/ultra-ui/venders/card.vue_vue_type_script_setup_true_lang-BAVX0iNr.js
var S2 = defineComponent({
  name: "Card",
  __name: "card",
  props: {
    width: {},
    integrate: { type: Boolean },
    size: {}
  },
  setup(s13, { expose: a6 }) {
    const e17 = s13, t10 = e("card"), { size: i4 } = g([e17], { size: "default" }), n8 = computed(() => [t10.b, t10.m(i4.value), e.is("integrate", e17.integrate)]), m6 = computed(() => ({
      width: f(e17.width, "px")
    }));
    return provide(e3, { cls: t10, cardProps: e17 }), a6({}), (p5, z5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(n8.value),
        style: normalizeStyle(m6.value)
      },
      [
        renderSlot(p5.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/venders/card-header.vue_vue_type_script_setup_true_lang-Cqp6-Hjw.js
var C2 = defineComponent({
  name: "CardHeader",
  __name: "card-header",
  setup(p5) {
    const r7 = inject(e3), { cls: t10 } = r7 || {}, a6 = computed(() => {
      const e17 = [];
      return t10 && e17.push(t10.e("header")), e17;
    });
    return r7 || console.warn("CardHeader组件仅能在Card组件中使用"), (e17, u5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(a6.value)
      },
      [
        renderSlot(e17.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/table/di.js
var e4 = Symbol("TableDIKey");

// node_modules/ultra-ui/compositions/use-model/index.js
function _2(n8) {
  const {
    props: t10,
    propName: e17 = "modelValue",
    emit: o11,
    local: c12 = true,
    defaultValue: f11,
    shallow: p5 = false
  } = n8;
  if (c12) {
    const l5 = t10[e17] ?? f11, r7 = p5 ? shallowRef : ref, a6 = l5 !== void 0 ? r7(l5) : r7();
    return watch(
      () => t10[e17],
      (u5) => {
        a6.value = u5;
      }
    ), watch(a6, (u5) => {
      u5 !== t10[e17] && o11(`update:${e17}`, u5);
    }), a6;
  }
  return {
    __v_isRef: true,
    get value() {
      return t10[e17];
    },
    set value(l5) {
      o11(`update:${e17}`, l5);
    }
  };
}

// node_modules/ultra-ui/components/table/row-node.js
var o8 = Object.defineProperty;
var h5 = (s13, e17, i4) => e17 in s13 ? o8(s13, e17, { enumerable: true, configurable: true, writable: true, value: i4 }) : s13[e17] = i4;
var t4 = (s13, e17, i4) => h5(s13, typeof e17 != "symbol" ? e17 + "" : e17, i4);
var x3 = class extends TreeNode {
  /**
   *
   * @param data 一个普通对象或者一个响应式对象
   * @param index 索引值
   * @param rowKey 行唯一标识
   * @returns
   */
  constructor(i4) {
    var e17 = (...m6) => (super(...m6), /** 是否操作中 */
    t4(this, "operating", false), /** 是否展开 */
    t4(this, "expanded", false), /** 是否为当前的点击行 */
    t4(this, "isCurrent", false), /** 是否选中 */
    t4(this, "checked", false), t4(this, "uid"), t4(this, "children"), t4(this, "parent", null), this);
    const { data: r7, index: n8, uid: d9 } = i4;
    return e17(r7 && (isReactive(r7) ? r7 : shallowReactive(r7)), n8), this.uid = d9, shallowReactive(this);
  }
  /** 索引路径 */
  get indexes() {
    return this.depth === 0 && !this.isLeaf ? [] : this.parent ? this.depth === 1 ? [this.index] : this.parent.indexes.concat(this.index) : [this.index];
  }
};

// node_modules/ultra-ui/components/table/use-rows.js
function V2(g10) {
  const { props: n8, emit: p5 } = g10, i4 = shallowRef([]), o11 = shallowRef();
  let R7 = 0;
  const c12 = _2({
    props: n8,
    emit: p5,
    propName: "currentRow",
    shallow: true
  });
  watch(c12, (e17, t10) => {
    t10 && (t10.isCurrent = false), e17 && (e17.isCurrent = true);
  }), watch(i4, (e17) => p5("update:rows", e17)), watch(o11, (e17) => p5("update:forest", e17));
  let a6 = /* @__PURE__ */ new WeakMap(), l5 = null;
  const h8 = n8.rowKey ? (e17) => e17 && getChainValue(e17, n8.rowKey) : () => R7++, v6 = (e17, t10) => {
    const r7 = e17 ? a6.get(e17) : void 0;
    return r7 ? (r7.index = t10, r7) : new x3({
      data: e17,
      index: t10,
      uid: h8(e17)
    });
  };
  function x12(e17) {
    let t10 = [], r7 = 0;
    for (l5 = /* @__PURE__ */ new WeakMap(); r7 < e17.length; ) {
      const u5 = e17[r7], s13 = v6(u5, r7);
      t10.push(s13), l5.set(u5, s13), r7++;
    }
    return a6 = l5, l5 = null, t10;
  }
  function k6(e17) {
    l5 = /* @__PURE__ */ new WeakMap();
    const t10 = Forest.create(e17, {
      createNode(r7, u5) {
        const s13 = v6(r7, u5);
        return n8.defaultExpandAll && (s13.expanded = true), r7 && l5.set(r7, s13), s13;
      },
      childrenKey: typeof n8.tree == "string" ? n8.tree : "children"
    });
    return a6 = l5, l5 = null, t10;
  }
  watch(
    [() => n8.data, () => n8.tree, () => n8.defaultExpandAll],
    ([e17, t10]) => {
      if (!(e17 != null && e17.length)) {
        i4.value = [], a6 = /* @__PURE__ */ new WeakMap(), o11.value = void 0;
        return;
      }
      t10 ? (o11.value = k6(e17), d9()) : (o11.value = void 0, i4.value = x12(e17));
    },
    { immediate: true }
  );
  function d9() {
    var t10;
    if (!o11.value) return;
    const e17 = [];
    (t10 = o11.value) == null || t10.dft((r7) => {
      var u5;
      return (u5 = r7.parent) != null && u5.expanded || r7.depth === 1 ? (e17.push(r7), true) : false;
    }), i4.value = e17;
  }
  function E11(e17) {
    e17.expanded = !e17.expanded, d9();
  }
  const f11 = shallowRef(n8.defaultExpandAll ?? false);
  function y5() {
    var e17;
    f11.value = !f11.value, (e17 = o11.value) == null || e17.dft((t10) => {
      t10.expanded = f11.value;
    }), d9();
  }
  const M8 = (e17) => {
    p5("row-click", e17), e17 === c12.value ? c12.value = void 0 : c12.value = e17;
  };
  function A11(e17) {
    return a6.get(e17);
  }
  return {
    /** 数据树 */
    rowForest: o11,
    /** 数据行 */
    rows: i4,
    /**
     * 切换节点的显示隐藏
     * @param node 节点
     */
    toggleTreeRowExpand: E11,
    /** 所有树形节点是否展开 */
    allExpanded: f11,
    /** 切换所有树形节点的显示隐藏 */
    toggleAllTreeRowExpand: y5,
    /** 行点击 */
    handleRowClick: M8,
    /** 通过数据获取表格行 */
    getRowByData: A11
  };
}

// node_modules/ultra-ui/components/table/use-columns.js
var $3 = Object.defineProperty;
var B = (f11, n8, e17) => n8 in f11 ? $3(f11, n8, { enumerable: true, configurable: true, writable: true, value: e17 }) : f11[n8] = e17;
var x4 = (f11, n8, e17) => B(f11, typeof n8 != "symbol" ? n8 + "" : n8, e17);
function te4(f11, n8) {
  return f11.forEach((e17) => {
    Tree.dft(e17, (u5) => {
      for (const g10 in n8)
        u5[g10] === void 0 && (u5[g10] = n8[g10]);
      !u5.children && u5.width === void 0 && u5.minWidth === void 0 && (u5.minWidth = 100);
    });
  }), f11;
}
var K3 = class extends TreeNode {
  constructor(e17, u5) {
    super(e17 && shallowReactive(e17), u5);
    x4(this, "children");
    x4(this, "parent", null);
    x4(this, "leafs");
    x4(this, "style", reactive({}));
  }
  get keySuffix() {
    return this.parent ? this.depth === 1 ? `${this.index}` : this.parent.keySuffix + `-${this.index}` : "";
  }
  /** 列key */
  get key() {
    return this.data.key;
  }
  set key(e17) {
    this.data.key = e17;
  }
  /** 列名 */
  get name() {
    return this.data.name;
  }
  set name(e17) {
    this.data.name = e17;
  }
  /**
   * 列对齐方式
   * @default 'left'
   */
  get align() {
    return this.data.align ?? "left";
  }
  set align(e17) {
    this.data.align = e17;
  }
  /** 宽度 */
  get width() {
    return this.data.width;
  }
  set width(e17) {
    this.data.width = e17;
  }
  /** 最小宽度 */
  get minWidth() {
    return this.data.minWidth;
  }
  set minWidth(e17) {
    this.data.minWidth = e17;
  }
  /** 列固定方向 */
  get fixed() {
    if (!(this.depth > 1))
      return this.data.fixed;
  }
  set fixed(e17) {
    this.data.fixed = e17;
  }
  /** 是否是左侧的最后一个固定列 */
  get isLastFixed() {
    return this.data.isLastFixed ?? false;
  }
  /** 是否是右侧的第一个固定列 */
  get isFirstFixed() {
    return this.data.isFirstFixed ?? false;
  }
};
function ie2(f11) {
  const {
    props: n8,
    createCheckColumn: e17,
    createSelectColumn: u5,
    colgroupRef: g10,
    toggleAllTreeRowExpand: L5,
    cls: b10
  } = f11, O7 = computed(() => {
    const { selectable: r7, checkable: t10, showIndex: o11 } = n8, a6 = [];
    return r7 ? a6.push(u5()) : t10 && a6.push(e17()), o11 && a6.push({
      key: "__index__",
      name: "#",
      width: 60,
      align: "center",
      fixed: "left",
      render({ row: s13 }) {
        return s13.index + 1;
      }
    }), a6;
  }), C7 = shallowRef(), F6 = () => createVNode(
    M,
    {
      text: true,
      title: "展开或收起全部",
      class: b10.e("expand-all"),
      type: "primary",
      size: "small",
      circle: true,
      onClick: (r7) => {
        r7.stopPropagation(), L5();
      }
    },
    () => [createVNode(k, void 0, () => [createVNode(arrow_right_default)])]
  );
  watch(
    [O7, () => n8.columns, () => n8.tree],
    ([r7, t10, o11]) => {
      const a6 = [...r7], s13 = [], h8 = [];
      t10 == null || t10.forEach((d9) => {
        if (!d9.fixed || d9.children)
          return d9.fixed = void 0, s13.push(d9);
        d9.fixed === "left" ? a6.push(d9) : h8.push(d9);
      }), last(a6) && (last(a6).isLastFixed = true), h8[0] && (h8[0].isFirstFixed = true);
      const c12 = [...a6, ...s13, ...h8], i4 = { ...c12[0] };
      if (c12[0] = i4, o11 && i4) {
        i4.align = "left", i4.width = i4.width ? i4.width + 60 : void 0;
        const d9 = i4.nameRender;
        i4.nameRender = d9 ? (m6) => {
          const l5 = d9(m6);
          return [
            F6(),
            ...Array.isArray(l5) ? l5 : [l5]
          ];
        } : (m6) => [F6(), i4.name];
      }
      const p5 = Forest.create(c12, {
        createNode(d9, m6) {
          return new K3(d9, m6);
        }
      });
      let y5 = 0;
      a6.some((d9, m6) => {
        const l5 = p5.nodes[m6];
        if (l5.style.left = y5, l5.width === void 0 || l5.width <= 0)
          return false;
        y5 += l5.width;
      });
      let R7 = 0;
      h8.some((d9, m6) => {
        const l5 = p5.nodes[p5.nodes.length - 1 - m6];
        if (l5.style.right = R7, l5.width === void 0 || l5.width <= 0)
          return false;
        R7 += l5.width;
      }), C7.value = p5;
    },
    { immediate: true }
  );
  const T6 = computed(() => {
    var a6;
    const r7 = [];
    let t10 = [], o11 = -1;
    (a6 = C7.value) == null || a6.bft((s13) => {
      o11 !== s13.depth ? (t10.length && r7.push(t10), o11 = s13.depth, t10 = [s13]) : t10.push(s13);
    }), t10.length && r7.push(t10), t10 = [];
    for (let s13 = r7.length - 1; s13 > 0; s13--)
      r7[s13].forEach((c12) => {
        const i4 = c12.parent;
        i4.leafs === void 0 && (i4.leafs = i4.children.reduce((p5, y5) => p5 + (y5.leafs ?? 1), 0));
      });
    return r7;
  }), N4 = shallowRef([]), w12 = shallowRef([]), _10 = shallowRef();
  watch(
    [C7, () => n8.tree],
    ([r7]) => {
      const t10 = [];
      r7 == null || r7.dft((o11) => {
        o11.isLeaf && t10.push(o11);
      }), w12.value = t10, n8.tree ? (_10.value = t10[0], N4.value = t10.slice(1)) : (N4.value = t10, _10.value = void 0);
    },
    { immediate: true }
  );
  const S8 = debounce(
    () => {
      const r7 = g10.value;
      if (!r7) return;
      const t10 = Array.from(
        r7.getElementsByClassName("left")
      ), o11 = Array.from(
        r7.getElementsByClassName("right")
      );
      t10.reduce((s13, h8, c12) => {
        const i4 = w12.value[c12];
        return i4.width || (i4.width = h8.offsetWidth), i4.style.left = s13, s13 + h8.offsetWidth;
      }, 0);
      const a6 = w12.value.slice(-o11.length);
      o11.reduceRight((s13, h8, c12) => {
        const i4 = a6[c12];
        return i4.width || (i4.width = h8.offsetWidth), i4.style.right = s13, s13 + h8.offsetWidth;
      }, 0);
    },
    100,
    true
  );
  return {
    /** 第一列 */
    expandColumn: _10,
    /** 所有列 */
    allColumns: w12,
    /** 列 */
    columns: N4,
    /** 表格头的分层展示 */
    headers: T6,
    updateStylesOfColumns: S8
  };
}

// node_modules/ultra-ui/components/table/table-head.js
var k2 = defineComponent({
  name: "TableHead",
  setup() {
    const {
      cls: r7,
      columnConfig: i4,
      getHeaderSlotsNode: o11,
      getCellClass: p5
    } = inject(e4), {
      headers: t10
    } = i4;
    return () => createVNode("thead", {
      class: [r7.e("head"), e.is("multistage", t10.value.length > 1)]
    }, [t10.value.map((n8, d9) => createVNode("tr", null, [n8.map((e17) => {
      var s13;
      return createVNode("th", {
        class: p5(e17),
        key: e17.key + e17.keySuffix,
        colspan: e17.leafs,
        rowspan: (s13 = e17.children) != null && s13.length ? void 0 : t10.value.length - d9,
        style: {
          left: f(e17.style.left, "px"),
          right: f(e17.style.right, "px")
        }
      }, [o11({
        column: e17
      })]);
    })]))]);
  }
});

// node_modules/ultra-ui/venders/table-cell.vue_vue_type_script_setup_true_lang-Bbe0uoij.js
var u2 = ["rowspan", "colspan"];
var _3 = defineComponent({
  name: "TableCell",
  __name: "table-cell",
  props: {
    column: {},
    left: {},
    right: {},
    rowspan: {},
    colspan: {}
  },
  setup(w12) {
    const { getCellClass: n8 } = inject(e4);
    return (e17, d9) => e17.rowspan !== 0 && e17.colspan !== 0 ? (openBlock(), createElementBlock("td", {
      key: 0,
      class: normalizeClass(unref(n8)(e17.column)),
      style: normalizeStyle({
        left: unref(f)(e17.left, "px"),
        right: unref(f)(e17.right, "px")
      }),
      rowspan: e17.rowspan,
      colspan: e17.colspan
    }, [
      renderSlot(e17.$slots, "default")
    ], 14, u2)) : createCommentVNode("v-if", true);
  }
});

// node_modules/ultra-ui/components/table/table-row.js
function E4(i4) {
  return typeof i4 == "function" || Object.prototype.toString.call(i4) === "[object Object]" && !isVNode(i4);
}
var B2 = defineComponent({
  name: "TableRow",
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  setup(i4) {
    const {
      row: l5
    } = i4, {
      cls: s13,
      columnConfig: C7,
      getColumnSlotsNode: c12,
      toggleTreeRowExpand: _10,
      getCellCtx: f11,
      handleRowClick: w12,
      tableProps: t10,
      measureElement: k6
    } = inject(e4), {
      columns: h8,
      expandColumn: S8
    } = C7;
    return () => {
      var u5, d9;
      const o11 = S8.value;
      let m6 = null;
      if (o11) {
        const e17 = f11(l5, o11), r7 = (u5 = t10.mergeCell) == null ? void 0 : u5.call(t10, e17);
        (!r7 || r7.colspan && r7.rowspan) && (m6 = createVNode(_3, mergeProps({
          column: o11,
          left: o11.style.left,
          right: o11.style.right,
          key: o11.key + o11.keySuffix
        }, (d9 = t10.mergeCell) == null ? void 0 : d9.call(t10, e17)), {
          default: () => [l5.isLeaf ? createVNode("i", {
            class: s13.e("expand-space"),
            style: `margin-left: ${(l5.depth - 1) * 14}px`
          }, null) : createVNode(M, {
            text: true,
            class: s13.e("expand-toggle"),
            type: "primary",
            size: "small",
            circle: true,
            onClick: (a6) => {
              a6.stopPropagation(), _10(l5);
            },
            style: `margin-left: ${(l5.depth - 1) * 14}px`
          }, {
            default: () => [createVNode(k, null, {
              default: () => [createVNode(arrow_right_default, null, null)]
            })]
          }), c12(e17)]
        }));
      }
      return createVNode("tr", {
        class: [s13.e("row"), e.is("expanded", l5.expanded)],
        onClick: () => w12(l5),
        ref: k6
      }, [m6, h8.value.map((e17) => {
        var g10;
        const r7 = f11(l5, e17), a6 = (g10 = t10.mergeCell) == null ? void 0 : g10.call(t10, r7);
        if (a6 && (!a6.colspan || !a6.rowspan))
          return null;
        const p5 = c12(r7);
        return createVNode(_3, mergeProps({
          column: e17,
          left: e17.style.left,
          right: e17.style.right,
          key: e17.key + e17.keySuffix
        }, a6), E4(p5) ? p5 : {
          default: () => [p5]
        });
      })]);
    };
  }
});

// node_modules/ultra-ui/venders/empty.vue_vue_type_script_setup_true_lang-Li9MYpBd.js
var h6 = defineComponent({
  name: "Empty",
  __name: "empty",
  props: {
    size: { default: 48 },
    text: { default: "暂无数据" }
  },
  setup(u5) {
    const m6 = e("empty");
    return (t10, d9) => (openBlock(), createElementBlock(
      "span",
      {
        class: normalizeClass(unref(m6).b)
      },
      [
        createVNode(unref(k), { size: t10.size }, {
          default: withCtx(() => [
            createVNode(unref(empty_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size"]),
        createBaseVNode(
          "div",
          null,
          toDisplayString(t10.text),
          1
          /* TEXT */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/table-body.vue_vue_type_script_setup_true_lang-IxT-fy3g.js
var S3 = ["colspan"];
var A = defineComponent({
  name: "TableBody",
  __name: "table-body",
  setup(j5) {
    const { cls: s13, rows: c12, virtualList: i4, columnConfig: y5, tableProps: _10 } = inject(e4), { allColumns: b10 } = y5, h8 = computed(() => i4.value.map((t10) => ({
      row: c12.value[t10.index],
      index: t10.index
    }))), a6 = shallowRef();
    return watch(i4, (t10) => {
      var l5;
      a6.value && n3(a6.value, {
        transform: `translate3d(0, ${((l5 = t10[0]) == null ? void 0 : l5.start) ?? 0}px, 0)`
      });
    }), (t10, l5) => (openBlock(), createElementBlock(
      "tbody",
      {
        class: normalizeClass(unref(s13).e("body")),
        ref_key: "bodyRef",
        ref: a6
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(h8.value, ({ row: n8, index: u5 }) => (openBlock(), createBlock(unref(B2), {
            row: n8,
            key: n8.uid,
            "data-index": u5,
            class: normalizeClass([
              unref(e).is("current", n8.isCurrent && unref(_10).highlightCurrent),
              unref(e).is("even", u5 % 2 === 1)
            ])
          }, null, 8, ["row", "data-index", "class"]))),
          128
          /* KEYED_FRAGMENT */
        )),
        createCommentVNode(" 空 "),
        unref(c12).length ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "tr",
          {
            key: 0,
            class: normalizeClass(unref(s13).e("row"))
          },
          [
            createBaseVNode("td", {
              colspan: unref(b10).length
            }, [
              renderSlot(t10.$slots, "empty", {}, () => [
                createVNode(unref(h6), {
                  class: normalizeClass(unref(s13).e("empty"))
                }, null, 8, ["class"])
              ])
            ], 8, S3)
          ],
          2
          /* CLASS */
        )),
        renderSlot(t10.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/table-foot.vue_vue_type_script_setup_true_lang-DU7gJ0_L.js
var F = { key: 0 };
var L2 = defineComponent({
  name: "TableFoot",
  __name: "table-foot",
  setup(T6) {
    const { cls: y5, columnConfig: d9, rows: i4, tableSlots: h8, getCellClass: f11 } = inject(e4), { allColumns: l5 } = d9, c12 = computed(() => l5.value.some((o11) => !!o11.data.summary));
    function _10(o11) {
      let r7 = 0, t10 = 0;
      for (; t10 < i4.value.length; ) {
        if (r7 = n.plus(r7, i4.value[t10].data[o11]), isNaN(r7)) return r7;
        t10++;
      }
      return r7;
    }
    function g10(o11) {
      const { summary: r7 } = o11.data;
      if (!r7) return null;
      let t10 = _10(o11.key);
      return typeof r7 == "function" ? r7({
        total: t10,
        rows: i4.value,
        column: o11
      }) : t10;
    }
    return (o11, r7) => unref(h8).foot || c12.value ? (openBlock(), createElementBlock(
      "tfoot",
      {
        key: 0,
        class: normalizeClass(unref(y5).e("foot"))
      },
      [
        c12.value ? (openBlock(), createElementBlock("tr", F, [
          unref(l5)[0] ? (openBlock(), createElementBlock(
            "td",
            {
              key: 0,
              class: normalizeClass(unref(f11)(unref(l5)[0])),
              style: normalizeStyle({
                right: unref(f)(unref(l5)[0].style.right, "px"),
                left: unref(f)(unref(l5)[0].style.left, "px")
              })
            },
            " 合计: ",
            6
            /* CLASS, STYLE */
          )) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(l5).slice(1), (t10) => (openBlock(), createElementBlock(
              "td",
              {
                class: normalizeClass(unref(f11)(t10)),
                key: t10.key + t10.keySuffix,
                style: normalizeStyle({
                  right: unref(f)(t10.style.right, "px"),
                  left: unref(f)(t10.style.left, "px")
                })
              },
              [
                createVNode(unref(d3), {
                  content: g10(t10)
                }, null, 8, ["content"])
              ],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true),
        renderSlot(o11.$slots, "default")
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true);
  }
});

// node_modules/ultra-ui/compositions/use-virtual/index.js
function b2(o11, r7, e17) {
  let s13 = e17.initialDeps ?? [], t10;
  return () => {
    var n8, i4, l5, h8;
    let u5;
    e17.key && ((n8 = e17.debug) != null && n8.call(e17)) && (u5 = Date.now());
    const a6 = o11();
    if (!(a6.length !== s13.length || a6.some((g10, m6) => s13[m6] !== g10)))
      return t10;
    s13 = a6;
    let c12;
    if (e17.key && ((i4 = e17.debug) != null && i4.call(e17)) && (c12 = Date.now()), t10 = r7(...a6), e17.key && ((l5 = e17.debug) != null && l5.call(e17))) {
      const g10 = Math.round((Date.now() - u5) * 100) / 100, m6 = Math.round((Date.now() - c12) * 100) / 100, v6 = m6 / 16, d9 = (p5, w12) => {
        for (p5 = String(p5); p5.length < w12; )
          p5 = " " + p5;
        return p5;
      };
      console.info(
        `%c⏱ ${d9(m6, 5)} /${d9(g10, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v6, 120)
        )}deg 100% 31%);`,
        e17 == null ? void 0 : e17.key
      );
    }
    return (h8 = e17 == null ? void 0 : e17.onChange) == null || h8.call(e17, t10), t10;
  };
}
function E5(o11, r7) {
  if (o11 === void 0)
    throw new Error("Unexpected undefined");
  return o11;
}
var y = (o11, r7) => Math.abs(o11 - r7) < 1;
var C3 = (o11, r7, e17) => {
  let s13;
  return function(...t10) {
    o11.clearTimeout(s13), s13 = o11.setTimeout(() => r7.apply(this, t10), e17);
  };
};
var T3 = (o11) => o11;
var _4 = (o11) => {
  const r7 = Math.max(o11.startIndex - o11.overscan, 0), e17 = Math.min(o11.endIndex + o11.overscan, o11.count - 1), s13 = [];
  for (let t10 = r7; t10 <= e17; t10++)
    s13.push(t10);
  return s13;
};
var R2 = (o11, r7) => {
  const e17 = o11.scrollElement;
  if (!e17)
    return;
  const s13 = o11.targetWindow;
  if (!s13)
    return;
  const t10 = (i4) => {
    const { width: l5, height: h8 } = i4;
    r7({ width: Math.round(l5), height: Math.round(h8) });
  };
  if (t10(e17.getBoundingClientRect()), !s13.ResizeObserver)
    return () => {
    };
  const n8 = new s13.ResizeObserver((i4) => {
    const l5 = i4[0];
    if (l5 != null && l5.borderBoxSize) {
      const h8 = l5.borderBoxSize[0];
      if (h8) {
        t10({ width: h8.inlineSize, height: h8.blockSize });
        return;
      }
    }
    t10(e17.getBoundingClientRect());
  });
  return n8.observe(e17, { box: "border-box" }), () => {
    n8.unobserve(e17);
  };
};
var z2 = {
  passive: true
};
var D = typeof window > "u" ? true : "onscrollend" in window;
var k3 = (o11, r7) => {
  const e17 = o11.scrollElement;
  if (!e17)
    return;
  const s13 = o11.targetWindow;
  if (!s13)
    return;
  let t10 = 0;
  const n8 = D ? () => {
  } : C3(
    s13,
    () => {
      r7(t10, false);
    },
    o11.options.isScrollingResetDelay
  ), i4 = (u5) => () => {
    const { horizontal: a6, isRtl: f11 } = o11.options;
    t10 = a6 ? e17.scrollLeft * (f11 && -1 || 1) : e17.scrollTop, n8(), r7(t10, u5);
  }, l5 = i4(true), h8 = i4(false);
  return h8(), e17.addEventListener("scroll", l5, z2), e17.addEventListener("scrollend", h8, z2), () => {
    e17.removeEventListener("scroll", l5), e17.removeEventListener("scrollend", h8);
  };
};
var N = (o11, r7, e17) => {
  if (r7 != null && r7.borderBoxSize) {
    const s13 = r7.borderBoxSize[0];
    if (s13)
      return Math.round(
        s13[e17.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    o11.getBoundingClientRect()[e17.options.horizontal ? "width" : "height"]
  );
};
var F2 = (o11, {
  adjustments: r7 = 0,
  behavior: e17
}, s13) => {
  var t10, n8;
  const i4 = o11 + r7;
  (n8 = (t10 = s13.scrollElement) == null ? void 0 : t10.scrollTo) == null || n8.call(t10, {
    [s13.options.horizontal ? "left" : "top"]: i4,
    behavior: e17
  });
};
var A2 = class {
  constructor(r7) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e17 = null;
      const s13 = () => e17 || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e17 = new this.targetWindow.ResizeObserver((t10) => {
        t10.forEach((n8) => {
          this._measureElement(n8.target, n8);
        });
      }));
      return {
        disconnect: () => {
          var t10;
          (t10 = s13()) == null || t10.disconnect(), e17 = null;
        },
        observe: (t10) => {
          var n8;
          return (n8 = s13()) == null ? void 0 : n8.observe(t10, { box: "border-box" });
        },
        unobserve: (t10) => {
          var n8;
          return (n8 = s13()) == null ? void 0 : n8.unobserve(t10);
        }
      };
    })(), this.range = null, this.setOptions = (e17) => {
      Object.entries(e17).forEach(([s13, t10]) => {
        typeof t10 > "u" && delete e17[s13];
      }), this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: T3,
        rangeExtractor: _4,
        onChange: () => {
        },
        measureElement: N,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        ...e17
      };
    }, this.notify = (e17) => {
      var s13, t10;
      (t10 = (s13 = this.options).onChange) == null || t10.call(s13, this, e17);
    }, this.maybeNotify = b2(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e17) => {
        this.notify(e17);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e17) => e17()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e17;
      const s13 = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s13) {
        if (this.cleanup(), !s13) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = s13, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e17 = this.scrollElement) == null ? void 0 : e17.window) ?? null, this.elementsCache.forEach((t10) => {
          this.observer.observe(t10);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (t10) => {
            this.scrollRect = t10, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (t10, n8) => {
            this.scrollAdjustments = 0, this.scrollDirection = n8 ? this.getScrollOffset() < t10 ? "forward" : "backward" : null, this.scrollOffset = t10, this.isScrolling = n8, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e17, s13) => {
      const t10 = /* @__PURE__ */ new Map(), n8 = /* @__PURE__ */ new Map();
      for (let i4 = s13 - 1; i4 >= 0; i4--) {
        const l5 = e17[i4];
        if (t10.has(l5.lane))
          continue;
        const h8 = n8.get(
          l5.lane
        );
        if (h8 == null || l5.end > h8.end ? n8.set(l5.lane, l5) : l5.end < h8.end && t10.set(l5.lane, true), t10.size === this.options.lanes)
          break;
      }
      return n8.size === this.options.lanes ? Array.from(n8.values()).sort((i4, l5) => i4.end === l5.end ? i4.index - l5.index : i4.end - l5.end)[0] : void 0;
    }, this.getMeasurementOptions = b2(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e17, s13, t10, n8, i4) => (this.pendingMeasuredCacheIndexes = [], {
        count: e17,
        paddingStart: s13,
        scrollMargin: t10,
        getItemKey: n8,
        enabled: i4
      }),
      {
        key: false
      }
    ), this.getMeasurements = b2(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e17, paddingStart: s13, scrollMargin: t10, getItemKey: n8, enabled: i4 }, l5) => {
        if (!i4)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((a6) => {
          this.itemSizeCache.set(a6.key, a6.size);
        }));
        const h8 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u5 = this.measurementsCache.slice(0, h8);
        for (let a6 = h8; a6 < e17; a6++) {
          const f11 = n8(a6), c12 = this.options.lanes === 1 ? u5[a6 - 1] : this.getFurthestMeasurement(u5, a6), g10 = c12 ? c12.end + this.options.gap : s13 + t10, m6 = l5.get(f11), v6 = typeof m6 == "number" ? m6 : this.options.estimateSize(a6), d9 = g10 + v6, p5 = c12 ? c12.lane : a6 % this.options.lanes;
          u5[a6] = {
            index: a6,
            start: g10,
            size: v6,
            end: d9,
            key: f11,
            lane: p5
          };
        }
        return this.measurementsCache = u5, u5;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = b2(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (e17, s13, t10) => this.range = e17.length > 0 && s13 > 0 ? W({
        measurements: e17,
        outerSize: s13,
        scrollOffset: t10
      }) : null,
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = b2(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (e17, s13, t10, n8) => s13 === null ? [] : e17({
        startIndex: s13.startIndex,
        endIndex: s13.endIndex,
        overscan: t10,
        count: n8
      }),
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e17) => {
      const s13 = this.options.indexAttribute, t10 = e17.getAttribute(s13);
      return t10 ? parseInt(t10, 10) : (console.warn(
        `Missing attribute name '${s13}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e17, s13) => {
      const t10 = this.indexFromElement(e17), n8 = this.measurementsCache[t10];
      if (!n8)
        return;
      const i4 = n8.key, l5 = this.elementsCache.get(i4);
      l5 !== e17 && (l5 && this.observer.unobserve(l5), this.observer.observe(e17), this.elementsCache.set(i4, e17)), e17.isConnected && this.resizeItem(t10, this.options.measureElement(e17, s13, this));
    }, this.resizeItem = (e17, s13) => {
      const t10 = this.measurementsCache[e17];
      if (!t10)
        return;
      const n8 = this.itemSizeCache.get(t10.key) ?? t10.size, i4 = s13 - n8;
      i4 !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(t10, i4, this) : t10.start < this.getScrollOffset() + this.scrollAdjustments) && (this.options.debug && console.info("correction", i4), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i4,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(t10.index), this.itemSizeCache = new Map(this.itemSizeCache.set(t10.key, s13)), this.notify(false));
    }, this.measureElement = (e17) => {
      if (!e17) {
        this.elementsCache.forEach((s13, t10) => {
          s13.isConnected || (this.observer.unobserve(s13), this.elementsCache.delete(t10));
        });
        return;
      }
      this._measureElement(e17, void 0);
    }, this.getVirtualItems = b2(
      () => [this.getIndexes(), this.getMeasurements()],
      (e17, s13) => {
        const t10 = [];
        for (let n8 = 0, i4 = e17.length; n8 < i4; n8++) {
          const l5 = e17[n8], h8 = s13[l5];
          t10.push(h8);
        }
        return t10;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e17) => {
      const s13 = this.getMeasurements();
      if (s13.length !== 0)
        return E5(
          s13[I2(
            0,
            s13.length - 1,
            (t10) => E5(s13[t10]).start,
            e17
          )]
        );
    }, this.getOffsetForAlignment = (e17, s13) => {
      const t10 = this.getSize(), n8 = this.getScrollOffset();
      s13 === "auto" && (e17 <= n8 ? s13 = "start" : e17 >= n8 + t10 ? s13 = "end" : s13 = "start"), s13 === "start" ? e17 = e17 : s13 === "end" ? e17 = e17 - t10 : s13 === "center" && (e17 = e17 - t10 / 2);
      const i4 = this.options.horizontal ? "scrollWidth" : "scrollHeight", h8 = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i4] : this.scrollElement[i4] : 0) - t10;
      return Math.max(Math.min(h8, e17), 0);
    }, this.getOffsetForIndex = (e17, s13 = "auto") => {
      e17 = Math.max(0, Math.min(e17, this.options.count - 1));
      const t10 = this.measurementsCache[e17];
      if (!t10)
        return;
      const n8 = this.getSize(), i4 = this.getScrollOffset();
      if (s13 === "auto")
        if (t10.end >= i4 + n8 - this.options.scrollPaddingEnd)
          s13 = "end";
        else if (t10.start <= i4 + this.options.scrollPaddingStart)
          s13 = "start";
        else
          return [i4, s13];
      const l5 = s13 === "end" ? t10.end + this.options.scrollPaddingEnd : t10.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(l5, s13), s13];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (e17, { align: s13 = "start", behavior: t10 } = {}) => {
      this.cancelScrollToIndex(), t10 === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e17, s13), {
        adjustments: void 0,
        behavior: t10
      });
    }, this.scrollToIndex = (e17, { align: s13 = "auto", behavior: t10 } = {}) => {
      e17 = Math.max(0, Math.min(e17, this.options.count - 1)), this.cancelScrollToIndex(), t10 === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const n8 = this.getOffsetForIndex(e17, s13);
      if (!n8) return;
      const [i4, l5] = n8;
      this._scrollToOffset(i4, { adjustments: void 0, behavior: t10 }), t10 !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(e17)
        )) {
          const [u5] = E5(
            this.getOffsetForIndex(e17, l5)
          );
          y(u5, this.getScrollOffset()) || this.scrollToIndex(e17, { align: l5, behavior: t10 });
        } else
          this.scrollToIndex(e17, { align: l5, behavior: t10 });
      }));
    }, this.scrollBy = (e17, { behavior: s13 } = {}) => {
      this.cancelScrollToIndex(), s13 === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e17, {
        adjustments: void 0,
        behavior: s13
      });
    }, this.getTotalSize = () => {
      var e17;
      const s13 = this.getMeasurements();
      let t10;
      return s13.length === 0 ? t10 = this.options.paddingStart : t10 = this.options.lanes === 1 ? ((e17 = s13[s13.length - 1]) == null ? void 0 : e17.end) ?? 0 : Math.max(
        ...s13.slice(-this.options.lanes).map((n8) => n8.end)
      ), Math.max(
        t10 - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e17, {
      adjustments: s13,
      behavior: t10
    }) => {
      this.options.scrollToFn(e17, { behavior: t10, adjustments: s13 }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(false);
    }, this.setOptions(r7);
  }
};
var I2 = (o11, r7, e17, s13) => {
  for (; o11 <= r7; ) {
    const t10 = (o11 + r7) / 2 | 0, n8 = e17(t10);
    if (n8 < s13)
      o11 = t10 + 1;
    else if (n8 > s13)
      r7 = t10 - 1;
    else
      return t10;
  }
  return o11 > 0 ? o11 - 1 : 0;
};
function W({
  measurements: o11,
  outerSize: r7,
  scrollOffset: e17
}) {
  const s13 = o11.length - 1, n8 = I2(0, s13, (l5) => o11[l5].start, e17);
  let i4 = n8;
  for (; i4 < s13 && o11[i4].end < e17 + r7; )
    i4++;
  return { startIndex: n8, endIndex: i4 };
}
function j3(o11) {
  const { count: r7, scrollEl: e17, estimateSize: s13, virtualThreshold: t10, gap: n8 } = o11, i4 = computed(() => t10 ? r7.value > t10 : true), l5 = () => 34, h8 = shallowRef([]), u5 = shallowRef(0), a6 = () => {
    i4.value && (u5.value = c12.getTotalSize(), h8.value = c12.getVirtualItems());
  }, f11 = computed(() => ({
    enabled: i4.value,
    count: r7.value,
    getScrollElement: () => e17.value,
    estimateSize: s13 ?? l5,
    overscan: 3,
    gap: n8,
    observeElementRect: R2,
    observeElementOffset: k3,
    scrollToFn: F2,
    onChange: a6
  })), c12 = new A2(f11.value);
  a6();
  const g10 = c12._didMount();
  watch(
    e17,
    (d9) => {
      d9 && c12._willUpdate();
    },
    { immediate: true }
  ), watch(
    () => f11.value,
    (d9) => {
      c12.setOptions(d9), c12._willUpdate(), a6();
    }
  ), onScopeDispose(() => {
    g10();
  });
  function m6(d9) {
    c12.scrollToIndex(d9);
  }
  function v6(d9) {
    d9 && c12.measureElement(d9);
  }
  return {
    virtualEnabled: i4,
    virtualList: h8,
    totalHeight: u5,
    measureElement: v6,
    scrollTo: m6
  };
}

// node_modules/ultra-ui/venders/tag.vue_vue_type_script_setup_true_lang-CiIkoh5M.js
var A3 = defineComponent({
  name: "Tag",
  __name: "tag",
  props: {
    type: {},
    closable: { type: Boolean },
    size: {},
    round: { type: Boolean },
    dark: { type: Boolean }
  },
  emits: ["close"],
  setup(c12, { emit: l5 }) {
    const e17 = e("tag"), t10 = c12, m6 = l5, { formProps: p5 } = i2(), { size: i4 } = g([p5 ?? {}, t10], {
      size: "default"
    }), d9 = () => {
      m6("close");
    }, u5 = computed(() => {
      const { type: o11 } = t10;
      return [
        e17.b,
        e17.m(i4.value),
        o11 && e17.m("color-" + o11),
        e.is("round", t10.round),
        e.is("dark", t10.dark)
      ];
    });
    return (o11, w12) => (openBlock(), createElementBlock(
      "span",
      {
        class: normalizeClass(u5.value)
      },
      [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(e17).e("content"))
          },
          [
            renderSlot(o11.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        o11.closable ? (openBlock(), createBlock(unref(k), {
          key: 0,
          onClick: withModifiers(d9, ["stop"]),
          class: normalizeClass(unref(e17).e("icon-close"))
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/checkbox.vue_vue_type_script_setup_true_lang-D8bS5srp.js
var $4 = {
  key: 0,
  viewBox: "0 0 64 64",
  fill: "currentColor"
};
var D2 = ["checked", "disabled"];
var L3 = { key: 2 };
var U2 = defineComponent({
  name: "Checkbox",
  __name: "checkbox",
  props: mergeModels({
    trueValue: {},
    falseValue: {},
    indeterminate: { type: Boolean },
    modelValue: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue"], ["update:modelValue"]),
  setup(f11, { emit: R7 }) {
    const o11 = f11, l5 = e("checkbox"), a6 = useModel(f11, "modelValue"), s13 = computed(() => o11.trueValue ?? true), h8 = computed(() => o11.falseValue ?? false), { formProps: y5 } = i2(), { size: V6, disabled: v6, readonly: C7 } = g(
      [y5 ?? {}, o11],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), x12 = computed(() => [
      l5.b,
      l5.m(V6.value),
      e.is("disabled", v6.value),
      e.is("checked", m6.value || o11.indeterminate)
    ]), m6 = computed(() => s13.value === a6.value), B7 = (n8) => {
      const r7 = n8.target;
      a6.value = r7.checked ? s13.value : h8.value;
    };
    return (n8, r7) => unref(C7) ? a6.value !== void 0 ? (openBlock(), createBlock(unref(A3), {
      key: 1,
      type: s13.value === a6.value ? "success" : "danger"
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(s13.value === a6.value ? "是" : "否"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["type"])) : (openBlock(), createElementBlock(
      "span",
      L3,
      toDisplayString(unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createElementBlock(
      "label",
      {
        key: 0,
        class: normalizeClass(x12.value)
      },
      [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(l5).e("wrap"))
          },
          [
            createVNode(Transition, {
              name: "zoom-in",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                m6.value ? (openBlock(), createElementBlock("svg", $4, r7[0] || (r7[0] = [
                  createBaseVNode(
                    "path",
                    { d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z" },
                    null,
                    -1
                    /* HOISTED */
                  )
                ]))) : n8.indeterminate ? (openBlock(), createElementBlock(
                  "span",
                  {
                    key: 1,
                    class: normalizeClass(unref(l5).m("indeterminate"))
                  },
                  null,
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true)
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        ),
        createBaseVNode("input", {
          type: "checkbox",
          checked: m6.value,
          disabled: unref(v6),
          hidden: "",
          onInput: B7
        }, null, 40, D2),
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(l5).e("label"))
          },
          [
            renderSlot(n8.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/table/use-check.js
function X2(A11) {
  const { rows: r7, rowForest: m6, props: c12, emit: b10, size: T6, cls: p5 } = A11, n8 = shallowRef(/* @__PURE__ */ new Set()), u5 = shallowRef();
  function d9() {
    triggerRef(n8);
  }
  function _10() {
    n8.value.forEach((e17) => {
      e17.checked = false;
    }), n8.value.clear(), d9();
  }
  function x12() {
    u5.value && (u5.value.checked = false, u5.value = void 0);
  }
  watch(
    [() => c12.checkable, () => c12.selectable, () => r7.value],
    () => {
      _10(), x12();
    }
  ), watch(u5, (e17) => {
    s13 || (i4 = true, b10(
      "update:selected",
      e17 != null && e17.data ? toRaw(e17.data) : void 0
    ), nextTick(() => {
      i4 = false;
    }));
  });
  let i4 = false, s13 = false;
  watch(n8, (e17) => {
    s13 || (i4 = true, b10(
      "update:checked",
      Array.from(e17).map((t10) => toRaw(t10.data))
    ), nextTick(() => {
      i4 = false;
    }));
  });
  let o11;
  function V6() {
    if (o11 || !r7.value || !c12.rowKey) return;
    let e17 = [], t10 = 0;
    for (; t10 < r7.value.length; ) {
      const a6 = r7.value[t10];
      e17.push([a6.uid, a6]), t10++;
    }
    o11 = new Map(e17);
  }
  watch(r7, () => {
    o11 = void 0;
  }), watch(
    [() => c12.checked, () => c12.rowKey, () => c12.checkable, r7],
    ([e17, t10, a6, l5], [j5, q8, G4, C7]) => {
      i4 || !a6 || !t10 || (s13 = true, l5 !== C7 && V6(), _10(), e17 == null || e17.forEach((h8) => {
        const g10 = o11 == null ? void 0 : o11.get(getChainValue(h8, t10));
        g10 && (g10.checked = true, n8.value.add(g10));
      }), d9(), nextTick(() => {
        s13 = false;
      }));
    },
    {
      immediate: true
    }
  ), watch(
    [() => c12.selected, () => c12.rowKey, () => c12.selectable, r7],
    ([e17, t10, a6, l5], [j5, q8, G4, C7]) => {
      if (!(i4 || !a6 || !t10)) {
        if (s13 = true, l5 !== C7 && V6(), e17) {
          const h8 = o11 == null ? void 0 : o11.get(getChainValue(e17, t10));
          h8 && (h8.checked = true, u5.value = h8);
        } else
          x12();
        nextTick(() => {
          s13 = false;
        });
      }
    },
    {
      immediate: true
    }
  );
  const U3 = computed(() => {
    var t10, a6;
    const e17 = c12.tree ? (t10 = m6.value) == null ? void 0 : t10.size : (a6 = r7.value) == null ? void 0 : a6.length;
    return e17 && e17 === n8.value.size;
  });
  function B7(e17) {
    var t10, a6;
    e17 ? ((t10 = m6.value) == null || t10.dft((l5) => {
      l5.checked = true, n8.value.add(l5);
    }), d9()) : ((a6 = m6.value) == null || a6.dft((l5) => {
      l5.checked = false;
    }), n8.value.clear(), d9());
  }
  function M8(e17) {
    var t10, a6;
    e17 ? ((t10 = r7.value) == null || t10.forEach((l5) => {
      l5.checked = true, n8.value.add(l5);
    }), d9()) : ((a6 = r7.value) == null || a6.forEach((l5) => {
      l5.checked = false;
    }), n8.value.clear(), d9());
  }
  function W6(e17) {
    c12.tree ? B7(e17) : M8(e17);
  }
  function D4(e17, t10) {
    t10 ? (e17.dft((a6) => {
      a6.checked = t10, n8.value.add(a6);
    }), d9()) : (e17.dft((a6) => {
      a6.checked = t10, n8.value.delete(a6);
    }), d9());
  }
  const N4 = () => T6.value === "large" ? 80 : 60, y5 = p5.e("checkbox"), E11 = (e17) => e17.stopPropagation();
  function F6() {
    return {
      key: "__is_check_column",
      name: "",
      width: N4(),
      align: "center",
      fixed: "left",
      nameRender() {
        const t10 = createVNode(U2, {
          modelValue: U3.value,
          "onUpdate:modelValue": W6
        });
        return c12.tree ? [createVNode("i", {
          text: true,
          class: p5.e("expand-space")
        }), t10] : t10;
      },
      render(t10) {
        const { row: a6 } = t10;
        return createVNode(U2, {
          class: y5,
          modelValue: a6.checked,
          "onUpdate:modelValue": (l5) => {
            D4(a6, l5);
          },
          onClick: E11
        });
      }
    };
  }
  function K6(e17, t10) {
    e17.checked = t10, t10 ? (u5.value && (u5.value.checked = false), u5.value = e17) : u5.value = void 0;
  }
  function P8() {
    const e17 = N4();
    return {
      key: "__is_select_column",
      name: "单选",
      minWidth: e17,
      width: e17,
      align: "center",
      fixed: "left",
      nameRender(t10) {
        return c12.tree ? [createVNode("i", {
          text: true,
          class: p5.e("expand-space")
        }), createTextVNode("单选")] : "单选";
      },
      render({ row: t10 }) {
        return createVNode(U2, {
          class: y5,
          modelValue: t10.checked,
          "onUpdate:modelValue": (a6) => {
            K6(t10, a6);
          },
          onClick: E11
        });
      }
    };
  }
  return {
    createCheckColumn: F6,
    createSelectColumn: P8,
    clearChecked: _10,
    clearSelected: x12
  };
}

// node_modules/ultra-ui/components/table/use-table.js
function S4(d9) {
  const { props: i4, cls: u5 } = d9, a6 = useSlots();
  return {
    /**
     * 获取列插槽VNode
     * @param ctx 列渲染上下文
     */
    getColumnSlotsNode: (e17) => {
      var n8;
      const t10 = e17.column.data, { render: s13, key: o11 } = t10;
      if (s13) return s13(e17);
      const r7 = ((n8 = i4.slots) == null ? void 0 : n8[`column:${o11}`]) ?? a6[`column:${o11}`];
      return r7 ? r7(e17) : e17.val;
    },
    /**
     * 获取表头插槽VNode
     * @param ctx 表头渲染上下文
     */
    getHeaderSlotsNode: (e17) => {
      var n8;
      const t10 = e17.column.data, { nameRender: s13, key: o11 } = t10;
      if (s13) return s13(e17);
      const r7 = ((n8 = i4.slots) == null ? void 0 : n8[`header:${o11}`]) ?? a6[`header:${o11}`];
      return r7 ? r7(e17) : t10.name;
    },
    /**
     * 获取单元格类名
     * @param column 列
     */
    getCellClass: (e17) => {
      const t10 = [u5.e("cell"), e.is(e17.align)];
      return e17.fixed && t10.push(e.is("fixed-" + e17.fixed)), e17.isLastFixed && t10.push(e.is("last-fixed")), e17.isFirstFixed && t10.push(e.is("first-fixed")), t10.join(" ");
    },
    /**
     * 获取单元格上下文
     * @param row 行
     * @param column 列
     */
    getCellCtx: (e17, t10) => {
      const s13 = e17.data, o11 = t10.key ? getChainValue(s13, t10.key) : void 0;
      return {
        row: e17,
        column: t10,
        rowData: s13,
        val: o11,
        model: {
          modelValue: o11,
          "onUpdate:modelValue": (n8) => {
            s13[t10.key] = n8;
          }
        }
      };
    }
  };
}

// node_modules/ultra-ui/venders/table.vue_vue_type_script_setup_true_lang-D9iqJTHE.js
var De = defineComponent({
  name: "Table",
  __name: "table",
  props: {
    size: {},
    data: {},
    columns: {},
    checked: {},
    selected: {},
    checkable: { type: Boolean },
    showIndex: { type: Boolean },
    selectable: { type: Boolean },
    tree: { type: [Boolean, String], default: false },
    slots: {},
    mergeCell: {},
    highlightCurrent: { type: Boolean },
    currentRow: {},
    rowKey: {},
    defaultExpandAll: { type: Boolean },
    textEllipsis: { type: Boolean }
  },
  emits: ["update:checked", "update:selected", "update:data", "update:rows", "update:forest", "row-click", "update:currentRow"],
  setup($12, { expose: T6, emit: N4 }) {
    const o11 = $12, C7 = N4, k6 = useSlots(), l5 = e("table"), { size: R7 } = l([o11], {
      size: "default"
    }), _10 = shallowRef(), {
      rows: s13,
      toggleTreeRowExpand: H4,
      allExpanded: V6,
      toggleAllTreeRowExpand: F6,
      rowForest: A11,
      handleRowClick: D4,
      getRowByData: I4
    } = V2({
      props: o11,
      emit: C7
    }), { createCheckColumn: K6, createSelectColumn: L5, clearChecked: P8, clearSelected: U3 } = X2({
      size: R7,
      props: o11,
      rows: s13,
      rowForest: A11,
      emit: C7,
      cls: l5
    }), v6 = ie2({
      props: o11,
      createCheckColumn: K6,
      createSelectColumn: L5,
      colgroupRef: _10,
      toggleAllTreeRowExpand: F6,
      cls: l5
    }), { allColumns: f11, updateStylesOfColumns: W6 } = v6, { getColumnSlotsNode: O7, getHeaderSlotsNode: j5, getCellClass: q8, getCellCtx: G4 } = S4({
      props: o11,
      cls: l5
    }), d9 = shallowRef(), b10 = j3({
      count: computed(() => s13.value.length),
      scrollEl: computed(() => {
        var t10;
        return ((t10 = d9.value) == null ? void 0 : t10.containerRef) ?? null;
      }),
      estimateSize: () => 48
    }), { virtualList: a6, totalHeight: x12 } = b10, J7 = computed(() => a6.value.length ? x12.value - a6.value[a6.value.length - 1].end + a6.value[0].start : x12.value), h8 = shallowRef();
    watch(
      J7,
      (t10) => {
        h8.value && n3(h8.value, {
          height: `${t10}px`
        });
      },
      { immediate: true }
    );
    const M8 = shallowRef();
    return provide(e4, {
      tableProps: o11,
      tableSlots: k6,
      cls: l5,
      rows: s13,
      columnConfig: v6,
      handleRowClick: D4,
      getColumnSlotsNode: O7,
      getHeaderSlotsNode: j5,
      getCellClass: q8,
      getCellCtx: G4,
      // tipRef,
      toggleTreeRowExpand: H4,
      ...b10
    }), T6({
      el: toRef(() => {
        var t10;
        return (t10 = d9.value) == null ? void 0 : t10.el;
      }),
      clearChecked: P8,
      clearSelected: U3,
      getRowByData: I4
    }), (t10, we3) => (openBlock(), createBlock(unref(fe2), {
      class: normalizeClass([
        unref(l5).b,
        unref(l5).m(unref(R7)),
        unref(e).is("all-expanded", unref(V6)),
        unref(e).is("text-ellipsis", t10.textEllipsis)
      ]),
      ref_key: "scrollRef",
      ref: d9,
      onResize: unref(W6)
    }, {
      default: withCtx(() => [
        createBaseVNode(
          "table",
          {
            class: normalizeClass(unref(l5).e("wrap"))
          },
          [
            createBaseVNode(
              "colgroup",
              {
                ref_key: "colgroupRef",
                ref: _10
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(unref(f11), (r7) => (openBlock(), createElementBlock(
                    "col",
                    {
                      key: r7.key,
                      class: normalizeClass(r7.fixed),
                      style: normalizeStyle({
                        width: unref(f)(r7.width, "px"),
                        minWidth: unref(f)(r7.minWidth, "px")
                      })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              512
              /* NEED_PATCH */
            ),
            createVNode(unref(k2)),
            createVNode(
              A,
              null,
              createSlots({
                default: withCtx(() => [
                  renderSlot(t10.$slots, "body", {
                    columns: unref(f11),
                    rows: unref(s13)
                  })
                ]),
                _: 2
                /* DYNAMIC */
              }, [
                k6.empty ? {
                  name: "empty",
                  fn: withCtx(() => [
                    renderSlot(t10.$slots, "empty")
                  ]),
                  key: "0"
                } : void 0
              ]),
              1024
              /* DYNAMIC_SLOTS */
            ),
            createCommentVNode(" 占用空间，用来撑开表格高度 "),
            createBaseVNode(
              "tbody",
              {
                ref_key: "spaceRef",
                ref: h8,
                style: {
                  width: "1px"
                }
              },
              null,
              512
              /* NEED_PATCH */
            ),
            createVNode(L2, null, {
              default: withCtx(() => [
                renderSlot(t10.$slots, "foot", {
                  columns: unref(f11),
                  rows: unref(s13)
                })
              ]),
              _: 3
              /* FORWARDED */
            })
          ],
          2
          /* CLASS */
        ),
        renderSlot(t10.$slots, "append"),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(l5).e("resizer"))
          },
          null,
          2
          /* CLASS */
        ),
        t10.textEllipsis ? (openBlock(), createBlock(
          unref(Re2),
          {
            key: 0,
            ref_key: "tipRef",
            ref: M8
          },
          null,
          512
          /* NEED_PATCH */
        )) : createCommentVNode("v-if", true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "onResize"]));
  }
});

// node_modules/ultra-ui/venders/batch-edit-list.vue_vue_type_script_setup_true_lang-COx_LJ8k.js
var de3 = defineComponent({
  name: "BatchEditList",
  __name: "batch-edit-list",
  props: {
    slots: {}
  },
  setup(O7) {
    const {
      cls: u5,
      state: a6,
      tableRef: C7,
      props: n8,
      emit: y5,
      featureSets: i4,
      handleCreate: b10,
      handleDelete: $12,
      handleInsertToNext: x12,
      handleInsertToPrev: N4,
      handleInsertChild: B7
    } = inject(t3), E11 = computed(() => omit(n8, [
      "model",
      "columns",
      "cols",
      "readonly",
      "deleteMethod",
      "saveMethod",
      "features",
      "resizable",
      "quickEdit"
    ])), I4 = (r7) => r7.every((t10) => !i4.value.has(t10)), w12 = computed(() => n8.readonly || I4(["create", "delete"]) ? n8.columns : (n8.columns ?? []).concat({
      name: "操作",
      key: "__action__",
      align: "center",
      width: 150,
      fixed: "right"
    })), P8 = P({
      size: "small",
      circle: true,
      text: true,
      type: "primary",
      style: { fontSize: "16px", marginRight: "6px" },
      loading: false
    });
    function R7(r7) {
      i4.value.has("update") && (a6.row = r7);
    }
    return (r7, t10) => (openBlock(), createBlock(unref(S2), {
      class: normalizeClass(unref(u5).e("list"))
    }, {
      default: withCtx(() => [
        r7.slots.header || unref(n8).title ? (openBlock(), createBlock(unref(C2), { key: 0 }, {
          default: withCtx(() => [
            renderSlot(r7.$slots, "default", {}, () => [
              createTextVNode(
                toDisplayString(unref(n8).title),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 3
          /* FORWARDED */
        })) : createCommentVNode("v-if", true),
        createVNode(unref(De), mergeProps(E11.value, {
          slots: r7.slots,
          class: unref(u5).e("table"),
          columns: w12.value,
          "highlight-current": "",
          "current-row": unref(a6).row,
          "onUpdate:currentRow": R7,
          "onUpdate:checked": t10[1] || (t10[1] = (o11) => unref(y5)("update:checked", o11)),
          "onUpdate:selected": t10[2] || (t10[2] = (o11) => unref(y5)("update:selected", o11)),
          ref_key: "tableRef",
          ref: C7
        }), createSlots({
          "column:__action__": withCtx(({ row: o11 }) => [
            createVNode(unref(P8), {
              tag: "div",
              onClick: t10[0] || (t10[0] = withModifiers(() => {
              }, ["stop"])),
              loading: o11.operating
            }, {
              default: withCtx(() => [
                unref(i4).has("create") ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    createVNode(unref(M), {
                      onClick: (f11) => unref(N4)(o11),
                      icon: unref(InsertToPrev_default),
                      title: "插入到上一行"
                    }, null, 8, ["onClick", "icon"]),
                    createVNode(unref(M), {
                      onClick: (f11) => unref(x12)(o11),
                      icon: unref(InsertToNext_default),
                      title: "插入到下一行"
                    }, null, 8, ["onClick", "icon"]),
                    unref(n8).tree ? (openBlock(), createBlock(unref(M), {
                      key: 0,
                      onClick: (f11) => unref(B7)(o11),
                      icon: unref(add_child_default),
                      title: "添加子项"
                    }, null, 8, ["onClick", "icon"])) : createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                unref(i4).has("delete") ? (openBlock(), createBlock(unref(M), {
                  key: 1,
                  icon: unref(delete_default),
                  type: "danger",
                  title: "删除",
                  onClick: (f11) => unref($12)(o11)
                }, null, 8, ["icon", "onClick"])) : createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["loading"])
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          unref(n8).readonly ? void 0 : {
            name: "empty",
            fn: withCtx(() => [
              t10[3] || (t10[3] = createTextVNode(toDisplayString(null)))
            ]),
            key: "0"
          },
          !unref(n8).readonly && unref(i4).has("create") && (unref(n8).quickEdit || unref(a6).type === "create" && !unref(a6).visible || unref(a6).type === "update") ? {
            name: "append",
            fn: withCtx(() => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(u5).e("add"))
                },
                [
                  createVNode(unref(M), {
                    plain: "",
                    type: "primary",
                    onClick: unref(b10),
                    loading: unref(a6).loading
                  }, {
                    default: withCtx(() => t10[4] || (t10[4] = [
                      createBaseVNode(
                        "span",
                        { style: { position: "sticky", left: "50%", transform: "translateX(-50%)" } },
                        " 新增 ",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick", "loading"])
                ],
                2
                /* CLASS */
              ),
              createCommentVNode(` <tr>\r
          <td :colspan="columns.length" :class="cls.e('add')">\r
            <u-button\r
              plain\r
              type="primary"\r
              @click="handleCreate"\r
              :loading="state.loading"\r
            >\r
              <span\r
                style="position: sticky; left: 50%; transform: translateX(-50%)"\r
              >\r
                新增\r
              </span>\r
            </u-button>\r
          </td>\r
        </tr> `)
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["slots", "class", "columns", "current-row"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/components/grid/di.js
var e5 = Symbol("GridDIKey");

// node_modules/ultra-ui/components/grid/breakpoint.js
var r4 = [
  [578, "xs"],
  [960, "sm"],
  [1280, "md"],
  [1920, "lg"],
  [1 / 0, "xl"]
];
function c4(e17) {
  for (let t10 = 0; t10 < r4.length; t10++) {
    const n8 = r4[t10];
    if (e17 < n8[0])
      return {
        name: n8[1],
        level: t10 + 1
      };
  }
  return {
    name: "xl",
    level: 5
  };
}
function f4(e17, t10) {
  if (!t10) return 24;
  const { name: n8, level: l5 } = t10, o11 = e17[n8];
  if (o11 !== void 0) return o11;
  if (l5 === 5) return e17.default ?? 24;
  const s13 = r4.slice(l5 - 1);
  for (let i4 = 0; i4 < s13.length; i4++) {
    const u5 = s13[i4][1];
    if (e17[u5])
      return e17[u5];
  }
  return 24;
}

// node_modules/ultra-ui/components/grid/use-responsive.js
function q3(p5) {
  const { props: r7, gridRef: t10, emit: s13 } = p5, c12 = shallowReactive(/* @__PURE__ */ new Set()), u5 = computed(() => r7.cols && typeof r7.cols != "number" || !!c12.size), n8 = shallowRef();
  let e17;
  return watch(
    [u5, t10],
    ([l5, o11]) => {
      o11 && (l5 && !e17 ? (e17 = new ResizeObserver(
        debounce(([f11]) => {
          const a6 = f11.target, m6 = a6.getBoundingClientRect();
          s13("resize", m6);
          const i4 = c4(a6.offsetWidth);
          equal(n8.value, i4) || (n8.value = i4, s13("breakpoint-change", i4));
        }, 0)
      ), e17.observe(o11)) : (e17 == null || e17.unobserve(o11), e17 == null || e17.disconnect(), e17 = void 0));
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    t10.value && (e17 == null || e17.unobserve(t10.value)), e17 == null || e17.disconnect();
  }), {
    responsive: u5,
    gridItemsProps: c12,
    currentBreakpoint: n8
  };
}

// node_modules/ultra-ui/venders/grid.vue_vue_type_script_setup_true_lang-MD4ac91l.js
var A4 = defineComponent({
  name: "Grid",
  __name: "grid",
  props: {
    cols: {},
    tag: { default: "div" },
    gap: {}
  },
  emits: ["resize", "breakpoint-change"],
  setup(p5, { expose: m6, emit: l5 }) {
    const a6 = p5, c12 = l5, f11 = e("grid"), r7 = shallowRef(), { currentBreakpoint: n8, gridItemsProps: u5 } = q3({
      props: a6,
      emit: c12,
      gridRef: r7
    });
    return watchEffect(() => {
      const { gap: e17, cols: o11 } = a6, i4 = n8.value, t10 = {};
      if (typeof e17 == "number")
        e17 > 0 && (t10.columnGap = e17 + "px");
      else if (typeof e17 == "string") {
        const [s13, d9] = e17.split(" ");
        t10.columnGap = f(d9, "px"), t10.rowGap = s13;
      }
      if (!o11)
        delete t10.gridTemplateColumns;
      else
        switch (typeof o11) {
          case "number":
            t10.gridTemplateColumns = `repeat(${o11}, minmax(0px, 1fr))`;
            break;
          case "function":
            t10.gridTemplateColumns = `repeat(${o11(i4)}, minmax(0px, 1fr))`;
            break;
          case "object":
            const s13 = f4(o11, i4);
            t10.gridTemplateColumns = `repeat(${s13}, minmax(0px, 1fr))`;
        }
      r7.value && n3(r7.value, t10);
    }), provide(e5, {
      currentBreakpoint: n8,
      gridItemsProps: u5
    }), m6({
      el: r7
    }), (e17, o11) => (openBlock(), createBlock(resolveDynamicComponent(e17.tag), {
      class: normalizeClass(unref(f11).b),
      ref_key: "gridRef",
      ref: r7
    }, {
      default: withCtx(() => [
        renderSlot(e17.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/components/form/use-node-interceptor.js
var S5 = ["label", "field", "span", "tips", "readonly"];
var V3 = t2(1);
function _5(I4) {
  const { props: s13 } = I4, n8 = useSlots(), i4 = V3();
  function h8() {
    var a6;
    const { model: t10 } = s13, o11 = (a6 = n8.default) == null ? void 0 : a6.call(n8, {
      model: t10,
      data: t10 == null ? void 0 : t10.data
    });
    if (!(o11 != null && o11.length)) return null;
    const d9 = l2(o11), f11 = [], c12 = [];
    let l5 = 0;
    for (; l5 < d9.length; ) {
      const u5 = d9[l5];
      l5++;
      const { props: e17, type: r7 } = u5, m6 = {
        isFormItem: !!(e17 != null && e17.field) && (r7 == null ? void 0 : r7.name) !== "FormItem",
        formItemProps: pick(e17 ?? {}, S5),
        node: u5,
        field: e17 == null ? void 0 : e17.field,
        modelValue: (e17 == null ? void 0 : e17["model-value"]) ?? (e17 == null ? void 0 : e17.modelValue)
      };
      m6.field && c12.push(m6.field), f11.push(m6);
    }
    return t10.formKeys.set(i4, c12), f11;
  }
  return onBeforeUnmount(() => {
    var t10;
    (t10 = s13.model) == null || t10.formKeys.delete(i4);
  }), {
    getSlotsNodes: h8
  };
}

// node_modules/ultra-ui/venders/grid-item.vue_vue_type_script_setup_true_lang-C6A_RKPB.js
var $5 = defineComponent({
  name: "GridItem",
  __name: "grid-item",
  props: {
    span: {},
    tag: { default: "div" }
  },
  setup(i4) {
    const n8 = i4, s13 = e("grid-item"), { currentBreakpoint: r7, gridItemsProps: t10 } = inject(e5) ?? {};
    r7 || console.error("GridItem组件仅能在Grid组件中使用");
    const o11 = computed(() => {
      let { span: e17 } = n8;
      if (e17 === void 0) return 1;
      if (e17 === "full") return "full";
      if (typeof e17 == "number") return e17;
      const l5 = r7 == null ? void 0 : r7.value;
      return l5 ? e17[l5.name] ?? e17.default : e17.default;
    }), u5 = computed(() => ({
      gridColumn: o11.value === "full" ? "1 / -1" : `span ${o11.value}`
    }));
    return watch(
      () => n8.span,
      (e17) => {
        typeof e17 == "object" ? t10 == null || t10.add(n8) : t10 == null || t10.delete(n8);
      },
      { immediate: true }
    ), (e17, l5) => o11.value !== 0 ? (openBlock(), createBlock(resolveDynamicComponent(e17.tag), {
      key: 0,
      style: normalizeStyle(u5.value),
      class: normalizeClass(unref(s13).b)
    }, {
      default: withCtx(() => [
        renderSlot(e17.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["style", "class"])) : createCommentVNode("v-if", true);
  }
});

// node_modules/ultra-ui/venders/form-item.vue_vue_type_script_setup_true_lang-Dszw9G2a.js
var Q2 = defineComponent({
  name: "FormItem",
  __name: "form-item",
  props: {
    labelWidth: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: {
      type: Boolean
    },
    readonly: {
      type: Boolean,
      default: void 0
    },
    size: {}
  },
  setup(C7) {
    const o11 = C7, s13 = e("form-item"), {
      formProps: l5
    } = i2(), {
      config: $12
    } = d2(), {
      size: q8,
      readonly: b10
    } = l([l5 ?? {}, o11], {
      size: "default",
      readonly: false
    }), z5 = computed(() => [s13.b, s13.m(q8.value), e.is("error", !!n8.value)].join(" ")), B7 = computed(() => ({
      width: f(o11.labelWidth ?? (l5 == null ? void 0 : l5.labelWidth) ?? $12.form.labelWidth, "px")
    })), n8 = computed(() => {
      var e17;
      if (o11.field)
        return (e17 = l5 == null ? void 0 : l5.model.errors.get(o11.field)) == null ? void 0 : e17[0];
    }), N4 = computed(() => {
      var y5, v6;
      const {
        field: e17
      } = o11;
      return !e17 || b10.value ? false : !!((v6 = (y5 = l5 == null ? void 0 : l5.model) == null ? void 0 : y5.fields[e17]) == null ? void 0 : v6.required);
    });
    return (e17, g10) => (openBlock(), createBlock(unref($5), {
      span: e17.span,
      class: normalizeClass(z5.value)
    }, {
      default: withCtx(() => [o11.label || e17.$slots.label ? (openBlock(), createElementBlock(
        "label",
        {
          key: 0,
          class: normalizeClass([unref(s13).e("label"), unref(e).is("required", N4.value)]),
          style: normalizeStyle(B7.value)
        },
        [e17.tips ? (openBlock(), createBlock(unref(Re2), {
          key: 0,
          content: e17.tips,
          class: normalizeClass(unref(s13).e("tips"))
        }, {
          default: withCtx(() => [createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(s13).e("tip-label"))
            },
            [renderSlot(e17.$slots, "label", {}, () => [createTextVNode(
              toDisplayString(e17.label) + ":",
              1
              /* TEXT */
            )])],
            2
            /* CLASS */
          )]),
          _: 3
          /* FORWARDED */
        }, 8, ["content", "class"])) : renderSlot(e17.$slots, "label", {
          key: 1
        }, () => [createTextVNode(
          toDisplayString(e17.label) + ":",
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true), createBaseVNode(
        "section",
        {
          class: normalizeClass(unref(s13).e("content"))
        },
        [renderSlot(e17.$slots, "default"), unref(b10) ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "section",
          {
            key: 0,
            class: normalizeClass(unref(s13).e("error"))
          },
          [createVNode(Transition, {
            name: "form-item-tips",
            mode: "out-in"
          }, {
            default: withCtx(() => [n8.value ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(unref(s13).e("error-text"))
              },
              toDisplayString(n8.value),
              3
              /* TEXT, CLASS */
            )) : createCommentVNode("v-if", true)]),
            _: 1
            /* STABLE */
          })],
          2
          /* CLASS */
        ))],
        2
        /* CLASS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["span", "class"]));
  }
});

// node_modules/ultra-ui/venders/form.vue_vue_type_script_setup_true_lang-paUNnT3z.js
var K4 = defineComponent({
  name: "Form",
  __name: "form",
  props: {
    model: {},
    labelWidth: {},
    noTips: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    size: {}
  },
  setup(k6, { expose: C7 }) {
    const l5 = k6, n8 = toRef(() => l5.model), g10 = e("form"), h8 = { xs: 1, sm: 2, xl: 3, default: 4 };
    i2(l5);
    const { getSlotsNodes: v6 } = _5({ props: l5 });
    function B7(e17, s13) {
      const { data: o11 } = n8.value ?? {};
      o11 && setChainValue(o11, e17, s13);
    }
    const m6 = shallowRef();
    return C7({
      el: toRef(() => {
        var e17;
        return (e17 = m6.value) == null ? void 0 : e17.el;
      })
    }), (e17, s13) => (openBlock(), createBlock(unref(A4), {
      tag: "form",
      ref_key: "gridRef",
      ref: m6,
      cols: h8,
      class: normalizeClass([unref(g10).b, unref(e).is("readonly", e17.readonly)])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(v6)(), ({
            node: o11,
            isFormItem: b10,
            formItemProps: x12,
            field: p5,
            modelValue: V6
          }) => (openBlock(), createElementBlock(
            Fragment,
            {
              key: o11.key
            },
            [
              b10 ? (openBlock(), createBlock(
                unref(Q2),
                mergeProps({
                  key: 0,
                  ref_for: true
                }, x12),
                {
                  default: withCtx(() => {
                    var i4;
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(o11), {
                        "model-value": V6 ?? unref(getChainValue)(((i4 = n8.value) == null ? void 0 : i4.data) ?? {}, p5),
                        "onUpdate:modelValue": (R7) => B7(p5, R7)
                      }, null, 8, ["model-value", "onUpdate:modelValue"]))
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )) : (openBlock(), createBlock(resolveDynamicComponent(o11), { key: 1 }))
            ],
            64
            /* STABLE_FRAGMENT */
          ))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/venders/card-action.vue_vue_type_script_setup_true_lang-Bqr3CojV.js
var v2 = defineComponent({
  name: "CardAction",
  __name: "card-action",
  props: {
    alignRight: { type: Boolean }
  },
  setup(n8) {
    const o11 = n8, r7 = computed(() => ({
      textAlign: o11.alignRight ? "right" : void 0
    })), e17 = inject(e3), { cls: a6 } = e17 || {};
    return e17 || console.warn("CardAction组件仅能在Card组件中使用"), (c12, _10) => {
      var t10;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass((t10 = unref(a6)) == null ? void 0 : t10.e("action")),
          style: normalizeStyle(r7.value)
        },
        [
          renderSlot(c12.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

// node_modules/ultra-ui/venders/batch-edit-form.vue_vue_type_script_setup_true_lang-D1PREsc1.js
var M2 = defineComponent({
  name: "BatchEditForm",
  __name: "batch-edit-form",
  setup(P8) {
    const { cls: d9, props: o11, state: a6, insertIndexes: k6, handleSave: c12, handleClose: w12 } = inject(t3);
    return (g10, f11) => unref(a6).visible && unref(o11).model ? (openBlock(), createBlock(unref(S2), {
      key: 0,
      class: normalizeClass(unref(d9).e("form"))
    }, {
      default: withCtx(() => [
        createVNode(unref(C2), null, {
          default: withCtx(() => [
            unref(o11).readonly ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                createTextVNode("详情")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : unref(a6).parentRow ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode("新增子级")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : unref(a6).type === "create" ? (openBlock(), createElementBlock(
              Fragment,
              { key: 2 },
              [
                createTextVNode("新增")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : unref(a6).type === "update" ? (openBlock(), createElementBlock(
              Fragment,
              { key: 3 },
              [
                createTextVNode("编辑")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(Transition, {
          name: "fade",
          appear: "",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            createVNode(unref(fe2), {
              always: "",
              class: normalizeClass(unref(d9).e("form-wrap"))
            }, {
              default: withCtx(() => [
                createVNode(unref(K4), {
                  model: unref(o11).model,
                  readonly: unref(o11).readonly,
                  onKeyup: withKeys(unref(c12), ["enter"]),
                  "label-width": unref(o11).labelWidth
                }, {
                  default: withCtx(({ data: h8, model: C7 }) => {
                    var _10;
                    return [
                      renderSlot(g10.$slots, "default", normalizeProps(guardReactiveProps({
                        data: h8,
                        model: C7,
                        row: unref(a6).row,
                        indexes: unref(k6),
                        index: (_10 = unref(a6).row) == null ? void 0 : _10.index
                      })))
                    ];
                  }),
                  _: 3
                  /* FORWARDED */
                }, 8, ["model", "readonly", "onKeyup", "label-width"])
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["class"])
          ]),
          _: 3
          /* FORWARDED */
        }),
        createVNode(unref(v2), {
          class: normalizeClass(unref(d9).e("action"))
        }, {
          default: withCtx(() => [
            createVNode(unref(M), {
              text: "",
              type: "primary",
              loading: unref(a6).loading,
              onClick: unref(w12)
            }, {
              default: withCtx(() => f11[0] || (f11[0] = [
                createTextVNode(" 关闭 ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["loading", "onClick"]),
            !unref(o11).readonly && !unref(o11).quickEdit && unref(a6).dataUpdated ? (openBlock(), createBlock(unref(M), {
              key: 0,
              type: unref(a6).type === "create" ? "success" : "primary",
              loading: unref(a6).loading,
              onClick: unref(c12),
              plain: ""
            }, {
              default: withCtx(() => [
                createTextVNode(
                  " 确认" + toDisplayString(unref(a6).type === "create" ? "新增" : "修改"),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["type", "loading", "onClick"])) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"])) : createCommentVNode("v-if", true);
  }
});

// node_modules/ultra-ui/venders/batch-edit.vue_vue_type_script_setup_true_lang-Cn0NsWXu.js
var oe4 = defineComponent({
  name: "BatchEdit",
  __name: "batch-edit",
  props: {
    resizable: { type: Boolean, default: true },
    model: {},
    quickEdit: { type: Boolean },
    title: {},
    cols: { default: () => ["1fr", "400px"] },
    readonly: { type: Boolean },
    labelWidth: {},
    deleteMethod: {},
    saveMethod: {},
    features: {},
    size: {},
    data: {},
    columns: {},
    checked: {},
    selected: {},
    checkable: { type: Boolean },
    showIndex: { type: Boolean },
    selectable: { type: Boolean },
    tree: { type: [Boolean, String] },
    slots: {},
    mergeCell: {},
    highlightCurrent: { type: Boolean },
    currentRow: {},
    rowKey: {},
    defaultExpandAll: { type: Boolean },
    textEllipsis: { type: Boolean }
  },
  emits: ["update:data", "update:checked", "update:selected", "update:rows", "update:forest", "row-click", "update:currentRow"],
  setup(h8, { emit: y5 }) {
    const t10 = h8, s13 = y5, _10 = computed(() => new Set(
      t10.features ?? ["create", "delete", "update"]
    )), l5 = useSlots(), i4 = e("batch-edit"), n8 = shallowRef(), o11 = L({
      props: t10,
      emit: s13,
      tableRef: n8
    }), { state: c12, handleClose: b10 } = o11;
    provide(t3, {
      cls: i4,
      props: t10,
      emit: s13,
      tableRef: n8,
      featureSets: _10,
      ...o11
    });
    const p5 = inject(o7, void 0);
    p5 && watch(p5.visible, (e17) => {
      !e17 && o11.handleClose();
    });
    const B7 = computed(() => c12.row || c12.visible ? t10.cols : void 0);
    return (e17, A11) => (openBlock(), createBlock(unref(Y2), {
      class: normalizeClass(unref(i4).b),
      cols: B7.value,
      rows: "100%",
      gap: "8px",
      resizable: e17.resizable,
      onKeyup: withKeys(unref(b10), ["esc"])
    }, {
      default: withCtx(() => [
        createVNode(de3, { slots: l5 }, {
          default: withCtx(() => [
            l5.header ? renderSlot(e17.$slots, "header", { key: 0 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
          /* FORWARDED */
        }),
        createVNode(M2, null, {
          default: withCtx((w12) => [
            createCommentVNode(" @vue-ignore "),
            renderSlot(e17.$slots, "form", normalizeProps(guardReactiveProps(w12)))
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "cols", "resizable", "onKeyup"]));
  }
});

// node_modules/ultra-ui/components/batch-edit/helper.js
function t5(n8) {
  return n8;
}

// node_modules/ultra-ui/venders/button-group.vue_vue_type_script_setup_true_lang-B2qX9qDM.js
var b3 = defineComponent({
  name: "ButtonGroup",
  __name: "button-group",
  props: {
    type: {},
    text: { type: Boolean },
    plain: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {},
    circle: { type: Boolean },
    disabled: { type: Boolean },
    icon: {},
    iconSize: {},
    iconPosition: {},
    size: {}
  },
  setup(o11) {
    const e17 = o11, n8 = e("button-group");
    return (t10, d9) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(n8).b)
      },
      [
        renderSlot(t10.$slots, "default", normalizeProps(guardReactiveProps({ props: e17 })))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/calendar/utils.js
var g2 = ["日", "一", "二", "三", "四", "五", "六"];
function M3(t10, n8) {
  const c12 = date().format();
  (t10 instanceof Date || typeof t10 == "string" || typeof t10 == "number") && (t10 = date(t10)), t10.setDay(1);
  const m6 = Array.from({ length: t10.getDays() }).map(
    (r7, s13) => {
      const h8 = {
        date: t10.calc(s13, "days"),
        type: "current"
      };
      return h8.isToday = h8.date.format() === c12, h8.disabled = n8 == null ? void 0 : n8(h8.date), h8;
    }
  ), y5 = [], o11 = [], f11 = t10.weekDay;
  if (f11 !== 0) {
    t10.setDay(0);
    let r7 = 0;
    for (; r7 < f11; ) {
      const s13 = {
        date: t10.calc(-r7, "days"),
        type: "pre"
      };
      s13.disabled = n8 == null ? void 0 : n8(s13.date), y5.unshift(s13), r7++;
    }
  }
  const u5 = 42 - m6.length - y5.length;
  let p5 = 0;
  for (t10.setMonth(t10.month + 2).setDay(1); p5 < u5; ) {
    const r7 = {
      date: t10.calc(p5++, "days"),
      type: "next"
    };
    r7.disabled = n8 == null ? void 0 : n8(r7.date), o11.push(r7);
  }
  return [...y5, ...m6, ...o11];
}
function k4(t10, n8) {
  (t10 instanceof Date || typeof t10 == "string" || typeof t10 == "number") && (t10 = date(t10));
  const c12 = t10.year;
  return Array.from({ length: 12 }).map((m6, y5) => {
    const o11 = y5 + 1, f11 = `${c12}-${o11}`;
    return {
      key: f11,
      month: o11,
      disabled: n8 == null ? void 0 : n8(date(f11).toEndOfMonth())
    };
  });
}
function w3(t10, n8) {
  (t10 instanceof Date || typeof t10 == "string" || typeof t10 == "number") && (t10 = date(t10));
  const c12 = t10.year - t10.year % 10 + 1;
  return Array.from({ length: 10 }).map((m6, y5) => {
    const o11 = c12 + y5;
    return {
      year: o11,
      disabled: n8 == null ? void 0 : n8(date(`${o11}-12-31 23:59:59`))
    };
  });
}

// node_modules/ultra-ui/venders/calendar.vue_vue_type_script_setup_true_lang-Brq7U7_X.js
var x5 = defineComponent({
  name: "Calendar",
  __name: "calendar",
  props: mergeModels({
    modelValue: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(m6) {
    const n8 = useModel(m6, "modelValue"), e17 = e("calendar"), s13 = computed(() => M3(n8.value ?? /* @__PURE__ */ new Date()));
    return (M8, k6) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(e17).b)
      },
      [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass(unref(e17).e("days"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(s13.value, (a6) => (openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass([unref(e17).e("day"), unref(e17).em("day", a6.type)]),
                  key: a6.date.timestamp
                },
                toDisplayString(a6.date.day),
                3
                /* TEXT, CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/card-cover.vue_vue_type_script_setup_true_lang-CdZMBmSj.js
var _6 = ["src"];
var B3 = defineComponent({
  name: "CardCover",
  __name: "card-cover",
  props: {
    src: {},
    height: {}
  },
  setup(a6) {
    const e17 = a6, r7 = inject(e3), { cls: m6 } = r7 || {};
    r7 || console.warn("CardCover组件仅能在Card组件中使用");
    const l5 = computed(() => ({
      height: f(e17.height, "px")
    }));
    return (o11, y5) => {
      var t10;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass((t10 = unref(m6)) == null ? void 0 : t10.e("cover")),
          style: normalizeStyle(l5.value)
        },
        [
          o11.src ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: o11.src,
            draggable: "false",
            alt: "封面",
            class: normalizeClass(unref(e).is("height-fixed", e17.height !== void 0))
          }, null, 10, _6)) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

// node_modules/ultra-ui/venders/card-content.vue_vue_type_script_setup_true_lang-CChWWTKy.js
var B4 = defineComponent({
  name: "CardContent",
  __name: "card-content",
  props: {
    cover: { type: Boolean }
  },
  setup(o11) {
    const t10 = o11, r7 = computed(() => t10.cover ? {
      padding: 0,
      fontSize: 0
    } : void 0), e17 = inject(e3), { cls: c12 } = e17 || {};
    return e17 || console.warn("CardContent组件仅能在Card组件中使用"), (a6, v6) => {
      var n8;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass((n8 = unref(c12)) == null ? void 0 : n8.e("content")),
          style: normalizeStyle(r7.value)
        },
        [
          renderSlot(a6.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

// node_modules/ultra-ui/components/cascade/di.js
var e6 = Symbol("CascadeDIKey");

// node_modules/ultra-ui/components/cascade/use-select.js
function w4(u5) {
  const { emit: i4, props: s13, nodeDict: o11, forest: p5 } = u5, a6 = shallowReactive(/* @__PURE__ */ new Set());
  let c12 = false;
  const h8 = (e17) => {
    let r7 = e17;
    const t10 = /* @__PURE__ */ new Set();
    for (; r7.parent; )
      r7 = r7.parent, r7.selected = true, t10.add(r7.data);
    return t10;
  }, l5 = (e17) => {
    var r7;
    e17.parent && ((r7 = e17.parent.children) == null || r7.forEach((t10) => {
      t10 !== e17 && (t10.selected = false, a6.delete(t10.data));
    }));
  };
  return watch(
    () => [s13.modelValue, p5.value.nodes],
    ([e17, r7]) => {
      if ((e17 == null ? void 0 : e17.length) === void 0) {
        a6.clear();
        return;
      }
      s13.multiple || c12 && a6.size !== 0 || (r7.forEach((t10) => {
        Tree.bft(t10, (d9) => {
          e17 != null && e17.includes(d9.data[s13.valueKey]) && (a6.add(d9.data), c12 = false, l5(d9));
        });
      }), nextTick(() => {
        c12 = true;
      }));
    },
    {
      immediate: true
    }
  ), watch(
    a6,
    (e17) => {
      if (s13.multiple || !c12) return;
      c12 = false;
      let r7 = Array.from(e17);
      i4(
        "update:modelValue",
        e17.size === 0 ? void 0 : r7.map((t10) => t10[s13.valueKey])
      ), i4(
        "change",
        r7.map((t10) => t10[s13.valueKey]),
        r7.map((t10) => t10[s13.labelKey]),
        r7
      ), nextTick(() => {
        c12 = true;
      });
    },
    {
      immediate: true
    }
  ), {
    selected: a6,
    handleSelect: (e17) => {
      if (c12 = true, e17.disabled) return;
      l5(e17), a6.forEach((t10) => {
        const d9 = o11.value.get(t10[s13.valueKey]);
        d9 && d9.depth > e17.depth && (d9.selected = false, a6.delete(t10));
      }), e17.selected = true, a6.add(e17.data), h8(e17).forEach((t10) => {
        t10 !== void 0 && a6.add(t10);
      });
    }
  };
}

// node_modules/ultra-ui/components/cascade/use-check.js
function w5(u5) {
  const { emit: f11, props: l5, nodeDict: m6, forest: p5 } = u5, i4 = shallowReactive(/* @__PURE__ */ new Set());
  let c12 = false;
  watch(
    [() => l5.modelValue, m6],
    ([r7, d9], [t10]) => {
      l5.multiple && (c12 && i4.size !== 0 || p5.value.size !== 0 && (t10 == null || t10.forEach((e17) => {
        const a6 = d9.get(e17);
        a6.checked = false, i4.delete(a6.data);
      }), r7 == null || r7.forEach((e17) => {
        const a6 = d9.get(e17);
        a6 && (i4.add(a6.data), a6.checked = true);
      }), nextTick(() => {
        c12 = true;
      })));
    },
    {
      immediate: true
    }
  ), watch(
    i4,
    (r7) => {
      if (!l5.multiple || !c12) return;
      c12 = false;
      const d9 = Array.from(r7);
      f11(
        "update:modelValue",
        r7.size === 0 ? void 0 : d9.map((t10) => t10[l5.valueKey])
      ), f11(
        "change",
        d9.map((t10) => t10[l5.valueKey]),
        d9.map((t10) => t10[l5.labelKey]),
        d9
      ), nextTick(() => {
        c12 = true;
      });
    },
    {
      immediate: true
    }
  );
  function o11(r7, d9) {
    c12 = true;
    const { checkStrictly: t10 } = l5;
    if (d9) {
      if (Tree.dft(r7, (e17) => {
        e17.disabled || (e17.checked = true, i4.add(e17.data));
      }), !t10) {
        let e17 = r7.parent;
        for (; e17 && e17.depth > 0; )
          e17.checked = e17.children.every((a6) => a6.checked), e17.checked ? (e17.indeterminate = false, i4.add(e17.data)) : e17.indeterminate = true, e17 = e17.parent;
      }
    } else if (Tree.dft(r7, (e17) => {
      e17.checked = false, e17.indeterminate = false, i4.delete(e17.data);
    }), !t10) {
      let e17 = r7.parent;
      for (; e17 && e17.depth > 0; )
        e17.checked = false, i4.delete(e17.data), e17.indeterminate = e17.children.some((a6) => a6.indeterminate) || e17.children.some((a6) => a6.checked), e17 = e17.parent;
    }
    nextTick(() => {
      c12 = false;
    });
  }
  return {
    checked: i4,
    handleCheck: o11
  };
}

// node_modules/ultra-ui/venders/cascade-node.vue_vue_type_script_setup_true_lang-BbNidoHO.js
var de4 = ["data-key", "data-depth", "onClick"];
var Ce = defineComponent({
  name: "CascadeNode",
  __name: "cascade-node",
  props: {
    cascadeData: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    size: {}
  },
  setup(I4) {
    const p5 = I4, U3 = inject(e6), {
      cls: o11,
      cascadeProps: v6,
      size: j5,
      close: F6,
      updatePosition: L5,
      handleSelect: P8,
      handleCheck: T6,
      cascade: _10
    } = U3, { labelKey: k6, valueKey: y5, childrenKey: u5, multiple: i4 } = v6, r7 = ref([1]), d9 = ref([]), C7 = shallowRef([]);
    let N4 = true;
    const b10 = (e17, l5) => l5.parentNodes === "" || r7.value.includes(e17) && d9.value.includes(l5.parentNodes), D4 = (e17, l5) => {
      !e17.includes(l5) && l5 && e17.push(l5);
    }, q8 = (e17) => {
      e17.disabled || (N4 = false, e17[u5] === void 0 || !e17[u5].length ? !i4 && F6() : (e17.depth === 1 ? (d9.value = [], r7.value = [1, 2]) : d9.value.splice(e17.depth - 1, 1), r7.value = [...r7.value, e17.depth + 1], d9.value = [...d9.value, e17.data[y5]], nextTick(() => {
        L5();
      }), g10()), !i4 && P8(e17));
    }, g10 = () => {
      var e17;
      (e17 = p5.cascadeData) == null || e17.some((l5) => {
        l5.forEach((c12) => {
          c12.selected = false;
        });
      });
    }, A11 = (e17) => {
      var c12;
      let l5 = [];
      r7.value = [1], d9.value = [], (c12 = p5.cascadeData) == null || c12.some((s13) => {
        s13.forEach((a6) => {
          e17.includes(a6.data[y5]) && l5.push(a6);
        });
      }), l5.forEach((s13, a6) => {
        i4 ? s13.checked = true : s13.selected = true, D4(d9.value, s13.parentNodes), D4(r7.value, a6 + 1), b10(a6, s13);
      });
    };
    return watch(
      () => _10.value,
      (e17) => {
        if (e17 === "") {
          g10();
          return;
        }
        e17 && N4 && A11(v6.modelValue);
      },
      { immediate: true }
    ), watch(
      [C7, _10],
      ([e17, l5]) => {
        e17 && l5 && n5(() => {
          e17.forEach((c12, s13) => {
            const a6 = c12.containerRef.getElementsByClassName(
              i4 ? "is-checked" : "is-selected"
            )[0];
            a6 == null || a6.scrollIntoView({ block: "nearest", inline: "start" });
          });
        });
      },
      {
        immediate: true
      }
    ), (e17, l5) => (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(e17.cascadeData, (c12, s13) => withDirectives((openBlock(), createBlock(unref(fe2), {
        tag: "ul",
        class: normalizeClass([unref(o11).e("options"), unref(o11).m(unref(j5))]),
        ref_for: true,
        ref_key: "scrollRef",
        ref: C7
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(c12, (a6, G4) => withDirectives((openBlock(), createElementBlock("li", {
              class: normalizeClass([
                unref(o11).e("option"),
                unref(e).is("selected", a6.selected),
                unref(e).is("checked", a6.checked),
                unref(e).is("disabled", a6.disabled)
              ]),
              "data-key": a6.data[unref(k6)],
              "data-depth": a6.depth,
              onClick: (w12) => q8(a6)
            }, [
              renderSlot(e17.$slots, "default", {
                option: a6,
                index: G4
              }, () => [
                createBaseVNode("div", null, [
                  unref(i4) ? (openBlock(), createBlock(unref(U2), {
                    key: 0,
                    "model-value": a6.checked,
                    indeterminate: a6.indeterminate,
                    "onUpdate:modelValue": (w12) => unref(T6)(a6, w12)
                  }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])) : createCommentVNode("v-if", true),
                  createTextVNode(
                    " " + toDisplayString(a6.data[unref(k6)]),
                    1
                    /* TEXT */
                  )
                ]),
                a6[unref(u5)] && a6[unref(u5)].length ? (openBlock(), createBlock(unref(k), { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true)
              ])
            ], 10, de4)), [
              [vShow, b10(s13, a6)],
              [unref(T), a6.disabled ? false : unref(o11).e("ripple")]
            ])),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["class"])), [
        [vShow, r7.value.includes(s13 + 1)]
      ])),
      256
      /* UNKEYED_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/venders/cascade-multi.vue_vue_type_script_setup_true_lang-481l_oHI.js
var ae3 = defineComponent({
  name: "CascadeMulti",
  __name: "cascade-multi",
  setup(O7) {
    const w12 = inject(e6), {
      cls: o11,
      cascadeProps: _10,
      cascadeMulti: t10,
      disabled: c12,
      readonly: h8,
      hovered: x12,
      size: D4,
      clear: N4,
      remove: V6
    } = w12, { placeholder: z5, clearable: B7 } = _10, u5 = () => {
      var d9;
      let { visibilityLimit: l5 } = _10;
      if (l5)
        return l5 < 0 && (l5 = 0), (c12.value || h8.value) && (l5 = ((d9 = t10.value) == null ? void 0 : d9.length) ?? 0), l5;
    }, M8 = computed(() => t10.value.length > u5() ? t10.value.slice(0, u5()) : t10.value), C7 = computed(() => t10.value.length > u5() ? t10.value.length - u5() : 0), T6 = (l5) => {
      V6(l5);
    }, $12 = () => {
      N4();
    };
    return (l5, d9) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(o11).e("multi"), unref(o11).m(unref(D4)), unref(e).is("disabled", unref(c12))])
      },
      [
        createCommentVNode(" 默认展示 "),
        withDirectives(createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(o11).e("placeholder"))
          },
          toDisplayString(unref(z5)),
          3
          /* TEXT, CLASS */
        ), [
          [vShow, !unref(t10).length]
        ]),
        createCommentVNode(" 选择的数据项 "),
        unref(t10).length ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(unref(o11).e("tags"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(M8.value, (i4, j5) => (openBlock(), createBlock(unref(A3), {
                key: i4 + j5,
                closable: !unref(c12),
                onClose: (Q5) => T6(i4)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(i4),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["closable", "onClose"]))),
              128
              /* KEYED_FRAGMENT */
            )),
            C7.value > 0 ? (openBlock(), createBlock(unref(A3), { key: 0 }, {
              default: withCtx(() => [
                createTextVNode(
                  "+" + toDisplayString(C7.value),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" 清空 icon "),
        createVNode(Transition, { name: "zoom-in" }, {
          default: withCtx(() => {
            var i4;
            return [
              unref(B7) && ((i4 = unref(t10)) != null && i4.length) && unref(x12) && !unref(c12) ? (openBlock(), createBlock(unref(k), {
                key: 0,
                class: normalizeClass(unref(o11).e("clear")),
                onClick: withModifiers($12, ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(close_default))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ];
          }),
          _: 1
          /* STABLE */
        }),
        createCommentVNode(" 下拉 icon "),
        unref(h8) ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(k), {
          key: 1,
          class: normalizeClass(unref(o11).e("arrow"))
        }, {
          default: withCtx(() => [
            createVNode(unref(arrow_down_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class"]))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/cascade-filter.vue_vue_type_script_setup_true_lang-DQ-UVDNn.js
var E6 = ["onClick"];
var O2 = defineComponent({
  name: "CascadeFilter",
  __name: "cascade-filter",
  props: {
    filterData: {},
    selectAndReset: { type: Boolean, default: true },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    size: {}
  },
  setup(m6) {
    const r7 = m6, f11 = inject(e6), { cls: a6, size: u5, handleFilter: _10, getNodePath: n8, cascade: h8, qsClear: C7, close: v6 } = f11, o11 = shallowRef(-1), y5 = computed(() => r7.filterData.map((e17) => n8(e17.data)).filter((e17) => e17 !== "")), k6 = (e17, l5) => {
      o11.value = l5, _10(e17), r7.selectAndReset && (C7(), v6());
    };
    return watch(
      () => h8.value,
      (e17) => {
        o11.value = r7.filterData.findIndex((l5) => n8(l5.data) === e17);
      },
      { immediate: true }
    ), (e17, l5) => (openBlock(), createBlock(unref(fe2), {
      tag: "ul",
      class: normalizeClass([unref(a6).e("options"), unref(a6).m(unref(u5))]),
      ref: "scrollRef",
      style: { width: "100%" }
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(y5.value, (c12, s13) => withDirectives((openBlock(), createElementBlock("li", {
            class: normalizeClass([unref(a6).e("option"), unref(e).is("selected", o11.value === s13)]),
            onClick: (K6) => k6(c12, s13),
            key: s13
          }, [
            createTextVNode(
              toDisplayString(c12),
              1
              /* TEXT */
            )
          ], 10, E6)), [
            [unref(T), unref(a6).e("ripple")]
          ])),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/venders/cascade.vue_vue_type_script_setup_true_lang-BnqWfWJu.js
var le2 = Object.defineProperty;
var se2 = (p5, d9, r7) => d9 in p5 ? le2(p5, d9, { enumerable: true, configurable: true, writable: true, value: r7 }) : p5[d9] = r7;
var i3 = (p5, d9, r7) => se2(p5, typeof d9 != "symbol" ? d9 + "" : d9, r7);
var H2 = class extends TreeNode {
  constructor(r7) {
    const { data: w12, index: o11, parent: $12, labelKey: m6, valueKey: k6 } = r7;
    super(w12, o11);
    i3(this, "parent", null);
    i3(this, "children");
    i3(this, "expanded", false);
    i3(this, "loading", false);
    i3(this, "loaded", false);
    i3(this, "checked", false);
    i3(this, "selected", false);
    i3(this, "indeterminate", false);
    i3(this, "disabled", false);
    i3(this, "visible", true);
    i3(this, "labelKey");
    i3(this, "valueKey");
    return $12 && (this.parent = $12), this.labelKey = m6, this.valueKey = k6, shallowReactive(this);
  }
  get parentExpanded() {
    return this.parent ? this.parent.expanded || this.depth === 1 : true;
  }
  get label() {
    return String(getChainValue(this.data, this.labelKey));
  }
  get key() {
    return getChainValue(this.data, this.valueKey);
  }
  get levelIndicator() {
    return `Level ${this.depth}`;
  }
};
var De2 = { key: 1 };
var Ne = { key: 2 };
var Je = defineComponent({
  name: "Cascade",
  __name: "cascade",
  props: {
    modelValue: {},
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    placeholder: { default: "请选择" },
    clearable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    childrenKey: { default: "children" },
    checkStrictly: { type: Boolean },
    options: { default: () => [] },
    disabledNode: {},
    multiple: { type: Boolean },
    selected: {},
    checked: {},
    filterable: { type: Boolean, default: false },
    visibilityLimit: { default: 3 },
    tips: {},
    span: {},
    label: {},
    field: {},
    size: {},
    filterData: {},
    selectAndReset: { type: Boolean }
  },
  emits: ["update:modelValue", "change", "clear"],
  setup(p5, { emit: d9 }) {
    const r7 = e("cascade"), w12 = d9, o11 = p5, { formProps: $12 } = i2(), { size: m6, disabled: k6, readonly: T6 } = g(
      [$12 ?? {}, o11],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), M8 = shallowRef(false), D4 = shallowRef([]), N4 = shallowRef(""), v6 = computed(() => {
      const { valueKey: e17, labelKey: a6, options: l5, disabledNode: s13 } = o11;
      return Forest.create(l5, {
        createNode: s13 ? (n8, y5) => {
          const F6 = new H2({
            data: n8,
            index: y5,
            valueKey: e17,
            labelKey: a6
          });
          return n8 && (F6.disabled = s13(n8, F6) ?? false), F6;
        } : (n8, y5) => new H2({
          data: n8,
          index: y5,
          valueKey: e17,
          labelKey: a6
        })
      });
    }), V6 = computed(() => {
      const e17 = /* @__PURE__ */ new Map();
      return v6.value.dft((a6) => {
        e17.set(a6.key, a6);
      }), e17;
    }), B7 = shallowRef(), x12 = () => {
      var e17;
      (e17 = B7.value) == null || e17.close();
    }, J7 = () => {
      var e17;
      (e17 = B7.value) == null || e17.open();
    }, Q5 = () => {
      var e17;
      (e17 = B7.value) == null || e17.updateDropdown();
    }, { handleSelect: X5, selected: P8 } = w4({
      props: o11,
      emit: w12,
      nodeDict: V6,
      forest: v6
    }), { checked: z5, handleCheck: Z3 } = w5({
      props: o11,
      emit: w12,
      nodeDict: V6,
      forest: v6
    });
    function ee3(e17) {
      const a6 = {};
      function l5(s13, n8) {
        a6[s13.depth] || (a6[s13.depth] = []), a6[s13.depth].push(s13), s13.parentNodes = n8 ? n8.data[o11.valueKey] : "", s13.children && s13.children.forEach((y5) => l5(y5, s13));
      }
      return e17.forEach((s13) => l5(s13)), Object.keys(a6).sort((s13, n8) => s13 - n8).map((s13) => a6[s13]);
    }
    const f11 = shallowRef();
    watch(
      () => o11.options,
      (e17) => {
        e17 && (D4.value = ee3(v6.value.nodes));
      },
      { immediate: true }
    ), watch(
      P8,
      (e17) => {
        o11.multiple || (f11.value = e17.size === 0 ? "" : Array.from(e17).map((a6) => a6[o11.labelKey]).join(" / "));
      },
      {
        immediate: true
      }
    ), watch(
      z5,
      (e17) => {
        o11.multiple && (f11.value = e17.size === 0 ? "" : Array.from(e17).map((a6) => a6[o11.labelKey]).join(" / "));
      },
      { immediate: true }
    );
    const R7 = (e17) => {
      let a6 = [e17[o11.labelKey]], l5 = V6.value.get(e17[o11.valueKey]);
      for (; l5 != null && l5.parent; ) {
        if (l5.disabled)
          return "";
        l5 = l5.parent, l5.data && a6.unshift(l5.data[o11.labelKey]);
      }
      return e17.disabled ? "" : a6.join(" / ");
    }, ae4 = computed(() => {
      const e17 = Array.from(z5).map((l5) => R7(l5));
      return e17.filter((l5, s13) => !e17.some((n8, y5) => y5 !== s13 && n8.startsWith(l5)));
    }), A11 = () => {
      o11.multiple && z5.clear(), !o11.multiple && P8.clear(), f11.value = "", x12();
    }, te6 = (e17) => {
      let a6 = e17.split(" / "), l5 = a6[a6.length - 1];
      v6.value.dft((s13) => {
        if (s13.label === l5) {
          z5.delete(s13.data);
          return;
        }
      });
    }, g10 = shallowRef([]), j5 = () => {
      N4.value = "";
    };
    return watch(N4, (e17) => {
      e17 ? (g10.value = [], v6.value.dft((a6) => {
        a6.label.includes(e17) && !a6.disabled && g10.value.push(a6);
      })) : g10.value = [];
    }), provide(e6, {
      cls: r7,
      cascadeProps: o11,
      size: m6,
      disabled: k6,
      readonly: T6,
      close: x12,
      open: J7,
      updatePosition: Q5,
      forest: v6,
      nodeDict: V6,
      handleSelect: X5,
      handleCheck: Z3,
      cascade: f11,
      cascadeMulti: ae4,
      emit: w12,
      hovered: M8,
      clear: A11,
      remove: te6,
      filterData: g10,
      qsClear: j5,
      handleFilter: (e17) => {
        f11.value = e17;
        let a6 = e17.split(" / ");
        P8.clear(), v6.value.dft((l5) => {
          if (!l5.disabled) {
            let s13 = R7(l5.data);
            a6.includes(l5.data[o11.labelKey]) && s13 !== "" && P8.add(l5.data);
          }
        });
      },
      getNodePath: R7
    }), (e17, a6) => unref(T6) ? f11.value ? (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass([unref(r7).m(unref(m6))])
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(r7).e("tags"))
          },
          [
            createVNode(unref(A3), null, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(f11.value),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    )) : (openBlock(), createElementBlock(
      "span",
      Ne,
      toDisplayString(unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      class: normalizeClass([unref(r7).b, unref(e).is("disabled", unref(k6)), unref(r7).m(unref(m6))]),
      "content-class": [unref(r7).e("panel"), unref(r7).em("panel", unref(m6))],
      trigger: "click",
      ref_key: "dropdownRef",
      ref: B7,
      disabled: unref(k6),
      width: D4.value.length ? "auto" : "",
      onMouseenter: a6[2] || (a6[2] = (l5) => M8.value = true),
      onMouseleave: a6[3] || (a6[3] = (l5) => M8.value = false)
    }, {
      trigger: withCtx(() => [
        createCommentVNode(" 单选展示 "),
        e17.multiple ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" 多选展示 "),
            createVNode(unref(ae3))
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : (openBlock(), createBlock(unref(Ve), {
          key: 0,
          size: unref(m6),
          disabled: unref(k6),
          placeholder: e17.placeholder,
          clearable: e17.clearable,
          modelValue: f11.value,
          "onUpdate:modelValue": a6[0] || (a6[0] = (l5) => f11.value = l5),
          "native-readonly": "",
          onClear: A11
        }, {
          suffix: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(r7).e("arrow"))
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size", "disabled", "placeholder", "clearable", "modelValue"]))
      ]),
      content: withCtx(() => [
        createCommentVNode(" 过滤 "),
        e17.filterable ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass([unref(r7).e("content-filter"), unref(r7).m(unref(m6))])
          },
          [
            createVNode(unref(Ve), {
              placeholder: "输入关键字进行过滤",
              modelValue: N4.value,
              "onUpdate:modelValue": a6[1] || (a6[1] = (l5) => N4.value = l5),
              clearable: false,
              onClear: j5
            }, {
              suffix: withCtx(() => [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(search_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" 数据列表 "),
        D4.value.length ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            g10.value.length ? (openBlock(), createElementBlock("div", De2, [
              createVNode(unref(O2), mergeProps(e17.$attrs, { filterData: g10.value }), null, 16, ["filterData"])
            ])) : (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(r7).e("content"))
              },
              [
                createVNode(unref(Ce), mergeProps(e17.$attrs, { cascadeData: D4.value }), null, 16, ["cascadeData"])
              ],
              2
              /* CLASS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(unref(r7).e("empty"))
          },
          [
            createVNode(unref(h6))
          ],
          2
          /* CLASS */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class", "content-class", "disabled", "width"]));
  }
});

// node_modules/ultra-ui/venders/check-tag.vue_vue_type_script_setup_true_lang-CmYNOxtk.js
var B5 = defineComponent({
  name: "CheckTag",
  __name: "check-tag",
  props: {
    modelValue: {},
    checked: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(c12, { emit: o11 }) {
    const s13 = e("check-tag"), e17 = c12, a6 = o11, n8 = computed(() => [s13.b, e.is("checked", e17.checked)]), l5 = () => {
      a6("update:modelValue", e17.checked);
    };
    return (m6, k6) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(n8.value),
        onClick: l5
      },
      [
        renderSlot(m6.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/checkbox-group.vue_vue_type_script_setup_true_lang-CFx4A0SB.js
var j4 = defineComponent({
  name: "CheckboxGroup",
  __name: "checkbox-group",
  props: mergeModels({
    modelValue: {},
    items: {},
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    block: { type: Boolean },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue"], ["update:modelValue"]),
  setup(n8, { emit: S8 }) {
    const r7 = n8, a6 = useModel(n8, "modelValue"), d9 = e("checkbox-group"), { formProps: b10 } = i2(), { size: m6, disabled: v6 } = g([b10 ?? {}, r7], {
      size: "default",
      disabled: false
    }), k6 = (l5) => {
      const { valueKey: s13 } = r7, e17 = l5[s13];
      return !e17 || !a6.value ? false : a6.value.includes(e17);
    }, y5 = (l5, s13) => {
      var i4;
      const { valueKey: e17 } = r7, t10 = s13[e17];
      t10 && (l5 ? a6.value = [...a6.value ?? [], t10] : a6.value = (i4 = a6.value) == null ? void 0 : i4.filter((V6) => V6 !== t10));
    };
    return (l5, s13) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(d9).b, unref(d9).m(unref(m6)), unref(e).is("block", l5.block)])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(l5.items, (e17) => (openBlock(), createBlock(unref(U2), {
            key: e17[l5.valueKey],
            "model-value": k6(e17),
            "onUpdate:modelValue": (t10) => y5(t10, e17),
            disabled: unref(v6),
            size: unref(m6)
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(e17[l5.labelKey]),
                1
                /* TEXT */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["model-value", "onUpdate:modelValue", "disabled", "size"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/context-menu/di.js
var e7 = Symbol("ContextMenuDIKey");

// node_modules/ultra-ui/venders/context-menu-item.vue_vue_type_script_setup_true_lang-BCvE9Rt6.js
var $6 = defineComponent({
  name: "ContextMenuItem",
  __name: "context-menu-item",
  props: {
    menu: {}
  },
  emits: ["click-start", "click-end"],
  setup(i4, { emit: v6 }) {
    const c12 = v6, { cls: a6 } = inject(e7), n8 = shallowRef(false), m6 = computed(() => (typeof i4.menu.disabled == "function" ? i4.menu.disabled() : i4.menu.disabled) ?? false);
    function b10() {
      var s13, f11;
      if (m6.value || n8.value) return;
      c12("click-start"), n8.value = true;
      const l5 = (f11 = (s13 = i4.menu).callback) == null ? void 0 : f11.call(s13);
      if (l5 instanceof Promise)
        return l5.then(() => {
        }).finally(() => {
          c12("click-end"), n8.value = false;
        });
      n8.value = false, c12("click-end");
    }
    return (l5, s13) => withDirectives((openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass([
          unref(a6).e("item"),
          unref(e).is("disabled", m6.value),
          unref(e).is("loading", n8.value),
          unref(a6).em("item", "menu")
        ]),
        onClick: b10
      },
      [
        n8.value ? (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass(unref(e).is("loading"))
        }, {
          default: withCtx(() => [
            createVNode(unref(loading_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class"])) : (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            l5.menu.icon ? (openBlock(), createBlock(unref(k), { key: 0 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(l5.menu.icon)))
              ]),
              _: 1
              /* STABLE */
            })) : (openBlock(), createElementBlock(
              "i",
              {
                key: 1,
                class: normalizeClass(unref(a6).e("icon-place"))
              },
              null,
              2
              /* CLASS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )),
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(a6).e("label"))
          },
          toDisplayString(l5.menu.label),
          3
          /* TEXT, CLASS */
        )
      ],
      2
      /* CLASS */
    )), [
      [unref(T), !m6.value && !n8.value]
    ]);
  }
});

// node_modules/ultra-ui/venders/context-menu.vue_vue_type_script_setup_true_lang-B6niR5s8.js
var st2 = defineComponent({
  name: "ContextMenu",
  __name: "context-menu",
  props: {
    mousePosition: {},
    width: { default: 150 },
    menus: {},
    size: {}
  },
  emits: ["destroy"],
  setup(h8, { emit: x12 }) {
    const n8 = h8, b10 = x12, { size: k6 } = l([n8], {
      size: "default"
    }), s13 = e("context-menu"), C7 = shallowRef(), c12 = shallowRef(true), v6 = () => {
      const t10 = {}, { mousePosition: o11 } = n8, { x: e17, y: m6 } = o11;
      e17 > window.innerWidth / 2 ? t10.right = window.innerWidth - e17 - 1 : t10.left = e17 + 1, m6 > window.innerHeight / 2 ? t10.bottom = window.innerHeight - m6 - 1 : t10.top = m6 + 1;
      const $12 = t10.top ? "top" : "bottom", B7 = t10.left ? "left" : "right";
      return t10.transformOrigin = `${$12} ${B7}`, objMap(t10, (D4) => f(D4, "px"));
    }, y5 = computed(() => ({
      width: f(n8.width, "px"),
      ...v6(),
      zIndex: o3()
    })), _10 = computed(() => {
      const { menus: t10 } = n8;
      return typeof t10 == "function" ? t10() : t10;
    }), g10 = (t10) => typeof t10.disabled == "function" ? t10.disabled() : t10.disabled;
    function u5() {
      c12.value = false;
    }
    let l5 = false;
    function z5() {
      l5 = true;
    }
    function M8() {
      l5 = false, u5();
    }
    function P8() {
      l5 || u5();
    }
    return provide(e7, {
      cls: s13
    }), (t10, o11) => (openBlock(), createBlock(Transition, {
      name: "zoom-in",
      appear: "",
      onAfterLeave: o11[0] || (o11[0] = (e17) => b10("destroy"))
    }, {
      default: withCtx(() => [
        c12.value ? withDirectives((openBlock(), createElementBlock(
          "ul",
          {
            key: 0,
            class: normalizeClass([unref(s13).b, unref(s13).m(unref(k6))]),
            style: normalizeStyle(y5.value),
            ref_key: "contextMenuRef",
            ref: C7
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_10.value, (e17) => (openBlock(), createBlock($6, {
                menu: e17,
                disabled: g10(e17),
                onClickStart: z5,
                onClickEnd: M8
              }, null, 8, ["menu", "disabled"]))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          6
          /* CLASS, STYLE */
        )), [
          [unref(h2), P8]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    }));
  }
});

// node_modules/ultra-ui/components/context-menu/api.js
var e8;
var c5 = {
  pop(n8) {
    e8 && render(null, document.body), e8 = createVNode(st2, {
      ...n8,
      onDestroy() {
        render(null, document.body);
      }
    }), render(e8, document.body);
  }
};

// node_modules/ultra-ui/components/date-picker/use-date.js
var y2 = Symbol("DatePickerDIKey");
function I3(d9, m6) {
  if (d9 === "inject")
    return inject(y2);
  const { props: a6, emit: h8, closeDropdown: D4 } = m6, f11 = {
    date: "yyyy-MM-dd",
    month: "yyyy-MM",
    year: "yyyy"
  }, u5 = computed(() => a6.format ?? f11[a6.type]), c12 = {
    date: ["year", "month", "day"],
    month: ["year", "month"],
    year: ["year"]
  }, x12 = e("date-picker"), o11 = a6.modelValue ? date(a6.modelValue) : void 0, e17 = shallowReactive({
    panel: "day",
    date: o11,
    panelDate: date((o11 == null ? void 0 : o11.timestamp) ?? /* @__PURE__ */ new Date())
  });
  function p5() {
    var n8;
    e17.panelDate = date(((n8 = e17.date) == null ? void 0 : n8.timestamp) ?? /* @__PURE__ */ new Date());
    const t10 = c12[a6.type];
    e17.panel = t10[t10.length - 1];
  }
  watch(
    () => a6.modelValue,
    (t10) => {
      e17.date = t10 ? date(t10) : void 0, p5();
    }
  );
  function r7() {
    const t10 = c12[a6.type], n8 = t10.indexOf(e17.panel);
    n8 === -1 ? e17.panel = t10[t10.length - 1] : n8 < t10.length - 1 && (e17.panel = t10[n8 + 1]);
  }
  watch(
    () => a6.type,
    () => {
      r7();
    },
    { immediate: true }
  );
  function P8() {
    e17.panelDate = e17.panelDate.calc(-1, "years");
  }
  function w12() {
    e17.panelDate = e17.panelDate.calc(-1, "months");
  }
  function M8() {
    e17.panelDate = e17.panelDate.calc(1, "years");
  }
  function k6() {
    e17.panelDate = e17.panelDate.calc(1, "months");
  }
  function N4() {
    e17.panelDate = e17.panelDate.calc(-10, "years");
  }
  function Y3() {
    e17.panelDate = e17.panelDate.calc(10, "years");
  }
  const i4 = {
    cls: x12,
    state: e17,
    pickerProps: a6,
    pickerEmit: h8,
    formatStr: u5,
    closeDropdown: D4,
    showNextPanel: r7,
    handlePreYear: P8,
    handlePreMonth: w12,
    handleNextYear: M8,
    handleNextMonth: k6,
    handleNextTenYears: Y3,
    handlePreTenYears: N4,
    updatePanelDate: p5
  };
  return provide(y2, i4), i4;
}

// node_modules/ultra-ui/venders/day.vue_vue_type_script_setup_true_lang-Bh2N7yCQ.js
var x6 = ["title", "onClick"];
var A5 = defineComponent({
  name: "DayPanel",
  inheritAttrs: false,
  __name: "day",
  setup(E11) {
    const { cls: a6, pickerProps: f11, state: o11, pickerEmit: y5, formatStr: _10, closeDropdown: k6 } = I3("inject"), D4 = computed(() => M3(o11.panelDate.timestamp, f11.disabledDate));
    function b10(r7) {
      if (!o11.date) return false;
      const i4 = "yyyyMMdd  ";
      return o11.date.format(i4) === r7.format(i4);
    }
    function h8(r7) {
      r7.disabled || (y5("update:modelValue", r7.date.format(_10.value)), o11.date = r7.date, k6());
    }
    return (r7, i4) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass(unref(a6).e("week"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(g2), (e17) => (openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass(unref(a6).e("week-day"))
                },
                toDisplayString(e17),
                3
                /* TEXT, CLASS */
              ))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ),
        createBaseVNode(
          "ul",
          {
            class: normalizeClass(unref(a6).e("days"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(D4.value, (e17) => (openBlock(), createElementBlock("li", {
                title: e17.isToday ? "今天" : "",
                class: normalizeClass([
                  unref(a6).e("day"),
                  unref(a6).em("day", e17.type),
                  unref(e).is("today", e17.isToday === true),
                  unref(e).is("disabled", e17.disabled === true),
                  unref(e).is("selected", b10(e17.date))
                ]),
                key: e17.date.timestamp,
                onClick: (M8) => h8(e17)
              }, [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(unref(a6).e("day-text"))
                  },
                  toDisplayString(e17.date.day),
                  3
                  /* TEXT, CLASS */
                )
              ], 10, x6))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/venders/month.vue_vue_type_script_setup_true_lang-TTzUDVuR.js
var b4 = ["onClick"];
var $7 = defineComponent({
  name: "MonthPanel",
  __name: "month",
  setup(w12) {
    const {
      cls: a6,
      state: e17,
      pickerProps: m6,
      pickerEmit: p5,
      showNextPanel: d9,
      closeDropdown: u5,
      formatStr: f11
    } = I3("inject"), h8 = computed(() => k4(e17.panelDate.timestamp, m6.disabledDate));
    function _10(n8) {
      e17.panelDate = e17.panelDate.setMonth(n8), d9(), m6.type === "month" && (e17.date = date(e17.panelDate.format("yyyy-MM")), p5("update:modelValue", e17.date.format(f11.value)), u5());
    }
    function D4(n8) {
      return e17.date ? e17.date.month === n8 && e17.date.year === e17.panelDate.year : false;
    }
    return (n8, B7) => (openBlock(), createElementBlock(
      "ul",
      {
        class: normalizeClass(unref(a6).e("months"))
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(h8.value, ({ key: y5, month: o11, disabled: i4 }) => (openBlock(), createElementBlock("li", {
            key: y5,
            class: normalizeClass([
              unref(a6).e("month"),
              unref(e).is("selected", D4(o11)),
              unref(e).is("disabled", i4 === true)
            ]),
            onClick: (N4) => !i4 && _10(o11)
          }, [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(a6).e("month-text"))
              },
              toDisplayString(o11) + "月",
              3
              /* TEXT, CLASS */
            )
          ], 10, b4))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/year.vue_vue_type_script_setup_true_lang-CzKkFxy1.js
var b5 = ["onClick"];
var T4 = defineComponent({
  name: "YearPanel",
  __name: "year",
  setup(w12) {
    const {
      cls: n8,
      state: e17,
      pickerProps: c12,
      pickerEmit: d9,
      showNextPanel: u5,
      closeDropdown: f11,
      formatStr: y5
    } = I3("inject"), _10 = computed(() => w3(e17.panelDate.timestamp, c12.disabledDate));
    function D4(a6) {
      return e17.date ? e17.date.year === a6 : false;
    }
    function k6(a6) {
      if (e17.panelDate = e17.panelDate.setYear(a6), u5(), c12.type === "year") {
        const i4 = e17.panelDate.format("yyyy");
        e17.date = date(i4), d9("update:modelValue", e17.date.format(y5.value)), f11();
      }
    }
    return (a6, i4) => (openBlock(), createElementBlock(
      "ul",
      {
        class: normalizeClass(unref(n8).e("years"))
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_10.value, ({ year: r7, disabled: m6 }) => (openBlock(), createElementBlock("li", {
            key: r7,
            class: normalizeClass([
              unref(n8).e("year"),
              unref(e).is("selected", D4(r7)),
              unref(e).is("disabled", m6 === true)
            ]),
            onClick: (B7) => !m6 && k6(r7)
          }, [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(n8).e("year-text"))
              },
              toDisplayString(r7),
              3
              /* TEXT, CLASS */
            )
          ], 10, b5))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/loading.vue_vue_type_script_setup_true_lang-gJr5tX1I.js
var N2 = defineComponent({
  name: "Loading",
  __name: "loading",
  props: {
    type: { default: "spinner" }
  },
  setup(r7) {
    const o11 = r7, { size: s13 } = l([o11], {
      size: "default"
    }), e17 = e("loading"), l5 = computed(() => [e17.b, e17.m(s13.value), e17.e(o11.type)]);
    return (v6, y5) => (openBlock(), createBlock(Transition, {
      name: "fade",
      appear: ""
    }, {
      default: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(l5.value),
            style: normalizeStyle({ zIndex: unref(o3)() })
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(e17).e("loader"))
              },
              null,
              2
              /* CLASS */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 1
      /* STABLE */
    }));
  }
});

// node_modules/ultra-ui/components/loading/directive.js
var c6 = e("loading");
var a2 = c6.e("container");
function t6(o11, n8) {
  o11.classList.add(a2);
  const d9 = createVNode(N2, {
    type: n8.arg
  });
  render(d9, o11);
}
function e9(o11) {
  render(null, o11), o11.classList.remove(a2);
}
var v3 = {
  mounted(o11, n8) {
    n8.value && t6(o11, n8);
  },
  updated(o11, n8) {
    n8.value ? t6(o11, n8) : e9(o11);
  },
  unmounted(o11) {
    e9(o11);
  }
};

// node_modules/ultra-ui/components/message/helper.js
var c7 = {
  default: info_filled_default,
  info: question_filled_default,
  success: circle_check_filled_default,
  warn: warning_filled_default,
  error: circle_close_filled_default
};
function u3(e17, r7) {
  return r7 ?? c7[e17];
}
var s6 = {
  error: "danger",
  warn: "warning"
};
function a3(e17) {
  return s6[e17] ?? e17;
}

// node_modules/ultra-ui/venders/message.vue_vue_type_script_setup_true_lang-iOw6o0nc.js
var F3 = ["innerHTML"];
var O3 = defineComponent({
  name: "Message",
  __name: "message",
  props: {
    message: {},
    type: { default: "default" },
    closable: { type: Boolean },
    duration: { default: 3e3 },
    html: { type: Boolean },
    icon: {}
  },
  emits: ["close"],
  setup(y5, { emit: C7 }) {
    const i4 = y5, m6 = C7, { size: g10 } = l([i4], {
      size: "default"
    }), t10 = e("message");
    let c12 = 0, u5, l5 = 0;
    function p5() {
      i4.duration !== 0 && (c12 = Date.now(), u5 = setTimeout(() => {
        m6("close");
      }, l5));
    }
    function k6() {
      i4.duration <= 0 || (l5 = i4.duration, p5());
    }
    onMounted(() => {
      k6();
    });
    function v6() {
      clearTimeout(u5), l5 = l5 - (Date.now() - c12);
    }
    function M8() {
      m6("close");
    }
    return (o11, I4) => (openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass([unref(t10).b, unref(t10).m(unref(g10)), unref(t10).m("color-" + unref(a3)(o11.type))]),
        onMouseenter: v6,
        onMouseleave: p5
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(t10).e("icon"))
          },
          [
            createVNode(unref(k), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(u3)(o11.type, o11.icon))))
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        ),
        o11.html ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(t10).e("content")),
          innerHTML: o11.message
        }, null, 10, F3)) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(unref(t10).e("content"))
          },
          toDisplayString(o11.message),
          3
          /* TEXT, CLASS */
        )),
        o11.closable || o11.duration === 0 ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(unref(t10).e("close")),
            onClick: withModifiers(M8, ["stop"])
          },
          [
            createVNode(unref(k), null, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
});

// node_modules/ultra-ui/venders/message-box.vue_vue_type_script_setup_true_lang-BZl9vLyf.js
var A6 = defineComponent({
  name: "MessageBox",
  __name: "message-box",
  props: {
    messages: {}
  },
  emits: ["remove", "close"],
  setup(k6, { emit: s13 }) {
    const a6 = s13;
    function m6(e17) {
      a6("remove", e17.dataset.id);
    }
    function i4(e17, t10) {
      a6("close", e17), t10 == null || t10();
    }
    return (e17, t10) => (openBlock(), createBlock(TransitionGroup, {
      name: "message",
      appear: "",
      onAfterLeave: m6
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(e17.messages, ({ onClose: c12, ...n8 }, p5) => (openBlock(), createBlock(O3, mergeProps({ ref_for: true }, n8, {
            "data-id": n8.key,
            onClose: (x12) => i4(p5, c12)
          }), null, 16, ["data-id", "onClose"]))),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      _: 1
      /* STABLE */
    }));
  }
});

// node_modules/ultra-ui/venders/message-Cel9-ZZa.js
var g3 = [
  "success",
  "warn",
  "info",
  "error",
  "default"
];
var C4 = 0;
var _7 = e("message");
var o9 = null;
var t7 = shallowReactive([]);
var l3 = 0;
var s7 = /* @__PURE__ */ new Map();
function x7(e17) {
  l3--, s7.has(e17) && (s7.get(e17)(), s7.delete(e17)), l3 === 0 && o9 && (o9.unmount(), document.body.removeChild(o9._container), o9 = null);
}
function y3(e17) {
  t7.splice(e17, 1);
}
function b6() {
  o9 = createApp({
    render: () => h(A6, {
      messages: t7,
      onRemove: x7,
      onClose: y3
    })
  });
  const e17 = document.createElement("ul");
  e17.className = _7.e("container"), n3(e17, { zIndex: o3() }), document.body.appendChild(e17), o9.mount(e17);
}
var c8 = (e17) => {
  typeof e17 == "string" && (e17 = {
    message: e17
  });
  const { onClosed: n8, ...r7 } = e17, a6 = String(C4++);
  n8 && s7.set(a6, n8), t7.push({
    ...r7,
    key: a6
  }), l3++, o9 != null && o9._container && n3(o9 == null ? void 0 : o9._container, { zIndex: o3() }), t7.length && !o9 && b6();
};
c8.closeAll = function() {
  t7.splice(0).forEach((e17) => {
    var n8;
    return (n8 = e17.onClose) == null ? void 0 : n8.call(e17);
  });
};
g3.forEach((e17) => {
  c8[e17] = (n8, r7) => {
    c8({
      message: n8,
      type: e17,
      ...r7
    });
  };
});
var k5 = c8;

// node_modules/ultra-ui/venders/message-confirm.vue_vue_type_script_setup_true_lang-DlMGaFCU.js
var q4 = defineComponent({
  name: "MessageConfirm",
  __name: "message-confirm",
  props: {
    modelValue: {},
    title: { default: "" },
    message: { default: "" },
    confirmButtonText: { default: "确定" },
    cancelButtonText: { default: "" },
    confirmButtonType: { default: "primary" },
    onClose: {},
    size: {}
  },
  setup(B7) {
    const r7 = B7, { size: C7 } = l([r7], {
      size: "default"
    }), o11 = e("message-confirm"), i4 = ref(false);
    onMounted(() => {
      i4.value = true;
    });
    const c12 = (t10) => {
      i4.value = false, r7.onClose && r7.onClose(t10);
    };
    return (t10, n8) => (openBlock(), createBlock(Transition, {
      name: "message-confirm-fade",
      onAfterLeave: n8[2] || (n8[2] = (u5) => t10.$emit("destroy")),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(o11).b, unref(o11).m(unref(C7))])
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(o11).e("mask")),
                style: normalizeStyle({ zIndex: `${unref(o3)()}` })
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(o11).e("box"))
                  },
                  [
                    t10.title ? (openBlock(), createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: normalizeClass(unref(o11).e("header"))
                      },
                      toDisplayString(t10.title),
                      3
                      /* TEXT, CLASS */
                    )) : createCommentVNode("v-if", true),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(o11).e("content"))
                      },
                      toDisplayString(t10.message),
                      3
                      /* TEXT, CLASS */
                    ),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(o11).e("footer"))
                      },
                      [
                        t10.cancelButtonText ? (openBlock(), createBlock(unref(M), {
                          key: 0,
                          plain: "",
                          onClick: n8[0] || (n8[0] = (u5) => c12("cancel")),
                          class: normalizeClass(unref(o11).em("footer", "btn"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(t10.cancelButtonText),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["class"])) : createCommentVNode("v-if", true),
                        createVNode(unref(M), {
                          type: t10.confirmButtonType,
                          onClick: n8[1] || (n8[1] = (u5) => c12("confirm")),
                          class: normalizeClass(unref(o11).em("footer", "btn"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(t10.confirmButtonText),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["type", "class"])
                      ],
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        ), [
          [vShow, i4.value]
        ])
      ]),
      _: 1
      /* STABLE */
    }));
  }
});

// node_modules/ultra-ui/venders/message-confirm-B_VcRvtb.js
var c9 = ["primary", "success", "info", "warning", "danger"];
var t8 = (o11) => {
  const r7 = document.createElement("div"), e17 = createVNode(q4, {
    ...o11,
    zIndex: o3()
  });
  e17.props.onDestroy = () => render(null, r7), render(e17, r7), document.body.appendChild(r7.firstElementChild);
};
c9.forEach((o11) => {
  t8[o11] = (r7, e17) => t8({
    message: r7,
    confirmButtonType: o11,
    onClose: e17
  });
});

// node_modules/ultra-ui/venders/notification.vue_vue_type_script_setup_true_lang-B3kwpsIY.js
var ie3 = defineComponent({
  name: "Notification",
  __name: "notification",
  props: {
    modelValue: {},
    title: {},
    message: {},
    type: {},
    closable: { type: Boolean, default: false },
    duration: { default: 4500 },
    offset: { default: 20 },
    onClose: {},
    onClick: {},
    id: {},
    icon: {},
    zIndex: {},
    buttonText: { default: "" },
    width: {},
    position: { default: "bottom-right" }
  },
  setup(z5, { expose: T6 }) {
    const t10 = z5, { type: c12, size: g10 } = l([t10], {
      type: "primary",
      size: "default"
    }), x12 = computed(() => t10.icon || {
      primary: info_filled_default,
      info: question_filled_default,
      success: circle_check_filled_default,
      warning: warning_filled_default,
      danger: circle_close_filled_default
    }[c12.value]), i4 = e("notification"), f11 = ref(false);
    onMounted(() => {
      f11.value = true, u5();
    });
    const m6 = () => {
      f11.value = false;
    }, h8 = computed(() => t10.offset > 0 ? {
      [`${t10.position.split("-")[0]}`]: `${t10.offset}px`,
      zIndex: t10.zIndex,
      transform: t10.position.split("-")[0] === "bottom" ? `translateY(-${t10.offset}px)` : `translateY(${t10.offset}px)`,
      transition: "opacity 0.3s, transform 0.4s, top 0.4s"
    } : {
      [`${t10.position.split("-")[0]}`]: `${t10.offset}px`,
      zIndex: t10.zIndex
    });
    let d9 = 0;
    const u5 = () => {
      t10.duration && (d9 = setTimeout(() => {
        m6();
      }, t10.duration));
    }, I4 = () => clearTimeout(d9), w12 = (o11) => {
      t10.onClick && t10.onClick(o11), m6();
    };
    return T6({ startTimer: u5, clearTimer: I4 }), (o11, v6) => (openBlock(), createBlock(Transition, {
      name: `notification-fade-${o11.position.split("-")[0]}`,
      onBeforeLeave: o11.onClose,
      onAfterLeave: v6[0] || (v6[0] = (J7) => o11.$emit("destroy")),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(i4).b, unref(i4).m(unref(g10)), unref(i4).e(unref(c12)), unref(i4).e(o11.position)]),
            style: normalizeStyle(h8.value)
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(i4).e("icon"))
              },
              [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(x12.value)))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            ),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(i4).e("content"))
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(i4).em("content", "title"))
                  },
                  toDisplayString(o11.title),
                  3
                  /* TEXT, CLASS */
                ),
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(i4).em("content", "message"))
                  },
                  toDisplayString(o11.message),
                  3
                  /* TEXT, CLASS */
                ),
                o11.buttonText ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(unref(i4).em("content", "button"))
                  },
                  [
                    createVNode(unref(M), {
                      type: unref(c12),
                      plain: "",
                      onClick: w12
                    }, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString(o11.buttonText),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["type"])
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ),
            o11.closable ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(i4).e("close")),
                onClick: withModifiers(m6, ["stop"])
              },
              [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ), [
          [vShow, f11.value]
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["name", "onBeforeLeave"]));
  }
});

// node_modules/ultra-ui/components/notification/index.js
var e10 = reactive({
  "bottom-right": [],
  "bottom-left": [],
  "top-right": [],
  "top-left": []
});
var c10 = (m6) => e10[m6].length;
var $8 = 1;
var b7 = (m6, t10, n8) => {
  const i4 = e10[t10].findIndex(({ vm: o11 }) => m6 === o11.component.props.id);
  if (i4 > -1) {
    const { vm: o11 } = e10[t10][i4];
    n8 == null || n8(o11);
    let f11 = Number(e10[t10][i4].vm.component.props.offset);
    e10[t10].splice(i4, 1);
    let s13 = 0;
    for (let r7 = c10(t10); r7 > 0; r7--)
      r7 < i4 + 1 && (s13 = Number(e10[t10][r7 - 1].vm.component.props.offset), e10[t10][r7 - 1].vm.component.props.offset = f11, f11 = s13);
  }
  if (!e10[t10].length) {
    const o11 = document.getElementById(`notification-${t10}-id`);
    o11.style.removeProperty("height"), o11.style.removeProperty("overflow");
  }
};
var E7 = (m6) => {
  const t10 = m6.position || "bottom-right";
  if (document.getElementById(`notification-${t10}-id`))
    return document.getElementById(`notification-${t10}-id`);
  {
    const n8 = m6.offset || 20, i4 = document.createElement("div");
    return i4.id = `notification-${t10}-id`, Object.assign(i4.style, {
      position: "fixed",
      textAlign: "center"
    }, {
      "top-right": { top: `${n8}px`, right: `${n8}px` },
      "top-left": { top: `${n8}px`, left: `${n8}px` },
      "bottom-left": { bottom: `${n8}px`, left: `${n8}px` },
      "bottom-right": { bottom: `${n8}px`, right: `${n8}px` }
    }[t10]), i4.addEventListener("mouseenter", (o11) => {
      var f11, s13, r7;
      if (c10(t10)) {
        let p5 = 0, l5 = 0, h8 = 0, a6 = 0;
        for (let d9 = c10(t10); d9 > 0; d9--)
          e10[t10][d9 - 1].vm.component.exposed.clearTimer(), d9 === c10(t10) && (h8 = ((f11 = e10[t10][d9 - 1].vm.el) == null ? void 0 : f11.offsetWidth) + 8), e10[t10][d9 - 1].vm.component.props.offset = l5, l5 += ((s13 = e10[t10][d9 - 1].vm.el) == null ? void 0 : s13.offsetHeight) / 2 + 5, p5 < 3 && (a6 += ((r7 = e10[t10][d9 - 1].vm.el) == null ? void 0 : r7.offsetHeight) + 10), p5++;
        Object.assign(o11.target.style, {
          width: `${h8}px`,
          height: `${a6}px`,
          overflow: "hidden",
          transition: "height 0.4s"
        });
      }
    }), i4.addEventListener("mouseleave", (o11) => {
      var f11;
      if (c10(t10)) {
        let s13 = 0, r7 = 0, p5 = 0;
        for (let l5 = c10(t10); l5 > 0; l5--)
          e10[t10][l5 - 1].vm.component.exposed.startTimer(), l5 === c10(t10) && (p5 = ((f11 = e10[t10][l5 - 1].vm.el) == null ? void 0 : f11.offsetHeight) + 80), e10[t10][l5 - 1].vm.component.props.offset = s13, r7 < 2 && (s13 += 10), r7++;
        o11.target.style.transition = "height 0.45s", o11.target.style.height = `${p5}px`;
      } else
        o11.target.style.removeProperty("height"), o11.target.style.removeProperty("overflow");
    }), document.body.appendChild(i4), i4;
  }
};
var _8 = (m6) => {
  const t10 = m6.position || "bottom-right", n8 = document.createElement("div"), i4 = `notification_${$8++}`;
  if (c10(t10)) {
    let s13 = 0, r7 = 0;
    for (let p5 = c10(t10); p5 > 0; p5--)
      r7 < 2 && (s13 += 10), e10[t10][p5 - 1].vm.component.props.offset = s13, r7++;
  }
  const o11 = createVNode(ie3, {
    ...m6,
    offset: 0,
    id: i4,
    zIndex: o3(),
    onClose: () => {
      b7(i4, t10, m6.onClose);
    }
  });
  o11.props.onDestroy = () => render(null, n8), render(o11, n8), e10[t10].push({ vm: o11 });
  const f11 = E7(m6);
  f11 == null || f11.appendChild(n8.firstElementChild);
};

// node_modules/ultra-ui/venders/quill-CgTbB7xx.js
var ra = Object.defineProperty;
var sa = (n8, t10, e17) => t10 in n8 ? ra(n8, t10, { enumerable: true, configurable: true, writable: true, value: e17 }) : n8[t10] = e17;
var x8 = (n8, t10, e17) => sa(n8, typeof t10 != "symbol" ? t10 + "" : t10, e17);
var Fl = typeof global == "object" && global && global.Object === Object && global;
var ia = typeof self == "object" && self && self.Object === Object && self;
var kt = Fl || ia || Function("return this")();
var te5 = kt.Symbol;
var Hl = Object.prototype;
var la = Hl.hasOwnProperty;
var oa = Hl.toString;
var dn = te5 ? te5.toStringTag : void 0;
function aa(n8) {
  var t10 = la.call(n8, dn), e17 = n8[dn];
  try {
    n8[dn] = void 0;
    var r7 = true;
  } catch {
  }
  var s13 = oa.call(n8);
  return r7 && (t10 ? n8[dn] = e17 : delete n8[dn]), s13;
}
var ca = Object.prototype;
var ua = ca.toString;
function ha(n8) {
  return ua.call(n8);
}
var fa = "[object Null]";
var da = "[object Undefined]";
var Ui = te5 ? te5.toStringTag : void 0;
function Ke(n8) {
  return n8 == null ? n8 === void 0 ? da : fa : Ui && Ui in Object(n8) ? aa(n8) : ha(n8);
}
function Ut2(n8) {
  return n8 != null && typeof n8 == "object";
}
var fe3 = Array.isArray;
function ee2(n8) {
  var t10 = typeof n8;
  return n8 != null && (t10 == "object" || t10 == "function");
}
function zl(n8) {
  return n8;
}
var ga = "[object AsyncFunction]";
var pa = "[object Function]";
var ma = "[object GeneratorFunction]";
var ba = "[object Proxy]";
function gi(n8) {
  if (!ee2(n8))
    return false;
  var t10 = Ke(n8);
  return t10 == pa || t10 == ma || t10 == ga || t10 == ba;
}
var Os = kt["__core-js_shared__"];
var Fi = function() {
  var n8 = /[^.]+$/.exec(Os && Os.keys && Os.keys.IE_PROTO || "");
  return n8 ? "Symbol(src)_1." + n8 : "";
}();
function ya(n8) {
  return !!Fi && Fi in n8;
}
var va = Function.prototype;
var Ea = va.toString;
function pe2(n8) {
  if (n8 != null) {
    try {
      return Ea.call(n8);
    } catch {
    }
    try {
      return n8 + "";
    } catch {
    }
  }
  return "";
}
var Aa = /[\\^$.*+?()[\]{}|]/g;
var Na = /^\[object .+?Constructor\]$/;
var wa = Function.prototype;
var Ta = Object.prototype;
var xa = wa.toString;
var La = Ta.hasOwnProperty;
var Sa = RegExp(
  "^" + xa.call(La).replace(Aa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _a(n8) {
  if (!ee2(n8) || ya(n8))
    return false;
  var t10 = gi(n8) ? Sa : Na;
  return t10.test(pe2(n8));
}
function Oa(n8, t10) {
  return n8 == null ? void 0 : n8[t10];
}
function me2(n8, t10) {
  var e17 = Oa(n8, t10);
  return _a(e17) ? e17 : void 0;
}
var Fs = me2(kt, "WeakMap");
var Hi = Object.create;
var qa = /* @__PURE__ */ function() {
  function n8() {
  }
  return function(t10) {
    if (!ee2(t10))
      return {};
    if (Hi)
      return Hi(t10);
    n8.prototype = t10;
    var e17 = new n8();
    return n8.prototype = void 0, e17;
  };
}();
function Ca(n8, t10, e17) {
  switch (e17.length) {
    case 0:
      return n8.call(t10);
    case 1:
      return n8.call(t10, e17[0]);
    case 2:
      return n8.call(t10, e17[0], e17[1]);
    case 3:
      return n8.call(t10, e17[0], e17[1], e17[2]);
  }
  return n8.apply(t10, e17);
}
function Gl(n8, t10) {
  var e17 = -1, r7 = n8.length;
  for (t10 || (t10 = Array(r7)); ++e17 < r7; )
    t10[e17] = n8[e17];
  return t10;
}
var Ia = 800;
var Ra = 16;
var ka = Date.now;
function Ba(n8) {
  var t10 = 0, e17 = 0;
  return function() {
    var r7 = ka(), s13 = Ra - (r7 - e17);
    if (e17 = r7, s13 > 0) {
      if (++t10 >= Ia)
        return arguments[0];
    } else
      t10 = 0;
    return n8.apply(void 0, arguments);
  };
}
function Ma(n8) {
  return function() {
    return n8;
  };
}
var yr = function() {
  try {
    var n8 = me2(Object, "defineProperty");
    return n8({}, "", {}), n8;
  } catch {
  }
}();
var $a = yr ? function(n8, t10) {
  return yr(n8, "toString", {
    configurable: true,
    enumerable: false,
    value: Ma(t10),
    writable: true
  });
} : zl;
var Da = Ba($a);
function ja(n8, t10) {
  for (var e17 = -1, r7 = n8 == null ? 0 : n8.length; ++e17 < r7 && t10(n8[e17], e17, n8) !== false; )
    ;
  return n8;
}
var Pa = 9007199254740991;
var Ua = /^(?:0|[1-9]\d*)$/;
function Kl(n8, t10) {
  var e17 = typeof n8;
  return t10 = t10 ?? Pa, !!t10 && (e17 == "number" || e17 != "symbol" && Ua.test(n8)) && n8 > -1 && n8 % 1 == 0 && n8 < t10;
}
function pi(n8, t10, e17) {
  t10 == "__proto__" && yr ? yr(n8, t10, {
    configurable: true,
    enumerable: true,
    value: e17,
    writable: true
  }) : n8[t10] = e17;
}
function _n(n8, t10) {
  return n8 === t10 || n8 !== n8 && t10 !== t10;
}
var Fa = Object.prototype;
var Ha = Fa.hasOwnProperty;
function Vl(n8, t10, e17) {
  var r7 = n8[t10];
  (!(Ha.call(n8, t10) && _n(r7, e17)) || e17 === void 0 && !(t10 in n8)) && pi(n8, t10, e17);
}
function On(n8, t10, e17, r7) {
  var s13 = !e17;
  e17 || (e17 = {});
  for (var i4 = -1, l5 = t10.length; ++i4 < l5; ) {
    var a6 = t10[i4], c12 = void 0;
    c12 === void 0 && (c12 = n8[a6]), s13 ? pi(e17, a6, c12) : Vl(e17, a6, c12);
  }
  return e17;
}
var zi = Math.max;
function za(n8, t10, e17) {
  return t10 = zi(t10 === void 0 ? n8.length - 1 : t10, 0), function() {
    for (var r7 = arguments, s13 = -1, i4 = zi(r7.length - t10, 0), l5 = Array(i4); ++s13 < i4; )
      l5[s13] = r7[t10 + s13];
    s13 = -1;
    for (var a6 = Array(t10 + 1); ++s13 < t10; )
      a6[s13] = r7[s13];
    return a6[t10] = e17(l5), Ca(n8, this, a6);
  };
}
function Ga(n8, t10) {
  return Da(za(n8, t10, zl), n8 + "");
}
var Ka = 9007199254740991;
function Wl(n8) {
  return typeof n8 == "number" && n8 > -1 && n8 % 1 == 0 && n8 <= Ka;
}
function Tr(n8) {
  return n8 != null && Wl(n8.length) && !gi(n8);
}
function Va(n8, t10, e17) {
  if (!ee2(e17))
    return false;
  var r7 = typeof t10;
  return (r7 == "number" ? Tr(e17) && Kl(t10, e17.length) : r7 == "string" && t10 in e17) ? _n(e17[t10], n8) : false;
}
function Wa(n8) {
  return Ga(function(t10, e17) {
    var r7 = -1, s13 = e17.length, i4 = s13 > 1 ? e17[s13 - 1] : void 0, l5 = s13 > 2 ? e17[2] : void 0;
    for (i4 = n8.length > 3 && typeof i4 == "function" ? (s13--, i4) : void 0, l5 && Va(e17[0], e17[1], l5) && (i4 = s13 < 3 ? void 0 : i4, s13 = 1), t10 = Object(t10); ++r7 < s13; ) {
      var a6 = e17[r7];
      a6 && n8(t10, a6, r7, i4);
    }
    return t10;
  });
}
var Za = Object.prototype;
function mi(n8) {
  var t10 = n8 && n8.constructor, e17 = typeof t10 == "function" && t10.prototype || Za;
  return n8 === e17;
}
function Xa(n8, t10) {
  for (var e17 = -1, r7 = Array(n8); ++e17 < n8; )
    r7[e17] = t10(e17);
  return r7;
}
var Ya = "[object Arguments]";
function Gi(n8) {
  return Ut2(n8) && Ke(n8) == Ya;
}
var Zl = Object.prototype;
var Qa = Zl.hasOwnProperty;
var Ja = Zl.propertyIsEnumerable;
var Hs = Gi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Gi : function(n8) {
  return Ut2(n8) && Qa.call(n8, "callee") && !Ja.call(n8, "callee");
};
function tc() {
  return false;
}
var Xl = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ki = Xl && typeof module == "object" && module && !module.nodeType && module;
var ec = Ki && Ki.exports === Xl;
var Vi = ec ? kt.Buffer : void 0;
var nc = Vi ? Vi.isBuffer : void 0;
var En = nc || tc;
var rc = "[object Arguments]";
var sc = "[object Array]";
var ic = "[object Boolean]";
var lc = "[object Date]";
var oc = "[object Error]";
var ac = "[object Function]";
var cc = "[object Map]";
var uc = "[object Number]";
var hc = "[object Object]";
var fc = "[object RegExp]";
var dc = "[object Set]";
var gc = "[object String]";
var pc = "[object WeakMap]";
var mc = "[object ArrayBuffer]";
var bc = "[object DataView]";
var yc = "[object Float32Array]";
var vc = "[object Float64Array]";
var Ec = "[object Int8Array]";
var Ac = "[object Int16Array]";
var Nc = "[object Int32Array]";
var wc = "[object Uint8Array]";
var Tc = "[object Uint8ClampedArray]";
var xc = "[object Uint16Array]";
var Lc = "[object Uint32Array]";
var F4 = {};
F4[yc] = F4[vc] = F4[Ec] = F4[Ac] = F4[Nc] = F4[wc] = F4[Tc] = F4[xc] = F4[Lc] = true;
F4[rc] = F4[sc] = F4[mc] = F4[ic] = F4[bc] = F4[lc] = F4[oc] = F4[ac] = F4[cc] = F4[uc] = F4[hc] = F4[fc] = F4[dc] = F4[gc] = F4[pc] = false;
function Sc(n8) {
  return Ut2(n8) && Wl(n8.length) && !!F4[Ke(n8)];
}
function bi(n8) {
  return function(t10) {
    return n8(t10);
  };
}
var Yl = typeof exports == "object" && exports && !exports.nodeType && exports;
var mn = Yl && typeof module == "object" && module && !module.nodeType && module;
var _c = mn && mn.exports === Yl;
var qs = _c && Fl.process;
var Ue = function() {
  try {
    var n8 = mn && mn.require && mn.require("util").types;
    return n8 || qs && qs.binding && qs.binding("util");
  } catch {
  }
}();
var Wi = Ue && Ue.isTypedArray;
var yi = Wi ? bi(Wi) : Sc;
var Oc = Object.prototype;
var qc = Oc.hasOwnProperty;
function Ql(n8, t10) {
  var e17 = fe3(n8), r7 = !e17 && Hs(n8), s13 = !e17 && !r7 && En(n8), i4 = !e17 && !r7 && !s13 && yi(n8), l5 = e17 || r7 || s13 || i4, a6 = l5 ? Xa(n8.length, String) : [], c12 = a6.length;
  for (var h8 in n8)
    (t10 || qc.call(n8, h8)) && !(l5 && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h8 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s13 && (h8 == "offset" || h8 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i4 && (h8 == "buffer" || h8 == "byteLength" || h8 == "byteOffset") || // Skip index properties.
    Kl(h8, c12))) && a6.push(h8);
  return a6;
}
function Jl(n8, t10) {
  return function(e17) {
    return n8(t10(e17));
  };
}
var Cc = Jl(Object.keys, Object);
var Ic = Object.prototype;
var Rc = Ic.hasOwnProperty;
function kc(n8) {
  if (!mi(n8))
    return Cc(n8);
  var t10 = [];
  for (var e17 in Object(n8))
    Rc.call(n8, e17) && e17 != "constructor" && t10.push(e17);
  return t10;
}
function vi(n8) {
  return Tr(n8) ? Ql(n8) : kc(n8);
}
function Bc(n8) {
  var t10 = [];
  if (n8 != null)
    for (var e17 in Object(n8))
      t10.push(e17);
  return t10;
}
var Mc = Object.prototype;
var $c = Mc.hasOwnProperty;
function Dc(n8) {
  if (!ee2(n8))
    return Bc(n8);
  var t10 = mi(n8), e17 = [];
  for (var r7 in n8)
    r7 == "constructor" && (t10 || !$c.call(n8, r7)) || e17.push(r7);
  return e17;
}
function qn(n8) {
  return Tr(n8) ? Ql(n8, true) : Dc(n8);
}
var An = me2(Object, "create");
function jc() {
  this.__data__ = An ? An(null) : {}, this.size = 0;
}
function Pc(n8) {
  var t10 = this.has(n8) && delete this.__data__[n8];
  return this.size -= t10 ? 1 : 0, t10;
}
var Uc = "__lodash_hash_undefined__";
var Fc = Object.prototype;
var Hc = Fc.hasOwnProperty;
function zc(n8) {
  var t10 = this.__data__;
  if (An) {
    var e17 = t10[n8];
    return e17 === Uc ? void 0 : e17;
  }
  return Hc.call(t10, n8) ? t10[n8] : void 0;
}
var Gc = Object.prototype;
var Kc = Gc.hasOwnProperty;
function Vc(n8) {
  var t10 = this.__data__;
  return An ? t10[n8] !== void 0 : Kc.call(t10, n8);
}
var Wc = "__lodash_hash_undefined__";
function Zc(n8, t10) {
  var e17 = this.__data__;
  return this.size += this.has(n8) ? 0 : 1, e17[n8] = An && t10 === void 0 ? Wc : t10, this;
}
function de5(n8) {
  var t10 = -1, e17 = n8 == null ? 0 : n8.length;
  for (this.clear(); ++t10 < e17; ) {
    var r7 = n8[t10];
    this.set(r7[0], r7[1]);
  }
}
de5.prototype.clear = jc;
de5.prototype.delete = Pc;
de5.prototype.get = zc;
de5.prototype.has = Vc;
de5.prototype.set = Zc;
function Xc() {
  this.__data__ = [], this.size = 0;
}
function xr(n8, t10) {
  for (var e17 = n8.length; e17--; )
    if (_n(n8[e17][0], t10))
      return e17;
  return -1;
}
var Yc = Array.prototype;
var Qc = Yc.splice;
function Jc(n8) {
  var t10 = this.__data__, e17 = xr(t10, n8);
  if (e17 < 0)
    return false;
  var r7 = t10.length - 1;
  return e17 == r7 ? t10.pop() : Qc.call(t10, e17, 1), --this.size, true;
}
function tu(n8) {
  var t10 = this.__data__, e17 = xr(t10, n8);
  return e17 < 0 ? void 0 : t10[e17][1];
}
function eu(n8) {
  return xr(this.__data__, n8) > -1;
}
function nu(n8, t10) {
  var e17 = this.__data__, r7 = xr(e17, n8);
  return r7 < 0 ? (++this.size, e17.push([n8, t10])) : e17[r7][1] = t10, this;
}
function zt2(n8) {
  var t10 = -1, e17 = n8 == null ? 0 : n8.length;
  for (this.clear(); ++t10 < e17; ) {
    var r7 = n8[t10];
    this.set(r7[0], r7[1]);
  }
}
zt2.prototype.clear = Xc;
zt2.prototype.delete = Jc;
zt2.prototype.get = tu;
zt2.prototype.has = eu;
zt2.prototype.set = nu;
var Nn = me2(kt, "Map");
function ru() {
  this.size = 0, this.__data__ = {
    hash: new de5(),
    map: new (Nn || zt2)(),
    string: new de5()
  };
}
function su(n8) {
  var t10 = typeof n8;
  return t10 == "string" || t10 == "number" || t10 == "symbol" || t10 == "boolean" ? n8 !== "__proto__" : n8 === null;
}
function Lr(n8, t10) {
  var e17 = n8.__data__;
  return su(t10) ? e17[typeof t10 == "string" ? "string" : "hash"] : e17.map;
}
function iu(n8) {
  var t10 = Lr(this, n8).delete(n8);
  return this.size -= t10 ? 1 : 0, t10;
}
function lu(n8) {
  return Lr(this, n8).get(n8);
}
function ou(n8) {
  return Lr(this, n8).has(n8);
}
function au(n8, t10) {
  var e17 = Lr(this, n8), r7 = e17.size;
  return e17.set(n8, t10), this.size += e17.size == r7 ? 0 : 1, this;
}
function be(n8) {
  var t10 = -1, e17 = n8 == null ? 0 : n8.length;
  for (this.clear(); ++t10 < e17; ) {
    var r7 = n8[t10];
    this.set(r7[0], r7[1]);
  }
}
be.prototype.clear = ru;
be.prototype.delete = iu;
be.prototype.get = lu;
be.prototype.has = ou;
be.prototype.set = au;
function to(n8, t10) {
  for (var e17 = -1, r7 = t10.length, s13 = n8.length; ++e17 < r7; )
    n8[s13 + e17] = t10[e17];
  return n8;
}
var Ei = Jl(Object.getPrototypeOf, Object);
var cu = "[object Object]";
var uu = Function.prototype;
var hu = Object.prototype;
var eo = uu.toString;
var fu = hu.hasOwnProperty;
var du = eo.call(Object);
function gu(n8) {
  if (!Ut2(n8) || Ke(n8) != cu)
    return false;
  var t10 = Ei(n8);
  if (t10 === null)
    return true;
  var e17 = fu.call(t10, "constructor") && t10.constructor;
  return typeof e17 == "function" && e17 instanceof e17 && eo.call(e17) == du;
}
function pu() {
  this.__data__ = new zt2(), this.size = 0;
}
function mu(n8) {
  var t10 = this.__data__, e17 = t10.delete(n8);
  return this.size = t10.size, e17;
}
function bu(n8) {
  return this.__data__.get(n8);
}
function yu(n8) {
  return this.__data__.has(n8);
}
var vu = 200;
function Eu(n8, t10) {
  var e17 = this.__data__;
  if (e17 instanceof zt2) {
    var r7 = e17.__data__;
    if (!Nn || r7.length < vu - 1)
      return r7.push([n8, t10]), this.size = ++e17.size, this;
    e17 = this.__data__ = new be(r7);
  }
  return e17.set(n8, t10), this.size = e17.size, this;
}
function qt2(n8) {
  var t10 = this.__data__ = new zt2(n8);
  this.size = t10.size;
}
qt2.prototype.clear = pu;
qt2.prototype.delete = mu;
qt2.prototype.get = bu;
qt2.prototype.has = yu;
qt2.prototype.set = Eu;
function Au(n8, t10) {
  return n8 && On(t10, vi(t10), n8);
}
function Nu(n8, t10) {
  return n8 && On(t10, qn(t10), n8);
}
var no = typeof exports == "object" && exports && !exports.nodeType && exports;
var Zi = no && typeof module == "object" && module && !module.nodeType && module;
var wu = Zi && Zi.exports === no;
var Xi = wu ? kt.Buffer : void 0;
var Yi = Xi ? Xi.allocUnsafe : void 0;
function ro(n8, t10) {
  if (t10)
    return n8.slice();
  var e17 = n8.length, r7 = Yi ? Yi(e17) : new n8.constructor(e17);
  return n8.copy(r7), r7;
}
function Tu(n8, t10) {
  for (var e17 = -1, r7 = n8 == null ? 0 : n8.length, s13 = 0, i4 = []; ++e17 < r7; ) {
    var l5 = n8[e17];
    t10(l5, e17, n8) && (i4[s13++] = l5);
  }
  return i4;
}
function so() {
  return [];
}
var xu = Object.prototype;
var Lu = xu.propertyIsEnumerable;
var Qi = Object.getOwnPropertySymbols;
var Ai = Qi ? function(n8) {
  return n8 == null ? [] : (n8 = Object(n8), Tu(Qi(n8), function(t10) {
    return Lu.call(n8, t10);
  }));
} : so;
function Su(n8, t10) {
  return On(n8, Ai(n8), t10);
}
var _u = Object.getOwnPropertySymbols;
var io = _u ? function(n8) {
  for (var t10 = []; n8; )
    to(t10, Ai(n8)), n8 = Ei(n8);
  return t10;
} : so;
function Ou(n8, t10) {
  return On(n8, io(n8), t10);
}
function lo(n8, t10, e17) {
  var r7 = t10(n8);
  return fe3(n8) ? r7 : to(r7, e17(n8));
}
function zs(n8) {
  return lo(n8, vi, Ai);
}
function qu(n8) {
  return lo(n8, qn, io);
}
var Gs = me2(kt, "DataView");
var Ks = me2(kt, "Promise");
var Vs = me2(kt, "Set");
var Ji = "[object Map]";
var Cu = "[object Object]";
var tl = "[object Promise]";
var el = "[object Set]";
var nl = "[object WeakMap]";
var rl = "[object DataView]";
var Iu = pe2(Gs);
var Ru = pe2(Nn);
var ku = pe2(Ks);
var Bu = pe2(Vs);
var Mu = pe2(Fs);
var yt2 = Ke;
(Gs && yt2(new Gs(new ArrayBuffer(1))) != rl || Nn && yt2(new Nn()) != Ji || Ks && yt2(Ks.resolve()) != tl || Vs && yt2(new Vs()) != el || Fs && yt2(new Fs()) != nl) && (yt2 = function(n8) {
  var t10 = Ke(n8), e17 = t10 == Cu ? n8.constructor : void 0, r7 = e17 ? pe2(e17) : "";
  if (r7)
    switch (r7) {
      case Iu:
        return rl;
      case Ru:
        return Ji;
      case ku:
        return tl;
      case Bu:
        return el;
      case Mu:
        return nl;
    }
  return t10;
});
var $u = Object.prototype;
var Du = $u.hasOwnProperty;
function ju(n8) {
  var t10 = n8.length, e17 = new n8.constructor(t10);
  return t10 && typeof n8[0] == "string" && Du.call(n8, "index") && (e17.index = n8.index, e17.input = n8.input), e17;
}
var vr = kt.Uint8Array;
function Ni(n8) {
  var t10 = new n8.constructor(n8.byteLength);
  return new vr(t10).set(new vr(n8)), t10;
}
function Pu(n8, t10) {
  var e17 = t10 ? Ni(n8.buffer) : n8.buffer;
  return new n8.constructor(e17, n8.byteOffset, n8.byteLength);
}
var Uu = /\w*$/;
function Fu(n8) {
  var t10 = new n8.constructor(n8.source, Uu.exec(n8));
  return t10.lastIndex = n8.lastIndex, t10;
}
var sl = te5 ? te5.prototype : void 0;
var il = sl ? sl.valueOf : void 0;
function Hu(n8) {
  return il ? Object(il.call(n8)) : {};
}
function oo(n8, t10) {
  var e17 = t10 ? Ni(n8.buffer) : n8.buffer;
  return new n8.constructor(e17, n8.byteOffset, n8.length);
}
var zu = "[object Boolean]";
var Gu = "[object Date]";
var Ku = "[object Map]";
var Vu = "[object Number]";
var Wu = "[object RegExp]";
var Zu = "[object Set]";
var Xu = "[object String]";
var Yu = "[object Symbol]";
var Qu = "[object ArrayBuffer]";
var Ju = "[object DataView]";
var th = "[object Float32Array]";
var eh = "[object Float64Array]";
var nh = "[object Int8Array]";
var rh = "[object Int16Array]";
var sh = "[object Int32Array]";
var ih = "[object Uint8Array]";
var lh = "[object Uint8ClampedArray]";
var oh = "[object Uint16Array]";
var ah = "[object Uint32Array]";
function ch(n8, t10, e17) {
  var r7 = n8.constructor;
  switch (t10) {
    case Qu:
      return Ni(n8);
    case zu:
    case Gu:
      return new r7(+n8);
    case Ju:
      return Pu(n8, e17);
    case th:
    case eh:
    case nh:
    case rh:
    case sh:
    case ih:
    case lh:
    case oh:
    case ah:
      return oo(n8, e17);
    case Ku:
      return new r7();
    case Vu:
    case Xu:
      return new r7(n8);
    case Wu:
      return Fu(n8);
    case Zu:
      return new r7();
    case Yu:
      return Hu(n8);
  }
}
function ao(n8) {
  return typeof n8.constructor == "function" && !mi(n8) ? qa(Ei(n8)) : {};
}
var uh = "[object Map]";
function hh(n8) {
  return Ut2(n8) && yt2(n8) == uh;
}
var ll = Ue && Ue.isMap;
var fh = ll ? bi(ll) : hh;
var dh = "[object Set]";
function gh(n8) {
  return Ut2(n8) && yt2(n8) == dh;
}
var ol = Ue && Ue.isSet;
var ph = ol ? bi(ol) : gh;
var mh = 1;
var bh = 2;
var yh = 4;
var co = "[object Arguments]";
var vh = "[object Array]";
var Eh = "[object Boolean]";
var Ah = "[object Date]";
var Nh = "[object Error]";
var uo = "[object Function]";
var wh = "[object GeneratorFunction]";
var Th = "[object Map]";
var xh = "[object Number]";
var ho = "[object Object]";
var Lh = "[object RegExp]";
var Sh = "[object Set]";
var _h = "[object String]";
var Oh = "[object Symbol]";
var qh = "[object WeakMap]";
var Ch = "[object ArrayBuffer]";
var Ih = "[object DataView]";
var Rh = "[object Float32Array]";
var kh = "[object Float64Array]";
var Bh = "[object Int8Array]";
var Mh = "[object Int16Array]";
var $h = "[object Int32Array]";
var Dh = "[object Uint8Array]";
var jh = "[object Uint8ClampedArray]";
var Ph = "[object Uint16Array]";
var Uh = "[object Uint32Array]";
var P2 = {};
P2[co] = P2[vh] = P2[Ch] = P2[Ih] = P2[Eh] = P2[Ah] = P2[Rh] = P2[kh] = P2[Bh] = P2[Mh] = P2[$h] = P2[Th] = P2[xh] = P2[ho] = P2[Lh] = P2[Sh] = P2[_h] = P2[Oh] = P2[Dh] = P2[jh] = P2[Ph] = P2[Uh] = true;
P2[Nh] = P2[uo] = P2[qh] = false;
function pr(n8, t10, e17, r7, s13, i4) {
  var l5, a6 = t10 & mh, c12 = t10 & bh, h8 = t10 & yh;
  if (l5 !== void 0)
    return l5;
  if (!ee2(n8))
    return n8;
  var d9 = fe3(n8);
  if (d9) {
    if (l5 = ju(n8), !a6)
      return Gl(n8, l5);
  } else {
    var m6 = yt2(n8), g10 = m6 == uo || m6 == wh;
    if (En(n8))
      return ro(n8, a6);
    if (m6 == ho || m6 == co || g10 && !s13) {
      if (l5 = c12 || g10 ? {} : ao(n8), !a6)
        return c12 ? Ou(n8, Nu(l5, n8)) : Su(n8, Au(l5, n8));
    } else {
      if (!P2[m6])
        return s13 ? n8 : {};
      l5 = ch(n8, m6, a6);
    }
  }
  i4 || (i4 = new qt2());
  var p5 = i4.get(n8);
  if (p5)
    return p5;
  i4.set(n8, l5), ph(n8) ? n8.forEach(function(y5) {
    l5.add(pr(y5, t10, e17, y5, n8, i4));
  }) : fh(n8) && n8.forEach(function(y5, E11) {
    l5.set(E11, pr(y5, t10, e17, E11, n8, i4));
  });
  var b10 = h8 ? c12 ? qu : zs : c12 ? qn : vi, v6 = d9 ? void 0 : b10(n8);
  return ja(v6 || n8, function(y5, E11) {
    v6 && (E11 = y5, y5 = n8[E11]), Vl(l5, E11, pr(y5, t10, e17, E11, n8, i4));
  }), l5;
}
var Fh = 1;
var Hh = 4;
function De3(n8) {
  return pr(n8, Fh | Hh);
}
var zh = "__lodash_hash_undefined__";
function Gh(n8) {
  return this.__data__.set(n8, zh), this;
}
function Kh(n8) {
  return this.__data__.has(n8);
}
function Er(n8) {
  var t10 = -1, e17 = n8 == null ? 0 : n8.length;
  for (this.__data__ = new be(); ++t10 < e17; )
    this.add(n8[t10]);
}
Er.prototype.add = Er.prototype.push = Gh;
Er.prototype.has = Kh;
function Vh(n8, t10) {
  for (var e17 = -1, r7 = n8 == null ? 0 : n8.length; ++e17 < r7; )
    if (t10(n8[e17], e17, n8))
      return true;
  return false;
}
function Wh(n8, t10) {
  return n8.has(t10);
}
var Zh = 1;
var Xh = 2;
function fo(n8, t10, e17, r7, s13, i4) {
  var l5 = e17 & Zh, a6 = n8.length, c12 = t10.length;
  if (a6 != c12 && !(l5 && c12 > a6))
    return false;
  var h8 = i4.get(n8), d9 = i4.get(t10);
  if (h8 && d9)
    return h8 == t10 && d9 == n8;
  var m6 = -1, g10 = true, p5 = e17 & Xh ? new Er() : void 0;
  for (i4.set(n8, t10), i4.set(t10, n8); ++m6 < a6; ) {
    var b10 = n8[m6], v6 = t10[m6];
    if (r7)
      var y5 = l5 ? r7(v6, b10, m6, t10, n8, i4) : r7(b10, v6, m6, n8, t10, i4);
    if (y5 !== void 0) {
      if (y5)
        continue;
      g10 = false;
      break;
    }
    if (p5) {
      if (!Vh(t10, function(E11, w12) {
        if (!Wh(p5, w12) && (b10 === E11 || s13(b10, E11, e17, r7, i4)))
          return p5.push(w12);
      })) {
        g10 = false;
        break;
      }
    } else if (!(b10 === v6 || s13(b10, v6, e17, r7, i4))) {
      g10 = false;
      break;
    }
  }
  return i4.delete(n8), i4.delete(t10), g10;
}
function Yh(n8) {
  var t10 = -1, e17 = Array(n8.size);
  return n8.forEach(function(r7, s13) {
    e17[++t10] = [s13, r7];
  }), e17;
}
function Qh(n8) {
  var t10 = -1, e17 = Array(n8.size);
  return n8.forEach(function(r7) {
    e17[++t10] = r7;
  }), e17;
}
var Jh = 1;
var tf = 2;
var ef = "[object Boolean]";
var nf = "[object Date]";
var rf = "[object Error]";
var sf = "[object Map]";
var lf = "[object Number]";
var of = "[object RegExp]";
var af = "[object Set]";
var cf = "[object String]";
var uf = "[object Symbol]";
var hf = "[object ArrayBuffer]";
var ff = "[object DataView]";
var al = te5 ? te5.prototype : void 0;
var Cs = al ? al.valueOf : void 0;
function df(n8, t10, e17, r7, s13, i4, l5) {
  switch (e17) {
    case ff:
      if (n8.byteLength != t10.byteLength || n8.byteOffset != t10.byteOffset)
        return false;
      n8 = n8.buffer, t10 = t10.buffer;
    case hf:
      return !(n8.byteLength != t10.byteLength || !i4(new vr(n8), new vr(t10)));
    case ef:
    case nf:
    case lf:
      return _n(+n8, +t10);
    case rf:
      return n8.name == t10.name && n8.message == t10.message;
    case of:
    case cf:
      return n8 == t10 + "";
    case sf:
      var a6 = Yh;
    case af:
      var c12 = r7 & Jh;
      if (a6 || (a6 = Qh), n8.size != t10.size && !c12)
        return false;
      var h8 = l5.get(n8);
      if (h8)
        return h8 == t10;
      r7 |= tf, l5.set(n8, t10);
      var d9 = fo(a6(n8), a6(t10), r7, s13, i4, l5);
      return l5.delete(n8), d9;
    case uf:
      if (Cs)
        return Cs.call(n8) == Cs.call(t10);
  }
  return false;
}
var gf = 1;
var pf = Object.prototype;
var mf = pf.hasOwnProperty;
function bf(n8, t10, e17, r7, s13, i4) {
  var l5 = e17 & gf, a6 = zs(n8), c12 = a6.length, h8 = zs(t10), d9 = h8.length;
  if (c12 != d9 && !l5)
    return false;
  for (var m6 = c12; m6--; ) {
    var g10 = a6[m6];
    if (!(l5 ? g10 in t10 : mf.call(t10, g10)))
      return false;
  }
  var p5 = i4.get(n8), b10 = i4.get(t10);
  if (p5 && b10)
    return p5 == t10 && b10 == n8;
  var v6 = true;
  i4.set(n8, t10), i4.set(t10, n8);
  for (var y5 = l5; ++m6 < c12; ) {
    g10 = a6[m6];
    var E11 = n8[g10], w12 = t10[g10];
    if (r7)
      var T6 = l5 ? r7(w12, E11, g10, t10, n8, i4) : r7(E11, w12, g10, n8, t10, i4);
    if (!(T6 === void 0 ? E11 === w12 || s13(E11, w12, e17, r7, i4) : T6)) {
      v6 = false;
      break;
    }
    y5 || (y5 = g10 == "constructor");
  }
  if (v6 && !y5) {
    var _10 = n8.constructor, L5 = t10.constructor;
    _10 != L5 && "constructor" in n8 && "constructor" in t10 && !(typeof _10 == "function" && _10 instanceof _10 && typeof L5 == "function" && L5 instanceof L5) && (v6 = false);
  }
  return i4.delete(n8), i4.delete(t10), v6;
}
var yf = 1;
var cl = "[object Arguments]";
var ul = "[object Array]";
var cr = "[object Object]";
var vf = Object.prototype;
var hl = vf.hasOwnProperty;
function Ef(n8, t10, e17, r7, s13, i4) {
  var l5 = fe3(n8), a6 = fe3(t10), c12 = l5 ? ul : yt2(n8), h8 = a6 ? ul : yt2(t10);
  c12 = c12 == cl ? cr : c12, h8 = h8 == cl ? cr : h8;
  var d9 = c12 == cr, m6 = h8 == cr, g10 = c12 == h8;
  if (g10 && En(n8)) {
    if (!En(t10))
      return false;
    l5 = true, d9 = false;
  }
  if (g10 && !d9)
    return i4 || (i4 = new qt2()), l5 || yi(n8) ? fo(n8, t10, e17, r7, s13, i4) : df(n8, t10, c12, e17, r7, s13, i4);
  if (!(e17 & yf)) {
    var p5 = d9 && hl.call(n8, "__wrapped__"), b10 = m6 && hl.call(t10, "__wrapped__");
    if (p5 || b10) {
      var v6 = p5 ? n8.value() : n8, y5 = b10 ? t10.value() : t10;
      return i4 || (i4 = new qt2()), s13(v6, y5, e17, r7, i4);
    }
  }
  return g10 ? (i4 || (i4 = new qt2()), bf(n8, t10, e17, r7, s13, i4)) : false;
}
function go(n8, t10, e17, r7, s13) {
  return n8 === t10 ? true : n8 == null || t10 == null || !Ut2(n8) && !Ut2(t10) ? n8 !== n8 && t10 !== t10 : Ef(n8, t10, e17, r7, go, s13);
}
function Af(n8) {
  return function(t10, e17, r7) {
    for (var s13 = -1, i4 = Object(t10), l5 = r7(t10), a6 = l5.length; a6--; ) {
      var c12 = l5[++s13];
      if (e17(i4[c12], c12, i4) === false)
        break;
    }
    return t10;
  };
}
var Nf = Af();
function Ws(n8, t10, e17) {
  (e17 !== void 0 && !_n(n8[t10], e17) || e17 === void 0 && !(t10 in n8)) && pi(n8, t10, e17);
}
function wf(n8) {
  return Ut2(n8) && Tr(n8);
}
function Zs(n8, t10) {
  if (!(t10 === "constructor" && typeof n8[t10] == "function") && t10 != "__proto__")
    return n8[t10];
}
function Tf(n8) {
  return On(n8, qn(n8));
}
function xf(n8, t10, e17, r7, s13, i4, l5) {
  var a6 = Zs(n8, e17), c12 = Zs(t10, e17), h8 = l5.get(c12);
  if (h8) {
    Ws(n8, e17, h8);
    return;
  }
  var d9 = i4 ? i4(a6, c12, e17 + "", n8, t10, l5) : void 0, m6 = d9 === void 0;
  if (m6) {
    var g10 = fe3(c12), p5 = !g10 && En(c12), b10 = !g10 && !p5 && yi(c12);
    d9 = c12, g10 || p5 || b10 ? fe3(a6) ? d9 = a6 : wf(a6) ? d9 = Gl(a6) : p5 ? (m6 = false, d9 = ro(c12, true)) : b10 ? (m6 = false, d9 = oo(c12, true)) : d9 = [] : gu(c12) || Hs(c12) ? (d9 = a6, Hs(a6) ? d9 = Tf(a6) : (!ee2(a6) || gi(a6)) && (d9 = ao(c12))) : m6 = false;
  }
  m6 && (l5.set(c12, d9), s13(d9, c12, r7, i4, l5), l5.delete(c12)), Ws(n8, e17, d9);
}
function po(n8, t10, e17, r7, s13) {
  n8 !== t10 && Nf(t10, function(i4, l5) {
    if (s13 || (s13 = new qt2()), ee2(i4))
      xf(n8, t10, l5, e17, po, r7, s13);
    else {
      var a6 = r7 ? r7(Zs(n8, l5), i4, l5 + "", n8, t10, s13) : void 0;
      a6 === void 0 && (a6 = i4), Ws(n8, l5, a6);
    }
  }, qn);
}
function wi(n8, t10) {
  return go(n8, t10);
}
var Jt2 = Wa(function(n8, t10, e17) {
  po(n8, t10, e17);
});
var q5 = ((n8) => (n8[n8.TYPE = 3] = "TYPE", n8[n8.LEVEL = 12] = "LEVEL", n8[n8.ATTRIBUTE = 13] = "ATTRIBUTE", n8[n8.BLOT = 14] = "BLOT", n8[n8.INLINE = 7] = "INLINE", n8[n8.BLOCK = 11] = "BLOCK", n8[n8.BLOCK_BLOT = 10] = "BLOCK_BLOT", n8[n8.INLINE_BLOT = 6] = "INLINE_BLOT", n8[n8.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n8[n8.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n8[n8.ANY = 15] = "ANY", n8))(q5 || {});
var It2 = class {
  constructor(t10, e17, r7 = {}) {
    this.attrName = t10, this.keyName = e17;
    const s13 = q5.TYPE & q5.ATTRIBUTE;
    this.scope = r7.scope != null ? (
      // Ignore type bits, force attribute bit
      r7.scope & q5.LEVEL | s13
    ) : q5.ATTRIBUTE, r7.whitelist != null && (this.whitelist = r7.whitelist);
  }
  static keys(t10) {
    return Array.from(t10.attributes).map((e17) => e17.name);
  }
  add(t10, e17) {
    return this.canAdd(t10, e17) ? (t10.setAttribute(this.keyName, e17), true) : false;
  }
  canAdd(t10, e17) {
    return this.whitelist == null ? true : typeof e17 == "string" ? this.whitelist.indexOf(e17.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e17) > -1;
  }
  remove(t10) {
    t10.removeAttribute(this.keyName);
  }
  value(t10) {
    const e17 = t10.getAttribute(this.keyName);
    return this.canAdd(t10, e17) && e17 ? e17 : "";
  }
};
var je = class extends Error {
  constructor(t10) {
    t10 = "[Parchment] " + t10, super(t10), this.message = t10, this.name = this.constructor.name;
  }
};
var mo = class Xs {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t10, e17 = false) {
    if (t10 == null)
      return null;
    if (this.blots.has(t10))
      return this.blots.get(t10) || null;
    if (e17) {
      let r7 = null;
      try {
        r7 = t10.parentNode;
      } catch {
        return null;
      }
      return this.find(r7, e17);
    }
    return null;
  }
  create(t10, e17, r7) {
    const s13 = this.query(e17);
    if (s13 == null)
      throw new je(`Unable to create ${e17} blot`);
    const i4 = s13, l5 = (
      // @ts-expect-error Fix me later
      e17 instanceof Node || e17.nodeType === Node.TEXT_NODE ? e17 : i4.create(r7)
    ), a6 = new i4(t10, l5, r7);
    return Xs.blots.set(a6.domNode, a6), a6;
  }
  find(t10, e17 = false) {
    return Xs.find(t10, e17);
  }
  query(t10, e17 = q5.ANY) {
    let r7;
    return typeof t10 == "string" ? r7 = this.types[t10] || this.attributes[t10] : t10 instanceof Text || t10.nodeType === Node.TEXT_NODE ? r7 = this.types.text : typeof t10 == "number" ? t10 & q5.LEVEL & q5.BLOCK ? r7 = this.types.block : t10 & q5.LEVEL & q5.INLINE && (r7 = this.types.inline) : t10 instanceof Element && ((t10.getAttribute("class") || "").split(/\s+/).some((s13) => (r7 = this.classes[s13], !!r7)), r7 = r7 || this.tags[t10.tagName]), r7 == null ? null : "scope" in r7 && e17 & q5.LEVEL & r7.scope && e17 & q5.TYPE & r7.scope ? r7 : null;
  }
  register(...t10) {
    return t10.map((e17) => {
      const r7 = "blotName" in e17, s13 = "attrName" in e17;
      if (!r7 && !s13)
        throw new je("Invalid definition");
      if (r7 && e17.blotName === "abstract")
        throw new je("Cannot register abstract class");
      const i4 = r7 ? e17.blotName : s13 ? e17.attrName : void 0;
      return this.types[i4] = e17, s13 ? typeof e17.keyName == "string" && (this.attributes[e17.keyName] = e17) : r7 && (e17.className && (this.classes[e17.className] = e17), e17.tagName && (Array.isArray(e17.tagName) ? e17.tagName = e17.tagName.map((l5) => l5.toUpperCase()) : e17.tagName = e17.tagName.toUpperCase(), (Array.isArray(e17.tagName) ? e17.tagName : [e17.tagName]).forEach((l5) => {
        (this.tags[l5] == null || e17.className == null) && (this.tags[l5] = e17);
      }))), e17;
    });
  }
};
mo.blots = /* @__PURE__ */ new WeakMap();
var Fe = mo;
function fl(n8, t10) {
  return (n8.getAttribute("class") || "").split(/\s+/).filter((e17) => e17.indexOf(`${t10}-`) === 0);
}
var Lf = class extends It2 {
  static keys(t10) {
    return (t10.getAttribute("class") || "").split(/\s+/).map((e17) => e17.split("-").slice(0, -1).join("-"));
  }
  add(t10, e17) {
    return this.canAdd(t10, e17) ? (this.remove(t10), t10.classList.add(`${this.keyName}-${e17}`), true) : false;
  }
  remove(t10) {
    fl(t10, this.keyName).forEach((e17) => {
      t10.classList.remove(e17);
    }), t10.classList.length === 0 && t10.removeAttribute("class");
  }
  value(t10) {
    const e17 = (fl(t10, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t10, e17) ? e17 : "";
  }
};
var Nt = Lf;
function Is(n8) {
  const t10 = n8.split("-"), e17 = t10.slice(1).map((r7) => r7[0].toUpperCase() + r7.slice(1)).join("");
  return t10[0] + e17;
}
var Sf = class extends It2 {
  static keys(t10) {
    return (t10.getAttribute("style") || "").split(";").map((e17) => e17.split(":")[0].trim());
  }
  add(t10, e17) {
    return this.canAdd(t10, e17) ? (t10.style[Is(this.keyName)] = e17, true) : false;
  }
  remove(t10) {
    t10.style[Is(this.keyName)] = "", t10.getAttribute("style") || t10.removeAttribute("style");
  }
  value(t10) {
    const e17 = t10.style[Is(this.keyName)];
    return this.canAdd(t10, e17) ? e17 : "";
  }
};
var ne2 = Sf;
var _f = class {
  constructor(t10) {
    this.attributes = {}, this.domNode = t10, this.build();
  }
  attribute(t10, e17) {
    e17 ? t10.add(this.domNode, e17) && (t10.value(this.domNode) != null ? this.attributes[t10.attrName] = t10 : delete this.attributes[t10.attrName]) : (t10.remove(this.domNode), delete this.attributes[t10.attrName]);
  }
  build() {
    this.attributes = {};
    const t10 = Fe.find(this.domNode);
    if (t10 == null)
      return;
    const e17 = It2.keys(this.domNode), r7 = Nt.keys(this.domNode), s13 = ne2.keys(this.domNode);
    e17.concat(r7).concat(s13).forEach((i4) => {
      const l5 = t10.scroll.query(i4, q5.ATTRIBUTE);
      l5 instanceof It2 && (this.attributes[l5.attrName] = l5);
    });
  }
  copy(t10) {
    Object.keys(this.attributes).forEach((e17) => {
      const r7 = this.attributes[e17].value(this.domNode);
      t10.format(e17, r7);
    });
  }
  move(t10) {
    this.copy(t10), Object.keys(this.attributes).forEach((e17) => {
      this.attributes[e17].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t10, e17) => (t10[e17] = this.attributes[e17].value(this.domNode), t10),
      {}
    );
  }
};
var Sr = _f;
var bo = class {
  constructor(t10, e17) {
    this.scroll = t10, this.domNode = e17, Fe.blots.set(e17, this), this.prev = null, this.next = null;
  }
  static create(t10) {
    if (this.tagName == null)
      throw new je("Blot definition missing tagName");
    let e17, r7;
    return Array.isArray(this.tagName) ? (typeof t10 == "string" ? (r7 = t10.toUpperCase(), parseInt(r7, 10).toString() === r7 && (r7 = parseInt(r7, 10))) : typeof t10 == "number" && (r7 = t10), typeof r7 == "number" ? e17 = document.createElement(this.tagName[r7 - 1]) : r7 && this.tagName.indexOf(r7) > -1 ? e17 = document.createElement(r7) : e17 = document.createElement(this.tagName[0])) : e17 = document.createElement(this.tagName), this.className && e17.classList.add(this.className), e17;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t10 = this.domNode.cloneNode(false);
    return this.scroll.create(t10);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), Fe.blots.delete(this.domNode);
  }
  deleteAt(t10, e17) {
    this.isolate(t10, e17).remove();
  }
  formatAt(t10, e17, r7, s13) {
    const i4 = this.isolate(t10, e17);
    if (this.scroll.query(r7, q5.BLOT) != null && s13)
      i4.wrap(r7, s13);
    else if (this.scroll.query(r7, q5.ATTRIBUTE) != null) {
      const l5 = this.scroll.create(this.statics.scope);
      i4.wrap(l5), l5.format(r7, s13);
    }
  }
  insertAt(t10, e17, r7) {
    const s13 = r7 == null ? this.scroll.create("text", e17) : this.scroll.create(e17, r7), i4 = this.split(t10);
    this.parent.insertBefore(s13, i4 || void 0);
  }
  isolate(t10, e17) {
    const r7 = this.split(t10);
    if (r7 == null)
      throw new Error("Attempt to isolate at end");
    return r7.split(e17), r7;
  }
  length() {
    return 1;
  }
  offset(t10 = this.parent) {
    return this.parent == null || this === t10 ? 0 : this.parent.children.offset(this) + this.parent.offset(t10);
  }
  optimize(t10) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t10, e17) {
    const r7 = typeof t10 == "string" ? this.scroll.create(t10, e17) : t10;
    return this.parent != null && (this.parent.insertBefore(r7, this.next || void 0), this.remove()), r7;
  }
  split(t10, e17) {
    return t10 === 0 ? this : this.next;
  }
  update(t10, e17) {
  }
  wrap(t10, e17) {
    const r7 = typeof t10 == "string" ? this.scroll.create(t10, e17) : t10;
    if (this.parent != null && this.parent.insertBefore(r7, this.next || void 0), typeof r7.appendChild != "function")
      throw new je(`Cannot wrap ${t10}`);
    return r7.appendChild(this), r7;
  }
};
bo.blotName = "abstract";
var yo = bo;
var vo = class extends yo {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t10) {
    return true;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t10, e17) {
    return this.domNode === t10 || this.domNode.compareDocumentPosition(t10) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e17, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t10, e17) {
    let r7 = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t10 > 0 && (r7 += 1), [this.parent.domNode, r7];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || true
    };
  }
};
vo.scope = q5.INLINE_BLOT;
var Of = vo;
var Q3 = Of;
var qf = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t10) {
    if (this.insertBefore(t10[0], null), t10.length > 1) {
      const e17 = t10.slice(1);
      this.append(...e17);
    }
  }
  at(t10) {
    const e17 = this.iterator();
    let r7 = e17();
    for (; r7 && t10 > 0; )
      t10 -= 1, r7 = e17();
    return r7;
  }
  contains(t10) {
    const e17 = this.iterator();
    let r7 = e17();
    for (; r7; ) {
      if (r7 === t10)
        return true;
      r7 = e17();
    }
    return false;
  }
  indexOf(t10) {
    const e17 = this.iterator();
    let r7 = e17(), s13 = 0;
    for (; r7; ) {
      if (r7 === t10)
        return s13;
      s13 += 1, r7 = e17();
    }
    return -1;
  }
  insertBefore(t10, e17) {
    t10 != null && (this.remove(t10), t10.next = e17, e17 != null ? (t10.prev = e17.prev, e17.prev != null && (e17.prev.next = t10), e17.prev = t10, e17 === this.head && (this.head = t10)) : this.tail != null ? (this.tail.next = t10, t10.prev = this.tail, this.tail = t10) : (t10.prev = null, this.head = this.tail = t10), this.length += 1);
  }
  offset(t10) {
    let e17 = 0, r7 = this.head;
    for (; r7 != null; ) {
      if (r7 === t10)
        return e17;
      e17 += r7.length(), r7 = r7.next;
    }
    return -1;
  }
  remove(t10) {
    this.contains(t10) && (t10.prev != null && (t10.prev.next = t10.next), t10.next != null && (t10.next.prev = t10.prev), t10 === this.head && (this.head = t10.next), t10 === this.tail && (this.tail = t10.prev), this.length -= 1);
  }
  iterator(t10 = this.head) {
    return () => {
      const e17 = t10;
      return t10 != null && (t10 = t10.next), e17;
    };
  }
  find(t10, e17 = false) {
    const r7 = this.iterator();
    let s13 = r7();
    for (; s13; ) {
      const i4 = s13.length();
      if (t10 < i4 || e17 && t10 === i4 && (s13.next == null || s13.next.length() !== 0))
        return [s13, t10];
      t10 -= i4, s13 = r7();
    }
    return [null, 0];
  }
  forEach(t10) {
    const e17 = this.iterator();
    let r7 = e17();
    for (; r7; )
      t10(r7), r7 = e17();
  }
  forEachAt(t10, e17, r7) {
    if (e17 <= 0)
      return;
    const [s13, i4] = this.find(t10);
    let l5 = t10 - i4;
    const a6 = this.iterator(s13);
    let c12 = a6();
    for (; c12 && l5 < t10 + e17; ) {
      const h8 = c12.length();
      t10 > l5 ? r7(
        c12,
        t10 - l5,
        Math.min(e17, l5 + h8 - t10)
      ) : r7(c12, 0, Math.min(h8, t10 + e17 - l5)), l5 += h8, c12 = a6();
    }
  }
  map(t10) {
    return this.reduce((e17, r7) => (e17.push(t10(r7)), e17), []);
  }
  reduce(t10, e17) {
    const r7 = this.iterator();
    let s13 = r7();
    for (; s13; )
      e17 = t10(e17, s13), s13 = r7();
    return e17;
  }
};
function dl(n8, t10) {
  const e17 = t10.find(n8);
  if (e17)
    return e17;
  try {
    return t10.create(n8);
  } catch {
    const r7 = t10.create(q5.INLINE);
    return Array.from(n8.childNodes).forEach((s13) => {
      r7.domNode.appendChild(s13);
    }), n8.parentNode && n8.parentNode.replaceChild(r7.domNode, n8), r7.attach(), r7;
  }
}
var Eo = class Zt2 extends yo {
  constructor(t10, e17) {
    super(t10, e17), this.uiNode = null, this.build();
  }
  appendChild(t10) {
    this.insertBefore(t10);
  }
  attach() {
    super.attach(), this.children.forEach((t10) => {
      t10.attach();
    });
  }
  attachUI(t10) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t10, Zt2.uiClass && this.uiNode.classList.add(Zt2.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new qf(), Array.from(this.domNode.childNodes).filter((t10) => t10 !== this.uiNode).reverse().forEach((t10) => {
      try {
        const e17 = dl(t10, this.scroll);
        this.insertBefore(e17, this.children.head || void 0);
      } catch (e17) {
        if (e17 instanceof je)
          return;
        throw e17;
      }
    });
  }
  deleteAt(t10, e17) {
    if (t10 === 0 && e17 === this.length())
      return this.remove();
    this.children.forEachAt(t10, e17, (r7, s13, i4) => {
      r7.deleteAt(s13, i4);
    });
  }
  descendant(t10, e17 = 0) {
    const [r7, s13] = this.children.find(e17);
    return t10.blotName == null && t10(r7) || t10.blotName != null && r7 instanceof t10 ? [r7, s13] : r7 instanceof Zt2 ? r7.descendant(t10, s13) : [null, -1];
  }
  descendants(t10, e17 = 0, r7 = Number.MAX_VALUE) {
    let s13 = [], i4 = r7;
    return this.children.forEachAt(
      e17,
      r7,
      (l5, a6, c12) => {
        (t10.blotName == null && t10(l5) || t10.blotName != null && l5 instanceof t10) && s13.push(l5), l5 instanceof Zt2 && (s13 = s13.concat(
          l5.descendants(t10, a6, i4)
        )), i4 -= c12;
      }
    ), s13;
  }
  detach() {
    this.children.forEach((t10) => {
      t10.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t10 = false;
    this.children.forEach((e17) => {
      t10 || this.statics.allowedChildren.some(
        (r7) => e17 instanceof r7
      ) || (e17.statics.scope === q5.BLOCK_BLOT ? (e17.next != null && this.splitAfter(e17), e17.prev != null && this.splitAfter(e17.prev), e17.parent.unwrap(), t10 = true) : e17 instanceof Zt2 ? e17.unwrap() : e17.remove());
    });
  }
  formatAt(t10, e17, r7, s13) {
    this.children.forEachAt(t10, e17, (i4, l5, a6) => {
      i4.formatAt(l5, a6, r7, s13);
    });
  }
  insertAt(t10, e17, r7) {
    const [s13, i4] = this.children.find(t10);
    if (s13)
      s13.insertAt(i4, e17, r7);
    else {
      const l5 = r7 == null ? this.scroll.create("text", e17) : this.scroll.create(e17, r7);
      this.appendChild(l5);
    }
  }
  insertBefore(t10, e17) {
    t10.parent != null && t10.parent.children.remove(t10);
    let r7 = null;
    this.children.insertBefore(t10, e17 || null), t10.parent = this, e17 != null && (r7 = e17.domNode), (this.domNode.parentNode !== t10.domNode || this.domNode.nextSibling !== r7) && this.domNode.insertBefore(t10.domNode, r7), t10.attach();
  }
  length() {
    return this.children.reduce((t10, e17) => t10 + e17.length(), 0);
  }
  moveChildren(t10, e17) {
    this.children.forEach((r7) => {
      t10.insertBefore(r7, e17);
    });
  }
  optimize(t10) {
    if (super.optimize(t10), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e17 = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e17);
      } else
        this.remove();
  }
  path(t10, e17 = false) {
    const [r7, s13] = this.children.find(t10, e17), i4 = [[this, t10]];
    return r7 instanceof Zt2 ? i4.concat(r7.path(s13, e17)) : (r7 != null && i4.push([r7, s13]), i4);
  }
  removeChild(t10) {
    this.children.remove(t10);
  }
  replaceWith(t10, e17) {
    const r7 = typeof t10 == "string" ? this.scroll.create(t10, e17) : t10;
    return r7 instanceof Zt2 && this.moveChildren(r7), super.replaceWith(r7);
  }
  split(t10, e17 = false) {
    if (!e17) {
      if (t10 === 0)
        return this;
      if (t10 === this.length())
        return this.next;
    }
    const r7 = this.clone();
    return this.parent && this.parent.insertBefore(r7, this.next || void 0), this.children.forEachAt(t10, this.length(), (s13, i4, l5) => {
      const a6 = s13.split(i4, e17);
      a6 != null && r7.appendChild(a6);
    }), r7;
  }
  splitAfter(t10) {
    const e17 = this.clone();
    for (; t10.next != null; )
      e17.appendChild(t10.next);
    return this.parent && this.parent.insertBefore(e17, this.next || void 0), e17;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t10, e17) {
    const r7 = [], s13 = [];
    t10.forEach((i4) => {
      i4.target === this.domNode && i4.type === "childList" && (r7.push(...i4.addedNodes), s13.push(...i4.removedNodes));
    }), s13.forEach((i4) => {
      if (i4.parentNode != null && // @ts-expect-error Fix me later
      i4.tagName !== "IFRAME" && document.body.compareDocumentPosition(i4) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const l5 = this.scroll.find(i4);
      l5 != null && (l5.domNode.parentNode == null || l5.domNode.parentNode === this.domNode) && l5.detach();
    }), r7.filter((i4) => i4.parentNode === this.domNode && i4 !== this.uiNode).sort((i4, l5) => i4 === l5 ? 0 : i4.compareDocumentPosition(l5) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i4) => {
      let l5 = null;
      i4.nextSibling != null && (l5 = this.scroll.find(i4.nextSibling));
      const a6 = dl(i4, this.scroll);
      (a6.next !== l5 || a6.next == null) && (a6.parent != null && a6.parent.removeChild(this), this.insertBefore(a6, l5 || void 0));
    }), this.enforceAllowedChildren();
  }
};
Eo.uiClass = "";
var Cf = Eo;
var Et2 = Cf;
function If(n8, t10) {
  if (Object.keys(n8).length !== Object.keys(t10).length)
    return false;
  for (const e17 in n8)
    if (n8[e17] !== t10[e17])
      return false;
  return true;
}
var Ie = class Re3 extends Et2 {
  static create(t10) {
    return super.create(t10);
  }
  static formats(t10, e17) {
    const r7 = e17.query(Re3.blotName);
    if (!(r7 != null && t10.tagName === r7.tagName)) {
      if (typeof this.tagName == "string")
        return true;
      if (Array.isArray(this.tagName))
        return t10.tagName.toLowerCase();
    }
  }
  constructor(t10, e17) {
    super(t10, e17), this.attributes = new Sr(this.domNode);
  }
  format(t10, e17) {
    if (t10 === this.statics.blotName && !e17)
      this.children.forEach((r7) => {
        r7 instanceof Re3 || (r7 = r7.wrap(Re3.blotName, true)), this.attributes.copy(r7);
      }), this.unwrap();
    else {
      const r7 = this.scroll.query(t10, q5.INLINE);
      if (r7 == null)
        return;
      r7 instanceof It2 ? this.attributes.attribute(r7, e17) : e17 && (t10 !== this.statics.blotName || this.formats()[t10] !== e17) && this.replaceWith(t10, e17);
    }
  }
  formats() {
    const t10 = this.attributes.values(), e17 = this.statics.formats(this.domNode, this.scroll);
    return e17 != null && (t10[this.statics.blotName] = e17), t10;
  }
  formatAt(t10, e17, r7, s13) {
    this.formats()[r7] != null || this.scroll.query(r7, q5.ATTRIBUTE) ? this.isolate(t10, e17).format(r7, s13) : super.formatAt(t10, e17, r7, s13);
  }
  optimize(t10) {
    super.optimize(t10);
    const e17 = this.formats();
    if (Object.keys(e17).length === 0)
      return this.unwrap();
    const r7 = this.next;
    r7 instanceof Re3 && r7.prev === this && If(e17, r7.formats()) && (r7.moveChildren(this), r7.remove());
  }
  replaceWith(t10, e17) {
    const r7 = super.replaceWith(t10, e17);
    return this.attributes.copy(r7), r7;
  }
  update(t10, e17) {
    super.update(t10, e17), t10.some(
      (r7) => r7.target === this.domNode && r7.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t10, e17) {
    const r7 = super.wrap(t10, e17);
    return r7 instanceof Re3 && this.attributes.move(r7), r7;
  }
};
Ie.allowedChildren = [Ie, Q3], Ie.blotName = "inline", Ie.scope = q5.INLINE_BLOT, Ie.tagName = "SPAN";
var Rf = Ie;
var Ti = Rf;
var ke = class Ys extends Et2 {
  static create(t10) {
    return super.create(t10);
  }
  static formats(t10, e17) {
    const r7 = e17.query(Ys.blotName);
    if (!(r7 != null && t10.tagName === r7.tagName)) {
      if (typeof this.tagName == "string")
        return true;
      if (Array.isArray(this.tagName))
        return t10.tagName.toLowerCase();
    }
  }
  constructor(t10, e17) {
    super(t10, e17), this.attributes = new Sr(this.domNode);
  }
  format(t10, e17) {
    const r7 = this.scroll.query(t10, q5.BLOCK);
    r7 != null && (r7 instanceof It2 ? this.attributes.attribute(r7, e17) : t10 === this.statics.blotName && !e17 ? this.replaceWith(Ys.blotName) : e17 && (t10 !== this.statics.blotName || this.formats()[t10] !== e17) && this.replaceWith(t10, e17));
  }
  formats() {
    const t10 = this.attributes.values(), e17 = this.statics.formats(this.domNode, this.scroll);
    return e17 != null && (t10[this.statics.blotName] = e17), t10;
  }
  formatAt(t10, e17, r7, s13) {
    this.scroll.query(r7, q5.BLOCK) != null ? this.format(r7, s13) : super.formatAt(t10, e17, r7, s13);
  }
  insertAt(t10, e17, r7) {
    if (r7 == null || this.scroll.query(e17, q5.INLINE) != null)
      super.insertAt(t10, e17, r7);
    else {
      const s13 = this.split(t10);
      if (s13 != null) {
        const i4 = this.scroll.create(e17, r7);
        s13.parent.insertBefore(i4, s13);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t10, e17) {
    const r7 = super.replaceWith(t10, e17);
    return this.attributes.copy(r7), r7;
  }
  update(t10, e17) {
    super.update(t10, e17), t10.some(
      (r7) => r7.target === this.domNode && r7.type === "attributes"
    ) && this.attributes.build();
  }
};
ke.blotName = "block", ke.scope = q5.BLOCK_BLOT, ke.tagName = "P", ke.allowedChildren = [
  Ti,
  ke,
  Q3
];
var kf = ke;
var wn = kf;
var Qs = class extends Et2 {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t10, e17) {
    super.deleteAt(t10, e17), this.enforceAllowedChildren();
  }
  formatAt(t10, e17, r7, s13) {
    super.formatAt(t10, e17, r7, s13), this.enforceAllowedChildren();
  }
  insertAt(t10, e17, r7) {
    super.insertAt(t10, e17, r7), this.enforceAllowedChildren();
  }
  optimize(t10) {
    super.optimize(t10), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
Qs.blotName = "container", Qs.scope = q5.BLOCK_BLOT;
var Bf = Qs;
var _r = Bf;
var Mf = class extends Q3 {
  static formats(t10, e17) {
  }
  format(t10, e17) {
    super.formatAt(0, this.length(), t10, e17);
  }
  formatAt(t10, e17, r7, s13) {
    t10 === 0 && e17 === this.length() ? this.format(r7, s13) : super.formatAt(t10, e17, r7, s13);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
};
var it2 = Mf;
var $f = {
  attributes: true,
  characterData: true,
  characterDataOldValue: true,
  childList: true,
  subtree: true
};
var Df = 100;
var Be = class extends Et2 {
  constructor(t10, e17) {
    super(null, e17), this.registry = t10, this.scroll = this, this.build(), this.observer = new MutationObserver((r7) => {
      this.update(r7);
    }), this.observer.observe(this.domNode, $f), this.attach();
  }
  create(t10, e17) {
    return this.registry.create(this, t10, e17);
  }
  find(t10, e17 = false) {
    const r7 = this.registry.find(t10, e17);
    return r7 ? r7.scroll === this ? r7 : e17 ? this.find(r7.scroll.domNode.parentNode, true) : null : null;
  }
  query(t10, e17 = q5.ANY) {
    return this.registry.query(t10, e17);
  }
  register(...t10) {
    return this.registry.register(...t10);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t10, e17) {
    this.update(), t10 === 0 && e17 === this.length() ? this.children.forEach((r7) => {
      r7.remove();
    }) : super.deleteAt(t10, e17);
  }
  formatAt(t10, e17, r7, s13) {
    this.update(), super.formatAt(t10, e17, r7, s13);
  }
  insertAt(t10, e17, r7) {
    this.update(), super.insertAt(t10, e17, r7);
  }
  optimize(t10 = [], e17 = {}) {
    super.optimize(e17);
    const r7 = e17.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s13 = Array.from(this.observer.takeRecords());
    for (; s13.length > 0; )
      t10.push(s13.pop());
    const i4 = (c12, h8 = true) => {
      c12 == null || c12 === this || c12.domNode.parentNode != null && (r7.has(c12.domNode) || r7.set(c12.domNode, []), h8 && i4(c12.parent));
    }, l5 = (c12) => {
      r7.has(c12.domNode) && (c12 instanceof Et2 && c12.children.forEach(l5), r7.delete(c12.domNode), c12.optimize(e17));
    };
    let a6 = t10;
    for (let c12 = 0; a6.length > 0; c12 += 1) {
      if (c12 >= Df)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a6.forEach((h8) => {
        const d9 = this.find(h8.target, true);
        d9 != null && (d9.domNode === h8.target && (h8.type === "childList" ? (i4(this.find(h8.previousSibling, false)), Array.from(h8.addedNodes).forEach((m6) => {
          const g10 = this.find(m6, false);
          i4(g10, false), g10 instanceof Et2 && g10.children.forEach((p5) => {
            i4(p5, false);
          });
        })) : h8.type === "attributes" && i4(d9.prev)), i4(d9));
      }), this.children.forEach(l5), a6 = Array.from(this.observer.takeRecords()), s13 = a6.slice(); s13.length > 0; )
        t10.push(s13.pop());
    }
  }
  update(t10, e17 = {}) {
    t10 = t10 || this.observer.takeRecords();
    const r7 = /* @__PURE__ */ new WeakMap();
    t10.map((s13) => {
      const i4 = this.find(s13.target, true);
      return i4 == null ? null : r7.has(i4.domNode) ? (r7.get(i4.domNode).push(s13), null) : (r7.set(i4.domNode, [s13]), i4);
    }).forEach((s13) => {
      s13 != null && s13 !== this && r7.has(s13.domNode) && s13.update(r7.get(s13.domNode) || [], e17);
    }), e17.mutationsMap = r7, r7.has(this.domNode) && super.update(r7.get(this.domNode), e17), this.optimize(t10, e17);
  }
};
Be.blotName = "scroll", Be.defaultChild = wn, Be.allowedChildren = [wn, _r], Be.scope = q5.BLOCK_BLOT, Be.tagName = "DIV";
var jf = Be;
var xi = jf;
var Js = class Ao extends Q3 {
  static create(t10) {
    return document.createTextNode(t10);
  }
  static value(t10) {
    return t10.data;
  }
  constructor(t10, e17) {
    super(t10, e17), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t10, e17) {
    this.domNode.data = this.text = this.text.slice(0, t10) + this.text.slice(t10 + e17);
  }
  index(t10, e17) {
    return this.domNode === t10 ? e17 : -1;
  }
  insertAt(t10, e17, r7) {
    r7 == null ? (this.text = this.text.slice(0, t10) + e17 + this.text.slice(t10), this.domNode.data = this.text) : super.insertAt(t10, e17, r7);
  }
  length() {
    return this.text.length;
  }
  optimize(t10) {
    super.optimize(t10), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof Ao && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t10, e17 = false) {
    return [this.domNode, t10];
  }
  split(t10, e17 = false) {
    if (!e17) {
      if (t10 === 0)
        return this;
      if (t10 === this.length())
        return this.next;
    }
    const r7 = this.scroll.create(this.domNode.splitText(t10));
    return this.parent.insertBefore(r7, this.next || void 0), this.text = this.statics.value(this.domNode), r7;
  }
  update(t10, e17) {
    t10.some((r7) => r7.type === "characterData" && r7.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
Js.blotName = "text", Js.scope = q5.INLINE_BLOT;
var Pf = Js;
var Ar = Pf;
var Uf = Object.freeze(Object.defineProperty({
  __proto__: null,
  Attributor: It2,
  AttributorStore: Sr,
  BlockBlot: wn,
  ClassAttributor: Nt,
  ContainerBlot: _r,
  EmbedBlot: it2,
  InlineBlot: Ti,
  LeafBlot: Q3,
  ParentBlot: Et2,
  Registry: Fe,
  Scope: q5,
  ScrollBlot: xi,
  StyleAttributor: ne2,
  TextBlot: Ar
}, Symbol.toStringTag, { value: "Module" }));
var Xt2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function No(n8) {
  return n8 && n8.__esModule && Object.prototype.hasOwnProperty.call(n8, "default") ? n8.default : n8;
}
var ti = { exports: {} };
var st3 = -1;
var et2 = 1;
var G2 = 0;
function Tn(n8, t10, e17, r7, s13) {
  if (n8 === t10)
    return n8 ? [[G2, n8]] : [];
  if (e17 != null) {
    var i4 = Xf(n8, t10, e17);
    if (i4)
      return i4;
  }
  var l5 = Li(n8, t10), a6 = n8.substring(0, l5);
  n8 = n8.substring(l5), t10 = t10.substring(l5), l5 = Or(n8, t10);
  var c12 = n8.substring(n8.length - l5);
  n8 = n8.substring(0, n8.length - l5), t10 = t10.substring(0, t10.length - l5);
  var h8 = Ff(n8, t10);
  return a6 && h8.unshift([G2, a6]), c12 && h8.push([G2, c12]), Si(h8, s13), r7 && Gf(h8), h8;
}
function Ff(n8, t10) {
  var e17;
  if (!n8)
    return [[et2, t10]];
  if (!t10)
    return [[st3, n8]];
  var r7 = n8.length > t10.length ? n8 : t10, s13 = n8.length > t10.length ? t10 : n8, i4 = r7.indexOf(s13);
  if (i4 !== -1)
    return e17 = [
      [et2, r7.substring(0, i4)],
      [G2, s13],
      [et2, r7.substring(i4 + s13.length)]
    ], n8.length > t10.length && (e17[0][0] = e17[2][0] = st3), e17;
  if (s13.length === 1)
    return [
      [st3, n8],
      [et2, t10]
    ];
  var l5 = zf(n8, t10);
  if (l5) {
    var a6 = l5[0], c12 = l5[1], h8 = l5[2], d9 = l5[3], m6 = l5[4], g10 = Tn(a6, h8), p5 = Tn(c12, d9);
    return g10.concat([[G2, m6]], p5);
  }
  return Hf(n8, t10);
}
function Hf(n8, t10) {
  for (var e17 = n8.length, r7 = t10.length, s13 = Math.ceil((e17 + r7) / 2), i4 = s13, l5 = 2 * s13, a6 = new Array(l5), c12 = new Array(l5), h8 = 0; h8 < l5; h8++)
    a6[h8] = -1, c12[h8] = -1;
  a6[i4 + 1] = 0, c12[i4 + 1] = 0;
  for (var d9 = e17 - r7, m6 = d9 % 2 !== 0, g10 = 0, p5 = 0, b10 = 0, v6 = 0, y5 = 0; y5 < s13; y5++) {
    for (var E11 = -y5 + g10; E11 <= y5 - p5; E11 += 2) {
      var w12 = i4 + E11, T6;
      E11 === -y5 || E11 !== y5 && a6[w12 - 1] < a6[w12 + 1] ? T6 = a6[w12 + 1] : T6 = a6[w12 - 1] + 1;
      for (var _10 = T6 - E11; T6 < e17 && _10 < r7 && n8.charAt(T6) === t10.charAt(_10); )
        T6++, _10++;
      if (a6[w12] = T6, T6 > e17)
        p5 += 2;
      else if (_10 > r7)
        g10 += 2;
      else if (m6) {
        var L5 = i4 + d9 - E11;
        if (L5 >= 0 && L5 < l5 && c12[L5] !== -1) {
          var I4 = e17 - c12[L5];
          if (T6 >= I4)
            return gl(n8, t10, T6, _10);
        }
      }
    }
    for (var k6 = -y5 + b10; k6 <= y5 - v6; k6 += 2) {
      var L5 = i4 + k6, I4;
      k6 === -y5 || k6 !== y5 && c12[L5 - 1] < c12[L5 + 1] ? I4 = c12[L5 + 1] : I4 = c12[L5 - 1] + 1;
      for (var U3 = I4 - k6; I4 < e17 && U3 < r7 && n8.charAt(e17 - I4 - 1) === t10.charAt(r7 - U3 - 1); )
        I4++, U3++;
      if (c12[L5] = I4, I4 > e17)
        v6 += 2;
      else if (U3 > r7)
        b10 += 2;
      else if (!m6) {
        var w12 = i4 + d9 - k6;
        if (w12 >= 0 && w12 < l5 && a6[w12] !== -1) {
          var T6 = a6[w12], _10 = i4 + T6 - w12;
          if (I4 = e17 - I4, T6 >= I4)
            return gl(n8, t10, T6, _10);
        }
      }
    }
  }
  return [
    [st3, n8],
    [et2, t10]
  ];
}
function gl(n8, t10, e17, r7) {
  var s13 = n8.substring(0, e17), i4 = t10.substring(0, r7), l5 = n8.substring(e17), a6 = t10.substring(r7), c12 = Tn(s13, i4), h8 = Tn(l5, a6);
  return c12.concat(h8);
}
function Li(n8, t10) {
  if (!n8 || !t10 || n8.charAt(0) !== t10.charAt(0))
    return 0;
  for (var e17 = 0, r7 = Math.min(n8.length, t10.length), s13 = r7, i4 = 0; e17 < s13; )
    n8.substring(i4, s13) == t10.substring(i4, s13) ? (e17 = s13, i4 = e17) : r7 = s13, s13 = Math.floor((r7 - e17) / 2 + e17);
  return wo(n8.charCodeAt(s13 - 1)) && s13--, s13;
}
function pl(n8, t10) {
  var e17 = n8.length, r7 = t10.length;
  if (e17 == 0 || r7 == 0)
    return 0;
  e17 > r7 ? n8 = n8.substring(e17 - r7) : e17 < r7 && (t10 = t10.substring(0, e17));
  var s13 = Math.min(e17, r7);
  if (n8 == t10)
    return s13;
  for (var i4 = 0, l5 = 1; ; ) {
    var a6 = n8.substring(s13 - l5), c12 = t10.indexOf(a6);
    if (c12 == -1)
      return i4;
    l5 += c12, (c12 == 0 || n8.substring(s13 - l5) == t10.substring(0, l5)) && (i4 = l5, l5++);
  }
}
function Or(n8, t10) {
  if (!n8 || !t10 || n8.slice(-1) !== t10.slice(-1))
    return 0;
  for (var e17 = 0, r7 = Math.min(n8.length, t10.length), s13 = r7, i4 = 0; e17 < s13; )
    n8.substring(n8.length - s13, n8.length - i4) == t10.substring(t10.length - s13, t10.length - i4) ? (e17 = s13, i4 = e17) : r7 = s13, s13 = Math.floor((r7 - e17) / 2 + e17);
  return To(n8.charCodeAt(n8.length - s13)) && s13--, s13;
}
function zf(n8, t10) {
  var e17 = n8.length > t10.length ? n8 : t10, r7 = n8.length > t10.length ? t10 : n8;
  if (e17.length < 4 || r7.length * 2 < e17.length)
    return null;
  function s13(p5, b10, v6) {
    for (var y5 = p5.substring(v6, v6 + Math.floor(p5.length / 4)), E11 = -1, w12 = "", T6, _10, L5, I4; (E11 = b10.indexOf(y5, E11 + 1)) !== -1; ) {
      var k6 = Li(
        p5.substring(v6),
        b10.substring(E11)
      ), U3 = Or(
        p5.substring(0, v6),
        b10.substring(0, E11)
      );
      w12.length < U3 + k6 && (w12 = b10.substring(E11 - U3, E11) + b10.substring(E11, E11 + k6), T6 = p5.substring(0, v6 - U3), _10 = p5.substring(v6 + k6), L5 = b10.substring(0, E11 - U3), I4 = b10.substring(E11 + k6));
    }
    return w12.length * 2 >= p5.length ? [
      T6,
      _10,
      L5,
      I4,
      w12
    ] : null;
  }
  var i4 = s13(
    e17,
    r7,
    Math.ceil(e17.length / 4)
  ), l5 = s13(
    e17,
    r7,
    Math.ceil(e17.length / 2)
  ), a6;
  if (!i4 && !l5)
    return null;
  l5 ? i4 ? a6 = i4[4].length > l5[4].length ? i4 : l5 : a6 = l5 : a6 = i4;
  var c12, h8, d9, m6;
  n8.length > t10.length ? (c12 = a6[0], h8 = a6[1], d9 = a6[2], m6 = a6[3]) : (d9 = a6[0], m6 = a6[1], c12 = a6[2], h8 = a6[3]);
  var g10 = a6[4];
  return [c12, h8, d9, m6, g10];
}
function Gf(n8) {
  for (var t10 = false, e17 = [], r7 = 0, s13 = null, i4 = 0, l5 = 0, a6 = 0, c12 = 0, h8 = 0; i4 < n8.length; )
    n8[i4][0] == G2 ? (e17[r7++] = i4, l5 = c12, a6 = h8, c12 = 0, h8 = 0, s13 = n8[i4][1]) : (n8[i4][0] == et2 ? c12 += n8[i4][1].length : h8 += n8[i4][1].length, s13 && s13.length <= Math.max(l5, a6) && s13.length <= Math.max(c12, h8) && (n8.splice(e17[r7 - 1], 0, [
      st3,
      s13
    ]), n8[e17[r7 - 1] + 1][0] = et2, r7--, r7--, i4 = r7 > 0 ? e17[r7 - 1] : -1, l5 = 0, a6 = 0, c12 = 0, h8 = 0, s13 = null, t10 = true)), i4++;
  for (t10 && Si(n8), Wf(n8), i4 = 1; i4 < n8.length; ) {
    if (n8[i4 - 1][0] == st3 && n8[i4][0] == et2) {
      var d9 = n8[i4 - 1][1], m6 = n8[i4][1], g10 = pl(d9, m6), p5 = pl(m6, d9);
      g10 >= p5 ? (g10 >= d9.length / 2 || g10 >= m6.length / 2) && (n8.splice(i4, 0, [
        G2,
        m6.substring(0, g10)
      ]), n8[i4 - 1][1] = d9.substring(
        0,
        d9.length - g10
      ), n8[i4 + 1][1] = m6.substring(g10), i4++) : (p5 >= d9.length / 2 || p5 >= m6.length / 2) && (n8.splice(i4, 0, [
        G2,
        d9.substring(0, p5)
      ]), n8[i4 - 1][0] = et2, n8[i4 - 1][1] = m6.substring(
        0,
        m6.length - p5
      ), n8[i4 + 1][0] = st3, n8[i4 + 1][1] = d9.substring(p5), i4++), i4++;
    }
    i4++;
  }
}
var ml = /[^a-zA-Z0-9]/;
var bl = /\s/;
var yl = /[\r\n]/;
var Kf = /\n\r?\n$/;
var Vf = /^\r?\n\r?\n/;
function Wf(n8) {
  function t10(p5, b10) {
    if (!p5 || !b10)
      return 6;
    var v6 = p5.charAt(p5.length - 1), y5 = b10.charAt(0), E11 = v6.match(ml), w12 = y5.match(ml), T6 = E11 && v6.match(bl), _10 = w12 && y5.match(bl), L5 = T6 && v6.match(yl), I4 = _10 && y5.match(yl), k6 = L5 && p5.match(Kf), U3 = I4 && b10.match(Vf);
    return k6 || U3 ? 5 : L5 || I4 ? 4 : E11 && !T6 && _10 ? 3 : T6 || _10 ? 2 : E11 || w12 ? 1 : 0;
  }
  for (var e17 = 1; e17 < n8.length - 1; ) {
    if (n8[e17 - 1][0] == G2 && n8[e17 + 1][0] == G2) {
      var r7 = n8[e17 - 1][1], s13 = n8[e17][1], i4 = n8[e17 + 1][1], l5 = Or(r7, s13);
      if (l5) {
        var a6 = s13.substring(s13.length - l5);
        r7 = r7.substring(0, r7.length - l5), s13 = a6 + s13.substring(0, s13.length - l5), i4 = a6 + i4;
      }
      for (var c12 = r7, h8 = s13, d9 = i4, m6 = t10(r7, s13) + t10(s13, i4); s13.charAt(0) === i4.charAt(0); ) {
        r7 += s13.charAt(0), s13 = s13.substring(1) + i4.charAt(0), i4 = i4.substring(1);
        var g10 = t10(r7, s13) + t10(s13, i4);
        g10 >= m6 && (m6 = g10, c12 = r7, h8 = s13, d9 = i4);
      }
      n8[e17 - 1][1] != c12 && (c12 ? n8[e17 - 1][1] = c12 : (n8.splice(e17 - 1, 1), e17--), n8[e17][1] = h8, d9 ? n8[e17 + 1][1] = d9 : (n8.splice(e17 + 1, 1), e17--));
    }
    e17++;
  }
}
function Si(n8, t10) {
  n8.push([G2, ""]);
  for (var e17 = 0, r7 = 0, s13 = 0, i4 = "", l5 = "", a6; e17 < n8.length; ) {
    if (e17 < n8.length - 1 && !n8[e17][1]) {
      n8.splice(e17, 1);
      continue;
    }
    switch (n8[e17][0]) {
      case et2:
        s13++, l5 += n8[e17][1], e17++;
        break;
      case st3:
        r7++, i4 += n8[e17][1], e17++;
        break;
      case G2:
        var c12 = e17 - s13 - r7 - 1;
        if (t10) {
          if (c12 >= 0 && Lo(n8[c12][1])) {
            var h8 = n8[c12][1].slice(-1);
            if (n8[c12][1] = n8[c12][1].slice(
              0,
              -1
            ), i4 = h8 + i4, l5 = h8 + l5, !n8[c12][1]) {
              n8.splice(c12, 1), e17--;
              var d9 = c12 - 1;
              n8[d9] && n8[d9][0] === et2 && (s13++, l5 = n8[d9][1] + l5, d9--), n8[d9] && n8[d9][0] === st3 && (r7++, i4 = n8[d9][1] + i4, d9--), c12 = d9;
            }
          }
          if (xo(n8[e17][1])) {
            var h8 = n8[e17][1].charAt(0);
            n8[e17][1] = n8[e17][1].slice(1), i4 += h8, l5 += h8;
          }
        }
        if (e17 < n8.length - 1 && !n8[e17][1]) {
          n8.splice(e17, 1);
          break;
        }
        if (i4.length > 0 || l5.length > 0) {
          i4.length > 0 && l5.length > 0 && (a6 = Li(l5, i4), a6 !== 0 && (c12 >= 0 ? n8[c12][1] += l5.substring(
            0,
            a6
          ) : (n8.splice(0, 0, [
            G2,
            l5.substring(0, a6)
          ]), e17++), l5 = l5.substring(a6), i4 = i4.substring(a6)), a6 = Or(l5, i4), a6 !== 0 && (n8[e17][1] = l5.substring(l5.length - a6) + n8[e17][1], l5 = l5.substring(
            0,
            l5.length - a6
          ), i4 = i4.substring(
            0,
            i4.length - a6
          )));
          var m6 = s13 + r7;
          i4.length === 0 && l5.length === 0 ? (n8.splice(e17 - m6, m6), e17 = e17 - m6) : i4.length === 0 ? (n8.splice(e17 - m6, m6, [et2, l5]), e17 = e17 - m6 + 1) : l5.length === 0 ? (n8.splice(e17 - m6, m6, [st3, i4]), e17 = e17 - m6 + 1) : (n8.splice(
            e17 - m6,
            m6,
            [st3, i4],
            [et2, l5]
          ), e17 = e17 - m6 + 2);
        }
        e17 !== 0 && n8[e17 - 1][0] === G2 ? (n8[e17 - 1][1] += n8[e17][1], n8.splice(e17, 1)) : e17++, s13 = 0, r7 = 0, i4 = "", l5 = "";
        break;
    }
  }
  n8[n8.length - 1][1] === "" && n8.pop();
  var g10 = false;
  for (e17 = 1; e17 < n8.length - 1; )
    n8[e17 - 1][0] === G2 && n8[e17 + 1][0] === G2 && (n8[e17][1].substring(
      n8[e17][1].length - n8[e17 - 1][1].length
    ) === n8[e17 - 1][1] ? (n8[e17][1] = n8[e17 - 1][1] + n8[e17][1].substring(
      0,
      n8[e17][1].length - n8[e17 - 1][1].length
    ), n8[e17 + 1][1] = n8[e17 - 1][1] + n8[e17 + 1][1], n8.splice(e17 - 1, 1), g10 = true) : n8[e17][1].substring(0, n8[e17 + 1][1].length) == n8[e17 + 1][1] && (n8[e17 - 1][1] += n8[e17 + 1][1], n8[e17][1] = n8[e17][1].substring(n8[e17 + 1][1].length) + n8[e17 + 1][1], n8.splice(e17 + 1, 1), g10 = true)), e17++;
  g10 && Si(n8, t10);
}
function wo(n8) {
  return n8 >= 55296 && n8 <= 56319;
}
function To(n8) {
  return n8 >= 56320 && n8 <= 57343;
}
function xo(n8) {
  return To(n8.charCodeAt(0));
}
function Lo(n8) {
  return wo(n8.charCodeAt(n8.length - 1));
}
function Zf(n8) {
  for (var t10 = [], e17 = 0; e17 < n8.length; e17++)
    n8[e17][1].length > 0 && t10.push(n8[e17]);
  return t10;
}
function Rs(n8, t10, e17, r7) {
  return Lo(n8) || xo(r7) ? null : Zf([
    [G2, n8],
    [st3, t10],
    [et2, e17],
    [G2, r7]
  ]);
}
function Xf(n8, t10, e17) {
  var r7 = typeof e17 == "number" ? { index: e17, length: 0 } : e17.oldRange, s13 = typeof e17 == "number" ? null : e17.newRange, i4 = n8.length, l5 = t10.length;
  if (r7.length === 0 && (s13 === null || s13.length === 0)) {
    var a6 = r7.index, c12 = n8.slice(0, a6), h8 = n8.slice(a6), d9 = s13 ? s13.index : null;
    t: {
      var m6 = a6 + l5 - i4;
      if (d9 !== null && d9 !== m6 || m6 < 0 || m6 > l5)
        break t;
      var g10 = t10.slice(0, m6), p5 = t10.slice(m6);
      if (p5 !== h8)
        break t;
      var b10 = Math.min(a6, m6), v6 = c12.slice(0, b10), y5 = g10.slice(0, b10);
      if (v6 !== y5)
        break t;
      var E11 = c12.slice(b10), w12 = g10.slice(b10);
      return Rs(v6, E11, w12, h8);
    }
    t: {
      if (d9 !== null && d9 !== a6)
        break t;
      var T6 = a6, g10 = t10.slice(0, T6), p5 = t10.slice(T6);
      if (g10 !== c12)
        break t;
      var _10 = Math.min(i4 - T6, l5 - T6), L5 = h8.slice(h8.length - _10), I4 = p5.slice(p5.length - _10);
      if (L5 !== I4)
        break t;
      var E11 = h8.slice(0, h8.length - _10), w12 = p5.slice(0, p5.length - _10);
      return Rs(c12, E11, w12, L5);
    }
  }
  if (r7.length > 0 && s13 && s13.length === 0)
    t: {
      var v6 = n8.slice(0, r7.index), L5 = n8.slice(r7.index + r7.length), b10 = v6.length, _10 = L5.length;
      if (l5 < b10 + _10)
        break t;
      var y5 = t10.slice(0, b10), I4 = t10.slice(l5 - _10);
      if (v6 !== y5 || L5 !== I4)
        break t;
      var E11 = n8.slice(b10, i4 - _10), w12 = t10.slice(b10, l5 - _10);
      return Rs(v6, E11, w12, L5);
    }
  return null;
}
function qr(n8, t10, e17, r7) {
  return Tn(n8, t10, e17, r7, true);
}
qr.INSERT = et2;
qr.DELETE = st3;
qr.EQUAL = G2;
var Yf = qr;
var Nr = { exports: {} };
Nr.exports;
(function(n8, t10) {
  var e17 = 200, r7 = "__lodash_hash_undefined__", s13 = 9007199254740991, i4 = "[object Arguments]", l5 = "[object Array]", a6 = "[object Boolean]", c12 = "[object Date]", h8 = "[object Error]", d9 = "[object Function]", m6 = "[object GeneratorFunction]", g10 = "[object Map]", p5 = "[object Number]", b10 = "[object Object]", v6 = "[object Promise]", y5 = "[object RegExp]", E11 = "[object Set]", w12 = "[object String]", T6 = "[object Symbol]", _10 = "[object WeakMap]", L5 = "[object ArrayBuffer]", I4 = "[object DataView]", k6 = "[object Float32Array]", U3 = "[object Float64Array]", Bt2 = "[object Int8Array]", Kt2 = "[object Int16Array]", re6 = "[object Int32Array]", se4 = "[object Uint8Array]", Bn = "[object Uint8ClampedArray]", Mn = "[object Uint16Array]", $n = "[object Uint32Array]", Br = /[\\^$.*+?()[\]{}|]/g, Mr = /\w*$/, $r = /^\[object .+?Constructor\]$/, Dr = /^(?:0|[1-9]\d*)$/, D4 = {};
  D4[i4] = D4[l5] = D4[L5] = D4[I4] = D4[a6] = D4[c12] = D4[k6] = D4[U3] = D4[Bt2] = D4[Kt2] = D4[re6] = D4[g10] = D4[p5] = D4[b10] = D4[y5] = D4[E11] = D4[w12] = D4[T6] = D4[se4] = D4[Bn] = D4[Mn] = D4[$n] = true, D4[h8] = D4[d9] = D4[_10] = false;
  var jr = typeof Xt2 == "object" && Xt2 && Xt2.Object === Object && Xt2, Pr = typeof self == "object" && self && self.Object === Object && self, ft2 = jr || Pr || Function("return this")(), Dn = t10 && !t10.nodeType && t10, j5 = Dn && true && n8 && !n8.nodeType && n8, jn = j5 && j5.exports === Dn;
  function Ur(o11, u5) {
    return o11.set(u5[0], u5[1]), o11;
  }
  function dt2(o11, u5) {
    return o11.add(u5), o11;
  }
  function Pn(o11, u5) {
    for (var f11 = -1, A11 = o11 ? o11.length : 0; ++f11 < A11 && u5(o11[f11], f11, o11) !== false; )
      ;
    return o11;
  }
  function Un(o11, u5) {
    for (var f11 = -1, A11 = u5.length, R7 = o11.length; ++f11 < A11; )
      o11[R7 + f11] = u5[f11];
    return o11;
  }
  function Ve2(o11, u5, f11, A11) {
    for (var R7 = -1, C7 = o11 ? o11.length : 0; ++R7 < C7; )
      f11 = u5(f11, o11[R7], R7, o11);
    return f11;
  }
  function We(o11, u5) {
    for (var f11 = -1, A11 = Array(o11); ++f11 < o11; )
      A11[f11] = u5(f11);
    return A11;
  }
  function Fn(o11, u5) {
    return o11 == null ? void 0 : o11[u5];
  }
  function Ze(o11) {
    var u5 = false;
    if (o11 != null && typeof o11.toString != "function")
      try {
        u5 = !!(o11 + "");
      } catch {
      }
    return u5;
  }
  function Hn(o11) {
    var u5 = -1, f11 = Array(o11.size);
    return o11.forEach(function(A11, R7) {
      f11[++u5] = [R7, A11];
    }), f11;
  }
  function Xe(o11, u5) {
    return function(f11) {
      return o11(u5(f11));
    };
  }
  function zn(o11) {
    var u5 = -1, f11 = Array(o11.size);
    return o11.forEach(function(A11) {
      f11[++u5] = A11;
    }), f11;
  }
  var Fr = Array.prototype, Hr = Function.prototype, Ae2 = Object.prototype, Ye = ft2["__core-js_shared__"], Gn = function() {
    var o11 = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
    return o11 ? "Symbol(src)_1." + o11 : "";
  }(), Kn = Hr.toString, xt2 = Ae2.hasOwnProperty, Ne2 = Ae2.toString, zr = RegExp(
    "^" + Kn.call(xt2).replace(Br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ie6 = jn ? ft2.Buffer : void 0, we3 = ft2.Symbol, Qe = ft2.Uint8Array, lt2 = Xe(Object.getPrototypeOf, Object), Vn = Object.create, Wn = Ae2.propertyIsEnumerable, Gr = Fr.splice, Je2 = Object.getOwnPropertySymbols, Te = ie6 ? ie6.isBuffer : void 0, Zn = Xe(Object.keys, Object), xe2 = pt2(ft2, "DataView"), le4 = pt2(ft2, "Map"), gt2 = pt2(ft2, "Promise"), Le2 = pt2(ft2, "Set"), tn = pt2(ft2, "WeakMap"), oe6 = pt2(Object, "create"), en = tt2(xe2), ae4 = tt2(le4), nn = tt2(gt2), rn = tt2(Le2), sn = tt2(tn), Vt = we3 ? we3.prototype : void 0, Xn = Vt ? Vt.valueOf : void 0;
  function Mt2(o11) {
    var u5 = -1, f11 = o11 ? o11.length : 0;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o11[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function Kr() {
    this.__data__ = oe6 ? oe6(null) : {};
  }
  function Vr(o11) {
    return this.has(o11) && delete this.__data__[o11];
  }
  function Wr(o11) {
    var u5 = this.__data__;
    if (oe6) {
      var f11 = u5[o11];
      return f11 === r7 ? void 0 : f11;
    }
    return xt2.call(u5, o11) ? u5[o11] : void 0;
  }
  function Yn(o11) {
    var u5 = this.__data__;
    return oe6 ? u5[o11] !== void 0 : xt2.call(u5, o11);
  }
  function ln(o11, u5) {
    var f11 = this.__data__;
    return f11[o11] = oe6 && u5 === void 0 ? r7 : u5, this;
  }
  Mt2.prototype.clear = Kr, Mt2.prototype.delete = Vr, Mt2.prototype.get = Wr, Mt2.prototype.has = Yn, Mt2.prototype.set = ln;
  function K6(o11) {
    var u5 = -1, f11 = o11 ? o11.length : 0;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o11[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function Zr() {
    this.__data__ = [];
  }
  function Xr(o11) {
    var u5 = this.__data__, f11 = _e3(u5, o11);
    if (f11 < 0)
      return false;
    var A11 = u5.length - 1;
    return f11 == A11 ? u5.pop() : Gr.call(u5, f11, 1), true;
  }
  function Yr(o11) {
    var u5 = this.__data__, f11 = _e3(u5, o11);
    return f11 < 0 ? void 0 : u5[f11][1];
  }
  function Qr(o11) {
    return _e3(this.__data__, o11) > -1;
  }
  function Jr(o11, u5) {
    var f11 = this.__data__, A11 = _e3(f11, o11);
    return A11 < 0 ? f11.push([o11, u5]) : f11[A11][1] = u5, this;
  }
  K6.prototype.clear = Zr, K6.prototype.delete = Xr, K6.prototype.get = Yr, K6.prototype.has = Qr, K6.prototype.set = Jr;
  function Z3(o11) {
    var u5 = -1, f11 = o11 ? o11.length : 0;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o11[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function ts() {
    this.__data__ = {
      hash: new Mt2(),
      map: new (le4 || K6)(),
      string: new Mt2()
    };
  }
  function es(o11) {
    return ue2(this, o11).delete(o11);
  }
  function ns(o11) {
    return ue2(this, o11).get(o11);
  }
  function rs(o11) {
    return ue2(this, o11).has(o11);
  }
  function ss(o11, u5) {
    return ue2(this, o11).set(o11, u5), this;
  }
  Z3.prototype.clear = ts, Z3.prototype.delete = es, Z3.prototype.get = ns, Z3.prototype.has = rs, Z3.prototype.set = ss;
  function nt2(o11) {
    this.__data__ = new K6(o11);
  }
  function is() {
    this.__data__ = new K6();
  }
  function ls(o11) {
    return this.__data__.delete(o11);
  }
  function os(o11) {
    return this.__data__.get(o11);
  }
  function as(o11) {
    return this.__data__.has(o11);
  }
  function cs(o11, u5) {
    var f11 = this.__data__;
    if (f11 instanceof K6) {
      var A11 = f11.__data__;
      if (!le4 || A11.length < e17 - 1)
        return A11.push([o11, u5]), this;
      f11 = this.__data__ = new Z3(A11);
    }
    return f11.set(o11, u5), this;
  }
  nt2.prototype.clear = is, nt2.prototype.delete = ls, nt2.prototype.get = os, nt2.prototype.has = as, nt2.prototype.set = cs;
  function Se(o11, u5) {
    var f11 = un(o11) || qe(o11) ? We(o11.length, String) : [], A11 = f11.length, R7 = !!A11;
    for (var C7 in o11)
      xt2.call(o11, C7) && !(R7 && (C7 == "length" || ws(C7, A11))) && f11.push(C7);
    return f11;
  }
  function Qn(o11, u5, f11) {
    var A11 = o11[u5];
    (!(xt2.call(o11, u5) && rr(A11, f11)) || f11 === void 0 && !(u5 in o11)) && (o11[u5] = f11);
  }
  function _e3(o11, u5) {
    for (var f11 = o11.length; f11--; )
      if (rr(o11[f11][0], u5))
        return f11;
    return -1;
  }
  function Lt2(o11, u5) {
    return o11 && cn(u5, fn(u5), o11);
  }
  function on(o11, u5, f11, A11, R7, C7, M8) {
    var B7;
    if (A11 && (B7 = C7 ? A11(o11, R7, C7, M8) : A11(o11)), B7 !== void 0)
      return B7;
    if (!_t2(o11))
      return o11;
    var H4 = un(o11);
    if (H4) {
      if (B7 = As(o11), !u5)
        return ys(o11, B7);
    } else {
      var $12 = Dt2(o11), X5 = $12 == d9 || $12 == m6;
      if (sr(o11))
        return Oe(o11, u5);
      if ($12 == b10 || $12 == i4 || X5 && !C7) {
        if (Ze(o11))
          return C7 ? o11 : {};
        if (B7 = St2(X5 ? {} : o11), !u5)
          return vs(o11, Lt2(B7, o11));
      } else {
        if (!D4[$12])
          return C7 ? o11 : {};
        B7 = Ns(o11, $12, on, u5);
      }
    }
    M8 || (M8 = new nt2());
    var rt2 = M8.get(o11);
    if (rt2)
      return rt2;
    if (M8.set(o11, B7), !H4)
      var z5 = f11 ? Es(o11) : fn(o11);
    return Pn(z5 || o11, function(Y3, V6) {
      z5 && (V6 = Y3, Y3 = o11[V6]), Qn(B7, V6, on(Y3, u5, f11, A11, V6, o11, M8));
    }), B7;
  }
  function us(o11) {
    return _t2(o11) ? Vn(o11) : {};
  }
  function hs(o11, u5, f11) {
    var A11 = u5(o11);
    return un(o11) ? A11 : Un(A11, f11(o11));
  }
  function fs(o11) {
    return Ne2.call(o11);
  }
  function ds(o11) {
    if (!_t2(o11) || xs(o11))
      return false;
    var u5 = hn(o11) || Ze(o11) ? zr : $r;
    return u5.test(tt2(o11));
  }
  function gs(o11) {
    if (!er(o11))
      return Zn(o11);
    var u5 = [];
    for (var f11 in Object(o11))
      xt2.call(o11, f11) && f11 != "constructor" && u5.push(f11);
    return u5;
  }
  function Oe(o11, u5) {
    if (u5)
      return o11.slice();
    var f11 = new o11.constructor(o11.length);
    return o11.copy(f11), f11;
  }
  function an(o11) {
    var u5 = new o11.constructor(o11.byteLength);
    return new Qe(u5).set(new Qe(o11)), u5;
  }
  function ce3(o11, u5) {
    var f11 = u5 ? an(o11.buffer) : o11.buffer;
    return new o11.constructor(f11, o11.byteOffset, o11.byteLength);
  }
  function Jn(o11, u5, f11) {
    var A11 = u5 ? f11(Hn(o11), true) : Hn(o11);
    return Ve2(A11, Ur, new o11.constructor());
  }
  function tr(o11) {
    var u5 = new o11.constructor(o11.source, Mr.exec(o11));
    return u5.lastIndex = o11.lastIndex, u5;
  }
  function ps(o11, u5, f11) {
    var A11 = u5 ? f11(zn(o11), true) : zn(o11);
    return Ve2(A11, dt2, new o11.constructor());
  }
  function ms(o11) {
    return Xn ? Object(Xn.call(o11)) : {};
  }
  function bs(o11, u5) {
    var f11 = u5 ? an(o11.buffer) : o11.buffer;
    return new o11.constructor(f11, o11.byteOffset, o11.length);
  }
  function ys(o11, u5) {
    var f11 = -1, A11 = o11.length;
    for (u5 || (u5 = Array(A11)); ++f11 < A11; )
      u5[f11] = o11[f11];
    return u5;
  }
  function cn(o11, u5, f11, A11) {
    f11 || (f11 = {});
    for (var R7 = -1, C7 = u5.length; ++R7 < C7; ) {
      var M8 = u5[R7], B7 = void 0;
      Qn(f11, M8, B7 === void 0 ? o11[M8] : B7);
    }
    return f11;
  }
  function vs(o11, u5) {
    return cn(o11, $t(o11), u5);
  }
  function Es(o11) {
    return hs(o11, fn, $t);
  }
  function ue2(o11, u5) {
    var f11 = o11.__data__;
    return Ts(u5) ? f11[typeof u5 == "string" ? "string" : "hash"] : f11.map;
  }
  function pt2(o11, u5) {
    var f11 = Fn(o11, u5);
    return ds(f11) ? f11 : void 0;
  }
  var $t = Je2 ? Xe(Je2, Object) : Ss, Dt2 = fs;
  (xe2 && Dt2(new xe2(new ArrayBuffer(1))) != I4 || le4 && Dt2(new le4()) != g10 || gt2 && Dt2(gt2.resolve()) != v6 || Le2 && Dt2(new Le2()) != E11 || tn && Dt2(new tn()) != _10) && (Dt2 = function(o11) {
    var u5 = Ne2.call(o11), f11 = u5 == b10 ? o11.constructor : void 0, A11 = f11 ? tt2(f11) : void 0;
    if (A11)
      switch (A11) {
        case en:
          return I4;
        case ae4:
          return g10;
        case nn:
          return v6;
        case rn:
          return E11;
        case sn:
          return _10;
      }
    return u5;
  });
  function As(o11) {
    var u5 = o11.length, f11 = o11.constructor(u5);
    return u5 && typeof o11[0] == "string" && xt2.call(o11, "index") && (f11.index = o11.index, f11.input = o11.input), f11;
  }
  function St2(o11) {
    return typeof o11.constructor == "function" && !er(o11) ? us(lt2(o11)) : {};
  }
  function Ns(o11, u5, f11, A11) {
    var R7 = o11.constructor;
    switch (u5) {
      case L5:
        return an(o11);
      case a6:
      case c12:
        return new R7(+o11);
      case I4:
        return ce3(o11, A11);
      case k6:
      case U3:
      case Bt2:
      case Kt2:
      case re6:
      case se4:
      case Bn:
      case Mn:
      case $n:
        return bs(o11, A11);
      case g10:
        return Jn(o11, A11, f11);
      case p5:
      case w12:
        return new R7(o11);
      case y5:
        return tr(o11);
      case E11:
        return ps(o11, A11, f11);
      case T6:
        return ms(o11);
    }
  }
  function ws(o11, u5) {
    return u5 = u5 ?? s13, !!u5 && (typeof o11 == "number" || Dr.test(o11)) && o11 > -1 && o11 % 1 == 0 && o11 < u5;
  }
  function Ts(o11) {
    var u5 = typeof o11;
    return u5 == "string" || u5 == "number" || u5 == "symbol" || u5 == "boolean" ? o11 !== "__proto__" : o11 === null;
  }
  function xs(o11) {
    return !!Gn && Gn in o11;
  }
  function er(o11) {
    var u5 = o11 && o11.constructor, f11 = typeof u5 == "function" && u5.prototype || Ae2;
    return o11 === f11;
  }
  function tt2(o11) {
    if (o11 != null) {
      try {
        return Kn.call(o11);
      } catch {
      }
      try {
        return o11 + "";
      } catch {
      }
    }
    return "";
  }
  function nr(o11) {
    return on(o11, true, true);
  }
  function rr(o11, u5) {
    return o11 === u5 || o11 !== o11 && u5 !== u5;
  }
  function qe(o11) {
    return Ls(o11) && xt2.call(o11, "callee") && (!Wn.call(o11, "callee") || Ne2.call(o11) == i4);
  }
  var un = Array.isArray;
  function Ce2(o11) {
    return o11 != null && ir(o11.length) && !hn(o11);
  }
  function Ls(o11) {
    return lr(o11) && Ce2(o11);
  }
  var sr = Te || _s;
  function hn(o11) {
    var u5 = _t2(o11) ? Ne2.call(o11) : "";
    return u5 == d9 || u5 == m6;
  }
  function ir(o11) {
    return typeof o11 == "number" && o11 > -1 && o11 % 1 == 0 && o11 <= s13;
  }
  function _t2(o11) {
    var u5 = typeof o11;
    return !!o11 && (u5 == "object" || u5 == "function");
  }
  function lr(o11) {
    return !!o11 && typeof o11 == "object";
  }
  function fn(o11) {
    return Ce2(o11) ? Se(o11) : gs(o11);
  }
  function Ss() {
    return [];
  }
  function _s() {
    return false;
  }
  n8.exports = nr;
})(Nr, Nr.exports);
var So = Nr.exports;
var wr = { exports: {} };
wr.exports;
(function(n8, t10) {
  var e17 = 200, r7 = "__lodash_hash_undefined__", s13 = 1, i4 = 2, l5 = 9007199254740991, a6 = "[object Arguments]", c12 = "[object Array]", h8 = "[object AsyncFunction]", d9 = "[object Boolean]", m6 = "[object Date]", g10 = "[object Error]", p5 = "[object Function]", b10 = "[object GeneratorFunction]", v6 = "[object Map]", y5 = "[object Number]", E11 = "[object Null]", w12 = "[object Object]", T6 = "[object Promise]", _10 = "[object Proxy]", L5 = "[object RegExp]", I4 = "[object Set]", k6 = "[object String]", U3 = "[object Symbol]", Bt2 = "[object Undefined]", Kt2 = "[object WeakMap]", re6 = "[object ArrayBuffer]", se4 = "[object DataView]", Bn = "[object Float32Array]", Mn = "[object Float64Array]", $n = "[object Int8Array]", Br = "[object Int16Array]", Mr = "[object Int32Array]", $r = "[object Uint8Array]", Dr = "[object Uint8ClampedArray]", D4 = "[object Uint16Array]", jr = "[object Uint32Array]", Pr = /[\\^$.*+?()[\]{}|]/g, ft2 = /^\[object .+?Constructor\]$/, Dn = /^(?:0|[1-9]\d*)$/, j5 = {};
  j5[Bn] = j5[Mn] = j5[$n] = j5[Br] = j5[Mr] = j5[$r] = j5[Dr] = j5[D4] = j5[jr] = true, j5[a6] = j5[c12] = j5[re6] = j5[d9] = j5[se4] = j5[m6] = j5[g10] = j5[p5] = j5[v6] = j5[y5] = j5[w12] = j5[L5] = j5[I4] = j5[k6] = j5[Kt2] = false;
  var jn = typeof Xt2 == "object" && Xt2 && Xt2.Object === Object && Xt2, Ur = typeof self == "object" && self && self.Object === Object && self, dt2 = jn || Ur || Function("return this")(), Pn = t10 && !t10.nodeType && t10, Un = Pn && true && n8 && !n8.nodeType && n8, Ve2 = Un && Un.exports === Pn, We = Ve2 && jn.process, Fn = function() {
    try {
      return We && We.binding && We.binding("util");
    } catch {
    }
  }(), Ze = Fn && Fn.isTypedArray;
  function Hn(o11, u5) {
    for (var f11 = -1, A11 = o11 == null ? 0 : o11.length, R7 = 0, C7 = []; ++f11 < A11; ) {
      var M8 = o11[f11];
      u5(M8, f11, o11) && (C7[R7++] = M8);
    }
    return C7;
  }
  function Xe(o11, u5) {
    for (var f11 = -1, A11 = u5.length, R7 = o11.length; ++f11 < A11; )
      o11[R7 + f11] = u5[f11];
    return o11;
  }
  function zn(o11, u5) {
    for (var f11 = -1, A11 = o11 == null ? 0 : o11.length; ++f11 < A11; )
      if (u5(o11[f11], f11, o11))
        return true;
    return false;
  }
  function Fr(o11, u5) {
    for (var f11 = -1, A11 = Array(o11); ++f11 < o11; )
      A11[f11] = u5(f11);
    return A11;
  }
  function Hr(o11) {
    return function(u5) {
      return o11(u5);
    };
  }
  function Ae2(o11, u5) {
    return o11.has(u5);
  }
  function Ye(o11, u5) {
    return o11 == null ? void 0 : o11[u5];
  }
  function Gn(o11) {
    var u5 = -1, f11 = Array(o11.size);
    return o11.forEach(function(A11, R7) {
      f11[++u5] = [R7, A11];
    }), f11;
  }
  function Kn(o11, u5) {
    return function(f11) {
      return o11(u5(f11));
    };
  }
  function xt2(o11) {
    var u5 = -1, f11 = Array(o11.size);
    return o11.forEach(function(A11) {
      f11[++u5] = A11;
    }), f11;
  }
  var Ne2 = Array.prototype, zr = Function.prototype, ie6 = Object.prototype, we3 = dt2["__core-js_shared__"], Qe = zr.toString, lt2 = ie6.hasOwnProperty, Vn = function() {
    var o11 = /[^.]+$/.exec(we3 && we3.keys && we3.keys.IE_PROTO || "");
    return o11 ? "Symbol(src)_1." + o11 : "";
  }(), Wn = ie6.toString, Gr = RegExp(
    "^" + Qe.call(lt2).replace(Pr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Je2 = Ve2 ? dt2.Buffer : void 0, Te = dt2.Symbol, Zn = dt2.Uint8Array, xe2 = ie6.propertyIsEnumerable, le4 = Ne2.splice, gt2 = Te ? Te.toStringTag : void 0, Le2 = Object.getOwnPropertySymbols, tn = Je2 ? Je2.isBuffer : void 0, oe6 = Kn(Object.keys, Object), en = $t(dt2, "DataView"), ae4 = $t(dt2, "Map"), nn = $t(dt2, "Promise"), rn = $t(dt2, "Set"), sn = $t(dt2, "WeakMap"), Vt = $t(Object, "create"), Xn = tt2(en), Mt2 = tt2(ae4), Kr = tt2(nn), Vr = tt2(rn), Wr = tt2(sn), Yn = Te ? Te.prototype : void 0, ln = Yn ? Yn.valueOf : void 0;
  function K6(o11) {
    var u5 = -1, f11 = o11 == null ? 0 : o11.length;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o11[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function Zr() {
    this.__data__ = Vt ? Vt(null) : {}, this.size = 0;
  }
  function Xr(o11) {
    var u5 = this.has(o11) && delete this.__data__[o11];
    return this.size -= u5 ? 1 : 0, u5;
  }
  function Yr(o11) {
    var u5 = this.__data__;
    if (Vt) {
      var f11 = u5[o11];
      return f11 === r7 ? void 0 : f11;
    }
    return lt2.call(u5, o11) ? u5[o11] : void 0;
  }
  function Qr(o11) {
    var u5 = this.__data__;
    return Vt ? u5[o11] !== void 0 : lt2.call(u5, o11);
  }
  function Jr(o11, u5) {
    var f11 = this.__data__;
    return this.size += this.has(o11) ? 0 : 1, f11[o11] = Vt && u5 === void 0 ? r7 : u5, this;
  }
  K6.prototype.clear = Zr, K6.prototype.delete = Xr, K6.prototype.get = Yr, K6.prototype.has = Qr, K6.prototype.set = Jr;
  function Z3(o11) {
    var u5 = -1, f11 = o11 == null ? 0 : o11.length;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o11[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function ts() {
    this.__data__ = [], this.size = 0;
  }
  function es(o11) {
    var u5 = this.__data__, f11 = Oe(u5, o11);
    if (f11 < 0)
      return false;
    var A11 = u5.length - 1;
    return f11 == A11 ? u5.pop() : le4.call(u5, f11, 1), --this.size, true;
  }
  function ns(o11) {
    var u5 = this.__data__, f11 = Oe(u5, o11);
    return f11 < 0 ? void 0 : u5[f11][1];
  }
  function rs(o11) {
    return Oe(this.__data__, o11) > -1;
  }
  function ss(o11, u5) {
    var f11 = this.__data__, A11 = Oe(f11, o11);
    return A11 < 0 ? (++this.size, f11.push([o11, u5])) : f11[A11][1] = u5, this;
  }
  Z3.prototype.clear = ts, Z3.prototype.delete = es, Z3.prototype.get = ns, Z3.prototype.has = rs, Z3.prototype.set = ss;
  function nt2(o11) {
    var u5 = -1, f11 = o11 == null ? 0 : o11.length;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o11[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function is() {
    this.size = 0, this.__data__ = {
      hash: new K6(),
      map: new (ae4 || Z3)(),
      string: new K6()
    };
  }
  function ls(o11) {
    var u5 = pt2(this, o11).delete(o11);
    return this.size -= u5 ? 1 : 0, u5;
  }
  function os(o11) {
    return pt2(this, o11).get(o11);
  }
  function as(o11) {
    return pt2(this, o11).has(o11);
  }
  function cs(o11, u5) {
    var f11 = pt2(this, o11), A11 = f11.size;
    return f11.set(o11, u5), this.size += f11.size == A11 ? 0 : 1, this;
  }
  nt2.prototype.clear = is, nt2.prototype.delete = ls, nt2.prototype.get = os, nt2.prototype.has = as, nt2.prototype.set = cs;
  function Se(o11) {
    var u5 = -1, f11 = o11 == null ? 0 : o11.length;
    for (this.__data__ = new nt2(); ++u5 < f11; )
      this.add(o11[u5]);
  }
  function Qn(o11) {
    return this.__data__.set(o11, r7), this;
  }
  function _e3(o11) {
    return this.__data__.has(o11);
  }
  Se.prototype.add = Se.prototype.push = Qn, Se.prototype.has = _e3;
  function Lt2(o11) {
    var u5 = this.__data__ = new Z3(o11);
    this.size = u5.size;
  }
  function on() {
    this.__data__ = new Z3(), this.size = 0;
  }
  function us(o11) {
    var u5 = this.__data__, f11 = u5.delete(o11);
    return this.size = u5.size, f11;
  }
  function hs(o11) {
    return this.__data__.get(o11);
  }
  function fs(o11) {
    return this.__data__.has(o11);
  }
  function ds(o11, u5) {
    var f11 = this.__data__;
    if (f11 instanceof Z3) {
      var A11 = f11.__data__;
      if (!ae4 || A11.length < e17 - 1)
        return A11.push([o11, u5]), this.size = ++f11.size, this;
      f11 = this.__data__ = new nt2(A11);
    }
    return f11.set(o11, u5), this.size = f11.size, this;
  }
  Lt2.prototype.clear = on, Lt2.prototype.delete = us, Lt2.prototype.get = hs, Lt2.prototype.has = fs, Lt2.prototype.set = ds;
  function gs(o11, u5) {
    var f11 = qe(o11), A11 = !f11 && rr(o11), R7 = !f11 && !A11 && Ce2(o11), C7 = !f11 && !A11 && !R7 && lr(o11), M8 = f11 || A11 || R7 || C7, B7 = M8 ? Fr(o11.length, String) : [], H4 = B7.length;
    for (var $12 in o11)
      lt2.call(o11, $12) && !(M8 && // Safari 9 has enumerable `arguments.length` in strict mode.
      ($12 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R7 && ($12 == "offset" || $12 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C7 && ($12 == "buffer" || $12 == "byteLength" || $12 == "byteOffset") || // Skip index properties.
      Ns($12, H4))) && B7.push($12);
    return B7;
  }
  function Oe(o11, u5) {
    for (var f11 = o11.length; f11--; )
      if (nr(o11[f11][0], u5))
        return f11;
    return -1;
  }
  function an(o11, u5, f11) {
    var A11 = u5(o11);
    return qe(o11) ? A11 : Xe(A11, f11(o11));
  }
  function ce3(o11) {
    return o11 == null ? o11 === void 0 ? Bt2 : E11 : gt2 && gt2 in Object(o11) ? Dt2(o11) : er(o11);
  }
  function Jn(o11) {
    return _t2(o11) && ce3(o11) == a6;
  }
  function tr(o11, u5, f11, A11, R7) {
    return o11 === u5 ? true : o11 == null || u5 == null || !_t2(o11) && !_t2(u5) ? o11 !== o11 && u5 !== u5 : ps(o11, u5, f11, A11, tr, R7);
  }
  function ps(o11, u5, f11, A11, R7, C7) {
    var M8 = qe(o11), B7 = qe(u5), H4 = M8 ? c12 : St2(o11), $12 = B7 ? c12 : St2(u5);
    H4 = H4 == a6 ? w12 : H4, $12 = $12 == a6 ? w12 : $12;
    var X5 = H4 == w12, rt2 = $12 == w12, z5 = H4 == $12;
    if (z5 && Ce2(o11)) {
      if (!Ce2(u5))
        return false;
      M8 = true, X5 = false;
    }
    if (z5 && !X5)
      return C7 || (C7 = new Lt2()), M8 || lr(o11) ? cn(o11, u5, f11, A11, R7, C7) : vs(o11, u5, H4, f11, A11, R7, C7);
    if (!(f11 & s13)) {
      var Y3 = X5 && lt2.call(o11, "__wrapped__"), V6 = rt2 && lt2.call(u5, "__wrapped__");
      if (Y3 || V6) {
        var Wt = Y3 ? o11.value() : o11, jt2 = V6 ? u5.value() : u5;
        return C7 || (C7 = new Lt2()), R7(Wt, jt2, f11, A11, C7);
      }
    }
    return z5 ? (C7 || (C7 = new Lt2()), Es(o11, u5, f11, A11, R7, C7)) : false;
  }
  function ms(o11) {
    if (!ir(o11) || Ts(o11))
      return false;
    var u5 = sr(o11) ? Gr : ft2;
    return u5.test(tt2(o11));
  }
  function bs(o11) {
    return _t2(o11) && hn(o11.length) && !!j5[ce3(o11)];
  }
  function ys(o11) {
    if (!xs(o11))
      return oe6(o11);
    var u5 = [];
    for (var f11 in Object(o11))
      lt2.call(o11, f11) && f11 != "constructor" && u5.push(f11);
    return u5;
  }
  function cn(o11, u5, f11, A11, R7, C7) {
    var M8 = f11 & s13, B7 = o11.length, H4 = u5.length;
    if (B7 != H4 && !(M8 && H4 > B7))
      return false;
    var $12 = C7.get(o11);
    if ($12 && C7.get(u5))
      return $12 == u5;
    var X5 = -1, rt2 = true, z5 = f11 & i4 ? new Se() : void 0;
    for (C7.set(o11, u5), C7.set(u5, o11); ++X5 < B7; ) {
      var Y3 = o11[X5], V6 = u5[X5];
      if (A11)
        var Wt = M8 ? A11(V6, Y3, X5, u5, o11, C7) : A11(Y3, V6, X5, o11, u5, C7);
      if (Wt !== void 0) {
        if (Wt)
          continue;
        rt2 = false;
        break;
      }
      if (z5) {
        if (!zn(u5, function(jt2, he3) {
          if (!Ae2(z5, he3) && (Y3 === jt2 || R7(Y3, jt2, f11, A11, C7)))
            return z5.push(he3);
        })) {
          rt2 = false;
          break;
        }
      } else if (!(Y3 === V6 || R7(Y3, V6, f11, A11, C7))) {
        rt2 = false;
        break;
      }
    }
    return C7.delete(o11), C7.delete(u5), rt2;
  }
  function vs(o11, u5, f11, A11, R7, C7, M8) {
    switch (f11) {
      case se4:
        if (o11.byteLength != u5.byteLength || o11.byteOffset != u5.byteOffset)
          return false;
        o11 = o11.buffer, u5 = u5.buffer;
      case re6:
        return !(o11.byteLength != u5.byteLength || !C7(new Zn(o11), new Zn(u5)));
      case d9:
      case m6:
      case y5:
        return nr(+o11, +u5);
      case g10:
        return o11.name == u5.name && o11.message == u5.message;
      case L5:
      case k6:
        return o11 == u5 + "";
      case v6:
        var B7 = Gn;
      case I4:
        var H4 = A11 & s13;
        if (B7 || (B7 = xt2), o11.size != u5.size && !H4)
          return false;
        var $12 = M8.get(o11);
        if ($12)
          return $12 == u5;
        A11 |= i4, M8.set(o11, u5);
        var X5 = cn(B7(o11), B7(u5), A11, R7, C7, M8);
        return M8.delete(o11), X5;
      case U3:
        if (ln)
          return ln.call(o11) == ln.call(u5);
    }
    return false;
  }
  function Es(o11, u5, f11, A11, R7, C7) {
    var M8 = f11 & s13, B7 = ue2(o11), H4 = B7.length, $12 = ue2(u5), X5 = $12.length;
    if (H4 != X5 && !M8)
      return false;
    for (var rt2 = H4; rt2--; ) {
      var z5 = B7[rt2];
      if (!(M8 ? z5 in u5 : lt2.call(u5, z5)))
        return false;
    }
    var Y3 = C7.get(o11);
    if (Y3 && C7.get(u5))
      return Y3 == u5;
    var V6 = true;
    C7.set(o11, u5), C7.set(u5, o11);
    for (var Wt = M8; ++rt2 < H4; ) {
      z5 = B7[rt2];
      var jt2 = o11[z5], he3 = u5[z5];
      if (A11)
        var Pi = M8 ? A11(he3, jt2, z5, u5, o11, C7) : A11(jt2, he3, z5, o11, u5, C7);
      if (!(Pi === void 0 ? jt2 === he3 || R7(jt2, he3, f11, A11, C7) : Pi)) {
        V6 = false;
        break;
      }
      Wt || (Wt = z5 == "constructor");
    }
    if (V6 && !Wt) {
      var or = o11.constructor, ar = u5.constructor;
      or != ar && "constructor" in o11 && "constructor" in u5 && !(typeof or == "function" && or instanceof or && typeof ar == "function" && ar instanceof ar) && (V6 = false);
    }
    return C7.delete(o11), C7.delete(u5), V6;
  }
  function ue2(o11) {
    return an(o11, fn, As);
  }
  function pt2(o11, u5) {
    var f11 = o11.__data__;
    return ws(u5) ? f11[typeof u5 == "string" ? "string" : "hash"] : f11.map;
  }
  function $t(o11, u5) {
    var f11 = Ye(o11, u5);
    return ms(f11) ? f11 : void 0;
  }
  function Dt2(o11) {
    var u5 = lt2.call(o11, gt2), f11 = o11[gt2];
    try {
      o11[gt2] = void 0;
      var A11 = true;
    } catch {
    }
    var R7 = Wn.call(o11);
    return A11 && (u5 ? o11[gt2] = f11 : delete o11[gt2]), R7;
  }
  var As = Le2 ? function(o11) {
    return o11 == null ? [] : (o11 = Object(o11), Hn(Le2(o11), function(u5) {
      return xe2.call(o11, u5);
    }));
  } : Ss, St2 = ce3;
  (en && St2(new en(new ArrayBuffer(1))) != se4 || ae4 && St2(new ae4()) != v6 || nn && St2(nn.resolve()) != T6 || rn && St2(new rn()) != I4 || sn && St2(new sn()) != Kt2) && (St2 = function(o11) {
    var u5 = ce3(o11), f11 = u5 == w12 ? o11.constructor : void 0, A11 = f11 ? tt2(f11) : "";
    if (A11)
      switch (A11) {
        case Xn:
          return se4;
        case Mt2:
          return v6;
        case Kr:
          return T6;
        case Vr:
          return I4;
        case Wr:
          return Kt2;
      }
    return u5;
  });
  function Ns(o11, u5) {
    return u5 = u5 ?? l5, !!u5 && (typeof o11 == "number" || Dn.test(o11)) && o11 > -1 && o11 % 1 == 0 && o11 < u5;
  }
  function ws(o11) {
    var u5 = typeof o11;
    return u5 == "string" || u5 == "number" || u5 == "symbol" || u5 == "boolean" ? o11 !== "__proto__" : o11 === null;
  }
  function Ts(o11) {
    return !!Vn && Vn in o11;
  }
  function xs(o11) {
    var u5 = o11 && o11.constructor, f11 = typeof u5 == "function" && u5.prototype || ie6;
    return o11 === f11;
  }
  function er(o11) {
    return Wn.call(o11);
  }
  function tt2(o11) {
    if (o11 != null) {
      try {
        return Qe.call(o11);
      } catch {
      }
      try {
        return o11 + "";
      } catch {
      }
    }
    return "";
  }
  function nr(o11, u5) {
    return o11 === u5 || o11 !== o11 && u5 !== u5;
  }
  var rr = Jn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Jn : function(o11) {
    return _t2(o11) && lt2.call(o11, "callee") && !xe2.call(o11, "callee");
  }, qe = Array.isArray;
  function un(o11) {
    return o11 != null && hn(o11.length) && !sr(o11);
  }
  var Ce2 = tn || _s;
  function Ls(o11, u5) {
    return tr(o11, u5);
  }
  function sr(o11) {
    if (!ir(o11))
      return false;
    var u5 = ce3(o11);
    return u5 == p5 || u5 == b10 || u5 == h8 || u5 == _10;
  }
  function hn(o11) {
    return typeof o11 == "number" && o11 > -1 && o11 % 1 == 0 && o11 <= l5;
  }
  function ir(o11) {
    var u5 = typeof o11;
    return o11 != null && (u5 == "object" || u5 == "function");
  }
  function _t2(o11) {
    return o11 != null && typeof o11 == "object";
  }
  var lr = Ze ? Hr(Ze) : bs;
  function fn(o11) {
    return un(o11) ? gs(o11) : ys(o11);
  }
  function Ss() {
    return [];
  }
  function _s() {
    return false;
  }
  n8.exports = Ls;
})(wr, wr.exports);
var _o = wr.exports;
var _i = {};
Object.defineProperty(_i, "__esModule", { value: true });
var Qf = So;
var Jf = _o;
var ei;
(function(n8) {
  function t10(i4 = {}, l5 = {}, a6 = false) {
    typeof i4 != "object" && (i4 = {}), typeof l5 != "object" && (l5 = {});
    let c12 = Qf(l5);
    a6 || (c12 = Object.keys(c12).reduce((h8, d9) => (c12[d9] != null && (h8[d9] = c12[d9]), h8), {}));
    for (const h8 in i4)
      i4[h8] !== void 0 && l5[h8] === void 0 && (c12[h8] = i4[h8]);
    return Object.keys(c12).length > 0 ? c12 : void 0;
  }
  n8.compose = t10;
  function e17(i4 = {}, l5 = {}) {
    typeof i4 != "object" && (i4 = {}), typeof l5 != "object" && (l5 = {});
    const a6 = Object.keys(i4).concat(Object.keys(l5)).reduce((c12, h8) => (Jf(i4[h8], l5[h8]) || (c12[h8] = l5[h8] === void 0 ? null : l5[h8]), c12), {});
    return Object.keys(a6).length > 0 ? a6 : void 0;
  }
  n8.diff = e17;
  function r7(i4 = {}, l5 = {}) {
    i4 = i4 || {};
    const a6 = Object.keys(l5).reduce((c12, h8) => (l5[h8] !== i4[h8] && i4[h8] !== void 0 && (c12[h8] = l5[h8]), c12), {});
    return Object.keys(i4).reduce((c12, h8) => (i4[h8] !== l5[h8] && l5[h8] === void 0 && (c12[h8] = null), c12), a6);
  }
  n8.invert = r7;
  function s13(i4, l5, a6 = false) {
    if (typeof i4 != "object")
      return l5;
    if (typeof l5 != "object")
      return;
    if (!a6)
      return l5;
    const c12 = Object.keys(l5).reduce((h8, d9) => (i4[d9] === void 0 && (h8[d9] = l5[d9]), h8), {});
    return Object.keys(c12).length > 0 ? c12 : void 0;
  }
  n8.transform = s13;
})(ei || (ei = {}));
_i.default = ei;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: true });
var ni;
(function(n8) {
  function t10(e17) {
    return typeof e17.delete == "number" ? e17.delete : typeof e17.retain == "number" ? e17.retain : typeof e17.retain == "object" && e17.retain !== null ? 1 : typeof e17.insert == "string" ? e17.insert.length : 1;
  }
  n8.length = t10;
})(ni || (ni = {}));
Cr.default = ni;
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: true });
var vl = Cr;
var td2 = class {
  constructor(t10) {
    this.ops = t10, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t10) {
    t10 || (t10 = 1 / 0);
    const e17 = this.ops[this.index];
    if (e17) {
      const r7 = this.offset, s13 = vl.default.length(e17);
      if (t10 >= s13 - r7 ? (t10 = s13 - r7, this.index += 1, this.offset = 0) : this.offset += t10, typeof e17.delete == "number")
        return { delete: t10 };
      {
        const i4 = {};
        return e17.attributes && (i4.attributes = e17.attributes), typeof e17.retain == "number" ? i4.retain = t10 : typeof e17.retain == "object" && e17.retain !== null ? i4.retain = e17.retain : typeof e17.insert == "string" ? i4.insert = e17.insert.substr(r7, t10) : i4.insert = e17.insert, i4;
      }
    } else
      return { retain: 1 / 0 };
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? vl.default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    const t10 = this.ops[this.index];
    return t10 ? typeof t10.delete == "number" ? "delete" : typeof t10.retain == "number" || typeof t10.retain == "object" && t10.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t10 = this.offset, e17 = this.index, r7 = this.next(), s13 = this.ops.slice(this.index);
        return this.offset = t10, this.index = e17, [r7].concat(s13);
      }
    } else return [];
  }
};
Oi.default = td2;
(function(n8, t10) {
  Object.defineProperty(t10, "__esModule", { value: true }), t10.AttributeMap = t10.OpIterator = t10.Op = void 0;
  const e17 = Yf, r7 = So, s13 = _o, i4 = _i;
  t10.AttributeMap = i4.default;
  const l5 = Cr;
  t10.Op = l5.default;
  const a6 = Oi;
  t10.OpIterator = a6.default;
  const c12 = "\0", h8 = (m6, g10) => {
    if (typeof m6 != "object" || m6 === null)
      throw new Error(`cannot retain a ${typeof m6}`);
    if (typeof g10 != "object" || g10 === null)
      throw new Error(`cannot retain a ${typeof g10}`);
    const p5 = Object.keys(m6)[0];
    if (!p5 || p5 !== Object.keys(g10)[0])
      throw new Error(`embed types not matched: ${p5} != ${Object.keys(g10)[0]}`);
    return [p5, m6[p5], g10[p5]];
  };
  class d9 {
    constructor(g10) {
      Array.isArray(g10) ? this.ops = g10 : g10 != null && Array.isArray(g10.ops) ? this.ops = g10.ops : this.ops = [];
    }
    static registerEmbed(g10, p5) {
      this.handlers[g10] = p5;
    }
    static unregisterEmbed(g10) {
      delete this.handlers[g10];
    }
    static getHandler(g10) {
      const p5 = this.handlers[g10];
      if (!p5)
        throw new Error(`no handlers for embed type "${g10}"`);
      return p5;
    }
    insert(g10, p5) {
      const b10 = {};
      return typeof g10 == "string" && g10.length === 0 ? this : (b10.insert = g10, p5 != null && typeof p5 == "object" && Object.keys(p5).length > 0 && (b10.attributes = p5), this.push(b10));
    }
    delete(g10) {
      return g10 <= 0 ? this : this.push({ delete: g10 });
    }
    retain(g10, p5) {
      if (typeof g10 == "number" && g10 <= 0)
        return this;
      const b10 = { retain: g10 };
      return p5 != null && typeof p5 == "object" && Object.keys(p5).length > 0 && (b10.attributes = p5), this.push(b10);
    }
    push(g10) {
      let p5 = this.ops.length, b10 = this.ops[p5 - 1];
      if (g10 = r7(g10), typeof b10 == "object") {
        if (typeof g10.delete == "number" && typeof b10.delete == "number")
          return this.ops[p5 - 1] = { delete: b10.delete + g10.delete }, this;
        if (typeof b10.delete == "number" && g10.insert != null && (p5 -= 1, b10 = this.ops[p5 - 1], typeof b10 != "object"))
          return this.ops.unshift(g10), this;
        if (s13(g10.attributes, b10.attributes)) {
          if (typeof g10.insert == "string" && typeof b10.insert == "string")
            return this.ops[p5 - 1] = { insert: b10.insert + g10.insert }, typeof g10.attributes == "object" && (this.ops[p5 - 1].attributes = g10.attributes), this;
          if (typeof g10.retain == "number" && typeof b10.retain == "number")
            return this.ops[p5 - 1] = { retain: b10.retain + g10.retain }, typeof g10.attributes == "object" && (this.ops[p5 - 1].attributes = g10.attributes), this;
        }
      }
      return p5 === this.ops.length ? this.ops.push(g10) : this.ops.splice(p5, 0, g10), this;
    }
    chop() {
      const g10 = this.ops[this.ops.length - 1];
      return g10 && typeof g10.retain == "number" && !g10.attributes && this.ops.pop(), this;
    }
    filter(g10) {
      return this.ops.filter(g10);
    }
    forEach(g10) {
      this.ops.forEach(g10);
    }
    map(g10) {
      return this.ops.map(g10);
    }
    partition(g10) {
      const p5 = [], b10 = [];
      return this.forEach((v6) => {
        (g10(v6) ? p5 : b10).push(v6);
      }), [p5, b10];
    }
    reduce(g10, p5) {
      return this.ops.reduce(g10, p5);
    }
    changeLength() {
      return this.reduce((g10, p5) => p5.insert ? g10 + l5.default.length(p5) : p5.delete ? g10 - p5.delete : g10, 0);
    }
    length() {
      return this.reduce((g10, p5) => g10 + l5.default.length(p5), 0);
    }
    slice(g10 = 0, p5 = 1 / 0) {
      const b10 = [], v6 = new a6.default(this.ops);
      let y5 = 0;
      for (; y5 < p5 && v6.hasNext(); ) {
        let E11;
        y5 < g10 ? E11 = v6.next(g10 - y5) : (E11 = v6.next(p5 - y5), b10.push(E11)), y5 += l5.default.length(E11);
      }
      return new d9(b10);
    }
    compose(g10) {
      const p5 = new a6.default(this.ops), b10 = new a6.default(g10.ops), v6 = [], y5 = b10.peek();
      if (y5 != null && typeof y5.retain == "number" && y5.attributes == null) {
        let w12 = y5.retain;
        for (; p5.peekType() === "insert" && p5.peekLength() <= w12; )
          w12 -= p5.peekLength(), v6.push(p5.next());
        y5.retain - w12 > 0 && b10.next(y5.retain - w12);
      }
      const E11 = new d9(v6);
      for (; p5.hasNext() || b10.hasNext(); )
        if (b10.peekType() === "insert")
          E11.push(b10.next());
        else if (p5.peekType() === "delete")
          E11.push(p5.next());
        else {
          const w12 = Math.min(p5.peekLength(), b10.peekLength()), T6 = p5.next(w12), _10 = b10.next(w12);
          if (_10.retain) {
            const L5 = {};
            if (typeof T6.retain == "number")
              L5.retain = typeof _10.retain == "number" ? w12 : _10.retain;
            else if (typeof _10.retain == "number")
              T6.retain == null ? L5.insert = T6.insert : L5.retain = T6.retain;
            else {
              const k6 = T6.retain == null ? "insert" : "retain", [U3, Bt2, Kt2] = h8(T6[k6], _10.retain), re6 = d9.getHandler(U3);
              L5[k6] = {
                [U3]: re6.compose(Bt2, Kt2, k6 === "retain")
              };
            }
            const I4 = i4.default.compose(T6.attributes, _10.attributes, typeof T6.retain == "number");
            if (I4 && (L5.attributes = I4), E11.push(L5), !b10.hasNext() && s13(E11.ops[E11.ops.length - 1], L5)) {
              const k6 = new d9(p5.rest());
              return E11.concat(k6).chop();
            }
          } else typeof _10.delete == "number" && (typeof T6.retain == "number" || typeof T6.retain == "object" && T6.retain !== null) && E11.push(_10);
        }
      return E11.chop();
    }
    concat(g10) {
      const p5 = new d9(this.ops.slice());
      return g10.ops.length > 0 && (p5.push(g10.ops[0]), p5.ops = p5.ops.concat(g10.ops.slice(1))), p5;
    }
    diff(g10, p5) {
      if (this.ops === g10.ops)
        return new d9();
      const b10 = [this, g10].map((T6) => T6.map((_10) => {
        if (_10.insert != null)
          return typeof _10.insert == "string" ? _10.insert : c12;
        const L5 = T6 === g10 ? "on" : "with";
        throw new Error("diff() called " + L5 + " non-document");
      }).join("")), v6 = new d9(), y5 = e17(b10[0], b10[1], p5, true), E11 = new a6.default(this.ops), w12 = new a6.default(g10.ops);
      return y5.forEach((T6) => {
        let _10 = T6[1].length;
        for (; _10 > 0; ) {
          let L5 = 0;
          switch (T6[0]) {
            case e17.INSERT:
              L5 = Math.min(w12.peekLength(), _10), v6.push(w12.next(L5));
              break;
            case e17.DELETE:
              L5 = Math.min(_10, E11.peekLength()), E11.next(L5), v6.delete(L5);
              break;
            case e17.EQUAL:
              L5 = Math.min(E11.peekLength(), w12.peekLength(), _10);
              const I4 = E11.next(L5), k6 = w12.next(L5);
              s13(I4.insert, k6.insert) ? v6.retain(L5, i4.default.diff(I4.attributes, k6.attributes)) : v6.push(k6).delete(L5);
              break;
          }
          _10 -= L5;
        }
      }), v6.chop();
    }
    eachLine(g10, p5 = `
`) {
      const b10 = new a6.default(this.ops);
      let v6 = new d9(), y5 = 0;
      for (; b10.hasNext(); ) {
        if (b10.peekType() !== "insert")
          return;
        const E11 = b10.peek(), w12 = l5.default.length(E11) - b10.peekLength(), T6 = typeof E11.insert == "string" ? E11.insert.indexOf(p5, w12) - w12 : -1;
        if (T6 < 0)
          v6.push(b10.next());
        else if (T6 > 0)
          v6.push(b10.next(T6));
        else {
          if (g10(v6, b10.next(1).attributes || {}, y5) === false)
            return;
          y5 += 1, v6 = new d9();
        }
      }
      v6.length() > 0 && g10(v6, {}, y5);
    }
    invert(g10) {
      const p5 = new d9();
      return this.reduce((b10, v6) => {
        if (v6.insert)
          p5.delete(l5.default.length(v6));
        else {
          if (typeof v6.retain == "number" && v6.attributes == null)
            return p5.retain(v6.retain), b10 + v6.retain;
          if (v6.delete || typeof v6.retain == "number") {
            const y5 = v6.delete || v6.retain;
            return g10.slice(b10, b10 + y5).forEach((w12) => {
              v6.delete ? p5.push(w12) : v6.retain && v6.attributes && p5.retain(l5.default.length(w12), i4.default.invert(v6.attributes, w12.attributes));
            }), b10 + y5;
          } else if (typeof v6.retain == "object" && v6.retain !== null) {
            const y5 = g10.slice(b10, b10 + 1), E11 = new a6.default(y5.ops).next(), [w12, T6, _10] = h8(v6.retain, E11.insert), L5 = d9.getHandler(w12);
            return p5.retain({ [w12]: L5.invert(T6, _10) }, i4.default.invert(v6.attributes, E11.attributes)), b10 + 1;
          }
        }
        return b10;
      }, 0), p5.chop();
    }
    transform(g10, p5 = false) {
      if (p5 = !!p5, typeof g10 == "number")
        return this.transformPosition(g10, p5);
      const b10 = g10, v6 = new a6.default(this.ops), y5 = new a6.default(b10.ops), E11 = new d9();
      for (; v6.hasNext() || y5.hasNext(); )
        if (v6.peekType() === "insert" && (p5 || y5.peekType() !== "insert"))
          E11.retain(l5.default.length(v6.next()));
        else if (y5.peekType() === "insert")
          E11.push(y5.next());
        else {
          const w12 = Math.min(v6.peekLength(), y5.peekLength()), T6 = v6.next(w12), _10 = y5.next(w12);
          if (T6.delete)
            continue;
          if (_10.delete)
            E11.push(_10);
          else {
            const L5 = T6.retain, I4 = _10.retain;
            let k6 = typeof I4 == "object" && I4 !== null ? I4 : w12;
            if (typeof L5 == "object" && L5 !== null && typeof I4 == "object" && I4 !== null) {
              const U3 = Object.keys(L5)[0];
              if (U3 === Object.keys(I4)[0]) {
                const Bt2 = d9.getHandler(U3);
                Bt2 && (k6 = {
                  [U3]: Bt2.transform(L5[U3], I4[U3], p5)
                });
              }
            }
            E11.retain(k6, i4.default.transform(T6.attributes, _10.attributes, p5));
          }
        }
      return E11.chop();
    }
    transformPosition(g10, p5 = false) {
      p5 = !!p5;
      const b10 = new a6.default(this.ops);
      let v6 = 0;
      for (; b10.hasNext() && v6 <= g10; ) {
        const y5 = b10.peekLength(), E11 = b10.peekType();
        if (b10.next(), E11 === "delete") {
          g10 -= Math.min(y5, g10 - v6);
          continue;
        } else E11 === "insert" && (v6 < g10 || !p5) && (g10 += y5);
        v6 += y5;
      }
      return g10;
    }
  }
  d9.Op = l5.default, d9.OpIterator = a6.default, d9.AttributeMap = i4.default, d9.handlers = {}, t10.default = d9, n8.exports = d9, n8.exports.default = d9;
})(ti, ti.exports);
var ht = ti.exports;
var O4 = No(ht);
var wt = class extends it2 {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
};
wt.blotName = "break";
wt.tagName = "BR";
var At2 = class extends Ar {
};
function Ir(n8) {
  return n8.replace(/[&<>"']/g, (t10) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t10]);
}
var Ot2 = class Ot3 extends Ti {
  static compare(t10, e17) {
    const r7 = Ot3.order.indexOf(t10), s13 = Ot3.order.indexOf(e17);
    return r7 >= 0 || s13 >= 0 ? r7 - s13 : t10 === e17 ? 0 : t10 < e17 ? -1 : 1;
  }
  formatAt(t10, e17, r7, s13) {
    if (Ot3.compare(this.statics.blotName, r7) < 0 && this.scroll.query(r7, q5.BLOT)) {
      const i4 = this.isolate(t10, e17);
      s13 && i4.wrap(r7, s13);
    } else
      super.formatAt(t10, e17, r7, s13);
  }
  optimize(t10) {
    if (super.optimize(t10), this.parent instanceof Ot3 && Ot3.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e17 = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e17), e17.wrap(this);
    }
  }
};
x8(Ot2, "allowedChildren", [Ot2, wt, it2, At2]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
x8(Ot2, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]);
var Rt2 = Ot2;
var El = 1;
var W2 = class extends wn {
  constructor() {
    super(...arguments);
    x8(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = Oo(this)), this.cache.delta;
  }
  deleteAt(e17, r7) {
    super.deleteAt(e17, r7), this.cache = {};
  }
  formatAt(e17, r7, s13, i4) {
    r7 <= 0 || (this.scroll.query(s13, q5.BLOCK) ? e17 + r7 === this.length() && this.format(s13, i4) : super.formatAt(e17, Math.min(r7, this.length() - e17 - 1), s13, i4), this.cache = {});
  }
  insertAt(e17, r7, s13) {
    if (s13 != null) {
      super.insertAt(e17, r7, s13), this.cache = {};
      return;
    }
    if (r7.length === 0) return;
    const i4 = r7.split(`
`), l5 = i4.shift();
    l5.length > 0 && (e17 < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e17, this.length() - 1), l5) : this.children.tail.insertAt(this.children.tail.length(), l5), this.cache = {});
    let a6 = this;
    i4.reduce((c12, h8) => (a6 = a6.split(c12, true), a6.insertAt(0, h8), h8.length), e17 + l5.length);
  }
  insertBefore(e17, r7) {
    const {
      head: s13
    } = this.children;
    super.insertBefore(e17, r7), s13 instanceof wt && s13.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + El), this.cache.length;
  }
  moveChildren(e17, r7) {
    super.moveChildren(e17, r7), this.cache = {};
  }
  optimize(e17) {
    super.optimize(e17), this.cache = {};
  }
  path(e17) {
    return super.path(e17, true);
  }
  removeChild(e17) {
    super.removeChild(e17), this.cache = {};
  }
  split(e17) {
    let r7 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (r7 && (e17 === 0 || e17 >= this.length() - El)) {
      const i4 = this.clone();
      return e17 === 0 ? (this.parent.insertBefore(i4, this), this) : (this.parent.insertBefore(i4, this.next), i4);
    }
    const s13 = super.split(e17, r7);
    return this.cache = {}, s13;
  }
};
W2.blotName = "block";
W2.tagName = "P";
W2.defaultChild = wt;
W2.allowedChildren = [wt, Rt2, it2, At2];
var ut2 = class extends it2 {
  attach() {
    super.attach(), this.attributes = new Sr(this.domNode);
  }
  delta() {
    return new O4().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t10, e17) {
    const r7 = this.scroll.query(t10, q5.BLOCK_ATTRIBUTE);
    r7 != null && this.attributes.attribute(r7, e17);
  }
  formatAt(t10, e17, r7, s13) {
    this.format(r7, s13);
  }
  insertAt(t10, e17, r7) {
    if (r7 != null) {
      super.insertAt(t10, e17, r7);
      return;
    }
    const s13 = e17.split(`
`), i4 = s13.pop(), l5 = s13.map((c12) => {
      const h8 = this.scroll.create(W2.blotName);
      return h8.insertAt(0, c12), h8;
    }), a6 = this.split(t10);
    l5.forEach((c12) => {
      this.parent.insertBefore(c12, a6);
    }), i4 && this.parent.insertBefore(this.scroll.create("text", i4), a6);
  }
};
ut2.scope = q5.BLOCK_BLOT;
function Oo(n8) {
  let t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return n8.descendants(Q3).reduce((e17, r7) => r7.length() === 0 ? e17 : e17.insert(r7.value(), at2(r7, {}, t10)), new O4()).insert(`
`, at2(n8));
}
function at2(n8) {
  let t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e17 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  return n8 == null || ("formats" in n8 && typeof n8.formats == "function" && (t10 = {
    ...t10,
    ...n8.formats()
  }, e17 && delete t10["code-token"]), n8.parent == null || n8.parent.statics.blotName === "scroll" || n8.parent.statics.scope !== n8.statics.scope) ? t10 : at2(n8.parent, t10, e17);
}
var ot2 = class ot3 extends it2 {
  // Zero width no break space
  static value() {
  }
  constructor(t10, e17, r7) {
    super(t10, e17), this.selection = r7, this.textNode = document.createTextNode(ot3.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t10, e17) {
    if (this.savedLength !== 0) {
      super.format(t10, e17);
      return;
    }
    let r7 = this, s13 = 0;
    for (; r7 != null && r7.statics.scope !== q5.BLOCK_BLOT; )
      s13 += r7.offset(r7.parent), r7 = r7.parent;
    r7 != null && (this.savedLength = ot3.CONTENTS.length, r7.optimize(), r7.formatAt(s13, ot3.CONTENTS.length, t10, e17), this.savedLength = 0);
  }
  index(t10, e17) {
    return t10 === this.textNode ? 0 : super.index(t10, e17);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const t10 = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e17 = this.prev instanceof At2 ? this.prev : null, r7 = e17 ? e17.length() : 0, s13 = this.next instanceof At2 ? this.next : null, i4 = s13 ? s13.text : "", {
      textNode: l5
    } = this, a6 = l5.data.split(ot3.CONTENTS).join("");
    l5.data = ot3.CONTENTS;
    let c12;
    if (e17)
      c12 = e17, (a6 || s13) && (e17.insertAt(e17.length(), a6 + i4), s13 && s13.remove());
    else if (s13)
      c12 = s13, s13.insertAt(0, a6);
    else {
      const h8 = document.createTextNode(a6);
      c12 = this.scroll.create(h8), this.parent.insertBefore(c12, this);
    }
    if (this.remove(), t10) {
      const h8 = (g10, p5) => e17 && g10 === e17.domNode ? p5 : g10 === l5 ? r7 + p5 - 1 : s13 && g10 === s13.domNode ? r7 + a6.length + p5 : null, d9 = h8(t10.start.node, t10.start.offset), m6 = h8(t10.end.node, t10.end.offset);
      if (d9 !== null && m6 !== null)
        return {
          startNode: c12.domNode,
          startOffset: d9,
          endNode: c12.domNode,
          endOffset: m6
        };
    }
    return null;
  }
  update(t10, e17) {
    if (t10.some((r7) => r7.type === "characterData" && r7.target === this.textNode)) {
      const r7 = this.restore();
      r7 && (e17.range = r7);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t10) {
    super.optimize(t10);
    let {
      parent: e17
    } = this;
    for (; e17; ) {
      if (e17.domNode.tagName === "A") {
        this.savedLength = ot3.CONTENTS.length, e17.isolate(this.offset(e17), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e17 = e17.parent;
    }
  }
  value() {
    return "";
  }
};
x8(ot2, "blotName", "cursor"), x8(ot2, "className", "ql-cursor"), x8(ot2, "tagName", "span"), x8(ot2, "CONTENTS", "\uFEFF");
var He = ot2;
var qo = { exports: {} };
(function(n8) {
  var t10 = Object.prototype.hasOwnProperty, e17 = "~";
  function r7() {
  }
  Object.create && (r7.prototype = /* @__PURE__ */ Object.create(null), new r7().__proto__ || (e17 = false));
  function s13(c12, h8, d9) {
    this.fn = c12, this.context = h8, this.once = d9 || false;
  }
  function i4(c12, h8, d9, m6, g10) {
    if (typeof d9 != "function")
      throw new TypeError("The listener must be a function");
    var p5 = new s13(d9, m6 || c12, g10), b10 = e17 ? e17 + h8 : h8;
    return c12._events[b10] ? c12._events[b10].fn ? c12._events[b10] = [c12._events[b10], p5] : c12._events[b10].push(p5) : (c12._events[b10] = p5, c12._eventsCount++), c12;
  }
  function l5(c12, h8) {
    --c12._eventsCount === 0 ? c12._events = new r7() : delete c12._events[h8];
  }
  function a6() {
    this._events = new r7(), this._eventsCount = 0;
  }
  a6.prototype.eventNames = function() {
    var h8 = [], d9, m6;
    if (this._eventsCount === 0) return h8;
    for (m6 in d9 = this._events)
      t10.call(d9, m6) && h8.push(e17 ? m6.slice(1) : m6);
    return Object.getOwnPropertySymbols ? h8.concat(Object.getOwnPropertySymbols(d9)) : h8;
  }, a6.prototype.listeners = function(h8) {
    var d9 = e17 ? e17 + h8 : h8, m6 = this._events[d9];
    if (!m6) return [];
    if (m6.fn) return [m6.fn];
    for (var g10 = 0, p5 = m6.length, b10 = new Array(p5); g10 < p5; g10++)
      b10[g10] = m6[g10].fn;
    return b10;
  }, a6.prototype.listenerCount = function(h8) {
    var d9 = e17 ? e17 + h8 : h8, m6 = this._events[d9];
    return m6 ? m6.fn ? 1 : m6.length : 0;
  }, a6.prototype.emit = function(h8, d9, m6, g10, p5, b10) {
    var v6 = e17 ? e17 + h8 : h8;
    if (!this._events[v6]) return false;
    var y5 = this._events[v6], E11 = arguments.length, w12, T6;
    if (y5.fn) {
      switch (y5.once && this.removeListener(h8, y5.fn, void 0, true), E11) {
        case 1:
          return y5.fn.call(y5.context), true;
        case 2:
          return y5.fn.call(y5.context, d9), true;
        case 3:
          return y5.fn.call(y5.context, d9, m6), true;
        case 4:
          return y5.fn.call(y5.context, d9, m6, g10), true;
        case 5:
          return y5.fn.call(y5.context, d9, m6, g10, p5), true;
        case 6:
          return y5.fn.call(y5.context, d9, m6, g10, p5, b10), true;
      }
      for (T6 = 1, w12 = new Array(E11 - 1); T6 < E11; T6++)
        w12[T6 - 1] = arguments[T6];
      y5.fn.apply(y5.context, w12);
    } else {
      var _10 = y5.length, L5;
      for (T6 = 0; T6 < _10; T6++)
        switch (y5[T6].once && this.removeListener(h8, y5[T6].fn, void 0, true), E11) {
          case 1:
            y5[T6].fn.call(y5[T6].context);
            break;
          case 2:
            y5[T6].fn.call(y5[T6].context, d9);
            break;
          case 3:
            y5[T6].fn.call(y5[T6].context, d9, m6);
            break;
          case 4:
            y5[T6].fn.call(y5[T6].context, d9, m6, g10);
            break;
          default:
            if (!w12) for (L5 = 1, w12 = new Array(E11 - 1); L5 < E11; L5++)
              w12[L5 - 1] = arguments[L5];
            y5[T6].fn.apply(y5[T6].context, w12);
        }
    }
    return true;
  }, a6.prototype.on = function(h8, d9, m6) {
    return i4(this, h8, d9, m6, false);
  }, a6.prototype.once = function(h8, d9, m6) {
    return i4(this, h8, d9, m6, true);
  }, a6.prototype.removeListener = function(h8, d9, m6, g10) {
    var p5 = e17 ? e17 + h8 : h8;
    if (!this._events[p5]) return this;
    if (!d9)
      return l5(this, p5), this;
    var b10 = this._events[p5];
    if (b10.fn)
      b10.fn === d9 && (!g10 || b10.once) && (!m6 || b10.context === m6) && l5(this, p5);
    else {
      for (var v6 = 0, y5 = [], E11 = b10.length; v6 < E11; v6++)
        (b10[v6].fn !== d9 || g10 && !b10[v6].once || m6 && b10[v6].context !== m6) && y5.push(b10[v6]);
      y5.length ? this._events[p5] = y5.length === 1 ? y5[0] : y5 : l5(this, p5);
    }
    return this;
  }, a6.prototype.removeAllListeners = function(h8) {
    var d9;
    return h8 ? (d9 = e17 ? e17 + h8 : h8, this._events[d9] && l5(this, d9)) : (this._events = new r7(), this._eventsCount = 0), this;
  }, a6.prototype.off = a6.prototype.removeListener, a6.prototype.addListener = a6.prototype.on, a6.prefixed = e17, a6.EventEmitter = a6, n8.exports = a6;
})(qo);
var ed = qo.exports;
var nd = No(ed);
var ri = /* @__PURE__ */ new WeakMap();
var si = ["error", "warn", "log", "info"];
var ii = "warn";
function Co(n8) {
  if (ii && si.indexOf(n8) <= si.indexOf(ii)) {
    for (var t10 = arguments.length, e17 = new Array(t10 > 1 ? t10 - 1 : 0), r7 = 1; r7 < t10; r7++)
      e17[r7 - 1] = arguments[r7];
    console[n8](...e17);
  }
}
function Gt2(n8) {
  return si.reduce((t10, e17) => (t10[e17] = Co.bind(console, e17, n8), t10), {});
}
Gt2.level = (n8) => {
  ii = n8;
};
Co.level = Gt2.level;
var ks = Gt2("quill:events");
var rd = ["selectionchange", "mousedown", "mouseup", "click"];
rd.forEach((n8) => {
  document.addEventListener(n8, function() {
    for (var t10 = arguments.length, e17 = new Array(t10), r7 = 0; r7 < t10; r7++)
      e17[r7] = arguments[r7];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s13) => {
      const i4 = ri.get(s13);
      i4 && i4.emitter && i4.emitter.handleDOM(...e17);
    });
  });
});
var S6 = class extends nd {
  constructor() {
    super(), this.domListeners = {}, this.on("error", ks.error);
  }
  emit() {
    for (var t10 = arguments.length, e17 = new Array(t10), r7 = 0; r7 < t10; r7++)
      e17[r7] = arguments[r7];
    return ks.log.call(ks, ...e17), super.emit(...e17);
  }
  handleDOM(t10) {
    for (var e17 = arguments.length, r7 = new Array(e17 > 1 ? e17 - 1 : 0), s13 = 1; s13 < e17; s13++)
      r7[s13 - 1] = arguments[s13];
    (this.domListeners[t10.type] || []).forEach((i4) => {
      let {
        node: l5,
        handler: a6
      } = i4;
      (t10.target === l5 || l5.contains(t10.target)) && a6(t10, ...r7);
    });
  }
  listenDOM(t10, e17, r7) {
    this.domListeners[t10] || (this.domListeners[t10] = []), this.domListeners[t10].push({
      node: e17,
      handler: r7
    });
  }
};
x8(S6, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), x8(S6, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
var Bs = Gt2("quill:selection");
var ge2 = class {
  constructor(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t10, this.length = e17;
  }
};
var sd = class {
  constructor(t10, e17) {
    this.emitter = e17, this.scroll = t10, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new ge2(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, S6.sources.USER), 1);
    }), this.emitter.on(S6.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const r7 = this.getNativeRange();
      r7 != null && r7.start.node !== this.cursor.textNode && this.emitter.once(S6.events.SCROLL_UPDATE, (s13, i4) => {
        try {
          this.root.contains(r7.start.node) && this.root.contains(r7.end.node) && this.setNativeRange(r7.start.node, r7.start.offset, r7.end.node, r7.end.offset);
          const l5 = i4.some((a6) => a6.type === "characterData" || a6.type === "childList" || a6.type === "attributes" && a6.target === this.root);
          this.update(l5 ? S6.sources.SILENT : s13);
        } catch {
        }
      });
    }), this.emitter.on(S6.events.SCROLL_OPTIMIZE, (r7, s13) => {
      if (s13.range) {
        const {
          startNode: i4,
          startOffset: l5,
          endNode: a6,
          endOffset: c12
        } = s13.range;
        this.setNativeRange(i4, l5, a6, c12), this.update(S6.sources.SILENT);
      }
    }), this.update(S6.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(S6.events.COMPOSITION_BEFORE_START, () => {
      this.composing = true;
    }), this.emitter.on(S6.events.COMPOSITION_END, () => {
      if (this.composing = false, this.cursor.parent) {
        const t10 = this.cursor.restore();
        if (!t10) return;
        setTimeout(() => {
          this.setNativeRange(t10.startNode, t10.startOffset, t10.endNode, t10.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = true;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = false, this.update(S6.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: true
    }), this.setRange(this.savedRange));
  }
  format(t10, e17) {
    this.scroll.update();
    const r7 = this.getNativeRange();
    if (!(r7 == null || !r7.native.collapsed || this.scroll.query(t10, q5.BLOCK))) {
      if (r7.start.node !== this.cursor.textNode) {
        const s13 = this.scroll.find(r7.start.node, false);
        if (s13 == null) return;
        if (s13 instanceof Q3) {
          const i4 = s13.split(r7.start.offset);
          s13.parent.insertBefore(this.cursor, i4);
        } else
          s13.insertBefore(this.cursor, r7.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t10, e17), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r7 = this.scroll.length();
    t10 = Math.min(t10, r7 - 1), e17 = Math.min(t10 + e17, r7 - 1) - t10;
    let s13, [i4, l5] = this.scroll.leaf(t10);
    if (i4 == null) return null;
    if (e17 > 0 && l5 === i4.length()) {
      const [d9] = this.scroll.leaf(t10 + 1);
      if (d9) {
        const [m6] = this.scroll.line(t10), [g10] = this.scroll.line(t10 + 1);
        m6 === g10 && (i4 = d9, l5 = 0);
      }
    }
    [s13, l5] = i4.position(l5, true);
    const a6 = document.createRange();
    if (e17 > 0)
      return a6.setStart(s13, l5), [i4, l5] = this.scroll.leaf(t10 + e17), i4 == null ? null : ([s13, l5] = i4.position(l5, true), a6.setEnd(s13, l5), a6.getBoundingClientRect());
    let c12 = "left", h8;
    if (s13 instanceof Text) {
      if (!s13.data.length)
        return null;
      l5 < s13.data.length ? (a6.setStart(s13, l5), a6.setEnd(s13, l5 + 1)) : (a6.setStart(s13, l5 - 1), a6.setEnd(s13, l5), c12 = "right"), h8 = a6.getBoundingClientRect();
    } else {
      if (!(i4.domNode instanceof Element)) return null;
      h8 = i4.domNode.getBoundingClientRect(), l5 > 0 && (c12 = "right");
    }
    return {
      bottom: h8.top + h8.height,
      height: h8.height,
      left: h8[c12],
      right: h8[c12],
      top: h8.top,
      width: 0
    };
  }
  getNativeRange() {
    const t10 = document.getSelection();
    if (t10 == null || t10.rangeCount <= 0) return null;
    const e17 = t10.getRangeAt(0);
    if (e17 == null) return null;
    const r7 = this.normalizeNative(e17);
    return Bs.info("getNativeRange", r7), r7;
  }
  getRange() {
    const t10 = this.scroll.domNode;
    if ("isConnected" in t10 && !t10.isConnected)
      return [null, null];
    const e17 = this.getNativeRange();
    return e17 == null ? [null, null] : [this.normalizedToRange(e17), e17];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ms(this.root, document.activeElement);
  }
  normalizedToRange(t10) {
    const e17 = [[t10.start.node, t10.start.offset]];
    t10.native.collapsed || e17.push([t10.end.node, t10.end.offset]);
    const r7 = e17.map((l5) => {
      const [a6, c12] = l5, h8 = this.scroll.find(a6, true), d9 = h8.offset(this.scroll);
      return c12 === 0 ? d9 : h8 instanceof Q3 ? d9 + h8.index(a6, c12) : d9 + h8.length();
    }), s13 = Math.min(Math.max(...r7), this.scroll.length() - 1), i4 = Math.min(s13, ...r7);
    return new ge2(i4, s13 - i4);
  }
  normalizeNative(t10) {
    if (!Ms(this.root, t10.startContainer) || !t10.collapsed && !Ms(this.root, t10.endContainer))
      return null;
    const e17 = {
      start: {
        node: t10.startContainer,
        offset: t10.startOffset
      },
      end: {
        node: t10.endContainer,
        offset: t10.endOffset
      },
      native: t10
    };
    return [e17.start, e17.end].forEach((r7) => {
      let {
        node: s13,
        offset: i4
      } = r7;
      for (; !(s13 instanceof Text) && s13.childNodes.length > 0; )
        if (s13.childNodes.length > i4)
          s13 = s13.childNodes[i4], i4 = 0;
        else if (s13.childNodes.length === i4)
          s13 = s13.lastChild, s13 instanceof Text ? i4 = s13.data.length : s13.childNodes.length > 0 ? i4 = s13.childNodes.length : i4 = s13.childNodes.length + 1;
        else
          break;
      r7.node = s13, r7.offset = i4;
    }), e17;
  }
  rangeToNative(t10) {
    const e17 = this.scroll.length(), r7 = (s13, i4) => {
      s13 = Math.min(e17 - 1, s13);
      const [l5, a6] = this.scroll.leaf(s13);
      return l5 ? l5.position(a6, i4) : [null, -1];
    };
    return [...r7(t10.index, false), ...r7(t10.index + t10.length, true)];
  }
  setNativeRange(t10, e17) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t10, s13 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e17, i4 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (Bs.info("setNativeRange", t10, e17, r7, s13), t10 != null && (this.root.parentNode == null || t10.parentNode == null || // @ts-expect-error Fix me later
    r7.parentNode == null))
      return;
    const l5 = document.getSelection();
    if (l5 != null)
      if (t10 != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: true
        });
        const {
          native: a6
        } = this.getNativeRange() || {};
        if (a6 == null || i4 || t10 !== a6.startContainer || e17 !== a6.startOffset || r7 !== a6.endContainer || s13 !== a6.endOffset) {
          t10 instanceof Element && t10.tagName === "BR" && (e17 = Array.from(t10.parentNode.childNodes).indexOf(t10), t10 = t10.parentNode), r7 instanceof Element && r7.tagName === "BR" && (s13 = Array.from(r7.parentNode.childNodes).indexOf(r7), r7 = r7.parentNode);
          const c12 = document.createRange();
          c12.setStart(t10, e17), c12.setEnd(r7, s13), l5.removeAllRanges(), l5.addRange(c12);
        }
      } else
        l5.removeAllRanges(), this.root.blur();
  }
  setRange(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S6.sources.API;
    if (typeof e17 == "string" && (r7 = e17, e17 = false), Bs.info("setRange", t10), t10 != null) {
      const s13 = this.rangeToNative(t10);
      this.setNativeRange(...s13, e17);
    } else
      this.setNativeRange(null);
    this.update(r7);
  }
  update() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S6.sources.USER;
    const e17 = this.lastRange, [r7, s13] = this.getRange();
    if (this.lastRange = r7, this.lastNative = s13, this.lastRange != null && (this.savedRange = this.lastRange), !wi(e17, this.lastRange)) {
      if (!this.composing && s13 != null && s13.native.collapsed && s13.start.node !== this.cursor.textNode) {
        const l5 = this.cursor.restore();
        l5 && this.setNativeRange(l5.startNode, l5.startOffset, l5.endNode, l5.endOffset);
      }
      const i4 = [S6.events.SELECTION_CHANGE, De3(this.lastRange), De3(e17), t10];
      this.emitter.emit(S6.events.EDITOR_CHANGE, ...i4), t10 !== S6.sources.SILENT && this.emitter.emit(...i4);
    }
  }
};
function Ms(n8, t10) {
  try {
    t10.parentNode;
  } catch {
    return false;
  }
  return n8.contains(t10);
}
var id = /^[ -~]*$/;
var ld = class {
  constructor(t10) {
    this.scroll = t10, this.delta = this.getDelta();
  }
  applyDelta(t10) {
    this.scroll.update();
    let e17 = this.scroll.length();
    this.scroll.batchStart();
    const r7 = Al(t10), s13 = new O4();
    return ad(r7.ops.slice()).reduce((l5, a6) => {
      const c12 = ht.Op.length(a6);
      let h8 = a6.attributes || {}, d9 = false, m6 = false;
      if (a6.insert != null) {
        if (s13.retain(c12), typeof a6.insert == "string") {
          const b10 = a6.insert;
          m6 = !b10.endsWith(`
`) && (e17 <= l5 || !!this.scroll.descendant(ut2, l5)[0]), this.scroll.insertAt(l5, b10);
          const [v6, y5] = this.scroll.line(l5);
          let E11 = Jt2({}, at2(v6));
          if (v6 instanceof W2) {
            const [w12] = v6.descendant(Q3, y5);
            w12 && (E11 = Jt2(E11, at2(w12)));
          }
          h8 = ht.AttributeMap.diff(E11, h8) || {};
        } else if (typeof a6.insert == "object") {
          const b10 = Object.keys(a6.insert)[0];
          if (b10 == null) return l5;
          const v6 = this.scroll.query(b10, q5.INLINE) != null;
          if (v6)
            (e17 <= l5 || this.scroll.descendant(ut2, l5)[0]) && (m6 = true);
          else if (l5 > 0) {
            const [y5, E11] = this.scroll.descendant(Q3, l5 - 1);
            y5 instanceof At2 ? y5.value()[E11] !== `
` && (d9 = true) : y5 instanceof it2 && y5.statics.scope === q5.INLINE_BLOT && (d9 = true);
          }
          if (this.scroll.insertAt(l5, b10, a6.insert[b10]), v6) {
            const [y5] = this.scroll.descendant(Q3, l5);
            if (y5) {
              const E11 = Jt2({}, at2(y5));
              h8 = ht.AttributeMap.diff(E11, h8) || {};
            }
          }
        }
        e17 += c12;
      } else if (s13.push(a6), a6.retain !== null && typeof a6.retain == "object") {
        const b10 = Object.keys(a6.retain)[0];
        if (b10 == null) return l5;
        this.scroll.updateEmbedAt(l5, b10, a6.retain[b10]);
      }
      Object.keys(h8).forEach((b10) => {
        this.scroll.formatAt(l5, c12, b10, h8[b10]);
      });
      const g10 = d9 ? 1 : 0, p5 = m6 ? 1 : 0;
      return e17 += g10 + p5, s13.retain(g10), s13.delete(p5), l5 + c12 + g10 + p5;
    }, 0), s13.reduce((l5, a6) => typeof a6.delete == "number" ? (this.scroll.deleteAt(l5, a6.delete), l5) : l5 + ht.Op.length(a6), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r7);
  }
  deleteText(t10, e17) {
    return this.scroll.deleteAt(t10, e17), this.update(new O4().retain(t10).delete(e17));
  }
  formatLine(t10, e17) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r7).forEach((i4) => {
      this.scroll.lines(t10, Math.max(e17, 1)).forEach((l5) => {
        l5.format(i4, r7[i4]);
      });
    }), this.scroll.optimize();
    const s13 = new O4().retain(t10).retain(e17, De3(r7));
    return this.update(s13);
  }
  formatText(t10, e17) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r7).forEach((i4) => {
      this.scroll.formatAt(t10, e17, i4, r7[i4]);
    });
    const s13 = new O4().retain(t10).retain(e17, De3(r7));
    return this.update(s13);
  }
  getContents(t10, e17) {
    return this.delta.slice(t10, t10 + e17);
  }
  getDelta() {
    return this.scroll.lines().reduce((t10, e17) => t10.concat(e17.delta()), new O4());
  }
  getFormat(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r7 = [], s13 = [];
    e17 === 0 ? this.scroll.path(t10).forEach((a6) => {
      const [c12] = a6;
      c12 instanceof W2 ? r7.push(c12) : c12 instanceof Q3 && s13.push(c12);
    }) : (r7 = this.scroll.lines(t10, e17), s13 = this.scroll.descendants(Q3, t10, e17));
    const [i4, l5] = [r7, s13].map((a6) => {
      const c12 = a6.shift();
      if (c12 == null) return {};
      let h8 = at2(c12);
      for (; Object.keys(h8).length > 0; ) {
        const d9 = a6.shift();
        if (d9 == null) return h8;
        h8 = od(at2(d9), h8);
      }
      return h8;
    });
    return {
      ...i4,
      ...l5
    };
  }
  getHTML(t10, e17) {
    const [r7, s13] = this.scroll.line(t10);
    if (r7) {
      const i4 = r7.length();
      return r7.length() >= s13 + e17 && !(s13 === 0 && e17 === i4) ? xn(r7, s13, e17, true) : xn(this.scroll, t10, e17, true);
    }
    return "";
  }
  getText(t10, e17) {
    return this.getContents(t10, e17).filter((r7) => typeof r7.insert == "string").map((r7) => r7.insert).join("");
  }
  insertContents(t10, e17) {
    const r7 = Al(e17), s13 = new O4().retain(t10).concat(r7);
    return this.scroll.insertContents(t10, r7), this.update(s13);
  }
  insertEmbed(t10, e17, r7) {
    return this.scroll.insertAt(t10, e17, r7), this.update(new O4().retain(t10).insert({
      [e17]: r7
    }));
  }
  insertText(t10, e17) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e17 = e17.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t10, e17), Object.keys(r7).forEach((s13) => {
      this.scroll.formatAt(t10, e17.length, s13, r7[s13]);
    }), this.update(new O4().retain(t10).insert(e17, De3(r7)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return true;
    if (this.scroll.children.length > 1) return false;
    const t10 = this.scroll.children.head;
    if ((t10 == null ? void 0 : t10.statics.blotName) !== W2.blotName) return false;
    const e17 = t10;
    return e17.children.length > 1 ? false : e17.children.head instanceof wt;
  }
  removeFormat(t10, e17) {
    const r7 = this.getText(t10, e17), [s13, i4] = this.scroll.line(t10 + e17);
    let l5 = 0, a6 = new O4();
    s13 != null && (l5 = s13.length() - i4, a6 = s13.delta().slice(i4, i4 + l5 - 1).insert(`
`));
    const h8 = this.getContents(t10, e17 + l5).diff(new O4().insert(r7).concat(a6)), d9 = new O4().retain(t10).concat(h8);
    return this.applyDelta(d9);
  }
  update(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s13 = this.delta;
    if (e17.length === 1 && e17[0].type === "characterData" && // @ts-expect-error Fix me later
    e17[0].target.data.match(id) && this.scroll.find(e17[0].target)) {
      const i4 = this.scroll.find(e17[0].target), l5 = at2(i4), a6 = i4.offset(this.scroll), c12 = e17[0].oldValue.replace(He.CONTENTS, ""), h8 = new O4().insert(c12), d9 = new O4().insert(i4.value()), m6 = r7 && {
        oldRange: Nl(r7.oldRange, -a6),
        newRange: Nl(r7.newRange, -a6)
      };
      t10 = new O4().retain(a6).concat(h8.diff(d9, m6)).reduce((p5, b10) => b10.insert ? p5.insert(b10.insert, l5) : p5.push(b10), new O4()), this.delta = s13.compose(t10);
    } else
      this.delta = this.getDelta(), (!t10 || !wi(s13.compose(t10), this.delta)) && (t10 = s13.diff(this.delta, r7));
    return t10;
  }
};
function Me(n8, t10, e17) {
  if (n8.length === 0) {
    const [p5] = $s(e17.pop());
    return t10 <= 0 ? `</li></${p5}>` : `</li></${p5}>${Me([], t10 - 1, e17)}`;
  }
  const [{
    child: r7,
    offset: s13,
    length: i4,
    indent: l5,
    type: a6
  }, ...c12] = n8, [h8, d9] = $s(a6);
  if (l5 > t10)
    return e17.push(a6), l5 === t10 + 1 ? `<${h8}><li${d9}>${xn(r7, s13, i4)}${Me(c12, l5, e17)}` : `<${h8}><li>${Me(n8, t10 + 1, e17)}`;
  const m6 = e17[e17.length - 1];
  if (l5 === t10 && a6 === m6)
    return `</li><li${d9}>${xn(r7, s13, i4)}${Me(c12, l5, e17)}`;
  const [g10] = $s(e17.pop());
  return `</li></${g10}>${Me(n8, t10 - 1, e17)}`;
}
function xn(n8, t10, e17) {
  let r7 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if ("html" in n8 && typeof n8.html == "function")
    return n8.html(t10, e17);
  if (n8 instanceof At2)
    return Ir(n8.value().slice(t10, t10 + e17));
  if (n8 instanceof Et2) {
    if (n8.statics.blotName === "list-container") {
      const h8 = [];
      return n8.children.forEachAt(t10, e17, (d9, m6, g10) => {
        const p5 = "formats" in d9 && typeof d9.formats == "function" ? d9.formats() : {};
        h8.push({
          child: d9,
          offset: m6,
          length: g10,
          indent: p5.indent || 0,
          type: p5.list
        });
      }), Me(h8, -1, []);
    }
    const s13 = [];
    if (n8.children.forEachAt(t10, e17, (h8, d9, m6) => {
      s13.push(xn(h8, d9, m6));
    }), r7 || n8.statics.blotName === "list")
      return s13.join("");
    const {
      outerHTML: i4,
      innerHTML: l5
    } = n8.domNode, [a6, c12] = i4.split(`>${l5}<`);
    return a6 === "<table" ? `<table style="border: 1px solid #000;">${s13.join("")}<${c12}` : `${a6}>${s13.join("")}<${c12}`;
  }
  return n8.domNode instanceof Element ? n8.domNode.outerHTML : "";
}
function od(n8, t10) {
  return Object.keys(t10).reduce((e17, r7) => {
    if (n8[r7] == null) return e17;
    const s13 = t10[r7];
    return s13 === n8[r7] ? e17[r7] = s13 : Array.isArray(s13) ? s13.indexOf(n8[r7]) < 0 ? e17[r7] = s13.concat([n8[r7]]) : e17[r7] = s13 : e17[r7] = [s13, n8[r7]], e17;
  }, {});
}
function $s(n8) {
  const t10 = n8 === "ordered" ? "ol" : "ul";
  switch (n8) {
    case "checked":
      return [t10, ' data-list="checked"'];
    case "unchecked":
      return [t10, ' data-list="unchecked"'];
    default:
      return [t10, ""];
  }
}
function Al(n8) {
  return n8.reduce((t10, e17) => {
    if (typeof e17.insert == "string") {
      const r7 = e17.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t10.insert(r7, e17.attributes);
    }
    return t10.push(e17);
  }, new O4());
}
function Nl(n8, t10) {
  let {
    index: e17,
    length: r7
  } = n8;
  return new ge2(e17 + t10, r7);
}
function ad(n8) {
  const t10 = [];
  return n8.forEach((e17) => {
    typeof e17.insert == "string" ? e17.insert.split(`
`).forEach((s13, i4) => {
      i4 && t10.push({
        insert: `
`,
        attributes: e17.attributes
      }), s13 && t10.push({
        insert: s13,
        attributes: e17.attributes
      });
    }) : t10.push(e17);
  }), t10;
}
var Tt2 = class {
  constructor(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t10, this.options = e17;
  }
};
x8(Tt2, "DEFAULTS", {});
var ur = "\uFEFF";
var qi = class extends it2 {
  constructor(t10, e17) {
    super(t10, e17), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r7) => {
      this.contentNode.appendChild(r7);
    }), this.leftGuard = document.createTextNode(ur), this.rightGuard = document.createTextNode(ur), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t10, e17) {
    return t10 === this.leftGuard ? 0 : t10 === this.rightGuard ? 1 : super.index(t10, e17);
  }
  restore(t10) {
    let e17 = null, r7;
    const s13 = t10.data.split(ur).join("");
    if (t10 === this.leftGuard)
      if (this.prev instanceof At2) {
        const i4 = this.prev.length();
        this.prev.insertAt(i4, s13), e17 = {
          startNode: this.prev.domNode,
          startOffset: i4 + s13.length
        };
      } else
        r7 = document.createTextNode(s13), this.parent.insertBefore(this.scroll.create(r7), this), e17 = {
          startNode: r7,
          startOffset: s13.length
        };
    else t10 === this.rightGuard && (this.next instanceof At2 ? (this.next.insertAt(0, s13), e17 = {
      startNode: this.next.domNode,
      startOffset: s13.length
    }) : (r7 = document.createTextNode(s13), this.parent.insertBefore(this.scroll.create(r7), this.next), e17 = {
      startNode: r7,
      startOffset: s13.length
    }));
    return t10.data = ur, e17;
  }
  update(t10, e17) {
    t10.forEach((r7) => {
      if (r7.type === "characterData" && (r7.target === this.leftGuard || r7.target === this.rightGuard)) {
        const s13 = this.restore(r7.target);
        s13 && (e17.range = s13);
      }
    });
  }
};
var cd = class {
  constructor(t10, e17) {
    x8(this, "isComposing", false);
    this.scroll = t10, this.emitter = e17, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t10) => {
      this.isComposing || this.handleCompositionStart(t10);
    }), this.scroll.domNode.addEventListener("compositionend", (t10) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t10);
      });
    });
  }
  handleCompositionStart(t10) {
    const e17 = t10.target instanceof Node ? this.scroll.find(t10.target, true) : null;
    e17 && !(e17 instanceof qi) && (this.emitter.emit(S6.events.COMPOSITION_BEFORE_START, t10), this.scroll.batchStart(), this.emitter.emit(S6.events.COMPOSITION_START, t10), this.isComposing = true);
  }
  handleCompositionEnd(t10) {
    this.emitter.emit(S6.events.COMPOSITION_BEFORE_END, t10), this.scroll.batchEnd(), this.emitter.emit(S6.events.COMPOSITION_END, t10), this.isComposing = false;
  }
};
var yn = class yn2 {
  constructor(t10, e17) {
    x8(this, "modules", {});
    this.quill = t10, this.options = e17;
  }
  init() {
    Object.keys(this.options.modules).forEach((t10) => {
      this.modules[t10] == null && this.addModule(t10);
    });
  }
  addModule(t10) {
    const e17 = this.quill.constructor.import(`modules/${t10}`);
    return this.modules[t10] = new e17(this.quill, this.options.modules[t10] || {}), this.modules[t10];
  }
};
x8(yn, "DEFAULTS", {
  modules: {}
}), x8(yn, "themes", {
  default: yn
});
var ze = yn;
var ud = (n8) => n8.parentElement || n8.getRootNode().host || null;
var hd = (n8) => {
  const t10 = n8.getBoundingClientRect(), e17 = "offsetWidth" in n8 && Math.abs(t10.width) / n8.offsetWidth || 1, r7 = "offsetHeight" in n8 && Math.abs(t10.height) / n8.offsetHeight || 1;
  return {
    top: t10.top,
    right: t10.left + n8.clientWidth * e17,
    bottom: t10.top + n8.clientHeight * r7,
    left: t10.left
  };
};
var hr = (n8) => {
  const t10 = parseInt(n8, 10);
  return Number.isNaN(t10) ? 0 : t10;
};
var wl = (n8, t10, e17, r7, s13, i4) => n8 < e17 && t10 > r7 ? 0 : n8 < e17 ? -(e17 - n8 + s13) : t10 > r7 ? t10 - n8 > r7 - e17 ? n8 + s13 - e17 : t10 - r7 + i4 : 0;
var fd = (n8, t10) => {
  var i4, l5, a6;
  const e17 = n8.ownerDocument;
  let r7 = t10, s13 = n8;
  for (; s13; ) {
    const c12 = s13 === e17.body, h8 = c12 ? {
      top: 0,
      right: ((i4 = window.visualViewport) == null ? void 0 : i4.width) ?? e17.documentElement.clientWidth,
      bottom: ((l5 = window.visualViewport) == null ? void 0 : l5.height) ?? e17.documentElement.clientHeight,
      left: 0
    } : hd(s13), d9 = getComputedStyle(s13), m6 = wl(r7.left, r7.right, h8.left, h8.right, hr(d9.scrollPaddingLeft), hr(d9.scrollPaddingRight)), g10 = wl(r7.top, r7.bottom, h8.top, h8.bottom, hr(d9.scrollPaddingTop), hr(d9.scrollPaddingBottom));
    if (m6 || g10)
      if (c12)
        (a6 = e17.defaultView) == null || a6.scrollBy(m6, g10);
      else {
        const {
          scrollLeft: p5,
          scrollTop: b10
        } = s13;
        g10 && (s13.scrollTop += g10), m6 && (s13.scrollLeft += m6);
        const v6 = s13.scrollLeft - p5, y5 = s13.scrollTop - b10;
        r7 = {
          left: r7.left - v6,
          top: r7.top - y5,
          right: r7.right - v6,
          bottom: r7.bottom - y5
        };
      }
    s13 = c12 || d9.position === "fixed" ? null : ud(s13);
  }
};
var dd = 100;
var gd = ["block", "break", "cursor", "inline", "scroll", "text"];
var pd = (n8, t10, e17) => {
  const r7 = new Fe();
  return gd.forEach((s13) => {
    const i4 = t10.query(s13);
    i4 && r7.register(i4);
  }), n8.forEach((s13) => {
    let i4 = t10.query(s13);
    i4 || e17.error(`Cannot register "${s13}" specified in "formats" config. Are you sure it was registered?`);
    let l5 = 0;
    for (; i4; )
      if (r7.register(i4), i4 = "blotName" in i4 ? i4.requiredContainer ?? null : null, l5 += 1, l5 > dd) {
        e17.error(`Cycle detected in registering blot requiredContainer: "${s13}"`);
        break;
      }
  }), r7;
};
var Pe = Gt2("quill");
var fr = new Fe();
Et2.uiClass = "ql-ui";
var bt2 = class bt3 {
  static debug(t10) {
    t10 === true && (t10 = "log"), Gt2.level(t10);
  }
  static find(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return ri.get(t10) || fr.find(t10, e17);
  }
  static import(t10) {
    return this.imports[t10] == null && Pe.error(`Cannot import ${t10}. Are you sure it was registered?`), this.imports[t10];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t10 = arguments.length <= 0 ? void 0 : arguments[0], e17 = !!(!(arguments.length <= 1) && arguments[1]), r7 = "attrName" in t10 ? t10.attrName : t10.blotName;
      typeof r7 == "string" ? this.register(`formats/${r7}`, t10, e17) : Object.keys(t10).forEach((s13) => {
        this.register(s13, t10[s13], e17);
      });
    } else {
      const t10 = arguments.length <= 0 ? void 0 : arguments[0], e17 = arguments.length <= 1 ? void 0 : arguments[1], r7 = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t10] != null && !r7 && Pe.warn(`Overwriting ${t10} with`, e17), this.imports[t10] = e17, (t10.startsWith("blots/") || t10.startsWith("formats/")) && e17 && typeof e17 != "boolean" && e17.blotName !== "abstract" && fr.register(e17), typeof e17.register == "function" && e17.register(fr);
    }
  }
  constructor(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = md(t10, e17), this.container = this.options.container, this.container == null) {
      Pe.error("Invalid Quill container", t10);
      return;
    }
    this.options.debug && bt3.debug(this.options.debug);
    const r7 = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", ri.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new S6();
    const s13 = xi.blotName, i4 = this.options.registry.query(s13);
    if (!i4 || !("blotName" in i4))
      throw new Error(`Cannot initialize Quill without "${s13}" blot`);
    if (this.scroll = new i4(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new ld(this.scroll), this.selection = new sd(this.scroll, this.emitter), this.composition = new cd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(S6.events.EDITOR_CHANGE, (l5) => {
      l5 === S6.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(S6.events.SCROLL_UPDATE, (l5, a6) => {
      const c12 = this.selection.lastRange, [h8] = this.selection.getRange(), d9 = c12 && h8 ? {
        oldRange: c12,
        newRange: h8
      } : void 0;
      mt2.call(this, () => this.editor.update(null, a6, d9), l5);
    }), this.emitter.on(S6.events.SCROLL_EMBED_UPDATE, (l5, a6) => {
      const c12 = this.selection.lastRange, [h8] = this.selection.getRange(), d9 = c12 && h8 ? {
        oldRange: c12,
        newRange: h8
      } : void 0;
      mt2.call(this, () => {
        const m6 = new O4().retain(l5.offset(this)).retain({
          [l5.statics.blotName]: a6
        });
        return this.editor.update(m6, [], d9);
      }, bt3.sources.USER);
    }), r7) {
      const l5 = this.clipboard.convert({
        html: `${r7}<p><br></p>`,
        text: `
`
      });
      this.setContents(l5);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = false;
  }
  addContainer(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t10 == "string") {
      const r7 = t10;
      t10 = document.createElement("div"), t10.classList.add(r7);
    }
    return this.container.insertBefore(t10, e17), t10;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t10, e17, r7) {
    return [t10, e17, , r7] = Pt2(t10, e17, r7), mt2.call(this, () => this.editor.deleteText(t10, e17), r7, t10, -1 * e17);
  }
  disable() {
    this.enable(false);
  }
  editReadOnly(t10) {
    this.allowReadOnlyEdits = true;
    const e17 = t10();
    return this.allowReadOnlyEdits = false, e17;
  }
  enable() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    this.scroll.enable(t10), this.container.classList.toggle("ql-disabled", !t10);
  }
  focus() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t10.preventScroll || this.scrollSelectionIntoView();
  }
  format(t10, e17) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S6.sources.API;
    return mt2.call(this, () => {
      const s13 = this.getSelection(true);
      let i4 = new O4();
      if (s13 == null) return i4;
      if (this.scroll.query(t10, q5.BLOCK))
        i4 = this.editor.formatLine(s13.index, s13.length, {
          [t10]: e17
        });
      else {
        if (s13.length === 0)
          return this.selection.format(t10, e17), i4;
        i4 = this.editor.formatText(s13.index, s13.length, {
          [t10]: e17
        });
      }
      return this.setSelection(s13, S6.sources.SILENT), i4;
    }, r7);
  }
  formatLine(t10, e17, r7, s13, i4) {
    let l5;
    return [t10, e17, l5, i4] = Pt2(
      t10,
      e17,
      // @ts-expect-error
      r7,
      s13,
      i4
    ), mt2.call(this, () => this.editor.formatLine(t10, e17, l5), i4, t10, 0);
  }
  formatText(t10, e17, r7, s13, i4) {
    let l5;
    return [t10, e17, l5, i4] = Pt2(
      // @ts-expect-error
      t10,
      e17,
      r7,
      s13,
      i4
    ), mt2.call(this, () => this.editor.formatText(t10, e17, l5), i4, t10, 0);
  }
  getBounds(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r7 = null;
    if (typeof t10 == "number" ? r7 = this.selection.getBounds(t10, e17) : r7 = this.selection.getBounds(t10.index, t10.length), !r7) return null;
    const s13 = this.container.getBoundingClientRect();
    return {
      bottom: r7.bottom - s13.top,
      height: r7.height,
      left: r7.left - s13.left,
      right: r7.right - s13.left,
      top: r7.top - s13.top,
      width: r7.width
    };
  }
  getContents() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t10;
    return [t10, e17] = Pt2(t10, e17), this.editor.getContents(t10, e17);
  }
  getFormat() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(true), e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t10 == "number" ? this.editor.getFormat(t10, e17) : this.editor.getFormat(t10.index, t10.length);
  }
  getIndex(t10) {
    return t10.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t10) {
    return this.scroll.leaf(t10);
  }
  getLine(t10) {
    return this.scroll.line(t10);
  }
  getLines() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t10 != "number" ? this.scroll.lines(t10.index, t10.length) : this.scroll.lines(t10, e17);
  }
  getModule(t10) {
    return this.theme.modules[t10];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e17 = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t10 == "number" && (e17 = e17 ?? this.getLength() - t10), [t10, e17] = Pt2(t10, e17), this.editor.getHTML(t10, e17);
  }
  getText() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e17 = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t10 == "number" && (e17 = e17 ?? this.getLength() - t10), [t10, e17] = Pt2(t10, e17), this.editor.getText(t10, e17);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t10, e17, r7) {
    let s13 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : bt3.sources.API;
    return mt2.call(this, () => this.editor.insertEmbed(t10, e17, r7), s13, t10);
  }
  insertText(t10, e17, r7, s13, i4) {
    let l5;
    return [t10, , l5, i4] = Pt2(t10, 0, r7, s13, i4), mt2.call(this, () => this.editor.insertText(t10, e17, l5), i4, t10, e17.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t10, e17, r7) {
    return [t10, e17, , r7] = Pt2(t10, e17, r7), mt2.call(this, () => this.editor.removeFormat(t10, e17), r7, t10);
  }
  scrollRectIntoView(t10) {
    fd(this.root, t10);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t10 = this.selection.lastRange, e17 = t10 && this.selection.getBounds(t10.index, t10.length);
    e17 && this.scrollRectIntoView(e17);
  }
  setContents(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S6.sources.API;
    return mt2.call(this, () => {
      t10 = new O4(t10);
      const r7 = this.getLength(), s13 = this.editor.deleteText(0, r7), i4 = this.editor.insertContents(0, t10), l5 = this.editor.deleteText(this.getLength() - 1, 1);
      return s13.compose(i4).compose(l5);
    }, e17);
  }
  setSelection(t10, e17, r7) {
    t10 == null ? this.selection.setRange(null, e17 || bt3.sources.API) : ([t10, e17, , r7] = Pt2(t10, e17, r7), this.selection.setRange(new ge2(Math.max(0, t10), e17), r7), r7 !== S6.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S6.sources.API;
    const r7 = new O4().insert(t10);
    return this.setContents(r7, e17);
  }
  update() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S6.sources.USER;
    const e17 = this.scroll.update(t10);
    return this.selection.update(t10), e17;
  }
  updateContents(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S6.sources.API;
    return mt2.call(this, () => (t10 = new O4(t10), this.editor.applyDelta(t10)), e17, true);
  }
};
x8(bt2, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: true,
    keyboard: true,
    history: true,
    uploader: true
  },
  placeholder: "",
  readOnly: false,
  registry: fr,
  theme: "default"
}), x8(bt2, "events", S6.events), x8(bt2, "sources", S6.sources), x8(bt2, "version", "2.0.2"), x8(bt2, "imports", {
  delta: O4,
  parchment: Uf,
  "core/module": Tt2,
  "core/theme": ze
});
var N3 = bt2;
function Tl(n8) {
  return typeof n8 == "string" ? document.querySelector(n8) : n8;
}
function Ds(n8) {
  return Object.entries(n8 ?? {}).reduce((t10, e17) => {
    let [r7, s13] = e17;
    return {
      ...t10,
      [r7]: s13 === true ? {} : s13
    };
  }, {});
}
function xl(n8) {
  return Object.fromEntries(Object.entries(n8).filter((t10) => t10[1] !== void 0));
}
function md(n8, t10) {
  const e17 = Tl(n8);
  if (!e17)
    throw new Error("Invalid Quill container");
  const s13 = !t10.theme || t10.theme === N3.DEFAULTS.theme ? ze : N3.import(`themes/${t10.theme}`);
  if (!s13)
    throw new Error(`Invalid theme ${t10.theme}. Did you register it?`);
  const {
    modules: i4,
    ...l5
  } = N3.DEFAULTS, {
    modules: a6,
    ...c12
  } = s13.DEFAULTS;
  let h8 = Ds(t10.modules);
  h8 != null && h8.toolbar && h8.toolbar.constructor !== Object && (h8 = {
    ...h8,
    toolbar: {
      container: h8.toolbar
    }
  });
  const d9 = Jt2({}, Ds(i4), Ds(a6), h8), m6 = {
    ...l5,
    ...xl(c12),
    ...xl(t10)
  };
  let g10 = t10.registry;
  return g10 ? t10.formats && Pe.warn('Ignoring "formats" option because "registry" is specified') : g10 = t10.formats ? pd(t10.formats, m6.registry, Pe) : m6.registry, {
    ...m6,
    registry: g10,
    container: e17,
    theme: s13,
    modules: Object.entries(d9).reduce((p5, b10) => {
      let [v6, y5] = b10;
      if (!y5) return p5;
      const E11 = N3.import(`modules/${v6}`);
      return E11 == null ? (Pe.error(`Cannot load ${v6} module. Are you sure you registered it?`), p5) : {
        ...p5,
        // @ts-expect-error
        [v6]: Jt2({}, E11.DEFAULTS || {}, y5)
      };
    }, {}),
    bounds: Tl(m6.bounds)
  };
}
function mt2(n8, t10, e17, r7) {
  if (!this.isEnabled() && t10 === S6.sources.USER && !this.allowReadOnlyEdits)
    return new O4();
  let s13 = e17 == null ? null : this.getSelection();
  const i4 = this.editor.delta, l5 = n8();
  if (s13 != null && (e17 === true && (e17 = s13.index), r7 == null ? s13 = Ll(s13, l5, t10) : r7 !== 0 && (s13 = Ll(s13, e17, r7, t10)), this.setSelection(s13, S6.sources.SILENT)), l5.length() > 0) {
    const a6 = [S6.events.TEXT_CHANGE, l5, i4, t10];
    this.emitter.emit(S6.events.EDITOR_CHANGE, ...a6), t10 !== S6.sources.SILENT && this.emitter.emit(...a6);
  }
  return l5;
}
function Pt2(n8, t10, e17, r7, s13) {
  let i4 = {};
  return typeof n8.index == "number" && typeof n8.length == "number" ? typeof t10 != "number" ? (s13 = r7, r7 = e17, e17 = t10, t10 = n8.length, n8 = n8.index) : (t10 = n8.length, n8 = n8.index) : typeof t10 != "number" && (s13 = r7, r7 = e17, e17 = t10, t10 = 0), typeof e17 == "object" ? (i4 = e17, s13 = r7) : typeof e17 == "string" && (r7 != null ? i4[e17] = r7 : s13 = e17), s13 = s13 || S6.sources.API, [n8, t10, i4, s13];
}
function Ll(n8, t10, e17, r7) {
  const s13 = typeof e17 == "number" ? e17 : 0;
  if (n8 == null) return null;
  let i4, l5;
  return t10 && typeof t10.transformPosition == "function" ? [i4, l5] = [n8.index, n8.index + n8.length].map((a6) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t10.transformPosition(a6, r7 !== S6.sources.USER)
  )) : [i4, l5] = [n8.index, n8.index + n8.length].map((a6) => a6 < t10 || a6 === t10 && r7 === S6.sources.USER ? a6 : s13 >= 0 ? a6 + s13 : Math.max(t10, a6 + s13)), new ge2(i4, l5 - i4);
}
var ye = class extends _r {
};
function Sl(n8) {
  return n8 instanceof W2 || n8 instanceof ut2;
}
function _l(n8) {
  return typeof n8.updateContent == "function";
}
var $e = class extends xi {
  constructor(t10, e17, r7) {
    let {
      emitter: s13
    } = r7;
    super(t10, e17), this.emitter = s13, this.batch = false, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i4) => this.handleDragStart(i4));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const t10 = this.batch;
    this.batch = false, this.update(t10);
  }
  emitMount(t10) {
    this.emitter.emit(S6.events.SCROLL_BLOT_MOUNT, t10);
  }
  emitUnmount(t10) {
    this.emitter.emit(S6.events.SCROLL_BLOT_UNMOUNT, t10);
  }
  emitEmbedUpdate(t10, e17) {
    this.emitter.emit(S6.events.SCROLL_EMBED_UPDATE, t10, e17);
  }
  deleteAt(t10, e17) {
    const [r7, s13] = this.line(t10), [i4] = this.line(t10 + e17);
    if (super.deleteAt(t10, e17), i4 != null && r7 !== i4 && s13 > 0) {
      if (r7 instanceof ut2 || i4 instanceof ut2) {
        this.optimize();
        return;
      }
      const l5 = i4.children.head instanceof wt ? null : i4.children.head;
      r7.moveChildren(i4, l5), r7.remove();
    }
    this.optimize();
  }
  enable() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    this.domNode.setAttribute("contenteditable", t10 ? "true" : "false");
  }
  formatAt(t10, e17, r7, s13) {
    super.formatAt(t10, e17, r7, s13), this.optimize();
  }
  insertAt(t10, e17, r7) {
    if (t10 >= this.length())
      if (r7 == null || this.scroll.query(e17, q5.BLOCK) == null) {
        const s13 = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s13), r7 == null && e17.endsWith(`
`) ? s13.insertAt(0, e17.slice(0, -1), r7) : s13.insertAt(0, e17, r7);
      } else {
        const s13 = this.scroll.create(e17, r7);
        this.appendChild(s13);
      }
    else
      super.insertAt(t10, e17, r7);
    this.optimize();
  }
  insertBefore(t10, e17) {
    if (t10.statics.scope === q5.INLINE_BLOT) {
      const r7 = this.scroll.create(this.statics.defaultChild.blotName);
      r7.appendChild(t10), super.insertBefore(r7, e17);
    } else
      super.insertBefore(t10, e17);
  }
  insertContents(t10, e17) {
    const r7 = this.deltaToRenderBlocks(e17.concat(new O4().insert(`
`))), s13 = r7.pop();
    if (s13 == null) return;
    this.batchStart();
    const i4 = r7.shift();
    if (i4) {
      const c12 = i4.type === "block" && (i4.delta.length() === 0 || !this.descendant(ut2, t10)[0] && t10 < this.length()), h8 = i4.type === "block" ? i4.delta : new O4().insert({
        [i4.key]: i4.value
      });
      js(this, t10, h8);
      const d9 = i4.type === "block" ? 1 : 0, m6 = t10 + h8.length() + d9;
      c12 && this.insertAt(m6 - 1, `
`);
      const g10 = at2(this.line(t10)[0]), p5 = ht.AttributeMap.diff(g10, i4.attributes) || {};
      Object.keys(p5).forEach((b10) => {
        this.formatAt(m6 - 1, 1, b10, p5[b10]);
      }), t10 = m6;
    }
    let [l5, a6] = this.children.find(t10);
    if (r7.length && (l5 && (l5 = l5.split(a6), a6 = 0), r7.forEach((c12) => {
      if (c12.type === "block") {
        const h8 = this.createBlock(c12.attributes, l5 || void 0);
        js(h8, 0, c12.delta);
      } else {
        const h8 = this.create(c12.key, c12.value);
        this.insertBefore(h8, l5 || void 0), Object.keys(c12.attributes).forEach((d9) => {
          h8.format(d9, c12.attributes[d9]);
        });
      }
    })), s13.type === "block" && s13.delta.length()) {
      const c12 = l5 ? l5.offset(l5.scroll) + a6 : this.length();
      js(this, c12, s13.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t10) {
    const e17 = this.path(t10).pop();
    if (!e17)
      return [null, -1];
    const [r7, s13] = e17;
    return r7 instanceof Q3 ? [r7, s13] : [null, -1];
  }
  line(t10) {
    return t10 === this.length() ? this.line(t10 - 1) : this.descendant(Sl, t10);
  }
  lines() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r7 = (s13, i4, l5) => {
      let a6 = [], c12 = l5;
      return s13.children.forEachAt(i4, l5, (h8, d9, m6) => {
        Sl(h8) ? a6.push(h8) : h8 instanceof _r && (a6 = a6.concat(r7(h8, d9, c12))), c12 -= m6;
      }), a6;
    };
    return r7(this, t10, e17);
  }
  optimize() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t10, e17), t10.length > 0 && this.emitter.emit(S6.events.SCROLL_OPTIMIZE, t10, e17));
  }
  path(t10) {
    return super.path(t10).slice(1);
  }
  remove() {
  }
  update(t10) {
    if (this.batch) {
      Array.isArray(t10) && (this.batch = this.batch.concat(t10));
      return;
    }
    let e17 = S6.sources.USER;
    typeof t10 == "string" && (e17 = t10), Array.isArray(t10) || (t10 = this.observer.takeRecords()), t10 = t10.filter((r7) => {
      let {
        target: s13
      } = r7;
      const i4 = this.find(s13, true);
      return i4 && !_l(i4);
    }), t10.length > 0 && this.emitter.emit(S6.events.SCROLL_BEFORE_UPDATE, e17, t10), super.update(t10.concat([])), t10.length > 0 && this.emitter.emit(S6.events.SCROLL_UPDATE, e17, t10);
  }
  updateEmbedAt(t10, e17, r7) {
    const [s13] = this.descendant((i4) => i4 instanceof ut2, t10);
    s13 && s13.statics.blotName === e17 && _l(s13) && s13.updateContent(r7);
  }
  handleDragStart(t10) {
    t10.preventDefault();
  }
  deltaToRenderBlocks(t10) {
    const e17 = [];
    let r7 = new O4();
    return t10.forEach((s13) => {
      const i4 = s13 == null ? void 0 : s13.insert;
      if (i4)
        if (typeof i4 == "string") {
          const l5 = i4.split(`
`);
          l5.slice(0, -1).forEach((c12) => {
            r7.insert(c12, s13.attributes), e17.push({
              type: "block",
              delta: r7,
              attributes: s13.attributes ?? {}
            }), r7 = new O4();
          });
          const a6 = l5[l5.length - 1];
          a6 && r7.insert(a6, s13.attributes);
        } else {
          const l5 = Object.keys(i4)[0];
          if (!l5) return;
          this.query(l5, q5.INLINE) ? r7.push(s13) : (r7.length() && e17.push({
            type: "block",
            delta: r7,
            attributes: {}
          }), r7 = new O4(), e17.push({
            type: "blockEmbed",
            key: l5,
            value: i4[l5],
            attributes: s13.attributes ?? {}
          }));
        }
    }), r7.length() && e17.push({
      type: "block",
      delta: r7,
      attributes: {}
    }), e17;
  }
  createBlock(t10, e17) {
    let r7;
    const s13 = {};
    Object.entries(t10).forEach((a6) => {
      let [c12, h8] = a6;
      this.query(c12, q5.BLOCK & q5.BLOT) != null ? r7 = c12 : s13[c12] = h8;
    });
    const i4 = this.create(r7 || this.statics.defaultChild.blotName, r7 ? t10[r7] : void 0);
    this.insertBefore(i4, e17 || void 0);
    const l5 = i4.length();
    return Object.entries(s13).forEach((a6) => {
      let [c12, h8] = a6;
      i4.formatAt(0, l5, c12, h8);
    }), i4;
  }
};
x8($e, "blotName", "scroll"), x8($e, "className", "ql-editor"), x8($e, "tagName", "DIV"), x8($e, "defaultChild", W2), x8($e, "allowedChildren", [W2, ut2, ye]);
function js(n8, t10, e17) {
  e17.reduce((r7, s13) => {
    const i4 = ht.Op.length(s13);
    let l5 = s13.attributes || {};
    if (s13.insert != null) {
      if (typeof s13.insert == "string") {
        const a6 = s13.insert;
        n8.insertAt(r7, a6);
        const [c12] = n8.descendant(Q3, r7), h8 = at2(c12);
        l5 = ht.AttributeMap.diff(h8, l5) || {};
      } else if (typeof s13.insert == "object") {
        const a6 = Object.keys(s13.insert)[0];
        if (a6 == null) return r7;
        if (n8.insertAt(r7, a6, s13.insert[a6]), n8.scroll.query(a6, q5.INLINE) != null) {
          const [h8] = n8.descendant(Q3, r7), d9 = at2(h8);
          l5 = ht.AttributeMap.diff(d9, l5) || {};
        }
      }
    }
    return Object.keys(l5).forEach((a6) => {
      n8.formatAt(r7, i4, a6, l5[a6]);
    }), r7 + i4;
  }, t10);
}
var Ci = {
  scope: q5.BLOCK,
  whitelist: ["right", "center", "justify"]
};
var bd = new It2("align", "align", Ci);
var Io = new Nt("align", "ql-align", Ci);
var Ro = new ne2("align", "text-align", Ci);
var ko = class extends ne2 {
  value(t10) {
    let e17 = super.value(t10);
    return e17.startsWith("rgb(") ? (e17 = e17.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e17.split(",").map((s13) => `00${parseInt(s13, 10).toString(16)}`.slice(-2)).join("")}`) : e17;
  }
};
var yd = new Nt("color", "ql-color", {
  scope: q5.INLINE
});
var Ii = new ko("color", "color", {
  scope: q5.INLINE
});
var vd = new Nt("background", "ql-bg", {
  scope: q5.INLINE
});
var Ri = new ko("background", "background-color", {
  scope: q5.INLINE
});
var ve = class extends ye {
  static create(t10) {
    const e17 = super.create(t10);
    return e17.setAttribute("spellcheck", "false"), e17;
  }
  code(t10, e17) {
    return this.children.map((r7) => r7.length() <= 1 ? "" : r7.domNode.innerText).join(`
`).slice(t10, t10 + e17);
  }
  html(t10, e17) {
    return `<pre>
${Ir(this.code(t10, e17))}
</pre>`;
  }
};
var J2 = class extends W2 {
  static register() {
    N3.register(ve);
  }
};
x8(J2, "TAB", "  ");
var ki = class extends Rt2 {
};
ki.blotName = "code";
ki.tagName = "CODE";
J2.blotName = "code-block";
J2.className = "ql-code-block";
J2.tagName = "DIV";
ve.blotName = "code-block-container";
ve.className = "ql-code-block-container";
ve.tagName = "DIV";
ve.allowedChildren = [J2];
J2.allowedChildren = [At2, wt, He];
J2.requiredContainer = ve;
var Bi = {
  scope: q5.BLOCK,
  whitelist: ["rtl"]
};
var Bo = new It2("direction", "dir", Bi);
var Mo = new Nt("direction", "ql-direction", Bi);
var $o = new ne2("direction", "direction", Bi);
var Do = {
  scope: q5.INLINE,
  whitelist: ["serif", "monospace"]
};
var jo = new Nt("font", "ql-font", Do);
var Ed = class extends ne2 {
  value(t10) {
    return super.value(t10).replace(/["']/g, "");
  }
};
var Po = new Ed("font", "font-family", Do);
var Uo = new Nt("size", "ql-size", {
  scope: q5.INLINE,
  whitelist: ["small", "large", "huge"]
});
var Fo = new ne2("size", "font-size", {
  scope: q5.INLINE,
  whitelist: ["10px", "18px", "32px"]
});
var Ad = Gt2("quill:keyboard");
var Nd = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
var Rr = class _Rr extends Tt2 {
  static match(t10, e17) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r7) => !!e17[r7] !== t10[r7] && e17[r7] !== null) ? false : e17.key === t10.key || e17.key === t10.which;
  }
  constructor(t10, e17) {
    super(t10, e17), this.bindings = {}, Object.keys(this.options.bindings).forEach((r7) => {
      this.options.bindings[r7] && this.addBinding(this.options.bindings[r7]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: true
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: true
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: true,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: true,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: false
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: false
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: true,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s13 = Td(t10);
    if (s13 == null) {
      Ad.warn("Attempted to add invalid keyboard binding", s13);
      return;
    }
    typeof e17 == "function" && (e17 = {
      handler: e17
    }), typeof r7 == "function" && (r7 = {
      handler: r7
    }), (Array.isArray(s13.key) ? s13.key : [s13.key]).forEach((l5) => {
      const a6 = {
        ...s13,
        key: l5,
        ...e17,
        ...r7
      };
      this.bindings[a6.key] = this.bindings[a6.key] || [], this.bindings[a6.key].push(a6);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t10) => {
      if (t10.defaultPrevented || t10.isComposing || t10.keyCode === 229 && (t10.key === "Enter" || t10.key === "Backspace")) return;
      const s13 = (this.bindings[t10.key] || []).concat(this.bindings[t10.which] || []).filter((E11) => _Rr.match(t10, E11));
      if (s13.length === 0) return;
      const i4 = N3.find(t10.target, true);
      if (i4 && i4.scroll !== this.quill.scroll) return;
      const l5 = this.quill.getSelection();
      if (l5 == null || !this.quill.hasFocus()) return;
      const [a6, c12] = this.quill.getLine(l5.index), [h8, d9] = this.quill.getLeaf(l5.index), [m6, g10] = l5.length === 0 ? [h8, d9] : this.quill.getLeaf(l5.index + l5.length), p5 = h8 instanceof Ar ? h8.value().slice(0, d9) : "", b10 = m6 instanceof Ar ? m6.value().slice(g10) : "", v6 = {
        collapsed: l5.length === 0,
        // @ts-expect-error Fix me later
        empty: l5.length === 0 && a6.length() <= 1,
        format: this.quill.getFormat(l5),
        line: a6,
        offset: c12,
        prefix: p5,
        suffix: b10,
        event: t10
      };
      s13.some((E11) => {
        if (E11.collapsed != null && E11.collapsed !== v6.collapsed || E11.empty != null && E11.empty !== v6.empty || E11.offset != null && E11.offset !== v6.offset)
          return false;
        if (Array.isArray(E11.format)) {
          if (E11.format.every((w12) => v6.format[w12] == null))
            return false;
        } else if (typeof E11.format == "object" && !Object.keys(E11.format).every((w12) => E11.format[w12] === true ? v6.format[w12] != null : E11.format[w12] === false ? v6.format[w12] == null : wi(E11.format[w12], v6.format[w12])))
          return false;
        return E11.prefix != null && !E11.prefix.test(v6.prefix) || E11.suffix != null && !E11.suffix.test(v6.suffix) ? false : E11.handler.call(this, l5, v6, E11) !== true;
      }) && t10.preventDefault();
    });
  }
  handleBackspace(t10, e17) {
    const r7 = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e17.prefix) ? 2 : 1;
    if (t10.index === 0 || this.quill.getLength() <= 1) return;
    let s13 = {};
    const [i4] = this.quill.getLine(t10.index);
    let l5 = new O4().retain(t10.index - r7).delete(r7);
    if (e17.offset === 0) {
      const [a6] = this.quill.getLine(t10.index - 1);
      if (a6 && !(a6.statics.blotName === "block" && a6.length() <= 1)) {
        const h8 = i4.formats(), d9 = this.quill.getFormat(t10.index - 1, 1);
        if (s13 = ht.AttributeMap.diff(h8, d9) || {}, Object.keys(s13).length > 0) {
          const m6 = new O4().retain(t10.index + i4.length() - 2).retain(1, s13);
          l5 = l5.compose(m6);
        }
      }
    }
    this.quill.updateContents(l5, N3.sources.USER), this.quill.focus();
  }
  handleDelete(t10, e17) {
    const r7 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e17.suffix) ? 2 : 1;
    if (t10.index >= this.quill.getLength() - r7) return;
    let s13 = {};
    const [i4] = this.quill.getLine(t10.index);
    let l5 = new O4().retain(t10.index).delete(r7);
    if (e17.offset >= i4.length() - 1) {
      const [a6] = this.quill.getLine(t10.index + 1);
      if (a6) {
        const c12 = i4.formats(), h8 = this.quill.getFormat(t10.index, 1);
        s13 = ht.AttributeMap.diff(c12, h8) || {}, Object.keys(s13).length > 0 && (l5 = l5.retain(a6.length() - 1).retain(1, s13));
      }
    }
    this.quill.updateContents(l5, N3.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t10) {
    Mi({
      range: t10,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t10, e17) {
    const r7 = Object.keys(e17.format).reduce((i4, l5) => (this.quill.scroll.query(l5, q5.BLOCK) && !Array.isArray(e17.format[l5]) && (i4[l5] = e17.format[l5]), i4), {}), s13 = new O4().retain(t10.index).delete(t10.length).insert(`
`, r7);
    this.quill.updateContents(s13, N3.sources.USER), this.quill.setSelection(t10.index + 1, N3.sources.SILENT), this.quill.focus();
  }
};
var wd = {
  bindings: {
    bold: Ps("bold"),
    italic: Ps("italic"),
    underline: Ps("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(n8, t10) {
        return t10.collapsed && t10.offset !== 0 ? true : (this.quill.format("indent", "+1", N3.sources.USER), false);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: true,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n8, t10) {
        return t10.collapsed && t10.offset !== 0 ? true : (this.quill.format("indent", "-1", N3.sources.USER), false);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(n8, t10) {
        t10.format.indent != null ? this.quill.format("indent", "-1", N3.sources.USER) : t10.format.list != null && this.quill.format("list", false, N3.sources.USER);
      }
    },
    "indent code-block": Ol(true),
    "outdent code-block": Ol(false),
    "remove tab": {
      key: "Tab",
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler(n8) {
        this.quill.deleteText(n8.index - 1, 1, N3.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n8, t10) {
        if (t10.format.table) return true;
        this.quill.history.cutoff();
        const e17 = new O4().retain(n8.index).delete(n8.length).insert("	");
        return this.quill.updateContents(e17, N3.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n8.index + 1, N3.sources.SILENT), false;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: true,
      format: ["blockquote"],
      empty: true,
      handler() {
        this.quill.format("blockquote", false, N3.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: true,
      format: ["list"],
      empty: true,
      handler(n8, t10) {
        const e17 = {
          list: false
        };
        t10.format.indent && (e17.indent = false), this.quill.formatLine(n8.index, n8.length, e17, N3.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: true,
      format: {
        list: "checked"
      },
      handler(n8) {
        const [t10, e17] = this.quill.getLine(n8.index), r7 = {
          // @ts-expect-error Fix me later
          ...t10.formats(),
          list: "checked"
        }, s13 = new O4().retain(n8.index).insert(`
`, r7).retain(t10.length() - e17 - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s13, N3.sources.USER), this.quill.setSelection(n8.index + 1, N3.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: true,
      format: ["header"],
      suffix: /^$/,
      handler(n8, t10) {
        const [e17, r7] = this.quill.getLine(n8.index), s13 = new O4().retain(n8.index).insert(`
`, t10.format).retain(e17.length() - r7 - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s13, N3.sources.USER), this.quill.setSelection(n8.index + 1, N3.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: true,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: true,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(n8) {
        const t10 = this.quill.getModule("table");
        if (t10) {
          const [e17, r7, s13, i4] = t10.getTable(n8), l5 = xd(e17, r7, s13, i4);
          if (l5 == null) return;
          let a6 = e17.offset();
          if (l5 < 0) {
            const c12 = new O4().retain(a6).insert(`
`);
            this.quill.updateContents(c12, N3.sources.USER), this.quill.setSelection(n8.index + 1, n8.length, N3.sources.SILENT);
          } else if (l5 > 0) {
            a6 += e17.length();
            const c12 = new O4().retain(a6).insert(`
`);
            this.quill.updateContents(c12, N3.sources.USER), this.quill.setSelection(a6, N3.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n8, t10) {
        const {
          event: e17,
          line: r7
        } = t10, s13 = r7.offset(this.quill.scroll);
        e17.shiftKey ? this.quill.setSelection(s13 - 1, N3.sources.USER) : this.quill.setSelection(s13 + r7.length(), N3.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: true,
      format: {
        "code-block": false,
        blockquote: false,
        table: false
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(n8, t10) {
        if (this.quill.scroll.query("list") == null) return true;
        const {
          length: e17
        } = t10.prefix, [r7, s13] = this.quill.getLine(n8.index);
        if (s13 > e17) return true;
        let i4;
        switch (t10.prefix.trim()) {
          case "[]":
          case "[ ]":
            i4 = "unchecked";
            break;
          case "[x]":
            i4 = "checked";
            break;
          case "-":
          case "*":
            i4 = "bullet";
            break;
          default:
            i4 = "ordered";
        }
        this.quill.insertText(n8.index, " ", N3.sources.USER), this.quill.history.cutoff();
        const l5 = new O4().retain(n8.index - s13).delete(e17 + 1).retain(r7.length() - 2 - s13).retain(1, {
          list: i4
        });
        return this.quill.updateContents(l5, N3.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n8.index - e17, N3.sources.SILENT), false;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: true,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n8) {
        const [t10, e17] = this.quill.getLine(n8.index);
        let r7 = 2, s13 = t10;
        for (; s13 != null && s13.length() <= 1 && s13.formats()["code-block"]; )
          if (s13 = s13.prev, r7 -= 1, r7 <= 0) {
            const i4 = new O4().retain(n8.index + t10.length() - e17 - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i4, N3.sources.USER), this.quill.setSelection(n8.index - 1, N3.sources.SILENT), false;
          }
        return true;
      }
    },
    "embed left": dr("ArrowLeft", false),
    "embed left shift": dr("ArrowLeft", true),
    "embed right": dr("ArrowRight", false),
    "embed right shift": dr("ArrowRight", true),
    "table down": ql(false),
    "table up": ql(true)
  }
};
Rr.DEFAULTS = wd;
function Ol(n8) {
  return {
    key: "Tab",
    shiftKey: !n8,
    format: {
      "code-block": true
    },
    handler(t10, e17) {
      let {
        event: r7
      } = e17;
      const s13 = this.quill.scroll.query("code-block"), {
        TAB: i4
      } = s13;
      if (t10.length === 0 && !r7.shiftKey) {
        this.quill.insertText(t10.index, i4, N3.sources.USER), this.quill.setSelection(t10.index + i4.length, N3.sources.SILENT);
        return;
      }
      const l5 = t10.length === 0 ? this.quill.getLines(t10.index, 1) : this.quill.getLines(t10);
      let {
        index: a6,
        length: c12
      } = t10;
      l5.forEach((h8, d9) => {
        n8 ? (h8.insertAt(0, i4), d9 === 0 ? a6 += i4.length : c12 += i4.length) : h8.domNode.textContent.startsWith(i4) && (h8.deleteAt(0, i4.length), d9 === 0 ? a6 -= i4.length : c12 -= i4.length);
      }), this.quill.update(N3.sources.USER), this.quill.setSelection(a6, c12, N3.sources.SILENT);
    }
  };
}
function dr(n8, t10) {
  return {
    key: n8,
    shiftKey: t10,
    altKey: null,
    [n8 === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r7) {
      let {
        index: s13
      } = r7;
      n8 === "ArrowRight" && (s13 += r7.length + 1);
      const [i4] = this.quill.getLeaf(s13);
      return i4 instanceof it2 ? (n8 === "ArrowLeft" ? t10 ? this.quill.setSelection(r7.index - 1, r7.length + 1, N3.sources.USER) : this.quill.setSelection(r7.index - 1, N3.sources.USER) : t10 ? this.quill.setSelection(r7.index, r7.length + 1, N3.sources.USER) : this.quill.setSelection(r7.index + r7.length + 1, N3.sources.USER), false) : true;
    }
  };
}
function Ps(n8) {
  return {
    key: n8[0],
    shortKey: true,
    handler(t10, e17) {
      this.quill.format(n8, !e17.format[n8], N3.sources.USER);
    }
  };
}
function ql(n8) {
  return {
    key: n8 ? "ArrowUp" : "ArrowDown",
    collapsed: true,
    format: ["table"],
    handler(t10, e17) {
      const r7 = n8 ? "prev" : "next", s13 = e17.line, i4 = s13.parent[r7];
      if (i4 != null) {
        if (i4.statics.blotName === "table-row") {
          let l5 = i4.children.head, a6 = s13;
          for (; a6.prev != null; )
            a6 = a6.prev, l5 = l5.next;
          const c12 = l5.offset(this.quill.scroll) + Math.min(e17.offset, l5.length() - 1);
          this.quill.setSelection(c12, 0, N3.sources.USER);
        }
      } else {
        const l5 = s13.table()[r7];
        l5 != null && (n8 ? this.quill.setSelection(l5.offset(this.quill.scroll) + l5.length() - 1, 0, N3.sources.USER) : this.quill.setSelection(l5.offset(this.quill.scroll), 0, N3.sources.USER));
      }
      return false;
    }
  };
}
function Td(n8) {
  if (typeof n8 == "string" || typeof n8 == "number")
    n8 = {
      key: n8
    };
  else if (typeof n8 == "object")
    n8 = De3(n8);
  else
    return null;
  return n8.shortKey && (n8[Nd] = n8.shortKey, delete n8.shortKey), n8;
}
function Mi(n8) {
  let {
    quill: t10,
    range: e17
  } = n8;
  const r7 = t10.getLines(e17);
  let s13 = {};
  if (r7.length > 1) {
    const i4 = r7[0].formats(), l5 = r7[r7.length - 1].formats();
    s13 = ht.AttributeMap.diff(l5, i4) || {};
  }
  t10.deleteText(e17, N3.sources.USER), Object.keys(s13).length > 0 && t10.formatLine(e17.index, 1, s13, N3.sources.USER), t10.setSelection(e17.index, N3.sources.SILENT);
}
function xd(n8, t10, e17, r7) {
  return t10.prev == null && t10.next == null ? e17.prev == null && e17.next == null ? r7 === 0 ? -1 : 1 : e17.prev == null ? -1 : 1 : t10.prev == null ? -1 : t10.next == null ? 1 : null;
}
var Ld = /font-weight:\s*normal/;
var Sd = ["P", "OL", "UL"];
var Cl = (n8) => n8 && Sd.includes(n8.tagName);
var _d = (n8) => {
  Array.from(n8.querySelectorAll("br")).filter((t10) => Cl(t10.previousElementSibling) && Cl(t10.nextElementSibling)).forEach((t10) => {
    var e17;
    (e17 = t10.parentNode) == null || e17.removeChild(t10);
  });
};
var Od = (n8) => {
  Array.from(n8.querySelectorAll('b[style*="font-weight"]')).filter((t10) => {
    var e17;
    return (e17 = t10.getAttribute("style")) == null ? void 0 : e17.match(Ld);
  }).forEach((t10) => {
    var r7;
    const e17 = n8.createDocumentFragment();
    e17.append(...t10.childNodes), (r7 = t10.parentNode) == null || r7.replaceChild(e17, t10);
  });
};
function qd(n8) {
  n8.querySelector('[id^="docs-internal-guid-"]') && (Od(n8), _d(n8));
}
var Cd = /\bmso-list:[^;]*ignore/i;
var Id = /\bmso-list:[^;]*\bl(\d+)/i;
var Rd = /\bmso-list:[^;]*\blevel(\d+)/i;
var kd = (n8, t10) => {
  const e17 = n8.getAttribute("style"), r7 = e17 == null ? void 0 : e17.match(Id);
  if (!r7)
    return null;
  const s13 = Number(r7[1]), i4 = e17 == null ? void 0 : e17.match(Rd), l5 = i4 ? Number(i4[1]) : 1, a6 = new RegExp(`@list l${s13}:level${l5}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c12 = t10.match(a6), h8 = c12 && c12[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s13,
    indent: l5,
    type: h8,
    element: n8
  };
};
var Bd = (n8) => {
  var l5, a6;
  const t10 = Array.from(n8.querySelectorAll("[style*=mso-list]")), e17 = [], r7 = [];
  t10.forEach((c12) => {
    (c12.getAttribute("style") || "").match(Cd) ? e17.push(c12) : r7.push(c12);
  }), e17.forEach((c12) => {
    var h8;
    return (h8 = c12.parentNode) == null ? void 0 : h8.removeChild(c12);
  });
  const s13 = n8.documentElement.innerHTML, i4 = r7.map((c12) => kd(c12, s13)).filter((c12) => c12);
  for (; i4.length; ) {
    const c12 = [];
    let h8 = i4.shift();
    for (; h8; )
      c12.push(h8), h8 = i4.length && ((l5 = i4[0]) == null ? void 0 : l5.element) === h8.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i4[0].id === h8.id ? i4.shift() : null;
    const d9 = document.createElement("ul");
    c12.forEach((p5) => {
      const b10 = document.createElement("li");
      b10.setAttribute("data-list", p5.type), p5.indent > 1 && b10.setAttribute("class", `ql-indent-${p5.indent - 1}`), b10.innerHTML = p5.element.innerHTML, d9.appendChild(b10);
    });
    const m6 = (a6 = c12[0]) == null ? void 0 : a6.element, {
      parentNode: g10
    } = m6 ?? {};
    m6 && (g10 == null || g10.replaceChild(d9, m6)), c12.slice(1).forEach((p5) => {
      let {
        element: b10
      } = p5;
      g10 == null || g10.removeChild(b10);
    });
  }
};
function Md(n8) {
  n8.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Bd(n8);
}
var $d = [Md, qd];
var Dd = (n8) => {
  n8.documentElement && $d.forEach((t10) => {
    t10(n8);
  });
};
var jd = Gt2("quill:clipboard");
var Pd = [[Node.TEXT_NODE, Qd], [Node.TEXT_NODE, Rl], ["br", Gd], [Node.ELEMENT_NODE, Rl], [Node.ELEMENT_NODE, zd], [Node.ELEMENT_NODE, Hd], [Node.ELEMENT_NODE, Xd], ["li", Wd], ["ol, ul", Zd], ["pre", Kd], ["tr", Yd], ["b", Us("bold")], ["i", Us("italic")], ["strike", Us("strike")], ["style", Vd]];
var Ud = [bd, Bo].reduce((n8, t10) => (n8[t10.keyName] = t10, n8), {});
var Il = [Ro, Ri, Ii, $o, Po, Fo].reduce((n8, t10) => (n8[t10.keyName] = t10, n8), {});
var Ho = class extends Tt2 {
  constructor(t10, e17) {
    super(t10, e17), this.quill.root.addEventListener("copy", (r7) => this.onCaptureCopy(r7, false)), this.quill.root.addEventListener("cut", (r7) => this.onCaptureCopy(r7, true)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Pd.concat(this.options.matchers ?? []).forEach((r7) => {
      let [s13, i4] = r7;
      this.addMatcher(s13, i4);
    });
  }
  addMatcher(t10, e17) {
    this.matchers.push([t10, e17]);
  }
  convert(t10) {
    let {
      html: e17,
      text: r7
    } = t10, s13 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s13[J2.blotName])
      return new O4().insert(r7 || "", {
        [J2.blotName]: s13[J2.blotName]
      });
    if (!e17)
      return new O4().insert(r7 || "", s13);
    const i4 = this.convertHTML(e17);
    return Cn(i4, `
`) && (i4.ops[i4.ops.length - 1].attributes == null || s13.table) ? i4.compose(new O4().retain(i4.length() - 1).delete(1)) : i4;
  }
  normalizeHTML(t10) {
    Dd(t10);
  }
  convertHTML(t10) {
    const e17 = new DOMParser().parseFromString(t10, "text/html");
    this.normalizeHTML(e17);
    const r7 = e17.body, s13 = /* @__PURE__ */ new WeakMap(), [i4, l5] = this.prepareMatching(r7, s13);
    return $i(this.quill.scroll, r7, i4, l5, s13);
  }
  dangerouslyPasteHTML(t10, e17) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N3.sources.API;
    if (typeof t10 == "string") {
      const s13 = this.convert({
        html: t10,
        text: ""
      });
      this.quill.setContents(s13, e17), this.quill.setSelection(0, N3.sources.SILENT);
    } else {
      const s13 = this.convert({
        html: e17,
        text: ""
      });
      this.quill.updateContents(new O4().retain(t10).concat(s13), r7), this.quill.setSelection(t10 + s13.length(), N3.sources.SILENT);
    }
  }
  onCaptureCopy(t10) {
    var l5, a6;
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (t10.defaultPrevented) return;
    t10.preventDefault();
    const [r7] = this.quill.selection.getRange();
    if (r7 == null) return;
    const {
      html: s13,
      text: i4
    } = this.onCopy(r7, e17);
    (l5 = t10.clipboardData) == null || l5.setData("text/plain", i4), (a6 = t10.clipboardData) == null || a6.setData("text/html", s13), e17 && Mi({
      range: r7,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t10) {
    return t10.split(/\r?\n/).filter((e17) => e17[0] !== "#").join(`
`);
  }
  onCapturePaste(t10) {
    var l5, a6, c12, h8, d9;
    if (t10.defaultPrevented || !this.quill.isEnabled()) return;
    t10.preventDefault();
    const e17 = this.quill.getSelection(true);
    if (e17 == null) return;
    const r7 = (l5 = t10.clipboardData) == null ? void 0 : l5.getData("text/html");
    let s13 = (a6 = t10.clipboardData) == null ? void 0 : a6.getData("text/plain");
    if (!r7 && !s13) {
      const m6 = (c12 = t10.clipboardData) == null ? void 0 : c12.getData("text/uri-list");
      m6 && (s13 = this.normalizeURIList(m6));
    }
    const i4 = Array.from(((h8 = t10.clipboardData) == null ? void 0 : h8.files) || []);
    if (!r7 && i4.length > 0) {
      this.quill.uploader.upload(e17, i4);
      return;
    }
    if (r7 && i4.length > 0) {
      const m6 = new DOMParser().parseFromString(r7, "text/html");
      if (m6.body.childElementCount === 1 && ((d9 = m6.body.firstElementChild) == null ? void 0 : d9.tagName) === "IMG") {
        this.quill.uploader.upload(e17, i4);
        return;
      }
    }
    this.onPaste(e17, {
      html: r7,
      text: s13
    });
  }
  onCopy(t10) {
    const e17 = this.quill.getText(t10);
    return {
      html: this.quill.getSemanticHTML(t10),
      text: e17
    };
  }
  onPaste(t10, e17) {
    let {
      text: r7,
      html: s13
    } = e17;
    const i4 = this.quill.getFormat(t10.index), l5 = this.convert({
      text: r7,
      html: s13
    }, i4);
    jd.log("onPaste", l5, {
      text: r7,
      html: s13
    });
    const a6 = new O4().retain(t10.index).delete(t10.length).concat(l5);
    this.quill.updateContents(a6, N3.sources.USER), this.quill.setSelection(a6.length() - t10.length, N3.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t10, e17) {
    const r7 = [], s13 = [];
    return this.matchers.forEach((i4) => {
      const [l5, a6] = i4;
      switch (l5) {
        case Node.TEXT_NODE:
          s13.push(a6);
          break;
        case Node.ELEMENT_NODE:
          r7.push(a6);
          break;
        default:
          Array.from(t10.querySelectorAll(l5)).forEach((c12) => {
            if (e17.has(c12)) {
              const h8 = e17.get(c12);
              h8 == null || h8.push(a6);
            } else
              e17.set(c12, [a6]);
          });
          break;
      }
    }), [r7, s13];
  }
};
x8(Ho, "DEFAULTS", {
  matchers: []
});
function Ee(n8, t10, e17, r7) {
  return r7.query(t10) ? n8.reduce((s13, i4) => {
    if (!i4.insert) return s13;
    if (i4.attributes && i4.attributes[t10])
      return s13.push(i4);
    const l5 = e17 ? {
      [t10]: e17
    } : {};
    return s13.insert(i4.insert, {
      ...l5,
      ...i4.attributes
    });
  }, new O4()) : n8;
}
function Cn(n8, t10) {
  let e17 = "";
  for (let r7 = n8.ops.length - 1; r7 >= 0 && e17.length < t10.length; --r7) {
    const s13 = n8.ops[r7];
    if (typeof s13.insert != "string") break;
    e17 = s13.insert + e17;
  }
  return e17.slice(-1 * t10.length) === t10;
}
function Yt2(n8, t10) {
  if (!(n8 instanceof Element)) return false;
  const e17 = t10.query(n8);
  return e17 && e17.prototype instanceof it2 ? false : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n8.tagName.toLowerCase());
}
function Fd(n8, t10) {
  return n8.previousElementSibling && n8.nextElementSibling && !Yt2(n8.previousElementSibling, t10) && !Yt2(n8.nextElementSibling, t10);
}
var gr = /* @__PURE__ */ new WeakMap();
function zo(n8) {
  return n8 == null ? false : (gr.has(n8) || (n8.tagName === "PRE" ? gr.set(n8, true) : gr.set(n8, zo(n8.parentNode))), gr.get(n8));
}
function $i(n8, t10, e17, r7, s13) {
  return t10.nodeType === t10.TEXT_NODE ? r7.reduce((i4, l5) => l5(t10, i4, n8), new O4()) : t10.nodeType === t10.ELEMENT_NODE ? Array.from(t10.childNodes || []).reduce((i4, l5) => {
    let a6 = $i(n8, l5, e17, r7, s13);
    return l5.nodeType === t10.ELEMENT_NODE && (a6 = e17.reduce((c12, h8) => h8(l5, c12, n8), a6), a6 = (s13.get(l5) || []).reduce((c12, h8) => h8(l5, c12, n8), a6)), i4.concat(a6);
  }, new O4()) : new O4();
}
function Us(n8) {
  return (t10, e17, r7) => Ee(e17, n8, true, r7);
}
function Hd(n8, t10, e17) {
  const r7 = It2.keys(n8), s13 = Nt.keys(n8), i4 = ne2.keys(n8), l5 = {};
  return r7.concat(s13).concat(i4).forEach((a6) => {
    let c12 = e17.query(a6, q5.ATTRIBUTE);
    c12 != null && (l5[c12.attrName] = c12.value(n8), l5[c12.attrName]) || (c12 = Ud[a6], c12 != null && (c12.attrName === a6 || c12.keyName === a6) && (l5[c12.attrName] = c12.value(n8) || void 0), c12 = Il[a6], c12 != null && (c12.attrName === a6 || c12.keyName === a6) && (c12 = Il[a6], l5[c12.attrName] = c12.value(n8) || void 0));
  }), Object.entries(l5).reduce((a6, c12) => {
    let [h8, d9] = c12;
    return Ee(a6, h8, d9, e17);
  }, t10);
}
function zd(n8, t10, e17) {
  const r7 = e17.query(n8);
  if (r7 == null) return t10;
  if (r7.prototype instanceof it2) {
    const s13 = {}, i4 = r7.value(n8);
    if (i4 != null)
      return s13[r7.blotName] = i4, new O4().insert(s13, r7.formats(n8, e17));
  } else if (r7.prototype instanceof wn && !Cn(t10, `
`) && t10.insert(`
`), "blotName" in r7 && "formats" in r7 && typeof r7.formats == "function")
    return Ee(t10, r7.blotName, r7.formats(n8, e17), e17);
  return t10;
}
function Gd(n8, t10) {
  return Cn(t10, `
`) || t10.insert(`
`), t10;
}
function Kd(n8, t10, e17) {
  const r7 = e17.query("code-block"), s13 = r7 && "formats" in r7 && typeof r7.formats == "function" ? r7.formats(n8, e17) : true;
  return Ee(t10, "code-block", s13, e17);
}
function Vd() {
  return new O4();
}
function Wd(n8, t10, e17) {
  const r7 = e17.query(n8);
  if (r7 == null || // @ts-expect-error
  r7.blotName !== "list" || !Cn(t10, `
`))
    return t10;
  let s13 = -1, i4 = n8.parentNode;
  for (; i4 != null; )
    ["OL", "UL"].includes(i4.tagName) && (s13 += 1), i4 = i4.parentNode;
  return s13 <= 0 ? t10 : t10.reduce((l5, a6) => a6.insert ? a6.attributes && typeof a6.attributes.indent == "number" ? l5.push(a6) : l5.insert(a6.insert, {
    indent: s13,
    ...a6.attributes || {}
  }) : l5, new O4());
}
function Zd(n8, t10, e17) {
  const r7 = n8;
  let s13 = r7.tagName === "OL" ? "ordered" : "bullet";
  const i4 = r7.getAttribute("data-checked");
  return i4 && (s13 = i4 === "true" ? "checked" : "unchecked"), Ee(t10, "list", s13, e17);
}
function Rl(n8, t10, e17) {
  if (!Cn(t10, `
`)) {
    if (Yt2(n8, e17) && (n8.childNodes.length > 0 || n8 instanceof HTMLParagraphElement))
      return t10.insert(`
`);
    if (t10.length() > 0 && n8.nextSibling) {
      let r7 = n8.nextSibling;
      for (; r7 != null; ) {
        if (Yt2(r7, e17))
          return t10.insert(`
`);
        const s13 = e17.query(r7);
        if (s13 && s13.prototype instanceof ut2)
          return t10.insert(`
`);
        r7 = r7.firstChild;
      }
    }
  }
  return t10;
}
function Xd(n8, t10, e17) {
  var i4;
  const r7 = {}, s13 = n8.style || {};
  return s13.fontStyle === "italic" && (r7.italic = true), s13.textDecoration === "underline" && (r7.underline = true), s13.textDecoration === "line-through" && (r7.strike = true), ((i4 = s13.fontWeight) != null && i4.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s13.fontWeight, 10) >= 700) && (r7.bold = true), t10 = Object.entries(r7).reduce((l5, a6) => {
    let [c12, h8] = a6;
    return Ee(l5, c12, h8, e17);
  }, t10), parseFloat(s13.textIndent || 0) > 0 ? new O4().insert("	").concat(t10) : t10;
}
function Yd(n8, t10, e17) {
  var s13, i4;
  const r7 = ((s13 = n8.parentElement) == null ? void 0 : s13.tagName) === "TABLE" ? n8.parentElement : (i4 = n8.parentElement) == null ? void 0 : i4.parentElement;
  if (r7 != null) {
    const a6 = Array.from(r7.querySelectorAll("tr")).indexOf(n8) + 1;
    return Ee(t10, "table", a6, e17);
  }
  return t10;
}
function Qd(n8, t10, e17) {
  var s13;
  let r7 = n8.data;
  if (((s13 = n8.parentElement) == null ? void 0 : s13.tagName) === "O:P")
    return t10.insert(r7.trim());
  if (!zo(n8)) {
    if (r7.trim().length === 0 && r7.includes(`
`) && !Fd(n8, e17))
      return t10;
    const i4 = (l5, a6) => {
      const c12 = a6.replace(/[^\u00a0]/g, "");
      return c12.length < 1 && l5 ? " " : c12;
    };
    r7 = r7.replace(/\r\n/g, " ").replace(/\n/g, " "), r7 = r7.replace(/\s\s+/g, i4.bind(i4, true)), (n8.previousSibling == null && n8.parentElement != null && Yt2(n8.parentElement, e17) || n8.previousSibling instanceof Element && Yt2(n8.previousSibling, e17)) && (r7 = r7.replace(/^\s+/, i4.bind(i4, false))), (n8.nextSibling == null && n8.parentElement != null && Yt2(n8.parentElement, e17) || n8.nextSibling instanceof Element && Yt2(n8.nextSibling, e17)) && (r7 = r7.replace(/\s+$/, i4.bind(i4, false)));
  }
  return t10.insert(r7);
}
var Go = class extends Tt2 {
  constructor(e17, r7) {
    super(e17, r7);
    x8(this, "lastRecorded", 0);
    x8(this, "ignoreChange", false);
    x8(this, "stack", {
      undo: [],
      redo: []
    });
    x8(this, "currentRange", null);
    this.quill.on(N3.events.EDITOR_CHANGE, (s13, i4, l5, a6) => {
      s13 === N3.events.SELECTION_CHANGE ? i4 && a6 !== N3.sources.SILENT && (this.currentRange = i4) : s13 === N3.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a6 === N3.sources.USER ? this.record(i4, l5) : this.transform(i4)), this.currentRange = li(this.currentRange, i4));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: true
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: true,
      shiftKey: true
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: true
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s13) => {
      s13.inputType === "historyUndo" ? (this.undo(), s13.preventDefault()) : s13.inputType === "historyRedo" && (this.redo(), s13.preventDefault());
    });
  }
  change(e17, r7) {
    if (this.stack[e17].length === 0) return;
    const s13 = this.stack[e17].pop();
    if (!s13) return;
    const i4 = this.quill.getContents(), l5 = s13.delta.invert(i4);
    this.stack[r7].push({
      delta: l5,
      range: li(s13.range, l5)
    }), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(s13.delta, N3.sources.USER), this.ignoreChange = false, this.restoreSelection(s13);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(e17, r7) {
    if (e17.ops.length === 0) return;
    this.stack.redo = [];
    let s13 = e17.invert(r7), i4 = this.currentRange;
    const l5 = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > l5 && this.stack.undo.length > 0
    ) {
      const a6 = this.stack.undo.pop();
      a6 && (s13 = s13.compose(a6.delta), i4 = a6.range);
    } else
      this.lastRecorded = l5;
    s13.length() !== 0 && (this.stack.undo.push({
      delta: s13,
      range: i4
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e17) {
    kl(this.stack.undo, e17), kl(this.stack.redo, e17);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e17) {
    if (e17.range)
      this.quill.setSelection(e17.range, N3.sources.USER);
    else {
      const r7 = tg(this.quill.scroll, e17.delta);
      this.quill.setSelection(r7, N3.sources.USER);
    }
  }
};
x8(Go, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: false
});
function kl(n8, t10) {
  let e17 = t10;
  for (let r7 = n8.length - 1; r7 >= 0; r7 -= 1) {
    const s13 = n8[r7];
    n8[r7] = {
      delta: e17.transform(s13.delta, true),
      range: s13.range && li(s13.range, e17)
    }, e17 = s13.delta.transform(e17), n8[r7].delta.length() === 0 && n8.splice(r7, 1);
  }
}
function Jd(n8, t10) {
  const e17 = t10.ops[t10.ops.length - 1];
  return e17 == null ? false : e17.insert != null ? typeof e17.insert == "string" && e17.insert.endsWith(`
`) : e17.attributes != null ? Object.keys(e17.attributes).some((r7) => n8.query(r7, q5.BLOCK) != null) : false;
}
function tg(n8, t10) {
  const e17 = t10.reduce((s13, i4) => s13 + (i4.delete || 0), 0);
  let r7 = t10.length() - e17;
  return Jd(n8, t10) && (r7 -= 1), r7;
}
function li(n8, t10) {
  if (!n8) return n8;
  const e17 = t10.transformPosition(n8.index), r7 = t10.transformPosition(n8.index + n8.length);
  return {
    index: e17,
    length: r7 - e17
  };
}
var Ko = class extends Tt2 {
  constructor(t10, e17) {
    super(t10, e17), t10.root.addEventListener("drop", (r7) => {
      var l5;
      r7.preventDefault();
      let s13 = null;
      if (document.caretRangeFromPoint)
        s13 = document.caretRangeFromPoint(r7.clientX, r7.clientY);
      else if (document.caretPositionFromPoint) {
        const a6 = document.caretPositionFromPoint(r7.clientX, r7.clientY);
        s13 = document.createRange(), s13.setStart(a6.offsetNode, a6.offset), s13.setEnd(a6.offsetNode, a6.offset);
      }
      const i4 = s13 && t10.selection.normalizeNative(s13);
      if (i4) {
        const a6 = t10.selection.normalizedToRange(i4);
        (l5 = r7.dataTransfer) != null && l5.files && this.upload(a6, r7.dataTransfer.files);
      }
    });
  }
  upload(t10, e17) {
    const r7 = [];
    Array.from(e17).forEach((s13) => {
      var i4;
      s13 && ((i4 = this.options.mimetypes) != null && i4.includes(s13.type)) && r7.push(s13);
    }), r7.length > 0 && this.options.handler.call(this, t10, r7);
  }
};
Ko.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n8, t10) {
    if (!this.quill.scroll.query("image"))
      return;
    const e17 = t10.map((r7) => new Promise((s13) => {
      const i4 = new FileReader();
      i4.onload = () => {
        s13(i4.result);
      }, i4.readAsDataURL(r7);
    }));
    Promise.all(e17).then((r7) => {
      const s13 = r7.reduce((i4, l5) => i4.insert({
        image: l5
      }), new O4().retain(n8.index).delete(n8.length));
      this.quill.updateContents(s13, S6.sources.USER), this.quill.setSelection(n8.index + r7.length, S6.sources.SILENT);
    });
  }
};
var eg = ["insertText", "insertReplacementText"];
var ng = class extends Tt2 {
  constructor(t10, e17) {
    super(t10, e17), t10.root.addEventListener("beforeinput", (r7) => {
      this.handleBeforeInput(r7);
    }), /Android/i.test(navigator.userAgent) || t10.on(N3.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t10) {
    Mi({
      range: t10,
      quill: this.quill
    });
  }
  replaceText(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t10.length === 0) return false;
    if (e17) {
      const r7 = this.quill.getFormat(t10.index, 1);
      this.deleteRange(t10), this.quill.updateContents(new O4().retain(t10.index).insert(e17, r7), N3.sources.USER);
    } else
      this.deleteRange(t10);
    return this.quill.setSelection(t10.index + e17.length, 0, N3.sources.SILENT), true;
  }
  handleBeforeInput(t10) {
    if (this.quill.composition.isComposing || t10.defaultPrevented || !eg.includes(t10.inputType))
      return;
    const e17 = t10.getTargetRanges ? t10.getTargetRanges()[0] : null;
    if (!e17 || e17.collapsed === true)
      return;
    const r7 = rg(t10);
    if (r7 == null)
      return;
    const s13 = this.quill.selection.normalizeNative(e17), i4 = s13 ? this.quill.selection.normalizedToRange(s13) : null;
    i4 && this.replaceText(i4, r7) && t10.preventDefault();
  }
  handleCompositionStart() {
    const t10 = this.quill.getSelection();
    t10 && this.replaceText(t10);
  }
};
function rg(n8) {
  var t10;
  return typeof n8.data == "string" ? n8.data : (t10 = n8.dataTransfer) != null && t10.types.includes("text/plain") ? n8.dataTransfer.getData("text/plain") : null;
}
var sg = /Mac/i.test(navigator.platform);
var ig = 100;
var lg = (n8) => !!(n8.key === "ArrowLeft" || n8.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n8.key === "ArrowUp" || n8.key === "ArrowDown" || n8.key === "Home" || sg && n8.key === "a" && n8.ctrlKey === true);
var og = class extends Tt2 {
  constructor(e17, r7) {
    super(e17, r7);
    x8(this, "isListening", false);
    x8(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e17, r7) {
        let {
          line: s13,
          event: i4
        } = r7;
        if (!(s13 instanceof Et2) || !s13.uiNode)
          return true;
        const l5 = getComputedStyle(s13.domNode).direction === "rtl";
        return l5 && i4.key !== "ArrowRight" || !l5 && i4.key !== "ArrowLeft" ? true : (this.quill.setSelection(e17.index - 1, e17.length + (i4.shiftKey ? 1 : 0), N3.sources.USER), false);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e17) => {
      !e17.defaultPrevented && lg(e17) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + ig, this.isListening) return;
    this.isListening = true;
    const e17 = () => {
      this.isListening = false, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e17, {
      once: true
    });
  }
  handleSelectionChange() {
    const e17 = document.getSelection();
    if (!e17) return;
    const r7 = e17.getRangeAt(0);
    if (r7.collapsed !== true || r7.startOffset !== 0) return;
    const s13 = this.quill.scroll.find(r7.startContainer);
    if (!(s13 instanceof Et2) || !s13.uiNode) return;
    const i4 = document.createRange();
    i4.setStartAfter(s13.uiNode), i4.setEndAfter(s13.uiNode), e17.removeAllRanges(), e17.addRange(i4);
  }
};
N3.register({
  "blots/block": W2,
  "blots/block/embed": ut2,
  "blots/break": wt,
  "blots/container": ye,
  "blots/cursor": He,
  "blots/embed": qi,
  "blots/inline": Rt2,
  "blots/scroll": $e,
  "blots/text": At2,
  "modules/clipboard": Ho,
  "modules/history": Go,
  "modules/keyboard": Rr,
  "modules/uploader": Ko,
  "modules/input": ng,
  "modules/uiNode": og
});
var ag = class extends Nt {
  add(t10, e17) {
    let r7 = 0;
    if (e17 === "+1" || e17 === "-1") {
      const s13 = this.value(t10) || 0;
      r7 = e17 === "+1" ? s13 + 1 : s13 - 1;
    } else typeof e17 == "number" && (r7 = e17);
    return r7 === 0 ? (this.remove(t10), true) : super.add(t10, r7.toString());
  }
  canAdd(t10, e17) {
    return super.canAdd(t10, e17) || super.canAdd(t10, parseInt(e17, 10));
  }
  value(t10) {
    return parseInt(super.value(t10), 10) || void 0;
  }
};
var cg = new ag("indent", "ql-indent", {
  scope: q5.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
var oi = class extends W2 {
};
x8(oi, "blotName", "blockquote"), x8(oi, "tagName", "blockquote");
var ai = class extends W2 {
  static formats(t10) {
    return this.tagName.indexOf(t10.tagName) + 1;
  }
};
x8(ai, "blotName", "header"), x8(ai, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
var In = class extends ye {
};
In.blotName = "list-container";
In.tagName = "OL";
var Rn = class extends W2 {
  static create(t10) {
    const e17 = super.create();
    return e17.setAttribute("data-list", t10), e17;
  }
  static formats(t10) {
    return t10.getAttribute("data-list") || void 0;
  }
  static register() {
    N3.register(In);
  }
  constructor(t10, e17) {
    super(t10, e17);
    const r7 = e17.ownerDocument.createElement("span"), s13 = (i4) => {
      if (!t10.isEnabled()) return;
      const l5 = this.statics.formats(e17, t10);
      l5 === "checked" ? (this.format("list", "unchecked"), i4.preventDefault()) : l5 === "unchecked" && (this.format("list", "checked"), i4.preventDefault());
    };
    r7.addEventListener("mousedown", s13), r7.addEventListener("touchstart", s13), this.attachUI(r7);
  }
  format(t10, e17) {
    t10 === this.statics.blotName && e17 ? this.domNode.setAttribute("data-list", e17) : super.format(t10, e17);
  }
};
Rn.blotName = "list";
Rn.tagName = "LI";
In.allowedChildren = [Rn];
Rn.requiredContainer = In;
var Ln = class extends Rt2 {
  static create() {
    return super.create();
  }
  static formats() {
    return true;
  }
  optimize(t10) {
    super.optimize(t10), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
};
x8(Ln, "blotName", "bold"), x8(Ln, "tagName", ["STRONG", "B"]);
var ci = class extends Ln {
};
x8(ci, "blotName", "italic"), x8(ci, "tagName", ["EM", "I"]);
var Qt2 = class extends Rt2 {
  static create(t10) {
    const e17 = super.create(t10);
    return e17.setAttribute("href", this.sanitize(t10)), e17.setAttribute("rel", "noopener noreferrer"), e17.setAttribute("target", "_blank"), e17;
  }
  static formats(t10) {
    return t10.getAttribute("href");
  }
  static sanitize(t10) {
    return Vo(t10, this.PROTOCOL_WHITELIST) ? t10 : this.SANITIZED_URL;
  }
  format(t10, e17) {
    t10 !== this.statics.blotName || !e17 ? super.format(t10, e17) : this.domNode.setAttribute("href", this.constructor.sanitize(e17));
  }
};
x8(Qt2, "blotName", "link"), x8(Qt2, "tagName", "A"), x8(Qt2, "SANITIZED_URL", "about:blank"), x8(Qt2, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Vo(n8, t10) {
  const e17 = document.createElement("a");
  e17.href = n8;
  const r7 = e17.href.slice(0, e17.href.indexOf(":"));
  return t10.indexOf(r7) > -1;
}
var ui = class extends Rt2 {
  static create(t10) {
    return t10 === "super" ? document.createElement("sup") : t10 === "sub" ? document.createElement("sub") : super.create(t10);
  }
  static formats(t10) {
    if (t10.tagName === "SUB") return "sub";
    if (t10.tagName === "SUP") return "super";
  }
};
x8(ui, "blotName", "script"), x8(ui, "tagName", ["SUB", "SUP"]);
var hi = class extends Ln {
};
x8(hi, "blotName", "strike"), x8(hi, "tagName", ["S", "STRIKE"]);
var fi = class extends Rt2 {
};
x8(fi, "blotName", "underline"), x8(fi, "tagName", "U");
var mr = class extends qi {
  static create(t10) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e17 = super.create(t10);
    return typeof t10 == "string" && (window.katex.render(t10, e17, {
      throwOnError: false,
      errorColor: "#f00"
    }), e17.setAttribute("data-value", t10)), e17;
  }
  static value(t10) {
    return t10.getAttribute("data-value");
  }
  html() {
    const {
      formula: t10
    } = this.value();
    return `<span>${t10}</span>`;
  }
};
x8(mr, "blotName", "formula"), x8(mr, "className", "ql-formula"), x8(mr, "tagName", "SPAN");
var Bl = ["alt", "height", "width"];
var di = class extends it2 {
  static create(t10) {
    const e17 = super.create(t10);
    return typeof t10 == "string" && e17.setAttribute("src", this.sanitize(t10)), e17;
  }
  static formats(t10) {
    return Bl.reduce((e17, r7) => (t10.hasAttribute(r7) && (e17[r7] = t10.getAttribute(r7)), e17), {});
  }
  static match(t10) {
    return /\.(jpe?g|gif|png)$/.test(t10) || /^data:image\/.+;base64/.test(t10);
  }
  static sanitize(t10) {
    return Vo(t10, ["http", "https", "data"]) ? t10 : "//:0";
  }
  static value(t10) {
    return t10.getAttribute("src");
  }
  format(t10, e17) {
    Bl.indexOf(t10) > -1 ? e17 ? this.domNode.setAttribute(t10, e17) : this.domNode.removeAttribute(t10) : super.format(t10, e17);
  }
};
x8(di, "blotName", "image"), x8(di, "tagName", "IMG");
var Ml = ["height", "width"];
var br = class extends ut2 {
  static create(t10) {
    const e17 = super.create(t10);
    return e17.setAttribute("frameborder", "0"), e17.setAttribute("allowfullscreen", "true"), e17.setAttribute("src", this.sanitize(t10)), e17;
  }
  static formats(t10) {
    return Ml.reduce((e17, r7) => (t10.hasAttribute(r7) && (e17[r7] = t10.getAttribute(r7)), e17), {});
  }
  static sanitize(t10) {
    return Qt2.sanitize(t10);
  }
  static value(t10) {
    return t10.getAttribute("src");
  }
  format(t10, e17) {
    Ml.indexOf(t10) > -1 ? e17 ? this.domNode.setAttribute(t10, e17) : this.domNode.removeAttribute(t10) : super.format(t10, e17);
  }
  html() {
    const {
      video: t10
    } = this.value();
    return `<a href="${t10}">${t10}</a>`;
  }
};
x8(br, "blotName", "video"), x8(br, "className", "ql-video"), x8(br, "tagName", "IFRAME");
var pn = new Nt("code-token", "hljs", {
  scope: q5.INLINE
});
var Ft = class _Ft extends Rt2 {
  static formats(t10, e17) {
    for (; t10 != null && t10 !== e17.domNode; ) {
      if (t10.classList && t10.classList.contains(J2.className))
        return super.formats(t10, e17);
      t10 = t10.parentNode;
    }
  }
  constructor(t10, e17, r7) {
    super(t10, e17, r7), pn.add(this.domNode, r7);
  }
  format(t10, e17) {
    t10 !== _Ft.blotName ? super.format(t10, e17) : e17 ? pn.add(this.domNode, e17) : (pn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), pn.value(this.domNode) || this.unwrap();
  }
};
Ft.blotName = "code-token";
Ft.className = "ql-token";
var ct2 = class extends J2 {
  static create(t10) {
    const e17 = super.create(t10);
    return typeof t10 == "string" && e17.setAttribute("data-language", t10), e17;
  }
  static formats(t10) {
    return t10.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t10, e17) {
    t10 === this.statics.blotName && e17 ? this.domNode.setAttribute("data-language", e17) : super.format(t10, e17);
  }
  replaceWith(t10, e17) {
    return this.formatAt(0, this.length(), Ft.blotName, false), super.replaceWith(t10, e17);
  }
};
var bn = class extends ve {
  attach() {
    super.attach(), this.forceNext = false, this.scroll.emitMount(this);
  }
  format(t10, e17) {
    t10 === ct2.blotName && (this.forceNext = true, this.children.forEach((r7) => {
      r7.format(t10, e17);
    }));
  }
  formatAt(t10, e17, r7, s13) {
    r7 === ct2.blotName && (this.forceNext = true), super.formatAt(t10, e17, r7, s13);
  }
  highlight(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (this.children.head == null) return;
    const s13 = `${Array.from(this.domNode.childNodes).filter((l5) => l5 !== this.uiNode).map((l5) => l5.textContent).join(`
`)}
`, i4 = ct2.formats(this.children.head.domNode);
    if (e17 || this.forceNext || this.cachedText !== s13) {
      if (s13.trim().length > 0 || this.cachedText == null) {
        const l5 = this.children.reduce((c12, h8) => c12.concat(Oo(h8, false)), new O4()), a6 = t10(s13, i4);
        l5.diff(a6).reduce((c12, h8) => {
          let {
            retain: d9,
            attributes: m6
          } = h8;
          return d9 ? (m6 && Object.keys(m6).forEach((g10) => {
            [ct2.blotName, Ft.blotName].includes(g10) && this.formatAt(c12, d9, g10, m6[g10]);
          }), c12 + d9) : c12;
        }, 0);
      }
      this.cachedText = s13, this.forceNext = false;
    }
  }
  html(t10, e17) {
    const [r7] = this.children.find(t10);
    return `<pre data-language="${r7 ? ct2.formats(r7.domNode) : "plain"}">
${Ir(this.code(t10, e17))}
</pre>`;
  }
  optimize(t10) {
    if (super.optimize(t10), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e17 = ct2.formats(this.children.head.domNode);
      e17 !== this.uiNode.value && (this.uiNode.value = e17);
    }
  }
};
bn.allowedChildren = [ct2];
ct2.requiredContainer = bn;
ct2.allowedChildren = [Ft, He, At2, wt];
var ug = (n8, t10, e17) => {
  if (typeof n8.versionString == "string") {
    const r7 = n8.versionString.split(".")[0];
    if (parseInt(r7, 10) >= 11)
      return n8.highlight(e17, {
        language: t10
      }).value;
  }
  return n8.highlight(t10, e17).value;
};
var Wo = class extends Tt2 {
  static register() {
    N3.register(Ft, true), N3.register(ct2, true), N3.register(bn, true);
  }
  constructor(t10, e17) {
    if (super(t10, e17), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r7, s13) => {
      let {
        key: i4
      } = s13;
      return r7[i4] = true, r7;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(N3.events.SCROLL_BLOT_MOUNT, (t10) => {
      if (!(t10 instanceof bn)) return;
      const e17 = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r7) => {
        let {
          key: s13,
          label: i4
        } = r7;
        const l5 = e17.ownerDocument.createElement("option");
        l5.textContent = i4, l5.setAttribute("value", s13), e17.appendChild(l5);
      }), e17.addEventListener("change", () => {
        t10.format(ct2.blotName, e17.value), this.quill.root.focus(), this.highlight(t10, true);
      }), t10.uiNode == null && (t10.attachUI(e17), t10.children.head && (e17.value = ct2.formats(t10.children.head.domNode)));
    });
  }
  initTimer() {
    let t10 = null;
    this.quill.on(N3.events.SCROLL_OPTIMIZE, () => {
      t10 && clearTimeout(t10), t10 = setTimeout(() => {
        this.highlight(), t10 = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (this.quill.selection.composing) return;
    this.quill.update(N3.sources.USER);
    const r7 = this.quill.getSelection();
    (t10 == null ? this.quill.scroll.descendants(bn) : [t10]).forEach((i4) => {
      i4.highlight(this.highlightBlot, e17);
    }), this.quill.update(N3.sources.SILENT), r7 != null && this.quill.setSelection(r7, N3.sources.SILENT);
  }
  highlightBlot(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e17 = this.languages[e17] ? e17 : "plain", e17 === "plain")
      return Ir(t10).split(`
`).reduce((s13, i4, l5) => (l5 !== 0 && s13.insert(`
`, {
        [J2.blotName]: e17
      }), s13.insert(i4)), new O4());
    const r7 = this.quill.root.ownerDocument.createElement("div");
    return r7.classList.add(J2.className), r7.innerHTML = ug(this.options.hljs, e17, t10), $i(this.quill.scroll, r7, [(s13, i4) => {
      const l5 = pn.value(s13);
      return l5 ? i4.compose(new O4().retain(i4.length(), {
        [Ft.blotName]: l5
      })) : i4;
    }], [(s13, i4) => s13.data.split(`
`).reduce((l5, a6, c12) => (c12 !== 0 && l5.insert(`
`, {
      [J2.blotName]: e17
    }), l5.insert(a6)), i4)], /* @__PURE__ */ new WeakMap());
  }
};
Wo.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
var vn = class vn2 extends W2 {
  static create(t10) {
    const e17 = super.create();
    return t10 ? e17.setAttribute("data-row", t10) : e17.setAttribute("data-row", Di()), e17;
  }
  static formats(t10) {
    if (t10.hasAttribute("data-row"))
      return t10.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t10, e17) {
    t10 === vn2.blotName && e17 ? this.domNode.setAttribute("data-row", e17) : super.format(t10, e17);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
x8(vn, "blotName", "table"), x8(vn, "tagName", "TD");
var vt2 = vn;
var Ht2 = class extends ye {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t10 = this.children.head.formats(), e17 = this.children.tail.formats(), r7 = this.next.children.head.formats(), s13 = this.next.children.tail.formats();
      return t10.table === e17.table && t10.table === r7.table && t10.table === s13.table;
    }
    return false;
  }
  optimize(t10) {
    super.optimize(t10), this.children.forEach((e17) => {
      if (e17.next == null) return;
      const r7 = e17.formats(), s13 = e17.next.formats();
      if (r7.table !== s13.table) {
        const i4 = this.splitAfter(e17);
        i4 && i4.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
};
x8(Ht2, "blotName", "table-row"), x8(Ht2, "tagName", "TR");
var Ct2 = class extends ye {
};
x8(Ct2, "blotName", "table-body"), x8(Ct2, "tagName", "TBODY");
var Ge = class extends ye {
  balanceCells() {
    const t10 = this.descendants(Ht2), e17 = t10.reduce((r7, s13) => Math.max(s13.children.length, r7), 0);
    t10.forEach((r7) => {
      new Array(e17 - r7.children.length).fill(0).forEach(() => {
        let s13;
        r7.children.head != null && (s13 = vt2.formats(r7.children.head.domNode));
        const i4 = this.scroll.create(vt2.blotName, s13);
        r7.appendChild(i4), i4.optimize();
      });
    });
  }
  cells(t10) {
    return this.rows().map((e17) => e17.children.at(t10));
  }
  deleteColumn(t10) {
    const [e17] = this.descendant(Ct2);
    e17 == null || e17.children.head == null || e17.children.forEach((r7) => {
      const s13 = r7.children.at(t10);
      s13 != null && s13.remove();
    });
  }
  insertColumn(t10) {
    const [e17] = this.descendant(Ct2);
    e17 == null || e17.children.head == null || e17.children.forEach((r7) => {
      const s13 = r7.children.at(t10), i4 = vt2.formats(r7.children.head.domNode), l5 = this.scroll.create(vt2.blotName, i4);
      r7.insertBefore(l5, s13);
    });
  }
  insertRow(t10) {
    const [e17] = this.descendant(Ct2);
    if (e17 == null || e17.children.head == null) return;
    const r7 = Di(), s13 = this.scroll.create(Ht2.blotName);
    e17.children.head.children.forEach(() => {
      const l5 = this.scroll.create(vt2.blotName, r7);
      s13.appendChild(l5);
    });
    const i4 = e17.children.at(t10);
    e17.insertBefore(s13, i4);
  }
  rows() {
    const t10 = this.children.head;
    return t10 == null ? [] : t10.children.map((e17) => e17);
  }
};
x8(Ge, "blotName", "table-container"), x8(Ge, "tagName", "TABLE");
Ge.allowedChildren = [Ct2];
Ct2.requiredContainer = Ge;
Ct2.allowedChildren = [Ht2];
Ht2.requiredContainer = Ct2;
Ht2.allowedChildren = [vt2];
vt2.requiredContainer = Ht2;
function Di() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
var hg = class extends Tt2 {
  static register() {
    N3.register(vt2), N3.register(Ht2), N3.register(Ct2), N3.register(Ge);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ge).forEach((t10) => {
      t10.balanceCells();
    });
  }
  deleteColumn() {
    const [t10, , e17] = this.getTable();
    e17 != null && (t10.deleteColumn(e17.cellOffset()), this.quill.update(N3.sources.USER));
  }
  deleteRow() {
    const [, t10] = this.getTable();
    t10 != null && (t10.remove(), this.quill.update(N3.sources.USER));
  }
  deleteTable() {
    const [t10] = this.getTable();
    if (t10 == null) return;
    const e17 = t10.offset();
    t10.remove(), this.quill.update(N3.sources.USER), this.quill.setSelection(e17, N3.sources.SILENT);
  }
  getTable() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t10 == null) return [null, null, null, -1];
    const [e17, r7] = this.quill.getLine(t10.index);
    if (e17 == null || e17.statics.blotName !== vt2.blotName)
      return [null, null, null, -1];
    const s13 = e17.parent;
    return [s13.parent.parent, s13, e17, r7];
  }
  insertColumn(t10) {
    const e17 = this.quill.getSelection();
    if (!e17) return;
    const [r7, s13, i4] = this.getTable(e17);
    if (i4 == null) return;
    const l5 = i4.cellOffset();
    r7.insertColumn(l5 + t10), this.quill.update(N3.sources.USER);
    let a6 = s13.rowOffset();
    t10 === 0 && (a6 += 1), this.quill.setSelection(e17.index + a6, e17.length, N3.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t10) {
    const e17 = this.quill.getSelection();
    if (!e17) return;
    const [r7, s13, i4] = this.getTable(e17);
    if (i4 == null) return;
    const l5 = s13.rowOffset();
    r7.insertRow(l5 + t10), this.quill.update(N3.sources.USER), t10 > 0 ? this.quill.setSelection(e17, N3.sources.SILENT) : this.quill.setSelection(e17.index + s13.children.length, e17.length, N3.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t10, e17) {
    const r7 = this.quill.getSelection();
    if (r7 == null) return;
    const s13 = new Array(t10).fill(0).reduce((i4) => {
      const l5 = new Array(e17).fill(`
`).join("");
      return i4.insert(l5, {
        table: Di()
      });
    }, new O4().retain(r7.index));
    this.quill.updateContents(s13, N3.sources.USER), this.quill.setSelection(r7.index, N3.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(N3.events.SCROLL_OPTIMIZE, (t10) => {
      t10.some((e17) => ["TD", "TR", "TBODY", "TABLE"].includes(e17.target.tagName) ? (this.quill.once(N3.events.TEXT_CHANGE, (r7, s13, i4) => {
        i4 === N3.sources.USER && this.balanceTables();
      }), true) : false);
    });
  }
};
var $l = Gt2("quill:toolbar");
var ji = class extends Tt2 {
  constructor(t10, e17) {
    var r7, s13;
    if (super(t10, e17), Array.isArray(this.options.container)) {
      const i4 = document.createElement("div");
      i4.setAttribute("role", "toolbar"), fg(i4, this.options.container), (s13 = (r7 = t10.container) == null ? void 0 : r7.parentNode) == null || s13.insertBefore(i4, t10.container), this.container = i4;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      $l.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i4) => {
      var a6;
      const l5 = (a6 = this.options.handlers) == null ? void 0 : a6[i4];
      l5 && this.addHandler(i4, l5);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i4) => {
      this.attach(i4);
    }), this.quill.on(N3.events.EDITOR_CHANGE, () => {
      const [i4] = this.quill.selection.getRange();
      this.update(i4);
    });
  }
  addHandler(t10, e17) {
    this.handlers[t10] = e17;
  }
  attach(t10) {
    let e17 = Array.from(t10.classList).find((s13) => s13.indexOf("ql-") === 0);
    if (!e17) return;
    if (e17 = e17.slice(3), t10.tagName === "BUTTON" && t10.setAttribute("type", "button"), this.handlers[e17] == null && this.quill.scroll.query(e17) == null) {
      $l.warn("ignoring attaching to nonexistent format", e17, t10);
      return;
    }
    const r7 = t10.tagName === "SELECT" ? "change" : "click";
    t10.addEventListener(r7, (s13) => {
      let i4;
      if (t10.tagName === "SELECT") {
        if (t10.selectedIndex < 0) return;
        const a6 = t10.options[t10.selectedIndex];
        a6.hasAttribute("selected") ? i4 = false : i4 = a6.value || false;
      } else
        t10.classList.contains("ql-active") ? i4 = false : i4 = t10.value || !t10.hasAttribute("value"), s13.preventDefault();
      this.quill.focus();
      const [l5] = this.quill.selection.getRange();
      if (this.handlers[e17] != null)
        this.handlers[e17].call(this, i4);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e17).prototype instanceof it2
      ) {
        if (i4 = prompt(`Enter ${e17}`), !i4) return;
        this.quill.updateContents(new O4().retain(l5.index).delete(l5.length).insert({
          [e17]: i4
        }), N3.sources.USER);
      } else
        this.quill.format(e17, i4, N3.sources.USER);
      this.update(l5);
    }), this.controls.push([e17, t10]);
  }
  update(t10) {
    const e17 = t10 == null ? {} : this.quill.getFormat(t10);
    this.controls.forEach((r7) => {
      const [s13, i4] = r7;
      if (i4.tagName === "SELECT") {
        let l5 = null;
        if (t10 == null)
          l5 = null;
        else if (e17[s13] == null)
          l5 = i4.querySelector("option[selected]");
        else if (!Array.isArray(e17[s13])) {
          let a6 = e17[s13];
          typeof a6 == "string" && (a6 = a6.replace(/"/g, '\\"')), l5 = i4.querySelector(`option[value="${a6}"]`);
        }
        l5 == null ? (i4.value = "", i4.selectedIndex = -1) : l5.selected = true;
      } else if (t10 == null)
        i4.classList.remove("ql-active"), i4.setAttribute("aria-pressed", "false");
      else if (i4.hasAttribute("value")) {
        const l5 = e17[s13], a6 = l5 === i4.getAttribute("value") || l5 != null && l5.toString() === i4.getAttribute("value") || l5 == null && !i4.getAttribute("value");
        i4.classList.toggle("ql-active", a6), i4.setAttribute("aria-pressed", a6.toString());
      } else {
        const l5 = e17[s13] != null;
        i4.classList.toggle("ql-active", l5), i4.setAttribute("aria-pressed", l5.toString());
      }
    });
  }
};
ji.DEFAULTS = {};
function Dl(n8, t10, e17) {
  const r7 = document.createElement("button");
  r7.setAttribute("type", "button"), r7.classList.add(`ql-${t10}`), r7.setAttribute("aria-pressed", "false"), e17 != null ? (r7.value = e17, r7.setAttribute("aria-label", `${t10}: ${e17}`)) : r7.setAttribute("aria-label", t10), n8.appendChild(r7);
}
function fg(n8, t10) {
  Array.isArray(t10[0]) || (t10 = [t10]), t10.forEach((e17) => {
    const r7 = document.createElement("span");
    r7.classList.add("ql-formats"), e17.forEach((s13) => {
      if (typeof s13 == "string")
        Dl(r7, s13);
      else {
        const i4 = Object.keys(s13)[0], l5 = s13[i4];
        Array.isArray(l5) ? dg(r7, i4, l5) : Dl(r7, i4, l5);
      }
    }), n8.appendChild(r7);
  });
}
function dg(n8, t10, e17) {
  const r7 = document.createElement("select");
  r7.classList.add(`ql-${t10}`), e17.forEach((s13) => {
    const i4 = document.createElement("option");
    s13 !== false ? i4.setAttribute("value", String(s13)) : i4.setAttribute("selected", "selected"), r7.appendChild(i4);
  }), n8.appendChild(r7);
}
ji.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n8 = this.quill.getSelection();
      if (n8 != null)
        if (n8.length === 0) {
          const t10 = this.quill.getFormat();
          Object.keys(t10).forEach((e17) => {
            this.quill.scroll.query(e17, q5.INLINE) != null && this.quill.format(e17, false, N3.sources.USER);
          });
        } else
          this.quill.removeFormat(n8.index, n8.length, N3.sources.USER);
    },
    direction(n8) {
      const {
        align: t10
      } = this.quill.getFormat();
      n8 === "rtl" && t10 == null ? this.quill.format("align", "right", N3.sources.USER) : !n8 && t10 === "right" && this.quill.format("align", false, N3.sources.USER), this.quill.format("direction", n8, N3.sources.USER);
    },
    indent(n8) {
      const t10 = this.quill.getSelection(), e17 = this.quill.getFormat(t10), r7 = parseInt(e17.indent || 0, 10);
      if (n8 === "+1" || n8 === "-1") {
        let s13 = n8 === "+1" ? 1 : -1;
        e17.direction === "rtl" && (s13 *= -1), this.quill.format("indent", r7 + s13, N3.sources.USER);
      }
    },
    link(n8) {
      n8 === true && (n8 = prompt("Enter link URL:")), this.quill.format("link", n8, N3.sources.USER);
    },
    list(n8) {
      const t10 = this.quill.getSelection(), e17 = this.quill.getFormat(t10);
      n8 === "check" ? e17.list === "checked" || e17.list === "unchecked" ? this.quill.format("list", false, N3.sources.USER) : this.quill.format("list", "unchecked", N3.sources.USER) : this.quill.format("list", n8, N3.sources.USER);
    }
  }
};
var gg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>';
var pg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>';
var mg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>';
var bg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>';
var yg = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>';
var vg = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>';
var Eg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>';
var Ag = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>';
var jl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>';
var Ng = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>';
var wg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>';
var Tg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>';
var xg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>';
var Lg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>';
var Sg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>';
var _g = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>';
var Og = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>';
var qg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>';
var Cg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>';
var Ig = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>';
var Rg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>';
var kg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>';
var Bg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>';
var Mg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>';
var $g = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>';
var Dg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>';
var jg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>';
var Pg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>';
var Ug = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>';
var Fg = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>';
var Hg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>';
var zg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>';
var Gg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>';
var Sn = {
  align: {
    "": gg,
    center: pg,
    right: mg,
    justify: bg
  },
  background: yg,
  blockquote: vg,
  bold: Eg,
  clean: Ag,
  code: jl,
  "code-block": jl,
  color: Ng,
  direction: {
    "": wg,
    rtl: Tg
  },
  formula: xg,
  header: {
    1: Lg,
    2: Sg,
    3: _g,
    4: Og,
    5: qg,
    6: Cg
  },
  italic: Ig,
  image: Rg,
  indent: {
    "+1": kg,
    "-1": Bg
  },
  link: Mg,
  list: {
    bullet: $g,
    check: Dg,
    ordered: jg
  },
  script: {
    sub: Pg,
    super: Ug
  },
  strike: Fg,
  table: Hg,
  underline: zg,
  video: Gg
};
var Kg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
var Pl = 0;
function Ul(n8, t10) {
  n8.setAttribute(t10, `${n8.getAttribute(t10) !== "true"}`);
}
var kr = class {
  constructor(t10) {
    this.select = t10, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e17) => {
      switch (e17.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e17.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), Ul(this.label, "aria-expanded"), Ul(this.options, "aria-hidden");
  }
  buildItem(t10) {
    const e17 = document.createElement("span");
    e17.tabIndex = "0", e17.setAttribute("role", "button"), e17.classList.add("ql-picker-item");
    const r7 = t10.getAttribute("value");
    return r7 && e17.setAttribute("data-value", r7), t10.textContent && e17.setAttribute("data-label", t10.textContent), e17.addEventListener("click", () => {
      this.selectItem(e17, true);
    }), e17.addEventListener("keydown", (s13) => {
      switch (s13.key) {
        case "Enter":
          this.selectItem(e17, true), s13.preventDefault();
          break;
        case "Escape":
          this.escape(), s13.preventDefault();
          break;
      }
    }), e17;
  }
  buildLabel() {
    const t10 = document.createElement("span");
    return t10.classList.add("ql-picker-label"), t10.innerHTML = Kg, t10.tabIndex = "0", t10.setAttribute("role", "button"), t10.setAttribute("aria-expanded", "false"), this.container.appendChild(t10), t10;
  }
  buildOptions() {
    const t10 = document.createElement("span");
    t10.classList.add("ql-picker-options"), t10.setAttribute("aria-hidden", "true"), t10.tabIndex = "-1", t10.id = `ql-picker-options-${Pl}`, Pl += 1, this.label.setAttribute("aria-controls", t10.id), this.options = t10, Array.from(this.select.options).forEach((e17) => {
      const r7 = this.buildItem(e17);
      t10.appendChild(r7), e17.selected === true && this.selectItem(r7);
    }), this.container.appendChild(t10);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t10) => {
      this.container.setAttribute(t10.name, t10.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t10) {
    let e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const r7 = this.container.querySelector(".ql-selected");
    t10 !== r7 && (r7 != null && r7.classList.remove("ql-selected"), t10 != null && (t10.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t10.parentNode.children).indexOf(t10), t10.hasAttribute("data-value") ? this.label.setAttribute("data-value", t10.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t10.hasAttribute("data-label") ? this.label.setAttribute("data-label", t10.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e17 && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t10;
    if (this.select.selectedIndex > -1) {
      const r7 = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t10 = this.select.options[this.select.selectedIndex], this.selectItem(r7);
    } else
      this.selectItem(null);
    const e17 = t10 != null && t10 !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e17);
  }
};
var Zo = class extends kr {
  constructor(t10, e17) {
    super(t10), this.label.innerHTML = e17, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r7) => {
      r7.classList.add("ql-primary");
    });
  }
  buildItem(t10) {
    const e17 = super.buildItem(t10);
    return e17.style.backgroundColor = t10.getAttribute("value") || "", e17;
  }
  selectItem(t10, e17) {
    super.selectItem(t10, e17);
    const r7 = this.label.querySelector(".ql-color-label"), s13 = t10 && t10.getAttribute("data-value") || "";
    r7 && (r7.tagName === "line" ? r7.style.stroke = s13 : r7.style.fill = s13);
  }
};
var Xo = class extends kr {
  constructor(t10, e17) {
    super(t10), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r7) => {
      r7.innerHTML = e17[r7.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t10, e17) {
    super.selectItem(t10, e17);
    const r7 = t10 || this.defaultItem;
    if (r7 != null) {
      if (this.label.innerHTML === r7.innerHTML) return;
      this.label.innerHTML = r7.innerHTML;
    }
  }
};
var Vg = (n8) => {
  const {
    overflowY: t10
  } = getComputedStyle(n8, null);
  return t10 !== "visible" && t10 !== "clip";
};
var Yo = class {
  constructor(t10, e17) {
    this.quill = t10, this.boundsContainer = e17 || document.body, this.root = t10.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Vg(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t10) {
    const e17 = t10.left + t10.width / 2 - this.root.offsetWidth / 2, r7 = t10.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e17}px`, this.root.style.top = `${r7}px`, this.root.classList.remove("ql-flip");
    const s13 = this.boundsContainer.getBoundingClientRect(), i4 = this.root.getBoundingClientRect();
    let l5 = 0;
    if (i4.right > s13.right && (l5 = s13.right - i4.right, this.root.style.left = `${e17 + l5}px`), i4.left < s13.left && (l5 = s13.left - i4.left, this.root.style.left = `${e17 + l5}px`), i4.bottom > s13.bottom) {
      const a6 = i4.bottom - i4.top, c12 = t10.bottom - t10.top + a6;
      this.root.style.top = `${r7 - c12}px`, this.root.classList.add("ql-flip");
    }
    return l5;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
};
var Wg = [false, "center", "right", "justify"];
var Zg = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
var Xg = [false, "serif", "monospace"];
var Yg = ["1", "2", "3", false];
var Qg = ["small", false, "large", "huge"];
var kn = class extends ze {
  constructor(t10, e17) {
    super(t10, e17);
    const r7 = (s13) => {
      if (!document.body.contains(t10.root)) {
        document.body.removeEventListener("click", r7);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s13.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i4) => {
        i4.container.contains(s13.target) || i4.close();
      });
    };
    t10.emitter.listenDOM("click", document.body, r7);
  }
  addModule(t10) {
    const e17 = super.addModule(t10);
    return t10 === "toolbar" && this.extendToolbar(e17), e17;
  }
  buildButtons(t10, e17) {
    Array.from(t10).forEach((r7) => {
      (r7.getAttribute("class") || "").split(/\s+/).forEach((i4) => {
        if (i4.startsWith("ql-") && (i4 = i4.slice(3), e17[i4] != null))
          if (i4 === "direction")
            r7.innerHTML = e17[i4][""] + e17[i4].rtl;
          else if (typeof e17[i4] == "string")
            r7.innerHTML = e17[i4];
          else {
            const l5 = r7.value || "";
            l5 != null && e17[i4][l5] && (r7.innerHTML = e17[i4][l5]);
          }
      });
    });
  }
  buildPickers(t10, e17) {
    this.pickers = Array.from(t10).map((s13) => {
      if (s13.classList.contains("ql-align") && (s13.querySelector("option") == null && gn(s13, Wg), typeof e17.align == "object"))
        return new Xo(s13, e17.align);
      if (s13.classList.contains("ql-background") || s13.classList.contains("ql-color")) {
        const i4 = s13.classList.contains("ql-background") ? "background" : "color";
        return s13.querySelector("option") == null && gn(s13, Zg, i4 === "background" ? "#ffffff" : "#000000"), new Zo(s13, e17[i4]);
      }
      return s13.querySelector("option") == null && (s13.classList.contains("ql-font") ? gn(s13, Xg) : s13.classList.contains("ql-header") ? gn(s13, Yg) : s13.classList.contains("ql-size") && gn(s13, Qg)), new kr(s13);
    });
    const r7 = () => {
      this.pickers.forEach((s13) => {
        s13.update();
      });
    };
    this.quill.on(S6.events.EDITOR_CHANGE, r7);
  }
};
kn.DEFAULTS = Jt2({}, ze.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let n8 = this.container.querySelector("input.ql-image[type=file]");
          n8 == null && (n8 = document.createElement("input"), n8.setAttribute("type", "file"), n8.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n8.classList.add("ql-image"), n8.addEventListener("change", () => {
            const t10 = this.quill.getSelection(true);
            this.quill.uploader.upload(t10, n8.files), n8.value = "";
          }), this.container.appendChild(n8)), n8.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
var Qo = class extends Yo {
  constructor(t10, e17) {
    super(t10, e17), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t10) => {
      t10.key === "Enter" ? (this.save(), t10.preventDefault()) : t10.key === "Escape" && (this.cancel(), t10.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e17 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    e17 != null ? this.textbox.value = e17 : t10 !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r7 = this.quill.getBounds(this.quill.selection.savedRange);
    r7 != null && this.position(r7), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t10}`) || ""), this.root.setAttribute("data-mode", t10);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: true
    });
  }
  save() {
    let {
      value: t10
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e17
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t10, S6.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t10, S6.sources.USER)), this.quill.root.scrollTop = e17;
        break;
      }
      case "video":
        t10 = Jg(t10);
      case "formula": {
        if (!t10) break;
        const e17 = this.quill.getSelection(true);
        if (e17 != null) {
          const r7 = e17.index + e17.length;
          this.quill.insertEmbed(
            r7,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t10,
            S6.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r7 + 1, " ", S6.sources.USER), this.quill.setSelection(r7 + 2, S6.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
};
function Jg(n8) {
  let t10 = n8.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n8.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t10 ? `${t10[1] || "https"}://www.youtube.com/embed/${t10[2]}?showinfo=0` : (t10 = n8.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t10[1] || "https"}://player.vimeo.com/video/${t10[2]}/` : n8;
}
function gn(n8, t10) {
  let e17 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  t10.forEach((r7) => {
    const s13 = document.createElement("option");
    r7 === e17 ? s13.setAttribute("selected", "selected") : s13.setAttribute("value", String(r7)), n8.appendChild(s13);
  });
}
var tp = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
var Jo = class extends Qo {
  constructor(t10, e17) {
    super(t10, e17), this.quill.on(S6.events.EDITOR_CHANGE, (r7, s13, i4, l5) => {
      if (r7 === S6.events.SELECTION_CHANGE)
        if (s13 != null && s13.length > 0 && l5 === S6.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a6 = this.quill.getLines(s13.index, s13.length);
          if (a6.length === 1) {
            const c12 = this.quill.getBounds(s13);
            c12 != null && this.position(c12);
          } else {
            const c12 = a6[a6.length - 1], h8 = this.quill.getIndex(c12), d9 = Math.min(c12.length() - 1, s13.index + s13.length - h8), m6 = this.quill.getBounds(new ge2(h8, d9));
            m6 != null && this.position(m6);
          }
        } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(S6.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden")) return;
        const t10 = this.quill.getSelection();
        if (t10 != null) {
          const e17 = this.quill.getBounds(t10);
          e17 != null && this.position(e17);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t10) {
    const e17 = super.position(t10), r7 = this.root.querySelector(".ql-tooltip-arrow");
    return r7.style.marginLeft = "", e17 !== 0 && (r7.style.marginLeft = `${-1 * e17 - r7.offsetWidth / 2}px`), e17;
  }
};
x8(Jo, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
var ta = class extends kn {
  constructor(t10, e17) {
    e17.modules.toolbar != null && e17.modules.toolbar.container == null && (e17.modules.toolbar.container = tp), super(t10, e17), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t10) {
    this.tooltip = new Jo(this.quill, this.options.bounds), t10.container != null && (this.tooltip.root.appendChild(t10.container), this.buildButtons(t10.container.querySelectorAll("button"), Sn), this.buildPickers(t10.container.querySelectorAll("select"), Sn));
  }
};
ta.DEFAULTS = Jt2({}, kn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n8) {
          n8 ? this.quill.theme.tooltip.edit() : this.quill.format("link", false, N3.sources.USER);
        }
      }
    }
  }
});
var ep = [[{
  header: ["1", "2", "3", false]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
var ea = class extends Qo {
  constructor() {
    super(...arguments);
    x8(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e17) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e17.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e17) => {
      if (this.linkRange != null) {
        const r7 = this.linkRange;
        this.restoreFocus(), this.quill.formatText(r7, "link", false, S6.sources.USER), delete this.linkRange;
      }
      e17.preventDefault(), this.hide();
    }), this.quill.on(S6.events.SELECTION_CHANGE, (e17, r7, s13) => {
      if (e17 != null) {
        if (e17.length === 0 && s13 === S6.sources.USER) {
          const [i4, l5] = this.quill.scroll.descendant(Qt2, e17.index);
          if (i4 != null) {
            this.linkRange = new ge2(e17.index - l5, i4.length());
            const a6 = Qt2.formats(i4.domNode);
            this.preview.textContent = a6, this.preview.setAttribute("href", a6), this.show();
            const c12 = this.quill.getBounds(this.linkRange);
            c12 != null && this.position(c12);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
};
x8(ea, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
var na = class extends kn {
  constructor(t10, e17) {
    e17.modules.toolbar != null && e17.modules.toolbar.container == null && (e17.modules.toolbar.container = ep), super(t10, e17), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t10) {
    t10.container != null && (t10.container.classList.add("ql-snow"), this.buildButtons(t10.container.querySelectorAll("button"), Sn), this.buildPickers(t10.container.querySelectorAll("select"), Sn), this.tooltip = new ea(this.quill, this.options.bounds), t10.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: true
    }, (e17, r7) => {
      t10.handlers.link.call(t10, !r7.format.link);
    }));
  }
};
na.DEFAULTS = Jt2({}, kn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n8) {
          if (n8) {
            const t10 = this.quill.getSelection();
            if (t10 == null || t10.length === 0) return;
            let e17 = this.quill.getText(t10);
            /^\S+@\S+\.\S+$/.test(e17) && e17.indexOf("mailto:") !== 0 && (e17 = `mailto:${e17}`);
            const {
              tooltip: r7
            } = this.quill.theme;
            r7.edit("link", e17);
          } else
            this.quill.format("link", false, N3.sources.USER);
        }
      }
    }
  }
});
N3.register({
  "attributors/attribute/direction": Bo,
  "attributors/class/align": Io,
  "attributors/class/background": vd,
  "attributors/class/color": yd,
  "attributors/class/direction": Mo,
  "attributors/class/font": jo,
  "attributors/class/size": Uo,
  "attributors/style/align": Ro,
  "attributors/style/background": Ri,
  "attributors/style/color": Ii,
  "attributors/style/direction": $o,
  "attributors/style/font": Po,
  "attributors/style/size": Fo
}, true);
N3.register({
  "formats/align": Io,
  "formats/direction": Mo,
  "formats/indent": cg,
  "formats/background": Ri,
  "formats/color": Ii,
  "formats/font": jo,
  "formats/size": Uo,
  "formats/blockquote": oi,
  "formats/code-block": J2,
  "formats/header": ai,
  "formats/list": Rn,
  "formats/bold": Ln,
  "formats/code": ki,
  "formats/italic": ci,
  "formats/link": Qt2,
  "formats/script": ui,
  "formats/strike": hi,
  "formats/underline": fi,
  "formats/formula": mr,
  "formats/image": di,
  "formats/video": br,
  "modules/syntax": Wo,
  "modules/table": hg,
  "modules/toolbar": ji,
  "themes/bubble": ta,
  "themes/snow": na,
  "ui/icons": Sn,
  "ui/picker": kr,
  "ui/icon-picker": Xo,
  "ui/color-picker": Zo,
  "ui/tooltip": Yo
}, true);

// node_modules/ultra-ui/styles/helper.js
function a4(s13) {
  let o11 = s13.replace(/^#/, ""), [r7, t10, n8] = [0, 0, 0];
  if (o11.length === 3) {
    const [e17, c12, l5] = [o11[0], o11[1], o11[2]];
    o11 = `${e17}${e17}${c12}${c12}${l5}${l5}`;
  }
  return r7 = parseInt(o11.slice(0, 2), 16), t10 = parseInt(o11.slice(2, 4), 16), n8 = parseInt(o11.slice(4, 6), 16), [r7, t10, n8];
}
function h7(s13, o11, r7) {
  if (r7 > 1) throw new Error("ratio的值在0-1之间");
  const t10 = a4(s13), n8 = a4(o11), e17 = 1 - r7;
  return "#" + t10.map((c12, l5) => {
    const i4 = Math.floor(
      e17 * c12 + n8[l5] * r7
    ).toString(16);
    return i4.length === 1 ? "0" + i4 : i4;
  }).join("");
}

// node_modules/ultra-ui/styles/theme.js
var f5 = reactive({
  color: {
    primary: "#0ea5e9",
    success: "#4caf50",
    warning: "#ffc107",
    danger: "#f44336",
    info: "#009688",
    disabled: "#f5f7fa",
    default: "#f1f5f9"
  },
  bgColor: {
    bottom: "#fdfdfd",
    middle: "#fefefe",
    top: "#ffffff",
    hover: "#f5f7fa",
    black: "#000000"
  },
  border: {
    color: "#dcdfe6",
    width: 1,
    style: "solid"
  },
  textColor: {
    title: "#303133",
    main: "#606266",
    placeholder: "#a8abb2",
    second: "#979797",
    assist: "#c0c4cc",
    disabled: "#a8abb2",
    white: "#fff"
  },
  radius: {
    small: 2,
    default: 4,
    large: 8
  },
  formComponentHeight: {
    small: 24,
    default: 32,
    large: 40
  },
  menuHeight: {
    small: 32,
    default: 40,
    large: 48
  },
  fontFamily: 'Inter, "Roboto", "Segoe UI", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", "PingFang SC", sans-serif',
  fontSizeTitle: {
    small: 16,
    default: 16,
    large: 18
  },
  fontSizeMain: {
    small: 12,
    default: 14,
    large: 16
  },
  fontSizeAssist: {
    small: 12,
    default: 12,
    large: 14
  },
  shadow: {
    color: "#ccc",
    x: 0,
    y: 0,
    blur: 4,
    spread: 0
  },
  tag: {
    small: 20,
    default: 24,
    large: 28
  },
  gap: {
    small: 6,
    default: 8,
    large: 12
  },
  breakpoint: {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920
  }
});
function p3(e17) {
  const o11 = Object.keys(e17), r7 = [1, 3, 5, 7, 9];
  return o11.map((t10) => {
    let a6 = `--color-${t10}`, s13 = e17[t10];
    const m6 = r7.map((n8) => {
      const u5 = `${a6}-light-${n8}: ${h7(
        s13,
        "#fff",
        n8 / 10
      )}`, $12 = `${a6}-dark-${n8}: ${h7(
        s13,
        "#000",
        n8 / 10
      )}`;
      return `${u5};${$12}`;
    }).join(";");
    return `${a6}: ${s13};${m6}`;
  }).join(";");
}
function d4(e17, o11 = [], r7 = "-") {
  return Object.keys(e17).forEach((l5) => {
    const t10 = e17[l5], a6 = `${r7.startsWith("-") ? r7 : kebabCase(r7)}-${kebabCase(l5)}`;
    typeof t10 == "object" ? d4(t10, o11, a6) : o11.push(`${a6}: ${f(t10, "px")}`);
  }), o11.join(";");
}
function y4() {
  const e17 = (o11) => `var(--shadow-${o11})`;
  return `--shadow: ${e17("x")} ${e17("y")} ${e17("blur")} ${e17("spread")} ${e17("color")}`;
}
function x9() {
  const e17 = (o11) => `var(--border-${o11})`;
  return `--border:${e17("width")} ${e17("style")} ${e17("color")}`;
}
function C5() {
  return Object.keys(f5.bgColor).map((o11) => `--bg-color-${o11}-alpha: ${f5.bgColor[o11]}cc`).join(";");
}
function w6() {
  const { color: e17, ...o11 } = f5, r7 = [
    p3(e17),
    d4(o11),
    y4(),
    x9(),
    C5()
  ].join(";"), l5 = "ultra-ui-theme";
  let t10 = document.getElementById(l5);
  t10 ? t10.innerText = `:root { ${r7}; }` : (t10 = document.createElement("style"), t10.id = l5, t10.innerText = `:root { ${r7}; }`, document.head.appendChild(t10));
}
watchEffect(() => {
  w6();
});

// node_modules/ultra-ui/venders/day.vue_vue_type_script_setup_true_lang-G0jXbXjq.js
var F5 = defineComponent({
  name: "DatePickerDayHeader",
  __name: "day",
  setup(x12) {
    const {
      state: r7,
      cls: a6,
      handlePreYear: s13,
      handlePreMonth: c12,
      handleNextYear: d9,
      handleNextMonth: f11
    } = I3("inject");
    return (A11, n8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(a6).e("header"))
      },
      [
        createBaseVNode("div", null, [
          createVNode(unref(k), {
            onClick: unref(s13),
            title: "上一年"
          }, {
            default: withCtx(() => [
              createVNode(unref(d_arrow_left_default))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          createVNode(unref(k), {
            onClick: unref(c12),
            title: "上个月"
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_left_default))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ]),
        createBaseVNode("div", null, [
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(a6).e("header-year")),
              onClick: n8[0] || (n8[0] = (k6) => unref(r7).panel = "year")
            },
            toDisplayString(unref(r7).panelDate.year),
            3
            /* TEXT, CLASS */
          ),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(a6).e("header-month")),
              onClick: n8[1] || (n8[1] = (k6) => unref(r7).panel = "month")
            },
            toDisplayString(unref(r7).panelDate.month) + "月 ",
            3
            /* TEXT, CLASS */
          )
        ]),
        createBaseVNode("div", null, [
          createVNode(unref(k), {
            onClick: unref(f11),
            title: "下个月"
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_right_default))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          createVNode(unref(k), {
            onClick: unref(d9),
            title: "下一年"
          }, {
            default: withCtx(() => [
              createVNode(unref(d_arrow_right_default))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/month.vue_vue_type_script_setup_true_lang--6AJArI2.js
var R3 = defineComponent({
  name: "DatePickerMonthHeader",
  __name: "month",
  setup(u5) {
    const { state: r7, cls: o11, handlePreYear: p5, handleNextYear: l5 } = I3("inject");
    return (D4, i4) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(o11).e("header"))
      },
      [
        createVNode(unref(k), {
          onClick: unref(p5),
          title: "上一年"
        }, {
          default: withCtx(() => [
            createVNode(unref(d_arrow_left_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(o11).e("header-year")),
            onClick: i4[0] || (i4[0] = (x12) => unref(r7).panel = "year")
          },
          toDisplayString(unref(r7).panelDate.year),
          3
          /* TEXT, CLASS */
        ),
        createVNode(unref(k), {
          onClick: unref(l5),
          title: "下一年"
        }, {
          default: withCtx(() => [
            createVNode(unref(d_arrow_right_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/year.vue_vue_type_script_setup_true_lang-ef0AiieN.js
var $9 = defineComponent({
  name: "DatePickerMonthHeader",
  __name: "year",
  setup(v6) {
    const { state: r7, cls: p5, handlePreTenYears: l5, handleNextTenYears: c12 } = I3("inject"), o11 = computed(() => r7.panelDate.year - r7.panelDate.year % 10 + 1), s13 = computed(() => o11.value + 9);
    return (x12, y5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(p5).e("header"))
      },
      [
        createVNode(unref(k), {
          onClick: unref(l5),
          title: "上个十年"
        }, {
          default: withCtx(() => [
            createVNode(unref(d_arrow_left_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        createBaseVNode(
          "span",
          null,
          toDisplayString(o11.value) + " ~ " + toDisplayString(s13.value),
          1
          /* TEXT */
        ),
        createVNode(unref(k), {
          onClick: unref(c12),
          title: "下个十年"
        }, {
          default: withCtx(() => [
            createVNode(unref(d_arrow_right_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/date-picker-panel.vue_vue_type_script_setup_true_lang-DUlDo-TI.js
var P3 = defineComponent({
  name: "DatePickerPanel",
  inheritAttrs: false,
  __name: "date-picker-panel",
  setup(k6) {
    const { state: m6 } = I3("inject");
    return ($12, d9) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        unref(m6).panel === "day" ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createVNode(F5),
            createVNode(A5)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        unref(m6).panel === "year" ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createVNode($9),
            createVNode(T4)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        unref(m6).panel === "month" ? (openBlock(), createElementBlock(
          Fragment,
          { key: 2 },
          [
            createVNode(R3),
            createVNode($7)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/venders/date-picker.vue_vue_type_script_setup_true_lang-Cf-vsmrh.js
var O5 = { key: 1 };
var W3 = defineComponent({
  name: "DatePicker",
  __name: "date-picker",
  props: {
    modelValue: {},
    placeholder: { default: "选择日期" },
    type: { default: "date" },
    format: {},
    valueFormat: {},
    disabledDate: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  },
  emits: ["update:modelValue"],
  setup(f11, { emit: u5 }) {
    const m6 = f11, i4 = u5, a6 = e("date-picker"), { formProps: _10 } = i2(), { size: s13, disabled: b10, readonly: k6 } = g(
      [_10 ?? {}, m6],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), v6 = computed(() => [a6.b, a6.m(s13.value)]), n8 = shallowRef(), { updatePanelDate: y5 } = I3("provide", {
      props: m6,
      emit: i4,
      closeDropdown: () => {
        var o11;
        return (o11 = n8.value) == null ? void 0 : o11.close();
      }
    });
    return (o11, l5) => unref(k6) ? (openBlock(), createElementBlock(
      "span",
      O5,
      toDisplayString(o11.modelValue || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      class: normalizeClass(v6.value),
      trigger: "click",
      "content-class": [unref(a6).e("panel"), unref(a6).em("panel", unref(s13))],
      width: "auto",
      ref_key: "dropdownRef",
      ref: n8,
      "onUpdate:visible": l5[1] || (l5[1] = (d9) => d9 && unref(y5)()),
      disabled: unref(b10)
    }, {
      trigger: withCtx(() => [
        createVNode(unref(Ve), {
          size: unref(s13),
          "native-readonly": "",
          placeholder: o11.placeholder,
          "model-value": o11.modelValue,
          "onUpdate:modelValue": l5[0] || (l5[0] = (d9) => i4("update:modelValue", d9))
        }, {
          suffix: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(a6).e("icon"))
            }, {
              default: withCtx(() => [
                createVNode(unref(calendar_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size", "placeholder", "model-value"])
      ]),
      content: withCtx(() => [
        createVNode(P3)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class", "content-class", "disabled"]));
  }
});

// node_modules/ultra-ui/utils/helper/create-toggle.js
function s8(r7 = false, t10) {
  const e17 = {
    value: r7
  };
  function l5(u5) {
    if (typeof u5 == "boolean")
      return e17.value = u5, t10 == null ? void 0 : t10(e17.value);
    const o11 = u5(e17.value);
    o11 instanceof Promise ? o11.then(l5) : l5(o11);
  }
  return [e17, l5];
}

// node_modules/ultra-ui/compositions/use-transition/use-css-transition.js
function b8(H4) {
  const {
    name: v6,
    target: i4,
    afterEnter: l5,
    afterLeave: f11,
    enterCanceled: u5,
    leaveCanceled: L5,
    keepEnterTo: T6 = false
  } = H4, o11 = () => isRef(i4) ? i4.value : i4, c12 = computed(() => {
    const e17 = typeof v6 == "string" ? v6 : v6.value;
    return {
      /** 进入前的类 */
      enterFrom: `${e17}-enter-from`,
      /** 进入后最终的类 */
      enterTo: `${e17}-enter-to`,
      /** 【进入动画】持续时的类 */
      enterActive: `${e17}-enter-active`,
      /** 离开前的类 */
      leaveFrom: `${e17}-leave-from`,
      /** 离开类 */
      leaveTo: `${e17}-leave-to`,
      /** 【离开动画】持续时的类 */
      leaveActive: `${e17}-leave-active`
    };
  }), P8 = () => {
    const { enterActive: e17, enterTo: s13, enterFrom: a6 } = c12.value, t10 = o11();
    t10 == null || t10.classList.add(a6), t10 == null || t10.classList.add(e17), n5(() => {
      t10 == null || t10.classList.remove(a6), t10 == null || t10.classList.add(s13);
    });
  }, h8 = () => {
    const { leaveTo: e17, leaveActive: s13, leaveFrom: a6, enterTo: t10 } = c12.value, n8 = o11();
    T6 && (n8 == null || n8.classList.remove(t10)), n8 == null || n8.classList.add(a6, s13), n5(() => {
      n8 == null || n8.classList.remove(a6), n8 == null || n8.classList.add(e17);
    });
  }, m6 = (e17) => {
    e17.stopPropagation();
    const { leaveActive: s13, enterActive: a6, enterTo: t10, leaveTo: n8 } = c12.value, r7 = o11();
    A11.value ? (T6 ? r7 == null || r7.classList.remove(a6) : r7 == null || r7.classList.remove(a6, t10), l5 == null || l5()) : (r7 == null || r7.classList.remove(s13, n8), f11 == null || f11());
  }, g10 = (e17) => {
    e17.stopPropagation();
    const s13 = o11();
    if (s13 !== e17.target) return;
    const { leaveActive: a6, enterActive: t10 } = c12.value;
    A11.value ? (s13 == null || s13.classList.remove(t10), u5 == null || u5()) : (s13 == null || s13.classList.remove(a6), L5 == null || L5());
  }, [A11, p5] = s8(false, (e17) => {
    e17 ? P8() : h8();
  }), E11 = (e17) => {
    e17 == null || e17.addEventListener("transitioncancel", g10), e17 == null || e17.addEventListener("transitionend", m6);
  }, $12 = (e17) => {
    e17 == null || e17.removeEventListener("transitioncancel", g10), e17 == null || e17.removeEventListener("transitionend", m6);
  };
  return isRef(i4) ? watch(i4, (e17, s13) => {
    e17 ? E11(e17) : $12(s13);
  }) : i4 && E11(i4), onBeforeUnmount(() => {
    const e17 = o11();
    $12(e17);
  }), {
    toggle: p5,
    enter() {
      p5(true);
    },
    leave() {
      p5(false);
    }
  };
}

// node_modules/ultra-ui/compositions/use-transition/utils.js
function E8(t10, r7) {
  const i4 = (n8, a6) => {
    n8.stopPropagation(), !(n8.target !== t10() || !r7.styleKeys.includes(n8.propertyName)) && a6(n8.target);
  }, o11 = (n8) => {
    t10() && i4(n8, r7.onEnd);
  }, s13 = (n8) => {
    t10() && i4(n8, r7.onCancel);
  }, c12 = (n8) => {
    n8.addEventListener("transitionend", o11, false);
  }, e17 = (n8) => {
    n8 == null || n8.removeEventListener("transitionend", o11), n8 == null || n8.removeEventListener("transitioncancel", s13);
  };
  watch(
    t10,
    (n8, a6) => {
      e17(a6), n8 && c12(n8);
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    e17(t10());
  });
}

// node_modules/ultra-ui/compositions/use-transition/use-style-transition.js
function H3(b10) {
  const {
    // enterFrom,
    // leaveTo,
    enterTo: r7,
    enterActive: i4,
    leaveActive: p5,
    target: c12,
    afterEnter: a6,
    afterLeave: m6,
    enterCanceled: l5,
    leaveCanceled: v6
  } = b10, n8 = () => isRef(c12) ? c12.value : c12, s13 = {}, f11 = (t10) => Object.fromEntries(
    Object.keys(t10).map((e17) => [e17, s13[e17]])
  );
  watch(
    () => n8(),
    (t10) => {
      if (t10) {
        const e17 = t10.attributeStyleMap;
        ~[...Object.keys(r7), ...Object.keys(i4)].forEach((E11) => {
          s13[E11] = e17.get(E11);
        });
      } else
        Object.keys(s13).forEach((e17) => {
          delete s13[e17];
        });
    },
    {
      immediate: true
    }
  );
  const S8 = (t10) => {
    n3(t10, i4);
  }, y5 = (t10) => {
    n3(t10, f11(i4));
  }, j5 = (t10) => {
    n3(t10, p5);
  }, g10 = (t10) => {
    n3(t10, f11(p5));
  }, A11 = (t10) => {
    n3(t10, r7);
  }, T6 = (t10) => {
    n3(t10, f11(r7));
  }, h8 = () => {
    const t10 = n8();
    t10 && (S8(t10), n5(() => {
      A11(t10);
    }));
  }, k6 = () => {
    const t10 = n8();
    t10 && (j5(t10), n5(() => {
      T6(t10);
    }));
  }, [d9, u5] = s8(false, (t10) => {
    t10 ? h8() : k6();
  });
  return E8(n8, {
    styleKeys: Object.keys(r7),
    onCancel(t10) {
      d9.value ? (y5(t10), l5 == null || l5()) : (g10(t10), v6 == null || v6());
    },
    onEnd(t10) {
      d9.value ? (y5(t10), a6 == null || a6()) : (g10(t10), m6 == null || m6());
    }
  }), {
    toggle: u5,
    enter: () => u5(true),
    leave: () => u5(false)
  };
}

// node_modules/ultra-ui/compositions/use-transition/index.js
function o10(i4, r7) {
  return i4 === "css" ? b8(r7) : H3(r7);
}

// node_modules/ultra-ui/components/dialog/use-maximum.js
function z3(a6) {
  const { dialogRef: e17 } = a6, i4 = shallowRef(false), o11 = o10("css", {
    target: e17,
    name: "dialog-maximize",
    keepEnterTo: true,
    afterLeave() {
      e17.value && s2(e17.value, ["height"]);
    }
  });
  return {
    maximized: i4,
    toggleMaximize: (r7) => {
      i4.value = r7;
      const t10 = e17.value;
      t10 && (r7 ? (n3(t10, { height: `${t10.offsetHeight}px` }), o11.enter()) : o11.leave());
    }
  };
}

// node_modules/ultra-ui/venders/dialog.vue_vue_type_script_setup_true_lang-C92bmLjn.js
var Re4 = {
  inheritAttrs: false
};
var Ue2 = defineComponent({
  ...Re4,
  name: "Dialog",
  inheritAttrs: false,
  __name: "dialog",
  props: mergeModels({
    modelValue: { type: Boolean, default: true },
    title: {},
    header: {},
    size: {},
    modal: { type: Boolean, default: true }
  }, {
    modelValue: { type: Boolean, default: false },
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "closed"], ["update:modelValue"]),
  setup(M8, { expose: P8, emit: L5 }) {
    const D4 = M8, U3 = L5, b10 = useSlots(), r7 = e("dialog"), V6 = e.is("background-blur"), Z3 = [r7.e("header"), V6], j5 = [r7.e("footer"), V6], { size: q8 } = l([D4], { size: "default" }), v6 = shallowRef(), a6 = shallowRef(), N4 = shallowRef(), G4 = shallowRef(), H4 = shallowRef(), i4 = useModel(M8, "modelValue");
    function J7() {
      var n8;
      const o11 = (n8 = b10.trigger) == null ? void 0 : n8.call(b10);
      return o11 != null && o11.length ? l2(o11)[0] : null;
    }
    const B7 = o10("style", {
      target: a6,
      enterTo: {
        transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)"
      },
      enterActive: {
        transition: "transform .25s cubic-bezier(0.76, 0, 0.44, 1.35)"
      },
      leaveActive: {
        transition: "transform .25s cubic-bezier(0.76, 0, 0.44, 1.35)"
      }
    }), { toggleMaximize: I4, maximized: k6 } = z3({
      dialogRef: a6,
      cls: r7
    }), O7 = computed(() => [r7.b, r7.m(q8.value)]);
    let x12 = false;
    watch(i4, (o11) => {
      if (!o11) {
        B7.leave(), n5(() => {
          a6.value && n3(a6.value, {
            transform: "scale3d(0.5, 0.5, 1) translate3d(0, 0, 0)"
          });
        });
        return;
      }
      x12 || (x12 = true), s13.x = 0, s13.y = 0, nextTick(() => {
        v6.value && n3(v6.value, { zIndex: o3() }), a6.value && n3(a6.value, {
          transform: "scale3d(0.5, 0.5, 1) translate3d(0, 0, 0)"
        }), n5(() => {
          B7.enter();
        });
      });
    });
    const s13 = {
      x: 0,
      y: 0
    }, S8 = (o11, e17) => {
      const n8 = a6.value;
      n8 && n3(n8, { transform: `translate3d(${o11}px, ${e17}px, 0)` });
    };
    w({
      target: N4,
      onDragStart() {
        A11();
      },
      onDrag(o11, e17) {
        k6.value || S8(s13.x + o11, s13.y + e17);
      },
      onDragEnd(o11, e17) {
        k6.value || (s13.x += o11, s13.y += e17, s13.x % 2 !== 0 && (s13.x += o11 < 0 ? 1 : -1), s13.y % 2 !== 0 && (s13.y += e17 < 0 ? 1 : -1), S8(s13.x, s13.y));
      }
    });
    function A11() {
      D4.modal || n3(v6.value, { zIndex: o3() });
    }
    const y5 = () => {
      i4.value = false;
    };
    return provide(o7, {
      visible: i4
    }), P8({
      close: y5
    }), (o11, e17) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, {
            name: "fade",
            onAfterLeave: e17[9] || (e17[9] = (n8) => U3("closed"))
          }, {
            default: withCtx(() => [
              i4.value || unref(x12) ? withDirectives((openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass([unref(r7).e("overlay"), unref(e).is("modal", o11.modal)]),
                  ref_key: "overlayRef",
                  ref: v6,
                  onMousedown: e17[8] || (e17[8] = (n8) => o11.modal && y5()),
                  onKeyup: withKeys(y5, ["esc"]),
                  tabindex: "0"
                },
                [
                  createBaseVNode(
                    "div",
                    mergeProps(o11.$attrs, {
                      class: O7.value,
                      ref_key: "dialogRef",
                      ref: a6,
                      onMousedown: withModifiers(A11, ["stop"])
                    }),
                    [
                      createBaseVNode(
                        "section",
                        {
                          class: normalizeClass(Z3),
                          ref_key: "headerRef",
                          ref: N4,
                          onTransitionend: e17[4] || (e17[4] = withModifiers(() => {
                          }, ["stop"])),
                          onTransitioncancel: e17[5] || (e17[5] = withModifiers(() => {
                          }, ["stop"]))
                        },
                        [
                          createBaseVNode(
                            "div",
                            {
                              class: normalizeClass(unref(r7).e("title")),
                              onMousedown: e17[0] || (e17[0] = withModifiers(() => {
                              }, ["stop"]))
                            },
                            [
                              renderSlot(o11.$slots, "header", {}, () => [
                                createTextVNode(
                                  toDisplayString(o11.header || o11.title),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ],
                            34
                            /* CLASS, NEED_HYDRATION */
                          ),
                          createBaseVNode(
                            "div",
                            {
                              class: normalizeClass(unref(r7).e("buttons")),
                              onMousedown: e17[3] || (e17[3] = withModifiers(() => {
                              }, ["stop"]))
                            },
                            [
                              unref(k6) ? (openBlock(), createBlock(unref(k), {
                                key: 0,
                                class: normalizeClass(unref(r7).e("btn-recover")),
                                onClick: e17[1] || (e17[1] = (n8) => unref(I4)(false)),
                                title: "还原"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(recover_default))
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["class"])) : (openBlock(), createBlock(unref(k), {
                                key: 1,
                                class: normalizeClass(unref(r7).e("btn-maximize")),
                                onClick: e17[2] || (e17[2] = (n8) => unref(I4)(true)),
                                title: "最大化"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(maximum_default))
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["class"])),
                              createVNode(unref(k), {
                                class: normalizeClass(unref(r7).e("btn-close")),
                                onClick: y5,
                                title: "关闭"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(close_default))
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["class"])
                            ],
                            34
                            /* CLASS, NEED_HYDRATION */
                          )
                        ],
                        544
                        /* NEED_HYDRATION, NEED_PATCH */
                      ),
                      createVNode(unref(fe2), {
                        tag: "section",
                        class: normalizeClass(unref(r7).e("body")),
                        ref_key: "bodyRef",
                        ref: G4,
                        onTransitionend: e17[6] || (e17[6] = withModifiers(() => {
                        }, ["stop"])),
                        onTransitioncancel: e17[7] || (e17[7] = withModifiers(() => {
                        }, ["stop"]))
                      }, {
                        default: withCtx(() => [
                          renderSlot(o11.$slots, "default")
                        ]),
                        _: 3
                        /* FORWARDED */
                      }, 8, ["class"]),
                      o11.$slots.footer ? (openBlock(), createElementBlock(
                        "section",
                        {
                          key: 0,
                          ref_key: "footerRef",
                          ref: H4,
                          class: normalizeClass(j5)
                        },
                        [
                          renderSlot(o11.$slots, "footer")
                        ],
                        512
                        /* NEED_PATCH */
                      )) : createCommentVNode("v-if", true)
                    ],
                    16
                    /* FULL_PROPS */
                  )
                ],
                34
                /* CLASS, NEED_HYDRATION */
              )), [
                [vShow, i4.value]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          })
        ])),
        createCommentVNode(" 触发 "),
        createVNode(unref(d3), {
          onClick: e17[10] || (e17[10] = (n8) => i4.value = !i4.value),
          content: J7(),
          class: normalizeClass(unref(r7).b),
          ref: "triggerRef"
        }, null, 8, ["content", "class"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});

// node_modules/ultra-ui/venders/file-picker.vue_vue_type_script_setup_true_lang-C_dTzpN8.js
var v4 = ["multiple", "accept"];
var P4 = defineComponent({
  name: "FilePicker",
  __name: "file-picker",
  props: {
    tag: { default: "div" },
    accept: {},
    multiple: { type: Boolean, default: false },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    size: {}
  },
  emits: ["pick"],
  setup(n8, { emit: c12 }) {
    const s13 = n8, p5 = c12, t10 = e("file-picker"), i4 = shallowRef(), r7 = (e17) => {
      const l5 = e17.target;
      p5("pick", Array.prototype.slice.call(l5.files)), l5.value = "";
    };
    function f11() {
      var e17;
      s13.disabled || (e17 = i4.value) == null || e17.click();
    }
    return (e17, l5) => (openBlock(), createBlock(resolveDynamicComponent(e17.tag), {
      class: normalizeClass(unref(t10).b),
      onClick: withModifiers(f11, ["stop"])
    }, {
      default: withCtx(() => [
        createBaseVNode("input", {
          multiple: e17.multiple,
          class: normalizeClass(unref(t10).e("native")),
          type: "file",
          accept: e17.accept,
          hidden: "",
          placeholder: "选择文件",
          ref_key: "fileRef",
          ref: i4,
          onChange: r7
        }, null, 42, v4),
        renderSlot(e17.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/venders/float-button.vue_vue_type_script_setup_true_lang-D3fk5GH0.js
var w7 = { key: 1 };
var J3 = defineComponent({
  name: "FloatButton",
  __name: "float-button",
  props: {
    items: {},
    size: {}
  },
  emits: ["click"],
  setup(A11, { emit: v6 }) {
    const k6 = v6, u5 = e("float-button"), p5 = e.is("hovered"), h8 = shallowRef(), n8 = shallowRef(), c12 = shallowRef(false), E11 = () => {
      var t10;
      c12.value = true, (t10 = n8.value) == null || t10.forEach((o11) => {
        n3(o11.el, { display: "flex" });
      }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var o11;
          (o11 = n8.value) == null || o11.forEach((e17) => {
            e17.el.classList.add(p5);
          });
        });
      });
    }, C7 = () => {
      var t10;
      c12.value = false, (t10 = n8.value) == null || t10.forEach((o11) => {
        o11.el.classList.remove(p5);
      });
    }, z5 = (t10, o11) => {
      var e17;
      t10 !== 1 || c12.value || (e17 = n8.value) == null || e17.forEach((r7) => {
        s2(r7.el, ["display"]);
      });
    };
    return (t10, o11) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(unref(u5).b),
          onMouseenter: E11,
          onMouseleave: C7,
          ref_key: "floatButtonRef",
          ref: h8
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(t10.items, (e17, r7) => (openBlock(), createBlock(unref(M), {
              key: e17.key,
              class: normalizeClass([unref(u5).e("item"), unref(e).is("first", r7 === 0)]),
              circle: "",
              size: t10.size,
              type: e17.type ?? "primary",
              ref_for: true,
              ref_key: "itemsRef",
              ref: n8,
              style: normalizeStyle({
                transitionDelay: r7 * 0.1 + "s"
              }),
              onTransitionend: (l5) => z5(r7),
              onClick: (l5) => k6("click", e17.key),
              title: e17.name ?? e17.key
            }, {
              default: withCtx(() => {
                var l5;
                return [
                  e17.icon ? (openBlock(), createBlock(
                    unref(k),
                    { key: 0 },
                    {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(e17.icon)))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )) : (openBlock(), createElementBlock(
                    "span",
                    w7,
                    toDisplayString(((l5 = e17.name) == null ? void 0 : l5[0]) ?? e17.key[0]),
                    1
                    /* TEXT */
                  ))
                ];
              }),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class", "size", "type", "style", "onTransitionend", "onClick", "title"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        34
        /* CLASS, NEED_HYDRATION */
      )
    ]));
  }
});

// node_modules/ultra-ui/components/form/helper.js
function n6(r7) {
  return r7 || {};
}

// node_modules/ultra-ui/utils/form/validate.js
var p4 = Object.defineProperty;
var d5 = (t10, r7, e17) => r7 in t10 ? p4(t10, r7, { enumerable: true, configurable: true, writable: true, value: e17 }) : t10[r7] = e17;
var g4 = (t10, r7, e17) => d5(t10, typeof r7 != "symbol" ? r7 + "" : r7, e17);
var c11 = (t10) => t10 == null;
var m3 = {
  email(t10) {
    if (!/^([\w\_\-]+)@([\w\-]+[\.]?)*[\w]+\.[a-zA-Z]{2,10}$/.test(t10))
      return "邮箱格式不正确";
  },
  phone(t10) {
    if (!/^\d{11}$/.test(t10))
      return "手机号格式不正确";
  },
  num(t10) {
    if (!/^\d+$/.test(t10))
      return "数字格式不正确";
  },
  url(t10) {
    if (!/^(ftp|https?)\:\/\/([\w\_\-]+)\.([\w\-]+[\.]?)*[\w]+\.[a-zA-Z]{2,10}(.*)/.test(t10))
      return "链接格式不正确";
  },
  idCard(t10) {
    if (!/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/.test(t10))
      return "身份证格式不正确";
  }
};
var A7 = {
  required(t10, r7) {
    if (r7 === false) return;
    const e17 = typeof r7 == "string" ? r7 : "该项不能为空";
    if (c11(t10) || Array.isArray(t10) && !t10.length || typeof t10 == "string" && !t10) return e17;
  },
  min(t10, r7) {
    if (c11(t10)) return;
    let e17 = Array.isArray(r7) ? r7[0] : r7, n8 = Array.isArray(r7) ? r7[1] : `该项必须大于等于${e17}`;
    if (typeof t10 != "number") return `${t10}不是一个数字`;
    if (t10 < e17) return n8;
  },
  max(t10, r7) {
    if (c11(t10)) return;
    let e17 = Array.isArray(r7) ? r7[0] : r7, n8 = Array.isArray(r7) ? r7[1] : `该项必须小于等于${e17}`;
    if (typeof t10 != "number") return `${t10}不是一个数字`;
    if (t10 > e17) return n8;
  },
  minLen(t10, r7) {
    if (c11(t10)) return;
    let e17 = Array.isArray(r7) ? r7[0] : r7, n8 = Array.isArray(r7) ? r7[1] : `该项长度必须大于等于${e17}`;
    if (!Array.isArray(t10) && typeof t10 != "string")
      return `${t10}不是一个字符串或数组`;
    if (t10.length < e17) return n8;
  },
  maxLen(t10, r7) {
    if (c11(t10)) return;
    let e17 = Array.isArray(r7) ? r7[0] : r7, n8 = Array.isArray(r7) ? r7[1] : `该项长度必须小于等于:${e17}`;
    if (!Array.isArray(t10) && typeof t10 != "string")
      return `${t10}不是一个字符串或数组`;
    if (t10.length > e17) return n8;
  },
  match(t10, r7) {
    if (c11(t10) || t10 === "") return;
    if (typeof r7 == "string") {
      if (!r7) return;
      r7 = new RegExp(r7);
    }
    let e17 = Array.isArray(r7) ? r7[0] : r7, n8 = Array.isArray(r7) ? r7[1] : `该项不匹配正则:${e17}`;
    if (typeof t10 != "string") return `${t10}不是一个字符串`;
    if (!e17.test(t10)) return n8;
  },
  preset(t10, r7) {
    if (c11(t10) || t10 === "" || !r7) return;
    if (typeof t10 != "string") return `${t10}不是一个字符串`;
    const e17 = m3[r7];
    return e17(t10);
  }
};
var M4 = class {
  constructor(r7, e17) {
    g4(this, "rules");
    g4(this, "config");
    this.rules = r7, e17 && (this.config = e17);
  }
  /** 是否存在规则 */
  get existRules() {
    for (const r7 in this.rules)
      return true;
    return false;
  }
  /**
   * 校验单条数据
   * @param data 数据
   */
  async validateSingleData(r7, e17) {
    var i4;
    const n8 = {};
    if (!this.existRules) return n8;
    const f11 = ((i4 = this.config) == null ? void 0 : i4.lazy) ?? true;
    if (e17 = e17 ? Array.isArray(e17) ? e17 : [e17] : Object.keys(this.rules), f11) {
      for (let a6 = 0; a6 < e17.length; a6++) {
        const y5 = e17[a6], o11 = await this.validateValueLazy(r7, y5);
        o11.length !== 0 && (n8[y5] = o11);
      }
      return n8;
    } else {
      for (let a6 = 0; a6 < e17.length; a6++) {
        const y5 = e17[a6], o11 = await this.validateValue(r7, y5);
        o11.length !== 0 && (n8[y5] = o11);
      }
      return n8;
    }
  }
  async validateValue(r7, e17) {
    const n8 = this.rules[e17], f11 = getChainValue(r7, e17), { validator: i4, required: a6, ...y5 } = n8;
    let o11 = [];
    if (a6) {
      const s13 = A7.required(f11, a6);
      s13 && o11.push(s13);
    }
    for (const s13 in y5) {
      const u5 = A7[s13];
      if (!u5) continue;
      const h8 = u5(f11, y5[s13]);
      h8 && o11.push(h8);
    }
    if (i4) {
      const s13 = await i4(f11, r7);
      s13 && o11.push(s13);
    }
    return o11;
  }
  async validateValueLazy(r7, e17) {
    const n8 = this.rules[e17], f11 = getChainValue(r7, e17);
    let i4 = [];
    if (!n8) return i4;
    const { validator: a6, required: y5, ...o11 } = n8;
    if (y5) {
      const s13 = A7.required(f11, y5);
      if (s13)
        return i4.push(s13), i4;
    }
    for (const s13 in o11) {
      const u5 = A7[s13];
      if (!u5) continue;
      const h8 = u5(f11, o11[s13]);
      if (h8)
        return i4.push(h8), i4;
    }
    if (a6) {
      const s13 = await a6(f11, r7);
      if (s13)
        return i4.push(s13), i4;
    }
    return i4;
  }
  /**
   * 校验多条数据
   * @param field 需要校验的字段
   */
  async validateManyData(r7, e17) {
    let n8 = 0;
    for (; n8 < r7.length; ) {
      const f11 = r7[n8], i4 = await this.validateSingleData(f11, e17);
      if (Object.keys(i4).length > 0)
        return i4;
      n8++;
    }
    return {};
  }
  /**
   * 校验
   * @param data 数据
   * @param fields 字段
   * @returns
   */
  async validate(r7, e17) {
    return Array.isArray(r7) ? this.validateManyData(r7, e17) : this.validateSingleData(r7, e17);
  }
};

// node_modules/ultra-ui/utils/reactive/proxy.js
function P5(g10, t10, F6) {
  let { weakMap: u5, parentsField: p5, changedFields: c12 = [] } = F6 || {};
  return u5 || (u5 = /* @__PURE__ */ new WeakMap()), new Proxy(g10, {
    set(x12, s13, o11) {
      var i4;
      const e17 = p5 ? `${p5}.${s13}` : s13;
      return (i4 = t10 == null ? void 0 : t10.set) == null || i4.call(t10, e17, o11), x12[s13] = o11, c12.push(e17), Promise.resolve().then(() => {
        var y5;
        c12.length && ((y5 = t10 == null ? void 0 : t10.changed) == null || y5.call(t10, [...c12]), c12.splice(0));
      }), true;
    },
    get(x12, s13) {
      var e17;
      (e17 = t10 == null ? void 0 : t10.get) == null || e17.call(t10, s13);
      const o11 = x12[s13];
      if (o11 !== null && typeof o11 == "object") {
        if (u5.has(o11)) return u5.get(o11);
        const i4 = P5(o11, t10, {
          weakMap: u5,
          parentsField: p5 ? `${p5}.${s13}` : s13,
          changedFields: c12
        });
        return u5.set(o11, i4), i4;
      }
      return o11;
    }
  });
}
function $10(g10, t10) {
  return P5(g10, t10);
}

// node_modules/ultra-ui/components/form/form-model.js
var m4 = Object.defineProperty;
var u4 = (n8, a6, t10) => a6 in n8 ? m4(n8, a6, { enumerable: true, configurable: true, writable: true, value: t10 }) : n8[a6] = t10;
var l4 = (n8, a6, t10) => u4(n8, typeof a6 != "symbol" ? a6 + "" : a6, t10);
var A8 = class {
  constructor(a6) {
    l4(this, "data");
    l4(this, "fields");
    l4(this, "allKeys");
    l4(this, "formKeys", /* @__PURE__ */ new Map());
    l4(this, "initialData");
    l4(this, "errors", shallowReactive(
      /* @__PURE__ */ new Map()
    ));
    l4(this, "validator");
    l4(this, "validateOnFieldChange", true);
    l4(this, "modelChangeCallback", /* @__PURE__ */ new Set());
    this.fields = a6;
    const t10 = {}, e17 = [];
    for (const i4 in a6) {
      const s13 = a6[i4];
      e17.push(i4);
      const { value: r7 } = s13;
      let o11 = r7;
      typeof r7 == "function" && (watch(r7, (f11) => {
        setChainValue(this.initialData, i4, f11);
      }), o11 = r7()), setChainValue(t10, i4, o11);
    }
    return this.allKeys = e17, this.initialData = JSON.parse(JSON.stringify(t10)), this.setProxyData(reactive(t10)), this.validator = new M4(this.fields), shallowReactive(this);
  }
  /**
   * 设置响应式值
   * @param proxyData 响应式的值
   */
  setProxyData(a6) {
    const t10 = $10(a6, {
      set: (e17, i4) => {
        this.modelChangeCallback.forEach((s13) => s13(e17, i4));
      },
      changed: (e17) => {
        if (!this.validateOnFieldChange) {
          this.validateOnFieldChange = true;
          return;
        }
        this.validate(e17);
      }
    });
    this.data = t10;
  }
  getValidateFields(a6) {
    if (!a6)
      if (this.formKeys.size) {
        let t10 = [];
        return this.formKeys.forEach((e17) => {
          t10 = t10.concat(e17);
        }), t10;
      } else
        return this.allKeys;
    return Array.isArray(a6) ? a6 : [a6];
  }
  /**
   * 模型校验
   * @param fields 需要校验的字段, 不传则校验所有字段
   * @returns
   */
  async validate(a6) {
    const { errors: t10, validator: e17, data: i4 } = this, s13 = await e17.validate(
      i4,
      this.getValidateFields(a6)
    );
    if (a6)
      ~(Array.isArray(a6) ? a6 : [a6]).forEach((r7) => {
        const o11 = s13[r7];
        o11 != null && o11.length ? t10.set(r7, o11) : t10.delete(r7);
      });
    else {
      t10.clear();
      for (const r7 in s13)
        t10.set(r7, s13[r7]);
    }
    return t10.size > 0 ? Promise.reject(false) : true;
  }
  /**
   * 重置数据
   * @param fields 需要重置的字段
   */
  resetData(a6) {
    typeof a6 == "string" ? a6 = [a6] : Array.isArray(a6) || (a6 = this.allKeys), this.clearValidate(), this.validateOnFieldChange = false, a6.forEach((t10) => {
      setChainValue(
        this.data,
        t10,
        getChainValue(this.initialData, t10)
      );
    });
  }
  /**
   * 设置值
   * @param formData 表单值
   * @param options 配置
   */
  setData(a6, t10) {
    const { validate: e17 = true } = t10 || {};
    e17 || (this.validateOnFieldChange = false), this.allKeys.forEach((i4) => {
      const s13 = getChainValue(a6, i4);
      s13 !== void 0 && setChainValue(this.data, i4, s13);
    });
  }
  /** 清除校验 */
  clearValidate() {
    this.errors.clear();
  }
  /**
   * 监听值变更
   * @param cb 回调
   */
  onChange(a6) {
    this.modelChangeCallback.add(a6);
  }
  /** 关闭监听值变更 */
  offChange(a6) {
    this.modelChangeCallback.delete(a6);
  }
};

// node_modules/ultra-ui/components/form/dynamic-form-model.js
var f6 = Object.defineProperty;
var g5 = (h8, a6, t10) => a6 in h8 ? f6(h8, a6, { enumerable: true, configurable: true, writable: true, value: t10 }) : h8[a6] = t10;
var s9 = (h8, a6, t10) => g5(h8, typeof a6 != "symbol" ? a6 + "" : a6, t10);
var V4 = class {
  constructor(a6) {
    s9(this, "_data", reactive({}));
    s9(this, "fields", shallowReactive({}));
    s9(this, "validator");
    s9(this, "formKeys", /* @__PURE__ */ new Map());
    s9(this, "errors", shallowReactive(
      /* @__PURE__ */ new Map()
    ));
    s9(this, "validateOnFieldChange", true);
    s9(this, "modelChangeCallback", /* @__PURE__ */ new Set());
    s9(this, "_allKeys", []);
    s9(this, "initialData", {});
    s9(this, "oldData", {});
    this.append(a6 ?? {}), this.validator = new M4(this.fields), this.getAllKeys(), this.watchData();
  }
  set data(a6) {
    if (!isReactive(a6)) {
      console.error("data不是一个响应式对象");
      return;
    }
    this._data = a6, this.watchData();
  }
  get data() {
    return this._data;
  }
  /** 所有的键 */
  get allKeys() {
    return this._allKeys;
  }
  getAllKeys() {
    this._allKeys = Object.keys(this.fields);
  }
  watchData() {
    const { oldData: a6 } = this;
    watch(this.data, (t10) => {
      let i4 = [];
      this.allKeys.forEach((e17) => {
        const r7 = getChainValue(a6, e17), l5 = getChainValue(t10, e17);
        r7 !== l5 && (this.modelChangeCallback.forEach((o11) => o11(e17, l5)), i4.push(e17), setChainValue(a6, e17, l5));
      }), this.validateOnFieldChange ? this.validate(i4) : this.validateOnFieldChange = true;
    });
  }
  append(a6) {
    for (const t10 in a6)
      this.add(t10, a6[t10] ?? {});
  }
  /**
   * 添加字段
   * @param field 字段
   * @param item 字段配置项
   */
  add(a6, t10) {
    this.fields[a6] = t10;
    const { value: i4 } = t10, e17 = typeof i4 == "function" ? i4() : i4;
    e17 !== void 0 && (this.initialData[a6] = JSON.parse(JSON.stringify(e17))), setChainValue(this.data, a6, e17), setChainValue(this.oldData, a6, e17), this.getAllKeys();
  }
  /**
   * 移除字段
   * @param field 字段
   */
  delete(a6) {
    delete this.fields[a6], this.getAllKeys();
  }
  /**
   * 监听值变更
   * @param cb 回调
   */
  onChange(a6) {
    this.modelChangeCallback.add(a6);
  }
  offChange(a6) {
    this.modelChangeCallback.delete(a6);
  }
  async validate(a6) {
    const { errors: t10, validator: i4, data: e17 } = this, r7 = await i4.validate(
      e17,
      this.getValidateFields(a6)
    );
    if (a6)
      ~(Array.isArray(a6) ? a6 : [a6]).forEach((l5) => {
        const o11 = r7[l5];
        o11 != null && o11.length ? t10.set(l5, o11) : t10.delete(l5);
      });
    else {
      t10.clear();
      for (const l5 in r7)
        t10.set(l5, r7[l5]);
    }
    return !(t10.size > 0);
  }
  getValidateFields(a6) {
    if (!a6)
      if (this.formKeys.size) {
        let t10 = [];
        return this.formKeys.forEach((i4) => {
          t10 = t10.concat(i4);
        }), t10;
      } else
        return this.allKeys;
    return Array.isArray(a6) ? a6 : [a6];
  }
  /**
   * 重置数据
   * @param fields 需要重置的字段
   */
  resetData(a6) {
    typeof a6 == "string" ? a6 = [a6] : Array.isArray(a6) || (a6 = this.allKeys), this.clearValidate(), this.validateOnFieldChange = false, a6.forEach((t10) => {
      setChainValue(
        this.data,
        t10,
        getChainValue(this.initialData, t10)
      );
    });
  }
  /**
   * 设置值
   * @param formData 表单值
   * @param options 配置
   */
  setData(a6, t10) {
    const { validate: i4 = true } = t10 || {};
    i4 || (this.validateOnFieldChange = false), this.allKeys.forEach((e17) => {
      const r7 = getChainValue(a6, e17);
      r7 !== void 0 && setChainValue(this.data, e17, r7);
    });
  }
  clearValidate() {
    this.errors.clear();
  }
};

// node_modules/ultra-ui/venders/gantt-chart.vue_vue_type_script_setup_true_lang-BZeSAoP7.js
var f7 = defineComponent({
  name: "GanttChart",
  __name: "gantt-chart",
  props: {
    modelValue: {}
  },
  setup(c12) {
    const t10 = e("gantt-chart");
    return (p5, s13) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(t10).b)
      },
      null,
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/group-input/use-group-items.js
function g6(c12) {
  const { props: s13, emit: u5 } = c12, m6 = t2(1), t10 = shallowRef([]);
  function n8(e17) {
    return {
      data: isReactive(e17) ? e17 : shallowReactive(e17),
      id: m6()
    };
  }
  let r7 = false, i4 = false;
  function f11(e17) {
    r7 = true, e17(), nextTick(() => {
      r7 = false;
    });
  }
  return watch(
    () => s13.modelValue,
    (e17) => {
      r7 || (i4 = true, t10.value = (e17 == null ? void 0 : e17.map(n8)) ?? [], nextTick(() => {
        i4 = false;
      }));
    },
    { immediate: true }
  ), watch(t10, (e17) => {
    i4 || u5(
      "update:modelValue",
      e17.map((p5) => p5.data)
    );
  }), {
    items: t10,
    createItem: n8,
    runByEvent: f11
  };
}

// node_modules/ultra-ui/venders/group-input.vue_vue_type_script_setup_true_lang-LHzUlWLX.js
var J4 = { key: 0 };
var K5 = { key: 2 };
var re2 = defineComponent({
  name: "GroupInput",
  __name: "group-input",
  props: {
    modelValue: { default: () => [] },
    max: {},
    creatable: { type: Boolean, default: true },
    itemDefault: {},
    itemStyle: { type: [Boolean, null, String, Object, Array] },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  },
  emits: ["update:modelValue"],
  setup(g10, { emit: B7 }) {
    const y5 = g10, E11 = B7, r7 = e("group-input"), { formProps: N4 } = i2(), { disabled: v6, size: s13, readonly: S8 } = g(
      [N4 ?? {}, y5],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), { items: t10, createItem: V6, runByEvent: b10 } = g6({
      props: y5,
      emit: E11
    }), h8 = computed(() => !t10.value.length);
    function k6(n8) {
      b10(() => {
        t10.value = [
          ...t10.value.slice(0, n8 + 1),
          V6({}),
          ...t10.value.slice(n8 + 1)
        ];
      });
    }
    function F6(n8) {
      b10(() => {
        t10.value = [
          ...t10.value.slice(0, n8),
          ...t10.value.slice(n8 + 1)
        ];
      });
    }
    return (n8, m6) => {
      var z5;
      return unref(S8) ? (z5 = unref(t10)) != null && z5.length ? (openBlock(), createElementBlock(
        "ul",
        {
          key: 1,
          class: normalizeClass([unref(r7).b, unref(r7).m(unref(s13))])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(t10), (i4) => (openBlock(), createElementBlock(
              "li",
              {
                key: i4.id,
                class: normalizeClass(unref(r7).e("item"))
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(i4.data, (a6) => (openBlock(), createElementBlock(
                    "span",
                    null,
                    toDisplayString(a6),
                    1
                    /* TEXT */
                  ))),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ],
              2
              /* CLASS */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : (openBlock(), createElementBlock(
        "span",
        K5,
        toDisplayString(unref(E)),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock(
        "ul",
        {
          key: 0,
          class: normalizeClass([unref(r7).b, unref(r7).m(unref(s13))])
        },
        [
          h8.value && n8.creatable ? (openBlock(), createElementBlock("li", J4, [
            createVNode(unref(M), {
              style: { width: "100%" },
              icon: unref(plus_default),
              onClick: m6[0] || (m6[0] = (i4) => k6(0)),
              size: unref(s13)
            }, {
              default: withCtx(() => m6[1] || (m6[1] = [
                createTextVNode(" 新增 ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["icon", "size"])
          ])) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(t10), (i4, a6) => (openBlock(), createElementBlock(
              "li",
              {
                key: i4.id,
                class: normalizeClass(unref(r7).e("item")),
                style: normalizeStyle(n8.itemStyle)
              },
              [
                renderSlot(n8.$slots, "default", mergeProps({ ref_for: true }, { item: i4.data, index: a6 })),
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(unref(r7).e("actions"))
                  },
                  [
                    createVNode(unref(M), {
                      icon: unref(minus_default),
                      circle: "",
                      disabled: unref(v6),
                      size: unref(s13),
                      onClick: (P8) => F6(a6)
                    }, null, 8, ["icon", "disabled", "size", "onClick"]),
                    createVNode(unref(M), {
                      icon: unref(plus_default),
                      circle: "",
                      disabled: unref(v6),
                      size: unref(s13),
                      onClick: (P8) => k6(a6)
                    }, null, 8, ["icon", "disabled", "size", "onClick"])
                  ],
                  2
                  /* CLASS */
                )
              ],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ));
    };
  }
});

// node_modules/ultra-ui/venders/grid-input.vue_vue_type_script_setup_true_lang-C56b2Ge9.js
var E9 = ["onKeydown", "onFocus", "onBlur"];
var J5 = defineComponent({
  name: "GridInput",
  __name: "grid-input",
  props: {
    modelValue: {},
    length: { default: 6 },
    zero: { type: Boolean, default: false },
    separator: { default: "-" }
  },
  emits: ["update:modelValue", "input"],
  setup(k6, { expose: b10, emit: w12 }) {
    const y5 = w12, n8 = k6, { size: B7 } = l([n8], {
      size: "default"
    }), c12 = e("grid-input"), V6 = computed(() => n8.zero ? /^[0-9]$/ : /^[1-9]$/), l5 = ref([]), u5 = ref(-1), m6 = ref(false), v6 = getCurrentInstance(), o11 = async (t10) => {
      if (t10 === void 0) {
        o11(u5.value);
        return;
      }
      t10 !== 0 && t10 > l5.value.length && (t10 = l5.value.length), u5.value = t10;
      let e17 = (v6 == null ? void 0 : v6.refs.items)[t10];
      e17 == null || e17.focus(), m6.value = false;
    }, z5 = (t10, e17) => {
      if (u5.value === n8.length) return;
      if (l5.value[e17])
        l5.value.splice(e17, 1, t10);
      else if (e17 === l5.value.length)
        l5.value.push(t10);
      else
        return;
      u5.value++, o11(), y5("input", l5.value.filter((r7) => r7).join(n8.separator));
    }, C7 = {
      Backspace: (t10, e17) => {
        t10 ? l5.value.splice(e17, 1) : e17 - 1 >= 0 && l5.value.splice(e17 - 1, 1), e17 !== 0 && o11(e17 - 1), y5("input", l5.value.filter((s13) => s13).join(n8.separator));
      },
      ArrowLeft: (t10, e17) => {
        e17 !== 0 && o11(e17 - 1);
      },
      ArrowRight: (t10, e17) => {
        e17 !== l5.value.length && o11(e17 + 1);
      }
    }, F6 = (t10, e17, s13) => {
      if (V6.value.test(t10.key)) {
        z5(t10.key, s13);
        return;
      }
      C7[t10.key](e17, s13);
    };
    return b10({ clear: () => {
      for (; l5.value.length; )
        l5.value.pop();
    } }), (t10, e17) => (openBlock(), createElementBlock(
      "ul",
      {
        class: normalizeClass([unref(c12).b, unref(c12).m(unref(B7))])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(t10.length, (s13, r7) => (openBlock(), createElementBlock("li", {
            key: r7,
            tabindex: "0",
            onKeydown: (g10) => F6(g10, l5.value[r7], r7),
            onFocus: (g10) => o11(r7),
            onBlur: (g10) => r7 === u5.value && (m6.value = true),
            ref_for: true,
            ref: "items",
            class: normalizeClass([unref(c12).e("item"), unref(e).is("focus", r7 === u5.value && !m6.value)])
          }, [
            l5.value[r7] ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(unref(c12).em("item", "text"))
              },
              toDisplayString(l5.value[r7]),
              3
              /* TEXT, CLASS */
            )) : r7 === u5.value ? (openBlock(), createElementBlock(
              "span",
              {
                key: 1,
                class: normalizeClass(unref(c12).em("item", "cursor"))
              },
              null,
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true)
          ], 42, E9))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/list.vue_vue_type_script_setup_true_lang-DaC3QFAB.js
var E10 = defineComponent({
  name: "List",
  __name: "list",
  props: {
    size: {},
    data: {}
  },
  setup(s13) {
    const a6 = s13, { size: m6 } = l([a6], {
      size: "default"
    }), r7 = e("list");
    return (t10, C7) => (openBlock(), createBlock(unref(fe2), {
      tag: "ul",
      class: normalizeClass([unref(r7).b, unref(r7).m(unref(m6))])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(t10.data, (n8, l5) => renderSlot(t10.$slots, "default", mergeProps({ ref_for: true }, { item: n8, index: l5 }))),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/venders/list-item.vue_vue_type_script_setup_true_lang-C7rJq4oV.js
var d6 = defineComponent({
  name: "ListItem",
  __name: "list-item",
  setup(a6) {
    const e17 = e("list-item");
    return (t10, c12) => (openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass(unref(e17).b)
      },
      [
        renderSlot(t10.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/menu/di.js
var e11 = Symbol("MenuDIKey");

// node_modules/ultra-ui/venders/menu-item.vue_vue_type_script_setup_true_lang-C6oB2TkV.js
var M5 = ["src"];
var G3 = defineComponent({
  name: "MenuItem",
  __name: "menu-item",
  props: {
    menu: {},
    depth: {}
  },
  setup(d9) {
    const k6 = d9, { cls: t10, menuProps: y5, menuEmit: h8 } = inject(e11), l5 = shallowRef(), a6 = computed(() => y5.currentPath === k6.menu.path);
    return watch([a6, l5], ([e17, i4]) => {
      e17 && i4 && i4.scrollIntoView({
        block: "nearest"
      });
    }), (e17, i4) => {
      var c12;
      return withDirectives((openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass([
            unref(t10).e("item"),
            unref(e).is("active", a6.value),
            unref(e).is("disabled", e17.menu.disabled ?? false)
          ]),
          style: normalizeStyle({
            paddingLeft: `${e17.depth * 20 + 8}px`
          }),
          ref_key: "itemRef",
          ref: l5,
          onClick: i4[0] || (i4[0] = (N4) => unref(h8)("item-click", e17.menu))
        },
        [
          createCommentVNode(" 图标 "),
          e17.menu.icon ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              typeof e17.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                key: 0,
                class: normalizeClass(unref(t10).e("item-icon"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(e17.menu.icon)))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                key: 1,
                src: e17.menu.icon,
                class: normalizeClass((c12 = unref(t10)) == null ? void 0 : c12.e("item-icon")),
                alt: "icon"
              }, null, 10, M5))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true),
          createCommentVNode(" 文本 "),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(t10).e("item-title"))
            },
            toDisplayString(e17.menu.title),
            3
            /* TEXT, CLASS */
          ),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(t10).e("item-expand"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )), [
        [unref(T), e17.menu.disabled ? false : unref(t10).e("ripple")]
      ]);
    };
  }
});

// node_modules/ultra-ui/components/menu/helper.js
function n7(e17, t10) {
  return `${t10}-${e17}`;
}

// node_modules/ultra-ui/components/menu/use-menu-transition.js
function x10() {
  const i4 = "height 0.3s ease", o11 = i4;
  function r7(t10) {
    const g10 = t10.offsetHeight;
    n3(t10, {
      height: 0,
      transition: i4
    }), requestAnimationFrame(() => {
      n3(t10, {
        height: `${g10}px`
      });
    });
  }
  function s13(t10) {
    s2(t10, ["transition", "height"]);
  }
  function a6(t10) {
    n3(t10, {
      height: t10.offsetHeight + "px",
      transition: o11
    });
  }
  function h8(t10) {
    n3(t10, {
      height: 0
    });
  }
  function f11(t10) {
    s2(t10, ["transition", "height"]);
  }
  return {
    enter: r7,
    afterEnter: s13,
    beforeLeave: a6,
    leave: h8,
    afterLeave: f11
  };
}

// node_modules/ultra-ui/venders/menu-sub.vue_vue_type_script_setup_true_lang-jucfGLjR.js
var O6 = ["src"];
var re3 = defineComponent({
  name: "MenuSub",
  __name: "menu-sub",
  props: {
    menu: {},
    parentKey: {},
    depth: {}
  },
  setup(L5) {
    const f11 = L5, { cls: o11, expandedPath: u5, menuProps: E11 } = inject(e11), { enter: _10, afterEnter: C7, beforeLeave: S8, leave: A11, afterLeave: B7 } = x10(), h8 = computed(() => u5.has(f11.menu.path));
    function K6() {
      const { menu: n8 } = f11;
      u5.has(n8.path) ? u5.delete(n8.path) : u5.add(n8.path);
    }
    return (n8, Q5) => {
      var v6;
      const M8 = resolveComponent("MenuSub", true);
      return openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass(unref(o11).e("sub"))
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(o11).e("sub-content")),
              onClick: K6,
              style: normalizeStyle({
                paddingLeft: 8 + n8.depth * 20 + "px"
              })
            },
            [
              createCommentVNode(" 图标 "),
              n8.menu.icon ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  typeof n8.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                    key: 0,
                    class: normalizeClass(unref(o11).e("sub-icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(n8.menu.icon)))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                    key: 1,
                    src: n8.menu.icon,
                    class: normalizeClass((v6 = unref(o11)) == null ? void 0 : v6.e("sub-icon")),
                    alt: "icon"
                  }, null, 10, O6))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              !unref(E11).collapsed || n8.depth !== 0 ? (openBlock(), createElementBlock(
                Fragment,
                { key: 1 },
                [
                  createCommentVNode(" 文本 "),
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(unref(o11).e("sub-title"))
                    },
                    toDisplayString(n8.menu.title),
                    3
                    /* TEXT, CLASS */
                  ),
                  createCommentVNode(" 展开图标 "),
                  createVNode(unref(k), {
                    class: normalizeClass([unref(o11).e("sub-expand"), unref(e).is("expanded", h8.value)])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          ),
          createCommentVNode(" @vue-ignore "),
          createVNode(Transition, {
            onEnter: unref(_10),
            onAfterEnter: unref(C7),
            onLeave: unref(A11),
            onBeforeLeave: unref(S8),
            onAfterLeave: unref(B7),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode(
                "ul",
                {
                  class: normalizeClass(unref(o11).e("sub-list"))
                },
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(n8.menu.children, (i4, y5) => {
                      var b10;
                      return openBlock(), createElementBlock(
                        Fragment,
                        {
                          key: unref(n7)(y5, n8.parentKey)
                        },
                        [
                          (b10 = i4.children) != null && b10.length ? (openBlock(), createBlock(M8, {
                            key: 1,
                            menu: i4,
                            "parent-key": unref(n7)(y5, n8.parentKey),
                            depth: n8.depth + 1
                          }, null, 8, ["menu", "parent-key", "depth"])) : (openBlock(), createBlock(G3, {
                            key: 0,
                            menu: i4,
                            depth: n8.depth + 1
                          }, null, 8, ["menu", "depth"]))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              ), [
                [vShow, h8.value]
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onEnter", "onAfterEnter", "onLeave", "onBeforeLeave", "onAfterLeave"])
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/ultra-ui/venders/menu-item-collapsed.vue_vue_type_script_setup_true_lang-DtXQMgWk.js
var S7 = ["src"];
var T5 = ["src"];
var X3 = defineComponent({
  name: "MenuItem",
  __name: "menu-item-collapsed",
  props: {
    menu: {},
    depth: {}
  },
  setup(R7) {
    const D4 = R7, { cls: t10, menuProps: I4, menuEmit: V6 } = inject(e11), c12 = shallowRef(), p5 = computed(() => I4.currentPath === D4.menu.path);
    watch([p5, c12], ([e17, r7]) => {
      e17 && r7 && r7.scrollIntoView({
        block: "nearest"
      });
    });
    const $12 = shallowRef("hover"), B7 = shallowRef(), y5 = (e17) => {
      V6("item-click", e17);
    };
    return (e17, r7) => {
      var g10;
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" <div> "),
          createBaseVNode("div", null, [
            e17.depth === 0 ? (openBlock(), createBlock(unref(Re2), {
              key: 0,
              direction: "right",
              alignment: "center",
              trigger: $12.value,
              ref_key: "tipRef",
              ref: B7,
              "hide-arrow": ""
            }, {
              content: withCtx(() => [
                createTextVNode(
                  toDisplayString(e17.menu.title),
                  1
                  /* TEXT */
                )
              ]),
              default: withCtx(() => {
                var d9;
                return [
                  withDirectives((openBlock(), createElementBlock(
                    "li",
                    {
                      class: normalizeClass([
                        unref(t10).e("item"),
                        unref(e).is("active", p5.value),
                        unref(e).is("disabled", e17.menu.disabled ?? false)
                      ]),
                      ref_key: "itemRef",
                      ref: c12,
                      onClick: r7[0] || (r7[0] = (q8) => y5(e17.menu))
                    },
                    [
                      createCommentVNode(" 收缩 "),
                      e17.menu.icon ? (openBlock(), createElementBlock(
                        Fragment,
                        { key: 0 },
                        [
                          typeof e17.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                            key: 0,
                            class: normalizeClass(unref(t10).e("item-icon"))
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(e17.menu.icon)))
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                            key: 1,
                            src: e17.menu.icon,
                            class: normalizeClass((d9 = unref(t10)) == null ? void 0 : d9.e("item-icon")),
                            alt: "icon"
                          }, null, 10, S7))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )) : createCommentVNode("v-if", true),
                      e17.depth !== 0 ? (openBlock(), createElementBlock(
                        "span",
                        {
                          key: 1,
                          class: normalizeClass(unref(t10).e("item-expand"))
                        },
                        toDisplayString(e17.menu.title),
                        3
                        /* TEXT, CLASS */
                      )) : createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  )), [
                    [unref(T), e17.menu.disabled ? false : unref(t10).e("ripple")]
                  ])
                ];
              }),
              _: 1
              /* STABLE */
            }, 8, ["trigger"])) : withDirectives((openBlock(), createElementBlock(
              "li",
              {
                key: 1,
                class: normalizeClass([
                  unref(t10).e("item"),
                  unref(e).is("active", p5.value),
                  unref(e).is("disabled", e17.menu.disabled ?? false)
                ]),
                ref_key: "itemRef",
                ref: c12,
                onClick: r7[1] || (r7[1] = (d9) => y5(e17.menu))
              },
              [
                createCommentVNode(" 收缩 "),
                e17.menu.icon ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    typeof e17.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                      key: 0,
                      class: normalizeClass(unref(t10).e("item-icon"))
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(e17.menu.icon)))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                      key: 1,
                      src: e17.menu.icon,
                      class: normalizeClass((g10 = unref(t10)) == null ? void 0 : g10.e("item-icon")),
                      alt: "icon"
                    }, null, 10, T5))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                e17.depth !== 0 ? (openBlock(), createElementBlock(
                  "span",
                  {
                    key: 1,
                    class: normalizeClass(unref(t10).e("item-expand"))
                  },
                  toDisplayString(e17.menu.title),
                  3
                  /* TEXT, CLASS */
                )) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )), [
              [unref(T), e17.menu.disabled ? false : unref(t10).e("ripple")]
            ])
          ]),
          createCommentVNode(" </div> ")
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});

// node_modules/ultra-ui/venders/menu-sub-collapsed.vue_vue_type_script_setup_true_lang-DUqeqlbh.js
var W4 = ["src"];
var ie4 = defineComponent({
  name: "MenuSubCollapsed",
  __name: "menu-sub-collapsed",
  props: {
    menu: {},
    parentKey: {},
    depth: {},
    collapsed: { type: Boolean }
  },
  setup(k6) {
    const f11 = k6, { cls: o11, expandedPath: h8, menuProps: C7 } = inject(e11), { enter: L5, afterEnter: E11, beforeLeave: w12, leave: B7, afterLeave: M8 } = x10(), v6 = computed(() => h8.has(f11.menu.path)), A11 = shallowRef("right"), K6 = shallowRef("center"), S8 = shallowRef("hover");
    function D4() {
      const { menu: n8 } = f11;
      h8.add(n8.path);
    }
    return (n8, X5) => {
      const N4 = resolveComponent("MenuSubCollapsed", true);
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" 收缩状态 "),
          createBaseVNode(
            "div",
            { onMouseenter: D4 },
            [
              createVNode(unref(Re2), {
                direction: A11.value,
                alignment: K6.value,
                "hide-arrow": "",
                trigger: S8.value
              }, {
                content: withCtx(() => [
                  createCommentVNode(" @vue-ignore "),
                  createVNode(Transition, {
                    onEnter: unref(L5),
                    onAfterEnter: unref(E11),
                    onLeave: unref(B7),
                    onBeforeLeave: unref(w12),
                    onAfterLeave: unref(M8),
                    persisted: ""
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode(
                        "ul",
                        {
                          class: normalizeClass(unref(o11).e("sub-list"))
                        },
                        [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(n8.menu.children, (s13, g10) => {
                              var y5;
                              return openBlock(), createElementBlock(
                                Fragment,
                                {
                                  key: unref(n7)(g10, n8.parentKey)
                                },
                                [
                                  (y5 = s13.children) != null && y5.length ? (openBlock(), createBlock(N4, {
                                    key: 1,
                                    menu: s13,
                                    "parent-key": unref(n7)(g10, n8.parentKey),
                                    depth: n8.depth + 1
                                  }, null, 8, ["menu", "parent-key", "depth"])) : (openBlock(), createBlock(X3, {
                                    key: 0,
                                    menu: s13,
                                    depth: n8.depth + 1
                                  }, null, 8, ["menu", "depth"]))
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        2
                        /* CLASS */
                      ), [
                        [vShow, v6.value]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onEnter", "onAfterEnter", "onLeave", "onBeforeLeave", "onAfterLeave"])
                ]),
                default: withCtx(() => {
                  var s13;
                  return [
                    createBaseVNode(
                      "li",
                      {
                        class: normalizeClass([unref(o11).e("sub")]),
                        style: { width: "100%" }
                      },
                      [
                        createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(unref(o11).e("sub-content"))
                          },
                          [
                            createCommentVNode(" 图标 "),
                            createBaseVNode("div", null, [
                              n8.menu.icon ? (openBlock(), createElementBlock(
                                Fragment,
                                { key: 0 },
                                [
                                  typeof n8.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                                    key: 0,
                                    class: normalizeClass(unref(o11).e("sub-icon"))
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(n8.menu.icon)))
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                                    key: 1,
                                    src: n8.menu.icon,
                                    class: normalizeClass((s13 = unref(o11)) == null ? void 0 : s13.e("sub-icon")),
                                    alt: "icon"
                                  }, null, 10, W4))
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              )) : createCommentVNode("v-if", true),
                              !unref(C7).collapsed || n8.depth !== 0 ? (openBlock(), createElementBlock(
                                Fragment,
                                { key: 1 },
                                [
                                  createCommentVNode(" 文本 "),
                                  createBaseVNode(
                                    "span",
                                    {
                                      class: normalizeClass(unref(o11).e("sub-title"))
                                    },
                                    toDisplayString(n8.menu.title),
                                    3
                                    /* TEXT, CLASS */
                                  ),
                                  createCommentVNode(" 展开图标 "),
                                  createVNode(unref(k), {
                                    class: normalizeClass([unref(o11).e("sub-expand"), unref(e).is("expanded", v6.value)])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(arrow_right_default))
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }, 8, ["class"])
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              )) : createCommentVNode("v-if", true)
                            ])
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      2
                      /* CLASS */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["direction", "alignment", "trigger"])
            ],
            32
            /* NEED_HYDRATION */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});

// node_modules/ultra-ui/venders/menu.vue_vue_type_script_setup_true_lang-Dl20KRhk.js
var w8 = Object.defineProperty;
var B6 = (l5, a6, t10) => a6 in l5 ? w8(l5, a6, { enumerable: true, configurable: true, writable: true, value: t10 }) : l5[a6] = t10;
var f8 = (l5, a6, t10) => B6(l5, typeof a6 != "symbol" ? a6 + "" : a6, t10);
var x11 = defineComponent({
  name: "Menu",
  __name: "menu",
  props: {
    currentPath: {},
    collapsed: { type: Boolean, default: false },
    uniqueOpened: { type: Boolean, default: false },
    menus: {}
  },
  emits: ["item-click"],
  setup(l5, { emit: a6 }) {
    const t10 = l5, y5 = a6, d9 = e("menu"), { size: g10 } = l([t10], {
      size: "default"
    }), h8 = shallowReactive(/* @__PURE__ */ new Set());
    class S8 extends TreeNode {
      constructor() {
        super(...arguments);
        f8(this, "parent", null);
        f8(this, "children");
      }
    }
    const $12 = computed(() => t10.menus ? Forest.create(t10.menus, S8) : null);
    return watch(
      [() => t10.currentPath, () => $12.value],
      ([s13, i4]) => {
        !s13 || !i4 || i4.dft((r7) => {
          var n8;
          if (r7.data.path === s13) {
            let e17 = r7.parent;
            for (; (n8 = e17 == null ? void 0 : e17.data) != null && n8.path; )
              h8.add(e17.data.path), e17 = e17.parent;
            return false;
          }
        });
      },
      {
        immediate: true
      }
    ), provide(e11, {
      cls: d9,
      menuProps: t10,
      menuEmit: y5,
      expandedPath: h8
    }), (s13, i4) => (openBlock(), createBlock(unref(fe2), {
      tag: "ul",
      class: normalizeClass([unref(d9).b, unref(d9).m(unref(g10)), unref(e).is("collapsed", s13.collapsed)])
    }, {
      default: withCtx(() => [
        s13.collapsed ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 1 },
          renderList(s13.menus, (r7, n8) => {
            var e17;
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: String(n8)
              },
              [
                (e17 = r7.children) != null && e17.length ? (openBlock(), createBlock(ie4, {
                  key: 0,
                  menu: r7,
                  "parent-key": String(n8),
                  depth: 0
                }, null, 8, ["menu", "parent-key"])) : (openBlock(), createBlock(X3, {
                  menu: r7,
                  key: String(n8),
                  depth: 0
                }, null, 8, ["menu"]))
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )) : (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList(s13.menus, (r7, n8) => {
            var e17;
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: String(n8)
              },
              [
                (e17 = r7.children) != null && e17.length ? (openBlock(), createBlock(re3, {
                  key: 0,
                  menu: r7,
                  "parent-key": String(n8),
                  depth: 0
                }, null, 8, ["menu", "parent-key"])) : (openBlock(), createBlock(G3, {
                  menu: r7,
                  key: String(n8),
                  depth: 0
                }, null, 8, ["menu"]))
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/components/multi-auto-complete/multi-auto-complete.js
var s10 = (t10, e17) => {
  const o11 = t10.__vccOpts || t10;
  for (const [c12, r7] of e17)
    o11[c12] = r7;
  return o11;
};
var a5 = {};
function f9(t10, e17) {
  return openBlock(), createElementBlock("div");
}
var m5 = s10(a5, [["render", f9]]);

// node_modules/ultra-ui/components/multi-select/di.js
var e12 = Symbol("MultiSelectDIKey");

// node_modules/ultra-ui/venders/multi-select-option.vue_vue_type_script_setup_true_lang-BNz7Re-B.js
var w9 = defineComponent({
  name: "MultiSelectOption",
  __name: "multi-select-option",
  props: {
    option: {},
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean },
    measureElement: { type: Function }
  },
  emits: ["check"],
  setup(B7, { emit: s13 }) {
    const t10 = s13, { optionClass: n8, rippleClass: r7 } = inject(e12);
    return (e17, o11) => withDirectives((openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass(unref(n8)),
        onClick: o11[2] || (o11[2] = (i4) => !e17.disabled && t10("check", !e17.checked)),
        ref: e17.measureElement
      },
      [
        createVNode(unref(U2), {
          "model-value": e17.checked,
          "onUpdate:modelValue": o11[0] || (o11[0] = (i4) => t10("check", i4)),
          onClick: o11[1] || (o11[1] = withModifiers(() => {
          }, ["stop"])),
          disabled: e17.disabled
        }, null, 8, ["model-value", "disabled"]),
        renderSlot(e17.$slots, "default")
      ],
      2
      /* CLASS */
    )), [
      [unref(T), e17.disabled ? false : unref(r7)]
    ]);
  }
});

// node_modules/ultra-ui/components/select/use-options.js
function w10(f11) {
  const { props: n8 } = f11, c12 = shallowRef(""), r7 = shallowRef([]), o11 = shallowRef([]), l5 = computed(() => {
    const { options: e17 } = n8;
    return e17 ? typeof e17 == "function" ? r7.value : o11.value : [];
  });
  return watch(
    [c12, () => n8.options],
    debounce(async ([e17, t10]) => {
      if (typeof t10 == "function") {
        const u5 = await t10(e17);
        r7.value = u5;
      } else {
        const { labelKey: u5 } = n8;
        if (!e17) {
          o11.value = t10 ?? [];
          return;
        }
        o11.value = (t10 == null ? void 0 : t10.filter((a6) => a6[u5].includes(e17))) ?? [];
      }
    }, 200),
    {
      immediate: true
    }
  ), {
    queryString: c12,
    options: l5
  };
}

// node_modules/ultra-ui/venders/multi-select.vue_vue_type_script_setup_true_lang-Beeli5he.js
var Ue3 = { key: 2 };
var cl2 = defineComponent({
  name: "MultiSelect",
  __name: "multi-select",
  props: mergeModels({
    modelValue: {},
    options: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    clearable: { type: Boolean, default: true },
    placeholder: { default: "请选择" },
    filterable: { type: Boolean },
    visibilityLimit: { default: 3 },
    max: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "change"], ["update:modelValue"]),
  setup(O7, { emit: ee3 }) {
    const f11 = O7, le4 = ee3, o11 = e("multi-select"), { formProps: te6 } = i2(), { size: S8, disabled: C7, readonly: P8 } = g(
      [te6 ?? {}, f11],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), I4 = shallowRef(), z5 = shallowRef(false), { options: k6, queryString: E11 } = w10({
      props: f11
    }), { totalHeight: ae4, virtualList: se4, virtualEnabled: B7, measureElement: oe6 } = j3(
      {
        virtualThreshold: 80,
        estimateSize: () => 40,
        count: computed(() => k6.value.length),
        scrollEl: computed(() => {
          var l5;
          return ((l5 = I4.value) == null ? void 0 : l5.containerRef) ?? null;
        })
      }
    ), re6 = computed(() => {
      const { valueKey: l5, labelKey: t10 } = f11, d9 = k6.value;
      return se4.value.map((s13) => {
        const c12 = d9[s13.index], a6 = getChainValue(c12, l5);
        return {
          option: c12,
          index: s13.index,
          val: a6,
          key: s13.key,
          offset: s13.start,
          label: getChainValue(c12, t10)
        };
      });
    }), ne3 = computed(() => f11.filterable || typeof f11.options == "function"), u5 = useModel(O7, "modelValue"), n8 = shallowReactive(/* @__PURE__ */ new Set()), U3 = computed(() => n8.size === k6.value.length), ie6 = computed(() => n8.size > 0 && !U3.value), Y3 = computed(() => {
      const { valueKey: l5 } = f11;
      return new Map(
        k6.value.map((t10) => [t10[l5], t10])
      );
    }), ue2 = shallowRef();
    let R7 = false, T6 = false;
    watch(
      [u5, Y3],
      ([l5, t10]) => {
        R7 || (T6 = true, n8.clear(), t10.size && (l5 != null && l5.length) && l5.forEach((d9) => {
          const s13 = t10.get(d9);
          s13 && n8.add(s13);
        }), nextTick(() => {
          T6 = false;
        }));
      },
      { immediate: true }
    ), watch(n8, () => {
      if (T6) return;
      const { valueKey: l5 } = f11;
      R7 = true;
      const t10 = Array.from(n8);
      u5.value = t10.map((d9) => d9[l5]), le4("change", t10), nextTick(() => {
        R7 = false;
      });
    });
    const N4 = computed(() => {
      var d9, s13;
      let l5 = [], { visibilityLimit: t10 } = f11;
      return t10 < 0 && (t10 = 0), (C7.value || P8.value) && (t10 = ((d9 = u5.value) == null ? void 0 : d9.length) ?? 0), (s13 = u5.value) == null || s13.slice(0, t10).forEach((c12) => {
        const a6 = Y3.value.get(c12);
        a6 && l5.push(a6);
      }), l5;
    }), q8 = computed(() => {
      var l5;
      return (((l5 = u5.value) == null ? void 0 : l5.length) ?? 0) - N4.value.length;
    }), H4 = (l5, t10) => {
      t10 ? n8.add(l5) : n8.delete(l5);
    }, de6 = (l5) => {
      l5 ? k6.value.forEach((t10) => n8.add(t10)) : n8.clear();
    }, ce3 = () => {
      u5.value = [], n8.clear();
    }, me3 = (l5) => {
      n8.delete(l5);
    }, j5 = (l5) => {
      const { max: t10 } = f11;
      return t10 !== void 0 && n8.size >= t10 && !n8.has(l5);
    }, fe5 = o11.e("option"), ve4 = o11.e("ripple");
    return provide(e12, {
      optionClass: fe5,
      rippleClass: ve4
    }), (l5, t10) => {
      var d9;
      return unref(P8) ? (d9 = u5.value) != null && d9.length ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass([unref(o11).m(unref(S8)), unref(o11).e("readonly-tags")])
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(o11).e("tags"))
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(N4.value, (s13) => (openBlock(), createBlock(
                  unref(A3),
                  {
                    key: s13[l5.valueKey]
                  },
                  {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(s13[l5.labelKey]),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : (openBlock(), createElementBlock(
        "span",
        Ue3,
        toDisplayString(unref(E)),
        1
        /* TEXT */
      )) : (openBlock(), createBlock(unref(oe2), {
        key: 0,
        trigger: "click",
        "min-width": "200px",
        ref_key: "dropdownRef",
        ref: ue2,
        class: normalizeClass([unref(o11).b, unref(o11).m(unref(S8)), unref(e).is("disabled", unref(C7))]),
        "content-class": [unref(o11).e("panel"), unref(o11).em("panel", unref(S8))],
        onMouseenter: t10[1] || (t10[1] = (s13) => z5.value = true),
        onMouseleave: t10[2] || (t10[2] = (s13) => z5.value = false),
        disabled: unref(C7)
      }, {
        trigger: withCtx(() => {
          var s13, c12;
          return [
            withDirectives(createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(o11).e("placeholder"))
              },
              toDisplayString(l5.placeholder),
              3
              /* TEXT, CLASS */
            ), [
              [vShow, !((s13 = u5.value) != null && s13.length)]
            ]),
            (c12 = u5.value) != null && c12.length ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(o11).e("tags"))
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(N4.value, (a6) => (openBlock(), createBlock(unref(A3), {
                    key: a6[l5.valueKey],
                    closable: !unref(C7),
                    onClose: (w12) => me3(a6)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(a6[l5.labelKey]),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["closable", "onClose"]))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                q8.value ? (openBlock(), createBlock(unref(A3), { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(q8.value) + "+ ",
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true),
            createVNode(Transition, {
              name: "zoom-in",
              mode: "out-in"
            }, {
              default: withCtx(() => {
                var a6;
                return [
                  l5.clearable && ((a6 = u5.value) != null && a6.length) && z5.value && !unref(C7) ? (openBlock(), createBlock(unref(k), {
                    key: 0,
                    class: normalizeClass(unref(o11).e("clear")),
                    onClick: withModifiers(ce3, ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(close_default))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"])) : (openBlock(), createBlock(unref(k), {
                    key: 1,
                    class: normalizeClass(unref(o11).e("arrow"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_down_default))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"]))
                ];
              }),
              _: 1
              /* STABLE */
            })
          ];
        }),
        content: withCtx(() => {
          var s13, c12;
          return [
            createCommentVNode(" 多选栏 "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(o11).e("content-header"))
              },
              [
                createVNode(unref(U2), {
                  "model-value": U3.value,
                  indeterminate: ie6.value,
                  "onUpdate:modelValue": de6,
                  disabled: l5.max !== void 0
                }, {
                  default: withCtx(() => t10[3] || (t10[3] = [
                    createTextVNode(" 全选 ")
                  ])),
                  _: 1
                  /* STABLE */
                }, 8, ["model-value", "indeterminate", "disabled"]),
                createBaseVNode(
                  "span",
                  null,
                  " 已选 " + toDisplayString((s13 = u5.value) == null ? void 0 : s13.length) + "/" + toDisplayString(l5.max ?? ((c12 = unref(k6)) == null ? void 0 : c12.length) ?? 0),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            ),
            createCommentVNode(" 过滤器 "),
            ne3.value ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(o11).e("content-filter"))
              },
              [
                createVNode(unref(Ve), {
                  placeholder: "输入关键字进行过滤",
                  modelValue: unref(E11),
                  "onUpdate:modelValue": t10[0] || (t10[0] = (a6) => isRef(E11) ? E11.value = a6 : null)
                }, {
                  suffix: withCtx(() => [
                    createVNode(unref(k), null, {
                      default: withCtx(() => [
                        createVNode(unref(search_default))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true),
            createCommentVNode(" 多选列表 "),
            unref(k6).length ? (openBlock(), createBlock(unref(fe2), {
              key: 1,
              tag: "ul",
              class: normalizeClass([unref(o11).e("options")]),
              ref_key: "scrollRef",
              ref: I4,
              "content-class": [
                unref(o11).e("options-wrap"),
                unref(e).is("virtual", unref(B7))
              ],
              "content-style": {
                height: unref(B7) ? unref(f)(unref(ae4), "px") : void 0
              }
            }, {
              default: withCtx(() => [
                unref(B7) ? (openBlock(true), createElementBlock(
                  Fragment,
                  { key: 0 },
                  renderList(re6.value, ({ option: a6, index: w12, key: x12, label: pe4, offset: he3 }) => (openBlock(), createBlock(w9, {
                    option: a6,
                    disabled: j5(a6),
                    key: x12,
                    style: normalizeStyle({ transform: `translateY(${he3}px)` }),
                    onCheck: (ye2) => H4(a6, ye2),
                    checked: unref(n8).has(a6),
                    "data-index": w12,
                    "measure-element": unref(oe6)
                  }, {
                    default: withCtx(() => [
                      renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a6, index: w12 }), () => [
                        createTextVNode(
                          toDisplayString(pe4),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["option", "disabled", "style", "onCheck", "checked", "data-index", "measure-element"]))),
                  128
                  /* KEYED_FRAGMENT */
                )) : (openBlock(true), createElementBlock(
                  Fragment,
                  { key: 1 },
                  renderList(unref(k6), (a6, w12) => (openBlock(), createBlock(w9, {
                    option: a6,
                    disabled: j5(a6),
                    key: unref(getChainValue)(a6, l5.valueKey),
                    onCheck: (x12) => H4(a6, x12),
                    checked: unref(n8).has(a6)
                  }, {
                    default: withCtx(() => [
                      renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a6, index: w12 }), () => [
                        createTextVNode(
                          toDisplayString(unref(getChainValue)(a6, l5.labelKey)),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["option", "disabled", "onCheck", "checked"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["class", "content-class", "content-style"])) : (openBlock(), createElementBlock(
              "div",
              {
                key: 2,
                class: normalizeClass(unref(o11).e("empty"))
              },
              [
                createVNode(unref(h6))
              ],
              2
              /* CLASS */
            ))
          ];
        }),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "content-class", "disabled"]));
    };
  }
});

// node_modules/ultra-ui/components/tree/di.js
var e13 = Symbol("TreeDIKey");

// node_modules/ultra-ui/venders/tree-node.vue_vue_type_script_setup_true_lang-DH1g7Aht.js
var J6 = defineComponent({
  name: "TreeNode",
  __name: "tree-node",
  props: {
    node: {},
    measureElement: { type: Function }
  },
  setup(h8) {
    const m6 = h8, {
      treeProps: n8,
      treeEmit: a6,
      cls: d9,
      getTreeSlotsNode: C7,
      getFlattedNodes: N4,
      handleCheck: p5,
      handleSelect: v6
    } = inject(e13);
    function c12() {
      const { node: e17 } = m6;
      e17.expanded = !e17.expanded, N4(), a6("expand", e17);
    }
    const y5 = () => {
      const { node: e17 } = m6;
      a6("node-click", e17), n8.selectable && v6(e17), n8.expandOnClickNode && c12(), n8.checkable && !e17.disabled && !n8.expandOnClickNode && p5(e17, !e17.checked);
    };
    return (e17, t10) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([
          unref(d9).e("node"),
          unref(e).is("expanded", e17.node.expanded),
          unref(e).is("disabled", e17.node.disabled)
        ]),
        style: normalizeStyle({
          paddingLeft: unref(f)(e17.node.depth * 20 - 20, "px")
        }),
        onClick: y5,
        onContextmenu: t10[2] || (t10[2] = (r7) => unref(a6)("node-contextmenu", r7, e17.node)),
        ref: e17.measureElement
      },
      [
        e17.node.isLeaf ? (openBlock(), createElementBlock(
          "i",
          {
            key: 1,
            class: normalizeClass(unref(d9).e("icon-placeholder"))
          },
          null,
          2
          /* CLASS */
        )) : (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass(unref(d9).e("expand-icon")),
          onClick: withModifiers(c12, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(arrow_right_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class"])),
        withDirectives((openBlock(), createElementBlock(
          "div",
          {
            class: normalizeClass(unref(d9).e("node-content"))
          },
          [
            unref(n8).checkable ? (openBlock(), createBlock(U2, {
              key: 0,
              "model-value": e17.node.checked,
              indeterminate: e17.node.indeterminate,
              "onUpdate:modelValue": t10[0] || (t10[0] = (r7) => unref(p5)(e17.node, r7)),
              disabled: e17.node.disabled,
              onClick: t10[1] || (t10[1] = withModifiers(() => {
              }, ["stop"])),
              class: normalizeClass(unref(d9).e("checkbox"))
            }, null, 8, ["model-value", "indeterminate", "disabled", "class"])) : createCommentVNode("v-if", true),
            createVNode(unref(d3), {
              content: unref(C7)({ node: e17.node, data: e17.node.data })
            }, null, 8, ["content"])
          ],
          2
          /* CLASS */
        )), [
          [
            unref(T),
            (unref(n8).checkable || unref(n8).selectable) && !e17.node.disabled ? unref(d9).e("ripple") : false
          ]
        ])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    ));
  }
});

// node_modules/ultra-ui/components/tree/use-select.js
function f10(s13) {
  const { emit: c12, props: u5, nodeDict: d9 } = s13, e17 = shallowRef();
  let l5 = false;
  return watch(
    [() => u5.selected, d9],
    ([t10]) => {
      var a6;
      l5 || (e17.value = t10 ? (a6 = d9.value.get(t10)) == null ? void 0 : a6.data : void 0, c12("selected-synced", e17.value));
    },
    { immediate: true }
  ), {
    selected: e17,
    handleSelect: (t10) => {
      var a6;
      l5 = true, !t10.disabled && (e17.value = t10.data === e17.value ? void 0 : t10.data, c12("update:selected", (a6 = e17.value) == null ? void 0 : a6[u5.valueKey], e17.value, t10), nextTick(() => {
        l5 = false;
      }));
    }
  };
}

// node_modules/ultra-ui/components/tree/use-check.js
function g7(k6) {
  const { emit: m6, props: i4, nodeDict: u5 } = k6, r7 = shallowReactive(/* @__PURE__ */ new Set());
  let n8 = false, h8 = false;
  watch(
    [() => i4.checked, u5],
    ([a6, d9], [c12]) => {
      n8 || !i4.checkable || d9.size && (h8 = true, c12 == null || c12.forEach((e17) => {
        const t10 = d9.get(e17);
        t10 && (t10.checked = false, r7.delete(t10.data));
      }), a6 == null || a6.forEach((e17) => {
        const t10 = d9.get(e17);
        t10 && (r7.add(t10.data), t10.checked = true);
      }), nextTick(() => {
        h8 = false;
      }));
    },
    { immediate: true }
  ), watch(r7, (a6) => {
    if (h8) return;
    n8 = true;
    const d9 = Array.from(a6);
    m6(
      "update:checked",
      d9.map((c12) => c12[i4.valueKey]),
      d9
    ), nextTick(() => {
      n8 = false;
    });
  });
  function p5(a6, d9) {
    const { checkStrictly: c12 } = i4;
    if (d9) {
      if (Tree.dft(a6, (e17) => {
        e17.disabled || (e17.checked = true, r7.add(e17.data));
      }), !c12) {
        let e17 = a6.parent;
        for (; e17 && e17.depth > 0; )
          e17.checked = e17.children.every((t10) => t10.checked), e17.checked ? (e17.indeterminate = false, r7.add(e17.data)) : e17.indeterminate = true, e17 = e17.parent;
      }
    } else if (Tree.dft(a6, (e17) => {
      e17.checked = false, e17.indeterminate = false, r7.delete(e17.data);
    }), !c12) {
      let e17 = a6.parent;
      for (; e17 && e17.depth > 0; )
        e17.checked = false, r7.delete(e17.data), e17.indeterminate = e17.children.some((t10) => t10.indeterminate) || e17.children.some((t10) => t10.checked), e17 = e17.parent;
    }
  }
  return {
    checked: r7,
    handleCheck: p5
  };
}

// node_modules/ultra-ui/venders/tree.vue_vue_type_script_setup_true_lang-C8iqRvbu.js
var q6 = Object.defineProperty;
var M6 = (o11, n8, c12) => n8 in o11 ? q6(o11, n8, { enumerable: true, configurable: true, writable: true, value: c12 }) : o11[n8] = c12;
var r5 = (o11, n8, c12) => M6(o11, typeof n8 != "symbol" ? n8 + "" : n8, c12);
var P6 = class extends TreeNode {
  constructor(c12) {
    const { data: a6, index: v6, parent: d9, labelKey: x12, valueKey: K6 } = c12;
    super(a6, v6);
    r5(this, "parent", null);
    r5(this, "children");
    r5(this, "expanded", false);
    r5(this, "loading", false);
    r5(this, "loaded", false);
    r5(this, "checked", false);
    r5(this, "indeterminate", false);
    r5(this, "disabled", false);
    r5(this, "visible", true);
    r5(this, "labelKey");
    r5(this, "valueKey");
    return d9 && (this.parent = d9), this.labelKey = x12, this.valueKey = K6, shallowReactive(this);
  }
  get parentExpanded() {
    return this.parent ? this.parent.expanded || this.depth === 1 : true;
  }
  get label() {
    return String(getChainValue(this.data, this.labelKey));
  }
  get key() {
    return getChainValue(this.data, this.valueKey);
  }
};
var Ae = defineComponent({
  name: "Tree",
  __name: "tree",
  props: {
    expandAll: { type: Boolean },
    expandOnClickNode: { type: Boolean, default: false },
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    childrenKey: { default: "children" },
    data: { default: () => [] },
    disabledNode: {},
    checkable: { type: Boolean },
    selectable: { type: Boolean },
    checkStrictly: { type: Boolean, default: false },
    selected: {},
    checked: {},
    slots: {}
  },
  emits: ["expand", "node-click", "update:selected", "update:checked", "node-contextmenu", "selected-synced"],
  setup(o11, { expose: n8, emit: c12 }) {
    const a6 = o11, v6 = c12, d9 = e("tree"), { formProps: x12 } = i2(), { size: K6 } = g([x12 ?? {}, a6], {
      size: "default"
    }), B7 = shallowRef(), D4 = computed(() => [
      d9.b,
      d9.m(K6.value),
      e.is("selectable", a6.selectable),
      e.is("checkable", a6.checkable)
    ]), H4 = useSlots(), O7 = (t10) => {
      var e17, l5;
      return ((l5 = ((e17 = a6.slots) == null ? void 0 : e17.default) ?? H4.default) == null ? void 0 : l5(t10)) ?? t10.node.label;
    }, i4 = computed(() => {
      const { disabledNode: t10 } = a6;
      return Forest.create(a6.data, {
        createNode: t10 ? (e17, l5) => {
          const f11 = new P6({
            data: e17,
            index: l5,
            valueKey: a6.valueKey,
            labelKey: a6.labelKey
          });
          return e17 && (f11.disabled = t10(e17, f11) ?? false), f11;
        } : (e17, l5) => new P6({
          data: e17,
          index: l5,
          valueKey: a6.valueKey,
          labelKey: a6.labelKey
        })
      });
    });
    watch(
      [() => a6.expandAll, i4],
      ([t10, e17]) => {
        t10 && e17.dft((l5) => {
          l5.expanded = true;
        });
      },
      { immediate: true }
    );
    const u5 = shallowRef([]), E11 = computed(() => {
      const t10 = /* @__PURE__ */ new Map();
      return i4.value.dft((e17) => {
        t10.set(e17.key, e17);
      }), t10;
    });
    function _10() {
      const t10 = [];
      i4.value.dft((e17) => {
        if (!e17.parentExpanded) return false;
        e17.visible && t10.push(e17);
      }), u5.value = t10;
    }
    watch(
      i4,
      () => {
        _10();
      },
      { immediate: true }
    );
    const b10 = /* @__PURE__ */ new Set(), U3 = /* @__PURE__ */ new Set();
    function Y3(t10, e17) {
      return e17 ? t10.label.includes(e17) : true;
    }
    function F6(t10) {
      t10.visible = true;
      let e17 = t10.parent;
      for (; e17 && e17.depth !== 0 && !b10.has(e17); )
        b10.add(e17), e17.expanded = true, e17.visible = true, e17 = e17.parent;
      t10.isLeaf || b10.add(t10);
    }
    function j5(t10) {
      b10.clear(), typeof t10 == "string" ? i4.value.dft((e17) => {
        Y3(e17, t10) ? F6(e17) : e17.visible = false;
      }) : i4.value.dft((e17) => {
        t10(e17) ? F6(e17) : e17.visible = false;
      }), _10();
    }
    const { handleSelect: z5, selected: y5 } = f10({
      props: a6,
      emit: v6,
      nodeDict: E11
    }), { checked: g10, handleCheck: N4 } = g7({
      props: a6,
      emit: v6,
      nodeDict: E11
    }), { totalHeight: G4, virtualList: J7, scrollTo: w12, virtualEnabled: C7, measureElement: Q5 } = j3({
      count: computed(() => u5.value.length),
      estimateSize: () => 40,
      gap: 2,
      virtualThreshold: 80,
      scrollEl: computed(() => {
        var t10;
        return ((t10 = B7.value) == null ? void 0 : t10.containerRef) ?? null;
      })
    }), W6 = computed(() => {
      const t10 = u5.value;
      return J7.value.map((e17) => {
        const l5 = t10[e17.index];
        return {
          node: l5,
          key: l5.key || e17.key,
          offset: e17.start,
          index: e17.index
        };
      });
    });
    return provide(e13, {
      cls: d9,
      selected: y5,
      checked: g10,
      getFlattedNodes: _10,
      getTreeSlotsNode: O7,
      hiddenNodes: U3,
      treeEmit: v6,
      treeProps: a6,
      handleCheck: N4,
      handleSelect: z5
    }), n8({
      filter: j5,
      forest: i4,
      nodes: u5,
      checkNode: N4,
      selectNode: z5,
      checkAll(t10) {
        i4.value.nodes.forEach((e17) => {
          N4(e17, t10);
        });
      },
      getSelected() {
        return y5.value;
      },
      getChecked() {
        return Array.from(g10);
      },
      scrollTo: w12,
      scrollToSelected() {
        w12(u5.value.findIndex((t10) => t10.data === y5.value));
      },
      scrollToChecked() {
        w12(u5.value.findLastIndex((t10) => g10.has(t10.data)));
      }
    }), (t10, e17) => (openBlock(), createBlock(unref(fe2), {
      class: normalizeClass(D4.value),
      ref_key: "scrollRef",
      ref: B7,
      "content-style": {
        height: unref(C7) ? unref(f)(unref(G4), "px") : void 0
      },
      "content-class": [unref(d9).e("wrap"), unref(e).is("virtual", unref(C7))]
    }, {
      default: withCtx(() => [
        unref(C7) ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList(W6.value, ({ node: l5, key: f11, offset: X5, index: Z3 }) => (openBlock(), createBlock(J6, {
            node: l5,
            key: f11,
            class: normalizeClass(unref(e).is("selected", l5.data === unref(y5))),
            "data-index": Z3,
            "measure-element": unref(Q5),
            style: normalizeStyle({
              transform: `translateY(${X5}px)`
            })
          }, null, 8, ["node", "class", "data-index", "measure-element", "style"]))),
          128
          /* KEYED_FRAGMENT */
        )) : (openBlock(true), createElementBlock(
          Fragment,
          { key: 1 },
          renderList(u5.value, (l5) => (openBlock(), createBlock(J6, {
            node: l5,
            key: l5.key,
            class: normalizeClass(unref(e).is("selected", l5.data === unref(y5)))
          }, null, 8, ["node", "class"]))),
          128
          /* KEYED_FRAGMENT */
        )),
        u5.value.length ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(unref(d9).e("empty"))
          },
          [
            createVNode(unref(h6))
          ],
          2
          /* CLASS */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class", "content-style", "content-class"]));
  }
});

// node_modules/ultra-ui/venders/multi-tree-select.vue_vue_type_script_setup_true_lang-DzEffHuM.js
var _e2 = { key: 2 };
var Le = defineComponent({
  name: "MultiTreeSelect",
  __name: "multi-tree-select",
  props: mergeModels({
    modelValue: {},
    placeholder: { default: "请选择" },
    clearable: { type: Boolean, default: true },
    filterable: { type: Boolean, default: false },
    visibilityLimit: { default: 3 },
    minWidth: { default: "280px" },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {},
    expandAll: { type: Boolean, default: true },
    expandOnClickNode: { type: Boolean },
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    childrenKey: {},
    data: {},
    disabledNode: {},
    checkStrictly: { type: Boolean },
    slots: {}
  }, {
    modelValue: {
      default: () => []
    },
    modelModifiers: {}
  }),
  emits: mergeModels(["clear", "change"], ["update:modelValue"]),
  setup(F6, { emit: q8 }) {
    const o11 = e("multi-tree-select"), m6 = F6, Y3 = computed(() => omit(m6, [
      "tips",
      "field",
      "placeholder",
      "disabled",
      "label",
      "readonly"
    ])), V6 = q8, j5 = useSlots(), B7 = shallowRef("");
    watch(B7, (l5) => {
      var t10;
      (t10 = k6.value) == null || t10.filter(l5);
    });
    const r7 = useModel(F6, "modelValue"), T6 = shallowRef(false), n8 = shallowRef([]), { formProps: x12 } = i2(), { size: y5, disabled: b10, readonly: K6 } = g([
      x12 ?? {},
      m6
    ]), G4 = computed(() => {
      var l5;
      return m6.clearable && ((l5 = r7.value) == null ? void 0 : l5.length) && T6.value && !b10.value;
    }), k6 = shallowRef(), H4 = shallowRef();
    let $12 = false;
    function N4() {
      $12 = true, nextTick(() => {
        $12 = false;
      });
    }
    const P8 = computed(() => {
      var l5, t10;
      return ((l5 = r7.value) == null ? void 0 : l5.length) === ((t10 = k6.value) == null ? void 0 : t10.forest.size);
    }), I4 = computed(() => r7.value.length > 0 && !P8.value), J7 = (l5) => {
      var t10;
      (t10 = k6.value) == null || t10.checkAll(l5);
    }, Q5 = (l5, t10) => {
      N4(), n8.value = t10, V6("change", t10);
    }, X5 = (l5) => {
      N4(), n8.value = n8.value.filter((t10, a6) => a6 !== l5), r7.value = r7.value.filter((t10, a6) => a6 !== l5), V6("change", n8.value);
    }, Z3 = () => {
      N4(), n8.value = [], r7.value = [], V6("clear");
    }, E11 = shallowRef(/* @__PURE__ */ new Map());
    watch(
      () => m6.data,
      (l5) => {
        if (!(l5 != null && l5.length))
          E11.value = /* @__PURE__ */ new Map();
        else {
          const t10 = /* @__PURE__ */ new Map();
          l5.forEach((a6) => {
            Tree.dft(
              a6,
              (w12) => {
                t10.set(w12[m6.valueKey], w12);
              },
              m6.childrenKey
            );
          }), E11.value = t10;
        }
      },
      { immediate: true }
    ), watch(
      [E11, r7],
      ([l5, t10]) => {
        if (!$12) {
          if (!l5.size || !t10.length) {
            n8.value = [];
            return;
          }
          n8.value = t10.filter((a6) => l5.has(a6)).map((a6) => l5.get(a6));
        }
      },
      { immediate: true }
    ), watch(k6, (l5) => {
      l5 && r7.value !== void 0 && nextTick(() => {
        l5.scrollToChecked();
      });
    });
    const _10 = () => {
      var t10;
      let { visibilityLimit: l5 } = m6;
      return l5 < 0 && (l5 = 0), (b10.value || K6.value) && (l5 = ((t10 = r7.value) == null ? void 0 : t10.length) ?? 0), l5;
    }, ee3 = computed(() => n8.value.length > _10() ? n8.value.slice(0, _10()) : n8.value), A11 = computed(() => n8.value.length > _10() ? n8.value.length - _10() : 0);
    return (l5, t10) => unref(K6) ? r7.value.length ? (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass([unref(o11).m(unref(y5)), unref(o11).e("readonly-tags")])
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(o11).e("tags"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(n8.value, (a6) => (openBlock(), createBlock(
                unref(A3),
                {
                  key: a6[l5.valueKey]
                },
                {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(a6[l5.labelKey]),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    )) : (openBlock(), createElementBlock(
      "span",
      _e2,
      toDisplayString(unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      class: normalizeClass([unref(o11).b, unref(o11).m(unref(y5)), unref(e).is("disabled", unref(b10))]),
      trigger: "click",
      "content-class": [unref(o11).e("panel"), unref(o11).em("panel", unref(y5))],
      onMouseenter: t10[2] || (t10[2] = (a6) => T6.value = true),
      onMouseleave: t10[3] || (t10[3] = (a6) => T6.value = false),
      ref_key: "dropdownRef",
      ref: H4,
      "min-width": l5.minWidth
    }, {
      trigger: withCtx(() => [
        createCommentVNode(" 默认展示 "),
        withDirectives(createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(o11).e("placeholder"))
          },
          toDisplayString(l5.placeholder),
          3
          /* TEXT, CLASS */
        ), [
          [vShow, !n8.value.length]
        ]),
        createCommentVNode(" 选择的数据项 "),
        n8.value.length ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(unref(o11).e("tags"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(ee3.value, (a6, w12) => (openBlock(), createBlock(unref(A3), {
                key: a6[l5.valueKey],
                closable: !unref(b10),
                onClose: (we3) => X5(w12)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(a6[l5.labelKey]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["closable", "onClose"]))),
              128
              /* KEYED_FRAGMENT */
            )),
            A11.value > 0 ? (openBlock(), createBlock(unref(A3), { key: 0 }, {
              default: withCtx(() => [
                createTextVNode(
                  "+" + toDisplayString(A11.value),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" 清空 icon "),
        createVNode(Transition, {
          name: "zoom-in",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            G4.value ? (openBlock(), createBlock(unref(k), {
              key: 0,
              class: normalizeClass(unref(o11).e("clear")),
              onClick: withModifiers(Z3, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])) : unref(K6) ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(k), {
              key: 1,
              class: normalizeClass(unref(o11).e("arrow"))
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"]))
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      content: withCtx(() => [
        createCommentVNode(" 全选 "),
        createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(o11).e("content-header"), unref(o11).m(unref(y5))])
          },
          [
            createVNode(unref(U2), {
              "model-value": P8.value,
              indeterminate: I4.value,
              "onUpdate:modelValue": J7
            }, {
              default: withCtx(() => t10[4] || (t10[4] = [
                createTextVNode(" 全选 ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["model-value", "indeterminate"])
          ],
          2
          /* CLASS */
        ),
        createCommentVNode(" 过滤器 "),
        l5.filterable ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass([unref(o11).e("content-filter"), unref(o11).m(unref(y5))])
          },
          [
            createVNode(unref(Ve), {
              placeholder: "输入关键字进行过滤",
              modelValue: B7.value,
              "onUpdate:modelValue": t10[0] || (t10[0] = (a6) => B7.value = a6)
            }, {
              suffix: withCtx(() => [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(search_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" 菜单列表 "),
        createVNode(unref(Ae), mergeProps(Y3.value, {
          checked: r7.value,
          "onUpdate:checked": [
            t10[1] || (t10[1] = (a6) => r7.value = a6),
            Q5
          ],
          ref_key: "treeRef",
          ref: k6,
          class: unref(o11).e("content-tree"),
          checkable: "",
          data: l5.data,
          slots: j5
        }), null, 16, ["checked", "class", "data"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class", "content-class", "min-width"]));
  }
});

// node_modules/ultra-ui/venders/number.vue_vue_type_script_setup_true_lang-CEPDDS_A.js
var _9 = defineComponent({
  name: "Number",
  __name: "number",
  props: {
    value: {},
    format: { default: "decimal" },
    align: {},
    tween: { type: Boolean },
    duration: { default: 800 },
    precision: { default: 0 }
  },
  setup(o11) {
    const e17 = o11, t10 = reactive({
      value: 0
    }), u5 = computed(
      () => e17.tween ? new Tween(t10, {
        duration: e17.duration,
        easingFunction: Tween.easing.easeInOutQuad
      }) : null
    ), i4 = computed(() => n.formatter({
      currency: e17.format === "currency" ? "CNY" : void 0,
      style: e17.format,
      precision: e17.precision
    })), c12 = computed(() => i4.value.format(t10.value));
    return watch(
      () => e17.value,
      () => {
        var n8;
        e17.tween ? (n8 = u5.value) == null || n8.to({ value: e17.value }) : t10.value = e17.value;
      },
      { immediate: true }
    ), (n8, d9) => toDisplayString(c12.value);
  }
});

// node_modules/ultra-ui/venders/number-input.vue_vue_type_script_setup_true_lang-CQ5fhQjl.js
var ve2 = { key: 1 };
var De4 = defineComponent({
  name: "NumberInput",
  __name: "number-input",
  props: mergeModels({
    modelValue: {},
    currency: { type: Boolean },
    precision: {},
    minPrecision: {},
    maxPrecision: {},
    step: { type: [Boolean, Number] },
    max: {},
    min: {},
    placeholder: { default: "请输入" },
    prefix: {},
    suffix: {},
    clearable: { type: Boolean, default: true },
    nativeReadonly: { type: Boolean },
    pattern: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "change"], ["update:modelValue"]),
  setup(B7, { emit: O7 }) {
    const a6 = B7, Y3 = O7, { formProps: $12 } = i2(), { size: C7, disabled: l5, readonly: N4 } = g(
      [$12 ?? {}, a6],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), j5 = computed(() => obj(a6).pick(["clearable", "disabled", "placeholder", "size"])), D4 = shallowRef(), M8 = computed(() => {
      var e17;
      return (e17 = D4.value) == null ? void 0 : e17.el;
    }), y5 = e("number-input"), q8 = computed(() => [y5.b, y5.m(C7.value)]), o11 = useModel(B7, "modelValue"), u5 = shallowRef(""), b10 = shallowRef(false), h8 = computed(() => {
      const { step: e17 } = a6;
      return e17 === void 0 || typeof e17 == "boolean" ? 1 : e17;
    }), z5 = computed(() => {
      const { max: e17 } = a6;
      return isUndef(e17) || isUndef(o11.value) ? true : o11.value < e17;
    }), F6 = computed(() => {
      const { min: e17 } = a6;
      return isUndef(e17) || isUndef(o11.value) ? true : o11.value > e17;
    });
    function w12(e17) {
      var m6, A11;
      if (!e17 && e17 !== 0) return "";
      const {
        currency: n8,
        precision: r7,
        minPrecision: d9,
        // 如果没有指定最大精度那么设置默认为值和步长值中的较大值
        maxPrecision: p5 = Math.max(
          ((m6 = String(o11.value).split(".")[1]) == null ? void 0 : m6.length) ?? 0,
          ((A11 = String(h8.value).split(".")[1]) == null ? void 0 : A11.length) ?? 0
        )
      } = a6;
      return n8 ? n(e17).currency("CNY", {
        precision: r7,
        minPrecision: d9,
        maxPrecision: p5
      }) : n(e17).fixed(
        r7 ?? {
          minPrecision: d9,
          maxPrecision: p5
        }
      );
    }
    watch(
      [o11, b10, () => a6.currency],
      ([e17, n8]) => {
        n8 || (u5.value = w12(e17));
      },
      { immediate: true }
    );
    function G4(e17) {
      if (!e17) return;
      const n8 = +e17.replace(/\,/g, ""), r7 = isNaN(n8) ? o11.value : n8;
      if (r7 === void 0) return;
      const { precision: d9, maxPrecision: p5, minPrecision: m6 } = a6;
      return +n(r7).fixed(
        d9 ?? {
          minPrecision: m6,
          maxPrecision: p5
        }
      );
    }
    function _10(e17) {
      if (e17 === void 0) return e17;
      const { min: n8, max: r7 } = a6;
      return n8 !== void 0 && e17 < n8 ? n8 : r7 !== void 0 && e17 > r7 ? r7 : e17;
    }
    function H4(e17) {
      const n8 = G4(e17);
      o11.value = _10(n8) ?? 0, u5.value = e17;
    }
    function J7() {
      Y3("change", o11.value);
    }
    const c12 = new Tween(
      { n: o11.value ?? 0 },
      {
        onUpdate(e17) {
          const n8 = M8.value;
          n8 && (n8.value = w12(e17.n));
        },
        // 动画进行的过程值有可能被改变, 因此在onComplete中确保还原的是原本的值
        onComplete() {
          const e17 = M8.value;
          e17 && (e17.value = w12(o11.value));
        }
      }
    );
    function R7() {
      if (l5.value) return;
      const e17 = o11.value ?? 0;
      c12.state.n = e17;
      const n8 = _10(n.plus(e17, h8.value));
      o11.value = n8, c12.to({ n: n8 });
    }
    function U3() {
      if (l5.value) return;
      const e17 = o11.value ?? 0;
      c12.state.n = e17;
      const n8 = _10(n.minus(e17, h8.value));
      o11.value = n8, c12.to({ n: n8 });
    }
    function L5(e17) {
      if (a6.step) {
        if (e17.key === "ArrowUp")
          return e17.preventDefault(), R7();
        if (e17.key === "ArrowDown")
          return e17.preventDefault(), U3();
      }
    }
    function Q5() {
      if (b10.value = true, o11.value === void 0) return;
      const { precision: e17, maxPrecision: n8, minPrecision: r7 } = a6;
      o11.value = +n(o11.value).fixed(
        e17 ?? {
          maxPrecision: n8,
          minPrecision: r7
        }
      );
    }
    function W6() {
      b10.value = false, o11.value = a6.modelValue;
    }
    return (e17, n8) => unref(N4) ? (openBlock(), createElementBlock(
      "span",
      ve2,
      toDisplayString(u5.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(Ve), mergeProps({
      key: 0,
      ref_key: "inputRef",
      ref: D4,
      class: q8.value,
      "model-value": u5.value
    }, j5.value, {
      "onUpdate:modelValue": H4,
      onChange: J7,
      onKeydown: withModifiers(L5, ["stop"]),
      onFocus: Q5,
      onBlur: W6,
      size: unref(C7),
      readonly: unref(N4),
      disabled: unref(l5)
    }), createSlots({
      _: 2
      /* DYNAMIC */
    }, [
      e17.step !== void 0 && e17.step !== false ? {
        name: "suffix",
        fn: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(y5).e("step"))
            },
            [
              withDirectives((openBlock(), createBlock(unref(k), {
                onClick: R7,
                class: normalizeClass(unref(e).is("disabled", unref(l5) || !z5.value))
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_up_default))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])), [
                [unref(T), !unref(l5) && z5.value]
              ]),
              withDirectives((openBlock(), createBlock(unref(k), {
                onClick: U3,
                class: normalizeClass(unref(e).is("disabled", unref(l5) || !F6.value))
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_down_default))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])), [
                [unref(T), !unref(l5) && F6.value]
              ])
            ],
            2
            /* CLASS */
          )
        ]),
        key: "0"
      } : void 0
    ]), 1040, ["class", "model-value", "size", "readonly", "disabled"]));
  }
});

// node_modules/ultra-ui/venders/select.vue_vue_type_script_setup_true_lang-BoG2QHSb.js
var we2 = ["onClick", "data-index"];
var Ke2 = ["onClick"];
var xe = { key: 1 };
var je2 = defineComponent({
  name: "Select",
  __name: "select",
  props: mergeModels({
    modelValue: {},
    text: {},
    options: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    clearable: { type: Boolean, default: true },
    placeholder: { default: "请选择" },
    filterable: { type: Boolean },
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {},
    text: {},
    textModifiers: {}
  }),
  emits: mergeModels(["update:label", "update:modelValue", "change"], ["update:modelValue", "update:text"]),
  setup(g10, { emit: W6 }) {
    const u5 = g10, X5 = W6, o11 = e("select"), N4 = o11.e("option"), { formProps: Z3 } = i2(), { size: F6, disabled: B7, readonly: ee3 } = g(
      [Z3 ?? {}, u5],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), p5 = useModel(g10, "modelValue"), R7 = useModel(g10, "text"), n8 = shallowRef(), O7 = shallowRef(), _10 = shallowRef(), le4 = computed(() => u5.filterable || typeof u5.options == "function"), { queryString: k6, options: y5 } = w10({
      props: u5
    });
    let $12 = false, S8 = false;
    watch(
      [p5, y5],
      ([l5, t10]) => {
        if (!(!(t10 != null && t10.length) || $12)) {
          if (S8 = true, l5 !== void 0) {
            const { valueKey: i4 } = u5;
            n8.value = t10.find((a6) => a6[i4] === l5);
          } else
            n8.value = void 0;
          S8 = false;
        }
      },
      { immediate: true }
    ), watch(n8, (l5) => {
      S8 || ($12 = true, p5.value = (l5 == null ? void 0 : l5[u5.valueKey]) ?? "", R7.value = (l5 == null ? void 0 : l5[u5.labelKey]) ?? "", $12 = false);
    });
    const { virtualList: P8, totalHeight: ae4, virtualEnabled: C7, scrollTo: te6, measureElement: oe6 } = j3({
      count: computed(() => y5.value.length),
      virtualThreshold: 80,
      scrollEl: computed(() => {
        var l5;
        return ((l5 = _10.value) == null ? void 0 : l5.containerRef) ?? null;
      }),
      gap: 2,
      estimateSize: () => 40
    }), se4 = computed(() => {
      const l5 = y5.value, { labelKey: t10, valueKey: i4 } = u5;
      return P8.value.map((a6) => {
        const s13 = l5[a6.index];
        return {
          option: s13,
          index: a6.index,
          label: getChainValue(s13, t10),
          val: getChainValue(s13, i4),
          key: a6.key,
          offset: a6.start
        };
      });
    });
    watch(_10, (l5) => {
      l5 && p5.value !== void 0 && nextTick(() => {
        var t10, i4, a6, s13;
        if (C7.value) {
          const b10 = (t10 = P8.value.find(
            (E11) => E11 === n8.value
          )) == null ? void 0 : t10.index;
          b10 !== void 0 && te6(b10);
        } else
          (s13 = (a6 = (i4 = _10.value) == null ? void 0 : i4.contentRef) == null ? void 0 : a6.getElementsByClassName("is-selected")[0]) == null || s13.scrollIntoView();
      });
    });
    const z5 = shallowRef(false);
    watch(z5, (l5) => {
      l5 || (k6.value = "");
    });
    const D4 = (l5) => {
      var t10;
      n8.value = l5, (t10 = O7.value) == null || t10.close(), X5("change", l5);
    }, re6 = () => {
      n8.value = void 0;
    };
    return (l5, t10) => {
      var i4;
      return unref(ee3) ? (openBlock(), createElementBlock(
        "span",
        xe,
        toDisplayString(R7.value || ((i4 = n8.value) == null ? void 0 : i4[l5.labelKey]) || unref(E)),
        1
        /* TEXT */
      )) : (openBlock(), createBlock(unref(oe2), {
        key: 0,
        trigger: "click",
        class: normalizeClass([unref(o11).b, unref(e).is("disabled", unref(B7))]),
        ref_key: "dropdownRef",
        ref: O7,
        visible: z5.value,
        "onUpdate:visible": t10[1] || (t10[1] = (a6) => z5.value = a6),
        "content-class": [unref(o11).e("panel"), unref(o11).em("panel", unref(F6))],
        disabled: unref(B7)
      }, {
        trigger: withCtx(() => [
          createVNode(unref(Ve), {
            size: unref(F6),
            disabled: unref(B7),
            placeholder: l5.placeholder,
            clearable: l5.clearable,
            "model-value": n8.value ? unref(getChainValue)(n8.value, l5.labelKey) ?? R7.value : g10.modelValue,
            onClear: re6,
            "native-readonly": ""
          }, {
            suffix: withCtx(() => [
              createVNode(unref(k), {
                class: normalizeClass(unref(o11).e("arrow"))
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_down_default))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size", "disabled", "placeholder", "clearable", "model-value"])
        ]),
        content: withCtx(() => [
          createCommentVNode(" 过滤器 "),
          le4.value ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(unref(o11).e("content-filter"))
            },
            [
              createVNode(unref(Ve), {
                placeholder: "输入关键字进行搜索",
                modelValue: unref(k6),
                "onUpdate:modelValue": t10[0] || (t10[0] = (a6) => isRef(k6) ? k6.value = a6 : null)
              }, {
                suffix: withCtx(() => [
                  createVNode(unref(k), null, {
                    default: withCtx(() => [
                      createVNode(unref(search_default))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true),
          createCommentVNode(" 单选列表 "),
          unref(y5).length ? (openBlock(), createBlock(unref(fe2), {
            key: 1,
            tag: "ul",
            class: normalizeClass(unref(o11).e("options")),
            ref_key: "scrollRef",
            ref: _10,
            "content-class": [
              unref(o11).e("options-wrap"),
              unref(e).is("virtual", unref(C7))
            ],
            "content-style": {
              height: unref(C7) ? unref(f)(unref(ae4), "px") : void 0
            }
          }, {
            default: withCtx(() => [
              unref(C7) ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createCommentVNode(" @vue-ignore "),
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(se4.value, ({ option: a6, index: s13, val: b10, label: E11, key: ne3, offset: ie6 }) => withDirectives((openBlock(), createElementBlock("li", {
                      class: normalizeClass([unref(N4), unref(e).is("selected", b10 === p5.value)]),
                      onClick: (Be3) => D4(a6),
                      key: ne3,
                      style: normalizeStyle({
                        transform: `translateY(${ie6}px)`
                      }),
                      "data-index": s13,
                      ref_for: true,
                      ref: unref(oe6)
                    }, [
                      renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a6, index: s13 }), () => [
                        createTextVNode(
                          toDisplayString(E11),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 14, we2)), [
                      [unref(T), unref(o11).e("ripple")]
                    ])),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (openBlock(true), createElementBlock(
                Fragment,
                { key: 1 },
                renderList(unref(y5), (a6, s13) => withDirectives((openBlock(), createElementBlock("li", {
                  class: normalizeClass([
                    unref(N4),
                    unref(e).is("selected", unref(getChainValue)(a6, l5.valueKey) === p5.value)
                  ]),
                  onClick: (b10) => D4(a6),
                  key: unref(getChainValue)(a6, l5.valueKey)
                }, [
                  renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a6, index: s13 }), () => [
                    createTextVNode(
                      toDisplayString(unref(getChainValue)(a6, l5.labelKey)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 10, Ke2)), [
                  [unref(T), unref(o11).e("ripple")]
                ])),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["class", "content-class", "content-style"])) : (openBlock(), createElementBlock(
            "div",
            {
              key: 2,
              class: normalizeClass(unref(o11).e("empty"))
            },
            [
              createVNode(unref(h6))
            ],
            2
            /* CLASS */
          ))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "visible", "content-class", "disabled"]));
    };
  }
});

// node_modules/ultra-ui/venders/paginator.vue_vue_type_script_setup_true_lang-0gCEz_Nb.js
var oe5 = { key: 0 };
var re4 = ["onClick"];
var ie5 = { key: 0 };
var he2 = defineComponent({
  name: "Paginator",
  __name: "paginator",
  props: mergeModels({
    pageNumber: {},
    pageSize: {},
    size: {},
    total: { default: 0 },
    pageSizeOptions: {},
    simple: { type: Boolean }
  }, {
    pageNumber: {
      default: 1
    },
    pageNumberModifiers: {},
    pageSize: {},
    pageSizeModifiers: {}
  }),
  emits: mergeModels(["update:pageNumber", "update:pageSize"], ["update:pageNumber", "update:pageSize"]),
  setup(h8, { expose: P8 }) {
    const { config: M8 } = d2(), y5 = h8, o11 = e("paginator"), { size: R7 } = l([y5], {
      size: "default"
    }), t10 = useModel(h8, "pageNumber"), C7 = useModel(h8, "pageSize"), A11 = (l5) => {
      C7.value = l5;
    };
    function T6(l5) {
      t10.value !== l5 && (t10.value = l5);
    }
    watch(C7, () => {
      t10.value = 1;
    });
    const _10 = computed(() => C7.value ?? M8.paginator.pageSize), u5 = computed(() => Math.ceil(y5.total / _10.value)), V6 = computed(() => (y5.pageSizeOptions ?? M8.paginator.pageSizeOptions).map(
      (l5) => ({ label: `${l5}条`, value: l5 })
    )), B7 = computed(() => {
      const l5 = n(t10.value - 2).range(
        1,
        Math.max(u5.value - 4, 1)
      );
      return Array.from({ length: Math.min(u5.value, 5) }).map(
        (n8, a6) => l5 + a6
      );
    }), c12 = computed(() => t10.value <= 1), m6 = computed(() => t10.value >= u5.value);
    function J7() {
      c12.value || (t10.value = 1);
    }
    function L5() {
      m6.value || (t10.value = u5.value);
    }
    function O7() {
      c12.value || (t10.value -= 1);
    }
    function E11() {
      m6.value || (t10.value += 1);
    }
    function F6(l5) {
      const a6 = +l5.target.value;
      !isNaN(a6) && a6 > 0 && a6 <= u5.value && (t10.value = a6);
    }
    const v6 = reactive({
      first: false,
      last: false
    }), w12 = shallowRef();
    return P8({
      el: w12
    }), (l5, n8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(o11).b, unref(o11).m(unref(R7))]),
        ref_key: "paginatorRef",
        ref: w12
      },
      [
        createBaseVNode(
          "div",
          null,
          "共 " + toDisplayString(l5.total) + " 条",
          1
          /* TEXT */
        ),
        createVNode(unref(je2), {
          class: normalizeClass(unref(o11).e("size-select")),
          "model-value": _10.value,
          "onUpdate:modelValue": A11,
          size: "small",
          options: V6.value,
          clearable: false
        }, null, 8, ["class", "model-value", "options"]),
        l5.simple ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "ul",
          {
            key: 0,
            class: normalizeClass([unref(o11).e("pages")])
          },
          [
            withDirectives((openBlock(), createElementBlock(
              "li",
              {
                class: normalizeClass([unref(o11).e("btn"), unref(e).is("disabled", c12.value)]),
                onClick: J7,
                onMouseenter: n8[0] || (n8[0] = (a6) => v6.first = true),
                onMouseleave: n8[1] || (n8[1] = (a6) => v6.first = false)
              },
              [
                v6.first ? (openBlock(), createElementBlock("span", oe5, "1")) : (openBlock(), createBlock(unref(k), { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(unref(d_arrow_left_default))
                  ]),
                  _: 1
                  /* STABLE */
                }))
              ],
              34
              /* CLASS, NEED_HYDRATION */
            )), [
              [unref(T), !c12.value]
            ]),
            withDirectives((openBlock(), createElementBlock(
              "li",
              {
                class: normalizeClass([unref(o11).e("btn"), unref(e).is("disabled", t10.value === 1)]),
                onClick: O7
              },
              [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_left_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            )), [
              [unref(T), !c12.value]
            ]),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(B7.value, (a6) => withDirectives((openBlock(), createElementBlock("li", {
                key: a6,
                class: normalizeClass([unref(o11).e("btn"), unref(e).is("active", t10.value === a6)]),
                onClick: (ue2) => T6(a6)
              }, [
                createTextVNode(
                  toDisplayString(a6),
                  1
                  /* TEXT */
                )
              ], 10, re4)), [
                [unref(T)]
              ])),
              128
              /* KEYED_FRAGMENT */
            )),
            withDirectives((openBlock(), createElementBlock(
              "li",
              {
                class: normalizeClass([unref(o11).e("btn"), unref(e).is("disabled", m6.value)]),
                onClick: E11
              },
              [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            )), [
              [unref(T), !m6.value]
            ]),
            withDirectives((openBlock(), createElementBlock(
              "li",
              {
                class: normalizeClass([unref(o11).e("btn"), unref(e).is("disabled", m6.value)]),
                onClick: L5,
                onMouseenter: n8[2] || (n8[2] = (a6) => v6.last = true),
                onMouseleave: n8[3] || (n8[3] = (a6) => v6.last = false)
              },
              [
                v6.last ? (openBlock(), createElementBlock(
                  "span",
                  ie5,
                  toDisplayString(u5.value),
                  1
                  /* TEXT */
                )) : (openBlock(), createBlock(unref(k), { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(unref(d_arrow_right_default))
                  ]),
                  _: 1
                  /* STABLE */
                }))
              ],
              34
              /* CLASS, NEED_HYDRATION */
            )), [
              [unref(T), !m6.value]
            ])
          ],
          2
          /* CLASS */
        )),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(o11).e("jumper"))
          },
          [
            n8[5] || (n8[5] = createBaseVNode(
              "span",
              null,
              "前往",
              -1
              /* HOISTED */
            )),
            createVNode(unref(De4), {
              class: normalizeClass(unref(o11).e("page-input")),
              size: "small",
              min: 1,
              max: u5.value,
              precision: 0,
              "model-value": t10.value,
              clearable: false,
              onKeyup: withKeys(F6, ["enter"]),
              onChange: n8[4] || (n8[4] = (a6) => t10.value = a6)
            }, null, 8, ["class", "max", "model-value"]),
            createBaseVNode(
              "span",
              null,
              "/ " + toDisplayString(u5.value),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/password-input.vue_vue_type_script_setup_true_lang-BghQwdCL.js
var v5 = "●";
var D3 = defineComponent({
  name: "PasswordInput",
  __name: "password-input",
  props: mergeModels({
    modelValue: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(_10) {
    const c12 = e("password-input"), e17 = useModel(_10, "modelValue"), g10 = (d9) => {
      const t10 = d9.target, l5 = t10.value;
      if (!l5) {
        e17.value = l5;
        return;
      }
      if (!e17.value) {
        e17.value = l5;
        return;
      }
      const a6 = t10.selectionStart;
      let n8 = a6 === 0 ? "" : l5[a6 - 1];
      n8 === v5 && (n8 = "");
      const m6 = l5.length - a6, x12 = n8 === "" ? a6 : a6 - 1, k6 = e17.value.slice(0, x12), C7 = m6 === 0 ? "" : e17.value.slice(-m6);
      e17.value = k6 + n8 + C7, nextTick(() => {
        t10.selectionStart = a6, t10.selectionEnd = a6;
      });
    }, V6 = () => {
      e17.value = "";
    }, s13 = shallowRef(false), w12 = computed(() => s13.value ? e17.value : e17.value ? v5.repeat(e17.value.length) : ""), h8 = () => {
      s13.value = !s13.value;
    };
    return (d9, t10) => (openBlock(), createBlock(unref(Ve), {
      class: normalizeClass(unref(c12).b),
      "model-value": w12.value,
      "onNative:input": g10,
      "onUpdate:modelValue": t10[0] || (t10[0] = (l5) => !l5 && V6()),
      "onSuffix:click": h8
    }, {
      suffix: withCtx(() => [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(c12).e("visibility-toggle")),
              size: 14
            }, {
              default: withCtx(() => [
                s13.value ? (openBlock(), createBlock(unref(hide_default), { key: 0 })) : (openBlock(), createBlock(unref(view_default), { key: 1 }))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class", "model-value"]));
  }
});

// node_modules/ultra-ui/venders/progress.vue_vue_type_script_setup_true_lang-CApRrn1U.js
var C6 = { viewBox: "0 0 100 100" };
var V5 = ["stroke", "stroke-dasharray", "stroke-linecap"];
var d7 = 44;
var M7 = defineComponent({
  name: "Progress",
  __name: "progress",
  props: {
    type: { type: [String, Function], default: "primary" },
    size: {},
    percentage: {},
    circle: { type: Boolean, default: false }
  },
  setup(_10) {
    const p5 = _10, r7 = e("progress"), t10 = computed(() => n(p5.percentage ?? 0).range(0, 100)), c12 = computed(() => {
      const { type: e17 } = p5;
      return typeof e17 == "function" ? e17(t10.value) : e17;
    }), $12 = computed(() => [r7.b, e.is("circle", p5.circle), r7.m(c12.value)]), b10 = computed(() => `var(--color-${c12.value})`), u5 = 2 * Math.PI * d7, B7 = u5 / 4, N4 = computed(() => {
      const e17 = u5 * t10.value / 100;
      return `${e17}, ${u5 - e17}`;
    });
    return (e17, E11) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass($12.value)
      },
      [
        createCommentVNode(" 条形进度条 "),
        e17.circle ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" 环形进度条 "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(r7).e("circle")),
                style: normalizeStyle({ height: unref(f)(e17.size, "px"), width: unref(f)(e17.size, "px") })
              },
              [
                (openBlock(), createElementBlock("svg", C6, [
                  createBaseVNode("circle", {
                    cx: "50",
                    cy: "50",
                    r: d7,
                    fill: "none",
                    stroke: "#f5f8fa",
                    "stroke-width": "8"
                  }),
                  createBaseVNode("circle", {
                    class: normalizeClass(unref(r7).e("circle-ring")),
                    cx: "50",
                    cy: "50",
                    r: d7,
                    fill: "none",
                    stroke: b10.value,
                    "stroke-width": "8",
                    "stroke-dasharray": N4.value,
                    "stroke-dashoffset": B7,
                    "stroke-linecap": t10.value === 0 ? void 0 : "round"
                  }, null, 10, V5)
                ])),
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(r7).e("circle-content"))
                  },
                  [
                    renderSlot(e17.$slots, "default", normalizeProps(guardReactiveProps({ percentage: t10.value, type: c12.value })), () => [
                      createTextVNode(
                        toDisplayString(t10.value) + "% ",
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  2
                  /* CLASS */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(unref(r7).e("bar-wrap"))
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(r7).e("bar")),
                style: normalizeStyle({ width: t10.value + "%" })
              },
              [
                renderSlot(e17.$slots, "default", normalizeProps(guardReactiveProps({ percentage: t10.value, type: c12.value })), () => [
                  createTextVNode(
                    toDisplayString(t10.value) + "%",
                    1
                    /* TEXT */
                  )
                ])
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/radio.vue_vue_type_script_setup_true_lang-FpyTO45b.js
var R4 = ["value", "disabled"];
var A9 = defineComponent({
  name: "Radio",
  __name: "radio",
  props: mergeModels({
    value: {},
    modelValue: {},
    label: {},
    disabled: { type: Boolean, default: void 0 },
    tips: {},
    span: {},
    field: {},
    readonly: { type: Boolean },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue"], ["update:modelValue"]),
  setup(i4, { emit: S8 }) {
    const a6 = useModel(i4, "modelValue"), n8 = i4, e17 = e("radio"), { formProps: V6 } = i2(), { size: k6, disabled: r7 } = g([V6 ?? {}, n8], {
      size: "default",
      disabled: false
    }), m6 = computed(() => a6.value === n8.value), y5 = computed(() => [
      e17.b,
      e17.m(k6.value),
      e.is("disabled", r7.value),
      e.is("checked", m6.value)
    ]);
    return (t10, u5) => (openBlock(), createElementBlock(
      "label",
      {
        class: normalizeClass(y5.value)
      },
      [
        createCommentVNode(" radio框 "),
        createBaseVNode(
          "section",
          {
            class: normalizeClass(unref(e17).e("button"))
          },
          [
            withDirectives(createBaseVNode("input", {
              type: "radio",
              class: normalizeClass(unref(e17).e("native")),
              value: t10.value,
              "onUpdate:modelValue": u5[0] || (u5[0] = (C7) => a6.value = C7),
              disabled: unref(r7),
              hidden: ""
            }, null, 10, R4), [
              [vModelRadio, a6.value]
            ]),
            createVNode(Transition, { name: "zoom-in" }, {
              default: withCtx(() => [
                m6.value ? (openBlock(), createElementBlock(
                  "span",
                  {
                    key: 0,
                    class: normalizeClass(unref(e17).e("inner"))
                  },
                  null,
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true)
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        ),
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(e17).e("label"))
          },
          [
            renderSlot(t10.$slots, "default", {}, () => [
              createTextVNode(
                toDisplayString(t10.label),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/radio-group.vue_vue_type_script_setup_true_lang-B7B6B5C5.js
var R5 = { key: 1 };
var A10 = defineComponent({
  name: "RadioGroup",
  __name: "radio-group",
  props: mergeModels({
    modelValue: {},
    items: {},
    valueKey: { default: "value" },
    labelKey: { default: "label" },
    disabled: { type: Boolean, default: void 0 },
    disabledItem: {},
    block: { type: Boolean },
    tips: {},
    span: {},
    label: {},
    field: {},
    readonly: { type: Boolean, default: void 0 },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "change"], ["update:modelValue"]),
  setup(r7, { emit: f11 }) {
    const b10 = r7, d9 = useModel(r7, "modelValue"), y5 = f11, { formProps: c12 } = i2(), { size: v6, disabled: k6, readonly: V6 } = g(
      [c12 ?? {}, b10],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), g10 = e("radio-group"), K6 = (e17, t10) => {
      d9.value = e17, y5("change", t10);
    };
    return (e17, t10) => {
      var i4;
      return unref(V6) ? (openBlock(), createElementBlock(
        "span",
        R5,
        toDisplayString(((i4 = e17.items.find((l5) => l5[e17.valueKey] === d9.value)) == null ? void 0 : i4[e17.labelKey]) || unref(E)),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass([unref(g10).b, unref(e).is("block", e17.block)])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(e17.items, (l5) => {
              var m6;
              return openBlock(), createBlock(A9, {
                key: l5[e17.valueKey],
                value: l5[e17.valueKey],
                "onUpdate:modelValue": (h8) => K6(h8, l5),
                "model-value": d9.value,
                disabled: ((m6 = e17.disabledItem) == null ? void 0 : m6.call(e17, l5)) || unref(k6),
                size: unref(v6)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(l5[e17.labelKey]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["value", "onUpdate:modelValue", "model-value", "disabled", "size"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ));
    };
  }
});

// node_modules/ultra-ui/components/slider/di.js
var e14 = Symbol("sliderContextKey");

// node_modules/ultra-ui/components/slider/use-stops.js
var d8 = (u5) => {
  const { sliderProps: t10, sliderSize: r7 } = u5;
  let i4 = computed(() => {
    if (t10.step === 0)
      return console.error("step不应该为0"), [];
    const e17 = (t10.max - t10.min) / t10.step, s13 = r7.value * t10.step / (t10.max - t10.min);
    return Array.from({ length: e17 }).map(
      (p5, n8) => n8 * s13
    );
  });
  return { stops: i4, getStopStyle: (e17) => t10.vertical ? { bottom: `${e17}px` } : { left: `${e17}px` }, setStepButtonPosition: (e17) => {
    const s13 = [...i4.value, r7.value], o11 = s13.map((a6) => Math.abs(e17 - a6)), p5 = Math.min(...o11), n8 = o11.indexOf(p5);
    return s13[n8] ?? 0;
  } };
};

// node_modules/ultra-ui/venders/button.vue_vue_type_script_setup_true_lang-8ppvSR8-.js
var Q4 = defineComponent({
  __name: "button",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: mergeModels(["update:modelValue", "dragPosition", "dragEnd", "getDragPx"], ["update:modelValue"]),
  setup(_10, { emit: b10 }) {
    let h8 = inject(e14), { cls: p5, sliderSize: l5, sliderProps: t10, disabled: w12, setSliderBarSize: B7 } = h8;
    const m6 = useModel(_10, "modelValue"), { setStepButtonPosition: x12 } = d8({ sliderProps: t10, sliderSize: l5 });
    let v6 = shallowRef(), n8 = b10;
    const e17 = shallowReactive({
      x: 0,
      y: 0
    }), o11 = {
      x: 0,
      y: 0
    };
    watch(e17, (r7) => {
      B7(r7);
    });
    const D4 = computed(() => ({
      transform: `translate(${e17.x}px, ${e17.y}px)`
    })), c12 = shallowRef(0);
    let d9 = false;
    return watch([c12, l5], ([r7, i4]) => {
      if (i4) {
        if (d9) {
          const { min: s13, max: u5 } = t10;
          m6.value = Math.round(s13 + (u5 - s13) * r7);
        } else
          t10.vertical ? (e17.y = -r7 * i4, o11.y = e17.y) : (e17.x = r7 * i4, o11.x = e17.x);
        n8("dragEnd", m6.value), t10.range && (t10.vertical ? n8("dragPosition", e17.y) : n8("dragPosition", e17.x));
      }
    }), watch(
      m6,
      (r7) => {
        c12.value = (r7 - t10.min) / (t10.max - t10.min);
      },
      {
        immediate: true
      }
    ), w({
      target: v6,
      onDragStart(r7) {
        d9 = true;
      },
      onDrag(r7, i4, s13) {
        if (w12.value) return;
        const { vertical: u5 } = t10;
        let a6 = u5 ? o11.y + i4 : o11.x + r7;
        u5 ? a6 > 0 ? a6 = 0 : a6 < -l5.value && (a6 = -l5.value) : a6 < 0 ? a6 = 0 : a6 > l5.value && (a6 = l5.value), t10.vertical ? e17.y = a6 : e17.x = a6, t10.step && t10.step > 0 && (t10.vertical ? e17.y = -x12(Math.abs(a6)) : e17.x = x12(a6)), t10.range && (t10.vertical ? n8("dragPosition", e17.y) : n8("dragPosition", e17.x));
      },
      onDragEnd(r7, i4, s13) {
        o11.x = e17.x, o11.y = e17.y, c12.value = t10.vertical ? -o11.y / l5.value : o11.x / l5.value, nextTick(() => {
          d9 = false;
        });
      }
    }), (r7, i4) => (openBlock(), createElementBlock(
      "div",
      {
        style: normalizeStyle(D4.value),
        ref_key: "slideButtonRef",
        ref: v6,
        class: normalizeClass(unref(p5).e("button-wrap"))
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(p5).e("button"))
          },
          null,
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/components/slider/use-slide.js
var b9 = (i4, n8) => {
  let r7 = ref(0), h8 = ref(0), u5 = ref(0), f11 = ref(0);
  const l5 = shallowRef();
  s4({
    targets: l5,
    onResize([m6]) {
      var a6, t10;
      i4.vertical ? n8.value = (a6 = l5.value) == null ? void 0 : a6.offsetHeight : n8.value = (t10 = l5.value) == null ? void 0 : t10.offsetWidth;
    }
  });
  const e17 = shallowReactive({
    width: i4.vertical ? "100%" : "0%",
    height: "100%",
    left: "0px",
    bottom: "0px"
  });
  return {
    onePosition: r7,
    twoPosition: h8,
    barStyles: e17,
    minValue: u5,
    maxValue: f11,
    runwayRef: l5,
    updateSliderBarSize: ({ x: m6, y: a6 }) => {
      if (i4.range) {
        let t10 = Math.min(r7.value, h8.value), s13 = Math.max(r7.value, h8.value);
        i4.vertical ? (e17.bottom = `${-s13}px`, e17.height = `${s13 - t10}px`) : (e17.left = `${t10}px`, e17.width = `${s13 - t10}px`);
      } else
        i4.vertical ? (e17.height = `${-a6}px`, e17.width = "100%") : (e17.height = "100%", e17.width = `${m6}px`);
    }
  };
};

// node_modules/ultra-ui/venders/slider.vue_vue_type_script_setup_true_lang-CurQlGYP.js
var fe4 = { key: 1 };
var Be2 = defineComponent({
  name: "Slider",
  __name: "slider",
  props: mergeModels({
    modelValue: {},
    disabled: { type: Boolean, default: void 0 },
    vertical: { type: Boolean, default: false },
    height: { default: 300 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 0 },
    range: { type: Boolean, default: false },
    showStops: { type: Boolean },
    tips: {},
    span: {},
    label: {},
    field: {},
    readonly: { type: Boolean },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue"], ["update:modelValue"]),
  setup(S8, { emit: F6 }) {
    const e17 = S8, N4 = F6, u5 = e("slider"), { formProps: O7 } = i2(), { size: U3, disabled: V6, readonly: A11 } = g([
      O7 ?? {},
      e17
    ]), K6 = computed(() => [
      u5.b,
      u5.m(U3.value),
      e.is("vertical", e17.vertical),
      e.is("disabled", V6.value)
    ]), i4 = shallowRef(0), b10 = shallowRef(), {
      barStyles: L5,
      onePosition: X5,
      twoPosition: Y3,
      updateSliderBarSize: j5,
      runwayRef: w12,
      minValue: P8,
      maxValue: k6
    } = b9(e17, i4), { stops: q8, getStopStyle: G4, setStepButtonPosition: B7 } = d8({
      sliderProps: e17,
      sliderSize: i4
    }), H4 = computed(() => [u5.e("runway")]), l5 = useModel(S8, "modelValue");
    let o11 = ref(0), s13 = ref(0);
    const I4 = (a6) => {
      X5.value = a6;
    }, J7 = (a6) => {
      Y3.value = a6;
    };
    watch(
      () => l5.value,
      (a6) => {
        e17.range && isArray(l5.value) ? (o11.value = l5.value[0], s13.value = l5.value[1]) : o11.value = l5.value;
      },
      {
        immediate: true
      }
    ), watch(
      () => [b10.value, e17.min],
      (a6) => {
        l5.value || (l5.value = e17.range ? [e17.min, e17.min] : e17.min ?? 0);
      }
    );
    const M8 = async (a6) => {
      await nextTick(), e17.range && isArray(l5.value) ? (P8.value = Math.min(
        o11.value,
        s13.value
      ), k6.value = Math.max(
        o11.value,
        s13.value
      ), l5.value = [P8.value, k6.value]) : l5.value = o11.value;
    }, Q5 = (a6) => {
      if (e17.disabled) return;
      let n8 = shallowRef(0), t10 = shallowRef(0), m6 = a6.offsetX, y5 = a6.offsetY;
      if (e17.step && e17.step > 0 && (e17.vertical ? y5 = B7(Math.abs(y5)) : m6 = B7(m6)), n8.value = e17.vertical ? -(y5 - i4.value) / i4.value : m6 / i4.value, t10.value = Math.round(
        e17.min + (e17.max - e17.min) * n8.value
      ), e17.range) {
        let W6 = Math.abs(o11.value - t10.value), Z3 = Math.abs(s13.value - t10.value);
        W6 <= Z3 ? o11.value = t10.value : s13.value = t10.value, l5.value = [o11.value, s13.value];
      } else
        l5.value = t10.value;
    };
    return provide(e14, {
      sliderProps: e17,
      disabled: V6,
      runwayRef: w12,
      sliderSize: i4,
      model: l5,
      cls: u5,
      emit: N4,
      setSliderBarSize: j5
    }), (a6, n8) => unref(A11) ? (openBlock(), createElementBlock(
      "div",
      fe4,
      toDisplayString(l5.value),
      1
      /* TEXT */
    )) : (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(K6.value),
        ref_key: "sliderRef",
        ref: b10,
        style: normalizeStyle(a6.vertical ? { height: `${a6.height}px` } : void 0)
      },
      [
        createCommentVNode(" 跑道 "),
        createBaseVNode(
          "div",
          {
            ref_key: "runwayRef",
            ref: w12,
            class: normalizeClass(H4.value),
            onMousedown: Q5
          },
          [
            createCommentVNode(" 拖动覆盖条 "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(u5).e("bar")),
                style: normalizeStyle(unref(L5))
              },
              null,
              6
              /* CLASS, STYLE */
            ),
            createCommentVNode(" 手柄 "),
            createVNode(Q4, {
              modelValue: unref(o11),
              "onUpdate:modelValue": n8[0] || (n8[0] = (t10) => isRef(o11) ? o11.value = t10 : o11 = t10),
              onDragPosition: I4,
              onDragEnd: M8
            }, null, 8, ["modelValue"]),
            a6.range ? (openBlock(), createBlock(Q4, {
              key: 0,
              modelValue: unref(s13),
              "onUpdate:modelValue": n8[1] || (n8[1] = (t10) => isRef(s13) ? s13.value = t10 : s13 = t10),
              onDragPosition: J7,
              onDragEnd: M8
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
            createCommentVNode(" 断点 "),
            a6.showStops ? (openBlock(true), createElementBlock(
              Fragment,
              { key: 1 },
              renderList(unref(q8), (t10, m6) => (openBlock(), createElementBlock(
                "div",
                {
                  key: m6,
                  class: normalizeClass(unref(u5).e("stop")),
                  style: normalizeStyle(unref(G4)(t10))
                },
                null,
                6
                /* CLASS, STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            )) : createCommentVNode("v-if", true)
          ],
          34
          /* CLASS, NEED_HYDRATION */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/venders/steps.vue_vue_type_script_setup_true_lang--5IxH31h.js
var w11 = ["onClick"];
var L4 = { key: 1 };
var P7 = { key: 1 };
var R6 = defineComponent({
  name: "Steps",
  __name: "steps",
  props: {
    modelValue: {},
    active: {},
    items: {},
    direction: { default: "horizontal" },
    readonly: { type: Boolean, default: true },
    finishStatus: { default: "success" },
    processStatus: { default: "default" }
  },
  emits: ["update:active", "stepClick"],
  setup(S8, { emit: C7 }) {
    const c12 = useSlots(), b10 = computed(() => {
      var e17;
      return c12.icon ? ((e17 = c12.icon()[0]) == null ? void 0 : e17.children) || [] : [];
    }), v6 = computed(() => {
      var e17;
      return c12.desc ? ((e17 = c12.desc()[0]) == null ? void 0 : e17.children) || [] : [];
    }), r7 = computed(() => u5.active ? u5.items.findIndex((e17) => e17.key === u5.active) : u5.items.length + 1), u5 = S8, k6 = C7, { size: g10 } = l([u5], {
      size: "default"
    }), o11 = e("steps"), z5 = (e17) => {
      k6("stepClick", e17), k6("update:active", e17.key);
    };
    return (e17, j5) => (openBlock(), createElementBlock(
      "ol",
      {
        class: normalizeClass([unref(o11).b, unref(o11).e(e17.direction), unref(o11).m(unref(g10))])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(e17.items, (m6, l5) => (openBlock(), createElementBlock("li", {
            class: normalizeClass([
              unref(o11).e("step"),
              unref(e).is("readonly", e17.readonly),
              unref(e).is(e17.processStatus, e17.active === m6.key),
              unref(e).is(e17.finishStatus, l5 < r7.value)
            ]),
            onClick: (q8) => e17.readonly ? void 0 : z5(m6)
          }, [
            createBaseVNode(
              "div",
              {
                class: normalizeClass([unref(o11).e("icon"), unref(e).is(e17.direction)])
              },
              [
                l5 !== 0 ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass([
                      unref(o11).em("icon", "line"),
                      unref(e).is(e17.processStatus, e17.active === m6.key),
                      unref(e).is(e17.finishStatus, l5 < r7.value)
                    ])
                  },
                  null,
                  2
                  /* CLASS */
                )) : (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: normalizeClass(unref(o11).em("icon", "placeholder"))
                  },
                  null,
                  2
                  /* CLASS */
                )),
                unref(c12).icon ? (openBlock(), createBlock(resolveDynamicComponent(b10.value[l5]), {
                  key: 2,
                  class: normalizeClass([unref(o11).em("icon", "number")])
                }, null, 8, ["class"])) : (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 3,
                    class: normalizeClass([unref(o11).em("icon", "number")])
                  },
                  [
                    l5 < r7.value ? (openBlock(), createBlock(unref(k), { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(unref(check_default))
                      ]),
                      _: 1
                      /* STABLE */
                    })) : (openBlock(), createElementBlock(
                      "span",
                      L4,
                      toDisplayString(l5 + 1),
                      1
                      /* TEXT */
                    ))
                  ],
                  2
                  /* CLASS */
                )),
                l5 !== e17.items.length - 1 ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 4,
                    class: normalizeClass([
                      unref(o11).em("icon", "line"),
                      unref(e).is(e17.processStatus, l5 === r7.value - 1),
                      unref(e).is(e17.finishStatus, l5 < r7.value - 1)
                    ])
                  },
                  null,
                  2
                  /* CLASS */
                )) : (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 5,
                    class: normalizeClass(unref(o11).em("icon", "placeholder"))
                  },
                  null,
                  2
                  /* CLASS */
                ))
              ],
              2
              /* CLASS */
            ),
            createBaseVNode(
              "div",
              {
                class: normalizeClass([unref(o11).e("description")])
              },
              [
                unref(c12).desc && v6.value[l5] ? (openBlock(), createBlock(resolveDynamicComponent(v6.value[l5]), { key: 0 })) : (openBlock(), createElementBlock(
                  "span",
                  P7,
                  toDisplayString(m6.label),
                  1
                  /* TEXT */
                ))
              ],
              2
              /* CLASS */
            )
          ], 10, w11))),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/steps/index.js
function t9(e17) {
  return e17;
}

// node_modules/ultra-ui/venders/tabs.vue_vue_type_script_setup_true_lang-2-WNMT_Q.js
var re5 = ["onClick"];
var be2 = defineComponent({
  name: "Tabs",
  __name: "tabs",
  props: mergeModels({
    modelValue: {},
    items: {},
    position: { default: "top" },
    editable: { type: Boolean },
    keepAlive: { type: Boolean },
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "update:items", "update:active", "delete", "create", "click"], ["update:modelValue"]),
  setup(_10, { emit: T6 }) {
    const d9 = _10, f11 = T6, k6 = useSlots(), { size: D4 } = l([d9], {
      size: "default"
    }), F6 = computed(() => d9.items), s13 = e("tabs"), w12 = shallowRef(), y5 = shallowRef(-1), n8 = useModel(_10, "modelValue"), v6 = shallowRef({});
    watch(
      [y5, () => d9.position, () => d9.editable],
      async ([e17, l5, o11]) => {
        if (await nextTick(), e17 === -1 || o11) return;
        const c12 = w12.value, m6 = c12.getBoundingClientRect(), $12 = c12.children[e17], { offsetWidth: K6, offsetHeight: L5 } = $12, R7 = $12.getBoundingClientRect();
        l5 === "top" || l5 === "bottom" ? v6.value = {
          width: K6 + "px",
          transform: `translate3d(${R7.left - m6.left}px, 0, 0)`
        } : v6.value = {
          height: L5 + "px",
          transform: `translate3d(0, ${R7.top - m6.top}px, 0)`
        };
      }
    );
    let h8 = false;
    watch(
      n8,
      (e17) => {
        h8 || (y5.value = d9.items.findIndex((l5) => l5.key === e17));
      },
      { immediate: true }
    );
    const I4 = (e17, l5) => {
      e17.disabled || (h8 = true, y5.value = l5, n8.value = e17.key, nextTick(() => {
        h8 = false;
      }));
    }, B7 = () => {
      var o11;
      const e17 = n8.value;
      if (!e17) return null;
      const l5 = (o11 = k6[e17]) == null ? void 0 : o11.call(k6, { key: e17 });
      return Array.isArray(l5) ? createVNode(
        fe2,
        { class: s13.e("content") },
        { default: () => l5 }
      ) : l5;
    }, P8 = (e17, l5) => {
      const { items: o11 } = d9;
      n8.value === e17.key && (n8.value = (o11[l5 + 1] ?? o11[l5 - 1]).key), f11("update:items", [...o11.slice(0, l5), ...o11.slice(l5 + 1)]), f11("delete", e17, l5);
    }, H4 = () => {
      f11("create");
    };
    return (e17, l5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(s13).b, unref(s13).m(e17.position), unref(s13).m(unref(D4))])
      },
      [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass([unref(s13).e("header"), unref(s13).em("header", e17.position)]),
            ref_key: "headerRef",
            ref: w12
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(F6.value, (o11, c12) => withDirectives((openBlock(), createElementBlock("li", {
                key: o11.key,
                class: normalizeClass([
                  unref(s13).e("header-item"),
                  unref(e).is("active", n8.value === o11.key),
                  unref(e).is("disabled", o11.disabled === true)
                ]),
                onClick: withModifiers((m6) => I4(o11, c12), ["stop"])
              }, [
                renderSlot(e17.$slots, `name:${o11.key}`, {}, () => [
                  createTextVNode(
                    toDisplayString(o11.name),
                    1
                    /* TEXT */
                  )
                ]),
                e17.editable ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    o11.disabled ? (openBlock(), createElementBlock(
                      "i",
                      {
                        key: 1,
                        class: normalizeClass(unref(s13).e("close-placeholder"))
                      },
                      null,
                      2
                      /* CLASS */
                    )) : (openBlock(), createBlock(unref(k), {
                      key: 0,
                      class: normalizeClass(unref(s13).e("close")),
                      onClick: withModifiers((m6) => P8(o11, c12), ["stop"]),
                      onMousedown: l5[0] || (l5[0] = withModifiers(() => {
                      }, ["stop"]))
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(close_default))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "onClick"]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true)
              ], 10, re5)), [
                [unref(T), o11.disabled ? false : unref(s13).e("ripple")]
              ])),
              128
              /* KEYED_FRAGMENT */
            )),
            e17.editable ? (openBlock(), createElementBlock(
              "li",
              {
                key: 0,
                class: normalizeClass([unref(s13).e("header-item"), unref(s13).e("add")]),
                onClick: H4
              },
              [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(plus_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            )) : (openBlock(), createElementBlock(
              "li",
              {
                key: 1,
                class: normalizeClass(unref(s13).e("marker")),
                style: normalizeStyle(v6.value)
              },
              null,
              6
              /* CLASS, STYLE */
            ))
          ],
          2
          /* CLASS */
        ),
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            e17.keepAlive ? (openBlock(), createBlock(
              KeepAlive,
              { key: 0 },
              [
                (openBlock(), createBlock(resolveDynamicComponent(B7()), { key: n8.value }))
              ],
              1024
              /* DYNAMIC_SLOTS */
            )) : (openBlock(), createBlock(resolveDynamicComponent(B7()), { key: n8.value }))
          ]),
          _: 1
          /* STABLE */
        })
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/utils/dom/highlight.js
var s11 = (t10) => t10.replace(/[|\\{}()[\]^$+*?.-]/g, (i4) => `\\${i4}`);
function r6(t10, i4) {
  const g10 = i4.filter((e17) => !!e17).map((e17) => s11(e17.trim())), n8 = new RegExp(`(${g10.join("|")})`, "gi");
  return t10.split(n8).filter(Boolean).map((e17) => ({ text: e17, highlight: n8.test(e17) }));
}

// node_modules/ultra-ui/venders/text.vue_vue_type_script_setup_true_lang-Clj1hObF.js
var q7 = defineComponent({
  name: "Text",
  __name: "text",
  props: {
    as: { default: "content" },
    fontSize: {},
    deleted: { type: Boolean },
    underline: { type: Boolean },
    bold: { type: Boolean },
    italic: { type: Boolean },
    highlight: {}
  },
  setup(p5) {
    const t10 = p5, u5 = e("text"), m6 = computed(() => [
      u5.b,
      e.is(t10.as),
      e.is("bold", t10.bold),
      e.is("italic", t10.italic)
    ]), f11 = computed(() => {
      const e17 = {
        fontSize: f(t10.fontSize, "px")
      }, { deleted: n8, underline: o11 } = t10;
      return n8 && (e17.textDecoration = "line-through"), o11 && (e17.textDecoration = "underline"), e17;
    }), l5 = useSlots(), h8 = () => {
      var c12;
      const e17 = (c12 = l5.default) == null ? void 0 : c12.call(l5);
      if (!(e17 != null && e17.length)) return;
      const n8 = e17.filter((r7) => h4(r7)), { highlight: o11 } = t10;
      return o11 ? n8.reduce((r7, d9) => (r6(
        d9.children,
        Array.isArray(o11) ? o11 : [o11]
      ).forEach((s13) => {
        s13.highlight ? r7.push(h("mark", s13.text)) : r7.push(createTextVNode(s13.text));
      }), r7), []) : n8;
    };
    return (e17, n8) => (openBlock(), createElementBlock(
      "p",
      {
        class: normalizeClass(m6.value),
        style: normalizeStyle(f11.value)
      },
      [
        createVNode(unref(d3), {
          content: h8(),
          ref: "aa"
        }, null, 8, ["content"])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/components/text-editor/di.js
var e15 = Symbol("TableDIKey");

// node_modules/ultra-ui/venders/bar.vue_vue_type_script_setup_true_lang-2UZRm5LY.js
var z4 = defineComponent({
  __name: "bar",
  setup(B7, { expose: l5 }) {
    const o11 = shallowRef(), i4 = e("text-editor"), s13 = inject(e15);
    return l5({
      barRef: o11
    }), (C7, n8) => (openBlock(), createElementBlock(
      "div",
      {
        id: "bar",
        class: normalizeClass(unref(i4).e("bar")),
        ref_key: "barRef",
        ref: o11
      },
      [
        n8[0] || (n8[0] = createStaticVNode('<select class="ql-size"><option value="small">小</option><option selected>正常</option><option value="large">大</option><option value="huge">嘎嘎大</option></select>', 1)),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(s13).textEditorProps.toolbar ?? [
            { content: "加粗", bar: "bold" },
            { content: "斜体", bar: "italic" },
            { content: "下划线", bar: "underline" },
            { content: "上传图片", bar: "image" },
            { content: "插入链接", bar: "link" },
            { content: "代码块", bar: "code-block" },
            { content: "清除格式", bar: "clean" }
          ], (r7) => (openBlock(), createBlock(unref(Re2), {
            content: r7.content
          }, {
            default: withCtx(() => [
              createBaseVNode(
                "button",
                {
                  class: normalizeClass(`ql-${r7.bar}`)
                },
                null,
                2
                /* CLASS */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["content"]))),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/text-editor.vue_vue_type_script_setup_true_lang-tjTucbLF.js
var se3 = defineComponent({
  name: "TextEditor",
  __name: "text-editor",
  props: {
    modelValue: {},
    height: {},
    width: {},
    disabled: { type: Boolean, default: void 0 },
    placeholder: { default: "请输入" },
    toolbar: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(y5, { expose: R7, emit: V6 }) {
    const w12 = V6, o11 = y5;
    provide(e15, {
      textEditorProps: o11
    });
    const { formProps: C7 } = i2(), { size: k6, disabled: r7, readonly: a6 } = g([
      C7 ?? {},
      o11
    ]), E11 = computed(() => [
      s13.b,
      s13.m(k6.value),
      e.is("disabled", r7.value),
      e.is("readonly", a6.value)
    ]), s13 = e("text-editor"), u5 = shallowRef(), i4 = shallowRef();
    let l5, e17 = null;
    const d9 = ref(""), B7 = () => {
      var t10;
      l5 = {
        modules: {
          toolbar: (t10 = i4.value) == null ? void 0 : t10.barRef
        },
        // readOnly: readonly.value,
        theme: "snow",
        placeholder: r7.value || a6.value ? void 0 : o11.placeholder
      };
    };
    let p5 = ref(true);
    nextTick(() => {
      B7();
    });
    const f11 = async () => {
      h8(), await nextTick(), p5.value = true, nextTick(() => {
        console.log(l5, "options"), e17 = new N3(u5.value, l5), e17.on("text-change", v6), r7.value || a6.value ? e17.enable(false) : e17.enable(true), e17.updateContents(o11.modelValue), d9.value = `${(/* @__PURE__ */ new Date()).getTime()}${Math.random()}`;
      });
    }, h8 = () => {
      e17 && (p5.value = false);
    };
    onMounted(() => {
      f11();
    }), watch(
      () => [r7.value, a6.value],
      () => {
        f11();
      }
    );
    const T6 = () => e17, M8 = (t10) => (e17 == null || e17.update(), e17 == null ? void 0 : e17.updateContents(t10)), $12 = () => e17 == null ? void 0 : e17.getModule("toolbar"), v6 = (t10, n8, W6) => {
      const z5 = e17 == null ? void 0 : e17.getContents();
      w12("update:modelValue", { value: z5, stamp: d9.value });
    };
    return onBeforeUnmount(() => {
      e17 == null || e17.off("text-change", v6), e17 == null || e17.history.clear(), h8();
    }), watch([() => o11.modelValue, () => e17], ([t10, n8]) => {
      n8 && (t10 == null ? void 0 : t10.stamp) !== d9.value && n8.setContents(t10 == null ? void 0 : t10.value);
    }), R7({ quillRef: T6, setValue: M8, getModelBar: $12 }), (t10, n8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(E11.value)
      },
      [
        createVNode(
          z4,
          {
            ref_key: "barRef",
            ref: i4
          },
          null,
          512
          /* NEED_PATCH */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(s13).e("hover")),
            style: normalizeStyle(`height: ${t10.height}`),
            ref_key: "editorRef",
            ref: u5
          },
          null,
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/textarea/utils.js
function s12(t10) {
  n3(t10, {
    height: "auto"
  }), nextTick(() => {
    const { scrollHeight: i4 } = t10;
    n3(t10, {
      overflow: "hidden",
      height: i4 + "px"
    });
  });
}

// node_modules/ultra-ui/venders/textarea.vue_vue_type_script_setup_true_lang-BIEqJsLS.js
var X4 = ["placeholder", "maxlength", "rows", "cols", "disabled", "readonly"];
var Z2 = {
  key: 1,
  style: { "white-space": "pre-wrap" }
};
var pe3 = defineComponent({
  name: "Textarea",
  __name: "textarea",
  props: mergeModels({
    modelValue: {},
    height: {},
    placeholder: { default: "请输入" },
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    resize: { type: Boolean, default: true },
    rows: {},
    cols: {},
    maxlength: {},
    showCount: { type: Boolean },
    clearable: { type: Boolean, default: true },
    nativeReadonly: { type: Boolean },
    autosize: { type: Boolean, default: false },
    tips: {},
    span: {},
    label: {},
    field: {},
    size: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue", "change", "focus", "blur", "clear"], ["update:modelValue"]),
  setup(h8, { emit: k6 }) {
    const a6 = h8, s13 = e("textarea"), { formProps: z5 } = i2(), { size: M8, disabled: m6, readonly: p5 } = g(
      [z5 ?? {}, a6],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), r7 = k6, g10 = ref(null), n8 = useModel(h8, "modelValue"), c12 = shallowRef(false), { focus: F6, handleBlur: y5, handleFocus: x12 } = s5((o11) => {
      r7(o11 ? "focus" : "blur");
    }), T6 = computed(() => [
      s13.b,
      s13.m(M8.value),
      e.is("resize-none", !a6.resize),
      e.is("disabled", m6.value),
      e.is("readonly", p5.value),
      e.is("focus", F6.value),
      s13.m("more")
    ]), N4 = (o11) => {
      const e17 = o11.target.value;
      if (e17.length > a6.maxlength) {
        const t10 = e17.slice(0, a6.maxlength);
        r7("update:modelValue", t10);
      } else
        r7("update:modelValue", e17);
    }, R7 = computed(() => {
      var o11;
      return a6.maxlength ? a6.maxlength - (((o11 = n8.value) == null ? void 0 : o11.length) ?? 0) : 0;
    }), E11 = () => {
      n8.value = "", r7("clear");
    }, P8 = (o11) => {
      r7("change", o11.target.value);
    };
    return watch(
      [n8, g10],
      ([o11, e17]) => {
        e17 && a6.autosize && s12(e17);
      },
      { immediate: true }
    ), (o11, e17) => unref(p5) ? (openBlock(), createElementBlock(
      "span",
      Z2,
      toDisplayString(n8.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(T6.value),
        onMouseenter: e17[3] || (e17[3] = (t10) => c12.value = true),
        onMouseleave: e17[4] || (e17[4] = (t10) => c12.value = false)
      },
      [
        withDirectives(createBaseVNode("textarea", {
          class: normalizeClass(unref(s13).e("native")),
          placeholder: o11.placeholder,
          "onUpdate:modelValue": e17[0] || (e17[0] = (t10) => n8.value = t10),
          maxlength: o11.maxlength,
          rows: o11.rows,
          cols: o11.cols,
          onInput: N4,
          onFocus: e17[1] || (e17[1] = //@ts-ignore
          (...t10) => unref(x12) && unref(x12)(...t10)),
          onBlur: e17[2] || (e17[2] = //@ts-ignore
          (...t10) => unref(y5) && unref(y5)(...t10)),
          onChange: P8,
          disabled: unref(m6),
          readonly: o11.nativeReadonly,
          ref_key: "textareaRef",
          ref: g10
        }, null, 42, X4), [
          [vModelText, n8.value]
        ]),
        a6.maxlength && a6.showCount ? (openBlock(), createElementBlock(
          "span",
          {
            key: 0,
            class: normalizeClass(unref(s13).m("count"))
          },
          toDisplayString(R7.value) + "/" + toDisplayString(a6.maxlength),
          3
          /* TEXT, CLASS */
        )) : createCommentVNode("v-if", true),
        createVNode(Transition, {
          name: "zoom-in",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            a6.clearable && n8.value && c12.value && !unref(m6) && !unref(p5) ? (openBlock(), createBlock(unref(k), {
              key: 0,
              class: normalizeClass(unref(s13).m("clear")),
              onClick: withModifiers(E11, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        })
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
});

// node_modules/ultra-ui/components/theme/di.js
var e16 = Symbol("ThemeDIKey");

// node_modules/ultra-ui/venders/group.vue_vue_type_script_setup_true_lang-NN6tztzn.js
var g8 = defineComponent({
  __name: "group",
  props: {
    title: {}
  },
  setup(u5) {
    const { cls: e17 } = inject(e16);
    return (r7, d9) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(e17).e("group"))
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(e17).e("group-title"))
          },
          toDisplayString(r7.title),
          3
          /* TEXT, CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(e17).e("group-content"))
          },
          [
            renderSlot(r7.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/group-item.vue_vue_type_script_setup_true_lang-Cl058MK1.js
var g9 = defineComponent({
  __name: "group-item",
  props: {
    label: {}
  },
  setup(u5) {
    const { cls: e17 } = inject(e16);
    return (l5, _10) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(e17).e("group-item"))
      },
      [
        createBaseVNode(
          "label",
          {
            class: normalizeClass(unref(e17).e("group-label"))
          },
          toDisplayString(l5.label),
          3
          /* TEXT, CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(e17).e("group-item-content"))
          },
          [
            renderSlot(l5.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/theme.vue_vue_type_script_setup_true_lang-B8WG9401.js
var $11 = defineComponent({
  name: "Theme",
  __name: "theme",
  setup(U3) {
    const f11 = e("theme");
    return provide(e16, {
      cls: f11
    }), (z5, a6) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(f11).b)
      },
      [
        createVNode(g8, { title: "主题色" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "品牌" }),
            createVNode(g9, { label: "默认" }),
            createVNode(g9, { label: "成功" }),
            createVNode(g9, { label: "失败" }),
            createVNode(g9, { label: "警告" }),
            createVNode(g9, { label: "信息" })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "背景色" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "底层" }),
            createVNode(g9, { label: "中层" }),
            createVNode(g9, { label: "顶层" }),
            createVNode(g9, { label: "禁用" }),
            createVNode(g9, { label: "悬浮" })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "边框" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "宽度" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).border.width,
                  "onUpdate:modelValue": a6[0] || (a6[0] = (d9) => unref(f5).border.width = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "样式" }),
            createVNode(g9, { label: "颜色" })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "圆角" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).radius.small,
                  "onUpdate:modelValue": a6[1] || (a6[1] = (d9) => unref(f5).radius.small = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).radius.default,
                  "onUpdate:modelValue": a6[2] || (a6[2] = (d9) => unref(f5).radius.default = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).radius.large,
                  "onUpdate:modelValue": a6[3] || (a6[3] = (d9) => unref(f5).radius.large = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "表单组件高度" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).formComponentHeight.small,
                  "onUpdate:modelValue": a6[4] || (a6[4] = (d9) => unref(f5).formComponentHeight.small = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).formComponentHeight.default,
                  "onUpdate:modelValue": a6[5] || (a6[5] = (d9) => unref(f5).formComponentHeight.default = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).formComponentHeight.large,
                  "onUpdate:modelValue": a6[6] || (a6[6] = (d9) => unref(f5).formComponentHeight.large = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "菜单高度" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).menuHeight.small,
                  "onUpdate:modelValue": a6[7] || (a6[7] = (d9) => unref(f5).menuHeight.small = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).menuHeight.default,
                  "onUpdate:modelValue": a6[8] || (a6[8] = (d9) => unref(f5).menuHeight.default = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).menuHeight.large,
                  "onUpdate:modelValue": a6[9] || (a6[9] = (d9) => unref(f5).menuHeight.large = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "标签尺寸" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).tag.small,
                  "onUpdate:modelValue": a6[10] || (a6[10] = (d9) => unref(f5).tag.small = d9),
                  step: 1,
                  min: 0,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).tag.default,
                  "onUpdate:modelValue": a6[11] || (a6[11] = (d9) => unref(f5).tag.default = d9),
                  min: 0,
                  clearable: false,
                  step: 1
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).tag.large,
                  "onUpdate:modelValue": a6[12] || (a6[12] = (d9) => unref(f5).tag.large = d9),
                  step: 1,
                  min: 0,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "字体族" }),
        createVNode(g8, { title: "文字颜色" }),
        createVNode(g8, { title: "标题字体大小" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeTitle.small,
                  "onUpdate:modelValue": a6[13] || (a6[13] = (d9) => unref(f5).fontSizeTitle.small = d9),
                  min: 14,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeTitle.default,
                  "onUpdate:modelValue": a6[14] || (a6[14] = (d9) => unref(f5).fontSizeTitle.default = d9),
                  min: 14,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeTitle.large,
                  "onUpdate:modelValue": a6[15] || (a6[15] = (d9) => unref(f5).fontSizeTitle.large = d9),
                  min: 14,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "正文字体大小" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeMain.small,
                  "onUpdate:modelValue": a6[16] || (a6[16] = (d9) => unref(f5).fontSizeMain.small = d9),
                  min: 12,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeMain.default,
                  "onUpdate:modelValue": a6[17] || (a6[17] = (d9) => unref(f5).fontSizeMain.default = d9),
                  min: 12,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeMain.large,
                  "onUpdate:modelValue": a6[18] || (a6[18] = (d9) => unref(f5).fontSizeMain.large = d9),
                  min: 12,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "辅助字体大小" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeAssist.small,
                  "onUpdate:modelValue": a6[19] || (a6[19] = (d9) => unref(f5).fontSizeAssist.small = d9),
                  min: 12,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeAssist.default,
                  "onUpdate:modelValue": a6[20] || (a6[20] = (d9) => unref(f5).fontSizeAssist.default = d9),
                  min: 12,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).fontSizeAssist.large,
                  "onUpdate:modelValue": a6[21] || (a6[21] = (d9) => unref(f5).fontSizeAssist.large = d9),
                  min: 12,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "阴影" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "水平偏移" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  step: 1,
                  modelValue: unref(f5).shadow.x,
                  "onUpdate:modelValue": a6[22] || (a6[22] = (d9) => unref(f5).shadow.x = d9),
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "垂直偏移" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  step: 1,
                  modelValue: unref(f5).shadow.y,
                  "onUpdate:modelValue": a6[23] || (a6[23] = (d9) => unref(f5).shadow.y = d9),
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "模糊半径" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).shadow.blur,
                  "onUpdate:modelValue": a6[24] || (a6[24] = (d9) => unref(f5).shadow.blur = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "扩散半径" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).shadow.spread,
                  "onUpdate:modelValue": a6[25] || (a6[25] = (d9) => unref(f5).shadow.spread = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "颜色" })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "间距" }, {
          default: withCtx(() => [
            createVNode(g9, { label: "小" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).gap.small,
                  "onUpdate:modelValue": a6[26] || (a6[26] = (d9) => unref(f5).gap.small = d9),
                  step: 1,
                  min: 0,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "中" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).gap.default,
                  "onUpdate:modelValue": a6[27] || (a6[27] = (d9) => unref(f5).gap.default = d9),
                  min: 0,
                  step: 1,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "大" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f5).gap.large,
                  "onUpdate:modelValue": a6[28] || (a6[28] = (d9) => unref(f5).gap.large = d9),
                  step: 1,
                  min: 0,
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(g8, { title: "断点" })
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/venders/tree-select.vue_vue_type_script_setup_true_lang-jX3n3rBw.js
var le3 = { key: 1 };
var ve3 = defineComponent({
  name: "TreeSelect",
  __name: "tree-select",
  props: mergeModels({
    modelValue: {},
    placeholder: { default: "请选择" },
    clearable: { type: Boolean, default: true },
    filterable: { type: Boolean, default: false },
    minWidth: { default: "250px" },
    text: {},
    tips: {},
    span: {},
    label: {},
    field: {},
    disabled: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    size: {},
    expandAll: { type: Boolean, default: true },
    expandOnClickNode: { type: Boolean },
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    childrenKey: {},
    data: {},
    disabledNode: {},
    checkStrictly: { type: Boolean },
    slots: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["clear", "change", "update:text"], ["update:modelValue"]),
  setup(g10, { emit: N4 }) {
    const t10 = e("tree-select"), n8 = g10, z5 = computed(() => omit(n8, [
      "tips",
      "field",
      "placeholder",
      "disabled",
      "label",
      "readonly"
    ])), c12 = N4, M8 = useSlots(), m6 = shallowRef("");
    watch(m6, (l5) => {
      var a6;
      (a6 = p5.value) == null || a6.filter(l5);
    });
    const d9 = useModel(g10, "modelValue"), o11 = shallowRef(), { formProps: P8 } = i2(), { size: f11, disabled: k6, readonly: R7 } = g([
      P8 ?? {},
      n8
    ]), p5 = shallowRef(), B7 = shallowRef(), E11 = () => {
      d9.value = "", o11.value = void 0, c12("clear"), c12("change", "", void 0), c12("update:text", "");
    };
    let v6 = false;
    watch(
      [() => n8.data, d9],
      ([l5, a6]) => {
        if (v6) return;
        if (!(l5 != null && l5.length) || a6 === void 0) {
          o11.value = void 0, a6 = void 0;
          return;
        }
        let r7 = false;
        l5.some(($12) => (Tree.dft($12, (w12) => {
          if (w12[n8.valueKey] === a6)
            return o11.value = w12[n8.labelKey], r7 = true, false;
        }), r7));
      },
      {
        immediate: true
      }
    );
    const F6 = (l5, a6) => {
      var r7;
      v6 = true, nextTick(() => {
        v6 = false;
      }), d9.value = l5 ?? "", a6 ? o11.value = getChainValue(a6, n8.labelKey) : o11.value = "", c12("change", l5, a6), c12("update:text", o11.value), (r7 = B7.value) == null || r7.close();
    };
    return watch(p5, (l5) => {
      l5 && d9.value !== void 0 && nextTick(() => {
        l5.scrollToSelected();
      });
    }), (l5, a6) => unref(R7) ? (openBlock(), createElementBlock(
      "span",
      le3,
      toDisplayString(l5.text || o11.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      class: normalizeClass([unref(t10).b, unref(e).is("disabled", unref(k6))]),
      trigger: "click",
      "content-class": [unref(t10).e("panel"), unref(t10).em("panel", unref(f11))],
      ref_key: "dropdownRef",
      ref: B7,
      "min-width": l5.minWidth
    }, {
      trigger: withCtx(() => [
        createVNode(unref(Ve), {
          size: unref(f11),
          disabled: unref(k6),
          placeholder: l5.placeholder,
          clearable: l5.clearable,
          "model-value": l5.text ?? (d9.value ? o11.value : void 0),
          onClear: E11,
          "native-readonly": ""
        }, {
          suffix: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(t10).e("arrow"))
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size", "disabled", "placeholder", "clearable", "model-value"])
      ]),
      content: withCtx(() => [
        createCommentVNode(" 过滤器 "),
        l5.filterable ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass([unref(t10).e("content-filter"), unref(t10).m(unref(f11))])
          },
          [
            createVNode(unref(Ve), {
              placeholder: "输入关键字进行过滤",
              modelValue: m6.value,
              "onUpdate:modelValue": a6[0] || (a6[0] = (r7) => m6.value = r7)
            }, {
              suffix: withCtx(() => [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    createVNode(unref(search_default))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" 菜单列表 "),
        createVNode(unref(Ae), mergeProps(z5.value, {
          selected: d9.value,
          "onUpdate:selected": F6,
          ref_key: "treeRef",
          ref: p5,
          selectable: "",
          class: unref(t10).e("content-tree"),
          slots: M8
        }), null, 16, ["selected", "class"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["class", "content-class", "min-width"]));
  }
});

// node_modules/ultra-ui/venders/watermark.vue_vue_type_script_setup_true_lang-Dii7XRxN.js
var W5 = defineComponent({
  name: "Watermark",
  __name: "watermark",
  props: {
    text: {},
    image: {},
    appendToBody: { type: Boolean },
    route: { default: -30 },
    fontSize: { default: 60 }
  },
  emits: ["update:modelValue"],
  setup(y5) {
    const c12 = e("watermark"), n8 = y5, l5 = ref(), i4 = reactive({
      fontColor: "rgba(0,0,0,.1)",
      fontFamily: "Arial",
      image: n8.image
    }), m6 = debounce(async () => {
      const r7 = n8.text, s13 = l5.value;
      if (s13 === void 0 || !r7) return;
      let t10 = document.createElement("canvas"), e17 = t10.getContext("2d");
      e17.font = `${n8.fontSize}px ${i4.fontFamily}`;
      const o11 = e17.measureText(r7).width;
      t10 = document.createElement("canvas"), t10.width = o11, t10.height = o11, e17 = t10.getContext("2d"), e17.font = `${n8.fontSize}px ${i4.fontFamily}`, e17 = t10.getContext("2d"), e17.fillStyle = i4.fontColor, e17.textAlign = "left", e17.textBaseline = "top", e17.translate(o11 / 2, o11 / 2), e17.rotate(n8.route * Math.PI / 180), e17.translate(-o11 / 2, -o11 / 2), e17.fillText(r7, 0, (o11 - n8.fontSize) / 2), n3(s13, {
        background: `url(${t10.toDataURL("image/png")}) repeat`
      }), e17.clearRect(0, 0, t10.width, t10.height), t10 = null;
    }, 150);
    return window.addEventListener("resize", m6), onBeforeUnmount(() => {
      window.removeEventListener("resize", m6);
    }), onMounted(() => {
      m6();
    }), (r7, s13) => r7.appendToBody ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: "body"
    }, [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(unref(c12).b),
          ref_key: "watermarkRef",
          ref: l5,
          style: normalizeStyle({
            zIndex: unref(o3)()
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ])) : (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass(unref(c12).b),
        ref_key: "watermarkRef",
        ref: l5,
        style: normalizeStyle({
          zIndex: unref(o3)()
        })
      },
      [
        renderSlot(r7.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  V4 as DynamicFormModel,
  A8 as FormModel,
  k5 as Message,
  t8 as MessageConfirm,
  _8 as Notification,
  P6 as TreeNode,
  S as UAction,
  j2 as UActionGroup,
  _e as UAutoComplete,
  E3 as UBadge,
  oe4 as UBatchEdit,
  M as UButton,
  b3 as UButtonGroup,
  x5 as UCalendar,
  S2 as UCard,
  v2 as UCardAction,
  B4 as UCardContent,
  B3 as UCardCover,
  C2 as UCardHeader,
  Je as UCascade,
  O2 as UCascadeFilter,
  ae3 as UCascadeMulti,
  Ce as UCascadeNode,
  B5 as UCheckTag,
  U2 as UCheckbox,
  j4 as UCheckboxGroup,
  W3 as UDatePicker,
  Ue2 as UDialog,
  oe2 as UDropdown,
  h6 as UEmpty,
  P4 as UFilePicker,
  J3 as UFloatButton,
  K4 as UForm,
  Q2 as UFormItem,
  f7 as UGanttChart,
  A4 as UGrid,
  J5 as UGridInput,
  $5 as UGridItem,
  re2 as UGroupInput,
  k as UIcon,
  Ve as UInput,
  Y2 as ULayout,
  E10 as UList,
  d6 as UListItem,
  N2 as ULoading,
  x11 as UMenu,
  G3 as UMenuItem,
  re3 as UMenuSub,
  O3 as UMessage,
  q4 as UMessageConfirm,
  m5 as UMultiAutoComplete,
  cl2 as UMultiSelect,
  Le as UMultiTreeSelect,
  d3 as UNodeRender,
  ie3 as UNotification,
  _9 as UNumber,
  De4 as UNumberInput,
  he2 as UPaginator,
  D3 as UPasswordInput,
  K2 as UPopConfirm,
  M7 as UProgress,
  A9 as URadio,
  A10 as URadioGroup,
  fe2 as UScroll,
  je2 as USelect,
  Be2 as USlider,
  R6 as USteps,
  De as UTable,
  be2 as UTabs,
  A3 as UTag,
  q7 as UText,
  se3 as UTextEditor,
  pe3 as UTextarea,
  $11 as UTheme,
  Re2 as UTip,
  Ae as UTree,
  ve3 as UTreeSelect,
  W5 as UWatermark,
  c5 as contextmenu,
  t5 as defineBatchEditColumns,
  t9 as defineSteps,
  te4 as defineTableColumns,
  n6 as formField,
  k5 as message,
  v3 as vLoading
};
//# sourceMappingURL=ultra-ui_components_index.js.map
