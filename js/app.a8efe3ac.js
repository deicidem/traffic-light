(function(t){function e(e){for(var n,c,a=e[0],u=e[1],l=e[2],m=0,f=[];m<a.length;m++)c=a[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"17b8":function(t,e,o){"use strict";o("ab13")},3654:function(t,e,o){"use strict";o("caba")},4764:function(t,e,o){"use strict";o("965e")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],c=o("2877"),a={},u=Object(c["a"])(a,r,i,!1,null,null,null),l=u.exports,s=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("timer",{key:t.activeColor.color,attrs:{totalTime:t.totalTime<=t.activeColor.time?t.totalTime:t.activeColor.time},on:{out:function(e){return t.switchLight()},tick:function(e){return t.changeTime(e)},blink:function(e){return t.blink()}}}),t._l(t.colors,(function(e,n){return o("light",{key:n,attrs:{disabled:t.disable||!e.active,color:e.color}})}))],2)},f=[],p=o("1da1"),d=o("5530"),h=(o("96cf"),o("b0c0"),o("2f62")),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"timer"},[t._v(" "+t._s(t.time)+" ")])},g=[],b=(o("a9e3"),{props:{totalTime:Number},data:function(){return{time:null}},methods:{startTimer:function(){var t=this;this.$emit("tick",this.time),setTimeout((function(){t.time>1?(t.time--,t.time<3&&t.$emit("blink"),t.startTimer()):t.$emit("out")}),1e3)}},mounted:function(){this.time=this.totalTime,this.startTimer()}}),w=b,T=(o("17b8"),Object(c["a"])(w,v,g,!1,null,null,null)),y=T.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:"light "+t.active,style:{background:t.color}})},j=[],C={props:{color:String,disabled:Boolean},computed:{active:function(){return this.disabled?"":"active"}}},x=C,_=(o("4764"),Object(c["a"])(x,O,j,!1,null,null,null)),k=_.exports,D={components:{Timer:y,Light:k},data:function(){return{disable:!1}},computed:Object(d["a"])({},Object(h["c"])({colors:"getColors",totalTime:"getTime",activeColor:"getActiveColor"})),methods:Object(d["a"])(Object(d["a"])({},Object(h["b"])({switchColor:"switchColor",changeTime:"changeTime"})),{},{switchLight:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.switchColor(t.activeColor.name);case 2:o=e.sent,t.$root.$router.push({name:"home",params:{color:t.colors[o].name}});case 4:case"end":return e.stop()}}),e)})))()},blink:function(){var t=this;this.disable=!0,setTimeout((function(){t.disable=!1}),500)}})},S=D,$=(o("3654"),Object(c["a"])(S,m,f,!1,null,null,null)),F=$.exports;o("4de4"),o("159b");n["a"].use(h["a"]);var I=new h["a"].Store({state:{colors:[{name:"red",color:"#FF0000",time:10,active:!1},{name:"yellow",color:"#FFFF00",time:3,active:!1},{name:"green",color:"#00FF00",time:15,active:!1}],goDown:!0,timeLeft:null},getters:{getActiveColor:function(t){return t.colors.filter((function(t){return 1==t.active}))[0]},getColors:function(t){return t.colors},getIndex:function(t){return function(e){for(var o=0,n=0;n<t.colors.length;n++)if(e==t.colors[n].name){o=n;break}return o}},getTime:function(t){return t.timeLeft},getGoDown:function(t){return t.goDown}},mutations:{setActiveColor:function(t,e){t.colors.forEach((function(t){t.active=!1})),t.colors[e].active=!0},setTime:function(t,e){t.timeLeft=e},setGoDown:function(t,e){t.goDown=e}},actions:{changeTime:function(t,e){localStorage.setItem("timeLeft",e),t.commit("setTime",e)},switchColor:function(t,e){return Object(p["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.getters.getColors,r=t.getters.getIndex(e),r+1==n.length&&(localStorage.setItem("goDown",!1),t.commit("setGoDown",!1)),0==r&&(localStorage.setItem("goDown",!0),t.commit("setGoDown",!0)),t.getters.getGoDown?r++:r--,t.commit("setTime",n[r].time),t.commit("setActiveColor",r),o.abrupt("return",r);case 8:case"end":return o.stop()}}),o)})))()},load:function(t){var e=+localStorage.getItem("timeLeft"),o=localStorage.getItem("goDown");void 0!=e&&t.commit("setTime",e),void 0!=o&&t.commit("setGoDown",o)}}});n["a"].use(s["a"]);var L=[{path:"/:color",name:"home",component:F,beforeEnter:function(t,e,o){var n=I.getters.getIndex(t.params.color);I.commit("setActiveColor",n),o()}},{path:"*",redirect:"/red"}],P=new s["a"]({mode:"history",base:"/",routes:L}),E=P;n["a"].config.productionTip=!1,I.dispatch("load"),new n["a"]({router:E,store:I,render:function(t){return t(l)}}).$mount("#app")},"965e":function(t,e,o){},ab13:function(t,e,o){},caba:function(t,e,o){}});
//# sourceMappingURL=app.a8efe3ac.js.map