(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{268:function(t,e,n){var content=n(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("9f50c8b4",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";var r=n(268);n.n(r).a},316:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".main[data-v-2281d726]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}",""])},395:function(t,e,n){"use strict";n.r(e);n(22),n(39);var r=n(5),o={data:function(){return{oldpassword:"",password:"",confirmation:"",loading:!1}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://api.octavues.me/admin");case 3:return r=t.sent,data={data:r.data.user},t.abrupt("return",new Promise(function(t){setTimeout(function(){t(data)},4e3)}));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),layout:"admin",methods:{imgUpdate:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e={img1:this.data.img1,img2:this.data.img2,tmp:this.data.img1,avatar:this.data.avatar},t.next=4,this.$axios.$post("https://api.octavues.me/admin/"+this.data._id,e);case 4:if(!t.sent.success){t.next=12;break}return t.next=8,this.$axios.$get("https://api.octavues.me/admin");case 8:return n=t.sent,t.next=11,this.$store.dispatch("profile",n.data.user);case 11:this.$router.push("/admin");case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mainUpdate:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e={firstname:this.data.firstname,lastname:this.data.lastname,role:this.data.role,email:this.data.email,name:this.data.firstname+" "+this.data.lastname[0]+"."},t.next=4,this.$axios.$post("https://api.octavues.me/admin/"+this.data._id,e);case 4:if(!t.sent.success){t.next=12;break}return t.next=8,this.$axios.$get("https://api.octavues.me/admin");case 8:return n=t.sent,t.next=11,this.$store.dispatch("profile",n.data.user);case 11:this.$router.push("/admin");case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),socialUpdate:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e={facebook:this.data.facebook,instagram:this.data.instagram,twitter:this.data.twitter,bio:this.data.bio},t.next=4,this.$axios.$post("https://api.octavues.me/admin/"+this.data._id,e);case 4:if(!t.sent.success){t.next=12;break}return t.next=8,this.$axios.$get("https://api.octavues.me/admin");case 8:return n=t.sent,t.next=11,this.$store.dispatch("profile",n.data.user);case 11:this.$router.push("/admin");case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),passwordUpdate:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e={oldpassword:this.oldpassword,password:this.password,confirmation:this.confirmation},t.next=4,this.$axios.$post("https://api.octavues.me/admin/password/"+this.data._id,e);case 4:t.sent.success&&(this.$cookies.removeAll(),this.$store.dispatch("logout"),this.$router.push("/login")),this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=(n(315),n(8)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"#222222",dark:"","show-arrows":""}},[n("v-tabs-slider",{attrs:{color:"#cccccc"}}),t._v(" "),n("v-tab",[t._v("profile")]),t._v(" "),n("v-tab",[t._v("name")]),t._v(" "),n("v-tab",[t._v("social")]),t._v(" "),n("v-tab",[t._v("password")]),t._v(" "),n("v-tabs-items",[n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-text-field",{attrs:{disable:t.loading,label:"Insert Your Image"},model:{value:t.data.img1,callback:function(e){t.$set(t.data,"img1",e)},expression:"data.img1"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Insert Your Image"},model:{value:t.data.img2,callback:function(e){t.$set(t.data,"img2",e)},expression:"data.img2"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Admin Avataaar"},model:{value:t.data.avatar,callback:function(e){t.$set(t.data,"avatar",e)},expression:"data.avatar"}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",small:"",color:"success",disable:t.loading},on:{click:function(e){return t.imgUpdate()}}},[t._v("\n                  send\n            ")])],1)],1)],1),t._v(" "),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-text-field",{attrs:{disable:t.loading,label:"Firstname"},model:{value:t.data.firstname,callback:function(e){t.$set(t.data,"firstname",e)},expression:"data.firstname"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Lastname"},model:{value:t.data.lastname,callback:function(e){t.$set(t.data,"lastname",e)},expression:"data.lastname"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Title, Team Role"},model:{value:t.data.role,callback:function(e){t.$set(t.data,"role",e)},expression:"data.role"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Email"},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",small:"",color:"success",disable:t.loading},on:{click:function(e){return t.mainUpdate()}}},[t._v("\n                  send\n            ")])],1)],1)],1),t._v(" "),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-text-field",{attrs:{disable:t.loading,label:"Facebook"},model:{value:t.data.facebook,callback:function(e){t.$set(t.data,"facebook",e)},expression:"data.facebook"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Instagram"},model:{value:t.data.instagram,callback:function(e){t.$set(t.data,"instagram",e)},expression:"data.instagram"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Twitter"},model:{value:t.data.twitter,callback:function(e){t.$set(t.data,"twitter",e)},expression:"data.twitter"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,label:"Bio"},model:{value:t.data.bio,callback:function(e){t.$set(t.data,"bio",e)},expression:"data.bio"}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",small:"",color:"success",disable:t.loading},on:{click:function(e){return t.socialUpdate()}}},[t._v("\n                  send\n            ")])],1)],1)],1),t._v(" "),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-text-field",{attrs:{disable:t.loading,type:"password",label:"Old Password"},model:{value:t.oldpassword,callback:function(e){t.oldpassword=e},expression:"oldpassword"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,type:"password",label:"New Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-text-field",{attrs:{disable:t.loading,type:"password",label:"Confirm Password"},model:{value:t.confirmation,callback:function(e){t.confirmation=e},expression:"confirmation"}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",small:"",color:"success",disable:t.loading},on:{click:function(e){return t.passwordUpdate()}}},[t._v("\n                  send\n            ")])],1)],1)],1)],1)],1)],1)},[],!1,null,"2281d726",null);e.default=component.exports}}]);