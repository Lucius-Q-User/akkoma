webpackJsonp([12],{150:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(2),i=n.n(o),r=n(1),s=n.n(r),c=n(3),a=n.n(c),l=n(4),u=n.n(l),d=n(0),h=n.n(d),p=function(e){function t(){var n,o,i;s()(this,t);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return n=o=a()(this,e.call.apply(e,[this].concat(c))),o.handleClick=function(){o.props.onClick()},i=n,a()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.active,o=e.columnHeaderId,r="";return this.props.icon&&(r=i()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),i()("div",{role:"heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:o||null},void 0,r,t)},t}(h.a.PureComponent)},259:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var o=n(2),i=n.n(o),r=n(1),s=n.n(r),c=n(3),a=n.n(c),l=n(4),u=n.n(l),d=n(42),h=n.n(d),p=n(0),f=n.n(p),v=n(150),g=n(91),b=n(33),m=function(e){function t(){var n,o,i;s()(this,t);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return n=o=a()(this,e.call.apply(e,[this].concat(c))),o.handleHeaderClick=function(){var e=o.node.querySelector(".scrollable");e&&(o._interruptScrollAnimation=Object(g.b)(e))},o.handleScroll=h()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(e){o.node=e},i=n,a()(o,i)}return u()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(g.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,n=e.icon,o=e.children,r=e.active,s=e.hideHeadingOnMobile,c=t&&(!s||s&&!Object(b.b)(window.innerWidth)),a=c&&t.replace(/ /g,"-"),l=c&&i()(v.a,{icon:n,active:r,type:t,onClick:this.handleHeaderClick,columnHeaderId:a});return f.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":a,className:"column",onScroll:this.handleScroll},l,o)},t}(f.a.PureComponent)},260:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o,i,r=n(2),s=n.n(r),c=n(1),a=n.n(c),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(0),f=n.n(p),v=n(6),g=(i=o=function(e){function t(){return a()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props.visible;return s()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(v.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(f.a.PureComponent),o.defaultProps={visible:!0},i)},261:function(e,t,n){"use strict";var o=n(2),i=n.n(o),r=n(0),s=(n.n(r),n(9)),c=n(153),a=n(69),l=n(15),u=n(43),d=n(22),h=n(57),p=n(151),f=n(31),v=n(6),g=n(18),b=Object(v.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"}}),m=function(){var e=Object(a.e)();return function(t,n){return{status:e(t,n.id)}}},y=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.O)(t,n))},onModalReblog:function(t){e(Object(u.q)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.t)(t)):n.shiftKey||!g.b?this.onModalReblog(t):e(Object(f.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.r)(t):Object(u.m)(t))},onPin:function(t){e(t.get("pinned")?Object(u.s)(t):Object(u.p)(t))},onEmbed:function(t){e(Object(f.d)("EMBED",{url:t.get("url")}))},onDelete:function(t){e(g.d?Object(f.d)("CONFIRM",{message:n.formatMessage(b.deleteMessage),confirm:n.formatMessage(b.deleteConfirm),onConfirm:function(){return e(Object(h.e)(t.get("id")))}}):Object(h.e)(t.get("id")))},onMention:function(t,n){e(Object(l.M)(t,n))},onOpenMedia:function(t,n){e(Object(f.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(f.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(f.d)("CONFIRM",{message:i()(v.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(b.blockConfirm),onConfirm:function(){return e(Object(d.r)(t.get("id")))}}))},onReport:function(t){e(Object(p.i)(t.get("account"),t))},onMute:function(t){e(Object(f.d)("CONFIRM",{message:i()(v.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(b.muteConfirm),onConfirm:function(){return e(Object(d.B)(t.get("id")))}}))},onMuteConversation:function(t){e(t.get("muted")?Object(h.h)(t.get("id")):Object(h.g)(t.get("id")))}}};t.a=Object(v.g)(Object(s.connect)(m,y)(c.a))},262:function(e,t,n){"use strict";n.d(t,"a",function(){return R});var o,i,r=n(2),s=n.n(r),c=n(1),a=n.n(c),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(94),f=n.n(p),v=n(0),g=n.n(v),b=n(152),m=n(5),y=n.n(m),M=n(263),O=n(260),C=n(268),S=n(8),I=(n.n(S),n(10)),j=n.n(I),k=n(154),R=(i=o=function(e){function t(){var n,o,i;a()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.state={lastMouseMove:null},o.intersectionObserverWrapper=new C.a,o.handleScroll=f()(function(){if(o.node){var e=o.node,t=e.scrollTop,n=e.scrollHeight,i=e.clientHeight,r=n-t-i;o._oldScrollPosition=n-t,400>r&&o.props.onScrollToBottom&&!o.props.isLoading?o.props.onScrollToBottom():t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.handleMouseMove=f()(function(){o._lastMouseMove=new Date},300),o.handleMouseLeave=function(){o._lastMouseMove=null},o.onFullScreenChange=function(){o.setState({fullscreen:Object(k.d)()})},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onScrollToBottom()},i=n,u()(o,i)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(k.a)(this.onFullScreenChange),this.handleScroll()},t.prototype.componentDidUpdate=function(e){if(g.a.Children.count(e.children)>0&&g.a.Children.count(e.children)<g.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this._oldScrollPosition&&this.node.scrollTop>0){var t=this.node.scrollHeight-this._oldScrollPosition;this.node.scrollTop!==t&&(this.node.scrollTop=t)}else this._oldScrollPosition=this.node.scrollHeight-this.node.scrollTop},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(k.b)(this.onFullScreenChange)},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof S.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype._recentlyMoved=function(){return null!==this._lastMouseMove&&new Date-this._lastMouseMove<600},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,i=t.trackScroll,r=t.shouldUpdateScroll,c=t.isLoading,a=t.hasMore,l=t.prepend,u=t.emptyMessage,d=this.state.fullscreen,h=g.a.Children.count(n),p=a&&h>0?s()(O.a,{visible:!c,onClick:this.handleLoadMore}):null,f=null;return f=c||h>0||!u?g.a.createElement("div",{className:j()("scrollable",{fullscreen:d}),ref:this.setRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},s()("div",{role:"feed",className:"item-list"},void 0,l,g.a.Children.map(this.props.children,function(t,n){return s()(M.a,{id:t.key,index:n,listLength:h,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:i?e.context.router.route.location.key+":"+o:null},t.key,t)}),p)):g.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),i?s()(b.a,{scrollKey:o,shouldUpdateScroll:r},void 0,f):f},t}(v.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},263:function(e,t,n){"use strict";var o=n(9),i=n(264),r=n(95),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},c=function(e){return{onHeightChange:function(t,n,o){e(Object(r.d)(t,n,o))}}};t.a=Object(o.connect)(s,c)(i.a)},264:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n(1),i=n.n(o),r=n(3),s=n.n(r),c=n(4),a=n.n(c),l=n(0),u=n.n(l),d=n(265),h=n(267),p=n(8),f=(n.n(p),["id","index","listLength"]),v=["id","index","listLength","cachedHeight"],g=function(e){function t(){var n,o,r;i()(this,t);for(var c=arguments.length,a=Array(c),l=0;l<c;l++)a[l]=arguments[l];return n=o=s()(this,e.call.apply(e,[this].concat(a))),o.state={isHidden:!1},o.handleIntersection=function(e){o.entry=e,Object(d.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(e){return e.isIntersecting&&!o.entry.isIntersecting&&Object(d.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var e=o.props,t=e.onHeightChange,n=e.saveHeightKey,i=e.id;o.height=Object(h.a)(o.entry).height,t&&n&&t(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},r=n,s()(o,r)}return a()(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(t.isIntersecting||!t.isHidden&&!e.cachedHeight)||!(o?v:f).every(function(t){return Object(p.is)(e[t],n.props[t])})},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,i=e.listLength,r=e.cachedHeight,s=this.state,c=s.isIntersecting,a=s.isHidden;return c||!a&&!r?u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!1})):u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||r)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!0}))},t}(u.a.Component)},265:function(e,t,n){"use strict";function o(e){for(;c.length&&e.timeRemaining()>0;)c.shift()();c.length?requestIdleCallback(o):a=!1}function i(e){c.push(e),a||(a=!0,requestIdleCallback(o))}var r=n(266),s=n.n(r),c=new s.a,a=!1;t.a=i},266:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,i=this.first;i&&!(--t<0);i=i.next)++o>e&&n.push(i.item);return n},e.exports=o},267:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof i){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;i=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return i?e.target.getBoundingClientRect():e.boundingClientRect}var i=void 0;t.a=o},268:function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=function(){function e(){i()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],i=e[2];t.observe(n,o,i)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=r},269:function(e,t,n){"use strict";n.d(t,"a",function(){return R});var o,i,r=n(28),s=n.n(r),c=n(2),a=n.n(c),l=n(29),u=n.n(l),d=n(1),h=n.n(d),p=n(3),f=n.n(p),v=n(4),g=n.n(v),b=n(0),m=n.n(b),y=n(12),M=n.n(y),O=n(5),C=n.n(O),S=n(261),I=n(11),j=n.n(I),k=n(262),R=(i=o=function(e){function t(){var n,o,i;h()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=o=f()(this,e.call.apply(e,[this].concat(s))),o.handleMoveUp=function(e){var t=o.props.statusIds.indexOf(e)-1;o._selectChild(t)},o.handleMoveDown=function(e){var t=o.props.statusIds.indexOf(e)+1;o._selectChild(t)},o.setRef=function(e){o.node=e},i=n,f()(o,i)}return g()(t,e),t.prototype._selectChild=function(e){var t=this.node.node.querySelector("article:nth-of-type("+(e+1)+") .focusable");t&&t.focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.statusIds,o=u()(t,["statusIds"]),i=o.isLoading,r=i||n.size>0?n.map(function(t){return a()(S.a,{id:t,onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},t)}):null;return m.a.createElement(k.a,s()({},o,{ref:this.setRef}),r)},t}(j.a),o.propTypes={scrollKey:C.a.string.isRequired,statusIds:M.a.list.isRequired,onScrollToBottom:C.a.func,onScrollToTop:C.a.func,onScroll:C.a.func,trackScroll:C.a.bool,shouldUpdateScroll:C.a.func,isLoading:C.a.bool,hasMore:C.a.bool,prepend:C.a.node,emptyMessage:C.a.node},o.defaultProps={trackScroll:!0},i)},769:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return A});var o,i,r,s,c=n(2),a=n.n(c),l=n(1),u=n.n(l),d=n(3),h=n.n(d),p=n(4),f=n.n(p),v=n(0),g=n.n(v),b=n(9),m=n(5),y=n.n(m),M=n(12),O=n.n(M),C=n(74),S=n(259),I=n(98),j=n(273),k=n(269),R=n(6),H=n(11),T=n.n(H),_=Object(R.f)({heading:{id:"column.favourites",defaultMessage:"Favourites"}}),L=function(e){return{statusIds:e.getIn(["status_lists","favourites","items"]),hasMore:!!e.getIn(["status_lists","favourites","next"])}},A=(o=Object(b.connect)(L))(i=Object(R.g)((s=r=function(e){function t(){var n,o,i;u()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=o=h()(this,e.call.apply(e,[this].concat(s))),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(j.f)(t):Object(j.d)("FAVOURITES",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(j.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleScrollToBottom=function(){o.props.dispatch(Object(C.c)())},i=n,h()(o,i)}return f()(t,e),t.prototype.componentWillMount=function(){this.props.dispatch(Object(C.d)())},t.prototype.render=function(){var e=this.props,t=e.intl,n=e.statusIds,o=e.columnId,i=e.multiColumn,r=e.hasMore,s=!!o;return g.a.createElement(S.a,{ref:this.setRef},a()(I.a,{icon:"star",title:t.formatMessage(_.heading),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:s,multiColumn:i,showBackButton:!0}),a()(k.a,{trackScroll:!s,statusIds:n,scrollKey:"favourited_statuses-"+o,hasMore:r,onScrollToBottom:this.handleScrollToBottom}))},t}(T.a),r.propTypes={dispatch:y.a.func.isRequired,statusIds:O.a.list.isRequired,intl:y.a.object.isRequired,columnId:y.a.string,multiColumn:y.a.bool,hasMore:y.a.bool},i=s))||i)||i}});
//# sourceMappingURL=favourited_statuses-b15a9a6cc711cca1eb76.js.map