(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1TsT":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("V+eJ"),n("2Spj"),n("8+KV"),n("HAE/");var o=!("undefined"==typeof window||!window.document||!window.document.createElement);var r=void 0;function l(){return void 0===r&&(r=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(r){}return e}()),r}function a(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function i(e){this.target=e,this.events={}}i.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},i.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},i.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);a(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var l=!0;return function(){if(l){l=!1,a(r);var i=r.nextHandlers.indexOf(t);r.nextHandlers.splice(i,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};function s(e,t,n,o){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new i(e));var r=function(e){if(e)return l()?e:!!e.capture}(o);return e.__consolidated_events_handlers__.add(t,n,r)}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+o?(clearTimeout(n),n=setTimeout((function(){t=r,e()}),o)):(t=r,e())}};t.default=o},ILy0:function(e,t,n){e.exports=n.p+"static/pic01-b9959e167f94349be29be7284e7b9112.jpg"},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),l=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||l(e)||a()}},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("Wbzz"),r=n("q1tI"),l=n.n(r),a=n("TJpk"),i=n.n(a),s=n("uuth"),c=n("ILy0"),u=n.n(c),f=n("9dAG"),p=n.n(f),m=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement("span",{className:"logo"},l.a.createElement("img",{src:p.a,alt:"Big R"})))},d=n("Bl7J"),h=n("YIkO"),v=n.n(h),y=n("dwco"),E=n.n(y);var b=function(e){return e.children},w=function(e){var t,n;function o(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.componentDidMount=function(){E.a.polyfill()},r.handleClick=function(e){e.preventDefault();var t=0,n=!0,o=this.props,r=o.type,l=o.element,a=o.offset,i=o.timeout;if(r&&l)switch(r){case"class":n=!!(t=document.getElementsByClassName(l)[0]);break;case"id":n=!!(t=document.getElementById(l))}n?this.scrollTo(t,a,i):console.log("Element not found: "+l)},r.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),n):window.scroll({top:o+t,left:0,behavior:"smooth"})},r.render=function(){return l.a.createElement(b,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},o}(l.a.Component),g=function(e){return l.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},l.a.createElement("section",{className:"left hide-when-small"},l.a.createElement("a",{href:"/",className:"small image"},l.a.createElement("img",{href:"/",src:p.a}))),l.a.createElement(v.a,{className:"hide-when-small",items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},l.a.createElement("li",null,l.a.createElement(w,{type:"id",element:"intro"},l.a.createElement("a",{href:"#"},"Introduction"))),l.a.createElement("li",null,l.a.createElement(w,{type:"id",element:"first"},l.a.createElement("a",{href:"#"},"Skills"))),l.a.createElement("li",null,l.a.createElement(w,{type:"id",element:"second"},l.a.createElement("a",{href:"#"},"Gallery"))),l.a.createElement("li",null,l.a.createElement(w,{type:"id",element:"cta"},l.a.createElement("a",{href:"#"},"IDK yet")))),l.a.createElement("section",{className:"right"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"highlight",href:"/Say-Hello"},"Say Hello")))))},S=function(e){return l.a.createElement("section",{id:"techical-skills",className:"main special"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",{className:" "}," Technical Skills")),l.a.createElement("ul",{className:"features"},l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("span",{className:"icon major style3 fa-code"}),l.a.createElement("h2",null,"Languages"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"Java")))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("span",{className:"icon major style1 fa-rocket"}),l.a.createElement("h2",{className:""},"Libs and Works"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"React/Redux"),l.a.createElement("li",null,".Net Core"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"Less/SASS"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"Gatsby"),l.a.createElement("li",null,"GraphQL"),l.a.createElement("li",null,"GraphiQL")))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("span",{className:"icon major style5 fa-wrench"}),l.a.createElement("h2",null,"Box of Tools"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,"ServiceNow"),l.a.createElement("li",null,"Confluence"),l.a.createElement("li",null,"Jira"),l.a.createElement("li",null,"SharePoint"),l.a.createElement("li",null,"Version Control"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"NPM"),l.a.createElement("li",null,"Putty/ssh"),l.a.createElement("li",null,"Linux/Bash"))))))};var _=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._handleWaypointEnter=function(){n.setState((function(){return{stickyNav:!1}}))},n._handleWaypointLeave=function(){n.setState((function(){return{stickyNav:!0}}))},n.state={stickyNav:!1},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return l.a.createElement(d.a,null,l.a.createElement(i.a,{title:"RyanJMorris11 Home"}),l.a.createElement(m,null),l.a.createElement(s.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),l.a.createElement(g,{sticky:this.state.stickyNav}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"intro",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Hello and nice to meet you.")),l.a.createElement("p",null,"I'm Ryan. ",l.a.createElement("br",null),'I\'m dedicated to exploring the possibilities and hand crafting exciting new solutions to problems. Nowadays, "Good enough" is hardly ',l.a.createElement("i",null,"good enough"),". Software is a dime a dozen, and the user's patience with clunky and bland software solutions is at an all time low. My most recent boss and mentor always appreciated my ability to question the status quo and imagine more ideal and empathetic solutions. Such as the time I..."," ",l.a.createElement("br",null)," Umm.. ",l.a.createElement("br",null)," Hmm... ",l.a.createElement("br",null),"Just Give me a minute will ya? ",l.a.createElement("br",null),l.a.createElement("b",null,"Writing about one's self is hard!")," ",l.a.createElement("br",null),"But, come check out my stuff! ",l.a.createElement("br",null),l.a.createElement("br",null),"OK, give me a minute for that too."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/Resume",className:"button"},"Resume")))),l.a.createElement("span",{className:"image"},l.a.createElement("img",{src:u.a,alt:""})))),l.a.createElement(S,null),l.a.createElement("section",{id:"second",className:"main special"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Gallery"),l.a.createElement("p",null,"Behold! My stuff ",l.a.createElement("br",null),"I'm particularly fond of these.")),l.a.createElement("ul",{className:"statistics"},l.a.createElement("li",{className:"style1"},l.a.createElement("span",{className:"icon fa-code-fork"}),l.a.createElement("strong",null,"5,120")," Etiam"),l.a.createElement("li",{className:"style2"},l.a.createElement("span",{className:"icon fa-folder-open-o"}),l.a.createElement("strong",null,"8,192")," Magna"),l.a.createElement("li",{className:"style3"},l.a.createElement("span",{className:"icon fa-signal"}),l.a.createElement("strong",null,"2,048")," Tempus"),l.a.createElement("li",{className:"style4"},l.a.createElement("span",{className:"icon fa-laptop"}),l.a.createElement("strong",null,"4,096")," Aliquam"),l.a.createElement("li",{className:"style5"},l.a.createElement("span",{className:"icon fa-diamond"}),l.a.createElement("strong",null,"1,024")," Nullam")),l.a.createElement("p",{className:"content"},"Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia."),l.a.createElement("footer",{className:"major"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/generic",className:"button"},"Learn More"))))),l.a.createElement("section",{id:"cta",className:"main special"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Congue imperdiet"),l.a.createElement("p",null,"Donec imperdiet consequat consequat. Suspendisse feugiat congue",l.a.createElement("br",null),"posuere. Nulla massa urna, fermentum eget quam aliquet.")),l.a.createElement("footer",{className:"major"},l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/Resume",className:"button special"},"Resume")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/Reach-Out",className:"button"},"Reach Out")))))))},r}(l.a.Component);t.default=_},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},TSYQ:function(e,t,n){var o;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===l)for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},YIkO:function(e,t,n){"use strict";n("V+eJ"),n("dZ+Y"),n("bWfx"),n("2Spj"),n("LK8F"),n("HAE/");var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("pVnL")),l=o(n("lSNA")),a=o(n("RIqP")),i=o(n("lwsE")),s=o(n("a1gu")),c=o(n("Nsbk")),u=o(n("PJYZ")),f=o(n("W8MJ")),p=o(n("7W2i")),m=o(n("17x9")),d=o(n("q1tI")),h=o(n("TSYQ")),v=o(n("Fxm3"));var y=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:m.default.arrayOf(m.default.string).isRequired,currentClassName:m.default.string.isRequired,scrolledPastClassName:m.default.string,style:m.default.object,componentTag:m.default.oneOfType([m.default.string,m.default.element]),offset:m.default.number,rootEl:m.default.string,onUpdate:m.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],o=0,r=e.length;o<r;o++)n[o]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],o=[],r=e||this.state.targetItems,l=!1,i=0,s=r.length;i<s;i++){var c=r[i],u=!l&&this._isInView(c);u?(l=!0,t.push(c)):n.push(c);var f=i===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(n.pop(),n.push.apply(n,(0,a.default)(t)),t=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:t,outView:n,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,o=n.rootEl,r=n.offset;o&&(t=document.querySelector(o).getBoundingClientRect());var l=e.getBoundingClientRect(),a=o?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+a,c=o?l.top+i-t.top+r:l.top+i+r,u=c+e.offsetHeight;return c<s&&u>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,o=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),o=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(o)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,o=n.children,a=n.className,i=n.scrolledPastClassName,s=n.style,c=0,u=d.default.Children.map(o,(function(t,n){var o;if(!t)return null;var a=t.type,s=i&&e.state.isScrolledPast[n],u=(0,h.default)((o={},(0,l.default)(o,"".concat(t.props.className),t.props.className),(0,l.default)(o,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,l.default)(o,"".concat(e.props.scrolledPastClassName),s),o));return d.default.createElement(a,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,h.default)((0,l.default)({},"".concat(a),a));return d.default.createElement(t,{className:f,style:s},u)}}]),t}(d.default.Component);t.default=y},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},dwco:function(e,t,n){n("Oyvg"),n("eM6i"),n("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),l=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+l.left-o.left,n.scrollTop+l.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function m(t){var n,o,r,a,i=(l()-t.startTime)/468;a=i=i>1?1:i,n=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,r),o===t.x&&r===t.y||e.requestAnimationFrame(m.bind(e,t))}function d(n,o,a){var s,c,u,f,p=l();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=r.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,f=i),m({scrollable:s,method:f,startTime:p,startX:c,startY:u,x:o,y:a})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},qT12:function(e,t,n){"use strict";n("rE2o"),n("ioFf");var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,E=o?Symbol.for("react.block"):60121,b=o?Symbol.for("react.fundamental"):60117,w=o?Symbol.for("react.responder"):60118,g=o?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case a:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case m:case y:case v:case c:return e;default:return t}}case l:return t}}}function _(e){return S(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=m,t.Fragment=a,t.Lazy=y,t.Memo=v,t.Portal=l,t.Profiler=s,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return _(e)||S(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===m},t.isFragment=function(e){return S(e)===a},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===v},t.isPortal=function(e){return S(e)===l},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===s||e===i||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===m||e.$$typeof===b||e.$$typeof===w||e.$$typeof===g||e.$$typeof===E)},t.typeOf=S},uuth:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y}));n("2Spj"),n("V+eJ"),n("/SS/"),n("hHhE"),n("HAE/");var o=n("1TsT"),r=(n("17x9"),n("q1tI")),l=n.n(r),a=n("TOwV");function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}function p(e){return"string"==typeof e.type}var m;var d=[];function h(e){d.push(e),m||(m=setTimeout((function(){var e;for(m=null;e=d.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=d.indexOf(e);-1!==n&&(d.splice(n,1),!d.length&&m&&(clearTimeout(m),m=null))}}}var v={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},y=function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,s(n).call(this,e))).refElement=function(e){t._ref=e},t}var r,m,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,t),r=n,(m=[{key:"componentDidMount",value:function(){var e=this;n.getWindow()&&(this.cancelOnNextTick=h((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!p(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=h((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var l=window.getComputedStyle(r),a=(n?l.getPropertyValue("overflow-x"):l.getPropertyValue("overflow-y"))||l.getPropertyValue("overflow");if("auto"===a||"scroll"===a)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),o=this._previousPosition,r=this.props,l=(r.debug,r.onPositionChange),a=r.onEnter,i=r.onLeave,s=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var c={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};l.call(this,c),"inside"===n?a.call(this,c):"inside"===o&&i.call(this,c),s&&("below"===o&&"above"===n||"above"===o&&"below"===n)&&(a.call(this,{currentPosition:"inside",previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),i.call(this,{currentPosition:n,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),l=r.left,a=r.top,i=r.right,s=r.bottom,c=o?l:a,u=o?i:s;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,m=p.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+f(p.topOffset,e),viewportBottom:t+e-f(m,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?p(t)||Object(a.isForwardRef)(t)?l.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}}):l.a.cloneElement(t,{innerRef:this.refElement}):l.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&i(r.prototype,m),d&&i(r,d),n}(l.a.PureComponent);y.above="above",y.below="below",y.inside="inside",y.invisible="invisible",y.getWindow=function(){if("undefined"!=typeof window)return window},y.defaultProps=v,y.displayName="Waypoint"}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-8269085dc3dae032e525.js.map