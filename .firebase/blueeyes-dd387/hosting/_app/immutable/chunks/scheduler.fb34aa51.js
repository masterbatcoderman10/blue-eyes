function k(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function B(t,n,e,o,r){t.__svelte_meta={loc:{file:n,line:e,column:o,char:r}}}function E(t){return t()}function C(){return Object.create(null)}function j(t){t.forEach(E)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function S(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function U(t){return Object.keys(t).length===0}function D(t,n){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${n}' is not a store with a 'subscribe' method`)}function v(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(v(n,e))}function H(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function I(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)i[s]=n.dirty[s]|r[s];return i}return n.dirty|r}return n.dirty}function J(t,n,e,o,r,i){if(r){const _=y(n,e,o,i);t.p(_,r)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let f;function d(t){f=t}function b(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){b().$$.on_mount.push(t)}function N(t){b().$$.after_update.push(t)}function Q(t,n){return b().$$.context.set(t,n),n}const a=[],g=[];let u=[];const m=[],x=Promise.resolve();let p=!1;function q(){p||(p=!0,x.then(z))}function R(){return q(),x}function O(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,d(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;m.length;)m.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{a as A,q as B,N as a,Q as b,g as c,B as d,H as e,I as f,K as g,G as h,A as i,F as j,S as k,C as l,z as m,k as n,L as o,O as p,f as q,j as r,P as s,R as t,J as u,D as v,d as w,U as x,E as y,T as z};
