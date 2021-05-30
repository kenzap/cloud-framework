!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"defaultItem",function(){return g}),n.d(t,"defaultSubBlocks",function(){return m}),n.d(t,"getStyles",function(){return h}),n.d(t,"typographyArr",function(){return b});var o=n(3),r=(n.n(o),n(4)),i=(n.n(r),n(5)),l=n(1),c=n(2),__=wp.i18n.__,p=wp.blocks.registerBlockType,u=wp.editor,s=u.RichText,d=u.InnerBlocks,g={title:__("New feature","kenzap-features"),iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/icon-1.svg",description:__("There are many variations of passages of Lorem Ipsum available, but the.","kenzap-features")},m=JSON.stringify([Object.assign({},g,{title:__("PURE DRINK","kenzap-features"),key:"default1",iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/featured-1.png"}),Object.assign({},g,{title:__("PURE AIR","kenzap-features"),key:"default2",iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/featured-2.png"}),Object.assign({},g,{title:__("EXQUISITE SPACE","kenzap-features"),key:"default3",iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/featured-3.png"}),Object.assign({},g,{title:__("HANDY MATERIAL","kenzap-features"),key:"default4",iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/featured-4.png"}),Object.assign({},g,{key:"default4",iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/relax-flusi-img.png"})]),h=function(e){var t={height:e.iconSize+"px",width:"auto"},n={"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px"},a={};e.width100?(a.width="100%",a["--maxWidth"]="2000"):(a.maxWidth=e.containerMaxWidth+"px",a["--maxWidth"]=e.containerMaxWidth+" ");var o="kenzap-lg";return e.containerMaxWidth<992&&(o="kenzap-md"),e.containerMaxWidth<768&&(o="kenzap-sm"),e.containerMaxWidth<480&&(o="kenzap-xs"),e.width100&&(o="kenzap-lg"),{featuredImg:t,vars:n,kenzapContanerStyles:a,additionalClassForKenzapContainer:o}},b=JSON.stringify([{title:__("- Title","kenzap-features"),"font-size":20,"font-weight":6,"line-height":38,"margin-top":14,"margin-bottom":12,color:"#333333"},{title:__("- Description","kenzap-features"),"text-align":"","font-size":16,"font-weight":4,"line-height":25,"margin-bottom":15,color:"#333333"}]);p("kenzap/cta-60",{title:__("Features List 4","kenzap-features"),icon:"yes",category:"layout",keywords:[__("features 4","kenzap-features"),__("kenzap cta 60","kenzap-features"),__("info block, products","kenzap-features")],anchor:!0,html:!0,supports:{align:["full","wide"]},attributes:Object.assign({},l.d,{align:{type:"string",default:"full"},iconSize:{type:"number",default:90},items:{type:"array",default:[]},typography:{type:"array",default:[]},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0}}),edit:function(e){return 0===e.attributes.items.length&&e.attributes.isFirstLoad&&(e.setAttributes({items:[].concat(a(JSON.parse(m))),isFirstLoad:!1}),e.attributes.items=JSON.parse(m),e.attributes.blockUniqId||e.setAttributes({blockUniqId:(new Date).getTime()})),wp.element.createElement(i.a,e)},save:function(e){var t=e.className,n=e.attributes,a=h(n),o=a.vars,r=a.kenzapContanerStyles,i=a.additionalClassForKenzapContainer,p=function(e,t){return wp.element.createElement("div",{className:e},wp.element.createElement("span",{className:"kp-icon",style:{width:n.iconSize,height:n.iconSize}},wp.element.createElement("img",{src:n.items[t].iconMediaUrl,alt:n.items[t].title.replace(/<(?:.|\n)*?>/gm,"")})),wp.element.createElement(s.Content,{tagName:"h3",value:n.items[t].title,style:Object(c.b)(n,0)}),wp.element.createElement(s.Content,{tagName:"p",value:n.items[t].description,style:Object(c.b)(n,1)}))};return wp.element.createElement("div",{className:"kenzap "+(t||"")},wp.element.createElement(l.b,{className:"kpi3 block-"+n.blockUniqId,attributes:n,style:o,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container "+i,style:r},"top"==n.nestedBlocks&&wp.element.createElement(d,null),wp.element.createElement("div",{className:"kp-row"},wp.element.createElement("div",{className:"kp-col-3"},p("kp-box align-right",0),p("kp-box align-right",1)),wp.element.createElement("div",{class:"kp-col-6"},wp.element.createElement("img",{src:n.items[4].iconMediaUrl,alt:n.items[4].title.replace(/<(?:.|\n)*?>/gm,"")})),wp.element.createElement("div",{class:"kp-col-3"},p("kp-box",2),p("kp-box",3))),"bottom"==n.nestedBlocks&&wp.element.createElement(d,null))))}})},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"c",function(){return v}),n.d(t,"a",function(){return x}),n.d(t,"b",function(){return C});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,l=wp.components,c=l.RangeControl,p=l.CheckboxControl,u=l.SelectControl,s=l.PanelBody,d=l.Button,g=wp.element,m=g.Component,h=g.Fragment,b=wp.editor,f=b.MediaUpload,y=b.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},k=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},v=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,a=void 0===n||n,o=t.backgroundImageId,r=t.backgroundImage,i=(t.backgroundImageF,t.containerMaxWidth),l=t.backgroundColor,g=t.backgroundRepeat,m=t.backgroundPosition,b=(t.alignment,t.setAttributes),w=t.width100,v=t.parallax,x=t.optimize,C=t.withWidth100,E=void 0!==C&&C,P=t.withPadding,z=void 0!==P&&P,I=t.withNested,T=void 0!==I&&I,S=t.containerPadding,O=t.containerSidePadding,M=t.autoPadding,_=void 0===M?"":M,A=t.nestedBlocks,B=void 0===A?"":A;return wp.element.createElement(h,null,a&&wp.element.createElement(s,{title:__("Background"),initialOpen:!1},wp.element.createElement(y,{title:__("Color"),initialOpen:!0,colorSettings:[{value:l,onChange:function(e){return b({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(f,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:o,render:function(t){return wp.element.createElement(h,null,o||"none"!==r?wp.element.createElement(h,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(d,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){b({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(k,null)))}}),"none"!==r&&wp.element.createElement(h,null,wp.element.createElement(u,{label:__("Image style"),value:g,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){b({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:m,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){b({backgroundPosition:e})}}),wp.element.createElement(p,{label:__("Image parallax"),checked:v,onChange:function(e){b({parallax:e})}}),wp.element.createElement(p,{label:__("Image size optimization"),checked:x,onChange:function(e){b({optimize:e})}}))),wp.element.createElement(s,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(i),onChange:function(e){return b({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(p,{label:__("Full width"),checked:w,onChange:function(e){b({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),z&&wp.element.createElement(h,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:S,onChange:function(e){return b({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:O,onChange:function(e){return b({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(p,{label:__("Responsive paddings"),checked:_.length>0,onChange:function(e){b({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),T&&wp.element.createElement(u,{label:__("Nested block"),value:B,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){b({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(m),x=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},C=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return P}),n.d(t,"a",function(){return z});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,p=wp.components,u=p.RangeControl,s=p.PanelBody,d=p.Toolbar,g=p.ToggleControl,m=p.IconButton,h=p.Button,b=wp.element,f=b.Component,y=b.Fragment,w=wp.editor,k=w.PanelColorSettings,v=w.FontSizePicker,x=w.AlignmentToolbar,C=w.MediaUpload,E={},P=function(e,t,n){var a=e.typography[t];if(a){if(E[t]={},a["font-size"]&&(E[t]["font-size"]=a["font-size"]+"px"),a["font-size-t"]>8&&(E[t]["--fst"]=a["font-size-t"]+"px"),a["font-size-m"]>8&&(E[t]["--fsm"]=a["font-size-m"]+"px"),a["text-align"]&&"-"!=a["text-align"]&&(E[t]["text-align"]=a["text-align"]+" "),a["text-transform"]&&"-"!=a["text-transform"]&&(E[t]["text-transform"]="A"==a["text-transform"]?"uppercase":"a"==a["text-transform"]?"capitalize":"lowercase"),a["line-height"]&&(E[t]["line-height"]=Math.round(a["line-height"]/a["font-size"]*100)/100+" "),a["font-weight"]&&(E[t]["font-weight"]=100*a["font-weight"]+" "),a["letter-spacing"]&&(E[t]["letter-spacing"]=(a["letter-spacing"]-100)/10+"px"),a.opacity&&(E[t].opacity=a.opacity/100+" "),a["margin-top"]&&(E[t]["margin-top"]=a["margin-top"]+"px"),a["margin-right"]&&(E[t]["margin-right"]=a["margin-right"]+"px"),a["margin-bottom"]&&(E[t]["margin-bottom"]=a["margin-bottom"]+"px"),a["margin-left"]&&(E[t]["margin-left"]=a["margin-left"]+"px"),a["padding-top"]&&(E[t]["padding-top"]=a["padding-top"]+"px"),a["padding-right"]&&(E[t]["padding-right"]=a["padding-right"]+"px"),a["padding-bottom"]&&(E[t]["padding-bottom"]=a["padding-bottom"]+"px"),a["padding-left"]&&(E[t]["padding-left"]=a["padding-left"]+"px"),a.color&&"-"!=a.color&&(E[t]["--cl"]=a.color+" ",E[t].color=a.color),a["background-color"]&&(E[t]["background-color"]=a["background-color"]),a["text-shadow"]&&"-"!=a["text-shadow"]&&(E[t].filter="drop-shadow("+a["shadow-color"]+" "+parseInt(Math.cos(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+parseInt(Math.sin(a["shadow-angle"]*Math.PI/180)*a["shadow-length"])+"px "+a["shadow-blur"]+"px)"),a["border-radius"]&&(E[t]["border-radius"]=a["border-radius"]+"px"),a["border-width"]&&(E[t]["border-width"]=a["border-width"]+"px"),a["border-color"]&&(E[t]["border-color"]=a["border-color"]+" "),a["hover-color"]&&(E[t]["--hcl"]=a["hover-color"]+" "),a["hover-border-color"]&&(E[t]["--hbrcl"]=a["hover-border-color"]+" "),a["hover-background-color"]&&(E[t]["--hbacl"]=a["hover-background-color"]+" "),a["icon-url"]&&"none"!==a["icon-url"]&&(E[t]["--icon"]="url("+a["icon-url"]+")"),a["icon-size"]&&(E[t]["--iconWidth"]=a["icon-size"]+"px",E[t]["--iconHeight"]=a["icon-size"]*a["icon-aspect"]+"px"),a["icon-v"]&&(E[t]["--iconV"]=a["icon-v"]+"px"),a["icon-h"]&&(E[t]["--iconH"]=a["icon-h"]+"px"),n){var o={};return o[n]=E[t][n],o}return E[t]}return{}},z=function(e){function t(){var e,n,a,l;r(this,t);for(var c=arguments.length,p=Array(c),u=0;u<c;u++)p[u]=arguments[u];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),a.onChangePropertyTypo=function(e,t,n){var r=a.props.typography,i=[];[].concat(o(JSON.parse(a.props.typographyArr))).forEach(function(e,t){i[t]=Object.assign({},e,r[t])}),i[n][e]=t,a.props.setAttributes({typography:i,randomValueT:(new Date).getTime()})},a.iconMeasure=function(e,t){var n=e.target,o=n.offsetHeight/n.offsetWidth;a.onChangePropertyTypo("icon-aspect",o,t)},l=n,i(a,l)}return l(t,e),c(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(o(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(y,null,wp.element.createElement(s,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var o,r,i,l,c,p;return wp.element.createElement(s,{title:t.title,initialOpen:!1},wp.element.createElement(v,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(x,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(d,{controls:["A","a","_"].map(function(a){return e.createLevelControl(a,t["text-transform"],function(a){t["text-transform"]==a&&(a=""),e.onChangePropertyTypo("text-transform",a,n)})})}),wp.element.createElement(u,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(u,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(u,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(u,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(g,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(a){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",a,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(k,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(u,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(u,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(C,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(a){return wp.element.createElement(y,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(y,null,wp.element.createElement(h,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(h,{isDefault:!0,onClick:a.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(m,{icon:"arrow-up-alt2",label:"Move up",style:(o={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},a(o,"text-align","center"),a(o,"padding","8px 0"),o),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(m,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:a({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(m,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(m,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},a(r,"text-align","center"),a(r,"clear","both"),a(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(k,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(s,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(i,"text-align","center"),a(i,"padding","8px 0"),i)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(l,"text-align","center"),a(l,"clear","both"),a(l,"padding","8px 0"),l)}))),wp.element.createElement(s,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(c,"text-align","center"),a(c,"padding","8px 0"),c)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},a(p,"text-align","center"),a(p,"clear","both"),a(p,"padding","8px 0"),p)}))))})))}}]),t}(f)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),c=n(0),p=n(2),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,d=wp.element.Component,g=wp.editor,m=g.MediaUpload,h=g.RichText,b=g.InspectorControls,f=g.InnerBlocks,y=wp.components,w=y.RangeControl,k=y.PanelBody,v=0,x=function(e){function t(){var e,n,i,l;o(this,t);for(var p=arguments.length,u=Array(p),s=0;s<p;s++)u[s]=arguments[s];return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.addItem=function(){v++,i.props.setAttributes({items:[].concat(a(i.props.attributes.items),[Object.assign({},c.defaultItem,{title:c.defaultItem.title+" "+v,key:"new "+(new Date).getTime()})])})},i.onChangePropertyItem=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=o?[].concat(a(i.props.attributes.items)):i.props.attributes.items;r[n]&&"string"===typeof r[n][e]&&(r[n][e]=t,i.props.setAttributes({items:r}))},i.removeItem=function(e){var t=[].concat(a(i.props.attributes.items));1===t.length?i.props.setAttributes({items:[c.defaultItem]}):(t.splice(e,1),i.props.setAttributes({items:t}))},l=n,r(i,l)}return i(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.attributes,o=t.setAttributes,r=t.isSelected,i=Object(c.getStyles)(a),s=i.vars,d=i.kenzapContanerStyles,g=i.additionalClassForKenzapContainer,y=function(t,n){return wp.element.createElement("div",{className:t},wp.element.createElement("span",{className:"kp-icon",style:{width:a.iconSize,height:a.iconSize}},wp.element.createElement(m,{onSelect:function(t){e.onChangePropertyItem("iconMediaId",t.id,n),e.onChangePropertyItem("iconMediaUrl",t.url,n,!0)},value:a.items[n].iconMediaId,render:function(e){return wp.element.createElement("img",{src:a.items[n].iconMediaUrl,style:{cursor:"pointer",position:"relative",zIndex:10},onClick:e.open,role:"presentation",alt:a.items[n].title.replace(/<(?:.|\n)*?>/gm,"")})}})),wp.element.createElement(h,{tagName:"h3",placeholder:__("Title","kenzap-features"),value:a.items[n].title,onChange:function(t){return e.onChangePropertyItem("title",t,n,!0)},style:Object(p.b)(a,0)}),wp.element.createElement(h,{tagName:"p",placeholder:__("Description","kenzap-features"),value:a.items[n].description,onChange:function(t){return e.onChangePropertyItem("description",t,n,!0)},style:Object(p.b)(a,1)}))};return wp.element.createElement("div",null,wp.element.createElement(b,null,wp.element.createElement(k,{title:__("General","kenzap-features"),initialOpen:!1},wp.element.createElement(w,{label:__("Icons size","kenzap-features"),value:a.iconSize,onChange:function(e){return o({iconSize:e})},min:30,max:140})),wp.element.createElement(p.a,u({setAttributes:o,typographyArr:c.typographyArr},a)),wp.element.createElement(l.c,u({setAttributes:o},a,{withPadding:!0,withWidth100:!0,withBackground:!0}))),wp.element.createElement("div",{className:"kenzap "+(n||"")},wp.element.createElement(l.a,{className:"kpi3 "+(r?"selected":"")+" ",style:Object.assign({},s),attributes:a,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container "+g,style:d},"top"==a.nestedBlocks&&wp.element.createElement(f,null),wp.element.createElement("div",{className:"kp-row"},wp.element.createElement("div",{className:"kp-col-3"},y("kp-box align-right",0),y("kp-box align-right",1)),wp.element.createElement("div",{class:"kp-col-6"},wp.element.createElement(m,{onSelect:function(t){e.onChangePropertyItem("iconMediaId",t.id,4),e.onChangePropertyItem("iconMediaUrl",t.url,4,!0)},value:a.items[4].iconMediaId,render:function(e){return wp.element.createElement("img",{src:a.items[4].iconMediaUrl,style:{cursor:"pointer",position:"relative",zIndex:10},onClick:e.open,role:"presentation",alt:a.items[4].title.replace(/<(?:.|\n)*?>/gm,"")})}})),wp.element.createElement("div",{class:"kp-col-3"},y("kp-box",2),y("kp-box",3))),"bottom"==a.nestedBlocks&&wp.element.createElement(f,null)))))}}]),t}(d);t.a=x}]);