(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(15),s=n.n(r),i=(n(21),n(2)),o=(n(22),n(23),n.p+"static/media/Logo.56bda82b.svg"),l=n(0),u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container container__header",children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("img",{src:o,alt:"logo",className:"logo"})})}),Object(l.jsxs)("div",{className:"header__buttons",children:[Object(l.jsx)("div",{className:"button__user",children:Object(l.jsx)("button",{className:"button",type:"button",children:"User"})}),Object(l.jsx)("div",{className:"button__user",children:Object(l.jsx)("button",{className:"button",type:"button",children:"Sign up"})})]})]})})})},j=(n(25),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container container__infoSection",children:Object(l.jsxs)("div",{className:"infoSection",children:[Object(l.jsxs)("h1",{children:["Test assignment for",Object(l.jsx)("br",{}),"front-end developer"]}),Object(l.jsxs)("p",{className:"infoSection__textInfo",children:["What defines a good front-end developer is",Object(l.jsx)("br",{}),"one that has skilled knowledge of HTML,",Object(l.jsx)("br",{}),"CSS, JS with a vast understanding of User",Object(l.jsx)("br",{}),"design thinking as they'll be building web",Object(l.jsx)("br",{}),"interfaces with accessibility in mind. They",Object(l.jsx)("br",{}),"should also be excited to learn, as the world",Object(l.jsx)("br",{}),"of Front-End Development keeps evolving."]}),Object(l.jsx)("div",{className:"button__user",children:Object(l.jsx)("button",{className:"button",type:"button",children:"Sign up"})})]})})})}),d=n(6),b=n.n(d),m=n(4),h=n(7),A=(n(27),n(3)),p="https://frontend-test-assignment-api.abz.agency/api/v1/";function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0,c={method:t};if(n){var r=new FormData;Object.entries(n).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];r.append(n,a)})),c.body=r}return a&&(c.headers=Object(A.a)(Object(A.a)({},c.headers),{},{Token:a})),fetch(p+e,c).then(function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=5;break}return e.next=3,t.json();case 3:throw n=e.sent,new Error("Request failed with status ".concat(t.status,": ").concat(n.message));case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw e}))}var O=function(e){return f(e)},g=function(e,t,n){return f(e,"POST",t,n)},x=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("token");case 2:return n=e.sent,a=n.token,e.abrupt("return",g("users",t,a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(1),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(a.useState)(!1),d=Object(i.a)(j,2),A=d[0],p=d[1];Object(a.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,new Promise((function(e){return setTimeout(e,5e3)}));case 4:return e.next=6,n=6,O("users?page=".concat(o,"&count=").concat(n));case 6:t=e.sent,c((function(e){return[].concat(Object(m.a)(e),Object(m.a)(t.users))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching newest cards:",e.t0);case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}var n}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}})()()}),[o]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container container__cardCatalog",children:[Object(l.jsx)("h1",{className:"cardCatalog__header",children:"Working with GET request"}),Object(l.jsx)("div",{className:"card__container",children:n.map((function(e){var t=e.id,n=e.photo,a=e.name,c=e.position,r=e.email,s=e.phone,i=a.length>25?"".concat(a.slice(0,25),"..."):a,o=c.length>20?"".concat(c.slice(0,20),"..."):c,u=r.length>30?"".concat(r.slice(0,25),"..."):r;return Object(l.jsxs)("div",{className:"cardCatalog__card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"cardCatalog__card__photo",src:n,alt:"card__photo"})}),Object(l.jsx)("div",{className:"cardCatalog__card__name","data-title":a,children:i}),Object(l.jsxs)("div",{className:"cardCatalog__card__info","data-title":"".concat(o,"\n").concat(u,"\n").concat(s),children:[o,Object(l.jsx)("br",{}),u,Object(l.jsx)("br",{}),s]})]},t)}))}),A?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("img",{className:"loader__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPgSURBVHgB1VpNVhpBEK7uwbjLIycI7v3BEwSe0feyip5APIF4AuAGegLJCTSrvBckkBOAYrIVTxDWMjOVqh5QmO4BBhlsvoUw3U1Pf11V3fWjgKTxo5WB9dQlgMgAYBdQtAH939D32vBltwuvhICkcdNp0Vuyxj6hyFzAk9ecl0zyBOodnG2gqMJTvxKXiISkIaA520AswLvUAzQ6JYiBJRBwTwDx28zjfShD/f5B2c4s08My8bOVBelk6NshvflTYNiR6BHxE/i8fT1hzJIJhFG/K9Df0kQikiSS36pEdb8tgSGmEZlAwg4CjEYrDV6qTCs6NfZLUYD8pmZL9hAYotYp046bTqIePLm74WM2+VMoLva3ynSknhh60rC+dhVutI8AY2+7SseprvOIWajdlkeb7FOhUdx0zg020QPpbkB+t8cPdkpgCMctKwdwHGlwZXH4YLcEGLVOjra5EWp9loLdEmDsbzUN/hRLocBf7CfA8AwG7civ/GG/Cg1R7/wD3vlRSPfDakiAgb7u0fadw9UhwNFbGFJkV4eApLBTA2ZWxwYYmh2I7upIQEH0xp8xvVoEEEMEIJ16ztsg5KjhmlzWs0XkaxKB5DBzvCk1snjGIT2zjuXBRqDIQIiBDBpHB0UkoawAZsaflRFj+HxNQ/3vR7ANnNEIA5EIoP+odXiufSoUpGPCuJVRNxzYBhE4b+PApqQbTk8cCTgG+5DTWhyvLVVoZvK3a60c2AKVNwoZMEKb1j64iT3/u/YjJxUryZospL4WgReqRz2k/CpwmDYKvhtskIJp9xkD5y4gwGrkw4U+aO1SZczeClf8bsPucy0hH3gLL75Qyj2HsBSYub/2dqqUdkrm3e8/h5gvBKKkAFiMW3RYCBp/SuCLotbu+5Xh7jP0eOAX1bRM7kREcjURNO6Pwceq3kE5or3tjdEW3Z0W7hFoqkTgCZchCbXzpsVzLsjTPARzRKYsX1wa+0CcKx0cpPYWBjZY1nmT2jAQj0zVGnNAE5VcDWYqkmG3BkWJxYCzb+9pzqjFs95HlJrElImjcvXDn3dp9ooiPA944Q7NjwY3YQhe/P5OOap7elB/c0cFOaVOE+4DJkLuCNKN7ssuHGy2jcM4+nvn5EjwO6qsOnFO0nkPz+Bg8ubMlpVo0It9pzGlqhiamUlxZlnwItOkw8HnLGA/x6HDJD89tI2XVpmqUq9GcBepKs1siJ8XYml4DhXjxCJd7mDh7A3EPN3mT2wFapWjmPo08p85pgHJbgTZjfSr8x7Li8nMBVIhEoKLETuD7EFmZEQvSEpR/I3wSK5wWwVSC7hL/gPqn2mljBDKAgAAAABJRU5ErkJggg==",alt:"Loading..."})}):Object(l.jsx)("div",{className:"button__show-more",children:Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){u((function(e){return e+1}))},children:"Show more"})})]})})},v=n(5),B=(n(28),n(29),n(10)),Q=n.n(B),N=n(12),w=N.a().shape({name:N.b().required("Name is required").min(2,"Name must be at least 2 characters").max(60,"Name must be at most 60 characters"),email:N.b().email("Invalid email").required("Email is required").min(2,"Email must be at least 2 characters").max(100,"Email must be at most 100 characters"),phone:N.b().matches(/^(\+380|0)\d{9}$/,"Invalid phone format").required("Phone is required")}),k=function(e){var t=e.formData,n=e.onInputChange,c=function(){var e=Object(a.useState)({name:!1,email:!1,phone:!1}),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(i.a)(r,2),o=s[0],l=s[1];return{fieldFocused:n,errors:o,handleFieldFocus:function(e){c((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},e,!0))}))},handleFieldBlur:function(e){c((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},e,!1))}))},handleInputChange:function(e,t){if("phone"===e){var n=t.startsWith("+380");l((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},e,n?"":"Phone number must start with '+380'"))}))}else w.validateAt(e,Object(v.a)({},e,t)).then((function(){l((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},e,""))}))})).catch((function(t){l((function(n){return Object(A.a)(Object(A.a)({},n),{},Object(v.a)({},e,t.message))}))}))},handleSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),n={name:t.get("name"),email:t.get("email"),phone:t.get("phone")};w.validate(n,{abortEarly:!1}).then((function(){console.log("Form submitted")})).catch((function(e){var t={};e.inner.forEach((function(e){t[e.path]=e.message})),l(t)}))},resetForm:function(){l({})}}}(),r=c.fieldFocused,s=c.errors,o=c.handleFieldFocus,u=c.handleFieldBlur,j=c.handleInputChange,d=c.handleSubmit;return Object(l.jsxs)("form",{className:"form",onSubmit:d,children:[Object(l.jsxs)("div",{className:"form__fieldset",children:[r.name&&Object(l.jsx)("div",{className:"form__fieldset-name",children:"Your name"}),Object(l.jsx)("input",{type:"text",placeholder:"Your name",id:"name",className:Q()("form__field",{"form__error-field":s.name}),onFocus:function(){return o("name")},onBlur:function(){return u("name")},onChange:function(e){n("name",e.target.value),j("name",e.target.value)},value:t.name,required:!0}),s.name&&Object(l.jsx)("div",{className:"form__error",children:s.name})]}),Object(l.jsxs)("div",{className:"form__fieldset",children:[r.email&&Object(l.jsx)("div",{className:"form__fieldset-name",children:"Email"}),Object(l.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",className:Q()("form__field",{"form__error-field":s.email}),onFocus:function(){return o("email")},onBlur:function(){return u("email")},onChange:function(e){n("email",e.target.value),j("email",e.target.value)},value:t.email,required:!0}),s.email&&Object(l.jsx)("div",{className:"form__error",children:s.email})]}),Object(l.jsxs)("div",{className:"form__fieldset",children:[r.phone&&Object(l.jsx)("div",{className:"form__fieldset-name",children:"Phone"}),Object(l.jsx)("input",{type:"text",id:"phone",name:"phone",placeholder:"Phone",className:Q()("form__field",{"form__error-field":s.phone}),onFocus:function(){return o("phone")},onBlur:function(){return u("phone")},onChange:function(e){n("phone",e.target.value),j("phone",e.target.value)},value:t.phone,required:!0}),s.phone&&Object(l.jsx)("div",{className:"form__error",children:s.phone}),Object(l.jsx)("div",{className:"form__field__example",children:"+38 (XXX) XXX - XX - XX"})]})]})},I=(n(30),function(e){var t=e.onInputChange,n=function(e){var n=Number(e.target.id);t("position_id",n)};return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("p",{className:"radio-info",children:"Select your position:"}),Object(l.jsxs)("form",{className:"radio-section",children:[Object(l.jsxs)("label",{htmlFor:"1",className:"radio-section__field",children:[Object(l.jsx)("input",{id:"1",type:"radio",className:"radio-button",name:"position",value:"Frontend developer",onChange:n}),Object(l.jsx)("p",{className:"radio-button--name",children:"Frontend developer"})]}),Object(l.jsxs)("label",{htmlFor:"2",className:"radio-section__field",children:[Object(l.jsx)("input",{id:"2",type:"radio",className:"radio-button",name:"position",value:"Backend developer",onChange:n}),Object(l.jsx)("p",{className:"radio-button--name",children:"Backend developer"})]}),Object(l.jsxs)("label",{htmlFor:"3",className:"radio-section__field",children:[Object(l.jsx)("input",{id:"3",type:"radio",className:"radio-button",name:"position",value:"Designer",onChange:n}),Object(l.jsx)("p",{className:"radio-button--name",children:"Designer"})]}),Object(l.jsxs)("label",{htmlFor:"4",className:"radio-section__field",children:[Object(l.jsx)("input",{id:"4",type:"radio",className:"radio-button",name:"position",value:"QA",onChange:n}),Object(l.jsx)("p",{className:"radio-button--name",children:"QA"})]})]})]})}),S=(n(31),function(e){var t=e.onInputChange,n=Object(a.useState)("Upload your photo"),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),j=u[0],d=u[1],b=Q()("uploadImgInput__field",{"file-selected":j});return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("label",{htmlFor:"uploadImgInput",className:"uploadImgInput--label",children:[Object(l.jsx)("p",{className:"uploadImgInput__button",children:"Upload"}),Object(l.jsx)("p",{className:b,children:r}),Object(l.jsx)("input",{type:"file",accept:"image/jpeg, image/jpg",id:"uploadImgInput",className:"input",onChange:function(e){var n=e.target.files&&e.target.files[0];if(n){var a=new Image;a.src=URL.createObjectURL(n),a.onload=function(){a.width<70||a.height<70?alert("Minimum size of photo should be 70x70px"):n.type.includes("jpeg")||n.type.includes("jpg")?n.size>5242880?alert("The photo size must not exceed 5 MB"):(t("photo",n),s(n.name),d(!0)):alert("The photo format must be jpeg/jpg")}}}})]})})}),_=(n(32),function(e){var t=e.formData,n=Object.values(t).every((function(e){return""!==e}))&&0!==t.position_id,a="button button__form ".concat(n?"button__valid":"button__invalid");return Object(l.jsx)("button",{type:"submit",className:a,children:"Sign up"})}),y=function(e){var t=e.setsuccessRequset,n=Object(a.useState)({name:"",email:"",phone:"",position_id:0,photo:null}),c=Object(i.a)(n,2),r=c[0],s=c[1],o=new File(["data:image/jpeg;base64,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"],"Default_Img.jpg",{type:"image/jpeg"}),u=function(){var e=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,null!==r.photo){e.next=7;break}return s((function(e){return Object(A.a)(Object(A.a)({},e),{},{photo:o})})),e.next=6,x(r);case 6:return e.abrupt("return");case 7:return e.next=9,x(r);case 9:t(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t(!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e,t){s((function(n){return Object(A.a)(Object(A.a)({},n),{},Object(v.a)({},e,t))}))};return Object(l.jsx)("div",{className:"container container__formSection",children:Object(l.jsxs)("form",{className:"formSection",onSubmit:u,children:[Object(l.jsx)("h1",{className:"formSection__text",children:"Working with POST request"}),Object(l.jsx)(k,{formData:r,onInputChange:j}),Object(l.jsx)(I,{onInputChange:j}),Object(l.jsx)(S,{onInputChange:j}),Object(l.jsx)(_,{formData:r})]})})},D=(n(33),n.p+"static/media/success-image.147ff01a.svg"),W=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"success__section",children:[Object(l.jsx)("h1",{className:"success__section--header",children:"User successfully registered"}),Object(l.jsx)("img",{src:D,alt:"SuccessImg"})]})})},C=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return setTimeout((function(){return c(!1)}),3e3),Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(j,{}),Object(l.jsx)(E,{}),Object(l.jsx)(y,{setsuccessRequset:c}),n&&Object(l.jsx)(W,{})]})};n(34);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.01ec5b78.chunk.js.map