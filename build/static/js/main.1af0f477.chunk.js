(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),i=c.n(n),s=c(58),r=c.n(s),o=(c(71),c(59)),l=c(7),d=(c(72),c(73),c(60)),j=c.n(d),u=c(61),m=c.n(u),h=c(17),b=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(a.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:i})},p=function(){return Object(n.useContext)(b)},x=c(44),_=x.a.initializeApp({apiKey:"AIzaSyDkoQ42PMy8sNh0Z99Jn4h1ul9lCXtCTHo",authDomain:"e-clonegb.firebaseapp.com",projectId:"e-clonegb",storageBucket:"e-clonegb.appspot.com",messagingSenderId:"722869366956",appId:"1:722869366956:web:9864b9581486de4d3daf09",measurementId:"G-D7F1Y2BC68"}).firestore(),g=x.a.auth(),v=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,i=c.user;t[1];return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(j.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(h.b,{to:!i&&"/login",children:Object(a.jsxs)("div",{onClick:function(){i&&(null===g||void 0===g||g.signOut())},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",i?i.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:i?"Sign Out":"Sign In"})]})}),Object(a.jsx)(h.b,{to:"/orders",className:"header__clearlink",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(h.b,{to:"/checkout",className:"header__clearlink",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(m.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:n.length})]})})]})]})};c(84),c(85);var f=function(e){var t=e.id,c=e.title,n=e.image,i=e.price,s=e.rating,r=p(),o=Object(l.a)(r,2),d=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"},t)}))})]}),Object(a.jsx)("img",{src:n,alt:""}),Object(a.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:i,rating:s}})},children:"Add to Basket"})]})},N=["All","BestSeller","Mobiles","Prime","Electronic","Fashion","New Releases","Customer Service","Amazon Pay","Computers","Home & Kitchen","Today's Deals"];var S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"item-container",children:N&&N.map((function(e,t){return Object(a.jsx)("p",{children:e})}))}),Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"12321341",title:"Ethiopian/Eritrean Traditional Coffee Set S\xe1b\xe1 \u1233\u1263 Edition. Full Set",price:109,rating:4,image:"https://m.media-amazon.com/images/I/61qscYvyjyL._AC_SL1000_.jpg"}),Object(a.jsx)(f,{id:"49538094",title:"Handmade Ethiopian Cross Pendant DIY Rope Chain for Women Girls African Wedding Party Gold Color Eritrea Jewelry Crosses - (Type: Black Rope/Length: 45cm Rope)",price:8.35,rating:4,image:"https://m.media-amazon.com/images/I/61oM11IiXzL._AC_.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"4903850",title:"Ethiopian Flag In Ethiopia, Rastafarian, Ethiopia Flag Pullover Hoodie",price:31.99,rating:3,image:"https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1kY7UbdVfS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466._SX._UX._SY._UY_.png"}),Object(a.jsx)(f,{id:"99903850",title:"4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen",price:139.99,rating:4,image:"https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"}),Object(a.jsx)(f,{id:"3254354345",title:"AquaSonic Black Series Ultra Whitening Toothbrush \u2013 ADA Accepted Electric Toothbrush - 8 Brush Heads & Travel Case - Ultra Sonic Motor & Wireless Charging - 4 Modes w Smart Timer - Sonic Electric",price:39.95,rating:4,image:"https://m.media-amazon.com/images/I/716hFx-iA3L._SL1500_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"})}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"903850",title:"2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime",price:69.99,rating:5,image:"https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"}),Object(a.jsx)(f,{id:"90829332",title:"Persian Area Rugs 2305 Modern Abstract Area Rug Carpet, Navy / 8 x 10,2305 Navy 8x11",price:170,rating:5,image:"https://m.media-amazon.com/images/I/81Ivw-YP9KL._AC_SL1440_.jpg"}),Object(a.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})]})]})})]})},C=(c(86),function(e){var t=e.id,c=e.image,n=e.title,i=e.price,s=e.rating,r=e.hideButton,o=p(),d=Object(l.a)(o,2),j=(d[0].basket,d[1]);return Object(a.jsxs)("div",{className:"checkoutProduct ",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"})}))}),!r&&Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})," "]})]})}),y=(c(87),c(26)),k=c.n(y),E=c(13),A=function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket,n=(t[1],Object(E.f)());return Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(k.a,{renderText:function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Subtotal(",c.length," items):",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{onClick:function(e){return n.push("/payment")},children:"Proceed to checkOut"})]})},T=(c(89),function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket;t[1];return Object(a.jsxs)("div",{className:"checkOut",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(a.jsx)("h3",{children:"Hello"}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),c.map((function(e){return Object(a.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(A,{})})]})});c(90);var P=function(){var e=Object(E.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign-in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(i,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(i,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},B=c(28),w=c.n(B),I=c(43),L=c(25),M=(c(92),c(62)),R=c.n(M).a.create({baseURL:"https://us-central1-e-clonegb.cloudfunctions.net/api"});var Y=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],i=c.basket,s=c.user,r=t[1],o=Object(E.f)(),d=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},j=Object(L.useStripe)(),u=Object(L.useElements)(),m=Object(n.useState)(null),b=Object(l.a)(m,2),O=b[0],x=b[1],g=Object(n.useState)(!0),v=Object(l.a)(g,2),f=v[0],N=v[1],S=Object(n.useState)(!1),y=Object(l.a)(S,2),A=y[0],T=y[1],P=Object(n.useState)(""),B=Object(l.a)(P,2),M=B[0],Y=B[1],z=Object(n.useState)(!0),D=Object(l.a)(z,2),U=D[0],F=D[1];Object(n.useEffect)((function(){(function(){var e=Object(I.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"post",url:"/payments/create?total=".concat(100*d(i))});case 2:t=e.sent,F(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log("THE SECRET IS >>>",U);var G=function(){var e=Object(I.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Y(!0),e.next=4,j.confirmCardPayment(U,{payment_method:{card:u.getElement(L.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:i,amount:t.amount,created:t.created}),T(!0),x(null),Y(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"payment",children:Object(a.jsxs)("div",{className:"payment__container",children:[Object(a.jsxs)("h1",{children:["Checkout (",Object(a.jsxs)(h.b,{to:"/checkout",children:[null===i||void 0===i?void 0:i.length," items"]}),")"]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Delivery Address"})}),Object(a.jsxs)("div",{className:"payment__address",children:[Object(a.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(a.jsx)("p",{children:"123 React Lane"}),Object(a.jsx)("p",{children:"Chicago, IL"})]})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Review items and delivery"})}),Object(a.jsx)("div",{className:"payment__items",children:i.map((function(e){return Object(a.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Payment Method"})}),Object(a.jsx)("div",{className:"payment__details",children:Object(a.jsxs)("form",{onSubmit:G,children:[Object(a.jsx)(L.CardElement,{onChange:function(e){N(e.empty),x(e.error?e.error.message:"")}}),Object(a.jsxs)("div",{className:"payment__priceContainer",children:[Object(a.jsx)(k.a,{renderText:function(e){return Object(a.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:d(i),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{disabled:M||f||A,children:Object(a.jsx)("span",{children:M?Object(a.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),O&&Object(a.jsx)("div",{children:O})]})})]})]})})},z=c(63),D=(c(110),c(111),c(64)),U=c.n(D);var F=function(e){var t,c=e.order;return Object(a.jsxs)("div",{className:"order",children:[Object(a.jsx)("h2",{children:"Order"}),Object(a.jsx)("p",{children:U.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(a.jsx)("p",{className:"order__id",children:Object(a.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(C,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(a.jsx)(k.a,{renderText:function(e){return Object(a.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var G=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],i=(c.basket,c.user),s=(t[1],Object(n.useState)([])),r=Object(l.a)(s,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){i?_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[i]),Object(a.jsxs)("div",{className:"orders",children:[Object(a.jsx)("h1",{children:"Your Orders"}),Object(a.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(a.jsx)(F,{order:e})}))})]})},K=Object(z.a)("pk_test_51KhiYmFpYoYo8YjhENMCrBvt3qFYmn7ZuA8LgnTPC41SVEQMPK7ecWOvoG5l0jCc6Go2fuwR0Vlyy5eRTsq6Tth800tfJ3sG9h");var H=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(E.c,{children:[Object(a.jsx)(E.a,{path:"/login",children:Object(a.jsx)(P,{})}),Object(a.jsxs)(E.a,{path:"/orders",children:[Object(a.jsx)(v,{}),Object(a.jsx)(G,{})]}),Object(a.jsx)(E.a,{path:"/payment",children:Object(a.jsx)(L.Elements,{stripe:K,children:Object(a.jsx)(Y,{})})}),Object(a.jsxs)(E.a,{path:"/checkout",children:[Object(a.jsx)(v,{}),Object(a.jsx)(T,{})]}),Object(a.jsxs)(E.a,{path:"/",children:[Object(a.jsx)(v,{}),Object(a.jsx)(S,{})]})]})})})},W=c(21),V=c(22),X=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(V.a)(Object(V.a)({},e),{},{basket:[].concat(Object(W.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(V.a)(Object(V.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(W.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(V.a)(Object(V.a)({},e),{},{basket:a});case"SET_USER":return Object(V.a)(Object(V.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:X,children:Object(a.jsx)(H,{})})}),document.getElementById("root"))},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},92:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.1af0f477.chunk.js.map