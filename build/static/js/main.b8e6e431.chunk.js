(this.webpackJsonpstrangersthings=this.webpackJsonpstrangersthings||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(5),a=n(4),o=n(1),i=n(22),l=n.n(i),u=n(3),j=n(7),d="https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT",p=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,s,c,a,o,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,s=t.method,c=t.token,a=t.body,console.log("callApi: ",{url:n,method:s,token:c,body:a}),e.prev=2,o={method:s?s.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},c&&(o.headers.Authorization="Bearer ".concat(c)),console.log("Call API Request URL: ",d+n),console.log("Call API Options: ",o),e.next=9,fetch(d+n,o);case 9:return i=e.sent,e.next=12,i.json();case 12:if(l=e.sent,console.log("data: ",l),!l.error){e.next=16;break}throw l.error;case 16:return e.abrupt("return",l);case 19:e.prev=19,e.t0=e.catch(2),console.error("ERROR: ",e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t){return e.apply(this,arguments)}}(),b=n(0),h="https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/users/",O=("".concat(h,"register"),"".concat(h,"login"),"".concat(h,"me"),function(e){var t=e.action,n=e.setToken,s=(e.setUserData,Object(o.useState)("")),i=Object(a.a)(s,2),l=i[0],j=i[1],d=Object(o.useState)(""),h=Object(a.a)(d,2),O=h[0],x=h[1],f="login"===t,v=f?"Login":"Register",g=Object(u.f)(),m=function(){var e=Object(c.a)(r.a.mark((function e(s){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,p({url:"/users/".concat(t),body:{user:{username:l,password:O}},method:"POST"});case 3:a=e.sent,(o=null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.token)&&(localStorage.setItem("token",o),j(""),x(""),n(o),g.push("/"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{id:"register-fields",children:[Object(b.jsx)("h4",{className:"page-title",children:v}),Object(b.jsxs)("form",{onSubmit:m,children:[Object(b.jsx)("input",{type:"text",placeholder:"Username",value:l,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("input",{type:"password",placeholder:"Password",value:O,onChange:function(e){return x(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Register"})]})]})}),x=function(e){var t=e.posts,n=e.token,s=Object(u.g)().postId,i=t.find((function(e){return s===e._id})),l=Object(o.useState)(""),d=Object(a.a)(l,2),h=d[0],O=d[1],x=function(){var e=Object(c.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/posts/".concat(s,"/messages"),t.preventDefault(),e.prev=2,e.next=5,p({url:c,method:"post",token:n,body:{message:{content:h}}});case 5:console.log("DONE!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Error sending a message");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{id:"single-post",children:[i?Object(b.jsxs)("div",{className:"post-info",children:[Object(b.jsx)("h3",{className:"post-title",children:i.title}),Object(b.jsx)("button",{children:"Message Seller"}),Object(b.jsxs)("p",{id:"seller",children:["Seller: ",i.author.username]}),Object(b.jsxs)("p",{className:"location",children:["Location: ",i.location]}),Object(b.jsxs)("p",{className:"description",children:["Price: ",i.price]}),Object(b.jsxs)("p",{children:["Delivers: ",i.willDeliver?"Yes":"No"]}),Object(b.jsx)(j.b,{to:"/posts/{post._id}/edit",children:"Edit This Post"})]}):"",Object(b.jsxs)("form",{id:"message-form",onSubmit:x,children:[Object(b.jsx)("input",{type:"text",placeholder:"Type your message...",onChange:function(e){O(e.target.value)},value:h}),Object(b.jsx)("button",{onClick:x,children:"Send Message"})]})]})},f=function(e){var t=e.posts,n=e.token,s=e.setPosts,i=e.userData,l=Object(u.f)(),j=Object(o.useState)(""),d=Object(a.a)(j,2),h=d[0],O=d[1],x=t.filter((function(e){return function(e,t){for(var n=t.toLowerCase(),s=[e.description,e.location,e.title,e.author.username],r=0;r<s.length;r++)if(s[r].toLowerCase().includes(n))return!0}(e,h)})),f=function(){var e=Object(c.a)(r.a.mark((function e(c){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/posts/".concat(c),event.preventDefault(),e.prev=2,e.next=5,p({url:a,method:"DELETE",token:n});case 5:o=t.filter((function(e){return e._id!==c})),s(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"posts-nav",children:[Object(b.jsx)("h2",{className:"page-title",children:"Posts"}),Object(b.jsx)("input",{type:"text",placeholder:"Search Posts",value:h,onChange:function(e){O(e.target.value)}})]}),x.length?x.map((function(e){return Object(b.jsxs)("div",{className:"post-info",style:{border:"2px solid black"},children:[Object(b.jsxs)("div",{id:"title-button",children:[Object(b.jsx)("span",{className:"post-title",children:e.title}),Object(b.jsx)("button",{onClick:function(){return l.push("/posts/".concat(e._id))},children:"Tell me more!"})]}),Object(b.jsxs)("div",{id:"seller",children:["Seller: ",e.author.username]}),Object(b.jsxs)("div",{className:"location",children:["Location: ",e.location]}),Object(b.jsxs)("div",{className:"description",children:["Description: ",e.description]}),e.author.username===i.username?Object(b.jsx)("button",{onClick:function(){return f(e._id)},children:"Delete Post"}):null]},e._id)})):Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"There are no matching posts..."})})]})},v=n(14),g=n(15),m=n(20),k=function(e){var t=e.token,n=e.setPosts,s=e.posts,i=e.action,l=Object(u.f)(),j=Object(u.g)().postId,d=Object(o.useState)({title:"",description:"",price:"",location:"",willDeliver:!1}),h=Object(a.a)(d,2),O=h[0],x=h[1],f="edit"===i,k=f?"Edit This Post":"Add a New Post",w=f?"PATCH":"POST",y=f?"/posts/".concat(j):"/posts",S=function(){var e=Object(c.a)(r.a.mark((function e(){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return event.preventDefault(),e.prev=1,e.next=4,p({url:y,method:w,body:{post:{title:O.title,description:O.description,price:O.price,location:O.location,willDeliver:O.willDeliver}},token:t});case 4:c=e.sent,a=c.data.post,f?(o=s.filter((function(e){return e._id!==j})),n([].concat(Object(m.a)(o),[a]))):n([].concat(Object(m.a)(s),[a])),l.push("/posts"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error adding your post:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),D=function(e){return function(t){x("willDeliver"===e?Object(g.a)(Object(g.a)({},O),{},Object(v.a)({},e,t.target.checked)):Object(g.a)(Object(g.a)({},O),{},Object(v.a)({},e,t.target.value)))}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:k}),Object(b.jsxs)("form",{id:"new-post-form",onSubmit:S,children:[Object(b.jsx)("input",{type:"text",placeholder:"What are you selling?",onChange:D("title"),value:O.title}),Object(b.jsx)("input",{type:"text",placeholder:"Describe the item (i.e. condition, model)",onChange:D("description"),value:O.description}),Object(b.jsx)("input",{type:"number",placeholder:"What's the price?",onChange:D("price"),value:O.price}),Object(b.jsx)("input",{type:"text",placeholder:"Where is the item located?",onChange:D("location"),value:O.location}),Object(b.jsxs)("label",{children:["Are you willing to deliver?",Object(b.jsx)("input",{type:"checkbox",onChange:D("willDeliver"),value:O.willDeliver})]}),Object(b.jsx)("button",{children:k})]})]})},w=function(e){var t=e.token,n=Object(o.useState)(!1),s=Object(a.a)(n,2),r=s[0],c=s[1];return Object(o.useEffect)((function(){localStorage.getItem("token")?c(!0):c(!1)}),[t]),Object(b.jsx)("div",{id:"nav-bar",children:Object(b.jsxs)("div",{id:"nav-links",children:[Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/posts",children:"View Posts from Strangers!"})}),Object(b.jsx)("div",{children:r?Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/posts/new",children:"Add a Post"})}),Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/profile",children:"Profile"})}),Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/",onClick:function(){localStorage.removeItem("token"),c(!1)},children:"Logout"})})]}):Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/login",children:"Login"})}),Object(b.jsx)("span",{children:Object(b.jsx)(j.b,{to:"/register",children:"Register"})})]})})})]})})},y=function(e){var t=e.userData,n=e.token,s=Object(o.useState)({}),i=Object(a.a)(s,2),l=(i[0],i[1],Object(o.useState)([])),u=Object(a.a)(l,2),j=u[0],d=u[1];Object(o.useEffect)((function(){d(t.posts)}),[t]);var h=function(){var e=Object(c.a)(r.a.mark((function e(t){var s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="/posts/".concat(t),event.preventDefault(),e.prev=2,e.next=5,p({url:s,method:"delete",token:n});case 5:c=j.filter((function(e){return e._id!==t})),d(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return console.log("DATA",t),console.log("POSTS",t.posts),console.log("UserData:",t),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"page-title",children:["This is where your information lives, ",t.username]}),Object(b.jsxs)("div",{className:"profile-body",children:[t.messages&&t.messages.length?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{id:"inbox-span",children:[Object(b.jsxs)("h3",{id:"inbox",children:["Inbox (",t.messages.length,")"]}),t.messages.map((function(e){return Object(b.jsxs)("div",{id:"message",children:[Object(b.jsx)("label",{id:"sender",children:e.fromUser.username}),Object(b.jsx)("p",{id:"message-content",children:e.content})]},e._id)}))]})}):Object(b.jsx)("h3",{children:"There are no messages to display"}),j&&j.length?Object(b.jsxs)("div",{id:"user-posts",children:[Object(b.jsx)("h2",{children:"Listings you've created: "}),j.map((function(e){return Object(b.jsxs)("div",{style:{border:"1px solid black"},children:[Object(b.jsx)("h5",{children:e.title}),Object(b.jsxs)("div",{children:["Posted by: ",e.author.username]}),Object(b.jsxs)("div",{children:["Description: ",e.description]}),Object(b.jsxs)("div",{children:["Location: ",e.location]}),Object(b.jsx)("button",{onClick:function(){return h(e._id)},children:"Delete Post"})]},e._id)}))]}):Object(b.jsx)("h2",{children:"You haven't created any posts yet."})]})]})},S=(n(36),function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(o.useState)({}),l=Object(a.a)(i,2),j=l[0],d=l[1],h=Object(o.useState)([]),v=Object(a.a)(h,2),g=v[0],m=v[1],S=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({url:"/users/me",token:t});case 2:return n=e.sent,s=n.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({url:"/posts"});case 2:return t=e.sent,n=t.data.posts,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return s(localStorage.getItem("token")),e.abrupt("return");case 3:return e.next=5,S(n);case 5:(t=e.sent)&&t.username&&d(t);case 7:case"end":return e.stop()}}),e)}))),[n]),Object(o.useEffect)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"header",children:[j.username&&Object(b.jsxs)("p",{children:["Welcome back to Stranger's Things ",j.username]}),!j.username&&Object(b.jsx)("p",{children:"Welcome to Stranger's Things"})]}),Object(b.jsx)(w,{token:n}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/"}),Object(b.jsx)(u.a,{exact:!0,path:"/posts",children:Object(b.jsx)(f,{posts:g,token:n,setPosts:m,userData:j})}),Object(b.jsx)(u.a,{path:"/profile",children:Object(b.jsx)(y,{userData:j,token:n})}),Object(b.jsx)(u.a,{path:"/posts/new",children:Object(b.jsx)(k,{token:n,setPosts:m,posts:g,action:"add"})}),Object(b.jsx)(u.a,{path:"/posts/:postId/edit",children:Object(b.jsx)(k,{token:n,setPosts:m,posts:g,action:"edit"})}),Object(b.jsx)(u.a,{path:"/posts/:postId",children:Object(b.jsx)(x,{posts:g,token:n})}),Object(b.jsx)(u.a,{path:"/register",children:Object(b.jsx)(O,{action:"register",setToken:s,setUserData:d})}),Object(b.jsx)(u.a,{path:"/login",children:Object(b.jsx)(O,{action:"login",setToken:s,setUserData:d})})]})]})});l.a.render(Object(b.jsx)(j.a,{children:Object(b.jsx)(S,{})}),document.getElementById("app"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b8e6e431.chunk.js.map