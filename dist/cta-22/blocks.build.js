!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getStyles",function(){return s}),n.d(t,"typographyArr",function(){return m});var a=n(3),o=(n.n(a),n(4)),r=(n.n(o),n(1)),l=n(2),i=n(5),c=n(6),__=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,d=u.RichText,g=u.InnerBlocks,s=function(e){var t={maxWidth:"100%"===e.containerMaxWidth?"100%":e.containerMaxWidth+"px","--maxWidth":("100%"===e.containerMaxWidth?"100wh":e.containerMaxWidth+" ")+" "},n={"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px","--textColor":""+e.textColor,"--textColor4":""+Object(i.a)(e.textColor3,e.opacity/100),"--textColor5":""+Object(i.a)(e.textColor4,e.opacity/100),"--angle":e.angle+"deg"};return"none"!=e.img1?(n["--img1"]="url("+Object(r.e)(e.img1)+")",n["--img1S"]=e.img1Size+"px"):(n["--img1"]="unset",n["--img1S"]="0"),e.backgroundColor&&(n["--backgroundColor"]=e.backgroundColor),{vars:n,kenzapContanerStyles:t}},m=JSON.stringify([{title:__("- Title","kenzap-cta"),type:"title","font-size":55,"font-size-t":55,"font-size-m":50,"font-weight":7,"line-height":60,"margin-bottom":20,color:"#ffffff"},{title:__("- Description","kenzap-cta"),"font-size":20,"font-weight":4,"line-height":30,"margin-bottom":26,color:"#ffffff"}]);p("kenzap/cta-22",{title:__("Kenzap Banner 5","kenzap-cta"),icon:"migrate",category:"layout",keywords:[__("Banner","kenzap-cta"),__("call to action cta 22","kenzap-cta"),__("video playback","kenzap-cta")],html:!0,supports:{align:["full","wide"],anchor:!0},attributes:Object.assign({},r.d,{align:{type:"string",default:"full"},title:{type:"string",default:__("LIVE THERE","kenzap-cta")},caption:{type:"string",default:__("Book events from anywhere in 191+ countries and get awesome experience Lorem ipsum dolor sit amet, consectetuer adipiscing elit,","kenzap-cta")},video:{type:"string",default:"https://www.youtube.com/embed/ctvlUvN6wSE?controls=0"},link:{type:"string",default:__('<a href="#">Presentation</a> <a href="#">Tickets</a>',"kenzap-cta")},link2:{type:"string",default:__('<a href="#">Tickets</a>',"kenzap-cta")},angle:{type:"number",default:135},titleSize:{type:"number",default:55},descSize:{type:"number",default:20},textThickness:{type:"number",default:7},openFirst:{type:"boolean",default:!0},img1:{type:"string",default:Object(r.e)(window.kenzap_cta_path+"images/play-btn.svg")},img1Size:{type:"number",default:80},textColor:{type:"string"},textColor3:{type:"string"},textColor4:{type:"string"},action:{type:"boolean",default:!0},actionNew:{type:"boolean",default:!0},paddingTop:{type:"number",default:0},opacity:{type:"number",default:89},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0},typography:{type:"array",default:[]},isVisible:{type:"boolean",default:!1},randomValue:{type:"string"}}),edit:function(e){return e.attributes.isFirstLoad&&(e.setAttributes({textColor:"#ffffff",textColor3:"#750179",textColor4:"#d61010",backgroundColor:"#fff",containerPadding:140,backgroundImage:Object(r.e)(window.kenzap_cta_path+"images/banner-img-7.jpg"),backgroundImageId:10,backgroundStyle:"cover"}),e.setAttributes({isFirstLoad:!1})),wp.element.createElement(c.a,e)},save:function(e){var t=e.className,n=e.attributes,a=s(e.attributes),o=a.vars,i=a.kenzapContanerStyles;return wp.element.createElement("div",{id:n.anchor,className:t||"",style:o},wp.element.createElement(r.b,{className:"kp-bn7 block-"+n.blockUniqId,attributes:n,style:o,withBackground:!0,withPadding:!0},wp.element.createElement("div",{class:"kenzap-container",style:i},"top"==n.nestedBlocks&&wp.element.createElement(g.Content,null),wp.element.createElement("div",{id:"kp-modal",class:"kp-modal"},wp.element.createElement("iframe",{width:"560",height:"315",src:n.video,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),wp.element.createElement("div",{class:"kp-modc"},wp.element.createElement("p",null,n.caption))),wp.element.createElement("div",{class:"kp-content"},n.title&&wp.element.createElement(d.Content,{tagName:"h1",className:"kpt",value:n.title,style:Object(l.b)(n,0)}),n.caption&&wp.element.createElement(d.Content,{tagName:"p",className:"kpc",value:n.caption,style:Object(l.b)(n,1)}),wp.element.createElement("div",{class:"kpa"},n.action&&wp.element.createElement("a",{href:"#kp-modal",class:"modal-link",rel:"modal:open"},wp.element.createElement("div",{class:"kpim"})),!n.action&&wp.element.createElement("a",{target:n.actionNew?"_blank":"_self",rel:"noopener noreferrer",href:n.video},wp.element.createElement("div",{class:"kpim"})))),"bottom"==n.nestedBlocks&&wp.element.createElement(g.Content,null))))}})},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"e",function(){return k}),n.d(t,"c",function(){return x}),n.d(t,"a",function(){return C}),n.d(t,"b",function(){return E});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,i=wp.components,c=i.RangeControl,p=i.CheckboxControl,u=i.SelectControl,d=i.PanelBody,g=i.Button,s=wp.element,m=s.Component,b=s.Fragment,h=wp.editor,f=h.MediaUpload,y=h.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},k=function(e){return e},v=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},x=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,a=void 0===n||n,o=t.backgroundImageId,r=t.backgroundImage,l=(t.backgroundImageF,t.containerMaxWidth),i=t.backgroundColor,s=t.backgroundRepeat,m=t.backgroundPosition,h=(t.alignment,t.setAttributes),w=t.width100,k=t.parallax,x=t.optimize,C=t.withWidth100,E=void 0!==C&&C,P=t.withPadding,z=void 0!==P&&P,T=t.withNested,S=void 0!==T&&T,O=t.containerPadding,I=t.containerSidePadding,_=t.autoPadding,B=void 0===_?"":_,j=t.nestedBlocks,N=void 0===j?"":j;return wp.element.createElement(b,null,a&&wp.element.createElement(d,{title:__("Background"),initialOpen:!1},wp.element.createElement(y,{title:__("Color"),initialOpen:!0,colorSettings:[{value:i,onChange:function(e){return h({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(f,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:o,render:function(t){return wp.element.createElement(b,null,o||"none"!==r?wp.element.createElement(b,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(g,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){h({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(v,null)))}}),"none"!==r&&wp.element.createElement(b,null,wp.element.createElement(u,{label:__("Image style"),value:s,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){h({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:m,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){h({backgroundPosition:e})}}),wp.element.createElement(p,{label:__("Image parallax"),checked:k,onChange:function(e){h({parallax:e})}}),wp.element.createElement(p,{label:__("Image size optimization"),checked:x,onChange:function(e){h({optimize:e})}}))),wp.element.createElement(d,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(l),onChange:function(e){return h({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(p,{label:__("Full width"),checked:w,onChange:function(e){h({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),z&&wp.element.createElement(b,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:O,onChange:function(e){return h({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:I,onChange:function(e){return h({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(p,{label:__("Responsive paddings"),checked:B.length>0,onChange:function(e){h({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),S&&wp.element.createElement(u,{label:__("Nested block"),value:N,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){h({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(m),C=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},E=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return P}),n.d(t,"a",function(){return z});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,p=wp.components,u=p.RangeControl,d=p.PanelBody,g=p.Toolbar,s=p.ToggleControl,m=p.IconButton,b=p.Button,h=wp.element,f=h.Component,y=h.Fragment,w=wp.editor,k=w.PanelColorSettings,v=w.FontSizePicker,x=w.AlignmentToolbar,C=w.MediaUpload,E={},P=function(e,t,n){var a=e.typography[t];if(a){if(E[t]={},a["font-size"]&&(E[t]["font-size"]=a["font-size"]+"px"),a["font-size-t"]>8&&(E[t]["--fst"]=a["font-size-t"]+"px"),a["font-size-m"]>8&&(E[t]["--fsm"]=a["font-size-m"]+"px"),a["text-align"]&&"-"!=a["text-align"]&&(E[t]["text-align"]=a["text-align"]+" "),a["text-transform"]&&"-"!=a["text-transform"]&&(E[t]["text-transform"]="A"==a["text-transform"]?"uppercase":"a"==a["text-transform"]?"capitalize":"lowercase"),a["line-height"]&&(E[t]["line-height"]=Math.round(a["line-height"]/a["font-size"]*100)/100+" "),a["font-weight"]&&(E[t]["font-weight"]=100*a["font-weight"]+" "),a["letter-spacing"]&&(E[t]["letter-spacing"]=(a["letter-spacing"]-100)/10+"px"),a.opacity&&(E[t].opacity=a.opacity/100+" "),a["margin-top"]&&(E[t]["margin-top"]=a["margin-top"]+"px"),a["margin-right"]&&(E[t]["margin-right"]=a["margin-right"]+"px"),a["margin-bottom"]&&(E[t]["margin-bottom"]=a["margin-bottom"]+"px"),a["margin-left"]&&(E[t]["margin-left"]=a["margin-left"]+"px"),a["padding-top"]&&(E[t]["padding-top"]=a["padding-top"]+"px"),a["padding-right"]&&(E[t]["padding-right"]=a["padding-right"]+"px"),a["padding-bottom"]&&(E[t]["padding-bottom"]=a["padding-bottom"]+"px"),a["padding-left"]&&(E[t]["padding-left"]=a["padding-left"]+"px"),a.color&&"-"!=a.color&&(E[t]["--cl"]=a.color+" ",E[t].color=a.color),a["background-color"]&&(E[t]["background-color"]=a["background-color"]),a["text-shadow"]&&"-"!=a["text-shadow"]&&(E[t].filter="drop-shadow("+a["shadow-color"]+" "+parseInt(Math.cos(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+parseInt(Math.sin(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+a["shadow-blur"]+"px)"),a["border-radius"]&&(E[t]["border-radius"]=a["border-radius"]+"px"),a["border-width"]&&(E[t]["border-width"]=a["border-width"]+"px"),a["border-color"]&&(E[t]["border-color"]=a["border-color"]+" "),a["hover-color"]&&(E[t]["--hcl"]=a["hover-color"]+" "),a["hover-border-color"]&&(E[t]["--hbrcl"]=a["hover-border-color"]+" "),a["hover-background-color"]&&(E[t]["--hbacl"]=a["hover-background-color"]+" "),a["icon-url"]&&"none"!==a["icon-url"]&&(E[t]["--icon"]="url("+a["icon-url"]+")"),a["icon-size"]&&(E[t]["--iconWidth"]=a["icon-size"]+"px",E[t]["--iconHeight"]=a["icon-size"]*a["icon-aspect"]+"px"),a["icon-v"]&&(E[t]["--iconV"]=a["icon-v"]+"px"),a["icon-h"]&&(E[t]["--iconH"]=a["icon-h"]+"px"),n){var o={};return o[n]=E[t][n],o}return E[t]}return{}},z=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,p=Array(c),u=0;u<c;u++)p[u]=arguments[u];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),a.onChangePropertyTypo=function(e,t,n){var r=a.props.typography,l=[];[].concat(o(JSON.parse(a.props.typographyArr))).forEach(function(e,t){l[t]=Object.assign({},e,r[t])}),l[n][e]=t,a.props.setAttributes({typography:l,randomValueT:(new Date).getTime()})},a.iconMeasure=function(e,t){var n=e.target,o=n.offsetHeight/n.offsetWidth;a.onChangePropertyTypo("icon-aspect",o,t)},i=n,l(a,i)}return i(t,e),c(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(o(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(y,null,wp.element.createElement(d,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var o,r,l,i,c,p;return wp.element.createElement(d,{title:t.title,initialOpen:!1},wp.element.createElement(v,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(x,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(g,{controls:["A","a","_"].map(function(a){return e.createLevelControl(a,t["text-transform"],function(a){t["text-transform"]==a&&(a=""),e.onChangePropertyTypo("text-transform",a,n)})})}),wp.element.createElement(u,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(u,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(u,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(u,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(s,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(a){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",a,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(k,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(u,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(u,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(C,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(a){return wp.element.createElement(y,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(y,null,wp.element.createElement(b,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(b,{isDefault:!0,onClick:a.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(m,{icon:"arrow-up-alt2",label:"Move up",style:(o={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},a(o,"text-align","center"),a(o,"padding","8px 0"),o),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(m,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:a({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(m,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(m,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},a(r,"text-align","center"),a(r,"clear","both"),a(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(d,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(l,"text-align","center"),a(l,"padding","8px 0"),l)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(i,"text-align","center"),a(i,"clear","both"),a(i,"padding","8px 0"),i)}))),wp.element.createElement(d,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(c,"text-align","center"),a(c,"padding","8px 0"),c)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(p,"text-align","center"),a(p,"clear","both"),a(p,"padding","8px 0"),p)}))))})))}}]),t}(f)},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t){if("undefined"===typeof e)return"";var n=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return t?"rgba("+n+", "+a+", "+o+", "+t+")":"rgb("+n+", "+a+", "+o+")"}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n(1),c=n(2),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,d=wp.element,g=d.Component,s=d.Fragment,m=wp.editor,b=m.RichText,h=m.InspectorControls,f=m.PanelColorSettings,y=m.MediaUpload,w=m.InnerBlocks,k=wp.components,v=k.RangeControl,x=k.CheckboxControl,C=k.PanelBody,E=k.Button,P=k.TextControl,z=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.attributes,a=e.setAttributes,o=e.isSelected,r=Object(l.getStyles)(n),u=r.vars,d=r.kenzapContanerStyles;return wp.element.createElement("div",null,wp.element.createElement(h,null,wp.element.createElement(C,{title:__("General","kenzap-cta"),initialOpen:!1},wp.element.createElement(v,{label:__("Gradient opacity","kenzap-cta"),value:n.opacity,onChange:function(e){return a({opacity:e})},min:1,max:100}),wp.element.createElement(v,{label:__("Gradient angle","kenzap-cta"),value:n.angle,onChange:function(e){return a({angle:e})},min:0,max:360}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Icon (SVG only)","kenzap-cta")),wp.element.createElement(y,{onSelect:function(e){a({img1:e.url})},value:n.img1,allowedTypes:["image/svg"],render:function(e){return wp.element.createElement(s,null,"none"!==n.img1?wp.element.createElement(s,null,wp.element.createElement(E,{isDefault:!0,onClick:function(){a({img1:"none"})}},__("Remove","kenzap-cta")),wp.element.createElement("div",{style:{width:"27px",height:"27px",display:"inline-block",margin:"0 0 8px 5px",backgroundImage:"url("+[n.img1?Object(i.e)(n.img1):""]+")",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})):wp.element.createElement(E,{isDefault:!0,onClick:e.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose","kenzap-cta")))}}),wp.element.createElement(v,{label:__("Icon size","kenzap-cta"),value:n.img1Size,onChange:function(e){return a({img1Size:e})},min:0,max:200}),wp.element.createElement(P,{label:__("Video","kenzap-cta"),value:n.video,onChange:function(e){return a({video:e})},help:__("Specify youtube or vimeo video link. Ex.: ctvlUvN6wSE","kenzap-cta")}),wp.element.createElement(x,{label:__("Popup","kenzap-cta"),checked:n.action,onChange:function(e){a({action:e})},help:__("Open video as popup or as link.","kenzap-cta")}),!n.action&&wp.element.createElement(x,{label:__("New tab","kenzap-cta"),checked:n.actionNew,onChange:function(e){a({actionNew:e})},help:__("Open link in new tab.","kenzap-cta")})),wp.element.createElement(f,{title:__("Colors","kenzap-cta"),initialOpen:!1,colorSettings:[{value:n.textColor,onChange:function(e){return a({textColor:e})},label:__("Icon","kenzap-cta")},{value:n.textColor3,onChange:function(e){return a({textColor3:e})},label:__("Gradient start","kenzap-cta")},{value:n.textColor4,onChange:function(e){return a({textColor4:e})},label:__("Gradient end","kenzap-cta")}]}),wp.element.createElement(c.a,p({setAttributes:a,typographyArr:l.typographyArr},n)),wp.element.createElement(i.c,p({setAttributes:a},n,{withPadding:!0,withWidth100:!0,withBackground:!0,withAutoPadding:!0,withNested:!0}))),wp.element.createElement("div",{id:n.anchor,className:t||"",style:u},wp.element.createElement(i.a,{className:"kp-bn7 block-"+n.blockUniqId+" "+(o?"selected":"")+" ",attributes:n,withBackground:!0,withPadding:!0},wp.element.createElement("div",{class:"kenzap-container",style:d},"top"==n.nestedBlocks&&wp.element.createElement(w,null),wp.element.createElement("div",{id:"kp-modal",class:"kp-modal"},wp.element.createElement("iframe",{width:"560",height:"315",src:n.video,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),wp.element.createElement("div",{class:"kp-modc"},wp.element.createElement("p",null,n.caption))),wp.element.createElement("div",{class:"kp-content"},wp.element.createElement(b,{tagName:"h1",className:"kpt",value:n.title,placeholder:__("Title","kenzap-cta"),onChange:function(e){a({title:e})},style:Object(c.b)(n,0)}),wp.element.createElement(b,{tagName:"p",className:"kpc",value:n.caption,placeholder:__("Title","kenzap-cta"),onChange:function(e){a({caption:e})},style:Object(c.b)(n,1)}),wp.element.createElement("div",{class:"kpa"},n.action&&wp.element.createElement("a",{href:"#kp-modal",class:"modal-link",rel:"modal:open"},wp.element.createElement("div",{class:"kpim"})),!n.action&&wp.element.createElement("a",{target:n.actionNew?"_blank":"_self",rel:"noopener noreferrer",href:n.video},wp.element.createElement("div",{class:"kpim"})))),"bottom"==n.nestedBlocks&&wp.element.createElement(w,null)))))}}]),t}(g);t.a=z}]);