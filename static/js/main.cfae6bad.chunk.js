(this["webpackJsonpredux-posts"]=this["webpackJsonpredux-posts"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(1),s=a(2),i=a(12),u=a(14),m=a(9),d=a.n(m),p=a(13);function E(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(l.b)();return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a.trim()){var t={title:a,id:Date.now().toString()};o({type:"POST/CREATE_POST",payload:t}),c(""),console.log(t)}}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Post title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Create"))}function v(e){var t=e.post;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title)))}function f(){var e=Object(l.c)((function(e){return e.posts}));return console.log(e),r.a.createElement(r.a.Fragment,null,!e.length&&r.a.createElement("p",{className:"text-center"},"No posts"),r.a.createElement("div",null,e.map((function(e){return r.a.createElement(v,{key:e.id,post:e})}))))}function h(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.fetchedPosts}));return console.log(t[0]),r.a.createElement(r.a.Fragment,null,!t.length&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),t({type:"FETCH/FETCH_POST",payload:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Load"),r.a.createElement("div",null,t.map((function(e){return console.log(e),r.a.createElement(v,{key:e.id,post:e})}))))}var b=function(){return r.a.createElement("div",{className:"container pt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(E,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Posts"),r.a.createElement(f,null)),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"FetchedPosts"),r.a.createElement(h,null))))},g=a(15),y=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/CREATE_POST":return[].concat(Object(g.a)(e),[t.payload]);default:return e}},fetchedPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH/FETCH_POST":return t.payload;default:return e}}});console.log(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=Object(s.d)(y,Object(s.a)(i.a));o.a.render(r.a.createElement(l.a,{store:O},r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.cfae6bad.chunk.js.map