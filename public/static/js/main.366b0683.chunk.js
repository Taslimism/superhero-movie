(this["webpackJsonpmovie-review-frontend"]=this["webpackJsonpmovie-review-frontend"]||[]).push([[0],{11:function(e,t,a){e.exports={form:"Form_form__351jO","form-control":"Form_form-control__3Goig",button:"Form_button__55S23",switch:"Form_switch__2CcvV",title:"Form_title__3JDSC","input-container":"Form_input-container__2ZhHb"}},12:function(e,t,a){e.exports={"main-container":"ReviewOutput_main-container__jtTRW",profile:"ReviewOutput_profile__iaH7l","review-container":"ReviewOutput_review-container__auZzd",review:"ReviewOutput_review__2JoHS",title:"ReviewOutput_title__7kFB0"}},13:function(e,t,a){e.exports={cardOver:"MovieCard_cardOver__HvCbT",link:"MovieCard_link__ow4O8",linkMore:"MovieCard_linkMore__3gtBc",search:"MovieCard_search__1C_-j",form:"MovieCard_form__3Q74G"}},15:function(e,t,a){e.exports={auth:"Navigation_auth__9uVk6",name:"Navigation_name__az5pU",login:"Navigation_login__2K_dG",signup:"Navigation_signup__3cF_c"}},16:function(e,t,a){e.exports={card:"MovieElement_card__1DTRk",banner:"MovieElement_banner__2mgr9",title__container:"MovieElement_title__container__sA2yE",release:"MovieElement_release__3G4qo",title:"MovieElement_title__3gaQI"}},21:function(e,t,a){e.exports={header:"Header_header__hvV37","brand-name":"Header_brand-name__cUoSt"}},24:function(e,t,a){e.exports={footer:"Footer_footer__Twk0J",content:"Footer_content__2gmFf"}},25:function(e,t,a){e.exports={hero:"Banner_hero__3j86x",container:"Banner_container__3Yfa5"}},35:function(e,t,a){e.exports={avatar:"Avatar_avatar__dCGr0"}},36:function(e,t,a){e.exports={backdrop:"Backdrop_backdrop__2POj0"}},37:function(e,t,a){e.exports={card:"Card_card__-QkFS"}},38:function(e,t,a){e.exports={cards:"MarvelMovie_cards__3GiYW"}},39:function(e,t,a){e.exports={cards:"DCMovie_cards__2rhlk"}},44:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(34),i=a.n(r),s=(a(44),a(10)),o=a(2),l=a(14),j=a(4),u=a.n(j),d=a(8),m=a(3),b=a(5),v=a.n(b),O=a(66),h=a(9),x=a.n(h),p=a(0),_=c.a.createContext({loggedIn:!1,name:"",isLoggedIn:function(){}}),f=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),o=s[0],l=s[1],j=Object(n.useState)(null),u=Object(m.a)(j,2),d=u[0],b=u[1],v=Object(n.useState)(null),O=Object(m.a)(v,2),h=O[0],x=O[1],f=function(e,t,a,n){localStorage.setItem("movie",t),localStorage.setItem("name",a),localStorage.setItem("id",n),x(t),r(e),l(a),b(n)};return Object(n.useEffect)((function(){"null"!==localStorage.getItem("movie")&&f(!0,localStorage.getItem("movie"),localStorage.getItem("name"),localStorage.getItem("id"))}),[]),Object(p.jsx)(_.Provider,{value:{id:d,name:o,loggedIn:c,logOut:function(){localStorage.setItem("movie",null),localStorage.setItem("name",""),localStorage.setItem("id",null),r(!1),x(null),l(""),b(null)},isLoggedIn:f,token:h},children:e.children})},g=_,w=function(){document.getElementsByTagName("body")[0].classList.add("overlay-added")},k=c.a.createContext({isLoginClicked:!1,isSignupCLicked:!1,onLoginClicked:function(){},onSignupClicked:function(){},removeForm:function(){}}),N=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),o=s[0],l=s[1];return Object(p.jsx)(k.Provider,{value:{isLoginClicked:c,isSignupCLicked:o,onLoginClicked:function(){w(),r(!c),l(!1)},onSignupClicked:function(){w(),l(!o),r(!1)},removeForm:function(){document.getElementsByTagName("body")[0].classList.remove("overlay-added"),r(!1),l(!1)}},children:e.children})},C=k,S=a(12),I=a.n(S),L=a(35),F=a.n(L),R=function(e){var t=e.avatar;return Object(p.jsx)("img",{className:F.a.avatar+" "+t,src:"./images/account.svg",alt:"profile"})},M=function(e){return Object(p.jsxs)("div",{className:I.a["main-container"],children:[Object(p.jsxs)("div",{className:I.a.profile,children:[Object(p.jsx)(R,{className:I.a.pic}),Object(p.jsx)("h3",{className:I.a.name,children:e.review.name})]}),Object(p.jsxs)("div",{className:I.a["review-container"],children:[Object(p.jsxs)("div",{className:I.a.review,children:[Object(p.jsx)("span",{className:I.a.title,children:"Review"})," : ",e.review.review]}),Object(p.jsxs)("div",{className:I.a.rating,children:[Object(p.jsx)("span",{className:I.a.title,children:"Rating"})," : ",e.review.rating]})]})]})},E=function(){var e=Object(n.useContext)(g),t=Object(n.useContext)(C),a=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useState)({}),i=Object(m.a)(r,2),s=i[0],j=i[1],b=Object(o.e)().pathname.substring(1),h=Object(n.useState)([]),_=Object(m.a)(h,2),f=_[0],w=_[1],k=function(){var n=Object(d.a)(u.a.mark((function n(r){var i,s,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),e.loggedIn||t.onSignupClicked(),n.prev=2,i={review:a.current.value,rating:c.current.value},n.next=6,v.a.post("".concat("https://muvi-review.herokuapp.com/","api/movies/").concat(b,"/review/").concat(localStorage.getItem("id")),i,{headers:{authorization:"Bearer ".concat(localStorage.getItem("movie"))}});case 6:s=n.sent,o=s.data,w(o.data[0]),a.current.value="",c.current.value=1,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e){return n.apply(this,arguments)}}();Object(n.useEffect)((function(){try{Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("https://muvi-review.herokuapp.com/","api/movies/").concat(b));case 2:t=e.sent,a=t.data,j(Object(l.a)({},a.data.movie[0]));case 5:case"end":return e.stop()}}),e)})))()}catch(e){console.log(e)}}),[b]),Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("https://muvi-review.herokuapp.com/","api/movies/reviews/").concat(b));case 2:t=e.sent,a=t.data,w(a[0]);case 5:case"end":return e.stop()}}),e)})))()}),[]);var N=s.thumbnail;return N&&(N=N.replace("w500","w1280")),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:x.a.title,children:s.title}),Object(p.jsx)("div",{className:x.a["image-container"],children:Object(p.jsx)("img",{src:N,alt:"Poster"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:x.a.title,children:"Overview"}),Object(p.jsx)("h3",{className:x.a.overview,children:s.overview})]}),Object(p.jsxs)("form",{className:x.a.form,onSubmit:k,action:"/",children:[Object(p.jsxs)("div",{className:x.a["rating-container"],children:[Object(p.jsx)("h1",{className:x.a["rating-title"],children:"Rating"}),Object(p.jsxs)("select",{ref:c,className:x.a.select,name:"rating",children:[Object(p.jsx)("option",{value:1,children:"\u2b50"}),Object(p.jsx)("option",{value:2,children:"\u2b50\u2b50"}),Object(p.jsx)("option",{value:3,children:"\u2b50\u2b50\u2b50"}),Object(p.jsx)("option",{value:4,children:"\u2b50\u2b50\u2b50\u2b50"}),Object(p.jsx)("option",{value:5,children:"\u2b50\u2b50\u2b50\u2b50\u2b50"})]})]}),Object(p.jsxs)("div",{className:x.a["review-container"],children:[Object(p.jsx)("h1",{className:x.a["review-title"],children:"Review"}),Object(p.jsx)("textarea",{ref:a,name:"review",className:x.a.textarea,type:"text"})]}),Object(p.jsx)("button",{className:x.a.submit,children:"Submit"})]}),f&&f.map((function(e){return Object(p.jsx)(M,{review:e},Object(O.a)())}))]})},y=a(24),G=a.n(y),P=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:G.a.footer,children:Object(p.jsxs)("h3",{className:G.a.content,children:["Made with \u2764 by ",Object(p.jsx)("a",{href:"https://github.com/Taslimism",children:"Taslim"})]})})})},D=a(21),T=a.n(D),B=a(15),J=a.n(B),H=function(e){var t=Object(n.useContext)(g),a=Object(n.useContext)(C);return Object(p.jsxs)("div",{className:J.a.auth,children:[!t.loggedIn&&Object(p.jsx)("button",{onClick:a.onLoginClicked,className:J.a.login,children:"Login"}),!t.loggedIn&&Object(p.jsx)("button",{onClick:a.onSignupClicked,className:J.a.signup,children:"Sign Up"}),t.loggedIn&&Object(p.jsx)("button",{onClick:t.logOut,className:J.a.signup,children:"Logout"}),t.loggedIn&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(R,{className:J.a.profile})," ",Object(p.jsx)("h3",{className:J.a.name,children:t.name})]})]})},V=function(e){return Object(p.jsxs)("div",{className:T.a.header,children:[Object(p.jsx)(s.b,{className:T.a["brand-name"],to:"/",children:Object(p.jsx)("h3",{className:T.a.title,children:"GoodMovies"})}),Object(p.jsx)(H,{})]})},U=a(17),A=a(11),Q=a.n(A),q=function(e){var t=Object(n.useContext)(g),a=Object(n.useContext)(C),c=Object(n.useState)({email:"",password:""}),r=Object(m.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)({name:"",email:"",password:""}),j=Object(m.a)(o,2),b=j[0],O=j[1],h=function(e){a.isLoginClicked&&s((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(U.a)({},e.target.name,e.target.value))})),a.isSignupCLicked&&O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(U.a)({},e.target.name,e.target.value))}))},x=function(){var e=Object(d.a)(u.a.mark((function e(n){var c,r,s,o,l,j,d,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!a.isSignupCLicked){e.next=14;break}return e.prev=2,e.next=5,v.a.post("".concat("https://muvi-review.herokuapp.com/","user/signup"),b);case 5:c=e.sent,a.removeForm(),r=c.data.data.user,s=r.name,o=r._id,t.isLoggedIn(!0,c.data.data.token,s,o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:if(!a.isLoginClicked){e.next=27;break}return e.prev=15,e.next=18,v.a.post("".concat("https://muvi-review.herokuapp.com/","user/login"),i);case 18:l=e.sent,a.removeForm(),j=l.data.data.user,d=j.name,m=j._id,t.isLoggedIn(!0,l.data.data.token,d,m),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(15),console.log(e.t1);case 27:case"end":return e.stop()}}),e,null,[[2,11],[15,24]])})));return function(t){return e.apply(this,arguments)}}(),_="SIGNUP";return a.isLoginClicked&&(_="LOGIN"),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{action:"",className:Q.a.form,onSubmit:x,onClick:function(e){e.stopPropagation()},children:[Object(p.jsx)("h3",{className:Q.a.title,children:_}),Object(p.jsx)("hr",{}),a.isSignupCLicked&&Object(p.jsxs)("div",{className:Q.a["input-container"],children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{id:"name",onChange:h,className:Q.a["form-control"],type:"text",name:"name",required:!0})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:Q.a["input-container"],children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{id:"email",onChange:h,className:Q.a["form-control"],type:"email",name:"email",required:!0})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:Q.a["input-container"],children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{id:"password",onChange:h,className:Q.a["form-control"],type:"password",name:"password",required:!0})]}),Object(p.jsxs)("div",{className:Q.a.switch,onClick:function(){a.isLoginClicked?a.onSignupClicked():a.onLoginClicked()},children:["Switch to ","SIGNUP"===_?"LOGIN":"SIGNUP"]}),Object(p.jsx)("button",{className:Q.a.button,children:"Submit"})]})})},Z=a(36),z=a.n(Z),W=function(e){var t=Object(n.useContext)(C);return Object(p.jsxs)("div",{onClick:t.removeForm,className:z.a.backdrop,children:[" ",e.children," "]})},Y=a(25),K=a.n(Y),X=function(){return Object(p.jsx)("div",{className:K.a.container,children:Object(p.jsx)("img",{className:K.a.hero,src:"./images/hero.jpg",alt:"Aesthetically pleasing"})})},$=a(13),ee=a.n($),te=a(16),ae=a.n(te),ne=a(37),ce=a.n(ne),re=function(e){return Object(p.jsx)("div",{className:"".concat(ce.a.card," ").concat(e.className),children:e.children})},ie=function(e){var t=e.details.release&&e.details.release.substring(0,10);return Object(p.jsxs)(re,{className:ae.a.card,children:[Object(p.jsx)("div",{className:ae.a.banner,children:Object(p.jsx)("img",{src:e.details.thumbnail,alt:"Poster"})}),Object(p.jsxs)("div",{className:ae.a.title__container,children:[Object(p.jsx)(s.b,{to:"/".concat(e.details._id),children:Object(p.jsx)("h2",{className:ae.a.title,children:e.details.title})}),Object(p.jsx)("h4",{className:ae.a.release,children:t})]})]})},se=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(m.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)([]),b=Object(m.a)(j,2),h=b[0],x=b[1],_=Object(n.useRef)(),f=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=_.current.value)&&""!==t){e.next=4;break}return l(!1),e.abrupt("return");case 4:return e.prev=4,e.next=7,v.a.post("".concat("https://muvi-review.herokuapp.com/","api/movies/search"),{search:t});case 7:a=e.sent,(n=a.data).movie.length>0&&(x(n.movie),l(!0)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("".concat("https://muvi-review.herokuapp.com/","api/movies"));case 2:t=e.sent,a=t.data,c(a.data);case 5:case"end":return e.stop()}}),e)})))()}),[]);var g=a.slice(0,6),w=a.slice(31,37);return Object(p.jsxs)("div",{children:[Object(p.jsx)("form",{className:ee.a.form,children:Object(p.jsx)("input",{onChange:f,ref:_,className:ee.a.search,placeholder:"Search for your favorite Marvel or DC movie"})}),o&&Object(p.jsx)("div",{className:ee.a.cardOver,children:h.map((function(e){return Object(p.jsx)(ie,{details:e},Object(O.a)())}))}),!o&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:Object(p.jsx)(s.b,{className:ee.a.link,to:"/DC",children:" DC MOVIES "})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:ee.a.cardOver,children:[g.map((function(e){return Object(p.jsx)(ie,{details:e},Object(O.a)())})),Object(p.jsx)(s.b,{className:ee.a.linkMore,to:"/DC",children:"...more"})]}),Object(p.jsx)("h1",{children:Object(p.jsx)(s.b,{className:ee.a.link,to:"/Marvel",children:" MARVEL MOVIES "})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:ee.a.cardOver,children:[w.map((function(e){return Object(p.jsx)(ie,{details:e},Object(O.a)())})),Object(p.jsx)(s.b,{to:"/Marvel",className:ee.a.linkMore,children:"...more"})]})]})]})},oe=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(X,{}),Object(p.jsx)(se,{})]})},le=a(38),je=a.n(le),ue=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat("https://muvi-review.herokuapp.com/","/movies"));case 3:t=e.sent,a=t.data,c(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);var r=a.slice(31,70);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:je.a.cards,children:r.map((function(e){return Object(p.jsx)(ie,{details:e},Object(O.a)())}))})})},de=function(){return Object(p.jsx)(ue,{})},me=a(39),be=a.n(me),ve=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat("https://muvi-review.herokuapp.com/","/api/movies"));case 3:t=e.sent,a=t.data,c(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);var r=a.slice(0,30);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:be.a.cards,children:r.map((function(e){return Object(p.jsx)(ie,{details:e},Object(O.a)())}))})})},Oe=function(){return Object(p.jsx)(ve,{})};var he=function(){var e=Object(n.useContext)(C);return Object(p.jsxs)(s.a,{children:[(e.isLoginClicked||e.isSignupCLicked)&&Object(p.jsxs)(W,{children:[Object(p.jsx)(q,{})," "]}),Object(p.jsx)(V,{}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",element:Object(p.jsx)(oe,{}),exact:!0}),Object(p.jsx)(o.a,{path:"/DC",element:Object(p.jsx)(Oe,{}),exact:!0}),Object(p.jsx)(o.a,{path:"/Marvel",element:Object(p.jsx)(de,{}),exact:!0}),Object(p.jsx)(o.a,{path:"/:id",element:Object(p.jsx)(E,{}),exact:!0})]}),Object(p.jsx)(P,{})]})};i.a.render(Object(p.jsx)(f,{children:Object(p.jsx)(N,{children:Object(p.jsx)(he,{})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={title:"Review_title__1vh1J","rating-container":"Review_rating-container__2ZEXJ","review-container":"Review_review-container__1JCNV","image-container":"Review_image-container__2EpHT",overview:"Review_overview__1R3hf",select:"Review_select__1y73E",textarea:"Review_textarea__1FgQA",form:"Review_form__2gTg4",submit:"Review_submit__2hLag","rating-title":"Review_rating-title__18ePd","review-title":"Review_review-title__1n8ZQ"}}},[[65,1,2]]]);
//# sourceMappingURL=main.366b0683.chunk.js.map