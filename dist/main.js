!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("h3"),c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),m=(document.createElement("input"),document.createElement("button")),s=(document.createElement("button"),document.createElement("div")),u=document.createElement("div"),y=document.createElement("div"),E=document.createElement("div"),h=(document.getElementById("row-container"),document.getElementById("btn-add-list"),document.getElementById("add-text"),document.getElementById("task-container"),document.createElement("div"),document.createElement("ul")),C=document.createElement("li"),f=document.createElement("li"),v=document.createElement("li"),x=document.createElement("li"),b=document.createElement("li"),M=(o.id="nav-container",r.textContent="Lists",c.id="btn-add-list",r.id="nav-title",l.id="list-container",p.innerText="+ Add List",p.id="add-text",e.appendChild(o),c.appendChild(p),o.appendChild(r),o.appendChild(c),o.appendChild(l),void d.appendChild(o));(()=>{a.id="messages",a.className="d-none",d.id="row-container",n.id="content-container",t.id="header-container",e.id="main-container",i.id="todo-container",t.textContent="To Do Task Manager",s.textContent="Tasks To Do",s.id="todo-title-container",m.id="btn-list-plus",m.innerText="+",E.id="tasks-container",y.id="task-container",m.innerText="+",m.id="add-task-btn",u.id="todo-list-content",s.textContent="Tasks To Do",s.id="todo-title-container",d.appendChild(i),document.body.appendChild(e),e.appendChild(t),e.appendChild(a),e.appendChild(n),n.appendChild(d);const o=document.getElementById("todo-container");o.appendChild(s),o.appendChild(u),o.appendChild(y),o.appendChild(E),s.appendChild(m)})(),(()=>{const e=document.createElement("div"),t=document.getElementById("task-container");e.id="toDo-item-container",e.style.width="100%",h.className="navbar",b.textContent="Action",C.textContent="Done?",C.className="header-task-table",f.className="header-task-table",v.className="header-task-table",x.className="header-task-table",b.className="header-task-table",f.textContent="Title",v.textContent="Description",x.textContent="Due Date",h.id="title-task-container",h.appendChild(C),h.appendChild(f),h.appendChild(v),h.appendChild(x),h.appendChild(b),e.appendChild(h),t.appendChild(e)})()})(),localStorage.setItem("My project Example",JSON.stringify([{id:1,title:"My Task 1",description:"My Description Example",priority:"1",date:"01-01-20",done:!0},{id:"2",title:"My Task 2",description:"My Description Example 2",priority:"2",date:"2020-02-01",done:!1},{id:"3",title:"My Task 3",description:"My Description Example 3",priority:"3",date:"2020-01-01",done:!0},{id:"4",title:"My Task 4",description:"My Description Example 4",priority:"1",date:"30-02-20",done:!1}])),localStorage.setItem("My Personal List",JSON.stringify([{id:1,title:"My Task 1",description:"My Description Example",priority:"3",date:"01-01-20",done:!1},{id:"2",title:"My Task 2",description:"My Description Example 2",priority:"1",date:"2020-02-01",done:!1},{id:"3",title:"My Task 3",description:"My Description Example 3",priority:"1",date:"2020-01-01",done:!0},{id:"4",title:"My Task 4",description:"My Description Example 4",priority:"2",date:"30-02-20",done:!1}]))}]);