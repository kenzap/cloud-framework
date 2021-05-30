!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getStyles",function(){return d}),n.d(t,"typographyArr",function(){return s});var o=n(3),a=(n.n(o),n(4)),r=(n.n(a),n(1)),i=n(2),l=n(5),__=wp.i18n.__,c=wp.blocks.registerBlockType,p=wp.editor,u=p.RichText,g=p.InnerBlocks,d=function(e){var t={maxWidth:"100%"===e.containerMaxWidth?"100%":e.containerMaxWidth+"px","--maxWidth":("100%"===e.containerMaxWidth?"100wh":e.containerMaxWidth+" ")+" "};return{vars:{"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px"},kenzapContanerStyles:t}},s=JSON.stringify([{title:__("- Text","kenzap-plugin"),type:"title","font-size":16,"font-size-t":16,"font-size-m":16,"font-weight":4,"line-height":30,"text-align":"left","margin-bottom":20,color:"#23282d"}]);c("kenzap/cta-67",{title:__("Stylish Paragraph","kenzap-plugin"),icon:wp.element.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M5 4v3h5.5v12h3V7H19V4z"}),wp.element.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),category:"layout",keywords:[__("kenzap cta 67","kenzap-plugin"),__("Text lock","kenzap-plugin"),__("Title","kenzap-plugin")],supports:{align:["full","wide"],anchor:!0},html:!0,attributes:Object.assign({},r.d,{title:{type:"string",default:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0},typography:{type:"array",default:[]},t0:{type:"string"},preview:{type:"boolean",default:!1}}),example:{attributes:{preview:!0}},edit:function(e){return e.attributes.preview?wp.element.createElement("img",{src:window.kenzap_cta_path+"cta-67/preview.jpeg"}):wp.element.createElement(l.a,e)},save:function(e){var t=e.className,n=e.attributes,o=d(e.attributes),a=o.vars,l=o.kenzapContanerStyles;return wp.element.createElement("div",{id:n.anchor,className:t||"",style:a},wp.element.createElement(r.b,{className:"kpp-1 block-"+n.blockUniqId,attributes:n,style:a,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-tcont",style:Object.assign({},l,Object(i.b)(n,0,"text-align"))},"top"==n.nestedBlocks&&wp.element.createElement(g.Content,null),wp.element.createElement(u.Content,{className:"kp-h",tagName:"p",value:n.title,style:Object(i.b)(n,0)}),"bottom"==n.nestedBlocks&&wp.element.createElement(g.Content,null))))}})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"c",function(){return k}),n.d(t,"a",function(){return x}),n.d(t,"b",function(){return C});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,l=wp.components,c=l.RangeControl,p=l.CheckboxControl,u=l.SelectControl,g=l.PanelBody,d=l.Button,s=wp.element,m=s.Component,h=s.Fragment,b=wp.editor,f=b.MediaUpload,y=b.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},v=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},k=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,o=void 0===n||n,a=t.backgroundImageId,r=t.backgroundImage,i=(t.backgroundImageF,t.containerMaxWidth),l=t.backgroundColor,s=t.backgroundRepeat,m=t.backgroundPosition,b=(t.alignment,t.setAttributes),w=t.width100,k=t.parallax,x=t.optimize,C=t.withWidth100,E=void 0!==C&&C,P=t.withPadding,T=void 0!==P&&P,z=t.withNested,O=void 0!==z&&z,S=t.containerPadding,I=t.containerSidePadding,B=t.autoPadding,_=void 0===B?"":B,j=t.nestedBlocks,M=void 0===j?"":j;return wp.element.createElement(h,null,o&&wp.element.createElement(g,{title:__("Background"),initialOpen:!1},wp.element.createElement(y,{title:__("Color"),initialOpen:!0,colorSettings:[{value:l,onChange:function(e){return b({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(f,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:a,render:function(t){return wp.element.createElement(h,null,a||"none"!==r?wp.element.createElement(h,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(d,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){b({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(v,null)))}}),"none"!==r&&wp.element.createElement(h,null,wp.element.createElement(u,{label:__("Image style"),value:s,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){b({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:m,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){b({backgroundPosition:e})}}),wp.element.createElement(p,{label:__("Image parallax"),checked:k,onChange:function(e){b({parallax:e})}}),wp.element.createElement(p,{label:__("Image size optimization"),checked:x,onChange:function(e){b({optimize:e})}}))),wp.element.createElement(g,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(i),onChange:function(e){return b({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(p,{label:__("Full width"),checked:w,onChange:function(e){b({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),T&&wp.element.createElement(h,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:S,onChange:function(e){return b({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:I,onChange:function(e){return b({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(p,{label:__("Responsive paddings"),checked:_.length>0,onChange:function(e){b({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),O&&wp.element.createElement(u,{label:__("Nested block"),value:M,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){b({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(m),x=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},C=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return P}),n.d(t,"a",function(){return T});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,p=wp.components,u=p.RangeControl,g=p.PanelBody,d=p.Toolbar,s=p.ToggleControl,m=p.IconButton,h=p.Button,b=wp.element,f=b.Component,y=b.Fragment,w=wp.editor,v=w.PanelColorSettings,k=w.FontSizePicker,x=w.AlignmentToolbar,C=w.MediaUpload,E={},P=function(e,t,n){var o=e.typography[t];if(o){if(E[t]={},o["font-size"]&&(E[t]["font-size"]=o["font-size"]+"px"),o["font-size-t"]>8&&(E[t]["--fst"]=o["font-size-t"]+"px"),o["font-size-m"]>8&&(E[t]["--fsm"]=o["font-size-m"]+"px"),o["text-align"]&&"-"!=o["text-align"]&&(E[t]["text-align"]=o["text-align"]+" "),o["text-transform"]&&"-"!=o["text-transform"]&&(E[t]["text-transform"]="A"==o["text-transform"]?"uppercase":"a"==o["text-transform"]?"capitalize":"lowercase"),o["line-height"]&&(E[t]["line-height"]=Math.round(o["line-height"]/o["font-size"]*100)/100+" "),o["font-weight"]&&(E[t]["font-weight"]=100*o["font-weight"]+" "),o["letter-spacing"]&&(E[t]["letter-spacing"]=(o["letter-spacing"]-100)/10+"px"),o.opacity&&(E[t].opacity=o.opacity/100+" "),o["margin-top"]&&(E[t]["margin-top"]=o["margin-top"]+"px"),o["margin-right"]&&(E[t]["margin-right"]=o["margin-right"]+"px"),o["margin-bottom"]&&(E[t]["margin-bottom"]=o["margin-bottom"]+"px"),o["margin-left"]&&(E[t]["margin-left"]=o["margin-left"]+"px"),o["padding-top"]&&(E[t]["padding-top"]=o["padding-top"]+"px"),o["padding-right"]&&(E[t]["padding-right"]=o["padding-right"]+"px"),o["padding-bottom"]&&(E[t]["padding-bottom"]=o["padding-bottom"]+"px"),o["padding-left"]&&(E[t]["padding-left"]=o["padding-left"]+"px"),o.color&&"-"!=o.color&&(E[t]["--cl"]=o.color+" ",E[t].color=o.color),o["background-color"]&&(E[t]["background-color"]=o["background-color"]),o["text-shadow"]&&"-"!=o["text-shadow"]&&(E[t].filter="drop-shadow("+o["shadow-color"]+" "+parseInt(Math.cos(o["shadow-angle"]*Math.PI/180)*o["shadow-length"])+"px "+parseInt(Math.sin(o["shadow-angle"]*Math.PI/180)*o["shadow-length"])+"px "+o["shadow-blur"]+"px)"),o["border-radius"]&&(E[t]["border-radius"]=o["border-radius"]+"px"),o["border-width"]&&(E[t]["border-width"]=o["border-width"]+"px"),o["border-color"]&&(E[t]["border-color"]=o["border-color"]+" "),o["hover-color"]&&(E[t]["--hcl"]=o["hover-color"]+" "),o["hover-border-color"]&&(E[t]["--hbrcl"]=o["hover-border-color"]+" "),o["hover-background-color"]&&(E[t]["--hbacl"]=o["hover-background-color"]+" "),o["icon-url"]&&"none"!==o["icon-url"]&&(E[t]["--icon"]="url("+o["icon-url"]+")"),o["icon-size"]&&(E[t]["--iconWidth"]=o["icon-size"]+"px",E[t]["--iconHeight"]=o["icon-size"]*o["icon-aspect"]+"px"),o["icon-v"]&&(E[t]["--iconV"]=o["icon-v"]+"px"),o["icon-h"]&&(E[t]["--iconH"]=o["icon-h"]+"px"),n){var a={};return a[n]=E[t][n],a}return E[t]}return{}},T=function(e){function t(){var e,n,o,l;r(this,t);for(var c=arguments.length,p=Array(c),u=0;u<c;u++)p[u]=arguments[u];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),o.onChangePropertyTypo=function(e,t,n){var r=o.props.typography,i=[];[].concat(a(JSON.parse(o.props.typographyArr))).forEach(function(e,t){i[t]=Object.assign({},e,r[t])}),i[n][e]=t,o.props.setAttributes({typography:i,randomValueT:(new Date).getTime()})},o.iconMeasure=function(e,t){var n=e.target,a=n.offsetHeight/n.offsetWidth;o.onChangePropertyTypo("icon-aspect",a,t)},l=n,i(o,l)}return l(t,e),c(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(a(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(y,null,wp.element.createElement(g,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var a,r,i,l,c,p;return wp.element.createElement(g,{title:t.title,initialOpen:!1},wp.element.createElement(k,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(u,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(x,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(d,{controls:["A","a","_"].map(function(o){return e.createLevelControl(o,t["text-transform"],function(o){t["text-transform"]==o&&(o=""),e.onChangePropertyTypo("text-transform",o,n)})})}),wp.element.createElement(u,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(u,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(u,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(u,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(s,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(o){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",o,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(u,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(v,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(v,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(u,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(u,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(C,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(o){return wp.element.createElement(y,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(y,null,wp.element.createElement(h,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(h,{isDefault:!0,onClick:o.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(y,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(m,{icon:"arrow-up-alt2",label:"Move up",style:(a={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},o(a,"text-align","center"),o(a,"padding","8px 0"),a),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(m,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:o({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(m,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(m,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},o(r,"text-align","center"),o(r,"clear","both"),o(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(v,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(v,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(g,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(i,"text-align","center"),o(i,"padding","8px 0"),i)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(l,"text-align","center"),o(l,"clear","both"),o(l,"padding","8px 0"),l)}))),wp.element.createElement(g,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(c,"text-align","center"),o(c,"padding","8px 0"),c)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(p,"text-align","center"),o(p,"clear","both"),o(p,"padding","8px 0"),p)}))))})))}}]),t}(f)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n(1),c=n(2),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,g=wp.element.Component,d=wp.editor,s=d.RichText,m=d.InspectorControls,h=d.InnerBlocks,b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.attributes,o=e.setAttributes,a=e.isSelected,r=Object(i.getStyles)(n),u=r.vars,g=r.kenzapContanerStyles;return wp.element.createElement("div",null,wp.element.createElement(m,null,wp.element.createElement(c.a,p({setAttributes:o,typographyArr:i.typographyArr},n)),wp.element.createElement(l.c,p({setAttributes:o},n,{withNested:!0,withPadding:!0,withWidth100:!0,withBackground:!0,withAutoPadding:!0}))),wp.element.createElement("div",{id:n.anchor,className:t||"",style:u},wp.element.createElement(l.a,{className:"kpp-1 block-"+n.blockUniqId+" "+(a?"selected":"")+" ",attributes:n,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-tcont",style:Object.assign({},g,Object(c.b)(n,0,"text-align"))},"top"==n.nestedBlocks&&wp.element.createElement(h,null),wp.element.createElement(s,{className:"kp-h",tagName:"p",placeholder:__("Type text..","kenzap-plugin"),value:n.title,onChange:function(e){return o({title:e})},style:Object(c.b)(n,0)}),"bottom"==n.nestedBlocks&&wp.element.createElement(h,null)))))}}]),t}(g);t.a=b}]);