!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h3"),c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),s=(document.createElement("input"),document.createElement("button")),m=(document.createElement("button"),document.createElement("div")),u=document.createElement("div"),y=document.createElement("div"),E=document.createElement("div"),f=(document.getElementById("row-container"),document.getElementById("btn-add-list"),document.getElementById("add-text"),r.id="nav-container",a.textContent="Lists",c.id="btn-add-list",a.id="nav-title",l.id="list-container",p.innerText="+ Add List",p.id="add-text",e.appendChild(r),c.appendChild(p),r.appendChild(a),r.appendChild(c),r.appendChild(l),void d.appendChild(r));(()=>{o.id="messages",o.className="d-none",d.id="row-container",n.id="content-container",t.id="header-container",e.id="main-container",i.id="todo-container",t.textContent="To Do Task Manager",m.textContent="Tasks To Do",m.id="todo-title-container",s.id="btn-list-plus",s.innerText="+",E.id="tasks-container",y.id="task-container",s.innerText="+",s.id="add-task-btn",u.id="todo-list-content",m.textContent="Tasks To Do",m.id="todo-title-container",d.appendChild(i),document.body.appendChild(e),e.appendChild(t),e.appendChild(o),e.appendChild(n),n.appendChild(d);const r=document.getElementById("todo-container");r.appendChild(m),r.appendChild(u),r.appendChild(y),r.appendChild(E),m.appendChild(s)})()})(),localStorage.setItem("My project Example",JSON.stringify([{id:1,title:"My Task 1",description:"My Description Example",priority:"1",date:"01-01-20",done:!0},{id:"2",title:"My Task 2",description:"My Description Example 2",priority:"2",date:"2020-02-01",done:!1},{id:"3",title:"My Task 3",description:"My Description Example 3",priority:"3",date:"2020-01-01",done:!0},{id:"4",title:"My Task 4",description:"My Description Example 4",priority:"1",date:"30-02-20",done:!1}])),localStorage.setItem("My Personal List",JSON.stringify([{id:1,title:"My Task 1",description:"My Description Example",priority:"3",date:"01-01-20",done:!1},{id:"2",title:"My Task 2",description:"My Description Example 2",priority:"1",date:"2020-02-01",done:!1},{id:"3",title:"My Task 3",description:"My Description Example 3",priority:"1",date:"2020-01-01",done:!0},{id:"4",title:"My Task 4",description:"My Description Example 4",priority:"2",date:"30-02-20",done:!1}]))}]);