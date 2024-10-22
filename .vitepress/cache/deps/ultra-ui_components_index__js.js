import {
  N,
  d,
  g,
  l,
  o,
  t,
  v
} from "./chunk-TEMIEFGQ.js";
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
  f,
  f2,
  n as n2,
  s
} from "./chunk-N4YJB4UK.js";
import {
  E,
  E2,
  Forest,
  Tree,
  TreeNode,
  Tween,
  a,
  b,
  date,
  debounce,
  e,
  equal,
  getChainValue,
  isArray,
  isUndef,
  last,
  n,
  obj,
  objMap,
  omit,
  pick,
  safeRun,
  setChainValue
} from "./chunk-UAAKHJSZ.js";
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

// node_modules/ultra-ui/venders/icon.vue_vue_type_script_setup_true_lang-2K-MKsM_.js
var k = defineComponent({
  name: "Icon",
  __name: "icon",
  props: {
    size: {}
  },
  setup(e16) {
    const o10 = e16, t8 = e("icon"), n7 = computed(() => ({
      fontSize: f(o10.size, "px")
    }));
    return (r7, z5) => (openBlock(), createElementBlock(
      "i",
      {
        class: normalizeClass(unref(t8).b),
        style: normalizeStyle(n7.value)
      },
      [
        renderSlot(r7.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/directives/click-outside/index.js
var n3 = t(1e3);
var d2 = shallowReactive(
  /* @__PURE__ */ new Map()
);
var s2 = (t8) => {
  d2.forEach(({ el: e16, handler: a4 }) => {
    e16.contains(t8.target) || a4(t8);
  });
};
var r = false;
function c() {
  r || (document.addEventListener("click", s2, true), r = true);
}
function f3() {
  r && (document.removeEventListener("click", s2, true), r = false);
}
watch(d2, async (t8) => {
  if (t8.size > 0)
    return c();
  f3();
});
var h2 = {
  mounted(t8, e16) {
    if (!e16.value) return;
    const a4 = String(n3());
    t8.dataset.outsideId = a4, d2.set(a4, {
      handler: e16.value,
      el: t8
    });
  },
  updated(t8, e16) {
    if (e16.value)
      t8.dataset.outsideId || (t8.dataset.outsideId = String(n3())), d2.set(t8.dataset.outsideId, {
        handler: e16.value,
        el: t8
      });
    else {
      if (!t8.dataset.outsideId) return;
      d2.delete(t8.dataset.outsideId);
    }
  },
  unmounted(t8) {
    d2.delete(t8.dataset.outsideId);
  }
};

// node_modules/ultra-ui/utils/helper/frame.js
function n4(e16) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e16);
  });
}

// node_modules/ultra-ui/directives/ripple/index.js
var r2 = e("ripple");
var f4 = r2.e("wrap");
var x = 300;
var h3 = (t8) => {
  const e16 = t8.currentTarget;
  if (t8.propertyName !== "transform") return;
  e16.removeEventListener("transitionend", h3);
  const s12 = e16.parentElement;
  s12 && (s12.removeChild(e16), s12.getElementsByClassName(f4).length === 0 && (s12.classList.remove(r2.b), delete s12.dataset.class));
};
function $(t8, e16) {
  !t8.classList.contains(r2.b) && t8.classList.add(r2.b), t8.dataset.class = r2.b;
  const { domRect: s12, centerX: n7 = 0, centerY: o10 = 0, rippleClass: g10 } = e16 || {}, i3 = s12 ?? t8.getBoundingClientRect(), E11 = n7 < i3.width / 2 ? i3.width - n7 : n7, C6 = o10 < i3.height / 2 ? i3.height - o10 : o10, d8 = Math.ceil(Math.sqrt(E11 ** 2 + C6 ** 2)), c9 = d8 * 2, a4 = document.createElement("span");
  a4.classList.add(f4);
  const L5 = t8.dataset.duration ? Number(t8.dataset.duration) : x, p3 = g10 ?? t8.dataset.rippleClass;
  p3 && a4.classList.add(p3), n2(a4, {
    width: `${c9}px`,
    height: `${c9}px`,
    left: `${n7 - d8}px`,
    top: `${o10 - d8}px`,
    transition: `transform ${L5}ms cubic-bezier(.82,.84,.28,.92)`,
    transform: "scale3d(0.2, 0.2, 1)"
  }), t8.appendChild(a4), a4.addEventListener("transitionend", h3), n4(() => {
    n2(a4, {
      transform: "scale3d(1, 1, 1)"
    });
  });
}
function v2(t8) {
  const e16 = t8.currentTarget, s12 = e16.getBoundingClientRect();
  $(e16, {
    centerX: t8.pageX - s12.left,
    centerY: t8.pageY - s12.top,
    domRect: s12
  });
}
var m = (t8, e16) => {
  e16.value !== false && (typeof e16.value == "string" && (t8.dataset.rippleClass = e16.value), e16.arg && (t8.dataset.duration = e16.arg), t8.addEventListener("mousedown", v2));
};
var u = (t8) => {
  delete t8.dataset.rippleClass, delete t8.dataset.duration, t8.removeEventListener("mousedown", v2);
};
var T = {
  // 元素的dom挂载后注册按下事件
  mounted: m,
  // 元素卸载前注销事件
  unmounted: u,
  // 元素更新时移除旧有事件并重新添加事件
  updated(t8, e16) {
    t8.dataset.class && t8.classList.add(t8.dataset.class);
    const s12 = !!e16.oldValue;
    e16.value && !s12 ? m(t8, e16) : !e16.value && s12 && u(t8);
  }
};

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
  setup(m6, { expose: b10, emit: y4 }) {
    const o10 = m6, { size: g10 } = l([o10], {
      size: "default"
    }), z5 = y4, n7 = e("button"), k6 = computed(() => [
      n7.b,
      n7.m(g10.value),
      o10.type && n7.m("color-" + o10.type),
      e.is("circle", o10.circle),
      e.is("disabled", o10.disabled),
      e.is("loading", o10.loading),
      e.is("plain", o10.plain),
      e.is("text", o10.text)
    ]), v6 = computed(() => o10.disabled || o10.loading ? false : (o10.plain || o10.text) && o10.type ? e.is(`ripple-${o10.type}`) : true), B7 = (e16) => {
      if (o10.disabled || o10.loading) {
        e16.stopPropagation();
        return;
      }
      z5("click", e16);
    }, f11 = shallowRef();
    return b10({
      el: f11
    }), (e16, E11) => withDirectives((openBlock(), createElementBlock(
      "button",
      mergeProps({
        class: k6.value,
        type: "button"
      }, e16.$attrs, {
        "aria-label": "button",
        onClick: B7,
        ref_key: "buttonRef",
        ref: f11
      }),
      [
        createCommentVNode(" 加载图标 "),
        e16.loading ? (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass([unref(e).is("loading"), e16.$slots.default ? unref(n7).e("icon-left") : null]),
          size: e16.iconSize
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e16.loadingIcon)))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class", "size"])) : createCommentVNode("v-if", true),
        createCommentVNode(" 左侧图标 "),
        e16.icon && e16.iconPosition === "left" && !e16.loading ? (openBlock(), createBlock(unref(k), {
          key: 1,
          class: normalizeClass(e16.$slots.default && unref(n7).e("icon-left")),
          size: e16.iconSize
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e16.icon)))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class", "size"])) : createCommentVNode("v-if", true),
        renderSlot(e16.$slots, "default"),
        createCommentVNode(" 右侧图标 "),
        e16.icon && e16.iconPosition === "right" ? (openBlock(), createBlock(unref(k), {
          key: 2,
          class: normalizeClass(e16.$slots.default && unref(n7).e("icon-right")),
          size: e16.iconSize
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e16.icon)))
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

// node_modules/ultra-ui/utils/helper/vue.js
function h4(t8) {
  return t8.type === Text2;
}
function m2(t8) {
  return t8 && t8.type === Fragment;
}
function p(t8) {
  return isVNode(t8) && t8.type === "template";
}
function l2(t8, e16 = []) {
  return t8.forEach((r7) => {
    if (!isVNode(r7)) {
      console.log(r7), (typeof r7 == "string" || typeof r7 == "number") && e16.push(createTextVNode(String(r7)));
      return;
    }
    (m2(r7) || p(r7)) && Array.isArray(r7.children) ? l2(r7.children, e16) : e16.push(r7);
  }), e16;
}
function x2(t8) {
  const e16 = shallowRef(t8());
  return watch(t8, (r7) => {
    e16.value = r7;
  }), e16;
}

// node_modules/ultra-ui/compositions/use-pop/index.js
var G = Math.min;
var Y = Math.max;
var tt = Math.round;
var H = (t8) => ({
  x: t8,
  y: t8
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
function ct(t8, e16, o10) {
  return Y(t8, G(e16, o10));
}
function Q(t8, e16) {
  return typeof t8 == "function" ? t8(e16) : t8;
}
function z(t8) {
  return t8.split("-")[0];
}
function Z(t8) {
  return t8.split("-")[1];
}
function At(t8) {
  return t8 === "x" ? "y" : "x";
}
function dt(t8) {
  return t8 === "y" ? "height" : "width";
}
function I(t8) {
  return ["top", "bottom"].includes(z(t8)) ? "y" : "x";
}
function mt(t8) {
  return At(I(t8));
}
function Ht(t8, e16, o10) {
  o10 === void 0 && (o10 = false);
  const n7 = Z(t8), i3 = mt(t8), r7 = dt(i3);
  let s12 = i3 === "x" ? n7 === (o10 ? "end" : "start") ? "right" : "left" : n7 === "start" ? "bottom" : "top";
  return e16.reference[r7] > e16.floating[r7] && (s12 = et(s12)), [s12, et(s12)];
}
function _t(t8) {
  const e16 = et(t8);
  return [lt(t8), e16, lt(e16)];
}
function lt(t8) {
  return t8.replace(/start|end/g, (e16) => Mt[e16]);
}
function zt(t8, e16, o10) {
  const n7 = ["left", "right"], i3 = ["right", "left"], r7 = ["top", "bottom"], s12 = ["bottom", "top"];
  switch (t8) {
    case "top":
    case "bottom":
      return o10 ? e16 ? i3 : n7 : e16 ? n7 : i3;
    case "left":
    case "right":
      return e16 ? r7 : s12;
    default:
      return [];
  }
}
function Xt(t8, e16, o10, n7) {
  const i3 = Z(t8);
  let r7 = zt(z(t8), o10 === "start", n7);
  return i3 && (r7 = r7.map((s12) => s12 + "-" + i3), e16 && (r7 = r7.concat(r7.map(lt)))), r7;
}
function et(t8) {
  return t8.replace(/left|right|bottom|top/g, (e16) => Bt[e16]);
}
function Yt(t8) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t8
  };
}
function Rt(t8) {
  return typeof t8 != "number" ? Yt(t8) : {
    top: t8,
    right: t8,
    bottom: t8,
    left: t8
  };
}
function nt(t8) {
  const {
    x: e16,
    y: o10,
    width: n7,
    height: i3
  } = t8;
  return {
    width: n7,
    height: i3,
    top: o10,
    left: e16,
    right: e16 + n7,
    bottom: o10 + i3,
    x: e16,
    y: o10
  };
}
function xt(t8, e16, o10) {
  let {
    reference: n7,
    floating: i3
  } = t8;
  const r7 = I(e16), s12 = mt(e16), c9 = dt(s12), l5 = z(e16), f11 = r7 === "y", d8 = n7.x + n7.width / 2 - i3.width / 2, u5 = n7.y + n7.height / 2 - i3.height / 2, m6 = n7[c9] / 2 - i3[c9] / 2;
  let a4;
  switch (l5) {
    case "top":
      a4 = {
        x: d8,
        y: n7.y - i3.height
      };
      break;
    case "bottom":
      a4 = {
        x: d8,
        y: n7.y + n7.height
      };
      break;
    case "right":
      a4 = {
        x: n7.x + n7.width,
        y: u5
      };
      break;
    case "left":
      a4 = {
        x: n7.x - i3.width,
        y: u5
      };
      break;
    default:
      a4 = {
        x: n7.x,
        y: n7.y
      };
  }
  switch (Z(e16)) {
    case "start":
      a4[s12] -= m6 * (o10 && f11 ? -1 : 1);
      break;
    case "end":
      a4[s12] += m6 * (o10 && f11 ? -1 : 1);
      break;
  }
  return a4;
}
var jt = async (t8, e16, o10) => {
  const {
    placement: n7 = "bottom",
    strategy: i3 = "absolute",
    middleware: r7 = [],
    platform: s12
  } = o10, c9 = r7.filter(Boolean), l5 = await (s12.isRTL == null ? void 0 : s12.isRTL(e16));
  let f11 = await s12.getElementRects({
    reference: t8,
    floating: e16,
    strategy: i3
  }), {
    x: d8,
    y: u5
  } = xt(f11, n7, l5), m6 = n7, a4 = {}, g10 = 0;
  for (let h7 = 0; h7 < c9.length; h7++) {
    const {
      name: w11,
      fn: x11
    } = c9[h7], {
      x: p3,
      y: v6,
      data: A11,
      reset: y4
    } = await x11({
      x: d8,
      y: u5,
      initialPlacement: n7,
      placement: m6,
      strategy: i3,
      middlewareData: a4,
      rects: f11,
      platform: s12,
      elements: {
        reference: t8,
        floating: e16
      }
    });
    d8 = p3 ?? d8, u5 = v6 ?? u5, a4 = {
      ...a4,
      [w11]: {
        ...a4[w11],
        ...A11
      }
    }, y4 && g10 <= 50 && (g10++, typeof y4 == "object" && (y4.placement && (m6 = y4.placement), y4.rects && (f11 = y4.rects === true ? await s12.getElementRects({
      reference: t8,
      floating: e16,
      strategy: i3
    }) : y4.rects), {
      x: d8,
      y: u5
    } = xt(f11, m6, l5)), h7 = -1);
  }
  return {
    x: d8,
    y: u5,
    placement: m6,
    strategy: i3,
    middlewareData: a4
  };
};
async function Et(t8, e16) {
  var o10;
  e16 === void 0 && (e16 = {});
  const {
    x: n7,
    y: i3,
    platform: r7,
    rects: s12,
    elements: c9,
    strategy: l5
  } = t8, {
    boundary: f11 = "clippingAncestors",
    rootBoundary: d8 = "viewport",
    elementContext: u5 = "floating",
    altBoundary: m6 = false,
    padding: a4 = 0
  } = Q(e16, t8), g10 = Rt(a4), w11 = c9[m6 ? u5 === "floating" ? "reference" : "floating" : u5], x11 = nt(await r7.getClippingRect({
    element: (o10 = await (r7.isElement == null ? void 0 : r7.isElement(w11))) == null || o10 ? w11 : w11.contextElement || await (r7.getDocumentElement == null ? void 0 : r7.getDocumentElement(c9.floating)),
    boundary: f11,
    rootBoundary: d8,
    strategy: l5
  })), p3 = u5 === "floating" ? {
    x: n7,
    y: i3,
    width: s12.floating.width,
    height: s12.floating.height
  } : s12.reference, v6 = await (r7.getOffsetParent == null ? void 0 : r7.getOffsetParent(c9.floating)), A11 = await (r7.isElement == null ? void 0 : r7.isElement(v6)) ? await (r7.getScale == null ? void 0 : r7.getScale(v6)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y4 = nt(r7.convertOffsetParentRelativeRectToViewportRelativeRect ? await r7.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c9,
    rect: p3,
    offsetParent: v6,
    strategy: l5
  }) : p3);
  return {
    top: (x11.top - y4.top + g10.top) / A11.y,
    bottom: (y4.bottom - x11.bottom + g10.bottom) / A11.y,
    left: (x11.left - y4.left + g10.left) / A11.x,
    right: (y4.right - x11.right + g10.right) / A11.x
  };
}
var It = (t8) => ({
  name: "arrow",
  options: t8,
  async fn(e16) {
    const {
      x: o10,
      y: n7,
      placement: i3,
      rects: r7,
      platform: s12,
      elements: c9,
      middlewareData: l5
    } = e16, {
      element: f11,
      padding: d8 = 0
    } = Q(t8, e16) || {};
    if (f11 == null)
      return {};
    const u5 = Rt(d8), m6 = {
      x: o10,
      y: n7
    }, a4 = mt(i3), g10 = dt(a4), h7 = await s12.getDimensions(f11), w11 = a4 === "y", x11 = w11 ? "top" : "left", p3 = w11 ? "bottom" : "right", v6 = w11 ? "clientHeight" : "clientWidth", A11 = r7.reference[g10] + r7.reference[a4] - m6[a4] - r7.floating[g10], y4 = m6[a4] - r7.reference[a4], N4 = await (s12.getOffsetParent == null ? void 0 : s12.getOffsetParent(f11));
    let S8 = N4 ? N4[v6] : 0;
    (!S8 || !await (s12.isElement == null ? void 0 : s12.isElement(N4))) && (S8 = c9.floating[v6] || r7.floating[g10]);
    const V6 = A11 / 2 - y4 / 2, L5 = S8 / 2 - h7[g10] / 2 - 1, E11 = G(u5[x11], L5), F6 = G(u5[p3], L5), D4 = E11, W6 = S8 - h7[g10] - F6, b10 = S8 / 2 - h7[g10] / 2 + V6, X5 = ct(D4, b10, W6), k6 = !l5.arrow && Z(i3) != null && b10 !== X5 && r7.reference[g10] / 2 - (b10 < D4 ? E11 : F6) - h7[g10] / 2 < 0, P8 = k6 ? b10 < D4 ? b10 - D4 : b10 - W6 : 0;
    return {
      [a4]: m6[a4] + P8,
      data: {
        [a4]: X5,
        centerOffset: b10 - X5 - P8,
        ...k6 && {
          alignmentOffset: P8
        }
      },
      reset: k6
    };
  }
});
var Kt = function(t8) {
  return t8 === void 0 && (t8 = {}), {
    name: "flip",
    options: t8,
    async fn(e16) {
      var o10, n7;
      const {
        placement: i3,
        middlewareData: r7,
        rects: s12,
        initialPlacement: c9,
        platform: l5,
        elements: f11
      } = e16, {
        mainAxis: d8 = true,
        crossAxis: u5 = true,
        fallbackPlacements: m6,
        fallbackStrategy: a4 = "bestFit",
        fallbackAxisSideDirection: g10 = "none",
        flipAlignment: h7 = true,
        ...w11
      } = Q(t8, e16);
      if ((o10 = r7.arrow) != null && o10.alignmentOffset)
        return {};
      const x11 = z(i3), p3 = I(c9), v6 = z(c9) === c9, A11 = await (l5.isRTL == null ? void 0 : l5.isRTL(f11.floating)), y4 = m6 || (v6 || !h7 ? [et(c9)] : _t(c9)), N4 = g10 !== "none";
      !m6 && N4 && y4.push(...Xt(c9, h7, g10, A11));
      const S8 = [c9, ...y4], V6 = await Et(e16, w11), L5 = [];
      let E11 = ((n7 = r7.flip) == null ? void 0 : n7.overflows) || [];
      if (d8 && L5.push(V6[x11]), u5) {
        const b10 = Ht(i3, s12, A11);
        L5.push(V6[b10[0]], V6[b10[1]]);
      }
      if (E11 = [...E11, {
        placement: i3,
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
          switch (a4) {
            case "bestFit": {
              var W6;
              const P8 = (W6 = E11.filter((B7) => {
                if (N4) {
                  const M8 = I(B7.placement);
                  return M8 === p3 || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M8 === "y";
                }
                return true;
              }).map((B7) => [B7.placement, B7.overflows.filter((M8) => M8 > 0).reduce((M8, kt2) => M8 + kt2, 0)]).sort((B7, M8) => B7[1] - M8[1])[0]) == null ? void 0 : W6[0];
              P8 && (k6 = P8);
              break;
            }
            case "initialPlacement":
              k6 = c9;
              break;
          }
        if (i3 !== k6)
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
async function qt(t8, e16) {
  const {
    placement: o10,
    platform: n7,
    elements: i3
  } = t8, r7 = await (n7.isRTL == null ? void 0 : n7.isRTL(i3.floating)), s12 = z(o10), c9 = Z(o10), l5 = I(o10) === "y", f11 = ["left", "top"].includes(s12) ? -1 : 1, d8 = r7 && l5 ? -1 : 1, u5 = Q(e16, t8);
  let {
    mainAxis: m6,
    crossAxis: a4,
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
  return c9 && typeof g10 == "number" && (a4 = c9 === "end" ? g10 * -1 : g10), l5 ? {
    x: a4 * d8,
    y: m6 * f11
  } : {
    x: m6 * f11,
    y: a4 * d8
  };
}
var Gt = function(t8) {
  return t8 === void 0 && (t8 = 0), {
    name: "offset",
    options: t8,
    async fn(e16) {
      var o10, n7;
      const {
        x: i3,
        y: r7,
        placement: s12,
        middlewareData: c9
      } = e16, l5 = await qt(e16, t8);
      return s12 === ((o10 = c9.offset) == null ? void 0 : o10.placement) && (n7 = c9.arrow) != null && n7.alignmentOffset ? {} : {
        x: i3 + l5.x,
        y: r7 + l5.y,
        data: {
          ...l5,
          placement: s12
        }
      };
    }
  };
};
var Jt = function(t8) {
  return t8 === void 0 && (t8 = {}), {
    name: "shift",
    options: t8,
    async fn(e16) {
      const {
        x: o10,
        y: n7,
        placement: i3
      } = e16, {
        mainAxis: r7 = true,
        crossAxis: s12 = false,
        limiter: c9 = {
          fn: (w11) => {
            let {
              x: x11,
              y: p3
            } = w11;
            return {
              x: x11,
              y: p3
            };
          }
        },
        ...l5
      } = Q(t8, e16), f11 = {
        x: o10,
        y: n7
      }, d8 = await Et(e16, l5), u5 = I(z(i3)), m6 = At(u5);
      let a4 = f11[m6], g10 = f11[u5];
      if (r7) {
        const w11 = m6 === "y" ? "top" : "left", x11 = m6 === "y" ? "bottom" : "right", p3 = a4 + d8[w11], v6 = a4 - d8[x11];
        a4 = ct(p3, a4, v6);
      }
      if (s12) {
        const w11 = u5 === "y" ? "top" : "left", x11 = u5 === "y" ? "bottom" : "right", p3 = g10 + d8[w11], v6 = g10 - d8[x11];
        g10 = ct(p3, g10, v6);
      }
      const h7 = c9.fn({
        ...e16,
        [m6]: a4,
        [u5]: g10
      });
      return {
        ...h7,
        data: {
          x: h7.x - o10,
          y: h7.y - n7,
          enabled: {
            [m6]: r7,
            [u5]: s12
          }
        }
      };
    }
  };
};
function ot() {
  return typeof window < "u";
}
function q(t8) {
  return Ct(t8) ? (t8.nodeName || "").toLowerCase() : "#document";
}
function R(t8) {
  var e16;
  return (t8 == null || (e16 = t8.ownerDocument) == null ? void 0 : e16.defaultView) || window;
}
function $2(t8) {
  var e16;
  return (e16 = (Ct(t8) ? t8.ownerDocument : t8.document) || window.document) == null ? void 0 : e16.documentElement;
}
function Ct(t8) {
  return ot() ? t8 instanceof Node || t8 instanceof R(t8).Node : false;
}
function C(t8) {
  return ot() ? t8 instanceof Element || t8 instanceof R(t8).Element : false;
}
function T2(t8) {
  return ot() ? t8 instanceof HTMLElement || t8 instanceof R(t8).HTMLElement : false;
}
function yt(t8) {
  return !ot() || typeof ShadowRoot > "u" ? false : t8 instanceof ShadowRoot || t8 instanceof R(t8).ShadowRoot;
}
function U(t8) {
  const {
    overflow: e16,
    overflowX: o10,
    overflowY: n7,
    display: i3
  } = O(t8);
  return /auto|scroll|overlay|hidden|clip/.test(e16 + n7 + o10) && !["inline", "contents"].includes(i3);
}
function Qt(t8) {
  return ["table", "td", "th"].includes(q(t8));
}
function it(t8) {
  return [":popover-open", ":modal"].some((e16) => {
    try {
      return t8.matches(e16);
    } catch {
      return false;
    }
  });
}
function gt(t8) {
  const e16 = pt(), o10 = C(t8) ? O(t8) : t8;
  return o10.transform !== "none" || o10.perspective !== "none" || (o10.containerType ? o10.containerType !== "normal" : false) || !e16 && (o10.backdropFilter ? o10.backdropFilter !== "none" : false) || !e16 && (o10.filter ? o10.filter !== "none" : false) || ["transform", "perspective", "filter"].some((n7) => (o10.willChange || "").includes(n7)) || ["paint", "layout", "strict", "content"].some((n7) => (o10.contain || "").includes(n7));
}
function Zt(t8) {
  let e16 = _(t8);
  for (; T2(e16) && !K(e16); ) {
    if (gt(e16))
      return e16;
    if (it(e16))
      return null;
    e16 = _(e16);
  }
  return null;
}
function pt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function K(t8) {
  return ["html", "body", "#document"].includes(q(t8));
}
function O(t8) {
  return R(t8).getComputedStyle(t8);
}
function rt(t8) {
  return C(t8) ? {
    scrollLeft: t8.scrollLeft,
    scrollTop: t8.scrollTop
  } : {
    scrollLeft: t8.scrollX,
    scrollTop: t8.scrollY
  };
}
function _(t8) {
  if (q(t8) === "html")
    return t8;
  const e16 = (
    // Step into the shadow DOM of the parent of a slotted node.
    t8.assignedSlot || // DOM Element detected.
    t8.parentNode || // ShadowRoot detected.
    yt(t8) && t8.host || // Fallback.
    $2(t8)
  );
  return yt(e16) ? e16.host : e16;
}
function Ot(t8) {
  const e16 = _(t8);
  return K(e16) ? t8.ownerDocument ? t8.ownerDocument.body : t8.body : T2(e16) && U(e16) ? e16 : Ot(e16);
}
function ft(t8, e16, o10) {
  var n7;
  e16 === void 0 && (e16 = []), o10 === void 0 && (o10 = true);
  const i3 = Ot(t8), r7 = i3 === ((n7 = t8.ownerDocument) == null ? void 0 : n7.body), s12 = R(i3);
  if (r7) {
    const c9 = at(s12);
    return e16.concat(s12, s12.visualViewport || [], U(i3) ? i3 : [], c9 && o10 ? ft(c9) : []);
  }
  return e16.concat(i3, ft(i3, [], o10));
}
function at(t8) {
  return t8.parent && Object.getPrototypeOf(t8.parent) ? t8.frameElement : null;
}
function Pt(t8) {
  const e16 = O(t8);
  let o10 = parseFloat(e16.width) || 0, n7 = parseFloat(e16.height) || 0;
  const i3 = T2(t8), r7 = i3 ? t8.offsetWidth : o10, s12 = i3 ? t8.offsetHeight : n7, c9 = tt(o10) !== r7 || tt(n7) !== s12;
  return c9 && (o10 = r7, n7 = s12), {
    width: o10,
    height: n7,
    $: c9
  };
}
function Tt(t8) {
  return C(t8) ? t8 : t8.contextElement;
}
function j(t8) {
  const e16 = Tt(t8);
  if (!T2(e16))
    return H(1);
  const o10 = e16.getBoundingClientRect(), {
    width: n7,
    height: i3,
    $: r7
  } = Pt(e16);
  let s12 = (r7 ? tt(o10.width) : o10.width) / n7, c9 = (r7 ? tt(o10.height) : o10.height) / i3;
  return (!s12 || !Number.isFinite(s12)) && (s12 = 1), (!c9 || !Number.isFinite(c9)) && (c9 = 1), {
    x: s12,
    y: c9
  };
}
var Ut = H(0);
function St(t8) {
  const e16 = R(t8);
  return !pt() || !e16.visualViewport ? Ut : {
    x: e16.visualViewport.offsetLeft,
    y: e16.visualViewport.offsetTop
  };
}
function te(t8, e16, o10) {
  return e16 === void 0 && (e16 = false), !o10 || e16 && o10 !== R(t8) ? false : e16;
}
function J(t8, e16, o10, n7) {
  e16 === void 0 && (e16 = false), o10 === void 0 && (o10 = false);
  const i3 = t8.getBoundingClientRect(), r7 = Tt(t8);
  let s12 = H(1);
  e16 && (n7 ? C(n7) && (s12 = j(n7)) : s12 = j(t8));
  const c9 = te(r7, o10, n7) ? St(r7) : H(0);
  let l5 = (i3.left + c9.x) / s12.x, f11 = (i3.top + c9.y) / s12.y, d8 = i3.width / s12.x, u5 = i3.height / s12.y;
  if (r7) {
    const m6 = R(r7), a4 = n7 && C(n7) ? R(n7) : n7;
    let g10 = m6, h7 = at(g10);
    for (; h7 && n7 && a4 !== g10; ) {
      const w11 = j(h7), x11 = h7.getBoundingClientRect(), p3 = O(h7), v6 = x11.left + (h7.clientLeft + parseFloat(p3.paddingLeft)) * w11.x, A11 = x11.top + (h7.clientTop + parseFloat(p3.paddingTop)) * w11.y;
      l5 *= w11.x, f11 *= w11.y, d8 *= w11.x, u5 *= w11.y, l5 += v6, f11 += A11, g10 = R(h7), h7 = at(g10);
    }
  }
  return nt({
    width: d8,
    height: u5,
    x: l5,
    y: f11
  });
}
function ee(t8) {
  let {
    elements: e16,
    rect: o10,
    offsetParent: n7,
    strategy: i3
  } = t8;
  const r7 = i3 === "fixed", s12 = $2(n7), c9 = e16 ? it(e16.floating) : false;
  if (n7 === s12 || c9 && r7)
    return o10;
  let l5 = {
    scrollLeft: 0,
    scrollTop: 0
  }, f11 = H(1);
  const d8 = H(0), u5 = T2(n7);
  if ((u5 || !u5 && !r7) && ((q(n7) !== "body" || U(s12)) && (l5 = rt(n7)), T2(n7))) {
    const m6 = J(n7);
    f11 = j(n7), d8.x = m6.x + n7.clientLeft, d8.y = m6.y + n7.clientTop;
  }
  return {
    width: o10.width * f11.x,
    height: o10.height * f11.y,
    x: o10.x * f11.x - l5.scrollLeft * f11.x + d8.x,
    y: o10.y * f11.y - l5.scrollTop * f11.y + d8.y
  };
}
function ne(t8) {
  return Array.from(t8.getClientRects());
}
function ut(t8, e16) {
  const o10 = rt(t8).scrollLeft;
  return e16 ? e16.left + o10 : J($2(t8)).left + o10;
}
function oe(t8) {
  const e16 = $2(t8), o10 = rt(t8), n7 = t8.ownerDocument.body, i3 = Y(e16.scrollWidth, e16.clientWidth, n7.scrollWidth, n7.clientWidth), r7 = Y(e16.scrollHeight, e16.clientHeight, n7.scrollHeight, n7.clientHeight);
  let s12 = -o10.scrollLeft + ut(t8);
  const c9 = -o10.scrollTop;
  return O(n7).direction === "rtl" && (s12 += Y(e16.clientWidth, n7.clientWidth) - i3), {
    width: i3,
    height: r7,
    x: s12,
    y: c9
  };
}
function ie(t8, e16) {
  const o10 = R(t8), n7 = $2(t8), i3 = o10.visualViewport;
  let r7 = n7.clientWidth, s12 = n7.clientHeight, c9 = 0, l5 = 0;
  if (i3) {
    r7 = i3.width, s12 = i3.height;
    const f11 = pt();
    (!f11 || f11 && e16 === "fixed") && (c9 = i3.offsetLeft, l5 = i3.offsetTop);
  }
  return {
    width: r7,
    height: s12,
    x: c9,
    y: l5
  };
}
function re(t8, e16) {
  const o10 = J(t8, true, e16 === "fixed"), n7 = o10.top + t8.clientTop, i3 = o10.left + t8.clientLeft, r7 = T2(t8) ? j(t8) : H(1), s12 = t8.clientWidth * r7.x, c9 = t8.clientHeight * r7.y, l5 = i3 * r7.x, f11 = n7 * r7.y;
  return {
    width: s12,
    height: c9,
    x: l5,
    y: f11
  };
}
function vt(t8, e16, o10) {
  let n7;
  if (e16 === "viewport")
    n7 = ie(t8, o10);
  else if (e16 === "document")
    n7 = oe($2(t8));
  else if (C(e16))
    n7 = re(e16, o10);
  else {
    const i3 = St(t8);
    n7 = {
      ...e16,
      x: e16.x - i3.x,
      y: e16.y - i3.y
    };
  }
  return nt(n7);
}
function Lt(t8, e16) {
  const o10 = _(t8);
  return o10 === e16 || !C(o10) || K(o10) ? false : O(o10).position === "fixed" || Lt(o10, e16);
}
function se(t8, e16) {
  const o10 = e16.get(t8);
  if (o10)
    return o10;
  let n7 = ft(t8, [], false).filter((c9) => C(c9) && q(c9) !== "body"), i3 = null;
  const r7 = O(t8).position === "fixed";
  let s12 = r7 ? _(t8) : t8;
  for (; C(s12) && !K(s12); ) {
    const c9 = O(s12), l5 = gt(s12);
    !l5 && c9.position === "fixed" && (i3 = null), (r7 ? !l5 && !i3 : !l5 && c9.position === "static" && !!i3 && ["absolute", "fixed"].includes(i3.position) || U(s12) && !l5 && Lt(t8, s12)) ? n7 = n7.filter((d8) => d8 !== s12) : i3 = c9, s12 = _(s12);
  }
  return e16.set(t8, n7), n7;
}
function ce(t8) {
  let {
    element: e16,
    boundary: o10,
    rootBoundary: n7,
    strategy: i3
  } = t8;
  const s12 = [...o10 === "clippingAncestors" ? it(e16) ? [] : se(e16, this._c) : [].concat(o10), n7], c9 = s12[0], l5 = s12.reduce((f11, d8) => {
    const u5 = vt(e16, d8, i3);
    return f11.top = Y(u5.top, f11.top), f11.right = G(u5.right, f11.right), f11.bottom = G(u5.bottom, f11.bottom), f11.left = Y(u5.left, f11.left), f11;
  }, vt(e16, c9, i3));
  return {
    width: l5.right - l5.left,
    height: l5.bottom - l5.top,
    x: l5.left,
    y: l5.top
  };
}
function le(t8) {
  const {
    width: e16,
    height: o10
  } = Pt(t8);
  return {
    width: e16,
    height: o10
  };
}
function fe(t8, e16, o10) {
  const n7 = T2(e16), i3 = $2(e16), r7 = o10 === "fixed", s12 = J(t8, true, r7, e16);
  let c9 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l5 = H(0);
  if (n7 || !n7 && !r7)
    if ((q(e16) !== "body" || U(i3)) && (c9 = rt(e16)), n7) {
      const a4 = J(e16, true, r7, e16);
      l5.x = a4.x + e16.clientLeft, l5.y = a4.y + e16.clientTop;
    } else i3 && (l5.x = ut(i3));
  let f11 = 0, d8 = 0;
  if (i3 && !n7 && !r7) {
    const a4 = i3.getBoundingClientRect();
    d8 = a4.top + c9.scrollTop, f11 = a4.left + c9.scrollLeft - // RTL <body> scrollbar.
    ut(i3, a4);
  }
  const u5 = s12.left + c9.scrollLeft - l5.x - f11, m6 = s12.top + c9.scrollTop - l5.y - d8;
  return {
    x: u5,
    y: m6,
    width: s12.width,
    height: s12.height
  };
}
function st(t8) {
  return O(t8).position === "static";
}
function bt(t8, e16) {
  if (!T2(t8) || O(t8).position === "fixed")
    return null;
  if (e16)
    return e16(t8);
  let o10 = t8.offsetParent;
  return $2(t8) === o10 && (o10 = o10.ownerDocument.body), o10;
}
function Dt(t8, e16) {
  const o10 = R(t8);
  if (it(t8))
    return o10;
  if (!T2(t8)) {
    let i3 = _(t8);
    for (; i3 && !K(i3); ) {
      if (C(i3) && !st(i3))
        return i3;
      i3 = _(i3);
    }
    return o10;
  }
  let n7 = bt(t8, e16);
  for (; n7 && Qt(n7) && st(n7); )
    n7 = bt(n7, e16);
  return n7 && K(n7) && st(n7) && !gt(n7) ? o10 : n7 || Zt(t8) || o10;
}
var ae = async function(t8) {
  const e16 = this.getOffsetParent || Dt, o10 = this.getDimensions, n7 = await o10(t8.floating);
  return {
    reference: fe(t8.reference, await e16(t8.floating), t8.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n7.width,
      height: n7.height
    }
  };
};
function ue(t8) {
  return O(t8).direction === "rtl";
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
var we = (t8, e16, o10) => {
  const n7 = /* @__PURE__ */ new Map(), i3 = {
    platform: de,
    ...o10
  }, r7 = {
    ...i3.platform,
    _c: n7
  };
  return jt(t8, e16, {
    ...i3,
    platform: r7
  });
};
function Re(t8) {
  const {
    triggerRef: e16,
    contentRef: o10,
    arrowRef: n7,
    arrowSize: i3 = 10,
    onTriggerPositionChange: r7,
    onAfterUpdate: s12,
    onBeforeUpdate: c9,
    direction: l5,
    alignment: f11
  } = t8, d8 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  };
  function u5(p3) {
    return isRef(p3) ? p3.value : p3;
  }
  async function m6() {
    if (!e16.value || !o10.value) return;
    const p3 = [
      me(n7 != null && n7.value ? i3 : 6),
      pe(),
      ge()
    ];
    n7 != null && n7.value && p3.push(he({ element: n7.value })), c9 == null || c9(e16.value, o10.value);
    const v6 = u5(l5) ?? "top", A11 = u5(f11) ?? "center", y4 = await we(e16.value, o10.value, {
      middleware: p3,
      placement: `${v6}${A11 === "center" ? "" : `-${A11}`}`
    });
    s12 == null || s12(y4);
    const { x: N4, y: S8, middlewareData: V6, placement: L5 } = y4;
    if (n2(o10.value, {
      left: `${N4}px`,
      top: `${S8}px`
    }), V6.arrow) {
      const { x: E11, y: F6 } = V6.arrow, D4 = d8[L5.split("-")[0]], W6 = `${i3}px`, b10 = i3 / 2;
      n2(n7.value, {
        width: W6,
        height: W6,
        left: E11 && `${E11 - b10}px`,
        top: F6 && `${F6 - b10}px`,
        [D4]: `-${b10}px`
      });
    }
  }
  watch(e16, () => {
    m6();
  });
  let a4 = [];
  function g10() {
    !r7 || !e16.value || (a4 = a(e16.value), a4.forEach((p3) => {
      p3.addEventListener("scroll", r7);
    }));
  }
  function h7() {
    r7 && (a4.forEach((p3) => {
      p3.removeEventListener("scroll", r7);
    }), a4 = []);
  }
  function w11() {
    r7 && window.addEventListener("resize", r7), e16.value && E2(e16.value, m6);
  }
  function x11() {
    e16.value && b(e16.value), r7 && window.removeEventListener("resize", r7);
  }
  return watch(
    [
      o10,
      () => u5(l5),
      () => u5(f11)
    ],
    ([p3]) => {
      if (p3) {
        g10(), w11();
        return;
      }
      h7(), x11();
    }
  ), onBeforeUnmount(() => {
    h7(), x11();
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
    var n7;
    const { content: r7, $slots: e16, $attrs: t8, $props: o10 } = this;
    return r7 === void 0 ? (n7 = e16.default) == null ? void 0 : n7.call(e16) : (Array.isArray(r7) || isVNode(r7) && (r7.props = t8 ? mergeProps(r7.props ?? {}, t8) : o10), r7);
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
    const o10 = S8, c9 = e("tip"), m6 = useSlots(), { size: _10 } = l([o10], {
      size: "default"
    }), P8 = computed(() => {
      const e16 = [c9.e("content"), c9.m(_10.value)], t8 = o10.class;
      return Array.isArray(t8) ? [...e16, ...t8] : [...e16, t8];
    }), d8 = shallowRef(), w11 = shallowRef(), R7 = shallowRef(), r7 = shallowRef(false);
    function $12() {
      var l5;
      const e16 = (l5 = m6.default) == null ? void 0 : l5.call(m6);
      return e16 != null && e16.length ? l2(e16)[0] : null;
    }
    const p3 = shallowReactive(/* @__PURE__ */ new Set()), I4 = computed(() => Array.from(p3).some((e16) => e16.value));
    provide(e2, {
      addChild(e16) {
        p3.add(e16);
      },
      removeChild(e16) {
        p3.delete(e16);
      }
    });
    const { addChild: v6, removeChild: g10 } = inject(e2, void 0) || {};
    v6 == null || v6(r7);
    const y4 = computed(() => {
      const { trigger: e16 } = o10, t8 = {};
      return e16 === "click" ? t8.onClick = h7 : e16 === "hover" && (t8.onMouseenter = h7, t8.onMouseleave = f11), t8;
    }), F6 = (e16) => {
      var t8, l5;
      o10.trigger !== "hover" && (o10.trigger === "click" && ((l5 = (t8 = d8.value) == null ? void 0 : t8.$el) != null && l5.contains(e16.target)) || f11());
    };
    let u5;
    const h7 = () => {
      u5 !== void 0 && clearTimeout(u5), r7.value = true;
    }, f11 = () => {
      o10.trigger === "hover" ? u5 = setTimeout(() => {
        r7.value = false;
      }, 250) : r7.value = false;
    }, N4 = x2(() => {
      var e16;
      return (e16 = d8.value) == null ? void 0 : e16.$el;
    });
    Re({
      triggerRef: N4,
      contentRef: w11,
      arrowRef: R7,
      direction: toRef(() => o10.direction),
      alignment: toRef(() => o10.alignment),
      onTriggerPositionChange() {
        f11();
      }
    });
    const k6 = shallowRef();
    function O7(e16) {
      N4.value = e16.triggerDom, k6.value = e16.content, h7();
    }
    return onBeforeUnmount(() => {
      clearTimeout(u5), g10 == null || g10(r7);
    }), V6({
      close: f11,
      trigger: O7
    }), (e16, t8) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        createCommentVNode(" 触发 "),
        createVNode(unref(d3), mergeProps({ ...y4.value, ...e16.$attrs }, {
          content: $12(),
          class: unref(c9).b,
          ref_key: "triggerRef",
          ref: d8
        }), null, 16, ["content", "class"]),
        createCommentVNode(" 弹出内容 "),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "tip" }, {
            default: withCtx(() => [
              r7.value || I4.value ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(e16.contentTag), {
                key: 0,
                class: normalizeClass(P8.value),
                style: normalizeStyle([o10.style, { zIndex: unref(o)() }]),
                ref_key: "contentRef",
                ref: w11,
                onMouseenter: y4.value.onMouseenter,
                onMouseleave: y4.value.onMouseleave,
                onClick: t8[0] || (t8[0] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  k6.value ? (openBlock(), createBlock(unref(d3), {
                    key: 0,
                    content: k6.value
                  }, null, 8, ["content"])) : createCommentVNode("v-if", true),
                  renderSlot(e16.$slots, "content", {}, () => [
                    createTextVNode(
                      toDisplayString(e16.content),
                      1
                      /* TEXT */
                    )
                  ]),
                  e16.hideArrow ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 1,
                      class: normalizeClass(unref(c9).e("arrow")),
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
function i(o10) {
  if (o10)
    return provide(r3, {
      formProps: o10
    });
  const n7 = inject(r3, void 0) || {};
  return {
    inForm: !!n7,
    ...n7
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
  setup(w11, { emit: g10 }) {
    const s12 = g10, t8 = e("pop-confirm"), r7 = shallowRef(), { formProps: _10 } = i(), { size: y4 } = g([_10 ?? {}], {
      size: "default"
    }), C6 = () => {
      var e16;
      s12("confirm"), (e16 = r7.value) == null || e16.close();
    }, k6 = () => {
      var e16;
      s12("cancel"), (e16 = r7.value) == null || e16.close();
    };
    return (e16, f11) => (openBlock(), createBlock(unref(Re2), {
      ref_key: "tipRef",
      ref: r7,
      class: normalizeClass(unref(t8).b),
      trigger: e16.trigger,
      direction: e16.direction,
      alignment: e16.alignment,
      "content-tag": e16.contentTag
    }, {
      content: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(t8).m("main"), unref(t8).m(unref(y4))])
          },
          [
            createVNode(unref(k), {
              size: 16,
              class: normalizeClass(unref(t8).m("icon")),
              style: normalizeStyle({ color: e16.iconColor })
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(e16.icon)))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "style"]),
            createBaseVNode(
              "span",
              null,
              toDisplayString(e16.title),
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
            class: normalizeClass(unref(t8).m("action"))
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
                  toDisplayString(e16.cancelText),
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
              onClick: C6
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(e16.confirmText),
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
        renderSlot(e16.$slots, "reference")
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
  setup(d8, { emit: u5 }) {
    const i3 = d8, l5 = u5, r7 = e("action"), o10 = inject(o2, void 0);
    function y4() {
      l5("run"), o10 == null || o10.close();
    }
    return (n7, a4) => n7.needConfirm ? (openBlock(), createBlock(unref(K2), {
      key: 0,
      title: "确认执行此操作吗？",
      onConfirm: y4,
      style: { display: "inline-block" },
      direction: "left"
    }, {
      reference: withCtx(() => [
        createVNode(unref(M), mergeProps({
          class: unref(r7).b
        }, i3), {
          default: withCtx(() => [
            renderSlot(n7.$slots, "default")
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
    }, i3, {
      onClick: a4[0] || (a4[0] = (g10) => l5("run"))
    }), {
      default: withCtx(() => [
        renderSlot(n7.$slots, "default")
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
  setup(p3) {
    const s12 = p3, u5 = e("action-group"), o10 = useSlots();
    function d8() {
      var a4;
      const r7 = (a4 = o10.default) == null ? void 0 : a4.call(o10);
      if (!r7) return [];
      const n7 = l2(r7).filter(
        // @ts-ignore
        (f11) => {
          var i3;
          return ((i3 = f11.type) == null ? void 0 : i3.name) === "Action";
        }
      ), e16 = n7.slice(0, s12.max - 1), c9 = n7.slice(s12.max - 1), m6 = c9.length ? createVNode(Re2, {
        direction: "bottom",
        class: u5.e("dropdown")
      }, {
        content: () => c9,
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
      return m6 ? [...e16, m6] : e16;
    }
    return (r7, n7) => (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(d8(), (e16) => (openBlock(), createBlock(resolveDynamicComponent(e16), {
        key: e16.key
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
  setup(m6, { expose: w11 }) {
    const o10 = m6, B7 = useSlots(), p3 = e("dropdown"), l5 = shallowRef(), v6 = shallowRef();
    let i3;
    const r7 = useModel(m6, "visible");
    let d8;
    function T6() {
      d8 !== void 0 && clearTimeout(d8);
    }
    function u5(e16) {
      T6();
      const { virtual: t8, real: n7 } = e16 || {};
      t8 && t8 instanceof HTMLElement && (l5.value = t8, i3 = n7 || t8), r7.value = true;
    }
    function s12() {
      i3 = void 0, o10.trigger === "hover" ? d8 = setTimeout(() => {
        r7.value = false;
      }, 200) : r7.value = false;
    }
    function W6(e16) {
      var t8;
      o10.clickWhetherHide || o10.trigger === "click" && ((t8 = l5.value) != null && t8.contains(e16.target) || i3 != null && i3.contains(e16.target)) || s12();
    }
    const { update: R7 } = Re({
      triggerRef: l5,
      contentRef: v6,
      direction: "bottom",
      onTriggerPositionChange() {
        s12();
      },
      onBeforeUpdate(e16, t8) {
        n2(t8, {
          width: o10.width ?? `${e16.offsetWidth}px`,
          minWidth: o10.minWidth && o10.minWidth
        });
      }
    }), f11 = computed(() => {
      const { trigger: e16, disabled: t8 } = o10, n7 = {};
      return t8 || e16 === "custom" || (e16 === "click" ? n7.onClick = r7.value ? s12 : u5 : e16 === "hover" && (n7.onMouseenter = u5, n7.onMouseleave = s12)), n7;
    });
    return w11({
      open: u5,
      close: s12,
      /**暴露出更新dropdown内容位置方法 适用与级联选择器组件 */
      updateDropdown: R7
    }), (e16, t8) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        B7.trigger ? (openBlock(), createElementBlock(
          "div",
          mergeProps({
            key: 0,
            class: unref(p3).b
          }, { ...f11.value, ...e16.$attrs }, {
            ref_key: "triggerRef",
            ref: l5
          }),
          [
            renderSlot(e16.$slots, "trigger")
          ],
          16
          /* FULL_PROPS */
        )) : createCommentVNode("v-if", true),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "slide" }, {
            default: withCtx(() => [
              r7.value ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(e16.contentTag), {
                key: 0,
                class: normalizeClass([unref(p3).e("content"), e16.contentClass]),
                ref_key: "contentRef",
                ref: v6,
                style: normalizeStyle({
                  zIndex: unref(o)()
                }),
                onMouseenter: f11.value.onMouseenter,
                onMouseleave: f11.value.onMouseleave
              }, {
                default: withCtx(() => [
                  renderSlot(e16.$slots, "content")
                ]),
                _: 3
                /* FORWARDED */
              }, 40, ["class", "style", "onMouseenter", "onMouseleave"])), [
                [unref(h2), e16.trigger === "click" ? W6 : void 0]
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
  const { target: c9, onDragStart: n7, onDrag: o10, onDragEnd: s12 } = l5;
  let u5 = 0, r7 = 0, a4 = 0, d8 = 0;
  const p3 = document.onselectstart, m6 = (e16) => {
    var t8;
    e16.stopPropagation(), e16.button === 0 && ((t8 = window.getSelection()) == null || t8.removeAllRanges(), e16.stopImmediatePropagation(), u5 = e16.x, r7 = e16.y, n7 == null || n7(e16), document.onselectstart = () => false, document.addEventListener("mousemove", i3, {
      passive: true
    }), document.addEventListener("mouseup", v6));
  }, i3 = (e16) => {
    a4 = e16.x - u5, d8 = e16.y - r7, o10 == null || o10(a4, d8, e16);
  }, v6 = (e16) => {
    document.removeEventListener("mousemove", i3), document.removeEventListener("mouseup", v6), s12 == null || s12(e16.x - u5, e16.y - r7, e16), document.onselectstart = p3;
  };
  watch(
    c9,
    (e16, t8) => {
      t8 == null || t8.removeEventListener("mousedown", m6), e16 && e16.addEventListener("mousedown", m6);
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    var e16;
    (e16 = c9.value) == null || e16.removeEventListener("mousedown", m6), document.removeEventListener("mousemove", i3), document.removeEventListener("mouseup", v6);
  });
}

// node_modules/ultra-ui/components/scroll/di.js
var o3 = Symbol();

// node_modules/ultra-ui/venders/scroll-bar.vue_vue_type_script_setup_true_lang-AGVsxDHJ.js
var q2 = defineComponent({
  name: "ScrollBar",
  __name: "scroll-bar",
  props: {
    type: {}
  },
  emits: ["drag"],
  setup(p3, { expose: v6, emit: g10 }) {
    const s12 = p3, d8 = g10, a4 = shallowRef(0), t8 = shallowRef(0);
    let l5 = 0, i3 = 0;
    const { cls: x11 } = inject(o3), n7 = shallowRef(false), y4 = computed(() => [x11.e(`bar-${s12.type}`), e.is("active", n7.value)]), _10 = s12.type === "x" ? computed(() => ({
      width: a4.value + "px",
      transform: `translateX(${t8.value}px)`
    })) : computed(() => ({
      height: a4.value + "px",
      transform: `translateY(${t8.value}px)`
    })), m6 = shallowRef(), h7 = s12.type === "x" ? (e16, r7) => l5 + e16 : (e16, r7) => l5 + r7;
    return w({
      target: m6,
      onDragStart() {
        n7.value = true, l5 = t8.value;
      },
      onDragEnd() {
        n7.value = false;
      },
      onDrag(e16, r7) {
        const c9 = h7(e16, r7), f11 = i3 - a4.value;
        c9 < 0 ? t8.value = 0 : c9 > f11 ? t8.value = f11 : t8.value = c9, d8("drag", t8.value, a4.value);
      }
    }), v6({
      /** 更新滚动条状态 */
      update(e16, r7) {
        a4.value = e16, t8.value = r7;
      },
      /** 设置轨道尺寸 */
      setTrackSize(e16) {
        i3 = e16;
      }
    }), (e16, r7) => withDirectives((openBlock(), createElementBlock(
      "div",
      {
        ref_key: "domRef",
        ref: m6,
        style: normalizeStyle(unref(_10)),
        class: normalizeClass(y4.value)
      },
      null,
      6
      /* CLASS, STYLE */
    )), [
      [vShow, !!a4.value]
    ]);
  }
});

// node_modules/ultra-ui/compositions/use-resize-observer/index.js
function o4(u5, e16) {
  if (Array.isArray(u5))
    return u5.forEach((f11) => o4(f11, e16));
  u5.value && e16.unobserve(u5.value);
}
function s3(u5) {
  const { targets: e16, onResize: f11 } = u5;
  let n7;
  return Array.isArray(e16) ? watch(
    e16,
    (i3, c9) => {
      !n7 && i3.length && (n7 = new ResizeObserver(f11)), c9.length && c9.forEach((t8) => {
        t8 && (n7 == null || n7.unobserve(t8));
      }), i3.length && i3.forEach((t8) => {
        t8 && (n7 == null || n7.observe(t8));
      });
    },
    { immediate: true }
  ) : watch(
    e16,
    (i3, c9) => {
      !n7 && i3 && (n7 = new ResizeObserver(f11)), c9 && (n7 == null || n7.unobserve(c9)), i3 && (n7 == null || n7.observe(i3));
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    n7 && o4(e16, n7), n7 == null || n7.disconnect(), n7 = void 0;
  }), {
    disconnect() {
      n7 && o4(e16, n7), n7 == null || n7.disconnect();
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
    const d8 = Y3, w11 = N4, a4 = e("scroll"), $12 = computed(() => [a4.b, e.is("always", d8.always)]), E11 = computed(() => ({
      height: f(d8.height, "px")
    })), y4 = shallowRef(), i3 = shallowRef(), n7 = shallowRef(), m6 = shallowRef(), p3 = shallowRef(), l5 = {
      width: 0,
      height: 0
    };
    s3({
      targets: [y4, i3],
      onResize: (e16) => {
        var t8, o10;
        if (e16.length && i3.value) {
          const { clientHeight: s12, clientWidth: r7 } = i3.value;
          l5.width = r7, l5.height = s12, (t8 = m6.value) == null || t8.setTrackSize(l5.width), (o10 = p3.value) == null || o10.setTrackSize(l5.height), v6(), w11(
            "resize",
            e16.map((g10) => g10.target)
          );
        }
      }
    });
    const v6 = () => {
      var k6, D4, T6, z5;
      if (!n7.value) return;
      const {
        scrollHeight: e16,
        clientHeight: t8,
        scrollTop: o10,
        scrollWidth: s12,
        clientWidth: r7,
        scrollLeft: g10
      } = n7.value;
      if (w11("scroll", { x: g10, y: o10 }), e16 !== t8) {
        const h7 = Math.max(
          t8 / e16 * l5.height,
          X
        ), b10 = o10 / (e16 - t8) * (l5.height - h7);
        (k6 = p3.value) == null || k6.update(h7, b10);
      } else
        (D4 = p3.value) == null || D4.update(0, 0);
      if (s12 !== r7) {
        const h7 = Math.max(
          r7 / s12 * l5.width,
          X
        ), b10 = g10 / (s12 - r7) * (l5.width - h7);
        (T6 = m6.value) == null || T6.update(h7, b10);
      } else
        (z5 = m6.value) == null || z5.update(0, 0);
    }, M8 = debounce(
      (e16, t8) => {
        const o10 = n7.value, { clientWidth: s12, scrollWidth: r7 } = o10;
        o10.scrollLeft = e16 / (l5.width - t8) * (r7 - s12);
      },
      d8.dragDebounce ?? 0,
      false
    ), V6 = debounce(
      (e16, t8) => {
        const o10 = n7.value, { clientHeight: s12, scrollHeight: r7 } = o10;
        o10.scrollTop = e16 / (l5.height - t8) * (r7 - s12);
      },
      d8.dragDebounce ?? 0,
      false
    ), I4 = () => {
      v6();
    }, K6 = (e16) => {
      const t8 = n7.value;
      t8 && t8.scrollTo({
        left: e16,
        behavior: "smooth"
      });
    }, O7 = (e16) => {
      const t8 = n7.value;
      t8 && t8.scrollTo({
        top: e16,
        behavior: "smooth"
      });
    }, P8 = (e16) => {
      e16.x !== void 0 && K6(e16.x), e16.y !== void 0 && O7(e16.y);
    };
    return provide(o3, {
      cls: a4
    }), L5({
      el: i3,
      contentRef: y4,
      containerRef: n7,
      scrollTo: P8,
      update: v6
    }), (e16, t8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass($12.value),
        style: normalizeStyle(E11.value),
        ref_key: "scrollRef",
        ref: i3
      },
      [
        createBaseVNode(
          "div",
          {
            ref_key: "containerRef",
            ref: n7,
            class: normalizeClass([unref(a4).e("container"), e16.containerClass]),
            onScrollPassive: I4,
            style: normalizeStyle(e16.containerStyle)
          },
          [
            renderSlot(e16.$slots, "content"),
            (openBlock(), createBlock(resolveDynamicComponent(e16.tag), {
              ref_key: "contentRef",
              ref: y4,
              style: normalizeStyle(e16.contentStyle),
              class: normalizeClass([unref(a4).e("content"), e16.contentClass])
            }, {
              default: withCtx(() => [
                renderSlot(e16.$slots, "default")
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
          class: normalizeClass(unref(a4).e("bar-y")),
          onDrag: unref(V6),
          ref_key: "barY",
          ref: p3
        }, null, 8, ["class", "onDrag"]),
        createVNode(q2, {
          type: "x",
          class: normalizeClass(unref(a4).e("bar-x")),
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
function s4(e16) {
  const u5 = ref(false);
  return {
    focus: u5,
    handleBlur: () => {
      u5.value = false, e16 == null || e16(u5.value);
    },
    handleFocus: () => {
      u5.value = true, e16 == null || e16(u5.value);
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
  setup(h7, {
    expose: S8,
    emit: z5
  }) {
    var V6, B7;
    const t8 = h7, a4 = z5, l5 = useModel(h7, "modelValue"), s12 = getCurrentInstance(), i3 = e("input"), {
      formProps: I4
    } = i(), {
      size: R7,
      disabled: p3,
      readonly: x11
    } = g([I4 ?? {}, t8]), {
      focus: w11,
      handleBlur: y4,
      handleFocus: b10
    } = s4((e16) => {
      a4(e16 ? "focus" : "blur");
    }), _10 = computed(() => [i3.b, i3.m(R7.value), e.is("disabled", p3.value), e.is("readonly", x11.value), e.is("focus", w11.value)]), O7 = [i3.e("prefix"), e.is("clickable", !!((V6 = s12 == null ? void 0 : s12.vnode.props) != null && V6["onPrefix:click"]))], D4 = [i3.e("suffix"), e.is("clickable", !!((B7 = s12 == null ? void 0 : s12.vnode.props) != null && B7["onSuffix:click"]))];
    let m6 = false;
    function L5() {
      m6 = true;
    }
    function Y3(e16) {
      m6 = false, g10(e16);
    }
    const g10 = (e16) => {
      if (m6) return;
      const n7 = e16.target.value;
      if (a4("native:input", e16), t8.pattern && !t8.pattern.test(n7)) {
        nextTick(() => {
          e16.target.value = l5.value ?? "";
        });
        return;
      }
      l5.value = n7;
    }, j5 = () => {
      a4("prefix:click", l5.value);
    }, q8 = () => {
      a4("suffix:click", l5.value);
    }, A11 = () => {
      l5.value = "", a4("clear");
    }, v6 = ref(false), G4 = () => {
      v6.value = true;
    }, H4 = () => {
      v6.value = false;
    }, J7 = (e16) => {
      a4("change", e16.target.value);
    }, M8 = shallowRef(), K6 = computed(() => t8.prefix ? `${t8.prefix}${l5.value}` : l5.value);
    return S8({
      el: M8
    }), (e16, n7) => unref(x11) ? (openBlock(), createElementBlock(
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
      [e16.$slots.prefix || e16.prefix ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(O7),
        onClick: j5
      }, [renderSlot(e16.$slots, "prefix", {}, () => [createTextVNode(
        toDisplayString(e16.prefix),
        1
        /* TEXT */
      )])])) : createCommentVNode("v-if", true), createBaseVNode("input", {
        class: normalizeClass(unref(i3).e("native")),
        placeholder: t8.placeholder,
        type: "text",
        value: l5.value,
        onInput: g10,
        onChange: J7,
        onFocus: n7[0] || (n7[0] = //@ts-ignore
        (...c9) => unref(b10) && unref(b10)(...c9)),
        onBlur: n7[1] || (n7[1] = //@ts-ignore
        (...c9) => unref(y4) && unref(y4)(...c9)),
        onCompositionstart: L5,
        onCompositionend: Y3,
        autocomplete: "off",
        ref_key: "el",
        ref: M8,
        disabled: unref(p3),
        readonly: e16.nativeReadonly
      }, null, 42, ce2), createVNode(Transition, {
        name: "zoom-in",
        mode: "out-in"
      }, {
        default: withCtx(() => [e16.clearable && l5.value && v6.value && !unref(p3) ? (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass(unref(i3).e("clear")),
          onClick: withModifiers(A11, ["stop"])
        }, {
          default: withCtx(() => [createVNode(unref(close_default))]),
          _: 1
          /* STABLE */
        }, 8, ["class"])) : createCommentVNode("v-if", true)]),
        _: 1
        /* STABLE */
      }), e16.$slots.suffix || e16.suffix ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(D4),
        onClick: q8
      }, [renderSlot(e16.$slots, "suffix", {}, () => [createTextVNode(
        toDisplayString(e16.suffix),
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
  const { model: i3, props: a4 } = f11, c9 = shallowRef([]), l5 = shallowRef([]), u5 = shallowRef([]), s12 = computed(() => {
    const { suggestions: e16 } = a4;
    return e16 ? typeof e16 == "function" ? c9.value.concat(u5.value) : l5.value : u5.value;
  }), d8 = computed(() => {
    if (i3.value)
      return s12.value.includes(i3.value) ? void 0 : i3.value;
  });
  return watch(
    [i3, () => a4.suggestions],
    debounce(async ([e16, t8]) => {
      if (typeof t8 == "function") {
        const n7 = await t8(e16);
        c9.value = n7 ?? [];
      } else {
        if (!e16) {
          l5.value = [
            ...t8 ?? [],
            ...u5.value
          ];
          return;
        }
        l5.value = [
          ...(t8 == null ? void 0 : t8.filter((n7) => n7.includes(e16))) ?? [],
          ...u5.value.filter((n7) => n7.includes(e16))
        ];
      }
    }, 200),
    {
      immediate: true
    }
  ), {
    suggestions: s12,
    cachedSuggestion: d8,
    appendedSuggestions: u5
  };
}

// node_modules/ultra-ui/venders/auto-complete.vue_vue_type_script_setup_true_lang-CmytZi4c.js
var oe3 = ["data-key"];
var te2 = ["onClick", "data-key"];
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
    const k6 = g10, M8 = F6, a4 = useModel(g10, "modelValue"), s12 = e("auto-complete"), _10 = s12.e("option"), { formProps: N4 } = i(), { size: m6, disabled: c9, readonly: T6 } = g(
      [N4 ?? {}, k6],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), p3 = shallowRef(), C6 = shallowRef();
    watch(C6, (o10) => {
      if (o10 && a4.value !== void 0) {
        const l5 = o10.contentRef.querySelector(`li[data-key="${a4.value}"]`);
        l5 == null || l5.scrollIntoView({ block: "nearest", inline: "start" });
      }
    });
    const { suggestions: E11, appendedSuggestions: n7, cachedSuggestion: r7 } = w2({
      props: k6,
      model: a4
    }), O7 = (o10) => {
      var l5;
      a4.value = o10, (l5 = p3.value) == null || l5.close(), A11(), M8("select", o10);
    };
    function A11() {
      a4.value && (n7.value = [...n7.value, a4.value]);
    }
    const V6 = (o10) => {
      var l5;
      n7.value = [...n7.value, o10], (l5 = p3.value) == null || l5.close();
    }, h7 = shallowRef(false);
    return (o10, l5) => unref(T6) ? (openBlock(), createElementBlock(
      "span",
      ae2,
      toDisplayString(a4.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      trigger: "click",
      class: normalizeClass([unref(s12).b, unref(s12).m(unref(m6)), unref(e).is("disabled", unref(c9))]),
      ref_key: "dropdownRef",
      ref: p3,
      visible: h7.value,
      "onUpdate:visible": l5[3] || (l5[3] = (t8) => h7.value = t8),
      "content-class": [unref(s12).e("panel"), unref(s12).em("panel", unref(m6))],
      disabled: unref(c9)
    }, {
      trigger: withCtx(() => [
        createCommentVNode(" 单选 "),
        createVNode(unref(Ve), {
          size: unref(m6),
          disabled: unref(c9),
          placeholder: o10.placeholder,
          clearable: o10.clearable,
          modelValue: a4.value,
          "onUpdate:modelValue": l5[0] || (l5[0] = (t8) => a4.value = t8),
          onKeyup: l5[1] || (l5[1] = withKeys((t8) => unref(r7) && V6(unref(r7)), ["enter"]))
        }, null, 8, ["size", "disabled", "placeholder", "clearable", "modelValue"])
      ]),
      content: withCtx(() => [
        createVNode(unref(fe2), {
          tag: "ul",
          class: normalizeClass(unref(s12).e("options")),
          ref_key: "scrollRef",
          ref: C6
        }, {
          default: withCtx(() => [
            unref(r7) ? withDirectives((openBlock(), createElementBlock("li", {
              class: normalizeClass([unref(_10)]),
              onClick: l5[2] || (l5[2] = (t8) => V6(unref(r7))),
              "data-key": unref(r7),
              key: unref(r7)
            }, [
              renderSlot(o10.$slots, "default", normalizeProps(guardReactiveProps({ option: unref(r7), index: -1 })), () => [
                createTextVNode(
                  toDisplayString(unref(r7)),
                  1
                  /* TEXT */
                )
              ])
            ], 10, oe3)), [
              [unref(T), unref(s12).e("ripple")]
            ]) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(E11), (t8, D4) => withDirectives((openBlock(), createElementBlock("li", {
                class: normalizeClass([unref(_10), unref(e).is("selected", t8 === a4.value)]),
                onClick: (se4) => O7(t8),
                "data-key": t8,
                key: t8
              }, [
                renderSlot(o10.$slots, "default", mergeProps({ ref_for: true }, { option: t8, index: D4 }), () => [
                  createTextVNode(
                    toDisplayString(t8),
                    1
                    /* TEXT */
                  )
                ])
              ], 10, te2)), [
                [unref(T), unref(s12).e("ripple")]
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
    const o10 = e("badge"), e16 = m6, { size: a4 } = l([e16], {
      size: "default"
    }), d8 = computed(() => e16.dot ? "" : e16.value > e16.max ? `${e16.max}+` : e16.value), f11 = computed(() => [
      o10.e("sup"),
      e16.type && o10.m("color-" + e16.type),
      o10.m(a4.value),
      e.is("dot", e16.dot)
    ]), t8 = shallowRef(), r7 = () => {
      if (t8.value) {
        const { width: s12, height: n7 } = t8.value.getBoundingClientRect();
        n2(t8.value, {
          transform: `translate(-${s12 / 2}px, -${n7 / 2}px)`,
          backgroundColor: e16.color && e16.color
        });
      }
    };
    return watch(
      () => a4.value,
      () => {
        nextTick(() => {
          r7();
        });
      }
    ), onMounted(() => {
      r7();
    }), (s12, n7) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(o10).b)
      },
      [
        renderSlot(s12.$slots, "default"),
        s12.hidden ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "sup",
          {
            key: 0,
            class: normalizeClass(f11.value),
            ref_key: "supRef",
            ref: t8
          },
          toDisplayString(d8.value),
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
var o5 = Symbol("LayoutDIKey");

// node_modules/ultra-ui/venders/layout-resizer.vue_vue_type_script_setup_true_lang-BsAPpHUq.js
var V = defineComponent({
  name: "LayoutResizer",
  __name: "layout-resizer",
  props: {
    horizontal: { type: Boolean },
    offset: {}
  },
  emits: ["resize", "resize-start", "resize-end"],
  setup(f11, { expose: p3, emit: c9 }) {
    const t8 = f11, s12 = c9, { cls: z5 } = inject(o5), u5 = computed(() => [z5.e("resizer"), e.is("horizontal", t8.horizontal)]), l5 = shallowRef();
    let e16 = t8.offset ?? 0;
    const r7 = shallowReactive({
      x: t8.horizontal ? "0" : e16 + "px",
      y: t8.horizontal ? e16 + "px" : "0"
    });
    let a4 = 0;
    return w({
      target: l5,
      onDragStart() {
        a4 = e16, s12("resize-start");
      },
      onDrag(o10, n7) {
        t8.horizontal ? (e16 = a4 + n7, r7.y = e16 + "px", s12("resize", n7)) : (e16 = a4 + o10, r7.x = e16 + "px", s12("resize", o10));
      },
      onDragEnd() {
        s12("resize-end");
      }
    }), p3({
      update(o10) {
        e16 = o10, t8.horizontal ? r7.y = e16 + "px" : r7.x = e16 + "px";
      }
    }), (o10, n7) => (openBlock(), createElementBlock(
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
    const a4 = R7, p3 = e("layout"), o10 = ref([]);
    watchEffect(() => {
      const { cols: e16 } = a4;
      if (!e16) {
        o10.value = [];
        return;
      }
      o10.value = typeof e16 == "string" ? e16.split(" ") : e16;
    });
    const g10 = computed(() => {
      const { rows: e16, gap: t8, resizable: s12 } = a4;
      return {
        gridTemplateColumns: o10.value.join(" "),
        gridTemplateRows: e16 ? typeof e16 == "string" ? e16 : e16.join(" ") : "",
        columnGap: s12 ? "10px" : f(t8, "px")
      };
    }), l5 = shallowRef(), m6 = shallowRef([]), c9 = ref([]);
    function d8() {
      const e16 = l5.value;
      if (!a4.resizable || !e16 || !a4.cols)
        return c9.value = [];
      c9.value = o10.value.slice(0, -1).map((t8, s12) => {
        const r7 = e16.children[s12];
        return r7 ? r7.offsetLeft + r7.offsetWidth : 0;
      });
    }
    watch([() => a4.resizable, l5, () => a4.cols], () => {
      nextTick(() => {
        d8();
      });
    }), s3({
      targets: l5,
      onResize() {
        d8(), m6.value.forEach((e16, t8) => {
          e16.update(c9.value[t8]);
        });
      }
    });
    let i3 = "0", n7 = "0";
    const _10 = (e16) => {
      var t8, s12;
      if (i3 = o10.value[e16], n7 = o10.value[e16 + 1], !i3.endsWith("px") && !n7.endsWith("px")) {
        const r7 = (s12 = (t8 = l5.value) == null ? void 0 : t8.children[e16 + 1]) == null ? void 0 : s12.getBoundingClientRect();
        r7 && (n7 = r7.width + "px");
      }
    }, w11 = (e16, t8) => {
      i3 != null && i3.endsWith("px") && (o10.value[t8] = `${parseInt(i3) + e16}px`), n7 != null && n7.endsWith("px") && (o10.value[t8 + 1] = `${parseInt(n7) - e16}px`);
    };
    return provide(o5, {
      cls: p3
    }), (e16, t8) => (openBlock(), createBlock(resolveDynamicComponent(e16.tag), {
      class: normalizeClass(unref(p3).b),
      style: normalizeStyle(g10.value),
      ref_key: "containerRef",
      ref: l5
    }, {
      default: withCtx(() => [
        renderSlot(e16.$slots, "default"),
        createCommentVNode(" 竖向调节 "),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(c9.value, (s12, r7) => (openBlock(), createBlock(V, {
            offset: s12,
            key: r7,
            ref_for: true,
            ref_key: "resizerRefs",
            ref: m6,
            direction: "vertical",
            onResize: (v6) => w11(v6, r7),
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
var o6 = Symbol("DialogDIKey");

// node_modules/ultra-ui/components/batch-edit/use-edit.js
function L(C6) {
  const { props: i3, emit: f11, tableRef: D4 } = C6, t8 = shallowReactive({
    visible: false,
    type: "create",
    loading: false,
    dataUpdated: false
  }), r7 = shallowRef([]);
  watch(
    () => t8.visible,
    (e16) => {
      e16 || (t8.dataUpdated = false);
    }
  );
  let u5 = true;
  watch(
    () => t8.row,
    (e16) => {
      var a4, n7;
      (a4 = i3.model) == null || a4.resetData(), e16 ? (t8.type = "update", t8.visible = true, u5 = false, (n7 = i3.model) == null || n7.setData(e16.data), nextTick(() => {
        u5 = true;
      })) : t8.visible = false;
    }
  );
  const p3 = (e16, a4) => {
    u5 && (t8.dataUpdated = true), i3.quickEdit && t8.row && setChainValue(t8.row.data, e16, a4);
  };
  watch(
    () => i3.model,
    (e16, a4) => {
      a4 && a4.offChange(p3), e16 && e16.onChange(p3);
    },
    { immediate: true }
  ), watch(
    () => i3.quickEdit,
    (e16) => {
      var a4;
      t8.row = void 0, t8.type = "create", t8.visible = false, t8.dataUpdated = false, (a4 = i3.model) == null || a4.resetData();
    },
    { immediate: true }
  );
  const d8 = computed(() => typeof i3.tree == "string" ? i3.tree : "children");
  function v6(e16) {
    const a4 = [...i3.data ?? []];
    i3.quickEdit && (isReactive(e16) || (e16 = shallowReactive(e16)));
    const n7 = Forest.visit(
      a4 ?? [],
      r7.value.slice(0, -1),
      d8.value
    );
    if (n7) {
      const l5 = n7[d8.value];
      l5 ? l5.splice(last(r7.value), 0, e16) : n7[d8.value] = [e16];
    } else
      a4.splice(last(r7.value), 0, e16);
    return f11("update:data", a4), e16;
  }
  function h7() {
    return safeRun(
      () => {
        var e16;
        return JSON.parse(JSON.stringify(((e16 = i3.model) == null ? void 0 : e16.data) ?? {}));
      },
      {}
    );
  }
  async function o10(e16) {
    var n7, l5;
    t8.parentRow = void 0, t8.row = void 0, t8.type = "create", (n7 = i3.model) == null || n7.resetData(), e16();
    let a4;
    if (i3.quickEdit && (a4 = v6(h7())), await nextTick(), t8.visible = true, a4) {
      const s12 = (l5 = D4.value) == null ? void 0 : l5.getRowByData(a4);
      s12 && (t8.row = s12);
    }
  }
  function E11() {
    const { data: e16 } = i3;
    o10(() => {
      r7.value = [(e16 == null ? void 0 : e16.length) ?? 0];
    });
  }
  function I4(e16) {
    o10(() => {
      r7.value = [...e16.indexes];
    });
  }
  function U3(e16) {
    o10(() => {
      r7.value = [...e16.indexes.slice(0, -1), e16.index + 1];
    });
  }
  function k6(e16) {
    o10(() => {
      var a4;
      t8.parentRow = e16, e16.expanded = true, r7.value = [...e16.indexes, ((a4 = e16.children) == null ? void 0 : a4.length) ?? 0];
    });
  }
  function w11(e16) {
    return async (...a4) => {
      t8.loading = true, t8.row && (t8.row.operating = true);
      try {
        await e16.apply(null, a4);
      } catch (n7) {
        console.log(n7);
      }
      t8.loading = false, t8.row && (t8.row.operating = false);
    };
  }
  const q8 = w11(async () => {
    const { model: e16, saveMethod: a4 } = i3;
    if (!e16 || (e16.clearValidate(), !await e16.validate())) return;
    let l5 = h7();
    if (a4) {
      const s12 = await a4(l5, t8.type, t8.parentRow);
      s12 && (l5 = s12);
    }
    if (t8.dataUpdated = false, t8.type === "create")
      return v6(l5), e16 == null ? void 0 : e16.resetData();
    if (t8.type === "update") {
      const { row: s12 } = t8;
      s12 && e16.allKeys.forEach((g10) => {
        setChainValue(s12.data, g10, getChainValue(l5, g10));
      });
    }
  }), N4 = w11(async (e16) => {
    const { deleteMethod: a4 } = i3;
    a4 && await a4([e16.data]);
    const n7 = [...i3.data ?? []], l5 = Forest.visit(
      n7,
      e16.indexes.slice(0, -1),
      d8.value
    );
    if (l5) {
      const s12 = l5[d8.value];
      s12 ? s12.splice(e16.index, 1) : console.error("行路径不正确");
    } else
      n7.splice(e16.index, 1);
    t8.row === e16 && (t8.row = void 0), f11("update:data", n7);
  });
  function S8() {
    var e16;
    t8.visible = false, t8.row = void 0, t8.parentRow = void 0, (e16 = i3.model) == null || e16.resetData(), r7.value = [];
  }
  return {
    state: t8,
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
var t2 = Symbol("BatchEditDIKey");

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
    setup(s12, { slots: m6, attrs: p3 }) {
      const u5 = (o10) => {
        var i3;
        if (!o10) {
          console.error("mergeNodesProps期望有1个参数props, 此处为0个");
          return;
        }
        const e16 = l2(((i3 = m6.default) == null ? void 0 : i3.call(m6)) ?? []);
        if (!(e16 != null && e16.length)) return;
        let n7 = 0;
        for (; n7 < e16.length; ) {
          const r7 = e16[n7];
          r7.props || (r7.props = {}), Object.keys(o10).forEach((t8) => {
            r7.props[t8] === void 0 && (r7.props[t8] = o10[t8], p3[t8] !== void 0 && (r7.props[t8] = p3[t8]));
          }), n7++;
        }
        return e16;
      };
      return () => {
        const o10 = isRef(f11) ? f11.value : f11, e16 = u5(o10);
        if (s12.tag) {
          const n7 = Object.keys(p3).reduce((i3, r7) => (r7 in o10 || (i3[r7] = p3[r7]), i3), {});
          return createVNode(s12.tag, n7, e16);
        }
        return e16;
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
  setup(s12, { expose: a4 }) {
    const e16 = s12, t8 = e("card"), { size: i3 } = g([e16], { size: "default" }), n7 = computed(() => [t8.b, t8.m(i3.value), e.is("integrate", e16.integrate)]), m6 = computed(() => ({
      width: f(e16.width, "px")
    }));
    return provide(e3, { cls: t8, cardProps: e16 }), a4({}), (p3, z5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(n7.value),
        style: normalizeStyle(m6.value)
      },
      [
        renderSlot(p3.$slots, "default")
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
  setup(p3) {
    const r7 = inject(e3), { cls: t8 } = r7 || {}, a4 = computed(() => {
      const e16 = [];
      return t8 && e16.push(t8.e("header")), e16;
    });
    return r7 || console.warn("CardHeader组件仅能在Card组件中使用"), (e16, u5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(a4.value)
      },
      [
        renderSlot(e16.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/table/di.js
var e4 = Symbol("TableDIKey");

// node_modules/ultra-ui/compositions/use-model/index.js
function _2(n7) {
  const {
    props: t8,
    propName: e16 = "modelValue",
    emit: o10,
    local: c9 = true,
    defaultValue: f11,
    shallow: p3 = false
  } = n7;
  if (c9) {
    const l5 = t8[e16] ?? f11, r7 = p3 ? shallowRef : ref, a4 = l5 !== void 0 ? r7(l5) : r7();
    return watch(
      () => t8[e16],
      (u5) => {
        a4.value = u5;
      }
    ), watch(a4, (u5) => {
      u5 !== t8[e16] && o10(`update:${e16}`, u5);
    }), a4;
  }
  return {
    __v_isRef: true,
    get value() {
      return t8[e16];
    },
    set value(l5) {
      o10(`update:${e16}`, l5);
    }
  };
}

// node_modules/ultra-ui/components/table/row-node.js
var o7 = Object.defineProperty;
var h5 = (s12, e16, i3) => e16 in s12 ? o7(s12, e16, { enumerable: true, configurable: true, writable: true, value: i3 }) : s12[e16] = i3;
var t3 = (s12, e16, i3) => h5(s12, typeof e16 != "symbol" ? e16 + "" : e16, i3);
var x3 = class extends TreeNode {
  /**
   *
   * @param data 一个普通对象或者一个响应式对象
   * @param index 索引值
   * @param rowKey 行唯一标识
   * @returns
   */
  constructor(i3) {
    var e16 = (...m6) => (super(...m6), /** 是否操作中 */
    t3(this, "operating", false), /** 是否展开 */
    t3(this, "expanded", false), /** 是否为当前的点击行 */
    t3(this, "isCurrent", false), /** 是否选中 */
    t3(this, "checked", false), t3(this, "uid"), t3(this, "children"), t3(this, "parent", null), this);
    const { data: r7, index: n7, uid: d8 } = i3;
    return e16(r7 && (isReactive(r7) ? r7 : shallowReactive(r7)), n7), this.uid = d8, shallowReactive(this);
  }
  /** 索引路径 */
  get indexes() {
    return this.depth === 0 && !this.isLeaf ? [] : this.parent ? this.depth === 1 ? [this.index] : this.parent.indexes.concat(this.index) : [this.index];
  }
};

// node_modules/ultra-ui/components/table/use-rows.js
function V2(g10) {
  const { props: n7, emit: p3 } = g10, i3 = shallowRef([]), o10 = shallowRef();
  let R7 = 0;
  const c9 = _2({
    props: n7,
    emit: p3,
    propName: "currentRow",
    shallow: true
  });
  watch(c9, (e16, t8) => {
    t8 && (t8.isCurrent = false), e16 && (e16.isCurrent = true);
  }), watch(i3, (e16) => p3("update:rows", e16)), watch(o10, (e16) => p3("update:forest", e16));
  let a4 = /* @__PURE__ */ new WeakMap(), l5 = null;
  const h7 = n7.rowKey ? (e16) => e16 && getChainValue(e16, n7.rowKey) : () => R7++, v6 = (e16, t8) => {
    const r7 = e16 ? a4.get(e16) : void 0;
    return r7 ? (r7.index = t8, r7) : new x3({
      data: e16,
      index: t8,
      uid: h7(e16)
    });
  };
  function x11(e16) {
    let t8 = [], r7 = 0;
    for (l5 = /* @__PURE__ */ new WeakMap(); r7 < e16.length; ) {
      const u5 = e16[r7], s12 = v6(u5, r7);
      t8.push(s12), l5.set(u5, s12), r7++;
    }
    return a4 = l5, l5 = null, t8;
  }
  function k6(e16) {
    l5 = /* @__PURE__ */ new WeakMap();
    const t8 = Forest.create(e16, {
      createNode(r7, u5) {
        const s12 = v6(r7, u5);
        return n7.defaultExpandAll && (s12.expanded = true), r7 && l5.set(r7, s12), s12;
      },
      childrenKey: typeof n7.tree == "string" ? n7.tree : "children"
    });
    return a4 = l5, l5 = null, t8;
  }
  watch(
    [() => n7.data, () => n7.tree, () => n7.defaultExpandAll],
    ([e16, t8]) => {
      if (!(e16 != null && e16.length)) {
        i3.value = [], a4 = /* @__PURE__ */ new WeakMap(), o10.value = void 0;
        return;
      }
      t8 ? (o10.value = k6(e16), d8()) : (o10.value = void 0, i3.value = x11(e16));
    },
    { immediate: true }
  );
  function d8() {
    var t8;
    if (!o10.value) return;
    const e16 = [];
    (t8 = o10.value) == null || t8.dft((r7) => {
      var u5;
      return (u5 = r7.parent) != null && u5.expanded || r7.depth === 1 ? (e16.push(r7), true) : false;
    }), i3.value = e16;
  }
  function E11(e16) {
    e16.expanded = !e16.expanded, d8();
  }
  const f11 = shallowRef(n7.defaultExpandAll ?? false);
  function y4() {
    var e16;
    f11.value = !f11.value, (e16 = o10.value) == null || e16.dft((t8) => {
      t8.expanded = f11.value;
    }), d8();
  }
  const M8 = (e16) => {
    p3("row-click", e16), e16 === c9.value ? c9.value = void 0 : c9.value = e16;
  };
  function A11(e16) {
    return a4.get(e16);
  }
  return {
    /** 数据树 */
    rowForest: o10,
    /** 数据行 */
    rows: i3,
    /**
     * 切换节点的显示隐藏
     * @param node 节点
     */
    toggleTreeRowExpand: E11,
    /** 所有树形节点是否展开 */
    allExpanded: f11,
    /** 切换所有树形节点的显示隐藏 */
    toggleAllTreeRowExpand: y4,
    /** 行点击 */
    handleRowClick: M8,
    /** 通过数据获取表格行 */
    getRowByData: A11
  };
}

// node_modules/ultra-ui/components/table/use-columns.js
var $3 = Object.defineProperty;
var B = (f11, n7, e16) => n7 in f11 ? $3(f11, n7, { enumerable: true, configurable: true, writable: true, value: e16 }) : f11[n7] = e16;
var x4 = (f11, n7, e16) => B(f11, typeof n7 != "symbol" ? n7 + "" : n7, e16);
function te3(f11, n7) {
  return f11.forEach((e16) => {
    Tree.dft(e16, (u5) => {
      for (const g10 in n7)
        u5[g10] === void 0 && (u5[g10] = n7[g10]);
      !u5.children && u5.width === void 0 && u5.minWidth === void 0 && (u5.minWidth = 100);
    });
  }), f11;
}
var K3 = class extends TreeNode {
  constructor(e16, u5) {
    super(e16 && shallowReactive(e16), u5);
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
  set key(e16) {
    this.data.key = e16;
  }
  /** 列名 */
  get name() {
    return this.data.name;
  }
  set name(e16) {
    this.data.name = e16;
  }
  /**
   * 列对齐方式
   * @default 'left'
   */
  get align() {
    return this.data.align ?? "left";
  }
  set align(e16) {
    this.data.align = e16;
  }
  /** 宽度 */
  get width() {
    return this.data.width;
  }
  set width(e16) {
    this.data.width = e16;
  }
  /** 最小宽度 */
  get minWidth() {
    return this.data.minWidth;
  }
  set minWidth(e16) {
    this.data.minWidth = e16;
  }
  /** 列固定方向 */
  get fixed() {
    if (!(this.depth > 1))
      return this.data.fixed;
  }
  set fixed(e16) {
    this.data.fixed = e16;
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
    props: n7,
    createCheckColumn: e16,
    createSelectColumn: u5,
    colgroupRef: g10,
    toggleAllTreeRowExpand: L5,
    cls: b10
  } = f11, O7 = computed(() => {
    const { selectable: r7, checkable: t8, showIndex: o10 } = n7, a4 = [];
    return r7 ? a4.push(u5()) : t8 && a4.push(e16()), o10 && a4.push({
      key: "__index__",
      name: "#",
      width: 60,
      align: "center",
      fixed: "left",
      render({ row: s12 }) {
        return s12.index + 1;
      }
    }), a4;
  }), C6 = shallowRef(), F6 = () => createVNode(
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
    [O7, () => n7.columns, () => n7.tree],
    ([r7, t8, o10]) => {
      const a4 = [...r7], s12 = [], h7 = [];
      t8 == null || t8.forEach((d8) => {
        if (!d8.fixed || d8.children)
          return d8.fixed = void 0, s12.push(d8);
        d8.fixed === "left" ? a4.push(d8) : h7.push(d8);
      }), last(a4) && (last(a4).isLastFixed = true), h7[0] && (h7[0].isFirstFixed = true);
      const c9 = [...a4, ...s12, ...h7], i3 = { ...c9[0] };
      if (c9[0] = i3, o10 && i3) {
        i3.align = "left", i3.width = i3.width ? i3.width + 60 : void 0;
        const d8 = i3.nameRender;
        i3.nameRender = d8 ? (m6) => {
          const l5 = d8(m6);
          return [
            F6(),
            ...Array.isArray(l5) ? l5 : [l5]
          ];
        } : (m6) => [F6(), i3.name];
      }
      const p3 = Forest.create(c9, {
        createNode(d8, m6) {
          return new K3(d8, m6);
        }
      });
      let y4 = 0;
      a4.some((d8, m6) => {
        const l5 = p3.nodes[m6];
        if (l5.style.left = y4, l5.width === void 0 || l5.width <= 0)
          return false;
        y4 += l5.width;
      });
      let R7 = 0;
      h7.some((d8, m6) => {
        const l5 = p3.nodes[p3.nodes.length - 1 - m6];
        if (l5.style.right = R7, l5.width === void 0 || l5.width <= 0)
          return false;
        R7 += l5.width;
      }), C6.value = p3;
    },
    { immediate: true }
  );
  const T6 = computed(() => {
    var a4;
    const r7 = [];
    let t8 = [], o10 = -1;
    (a4 = C6.value) == null || a4.bft((s12) => {
      o10 !== s12.depth ? (t8.length && r7.push(t8), o10 = s12.depth, t8 = [s12]) : t8.push(s12);
    }), t8.length && r7.push(t8), t8 = [];
    for (let s12 = r7.length - 1; s12 > 0; s12--)
      r7[s12].forEach((c9) => {
        const i3 = c9.parent;
        i3.leafs === void 0 && (i3.leafs = i3.children.reduce((p3, y4) => p3 + (y4.leafs ?? 1), 0));
      });
    return r7;
  }), N4 = shallowRef([]), w11 = shallowRef([]), _10 = shallowRef();
  watch(
    [C6, () => n7.tree],
    ([r7]) => {
      const t8 = [];
      r7 == null || r7.dft((o10) => {
        o10.isLeaf && t8.push(o10);
      }), w11.value = t8, n7.tree ? (_10.value = t8[0], N4.value = t8.slice(1)) : (N4.value = t8, _10.value = void 0);
    },
    { immediate: true }
  );
  const S8 = debounce(
    () => {
      const r7 = g10.value;
      if (!r7) return;
      const t8 = Array.from(
        r7.getElementsByClassName("left")
      ), o10 = Array.from(
        r7.getElementsByClassName("right")
      );
      t8.reduce((s12, h7, c9) => {
        const i3 = w11.value[c9];
        return i3.width || (i3.width = h7.offsetWidth), i3.style.left = s12, s12 + h7.offsetWidth;
      }, 0);
      const a4 = w11.value.slice(-o10.length);
      o10.reduceRight((s12, h7, c9) => {
        const i3 = a4[c9];
        return i3.width || (i3.width = h7.offsetWidth), i3.style.right = s12, s12 + h7.offsetWidth;
      }, 0);
    },
    100,
    true
  );
  return {
    /** 第一列 */
    expandColumn: _10,
    /** 所有列 */
    allColumns: w11,
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
      columnConfig: i3,
      getHeaderSlotsNode: o10,
      getCellClass: p3
    } = inject(e4), {
      headers: t8
    } = i3;
    return () => createVNode("thead", {
      class: [r7.e("head"), e.is("multistage", t8.value.length > 1)]
    }, [t8.value.map((n7, d8) => createVNode("tr", null, [n7.map((e16) => {
      var s12;
      return createVNode("th", {
        class: p3(e16),
        key: e16.key + e16.keySuffix,
        colspan: e16.leafs,
        rowspan: (s12 = e16.children) != null && s12.length ? void 0 : t8.value.length - d8,
        style: {
          left: f(e16.style.left, "px"),
          right: f(e16.style.right, "px")
        }
      }, [o10({
        column: e16
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
  setup(w11) {
    const { getCellClass: n7 } = inject(e4);
    return (e16, d8) => e16.rowspan !== 0 && e16.colspan !== 0 ? (openBlock(), createElementBlock("td", {
      key: 0,
      class: normalizeClass(unref(n7)(e16.column)),
      style: normalizeStyle({
        left: unref(f)(e16.left, "px"),
        right: unref(f)(e16.right, "px")
      }),
      rowspan: e16.rowspan,
      colspan: e16.colspan
    }, [
      renderSlot(e16.$slots, "default")
    ], 14, u2)) : createCommentVNode("v-if", true);
  }
});

// node_modules/ultra-ui/components/table/table-row.js
function E4(i3) {
  return typeof i3 == "function" || Object.prototype.toString.call(i3) === "[object Object]" && !isVNode(i3);
}
var B2 = defineComponent({
  name: "TableRow",
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  setup(i3) {
    const {
      row: l5
    } = i3, {
      cls: s12,
      columnConfig: C6,
      getColumnSlotsNode: c9,
      toggleTreeRowExpand: _10,
      getCellCtx: f11,
      handleRowClick: w11,
      tableProps: t8,
      measureElement: k6
    } = inject(e4), {
      columns: h7,
      expandColumn: S8
    } = C6;
    return () => {
      var u5, d8;
      const o10 = S8.value;
      let m6 = null;
      if (o10) {
        const e16 = f11(l5, o10), r7 = (u5 = t8.mergeCell) == null ? void 0 : u5.call(t8, e16);
        (!r7 || r7.colspan && r7.rowspan) && (m6 = createVNode(_3, mergeProps({
          column: o10,
          left: o10.style.left,
          right: o10.style.right,
          key: o10.key + o10.keySuffix
        }, (d8 = t8.mergeCell) == null ? void 0 : d8.call(t8, e16)), {
          default: () => [l5.isLeaf ? createVNode("i", {
            class: s12.e("expand-space"),
            style: `margin-left: ${(l5.depth - 1) * 14}px`
          }, null) : createVNode(M, {
            text: true,
            class: s12.e("expand-toggle"),
            type: "primary",
            size: "small",
            circle: true,
            onClick: (a4) => {
              a4.stopPropagation(), _10(l5);
            },
            style: `margin-left: ${(l5.depth - 1) * 14}px`
          }, {
            default: () => [createVNode(k, null, {
              default: () => [createVNode(arrow_right_default, null, null)]
            })]
          }), c9(e16)]
        }));
      }
      return createVNode("tr", {
        class: [s12.e("row"), e.is("expanded", l5.expanded)],
        onClick: () => w11(l5),
        ref: k6
      }, [m6, h7.value.map((e16) => {
        var g10;
        const r7 = f11(l5, e16), a4 = (g10 = t8.mergeCell) == null ? void 0 : g10.call(t8, r7);
        if (a4 && (!a4.colspan || !a4.rowspan))
          return null;
        const p3 = c9(r7);
        return createVNode(_3, mergeProps({
          column: e16,
          left: e16.style.left,
          right: e16.style.right,
          key: e16.key + e16.keySuffix
        }, a4), E4(p3) ? p3 : {
          default: () => [p3]
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
    return (t8, d8) => (openBlock(), createElementBlock(
      "span",
      {
        class: normalizeClass(unref(m6).b)
      },
      [
        createVNode(unref(k), { size: t8.size }, {
          default: withCtx(() => [
            createVNode(unref(empty_default))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["size"]),
        createBaseVNode(
          "div",
          null,
          toDisplayString(t8.text),
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
    const { cls: s12, rows: c9, virtualList: i3, columnConfig: y4, tableProps: _10 } = inject(e4), { allColumns: b10 } = y4, h7 = computed(() => i3.value.map((t8) => ({
      row: c9.value[t8.index],
      index: t8.index
    }))), a4 = shallowRef();
    return watch(i3, (t8) => {
      var l5;
      a4.value && n2(a4.value, {
        transform: `translate3d(0, ${((l5 = t8[0]) == null ? void 0 : l5.start) ?? 0}px, 0)`
      });
    }), (t8, l5) => (openBlock(), createElementBlock(
      "tbody",
      {
        class: normalizeClass(unref(s12).e("body")),
        ref_key: "bodyRef",
        ref: a4
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(h7.value, ({ row: n7, index: u5 }) => (openBlock(), createBlock(unref(B2), {
            row: n7,
            key: n7.uid,
            "data-index": u5,
            class: normalizeClass([
              unref(e).is("current", n7.isCurrent && unref(_10).highlightCurrent),
              unref(e).is("even", u5 % 2 === 1)
            ])
          }, null, 8, ["row", "data-index", "class"]))),
          128
          /* KEYED_FRAGMENT */
        )),
        createCommentVNode(" 空 "),
        unref(c9).length ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "tr",
          {
            key: 0,
            class: normalizeClass(unref(s12).e("row"))
          },
          [
            createBaseVNode("td", {
              colspan: unref(b10).length
            }, [
              renderSlot(t8.$slots, "empty", {}, () => [
                createVNode(unref(h6), {
                  class: normalizeClass(unref(s12).e("empty"))
                }, null, 8, ["class"])
              ])
            ], 8, S3)
          ],
          2
          /* CLASS */
        )),
        renderSlot(t8.$slots, "default")
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
    const { cls: y4, columnConfig: d8, rows: i3, tableSlots: h7, getCellClass: f11 } = inject(e4), { allColumns: l5 } = d8, c9 = computed(() => l5.value.some((o10) => !!o10.data.summary));
    function _10(o10) {
      let r7 = 0, t8 = 0;
      for (; t8 < i3.value.length; ) {
        if (r7 = n.plus(r7, i3.value[t8].data[o10]), isNaN(r7)) return r7;
        t8++;
      }
      return r7;
    }
    function g10(o10) {
      const { summary: r7 } = o10.data;
      if (!r7) return null;
      let t8 = _10(o10.key);
      return typeof r7 == "function" ? r7({
        total: t8,
        rows: i3.value,
        column: o10
      }) : t8;
    }
    return (o10, r7) => unref(h7).foot || c9.value ? (openBlock(), createElementBlock(
      "tfoot",
      {
        key: 0,
        class: normalizeClass(unref(y4).e("foot"))
      },
      [
        c9.value ? (openBlock(), createElementBlock("tr", F, [
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
            renderList(unref(l5).slice(1), (t8) => (openBlock(), createElementBlock(
              "td",
              {
                class: normalizeClass(unref(f11)(t8)),
                key: t8.key + t8.keySuffix,
                style: normalizeStyle({
                  right: unref(f)(t8.style.right, "px"),
                  left: unref(f)(t8.style.left, "px")
                })
              },
              [
                createVNode(unref(d3), {
                  content: g10(t8)
                }, null, 8, ["content"])
              ],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true),
        renderSlot(o10.$slots, "default")
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true);
  }
});

// node_modules/ultra-ui/compositions/use-virtual/index.js
function b2(o10, r7, e16) {
  let s12 = e16.initialDeps ?? [], t8;
  return () => {
    var n7, i3, l5, h7;
    let u5;
    e16.key && ((n7 = e16.debug) != null && n7.call(e16)) && (u5 = Date.now());
    const a4 = o10();
    if (!(a4.length !== s12.length || a4.some((g10, m6) => s12[m6] !== g10)))
      return t8;
    s12 = a4;
    let c9;
    if (e16.key && ((i3 = e16.debug) != null && i3.call(e16)) && (c9 = Date.now()), t8 = r7(...a4), e16.key && ((l5 = e16.debug) != null && l5.call(e16))) {
      const g10 = Math.round((Date.now() - u5) * 100) / 100, m6 = Math.round((Date.now() - c9) * 100) / 100, v6 = m6 / 16, d8 = (p3, w11) => {
        for (p3 = String(p3); p3.length < w11; )
          p3 = " " + p3;
        return p3;
      };
      console.info(
        `%c⏱ ${d8(m6, 5)} /${d8(g10, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v6, 120)
        )}deg 100% 31%);`,
        e16 == null ? void 0 : e16.key
      );
    }
    return (h7 = e16 == null ? void 0 : e16.onChange) == null || h7.call(e16, t8), t8;
  };
}
function E5(o10, r7) {
  if (o10 === void 0)
    throw new Error("Unexpected undefined");
  return o10;
}
var y = (o10, r7) => Math.abs(o10 - r7) < 1;
var C3 = (o10, r7, e16) => {
  let s12;
  return function(...t8) {
    o10.clearTimeout(s12), s12 = o10.setTimeout(() => r7.apply(this, t8), e16);
  };
};
var T3 = (o10) => o10;
var _4 = (o10) => {
  const r7 = Math.max(o10.startIndex - o10.overscan, 0), e16 = Math.min(o10.endIndex + o10.overscan, o10.count - 1), s12 = [];
  for (let t8 = r7; t8 <= e16; t8++)
    s12.push(t8);
  return s12;
};
var R2 = (o10, r7) => {
  const e16 = o10.scrollElement;
  if (!e16)
    return;
  const s12 = o10.targetWindow;
  if (!s12)
    return;
  const t8 = (i3) => {
    const { width: l5, height: h7 } = i3;
    r7({ width: Math.round(l5), height: Math.round(h7) });
  };
  if (t8(e16.getBoundingClientRect()), !s12.ResizeObserver)
    return () => {
    };
  const n7 = new s12.ResizeObserver((i3) => {
    const l5 = i3[0];
    if (l5 != null && l5.borderBoxSize) {
      const h7 = l5.borderBoxSize[0];
      if (h7) {
        t8({ width: h7.inlineSize, height: h7.blockSize });
        return;
      }
    }
    t8(e16.getBoundingClientRect());
  });
  return n7.observe(e16, { box: "border-box" }), () => {
    n7.unobserve(e16);
  };
};
var z2 = {
  passive: true
};
var D = typeof window > "u" ? true : "onscrollend" in window;
var k3 = (o10, r7) => {
  const e16 = o10.scrollElement;
  if (!e16)
    return;
  const s12 = o10.targetWindow;
  if (!s12)
    return;
  let t8 = 0;
  const n7 = D ? () => {
  } : C3(
    s12,
    () => {
      r7(t8, false);
    },
    o10.options.isScrollingResetDelay
  ), i3 = (u5) => () => {
    const { horizontal: a4, isRtl: f11 } = o10.options;
    t8 = a4 ? e16.scrollLeft * (f11 && -1 || 1) : e16.scrollTop, n7(), r7(t8, u5);
  }, l5 = i3(true), h7 = i3(false);
  return h7(), e16.addEventListener("scroll", l5, z2), e16.addEventListener("scrollend", h7, z2), () => {
    e16.removeEventListener("scroll", l5), e16.removeEventListener("scrollend", h7);
  };
};
var N2 = (o10, r7, e16) => {
  if (r7 != null && r7.borderBoxSize) {
    const s12 = r7.borderBoxSize[0];
    if (s12)
      return Math.round(
        s12[e16.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    o10.getBoundingClientRect()[e16.options.horizontal ? "width" : "height"]
  );
};
var F2 = (o10, {
  adjustments: r7 = 0,
  behavior: e16
}, s12) => {
  var t8, n7;
  const i3 = o10 + r7;
  (n7 = (t8 = s12.scrollElement) == null ? void 0 : t8.scrollTo) == null || n7.call(t8, {
    [s12.options.horizontal ? "left" : "top"]: i3,
    behavior: e16
  });
};
var A2 = class {
  constructor(r7) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e16 = null;
      const s12 = () => e16 || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e16 = new this.targetWindow.ResizeObserver((t8) => {
        t8.forEach((n7) => {
          this._measureElement(n7.target, n7);
        });
      }));
      return {
        disconnect: () => {
          var t8;
          (t8 = s12()) == null || t8.disconnect(), e16 = null;
        },
        observe: (t8) => {
          var n7;
          return (n7 = s12()) == null ? void 0 : n7.observe(t8, { box: "border-box" });
        },
        unobserve: (t8) => {
          var n7;
          return (n7 = s12()) == null ? void 0 : n7.unobserve(t8);
        }
      };
    })(), this.range = null, this.setOptions = (e16) => {
      Object.entries(e16).forEach(([s12, t8]) => {
        typeof t8 > "u" && delete e16[s12];
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
        measureElement: N2,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        ...e16
      };
    }, this.notify = (e16) => {
      var s12, t8;
      (t8 = (s12 = this.options).onChange) == null || t8.call(s12, this, e16);
    }, this.maybeNotify = b2(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e16) => {
        this.notify(e16);
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
      this.unsubs.filter(Boolean).forEach((e16) => e16()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e16;
      const s12 = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s12) {
        if (this.cleanup(), !s12) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = s12, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e16 = this.scrollElement) == null ? void 0 : e16.window) ?? null, this.elementsCache.forEach((t8) => {
          this.observer.observe(t8);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (t8) => {
            this.scrollRect = t8, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (t8, n7) => {
            this.scrollAdjustments = 0, this.scrollDirection = n7 ? this.getScrollOffset() < t8 ? "forward" : "backward" : null, this.scrollOffset = t8, this.isScrolling = n7, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e16, s12) => {
      const t8 = /* @__PURE__ */ new Map(), n7 = /* @__PURE__ */ new Map();
      for (let i3 = s12 - 1; i3 >= 0; i3--) {
        const l5 = e16[i3];
        if (t8.has(l5.lane))
          continue;
        const h7 = n7.get(
          l5.lane
        );
        if (h7 == null || l5.end > h7.end ? n7.set(l5.lane, l5) : l5.end < h7.end && t8.set(l5.lane, true), t8.size === this.options.lanes)
          break;
      }
      return n7.size === this.options.lanes ? Array.from(n7.values()).sort((i3, l5) => i3.end === l5.end ? i3.index - l5.index : i3.end - l5.end)[0] : void 0;
    }, this.getMeasurementOptions = b2(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e16, s12, t8, n7, i3) => (this.pendingMeasuredCacheIndexes = [], {
        count: e16,
        paddingStart: s12,
        scrollMargin: t8,
        getItemKey: n7,
        enabled: i3
      }),
      {
        key: false
      }
    ), this.getMeasurements = b2(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e16, paddingStart: s12, scrollMargin: t8, getItemKey: n7, enabled: i3 }, l5) => {
        if (!i3)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((a4) => {
          this.itemSizeCache.set(a4.key, a4.size);
        }));
        const h7 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u5 = this.measurementsCache.slice(0, h7);
        for (let a4 = h7; a4 < e16; a4++) {
          const f11 = n7(a4), c9 = this.options.lanes === 1 ? u5[a4 - 1] : this.getFurthestMeasurement(u5, a4), g10 = c9 ? c9.end + this.options.gap : s12 + t8, m6 = l5.get(f11), v6 = typeof m6 == "number" ? m6 : this.options.estimateSize(a4), d8 = g10 + v6, p3 = c9 ? c9.lane : a4 % this.options.lanes;
          u5[a4] = {
            index: a4,
            start: g10,
            size: v6,
            end: d8,
            key: f11,
            lane: p3
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
      (e16, s12, t8) => this.range = e16.length > 0 && s12 > 0 ? W({
        measurements: e16,
        outerSize: s12,
        scrollOffset: t8
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
      (e16, s12, t8, n7) => s12 === null ? [] : e16({
        startIndex: s12.startIndex,
        endIndex: s12.endIndex,
        overscan: t8,
        count: n7
      }),
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e16) => {
      const s12 = this.options.indexAttribute, t8 = e16.getAttribute(s12);
      return t8 ? parseInt(t8, 10) : (console.warn(
        `Missing attribute name '${s12}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e16, s12) => {
      const t8 = this.indexFromElement(e16), n7 = this.measurementsCache[t8];
      if (!n7)
        return;
      const i3 = n7.key, l5 = this.elementsCache.get(i3);
      l5 !== e16 && (l5 && this.observer.unobserve(l5), this.observer.observe(e16), this.elementsCache.set(i3, e16)), e16.isConnected && this.resizeItem(t8, this.options.measureElement(e16, s12, this));
    }, this.resizeItem = (e16, s12) => {
      const t8 = this.measurementsCache[e16];
      if (!t8)
        return;
      const n7 = this.itemSizeCache.get(t8.key) ?? t8.size, i3 = s12 - n7;
      i3 !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(t8, i3, this) : t8.start < this.getScrollOffset() + this.scrollAdjustments) && (this.options.debug && console.info("correction", i3), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i3,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(t8.index), this.itemSizeCache = new Map(this.itemSizeCache.set(t8.key, s12)), this.notify(false));
    }, this.measureElement = (e16) => {
      if (!e16) {
        this.elementsCache.forEach((s12, t8) => {
          s12.isConnected || (this.observer.unobserve(s12), this.elementsCache.delete(t8));
        });
        return;
      }
      this._measureElement(e16, void 0);
    }, this.getVirtualItems = b2(
      () => [this.getIndexes(), this.getMeasurements()],
      (e16, s12) => {
        const t8 = [];
        for (let n7 = 0, i3 = e16.length; n7 < i3; n7++) {
          const l5 = e16[n7], h7 = s12[l5];
          t8.push(h7);
        }
        return t8;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e16) => {
      const s12 = this.getMeasurements();
      if (s12.length !== 0)
        return E5(
          s12[I2(
            0,
            s12.length - 1,
            (t8) => E5(s12[t8]).start,
            e16
          )]
        );
    }, this.getOffsetForAlignment = (e16, s12) => {
      const t8 = this.getSize(), n7 = this.getScrollOffset();
      s12 === "auto" && (e16 <= n7 ? s12 = "start" : e16 >= n7 + t8 ? s12 = "end" : s12 = "start"), s12 === "start" ? e16 = e16 : s12 === "end" ? e16 = e16 - t8 : s12 === "center" && (e16 = e16 - t8 / 2);
      const i3 = this.options.horizontal ? "scrollWidth" : "scrollHeight", h7 = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i3] : this.scrollElement[i3] : 0) - t8;
      return Math.max(Math.min(h7, e16), 0);
    }, this.getOffsetForIndex = (e16, s12 = "auto") => {
      e16 = Math.max(0, Math.min(e16, this.options.count - 1));
      const t8 = this.measurementsCache[e16];
      if (!t8)
        return;
      const n7 = this.getSize(), i3 = this.getScrollOffset();
      if (s12 === "auto")
        if (t8.end >= i3 + n7 - this.options.scrollPaddingEnd)
          s12 = "end";
        else if (t8.start <= i3 + this.options.scrollPaddingStart)
          s12 = "start";
        else
          return [i3, s12];
      const l5 = s12 === "end" ? t8.end + this.options.scrollPaddingEnd : t8.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(l5, s12), s12];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (e16, { align: s12 = "start", behavior: t8 } = {}) => {
      this.cancelScrollToIndex(), t8 === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e16, s12), {
        adjustments: void 0,
        behavior: t8
      });
    }, this.scrollToIndex = (e16, { align: s12 = "auto", behavior: t8 } = {}) => {
      e16 = Math.max(0, Math.min(e16, this.options.count - 1)), this.cancelScrollToIndex(), t8 === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const n7 = this.getOffsetForIndex(e16, s12);
      if (!n7) return;
      const [i3, l5] = n7;
      this._scrollToOffset(i3, { adjustments: void 0, behavior: t8 }), t8 !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(e16)
        )) {
          const [u5] = E5(
            this.getOffsetForIndex(e16, l5)
          );
          y(u5, this.getScrollOffset()) || this.scrollToIndex(e16, { align: l5, behavior: t8 });
        } else
          this.scrollToIndex(e16, { align: l5, behavior: t8 });
      }));
    }, this.scrollBy = (e16, { behavior: s12 } = {}) => {
      this.cancelScrollToIndex(), s12 === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e16, {
        adjustments: void 0,
        behavior: s12
      });
    }, this.getTotalSize = () => {
      var e16;
      const s12 = this.getMeasurements();
      let t8;
      return s12.length === 0 ? t8 = this.options.paddingStart : t8 = this.options.lanes === 1 ? ((e16 = s12[s12.length - 1]) == null ? void 0 : e16.end) ?? 0 : Math.max(
        ...s12.slice(-this.options.lanes).map((n7) => n7.end)
      ), Math.max(
        t8 - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e16, {
      adjustments: s12,
      behavior: t8
    }) => {
      this.options.scrollToFn(e16, { behavior: t8, adjustments: s12 }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(false);
    }, this.setOptions(r7);
  }
};
var I2 = (o10, r7, e16, s12) => {
  for (; o10 <= r7; ) {
    const t8 = (o10 + r7) / 2 | 0, n7 = e16(t8);
    if (n7 < s12)
      o10 = t8 + 1;
    else if (n7 > s12)
      r7 = t8 - 1;
    else
      return t8;
  }
  return o10 > 0 ? o10 - 1 : 0;
};
function W({
  measurements: o10,
  outerSize: r7,
  scrollOffset: e16
}) {
  const s12 = o10.length - 1, n7 = I2(0, s12, (l5) => o10[l5].start, e16);
  let i3 = n7;
  for (; i3 < s12 && o10[i3].end < e16 + r7; )
    i3++;
  return { startIndex: n7, endIndex: i3 };
}
function j3(o10) {
  const { count: r7, scrollEl: e16, estimateSize: s12, virtualThreshold: t8, gap: n7 } = o10, i3 = computed(() => t8 ? r7.value > t8 : true), l5 = () => 34, h7 = shallowRef([]), u5 = shallowRef(0), a4 = () => {
    i3.value && (u5.value = c9.getTotalSize(), h7.value = c9.getVirtualItems());
  }, f11 = computed(() => ({
    enabled: i3.value,
    count: r7.value,
    getScrollElement: () => e16.value,
    estimateSize: s12 ?? l5,
    overscan: 3,
    gap: n7,
    observeElementRect: R2,
    observeElementOffset: k3,
    scrollToFn: F2,
    onChange: a4
  })), c9 = new A2(f11.value);
  a4();
  const g10 = c9._didMount();
  watch(
    e16,
    (d8) => {
      d8 && c9._willUpdate();
    },
    { immediate: true }
  ), watch(
    () => f11.value,
    (d8) => {
      c9.setOptions(d8), c9._willUpdate(), a4();
    }
  ), onScopeDispose(() => {
    g10();
  });
  function m6(d8) {
    c9.scrollToIndex(d8);
  }
  function v6(d8) {
    d8 && c9.measureElement(d8);
  }
  return {
    virtualEnabled: i3,
    virtualList: h7,
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
  setup(c9, { emit: l5 }) {
    const e16 = e("tag"), t8 = c9, m6 = l5, { formProps: p3 } = i(), { size: i3 } = g([p3 ?? {}, t8], {
      size: "default"
    }), d8 = () => {
      m6("close");
    }, u5 = computed(() => {
      const { type: o10 } = t8;
      return [
        e16.b,
        e16.m(i3.value),
        o10 && e16.m("color-" + o10),
        e.is("round", t8.round),
        e.is("dark", t8.dark)
      ];
    });
    return (o10, w11) => (openBlock(), createElementBlock(
      "span",
      {
        class: normalizeClass(u5.value)
      },
      [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(e16).e("content"))
          },
          [
            renderSlot(o10.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        o10.closable ? (openBlock(), createBlock(unref(k), {
          key: 0,
          onClick: withModifiers(d8, ["stop"]),
          class: normalizeClass(unref(e16).e("icon-close"))
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
    const o10 = f11, l5 = e("checkbox"), a4 = useModel(f11, "modelValue"), s12 = computed(() => o10.trueValue ?? true), h7 = computed(() => o10.falseValue ?? false), { formProps: y4 } = i(), { size: V6, disabled: v6, readonly: C6 } = g(
      [y4 ?? {}, o10],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), x11 = computed(() => [
      l5.b,
      l5.m(V6.value),
      e.is("disabled", v6.value),
      e.is("checked", m6.value || o10.indeterminate)
    ]), m6 = computed(() => s12.value === a4.value), B7 = (n7) => {
      const r7 = n7.target;
      a4.value = r7.checked ? s12.value : h7.value;
    };
    return (n7, r7) => unref(C6) ? a4.value !== void 0 ? (openBlock(), createBlock(unref(A3), {
      key: 1,
      type: s12.value === a4.value ? "success" : "danger"
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString(s12.value === a4.value ? "是" : "否"),
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
        class: normalizeClass(x11.value)
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
                ]))) : n7.indeterminate ? (openBlock(), createElementBlock(
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
            renderSlot(n7.$slots, "default")
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
  const { rows: r7, rowForest: m6, props: c9, emit: b10, size: T6, cls: p3 } = A11, n7 = shallowRef(/* @__PURE__ */ new Set()), u5 = shallowRef();
  function d8() {
    triggerRef(n7);
  }
  function _10() {
    n7.value.forEach((e16) => {
      e16.checked = false;
    }), n7.value.clear(), d8();
  }
  function x11() {
    u5.value && (u5.value.checked = false, u5.value = void 0);
  }
  watch(
    [() => c9.checkable, () => c9.selectable, () => r7.value],
    () => {
      _10(), x11();
    }
  ), watch(u5, (e16) => {
    s12 || (i3 = true, b10(
      "update:selected",
      e16 != null && e16.data ? toRaw(e16.data) : void 0
    ), nextTick(() => {
      i3 = false;
    }));
  });
  let i3 = false, s12 = false;
  watch(n7, (e16) => {
    s12 || (i3 = true, b10(
      "update:checked",
      Array.from(e16).map((t8) => toRaw(t8.data))
    ), nextTick(() => {
      i3 = false;
    }));
  });
  let o10;
  function V6() {
    if (o10 || !r7.value || !c9.rowKey) return;
    let e16 = [], t8 = 0;
    for (; t8 < r7.value.length; ) {
      const a4 = r7.value[t8];
      e16.push([a4.uid, a4]), t8++;
    }
    o10 = new Map(e16);
  }
  watch(r7, () => {
    o10 = void 0;
  }), watch(
    [() => c9.checked, () => c9.rowKey, () => c9.checkable, r7],
    ([e16, t8, a4, l5], [j5, q8, G4, C6]) => {
      i3 || !a4 || !t8 || (s12 = true, l5 !== C6 && V6(), _10(), e16 == null || e16.forEach((h7) => {
        const g10 = o10 == null ? void 0 : o10.get(getChainValue(h7, t8));
        g10 && (g10.checked = true, n7.value.add(g10));
      }), d8(), nextTick(() => {
        s12 = false;
      }));
    },
    {
      immediate: true
    }
  ), watch(
    [() => c9.selected, () => c9.rowKey, () => c9.selectable, r7],
    ([e16, t8, a4, l5], [j5, q8, G4, C6]) => {
      if (!(i3 || !a4 || !t8)) {
        if (s12 = true, l5 !== C6 && V6(), e16) {
          const h7 = o10 == null ? void 0 : o10.get(getChainValue(e16, t8));
          h7 && (h7.checked = true, u5.value = h7);
        } else
          x11();
        nextTick(() => {
          s12 = false;
        });
      }
    },
    {
      immediate: true
    }
  );
  const U3 = computed(() => {
    var t8, a4;
    const e16 = c9.tree ? (t8 = m6.value) == null ? void 0 : t8.size : (a4 = r7.value) == null ? void 0 : a4.length;
    return e16 && e16 === n7.value.size;
  });
  function B7(e16) {
    var t8, a4;
    e16 ? ((t8 = m6.value) == null || t8.dft((l5) => {
      l5.checked = true, n7.value.add(l5);
    }), d8()) : ((a4 = m6.value) == null || a4.dft((l5) => {
      l5.checked = false;
    }), n7.value.clear(), d8());
  }
  function M8(e16) {
    var t8, a4;
    e16 ? ((t8 = r7.value) == null || t8.forEach((l5) => {
      l5.checked = true, n7.value.add(l5);
    }), d8()) : ((a4 = r7.value) == null || a4.forEach((l5) => {
      l5.checked = false;
    }), n7.value.clear(), d8());
  }
  function W6(e16) {
    c9.tree ? B7(e16) : M8(e16);
  }
  function D4(e16, t8) {
    t8 ? (e16.dft((a4) => {
      a4.checked = t8, n7.value.add(a4);
    }), d8()) : (e16.dft((a4) => {
      a4.checked = t8, n7.value.delete(a4);
    }), d8());
  }
  const N4 = () => T6.value === "large" ? 80 : 60, y4 = p3.e("checkbox"), E11 = (e16) => e16.stopPropagation();
  function F6() {
    return {
      key: "__is_check_column",
      name: "",
      width: N4(),
      align: "center",
      fixed: "left",
      nameRender() {
        const t8 = createVNode(U2, {
          modelValue: U3.value,
          "onUpdate:modelValue": W6
        });
        return c9.tree ? [createVNode("i", {
          text: true,
          class: p3.e("expand-space")
        }), t8] : t8;
      },
      render(t8) {
        const { row: a4 } = t8;
        return createVNode(U2, {
          class: y4,
          modelValue: a4.checked,
          "onUpdate:modelValue": (l5) => {
            D4(a4, l5);
          },
          onClick: E11
        });
      }
    };
  }
  function K6(e16, t8) {
    e16.checked = t8, t8 ? (u5.value && (u5.value.checked = false), u5.value = e16) : u5.value = void 0;
  }
  function P8() {
    const e16 = N4();
    return {
      key: "__is_select_column",
      name: "单选",
      minWidth: e16,
      width: e16,
      align: "center",
      fixed: "left",
      nameRender(t8) {
        return c9.tree ? [createVNode("i", {
          text: true,
          class: p3.e("expand-space")
        }), createTextVNode("单选")] : "单选";
      },
      render({ row: t8 }) {
        return createVNode(U2, {
          class: y4,
          modelValue: t8.checked,
          "onUpdate:modelValue": (a4) => {
            K6(t8, a4);
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
    clearSelected: x11
  };
}

// node_modules/ultra-ui/components/table/use-table.js
function S4(d8) {
  const { props: i3, cls: u5 } = d8, a4 = useSlots();
  return {
    /**
     * 获取列插槽VNode
     * @param ctx 列渲染上下文
     */
    getColumnSlotsNode: (e16) => {
      var n7;
      const t8 = e16.column.data, { render: s12, key: o10 } = t8;
      if (s12) return s12(e16);
      const r7 = ((n7 = i3.slots) == null ? void 0 : n7[`column:${o10}`]) ?? a4[`column:${o10}`];
      return r7 ? r7(e16) : e16.val;
    },
    /**
     * 获取表头插槽VNode
     * @param ctx 表头渲染上下文
     */
    getHeaderSlotsNode: (e16) => {
      var n7;
      const t8 = e16.column.data, { nameRender: s12, key: o10 } = t8;
      if (s12) return s12(e16);
      const r7 = ((n7 = i3.slots) == null ? void 0 : n7[`header:${o10}`]) ?? a4[`header:${o10}`];
      return r7 ? r7(e16) : t8.name;
    },
    /**
     * 获取单元格类名
     * @param column 列
     */
    getCellClass: (e16) => {
      const t8 = [u5.e("cell"), e.is(e16.align)];
      return e16.fixed && t8.push(e.is("fixed-" + e16.fixed)), e16.isLastFixed && t8.push(e.is("last-fixed")), e16.isFirstFixed && t8.push(e.is("first-fixed")), t8.join(" ");
    },
    /**
     * 获取单元格上下文
     * @param row 行
     * @param column 列
     */
    getCellCtx: (e16, t8) => {
      const s12 = e16.data, o10 = t8.key ? getChainValue(s12, t8.key) : void 0;
      return {
        row: e16,
        column: t8,
        rowData: s12,
        val: o10,
        model: {
          modelValue: o10,
          "onUpdate:modelValue": (n7) => {
            s12[t8.key] = n7;
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
    const o10 = $12, C6 = N4, k6 = useSlots(), l5 = e("table"), { size: R7 } = l([o10], {
      size: "default"
    }), _10 = shallowRef(), {
      rows: s12,
      toggleTreeRowExpand: H4,
      allExpanded: V6,
      toggleAllTreeRowExpand: F6,
      rowForest: A11,
      handleRowClick: D4,
      getRowByData: I4
    } = V2({
      props: o10,
      emit: C6
    }), { createCheckColumn: K6, createSelectColumn: L5, clearChecked: P8, clearSelected: U3 } = X2({
      size: R7,
      props: o10,
      rows: s12,
      rowForest: A11,
      emit: C6,
      cls: l5
    }), v6 = ie2({
      props: o10,
      createCheckColumn: K6,
      createSelectColumn: L5,
      colgroupRef: _10,
      toggleAllTreeRowExpand: F6,
      cls: l5
    }), { allColumns: f11, updateStylesOfColumns: W6 } = v6, { getColumnSlotsNode: O7, getHeaderSlotsNode: j5, getCellClass: q8, getCellCtx: G4 } = S4({
      props: o10,
      cls: l5
    }), d8 = shallowRef(), b10 = j3({
      count: computed(() => s12.value.length),
      scrollEl: computed(() => {
        var t8;
        return ((t8 = d8.value) == null ? void 0 : t8.containerRef) ?? null;
      }),
      estimateSize: () => 48
    }), { virtualList: a4, totalHeight: x11 } = b10, J7 = computed(() => a4.value.length ? x11.value - a4.value[a4.value.length - 1].end + a4.value[0].start : x11.value), h7 = shallowRef();
    watch(
      J7,
      (t8) => {
        h7.value && n2(h7.value, {
          height: `${t8}px`
        });
      },
      { immediate: true }
    );
    const M8 = shallowRef();
    return provide(e4, {
      tableProps: o10,
      tableSlots: k6,
      cls: l5,
      rows: s12,
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
        var t8;
        return (t8 = d8.value) == null ? void 0 : t8.el;
      }),
      clearChecked: P8,
      clearSelected: U3,
      getRowByData: I4
    }), (t8, we3) => (openBlock(), createBlock(unref(fe2), {
      class: normalizeClass([
        unref(l5).b,
        unref(l5).m(unref(R7)),
        unref(e).is("all-expanded", unref(V6)),
        unref(e).is("text-ellipsis", t8.textEllipsis)
      ]),
      ref_key: "scrollRef",
      ref: d8,
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
                  renderSlot(t8.$slots, "body", {
                    columns: unref(f11),
                    rows: unref(s12)
                  })
                ]),
                _: 2
                /* DYNAMIC */
              }, [
                k6.empty ? {
                  name: "empty",
                  fn: withCtx(() => [
                    renderSlot(t8.$slots, "empty")
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
                ref: h7,
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
                renderSlot(t8.$slots, "foot", {
                  columns: unref(f11),
                  rows: unref(s12)
                })
              ]),
              _: 3
              /* FORWARDED */
            })
          ],
          2
          /* CLASS */
        ),
        renderSlot(t8.$slots, "append"),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(l5).e("resizer"))
          },
          null,
          2
          /* CLASS */
        ),
        t8.textEllipsis ? (openBlock(), createBlock(
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
      state: a4,
      tableRef: C6,
      props: n7,
      emit: y4,
      featureSets: i3,
      handleCreate: b10,
      handleDelete: $12,
      handleInsertToNext: x11,
      handleInsertToPrev: N4,
      handleInsertChild: B7
    } = inject(t2), E11 = computed(() => omit(n7, [
      "model",
      "columns",
      "cols",
      "readonly",
      "deleteMethod",
      "saveMethod",
      "features",
      "resizable",
      "quickEdit"
    ])), I4 = (r7) => r7.every((t8) => !i3.value.has(t8)), w11 = computed(() => n7.readonly || I4(["create", "delete"]) ? n7.columns : (n7.columns ?? []).concat({
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
      i3.value.has("update") && (a4.row = r7);
    }
    return (r7, t8) => (openBlock(), createBlock(unref(S2), {
      class: normalizeClass(unref(u5).e("list"))
    }, {
      default: withCtx(() => [
        r7.slots.header || unref(n7).title ? (openBlock(), createBlock(unref(C2), { key: 0 }, {
          default: withCtx(() => [
            renderSlot(r7.$slots, "default", {}, () => [
              createTextVNode(
                toDisplayString(unref(n7).title),
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
          columns: w11.value,
          "highlight-current": "",
          "current-row": unref(a4).row,
          "onUpdate:currentRow": R7,
          "onUpdate:checked": t8[1] || (t8[1] = (o10) => unref(y4)("update:checked", o10)),
          "onUpdate:selected": t8[2] || (t8[2] = (o10) => unref(y4)("update:selected", o10)),
          ref_key: "tableRef",
          ref: C6
        }), createSlots({
          "column:__action__": withCtx(({ row: o10 }) => [
            createVNode(unref(P8), {
              tag: "div",
              onClick: t8[0] || (t8[0] = withModifiers(() => {
              }, ["stop"])),
              loading: o10.operating
            }, {
              default: withCtx(() => [
                unref(i3).has("create") ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    createVNode(unref(M), {
                      onClick: (f11) => unref(N4)(o10),
                      icon: unref(InsertToPrev_default),
                      title: "插入到上一行"
                    }, null, 8, ["onClick", "icon"]),
                    createVNode(unref(M), {
                      onClick: (f11) => unref(x11)(o10),
                      icon: unref(InsertToNext_default),
                      title: "插入到下一行"
                    }, null, 8, ["onClick", "icon"]),
                    unref(n7).tree ? (openBlock(), createBlock(unref(M), {
                      key: 0,
                      onClick: (f11) => unref(B7)(o10),
                      icon: unref(add_child_default),
                      title: "添加子项"
                    }, null, 8, ["onClick", "icon"])) : createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                unref(i3).has("delete") ? (openBlock(), createBlock(unref(M), {
                  key: 1,
                  icon: unref(delete_default),
                  type: "danger",
                  title: "删除",
                  onClick: (f11) => unref($12)(o10)
                }, null, 8, ["icon", "onClick"])) : createCommentVNode("v-if", true)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["loading"])
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          unref(n7).readonly ? void 0 : {
            name: "empty",
            fn: withCtx(() => [
              t8[3] || (t8[3] = createTextVNode(toDisplayString(null)))
            ]),
            key: "0"
          },
          !unref(n7).readonly && unref(i3).has("create") && (unref(n7).quickEdit || unref(a4).type === "create" && !unref(a4).visible || unref(a4).type === "update") ? {
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
                    loading: unref(a4).loading
                  }, {
                    default: withCtx(() => t8[4] || (t8[4] = [
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
function c2(e16) {
  for (let t8 = 0; t8 < r4.length; t8++) {
    const n7 = r4[t8];
    if (e16 < n7[0])
      return {
        name: n7[1],
        level: t8 + 1
      };
  }
  return {
    name: "xl",
    level: 5
  };
}
function f5(e16, t8) {
  if (!t8) return 24;
  const { name: n7, level: l5 } = t8, o10 = e16[n7];
  if (o10 !== void 0) return o10;
  if (l5 === 5) return e16.default ?? 24;
  const s12 = r4.slice(l5 - 1);
  for (let i3 = 0; i3 < s12.length; i3++) {
    const u5 = s12[i3][1];
    if (e16[u5])
      return e16[u5];
  }
  return 24;
}

// node_modules/ultra-ui/components/grid/use-responsive.js
function q3(p3) {
  const { props: r7, gridRef: t8, emit: s12 } = p3, c9 = shallowReactive(/* @__PURE__ */ new Set()), u5 = computed(() => r7.cols && typeof r7.cols != "number" || !!c9.size), n7 = shallowRef();
  let e16;
  return watch(
    [u5, t8],
    ([l5, o10]) => {
      o10 && (l5 && !e16 ? (e16 = new ResizeObserver(
        debounce(([f11]) => {
          const a4 = f11.target, m6 = a4.getBoundingClientRect();
          s12("resize", m6);
          const i3 = c2(a4.offsetWidth);
          equal(n7.value, i3) || (n7.value = i3, s12("breakpoint-change", i3));
        }, 0)
      ), e16.observe(o10)) : (e16 == null || e16.unobserve(o10), e16 == null || e16.disconnect(), e16 = void 0));
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    t8.value && (e16 == null || e16.unobserve(t8.value)), e16 == null || e16.disconnect();
  }), {
    responsive: u5,
    gridItemsProps: c9,
    currentBreakpoint: n7
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
  setup(p3, { expose: m6, emit: l5 }) {
    const a4 = p3, c9 = l5, f11 = e("grid"), r7 = shallowRef(), { currentBreakpoint: n7, gridItemsProps: u5 } = q3({
      props: a4,
      emit: c9,
      gridRef: r7
    });
    return watchEffect(() => {
      const { gap: e16, cols: o10 } = a4, i3 = n7.value, t8 = {};
      if (typeof e16 == "number")
        e16 > 0 && (t8.columnGap = e16 + "px");
      else if (typeof e16 == "string") {
        const [s12, d8] = e16.split(" ");
        t8.columnGap = f(d8, "px"), t8.rowGap = s12;
      }
      if (!o10)
        delete t8.gridTemplateColumns;
      else
        switch (typeof o10) {
          case "number":
            t8.gridTemplateColumns = `repeat(${o10}, minmax(0px, 1fr))`;
            break;
          case "function":
            t8.gridTemplateColumns = `repeat(${o10(i3)}, minmax(0px, 1fr))`;
            break;
          case "object":
            const s12 = f5(o10, i3);
            t8.gridTemplateColumns = `repeat(${s12}, minmax(0px, 1fr))`;
        }
      r7.value && n2(r7.value, t8);
    }), provide(e5, {
      currentBreakpoint: n7,
      gridItemsProps: u5
    }), m6({
      el: r7
    }), (e16, o10) => (openBlock(), createBlock(resolveDynamicComponent(e16.tag), {
      class: normalizeClass(unref(f11).b),
      ref_key: "gridRef",
      ref: r7
    }, {
      default: withCtx(() => [
        renderSlot(e16.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/components/form/use-node-interceptor.js
var S5 = ["label", "field", "span", "tips", "readonly"];
var V3 = t(1);
function _5(I4) {
  const { props: s12 } = I4, n7 = useSlots(), i3 = V3();
  function h7() {
    var a4;
    const { model: t8 } = s12, o10 = (a4 = n7.default) == null ? void 0 : a4.call(n7, {
      model: t8,
      data: t8 == null ? void 0 : t8.data
    });
    if (!(o10 != null && o10.length)) return null;
    const d8 = l2(o10), f11 = [], c9 = [];
    let l5 = 0;
    for (; l5 < d8.length; ) {
      const u5 = d8[l5];
      l5++;
      const { props: e16, type: r7 } = u5, m6 = {
        isFormItem: !!(e16 != null && e16.field) && (r7 == null ? void 0 : r7.name) !== "FormItem",
        formItemProps: pick(e16 ?? {}, S5),
        node: u5,
        field: e16 == null ? void 0 : e16.field,
        modelValue: (e16 == null ? void 0 : e16["model-value"]) ?? (e16 == null ? void 0 : e16.modelValue)
      };
      m6.field && c9.push(m6.field), f11.push(m6);
    }
    return t8.formKeys.set(i3, c9), f11;
  }
  return onBeforeUnmount(() => {
    var t8;
    (t8 = s12.model) == null || t8.formKeys.delete(i3);
  }), {
    getSlotsNodes: h7
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
  setup(i3) {
    const n7 = i3, s12 = e("grid-item"), { currentBreakpoint: r7, gridItemsProps: t8 } = inject(e5) ?? {};
    r7 || console.error("GridItem组件仅能在Grid组件中使用");
    const o10 = computed(() => {
      let { span: e16 } = n7;
      if (e16 === void 0) return 1;
      if (e16 === "full") return "full";
      if (typeof e16 == "number") return e16;
      const l5 = r7 == null ? void 0 : r7.value;
      return l5 ? e16[l5.name] ?? e16.default : e16.default;
    }), u5 = computed(() => ({
      gridColumn: o10.value === "full" ? "1 / -1" : `span ${o10.value}`
    }));
    return watch(
      () => n7.span,
      (e16) => {
        typeof e16 == "object" ? t8 == null || t8.add(n7) : t8 == null || t8.delete(n7);
      },
      { immediate: true }
    ), (e16, l5) => o10.value !== 0 ? (openBlock(), createBlock(resolveDynamicComponent(e16.tag), {
      key: 0,
      style: normalizeStyle(u5.value),
      class: normalizeClass(unref(s12).b)
    }, {
      default: withCtx(() => [
        renderSlot(e16.$slots, "default")
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
  setup(C6) {
    const o10 = C6, s12 = e("form-item"), {
      formProps: l5
    } = i(), {
      config: $12
    } = d(), {
      size: q8,
      readonly: b10
    } = l([l5 ?? {}, o10], {
      size: "default",
      readonly: false
    }), z5 = computed(() => [s12.b, s12.m(q8.value), e.is("error", !!n7.value)].join(" ")), B7 = computed(() => ({
      width: f(o10.labelWidth ?? (l5 == null ? void 0 : l5.labelWidth) ?? $12.form.labelWidth, "px")
    })), n7 = computed(() => {
      var e16;
      if (o10.field)
        return (e16 = l5 == null ? void 0 : l5.model.errors.get(o10.field)) == null ? void 0 : e16[0];
    }), N4 = computed(() => {
      var y4, v6;
      const {
        field: e16
      } = o10;
      return !e16 || b10.value ? false : !!((v6 = (y4 = l5 == null ? void 0 : l5.model) == null ? void 0 : y4.fields[e16]) == null ? void 0 : v6.required);
    });
    return (e16, g10) => (openBlock(), createBlock(unref($5), {
      span: e16.span,
      class: normalizeClass(z5.value)
    }, {
      default: withCtx(() => [o10.label || e16.$slots.label ? (openBlock(), createElementBlock(
        "label",
        {
          key: 0,
          class: normalizeClass([unref(s12).e("label"), unref(e).is("required", N4.value)]),
          style: normalizeStyle(B7.value)
        },
        [e16.tips ? (openBlock(), createBlock(unref(Re2), {
          key: 0,
          content: e16.tips,
          class: normalizeClass(unref(s12).e("tips"))
        }, {
          default: withCtx(() => [createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(s12).e("tip-label"))
            },
            [renderSlot(e16.$slots, "label", {}, () => [createTextVNode(
              toDisplayString(e16.label) + ":",
              1
              /* TEXT */
            )])],
            2
            /* CLASS */
          )]),
          _: 3
          /* FORWARDED */
        }, 8, ["content", "class"])) : renderSlot(e16.$slots, "label", {
          key: 1
        }, () => [createTextVNode(
          toDisplayString(e16.label) + ":",
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true), createBaseVNode(
        "section",
        {
          class: normalizeClass(unref(s12).e("content"))
        },
        [renderSlot(e16.$slots, "default"), unref(b10) ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "section",
          {
            key: 0,
            class: normalizeClass(unref(s12).e("error"))
          },
          [createVNode(Transition, {
            name: "form-item-tips",
            mode: "out-in"
          }, {
            default: withCtx(() => [n7.value ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(unref(s12).e("error-text"))
              },
              toDisplayString(n7.value),
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
  setup(k6, { expose: C6 }) {
    const l5 = k6, n7 = toRef(() => l5.model), g10 = e("form"), h7 = { xs: 1, sm: 2, xl: 3, default: 4 };
    i(l5);
    const { getSlotsNodes: v6 } = _5({ props: l5 });
    function B7(e16, s12) {
      const { data: o10 } = n7.value ?? {};
      o10 && setChainValue(o10, e16, s12);
    }
    const m6 = shallowRef();
    return C6({
      el: toRef(() => {
        var e16;
        return (e16 = m6.value) == null ? void 0 : e16.el;
      })
    }), (e16, s12) => (openBlock(), createBlock(unref(A4), {
      tag: "form",
      ref_key: "gridRef",
      ref: m6,
      cols: h7,
      class: normalizeClass([unref(g10).b, unref(e).is("readonly", e16.readonly)])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(v6)(), ({
            node: o10,
            isFormItem: b10,
            formItemProps: x11,
            field: p3,
            modelValue: V6
          }) => (openBlock(), createElementBlock(
            Fragment,
            {
              key: o10.key
            },
            [
              b10 ? (openBlock(), createBlock(
                unref(Q2),
                mergeProps({
                  key: 0,
                  ref_for: true
                }, x11),
                {
                  default: withCtx(() => {
                    var i3;
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(o10), {
                        "model-value": V6 ?? unref(getChainValue)(((i3 = n7.value) == null ? void 0 : i3.data) ?? {}, p3),
                        "onUpdate:modelValue": (R7) => B7(p3, R7)
                      }, null, 8, ["model-value", "onUpdate:modelValue"]))
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )) : (openBlock(), createBlock(resolveDynamicComponent(o10), { key: 1 }))
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
var v3 = defineComponent({
  name: "CardAction",
  __name: "card-action",
  props: {
    alignRight: { type: Boolean }
  },
  setup(n7) {
    const o10 = n7, r7 = computed(() => ({
      textAlign: o10.alignRight ? "right" : void 0
    })), e16 = inject(e3), { cls: a4 } = e16 || {};
    return e16 || console.warn("CardAction组件仅能在Card组件中使用"), (c9, _10) => {
      var t8;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass((t8 = unref(a4)) == null ? void 0 : t8.e("action")),
          style: normalizeStyle(r7.value)
        },
        [
          renderSlot(c9.$slots, "default")
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
    const { cls: d8, props: o10, state: a4, insertIndexes: k6, handleSave: c9, handleClose: w11 } = inject(t2);
    return (g10, f11) => unref(a4).visible && unref(o10).model ? (openBlock(), createBlock(unref(S2), {
      key: 0,
      class: normalizeClass(unref(d8).e("form"))
    }, {
      default: withCtx(() => [
        createVNode(unref(C2), null, {
          default: withCtx(() => [
            unref(o10).readonly ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                createTextVNode("详情")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : unref(a4).parentRow ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode("新增子级")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : unref(a4).type === "create" ? (openBlock(), createElementBlock(
              Fragment,
              { key: 2 },
              [
                createTextVNode("新增")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : unref(a4).type === "update" ? (openBlock(), createElementBlock(
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
              class: normalizeClass(unref(d8).e("form-wrap"))
            }, {
              default: withCtx(() => [
                createVNode(unref(K4), {
                  model: unref(o10).model,
                  readonly: unref(o10).readonly,
                  onKeyup: withKeys(unref(c9), ["enter"]),
                  "label-width": unref(o10).labelWidth
                }, {
                  default: withCtx(({ data: h7, model: C6 }) => {
                    var _10;
                    return [
                      renderSlot(g10.$slots, "default", normalizeProps(guardReactiveProps({
                        data: h7,
                        model: C6,
                        row: unref(a4).row,
                        indexes: unref(k6),
                        index: (_10 = unref(a4).row) == null ? void 0 : _10.index
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
        createVNode(unref(v3), {
          class: normalizeClass(unref(d8).e("action"))
        }, {
          default: withCtx(() => [
            createVNode(unref(M), {
              text: "",
              type: "primary",
              loading: unref(a4).loading,
              onClick: unref(w11)
            }, {
              default: withCtx(() => f11[0] || (f11[0] = [
                createTextVNode(" 关闭 ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["loading", "onClick"]),
            !unref(o10).readonly && !unref(o10).quickEdit && unref(a4).dataUpdated ? (openBlock(), createBlock(unref(M), {
              key: 0,
              type: unref(a4).type === "create" ? "success" : "primary",
              loading: unref(a4).loading,
              onClick: unref(c9),
              plain: ""
            }, {
              default: withCtx(() => [
                createTextVNode(
                  " 确认" + toDisplayString(unref(a4).type === "create" ? "新增" : "修改"),
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
  setup(h7, { emit: y4 }) {
    const t8 = h7, s12 = y4, _10 = computed(() => new Set(
      t8.features ?? ["create", "delete", "update"]
    )), l5 = useSlots(), i3 = e("batch-edit"), n7 = shallowRef(), o10 = L({
      props: t8,
      emit: s12,
      tableRef: n7
    }), { state: c9, handleClose: b10 } = o10;
    provide(t2, {
      cls: i3,
      props: t8,
      emit: s12,
      tableRef: n7,
      featureSets: _10,
      ...o10
    });
    const p3 = inject(o6, void 0);
    p3 && watch(p3.visible, (e16) => {
      !e16 && o10.handleClose();
    });
    const B7 = computed(() => c9.row || c9.visible ? t8.cols : void 0);
    return (e16, A11) => (openBlock(), createBlock(unref(Y2), {
      class: normalizeClass(unref(i3).b),
      cols: B7.value,
      rows: "100%",
      gap: "8px",
      resizable: e16.resizable,
      onKeyup: withKeys(unref(b10), ["esc"])
    }, {
      default: withCtx(() => [
        createVNode(de3, { slots: l5 }, {
          default: withCtx(() => [
            l5.header ? renderSlot(e16.$slots, "header", { key: 0 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
          /* FORWARDED */
        }),
        createVNode(M2, null, {
          default: withCtx((w11) => [
            createCommentVNode(" @vue-ignore "),
            renderSlot(e16.$slots, "form", normalizeProps(guardReactiveProps(w11)))
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
function t4(n7) {
  return n7;
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
  setup(o10) {
    const e16 = o10, n7 = e("button-group");
    return (t8, d8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(n7).b)
      },
      [
        renderSlot(t8.$slots, "default", normalizeProps(guardReactiveProps({ props: e16 })))
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/calendar/utils.js
var g2 = ["日", "一", "二", "三", "四", "五", "六"];
function M3(t8, n7) {
  const c9 = date().format();
  (t8 instanceof Date || typeof t8 == "string" || typeof t8 == "number") && (t8 = date(t8)), t8.setDay(1);
  const m6 = Array.from({ length: t8.getDays() }).map(
    (r7, s12) => {
      const h7 = {
        date: t8.calc(s12, "days"),
        type: "current"
      };
      return h7.isToday = h7.date.format() === c9, h7.disabled = n7 == null ? void 0 : n7(h7.date), h7;
    }
  ), y4 = [], o10 = [], f11 = t8.weekDay;
  if (f11 !== 0) {
    t8.setDay(0);
    let r7 = 0;
    for (; r7 < f11; ) {
      const s12 = {
        date: t8.calc(-r7, "days"),
        type: "pre"
      };
      s12.disabled = n7 == null ? void 0 : n7(s12.date), y4.unshift(s12), r7++;
    }
  }
  const u5 = 42 - m6.length - y4.length;
  let p3 = 0;
  for (t8.setMonth(t8.month + 2).setDay(1); p3 < u5; ) {
    const r7 = {
      date: t8.calc(p3++, "days"),
      type: "next"
    };
    r7.disabled = n7 == null ? void 0 : n7(r7.date), o10.push(r7);
  }
  return [...y4, ...m6, ...o10];
}
function k4(t8, n7) {
  (t8 instanceof Date || typeof t8 == "string" || typeof t8 == "number") && (t8 = date(t8));
  const c9 = t8.year;
  return Array.from({ length: 12 }).map((m6, y4) => {
    const o10 = y4 + 1, f11 = `${c9}-${o10}`;
    return {
      key: f11,
      month: o10,
      disabled: n7 == null ? void 0 : n7(date(f11).toEndOfMonth())
    };
  });
}
function w3(t8, n7) {
  (t8 instanceof Date || typeof t8 == "string" || typeof t8 == "number") && (t8 = date(t8));
  const c9 = t8.year - t8.year % 10 + 1;
  return Array.from({ length: 10 }).map((m6, y4) => {
    const o10 = c9 + y4;
    return {
      year: o10,
      disabled: n7 == null ? void 0 : n7(date(`${o10}-12-31 23:59:59`))
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
    const n7 = useModel(m6, "modelValue"), e16 = e("calendar"), s12 = computed(() => M3(n7.value ?? /* @__PURE__ */ new Date()));
    return (M8, k6) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(e16).b)
      },
      [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass(unref(e16).e("days"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(s12.value, (a4) => (openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass([unref(e16).e("day"), unref(e16).em("day", a4.type)]),
                  key: a4.date.timestamp
                },
                toDisplayString(a4.date.day),
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
  setup(a4) {
    const e16 = a4, r7 = inject(e3), { cls: m6 } = r7 || {};
    r7 || console.warn("CardCover组件仅能在Card组件中使用");
    const l5 = computed(() => ({
      height: f(e16.height, "px")
    }));
    return (o10, y4) => {
      var t8;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass((t8 = unref(m6)) == null ? void 0 : t8.e("cover")),
          style: normalizeStyle(l5.value)
        },
        [
          o10.src ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: o10.src,
            draggable: "false",
            alt: "封面",
            class: normalizeClass(unref(e).is("height-fixed", e16.height !== void 0))
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
  setup(o10) {
    const t8 = o10, r7 = computed(() => t8.cover ? {
      padding: 0,
      fontSize: 0
    } : void 0), e16 = inject(e3), { cls: c9 } = e16 || {};
    return e16 || console.warn("CardContent组件仅能在Card组件中使用"), (a4, v6) => {
      var n7;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass((n7 = unref(c9)) == null ? void 0 : n7.e("content")),
          style: normalizeStyle(r7.value)
        },
        [
          renderSlot(a4.$slots, "default")
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
  const { emit: i3, props: s12, nodeDict: o10, forest: p3 } = u5, a4 = shallowReactive(/* @__PURE__ */ new Set());
  let c9 = false;
  const h7 = (e16) => {
    let r7 = e16;
    const t8 = /* @__PURE__ */ new Set();
    for (; r7.parent; )
      r7 = r7.parent, r7.selected = true, t8.add(r7.data);
    return t8;
  }, l5 = (e16) => {
    var r7;
    e16.parent && ((r7 = e16.parent.children) == null || r7.forEach((t8) => {
      t8 !== e16 && (t8.selected = false, a4.delete(t8.data));
    }));
  };
  return watch(
    () => [s12.modelValue, p3.value.nodes],
    ([e16, r7]) => {
      if ((e16 == null ? void 0 : e16.length) === void 0) {
        a4.clear();
        return;
      }
      s12.multiple || c9 && a4.size !== 0 || (r7.forEach((t8) => {
        Tree.bft(t8, (d8) => {
          e16 != null && e16.includes(d8.data[s12.valueKey]) && (a4.add(d8.data), c9 = false, l5(d8));
        });
      }), nextTick(() => {
        c9 = true;
      }));
    },
    {
      immediate: true
    }
  ), watch(
    a4,
    (e16) => {
      if (s12.multiple || !c9) return;
      c9 = false;
      let r7 = Array.from(e16);
      i3(
        "update:modelValue",
        e16.size === 0 ? void 0 : r7.map((t8) => t8[s12.valueKey])
      ), i3(
        "change",
        r7.map((t8) => t8[s12.valueKey]),
        r7.map((t8) => t8[s12.labelKey]),
        r7
      ), nextTick(() => {
        c9 = true;
      });
    },
    {
      immediate: true
    }
  ), {
    selected: a4,
    handleSelect: (e16) => {
      if (c9 = true, e16.disabled) return;
      l5(e16), a4.forEach((t8) => {
        const d8 = o10.value.get(t8[s12.valueKey]);
        d8 && d8.depth > e16.depth && (d8.selected = false, a4.delete(t8));
      }), e16.selected = true, a4.add(e16.data), h7(e16).forEach((t8) => {
        t8 !== void 0 && a4.add(t8);
      });
    }
  };
}

// node_modules/ultra-ui/components/cascade/use-check.js
function w5(u5) {
  const { emit: f11, props: l5, nodeDict: m6, forest: p3 } = u5, i3 = shallowReactive(/* @__PURE__ */ new Set());
  let c9 = false;
  watch(
    [() => l5.modelValue, m6],
    ([r7, d8], [t8]) => {
      l5.multiple && (c9 && i3.size !== 0 || p3.value.size !== 0 && (t8 == null || t8.forEach((e16) => {
        const a4 = d8.get(e16);
        a4.checked = false, i3.delete(a4.data);
      }), r7 == null || r7.forEach((e16) => {
        const a4 = d8.get(e16);
        a4 && (i3.add(a4.data), a4.checked = true);
      }), nextTick(() => {
        c9 = true;
      })));
    },
    {
      immediate: true
    }
  ), watch(
    i3,
    (r7) => {
      if (!l5.multiple || !c9) return;
      c9 = false;
      const d8 = Array.from(r7);
      f11(
        "update:modelValue",
        r7.size === 0 ? void 0 : d8.map((t8) => t8[l5.valueKey])
      ), f11(
        "change",
        d8.map((t8) => t8[l5.valueKey]),
        d8.map((t8) => t8[l5.labelKey]),
        d8
      ), nextTick(() => {
        c9 = true;
      });
    },
    {
      immediate: true
    }
  );
  function o10(r7, d8) {
    c9 = true;
    const { checkStrictly: t8 } = l5;
    if (d8) {
      if (Tree.dft(r7, (e16) => {
        e16.disabled || (e16.checked = true, i3.add(e16.data));
      }), !t8) {
        let e16 = r7.parent;
        for (; e16 && e16.depth > 0; )
          e16.checked = e16.children.every((a4) => a4.checked), e16.checked ? (e16.indeterminate = false, i3.add(e16.data)) : e16.indeterminate = true, e16 = e16.parent;
      }
    } else if (Tree.dft(r7, (e16) => {
      e16.checked = false, e16.indeterminate = false, i3.delete(e16.data);
    }), !t8) {
      let e16 = r7.parent;
      for (; e16 && e16.depth > 0; )
        e16.checked = false, i3.delete(e16.data), e16.indeterminate = e16.children.some((a4) => a4.indeterminate) || e16.children.some((a4) => a4.checked), e16 = e16.parent;
    }
    nextTick(() => {
      c9 = false;
    });
  }
  return {
    checked: i3,
    handleCheck: o10
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
    const p3 = I4, U3 = inject(e6), {
      cls: o10,
      cascadeProps: v6,
      size: j5,
      close: F6,
      updatePosition: L5,
      handleSelect: P8,
      handleCheck: T6,
      cascade: _10
    } = U3, { labelKey: k6, valueKey: y4, childrenKey: u5, multiple: i3 } = v6, r7 = ref([1]), d8 = ref([]), C6 = shallowRef([]);
    let N4 = true;
    const b10 = (e16, l5) => l5.parentNodes === "" || r7.value.includes(e16) && d8.value.includes(l5.parentNodes), D4 = (e16, l5) => {
      !e16.includes(l5) && l5 && e16.push(l5);
    }, q8 = (e16) => {
      e16.disabled || (N4 = false, e16[u5] === void 0 || !e16[u5].length ? !i3 && F6() : (e16.depth === 1 ? (d8.value = [], r7.value = [1, 2]) : d8.value.splice(e16.depth - 1, 1), r7.value = [...r7.value, e16.depth + 1], d8.value = [...d8.value, e16.data[y4]], nextTick(() => {
        L5();
      }), g10()), !i3 && P8(e16));
    }, g10 = () => {
      var e16;
      (e16 = p3.cascadeData) == null || e16.some((l5) => {
        l5.forEach((c9) => {
          c9.selected = false;
        });
      });
    }, A11 = (e16) => {
      var c9;
      let l5 = [];
      r7.value = [1], d8.value = [], (c9 = p3.cascadeData) == null || c9.some((s12) => {
        s12.forEach((a4) => {
          e16.includes(a4.data[y4]) && l5.push(a4);
        });
      }), l5.forEach((s12, a4) => {
        i3 ? s12.checked = true : s12.selected = true, D4(d8.value, s12.parentNodes), D4(r7.value, a4 + 1), b10(a4, s12);
      });
    };
    return watch(
      () => _10.value,
      (e16) => {
        if (e16 === "") {
          g10();
          return;
        }
        e16 && N4 && A11(v6.modelValue);
      },
      { immediate: true }
    ), watch(
      [C6, _10],
      ([e16, l5]) => {
        e16 && l5 && n4(() => {
          e16.forEach((c9, s12) => {
            const a4 = c9.containerRef.getElementsByClassName(
              i3 ? "is-checked" : "is-selected"
            )[0];
            a4 == null || a4.scrollIntoView({ block: "nearest", inline: "start" });
          });
        });
      },
      {
        immediate: true
      }
    ), (e16, l5) => (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(e16.cascadeData, (c9, s12) => withDirectives((openBlock(), createBlock(unref(fe2), {
        tag: "ul",
        class: normalizeClass([unref(o10).e("options"), unref(o10).m(unref(j5))]),
        ref_for: true,
        ref_key: "scrollRef",
        ref: C6
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(c9, (a4, G4) => withDirectives((openBlock(), createElementBlock("li", {
              class: normalizeClass([
                unref(o10).e("option"),
                unref(e).is("selected", a4.selected),
                unref(e).is("checked", a4.checked),
                unref(e).is("disabled", a4.disabled)
              ]),
              "data-key": a4.data[unref(k6)],
              "data-depth": a4.depth,
              onClick: (w11) => q8(a4)
            }, [
              renderSlot(e16.$slots, "default", {
                option: a4,
                index: G4
              }, () => [
                createBaseVNode("div", null, [
                  unref(i3) ? (openBlock(), createBlock(unref(U2), {
                    key: 0,
                    "model-value": a4.checked,
                    indeterminate: a4.indeterminate,
                    "onUpdate:modelValue": (w11) => unref(T6)(a4, w11)
                  }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])) : createCommentVNode("v-if", true),
                  createTextVNode(
                    " " + toDisplayString(a4.data[unref(k6)]),
                    1
                    /* TEXT */
                  )
                ]),
                a4[unref(u5)] && a4[unref(u5)].length ? (openBlock(), createBlock(unref(k), { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true)
              ])
            ], 10, de4)), [
              [vShow, b10(s12, a4)],
              [unref(T), a4.disabled ? false : unref(o10).e("ripple")]
            ])),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["class"])), [
        [vShow, r7.value.includes(s12 + 1)]
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
    const w11 = inject(e6), {
      cls: o10,
      cascadeProps: _10,
      cascadeMulti: t8,
      disabled: c9,
      readonly: h7,
      hovered: x11,
      size: D4,
      clear: N4,
      remove: V6
    } = w11, { placeholder: z5, clearable: B7 } = _10, u5 = () => {
      var d8;
      let { visibilityLimit: l5 } = _10;
      if (l5)
        return l5 < 0 && (l5 = 0), (c9.value || h7.value) && (l5 = ((d8 = t8.value) == null ? void 0 : d8.length) ?? 0), l5;
    }, M8 = computed(() => t8.value.length > u5() ? t8.value.slice(0, u5()) : t8.value), C6 = computed(() => t8.value.length > u5() ? t8.value.length - u5() : 0), T6 = (l5) => {
      V6(l5);
    }, $12 = () => {
      N4();
    };
    return (l5, d8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(o10).e("multi"), unref(o10).m(unref(D4)), unref(e).is("disabled", unref(c9))])
      },
      [
        createCommentVNode(" 默认展示 "),
        withDirectives(createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(o10).e("placeholder"))
          },
          toDisplayString(unref(z5)),
          3
          /* TEXT, CLASS */
        ), [
          [vShow, !unref(t8).length]
        ]),
        createCommentVNode(" 选择的数据项 "),
        unref(t8).length ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(unref(o10).e("tags"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(M8.value, (i3, j5) => (openBlock(), createBlock(unref(A3), {
                key: i3 + j5,
                closable: !unref(c9),
                onClose: (Q5) => T6(i3)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(i3),
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
            C6.value > 0 ? (openBlock(), createBlock(unref(A3), { key: 0 }, {
              default: withCtx(() => [
                createTextVNode(
                  "+" + toDisplayString(C6.value),
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
            var i3;
            return [
              unref(B7) && ((i3 = unref(t8)) != null && i3.length) && unref(x11) && !unref(c9) ? (openBlock(), createBlock(unref(k), {
                key: 0,
                class: normalizeClass(unref(o10).e("clear")),
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
        unref(h7) ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(k), {
          key: 1,
          class: normalizeClass(unref(o10).e("arrow"))
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
    const r7 = m6, f11 = inject(e6), { cls: a4, size: u5, handleFilter: _10, getNodePath: n7, cascade: h7, qsClear: C6, close: v6 } = f11, o10 = shallowRef(-1), y4 = computed(() => r7.filterData.map((e16) => n7(e16.data)).filter((e16) => e16 !== "")), k6 = (e16, l5) => {
      o10.value = l5, _10(e16), r7.selectAndReset && (C6(), v6());
    };
    return watch(
      () => h7.value,
      (e16) => {
        o10.value = r7.filterData.findIndex((l5) => n7(l5.data) === e16);
      },
      { immediate: true }
    ), (e16, l5) => (openBlock(), createBlock(unref(fe2), {
      tag: "ul",
      class: normalizeClass([unref(a4).e("options"), unref(a4).m(unref(u5))]),
      ref: "scrollRef",
      style: { width: "100%" }
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(y4.value, (c9, s12) => withDirectives((openBlock(), createElementBlock("li", {
            class: normalizeClass([unref(a4).e("option"), unref(e).is("selected", o10.value === s12)]),
            onClick: (K6) => k6(c9, s12),
            key: s12
          }, [
            createTextVNode(
              toDisplayString(c9),
              1
              /* TEXT */
            )
          ], 10, E6)), [
            [unref(T), unref(a4).e("ripple")]
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
var se2 = (p3, d8, r7) => d8 in p3 ? le2(p3, d8, { enumerable: true, configurable: true, writable: true, value: r7 }) : p3[d8] = r7;
var i2 = (p3, d8, r7) => se2(p3, typeof d8 != "symbol" ? d8 + "" : d8, r7);
var H2 = class extends TreeNode {
  constructor(r7) {
    const { data: w11, index: o10, parent: $12, labelKey: m6, valueKey: k6 } = r7;
    super(w11, o10);
    i2(this, "parent", null);
    i2(this, "children");
    i2(this, "expanded", false);
    i2(this, "loading", false);
    i2(this, "loaded", false);
    i2(this, "checked", false);
    i2(this, "selected", false);
    i2(this, "indeterminate", false);
    i2(this, "disabled", false);
    i2(this, "visible", true);
    i2(this, "labelKey");
    i2(this, "valueKey");
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
  setup(p3, { emit: d8 }) {
    const r7 = e("cascade"), w11 = d8, o10 = p3, { formProps: $12 } = i(), { size: m6, disabled: k6, readonly: T6 } = g(
      [$12 ?? {}, o10],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), M8 = shallowRef(false), D4 = shallowRef([]), N4 = shallowRef(""), v6 = computed(() => {
      const { valueKey: e16, labelKey: a4, options: l5, disabledNode: s12 } = o10;
      return Forest.create(l5, {
        createNode: s12 ? (n7, y4) => {
          const F6 = new H2({
            data: n7,
            index: y4,
            valueKey: e16,
            labelKey: a4
          });
          return n7 && (F6.disabled = s12(n7, F6) ?? false), F6;
        } : (n7, y4) => new H2({
          data: n7,
          index: y4,
          valueKey: e16,
          labelKey: a4
        })
      });
    }), V6 = computed(() => {
      const e16 = /* @__PURE__ */ new Map();
      return v6.value.dft((a4) => {
        e16.set(a4.key, a4);
      }), e16;
    }), B7 = shallowRef(), x11 = () => {
      var e16;
      (e16 = B7.value) == null || e16.close();
    }, J7 = () => {
      var e16;
      (e16 = B7.value) == null || e16.open();
    }, Q5 = () => {
      var e16;
      (e16 = B7.value) == null || e16.updateDropdown();
    }, { handleSelect: X5, selected: P8 } = w4({
      props: o10,
      emit: w11,
      nodeDict: V6,
      forest: v6
    }), { checked: z5, handleCheck: Z3 } = w5({
      props: o10,
      emit: w11,
      nodeDict: V6,
      forest: v6
    });
    function ee3(e16) {
      const a4 = {};
      function l5(s12, n7) {
        a4[s12.depth] || (a4[s12.depth] = []), a4[s12.depth].push(s12), s12.parentNodes = n7 ? n7.data[o10.valueKey] : "", s12.children && s12.children.forEach((y4) => l5(y4, s12));
      }
      return e16.forEach((s12) => l5(s12)), Object.keys(a4).sort((s12, n7) => s12 - n7).map((s12) => a4[s12]);
    }
    const f11 = shallowRef();
    watch(
      () => o10.options,
      (e16) => {
        e16 && (D4.value = ee3(v6.value.nodes));
      },
      { immediate: true }
    ), watch(
      P8,
      (e16) => {
        o10.multiple || (f11.value = e16.size === 0 ? "" : Array.from(e16).map((a4) => a4[o10.labelKey]).join(" / "));
      },
      {
        immediate: true
      }
    ), watch(
      z5,
      (e16) => {
        o10.multiple && (f11.value = e16.size === 0 ? "" : Array.from(e16).map((a4) => a4[o10.labelKey]).join(" / "));
      },
      { immediate: true }
    );
    const R7 = (e16) => {
      let a4 = [e16[o10.labelKey]], l5 = V6.value.get(e16[o10.valueKey]);
      for (; l5 != null && l5.parent; ) {
        if (l5.disabled)
          return "";
        l5 = l5.parent, l5.data && a4.unshift(l5.data[o10.labelKey]);
      }
      return e16.disabled ? "" : a4.join(" / ");
    }, ae4 = computed(() => {
      const e16 = Array.from(z5).map((l5) => R7(l5));
      return e16.filter((l5, s12) => !e16.some((n7, y4) => y4 !== s12 && n7.startsWith(l5)));
    }), A11 = () => {
      o10.multiple && z5.clear(), !o10.multiple && P8.clear(), f11.value = "", x11();
    }, te5 = (e16) => {
      let a4 = e16.split(" / "), l5 = a4[a4.length - 1];
      v6.value.dft((s12) => {
        if (s12.label === l5) {
          z5.delete(s12.data);
          return;
        }
      });
    }, g10 = shallowRef([]), j5 = () => {
      N4.value = "";
    };
    return watch(N4, (e16) => {
      e16 ? (g10.value = [], v6.value.dft((a4) => {
        a4.label.includes(e16) && !a4.disabled && g10.value.push(a4);
      })) : g10.value = [];
    }), provide(e6, {
      cls: r7,
      cascadeProps: o10,
      size: m6,
      disabled: k6,
      readonly: T6,
      close: x11,
      open: J7,
      updatePosition: Q5,
      forest: v6,
      nodeDict: V6,
      handleSelect: X5,
      handleCheck: Z3,
      cascade: f11,
      cascadeMulti: ae4,
      emit: w11,
      hovered: M8,
      clear: A11,
      remove: te5,
      filterData: g10,
      qsClear: j5,
      handleFilter: (e16) => {
        f11.value = e16;
        let a4 = e16.split(" / ");
        P8.clear(), v6.value.dft((l5) => {
          if (!l5.disabled) {
            let s12 = R7(l5.data);
            a4.includes(l5.data[o10.labelKey]) && s12 !== "" && P8.add(l5.data);
          }
        });
      },
      getNodePath: R7
    }), (e16, a4) => unref(T6) ? f11.value ? (openBlock(), createElementBlock(
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
      onMouseenter: a4[2] || (a4[2] = (l5) => M8.value = true),
      onMouseleave: a4[3] || (a4[3] = (l5) => M8.value = false)
    }, {
      trigger: withCtx(() => [
        createCommentVNode(" 单选展示 "),
        e16.multiple ? (openBlock(), createElementBlock(
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
          placeholder: e16.placeholder,
          clearable: e16.clearable,
          modelValue: f11.value,
          "onUpdate:modelValue": a4[0] || (a4[0] = (l5) => f11.value = l5),
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
        e16.filterable ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass([unref(r7).e("content-filter"), unref(r7).m(unref(m6))])
          },
          [
            createVNode(unref(Ve), {
              placeholder: "输入关键字进行过滤",
              modelValue: N4.value,
              "onUpdate:modelValue": a4[1] || (a4[1] = (l5) => N4.value = l5),
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
              createVNode(unref(O2), mergeProps(e16.$attrs, { filterData: g10.value }), null, 16, ["filterData"])
            ])) : (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(r7).e("content"))
              },
              [
                createVNode(unref(Ce), mergeProps(e16.$attrs, { cascadeData: D4.value }), null, 16, ["cascadeData"])
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
  setup(c9, { emit: o10 }) {
    const s12 = e("check-tag"), e16 = c9, a4 = o10, n7 = computed(() => [s12.b, e.is("checked", e16.checked)]), l5 = () => {
      a4("update:modelValue", e16.checked);
    };
    return (m6, k6) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(n7.value),
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
  setup(n7, { emit: S8 }) {
    const r7 = n7, a4 = useModel(n7, "modelValue"), d8 = e("checkbox-group"), { formProps: b10 } = i(), { size: m6, disabled: v6 } = g([b10 ?? {}, r7], {
      size: "default",
      disabled: false
    }), k6 = (l5) => {
      const { valueKey: s12 } = r7, e16 = l5[s12];
      return !e16 || !a4.value ? false : a4.value.includes(e16);
    }, y4 = (l5, s12) => {
      var i3;
      const { valueKey: e16 } = r7, t8 = s12[e16];
      t8 && (l5 ? a4.value = [...a4.value ?? [], t8] : a4.value = (i3 = a4.value) == null ? void 0 : i3.filter((V6) => V6 !== t8));
    };
    return (l5, s12) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(d8).b, unref(d8).m(unref(m6)), unref(e).is("block", l5.block)])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(l5.items, (e16) => (openBlock(), createBlock(unref(U2), {
            key: e16[l5.valueKey],
            "model-value": k6(e16),
            "onUpdate:modelValue": (t8) => y4(t8, e16),
            disabled: unref(v6),
            size: unref(m6)
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(e16[l5.labelKey]),
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
  setup(i3, { emit: v6 }) {
    const c9 = v6, { cls: a4 } = inject(e7), n7 = shallowRef(false), m6 = computed(() => (typeof i3.menu.disabled == "function" ? i3.menu.disabled() : i3.menu.disabled) ?? false);
    function b10() {
      var s12, f11;
      if (m6.value || n7.value) return;
      c9("click-start"), n7.value = true;
      const l5 = (f11 = (s12 = i3.menu).callback) == null ? void 0 : f11.call(s12);
      if (l5 instanceof Promise)
        return l5.then(() => {
        }).finally(() => {
          c9("click-end"), n7.value = false;
        });
      n7.value = false, c9("click-end");
    }
    return (l5, s12) => withDirectives((openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass([
          unref(a4).e("item"),
          unref(e).is("disabled", m6.value),
          unref(e).is("loading", n7.value),
          unref(a4).em("item", "menu")
        ]),
        onClick: b10
      },
      [
        n7.value ? (openBlock(), createBlock(unref(k), {
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
                class: normalizeClass(unref(a4).e("icon-place"))
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
            class: normalizeClass(unref(a4).e("label"))
          },
          toDisplayString(l5.menu.label),
          3
          /* TEXT, CLASS */
        )
      ],
      2
      /* CLASS */
    )), [
      [unref(T), !m6.value && !n7.value]
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
  setup(h7, { emit: x11 }) {
    const n7 = h7, b10 = x11, { size: k6 } = l([n7], {
      size: "default"
    }), s12 = e("context-menu"), C6 = shallowRef(), c9 = shallowRef(true), v6 = () => {
      const t8 = {}, { mousePosition: o10 } = n7, { x: e16, y: m6 } = o10;
      e16 > window.innerWidth / 2 ? t8.right = window.innerWidth - e16 - 1 : t8.left = e16 + 1, m6 > window.innerHeight / 2 ? t8.bottom = window.innerHeight - m6 - 1 : t8.top = m6 + 1;
      const $12 = t8.top ? "top" : "bottom", B7 = t8.left ? "left" : "right";
      return t8.transformOrigin = `${$12} ${B7}`, objMap(t8, (D4) => f(D4, "px"));
    }, y4 = computed(() => ({
      width: f(n7.width, "px"),
      ...v6(),
      zIndex: o()
    })), _10 = computed(() => {
      const { menus: t8 } = n7;
      return typeof t8 == "function" ? t8() : t8;
    }), g10 = (t8) => typeof t8.disabled == "function" ? t8.disabled() : t8.disabled;
    function u5() {
      c9.value = false;
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
      cls: s12
    }), (t8, o10) => (openBlock(), createBlock(Transition, {
      name: "zoom-in",
      appear: "",
      onAfterLeave: o10[0] || (o10[0] = (e16) => b10("destroy"))
    }, {
      default: withCtx(() => [
        c9.value ? withDirectives((openBlock(), createElementBlock(
          "ul",
          {
            key: 0,
            class: normalizeClass([unref(s12).b, unref(s12).m(unref(k6))]),
            style: normalizeStyle(y4.value),
            ref_key: "contextMenuRef",
            ref: C6
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_10.value, (e16) => (openBlock(), createBlock($6, {
                menu: e16,
                disabled: g10(e16),
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
var c3 = {
  pop(n7) {
    e8 && render(null, document.body), e8 = createVNode(st2, {
      ...n7,
      onDestroy() {
        render(null, document.body);
      }
    }), render(e8, document.body);
  }
};

// node_modules/ultra-ui/components/date-picker/use-date.js
var y2 = Symbol("DatePickerDIKey");
function I3(d8, m6) {
  if (d8 === "inject")
    return inject(y2);
  const { props: a4, emit: h7, closeDropdown: D4 } = m6, f11 = {
    date: "yyyy-MM-dd",
    month: "yyyy-MM",
    year: "yyyy"
  }, u5 = computed(() => a4.format ?? f11[a4.type]), c9 = {
    date: ["year", "month", "day"],
    month: ["year", "month"],
    year: ["year"]
  }, x11 = e("date-picker"), o10 = a4.modelValue ? date(a4.modelValue) : void 0, e16 = shallowReactive({
    panel: "day",
    date: o10,
    panelDate: date((o10 == null ? void 0 : o10.timestamp) ?? /* @__PURE__ */ new Date())
  });
  function p3() {
    var n7;
    e16.panelDate = date(((n7 = e16.date) == null ? void 0 : n7.timestamp) ?? /* @__PURE__ */ new Date());
    const t8 = c9[a4.type];
    e16.panel = t8[t8.length - 1];
  }
  watch(
    () => a4.modelValue,
    (t8) => {
      e16.date = t8 ? date(t8) : void 0, p3();
    }
  );
  function r7() {
    const t8 = c9[a4.type], n7 = t8.indexOf(e16.panel);
    n7 === -1 ? e16.panel = t8[t8.length - 1] : n7 < t8.length - 1 && (e16.panel = t8[n7 + 1]);
  }
  watch(
    () => a4.type,
    () => {
      r7();
    },
    { immediate: true }
  );
  function P8() {
    e16.panelDate = e16.panelDate.calc(-1, "years");
  }
  function w11() {
    e16.panelDate = e16.panelDate.calc(-1, "months");
  }
  function M8() {
    e16.panelDate = e16.panelDate.calc(1, "years");
  }
  function k6() {
    e16.panelDate = e16.panelDate.calc(1, "months");
  }
  function N4() {
    e16.panelDate = e16.panelDate.calc(-10, "years");
  }
  function Y3() {
    e16.panelDate = e16.panelDate.calc(10, "years");
  }
  const i3 = {
    cls: x11,
    state: e16,
    pickerProps: a4,
    pickerEmit: h7,
    formatStr: u5,
    closeDropdown: D4,
    showNextPanel: r7,
    handlePreYear: P8,
    handlePreMonth: w11,
    handleNextYear: M8,
    handleNextMonth: k6,
    handleNextTenYears: Y3,
    handlePreTenYears: N4,
    updatePanelDate: p3
  };
  return provide(y2, i3), i3;
}

// node_modules/ultra-ui/venders/day.vue_vue_type_script_setup_true_lang-Bh2N7yCQ.js
var x6 = ["title", "onClick"];
var A5 = defineComponent({
  name: "DayPanel",
  inheritAttrs: false,
  __name: "day",
  setup(E11) {
    const { cls: a4, pickerProps: f11, state: o10, pickerEmit: y4, formatStr: _10, closeDropdown: k6 } = I3("inject"), D4 = computed(() => M3(o10.panelDate.timestamp, f11.disabledDate));
    function b10(r7) {
      if (!o10.date) return false;
      const i3 = "yyyyMMdd  ";
      return o10.date.format(i3) === r7.format(i3);
    }
    function h7(r7) {
      r7.disabled || (y4("update:modelValue", r7.date.format(_10.value)), o10.date = r7.date, k6());
    }
    return (r7, i3) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass(unref(a4).e("week"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(g2), (e16) => (openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass(unref(a4).e("week-day"))
                },
                toDisplayString(e16),
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
            class: normalizeClass(unref(a4).e("days"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(D4.value, (e16) => (openBlock(), createElementBlock("li", {
                title: e16.isToday ? "今天" : "",
                class: normalizeClass([
                  unref(a4).e("day"),
                  unref(a4).em("day", e16.type),
                  unref(e).is("today", e16.isToday === true),
                  unref(e).is("disabled", e16.disabled === true),
                  unref(e).is("selected", b10(e16.date))
                ]),
                key: e16.date.timestamp,
                onClick: (M8) => h7(e16)
              }, [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(unref(a4).e("day-text"))
                  },
                  toDisplayString(e16.date.day),
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
  setup(w11) {
    const {
      cls: a4,
      state: e16,
      pickerProps: m6,
      pickerEmit: p3,
      showNextPanel: d8,
      closeDropdown: u5,
      formatStr: f11
    } = I3("inject"), h7 = computed(() => k4(e16.panelDate.timestamp, m6.disabledDate));
    function _10(n7) {
      e16.panelDate = e16.panelDate.setMonth(n7), d8(), m6.type === "month" && (e16.date = date(e16.panelDate.format("yyyy-MM")), p3("update:modelValue", e16.date.format(f11.value)), u5());
    }
    function D4(n7) {
      return e16.date ? e16.date.month === n7 && e16.date.year === e16.panelDate.year : false;
    }
    return (n7, B7) => (openBlock(), createElementBlock(
      "ul",
      {
        class: normalizeClass(unref(a4).e("months"))
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(h7.value, ({ key: y4, month: o10, disabled: i3 }) => (openBlock(), createElementBlock("li", {
            key: y4,
            class: normalizeClass([
              unref(a4).e("month"),
              unref(e).is("selected", D4(o10)),
              unref(e).is("disabled", i3 === true)
            ]),
            onClick: (N4) => !i3 && _10(o10)
          }, [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(a4).e("month-text"))
              },
              toDisplayString(o10) + "月",
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
  setup(w11) {
    const {
      cls: n7,
      state: e16,
      pickerProps: c9,
      pickerEmit: d8,
      showNextPanel: u5,
      closeDropdown: f11,
      formatStr: y4
    } = I3("inject"), _10 = computed(() => w3(e16.panelDate.timestamp, c9.disabledDate));
    function D4(a4) {
      return e16.date ? e16.date.year === a4 : false;
    }
    function k6(a4) {
      if (e16.panelDate = e16.panelDate.setYear(a4), u5(), c9.type === "year") {
        const i3 = e16.panelDate.format("yyyy");
        e16.date = date(i3), d8("update:modelValue", e16.date.format(y4.value)), f11();
      }
    }
    return (a4, i3) => (openBlock(), createElementBlock(
      "ul",
      {
        class: normalizeClass(unref(n7).e("years"))
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_10.value, ({ year: r7, disabled: m6 }) => (openBlock(), createElementBlock("li", {
            key: r7,
            class: normalizeClass([
              unref(n7).e("year"),
              unref(e).is("selected", D4(r7)),
              unref(e).is("disabled", m6 === true)
            ]),
            onClick: (B7) => !m6 && k6(r7)
          }, [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(n7).e("year-text"))
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

// node_modules/ultra-ui/components/message/helper.js
var c4 = {
  default: info_filled_default,
  info: question_filled_default,
  success: circle_check_filled_default,
  warn: warning_filled_default,
  error: circle_close_filled_default
};
function u3(e16, r7) {
  return r7 ?? c4[e16];
}
var s5 = {
  error: "danger",
  warn: "warning"
};
function a2(e16) {
  return s5[e16] ?? e16;
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
  setup(y4, { emit: C6 }) {
    const i3 = y4, m6 = C6, { size: g10 } = l([i3], {
      size: "default"
    }), t8 = e("message");
    let c9 = 0, u5, l5 = 0;
    function p3() {
      i3.duration !== 0 && (c9 = Date.now(), u5 = setTimeout(() => {
        m6("close");
      }, l5));
    }
    function k6() {
      i3.duration <= 0 || (l5 = i3.duration, p3());
    }
    onMounted(() => {
      k6();
    });
    function v6() {
      clearTimeout(u5), l5 = l5 - (Date.now() - c9);
    }
    function M8() {
      m6("close");
    }
    return (o10, I4) => (openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass([unref(t8).b, unref(t8).m(unref(g10)), unref(t8).m("color-" + unref(a2)(o10.type))]),
        onMouseenter: v6,
        onMouseleave: p3
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(t8).e("icon"))
          },
          [
            createVNode(unref(k), null, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(u3)(o10.type, o10.icon))))
              ]),
              _: 1
              /* STABLE */
            })
          ],
          2
          /* CLASS */
        ),
        o10.html ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(t8).e("content")),
          innerHTML: o10.message
        }, null, 10, F3)) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(unref(t8).e("content"))
          },
          toDisplayString(o10.message),
          3
          /* TEXT, CLASS */
        )),
        o10.closable || o10.duration === 0 ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(unref(t8).e("close")),
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
  setup(k6, { emit: s12 }) {
    const a4 = s12;
    function m6(e16) {
      a4("remove", e16.dataset.id);
    }
    function i3(e16, t8) {
      a4("close", e16), t8 == null || t8();
    }
    return (e16, t8) => (openBlock(), createBlock(TransitionGroup, {
      name: "message",
      appear: "",
      onAfterLeave: m6
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(e16.messages, ({ onClose: c9, ...n7 }, p3) => (openBlock(), createBlock(O3, mergeProps({ ref_for: true }, n7, {
            "data-id": n7.key,
            onClose: (x11) => i3(p3, c9)
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
var o8 = null;
var t5 = shallowReactive([]);
var l3 = 0;
var s6 = /* @__PURE__ */ new Map();
function x7(e16) {
  l3--, s6.has(e16) && (s6.get(e16)(), s6.delete(e16)), l3 === 0 && o8 && (o8.unmount(), document.body.removeChild(o8._container), o8 = null);
}
function y3(e16) {
  t5.splice(e16, 1);
}
function b6() {
  o8 = createApp({
    render: () => h(A6, {
      messages: t5,
      onRemove: x7,
      onClose: y3
    })
  });
  const e16 = document.createElement("ul");
  e16.className = _7.e("container"), n2(e16, { zIndex: o() }), document.body.appendChild(e16), o8.mount(e16);
}
var c5 = (e16) => {
  typeof e16 == "string" && (e16 = {
    message: e16
  });
  const { onClosed: n7, ...r7 } = e16, a4 = String(C4++);
  n7 && s6.set(a4, n7), t5.push({
    ...r7,
    key: a4
  }), l3++, o8 != null && o8._container && n2(o8 == null ? void 0 : o8._container, { zIndex: o() }), t5.length && !o8 && b6();
};
c5.closeAll = function() {
  t5.splice(0).forEach((e16) => {
    var n7;
    return (n7 = e16.onClose) == null ? void 0 : n7.call(e16);
  });
};
g3.forEach((e16) => {
  c5[e16] = (n7, r7) => {
    c5({
      message: n7,
      type: e16,
      ...r7
    });
  };
});
var k5 = c5;

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
    const r7 = B7, { size: C6 } = l([r7], {
      size: "default"
    }), o10 = e("message-confirm"), i3 = ref(false);
    onMounted(() => {
      i3.value = true;
    });
    const c9 = (t8) => {
      i3.value = false, r7.onClose && r7.onClose(t8);
    };
    return (t8, n7) => (openBlock(), createBlock(Transition, {
      name: "message-confirm-fade",
      onAfterLeave: n7[2] || (n7[2] = (u5) => t8.$emit("destroy")),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(o10).b, unref(o10).m(unref(C6))])
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(o10).e("mask")),
                style: normalizeStyle({ zIndex: `${unref(o)()}` })
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(o10).e("box"))
                  },
                  [
                    t8.title ? (openBlock(), createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: normalizeClass(unref(o10).e("header"))
                      },
                      toDisplayString(t8.title),
                      3
                      /* TEXT, CLASS */
                    )) : createCommentVNode("v-if", true),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(o10).e("content"))
                      },
                      toDisplayString(t8.message),
                      3
                      /* TEXT, CLASS */
                    ),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(o10).e("footer"))
                      },
                      [
                        t8.cancelButtonText ? (openBlock(), createBlock(unref(M), {
                          key: 0,
                          plain: "",
                          onClick: n7[0] || (n7[0] = (u5) => c9("cancel")),
                          class: normalizeClass(unref(o10).em("footer", "btn"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(t8.cancelButtonText),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["class"])) : createCommentVNode("v-if", true),
                        createVNode(unref(M), {
                          type: t8.confirmButtonType,
                          onClick: n7[1] || (n7[1] = (u5) => c9("confirm")),
                          class: normalizeClass(unref(o10).em("footer", "btn"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(t8.confirmButtonText),
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
          [vShow, i3.value]
        ])
      ]),
      _: 1
      /* STABLE */
    }));
  }
});

// node_modules/ultra-ui/venders/message-confirm-B_VcRvtb.js
var c6 = ["primary", "success", "info", "warning", "danger"];
var t6 = (o10) => {
  const r7 = document.createElement("div"), e16 = createVNode(q4, {
    ...o10,
    zIndex: o()
  });
  e16.props.onDestroy = () => render(null, r7), render(e16, r7), document.body.appendChild(r7.firstElementChild);
};
c6.forEach((o10) => {
  t6[o10] = (r7, e16) => t6({
    message: r7,
    confirmButtonType: o10,
    onClose: e16
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
    const t8 = z5, { type: c9, size: g10 } = l([t8], {
      type: "primary",
      size: "default"
    }), x11 = computed(() => t8.icon || {
      primary: info_filled_default,
      info: question_filled_default,
      success: circle_check_filled_default,
      warning: warning_filled_default,
      danger: circle_close_filled_default
    }[c9.value]), i3 = e("notification"), f11 = ref(false);
    onMounted(() => {
      f11.value = true, u5();
    });
    const m6 = () => {
      f11.value = false;
    }, h7 = computed(() => t8.offset > 0 ? {
      [`${t8.position.split("-")[0]}`]: `${t8.offset}px`,
      zIndex: t8.zIndex,
      transform: t8.position.split("-")[0] === "bottom" ? `translateY(-${t8.offset}px)` : `translateY(${t8.offset}px)`,
      transition: "opacity 0.3s, transform 0.4s, top 0.4s"
    } : {
      [`${t8.position.split("-")[0]}`]: `${t8.offset}px`,
      zIndex: t8.zIndex
    });
    let d8 = 0;
    const u5 = () => {
      t8.duration && (d8 = setTimeout(() => {
        m6();
      }, t8.duration));
    }, I4 = () => clearTimeout(d8), w11 = (o10) => {
      t8.onClick && t8.onClick(o10), m6();
    };
    return T6({ startTimer: u5, clearTimer: I4 }), (o10, v6) => (openBlock(), createBlock(Transition, {
      name: `notification-fade-${o10.position.split("-")[0]}`,
      onBeforeLeave: o10.onClose,
      onAfterLeave: v6[0] || (v6[0] = (J7) => o10.$emit("destroy")),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(i3).b, unref(i3).m(unref(g10)), unref(i3).e(unref(c9)), unref(i3).e(o10.position)]),
            style: normalizeStyle(h7.value)
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(i3).e("icon"))
              },
              [
                createVNode(unref(k), null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(x11.value)))
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
                class: normalizeClass(unref(i3).e("content"))
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(i3).em("content", "title"))
                  },
                  toDisplayString(o10.title),
                  3
                  /* TEXT, CLASS */
                ),
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(i3).em("content", "message"))
                  },
                  toDisplayString(o10.message),
                  3
                  /* TEXT, CLASS */
                ),
                o10.buttonText ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(unref(i3).em("content", "button"))
                  },
                  [
                    createVNode(unref(M), {
                      type: unref(c9),
                      plain: "",
                      onClick: w11
                    }, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString(o10.buttonText),
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
            o10.closable ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(i3).e("close")),
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
var e9 = reactive({
  "bottom-right": [],
  "bottom-left": [],
  "top-right": [],
  "top-left": []
});
var c7 = (m6) => e9[m6].length;
var $8 = 1;
var b7 = (m6, t8, n7) => {
  const i3 = e9[t8].findIndex(({ vm: o10 }) => m6 === o10.component.props.id);
  if (i3 > -1) {
    const { vm: o10 } = e9[t8][i3];
    n7 == null || n7(o10);
    let f11 = Number(e9[t8][i3].vm.component.props.offset);
    e9[t8].splice(i3, 1);
    let s12 = 0;
    for (let r7 = c7(t8); r7 > 0; r7--)
      r7 < i3 + 1 && (s12 = Number(e9[t8][r7 - 1].vm.component.props.offset), e9[t8][r7 - 1].vm.component.props.offset = f11, f11 = s12);
  }
  if (!e9[t8].length) {
    const o10 = document.getElementById(`notification-${t8}-id`);
    o10.style.removeProperty("height"), o10.style.removeProperty("overflow");
  }
};
var E7 = (m6) => {
  const t8 = m6.position || "bottom-right";
  if (document.getElementById(`notification-${t8}-id`))
    return document.getElementById(`notification-${t8}-id`);
  {
    const n7 = m6.offset || 20, i3 = document.createElement("div");
    return i3.id = `notification-${t8}-id`, Object.assign(i3.style, {
      position: "fixed",
      textAlign: "center"
    }, {
      "top-right": { top: `${n7}px`, right: `${n7}px` },
      "top-left": { top: `${n7}px`, left: `${n7}px` },
      "bottom-left": { bottom: `${n7}px`, left: `${n7}px` },
      "bottom-right": { bottom: `${n7}px`, right: `${n7}px` }
    }[t8]), i3.addEventListener("mouseenter", (o10) => {
      var f11, s12, r7;
      if (c7(t8)) {
        let p3 = 0, l5 = 0, h7 = 0, a4 = 0;
        for (let d8 = c7(t8); d8 > 0; d8--)
          e9[t8][d8 - 1].vm.component.exposed.clearTimer(), d8 === c7(t8) && (h7 = ((f11 = e9[t8][d8 - 1].vm.el) == null ? void 0 : f11.offsetWidth) + 8), e9[t8][d8 - 1].vm.component.props.offset = l5, l5 += ((s12 = e9[t8][d8 - 1].vm.el) == null ? void 0 : s12.offsetHeight) / 2 + 5, p3 < 3 && (a4 += ((r7 = e9[t8][d8 - 1].vm.el) == null ? void 0 : r7.offsetHeight) + 10), p3++;
        Object.assign(o10.target.style, {
          width: `${h7}px`,
          height: `${a4}px`,
          overflow: "hidden",
          transition: "height 0.4s"
        });
      }
    }), i3.addEventListener("mouseleave", (o10) => {
      var f11;
      if (c7(t8)) {
        let s12 = 0, r7 = 0, p3 = 0;
        for (let l5 = c7(t8); l5 > 0; l5--)
          e9[t8][l5 - 1].vm.component.exposed.startTimer(), l5 === c7(t8) && (p3 = ((f11 = e9[t8][l5 - 1].vm.el) == null ? void 0 : f11.offsetHeight) + 80), e9[t8][l5 - 1].vm.component.props.offset = s12, r7 < 2 && (s12 += 10), r7++;
        o10.target.style.transition = "height 0.45s", o10.target.style.height = `${p3}px`;
      } else
        o10.target.style.removeProperty("height"), o10.target.style.removeProperty("overflow");
    }), document.body.appendChild(i3), i3;
  }
};
var _8 = (m6) => {
  const t8 = m6.position || "bottom-right", n7 = document.createElement("div"), i3 = `notification_${$8++}`;
  if (c7(t8)) {
    let s12 = 0, r7 = 0;
    for (let p3 = c7(t8); p3 > 0; p3--)
      r7 < 2 && (s12 += 10), e9[t8][p3 - 1].vm.component.props.offset = s12, r7++;
  }
  const o10 = createVNode(ie3, {
    ...m6,
    offset: 0,
    id: i3,
    zIndex: o(),
    onClose: () => {
      b7(i3, t8, m6.onClose);
    }
  });
  o10.props.onDestroy = () => render(null, n7), render(o10, n7), e9[t8].push({ vm: o10 });
  const f11 = E7(m6);
  f11 == null || f11.appendChild(n7.firstElementChild);
};

// node_modules/ultra-ui/venders/quill-CgTbB7xx.js
var ra = Object.defineProperty;
var sa = (n7, t8, e16) => t8 in n7 ? ra(n7, t8, { enumerable: true, configurable: true, writable: true, value: e16 }) : n7[t8] = e16;
var x8 = (n7, t8, e16) => sa(n7, typeof t8 != "symbol" ? t8 + "" : t8, e16);
var Fl = typeof global == "object" && global && global.Object === Object && global;
var ia = typeof self == "object" && self && self.Object === Object && self;
var kt = Fl || ia || Function("return this")();
var te4 = kt.Symbol;
var Hl = Object.prototype;
var la = Hl.hasOwnProperty;
var oa = Hl.toString;
var dn = te4 ? te4.toStringTag : void 0;
function aa(n7) {
  var t8 = la.call(n7, dn), e16 = n7[dn];
  try {
    n7[dn] = void 0;
    var r7 = true;
  } catch {
  }
  var s12 = oa.call(n7);
  return r7 && (t8 ? n7[dn] = e16 : delete n7[dn]), s12;
}
var ca = Object.prototype;
var ua = ca.toString;
function ha(n7) {
  return ua.call(n7);
}
var fa = "[object Null]";
var da = "[object Undefined]";
var Ui = te4 ? te4.toStringTag : void 0;
function Ke(n7) {
  return n7 == null ? n7 === void 0 ? da : fa : Ui && Ui in Object(n7) ? aa(n7) : ha(n7);
}
function Ut2(n7) {
  return n7 != null && typeof n7 == "object";
}
var fe3 = Array.isArray;
function ee2(n7) {
  var t8 = typeof n7;
  return n7 != null && (t8 == "object" || t8 == "function");
}
function zl(n7) {
  return n7;
}
var ga = "[object AsyncFunction]";
var pa = "[object Function]";
var ma = "[object GeneratorFunction]";
var ba = "[object Proxy]";
function gi(n7) {
  if (!ee2(n7))
    return false;
  var t8 = Ke(n7);
  return t8 == pa || t8 == ma || t8 == ga || t8 == ba;
}
var Os = kt["__core-js_shared__"];
var Fi = function() {
  var n7 = /[^.]+$/.exec(Os && Os.keys && Os.keys.IE_PROTO || "");
  return n7 ? "Symbol(src)_1." + n7 : "";
}();
function ya(n7) {
  return !!Fi && Fi in n7;
}
var va = Function.prototype;
var Ea = va.toString;
function pe2(n7) {
  if (n7 != null) {
    try {
      return Ea.call(n7);
    } catch {
    }
    try {
      return n7 + "";
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
function _a(n7) {
  if (!ee2(n7) || ya(n7))
    return false;
  var t8 = gi(n7) ? Sa : Na;
  return t8.test(pe2(n7));
}
function Oa(n7, t8) {
  return n7 == null ? void 0 : n7[t8];
}
function me2(n7, t8) {
  var e16 = Oa(n7, t8);
  return _a(e16) ? e16 : void 0;
}
var Fs = me2(kt, "WeakMap");
var Hi = Object.create;
var qa = /* @__PURE__ */ function() {
  function n7() {
  }
  return function(t8) {
    if (!ee2(t8))
      return {};
    if (Hi)
      return Hi(t8);
    n7.prototype = t8;
    var e16 = new n7();
    return n7.prototype = void 0, e16;
  };
}();
function Ca(n7, t8, e16) {
  switch (e16.length) {
    case 0:
      return n7.call(t8);
    case 1:
      return n7.call(t8, e16[0]);
    case 2:
      return n7.call(t8, e16[0], e16[1]);
    case 3:
      return n7.call(t8, e16[0], e16[1], e16[2]);
  }
  return n7.apply(t8, e16);
}
function Gl(n7, t8) {
  var e16 = -1, r7 = n7.length;
  for (t8 || (t8 = Array(r7)); ++e16 < r7; )
    t8[e16] = n7[e16];
  return t8;
}
var Ia = 800;
var Ra = 16;
var ka = Date.now;
function Ba(n7) {
  var t8 = 0, e16 = 0;
  return function() {
    var r7 = ka(), s12 = Ra - (r7 - e16);
    if (e16 = r7, s12 > 0) {
      if (++t8 >= Ia)
        return arguments[0];
    } else
      t8 = 0;
    return n7.apply(void 0, arguments);
  };
}
function Ma(n7) {
  return function() {
    return n7;
  };
}
var yr = function() {
  try {
    var n7 = me2(Object, "defineProperty");
    return n7({}, "", {}), n7;
  } catch {
  }
}();
var $a = yr ? function(n7, t8) {
  return yr(n7, "toString", {
    configurable: true,
    enumerable: false,
    value: Ma(t8),
    writable: true
  });
} : zl;
var Da = Ba($a);
function ja(n7, t8) {
  for (var e16 = -1, r7 = n7 == null ? 0 : n7.length; ++e16 < r7 && t8(n7[e16], e16, n7) !== false; )
    ;
  return n7;
}
var Pa = 9007199254740991;
var Ua = /^(?:0|[1-9]\d*)$/;
function Kl(n7, t8) {
  var e16 = typeof n7;
  return t8 = t8 ?? Pa, !!t8 && (e16 == "number" || e16 != "symbol" && Ua.test(n7)) && n7 > -1 && n7 % 1 == 0 && n7 < t8;
}
function pi(n7, t8, e16) {
  t8 == "__proto__" && yr ? yr(n7, t8, {
    configurable: true,
    enumerable: true,
    value: e16,
    writable: true
  }) : n7[t8] = e16;
}
function _n(n7, t8) {
  return n7 === t8 || n7 !== n7 && t8 !== t8;
}
var Fa = Object.prototype;
var Ha = Fa.hasOwnProperty;
function Vl(n7, t8, e16) {
  var r7 = n7[t8];
  (!(Ha.call(n7, t8) && _n(r7, e16)) || e16 === void 0 && !(t8 in n7)) && pi(n7, t8, e16);
}
function On(n7, t8, e16, r7) {
  var s12 = !e16;
  e16 || (e16 = {});
  for (var i3 = -1, l5 = t8.length; ++i3 < l5; ) {
    var a4 = t8[i3], c9 = void 0;
    c9 === void 0 && (c9 = n7[a4]), s12 ? pi(e16, a4, c9) : Vl(e16, a4, c9);
  }
  return e16;
}
var zi = Math.max;
function za(n7, t8, e16) {
  return t8 = zi(t8 === void 0 ? n7.length - 1 : t8, 0), function() {
    for (var r7 = arguments, s12 = -1, i3 = zi(r7.length - t8, 0), l5 = Array(i3); ++s12 < i3; )
      l5[s12] = r7[t8 + s12];
    s12 = -1;
    for (var a4 = Array(t8 + 1); ++s12 < t8; )
      a4[s12] = r7[s12];
    return a4[t8] = e16(l5), Ca(n7, this, a4);
  };
}
function Ga(n7, t8) {
  return Da(za(n7, t8, zl), n7 + "");
}
var Ka = 9007199254740991;
function Wl(n7) {
  return typeof n7 == "number" && n7 > -1 && n7 % 1 == 0 && n7 <= Ka;
}
function Tr(n7) {
  return n7 != null && Wl(n7.length) && !gi(n7);
}
function Va(n7, t8, e16) {
  if (!ee2(e16))
    return false;
  var r7 = typeof t8;
  return (r7 == "number" ? Tr(e16) && Kl(t8, e16.length) : r7 == "string" && t8 in e16) ? _n(e16[t8], n7) : false;
}
function Wa(n7) {
  return Ga(function(t8, e16) {
    var r7 = -1, s12 = e16.length, i3 = s12 > 1 ? e16[s12 - 1] : void 0, l5 = s12 > 2 ? e16[2] : void 0;
    for (i3 = n7.length > 3 && typeof i3 == "function" ? (s12--, i3) : void 0, l5 && Va(e16[0], e16[1], l5) && (i3 = s12 < 3 ? void 0 : i3, s12 = 1), t8 = Object(t8); ++r7 < s12; ) {
      var a4 = e16[r7];
      a4 && n7(t8, a4, r7, i3);
    }
    return t8;
  });
}
var Za = Object.prototype;
function mi(n7) {
  var t8 = n7 && n7.constructor, e16 = typeof t8 == "function" && t8.prototype || Za;
  return n7 === e16;
}
function Xa(n7, t8) {
  for (var e16 = -1, r7 = Array(n7); ++e16 < n7; )
    r7[e16] = t8(e16);
  return r7;
}
var Ya = "[object Arguments]";
function Gi(n7) {
  return Ut2(n7) && Ke(n7) == Ya;
}
var Zl = Object.prototype;
var Qa = Zl.hasOwnProperty;
var Ja = Zl.propertyIsEnumerable;
var Hs = Gi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Gi : function(n7) {
  return Ut2(n7) && Qa.call(n7, "callee") && !Ja.call(n7, "callee");
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
function Sc(n7) {
  return Ut2(n7) && Wl(n7.length) && !!F4[Ke(n7)];
}
function bi(n7) {
  return function(t8) {
    return n7(t8);
  };
}
var Yl = typeof exports == "object" && exports && !exports.nodeType && exports;
var mn = Yl && typeof module == "object" && module && !module.nodeType && module;
var _c = mn && mn.exports === Yl;
var qs = _c && Fl.process;
var Ue = function() {
  try {
    var n7 = mn && mn.require && mn.require("util").types;
    return n7 || qs && qs.binding && qs.binding("util");
  } catch {
  }
}();
var Wi = Ue && Ue.isTypedArray;
var yi = Wi ? bi(Wi) : Sc;
var Oc = Object.prototype;
var qc = Oc.hasOwnProperty;
function Ql(n7, t8) {
  var e16 = fe3(n7), r7 = !e16 && Hs(n7), s12 = !e16 && !r7 && En(n7), i3 = !e16 && !r7 && !s12 && yi(n7), l5 = e16 || r7 || s12 || i3, a4 = l5 ? Xa(n7.length, String) : [], c9 = a4.length;
  for (var h7 in n7)
    (t8 || qc.call(n7, h7)) && !(l5 && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h7 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s12 && (h7 == "offset" || h7 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i3 && (h7 == "buffer" || h7 == "byteLength" || h7 == "byteOffset") || // Skip index properties.
    Kl(h7, c9))) && a4.push(h7);
  return a4;
}
function Jl(n7, t8) {
  return function(e16) {
    return n7(t8(e16));
  };
}
var Cc = Jl(Object.keys, Object);
var Ic = Object.prototype;
var Rc = Ic.hasOwnProperty;
function kc(n7) {
  if (!mi(n7))
    return Cc(n7);
  var t8 = [];
  for (var e16 in Object(n7))
    Rc.call(n7, e16) && e16 != "constructor" && t8.push(e16);
  return t8;
}
function vi(n7) {
  return Tr(n7) ? Ql(n7) : kc(n7);
}
function Bc(n7) {
  var t8 = [];
  if (n7 != null)
    for (var e16 in Object(n7))
      t8.push(e16);
  return t8;
}
var Mc = Object.prototype;
var $c = Mc.hasOwnProperty;
function Dc(n7) {
  if (!ee2(n7))
    return Bc(n7);
  var t8 = mi(n7), e16 = [];
  for (var r7 in n7)
    r7 == "constructor" && (t8 || !$c.call(n7, r7)) || e16.push(r7);
  return e16;
}
function qn(n7) {
  return Tr(n7) ? Ql(n7, true) : Dc(n7);
}
var An = me2(Object, "create");
function jc() {
  this.__data__ = An ? An(null) : {}, this.size = 0;
}
function Pc(n7) {
  var t8 = this.has(n7) && delete this.__data__[n7];
  return this.size -= t8 ? 1 : 0, t8;
}
var Uc = "__lodash_hash_undefined__";
var Fc = Object.prototype;
var Hc = Fc.hasOwnProperty;
function zc(n7) {
  var t8 = this.__data__;
  if (An) {
    var e16 = t8[n7];
    return e16 === Uc ? void 0 : e16;
  }
  return Hc.call(t8, n7) ? t8[n7] : void 0;
}
var Gc = Object.prototype;
var Kc = Gc.hasOwnProperty;
function Vc(n7) {
  var t8 = this.__data__;
  return An ? t8[n7] !== void 0 : Kc.call(t8, n7);
}
var Wc = "__lodash_hash_undefined__";
function Zc(n7, t8) {
  var e16 = this.__data__;
  return this.size += this.has(n7) ? 0 : 1, e16[n7] = An && t8 === void 0 ? Wc : t8, this;
}
function de5(n7) {
  var t8 = -1, e16 = n7 == null ? 0 : n7.length;
  for (this.clear(); ++t8 < e16; ) {
    var r7 = n7[t8];
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
function xr(n7, t8) {
  for (var e16 = n7.length; e16--; )
    if (_n(n7[e16][0], t8))
      return e16;
  return -1;
}
var Yc = Array.prototype;
var Qc = Yc.splice;
function Jc(n7) {
  var t8 = this.__data__, e16 = xr(t8, n7);
  if (e16 < 0)
    return false;
  var r7 = t8.length - 1;
  return e16 == r7 ? t8.pop() : Qc.call(t8, e16, 1), --this.size, true;
}
function tu(n7) {
  var t8 = this.__data__, e16 = xr(t8, n7);
  return e16 < 0 ? void 0 : t8[e16][1];
}
function eu(n7) {
  return xr(this.__data__, n7) > -1;
}
function nu(n7, t8) {
  var e16 = this.__data__, r7 = xr(e16, n7);
  return r7 < 0 ? (++this.size, e16.push([n7, t8])) : e16[r7][1] = t8, this;
}
function zt2(n7) {
  var t8 = -1, e16 = n7 == null ? 0 : n7.length;
  for (this.clear(); ++t8 < e16; ) {
    var r7 = n7[t8];
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
function su(n7) {
  var t8 = typeof n7;
  return t8 == "string" || t8 == "number" || t8 == "symbol" || t8 == "boolean" ? n7 !== "__proto__" : n7 === null;
}
function Lr(n7, t8) {
  var e16 = n7.__data__;
  return su(t8) ? e16[typeof t8 == "string" ? "string" : "hash"] : e16.map;
}
function iu(n7) {
  var t8 = Lr(this, n7).delete(n7);
  return this.size -= t8 ? 1 : 0, t8;
}
function lu(n7) {
  return Lr(this, n7).get(n7);
}
function ou(n7) {
  return Lr(this, n7).has(n7);
}
function au(n7, t8) {
  var e16 = Lr(this, n7), r7 = e16.size;
  return e16.set(n7, t8), this.size += e16.size == r7 ? 0 : 1, this;
}
function be(n7) {
  var t8 = -1, e16 = n7 == null ? 0 : n7.length;
  for (this.clear(); ++t8 < e16; ) {
    var r7 = n7[t8];
    this.set(r7[0], r7[1]);
  }
}
be.prototype.clear = ru;
be.prototype.delete = iu;
be.prototype.get = lu;
be.prototype.has = ou;
be.prototype.set = au;
function to(n7, t8) {
  for (var e16 = -1, r7 = t8.length, s12 = n7.length; ++e16 < r7; )
    n7[s12 + e16] = t8[e16];
  return n7;
}
var Ei = Jl(Object.getPrototypeOf, Object);
var cu = "[object Object]";
var uu = Function.prototype;
var hu = Object.prototype;
var eo = uu.toString;
var fu = hu.hasOwnProperty;
var du = eo.call(Object);
function gu(n7) {
  if (!Ut2(n7) || Ke(n7) != cu)
    return false;
  var t8 = Ei(n7);
  if (t8 === null)
    return true;
  var e16 = fu.call(t8, "constructor") && t8.constructor;
  return typeof e16 == "function" && e16 instanceof e16 && eo.call(e16) == du;
}
function pu() {
  this.__data__ = new zt2(), this.size = 0;
}
function mu(n7) {
  var t8 = this.__data__, e16 = t8.delete(n7);
  return this.size = t8.size, e16;
}
function bu(n7) {
  return this.__data__.get(n7);
}
function yu(n7) {
  return this.__data__.has(n7);
}
var vu = 200;
function Eu(n7, t8) {
  var e16 = this.__data__;
  if (e16 instanceof zt2) {
    var r7 = e16.__data__;
    if (!Nn || r7.length < vu - 1)
      return r7.push([n7, t8]), this.size = ++e16.size, this;
    e16 = this.__data__ = new be(r7);
  }
  return e16.set(n7, t8), this.size = e16.size, this;
}
function qt2(n7) {
  var t8 = this.__data__ = new zt2(n7);
  this.size = t8.size;
}
qt2.prototype.clear = pu;
qt2.prototype.delete = mu;
qt2.prototype.get = bu;
qt2.prototype.has = yu;
qt2.prototype.set = Eu;
function Au(n7, t8) {
  return n7 && On(t8, vi(t8), n7);
}
function Nu(n7, t8) {
  return n7 && On(t8, qn(t8), n7);
}
var no = typeof exports == "object" && exports && !exports.nodeType && exports;
var Zi = no && typeof module == "object" && module && !module.nodeType && module;
var wu = Zi && Zi.exports === no;
var Xi = wu ? kt.Buffer : void 0;
var Yi = Xi ? Xi.allocUnsafe : void 0;
function ro(n7, t8) {
  if (t8)
    return n7.slice();
  var e16 = n7.length, r7 = Yi ? Yi(e16) : new n7.constructor(e16);
  return n7.copy(r7), r7;
}
function Tu(n7, t8) {
  for (var e16 = -1, r7 = n7 == null ? 0 : n7.length, s12 = 0, i3 = []; ++e16 < r7; ) {
    var l5 = n7[e16];
    t8(l5, e16, n7) && (i3[s12++] = l5);
  }
  return i3;
}
function so() {
  return [];
}
var xu = Object.prototype;
var Lu = xu.propertyIsEnumerable;
var Qi = Object.getOwnPropertySymbols;
var Ai = Qi ? function(n7) {
  return n7 == null ? [] : (n7 = Object(n7), Tu(Qi(n7), function(t8) {
    return Lu.call(n7, t8);
  }));
} : so;
function Su(n7, t8) {
  return On(n7, Ai(n7), t8);
}
var _u = Object.getOwnPropertySymbols;
var io = _u ? function(n7) {
  for (var t8 = []; n7; )
    to(t8, Ai(n7)), n7 = Ei(n7);
  return t8;
} : so;
function Ou(n7, t8) {
  return On(n7, io(n7), t8);
}
function lo(n7, t8, e16) {
  var r7 = t8(n7);
  return fe3(n7) ? r7 : to(r7, e16(n7));
}
function zs(n7) {
  return lo(n7, vi, Ai);
}
function qu(n7) {
  return lo(n7, qn, io);
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
(Gs && yt2(new Gs(new ArrayBuffer(1))) != rl || Nn && yt2(new Nn()) != Ji || Ks && yt2(Ks.resolve()) != tl || Vs && yt2(new Vs()) != el || Fs && yt2(new Fs()) != nl) && (yt2 = function(n7) {
  var t8 = Ke(n7), e16 = t8 == Cu ? n7.constructor : void 0, r7 = e16 ? pe2(e16) : "";
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
  return t8;
});
var $u = Object.prototype;
var Du = $u.hasOwnProperty;
function ju(n7) {
  var t8 = n7.length, e16 = new n7.constructor(t8);
  return t8 && typeof n7[0] == "string" && Du.call(n7, "index") && (e16.index = n7.index, e16.input = n7.input), e16;
}
var vr = kt.Uint8Array;
function Ni(n7) {
  var t8 = new n7.constructor(n7.byteLength);
  return new vr(t8).set(new vr(n7)), t8;
}
function Pu(n7, t8) {
  var e16 = t8 ? Ni(n7.buffer) : n7.buffer;
  return new n7.constructor(e16, n7.byteOffset, n7.byteLength);
}
var Uu = /\w*$/;
function Fu(n7) {
  var t8 = new n7.constructor(n7.source, Uu.exec(n7));
  return t8.lastIndex = n7.lastIndex, t8;
}
var sl = te4 ? te4.prototype : void 0;
var il = sl ? sl.valueOf : void 0;
function Hu(n7) {
  return il ? Object(il.call(n7)) : {};
}
function oo(n7, t8) {
  var e16 = t8 ? Ni(n7.buffer) : n7.buffer;
  return new n7.constructor(e16, n7.byteOffset, n7.length);
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
function ch(n7, t8, e16) {
  var r7 = n7.constructor;
  switch (t8) {
    case Qu:
      return Ni(n7);
    case zu:
    case Gu:
      return new r7(+n7);
    case Ju:
      return Pu(n7, e16);
    case th:
    case eh:
    case nh:
    case rh:
    case sh:
    case ih:
    case lh:
    case oh:
    case ah:
      return oo(n7, e16);
    case Ku:
      return new r7();
    case Vu:
    case Xu:
      return new r7(n7);
    case Wu:
      return Fu(n7);
    case Zu:
      return new r7();
    case Yu:
      return Hu(n7);
  }
}
function ao(n7) {
  return typeof n7.constructor == "function" && !mi(n7) ? qa(Ei(n7)) : {};
}
var uh = "[object Map]";
function hh(n7) {
  return Ut2(n7) && yt2(n7) == uh;
}
var ll = Ue && Ue.isMap;
var fh = ll ? bi(ll) : hh;
var dh = "[object Set]";
function gh(n7) {
  return Ut2(n7) && yt2(n7) == dh;
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
function pr(n7, t8, e16, r7, s12, i3) {
  var l5, a4 = t8 & mh, c9 = t8 & bh, h7 = t8 & yh;
  if (l5 !== void 0)
    return l5;
  if (!ee2(n7))
    return n7;
  var d8 = fe3(n7);
  if (d8) {
    if (l5 = ju(n7), !a4)
      return Gl(n7, l5);
  } else {
    var m6 = yt2(n7), g10 = m6 == uo || m6 == wh;
    if (En(n7))
      return ro(n7, a4);
    if (m6 == ho || m6 == co || g10 && !s12) {
      if (l5 = c9 || g10 ? {} : ao(n7), !a4)
        return c9 ? Ou(n7, Nu(l5, n7)) : Su(n7, Au(l5, n7));
    } else {
      if (!P2[m6])
        return s12 ? n7 : {};
      l5 = ch(n7, m6, a4);
    }
  }
  i3 || (i3 = new qt2());
  var p3 = i3.get(n7);
  if (p3)
    return p3;
  i3.set(n7, l5), ph(n7) ? n7.forEach(function(y4) {
    l5.add(pr(y4, t8, e16, y4, n7, i3));
  }) : fh(n7) && n7.forEach(function(y4, E11) {
    l5.set(E11, pr(y4, t8, e16, E11, n7, i3));
  });
  var b10 = h7 ? c9 ? qu : zs : c9 ? qn : vi, v6 = d8 ? void 0 : b10(n7);
  return ja(v6 || n7, function(y4, E11) {
    v6 && (E11 = y4, y4 = n7[E11]), Vl(l5, E11, pr(y4, t8, e16, E11, n7, i3));
  }), l5;
}
var Fh = 1;
var Hh = 4;
function De3(n7) {
  return pr(n7, Fh | Hh);
}
var zh = "__lodash_hash_undefined__";
function Gh(n7) {
  return this.__data__.set(n7, zh), this;
}
function Kh(n7) {
  return this.__data__.has(n7);
}
function Er(n7) {
  var t8 = -1, e16 = n7 == null ? 0 : n7.length;
  for (this.__data__ = new be(); ++t8 < e16; )
    this.add(n7[t8]);
}
Er.prototype.add = Er.prototype.push = Gh;
Er.prototype.has = Kh;
function Vh(n7, t8) {
  for (var e16 = -1, r7 = n7 == null ? 0 : n7.length; ++e16 < r7; )
    if (t8(n7[e16], e16, n7))
      return true;
  return false;
}
function Wh(n7, t8) {
  return n7.has(t8);
}
var Zh = 1;
var Xh = 2;
function fo(n7, t8, e16, r7, s12, i3) {
  var l5 = e16 & Zh, a4 = n7.length, c9 = t8.length;
  if (a4 != c9 && !(l5 && c9 > a4))
    return false;
  var h7 = i3.get(n7), d8 = i3.get(t8);
  if (h7 && d8)
    return h7 == t8 && d8 == n7;
  var m6 = -1, g10 = true, p3 = e16 & Xh ? new Er() : void 0;
  for (i3.set(n7, t8), i3.set(t8, n7); ++m6 < a4; ) {
    var b10 = n7[m6], v6 = t8[m6];
    if (r7)
      var y4 = l5 ? r7(v6, b10, m6, t8, n7, i3) : r7(b10, v6, m6, n7, t8, i3);
    if (y4 !== void 0) {
      if (y4)
        continue;
      g10 = false;
      break;
    }
    if (p3) {
      if (!Vh(t8, function(E11, w11) {
        if (!Wh(p3, w11) && (b10 === E11 || s12(b10, E11, e16, r7, i3)))
          return p3.push(w11);
      })) {
        g10 = false;
        break;
      }
    } else if (!(b10 === v6 || s12(b10, v6, e16, r7, i3))) {
      g10 = false;
      break;
    }
  }
  return i3.delete(n7), i3.delete(t8), g10;
}
function Yh(n7) {
  var t8 = -1, e16 = Array(n7.size);
  return n7.forEach(function(r7, s12) {
    e16[++t8] = [s12, r7];
  }), e16;
}
function Qh(n7) {
  var t8 = -1, e16 = Array(n7.size);
  return n7.forEach(function(r7) {
    e16[++t8] = r7;
  }), e16;
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
var al = te4 ? te4.prototype : void 0;
var Cs = al ? al.valueOf : void 0;
function df(n7, t8, e16, r7, s12, i3, l5) {
  switch (e16) {
    case ff:
      if (n7.byteLength != t8.byteLength || n7.byteOffset != t8.byteOffset)
        return false;
      n7 = n7.buffer, t8 = t8.buffer;
    case hf:
      return !(n7.byteLength != t8.byteLength || !i3(new vr(n7), new vr(t8)));
    case ef:
    case nf:
    case lf:
      return _n(+n7, +t8);
    case rf:
      return n7.name == t8.name && n7.message == t8.message;
    case of:
    case cf:
      return n7 == t8 + "";
    case sf:
      var a4 = Yh;
    case af:
      var c9 = r7 & Jh;
      if (a4 || (a4 = Qh), n7.size != t8.size && !c9)
        return false;
      var h7 = l5.get(n7);
      if (h7)
        return h7 == t8;
      r7 |= tf, l5.set(n7, t8);
      var d8 = fo(a4(n7), a4(t8), r7, s12, i3, l5);
      return l5.delete(n7), d8;
    case uf:
      if (Cs)
        return Cs.call(n7) == Cs.call(t8);
  }
  return false;
}
var gf = 1;
var pf = Object.prototype;
var mf = pf.hasOwnProperty;
function bf(n7, t8, e16, r7, s12, i3) {
  var l5 = e16 & gf, a4 = zs(n7), c9 = a4.length, h7 = zs(t8), d8 = h7.length;
  if (c9 != d8 && !l5)
    return false;
  for (var m6 = c9; m6--; ) {
    var g10 = a4[m6];
    if (!(l5 ? g10 in t8 : mf.call(t8, g10)))
      return false;
  }
  var p3 = i3.get(n7), b10 = i3.get(t8);
  if (p3 && b10)
    return p3 == t8 && b10 == n7;
  var v6 = true;
  i3.set(n7, t8), i3.set(t8, n7);
  for (var y4 = l5; ++m6 < c9; ) {
    g10 = a4[m6];
    var E11 = n7[g10], w11 = t8[g10];
    if (r7)
      var T6 = l5 ? r7(w11, E11, g10, t8, n7, i3) : r7(E11, w11, g10, n7, t8, i3);
    if (!(T6 === void 0 ? E11 === w11 || s12(E11, w11, e16, r7, i3) : T6)) {
      v6 = false;
      break;
    }
    y4 || (y4 = g10 == "constructor");
  }
  if (v6 && !y4) {
    var _10 = n7.constructor, L5 = t8.constructor;
    _10 != L5 && "constructor" in n7 && "constructor" in t8 && !(typeof _10 == "function" && _10 instanceof _10 && typeof L5 == "function" && L5 instanceof L5) && (v6 = false);
  }
  return i3.delete(n7), i3.delete(t8), v6;
}
var yf = 1;
var cl = "[object Arguments]";
var ul = "[object Array]";
var cr = "[object Object]";
var vf = Object.prototype;
var hl = vf.hasOwnProperty;
function Ef(n7, t8, e16, r7, s12, i3) {
  var l5 = fe3(n7), a4 = fe3(t8), c9 = l5 ? ul : yt2(n7), h7 = a4 ? ul : yt2(t8);
  c9 = c9 == cl ? cr : c9, h7 = h7 == cl ? cr : h7;
  var d8 = c9 == cr, m6 = h7 == cr, g10 = c9 == h7;
  if (g10 && En(n7)) {
    if (!En(t8))
      return false;
    l5 = true, d8 = false;
  }
  if (g10 && !d8)
    return i3 || (i3 = new qt2()), l5 || yi(n7) ? fo(n7, t8, e16, r7, s12, i3) : df(n7, t8, c9, e16, r7, s12, i3);
  if (!(e16 & yf)) {
    var p3 = d8 && hl.call(n7, "__wrapped__"), b10 = m6 && hl.call(t8, "__wrapped__");
    if (p3 || b10) {
      var v6 = p3 ? n7.value() : n7, y4 = b10 ? t8.value() : t8;
      return i3 || (i3 = new qt2()), s12(v6, y4, e16, r7, i3);
    }
  }
  return g10 ? (i3 || (i3 = new qt2()), bf(n7, t8, e16, r7, s12, i3)) : false;
}
function go(n7, t8, e16, r7, s12) {
  return n7 === t8 ? true : n7 == null || t8 == null || !Ut2(n7) && !Ut2(t8) ? n7 !== n7 && t8 !== t8 : Ef(n7, t8, e16, r7, go, s12);
}
function Af(n7) {
  return function(t8, e16, r7) {
    for (var s12 = -1, i3 = Object(t8), l5 = r7(t8), a4 = l5.length; a4--; ) {
      var c9 = l5[++s12];
      if (e16(i3[c9], c9, i3) === false)
        break;
    }
    return t8;
  };
}
var Nf = Af();
function Ws(n7, t8, e16) {
  (e16 !== void 0 && !_n(n7[t8], e16) || e16 === void 0 && !(t8 in n7)) && pi(n7, t8, e16);
}
function wf(n7) {
  return Ut2(n7) && Tr(n7);
}
function Zs(n7, t8) {
  if (!(t8 === "constructor" && typeof n7[t8] == "function") && t8 != "__proto__")
    return n7[t8];
}
function Tf(n7) {
  return On(n7, qn(n7));
}
function xf(n7, t8, e16, r7, s12, i3, l5) {
  var a4 = Zs(n7, e16), c9 = Zs(t8, e16), h7 = l5.get(c9);
  if (h7) {
    Ws(n7, e16, h7);
    return;
  }
  var d8 = i3 ? i3(a4, c9, e16 + "", n7, t8, l5) : void 0, m6 = d8 === void 0;
  if (m6) {
    var g10 = fe3(c9), p3 = !g10 && En(c9), b10 = !g10 && !p3 && yi(c9);
    d8 = c9, g10 || p3 || b10 ? fe3(a4) ? d8 = a4 : wf(a4) ? d8 = Gl(a4) : p3 ? (m6 = false, d8 = ro(c9, true)) : b10 ? (m6 = false, d8 = oo(c9, true)) : d8 = [] : gu(c9) || Hs(c9) ? (d8 = a4, Hs(a4) ? d8 = Tf(a4) : (!ee2(a4) || gi(a4)) && (d8 = ao(c9))) : m6 = false;
  }
  m6 && (l5.set(c9, d8), s12(d8, c9, r7, i3, l5), l5.delete(c9)), Ws(n7, e16, d8);
}
function po(n7, t8, e16, r7, s12) {
  n7 !== t8 && Nf(t8, function(i3, l5) {
    if (s12 || (s12 = new qt2()), ee2(i3))
      xf(n7, t8, l5, e16, po, r7, s12);
    else {
      var a4 = r7 ? r7(Zs(n7, l5), i3, l5 + "", n7, t8, s12) : void 0;
      a4 === void 0 && (a4 = i3), Ws(n7, l5, a4);
    }
  }, qn);
}
function wi(n7, t8) {
  return go(n7, t8);
}
var Jt2 = Wa(function(n7, t8, e16) {
  po(n7, t8, e16);
});
var q5 = ((n7) => (n7[n7.TYPE = 3] = "TYPE", n7[n7.LEVEL = 12] = "LEVEL", n7[n7.ATTRIBUTE = 13] = "ATTRIBUTE", n7[n7.BLOT = 14] = "BLOT", n7[n7.INLINE = 7] = "INLINE", n7[n7.BLOCK = 11] = "BLOCK", n7[n7.BLOCK_BLOT = 10] = "BLOCK_BLOT", n7[n7.INLINE_BLOT = 6] = "INLINE_BLOT", n7[n7.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n7[n7.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n7[n7.ANY = 15] = "ANY", n7))(q5 || {});
var It2 = class {
  constructor(t8, e16, r7 = {}) {
    this.attrName = t8, this.keyName = e16;
    const s12 = q5.TYPE & q5.ATTRIBUTE;
    this.scope = r7.scope != null ? (
      // Ignore type bits, force attribute bit
      r7.scope & q5.LEVEL | s12
    ) : q5.ATTRIBUTE, r7.whitelist != null && (this.whitelist = r7.whitelist);
  }
  static keys(t8) {
    return Array.from(t8.attributes).map((e16) => e16.name);
  }
  add(t8, e16) {
    return this.canAdd(t8, e16) ? (t8.setAttribute(this.keyName, e16), true) : false;
  }
  canAdd(t8, e16) {
    return this.whitelist == null ? true : typeof e16 == "string" ? this.whitelist.indexOf(e16.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e16) > -1;
  }
  remove(t8) {
    t8.removeAttribute(this.keyName);
  }
  value(t8) {
    const e16 = t8.getAttribute(this.keyName);
    return this.canAdd(t8, e16) && e16 ? e16 : "";
  }
};
var je = class extends Error {
  constructor(t8) {
    t8 = "[Parchment] " + t8, super(t8), this.message = t8, this.name = this.constructor.name;
  }
};
var mo = class Xs {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t8, e16 = false) {
    if (t8 == null)
      return null;
    if (this.blots.has(t8))
      return this.blots.get(t8) || null;
    if (e16) {
      let r7 = null;
      try {
        r7 = t8.parentNode;
      } catch {
        return null;
      }
      return this.find(r7, e16);
    }
    return null;
  }
  create(t8, e16, r7) {
    const s12 = this.query(e16);
    if (s12 == null)
      throw new je(`Unable to create ${e16} blot`);
    const i3 = s12, l5 = (
      // @ts-expect-error Fix me later
      e16 instanceof Node || e16.nodeType === Node.TEXT_NODE ? e16 : i3.create(r7)
    ), a4 = new i3(t8, l5, r7);
    return Xs.blots.set(a4.domNode, a4), a4;
  }
  find(t8, e16 = false) {
    return Xs.find(t8, e16);
  }
  query(t8, e16 = q5.ANY) {
    let r7;
    return typeof t8 == "string" ? r7 = this.types[t8] || this.attributes[t8] : t8 instanceof Text || t8.nodeType === Node.TEXT_NODE ? r7 = this.types.text : typeof t8 == "number" ? t8 & q5.LEVEL & q5.BLOCK ? r7 = this.types.block : t8 & q5.LEVEL & q5.INLINE && (r7 = this.types.inline) : t8 instanceof Element && ((t8.getAttribute("class") || "").split(/\s+/).some((s12) => (r7 = this.classes[s12], !!r7)), r7 = r7 || this.tags[t8.tagName]), r7 == null ? null : "scope" in r7 && e16 & q5.LEVEL & r7.scope && e16 & q5.TYPE & r7.scope ? r7 : null;
  }
  register(...t8) {
    return t8.map((e16) => {
      const r7 = "blotName" in e16, s12 = "attrName" in e16;
      if (!r7 && !s12)
        throw new je("Invalid definition");
      if (r7 && e16.blotName === "abstract")
        throw new je("Cannot register abstract class");
      const i3 = r7 ? e16.blotName : s12 ? e16.attrName : void 0;
      return this.types[i3] = e16, s12 ? typeof e16.keyName == "string" && (this.attributes[e16.keyName] = e16) : r7 && (e16.className && (this.classes[e16.className] = e16), e16.tagName && (Array.isArray(e16.tagName) ? e16.tagName = e16.tagName.map((l5) => l5.toUpperCase()) : e16.tagName = e16.tagName.toUpperCase(), (Array.isArray(e16.tagName) ? e16.tagName : [e16.tagName]).forEach((l5) => {
        (this.tags[l5] == null || e16.className == null) && (this.tags[l5] = e16);
      }))), e16;
    });
  }
};
mo.blots = /* @__PURE__ */ new WeakMap();
var Fe = mo;
function fl(n7, t8) {
  return (n7.getAttribute("class") || "").split(/\s+/).filter((e16) => e16.indexOf(`${t8}-`) === 0);
}
var Lf = class extends It2 {
  static keys(t8) {
    return (t8.getAttribute("class") || "").split(/\s+/).map((e16) => e16.split("-").slice(0, -1).join("-"));
  }
  add(t8, e16) {
    return this.canAdd(t8, e16) ? (this.remove(t8), t8.classList.add(`${this.keyName}-${e16}`), true) : false;
  }
  remove(t8) {
    fl(t8, this.keyName).forEach((e16) => {
      t8.classList.remove(e16);
    }), t8.classList.length === 0 && t8.removeAttribute("class");
  }
  value(t8) {
    const e16 = (fl(t8, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t8, e16) ? e16 : "";
  }
};
var Nt = Lf;
function Is(n7) {
  const t8 = n7.split("-"), e16 = t8.slice(1).map((r7) => r7[0].toUpperCase() + r7.slice(1)).join("");
  return t8[0] + e16;
}
var Sf = class extends It2 {
  static keys(t8) {
    return (t8.getAttribute("style") || "").split(";").map((e16) => e16.split(":")[0].trim());
  }
  add(t8, e16) {
    return this.canAdd(t8, e16) ? (t8.style[Is(this.keyName)] = e16, true) : false;
  }
  remove(t8) {
    t8.style[Is(this.keyName)] = "", t8.getAttribute("style") || t8.removeAttribute("style");
  }
  value(t8) {
    const e16 = t8.style[Is(this.keyName)];
    return this.canAdd(t8, e16) ? e16 : "";
  }
};
var ne2 = Sf;
var _f = class {
  constructor(t8) {
    this.attributes = {}, this.domNode = t8, this.build();
  }
  attribute(t8, e16) {
    e16 ? t8.add(this.domNode, e16) && (t8.value(this.domNode) != null ? this.attributes[t8.attrName] = t8 : delete this.attributes[t8.attrName]) : (t8.remove(this.domNode), delete this.attributes[t8.attrName]);
  }
  build() {
    this.attributes = {};
    const t8 = Fe.find(this.domNode);
    if (t8 == null)
      return;
    const e16 = It2.keys(this.domNode), r7 = Nt.keys(this.domNode), s12 = ne2.keys(this.domNode);
    e16.concat(r7).concat(s12).forEach((i3) => {
      const l5 = t8.scroll.query(i3, q5.ATTRIBUTE);
      l5 instanceof It2 && (this.attributes[l5.attrName] = l5);
    });
  }
  copy(t8) {
    Object.keys(this.attributes).forEach((e16) => {
      const r7 = this.attributes[e16].value(this.domNode);
      t8.format(e16, r7);
    });
  }
  move(t8) {
    this.copy(t8), Object.keys(this.attributes).forEach((e16) => {
      this.attributes[e16].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t8, e16) => (t8[e16] = this.attributes[e16].value(this.domNode), t8),
      {}
    );
  }
};
var Sr = _f;
var bo = class {
  constructor(t8, e16) {
    this.scroll = t8, this.domNode = e16, Fe.blots.set(e16, this), this.prev = null, this.next = null;
  }
  static create(t8) {
    if (this.tagName == null)
      throw new je("Blot definition missing tagName");
    let e16, r7;
    return Array.isArray(this.tagName) ? (typeof t8 == "string" ? (r7 = t8.toUpperCase(), parseInt(r7, 10).toString() === r7 && (r7 = parseInt(r7, 10))) : typeof t8 == "number" && (r7 = t8), typeof r7 == "number" ? e16 = document.createElement(this.tagName[r7 - 1]) : r7 && this.tagName.indexOf(r7) > -1 ? e16 = document.createElement(r7) : e16 = document.createElement(this.tagName[0])) : e16 = document.createElement(this.tagName), this.className && e16.classList.add(this.className), e16;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t8 = this.domNode.cloneNode(false);
    return this.scroll.create(t8);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), Fe.blots.delete(this.domNode);
  }
  deleteAt(t8, e16) {
    this.isolate(t8, e16).remove();
  }
  formatAt(t8, e16, r7, s12) {
    const i3 = this.isolate(t8, e16);
    if (this.scroll.query(r7, q5.BLOT) != null && s12)
      i3.wrap(r7, s12);
    else if (this.scroll.query(r7, q5.ATTRIBUTE) != null) {
      const l5 = this.scroll.create(this.statics.scope);
      i3.wrap(l5), l5.format(r7, s12);
    }
  }
  insertAt(t8, e16, r7) {
    const s12 = r7 == null ? this.scroll.create("text", e16) : this.scroll.create(e16, r7), i3 = this.split(t8);
    this.parent.insertBefore(s12, i3 || void 0);
  }
  isolate(t8, e16) {
    const r7 = this.split(t8);
    if (r7 == null)
      throw new Error("Attempt to isolate at end");
    return r7.split(e16), r7;
  }
  length() {
    return 1;
  }
  offset(t8 = this.parent) {
    return this.parent == null || this === t8 ? 0 : this.parent.children.offset(this) + this.parent.offset(t8);
  }
  optimize(t8) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t8, e16) {
    const r7 = typeof t8 == "string" ? this.scroll.create(t8, e16) : t8;
    return this.parent != null && (this.parent.insertBefore(r7, this.next || void 0), this.remove()), r7;
  }
  split(t8, e16) {
    return t8 === 0 ? this : this.next;
  }
  update(t8, e16) {
  }
  wrap(t8, e16) {
    const r7 = typeof t8 == "string" ? this.scroll.create(t8, e16) : t8;
    if (this.parent != null && this.parent.insertBefore(r7, this.next || void 0), typeof r7.appendChild != "function")
      throw new je(`Cannot wrap ${t8}`);
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
  static value(t8) {
    return true;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t8, e16) {
    return this.domNode === t8 || this.domNode.compareDocumentPosition(t8) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e16, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t8, e16) {
    let r7 = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t8 > 0 && (r7 += 1), [this.parent.domNode, r7];
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
  append(...t8) {
    if (this.insertBefore(t8[0], null), t8.length > 1) {
      const e16 = t8.slice(1);
      this.append(...e16);
    }
  }
  at(t8) {
    const e16 = this.iterator();
    let r7 = e16();
    for (; r7 && t8 > 0; )
      t8 -= 1, r7 = e16();
    return r7;
  }
  contains(t8) {
    const e16 = this.iterator();
    let r7 = e16();
    for (; r7; ) {
      if (r7 === t8)
        return true;
      r7 = e16();
    }
    return false;
  }
  indexOf(t8) {
    const e16 = this.iterator();
    let r7 = e16(), s12 = 0;
    for (; r7; ) {
      if (r7 === t8)
        return s12;
      s12 += 1, r7 = e16();
    }
    return -1;
  }
  insertBefore(t8, e16) {
    t8 != null && (this.remove(t8), t8.next = e16, e16 != null ? (t8.prev = e16.prev, e16.prev != null && (e16.prev.next = t8), e16.prev = t8, e16 === this.head && (this.head = t8)) : this.tail != null ? (this.tail.next = t8, t8.prev = this.tail, this.tail = t8) : (t8.prev = null, this.head = this.tail = t8), this.length += 1);
  }
  offset(t8) {
    let e16 = 0, r7 = this.head;
    for (; r7 != null; ) {
      if (r7 === t8)
        return e16;
      e16 += r7.length(), r7 = r7.next;
    }
    return -1;
  }
  remove(t8) {
    this.contains(t8) && (t8.prev != null && (t8.prev.next = t8.next), t8.next != null && (t8.next.prev = t8.prev), t8 === this.head && (this.head = t8.next), t8 === this.tail && (this.tail = t8.prev), this.length -= 1);
  }
  iterator(t8 = this.head) {
    return () => {
      const e16 = t8;
      return t8 != null && (t8 = t8.next), e16;
    };
  }
  find(t8, e16 = false) {
    const r7 = this.iterator();
    let s12 = r7();
    for (; s12; ) {
      const i3 = s12.length();
      if (t8 < i3 || e16 && t8 === i3 && (s12.next == null || s12.next.length() !== 0))
        return [s12, t8];
      t8 -= i3, s12 = r7();
    }
    return [null, 0];
  }
  forEach(t8) {
    const e16 = this.iterator();
    let r7 = e16();
    for (; r7; )
      t8(r7), r7 = e16();
  }
  forEachAt(t8, e16, r7) {
    if (e16 <= 0)
      return;
    const [s12, i3] = this.find(t8);
    let l5 = t8 - i3;
    const a4 = this.iterator(s12);
    let c9 = a4();
    for (; c9 && l5 < t8 + e16; ) {
      const h7 = c9.length();
      t8 > l5 ? r7(
        c9,
        t8 - l5,
        Math.min(e16, l5 + h7 - t8)
      ) : r7(c9, 0, Math.min(h7, t8 + e16 - l5)), l5 += h7, c9 = a4();
    }
  }
  map(t8) {
    return this.reduce((e16, r7) => (e16.push(t8(r7)), e16), []);
  }
  reduce(t8, e16) {
    const r7 = this.iterator();
    let s12 = r7();
    for (; s12; )
      e16 = t8(e16, s12), s12 = r7();
    return e16;
  }
};
function dl(n7, t8) {
  const e16 = t8.find(n7);
  if (e16)
    return e16;
  try {
    return t8.create(n7);
  } catch {
    const r7 = t8.create(q5.INLINE);
    return Array.from(n7.childNodes).forEach((s12) => {
      r7.domNode.appendChild(s12);
    }), n7.parentNode && n7.parentNode.replaceChild(r7.domNode, n7), r7.attach(), r7;
  }
}
var Eo = class Zt2 extends yo {
  constructor(t8, e16) {
    super(t8, e16), this.uiNode = null, this.build();
  }
  appendChild(t8) {
    this.insertBefore(t8);
  }
  attach() {
    super.attach(), this.children.forEach((t8) => {
      t8.attach();
    });
  }
  attachUI(t8) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t8, Zt2.uiClass && this.uiNode.classList.add(Zt2.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new qf(), Array.from(this.domNode.childNodes).filter((t8) => t8 !== this.uiNode).reverse().forEach((t8) => {
      try {
        const e16 = dl(t8, this.scroll);
        this.insertBefore(e16, this.children.head || void 0);
      } catch (e16) {
        if (e16 instanceof je)
          return;
        throw e16;
      }
    });
  }
  deleteAt(t8, e16) {
    if (t8 === 0 && e16 === this.length())
      return this.remove();
    this.children.forEachAt(t8, e16, (r7, s12, i3) => {
      r7.deleteAt(s12, i3);
    });
  }
  descendant(t8, e16 = 0) {
    const [r7, s12] = this.children.find(e16);
    return t8.blotName == null && t8(r7) || t8.blotName != null && r7 instanceof t8 ? [r7, s12] : r7 instanceof Zt2 ? r7.descendant(t8, s12) : [null, -1];
  }
  descendants(t8, e16 = 0, r7 = Number.MAX_VALUE) {
    let s12 = [], i3 = r7;
    return this.children.forEachAt(
      e16,
      r7,
      (l5, a4, c9) => {
        (t8.blotName == null && t8(l5) || t8.blotName != null && l5 instanceof t8) && s12.push(l5), l5 instanceof Zt2 && (s12 = s12.concat(
          l5.descendants(t8, a4, i3)
        )), i3 -= c9;
      }
    ), s12;
  }
  detach() {
    this.children.forEach((t8) => {
      t8.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t8 = false;
    this.children.forEach((e16) => {
      t8 || this.statics.allowedChildren.some(
        (r7) => e16 instanceof r7
      ) || (e16.statics.scope === q5.BLOCK_BLOT ? (e16.next != null && this.splitAfter(e16), e16.prev != null && this.splitAfter(e16.prev), e16.parent.unwrap(), t8 = true) : e16 instanceof Zt2 ? e16.unwrap() : e16.remove());
    });
  }
  formatAt(t8, e16, r7, s12) {
    this.children.forEachAt(t8, e16, (i3, l5, a4) => {
      i3.formatAt(l5, a4, r7, s12);
    });
  }
  insertAt(t8, e16, r7) {
    const [s12, i3] = this.children.find(t8);
    if (s12)
      s12.insertAt(i3, e16, r7);
    else {
      const l5 = r7 == null ? this.scroll.create("text", e16) : this.scroll.create(e16, r7);
      this.appendChild(l5);
    }
  }
  insertBefore(t8, e16) {
    t8.parent != null && t8.parent.children.remove(t8);
    let r7 = null;
    this.children.insertBefore(t8, e16 || null), t8.parent = this, e16 != null && (r7 = e16.domNode), (this.domNode.parentNode !== t8.domNode || this.domNode.nextSibling !== r7) && this.domNode.insertBefore(t8.domNode, r7), t8.attach();
  }
  length() {
    return this.children.reduce((t8, e16) => t8 + e16.length(), 0);
  }
  moveChildren(t8, e16) {
    this.children.forEach((r7) => {
      t8.insertBefore(r7, e16);
    });
  }
  optimize(t8) {
    if (super.optimize(t8), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e16 = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e16);
      } else
        this.remove();
  }
  path(t8, e16 = false) {
    const [r7, s12] = this.children.find(t8, e16), i3 = [[this, t8]];
    return r7 instanceof Zt2 ? i3.concat(r7.path(s12, e16)) : (r7 != null && i3.push([r7, s12]), i3);
  }
  removeChild(t8) {
    this.children.remove(t8);
  }
  replaceWith(t8, e16) {
    const r7 = typeof t8 == "string" ? this.scroll.create(t8, e16) : t8;
    return r7 instanceof Zt2 && this.moveChildren(r7), super.replaceWith(r7);
  }
  split(t8, e16 = false) {
    if (!e16) {
      if (t8 === 0)
        return this;
      if (t8 === this.length())
        return this.next;
    }
    const r7 = this.clone();
    return this.parent && this.parent.insertBefore(r7, this.next || void 0), this.children.forEachAt(t8, this.length(), (s12, i3, l5) => {
      const a4 = s12.split(i3, e16);
      a4 != null && r7.appendChild(a4);
    }), r7;
  }
  splitAfter(t8) {
    const e16 = this.clone();
    for (; t8.next != null; )
      e16.appendChild(t8.next);
    return this.parent && this.parent.insertBefore(e16, this.next || void 0), e16;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t8, e16) {
    const r7 = [], s12 = [];
    t8.forEach((i3) => {
      i3.target === this.domNode && i3.type === "childList" && (r7.push(...i3.addedNodes), s12.push(...i3.removedNodes));
    }), s12.forEach((i3) => {
      if (i3.parentNode != null && // @ts-expect-error Fix me later
      i3.tagName !== "IFRAME" && document.body.compareDocumentPosition(i3) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const l5 = this.scroll.find(i3);
      l5 != null && (l5.domNode.parentNode == null || l5.domNode.parentNode === this.domNode) && l5.detach();
    }), r7.filter((i3) => i3.parentNode === this.domNode && i3 !== this.uiNode).sort((i3, l5) => i3 === l5 ? 0 : i3.compareDocumentPosition(l5) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i3) => {
      let l5 = null;
      i3.nextSibling != null && (l5 = this.scroll.find(i3.nextSibling));
      const a4 = dl(i3, this.scroll);
      (a4.next !== l5 || a4.next == null) && (a4.parent != null && a4.parent.removeChild(this), this.insertBefore(a4, l5 || void 0));
    }), this.enforceAllowedChildren();
  }
};
Eo.uiClass = "";
var Cf = Eo;
var Et2 = Cf;
function If(n7, t8) {
  if (Object.keys(n7).length !== Object.keys(t8).length)
    return false;
  for (const e16 in n7)
    if (n7[e16] !== t8[e16])
      return false;
  return true;
}
var Ie = class Re3 extends Et2 {
  static create(t8) {
    return super.create(t8);
  }
  static formats(t8, e16) {
    const r7 = e16.query(Re3.blotName);
    if (!(r7 != null && t8.tagName === r7.tagName)) {
      if (typeof this.tagName == "string")
        return true;
      if (Array.isArray(this.tagName))
        return t8.tagName.toLowerCase();
    }
  }
  constructor(t8, e16) {
    super(t8, e16), this.attributes = new Sr(this.domNode);
  }
  format(t8, e16) {
    if (t8 === this.statics.blotName && !e16)
      this.children.forEach((r7) => {
        r7 instanceof Re3 || (r7 = r7.wrap(Re3.blotName, true)), this.attributes.copy(r7);
      }), this.unwrap();
    else {
      const r7 = this.scroll.query(t8, q5.INLINE);
      if (r7 == null)
        return;
      r7 instanceof It2 ? this.attributes.attribute(r7, e16) : e16 && (t8 !== this.statics.blotName || this.formats()[t8] !== e16) && this.replaceWith(t8, e16);
    }
  }
  formats() {
    const t8 = this.attributes.values(), e16 = this.statics.formats(this.domNode, this.scroll);
    return e16 != null && (t8[this.statics.blotName] = e16), t8;
  }
  formatAt(t8, e16, r7, s12) {
    this.formats()[r7] != null || this.scroll.query(r7, q5.ATTRIBUTE) ? this.isolate(t8, e16).format(r7, s12) : super.formatAt(t8, e16, r7, s12);
  }
  optimize(t8) {
    super.optimize(t8);
    const e16 = this.formats();
    if (Object.keys(e16).length === 0)
      return this.unwrap();
    const r7 = this.next;
    r7 instanceof Re3 && r7.prev === this && If(e16, r7.formats()) && (r7.moveChildren(this), r7.remove());
  }
  replaceWith(t8, e16) {
    const r7 = super.replaceWith(t8, e16);
    return this.attributes.copy(r7), r7;
  }
  update(t8, e16) {
    super.update(t8, e16), t8.some(
      (r7) => r7.target === this.domNode && r7.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t8, e16) {
    const r7 = super.wrap(t8, e16);
    return r7 instanceof Re3 && this.attributes.move(r7), r7;
  }
};
Ie.allowedChildren = [Ie, Q3], Ie.blotName = "inline", Ie.scope = q5.INLINE_BLOT, Ie.tagName = "SPAN";
var Rf = Ie;
var Ti = Rf;
var ke = class Ys extends Et2 {
  static create(t8) {
    return super.create(t8);
  }
  static formats(t8, e16) {
    const r7 = e16.query(Ys.blotName);
    if (!(r7 != null && t8.tagName === r7.tagName)) {
      if (typeof this.tagName == "string")
        return true;
      if (Array.isArray(this.tagName))
        return t8.tagName.toLowerCase();
    }
  }
  constructor(t8, e16) {
    super(t8, e16), this.attributes = new Sr(this.domNode);
  }
  format(t8, e16) {
    const r7 = this.scroll.query(t8, q5.BLOCK);
    r7 != null && (r7 instanceof It2 ? this.attributes.attribute(r7, e16) : t8 === this.statics.blotName && !e16 ? this.replaceWith(Ys.blotName) : e16 && (t8 !== this.statics.blotName || this.formats()[t8] !== e16) && this.replaceWith(t8, e16));
  }
  formats() {
    const t8 = this.attributes.values(), e16 = this.statics.formats(this.domNode, this.scroll);
    return e16 != null && (t8[this.statics.blotName] = e16), t8;
  }
  formatAt(t8, e16, r7, s12) {
    this.scroll.query(r7, q5.BLOCK) != null ? this.format(r7, s12) : super.formatAt(t8, e16, r7, s12);
  }
  insertAt(t8, e16, r7) {
    if (r7 == null || this.scroll.query(e16, q5.INLINE) != null)
      super.insertAt(t8, e16, r7);
    else {
      const s12 = this.split(t8);
      if (s12 != null) {
        const i3 = this.scroll.create(e16, r7);
        s12.parent.insertBefore(i3, s12);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t8, e16) {
    const r7 = super.replaceWith(t8, e16);
    return this.attributes.copy(r7), r7;
  }
  update(t8, e16) {
    super.update(t8, e16), t8.some(
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
  deleteAt(t8, e16) {
    super.deleteAt(t8, e16), this.enforceAllowedChildren();
  }
  formatAt(t8, e16, r7, s12) {
    super.formatAt(t8, e16, r7, s12), this.enforceAllowedChildren();
  }
  insertAt(t8, e16, r7) {
    super.insertAt(t8, e16, r7), this.enforceAllowedChildren();
  }
  optimize(t8) {
    super.optimize(t8), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
Qs.blotName = "container", Qs.scope = q5.BLOCK_BLOT;
var Bf = Qs;
var _r = Bf;
var Mf = class extends Q3 {
  static formats(t8, e16) {
  }
  format(t8, e16) {
    super.formatAt(0, this.length(), t8, e16);
  }
  formatAt(t8, e16, r7, s12) {
    t8 === 0 && e16 === this.length() ? this.format(r7, s12) : super.formatAt(t8, e16, r7, s12);
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
  constructor(t8, e16) {
    super(null, e16), this.registry = t8, this.scroll = this, this.build(), this.observer = new MutationObserver((r7) => {
      this.update(r7);
    }), this.observer.observe(this.domNode, $f), this.attach();
  }
  create(t8, e16) {
    return this.registry.create(this, t8, e16);
  }
  find(t8, e16 = false) {
    const r7 = this.registry.find(t8, e16);
    return r7 ? r7.scroll === this ? r7 : e16 ? this.find(r7.scroll.domNode.parentNode, true) : null : null;
  }
  query(t8, e16 = q5.ANY) {
    return this.registry.query(t8, e16);
  }
  register(...t8) {
    return this.registry.register(...t8);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t8, e16) {
    this.update(), t8 === 0 && e16 === this.length() ? this.children.forEach((r7) => {
      r7.remove();
    }) : super.deleteAt(t8, e16);
  }
  formatAt(t8, e16, r7, s12) {
    this.update(), super.formatAt(t8, e16, r7, s12);
  }
  insertAt(t8, e16, r7) {
    this.update(), super.insertAt(t8, e16, r7);
  }
  optimize(t8 = [], e16 = {}) {
    super.optimize(e16);
    const r7 = e16.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s12 = Array.from(this.observer.takeRecords());
    for (; s12.length > 0; )
      t8.push(s12.pop());
    const i3 = (c9, h7 = true) => {
      c9 == null || c9 === this || c9.domNode.parentNode != null && (r7.has(c9.domNode) || r7.set(c9.domNode, []), h7 && i3(c9.parent));
    }, l5 = (c9) => {
      r7.has(c9.domNode) && (c9 instanceof Et2 && c9.children.forEach(l5), r7.delete(c9.domNode), c9.optimize(e16));
    };
    let a4 = t8;
    for (let c9 = 0; a4.length > 0; c9 += 1) {
      if (c9 >= Df)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a4.forEach((h7) => {
        const d8 = this.find(h7.target, true);
        d8 != null && (d8.domNode === h7.target && (h7.type === "childList" ? (i3(this.find(h7.previousSibling, false)), Array.from(h7.addedNodes).forEach((m6) => {
          const g10 = this.find(m6, false);
          i3(g10, false), g10 instanceof Et2 && g10.children.forEach((p3) => {
            i3(p3, false);
          });
        })) : h7.type === "attributes" && i3(d8.prev)), i3(d8));
      }), this.children.forEach(l5), a4 = Array.from(this.observer.takeRecords()), s12 = a4.slice(); s12.length > 0; )
        t8.push(s12.pop());
    }
  }
  update(t8, e16 = {}) {
    t8 = t8 || this.observer.takeRecords();
    const r7 = /* @__PURE__ */ new WeakMap();
    t8.map((s12) => {
      const i3 = this.find(s12.target, true);
      return i3 == null ? null : r7.has(i3.domNode) ? (r7.get(i3.domNode).push(s12), null) : (r7.set(i3.domNode, [s12]), i3);
    }).forEach((s12) => {
      s12 != null && s12 !== this && r7.has(s12.domNode) && s12.update(r7.get(s12.domNode) || [], e16);
    }), e16.mutationsMap = r7, r7.has(this.domNode) && super.update(r7.get(this.domNode), e16), this.optimize(t8, e16);
  }
};
Be.blotName = "scroll", Be.defaultChild = wn, Be.allowedChildren = [wn, _r], Be.scope = q5.BLOCK_BLOT, Be.tagName = "DIV";
var jf = Be;
var xi = jf;
var Js = class Ao extends Q3 {
  static create(t8) {
    return document.createTextNode(t8);
  }
  static value(t8) {
    return t8.data;
  }
  constructor(t8, e16) {
    super(t8, e16), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t8, e16) {
    this.domNode.data = this.text = this.text.slice(0, t8) + this.text.slice(t8 + e16);
  }
  index(t8, e16) {
    return this.domNode === t8 ? e16 : -1;
  }
  insertAt(t8, e16, r7) {
    r7 == null ? (this.text = this.text.slice(0, t8) + e16 + this.text.slice(t8), this.domNode.data = this.text) : super.insertAt(t8, e16, r7);
  }
  length() {
    return this.text.length;
  }
  optimize(t8) {
    super.optimize(t8), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof Ao && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t8, e16 = false) {
    return [this.domNode, t8];
  }
  split(t8, e16 = false) {
    if (!e16) {
      if (t8 === 0)
        return this;
      if (t8 === this.length())
        return this.next;
    }
    const r7 = this.scroll.create(this.domNode.splitText(t8));
    return this.parent.insertBefore(r7, this.next || void 0), this.text = this.statics.value(this.domNode), r7;
  }
  update(t8, e16) {
    t8.some((r7) => r7.type === "characterData" && r7.target === this.domNode) && (this.text = this.statics.value(this.domNode));
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
function No(n7) {
  return n7 && n7.__esModule && Object.prototype.hasOwnProperty.call(n7, "default") ? n7.default : n7;
}
var ti = { exports: {} };
var st3 = -1;
var et2 = 1;
var G2 = 0;
function Tn(n7, t8, e16, r7, s12) {
  if (n7 === t8)
    return n7 ? [[G2, n7]] : [];
  if (e16 != null) {
    var i3 = Xf(n7, t8, e16);
    if (i3)
      return i3;
  }
  var l5 = Li(n7, t8), a4 = n7.substring(0, l5);
  n7 = n7.substring(l5), t8 = t8.substring(l5), l5 = Or(n7, t8);
  var c9 = n7.substring(n7.length - l5);
  n7 = n7.substring(0, n7.length - l5), t8 = t8.substring(0, t8.length - l5);
  var h7 = Ff(n7, t8);
  return a4 && h7.unshift([G2, a4]), c9 && h7.push([G2, c9]), Si(h7, s12), r7 && Gf(h7), h7;
}
function Ff(n7, t8) {
  var e16;
  if (!n7)
    return [[et2, t8]];
  if (!t8)
    return [[st3, n7]];
  var r7 = n7.length > t8.length ? n7 : t8, s12 = n7.length > t8.length ? t8 : n7, i3 = r7.indexOf(s12);
  if (i3 !== -1)
    return e16 = [
      [et2, r7.substring(0, i3)],
      [G2, s12],
      [et2, r7.substring(i3 + s12.length)]
    ], n7.length > t8.length && (e16[0][0] = e16[2][0] = st3), e16;
  if (s12.length === 1)
    return [
      [st3, n7],
      [et2, t8]
    ];
  var l5 = zf(n7, t8);
  if (l5) {
    var a4 = l5[0], c9 = l5[1], h7 = l5[2], d8 = l5[3], m6 = l5[4], g10 = Tn(a4, h7), p3 = Tn(c9, d8);
    return g10.concat([[G2, m6]], p3);
  }
  return Hf(n7, t8);
}
function Hf(n7, t8) {
  for (var e16 = n7.length, r7 = t8.length, s12 = Math.ceil((e16 + r7) / 2), i3 = s12, l5 = 2 * s12, a4 = new Array(l5), c9 = new Array(l5), h7 = 0; h7 < l5; h7++)
    a4[h7] = -1, c9[h7] = -1;
  a4[i3 + 1] = 0, c9[i3 + 1] = 0;
  for (var d8 = e16 - r7, m6 = d8 % 2 !== 0, g10 = 0, p3 = 0, b10 = 0, v6 = 0, y4 = 0; y4 < s12; y4++) {
    for (var E11 = -y4 + g10; E11 <= y4 - p3; E11 += 2) {
      var w11 = i3 + E11, T6;
      E11 === -y4 || E11 !== y4 && a4[w11 - 1] < a4[w11 + 1] ? T6 = a4[w11 + 1] : T6 = a4[w11 - 1] + 1;
      for (var _10 = T6 - E11; T6 < e16 && _10 < r7 && n7.charAt(T6) === t8.charAt(_10); )
        T6++, _10++;
      if (a4[w11] = T6, T6 > e16)
        p3 += 2;
      else if (_10 > r7)
        g10 += 2;
      else if (m6) {
        var L5 = i3 + d8 - E11;
        if (L5 >= 0 && L5 < l5 && c9[L5] !== -1) {
          var I4 = e16 - c9[L5];
          if (T6 >= I4)
            return gl(n7, t8, T6, _10);
        }
      }
    }
    for (var k6 = -y4 + b10; k6 <= y4 - v6; k6 += 2) {
      var L5 = i3 + k6, I4;
      k6 === -y4 || k6 !== y4 && c9[L5 - 1] < c9[L5 + 1] ? I4 = c9[L5 + 1] : I4 = c9[L5 - 1] + 1;
      for (var U3 = I4 - k6; I4 < e16 && U3 < r7 && n7.charAt(e16 - I4 - 1) === t8.charAt(r7 - U3 - 1); )
        I4++, U3++;
      if (c9[L5] = I4, I4 > e16)
        v6 += 2;
      else if (U3 > r7)
        b10 += 2;
      else if (!m6) {
        var w11 = i3 + d8 - k6;
        if (w11 >= 0 && w11 < l5 && a4[w11] !== -1) {
          var T6 = a4[w11], _10 = i3 + T6 - w11;
          if (I4 = e16 - I4, T6 >= I4)
            return gl(n7, t8, T6, _10);
        }
      }
    }
  }
  return [
    [st3, n7],
    [et2, t8]
  ];
}
function gl(n7, t8, e16, r7) {
  var s12 = n7.substring(0, e16), i3 = t8.substring(0, r7), l5 = n7.substring(e16), a4 = t8.substring(r7), c9 = Tn(s12, i3), h7 = Tn(l5, a4);
  return c9.concat(h7);
}
function Li(n7, t8) {
  if (!n7 || !t8 || n7.charAt(0) !== t8.charAt(0))
    return 0;
  for (var e16 = 0, r7 = Math.min(n7.length, t8.length), s12 = r7, i3 = 0; e16 < s12; )
    n7.substring(i3, s12) == t8.substring(i3, s12) ? (e16 = s12, i3 = e16) : r7 = s12, s12 = Math.floor((r7 - e16) / 2 + e16);
  return wo(n7.charCodeAt(s12 - 1)) && s12--, s12;
}
function pl(n7, t8) {
  var e16 = n7.length, r7 = t8.length;
  if (e16 == 0 || r7 == 0)
    return 0;
  e16 > r7 ? n7 = n7.substring(e16 - r7) : e16 < r7 && (t8 = t8.substring(0, e16));
  var s12 = Math.min(e16, r7);
  if (n7 == t8)
    return s12;
  for (var i3 = 0, l5 = 1; ; ) {
    var a4 = n7.substring(s12 - l5), c9 = t8.indexOf(a4);
    if (c9 == -1)
      return i3;
    l5 += c9, (c9 == 0 || n7.substring(s12 - l5) == t8.substring(0, l5)) && (i3 = l5, l5++);
  }
}
function Or(n7, t8) {
  if (!n7 || !t8 || n7.slice(-1) !== t8.slice(-1))
    return 0;
  for (var e16 = 0, r7 = Math.min(n7.length, t8.length), s12 = r7, i3 = 0; e16 < s12; )
    n7.substring(n7.length - s12, n7.length - i3) == t8.substring(t8.length - s12, t8.length - i3) ? (e16 = s12, i3 = e16) : r7 = s12, s12 = Math.floor((r7 - e16) / 2 + e16);
  return To(n7.charCodeAt(n7.length - s12)) && s12--, s12;
}
function zf(n7, t8) {
  var e16 = n7.length > t8.length ? n7 : t8, r7 = n7.length > t8.length ? t8 : n7;
  if (e16.length < 4 || r7.length * 2 < e16.length)
    return null;
  function s12(p3, b10, v6) {
    for (var y4 = p3.substring(v6, v6 + Math.floor(p3.length / 4)), E11 = -1, w11 = "", T6, _10, L5, I4; (E11 = b10.indexOf(y4, E11 + 1)) !== -1; ) {
      var k6 = Li(
        p3.substring(v6),
        b10.substring(E11)
      ), U3 = Or(
        p3.substring(0, v6),
        b10.substring(0, E11)
      );
      w11.length < U3 + k6 && (w11 = b10.substring(E11 - U3, E11) + b10.substring(E11, E11 + k6), T6 = p3.substring(0, v6 - U3), _10 = p3.substring(v6 + k6), L5 = b10.substring(0, E11 - U3), I4 = b10.substring(E11 + k6));
    }
    return w11.length * 2 >= p3.length ? [
      T6,
      _10,
      L5,
      I4,
      w11
    ] : null;
  }
  var i3 = s12(
    e16,
    r7,
    Math.ceil(e16.length / 4)
  ), l5 = s12(
    e16,
    r7,
    Math.ceil(e16.length / 2)
  ), a4;
  if (!i3 && !l5)
    return null;
  l5 ? i3 ? a4 = i3[4].length > l5[4].length ? i3 : l5 : a4 = l5 : a4 = i3;
  var c9, h7, d8, m6;
  n7.length > t8.length ? (c9 = a4[0], h7 = a4[1], d8 = a4[2], m6 = a4[3]) : (d8 = a4[0], m6 = a4[1], c9 = a4[2], h7 = a4[3]);
  var g10 = a4[4];
  return [c9, h7, d8, m6, g10];
}
function Gf(n7) {
  for (var t8 = false, e16 = [], r7 = 0, s12 = null, i3 = 0, l5 = 0, a4 = 0, c9 = 0, h7 = 0; i3 < n7.length; )
    n7[i3][0] == G2 ? (e16[r7++] = i3, l5 = c9, a4 = h7, c9 = 0, h7 = 0, s12 = n7[i3][1]) : (n7[i3][0] == et2 ? c9 += n7[i3][1].length : h7 += n7[i3][1].length, s12 && s12.length <= Math.max(l5, a4) && s12.length <= Math.max(c9, h7) && (n7.splice(e16[r7 - 1], 0, [
      st3,
      s12
    ]), n7[e16[r7 - 1] + 1][0] = et2, r7--, r7--, i3 = r7 > 0 ? e16[r7 - 1] : -1, l5 = 0, a4 = 0, c9 = 0, h7 = 0, s12 = null, t8 = true)), i3++;
  for (t8 && Si(n7), Wf(n7), i3 = 1; i3 < n7.length; ) {
    if (n7[i3 - 1][0] == st3 && n7[i3][0] == et2) {
      var d8 = n7[i3 - 1][1], m6 = n7[i3][1], g10 = pl(d8, m6), p3 = pl(m6, d8);
      g10 >= p3 ? (g10 >= d8.length / 2 || g10 >= m6.length / 2) && (n7.splice(i3, 0, [
        G2,
        m6.substring(0, g10)
      ]), n7[i3 - 1][1] = d8.substring(
        0,
        d8.length - g10
      ), n7[i3 + 1][1] = m6.substring(g10), i3++) : (p3 >= d8.length / 2 || p3 >= m6.length / 2) && (n7.splice(i3, 0, [
        G2,
        d8.substring(0, p3)
      ]), n7[i3 - 1][0] = et2, n7[i3 - 1][1] = m6.substring(
        0,
        m6.length - p3
      ), n7[i3 + 1][0] = st3, n7[i3 + 1][1] = d8.substring(p3), i3++), i3++;
    }
    i3++;
  }
}
var ml = /[^a-zA-Z0-9]/;
var bl = /\s/;
var yl = /[\r\n]/;
var Kf = /\n\r?\n$/;
var Vf = /^\r?\n\r?\n/;
function Wf(n7) {
  function t8(p3, b10) {
    if (!p3 || !b10)
      return 6;
    var v6 = p3.charAt(p3.length - 1), y4 = b10.charAt(0), E11 = v6.match(ml), w11 = y4.match(ml), T6 = E11 && v6.match(bl), _10 = w11 && y4.match(bl), L5 = T6 && v6.match(yl), I4 = _10 && y4.match(yl), k6 = L5 && p3.match(Kf), U3 = I4 && b10.match(Vf);
    return k6 || U3 ? 5 : L5 || I4 ? 4 : E11 && !T6 && _10 ? 3 : T6 || _10 ? 2 : E11 || w11 ? 1 : 0;
  }
  for (var e16 = 1; e16 < n7.length - 1; ) {
    if (n7[e16 - 1][0] == G2 && n7[e16 + 1][0] == G2) {
      var r7 = n7[e16 - 1][1], s12 = n7[e16][1], i3 = n7[e16 + 1][1], l5 = Or(r7, s12);
      if (l5) {
        var a4 = s12.substring(s12.length - l5);
        r7 = r7.substring(0, r7.length - l5), s12 = a4 + s12.substring(0, s12.length - l5), i3 = a4 + i3;
      }
      for (var c9 = r7, h7 = s12, d8 = i3, m6 = t8(r7, s12) + t8(s12, i3); s12.charAt(0) === i3.charAt(0); ) {
        r7 += s12.charAt(0), s12 = s12.substring(1) + i3.charAt(0), i3 = i3.substring(1);
        var g10 = t8(r7, s12) + t8(s12, i3);
        g10 >= m6 && (m6 = g10, c9 = r7, h7 = s12, d8 = i3);
      }
      n7[e16 - 1][1] != c9 && (c9 ? n7[e16 - 1][1] = c9 : (n7.splice(e16 - 1, 1), e16--), n7[e16][1] = h7, d8 ? n7[e16 + 1][1] = d8 : (n7.splice(e16 + 1, 1), e16--));
    }
    e16++;
  }
}
function Si(n7, t8) {
  n7.push([G2, ""]);
  for (var e16 = 0, r7 = 0, s12 = 0, i3 = "", l5 = "", a4; e16 < n7.length; ) {
    if (e16 < n7.length - 1 && !n7[e16][1]) {
      n7.splice(e16, 1);
      continue;
    }
    switch (n7[e16][0]) {
      case et2:
        s12++, l5 += n7[e16][1], e16++;
        break;
      case st3:
        r7++, i3 += n7[e16][1], e16++;
        break;
      case G2:
        var c9 = e16 - s12 - r7 - 1;
        if (t8) {
          if (c9 >= 0 && Lo(n7[c9][1])) {
            var h7 = n7[c9][1].slice(-1);
            if (n7[c9][1] = n7[c9][1].slice(
              0,
              -1
            ), i3 = h7 + i3, l5 = h7 + l5, !n7[c9][1]) {
              n7.splice(c9, 1), e16--;
              var d8 = c9 - 1;
              n7[d8] && n7[d8][0] === et2 && (s12++, l5 = n7[d8][1] + l5, d8--), n7[d8] && n7[d8][0] === st3 && (r7++, i3 = n7[d8][1] + i3, d8--), c9 = d8;
            }
          }
          if (xo(n7[e16][1])) {
            var h7 = n7[e16][1].charAt(0);
            n7[e16][1] = n7[e16][1].slice(1), i3 += h7, l5 += h7;
          }
        }
        if (e16 < n7.length - 1 && !n7[e16][1]) {
          n7.splice(e16, 1);
          break;
        }
        if (i3.length > 0 || l5.length > 0) {
          i3.length > 0 && l5.length > 0 && (a4 = Li(l5, i3), a4 !== 0 && (c9 >= 0 ? n7[c9][1] += l5.substring(
            0,
            a4
          ) : (n7.splice(0, 0, [
            G2,
            l5.substring(0, a4)
          ]), e16++), l5 = l5.substring(a4), i3 = i3.substring(a4)), a4 = Or(l5, i3), a4 !== 0 && (n7[e16][1] = l5.substring(l5.length - a4) + n7[e16][1], l5 = l5.substring(
            0,
            l5.length - a4
          ), i3 = i3.substring(
            0,
            i3.length - a4
          )));
          var m6 = s12 + r7;
          i3.length === 0 && l5.length === 0 ? (n7.splice(e16 - m6, m6), e16 = e16 - m6) : i3.length === 0 ? (n7.splice(e16 - m6, m6, [et2, l5]), e16 = e16 - m6 + 1) : l5.length === 0 ? (n7.splice(e16 - m6, m6, [st3, i3]), e16 = e16 - m6 + 1) : (n7.splice(
            e16 - m6,
            m6,
            [st3, i3],
            [et2, l5]
          ), e16 = e16 - m6 + 2);
        }
        e16 !== 0 && n7[e16 - 1][0] === G2 ? (n7[e16 - 1][1] += n7[e16][1], n7.splice(e16, 1)) : e16++, s12 = 0, r7 = 0, i3 = "", l5 = "";
        break;
    }
  }
  n7[n7.length - 1][1] === "" && n7.pop();
  var g10 = false;
  for (e16 = 1; e16 < n7.length - 1; )
    n7[e16 - 1][0] === G2 && n7[e16 + 1][0] === G2 && (n7[e16][1].substring(
      n7[e16][1].length - n7[e16 - 1][1].length
    ) === n7[e16 - 1][1] ? (n7[e16][1] = n7[e16 - 1][1] + n7[e16][1].substring(
      0,
      n7[e16][1].length - n7[e16 - 1][1].length
    ), n7[e16 + 1][1] = n7[e16 - 1][1] + n7[e16 + 1][1], n7.splice(e16 - 1, 1), g10 = true) : n7[e16][1].substring(0, n7[e16 + 1][1].length) == n7[e16 + 1][1] && (n7[e16 - 1][1] += n7[e16 + 1][1], n7[e16][1] = n7[e16][1].substring(n7[e16 + 1][1].length) + n7[e16 + 1][1], n7.splice(e16 + 1, 1), g10 = true)), e16++;
  g10 && Si(n7, t8);
}
function wo(n7) {
  return n7 >= 55296 && n7 <= 56319;
}
function To(n7) {
  return n7 >= 56320 && n7 <= 57343;
}
function xo(n7) {
  return To(n7.charCodeAt(0));
}
function Lo(n7) {
  return wo(n7.charCodeAt(n7.length - 1));
}
function Zf(n7) {
  for (var t8 = [], e16 = 0; e16 < n7.length; e16++)
    n7[e16][1].length > 0 && t8.push(n7[e16]);
  return t8;
}
function Rs(n7, t8, e16, r7) {
  return Lo(n7) || xo(r7) ? null : Zf([
    [G2, n7],
    [st3, t8],
    [et2, e16],
    [G2, r7]
  ]);
}
function Xf(n7, t8, e16) {
  var r7 = typeof e16 == "number" ? { index: e16, length: 0 } : e16.oldRange, s12 = typeof e16 == "number" ? null : e16.newRange, i3 = n7.length, l5 = t8.length;
  if (r7.length === 0 && (s12 === null || s12.length === 0)) {
    var a4 = r7.index, c9 = n7.slice(0, a4), h7 = n7.slice(a4), d8 = s12 ? s12.index : null;
    t: {
      var m6 = a4 + l5 - i3;
      if (d8 !== null && d8 !== m6 || m6 < 0 || m6 > l5)
        break t;
      var g10 = t8.slice(0, m6), p3 = t8.slice(m6);
      if (p3 !== h7)
        break t;
      var b10 = Math.min(a4, m6), v6 = c9.slice(0, b10), y4 = g10.slice(0, b10);
      if (v6 !== y4)
        break t;
      var E11 = c9.slice(b10), w11 = g10.slice(b10);
      return Rs(v6, E11, w11, h7);
    }
    t: {
      if (d8 !== null && d8 !== a4)
        break t;
      var T6 = a4, g10 = t8.slice(0, T6), p3 = t8.slice(T6);
      if (g10 !== c9)
        break t;
      var _10 = Math.min(i3 - T6, l5 - T6), L5 = h7.slice(h7.length - _10), I4 = p3.slice(p3.length - _10);
      if (L5 !== I4)
        break t;
      var E11 = h7.slice(0, h7.length - _10), w11 = p3.slice(0, p3.length - _10);
      return Rs(c9, E11, w11, L5);
    }
  }
  if (r7.length > 0 && s12 && s12.length === 0)
    t: {
      var v6 = n7.slice(0, r7.index), L5 = n7.slice(r7.index + r7.length), b10 = v6.length, _10 = L5.length;
      if (l5 < b10 + _10)
        break t;
      var y4 = t8.slice(0, b10), I4 = t8.slice(l5 - _10);
      if (v6 !== y4 || L5 !== I4)
        break t;
      var E11 = n7.slice(b10, i3 - _10), w11 = t8.slice(b10, l5 - _10);
      return Rs(v6, E11, w11, L5);
    }
  return null;
}
function qr(n7, t8, e16, r7) {
  return Tn(n7, t8, e16, r7, true);
}
qr.INSERT = et2;
qr.DELETE = st3;
qr.EQUAL = G2;
var Yf = qr;
var Nr = { exports: {} };
Nr.exports;
(function(n7, t8) {
  var e16 = 200, r7 = "__lodash_hash_undefined__", s12 = 9007199254740991, i3 = "[object Arguments]", l5 = "[object Array]", a4 = "[object Boolean]", c9 = "[object Date]", h7 = "[object Error]", d8 = "[object Function]", m6 = "[object GeneratorFunction]", g10 = "[object Map]", p3 = "[object Number]", b10 = "[object Object]", v6 = "[object Promise]", y4 = "[object RegExp]", E11 = "[object Set]", w11 = "[object String]", T6 = "[object Symbol]", _10 = "[object WeakMap]", L5 = "[object ArrayBuffer]", I4 = "[object DataView]", k6 = "[object Float32Array]", U3 = "[object Float64Array]", Bt2 = "[object Int8Array]", Kt2 = "[object Int16Array]", re6 = "[object Int32Array]", se4 = "[object Uint8Array]", Bn = "[object Uint8ClampedArray]", Mn = "[object Uint16Array]", $n = "[object Uint32Array]", Br = /[\\^$.*+?()[\]{}|]/g, Mr = /\w*$/, $r = /^\[object .+?Constructor\]$/, Dr = /^(?:0|[1-9]\d*)$/, D4 = {};
  D4[i3] = D4[l5] = D4[L5] = D4[I4] = D4[a4] = D4[c9] = D4[k6] = D4[U3] = D4[Bt2] = D4[Kt2] = D4[re6] = D4[g10] = D4[p3] = D4[b10] = D4[y4] = D4[E11] = D4[w11] = D4[T6] = D4[se4] = D4[Bn] = D4[Mn] = D4[$n] = true, D4[h7] = D4[d8] = D4[_10] = false;
  var jr = typeof Xt2 == "object" && Xt2 && Xt2.Object === Object && Xt2, Pr = typeof self == "object" && self && self.Object === Object && self, ft2 = jr || Pr || Function("return this")(), Dn = t8 && !t8.nodeType && t8, j5 = Dn && true && n7 && !n7.nodeType && n7, jn = j5 && j5.exports === Dn;
  function Ur(o10, u5) {
    return o10.set(u5[0], u5[1]), o10;
  }
  function dt2(o10, u5) {
    return o10.add(u5), o10;
  }
  function Pn(o10, u5) {
    for (var f11 = -1, A11 = o10 ? o10.length : 0; ++f11 < A11 && u5(o10[f11], f11, o10) !== false; )
      ;
    return o10;
  }
  function Un(o10, u5) {
    for (var f11 = -1, A11 = u5.length, R7 = o10.length; ++f11 < A11; )
      o10[R7 + f11] = u5[f11];
    return o10;
  }
  function Ve2(o10, u5, f11, A11) {
    for (var R7 = -1, C6 = o10 ? o10.length : 0; ++R7 < C6; )
      f11 = u5(f11, o10[R7], R7, o10);
    return f11;
  }
  function We(o10, u5) {
    for (var f11 = -1, A11 = Array(o10); ++f11 < o10; )
      A11[f11] = u5(f11);
    return A11;
  }
  function Fn(o10, u5) {
    return o10 == null ? void 0 : o10[u5];
  }
  function Ze(o10) {
    var u5 = false;
    if (o10 != null && typeof o10.toString != "function")
      try {
        u5 = !!(o10 + "");
      } catch {
      }
    return u5;
  }
  function Hn(o10) {
    var u5 = -1, f11 = Array(o10.size);
    return o10.forEach(function(A11, R7) {
      f11[++u5] = [R7, A11];
    }), f11;
  }
  function Xe(o10, u5) {
    return function(f11) {
      return o10(u5(f11));
    };
  }
  function zn(o10) {
    var u5 = -1, f11 = Array(o10.size);
    return o10.forEach(function(A11) {
      f11[++u5] = A11;
    }), f11;
  }
  var Fr = Array.prototype, Hr = Function.prototype, Ae2 = Object.prototype, Ye = ft2["__core-js_shared__"], Gn = function() {
    var o10 = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
    return o10 ? "Symbol(src)_1." + o10 : "";
  }(), Kn = Hr.toString, xt2 = Ae2.hasOwnProperty, Ne2 = Ae2.toString, zr = RegExp(
    "^" + Kn.call(xt2).replace(Br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ie6 = jn ? ft2.Buffer : void 0, we3 = ft2.Symbol, Qe = ft2.Uint8Array, lt2 = Xe(Object.getPrototypeOf, Object), Vn = Object.create, Wn = Ae2.propertyIsEnumerable, Gr = Fr.splice, Je2 = Object.getOwnPropertySymbols, Te = ie6 ? ie6.isBuffer : void 0, Zn = Xe(Object.keys, Object), xe2 = pt2(ft2, "DataView"), le4 = pt2(ft2, "Map"), gt2 = pt2(ft2, "Promise"), Le2 = pt2(ft2, "Set"), tn = pt2(ft2, "WeakMap"), oe6 = pt2(Object, "create"), en = tt2(xe2), ae4 = tt2(le4), nn = tt2(gt2), rn = tt2(Le2), sn = tt2(tn), Vt = we3 ? we3.prototype : void 0, Xn = Vt ? Vt.valueOf : void 0;
  function Mt2(o10) {
    var u5 = -1, f11 = o10 ? o10.length : 0;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o10[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function Kr() {
    this.__data__ = oe6 ? oe6(null) : {};
  }
  function Vr(o10) {
    return this.has(o10) && delete this.__data__[o10];
  }
  function Wr(o10) {
    var u5 = this.__data__;
    if (oe6) {
      var f11 = u5[o10];
      return f11 === r7 ? void 0 : f11;
    }
    return xt2.call(u5, o10) ? u5[o10] : void 0;
  }
  function Yn(o10) {
    var u5 = this.__data__;
    return oe6 ? u5[o10] !== void 0 : xt2.call(u5, o10);
  }
  function ln(o10, u5) {
    var f11 = this.__data__;
    return f11[o10] = oe6 && u5 === void 0 ? r7 : u5, this;
  }
  Mt2.prototype.clear = Kr, Mt2.prototype.delete = Vr, Mt2.prototype.get = Wr, Mt2.prototype.has = Yn, Mt2.prototype.set = ln;
  function K6(o10) {
    var u5 = -1, f11 = o10 ? o10.length : 0;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o10[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function Zr() {
    this.__data__ = [];
  }
  function Xr(o10) {
    var u5 = this.__data__, f11 = _e3(u5, o10);
    if (f11 < 0)
      return false;
    var A11 = u5.length - 1;
    return f11 == A11 ? u5.pop() : Gr.call(u5, f11, 1), true;
  }
  function Yr(o10) {
    var u5 = this.__data__, f11 = _e3(u5, o10);
    return f11 < 0 ? void 0 : u5[f11][1];
  }
  function Qr(o10) {
    return _e3(this.__data__, o10) > -1;
  }
  function Jr(o10, u5) {
    var f11 = this.__data__, A11 = _e3(f11, o10);
    return A11 < 0 ? f11.push([o10, u5]) : f11[A11][1] = u5, this;
  }
  K6.prototype.clear = Zr, K6.prototype.delete = Xr, K6.prototype.get = Yr, K6.prototype.has = Qr, K6.prototype.set = Jr;
  function Z3(o10) {
    var u5 = -1, f11 = o10 ? o10.length : 0;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o10[u5];
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
  function es(o10) {
    return ue2(this, o10).delete(o10);
  }
  function ns(o10) {
    return ue2(this, o10).get(o10);
  }
  function rs(o10) {
    return ue2(this, o10).has(o10);
  }
  function ss(o10, u5) {
    return ue2(this, o10).set(o10, u5), this;
  }
  Z3.prototype.clear = ts, Z3.prototype.delete = es, Z3.prototype.get = ns, Z3.prototype.has = rs, Z3.prototype.set = ss;
  function nt2(o10) {
    this.__data__ = new K6(o10);
  }
  function is() {
    this.__data__ = new K6();
  }
  function ls(o10) {
    return this.__data__.delete(o10);
  }
  function os(o10) {
    return this.__data__.get(o10);
  }
  function as(o10) {
    return this.__data__.has(o10);
  }
  function cs(o10, u5) {
    var f11 = this.__data__;
    if (f11 instanceof K6) {
      var A11 = f11.__data__;
      if (!le4 || A11.length < e16 - 1)
        return A11.push([o10, u5]), this;
      f11 = this.__data__ = new Z3(A11);
    }
    return f11.set(o10, u5), this;
  }
  nt2.prototype.clear = is, nt2.prototype.delete = ls, nt2.prototype.get = os, nt2.prototype.has = as, nt2.prototype.set = cs;
  function Se(o10, u5) {
    var f11 = un(o10) || qe(o10) ? We(o10.length, String) : [], A11 = f11.length, R7 = !!A11;
    for (var C6 in o10)
      xt2.call(o10, C6) && !(R7 && (C6 == "length" || ws(C6, A11))) && f11.push(C6);
    return f11;
  }
  function Qn(o10, u5, f11) {
    var A11 = o10[u5];
    (!(xt2.call(o10, u5) && rr(A11, f11)) || f11 === void 0 && !(u5 in o10)) && (o10[u5] = f11);
  }
  function _e3(o10, u5) {
    for (var f11 = o10.length; f11--; )
      if (rr(o10[f11][0], u5))
        return f11;
    return -1;
  }
  function Lt2(o10, u5) {
    return o10 && cn(u5, fn(u5), o10);
  }
  function on(o10, u5, f11, A11, R7, C6, M8) {
    var B7;
    if (A11 && (B7 = C6 ? A11(o10, R7, C6, M8) : A11(o10)), B7 !== void 0)
      return B7;
    if (!_t2(o10))
      return o10;
    var H4 = un(o10);
    if (H4) {
      if (B7 = As(o10), !u5)
        return ys(o10, B7);
    } else {
      var $12 = Dt2(o10), X5 = $12 == d8 || $12 == m6;
      if (sr(o10))
        return Oe(o10, u5);
      if ($12 == b10 || $12 == i3 || X5 && !C6) {
        if (Ze(o10))
          return C6 ? o10 : {};
        if (B7 = St2(X5 ? {} : o10), !u5)
          return vs(o10, Lt2(B7, o10));
      } else {
        if (!D4[$12])
          return C6 ? o10 : {};
        B7 = Ns(o10, $12, on, u5);
      }
    }
    M8 || (M8 = new nt2());
    var rt2 = M8.get(o10);
    if (rt2)
      return rt2;
    if (M8.set(o10, B7), !H4)
      var z5 = f11 ? Es(o10) : fn(o10);
    return Pn(z5 || o10, function(Y3, V6) {
      z5 && (V6 = Y3, Y3 = o10[V6]), Qn(B7, V6, on(Y3, u5, f11, A11, V6, o10, M8));
    }), B7;
  }
  function us(o10) {
    return _t2(o10) ? Vn(o10) : {};
  }
  function hs(o10, u5, f11) {
    var A11 = u5(o10);
    return un(o10) ? A11 : Un(A11, f11(o10));
  }
  function fs(o10) {
    return Ne2.call(o10);
  }
  function ds(o10) {
    if (!_t2(o10) || xs(o10))
      return false;
    var u5 = hn(o10) || Ze(o10) ? zr : $r;
    return u5.test(tt2(o10));
  }
  function gs(o10) {
    if (!er(o10))
      return Zn(o10);
    var u5 = [];
    for (var f11 in Object(o10))
      xt2.call(o10, f11) && f11 != "constructor" && u5.push(f11);
    return u5;
  }
  function Oe(o10, u5) {
    if (u5)
      return o10.slice();
    var f11 = new o10.constructor(o10.length);
    return o10.copy(f11), f11;
  }
  function an(o10) {
    var u5 = new o10.constructor(o10.byteLength);
    return new Qe(u5).set(new Qe(o10)), u5;
  }
  function ce3(o10, u5) {
    var f11 = u5 ? an(o10.buffer) : o10.buffer;
    return new o10.constructor(f11, o10.byteOffset, o10.byteLength);
  }
  function Jn(o10, u5, f11) {
    var A11 = u5 ? f11(Hn(o10), true) : Hn(o10);
    return Ve2(A11, Ur, new o10.constructor());
  }
  function tr(o10) {
    var u5 = new o10.constructor(o10.source, Mr.exec(o10));
    return u5.lastIndex = o10.lastIndex, u5;
  }
  function ps(o10, u5, f11) {
    var A11 = u5 ? f11(zn(o10), true) : zn(o10);
    return Ve2(A11, dt2, new o10.constructor());
  }
  function ms(o10) {
    return Xn ? Object(Xn.call(o10)) : {};
  }
  function bs(o10, u5) {
    var f11 = u5 ? an(o10.buffer) : o10.buffer;
    return new o10.constructor(f11, o10.byteOffset, o10.length);
  }
  function ys(o10, u5) {
    var f11 = -1, A11 = o10.length;
    for (u5 || (u5 = Array(A11)); ++f11 < A11; )
      u5[f11] = o10[f11];
    return u5;
  }
  function cn(o10, u5, f11, A11) {
    f11 || (f11 = {});
    for (var R7 = -1, C6 = u5.length; ++R7 < C6; ) {
      var M8 = u5[R7], B7 = void 0;
      Qn(f11, M8, B7 === void 0 ? o10[M8] : B7);
    }
    return f11;
  }
  function vs(o10, u5) {
    return cn(o10, $t(o10), u5);
  }
  function Es(o10) {
    return hs(o10, fn, $t);
  }
  function ue2(o10, u5) {
    var f11 = o10.__data__;
    return Ts(u5) ? f11[typeof u5 == "string" ? "string" : "hash"] : f11.map;
  }
  function pt2(o10, u5) {
    var f11 = Fn(o10, u5);
    return ds(f11) ? f11 : void 0;
  }
  var $t = Je2 ? Xe(Je2, Object) : Ss, Dt2 = fs;
  (xe2 && Dt2(new xe2(new ArrayBuffer(1))) != I4 || le4 && Dt2(new le4()) != g10 || gt2 && Dt2(gt2.resolve()) != v6 || Le2 && Dt2(new Le2()) != E11 || tn && Dt2(new tn()) != _10) && (Dt2 = function(o10) {
    var u5 = Ne2.call(o10), f11 = u5 == b10 ? o10.constructor : void 0, A11 = f11 ? tt2(f11) : void 0;
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
  function As(o10) {
    var u5 = o10.length, f11 = o10.constructor(u5);
    return u5 && typeof o10[0] == "string" && xt2.call(o10, "index") && (f11.index = o10.index, f11.input = o10.input), f11;
  }
  function St2(o10) {
    return typeof o10.constructor == "function" && !er(o10) ? us(lt2(o10)) : {};
  }
  function Ns(o10, u5, f11, A11) {
    var R7 = o10.constructor;
    switch (u5) {
      case L5:
        return an(o10);
      case a4:
      case c9:
        return new R7(+o10);
      case I4:
        return ce3(o10, A11);
      case k6:
      case U3:
      case Bt2:
      case Kt2:
      case re6:
      case se4:
      case Bn:
      case Mn:
      case $n:
        return bs(o10, A11);
      case g10:
        return Jn(o10, A11, f11);
      case p3:
      case w11:
        return new R7(o10);
      case y4:
        return tr(o10);
      case E11:
        return ps(o10, A11, f11);
      case T6:
        return ms(o10);
    }
  }
  function ws(o10, u5) {
    return u5 = u5 ?? s12, !!u5 && (typeof o10 == "number" || Dr.test(o10)) && o10 > -1 && o10 % 1 == 0 && o10 < u5;
  }
  function Ts(o10) {
    var u5 = typeof o10;
    return u5 == "string" || u5 == "number" || u5 == "symbol" || u5 == "boolean" ? o10 !== "__proto__" : o10 === null;
  }
  function xs(o10) {
    return !!Gn && Gn in o10;
  }
  function er(o10) {
    var u5 = o10 && o10.constructor, f11 = typeof u5 == "function" && u5.prototype || Ae2;
    return o10 === f11;
  }
  function tt2(o10) {
    if (o10 != null) {
      try {
        return Kn.call(o10);
      } catch {
      }
      try {
        return o10 + "";
      } catch {
      }
    }
    return "";
  }
  function nr(o10) {
    return on(o10, true, true);
  }
  function rr(o10, u5) {
    return o10 === u5 || o10 !== o10 && u5 !== u5;
  }
  function qe(o10) {
    return Ls(o10) && xt2.call(o10, "callee") && (!Wn.call(o10, "callee") || Ne2.call(o10) == i3);
  }
  var un = Array.isArray;
  function Ce2(o10) {
    return o10 != null && ir(o10.length) && !hn(o10);
  }
  function Ls(o10) {
    return lr(o10) && Ce2(o10);
  }
  var sr = Te || _s;
  function hn(o10) {
    var u5 = _t2(o10) ? Ne2.call(o10) : "";
    return u5 == d8 || u5 == m6;
  }
  function ir(o10) {
    return typeof o10 == "number" && o10 > -1 && o10 % 1 == 0 && o10 <= s12;
  }
  function _t2(o10) {
    var u5 = typeof o10;
    return !!o10 && (u5 == "object" || u5 == "function");
  }
  function lr(o10) {
    return !!o10 && typeof o10 == "object";
  }
  function fn(o10) {
    return Ce2(o10) ? Se(o10) : gs(o10);
  }
  function Ss() {
    return [];
  }
  function _s() {
    return false;
  }
  n7.exports = nr;
})(Nr, Nr.exports);
var So = Nr.exports;
var wr = { exports: {} };
wr.exports;
(function(n7, t8) {
  var e16 = 200, r7 = "__lodash_hash_undefined__", s12 = 1, i3 = 2, l5 = 9007199254740991, a4 = "[object Arguments]", c9 = "[object Array]", h7 = "[object AsyncFunction]", d8 = "[object Boolean]", m6 = "[object Date]", g10 = "[object Error]", p3 = "[object Function]", b10 = "[object GeneratorFunction]", v6 = "[object Map]", y4 = "[object Number]", E11 = "[object Null]", w11 = "[object Object]", T6 = "[object Promise]", _10 = "[object Proxy]", L5 = "[object RegExp]", I4 = "[object Set]", k6 = "[object String]", U3 = "[object Symbol]", Bt2 = "[object Undefined]", Kt2 = "[object WeakMap]", re6 = "[object ArrayBuffer]", se4 = "[object DataView]", Bn = "[object Float32Array]", Mn = "[object Float64Array]", $n = "[object Int8Array]", Br = "[object Int16Array]", Mr = "[object Int32Array]", $r = "[object Uint8Array]", Dr = "[object Uint8ClampedArray]", D4 = "[object Uint16Array]", jr = "[object Uint32Array]", Pr = /[\\^$.*+?()[\]{}|]/g, ft2 = /^\[object .+?Constructor\]$/, Dn = /^(?:0|[1-9]\d*)$/, j5 = {};
  j5[Bn] = j5[Mn] = j5[$n] = j5[Br] = j5[Mr] = j5[$r] = j5[Dr] = j5[D4] = j5[jr] = true, j5[a4] = j5[c9] = j5[re6] = j5[d8] = j5[se4] = j5[m6] = j5[g10] = j5[p3] = j5[v6] = j5[y4] = j5[w11] = j5[L5] = j5[I4] = j5[k6] = j5[Kt2] = false;
  var jn = typeof Xt2 == "object" && Xt2 && Xt2.Object === Object && Xt2, Ur = typeof self == "object" && self && self.Object === Object && self, dt2 = jn || Ur || Function("return this")(), Pn = t8 && !t8.nodeType && t8, Un = Pn && true && n7 && !n7.nodeType && n7, Ve2 = Un && Un.exports === Pn, We = Ve2 && jn.process, Fn = function() {
    try {
      return We && We.binding && We.binding("util");
    } catch {
    }
  }(), Ze = Fn && Fn.isTypedArray;
  function Hn(o10, u5) {
    for (var f11 = -1, A11 = o10 == null ? 0 : o10.length, R7 = 0, C6 = []; ++f11 < A11; ) {
      var M8 = o10[f11];
      u5(M8, f11, o10) && (C6[R7++] = M8);
    }
    return C6;
  }
  function Xe(o10, u5) {
    for (var f11 = -1, A11 = u5.length, R7 = o10.length; ++f11 < A11; )
      o10[R7 + f11] = u5[f11];
    return o10;
  }
  function zn(o10, u5) {
    for (var f11 = -1, A11 = o10 == null ? 0 : o10.length; ++f11 < A11; )
      if (u5(o10[f11], f11, o10))
        return true;
    return false;
  }
  function Fr(o10, u5) {
    for (var f11 = -1, A11 = Array(o10); ++f11 < o10; )
      A11[f11] = u5(f11);
    return A11;
  }
  function Hr(o10) {
    return function(u5) {
      return o10(u5);
    };
  }
  function Ae2(o10, u5) {
    return o10.has(u5);
  }
  function Ye(o10, u5) {
    return o10 == null ? void 0 : o10[u5];
  }
  function Gn(o10) {
    var u5 = -1, f11 = Array(o10.size);
    return o10.forEach(function(A11, R7) {
      f11[++u5] = [R7, A11];
    }), f11;
  }
  function Kn(o10, u5) {
    return function(f11) {
      return o10(u5(f11));
    };
  }
  function xt2(o10) {
    var u5 = -1, f11 = Array(o10.size);
    return o10.forEach(function(A11) {
      f11[++u5] = A11;
    }), f11;
  }
  var Ne2 = Array.prototype, zr = Function.prototype, ie6 = Object.prototype, we3 = dt2["__core-js_shared__"], Qe = zr.toString, lt2 = ie6.hasOwnProperty, Vn = function() {
    var o10 = /[^.]+$/.exec(we3 && we3.keys && we3.keys.IE_PROTO || "");
    return o10 ? "Symbol(src)_1." + o10 : "";
  }(), Wn = ie6.toString, Gr = RegExp(
    "^" + Qe.call(lt2).replace(Pr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Je2 = Ve2 ? dt2.Buffer : void 0, Te = dt2.Symbol, Zn = dt2.Uint8Array, xe2 = ie6.propertyIsEnumerable, le4 = Ne2.splice, gt2 = Te ? Te.toStringTag : void 0, Le2 = Object.getOwnPropertySymbols, tn = Je2 ? Je2.isBuffer : void 0, oe6 = Kn(Object.keys, Object), en = $t(dt2, "DataView"), ae4 = $t(dt2, "Map"), nn = $t(dt2, "Promise"), rn = $t(dt2, "Set"), sn = $t(dt2, "WeakMap"), Vt = $t(Object, "create"), Xn = tt2(en), Mt2 = tt2(ae4), Kr = tt2(nn), Vr = tt2(rn), Wr = tt2(sn), Yn = Te ? Te.prototype : void 0, ln = Yn ? Yn.valueOf : void 0;
  function K6(o10) {
    var u5 = -1, f11 = o10 == null ? 0 : o10.length;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o10[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function Zr() {
    this.__data__ = Vt ? Vt(null) : {}, this.size = 0;
  }
  function Xr(o10) {
    var u5 = this.has(o10) && delete this.__data__[o10];
    return this.size -= u5 ? 1 : 0, u5;
  }
  function Yr(o10) {
    var u5 = this.__data__;
    if (Vt) {
      var f11 = u5[o10];
      return f11 === r7 ? void 0 : f11;
    }
    return lt2.call(u5, o10) ? u5[o10] : void 0;
  }
  function Qr(o10) {
    var u5 = this.__data__;
    return Vt ? u5[o10] !== void 0 : lt2.call(u5, o10);
  }
  function Jr(o10, u5) {
    var f11 = this.__data__;
    return this.size += this.has(o10) ? 0 : 1, f11[o10] = Vt && u5 === void 0 ? r7 : u5, this;
  }
  K6.prototype.clear = Zr, K6.prototype.delete = Xr, K6.prototype.get = Yr, K6.prototype.has = Qr, K6.prototype.set = Jr;
  function Z3(o10) {
    var u5 = -1, f11 = o10 == null ? 0 : o10.length;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o10[u5];
      this.set(A11[0], A11[1]);
    }
  }
  function ts() {
    this.__data__ = [], this.size = 0;
  }
  function es(o10) {
    var u5 = this.__data__, f11 = Oe(u5, o10);
    if (f11 < 0)
      return false;
    var A11 = u5.length - 1;
    return f11 == A11 ? u5.pop() : le4.call(u5, f11, 1), --this.size, true;
  }
  function ns(o10) {
    var u5 = this.__data__, f11 = Oe(u5, o10);
    return f11 < 0 ? void 0 : u5[f11][1];
  }
  function rs(o10) {
    return Oe(this.__data__, o10) > -1;
  }
  function ss(o10, u5) {
    var f11 = this.__data__, A11 = Oe(f11, o10);
    return A11 < 0 ? (++this.size, f11.push([o10, u5])) : f11[A11][1] = u5, this;
  }
  Z3.prototype.clear = ts, Z3.prototype.delete = es, Z3.prototype.get = ns, Z3.prototype.has = rs, Z3.prototype.set = ss;
  function nt2(o10) {
    var u5 = -1, f11 = o10 == null ? 0 : o10.length;
    for (this.clear(); ++u5 < f11; ) {
      var A11 = o10[u5];
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
  function ls(o10) {
    var u5 = pt2(this, o10).delete(o10);
    return this.size -= u5 ? 1 : 0, u5;
  }
  function os(o10) {
    return pt2(this, o10).get(o10);
  }
  function as(o10) {
    return pt2(this, o10).has(o10);
  }
  function cs(o10, u5) {
    var f11 = pt2(this, o10), A11 = f11.size;
    return f11.set(o10, u5), this.size += f11.size == A11 ? 0 : 1, this;
  }
  nt2.prototype.clear = is, nt2.prototype.delete = ls, nt2.prototype.get = os, nt2.prototype.has = as, nt2.prototype.set = cs;
  function Se(o10) {
    var u5 = -1, f11 = o10 == null ? 0 : o10.length;
    for (this.__data__ = new nt2(); ++u5 < f11; )
      this.add(o10[u5]);
  }
  function Qn(o10) {
    return this.__data__.set(o10, r7), this;
  }
  function _e3(o10) {
    return this.__data__.has(o10);
  }
  Se.prototype.add = Se.prototype.push = Qn, Se.prototype.has = _e3;
  function Lt2(o10) {
    var u5 = this.__data__ = new Z3(o10);
    this.size = u5.size;
  }
  function on() {
    this.__data__ = new Z3(), this.size = 0;
  }
  function us(o10) {
    var u5 = this.__data__, f11 = u5.delete(o10);
    return this.size = u5.size, f11;
  }
  function hs(o10) {
    return this.__data__.get(o10);
  }
  function fs(o10) {
    return this.__data__.has(o10);
  }
  function ds(o10, u5) {
    var f11 = this.__data__;
    if (f11 instanceof Z3) {
      var A11 = f11.__data__;
      if (!ae4 || A11.length < e16 - 1)
        return A11.push([o10, u5]), this.size = ++f11.size, this;
      f11 = this.__data__ = new nt2(A11);
    }
    return f11.set(o10, u5), this.size = f11.size, this;
  }
  Lt2.prototype.clear = on, Lt2.prototype.delete = us, Lt2.prototype.get = hs, Lt2.prototype.has = fs, Lt2.prototype.set = ds;
  function gs(o10, u5) {
    var f11 = qe(o10), A11 = !f11 && rr(o10), R7 = !f11 && !A11 && Ce2(o10), C6 = !f11 && !A11 && !R7 && lr(o10), M8 = f11 || A11 || R7 || C6, B7 = M8 ? Fr(o10.length, String) : [], H4 = B7.length;
    for (var $12 in o10)
      lt2.call(o10, $12) && !(M8 && // Safari 9 has enumerable `arguments.length` in strict mode.
      ($12 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R7 && ($12 == "offset" || $12 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C6 && ($12 == "buffer" || $12 == "byteLength" || $12 == "byteOffset") || // Skip index properties.
      Ns($12, H4))) && B7.push($12);
    return B7;
  }
  function Oe(o10, u5) {
    for (var f11 = o10.length; f11--; )
      if (nr(o10[f11][0], u5))
        return f11;
    return -1;
  }
  function an(o10, u5, f11) {
    var A11 = u5(o10);
    return qe(o10) ? A11 : Xe(A11, f11(o10));
  }
  function ce3(o10) {
    return o10 == null ? o10 === void 0 ? Bt2 : E11 : gt2 && gt2 in Object(o10) ? Dt2(o10) : er(o10);
  }
  function Jn(o10) {
    return _t2(o10) && ce3(o10) == a4;
  }
  function tr(o10, u5, f11, A11, R7) {
    return o10 === u5 ? true : o10 == null || u5 == null || !_t2(o10) && !_t2(u5) ? o10 !== o10 && u5 !== u5 : ps(o10, u5, f11, A11, tr, R7);
  }
  function ps(o10, u5, f11, A11, R7, C6) {
    var M8 = qe(o10), B7 = qe(u5), H4 = M8 ? c9 : St2(o10), $12 = B7 ? c9 : St2(u5);
    H4 = H4 == a4 ? w11 : H4, $12 = $12 == a4 ? w11 : $12;
    var X5 = H4 == w11, rt2 = $12 == w11, z5 = H4 == $12;
    if (z5 && Ce2(o10)) {
      if (!Ce2(u5))
        return false;
      M8 = true, X5 = false;
    }
    if (z5 && !X5)
      return C6 || (C6 = new Lt2()), M8 || lr(o10) ? cn(o10, u5, f11, A11, R7, C6) : vs(o10, u5, H4, f11, A11, R7, C6);
    if (!(f11 & s12)) {
      var Y3 = X5 && lt2.call(o10, "__wrapped__"), V6 = rt2 && lt2.call(u5, "__wrapped__");
      if (Y3 || V6) {
        var Wt = Y3 ? o10.value() : o10, jt2 = V6 ? u5.value() : u5;
        return C6 || (C6 = new Lt2()), R7(Wt, jt2, f11, A11, C6);
      }
    }
    return z5 ? (C6 || (C6 = new Lt2()), Es(o10, u5, f11, A11, R7, C6)) : false;
  }
  function ms(o10) {
    if (!ir(o10) || Ts(o10))
      return false;
    var u5 = sr(o10) ? Gr : ft2;
    return u5.test(tt2(o10));
  }
  function bs(o10) {
    return _t2(o10) && hn(o10.length) && !!j5[ce3(o10)];
  }
  function ys(o10) {
    if (!xs(o10))
      return oe6(o10);
    var u5 = [];
    for (var f11 in Object(o10))
      lt2.call(o10, f11) && f11 != "constructor" && u5.push(f11);
    return u5;
  }
  function cn(o10, u5, f11, A11, R7, C6) {
    var M8 = f11 & s12, B7 = o10.length, H4 = u5.length;
    if (B7 != H4 && !(M8 && H4 > B7))
      return false;
    var $12 = C6.get(o10);
    if ($12 && C6.get(u5))
      return $12 == u5;
    var X5 = -1, rt2 = true, z5 = f11 & i3 ? new Se() : void 0;
    for (C6.set(o10, u5), C6.set(u5, o10); ++X5 < B7; ) {
      var Y3 = o10[X5], V6 = u5[X5];
      if (A11)
        var Wt = M8 ? A11(V6, Y3, X5, u5, o10, C6) : A11(Y3, V6, X5, o10, u5, C6);
      if (Wt !== void 0) {
        if (Wt)
          continue;
        rt2 = false;
        break;
      }
      if (z5) {
        if (!zn(u5, function(jt2, he3) {
          if (!Ae2(z5, he3) && (Y3 === jt2 || R7(Y3, jt2, f11, A11, C6)))
            return z5.push(he3);
        })) {
          rt2 = false;
          break;
        }
      } else if (!(Y3 === V6 || R7(Y3, V6, f11, A11, C6))) {
        rt2 = false;
        break;
      }
    }
    return C6.delete(o10), C6.delete(u5), rt2;
  }
  function vs(o10, u5, f11, A11, R7, C6, M8) {
    switch (f11) {
      case se4:
        if (o10.byteLength != u5.byteLength || o10.byteOffset != u5.byteOffset)
          return false;
        o10 = o10.buffer, u5 = u5.buffer;
      case re6:
        return !(o10.byteLength != u5.byteLength || !C6(new Zn(o10), new Zn(u5)));
      case d8:
      case m6:
      case y4:
        return nr(+o10, +u5);
      case g10:
        return o10.name == u5.name && o10.message == u5.message;
      case L5:
      case k6:
        return o10 == u5 + "";
      case v6:
        var B7 = Gn;
      case I4:
        var H4 = A11 & s12;
        if (B7 || (B7 = xt2), o10.size != u5.size && !H4)
          return false;
        var $12 = M8.get(o10);
        if ($12)
          return $12 == u5;
        A11 |= i3, M8.set(o10, u5);
        var X5 = cn(B7(o10), B7(u5), A11, R7, C6, M8);
        return M8.delete(o10), X5;
      case U3:
        if (ln)
          return ln.call(o10) == ln.call(u5);
    }
    return false;
  }
  function Es(o10, u5, f11, A11, R7, C6) {
    var M8 = f11 & s12, B7 = ue2(o10), H4 = B7.length, $12 = ue2(u5), X5 = $12.length;
    if (H4 != X5 && !M8)
      return false;
    for (var rt2 = H4; rt2--; ) {
      var z5 = B7[rt2];
      if (!(M8 ? z5 in u5 : lt2.call(u5, z5)))
        return false;
    }
    var Y3 = C6.get(o10);
    if (Y3 && C6.get(u5))
      return Y3 == u5;
    var V6 = true;
    C6.set(o10, u5), C6.set(u5, o10);
    for (var Wt = M8; ++rt2 < H4; ) {
      z5 = B7[rt2];
      var jt2 = o10[z5], he3 = u5[z5];
      if (A11)
        var Pi = M8 ? A11(he3, jt2, z5, u5, o10, C6) : A11(jt2, he3, z5, o10, u5, C6);
      if (!(Pi === void 0 ? jt2 === he3 || R7(jt2, he3, f11, A11, C6) : Pi)) {
        V6 = false;
        break;
      }
      Wt || (Wt = z5 == "constructor");
    }
    if (V6 && !Wt) {
      var or = o10.constructor, ar = u5.constructor;
      or != ar && "constructor" in o10 && "constructor" in u5 && !(typeof or == "function" && or instanceof or && typeof ar == "function" && ar instanceof ar) && (V6 = false);
    }
    return C6.delete(o10), C6.delete(u5), V6;
  }
  function ue2(o10) {
    return an(o10, fn, As);
  }
  function pt2(o10, u5) {
    var f11 = o10.__data__;
    return ws(u5) ? f11[typeof u5 == "string" ? "string" : "hash"] : f11.map;
  }
  function $t(o10, u5) {
    var f11 = Ye(o10, u5);
    return ms(f11) ? f11 : void 0;
  }
  function Dt2(o10) {
    var u5 = lt2.call(o10, gt2), f11 = o10[gt2];
    try {
      o10[gt2] = void 0;
      var A11 = true;
    } catch {
    }
    var R7 = Wn.call(o10);
    return A11 && (u5 ? o10[gt2] = f11 : delete o10[gt2]), R7;
  }
  var As = Le2 ? function(o10) {
    return o10 == null ? [] : (o10 = Object(o10), Hn(Le2(o10), function(u5) {
      return xe2.call(o10, u5);
    }));
  } : Ss, St2 = ce3;
  (en && St2(new en(new ArrayBuffer(1))) != se4 || ae4 && St2(new ae4()) != v6 || nn && St2(nn.resolve()) != T6 || rn && St2(new rn()) != I4 || sn && St2(new sn()) != Kt2) && (St2 = function(o10) {
    var u5 = ce3(o10), f11 = u5 == w11 ? o10.constructor : void 0, A11 = f11 ? tt2(f11) : "";
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
  function Ns(o10, u5) {
    return u5 = u5 ?? l5, !!u5 && (typeof o10 == "number" || Dn.test(o10)) && o10 > -1 && o10 % 1 == 0 && o10 < u5;
  }
  function ws(o10) {
    var u5 = typeof o10;
    return u5 == "string" || u5 == "number" || u5 == "symbol" || u5 == "boolean" ? o10 !== "__proto__" : o10 === null;
  }
  function Ts(o10) {
    return !!Vn && Vn in o10;
  }
  function xs(o10) {
    var u5 = o10 && o10.constructor, f11 = typeof u5 == "function" && u5.prototype || ie6;
    return o10 === f11;
  }
  function er(o10) {
    return Wn.call(o10);
  }
  function tt2(o10) {
    if (o10 != null) {
      try {
        return Qe.call(o10);
      } catch {
      }
      try {
        return o10 + "";
      } catch {
      }
    }
    return "";
  }
  function nr(o10, u5) {
    return o10 === u5 || o10 !== o10 && u5 !== u5;
  }
  var rr = Jn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Jn : function(o10) {
    return _t2(o10) && lt2.call(o10, "callee") && !xe2.call(o10, "callee");
  }, qe = Array.isArray;
  function un(o10) {
    return o10 != null && hn(o10.length) && !sr(o10);
  }
  var Ce2 = tn || _s;
  function Ls(o10, u5) {
    return tr(o10, u5);
  }
  function sr(o10) {
    if (!ir(o10))
      return false;
    var u5 = ce3(o10);
    return u5 == p3 || u5 == b10 || u5 == h7 || u5 == _10;
  }
  function hn(o10) {
    return typeof o10 == "number" && o10 > -1 && o10 % 1 == 0 && o10 <= l5;
  }
  function ir(o10) {
    var u5 = typeof o10;
    return o10 != null && (u5 == "object" || u5 == "function");
  }
  function _t2(o10) {
    return o10 != null && typeof o10 == "object";
  }
  var lr = Ze ? Hr(Ze) : bs;
  function fn(o10) {
    return un(o10) ? gs(o10) : ys(o10);
  }
  function Ss() {
    return [];
  }
  function _s() {
    return false;
  }
  n7.exports = Ls;
})(wr, wr.exports);
var _o = wr.exports;
var _i = {};
Object.defineProperty(_i, "__esModule", { value: true });
var Qf = So;
var Jf = _o;
var ei;
(function(n7) {
  function t8(i3 = {}, l5 = {}, a4 = false) {
    typeof i3 != "object" && (i3 = {}), typeof l5 != "object" && (l5 = {});
    let c9 = Qf(l5);
    a4 || (c9 = Object.keys(c9).reduce((h7, d8) => (c9[d8] != null && (h7[d8] = c9[d8]), h7), {}));
    for (const h7 in i3)
      i3[h7] !== void 0 && l5[h7] === void 0 && (c9[h7] = i3[h7]);
    return Object.keys(c9).length > 0 ? c9 : void 0;
  }
  n7.compose = t8;
  function e16(i3 = {}, l5 = {}) {
    typeof i3 != "object" && (i3 = {}), typeof l5 != "object" && (l5 = {});
    const a4 = Object.keys(i3).concat(Object.keys(l5)).reduce((c9, h7) => (Jf(i3[h7], l5[h7]) || (c9[h7] = l5[h7] === void 0 ? null : l5[h7]), c9), {});
    return Object.keys(a4).length > 0 ? a4 : void 0;
  }
  n7.diff = e16;
  function r7(i3 = {}, l5 = {}) {
    i3 = i3 || {};
    const a4 = Object.keys(l5).reduce((c9, h7) => (l5[h7] !== i3[h7] && i3[h7] !== void 0 && (c9[h7] = l5[h7]), c9), {});
    return Object.keys(i3).reduce((c9, h7) => (i3[h7] !== l5[h7] && l5[h7] === void 0 && (c9[h7] = null), c9), a4);
  }
  n7.invert = r7;
  function s12(i3, l5, a4 = false) {
    if (typeof i3 != "object")
      return l5;
    if (typeof l5 != "object")
      return;
    if (!a4)
      return l5;
    const c9 = Object.keys(l5).reduce((h7, d8) => (i3[d8] === void 0 && (h7[d8] = l5[d8]), h7), {});
    return Object.keys(c9).length > 0 ? c9 : void 0;
  }
  n7.transform = s12;
})(ei || (ei = {}));
_i.default = ei;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: true });
var ni;
(function(n7) {
  function t8(e16) {
    return typeof e16.delete == "number" ? e16.delete : typeof e16.retain == "number" ? e16.retain : typeof e16.retain == "object" && e16.retain !== null ? 1 : typeof e16.insert == "string" ? e16.insert.length : 1;
  }
  n7.length = t8;
})(ni || (ni = {}));
Cr.default = ni;
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: true });
var vl = Cr;
var td = class {
  constructor(t8) {
    this.ops = t8, this.index = 0, this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t8) {
    t8 || (t8 = 1 / 0);
    const e16 = this.ops[this.index];
    if (e16) {
      const r7 = this.offset, s12 = vl.default.length(e16);
      if (t8 >= s12 - r7 ? (t8 = s12 - r7, this.index += 1, this.offset = 0) : this.offset += t8, typeof e16.delete == "number")
        return { delete: t8 };
      {
        const i3 = {};
        return e16.attributes && (i3.attributes = e16.attributes), typeof e16.retain == "number" ? i3.retain = t8 : typeof e16.retain == "object" && e16.retain !== null ? i3.retain = e16.retain : typeof e16.insert == "string" ? i3.insert = e16.insert.substr(r7, t8) : i3.insert = e16.insert, i3;
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
    const t8 = this.ops[this.index];
    return t8 ? typeof t8.delete == "number" ? "delete" : typeof t8.retain == "number" || typeof t8.retain == "object" && t8.retain !== null ? "retain" : "insert" : "retain";
  }
  rest() {
    if (this.hasNext()) {
      if (this.offset === 0)
        return this.ops.slice(this.index);
      {
        const t8 = this.offset, e16 = this.index, r7 = this.next(), s12 = this.ops.slice(this.index);
        return this.offset = t8, this.index = e16, [r7].concat(s12);
      }
    } else return [];
  }
};
Oi.default = td;
(function(n7, t8) {
  Object.defineProperty(t8, "__esModule", { value: true }), t8.AttributeMap = t8.OpIterator = t8.Op = void 0;
  const e16 = Yf, r7 = So, s12 = _o, i3 = _i;
  t8.AttributeMap = i3.default;
  const l5 = Cr;
  t8.Op = l5.default;
  const a4 = Oi;
  t8.OpIterator = a4.default;
  const c9 = "\0", h7 = (m6, g10) => {
    if (typeof m6 != "object" || m6 === null)
      throw new Error(`cannot retain a ${typeof m6}`);
    if (typeof g10 != "object" || g10 === null)
      throw new Error(`cannot retain a ${typeof g10}`);
    const p3 = Object.keys(m6)[0];
    if (!p3 || p3 !== Object.keys(g10)[0])
      throw new Error(`embed types not matched: ${p3} != ${Object.keys(g10)[0]}`);
    return [p3, m6[p3], g10[p3]];
  };
  class d8 {
    constructor(g10) {
      Array.isArray(g10) ? this.ops = g10 : g10 != null && Array.isArray(g10.ops) ? this.ops = g10.ops : this.ops = [];
    }
    static registerEmbed(g10, p3) {
      this.handlers[g10] = p3;
    }
    static unregisterEmbed(g10) {
      delete this.handlers[g10];
    }
    static getHandler(g10) {
      const p3 = this.handlers[g10];
      if (!p3)
        throw new Error(`no handlers for embed type "${g10}"`);
      return p3;
    }
    insert(g10, p3) {
      const b10 = {};
      return typeof g10 == "string" && g10.length === 0 ? this : (b10.insert = g10, p3 != null && typeof p3 == "object" && Object.keys(p3).length > 0 && (b10.attributes = p3), this.push(b10));
    }
    delete(g10) {
      return g10 <= 0 ? this : this.push({ delete: g10 });
    }
    retain(g10, p3) {
      if (typeof g10 == "number" && g10 <= 0)
        return this;
      const b10 = { retain: g10 };
      return p3 != null && typeof p3 == "object" && Object.keys(p3).length > 0 && (b10.attributes = p3), this.push(b10);
    }
    push(g10) {
      let p3 = this.ops.length, b10 = this.ops[p3 - 1];
      if (g10 = r7(g10), typeof b10 == "object") {
        if (typeof g10.delete == "number" && typeof b10.delete == "number")
          return this.ops[p3 - 1] = { delete: b10.delete + g10.delete }, this;
        if (typeof b10.delete == "number" && g10.insert != null && (p3 -= 1, b10 = this.ops[p3 - 1], typeof b10 != "object"))
          return this.ops.unshift(g10), this;
        if (s12(g10.attributes, b10.attributes)) {
          if (typeof g10.insert == "string" && typeof b10.insert == "string")
            return this.ops[p3 - 1] = { insert: b10.insert + g10.insert }, typeof g10.attributes == "object" && (this.ops[p3 - 1].attributes = g10.attributes), this;
          if (typeof g10.retain == "number" && typeof b10.retain == "number")
            return this.ops[p3 - 1] = { retain: b10.retain + g10.retain }, typeof g10.attributes == "object" && (this.ops[p3 - 1].attributes = g10.attributes), this;
        }
      }
      return p3 === this.ops.length ? this.ops.push(g10) : this.ops.splice(p3, 0, g10), this;
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
      const p3 = [], b10 = [];
      return this.forEach((v6) => {
        (g10(v6) ? p3 : b10).push(v6);
      }), [p3, b10];
    }
    reduce(g10, p3) {
      return this.ops.reduce(g10, p3);
    }
    changeLength() {
      return this.reduce((g10, p3) => p3.insert ? g10 + l5.default.length(p3) : p3.delete ? g10 - p3.delete : g10, 0);
    }
    length() {
      return this.reduce((g10, p3) => g10 + l5.default.length(p3), 0);
    }
    slice(g10 = 0, p3 = 1 / 0) {
      const b10 = [], v6 = new a4.default(this.ops);
      let y4 = 0;
      for (; y4 < p3 && v6.hasNext(); ) {
        let E11;
        y4 < g10 ? E11 = v6.next(g10 - y4) : (E11 = v6.next(p3 - y4), b10.push(E11)), y4 += l5.default.length(E11);
      }
      return new d8(b10);
    }
    compose(g10) {
      const p3 = new a4.default(this.ops), b10 = new a4.default(g10.ops), v6 = [], y4 = b10.peek();
      if (y4 != null && typeof y4.retain == "number" && y4.attributes == null) {
        let w11 = y4.retain;
        for (; p3.peekType() === "insert" && p3.peekLength() <= w11; )
          w11 -= p3.peekLength(), v6.push(p3.next());
        y4.retain - w11 > 0 && b10.next(y4.retain - w11);
      }
      const E11 = new d8(v6);
      for (; p3.hasNext() || b10.hasNext(); )
        if (b10.peekType() === "insert")
          E11.push(b10.next());
        else if (p3.peekType() === "delete")
          E11.push(p3.next());
        else {
          const w11 = Math.min(p3.peekLength(), b10.peekLength()), T6 = p3.next(w11), _10 = b10.next(w11);
          if (_10.retain) {
            const L5 = {};
            if (typeof T6.retain == "number")
              L5.retain = typeof _10.retain == "number" ? w11 : _10.retain;
            else if (typeof _10.retain == "number")
              T6.retain == null ? L5.insert = T6.insert : L5.retain = T6.retain;
            else {
              const k6 = T6.retain == null ? "insert" : "retain", [U3, Bt2, Kt2] = h7(T6[k6], _10.retain), re6 = d8.getHandler(U3);
              L5[k6] = {
                [U3]: re6.compose(Bt2, Kt2, k6 === "retain")
              };
            }
            const I4 = i3.default.compose(T6.attributes, _10.attributes, typeof T6.retain == "number");
            if (I4 && (L5.attributes = I4), E11.push(L5), !b10.hasNext() && s12(E11.ops[E11.ops.length - 1], L5)) {
              const k6 = new d8(p3.rest());
              return E11.concat(k6).chop();
            }
          } else typeof _10.delete == "number" && (typeof T6.retain == "number" || typeof T6.retain == "object" && T6.retain !== null) && E11.push(_10);
        }
      return E11.chop();
    }
    concat(g10) {
      const p3 = new d8(this.ops.slice());
      return g10.ops.length > 0 && (p3.push(g10.ops[0]), p3.ops = p3.ops.concat(g10.ops.slice(1))), p3;
    }
    diff(g10, p3) {
      if (this.ops === g10.ops)
        return new d8();
      const b10 = [this, g10].map((T6) => T6.map((_10) => {
        if (_10.insert != null)
          return typeof _10.insert == "string" ? _10.insert : c9;
        const L5 = T6 === g10 ? "on" : "with";
        throw new Error("diff() called " + L5 + " non-document");
      }).join("")), v6 = new d8(), y4 = e16(b10[0], b10[1], p3, true), E11 = new a4.default(this.ops), w11 = new a4.default(g10.ops);
      return y4.forEach((T6) => {
        let _10 = T6[1].length;
        for (; _10 > 0; ) {
          let L5 = 0;
          switch (T6[0]) {
            case e16.INSERT:
              L5 = Math.min(w11.peekLength(), _10), v6.push(w11.next(L5));
              break;
            case e16.DELETE:
              L5 = Math.min(_10, E11.peekLength()), E11.next(L5), v6.delete(L5);
              break;
            case e16.EQUAL:
              L5 = Math.min(E11.peekLength(), w11.peekLength(), _10);
              const I4 = E11.next(L5), k6 = w11.next(L5);
              s12(I4.insert, k6.insert) ? v6.retain(L5, i3.default.diff(I4.attributes, k6.attributes)) : v6.push(k6).delete(L5);
              break;
          }
          _10 -= L5;
        }
      }), v6.chop();
    }
    eachLine(g10, p3 = `
`) {
      const b10 = new a4.default(this.ops);
      let v6 = new d8(), y4 = 0;
      for (; b10.hasNext(); ) {
        if (b10.peekType() !== "insert")
          return;
        const E11 = b10.peek(), w11 = l5.default.length(E11) - b10.peekLength(), T6 = typeof E11.insert == "string" ? E11.insert.indexOf(p3, w11) - w11 : -1;
        if (T6 < 0)
          v6.push(b10.next());
        else if (T6 > 0)
          v6.push(b10.next(T6));
        else {
          if (g10(v6, b10.next(1).attributes || {}, y4) === false)
            return;
          y4 += 1, v6 = new d8();
        }
      }
      v6.length() > 0 && g10(v6, {}, y4);
    }
    invert(g10) {
      const p3 = new d8();
      return this.reduce((b10, v6) => {
        if (v6.insert)
          p3.delete(l5.default.length(v6));
        else {
          if (typeof v6.retain == "number" && v6.attributes == null)
            return p3.retain(v6.retain), b10 + v6.retain;
          if (v6.delete || typeof v6.retain == "number") {
            const y4 = v6.delete || v6.retain;
            return g10.slice(b10, b10 + y4).forEach((w11) => {
              v6.delete ? p3.push(w11) : v6.retain && v6.attributes && p3.retain(l5.default.length(w11), i3.default.invert(v6.attributes, w11.attributes));
            }), b10 + y4;
          } else if (typeof v6.retain == "object" && v6.retain !== null) {
            const y4 = g10.slice(b10, b10 + 1), E11 = new a4.default(y4.ops).next(), [w11, T6, _10] = h7(v6.retain, E11.insert), L5 = d8.getHandler(w11);
            return p3.retain({ [w11]: L5.invert(T6, _10) }, i3.default.invert(v6.attributes, E11.attributes)), b10 + 1;
          }
        }
        return b10;
      }, 0), p3.chop();
    }
    transform(g10, p3 = false) {
      if (p3 = !!p3, typeof g10 == "number")
        return this.transformPosition(g10, p3);
      const b10 = g10, v6 = new a4.default(this.ops), y4 = new a4.default(b10.ops), E11 = new d8();
      for (; v6.hasNext() || y4.hasNext(); )
        if (v6.peekType() === "insert" && (p3 || y4.peekType() !== "insert"))
          E11.retain(l5.default.length(v6.next()));
        else if (y4.peekType() === "insert")
          E11.push(y4.next());
        else {
          const w11 = Math.min(v6.peekLength(), y4.peekLength()), T6 = v6.next(w11), _10 = y4.next(w11);
          if (T6.delete)
            continue;
          if (_10.delete)
            E11.push(_10);
          else {
            const L5 = T6.retain, I4 = _10.retain;
            let k6 = typeof I4 == "object" && I4 !== null ? I4 : w11;
            if (typeof L5 == "object" && L5 !== null && typeof I4 == "object" && I4 !== null) {
              const U3 = Object.keys(L5)[0];
              if (U3 === Object.keys(I4)[0]) {
                const Bt2 = d8.getHandler(U3);
                Bt2 && (k6 = {
                  [U3]: Bt2.transform(L5[U3], I4[U3], p3)
                });
              }
            }
            E11.retain(k6, i3.default.transform(T6.attributes, _10.attributes, p3));
          }
        }
      return E11.chop();
    }
    transformPosition(g10, p3 = false) {
      p3 = !!p3;
      const b10 = new a4.default(this.ops);
      let v6 = 0;
      for (; b10.hasNext() && v6 <= g10; ) {
        const y4 = b10.peekLength(), E11 = b10.peekType();
        if (b10.next(), E11 === "delete") {
          g10 -= Math.min(y4, g10 - v6);
          continue;
        } else E11 === "insert" && (v6 < g10 || !p3) && (g10 += y4);
        v6 += y4;
      }
      return g10;
    }
  }
  d8.Op = l5.default, d8.OpIterator = a4.default, d8.AttributeMap = i3.default, d8.handlers = {}, t8.default = d8, n7.exports = d8, n7.exports.default = d8;
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
function Ir(n7) {
  return n7.replace(/[&<>"']/g, (t8) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[t8]);
}
var Ot2 = class Ot3 extends Ti {
  static compare(t8, e16) {
    const r7 = Ot3.order.indexOf(t8), s12 = Ot3.order.indexOf(e16);
    return r7 >= 0 || s12 >= 0 ? r7 - s12 : t8 === e16 ? 0 : t8 < e16 ? -1 : 1;
  }
  formatAt(t8, e16, r7, s12) {
    if (Ot3.compare(this.statics.blotName, r7) < 0 && this.scroll.query(r7, q5.BLOT)) {
      const i3 = this.isolate(t8, e16);
      s12 && i3.wrap(r7, s12);
    } else
      super.formatAt(t8, e16, r7, s12);
  }
  optimize(t8) {
    if (super.optimize(t8), this.parent instanceof Ot3 && Ot3.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e16 = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e16), e16.wrap(this);
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
  deleteAt(e16, r7) {
    super.deleteAt(e16, r7), this.cache = {};
  }
  formatAt(e16, r7, s12, i3) {
    r7 <= 0 || (this.scroll.query(s12, q5.BLOCK) ? e16 + r7 === this.length() && this.format(s12, i3) : super.formatAt(e16, Math.min(r7, this.length() - e16 - 1), s12, i3), this.cache = {});
  }
  insertAt(e16, r7, s12) {
    if (s12 != null) {
      super.insertAt(e16, r7, s12), this.cache = {};
      return;
    }
    if (r7.length === 0) return;
    const i3 = r7.split(`
`), l5 = i3.shift();
    l5.length > 0 && (e16 < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(e16, this.length() - 1), l5) : this.children.tail.insertAt(this.children.tail.length(), l5), this.cache = {});
    let a4 = this;
    i3.reduce((c9, h7) => (a4 = a4.split(c9, true), a4.insertAt(0, h7), h7.length), e16 + l5.length);
  }
  insertBefore(e16, r7) {
    const {
      head: s12
    } = this.children;
    super.insertBefore(e16, r7), s12 instanceof wt && s12.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + El), this.cache.length;
  }
  moveChildren(e16, r7) {
    super.moveChildren(e16, r7), this.cache = {};
  }
  optimize(e16) {
    super.optimize(e16), this.cache = {};
  }
  path(e16) {
    return super.path(e16, true);
  }
  removeChild(e16) {
    super.removeChild(e16), this.cache = {};
  }
  split(e16) {
    let r7 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (r7 && (e16 === 0 || e16 >= this.length() - El)) {
      const i3 = this.clone();
      return e16 === 0 ? (this.parent.insertBefore(i3, this), this) : (this.parent.insertBefore(i3, this.next), i3);
    }
    const s12 = super.split(e16, r7);
    return this.cache = {}, s12;
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
  format(t8, e16) {
    const r7 = this.scroll.query(t8, q5.BLOCK_ATTRIBUTE);
    r7 != null && this.attributes.attribute(r7, e16);
  }
  formatAt(t8, e16, r7, s12) {
    this.format(r7, s12);
  }
  insertAt(t8, e16, r7) {
    if (r7 != null) {
      super.insertAt(t8, e16, r7);
      return;
    }
    const s12 = e16.split(`
`), i3 = s12.pop(), l5 = s12.map((c9) => {
      const h7 = this.scroll.create(W2.blotName);
      return h7.insertAt(0, c9), h7;
    }), a4 = this.split(t8);
    l5.forEach((c9) => {
      this.parent.insertBefore(c9, a4);
    }), i3 && this.parent.insertBefore(this.scroll.create("text", i3), a4);
  }
};
ut2.scope = q5.BLOCK_BLOT;
function Oo(n7) {
  let t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return n7.descendants(Q3).reduce((e16, r7) => r7.length() === 0 ? e16 : e16.insert(r7.value(), at2(r7, {}, t8)), new O4()).insert(`
`, at2(n7));
}
function at2(n7) {
  let t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e16 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  return n7 == null || ("formats" in n7 && typeof n7.formats == "function" && (t8 = {
    ...t8,
    ...n7.formats()
  }, e16 && delete t8["code-token"]), n7.parent == null || n7.parent.statics.blotName === "scroll" || n7.parent.statics.scope !== n7.statics.scope) ? t8 : at2(n7.parent, t8, e16);
}
var ot2 = class ot3 extends it2 {
  // Zero width no break space
  static value() {
  }
  constructor(t8, e16, r7) {
    super(t8, e16), this.selection = r7, this.textNode = document.createTextNode(ot3.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t8, e16) {
    if (this.savedLength !== 0) {
      super.format(t8, e16);
      return;
    }
    let r7 = this, s12 = 0;
    for (; r7 != null && r7.statics.scope !== q5.BLOCK_BLOT; )
      s12 += r7.offset(r7.parent), r7 = r7.parent;
    r7 != null && (this.savedLength = ot3.CONTENTS.length, r7.optimize(), r7.formatAt(s12, ot3.CONTENTS.length, t8, e16), this.savedLength = 0);
  }
  index(t8, e16) {
    return t8 === this.textNode ? 0 : super.index(t8, e16);
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
    const t8 = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e16 = this.prev instanceof At2 ? this.prev : null, r7 = e16 ? e16.length() : 0, s12 = this.next instanceof At2 ? this.next : null, i3 = s12 ? s12.text : "", {
      textNode: l5
    } = this, a4 = l5.data.split(ot3.CONTENTS).join("");
    l5.data = ot3.CONTENTS;
    let c9;
    if (e16)
      c9 = e16, (a4 || s12) && (e16.insertAt(e16.length(), a4 + i3), s12 && s12.remove());
    else if (s12)
      c9 = s12, s12.insertAt(0, a4);
    else {
      const h7 = document.createTextNode(a4);
      c9 = this.scroll.create(h7), this.parent.insertBefore(c9, this);
    }
    if (this.remove(), t8) {
      const h7 = (g10, p3) => e16 && g10 === e16.domNode ? p3 : g10 === l5 ? r7 + p3 - 1 : s12 && g10 === s12.domNode ? r7 + a4.length + p3 : null, d8 = h7(t8.start.node, t8.start.offset), m6 = h7(t8.end.node, t8.end.offset);
      if (d8 !== null && m6 !== null)
        return {
          startNode: c9.domNode,
          startOffset: d8,
          endNode: c9.domNode,
          endOffset: m6
        };
    }
    return null;
  }
  update(t8, e16) {
    if (t8.some((r7) => r7.type === "characterData" && r7.target === this.textNode)) {
      const r7 = this.restore();
      r7 && (e16.range = r7);
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
  optimize(t8) {
    super.optimize(t8);
    let {
      parent: e16
    } = this;
    for (; e16; ) {
      if (e16.domNode.tagName === "A") {
        this.savedLength = ot3.CONTENTS.length, e16.isolate(this.offset(e16), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e16 = e16.parent;
    }
  }
  value() {
    return "";
  }
};
x8(ot2, "blotName", "cursor"), x8(ot2, "className", "ql-cursor"), x8(ot2, "tagName", "span"), x8(ot2, "CONTENTS", "\uFEFF");
var He = ot2;
var qo = { exports: {} };
(function(n7) {
  var t8 = Object.prototype.hasOwnProperty, e16 = "~";
  function r7() {
  }
  Object.create && (r7.prototype = /* @__PURE__ */ Object.create(null), new r7().__proto__ || (e16 = false));
  function s12(c9, h7, d8) {
    this.fn = c9, this.context = h7, this.once = d8 || false;
  }
  function i3(c9, h7, d8, m6, g10) {
    if (typeof d8 != "function")
      throw new TypeError("The listener must be a function");
    var p3 = new s12(d8, m6 || c9, g10), b10 = e16 ? e16 + h7 : h7;
    return c9._events[b10] ? c9._events[b10].fn ? c9._events[b10] = [c9._events[b10], p3] : c9._events[b10].push(p3) : (c9._events[b10] = p3, c9._eventsCount++), c9;
  }
  function l5(c9, h7) {
    --c9._eventsCount === 0 ? c9._events = new r7() : delete c9._events[h7];
  }
  function a4() {
    this._events = new r7(), this._eventsCount = 0;
  }
  a4.prototype.eventNames = function() {
    var h7 = [], d8, m6;
    if (this._eventsCount === 0) return h7;
    for (m6 in d8 = this._events)
      t8.call(d8, m6) && h7.push(e16 ? m6.slice(1) : m6);
    return Object.getOwnPropertySymbols ? h7.concat(Object.getOwnPropertySymbols(d8)) : h7;
  }, a4.prototype.listeners = function(h7) {
    var d8 = e16 ? e16 + h7 : h7, m6 = this._events[d8];
    if (!m6) return [];
    if (m6.fn) return [m6.fn];
    for (var g10 = 0, p3 = m6.length, b10 = new Array(p3); g10 < p3; g10++)
      b10[g10] = m6[g10].fn;
    return b10;
  }, a4.prototype.listenerCount = function(h7) {
    var d8 = e16 ? e16 + h7 : h7, m6 = this._events[d8];
    return m6 ? m6.fn ? 1 : m6.length : 0;
  }, a4.prototype.emit = function(h7, d8, m6, g10, p3, b10) {
    var v6 = e16 ? e16 + h7 : h7;
    if (!this._events[v6]) return false;
    var y4 = this._events[v6], E11 = arguments.length, w11, T6;
    if (y4.fn) {
      switch (y4.once && this.removeListener(h7, y4.fn, void 0, true), E11) {
        case 1:
          return y4.fn.call(y4.context), true;
        case 2:
          return y4.fn.call(y4.context, d8), true;
        case 3:
          return y4.fn.call(y4.context, d8, m6), true;
        case 4:
          return y4.fn.call(y4.context, d8, m6, g10), true;
        case 5:
          return y4.fn.call(y4.context, d8, m6, g10, p3), true;
        case 6:
          return y4.fn.call(y4.context, d8, m6, g10, p3, b10), true;
      }
      for (T6 = 1, w11 = new Array(E11 - 1); T6 < E11; T6++)
        w11[T6 - 1] = arguments[T6];
      y4.fn.apply(y4.context, w11);
    } else {
      var _10 = y4.length, L5;
      for (T6 = 0; T6 < _10; T6++)
        switch (y4[T6].once && this.removeListener(h7, y4[T6].fn, void 0, true), E11) {
          case 1:
            y4[T6].fn.call(y4[T6].context);
            break;
          case 2:
            y4[T6].fn.call(y4[T6].context, d8);
            break;
          case 3:
            y4[T6].fn.call(y4[T6].context, d8, m6);
            break;
          case 4:
            y4[T6].fn.call(y4[T6].context, d8, m6, g10);
            break;
          default:
            if (!w11) for (L5 = 1, w11 = new Array(E11 - 1); L5 < E11; L5++)
              w11[L5 - 1] = arguments[L5];
            y4[T6].fn.apply(y4[T6].context, w11);
        }
    }
    return true;
  }, a4.prototype.on = function(h7, d8, m6) {
    return i3(this, h7, d8, m6, false);
  }, a4.prototype.once = function(h7, d8, m6) {
    return i3(this, h7, d8, m6, true);
  }, a4.prototype.removeListener = function(h7, d8, m6, g10) {
    var p3 = e16 ? e16 + h7 : h7;
    if (!this._events[p3]) return this;
    if (!d8)
      return l5(this, p3), this;
    var b10 = this._events[p3];
    if (b10.fn)
      b10.fn === d8 && (!g10 || b10.once) && (!m6 || b10.context === m6) && l5(this, p3);
    else {
      for (var v6 = 0, y4 = [], E11 = b10.length; v6 < E11; v6++)
        (b10[v6].fn !== d8 || g10 && !b10[v6].once || m6 && b10[v6].context !== m6) && y4.push(b10[v6]);
      y4.length ? this._events[p3] = y4.length === 1 ? y4[0] : y4 : l5(this, p3);
    }
    return this;
  }, a4.prototype.removeAllListeners = function(h7) {
    var d8;
    return h7 ? (d8 = e16 ? e16 + h7 : h7, this._events[d8] && l5(this, d8)) : (this._events = new r7(), this._eventsCount = 0), this;
  }, a4.prototype.off = a4.prototype.removeListener, a4.prototype.addListener = a4.prototype.on, a4.prefixed = e16, a4.EventEmitter = a4, n7.exports = a4;
})(qo);
var ed = qo.exports;
var nd = No(ed);
var ri = /* @__PURE__ */ new WeakMap();
var si = ["error", "warn", "log", "info"];
var ii = "warn";
function Co(n7) {
  if (ii && si.indexOf(n7) <= si.indexOf(ii)) {
    for (var t8 = arguments.length, e16 = new Array(t8 > 1 ? t8 - 1 : 0), r7 = 1; r7 < t8; r7++)
      e16[r7 - 1] = arguments[r7];
    console[n7](...e16);
  }
}
function Gt2(n7) {
  return si.reduce((t8, e16) => (t8[e16] = Co.bind(console, e16, n7), t8), {});
}
Gt2.level = (n7) => {
  ii = n7;
};
Co.level = Gt2.level;
var ks = Gt2("quill:events");
var rd = ["selectionchange", "mousedown", "mouseup", "click"];
rd.forEach((n7) => {
  document.addEventListener(n7, function() {
    for (var t8 = arguments.length, e16 = new Array(t8), r7 = 0; r7 < t8; r7++)
      e16[r7] = arguments[r7];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s12) => {
      const i3 = ri.get(s12);
      i3 && i3.emitter && i3.emitter.handleDOM(...e16);
    });
  });
});
var S6 = class extends nd {
  constructor() {
    super(), this.domListeners = {}, this.on("error", ks.error);
  }
  emit() {
    for (var t8 = arguments.length, e16 = new Array(t8), r7 = 0; r7 < t8; r7++)
      e16[r7] = arguments[r7];
    return ks.log.call(ks, ...e16), super.emit(...e16);
  }
  handleDOM(t8) {
    for (var e16 = arguments.length, r7 = new Array(e16 > 1 ? e16 - 1 : 0), s12 = 1; s12 < e16; s12++)
      r7[s12 - 1] = arguments[s12];
    (this.domListeners[t8.type] || []).forEach((i3) => {
      let {
        node: l5,
        handler: a4
      } = i3;
      (t8.target === l5 || l5.contains(t8.target)) && a4(t8, ...r7);
    });
  }
  listenDOM(t8, e16, r7) {
    this.domListeners[t8] || (this.domListeners[t8] = []), this.domListeners[t8].push({
      node: e16,
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
  constructor(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t8, this.length = e16;
  }
};
var sd = class {
  constructor(t8, e16) {
    this.emitter = e16, this.scroll = t8, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new ge2(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, S6.sources.USER), 1);
    }), this.emitter.on(S6.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const r7 = this.getNativeRange();
      r7 != null && r7.start.node !== this.cursor.textNode && this.emitter.once(S6.events.SCROLL_UPDATE, (s12, i3) => {
        try {
          this.root.contains(r7.start.node) && this.root.contains(r7.end.node) && this.setNativeRange(r7.start.node, r7.start.offset, r7.end.node, r7.end.offset);
          const l5 = i3.some((a4) => a4.type === "characterData" || a4.type === "childList" || a4.type === "attributes" && a4.target === this.root);
          this.update(l5 ? S6.sources.SILENT : s12);
        } catch {
        }
      });
    }), this.emitter.on(S6.events.SCROLL_OPTIMIZE, (r7, s12) => {
      if (s12.range) {
        const {
          startNode: i3,
          startOffset: l5,
          endNode: a4,
          endOffset: c9
        } = s12.range;
        this.setNativeRange(i3, l5, a4, c9), this.update(S6.sources.SILENT);
      }
    }), this.update(S6.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(S6.events.COMPOSITION_BEFORE_START, () => {
      this.composing = true;
    }), this.emitter.on(S6.events.COMPOSITION_END, () => {
      if (this.composing = false, this.cursor.parent) {
        const t8 = this.cursor.restore();
        if (!t8) return;
        setTimeout(() => {
          this.setNativeRange(t8.startNode, t8.startOffset, t8.endNode, t8.endOffset);
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
  format(t8, e16) {
    this.scroll.update();
    const r7 = this.getNativeRange();
    if (!(r7 == null || !r7.native.collapsed || this.scroll.query(t8, q5.BLOCK))) {
      if (r7.start.node !== this.cursor.textNode) {
        const s12 = this.scroll.find(r7.start.node, false);
        if (s12 == null) return;
        if (s12 instanceof Q3) {
          const i3 = s12.split(r7.start.offset);
          s12.parent.insertBefore(this.cursor, i3);
        } else
          s12.insertBefore(this.cursor, r7.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t8, e16), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r7 = this.scroll.length();
    t8 = Math.min(t8, r7 - 1), e16 = Math.min(t8 + e16, r7 - 1) - t8;
    let s12, [i3, l5] = this.scroll.leaf(t8);
    if (i3 == null) return null;
    if (e16 > 0 && l5 === i3.length()) {
      const [d8] = this.scroll.leaf(t8 + 1);
      if (d8) {
        const [m6] = this.scroll.line(t8), [g10] = this.scroll.line(t8 + 1);
        m6 === g10 && (i3 = d8, l5 = 0);
      }
    }
    [s12, l5] = i3.position(l5, true);
    const a4 = document.createRange();
    if (e16 > 0)
      return a4.setStart(s12, l5), [i3, l5] = this.scroll.leaf(t8 + e16), i3 == null ? null : ([s12, l5] = i3.position(l5, true), a4.setEnd(s12, l5), a4.getBoundingClientRect());
    let c9 = "left", h7;
    if (s12 instanceof Text) {
      if (!s12.data.length)
        return null;
      l5 < s12.data.length ? (a4.setStart(s12, l5), a4.setEnd(s12, l5 + 1)) : (a4.setStart(s12, l5 - 1), a4.setEnd(s12, l5), c9 = "right"), h7 = a4.getBoundingClientRect();
    } else {
      if (!(i3.domNode instanceof Element)) return null;
      h7 = i3.domNode.getBoundingClientRect(), l5 > 0 && (c9 = "right");
    }
    return {
      bottom: h7.top + h7.height,
      height: h7.height,
      left: h7[c9],
      right: h7[c9],
      top: h7.top,
      width: 0
    };
  }
  getNativeRange() {
    const t8 = document.getSelection();
    if (t8 == null || t8.rangeCount <= 0) return null;
    const e16 = t8.getRangeAt(0);
    if (e16 == null) return null;
    const r7 = this.normalizeNative(e16);
    return Bs.info("getNativeRange", r7), r7;
  }
  getRange() {
    const t8 = this.scroll.domNode;
    if ("isConnected" in t8 && !t8.isConnected)
      return [null, null];
    const e16 = this.getNativeRange();
    return e16 == null ? [null, null] : [this.normalizedToRange(e16), e16];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ms(this.root, document.activeElement);
  }
  normalizedToRange(t8) {
    const e16 = [[t8.start.node, t8.start.offset]];
    t8.native.collapsed || e16.push([t8.end.node, t8.end.offset]);
    const r7 = e16.map((l5) => {
      const [a4, c9] = l5, h7 = this.scroll.find(a4, true), d8 = h7.offset(this.scroll);
      return c9 === 0 ? d8 : h7 instanceof Q3 ? d8 + h7.index(a4, c9) : d8 + h7.length();
    }), s12 = Math.min(Math.max(...r7), this.scroll.length() - 1), i3 = Math.min(s12, ...r7);
    return new ge2(i3, s12 - i3);
  }
  normalizeNative(t8) {
    if (!Ms(this.root, t8.startContainer) || !t8.collapsed && !Ms(this.root, t8.endContainer))
      return null;
    const e16 = {
      start: {
        node: t8.startContainer,
        offset: t8.startOffset
      },
      end: {
        node: t8.endContainer,
        offset: t8.endOffset
      },
      native: t8
    };
    return [e16.start, e16.end].forEach((r7) => {
      let {
        node: s12,
        offset: i3
      } = r7;
      for (; !(s12 instanceof Text) && s12.childNodes.length > 0; )
        if (s12.childNodes.length > i3)
          s12 = s12.childNodes[i3], i3 = 0;
        else if (s12.childNodes.length === i3)
          s12 = s12.lastChild, s12 instanceof Text ? i3 = s12.data.length : s12.childNodes.length > 0 ? i3 = s12.childNodes.length : i3 = s12.childNodes.length + 1;
        else
          break;
      r7.node = s12, r7.offset = i3;
    }), e16;
  }
  rangeToNative(t8) {
    const e16 = this.scroll.length(), r7 = (s12, i3) => {
      s12 = Math.min(e16 - 1, s12);
      const [l5, a4] = this.scroll.leaf(s12);
      return l5 ? l5.position(a4, i3) : [null, -1];
    };
    return [...r7(t8.index, false), ...r7(t8.index + t8.length, true)];
  }
  setNativeRange(t8, e16) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t8, s12 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e16, i3 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (Bs.info("setNativeRange", t8, e16, r7, s12), t8 != null && (this.root.parentNode == null || t8.parentNode == null || // @ts-expect-error Fix me later
    r7.parentNode == null))
      return;
    const l5 = document.getSelection();
    if (l5 != null)
      if (t8 != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: true
        });
        const {
          native: a4
        } = this.getNativeRange() || {};
        if (a4 == null || i3 || t8 !== a4.startContainer || e16 !== a4.startOffset || r7 !== a4.endContainer || s12 !== a4.endOffset) {
          t8 instanceof Element && t8.tagName === "BR" && (e16 = Array.from(t8.parentNode.childNodes).indexOf(t8), t8 = t8.parentNode), r7 instanceof Element && r7.tagName === "BR" && (s12 = Array.from(r7.parentNode.childNodes).indexOf(r7), r7 = r7.parentNode);
          const c9 = document.createRange();
          c9.setStart(t8, e16), c9.setEnd(r7, s12), l5.removeAllRanges(), l5.addRange(c9);
        }
      } else
        l5.removeAllRanges(), this.root.blur();
  }
  setRange(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S6.sources.API;
    if (typeof e16 == "string" && (r7 = e16, e16 = false), Bs.info("setRange", t8), t8 != null) {
      const s12 = this.rangeToNative(t8);
      this.setNativeRange(...s12, e16);
    } else
      this.setNativeRange(null);
    this.update(r7);
  }
  update() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S6.sources.USER;
    const e16 = this.lastRange, [r7, s12] = this.getRange();
    if (this.lastRange = r7, this.lastNative = s12, this.lastRange != null && (this.savedRange = this.lastRange), !wi(e16, this.lastRange)) {
      if (!this.composing && s12 != null && s12.native.collapsed && s12.start.node !== this.cursor.textNode) {
        const l5 = this.cursor.restore();
        l5 && this.setNativeRange(l5.startNode, l5.startOffset, l5.endNode, l5.endOffset);
      }
      const i3 = [S6.events.SELECTION_CHANGE, De3(this.lastRange), De3(e16), t8];
      this.emitter.emit(S6.events.EDITOR_CHANGE, ...i3), t8 !== S6.sources.SILENT && this.emitter.emit(...i3);
    }
  }
};
function Ms(n7, t8) {
  try {
    t8.parentNode;
  } catch {
    return false;
  }
  return n7.contains(t8);
}
var id = /^[ -~]*$/;
var ld = class {
  constructor(t8) {
    this.scroll = t8, this.delta = this.getDelta();
  }
  applyDelta(t8) {
    this.scroll.update();
    let e16 = this.scroll.length();
    this.scroll.batchStart();
    const r7 = Al(t8), s12 = new O4();
    return ad(r7.ops.slice()).reduce((l5, a4) => {
      const c9 = ht.Op.length(a4);
      let h7 = a4.attributes || {}, d8 = false, m6 = false;
      if (a4.insert != null) {
        if (s12.retain(c9), typeof a4.insert == "string") {
          const b10 = a4.insert;
          m6 = !b10.endsWith(`
`) && (e16 <= l5 || !!this.scroll.descendant(ut2, l5)[0]), this.scroll.insertAt(l5, b10);
          const [v6, y4] = this.scroll.line(l5);
          let E11 = Jt2({}, at2(v6));
          if (v6 instanceof W2) {
            const [w11] = v6.descendant(Q3, y4);
            w11 && (E11 = Jt2(E11, at2(w11)));
          }
          h7 = ht.AttributeMap.diff(E11, h7) || {};
        } else if (typeof a4.insert == "object") {
          const b10 = Object.keys(a4.insert)[0];
          if (b10 == null) return l5;
          const v6 = this.scroll.query(b10, q5.INLINE) != null;
          if (v6)
            (e16 <= l5 || this.scroll.descendant(ut2, l5)[0]) && (m6 = true);
          else if (l5 > 0) {
            const [y4, E11] = this.scroll.descendant(Q3, l5 - 1);
            y4 instanceof At2 ? y4.value()[E11] !== `
` && (d8 = true) : y4 instanceof it2 && y4.statics.scope === q5.INLINE_BLOT && (d8 = true);
          }
          if (this.scroll.insertAt(l5, b10, a4.insert[b10]), v6) {
            const [y4] = this.scroll.descendant(Q3, l5);
            if (y4) {
              const E11 = Jt2({}, at2(y4));
              h7 = ht.AttributeMap.diff(E11, h7) || {};
            }
          }
        }
        e16 += c9;
      } else if (s12.push(a4), a4.retain !== null && typeof a4.retain == "object") {
        const b10 = Object.keys(a4.retain)[0];
        if (b10 == null) return l5;
        this.scroll.updateEmbedAt(l5, b10, a4.retain[b10]);
      }
      Object.keys(h7).forEach((b10) => {
        this.scroll.formatAt(l5, c9, b10, h7[b10]);
      });
      const g10 = d8 ? 1 : 0, p3 = m6 ? 1 : 0;
      return e16 += g10 + p3, s12.retain(g10), s12.delete(p3), l5 + c9 + g10 + p3;
    }, 0), s12.reduce((l5, a4) => typeof a4.delete == "number" ? (this.scroll.deleteAt(l5, a4.delete), l5) : l5 + ht.Op.length(a4), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r7);
  }
  deleteText(t8, e16) {
    return this.scroll.deleteAt(t8, e16), this.update(new O4().retain(t8).delete(e16));
  }
  formatLine(t8, e16) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r7).forEach((i3) => {
      this.scroll.lines(t8, Math.max(e16, 1)).forEach((l5) => {
        l5.format(i3, r7[i3]);
      });
    }), this.scroll.optimize();
    const s12 = new O4().retain(t8).retain(e16, De3(r7));
    return this.update(s12);
  }
  formatText(t8, e16) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r7).forEach((i3) => {
      this.scroll.formatAt(t8, e16, i3, r7[i3]);
    });
    const s12 = new O4().retain(t8).retain(e16, De3(r7));
    return this.update(s12);
  }
  getContents(t8, e16) {
    return this.delta.slice(t8, t8 + e16);
  }
  getDelta() {
    return this.scroll.lines().reduce((t8, e16) => t8.concat(e16.delta()), new O4());
  }
  getFormat(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r7 = [], s12 = [];
    e16 === 0 ? this.scroll.path(t8).forEach((a4) => {
      const [c9] = a4;
      c9 instanceof W2 ? r7.push(c9) : c9 instanceof Q3 && s12.push(c9);
    }) : (r7 = this.scroll.lines(t8, e16), s12 = this.scroll.descendants(Q3, t8, e16));
    const [i3, l5] = [r7, s12].map((a4) => {
      const c9 = a4.shift();
      if (c9 == null) return {};
      let h7 = at2(c9);
      for (; Object.keys(h7).length > 0; ) {
        const d8 = a4.shift();
        if (d8 == null) return h7;
        h7 = od(at2(d8), h7);
      }
      return h7;
    });
    return {
      ...i3,
      ...l5
    };
  }
  getHTML(t8, e16) {
    const [r7, s12] = this.scroll.line(t8);
    if (r7) {
      const i3 = r7.length();
      return r7.length() >= s12 + e16 && !(s12 === 0 && e16 === i3) ? xn(r7, s12, e16, true) : xn(this.scroll, t8, e16, true);
    }
    return "";
  }
  getText(t8, e16) {
    return this.getContents(t8, e16).filter((r7) => typeof r7.insert == "string").map((r7) => r7.insert).join("");
  }
  insertContents(t8, e16) {
    const r7 = Al(e16), s12 = new O4().retain(t8).concat(r7);
    return this.scroll.insertContents(t8, r7), this.update(s12);
  }
  insertEmbed(t8, e16, r7) {
    return this.scroll.insertAt(t8, e16, r7), this.update(new O4().retain(t8).insert({
      [e16]: r7
    }));
  }
  insertText(t8, e16) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e16 = e16.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t8, e16), Object.keys(r7).forEach((s12) => {
      this.scroll.formatAt(t8, e16.length, s12, r7[s12]);
    }), this.update(new O4().retain(t8).insert(e16, De3(r7)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return true;
    if (this.scroll.children.length > 1) return false;
    const t8 = this.scroll.children.head;
    if ((t8 == null ? void 0 : t8.statics.blotName) !== W2.blotName) return false;
    const e16 = t8;
    return e16.children.length > 1 ? false : e16.children.head instanceof wt;
  }
  removeFormat(t8, e16) {
    const r7 = this.getText(t8, e16), [s12, i3] = this.scroll.line(t8 + e16);
    let l5 = 0, a4 = new O4();
    s12 != null && (l5 = s12.length() - i3, a4 = s12.delta().slice(i3, i3 + l5 - 1).insert(`
`));
    const h7 = this.getContents(t8, e16 + l5).diff(new O4().insert(r7).concat(a4)), d8 = new O4().retain(t8).concat(h7);
    return this.applyDelta(d8);
  }
  update(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s12 = this.delta;
    if (e16.length === 1 && e16[0].type === "characterData" && // @ts-expect-error Fix me later
    e16[0].target.data.match(id) && this.scroll.find(e16[0].target)) {
      const i3 = this.scroll.find(e16[0].target), l5 = at2(i3), a4 = i3.offset(this.scroll), c9 = e16[0].oldValue.replace(He.CONTENTS, ""), h7 = new O4().insert(c9), d8 = new O4().insert(i3.value()), m6 = r7 && {
        oldRange: Nl(r7.oldRange, -a4),
        newRange: Nl(r7.newRange, -a4)
      };
      t8 = new O4().retain(a4).concat(h7.diff(d8, m6)).reduce((p3, b10) => b10.insert ? p3.insert(b10.insert, l5) : p3.push(b10), new O4()), this.delta = s12.compose(t8);
    } else
      this.delta = this.getDelta(), (!t8 || !wi(s12.compose(t8), this.delta)) && (t8 = s12.diff(this.delta, r7));
    return t8;
  }
};
function Me(n7, t8, e16) {
  if (n7.length === 0) {
    const [p3] = $s(e16.pop());
    return t8 <= 0 ? `</li></${p3}>` : `</li></${p3}>${Me([], t8 - 1, e16)}`;
  }
  const [{
    child: r7,
    offset: s12,
    length: i3,
    indent: l5,
    type: a4
  }, ...c9] = n7, [h7, d8] = $s(a4);
  if (l5 > t8)
    return e16.push(a4), l5 === t8 + 1 ? `<${h7}><li${d8}>${xn(r7, s12, i3)}${Me(c9, l5, e16)}` : `<${h7}><li>${Me(n7, t8 + 1, e16)}`;
  const m6 = e16[e16.length - 1];
  if (l5 === t8 && a4 === m6)
    return `</li><li${d8}>${xn(r7, s12, i3)}${Me(c9, l5, e16)}`;
  const [g10] = $s(e16.pop());
  return `</li></${g10}>${Me(n7, t8 - 1, e16)}`;
}
function xn(n7, t8, e16) {
  let r7 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if ("html" in n7 && typeof n7.html == "function")
    return n7.html(t8, e16);
  if (n7 instanceof At2)
    return Ir(n7.value().slice(t8, t8 + e16));
  if (n7 instanceof Et2) {
    if (n7.statics.blotName === "list-container") {
      const h7 = [];
      return n7.children.forEachAt(t8, e16, (d8, m6, g10) => {
        const p3 = "formats" in d8 && typeof d8.formats == "function" ? d8.formats() : {};
        h7.push({
          child: d8,
          offset: m6,
          length: g10,
          indent: p3.indent || 0,
          type: p3.list
        });
      }), Me(h7, -1, []);
    }
    const s12 = [];
    if (n7.children.forEachAt(t8, e16, (h7, d8, m6) => {
      s12.push(xn(h7, d8, m6));
    }), r7 || n7.statics.blotName === "list")
      return s12.join("");
    const {
      outerHTML: i3,
      innerHTML: l5
    } = n7.domNode, [a4, c9] = i3.split(`>${l5}<`);
    return a4 === "<table" ? `<table style="border: 1px solid #000;">${s12.join("")}<${c9}` : `${a4}>${s12.join("")}<${c9}`;
  }
  return n7.domNode instanceof Element ? n7.domNode.outerHTML : "";
}
function od(n7, t8) {
  return Object.keys(t8).reduce((e16, r7) => {
    if (n7[r7] == null) return e16;
    const s12 = t8[r7];
    return s12 === n7[r7] ? e16[r7] = s12 : Array.isArray(s12) ? s12.indexOf(n7[r7]) < 0 ? e16[r7] = s12.concat([n7[r7]]) : e16[r7] = s12 : e16[r7] = [s12, n7[r7]], e16;
  }, {});
}
function $s(n7) {
  const t8 = n7 === "ordered" ? "ol" : "ul";
  switch (n7) {
    case "checked":
      return [t8, ' data-list="checked"'];
    case "unchecked":
      return [t8, ' data-list="unchecked"'];
    default:
      return [t8, ""];
  }
}
function Al(n7) {
  return n7.reduce((t8, e16) => {
    if (typeof e16.insert == "string") {
      const r7 = e16.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t8.insert(r7, e16.attributes);
    }
    return t8.push(e16);
  }, new O4());
}
function Nl(n7, t8) {
  let {
    index: e16,
    length: r7
  } = n7;
  return new ge2(e16 + t8, r7);
}
function ad(n7) {
  const t8 = [];
  return n7.forEach((e16) => {
    typeof e16.insert == "string" ? e16.insert.split(`
`).forEach((s12, i3) => {
      i3 && t8.push({
        insert: `
`,
        attributes: e16.attributes
      }), s12 && t8.push({
        insert: s12,
        attributes: e16.attributes
      });
    }) : t8.push(e16);
  }), t8;
}
var Tt2 = class {
  constructor(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t8, this.options = e16;
  }
};
x8(Tt2, "DEFAULTS", {});
var ur = "\uFEFF";
var qi = class extends it2 {
  constructor(t8, e16) {
    super(t8, e16), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r7) => {
      this.contentNode.appendChild(r7);
    }), this.leftGuard = document.createTextNode(ur), this.rightGuard = document.createTextNode(ur), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t8, e16) {
    return t8 === this.leftGuard ? 0 : t8 === this.rightGuard ? 1 : super.index(t8, e16);
  }
  restore(t8) {
    let e16 = null, r7;
    const s12 = t8.data.split(ur).join("");
    if (t8 === this.leftGuard)
      if (this.prev instanceof At2) {
        const i3 = this.prev.length();
        this.prev.insertAt(i3, s12), e16 = {
          startNode: this.prev.domNode,
          startOffset: i3 + s12.length
        };
      } else
        r7 = document.createTextNode(s12), this.parent.insertBefore(this.scroll.create(r7), this), e16 = {
          startNode: r7,
          startOffset: s12.length
        };
    else t8 === this.rightGuard && (this.next instanceof At2 ? (this.next.insertAt(0, s12), e16 = {
      startNode: this.next.domNode,
      startOffset: s12.length
    }) : (r7 = document.createTextNode(s12), this.parent.insertBefore(this.scroll.create(r7), this.next), e16 = {
      startNode: r7,
      startOffset: s12.length
    }));
    return t8.data = ur, e16;
  }
  update(t8, e16) {
    t8.forEach((r7) => {
      if (r7.type === "characterData" && (r7.target === this.leftGuard || r7.target === this.rightGuard)) {
        const s12 = this.restore(r7.target);
        s12 && (e16.range = s12);
      }
    });
  }
};
var cd = class {
  constructor(t8, e16) {
    x8(this, "isComposing", false);
    this.scroll = t8, this.emitter = e16, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t8) => {
      this.isComposing || this.handleCompositionStart(t8);
    }), this.scroll.domNode.addEventListener("compositionend", (t8) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t8);
      });
    });
  }
  handleCompositionStart(t8) {
    const e16 = t8.target instanceof Node ? this.scroll.find(t8.target, true) : null;
    e16 && !(e16 instanceof qi) && (this.emitter.emit(S6.events.COMPOSITION_BEFORE_START, t8), this.scroll.batchStart(), this.emitter.emit(S6.events.COMPOSITION_START, t8), this.isComposing = true);
  }
  handleCompositionEnd(t8) {
    this.emitter.emit(S6.events.COMPOSITION_BEFORE_END, t8), this.scroll.batchEnd(), this.emitter.emit(S6.events.COMPOSITION_END, t8), this.isComposing = false;
  }
};
var yn = class yn2 {
  constructor(t8, e16) {
    x8(this, "modules", {});
    this.quill = t8, this.options = e16;
  }
  init() {
    Object.keys(this.options.modules).forEach((t8) => {
      this.modules[t8] == null && this.addModule(t8);
    });
  }
  addModule(t8) {
    const e16 = this.quill.constructor.import(`modules/${t8}`);
    return this.modules[t8] = new e16(this.quill, this.options.modules[t8] || {}), this.modules[t8];
  }
};
x8(yn, "DEFAULTS", {
  modules: {}
}), x8(yn, "themes", {
  default: yn
});
var ze = yn;
var ud = (n7) => n7.parentElement || n7.getRootNode().host || null;
var hd = (n7) => {
  const t8 = n7.getBoundingClientRect(), e16 = "offsetWidth" in n7 && Math.abs(t8.width) / n7.offsetWidth || 1, r7 = "offsetHeight" in n7 && Math.abs(t8.height) / n7.offsetHeight || 1;
  return {
    top: t8.top,
    right: t8.left + n7.clientWidth * e16,
    bottom: t8.top + n7.clientHeight * r7,
    left: t8.left
  };
};
var hr = (n7) => {
  const t8 = parseInt(n7, 10);
  return Number.isNaN(t8) ? 0 : t8;
};
var wl = (n7, t8, e16, r7, s12, i3) => n7 < e16 && t8 > r7 ? 0 : n7 < e16 ? -(e16 - n7 + s12) : t8 > r7 ? t8 - n7 > r7 - e16 ? n7 + s12 - e16 : t8 - r7 + i3 : 0;
var fd = (n7, t8) => {
  var i3, l5, a4;
  const e16 = n7.ownerDocument;
  let r7 = t8, s12 = n7;
  for (; s12; ) {
    const c9 = s12 === e16.body, h7 = c9 ? {
      top: 0,
      right: ((i3 = window.visualViewport) == null ? void 0 : i3.width) ?? e16.documentElement.clientWidth,
      bottom: ((l5 = window.visualViewport) == null ? void 0 : l5.height) ?? e16.documentElement.clientHeight,
      left: 0
    } : hd(s12), d8 = getComputedStyle(s12), m6 = wl(r7.left, r7.right, h7.left, h7.right, hr(d8.scrollPaddingLeft), hr(d8.scrollPaddingRight)), g10 = wl(r7.top, r7.bottom, h7.top, h7.bottom, hr(d8.scrollPaddingTop), hr(d8.scrollPaddingBottom));
    if (m6 || g10)
      if (c9)
        (a4 = e16.defaultView) == null || a4.scrollBy(m6, g10);
      else {
        const {
          scrollLeft: p3,
          scrollTop: b10
        } = s12;
        g10 && (s12.scrollTop += g10), m6 && (s12.scrollLeft += m6);
        const v6 = s12.scrollLeft - p3, y4 = s12.scrollTop - b10;
        r7 = {
          left: r7.left - v6,
          top: r7.top - y4,
          right: r7.right - v6,
          bottom: r7.bottom - y4
        };
      }
    s12 = c9 || d8.position === "fixed" ? null : ud(s12);
  }
};
var dd = 100;
var gd = ["block", "break", "cursor", "inline", "scroll", "text"];
var pd = (n7, t8, e16) => {
  const r7 = new Fe();
  return gd.forEach((s12) => {
    const i3 = t8.query(s12);
    i3 && r7.register(i3);
  }), n7.forEach((s12) => {
    let i3 = t8.query(s12);
    i3 || e16.error(`Cannot register "${s12}" specified in "formats" config. Are you sure it was registered?`);
    let l5 = 0;
    for (; i3; )
      if (r7.register(i3), i3 = "blotName" in i3 ? i3.requiredContainer ?? null : null, l5 += 1, l5 > dd) {
        e16.error(`Cycle detected in registering blot requiredContainer: "${s12}"`);
        break;
      }
  }), r7;
};
var Pe = Gt2("quill");
var fr = new Fe();
Et2.uiClass = "ql-ui";
var bt2 = class bt3 {
  static debug(t8) {
    t8 === true && (t8 = "log"), Gt2.level(t8);
  }
  static find(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return ri.get(t8) || fr.find(t8, e16);
  }
  static import(t8) {
    return this.imports[t8] == null && Pe.error(`Cannot import ${t8}. Are you sure it was registered?`), this.imports[t8];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t8 = arguments.length <= 0 ? void 0 : arguments[0], e16 = !!(!(arguments.length <= 1) && arguments[1]), r7 = "attrName" in t8 ? t8.attrName : t8.blotName;
      typeof r7 == "string" ? this.register(`formats/${r7}`, t8, e16) : Object.keys(t8).forEach((s12) => {
        this.register(s12, t8[s12], e16);
      });
    } else {
      const t8 = arguments.length <= 0 ? void 0 : arguments[0], e16 = arguments.length <= 1 ? void 0 : arguments[1], r7 = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t8] != null && !r7 && Pe.warn(`Overwriting ${t8} with`, e16), this.imports[t8] = e16, (t8.startsWith("blots/") || t8.startsWith("formats/")) && e16 && typeof e16 != "boolean" && e16.blotName !== "abstract" && fr.register(e16), typeof e16.register == "function" && e16.register(fr);
    }
  }
  constructor(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = md(t8, e16), this.container = this.options.container, this.container == null) {
      Pe.error("Invalid Quill container", t8);
      return;
    }
    this.options.debug && bt3.debug(this.options.debug);
    const r7 = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", ri.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new S6();
    const s12 = xi.blotName, i3 = this.options.registry.query(s12);
    if (!i3 || !("blotName" in i3))
      throw new Error(`Cannot initialize Quill without "${s12}" blot`);
    if (this.scroll = new i3(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new ld(this.scroll), this.selection = new sd(this.scroll, this.emitter), this.composition = new cd(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(S6.events.EDITOR_CHANGE, (l5) => {
      l5 === S6.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(S6.events.SCROLL_UPDATE, (l5, a4) => {
      const c9 = this.selection.lastRange, [h7] = this.selection.getRange(), d8 = c9 && h7 ? {
        oldRange: c9,
        newRange: h7
      } : void 0;
      mt2.call(this, () => this.editor.update(null, a4, d8), l5);
    }), this.emitter.on(S6.events.SCROLL_EMBED_UPDATE, (l5, a4) => {
      const c9 = this.selection.lastRange, [h7] = this.selection.getRange(), d8 = c9 && h7 ? {
        oldRange: c9,
        newRange: h7
      } : void 0;
      mt2.call(this, () => {
        const m6 = new O4().retain(l5.offset(this)).retain({
          [l5.statics.blotName]: a4
        });
        return this.editor.update(m6, [], d8);
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
  addContainer(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t8 == "string") {
      const r7 = t8;
      t8 = document.createElement("div"), t8.classList.add(r7);
    }
    return this.container.insertBefore(t8, e16), t8;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t8, e16, r7) {
    return [t8, e16, , r7] = Pt2(t8, e16, r7), mt2.call(this, () => this.editor.deleteText(t8, e16), r7, t8, -1 * e16);
  }
  disable() {
    this.enable(false);
  }
  editReadOnly(t8) {
    this.allowReadOnlyEdits = true;
    const e16 = t8();
    return this.allowReadOnlyEdits = false, e16;
  }
  enable() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    this.scroll.enable(t8), this.container.classList.toggle("ql-disabled", !t8);
  }
  focus() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t8.preventScroll || this.scrollSelectionIntoView();
  }
  format(t8, e16) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : S6.sources.API;
    return mt2.call(this, () => {
      const s12 = this.getSelection(true);
      let i3 = new O4();
      if (s12 == null) return i3;
      if (this.scroll.query(t8, q5.BLOCK))
        i3 = this.editor.formatLine(s12.index, s12.length, {
          [t8]: e16
        });
      else {
        if (s12.length === 0)
          return this.selection.format(t8, e16), i3;
        i3 = this.editor.formatText(s12.index, s12.length, {
          [t8]: e16
        });
      }
      return this.setSelection(s12, S6.sources.SILENT), i3;
    }, r7);
  }
  formatLine(t8, e16, r7, s12, i3) {
    let l5;
    return [t8, e16, l5, i3] = Pt2(
      t8,
      e16,
      // @ts-expect-error
      r7,
      s12,
      i3
    ), mt2.call(this, () => this.editor.formatLine(t8, e16, l5), i3, t8, 0);
  }
  formatText(t8, e16, r7, s12, i3) {
    let l5;
    return [t8, e16, l5, i3] = Pt2(
      // @ts-expect-error
      t8,
      e16,
      r7,
      s12,
      i3
    ), mt2.call(this, () => this.editor.formatText(t8, e16, l5), i3, t8, 0);
  }
  getBounds(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r7 = null;
    if (typeof t8 == "number" ? r7 = this.selection.getBounds(t8, e16) : r7 = this.selection.getBounds(t8.index, t8.length), !r7) return null;
    const s12 = this.container.getBoundingClientRect();
    return {
      bottom: r7.bottom - s12.top,
      height: r7.height,
      left: r7.left - s12.left,
      right: r7.right - s12.left,
      top: r7.top - s12.top,
      width: r7.width
    };
  }
  getContents() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t8;
    return [t8, e16] = Pt2(t8, e16), this.editor.getContents(t8, e16);
  }
  getFormat() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(true), e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t8 == "number" ? this.editor.getFormat(t8, e16) : this.editor.getFormat(t8.index, t8.length);
  }
  getIndex(t8) {
    return t8.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t8) {
    return this.scroll.leaf(t8);
  }
  getLine(t8) {
    return this.scroll.line(t8);
  }
  getLines() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t8 != "number" ? this.scroll.lines(t8.index, t8.length) : this.scroll.lines(t8, e16);
  }
  getModule(t8) {
    return this.theme.modules[t8];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e16 = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t8 == "number" && (e16 = e16 ?? this.getLength() - t8), [t8, e16] = Pt2(t8, e16), this.editor.getHTML(t8, e16);
  }
  getText() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e16 = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t8 == "number" && (e16 = e16 ?? this.getLength() - t8), [t8, e16] = Pt2(t8, e16), this.editor.getText(t8, e16);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t8, e16, r7) {
    let s12 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : bt3.sources.API;
    return mt2.call(this, () => this.editor.insertEmbed(t8, e16, r7), s12, t8);
  }
  insertText(t8, e16, r7, s12, i3) {
    let l5;
    return [t8, , l5, i3] = Pt2(t8, 0, r7, s12, i3), mt2.call(this, () => this.editor.insertText(t8, e16, l5), i3, t8, e16.length);
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
  removeFormat(t8, e16, r7) {
    return [t8, e16, , r7] = Pt2(t8, e16, r7), mt2.call(this, () => this.editor.removeFormat(t8, e16), r7, t8);
  }
  scrollRectIntoView(t8) {
    fd(this.root, t8);
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
    const t8 = this.selection.lastRange, e16 = t8 && this.selection.getBounds(t8.index, t8.length);
    e16 && this.scrollRectIntoView(e16);
  }
  setContents(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S6.sources.API;
    return mt2.call(this, () => {
      t8 = new O4(t8);
      const r7 = this.getLength(), s12 = this.editor.deleteText(0, r7), i3 = this.editor.insertContents(0, t8), l5 = this.editor.deleteText(this.getLength() - 1, 1);
      return s12.compose(i3).compose(l5);
    }, e16);
  }
  setSelection(t8, e16, r7) {
    t8 == null ? this.selection.setRange(null, e16 || bt3.sources.API) : ([t8, e16, , r7] = Pt2(t8, e16, r7), this.selection.setRange(new ge2(Math.max(0, t8), e16), r7), r7 !== S6.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S6.sources.API;
    const r7 = new O4().insert(t8);
    return this.setContents(r7, e16);
  }
  update() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S6.sources.USER;
    const e16 = this.scroll.update(t8);
    return this.selection.update(t8), e16;
  }
  updateContents(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S6.sources.API;
    return mt2.call(this, () => (t8 = new O4(t8), this.editor.applyDelta(t8)), e16, true);
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
function Tl(n7) {
  return typeof n7 == "string" ? document.querySelector(n7) : n7;
}
function Ds(n7) {
  return Object.entries(n7 ?? {}).reduce((t8, e16) => {
    let [r7, s12] = e16;
    return {
      ...t8,
      [r7]: s12 === true ? {} : s12
    };
  }, {});
}
function xl(n7) {
  return Object.fromEntries(Object.entries(n7).filter((t8) => t8[1] !== void 0));
}
function md(n7, t8) {
  const e16 = Tl(n7);
  if (!e16)
    throw new Error("Invalid Quill container");
  const s12 = !t8.theme || t8.theme === N3.DEFAULTS.theme ? ze : N3.import(`themes/${t8.theme}`);
  if (!s12)
    throw new Error(`Invalid theme ${t8.theme}. Did you register it?`);
  const {
    modules: i3,
    ...l5
  } = N3.DEFAULTS, {
    modules: a4,
    ...c9
  } = s12.DEFAULTS;
  let h7 = Ds(t8.modules);
  h7 != null && h7.toolbar && h7.toolbar.constructor !== Object && (h7 = {
    ...h7,
    toolbar: {
      container: h7.toolbar
    }
  });
  const d8 = Jt2({}, Ds(i3), Ds(a4), h7), m6 = {
    ...l5,
    ...xl(c9),
    ...xl(t8)
  };
  let g10 = t8.registry;
  return g10 ? t8.formats && Pe.warn('Ignoring "formats" option because "registry" is specified') : g10 = t8.formats ? pd(t8.formats, m6.registry, Pe) : m6.registry, {
    ...m6,
    registry: g10,
    container: e16,
    theme: s12,
    modules: Object.entries(d8).reduce((p3, b10) => {
      let [v6, y4] = b10;
      if (!y4) return p3;
      const E11 = N3.import(`modules/${v6}`);
      return E11 == null ? (Pe.error(`Cannot load ${v6} module. Are you sure you registered it?`), p3) : {
        ...p3,
        // @ts-expect-error
        [v6]: Jt2({}, E11.DEFAULTS || {}, y4)
      };
    }, {}),
    bounds: Tl(m6.bounds)
  };
}
function mt2(n7, t8, e16, r7) {
  if (!this.isEnabled() && t8 === S6.sources.USER && !this.allowReadOnlyEdits)
    return new O4();
  let s12 = e16 == null ? null : this.getSelection();
  const i3 = this.editor.delta, l5 = n7();
  if (s12 != null && (e16 === true && (e16 = s12.index), r7 == null ? s12 = Ll(s12, l5, t8) : r7 !== 0 && (s12 = Ll(s12, e16, r7, t8)), this.setSelection(s12, S6.sources.SILENT)), l5.length() > 0) {
    const a4 = [S6.events.TEXT_CHANGE, l5, i3, t8];
    this.emitter.emit(S6.events.EDITOR_CHANGE, ...a4), t8 !== S6.sources.SILENT && this.emitter.emit(...a4);
  }
  return l5;
}
function Pt2(n7, t8, e16, r7, s12) {
  let i3 = {};
  return typeof n7.index == "number" && typeof n7.length == "number" ? typeof t8 != "number" ? (s12 = r7, r7 = e16, e16 = t8, t8 = n7.length, n7 = n7.index) : (t8 = n7.length, n7 = n7.index) : typeof t8 != "number" && (s12 = r7, r7 = e16, e16 = t8, t8 = 0), typeof e16 == "object" ? (i3 = e16, s12 = r7) : typeof e16 == "string" && (r7 != null ? i3[e16] = r7 : s12 = e16), s12 = s12 || S6.sources.API, [n7, t8, i3, s12];
}
function Ll(n7, t8, e16, r7) {
  const s12 = typeof e16 == "number" ? e16 : 0;
  if (n7 == null) return null;
  let i3, l5;
  return t8 && typeof t8.transformPosition == "function" ? [i3, l5] = [n7.index, n7.index + n7.length].map((a4) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t8.transformPosition(a4, r7 !== S6.sources.USER)
  )) : [i3, l5] = [n7.index, n7.index + n7.length].map((a4) => a4 < t8 || a4 === t8 && r7 === S6.sources.USER ? a4 : s12 >= 0 ? a4 + s12 : Math.max(t8, a4 + s12)), new ge2(i3, l5 - i3);
}
var ye = class extends _r {
};
function Sl(n7) {
  return n7 instanceof W2 || n7 instanceof ut2;
}
function _l(n7) {
  return typeof n7.updateContent == "function";
}
var $e = class extends xi {
  constructor(t8, e16, r7) {
    let {
      emitter: s12
    } = r7;
    super(t8, e16), this.emitter = s12, this.batch = false, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i3) => this.handleDragStart(i3));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const t8 = this.batch;
    this.batch = false, this.update(t8);
  }
  emitMount(t8) {
    this.emitter.emit(S6.events.SCROLL_BLOT_MOUNT, t8);
  }
  emitUnmount(t8) {
    this.emitter.emit(S6.events.SCROLL_BLOT_UNMOUNT, t8);
  }
  emitEmbedUpdate(t8, e16) {
    this.emitter.emit(S6.events.SCROLL_EMBED_UPDATE, t8, e16);
  }
  deleteAt(t8, e16) {
    const [r7, s12] = this.line(t8), [i3] = this.line(t8 + e16);
    if (super.deleteAt(t8, e16), i3 != null && r7 !== i3 && s12 > 0) {
      if (r7 instanceof ut2 || i3 instanceof ut2) {
        this.optimize();
        return;
      }
      const l5 = i3.children.head instanceof wt ? null : i3.children.head;
      r7.moveChildren(i3, l5), r7.remove();
    }
    this.optimize();
  }
  enable() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    this.domNode.setAttribute("contenteditable", t8 ? "true" : "false");
  }
  formatAt(t8, e16, r7, s12) {
    super.formatAt(t8, e16, r7, s12), this.optimize();
  }
  insertAt(t8, e16, r7) {
    if (t8 >= this.length())
      if (r7 == null || this.scroll.query(e16, q5.BLOCK) == null) {
        const s12 = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s12), r7 == null && e16.endsWith(`
`) ? s12.insertAt(0, e16.slice(0, -1), r7) : s12.insertAt(0, e16, r7);
      } else {
        const s12 = this.scroll.create(e16, r7);
        this.appendChild(s12);
      }
    else
      super.insertAt(t8, e16, r7);
    this.optimize();
  }
  insertBefore(t8, e16) {
    if (t8.statics.scope === q5.INLINE_BLOT) {
      const r7 = this.scroll.create(this.statics.defaultChild.blotName);
      r7.appendChild(t8), super.insertBefore(r7, e16);
    } else
      super.insertBefore(t8, e16);
  }
  insertContents(t8, e16) {
    const r7 = this.deltaToRenderBlocks(e16.concat(new O4().insert(`
`))), s12 = r7.pop();
    if (s12 == null) return;
    this.batchStart();
    const i3 = r7.shift();
    if (i3) {
      const c9 = i3.type === "block" && (i3.delta.length() === 0 || !this.descendant(ut2, t8)[0] && t8 < this.length()), h7 = i3.type === "block" ? i3.delta : new O4().insert({
        [i3.key]: i3.value
      });
      js(this, t8, h7);
      const d8 = i3.type === "block" ? 1 : 0, m6 = t8 + h7.length() + d8;
      c9 && this.insertAt(m6 - 1, `
`);
      const g10 = at2(this.line(t8)[0]), p3 = ht.AttributeMap.diff(g10, i3.attributes) || {};
      Object.keys(p3).forEach((b10) => {
        this.formatAt(m6 - 1, 1, b10, p3[b10]);
      }), t8 = m6;
    }
    let [l5, a4] = this.children.find(t8);
    if (r7.length && (l5 && (l5 = l5.split(a4), a4 = 0), r7.forEach((c9) => {
      if (c9.type === "block") {
        const h7 = this.createBlock(c9.attributes, l5 || void 0);
        js(h7, 0, c9.delta);
      } else {
        const h7 = this.create(c9.key, c9.value);
        this.insertBefore(h7, l5 || void 0), Object.keys(c9.attributes).forEach((d8) => {
          h7.format(d8, c9.attributes[d8]);
        });
      }
    })), s12.type === "block" && s12.delta.length()) {
      const c9 = l5 ? l5.offset(l5.scroll) + a4 : this.length();
      js(this, c9, s12.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t8) {
    const e16 = this.path(t8).pop();
    if (!e16)
      return [null, -1];
    const [r7, s12] = e16;
    return r7 instanceof Q3 ? [r7, s12] : [null, -1];
  }
  line(t8) {
    return t8 === this.length() ? this.line(t8 - 1) : this.descendant(Sl, t8);
  }
  lines() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r7 = (s12, i3, l5) => {
      let a4 = [], c9 = l5;
      return s12.children.forEachAt(i3, l5, (h7, d8, m6) => {
        Sl(h7) ? a4.push(h7) : h7 instanceof _r && (a4 = a4.concat(r7(h7, d8, c9))), c9 -= m6;
      }), a4;
    };
    return r7(this, t8, e16);
  }
  optimize() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t8, e16), t8.length > 0 && this.emitter.emit(S6.events.SCROLL_OPTIMIZE, t8, e16));
  }
  path(t8) {
    return super.path(t8).slice(1);
  }
  remove() {
  }
  update(t8) {
    if (this.batch) {
      Array.isArray(t8) && (this.batch = this.batch.concat(t8));
      return;
    }
    let e16 = S6.sources.USER;
    typeof t8 == "string" && (e16 = t8), Array.isArray(t8) || (t8 = this.observer.takeRecords()), t8 = t8.filter((r7) => {
      let {
        target: s12
      } = r7;
      const i3 = this.find(s12, true);
      return i3 && !_l(i3);
    }), t8.length > 0 && this.emitter.emit(S6.events.SCROLL_BEFORE_UPDATE, e16, t8), super.update(t8.concat([])), t8.length > 0 && this.emitter.emit(S6.events.SCROLL_UPDATE, e16, t8);
  }
  updateEmbedAt(t8, e16, r7) {
    const [s12] = this.descendant((i3) => i3 instanceof ut2, t8);
    s12 && s12.statics.blotName === e16 && _l(s12) && s12.updateContent(r7);
  }
  handleDragStart(t8) {
    t8.preventDefault();
  }
  deltaToRenderBlocks(t8) {
    const e16 = [];
    let r7 = new O4();
    return t8.forEach((s12) => {
      const i3 = s12 == null ? void 0 : s12.insert;
      if (i3)
        if (typeof i3 == "string") {
          const l5 = i3.split(`
`);
          l5.slice(0, -1).forEach((c9) => {
            r7.insert(c9, s12.attributes), e16.push({
              type: "block",
              delta: r7,
              attributes: s12.attributes ?? {}
            }), r7 = new O4();
          });
          const a4 = l5[l5.length - 1];
          a4 && r7.insert(a4, s12.attributes);
        } else {
          const l5 = Object.keys(i3)[0];
          if (!l5) return;
          this.query(l5, q5.INLINE) ? r7.push(s12) : (r7.length() && e16.push({
            type: "block",
            delta: r7,
            attributes: {}
          }), r7 = new O4(), e16.push({
            type: "blockEmbed",
            key: l5,
            value: i3[l5],
            attributes: s12.attributes ?? {}
          }));
        }
    }), r7.length() && e16.push({
      type: "block",
      delta: r7,
      attributes: {}
    }), e16;
  }
  createBlock(t8, e16) {
    let r7;
    const s12 = {};
    Object.entries(t8).forEach((a4) => {
      let [c9, h7] = a4;
      this.query(c9, q5.BLOCK & q5.BLOT) != null ? r7 = c9 : s12[c9] = h7;
    });
    const i3 = this.create(r7 || this.statics.defaultChild.blotName, r7 ? t8[r7] : void 0);
    this.insertBefore(i3, e16 || void 0);
    const l5 = i3.length();
    return Object.entries(s12).forEach((a4) => {
      let [c9, h7] = a4;
      i3.formatAt(0, l5, c9, h7);
    }), i3;
  }
};
x8($e, "blotName", "scroll"), x8($e, "className", "ql-editor"), x8($e, "tagName", "DIV"), x8($e, "defaultChild", W2), x8($e, "allowedChildren", [W2, ut2, ye]);
function js(n7, t8, e16) {
  e16.reduce((r7, s12) => {
    const i3 = ht.Op.length(s12);
    let l5 = s12.attributes || {};
    if (s12.insert != null) {
      if (typeof s12.insert == "string") {
        const a4 = s12.insert;
        n7.insertAt(r7, a4);
        const [c9] = n7.descendant(Q3, r7), h7 = at2(c9);
        l5 = ht.AttributeMap.diff(h7, l5) || {};
      } else if (typeof s12.insert == "object") {
        const a4 = Object.keys(s12.insert)[0];
        if (a4 == null) return r7;
        if (n7.insertAt(r7, a4, s12.insert[a4]), n7.scroll.query(a4, q5.INLINE) != null) {
          const [h7] = n7.descendant(Q3, r7), d8 = at2(h7);
          l5 = ht.AttributeMap.diff(d8, l5) || {};
        }
      }
    }
    return Object.keys(l5).forEach((a4) => {
      n7.formatAt(r7, i3, a4, l5[a4]);
    }), r7 + i3;
  }, t8);
}
var Ci = {
  scope: q5.BLOCK,
  whitelist: ["right", "center", "justify"]
};
var bd = new It2("align", "align", Ci);
var Io = new Nt("align", "ql-align", Ci);
var Ro = new ne2("align", "text-align", Ci);
var ko = class extends ne2 {
  value(t8) {
    let e16 = super.value(t8);
    return e16.startsWith("rgb(") ? (e16 = e16.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e16.split(",").map((s12) => `00${parseInt(s12, 10).toString(16)}`.slice(-2)).join("")}`) : e16;
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
  static create(t8) {
    const e16 = super.create(t8);
    return e16.setAttribute("spellcheck", "false"), e16;
  }
  code(t8, e16) {
    return this.children.map((r7) => r7.length() <= 1 ? "" : r7.domNode.innerText).join(`
`).slice(t8, t8 + e16);
  }
  html(t8, e16) {
    return `<pre>
${Ir(this.code(t8, e16))}
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
  value(t8) {
    return super.value(t8).replace(/["']/g, "");
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
  static match(t8, e16) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r7) => !!e16[r7] !== t8[r7] && e16[r7] !== null) ? false : e16.key === t8.key || e16.key === t8.which;
  }
  constructor(t8, e16) {
    super(t8, e16), this.bindings = {}, Object.keys(this.options.bindings).forEach((r7) => {
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
  addBinding(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s12 = Td(t8);
    if (s12 == null) {
      Ad.warn("Attempted to add invalid keyboard binding", s12);
      return;
    }
    typeof e16 == "function" && (e16 = {
      handler: e16
    }), typeof r7 == "function" && (r7 = {
      handler: r7
    }), (Array.isArray(s12.key) ? s12.key : [s12.key]).forEach((l5) => {
      const a4 = {
        ...s12,
        key: l5,
        ...e16,
        ...r7
      };
      this.bindings[a4.key] = this.bindings[a4.key] || [], this.bindings[a4.key].push(a4);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t8) => {
      if (t8.defaultPrevented || t8.isComposing || t8.keyCode === 229 && (t8.key === "Enter" || t8.key === "Backspace")) return;
      const s12 = (this.bindings[t8.key] || []).concat(this.bindings[t8.which] || []).filter((E11) => _Rr.match(t8, E11));
      if (s12.length === 0) return;
      const i3 = N3.find(t8.target, true);
      if (i3 && i3.scroll !== this.quill.scroll) return;
      const l5 = this.quill.getSelection();
      if (l5 == null || !this.quill.hasFocus()) return;
      const [a4, c9] = this.quill.getLine(l5.index), [h7, d8] = this.quill.getLeaf(l5.index), [m6, g10] = l5.length === 0 ? [h7, d8] : this.quill.getLeaf(l5.index + l5.length), p3 = h7 instanceof Ar ? h7.value().slice(0, d8) : "", b10 = m6 instanceof Ar ? m6.value().slice(g10) : "", v6 = {
        collapsed: l5.length === 0,
        // @ts-expect-error Fix me later
        empty: l5.length === 0 && a4.length() <= 1,
        format: this.quill.getFormat(l5),
        line: a4,
        offset: c9,
        prefix: p3,
        suffix: b10,
        event: t8
      };
      s12.some((E11) => {
        if (E11.collapsed != null && E11.collapsed !== v6.collapsed || E11.empty != null && E11.empty !== v6.empty || E11.offset != null && E11.offset !== v6.offset)
          return false;
        if (Array.isArray(E11.format)) {
          if (E11.format.every((w11) => v6.format[w11] == null))
            return false;
        } else if (typeof E11.format == "object" && !Object.keys(E11.format).every((w11) => E11.format[w11] === true ? v6.format[w11] != null : E11.format[w11] === false ? v6.format[w11] == null : wi(E11.format[w11], v6.format[w11])))
          return false;
        return E11.prefix != null && !E11.prefix.test(v6.prefix) || E11.suffix != null && !E11.suffix.test(v6.suffix) ? false : E11.handler.call(this, l5, v6, E11) !== true;
      }) && t8.preventDefault();
    });
  }
  handleBackspace(t8, e16) {
    const r7 = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e16.prefix) ? 2 : 1;
    if (t8.index === 0 || this.quill.getLength() <= 1) return;
    let s12 = {};
    const [i3] = this.quill.getLine(t8.index);
    let l5 = new O4().retain(t8.index - r7).delete(r7);
    if (e16.offset === 0) {
      const [a4] = this.quill.getLine(t8.index - 1);
      if (a4 && !(a4.statics.blotName === "block" && a4.length() <= 1)) {
        const h7 = i3.formats(), d8 = this.quill.getFormat(t8.index - 1, 1);
        if (s12 = ht.AttributeMap.diff(h7, d8) || {}, Object.keys(s12).length > 0) {
          const m6 = new O4().retain(t8.index + i3.length() - 2).retain(1, s12);
          l5 = l5.compose(m6);
        }
      }
    }
    this.quill.updateContents(l5, N3.sources.USER), this.quill.focus();
  }
  handleDelete(t8, e16) {
    const r7 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e16.suffix) ? 2 : 1;
    if (t8.index >= this.quill.getLength() - r7) return;
    let s12 = {};
    const [i3] = this.quill.getLine(t8.index);
    let l5 = new O4().retain(t8.index).delete(r7);
    if (e16.offset >= i3.length() - 1) {
      const [a4] = this.quill.getLine(t8.index + 1);
      if (a4) {
        const c9 = i3.formats(), h7 = this.quill.getFormat(t8.index, 1);
        s12 = ht.AttributeMap.diff(c9, h7) || {}, Object.keys(s12).length > 0 && (l5 = l5.retain(a4.length() - 1).retain(1, s12));
      }
    }
    this.quill.updateContents(l5, N3.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t8) {
    Mi({
      range: t8,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t8, e16) {
    const r7 = Object.keys(e16.format).reduce((i3, l5) => (this.quill.scroll.query(l5, q5.BLOCK) && !Array.isArray(e16.format[l5]) && (i3[l5] = e16.format[l5]), i3), {}), s12 = new O4().retain(t8.index).delete(t8.length).insert(`
`, r7);
    this.quill.updateContents(s12, N3.sources.USER), this.quill.setSelection(t8.index + 1, N3.sources.SILENT), this.quill.focus();
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
      handler(n7, t8) {
        return t8.collapsed && t8.offset !== 0 ? true : (this.quill.format("indent", "+1", N3.sources.USER), false);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: true,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n7, t8) {
        return t8.collapsed && t8.offset !== 0 ? true : (this.quill.format("indent", "-1", N3.sources.USER), false);
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
      handler(n7, t8) {
        t8.format.indent != null ? this.quill.format("indent", "-1", N3.sources.USER) : t8.format.list != null && this.quill.format("list", false, N3.sources.USER);
      }
    },
    "indent code-block": Ol(true),
    "outdent code-block": Ol(false),
    "remove tab": {
      key: "Tab",
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler(n7) {
        this.quill.deleteText(n7.index - 1, 1, N3.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n7, t8) {
        if (t8.format.table) return true;
        this.quill.history.cutoff();
        const e16 = new O4().retain(n7.index).delete(n7.length).insert("	");
        return this.quill.updateContents(e16, N3.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n7.index + 1, N3.sources.SILENT), false;
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
      handler(n7, t8) {
        const e16 = {
          list: false
        };
        t8.format.indent && (e16.indent = false), this.quill.formatLine(n7.index, n7.length, e16, N3.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: true,
      format: {
        list: "checked"
      },
      handler(n7) {
        const [t8, e16] = this.quill.getLine(n7.index), r7 = {
          // @ts-expect-error Fix me later
          ...t8.formats(),
          list: "checked"
        }, s12 = new O4().retain(n7.index).insert(`
`, r7).retain(t8.length() - e16 - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s12, N3.sources.USER), this.quill.setSelection(n7.index + 1, N3.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: true,
      format: ["header"],
      suffix: /^$/,
      handler(n7, t8) {
        const [e16, r7] = this.quill.getLine(n7.index), s12 = new O4().retain(n7.index).insert(`
`, t8.format).retain(e16.length() - r7 - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s12, N3.sources.USER), this.quill.setSelection(n7.index + 1, N3.sources.SILENT), this.quill.scrollSelectionIntoView();
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
      handler(n7) {
        const t8 = this.quill.getModule("table");
        if (t8) {
          const [e16, r7, s12, i3] = t8.getTable(n7), l5 = xd(e16, r7, s12, i3);
          if (l5 == null) return;
          let a4 = e16.offset();
          if (l5 < 0) {
            const c9 = new O4().retain(a4).insert(`
`);
            this.quill.updateContents(c9, N3.sources.USER), this.quill.setSelection(n7.index + 1, n7.length, N3.sources.SILENT);
          } else if (l5 > 0) {
            a4 += e16.length();
            const c9 = new O4().retain(a4).insert(`
`);
            this.quill.updateContents(c9, N3.sources.USER), this.quill.setSelection(a4, N3.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n7, t8) {
        const {
          event: e16,
          line: r7
        } = t8, s12 = r7.offset(this.quill.scroll);
        e16.shiftKey ? this.quill.setSelection(s12 - 1, N3.sources.USER) : this.quill.setSelection(s12 + r7.length(), N3.sources.USER);
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
      handler(n7, t8) {
        if (this.quill.scroll.query("list") == null) return true;
        const {
          length: e16
        } = t8.prefix, [r7, s12] = this.quill.getLine(n7.index);
        if (s12 > e16) return true;
        let i3;
        switch (t8.prefix.trim()) {
          case "[]":
          case "[ ]":
            i3 = "unchecked";
            break;
          case "[x]":
            i3 = "checked";
            break;
          case "-":
          case "*":
            i3 = "bullet";
            break;
          default:
            i3 = "ordered";
        }
        this.quill.insertText(n7.index, " ", N3.sources.USER), this.quill.history.cutoff();
        const l5 = new O4().retain(n7.index - s12).delete(e16 + 1).retain(r7.length() - 2 - s12).retain(1, {
          list: i3
        });
        return this.quill.updateContents(l5, N3.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n7.index - e16, N3.sources.SILENT), false;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: true,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n7) {
        const [t8, e16] = this.quill.getLine(n7.index);
        let r7 = 2, s12 = t8;
        for (; s12 != null && s12.length() <= 1 && s12.formats()["code-block"]; )
          if (s12 = s12.prev, r7 -= 1, r7 <= 0) {
            const i3 = new O4().retain(n7.index + t8.length() - e16 - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i3, N3.sources.USER), this.quill.setSelection(n7.index - 1, N3.sources.SILENT), false;
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
function Ol(n7) {
  return {
    key: "Tab",
    shiftKey: !n7,
    format: {
      "code-block": true
    },
    handler(t8, e16) {
      let {
        event: r7
      } = e16;
      const s12 = this.quill.scroll.query("code-block"), {
        TAB: i3
      } = s12;
      if (t8.length === 0 && !r7.shiftKey) {
        this.quill.insertText(t8.index, i3, N3.sources.USER), this.quill.setSelection(t8.index + i3.length, N3.sources.SILENT);
        return;
      }
      const l5 = t8.length === 0 ? this.quill.getLines(t8.index, 1) : this.quill.getLines(t8);
      let {
        index: a4,
        length: c9
      } = t8;
      l5.forEach((h7, d8) => {
        n7 ? (h7.insertAt(0, i3), d8 === 0 ? a4 += i3.length : c9 += i3.length) : h7.domNode.textContent.startsWith(i3) && (h7.deleteAt(0, i3.length), d8 === 0 ? a4 -= i3.length : c9 -= i3.length);
      }), this.quill.update(N3.sources.USER), this.quill.setSelection(a4, c9, N3.sources.SILENT);
    }
  };
}
function dr(n7, t8) {
  return {
    key: n7,
    shiftKey: t8,
    altKey: null,
    [n7 === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r7) {
      let {
        index: s12
      } = r7;
      n7 === "ArrowRight" && (s12 += r7.length + 1);
      const [i3] = this.quill.getLeaf(s12);
      return i3 instanceof it2 ? (n7 === "ArrowLeft" ? t8 ? this.quill.setSelection(r7.index - 1, r7.length + 1, N3.sources.USER) : this.quill.setSelection(r7.index - 1, N3.sources.USER) : t8 ? this.quill.setSelection(r7.index, r7.length + 1, N3.sources.USER) : this.quill.setSelection(r7.index + r7.length + 1, N3.sources.USER), false) : true;
    }
  };
}
function Ps(n7) {
  return {
    key: n7[0],
    shortKey: true,
    handler(t8, e16) {
      this.quill.format(n7, !e16.format[n7], N3.sources.USER);
    }
  };
}
function ql(n7) {
  return {
    key: n7 ? "ArrowUp" : "ArrowDown",
    collapsed: true,
    format: ["table"],
    handler(t8, e16) {
      const r7 = n7 ? "prev" : "next", s12 = e16.line, i3 = s12.parent[r7];
      if (i3 != null) {
        if (i3.statics.blotName === "table-row") {
          let l5 = i3.children.head, a4 = s12;
          for (; a4.prev != null; )
            a4 = a4.prev, l5 = l5.next;
          const c9 = l5.offset(this.quill.scroll) + Math.min(e16.offset, l5.length() - 1);
          this.quill.setSelection(c9, 0, N3.sources.USER);
        }
      } else {
        const l5 = s12.table()[r7];
        l5 != null && (n7 ? this.quill.setSelection(l5.offset(this.quill.scroll) + l5.length() - 1, 0, N3.sources.USER) : this.quill.setSelection(l5.offset(this.quill.scroll), 0, N3.sources.USER));
      }
      return false;
    }
  };
}
function Td(n7) {
  if (typeof n7 == "string" || typeof n7 == "number")
    n7 = {
      key: n7
    };
  else if (typeof n7 == "object")
    n7 = De3(n7);
  else
    return null;
  return n7.shortKey && (n7[Nd] = n7.shortKey, delete n7.shortKey), n7;
}
function Mi(n7) {
  let {
    quill: t8,
    range: e16
  } = n7;
  const r7 = t8.getLines(e16);
  let s12 = {};
  if (r7.length > 1) {
    const i3 = r7[0].formats(), l5 = r7[r7.length - 1].formats();
    s12 = ht.AttributeMap.diff(l5, i3) || {};
  }
  t8.deleteText(e16, N3.sources.USER), Object.keys(s12).length > 0 && t8.formatLine(e16.index, 1, s12, N3.sources.USER), t8.setSelection(e16.index, N3.sources.SILENT);
}
function xd(n7, t8, e16, r7) {
  return t8.prev == null && t8.next == null ? e16.prev == null && e16.next == null ? r7 === 0 ? -1 : 1 : e16.prev == null ? -1 : 1 : t8.prev == null ? -1 : t8.next == null ? 1 : null;
}
var Ld = /font-weight:\s*normal/;
var Sd = ["P", "OL", "UL"];
var Cl = (n7) => n7 && Sd.includes(n7.tagName);
var _d = (n7) => {
  Array.from(n7.querySelectorAll("br")).filter((t8) => Cl(t8.previousElementSibling) && Cl(t8.nextElementSibling)).forEach((t8) => {
    var e16;
    (e16 = t8.parentNode) == null || e16.removeChild(t8);
  });
};
var Od = (n7) => {
  Array.from(n7.querySelectorAll('b[style*="font-weight"]')).filter((t8) => {
    var e16;
    return (e16 = t8.getAttribute("style")) == null ? void 0 : e16.match(Ld);
  }).forEach((t8) => {
    var r7;
    const e16 = n7.createDocumentFragment();
    e16.append(...t8.childNodes), (r7 = t8.parentNode) == null || r7.replaceChild(e16, t8);
  });
};
function qd(n7) {
  n7.querySelector('[id^="docs-internal-guid-"]') && (Od(n7), _d(n7));
}
var Cd = /\bmso-list:[^;]*ignore/i;
var Id = /\bmso-list:[^;]*\bl(\d+)/i;
var Rd = /\bmso-list:[^;]*\blevel(\d+)/i;
var kd = (n7, t8) => {
  const e16 = n7.getAttribute("style"), r7 = e16 == null ? void 0 : e16.match(Id);
  if (!r7)
    return null;
  const s12 = Number(r7[1]), i3 = e16 == null ? void 0 : e16.match(Rd), l5 = i3 ? Number(i3[1]) : 1, a4 = new RegExp(`@list l${s12}:level${l5}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c9 = t8.match(a4), h7 = c9 && c9[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s12,
    indent: l5,
    type: h7,
    element: n7
  };
};
var Bd = (n7) => {
  var l5, a4;
  const t8 = Array.from(n7.querySelectorAll("[style*=mso-list]")), e16 = [], r7 = [];
  t8.forEach((c9) => {
    (c9.getAttribute("style") || "").match(Cd) ? e16.push(c9) : r7.push(c9);
  }), e16.forEach((c9) => {
    var h7;
    return (h7 = c9.parentNode) == null ? void 0 : h7.removeChild(c9);
  });
  const s12 = n7.documentElement.innerHTML, i3 = r7.map((c9) => kd(c9, s12)).filter((c9) => c9);
  for (; i3.length; ) {
    const c9 = [];
    let h7 = i3.shift();
    for (; h7; )
      c9.push(h7), h7 = i3.length && ((l5 = i3[0]) == null ? void 0 : l5.element) === h7.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i3[0].id === h7.id ? i3.shift() : null;
    const d8 = document.createElement("ul");
    c9.forEach((p3) => {
      const b10 = document.createElement("li");
      b10.setAttribute("data-list", p3.type), p3.indent > 1 && b10.setAttribute("class", `ql-indent-${p3.indent - 1}`), b10.innerHTML = p3.element.innerHTML, d8.appendChild(b10);
    });
    const m6 = (a4 = c9[0]) == null ? void 0 : a4.element, {
      parentNode: g10
    } = m6 ?? {};
    m6 && (g10 == null || g10.replaceChild(d8, m6)), c9.slice(1).forEach((p3) => {
      let {
        element: b10
      } = p3;
      g10 == null || g10.removeChild(b10);
    });
  }
};
function Md(n7) {
  n7.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && Bd(n7);
}
var $d = [Md, qd];
var Dd = (n7) => {
  n7.documentElement && $d.forEach((t8) => {
    t8(n7);
  });
};
var jd = Gt2("quill:clipboard");
var Pd = [[Node.TEXT_NODE, Qd], [Node.TEXT_NODE, Rl], ["br", Gd], [Node.ELEMENT_NODE, Rl], [Node.ELEMENT_NODE, zd], [Node.ELEMENT_NODE, Hd], [Node.ELEMENT_NODE, Xd], ["li", Wd], ["ol, ul", Zd], ["pre", Kd], ["tr", Yd], ["b", Us("bold")], ["i", Us("italic")], ["strike", Us("strike")], ["style", Vd]];
var Ud = [bd, Bo].reduce((n7, t8) => (n7[t8.keyName] = t8, n7), {});
var Il = [Ro, Ri, Ii, $o, Po, Fo].reduce((n7, t8) => (n7[t8.keyName] = t8, n7), {});
var Ho = class extends Tt2 {
  constructor(t8, e16) {
    super(t8, e16), this.quill.root.addEventListener("copy", (r7) => this.onCaptureCopy(r7, false)), this.quill.root.addEventListener("cut", (r7) => this.onCaptureCopy(r7, true)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Pd.concat(this.options.matchers ?? []).forEach((r7) => {
      let [s12, i3] = r7;
      this.addMatcher(s12, i3);
    });
  }
  addMatcher(t8, e16) {
    this.matchers.push([t8, e16]);
  }
  convert(t8) {
    let {
      html: e16,
      text: r7
    } = t8, s12 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s12[J2.blotName])
      return new O4().insert(r7 || "", {
        [J2.blotName]: s12[J2.blotName]
      });
    if (!e16)
      return new O4().insert(r7 || "", s12);
    const i3 = this.convertHTML(e16);
    return Cn(i3, `
`) && (i3.ops[i3.ops.length - 1].attributes == null || s12.table) ? i3.compose(new O4().retain(i3.length() - 1).delete(1)) : i3;
  }
  normalizeHTML(t8) {
    Dd(t8);
  }
  convertHTML(t8) {
    const e16 = new DOMParser().parseFromString(t8, "text/html");
    this.normalizeHTML(e16);
    const r7 = e16.body, s12 = /* @__PURE__ */ new WeakMap(), [i3, l5] = this.prepareMatching(r7, s12);
    return $i(this.quill.scroll, r7, i3, l5, s12);
  }
  dangerouslyPasteHTML(t8, e16) {
    let r7 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N3.sources.API;
    if (typeof t8 == "string") {
      const s12 = this.convert({
        html: t8,
        text: ""
      });
      this.quill.setContents(s12, e16), this.quill.setSelection(0, N3.sources.SILENT);
    } else {
      const s12 = this.convert({
        html: e16,
        text: ""
      });
      this.quill.updateContents(new O4().retain(t8).concat(s12), r7), this.quill.setSelection(t8 + s12.length(), N3.sources.SILENT);
    }
  }
  onCaptureCopy(t8) {
    var l5, a4;
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (t8.defaultPrevented) return;
    t8.preventDefault();
    const [r7] = this.quill.selection.getRange();
    if (r7 == null) return;
    const {
      html: s12,
      text: i3
    } = this.onCopy(r7, e16);
    (l5 = t8.clipboardData) == null || l5.setData("text/plain", i3), (a4 = t8.clipboardData) == null || a4.setData("text/html", s12), e16 && Mi({
      range: r7,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t8) {
    return t8.split(/\r?\n/).filter((e16) => e16[0] !== "#").join(`
`);
  }
  onCapturePaste(t8) {
    var l5, a4, c9, h7, d8;
    if (t8.defaultPrevented || !this.quill.isEnabled()) return;
    t8.preventDefault();
    const e16 = this.quill.getSelection(true);
    if (e16 == null) return;
    const r7 = (l5 = t8.clipboardData) == null ? void 0 : l5.getData("text/html");
    let s12 = (a4 = t8.clipboardData) == null ? void 0 : a4.getData("text/plain");
    if (!r7 && !s12) {
      const m6 = (c9 = t8.clipboardData) == null ? void 0 : c9.getData("text/uri-list");
      m6 && (s12 = this.normalizeURIList(m6));
    }
    const i3 = Array.from(((h7 = t8.clipboardData) == null ? void 0 : h7.files) || []);
    if (!r7 && i3.length > 0) {
      this.quill.uploader.upload(e16, i3);
      return;
    }
    if (r7 && i3.length > 0) {
      const m6 = new DOMParser().parseFromString(r7, "text/html");
      if (m6.body.childElementCount === 1 && ((d8 = m6.body.firstElementChild) == null ? void 0 : d8.tagName) === "IMG") {
        this.quill.uploader.upload(e16, i3);
        return;
      }
    }
    this.onPaste(e16, {
      html: r7,
      text: s12
    });
  }
  onCopy(t8) {
    const e16 = this.quill.getText(t8);
    return {
      html: this.quill.getSemanticHTML(t8),
      text: e16
    };
  }
  onPaste(t8, e16) {
    let {
      text: r7,
      html: s12
    } = e16;
    const i3 = this.quill.getFormat(t8.index), l5 = this.convert({
      text: r7,
      html: s12
    }, i3);
    jd.log("onPaste", l5, {
      text: r7,
      html: s12
    });
    const a4 = new O4().retain(t8.index).delete(t8.length).concat(l5);
    this.quill.updateContents(a4, N3.sources.USER), this.quill.setSelection(a4.length() - t8.length, N3.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t8, e16) {
    const r7 = [], s12 = [];
    return this.matchers.forEach((i3) => {
      const [l5, a4] = i3;
      switch (l5) {
        case Node.TEXT_NODE:
          s12.push(a4);
          break;
        case Node.ELEMENT_NODE:
          r7.push(a4);
          break;
        default:
          Array.from(t8.querySelectorAll(l5)).forEach((c9) => {
            if (e16.has(c9)) {
              const h7 = e16.get(c9);
              h7 == null || h7.push(a4);
            } else
              e16.set(c9, [a4]);
          });
          break;
      }
    }), [r7, s12];
  }
};
x8(Ho, "DEFAULTS", {
  matchers: []
});
function Ee(n7, t8, e16, r7) {
  return r7.query(t8) ? n7.reduce((s12, i3) => {
    if (!i3.insert) return s12;
    if (i3.attributes && i3.attributes[t8])
      return s12.push(i3);
    const l5 = e16 ? {
      [t8]: e16
    } : {};
    return s12.insert(i3.insert, {
      ...l5,
      ...i3.attributes
    });
  }, new O4()) : n7;
}
function Cn(n7, t8) {
  let e16 = "";
  for (let r7 = n7.ops.length - 1; r7 >= 0 && e16.length < t8.length; --r7) {
    const s12 = n7.ops[r7];
    if (typeof s12.insert != "string") break;
    e16 = s12.insert + e16;
  }
  return e16.slice(-1 * t8.length) === t8;
}
function Yt2(n7, t8) {
  if (!(n7 instanceof Element)) return false;
  const e16 = t8.query(n7);
  return e16 && e16.prototype instanceof it2 ? false : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n7.tagName.toLowerCase());
}
function Fd(n7, t8) {
  return n7.previousElementSibling && n7.nextElementSibling && !Yt2(n7.previousElementSibling, t8) && !Yt2(n7.nextElementSibling, t8);
}
var gr = /* @__PURE__ */ new WeakMap();
function zo(n7) {
  return n7 == null ? false : (gr.has(n7) || (n7.tagName === "PRE" ? gr.set(n7, true) : gr.set(n7, zo(n7.parentNode))), gr.get(n7));
}
function $i(n7, t8, e16, r7, s12) {
  return t8.nodeType === t8.TEXT_NODE ? r7.reduce((i3, l5) => l5(t8, i3, n7), new O4()) : t8.nodeType === t8.ELEMENT_NODE ? Array.from(t8.childNodes || []).reduce((i3, l5) => {
    let a4 = $i(n7, l5, e16, r7, s12);
    return l5.nodeType === t8.ELEMENT_NODE && (a4 = e16.reduce((c9, h7) => h7(l5, c9, n7), a4), a4 = (s12.get(l5) || []).reduce((c9, h7) => h7(l5, c9, n7), a4)), i3.concat(a4);
  }, new O4()) : new O4();
}
function Us(n7) {
  return (t8, e16, r7) => Ee(e16, n7, true, r7);
}
function Hd(n7, t8, e16) {
  const r7 = It2.keys(n7), s12 = Nt.keys(n7), i3 = ne2.keys(n7), l5 = {};
  return r7.concat(s12).concat(i3).forEach((a4) => {
    let c9 = e16.query(a4, q5.ATTRIBUTE);
    c9 != null && (l5[c9.attrName] = c9.value(n7), l5[c9.attrName]) || (c9 = Ud[a4], c9 != null && (c9.attrName === a4 || c9.keyName === a4) && (l5[c9.attrName] = c9.value(n7) || void 0), c9 = Il[a4], c9 != null && (c9.attrName === a4 || c9.keyName === a4) && (c9 = Il[a4], l5[c9.attrName] = c9.value(n7) || void 0));
  }), Object.entries(l5).reduce((a4, c9) => {
    let [h7, d8] = c9;
    return Ee(a4, h7, d8, e16);
  }, t8);
}
function zd(n7, t8, e16) {
  const r7 = e16.query(n7);
  if (r7 == null) return t8;
  if (r7.prototype instanceof it2) {
    const s12 = {}, i3 = r7.value(n7);
    if (i3 != null)
      return s12[r7.blotName] = i3, new O4().insert(s12, r7.formats(n7, e16));
  } else if (r7.prototype instanceof wn && !Cn(t8, `
`) && t8.insert(`
`), "blotName" in r7 && "formats" in r7 && typeof r7.formats == "function")
    return Ee(t8, r7.blotName, r7.formats(n7, e16), e16);
  return t8;
}
function Gd(n7, t8) {
  return Cn(t8, `
`) || t8.insert(`
`), t8;
}
function Kd(n7, t8, e16) {
  const r7 = e16.query("code-block"), s12 = r7 && "formats" in r7 && typeof r7.formats == "function" ? r7.formats(n7, e16) : true;
  return Ee(t8, "code-block", s12, e16);
}
function Vd() {
  return new O4();
}
function Wd(n7, t8, e16) {
  const r7 = e16.query(n7);
  if (r7 == null || // @ts-expect-error
  r7.blotName !== "list" || !Cn(t8, `
`))
    return t8;
  let s12 = -1, i3 = n7.parentNode;
  for (; i3 != null; )
    ["OL", "UL"].includes(i3.tagName) && (s12 += 1), i3 = i3.parentNode;
  return s12 <= 0 ? t8 : t8.reduce((l5, a4) => a4.insert ? a4.attributes && typeof a4.attributes.indent == "number" ? l5.push(a4) : l5.insert(a4.insert, {
    indent: s12,
    ...a4.attributes || {}
  }) : l5, new O4());
}
function Zd(n7, t8, e16) {
  const r7 = n7;
  let s12 = r7.tagName === "OL" ? "ordered" : "bullet";
  const i3 = r7.getAttribute("data-checked");
  return i3 && (s12 = i3 === "true" ? "checked" : "unchecked"), Ee(t8, "list", s12, e16);
}
function Rl(n7, t8, e16) {
  if (!Cn(t8, `
`)) {
    if (Yt2(n7, e16) && (n7.childNodes.length > 0 || n7 instanceof HTMLParagraphElement))
      return t8.insert(`
`);
    if (t8.length() > 0 && n7.nextSibling) {
      let r7 = n7.nextSibling;
      for (; r7 != null; ) {
        if (Yt2(r7, e16))
          return t8.insert(`
`);
        const s12 = e16.query(r7);
        if (s12 && s12.prototype instanceof ut2)
          return t8.insert(`
`);
        r7 = r7.firstChild;
      }
    }
  }
  return t8;
}
function Xd(n7, t8, e16) {
  var i3;
  const r7 = {}, s12 = n7.style || {};
  return s12.fontStyle === "italic" && (r7.italic = true), s12.textDecoration === "underline" && (r7.underline = true), s12.textDecoration === "line-through" && (r7.strike = true), ((i3 = s12.fontWeight) != null && i3.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s12.fontWeight, 10) >= 700) && (r7.bold = true), t8 = Object.entries(r7).reduce((l5, a4) => {
    let [c9, h7] = a4;
    return Ee(l5, c9, h7, e16);
  }, t8), parseFloat(s12.textIndent || 0) > 0 ? new O4().insert("	").concat(t8) : t8;
}
function Yd(n7, t8, e16) {
  var s12, i3;
  const r7 = ((s12 = n7.parentElement) == null ? void 0 : s12.tagName) === "TABLE" ? n7.parentElement : (i3 = n7.parentElement) == null ? void 0 : i3.parentElement;
  if (r7 != null) {
    const a4 = Array.from(r7.querySelectorAll("tr")).indexOf(n7) + 1;
    return Ee(t8, "table", a4, e16);
  }
  return t8;
}
function Qd(n7, t8, e16) {
  var s12;
  let r7 = n7.data;
  if (((s12 = n7.parentElement) == null ? void 0 : s12.tagName) === "O:P")
    return t8.insert(r7.trim());
  if (!zo(n7)) {
    if (r7.trim().length === 0 && r7.includes(`
`) && !Fd(n7, e16))
      return t8;
    const i3 = (l5, a4) => {
      const c9 = a4.replace(/[^\u00a0]/g, "");
      return c9.length < 1 && l5 ? " " : c9;
    };
    r7 = r7.replace(/\r\n/g, " ").replace(/\n/g, " "), r7 = r7.replace(/\s\s+/g, i3.bind(i3, true)), (n7.previousSibling == null && n7.parentElement != null && Yt2(n7.parentElement, e16) || n7.previousSibling instanceof Element && Yt2(n7.previousSibling, e16)) && (r7 = r7.replace(/^\s+/, i3.bind(i3, false))), (n7.nextSibling == null && n7.parentElement != null && Yt2(n7.parentElement, e16) || n7.nextSibling instanceof Element && Yt2(n7.nextSibling, e16)) && (r7 = r7.replace(/\s+$/, i3.bind(i3, false)));
  }
  return t8.insert(r7);
}
var Go = class extends Tt2 {
  constructor(e16, r7) {
    super(e16, r7);
    x8(this, "lastRecorded", 0);
    x8(this, "ignoreChange", false);
    x8(this, "stack", {
      undo: [],
      redo: []
    });
    x8(this, "currentRange", null);
    this.quill.on(N3.events.EDITOR_CHANGE, (s12, i3, l5, a4) => {
      s12 === N3.events.SELECTION_CHANGE ? i3 && a4 !== N3.sources.SILENT && (this.currentRange = i3) : s12 === N3.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a4 === N3.sources.USER ? this.record(i3, l5) : this.transform(i3)), this.currentRange = li(this.currentRange, i3));
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
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s12) => {
      s12.inputType === "historyUndo" ? (this.undo(), s12.preventDefault()) : s12.inputType === "historyRedo" && (this.redo(), s12.preventDefault());
    });
  }
  change(e16, r7) {
    if (this.stack[e16].length === 0) return;
    const s12 = this.stack[e16].pop();
    if (!s12) return;
    const i3 = this.quill.getContents(), l5 = s12.delta.invert(i3);
    this.stack[r7].push({
      delta: l5,
      range: li(s12.range, l5)
    }), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(s12.delta, N3.sources.USER), this.ignoreChange = false, this.restoreSelection(s12);
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
  record(e16, r7) {
    if (e16.ops.length === 0) return;
    this.stack.redo = [];
    let s12 = e16.invert(r7), i3 = this.currentRange;
    const l5 = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > l5 && this.stack.undo.length > 0
    ) {
      const a4 = this.stack.undo.pop();
      a4 && (s12 = s12.compose(a4.delta), i3 = a4.range);
    } else
      this.lastRecorded = l5;
    s12.length() !== 0 && (this.stack.undo.push({
      delta: s12,
      range: i3
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(e16) {
    kl(this.stack.undo, e16), kl(this.stack.redo, e16);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(e16) {
    if (e16.range)
      this.quill.setSelection(e16.range, N3.sources.USER);
    else {
      const r7 = tg(this.quill.scroll, e16.delta);
      this.quill.setSelection(r7, N3.sources.USER);
    }
  }
};
x8(Go, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: false
});
function kl(n7, t8) {
  let e16 = t8;
  for (let r7 = n7.length - 1; r7 >= 0; r7 -= 1) {
    const s12 = n7[r7];
    n7[r7] = {
      delta: e16.transform(s12.delta, true),
      range: s12.range && li(s12.range, e16)
    }, e16 = s12.delta.transform(e16), n7[r7].delta.length() === 0 && n7.splice(r7, 1);
  }
}
function Jd(n7, t8) {
  const e16 = t8.ops[t8.ops.length - 1];
  return e16 == null ? false : e16.insert != null ? typeof e16.insert == "string" && e16.insert.endsWith(`
`) : e16.attributes != null ? Object.keys(e16.attributes).some((r7) => n7.query(r7, q5.BLOCK) != null) : false;
}
function tg(n7, t8) {
  const e16 = t8.reduce((s12, i3) => s12 + (i3.delete || 0), 0);
  let r7 = t8.length() - e16;
  return Jd(n7, t8) && (r7 -= 1), r7;
}
function li(n7, t8) {
  if (!n7) return n7;
  const e16 = t8.transformPosition(n7.index), r7 = t8.transformPosition(n7.index + n7.length);
  return {
    index: e16,
    length: r7 - e16
  };
}
var Ko = class extends Tt2 {
  constructor(t8, e16) {
    super(t8, e16), t8.root.addEventListener("drop", (r7) => {
      var l5;
      r7.preventDefault();
      let s12 = null;
      if (document.caretRangeFromPoint)
        s12 = document.caretRangeFromPoint(r7.clientX, r7.clientY);
      else if (document.caretPositionFromPoint) {
        const a4 = document.caretPositionFromPoint(r7.clientX, r7.clientY);
        s12 = document.createRange(), s12.setStart(a4.offsetNode, a4.offset), s12.setEnd(a4.offsetNode, a4.offset);
      }
      const i3 = s12 && t8.selection.normalizeNative(s12);
      if (i3) {
        const a4 = t8.selection.normalizedToRange(i3);
        (l5 = r7.dataTransfer) != null && l5.files && this.upload(a4, r7.dataTransfer.files);
      }
    });
  }
  upload(t8, e16) {
    const r7 = [];
    Array.from(e16).forEach((s12) => {
      var i3;
      s12 && ((i3 = this.options.mimetypes) != null && i3.includes(s12.type)) && r7.push(s12);
    }), r7.length > 0 && this.options.handler.call(this, t8, r7);
  }
};
Ko.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n7, t8) {
    if (!this.quill.scroll.query("image"))
      return;
    const e16 = t8.map((r7) => new Promise((s12) => {
      const i3 = new FileReader();
      i3.onload = () => {
        s12(i3.result);
      }, i3.readAsDataURL(r7);
    }));
    Promise.all(e16).then((r7) => {
      const s12 = r7.reduce((i3, l5) => i3.insert({
        image: l5
      }), new O4().retain(n7.index).delete(n7.length));
      this.quill.updateContents(s12, S6.sources.USER), this.quill.setSelection(n7.index + r7.length, S6.sources.SILENT);
    });
  }
};
var eg = ["insertText", "insertReplacementText"];
var ng = class extends Tt2 {
  constructor(t8, e16) {
    super(t8, e16), t8.root.addEventListener("beforeinput", (r7) => {
      this.handleBeforeInput(r7);
    }), /Android/i.test(navigator.userAgent) || t8.on(N3.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t8) {
    Mi({
      range: t8,
      quill: this.quill
    });
  }
  replaceText(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t8.length === 0) return false;
    if (e16) {
      const r7 = this.quill.getFormat(t8.index, 1);
      this.deleteRange(t8), this.quill.updateContents(new O4().retain(t8.index).insert(e16, r7), N3.sources.USER);
    } else
      this.deleteRange(t8);
    return this.quill.setSelection(t8.index + e16.length, 0, N3.sources.SILENT), true;
  }
  handleBeforeInput(t8) {
    if (this.quill.composition.isComposing || t8.defaultPrevented || !eg.includes(t8.inputType))
      return;
    const e16 = t8.getTargetRanges ? t8.getTargetRanges()[0] : null;
    if (!e16 || e16.collapsed === true)
      return;
    const r7 = rg(t8);
    if (r7 == null)
      return;
    const s12 = this.quill.selection.normalizeNative(e16), i3 = s12 ? this.quill.selection.normalizedToRange(s12) : null;
    i3 && this.replaceText(i3, r7) && t8.preventDefault();
  }
  handleCompositionStart() {
    const t8 = this.quill.getSelection();
    t8 && this.replaceText(t8);
  }
};
function rg(n7) {
  var t8;
  return typeof n7.data == "string" ? n7.data : (t8 = n7.dataTransfer) != null && t8.types.includes("text/plain") ? n7.dataTransfer.getData("text/plain") : null;
}
var sg = /Mac/i.test(navigator.platform);
var ig = 100;
var lg = (n7) => !!(n7.key === "ArrowLeft" || n7.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n7.key === "ArrowUp" || n7.key === "ArrowDown" || n7.key === "Home" || sg && n7.key === "a" && n7.ctrlKey === true);
var og = class extends Tt2 {
  constructor(e16, r7) {
    super(e16, r7);
    x8(this, "isListening", false);
    x8(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(e16, r7) {
        let {
          line: s12,
          event: i3
        } = r7;
        if (!(s12 instanceof Et2) || !s12.uiNode)
          return true;
        const l5 = getComputedStyle(s12.domNode).direction === "rtl";
        return l5 && i3.key !== "ArrowRight" || !l5 && i3.key !== "ArrowLeft" ? true : (this.quill.setSelection(e16.index - 1, e16.length + (i3.shiftKey ? 1 : 0), N3.sources.USER), false);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (e16) => {
      !e16.defaultPrevented && lg(e16) && this.ensureListeningToSelectionChange();
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
    const e16 = () => {
      this.isListening = false, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", e16, {
      once: true
    });
  }
  handleSelectionChange() {
    const e16 = document.getSelection();
    if (!e16) return;
    const r7 = e16.getRangeAt(0);
    if (r7.collapsed !== true || r7.startOffset !== 0) return;
    const s12 = this.quill.scroll.find(r7.startContainer);
    if (!(s12 instanceof Et2) || !s12.uiNode) return;
    const i3 = document.createRange();
    i3.setStartAfter(s12.uiNode), i3.setEndAfter(s12.uiNode), e16.removeAllRanges(), e16.addRange(i3);
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
  add(t8, e16) {
    let r7 = 0;
    if (e16 === "+1" || e16 === "-1") {
      const s12 = this.value(t8) || 0;
      r7 = e16 === "+1" ? s12 + 1 : s12 - 1;
    } else typeof e16 == "number" && (r7 = e16);
    return r7 === 0 ? (this.remove(t8), true) : super.add(t8, r7.toString());
  }
  canAdd(t8, e16) {
    return super.canAdd(t8, e16) || super.canAdd(t8, parseInt(e16, 10));
  }
  value(t8) {
    return parseInt(super.value(t8), 10) || void 0;
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
  static formats(t8) {
    return this.tagName.indexOf(t8.tagName) + 1;
  }
};
x8(ai, "blotName", "header"), x8(ai, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
var In = class extends ye {
};
In.blotName = "list-container";
In.tagName = "OL";
var Rn = class extends W2 {
  static create(t8) {
    const e16 = super.create();
    return e16.setAttribute("data-list", t8), e16;
  }
  static formats(t8) {
    return t8.getAttribute("data-list") || void 0;
  }
  static register() {
    N3.register(In);
  }
  constructor(t8, e16) {
    super(t8, e16);
    const r7 = e16.ownerDocument.createElement("span"), s12 = (i3) => {
      if (!t8.isEnabled()) return;
      const l5 = this.statics.formats(e16, t8);
      l5 === "checked" ? (this.format("list", "unchecked"), i3.preventDefault()) : l5 === "unchecked" && (this.format("list", "checked"), i3.preventDefault());
    };
    r7.addEventListener("mousedown", s12), r7.addEventListener("touchstart", s12), this.attachUI(r7);
  }
  format(t8, e16) {
    t8 === this.statics.blotName && e16 ? this.domNode.setAttribute("data-list", e16) : super.format(t8, e16);
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
  optimize(t8) {
    super.optimize(t8), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
};
x8(Ln, "blotName", "bold"), x8(Ln, "tagName", ["STRONG", "B"]);
var ci = class extends Ln {
};
x8(ci, "blotName", "italic"), x8(ci, "tagName", ["EM", "I"]);
var Qt2 = class extends Rt2 {
  static create(t8) {
    const e16 = super.create(t8);
    return e16.setAttribute("href", this.sanitize(t8)), e16.setAttribute("rel", "noopener noreferrer"), e16.setAttribute("target", "_blank"), e16;
  }
  static formats(t8) {
    return t8.getAttribute("href");
  }
  static sanitize(t8) {
    return Vo(t8, this.PROTOCOL_WHITELIST) ? t8 : this.SANITIZED_URL;
  }
  format(t8, e16) {
    t8 !== this.statics.blotName || !e16 ? super.format(t8, e16) : this.domNode.setAttribute("href", this.constructor.sanitize(e16));
  }
};
x8(Qt2, "blotName", "link"), x8(Qt2, "tagName", "A"), x8(Qt2, "SANITIZED_URL", "about:blank"), x8(Qt2, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Vo(n7, t8) {
  const e16 = document.createElement("a");
  e16.href = n7;
  const r7 = e16.href.slice(0, e16.href.indexOf(":"));
  return t8.indexOf(r7) > -1;
}
var ui = class extends Rt2 {
  static create(t8) {
    return t8 === "super" ? document.createElement("sup") : t8 === "sub" ? document.createElement("sub") : super.create(t8);
  }
  static formats(t8) {
    if (t8.tagName === "SUB") return "sub";
    if (t8.tagName === "SUP") return "super";
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
  static create(t8) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e16 = super.create(t8);
    return typeof t8 == "string" && (window.katex.render(t8, e16, {
      throwOnError: false,
      errorColor: "#f00"
    }), e16.setAttribute("data-value", t8)), e16;
  }
  static value(t8) {
    return t8.getAttribute("data-value");
  }
  html() {
    const {
      formula: t8
    } = this.value();
    return `<span>${t8}</span>`;
  }
};
x8(mr, "blotName", "formula"), x8(mr, "className", "ql-formula"), x8(mr, "tagName", "SPAN");
var Bl = ["alt", "height", "width"];
var di = class extends it2 {
  static create(t8) {
    const e16 = super.create(t8);
    return typeof t8 == "string" && e16.setAttribute("src", this.sanitize(t8)), e16;
  }
  static formats(t8) {
    return Bl.reduce((e16, r7) => (t8.hasAttribute(r7) && (e16[r7] = t8.getAttribute(r7)), e16), {});
  }
  static match(t8) {
    return /\.(jpe?g|gif|png)$/.test(t8) || /^data:image\/.+;base64/.test(t8);
  }
  static sanitize(t8) {
    return Vo(t8, ["http", "https", "data"]) ? t8 : "//:0";
  }
  static value(t8) {
    return t8.getAttribute("src");
  }
  format(t8, e16) {
    Bl.indexOf(t8) > -1 ? e16 ? this.domNode.setAttribute(t8, e16) : this.domNode.removeAttribute(t8) : super.format(t8, e16);
  }
};
x8(di, "blotName", "image"), x8(di, "tagName", "IMG");
var Ml = ["height", "width"];
var br = class extends ut2 {
  static create(t8) {
    const e16 = super.create(t8);
    return e16.setAttribute("frameborder", "0"), e16.setAttribute("allowfullscreen", "true"), e16.setAttribute("src", this.sanitize(t8)), e16;
  }
  static formats(t8) {
    return Ml.reduce((e16, r7) => (t8.hasAttribute(r7) && (e16[r7] = t8.getAttribute(r7)), e16), {});
  }
  static sanitize(t8) {
    return Qt2.sanitize(t8);
  }
  static value(t8) {
    return t8.getAttribute("src");
  }
  format(t8, e16) {
    Ml.indexOf(t8) > -1 ? e16 ? this.domNode.setAttribute(t8, e16) : this.domNode.removeAttribute(t8) : super.format(t8, e16);
  }
  html() {
    const {
      video: t8
    } = this.value();
    return `<a href="${t8}">${t8}</a>`;
  }
};
x8(br, "blotName", "video"), x8(br, "className", "ql-video"), x8(br, "tagName", "IFRAME");
var pn = new Nt("code-token", "hljs", {
  scope: q5.INLINE
});
var Ft = class _Ft extends Rt2 {
  static formats(t8, e16) {
    for (; t8 != null && t8 !== e16.domNode; ) {
      if (t8.classList && t8.classList.contains(J2.className))
        return super.formats(t8, e16);
      t8 = t8.parentNode;
    }
  }
  constructor(t8, e16, r7) {
    super(t8, e16, r7), pn.add(this.domNode, r7);
  }
  format(t8, e16) {
    t8 !== _Ft.blotName ? super.format(t8, e16) : e16 ? pn.add(this.domNode, e16) : (pn.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), pn.value(this.domNode) || this.unwrap();
  }
};
Ft.blotName = "code-token";
Ft.className = "ql-token";
var ct2 = class extends J2 {
  static create(t8) {
    const e16 = super.create(t8);
    return typeof t8 == "string" && e16.setAttribute("data-language", t8), e16;
  }
  static formats(t8) {
    return t8.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t8, e16) {
    t8 === this.statics.blotName && e16 ? this.domNode.setAttribute("data-language", e16) : super.format(t8, e16);
  }
  replaceWith(t8, e16) {
    return this.formatAt(0, this.length(), Ft.blotName, false), super.replaceWith(t8, e16);
  }
};
var bn = class extends ve {
  attach() {
    super.attach(), this.forceNext = false, this.scroll.emitMount(this);
  }
  format(t8, e16) {
    t8 === ct2.blotName && (this.forceNext = true, this.children.forEach((r7) => {
      r7.format(t8, e16);
    }));
  }
  formatAt(t8, e16, r7, s12) {
    r7 === ct2.blotName && (this.forceNext = true), super.formatAt(t8, e16, r7, s12);
  }
  highlight(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (this.children.head == null) return;
    const s12 = `${Array.from(this.domNode.childNodes).filter((l5) => l5 !== this.uiNode).map((l5) => l5.textContent).join(`
`)}
`, i3 = ct2.formats(this.children.head.domNode);
    if (e16 || this.forceNext || this.cachedText !== s12) {
      if (s12.trim().length > 0 || this.cachedText == null) {
        const l5 = this.children.reduce((c9, h7) => c9.concat(Oo(h7, false)), new O4()), a4 = t8(s12, i3);
        l5.diff(a4).reduce((c9, h7) => {
          let {
            retain: d8,
            attributes: m6
          } = h7;
          return d8 ? (m6 && Object.keys(m6).forEach((g10) => {
            [ct2.blotName, Ft.blotName].includes(g10) && this.formatAt(c9, d8, g10, m6[g10]);
          }), c9 + d8) : c9;
        }, 0);
      }
      this.cachedText = s12, this.forceNext = false;
    }
  }
  html(t8, e16) {
    const [r7] = this.children.find(t8);
    return `<pre data-language="${r7 ? ct2.formats(r7.domNode) : "plain"}">
${Ir(this.code(t8, e16))}
</pre>`;
  }
  optimize(t8) {
    if (super.optimize(t8), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e16 = ct2.formats(this.children.head.domNode);
      e16 !== this.uiNode.value && (this.uiNode.value = e16);
    }
  }
};
bn.allowedChildren = [ct2];
ct2.requiredContainer = bn;
ct2.allowedChildren = [Ft, He, At2, wt];
var ug = (n7, t8, e16) => {
  if (typeof n7.versionString == "string") {
    const r7 = n7.versionString.split(".")[0];
    if (parseInt(r7, 10) >= 11)
      return n7.highlight(e16, {
        language: t8
      }).value;
  }
  return n7.highlight(t8, e16).value;
};
var Wo = class extends Tt2 {
  static register() {
    N3.register(Ft, true), N3.register(ct2, true), N3.register(bn, true);
  }
  constructor(t8, e16) {
    if (super(t8, e16), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r7, s12) => {
      let {
        key: i3
      } = s12;
      return r7[i3] = true, r7;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(N3.events.SCROLL_BLOT_MOUNT, (t8) => {
      if (!(t8 instanceof bn)) return;
      const e16 = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r7) => {
        let {
          key: s12,
          label: i3
        } = r7;
        const l5 = e16.ownerDocument.createElement("option");
        l5.textContent = i3, l5.setAttribute("value", s12), e16.appendChild(l5);
      }), e16.addEventListener("change", () => {
        t8.format(ct2.blotName, e16.value), this.quill.root.focus(), this.highlight(t8, true);
      }), t8.uiNode == null && (t8.attachUI(e16), t8.children.head && (e16.value = ct2.formats(t8.children.head.domNode)));
    });
  }
  initTimer() {
    let t8 = null;
    this.quill.on(N3.events.SCROLL_OPTIMIZE, () => {
      t8 && clearTimeout(t8), t8 = setTimeout(() => {
        this.highlight(), t8 = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (this.quill.selection.composing) return;
    this.quill.update(N3.sources.USER);
    const r7 = this.quill.getSelection();
    (t8 == null ? this.quill.scroll.descendants(bn) : [t8]).forEach((i3) => {
      i3.highlight(this.highlightBlot, e16);
    }), this.quill.update(N3.sources.SILENT), r7 != null && this.quill.setSelection(r7, N3.sources.SILENT);
  }
  highlightBlot(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e16 = this.languages[e16] ? e16 : "plain", e16 === "plain")
      return Ir(t8).split(`
`).reduce((s12, i3, l5) => (l5 !== 0 && s12.insert(`
`, {
        [J2.blotName]: e16
      }), s12.insert(i3)), new O4());
    const r7 = this.quill.root.ownerDocument.createElement("div");
    return r7.classList.add(J2.className), r7.innerHTML = ug(this.options.hljs, e16, t8), $i(this.quill.scroll, r7, [(s12, i3) => {
      const l5 = pn.value(s12);
      return l5 ? i3.compose(new O4().retain(i3.length(), {
        [Ft.blotName]: l5
      })) : i3;
    }], [(s12, i3) => s12.data.split(`
`).reduce((l5, a4, c9) => (c9 !== 0 && l5.insert(`
`, {
      [J2.blotName]: e16
    }), l5.insert(a4)), i3)], /* @__PURE__ */ new WeakMap());
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
  static create(t8) {
    const e16 = super.create();
    return t8 ? e16.setAttribute("data-row", t8) : e16.setAttribute("data-row", Di()), e16;
  }
  static formats(t8) {
    if (t8.hasAttribute("data-row"))
      return t8.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t8, e16) {
    t8 === vn2.blotName && e16 ? this.domNode.setAttribute("data-row", e16) : super.format(t8, e16);
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
      const t8 = this.children.head.formats(), e16 = this.children.tail.formats(), r7 = this.next.children.head.formats(), s12 = this.next.children.tail.formats();
      return t8.table === e16.table && t8.table === r7.table && t8.table === s12.table;
    }
    return false;
  }
  optimize(t8) {
    super.optimize(t8), this.children.forEach((e16) => {
      if (e16.next == null) return;
      const r7 = e16.formats(), s12 = e16.next.formats();
      if (r7.table !== s12.table) {
        const i3 = this.splitAfter(e16);
        i3 && i3.optimize(), this.prev && this.prev.optimize();
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
    const t8 = this.descendants(Ht2), e16 = t8.reduce((r7, s12) => Math.max(s12.children.length, r7), 0);
    t8.forEach((r7) => {
      new Array(e16 - r7.children.length).fill(0).forEach(() => {
        let s12;
        r7.children.head != null && (s12 = vt2.formats(r7.children.head.domNode));
        const i3 = this.scroll.create(vt2.blotName, s12);
        r7.appendChild(i3), i3.optimize();
      });
    });
  }
  cells(t8) {
    return this.rows().map((e16) => e16.children.at(t8));
  }
  deleteColumn(t8) {
    const [e16] = this.descendant(Ct2);
    e16 == null || e16.children.head == null || e16.children.forEach((r7) => {
      const s12 = r7.children.at(t8);
      s12 != null && s12.remove();
    });
  }
  insertColumn(t8) {
    const [e16] = this.descendant(Ct2);
    e16 == null || e16.children.head == null || e16.children.forEach((r7) => {
      const s12 = r7.children.at(t8), i3 = vt2.formats(r7.children.head.domNode), l5 = this.scroll.create(vt2.blotName, i3);
      r7.insertBefore(l5, s12);
    });
  }
  insertRow(t8) {
    const [e16] = this.descendant(Ct2);
    if (e16 == null || e16.children.head == null) return;
    const r7 = Di(), s12 = this.scroll.create(Ht2.blotName);
    e16.children.head.children.forEach(() => {
      const l5 = this.scroll.create(vt2.blotName, r7);
      s12.appendChild(l5);
    });
    const i3 = e16.children.at(t8);
    e16.insertBefore(s12, i3);
  }
  rows() {
    const t8 = this.children.head;
    return t8 == null ? [] : t8.children.map((e16) => e16);
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
    this.quill.scroll.descendants(Ge).forEach((t8) => {
      t8.balanceCells();
    });
  }
  deleteColumn() {
    const [t8, , e16] = this.getTable();
    e16 != null && (t8.deleteColumn(e16.cellOffset()), this.quill.update(N3.sources.USER));
  }
  deleteRow() {
    const [, t8] = this.getTable();
    t8 != null && (t8.remove(), this.quill.update(N3.sources.USER));
  }
  deleteTable() {
    const [t8] = this.getTable();
    if (t8 == null) return;
    const e16 = t8.offset();
    t8.remove(), this.quill.update(N3.sources.USER), this.quill.setSelection(e16, N3.sources.SILENT);
  }
  getTable() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t8 == null) return [null, null, null, -1];
    const [e16, r7] = this.quill.getLine(t8.index);
    if (e16 == null || e16.statics.blotName !== vt2.blotName)
      return [null, null, null, -1];
    const s12 = e16.parent;
    return [s12.parent.parent, s12, e16, r7];
  }
  insertColumn(t8) {
    const e16 = this.quill.getSelection();
    if (!e16) return;
    const [r7, s12, i3] = this.getTable(e16);
    if (i3 == null) return;
    const l5 = i3.cellOffset();
    r7.insertColumn(l5 + t8), this.quill.update(N3.sources.USER);
    let a4 = s12.rowOffset();
    t8 === 0 && (a4 += 1), this.quill.setSelection(e16.index + a4, e16.length, N3.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t8) {
    const e16 = this.quill.getSelection();
    if (!e16) return;
    const [r7, s12, i3] = this.getTable(e16);
    if (i3 == null) return;
    const l5 = s12.rowOffset();
    r7.insertRow(l5 + t8), this.quill.update(N3.sources.USER), t8 > 0 ? this.quill.setSelection(e16, N3.sources.SILENT) : this.quill.setSelection(e16.index + s12.children.length, e16.length, N3.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t8, e16) {
    const r7 = this.quill.getSelection();
    if (r7 == null) return;
    const s12 = new Array(t8).fill(0).reduce((i3) => {
      const l5 = new Array(e16).fill(`
`).join("");
      return i3.insert(l5, {
        table: Di()
      });
    }, new O4().retain(r7.index));
    this.quill.updateContents(s12, N3.sources.USER), this.quill.setSelection(r7.index, N3.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(N3.events.SCROLL_OPTIMIZE, (t8) => {
      t8.some((e16) => ["TD", "TR", "TBODY", "TABLE"].includes(e16.target.tagName) ? (this.quill.once(N3.events.TEXT_CHANGE, (r7, s12, i3) => {
        i3 === N3.sources.USER && this.balanceTables();
      }), true) : false);
    });
  }
};
var $l = Gt2("quill:toolbar");
var ji = class extends Tt2 {
  constructor(t8, e16) {
    var r7, s12;
    if (super(t8, e16), Array.isArray(this.options.container)) {
      const i3 = document.createElement("div");
      i3.setAttribute("role", "toolbar"), fg(i3, this.options.container), (s12 = (r7 = t8.container) == null ? void 0 : r7.parentNode) == null || s12.insertBefore(i3, t8.container), this.container = i3;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      $l.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i3) => {
      var a4;
      const l5 = (a4 = this.options.handlers) == null ? void 0 : a4[i3];
      l5 && this.addHandler(i3, l5);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i3) => {
      this.attach(i3);
    }), this.quill.on(N3.events.EDITOR_CHANGE, () => {
      const [i3] = this.quill.selection.getRange();
      this.update(i3);
    });
  }
  addHandler(t8, e16) {
    this.handlers[t8] = e16;
  }
  attach(t8) {
    let e16 = Array.from(t8.classList).find((s12) => s12.indexOf("ql-") === 0);
    if (!e16) return;
    if (e16 = e16.slice(3), t8.tagName === "BUTTON" && t8.setAttribute("type", "button"), this.handlers[e16] == null && this.quill.scroll.query(e16) == null) {
      $l.warn("ignoring attaching to nonexistent format", e16, t8);
      return;
    }
    const r7 = t8.tagName === "SELECT" ? "change" : "click";
    t8.addEventListener(r7, (s12) => {
      let i3;
      if (t8.tagName === "SELECT") {
        if (t8.selectedIndex < 0) return;
        const a4 = t8.options[t8.selectedIndex];
        a4.hasAttribute("selected") ? i3 = false : i3 = a4.value || false;
      } else
        t8.classList.contains("ql-active") ? i3 = false : i3 = t8.value || !t8.hasAttribute("value"), s12.preventDefault();
      this.quill.focus();
      const [l5] = this.quill.selection.getRange();
      if (this.handlers[e16] != null)
        this.handlers[e16].call(this, i3);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e16).prototype instanceof it2
      ) {
        if (i3 = prompt(`Enter ${e16}`), !i3) return;
        this.quill.updateContents(new O4().retain(l5.index).delete(l5.length).insert({
          [e16]: i3
        }), N3.sources.USER);
      } else
        this.quill.format(e16, i3, N3.sources.USER);
      this.update(l5);
    }), this.controls.push([e16, t8]);
  }
  update(t8) {
    const e16 = t8 == null ? {} : this.quill.getFormat(t8);
    this.controls.forEach((r7) => {
      const [s12, i3] = r7;
      if (i3.tagName === "SELECT") {
        let l5 = null;
        if (t8 == null)
          l5 = null;
        else if (e16[s12] == null)
          l5 = i3.querySelector("option[selected]");
        else if (!Array.isArray(e16[s12])) {
          let a4 = e16[s12];
          typeof a4 == "string" && (a4 = a4.replace(/"/g, '\\"')), l5 = i3.querySelector(`option[value="${a4}"]`);
        }
        l5 == null ? (i3.value = "", i3.selectedIndex = -1) : l5.selected = true;
      } else if (t8 == null)
        i3.classList.remove("ql-active"), i3.setAttribute("aria-pressed", "false");
      else if (i3.hasAttribute("value")) {
        const l5 = e16[s12], a4 = l5 === i3.getAttribute("value") || l5 != null && l5.toString() === i3.getAttribute("value") || l5 == null && !i3.getAttribute("value");
        i3.classList.toggle("ql-active", a4), i3.setAttribute("aria-pressed", a4.toString());
      } else {
        const l5 = e16[s12] != null;
        i3.classList.toggle("ql-active", l5), i3.setAttribute("aria-pressed", l5.toString());
      }
    });
  }
};
ji.DEFAULTS = {};
function Dl(n7, t8, e16) {
  const r7 = document.createElement("button");
  r7.setAttribute("type", "button"), r7.classList.add(`ql-${t8}`), r7.setAttribute("aria-pressed", "false"), e16 != null ? (r7.value = e16, r7.setAttribute("aria-label", `${t8}: ${e16}`)) : r7.setAttribute("aria-label", t8), n7.appendChild(r7);
}
function fg(n7, t8) {
  Array.isArray(t8[0]) || (t8 = [t8]), t8.forEach((e16) => {
    const r7 = document.createElement("span");
    r7.classList.add("ql-formats"), e16.forEach((s12) => {
      if (typeof s12 == "string")
        Dl(r7, s12);
      else {
        const i3 = Object.keys(s12)[0], l5 = s12[i3];
        Array.isArray(l5) ? dg(r7, i3, l5) : Dl(r7, i3, l5);
      }
    }), n7.appendChild(r7);
  });
}
function dg(n7, t8, e16) {
  const r7 = document.createElement("select");
  r7.classList.add(`ql-${t8}`), e16.forEach((s12) => {
    const i3 = document.createElement("option");
    s12 !== false ? i3.setAttribute("value", String(s12)) : i3.setAttribute("selected", "selected"), r7.appendChild(i3);
  }), n7.appendChild(r7);
}
ji.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n7 = this.quill.getSelection();
      if (n7 != null)
        if (n7.length === 0) {
          const t8 = this.quill.getFormat();
          Object.keys(t8).forEach((e16) => {
            this.quill.scroll.query(e16, q5.INLINE) != null && this.quill.format(e16, false, N3.sources.USER);
          });
        } else
          this.quill.removeFormat(n7.index, n7.length, N3.sources.USER);
    },
    direction(n7) {
      const {
        align: t8
      } = this.quill.getFormat();
      n7 === "rtl" && t8 == null ? this.quill.format("align", "right", N3.sources.USER) : !n7 && t8 === "right" && this.quill.format("align", false, N3.sources.USER), this.quill.format("direction", n7, N3.sources.USER);
    },
    indent(n7) {
      const t8 = this.quill.getSelection(), e16 = this.quill.getFormat(t8), r7 = parseInt(e16.indent || 0, 10);
      if (n7 === "+1" || n7 === "-1") {
        let s12 = n7 === "+1" ? 1 : -1;
        e16.direction === "rtl" && (s12 *= -1), this.quill.format("indent", r7 + s12, N3.sources.USER);
      }
    },
    link(n7) {
      n7 === true && (n7 = prompt("Enter link URL:")), this.quill.format("link", n7, N3.sources.USER);
    },
    list(n7) {
      const t8 = this.quill.getSelection(), e16 = this.quill.getFormat(t8);
      n7 === "check" ? e16.list === "checked" || e16.list === "unchecked" ? this.quill.format("list", false, N3.sources.USER) : this.quill.format("list", "unchecked", N3.sources.USER) : this.quill.format("list", n7, N3.sources.USER);
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
function Ul(n7, t8) {
  n7.setAttribute(t8, `${n7.getAttribute(t8) !== "true"}`);
}
var kr = class {
  constructor(t8) {
    this.select = t8, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e16) => {
      switch (e16.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e16.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), Ul(this.label, "aria-expanded"), Ul(this.options, "aria-hidden");
  }
  buildItem(t8) {
    const e16 = document.createElement("span");
    e16.tabIndex = "0", e16.setAttribute("role", "button"), e16.classList.add("ql-picker-item");
    const r7 = t8.getAttribute("value");
    return r7 && e16.setAttribute("data-value", r7), t8.textContent && e16.setAttribute("data-label", t8.textContent), e16.addEventListener("click", () => {
      this.selectItem(e16, true);
    }), e16.addEventListener("keydown", (s12) => {
      switch (s12.key) {
        case "Enter":
          this.selectItem(e16, true), s12.preventDefault();
          break;
        case "Escape":
          this.escape(), s12.preventDefault();
          break;
      }
    }), e16;
  }
  buildLabel() {
    const t8 = document.createElement("span");
    return t8.classList.add("ql-picker-label"), t8.innerHTML = Kg, t8.tabIndex = "0", t8.setAttribute("role", "button"), t8.setAttribute("aria-expanded", "false"), this.container.appendChild(t8), t8;
  }
  buildOptions() {
    const t8 = document.createElement("span");
    t8.classList.add("ql-picker-options"), t8.setAttribute("aria-hidden", "true"), t8.tabIndex = "-1", t8.id = `ql-picker-options-${Pl}`, Pl += 1, this.label.setAttribute("aria-controls", t8.id), this.options = t8, Array.from(this.select.options).forEach((e16) => {
      const r7 = this.buildItem(e16);
      t8.appendChild(r7), e16.selected === true && this.selectItem(r7);
    }), this.container.appendChild(t8);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t8) => {
      this.container.setAttribute(t8.name, t8.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t8) {
    let e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const r7 = this.container.querySelector(".ql-selected");
    t8 !== r7 && (r7 != null && r7.classList.remove("ql-selected"), t8 != null && (t8.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t8.parentNode.children).indexOf(t8), t8.hasAttribute("data-value") ? this.label.setAttribute("data-value", t8.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t8.hasAttribute("data-label") ? this.label.setAttribute("data-label", t8.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e16 && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t8;
    if (this.select.selectedIndex > -1) {
      const r7 = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t8 = this.select.options[this.select.selectedIndex], this.selectItem(r7);
    } else
      this.selectItem(null);
    const e16 = t8 != null && t8 !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e16);
  }
};
var Zo = class extends kr {
  constructor(t8, e16) {
    super(t8), this.label.innerHTML = e16, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r7) => {
      r7.classList.add("ql-primary");
    });
  }
  buildItem(t8) {
    const e16 = super.buildItem(t8);
    return e16.style.backgroundColor = t8.getAttribute("value") || "", e16;
  }
  selectItem(t8, e16) {
    super.selectItem(t8, e16);
    const r7 = this.label.querySelector(".ql-color-label"), s12 = t8 && t8.getAttribute("data-value") || "";
    r7 && (r7.tagName === "line" ? r7.style.stroke = s12 : r7.style.fill = s12);
  }
};
var Xo = class extends kr {
  constructor(t8, e16) {
    super(t8), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r7) => {
      r7.innerHTML = e16[r7.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t8, e16) {
    super.selectItem(t8, e16);
    const r7 = t8 || this.defaultItem;
    if (r7 != null) {
      if (this.label.innerHTML === r7.innerHTML) return;
      this.label.innerHTML = r7.innerHTML;
    }
  }
};
var Vg = (n7) => {
  const {
    overflowY: t8
  } = getComputedStyle(n7, null);
  return t8 !== "visible" && t8 !== "clip";
};
var Yo = class {
  constructor(t8, e16) {
    this.quill = t8, this.boundsContainer = e16 || document.body, this.root = t8.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Vg(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t8) {
    const e16 = t8.left + t8.width / 2 - this.root.offsetWidth / 2, r7 = t8.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e16}px`, this.root.style.top = `${r7}px`, this.root.classList.remove("ql-flip");
    const s12 = this.boundsContainer.getBoundingClientRect(), i3 = this.root.getBoundingClientRect();
    let l5 = 0;
    if (i3.right > s12.right && (l5 = s12.right - i3.right, this.root.style.left = `${e16 + l5}px`), i3.left < s12.left && (l5 = s12.left - i3.left, this.root.style.left = `${e16 + l5}px`), i3.bottom > s12.bottom) {
      const a4 = i3.bottom - i3.top, c9 = t8.bottom - t8.top + a4;
      this.root.style.top = `${r7 - c9}px`, this.root.classList.add("ql-flip");
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
  constructor(t8, e16) {
    super(t8, e16);
    const r7 = (s12) => {
      if (!document.body.contains(t8.root)) {
        document.body.removeEventListener("click", r7);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s12.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i3) => {
        i3.container.contains(s12.target) || i3.close();
      });
    };
    t8.emitter.listenDOM("click", document.body, r7);
  }
  addModule(t8) {
    const e16 = super.addModule(t8);
    return t8 === "toolbar" && this.extendToolbar(e16), e16;
  }
  buildButtons(t8, e16) {
    Array.from(t8).forEach((r7) => {
      (r7.getAttribute("class") || "").split(/\s+/).forEach((i3) => {
        if (i3.startsWith("ql-") && (i3 = i3.slice(3), e16[i3] != null))
          if (i3 === "direction")
            r7.innerHTML = e16[i3][""] + e16[i3].rtl;
          else if (typeof e16[i3] == "string")
            r7.innerHTML = e16[i3];
          else {
            const l5 = r7.value || "";
            l5 != null && e16[i3][l5] && (r7.innerHTML = e16[i3][l5]);
          }
      });
    });
  }
  buildPickers(t8, e16) {
    this.pickers = Array.from(t8).map((s12) => {
      if (s12.classList.contains("ql-align") && (s12.querySelector("option") == null && gn(s12, Wg), typeof e16.align == "object"))
        return new Xo(s12, e16.align);
      if (s12.classList.contains("ql-background") || s12.classList.contains("ql-color")) {
        const i3 = s12.classList.contains("ql-background") ? "background" : "color";
        return s12.querySelector("option") == null && gn(s12, Zg, i3 === "background" ? "#ffffff" : "#000000"), new Zo(s12, e16[i3]);
      }
      return s12.querySelector("option") == null && (s12.classList.contains("ql-font") ? gn(s12, Xg) : s12.classList.contains("ql-header") ? gn(s12, Yg) : s12.classList.contains("ql-size") && gn(s12, Qg)), new kr(s12);
    });
    const r7 = () => {
      this.pickers.forEach((s12) => {
        s12.update();
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
          let n7 = this.container.querySelector("input.ql-image[type=file]");
          n7 == null && (n7 = document.createElement("input"), n7.setAttribute("type", "file"), n7.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n7.classList.add("ql-image"), n7.addEventListener("change", () => {
            const t8 = this.quill.getSelection(true);
            this.quill.uploader.upload(t8, n7.files), n7.value = "";
          }), this.container.appendChild(n7)), n7.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
var Qo = class extends Yo {
  constructor(t8, e16) {
    super(t8, e16), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t8) => {
      t8.key === "Enter" ? (this.save(), t8.preventDefault()) : t8.key === "Escape" && (this.cancel(), t8.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    e16 != null ? this.textbox.value = e16 : t8 !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r7 = this.quill.getBounds(this.quill.selection.savedRange);
    r7 != null && this.position(r7), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t8}`) || ""), this.root.setAttribute("data-mode", t8);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: true
    });
  }
  save() {
    let {
      value: t8
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e16
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t8, S6.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t8, S6.sources.USER)), this.quill.root.scrollTop = e16;
        break;
      }
      case "video":
        t8 = Jg(t8);
      case "formula": {
        if (!t8) break;
        const e16 = this.quill.getSelection(true);
        if (e16 != null) {
          const r7 = e16.index + e16.length;
          this.quill.insertEmbed(
            r7,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t8,
            S6.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r7 + 1, " ", S6.sources.USER), this.quill.setSelection(r7 + 2, S6.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
};
function Jg(n7) {
  let t8 = n7.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n7.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t8 ? `${t8[1] || "https"}://www.youtube.com/embed/${t8[2]}?showinfo=0` : (t8 = n7.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t8[1] || "https"}://player.vimeo.com/video/${t8[2]}/` : n7;
}
function gn(n7, t8) {
  let e16 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  t8.forEach((r7) => {
    const s12 = document.createElement("option");
    r7 === e16 ? s12.setAttribute("selected", "selected") : s12.setAttribute("value", String(r7)), n7.appendChild(s12);
  });
}
var tp = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
var Jo = class extends Qo {
  constructor(t8, e16) {
    super(t8, e16), this.quill.on(S6.events.EDITOR_CHANGE, (r7, s12, i3, l5) => {
      if (r7 === S6.events.SELECTION_CHANGE)
        if (s12 != null && s12.length > 0 && l5 === S6.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a4 = this.quill.getLines(s12.index, s12.length);
          if (a4.length === 1) {
            const c9 = this.quill.getBounds(s12);
            c9 != null && this.position(c9);
          } else {
            const c9 = a4[a4.length - 1], h7 = this.quill.getIndex(c9), d8 = Math.min(c9.length() - 1, s12.index + s12.length - h7), m6 = this.quill.getBounds(new ge2(h7, d8));
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
        const t8 = this.quill.getSelection();
        if (t8 != null) {
          const e16 = this.quill.getBounds(t8);
          e16 != null && this.position(e16);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t8) {
    const e16 = super.position(t8), r7 = this.root.querySelector(".ql-tooltip-arrow");
    return r7.style.marginLeft = "", e16 !== 0 && (r7.style.marginLeft = `${-1 * e16 - r7.offsetWidth / 2}px`), e16;
  }
};
x8(Jo, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
var ta = class extends kn {
  constructor(t8, e16) {
    e16.modules.toolbar != null && e16.modules.toolbar.container == null && (e16.modules.toolbar.container = tp), super(t8, e16), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t8) {
    this.tooltip = new Jo(this.quill, this.options.bounds), t8.container != null && (this.tooltip.root.appendChild(t8.container), this.buildButtons(t8.container.querySelectorAll("button"), Sn), this.buildPickers(t8.container.querySelectorAll("select"), Sn));
  }
};
ta.DEFAULTS = Jt2({}, kn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n7) {
          n7 ? this.quill.theme.tooltip.edit() : this.quill.format("link", false, N3.sources.USER);
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
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (e16) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), e16.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (e16) => {
      if (this.linkRange != null) {
        const r7 = this.linkRange;
        this.restoreFocus(), this.quill.formatText(r7, "link", false, S6.sources.USER), delete this.linkRange;
      }
      e16.preventDefault(), this.hide();
    }), this.quill.on(S6.events.SELECTION_CHANGE, (e16, r7, s12) => {
      if (e16 != null) {
        if (e16.length === 0 && s12 === S6.sources.USER) {
          const [i3, l5] = this.quill.scroll.descendant(Qt2, e16.index);
          if (i3 != null) {
            this.linkRange = new ge2(e16.index - l5, i3.length());
            const a4 = Qt2.formats(i3.domNode);
            this.preview.textContent = a4, this.preview.setAttribute("href", a4), this.show();
            const c9 = this.quill.getBounds(this.linkRange);
            c9 != null && this.position(c9);
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
  constructor(t8, e16) {
    e16.modules.toolbar != null && e16.modules.toolbar.container == null && (e16.modules.toolbar.container = ep), super(t8, e16), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t8) {
    t8.container != null && (t8.container.classList.add("ql-snow"), this.buildButtons(t8.container.querySelectorAll("button"), Sn), this.buildPickers(t8.container.querySelectorAll("select"), Sn), this.tooltip = new ea(this.quill, this.options.bounds), t8.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: true
    }, (e16, r7) => {
      t8.handlers.link.call(t8, !r7.format.link);
    }));
  }
};
na.DEFAULTS = Jt2({}, kn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n7) {
          if (n7) {
            const t8 = this.quill.getSelection();
            if (t8 == null || t8.length === 0) return;
            let e16 = this.quill.getText(t8);
            /^\S+@\S+\.\S+$/.test(e16) && e16.indexOf("mailto:") !== 0 && (e16 = `mailto:${e16}`);
            const {
              tooltip: r7
            } = this.quill.theme;
            r7.edit("link", e16);
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

// node_modules/ultra-ui/venders/day.vue_vue_type_script_setup_true_lang-G0jXbXjq.js
var F5 = defineComponent({
  name: "DatePickerDayHeader",
  __name: "day",
  setup(x11) {
    const {
      state: r7,
      cls: a4,
      handlePreYear: s12,
      handlePreMonth: c9,
      handleNextYear: d8,
      handleNextMonth: f11
    } = I3("inject");
    return (A11, n7) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(a4).e("header"))
      },
      [
        createBaseVNode("div", null, [
          createVNode(unref(k), {
            onClick: unref(s12),
            title: "上一年"
          }, {
            default: withCtx(() => [
              createVNode(unref(d_arrow_left_default))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          createVNode(unref(k), {
            onClick: unref(c9),
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
              class: normalizeClass(unref(a4).e("header-year")),
              onClick: n7[0] || (n7[0] = (k6) => unref(r7).panel = "year")
            },
            toDisplayString(unref(r7).panelDate.year),
            3
            /* TEXT, CLASS */
          ),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(a4).e("header-month")),
              onClick: n7[1] || (n7[1] = (k6) => unref(r7).panel = "month")
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
            onClick: unref(d8),
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
    const { state: r7, cls: o10, handlePreYear: p3, handleNextYear: l5 } = I3("inject");
    return (D4, i3) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(o10).e("header"))
      },
      [
        createVNode(unref(k), {
          onClick: unref(p3),
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
            class: normalizeClass(unref(o10).e("header-year")),
            onClick: i3[0] || (i3[0] = (x11) => unref(r7).panel = "year")
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
    const { state: r7, cls: p3, handlePreTenYears: l5, handleNextTenYears: c9 } = I3("inject"), o10 = computed(() => r7.panelDate.year - r7.panelDate.year % 10 + 1), s12 = computed(() => o10.value + 9);
    return (x11, y4) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(p3).e("header"))
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
          toDisplayString(o10.value) + " ~ " + toDisplayString(s12.value),
          1
          /* TEXT */
        ),
        createVNode(unref(k), {
          onClick: unref(c9),
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
    return ($12, d8) => (openBlock(), createElementBlock(
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
    const m6 = f11, i3 = u5, a4 = e("date-picker"), { formProps: _10 } = i(), { size: s12, disabled: b10, readonly: k6 } = g(
      [_10 ?? {}, m6],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), v6 = computed(() => [a4.b, a4.m(s12.value)]), n7 = shallowRef(), { updatePanelDate: y4 } = I3("provide", {
      props: m6,
      emit: i3,
      closeDropdown: () => {
        var o10;
        return (o10 = n7.value) == null ? void 0 : o10.close();
      }
    });
    return (o10, l5) => unref(k6) ? (openBlock(), createElementBlock(
      "span",
      O5,
      toDisplayString(o10.modelValue || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      class: normalizeClass(v6.value),
      trigger: "click",
      "content-class": [unref(a4).e("panel"), unref(a4).em("panel", unref(s12))],
      width: "auto",
      ref_key: "dropdownRef",
      ref: n7,
      "onUpdate:visible": l5[1] || (l5[1] = (d8) => d8 && unref(y4)()),
      disabled: unref(b10)
    }, {
      trigger: withCtx(() => [
        createVNode(unref(Ve), {
          size: unref(s12),
          "native-readonly": "",
          placeholder: o10.placeholder,
          "model-value": o10.modelValue,
          "onUpdate:modelValue": l5[0] || (l5[0] = (d8) => i3("update:modelValue", d8))
        }, {
          suffix: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(a4).e("icon"))
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
function s7(r7 = false, t8) {
  const e16 = {
    value: r7
  };
  function l5(u5) {
    if (typeof u5 == "boolean")
      return e16.value = u5, t8 == null ? void 0 : t8(e16.value);
    const o10 = u5(e16.value);
    o10 instanceof Promise ? o10.then(l5) : l5(o10);
  }
  return [e16, l5];
}

// node_modules/ultra-ui/compositions/use-transition/use-css-transition.js
function b8(H4) {
  const {
    name: v6,
    target: i3,
    afterEnter: l5,
    afterLeave: f11,
    enterCanceled: u5,
    leaveCanceled: L5,
    keepEnterTo: T6 = false
  } = H4, o10 = () => isRef(i3) ? i3.value : i3, c9 = computed(() => {
    const e16 = typeof v6 == "string" ? v6 : v6.value;
    return {
      /** 进入前的类 */
      enterFrom: `${e16}-enter-from`,
      /** 进入后最终的类 */
      enterTo: `${e16}-enter-to`,
      /** 【进入动画】持续时的类 */
      enterActive: `${e16}-enter-active`,
      /** 离开前的类 */
      leaveFrom: `${e16}-leave-from`,
      /** 离开类 */
      leaveTo: `${e16}-leave-to`,
      /** 【离开动画】持续时的类 */
      leaveActive: `${e16}-leave-active`
    };
  }), P8 = () => {
    const { enterActive: e16, enterTo: s12, enterFrom: a4 } = c9.value, t8 = o10();
    t8 == null || t8.classList.add(a4), t8 == null || t8.classList.add(e16), n4(() => {
      t8 == null || t8.classList.remove(a4), t8 == null || t8.classList.add(s12);
    });
  }, h7 = () => {
    const { leaveTo: e16, leaveActive: s12, leaveFrom: a4, enterTo: t8 } = c9.value, n7 = o10();
    T6 && (n7 == null || n7.classList.remove(t8)), n7 == null || n7.classList.add(a4, s12), n4(() => {
      n7 == null || n7.classList.remove(a4), n7 == null || n7.classList.add(e16);
    });
  }, m6 = (e16) => {
    e16.stopPropagation();
    const { leaveActive: s12, enterActive: a4, enterTo: t8, leaveTo: n7 } = c9.value, r7 = o10();
    A11.value ? (T6 ? r7 == null || r7.classList.remove(a4) : r7 == null || r7.classList.remove(a4, t8), l5 == null || l5()) : (r7 == null || r7.classList.remove(s12, n7), f11 == null || f11());
  }, g10 = (e16) => {
    e16.stopPropagation();
    const s12 = o10();
    if (s12 !== e16.target) return;
    const { leaveActive: a4, enterActive: t8 } = c9.value;
    A11.value ? (s12 == null || s12.classList.remove(t8), u5 == null || u5()) : (s12 == null || s12.classList.remove(a4), L5 == null || L5());
  }, [A11, p3] = s7(false, (e16) => {
    e16 ? P8() : h7();
  }), E11 = (e16) => {
    e16 == null || e16.addEventListener("transitioncancel", g10), e16 == null || e16.addEventListener("transitionend", m6);
  }, $12 = (e16) => {
    e16 == null || e16.removeEventListener("transitioncancel", g10), e16 == null || e16.removeEventListener("transitionend", m6);
  };
  return isRef(i3) ? watch(i3, (e16, s12) => {
    e16 ? E11(e16) : $12(s12);
  }) : i3 && E11(i3), onBeforeUnmount(() => {
    const e16 = o10();
    $12(e16);
  }), {
    toggle: p3,
    enter() {
      p3(true);
    },
    leave() {
      p3(false);
    }
  };
}

// node_modules/ultra-ui/compositions/use-transition/utils.js
function E8(t8, r7) {
  const i3 = (n7, a4) => {
    n7.stopPropagation(), !(n7.target !== t8() || !r7.styleKeys.includes(n7.propertyName)) && a4(n7.target);
  }, o10 = (n7) => {
    t8() && i3(n7, r7.onEnd);
  }, s12 = (n7) => {
    t8() && i3(n7, r7.onCancel);
  }, c9 = (n7) => {
    n7.addEventListener("transitionend", o10, false);
  }, e16 = (n7) => {
    n7 == null || n7.removeEventListener("transitionend", o10), n7 == null || n7.removeEventListener("transitioncancel", s12);
  };
  watch(
    t8,
    (n7, a4) => {
      e16(a4), n7 && c9(n7);
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    e16(t8());
  });
}

// node_modules/ultra-ui/compositions/use-transition/use-style-transition.js
function H3(b10) {
  const {
    // enterFrom,
    // leaveTo,
    enterTo: r7,
    enterActive: i3,
    leaveActive: p3,
    target: c9,
    afterEnter: a4,
    afterLeave: m6,
    enterCanceled: l5,
    leaveCanceled: v6
  } = b10, n7 = () => isRef(c9) ? c9.value : c9, s12 = {}, f11 = (t8) => Object.fromEntries(
    Object.keys(t8).map((e16) => [e16, s12[e16]])
  );
  watch(
    () => n7(),
    (t8) => {
      if (t8) {
        const e16 = t8.attributeStyleMap;
        ~[...Object.keys(r7), ...Object.keys(i3)].forEach((E11) => {
          s12[E11] = e16.get(E11);
        });
      } else
        Object.keys(s12).forEach((e16) => {
          delete s12[e16];
        });
    },
    {
      immediate: true
    }
  );
  const S8 = (t8) => {
    n2(t8, i3);
  }, y4 = (t8) => {
    n2(t8, f11(i3));
  }, j5 = (t8) => {
    n2(t8, p3);
  }, g10 = (t8) => {
    n2(t8, f11(p3));
  }, A11 = (t8) => {
    n2(t8, r7);
  }, T6 = (t8) => {
    n2(t8, f11(r7));
  }, h7 = () => {
    const t8 = n7();
    t8 && (S8(t8), n4(() => {
      A11(t8);
    }));
  }, k6 = () => {
    const t8 = n7();
    t8 && (j5(t8), n4(() => {
      T6(t8);
    }));
  }, [d8, u5] = s7(false, (t8) => {
    t8 ? h7() : k6();
  });
  return E8(n7, {
    styleKeys: Object.keys(r7),
    onCancel(t8) {
      d8.value ? (y4(t8), l5 == null || l5()) : (g10(t8), v6 == null || v6());
    },
    onEnd(t8) {
      d8.value ? (y4(t8), a4 == null || a4()) : (g10(t8), m6 == null || m6());
    }
  }), {
    toggle: u5,
    enter: () => u5(true),
    leave: () => u5(false)
  };
}

// node_modules/ultra-ui/compositions/use-transition/index.js
function o9(i3, r7) {
  return i3 === "css" ? b8(r7) : H3(r7);
}

// node_modules/ultra-ui/components/dialog/use-maximum.js
function z3(a4) {
  const { dialogRef: e16 } = a4, i3 = shallowRef(false), o10 = o9("css", {
    target: e16,
    name: "dialog-maximize",
    keepEnterTo: true,
    afterLeave() {
      e16.value && s(e16.value, ["height"]);
    }
  });
  return {
    maximized: i3,
    toggleMaximize: (r7) => {
      i3.value = r7;
      const t8 = e16.value;
      t8 && (r7 ? (n2(t8, { height: `${t8.offsetHeight}px` }), o10.enter()) : o10.leave());
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
    const D4 = M8, U3 = L5, b10 = useSlots(), r7 = e("dialog"), V6 = e.is("background-blur"), Z3 = [r7.e("header"), V6], j5 = [r7.e("footer"), V6], { size: q8 } = l([D4], { size: "default" }), v6 = shallowRef(), a4 = shallowRef(), N4 = shallowRef(), G4 = shallowRef(), H4 = shallowRef(), i3 = useModel(M8, "modelValue");
    function J7() {
      var n7;
      const o10 = (n7 = b10.trigger) == null ? void 0 : n7.call(b10);
      return o10 != null && o10.length ? l2(o10)[0] : null;
    }
    const B7 = o9("style", {
      target: a4,
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
      dialogRef: a4,
      cls: r7
    }), O7 = computed(() => [r7.b, r7.m(q8.value)]);
    let x11 = false;
    watch(i3, (o10) => {
      if (!o10) {
        B7.leave(), n4(() => {
          a4.value && n2(a4.value, {
            transform: "scale3d(0.5, 0.5, 1) translate3d(0, 0, 0)"
          });
        });
        return;
      }
      x11 || (x11 = true), s12.x = 0, s12.y = 0, nextTick(() => {
        v6.value && n2(v6.value, { zIndex: o() }), a4.value && n2(a4.value, {
          transform: "scale3d(0.5, 0.5, 1) translate3d(0, 0, 0)"
        }), n4(() => {
          B7.enter();
        });
      });
    });
    const s12 = {
      x: 0,
      y: 0
    }, S8 = (o10, e16) => {
      const n7 = a4.value;
      n7 && n2(n7, { transform: `translate3d(${o10}px, ${e16}px, 0)` });
    };
    w({
      target: N4,
      onDragStart() {
        A11();
      },
      onDrag(o10, e16) {
        k6.value || S8(s12.x + o10, s12.y + e16);
      },
      onDragEnd(o10, e16) {
        k6.value || (s12.x += o10, s12.y += e16, s12.x % 2 !== 0 && (s12.x += o10 < 0 ? 1 : -1), s12.y % 2 !== 0 && (s12.y += e16 < 0 ? 1 : -1), S8(s12.x, s12.y));
      }
    });
    function A11() {
      D4.modal || n2(v6.value, { zIndex: o() });
    }
    const y4 = () => {
      i3.value = false;
    };
    return provide(o6, {
      visible: i3
    }), P8({
      close: y4
    }), (o10, e16) => (openBlock(), createElementBlock(
      Fragment,
      null,
      [
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, {
            name: "fade",
            onAfterLeave: e16[9] || (e16[9] = (n7) => U3("closed"))
          }, {
            default: withCtx(() => [
              i3.value || unref(x11) ? withDirectives((openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass([unref(r7).e("overlay"), unref(e).is("modal", o10.modal)]),
                  ref_key: "overlayRef",
                  ref: v6,
                  onMousedown: e16[8] || (e16[8] = (n7) => o10.modal && y4()),
                  onKeyup: withKeys(y4, ["esc"]),
                  tabindex: "0"
                },
                [
                  createBaseVNode(
                    "div",
                    mergeProps(o10.$attrs, {
                      class: O7.value,
                      ref_key: "dialogRef",
                      ref: a4,
                      onMousedown: withModifiers(A11, ["stop"])
                    }),
                    [
                      createBaseVNode(
                        "section",
                        {
                          class: normalizeClass(Z3),
                          ref_key: "headerRef",
                          ref: N4,
                          onTransitionend: e16[4] || (e16[4] = withModifiers(() => {
                          }, ["stop"])),
                          onTransitioncancel: e16[5] || (e16[5] = withModifiers(() => {
                          }, ["stop"]))
                        },
                        [
                          createBaseVNode(
                            "div",
                            {
                              class: normalizeClass(unref(r7).e("title")),
                              onMousedown: e16[0] || (e16[0] = withModifiers(() => {
                              }, ["stop"]))
                            },
                            [
                              renderSlot(o10.$slots, "header", {}, () => [
                                createTextVNode(
                                  toDisplayString(o10.header || o10.title),
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
                              onMousedown: e16[3] || (e16[3] = withModifiers(() => {
                              }, ["stop"]))
                            },
                            [
                              unref(k6) ? (openBlock(), createBlock(unref(k), {
                                key: 0,
                                class: normalizeClass(unref(r7).e("btn-recover")),
                                onClick: e16[1] || (e16[1] = (n7) => unref(I4)(false)),
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
                                onClick: e16[2] || (e16[2] = (n7) => unref(I4)(true)),
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
                                onClick: y4,
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
                        onTransitionend: e16[6] || (e16[6] = withModifiers(() => {
                        }, ["stop"])),
                        onTransitioncancel: e16[7] || (e16[7] = withModifiers(() => {
                        }, ["stop"]))
                      }, {
                        default: withCtx(() => [
                          renderSlot(o10.$slots, "default")
                        ]),
                        _: 3
                        /* FORWARDED */
                      }, 8, ["class"]),
                      o10.$slots.footer ? (openBlock(), createElementBlock(
                        "section",
                        {
                          key: 0,
                          ref_key: "footerRef",
                          ref: H4,
                          class: normalizeClass(j5)
                        },
                        [
                          renderSlot(o10.$slots, "footer")
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
                [vShow, i3.value]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          })
        ])),
        createCommentVNode(" 触发 "),
        createVNode(unref(d3), {
          onClick: e16[10] || (e16[10] = (n7) => i3.value = !i3.value),
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
  setup(n7, { emit: c9 }) {
    const s12 = n7, p3 = c9, t8 = e("file-picker"), i3 = shallowRef(), r7 = (e16) => {
      const l5 = e16.target;
      p3("pick", Array.prototype.slice.call(l5.files)), l5.value = "";
    };
    function f11() {
      var e16;
      s12.disabled || (e16 = i3.value) == null || e16.click();
    }
    return (e16, l5) => (openBlock(), createBlock(resolveDynamicComponent(e16.tag), {
      class: normalizeClass(unref(t8).b),
      onClick: withModifiers(f11, ["stop"])
    }, {
      default: withCtx(() => [
        createBaseVNode("input", {
          multiple: e16.multiple,
          class: normalizeClass(unref(t8).e("native")),
          type: "file",
          accept: e16.accept,
          hidden: "",
          placeholder: "选择文件",
          ref_key: "fileRef",
          ref: i3,
          onChange: r7
        }, null, 42, v4),
        renderSlot(e16.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});

// node_modules/ultra-ui/venders/float-button.vue_vue_type_script_setup_true_lang-D3fk5GH0.js
var w6 = { key: 1 };
var J3 = defineComponent({
  name: "FloatButton",
  __name: "float-button",
  props: {
    items: {},
    size: {}
  },
  emits: ["click"],
  setup(A11, { emit: v6 }) {
    const k6 = v6, u5 = e("float-button"), p3 = e.is("hovered"), h7 = shallowRef(), n7 = shallowRef(), c9 = shallowRef(false), E11 = () => {
      var t8;
      c9.value = true, (t8 = n7.value) == null || t8.forEach((o10) => {
        n2(o10.el, { display: "flex" });
      }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var o10;
          (o10 = n7.value) == null || o10.forEach((e16) => {
            e16.el.classList.add(p3);
          });
        });
      });
    }, C6 = () => {
      var t8;
      c9.value = false, (t8 = n7.value) == null || t8.forEach((o10) => {
        o10.el.classList.remove(p3);
      });
    }, z5 = (t8, o10) => {
      var e16;
      t8 !== 1 || c9.value || (e16 = n7.value) == null || e16.forEach((r7) => {
        s(r7.el, ["display"]);
      });
    };
    return (t8, o10) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(unref(u5).b),
          onMouseenter: E11,
          onMouseleave: C6,
          ref_key: "floatButtonRef",
          ref: h7
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(t8.items, (e16, r7) => (openBlock(), createBlock(unref(M), {
              key: e16.key,
              class: normalizeClass([unref(u5).e("item"), unref(e).is("first", r7 === 0)]),
              circle: "",
              size: t8.size,
              type: e16.type ?? "primary",
              ref_for: true,
              ref_key: "itemsRef",
              ref: n7,
              style: normalizeStyle({
                transitionDelay: r7 * 0.1 + "s"
              }),
              onTransitionend: (l5) => z5(r7),
              onClick: (l5) => k6("click", e16.key),
              title: e16.name ?? e16.key
            }, {
              default: withCtx(() => {
                var l5;
                return [
                  e16.icon ? (openBlock(), createBlock(
                    unref(k),
                    { key: 0 },
                    {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(e16.icon)))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )) : (openBlock(), createElementBlock(
                    "span",
                    w6,
                    toDisplayString(((l5 = e16.name) == null ? void 0 : l5[0]) ?? e16.key[0]),
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
function n5(r7) {
  return r7 || {};
}

// node_modules/ultra-ui/utils/form/validate.js
var p2 = Object.defineProperty;
var d4 = (t8, r7, e16) => r7 in t8 ? p2(t8, r7, { enumerable: true, configurable: true, writable: true, value: e16 }) : t8[r7] = e16;
var g4 = (t8, r7, e16) => d4(t8, typeof r7 != "symbol" ? r7 + "" : r7, e16);
var c8 = (t8) => t8 == null;
var m3 = {
  email(t8) {
    if (!/^([\w\_\-]+)@([\w\-]+[\.]?)*[\w]+\.[a-zA-Z]{2,10}$/.test(t8))
      return "邮箱格式不正确";
  },
  phone(t8) {
    if (!/^\d{11}$/.test(t8))
      return "手机号格式不正确";
  },
  num(t8) {
    if (!/^\d+$/.test(t8))
      return "数字格式不正确";
  },
  url(t8) {
    if (!/^(ftp|https?)\:\/\/([\w\_\-]+)\.([\w\-]+[\.]?)*[\w]+\.[a-zA-Z]{2,10}(.*)/.test(t8))
      return "链接格式不正确";
  },
  idCard(t8) {
    if (!/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/.test(t8))
      return "身份证格式不正确";
  }
};
var A7 = {
  required(t8, r7) {
    if (r7 === false) return;
    const e16 = typeof r7 == "string" ? r7 : "该项不能为空";
    if (c8(t8) || Array.isArray(t8) && !t8.length || typeof t8 == "string" && !t8) return e16;
  },
  min(t8, r7) {
    if (c8(t8)) return;
    let e16 = Array.isArray(r7) ? r7[0] : r7, n7 = Array.isArray(r7) ? r7[1] : `该项必须大于等于${e16}`;
    if (typeof t8 != "number") return `${t8}不是一个数字`;
    if (t8 < e16) return n7;
  },
  max(t8, r7) {
    if (c8(t8)) return;
    let e16 = Array.isArray(r7) ? r7[0] : r7, n7 = Array.isArray(r7) ? r7[1] : `该项必须小于等于${e16}`;
    if (typeof t8 != "number") return `${t8}不是一个数字`;
    if (t8 > e16) return n7;
  },
  minLen(t8, r7) {
    if (c8(t8)) return;
    let e16 = Array.isArray(r7) ? r7[0] : r7, n7 = Array.isArray(r7) ? r7[1] : `该项长度必须大于等于${e16}`;
    if (!Array.isArray(t8) && typeof t8 != "string")
      return `${t8}不是一个字符串或数组`;
    if (t8.length < e16) return n7;
  },
  maxLen(t8, r7) {
    if (c8(t8)) return;
    let e16 = Array.isArray(r7) ? r7[0] : r7, n7 = Array.isArray(r7) ? r7[1] : `该项长度必须小于等于:${e16}`;
    if (!Array.isArray(t8) && typeof t8 != "string")
      return `${t8}不是一个字符串或数组`;
    if (t8.length > e16) return n7;
  },
  match(t8, r7) {
    if (c8(t8) || t8 === "") return;
    if (typeof r7 == "string") {
      if (!r7) return;
      r7 = new RegExp(r7);
    }
    let e16 = Array.isArray(r7) ? r7[0] : r7, n7 = Array.isArray(r7) ? r7[1] : `该项不匹配正则:${e16}`;
    if (typeof t8 != "string") return `${t8}不是一个字符串`;
    if (!e16.test(t8)) return n7;
  },
  preset(t8, r7) {
    if (c8(t8) || t8 === "" || !r7) return;
    if (typeof t8 != "string") return `${t8}不是一个字符串`;
    const e16 = m3[r7];
    return e16(t8);
  }
};
var M4 = class {
  constructor(r7, e16) {
    g4(this, "rules");
    g4(this, "config");
    this.rules = r7, e16 && (this.config = e16);
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
  async validateSingleData(r7, e16) {
    var i3;
    const n7 = {};
    if (!this.existRules) return n7;
    const f11 = ((i3 = this.config) == null ? void 0 : i3.lazy) ?? true;
    if (e16 = e16 ? Array.isArray(e16) ? e16 : [e16] : Object.keys(this.rules), f11) {
      for (let a4 = 0; a4 < e16.length; a4++) {
        const y4 = e16[a4], o10 = await this.validateValueLazy(r7, y4);
        o10.length !== 0 && (n7[y4] = o10);
      }
      return n7;
    } else {
      for (let a4 = 0; a4 < e16.length; a4++) {
        const y4 = e16[a4], o10 = await this.validateValue(r7, y4);
        o10.length !== 0 && (n7[y4] = o10);
      }
      return n7;
    }
  }
  async validateValue(r7, e16) {
    const n7 = this.rules[e16], f11 = getChainValue(r7, e16), { validator: i3, required: a4, ...y4 } = n7;
    let o10 = [];
    if (a4) {
      const s12 = A7.required(f11, a4);
      s12 && o10.push(s12);
    }
    for (const s12 in y4) {
      const u5 = A7[s12];
      if (!u5) continue;
      const h7 = u5(f11, y4[s12]);
      h7 && o10.push(h7);
    }
    if (i3) {
      const s12 = await i3(f11, r7);
      s12 && o10.push(s12);
    }
    return o10;
  }
  async validateValueLazy(r7, e16) {
    const n7 = this.rules[e16], f11 = getChainValue(r7, e16);
    let i3 = [];
    if (!n7) return i3;
    const { validator: a4, required: y4, ...o10 } = n7;
    if (y4) {
      const s12 = A7.required(f11, y4);
      if (s12)
        return i3.push(s12), i3;
    }
    for (const s12 in o10) {
      const u5 = A7[s12];
      if (!u5) continue;
      const h7 = u5(f11, o10[s12]);
      if (h7)
        return i3.push(h7), i3;
    }
    if (a4) {
      const s12 = await a4(f11, r7);
      if (s12)
        return i3.push(s12), i3;
    }
    return i3;
  }
  /**
   * 校验多条数据
   * @param field 需要校验的字段
   */
  async validateManyData(r7, e16) {
    let n7 = 0;
    for (; n7 < r7.length; ) {
      const f11 = r7[n7], i3 = await this.validateSingleData(f11, e16);
      if (Object.keys(i3).length > 0)
        return i3;
      n7++;
    }
    return {};
  }
  /**
   * 校验
   * @param data 数据
   * @param fields 字段
   * @returns
   */
  async validate(r7, e16) {
    return Array.isArray(r7) ? this.validateManyData(r7, e16) : this.validateSingleData(r7, e16);
  }
};

// node_modules/ultra-ui/utils/reactive/proxy.js
function P5(g10, t8, F6) {
  let { weakMap: u5, parentsField: p3, changedFields: c9 = [] } = F6 || {};
  return u5 || (u5 = /* @__PURE__ */ new WeakMap()), new Proxy(g10, {
    set(x11, s12, o10) {
      var i3;
      const e16 = p3 ? `${p3}.${s12}` : s12;
      return (i3 = t8 == null ? void 0 : t8.set) == null || i3.call(t8, e16, o10), x11[s12] = o10, c9.push(e16), Promise.resolve().then(() => {
        var y4;
        c9.length && ((y4 = t8 == null ? void 0 : t8.changed) == null || y4.call(t8, [...c9]), c9.splice(0));
      }), true;
    },
    get(x11, s12) {
      var e16;
      (e16 = t8 == null ? void 0 : t8.get) == null || e16.call(t8, s12);
      const o10 = x11[s12];
      if (o10 !== null && typeof o10 == "object") {
        if (u5.has(o10)) return u5.get(o10);
        const i3 = P5(o10, t8, {
          weakMap: u5,
          parentsField: p3 ? `${p3}.${s12}` : s12,
          changedFields: c9
        });
        return u5.set(o10, i3), i3;
      }
      return o10;
    }
  });
}
function $10(g10, t8) {
  return P5(g10, t8);
}

// node_modules/ultra-ui/components/form/form-model.js
var m4 = Object.defineProperty;
var u4 = (n7, a4, t8) => a4 in n7 ? m4(n7, a4, { enumerable: true, configurable: true, writable: true, value: t8 }) : n7[a4] = t8;
var l4 = (n7, a4, t8) => u4(n7, typeof a4 != "symbol" ? a4 + "" : a4, t8);
var A8 = class {
  constructor(a4) {
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
    this.fields = a4;
    const t8 = {}, e16 = [];
    for (const i3 in a4) {
      const s12 = a4[i3];
      e16.push(i3);
      const { value: r7 } = s12;
      let o10 = r7;
      typeof r7 == "function" && (watch(r7, (f11) => {
        setChainValue(this.initialData, i3, f11);
      }), o10 = r7()), setChainValue(t8, i3, o10);
    }
    return this.allKeys = e16, this.initialData = JSON.parse(JSON.stringify(t8)), this.setProxyData(reactive(t8)), this.validator = new M4(this.fields), shallowReactive(this);
  }
  /**
   * 设置响应式值
   * @param proxyData 响应式的值
   */
  setProxyData(a4) {
    const t8 = $10(a4, {
      set: (e16, i3) => {
        this.modelChangeCallback.forEach((s12) => s12(e16, i3));
      },
      changed: (e16) => {
        if (!this.validateOnFieldChange) {
          this.validateOnFieldChange = true;
          return;
        }
        this.validate(e16);
      }
    });
    this.data = t8;
  }
  getValidateFields(a4) {
    if (!a4)
      if (this.formKeys.size) {
        let t8 = [];
        return this.formKeys.forEach((e16) => {
          t8 = t8.concat(e16);
        }), t8;
      } else
        return this.allKeys;
    return Array.isArray(a4) ? a4 : [a4];
  }
  /**
   * 模型校验
   * @param fields 需要校验的字段, 不传则校验所有字段
   * @returns
   */
  async validate(a4) {
    const { errors: t8, validator: e16, data: i3 } = this, s12 = await e16.validate(
      i3,
      this.getValidateFields(a4)
    );
    if (a4)
      ~(Array.isArray(a4) ? a4 : [a4]).forEach((r7) => {
        const o10 = s12[r7];
        o10 != null && o10.length ? t8.set(r7, o10) : t8.delete(r7);
      });
    else {
      t8.clear();
      for (const r7 in s12)
        t8.set(r7, s12[r7]);
    }
    return t8.size > 0 ? Promise.reject(false) : true;
  }
  /**
   * 重置数据
   * @param fields 需要重置的字段
   */
  resetData(a4) {
    typeof a4 == "string" ? a4 = [a4] : Array.isArray(a4) || (a4 = this.allKeys), this.clearValidate(), this.validateOnFieldChange = false, a4.forEach((t8) => {
      setChainValue(
        this.data,
        t8,
        getChainValue(this.initialData, t8)
      );
    });
  }
  /**
   * 设置值
   * @param formData 表单值
   * @param options 配置
   */
  setData(a4, t8) {
    const { validate: e16 = true } = t8 || {};
    e16 || (this.validateOnFieldChange = false), this.allKeys.forEach((i3) => {
      const s12 = getChainValue(a4, i3);
      s12 !== void 0 && setChainValue(this.data, i3, s12);
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
  onChange(a4) {
    this.modelChangeCallback.add(a4);
  }
  /** 关闭监听值变更 */
  offChange(a4) {
    this.modelChangeCallback.delete(a4);
  }
};

// node_modules/ultra-ui/components/form/dynamic-form-model.js
var f6 = Object.defineProperty;
var g5 = (h7, a4, t8) => a4 in h7 ? f6(h7, a4, { enumerable: true, configurable: true, writable: true, value: t8 }) : h7[a4] = t8;
var s8 = (h7, a4, t8) => g5(h7, typeof a4 != "symbol" ? a4 + "" : a4, t8);
var V4 = class {
  constructor(a4) {
    s8(this, "_data", reactive({}));
    s8(this, "fields", shallowReactive({}));
    s8(this, "validator");
    s8(this, "formKeys", /* @__PURE__ */ new Map());
    s8(this, "errors", shallowReactive(
      /* @__PURE__ */ new Map()
    ));
    s8(this, "validateOnFieldChange", true);
    s8(this, "modelChangeCallback", /* @__PURE__ */ new Set());
    s8(this, "_allKeys", []);
    s8(this, "initialData", {});
    s8(this, "oldData", {});
    this.append(a4 ?? {}), this.validator = new M4(this.fields), this.getAllKeys(), this.watchData();
  }
  set data(a4) {
    if (!isReactive(a4)) {
      console.error("data不是一个响应式对象");
      return;
    }
    this._data = a4, this.watchData();
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
    const { oldData: a4 } = this;
    watch(this.data, (t8) => {
      let i3 = [];
      this.allKeys.forEach((e16) => {
        const r7 = getChainValue(a4, e16), l5 = getChainValue(t8, e16);
        r7 !== l5 && (this.modelChangeCallback.forEach((o10) => o10(e16, l5)), i3.push(e16), setChainValue(a4, e16, l5));
      }), this.validateOnFieldChange ? this.validate(i3) : this.validateOnFieldChange = true;
    });
  }
  append(a4) {
    for (const t8 in a4)
      this.add(t8, a4[t8] ?? {});
  }
  /**
   * 添加字段
   * @param field 字段
   * @param item 字段配置项
   */
  add(a4, t8) {
    this.fields[a4] = t8;
    const { value: i3 } = t8, e16 = typeof i3 == "function" ? i3() : i3;
    e16 !== void 0 && (this.initialData[a4] = JSON.parse(JSON.stringify(e16))), setChainValue(this.data, a4, e16), setChainValue(this.oldData, a4, e16), this.getAllKeys();
  }
  /**
   * 移除字段
   * @param field 字段
   */
  delete(a4) {
    delete this.fields[a4], this.getAllKeys();
  }
  /**
   * 监听值变更
   * @param cb 回调
   */
  onChange(a4) {
    this.modelChangeCallback.add(a4);
  }
  offChange(a4) {
    this.modelChangeCallback.delete(a4);
  }
  async validate(a4) {
    const { errors: t8, validator: i3, data: e16 } = this, r7 = await i3.validate(
      e16,
      this.getValidateFields(a4)
    );
    if (a4)
      ~(Array.isArray(a4) ? a4 : [a4]).forEach((l5) => {
        const o10 = r7[l5];
        o10 != null && o10.length ? t8.set(l5, o10) : t8.delete(l5);
      });
    else {
      t8.clear();
      for (const l5 in r7)
        t8.set(l5, r7[l5]);
    }
    return !(t8.size > 0);
  }
  getValidateFields(a4) {
    if (!a4)
      if (this.formKeys.size) {
        let t8 = [];
        return this.formKeys.forEach((i3) => {
          t8 = t8.concat(i3);
        }), t8;
      } else
        return this.allKeys;
    return Array.isArray(a4) ? a4 : [a4];
  }
  /**
   * 重置数据
   * @param fields 需要重置的字段
   */
  resetData(a4) {
    typeof a4 == "string" ? a4 = [a4] : Array.isArray(a4) || (a4 = this.allKeys), this.clearValidate(), this.validateOnFieldChange = false, a4.forEach((t8) => {
      setChainValue(
        this.data,
        t8,
        getChainValue(this.initialData, t8)
      );
    });
  }
  /**
   * 设置值
   * @param formData 表单值
   * @param options 配置
   */
  setData(a4, t8) {
    const { validate: i3 = true } = t8 || {};
    i3 || (this.validateOnFieldChange = false), this.allKeys.forEach((e16) => {
      const r7 = getChainValue(a4, e16);
      r7 !== void 0 && setChainValue(this.data, e16, r7);
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
  setup(c9) {
    const t8 = e("gantt-chart");
    return (p3, s12) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(t8).b)
      },
      null,
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/group-input/use-group-items.js
function g6(c9) {
  const { props: s12, emit: u5 } = c9, m6 = t(1), t8 = shallowRef([]);
  function n7(e16) {
    return {
      data: isReactive(e16) ? e16 : shallowReactive(e16),
      id: m6()
    };
  }
  let r7 = false, i3 = false;
  function f11(e16) {
    r7 = true, e16(), nextTick(() => {
      r7 = false;
    });
  }
  return watch(
    () => s12.modelValue,
    (e16) => {
      r7 || (i3 = true, t8.value = (e16 == null ? void 0 : e16.map(n7)) ?? [], nextTick(() => {
        i3 = false;
      }));
    },
    { immediate: true }
  ), watch(t8, (e16) => {
    i3 || u5(
      "update:modelValue",
      e16.map((p3) => p3.data)
    );
  }), {
    items: t8,
    createItem: n7,
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
    const y4 = g10, E11 = B7, r7 = e("group-input"), { formProps: N4 } = i(), { disabled: v6, size: s12, readonly: S8 } = g(
      [N4 ?? {}, y4],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), { items: t8, createItem: V6, runByEvent: b10 } = g6({
      props: y4,
      emit: E11
    }), h7 = computed(() => !t8.value.length);
    function k6(n7) {
      b10(() => {
        t8.value = [
          ...t8.value.slice(0, n7 + 1),
          V6({}),
          ...t8.value.slice(n7 + 1)
        ];
      });
    }
    function F6(n7) {
      b10(() => {
        t8.value = [
          ...t8.value.slice(0, n7),
          ...t8.value.slice(n7 + 1)
        ];
      });
    }
    return (n7, m6) => {
      var z5;
      return unref(S8) ? (z5 = unref(t8)) != null && z5.length ? (openBlock(), createElementBlock(
        "ul",
        {
          key: 1,
          class: normalizeClass([unref(r7).b, unref(r7).m(unref(s12))])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(t8), (i3) => (openBlock(), createElementBlock(
              "li",
              {
                key: i3.id,
                class: normalizeClass(unref(r7).e("item"))
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(i3.data, (a4) => (openBlock(), createElementBlock(
                    "span",
                    null,
                    toDisplayString(a4),
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
          class: normalizeClass([unref(r7).b, unref(r7).m(unref(s12))])
        },
        [
          h7.value && n7.creatable ? (openBlock(), createElementBlock("li", J4, [
            createVNode(unref(M), {
              style: { width: "100%" },
              icon: unref(plus_default),
              onClick: m6[0] || (m6[0] = (i3) => k6(0)),
              size: unref(s12)
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
            renderList(unref(t8), (i3, a4) => (openBlock(), createElementBlock(
              "li",
              {
                key: i3.id,
                class: normalizeClass(unref(r7).e("item")),
                style: normalizeStyle(n7.itemStyle)
              },
              [
                renderSlot(n7.$slots, "default", mergeProps({ ref_for: true }, { item: i3.data, index: a4 })),
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
                      size: unref(s12),
                      onClick: (P8) => F6(a4)
                    }, null, 8, ["icon", "disabled", "size", "onClick"]),
                    createVNode(unref(M), {
                      icon: unref(plus_default),
                      circle: "",
                      disabled: unref(v6),
                      size: unref(s12),
                      onClick: (P8) => k6(a4)
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
  setup(k6, { expose: b10, emit: w11 }) {
    const y4 = w11, n7 = k6, { size: B7 } = l([n7], {
      size: "default"
    }), c9 = e("grid-input"), V6 = computed(() => n7.zero ? /^[0-9]$/ : /^[1-9]$/), l5 = ref([]), u5 = ref(-1), m6 = ref(false), v6 = getCurrentInstance(), o10 = async (t8) => {
      if (t8 === void 0) {
        o10(u5.value);
        return;
      }
      t8 !== 0 && t8 > l5.value.length && (t8 = l5.value.length), u5.value = t8;
      let e16 = (v6 == null ? void 0 : v6.refs.items)[t8];
      e16 == null || e16.focus(), m6.value = false;
    }, z5 = (t8, e16) => {
      if (u5.value === n7.length) return;
      if (l5.value[e16])
        l5.value.splice(e16, 1, t8);
      else if (e16 === l5.value.length)
        l5.value.push(t8);
      else
        return;
      u5.value++, o10(), y4("input", l5.value.filter((r7) => r7).join(n7.separator));
    }, C6 = {
      Backspace: (t8, e16) => {
        t8 ? l5.value.splice(e16, 1) : e16 - 1 >= 0 && l5.value.splice(e16 - 1, 1), e16 !== 0 && o10(e16 - 1), y4("input", l5.value.filter((s12) => s12).join(n7.separator));
      },
      ArrowLeft: (t8, e16) => {
        e16 !== 0 && o10(e16 - 1);
      },
      ArrowRight: (t8, e16) => {
        e16 !== l5.value.length && o10(e16 + 1);
      }
    }, F6 = (t8, e16, s12) => {
      if (V6.value.test(t8.key)) {
        z5(t8.key, s12);
        return;
      }
      C6[t8.key](e16, s12);
    };
    return b10({ clear: () => {
      for (; l5.value.length; )
        l5.value.pop();
    } }), (t8, e16) => (openBlock(), createElementBlock(
      "ul",
      {
        class: normalizeClass([unref(c9).b, unref(c9).m(unref(B7))])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(t8.length, (s12, r7) => (openBlock(), createElementBlock("li", {
            key: r7,
            tabindex: "0",
            onKeydown: (g10) => F6(g10, l5.value[r7], r7),
            onFocus: (g10) => o10(r7),
            onBlur: (g10) => r7 === u5.value && (m6.value = true),
            ref_for: true,
            ref: "items",
            class: normalizeClass([unref(c9).e("item"), unref(e).is("focus", r7 === u5.value && !m6.value)])
          }, [
            l5.value[r7] ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(unref(c9).em("item", "text"))
              },
              toDisplayString(l5.value[r7]),
              3
              /* TEXT, CLASS */
            )) : r7 === u5.value ? (openBlock(), createElementBlock(
              "span",
              {
                key: 1,
                class: normalizeClass(unref(c9).em("item", "cursor"))
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
  setup(s12) {
    const a4 = s12, { size: m6 } = l([a4], {
      size: "default"
    }), r7 = e("list");
    return (t8, C6) => (openBlock(), createBlock(unref(fe2), {
      tag: "ul",
      class: normalizeClass([unref(r7).b, unref(r7).m(unref(m6))])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(t8.data, (n7, l5) => renderSlot(t8.$slots, "default", mergeProps({ ref_for: true }, { item: n7, index: l5 }))),
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
var d5 = defineComponent({
  name: "ListItem",
  __name: "list-item",
  setup(a4) {
    const e16 = e("list-item");
    return (t8, c9) => (openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass(unref(e16).b)
      },
      [
        renderSlot(t8.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});

// node_modules/ultra-ui/components/menu/di.js
var e10 = Symbol("MenuDIKey");

// node_modules/ultra-ui/venders/menu-item.vue_vue_type_script_setup_true_lang-C6oB2TkV.js
var M5 = ["src"];
var G3 = defineComponent({
  name: "MenuItem",
  __name: "menu-item",
  props: {
    menu: {},
    depth: {}
  },
  setup(d8) {
    const k6 = d8, { cls: t8, menuProps: y4, menuEmit: h7 } = inject(e10), l5 = shallowRef(), a4 = computed(() => y4.currentPath === k6.menu.path);
    return watch([a4, l5], ([e16, i3]) => {
      e16 && i3 && i3.scrollIntoView({
        block: "nearest"
      });
    }), (e16, i3) => {
      var c9;
      return withDirectives((openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass([
            unref(t8).e("item"),
            unref(e).is("active", a4.value),
            unref(e).is("disabled", e16.menu.disabled ?? false)
          ]),
          style: normalizeStyle({
            paddingLeft: `${e16.depth * 20 + 8}px`
          }),
          ref_key: "itemRef",
          ref: l5,
          onClick: i3[0] || (i3[0] = (N4) => unref(h7)("item-click", e16.menu))
        },
        [
          createCommentVNode(" 图标 "),
          e16.menu.icon ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              typeof e16.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                key: 0,
                class: normalizeClass(unref(t8).e("item-icon"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(e16.menu.icon)))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                key: 1,
                src: e16.menu.icon,
                class: normalizeClass((c9 = unref(t8)) == null ? void 0 : c9.e("item-icon")),
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
              class: normalizeClass(unref(t8).e("item-title"))
            },
            toDisplayString(e16.menu.title),
            3
            /* TEXT, CLASS */
          ),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(t8).e("item-expand"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )), [
        [unref(T), e16.menu.disabled ? false : unref(t8).e("ripple")]
      ]);
    };
  }
});

// node_modules/ultra-ui/components/menu/helper.js
function n6(e16, t8) {
  return `${t8}-${e16}`;
}

// node_modules/ultra-ui/components/menu/use-menu-transition.js
function x9() {
  const i3 = "height 0.3s ease", o10 = i3;
  function r7(t8) {
    const g10 = t8.offsetHeight;
    n2(t8, {
      height: 0,
      transition: i3
    }), requestAnimationFrame(() => {
      n2(t8, {
        height: `${g10}px`
      });
    });
  }
  function s12(t8) {
    s(t8, ["transition", "height"]);
  }
  function a4(t8) {
    n2(t8, {
      height: t8.offsetHeight + "px",
      transition: o10
    });
  }
  function h7(t8) {
    n2(t8, {
      height: 0
    });
  }
  function f11(t8) {
    s(t8, ["transition", "height"]);
  }
  return {
    enter: r7,
    afterEnter: s12,
    beforeLeave: a4,
    leave: h7,
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
    const f11 = L5, { cls: o10, expandedPath: u5, menuProps: E11 } = inject(e10), { enter: _10, afterEnter: C6, beforeLeave: S8, leave: A11, afterLeave: B7 } = x9(), h7 = computed(() => u5.has(f11.menu.path));
    function K6() {
      const { menu: n7 } = f11;
      u5.has(n7.path) ? u5.delete(n7.path) : u5.add(n7.path);
    }
    return (n7, Q5) => {
      var v6;
      const M8 = resolveComponent("MenuSub", true);
      return openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass(unref(o10).e("sub"))
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(o10).e("sub-content")),
              onClick: K6,
              style: normalizeStyle({
                paddingLeft: 8 + n7.depth * 20 + "px"
              })
            },
            [
              createCommentVNode(" 图标 "),
              n7.menu.icon ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  typeof n7.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                    key: 0,
                    class: normalizeClass(unref(o10).e("sub-icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(n7.menu.icon)))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                    key: 1,
                    src: n7.menu.icon,
                    class: normalizeClass((v6 = unref(o10)) == null ? void 0 : v6.e("sub-icon")),
                    alt: "icon"
                  }, null, 10, O6))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              !unref(E11).collapsed || n7.depth !== 0 ? (openBlock(), createElementBlock(
                Fragment,
                { key: 1 },
                [
                  createCommentVNode(" 文本 "),
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(unref(o10).e("sub-title"))
                    },
                    toDisplayString(n7.menu.title),
                    3
                    /* TEXT, CLASS */
                  ),
                  createCommentVNode(" 展开图标 "),
                  createVNode(unref(k), {
                    class: normalizeClass([unref(o10).e("sub-expand"), unref(e).is("expanded", h7.value)])
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
            onAfterEnter: unref(C6),
            onLeave: unref(A11),
            onBeforeLeave: unref(S8),
            onAfterLeave: unref(B7),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode(
                "ul",
                {
                  class: normalizeClass(unref(o10).e("sub-list"))
                },
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(n7.menu.children, (i3, y4) => {
                      var b10;
                      return openBlock(), createElementBlock(
                        Fragment,
                        {
                          key: unref(n6)(y4, n7.parentKey)
                        },
                        [
                          (b10 = i3.children) != null && b10.length ? (openBlock(), createBlock(M8, {
                            key: 1,
                            menu: i3,
                            "parent-key": unref(n6)(y4, n7.parentKey),
                            depth: n7.depth + 1
                          }, null, 8, ["menu", "parent-key", "depth"])) : (openBlock(), createBlock(G3, {
                            key: 0,
                            menu: i3,
                            depth: n7.depth + 1
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
                [vShow, h7.value]
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
    const D4 = R7, { cls: t8, menuProps: I4, menuEmit: V6 } = inject(e10), c9 = shallowRef(), p3 = computed(() => I4.currentPath === D4.menu.path);
    watch([p3, c9], ([e16, r7]) => {
      e16 && r7 && r7.scrollIntoView({
        block: "nearest"
      });
    });
    const $12 = shallowRef("hover"), B7 = shallowRef(), y4 = (e16) => {
      V6("item-click", e16);
    };
    return (e16, r7) => {
      var g10;
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" <div> "),
          createBaseVNode("div", null, [
            e16.depth === 0 ? (openBlock(), createBlock(unref(Re2), {
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
                  toDisplayString(e16.menu.title),
                  1
                  /* TEXT */
                )
              ]),
              default: withCtx(() => {
                var d8;
                return [
                  withDirectives((openBlock(), createElementBlock(
                    "li",
                    {
                      class: normalizeClass([
                        unref(t8).e("item"),
                        unref(e).is("active", p3.value),
                        unref(e).is("disabled", e16.menu.disabled ?? false)
                      ]),
                      ref_key: "itemRef",
                      ref: c9,
                      onClick: r7[0] || (r7[0] = (q8) => y4(e16.menu))
                    },
                    [
                      createCommentVNode(" 收缩 "),
                      e16.menu.icon ? (openBlock(), createElementBlock(
                        Fragment,
                        { key: 0 },
                        [
                          typeof e16.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                            key: 0,
                            class: normalizeClass(unref(t8).e("item-icon"))
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(e16.menu.icon)))
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                            key: 1,
                            src: e16.menu.icon,
                            class: normalizeClass((d8 = unref(t8)) == null ? void 0 : d8.e("item-icon")),
                            alt: "icon"
                          }, null, 10, S7))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )) : createCommentVNode("v-if", true),
                      e16.depth !== 0 ? (openBlock(), createElementBlock(
                        "span",
                        {
                          key: 1,
                          class: normalizeClass(unref(t8).e("item-expand"))
                        },
                        toDisplayString(e16.menu.title),
                        3
                        /* TEXT, CLASS */
                      )) : createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  )), [
                    [unref(T), e16.menu.disabled ? false : unref(t8).e("ripple")]
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
                  unref(t8).e("item"),
                  unref(e).is("active", p3.value),
                  unref(e).is("disabled", e16.menu.disabled ?? false)
                ]),
                ref_key: "itemRef",
                ref: c9,
                onClick: r7[1] || (r7[1] = (d8) => y4(e16.menu))
              },
              [
                createCommentVNode(" 收缩 "),
                e16.menu.icon ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    typeof e16.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                      key: 0,
                      class: normalizeClass(unref(t8).e("item-icon"))
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(e16.menu.icon)))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                      key: 1,
                      src: e16.menu.icon,
                      class: normalizeClass((g10 = unref(t8)) == null ? void 0 : g10.e("item-icon")),
                      alt: "icon"
                    }, null, 10, T5))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                e16.depth !== 0 ? (openBlock(), createElementBlock(
                  "span",
                  {
                    key: 1,
                    class: normalizeClass(unref(t8).e("item-expand"))
                  },
                  toDisplayString(e16.menu.title),
                  3
                  /* TEXT, CLASS */
                )) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )), [
              [unref(T), e16.menu.disabled ? false : unref(t8).e("ripple")]
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
    const f11 = k6, { cls: o10, expandedPath: h7, menuProps: C6 } = inject(e10), { enter: L5, afterEnter: E11, beforeLeave: w11, leave: B7, afterLeave: M8 } = x9(), v6 = computed(() => h7.has(f11.menu.path)), A11 = shallowRef("right"), K6 = shallowRef("center"), S8 = shallowRef("hover");
    function D4() {
      const { menu: n7 } = f11;
      h7.add(n7.path);
    }
    return (n7, X5) => {
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
                    onBeforeLeave: unref(w11),
                    onAfterLeave: unref(M8),
                    persisted: ""
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode(
                        "ul",
                        {
                          class: normalizeClass(unref(o10).e("sub-list"))
                        },
                        [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(n7.menu.children, (s12, g10) => {
                              var y4;
                              return openBlock(), createElementBlock(
                                Fragment,
                                {
                                  key: unref(n6)(g10, n7.parentKey)
                                },
                                [
                                  (y4 = s12.children) != null && y4.length ? (openBlock(), createBlock(N4, {
                                    key: 1,
                                    menu: s12,
                                    "parent-key": unref(n6)(g10, n7.parentKey),
                                    depth: n7.depth + 1
                                  }, null, 8, ["menu", "parent-key", "depth"])) : (openBlock(), createBlock(X3, {
                                    key: 0,
                                    menu: s12,
                                    depth: n7.depth + 1
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
                  var s12;
                  return [
                    createBaseVNode(
                      "li",
                      {
                        class: normalizeClass([unref(o10).e("sub")]),
                        style: { width: "100%" }
                      },
                      [
                        createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(unref(o10).e("sub-content"))
                          },
                          [
                            createCommentVNode(" 图标 "),
                            createBaseVNode("div", null, [
                              n7.menu.icon ? (openBlock(), createElementBlock(
                                Fragment,
                                { key: 0 },
                                [
                                  typeof n7.menu.icon != "string" ? (openBlock(), createBlock(unref(k), {
                                    key: 0,
                                    class: normalizeClass(unref(o10).e("sub-icon"))
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(n7.menu.icon)))
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  }, 8, ["class"])) : (openBlock(), createElementBlock("img", {
                                    key: 1,
                                    src: n7.menu.icon,
                                    class: normalizeClass((s12 = unref(o10)) == null ? void 0 : s12.e("sub-icon")),
                                    alt: "icon"
                                  }, null, 10, W4))
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              )) : createCommentVNode("v-if", true),
                              !unref(C6).collapsed || n7.depth !== 0 ? (openBlock(), createElementBlock(
                                Fragment,
                                { key: 1 },
                                [
                                  createCommentVNode(" 文本 "),
                                  createBaseVNode(
                                    "span",
                                    {
                                      class: normalizeClass(unref(o10).e("sub-title"))
                                    },
                                    toDisplayString(n7.menu.title),
                                    3
                                    /* TEXT, CLASS */
                                  ),
                                  createCommentVNode(" 展开图标 "),
                                  createVNode(unref(k), {
                                    class: normalizeClass([unref(o10).e("sub-expand"), unref(e).is("expanded", v6.value)])
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
var w7 = Object.defineProperty;
var B6 = (l5, a4, t8) => a4 in l5 ? w7(l5, a4, { enumerable: true, configurable: true, writable: true, value: t8 }) : l5[a4] = t8;
var f8 = (l5, a4, t8) => B6(l5, typeof a4 != "symbol" ? a4 + "" : a4, t8);
var x10 = defineComponent({
  name: "Menu",
  __name: "menu",
  props: {
    currentPath: {},
    collapsed: { type: Boolean, default: false },
    uniqueOpened: { type: Boolean, default: false },
    menus: {}
  },
  emits: ["item-click"],
  setup(l5, { emit: a4 }) {
    const t8 = l5, y4 = a4, d8 = e("menu"), { size: g10 } = l([t8], {
      size: "default"
    }), h7 = shallowReactive(/* @__PURE__ */ new Set());
    class S8 extends TreeNode {
      constructor() {
        super(...arguments);
        f8(this, "parent", null);
        f8(this, "children");
      }
    }
    const $12 = computed(() => t8.menus ? Forest.create(t8.menus, S8) : null);
    return watch(
      [() => t8.currentPath, () => $12.value],
      ([s12, i3]) => {
        !s12 || !i3 || i3.dft((r7) => {
          var n7;
          if (r7.data.path === s12) {
            let e16 = r7.parent;
            for (; (n7 = e16 == null ? void 0 : e16.data) != null && n7.path; )
              h7.add(e16.data.path), e16 = e16.parent;
            return false;
          }
        });
      },
      {
        immediate: true
      }
    ), provide(e10, {
      cls: d8,
      menuProps: t8,
      menuEmit: y4,
      expandedPath: h7
    }), (s12, i3) => (openBlock(), createBlock(unref(fe2), {
      tag: "ul",
      class: normalizeClass([unref(d8).b, unref(d8).m(unref(g10)), unref(e).is("collapsed", s12.collapsed)])
    }, {
      default: withCtx(() => [
        s12.collapsed ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 1 },
          renderList(s12.menus, (r7, n7) => {
            var e16;
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: String(n7)
              },
              [
                (e16 = r7.children) != null && e16.length ? (openBlock(), createBlock(ie4, {
                  key: 0,
                  menu: r7,
                  "parent-key": String(n7),
                  depth: 0
                }, null, 8, ["menu", "parent-key"])) : (openBlock(), createBlock(X3, {
                  menu: r7,
                  key: String(n7),
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
          renderList(s12.menus, (r7, n7) => {
            var e16;
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: String(n7)
              },
              [
                (e16 = r7.children) != null && e16.length ? (openBlock(), createBlock(re3, {
                  key: 0,
                  menu: r7,
                  "parent-key": String(n7),
                  depth: 0
                }, null, 8, ["menu", "parent-key"])) : (openBlock(), createBlock(G3, {
                  menu: r7,
                  key: String(n7),
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
var s9 = (t8, e16) => {
  const o10 = t8.__vccOpts || t8;
  for (const [c9, r7] of e16)
    o10[c9] = r7;
  return o10;
};
var a3 = {};
function f9(t8, e16) {
  return openBlock(), createElementBlock("div");
}
var m5 = s9(a3, [["render", f9]]);

// node_modules/ultra-ui/components/multi-select/di.js
var e11 = Symbol("MultiSelectDIKey");

// node_modules/ultra-ui/venders/multi-select-option.vue_vue_type_script_setup_true_lang-BNz7Re-B.js
var w8 = defineComponent({
  name: "MultiSelectOption",
  __name: "multi-select-option",
  props: {
    option: {},
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean },
    measureElement: { type: Function }
  },
  emits: ["check"],
  setup(B7, { emit: s12 }) {
    const t8 = s12, { optionClass: n7, rippleClass: r7 } = inject(e11);
    return (e16, o10) => withDirectives((openBlock(), createElementBlock(
      "li",
      {
        class: normalizeClass(unref(n7)),
        onClick: o10[2] || (o10[2] = (i3) => !e16.disabled && t8("check", !e16.checked)),
        ref: e16.measureElement
      },
      [
        createVNode(unref(U2), {
          "model-value": e16.checked,
          "onUpdate:modelValue": o10[0] || (o10[0] = (i3) => t8("check", i3)),
          onClick: o10[1] || (o10[1] = withModifiers(() => {
          }, ["stop"])),
          disabled: e16.disabled
        }, null, 8, ["model-value", "disabled"]),
        renderSlot(e16.$slots, "default")
      ],
      2
      /* CLASS */
    )), [
      [unref(T), e16.disabled ? false : unref(r7)]
    ]);
  }
});

// node_modules/ultra-ui/components/select/use-options.js
function w9(f11) {
  const { props: n7 } = f11, c9 = shallowRef(""), r7 = shallowRef([]), o10 = shallowRef([]), l5 = computed(() => {
    const { options: e16 } = n7;
    return e16 ? typeof e16 == "function" ? r7.value : o10.value : [];
  });
  return watch(
    [c9, () => n7.options],
    debounce(async ([e16, t8]) => {
      if (typeof t8 == "function") {
        const u5 = await t8(e16);
        r7.value = u5;
      } else {
        const { labelKey: u5 } = n7;
        if (!e16) {
          o10.value = t8 ?? [];
          return;
        }
        o10.value = (t8 == null ? void 0 : t8.filter((a4) => a4[u5].includes(e16))) ?? [];
      }
    }, 200),
    {
      immediate: true
    }
  ), {
    queryString: c9,
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
    const f11 = O7, le4 = ee3, o10 = e("multi-select"), { formProps: te5 } = i(), { size: S8, disabled: C6, readonly: P8 } = g(
      [te5 ?? {}, f11],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), I4 = shallowRef(), z5 = shallowRef(false), { options: k6, queryString: E11 } = w9({
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
      const { valueKey: l5, labelKey: t8 } = f11, d8 = k6.value;
      return se4.value.map((s12) => {
        const c9 = d8[s12.index], a4 = getChainValue(c9, l5);
        return {
          option: c9,
          index: s12.index,
          val: a4,
          key: s12.key,
          offset: s12.start,
          label: getChainValue(c9, t8)
        };
      });
    }), ne3 = computed(() => f11.filterable || typeof f11.options == "function"), u5 = useModel(O7, "modelValue"), n7 = shallowReactive(/* @__PURE__ */ new Set()), U3 = computed(() => n7.size === k6.value.length), ie6 = computed(() => n7.size > 0 && !U3.value), Y3 = computed(() => {
      const { valueKey: l5 } = f11;
      return new Map(
        k6.value.map((t8) => [t8[l5], t8])
      );
    }), ue2 = shallowRef();
    let R7 = false, T6 = false;
    watch(
      [u5, Y3],
      ([l5, t8]) => {
        R7 || (T6 = true, n7.clear(), t8.size && (l5 != null && l5.length) && l5.forEach((d8) => {
          const s12 = t8.get(d8);
          s12 && n7.add(s12);
        }), nextTick(() => {
          T6 = false;
        }));
      },
      { immediate: true }
    ), watch(n7, () => {
      if (T6) return;
      const { valueKey: l5 } = f11;
      R7 = true;
      const t8 = Array.from(n7);
      u5.value = t8.map((d8) => d8[l5]), le4("change", t8), nextTick(() => {
        R7 = false;
      });
    });
    const N4 = computed(() => {
      var d8, s12;
      let l5 = [], { visibilityLimit: t8 } = f11;
      return t8 < 0 && (t8 = 0), (C6.value || P8.value) && (t8 = ((d8 = u5.value) == null ? void 0 : d8.length) ?? 0), (s12 = u5.value) == null || s12.slice(0, t8).forEach((c9) => {
        const a4 = Y3.value.get(c9);
        a4 && l5.push(a4);
      }), l5;
    }), q8 = computed(() => {
      var l5;
      return (((l5 = u5.value) == null ? void 0 : l5.length) ?? 0) - N4.value.length;
    }), H4 = (l5, t8) => {
      t8 ? n7.add(l5) : n7.delete(l5);
    }, de6 = (l5) => {
      l5 ? k6.value.forEach((t8) => n7.add(t8)) : n7.clear();
    }, ce3 = () => {
      u5.value = [], n7.clear();
    }, me3 = (l5) => {
      n7.delete(l5);
    }, j5 = (l5) => {
      const { max: t8 } = f11;
      return t8 !== void 0 && n7.size >= t8 && !n7.has(l5);
    }, fe5 = o10.e("option"), ve4 = o10.e("ripple");
    return provide(e11, {
      optionClass: fe5,
      rippleClass: ve4
    }), (l5, t8) => {
      var d8;
      return unref(P8) ? (d8 = u5.value) != null && d8.length ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass([unref(o10).m(unref(S8)), unref(o10).e("readonly-tags")])
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(o10).e("tags"))
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(N4.value, (s12) => (openBlock(), createBlock(
                  unref(A3),
                  {
                    key: s12[l5.valueKey]
                  },
                  {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(s12[l5.labelKey]),
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
        class: normalizeClass([unref(o10).b, unref(o10).m(unref(S8)), unref(e).is("disabled", unref(C6))]),
        "content-class": [unref(o10).e("panel"), unref(o10).em("panel", unref(S8))],
        onMouseenter: t8[1] || (t8[1] = (s12) => z5.value = true),
        onMouseleave: t8[2] || (t8[2] = (s12) => z5.value = false),
        disabled: unref(C6)
      }, {
        trigger: withCtx(() => {
          var s12, c9;
          return [
            withDirectives(createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(o10).e("placeholder"))
              },
              toDisplayString(l5.placeholder),
              3
              /* TEXT, CLASS */
            ), [
              [vShow, !((s12 = u5.value) != null && s12.length)]
            ]),
            (c9 = u5.value) != null && c9.length ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(o10).e("tags"))
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(N4.value, (a4) => (openBlock(), createBlock(unref(A3), {
                    key: a4[l5.valueKey],
                    closable: !unref(C6),
                    onClose: (w11) => me3(a4)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(a4[l5.labelKey]),
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
                var a4;
                return [
                  l5.clearable && ((a4 = u5.value) != null && a4.length) && z5.value && !unref(C6) ? (openBlock(), createBlock(unref(k), {
                    key: 0,
                    class: normalizeClass(unref(o10).e("clear")),
                    onClick: withModifiers(ce3, ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(close_default))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"])) : (openBlock(), createBlock(unref(k), {
                    key: 1,
                    class: normalizeClass(unref(o10).e("arrow"))
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
          var s12, c9;
          return [
            createCommentVNode(" 多选栏 "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(o10).e("content-header"))
              },
              [
                createVNode(unref(U2), {
                  "model-value": U3.value,
                  indeterminate: ie6.value,
                  "onUpdate:modelValue": de6,
                  disabled: l5.max !== void 0
                }, {
                  default: withCtx(() => t8[3] || (t8[3] = [
                    createTextVNode(" 全选 ")
                  ])),
                  _: 1
                  /* STABLE */
                }, 8, ["model-value", "indeterminate", "disabled"]),
                createBaseVNode(
                  "span",
                  null,
                  " 已选 " + toDisplayString((s12 = u5.value) == null ? void 0 : s12.length) + "/" + toDisplayString(l5.max ?? ((c9 = unref(k6)) == null ? void 0 : c9.length) ?? 0),
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
                class: normalizeClass(unref(o10).e("content-filter"))
              },
              [
                createVNode(unref(Ve), {
                  placeholder: "输入关键字进行过滤",
                  modelValue: unref(E11),
                  "onUpdate:modelValue": t8[0] || (t8[0] = (a4) => isRef(E11) ? E11.value = a4 : null)
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
              class: normalizeClass([unref(o10).e("options")]),
              ref_key: "scrollRef",
              ref: I4,
              "content-class": [
                unref(o10).e("options-wrap"),
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
                  renderList(re6.value, ({ option: a4, index: w11, key: x11, label: pe4, offset: he3 }) => (openBlock(), createBlock(w8, {
                    option: a4,
                    disabled: j5(a4),
                    key: x11,
                    style: normalizeStyle({ transform: `translateY(${he3}px)` }),
                    onCheck: (ye2) => H4(a4, ye2),
                    checked: unref(n7).has(a4),
                    "data-index": w11,
                    "measure-element": unref(oe6)
                  }, {
                    default: withCtx(() => [
                      renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a4, index: w11 }), () => [
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
                  renderList(unref(k6), (a4, w11) => (openBlock(), createBlock(w8, {
                    option: a4,
                    disabled: j5(a4),
                    key: unref(getChainValue)(a4, l5.valueKey),
                    onCheck: (x11) => H4(a4, x11),
                    checked: unref(n7).has(a4)
                  }, {
                    default: withCtx(() => [
                      renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a4, index: w11 }), () => [
                        createTextVNode(
                          toDisplayString(unref(getChainValue)(a4, l5.labelKey)),
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
                class: normalizeClass(unref(o10).e("empty"))
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
var e12 = Symbol("TreeDIKey");

// node_modules/ultra-ui/venders/tree-node.vue_vue_type_script_setup_true_lang-DH1g7Aht.js
var J6 = defineComponent({
  name: "TreeNode",
  __name: "tree-node",
  props: {
    node: {},
    measureElement: { type: Function }
  },
  setup(h7) {
    const m6 = h7, {
      treeProps: n7,
      treeEmit: a4,
      cls: d8,
      getTreeSlotsNode: C6,
      getFlattedNodes: N4,
      handleCheck: p3,
      handleSelect: v6
    } = inject(e12);
    function c9() {
      const { node: e16 } = m6;
      e16.expanded = !e16.expanded, N4(), a4("expand", e16);
    }
    const y4 = () => {
      const { node: e16 } = m6;
      a4("node-click", e16), n7.selectable && v6(e16), n7.expandOnClickNode && c9(), n7.checkable && !e16.disabled && !n7.expandOnClickNode && p3(e16, !e16.checked);
    };
    return (e16, t8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([
          unref(d8).e("node"),
          unref(e).is("expanded", e16.node.expanded),
          unref(e).is("disabled", e16.node.disabled)
        ]),
        style: normalizeStyle({
          paddingLeft: unref(f)(e16.node.depth * 20 - 20, "px")
        }),
        onClick: y4,
        onContextmenu: t8[2] || (t8[2] = (r7) => unref(a4)("node-contextmenu", r7, e16.node)),
        ref: e16.measureElement
      },
      [
        e16.node.isLeaf ? (openBlock(), createElementBlock(
          "i",
          {
            key: 1,
            class: normalizeClass(unref(d8).e("icon-placeholder"))
          },
          null,
          2
          /* CLASS */
        )) : (openBlock(), createBlock(unref(k), {
          key: 0,
          class: normalizeClass(unref(d8).e("expand-icon")),
          onClick: withModifiers(c9, ["stop"])
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
            class: normalizeClass(unref(d8).e("node-content"))
          },
          [
            unref(n7).checkable ? (openBlock(), createBlock(U2, {
              key: 0,
              "model-value": e16.node.checked,
              indeterminate: e16.node.indeterminate,
              "onUpdate:modelValue": t8[0] || (t8[0] = (r7) => unref(p3)(e16.node, r7)),
              disabled: e16.node.disabled,
              onClick: t8[1] || (t8[1] = withModifiers(() => {
              }, ["stop"])),
              class: normalizeClass(unref(d8).e("checkbox"))
            }, null, 8, ["model-value", "indeterminate", "disabled", "class"])) : createCommentVNode("v-if", true),
            createVNode(unref(d3), {
              content: unref(C6)({ node: e16.node, data: e16.node.data })
            }, null, 8, ["content"])
          ],
          2
          /* CLASS */
        )), [
          [
            unref(T),
            (unref(n7).checkable || unref(n7).selectable) && !e16.node.disabled ? unref(d8).e("ripple") : false
          ]
        ])
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    ));
  }
});

// node_modules/ultra-ui/components/tree/use-select.js
function f10(s12) {
  const { emit: c9, props: u5, nodeDict: d8 } = s12, e16 = shallowRef();
  let l5 = false;
  return watch(
    [() => u5.selected, d8],
    ([t8]) => {
      var a4;
      l5 || (e16.value = t8 ? (a4 = d8.value.get(t8)) == null ? void 0 : a4.data : void 0, c9("selected-synced", e16.value));
    },
    { immediate: true }
  ), {
    selected: e16,
    handleSelect: (t8) => {
      var a4;
      l5 = true, !t8.disabled && (e16.value = t8.data === e16.value ? void 0 : t8.data, c9("update:selected", (a4 = e16.value) == null ? void 0 : a4[u5.valueKey], e16.value, t8), nextTick(() => {
        l5 = false;
      }));
    }
  };
}

// node_modules/ultra-ui/components/tree/use-check.js
function g7(k6) {
  const { emit: m6, props: i3, nodeDict: u5 } = k6, r7 = shallowReactive(/* @__PURE__ */ new Set());
  let n7 = false, h7 = false;
  watch(
    [() => i3.checked, u5],
    ([a4, d8], [c9]) => {
      n7 || !i3.checkable || d8.size && (h7 = true, c9 == null || c9.forEach((e16) => {
        const t8 = d8.get(e16);
        t8 && (t8.checked = false, r7.delete(t8.data));
      }), a4 == null || a4.forEach((e16) => {
        const t8 = d8.get(e16);
        t8 && (r7.add(t8.data), t8.checked = true);
      }), nextTick(() => {
        h7 = false;
      }));
    },
    { immediate: true }
  ), watch(r7, (a4) => {
    if (h7) return;
    n7 = true;
    const d8 = Array.from(a4);
    m6(
      "update:checked",
      d8.map((c9) => c9[i3.valueKey]),
      d8
    ), nextTick(() => {
      n7 = false;
    });
  });
  function p3(a4, d8) {
    const { checkStrictly: c9 } = i3;
    if (d8) {
      if (Tree.dft(a4, (e16) => {
        e16.disabled || (e16.checked = true, r7.add(e16.data));
      }), !c9) {
        let e16 = a4.parent;
        for (; e16 && e16.depth > 0; )
          e16.checked = e16.children.every((t8) => t8.checked), e16.checked ? (e16.indeterminate = false, r7.add(e16.data)) : e16.indeterminate = true, e16 = e16.parent;
      }
    } else if (Tree.dft(a4, (e16) => {
      e16.checked = false, e16.indeterminate = false, r7.delete(e16.data);
    }), !c9) {
      let e16 = a4.parent;
      for (; e16 && e16.depth > 0; )
        e16.checked = false, r7.delete(e16.data), e16.indeterminate = e16.children.some((t8) => t8.indeterminate) || e16.children.some((t8) => t8.checked), e16 = e16.parent;
    }
  }
  return {
    checked: r7,
    handleCheck: p3
  };
}

// node_modules/ultra-ui/venders/tree.vue_vue_type_script_setup_true_lang-C8iqRvbu.js
var q6 = Object.defineProperty;
var M6 = (o10, n7, c9) => n7 in o10 ? q6(o10, n7, { enumerable: true, configurable: true, writable: true, value: c9 }) : o10[n7] = c9;
var r5 = (o10, n7, c9) => M6(o10, typeof n7 != "symbol" ? n7 + "" : n7, c9);
var P6 = class extends TreeNode {
  constructor(c9) {
    const { data: a4, index: v6, parent: d8, labelKey: x11, valueKey: K6 } = c9;
    super(a4, v6);
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
    return d8 && (this.parent = d8), this.labelKey = x11, this.valueKey = K6, shallowReactive(this);
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
  setup(o10, { expose: n7, emit: c9 }) {
    const a4 = o10, v6 = c9, d8 = e("tree"), { formProps: x11 } = i(), { size: K6 } = g([x11 ?? {}, a4], {
      size: "default"
    }), B7 = shallowRef(), D4 = computed(() => [
      d8.b,
      d8.m(K6.value),
      e.is("selectable", a4.selectable),
      e.is("checkable", a4.checkable)
    ]), H4 = useSlots(), O7 = (t8) => {
      var e16, l5;
      return ((l5 = ((e16 = a4.slots) == null ? void 0 : e16.default) ?? H4.default) == null ? void 0 : l5(t8)) ?? t8.node.label;
    }, i3 = computed(() => {
      const { disabledNode: t8 } = a4;
      return Forest.create(a4.data, {
        createNode: t8 ? (e16, l5) => {
          const f11 = new P6({
            data: e16,
            index: l5,
            valueKey: a4.valueKey,
            labelKey: a4.labelKey
          });
          return e16 && (f11.disabled = t8(e16, f11) ?? false), f11;
        } : (e16, l5) => new P6({
          data: e16,
          index: l5,
          valueKey: a4.valueKey,
          labelKey: a4.labelKey
        })
      });
    });
    watch(
      [() => a4.expandAll, i3],
      ([t8, e16]) => {
        t8 && e16.dft((l5) => {
          l5.expanded = true;
        });
      },
      { immediate: true }
    );
    const u5 = shallowRef([]), E11 = computed(() => {
      const t8 = /* @__PURE__ */ new Map();
      return i3.value.dft((e16) => {
        t8.set(e16.key, e16);
      }), t8;
    });
    function _10() {
      const t8 = [];
      i3.value.dft((e16) => {
        if (!e16.parentExpanded) return false;
        e16.visible && t8.push(e16);
      }), u5.value = t8;
    }
    watch(
      i3,
      () => {
        _10();
      },
      { immediate: true }
    );
    const b10 = /* @__PURE__ */ new Set(), U3 = /* @__PURE__ */ new Set();
    function Y3(t8, e16) {
      return e16 ? t8.label.includes(e16) : true;
    }
    function F6(t8) {
      t8.visible = true;
      let e16 = t8.parent;
      for (; e16 && e16.depth !== 0 && !b10.has(e16); )
        b10.add(e16), e16.expanded = true, e16.visible = true, e16 = e16.parent;
      t8.isLeaf || b10.add(t8);
    }
    function j5(t8) {
      b10.clear(), typeof t8 == "string" ? i3.value.dft((e16) => {
        Y3(e16, t8) ? F6(e16) : e16.visible = false;
      }) : i3.value.dft((e16) => {
        t8(e16) ? F6(e16) : e16.visible = false;
      }), _10();
    }
    const { handleSelect: z5, selected: y4 } = f10({
      props: a4,
      emit: v6,
      nodeDict: E11
    }), { checked: g10, handleCheck: N4 } = g7({
      props: a4,
      emit: v6,
      nodeDict: E11
    }), { totalHeight: G4, virtualList: J7, scrollTo: w11, virtualEnabled: C6, measureElement: Q5 } = j3({
      count: computed(() => u5.value.length),
      estimateSize: () => 40,
      gap: 2,
      virtualThreshold: 80,
      scrollEl: computed(() => {
        var t8;
        return ((t8 = B7.value) == null ? void 0 : t8.containerRef) ?? null;
      })
    }), W6 = computed(() => {
      const t8 = u5.value;
      return J7.value.map((e16) => {
        const l5 = t8[e16.index];
        return {
          node: l5,
          key: l5.key || e16.key,
          offset: e16.start,
          index: e16.index
        };
      });
    });
    return provide(e12, {
      cls: d8,
      selected: y4,
      checked: g10,
      getFlattedNodes: _10,
      getTreeSlotsNode: O7,
      hiddenNodes: U3,
      treeEmit: v6,
      treeProps: a4,
      handleCheck: N4,
      handleSelect: z5
    }), n7({
      filter: j5,
      forest: i3,
      nodes: u5,
      checkNode: N4,
      selectNode: z5,
      checkAll(t8) {
        i3.value.nodes.forEach((e16) => {
          N4(e16, t8);
        });
      },
      getSelected() {
        return y4.value;
      },
      getChecked() {
        return Array.from(g10);
      },
      scrollTo: w11,
      scrollToSelected() {
        w11(u5.value.findIndex((t8) => t8.data === y4.value));
      },
      scrollToChecked() {
        w11(u5.value.findLastIndex((t8) => g10.has(t8.data)));
      }
    }), (t8, e16) => (openBlock(), createBlock(unref(fe2), {
      class: normalizeClass(D4.value),
      ref_key: "scrollRef",
      ref: B7,
      "content-style": {
        height: unref(C6) ? unref(f)(unref(G4), "px") : void 0
      },
      "content-class": [unref(d8).e("wrap"), unref(e).is("virtual", unref(C6))]
    }, {
      default: withCtx(() => [
        unref(C6) ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList(W6.value, ({ node: l5, key: f11, offset: X5, index: Z3 }) => (openBlock(), createBlock(J6, {
            node: l5,
            key: f11,
            class: normalizeClass(unref(e).is("selected", l5.data === unref(y4))),
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
            class: normalizeClass(unref(e).is("selected", l5.data === unref(y4)))
          }, null, 8, ["node", "class"]))),
          128
          /* KEYED_FRAGMENT */
        )),
        u5.value.length ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(unref(d8).e("empty"))
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
    const o10 = e("multi-tree-select"), m6 = F6, Y3 = computed(() => omit(m6, [
      "tips",
      "field",
      "placeholder",
      "disabled",
      "label",
      "readonly"
    ])), V6 = q8, j5 = useSlots(), B7 = shallowRef("");
    watch(B7, (l5) => {
      var t8;
      (t8 = k6.value) == null || t8.filter(l5);
    });
    const r7 = useModel(F6, "modelValue"), T6 = shallowRef(false), n7 = shallowRef([]), { formProps: x11 } = i(), { size: y4, disabled: b10, readonly: K6 } = g([
      x11 ?? {},
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
      var l5, t8;
      return ((l5 = r7.value) == null ? void 0 : l5.length) === ((t8 = k6.value) == null ? void 0 : t8.forest.size);
    }), I4 = computed(() => r7.value.length > 0 && !P8.value), J7 = (l5) => {
      var t8;
      (t8 = k6.value) == null || t8.checkAll(l5);
    }, Q5 = (l5, t8) => {
      N4(), n7.value = t8, V6("change", t8);
    }, X5 = (l5) => {
      N4(), n7.value = n7.value.filter((t8, a4) => a4 !== l5), r7.value = r7.value.filter((t8, a4) => a4 !== l5), V6("change", n7.value);
    }, Z3 = () => {
      N4(), n7.value = [], r7.value = [], V6("clear");
    }, E11 = shallowRef(/* @__PURE__ */ new Map());
    watch(
      () => m6.data,
      (l5) => {
        if (!(l5 != null && l5.length))
          E11.value = /* @__PURE__ */ new Map();
        else {
          const t8 = /* @__PURE__ */ new Map();
          l5.forEach((a4) => {
            Tree.dft(
              a4,
              (w11) => {
                t8.set(w11[m6.valueKey], w11);
              },
              m6.childrenKey
            );
          }), E11.value = t8;
        }
      },
      { immediate: true }
    ), watch(
      [E11, r7],
      ([l5, t8]) => {
        if (!$12) {
          if (!l5.size || !t8.length) {
            n7.value = [];
            return;
          }
          n7.value = t8.filter((a4) => l5.has(a4)).map((a4) => l5.get(a4));
        }
      },
      { immediate: true }
    ), watch(k6, (l5) => {
      l5 && r7.value !== void 0 && nextTick(() => {
        l5.scrollToChecked();
      });
    });
    const _10 = () => {
      var t8;
      let { visibilityLimit: l5 } = m6;
      return l5 < 0 && (l5 = 0), (b10.value || K6.value) && (l5 = ((t8 = r7.value) == null ? void 0 : t8.length) ?? 0), l5;
    }, ee3 = computed(() => n7.value.length > _10() ? n7.value.slice(0, _10()) : n7.value), A11 = computed(() => n7.value.length > _10() ? n7.value.length - _10() : 0);
    return (l5, t8) => unref(K6) ? r7.value.length ? (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass([unref(o10).m(unref(y4)), unref(o10).e("readonly-tags")])
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(o10).e("tags"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(n7.value, (a4) => (openBlock(), createBlock(
                unref(A3),
                {
                  key: a4[l5.valueKey]
                },
                {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(a4[l5.labelKey]),
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
      class: normalizeClass([unref(o10).b, unref(o10).m(unref(y4)), unref(e).is("disabled", unref(b10))]),
      trigger: "click",
      "content-class": [unref(o10).e("panel"), unref(o10).em("panel", unref(y4))],
      onMouseenter: t8[2] || (t8[2] = (a4) => T6.value = true),
      onMouseleave: t8[3] || (t8[3] = (a4) => T6.value = false),
      ref_key: "dropdownRef",
      ref: H4,
      "min-width": l5.minWidth
    }, {
      trigger: withCtx(() => [
        createCommentVNode(" 默认展示 "),
        withDirectives(createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(o10).e("placeholder"))
          },
          toDisplayString(l5.placeholder),
          3
          /* TEXT, CLASS */
        ), [
          [vShow, !n7.value.length]
        ]),
        createCommentVNode(" 选择的数据项 "),
        n7.value.length ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(unref(o10).e("tags"))
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(ee3.value, (a4, w11) => (openBlock(), createBlock(unref(A3), {
                key: a4[l5.valueKey],
                closable: !unref(b10),
                onClose: (we3) => X5(w11)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(a4[l5.labelKey]),
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
              class: normalizeClass(unref(o10).e("clear")),
              onClick: withModifiers(Z3, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"])) : unref(K6) ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(k), {
              key: 1,
              class: normalizeClass(unref(o10).e("arrow"))
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
            class: normalizeClass([unref(o10).e("content-header"), unref(o10).m(unref(y4))])
          },
          [
            createVNode(unref(U2), {
              "model-value": P8.value,
              indeterminate: I4.value,
              "onUpdate:modelValue": J7
            }, {
              default: withCtx(() => t8[4] || (t8[4] = [
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
            class: normalizeClass([unref(o10).e("content-filter"), unref(o10).m(unref(y4))])
          },
          [
            createVNode(unref(Ve), {
              placeholder: "输入关键字进行过滤",
              modelValue: B7.value,
              "onUpdate:modelValue": t8[0] || (t8[0] = (a4) => B7.value = a4)
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
            t8[1] || (t8[1] = (a4) => r7.value = a4),
            Q5
          ],
          ref_key: "treeRef",
          ref: k6,
          class: unref(o10).e("content-tree"),
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
  setup(o10) {
    const e16 = o10, t8 = reactive({
      value: 0
    }), u5 = computed(
      () => e16.tween ? new Tween(t8, {
        duration: e16.duration,
        easingFunction: Tween.easing.easeInOutQuad
      }) : null
    ), i3 = computed(() => n.formatter({
      currency: e16.format === "currency" ? "CNY" : void 0,
      style: e16.format,
      precision: e16.precision
    })), c9 = computed(() => i3.value.format(t8.value));
    return watch(
      () => e16.value,
      () => {
        var n7;
        e16.tween ? (n7 = u5.value) == null || n7.to({ value: e16.value }) : t8.value = e16.value;
      },
      { immediate: true }
    ), (n7, d8) => toDisplayString(c9.value);
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
    const a4 = B7, Y3 = O7, { formProps: $12 } = i(), { size: C6, disabled: l5, readonly: N4 } = g(
      [$12 ?? {}, a4],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), j5 = computed(() => obj(a4).pick(["clearable", "disabled", "placeholder", "size"])), D4 = shallowRef(), M8 = computed(() => {
      var e16;
      return (e16 = D4.value) == null ? void 0 : e16.el;
    }), y4 = e("number-input"), q8 = computed(() => [y4.b, y4.m(C6.value)]), o10 = useModel(B7, "modelValue"), u5 = shallowRef(""), b10 = shallowRef(false), h7 = computed(() => {
      const { step: e16 } = a4;
      return e16 === void 0 || typeof e16 == "boolean" ? 1 : e16;
    }), z5 = computed(() => {
      const { max: e16 } = a4;
      return isUndef(e16) || isUndef(o10.value) ? true : o10.value < e16;
    }), F6 = computed(() => {
      const { min: e16 } = a4;
      return isUndef(e16) || isUndef(o10.value) ? true : o10.value > e16;
    });
    function w11(e16) {
      var m6, A11;
      if (!e16 && e16 !== 0) return "";
      const {
        currency: n7,
        precision: r7,
        minPrecision: d8,
        // 如果没有指定最大精度那么设置默认为值和步长值中的较大值
        maxPrecision: p3 = Math.max(
          ((m6 = String(o10.value).split(".")[1]) == null ? void 0 : m6.length) ?? 0,
          ((A11 = String(h7.value).split(".")[1]) == null ? void 0 : A11.length) ?? 0
        )
      } = a4;
      return n7 ? n(e16).currency("CNY", {
        precision: r7,
        minPrecision: d8,
        maxPrecision: p3
      }) : n(e16).fixed(
        r7 ?? {
          minPrecision: d8,
          maxPrecision: p3
        }
      );
    }
    watch(
      [o10, b10, () => a4.currency],
      ([e16, n7]) => {
        n7 || (u5.value = w11(e16));
      },
      { immediate: true }
    );
    function G4(e16) {
      if (!e16) return;
      const n7 = +e16.replace(/\,/g, ""), r7 = isNaN(n7) ? o10.value : n7;
      if (r7 === void 0) return;
      const { precision: d8, maxPrecision: p3, minPrecision: m6 } = a4;
      return +n(r7).fixed(
        d8 ?? {
          minPrecision: m6,
          maxPrecision: p3
        }
      );
    }
    function _10(e16) {
      if (e16 === void 0) return e16;
      const { min: n7, max: r7 } = a4;
      return n7 !== void 0 && e16 < n7 ? n7 : r7 !== void 0 && e16 > r7 ? r7 : e16;
    }
    function H4(e16) {
      const n7 = G4(e16);
      o10.value = _10(n7) ?? 0, u5.value = e16;
    }
    function J7() {
      Y3("change", o10.value);
    }
    const c9 = new Tween(
      { n: o10.value ?? 0 },
      {
        onUpdate(e16) {
          const n7 = M8.value;
          n7 && (n7.value = w11(e16.n));
        },
        // 动画进行的过程值有可能被改变, 因此在onComplete中确保还原的是原本的值
        onComplete() {
          const e16 = M8.value;
          e16 && (e16.value = w11(o10.value));
        }
      }
    );
    function R7() {
      if (l5.value) return;
      const e16 = o10.value ?? 0;
      c9.state.n = e16;
      const n7 = _10(n.plus(e16, h7.value));
      o10.value = n7, c9.to({ n: n7 });
    }
    function U3() {
      if (l5.value) return;
      const e16 = o10.value ?? 0;
      c9.state.n = e16;
      const n7 = _10(n.minus(e16, h7.value));
      o10.value = n7, c9.to({ n: n7 });
    }
    function L5(e16) {
      if (a4.step) {
        if (e16.key === "ArrowUp")
          return e16.preventDefault(), R7();
        if (e16.key === "ArrowDown")
          return e16.preventDefault(), U3();
      }
    }
    function Q5() {
      if (b10.value = true, o10.value === void 0) return;
      const { precision: e16, maxPrecision: n7, minPrecision: r7 } = a4;
      o10.value = +n(o10.value).fixed(
        e16 ?? {
          maxPrecision: n7,
          minPrecision: r7
        }
      );
    }
    function W6() {
      b10.value = false, o10.value = a4.modelValue;
    }
    return (e16, n7) => unref(N4) ? (openBlock(), createElementBlock(
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
      size: unref(C6),
      readonly: unref(N4),
      disabled: unref(l5)
    }), createSlots({
      _: 2
      /* DYNAMIC */
    }, [
      e16.step !== void 0 && e16.step !== false ? {
        name: "suffix",
        fn: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(y4).e("step"))
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
    const u5 = g10, X5 = W6, o10 = e("select"), N4 = o10.e("option"), { formProps: Z3 } = i(), { size: F6, disabled: B7, readonly: ee3 } = g(
      [Z3 ?? {}, u5],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), p3 = useModel(g10, "modelValue"), R7 = useModel(g10, "text"), n7 = shallowRef(), O7 = shallowRef(), _10 = shallowRef(), le4 = computed(() => u5.filterable || typeof u5.options == "function"), { queryString: k6, options: y4 } = w9({
      props: u5
    });
    let $12 = false, S8 = false;
    watch(
      [p3, y4],
      ([l5, t8]) => {
        if (!(!(t8 != null && t8.length) || $12)) {
          if (S8 = true, l5 !== void 0) {
            const { valueKey: i3 } = u5;
            n7.value = t8.find((a4) => a4[i3] === l5);
          } else
            n7.value = void 0;
          S8 = false;
        }
      },
      { immediate: true }
    ), watch(n7, (l5) => {
      S8 || ($12 = true, p3.value = (l5 == null ? void 0 : l5[u5.valueKey]) ?? "", R7.value = (l5 == null ? void 0 : l5[u5.labelKey]) ?? "", $12 = false);
    });
    const { virtualList: P8, totalHeight: ae4, virtualEnabled: C6, scrollTo: te5, measureElement: oe6 } = j3({
      count: computed(() => y4.value.length),
      virtualThreshold: 80,
      scrollEl: computed(() => {
        var l5;
        return ((l5 = _10.value) == null ? void 0 : l5.containerRef) ?? null;
      }),
      gap: 2,
      estimateSize: () => 40
    }), se4 = computed(() => {
      const l5 = y4.value, { labelKey: t8, valueKey: i3 } = u5;
      return P8.value.map((a4) => {
        const s12 = l5[a4.index];
        return {
          option: s12,
          index: a4.index,
          label: getChainValue(s12, t8),
          val: getChainValue(s12, i3),
          key: a4.key,
          offset: a4.start
        };
      });
    });
    watch(_10, (l5) => {
      l5 && p3.value !== void 0 && nextTick(() => {
        var t8, i3, a4, s12;
        if (C6.value) {
          const b10 = (t8 = P8.value.find(
            (E11) => E11 === n7.value
          )) == null ? void 0 : t8.index;
          b10 !== void 0 && te5(b10);
        } else
          (s12 = (a4 = (i3 = _10.value) == null ? void 0 : i3.contentRef) == null ? void 0 : a4.getElementsByClassName("is-selected")[0]) == null || s12.scrollIntoView();
      });
    });
    const z5 = shallowRef(false);
    watch(z5, (l5) => {
      l5 || (k6.value = "");
    });
    const D4 = (l5) => {
      var t8;
      n7.value = l5, (t8 = O7.value) == null || t8.close(), X5("change", l5);
    }, re6 = () => {
      n7.value = void 0;
    };
    return (l5, t8) => {
      var i3;
      return unref(ee3) ? (openBlock(), createElementBlock(
        "span",
        xe,
        toDisplayString(R7.value || ((i3 = n7.value) == null ? void 0 : i3[l5.labelKey]) || unref(E)),
        1
        /* TEXT */
      )) : (openBlock(), createBlock(unref(oe2), {
        key: 0,
        trigger: "click",
        class: normalizeClass([unref(o10).b, unref(e).is("disabled", unref(B7))]),
        ref_key: "dropdownRef",
        ref: O7,
        visible: z5.value,
        "onUpdate:visible": t8[1] || (t8[1] = (a4) => z5.value = a4),
        "content-class": [unref(o10).e("panel"), unref(o10).em("panel", unref(F6))],
        disabled: unref(B7)
      }, {
        trigger: withCtx(() => [
          createVNode(unref(Ve), {
            size: unref(F6),
            disabled: unref(B7),
            placeholder: l5.placeholder,
            clearable: l5.clearable,
            "model-value": n7.value ? unref(getChainValue)(n7.value, l5.labelKey) ?? R7.value : g10.modelValue,
            onClear: re6,
            "native-readonly": ""
          }, {
            suffix: withCtx(() => [
              createVNode(unref(k), {
                class: normalizeClass(unref(o10).e("arrow"))
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
              class: normalizeClass(unref(o10).e("content-filter"))
            },
            [
              createVNode(unref(Ve), {
                placeholder: "输入关键字进行搜索",
                modelValue: unref(k6),
                "onUpdate:modelValue": t8[0] || (t8[0] = (a4) => isRef(k6) ? k6.value = a4 : null)
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
          unref(y4).length ? (openBlock(), createBlock(unref(fe2), {
            key: 1,
            tag: "ul",
            class: normalizeClass(unref(o10).e("options")),
            ref_key: "scrollRef",
            ref: _10,
            "content-class": [
              unref(o10).e("options-wrap"),
              unref(e).is("virtual", unref(C6))
            ],
            "content-style": {
              height: unref(C6) ? unref(f)(unref(ae4), "px") : void 0
            }
          }, {
            default: withCtx(() => [
              unref(C6) ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createCommentVNode(" @vue-ignore "),
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(se4.value, ({ option: a4, index: s12, val: b10, label: E11, key: ne3, offset: ie6 }) => withDirectives((openBlock(), createElementBlock("li", {
                      class: normalizeClass([unref(N4), unref(e).is("selected", b10 === p3.value)]),
                      onClick: (Be3) => D4(a4),
                      key: ne3,
                      style: normalizeStyle({
                        transform: `translateY(${ie6}px)`
                      }),
                      "data-index": s12,
                      ref_for: true,
                      ref: unref(oe6)
                    }, [
                      renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a4, index: s12 }), () => [
                        createTextVNode(
                          toDisplayString(E11),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 14, we2)), [
                      [unref(T), unref(o10).e("ripple")]
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
                renderList(unref(y4), (a4, s12) => withDirectives((openBlock(), createElementBlock("li", {
                  class: normalizeClass([
                    unref(N4),
                    unref(e).is("selected", unref(getChainValue)(a4, l5.valueKey) === p3.value)
                  ]),
                  onClick: (b10) => D4(a4),
                  key: unref(getChainValue)(a4, l5.valueKey)
                }, [
                  renderSlot(l5.$slots, "default", mergeProps({ ref_for: true }, { option: a4, index: s12 }), () => [
                    createTextVNode(
                      toDisplayString(unref(getChainValue)(a4, l5.labelKey)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 10, Ke2)), [
                  [unref(T), unref(o10).e("ripple")]
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
              class: normalizeClass(unref(o10).e("empty"))
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
  setup(h7, { expose: P8 }) {
    const { config: M8 } = d(), y4 = h7, o10 = e("paginator"), { size: R7 } = l([y4], {
      size: "default"
    }), t8 = useModel(h7, "pageNumber"), C6 = useModel(h7, "pageSize"), A11 = (l5) => {
      C6.value = l5;
    };
    function T6(l5) {
      t8.value !== l5 && (t8.value = l5);
    }
    watch(C6, () => {
      t8.value = 1;
    });
    const _10 = computed(() => C6.value ?? M8.paginator.pageSize), u5 = computed(() => Math.ceil(y4.total / _10.value)), V6 = computed(() => (y4.pageSizeOptions ?? M8.paginator.pageSizeOptions).map(
      (l5) => ({ label: `${l5}条`, value: l5 })
    )), B7 = computed(() => {
      const l5 = n(t8.value - 2).range(
        1,
        Math.max(u5.value - 4, 1)
      );
      return Array.from({ length: Math.min(u5.value, 5) }).map(
        (n7, a4) => l5 + a4
      );
    }), c9 = computed(() => t8.value <= 1), m6 = computed(() => t8.value >= u5.value);
    function J7() {
      c9.value || (t8.value = 1);
    }
    function L5() {
      m6.value || (t8.value = u5.value);
    }
    function O7() {
      c9.value || (t8.value -= 1);
    }
    function E11() {
      m6.value || (t8.value += 1);
    }
    function F6(l5) {
      const a4 = +l5.target.value;
      !isNaN(a4) && a4 > 0 && a4 <= u5.value && (t8.value = a4);
    }
    const v6 = reactive({
      first: false,
      last: false
    }), w11 = shallowRef();
    return P8({
      el: w11
    }), (l5, n7) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(o10).b, unref(o10).m(unref(R7))]),
        ref_key: "paginatorRef",
        ref: w11
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
          class: normalizeClass(unref(o10).e("size-select")),
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
            class: normalizeClass([unref(o10).e("pages")])
          },
          [
            withDirectives((openBlock(), createElementBlock(
              "li",
              {
                class: normalizeClass([unref(o10).e("btn"), unref(e).is("disabled", c9.value)]),
                onClick: J7,
                onMouseenter: n7[0] || (n7[0] = (a4) => v6.first = true),
                onMouseleave: n7[1] || (n7[1] = (a4) => v6.first = false)
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
              [unref(T), !c9.value]
            ]),
            withDirectives((openBlock(), createElementBlock(
              "li",
              {
                class: normalizeClass([unref(o10).e("btn"), unref(e).is("disabled", t8.value === 1)]),
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
              [unref(T), !c9.value]
            ]),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(B7.value, (a4) => withDirectives((openBlock(), createElementBlock("li", {
                key: a4,
                class: normalizeClass([unref(o10).e("btn"), unref(e).is("active", t8.value === a4)]),
                onClick: (ue2) => T6(a4)
              }, [
                createTextVNode(
                  toDisplayString(a4),
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
                class: normalizeClass([unref(o10).e("btn"), unref(e).is("disabled", m6.value)]),
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
                class: normalizeClass([unref(o10).e("btn"), unref(e).is("disabled", m6.value)]),
                onClick: L5,
                onMouseenter: n7[2] || (n7[2] = (a4) => v6.last = true),
                onMouseleave: n7[3] || (n7[3] = (a4) => v6.last = false)
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
            class: normalizeClass(unref(o10).e("jumper"))
          },
          [
            n7[5] || (n7[5] = createBaseVNode(
              "span",
              null,
              "前往",
              -1
              /* HOISTED */
            )),
            createVNode(unref(De4), {
              class: normalizeClass(unref(o10).e("page-input")),
              size: "small",
              min: 1,
              max: u5.value,
              precision: 0,
              "model-value": t8.value,
              clearable: false,
              onKeyup: withKeys(F6, ["enter"]),
              onChange: n7[4] || (n7[4] = (a4) => t8.value = a4)
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
    const c9 = e("password-input"), e16 = useModel(_10, "modelValue"), g10 = (d8) => {
      const t8 = d8.target, l5 = t8.value;
      if (!l5) {
        e16.value = l5;
        return;
      }
      if (!e16.value) {
        e16.value = l5;
        return;
      }
      const a4 = t8.selectionStart;
      let n7 = a4 === 0 ? "" : l5[a4 - 1];
      n7 === v5 && (n7 = "");
      const m6 = l5.length - a4, x11 = n7 === "" ? a4 : a4 - 1, k6 = e16.value.slice(0, x11), C6 = m6 === 0 ? "" : e16.value.slice(-m6);
      e16.value = k6 + n7 + C6, nextTick(() => {
        t8.selectionStart = a4, t8.selectionEnd = a4;
      });
    }, V6 = () => {
      e16.value = "";
    }, s12 = shallowRef(false), w11 = computed(() => s12.value ? e16.value : e16.value ? v5.repeat(e16.value.length) : ""), h7 = () => {
      s12.value = !s12.value;
    };
    return (d8, t8) => (openBlock(), createBlock(unref(Ve), {
      class: normalizeClass(unref(c9).b),
      "model-value": w11.value,
      "onNative:input": g10,
      "onUpdate:modelValue": t8[0] || (t8[0] = (l5) => !l5 && V6()),
      "onSuffix:click": h7
    }, {
      suffix: withCtx(() => [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(c9).e("visibility-toggle")),
              size: 14
            }, {
              default: withCtx(() => [
                s12.value ? (openBlock(), createBlock(unref(hide_default), { key: 0 })) : (openBlock(), createBlock(unref(view_default), { key: 1 }))
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
var C5 = { viewBox: "0 0 100 100" };
var V5 = ["stroke", "stroke-dasharray", "stroke-linecap"];
var d6 = 44;
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
    const p3 = _10, r7 = e("progress"), t8 = computed(() => n(p3.percentage ?? 0).range(0, 100)), c9 = computed(() => {
      const { type: e16 } = p3;
      return typeof e16 == "function" ? e16(t8.value) : e16;
    }), $12 = computed(() => [r7.b, e.is("circle", p3.circle), r7.m(c9.value)]), b10 = computed(() => `var(--color-${c9.value})`), u5 = 2 * Math.PI * d6, B7 = u5 / 4, N4 = computed(() => {
      const e16 = u5 * t8.value / 100;
      return `${e16}, ${u5 - e16}`;
    });
    return (e16, E11) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass($12.value)
      },
      [
        createCommentVNode(" 条形进度条 "),
        e16.circle ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            createCommentVNode(" 环形进度条 "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(r7).e("circle")),
                style: normalizeStyle({ height: unref(f)(e16.size, "px"), width: unref(f)(e16.size, "px") })
              },
              [
                (openBlock(), createElementBlock("svg", C5, [
                  createBaseVNode("circle", {
                    cx: "50",
                    cy: "50",
                    r: d6,
                    fill: "none",
                    stroke: "#f5f8fa",
                    "stroke-width": "8"
                  }),
                  createBaseVNode("circle", {
                    class: normalizeClass(unref(r7).e("circle-ring")),
                    cx: "50",
                    cy: "50",
                    r: d6,
                    fill: "none",
                    stroke: b10.value,
                    "stroke-width": "8",
                    "stroke-dasharray": N4.value,
                    "stroke-dashoffset": B7,
                    "stroke-linecap": t8.value === 0 ? void 0 : "round"
                  }, null, 10, V5)
                ])),
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(r7).e("circle-content"))
                  },
                  [
                    renderSlot(e16.$slots, "default", normalizeProps(guardReactiveProps({ percentage: t8.value, type: c9.value })), () => [
                      createTextVNode(
                        toDisplayString(t8.value) + "% ",
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
                style: normalizeStyle({ width: t8.value + "%" })
              },
              [
                renderSlot(e16.$slots, "default", normalizeProps(guardReactiveProps({ percentage: t8.value, type: c9.value })), () => [
                  createTextVNode(
                    toDisplayString(t8.value) + "%",
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
  setup(i3, { emit: S8 }) {
    const a4 = useModel(i3, "modelValue"), n7 = i3, e16 = e("radio"), { formProps: V6 } = i(), { size: k6, disabled: r7 } = g([V6 ?? {}, n7], {
      size: "default",
      disabled: false
    }), m6 = computed(() => a4.value === n7.value), y4 = computed(() => [
      e16.b,
      e16.m(k6.value),
      e.is("disabled", r7.value),
      e.is("checked", m6.value)
    ]);
    return (t8, u5) => (openBlock(), createElementBlock(
      "label",
      {
        class: normalizeClass(y4.value)
      },
      [
        createCommentVNode(" radio框 "),
        createBaseVNode(
          "section",
          {
            class: normalizeClass(unref(e16).e("button"))
          },
          [
            withDirectives(createBaseVNode("input", {
              type: "radio",
              class: normalizeClass(unref(e16).e("native")),
              value: t8.value,
              "onUpdate:modelValue": u5[0] || (u5[0] = (C6) => a4.value = C6),
              disabled: unref(r7),
              hidden: ""
            }, null, 10, R4), [
              [vModelRadio, a4.value]
            ]),
            createVNode(Transition, { name: "zoom-in" }, {
              default: withCtx(() => [
                m6.value ? (openBlock(), createElementBlock(
                  "span",
                  {
                    key: 0,
                    class: normalizeClass(unref(e16).e("inner"))
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
            class: normalizeClass(unref(e16).e("label"))
          },
          [
            renderSlot(t8.$slots, "default", {}, () => [
              createTextVNode(
                toDisplayString(t8.label),
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
    const b10 = r7, d8 = useModel(r7, "modelValue"), y4 = f11, { formProps: c9 } = i(), { size: v6, disabled: k6, readonly: V6 } = g(
      [c9 ?? {}, b10],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), g10 = e("radio-group"), K6 = (e16, t8) => {
      d8.value = e16, y4("change", t8);
    };
    return (e16, t8) => {
      var i3;
      return unref(V6) ? (openBlock(), createElementBlock(
        "span",
        R5,
        toDisplayString(((i3 = e16.items.find((l5) => l5[e16.valueKey] === d8.value)) == null ? void 0 : i3[e16.labelKey]) || unref(E)),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass([unref(g10).b, unref(e).is("block", e16.block)])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(e16.items, (l5) => {
              var m6;
              return openBlock(), createBlock(A9, {
                key: l5[e16.valueKey],
                value: l5[e16.valueKey],
                "onUpdate:modelValue": (h7) => K6(h7, l5),
                "model-value": d8.value,
                disabled: ((m6 = e16.disabledItem) == null ? void 0 : m6.call(e16, l5)) || unref(k6),
                size: unref(v6)
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(l5[e16.labelKey]),
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
var e13 = Symbol("sliderContextKey");

// node_modules/ultra-ui/components/slider/use-stops.js
var d7 = (u5) => {
  const { sliderProps: t8, sliderSize: r7 } = u5;
  let i3 = computed(() => {
    if (t8.step === 0)
      return console.error("step不应该为0"), [];
    const e16 = (t8.max - t8.min) / t8.step, s12 = r7.value * t8.step / (t8.max - t8.min);
    return Array.from({ length: e16 }).map(
      (p3, n7) => n7 * s12
    );
  });
  return { stops: i3, getStopStyle: (e16) => t8.vertical ? { bottom: `${e16}px` } : { left: `${e16}px` }, setStepButtonPosition: (e16) => {
    const s12 = [...i3.value, r7.value], o10 = s12.map((a4) => Math.abs(e16 - a4)), p3 = Math.min(...o10), n7 = o10.indexOf(p3);
    return s12[n7] ?? 0;
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
    let h7 = inject(e13), { cls: p3, sliderSize: l5, sliderProps: t8, disabled: w11, setSliderBarSize: B7 } = h7;
    const m6 = useModel(_10, "modelValue"), { setStepButtonPosition: x11 } = d7({ sliderProps: t8, sliderSize: l5 });
    let v6 = shallowRef(), n7 = b10;
    const e16 = shallowReactive({
      x: 0,
      y: 0
    }), o10 = {
      x: 0,
      y: 0
    };
    watch(e16, (r7) => {
      B7(r7);
    });
    const D4 = computed(() => ({
      transform: `translate(${e16.x}px, ${e16.y}px)`
    })), c9 = shallowRef(0);
    let d8 = false;
    return watch([c9, l5], ([r7, i3]) => {
      if (i3) {
        if (d8) {
          const { min: s12, max: u5 } = t8;
          m6.value = Math.round(s12 + (u5 - s12) * r7);
        } else
          t8.vertical ? (e16.y = -r7 * i3, o10.y = e16.y) : (e16.x = r7 * i3, o10.x = e16.x);
        n7("dragEnd", m6.value), t8.range && (t8.vertical ? n7("dragPosition", e16.y) : n7("dragPosition", e16.x));
      }
    }), watch(
      m6,
      (r7) => {
        c9.value = (r7 - t8.min) / (t8.max - t8.min);
      },
      {
        immediate: true
      }
    ), w({
      target: v6,
      onDragStart(r7) {
        d8 = true;
      },
      onDrag(r7, i3, s12) {
        if (w11.value) return;
        const { vertical: u5 } = t8;
        let a4 = u5 ? o10.y + i3 : o10.x + r7;
        u5 ? a4 > 0 ? a4 = 0 : a4 < -l5.value && (a4 = -l5.value) : a4 < 0 ? a4 = 0 : a4 > l5.value && (a4 = l5.value), t8.vertical ? e16.y = a4 : e16.x = a4, t8.step && t8.step > 0 && (t8.vertical ? e16.y = -x11(Math.abs(a4)) : e16.x = x11(a4)), t8.range && (t8.vertical ? n7("dragPosition", e16.y) : n7("dragPosition", e16.x));
      },
      onDragEnd(r7, i3, s12) {
        o10.x = e16.x, o10.y = e16.y, c9.value = t8.vertical ? -o10.y / l5.value : o10.x / l5.value, nextTick(() => {
          d8 = false;
        });
      }
    }), (r7, i3) => (openBlock(), createElementBlock(
      "div",
      {
        style: normalizeStyle(D4.value),
        ref_key: "slideButtonRef",
        ref: v6,
        class: normalizeClass(unref(p3).e("button-wrap"))
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(p3).e("button"))
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
var b9 = (i3, n7) => {
  let r7 = ref(0), h7 = ref(0), u5 = ref(0), f11 = ref(0);
  const l5 = shallowRef();
  s3({
    targets: l5,
    onResize([m6]) {
      var a4, t8;
      i3.vertical ? n7.value = (a4 = l5.value) == null ? void 0 : a4.offsetHeight : n7.value = (t8 = l5.value) == null ? void 0 : t8.offsetWidth;
    }
  });
  const e16 = shallowReactive({
    width: i3.vertical ? "100%" : "0%",
    height: "100%",
    left: "0px",
    bottom: "0px"
  });
  return {
    onePosition: r7,
    twoPosition: h7,
    barStyles: e16,
    minValue: u5,
    maxValue: f11,
    runwayRef: l5,
    updateSliderBarSize: ({ x: m6, y: a4 }) => {
      if (i3.range) {
        let t8 = Math.min(r7.value, h7.value), s12 = Math.max(r7.value, h7.value);
        i3.vertical ? (e16.bottom = `${-s12}px`, e16.height = `${s12 - t8}px`) : (e16.left = `${t8}px`, e16.width = `${s12 - t8}px`);
      } else
        i3.vertical ? (e16.height = `${-a4}px`, e16.width = "100%") : (e16.height = "100%", e16.width = `${m6}px`);
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
    const e16 = S8, N4 = F6, u5 = e("slider"), { formProps: O7 } = i(), { size: U3, disabled: V6, readonly: A11 } = g([
      O7 ?? {},
      e16
    ]), K6 = computed(() => [
      u5.b,
      u5.m(U3.value),
      e.is("vertical", e16.vertical),
      e.is("disabled", V6.value)
    ]), i3 = shallowRef(0), b10 = shallowRef(), {
      barStyles: L5,
      onePosition: X5,
      twoPosition: Y3,
      updateSliderBarSize: j5,
      runwayRef: w11,
      minValue: P8,
      maxValue: k6
    } = b9(e16, i3), { stops: q8, getStopStyle: G4, setStepButtonPosition: B7 } = d7({
      sliderProps: e16,
      sliderSize: i3
    }), H4 = computed(() => [u5.e("runway")]), l5 = useModel(S8, "modelValue");
    let o10 = ref(0), s12 = ref(0);
    const I4 = (a4) => {
      X5.value = a4;
    }, J7 = (a4) => {
      Y3.value = a4;
    };
    watch(
      () => l5.value,
      (a4) => {
        e16.range && isArray(l5.value) ? (o10.value = l5.value[0], s12.value = l5.value[1]) : o10.value = l5.value;
      },
      {
        immediate: true
      }
    ), watch(
      () => [b10.value, e16.min],
      (a4) => {
        l5.value || (l5.value = e16.range ? [e16.min, e16.min] : e16.min ?? 0);
      }
    );
    const M8 = async (a4) => {
      await nextTick(), e16.range && isArray(l5.value) ? (P8.value = Math.min(
        o10.value,
        s12.value
      ), k6.value = Math.max(
        o10.value,
        s12.value
      ), l5.value = [P8.value, k6.value]) : l5.value = o10.value;
    }, Q5 = (a4) => {
      if (e16.disabled) return;
      let n7 = shallowRef(0), t8 = shallowRef(0), m6 = a4.offsetX, y4 = a4.offsetY;
      if (e16.step && e16.step > 0 && (e16.vertical ? y4 = B7(Math.abs(y4)) : m6 = B7(m6)), n7.value = e16.vertical ? -(y4 - i3.value) / i3.value : m6 / i3.value, t8.value = Math.round(
        e16.min + (e16.max - e16.min) * n7.value
      ), e16.range) {
        let W6 = Math.abs(o10.value - t8.value), Z3 = Math.abs(s12.value - t8.value);
        W6 <= Z3 ? o10.value = t8.value : s12.value = t8.value, l5.value = [o10.value, s12.value];
      } else
        l5.value = t8.value;
    };
    return provide(e13, {
      sliderProps: e16,
      disabled: V6,
      runwayRef: w11,
      sliderSize: i3,
      model: l5,
      cls: u5,
      emit: N4,
      setSliderBarSize: j5
    }), (a4, n7) => unref(A11) ? (openBlock(), createElementBlock(
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
        style: normalizeStyle(a4.vertical ? { height: `${a4.height}px` } : void 0)
      },
      [
        createCommentVNode(" 跑道 "),
        createBaseVNode(
          "div",
          {
            ref_key: "runwayRef",
            ref: w11,
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
              modelValue: unref(o10),
              "onUpdate:modelValue": n7[0] || (n7[0] = (t8) => isRef(o10) ? o10.value = t8 : o10 = t8),
              onDragPosition: I4,
              onDragEnd: M8
            }, null, 8, ["modelValue"]),
            a4.range ? (openBlock(), createBlock(Q4, {
              key: 0,
              modelValue: unref(s12),
              "onUpdate:modelValue": n7[1] || (n7[1] = (t8) => isRef(s12) ? s12.value = t8 : s12 = t8),
              onDragPosition: J7,
              onDragEnd: M8
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
            createCommentVNode(" 断点 "),
            a4.showStops ? (openBlock(true), createElementBlock(
              Fragment,
              { key: 1 },
              renderList(unref(q8), (t8, m6) => (openBlock(), createElementBlock(
                "div",
                {
                  key: m6,
                  class: normalizeClass(unref(u5).e("stop")),
                  style: normalizeStyle(unref(G4)(t8))
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
var w10 = ["onClick"];
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
  setup(S8, { emit: C6 }) {
    const c9 = useSlots(), b10 = computed(() => {
      var e16;
      return c9.icon ? ((e16 = c9.icon()[0]) == null ? void 0 : e16.children) || [] : [];
    }), v6 = computed(() => {
      var e16;
      return c9.desc ? ((e16 = c9.desc()[0]) == null ? void 0 : e16.children) || [] : [];
    }), r7 = computed(() => u5.active ? u5.items.findIndex((e16) => e16.key === u5.active) : u5.items.length + 1), u5 = S8, k6 = C6, { size: g10 } = l([u5], {
      size: "default"
    }), o10 = e("steps"), z5 = (e16) => {
      k6("stepClick", e16), k6("update:active", e16.key);
    };
    return (e16, j5) => (openBlock(), createElementBlock(
      "ol",
      {
        class: normalizeClass([unref(o10).b, unref(o10).e(e16.direction), unref(o10).m(unref(g10))])
      },
      [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(e16.items, (m6, l5) => (openBlock(), createElementBlock("li", {
            class: normalizeClass([
              unref(o10).e("step"),
              unref(e).is("readonly", e16.readonly),
              unref(e).is(e16.processStatus, e16.active === m6.key),
              unref(e).is(e16.finishStatus, l5 < r7.value)
            ]),
            onClick: (q8) => e16.readonly ? void 0 : z5(m6)
          }, [
            createBaseVNode(
              "div",
              {
                class: normalizeClass([unref(o10).e("icon"), unref(e).is(e16.direction)])
              },
              [
                l5 !== 0 ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass([
                      unref(o10).em("icon", "line"),
                      unref(e).is(e16.processStatus, e16.active === m6.key),
                      unref(e).is(e16.finishStatus, l5 < r7.value)
                    ])
                  },
                  null,
                  2
                  /* CLASS */
                )) : (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: normalizeClass(unref(o10).em("icon", "placeholder"))
                  },
                  null,
                  2
                  /* CLASS */
                )),
                unref(c9).icon ? (openBlock(), createBlock(resolveDynamicComponent(b10.value[l5]), {
                  key: 2,
                  class: normalizeClass([unref(o10).em("icon", "number")])
                }, null, 8, ["class"])) : (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 3,
                    class: normalizeClass([unref(o10).em("icon", "number")])
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
                l5 !== e16.items.length - 1 ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 4,
                    class: normalizeClass([
                      unref(o10).em("icon", "line"),
                      unref(e).is(e16.processStatus, l5 === r7.value - 1),
                      unref(e).is(e16.finishStatus, l5 < r7.value - 1)
                    ])
                  },
                  null,
                  2
                  /* CLASS */
                )) : (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 5,
                    class: normalizeClass(unref(o10).em("icon", "placeholder"))
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
                class: normalizeClass([unref(o10).e("description")])
              },
              [
                unref(c9).desc && v6.value[l5] ? (openBlock(), createBlock(resolveDynamicComponent(v6.value[l5]), { key: 0 })) : (openBlock(), createElementBlock(
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
          ], 10, w10))),
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
function t7(e16) {
  return e16;
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
    const d8 = _10, f11 = T6, k6 = useSlots(), { size: D4 } = l([d8], {
      size: "default"
    }), F6 = computed(() => d8.items), s12 = e("tabs"), w11 = shallowRef(), y4 = shallowRef(-1), n7 = useModel(_10, "modelValue"), v6 = shallowRef({});
    watch(
      [y4, () => d8.position, () => d8.editable],
      async ([e16, l5, o10]) => {
        if (await nextTick(), e16 === -1 || o10) return;
        const c9 = w11.value, m6 = c9.getBoundingClientRect(), $12 = c9.children[e16], { offsetWidth: K6, offsetHeight: L5 } = $12, R7 = $12.getBoundingClientRect();
        l5 === "top" || l5 === "bottom" ? v6.value = {
          width: K6 + "px",
          transform: `translate3d(${R7.left - m6.left}px, 0, 0)`
        } : v6.value = {
          height: L5 + "px",
          transform: `translate3d(0, ${R7.top - m6.top}px, 0)`
        };
      }
    );
    let h7 = false;
    watch(
      n7,
      (e16) => {
        h7 || (y4.value = d8.items.findIndex((l5) => l5.key === e16));
      },
      { immediate: true }
    );
    const I4 = (e16, l5) => {
      e16.disabled || (h7 = true, y4.value = l5, n7.value = e16.key, nextTick(() => {
        h7 = false;
      }));
    }, B7 = () => {
      var o10;
      const e16 = n7.value;
      if (!e16) return null;
      const l5 = (o10 = k6[e16]) == null ? void 0 : o10.call(k6, { key: e16 });
      return Array.isArray(l5) ? createVNode(
        fe2,
        { class: s12.e("content") },
        { default: () => l5 }
      ) : l5;
    }, P8 = (e16, l5) => {
      const { items: o10 } = d8;
      n7.value === e16.key && (n7.value = (o10[l5 + 1] ?? o10[l5 - 1]).key), f11("update:items", [...o10.slice(0, l5), ...o10.slice(l5 + 1)]), f11("delete", e16, l5);
    }, H4 = () => {
      f11("create");
    };
    return (e16, l5) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass([unref(s12).b, unref(s12).m(e16.position), unref(s12).m(unref(D4))])
      },
      [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass([unref(s12).e("header"), unref(s12).em("header", e16.position)]),
            ref_key: "headerRef",
            ref: w11
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(F6.value, (o10, c9) => withDirectives((openBlock(), createElementBlock("li", {
                key: o10.key,
                class: normalizeClass([
                  unref(s12).e("header-item"),
                  unref(e).is("active", n7.value === o10.key),
                  unref(e).is("disabled", o10.disabled === true)
                ]),
                onClick: withModifiers((m6) => I4(o10, c9), ["stop"])
              }, [
                renderSlot(e16.$slots, `name:${o10.key}`, {}, () => [
                  createTextVNode(
                    toDisplayString(o10.name),
                    1
                    /* TEXT */
                  )
                ]),
                e16.editable ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    o10.disabled ? (openBlock(), createElementBlock(
                      "i",
                      {
                        key: 1,
                        class: normalizeClass(unref(s12).e("close-placeholder"))
                      },
                      null,
                      2
                      /* CLASS */
                    )) : (openBlock(), createBlock(unref(k), {
                      key: 0,
                      class: normalizeClass(unref(s12).e("close")),
                      onClick: withModifiers((m6) => P8(o10, c9), ["stop"]),
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
                [unref(T), o10.disabled ? false : unref(s12).e("ripple")]
              ])),
              128
              /* KEYED_FRAGMENT */
            )),
            e16.editable ? (openBlock(), createElementBlock(
              "li",
              {
                key: 0,
                class: normalizeClass([unref(s12).e("header-item"), unref(s12).e("add")]),
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
                class: normalizeClass(unref(s12).e("marker")),
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
            e16.keepAlive ? (openBlock(), createBlock(
              KeepAlive,
              { key: 0 },
              [
                (openBlock(), createBlock(resolveDynamicComponent(B7()), { key: n7.value }))
              ],
              1024
              /* DYNAMIC_SLOTS */
            )) : (openBlock(), createBlock(resolveDynamicComponent(B7()), { key: n7.value }))
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
var s10 = (t8) => t8.replace(/[|\\{}()[\]^$+*?.-]/g, (i3) => `\\${i3}`);
function r6(t8, i3) {
  const g10 = i3.filter((e16) => !!e16).map((e16) => s10(e16.trim())), n7 = new RegExp(`(${g10.join("|")})`, "gi");
  return t8.split(n7).filter(Boolean).map((e16) => ({ text: e16, highlight: n7.test(e16) }));
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
  setup(p3) {
    const t8 = p3, u5 = e("text"), m6 = computed(() => [
      u5.b,
      e.is(t8.as),
      e.is("bold", t8.bold),
      e.is("italic", t8.italic)
    ]), f11 = computed(() => {
      const e16 = {
        fontSize: f(t8.fontSize, "px")
      }, { deleted: n7, underline: o10 } = t8;
      return n7 && (e16.textDecoration = "line-through"), o10 && (e16.textDecoration = "underline"), e16;
    }), l5 = useSlots(), h7 = () => {
      var c9;
      const e16 = (c9 = l5.default) == null ? void 0 : c9.call(l5);
      if (!(e16 != null && e16.length)) return;
      const n7 = e16.filter((r7) => h4(r7)), { highlight: o10 } = t8;
      return o10 ? n7.reduce((r7, d8) => (r6(
        d8.children,
        Array.isArray(o10) ? o10 : [o10]
      ).forEach((s12) => {
        s12.highlight ? r7.push(h("mark", s12.text)) : r7.push(createTextVNode(s12.text));
      }), r7), []) : n7;
    };
    return (e16, n7) => (openBlock(), createElementBlock(
      "p",
      {
        class: normalizeClass(m6.value),
        style: normalizeStyle(f11.value)
      },
      [
        createVNode(unref(d3), {
          content: h7(),
          ref: "aa"
        }, null, 8, ["content"])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});

// node_modules/ultra-ui/components/text-editor/di.js
var e14 = Symbol("TableDIKey");

// node_modules/ultra-ui/venders/bar.vue_vue_type_script_setup_true_lang-2UZRm5LY.js
var z4 = defineComponent({
  __name: "bar",
  setup(B7, { expose: l5 }) {
    const o10 = shallowRef(), i3 = e("text-editor"), s12 = inject(e14);
    return l5({
      barRef: o10
    }), (C6, n7) => (openBlock(), createElementBlock(
      "div",
      {
        id: "bar",
        class: normalizeClass(unref(i3).e("bar")),
        ref_key: "barRef",
        ref: o10
      },
      [
        n7[0] || (n7[0] = createStaticVNode('<select class="ql-size"><option value="small">小</option><option selected>正常</option><option value="large">大</option><option value="huge">嘎嘎大</option></select>', 1)),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(s12).textEditorProps.toolbar ?? [
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
  setup(y4, { expose: R7, emit: V6 }) {
    const w11 = V6, o10 = y4;
    provide(e14, {
      textEditorProps: o10
    });
    const { formProps: C6 } = i(), { size: k6, disabled: r7, readonly: a4 } = g([
      C6 ?? {},
      o10
    ]), E11 = computed(() => [
      s12.b,
      s12.m(k6.value),
      e.is("disabled", r7.value),
      e.is("readonly", a4.value)
    ]), s12 = e("text-editor"), u5 = shallowRef(), i3 = shallowRef();
    let l5, e16 = null;
    const d8 = ref(""), B7 = () => {
      var t8;
      l5 = {
        modules: {
          toolbar: (t8 = i3.value) == null ? void 0 : t8.barRef
        },
        // readOnly: readonly.value,
        theme: "snow",
        placeholder: r7.value || a4.value ? void 0 : o10.placeholder
      };
    };
    let p3 = ref(true);
    nextTick(() => {
      B7();
    });
    const f11 = async () => {
      h7(), await nextTick(), p3.value = true, nextTick(() => {
        console.log(l5, "options"), e16 = new N3(u5.value, l5), e16.on("text-change", v6), r7.value || a4.value ? e16.enable(false) : e16.enable(true), e16.updateContents(o10.modelValue), d8.value = `${(/* @__PURE__ */ new Date()).getTime()}${Math.random()}`;
      });
    }, h7 = () => {
      e16 && (p3.value = false);
    };
    onMounted(() => {
      f11();
    }), watch(
      () => [r7.value, a4.value],
      () => {
        f11();
      }
    );
    const T6 = () => e16, M8 = (t8) => (e16 == null || e16.update(), e16 == null ? void 0 : e16.updateContents(t8)), $12 = () => e16 == null ? void 0 : e16.getModule("toolbar"), v6 = (t8, n7, W6) => {
      const z5 = e16 == null ? void 0 : e16.getContents();
      w11("update:modelValue", { value: z5, stamp: d8.value });
    };
    return onBeforeUnmount(() => {
      e16 == null || e16.off("text-change", v6), e16 == null || e16.history.clear(), h7();
    }), watch([() => o10.modelValue, () => e16], ([t8, n7]) => {
      n7 && (t8 == null ? void 0 : t8.stamp) !== d8.value && n7.setContents(t8 == null ? void 0 : t8.value);
    }), R7({ quillRef: T6, setValue: M8, getModelBar: $12 }), (t8, n7) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(E11.value)
      },
      [
        createVNode(
          z4,
          {
            ref_key: "barRef",
            ref: i3
          },
          null,
          512
          /* NEED_PATCH */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(s12).e("hover")),
            style: normalizeStyle(`height: ${t8.height}`),
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
function s11(t8) {
  n2(t8, {
    height: "auto"
  }), nextTick(() => {
    const { scrollHeight: i3 } = t8;
    n2(t8, {
      overflow: "hidden",
      height: i3 + "px"
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
  setup(h7, { emit: k6 }) {
    const a4 = h7, s12 = e("textarea"), { formProps: z5 } = i(), { size: M8, disabled: m6, readonly: p3 } = g(
      [z5 ?? {}, a4],
      {
        size: "default",
        disabled: false,
        readonly: false
      }
    ), r7 = k6, g10 = ref(null), n7 = useModel(h7, "modelValue"), c9 = shallowRef(false), { focus: F6, handleBlur: y4, handleFocus: x11 } = s4((o10) => {
      r7(o10 ? "focus" : "blur");
    }), T6 = computed(() => [
      s12.b,
      s12.m(M8.value),
      e.is("resize-none", !a4.resize),
      e.is("disabled", m6.value),
      e.is("readonly", p3.value),
      e.is("focus", F6.value),
      s12.m("more")
    ]), N4 = (o10) => {
      const e16 = o10.target.value;
      if (e16.length > a4.maxlength) {
        const t8 = e16.slice(0, a4.maxlength);
        r7("update:modelValue", t8);
      } else
        r7("update:modelValue", e16);
    }, R7 = computed(() => {
      var o10;
      return a4.maxlength ? a4.maxlength - (((o10 = n7.value) == null ? void 0 : o10.length) ?? 0) : 0;
    }), E11 = () => {
      n7.value = "", r7("clear");
    }, P8 = (o10) => {
      r7("change", o10.target.value);
    };
    return watch(
      [n7, g10],
      ([o10, e16]) => {
        e16 && a4.autosize && s11(e16);
      },
      { immediate: true }
    ), (o10, e16) => unref(p3) ? (openBlock(), createElementBlock(
      "span",
      Z2,
      toDisplayString(n7.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(T6.value),
        onMouseenter: e16[3] || (e16[3] = (t8) => c9.value = true),
        onMouseleave: e16[4] || (e16[4] = (t8) => c9.value = false)
      },
      [
        withDirectives(createBaseVNode("textarea", {
          class: normalizeClass(unref(s12).e("native")),
          placeholder: o10.placeholder,
          "onUpdate:modelValue": e16[0] || (e16[0] = (t8) => n7.value = t8),
          maxlength: o10.maxlength,
          rows: o10.rows,
          cols: o10.cols,
          onInput: N4,
          onFocus: e16[1] || (e16[1] = //@ts-ignore
          (...t8) => unref(x11) && unref(x11)(...t8)),
          onBlur: e16[2] || (e16[2] = //@ts-ignore
          (...t8) => unref(y4) && unref(y4)(...t8)),
          onChange: P8,
          disabled: unref(m6),
          readonly: o10.nativeReadonly,
          ref_key: "textareaRef",
          ref: g10
        }, null, 42, X4), [
          [vModelText, n7.value]
        ]),
        a4.maxlength && a4.showCount ? (openBlock(), createElementBlock(
          "span",
          {
            key: 0,
            class: normalizeClass(unref(s12).m("count"))
          },
          toDisplayString(R7.value) + "/" + toDisplayString(a4.maxlength),
          3
          /* TEXT, CLASS */
        )) : createCommentVNode("v-if", true),
        createVNode(Transition, {
          name: "zoom-in",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            a4.clearable && n7.value && c9.value && !unref(m6) && !unref(p3) ? (openBlock(), createBlock(unref(k), {
              key: 0,
              class: normalizeClass(unref(s12).m("clear")),
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
var e15 = Symbol("ThemeDIKey");

// node_modules/ultra-ui/venders/group.vue_vue_type_script_setup_true_lang-NN6tztzn.js
var g8 = defineComponent({
  __name: "group",
  props: {
    title: {}
  },
  setup(u5) {
    const { cls: e16 } = inject(e15);
    return (r7, d8) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(e16).e("group"))
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(e16).e("group-title"))
          },
          toDisplayString(r7.title),
          3
          /* TEXT, CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(e16).e("group-content"))
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
    const { cls: e16 } = inject(e15);
    return (l5, _10) => (openBlock(), createElementBlock(
      "div",
      {
        class: normalizeClass(unref(e16).e("group-item"))
      },
      [
        createBaseVNode(
          "label",
          {
            class: normalizeClass(unref(e16).e("group-label"))
          },
          toDisplayString(l5.label),
          3
          /* TEXT, CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(e16).e("group-item-content"))
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
    return provide(e15, {
      cls: f11
    }), (z5, a4) => (openBlock(), createElementBlock(
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
                  modelValue: unref(f2).border.width,
                  "onUpdate:modelValue": a4[0] || (a4[0] = (d8) => unref(f2).border.width = d8),
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
                  modelValue: unref(f2).radius.small,
                  "onUpdate:modelValue": a4[1] || (a4[1] = (d8) => unref(f2).radius.small = d8),
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
                  modelValue: unref(f2).radius.default,
                  "onUpdate:modelValue": a4[2] || (a4[2] = (d8) => unref(f2).radius.default = d8),
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
                  modelValue: unref(f2).radius.large,
                  "onUpdate:modelValue": a4[3] || (a4[3] = (d8) => unref(f2).radius.large = d8),
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
                  modelValue: unref(f2).formComponentHeight.small,
                  "onUpdate:modelValue": a4[4] || (a4[4] = (d8) => unref(f2).formComponentHeight.small = d8),
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
                  modelValue: unref(f2).formComponentHeight.default,
                  "onUpdate:modelValue": a4[5] || (a4[5] = (d8) => unref(f2).formComponentHeight.default = d8),
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
                  modelValue: unref(f2).formComponentHeight.large,
                  "onUpdate:modelValue": a4[6] || (a4[6] = (d8) => unref(f2).formComponentHeight.large = d8),
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
                  modelValue: unref(f2).menuHeight.small,
                  "onUpdate:modelValue": a4[7] || (a4[7] = (d8) => unref(f2).menuHeight.small = d8),
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
                  modelValue: unref(f2).menuHeight.default,
                  "onUpdate:modelValue": a4[8] || (a4[8] = (d8) => unref(f2).menuHeight.default = d8),
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
                  modelValue: unref(f2).menuHeight.large,
                  "onUpdate:modelValue": a4[9] || (a4[9] = (d8) => unref(f2).menuHeight.large = d8),
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
                  modelValue: unref(f2).tag.small,
                  "onUpdate:modelValue": a4[10] || (a4[10] = (d8) => unref(f2).tag.small = d8),
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
                  modelValue: unref(f2).tag.default,
                  "onUpdate:modelValue": a4[11] || (a4[11] = (d8) => unref(f2).tag.default = d8),
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
                  modelValue: unref(f2).tag.large,
                  "onUpdate:modelValue": a4[12] || (a4[12] = (d8) => unref(f2).tag.large = d8),
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
                  modelValue: unref(f2).fontSizeTitle.small,
                  "onUpdate:modelValue": a4[13] || (a4[13] = (d8) => unref(f2).fontSizeTitle.small = d8),
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
                  modelValue: unref(f2).fontSizeTitle.default,
                  "onUpdate:modelValue": a4[14] || (a4[14] = (d8) => unref(f2).fontSizeTitle.default = d8),
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
                  modelValue: unref(f2).fontSizeTitle.large,
                  "onUpdate:modelValue": a4[15] || (a4[15] = (d8) => unref(f2).fontSizeTitle.large = d8),
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
                  modelValue: unref(f2).fontSizeMain.small,
                  "onUpdate:modelValue": a4[16] || (a4[16] = (d8) => unref(f2).fontSizeMain.small = d8),
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
                  modelValue: unref(f2).fontSizeMain.default,
                  "onUpdate:modelValue": a4[17] || (a4[17] = (d8) => unref(f2).fontSizeMain.default = d8),
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
                  modelValue: unref(f2).fontSizeMain.large,
                  "onUpdate:modelValue": a4[18] || (a4[18] = (d8) => unref(f2).fontSizeMain.large = d8),
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
                  modelValue: unref(f2).fontSizeAssist.small,
                  "onUpdate:modelValue": a4[19] || (a4[19] = (d8) => unref(f2).fontSizeAssist.small = d8),
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
                  modelValue: unref(f2).fontSizeAssist.default,
                  "onUpdate:modelValue": a4[20] || (a4[20] = (d8) => unref(f2).fontSizeAssist.default = d8),
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
                  modelValue: unref(f2).fontSizeAssist.large,
                  "onUpdate:modelValue": a4[21] || (a4[21] = (d8) => unref(f2).fontSizeAssist.large = d8),
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
                  modelValue: unref(f2).shadow.x,
                  "onUpdate:modelValue": a4[22] || (a4[22] = (d8) => unref(f2).shadow.x = d8),
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
                  modelValue: unref(f2).shadow.y,
                  "onUpdate:modelValue": a4[23] || (a4[23] = (d8) => unref(f2).shadow.y = d8),
                  clearable: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(g9, { label: "模糊半径" }, {
              default: withCtx(() => [
                createVNode(unref(De4), {
                  modelValue: unref(f2).shadow.blur,
                  "onUpdate:modelValue": a4[24] || (a4[24] = (d8) => unref(f2).shadow.blur = d8),
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
                  modelValue: unref(f2).shadow.spread,
                  "onUpdate:modelValue": a4[25] || (a4[25] = (d8) => unref(f2).shadow.spread = d8),
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
                  modelValue: unref(f2).gap.small,
                  "onUpdate:modelValue": a4[26] || (a4[26] = (d8) => unref(f2).gap.small = d8),
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
                  modelValue: unref(f2).gap.default,
                  "onUpdate:modelValue": a4[27] || (a4[27] = (d8) => unref(f2).gap.default = d8),
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
                  modelValue: unref(f2).gap.large,
                  "onUpdate:modelValue": a4[28] || (a4[28] = (d8) => unref(f2).gap.large = d8),
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
    const t8 = e("tree-select"), n7 = g10, z5 = computed(() => omit(n7, [
      "tips",
      "field",
      "placeholder",
      "disabled",
      "label",
      "readonly"
    ])), c9 = N4, M8 = useSlots(), m6 = shallowRef("");
    watch(m6, (l5) => {
      var a4;
      (a4 = p3.value) == null || a4.filter(l5);
    });
    const d8 = useModel(g10, "modelValue"), o10 = shallowRef(), { formProps: P8 } = i(), { size: f11, disabled: k6, readonly: R7 } = g([
      P8 ?? {},
      n7
    ]), p3 = shallowRef(), B7 = shallowRef(), E11 = () => {
      d8.value = "", o10.value = void 0, c9("clear"), c9("change", "", void 0), c9("update:text", "");
    };
    let v6 = false;
    watch(
      [() => n7.data, d8],
      ([l5, a4]) => {
        if (v6) return;
        if (!(l5 != null && l5.length) || a4 === void 0) {
          o10.value = void 0, a4 = void 0;
          return;
        }
        let r7 = false;
        l5.some(($12) => (Tree.dft($12, (w11) => {
          if (w11[n7.valueKey] === a4)
            return o10.value = w11[n7.labelKey], r7 = true, false;
        }), r7));
      },
      {
        immediate: true
      }
    );
    const F6 = (l5, a4) => {
      var r7;
      v6 = true, nextTick(() => {
        v6 = false;
      }), d8.value = l5 ?? "", a4 ? o10.value = getChainValue(a4, n7.labelKey) : o10.value = "", c9("change", l5, a4), c9("update:text", o10.value), (r7 = B7.value) == null || r7.close();
    };
    return watch(p3, (l5) => {
      l5 && d8.value !== void 0 && nextTick(() => {
        l5.scrollToSelected();
      });
    }), (l5, a4) => unref(R7) ? (openBlock(), createElementBlock(
      "span",
      le3,
      toDisplayString(l5.text || o10.value || unref(E)),
      1
      /* TEXT */
    )) : (openBlock(), createBlock(unref(oe2), {
      key: 0,
      class: normalizeClass([unref(t8).b, unref(e).is("disabled", unref(k6))]),
      trigger: "click",
      "content-class": [unref(t8).e("panel"), unref(t8).em("panel", unref(f11))],
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
          "model-value": l5.text ?? (d8.value ? o10.value : void 0),
          onClear: E11,
          "native-readonly": ""
        }, {
          suffix: withCtx(() => [
            createVNode(unref(k), {
              class: normalizeClass(unref(t8).e("arrow"))
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
            class: normalizeClass([unref(t8).e("content-filter"), unref(t8).m(unref(f11))])
          },
          [
            createVNode(unref(Ve), {
              placeholder: "输入关键字进行过滤",
              modelValue: m6.value,
              "onUpdate:modelValue": a4[0] || (a4[0] = (r7) => m6.value = r7)
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
          selected: d8.value,
          "onUpdate:selected": F6,
          ref_key: "treeRef",
          ref: p3,
          selectable: "",
          class: unref(t8).e("content-tree"),
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
  setup(y4) {
    const c9 = e("watermark"), n7 = y4, l5 = ref(), i3 = reactive({
      fontColor: "rgba(0,0,0,.1)",
      fontFamily: "Arial",
      image: n7.image
    }), m6 = debounce(async () => {
      const r7 = n7.text, s12 = l5.value;
      if (s12 === void 0 || !r7) return;
      let t8 = document.createElement("canvas"), e16 = t8.getContext("2d");
      e16.font = `${n7.fontSize}px ${i3.fontFamily}`;
      const o10 = e16.measureText(r7).width;
      t8 = document.createElement("canvas"), t8.width = o10, t8.height = o10, e16 = t8.getContext("2d"), e16.font = `${n7.fontSize}px ${i3.fontFamily}`, e16 = t8.getContext("2d"), e16.fillStyle = i3.fontColor, e16.textAlign = "left", e16.textBaseline = "top", e16.translate(o10 / 2, o10 / 2), e16.rotate(n7.route * Math.PI / 180), e16.translate(-o10 / 2, -o10 / 2), e16.fillText(r7, 0, (o10 - n7.fontSize) / 2), n2(s12, {
        background: `url(${t8.toDataURL("image/png")}) repeat`
      }), e16.clearRect(0, 0, t8.width, t8.height), t8 = null;
    }, 150);
    return window.addEventListener("resize", m6), onBeforeUnmount(() => {
      window.removeEventListener("resize", m6);
    }), onMounted(() => {
      m6();
    }), (r7, s12) => r7.appendToBody ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: "body"
    }, [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(unref(c9).b),
          ref_key: "watermarkRef",
          ref: l5,
          style: normalizeStyle({
            zIndex: unref(o)()
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
        class: normalizeClass(unref(c9).b),
        ref_key: "watermarkRef",
        ref: l5,
        style: normalizeStyle({
          zIndex: unref(o)()
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
  t6 as MessageConfirm,
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
  v3 as UCardAction,
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
  d5 as UListItem,
  N as ULoading,
  x10 as UMenu,
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
  c3 as contextmenu,
  t4 as defineBatchEditColumns,
  t7 as defineSteps,
  te3 as defineTableColumns,
  n5 as formField,
  k5 as message,
  v as vLoading
};
//# sourceMappingURL=ultra-ui_components_index__js.js.map
