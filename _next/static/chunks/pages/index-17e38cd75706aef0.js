(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5074:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||i(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(6495).Z,u=n(2648).Z,s=n(1598).Z,d=n(7273).Z,f=s(n(7294)),p=u(n(1597)),m=n(8164),h=n(2358),g=n(6650);n(3766);var v=u(n(1586)),y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function b(e){return void 0!==e.default}function _(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function w(e,t,n,r,o,i,a){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==r?void 0:r.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var a=!1,c=!1;r.current(l({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return a},isPropagationStopped:function(){return c},persist:function(){},preventDefault:function(){a=!0,t.preventDefault()},stopPropagation:function(){c=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}}))}var S=f.forwardRef(function(e,t){var n=e.imgAttributes,r=e.heightInt,o=e.widthInt,i=(e.qualityInt,e.className),a=e.imgStyle,u=e.blurStyle,s=e.isLazy,p=e.fill,m=e.placeholder,h=e.loading,g=e.srcString,v=(e.config,e.unoptimized),y=(e.loader,e.onLoadRef),b=e.onLoadingCompleteRef,_=e.setBlurComplete,S=e.setShowAltText,x=(e.onLoad,e.onError),j=d(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=s?"lazy":h,f.default.createElement(f.default.Fragment,null,f.default.createElement("img",Object.assign({},j,{loading:h,width:o,height:r,decoding:"async","data-nimg":p?"fill":"1",className:i,style:l({},a,u)},n,{ref:f.useCallback(function(e){t&&("function"==typeof t?t(e):"object"===c(t)&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&w(e,g,m,y,b,_,v))},[g,m,y,b,_,x,v,t]),onLoad:function(e){w(e.currentTarget,g,m,y,b,_,v)},onError:function(e){S(!0),"blur"===m&&_(!0),x&&x(e)}})))}),x=f.forwardRef(function(e,t){var n,i,a,u=e.src,s=e.sizes,w=e.unoptimized,x=void 0!==w&&w,j=e.priority,E=void 0!==j&&j,C=e.loading,z=e.className,I=e.quality,A=e.width,O=e.height,k=e.fill,M=e.style,L=e.onLoad,N=e.onLoadingComplete,P=e.placeholder,R=void 0===P?"empty":P,H=e.blurDataURL,U=e.layout,q=e.objectFit,F=e.objectPosition,T=(e.lazyBoundary,e.lazyRoot,d(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),B=f.useContext(g.ImageConfigContext),D=f.useMemo(function(){var e=y||B||h.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return l({},e,{allSizes:t,deviceSizes:n})},[B]),W=T,Z=W.loader||v.default;delete W.loader;var G="__next_img_default"in Z;if(G){if("custom"===D.loader)throw Error('Image with src "'.concat(u,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var V=Z;Z=function(e){return e.config,V(d(e,["config"]))}}if(U){"fill"===U&&(k=!0);var $={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[U];$&&(M=l({},M,$));var Q={responsive:"100vw",fill:"100vw"}[U];Q&&!s&&(s=Q)}var J="",X=_(A),Y=_(O);if("object"===c(n=u)&&(b(n)||void 0!==n.src)){var K=b(u)?u.default:u;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(i=K.blurWidth,a=K.blurHeight,H=H||K.blurDataURL,J=K.src,!k){if(X||Y){if(X&&!Y){var ee=X/K.width;Y=Math.round(K.height*ee)}else if(!X&&Y){var et=Y/K.height;X=Math.round(K.width*et)}}else X=K.width,Y=K.height}}var en=!E&&("lazy"===C||void 0===C);((u="string"==typeof u?u:J).startsWith("data:")||u.startsWith("blob:"))&&(x=!0,en=!1),D.unoptimized&&(x=!0),G&&u.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(x=!0);var er=r(f.useState(!1),2),eo=er[0],ei=er[1],ea=r(f.useState(!1),2),ec=ea[0],el=ea[1],eu=_(I),es=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:q,objectPosition:F}:{},ec?{}:{color:"transparent"},M),ed="blur"===R&&H&&!eo?{backgroundSize:es.objectFit||"cover",backgroundPosition:es.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(m.getImageBlurSvg({widthInt:X,heightInt:Y,blurWidth:i,blurHeight:a,blurDataURL:H,objectFit:es.objectFit}),'")')}:{},ef=function(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.width,a=e.quality,c=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n){var r=e.deviceSizes,i=e.allSizes;if(n){for(var a,c=/(^|\s)(1?\d?\d)vw/g,l=[];a=c.exec(n);a)l.push(parseInt(a[2]));if(l.length){var u=.01*Math.min.apply(Math,l);return{widths:i.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return i.find(function(t){return t>=e})||i[i.length-1]}))),kind:"x"}}(t,i,c),s=u.widths,d=u.kind,f=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map(function(e,r){return"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:r+1).concat(d)}).join(", "),src:l({config:t,src:n,quality:a,width:s[f]})}}({config:D,src:u,unoptimized:x,width:X,quality:eu,sizes:s,loader:Z}),ep=u,em={imageSrcSet:ef.srcSet,imageSizes:ef.sizes,crossOrigin:W.crossOrigin},eh=f.useRef(L);f.useEffect(function(){eh.current=L},[L]);var eg=f.useRef(N);f.useEffect(function(){eg.current=N},[N]);var ev=l({isLazy:en,imgAttributes:ef,heightInt:Y,widthInt:X,qualityInt:eu,className:z,imgStyle:es,blurStyle:ed,loading:C,config:D,fill:k,unoptimized:x,placeholder:R,loader:Z,srcString:ep,onLoadRef:eh,onLoadingCompleteRef:eg,setBlurComplete:ei,setShowAltText:el},W);return f.default.createElement(f.default.Fragment,null,f.default.createElement(S,Object.assign({},ev,{ref:t})),E?f.default.createElement(p.default,null,f.default.createElement("link",Object.assign({key:"__nimg-"+ef.src+ef.srcSet+ef.sizes,rel:"preload",as:"image",href:ef.srcSet?void 0:ef.src},em))):null)});t.default=x,("function"==typeof t.default||"object"===c(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},1342:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},1597:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o=n(6495).Z,i=n(2648).Z,a=(0,n(1598).Z)(n(7294)),c=i(n(7271)),l=n(5505),u=n(236),s=n(1342);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3766);var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){var n,r,i,c,l=t.inAmpMode;return e.reduce(f,[]).reverse().concat(d(l).reverse()).filter((n=new Set,r=new Set,i=new Set,c={},function(e){var t=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;var a=e.key.slice(e.key.indexOf("$")+1);n.has(a)?t=!1:n.add(a)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var l=0,u=p.length;l<u;l++){var s=p[l];if(e.props.hasOwnProperty(s)){if("charSet"===s)i.has(s)?t=!1:i.add(s);else{var d=e.props[s],f=c[s]||new Set;("name"!==s||!o)&&f.has(d)?t=!1:(f.add(d),c[s]=f)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=o({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,a.default.cloneElement(e,r)}return a.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=a.useContext(l.AmpStateContext),r=a.useContext(u.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:s.isInAmpMode(n)},t)},("function"==typeof t.default||"object"===r(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8164:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,n=e.heightInt,r=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,a=e.objectFit,c=r||t,l=o||n,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return c&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(c," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},1586:function(e,t){"use strict";function n(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},7271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,c=e.reduceComponentsToState;function l(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(c(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),l()),i(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),i(function(){return n&&(n._pendingUpdate=l),function(){n&&(n._pendingUpdate=l)}}),a(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(1598).Z)(n(7294)),o=!1,i=r.useLayoutEffect,a=o?function(){}:r.useEffect},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},2556:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(9854),o=n.n(r),i=n(3795),a=n(9008),c=n.n(a),l=n(5675),u=n.n(l),s=n(5893);function d(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Create Next App"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("div",{className:o().customheader,children:(0,s.jsxs)("div",{className:o().description,children:[(0,s.jsx)("p",{children:(0,s.jsx)("code",{className:o().code,children:(0,s.jsx)(i.Z,{href:"/dashboard",children:"Abra o Dashboard"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,s.jsx)(u(),{src:"/vercel.svg",alt:"Vercel Logo",className:o().vercelLogo,width:100,height:24,priority:!0})]})})]})}),(0,s.jsx)("main",{className:o().main,children:(0,s.jsxs)("div",{className:o().center,children:[(0,s.jsx)(u(),{className:o().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,s.jsx)("div",{className:o().thirteen,children:(0,s.jsx)(u(),{src:"/mui.svg",alt:"13",width:40,height:31,priority:!0})})]})})]})}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2556)}])},9854:function(e){e.exports={main:"Home_main__EtNt2",customheader:"Home_customheader__fvUOI",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},9008:function(e,t,n){e.exports=n(1597)},5675:function(e,t,n){e.exports=n(5074)}},function(e){e.O(0,[795,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);