(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0be5b710"],{"0418":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeft,expression:"isLeft"}],staticClass:"header-button is-left"},[s("i",{staticClass:"fa fa-chevron-left"}),s("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])]),s("h4",{staticClass:"header-title"},[t._v(t._s(t.title))])])])},n=[],i={data:function(){return{}},props:{title:String,isLeft:{type:Boolean,default:!1}}},c=i,r=(s("0e51"),s("9ca4")),l=Object(r["a"])(c,a,n,!1,null,"7724e944",null);e["a"]=l.exports},"0e51":function(t,e,s){"use strict";var a=s("3fc0"),n=s.n(a);n.a},"0f71":function(t,e,s){},"3fc0":function(t,e,s){},"3fc07":function(t,e,s){"use strict";var a=s("0f71"),n=s.n(a);n.a},"67bc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remark"},[s("Header",{attrs:{isLeft:!0,title:"添加备注"}}),s("div",{staticClass:"view-body"},[s("section",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"填写额外对餐厅或骑手小哥备注的信息",maxlength:"100"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._l(t.radioItem,(function(e){return s("div",{key:e.name,staticClass:"switch"},[s("div",{staticClass:"switch-item item-line",class:{selected:1==e.select},on:{click:function(s){return t.selected(e)}}},[s("span",[t._v(t._s(e.name))])])])})),t._l(t.switchItem,(function(e,a){return s("div",{key:a,staticClass:"switch"},[s("span",{staticClass:"switch-item item-line",class:{selected:1==e.select},on:{click:function(t){e.select=!e.select}}},[s("span",[t._v(t._s(e.name))])])])})),s("button",{staticClass:"btn-submit",on:{click:t.submit}},[t._v("确定")])],2)])],1)},n=[],i=(s("fe59"),s("053b"),s("08ba"),s("0418")),c={neme:"Remark",data:function(){return{radioItem:[{select:!1,name:"不要辣"},{select:!1,name:"少点辣"},{select:!1,name:"多点辣"}],switchItem:[{select:!1,name:"不要香菜"},{select:!1,name:"不要洋葱"},{select:!1,name:"多点醋"},{select:!1,name:"多点葱"}],text:""}},methods:{selected:function(t){this.radioItem.forEach((function(t){t.select=!1})),t.select=!0},submit:function(){var t="";this.radioItem.forEach((function(e){e.select&&(t+=e.name+",")})),this.switchItem.forEach((function(e){e.select&&(t+=e.name+",")})),t+=this.text,this.$store.dispatch("setRemarkInfo",{tableware:this.$store.state.remarkInfo.tableware,remark:t}),this.$router.go(-1)}},components:{Header:i["a"]}},r=c,l=(s("3fc07"),s("9ca4")),o=Object(l["a"])(r,a,n,!1,null,"b191ddd2",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0be5b710.2577e794.js.map