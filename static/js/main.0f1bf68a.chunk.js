(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(39)},18:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(18),n(2)),u=n(11),l=n.n(u).a.create({baseURL:"https://api.openweathermap.org/data/2.5",headers:{"Content-Type":"application/json"}});l.interceptors.response.use(void 0,function(e){return e.response?alert(e.response.data.message):alert("We were not able to complete this process. Please wait a moment and then try again."),Promise.reject(e)});var s=l,m=function(e){return new Promise(function(t,n){s.get("/weather?q=".concat(e.city,",").concat(e.country,"&appid=").concat("543e8024001ae4781b87fe4eb36370c8")).then(function(e){e.error?n(e):t(e)}).catch(function(e){return n(e)})})};var p=function(){var e=Object(a.useState)({temperature:"",city:"",country:"",humidity:"",description:""}),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("Istanbul"),u=Object(i.a)(c,2),l=u[0],s=u[1],p=Object(a.useState)("TR"),d=Object(i.a)(p,2),y=d[0],h=d[1];return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"text",value:l,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"text",value:y,onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{type:"button",onClick:function(){return function(e,t){m({city:e,country:t}).then(function(e){return o({temperature:e.data.main.temp,city:e.data.name,country:e.data.sys.country,humidity:e.data.main.humidity,description:e.data.weather[0].description})}).catch(function(e){return console.log(e)})}(l,y)}}," Get Weather Status"),r.a.createElement("p",null,r.a.createElement("strong",null,"Temperature")," : ",n.temperature),r.a.createElement("p",null,r.a.createElement("strong",null,"City")," : ",n.city),r.a.createElement("p",null,r.a.createElement("strong",null,"Country")," : ",n.country),r.a.createElement("p",null,r.a.createElement("strong",null,"Humidity")," : ",n.humidity),r.a.createElement("p",null,r.a.createElement("strong",null,"Description")," : ",n.description))};var d=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.0f1bf68a.chunk.js.map