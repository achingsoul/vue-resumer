webpackJsonp([1],{112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},118:function(e,t,n){function r(e){n(112)}var i=n(4)(n(60),n(125),r,null,null);e.exports=i.exports},119:function(e,t,n){var r=n(4)(n(61),n(126),null,null,null);e.exports=r.exports},120:function(e,t,n){function r(e){n(114)}var i=n(4)(n(62),n(128),r,null,null);e.exports=i.exports},121:function(e,t,n){function r(e){n(117),n(116)}var i=n(4)(n(63),n(130),r,null,null);e.exports=i.exports},122:function(e,t,n){var r=n(4)(n(64),n(124),null,null,null);e.exports=r.exports},123:function(e,t,n){function r(e){n(113)}var i=n(4)(n(65),n(127),r,null,null);e.exports=i.exports},124:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("个人信息")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{model:{value:e.profile.name,callback:function(t){e.profile.name=t},expression:"profile.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"城市"}},[n("el-input",{model:{value:e.profile.city,callback:function(t){e.profile.city=t},expression:"profile.city"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"出生年月"}},[n("el-input",{model:{value:e.profile.birth,callback:function(t){e.profile.birth=t},expression:"profile.birth"}})],1)],1)],1)},staticRenderFns:[]}},125:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("el-form",[e._l(e.items,function(t,r){return n("div",{key:r,staticClass:"container"},[e._l(e.keys,function(r){return n("el-form-item",{key:r,attrs:{label:e.labels[r]||r}},[n("el-input",{model:{value:t[r],callback:function(n){e.$set(t,r,n)},expression:"work[key]"}})],1)}),e._v(" "),n("i",{staticClass:"el-icon-delete2",on:{click:function(t){e.removeWorkExperience(r)}}}),e._v(" "),n("hr")],2)}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.addWorkExperience}},[e._v("添加")])],2)],1)},staticRenderFns:[]}},126:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("联系方式")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"电话"}},[n("el-input",{model:{value:e.contacts.phone,callback:function(t){e.contacts.phone=t},expression:"contacts.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"QQ"}},[n("el-input",{model:{value:e.contacts.qq,callback:function(t){e.contacts.qq=t},expression:"contacts.qq"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{model:{value:e.contacts.email,callback:function(t){e.contacts.email=t},expression:"contacts.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"微信"}},[n("el-input",{model:{value:e.contacts.wechat,callback:function(t){e.contacts.wechat=t},expression:"contacts.wechat"}})],1)],1)],1)},staticRenderFns:[]}},127:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"logo"},[e._v("\n        VueResumer\n    ")]),e._v(" "),n("div",{staticClass:"actions"},[n("el-button",{attrs:{type:"primary"}},[e._v("注册")]),e._v(" "),n("el-button",[e._v("登录")]),e._v(" "),n("el-button",{on:{click:e.preview}},[e._v("预览")])],1)])},staticRenderFns:[]}},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("nav",[n("ol",e._l([0,1,2,3,4,5],function(t){return n("li",{class:{active:e.currentTab===t},on:{click:function(n){e.currentTab=t}}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+e.icons[t]}})])])}))]),e._v(" "),n("ol",{staticClass:"panes"},[n("li",{class:{active:0===e.currentTab}},[n("ProfileEditor",{attrs:{profile:e.resume.profile}})],1),e._v(" "),n("li",{class:{active:1===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.workExperience,labels:{company:"公司",content:"工作内容"},title:"工作经历"}})],1),e._v(" "),n("li",{class:{active:2===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.studyHistory,labels:{school:"学校",duration:"时间",degree:"学位"},title:"学习经历"}})],1),e._v(" "),n("li",{class:{active:3===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.projectHistory,labels:{name:"项目名称",content:"项目内容"},title:"项目经历"}})],1),e._v(" "),n("li",{class:{active:4===e.currentTab}},[n("ArrayEditor",{attrs:{items:e.resume.awardsHistory,labels:{award:"奖项",content:"详情"},title:"获奖情况"}})],1),e._v(" "),n("li",{class:{active:5===e.currentTab}},[n("ContactsEditor",{attrs:{contacts:e.resume.contacts}})],1)])])},staticRenderFns:[]}},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[n("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),n("main",[n("Editor",{staticClass:"editor",attrs:{resume:e.resume}}),e._v(" "),n("Preview",{staticClass:"preview",attrs:{resume:e.resume}})],1),e._v(" "),n("el-button",{attrs:{id:"exitPreview"},on:{click:e.exitPreview}},[e._v("退出预览")])],1)},staticRenderFns:[]}},130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"preview"}},[n("h1",[e._v("面试简历 - "+e._s(e.resume.profile.name||"姓名"))]),e._v(" "),n("h2",[e._v("基本信息")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.profile.name||"姓名"))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.profile.city||"城市"))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.profile.birth||"出生年月"))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.contacts.phone||"电话"))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.contacts.qq||"QQ"))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.contacts.email||"邮箱"))]),e._v(" "),n("br"),e._v(" "),n("p",[e._v(e._s(e.resume.contacts.wechat||"微信"))]),e._v(" "),n("br"),e._v(" "),e.filter(e.resume.workExperience).length>0?n("section",[n("h2",[e._v("工作经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.workExperience),function(t){return n("li",[e._v("\n        "+e._s(t.company)+"\n        "),n("br"),e._v(" \n        "+e._s(t.content)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume.studyHistory).length>0?n("section",[n("h2",[e._v("学习经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.studyHistory),function(t){return n("li",[e._v("\n        "+e._s(t.school)+"\n        "),n("br"),e._v(" \n        "+e._s(t.duration)+"\n        "),n("br"),e._v(" \n        "+e._s(t.degree)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume.projectHistory).length>0?n("section",[n("h2",[e._v("项目经历")]),e._v(" "),n("ul",e._l(e.filter(e.resume.projectHistory),function(t){return n("li",[e._v("\n        "+e._s(t.name)+"\n        "),n("br"),e._v(" \n        "+e._s(t.content)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume.awardsHistory).length>0?n("section",[n("h2",[e._v("获奖情况")]),e._v(" "),n("ul",e._l(e.filter(e.resume.awardsHistory),function(t){return n("li",[e._v("\n        "+e._s(t.award)+"\n        "),n("br"),e._v(" \n        "+e._s(t.content)+"\n      ")])}))]):e._e()])},staticRenderFns:[]}},33:function(e,t){},34:function(e,t){},35:function(e,t){},36:function(e,t,n){function r(e){n(115)}var i=n(4)(n(59),n(129),r,null,null);e.exports=i.exports},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(123),i=n.n(r),s=n(120),o=n.n(s),c=n(121),a=n.n(c);t.default={data:function(){return{previewMode:!1,resume:{profile:{name:"",city:"",birth:""},workExperience:[{company:"",content:""}],studyHistory:[{school:"",duration:"",degree:""}],projectHistory:[{name:"",content:""}],awardsHistory:[{award:"",content:""}],contacts:{phone:"",qq:"",email:"",wechat:""}}}},methods:{exitPreview:function(){this.previewMode=!1},preview:function(){this.previewMode=!0}},components:{Topbar:i.a,Editor:o.a,Preview:a.a}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67),i=n.n(r);t.default={props:["items","labels","title"],computed:{keys:function(){return i()(this.items[0])}},methods:{addWorkExperience:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push(e)},removeWorkExperience:function(e){this.items.splice(e,1)}}}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["contacts"]}},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(122),i=n.n(r),s=n(118),o=n.n(s),c=n(119),a=n.n(c);t.default={components:{ProfileEditor:i.a,ArrayEditor:o.a,ContactsEditor:a.a},props:["resume"],data:function(){return{currentTab:0,icons:["id-card","WORK","Book-Open","heart","jiangbei","phone"]}}}},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var n in e)if(e[n]){t=!1;break}return t}}}},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["profile"]}},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{preview:function(){this.$emit("preview")}}}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(36),s=n.n(i),o=n(34),c=(n.n(o),n(35)),a=(n.n(c),n(32)),l=n.n(a),u=n(33);n.n(u);r.default.use(l.a),r.default.config.productionTip=!1,new r.default({el:"#app",template:"<App/>",components:{App:s.a}})}},[66]);
//# sourceMappingURL=app.8131a31d351bbe8f839c.js.map