import{H as b,s as h}from"./index.6eed69c9.js";const t=[];function g(o,l=b){let n;const i=new Set;function r(e){if(h(o,e)&&(o=e,n)){const c=!t.length;for(const s of i)s[1](),t.push(s,o);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function a(e){r(e(o))}function _(e,c=b){const s=[e,c];return i.add(s),i.size===1&&(n=l(r)||b),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_61omwl)==null?void 0:u.base)??"/neuro-scheduler";var f;const m=((f=globalThis.__sveltekit_61omwl)==null?void 0:f.assets)??p;export{m as a,p as b,g as w};
