!function(){var t={2220:function(t,e,n){var r=n(2569),o=n(4354),i=n(3700),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},3467:function(t,e,n){var r=n(2569),o=n(4354),i=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},2834:function(t,e,n){var r=n(2931),o=n(9062),i=n(378),s=r("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},902:function(t,e,n){"use strict";var r=n(9075).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},1421:function(t,e,n){var r=n(2569),o=n(1651),i=r.String,s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},4041:function(t,e,n){var r=n(7830),o=n(7841),i=n(6095),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c),l=o(s,u);if(t&&n!=n){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},8250:function(t,e,n){var r=n(1540),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},3114:function(t,e,n){var r=n(2569),o=n(2102),i=n(4354),s=n(8250),a=n(2931)("toStringTag"),c=r.Object,u="Arguments"==s(function(){return arguments}());t.exports=o?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},8778:function(t,e,n){var r=n(5320),o=n(6830),i=n(892),s=n(378);t.exports=function(t,e,n){for(var a=o(e),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(t,f)||n&&r(n,f)||c(t,f,u(e,f))}}},5031:function(t,e,n){var r=n(2112);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4170:function(t,e,n){"use strict";var r=n(5756).IteratorPrototype,o=n(9062),i=n(3233),s=n(2087),a=n(9259),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=o(r,{next:i(+!u,n)}),s(t,l,!1,!0),a[l]=c,t}},7632:function(t,e,n){var r=n(1738),o=n(378),i=n(3233);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},3233:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},1084:function(t,e,n){"use strict";var r=n(7641),o=n(7425),i=n(1274),s=n(34),a=n(4354),c=n(4170),u=n(9299),l=n(4001),f=n(2087),p=n(7632),h=n(8946),g=n(2931),d=n(9259),v=n(5756),b=s.PROPER,y=s.CONFIGURABLE,w=v.IteratorPrototype,x=v.BUGGY_SAFARI_ITERATORS,m=g("iterator"),S="keys",O="values",E="entries",j=function(){return this};t.exports=function(t,e,n,s,g,v,P){c(n,e,s);var k,I,A,L=function(t){if(t===g&&R)return R;if(!x&&t in C)return C[t];switch(t){case S:case O:case E:return function(){return new n(this,t)}}return function(){return new n(this)}},B=e+" Iterator",T=!1,C=t.prototype,N=C[m]||C["@@iterator"]||g&&C[g],R=!x&&N||L(g),F="Array"==e&&C.entries||N;if(F&&(k=u(F.call(new t)))!==Object.prototype&&k.next&&(i||u(k)===w||(l?l(k,w):a(k[m])||h(k,m,j)),f(k,B,!0,!0),i&&(d[B]=j)),b&&g==O&&N&&N.name!==O&&(!i&&y?p(C,"name",O):(T=!0,R=function(){return o(N,this)})),g)if(I={values:L(O),keys:v?R:L(S),entries:L(E)},P)for(A in I)(x||T||!(A in C))&&h(C,A,I[A]);else r({target:e,proto:!0,forced:x||T},I);return i&&!P||C[m]===R||h(C,m,R,{name:g}),d[e]=R,I}},1738:function(t,e,n){var r=n(2112);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7934:function(t,e,n){var r=n(2569),o=n(1651),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},7921:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},6583:function(t,e,n){var r=n(7934)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},2831:function(t,e,n){var r=n(2430);t.exports=r("navigator","userAgent")||""},9318:function(t,e,n){var r,o,i=n(2569),s=n(2831),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(o=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},4328:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7641:function(t,e,n){var r=n(2569),o=n(892).f,i=n(7632),s=n(8946),a=n(2024),c=n(8778),u=n(8787);t.exports=function(t,e){var n,l,f,p,h,g=t.target,d=t.global,v=t.stat;if(n=d?r:v?r[g]||a(g,{}):(r[g]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=o(n,l))&&h.value:n[l],!u(d?l:g+(v?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),s(n,l,p,t)}}},2112:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},802:function(t,e,n){"use strict";n(2966);var r=n(1540),o=n(8946),i=n(6226),s=n(2112),a=n(2931),c=n(7632),u=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,f){var p=a(t),h=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h&&!s((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!h||!g||n){var d=r(/./[p]),v=e(p,""[t],(function(t,e,n,o,s){var a=r(t),c=e.exec;return c===i||c===l.exec?h&&!s?{done:!0,value:d(e,n,o)}:{done:!0,value:a(n,e,o)}:{done:!1}}));o(String.prototype,t,v[0]),o(l,p,v[1])}f&&c(l[p],"sham",!0)}},2976:function(t,e,n){var r=n(9581),o=Function.prototype,i=o.apply,s=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},9581:function(t,e,n){var r=n(2112);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},7425:function(t,e,n){var r=n(9581),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},34:function(t,e,n){var r=n(1738),o=n(5320),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1540:function(t,e,n){var r=n(9581),o=Function.prototype,i=o.bind,s=o.call,a=r&&i.bind(s,s);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},2430:function(t,e,n){var r=n(2569),o=n(4354),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},5324:function(t,e,n){var r=n(2220);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},5677:function(t,e,n){var r=n(1540),o=n(6416),i=Math.floor,s=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,f,p){var h=n+t.length,g=r.length,d=l;return void 0!==f&&(f=o(f),d=u),a(p,d,(function(o,a){var u;switch(s(a,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,h);case"<":u=f[c(a,1,-1)];break;default:var l=+a;if(0===l)return o;if(l>g){var p=i(l/10);return 0===p?o:p<=g?void 0===r[p-1]?s(a,1):r[p-1]+s(a,1):o}u=r[l-1]}return void 0===u?"":u}))}},2569:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},5320:function(t,e,n){var r=n(1540),o=n(6416),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},9012:function(t){t.exports={}},99:function(t,e,n){var r=n(2430);t.exports=r("document","documentElement")},8232:function(t,e,n){var r=n(1738),o=n(2112),i=n(7934);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},6674:function(t,e,n){var r=n(2569),o=n(1540),i=n(2112),s=n(8250),a=r.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},5193:function(t,e,n){var r=n(1540),o=n(4354),i=n(7039),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},3500:function(t,e,n){var r,o,i,s=n(5965),a=n(2569),c=n(1540),u=n(1651),l=n(7632),f=n(5320),p=n(7039),h=n(9097),g=n(9012),d="Object already initialized",v=a.TypeError,b=a.WeakMap;if(s||p.state){var y=p.state||(p.state=new b),w=c(y.get),x=c(y.has),m=c(y.set);r=function(t,e){if(x(y,t))throw new v(d);return e.facade=t,m(y,t,e),e},o=function(t){return w(y,t)||{}},i=function(t){return x(y,t)}}else{var S=h("state");g[S]=!0,r=function(t,e){if(f(t,S))throw new v(d);return e.facade=t,l(t,S,e),e},o=function(t){return f(t,S)?t[S]:{}},i=function(t){return f(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}}}},4354:function(t){t.exports=function(t){return"function"==typeof t}},8787:function(t,e,n){var r=n(2112),o=n(4354),i=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(o(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},1651:function(t,e,n){var r=n(4354);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1274:function(t){t.exports=!1},8937:function(t,e,n){var r=n(2569),o=n(2430),i=n(4354),s=n(7652),a=n(7374),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,c(t))}},5756:function(t,e,n){"use strict";var r,o,i,s=n(2112),a=n(4354),c=n(9062),u=n(9299),l=n(8946),f=n(2931),p=n(1274),h=f("iterator"),g=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):g=!0),null==r||s((function(){var t={};return r[h].call(t)!==t}))?r={}:p&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},9259:function(t){t.exports={}},6095:function(t,e,n){var r=n(9309);t.exports=function(t){return r(t.length)}},5598:function(t,e,n){var r=n(9318),o=n(2112);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5965:function(t,e,n){var r=n(2569),o=n(4354),i=n(5193),s=r.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},9062:function(t,e,n){var r,o=n(1421),i=n(3116),s=n(4328),a=n(9012),c=n(99),u=n(7934),l=n(9097),f=l("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"</"+"script>"},g=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;d="undefined"!=typeof document?document.domain&&r?g(r):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F):g(r);for(var n=s.length;n--;)delete d.prototype[s[n]];return d()};a[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=d(),void 0===e?n:i.f(n,e)}},3116:function(t,e,n){var r=n(1738),o=n(5734),i=n(378),s=n(1421),a=n(7830),c=n(2551);e.f=r&&!o?Object.defineProperties:function(t,e){s(t);for(var n,r=a(e),o=c(e),u=o.length,l=0;u>l;)i.f(t,n=o[l++],r[n]);return t}},378:function(t,e,n){var r=n(2569),o=n(1738),i=n(8232),s=n(5734),a=n(1421),c=n(7411),u=r.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",h="configurable",g="writable";e.f=o?s?function(t,e,n){if(a(t),e=c(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&g in n&&!n.writable){var r=f(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:h in n?n.configurable:r.configurable,enumerable:p in n?n.enumerable:r.enumerable,writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),i)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},892:function(t,e,n){var r=n(1738),o=n(7425),i=n(7079),s=n(3233),a=n(7830),c=n(7411),u=n(5320),l=n(8232),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e),l)try{return f(t,e)}catch(t){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},9704:function(t,e,n){var r=n(9313),o=n(4328).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},419:function(t,e){e.f=Object.getOwnPropertySymbols},9299:function(t,e,n){var r=n(2569),o=n(5320),i=n(4354),s=n(6416),a=n(9097),c=n(5031),u=a("IE_PROTO"),l=r.Object,f=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=s(t);if(o(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof l?f:null}},7652:function(t,e,n){var r=n(1540);t.exports=r({}.isPrototypeOf)},9313:function(t,e,n){var r=n(1540),o=n(5320),i=n(7830),s=n(4041).indexOf,a=n(9012),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);for(;e.length>u;)o(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},2551:function(t,e,n){var r=n(9313),o=n(4328);t.exports=Object.keys||function(t){return r(t,o)}},7079:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},4001:function(t,e,n){var r=n(1540),o=n(1421),i=n(3467);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},6964:function(t,e,n){var r=n(2569),o=n(7425),i=n(4354),s=n(1651),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!s(r=o(n,t)))return r;if(i(n=t.valueOf)&&!s(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!s(r=o(n,t)))return r;throw a("Can't convert object to primitive value")}},6830:function(t,e,n){var r=n(2430),o=n(1540),i=n(9704),s=n(419),a=n(1421),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=s.f;return n?c(e,n(t)):e}},8946:function(t,e,n){var r=n(2569),o=n(4354),i=n(5320),s=n(7632),a=n(2024),c=n(5193),u=n(3500),l=n(34).CONFIGURABLE,f=u.get,p=u.enforce,h=String(String).split("String");(t.exports=function(t,e,n,c){var u,f=!!c&&!!c.unsafe,g=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:e;o(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==v)&&s(n,"name",v),(u=p(n)).source||(u.source=h.join("string"==typeof v?v:""))),t!==r?(f?!d&&t[e]&&(g=!0):delete t[e],g?t[e]=n:s(t,e,n)):g?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},2216:function(t,e,n){var r=n(2569),o=n(7425),i=n(1421),s=n(4354),a=n(8250),c=n(6226),u=r.TypeError;t.exports=function(t,e){var n=t.exec;if(s(n)){var r=o(n,t,e);return null!==r&&i(r),r}if("RegExp"===a(t))return o(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},6226:function(t,e,n){"use strict";var r,o,i=n(7425),s=n(1540),a=n(4818),c=n(1174),u=n(5661),l=n(9944),f=n(9062),p=n(3500).get,h=n(7134),g=n(1008),d=l("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,b=v,y=s("".charAt),w=s("".indexOf),x=s("".replace),m=s("".slice),S=(o=/b*/g,i(v,r=/a/,"a"),i(v,o,"a"),0!==r.lastIndex||0!==o.lastIndex),O=u.BROKEN_CARET,E=void 0!==/()??/.exec("")[1];(S||E||O||h||g)&&(b=function(t){var e,n,r,o,s,u,l,h=this,g=p(h),j=a(t),P=g.raw;if(P)return P.lastIndex=h.lastIndex,e=i(b,P,j),h.lastIndex=P.lastIndex,e;var k=g.groups,I=O&&h.sticky,A=i(c,h),L=h.source,B=0,T=j;if(I&&(A=x(A,"y",""),-1===w(A,"g")&&(A+="g"),T=m(j,h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==y(j,h.lastIndex-1))&&(L="(?: "+L+")",T=" "+T,B++),n=new RegExp("^(?:"+L+")",A)),E&&(n=new RegExp("^"+L+"$(?!\\s)",A)),S&&(r=h.lastIndex),o=i(v,I?n:h,T),I?o?(o.input=m(o.input,B),o[0]=m(o[0],B),o.index=h.lastIndex,h.lastIndex+=o[0].length):h.lastIndex=0:S&&o&&(h.lastIndex=h.global?o.index+o[0].length:r),E&&o&&o.length>1&&i(d,o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&k)for(o.groups=u=f(null),s=0;s<k.length;s++)u[(l=k[s])[0]]=o[l[1]];return o}),t.exports=b},1174:function(t,e,n){"use strict";var r=n(1421);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},5661:function(t,e,n){var r=n(2112),o=n(2569).RegExp,i=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),s=i||r((function(){return!o("a","y").sticky})),a=i||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:a,MISSED_STICKY:s,UNSUPPORTED_Y:i}},7134:function(t,e,n){var r=n(2112),o=n(2569).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},1008:function(t,e,n){var r=n(2112),o=n(2569).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1196:function(t,e,n){var r=n(2569).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},2024:function(t,e,n){var r=n(2569),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},2087:function(t,e,n){var r=n(378).f,o=n(5320),i=n(2931)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:e})}},9097:function(t,e,n){var r=n(9944),o=n(9225),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},7039:function(t,e,n){var r=n(2569),o=n(2024),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},9944:function(t,e,n){var r=n(1274),o=n(7039);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},9075:function(t,e,n){var r=n(1540),o=n(1859),i=n(4818),s=n(1196),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,f=i(s(e)),p=o(n),h=f.length;return p<0||p>=h?t?"":void 0:(r=c(f,p))<55296||r>56319||p+1===h||(l=c(f,p+1))<56320||l>57343?t?a(f,p):r:t?u(f,p,p+2):l-56320+(r-55296<<10)+65536}};t.exports={codeAt:l(!1),charAt:l(!0)}},7841:function(t,e,n){var r=n(1859),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},7830:function(t,e,n){var r=n(6674),o=n(1196);t.exports=function(t){return r(o(t))}},1859:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},9309:function(t,e,n){var r=n(1859),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},6416:function(t,e,n){var r=n(2569),o=n(1196),i=r.Object;t.exports=function(t){return i(o(t))}},38:function(t,e,n){var r=n(2569),o=n(7425),i=n(1651),s=n(8937),a=n(5324),c=n(6964),u=n(2931),l=r.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,r=a(t,f);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},7411:function(t,e,n){var r=n(38),o=n(8937);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},2102:function(t,e,n){var r={};r[n(2931)("toStringTag")]="z",t.exports="[object z]"===String(r)},4818:function(t,e,n){var r=n(2569),o=n(3114),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},3700:function(t,e,n){var r=n(2569).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9225:function(t,e,n){var r=n(1540),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},7374:function(t,e,n){var r=n(5598);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5734:function(t,e,n){var r=n(1738),o=n(2112);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2931:function(t,e,n){var r=n(2569),o=n(9944),i=n(5320),s=n(9225),a=n(5598),c=n(7374),u=o("wks"),l=r.Symbol,f=l&&l.for,p=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&f?f(e):p(e)}return u[t]}},5006:function(t,e,n){"use strict";var r=n(7830),o=n(2834),i=n(9259),s=n(3500),a=n(378).f,c=n(1084),u=n(1274),l=n(1738),f="Array Iterator",p=s.set,h=s.getterFor(f);t.exports=c(Array,"Array",(function(t,e){p(this,{type:f,target:r(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var g=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!u&&l&&"values"!==g.name)try{a(g,"name",{value:"values"})}catch(t){}},2966:function(t,e,n){"use strict";var r=n(7641),o=n(6226);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},7786:function(t,e,n){"use strict";var r=n(2976),o=n(7425),i=n(1540),s=n(802),a=n(2112),c=n(1421),u=n(4354),l=n(1859),f=n(9309),p=n(4818),h=n(1196),g=n(902),d=n(5324),v=n(5677),b=n(2216),y=n(2931)("replace"),w=Math.max,x=Math.min,m=i([].concat),S=i([].push),O=i("".indexOf),E=i("".slice),j="$0"==="a".replace(/./,"$0"),P=!!/./[y]&&""===/./[y]("a","$0");s("replace",(function(t,e,n){var i=P?"$":"$0";return[function(t,n){var r=h(this),i=null==t?void 0:d(t,y);return i?o(i,t,r,n):o(e,p(r),t,n)},function(t,o){var s=c(this),a=p(t);if("string"==typeof o&&-1===O(o,i)&&-1===O(o,"$<")){var h=n(e,s,a,o);if(h.done)return h.value}var d=u(o);d||(o=p(o));var y=s.global;if(y){var j=s.unicode;s.lastIndex=0}for(var P=[];;){var k=b(s,a);if(null===k)break;if(S(P,k),!y)break;""===p(k[0])&&(s.lastIndex=g(a,f(s.lastIndex),j))}for(var I,A="",L=0,B=0;B<P.length;B++){for(var T=p((k=P[B])[0]),C=w(x(l(k.index),a.length),0),N=[],R=1;R<k.length;R++)S(N,void 0===(I=k[R])?I:String(I));var F=k.groups;if(d){var M=m([T],N,C,a);void 0!==F&&S(M,F);var U=p(r(o,void 0,M))}else U=v(T,a,C,N,F,o);C>=L&&(A+=E(a,L,C)+U,L=C+T.length)}return A+E(a,L)}]}),!!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!j||P)},8669:function(t,e,n){var r=n(2569),o=n(7921),i=n(6583),s=n(5006),a=n(7632),c=n(2931),u=c("iterator"),l=c("toStringTag"),f=s.values,p=function(t,e){if(t){if(t[u]!==f)try{a(t,u,f)}catch(e){t[u]=f}if(t[l]||a(t,l,e),o[e])for(var n in s)if(t[n]!==s[n])try{a(t,n,s[n])}catch(e){t[n]=s[n]}}};for(var h in o)p(r[h]&&r[h].prototype,h);p(i,"DOMTokenList")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(8669);class t{constructor(t){this.snowboard=t}dependencies(){return[]}listens(){return{}}destructor(){this.detach(),delete this.snowboard}}class e extends t{}class r{constructor(t,n,r){this.name=t,this.snowboard=n,this.instance=r,this.instances=[],this.singleton=r.prototype instanceof e,this.mocks={},this.originalFunctions={}}hasMethod(t){return!this.isFunction()&&"function"==typeof this.instance.prototype[t]}callMethod(){if(this.isFunction())return null;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];const r=e,o=r.shift();return this.instance.prototype[o](r)}getInstance(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(this.isFunction())return this.instance(...n);if(!this.dependenciesFulfilled()){const t=this.getDependencies().filter((t=>!this.snowboard.getPluginNames().includes(t)));throw new Error('The "'.concat(this.name,'" plugin requires the following plugins: ').concat(t.join(", ")))}if(this.isSingleton())return 0===this.instances.length&&this.initialiseSingleton(),Object.keys(this.mocks).length>0&&(Object.entries(this.originalFunctions).forEach((t=>{const[e,n]=t;this.instances[0][e]=n})),Object.entries(this.mocks).forEach((e=>{const[n,r]=e;this.instances[0][n]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r(t,...n)}}))),this.instances[0];Object.keys(this.mocks).length>0&&(Object.entries(this.originalFunctions).forEach((t=>{const[e,n]=t;this.instance.prototype[e]=n})),Object.entries(this.mocks).forEach((e=>{const[n,r]=e;this.instance.prototype[n]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r(t,...n)}})));const o=new this.instance(this.snowboard,...n);return o.detach=()=>this.instances.splice(this.instances.indexOf(o),1),this.instances.push(o),o}getInstances(){return this.isFunction()?[]:this.instances}isFunction(){return"function"==typeof this.instance&&this.instance.prototype instanceof t==!1}isSingleton(){return this.instance.prototype instanceof e==!0}initialiseSingleton(){if(!this.isSingleton())return;const t=new this.instance(this.snowboard);t.detach=()=>this.instances.splice(this.instances.indexOf(t),1),this.instances.push(t)}getDependencies(){return this.isFunction()||"function"!=typeof this.instance.prototype.dependencies?[]:this.instance.prototype.dependencies().map((t=>t.toLowerCase()))}dependenciesFulfilled(){const t=this.getDependencies();let e=!0;return t.forEach((t=>{this.snowboard.hasPlugin(t)||(e=!1)})),e}mock(t,e){var n=this;if(!this.isFunction()){if(!this.instance.prototype[t])throw new Error('Function "'.concat(t,'" does not exist and cannot be mocked'));this.mocks[t]=e,this.originalFunctions[t]=this.instance.prototype[t],this.isSingleton()&&0===this.instances.length&&(this.initialiseSingleton(),this.instances[0][t]=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e(n,...r)})}}unmock(t){this.isFunction()||this.mocks[t]&&(this.isSingleton()&&(this.instances[0][t]=this.originalFunctions[t]),delete this.mocks[t],delete this.originalFunctions[t])}}
/*! js-cookie v3.0.1 | MIT */
function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var i=function t(e,n){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=o({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in i)i[a]&&(s+="; "+a,!0!==i[a]&&(s+="="+i[a].split(";")[0]));return document.cookie=t+"="+e.write(r,t)+s}}return Object.create({set:r,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),s=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(r[a]=e.read(s,a),t===a)break}catch(t){}}return t?r[t]:r}},remove:function(t,e){r(t,"",o({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,o({},this.attributes,e))},withConverter:function(e){return t(o({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),s=i;function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class l extends e{constructor(t){super(t),this.defaults={expires:null,path:"/",domain:null,secure:!1,sameSite:"Lax"}}setDefaults(t){if("object"!=typeof t)throw new Error("Cookie defaults must be provided as an object");Object.entries(t).forEach((t=>{const[e,n]=t;void 0!==this.defaults[e]&&(this.defaults[e]=n)}))}getDefaults(){const t={};return Object.entries(this.defaults).forEach((e=>{const[n,r]=e;null!==this.defaults[n]&&(t[n]=r)})),t}get(t){if(void 0===t){const t=s.get();return Object.entries(t).forEach((e=>{const[n,r]=e;this.snowboard.globalEvent("cookie.get",n,r,(e=>{t[n]=e}))})),t}let e=s.get(t);return this.snowboard.globalEvent("cookie.get",t,e,(t=>{e=t})),e}set(t,e,n){let r=e;return this.snowboard.globalEvent("cookie.set",t,e,(t=>{r=t})),s.set(t,r,c(c({},this.getDefaults()),n))}remove(t,e){s.remove(t,c(c({},this.getDefaults()),e))}}class f extends e{constructor(t){super(t),window.wnJSON=t=>this.parse(t),window.ocJSON=window.wnJSON}parse(t){const e=this.parseString(t);return JSON.parse(e)}parseString(t){let e=t.trim();if(!e.length)throw new Error("Broken JSON object.");let n="",r=null,o=null,i="";for(;e&&","===e[0];)e=e.substr(1);if('"'===e[0]||"'"===e[0]){if(e[e.length-1]!==e[0])throw new Error("Invalid string JSON object.");i='"';for(let t=1;t<e.length;t+=1)if("\\"===e[t])"'"===e[t+1]||(i+=e[t]),i+=e[t+1],t+=1;else{if(e[t]===e[0])return i+='"',i;'"'===e[t]?i+='\\"':i+=e[t]}throw new Error("Invalid string JSON object.")}if("true"===e||"false"===e)return e;if("null"===e)return"null";const s=parseFloat(e);if(!Number.isNaN(s))return s.toString();if("{"===e[0]){r="needKey",o=null,n="{";for(let t=1;t<e.length;t+=1)if(!this.isBlankChar(e[t]))if("needKey"!==r||'"'!==e[t]&&"'"!==e[t]){if("needKey"===r&&this.canBeKeyHead(e[t]))o=this.parseKey(e,t),n+='"',n+=o,n+='"',t+=o.length-1,r="afterKey";else if("afterKey"===r&&":"===e[t])n+=":",r=":";else if(":"===r)i=this.getBody(e,t),t=t+i.originLength-1,n+=this.parseString(i.body),r="afterBody";else if("afterBody"===r||"needKey"===r){let o=t;for(;","===e[o]||this.isBlankChar(e[o]);)o+=1;if("}"===e[o]&&o===e.length-1){for(;","===n[n.length-1];)n=n.substr(0,n.length-1);return n+="}",n}o!==t&&"{"!==n&&(n+=",",r="needKey",t=o-1)}}else o=this.parseKey(e,t+1,e[t]),n+='"'.concat(o,'"'),t+=o.length,t+=1,r="afterKey";throw new Error("Broken JSON object near ".concat(n))}if("["===e[0]){n="[",r="needBody";for(let t=1;t<e.length;t+=1)if(" "!==e[t]&&"\n"!==e[t]&&"\t"!==e[t])if("needBody"===r){if(","===e[t]){n+="null,";continue}if("]"===e[t]&&t===e.length-1)return","===n[n.length-1]&&(n=n.substr(0,n.length-1)),n+="]",n;i=this.getBody(e,t),t=t+i.originLength-1,n+=this.parseString(i.body),r="afterBody"}else if("afterBody"===r)if(","===e[t])for(n+=",",r="needBody";","===e[t+1]||this.isBlankChar(e[t+1]);)","===e[t+1]&&(n+="null,"),t+=1;else if("]"===e[t]&&t===e.length-1)return n+="]",n;throw new Error("Broken JSON array near ".concat(n))}return""}getBody(t,e){let n="";if('"'===t[e]||"'"===t[e]){n=t[e];for(let r=e+1;r<t.length;r+=1)if("\\"===t[r])n+=t[r],r+1<t.length&&(n+=t[r+1]),r+=1;else{if(t[r]===t[e])return n+=t[e],{originLength:n.length,body:n};n+=t[r]}throw new Error("Broken JSON string body near ".concat(n))}if("t"===t[e]){if(t.indexOf("true",e)===e)return{originLength:"true".length,body:"true"};throw new Error("Broken JSON boolean body near ".concat(t.substr(0,e+10)))}if("f"===t[e]){if(t.indexOf("f",e)===e)return{originLength:"false".length,body:"false"};throw new Error("Broken JSON boolean body near ".concat(t.substr(0,e+10)))}if("n"===t[e]){if(t.indexOf("null",e)===e)return{originLength:"null".length,body:"null"};throw new Error("Broken JSON boolean body near ".concat(t.substr(0,e+10)))}if("-"===t[e]||"+"===t[e]||"."===t[e]||t[e]>="0"&&t[e]<="9"){n="";for(let r=e;r<t.length;r+=1){if(!("-"===t[r]||"+"===t[r]||"."===t[r]||t[r]>="0"&&t[r]<="9"))return{originLength:n.length,body:n};n+=t[r]}throw new Error("Broken JSON number body near ".concat(n))}if("{"===t[e]||"["===t[e]){const r=[t[e]];n=t[e];for(let o=e+1;o<t.length;o+=1){if(n+=t[o],"\\"===t[o])o+1<t.length&&(n+=t[o+1]),o+=1;else if('"'===t[o])'"'===r[r.length-1]?r.pop():"'"!==r[r.length-1]&&r.push(t[o]);else if("'"===t[o])"'"===r[r.length-1]?r.pop():'"'!==r[r.length-1]&&r.push(t[o]);else if('"'!==r[r.length-1]&&"'"!==r[r.length-1])if("{"===t[o])r.push("{");else if("}"===t[o]){if("{"!==r[r.length-1])throw new Error("Broken JSON ".concat("{"===t[e]?"object":"array"," body near ").concat(n));r.pop()}else if("["===t[o])r.push("[");else if("]"===t[o]){if("["!==r[r.length-1])throw new Error("Broken JSON ".concat("{"===t[e]?"object":"array"," body near ").concat(n));r.pop()}if(!r.length)return{originLength:o-e,body:n}}throw new Error("Broken JSON ".concat("{"===t[e]?"object":"array"," body near ").concat(n))}throw new Error("Broken JSON body near ".concat(t.substr(e-5>=0?e-5:0,50)))}parseKey(t,e,n){let r="";for(let o=e;o<t.length;o+=1){if(n&&n===t[o])return r;if(!n&&(" "===t[o]||":"===t[o]))return r;r+=t[o],"\\"===t[o]&&o+1<t.length&&(r+=t[o+1],o+=1)}throw new Error("Broken JSON syntax near ".concat(r))}canBeKeyHead(t){return"\\"!==t[0]&&(t[0]>="a"&&t[0]<="z"||t[0]>="A"&&t[0]<="Z"||"_"===t[0]||(t[0]>="0"&&t[0]<="9"||("$"===t[0]||t.charCodeAt(0)>255)))}isBlankChar(t){return" "===t||"\n"===t||"\t"===t}}class p extends e{constructor(t){super(t),window.wnSanitize=t=>this.sanitize(t),window.ocSanitize=window.wnSanitize}sanitize(t,e){const n=(new DOMParser).parseFromString(t,"text/html"),r=void 0===e||"boolean"!=typeof e||e;return this.sanitizeNode(n.getRootNode()),r?n.body.innerHTML:n.innerHTML}sanitizeNode(t){if("SCRIPT"===t.tagName)return void t.remove();this.trimAttributes(t);Array.from(t.children).forEach((t=>{this.sanitizeNode(t)}))}trimAttributes(t){if(t.attributes)for(let e=0;e<t.attributes.length;e+=1){const n=t.attributes.item(e).name,r=t.attributes.item(e).value;0!==n.indexOf("on")&&0!==r.indexOf("javascript:")||t.removeAttribute(n)}}}n(7786);class h extends e{constructor(t){super(t),this.foundBaseUrl=null,this.baseUrl()}to(t){if(t.match(/[-a-z0-9_+:]+:\/\/[-a-z0-9@:%._+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-a-z0-9()@:%_+.~#?&//=]*)/i))return t;const e=t.replace(/^\/+/,"");return"".concat(this.baseUrl()).concat(e)}baseUrl(){if(null!==this.foundBaseUrl)return this.foundBaseUrl;if(null!==document.querySelector('script[data-module="snowboard-base"]'))return this.foundBaseUrl=this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.baseUrl),this.foundBaseUrl;if(null!==document.querySelector("base"))return this.foundBaseUrl=this.validateBaseUrl(document.querySelector("base").getAttribute("href")),this.foundBaseUrl;const t=[window.location.protocol,"//",window.location.host,"/"];return this.foundBaseUrl=t.join(),this.foundBaseUrl}validateBaseUrl(t){if(t.match(/https?:\/\/(www\.)?[-a-z0-9@:%._+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-a-z0-9()@:%_+.~#?&//=]*)/i))return"/"===t.substr(-1)?t:"".concat(t,"/");throw new Error("Invalid base URL detected")}}class g{constructor(t,e){this.debugEnabled="boolean"==typeof e&&!0===e,this.autoInitSingletons="boolean"==typeof t&&!1===t,this.plugins={},this.foundBaseUrl=null,this.attachAbstracts(),this.loadUtilities(),this.initialise(),this.debug("Snowboard framework initialised")}attachAbstracts(){this.PluginBase=t,this.Singleton=e}loadUtilities(){this.addPlugin("cookie",l),this.addPlugin("jsonParser",f),this.addPlugin("sanitizer",p),this.addPlugin("url",h)}initialise(){window.addEventListener("DOMContentLoaded",(()=>{this.autoInitSingletons&&this.initialiseSingletons(),this.globalEvent("ready")}))}initialiseSingletons(){Object.values(this.plugins).forEach((t=>{t.isSingleton()&&t.initialiseSingleton()}))}addPlugin(e,n){var o=this;const i=e.toLowerCase();if(this.hasPlugin(i))throw new Error('A plugin called "'.concat(e,'" is already registered.'));if("function"!=typeof n&&n instanceof t==!1)throw new Error("The provided plugin must extend the PluginBase class, or must be a callback function.");if(void 0!==this[e]||void 0!==this[i])throw new Error("The given name is already in use for a property or method of the Snowboard class.");this.plugins[i]=new r(i,this,n);const s=function(){return o.plugins[i].getInstance(...arguments)};this[e]=s,this[i]=s,this.debug('Plugin "'.concat(e,'" registered'))}removePlugin(t){const e=t.toLowerCase();this.hasPlugin(e)?(this.plugins[e].getInstances().forEach((t=>{t.destructor()})),delete this.plugins[e],delete this[e],this.debug('Plugin "'.concat(t,'" removed'))):this.debug('Plugin "'.concat(t,'" already removed'))}hasPlugin(t){const e=t.toLowerCase();return void 0!==this.plugins[e]}getPlugins(){return this.plugins}getPluginNames(){return Object.keys(this.plugins)}getPlugin(t){if(!this.hasPlugin(t))throw new Error('No plugin called "'.concat(t,'" has been registered.'));return this.plugins[t]}listensToEvent(t){const e=[];return Object.entries(this.plugins).forEach((n=>{const[r,o]=n;if(o.isFunction())return;if(!o.hasMethod("listens"))return;"string"==typeof o.callMethod("listens")[t]&&e.push(r)})),e}globalEvent(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.debug('Calling global event "'.concat(t,'"'));const o=this.listensToEvent(t);if(0===o.length)return this.debug('No listeners found for global event "'.concat(t,'"')),!0;this.debug('Listeners found for global event "'.concat(t,'": ').concat(o.join(", ")));let i=!1;return o.forEach((e=>{const r=this.getPlugin(e);if(r.isFunction())return;r.isSingleton()&&0===r.getInstances().length&&r.initialiseSingleton();const o=r.callMethod("listens")[t];r.getInstances().forEach((r=>{if(!i){if(!r[o])throw new Error('Missing "'.concat(o,'" method in "').concat(e,'" plugin'));!1===r[o](...n)&&(i=!0,this.debug('Global event "'.concat(t,'" cancelled by "').concat(e,'" plugin')))}}))})),!i}globalPromiseEvent(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.debug('Calling global promise event "'.concat(t,'"'));const o=this.listensToEvent(t);if(0===o.length)return this.debug('No listeners found for global promise event "'.concat(t,'"')),Promise.resolve();this.debug('Listeners found for global promise event "'.concat(t,'": ').concat(o.join(", ")));const i=[];return o.forEach((e=>{const r=this.getPlugin(e);if(r.isFunction())return;r.isSingleton()&&0===r.getInstances().length&&r.initialiseSingleton();const o=r.callMethod("listens")[t];r.getInstances().forEach((t=>{const e=t[o](...n);e instanceof Promise!=!1&&i.push(e)}))})),0===i.length?Promise.resolve():Promise.all(i)}debug(){if(this.debugEnabled){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.groupCollapsed("%c[Snowboard]","color: rgb(45, 167, 199); font-weight: normal;",...e),console.trace(),console.groupEnd()}}}(t=>{const e=new g(!0,!0);t.snowboard=e,t.Snowboard=e,t.SnowBoard=e})(window)}()}();