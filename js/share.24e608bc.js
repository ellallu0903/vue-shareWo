(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["share"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),s=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),s=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),s=r("c430"),a=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),h=r("7b0b"),v=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),S=r("241c"),x=r("057f"),O=r("7418"),C=r("06cf"),j=r("9bf2"),E=r("d1e7"),_=r("9112"),k=r("6eeb"),P=r("5692"),A=r("f772"),$=r("d012"),I=r("90e3"),N=r("b622"),T=r("e538"),R=r("746f"),J=r("d44e"),L=r("69f3"),W=r("b727").forEach,B=A("hidden"),F="Symbol",z="prototype",D=N("toPrimitive"),Q=L.set,q=L.getterFor(F),G=Object[z],H=o.Symbol,K=i("JSON","stringify"),M=C.f,U=j.f,V=x.f,X=E.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),rt=P("wks"),nt=o.QObject,ot=!nt||!nt[z]||!nt[z].findChild,it=a&&f((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=M(G,e);n&&delete G[e],U(t,e,r),n&&t!==G&&U(G,e,n)}:U,st=function(t,e){var r=Y[t]=y(H[z]);return Q(r,{type:F,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,r){t===G&&ct(Z,e,r),b(t);var n=m(e,!0);return b(r),l(Y,n)?(r.enumerable?(l(t,B)&&t[B][n]&&(t[B][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,B)||U(t,B,g(1,{})),t[B][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){b(t);var r=v(e),n=w(r).concat(bt(r));return W(n,(function(e){a&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=m(t,!0),r=X.call(this,e);return!(this===G&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,B)&&this[B][e])||r)},dt=function(t,e){var r=v(t),n=m(e,!0);if(r!==G||!l(Y,n)||l(Z,n)){var o=M(r,n);return!o||!l(Y,n)||l(r,B)&&r[B][n]||(o.enumerable=!0),o}},pt=function(t){var e=V(v(t)),r=[];return W(e,(function(t){l(Y,t)||l($,t)||r.push(t)})),r},bt=function(t){var e=t===G,r=V(e?Z:v(t)),n=[];return W(r,(function(t){!l(Y,t)||e&&!l(G,t)||n.push(Y[t])})),n};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===G&&r.call(Z,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),it(this,e,g(1,t))};return a&&ot&&it(G,e,{configurable:!0,set:r}),st(e,t)},k(H[z],"toString",(function(){return q(this).tag})),k(H,"withoutSetter",(function(t){return st(I(t),t)})),E.f=lt,j.f=ct,C.f=dt,S.f=x.f=pt,O.f=bt,T.f=function(t){return st(N(t),t)},a&&(U(H[z],"description",{configurable:!0,get:function(){return q(this).description}}),s||k(G,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),W(w(rt),(function(t){R(t)})),n({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),K){var ht=!c||f((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,K.apply(null,o)}})}H[z][D]||_(H[z],D,H[z].valueOf),J(H,F),$[B]=!0},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var r=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:c,l=i(e,1)?e[1]:void 0;return a[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,f,l)}))}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),s=r("50c4"),a=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(b,h,v,m){for(var g,y,w=i(b),S=o(w),x=n(h,v,3),O=s(S.length),C=0,j=m||a,E=e?j(b,O):r||d?j(b,0):void 0;O>C;C++)if((p||C in S)&&(g=S[C],y=x(g,C,w),t))if(e)E[C]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return C;case 2:c.call(E,g)}else switch(t){case 4:return!1;case 7:c.call(E,g)}return l?-1:u||f?f:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c033:function(t,e,r){t.exports=r.p+"img/arrow-up.e1d8e468.svg"},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),s=r("ae40"),a=i("map"),c=s("map");n({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),s=r("5135"),a=r("861d"),c=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var b=p.toString,h="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=b.call(t);if(s(l,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fbd8:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min_hight",attrs:{id:"share"}},[n("b-container",[n("b-button",{staticClass:"toTop"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:r("c033")}})])]),n("h1",{staticClass:"text-center my-3"},[t._v(t._s(t.users.account)+" ❜s Wo")]),n("div",{staticClass:"text-center col-11 col-lg-7 mx-auto",attrs:{id:"url"}},[n("span",{attrs:{id:"copythis"}},[t._v(t._s(this.url+this.userId))]),n("span",[n("b-button",{staticClass:"btn_Share",attrs:{size:"md"},on:{click:function(e){return t.CopyTextToClipboard("copythis")}}},[n("b-icon",{attrs:{icon:"clipboard"}})],1)],1)]),n("hr"),n("Photoswipe",{staticClass:"mt-4 mb-5"},[n("b-row",t._l(t.images,(function(e,r){return n("b-col",{key:e._id,staticClass:"p-1",attrs:{cols:"12",md:"60",lg:"3"}},[n("div",{staticClass:"profile-card-4 text-center"},[n("img",{directives:[{name:"pswp",rawName:"v-pswp",value:e,expression:"image"}],staticClass:"img img-responsive",attrs:{src:e.src}}),n("div",{staticClass:"profile-content"},[n("div",{staticClass:"profile-description"},[t._v(t._s(e.title))])])])])})),1)],1)],1),n("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"background-color":"black",loader:"dots",height:"70",width:"70"},on:{"update:active":function(e){t.isLoading=e}}})],1)},o=[],i=(r("a4d3"),r("e01a"),r("d81d"),{data:function(){return{userId:this.$route.params.id,images:[],users:[],url:"https://ellallu0903.github.io/vue-shareWo/#/share/",isLoading:!0}},methods:{CopyTextToClipboard:function(t){var e=document.createRange();e.selectNode(document.getElementById(t));var r=window.getSelection();r.removeAllRanges(),r.addRange(e),document.execCommand("copy"),this.$swal({icon:"success",title:"Success !",text:"Copy successfully!"})}},mounted:function(){var t=this;this.axios.get("https://album0903.herokuapp.com\n/albums/user/"+this.userId).then((function(e){e.data.success?(t.isLoading=!1,t.images=e.data.result.map((function(t){return t.src="https://album0903.herokuapp.com\n/albums/file/"+t.file,t.title=t.description,delete t.file,delete t.description,t}))):t.$swal({icon:"error",title:"Error !",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"Error !",text:e.response.data.message})})),this.axios.get("https://album0903.herokuapp.com\n/users/"+this.userId).then((function(e){e.data.success?t.users=e.data.result:t.$swal({icon:"error",title:"Error !",text:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:"Error !",text:e.response.data.message})}))}}),s=i,a=r("2877"),c=Object(a["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=share.24e608bc.js.map