(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{401:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(41),n(0).a.extend({name:"PrivacyPolicy",layout:"default",head:function(){return{title:this.privacyPolicy.data.tab_title,meta:[{hid:"og:title",name:"og:title",content:this.privacyPolicy.data.tab_title},{hid:"description",name:"description",content:this.privacyPolicy.data.page_description},{hid:"og:description",name:"og:description",content:this.privacyPolicy.data.page_description}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$prismic,r=t.error,e.next=3,n.api.getSingle("privacy_policy");case 3:if(!(c=e.sent)){e.next=8;break}return e.abrupt("return",{privacyPolicy:c});case 8:r({statusCode:404,message:"Page not found"});case 9:case"end":return e.stop()}}),e)})))()}})),o=n(64),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("pre",[t._v("  "+t._s(t.privacyPolicy.data)+"\n")])}),[],!1,null,"1aa0c438",null);e.default=component.exports}}]);