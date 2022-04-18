"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Frontend_Pages_Contact_vue"],{

/***/ "./node_modules/@meforma/vue-toaster/src/api.js":
/*!******************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/api.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Toaster_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toaster.vue */ "./node_modules/@meforma/vue-toaster/src/Toaster.vue");
/* harmony import */ var _helpers_event_bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/event-bus.js */ "./node_modules/@meforma/vue-toaster/src/helpers/event-bus.js");
/* harmony import */ var _helpers_mount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/mount-component */ "./node_modules/@meforma/vue-toaster/src/helpers/mount-component.js");




const Api = (globalOptions = {}) => {
  return {
    show(message, options = {}) {
      let localOptions = { message, ...options }
      const c = (0,_helpers_mount_component__WEBPACK_IMPORTED_MODULE_2__["default"])(_Toaster_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
        props: { ...globalOptions, ...localOptions }
      })
      return c
    },
    clear() {
      _helpers_event_bus_js__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('toast-clear')
    },
    success(message, options = {}) {
      options.type = 'success'
      return this.show(message, options)
    },
    error(message, options = {}) {
      options.type = 'error'
      return this.show(message, options)
    },
    info(message, options = {}) {
      options.type = 'info'
      return this.show(message, options)
    },
    warning(message, options = {}) {
      options.type = 'warning'
      return this.show(message, options)
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/defaults/positions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/defaults/positions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "definePosition": () => (/* binding */ definePosition)
/* harmony export */ });
const POSITIONS = {
  TOP_RIGHT: 'top-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left'
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(POSITIONS));

function definePosition(position, top, bottom) {
  let result = null
  switch (position) {
    case POSITIONS.TOP:
    case POSITIONS.TOP_RIGHT:
    case POSITIONS.TOP_LEFT:
      result = top
      break

    case POSITIONS.BOTTOM:
    case POSITIONS.BOTTOM_RIGHT:
    case POSITIONS.BOTTOM_LEFT:
      result = bottom
      break
  }
  return result
}


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/helpers/event-bus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/helpers/event-bus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Event {
  constructor() {
    this.queue = {}
  }

  $on(name, callback) {
    this.queue[name] = this.queue[name] || []
    this.queue[name].push(callback)
  }

  $off(name, callback) {
    if (this.queue[name]) {
      for (var i = 0; i < this.queue[name].length; i++) {
        if (this.queue[name][i] === callback) {
          this.queue[name].splice(i, 1)
          break
        }
      }
    }
  }

  $emit(name, data) {
    if (this.queue[name]) {
      this.queue[name].forEach(function (callback) {
        callback(data)
      })
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Event());


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/helpers/mount-component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/helpers/mount-component.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const createElement = () =>
  typeof document !== 'undefined' && document.createElement('div')

const mount = (component, { props, children, element, app } = {}) => {
  let el = element ? element : createElement()

  let vNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(component, props, children)
  if (app && app._context) {
    vNode.appContext = app._context
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.render)(vNode, el)

  const destroy = () => {
    if (el) {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.render)(null, el)
    }
    el = null
    vNode = null
  }

  return { vNode, destroy, el }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mount);


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/helpers/remove-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/helpers/remove-element.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeElement": () => (/* binding */ removeElement)
/* harmony export */ });
const removeElement = (el) => {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else {
    el.parentNode.removeChild(el)
  }
}




/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/helpers/timer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/helpers/timer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
// https://stackoverflow.com/a/3969760
class Timer {
  constructor(callback, delay) {
    this.startedAt = Date.now()
    this.callback = callback
    this.delay = delay

    this.timer = setTimeout(callback, delay)
  }

  pause() {
    this.stop()
    this.delay -= Date.now() - this.startedAt
  }

  resume() {
    this.stop()
    this.startedAt = Date.now()
    this.timer = setTimeout(this.callback, this.delay)
  }

  stop() {
    clearTimeout(this.timer)
  }
}


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Positions": () => (/* reexport safe */ _defaults_positions_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Toaster": () => (/* reexport safe */ _Toaster_vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "createToaster": () => (/* reexport safe */ _api_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Toaster_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toaster.vue */ "./node_modules/@meforma/vue-toaster/src/Toaster.vue");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./node_modules/@meforma/vue-toaster/src/api.js");
/* harmony import */ var _defaults_positions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults/positions.js */ "./node_modules/@meforma/vue-toaster/src/defaults/positions.js");




const Plugin = (app, options = {}) => {
  let methods = (0,_api_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)
  app.$toast = methods
  app.config.globalProperties.$toast = methods
}

_Toaster_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = Plugin

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Toaster_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Pages/Contact.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Pages/Contact.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Breadcrumb */ "./resources/js/Frontend/Shared/Breadcrumb.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_SocialItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/SocialItem */ "./resources/js/Frontend/Shared/SocialItem.vue");
/* harmony import */ var _meforma_vue_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @meforma/vue-toaster */ "./node_modules/@meforma/vue-toaster/src/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var toaster = (0,_meforma_vue_toaster__WEBPACK_IMPORTED_MODULE_3__.createToaster)({});
    var crums = [{
      name: "Trang chủ",
      url: "/"
    }, {
      name: "Liên hệ"
    }];
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      name: null,
      email: null,
      subject: null,
      message: null
    });

    var submit = function submit() {
      form.post("/contact", {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          form.reset();
          toaster.success((0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.value.flash.success);
        }
      });
    };

    var __returned__ = {
      toaster: toaster,
      crums: crums,
      form: form,
      submit: submit,
      Breadcrumb: _Shared_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm,
      usePage: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage,
      Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head,
      SocialItem: _Shared_SocialItem__WEBPACK_IMPORTED_MODULE_2__["default"],
      createToaster: _meforma_vue_toaster__WEBPACK_IMPORTED_MODULE_3__.createToaster
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    crums: Array
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    var isLastCrumb = function isLastCrumb(index) {
      return index === props.crums.length - 1;
    };

    var lastCrumbName = function lastCrumbName() {
      return props.crums[props.crums.length - 1].name;
    };

    var __returned__ = {
      props: props,
      isLastCrumb: isLastCrumb,
      lastCrumbName: lastCrumbName,
      Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Pages/Contact.vue?vue&type=template&id=6fecbf76":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Pages/Contact.vue?vue&type=template&id=6fecbf76 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section section--pb0"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-12 col-lg-7 col-xl-8"
};
var _hoisted_5 = ["onSubmit"];
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-12 col-xl-6"
};
var _hoisted_8 = {
  "class": "sign__group"
};
var _hoisted_9 = {
  key: 0,
  "class": "sign__error"
};
var _hoisted_10 = {
  "class": "col-12 col-xl-6"
};
var _hoisted_11 = {
  "class": "sign__group"
};
var _hoisted_12 = {
  key: 0,
  "class": "sign__error"
};
var _hoisted_13 = {
  "class": "col-12"
};
var _hoisted_14 = {
  "class": "sign__group"
};
var _hoisted_15 = {
  key: 0,
  "class": "sign__error"
};
var _hoisted_16 = {
  "class": "col-12"
};
var _hoisted_17 = {
  "class": "sign__group"
};
var _hoisted_18 = {
  key: 0,
  "class": "sign__error"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 col-xl-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "sign__btn"
}, "Gửi")], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "col-12 col-lg-5 col-xl-4"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h2 class=\"section__title section__title--sidebar\">Thông tin</h2><p class=\"section__text\"> It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout </p><ul class=\"contacts__list\"><li><a href=\"tel:+84372124043\">+84 372 140 43</a></li><li><a href=\"mailto:datlechin@gmail.com\">datlechin@gmail.com</a></li></ul>", 3);

var _hoisted_24 = {
  "class": "contacts__social"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], {
    title: "Liên hệ"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Breadcrumb"], {
    crums: $setup.crums
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "sign__form sign__form--contacts",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    "class": "sign__input",
    placeholder: "Họ tên"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.email = $event;
    }),
    "class": "sign__input",
    placeholder: "Email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.subject = $event;
    }),
    "class": "sign__input",
    placeholder: "Tiêu đề"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.subject]]), $setup.form.errors.subject ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.subject), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.message = $event;
    }),
    "class": "sign__textarea",
    placeholder: "Nhập tin nhắn của bạn"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.message]]), $setup.form.errors.message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.message), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_19])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SocialItem"])])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=template&id=10eee24e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=template&id=10eee24e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "section section--head"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-12 col-xl-6"
};
var _hoisted_5 = {
  "class": "section__title section__title--head"
};
var _hoisted_6 = {
  "class": "col-12 col-xl-6"
};
var _hoisted_7 = {
  "class": "breadcrumb"
};
var _hoisted_8 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.lastCrumbName()), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.crums, function (crum, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["breadcrumb__item", {
        'breadcrumb__item--active': $setup.isLastCrumb(index)
      }]),
      key: index
    }, [!$setup.isLastCrumb(index) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
      key: 0,
      href: crum.url,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(crum.name)
    }, null, 8
    /* PROPS */
    , ["href", "textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.isLastCrumb(index) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(crum.name)
    }, null, 8
    /* PROPS */
    , _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n}\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n.fade-enter-active {\n  transition: opacity 300ms ease-in;\n}\n.fade-leave-active {\n  transition: opacity 150ms ease-out;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n@-webkit-keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fadeInDown {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n@keyframes fadeInDown {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, -100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n@-webkit-keyframes fadeInUp {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n@keyframes fadeInUp {\nfrom {\n    opacity: 0.5;\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    transform: none;\n}\n}\n.c-toast-container {\n  position: fixed;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2em;\n  overflow: hidden;\n  z-index: 9999;\n  pointer-events: none;\n}\n.c-toast-container--top {\n  flex-direction: column;\n}\n.c-toast-container--bottom {\n  flex-direction: column-reverse;\n}\n@media screen and (max-width: 768px) {\n.c-toast-container {\n    padding: 0;\n    position: fixed !important;\n}\n}\n.c-toast--top,\n.c-toast--bottom {\n  align-self: center;\n}\n.c-toast--top-right,\n.c-toast--bottom-right {\n  align-self: flex-end;\n}\n.c-toast--top-left,\n.c-toast--bottom-left {\n  align-self: flex-start;\n}\n.v--default-css .c-toast--success {\n  background-color: #28a745;\n}\n.v--default-css .c-toast--info {\n  background-color: #17a2b8;\n}\n.v--default-css .c-toast--warning {\n  background-color: #ffc107;\n}\n.v--default-css .c-toast--error {\n  background-color: #dc3545;\n}\n.v--default-css .c-toast--default {\n  background-color: #343a40;\n}\n.v--default-css .c-toast {\n  display: grid;\n  align-items: center;\n  -webkit-animation-duration: 150ms;\n          animation-duration: 150ms;\n  margin: 0.5em 0;\n  border-radius: 0.5em;\n  pointer-events: auto;\n  color: #fff;\n  min-height: 3em;\n  cursor: pointer;\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  padding: 0.5em 2em;\n  word-break: break-word;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_22_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_stylus_loader_index_js_vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_style_index_0_id_04d22544_lang_stylus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../stylus-loader/index.js!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_stylus_loader_index_js_vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_style_index_0_id_04d22544_lang_stylus__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_stylus_loader_index_js_vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_style_index_0_id_04d22544_lang_stylus__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/Toaster.vue":
/*!***********************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/Toaster.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Toaster_vue_vue_type_template_id_04d22544__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toaster.vue?vue&type=template&id=04d22544 */ "./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=template&id=04d22544");
/* harmony import */ var _Toaster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toaster.vue?vue&type=script&lang=js */ "./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=script&lang=js");
/* harmony import */ var _Toaster_vue_vue_type_style_index_0_id_04d22544_lang_stylus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus */ "./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus");
/* harmony import */ var C_Users_datle_Documents_Code_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_datle_Documents_Code_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Toaster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Toaster_vue_vue_type_template_id_04d22544__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/@meforma/vue-toaster/src/Toaster.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_remove_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/remove-element */ "./node_modules/@meforma/vue-toaster/src/helpers/remove-element.js");
/* harmony import */ var _helpers_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/timer */ "./node_modules/@meforma/vue-toaster/src/helpers/timer.js");
/* harmony import */ var _defaults_positions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults/positions */ "./node_modules/@meforma/vue-toaster/src/defaults/positions.js");
/* harmony import */ var _helpers_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/event-bus */ "./node_modules/@meforma/vue-toaster/src/helpers/event-bus.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'toast',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default'
    },
    position: {
      type: String,
      default: _defaults_positions__WEBPACK_IMPORTED_MODULE_2__["default"].BOTTOM_RIGHT,
      validator(value) {
        return Object.values(_defaults_positions__WEBPACK_IMPORTED_MODULE_2__["default"]).includes(value)
      }
    },
    maxToasts: {
      type: [Number, Boolean],
      default: false
    },
    duration: {
      type: [Number, Boolean],
      default: 4000
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    queue: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    useDefaultCss: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isActive: false,
      parentTop: null,
      parentBottom: null,
      isHovered: false,
      timer: null
    }
  },
  beforeMount() {
    this.createParents()
    this.setDefaultCss()
    this.setupContainer()
  },
  mounted() {
    this.showNotice()
    _helpers_event_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$on('toast-clear', this.close)
  },
  methods: {
    createParents() {
      this.parentTop = document.querySelector('.c-toast-container--top')
      this.parentBottom = document.querySelector('.c-toast-container--bottom')

      if (this.parentTop && this.parentBottom) return

      if (!this.parentTop) {
        this.parentTop = document.createElement('div')
        this.parentTop.className = 'c-toast-container c-toast-container--top'
      }

      if (!this.parentBottom) {
        this.parentBottom = document.createElement('div')
        this.parentBottom.className =
          'c-toast-container c-toast-container--bottom'
      }
    },
    setDefaultCss() {
      const type = this.useDefaultCss ? 'add' : 'remove'
      this.parentTop.classList[type]('v--default-css')
      this.parentBottom.classList[type]('v--default-css')
    },
    setupContainer() {
      const container = document.body
      container.appendChild(this.parentTop)
      container.appendChild(this.parentBottom)
    },
    shouldQueue() {
      if (!this.queue && this.maxToasts === false) {
        return false
      }

      if (this.maxToasts !== false) {
        return (
          this.maxToasts <=
          this.parentTop.childElementCount + this.parentBottom.childElementCount
        )
      }

      return (
        this.parentTop.childElementCount > 0 ||
        this.parentBottom.childElementCount > 0
      )
    },
    showNotice() {
      if (this.shouldQueue()) {
        this.queueTimer = setTimeout(this.showNotice, 250)
        return
      }

      this.correctParent.insertAdjacentElement('afterbegin', this.$el)
      this.isActive = true

      this.timer =
        this.duration !== false ? new _helpers_timer__WEBPACK_IMPORTED_MODULE_1__["default"](this.close, this.duration) : null
    },
    click() {
      this.onClick.apply(null, arguments)

      if (this.dismissible) {
        this.close()
      }
    },
    toggleTimer(newVal) {
      if (this.timer && this.pauseOnHover) {
        newVal ? this.timer.pause() : this.timer.resume()
      }
    },
    stopTimer() {
      this.timer && this.timer.stop()
      clearTimeout(this.queueTimer)
    },
    close() {
      this.stopTimer()
      this.isActive = false
      setTimeout(() => {
        this.onClose.apply(null, arguments)
        ;(0,_helpers_remove_element__WEBPACK_IMPORTED_MODULE_0__.removeElement)(this.$el)
      }, 150)
    }
  },
  computed: {
    correctParent() {
      return (0,_defaults_positions__WEBPACK_IMPORTED_MODULE_2__.definePosition)(this.position, this.parentTop, this.parentBottom)
    },
    transition() {
      return (0,_defaults_positions__WEBPACK_IMPORTED_MODULE_2__.definePosition)(
        this.position,
        {
          enter: 'fadeInDown',
          leave: 'fadeOut'
        },
        {
          enter: 'fadeInUp',
          leave: 'fadeOut'
        }
      )
    }
  },
  beforeUnmount() {
    _helpers_event_bus__WEBPACK_IMPORTED_MODULE_3__["default"].$off('toast-clear', this.close)
  }
});


/***/ }),

/***/ "./resources/js/Frontend/Pages/Contact.vue":
/*!*************************************************!*\
  !*** ./resources/js/Frontend/Pages/Contact.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_6fecbf76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=6fecbf76 */ "./resources/js/Frontend/Pages/Contact.vue?vue&type=template&id=6fecbf76");
/* harmony import */ var _Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Frontend/Pages/Contact.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_datle_Documents_Code_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_datle_Documents_Code_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Contact_vue_vue_type_template_id_6fecbf76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Frontend/Pages/Contact.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Frontend/Shared/Breadcrumb.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Frontend/Shared/Breadcrumb.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_10eee24e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=10eee24e */ "./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=template&id=10eee24e");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_datle_Documents_Code_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_datle_Documents_Code_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Breadcrumb_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Breadcrumb_vue_vue_type_template_id_10eee24e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Frontend/Shared/Breadcrumb.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Frontend/Pages/Contact.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Frontend/Pages/Contact.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Contact.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Pages/Contact.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Breadcrumb.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Frontend/Pages/Contact.vue?vue&type=template&id=6fecbf76":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/Pages/Contact.vue?vue&type=template&id=6fecbf76 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_template_id_6fecbf76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_template_id_6fecbf76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Contact.vue?vue&type=template&id=6fecbf76 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Pages/Contact.vue?vue&type=template&id=6fecbf76");


/***/ }),

/***/ "./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=template&id=10eee24e":
/*!***********************************************************************************!*\
  !*** ./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=template&id=10eee24e ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_template_id_10eee24e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_template_id_10eee24e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Breadcrumb.vue?vue&type=template&id=10eee24e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Frontend/Shared/Breadcrumb.vue?vue&type=template&id=10eee24e");


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_stylus_loader_index_js_vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_style_index_0_id_04d22544_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../stylus-loader/index.js!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=style&index=0&id=04d22544&lang=stylus");


/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Toaster.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=template&id=04d22544":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=template&id=04d22544 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_template_id_04d22544__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Toaster_vue_vue_type_template_id_04d22544__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Toaster.vue?vue&type=template&id=04d22544 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=template&id=04d22544");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=template&id=04d22544":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@meforma/vue-toaster/src/Toaster.vue?vue&type=template&id=04d22544 ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "enter-active-class": $options.transition.enter,
    "leave-active-class": $options.transition.leave
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['c-toast', `c-toast--${$props.type}`, `c-toast--${$props.position}`]),
        onMouseover: _cache[0] || (_cache[0] = $event => ($options.toggleTimer(true))),
        onMouseleave: _cache[1] || (_cache[1] = $event => ($options.toggleTimer(false))),
        onClick: _cache[2] || (_cache[2] = (...args) => ($options.click && $options.click(...args))),
        role: "alert",
        innerHTML: $props.message
      }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isActive]
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["enter-active-class", "leave-active-class"]))
}

/***/ })

}]);