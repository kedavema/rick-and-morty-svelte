(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function A(){}function X(e){return e()}function D(){return Object.create(null)}function E(e){e.forEach(X)}function Y(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function G(e,t){return P||(P=document.createElement("a")),P.href=t,e===P.href}function ie(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode.removeChild(e)}function le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function L(){return M(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let R;function N(e){R=e}const k=[],Q=[],q=[],U=[],ue=Promise.resolve();let T=!1;function fe(){T||(T=!0,ue.then(ee))}function F(e){q.push(e)}const I=new Set;let j=0;function ee(){const e=R;do{for(;j<k.length;){const t=k[j];j++,N(t),ae(t.$$)}for(N(null),k.length=0,j=0;Q.length;)Q.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];I.has(n)||(I.add(n),n())}q.length=0}while(k.length);for(;U.length;)U.pop()();T=!1,I.clear(),N(e)}function ae(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const B=new Set;let x;function de(){x={r:0,c:[],p:x}}function he(){x.r||E(x.c),x=x.p}function O(e,t){e&&e.i&&(B.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),x.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function _e(e){e&&e.c()}function te(e,t,n,r){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),r||F(()=>{const a=e.$$.on_mount.map(X).filter(Y);e.$$.on_destroy?e.$$.on_destroy.push(...a):E(a),e.$$.on_mount=[]}),c.forEach(F)}function ne(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(k.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,o,c,a,m=[-1]){const p=R;N(e);const i=e.$$={fragment:null,ctx:[],props:c,update:A,not_equal:o,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:D(),dirty:m,skip_bound:!1,root:t.target||p.$$.root};a&&a(i.root);let v=!1;if(i.ctx=n?n(e,t.props||{},(u,g,...d)=>{const $=d.length?d[0]:g;return i.ctx&&o(i.ctx[u],i.ctx[u]=$)&&(!i.skip_bound&&i.bound[u]&&i.bound[u]($),v&&me(e,u)),g}):[],i.update(),v=!0,E(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const u=se(t.target);i.fragment&&i.fragment.l(u),u.forEach(C)}else i.fragment&&i.fragment.c();t.intro&&O(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),ee()}N(p)}class oe{$destroy(){ne(this,1),this.$destroy=A}$on(t,n){if(!Y(n))return A;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pe(e){let t,n,r,o,c,a,m=e[0].name+"",p,i,v,u=e[0].species+"",g;return{c(){t=b("div"),n=b("img"),c=L(),a=b("h2"),p=M(m),i=L(),v=b("h3"),g=M(u),G(n.src,r=e[0].image)||y(n,"src",r),y(n,"alt",o=e[0].name),y(t,"class","character")},m(d,$){S(d,t,$),_(t,n),_(t,c),_(t,a),_(a,p),_(t,i),_(t,v),_(v,g)},p(d,[$]){$&1&&!G(n.src,r=d[0].image)&&y(n,"src",r),$&1&&o!==(o=d[0].name)&&y(n,"alt",o),$&1&&m!==(m=d[0].name+"")&&J(p,m),$&1&&u!==(u=d[0].species+"")&&J(g,u)},i:A,o:A,d(d){d&&C(t)}}}function ge(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class $e extends oe{constructor(t){super(),re(this,t,ge,pe,Z,{character:0})}}function V(e,t,n){const r=e.slice();return r[5]=t[n],r}function W(e){let t,n;return t=new $e({props:{character:e[5]}}),{c(){_e(t.$$.fragment)},m(r,o){te(t,r,o),n=!0},p(r,o){const c={};o&1&&(c.character=r[5]),t.$set(c)},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){K(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function ye(e){let t,n,r,o,c,a,m,p,i,v,u,g,d,$,w=e[0],s=[];for(let l=0;l<w.length;l+=1)s[l]=W(V(e,w,l));const ce=l=>K(s[l],1,1,()=>{s[l]=null});return{c(){t=b("h1"),t.textContent="Rick and Morty Svelte",n=L(),r=b("div"),o=b("div"),c=b("button"),a=M("Previous"),p=L(),i=b("button"),i.textContent="Next",v=L(),u=b("div");for(let l=0;l<s.length;l+=1)s[l].c();y(t,"class","title"),c.disabled=m=e[1]==1,y(c,"class","btn"),y(i,"class","btn"),y(o,"class","btns"),y(u,"class","grid"),y(r,"class","container")},m(l,h){S(l,t,h),S(l,n,h),S(l,r,h),_(r,o),_(o,c),_(c,a),_(o,p),_(o,i),_(r,v),_(r,u);for(let f=0;f<s.length;f+=1)s[f].m(u,null);g=!0,d||($=[H(c,"click",e[3]),H(i,"click",e[2])],d=!0)},p(l,[h]){if((!g||h&2&&m!==(m=l[1]==1))&&(c.disabled=m),h&1){w=l[0];let f;for(f=0;f<w.length;f+=1){const z=V(l,w,f);s[f]?(s[f].p(z,h),O(s[f],1)):(s[f]=W(z),s[f].c(),O(s[f],1),s[f].m(u,null))}for(de(),f=w.length;f<s.length;f+=1)ce(f);he()}},i(l){if(!g){for(let h=0;h<w.length;h+=1)O(s[h]);g=!0}},o(l){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)K(s[h]);g=!1},d(l){l&&C(t),l&&C(n),l&&C(r),le(s,l),d=!1,E($)}}}function be(e,t,n){let r=[],o=1;async function c(){const i=await(await fetch(`https://rickandmortyapi.com/api/character?page=${o}`)).json();n(0,r=i.results)}c();function a(){n(1,o++,o),c()}function m(){n(1,o--,o),c()}return[r,o,a,m]}class ve extends oe{constructor(t){super(),re(this,t,be,ye,Z,{})}}new ve({target:document.getElementById("app")});
