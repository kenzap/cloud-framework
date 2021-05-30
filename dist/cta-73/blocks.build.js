!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"typographyArr",function(){return p});var o=n(2),a=(n.n(o),n(3)),r=(n.n(a),n(4)),l=n(1),__=wp.i18n.__,i=wp.blocks.registerBlockType,p=JSON.stringify([{title:__("- Title","kenzap-cta"),"font-size":18,"font-weight":4,"line-height":24,"margin-bottom":0,color:"#23282d"},{title:__("- Text","kenzap-cta"),"font-size":14,"font-weight":4,"line-height":23,"margin-bottom":20,color:"#23282d"},{title:__("- Meta","kenzap-cta"),"font-size":10,"font-weight":5,"line-height":18,"margin-bottom":0,color:"#23282d"},{title:__("- Author","kenzap-cta"),"font-size":10,"font-weight":5,"line-height":20,"text-transform":"A","margin-bottom":0,color:"#23282d"}]);i("kenzap/cta-73",{title:__("Blog with Right Texts","kenzap-blog"),icon:"images-alt",category:"layout",keywords:[__("kenzap cta 73","kenzap-blog"),__("blog Posts","kenzap-blog"),__("News","kenzap-blog")],supports:{align:["full","wide"]},attributes:Object.assign({},l.b,{title:{type:"array",source:"children",selector:"h2"},displayType:{type:"string",default:"kp-horizontal"},columns:{type:"string",default:"4"},ignoreNoImage:{type:"boolean",default:!1},ignoreSticky:{type:"boolean",default:!1},showCategory:{type:"boolean",default:!1},showDate:{type:"boolean",default:!0},showComments:{type:"boolean",default:!1},showTags:{type:"boolean",default:!1},category:{type:"string",default:""},per_page:{type:"number",default:4},mainColor:{type:"string",default:"#007cba"},orderby:{type:"orderby",default:"date/desc"},pagination:{type:"boolean",default:!1},typography:{type:"array",default:[]},t0:{type:"string"},t1:{type:"string"},t2:{type:"string"},t3:{type:"string"},preview:{type:"boolean",default:!1}}),example:{attributes:{preview:!0}},edit:function(e){return e.attributes.preview?wp.element.createElement("img",{src:window.kenzap_cta_path+"cta-73/preview.jpeg"}):wp.element.createElement(r.a,e)},save:function(e){return wp.element.createElement("div",null,wp.element.createElement("p",null,__("Blog Listing 4","kenzap-blog")))}})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return w}),n.d(t,"a",function(){return x});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,i=wp.components,p=i.RangeControl,c=i.CheckboxControl,g=i.SelectControl,u=i.PanelBody,d=i.Button,s=wp.element,m=s.Component,h=s.Fragment,b=wp.editor,y=b.MediaUpload,f=b.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},v=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},x=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,o=void 0===n||n,a=t.backgroundImageId,r=t.backgroundImage,l=(t.backgroundImageF,t.containerMaxWidth),i=t.backgroundColor,s=t.backgroundRepeat,m=t.backgroundPosition,b=(t.alignment,t.setAttributes),w=t.width100,x=t.parallax,C=t.optimize,k=t.withWidth100,E=void 0!==k&&k,P=t.withPadding,T=void 0!==P&&P,z=t.withNested,O=void 0!==z&&z,S=t.containerPadding,_=t.containerSidePadding,I=t.autoPadding,B=void 0===I?"":I,j=t.nestedBlocks,A=void 0===j?"":j;return wp.element.createElement(h,null,o&&wp.element.createElement(u,{title:__("Background"),initialOpen:!1},wp.element.createElement(f,{title:__("Color"),initialOpen:!0,colorSettings:[{value:i,onChange:function(e){return b({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(y,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:a,render:function(t){return wp.element.createElement(h,null,a||"none"!==r?wp.element.createElement(h,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(d,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){b({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(v,null)))}}),"none"!==r&&wp.element.createElement(h,null,wp.element.createElement(g,{label:__("Image style"),value:s,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){b({backgroundStyle:e})}}),wp.element.createElement(g,{label:__("Image position"),value:m,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){b({backgroundPosition:e})}}),wp.element.createElement(c,{label:__("Image parallax"),checked:x,onChange:function(e){b({parallax:e})}}),wp.element.createElement(c,{label:__("Image size optimization"),checked:C,onChange:function(e){b({optimize:e})}}))),wp.element.createElement(u,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(p,{label:__("Max width"),value:Number(l),onChange:function(e){return b({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),E&&wp.element.createElement(c,{label:__("Full width"),checked:w,onChange:function(e){b({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),T&&wp.element.createElement(h,null,wp.element.createElement(p,{label:__("Top and bottom paddings"),value:S,onChange:function(e){return b({containerPadding:e})},min:0,max:200}),wp.element.createElement(p,{label:__("Left and right paddings"),value:_,onChange:function(e){return b({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(c,{label:__("Responsive paddings"),checked:B.length>0,onChange:function(e){b({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),O&&wp.element.createElement(g,{label:__("Nested block"),value:A,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){b({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(m)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n(1),p=n(5),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,u=wp.element.Component,d=wp.editor,s=d.InspectorControls,m=d.PanelColorSettings,h=wp.components,b=h.RangeControl,y=h.CheckboxControl,f=h.ToggleControl,w=h.RadioControl,v=h.PanelBody,x=h.SelectControl,C=h.TextControl,k=wp,E=k.serverSideRender,P=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.attributes,o=e.setAttributes;return o({t0:Object(p.b)(n,0)}),o({t1:Object(p.b)(n,1)}),o({t2:Object(p.b)(n,2)}),wp.element.createElement("div",{className:t},wp.element.createElement(s,c({setAttributes:o},n),wp.element.createElement(v,{title:__("General","kenzap-blog"),initialOpen:!1},wp.element.createElement(C,{label:__("Category","kenzap-blog"),value:n.category,onChange:function(e){return o({category:e})},help:__("Restrict posts by category. To view categories go to Posts > Categories section.","kenzap-blog")}),wp.element.createElement(w,{label:__("Image style","kenzap-blog"),selected:n.displayType,options:[{label:__("Horizontal","kenzap-blog"),value:"kp-horizontal"},{label:__("Square","kenzap-blog"),value:"kp-square"},{label:__("Vertical","kenzap-blog"),value:"kp-vertical"}],onChange:function(e){o({displayType:e})}}),wp.element.createElement(f,{label:__("Hide posts with no image","kenzap-blog"),checked:n.ignoreNoImage,onChange:function(e){return o({ignoreNoImage:e})}}),wp.element.createElement(f,{label:__("Hide sticky posts","kenzap-blog"),checked:n.ignoreSticky,onChange:function(e){return o({ignoreSticky:e})}}),wp.element.createElement(f,{label:__("Show category","kenzap-blog"),checked:n.showCategory,onChange:function(e){return o({showCategory:e})}}),wp.element.createElement(f,{label:__("Show date","kenzap-blog"),checked:n.showDate,onChange:function(e){return o({showDate:e})}}),wp.element.createElement(f,{label:__("Show comments","kenzap-blog"),checked:n.showComments,onChange:function(e){return o({showComments:e})}}),wp.element.createElement(f,{label:__("Show tags","kenzap-blog"),checked:n.showTags,onChange:function(e){return o({showTags:e})}}),wp.element.createElement(x,{label:__("Order by","kenzap-blog"),value:n.orderby,options:[{label:__("Newest to Oldest","kenzap-blog"),value:"date/desc"},{label:__("Oldest to Newest","kenzap-blog"),value:"date/asc"},{label:__("A \u2192 Z","kenzap-blog"),value:"title/asc"},{label:__("Z \u2192 A","kenzap-blog"),value:"title/desc"}],onChange:function(e){o({orderby:e})}}),wp.element.createElement(b,{label:__("Records per page","kenzap-blog"),value:n.per_page,onChange:function(e){return o({per_page:e})},min:1,max:50,help:__("Specify the maximum number of posts to display per page.","kenzap-blog")}),wp.element.createElement(y,{label:__("Pagination","kenzap-blog"),checked:n.pagination,onChange:function(e){return o({pagination:e})},help:__("Preview on frontend only.","kenzap-blog")}),wp.element.createElement(m,{title:__("Highlight color","kenzap-blog"),initialOpen:!1,colorSettings:[{value:n.mainColor,onChange:function(e){return o({mainColor:e})},label:__("Selected","kenzap-blog")}],help:__("Color of pagination and other small details.","kenzap-blog")})),wp.element.createElement(p.a,c({setAttributes:o,typographyArr:l.typographyArr},n)),wp.element.createElement(i.a,c({setAttributes:o},n,{withPadding:!0,withWidth100:!0,withBackground:!0}))),wp.element.createElement(E,{block:"kenzap/cta-73",attributes:{containerMaxWidth:n.containerMaxWidth,containerPadding:n.containerPadding,containerSidePadding:n.containerSidePadding,backgroundColor:n.backgroundColor,backgroundImage:n.backgroundImage,backgroundStyle:n.backgroundStyle,backgroundPosition:n.backgroundPosition,parallax:n.parallax,autoPadding:n.autoPadding,align:n.align,displayType:n.displayType,columns:n.columns,ignoreNoImage:n.ignoreNoImage,ignoreSticky:n.ignoreSticky,showCategory:n.showCategory,showComments:n.showComments,showTags:n.showTags,showDate:n.showDate,category:n.category,per_page:n.per_page,mainColor:n.mainColor,orderby:n.orderby,pagination:n.pagination,t0:n.t0,t1:n.t1,t2:n.t2,t3:n.t3,serverSide:!0}}))}}]),t}(u);t.a=P},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return T}),n.d(t,"a",function(){return z});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),__=wp.i18n.__,c=wp.components,g=c.RangeControl,u=c.PanelBody,d=c.Toolbar,s=c.ToggleControl,m=c.IconButton,h=c.Button,b=wp.element,y=b.Component,f=b.Fragment,w=wp.editor,v=w.PanelColorSettings,x=w.FontSizePicker,C=w.AlignmentToolbar,k=w.MediaUpload,E={},P=function(e,t,n){var o=e.typography[t];if(o){if(E[t]={},o["font-size"]&&(E[t]["font-size"]=o["font-size"]+"px"),o["font-size-t"]>8&&(E[t]["--fst"]=o["font-size-t"]+"px"),o["font-size-m"]>8&&(E[t]["--fsm"]=o["font-size-m"]+"px"),o["text-align"]&&"-"!=o["text-align"]&&(E[t]["text-align"]=o["text-align"]+" "),o["text-transform"]&&"-"!=o["text-transform"]&&(E[t]["text-transform"]="A"==o["text-transform"]?"uppercase":"a"==o["text-transform"]?"capitalize":"lowercase"),o["line-height"]&&(E[t]["line-height"]=Math.round(o["line-height"]/o["font-size"]*100)/100+" "),o["font-weight"]&&(E[t]["font-weight"]=100*o["font-weight"]+" "),o["letter-spacing"]&&(E[t]["letter-spacing"]=(o["letter-spacing"]-100)/10+"px"),o.opacity&&(E[t].opacity=o.opacity/100+" "),o["margin-top"]&&(E[t]["margin-top"]=o["margin-top"]+"px"),o["margin-right"]&&(E[t]["margin-right"]=o["margin-right"]+"px"),o["margin-bottom"]&&(E[t]["margin-bottom"]=o["margin-bottom"]+"px"),o["margin-left"]&&(E[t]["margin-left"]=o["margin-left"]+"px"),o["padding-top"]&&(E[t]["padding-top"]=o["padding-top"]+"px"),o["padding-right"]&&(E[t]["padding-right"]=o["padding-right"]+"px"),o["padding-bottom"]&&(E[t]["padding-bottom"]=o["padding-bottom"]+"px"),o["padding-left"]&&(E[t]["padding-left"]=o["padding-left"]+"px"),o.color&&"-"!=o.color&&(E[t]["--cl"]=o.color+" ",E[t].color=o.color),o["background-color"]&&(E[t]["background-color"]=o["background-color"]),o["text-shadow"]&&"-"!=o["text-shadow"]&&(E[t].filter="drop-shadow("+o["shadow-color"]+" "+parseInt(Math.cos(o["shadow-angle"]*Math.PI/180)*o["shadow-length"])+"px "+parseInt(Math.sin(o["shadow-angle"]*Math.PI/180)*o["shadow-length"])+"px "+o["shadow-blur"]+"px)"),o["border-radius"]&&(E[t]["border-radius"]=o["border-radius"]+"px"),o["border-width"]&&(E[t]["border-width"]=o["border-width"]+"px"),o["border-color"]&&(E[t]["border-color"]=o["border-color"]+" "),o["hover-color"]&&(E[t]["--hcl"]=o["hover-color"]+" "),o["hover-border-color"]&&(E[t]["--hbrcl"]=o["hover-border-color"]+" "),o["hover-background-color"]&&(E[t]["--hbacl"]=o["hover-background-color"]+" "),o["icon-url"]&&"none"!==o["icon-url"]&&(E[t]["--icon"]="url("+o["icon-url"]+")"),o["icon-size"]&&(E[t]["--iconWidth"]=o["icon-size"]+"px",E[t]["--iconHeight"]=o["icon-size"]*o["icon-aspect"]+"px"),o["icon-v"]&&(E[t]["--iconV"]=o["icon-v"]+"px"),o["icon-h"]&&(E[t]["--iconH"]=o["icon-h"]+"px"),n){var a={};return a[n]=E[t][n],a}return E[t]}return{}},T=function(e,t,n){var o=P(e,t),a="";return o&&Object.keys(o).forEach(function(e,t){a+=e+":"+o[e]+";"}),a},z=function(e){function t(){var e,n,o,i;r(this,t);for(var p=arguments.length,c=Array(p),g=0;g<p;g++)c[g]=arguments[g];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.onChangePropertyTypo=function(e,t,n){var r=o.props.typography,l=[];[].concat(a(JSON.parse(o.props.typographyArr))).forEach(function(e,t){l[t]=Object.assign({},e,r[t])}),l[n][e]=t,o.props.setAttributes({typography:l,randomValueT:(new Date).getTime()})},o.iconMeasure=function(e,t){var n=e.target,a=n.offsetHeight/n.offsetWidth;o.onChangePropertyTypo("icon-aspect",a,t)},i=n,l(o,i)}return i(t,e),p(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"editor-textcolor",isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.typographyArr,r=t.typography;return 0===r.length&&(this.props.setAttributes({typography:[].concat(a(JSON.parse(n))),randomValueT:(new Date).getTime()}),this.props.typography=JSON.parse(n)),wp.element.createElement(f,null,wp.element.createElement(u,{title:__("Typography"),initialOpen:!1},r&&r.map(function(t,n){var a,r,l,i,p,c;return wp.element.createElement(u,{title:t.title,initialOpen:!1},wp.element.createElement(x,{value:t["font-size"],onChange:function(t){e.onChangePropertyTypo("font-size",t,n)}}),"title"==t.type&&wp.element.createElement(g,{label:__("Font size tablet"),value:t["font-size-t"],onChange:function(t){e.onChangePropertyTypo("font-size-t",t,n)},min:10,max:100}),"title"==t.type&&wp.element.createElement(g,{label:__("Font size mobile"),value:t["font-size-m"],onChange:function(t){e.onChangePropertyTypo("font-size-m",t,n)},min:10,max:100}),"-"!=t["text-align"]&&wp.element.createElement(f,null,wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Text alignment")),wp.element.createElement(C,{value:t["text-align"],onChange:function(t){e.onChangePropertyTypo("text-align",t,n)}})),wp.element.createElement("p",{style:{paddingBottom:"5px"}},__("Transform")),wp.element.createElement(d,{controls:["A","a","_"].map(function(o){return e.createLevelControl(o,t["text-transform"],function(o){t["text-transform"]==o&&(o=""),e.onChangePropertyTypo("text-transform",o,n)})})}),wp.element.createElement(g,{label:__("Font weight"),value:t["font-weight"],onChange:function(t){e.onChangePropertyTypo("font-weight",t,n)},min:1,max:8}),wp.element.createElement(g,{label:__("Line height"),value:t["line-height"],onChange:function(t){e.onChangePropertyTypo("line-height",t,n)},min:1,max:100}),wp.element.createElement(g,{label:__("Letter spacing"),value:t["letter-spacing"],onChange:function(t){e.onChangePropertyTypo("letter-spacing",t,n)},min:1,max:200}),wp.element.createElement(g,{label:__("Transparency"),value:t.opacity,onChange:function(t){e.onChangePropertyTypo("opacity",t,n)},min:1,max:100}),"-"!=t["text-shadow"]&&wp.element.createElement(s,{label:__("Text shadow"),checked:t["text-shadow"],onChange:function(o){t["shadow-color"]||e.onChangePropertyTypo("shadow-color","#333",n),t["shadow-length"]||e.onChangePropertyTypo("shadow-length",1,n),t["shadow-angle"]||e.onChangePropertyTypo("shadow-angle",0,n),t["shadow-blur"]||e.onChangePropertyTypo("shadow-blur",1,n),e.onChangePropertyTypo("text-shadow",o,n)}}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(g,{label:__("Shadow length"),value:t["shadow-length"],onChange:function(t){e.onChangePropertyTypo("shadow-length",t,n)},min:1,max:25}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(g,{label:__("Shadow angle"),value:t["shadow-angle"],onChange:function(t){e.onChangePropertyTypo("shadow-angle",t,n)},min:0,max:359}),t["text-shadow"]&&"-"!=t["text-shadow"]&&wp.element.createElement(g,{label:__("Shadow blur"),value:t["shadow-blur"],onChange:function(t){e.onChangePropertyTypo("shadow-blur",t,n)},min:0,max:30}),"-"==t.color&&wp.element.createElement(v,{title:__("Colors"),initialOpen:!1,colorSettings:[{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"!=t.type&&"-"!=t.color&&wp.element.createElement(v,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["shadow-color"],onChange:function(t){e.onChangePropertyTypo("shadow-color",t,n)},label:__("Shadow")}]}),"button"==t.type&&wp.element.createElement(g,{label:__("Border radius"),value:t["border-radius"],onChange:function(t){e.onChangePropertyTypo("border-radius",t,n)},min:0,max:100}),"button"==t.type&&wp.element.createElement(g,{label:__("Border width"),value:t["border-width"],onChange:function(t){e.onChangePropertyTypo("border-width",t,n)},min:0,max:10}),1==t.icon&&wp.element.createElement(f,null,wp.element.createElement("p",{style:{marginBottom:"5px"}},"Icon (svg)\xa0"),wp.element.createElement(k,{onSelect:function(t){e.onChangePropertyTypo("icon-url",t.url,n)},value:t["icon-url"],render:function(o){return wp.element.createElement(f,null,"none"!==t["icon-url"]&&t["icon-url"]?wp.element.createElement(f,null,wp.element.createElement(h,{isDefault:!0,onClick:function(){e.onChangePropertyTypo("icon-url","none",n)}},__("Remove")),wp.element.createElement("img",{class:"iconMeasure",onLoad:function(t){return e.iconMeasure(t,n)},style:{margin:"0 0 0px 5px",height:"27px",width:"auto"},src:t["icon-url"]})):wp.element.createElement(h,{isDefault:!0,onClick:o.open,style:{margin:"0 0 8px 0px"}},__("Upload/Choose")))}})),1==t.icon&&"none"!==t["icon-url"]&&t["icon-url"]&&wp.element.createElement(f,null,wp.element.createElement("p",{style:{paddingTop:"20px"}},__("Icon settings")),wp.element.createElement(m,{icon:"arrow-up-alt2",label:"Move up",style:(a={width:"25%","text-align":"center",margin:"0px auto 5px",display:"block"},o(a,"text-align","center"),o(a,"padding","8px 0"),a),onClick:function(){console.log(t["icon-v"]),t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]-=1,n)}}),wp.element.createElement("div",{style:{margin:"0px 0",display:"flex"}},wp.element.createElement(m,{icon:"arrow-left-alt2",label:"Move left",style:{left:"5px",float:"left","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]-=1,n)}}),wp.element.createElement("input",{type:"number",min:"1",value:t["icon-size"],onChange:function(t){e.onChangePropertyTypo("icon-size",t.target.value,n)},style:o({padding:"20px auto",width:"25%",height:"36px","text-align":"center",margin:"0 auto",display:"block"},"text-align","center")}),wp.element.createElement(m,{icon:"arrow-right-alt2",label:"Move right",style:{right:"5px",float:"right","text-align":"center",padding:"8px 0"},onClick:function(){t["icon-h"]||(t["icon-h"]=0),e.onChangePropertyTypo("icon-h",t["icon-h"]+=1,n)}})),wp.element.createElement(m,{icon:"arrow-down-alt2",label:"Move down",style:(r={width:"25%","text-align":"center",margin:"5px auto 0px",display:"block"},o(r,"text-align","center"),o(r,"clear","both"),o(r,"padding","8px 0"),r),onClick:function(){t["icon-v"]||(t["icon-v"]=0),e.onChangePropertyTypo("icon-v",t["icon-v"]+=1,n)}})," "),"button"==t.type&&wp.element.createElement(v,{title:t.title+" "+__("colors"),initialOpen:!1,colorSettings:[{value:t.color,onChange:function(t){e.onChangePropertyTypo("color",t,n)},label:__("Text")},{value:t["background-color"],onChange:function(t){e.onChangePropertyTypo("background-color",t,n)},label:__("Background")},{value:t["border-color"],onChange:function(t){e.onChangePropertyTypo("border-color",t,n)},label:__("Border")}]}),"button"==t.type&&wp.element.createElement(v,{title:t.title+" "+__("hover colors"),initialOpen:!1,colorSettings:[{value:t["hover-color"],onChange:function(t){e.onChangePropertyTypo("hover-color",t,n)},label:__("Text")},{value:t["hover-background-color"],onChange:function(t){e.onChangePropertyTypo("hover-background-color",t,n)},label:__("Background")},{value:t["hover-border-color"],onChange:function(t){e.onChangePropertyTypo("hover-border-color",t,n)},label:__("Border")}]}),wp.element.createElement(u,{title:t.title+" "+__("margins"),initialOpen:!1},wp.element.createElement(f,null,wp.element.createElement("input",{type:"number",value:t["margin-top"],onChange:function(t){e.onChangePropertyTypo("margin-top",t.target.value,n)},style:(l={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(l,"text-align","center"),o(l,"padding","8px 0"),l)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["margin-left"],onChange:function(t){e.onChangePropertyTypo("margin-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["margin-right"],onChange:function(t){e.onChangePropertyTypo("margin-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["margin-bottom"],onChange:function(t){e.onChangePropertyTypo("margin-bottom",t.target.value,n)},style:(i={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(i,"text-align","center"),o(i,"clear","both"),o(i,"padding","8px 0"),i)}))),wp.element.createElement(u,{title:t.title+" "+__("paddings"),initialOpen:!1},wp.element.createElement(f,null,wp.element.createElement("input",{type:"number",value:t["padding-top"],onChange:function(t){e.onChangePropertyTypo("padding-top",t.target.value,n)},style:(p={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(p,"text-align","center"),o(p,"padding","8px 0"),p)}),wp.element.createElement("div",{style:{margin:"10px 0"}},wp.element.createElement("input",{type:"number",value:t["padding-left"],onChange:function(t){e.onChangePropertyTypo("padding-left",t.target.value,n)},style:{width:"25%",float:"left","text-align":"center",padding:"8px 0"}}),wp.element.createElement("input",{type:"number",value:t["padding-right"],onChange:function(t){e.onChangePropertyTypo("padding-right",t.target.value,n)},style:{width:"25%",float:"right","text-align":"center",padding:"8px 0"}})),wp.element.createElement("input",{type:"number",value:t["padding-bottom"],onChange:function(t){e.onChangePropertyTypo("padding-bottom",t.target.value,n)},style:(c={width:"25%","text-align":"center",margin:"0 auto",display:"block"},o(c,"text-align","center"),o(c,"clear","both"),o(c,"padding","8px 0"),c)}))))})))}}]),t}(y)}]);