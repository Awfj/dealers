(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports={sideDrawer:"SideDrawer_sideDrawer__3BF9Q",modal:"SideDrawer_modal__1mAzM",header:"SideDrawer_header__1JaAk",navigation:"SideDrawer_navigation__33-Za",openSideDrawer:"SideDrawer_openSideDrawer__4ZnUs",closeSideDrawer:"SideDrawer_closeSideDrawer__3hj03",closeModal:"SideDrawer_closeModal__3gbcw"}},function(e,a,t){e.exports={cart:"Cart_cart__2ChFM",table:"Cart_table__3-d27",product:"Cart_product__LDhv5",cell:"Cart_cell__3Axzt"}},function(e,a,t){e.exports={Header:"Header_Header__16ukg",wrapper:"Header_wrapper__ERuL7",logo:"Header_logo__-U11u",icons:"Header_icons__1_CO4",cartFull:"Header_cartFull__1bD6_",navigation:"Header_navigation__3whJ3"}},,function(e,a,t){e.exports={Footer:"Footer_Footer__2Ek0I",wrapper:"Footer_wrapper__2L5YN",about:"Footer_about__2LUVR",contact:"Footer_contact__2wS5S",subscribe:"Footer_subscribe__bjL9i",copyright:"Footer_copyright__822kI"}},,,,function(e,a,t){e.exports={ContactForm:"Form_ContactForm__3Z4wM",wrapper:"Form_wrapper__2k8qZ",nameGroup:"Form_nameGroup__2vy1G",addresses:"Form_addresses__3PbpR",addressGroup:"Form_addressGroup__2OD63"}},,function(e,a,t){e.exports={navigation:"Navigation_navigation__pmCDS",active:"Navigation_active__1Vuit"}},function(e,a,t){e.exports={ProductPreview:"ProductPreview_ProductPreview__1eRIU",info:"ProductPreview_info__37GII",collection:"ProductPreview_collection__2Mz0g",price:"ProductPreview_price__3qUU7"}},function(e,a,t){e.exports={catalog:"Catalog_catalog__5H0ZT",buttons:"Catalog_buttons__L3eVv",categories:"Catalog_categories__C16n-",filter:"Catalog_filter__dbbzd"}},,function(e,a,t){e.exports={ProductsPreview:"ProductsPreview_ProductsPreview__2hOZA",catalog:"ProductsPreview_catalog__WoMJS"}},function(e,a,t){e.exports={productDetails:"ProductDetails_productDetails__2B6RR",price:"ProductDetails_price__z5TRs"}},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/cover-block-1.762c712c.png"},function(e,a,t){e.exports=t.p+"static/media/cover-block-2.1b1436fc.png"},function(e,a,t){e.exports=t.p+"static/media/banner-home.584046f0.png"},function(e,a,t){e.exports=t.p+"static/media/product-1.f3437c81.png"},function(e,a,t){e.exports=t.p+"static/media/product-2.a6934bb1.png"},function(e,a,t){e.exports=t.p+"static/media/product-3.4bf9a050.png"},function(e,a,t){e.exports=t(60)},,,,,function(e,a,t){},,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(32),l=t.n(c),o=t(3),i=(t(48),t(20)),s=t(7),u=t(8),m=t(10),d=t(9),p=t(11),E=t(16),_=t(22),h=t(33),v=t(34),f=t(12),b=t(15),g=t.n(b),w=t(13),C=t.n(w),N=t(23),S=t.n(N),k=function(e){return n.a.createElement("nav",{className:[e.navHeader,e.navSideDrawer,S.a.navigation].join(" ")},n.a.createElement(o.c,{onClick:e.close,activeClassName:S.a.active,to:"/dealers/",exact:!0},"Collecion"),n.a.createElement(o.c,{onClick:e.close,activeClassName:S.a.active,to:"/dealers/shop"},"Shop"),n.a.createElement(o.c,{onClick:e.close,activeClassName:S.a.active,to:"/dealers/contact"},"Contact"))},P=function(e){var a=[C.a.sideDrawer,C.a.closeSideDrawer],t=[C.a.modal,C.a.closeModal];return e.open&&(a=[C.a.sideDrawer,C.a.openSideDrawer],t=[C.a.modal]),n.a.createElement(r.Fragment,null,n.a.createElement("div",{onClick:e.close,className:t.join(" ")}),n.a.createElement("div",{className:a.join(" ")},n.a.createElement("div",{className:C.a.header},n.a.createElement("button",{onClick:e.close},n.a.createElement(f.a,{icon:["fas","times"]}))),n.a.createElement(k,{navSideDrawer:C.a.navigation,close:e.close})))},y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={showSideDrawer:!1},t.sideDrawerOpenHandler=function(){t.setState({showSideDrawer:!0})},t.sideDrawerCloseHandler=function(){t.setState({showSideDrawer:!1})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e="";return this.props.cart.full&&(e=g.a.cartFull),n.a.createElement("header",{className:g.a.Header},n.a.createElement(P,{open:this.state.showSideDrawer,close:this.sideDrawerCloseHandler}),n.a.createElement("div",{className:g.a.wrapper},n.a.createElement(o.b,{to:"/dealers/",className:g.a.logo},"Dealers"),n.a.createElement(k,{navHeader:g.a.navigation}),n.a.createElement("div",{className:g.a.icons},n.a.createElement(o.b,{to:"/dealers/cart",className:e},n.a.createElement(f.a,{icon:["fas","shopping-bag"],className:g.a.cart})),n.a.createElement("button",{onClick:this.sideDrawerOpenHandler},n.a.createElement(f.a,{icon:["fas","bars"]})))))}}]),a}(r.Component),j=t(17),F=t.n(j),O=function(){return n.a.createElement("footer",{className:F.a.Footer},n.a.createElement("div",{className:F.a.wrapper},n.a.createElement("div",{className:F.a.about},n.a.createElement("h4",null,"About Us"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.")),n.a.createElement("div",{className:F.a.contact},n.a.createElement("h4",null,"Contact Info"),n.a.createElement("p",null,n.a.createElement(f.a,{icon:["fas","map-marker-alt"]})," 203 Fake St. Mountain View, San Francisco, California, USA"),n.a.createElement("p",null,n.a.createElement(f.a,{icon:["fas","phone"]})," +2 392 3929 210"),n.a.createElement("p",null,n.a.createElement(f.a,{icon:["fas","envelope"]})," ","emailaddress@domain.com")),n.a.createElement("div",{className:F.a.subscribe},n.a.createElement("h4",null,"Subscribe"),n.a.createElement("form",null,n.a.createElement("input",{type:"text",placeholder:"Email"}),n.a.createElement("button",null,"Send")))),n.a.createElement("p",{className:F.a.copyright},"Copyright \xa92019 All rights reserved | This template is made with"," ",n.a.createElement(f.a,{icon:["fas","heart"]})," by"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://colorlib.com/"},"Colorlib")))},D=t(27),x=t.n(D),H=t(24),I=t.n(H),M=function(e){return n.a.createElement(o.b,{to:{pathname:"/dealers/details/"+e.id},className:I.a.ProductPreview},n.a.createElement("img",{src:e.image,alt:e.name}),n.a.createElement("div",{className:I.a.info},n.a.createElement("h3",null,e.name),n.a.createElement("p",{className:I.a.collection},e.collection),n.a.createElement("p",{className:I.a.price},"$",e.price)))},A=function(e){var a=null;return a="/dealers/shop"===e.url&&e.sortPricesCheck.includes(!0)?e.foundProducts.map(function(a){return n.a.createElement(M,{id:a.id,key:a.id,image:a.image,name:a.name,collection:e.collections.type,price:a.price})}):e.collections.products.map(function(a){return n.a.createElement(M,{id:a.id,key:a.id,image:a.image,name:a.name,collection:e.collections.type,price:a.price})}),n.a.createElement("div",{className:[x.a.ProductsPreview,x.a[e.classes]].join(" ")},a)},q=t(37),L=t.n(q),U=t(38),T=t.n(U),G=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={coverBlock:{title:"#NEW SUMMER COLLECTION 2019",items:[{name:"Jacket",image:L.a},{name:"New Denim Coat",image:T.a}]}},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement(A,{collections:this.props.collections}))}}]),a}(r.Component),R=t(25),B=t.n(R),J=function(e){var a=n.a.createElement("form",null,e.sortPrices.map(function(a){return n.a.createElement("div",{key:a},n.a.createElement("input",{onClick:function(){return e.checkbox(a)},id:a,type:"checkbox",name:a}),n.a.createElement("label",{htmlFor:a},"<"," $",a))}));return n.a.createElement("div",{className:B.a.catalog},n.a.createElement("section",null,n.a.createElement("header",null,n.a.createElement("h2",null,"Shop All"),n.a.createElement("div",{className:B.a.buttons})),n.a.createElement(A,{foundProducts:e.foundProducts,url:e.url,classes:"catalog",sortPricesCheck:e.sortPricesCheck,collections:e.collections})),n.a.createElement("aside",null,n.a.createElement("section",{className:B.a.filter},n.a.createElement("h3",null,"Filter by Price"),a)))},V=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={sortPrices:{10:!1,20:!1,30:!1},foundProducts:[]},t.checkboxHandle=function(e){var a=t.props.collections.products,r=Object(i.a)({},t.state.sortPrices),n=[];r[e]=!r[e],Object.entries(r).forEach(function(e){return e[1]?n.push(e[0]):null});var c=Math.min.apply(Math,n);t.setState({sortPrices:r,foundProducts:a.filter(function(e){return e.price<c})})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(J,{url:this.props.match.url,foundProducts:this.state.foundProducts,checkbox:this.checkboxHandle,sortPrices:Object.keys(this.state.sortPrices),sortPricesCheck:Object.values(this.state.sortPrices),collections:this.props.collections}))}}]),a}(r.Component),Z=t(28),z=t.n(Z),$=function(e){return n.a.createElement("div",{className:z.a.productDetails},n.a.createElement("img",{src:e.products[e.match.params.productId-1].image,alt:e.products[e.match.params.productId-1].name}),n.a.createElement("section",null,n.a.createElement("h2",null,e.products[e.match.params.productId-1].name),n.a.createElement("p",null,e.products[e.match.params.productId-1].description),n.a.createElement("p",{className:z.a.price},"$",e.products[e.match.params.productId-1].price),n.a.createElement("button",{onClick:function(){return e.clicked(e.match.params.productId)}},"Add to Cart")))},W=t(21),Y=t.n(W),Q=function(e){return n.a.createElement("section",{className:Y.a.ContactForm},n.a.createElement("h2",null,"Get in Touch"),n.a.createElement("div",{className:Y.a.wrapper},n.a.createElement("form",null,n.a.createElement("div",{className:Y.a.nameGroup},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{id:"firstName",type:"text"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{id:"lastName",type:"text"}))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{id:"email",type:"email"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"subject"},"Subject"),n.a.createElement("input",{id:"subject",type:"text"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"message"},"Message"),n.a.createElement("textarea",{id:"message",cols:"30",rows:"7"})),n.a.createElement("button",null,"Send Message")),n.a.createElement("div",{className:Y.a.addresses},e.addresses.map(function(e,a){return n.a.createElement("div",{className:Y.a.addressGroup,key:a},n.a.createElement("h4",null,e.city),n.a.createElement("p",null,e.address))}))))},K=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={addresses:[{city:"New York",address:"203 Fake St. Mountain View, San Francisco, California, USA"},{city:"London",address:"203 Fake St. Mountain View, San Francisco, California, USA"},{city:"Canada",address:"203 Fake St. Mountain View, San Francisco, California, USA"}]},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(Q,{addresses:this.state.addresses}))}}]),a}(r.Component),X=t(14),ee=t.n(X),ae=function(e){var a=null;return a=e.cartState.products.length>=1?n.a.createElement("div",{className:ee.a.table},e.cartState.products.map(function(t){return e.collections.products.map(function(r){return+t===r.id?n.a.createElement("div",{className:ee.a.product,key:r.id},n.a.createElement("div",{className:ee.a.cell},n.a.createElement("img",{src:r.image,alt:r.name})),n.a.createElement("div",{className:ee.a.cell},n.a.createElement("p",null,r.name)),n.a.createElement("div",{className:ee.a.cell},n.a.createElement("p",null,"1")),n.a.createElement("div",{className:ee.a.cell},n.a.createElement("p",null,"$",r.price)),n.a.createElement("div",{className:ee.a.cell},n.a.createElement("button",{onClick:function(){return e.clicked(r.id)}},"Remove"))):a=null})})):n.a.createElement("h1",null,"Your Cart is empty"),n.a.createElement("div",{className:ee.a.cart},a)},te=t(39),re=t.n(te),ne=t(40),ce=t.n(ne),le=t(41),oe=t.n(le),ie=t(42),se=t.n(ie);_.b.add(h.a,v.a);var ue=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={collections:{name:"Madewell",type:"Summer Collection",price:"1.999",discountPrice:"1.499",image:re.a,products:[{id:1,name:"The Shoe",price:"9.50",image:ce.a,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptas? Cum expedita natus et fugit non sapiente adipisci distinctio minima mollitia, molestias possimus nulla assumenda, odit sequi a quidem est?"},{id:2,name:"Marc Jacobs Bag",price:"19.50",image:oe.a,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium aliquid pariatur delectus itaque praesentium repellendus! Accusamus velit, obcaecati cupiditate voluptatem corrupti molestiae dicta itaque non. Ipsam, explicabo at."},{id:3,name:"The Belt",price:"29.50",image:se.a,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sequi accusamus quisquam, delectus distinctio ad omnis similique dolorum pariatur provident enim. Deleniti suscipit provident sed quam doloribus, amet tempora numquam."}]},cart:{full:!1,products:[]}},t.addToCartHandler=function(e){var a=t.state.cart.products;a.push(e),t.setState(function(e){return{cart:Object(i.a)({},e.cart,{products:a})}}),t.cartIconHandler()},t.removeFromCartHandler=function(e){var a=t.state.cart.products,r=a.findIndex(function(a){return+a===e?a:null});a.splice(r,1),t.setState(function(e){return{cart:Object(i.a)({},e.cart,{products:a})}}),t.cartIconHandler()},t.cartIconHandler=function(){var e=Object(i.a)({},t.state.cart);0===t.state.cart.products.length?(e.full=!1,t.setState({cart:e})):(e.full=!0,t.setState({cart:e}))},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(r.Fragment,null,n.a.createElement(y,{cart:this.state.cart}),n.a.createElement(E.c,null,n.a.createElement(E.a,{path:"/dealers/shop",render:function(a){return n.a.createElement(V,Object.assign({collections:e.state.collections},a))}}),n.a.createElement(E.a,{path:"/dealers/contact",render:function(){return n.a.createElement(K,{banner:e.state.collections})}}),n.a.createElement(E.a,{path:"/dealers/cart",render:function(a){return n.a.createElement(ae,Object.assign({collections:e.state.collections,cartState:e.state.cart,clicked:e.removeFromCartHandler},a))}}),n.a.createElement(E.a,{path:"/dealers/details/:productId",render:function(a){return n.a.createElement($,Object.assign({clicked:e.addToCartHandler,products:e.state.collections.products},a))}}),n.a.createElement(E.a,{path:"/dealers",exact:!0,render:function(){return n.a.createElement(G,{banner:e.state.collections,collections:e.state.collections})}})),n.a.createElement(O,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=n.a.createElement(o.a,null,n.a.createElement(ue,null));l.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[43,1,2]]]);
//# sourceMappingURL=main.49fb36a3.chunk.js.map