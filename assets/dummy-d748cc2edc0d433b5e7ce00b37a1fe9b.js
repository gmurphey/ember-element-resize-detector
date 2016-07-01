"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,i){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(r,i["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,i=n["default"].APP.version;e["default"]=t["default"].extend({version:i,name:a})}),define("dummy/components/ember-notify/message",["exports","ember-notify/components/ember-notify/message"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ember-notify",["exports","ember-notify/components/ember-notify"],function(e,t){e["default"]=t["default"]}),define("dummy/components/resizable-container",["exports","ember"],function(e,t){var n=t["default"].String.htmlSafe,a=t["default"].computed;e["default"]=t["default"].Component.extend({classNames:["resizable-container"],style:a("height","width",function(){return n("height: "+this.get("height")+"px; width: "+this.get("width")+"px;}")})})}),define("dummy/components/resize-detector",["exports","ember-element-resize-detector/components/resize-detector"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){var n=t["default"].inject.service;e["default"]=t["default"].Controller.extend({notify:n(),actions:{resize:function(e,t){var n=e.width,a=e.height;this.get("notify").info(t.id+" resized to "+n+" by "+a)}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,i=n["default"].exportApplicationGlobal;a="string"==typeof i?i:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/notify",["exports","ember-notify"],function(e,t){e["default"]=t["default"]}),define("dummy/services/resize-detector",["exports","ember-element-resize-detector/services/resize-detector"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:14,column:0},end:{line:17,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"id","fill"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","resize-detector",["#fill"],["on-resize",["subexpr","action",["resize"],[],["loc",[null,[15,38],[15,55]]]]],["loc",[null,[15,2],[15,57]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:21,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("ember-element-resize-detector");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  Browsers allow us to bind to the resize event on the window but we're not able to do the same with DOM elements.\n  This addon provides the mechanism that allows you to efficiently monitor a DOM element and send an action when the size changes.\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Parent changes sizes");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  One common use case that's typically difficult is to send an action when a component's parent changes sizes.\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,8,8,n),a[1]=e.createMorphAt(t,10,10,n),a},statements:[["block","resizable-container",[],["width",100,"height",100],0,null,["loc",[null,[14,0],[17,24]]]],["content","ember-notify",["loc",[null,[19,0],[19,16]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/resizable-container",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:10,column:8}},moduleName:"dummy/templates/components/resizable-container.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("label");e.setAttribute(n,"class","width");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("input");e.setAttribute(a,"type","range"),e.setAttribute(a,"min","0"),e.setAttribute(a,"max","600"),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("label");e.setAttribute(n,"class","height");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("input");e.setAttribute(a,"type","range"),e.setAttribute(a,"orient","vertical"),e.setAttribute(a,"min","0"),e.setAttribute(a,"max","600"),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n  ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1,1]),i=e.childAt(t,[3,1]),r=e.childAt(t,[5]),l=new Array(6);return l[0]=e.createAttrMorph(a,"value"),l[1]=e.createAttrMorph(a,"oninput"),l[2]=e.createAttrMorph(i,"value"),l[3]=e.createAttrMorph(i,"oninput"),l[4]=e.createAttrMorph(r,"style"),l[5]=e.createMorphAt(r,1,1),l},statements:[["attribute","value",["get","width",["loc",[null,[2,32],[2,37]]]]],["attribute","oninput",["subexpr","action",[["subexpr","mut",[["get","width",["loc",[null,[2,80],[2,85]]]]],[],["loc",[null,[2,75],[2,86]]]]],["value","target.value"],["loc",[null,[2,66],[2,109]]]]],["attribute","value",["get","height",["loc",[null,[5,50],[5,56]]]]],["attribute","oninput",["subexpr","action",[["subexpr","mut",[["get","height",["loc",[null,[5,99],[5,105]]]]],[],["loc",[null,[5,94],[5,106]]]]],["value","target.value"],["loc",[null,[5,85],[5,129]]]]],["attribute","style",["get","style",["loc",[null,[8,15],[8,20]]]]],["content","yield",["loc",[null,[9,4],[9,13]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),i=JSON.parse(unescape(a));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-element-resize-detector",version:"v0.1.4"});