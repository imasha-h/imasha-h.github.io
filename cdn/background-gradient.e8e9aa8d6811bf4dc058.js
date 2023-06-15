"use strict";(self.webpackChunknew_bedford_framework=self.webpackChunknew_bedford_framework||[]).push([[5847],{78767:function(t,e,n){n.d(e,{Z:function(){return C}});n(92338);var r=n(66953),o=n(45301),u=n(32768),i=n(8477),c=n(37586),a="squarespace-bgfx-prefer-paused";function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["startColor","endColor","baseColor","backgroundColor","imageTint","patternColor","color1","color2","color3","color4"],C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(f,t);var e,n,o,s=b(f);function f(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),O(d(n=s.call(this)),"isDestroyed",!1),O(d(n),"onPauseButtonClick",(function(){var t;n.component.togglePaused(),(t=n.component.isPaused)?localStorage.setItem(a,t):localStorage.removeItem(a),n.component.isPaused&&c.D.activeControllers.forEach((function(t){t!==d(n)&&t.forcePaused()})),n.updateButtons()})),O(d(n),"getResolvedGenerativeContext",(function(t){return(0,u.lF)(t,g,c.D.paletteColors)})),n.section=t.closest("section");var r=n.section.dataset.currentStyles;return n.currentStyles=JSON.parse(r),n.currentGenerative=n.currentStyles.generative||{},n.initComponent(t,e),n.component.isSupported?(n.initButtons(),c.D.activeControllers.push(d(n)),n):v(n)}return e=f,n=[{key:"initComponent",value:function(t,e){var n=t.querySelector(".background-fx-canvas"),o=this.getResolvedGenerativeContext(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({reduceMotion:i.u6||!!localStorage.getItem(a),pixelRatio:Math.min(1.5,devicePixelRatio)},this.currentGenerative));if(c.D.componentCache)return this.component=c.D.componentCache,this.component.unbindListeners(),this.component.attach(n),this.component.setProps(o),void this.component.refresh();this.component=new r.Z(e,n,o)}},{key:"initButtons",value:function(){var t=l(this.section.querySelectorAll(".background-pause-button"),2),e=t[0],n=t[1];this.pauseButton=e,this.playButton=n,this.pauseButton.addEventListener("click",this.onPauseButtonClick),this.playButton.addEventListener("click",this.onPauseButtonClick),this.updateButtons()}},{key:"forcePaused",value:function(){this.component.setPaused(!0),this.updateButtons()}},{key:"updateButtons",value:function(){var t=this.component,e=t.autoUpdate,n=t.isPaused,r=this.pauseButton===document.activeElement,o=this.playButton===document.activeElement,u=e&&!n,i=e&&n;this.pauseButton.classList.toggle("visible",u),this.playButton.classList.toggle("visible",i),r&&i?this.playButton.focus():o&&u&&this.pauseButton.focus()}},{key:"unbindButtons",value:function(){this.playButton&&(this.pauseButton.removeEventListener("click",this.onPauseButtonClick),this.playButton.removeEventListener("click",this.onPauseButtonClick))}},{key:"destroyComponent",value:function(){this.component&&this.component.destroy()}},{key:"destroy",value:function(){this.isDestroyed||(this.isDestroyed=!0,this.unbindButtons(),this.destroyComponent(),c.D.activeControllers.splice(c.D.activeControllers.indexOf(this),1))}}],n&&y(e.prototype,n),o&&y(e,o),f}(o.Z)},37586:function(t,e,n){n.d(e,{D:function(){return o}});var r=n(32768),o={activeControllers:[],componentCache:null};o.paletteColors=(0,r.Fy)()},11183:function(t,e,n){n.r(e);n(92338);var r=n(91262);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,t);var e=i(n);function n(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,t,r.Z)}return n}(n(78767).Z);e.default=function(t){return new s(t)}},32768:function(t,e,n){n.d(e,{Fy:function(){return f},di:function(){return b},lF:function(){return y},wX:function(){return p}});n(92338);var r=n(87475),o=n(35689);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a="SITE_PALETTE_COLOR",s="CUSTOM_COLOR",l="THEME_COLOR";function f(){return window.__INITIAL_SQUARESPACE_7_1_WEBSITE_COLORS__}function p(t,e){var n;switch(null==t?void 0:t.type){case a:var u=t.sitePaletteColor,c=u.id,l=u.alpha,f=(0,r.dT)({colors:e},c);return f?(0,r.xQ)({userFormat:o.ColorModel.hsl,values:i(i({},f.value.values),{},{alpha:null!=l?l:1})}):null;case s:return null!==(n=t.customColor)&&void 0!==n?n:null}}function y(t,e,n){var o={colors:n},u=new Set(e),c=Object.keys(t).reduce((function(e,n){return u.has(n)&&(e[n]=function(t,e){switch(null==t?void 0:t.type){case"SITE_PALETTE_COLOR":return(0,r.Gj)(e,t.sitePaletteColor.id);case"CUSTOM_COLOR":return t.customColor}}(t[n],o)),e}),{});return i(i({},t),c)}var h=function(t){var e,n,o,u=(e=t.customColor.hslaValue,n=e.saturation,o=e.lightness,n*=100,o*=100,i(i({},e),{},{saturation:n,lightness:o})),c={userFormat:t.customColor.userFormat,values:u},a=(0,r.xQ)(c);return{type:s,customColor:a}},b=function(t){return(e=t)&&e.type===l?{type:l}:function(t){return t&&t.type===a}(t)?function(t){var e=null==t?void 0:t.sitePaletteColor;return{type:a,sitePaletteColor:{id:e.colorName,alpha:e.alphaModifier}}}(t):function(t){return t&&t.type===s}(t)?h(t):void 0;var e}}}]);