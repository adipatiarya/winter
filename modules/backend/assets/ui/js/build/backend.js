!function(){"use strict";class e extends Snowboard.Singleton{listens(){return{ready:"ready",ajaxFetchOptions:"ajaxFetchOptions",ajaxUpdateComplete:"ajaxUpdateComplete"}}ready(){window.jQuery&&(!function(e,t){void 0===t&&(t=["event"]);var n=e.startsWith("$")?function(){return window.$(document).trigger(e.slice(1),[].slice.call(arguments)[0].detail)}:function(){var n=arguments,a=t.reduce((function(e,t,a){return e[t]=[].slice.call(n)[a],e}),{});a.event.target.dispatchEvent(new CustomEvent("$"+e,{detail:a,bubbles:!0,cancelable:!0}))};e.startsWith("$")?document.addEventListener(e,n):window.$(document).on(e,n)}("render"),window.jQuery(document).trigger("render"),document.addEventListener("$render",(()=>{this.snowboard.globalEvent("render")})))}addPrefilter(){window.jQuery&&window.jQuery.ajaxPrefilter((e=>{this.hasToken()&&(e.headers||(e.headers={}),e.headers["X-CSRF-TOKEN"]=this.getToken())}))}ajaxFetchOptions(e){this.hasToken()&&(e.headers["X-CSRF-TOKEN"]=this.getToken())}ajaxUpdateComplete(){window.jQuery&&window.jQuery(document).trigger("render")}hasToken(){const e=document.querySelector('meta[name="csrf-token"]');return!!e&&!!e.hasAttribute("content")}getToken(){return document.querySelector('meta[name="csrf-token"]').getAttribute("content")}}class t extends Snowboard.Singleton{construct(){this.registeredWidgets=[]}listens(){return{ready:"onReady",render:"onReady",ajaxUpdate:"onAjaxUpdate"}}register(e,t,n){this.registeredWidgets.push({control:e,widget:t,callback:n})}unregister(e){this.registeredWidgets=this.registeredWidgets.filter((t=>t.control!==e))}onReady(){this.initializeWidgets(document.body)}onAjaxUpdate(e){this.initializeWidgets(e)}initializeWidgets(e){this.registeredWidgets.forEach((t=>{const n=e.querySelectorAll(`[data-control="${t.control}"]:not([data-widget-initialized])`);n.length&&n.forEach((e=>{if(e.dataset.widgetInitialized)return;const n=this.snowboard[t.widget](e);e.dataset.widget=n,e.dataset.widgetInitialized=!0,this.snowboard.globalEvent("backend.widget.initialized",e,n),e.getWidget=()=>e.dataset.widget,"function"==typeof t.callback&&t.callback(n,e)}))}))}}if(void 0===window.Snowboard)throw new Error("Snowboard must be loaded in order to use the Backend UI.");(n=>{n.addPlugin("backend.ajax.handler",e),n.addPlugin("backend.ui.widgetHandler",t),n["backend.ajax.handler"]().addPrefilter(),window.AssetManager={load:(e,t)=>{n.assetLoader().load(e).then((()=>{t&&"function"==typeof t&&t()}))}},window.assetManager=window.AssetManager})(window.Snowboard)}();