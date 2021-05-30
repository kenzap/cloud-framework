!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getStyles",function(){return u}),n.d(t,"typographyArr",function(){return g});var o=n(3),a=(n.n(o),n(4)),r=(n.n(a),n(1)),l=n(2),i=n(5),__=wp.i18n.__,c=wp.blocks.registerBlockType,p=wp.editor.InnerBlocks,u=function(e){var t={maxWidth:"100%"===e.containerMaxWidth?"100%":e.containerMaxWidth+"px","--maxWidth":("100%"===e.containerMaxWidth?"100wh":e.containerMaxWidth+" ")+" "},n={"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px","--textColor":""+e.textColor};return"none"!=e.ctaImage?n["--ctaImage"]="url('"+e.ctaImage+"')":n["--ctaImage"]="unset",e.backgroundColor&&(n["--backgroundColor"]=e.backgroundColor),{vars:n,kenzapContanerStyles:t}},g=JSON.stringify([{title:__("- Title","kenzap-cta"),"font-size":18,"font-weight":4,"line-height":21,"padding-top":60,"padding-right":60,"padding-bottom":60,"padding-left":60,color:"#ffffff"}]);c("kenzap/cta-5",{title:__("Kenzap CTA 5","kenzap-cta"),icon:"migrate",category:"layout",keywords:[__("Columns","kenzap-cta"),__("Call to action","kenzap-cta"),__("Banner","kenzap-cta")],html:!0,supports:{align:["full","wide"],anchor:!0},attributes:Object.assign({},r.d,{btnText:{type:"string",default:__("Request a callback now!","kenzap-cta")},iconSize:{type:"number",default:19},link:{type:"string",default:"tel:+1234567890987"},linkNew:{type:"boolean",default:!1},ctaImage:{type:"string",default:window.kenzap_cta_path+"images/phone-icon.svg"},ctaImageId:{type:"string",default:""},textColor:{type:"string",default:"#ffffff"},items:{type:"array",default:[]},typography:{type:"array",default:[]},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0},isVisible:{type:"boolean",default:!1}}),edit:function(e){return e.attributes.isFirstLoad&&e.setAttributes({backgroundColor:"#9376df",isFirstLoad:!1}),wp.element.createElement(i.a,e)},save:function(e){var t=e.className,n=e.attributes,o=u(e.attributes),a=o.vars,i=o.kenzapContanerStyles;return wp.element.createElement("div",{id:n.anchor,className:t||"",style:a},wp.element.createElement(r.b,{className:"kpcta6 block-"+n.blockUniqId,attributes:n,style:a,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container",style:i},"top"==n.nestedBlocks&&wp.element.createElement(p.Content,null),wp.element.createElement("div",{class:"kp-content",style:{backgroundColor:n.textColor3}},n.btnText&&wp.element.createElement("a",{className:"cta-btn-1",style:Object(l.b)(n,0),rel:"noopener noreferrer",target:n.linkNew?"_blank":"_self",href:n.link},wp.element.createElement("i",{style:{width:n.iconSize+"px",height:n.iconSize+"px"},class:"phone-icon"})," ",n.btnText)),"bottom"==n.nestedBlocks&&wp.element.createElement(p.Content,null))))}})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"c",function(){return x}),n.d(t,"a",function(){return v}),n.d(t,"b",function(){return C});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,i=wp.components,c=i.RangeControl,p=i.CheckboxControl,u=i.SelectControl,g=i.PanelBody,d=i.Button,s=wp.element,m=s.Component,b=s.Fragment,h=wp.editor,f=h.MediaUpload,y=h.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},k=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},x=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,o=void 0===n||n,a=t.backgroundImageId,r=t.backgroundImage,l=(t.backgroundImageF,t.containerMaxWidth),i=t.backgroundColor,s=t.backgroundRepeat,m=t.backgroundPosition,h=(t.alignment,t.setAttributes),w=t.width100,x=t.parallax,v=t.optimize,C=t.withWidth100,E=void 0!==C&&C,P=t.withPadding,z=void 0!==P&&P,T=t.withNested,I=void 0!==T&&T,S=t.containerPadding,O=t.containerSidePadding,B=t.autoPadding,_=void 0===B?"":B,A=t.nestedBlocks,M=void 0===A?"":A;return wp.element.createElement(b,null,o&&wp.element.createElement(g,{title:__("Background"),initialOpen:!1},wp.element.createElement(y,{title:__("Color"),initialOpen:!0,colorSettings:[{value:i,onChange:function(e){return h({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(f,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:a,render:function(t){return wp.element.createElement(b,null,a||"none"!==r?wp.element.createElement(b,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(d,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){h({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(k,null)))}}),"none"!==r&&wp.element.createElement(b,null,wp.element.createElement(u,{label:__("Image style"),value:s,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){h({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:m,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){h({backgroundPosition:e})}}),wp.element.createElement(p,{label:__("Image parallax"),checked:x,onChange:function(e){h({parallax:e})}}),wp.element.createElement(p,{label:__("Image size optimization"),checked:v,onChange:function(e){h({optimize:e})}}))),wp.element.createElement(g,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(l),onChange:function(e){return h({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(p,{label:__("Full width"),checked:w,onChange:function(e){h({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),z&&wp.element.createElement(b,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:S,onChange:function(e){return h({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:O,onChange:function(e){return h({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(p,{label:__("Responsive paddings"),checked:_.length>0,onChange:function(e){h({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),I&&wp.element.createElement(u,{label:__("Nested block"),value:M,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){h({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(m),v=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},C=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return P}),n.d(t,"a",function(){return z});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,p=wp.components,u=p.RangeControl,g=p.PanelBody,d=p.Toolbar,s=p.ToggleControl,m=p.IconButton,b=p.Button,h=wp.element,f=h.Component,y=h.Fragment,w=wp.editor,k=w.PanelColorSettings,x=w.FontSizePicker,v=w.AlignmentToolbar,C=w.MediaUpload,E={},P=function(e,t,n){var o=e.typography[t];if(o){if(E[t]={},o["font-size"]&&(E[t]["font-size"]=o["font-size"]+"px"),o["font-size-t"]>8&&(E[t]["--fst"]=o["font-size-t"]+"px"),o["font-size-m"]>8&&(E[t]["--fsm"]=o["font-size-m"]+"px"),o["text-align"]&&"-"!=o["text-align"]&&(E[t]["text-align"]=o["text-align"]+" "),o["text-transform"]&&"-"!=o["text-transform"]&&(E[t]["text-transform"]="A"==o["text-transform"]?"uppercase":"a"==o["text-transform"]?"capitalize":"lowercase"),o["line-height"]&&(E[t]["line-height"]=Math.round(o["line-height"]/o["font-size"]*100)/100+" "),o["font-weight"]&&(E[t]["font-weight"]=100*o["font-weight"]+" "),o["letter-spacing"]&&(E[t]["letter-spacing"]=(o["letter-spacing"]-100)/10+"px"),o.opacity&&(E[t].opacity=o.opacity/100+" "),o["margin-top"]&&(E[t]["margin-top"]=o["margin-top"]+"px"),o["margin-right"]&&(E[t]["margin-right"]=o["margin-right"]+"px"),o["margin-bottom"]&&(E[t]["margin-bottom"]=o["margin-bottom"]+"px"),o["margin-left"]&&(E[t]["margin-left"]=o["margin-left"]+"px"),o["padding-top"]&&(E[t]["padding-top"]=o["padding-top"]+"px"),o["padding-right"]&&(E[t]["padding-right"]=o["padding-right"]+"px"),o["padding-bottom"]&&(E[t]["padding-bottom"]=o["padding-bottom"]+"px"),o["padding-left"]&&(E[t]["padding-left"]=o["padding-left"]+"px"),o.color&&"-"!=o.color&&(E[t]["--cl"]=o.color+" ",E[t].color=o.color),o["background-color"]&&(E[t]["background-color"]=o["background-color"]),o["text-shadow"]&&"-"!=o["text-shadow"]&&(E[t].filter="drop-shadow("+o["shadow-color"]+" "+parseInt(Math.cos(o["shadow-angle"]*Math.PI/180)*o["shadow-length"])+"px "+parseInt(Math.sin(o["shadow-angle"]*Math.PI/180)*o["shadow-length"])+"px "+o["shadow-blur"]+"px)"),o["border-radius"]&&(E[t]["border-radius"]=o["border-radius"]+"px"),o["border-width"]&&(E[t]["border-width"]=o["border-width"]+"px"),o["border-color"]&&(E[t]["border-color"]=o["border-color"]+" "),o["hover-color"]&&(E[t]["--hcl"]=o["hover-color"]+" "),o["hover-border-color"]&&(E[t]["--hbrcl"]=o["hover-border-color"]+" "),o["hover-background-color"]&&(E[t]["--hbacl"]=o["hover-background-color"]+" "),o["icon-url"]&&"none"!==o["icon-url"]&&(E[t]["--icon"]="url("+o["icon-url"]+")"),o["icon-size"]&&(E[t]["--iconWidth"]=o["icon-size"]+"px",E[t]["--iconHeight"]=o["icon-size"]*o["icon-aspect"]+"px"),o["icon-v"]&&(E[t]["--iconV"]=o["icon-v"]+"px"),o["icon-h"]&&(E[t]["--iconH"]=o["icon-h"]+"px"),n){var a={};return a[n]=E[t][n],a}return E[t]}return{}},z=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,p=Array(c),u=0;u<c;u++)p[u]=arguments[u];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),o.onChangePropertyTypo=function(e,t,n){var r=o.props.typography,l=[];[].concat(a(JSON.parse(o.props.typographyArr))).forEach(function(e,t){l[t]=Object.assign({},e,r[t])}),l[n][e]=t,o.props.setAttributes({typography:l,randomValueT:(new Date).getTime()})},o.iconMeasure=function(e,t){var n=e.target,a=n.offsetHeight/n.offsetWidth;o.onChangePropertyTypo("icon-aspect",a,t)},i=n,l(o,i)}return i(t,e),c(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(a(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(y,null,wp.element.createElement(g,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var a,r,l,i,c,p;return wp.element.createElement(g,{title:t.title,initialOpen:!1},wp.element.createElement(x,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(v,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(d,{controls:["A","a","_"].map(function(o){return e.createLevelControl(o,t["text-transform"],function(o){t["text-transform"]==o&&(o=""),e.onChangePropertyTypo("text-transform",o,n)})})}),wp.element.createElement(u,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(u,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(u,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(u,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(s,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(o){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",o,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(k,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(u,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(u,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(C,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(o){return wp.element.createElement(y,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(y,null,wp.element.createElement(b,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(b,{isDefault:!0,onClick:o.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(m,{icon:"arrow-up-alt2",label:"Move up",style:(a={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},o(a,"text-align","center"),o(a,"padding","8px 0"),a),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(m,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:o({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(m,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(m,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},o(r,"text-align","center"),o(r,"clear","both"),o(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(g,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(l,"text-align","center"),o(l,"padding","8px 0"),l)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(i,"text-align","center"),o(i,"clear","both"),o(i,"padding","8px 0"),i)}))),wp.element.createElement(g,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(c,"text-align","center"),o(c,"padding","8px 0"),c)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(p,"text-align","center"),o(p,"clear","both"),o(p,"padding","8px 0"),p)}))))})))}}]),t}(f)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n(1),c=n(2),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,g=wp.element,d=g.Component,s=g.Fragment,m=wp.editor,b=m.InspectorControls,h=m.PanelColorSettings,f=m.MediaUpload,y=m.InnerBlocks,w=wp.components,k=w.RangeControl,x=w.PanelBody,v=w.TextControl,C=w.Popover,E=w.ToggleControl,P=w.Button,z=!1,T=function(e){function t(){var e,n,r,l;o(this,t);for(var i=arguments.length,c=Array(i),p=0;p<i;p++)c[p]=arguments[p];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={activeSubBlock:-1,showError:!1},r.timerId=0,l=n,a(r,l)}return r(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.attributes,a=t.setAttributes,r=t.isSelected,u=Object(l.getStyles)(o),g=u.vars,d=u.kenzapContanerStyles,m=function(){z||(z=!0,e.props.setAttributes({isVisible:!o.isVisible}))},w=function(t){t||(z=!1,e.props.setAttributes({isVisible:!o.isVisible}))};return wp.element.createElement("div",null,wp.element.createElement(b,null,wp.element.createElement(x,{title:__("General","kenzap-cta"),initialOpen:!1},wp.element.createElement(k,{label:__("Icon size","kenzap-cta"),value:o.iconSize,onChange:function(e){return a({iconSize:e})},min:10,max:130}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Icon (SVG)","kenzap-cta")),wp.element.createElement(f,{onSelect:function(t){e.props.setAttributes({ctaImage:t.url,ctaImageId:t.id})},value:o.ctaImageId,render:function(e){return wp.element.createElement(s,null,o.ctaImageId||"none"!==o.ctaImage?wp.element.createElement(s,null,wp.element.createElement(P,{isDefault:!0,onClick:function(){a({ctaImageId:"",ctaImage:"none"})}},__("Remove","kenzap-cta")),wp.element.createElement("div",{style:{width:"27px",height:"27px",display:"inline-block",margin:"0 0 8px 5px",backgroundImage:"url("+[o.ctaImage?o.ctaImage:""]+")",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})):wp.element.createElement(P,{isDefault:!0,onClick:e.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose","kenzap-cta")))}}),wp.element.createElement(h,{title:__("Colors","kenzap-cta"),initialOpen:!1,colorSettings:[{value:o.textColor,onChange:function(e){return a({textColor:e})},label:__("Icon","kenzap-cta")}]})),wp.element.createElement(c.a,p({setAttributes:a,typographyArr:l.typographyArr},o)),wp.element.createElement(i.c,p({setAttributes:a},o,{withPadding:!0,withWidth100:!0,withBackground:!0,withAutoPadding:!0,withNested:!0}))),wp.element.createElement("div",{id:o.anchor,className:n||"",style:g},wp.element.createElement(i.a,{className:"kpcta6 block-"+o.blockUniqId+" "+(r?"selected":"")+" ",attributes:o,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container",style:d},"top"==o.nestedBlocks&&wp.element.createElement(y,null),wp.element.createElement("div",{class:"kp-content",style:{backgroundColor:o.textColor3}},wp.element.createElement("a",{isDefault:!0,style:Object(c.b)(o,0),className:"cta-btn-1",onClick:m},wp.element.createElement("i",{style:{width:o.iconSize+"px",height:o.iconSize+"px"},class:"phone-icon"}),o.btnText?o.btnText:"Button 1",z&&wp.element.createElement(C,{className:"kp-popover"},wp.element.createElement(v,{label:__("Link","kenzap-cta"),placeholder:__("http://www.example.com"),value:o.link,className:"link-text",onChange:function(e){return a({link:e})}}),wp.element.createElement(E,{label:o.linkNew?__("Open link in new window.","kenzap-cta"):__("Open link in current window","kenzap-cta"),checked:o.linkNew,onChange:function(e){a({linkNew:e}),w(!0)},onClick:w(!0)}),wp.element.createElement(v,{label:__("Button text","kenzap-cta"),placeholder:__("View More"),value:o.btnText,className:"link-text",onChange:function(e){return a({btnText:e})},onClick:w(!0)}),wp.element.createElement("button",{className:"link-close button button-large",onClick:function(){setTimeout(function(){w(!1)},100)}},__("Save & Close"))))),"bottom"==o.nestedBlocks&&wp.element.createElement(y,null)))))}}]),t}(d);t.a=T}]);