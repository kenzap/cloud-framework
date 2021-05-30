!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getStyles",function(){return d}),n.d(t,"typographyArr",function(){return s}),n.d(t,"getInline",function(){return g});var o=n(3),r=(n.n(o),n(4)),l=(n.n(r),n(1)),i=n(2),c=n(5),__=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor.InnerBlocks,d=function(e){var t={maxWidth:"100%"===e.containerMaxWidth?"100%":e.containerMaxWidth+"px","--maxWidth":("100%"===e.containerMaxWidth?"100wh":e.containerMaxWidth+" ")+" "},n={"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px"};return e.textOutColor&&(n["--textOutColor"]=e.textOutColor),{vars:n,kenzapContanerStyles:t}},s=JSON.stringify([{title:__("- Countdown","kenzap-stats"),"font-size":60,"font-weight":6,"line-height":60,"margin-bottom":10},{title:__("- Title","kenzap-stats"),"font-size":15,"font-weight":4,"line-height":26}]),g=function(e,t){var n=Object(i.b)(e,t),a="";return Object.getOwnPropertyNames(n).forEach(function(e){a+=e+":"+n[e]+";"}),a};p("kenzap/cta-39",{title:__("Countdown Timer","kenzap-stats"),description:__("Note! Some changes of this block can be only previewed on front-end.","kenzap-stats"),icon:"backup",category:"layout",keywords:[__("kenzap cta 39","kenzap-stats"),__("Countdown stats","kenzap-stats"),__("Timer","kenzap-stats")],anchor:!0,html:!0,supports:{align:["full","wide"]},attributes:Object.assign({},l.d,{align:{type:"string",default:"full"},date:{type:"string",default:""},cbYear:{type:"boolean",default:!1},cbMonth:{type:"boolean",default:!0},cbDay:{type:"boolean",default:!0},cbHour:{type:"boolean",default:!0},cbMinute:{type:"boolean",default:!0},cbSecond:{type:"boolean",default:!0},textOutColor:{type:"string"},items:{type:"array",default:[]},typography:{type:"array",default:[]},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0}}),edit:function(e){return setTimeout(function(){jQuery.getScript(window.kenzap_cta_path+"cta-39/jquery.countdown.min.js",function(e,t,n){}),jQuery.getScript(window.kenzap_cta_path+"cta-39/script.js",function(e,t,n){console.log(e),console.log(void 0),console.log("Load was performed.")}(jQuery))},500),wp.element.createElement(c.a,e)},save:function(e){var t,n=e.className,o=e.attributes,r=d(e.attributes),i=r.vars,c=r.kenzapContanerStyles;return wp.element.createElement("div",{className:n||"",style:i},wp.element.createElement(l.b,{className:"kenzap-countdown-1 block-"+o.blockUniqId,attributes:o,style:i,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container",style:c},"top"==o.nestedBlocks&&wp.element.createElement(u.Content,null),wp.element.createElement("div",(t={class:"kp-countdown","data-t0":g(o,0),"data-t1":g(o,1),"data-yeart":__("Years")},a(t,"data-yeart",__("Years")),a(t,"data-montht",__("Months")),a(t,"data-dayt",__("Days")),a(t,"data-hourt",__("Hours")),a(t,"data-minutet",__("Minutes")),a(t,"data-secondt",__("Seconds")),a(t,"data-time",o.date),a(t,"data-year",o.cbYear),a(t,"data-month",o.cbMonth),a(t,"data-day",o.cbDay),a(t,"data-hour",o.cbHour),a(t,"data-minute",o.cbMinute),a(t,"data-second",o.cbSecond),t)),"bottom"==o.nestedBlocks&&wp.element.createElement(u.Content,null))))}})},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"c",function(){return v}),n.d(t,"a",function(){return x}),n.d(t,"b",function(){return C});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,i=wp.components,c=i.RangeControl,p=i.CheckboxControl,u=i.SelectControl,d=i.PanelBody,s=i.Button,g=wp.element,m=g.Component,h=g.Fragment,b=wp.editor,f=b.MediaUpload,y=b.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},k=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},v=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,a=void 0===n||n,o=t.backgroundImageId,r=t.backgroundImage,l=(t.backgroundImageF,t.containerMaxWidth),i=t.backgroundColor,g=t.backgroundRepeat,m=t.backgroundPosition,b=(t.alignment,t.setAttributes),w=t.width100,v=t.parallax,x=t.optimize,C=t.withWidth100,E=void 0!==C&&C,P=t.withPadding,z=void 0!==P&&P,T=t.withNested,S=void 0!==T&&T,O=t.containerPadding,I=t.containerSidePadding,M=t.autoPadding,_=void 0===M?"":M,B=t.nestedBlocks,j=void 0===B?"":B;return wp.element.createElement(h,null,a&&wp.element.createElement(d,{title:__("Background"),initialOpen:!1},wp.element.createElement(y,{title:__("Color"),initialOpen:!0,colorSettings:[{value:i,onChange:function(e){return b({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(f,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:o,render:function(t){return wp.element.createElement(h,null,o||"none"!==r?wp.element.createElement(h,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(s,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){b({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(k,null)))}}),"none"!==r&&wp.element.createElement(h,null,wp.element.createElement(u,{label:__("Image style"),value:g,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){b({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:m,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){b({backgroundPosition:e})}}),wp.element.createElement(p,{label:__("Image parallax"),checked:v,onChange:function(e){b({parallax:e})}}),wp.element.createElement(p,{label:__("Image size optimization"),checked:x,onChange:function(e){b({optimize:e})}}))),wp.element.createElement(d,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(l),onChange:function(e){return b({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(p,{label:__("Full width"),checked:w,onChange:function(e){b({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),z&&wp.element.createElement(h,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:O,onChange:function(e){return b({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:I,onChange:function(e){return b({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(p,{label:__("Responsive paddings"),checked:_.length>0,onChange:function(e){b({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),S&&wp.element.createElement(u,{label:__("Nested block"),value:j,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){b({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(m),x=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},C=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return P}),n.d(t,"a",function(){return z});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,p=wp.components,u=p.RangeControl,d=p.PanelBody,s=p.Toolbar,g=p.ToggleControl,m=p.IconButton,h=p.Button,b=wp.element,f=b.Component,y=b.Fragment,w=wp.editor,k=w.PanelColorSettings,v=w.FontSizePicker,x=w.AlignmentToolbar,C=w.MediaUpload,E={},P=function(e,t,n){var a=e.typography[t];if(a){if(E[t]={},a["font-size"]&&(E[t]["font-size"]=a["font-size"]+"px"),a["font-size-t"]>8&&(E[t]["--fst"]=a["font-size-t"]+"px"),a["font-size-m"]>8&&(E[t]["--fsm"]=a["font-size-m"]+"px"),a["text-align"]&&"-"!=a["text-align"]&&(E[t]["text-align"]=a["text-align"]+" "),a["text-transform"]&&"-"!=a["text-transform"]&&(E[t]["text-transform"]="A"==a["text-transform"]?"uppercase":"a"==a["text-transform"]?"capitalize":"lowercase"),a["line-height"]&&(E[t]["line-height"]=Math.round(a["line-height"]/a["font-size"]*100)/100+" "),a["font-weight"]&&(E[t]["font-weight"]=100*a["font-weight"]+" "),a["letter-spacing"]&&(E[t]["letter-spacing"]=(a["letter-spacing"]-100)/10+"px"),a.opacity&&(E[t].opacity=a.opacity/100+" "),a["margin-top"]&&(E[t]["margin-top"]=a["margin-top"]+"px"),a["margin-right"]&&(E[t]["margin-right"]=a["margin-right"]+"px"),a["margin-bottom"]&&(E[t]["margin-bottom"]=a["margin-bottom"]+"px"),a["margin-left"]&&(E[t]["margin-left"]=a["margin-left"]+"px"),a["padding-top"]&&(E[t]["padding-top"]=a["padding-top"]+"px"),a["padding-right"]&&(E[t]["padding-right"]=a["padding-right"]+"px"),a["padding-bottom"]&&(E[t]["padding-bottom"]=a["padding-bottom"]+"px"),a["padding-left"]&&(E[t]["padding-left"]=a["padding-left"]+"px"),a.color&&"-"!=a.color&&(E[t]["--cl"]=a.color+" ",E[t].color=a.color),a["background-color"]&&(E[t]["background-color"]=a["background-color"]),a["text-shadow"]&&"-"!=a["text-shadow"]&&(E[t].filter="drop-shadow("+a["shadow-color"]+" "+parseInt(Math.cos(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+parseInt(Math.sin(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+a["shadow-blur"]+"px)"),a["border-radius"]&&(E[t]["border-radius"]=a["border-radius"]+"px"),a["border-width"]&&(E[t]["border-width"]=a["border-width"]+"px"),a["border-color"]&&(E[t]["border-color"]=a["border-color"]+" "),a["hover-color"]&&(E[t]["--hcl"]=a["hover-color"]+" "),a["hover-border-color"]&&(E[t]["--hbrcl"]=a["hover-border-color"]+" "),a["hover-background-color"]&&(E[t]["--hbacl"]=a["hover-background-color"]+" "),a["icon-url"]&&"none"!==a["icon-url"]&&(E[t]["--icon"]="url("+a["icon-url"]+")"),a["icon-size"]&&(E[t]["--iconWidth"]=a["icon-size"]+"px",E[t]["--iconHeight"]=a["icon-size"]*a["icon-aspect"]+"px"),a["icon-v"]&&(E[t]["--iconV"]=a["icon-v"]+"px"),a["icon-h"]&&(E[t]["--iconH"]=a["icon-h"]+"px"),n){var o={};return o[n]=E[t][n],o}return E[t]}return{}},z=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,p=Array(c),u=0;u<c;u++)p[u]=arguments[u];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),a.onChangePropertyTypo=function(e,t,n){var r=a.props.typography,l=[];[].concat(o(JSON.parse(a.props.typographyArr))).forEach(function(e,t){l[t]=Object.assign({},e,r[t])}),l[n][e]=t,a.props.setAttributes({typography:l,randomValueT:(new Date).getTime()})},a.iconMeasure=function(e,t){var n=e.target,o=n.offsetHeight/n.offsetWidth;a.onChangePropertyTypo("icon-aspect",o,t)},i=n,l(a,i)}return i(t,e),c(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(o(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(y,null,wp.element.createElement(d,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var o,r,l,i,c,p;return wp.element.createElement(d,{title:t.title,initialOpen:!1},wp.element.createElement(v,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(x,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(s,{controls:["A","a","_"].map(function(a){return e.createLevelControl(a,t["text-transform"],function(a){t["text-transform"]==a&&(a=""),e.onChangePropertyTypo("text-transform",a,n)})})}),wp.element.createElement(u,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(u,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(u,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(u,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(g,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(a){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",a,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(k,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(u,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(u,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(C,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(a){return wp.element.createElement(y,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(y,null,wp.element.createElement(h,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(h,{isDefault:!0,onClick:a.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(m,{icon:"arrow-up-alt2",label:"Move up",style:(o={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},a(o,"text-align","center"),a(o,"padding","8px 0"),o),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(m,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:a({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(m,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(m,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},a(r,"text-align","center"),a(r,"clear","both"),a(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(d,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(l,"text-align","center"),a(l,"padding","8px 0"),l)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(i,"text-align","center"),a(i,"clear","both"),a(i,"padding","8px 0"),i)}))),wp.element.createElement(d,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(c,"text-align","center"),a(c,"padding","8px 0"),c)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(p,"text-align","center"),a(p,"clear","both"),a(p,"padding","8px 0"),p)}))))})))}}]),t}(f)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n(1),c=n(2),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,d=wp.element.Component,s=wp.editor,g=s.InspectorControls,m=s.PanelColorSettings,h=s.InnerBlocks,b=wp.components,f=b.CheckboxControl,y=b.PanelBody,w=b.DateTimePicker,k=b.PanelRow,v=wp.date.__experimentalGetSettings,x=function(e){function t(){var e,n,r,l;a(this,t);for(var i=arguments.length,c=Array(i),p=0;p<i;p++)c[p]=arguments[p];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={activeSubBlock:-1,showError:!1},r.timerId=0,l=n,o(r,l)}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.attributes,a=e.setAttributes,o=e.isSelected,r=Object(l.getStyles)(n),u=r.vars,d=r.kenzapContanerStyles,s=v(),b=/a(?!\\)/i.test(s.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join("")),x=function(e){return e+="",1==e.length?"0"+e:e};if(""==n.date){var C=new Date;C.setMonth(C.getMonth()+1),n.date=C.getFullYear()+"-"+x(C.getMonth()+1)+"-"+x(C.getDate())+"T23:59:59"}return wp.element.createElement("div",null,wp.element.createElement(g,null,wp.element.createElement(y,{title:__("General","kenzap-stats"),initialOpen:!1},wp.element.createElement(k,null,__("Countdown expiration time","kenzap-stats")),wp.element.createElement(w,{currentDate:n.date,onChange:function(e){return a({date:e})},is12Hour:b}),wp.element.createElement(f,{heading:__("Show in countdown","kenzap-stats"),label:__("Year","kenzap-stats"),checked:n.cbYear,onChange:function(e){return a({cbYear:e})}}),wp.element.createElement(f,{label:__("Month","kenzap-stats"),checked:n.cbMonth,onChange:function(e){return a({cbMonth:e})}}),wp.element.createElement(f,{label:__("Day","kenzap-stats"),checked:n.cbDay,onChange:function(e){return a({cbDay:e})}}),wp.element.createElement(f,{label:__("Hour","kenzap-stats"),checked:n.cbHour,onChange:function(e){return a({cbHour:e})}}),wp.element.createElement(f,{label:__("Minute","kenzap-stats"),checked:n.cbMinute,onChange:function(e){return a({cbMinute:e})}}),wp.element.createElement(f,{label:__("Second","kenzap-stats"),checked:n.cbSecond,onChange:function(e){return a({cbSecond:e})}}),wp.element.createElement(m,{title:__("Colors","kenzap-stats"),initialOpen:!1,colorSettings:[{value:n.textOutColor,onChange:function(e){return a({textOutColor:e})},label:__("Outline color","kenzap-stats")}]})),wp.element.createElement(c.a,p({setAttributes:a,typographyArr:l.typographyArr},n)),wp.element.createElement(i.c,p({setAttributes:a},n,{withPadding:!0,withNested:!0,withWidth100:!0,withBackground:!0,withAutoPadding:!0}))),wp.element.createElement("div",{className:t||"",style:u},wp.element.createElement(i.a,{className:"kenzap-countdown-1 block-"+n.blockUniqId+" "+(o?"selected":"")+" ",attributes:n,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container",style:d},"top"==n.nestedBlocks&&wp.element.createElement(h,null),wp.element.createElement("div",{class:"kp-countdown","data-t0":Object(l.getInline)(n,0),"data-t1":Object(l.getInline)(n,1),"data-yeart":__("Years"),"data-montht":__("Months"),"data-dayt":__("Days"),"data-hourt":__("Hours"),"data-minutet":__("Minutes"),"data-secondt":__("Seconds"),"data-year":n.cbYear,"data-month":n.cbMonth,"data-day":n.cbDay,"data-hour":n.cbHour,"data-minute":n.cbMinute,"data-second":n.cbSecond,"data-time":n.date}),"bottom"==n.nestedBlocks&&wp.element.createElement(h,null)))))}}]),t}(d);t.a=x}]);