import {
  e,
  isObj
} from "./chunk-UAAKHJSZ.js";
import {
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  reactive,
  readonly,
  render,
  unref,
  watch,
  withCtx
} from "./chunk-XYSSNQS4.js";

// node_modules/ultra-ui/utils/helper/create-increase.js
function t(e3 = 1e3) {
  let r = e3;
  return () => r++;
}

// node_modules/ultra-ui/utils/dom/z-index.js
var o = t(1e3);

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
  (e3, t3) => {
    t3 && document.documentElement.classList.remove(t3), document.documentElement.classList.add(e3);
  },
  { immediate: true }
);
function c(e3, t3) {
  Object.keys(t3).forEach((o2) => {
    const a2 = e3[o2], n = t3[o2];
    isObj(a2) ? isObj(n) ? c(a2, n) : console.warn(`extend['${o2}']应该是一个对象`) : e3[o2] = n;
  });
}
function d() {
  return {
    /** 全局配置 */
    config: readonly(i),
    /**
     * 设置全局配置项
     * @param conf
     */
    setConfig(e3) {
      c(i, e3);
    }
  };
}

// node_modules/ultra-ui/compositions/use-fallback-props/index.js
function l(n, e3) {
  const { config: i2 } = d();
  let r = {};
  for (const t3 in e3)
    if (e3.hasOwnProperty(t3)) {
      const f = e3[t3], s = computed(() => {
        for (let o2 = n.length - 1; o2 > -1; --o2) {
          const u = n[o2];
          if (u[t3] !== void 0)
            return u[t3];
        }
        return i2[t3] ?? f;
      });
      r[t3] = s;
    }
  return r;
}
function g(n, e3) {
  return e3 || (e3 = {
    size: "default",
    disabled: false,
    readonly: false
  }), l(n, e3);
}

// node_modules/ultra-ui/venders/loading.vue_vue_type_script_setup_true_lang-gJr5tX1I.js
var N = defineComponent({
  name: "Loading",
  __name: "loading",
  props: {
    type: { default: "spinner" }
  },
  setup(r) {
    const o2 = r, { size: s } = l([o2], {
      size: "default"
    }), e3 = e("loading"), l2 = computed(() => [e3.b, e3.m(s.value), e3.e(o2.type)]);
    return (v2, y) => (openBlock(), createBlock(Transition, {
      name: "fade",
      appear: ""
    }, {
      default: withCtx(() => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(l2.value),
            style: normalizeStyle({ zIndex: unref(o)() })
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(e3).e("loader"))
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
var c2 = e("loading");
var a = c2.e("container");
function t2(o2, n) {
  o2.classList.add(a);
  const d2 = createVNode(N, {
    type: n.arg
  });
  render(d2, o2);
}
function e2(o2) {
  render(null, o2), o2.classList.remove(a);
}
var v = {
  mounted(o2, n) {
    n.value && t2(o2, n);
  },
  updated(o2, n) {
    n.value ? t2(o2, n) : e2(o2);
  },
  unmounted(o2) {
    e2(o2);
  }
};

export {
  t,
  o,
  d,
  l,
  g,
  N,
  v
};
//# sourceMappingURL=chunk-TEMIEFGQ.js.map
