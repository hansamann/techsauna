import{S as at,i as rt,s as ot,a as st,e as V,c as it,b as M,g as ue,t as B,d as de,f as F,h as G,j as lt,o as Oe,k as ct,l as ft,m as ut,n as be,p as C,q as dt,r as pt,u as ht,v as H,w as W,x as Ne,y as Y,z as X,A as le}from"./chunks/index-92993a8b.js";import{S as tt,I as q,g as ze,f as He,a as ve,b as ce,s as K,i as We,c as fe,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-9888da1c.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const i of vt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Rt(a){return a.replace(/\/$/,"")+St}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(Ue(a)),pe(a,e));const ee=new Map;function Ot(a,e){const n=Ue(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...u}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ee.set(n,{body:s,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,u))}return pe(a,e)}function It(a,e,n){if(ee.size>0){const i=Ue(a,n),s=ee.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ee.delete(i)}}return pe(e,n)}function Ue(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ut(a).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,d)=>{if(d%2){if(_.startsWith("x+"))return Ee(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Ee(String.fromCharCode(..._.slice(2).split("-").map(P=>parseInt(P,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,S,j,T]=g;return e.push({name:j,matcher:T,optional:!!w,rest:!!S,chained:S?d===1&&t[0]==="":!1}),S?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Ee(_)}).join("")}).join("")}/?$`),params:e}}function Nt(a){return!/^\([^)]+\)$/.test(a)}function Ut(a){return a.slice(1).split("/").filter(Nt)}function $t(a,e,n){const i={},s=a.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=s[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let d=s.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;d>=t;)s[d]=s[d-1],d-=1;continue}return}i[f.name]=_}}if(!u)return i}function Ee(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[_,d,g]])=>{const{pattern:w,params:S}=Pt(f),j={id:f,exec:T=>{const P=w.exec(T);if(P)return $t(P,S,i)},errors:[1,...g||[]].map(T=>a[T]),layouts:[0,...d||[]].map(t),leaf:u(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function Tt(a){let e,n,i;var s=a[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=H(s,u(a))),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&Ne(e.$$.fragment,t),n=V()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),s!==(s=t[0][0])){if(e){ue();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),de()}s?(e=H(s,u(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&F(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&X(e,t)}}}function Dt(a){let e,n,i;var s=a[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=H(s,u(a))),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&Ne(e.$$.fragment,t),n=V()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){ue();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),de()}s?(e=H(s,u(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&F(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&X(e,t)}}}function Ct(a){let e,n,i;var s=a[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=H(s,u(a))),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&Ne(e.$$.fragment,t),n=V()},m(t,f){e&&Y(e,t,f),M(t,n,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),s!==(s=t[0][1])){if(e){ue();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),de()}s?(e=H(s,u(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&F(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&X(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ut(e);n&&n.l(s),s.forEach(G),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(i,s){M(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=pt(n,a[6])},m(n,i){M(n,e,i)},p(n,i){i&64&&ht(e,n[6])},d(n){n&&G(e)}}}function qt(a){let e,n,i,s,u;const t=[Dt,Tt],f=[];function _(g,w){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let d=a[4]&&Xe(a);return{c(){n.c(),i=st(),d&&d.c(),s=V()},l(g){n.l(g),i=it(g),d&&d.l(g),s=V()},m(g,w){f[e].m(g,w),M(g,i,w),d&&d.m(g,w),M(g,s,w),u=!0},p(g,[w]){let S=e;e=_(g),e===S?f[e].p(g,w):(ue(),B(f[S],1,1,()=>{f[S]=null}),de(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),F(n,1),n.m(i.parentNode,i)),g[4]?d?d.p(g,w):(d=Xe(g),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(g){u||(F(n),u=!0)},o(g){B(n),u=!1},d(g){f[e].d(g),g&&G(i),d&&d.d(g),g&&G(s)}}}function Vt(a,e,n){let{stores:i}=e,{page:s}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(i.page.notify);let d=!1,g=!1,w=null;return Oe(()=>{const S=i.page.subscribe(()=>{d&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),S}),a.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,s=S.page),"components"in S&&n(0,u=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,_=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(s)},[u,t,f,_,d,g,w,i,s]}class Bt extends at{constructor(e){super(),rt(this,e,Vt,qt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(a,e){return new URL(a,e).href},Qe={},ke=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Gt(u,i),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=s.length-1;g>=0;g--){const w=s[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Ft,t||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),t)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Jt={},he=[()=>ke(()=>import("./chunks/0-e905e9f5.js"),["./chunks/0-e905e9f5.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-f2d946ef.js","./chunks/index-92993a8b.js","./assets/_layout-da7659da.css"],import.meta.url),()=>ke(()=>import("./chunks/1-b4160698.js"),["./chunks/1-b4160698.js","./components/error.svelte-2cc3d773.js","./chunks/index-92993a8b.js","./chunks/singletons-9888da1c.js"],import.meta.url),()=>ke(()=>import("./chunks/2-02865516.js"),["./chunks/2-02865516.js","./components/pages/_page.svelte-f9855609.js","./chunks/index-92993a8b.js"],import.meta.url)],Kt=[],Mt={"/":[2]},zt={handleError:({error:a})=>{console.error(a)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Ht(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,s])=>[i,await s])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(s,u=!1){if(s===Wt)return;if(s===Xt)return NaN;if(s===Zt)return 1/0;if(s===Qt)return-1/0;if(s===xt)return-0;if(u)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const _=new Set;n[s]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const d=new Map;n[s]=d;for(let w=1;w<t.length;w+=2)d.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[s]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[s]=f;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Yt&&(f[_]=i(d))}}else{const f={};n[s]=f;for(const _ in t){const d=t[_];f[_]=i(d)}}return n[s]}return i(0)}const Se=jt(he,Kt,Mt,Jt),Ae=he[0],Pe=he[1];Ae();Pe();let te={};try{te=JSON.parse(sessionStorage[tt])}catch{}function Re(a){te[a]=fe()}function tn({target:a,base:e}){var Je;const n=document.documentElement,i=[];let s=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,d=!0,g=!1,w=!1,S=!1,j=!1,T,P=(Je=history.state)==null?void 0:Je[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const me=te[P];me&&(history.scrollRestoration="manual",scrollTo(me.x,me.y));let J,$e,ne;async function je(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),o=oe(r,!0);s=null,await De(o,r,[])}async function _e(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},m,v){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?fe():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{h&&(j=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=oe(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Ve(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function ae(...r){const c=Se.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(r,o,c,l,p={},h){var v,b;$e=p;let m=r&&await Ve(r);if(m||(m=await Ge(o,{id:null},await x(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,$e!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await re({status:500,error:await x(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return _e(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await K.updated.check()&&await ie(o);if(i.length=0,j=!1,g=!0,l&&l.details){const{details:y}=l,R=y.replaceState?0:1;y.state[q]=P+=R,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(s=null,_?(t=m.state,m.props.page&&(m.props.page.url=o),T.$set(m.props)):Ce(m),l){const{scroll:y,keepfocus:R}=l;if(R||Le(),await le(),d){const L=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await le();d=!0,m.props.page&&(J=m.props.page),h&&h(),g=!1}function Ce(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=r.props.page,T=new Bt({target:a,props:{...r.props,stores:K},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),_=!0}async function Z({url:r,params:o,branch:c,status:l,error:p,route:h,form:m}){const v=c.filter(Boolean);let b="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);r.pathname=yt(r.pathname,b),r.search=r.search;const y={type:"loaded",state:{url:r,params:o,branch:c,error:p,route:h},props:{components:v.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let R={},L=!J;for(let O=0;O<v.length;O+=1){const E=v[O];R={...R,...E.data},(L||!t.branch.some(U=>U===E))&&(y.props[`data_${O}`]=R,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(J.data).length!==Object.keys(R).length),(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0||L)&&(y.props.page={error:p,params:o,route:h,status:l,url:new URL(r),form:m??null,data:L?R:J.data}),y}async function ge({loader:r,parent:o,url:c,params:l,route:p,server_data_node:h}){var y,R,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((y=b.universal)!=null&&y.load){let D=function(...E){for(const U of E){const{href:$}=new URL(U,c);v.dependencies.add($)}};const O={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,U)=>(v.params.add(U),E[U])}),data:(h==null?void 0:h.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(E,U){let $;E instanceof Request?($=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):$=E;const k=new URL($,c).href;return D(k),_?It($,k,U):Ot($,U)},setHeaders:()=>{},depends:D,parent(){return v.parent=!0,o()}};m=await b.universal.load.call(null,O)??null,m=m?await Ht(m):null}return{node:b,loader:r,server:h,universal:(R=b.universal)!=null&&R.load?{type:"data",data:m,uses:v}:null,data:m??(h==null?void 0:h.data)??null,slash:((L=b.universal)==null?void 0:L.trailingSlash)??(h==null?void 0:h.slash)}}function qe(r,o,c,l,p){if(j)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function ye(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ve({id:r,invalidating:o,url:c,params:l,route:p}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:h,layouts:m,leaf:v}=p,b=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const R=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,D=b.reduce((k,A,N)=>{var Q;const I=t.branch[N],z=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||qe(k.some(Boolean),L,R,(Q=I.server)==null?void 0:Q.uses,l));return k.push(z),k},[]);if(D.some(Boolean)){try{y=await et(c,D)}catch(k){return re({status:500,error:await x(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let E=!1;const U=b.map(async(k,A)=>{var Q;if(!k)return;const N=t.branch[A],I=O==null?void 0:O[A];if((!I||I.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!qe(E,L,R,(Q=N.universal)==null?void 0:Q.uses,l))return N;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ge({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Me;const Ke={};for(let we=0;we<A;we+=1)Object.assign(Ke,(Me=await U[we])==null?void 0:Me.data);return Ke},server_data_node:ye(I===void 0&&k[0]?{type:"skip"}:I??null,N==null?void 0:N.server)})});for(const k of U)k.catch(()=>{});const $=[];for(let k=0;k<b.length;k+=1)if(b[k])try{$.push(await U[k])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let N=500,I;O!=null&&O.includes(A)?(N=A.status??N,I=A.error):A instanceof Ie?(N=A.status,I=A.body):I=await x(A,{params:l,url:c,route:{id:p.id}});const z=await Be(k,$,h);return z?await Z({url:c,params:l,branch:$.slice(0,z.idx).concat(z.node),status:N,error:I,route:p}):await Ge(c,{id:p.id},I,N)}else $.push(void 0);return await Z({url:c,params:l,branch:$,status:200,error:null,route:p,form:o?void 0:null})}async function Be(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:r,error:o,url:c,route:l}){const p={},h=await Ae();let m=null;if(h.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ie(c)}const v=await ge({loader:Ae,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Z({url:c,params:p,branch:[v,b],status:r,error:o,route:null})}function oe(r,o){if(We(r,e))return;const c=wt(r.pathname.slice(e.length)||"/");for(const l of Se){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:o,route:l,params:bt(p),url:r}}}function Fe({url:r,type:o,intent:c,delta:l}){var v,b;let p=!1;const h={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{p=!0}};return w||u.before_navigate.forEach(y=>y(m)),p?null:h}async function se({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:h,delta:m,nav_token:v,accepted:b,blocked:y}){const R=oe(r,!1),L=Fe({url:r,type:h,delta:m,intent:R});if(!L){y();return}Re(P),b(),w=!0,_&&K.navigating.set(L),await De(R,r,l,{scroll:o,keepfocus:c,details:p},v,()=>{w=!1,u.after_navigate.forEach(D=>D(L)),K.navigating.set(null)})}async function Ge(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await re({status:l,error:c,url:r,route:o}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function o(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ae(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const v=He(h,n);if(!v)return;const{url:b,external:y}=ve(v,e);if(y)return;const R=ce(v);R.reload||(m<=R.preload_data?Te(b):m<=R.preload_code&&ae(b.pathname))}function p(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:v}=ve(h,e);if(v)continue;const b=ce(h);b.reload||(b.preload_code===Ye.viewport&&c.observe(h),b.preload_code===Ye.eager&&ae(m.pathname))}}u.after_navigate.push(p),p()}return{after_navigate:r=>{Oe(()=>(u.after_navigate.push(r),()=>{const o=u.after_navigate.indexOf(r);u.after_navigate.splice(o,1)}))},before_navigate:r=>{Oe(()=>(u.before_navigate.push(r),()=>{const o=u.before_navigate.indexOf(r);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(r,o={})=>_e(r,o,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:o}=new URL(r,location.href);i.push(c=>c.href===o)}return je()},invalidateAll:()=>(j=!0,je()),preload_data:async r=>{const o=new URL(r,ze(document));await Te(o)},preload_code:ae,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const h=await Z({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=h.state,T.$set(h.props),le().then(Le)}}else if(r.type==="redirect")_e(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...J,form:r.data,status:r.status}};T.$set(o),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(h=>h(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(P);try{sessionStorage[tt]=JSON.stringify(te)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:h}=ve(c,e),m=ce(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||m.reload){Fe({url:l,type:"link"})||o.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){S=!0,Re(P),t.url=l,K.page.set({...J,url:l}),K.page.notify();return}se({url:l,scroll:m.noscroll?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var b;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((b=o.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const{noscroll:m,reload:v}=ce(o.target);v||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:h,scroll:m?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const l=o.state[q]-P;se({url:new URL(location.href),scroll:te[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:p,data:h,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=oe(v,!1)||{});let b;try{const y=c.map(async(R,L)=>{const D=h[L];return ge({loader:he[R],url:v,params:l,route:p,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await y[E]).data);return O},server_data_node:ye(D)})});b=await Z({url:v,params:l,branch:await Promise.all(y),status:r,error:o,form:m,route:Se.find(({id:R})=>R===p.id)??null})}catch(y){if(y instanceof xe){await ie(new URL(y.location,location.href));return}b=await re({status:y instanceof Ie?y.status:500,error:await x(y,{url:v,params:l,route:p}),url:v,route:p})}Ce(b)}}}async function et(a,e){var u;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await pe(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(u=s.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function x(a,e){return a instanceof Ie?a.body:zt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function rn({env:a,hydrate:e,paths:n,target:i,version:s}){mt(n),gt(s);const u=tn({target:i,base:n.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{rn as start};
