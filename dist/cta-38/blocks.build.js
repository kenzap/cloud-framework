!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"defaultItem",function(){return m}),n.d(t,"defaultSubBlocks",function(){return g}),n.d(t,"typographyArr",function(){return b}),n.d(t,"getStyles",function(){return h});var o=n(3),r=(n.n(o),n(4)),i=(n.n(r),n(1)),l=n(2),c=n(5),__=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,s=u.RichText,d=u.InnerBlocks,m={title:__("New Step","kenzap-steps"),description:__("Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu","kenzap-steps")},g=JSON.stringify([{title:__("AWESOME COLLAGES","kenzap-steps"),description:__("Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu","kenzap-steps"),key:(new Date).getTime()+1},{title:__("CREATIVE TEAM","kenzap-steps"),description:__("Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu","kenzap-steps"),key:(new Date).getTime()+2},{title:__("CONCEPTUAL ART","kenzap-steps"),description:__("Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu","kenzap-steps"),key:(new Date).getTime()+3},{title:__("PRINT & DIGITAL","kenzap-steps"),description:__("Lorem Ipsum proin gravida nibivel velit auctor aenean velitsol licitu","kenzap-steps"),key:(new Date).getTime()+4}]),b=JSON.stringify([{title:__("- Title","kenzap-steps"),"font-size":24,"font-weight":7,"line-height":31,"margin-bottom":15,color:"#333333"},{title:__("- Description","kenzap-steps"),"text-align":"","font-size":15,"font-weight":4,"line-height":25,"letter-spacing":100,color:"#333333"}]),h=function(e){var t={maxWidth:"100%"===e.containerMaxWidth?"100%":e.containerMaxWidth+"px","--maxWidth":("100%"===e.containerMaxWidth?"100wh":e.containerMaxWidth+" ")+" "},n={"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px"};return"undefined"!==typeof e.stepStrokeNumberColor&&(n["--stepStrokeNumberColor"]=""+e.stepStrokeNumberColor),{vars:n,kenzapContanerStyles:t}};p("kenzap/cta-38",{title:__("Outlined Steps","kenzap-steps"),icon:"networking",category:"layout",keywords:[__("kenzap cta 38","kenzap-steps"),__("Outlined Steps","kenzap-steps"),__("features, numbers","kenzap-steps")],anchor:!0,html:!0,supports:{align:["full","wide"]},attributes:Object.assign({},i.d,{align:{type:"string",default:"full"},titleSize:{type:"number",default:24},descriptionSize:{type:"number",default:15},numberSize:{type:"number",default:140},stepNumberColor:{type:"string"},stepStrokeNumberColor:{type:"string"},items:{type:"array",default:[]},typography:{type:"array",default:[]},alignment:{type:"string",default:"none"},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0},randomValue:{type:"string"}}),edit:function(e){return e.attributes.stepNumberColor||e.setAttributes({stepNumberColor:"#ffffff"}),0===e.attributes.items.length&&e.attributes.isFirstLoad&&(e.setAttributes({stepStrokeNumberColor:"#000000",items:[].concat(a(JSON.parse(g))),isFirstLoad:!1}),e.attributes.items=JSON.parse(g),e.attributes.blockUniqId||e.setAttributes({blockUniqId:(new Date).getTime()})),wp.element.createElement(c.a,e)},save:function(e){var t=e.className,n=e.attributes,a=h(e.attributes),o=a.vars,r=a.kenzapContanerStyles;return wp.element.createElement("div",{className:t||"",style:o},wp.element.createElement(i.b,{className:"kenzap-steps-5 block-"+n.blockUniqId,attributes:n,style:o,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container",style:r},"top"==n.nestedBlocks&&wp.element.createElement(d.Content,null),wp.element.createElement("div",{className:"step-list"},wp.element.createElement("div",{className:"kenzap-row"},n.items&&n.items.map(function(e,t){return wp.element.createElement("div",{key:e.key,className:"kenzap-col-3"},wp.element.createElement("div",{className:"step-box"},wp.element.createElement("div",{className:"step-count"},wp.element.createElement("span",{style:{fontSize:n.numberSize+"px",lineHeight:n.numberSize+"px",color:n.stepNumberColor}},"0"+(t+1))),wp.element.createElement("div",{className:"step-content"},e.title&&wp.element.createElement(s.Content,{tagName:"h3",value:e.title,style:Object(l.b)(n,0)}),e.description&&wp.element.createElement(s.Content,{tagName:"p",value:e.description,style:Object(l.b)(n,1)}))))}))),"bottom"==n.nestedBlocks&&wp.element.createElement(d.Content,null))))}})},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"c",function(){return k}),n.d(t,"a",function(){return x}),n.d(t,"b",function(){return C});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,l=wp.components,c=l.RangeControl,p=l.CheckboxControl,u=l.SelectControl,s=l.PanelBody,d=l.Button,m=wp.element,g=m.Component,b=m.Fragment,h=wp.editor,f=h.MediaUpload,y=h.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},v=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},k=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,a=void 0===n||n,o=t.backgroundImageId,r=t.backgroundImage,i=(t.backgroundImageF,t.containerMaxWidth),l=t.backgroundColor,m=t.backgroundRepeat,g=t.backgroundPosition,h=(t.alignment,t.setAttributes),w=t.width100,k=t.parallax,x=t.optimize,C=t.withWidth100,E=void 0!==C&&C,P=t.withPadding,z=void 0!==P&&P,T=t.withNested,S=void 0!==T&&T,I=t.containerPadding,O=t.containerSidePadding,N=t.autoPadding,A=void 0===N?"":N,B=t.nestedBlocks,_=void 0===B?"":B;return wp.element.createElement(b,null,a&&wp.element.createElement(s,{title:__("Background"),initialOpen:!1},wp.element.createElement(y,{title:__("Color"),initialOpen:!0,colorSettings:[{value:l,onChange:function(e){return h({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(f,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:o,render:function(t){return wp.element.createElement(b,null,o||"none"!==r?wp.element.createElement(b,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(d,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){h({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(v,null)))}}),"none"!==r&&wp.element.createElement(b,null,wp.element.createElement(u,{label:__("Image style"),value:m,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){h({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:g,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){h({backgroundPosition:e})}}),wp.element.createElement(p,{label:__("Image parallax"),checked:k,onChange:function(e){h({parallax:e})}}),wp.element.createElement(p,{label:__("Image size optimization"),checked:x,onChange:function(e){h({optimize:e})}}))),wp.element.createElement(s,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(i),onChange:function(e){return h({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(p,{label:__("Full width"),checked:w,onChange:function(e){h({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),z&&wp.element.createElement(b,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:I,onChange:function(e){return h({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:O,onChange:function(e){return h({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(p,{label:__("Responsive paddings"),checked:A.length>0,onChange:function(e){h({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),S&&wp.element.createElement(u,{label:__("Nested block"),value:_,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){h({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(g),x=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},C=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return P}),n.d(t,"a",function(){return z});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,p=wp.components,u=p.RangeControl,s=p.PanelBody,d=p.Toolbar,m=p.ToggleControl,g=p.IconButton,b=p.Button,h=wp.element,f=h.Component,y=h.Fragment,w=wp.editor,v=w.PanelColorSettings,k=w.FontSizePicker,x=w.AlignmentToolbar,C=w.MediaUpload,E={},P=function(e,t,n){var a=e.typography[t];if(a){if(E[t]={},a["font-size"]&&(E[t]["font-size"]=a["font-size"]+"px"),a["font-size-t"]>8&&(E[t]["--fst"]=a["font-size-t"]+"px"),a["font-size-m"]>8&&(E[t]["--fsm"]=a["font-size-m"]+"px"),a["text-align"]&&"-"!=a["text-align"]&&(E[t]["text-align"]=a["text-align"]+" "),a["text-transform"]&&"-"!=a["text-transform"]&&(E[t]["text-transform"]="A"==a["text-transform"]?"uppercase":"a"==a["text-transform"]?"capitalize":"lowercase"),a["line-height"]&&(E[t]["line-height"]=Math.round(a["line-height"]/a["font-size"]*100)/100+" "),a["font-weight"]&&(E[t]["font-weight"]=100*a["font-weight"]+" "),a["letter-spacing"]&&(E[t]["letter-spacing"]=(a["letter-spacing"]-100)/10+"px"),a.opacity&&(E[t].opacity=a.opacity/100+" "),a["margin-top"]&&(E[t]["margin-top"]=a["margin-top"]+"px"),a["margin-right"]&&(E[t]["margin-right"]=a["margin-right"]+"px"),a["margin-bottom"]&&(E[t]["margin-bottom"]=a["margin-bottom"]+"px"),a["margin-left"]&&(E[t]["margin-left"]=a["margin-left"]+"px"),a["padding-top"]&&(E[t]["padding-top"]=a["padding-top"]+"px"),a["padding-right"]&&(E[t]["padding-right"]=a["padding-right"]+"px"),a["padding-bottom"]&&(E[t]["padding-bottom"]=a["padding-bottom"]+"px"),a["padding-left"]&&(E[t]["padding-left"]=a["padding-left"]+"px"),a.color&&"-"!=a.color&&(E[t]["--cl"]=a.color+" ",E[t].color=a.color),a["background-color"]&&(E[t]["background-color"]=a["background-color"]),a["text-shadow"]&&"-"!=a["text-shadow"]&&(E[t].filter="drop-shadow("+a["shadow-color"]+" "+parseInt(Math.cos(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+parseInt(Math.sin(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+a["shadow-blur"]+"px)"),a["border-radius"]&&(E[t]["border-radius"]=a["border-radius"]+"px"),a["border-width"]&&(E[t]["border-width"]=a["border-width"]+"px"),a["border-color"]&&(E[t]["border-color"]=a["border-color"]+" "),a["hover-color"]&&(E[t]["--hcl"]=a["hover-color"]+" "),a["hover-border-color"]&&(E[t]["--hbrcl"]=a["hover-border-color"]+" "),a["hover-background-color"]&&(E[t]["--hbacl"]=a["hover-background-color"]+" "),a["icon-url"]&&"none"!==a["icon-url"]&&(E[t]["--icon"]="url("+a["icon-url"]+")"),a["icon-size"]&&(E[t]["--iconWidth"]=a["icon-size"]+"px",E[t]["--iconHeight"]=a["icon-size"]*a["icon-aspect"]+"px"),a["icon-v"]&&(E[t]["--iconV"]=a["icon-v"]+"px"),a["icon-h"]&&(E[t]["--iconH"]=a["icon-h"]+"px"),n){var o={};return o[n]=E[t][n],o}return E[t]}return{}},z=function(e){function t(){var e,n,a,l;r(this,t);for(var c=arguments.length,p=Array(c),u=0;u<c;u++)p[u]=arguments[u];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),a.onChangePropertyTypo=function(e,t,n){var r=a.props.typography,i=[];[].concat(o(JSON.parse(a.props.typographyArr))).forEach(function(e,t){i[t]=Object.assign({},e,r[t])}),i[n][e]=t,a.props.setAttributes({typography:i,randomValueT:(new Date).getTime()})},a.iconMeasure=function(e,t){var n=e.target,o=n.offsetHeight/n.offsetWidth;a.onChangePropertyTypo("icon-aspect",o,t)},l=n,i(a,l)}return l(t,e),c(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(o(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(y,null,wp.element.createElement(s,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var o,r,i,l,c,p;return wp.element.createElement(s,{title:t.title,initialOpen:!1},wp.element.createElement(k,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(x,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(d,{controls:["A","a","_"].map(function(a){return e.createLevelControl(a,t["text-transform"],function(a){t["text-transform"]==a&&(a=""),e.onChangePropertyTypo("text-transform",a,n)})})}),wp.element.createElement(u,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(u,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(u,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(u,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(m,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(a){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",a,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(v,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(v,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(u,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(u,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(C,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(a){return wp.element.createElement(y,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(y,null,wp.element.createElement(b,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(b,{isDefault:!0,onClick:a.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(g,{icon:"arrow-up-alt2",label:"Move up",style:(o={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},a(o,"text-align","center"),a(o,"padding","8px 0"),o),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(g,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:a({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(g,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(g,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},a(r,"text-align","center"),a(r,"clear","both"),a(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(v,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(v,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(s,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(i,"text-align","center"),a(i,"padding","8px 0"),i)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(l,"text-align","center"),a(l,"clear","both"),a(l,"padding","8px 0"),l)}))),wp.element.createElement(s,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(c,"text-align","center"),a(c,"padding","8px 0"),c)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(p,"text-align","center"),a(p,"clear","both"),a(p,"padding","8px 0"),p)}))))})))}}]),t}(f)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n(1),p=n(2),u=n(6),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,m=wp.element.Component,g=wp.editor,b=g.RichText,h=g.InspectorControls,f=g.PanelColorSettings,y=g.InnerBlocks,w=wp.components,v=w.RangeControl,k=w.PanelBody,x=0,C=function(e){function t(){var e,n,i,c;o(this,t);for(var p=arguments.length,u=Array(p),s=0;s<p;s++)u[s]=arguments[s];return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={activeSubBlock:-1},i.addItem=function(){x++,i.props.setAttributes({items:[].concat(a(i.props.attributes.items),[Object.assign({},l.defaultItem,{title:l.defaultItem.title+" "+x,key:"new "+(new Date).getTime()})])})},i.onChangePropertyItem=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=o?[].concat(a(i.props.attributes.items)):i.props.attributes.items;r[n]&&"string"===typeof r[n][e]&&(r[n][e]=t,i.props.setAttributes({items:r}))},i.onChangeAlignment=function(e){i.props.setAttributes({alignment:void 0===e?"none":e})},i.removeItem=function(e){var t=[].concat(a(i.props.attributes.items));1===t.length?i.props.setAttributes({items:[l.defaultItem]}):(t.splice(e,1),i.props.setAttributes({items:t}))},c=n,r(i,c)}return i(t,e),d(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.attributes,o=t.setAttributes,r=t.isSelected,i=Object(l.getStyles)(a),d=i.vars;return wp.element.createElement("div",null,wp.element.createElement(h,null,wp.element.createElement(k,{title:__("General","kenzap-steps"),initialOpen:!1},wp.element.createElement(v,{label:__("Number size","kenzap-steps"),value:a.numberSize,onChange:function(e){return o({numberSize:e})},min:10,max:200}),wp.element.createElement(f,{title:__("Colors","kenzap-steps"),initialOpen:!1,colorSettings:[{value:a.stepNumberColor,onChange:function(e){return e||(e="#ffffff"),o({stepNumberColor:e})},label:__("Step number color","kenzap-steps")},{value:a.stepStrokeNumberColor,onChange:function(e){return o({stepStrokeNumberColor:e})},label:__("Step stroke number color","kenzap-steps")}]})),wp.element.createElement(p.a,s({setAttributes:o,typographyArr:l.typographyArr},a)),wp.element.createElement(c.c,s({setAttributes:o},a,{withNested:!0,withPadding:!0,withWidth100:!0,withBackground:!0,withAutoPadding:!0}))),wp.element.createElement("div",{className:n||"",style:d},wp.element.createElement(c.a,{className:"kenzap-steps-5 block-"+a.blockUniqId+" "+(r?"selected":"")+" ",attributes:a,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container"},"top"==a.nestedBlocks&&wp.element.createElement(y,{className:"kpnesb"}),wp.element.createElement("div",{className:"step-list list-loaded"},wp.element.createElement("div",{className:"kenzap-row"},a.items&&a.items.map(function(t,n){return wp.element.createElement("div",{key:t.key,className:"kenzap-col-3",style:{width:"50%"}},wp.element.createElement("button",{className:"remove",onClick:function(){return e.removeItem(n)}},wp.element.createElement("i",{className:"dashicons dashicons-no"})),wp.element.createElement("div",{className:"step-box"},wp.element.createElement("div",{className:"step-count"},wp.element.createElement("span",{style:{fontSize:a.numberSize+"px",lineHeight:a.numberSize+"px",color:a.stepNumberColor}},"0"+(n+1))),wp.element.createElement("div",{className:"step-content"},wp.element.createElement(b,{tagName:"h3",placeholder:__("Title","kenzap-steps"),value:t.title,onChange:function(t){return e.onChangePropertyItem("title",t,n,!0)},style:Object(p.b)(a,0)}),wp.element.createElement(b,{tagName:"p",placeholder:__("Description","kenzap-steps"),value:t.description,onChange:function(t){return e.onChangePropertyItem("description",t,n,!0)},style:Object(p.b)(a,1)}))))}))),"bottom"==a.nestedBlocks&&wp.element.createElement(y,{className:"kpnesb"})),wp.element.createElement("div",{className:"editPadding"}),wp.element.createElement("button",{className:"addWhite",onClick:this.addItem},wp.element.createElement("span",null,wp.element.createElement(u.a,null)),__("Add new step","kenzap-steps")))))}}]),t}(m);t.a=C},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){return wp.element.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-insert",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement("path",{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"}))}}]);