(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,u=void 0!==s&&s,m=e.priority,v=void 0!==m&&m,b=e.loading,R=e.lazyRoot,C=void 0===R?null:R,A=e.lazyBoundary,k=e.className,E=e.quality,L=e.width,O=e.height,T=e.style,I=e.objectFit,F=e.objectPosition,M=e.onLoadingComplete,P=e.placeholder,N=void 0===P?"empty":P,q=e.blurDataURL,B=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=c.useContext(p.ImageConfigContext),U=c.useMemo((function(){var e=g||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[Z]),D=B,H=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(H=D.layout),delete D.layout);var W=z;if("loader"in D){if(D.loader){var V=D.loader;W=function(e){e.config;var t=l(e,["config"]);return V(t)}}delete D.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var K=S(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(q=q||K.blurDataURL,G=K.src,(!H||"fill"!==H)&&(O=O||K.height,L=L||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!v&&("lazy"===b||"undefined"===typeof b);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,J=!1);y.has(t)&&(J=!1);U.unoptimized&&(u=!0);var Q,X=i(c.useState(!1),2),Y=X[0],$=X[1],ee=i(h.useIntersection({rootRef:C,rootMargin:A||"200px",disabled:!J}),3),te=ee[0],ne=ee[1],re=ee[2],ie=!J||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:F},le=x(L),ce=x(O),de=x(E);0;var fe=Object.assign({},T,ue),he="blur"!==N||Y?{}:{backgroundSize:I||"cover",backgroundPosition:F||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===H)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof le&&"undefined"!==typeof ce){var pe=ce/le,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===H?(oe.display="block",oe.position="relative",se=!0,ae.paddingTop=me):"intrinsic"===H?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",se=!0,ae.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(le,"%27%20height=%27").concat(ce,"%27/%3e")):"fixed"===H&&(oe.display="inline-block",oe.position="relative",oe.width=le,oe.height=ce)}else 0;var ve={src:_,srcSet:void 0,sizes:void 0};ie&&(ve=w({config:U,src:t,unoptimized:u,layout:H,width:le,quality:de,sizes:n,loader:W}));var ge=t;0;var ye;0;var _e=(r(ye={},"imagesrcset",ve.srcSet),r(ye,"imagesizes",ve.sizes),r(ye,"crossOrigin",D.crossOrigin),ye),be=c.default.useLayoutEffect,Se=c.useRef(M),we=c.useRef(t);c.useEffect((function(){Se.current=M}),[M]),be((function(){we.current!==t&&(re(),we.current=t)}),[re,t]);var xe=a({isLazy:J,imgAttributes:ve,heightInt:ce,widthInt:le,qualityInt:de,layout:H,className:k,imgStyle:fe,blurStyle:he,loading:b,config:U,unoptimized:u,placeholder:N,loader:W,srcString:ge,onLoadingCompleteRef:Se,setBlurComplete:$,setIntersection:te,isVisible:ie,noscriptSizes:n},D);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:oe},se?c.default.createElement("span",{style:ae},Q?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,c.default.createElement(j,Object.assign({},xe))),v?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},_e))):null)};var a=n(6495).Z,s=n(2648).Z,u=n(1598).Z,l=n(7273).Z,c=u(n(7294)),d=s(n(5443)),f=n(9309),h=n(7190),p=n(9977),m=(n(3794),n(2392));function v(e){return"/"===e[0]?e.slice(1):e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(v(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(v(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,s=e.quality,u=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var s,u=/(^|\s)(1?\d?\d)vw/g,l=[];s=u.exec(r);s)l.push(parseInt(s[2]));if(l.length){var c,d=.01*(c=Math).min.apply(c,o(l));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,u),d=c.widths,f=c.kind,h=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,r){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:s,width:d[h]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=b.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function R(e,t,n,r,i,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var j=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,s=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,p=e.srcString,m=e.config,v=e.unoptimized,g=e.loader,y=e.onLoadingCompleteRef,_=e.setBlurComplete,b=e.setIntersection,S=e.onLoad,x=e.onError,z=(e.isVisible,e.noscriptSizes),j=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":i,className:o,style:a({},s,u),ref:c.useCallback((function(e){b(e),(null==e?void 0:e.complete)&&R(e,p,0,f,y,_)}),[b,p,i,f,y,_]),onLoad:function(e){R(e.currentTarget,p,0,f,y,_),S&&S(e)},onError:function(e){"blur"===f&&_(!0),x&&x(e)}})),(d||"blur"===f)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},j,w({config:m,src:p,unoptimized:v,layout:i,width:n,quality:r,sizes:z,loader:g}),{decoding:"async","data-nimg":i,style:s,className:o,loading:h}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,o=n(7273).Z,a=i(n(7294)),s=n(6273),u=n(2725),l=n(3462),c=n(1018),d=n(7190),f=n(1210),h=n(8684),p={};function m(e,t,n,r){if(e&&s.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+n+(i?"%"+i:"")]=!0}}var v=a.default.forwardRef((function(e,t){var n,i=e.href,v=e.as,g=e.children,y=e.prefetch,_=e.passHref,b=e.replace,S=e.shallow,w=e.scroll,x=e.locale,z=e.onClick,R=e.onMouseEnter,j=e.onTouchStart,C=e.legacyBehavior,A=void 0===C?!0!==Boolean(!1):C,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!A||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var E=!1!==y,L=a.default.useContext(l.RouterContext),O=a.default.useContext(c.AppRouterContext);O&&(L=O);var T,I=a.default.useMemo((function(){var e=r(s.resolveHref(L,i,!0),2),t=e[0],n=e[1];return{href:t,as:v?s.resolveHref(L,v):n||t}}),[L,i,v]),F=I.href,M=I.as,P=a.default.useRef(F),N=a.default.useRef(M);A&&(T=a.default.Children.only(n));var q=A?T&&"object"===typeof T&&T.ref:t,B=r(d.useIntersection({rootMargin:"200px"}),3),Z=B[0],U=B[1],D=B[2],H=a.default.useCallback((function(e){N.current===M&&P.current===F||(D(),N.current=M,P.current=F),Z(e),q&&("function"===typeof q?q(e):"object"===typeof q&&(q.current=e))}),[M,q,F,D,Z]);a.default.useEffect((function(){var e=U&&E&&s.isLocalURL(F),t="undefined"!==typeof x?x:L&&L.locale,n=p[F+"%"+M+(t?"%"+t:"")];e&&!n&&m(L,F,M,{locale:t})}),[M,F,U,x,E,L]);var W={ref:H,onClick:function(e){A||"function"!==typeof z||z(e),A&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,u,l,c,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:u}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!d})};c?a.default.startTransition(f):f()}}(e,L,F,M,b,S,w,x,Boolean(O),E)},onMouseEnter:function(e){A||"function"!==typeof R||R(e),A&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!E&&O||s.isLocalURL(F)&&m(L,F,M,{priority:!0})},onTouchStart:function(e){A||"function"!==typeof j||j(e),A&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!E&&O||s.isLocalURL(F)&&m(L,F,M,{priority:!0})}};if(!A||_||"a"===T.type&&!("href"in T.props)){var V="undefined"!==typeof x?x:L&&L.locale,G=L&&L.isLocaleDomain&&f.getDomainLocale(M,V,L.locales,L.domainLocales);W.href=G||h.addBasePath(u.addLocale(M,V,L&&L.defaultLocale))}return A?a.default.cloneElement(T,W):a.default.createElement("a",Object.assign({},k,W),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,c=r(i.useState(!1),2),d=c[0],f=c[1],h=r(i.useState(null),2),p=h[0],m=h[1];i.useEffect((function(){if(a){if(l||d)return;if(p&&p.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=s.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},u.push(n),s.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(p,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[p,l,n,t,d]);var v=i.useCallback((function(){f(!1)}),[]);return[m,d,v]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver,s=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),i=r.default.createContext(null);t.AppRouterContext=i;var o=r.default.createContext(null);t.LayoutRouterContext=o;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var s=r.default.createContext(null);t.TemplateContext=s},1045:function(e,t,n){var r=n(3454),i=n(7294);function o(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=o(i);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u="undefined"!==typeof r&&r.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){var e,t,n,r=function(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,o=void 0===i?u:i;d(l(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",d("boolean"===typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a=document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null},i=r.prototype;return i.setOptimizeForSpeed=function(e){d("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},i.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(e,t){if(d(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(i){return u||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},i.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];d(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},i.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]},i.cssRules=function(){var e=this;return this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},i.makeStyleTag=function(e,t,n){t&&d(l(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},e=r,(t=[{key:"length",get:function(){return this._rulesCount}}])&&s(e.prototype,t),n&&s(e,n),r}();function d(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var f=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return h[r]||(h[r]="jsx-"+f(e+"-"+n)),h[r]}function m(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var v=function(){var e=function(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return a.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=p(r,n);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return m(i,e)})):[m(i,t)]}}return{styleId:p(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var g=i.createContext(null);function y(){return new v}function _(){return i.useContext(g)}g.displayName="StyleSheetContext";var b=a.default.useInsertionEffect||a.default.useLayoutEffect,S=y();function w(e){var t=S||_();return t?(b((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}w.dynamic=function(e){return e.map((function(e){return p(e[0],e[1])})).join(" ")},t.style=w},357:function(e,t,n){"use strict";e.exports=n(1045).style},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,u=[],l=!1,c=-1;function d(){l&&s&&(l=!1,s.length?u=s.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(s=u,u=[];++c<t;)s&&s[c].run();c=-1,t=u.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,r),a=!1}finally{a&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},9008:function(e,t,n){n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}}]);