(function(t){function e(e){for(var s,i,n=e[0],l=e[1],p=e[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,n=1;n<r.length;n++){var l=r[n];0!==a[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var p=0;p<n.length;p++)e(n[p]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"179b":function(t,e,r){},"44b4":function(t,e,r){"use strict";var s=r("179b"),a=r.n(s);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var s={};r.r(s),r.d(s,"config",(function(){return x})),r.d(s,"apiConfig",(function(){return w})),r.d(s,"callApi",(function(){return k}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("show-navigation"),r("div",{staticClass:"container"},[r("div",{staticClass:"shadowCoverTop color0"}),t._m(0),r("div",{staticClass:"spacer-4"}),r("div",{staticClass:"wrapper bounded-large"},[r("router-view")],1)]),r("div",{staticClass:"spacer-2"}),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadowContainer"},[r("div",{staticClass:"radialShadowTop"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",{staticClass:"small-text semi-bold horizontal-center"},[t._v("Copyright © 2020")])])}],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"color0"},[r("nav",{staticClass:"horizontal"},[r("div",{staticClass:"spacer-1"}),r("h1",{staticClass:"large-text horizontal-center"},[r("router-link",{attrs:{to:{name:"posters"}}},[r("span",{staticClass:"semibold"},[t._v("Broad")]),r("span",[t._v("poster")])])],1)])])},l=[],p={name:"show-navigation"},c=p,u=r("2877"),d=Object(u["a"])(c,n,l,!1,null,null,null),m=d.exports,v={name:"App",components:{"show-navigation":m}},h=v,f=(r("44b4"),Object(u["a"])(h,o,i,!1,null,null,null)),_=f.exports,g=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"posters"}},[r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"horizontal-center"},[r("router-link",{attrs:{to:{name:"newposter"}}},[r("a",{staticClass:"btn btn-primary btn-md input-size-150"},[t._v("Share your story")])])],1),r("div",{staticClass:"spacer-2"}),t._l(t.posters,(function(t){return r("show-posters",{key:t.id,attrs:{poster:t}})}))],2)},b=[],y=r("bc3a"),x={apiKey:"cXlEaHR1NHY4YXlNNjZYL2pyUmJ4NW5GdGtoNmtLalpORk5NR3lPdktFNjJ2eWR0aCtOd3pBelNsWWdrYjZIWDo6S22kiniYO9V1WZThcqtxbw==",apiRoute:"http://broadposter.com/api/"},w={async:!0,crossDomain:!0,headers:{Authorization:"Bearer "+x.apiKey,"Content-Type":"application/json","Set-Cookie":"widget_session=caligrafy_app; SameSite=None; Secure"}},k=y,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6 col-md-4",attrs:{id:"posters"}},[r("router-link",{attrs:{to:{name:"poster",params:{id:t.poster.id}}}},[r("div",{staticClass:"card color0 equally-spaced-1 height-fixed dropshadow"},[r("div",{staticClass:"card-image",style:"background-image: url("+t.poster.image_url+")"}),r("div",{staticClass:"spacer-2"}),r("h2",{staticClass:"medium-text semibold textcolor5 reset-margin"},[t._v(t._s(t.poster.title))]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.category))]),r("div",{staticClass:"spacer-1"}),r("div",{staticClass:"wrapper reset-margin"},[r("p",{staticClass:"textcolor5 default-text block-with-text"},[t._v(t._s(t.poster.short_description))])]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.modified_at))]),r("div",{staticClass:"spacer-1"})])])],1)},$=[],j={name:"show-posters",props:["poster"]},I=j,z=Object(u["a"])(I,O,$,!1,null,null,null),E=z.exports,R={name:"posters",components:{"show-posters":E},data:function(){return{posters:[],apiRoute:x.apiRoute+"posters",app:s}},mounted:function(){var t=this;this.app.callApi.get(this.apiRoute,this.app.apiConfig).then((function(e){t.posters=e.data}))}},P=R,S=Object(u["a"])(P,C,b,!1,null,null,null),N=S.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.poster?r("div",{attrs:{id:"poster"}},[r("div",{staticClass:"spacer-2"}),r("show-poster",{attrs:{poster:t.poster}})],1):t._e()},A=[],W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-section bounded-xlarge",attrs:{id:"poster"}},[r("div",{staticClass:"card color0 dropshadow horizontal-center"},[r("div",{staticClass:"inline-block horizontal-left"},[r("router-link",{attrs:{to:{name:"posters"}}},[r("a",{staticClass:"btn btn-default btn-sm"},[t._v("back to posters")])])],1),r("div",{staticClass:"inline-block horizontal-right"},[r("router-link",{attrs:{to:{name:"manageposter"}}},[r("a",{staticClass:"btn btn-primary btn-sm input-size-100 "},[t._v("edit")])])],1),r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"banner-section color0 horizontal-center"},[r("h2",{staticClass:"sr-only hide"},[t._v("post image")]),r("img",{staticClass:"card-responsive",attrs:{alt:"Main image",src:t.poster.image_url}})]),r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"horizontal-left"},[r("h2",{staticClass:"medium-text semibold textcolor5 reset-margin"},[t._v(t._s(t.poster.title))]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.category))]),r("div",{staticClass:"spacer-1"}),r("div",{staticClass:"wrapper reset-margin"},[r("p",{staticClass:"textcolor5 default-text block-with-text"},[t._v(t._s(t.poster.description))])]),r("div",{staticClass:"small-text textcolor3"},[t._v(t._s(t.poster.modified_at))])]),r("div",{staticClass:"spacer-1"})])])},q=[],B={name:"show-poster",props:["poster"]},D=B,J=Object(u["a"])(D,W,q,!1,null,null,null),M=J.exports,Y={name:"posterdetails",components:{"show-poster":M},props:["id"],data:function(){return{poster:null,apiRoute:x.apiRoute+"posters/",app:s}},mounted:function(){var t=this;this.app.callApi.get(this.apiRoute+this.id,this.app.apiConfig).then((function(e){var r;t.poster=null!==(r=e.data)&&void 0!==r?r:null,t.poster||t.$router.push({name:"error",params:{message:"The poster is not available"}})}))}},G=Y,L=Object(u["a"])(G,T,A,!1,null,null,null),Z=L.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"manageform"}},[r("div",{staticClass:"spacer-1"}),r("poster-form",{attrs:{poster:t.poster,edit:t.edit}})],1)},H=[],K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"posterform"}},[r("div",{staticClass:"content-section bounded-xlarge equally-spaced-1 horizontal-center"},[r("form",{attrs:{id:"poster_form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.savePoster(e)}}},[r("div",{staticClass:"card color0 dropshadow horizontal-center"},[r("div",{staticClass:"horizontal-left"},[t.edit?r("router-link",{attrs:{to:{name:"poster"}}},[r("a",{staticClass:"btn btn-default btn-sm"},[t._v("back to poster")])]):r("router-link",{attrs:{to:{name:"posters"}}},[r("a",{staticClass:"btn btn-default btn-sm"},[t._v("back to posters")])])],1),r("div",{staticClass:"spacer-1"}),r("div",{staticClass:"horizontal-left"},[r("poster-message",{attrs:{error:t.error}}),r("div",{staticClass:"form-group"},[r("label",{class:[{error:t.error&&t.error.errors.title},"textcolor5"],attrs:{for:"title"}},[t._v("* title")]),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error.errors.title))]):t._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:t.posterInputs.title,expression:"posterInputs.title"}],staticClass:"form-control input-default",attrs:{type:"text",name:"title",id:"title",placeholder:"Enter the title",maxlength:"18",required:""},domProps:{value:t.posterInputs.title},on:{input:function(e){e.target.composing||t.$set(t.posterInputs,"title",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{class:[{error:t.error&&t.error.errors.category},"textcolor5"],attrs:{for:"category"}},[t._v("* category")]),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error.errors.category))]):t._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:t.posterInputs.category,expression:"posterInputs.category"}],staticClass:"form-control input-default",attrs:{type:"text",name:"category",id:"category",placeholder:"Enter a category name",maxlength:"50",required:""},domProps:{value:t.posterInputs.category},on:{input:function(e){e.target.composing||t.$set(t.posterInputs,"category",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{class:[{error:t.error&&t.error.errors.short_description},"textcolor5"],attrs:{for:"short_description"}},[t._v("* short description")]),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error.errors.short_description))]):t._e(),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.posterInputs.short_description,expression:"posterInputs.short_description"}],staticClass:"form-control",attrs:{name:"short_description",id:"short_description",maxlength:"200",rows:"3",placeholder:"What is this poster about?",required:""},domProps:{value:t.posterInputs.short_description},on:{input:function(e){e.target.composing||t.$set(t.posterInputs,"short_description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{class:[{error:t.error&&t.error.errors.description},"textcolor5"],attrs:{for:"description"}},[t._v("* description")]),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error.errors.description))]):t._e(),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.posterInputs.description,expression:"posterInputs.description"}],staticClass:"form-control",attrs:{name:"description",id:"description",rows:"6",placeholder:"Give us more details about your poster",required:""},domProps:{value:t.posterInputs.description},on:{input:function(e){e.target.composing||t.$set(t.posterInputs,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[t.edit?r("div",[r("div",{staticClass:"wrapper reset-margin"},[r("p",{staticClass:"textcolor5"},[t._v("Selected file: "),r("span",{staticClass:"default-text block-with-text"},[t._v(t._s(t.posterInputs.image_url))])])])]):r("div",[r("label",{class:[{error:t.error&&t.error.errors.image_url},"textcolor5"],attrs:{for:"image_url"}},[t._v("* Image")]),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error.errors.image_url))]):t._e(),r("input",{staticClass:"form-control input-default",attrs:{type:"file",id:"image_url",name:"image_url",accept:"image/*"}})])]),r("div",{staticClass:"spacer-2"}),r("input",{staticClass:"btn btn-primary btn-md btn-block",attrs:{type:"submit",value:"save"}}),r("div",{staticClass:"spacer-2"})],1)])]),t.edit?r("form",{attrs:{id:"delete_form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.deletePoster(e)}}},[r("input",{staticClass:"btn btn-lnk btn-md btn-block",attrs:{type:"submit",value:"delete poster"}})]):t._e(),r("div",{staticClass:"spacer-2"})])])},X=[],U=(r("c1f9"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error&&t.error.status?r("div",{staticClass:"show"},[r("div",{staticClass:"spacer-2"}),r("div",{class:"alert alert-"+t.error.status,staticStyle:{margin:"0"},attrs:{role:"alert"}},[r("p",{staticClass:"medium-text horizontal-left semibold"},[r("span",{class:"glyphicon glyphicon-"+t.alertType,attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.error.message_header)+" ")]),r("span",{staticClass:"sr-only"},[t._v(t._s(t.error.status))]),r("p",{staticClass:"horizontal-left"},[t._v(t._s(t.error.message))])]),r("div",{staticClass:"spacer-2"})]):t._e()}),V=[],Q={name:"show-messaging",props:["error"],computed:{alertType:function(){var t="";switch(this.error.status){case"danger":t="exclamation-sign";break;case"success":t="ok";break;case"info":t="info";break;default:t=""}return t}}},tt=Q,et=Object(u["a"])(tt,U,V,!1,null,null,null),rt=et.exports,st={name:"poster-form",props:["poster","edit"],components:{"poster-message":rt},data:function(){return{response:null,error:null,apiRoute:x.apiRoute+"posters/",app:s}},computed:{posterInputs:function(){return this.response&&this.response.posters?this.response.posters:this.poster}},methods:{savePoster:function(){var t=this,e=document.getElementById("poster_form"),r=new FormData(e);if(this.edit){var s=JSON.stringify(Object.fromEntries(r));this.app.callApi.put(this.apiRoute+this.poster.id,s,this.app.apiConfig).then((function(e){t.response=e.data,e.data.error?(t.error=e.data,"danger"==t.error.status&&(t.error.alertType="exclamation-sign")):t.$router.push({name:"posters"})})).catch((function(t){return console.log(t)}))}else{var a=document.getElementById("image_url");r.append("image_url",a.files[0]),this.app.callApi.post(this.apiRoute,r,this.app.apiConfig).then((function(e){t.response=e.data,e.data.error?(t.error=e.data,"danger"==t.error.status&&(t.error.alertType="exclamation-sign")):t.$router.push({name:"posters"})})).catch((function(t){return console.log(t)}))}},deletePoster:function(){this.edit?this.app.callApi.delete(this.apiRoute+this.poster.id,this.app.apiConfig).then(this.$router.push({name:"posters"})).catch((function(t){return console.log(t)})):this.$router.push({name:"posters"})}}},at=st,ot=Object(u["a"])(at,K,X,!1,null,null,null),it=ot.exports,nt={name:"manageform",components:{"poster-form":it},data:function(){return{poster:{title:"",category:"",short_description:"",description:"",image_url:""},id:"",edit:!1,apiRoute:x.apiRoute+"posters/",app:s}},mounted:function(){var t,e=this;this.id=null!==(t=this.$route.params.id)&&void 0!==t?t:"",this.id&&this.app.callApi.get(this.apiRoute+this.id,this.app.apiConfig).then((function(t){var r,s=e.poster;e.poster=null!==(r=t.data)&&void 0!==r?r:null,e.poster?e.edit=!0:(e.poster=s,e.$router.push({name:"newposter"}))}))}},lt=nt,pt=Object(u["a"])(lt,F,H,!1,null,null,null),ct=pt.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"error"}},[r("show-error",{attrs:{error:t.error}})],1)},dt=[],mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.error&&!t.error.status?r("div",{staticClass:"wrapper content-section bounded equally-spaced-1"},[r("div",{staticClass:"spacer-4"}),r("section",{staticClass:"bounded showborders dropshadow color0 horizontal-left"},[r("h2",[t._v("Whooops...")]),r("p",{staticClass:"semibold"},[t._v("Something went wrong")]),r("p",[t._v("We are working on it, please be patient with us")]),t.error.message?r("div",[r("hr"),r("p",[t._v(t._s(t.error.message))])]):t._e(),r("div",{staticClass:"spacer-2"}),r("div",{staticClass:"horizontal-center"},[r("router-link",{attrs:{to:{name:"posters"}}},[r("a",{staticClass:"btn btn-default"},[t._v("Let's start again")])])],1),r("div",{staticClass:"spacer-2"})])]):t._e()},vt=[],ht={name:"show-error",props:["error"]},ft=ht,_t=Object(u["a"])(ft,mt,vt,!1,null,null,null),gt=_t.exports,Ct={name:"error",components:{"show-error":gt},data:function(){return{error:null}},mounted:function(){this.error=this.$route.params}},bt=Ct,yt=Object(u["a"])(bt,ut,dt,!1,null,null,null),xt=yt.exports;a["a"].use(g["a"]),a["a"].config.productionTip=!1;var wt=[{path:"/",component:N,name:"posters"},{path:"/error",component:xt,name:"error"},{path:"/create",component:ct,name:"newposter"},{path:"/:id/edit",component:ct,name:"manageposter"},{path:"/:id",component:Z,name:"poster",props:!0}],kt=new g["a"]({routes:wt,mode:"history"});new a["a"]({router:kt,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.112ce0f2.js.map