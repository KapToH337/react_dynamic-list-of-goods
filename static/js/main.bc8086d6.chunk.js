(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),i=n(4),u=n(5),l=n(7),s=n(6),d=n(1),f=n.n(d);function m(t){var e=t.goodList;return a.a.createElement(a.a.Fragment,null,e.map((function(t){var e=t.id,n=t.color,o=t.name;return a.a.createElement("li",{key:e,style:{color:n}},o)})))}m.prototype={goodList:f.a.array,id:f.a.number,name:f.a.string,color:f.a.string};n(15);function g(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goodList:[]},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goodList;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",onClick:function(){g().then((function(e){t.setState({goodList:e})}))}},"Load All goods"),a.a.createElement("button",{type:"button",onClick:function(){g().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})).then((function(e){t.setState({goodList:e})}))}},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:function(){g().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(e){t.setState({goodList:e})}))}},"Load red goods"),a.a.createElement("ul",null,a.a.createElement(m,{goodList:e})))}}]),n}(a.a.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.bc8086d6.chunk.js.map