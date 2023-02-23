(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n,r,c,s,i,o=a(0),l=a.n(o),j=a(46),u=a.n(j),d=a(24),b=a(72),h=a(7),m=a(95),O=a(135),p=a(139),g=a(133),x=a(93),v=a(10),f=a(17),w=a(18),k=a(13),y=a(136),N=a(126),S=(a(102),a(125)),I=a(42),L=a(137),$=Object(L.a)(n||(n=Object(I.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),T=Object(L.a)(r||(r=Object(I.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),C=Object(L.a)(c||(c=Object(I.a)(["\n  mutation getCity($cityName: String!) {\n    getCity(cityName: $cityName) {\n      cityId\n      cityName\n      lat\n      lng\n      photo\n      restaurants {\n        restaurantId\n        restaurantName\n        priceLevel\n        rating\n        photo\n      }\n    }\n  }\n"]))),D=Object(L.a)(s||(s=Object(I.a)(["\n  mutation saveSearch($restaurantId: String!, $restaurantName: String!, $priceLevel: String!, $rating: String!, $photo: String) {\n    saveSearch(restaurantId: $restaurantId, restaurantName: $restaurantName, priceLevel: $priceLevel, rating: $rating, photo: $photo) {\n      _id\n      username\n      email\n      savedLocations {\n        restaurantId\n        restaurantName\n        priceLevel\n        rating\n        photo\n      }\n    }\n  }\n"]))),P=Object(L.a)(i||(i=Object(I.a)(["\n  mutation removeSearch($restaurantId: String!) {\n    removeSearch(restaurantId: $restaurantId) {\n      _id\n      username\n      email\n      savedLocations {\n        restaurantId\n        restaurantName\n        priceLevel\n        rating\n        photo\n      }\n    }\n  }\n"]))),E=a(35),B=a(36),_=a(79),A=a.n(_),U=new(function(){function e(){Object(E.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return A()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return A()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),G=a(3);function R(){var e=Object(o.useState)({email:"",username:"",password:""}),t=Object(k.a)(e,2),a=t[0],n=t[1],r=Object(S.a)(T),c=Object(k.a)(r,2),s=c[0],i=(c[1].error,function(e){var t=e.target,r=t.name,c=t.value;n(Object(d.a)(Object(d.a)({},a),{},Object(w.a)({},r,c)))}),l=function(){var e=Object(f.a)(Object(v.a)().mark((function e(t){var r,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),console.log(a.email,a.password,a.username),e.prev=5,e.next=8,s({variables:Object(d.a)({},a)});case 8:r=e.sent,c=r.data,U.login(c.addUser.token),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:n({username:"",email:"",password:""});case 18:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(y.a,{onSubmit:l,className:"signupform",children:[Object(G.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(G.jsx)(y.a.Label,{children:"Username"}),Object(G.jsx)(y.a.Control,{type:"username",name:"username",value:a.username,placeholder:"Please enter a username.",onChange:i})]}),Object(G.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(G.jsx)(y.a.Label,{children:"Email address"}),Object(G.jsx)(y.a.Control,{type:"email",name:"email",value:a.email,placeholder:"Please enter a valid email.",onChange:i}),Object(G.jsx)(y.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(G.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(G.jsx)(y.a.Label,{children:"Password"}),Object(G.jsx)(y.a.Control,{type:"password",name:"password",value:a.password,placeholder:"Password",onChange:i})]}),Object(G.jsx)(N.a,{variant:"primary",type:"submit",children:"Sign Up"})]})})}a(110);function F(){var e=Object(o.useState)({email:"",password:""}),t=Object(k.a)(e,2),a=t[0],n=t[1],r=Object(S.a)($),c=Object(k.a)(r,2),s=c[0],i=(c[1].error,function(e){var t=e.target,r=t.name,c=t.value;n(Object(d.a)(Object(d.a)({},a),{},Object(w.a)({},r,c)))}),l=function(){var e=Object(f.a)(Object(v.a)().mark((function e(t){var r,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,s({variables:Object(d.a)({},a)});case 6:r=e.sent,c=r.data,U.login(c.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:n({email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(y.a,{onSubmit:l,className:"loginform",children:[Object(G.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(G.jsx)(y.a.Label,{children:"Email"}),Object(G.jsx)(y.a.Control,{type:"text",name:"email",value:a.email,placeholder:"Please enter an email.",onChange:i})]}),Object(G.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(G.jsx)(y.a.Label,{children:"Password"}),Object(G.jsx)(y.a.Control,{type:"password",name:"password",value:a.password,placeholder:"Password",onChange:i})]}),Object(G.jsx)(N.a,{variant:"primary",type:"submit",children:"Login"})]})})}var J=a(134),z=a(138);a(111);function V(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(J.a,{className:"nav-container",bg:"dark",variant:"dark",expand:"lg",children:[Object(G.jsxs)(J.a.Brand,{href:"/",children:[Object(G.jsx)("img",{alt:"",src:"./logo.png",width:"50",height:"50",className:"d-inline-block center"}),"Destination Unknown"]}),Object(G.jsx)(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(G.jsx)(J.a.Collapse,{id:"basic-navbar-nav",children:Object(G.jsx)(z.a,{className:"mr-auto",children:U.loggedIn()?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(z.a.Link,{href:"/profile",children:"Profile"}),Object(G.jsx)(z.a.Link,{onClick:U.logout,children:"Logout"})]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(z.a.Link,{href:"login",className:"d-inline-block center",children:"Login"}),Object(G.jsx)(z.a.Link,{href:"signup",children:"Sign Up!"})]})})})]})})}var W,q=a(21),Y=a(127),H=a(128),K=a(90),X=a(129),Z=a(140),M=(a(112),function(){var e=Object(o.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(""),c=Object(k.a)(r,2),s=c[0],i=c[1],l=Object(o.useState)([]),j=Object(k.a)(l,2),u=(j[0],j[1],Object(S.a)(C)),b=Object(k.a)(u,2),h=b[0],m=(b[1].error1,Object(S.a)(D)),O=Object(k.a)(m,2),p=O[0],g=(O[1].error2,function(){var e=Object(f.a)(Object(v.a)().mark((function e(t){var r,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,h({variables:{cityName:a}});case 6:r=e.sent,c=r.data.getCity.restaurants,i([]),i(Object(q.a)(c)),console.log(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(JSON.stringify(e.t0,null,2));case 16:n("");case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()),x=function(){var e=Object(f.a)(Object(v.a)().mark((function e(t){var a,n;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.find((function(e){return e.restaurantId===t})),U.loggedIn()?U.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return console.log(a),e.prev=5,e.next=8,p({variables:Object(d.a)({},a)});case 8:n=e.sent,n.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(JSON.stringify(e.t0,null,2));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){console.log(s)}),[s]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Y.a,{fluid:!0,className:"search-container-css",children:Object(G.jsxs)(H.a,{children:[Object(G.jsx)("h1",{className:"searchtitle",children:"Search for Local Restaurants!"}),Object(G.jsxs)(y.a,{onSubmit:g,children:[Object(G.jsx)(y.a.Row,{className:"justify-content-md-center",children:Object(G.jsx)(K.a,{xs:12,md:6,children:Object(G.jsx)(y.a.Control,{name:"searchInput",value:a,onChange:function(e){return n(e.target.value)},type:"text",size:"lg",placeholder:"Pick A City"})})}),Object(G.jsx)(y.a.Row,{children:Object(G.jsx)(K.a,{xs:12,md:12,children:Object(G.jsxs)(N.a,{type:"submit",variant:"success",size:"lg",className:"searchbtn-home",children:[Object(G.jsx)("i",{class:"fa-solid fa-thumbtack"})," Search"]})})})]})]})}),Object(G.jsx)(H.a,{children:s.length?Object(G.jsx)(X.a,{children:s.map((function(e){return e&&e.restaurantId?Object(G.jsxs)(Z.a,{border:"border-bottom border-warning",className:"cardbody-css",children:[Object(G.jsx)(Z.a.Img,{src:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=".concat(e.photo,"&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw"),alt:"The image for ".concat(e.restaurantName),variant:"top"}),Object(G.jsxs)(Z.a.Body,{children:[Object(G.jsx)(Z.a.Title,{className:"cardtitle",children:e.restaurantName}),Object(G.jsxs)(Z.a.Subtitle,{className:"cardprice",children:[Object(G.jsx)("i",{class:"fa-solid fa-wallet"})," ","Restaurant Price: ".concat(e.priceLevel)]}),Object(G.jsxs)(Z.a.Subtitle,{className:"cardrating",children:[Object(G.jsx)("i",{class:"fa-solid fa-certificate"})," ","Rating: ".concat(e.rating)]}),U.loggedIn()&&Object(G.jsxs)(N.a,{className:"btn-info center save-btn-css",variant:"secondary",size:"sm",onClick:function(){return x(e.restaurantId)},children:["Save ",Object(G.jsx)("i",{class:"fa-solid fa-heart"})]})]})]},e.restaurantId):void 0}))}):Object(G.jsx)("div",{})})]})}),Q=a(141),ee=Object(L.a)(W||(W=Object(I.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      savedLocations {\n        restaurantId\n        restaurantName\n        priceLevel\n        rating\n        photo\n      }\n    }\n  }\n"]))),te=function(){var e=Object(Q.a)(ee),t=e.loading,a=e.data,n=Object(S.a)(P,{update:function(e,t){var a=t.data.removeSearch;try{e.writeQuery({query:ee,data:{me:a}})}catch(n){console.error(n)}}}),r=Object(k.a)(n,2),c=r[0],s=(r[1].error,(null===a||void 0===a?void 0:a.me)||[]);if(t)return Object(G.jsx)("h2",{children:"LOADING..."});var i=function(){var e=Object(f.a)(Object(v.a)().mark((function e(t){var a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),U.loggedIn()?U.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,c({variables:{restaurantId:t}});case 7:a=e.sent,a.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Y.a,{fluid:!0,className:"text-light bg-dark",children:Object(G.jsx)(H.a,{children:Object(G.jsx)("h1",{children:"Viewing saved searches!"})})}),Object(G.jsxs)(H.a,{children:[Object(G.jsx)("h2",{children:s.savedLocations.length?"Viewing ".concat(s.savedLocations.length," saved ").concat((s.savedLocations.length,"searches"),":"):"You have no saved searches!"}),Object(G.jsx)(X.a,{children:s.savedLocations.map((function(e){return Object(G.jsxs)(Z.a,{border:"dark",children:[Object(G.jsx)(Z.a.Img,{src:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=".concat(e.photo,"&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw"),alt:"The image for ".concat(e.restaurantName),variant:"top"}),Object(G.jsxs)(Z.a.Body,{children:[Object(G.jsx)(Z.a.Title,{children:e.restaurantName}),Object(G.jsx)(Z.a.Subtitle,{children:"Restaurant Price: ".concat(e.priceLevel," and Rating: ").concat(e.rating)}),Object(G.jsx)(N.a,{className:"btn-block btn-danger",onClick:function(){return i(e.restaurantId)},children:"Delete"})]})]},e.restaurantId)}))})]})]})};a(113);function ae(){return Object(G.jsxs)("div",{className:"hero-container",children:[Object(G.jsx)("h1",{className:"main-htag",children:" ADVENTURE AWAITS"}),Object(G.jsx)("p",{children:"What are you waiting for to plan your next trip?"}),Object(G.jsx)(N.a,{className:"btn btn-light hero-button",type:"button",children:Object(G.jsx)(b.b,{to:"homepage",children:" GET STARTED "})})]})}function ne(){return Object(G.jsx)("div",{children:Object(G.jsx)(ae,{})})}var re=Object(m.a)({uri:"/graphql"}),ce=Object(x.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),se=new O.a({link:ce.concat(re),cache:new p.a});var ie=function(){return Object(G.jsx)(g.a,{client:se,children:Object(G.jsx)(b.a,{children:Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[Object(G.jsx)(V,{}),Object(G.jsxs)(h.c,{children:[Object(G.jsx)(h.a,{path:"/",element:Object(G.jsx)(ne,{})}),Object(G.jsx)(h.a,{path:"/homepage",element:Object(G.jsx)(M,{})}),Object(G.jsx)(h.a,{path:"signup",element:Object(G.jsx)(R,{})}),Object(G.jsx)(h.a,{path:"login",element:Object(G.jsx)(F,{})}),Object(G.jsx)(h.a,{path:"profile",element:Object(G.jsx)(te,{})})]})]})})})})};a(114),a(115);u.a.render(Object(G.jsx)(l.a.StrictMode,{children:Object(G.jsx)(ie,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.f2d03fe3.chunk.js.map