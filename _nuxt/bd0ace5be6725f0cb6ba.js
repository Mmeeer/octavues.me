(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{215:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("39e9db43",content,!0,{sourceMap:!1})},216:function(t,e,o){var content=o(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("14763534",content,!0,{sourceMap:!1})},218:function(t,e,o){"use strict";var n={props:["word","to","dark"]},r=(o(241),o(8)),component=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("nuxt-link",{staticClass:"btn",class:{"btn-dark":this.dark},attrs:{to:this.to}},[this._v("\n    "+this._s(this.word)+"\n  ")])],1)},[],!1,null,"1e4c522b",null);e.a=component.exports},219:function(t,e,o){"use strict";o(39);var n=o(5),r={props:["dark","white"],data:function(){return{email:""}},methods:{submit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={email:this.email},t.next=3,this.$axios.$post("https://api.octavues.me/subscribe",e);case 3:t.sent.success&&(this.email="");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},c=(o(224),o(8)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"octa-input"},[o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{md8:"",xs12:""}},[1==t.white?o("v-text-field",{attrs:{label:"Email",color:"white",required:"",dark:1==t.dark},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}):o("v-text-field",{attrs:{label:"Email",color:"purple",required:"",dark:1==t.dark},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("v-flex",{staticClass:"octa-center",attrs:{md4:"",xs12:""}},[o("v-btn",{attrs:{round:"",color:"purple",dark:""},on:{click:function(e){return t.submit()}}},[t._v("Subscribe")])],1)],1)],1)],1)},[],!1,null,"2299bed0",null);e.a=component.exports},220:function(t,e,o){var content=o(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("09bbf3ec",content,!0,{sourceMap:!1})},221:function(t,e,o){var content=o(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("d6c6d9ec",content,!0,{sourceMap:!1})},222:function(t,e,o){var content=o(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("0388e111",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";var n={props:["data","img"],components:{octainput:o(219).a}},r=(o(226),o(8)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{staticClass:"fixer"},[o("div",{staticClass:"octa-footer",class:{nobackground:0==t.img}},[o("div",{staticClass:"octa-footer-content"},[o("div",{staticClass:"octa-footer-link"},[o("div",{staticClass:"octa-footer-linker"},[o("h1",[t._v(t._s(t.data.home.title))]),t._v(" "),t._l(t.data.home.links,function(e,n){return o("nuxt-link",{key:n,staticClass:"octa-footer-nav-link",attrs:{to:e.to}},[t._v(t._s(e.link))])})],2),t._v(" "),o("div",{staticClass:"octa-footer-linker"},[o("h1",[t._v(t._s(t.data.sub.title))]),t._v(" "),o("span",{staticClass:"octa-footer-motto"},[o("octainput",{attrs:{dark:!0,white:!0}})],1)]),t._v(" "),o("div",{staticClass:"octa-footer-linker"},[o("h1",[t._v(t._s(t.data.pro.title))]),t._v(" "),t._l(t.data.pro.links,function(e,n){return o("nuxt-link",{key:n,staticClass:"octa-footer-nav-link",attrs:{to:e.to}},[t._v(t._s(e.link))])})],2),t._v(" "),o("div",{staticClass:"octa-footer-linker"},[o("span",{staticClass:"octa-footer-motto"},[t._v(t._s(t.data.motto))])])])]),t._v(" "),o("div",{staticClass:"octa-footer-desc"},[o("span",{staticClass:"octa-footer-copyright"},[t._v("\n          Powered by Octavues\n          "),o("span",[t._v("|")]),t._v(" Copyright © 2019\n        ")])])])])],1)},[],!1,null,"71f1b928",null);e.a=component.exports},224:function(t,e,o){"use strict";var n=o(215);o.n(n).a},225:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,".octa-center[data-v-2299bed0]{display:flex;flex-direction:column;align-items:center;justify-content:center}",""])},226:function(t,e,o){"use strict";var n=o(216);o.n(n).a},227:function(t,e,o){e=t.exports=o(13)(!1);var n=o(124)(o(228));e.push([t.i,'.nobackground[data-v-71f1b928]{background-image:none!important}.fixer[data-v-71f1b928]{z-index:0}.octa-footer-motto[data-v-71f1b928]{height:100%;margin:20px;font-family:Montserrat,"sans-serif";font-weight:500;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928]{color:#fff;margin:0 0 5px 40px}.octa-footer-linker h1[data-v-71f1b928]{margin:40px 0 20px 40px}.octa-footer-linker[data-v-71f1b928]{width:100%;height:100%;background-color:#353535;color:#fff;font-family:Montserrat,"sans-serif";font-weight:500;display:flex;flex-direction:column}.octa-footer-link[data-v-71f1b928]{max-width:960px;margin:auto;display:grid;box-shadow:0 0 10px 5px rgba(0,0,0,.3)}.octa-footer-copyright span[data-v-71f1b928]{font-weight:700;padding:0 4px}.octa-footer-copyright[data-v-71f1b928]{color:#fff;font-family:Montserrat,"sans-serif"}.octa-footer[data-v-71f1b928]{background-image:url('+n+");background-size:cover;background-position:50%;display:grid}.octa-footer-content[data-v-71f1b928],.octa-footer-desc[data-v-71f1b928]{display:flex;flex-direction:column;justify-content:center;align-items:center}.octa-footer-desc[data-v-71f1b928]{height:50px;background-color:#353535}@media only screen and (min-width:961px){.octa-footer[data-v-71f1b928]{height:100vh;grid-template-rows:auto 50px}.octa-footer-link[data-v-71f1b928]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.octa-footer-copyright[data-v-71f1b928]{font-size:14px;font-weight:500;line-height:16px}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928],.octa-footer-motto[data-v-71f1b928]{font-size:16px;line-height:16px}.octa-footer-linker h1[data-v-71f1b928]{font-size:24px;line-height:24px}}@media only screen and (min-width:601px) and (max-width:960px){.octa-footer[data-v-71f1b928]{padding:20px;grid-template-rows:auto 50px}.octa-footer-copyright[data-v-71f1b928]{font-size:12px;font-weight:500;line-height:12px}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928],.octa-footer-motto[data-v-71f1b928]{font-size:16px;line-height:16px}.octa-footer-linker h1[data-v-71f1b928]{font-size:20px;line-height:20px}}@media only screen and (max-width:600px){.octa-footer[data-v-71f1b928]{grid-template-rows:auto 50px}.octa-footer-copyright[data-v-71f1b928]{font-size:10px;font-weight:500;line-height:10px}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928],.octa-footer-motto[data-v-71f1b928]{font-size:14px;line-height:14px}.octa-footer-linker h1[data-v-71f1b928]{font-size:16px;line-height:16px}}",""])},228:function(t,e,o){t.exports=o.p+"img/fc536d5.png"},236:function(t,e,o){var content=o(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("a34b26b6",content,!0,{sourceMap:!1})},240:function(t,e,o){"use strict";var n={props:["button","title"],components:{Octabutton:o(218).a}},r=(o(243),o(8)),c={props:["data"],components:{Title:Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{staticClass:"fixer sizesize"},[o("div",{staticClass:"octa-section"},[o("span",{staticClass:"octa-wave-left"}),t._v(" "),o("span",{staticClass:"octa-tosection-content"},[o("span",{staticClass:"octa-tosection-title"},[t._v(t._s(t.title))]),t._v(" "),o("span",{staticClass:"octa-underline"})]),t._v(" "),o("span",{staticClass:"octa-wave-right"})]),t._v(" "),t.button?o("div",{staticClass:"octa-btn-center"},[o("Octabutton",{attrs:{word:t.button.word,to:t.button.to}})],1):t._e()])],1)},[],!1,null,"839cd3d6",null).exports}},l=(o(246),Object(r.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"octa-rel"},[o("v-flex",{staticClass:"fixer"},[t.data.button?o("v-parallax",{attrs:{dark:"",height:"210",src:t.data.img}},[o("div",{staticClass:"unseen"},[t.data.button?o("Title",{attrs:{button:t.data.button,title:t.data.title}}):o("Title",{attrs:{title:t.data.title}})],1)]):o("v-parallax",{attrs:{dark:"",height:"150",src:t.data.img}},[o("div",{staticClass:"unseen"},[t.data.button?o("Title",{attrs:{button:t.data.button,title:t.data.title}}):o("Title",{attrs:{title:t.data.title}})],1)])],1),t._v(" "),o("div",{staticClass:"octa-abs"},[o("div",{staticClass:"octa-container"},[t.data.button?o("Title",{attrs:{button:t.data.button,title:t.data.title}}):o("Title",{attrs:{title:t.data.title}})],1)])],1)},[],!1,null,"0b78ceac",null));e.a=l.exports},241:function(t,e,o){"use strict";var n=o(220);o.n(n).a},242:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,".btn[data-v-1e4c522b]{color:#fff;border-radius:48px;font-size:20px;font-weight:700;border:4px solid #fff;margin:5px;padding:2.5px 25px}.btn[data-v-1e4c522b]:hover{background:#fff;color:#222;transition:all .3s ease}.btn-dark[data-v-1e4c522b]{color:#222;border:4px solid #222}.btn-dark[data-v-1e4c522b]:hover{background:#222;color:#fff}",""])},243:function(t,e,o){"use strict";var n=o(221);o.n(n).a},244:function(t,e,o){e=t.exports=o(13)(!1);var n=o(124)(o(245));e.push([t.i,'.octa-btn-center[data-v-839cd3d6]{margin-top:40px;display:flex;flex-direction:column;justify-content:center;align-items:center}.octa-underline[data-v-839cd3d6]{width:100%;height:8px;background-color:#fff;border-radius:8px}.octa-tosection-title[data-v-839cd3d6]{color:#fff;font-size:64px;font-family:Montserrat,"sans-serif";text-transform:uppercase;font-weight:700;line-height:64px;text-align:center}.octa-tosection-content[data-v-839cd3d6]{display:grid;grid-template-rows:auto auto}.octa-section[data-v-839cd3d6]{display:grid;grid-template-columns:1fr auto 1fr;grid-gap:10px}.sizesize[data-v-839cd3d6]{padding:40px 10px}@media only screen and (min-width:601px){.octa-wave-left[data-v-839cd3d6]{transform:rotate(180deg)}.octa-wave-left[data-v-839cd3d6],.octa-wave-right[data-v-839cd3d6]{padding-left:10px;padding-right:10px;background-image:url('+n+");background-size:contain;background-position:50%}}",""])},245:function(t,e,o){t.exports=o.p+"img/f7194c4.png"},246:function(t,e,o){"use strict";var n=o(222);o.n(n).a},247:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,".unseen[data-v-0b78ceac]{opacity:0}.fixer[data-v-0b78ceac]{z-index:0}.octa-container[data-v-0b78ceac]{max-width:960px;margin:auto}.octa-rel[data-v-0b78ceac]{position:relative}.octa-abs[data-v-0b78ceac]{position:absolute;width:100%;height:100%;top:0;left:0;z-index:0;background:rgba(0,0,0,.5)}",""])},264:function(t,e,o){"use strict";var n=o(236);o.n(n).a},265:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,'.fixer[data-v-06c3614d]{z-index:0}.octa-content h1[data-v-06c3614d]{color:#ff2d55;font-size:32px;font-weight:700;line-height:32px}.octa-content h1[data-v-06c3614d],.octa-content p[data-v-06c3614d]{font-family:Montserrat,"sans-serif"}.octa-content p[data-v-06c3614d]{color:#222;font-size:16px;font-weight:300;line-height:16px;margin-top:20px;margin-bottom:20px}.octa-content[data-v-06c3614d]{padding:25px;background:#fff}.octa-grid-button[data-v-06c3614d]{display:grid;grid-template-columns:1fr auto;grid-gap:5px}.octa-button-decoration[data-v-06c3614d]{display:flex;flex-direction:column;justify-content:center;align-items:center}.octa-button-decoration span[data-v-06c3614d]{height:5px;border-radius:5px;width:100%;background-color:#222}@media only screen and (min-width:961px){.octa-projects[data-v-06c3614d]{display:grid;grid-template:"left right";grid-template-columns:1fr 1fr}.trueleft[data-v-06c3614d]{grid-area:left}.trueright[data-v-06c3614d]{grid-area:right}}',""])},296:function(t,e,o){"use strict";var n={props:["data"],components:{Button:o(218).a}},r=(o(264),o(8)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{staticClass:"fixer"},[o("v-flex",t._l(t.data,function(e,n){return o("div",{key:n,staticClass:"octa-projects"},[o("div",{staticClass:"octa-image",class:{trueleft:n%2==1,trueright:!(n%2==1)}},[o("v-parallax",{attrs:{height:"300",src:e.image}})],1),t._v(" "),o("div",{staticClass:"octa-content",class:{trueright:n%2==1,trueleft:!(n%2==1)}},[o("h1",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.description))]),t._v(" "),o("div",{staticClass:"octa-grid-button"},[o("div",{staticClass:"octa-button-decoration"},[o("span")]),t._v(" "),o("div",[o("Button",{attrs:{word:"See More",to:"/projects/"+e._id,dark:!0}})],1)])])])}),0)],1)},[],!1,null,"06c3614d",null);e.a=component.exports},375:function(t,e,o){"use strict";o.r(e);o(22),o(39);var n=o(5),r=o(296),c=o(240),footer=o(223),l={transition:"intro",data:function(){return{footer:{home:{title:"Quick Links",links:[{link:"Home",to:"/"},{link:"Events",to:"/events"},{link:"Blog",to:"/blog"},{link:"Projects",to:"/projects"},{link:"Timeline",to:"/timeline"},{link:"About us",to:"/aboutus"},{link:"Login & Signup",to:"/login"},{link:"Contact us",to:"/contactus"}]},sub:{title:"Recieve News From Us"},pro:{title:"Projects",links:[{link:"Octavues",to:"#"},{link:"Medremj",to:"#"},{link:"TOEFL",to:"#"}]},motto:"What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"},header:{title:"Projects",img:"https://api.octavues.me/assets/static/project.png"}}},components:{Projects:r.a,ToSection:c.a,Footer:footer.a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var o,n,r,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$axios,n=e.redirect,t.next=3,o.$get("https://api.octavues.me/projects");case 3:if(1!=(r=t.sent).success){t.next=9;break}return data={projects:r.data.projects},t.abrupt("return",new Promise(function(t){setTimeout(function(){t(data)},4e3)}));case 9:n("/404");case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=o(8),component=Object(d.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticStyle:{"z-index":"0"},attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("ToSection",{attrs:{data:this.header}})],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[this.projects?e("Projects",{attrs:{data:this.projects}}):this._e()],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("Footer",{attrs:{data:this.footer}})],1)],1)},[],!1,null,"1fcc646e",null);e.default=component.exports}}]);