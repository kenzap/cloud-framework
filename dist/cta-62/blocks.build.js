!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"defaultItem",function(){return u}),n.d(t,"defaultSubBlocks",function(){return p}),n.d(t,"getStyles",function(){return d});var r=n(2),i=(n.n(r),n(3)),o=(n.n(i),n(4)),l=n(5),c=n(1),__=wp.i18n.__,s=wp.blocks.registerBlockType,u={title:__("Kenzap brands blocks","kenzap-brands"),iconMediaId:"",iconMediaUrl:window.kenzap_cta_path+"images/client-7.png",ilv:!1,link:"",linknew:!1},p=JSON.stringify([Object.assign({},u,{key:"default1",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-1.png"}),Object.assign({},u,{key:"default2",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-2.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-3.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-4.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-5.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-6.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-7.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-8.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-9.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-10.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-11.png"}),Object.assign({},u,{key:"default3",link:"#",iconMediaUrl:window.kenzap_cta_path+"images/client-12.png"})]),d=function(e){return{vars:{"--paddings":""+e.containerPadding,"--paddings2":e.containerSidePadding+"px"},kenzapContanerStyles:{maxWidth:"100%"===e.containerMaxWidth?"100%":e.containerMaxWidth+"px","--maxWidth":("100%"===e.containerMaxWidth?"100wh":e.containerMaxWidth+" ")+" "}}};s("kenzap/cta-62",{title:__("Brands Grid Block","kenzap-brands"),icon:"shield",category:"layout",keywords:[__("kenzap cta 62","kenzap-brands"),__("clients","kenzap-brands"),__("companies","kenzap-brands")],anchor:!0,html:!0,supports:{align:["full","wide"]},attributes:Object.assign({},c.d,{align:{type:"string",default:"full"},iconSize:{type:"number",default:165},iconSpace:{type:"number",default:0},items:{type:"array",default:[]},isFirstLoad:{type:"boolean",default:!0},blockUniqId:{type:"number",default:0},preview:{type:"boolean",default:!1}}),example:{attributes:{preview:!0}},edit:function(e){return e.attributes.preview?wp.element.createElement("img",{src:window.kenzap_cta_path+"cta-62/preview.jpeg"}):(0===e.attributes.items.length&&e.attributes.isFirstLoad&&(e.setAttributes({items:[].concat(a(JSON.parse(p))),isFirstLoad:!1}),e.attributes.items=JSON.parse(p),e.attributes.blockUniqId||e.setAttributes({blockUniqId:(new Date).getTime()})),wp.element.createElement(o.a,e))},save:function(e){return wp.element.createElement(l.a,e)}})},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"d",function(){return w}),n.d(t,"c",function(){return v}),n.d(t,"a",function(){return E}),n.d(t,"b",function(){return z});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,l=wp.components,c=l.RangeControl,s=l.CheckboxControl,u=l.SelectControl,p=l.PanelBody,d=l.Button,m=wp.element,b=m.Component,g=m.Fragment,f=wp.editor,k=f.MediaUpload,h=f.PanelColorSettings,w={containerMaxWidth:{type:"string",default:"2000"},containerPadding:{type:"number",default:0},containerSidePadding:{type:"number",default:0},withPadding:{type:"boolean",default:!1},autoPadding:{type:"string",default:""},withAutoPadding:{type:"boolean",default:!1},width100:{type:"boolean",default:!1},parallax:{type:"boolean",default:!1},optimize:{type:"boolean",default:!0},backgroundColor:{type:"string"},backgroundImage:{type:"string",default:"none"},backgroundImageF:{type:"string",default:"none"},backgroundImageId:{type:"string",default:""},backgroundStyle:{type:"string",default:""},backgroundPosition:{type:"string",default:"center center"},alignment:{type:"string",default:""},nestedBlocks:{type:"string",default:""},uniqueID:{type:"string"}},y=function(){return wp.element.createElement("div",{style:{width:"100%","background-color":"#EBEBEB"}},wp.element.createElement("div",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicons dashicons-format-image",style:{cursor:"pointer","font-size":"60px",width:"240px",height:"120px",overflow:"visible","padding-top":"30px","padding-bottom":"30px","background-color":"#EBEBEB",color:"#fff"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}))},v=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.withBackground,a=void 0===n||n,r=t.backgroundImageId,i=t.backgroundImage,o=(t.backgroundImageF,t.containerMaxWidth),l=t.backgroundColor,m=t.backgroundRepeat,b=t.backgroundPosition,f=(t.alignment,t.setAttributes),w=t.width100,v=t.parallax,E=t.optimize,z=t.withWidth100,I=void 0!==z&&z,x=t.withPadding,_=void 0!==x&&x,P=t.withNested,C=void 0!==P&&P,O=t.containerPadding,S=t.containerSidePadding,j=t.autoPadding,M=void 0===j?"":j,A=t.nestedBlocks,B=void 0===A?"":A;return wp.element.createElement(g,null,a&&wp.element.createElement(p,{title:__("Background"),initialOpen:!1},wp.element.createElement(h,{title:__("Color"),initialOpen:!0,colorSettings:[{value:l,onChange:function(e){return f({backgroundColor:e})},label:__("Selected")}]}),wp.element.createElement("p",{style:{marginBottom:"5px"}},__("Image")),wp.element.createElement(k,{onSelect:function(t){var n=t.sizes.kp_banner?t.sizes.kp_banner.url:t.url;e.props.setAttributes({backgroundImage:n,backgroundImageF:t.url,backgroundImageId:t.id})},value:r,render:function(t){return wp.element.createElement(g,null,r||"none"!==i?wp.element.createElement(g,null,wp.element.createElement("div",{style:{width:"100%",height:"120px",margin:"0 0 8px 0px",backgroundImage:"url("+[e.props.backgroundImage?e.props.backgroundImage:""]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer"},onClick:t.open}),wp.element.createElement(d,{style:{margin:"0 0 24px 0px"},isDefault:!0,onClick:function(){f({backgroundImageId:"",backgroundImage:"none"})}},__("Remove"))):wp.element.createElement("span",{onClick:t.open},wp.element.createElement(y,null)))}}),"none"!==i&&wp.element.createElement(g,null,wp.element.createElement(u,{label:__("Image style"),value:m,options:[{label:__("default"),value:"default"},{label:__("contain"),value:"contain"},{label:__("cover"),value:"cover"},{label:__("repeated"),value:"repeat"}],onChange:function(e){f({backgroundStyle:e})}}),wp.element.createElement(u,{label:__("Image position"),value:b,options:[{label:__("left top"),value:"left top"},{label:__("left center"),value:"left center"},{label:__("left bottom"),value:"left bottom"},{label:__("right top"),value:"right top"},{label:__("right center"),value:"right center"},{label:__("right bottom"),value:"right bottom"},{label:__("center top"),value:"center top"},{label:__("center center"),value:"center center"},{label:__("center bottom"),value:"center bottom"}],onChange:function(e){f({backgroundPosition:e})}}),wp.element.createElement(s,{label:__("Image parallax"),checked:v,onChange:function(e){f({parallax:e})}}),wp.element.createElement(s,{label:__("Image size optimization"),checked:E,onChange:function(e){f({optimize:e})}}))),wp.element.createElement(p,{title:__("Container"),initialOpen:!1},!w&&wp.element.createElement(c,{label:__("Max width"),value:Number(o),onChange:function(e){return f({containerMaxWidth:""+e})},min:300,max:2e3,help:__("Restrict layout width for content children.")}),I&&wp.element.createElement(s,{label:__("Full width"),checked:w,onChange:function(e){f({width100:e,containerMaxWidth:e?"100%":"2000"})},help:__("Ignore max width restriction.")}),_&&wp.element.createElement(g,null,wp.element.createElement(c,{label:__("Top and bottom paddings"),value:O,onChange:function(e){return f({containerPadding:e})},min:0,max:200}),wp.element.createElement(c,{label:__("Left and right paddings"),value:S,onChange:function(e){return f({containerSidePadding:e})},min:0,max:50}),wp.element.createElement(s,{label:__("Responsive paddings"),checked:M.length>0,onChange:function(e){f({autoPadding:e?"autoPadding":""})},help:__("Auto calculate top and bottom paddings.")})),C&&wp.element.createElement(u,{label:__("Nested block"),value:B,options:[{label:__("hidden"),value:""},{label:__("top"),value:"top"},{label:__("bottom"),value:"bottom"}],onChange:function(e){f({nestedBlocks:e})},help:__("Embed other blocks inside this container. Nested blocks inherit parent block styling settings. Add custom headings, spacings or paragraphs.")})))}}]),t}(b),E=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)},z=function(e){var t={};switch(e.withBackground&&(e.attributes.backgroundImage&&(e.attributes.optimize?t.backgroundImage="none"!==e.attributes.backgroundImage?"url("+e.attributes.backgroundImage+")":"none":t.backgroundImage="none"!==e.attributes.backgroundImageF?"url("+e.attributes.backgroundImageF+")":"none",t.backgroundRepeat=e.attributes.backgroundRepeat,t.backgroundSize=e.attributes.backgroundSize,t.backgroundPosition=e.attributes.backgroundPosition),e.attributes.backgroundColor&&(t.backgroundColor=e.attributes.backgroundColor)),e.withPadding&&!e.attributes.autoPadding&&(t.padding=e.attributes.containerPadding+"px 0px"),e.attributes.parallax&&(t.backgroundAttachment="fixed"),e.attributes.backgroundStyle){case"default":t.backgroundRepeat="no-repeat",t.backgroundSize="auto";break;case"contain":t.backgroundRepeat="no-repeat",t.backgroundSize="contain";break;case"cover":t.backgroundRepeat="no-repeat",t.backgroundSize="cover";break;case"repeat":t.backgroundRepeat="repeat",t.backgroundSize="auto"}var n="kenzap-lg";return e.attributes.containerMaxWidth<992&&(n="kenzap-md"),e.attributes.containerMaxWidth<768&&(n="kenzap-sm"),e.attributes.containerMaxWidth<480&&(n="kenzap-xs"),e.attributes.width100&&(n="kenzap-lg"),wp.element.createElement("div",{className:e.className+" "+n+" "+e.attributes.alignment+" "+e.attributes.autoPadding,style:Object.assign({},t,e.style)},e.children)}},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n(1),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),__=wp.i18n.__,p=wp.element.Component,d=wp.editor,m=d.MediaUpload,b=d.InspectorControls,g=wp.components,f=g.RangeControl,k=g.PanelBody,h=g.Popover,w=g.TextControl,y=g.ToggleControl,v=0,E=function(e){function t(){var e,n,o,c;r(this,t);for(var s=arguments.length,u=Array(s),p=0;p<s;p++)u[p]=arguments[p];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={activeSubBlock:-1},o.addItem=function(){v++,o.props.setAttributes({items:[].concat(a(o.props.attributes.items),[Object.assign({},l.defaultItem,{title:l.defaultItem.title+" "+v,key:"new "+(new Date).getTime()})])})},o.onChangePropertyItem=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r?[].concat(a(o.props.attributes.items)):o.props.attributes.items;i[n]&&"string"===typeof i[n][e]&&(i[n][e]=t,o.props.setAttributes({items:i}))},o.onStatePropertyItem=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n?[].concat(a(o.props.attributes.items)):o.props.attributes.items;r[t]&&"string"===typeof r[t][e]&&(r[t][e]?r[t][e]=!1:r[t][e]=!0,o.props.setAttributes({items:r}))},o.removeItem=function(e){var t=[].concat(a(o.props.attributes.items));1===t.length?o.props.setAttributes({items:[l.defaultItem]}):(t.splice(e,1),o.props.setAttributes({items:t}))},o.addLink=function(e){var t=[].concat(a(o.props.attributes.items));t[e].ilv||(t[e].ilv=!0,o.props.setAttributes({items:t}))},o.closeLink=function(e){var t=[].concat(a(o.props.attributes.items));t[e].ilv=!1;for(var n=0;n<t.length;n++)t[e].ilv=!1;o.props.setAttributes({items:t})},c=n,i(o,c)}return o(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.attributes,r=t.setAttributes,i=t.isSelected,o=Object(l.getStyles)(a),u=o.vars,p=o.kenzapContanerStyles;return wp.element.createElement("div",null,wp.element.createElement(b,null,wp.element.createElement(k,{title:__("General","kenzap-pricing"),initialOpen:!1},wp.element.createElement(f,{label:__("Image size","kenzap-pricing"),value:a.iconSize,onChange:function(e){return r({iconSize:e})},min:50,max:250})),wp.element.createElement(c.c,s({setAttributes:r},a,{withPadding:!0,withWidth100:!0,withBackground:!0}))),wp.element.createElement("div",{className:n||""},wp.element.createElement(c.a,{className:"kcl1 block-"+a.blockUniqId+" "+(i?"selected":"")+" ",attributes:a,style:Object.assign({},u),withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container kenzap-sm",style:p},wp.element.createElement("ul",null,a.items&&a.items.map(function(t,n){return wp.element.createElement("li",null,wp.element.createElement("button",{className:"remove",onClick:function(){return e.removeItem(n)}},wp.element.createElement("i",{className:"dashicons dashicons-no"})),wp.element.createElement("a",null,wp.element.createElement("button",{className:"link",onClick:function(){return e.addLink(n)}},wp.element.createElement("i",{className:"dashicons dashicons-admin-links"})),t.ilv&&wp.element.createElement(h,{className:"link-popover"},wp.element.createElement(w,{label:__("Specify Link"),placeholder:__("http://www.example.com"),value:t.link,className:"link-text",onChange:function(t){e.onChangePropertyItem("link",t,n,!0)}}),wp.element.createElement(y,{label:__("Settings"),help:__(a.items[n].linknew?"Open link in new window.":"Open link in current window"),checked:a.items[n].linknew,onChange:function(t){a.items[n].linknew?(a.items[n].linknew=!1,e.onChangePropertyItem("linknew",!1,n,!0)):(a.items[n].linknew=!0,e.onChangePropertyItem("linknew",!0,n,!0)),e.closeLink(n),e.addLink(n)}}),wp.element.createElement("button",{className:"link-close button button-large",onClick:function(){e.closeLink(n)}},__("Save & Close"))),wp.element.createElement(m,{onSelect:function(t){e.onChangePropertyItem("iconMediaId",t.id,n),e.onChangePropertyItem("iconMediaUrl",t.url,n,!0),e.onChangePropertyItem("title",t.title,n,!0)},value:t.iconMediaId,allowedTypes:["image","image/svg"],render:function(e){return wp.element.createElement("img",{src:(t.iconMediaUrl,t.iconMediaUrl),alt:t.title.replace(/<(?:.|\n)*?>/gm,""),style:{cursor:"pointer",position:"relative",width:a.iconSize+"px"},onClick:e.open,role:"presentation"})}})))}))),wp.element.createElement("div",{className:"editPadding"}),wp.element.createElement("button",{className:"addWhite",onClick:this.addItem},wp.element.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",class:"dashicon dashicons-insert",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},wp.element.createElement("path",{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),wp.element.createElement("span",{className:""}),__("Add new brand")))))}}]),t}(p);t.a=E},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n(1),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=(wp.i18n.__,wp.element.Component),p=0,d=function(e){function t(){var e,n,o,c;r(this,t);for(var s=arguments.length,u=Array(s),d=0;d<s;d++)u[d]=arguments[d];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={activeSubBlock:-1},o.addItem=function(){p++,o.props.setAttributes({items:[].concat(a(o.props.attributes.items),[Object.assign({},l.defaultItem,{title:l.defaultItem.title+" "+p,key:"new "+(new Date).getTime()})])}),setTimeout(function(){var e=document.querySelector(".owl-carousel");e.scrollLeft=e.scrollWidth})},o.onChangePropertyItem=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r?[].concat(a(o.props.attributes.items)):o.props.attributes.items;i[n]&&"string"===typeof i[n][e]&&(i[n][e]=t,o.props.setAttributes({items:i}))},o.setActiveSubBlock=function(e){o.state.activeSubBlock!==e&&o.setState({activeSubBlock:e})},o.mediaQueries=function(e){return e<480?"kenzap-xs":e<768?"kenzap-sm":e<992?"kenzap-md":""},o.removeItem=function(e){var t=[].concat(a(o.props.attributes.items));1===t.length?o.props.setAttributes({items:[l.defaultItem]}):(t.splice(e,1),o.props.setAttributes({items:t}))},c=n,i(o,c)}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.attributes,a=Object(l.getStyles)(n),r=a.vars,i=a.kenzapContanerStyles;return wp.element.createElement("div",{className:t||""},wp.element.createElement(c.b,{className:"kcl1 block-"+n.blockUniqId,attributes:n,style:r,withBackground:!0,withPadding:!0},wp.element.createElement("div",{className:"kenzap-container "+this.mediaQueries(n.containerMaxWidth)+" ",style:i},wp.element.createElement("ul",null,n.items&&n.items.map(function(e,t){return wp.element.createElement("li",null,wp.element.createElement("a",{href:e.link?e.link:"javascript:;",target:e.linknew?"_blank":"_self",rel:"noopener noreferrer"},wp.element.createElement("img",{src:(e.iconMediaUrl,e.iconMediaUrl),alt:e.title.replace(/<(?:.|\n)*?>/gm,""),style:{cursor:"pointer",position:"relative",width:n.iconSize+"px"},role:"presentation"})))})))))}}]),t}(u);t.a=d}]);