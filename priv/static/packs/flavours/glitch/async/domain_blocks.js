(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{707:function(n,e,a){"use strict";a.r(e);var o=a(1),i=a(6),c=a(0),r=a(2),t=a(54),s=a.n(t),d=(a(3),a(20)),u=a(26),l=a.n(u),b=a(5),m=a.n(b),f=a(290),p=a(640),j=a(644);var O,h,g,k,v,y,w=a(162),M=a(7),_=a(47),D=a(24),U=Object(M.f)({unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),C=Object(M.g)((g=h=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a))||this,Object(r.a)(Object(c.a)(Object(c.a)(n)),"handleDomainUnblock",function(){n.props.onUnblockDomain(n.props.domain)}),n}return Object(i.a)(n,t),n.prototype.render=function(){var n=this.props,e=n.domain,a=n.intl;return Object(o.a)("div",{className:"domain"},void 0,Object(o.a)("div",{className:"domain__wrapper"},void 0,Object(o.a)("span",{className:"domain__domain-name"},void 0,Object(o.a)("strong",{},void 0,e)),Object(o.a)("div",{className:"domain__buttons"},void 0,Object(o.a)(_.a,{active:!0,icon:"unlock",title:a.formatMessage(U.unblockDomain,{domain:e}),onClick:this.handleDomainUnblock}))))},n}(D.a),Object(r.a)(h,"propTypes",{domain:m.a.string,onUnblockDomain:m.a.func.isRequired,intl:m.a.object.isRequired}),O=g))||O,R=a(45),q=Object(M.f)({blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),N=Object(M.g)(Object(d.connect)(function(){return function(n,e){return function(n){if(null==n)throw new TypeError("Cannot destructure undefined")}(e),{}}},function(e,n){var a=n.intl;return{onBlockDomain:function(n){e(Object(R.d)("CONFIRM",{message:Object(o.a)(M.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:Object(o.a)("strong",{},void 0,n)}}),confirm:a.formatMessage(q.blockDomainConfirm),onConfirm:function(){return e(Object(w.e)(n))}}))},onUnblockDomain:function(n){e(Object(w.h)(n))}}})(C)),A=a(649);a.d(e,"default",function(){return L});var I=Object(M.f)({heading:{id:"column.domain_blocks",defaultMessage:"Hidden domains"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),L=Object(d.connect)(function(n){return{domains:n.getIn(["domain_lists","blocks","items"])}})(k=Object(M.g)((y=v=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return n=t.call.apply(t,[this].concat(a))||this,Object(r.a)(Object(c.a)(Object(c.a)(n)),"handleLoadMore",s()(function(){n.props.dispatch(Object(w.f)())},300,{leading:!0})),n}Object(i.a)(n,t);var e=n.prototype;return e.componentWillMount=function(){this.props.dispatch(Object(w.g)())},e.render=function(){var n=this.props,e=n.intl,a=n.domains;return a?Object(o.a)(p.a,{icon:"minus-circle",heading:e.formatMessage(I.heading)},void 0,Object(o.a)(j.a,{}),Object(o.a)(A.a,{scrollKey:"domain_blocks",onLoadMore:this.handleLoadMore},void 0,a.map(function(n){return Object(o.a)(N,{domain:n},n)}))):Object(o.a)(p.a,{},void 0,Object(o.a)(f.a,{}))},n}(D.a),Object(r.a)(v,"propTypes",{params:m.a.object.isRequired,dispatch:m.a.func.isRequired,domains:l.a.list,intl:m.a.object.isRequired}),k=y))||k)||k}}]);
//# sourceMappingURL=domain_blocks.js.map