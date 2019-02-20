(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/AlertStack/Alert.css":function(e,t,n){},"./src/components/AlertStack/Alert.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=o.a.createContext(),b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,y(t).call(this,e))).pushAlert=function(e){n.setState(function(t){return{alerts:[u({},e,{id:Math.random()})].concat(l(t.alerts))}}),["error","warning"].includes(e.type)&&console.error(e)},n.showAlert=function(e){return n.setState(function(t){return{alerts:t.alerts.map(function(t){return t!==e?t:u({},e,{shown:!0})})}})},n.closeAlert=function(e){return n.setState(function(t){return{alerts:t.alerts.map(function(t){return t!==e?t:u({},e,{closed:!0})})}})},n.state={alerts:[],pushAlert:n.pushAlert,showAlert:n.showAlert,closeAlert:n.closeAlert},t.pushAlert=n.pushAlert,n}var n,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement(d.Provider,{value:this.state},this.props.children)}}])&&p(n.prototype,i),c&&p(n,c),t}(),h=d;b.__docgenInfo={description:"",methods:[{name:"pushAlert",docblock:null,modifiers:[],params:[{name:"alert",type:null}],returns:null},{name:"showAlert",docblock:null,modifiers:[],params:[{name:"alert",type:null}],returns:null},{name:"closeAlert",docblock:null,modifiers:[],params:[{name:"alert",type:null}],returns:null}],displayName:"AlertProvider",props:{children:{type:{name:"node"},required:!0,description:""}}};var v=n("./node_modules/classnames/index.js"),O=n.n(v);n("./src/components/AlertStack/Alert.css");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,_(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.context.showAlert(e.props.alert)},0),setTimeout(function(){return e.context.closeAlert(e.props.alert)},"success"===this.props.alert.type?5e3:7e3)}},{key:"render",value:function(){var e=this,t=this.props.alert;return o.a.createElement("div",{className:O()("alert-wrapper",{"is-shown":t.shown,"is-closed":t.closed})},o.a.createElement("div",{className:O()("alert","is-"+t.type)},o.a.createElement("button",{className:"delete",onClick:function(){return e.context.closeAlert(t)}}),o.a.createElement("div",{className:"alert-content"},t.message)))}}])&&w(n.prototype,i),c&&w(n,c),t}();A.contextType=h;var E=A;A.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{alert:{type:{name:"shape",value:{type:{name:"string",required:!0},message:{name:"node",required:!0}}},required:!0,description:""}}};n("./src/components/AlertStack/AlertStack.css");function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,T(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"alert-stack"},this.context.alerts.map(function(e){return o.a.createElement(E,{key:e.id,alert:e})}))}}])&&P(n.prototype,i),c&&P(n,c),t}();q.contextType=h;var B=q;q.__docgenInfo={description:"",methods:[],displayName:"AlertStack"};var C=n("./src/components/Button/index.js");function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return z});var z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=X(this,R(t).call(this,e))).layout=null,n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=I(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:t},o.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"alert"}},"Alert"),o.a.createElement(i.MDXTag,{name:"pre",components:t},o.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { AlertStack, AlertProvider } from 'components'\n")),o.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(c.e,{__position:0,__code:"<AlertProvider>\n  <AlertStack />\n  <div>\n    <b>Push alerts into the stack:</b>\n    <br />\n    {['primary', 'info', 'success', 'warning', 'error'].map(type => (\n      <Button\n        key={type}\n        primary\n        onClick={() =>\n          AlertProvider.pushAlert({\n            type,\n            message: 'This is an alert of type: ' + type,\n          })\n        }\n      >\n        {type}\n      </Button>\n    ))}\n  </div>\n</AlertProvider>",__scope:{props:this?this.props:n,AlertProvider:b,AlertStack:B,Button:C.a}},o.a.createElement(b,null,o.a.createElement(B,null),o.a.createElement("div",null,o.a.createElement("b",null,"Push alerts into the stack:"),o.a.createElement("br",null),["primary","info","success","warning","error"].map(function(e){return o.a.createElement(C.a,{key:e,primary:!0,onClick:function(){return b.pushAlert({type:e,message:"This is an alert of type: "+e})}},e)})))))}}])&&M(n.prototype,r),a&&M(n,a),t}();z.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/AlertStack/AlertStack.css":function(e,t,n){},"./src/components/Button/Button.css":function(e,t,n){},"./src/components/Button/Button.jsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./node_modules/classnames/index.js"),c=n.n(i);n("./src/components/Button/Button.css");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,p(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.icon,i=t.label,a=t.children,s=(t.primary,t.secondary,t.link,t.round,t.active,t.raised,t.fixed,t.loading),l=u(t,["className","icon","label","children","primary","secondary","link","round","active","raised","fixed","loading"]),p=["primary","secondary","link","round","active","raised","fixed"].reduce(function(t,n){return e.props[n]&&(t[n]=e.props[n]?"true":"false"),t},{});return s&&(p.disabled=!0),o.a.createElement("button",Object.assign({className:c()("btn",n)},p,l),s?o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})):o.a.createElement(o.a.Fragment,null,r&&o.a.createElement("i",{className:"material-icons"},r),i&&o.a.createElement("span",null,i),a&&o.a.createElement("span",null,a)))}}])&&s(n.prototype,i),a&&s(n,a),t}();t.a=y,y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{type:{name:"string"},required:!1,description:""},icon:{type:{name:"string"},required:!1,description:""},label:{type:{name:"node"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},primary:{type:{name:"bool"},required:!1,description:""},secondary:{type:{name:"bool"},required:!1,description:""},link:{type:{name:"bool"},required:!1,description:""},round:{type:{name:"bool"},required:!1,description:""},active:{type:{name:"bool"},required:!1,description:""},raised:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},fixed:{type:{name:"bool"},required:!1,description:""}}}},"./src/components/Button/index.js":function(e,t,n){"use strict";var r=n("./src/components/Button/Button.jsx");n.d(t,"a",function(){return r.a})}}]);
//# sourceMappingURL=src-components-alert-stack-alert.cc2635498b0b69abcc30.js.map