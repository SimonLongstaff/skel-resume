import{s as S,f as _,l as d,a as x,g as f,h as g,m as h,d as l,c as q,i as m,v,n as $,F as E,G as y}from"../chunks/scheduler.c0d2201b.js";import{S as C,i as F}from"../chunks/index.dabad1ed.js";import{d as G}from"../chunks/singletons.1a15c2ea.js";const H=()=>{const s=G;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),u=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=q(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function k(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let B=class extends C{constructor(t){super(),F(this,t,k,j,S,{})}};export{B as component};
