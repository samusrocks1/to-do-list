(()=>{"use strict";function e(e,t){document.querySelector("#"+t).appendChild(function(e){const t=document.createElement("p");return t.textContent=e,t}(e))}function t(e){const t=document.createElement("div");t.id=e,document.body.appendChild(t)}function n(e,t){document.querySelector("#"+t).append(function(e){const t=document.createElement("button");return t.textContent=e,t.id=e,t}(e))}function o(e,t){const n=document.createElement("input"),o=document.createElement("lable");o.textContent=e,n.setAttribute("type","text"),n.setAttribute("value",""),n.id=e,document.querySelector("#"+t).appendChild(o),document.querySelector("#"+t).appendChild(n)}function i(e){const t=document.createElement("br");document.querySelector("#"+e).appendChild(t)}function c(e){document.getElementById(e).remove()}var d=[];function l(){c("container"),t("container");const o=document.querySelector("#container");for(let t=0;t<d.length;t++){const i=document.createElement("div");i.id=d[t].title,o.appendChild(i),e(d[t].project,d[t].title),e(d[t].title,d[t].title),e(d[t].description,d[t].title),e(d[t].dueDate,d[t].title),e(d[t].priority,d[t].title),e(d[t].notes,d[t].title),n("Edit "+d[t].title,d[t].title),document.getElementById("Edit "+d[t].title).onclick=function(){r(t)},n("Remove "+d[t].title,d[t].title),document.getElementById("Remove "+d[t].title).onclick=function(){u(t)}}}function u(e){d.splice(e,1)}function r(e){t("editTask"),o("Project ","editTask"),o("Title ","editTask"),o("Description ","editTask"),o("Due Date ","editTask"),o("Priority ","editTask"),o("Notes ","editTask"),document.getElementById("Project ").value=d[e].project,document.getElementById("Title ").value=d[e].title,document.getElementById("Description ").value=d[e].description,document.getElementById("Due Date ").value=d[e].dueDate,document.getElementById("Priority ").value=d[e].priority,document.getElementById("Notes ").value=d[e].notes,n("Submit Changes","editTask"),document.getElementById("Submit Changes").onclick=function(){!function(e,t,n,o,i,l,u){d[e].project=t,d[e].title=n,d[e].description=o,d[e].priority=l,d[e].dueDate=i,d[e].notes=u,c("editTask")}(e,document.getElementById("Project ").value,document.getElementById("Title ").value,document.getElementById("Description ").value,document.getElementById("Due Date ").value,document.getElementById("Priority ").value,document.getElementById("Notes ").value)}}t("toDoListOptions"),t("container"),n("Add task to the list","toDoListOptions"),document.querySelector("#content").appendChild(function(e){const t=document.createElement("h1");return t.textContent="Welcome to the To Do List Web Application!",t}()),e("Please use the buttons below to add and view to do list items.","content"),document.getElementById("Add task to the list").onclick=function(){c("container"),t("container"),o("Project","container"),i("container"),o("Title","container"),i("container"),o("Description","container"),i("container"),o("Due Date","container"),i("container"),o("Priority","container"),i("container"),o("Notes","container"),i("container"),n("Submit Item","container"),document.getElementById("Submit Item").onclick=function(){d[d.length]={project:document.getElementById("Project").value,title:document.getElementById("Title").value,description:document.getElementById("Description").value,dueDate:document.getElementById("Due Date").value,priority:document.getElementById("Priority").value,notes:document.getElementById("Notes").value},c("container"),t("container"),l()}},n("Display To Dos","toDoListOptions"),document.getElementById("Display To Dos").onclick=function(){l()}})();