function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function O(){return Object.create(null)}function b(t){t.forEach(D)}function M(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function I(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(R(e,n))}function _t(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,s){if(r){const o=P(e,n,i,s);t.p(o,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}let v=!1;function W(){v=!0}function G(){v=!1}function J(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:J(1,r,g=>e[n[g]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const s=[],o=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(o[c],f)}}function Q(t,e){if(v){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){v&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function $t(){return A(" ")}function wt(){return A("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:X(t,i,e[i])}function kt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Nt(t){return t===""?null:+t}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){Z(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function tt(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function St(t,e,n){return tt(t,e,n,V)}function et(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function At(t){return et(t," ")}function jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Tt(t,e){t.value=e??""}function Ct(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ot(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function qt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Dt(t){const e=t.querySelector(":checked");return e&&e.__value}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Mt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Pt(t,e){return new t(e)}let y;function p(t){y=t}function j(){if(!y)throw new Error("Function called outside component initialization");return y}function Bt(t){j().$$.on_mount.push(t)}function Ht(t){j().$$.after_update.push(t)}function Lt(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=nt(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],q=[];let m=[];const k=[],H=Promise.resolve();let N=!1;function L(){N||(N=!0,H.then(z))}function Ft(){return L(),H}function S(t){m.push(t)}function It(t){k.push(t)}const E=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;q.length;)q.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;k.length;)k.pop()();N=!1,E.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Rt(){d={r:0,c:[],p:d}}function Wt(){d.r||b(d.c),d=d.p}function ot(t,e){t&&t.i&&($.delete(t),t.i(e))}function Gt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Jt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Kt(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=e[s];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[s]=l}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Qt(t){return typeof t=="object"&&t!==null?t:{}}const ct=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ct];function Ut(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Vt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function st(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||S(()=>{const o=t.$$.on_mount.map(D).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...o):b(o),t.$$.on_mount=[]}),s.forEach(S)}function lt(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,s,o,l=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:O(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,g,...T)=>{const C=T.length?T[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&ut(t,a)),g}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){W();const a=Y(e.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&ot(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),G(),z()}p(c)}class Zt{$destroy(){lt(this,1),this.$destroy=w}$on(e,n){if(!M(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Qt as $,st as A,lt as B,_t as C,mt as D,pt as E,ht as F,Q as G,w as H,dt as I,bt as J,F as K,yt as L,zt as M,Et as N,vt as O,Kt as P,b as Q,kt as R,Zt as S,Nt as T,Dt as U,S as V,qt as W,Ot as X,Tt as Y,xt as Z,Ut as _,$t as a,It as a0,Lt as a1,Mt as a2,ft as a3,Jt as a4,gt as b,At as c,Gt as d,wt as e,Wt as f,ot as g,U as h,Yt as i,Ht as j,V as k,St as l,Y as m,X as n,Bt as o,Ct as p,A as q,et as r,at as s,Ft as t,jt as u,Rt as v,q as w,Pt as x,Vt as y,Xt as z};
