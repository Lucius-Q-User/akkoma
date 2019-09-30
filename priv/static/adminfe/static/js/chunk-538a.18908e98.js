(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-538a"],{LFlD:function(t,e,n){"use strict";var o=n("pxV3");n.n(o).a},aSQl:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n("o0o1"),a=n.n(o),r=n("yXPU"),s=n.n(r),i=n("oAJy"),l=n.n(i),c=n("LvDl"),u=n.n(c),p=function(){var t=s()(a.a.mark(function t(e){var n,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getItem("vuex-lz");case 2:if(n=t.sent,void 0!==(o=u.a.get(n,"oauth.userToken"))){t.next=6;break}throw new Error("PleromaFE token not found");case 6:return t.next=8,e.dispatch("LoginByPleromaFE",{token:o});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},c11S:function(t,e,n){"use strict";var o=n("gTgX");n.n(o).a},gTgX:function(t,e,n){},ntYl:function(t,e,n){"use strict";n.r(e);var o=n("J4zp"),a=n.n(o),r=n("o0o1"),s=n.n(r),i=n("yXPU"),l=n.n(i),c=n("wAo7"),u=n("oAJy"),p=n.n(u),d=n("LvDl"),m=n.n(d),g=n("mSNy"),h=n("aSQl"),v={name:"Login",components:{"svg-icon":c.a},data:function(){return{loginForm:{username:"",password:""},passwordType:"password",loading:!1,loadingPleromaFE:!1,showDialog:!1,redirect:void 0,pleromaFEToken:!1,pleromaFEStateKey:"vuex-lz",pleromaFEState:{}}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},mounted:function(){var t=l()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.getItem(this.pleromaFEStateKey);case 2:if(e=t.sent,this.pleromaFEState=e,void 0!==m.a.get(e,"oauth.userToken")){t.next=6;break}return t.abrupt("return");case 6:this.pleromaFEToken=!0;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.loading=!0;var e=this.getLoginData();this.$store.dispatch("LoginByUsername",e).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/users/index"})}).catch(function(){t.loading=!1})},handlePleromaFELogin:function(){var t=l()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadingPleromaFE=!0,t.prev=1,t.next=4,Object(h.a)(this.$store);case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),this.loadingPleromaFE=!1,this.$message.error(g.a.t("login.pleromaFELoginFailed"));case 10:this.loadingPleromaFE=!1,this.$message.success(g.a.t("login.pleromaFELoginSucceed")),this.$router.push({path:this.redirect||"/users/index"});case 13:case"end":return t.stop()}},t,this,[[1,6]])}));return function(){return t.apply(this,arguments)}}(),getLoginData:function(){var t=this.loginForm.username.split("@"),e=a()(t,2),n=e[0],o=e[1];return{username:n.trim(),authHost:o?o.trim():window.location.host,password:this.loginForm.password}}}},f=(n("c11S"),n("LFlD"),n("KHd+")),w=Object(f.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("login.title"))+"\n      ")])]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("div",{staticClass:"omit-host-note"},[t._v(t._s(t.$t("login.omitHostname")))]),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),n("el-button",{staticClass:"login-button",attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n      "+t._s(t.$t("login.logIn"))+"\n    ")]),t._v(" "),t.pleromaFEToken?n("el-button",{staticClass:"login-button",attrs:{loading:t.loadingPleromaFE,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handlePleromaFELogin(e)}}},[t._v("\n      "+t._s(t.$t("login.logInViaPleromaFE"))+"\n    ")]):t._e()],1)],1)},[],!1,null,"d027d802",null);w.options.__file="index.vue";e.default=w.exports},pxV3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-538a.18908e98.js.map