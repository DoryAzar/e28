(function(t){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,n=1;n<r.length;n++){var l=r[n];0!==o[l]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},o={app:0},a=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"179b":function(t,e,r){},"44b4":function(t,e,r){"use strict";var s=r("179b"),o=r.n(s);o.a},"56d7":function(t,e,r){"use strict";r.r(e);var s={};r.r(s),r.d(s,"config",(function(){return X})),r.d(s,"apiConfig",(function(){return U})),r.d(s,"callApi",(function(){return V}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("show-navigation"),r("div",{staticClass:"container"},[r("div",{staticClass:"shadowCoverTop color0"}),t._m(0),r("div",{staticClass:"spacer-4"}),r("div",{staticClass:"wrapper bounded-large"},[r("router-view")],1)]),r("div",{staticClass:"spacer-2"}),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadowContainer"},[r("div",{staticClass:"radialShadowTop"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",{staticClass:"small-text semi-bold horizontal-center"},[t._v("Copyright © 2020")])])}],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"color0"},[r("nav",{staticClass:"horizontal"},[r("div",{staticClass:"spacer-1"}),r("h1",{staticClass:"large-text horizontal-center"},[r("router-link",{attrs:{to:{name:"posters"}}},[r("span",{staticClass:"semibold"},[t._v("Broad")]),r("span",[t._v("poster")])])],1)])])},l=[],c={name:"show-navigation"},p=c,u=r("2877"),d=Object(u["a"])(p,n,l,!1,null,null,null),m=d.exports,v={name:"App",components:{"show-navigation":m}},h=v,f=(r("44b4"),Object(u["a"])(h,a,i,!1,null,null,null)),g=f.exports,_=r("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"posters"}},[r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"horizontal-center"},[r("router-link",{attrs:{to:{name:"newposter"}}},[r("a",{staticClass:"btn btn-primary btn-md input-size-150"},[t._v("Share your story")])])],1),r("div",{staticClass:"spacer-2"}),t._l(t.posters,(function(t){return r("show-posters",{key:t.id,attrs:{poster:t}})}))],2)},C=[],$=r("5530"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6 col-md-4",attrs:{id:"posters"}},[r("router-link",{attrs:{to:{name:"poster",params:{id:t.poster.id}}}},[r("div",{staticClass:"card color0 equally-spaced-1 height-fixed dropshadow"},[r("div",{staticClass:"card-image",style:"background-image: url("+t.poster.image_url+")"}),r("div",{staticClass:"spacer-2"}),r("h2",{staticClass:"medium-text semibold textcolor5 reset-margin"},[t._v(t._s(t.poster.title))]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.category))]),r("div",{staticClass:"spacer-1"}),r("div",{staticClass:"wrapper reset-margin"},[r("p",{staticClass:"textcolor5 default-text block-with-text"},[t._v(t._s(t.poster.short_description))])]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.modified_at))]),r("div",{staticClass:"spacer-1"})])])],1)},y=[],w={name:"show-posters",props:["poster"]},I=w,O=Object(u["a"])(I,x,y,!1,null,null,null),j=O.exports,k=r("2f62"),P={name:"posters",components:{"show-posters":j},data:function(){return{}},computed:Object($["a"])({},Object(k["b"])(["posters"])),mounted:function(){this.$store.dispatch("getPosters")}},E=P,z=Object(u["a"])(E,b,C,!1,null,null,null),q=z.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.poster?r("div",{attrs:{id:"poster"}},[r("div",{staticClass:"spacer-2"}),r("show-poster")],1):t._e()},T=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-section bounded-xlarge",attrs:{id:"poster"}},[r("div",{staticClass:"card color0 dropshadow horizontal-center"},[r("div",{staticClass:"inline-block horizontal-left"},[r("router-link",{attrs:{to:{name:"posters"}}},[r("a",{staticClass:"btn btn-default btn-sm"},[t._v("back to posters")])])],1),r("div",{staticClass:"inline-block horizontal-right"},[r("router-link",{attrs:{to:{name:"manageposter"}}},[r("a",{staticClass:"btn btn-primary btn-sm input-size-100 "},[t._v("edit")])])],1),r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"banner-section color0 horizontal-center"},[r("h2",{staticClass:"sr-only hide"},[t._v("post image")]),r("img",{staticClass:"card-responsive",attrs:{alt:"Main image",src:t.poster.image_url}})]),r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"horizontal-left"},[r("h2",{staticClass:"medium-text semibold textcolor5 reset-margin"},[t._v(t._s(t.poster.title))]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.category))]),r("div",{staticClass:"spacer-1"}),r("div",{staticClass:"wrapper reset-margin"},[r("p",{staticClass:"textcolor5 default-text block-with-text"},[t._v(t._s(t.poster.description))])]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.modified_at))])]),r("div",{staticClass:"spacer-1"})])])},N=[],M={name:"show-poster",computed:Object($["a"])({},Object(k["b"])(["poster"]))},R=M,W=Object(u["a"])(R,L,N,!1,null,null,null),B=W.exports,A={name:"posterdetails",components:{"show-poster":B},props:["id"],data:function(){return{}},computed:Object($["a"])({},Object(k["b"])(["poster"])),mounted:function(){this.$store.dispatch("getPoster",this.id)},watch:{poster:function(){this.poster||this.$router.push({name:"error",params:{message:"The poster is not available"}})}}},D=A,J=Object(u["a"])(D,S,T,!1,null,null,null),Y=J.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"manageform"}},[r("div",{staticClass:"spacer-1"}),r("poster-form")],1)},Z=[],F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"posterform"}},[r("div",{staticClass:"content-section bounded-xlarge equally-spaced-1 horizontal-center"},[r("form",{attrs:{id:"poster_form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.savePoster(e)}}},[r("div",{staticClass:"card color0 dropshadow horizontal-center"},[r("div",{staticClass:"horizontal-left"},[t.edit?r("router-link",{attrs:{to:{name:"poster"}}},[r("a",{staticClass:"btn btn-default btn-sm"},[t._v("back to poster")])]):r("router-link",{attrs:{to:{name:"posters"}}},[r("a",{staticClass:"btn btn-default btn-sm"},[t._v("back to posters")])])],1),r("div",{staticClass:"spacer-1"}),r("div",{staticClass:"horizontal-left"},[r("poster-message",{attrs:{error:t.error}}),r("div",{staticClass:"form-group"},[r("label",{class:[{"semibold error":t.error&&t.error.errors.title||t.$v.posterInputs.title.$error},"textcolor5"],attrs:{for:"title"}},[t._v("* title")]),t.error&&t.error.errors.title?r("p",{staticClass:"error small-text"},[t._v(t._s(t.error.errors.title))]):t.$v.posterInputs.title.$error&&!t.$v.posterInputs.title.required?r("p",{staticClass:"error small-text"},[t._v("Title is required")]):t.$v.posterInputs.title.$error&&!t.$v.posterInputs.title.maxLength?r("p",{staticClass:"error small-text"},[t._v("Maximum Length is 18 characters")]):t._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.posterInputs.title.$model,expression:"$v.posterInputs.title.$model"}],staticClass:"form-control input-default",attrs:{type:"text",name:"title",id:"title",placeholder:"Enter the title"},domProps:{value:t.$v.posterInputs.title.$model},on:{focus:function(e){t.error=""},input:function(e){e.target.composing||t.$set(t.$v.posterInputs.title,"$model",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{class:[{"semibold error":t.error&&t.error.errors.category||t.$v.posterInputs.category.$error},"textcolor5"],attrs:{for:"category"}},[t._v("* category")]),t.error&&t.error.errors.category?r("p",{staticClass:"error small-text"},[t._v(t._s(t.error.errors.category))]):t.$v.posterInputs.category.$error&&!t.$v.posterInputs.category.required?r("p",{staticClass:"error small-text"},[t._v("Category is required")]):t.$v.posterInputs.category.$error&&!t.$v.posterInputs.category.maxLength?r("p",{staticClass:"error small-text"},[t._v("Maximum Length is 18 characters")]):t.$v.posterInputs.category.$error&&!t.$v.posterInputs.category.alpha?r("p",{staticClass:"error small-text"},[t._v("Only alphabetic characters can be entered")]):t._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.posterInputs.category.$model,expression:"$v.posterInputs.category.$model"}],staticClass:"form-control input-default",attrs:{type:"text",name:"category",id:"category",placeholder:"Enter a category name",maxlength:"50"},domProps:{value:t.$v.posterInputs.category.$model},on:{focus:function(e){t.error=""},input:function(e){e.target.composing||t.$set(t.$v.posterInputs.category,"$model",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{class:[{"semibold error":t.error&&t.error.errors.short_description||t.$v.posterInputs.short_description.$error},"textcolor5"],attrs:{for:"short_description"}},[t._v("* short description")]),t.error&&t.error.errors.short_description?r("p",{staticClass:"error small-text"},[t._v(t._s(t.error.errors.short_description))]):t.$v.posterInputs.short_description.$error&&!t.$v.posterInputs.short_description.required?r("p",{staticClass:"error small-text"},[t._v("Short description is required")]):t.$v.posterInputs.short_description.$error&&!t.$v.posterInputs.short_description.maxLength?r("p",{staticClass:"error small-text"},[t._v("Maximum Length is 200 characters")]):t._e(),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.$v.posterInputs.short_description.$model,expression:"$v.posterInputs.short_description.$model"}],staticClass:"form-control",attrs:{name:"short_description",id:"short_description",rows:"3",placeholder:"What is this poster about?"},domProps:{value:t.$v.posterInputs.short_description.$model},on:{focus:function(e){t.error=""},input:function(e){e.target.composing||t.$set(t.$v.posterInputs.short_description,"$model",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{class:[{"semibold error":t.error&&t.error.errors.description||t.$v.posterInputs.description.$error},"textcolor5"],attrs:{for:"description"}},[t._v("* description")]),t.error&&t.error.errors.description?r("p",{staticClass:"error small-text"},[t._v(t._s(t.error.errors.description))]):t.$v.posterInputs.description.$error&&!t.$v.posterInputs.description.required?r("p",{staticClass:"error small-text"},[t._v("Description is required")]):t._e(),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.$v.posterInputs.description.$model,expression:"$v.posterInputs.description.$model"}],staticClass:"form-control",attrs:{name:"description",id:"description",rows:"6",placeholder:"Give us more details about your poster"},domProps:{value:t.$v.posterInputs.description.$model},on:{focus:function(e){t.error=""},input:function(e){e.target.composing||t.$set(t.$v.posterInputs.description,"$model",e.target.value)}}})]),r("div",{staticClass:"form-group"},[t.edit?r("div",[r("div",{staticClass:"wrapper reset-margin"},[r("p",{staticClass:"textcolor5"},[t._v("Selected file: "),r("span",{staticClass:"default-text block-with-text"},[t._v(t._s(t.posterInputs.image_url))])])])]):r("div",[r("label",{class:[{"semibold error":t.error&&t.error.errors.image_url},"textcolor5"],attrs:{for:"image_url"}},[t._v("* Image")]),t.error&&t.error.errors.image_url?r("p",{staticClass:"error small-text"},[t._v(t._s(t.error.errors.image_url))]):t._e(),r("input",{staticClass:"form-control input-default",attrs:{type:"file",id:"image_url",name:"image_url",accept:"image/*"},on:{change:function(e){t.error=""}}})])]),r("div",{staticClass:"spacer-2"}),t.$v.$anyError||t.error?r("p",{staticClass:"horizontal-center small-text error"},[t._v("Make sure to fix the errors on the page")]):t._e(),r("input",{staticClass:"btn btn-primary btn-md btn-block",class:{disabled:t.$v.$anyError},attrs:{type:"submit",value:"save"}}),r("div",{staticClass:"spacer-2"})],1)])]),t.edit?r("form",{attrs:{id:"delete_form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.deletePoster(e)}}},[r("input",{staticClass:"btn btn-lnk btn-md btn-block",attrs:{type:"submit",value:"delete poster"}})]):t._e(),r("div",{staticClass:"spacer-2"})])])},H=[],K=(r("c1f9"),r("bc3a")),X={apiKey:"cXlEaHR1NHY4YXlNNjZYL2pyUmJ4NW5GdGtoNmtLalpORk5NR3lPdktFNjJ2eWR0aCtOd3pBelNsWWdrYjZIWDo6S22kiniYO9V1WZThcqtxbw==",apiRoute:"http://broadposter.com/api/"},U={async:!0,crossDomain:!0,headers:{Authorization:"Bearer "+X.apiKey,"Content-Type":"application/json","Set-Cookie":"widget_session=caligrafy_app; SameSite=None; Secure"}},V=K,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error&&t.error.status?r("div",{staticClass:"show"},[r("div",{staticClass:"spacer-2"}),r("div",{class:"alert alert-"+t.error.status,staticStyle:{margin:"0"},attrs:{role:"alert"}},[r("p",{staticClass:"medium-text horizontal-left semibold"},[r("span",{class:"glyphicon glyphicon-"+t.alertType,attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.error.message_header)+" ")]),r("span",{staticClass:"sr-only"},[t._v(t._s(t.error.status))]),r("p",{staticClass:"horizontal-left"},[t._v(t._s(t.error.message))])]),r("div",{staticClass:"spacer-2"})]):t._e()},tt=[],et={name:"show-messaging",props:["error"],computed:{alertType:function(){var t="";switch(this.error.status){case"danger":t="exclamation-sign";break;case"success":t="ok";break;case"info":t="info";break;default:t=""}return t}}},rt=et,st=Object(u["a"])(rt,Q,tt,!1,null,null,null),ot=st.exports,at=r("b5ae"),it={name:"poster-form",components:{"poster-message":ot},data:function(){return{response:null,error:null,apiRoute:X.apiRoute+"posters/",app:s}},validations:{posterInputs:{title:{required:at["required"],maxLength:Object(at["maxLength"])(18)},category:{required:at["required"],alpha:at["alpha"],maxLength:Object(at["maxLength"])(18)},short_description:{required:at["required"],maxLength:Object(at["maxLength"])(200)},description:{required:at["required"]}}},computed:Object($["a"])({},Object(k["b"])(["poster","edit"]),{posterInputs:function(){return this.response&&this.response.posters?this.response.posters:this.poster}}),methods:{savePoster:function(){var t=this,e=document.getElementById("poster_form"),r=new FormData(e);if(this.$store.state.edit){var s=JSON.stringify(Object.fromEntries(r));this.app.callApi.put(this.apiRoute+this.poster.id,s,this.app.apiConfig).then((function(e){t.response=e.data,e.data.error?(t.error=e.data,"danger"==t.error.status&&(t.error.alertType="exclamation-sign")):t.$router.push({name:"posters"})})).catch((function(t){return console.log(t)}))}else{var o=document.getElementById("image_url");r.append("image_url",o.files[0]),this.app.callApi.post(this.apiRoute,r,this.app.apiConfig).then((function(e){t.response=e.data,e.data.error?(t.error=e.data,"danger"==t.error.status&&(t.error.alertType="exclamation-sign")):t.$router.push({name:"posters"})})).catch((function(t){return console.log(t)}))}},deletePoster:function(){var t=this;this.$store.state.edit?this.app.callApi.delete(this.apiRoute+this.poster.id,this.app.apiConfig).then((function(e){var r=!e;t.$store.commit("setEditMode",r),t.$router.push({name:"posters"})})).catch((function(t){return console.log(t)})):this.$router.push({name:"posters"})}}},nt=it,lt=Object(u["a"])(nt,F,H,!1,null,null,null),ct=lt.exports,pt={name:"manageform",components:{"poster-form":ct},data:function(){return{id:""}},computed:Object($["a"])({},Object(k["b"])(["poster","edit"])),mounted:function(){var t;this.$store.commit("loadPoster",{title:"",category:"",short_description:"",description:"",image_url:""}),this.id=null!==(t=this.$route.params.id)&&void 0!==t?t:"",this.id&&(this.$store.dispatch("getPoster",this.id),this.$store.commit("setEditMode",!0))},watch:{poster:function(){this.poster||this.$router.push({name:"error",params:{message:"The poster is not available"}})}}},ut=pt,dt=Object(u["a"])(ut,G,Z,!1,null,null,null),mt=dt.exports,vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"error"}},[r("show-error",{attrs:{error:t.error}})],1)},ht=[],ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error&&!t.error.status?r("div",{staticClass:"wrapper content-section bounded equally-spaced-1"},[r("div",{staticClass:"spacer-4"}),r("section",{staticClass:"bounded showborders dropshadow color0 horizontal-left"},[r("h2",[t._v("Whooops...")]),r("p",{staticClass:"semibold"},[t._v("Something went wrong")]),r("p",[t._v("We are working on it, please be patient with us")]),t.error.message?r("div",[r("hr"),r("p",[t._v(t._s(t.error.message))])]):t._e(),r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"horizontal-center"},[r("router-link",{attrs:{to:{name:"posters"}}},[r("a",{staticClass:"btn btn-default"},[t._v("Let's start again")])])],1),r("div",{staticClass:"spacer-2"})])]):t._e()},gt=[],_t={name:"show-error",props:["error"]},bt=_t,Ct=Object(u["a"])(bt,ft,gt,!1,null,null,null),$t=Ct.exports,xt={name:"error",components:{"show-error":$t},data:function(){return{error:null}},mounted:function(){this.error=this.$route.params}},yt=xt,wt=Object(u["a"])(yt,vt,ht,!1,null,null,null),It=wt.exports;r("b64b");o["a"].use(k["a"]);var Ot=new k["a"].Store({state:{posters:[],poster:[],edit:!1},mutations:{setEditMode:function(t,e){t.edit=e},loadPosters:function(t,e){t.posters=e},loadPoster:function(t,e){t.poster=e}},actions:{getPosters:function(t){t.commit("setEditMode",!1),V.get(X.apiRoute+"posters",U).then((function(e){t.commit("loadPosters",e.data)}))},getPoster:function(t,e){if(e)if(this.state.posters.length<=0)V.get(X.apiRoute+"posters/"+e,U).then((function(e){t.commit("loadPoster",e.data)}));else{var r=this.getters.getPosterById(e);t.commit("loadPoster",r)}}},getters:{getPosterById:function(t){return function(e){for(var r=0,s=Object.keys(t.posters);r<s.length;r++){var o=s[r];if(t.posters[o].id==e)return t.posters[o]}}}}}),jt=r("1dce"),kt=r.n(jt);o["a"].use(_["a"]),o["a"].use(kt.a),o["a"].config.productionTip=!1;var Pt=[{path:"/",component:q,name:"posters"},{path:"/error",component:It,name:"error"},{path:"/create",component:mt,name:"newposter"},{path:"/:id/edit",component:mt,name:"manageposter"},{path:"/:id",component:Y,name:"poster",props:!0}],Et=new _["a"]({routes:Pt,mode:"history"});new o["a"]({store:Ot,router:Et,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.f91a4775.js.map