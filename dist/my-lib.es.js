import { defineComponent as p, computed as m, openBlock as l, createElementBlock as i, mergeProps as d, renderSlot as u, normalizeClass as f, createVNode as b, unref as v, normalizeProps as B, guardReactiveProps as $, withCtx as g } from "vue";
const y = /* @__PURE__ */ p({
  __name: "BaseLabel",
  props: {
    attrs: {}
  },
  setup(s) {
    const t = s, e = m(() => ({ ...t.attrs }));
    return (a, n) => (l(), i("label", d(e.value, { class: "baseLabel" }), [
      u(a.$slots, "default")
    ], 16));
  }
});
const I = ["value"], x = /* @__PURE__ */ p({
  __name: "BaseInput",
  props: {
    attrs: {},
    variant: { default: "primary" },
    modelValue: {},
    modelModifiers: { default: () => ({}) }
  },
  emits: ["update:modelValue", "input"],
  setup(s, { emit: t }) {
    const e = s, a = t, n = m(() => {
      var r;
      return {
        type: ((r = e.attrs) == null ? void 0 : r.type) ?? "text",
        ...e.attrs
      };
    }), c = (r) => {
      let o = r.target.value;
      e.modelModifiers.capitalize && (o = o.charAt(0).toUpperCase() + o.slice(1)), a("update:modelValue", o), a("input", r);
    };
    return (r, o) => (l(), i("input", d({ value: r.modelValue }, n.value, {
      class: ["baseInput", {
        input__primary: e.variant === "primary",
        input__secondary: e.variant === "secondary"
      }],
      onInput: c
    }), null, 16, I));
  }
});
const C = /* @__PURE__ */ p({
  __name: "BaseButton",
  props: {
    attrs: {},
    variant: { default: "primary" }
  },
  emits: ["click"],
  setup(s) {
    const t = s, e = m(() => {
      var a;
      return {
        type: ((a = t.attrs) == null ? void 0 : a.type) ?? "button",
        ...t.attrs
      };
    });
    return (a, n) => (l(), i("button", d(e.value, {
      class: ["baseButton", {
        button__primary: t.variant === "primary",
        button__secondary: t.variant === "secondary"
      }],
      onClick: n[0] || (n[0] = (c) => a.$emit("click", c))
    }), [
      u(a.$slots, "default")
    ], 16));
  }
});
const h = /* @__PURE__ */ p({
  __name: "BaseInputGroup",
  props: {
    laberAttrs: {},
    variant: { default: "primary" }
  },
  setup(s) {
    const t = s;
    return (e, a) => (l(), i("div", {
      class: f(["group", {
        group__primary: t.variant === "primary",
        group__secondary: t.variant === "secondary"
      }])
    }, [
      b(v(y), B($(t.laberAttrs)), {
        default: g(() => [
          u(e.$slots, "label")
        ]),
        _: 3
      }, 16),
      u(e.$slots, "default")
    ], 2));
  }
});
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseButton: C,
  BaseInput: x,
  BaseInputGroup: h,
  BaseLabel: y
}, Symbol.toStringTag, { value: "Module" })), _ = k, z = {
  install: (s) => {
    for (const t in _)
      s.use(_[t]);
  }
};
export {
  C as BaseButton,
  x as BaseInput,
  h as BaseInputGroup,
  y as BaseLabel,
  z as default
};
