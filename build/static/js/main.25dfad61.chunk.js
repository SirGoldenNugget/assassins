(this.webpackJsonpassassins=this.webpackJsonpassassins||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),i=n(64),o=n.n(i),c=n(10),u=n(11),l=n(4),h=n(14),b=n(13),d=(n(71),n(12)),j=n(2),m=n(9),p=n.n(m),v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onLogout=a.onLogout.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"onLogout",value:function(e){var t=this;e.preventDefault(),p.a.get("/api/logout",{withCredentials:!0}).then((function(e){console.log(e),200===e.status&&t.props.setUser({isAuthenticated:!1,username:null})}))}},{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(d.b,{to:"/",className:"navbar-brand",children:"Assassins"}),Object(a.jsx)("div",{className:"collpase navbar-collapse",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"navbar-item",children:this.props.isAuthenticated?Object(a.jsx)(d.b,{to:"/",className:"nav-link",onClick:this.onLogout,children:"Logout"}):Object(a.jsx)(d.b,{to:"/login",className:"nav-link",children:"Login"})}),!this.props.isAuthenticated&&Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(d.b,{to:"/register",className:"nav-link",children:"Register"})})]})})]})}}]),n}(s.Component),O=n(29),g=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a.state={username:"",password:""},a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(O.a)({},n,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n={username:this.state.username,password:this.state.password};console.log(n),p.a.post("/api/login",n,{withCredentials:!0}).then((function(e){console.log(e),200===e.status&&(t.props.setUser({isAuthenticated:!0,username:e.data.username}),t.setState({redirectTo:"/"}))}))}},{key:"canSubmit",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"render",value:function(){return this.state.redirectTo?Object(a.jsx)(j.a,{to:{pathname:this.state.redirectTo}}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",required:!0,name:"username",className:"form-control",value:this.state.username,onChange:this.onChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password: "}),Object(a.jsx)("input",{type:"password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary",disabled:!this.canSubmit()})})]})]})}}]),n}(s.Component),f=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=a.onChange.bind(Object(l.a)(a)),a.canSubmit=a.canSubmit.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a.state={username:"",password:"",confirmPassword:""},a}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(O.a)({},n,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n={username:this.state.username,password:this.state.password};console.log(n),p.a.post("/api/register",n,{withCredentials:!0}).then((function(e){200===e.status&&t.setState({redirectTo:"/login"})}))}},{key:"canSubmit",value:function(){return this.state.username.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"render",value:function(){return this.state.redirectTo?Object(a.jsx)(j.a,{to:{pathname:this.state.redirectTo}}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",name:"username",required:!0,className:"form-control",value:this.state.username,onChange:this.onChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password: "}),Object(a.jsx)("input",{type:"password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Confirm Password: "}),Object(a.jsx)("input",{type:"password",name:"confirmPassword",className:"form-control",value:this.state.confirmPassword,onChange:this.onChange})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Register",disabled:!this.canSubmit(),className:"btn btn-primary"})})]})]})}}]),n}(s.Component),x=(n(92),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onJoinParty=a.onJoinParty.bind(Object(l.a)(a)),a.onChangePartyCode=a.onChangePartyCode.bind(Object(l.a)(a)),a.onCreateParty=a.onCreateParty.bind(Object(l.a)(a)),a.state={partyCode:""},a}return Object(u.a)(n,[{key:"onSocketEvent",value:function(){}},{key:"componentDidMount",value:function(){this.onSocketEvent()}},{key:"componentDidUpdate",value:function(){this.onSocketEvent()}},{key:"onJoinParty",value:function(e){var t=this;e.preventDefault(),p.a.get("/api/join/"+this.state.partyCode,{withCredentials:!0}).then((function(e){200===e.status&&console.log(e.data)})).catch((function(e){console.log(e),401===e.response.status&&t.setState({redirectTo:"/login"})}))}},{key:"onChangePartyCode",value:function(e){this.setState({partyCode:e.target.value})}},{key:"onCreateParty",value:function(e){var t=this;e.preventDefault(),p.a.get("/api/create",{withCredentials:!0}).then((function(e){200===e.status&&console.log(e.data)})).catch((function(e){console.log(e),401===e.response.status&&t.setState({redirectTo:"/login"})}))}},{key:"render",value:function(){return this.state.redirectTo?Object(a.jsx)(j.a,{to:{pathname:this.state.redirectTo}}):Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsxs)("form",{className:"form-inline justify-content-center mb-3",onSubmit:this.onJoinParty,children:[Object(a.jsx)("div",{className:"form-group mx-sm-3",children:Object(a.jsx)("input",{type:"text",className:"form-control",value:this.state.partyCode,onChange:this.onChangePartyCode,id:"partyCode",placeholder:"Party Code"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Join Party",className:"btn btn-primary",disabled:0===this.state.partyCode.length})})]}),Object(a.jsx)("form",{onSubmit:this.onCreateParty,children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Create Party",className:"btn btn-primary"})})}),Object(a.jsx)("br",{})]})}}]),n}(s.Component)),y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={isAuthenticated:!1,username:null},a.getUser=a.getUser.bind(Object(l.a)(a)),a.setUser=a.setUser.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"getUser",value:function(){var e=this;p.a.get("/api/login",{withCredentials:!0}).then((function(t){console.log(t.data),200===t.status&&e.setState({isAuthenticated:!0,username:t.data.username})})).catch((function(e){console.log(e)}))}},{key:"setUser",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(v,{isAuthenticated:this.state.isAuthenticated,setUser:this.setUser}),Object(a.jsx)("br",{}),Object(a.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(a.jsx)(x,{isAuthenticated:e.state.isAuthenticated})}}),Object(a.jsx)(j.b,{path:"/login",render:function(){return Object(a.jsx)(g,{setUser:e.setUser})}}),Object(a.jsx)(j.b,{path:"/register",component:f})]})})}}]),n}(s.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),C()}},[[123,1,2]]]);
//# sourceMappingURL=main.25dfad61.chunk.js.map