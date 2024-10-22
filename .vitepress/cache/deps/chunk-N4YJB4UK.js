import {
  kebabCase
} from "./chunk-UAAKHJSZ.js";
import {
  reactive,
  watchEffect
} from "./chunk-XYSSNQS4.js";

// node_modules/ultra-ui/styles/helper.js
function a(s2) {
  let o = s2.replace(/^#/, ""), [r, t, n2] = [0, 0, 0];
  if (o.length === 3) {
    const [e, c, l] = [o[0], o[1], o[2]];
    o = `${e}${e}${c}${c}${l}${l}`;
  }
  return r = parseInt(o.slice(0, 2), 16), t = parseInt(o.slice(2, 4), 16), n2 = parseInt(o.slice(4, 6), 16), [r, t, n2];
}
function h(s2, o, r) {
  if (r > 1) throw new Error("ratio的值在0-1之间");
  const t = a(s2), n2 = a(o), e = 1 - r;
  return "#" + t.map((c, l) => {
    const i = Math.floor(
      e * c + n2[l] * r
    ).toString(16);
    return i.length === 1 ? "0" + i : i;
  }).join("");
}

// node_modules/ultra-ui/venders/style-CQYA9RXD.js
function f(t, r) {
  return t === void 0 ? void 0 : typeof t == "number" || !isNaN(+t) ? String(t) + r : t;
}
function n(t, r) {
  t.attributeStyleMap ? Object.keys(r).forEach((e) => {
    const i = r[e];
    !i && i !== 0 ? t.attributeStyleMap.delete(kebabCase(e)) : t.attributeStyleMap.set(kebabCase(e), i);
  }) : Object.keys(r).forEach((e) => {
    t.style[e] = r[e];
  });
}
function s(t, r) {
  t.attributeStyleMap ? r.forEach((e) => {
    t.attributeStyleMap.delete(kebabCase(e));
  }) : r.forEach((e) => {
    t.style.removeProperty(e);
  });
}

// node_modules/ultra-ui/styles/theme.js
var f2 = reactive({
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
function p(e) {
  const o = Object.keys(e), r = [1, 3, 5, 7, 9];
  return o.map((t) => {
    let a2 = `--color-${t}`, s2 = e[t];
    const m = r.map((n2) => {
      const u = `${a2}-light-${n2}: ${h(
        s2,
        "#fff",
        n2 / 10
      )}`, $ = `${a2}-dark-${n2}: ${h(
        s2,
        "#000",
        n2 / 10
      )}`;
      return `${u};${$}`;
    }).join(";");
    return `${a2}: ${s2};${m}`;
  }).join(";");
}
function d(e, o = [], r = "-") {
  return Object.keys(e).forEach((l) => {
    const t = e[l], a2 = `${r.startsWith("-") ? r : kebabCase(r)}-${kebabCase(l)}`;
    typeof t == "object" ? d(t, o, a2) : o.push(`${a2}: ${f(t, "px")}`);
  }), o.join(";");
}
function y() {
  const e = (o) => `var(--shadow-${o})`;
  return `--shadow: ${e("x")} ${e("y")} ${e("blur")} ${e("spread")} ${e("color")}`;
}
function x() {
  const e = (o) => `var(--border-${o})`;
  return `--border:${e("width")} ${e("style")} ${e("color")}`;
}
function C() {
  return Object.keys(f2.bgColor).map((o) => `--bg-color-${o}-alpha: ${f2.bgColor[o]}cc`).join(";");
}
function w() {
  const { color: e, ...o } = f2, r = [
    p(e),
    d(o),
    y(),
    x(),
    C()
  ].join(";"), l = "ultra-ui-theme";
  let t = document.getElementById(l);
  t ? t.innerText = `:root { ${r}; }` : (t = document.createElement("style"), t.id = l, t.innerText = `:root { ${r}; }`, document.head.appendChild(t));
}
watchEffect(() => {
  w();
});

export {
  f,
  n,
  s,
  f2
};
//# sourceMappingURL=chunk-N4YJB4UK.js.map
