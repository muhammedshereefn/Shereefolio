!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dffa8898-2e45-4484-98dd-13378c02d2b0",e._sentryDebugIdIdentifier="sentry-dbid-dffa8898-2e45-4484-98dd-13378c02d2b0")}catch(e){}}();var _sentryModuleMetadataGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_sentryModuleMetadataGlobal._sentryModuleMetadata=_sentryModuleMetadataGlobal._sentryModuleMetadata||{},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new Error).stack]=Object.assign({},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new Error).stack],{"_sentryBundlerPluginAppKey:tidio-sentry-widget-app-key":!0});var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"1.269.0"},function(){var e={2655:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});class o{constructor(){this.eventPrefix="tidioChat-",this.readyEventWasFired=!1,this.queue=[],this.popUpOpen=this.open,this.popUpHide=this.close,this.chatDisplay=this.display,this.setColorPallete=this.setColorPalette}on(e,t){"ready"===e&&this.readyEventWasFired?t():document.addEventListener(`${this.eventPrefix}${e}`,(e=>{t(e.data)}),!1)}trigger(e,t){if("ready"===e&&this.readyEventWasFired)return!1;try{const n=document.createEvent("Event");if(n.initEvent(`${this.eventPrefix}${e}`,!0,!0),n.data=t,document.dispatchEvent(n),"ready"===e){if(this.readyEventWasFired)return!1;this._flushAllFromQueue(),this.readyEventWasFired=!0}}catch(e){return!1}return!0}method(e,t){return"ready"===e&&"function"==typeof t?(this.on("ready",t),!0):(this[e]&&this[e](t),!0)}_addToQueue(e,t=null){this.queue.push({method:e,args:t})}_flushAllFromQueue(){for(;0!==this.queue.length;){const{method:e,args:t}=this.queue.shift();this[e].apply(null,t)}}open(){this._addToQueue("open")}close(){this._addToQueue("close")}display(e=!0){this._addToQueue("display",[e])}show(){this._addToQueue("show")}hide(){this._addToQueue("hide")}setColorPalette(e){this._addToQueue("setColorPalette",[e])}track(e,t,n){void 0===e&&(e="track"),void 0===t&&(t={}),void 0===n&&(n=()=>{}),this._addToQueue("track",[e,t,n])}messageFromVisitor(e){this._addToQueue("messageFromVisitor",[e])}messageFromOperator(e,t=!0){this._addToQueue("messageFromOperator",[e,t])}setVisitorData(e,t){this._addToQueue("setVisitorData",[e,t])}setContactProperties(e,t){this._addToQueue("setContactProperties",[e,t])}addVisitorTags(e,t){this._addToQueue("addVisitorTags",[e,t])}setFeatures(e={}){this._addToQueue("setFeatures",[e])}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.h=function(){return"90390cea79cf6cb7eb42"},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){const e=Date.now(),t="boolean"==typeof PRODUCTION_DEVELOPMENT_BUILD&&!0===PRODUCTION_DEVELOPMENT_BUILD,o=t?"https://widget-v4.tidiochat.com//dist/":"https://widget-v4.tidiochat.com/",d=function(){var e=[],t=!1,n=!1;function o(){if(!t){t=!0;for(var n=0;n<e.length;n+=1)e[n].fn.call(window,e[n].ctx);e=[]}}function d(){"complete"===document.readyState&&o()}return function(i,a){if("function"!=typeof i)throw new TypeError("callback for docReady(fn) must be a function");return t?(setTimeout((function(){i(a)}),1),!1):(e.push({fn:i,ctx:a}),"complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(o,1):n||(document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",o)),n=!0),!0)}}();function i(e){!function(e,t){const n=e.contentWindow.document,o=n.createElement("script");o.src=t,o.async=!0,n.body.appendChild(o)}(e,`${o.replace(/\/$/,"")}/1_269_0/static/js/widget.${n.h()}.js`)}const a=n(2655).Z;window.tidioChatApi=new a,d((()=>setTimeout((()=>{var d=window.document.getElementById("tidio-chat-code"),a=/MSIE|Trident/.test(window.navigator.userAgent);if(d||a)return!1;!function(e,t,n){const o=t.createElement("iframe");let d=!1;o.onload=function(){d||(n(o),d=!0)},o.id=e,o.style.display="none",o.title="Tidio Chat code",t.body.appendChild(o),setTimeout((function(){d||(n(o),d=!0)}),1e3)}("tidio-chat-code",window.document,(d=>{t&&window.__REDUX_DEVTOOLS_EXTENSION__&&(d.contentWindow.__REDUX_DEVTOOLS_EXTENSION__=window.__REDUX_DEVTOOLS_EXTENSION__,d.contentWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__),function(e){let t="https://widget-v4.tidiochat.com/static/js/WidgetIframe.js";t=`${o}1_269_0/static/js/chunk-WidgetIframe-${n.h()}.js`;const d=e.createElement("link");d.rel="preload",d.as="script",d.href=t,e.head.appendChild(d)}(d.contentWindow.document),function(e){const t=e.createElement("link");t.rel="preload",t.href="https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2",t.as="font",t.type="font/woff2",t.crossOrigin="",e.head.appendChild(t)}(d.contentWindow.document),function(e){const t=`${o}/tururu.mp3`,n=e.createElement("audio");n.preload="metadata",n.src=t,e.head.appendChild(n)}(d.contentWindow.document),function(e){const t=e.createElement("link");t.rel="preconnect",t.href="https://socket.tidio.co:443",e.head.appendChild(t)}(d.contentWindow.document),function(e){const t=e.createElement("link");t.rel="preconnect",t.href="https://cdnjs.cloudflare.com",e.head.appendChild(t)}(d.contentWindow.document),d.contentWindow.tidioChatApi=window.tidioChatApi,d.contentWindow.FIRST_POSSIBLE_JS_EXECUTION=e,"requestIdleCallback"in window?window.requestIdleCallback((function(){i(d)}),{timeout:5e3}):setTimeout((function(){i(d)}),0)}))}),0)))}()}();