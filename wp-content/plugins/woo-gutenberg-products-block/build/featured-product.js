this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["featured-product"]=function(e){function t(t){for(var n,i,a=t[0],u=t[1],s=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={24:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;return c.push([697,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},102:function(e,t){},103:function(e,t){!function(){e.exports=this.wp.coreData}()},108:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(20),i=r.n(c),a=r(0),u=r(44),s=r(3),l=r(8),d=r.n(l),p=["className","item","isSelected","isLoading","onSelect","disabled"];t.a=function(e){var t=e.className,r=e.item,n=e.isSelected,c=e.isLoading,l=e.onSelect,f=e.disabled,b=i()(e,p);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(u.c,o()({},b,{key:r.id,className:t,isSelected:n,item:r,onSelect:l,isSingle:!0,disabled:f})),n&&c&&Object(a.createElement)("div",{key:"loading",className:d()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(a.createElement)(s.Spinner,null)))}},123:function(e,t,r){"use strict";var n=r(32),o=r.n(n),c=r(4),i=r.n(c),a=r(11),u=r.n(a),s=r(0),l=r(1),d=r(6),p=(r(2),r(44)),f=r(22),b=r(15),h=r.n(b),g=r(16),m=r.n(g),v=r(17),O=r.n(v),y=r(18),w=r.n(y),j=r(9),k=r.n(j);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k()(e);if(t){var o=k()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w()(this,r)}}var P=Object(f.createHigherOrderComponent)((function(e){var t=function(t){O()(n,t);var r=_(n);function n(){return h()(this,n),r.apply(this,arguments)}return m()(n,[{key:"render",value:function(){var t=this.props.selected,r=null==t;return Object(s.createElement)(e,u()({},this.props,{selected:r?[]:[t]}))}}]),n}(s.Component);return t.defaultProps={selected:null},t}),"withTransformSingleSelectToMultipleSelect"),S=r(255),E=r(31),x=r.n(E),R=r(12),C=r.n(R),A=r(10),I=r.n(A),B=r(37),T=r.n(B),D=r(39),L=r(41);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k()(e);if(t){var o=k()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w()(this,r)}}var V=Object(f.createHigherOrderComponent)((function(e){var t=function(t){O()(n,t);var r=U(n);function n(){var e;h()(this,n);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o)),i()(C()(e),"state",{error:null,loading:!1,variations:{}}),i()(C()(e),"loadVariations",(function(){var t=e.props.products,r=e.state,n=r.loading,o=r.variations;if(!n){var c=e.getExpandedProduct();if(c&&!o[c]){var a=t.find((function(e){return e.id===c}));a.variations&&0!==a.variations.length?(e.setState({loading:!0}),Object(D.g)(c).then((function(t){var r=t.map((function(e){return N(N({},e),{},{parent:c})}));e.setState({variations:N(N({},e.state.variations),{},i()({},c,r)),loading:!1,error:null})})).catch(function(){var t=x()(I.a.mark((function t(r){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.a)(r);case 2:n=t.sent,e.setState({variations:N(N({},e.state.variations),{},i()({},c,null)),loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):e.setState({variations:N(N({},e.state.variations),{},i()({},c,null)),loading:!1,error:null})}}})),e}return m()(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selected,r=e.showVariations;t&&r&&this.loadVariations()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.isLoading,n=t.selected;t.showVariations&&(!T()(e.selected,n)||e.isLoading&&!r)&&this.loadVariations()}},{key:"isProductId",value:function(e){return this.props.products.some((function(t){return t.id===e}))}},{key:"findParentProduct",value:function(e){return this.props.products.filter((function(t){return t.variations&&t.variations.find((function(t){return t.id===e}))}))[0].id}},{key:"getExpandedProduct",value:function(){var e=this.props,t=e.isLoading,r=e.selected;if(!e.showVariations)return null;var n=r&&r.length?r[0]:null;return n?this.prevSelectedItem=n:this.prevSelectedItem&&(t||this.isProductId(this.prevSelectedItem)||(n=this.prevSelectedItem)),!t&&n?this.isProductId(n)?n:this.findParentProduct(n):null}},{key:"render",value:function(){var t=this.props,r=t.error,n=t.isLoading,o=this.state,c=o.error,i=o.loading,a=o.variations;return Object(s.createElement)(e,u()({},this.props,{error:c||r,expandedProduct:this.getExpandedProduct(),isLoading:n,variations:a,variationsLoading:i}))}}]),n}(s.Component);return i()(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),G=r(46),F=r(8),H=r.n(F),z=r(108);r(178);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={list:Object(l.__)("Products","woo-gutenberg-products-block"),noItems:Object(l.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(l.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(l.__)("Product search results updated.","woo-gutenberg-products-block")},$=function(e){var t=e.expandedProduct,r=e.error,n=e.instanceId,c=e.isCompact,i=e.isLoading,a=e.onChange,f=e.onSearch,b=e.products,h=e.renderItem,g=e.selected,m=e.showVariations,v=e.variations,O=e.variationsLoading,y=function(e){var t=e.item,r=e.search,o=e.depth,c=void 0===o?0:o,a=e.isSelected,f=e.onSelect,b=t.variations&&Array.isArray(t.variations)?t.variations.length:0,h=H()("woocommerce-search-product__item","woocommerce-search-list__item","depth-".concat(c),"has-count",{"is-searching":r.length>0,"is-skip-level":0===c&&0!==t.parent,"is-variable":b>0});if(!t.breadcrumbs.length)return Object(s.createElement)(z.a,u()({},e,{className:H()(h,{"is-selected":a}),isSelected:a,item:t,onSelect:function(){return function(){f(t)()}},isLoading:i||O,countLabel:t.variations.length>0?Object(l.sprintf)(Object(l.__)("%1$d variations","woo-gutenberg-products-block"),t.variations.length):null,name:"products-".concat(n),"aria-label":Object(l.sprintf)(Object(l._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woo-gutenberg-products-block"),t.name,t.variations.length)}));var g=Object(d.isEmpty)(t.variation)?e:W(W({},e),{},{item:W(W({},e.item),{},{name:t.variation}),"aria-label":"".concat(t.breadcrumbs[0],": ").concat(t.variation)});return Object(s.createElement)(p.c,u()({},g,{className:h,name:"variations-".concat(n)}))};if(r)return Object(s.createElement)(G.a,{error:r});var w=v&&v[t]?v[t]:[],j=[].concat(o()(b),o()(w));return Object(s.createElement)(p.b,{className:"woocommerce-products",list:j,isCompact:c,isLoading:i,isSingle:!0,selected:j.filter((function(e){var t=e.id;return g.includes(t)})),onChange:a,renderItem:h||(m?y:null),onSearch:f,messages:Q,isHierarchical:!0})};$.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1};t.a=P(Object(S.a)(V(Object(f.withInstanceId)($))))},125:function(e,t,r){"use strict";var n=r(0),o=r(33),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},127:function(e,t){},14:function(e,t,r){"use strict";r.d(t,"m",(function(){return c})),r.d(t,"k",(function(){return i})),r.d(t,"l",(function(){return a})),r.d(t,"h",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"g",(function(){return p})),r.d(t,"f",(function(){return f})),r.d(t,"j",(function(){return b})),r.d(t,"i",(function(){return h})),r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return m})),r.d(t,"e",(function(){return v})),r.d(t,"p",(function(){return y})),r.d(t,"q",(function(){return w})),r.d(t,"n",(function(){return j})),r.d(t,"o",(function(){return k}));var n,o=r(5),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,restApiRoutes:{},wordCountType:"words"}),i=c.pluginUrl+"assets/",a=c.pluginUrl+"build/",u=c.buildPhase,s=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=o.STORE_PAGES.checkout.id,d=o.STORE_PAGES.checkout.permalink,p=o.STORE_PAGES.privacy.permalink,f=o.STORE_PAGES.privacy.title,b=o.STORE_PAGES.terms.permalink,h=o.STORE_PAGES.terms.title,g=o.STORE_PAGES.cart.id,m=o.STORE_PAGES.cart.permalink,v=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),O=r(25),y=function(e,t){if(u>2)return Object(O.registerBlockType)(e,t)},w=function(e,t){if(u>1)return Object(O.registerBlockType)(e,t)},j=function(){return u>2},k=function(){return u>1}},178:function(e,t){},19:function(e,t){!function(){e.exports=this.wp.apiFetch}()},21:function(e,t){!function(){e.exports=this.wp.url}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.data}()},24:function(e,t){!function(){e.exports=this.wp.blockEditor}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},255:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(31),i=r.n(c),a=r(15),u=r.n(a),s=r(16),l=r.n(s),d=r(12),p=r.n(d),f=r(17),b=r.n(f),h=r(18),g=r.n(h),m=r(9),v=r.n(m),O=r(0),y=r(10),w=r.n(y),j=r(6),k=r(22),_=(r(2),r(14)),P=r(39),S=r(41);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var x=Object(k.createHigherOrderComponent)((function(e){var t=function(t){b()(c,t);var r,n=E(c);function c(){var e;return u()(this,c),(e=n.apply(this,arguments)).state={list:[],loading:!0},e.setError=e.setError.bind(p()(e)),e.debouncedOnSearch=Object(j.debounce)(e.onSearch.bind(p()(e)),400),e}return l()(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(P.h)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(e){var t=this,r=this.props.selected;Object(P.h)({selected:r,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"setError",value:(r=i()(w.a.mark((function e(t){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(t);case 2:r=e.sent,this.setState({list:[],loading:!1,error:r});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"render",value:function(){var t=this,r=this.state,n=r.error,c=r.list,i=r.loading;return Object(O.createElement)(e,o()({},this.props,{error:n,products:c,isLoading:i,onSearch:_.m.productCount>100?function(e){t.setState({loading:!0}),t.debouncedOnSearch(e)}:null}))}}]),c}(O.Component);return t.defaultProps={selected:[]},t}),"withSearchedProducts");t.a=x},29:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t){!function(){e.exports=this.moment}()},33:function(e,t){!function(){e.exports=this.wp.primitives}()},34:function(e,t){!function(){e.exports=this.wp.dataControls}()},37:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},39:function(e,t,r){"use strict";r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return b})),r.d(t,"b",(function(){return h})),r.d(t,"i",(function(){return g})),r.d(t,"f",(function(){return m})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return O})),r.d(t,"g",(function(){return y})),r.d(t,"a",(function(){return w}));var n=r(4),o=r.n(n),c=r(21),i=r(19),a=r.n(i),u=r(6),s=r(5),l=r(14);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,s=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,a=void 0===i?[]:i,u=l.m.productCount>100,s={per_page:u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},d=[Object(c.addQueryArgs)("/wc/store/products",p(p({},s),a))];return u&&r.length&&d.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),d}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(s.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id").map((function(e){return p(p({},e),{},{parent:0})}))})).catch((function(e){throw e}))},b=function(e){return a()({path:"/wc/store/products/".concat(e)})},h=function(){return a()({path:"wc/store/products/attributes"})},g=function(e){return a()({path:"wc/store/products/attributes/".concat(e,"/terms")})},m=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=Object(s.getSetting)("limitTags",!1),i=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:n})];return o&&r.length&&i.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return a()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id")}))},v=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products/categories",p({per_page:0},e))})},O=function(e){return a()({path:"wc/store/products/categories/".concat(e)})},y=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},w=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},41:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(31),o=r.n(n),c=r(10),i=r.n(c),a=r(1),u=function(){var e=o()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},448:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(31),i=r.n(c),a=r(15),u=r.n(a),s=r(16),l=r.n(s),d=r(12),p=r.n(d),f=r(17),b=r.n(f),h=r(18),g=r.n(h),m=r(9),v=r.n(m),O=r(4),y=r.n(O),w=r(0),j=r(10),k=r.n(j),_=r(22),P=r(39),S=r(41);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var x=Object(_.createHigherOrderComponent)((function(e){return function(t){b()(n,t);var r=E(n);function n(){var e;u()(this,n);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=r.call.apply(r,[this].concat(o)),y()(p()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),y()(p()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(P.e)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch(function(){var t=i()(k.a.mark((function t(r){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(r);case 2:n=t.sent,e.setState({product:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):e.setState({product:null,loading:!1,error:null}))})),e}return l()(n,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,c=t.product;return Object(w.createElement)(e,o()({},this.props,{error:r,getProduct:this.loadProduct,isLoading:n,product:c}))}}]),n}(w.Component)}),"withProduct");t.a=x},45:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},46:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(45));t.a=function(e){var t,r,i,a=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=a).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},48:function(e,t){!function(){e.exports=this.wp.keycodes}()},5:function(e,t){!function(){e.exports=this.wc.wcSettings}()},51:function(e,t){!function(){e.exports=this.wp.hooks}()},58:function(e,t,r){"use strict";var n=r(4),o=r.n(n),c=r(20),i=r.n(c),a=r(0),u=["srcElement","size"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,u);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},6:function(e,t){!function(){e.exports=this.lodash}()},61:function(e,t){!function(){e.exports=this.wp.deprecated}()},697:function(e,t,r){e.exports=r(777)},698:function(e,t){},699:function(e,t){},7:function(e,t){!function(){e.exports=this.React}()},700:function(e,t,r){"use strict";var n=r(0),o=r(33),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));t.a=c},701:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),o=r(14),c=[{id:1,name:"WordPress Pennant",variation:"",permalink:"https://example.org",sku:"wp-pennant",short_description:Object(n.__)("Fly your WordPress banner with this beauty! Deck out your office space or add it to your kids walls. This banner will spruce up any space it’s hung!","woo-gutenberg-products-block"),description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",price:"7.99",price_html:'<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>7.99</span>',images:[{id:1,src:o.k+"img/pennant.jpg",thumbnail:o.k+"img/pennant.jpg",name:"pennant-1.jpg",alt:"WordPress Pennant",srcset:"",sizes:""}],average_rating:5,review_count:1,prices:{currency_code:"GBP",decimal_separator:".",thousand_separator:",",decimals:2,price_prefix:"£",price_suffix:"",price:"7.99",regular_price:"9.99",sale_price:"7.99",price_range:null},add_to_cart:{text:Object(n.__)("Add to cart","woo-gutenberg-products-block"),description:Object(n.__)("Add to cart","woo-gutenberg-products-block")},has_options:!1,is_purchasable:!0,is_in_stock:!0,on_sale:!0}]},72:function(e,t){!function(){e.exports=this.wp.dom}()},73:function(e,t){!function(){e.exports=this.ReactDOM}()},77:function(e,t){!function(){e.exports=this.wp.viewport}()},777:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r(24),i=r(25),a=r(5),u=r(58),s=r(700),l=(r(698),r(699),r(701)),d={attributes:{contentAlign:"center",dimRatio:50,editMode:!1,height:Object(a.getSetting)("default_height",500),mediaSrc:"",showDesc:!0,productId:"preview",previewProduct:l.a[0]}},p=r(11),f=r.n(p),b=r(15),h=r.n(b),g=r(16),m=r.n(g),v=r(12),O=r.n(v),y=r(17),w=r.n(y),j=r(18),k=r.n(j),_=r(9),P=r.n(_),S=r(4),E=r.n(S),x=r(23),R=r(3),C=r(8),A=r.n(C),I=r(22),B=r(6),T=(r(2),r(123)),D=r(92),L=r(448);function M(e){return e&&e.images&&e.images.length&&e.images[0].src||""}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P()(e);if(t){var o=P()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return k()(this,r)}}var G=Object(I.compose)([L.a,Object(c.withColors)({overlayColor:"background-color"}),R.withSpokenMessages,Object(x.withSelect)((function(e,t,r){var n,o,c=t.clientId,i=r.dispatch,a=e("core/block-editor").getBlock(c),u=(null==a||null===(n=a.innerBlocks[0])||void 0===n?void 0:n.clientId)||"";return{updateBlockAttributes:function(e){u&&i("core/block-editor").updateBlockAttributes(u,e)},currentButtonAttributes:(null==a||null===(o=a.innerBlocks[0])||void 0===o?void 0:o.attributes)||{}}})),Object(I.createHigherOrderComponent)((function(e){return function(t){w()(o,t);var r=V(o);function o(){var e;h()(this,o);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return e=r.call.apply(r,[this].concat(n)),E()(O()(e),"state",{doUrlUpdate:!1}),E()(O()(e),"triggerUrlUpdate",(function(){e.setState({doUrlUpdate:!0})})),e}return m()(o,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.attributes,r=e.updateBlockAttributes,n=e.currentButtonAttributes,o=e.product;this.state.doUrlUpdate&&!t.editMode&&null!=o&&o.permalink&&null!=n&&n.url&&o.permalink!==n.url&&(r(U(U({},n),{},{url:o.permalink})),this.setState({doUrlUpdate:!1}))}},{key:"render",value:function(){return Object(n.createElement)(e,f()({triggerUrlUpdate:this.triggerUrlUpdate},this.props))}}]),o}(n.Component)}),"withUpdateButtonAttributes")])((function(e){var t,r,i,l,d=e.attributes,p=e.debouncedSpeak,f=e.error,b=e.getProduct,h=e.isLoading,g=e.isSelected,m=e.overlayColor,v=e.product,O=e.setAttributes,y=e.setOverlayColor,w=e.triggerUrlUpdate,j=void 0===w?function(){}:w,k=function(){var e=d.contentAlign,t=d.editMode,r=d.mediaSrc,i=d.mediaId||function(e){return e&&e.images&&e.images.length&&e.images[0].id||0}(v);return Object(n.createElement)(c.BlockControls,null,Object(n.createElement)(c.AlignmentToolbar,{value:e,onChange:function(e){O({contentAlign:e})}}),Object(n.createElement)(c.MediaReplaceFlow,{mediaId:i,mediaURL:r,accept:"image/*",onSelect:function(e){O({mediaId:e.id,mediaSrc:e.url})},allowedTypes:["image"]}),Object(n.createElement)(R.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return O({editMode:!t})},isActive:t}]}))},_=function(){var e=A()("wp-block-button__link","is-style-fill");return"preview"===d.productId?Object(n.createElement)("div",{className:"wp-block-button aligncenter",style:{width:"100%"}},Object(n.createElement)(c.RichText.Content,{tagName:"a",className:e,href:v.permalink,title:d.linkText,style:{backgroundColor:"vivid-green-cyan",borderRadius:"5px"},value:d.linkText,target:v.permalink})):Object(n.createElement)(c.InnerBlocks,{template:[["core/button",{text:Object(o.__)("Shop now","woo-gutenberg-products-block"),url:v.permalink,align:"center"}]],templateLock:"all"})},P=d.editMode;return f?Object(n.createElement)(D.a,{className:"wc-block-featured-product-error",error:f,isLoading:h,onRetry:b}):P?Object(n.createElement)(n.Fragment,null,k(),Object(n.createElement)(R.Placeholder,{icon:Object(n.createElement)(u.a,{srcElement:s.a}),label:Object(o.__)("Featured Product","woo-gutenberg-products-block"),className:"wc-block-featured-product"},Object(o.__)("Visually highlight a product or variation and encourage prompt action","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-featured-product__selection"},Object(n.createElement)(T.a,{selected:d.productId||0,showVariations:!0,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e[0]?e[0].id:0;O({productId:t,mediaId:0,mediaSrc:""}),j()}}),Object(n.createElement)(R.Button,{isPrimary:!0,onClick:function(){O({editMode:!1}),p(Object(o.__)("Showing Featured Product block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))):Object(n.createElement)(n.Fragment,null,k(),(t=d.mediaSrc||M(v),r=d.focalPoint,i=void 0===r?{x:.5,y:.5}:r,l="function"==typeof R.FocalPointPicker,Object(n.createElement)(c.InspectorControls,{key:"inspector"},Object(n.createElement)(R.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block")},Object(n.createElement)(R.ToggleControl,{label:Object(o.__)("Show description","woo-gutenberg-products-block"),checked:d.showDesc,onChange:function(){return O({showDesc:!d.showDesc})}}),Object(n.createElement)(R.ToggleControl,{label:Object(o.__)("Show price","woo-gutenberg-products-block"),checked:d.showPrice,onChange:function(){return O({showPrice:!d.showPrice})}})),Object(n.createElement)(c.PanelColorSettings,{title:Object(o.__)("Overlay","woo-gutenberg-products-block"),colorSettings:[{value:m.color,onChange:y,label:Object(o.__)("Overlay Color","woo-gutenberg-products-block")}]},!!t&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(R.RangeControl,{label:Object(o.__)("Background Opacity","woo-gutenberg-products-block"),value:d.dimRatio,onChange:function(e){return O({dimRatio:e})},min:0,max:100,step:10}),l&&Object(n.createElement)(R.FocalPointPicker,{label:Object(o.__)("Focal Point Picker"),url:t,value:i,onChange:function(e){return O({focalPoint:e})}}))))),v?function(){var e,t,r=d.className,o=d.contentAlign,c=d.dimRatio,i=d.focalPoint,u=d.height,s=d.showDesc,l=d.showPrice,p=A()("wc-block-featured-product",{"is-selected":g&&"preview"!==d.productId,"is-loading":!v&&h,"is-not-found":!v&&!h,"has-background-dim":0!==c},0===(e=c)||50===e?null:"has-background-dim-".concat(10*Math.round(e/10)),"center"!==o&&"has-".concat(o,"-content"),r),f=(t=d.mediaSrc||v,Object(B.isObject)(t)&&(t=M(t)),t?{backgroundImage:"url(".concat(t,")")}:{});if(m.color&&(f.backgroundColor=m.color),i){var b=100*i.x,y=100*i.y;f.backgroundPosition="".concat(b,"% ").concat(y,"%")}return Object(n.createElement)(R.ResizableBox,{className:p,size:{height:u},minHeight:Object(a.getSetting)("min_height",500),enable:{bottom:!0},onResizeStop:function(e,t,r){O({height:parseInt(r.style.height,10)})},style:f},Object(n.createElement)("div",{className:"wc-block-featured-product__wrapper"},Object(n.createElement)("h2",{className:"wc-block-featured-product__title",dangerouslySetInnerHTML:{__html:v.name}}),!Object(B.isEmpty)(v.variation)&&Object(n.createElement)("h3",{className:"wc-block-featured-product__variation",dangerouslySetInnerHTML:{__html:v.variation}}),s&&Object(n.createElement)("div",{className:"wc-block-featured-product__description",dangerouslySetInnerHTML:{__html:v.short_description}}),l&&Object(n.createElement)("div",{className:"wc-block-featured-product__price",dangerouslySetInnerHTML:{__html:v.price_html}}),Object(n.createElement)("div",{className:"wc-block-featured-product__link"},_())))}():Object(n.createElement)(R.Placeholder,{className:"wc-block-featured-product",icon:Object(n.createElement)(u.a,{srcElement:s.a}),label:Object(o.__)("Featured Product","woo-gutenberg-products-block")},h?Object(n.createElement)(R.Spinner,null):Object(o.__)("No product is selected.","woo-gutenberg-products-block")))}));Object(i.registerBlockType)("woocommerce/featured-product",{title:Object(o.__)("Featured Product","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(u.a,{srcElement:s.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Visually highlight a product or variation and encourage prompt action.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:d,attributes:{contentAlign:{type:"string",default:"center"},dimRatio:{type:"number",default:50},editMode:{type:"boolean",default:!0},focalPoint:{type:"object"},height:{type:"number",default:Object(a.getSetting)("default_height",500)},mediaId:{type:"number",default:0},mediaSrc:{type:"string",default:""},overlayColor:{type:"string"},customOverlayColor:{type:"string"},linkText:{type:"string",default:Object(o.__)("Shop now","woo-gutenberg-products-block")},productId:{type:"number"},showDesc:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},previewProduct:{type:"object",default:null}},edit:function(e){return Object(n.createElement)(G,e)},save:function(){return Object(n.createElement)(c.InnerBlocks.Content,null)}})},84:function(e,t){!function(){e.exports=this.wp.date}()},92:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(58)),i=r(125),a=r(8),u=r.n(a),s=r(3),l=r(46);r(127);t.a=function(e){var t=e.className,r=e.error,a=e.isLoading,d=e.onRetry;return Object(n.createElement)(s.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:i.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:u()("wc-block-api-error",t)},Object(n.createElement)(l.a,{error:r}),d&&Object(n.createElement)(n.Fragment,null,a?Object(n.createElement)(s.Spinner,null):Object(n.createElement)(s.Button,{isSecondary:!0,onClick:d},Object(o.__)("Retry","woo-gutenberg-products-block"))))}}});