webpackJsonp([1],{112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},118:function(e,t,r){function n(e){r(112)}var i=r(4)(r(60),r(125),n,null,null);e.exports=i.exports},119:function(e,t,r){var n=r(4)(r(61),r(126),null,null,null);e.exports=n.exports},120:function(e,t,r){function n(e){r(114)}var i=r(4)(r(62),r(128),n,null,null);e.exports=i.exports},121:function(e,t,r){function n(e){r(117),r(116)}var i=r(4)(r(63),r(130),n,null,null);e.exports=i.exports},122:function(e,t,r){var n=r(4)(r(64),r(124),null,null,null);e.exports=n.exports},123:function(e,t,r){function n(e){r(113)}var i=r(4)(r(65),r(127),n,null,null);e.exports=i.exports},124:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("个人信息")]),e._v(" "),r("el-form",[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:e.profile.name,callback:function(t){e.profile.name=t},expression:"profile.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"城市"}},[r("el-input",{model:{value:e.profile.city,callback:function(t){e.profile.city=t},expression:"profile.city"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出生年月"}},[r("el-input",{model:{value:e.profile.birth,callback:function(t){e.profile.birth=t},expression:"profile.birth"}})],1)],1)],1)},staticRenderFns:[]}},125:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.title))]),e._v(" "),r("el-form",[e._l(e.items,function(t,n){return r("div",{key:n,staticClass:"container"},[e._l(e.keys,function(n){return r("el-form-item",{key:n,attrs:{label:e.labels[n]||n}},[r("el-input",{model:{value:t[n],callback:function(r){e.$set(t,n,r)},expression:"work[key]"}})],1)}),e._v(" "),r("i",{staticClass:"el-icon-delete2",on:{click:function(t){e.removeWorkExperience(n)}}}),e._v(" "),r("hr")],2)}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addWorkExperience}},[e._v("添加")])],2)],1)},staticRenderFns:[]}},126:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("联系方式")]),e._v(" "),r("el-form",[r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{model:{value:e.contacts.phone,callback:function(t){e.contacts.phone=t},expression:"contacts.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"QQ"}},[r("el-input",{model:{value:e.contacts.qq,callback:function(t){e.contacts.qq=t},expression:"contacts.qq"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{model:{value:e.contacts.email,callback:function(t){e.contacts.email=t},expression:"contacts.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信"}},[r("el-input",{model:{value:e.contacts.wechat,callback:function(t){e.contacts.wechat=t},expression:"contacts.wechat"}})],1)],1)],1)},staticRenderFns:[]}},127:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"topbar"}},[r("div",{staticClass:"logo"},[e._v("\n        VueResumer\n    ")]),e._v(" "),r("div",{staticClass:"actions"},[r("el-button",{attrs:{type:"primary"}},[e._v("注册")]),e._v(" "),r("el-button",[e._v("登录")]),e._v(" "),r("el-button",{on:{click:e.preview}},[e._v("预览")])],1)])},staticRenderFns:[]}},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"editor"}},[r("nav",[r("ol",e._l([0,1,2,3,4,5],function(t){return r("li",{class:{active:e.currentTab===t},on:{click:function(r){e.currentTab=t}}},[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),r("ol",{staticClass:"panes"},[r("li",{class:{active:0===e.currentTab}},[r("ProfileEditor",{attrs:{profile:e.resume.profile}})],1),e._v(" "),r("li",{class:{active:1===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.workExperience,labels:{company:"公司",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),r("li",{class:{active:2===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.studyHistory,labels:{school:"学校",duration:"时间",degree:"学位"},title:"学习经历"}})],1),e._v(" "),r("li",{class:{active:3===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.projectHistory,labels:{name:"项目名称",content:"项目内容"},title:"项目经历"}})],1),e._v(" "),r("li",{class:{active:4===e.currentTab}},[r("ArrayEditor",{attrs:{items:e.resume.awardsHistory,labels:{award:"奖项",content:"详情"},title:"获奖情况"}})],1),e._v(" "),r("li",{class:{active:5===e.currentTab}},[r("ContactsEditor",{attrs:{contacts:e.resume.contacts}})],1)])])},staticRenderFns:[]}},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[r("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),r("main",[r("Editor",{staticClass:"editor",attrs:{resume:e.resume}}),e._v(" "),r("Preview",{staticClass:"preview",attrs:{resume:e.resume}})],1),e._v(" "),r("el-button",{attrs:{id:"exitPreview"},on:{click:e.exitPreview}},[e._v("退出预览")])],1)},staticRenderFns:[]}},130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"preview"}},[r("h1",[e._v("面试简历 - "+e._s(e.resume.profile.name||"姓名"))]),e._v(" "),r("h2",[e._v("基本信息")]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("姓名："+e._s(e.resume.profile.name))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("城市："+e._s(e.resume.profile.city))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("出生年月："+e._s(e.resume.profile.birth))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("电话："+e._s(e.resume.contacts.phone))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("QQ："+e._s(e.resume.contacts.qq))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("邮箱："+e._s(e.resume.contacts.email))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("微信："+e._s(e.resume.contacts.wechat))]),e._v(" "),r("br"),e._v(" "),e.filter(e.resume.workExperience).length>0?r("section",[r("h2",[e._v("工作经历")]),e._v(" "),r("ul",e._l(e.filter(e.resume.workExperience),function(t){return r("li",[r("p",[e._v("公司："+e._s(t.company))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("工作内容："+e._s(t.content))])])}))]):e._e(),e._v(" "),e.filter(e.resume.studyHistory).length>0?r("section",[r("h2",[e._v("学习经历")]),e._v(" "),r("ul",e._l(e.filter(e.resume.studyHistory),function(t){return r("li",[r("p",[e._v("学校："+e._s(t.school))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("时间："+e._s(t.duration))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("学位："+e._s(t.degree))])])}))]):e._e(),e._v(" "),e.filter(e.resume.projectHistory).length>0?r("section",[r("h2",[e._v("项目经历")]),e._v(" "),r("ul",e._l(e.filter(e.resume.projectHistory),function(t){return r("li",[r("p",[e._v("项目名称："+e._s(t.name))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("项目内容："+e._s(t.content))])])}))]):e._e(),e._v(" "),e.filter(e.resume.awardsHistory).length>0?r("section",[r("h2",[e._v("获奖情况")]),e._v(" "),r("ul",e._l(e.filter(e.resume.awardsHistory),function(t){return r("li",[r("p",[e._v("奖项："+e._s(t.award))]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("详情："+e._s(t.content))])])}))]):e._e()])},staticRenderFns:[]}},33:function(e,t){},34:function(e,t){},35:function(e,t){},36:function(e,t,r){function n(e){r(115)}var i=r(4)(r(59),r(129),n,null,null);e.exports=i.exports},59:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(123),i=r.n(n),s=r(120),o=r.n(s),c=r(121),a=r.n(c);t.default={data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:""},workExperience:[{company:"",content:""}],studyHistory:[{school:"",duration:"",degree:""}],projectHistory:[{name:"",content:""}],awardsHistory:[{award:"",content:""}],contacts:{phone:"",qq:"",email:"",wechat:""}}}},methods:{exitPreview:function(){this.previewMode=!1},preview:function(){this.previewMode=!0}},components:{Topbar:i.a,Editor:o.a,Preview:a.a}}},60:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67),i=r.n(n);t.default={props:["items","labels","title"],computed:{keys:function(){return i()(this.items[0])}},methods:{addWorkExperience:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push(e)},removeWorkExperience:function(e){this.items.splice(e,1)}}}},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["contacts"]}},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(122),i=r.n(n),s=r(118),o=r.n(s),c=r(119),a=r.n(c);t.default={components:{ProfileEditor:i.a,ArrayEditor:o.a,ContactsEditor:a.a},props:["resume"],data:function(){return{currentTab:0,icons:["id-card","WORK","Book-Open","heart","jiangbei","phone"]}}}},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var r in e)if(e[r]){t=!1;break}return t}}}},64:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["profile"]}},65:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{preview:function(){this.$emit("preview")}}}},66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),i=r(36),s=r.n(i),o=r(34),c=(r.n(o),r(35)),a=(r.n(c),r(32)),l=r.n(a),u=r(33);r.n(u);n.default.use(l.a),n.default.config.productionTip=!1,new n.default({el:"#app",template:"<App/>",components:{App:s.a}})}},[66]);
//# sourceMappingURL=app.348a551b7066bbb3159f.js.map