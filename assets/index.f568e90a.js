(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function m(){}function H(e){return e()}function T(){return Object.create(null)}function y(e){e.forEach(H)}function J(e){return typeof e=="function"}function O(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function U(e){return Object.keys(e).length===0}function P(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function V(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function j(e){return document.createElement(e)}function W(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return Array.from(e.childNodes)}function h(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let B;function g(e){B=e}const p=[],x=[],b=[],A=[],Y=Promise.resolve();let L=!1;function Z(){L||(L=!0,Y.then(Q))}function N(e){b.push(e)}function ee(e){A.push(e)}const k=new Set;let $=0;function Q(){const e=B;do{for(;$<p.length;){const t=p[$];$++,g(t),te(t.$$)}for(g(null),p.length=0,$=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];k.has(n)||(k.add(n),n())}b.length=0}while(p.length);for(;A.length;)A.pop()();L=!1,k.clear(),g(e)}function te(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const v=new Set;let d;function ne(){d={r:0,c:[],p:d}}function re(){d.r||y(d.c),d=d.p}function _(e,t){e&&e.i&&(v.delete(e),e.i(t))}function w(e,t,n,r){if(e&&e.o){if(v.has(e))return;v.add(e),d.c.push(()=>{v.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function oe(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function R(e){e&&e.c()}function C(e,t,n,r){const{fragment:o,after_update:u}=e.$$;o&&o.m(t,n),r||N(()=>{const s=e.$$.on_mount.map(H).filter(J);e.$$.on_destroy?e.$$.on_destroy.push(...s):y(s),e.$$.on_mount=[]}),u.forEach(N)}function M(e,t){const n=e.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(p.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function S(e,t,n,r,o,u,s,c=[-1]){const i=B;g(e);const l=e.$$={fragment:null,ctx:[],props:u,update:m,not_equal:o,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:T(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(a,I,...F)=>{const K=F.length?F[0]:I;return l.ctx&&o(l.ctx[a],l.ctx[a]=K)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](K),f&&ie(e,a)),I}):[],l.update(),f=!0,y(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=X(t.target);l.fragment&&l.fragment.l(a),a.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&_(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),Q()}g(i)}class q{$destroy(){M(this,1),this.$destroy=m}$on(t,n){if(!J(n))return m;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function se(e){let t;return{c(){t=j("div"),z(t,"class","personBox svelte-1av02k9"),h(t,"background-color",e[0])},m(n,r){P(n,t,r)},p(n,[r]){r&1&&h(t,"background-color",n[0])},i:m,o:m,d(n){n&&E(t)}}}function le(e,t,n){let r,{diseased:o}=t;return e.$$set=u=>{"diseased"in u&&n(1,o=u.diseased)},e.$$.update=()=>{e.$$.dirty&2&&n(0,r=o?"red":"green")},[r,o]}class ue extends q{constructor(t){super(),S(this,t,le,se,O,{diseased:1})}}function D(e,t,n){const r=e.slice();return r[4]=t[n],r[5]=t,r[6]=n,r}function G(e){let t,n,r;function o(s){e[3](s,e[6])}let u={};return e[1][e[6]]!==void 0&&(u.diseased=e[1][e[6]]),t=new ue({props:u}),x.push(()=>oe(t,"diseased",o)),{c(){R(t.$$.fragment)},m(s,c){C(t,s,c),r=!0},p(s,c){e=s;const i={};!n&&c&2&&(n=!0,i.diseased=e[1][e[6]],ee(()=>n=!1)),t.$set(i)},i(s){r||(_(t.$$.fragment,s),r=!0)},o(s){w(t.$$.fragment,s),r=!1},d(s){M(t,s)}}}function fe(e){let t,n,r,o,u=e[1],s=[];for(let i=0;i<u.length;i+=1)s[i]=G(D(e,u,i));const c=i=>w(s[i],1,1,()=>{s[i]=null});return{c(){t=j("div");for(let i=0;i<s.length;i+=1)s[i].c();z(t,"class","communityBox svelte-1hlpi4o"),h(t,"width",e[0]+"em"),h(t,"height",e[0]+"em")},m(i,l){P(i,t,l);for(let f=0;f<s.length;f+=1)s[f].m(t,null);n=!0,r||(o=W(t,"click",e[2]),r=!0)},p(i,[l]){if(l&2){u=i[1];let f;for(f=0;f<u.length;f+=1){const a=D(i,u,f);s[f]?(s[f].p(a,l),_(s[f],1)):(s[f]=G(a),s[f].c(),_(s[f],1),s[f].m(t,null))}for(ne(),f=u.length;f<s.length;f+=1)c(f);re()}(!n||l&1)&&h(t,"width",i[0]+"em"),(!n||l&1)&&h(t,"height",i[0]+"em")},i(i){if(!n){for(let l=0;l<u.length;l+=1)_(s[l]);n=!0}},o(i){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)w(s[l]);n=!1},d(i){i&&E(t),V(s,i),r=!1,o()}}}function ce(e,t,n){let{size:r}=t,o=Array(r*r).fill().map(()=>Math.random()>.998),u=()=>{let c=[];for(let i=0;i<r*r;i++)if(!c.includes(i)&&o[i]){let l=[];i%r!=0&&l.push(i-1),i>=0&&i<r||l.push(i-r),(i+1)%r!=0&&l.push(i+1),i<(r-1)*r&&l.push(Number(i)+Number(r)),c=c.concat(l);for(let f=0;f<l.length;f++)o[l[f]]||n(1,o[l[f]]=Math.random()>.8,o)}};function s(c,i){e.$$.not_equal(o[i],c)&&(o[i]=c,n(1,o))}return e.$$set=c=>{"size"in c&&n(0,r=c.size)},[r,o,u,s]}class ae extends q{constructor(t){super(),S(this,t,ce,fe,O,{size:0})}}function de(e){let t,n,r;return n=new ae({props:{size:"50"}}),{c(){t=j("main"),R(n.$$.fragment),z(t,"class","main svelte-1dqer06")},m(o,u){P(o,t,u),C(n,t,null),r=!0},p:m,i(o){r||(_(n.$$.fragment,o),r=!0)},o(o){w(n.$$.fragment,o),r=!1},d(o){o&&E(t),M(n)}}}class he extends q{constructor(t){super(),S(this,t,null,de,O,{})}}new he({target:document.getElementById("app")});
