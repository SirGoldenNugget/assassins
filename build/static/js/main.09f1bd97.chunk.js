(this.webpackJsonpassassins=this.webpackJsonpassassins||[]).push([[0],{85:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),c=s.n(n),r=s(26),i=s.n(r),o=s(53),l=s(48),j=s(49),b=s(54),d=s(51),u=(s(60),s(9)),h=s(8),O=s(7),x=s.n(O),m=s(23),p=s(6),g=Object(n.createContext)(),f=function(e){var t=e.children,s=Object(n.useState)(""),c=Object(p.a)(s,2),r=c[0],i=c[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),j=l[0],b=l[1],d=Object(n.useState)(""),u=Object(p.a)(d,2),h=u[0],O=u[1],x=Object(n.useState)(!1),m=Object(p.a)(x,2),f=m[0],y=m[1],v=Object(n.useState)(!1),C=Object(p.a)(v,2),N=C[0],w=C[1],S=Object(n.useState)(!0),P=Object(p.a)(S,2),k=P[0],A=P[1];return Object(a.jsx)(g.Provider,{value:{username:r,setUsername:i,partyCode:j,setPartyCode:b,target:h,setTarget:O,isAdmin:f,setIsAdmin:y,isAuth:N,setIsAuth:w,isAlive:k,setIsAlive:A},children:t})},y=s(21),v=s(15);function C(){var e=Object(n.useContext)(g);return Object(a.jsx)(v.a.Link,{as:u.b,to:"/login",onClick:function(){x.a.get("/api/logout",{withCredentials:!0}).then((function(t){console.log(t),200===t.status&&(e.setIsAuth(!1),e.setUsername(""),e.setPartyCode(""),e.setIsAdmin(!1))}))},children:"Logout"})}function N(){var e=Object(n.useContext)(g);return Object(a.jsx)(y.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",sticky:"top",children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(y.a.Brand,{as:u.b,to:"/",children:"Assassins"}),Object(a.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(v.a,{className:"mr-auto",children:[e.isAuth?Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(C,{}),Object(a.jsx)(v.a.Link,{as:u.b,to:"/user/"+e.username,children:"Profile"})]}):Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(v.a.Link,{as:u.b,to:"/login",children:"Login"}),Object(a.jsx)(v.a.Link,{as:u.b,to:"/register",children:"Register"})]}),Object(a.jsx)(v.a.Link,{as:u.b,to:"/help",children:"Help"})]}),Object(a.jsx)(v.a,{className:"ml-auto",children:Object(a.jsx)(v.a.Link,{as:u.b,to:"/leaderboard",children:"Leaderboard"})})]})]})})}function w(){return Object(a.jsx)(y.a,{expand:"sm",bg:"dark",variant:"dark",fixed:"bottom",children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(y.a.Text,{children:["Created by ",Object(a.jsx)("a",{href:"https://github.com/minhd-vu/",children:"Minh Vu"}),". Project on ",Object(a.jsx)("a",{href:"https://github.com/minhd-vu/assassins",children:"GitHub"}),"."]})})})}function S(){var e=Object(h.e)(),t=Object(n.useContext)(g),s=Object(n.useState)(""),c=Object(p.a)(s,2),r=c[0],i=c[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),j=l[0],b=l[1],d=Object(n.useState)(""),u=Object(p.a)(d,2),O=u[0],m=u[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Login"}),r&&Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:r}),Object(a.jsxs)("form",{onSubmit:function(s){s.preventDefault(),x.a.post("/api/login",{username:j,password:O},{withCredentials:!0}).then((function(s){console.log(s),200===s.status&&(t.setIsAuth(!0),t.setUsername(s.data.username),t.setPartyCode(s.data.partyCode),t.setIsAdmin(s.data.isAdmin),e.push("/"))})).catch((function(e){console.log(e),401===e.response.status&&i("Invalid username and/or password.")}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password: "}),Object(a.jsx)("input",{type:"password",required:!0,className:"form-control",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})})]})]})}function P(){var e=Object(h.e)(),t=Object(n.useContext)(g),s=Object(n.useState)(""),c=Object(p.a)(s,2),r=c[0],i=c[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),j=l[0],b=l[1],d=Object(n.useState)(""),u=Object(p.a)(d,2),O=u[0],m=u[1],f=Object(n.useState)(""),y=Object(p.a)(f,2),v=y[0],C=y[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Register"}),r&&Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:r}),Object(a.jsxs)("form",{onSubmit:function(s){if(s.preventDefault(),O!==v)return i("Passwords do not match.");x.a.post("/api/register",{username:j,password:O},{withCredentials:!0}).then((function(s){200===s.status&&(t.setUsername(j),t.setIsAuth(!0),e.push("/"))})).catch((function(e){console.log(e),401===e.response.status&&i("Username is already in use.")}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password: "}),Object(a.jsx)("input",{type:"password",required:!0,className:"form-control",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Confirm Password: "}),Object(a.jsx)("input",{type:"password",required:!0,className:"form-control",value:v,onChange:function(e){return C(e.target.value)}})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary"})})]})]})}function k(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),x.a.get("/api/assassinate",{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Assassinate",className:"btn btn-primary"})})})]})}function A(){var e=Object(n.useContext)(g);return Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),x.a.get("/api/confirm",{withCredentials:!0}).then((function(t){console.log(t),e.setIsAlive(!1),e.setTarget("")})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Confirm"})}function I(){return Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),x.a.get("/api/deny",{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},className:"mx-1 btn btn-danger",children:"Deny"})}function D(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"You have been assassinated."}),Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(A,{}),Object(a.jsx)(I,{})]})})]})}function L(e,t){var s=Object(n.useRef)();Object(n.useEffect)((function(){s.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){s.current()}),t);return function(){return clearInterval(e)}}}),[t])}function F(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),s=t[0],r=t[1],i=Object(n.useState)({}),o=Object(p.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)(0),d=Object(p.a)(b,2),u=d[0],h=d[1];return L((function(){x.a.get("/api/target",{withCredentials:!0}).then((function(e){200===e.status&&j(e.data)})).catch((function(e){console.log(e)})),x.a.get("/api/pending",{withCredentials:!0}).then((function(e){200===e.status&&r(e.data)})).catch((function(e){console.log(e)})),h(1e3)}),u),l&&Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("br",{}),l.username&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h6",{children:"Target: "}),Object(a.jsx)("button",{type:"button",className:"btn btn-light",children:l.username})]}),s?Object(a.jsx)(D,{}):Object(a.jsx)(k,{})]})}function E(){var e=Object(n.useContext)(g);return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),x.a.get("/api/leave",{withCredentials:!0}).then((function(t){console.log(t),200===t.status&&(e.setPartyCode(""),e.setIsAdmin(!1))})).catch((function(e){console.log(e)}))},children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Leave Party",className:"btn btn-primary"})})})]})}function T(e){return Object(a.jsx)("div",{className:"mr-2 mb-2 justify-content-between",children:Object(a.jsxs)("button",{type:"button",className:"btn btn-light",children:[Object(a.jsx)("span",{className:"mx-1",children:e.player.username}),e.isStarted&&(e.player.isAlive?Object(a.jsx)("span",{className:"mx-1 badge badge-success",children:"Alive"}):Object(a.jsx)("span",{className:"mx-1 badge badge-danger",children:"Dead"})),e.player.isAdmin&&Object(a.jsx)("span",{className:"mx-1 badge badge-primary",children:"Admin"})]})})}function U(e){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h6",{children:"Players:"}),Object(a.jsx)("div",{className:"d-flex flex-wrap justify-content-center align-items-top",children:e.players})]})]})}var G=s(18),R=s(31);function q(e){var t=Object(n.useState)("Classic"),s=Object(p.a)(t,2),r=s[0],i=s[1],o=Object(n.useState)(!0),l=Object(p.a)(o,2),j=l[0],b=l[1];return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("br",{}),Object(a.jsxs)(G.a,{onSubmit:function(t){t.preventDefault(),x.a.post("/api/start",{gameMode:r,showPlayers:j},{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(t){console.log(t),e.setError(t.response.data)}))},children:[Object(a.jsx)(G.a.Group,{children:Object(a.jsxs)(G.a.Row,{className:"justify-content-center align-items-center",children:[Object(a.jsx)(G.a.Label,{column:!0,xs:"auto",children:"Game Mode:"}),Object(a.jsx)(R.a,{xs:"auto",children:Object(a.jsxs)(G.a.Control,{as:"select",defaultValue:r,onChange:function(e){return i(e.target.value)},children:[Object(a.jsx)("option",{children:"Classic"}),Object(a.jsx)("option",{children:"Shuffle"})]})})]})}),Object(a.jsx)(G.a.Group,{children:Object(a.jsx)(G.a.Check,{type:"checkbox",label:"Show Players",defaultValue:j,onChange:function(e){return b(e.target.value)}})}),Object(a.jsx)(G.a.Group,{children:Object(a.jsx)("input",{type:"submit",value:"Start Party",className:"btn btn-primary"})})]})]})}function M(){var e=Object(n.useContext)(g),t=Object(n.useState)({}),s=Object(p.a)(t,2),c=s[0],r=s[1],i=Object(n.useState)([]),o=Object(p.a)(i,2),l=o[0],j=o[1],b=Object(n.useState)(""),d=Object(p.a)(b,2),u=d[0],h=d[1],O=Object(n.useState)(""),m=Object(p.a)(O,2),f=m[0],y=m[1],v=Object(n.useState)(0),C=Object(p.a)(v,2),N=C[0],w=C[1];return L((function(){x.a.get("/api/party",{withCredentials:!0}).then((function(e){if(200===e.status&&(console.log(e.data),r(e.data),e.data&&e.data.players)){j(e.data.players.map((function(t){return Object(a.jsx)(T,{player:t,isStarted:e.data.isStarted},t.username)})));var t=e.data.players.filter((function(e){return e.isAlive}));1===t.length&&h(t[0].username)}})).catch((function(e){console.log(e)})),w(1e3)}),N),Object(a.jsxs)("div",{className:"text-center",children:[f&&Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:f}),u&&c.isStarted&&Object(a.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(a.jsx)("b",{children:u})," is the winner!"]}),Object(a.jsxs)("h4",{children:["Party Code: ",Object(a.jsx)("b",{children:e.partyCode})]}),c.isStarted&&Object(a.jsx)(F,{}),c.isStarted?c.showPlayers&&Object(a.jsx)(U,{players:l}):Object(a.jsx)(U,{players:l}),!c.isStarted&&e.isAdmin&&Object(a.jsx)(q,{setError:y}),Object(a.jsx)(E,{})]})}function J(){var e=Object(n.useContext)(g),t=Object(h.e)();return Object(a.jsx)("form",{onSubmit:function(s){s.preventDefault(),x.a.get("/api/create",{withCredentials:!0}).then((function(t){200===t.status&&(e.setPartyCode(t.data),e.setIsAdmin(!0))})).catch((function(e){console.log(e),401===e.response.status&&t.push("/login")}))},children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Create Party",className:"btn btn-primary"})})})}function K(e){var t=Object(n.useContext)(g),s=Object(n.useState)(""),c=Object(p.a)(s,2),r=c[0],i=c[1],o=Object(h.e)();return Object(a.jsxs)("form",{onSubmit:function(s){s.preventDefault(),x.a.get("/api/join/"+r,{withCredentials:!0}).then((function(e){200===e.status&&(console.log(e.data),t.setPartyCode(e.data.code),t.setIsAdmin(!1))})).catch((function(t){console.log(t),401===t.response.status?o.push("/login"):e.setError(t.response.data)}))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",required:!0,value:r,onChange:function(e){return i(e.target.value)},placeholder:"Party Code"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Join Party",className:"btn btn-primary"})})]})}function Y(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),s=t[0],c=t[1];return Object(a.jsxs)("div",{className:"text-center",children:[s&&Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:s}),Object(a.jsx)(K,{setError:c}),Object(a.jsx)(J,{})]})}function B(){return Object(n.useContext)(g).partyCode?Object(a.jsx)(M,{}):Object(a.jsx)(Y,{})}function H(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"How to Play"}),Object(a.jsx)("p",{children:"Assassins is a game that can be played almost anywhere, but best done in semi-crowded environments. The goal of the game is to be the last remaining person alive and to assassinate whomever you are assigned."}),Object(a.jsx)("h4",{children:"Create a User"}),Object(a.jsxs)("p",{children:["Before doing anything, you should create a user. It will keep track of your statistics as well as identifying who you are in a party. You can register yourself by heading to the ",Object(a.jsx)(u.b,{to:"/register",children:"register"})," link in the navbar. Once you create a user, you will no longer be able to change the username or password."]}),Object(a.jsxs)("p",{children:["If you already have a user, you can login by heading to the ",Object(a.jsx)(u.b,{to:"/login",children:"login"})," link in the navbar."]}),Object(a.jsx)("h4",{children:"Party System"}),Object(a.jsx)("p",{children:"Once you have logged in you have the option of joining or creating a party. A party is an instance of the assassins game; it is how you connect with your friends."}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm",children:[Object(a.jsx)("h5",{children:"Join a Party"}),Object(a.jsxs)("p",{children:["To join a party, type in the party code in the input field on the ",Object(a.jsx)(u.b,{to:"/",children:"home page"})," then click the ",Object(a.jsx)("strong",{children:"Join Party"})," button. Once a party has started you can no longer join it."]})]}),Object(a.jsxs)("div",{className:"col-sm",children:[Object(a.jsx)("h5",{children:"Create a Party"}),Object(a.jsxs)("p",{children:["To create a party, click the ",Object(a.jsx)("strong",{children:"Create Party"})," button on the ",Object(a.jsx)(u.b,{to:"/",children:"home page"}),". Once you have created it, the app will display the party code in ",Object(a.jsx)("strong",{children:"bold"}),". Give this code to your friends so that they can join."]})]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm",children:[Object(a.jsx)("h5",{children:"Leave a Party"}),Object(a.jsx)("p",{children:"Once you join a party, you have the option of leaving it. You can leave it anytime, and the app will handle the reshuffling of players."})]}),Object(a.jsxs)("div",{className:"col-sm",children:[Object(a.jsx)("h5",{children:"Start a Party"}),Object(a.jsx)("p",{children:"Only the party leader can start the party. Once started everyone is assigned a target."})]})]}),Object(a.jsx)("h4",{children:"Eliminate Targets"}),Object(a.jsxs)("p",{children:["You will be assigned a target to assassinate, hence the name ",Object(a.jsx)("i",{children:"assassins"}),". Once you assassinated your target, either by means of dart blasters, tag, projectile launchers, or any other method, click the ",Object(a.jsx)("b",{children:"Assassinate"})," button."]}),Object(a.jsx)("p",{children:"A notification will be send to the target just eliminated, the target will have option of confirming or denying the assassination attempt. If the attempt is denied, the game continues; this is inplace to prevent accidental misclicks. If the attempt is successful, you will be assigned a new target depending on the game mode."}),Object(a.jsx)("h4",{children:"Game Modes"}),Object(a.jsxs)("dl",{className:"row",children:[Object(a.jsx)("dt",{className:"col-sm-3",children:"Classic"}),Object(a.jsx)("dd",{className:"col-sm-9",children:"When you assassinate a target, your next target will be the target your target had."}),Object(a.jsx)("dt",{className:"col-sm-3",children:"Shuffle"}),Object(a.jsx)("dd",{className:"col-sm-9",children:"When a player assassinates a target, all players will recieve a new target from the remaining players alive."})]})]})}var V=s(52);function W(e){var t=e.match.params.username,s=Object(n.useState)(0),r=Object(p.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(0),j=Object(p.a)(l,2),b=j[0],d=j[1],u=Object(n.useState)(!1),h=Object(p.a)(u,2),O=h[0],m=h[1],g=Object(n.useState)(0),f=Object(p.a)(g,2),y=f[0],v=f[1];return Object(n.useEffect)((function(){x.a.get("/api/user/"+t,{withCredentials:!0}).then((function(e){200===e.status?(o(e.data.elims),d(e.data.deaths),v(e.data.rank),m(!1)):204===e.status&&m(!0)})).catch((function(e){console.log(e)}))}),[i,b,y,O,t]),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("h3",{children:"Profile"}),O?Object(a.jsxs)(V.a,{variant:"danger",children:["No user found with username ",Object(a.jsx)("b",{children:t}),"."]},"danger"):Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Rank"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Kills"}),Object(a.jsx)("th",{scope:"col",children:"Deaths"}),Object(a.jsx)("th",{scope:"col",children:"K/D"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:y}),Object(a.jsx)("td",{children:t}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:b}),Object(a.jsx)("td",{children:(i/b).toFixed(2)})]})})]})]})}function z(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),s=t[0],r=t[1];return Object(n.useEffect)((function(){x.a.get("/api/leaderboard",{withCredentials:!0}).then((function(e){200===e.status&&r(e.data.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.rank}),Object(a.jsx)("td",{children:e.username}),Object(a.jsx)("td",{children:e.elims}),Object(a.jsx)("td",{children:e.deaths}),Object(a.jsx)("td",{children:(e.elims/e.deaths).toFixed(2)})]},e.username)})))})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("h3",{children:"Leaderboard"}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Rank"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Kills"}),Object(a.jsx)("th",{scope:"col",children:"Deaths"}),Object(a.jsx)("th",{scope:"col",children:"K/D"})]})}),Object(a.jsx)("tbody",{children:s})]})]})}var Q=function(e){Object(b.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.get("/api/login",{withCredentials:!0}).then((function(t){console.log(t.data),200===t.status&&(e.context.setIsAuth(!0),e.context.setUsername(t.data.username),e.context.setPartyCode(t.data.partyCode),e.context.setIsAdmin(t.data.isAdmin))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(N,{}),Object(a.jsx)("br",{}),Object(a.jsxs)(m.a,{children:[Object(a.jsx)(h.a,{path:"/",exact:!0,component:B}),Object(a.jsx)(h.a,{path:"/login",component:S}),Object(a.jsx)(h.a,{path:"/register",component:P}),Object(a.jsx)(h.a,{path:"/user/:username",render:function(e){return Object(a.jsx)(W,Object(o.a)({},e))}}),Object(a.jsx)(h.a,{path:"/help",component:H}),Object(a.jsx)(h.a,{path:"/leaderboard",component:z})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(w,{})]})}}]),s}(n.Component);Q.contextType=g,i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(f,{children:Object(a.jsx)(Q,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.09f1bd97.chunk.js.map