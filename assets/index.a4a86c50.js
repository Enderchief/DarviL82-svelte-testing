(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function B(){}const de=e=>e;function he(e){return e()}function te(){return Object.create(null)}function S(e){e.forEach(he)}function X(e){return typeof e=="function"}function me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Le(e){return Object.keys(e).length===0}const _e=typeof window<"u";let ge=_e?()=>window.performance.now():()=>Date.now(),Z=_e?e=>requestAnimationFrame(e):B;const A=new Set;function pe(e){A.forEach(t=>{t.c(e)||(A.delete(t),t.f())}),A.size!==0&&Z(pe)}function ye(e){let t;return A.size===0&&Z(pe),{promise:new Promise(n=>{A.add(t={c:e,f:n})}),abort(){A.delete(t)}}}function v(e,t){e.appendChild(t)}function ve(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Me(e){const t=b("style");return Ne(ve(e),t),t.sheet}function Ne(e,t){v(e.head||e,t)}function R(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function Y(){return q(" ")}function G(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pe(e){return Array.from(e.childNodes)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function y(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function ne(e,t,n){e.classList[n?"add":"remove"](t)}function We(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,l,t),i}const D=new Map;let I=0;function Fe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function De(e,t){const n={stylesheet:Me(t),rules:{}};return D.set(e,n),n}function we(e,t,n,l,i,o,s,d=0){const r=16.666/l;let f=`{
`;for(let p=0;p<=1;p+=r){const T=t+(n-t)*o(p);f+=p*100+`%{${s(T,1-T)}}
`}const c=f+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Fe(c)}_${d}`,u=ve(e),{stylesheet:_,rules:m}=D.get(u)||De(u,e);m[a]||(m[a]=!0,_.insertRule(`@keyframes ${a} ${c}`,_.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${a} ${l}ms linear ${i}ms 1 both`,I+=1,a}function J(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),i=n.length-l.length;i&&(e.style.animation=l.join(", "),I-=i,I||Ie())}function Ie(){Z(()=>{I||(D.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),D.clear())})}let $;function L(e){$=e}const j=[],U=[],W=[],le=[],He=Promise.resolve();let V=!1;function qe(){V||(V=!0,He.then(ke))}function z(e){W.push(e)}const K=new Set;let P=0;function ke(){const e=$;do{for(;P<j.length;){const t=j[P];P++,L(t),Ke(t.$$)}for(L(null),j.length=0,P=0;U.length;)U.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];K.has(n)||(K.add(n),n())}W.length=0}while(j.length);for(;le.length;)le.pop()();V=!1,K.clear(),L(e)}function Ke(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}let Q;function Ce(){return Q||(Q=Promise.resolve(),Q.then(()=>{Q=null})),Q}function H(e,t,n){e.dispatchEvent(We(`${t?"intro":"outro"}${n}`))}const F=new Set;let w;function Se(){w={r:0,c:[],p:w}}function Ee(){w.r||S(w.c),w=w.p}function k(e,t){e&&e.i&&(F.delete(e),e.i(t))}function M(e,t,n,l){if(e&&e.o){if(F.has(e))return;F.add(e),w.c.push(()=>{F.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const Te={duration:0};function Ye(e,t,n){let l=t(e,n),i=!1,o,s,d=0;function r(){o&&J(e,o)}function f(){const{delay:a=0,duration:u=300,easing:_=de,tick:m=B,css:g}=l||Te;g&&(o=we(e,0,1,u,a,_,g,d++)),m(0,1);const p=ge()+a,T=p+u;s&&s.abort(),i=!0,z(()=>H(e,!0,"start")),s=ye(O=>{if(i){if(O>=T)return m(1,0),H(e,!0,"end"),r(),i=!1;if(O>=p){const N=_((O-p)/u);m(N,1-N)}}return i})}let c=!1;return{start(){c||(c=!0,J(e),X(l)?(l=l(),Ce().then(f)):f())},invalidate(){c=!1},end(){i&&(r(),i=!1)}}}function Ge(e,t,n){let l=t(e,n),i=!0,o;const s=w;s.r+=1;function d(){const{delay:r=0,duration:f=300,easing:c=de,tick:a=B,css:u}=l||Te;u&&(o=we(e,1,0,f,r,c,u));const _=ge()+r,m=_+f;z(()=>H(e,!1,"start")),ye(g=>{if(i){if(g>=m)return a(0,1),H(e,!1,"end"),--s.r||S(s.c),!1;if(g>=_){const p=c((g-_)/f);a(1-p,p)}}return i})}return X(l)?Ce().then(()=>{l=l(),d()}):d(),{end(r){r&&l.tick&&l.tick(1,0),i&&(o&&J(e,o),i=!1)}}}function Je(e){e&&e.c()}function Ae(e,t,n,l){const{fragment:i,on_mount:o,on_destroy:s,after_update:d}=e.$$;i&&i.m(t,n),l||z(()=>{const r=o.map(he).filter(X);s?s.push(...r):S(r),e.$$.on_mount=[]}),d.forEach(z)}function ze(e,t){const n=e.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(j.push(e),qe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,l,i,o,s,d=[-1]){const r=$;L(e);const f=e.$$={fragment:null,ctx:null,props:o,update:B,not_equal:i,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:te(),dirty:d,skip_bound:!1,root:t.target||r.$$.root};s&&s(f.root);let c=!1;if(f.ctx=n?n(e,t.props||{},(a,u,..._)=>{const m=_.length?_[0]:u;return f.ctx&&i(f.ctx[a],f.ctx[a]=m)&&(!f.skip_bound&&f.bound[a]&&f.bound[a](m),c&&Ue(e,a)),u}):[],f.update(),c=!0,S(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const a=Pe(t.target);f.fragment&&f.fragment.l(a),a.forEach(E)}else f.fragment&&f.fragment.c();t.intro&&k(e.$$.fragment),Ae(e,t.target,t.anchor,t.customElement),ke()}L(r)}class Re{$destroy(){ze(this,1),this.$destroy=B}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!Le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ve(e){const t=e-1;return t*t*t+1}function ie(e,{delay:t=0,duration:n=400,easing:l=Ve,x:i=0,y:o=0,opacity:s=0}={}){const d=getComputedStyle(e),r=+d.opacity,f=d.transform==="none"?"":d.transform,c=r*(1-s);return{delay:t,duration:n,easing:l,css:(a,u)=>`
			transform: ${f} translate(${(1-a)*i}px, ${(1-a)*o}px);
			opacity: ${r-c*u}`}}function re(e,t,n){return Math.min(Math.max(e,t),n)}function Xe(e,t){let n;return()=>{clearTimeout(n),n=setTimeout(e,t)}}function oe(e,t,n){const l=e.slice();return l[19]=t[n],l[21]=n,l}function se(e,t,n){const l=e.slice();return l[22]=t[n],l}function fe(e){var i;let t,n=((i=e[19].smallTitle)!=null?i:e[19].title)+"",l;return{c(){t=b("h1"),l=q(n),C(t,"class","small-title svelte-jnp1k3")},m(o,s){R(o,t,s),v(t,l)},p(o,s){var d;s&1&&n!==(n=((d=o[19].smallTitle)!=null?d:o[19].title)+"")&&x(l,n)},d(o){o&&E(t)}}}function ae(e){let t,n,l=e[19].title+"",i,o,s,d,r,f,c=e[19].todos,a=[];for(let u=0;u<c.length;u+=1)a[u]=ce(se(e,c,u));return{c(){t=b("div"),n=b("h1"),i=q(l),o=Y(),s=b("ul");for(let u=0;u<a.length;u+=1)a[u].c();C(n,"class","title"),C(s,"class","todos"),C(t,"class","content svelte-jnp1k3")},m(u,_){R(u,t,_),v(t,n),v(n,i),v(t,o),v(t,s);for(let m=0;m<a.length;m+=1)a[m].m(s,null);f=!0},p(u,_){if((!f||_&1)&&l!==(l=u[19].title+"")&&x(i,l),_&1){c=u[19].todos;let m;for(m=0;m<c.length;m+=1){const g=se(u,c,m);a[m]?a[m].p(g,_):(a[m]=ce(g),a[m].c(),a[m].m(s,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=c.length}},i(u){f||(z(()=>{r&&r.end(1),d=Ye(t,ie,{y:15,duration:250,delay:150}),d.start()}),f=!0)},o(u){d&&d.invalidate(),r=Ge(t,ie,{y:15,duration:50}),f=!1},d(u){u&&E(t),be(a,u),u&&r&&r.end()}}}function ce(e){let t,n=e[22]+"",l;return{c(){t=b("li"),l=q(n)},m(i,o){R(i,t,o),v(t,l)},p(i,o){o&1&&n!==(n=i[22]+"")&&x(l,n)},d(i){i&&E(t)}}}function ue(e){let t,n,l,i,o,s,d=(!e[4]||e[21]===e[5])&&fe(e),r=e[21]===e[5]&&ae(e);function f(){return e[13](e[21])}function c(){return e[14](e[21])}return{c(){t=b("div"),d&&d.c(),n=Y(),r&&r.c(),l=Y(),C(t,"class","card svelte-jnp1k3"),ne(t,"active",e[21]===e[5]),y(t,"--z-index",e[0].length-e[21],!1)},m(a,u){R(a,t,u),d&&d.m(t,null),v(t,n),r&&r.m(t,null),v(t,l),i=!0,o||(s=[G(t,"mouseover",f),G(t,"focus",c)],o=!0)},p(a,u){e=a,!e[4]||e[21]===e[5]?d?d.p(e,u):(d=fe(e),d.c(),d.m(t,n)):d&&(d.d(1),d=null),e[21]===e[5]?r?(r.p(e,u),u&32&&k(r,1)):(r=ae(e),r.c(),k(r,1),r.m(t,l)):r&&(Se(),M(r,1,1,()=>{r=null}),Ee()),u&32&&ne(t,"active",e[21]===e[5]),u&1&&y(t,"--z-index",e[0].length-e[21],!1)},i(a){i||(k(r),i=!0)},o(a){M(r),i=!1},d(a){a&&E(t),d&&d.d(),r&&r.d(),o=!1,S(s)}}}function Ze(e){let t,n,l,i,o=e[0],s=[];for(let r=0;r<o.length;r+=1)s[r]=ue(oe(e,o,r));const d=r=>M(s[r],1,1,()=>{s[r]=null});return{c(){t=b("div");for(let r=0;r<s.length;r+=1)s[r].c();C(t,"class","stacked-cards svelte-jnp1k3"),y(t,"width",e[3].width||null,!1),y(t,"height",e[3].height||null,!1),y(t,"--expanded-size",e[3].expandedWidth||null,!1),y(t,"--collapsed-size",e[3].collapsedWidth||null,!1),y(t,"--bg-color",e[1],!1),y(t,"--overlay-color",e[2],!1)},m(r,f){R(r,t,f);for(let c=0;c<s.length;c+=1)s[c].m(t,null);e[15](t),n=!0,l||(i=G(t,"wheel",e[8]),l=!0)},p(r,[f]){if(f&177){o=r[0];let c;for(c=0;c<o.length;c+=1){const a=oe(r,o,c);s[c]?(s[c].p(a,f),k(s[c],1)):(s[c]=ue(a),s[c].c(),k(s[c],1),s[c].m(t,null))}for(Se(),c=o.length;c<s.length;c+=1)d(c);Ee()}f&8&&y(t,"width",r[3].width||null,!1),f&8&&y(t,"height",r[3].height||null,!1),f&8&&y(t,"--expanded-size",r[3].expandedWidth||null,!1),f&8&&y(t,"--collapsed-size",r[3].collapsedWidth||null,!1),f&2&&y(t,"--bg-color",r[1],!1),f&4&&y(t,"--overlay-color",r[2],!1)},i(r){if(!n){for(let f=0;f<o.length;f+=1)k(s[f]);n=!0}},o(r){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)M(s[f]);n=!1},d(r){r&&E(t),be(s,r),e[15](null),l=!1,i()}}}function xe(e,t,n){let{cards:l}=t,{cardColor:i="#444"}=t,{overlayColor:o="black"}=t,{size:s={}}=t,{minBrightness:d=0}=t,{maxBrightness:r=1}=t,{invert:f=!1}=t,{gradientTransitionSteps:c=void 0}=t,{dontShowSmallTitleWhenCollapsed:a=!1}=t,u=0,_,m=!1;function g(h){n(5,u=re(h,0,l.length-1))}function p(h){m||g(h)}const T=Xe(()=>{m=!1},1e3);function O(h){g(u-Math.sign(h.deltaY)),m=!0,T()}const N=h=>p(h),Oe=h=>p(h);function Qe(h){U[h?"unshift":"push"](()=>{_=h,n(6,_)})}return e.$$set=h=>{"cards"in h&&n(0,l=h.cards),"cardColor"in h&&n(1,i=h.cardColor),"overlayColor"in h&&n(2,o=h.overlayColor),"size"in h&&n(3,s=h.size),"minBrightness"in h&&n(9,d=h.minBrightness),"maxBrightness"in h&&n(10,r=h.maxBrightness),"invert"in h&&n(11,f=h.invert),"gradientTransitionSteps"in h&&n(12,c=h.gradientTransitionSteps),"dontShowSmallTitleWhenCollapsed"in h&&n(4,a=h.dontShowSmallTitleWhenCollapsed)},e.$$.update=()=>{e.$$.dirty&7777&&_&&[..._.children].forEach((h,je)=>{const ee=re(Math.abs(je-u)*Math.round(100/(c!=null?c:l.length))/100,d,r);h.style.setProperty("--opacity",(f?1-ee:ee).toString())})},[l,i,o,s,a,u,_,p,O,d,r,f,c,N,Oe,Qe]}class $e extends Re{constructor(t){super(),Be(this,t,xe,Ze,me,{cards:0,cardColor:1,overlayColor:2,size:3,minBrightness:9,maxBrightness:10,invert:11,gradientTransitionSteps:12,dontShowSmallTitleWhenCollapsed:4})}}function et(e){let t,n,l;return n=new $e({props:{cards:[{smallTitle:"Q1",title:"Q1 2022",todos:["Add a new feature","Fix a bug","Refactor code"]},{smallTitle:"Q2",title:"Q2 2022",todos:["Add a new feature","Fix a bug","Refactor code"]},{smallTitle:"Q3",title:"Q3 2022",todos:["Add a new feature","Fix a bug","Refactor code"]},{smallTitle:"Q4",title:"Q4 2022",todos:["Add a new feature","Fix a bug","Refactor code"]},{smallTitle:"Q1",title:"Q1 2023",todos:["Add a new feature","Fix a bug","Refactor code"]}],cardColor:"#25252e",size:{height:"20rem"}}}),{c(){t=b("div"),Je(n.$$.fragment),C(t,"class","card-container svelte-1b9i2tg")},m(i,o){R(i,t,o),Ae(n,t,null),l=!0},p:B,i(i){l||(k(n.$$.fragment,i),l=!0)},o(i){M(n.$$.fragment,i),l=!1},d(i){i&&E(t),ze(n)}}}class tt extends Re{constructor(t){super(),Be(this,t,null,et,me,{})}}new tt({target:document.getElementById("app")});
