function On(){}function Wl(e){return e()}function Cc(){return Object.create(null)}function Ur(e){e.forEach(Wl)}function Zl(e){return typeof e=="function"}function Fm(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function zm(e){return Object.keys(e).length===0}function Vm(e,...t){if(e==null)return On;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function IE(e,t,n){e.$$.on_destroy.push(Vm(t,n))}function bE(e){return e==null?"":e}function SE(e,t,n){return e.set(n),t}function PE(e){return e&&Zl(e.destroy)?e.destroy:On}function LE(e,t){e.appendChild(t)}function AE(e,t,n){e.insertBefore(t,n||null)}function $m(e){e.parentNode.removeChild(e)}function CE(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function kE(e){return document.createElement(e)}function jl(e){return document.createTextNode(e)}function xE(){return jl(" ")}function RE(){return jl("")}function ME(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function qm(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function NE(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:qm(e,t,n)}function Hm(e){return Array.from(e.childNodes)}function OE(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function DE(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function Wm(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}let wr;function fr(e){wr=e}function Gl(){if(!wr)throw new Error("Function called outside component initialization");return wr}function UE(e){Gl().$$.on_mount.push(e)}function BE(){const e=Gl();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=Wm(t,n);r.slice().forEach(a=>{a.call(e,o)})}}}const ur=[],kc=[],Hs=[],nu=[],Zm=Promise.resolve();let iu=!1;function jm(){iu||(iu=!0,Zm.then(Kl))}function ru(e){Hs.push(e)}function FE(e){nu.push(e)}const Ua=new Set;let Ds=0;function Kl(){const e=wr;do{for(;Ds<ur.length;){const t=ur[Ds];Ds++,fr(t),Gm(t.$$)}for(fr(null),ur.length=0,Ds=0;kc.length;)kc.pop()();for(let t=0;t<Hs.length;t+=1){const n=Hs[t];Ua.has(n)||(Ua.add(n),n())}Hs.length=0}while(ur.length);for(;nu.length;)nu.pop()();iu=!1,Ua.clear(),fr(e)}function Gm(e){if(e.fragment!==null){e.update(),Ur(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ru)}}const Ws=new Set;let Rn;function zE(){Rn={r:0,c:[],p:Rn}}function VE(){Rn.r||Ur(Rn.c),Rn=Rn.p}function Jl(e,t){e&&e.i&&(Ws.delete(e),e.i(t))}function Km(e,t,n,r){if(e&&e.o){if(Ws.has(e))return;Ws.add(e),Rn.c.push(()=>{Ws.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const $E=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function qE(e,t){Km(e,1,1,()=>{t.delete(e.key)})}function HE(e,t,n,r,o,a,c,d,f,m,_,v){let E=e.length,P=a.length,C=E;const D={};for(;C--;)D[e[C].key]=C;const nt=[],mt=new Map,gt=new Map;for(C=P;C--;){const G=v(o,a,C),V=n(G);let b=c.get(V);b?r&&b.p(G,t):(b=m(V,G),b.c()),mt.set(V,nt[C]=b),V in D&&gt.set(V,Math.abs(C-D[V]))}const st=new Set,_t=new Set;function yt(G){Jl(G,1),G.m(d,_),c.set(G.key,G),_=G.first,P--}for(;E&&P;){const G=nt[P-1],V=e[E-1],b=G.key,x=V.key;G===V?(_=G.first,E--,P--):mt.has(x)?!c.has(b)||st.has(b)?yt(G):_t.has(x)?E--:gt.get(b)>gt.get(x)?(_t.add(b),yt(G)):(st.add(x),E--):(f(V,c),E--)}for(;E--;){const G=e[E];mt.has(G.key)||f(G,c)}for(;P;)yt(nt[P-1]);return nt}function WE(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function ZE(e){e&&e.c()}function Jm(e,t,n,r){const{fragment:o,on_mount:a,on_destroy:c,after_update:d}=e.$$;o&&o.m(t,n),r||ru(()=>{const f=a.map(Wl).filter(Zl);c?c.push(...f):Ur(f),e.$$.on_mount=[]}),d.forEach(ru)}function Xm(e,t){const n=e.$$;n.fragment!==null&&(Ur(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ym(e,t){e.$$.dirty[0]===-1&&(ur.push(e),jm(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function jE(e,t,n,r,o,a,c,d=[-1]){const f=wr;fr(e);const m=e.$$={fragment:null,ctx:null,props:a,update:On,not_equal:o,bound:Cc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Cc(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};c&&c(m.root);let _=!1;if(m.ctx=n?n(e,t.props||{},(v,E,...P)=>{const C=P.length?P[0]:E;return m.ctx&&o(m.ctx[v],m.ctx[v]=C)&&(!m.skip_bound&&m.bound[v]&&m.bound[v](C),_&&Ym(e,v)),E}):[],m.update(),_=!0,Ur(m.before_update),m.fragment=r?r(m.ctx):!1,t.target){if(t.hydrate){const v=Hm(t.target);m.fragment&&m.fragment.l(v),v.forEach($m)}else m.fragment&&m.fragment.c();t.intro&&Jl(e.$$.fragment),Jm(e,t.target,t.anchor,t.customElement),Kl()}fr(f)}class GE{$destroy(){Xm(this,1),this.$destroy=On}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!zm(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Qm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},su={exports:{}};/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(Qm,function(n){var r="1.7.1";function o(i){var s,u,h,l;for(u=1,h=arguments.length;u<h;u++){l=arguments[u];for(s in l)i[s]=l[s]}return i}var a=Object.create||function(){function i(){}return function(s){return i.prototype=s,new i}}();function c(i,s){var u=Array.prototype.slice;if(i.bind)return i.bind.apply(i,u.call(arguments,1));var h=u.call(arguments,2);return function(){return i.apply(s,h.length?h.concat(u.call(arguments)):arguments)}}var d=0;function f(i){return i._leaflet_id=i._leaflet_id||++d,i._leaflet_id}function m(i,s,u){var h,l,p,g;return g=function(){h=!1,l&&(p.apply(u,l),l=!1)},p=function(){h?l=arguments:(i.apply(u,arguments),setTimeout(g,s),h=!0)},p}function _(i,s,u){var h=s[1],l=s[0],p=h-l;return i===h&&u?i:((i-l)%p+p)%p+l}function v(){return!1}function E(i,s){var u=Math.pow(10,s===void 0?6:s);return Math.round(i*u)/u}function P(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function C(i){return P(i).split(/\s+/)}function D(i,s){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var u in s)i.options[u]=s[u];return i.options}function nt(i,s,u){var h=[];for(var l in i)h.push(encodeURIComponent(u?l.toUpperCase():l)+"="+encodeURIComponent(i[l]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var mt=/\{ *([\w_-]+) *\}/g;function gt(i,s){return i.replace(mt,function(u,h){var l=s[h];if(l===void 0)throw new Error("No value provided for variable "+u);return typeof l=="function"&&(l=l(s)),l})}var st=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function _t(i,s){for(var u=0;u<i.length;u++)if(i[u]===s)return u;return-1}var yt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function G(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var V=0;function b(i){var s=+new Date,u=Math.max(0,16-(s-V));return V=s+u,window.setTimeout(i,u)}var x=window.requestAnimationFrame||G("RequestAnimationFrame")||b,U=window.cancelAnimationFrame||G("CancelAnimationFrame")||G("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function k(i,s,u){if(u&&x===b)i.call(s);else return x.call(window,c(i,s))}function X(i){i&&U.call(window,i)}var Tn={extend:o,create:a,bind:c,lastId:d,stamp:f,throttle:m,wrapNum:_,falseFn:v,formatNum:E,trim:P,splitWords:C,setOptions:D,getParamString:nt,template:gt,isArray:st,indexOf:_t,emptyImageUrl:yt,requestFn:x,cancelFn:U,requestAnimFrame:k,cancelAnimFrame:X};function Ht(){}Ht.extend=function(i){var s=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=s.__super__=this.prototype,h=a(u);h.constructor=s,s.prototype=h;for(var l in this)Object.prototype.hasOwnProperty.call(this,l)&&l!=="prototype"&&l!=="__super__"&&(s[l]=this[l]);return i.statics&&(o(s,i.statics),delete i.statics),i.includes&&(bt(i.includes),o.apply(null,[h].concat(i.includes)),delete i.includes),h.options&&(i.options=o(a(h.options),i.options)),o(h,i),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var p=0,g=h._initHooks.length;p<g;p++)h._initHooks[p].call(this)}},s},Ht.include=function(i){return o(this.prototype,i),this},Ht.mergeOptions=function(i){return o(this.prototype.options,i),this},Ht.addInitHook=function(i){var s=Array.prototype.slice.call(arguments,1),u=typeof i=="function"?i:function(){this[i].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function bt(i){if(!(typeof L=="undefined"||!L||!L.Mixin)){i=st(i)?i:[i];for(var s=0;s<i.length;s++)i[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var dt={on:function(i,s,u){if(typeof i=="object")for(var h in i)this._on(h,i[h],s);else{i=C(i);for(var l=0,p=i.length;l<p;l++)this._on(i[l],s,u)}return this},off:function(i,s,u){if(!i)delete this._events;else if(typeof i=="object")for(var h in i)this._off(h,i[h],s);else{i=C(i);for(var l=0,p=i.length;l<p;l++)this._off(i[l],s,u)}return this},_on:function(i,s,u){this._events=this._events||{};var h=this._events[i];h||(h=[],this._events[i]=h),u===this&&(u=void 0);for(var l={fn:s,ctx:u},p=h,g=0,y=p.length;g<y;g++)if(p[g].fn===s&&p[g].ctx===u)return;p.push(l)},_off:function(i,s,u){var h,l,p;if(!!this._events&&(h=this._events[i],!!h)){if(!s){for(l=0,p=h.length;l<p;l++)h[l].fn=v;delete this._events[i];return}if(u===this&&(u=void 0),h)for(l=0,p=h.length;l<p;l++){var g=h[l];if(g.ctx===u&&g.fn===s){g.fn=v,this._firingCount&&(this._events[i]=h=h.slice()),h.splice(l,1);return}}}},fire:function(i,s,u){if(!this.listens(i,u))return this;var h=o({},s,{type:i,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var l=this._events[i];if(l){this._firingCount=this._firingCount+1||1;for(var p=0,g=l.length;p<g;p++){var y=l[p];y.fn.call(y.ctx||this,h)}this._firingCount--}}return u&&this._propagateEvent(h),this},listens:function(i,s){var u=this._events&&this._events[i];if(u&&u.length)return!0;if(s){for(var h in this._eventParents)if(this._eventParents[h].listens(i,s))return!0}return!1},once:function(i,s,u){if(typeof i=="object"){for(var h in i)this.once(h,i[h],s);return this}var l=c(function(){this.off(i,s,u).off(i,l,u)},this);return this.on(i,s,u).on(i,l,u)},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[f(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[f(i)],this},_propagateEvent:function(i){for(var s in this._eventParents)this._eventParents[s].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};dt.addEventListener=dt.on,dt.removeEventListener=dt.clearAllEventListeners=dt.off,dt.addOneTimeEventListener=dt.once,dt.fireEvent=dt.fire,dt.hasEventListeners=dt.listens;var de=Ht.extend(dt);function q(i,s,u){this.x=u?Math.round(i):i,this.y=u?Math.round(s):s}var Oe=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};q.prototype={clone:function(){return new q(this.x,this.y)},add:function(i){return this.clone()._add(z(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(z(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new q(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new q(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Oe(this.x),this.y=Oe(this.y),this},distanceTo:function(i){i=z(i);var s=i.x-this.x,u=i.y-this.y;return Math.sqrt(s*s+u*u)},equals:function(i){return i=z(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=z(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function z(i,s,u){return i instanceof q?i:st(i)?new q(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new q(i.x,i.y):new q(i,s,u)}function Y(i,s){if(!!i)for(var u=s?[i,s]:i,h=0,l=u.length;h<l;h++)this.extend(u[h])}Y.prototype={extend:function(i){return i=z(i),!this.min&&!this.max?(this.min=i.clone(),this.max=i.clone()):(this.min.x=Math.min(i.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(i.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(i){return new q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return new q(this.min.x,this.max.y)},getTopRight:function(){return new q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var s,u;return typeof i[0]=="number"||i instanceof q?i=z(i):i=at(i),i instanceof Y?(s=i.min,u=i.max):s=u=i,s.x>=this.min.x&&u.x<=this.max.x&&s.y>=this.min.y&&u.y<=this.max.y},intersects:function(i){i=at(i);var s=this.min,u=this.max,h=i.min,l=i.max,p=l.x>=s.x&&h.x<=u.x,g=l.y>=s.y&&h.y<=u.y;return p&&g},overlaps:function(i){i=at(i);var s=this.min,u=this.max,h=i.min,l=i.max,p=l.x>s.x&&h.x<u.x,g=l.y>s.y&&h.y<u.y;return p&&g},isValid:function(){return!!(this.min&&this.max)}};function at(i,s){return!i||i instanceof Y?i:new Y(i,s)}function wt(i,s){if(!!i)for(var u=s?[i,s]:i,h=0,l=u.length;h<l;h++)this.extend(u[h])}wt.prototype={extend:function(i){var s=this._southWest,u=this._northEast,h,l;if(i instanceof Q)h=i,l=i;else if(i instanceof wt){if(h=i._southWest,l=i._northEast,!h||!l)return this}else return i?this.extend(ft(i)||et(i)):this;return!s&&!u?(this._southWest=new Q(h.lat,h.lng),this._northEast=new Q(l.lat,l.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),u.lat=Math.max(l.lat,u.lat),u.lng=Math.max(l.lng,u.lng)),this},pad:function(i){var s=this._southWest,u=this._northEast,h=Math.abs(s.lat-u.lat)*i,l=Math.abs(s.lng-u.lng)*i;return new wt(new Q(s.lat-h,s.lng-l),new Q(u.lat+h,u.lng+l))},getCenter:function(){return new Q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Q(this.getNorth(),this.getWest())},getSouthEast:function(){return new Q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof Q||"lat"in i?i=ft(i):i=et(i);var s=this._southWest,u=this._northEast,h,l;return i instanceof wt?(h=i.getSouthWest(),l=i.getNorthEast()):h=l=i,h.lat>=s.lat&&l.lat<=u.lat&&h.lng>=s.lng&&l.lng<=u.lng},intersects:function(i){i=et(i);var s=this._southWest,u=this._northEast,h=i.getSouthWest(),l=i.getNorthEast(),p=l.lat>=s.lat&&h.lat<=u.lat,g=l.lng>=s.lng&&h.lng<=u.lng;return p&&g},overlaps:function(i){i=et(i);var s=this._southWest,u=this._northEast,h=i.getSouthWest(),l=i.getNorthEast(),p=l.lat>s.lat&&h.lat<u.lat,g=l.lng>s.lng&&h.lng<u.lng;return p&&g},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,s){return i?(i=et(i),this._southWest.equals(i.getSouthWest(),s)&&this._northEast.equals(i.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function et(i,s){return i instanceof wt?i:new wt(i,s)}function Q(i,s,u){if(isNaN(i)||isNaN(s))throw new Error("Invalid LatLng object: ("+i+", "+s+")");this.lat=+i,this.lng=+s,u!==void 0&&(this.alt=+u)}Q.prototype={equals:function(i,s){if(!i)return!1;i=ft(i);var u=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return u<=(s===void 0?1e-9:s)},toString:function(i){return"LatLng("+E(this.lat,i)+", "+E(this.lng,i)+")"},distanceTo:function(i){return Se.distance(this,ft(i))},wrap:function(){return Se.wrapLatLng(this)},toBounds:function(i){var s=180*i/40075017,u=s/Math.cos(Math.PI/180*this.lat);return et([this.lat-s,this.lng-u],[this.lat+s,this.lng+u])},clone:function(){return new Q(this.lat,this.lng,this.alt)}};function ft(i,s,u){return i instanceof Q?i:st(i)&&typeof i[0]!="object"?i.length===3?new Q(i[0],i[1],i[2]):i.length===2?new Q(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new Q(i.lat,"lng"in i?i.lng:i.lon,i.alt):s===void 0?null:new Q(i,s,u)}var Wt={latLngToPoint:function(i,s){var u=this.projection.project(i),h=this.scale(s);return this.transformation._transform(u,h)},pointToLatLng:function(i,s){var u=this.scale(s),h=this.transformation.untransform(i,u);return this.projection.unproject(h)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var s=this.projection.bounds,u=this.scale(i),h=this.transformation.transform(s.min,u),l=this.transformation.transform(s.max,u);return new Y(h,l)},infinite:!1,wrapLatLng:function(i){var s=this.wrapLng?_(i.lng,this.wrapLng,!0):i.lng,u=this.wrapLat?_(i.lat,this.wrapLat,!0):i.lat,h=i.alt;return new Q(u,s,h)},wrapLatLngBounds:function(i){var s=i.getCenter(),u=this.wrapLatLng(s),h=s.lat-u.lat,l=s.lng-u.lng;if(h===0&&l===0)return i;var p=i.getSouthWest(),g=i.getNorthEast(),y=new Q(p.lat-h,p.lng-l),T=new Q(g.lat-h,g.lng-l);return new wt(y,T)}},Se=o({},Wt,{wrapLng:[-180,180],R:6371e3,distance:function(i,s){var u=Math.PI/180,h=i.lat*u,l=s.lat*u,p=Math.sin((s.lat-i.lat)*u/2),g=Math.sin((s.lng-i.lng)*u/2),y=p*p+Math.cos(h)*Math.cos(l)*g*g,T=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));return this.R*T}}),hs=6378137,Ye={R:hs,MAX_LATITUDE:85.0511287798,project:function(i){var s=Math.PI/180,u=this.MAX_LATITUDE,h=Math.max(Math.min(u,i.lat),-u),l=Math.sin(h*s);return new q(this.R*i.lng*s,this.R*Math.log((1+l)/(1-l))/2)},unproject:function(i){var s=180/Math.PI;return new Q((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*s,i.x*s/this.R)},bounds:function(){var i=hs*Math.PI;return new Y([-i,-i],[i,i])}()};function zi(i,s,u,h){if(st(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=s,this._c=u,this._d=h}zi.prototype={transform:function(i,s){return this._transform(i.clone(),s)},_transform:function(i,s){return s=s||1,i.x=s*(this._a*i.x+this._b),i.y=s*(this._c*i.y+this._d),i},untransform:function(i,s){return s=s||1,new q((i.x/s-this._b)/this._a,(i.y/s-this._d)/this._c)}};function Qe(i,s,u,h){return new zi(i,s,u,h)}var Yn=o({},Se,{code:"EPSG:3857",projection:Ye,transformation:function(){var i=.5/(Math.PI*Ye.R);return Qe(i,.5,-i,.5)}()}),ta=o({},Yn,{code:"EPSG:900913"});function cs(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ls(i,s){var u="",h,l,p,g,y,T;for(h=0,p=i.length;h<p;h++){for(y=i[h],l=0,g=y.length;l<g;l++)T=y[l],u+=(l?"L":"M")+T.x+" "+T.y;u+=s?ei?"z":"x":""}return u||"M0 0"}var Vi=document.documentElement.style,Qn="ActiveXObject"in window,tn=Qn&&!document.addEventListener,ti="msLaunchUri"in navigator&&!("documentMode"in document),$i=jt("webkit"),En=jt("android"),In=jt("android 2")||jt("android 3"),ea=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ds=En&&jt("Google")&&ea<537&&!("AudioNode"in window),De=!!window.opera,Pe=!ti&&jt("chrome"),Ue=jt("gecko")&&!$i&&!De&&!Qn,Zt=!Pe&&jt("safari"),_e=jt("phantom"),Be="OTransition"in Vi,fs=navigator.platform.indexOf("Win")===0,qi=Qn&&"transition"in Vi,Hi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!In,ps="MozPerspective"in Vi,ee=!window.L_DISABLE_3D&&(qi||Hi||ps)&&!Be&&!_e,en=typeof orientation!="undefined"||jt("mobile"),na=en&&$i,ia=en&&Hi,Le=!window.PointerEvent&&window.MSPointerEvent,fe=!!(window.PointerEvent||Le),pe=!window.L_NO_TOUCH&&(fe||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),ms=en&&De,ra=en&&Ue,Ae=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,se=function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",v,s),window.removeEventListener("testPassiveEventSupport",v,s)}catch{}return i}(),Wi=function(){return!!document.createElement("canvas").getContext}(),ei=!!(document.createElementNS&&cs("svg").createSVGRect),bn=!ei&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var s=i.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}();function jt(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var gs={ie:Qn,ielt9:tn,edge:ti,webkit:$i,android:En,android23:In,androidStock:ds,opera:De,chrome:Pe,gecko:Ue,safari:Zt,phantom:_e,opera12:Be,win:fs,ie3d:qi,webkit3d:Hi,gecko3d:ps,any3d:ee,mobile:en,mobileWebkit:na,mobileWebkit3d:ia,msPointer:Le,pointer:fe,touch:pe,mobileOpera:ms,mobileGecko:ra,retina:Ae,passiveEvents:se,canvas:Wi,svg:ei,vml:bn},ni=Le?"MSPointerDown":"pointerdown",Gt=Le?"MSPointerMove":"pointermove",Zi=Le?"MSPointerUp":"pointerup",ji=Le?"MSPointerCancel":"pointercancel",nn={},Gi=!1;function sa(i,s,u,h){return s==="touchstart"?Ki(i,u,h):s==="touchmove"?vs(i,u,h):s==="touchend"&&ha(i,u,h),this}function oa(i,s,u){var h=i["_leaflet_"+s+u];return s==="touchstart"?i.removeEventListener(ni,h,!1):s==="touchmove"?i.removeEventListener(Gt,h,!1):s==="touchend"&&(i.removeEventListener(Zi,h,!1),i.removeEventListener(ji,h,!1)),this}function Ki(i,s,u){var h=c(function(l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&ge(l),Ji(l,s)});i["_leaflet_touchstart"+u]=h,i.addEventListener(ni,h,!1),Gi||(document.addEventListener(ni,aa,!0),document.addEventListener(Gt,ua,!0),document.addEventListener(Zi,_s,!0),document.addEventListener(ji,_s,!0),Gi=!0)}function aa(i){nn[i.pointerId]=i}function ua(i){nn[i.pointerId]&&(nn[i.pointerId]=i)}function _s(i){delete nn[i.pointerId]}function Ji(i,s){i.touches=[];for(var u in nn)i.touches.push(nn[u]);i.changedTouches=[i],s(i)}function vs(i,s,u){var h=function(l){l.pointerType===(l.MSPOINTER_TYPE_MOUSE||"mouse")&&l.buttons===0||Ji(l,s)};i["_leaflet_touchmove"+u]=h,i.addEventListener(Gt,h,!1)}function ha(i,s,u){var h=function(l){Ji(l,s)};i["_leaflet_touchend"+u]=h,i.addEventListener(Zi,h,!1),i.addEventListener(ji,h,!1)}var Sn=Le?"MSPointerDown":fe?"pointerdown":"touchstart",ii=Le?"MSPointerUp":fe?"pointerup":"touchend",rn="_leaflet_";function w(i,s,u){var h,l,p=!1,g=250;function y(I){if(fe){if(!I.isPrimary||I.pointerType==="mouse")return}else if(I.touches.length>1)return;var M=Date.now(),B=M-(h||M);l=I.touches?I.touches[0]:I,p=B>0&&B<=g,h=M}function T(I){if(p&&!l.cancelBubble){if(fe){if(I.pointerType==="mouse")return;var M={},B,ht;for(ht in l)B=l[ht],M[ht]=B&&B.bind?B.bind(l):B;l=M}l.type="dblclick",l.button=0,s(l),h=null}}return i[rn+Sn+u]=y,i[rn+ii+u]=T,i[rn+"dblclick"+u]=s,i.addEventListener(Sn,y,se?{passive:!1}:!1),i.addEventListener(ii,T,se?{passive:!1}:!1),i.addEventListener("dblclick",s,!1),this}function A(i,s){var u=i[rn+Sn+s],h=i[rn+ii+s],l=i[rn+"dblclick"+s];return i.removeEventListener(Sn,u,se?{passive:!1}:!1),i.removeEventListener(ii,h,se?{passive:!1}:!1),i.removeEventListener("dblclick",l,!1),this}var R=Ts(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),j=Ts(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ct=j==="webkitTransition"||j==="OTransition"?j+"End":"transitionend";function ve(i){return typeof i=="string"?document.getElementById(i):i}function oe(i,s){var u=i.style[s]||i.currentStyle&&i.currentStyle[s];if((!u||u==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(i,null);u=h?h[s]:null}return u==="auto"?null:u}function rt(i,s,u){var h=document.createElement(i);return h.className=s||"",u&&u.appendChild(h),h}function St(i){var s=i.parentNode;s&&s.removeChild(i)}function ys(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function ri(i){var s=i.parentNode;s&&s.lastChild!==i&&s.appendChild(i)}function si(i){var s=i.parentNode;s&&s.firstChild!==i&&s.insertBefore(i,s.firstChild)}function ca(i,s){if(i.classList!==void 0)return i.classList.contains(s);var u=ws(i);return u.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(u)}function tt(i,s){if(i.classList!==void 0)for(var u=C(s),h=0,l=u.length;h<l;h++)i.classList.add(u[h]);else if(!ca(i,s)){var p=ws(i);la(i,(p?p+" ":"")+s)}}function Lt(i,s){i.classList!==void 0?i.classList.remove(s):la(i,P((" "+ws(i)+" ").replace(" "+s+" "," ")))}function la(i,s){i.className.baseVal===void 0?i.className=s:i.className.baseVal=s}function ws(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function me(i,s){"opacity"in i.style?i.style.opacity=s:"filter"in i.style&&Zp(i,s)}function Zp(i,s){var u=!1,h="DXImageTransform.Microsoft.Alpha";try{u=i.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),u?(u.Enabled=s!==100,u.Opacity=s):i.style.filter+=" progid:"+h+"(opacity="+s+")"}function Ts(i){for(var s=document.documentElement.style,u=0;u<i.length;u++)if(i[u]in s)return i[u];return!1}function Pn(i,s,u){var h=s||new q(0,0);i.style[R]=(qi?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(u?" scale("+u+")":"")}function kt(i,s){i._leaflet_pos=s,ee?Pn(i,s):(i.style.left=s.x+"px",i.style.top=s.y+"px")}function sn(i){return i._leaflet_pos||new q(0,0)}var Xi,Yi,da;if("onselectstart"in document)Xi=function(){it(window,"selectstart",ge)},Yi=function(){At(window,"selectstart",ge)};else{var Qi=Ts(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Xi=function(){if(Qi){var i=document.documentElement.style;da=i[Qi],i[Qi]="none"}},Yi=function(){Qi&&(document.documentElement.style[Qi]=da,da=void 0)}}function fa(){it(window,"dragstart",ge)}function pa(){At(window,"dragstart",ge)}var Es,ma;function ga(i){for(;i.tabIndex===-1;)i=i.parentNode;!i.style||(Is(),Es=i,ma=i.style.outline,i.style.outline="none",it(window,"keydown",Is))}function Is(){!Es||(Es.style.outline=ma,Es=void 0,ma=void 0,At(window,"keydown",Is))}function Wh(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function _a(i){var s=i.getBoundingClientRect();return{x:s.width/i.offsetWidth||1,y:s.height/i.offsetHeight||1,boundingClientRect:s}}var jp={TRANSFORM:R,TRANSITION:j,TRANSITION_END:Ct,get:ve,getStyle:oe,create:rt,remove:St,empty:ys,toFront:ri,toBack:si,hasClass:ca,addClass:tt,removeClass:Lt,setClass:la,getClass:ws,setOpacity:me,testProp:Ts,setTransform:Pn,setPosition:kt,getPosition:sn,disableTextSelection:Xi,enableTextSelection:Yi,disableImageDrag:fa,enableImageDrag:pa,preventOutline:ga,restoreOutline:Is,getSizedParentNode:Wh,getScale:_a};function it(i,s,u,h){if(typeof s=="object")for(var l in s)bs(i,l,s[l],u);else{s=C(s);for(var p=0,g=s.length;p<g;p++)bs(i,s[p],u,h)}return this}var ye="_leaflet_events";function At(i,s,u,h){if(typeof s=="object")for(var l in s)ya(i,l,s[l],u);else if(s){s=C(s);for(var p=0,g=s.length;p<g;p++)ya(i,s[p],u,h)}else{for(var y in i[ye])ya(i,y,i[ye][y]);delete i[ye]}return this}function Zh(){if(fe)return!(ti||Zt)}var va={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function bs(i,s,u,h){var l=s+f(u)+(h?"_"+f(h):"");if(i[ye]&&i[ye][l])return this;var p=function(y){return u.call(h||i,y||window.event)},g=p;fe&&s.indexOf("touch")===0?sa(i,s,p,l):pe&&s==="dblclick"&&!Zh()?w(i,p,l):"addEventListener"in i?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?i.addEventListener(va[s]||s,p,se?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(p=function(y){y=y||window.event,Ss(i,y)&&g(y)},i.addEventListener(va[s],p,!1)):i.addEventListener(s,g,!1):"attachEvent"in i&&i.attachEvent("on"+s,p),i[ye]=i[ye]||{},i[ye][l]=p}function ya(i,s,u,h){var l=s+f(u)+(h?"_"+f(h):""),p=i[ye]&&i[ye][l];if(!p)return this;fe&&s.indexOf("touch")===0?oa(i,s,l):pe&&s==="dblclick"&&!Zh()?A(i,l):"removeEventListener"in i?i.removeEventListener(va[s]||s,p,!1):"detachEvent"in i&&i.detachEvent("on"+s,p),i[ye][l]=null}function Ln(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,Ia(i),this}function wa(i){return bs(i,"wheel",Ln),this}function tr(i){return it(i,"mousedown touchstart dblclick",Ln),bs(i,"click",Ea),this}function ge(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Fe(i){return ge(i),Ln(i),this}function jh(i,s){if(!s)return new q(i.clientX,i.clientY);var u=_a(s),h=u.boundingClientRect;return new q((i.clientX-h.left)/u.x-s.clientLeft,(i.clientY-h.top)/u.y-s.clientTop)}var Gp=fs&&Pe?2*window.devicePixelRatio:Ue?window.devicePixelRatio:1;function Gh(i){return ti?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/Gp:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}var Ta={};function Ea(i){Ta[i.type]=!0}function Ia(i){var s=Ta[i.type];return Ta[i.type]=!1,s}function Ss(i,s){var u=s.relatedTarget;if(!u)return!0;try{for(;u&&u!==i;)u=u.parentNode}catch{return!1}return u!==i}var Kp={on:it,off:At,stopPropagation:Ln,disableScrollPropagation:wa,disableClickPropagation:tr,preventDefault:ge,stop:Fe,getMousePosition:jh,getWheelDelta:Gh,fakeStop:Ea,skipped:Ia,isExternalTarget:Ss,addListener:it,removeListener:At},Kh=de.extend({run:function(i,s,u,h){this.stop(),this._el=i,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=sn(i),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){!this._inProgress||(this._step(!0),this._complete())},_animate:function(){this._animId=k(this._animate,this),this._step()},_step:function(i){var s=+new Date-this._startTime,u=this._duration*1e3;s<u?this._runFrame(this._easeOut(s/u),i):(this._runFrame(1),this._complete())},_runFrame:function(i,s){var u=this._startPos.add(this._offset.multiplyBy(i));s&&u._round(),kt(this._el,u),this.fire("step")},_complete:function(){X(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ut=de.extend({options:{crs:Yn,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,s){s=D(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ft(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=j&&ee&&!ms&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),it(this._proxy,Ct,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,s,u){if(s=s===void 0?this._zoom:this._limitZoom(s),i=this._limitCenter(ft(i),s,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=o({animate:u.animate},u.zoom),u.pan=o({animate:u.animate,duration:u.duration},u.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,s,u.zoom):this._tryAnimatedPan(i,u.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(i,s),this},setZoom:function(i,s){return this._loaded?this.setView(this.getCenter(),i,{zoom:s}):(this._zoom=i,this)},zoomIn:function(i,s){return i=i||(ee?this.options.zoomDelta:1),this.setZoom(this._zoom+i,s)},zoomOut:function(i,s){return i=i||(ee?this.options.zoomDelta:1),this.setZoom(this._zoom-i,s)},setZoomAround:function(i,s,u){var h=this.getZoomScale(s),l=this.getSize().divideBy(2),p=i instanceof q?i:this.latLngToContainerPoint(i),g=p.subtract(l).multiplyBy(1-1/h),y=this.containerPointToLatLng(l.add(g));return this.setView(y,s,{zoom:u})},_getBoundsCenterZoom:function(i,s){s=s||{},i=i.getBounds?i.getBounds():et(i);var u=z(s.paddingTopLeft||s.padding||[0,0]),h=z(s.paddingBottomRight||s.padding||[0,0]),l=this.getBoundsZoom(i,!1,u.add(h));if(l=typeof s.maxZoom=="number"?Math.min(s.maxZoom,l):l,l===1/0)return{center:i.getCenter(),zoom:l};var p=h.subtract(u).divideBy(2),g=this.project(i.getSouthWest(),l),y=this.project(i.getNorthEast(),l),T=this.unproject(g.add(y).divideBy(2).add(p),l);return{center:T,zoom:l}},fitBounds:function(i,s){if(i=et(i),!i.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(i,s);return this.setView(u.center,u.zoom,s)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,s){return this.setView(i,this._zoom,{pan:s})},panBy:function(i,s){if(i=z(i).round(),s=s||{},!i.x&&!i.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Kh,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){tt(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,u,s.duration||.25,s.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,s,u){if(u=u||{},u.animate===!1||!ee)return this.setView(i,s,u);this._stop();var h=this.project(this.getCenter()),l=this.project(i),p=this.getSize(),g=this._zoom;i=ft(i),s=s===void 0?g:s;var y=Math.max(p.x,p.y),T=y*this.getZoomScale(g,s),I=l.distanceTo(h)||1,M=1.42,B=M*M;function ht(xt){var Os=xt?-1:1,Om=xt?T:y,Dm=T*T-y*y+Os*B*B*I*I,Um=2*Om*B*I,Da=Dm/Um,Ac=Math.sqrt(Da*Da+1)-Da,Bm=Ac<1e-9?-18:Math.log(Ac);return Bm}function He(xt){return(Math.exp(xt)-Math.exp(-xt))/2}function kn(xt){return(Math.exp(xt)+Math.exp(-xt))/2}function Ns(xt){return He(xt)/kn(xt)}var an=ht(0);function Oa(xt){return y*(kn(an)/kn(an+M*xt))}function xm(xt){return y*(kn(an)*Ns(an+M*xt)-He(an))/B}function Rm(xt){return 1-Math.pow(1-xt,1.5)}var Mm=Date.now(),Pc=(ht(1)-an)/M,Nm=u.duration?1e3*u.duration:1e3*Pc*.8;function Lc(){var xt=(Date.now()-Mm)/Nm,Os=Rm(xt)*Pc;xt<=1?(this._flyToFrame=k(Lc,this),this._move(this.unproject(h.add(l.subtract(h).multiplyBy(xm(Os)/I)),g),this.getScaleZoom(y/Oa(Os),g),{flyTo:!0})):this._move(i,s)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),Lc.call(this),this},flyToBounds:function(i,s){var u=this._getBoundsCenterZoom(i,s);return this.flyTo(u.center,u.zoom,s)},setMaxBounds:function(i){if(i=et(i),i.isValid())this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds);else return this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds);return this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)},setMinZoom:function(i){var s=this.options.minZoom;return this.options.minZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var s=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,s){this._enforcingBounds=!0;var u=this.getCenter(),h=this._limitCenter(u,this._zoom,et(i));return u.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(i,s){s=s||{};var u=z(s.paddingTopLeft||s.padding||[0,0]),h=z(s.paddingBottomRight||s.padding||[0,0]),l=this.getCenter(),p=this.project(l),g=this.project(i),y=this.getPixelBounds(),T=y.getSize().divideBy(2),I=at([y.min.add(u),y.max.subtract(h)]);if(!I.contains(g)){this._enforcingBounds=!0;var M=p.subtract(g),B=z(g.x+M.x,g.y+M.y);(g.x<I.min.x||g.x>I.max.x)&&(B.x=p.x-M.x,M.x>0?B.x+=T.x-u.x:B.x-=T.x-h.x),(g.y<I.min.y||g.y>I.max.y)&&(B.y=p.y-M.y,M.y>0?B.y+=T.y-u.y:B.y-=T.y-h.y),this.panTo(this.unproject(B),s),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),h=s.divideBy(2).round(),l=u.divideBy(2).round(),p=h.subtract(l);return!p.x&&!p.y?this:(i.animate&&i.pan?this.panBy(p):(i.pan&&this._rawPanBy(p),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=c(this._handleGeolocationResponse,this),u=c(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,u,i):navigator.geolocation.getCurrentPosition(s,u,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){var s=i.code,u=i.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+u+"."})},_handleGeolocationResponse:function(i){var s=i.coords.latitude,u=i.coords.longitude,h=new Q(s,u),l=h.toBounds(i.coords.accuracy*2),p=this._locateOptions;if(p.setView){var g=this.getBoundsZoom(l);this.setView(h,p.maxZoom?Math.min(g,p.maxZoom):g)}var y={latlng:h,bounds:l,timestamp:i.timestamp};for(var T in i.coords)typeof i.coords[T]=="number"&&(y[T]=i.coords[T]);this.fire("locationfound",y)},addHandler:function(i,s){if(!s)return this;var u=this[i]=new s(this);return this._handlers.push(u),this.options[i]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),St(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(X(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)St(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,s){var u="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),h=rt("div",u,s||this._mapPane);return i&&(this._panes[i]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),s=this.unproject(i.getBottomLeft()),u=this.unproject(i.getTopRight());return new wt(s,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,s,u){i=et(i),u=z(u||[0,0]);var h=this.getZoom()||0,l=this.getMinZoom(),p=this.getMaxZoom(),g=i.getNorthWest(),y=i.getSouthEast(),T=this.getSize().subtract(u),I=at(this.project(y,h),this.project(g,h)).getSize(),M=ee?this.options.zoomSnap:1,B=T.x/I.x,ht=T.y/I.y,He=s?Math.max(B,ht):Math.min(B,ht);return h=this.getScaleZoom(He,h),M&&(h=Math.round(h/(M/100))*(M/100),h=s?Math.ceil(h/M)*M:Math.floor(h/M)*M),Math.max(l,Math.min(p,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new q(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,s){var u=this._getTopLeftPoint(i,s);return new Y(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,s){var u=this.options.crs;return s=s===void 0?this._zoom:s,u.scale(i)/u.scale(s)},getScaleZoom:function(i,s){var u=this.options.crs;s=s===void 0?this._zoom:s;var h=u.zoom(i*u.scale(s));return isNaN(h)?1/0:h},project:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ft(i),s)},unproject:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(z(i),s)},layerPointToLatLng:function(i){var s=z(i).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(i){var s=this.project(ft(i))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ft(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(et(i))},distance:function(i,s){return this.options.crs.distance(ft(i),ft(s))},containerPointToLayerPoint:function(i){return z(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return z(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var s=this.containerPointToLayerPoint(z(i));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ft(i)))},mouseEventToContainerPoint:function(i){return jh(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var s=this._container=ve(i);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");it(s,"scroll",this._onScroll,this),this._containerId=f(s)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&ee,tt(i,"leaflet-container"+(pe?" leaflet-touch":"")+(Ae?" leaflet-retina":"")+(tn?" leaflet-oldie":"")+(Zt?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=oe(i,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),kt(this._mapPane,new q(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(tt(i.markerPane,"leaflet-zoom-hide"),tt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,s){kt(this._mapPane,new q(0,0));var u=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var h=this._zoom!==s;this._moveStart(h,!1)._move(i,s)._moveEnd(h),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(i,s){return i&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(i,s,u){s===void 0&&(s=this._zoom);var h=this._zoom!==s;return this._zoom=s,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),(h||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return X(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){kt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[f(this._container)]=this;var s=i?At:it;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),ee&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){X(this._resizeRequest),this._resizeRequest=k(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,s){for(var u=[],h,l=s==="mouseout"||s==="mouseover",p=i.target||i.srcElement,g=!1;p;){if(h=this._targets[f(p)],h&&(s==="click"||s==="preclick")&&!i._simulated&&this._draggableMoved(h)){g=!0;break}if(h&&h.listens(s,!0)&&(l&&!Ss(p,i)||(u.push(h),l))||p===this._container)break;p=p.parentNode}return!u.length&&!g&&!l&&Ss(p,i)&&(u=[this]),u},_handleDOMEvent:function(i){if(!(!this._loaded||Ia(i))){var s=i.type;(s==="mousedown"||s==="keypress"||s==="keyup"||s==="keydown")&&ga(i.target||i.srcElement),this._fireDOMEvent(i,s)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,s,u){if(i.type==="click"){var h=o({},i);h.type="preclick",this._fireDOMEvent(h,h.type,u)}if(!i._stopped&&(u=(u||[]).concat(this._findEventTargets(i,s)),!!u.length)){var l=u[0];s==="contextmenu"&&l.listens(s,!0)&&ge(i);var p={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var g=l.getLatLng&&(!l._radius||l._radius<=10);p.containerPoint=g?this.latLngToContainerPoint(l.getLatLng()):this.mouseEventToContainerPoint(i),p.layerPoint=this.containerPointToLayerPoint(p.containerPoint),p.latlng=g?l.getLatLng():this.layerPointToLatLng(p.layerPoint)}for(var y=0;y<u.length;y++)if(u[y].fire(s,p,!0),p.originalEvent._stopped||u[y].options.bubblingMouseEvents===!1&&_t(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,s=this._handlers.length;i<s;i++)this._handlers[i].disable()},whenReady:function(i,s){return this._loaded?i.call(s||this,{target:this}):this.on("load",i,s),this},_getMapPanePos:function(){return sn(this._mapPane)||new q(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,s){var u=i&&s!==void 0?this._getNewPixelOrigin(i,s):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,s){var u=this.getSize()._divideBy(2);return this.project(i,s)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,s,u){var h=this._getNewPixelOrigin(u,s);return this.project(i,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(i,s,u){var h=this._getNewPixelOrigin(u,s);return at([this.project(i.getSouthWest(),s)._subtract(h),this.project(i.getNorthWest(),s)._subtract(h),this.project(i.getSouthEast(),s)._subtract(h),this.project(i.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,s,u){if(!u)return i;var h=this.project(i,s),l=this.getSize().divideBy(2),p=new Y(h.subtract(l),h.add(l)),g=this._getBoundsOffset(p,u,s);return g.round().equals([0,0])?i:this.unproject(h.add(g),s)},_limitOffset:function(i,s){if(!s)return i;var u=this.getPixelBounds(),h=new Y(u.min.add(i),u.max.add(i));return i.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(i,s,u){var h=at(this.project(s.getNorthEast(),u),this.project(s.getSouthWest(),u)),l=h.min.subtract(i.min),p=h.max.subtract(i.max),g=this._rebound(l.x,-p.x),y=this._rebound(l.y,-p.y);return new q(g,y)},_rebound:function(i,s){return i+s>0?Math.round(i-s)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(s))},_limitZoom:function(i){var s=this.getMinZoom(),u=this.getMaxZoom(),h=ee?this.options.zoomSnap:1;return h&&(i=Math.round(i/h)*h),Math.max(s,Math.min(u,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Lt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,s){var u=this._getCenterOffset(i)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,s),!0)},_createAnimProxy:function(){var i=this._proxy=rt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(s){var u=R,h=this._proxy.style[u];Pn(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){St(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),s=this.getZoom();Pn(this._proxy,this.project(i,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,s,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),l=this._getCenterOffset(i)._divideBy(1-1/h);return u.animate!==!0&&!this.getSize().contains(l)?!1:(k(function(){this._moveStart(!0,!1)._animateZoom(i,s,!0)},this),!0)},_animateZoom:function(i,s,u,h){!this._mapPane||(u&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=s,tt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:s,noUpdate:h}),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){!this._animatingZoom||(this._mapPane&&Lt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),k(function(){this._moveEnd(!0)},this))}});function Jp(i,s){return new ut(i,s)}var we=Ht.extend({options:{position:"topright"},initialize:function(i){D(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var s=this._map;return s&&s.removeControl(this),this.options.position=i,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var s=this._container=this.onAdd(i),u=this.getPosition(),h=i._controlCorners[u];return tt(s,"leaflet-control"),u.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(St(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),er=function(i){return new we(i)};ut.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},s="leaflet-",u=this._controlContainer=rt("div",s+"control-container",this._container);function h(l,p){var g=s+l+" "+s+p;i[l+p]=rt("div",g,u)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)St(this._controlCorners[i]);St(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Jh=we.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,s,u,h){return u<h?-1:h<u?1:0}},initialize:function(i,s,u){D(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var h in i)this._addLayer(i[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return we.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,s){return this._addLayer(i,s),this._map?this._update():this},addOverlay:function(i,s){return this._addLayer(i,s,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var s=this._getLayer(f(i));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){tt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(tt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Lt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Lt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",s=this._container=rt("div",i),u=this.options.collapsed;s.setAttribute("aria-haspopup",!0),tr(s),wa(s);var h=this._section=rt("section",i+"-list");u&&(this._map.on("click",this.collapse,this),En||it(s,{mouseenter:this.expand,mouseleave:this.collapse},this));var l=this._layersLink=rt("a",i+"-toggle",s);l.href="#",l.title="Layers",pe?(it(l,"click",Fe),it(l,"click",this.expand,this)):it(l,"focus",this.expand,this),u||this.expand(),this._baseLayersList=rt("div",i+"-base",h),this._separator=rt("div",i+"-separator",h),this._overlaysList=rt("div",i+"-overlays",h),s.appendChild(h)},_getLayer:function(i){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&f(this._layers[s].layer)===i)return this._layers[s]},_addLayer:function(i,s,u){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:s,overlay:u}),this.options.sortLayers&&this._layers.sort(c(function(h,l){return this.options.sortFunction(h.layer,l.layer,h.name,l.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ys(this._baseLayersList),ys(this._overlaysList),this._layerControlInputs=[];var i,s,u,h,l=0;for(u=0;u<this._layers.length;u++)h=this._layers[u],this._addItem(h),s=s||h.overlay,i=i||!h.overlay,l+=h.overlay?0:1;return this.options.hideSingleBase&&(i=i&&l>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=s&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var s=this._getLayer(f(i.target)),u=s.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;u&&this._map.fire(u,s)},_createRadioElement:function(i,s){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=u,h.firstChild},_addItem:function(i){var s=document.createElement("label"),u=this._map.hasLayer(i.layer),h;i.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=u):h=this._createRadioElement("leaflet-base-layers_"+f(this),u),this._layerControlInputs.push(h),h.layerId=f(i.layer),it(h,"click",this._onInputClick,this);var l=document.createElement("span");l.innerHTML=" "+i.name;var p=document.createElement("div");s.appendChild(p),p.appendChild(h),p.appendChild(l);var g=i.overlay?this._overlaysList:this._baseLayersList;return g.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var i=this._layerControlInputs,s,u,h=[],l=[];this._handlingClick=!0;for(var p=i.length-1;p>=0;p--)s=i[p],u=this._getLayer(s.layerId).layer,s.checked?h.push(u):s.checked||l.push(u);for(p=0;p<l.length;p++)this._map.hasLayer(l[p])&&this._map.removeLayer(l[p]);for(p=0;p<h.length;p++)this._map.hasLayer(h[p])||this._map.addLayer(h[p]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,s,u,h=this._map.getZoom(),l=i.length-1;l>=0;l--)s=i[l],u=this._getLayer(s.layerId).layer,s.disabled=u.options.minZoom!==void 0&&h<u.options.minZoom||u.options.maxZoom!==void 0&&h>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Xp=function(i,s,u){return new Jh(i,s,u)},ba=we.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(i){var s="leaflet-control-zoom",u=rt("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",u,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,s,u,h,l){var p=rt("a",u,h);return p.innerHTML=i,p.href="#",p.title=s,p.setAttribute("role","button"),p.setAttribute("aria-label",s),tr(p),it(p,"click",Fe),it(p,"click",l,this),it(p,"click",this._refocusOnMap,this),p},_updateDisabled:function(){var i=this._map,s="leaflet-disabled";Lt(this._zoomInButton,s),Lt(this._zoomOutButton,s),(this._disabled||i._zoom===i.getMinZoom())&&tt(this._zoomOutButton,s),(this._disabled||i._zoom===i.getMaxZoom())&&tt(this._zoomInButton,s)}});ut.mergeOptions({zoomControl:!0}),ut.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ba,this.addControl(this.zoomControl))});var Yp=function(i){return new ba(i)},Xh=we.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var s="leaflet-control-scale",u=rt("div",s),h=this.options;return this._addScales(h,s+"-line",u),i.on(h.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),u},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,s,u){i.metric&&(this._mScale=rt("div",s,u)),i.imperial&&(this._iScale=rt("div",s,u))},_update:function(){var i=this._map,s=i.getSize().y/2,u=i.distance(i.containerPointToLatLng([0,s]),i.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(u)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var s=this._getRoundNum(i),u=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,u,s/i)},_updateImperial:function(i){var s=i*3.2808399,u,h,l;s>5280?(u=s/5280,h=this._getRoundNum(u),this._updateScale(this._iScale,h+" mi",h/u)):(l=this._getRoundNum(s),this._updateScale(this._iScale,l+" ft",l/s))},_updateScale:function(i,s,u){i.style.width=Math.round(this.options.maxWidth*u)+"px",i.innerHTML=s},_getRoundNum:function(i){var s=Math.pow(10,(Math.floor(i)+"").length-1),u=i/s;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,s*u}}),Qp=function(i){return new Xh(i)},Sa=we.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(i){D(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=rt("div","leaflet-control-attribution"),tr(this._container);for(var s in i._layers)i._layers[s].getAttribution&&this.addAttribution(i._layers[s].getAttribution());return this._update(),this._container},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(!!this._map){var i=[];for(var s in this._attributions)this._attributions[s]&&i.push(s);var u=[];this.options.prefix&&u.push(this.options.prefix),i.length&&u.push(i.join(", ")),this._container.innerHTML=u.join(" | ")}}});ut.mergeOptions({attributionControl:!0}),ut.addInitHook(function(){this.options.attributionControl&&new Sa().addTo(this)});var tm=function(i){return new Sa(i)};we.Layers=Jh,we.Zoom=ba,we.Scale=Xh,we.Attribution=Sa,er.layers=Xp,er.zoom=Yp,er.scale=Qp,er.attribution=tm;var Ce=Ht.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ce.addTo=function(i,s){return i.addHandler(s,this),this};var em={Events:dt},Yh=pe?"touchstart mousedown":"mousedown",Qh={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Pa={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},An=de.extend({options:{clickTolerance:3},initialize:function(i,s,u,h){D(this,h),this._element=i,this._dragStartTarget=s||i,this._preventOutline=u},enable:function(){this._enabled||(it(this._dragStartTarget,Yh,this._onDown,this),this._enabled=!0)},disable:function(){!this._enabled||(An._dragging===this&&this.finishDrag(),At(this._dragStartTarget,Yh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(!(i._simulated||!this._enabled)&&(this._moved=!1,!ca(this._element,"leaflet-zoom-anim")&&!(An._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(An._dragging=this,this._preventOutline&&ga(this._element),fa(),Xi(),!this._moving))){this.fire("down");var s=i.touches?i.touches[0]:i,u=Wh(this._element);this._startPoint=new q(s.clientX,s.clientY),this._parentScale=_a(u),it(document,Pa[i.type],this._onMove,this),it(document,Qh[i.type],this._onUp,this)}},_onMove:function(i){if(!(i._simulated||!this._enabled)){if(i.touches&&i.touches.length>1){this._moved=!0;return}var s=i.touches&&i.touches.length===1?i.touches[0]:i,u=new q(s.clientX,s.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,ge(i),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=sn(this._element).subtract(u),tt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),tt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,X(this._animRequest),this._lastEvent=i,this._animRequest=k(this._updatePosition,this,!0))}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),kt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(i){i._simulated||!this._enabled||this.finishDrag()},finishDrag:function(){Lt(document.body,"leaflet-dragging"),this._lastTarget&&(Lt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var i in Pa)At(document,Pa[i],this._onMove,this),At(document,Qh[i],this._onUp,this);pa(),Yi(),this._moved&&this._moving&&(X(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,An._dragging=!1}});function tc(i,s){if(!s||!i.length)return i.slice();var u=s*s;return i=rm(i,u),i=im(i,u),i}function ec(i,s,u){return Math.sqrt(nr(i,s,u,!0))}function nm(i,s,u){return nr(i,s,u)}function im(i,s){var u=i.length,h=typeof Uint8Array!=void 0+""?Uint8Array:Array,l=new h(u);l[0]=l[u-1]=1,La(i,l,s,0,u-1);var p,g=[];for(p=0;p<u;p++)l[p]&&g.push(i[p]);return g}function La(i,s,u,h,l){var p=0,g,y,T;for(y=h+1;y<=l-1;y++)T=nr(i[y],i[h],i[l],!0),T>p&&(g=y,p=T);p>u&&(s[g]=1,La(i,s,u,h,g),La(i,s,u,g,l))}function rm(i,s){for(var u=[i[0]],h=1,l=0,p=i.length;h<p;h++)sm(i[h],i[l])>s&&(u.push(i[h]),l=h);return l<p-1&&u.push(i[p-1]),u}var nc;function ic(i,s,u,h,l){var p=h?nc:Cn(i,u),g=Cn(s,u),y,T,I;for(nc=g;;){if(!(p|g))return[i,s];if(p&g)return!1;y=p||g,T=Ps(i,s,y,u,l),I=Cn(T,u),y===p?(i=T,p=I):(s=T,g=I)}}function Ps(i,s,u,h,l){var p=s.x-i.x,g=s.y-i.y,y=h.min,T=h.max,I,M;return u&8?(I=i.x+p*(T.y-i.y)/g,M=T.y):u&4?(I=i.x+p*(y.y-i.y)/g,M=y.y):u&2?(I=T.x,M=i.y+g*(T.x-i.x)/p):u&1&&(I=y.x,M=i.y+g*(y.x-i.x)/p),new q(I,M,l)}function Cn(i,s){var u=0;return i.x<s.min.x?u|=1:i.x>s.max.x&&(u|=2),i.y<s.min.y?u|=4:i.y>s.max.y&&(u|=8),u}function sm(i,s){var u=s.x-i.x,h=s.y-i.y;return u*u+h*h}function nr(i,s,u,h){var l=s.x,p=s.y,g=u.x-l,y=u.y-p,T=g*g+y*y,I;return T>0&&(I=((i.x-l)*g+(i.y-p)*y)/T,I>1?(l=u.x,p=u.y):I>0&&(l+=g*I,p+=y*I)),g=i.x-l,y=i.y-p,h?g*g+y*y:new q(l,p)}function ze(i){return!st(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]!="undefined"}function rc(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ze(i)}var om={simplify:tc,pointToSegmentDistance:ec,closestPointOnSegment:nm,clipSegment:ic,_getEdgeIntersection:Ps,_getBitCode:Cn,_sqClosestPointOnSegment:nr,isFlat:ze,_flat:rc};function sc(i,s,u){var h,l=[1,4,2,8],p,g,y,T,I,M,B,ht;for(p=0,M=i.length;p<M;p++)i[p]._code=Cn(i[p],s);for(y=0;y<4;y++){for(B=l[y],h=[],p=0,M=i.length,g=M-1;p<M;g=p++)T=i[p],I=i[g],T._code&B?I._code&B||(ht=Ps(I,T,B,s,u),ht._code=Cn(ht,s),h.push(ht)):(I._code&B&&(ht=Ps(I,T,B,s,u),ht._code=Cn(ht,s),h.push(ht)),h.push(T));i=h}return i}var am={clipPolygon:sc},Aa={project:function(i){return new q(i.lng,i.lat)},unproject:function(i){return new Q(i.y,i.x)},bounds:new Y([-180,-90],[180,90])},Ca={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Y([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var s=Math.PI/180,u=this.R,h=i.lat*s,l=this.R_MINOR/u,p=Math.sqrt(1-l*l),g=p*Math.sin(h),y=Math.tan(Math.PI/4-h/2)/Math.pow((1-g)/(1+g),p/2);return h=-u*Math.log(Math.max(y,1e-10)),new q(i.lng*s*u,h)},unproject:function(i){for(var s=180/Math.PI,u=this.R,h=this.R_MINOR/u,l=Math.sqrt(1-h*h),p=Math.exp(-i.y/u),g=Math.PI/2-2*Math.atan(p),y=0,T=.1,I;y<15&&Math.abs(T)>1e-7;y++)I=l*Math.sin(g),I=Math.pow((1-I)/(1+I),l/2),T=Math.PI/2-2*Math.atan(p*I)-g,g+=T;return new Q(g*s,i.x*s/u)}},um={LonLat:Aa,Mercator:Ca,SphericalMercator:Ye},hm=o({},Se,{code:"EPSG:3395",projection:Ca,transformation:function(){var i=.5/(Math.PI*Ca.R);return Qe(i,.5,-i,.5)}()}),oc=o({},Se,{code:"EPSG:4326",projection:Aa,transformation:Qe(1/180,1,-1/180,.5)}),cm=o({},Wt,{projection:Aa,transformation:Qe(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,s){var u=s.lng-i.lng,h=s.lat-i.lat;return Math.sqrt(u*u+h*h)},infinite:!0});Wt.Earth=Se,Wt.EPSG3395=hm,Wt.EPSG3857=Yn,Wt.EPSG900913=ta,Wt.EPSG4326=oc,Wt.Simple=cm;var Te=de.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[f(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[f(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var s=i.target;if(!!s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var u=this.getEvents();s.on(u,this),this.once("remove",function(){s.off(u,this)},this)}this.onAdd(s),this.getAttribution&&s.attributionControl&&s.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),s.fire("layeradd",{layer:this})}}});ut.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var s=f(i);return this._layers[s]?this:(this._layers[s]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var s=f(i);return this._layers[s]?(this._loaded&&i.onRemove(this),i.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(i.getAttribution()),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return!!i&&f(i)in this._layers},eachLayer:function(i,s){for(var u in this._layers)i.call(s,this._layers[u]);return this},_addLayers:function(i){i=i?st(i)?i:[i]:[];for(var s=0,u=i.length;s<u;s++)this.addLayer(i[s])},_addZoomLimit:function(i){(isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[f(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var s=f(i);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,s=-1/0,u=this._getZoomSpan();for(var h in this._zoomBoundLayers){var l=this._zoomBoundLayers[h].options;i=l.minZoom===void 0?i:Math.min(i,l.minZoom),s=l.maxZoom===void 0?s:Math.max(s,l.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=i===1/0?void 0:i,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var oi=Te.extend({initialize:function(i,s){D(this,s),this._layers={};var u,h;if(i)for(u=0,h=i.length;u<h;u++)this.addLayer(i[u])},addLayer:function(i){var s=this.getLayerId(i);return this._layers[s]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var s=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(i){if(!i)return!1;var s=typeof i=="number"?i:this.getLayerId(i);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var s=Array.prototype.slice.call(arguments,1),u,h;for(u in this._layers)h=this._layers[u],h[i]&&h[i].apply(h,s);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,s){for(var u in this._layers)i.call(s,this._layers[u]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return f(i)}}),lm=function(i,s){return new oi(i,s)},ai=oi.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),oi.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),oi.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new wt;for(var s in this._layers){var u=this._layers[s];i.extend(u.getBounds?u.getBounds():u.getLatLng())}return i}}),dm=function(i,s){return new ai(i,s)},ui=Ht.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(i){D(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,s){var u=this._getIconUrl(i);if(!u){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(u,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,i),h},_setIconStyles:function(i,s){var u=this.options,h=u[s+"Size"];typeof h=="number"&&(h=[h,h]);var l=z(h),p=z(s==="shadow"&&u.shadowAnchor||u.iconAnchor||l&&l.divideBy(2,!0));i.className="leaflet-marker-"+s+" "+(u.className||""),p&&(i.style.marginLeft=-p.x+"px",i.style.marginTop=-p.y+"px"),l&&(i.style.width=l.x+"px",i.style.height=l.y+"px")},_createImg:function(i,s){return s=s||document.createElement("img"),s.src=i,s},_getIconUrl:function(i){return Ae&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function fm(i){return new ui(i)}var ir=ui.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return ir.imagePath||(ir.imagePath=this._detectIconPath()),(this.options.imagePath||ir.imagePath)+ui.prototype._getIconUrl.call(this,i)},_detectIconPath:function(){var i=rt("div","leaflet-default-icon-path",document.body),s=oe(i,"background-image")||oe(i,"backgroundImage");return document.body.removeChild(i),s===null||s.indexOf("url")!==0?s="":s=s.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,""),s}}),ac=Ce.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new An(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),tt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Lt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var s=this._marker,u=s._map,h=this._marker.options.autoPanSpeed,l=this._marker.options.autoPanPadding,p=sn(s._icon),g=u.getPixelBounds(),y=u.getPixelOrigin(),T=at(g.min._subtract(y).add(l),g.max._subtract(y).subtract(l));if(!T.contains(p)){var I=z((Math.max(T.max.x,p.x)-T.max.x)/(g.max.x-T.max.x)-(Math.min(T.min.x,p.x)-T.min.x)/(g.min.x-T.min.x),(Math.max(T.max.y,p.y)-T.max.y)/(g.max.y-T.max.y)-(Math.min(T.min.y,p.y)-T.min.y)/(g.min.y-T.min.y)).multiplyBy(h);u.panBy(I,{animate:!1}),this._draggable._newPos._add(I),this._draggable._startPos._add(I),kt(s._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=k(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(X(this._panRequest),this._panRequest=k(this._adjustPan.bind(this,i)))},_onDrag:function(i){var s=this._marker,u=s._shadow,h=sn(s._icon),l=s._map.layerPointToLatLng(h);u&&kt(u,h),s._latlng=l,i.latlng=l,i.oldLatLng=this._oldLatLng,s.fire("move",i).fire("drag",i)},_onDragEnd:function(i){X(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Ls=Te.extend({options:{icon:new ir,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,s){D(this,s),this._latlng=ft(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var s=this._latlng;return this._latlng=ft(i),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=i.icon.createIcon(this._icon),h=!1;u!==this._icon&&(this._icon&&this._removeIcon(),h=!0,i.title&&(u.title=i.title),u.tagName==="IMG"&&(u.alt=i.alt||"")),tt(u,s),i.keyboard&&(u.tabIndex="0"),this._icon=u,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var l=i.icon.createShadow(this._shadow),p=!1;l!==this._shadow&&(this._removeShadow(),p=!0),l&&(tt(l,s),l.alt=""),this._shadow=l,i.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),l&&p&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),St(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&St(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&kt(this._icon,i),this._shadow&&kt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(s)},_initInteraction:function(){if(!!this.options.interactive&&(tt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ac)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ac(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&me(this._icon,i),this._shadow&&me(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function pm(i,s){return new Ls(i,s)}var on=Te.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return D(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),As=on.extend({options:{fill:!0,radius:10},initialize:function(i,s){D(this,s),this._latlng=ft(i),this._radius=this.options.radius},setLatLng:function(i){var s=this._latlng;return this._latlng=ft(i),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var s=i&&i.radius||this._radius;return on.prototype.setStyle.call(this,i),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,s=this._radiusY||i,u=this._clickTolerance(),h=[i+u,s+u];this._pxBounds=new Y(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function mm(i,s){return new As(i,s)}var ka=As.extend({initialize:function(i,s,u){if(typeof s=="number"&&(s=o({},u,{radius:s})),D(this,s),this._latlng=ft(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new wt(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:on.prototype.setStyle,_project:function(){var i=this._latlng.lng,s=this._latlng.lat,u=this._map,h=u.options.crs;if(h.distance===Se.distance){var l=Math.PI/180,p=this._mRadius/Se.R/l,g=u.project([s+p,i]),y=u.project([s-p,i]),T=g.add(y).divideBy(2),I=u.unproject(T).lat,M=Math.acos((Math.cos(p*l)-Math.sin(s*l)*Math.sin(I*l))/(Math.cos(s*l)*Math.cos(I*l)))/l;(isNaN(M)||M===0)&&(M=p/Math.cos(Math.PI/180*s)),this._point=T.subtract(u.getPixelOrigin()),this._radius=isNaN(M)?0:T.x-u.project([I,i-M]).x,this._radiusY=T.y-g.y}else{var B=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(B).x}this._updateBounds()}});function gm(i,s,u){return new ka(i,s,u)}var Ve=on.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,s){D(this,s),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var s=1/0,u=null,h=nr,l,p,g=0,y=this._parts.length;g<y;g++)for(var T=this._parts[g],I=1,M=T.length;I<M;I++){l=T[I-1],p=T[I];var B=h(i,l,p,!0);B<s&&(s=B,u=h(i,l,p))}return u&&(u.distance=Math.sqrt(s)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var i,s,u,h,l,p,g,y=this._rings[0],T=y.length;if(!T)return null;for(i=0,s=0;i<T-1;i++)s+=y[i].distanceTo(y[i+1])/2;if(s===0)return this._map.layerPointToLatLng(y[0]);for(i=0,h=0;i<T-1;i++)if(l=y[i],p=y[i+1],u=l.distanceTo(p),h+=u,h>s)return g=(h-s)/u,this._map.layerPointToLatLng([p.x-g*(p.x-l.x),p.y-g*(p.y-l.y)])},getBounds:function(){return this._bounds},addLatLng:function(i,s){return s=s||this._defaultShape(),i=ft(i),s.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new wt,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return ze(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var s=[],u=ze(i),h=0,l=i.length;h<l;h++)u?(s[h]=ft(i[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(i[h]);return s},_project:function(){var i=new Y;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),s=new q(i,i);this._pxBounds=new Y([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)])},_projectLatlngs:function(i,s,u){var h=i[0]instanceof Q,l=i.length,p,g;if(h){for(g=[],p=0;p<l;p++)g[p]=this._map.latLngToLayerPoint(i[p]),u.extend(g[p]);s.push(g)}else for(p=0;p<l;p++)this._projectLatlngs(i[p],s,u)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,u,h,l,p,g,y,T;for(u=0,l=0,p=this._rings.length;u<p;u++)for(T=this._rings[u],h=0,g=T.length;h<g-1;h++)y=ic(T[h],T[h+1],i,h,!0),!!y&&(s[l]=s[l]||[],s[l].push(y[0]),(y[1]!==T[h+1]||h===g-2)&&(s[l].push(y[1]),l++))}},_simplifyPoints:function(){for(var i=this._parts,s=this.options.smoothFactor,u=0,h=i.length;u<h;u++)i[u]=tc(i[u],s)},_update:function(){!this._map||(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,s){var u,h,l,p,g,y,T=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(u=0,p=this._parts.length;u<p;u++)for(y=this._parts[u],h=0,g=y.length,l=g-1;h<g;l=h++)if(!(!s&&h===0)&&ec(i,y[l],y[h])<=T)return!0;return!1}});function _m(i,s){return new Ve(i,s)}Ve._flat=rc;var hi=Ve.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var i,s,u,h,l,p,g,y,T,I=this._rings[0],M=I.length;if(!M)return null;for(p=g=y=0,i=0,s=M-1;i<M;s=i++)u=I[i],h=I[s],l=u.y*h.x-h.y*u.x,g+=(u.x+h.x)*l,y+=(u.y+h.y)*l,p+=l*3;return p===0?T=I[0]:T=[g/p,y/p],this._map.layerPointToLatLng(T)},_convertLatLngs:function(i){var s=Ve.prototype._convertLatLngs.call(this,i),u=s.length;return u>=2&&s[0]instanceof Q&&s[0].equals(s[u-1])&&s.pop(),s},_setLatLngs:function(i){Ve.prototype._setLatLngs.call(this,i),ze(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ze(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,s=this.options.weight,u=new q(s,s);if(i=new Y(i.min.subtract(u),i.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,l=this._rings.length,p;h<l;h++)p=sc(this._rings[h],i,!0),p.length&&this._parts.push(p)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var s=!1,u,h,l,p,g,y,T,I;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(p=0,T=this._parts.length;p<T;p++)for(u=this._parts[p],g=0,I=u.length,y=I-1;g<I;y=g++)h=u[g],l=u[y],h.y>i.y!=l.y>i.y&&i.x<(l.x-h.x)*(i.y-h.y)/(l.y-h.y)+h.x&&(s=!s);return s||Ve.prototype._containsPoint.call(this,i,!0)}});function vm(i,s){return new hi(i,s)}var $e=ai.extend({initialize:function(i,s){D(this,s),this._layers={},i&&this.addData(i)},addData:function(i){var s=st(i)?i:i.features,u,h,l;if(s){for(u=0,h=s.length;u<h;u++)l=s[u],(l.geometries||l.geometry||l.features||l.coordinates)&&this.addData(l);return this}var p=this.options;if(p.filter&&!p.filter(i))return this;var g=xa(i,p);return g?(g.feature=xs(i),g.defaultOptions=g.options,this.resetStyle(g),p.onEachFeature&&p.onEachFeature(i,g),this.addLayer(g)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(s){this._setLayerStyle(s,i)},this)},_setLayerStyle:function(i,s){i.setStyle&&(typeof s=="function"&&(s=s(i.feature)),i.setStyle(s))}});function xa(i,s){var u=i.type==="Feature"?i.geometry:i,h=u?u.coordinates:null,l=[],p=s&&s.pointToLayer,g=s&&s.coordsToLatLng||Ra,y,T,I,M;if(!h&&!u)return null;switch(u.type){case"Point":return y=g(h),uc(p,i,y,s);case"MultiPoint":for(I=0,M=h.length;I<M;I++)y=g(h[I]),l.push(uc(p,i,y,s));return new ai(l);case"LineString":case"MultiLineString":return T=Cs(h,u.type==="LineString"?0:1,g),new Ve(T,s);case"Polygon":case"MultiPolygon":return T=Cs(h,u.type==="Polygon"?1:2,g),new hi(T,s);case"GeometryCollection":for(I=0,M=u.geometries.length;I<M;I++){var B=xa({geometry:u.geometries[I],type:"Feature",properties:i.properties},s);B&&l.push(B)}return new ai(l);default:throw new Error("Invalid GeoJSON object.")}}function uc(i,s,u,h){return i?i(s,u):new Ls(u,h&&h.markersInheritOptions&&h)}function Ra(i){return new Q(i[1],i[0],i[2])}function Cs(i,s,u){for(var h=[],l=0,p=i.length,g;l<p;l++)g=s?Cs(i[l],s-1,u):(u||Ra)(i[l]),h.push(g);return h}function Ma(i,s){return s=typeof s=="number"?s:6,i.alt!==void 0?[E(i.lng,s),E(i.lat,s),E(i.alt,s)]:[E(i.lng,s),E(i.lat,s)]}function ks(i,s,u,h){for(var l=[],p=0,g=i.length;p<g;p++)l.push(s?ks(i[p],s-1,u,h):Ma(i[p],h));return!s&&u&&l.push(l[0]),l}function ci(i,s){return i.feature?o({},i.feature,{geometry:s}):xs(s)}function xs(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Na={toGeoJSON:function(i){return ci(this,{type:"Point",coordinates:Ma(this.getLatLng(),i)})}};Ls.include(Na),ka.include(Na),As.include(Na),Ve.include({toGeoJSON:function(i){var s=!ze(this._latlngs),u=ks(this._latlngs,s?1:0,!1,i);return ci(this,{type:(s?"Multi":"")+"LineString",coordinates:u})}}),hi.include({toGeoJSON:function(i){var s=!ze(this._latlngs),u=s&&!ze(this._latlngs[0]),h=ks(this._latlngs,u?2:s?1:0,!0,i);return s||(h=[h]),ci(this,{type:(u?"Multi":"")+"Polygon",coordinates:h})}}),oi.include({toMultiPoint:function(i){var s=[];return this.eachLayer(function(u){s.push(u.toGeoJSON(i).geometry.coordinates)}),ci(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(i){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(i);var u=s==="GeometryCollection",h=[];return this.eachLayer(function(l){if(l.toGeoJSON){var p=l.toGeoJSON(i);if(u)h.push(p.geometry);else{var g=xs(p);g.type==="FeatureCollection"?h.push.apply(h,g.features):h.push(g)}}}),u?ci(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function hc(i,s){return new $e(i,s)}var ym=hc,Rs=Te.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,s,u){this._url=i,this._bounds=et(s),D(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(tt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){St(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&ri(this._image),this},bringToBack:function(){return this._map&&si(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=et(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",s=this._image=i?this._url:rt("img");if(tt(s,"leaflet-image-layer"),this._zoomAnimated&&tt(s,"leaflet-zoom-animated"),this.options.className&&tt(s,this.options.className),s.onselectstart=v,s.onmousemove=v,s.onload=c(this.fire,this,"load"),s.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(i){var s=this._map.getZoomScale(i.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Pn(this._image,u,s)},_reset:function(){var i=this._image,s=new Y(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=s.getSize();kt(i,s.min),i.style.width=u.x+"px",i.style.height=u.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)}}),wm=function(i,s,u){return new Rs(i,s,u)},cc=Rs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1},_initImage:function(){var i=this._url.tagName==="VIDEO",s=this._image=i?this._url:rt("video");if(tt(s,"leaflet-image-layer"),this._zoomAnimated&&tt(s,"leaflet-zoom-animated"),this.options.className&&tt(s,this.options.className),s.onselectstart=v,s.onmousemove=v,s.onloadeddata=c(this.fire,this,"load"),i){for(var u=s.getElementsByTagName("source"),h=[],l=0;l<u.length;l++)h.push(u[l].src);this._url=u.length>0?h:[s.src];return}st(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted;for(var p=0;p<this._url.length;p++){var g=rt("source");g.src=this._url[p],s.appendChild(g)}}});function Tm(i,s,u){return new cc(i,s,u)}var lc=Rs.extend({_initImage:function(){var i=this._image=this._url;tt(i,"leaflet-image-layer"),this._zoomAnimated&&tt(i,"leaflet-zoom-animated"),this.options.className&&tt(i,this.options.className),i.onselectstart=v,i.onmousemove=v}});function Em(i,s,u){return new lc(i,s,u)}var qe=Te.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(i,s){D(this,i),this._source=s},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&me(this._container,1),this.bringToFront()},onRemove:function(i){i._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(c(St,void 0,this._container),200)):St(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ft(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){!this._map||(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ri(this._container),this},bringToBack:function(){return this._map&&si(this._container),this},_prepareOpen:function(i,s,u){if(s instanceof Te||(u=s,s=i),s instanceof ai)for(var h in i._layers){s=i._layers[h];break}if(!u)if(s.getCenter)u=s.getCenter();else if(s.getLatLng)u=s.getLatLng();else throw new Error("Unable to get source layer LatLng.");return this._source=s,this.update(),u},_updateContent:function(){if(!!this._content){var i=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")i.innerHTML=s;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(!!this._map){var i=this._map.latLngToLayerPoint(this._latlng),s=z(this.options.offset),u=this._getAnchor();this._zoomAnimated?kt(this._container,i.add(u)):s=s.add(i).add(u);var h=this._containerBottom=-s.y,l=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=l+"px"}},_getAnchor:function(){return[0,0]}}),li=qe.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i.openPopup(this),this},onAdd:function(i){qe.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof on||this._source.on("preclick",Ln))},onRemove:function(i){qe.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof on||this._source.off("preclick",Ln))},getEvents:function(){var i=qe.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this._close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var i="leaflet-popup",s=this._container=rt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=rt("div",i+"-content-wrapper",s);if(this._contentNode=rt("div",i+"-content",u),tr(s),wa(this._contentNode),it(s,"contextmenu",Ln),this._tipContainer=rt("div",i+"-tip-container",s),this._tip=rt("div",i+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=rt("a",i+"-close-button",s);h.href="#close",h.innerHTML="&#215;",it(h,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var i=this._contentNode,s=i.style;s.width="",s.whiteSpace="nowrap";var u=i.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),s.width=u+1+"px",s.whiteSpace="",s.height="";var h=i.offsetHeight,l=this.options.maxHeight,p="leaflet-popup-scrolled";l&&h>l?(s.height=l+"px",tt(i,p)):Lt(i,p),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),u=this._getAnchor();kt(this._container,s.add(u))},_adjustPan:function(){if(!!this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var i=this._map,s=parseInt(oe(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+s,h=this._containerWidth,l=new q(this._containerLeft,-u-this._containerBottom);l._add(sn(this._container));var p=i.layerPointToContainerPoint(l),g=z(this.options.autoPanPadding),y=z(this.options.autoPanPaddingTopLeft||g),T=z(this.options.autoPanPaddingBottomRight||g),I=i.getSize(),M=0,B=0;p.x+h+T.x>I.x&&(M=p.x+h-I.x+T.x),p.x-M-y.x<0&&(M=p.x-y.x),p.y+u+T.y>I.y&&(B=p.y+u-I.y+T.y),p.y-B-y.y<0&&(B=p.y-y.y),(M||B)&&i.fire("autopanstart").panBy([M,B])}},_onCloseButtonClick:function(i){this._close(),Fe(i)},_getAnchor:function(){return z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Im=function(i,s){return new li(i,s)};ut.mergeOptions({closePopupOnClick:!0}),ut.include({openPopup:function(i,s,u){return i instanceof li||(i=new li(u).setContent(i)),s&&i.setLatLng(s),this.hasLayer(i)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=i,this.addLayer(i))},closePopup:function(i){return(!i||i===this._popup)&&(i=this._popup,this._popup=null),i&&this.removeLayer(i),this}}),Te.include({bindPopup:function(i,s){return i instanceof li?(D(i,s),this._popup=i,i._source=this):((!this._popup||s)&&(this._popup=new li(s,this)),this._popup.setContent(i)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i,s){return this._popup&&this._map&&(s=this._popup._prepareOpen(this,i,s),this._map.openPopup(this._popup,s)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(i){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(i)),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){var s=i.layer||i.target;if(!!this._popup&&!!this._map){if(Fe(i),s instanceof on){this.openPopup(i.layer||i.target,i.latlng);return}this._map.hasLayer(this._popup)&&this._popup._source===s?this.closePopup():this.openPopup(s,i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var di=qe.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(i){qe.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(i){qe.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var i=qe.prototype.getEvents.call(this);return pe&&!this.options.permanent&&(i.preclick=this._close),i},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var i="leaflet-tooltip",s=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=rt("div",s)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var s,u,h=this._map,l=this._container,p=h.latLngToContainerPoint(h.getCenter()),g=h.layerPointToContainerPoint(i),y=this.options.direction,T=l.offsetWidth,I=l.offsetHeight,M=z(this.options.offset),B=this._getAnchor();y==="top"?(s=T/2,u=I):y==="bottom"?(s=T/2,u=0):y==="center"?(s=T/2,u=I/2):y==="right"?(s=0,u=I/2):y==="left"?(s=T,u=I/2):g.x<p.x?(y="right",s=0,u=I/2):(y="left",s=T+(M.x+B.x)*2,u=I/2),i=i.subtract(z(s,u,!0)).add(M).add(B),Lt(l,"leaflet-tooltip-right"),Lt(l,"leaflet-tooltip-left"),Lt(l,"leaflet-tooltip-top"),Lt(l,"leaflet-tooltip-bottom"),tt(l,"leaflet-tooltip-"+y),kt(l,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&me(this._container,i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(s)},_getAnchor:function(){return z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),bm=function(i,s){return new di(i,s)};ut.include({openTooltip:function(i,s,u){return i instanceof di||(i=new di(u).setContent(i)),s&&i.setLatLng(s),this.hasLayer(i)?this:this.addLayer(i)},closeTooltip:function(i){return i&&this.removeLayer(i),this}}),Te.include({bindTooltip:function(i,s){return i instanceof di?(D(i,s),this._tooltip=i,i._source=this):((!this._tooltip||s)&&(this._tooltip=new di(s,this)),this._tooltip.setContent(i)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var s=i?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),pe&&(u.click=this._openTooltip)),this[s](u),this._tooltipHandlersAdded=!i}},openTooltip:function(i,s){return this._tooltip&&this._map&&(s=this._tooltip._prepareOpen(this,i,s),this._map.openTooltip(this._tooltip,s),this._tooltip.options.interactive&&this._tooltip._container&&(tt(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(Lt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(i){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(i)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_openTooltip:function(i){var s=i.layer||i.target;!this._tooltip||!this._map||this.openTooltip(s,this._tooltip.options.sticky?i.latlng:void 0)},_moveTooltip:function(i){var s=i.latlng,u,h;this._tooltip.options.sticky&&i.originalEvent&&(u=this._map.mouseEventToContainerPoint(i.originalEvent),h=this._map.containerPointToLayerPoint(u),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var dc=ui.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var s=i&&i.tagName==="DIV"?i:document.createElement("div"),u=this.options;if(u.html instanceof Element?(ys(s),s.appendChild(u.html)):s.innerHTML=u.html!==!1?u.html:"",u.bgPos){var h=z(u.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Sm(i){return new dc(i)}ui.Default=ir;var rr=Te.extend({options:{tileSize:256,opacity:1,updateWhenIdle:en,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){D(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),St(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ri(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(si(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof q?i:new q(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var s=this.getPane().children,u=-i(-1/0,1/0),h=0,l=s.length,p;h<l;h++)p=s[h].style.zIndex,s[h]!==this._container&&p&&(u=i(u,+p));isFinite(u)&&(this.options.zIndex=u+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(!!this._map&&!tn){me(this._container,this.options.opacity);var i=+new Date,s=!1,u=!1;for(var h in this._tiles){var l=this._tiles[h];if(!(!l.current||!l.loaded)){var p=Math.min(1,(i-l.loaded)/200);me(l.el,p),p<1?s=!0:(l.active?u=!0:this._onOpaqueTile(l),l.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),s&&(X(this._fadeFrame),this._fadeFrame=k(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=rt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,s=this.options.maxZoom;if(i!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===i?(this._levels[u].el.style.zIndex=s-Math.abs(i-u),this._onUpdateLevel(u)):(St(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var h=this._levels[i],l=this._map;return h||(h=this._levels[i]={},h.el=rt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=l.project(l.unproject(l.getPixelOrigin()),i).round(),h.zoom=i,this._setZoomTransform(h,l.getCenter(),l.getZoom()),v(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(!!this._map){var i,s,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)s=this._tiles[i],s.retain=s.current;for(i in this._tiles)if(s=this._tiles[i],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var s in this._tiles)this._tiles[s].coords.z===i&&this._removeTile(s)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)St(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,s,u,h){var l=Math.floor(i/2),p=Math.floor(s/2),g=u-1,y=new q(+l,+p);y.z=+g;var T=this._tileCoordsToKey(y),I=this._tiles[T];return I&&I.active?(I.retain=!0,!0):(I&&I.loaded&&(I.retain=!0),g>h?this._retainParent(l,p,g,h):!1)},_retainChildren:function(i,s,u,h){for(var l=2*i;l<2*i+2;l++)for(var p=2*s;p<2*s+2;p++){var g=new q(l,p);g.z=u+1;var y=this._tileCoordsToKey(g),T=this._tiles[y];if(T&&T.active){T.retain=!0;continue}else T&&T.loaded&&(T.retain=!0);u+1<h&&this._retainChildren(l,p,u+1,h)}},_resetView:function(i){var s=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var s=this.options;return s.minNativeZoom!==void 0&&i<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<i?s.maxNativeZoom:i},_setView:function(i,s,u,h){var l=Math.round(s);this.options.maxZoom!==void 0&&l>this.options.maxZoom||this.options.minZoom!==void 0&&l<this.options.minZoom?l=void 0:l=this._clampZoom(l);var p=this.options.updateWhenZooming&&l!==this._tileZoom;(!h||p)&&(this._tileZoom=l,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),l!==void 0&&this._update(i),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(i,s)},_setZoomTransforms:function(i,s){for(var u in this._levels)this._setZoomTransform(this._levels[u],i,s)},_setZoomTransform:function(i,s,u){var h=this._map.getZoomScale(u,i.zoom),l=i.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,u)).round();ee?Pn(i.el,l,h):kt(i.el,l)},_resetGrid:function(){var i=this._map,s=i.options.crs,u=this._tileSize=this.getTileSize(),h=this._tileZoom,l=this._map.getPixelWorldBounds(this._tileZoom);l&&(this._globalTileRange=this._pxBoundsToTileRange(l)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,s.wrapLng[0]],h).x/u.x),Math.ceil(i.project([0,s.wrapLng[1]],h).x/u.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([s.wrapLat[0],0],h).y/u.x),Math.ceil(i.project([s.wrapLat[1],0],h).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var s=this._map,u=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(u,this._tileZoom),l=s.project(i,this._tileZoom).floor(),p=s.getSize().divideBy(h*2);return new Y(l.subtract(p),l.add(p))},_update:function(i){var s=this._map;if(!!s){var u=this._clampZoom(s.getZoom());if(i===void 0&&(i=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(i),l=this._pxBoundsToTileRange(h),p=l.getCenter(),g=[],y=this.options.keepBuffer,T=new Y(l.getBottomLeft().subtract([y,-y]),l.getTopRight().add([y,-y]));if(!(isFinite(l.min.x)&&isFinite(l.min.y)&&isFinite(l.max.x)&&isFinite(l.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var I in this._tiles){var M=this._tiles[I].coords;(M.z!==this._tileZoom||!T.contains(new q(M.x,M.y)))&&(this._tiles[I].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(i,u);return}for(var B=l.min.y;B<=l.max.y;B++)for(var ht=l.min.x;ht<=l.max.x;ht++){var He=new q(ht,B);if(He.z=this._tileZoom,!!this._isValidTile(He)){var kn=this._tiles[this._tileCoordsToKey(He)];kn?kn.current=!0:g.push(He)}}if(g.sort(function(an,Oa){return an.distanceTo(p)-Oa.distanceTo(p)}),g.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ns=document.createDocumentFragment();for(ht=0;ht<g.length;ht++)this._addTile(g[ht],Ns);this._level.el.appendChild(Ns)}}}},_isValidTile:function(i){var s=this._map.options.crs;if(!s.infinite){var u=this._globalTileRange;if(!s.wrapLng&&(i.x<u.min.x||i.x>u.max.x)||!s.wrapLat&&(i.y<u.min.y||i.y>u.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(i);return et(this.options.bounds).overlaps(h)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var s=this._map,u=this.getTileSize(),h=i.scaleBy(u),l=h.add(u),p=s.unproject(h,i.z),g=s.unproject(l,i.z);return[p,g]},_tileCoordsToBounds:function(i){var s=this._tileCoordsToNwSe(i),u=new wt(s[0],s[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var s=i.split(":"),u=new q(+s[0],+s[1]);return u.z=+s[2],u},_removeTile:function(i){var s=this._tiles[i];!s||(St(s.el),delete this._tiles[i],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){tt(i,"leaflet-tile");var s=this.getTileSize();i.style.width=s.x+"px",i.style.height=s.y+"px",i.onselectstart=v,i.onmousemove=v,tn&&this.options.opacity<1&&me(i,this.options.opacity),En&&!In&&(i.style.WebkitBackfaceVisibility="hidden")},_addTile:function(i,s){var u=this._getTilePos(i),h=this._tileCoordsToKey(i),l=this.createTile(this._wrapCoords(i),c(this._tileReady,this,i));this._initTile(l),this.createTile.length<2&&k(c(this._tileReady,this,i,null,l)),kt(l,u),this._tiles[h]={el:l,coords:i,current:!0},s.appendChild(l),this.fire("tileloadstart",{tile:l,coords:i})},_tileReady:function(i,s,u){s&&this.fire("tileerror",{error:s,tile:u,coords:i});var h=this._tileCoordsToKey(i);u=this._tiles[h],!!u&&(u.loaded=+new Date,this._map._fadeAnimated?(me(u.el,0),X(this._fadeFrame),this._fadeFrame=k(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),s||(tt(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),tn||!this._map._fadeAnimated?k(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var s=new q(this._wrapX?_(i.x,this._wrapX):i.x,this._wrapY?_(i.y,this._wrapY):i.y);return s.z=i.z,s},_pxBoundsToTileRange:function(i){var s=this.getTileSize();return new Y(i.min.unscaleBy(s).floor(),i.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Pm(i){return new rr(i)}var fi=rr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(i,s){this._url=i,s=D(this,s),s.detectRetina&&Ae&&s.maxZoom>0&&(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom++):(s.zoomOffset++,s.maxZoom--),s.minZoom=Math.max(0,s.minZoom)),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),En||this.on("tileunload",this._onTileRemove)},setUrl:function(i,s){return this._url===i&&s===void 0&&(s=!0),this._url=i,s||this.redraw(),this},createTile:function(i,s){var u=document.createElement("img");return it(u,"load",c(this._tileOnLoad,this,s,u)),it(u,"error",c(this._tileOnError,this,s,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u.alt="",u.setAttribute("role","presentation"),u.src=this.getTileUrl(i),u},getTileUrl:function(i){var s={r:Ae?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-i.y;this.options.tms&&(s.y=u),s["-y"]=u}return gt(this._url,o(s,this.options))},_tileOnLoad:function(i,s){tn?setTimeout(c(i,this,null,s),0):i(null,s)},_tileOnError:function(i,s,u){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),i(u,s)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,s=this.options.maxZoom,u=this.options.zoomReverse,h=this.options.zoomOffset;return u&&(i=s-i),i+h},_getSubdomain:function(i){var s=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var i,s;for(i in this._tiles)this._tiles[i].coords.z!==this._tileZoom&&(s=this._tiles[i].el,s.onload=v,s.onerror=v,s.complete||(s.src=yt,St(s),delete this._tiles[i]))},_removeTile:function(i){var s=this._tiles[i];if(!!s)return ds||s.el.setAttribute("src",yt),rr.prototype._removeTile.call(this,i)},_tileReady:function(i,s,u){if(!(!this._map||u&&u.getAttribute("src")===yt))return rr.prototype._tileReady.call(this,i,s,u)}});function fc(i,s){return new fi(i,s)}var pc=fi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,s){this._url=i;var u=o({},this.defaultWmsParams);for(var h in s)h in this.options||(u[h]=s[h]);s=D(this,s);var l=s.detectRetina&&Ae?2:1,p=this.getTileSize();u.width=p.x*l,u.height=p.y*l,this.wmsParams=u},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,fi.prototype.onAdd.call(this,i)},getTileUrl:function(i){var s=this._tileCoordsToNwSe(i),u=this._crs,h=at(u.project(s[0]),u.project(s[1])),l=h.min,p=h.max,g=(this._wmsVersion>=1.3&&this._crs===oc?[l.y,l.x,p.y,p.x]:[l.x,l.y,p.x,p.y]).join(","),y=fi.prototype.getTileUrl.call(this,i);return y+nt(this.wmsParams,y,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+g},setParams:function(i,s){return o(this.wmsParams,i),s||this.redraw(),this}});function Lm(i,s){return new pc(i,s)}fi.WMS=pc,fc.wms=Lm;var ke=Te.extend({options:{padding:.1,tolerance:0},initialize:function(i){D(this,i),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&tt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,s){var u=this._map.getZoomScale(s,this._zoom),h=sn(this._container),l=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,s),g=this._map.project(i,s),y=g.subtract(p),T=l.multiplyBy(-u).add(h).add(l).subtract(y);ee?Pn(this._container,T,u):kt(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,s=this._map.getSize(),u=this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();this._bounds=new Y(u,u.add(s.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),mc=ke.extend({getEvents:function(){var i=ke.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){ke.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");it(i,"mousemove",this._onMouseMove,this),it(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),it(i,"mouseout",this._handleMouseOut,this),this._ctx=i.getContext("2d")},_destroyContainer:function(){X(this._redrawRequest),delete this._ctx,St(this._container),At(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var s in this._layers)i=this._layers[s],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ke.prototype._update.call(this);var i=this._bounds,s=this._container,u=i.getSize(),h=Ae?2:1;kt(s,i.min),s.width=h*u.x,s.height=h*u.y,s.style.width=u.x+"px",s.style.height=u.y+"px",Ae&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){ke.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[f(i)]=i;var s=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var s=i._order,u=s.next,h=s.prev;u?u.prev=h:this._drawLast=h,h?h.next=u:this._drawFirst=u,delete i._order,delete this._layers[f(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var s=i.options.dashArray.split(/[, ]+/),u=[],h,l;for(l=0;l<s.length;l++){if(h=Number(s[l]),isNaN(h))return;u.push(h)}i.options._dashArray=u}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){!this._map||(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||k(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var s=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Y,this._redrawBounds.extend(i._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(i._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var s=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,s=this._redrawBounds;if(this._ctx.save(),s){var u=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)i=h.layer,(!s||i._pxBounds&&i._pxBounds.intersects(s))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,s){if(!!this._drawing){var u,h,l,p,g=i._parts,y=g.length,T=this._ctx;if(!!y){for(T.beginPath(),u=0;u<y;u++){for(h=0,l=g[u].length;h<l;h++)p=g[u][h],T[h?"lineTo":"moveTo"](p.x,p.y);s&&T.closePath()}this._fillStroke(T,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var s=i._point,u=this._ctx,h=Math.max(Math.round(i._radius),1),l=(Math.max(Math.round(i._radiusY),1)||h)/h;l!==1&&(u.save(),u.scale(1,l)),u.beginPath(),u.arc(s.x,s.y/l,h,0,Math.PI*2,!1),l!==1&&u.restore(),this._fillStroke(u,i)}},_fillStroke:function(i,s){var u=s.options;u.fill&&(i.globalAlpha=u.fillOpacity,i.fillStyle=u.fillColor||u.color,i.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(i.setLineDash&&i.setLineDash(s.options&&s.options._dashArray||[]),i.globalAlpha=u.opacity,i.lineWidth=u.weight,i.strokeStyle=u.color,i.lineCap=u.lineCap,i.lineJoin=u.lineJoin,i.stroke())},_onClick:function(i){for(var s=this._map.mouseEventToLayerPoint(i),u,h,l=this._drawFirst;l;l=l.next)u=l.layer,u.options.interactive&&u._containsPoint(s)&&(!(i.type==="click"||i.type!=="preclick")||!this._map._draggableMoved(u))&&(h=u);h&&(Ea(i),this._fireEvent([h],i))},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,s)}},_handleMouseOut:function(i){var s=this._hoveredLayer;s&&(Lt(this._container,"leaflet-interactive"),this._fireEvent([s],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,s){if(!this._mouseHoverThrottled){for(var u,h,l=this._drawFirst;l;l=l.next)u=l.layer,u.options.interactive&&u._containsPoint(s)&&(h=u);h!==this._hoveredLayer&&(this._handleMouseOut(i),h&&(tt(this._container,"leaflet-interactive"),this._fireEvent([h],i,"mouseover"),this._hoveredLayer=h)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],i),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,s,u){this._map._fireDOMEvent(s,u||s.type,i)},_bringToFront:function(i){var s=i._order;if(!!s){var u=s.next,h=s.prev;if(u)u.prev=h;else return;h?h.next=u:u&&(this._drawFirst=u),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(i)}},_bringToBack:function(i){var s=i._order;if(!!s){var u=s.next,h=s.prev;if(h)h.next=u;else return;u?u.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(i)}}});function gc(i){return Wi?new mc(i):null}var sr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{return function(s){return document.createElement("<"+s+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),Am={_initContainer:function(){this._container=rt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(ke.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var s=i._container=sr("shape");tt(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",i._path=sr("path"),s.appendChild(i._path),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){var s=i._container;this._container.appendChild(s),i.options.interactive&&i.addInteractiveTarget(s)},_removePath:function(i){var s=i._container;St(s),i.removeInteractiveTarget(s),delete this._layers[f(i)]},_updateStyle:function(i){var s=i._stroke,u=i._fill,h=i.options,l=i._container;l.stroked=!!h.stroke,l.filled=!!h.fill,h.stroke?(s||(s=i._stroke=sr("stroke")),l.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=st(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(l.removeChild(s),i._stroke=null),h.fill?(u||(u=i._fill=sr("fill")),l.appendChild(u),u.color=h.fillColor||h.color,u.opacity=h.fillOpacity):u&&(l.removeChild(u),i._fill=null)},_updateCircle:function(i){var s=i._point.round(),u=Math.round(i._radius),h=Math.round(i._radiusY||u);this._setPath(i,i._empty()?"M0 0":"AL "+s.x+","+s.y+" "+u+","+h+" 0,"+65535*360)},_setPath:function(i,s){i._path.v=s},_bringToFront:function(i){ri(i._container)},_bringToBack:function(i){si(i._container)}},Ms=bn?sr:cs,or=ke.extend({getEvents:function(){var i=ke.prototype.getEvents.call(this);return i.zoomstart=this._onZoomStart,i},_initContainer:function(){this._container=Ms("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ms("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){St(this._container),At(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){ke.prototype._update.call(this);var i=this._bounds,s=i.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,u.setAttribute("width",s.x),u.setAttribute("height",s.y)),kt(u,i.min),u.setAttribute("viewBox",[i.min.x,i.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(i){var s=i._path=Ms("path");i.options.className&&tt(s,i.options.className),i.options.interactive&&tt(s,"leaflet-interactive"),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){St(i._path),i.removeInteractiveTarget(i._path),delete this._layers[f(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var s=i._path,u=i.options;!s||(u.stroke?(s.setAttribute("stroke",u.color),s.setAttribute("stroke-opacity",u.opacity),s.setAttribute("stroke-width",u.weight),s.setAttribute("stroke-linecap",u.lineCap),s.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?s.setAttribute("stroke-dasharray",u.dashArray):s.removeAttribute("stroke-dasharray"),u.dashOffset?s.setAttribute("stroke-dashoffset",u.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),u.fill?(s.setAttribute("fill",u.fillColor||u.color),s.setAttribute("fill-opacity",u.fillOpacity),s.setAttribute("fill-rule",u.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(i,s){this._setPath(i,ls(i._parts,s))},_updateCircle:function(i){var s=i._point,u=Math.max(Math.round(i._radius),1),h=Math.max(Math.round(i._radiusY),1)||u,l="a"+u+","+h+" 0 1,0 ",p=i._empty()?"M0 0":"M"+(s.x-u)+","+s.y+l+u*2+",0 "+l+-u*2+",0 ";this._setPath(i,p)},_setPath:function(i,s){i._path.setAttribute("d",s)},_bringToFront:function(i){ri(i._path)},_bringToBack:function(i){si(i._path)}});bn&&or.include(Am);function _c(i){return ei||bn?new or(i):null}ut.include({getRenderer:function(i){var s=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var s=this._paneRenderers[i];return s===void 0&&(s=this._createRenderer({pane:i}),this._paneRenderers[i]=s),s},_createRenderer:function(i){return this.options.preferCanvas&&gc(i)||_c(i)}});var vc=hi.extend({initialize:function(i,s){hi.prototype.initialize.call(this,this._boundsToLatLngs(i),s)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=et(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Cm(i,s){return new vc(i,s)}or.create=Ms,or.pointsToPath=ls,$e.geometryToLayer=xa,$e.coordsToLatLng=Ra,$e.coordsToLatLngs=Cs,$e.latLngToCoords=Ma,$e.latLngsToCoords=ks,$e.getFeature=ci,$e.asFeature=xs,ut.mergeOptions({boxZoom:!0});var yc=Ce.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){it(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){At(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){St(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Xi(),fa(),this._startPoint=this._map.mouseEventToContainerPoint(i),it(document,{contextmenu:Fe,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=rt("div","leaflet-zoom-box",this._container),tt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var s=new Y(this._point,this._startPoint),u=s.getSize();kt(this._box,s.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(St(this._box),Lt(this._container,"leaflet-crosshair")),Yi(),pa(),At(document,{contextmenu:Fe,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var s=new wt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(i){i.keyCode===27&&this._finish()}});ut.addInitHook("addHandler","boxZoom",yc),ut.mergeOptions({doubleClickZoom:!0});var wc=Ce.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var s=this._map,u=s.getZoom(),h=s.options.zoomDelta,l=i.originalEvent.shiftKey?u-h:u+h;s.options.doubleClickZoom==="center"?s.setZoom(l):s.setZoomAround(i.containerPoint,l)}});ut.addInitHook("addHandler","doubleClickZoom",wc),ut.mergeOptions({dragging:!0,inertia:!In,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Tc=Ce.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new An(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}tt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Lt(this._map._container,"leaflet-grab"),Lt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=et(this._map.options.maxBounds);this._offsetLimit=at(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var s=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(s),this._prunePositions(s)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,s){return i-(i-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;i.x<s.min.x&&(i.x=this._viscousLimit(i.x,s.min.x)),i.y<s.min.y&&(i.y=this._viscousLimit(i.y,s.min.y)),i.x>s.max.x&&(i.x=this._viscousLimit(i.x,s.max.x)),i.y>s.max.y&&(i.y=this._viscousLimit(i.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,s=Math.round(i/2),u=this._initialWorldOffset,h=this._draggable._newPos.x,l=(h-s+u)%i+s-u,p=(h+s+u)%i-s-u,g=Math.abs(l+u)<Math.abs(p+u)?l:p;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=g},_onDragEnd:function(i){var s=this._map,u=s.options,h=!u.inertia||this._times.length<2;if(s.fire("dragend",i),h)s.fire("moveend");else{this._prunePositions(+new Date);var l=this._lastPos.subtract(this._positions[0]),p=(this._lastTime-this._times[0])/1e3,g=u.easeLinearity,y=l.multiplyBy(g/p),T=y.distanceTo([0,0]),I=Math.min(u.inertiaMaxSpeed,T),M=y.multiplyBy(I/T),B=I/(u.inertiaDeceleration*g),ht=M.multiplyBy(-B/2).round();!ht.x&&!ht.y?s.fire("moveend"):(ht=s._limitOffset(ht,s.options.maxBounds),k(function(){s.panBy(ht,{duration:B,easeLinearity:g,noMoveStart:!0,animate:!0})}))}}});ut.addInitHook("addHandler","dragging",Tc),ut.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ec=Ce.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),it(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),At(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,s=document.documentElement,u=i.scrollTop||s.scrollTop,h=i.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var s=this._panKeys={},u=this.keyCodes,h,l;for(h=0,l=u.left.length;h<l;h++)s[u.left[h]]=[-1*i,0];for(h=0,l=u.right.length;h<l;h++)s[u.right[h]]=[i,0];for(h=0,l=u.down.length;h<l;h++)s[u.down[h]]=[0,i];for(h=0,l=u.up.length;h<l;h++)s[u.up[h]]=[0,-1*i]},_setZoomDelta:function(i){var s=this._zoomKeys={},u=this.keyCodes,h,l;for(h=0,l=u.zoomIn.length;h<l;h++)s[u.zoomIn[h]]=i;for(h=0,l=u.zoomOut.length;h<l;h++)s[u.zoomOut[h]]=-i},_addHooks:function(){it(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){At(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var s=i.keyCode,u=this._map,h;if(s in this._panKeys)(!u._panAnim||!u._panAnim._inProgress)&&(h=this._panKeys[s],i.shiftKey&&(h=z(h).multiplyBy(3)),u.panBy(h),u.options.maxBounds&&u.panInsideBounds(u.options.maxBounds));else if(s in this._zoomKeys)u.setZoom(u.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;Fe(i)}}});ut.addInitHook("addHandler","keyboard",Ec),ut.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ic=Ce.extend({addHooks:function(){it(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){At(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var s=Gh(i),u=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var h=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),h),Fe(i)},_performZoom:function(){var i=this._map,s=i.getZoom(),u=this._map.options.zoomSnap||0;i._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),l=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,p=u?Math.ceil(l/u)*u:l,g=i._limitZoom(s+(this._delta>0?p:-p))-s;this._delta=0,this._startTime=null,!!g&&(i.options.scrollWheelZoom==="center"?i.setZoom(s+g):i.setZoomAround(this._lastMousePos,s+g))}});ut.addInitHook("addHandler","scrollWheelZoom",Ic),ut.mergeOptions({tap:!0,tapTolerance:15});var bc=Ce.extend({addHooks:function(){it(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){At(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(!!i.touches){if(ge(i),this._fireClick=!0,i.touches.length>1){this._fireClick=!1,clearTimeout(this._holdTimeout);return}var s=i.touches[0],u=s.target;this._startPos=this._newPos=new q(s.clientX,s.clientY),u.tagName&&u.tagName.toLowerCase()==="a"&&tt(u,"leaflet-active"),this._holdTimeout=setTimeout(c(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",s))},this),1e3),this._simulateEvent("mousedown",s),it(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(i){if(clearTimeout(this._holdTimeout),At(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&i&&i.changedTouches){var s=i.changedTouches[0],u=s.target;u&&u.tagName&&u.tagName.toLowerCase()==="a"&&Lt(u,"leaflet-active"),this._simulateEvent("mouseup",s),this._isTapValid()&&this._simulateEvent("click",s)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(i){var s=i.touches[0];this._newPos=new q(s.clientX,s.clientY),this._simulateEvent("mousemove",s)},_simulateEvent:function(i,s){var u=document.createEvent("MouseEvents");u._simulated=!0,s.target._simulatedClick=!0,u.initMouseEvent(i,!0,!0,window,1,s.screenX,s.screenY,s.clientX,s.clientY,!1,!1,!1,!1,0,null),s.target.dispatchEvent(u)}});pe&&(!fe||Zt)&&ut.addInitHook("addHandler","tap",bc),ut.mergeOptions({touchZoom:pe&&!In,bounceAtZoomLimits:!0});var Sc=Ce.extend({addHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),it(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Lt(this._map._container,"leaflet-touch-zoom"),At(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var s=this._map;if(!(!i.touches||i.touches.length!==2||s._animatingZoom||this._zooming)){var u=s.mouseEventToContainerPoint(i.touches[0]),h=s.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(u.add(h)._divideBy(2))),this._startDist=u.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),it(document,"touchmove",this._onTouchMove,this),it(document,"touchend",this._onTouchEnd,this),ge(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var s=this._map,u=s.mouseEventToContainerPoint(i.touches[0]),h=s.mouseEventToContainerPoint(i.touches[1]),l=u.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(l,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&l<1||this._zoom>s.getMaxZoom()&&l>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,l===1)return}else{var p=u._add(h)._divideBy(2)._subtract(this._centerPoint);if(l===1&&p.x===0&&p.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(p),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),X(this._animRequest);var g=c(s._move,s,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=k(g,this,!0),ge(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,X(this._animRequest),At(document,"touchmove",this._onTouchMove,this),At(document,"touchend",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ut.addInitHook("addHandler","touchZoom",Sc),ut.BoxZoom=yc,ut.DoubleClickZoom=wc,ut.Drag=Tc,ut.Keyboard=Ec,ut.ScrollWheelZoom=Ic,ut.Tap=bc,ut.TouchZoom=Sc,n.version=r,n.Control=we,n.control=er,n.Browser=gs,n.Evented=de,n.Mixin=em,n.Util=Tn,n.Class=Ht,n.Handler=Ce,n.extend=o,n.bind=c,n.stamp=f,n.setOptions=D,n.DomEvent=Kp,n.DomUtil=jp,n.PosAnimation=Kh,n.Draggable=An,n.LineUtil=om,n.PolyUtil=am,n.Point=q,n.point=z,n.Bounds=Y,n.bounds=at,n.Transformation=zi,n.transformation=Qe,n.Projection=um,n.LatLng=Q,n.latLng=ft,n.LatLngBounds=wt,n.latLngBounds=et,n.CRS=Wt,n.GeoJSON=$e,n.geoJSON=hc,n.geoJson=ym,n.Layer=Te,n.LayerGroup=oi,n.layerGroup=lm,n.FeatureGroup=ai,n.featureGroup=dm,n.ImageOverlay=Rs,n.imageOverlay=wm,n.VideoOverlay=cc,n.videoOverlay=Tm,n.SVGOverlay=lc,n.svgOverlay=Em,n.DivOverlay=qe,n.Popup=li,n.popup=Im,n.Tooltip=di,n.tooltip=bm,n.Icon=ui,n.icon=fm,n.DivIcon=dc,n.divIcon=Sm,n.Marker=Ls,n.marker=pm,n.TileLayer=fi,n.tileLayer=fc,n.GridLayer=rr,n.gridLayer=Pm,n.SVG=or,n.svg=_c,n.Renderer=ke,n.Canvas=mc,n.canvas=gc,n.Path=on,n.CircleMarker=As,n.circleMarker=mm,n.Circle=ka,n.circle=gm,n.Polyline=Ve,n.polyline=_m,n.Polygon=hi,n.polygon=vm,n.Rectangle=vc,n.rectangle=Cm,n.Map=ut,n.map=Jp;var km=window.L;n.noConflict=function(){return window.L=km,this},window.L=n})})(su,su.exports);var KE=su.exports;/*! Capacitor: https://capacitorjs.com/ - MIT License */const tg=e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t},r=(a,c)=>{n.platforms.set(a,c)},o=a=>{n.platforms.has(a)&&(n.currentPlatform=n.platforms.get(a))};return n.addPlatform=r,n.setPlatform=o,n},eg=e=>e.CapacitorPlatforms=tg(e),Xl=eg(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});Xl.addPlatform;Xl.setPlatform;var Ei;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Ei||(Ei={}));class Ba extends Error{constructor(t,n){super(t);this.message=t,this.code=n}}const ng=e=>{var t,n;return(e==null?void 0:e.androidBridge)?"android":((n=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||n===void 0?void 0:n.bridge)?"ios":"web"},ig=e=>{var t,n,r,o,a;const c=e.CapacitorCustomPlatform||null,d=e.Capacitor||{},f=d.Plugins=d.Plugins||{},m=e.CapacitorPlatforms,_=()=>c!==null?c.name:ng(e),v=((t=m==null?void 0:m.currentPlatform)===null||t===void 0?void 0:t.getPlatform)||_,E=()=>v()!=="web",P=((n=m==null?void 0:m.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||E,C=V=>{const b=_t.get(V);return!!((b==null?void 0:b.platforms.has(v()))||mt(V))},D=((r=m==null?void 0:m.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||C,nt=V=>{var b;return(b=d.PluginHeaders)===null||b===void 0?void 0:b.find(x=>x.name===V)},mt=((o=m==null?void 0:m.currentPlatform)===null||o===void 0?void 0:o.getPluginHeader)||nt,gt=V=>e.console.error(V),st=(V,b,x)=>Promise.reject(`${x} does not have an implementation of "${b}".`),_t=new Map,yt=(V,b={})=>{const x=_t.get(V);if(x)return console.warn(`Capacitor plugin "${V}" already registered. Cannot register plugins twice.`),x.proxy;const U=v(),k=mt(V);let X;const Tn=async()=>(!X&&U in b?X=typeof b[U]=="function"?X=await b[U]():X=b[U]:c!==null&&!X&&"web"in b&&(X=typeof b.web=="function"?X=await b.web():X=b.web),X),Ht=(z,Y)=>{var at,wt;if(k){const et=k==null?void 0:k.methods.find(Q=>Y===Q.name);if(et)return et.rtype==="promise"?Q=>d.nativePromise(V,Y.toString(),Q):(Q,ft)=>d.nativeCallback(V,Y.toString(),Q,ft);if(z)return(at=z[Y])===null||at===void 0?void 0:at.bind(z)}else{if(z)return(wt=z[Y])===null||wt===void 0?void 0:wt.bind(z);throw new Ba(`"${V}" plugin is not implemented on ${U}`,Ei.Unimplemented)}},bt=z=>{let Y;const at=(...wt)=>{const et=Tn().then(Q=>{const ft=Ht(Q,z);if(ft){const Wt=ft(...wt);return Y=Wt==null?void 0:Wt.remove,Wt}else throw new Ba(`"${V}.${z}()" is not implemented on ${U}`,Ei.Unimplemented)});return z==="addListener"&&(et.remove=async()=>Y()),et};return at.toString=()=>`${z.toString()}() { [capacitor code] }`,Object.defineProperty(at,"name",{value:z,writable:!1,configurable:!1}),at},dt=bt("addListener"),de=bt("removeListener"),q=(z,Y)=>{const at=dt({eventName:z},Y),wt=async()=>{const Q=await at;de({eventName:z,callbackId:Q},Y)},et=new Promise(Q=>at.then(()=>Q({remove:wt})));return et.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await wt()},et},Oe=new Proxy({},{get(z,Y){switch(Y){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?q:dt;case"removeListener":return de;default:return bt(Y)}}});return f[V]=Oe,_t.set(V,{name:V,proxy:Oe,platforms:new Set([...Object.keys(b),...k?[U]:[]])}),Oe},G=((a=m==null?void 0:m.currentPlatform)===null||a===void 0?void 0:a.registerPlugin)||yt;return d.convertFileSrc||(d.convertFileSrc=V=>V),d.getPlatform=v,d.handleError=gt,d.isNativePlatform=P,d.isPluginAvailable=D,d.pluginMethodNoop=st,d.registerPlugin=G,d.Exception=Ba,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d},rg=e=>e.Capacitor=ig(e),to=rg(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),Yl=to.registerPlugin;to.Plugins;class JE{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o);const a=async()=>this.removeListener(t,n),c=Promise.resolve({remove:a});return Object.defineProperty(c,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await a()}}),c}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,n){const r=this.listeners[t];r&&r.forEach(o=>o(n))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(t="not implemented"){return new to.Exception(t,Ei.Unimplemented)}unavailable(t="not available"){return new to.Exception(t,Ei.Unavailable)}async removeListener(t,n){const r=this.listeners[t];if(!r)return;const o=r.indexOf(n);this.listeners[t].splice(o,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){!t||(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}}const XE=Yl("Geolocation",{web:()=>import("./web.c2bb6551.js").then(e=>new e.GeolocationWeb)}),pi=[];function YE(e,t=On){let n;const r=new Set;function o(d){if(Fm(e,d)&&(e=d,n)){const f=!pi.length;for(const m of r)m[1](),pi.push(m,e);if(f){for(let m=0;m<pi.length;m+=2)pi[m][0](pi[m+1]);pi.length=0}}}function a(d){o(d(e))}function c(d,f=On){const m=[d,f];return r.add(m),r.size===1&&(n=t(o)||On),d(e),()=>{r.delete(m),r.size===0&&(n(),n=null)}}return{set:o,update:a,subscribe:c}}const sg=Math.asin,xc=Math.cos,og=Math.sin,ag=Math.sqrt,ug=Math.PI,hg=6378137;function cg(e){return e*e}function Us(e){return e*ug/180}function Rc(e){return cg(og(e/2))}function lg(e,t){const n=Us(Array.isArray(e)?e[1]:e.latitude||e.lat),r=Us(Array.isArray(t)?t[1]:t.latitude||t.lat),o=Us(Array.isArray(e)?e[0]:e.longitude||e.lng||e.lon),a=Us(Array.isArray(t)?t[0]:t.longitude||t.lng||t.lon),c=Rc(r-n)+xc(n)*xc(r)*Rc(a-o);return 2*hg*sg(ag(c))}var QE=lg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},fg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[n++],c=e[n++],d=e[n++],f=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const a=e[n++],c=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return t.join("")},pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const a=e[o],c=o+1<e.length,d=c?e[o+1]:0,f=o+2<e.length,m=f?e[o+2]:0,_=a>>2,v=(a&3)<<4|d>>4;let E=(d&15)<<2|m>>6,P=m&63;f||(P=64,c||(E=64)),r.push(n[_],n[v],n[E],n[P])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const a=n[e.charAt(o++)],d=o<e.length?n[e.charAt(o)]:0;++o;const m=o<e.length?n[e.charAt(o)]:64;++o;const v=o<e.length?n[e.charAt(o)]:64;if(++o,a==null||d==null||m==null||v==null)throw Error();const E=a<<2|d>>4;if(r.push(E),m!==64){const P=d<<4&240|m>>2;if(r.push(P),v!==64){const C=m<<6&192|v;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},mg=function(e){try{return pg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ql(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function td(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ed(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _g(){return Dt().indexOf("Electron/")>=0}function nd(){const e=Dt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function vg(){return Dt().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="FirebaseError";class Kn extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=yg,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],c=a?wg(a,r):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Kn(o,d,r)}}function wg(e,t){return e.replace(Tg,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Tg=/\{\$([^}]+)}/g;function Eg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function eo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const a=e[o],c=t[o];if(Mc(a)&&Mc(c)){if(!eo(a,c))return!1}else if(a!==c)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Mc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function hr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");t[decodeURIComponent(o)]=decodeURIComponent(a)}}),t}function cr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Ig(e,t){const n=new bg(e,t);return n.subscribe.bind(n)}class bg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sg(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=Fa),o.error===void 0&&(o.error=Fa),o.complete===void 0&&(o.complete=Fa);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){return e&&e._delegate?e._delegate:e}class Ii{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new gg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ag(t))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(t=xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xn){return this.instances.has(t)}getOptions(t=xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&c.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&t(c,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xn){return this.component?this.component.multipleInstances?t:xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lg(e){return e===xn?void 0:e}function Ag(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const kg={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},xg=lt.INFO,Rg={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Mg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=Rg[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ou{constructor(t){this.name=t,this._logLevel=xg,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Og(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Og(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ou="@firebase/app",Nc="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Ou("@firebase/app"),Dg="@firebase/app-compat",Ug="@firebase/analytics-compat",Bg="@firebase/analytics",Fg="@firebase/app-check-compat",zg="@firebase/app-check",Vg="@firebase/auth",$g="@firebase/auth-compat",qg="@firebase/database",Hg="@firebase/database-compat",Wg="@firebase/functions",Zg="@firebase/functions-compat",jg="@firebase/installations",Gg="@firebase/installations-compat",Kg="@firebase/messaging",Jg="@firebase/messaging-compat",Xg="@firebase/performance",Yg="@firebase/performance-compat",Qg="@firebase/remote-config",t_="@firebase/remote-config-compat",e_="@firebase/storage",n_="@firebase/storage-compat",i_="@firebase/firestore",r_="@firebase/firestore-compat",s_="firebase",o_="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="[DEFAULT]",a_={[ou]:"fire-core",[Dg]:"fire-core-compat",[Bg]:"fire-analytics",[Ug]:"fire-analytics-compat",[zg]:"fire-app-check",[Fg]:"fire-app-check-compat",[Vg]:"fire-auth",[$g]:"fire-auth-compat",[qg]:"fire-rtdb",[Hg]:"fire-rtdb-compat",[Wg]:"fire-fn",[Zg]:"fire-fn-compat",[jg]:"fire-iid",[Gg]:"fire-iid-compat",[Kg]:"fire-fcm",[Jg]:"fire-fcm-compat",[Xg]:"fire-perf",[Yg]:"fire-perf-compat",[Qg]:"fire-rc",[t_]:"fire-rc-compat",[e_]:"fire-gcs",[n_]:"fire-gcs-compat",[i_]:"fire-fst",[r_]:"fire-fst-compat","fire-js":"fire-js",[s_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map,au=new Map;function u_(e,t){try{e.container.addComponent(t)}catch(n){Du.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tr(e){const t=e.name;if(au.has(t))return Du.debug(`There were multiple attempts to register component ${t}.`),!1;au.set(t,e);for(const n of no.values())u_(n,e);return!0}function Uu(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},io=new Br("app","Firebase",h_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw io.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=o_;function tI(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:id,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw io.create("bad-app-name",{appName:String(r)});const o=no.get(r);if(o){if(eo(e,o.options)&&eo(n,o.config))return o;throw io.create("duplicate-app",{appName:r})}const a=new Cg(r);for(const d of au.values())a.addComponent(d);const c=new c_(e,n,a);return no.set(r,c),c}function rd(e=id){const t=no.get(e);if(!t)throw io.create("no-app",{appName:e});return t}function pn(e,t,n){var r;let o=(r=a_[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),c=t.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${t}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Du.warn(d.join(" "));return}Tr(new Ii(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(e){Tr(new Ii("platform-logger",t=>new Ng(t),"PRIVATE")),pn(ou,Nc,e),pn(ou,Nc,"esm2017"),pn("fire-js","")}l_("");var d_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,Bu=Bu||{},W=d_||self;function ro(){}function uu(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Vr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function f_(e){return Object.prototype.hasOwnProperty.call(e,za)&&e[za]||(e[za]=++p_)}var za="closure_uid_"+(1e9*Math.random()>>>0),p_=0;function m_(e,t,n){return e.call.apply(e.bind,arguments)}function g_(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,r),e.apply(t,o)}}return function(){return e.apply(t,arguments)}}function Ft(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=m_:Ft=g_,Ft.apply(null,arguments)}function Bs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function qt(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(r,o,a){for(var c=Array(arguments.length-2),d=2;d<arguments.length;d++)c[d-2]=arguments[d];return t.prototype[o].apply(r,c)}}function yn(){this.s=this.s,this.o=this.o}var __=0,v_={};yn.prototype.s=!1;yn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),__!=0)){var e=f_(this);delete v_[e]}};yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},od=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,o=typeof e=="string"?e.split(""):e;for(let a=0;a<r;a++)a in o&&t.call(n,o[a],a,e)};function y_(e){t:{var t=cv;const n=e.length,r=typeof e=="string"?e.split(""):e;for(let o=0;o<n;o++)if(o in r&&t.call(void 0,r[o],o,e)){t=o;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Oc(e){return Array.prototype.concat.apply([],arguments)}function Fu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function so(e){return/^[\s\xa0]*$/.test(e)}var Dc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Yt(e,t){return e.indexOf(t)!=-1}function Va(e,t){return e<t?-1:e>t?1:0}var Qt;t:{var Uc=W.navigator;if(Uc){var Bc=Uc.userAgent;if(Bc){Qt=Bc;break t}}Qt=""}function zu(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ad(e){const t={};for(const n in e)t[n]=e[n];return t}var Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ud(e,t){let n,r;for(let o=1;o<arguments.length;o++){r=arguments[o];for(n in r)e[n]=r[n];for(let a=0;a<Fc.length;a++)n=Fc[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Vu(e){return Vu[" "](e),e}Vu[" "]=ro;function w_(e){var t=I_;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var T_=Yt(Qt,"Opera"),bi=Yt(Qt,"Trident")||Yt(Qt,"MSIE"),hd=Yt(Qt,"Edge"),hu=hd||bi,cd=Yt(Qt,"Gecko")&&!(Yt(Qt.toLowerCase(),"webkit")&&!Yt(Qt,"Edge"))&&!(Yt(Qt,"Trident")||Yt(Qt,"MSIE"))&&!Yt(Qt,"Edge"),E_=Yt(Qt.toLowerCase(),"webkit")&&!Yt(Qt,"Edge");function ld(){var e=W.document;return e?e.documentMode:void 0}var oo;t:{var $a="",qa=function(){var e=Qt;if(cd)return/rv:([^\);]+)(\)|;)/.exec(e);if(hd)return/Edge\/([\d\.]+)/.exec(e);if(bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(E_)return/WebKit\/(\S+)/.exec(e);if(T_)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(qa&&($a=qa?qa[1]:""),bi){var Ha=ld();if(Ha!=null&&Ha>parseFloat($a)){oo=String(Ha);break t}}oo=$a}var I_={};function b_(){return w_(function(){let e=0;const t=Dc(String(oo)).split("."),n=Dc("9").split("."),r=Math.max(t.length,n.length);for(let c=0;e==0&&c<r;c++){var o=t[c]||"",a=n[c]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o[0].length==0&&a[0].length==0)break;e=Va(o[1].length==0?0:parseInt(o[1],10),a[1].length==0?0:parseInt(a[1],10))||Va(o[2].length==0,a[2].length==0)||Va(o[2],a[2]),o=o[3],a=a[3]}while(e==0)}return 0<=e})}var cu;if(W.document&&bi){var zc=ld();cu=zc||parseInt(oo,10)||void 0}else cu=void 0;var S_=cu,P_=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{W.addEventListener("test",ro,t),W.removeEventListener("test",ro,t)}catch{}return e}();function Jt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Jt.prototype.h=function(){this.defaultPrevented=!0};function Er(e,t){if(Jt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(cd){t:{try{Vu(t.nodeName);var o=!0;break t}catch{}o=!1}o||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:L_[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Er.Z.h.call(this)}}qt(Er,Jt);var L_={2:"touch",3:"pen",4:"mouse"};Er.prototype.h=function(){Er.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),A_=0;function C_(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=o,this.key=++A_,this.ca=this.fa=!1}function Po(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Lo(e){this.src=e,this.g={},this.h=0}Lo.prototype.add=function(e,t,n,r,o){var a=e.toString();e=this.g[a],e||(e=this.g[a]=[],this.h++);var c=du(e,t,r,o);return-1<c?(t=e[c],n||(t.fa=!1)):(t=new C_(t,this.src,a,!!r,o),t.fa=n,e.push(t)),t};function lu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],o=sd(r,t),a;(a=0<=o)&&Array.prototype.splice.call(r,o,1),a&&(Po(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function du(e,t,n,r){for(var o=0;o<e.length;++o){var a=e[o];if(!a.ca&&a.listener==t&&a.capture==!!n&&a.ia==r)return o}return-1}var $u="closure_lm_"+(1e6*Math.random()|0),Wa={};function dd(e,t,n,r,o){if(r&&r.once)return pd(e,t,n,r,o);if(Array.isArray(t)){for(var a=0;a<t.length;a++)dd(e,t[a],n,r,o);return null}return n=Wu(n),e&&e[$r]?e.N(t,n,Vr(r)?!!r.capture:!!r,o):fd(e,t,n,!1,r,o)}function fd(e,t,n,r,o,a){if(!t)throw Error("Invalid event type");var c=Vr(o)?!!o.capture:!!o,d=Hu(e);if(d||(e[$u]=d=new Lo(e)),n=d.add(t,n,r,c,a),n.proxy)return n;if(r=k_(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)P_||(o=c),o===void 0&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(gd(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function k_(){function e(n){return t.call(e.src,e.listener,n)}var t=x_;return e}function pd(e,t,n,r,o){if(Array.isArray(t)){for(var a=0;a<t.length;a++)pd(e,t[a],n,r,o);return null}return n=Wu(n),e&&e[$r]?e.O(t,n,Vr(r)?!!r.capture:!!r,o):fd(e,t,n,!0,r,o)}function md(e,t,n,r,o){if(Array.isArray(t))for(var a=0;a<t.length;a++)md(e,t[a],n,r,o);else r=Vr(r)?!!r.capture:!!r,n=Wu(n),e&&e[$r]?(e=e.i,t=String(t).toString(),t in e.g&&(a=e.g[t],n=du(a,n,r,o),-1<n&&(Po(a[n]),Array.prototype.splice.call(a,n,1),a.length==0&&(delete e.g[t],e.h--)))):e&&(e=Hu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=du(t,n,r,o)),(n=-1<e?t[e]:null)&&qu(n))}function qu(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[$r])lu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(gd(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Hu(t))?(lu(n,e),n.h==0&&(n.src=null,t[$u]=null)):Po(e)}}}function gd(e){return e in Wa?Wa[e]:Wa[e]="on"+e}function x_(e,t){if(e.ca)e=!0;else{t=new Er(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&qu(e),e=n.call(r,t)}return e}function Hu(e){return e=e[$u],e instanceof Lo?e:null}var Za="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(e){return typeof e=="function"?e:(e[Za]||(e[Za]=function(t){return e.handleEvent(t)}),e[Za])}function Ut(){yn.call(this),this.i=new Lo(this),this.P=this,this.I=null}qt(Ut,yn);Ut.prototype[$r]=!0;Ut.prototype.removeEventListener=function(e,t,n,r){md(this,e,t,n,r)};function zt(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Jt(t,e);else if(t instanceof Jt)t.target=t.target||e;else{var o=t;t=new Jt(r,e),ud(t,o)}if(o=!0,n)for(var a=n.length-1;0<=a;a--){var c=t.g=n[a];o=Fs(c,r,!0,t)&&o}if(c=t.g=e,o=Fs(c,r,!0,t)&&o,o=Fs(c,r,!1,t)&&o,n)for(a=0;a<n.length;a++)c=t.g=n[a],o=Fs(c,r,!1,t)&&o}Ut.prototype.M=function(){if(Ut.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Po(n[r]);delete e.g[t],e.h--}}this.I=null};Ut.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ut.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Fs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,a=0;a<t.length;++a){var c=t[a];if(c&&!c.ca&&c.capture==n){var d=c.listener,f=c.ia||c.src;c.fa&&lu(e.i,c),o=d.call(f,r)!==!1&&o}}return o&&!r.defaultPrevented}var Zu=W.JSON.stringify;function R_(){var e=vd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class M_{constructor(){this.h=this.g=null}add(t,n){const r=_d.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _d=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new N_,e=>e.reset());class N_{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function O_(e){W.setTimeout(()=>{throw e},0)}function ju(e,t){fu||D_(),pu||(fu(),pu=!0),vd.add(e,t)}var fu;function D_(){var e=W.Promise.resolve(void 0);fu=function(){e.then(U_)}}var pu=!1,vd=new M_;function U_(){for(var e;e=R_();){try{e.h.call(e.g)}catch(n){O_(n)}var t=_d;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}pu=!1}function Ao(e,t){Ut.call(this),this.h=e||1,this.g=t||W,this.j=Ft(this.kb,this),this.l=Date.now()}qt(Ao,Ut);O=Ao.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),zt(this,"tick"),this.da&&(Gu(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gu(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}O.M=function(){Ao.Z.M.call(this),Gu(this),delete this.g};function Ku(e,t,n){if(typeof e=="function")n&&(e=Ft(e,n));else if(e&&typeof e.handleEvent=="function")e=Ft(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:W.setTimeout(e,t||0)}function yd(e){e.g=Ku(()=>{e.g=null,e.i&&(e.i=!1,yd(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class B_ extends yn{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:yd(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(e){yn.call(this),this.h=e,this.g={}}qt(Ir,yn);var Vc=[];function wd(e,t,n,r){Array.isArray(n)||(n&&(Vc[0]=n.toString()),n=Vc);for(var o=0;o<n.length;o++){var a=dd(t,n[o],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Td(e){zu(e.g,function(t,n){this.g.hasOwnProperty(n)&&qu(t)},e),e.g={}}Ir.prototype.M=function(){Ir.Z.M.call(this),Td(this)};Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Co(){this.g=!0}Co.prototype.Aa=function(){this.g=!1};function F_(e,t,n,r,o,a){e.info(function(){if(e.g)if(a)for(var c="",d=a.split("&"),f=0;f<d.length;f++){var m=d[f].split("=");if(1<m.length){var _=m[0];m=m[1];var v=_.split("_");c=2<=v.length&&v[1]=="type"?c+(_+"="+m+"&"):c+(_+"=redacted&")}}else c=null;else c=a;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+`
`+n+`
`+c})}function z_(e,t,n,r,o,a,c){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+`
`+n+`
`+a+" "+c})}function gi(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$_(e,n)+(r?" "+r:"")})}function V_(e,t){e.info(function(){return"TIMEOUT: "+t})}Co.prototype.info=function(){};function $_(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var a=o[0];if(a!="noop"&&a!="stop"&&a!="close")for(var c=1;c<o.length;c++)o[c]=""}}}}return Zu(n)}catch{return t}}var Jn={},$c=null;function ko(){return $c=$c||new Ut}Jn.Ma="serverreachability";function Ed(e){Jt.call(this,Jn.Ma,e)}qt(Ed,Jt);function br(e){const t=ko();zt(t,new Ed(t,e))}Jn.STAT_EVENT="statevent";function Id(e,t){Jt.call(this,Jn.STAT_EVENT,e),this.stat=t}qt(Id,Jt);function te(e){const t=ko();zt(t,new Id(t,e))}Jn.Na="timingevent";function bd(e,t){Jt.call(this,Jn.Na,e),this.size=t}qt(bd,Jt);function qr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){e()},t)}var xo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Sd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ju(){}Ju.prototype.h=null;function qc(e){return e.h||(e.h=e.i())}function Pd(){}var Hr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Xu(){Jt.call(this,"d")}qt(Xu,Jt);function Yu(){Jt.call(this,"c")}qt(Yu,Jt);var mu;function Ro(){}qt(Ro,Ju);Ro.prototype.g=function(){return new XMLHttpRequest};Ro.prototype.i=function(){return{}};mu=new Ro;function Wr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ir(this),this.P=q_,e=hu?125:void 0,this.W=new Ao(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ld}function Ld(){this.i=null,this.g="",this.h=!1}var q_=45e3,gu={},ao={};O=Wr.prototype;O.setTimeout=function(e){this.P=e};function _u(e,t,n){e.K=1,e.v=No(Je(t)),e.s=n,e.U=!0,Ad(e,null)}function Ad(e,t){e.F=Date.now(),Zr(e),e.A=Je(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Od(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ld,e.g=ef(e.l,n?t:null,!e.s),0<e.O&&(e.L=new B_(Ft(e.Ia,e,e.g),e.O)),wd(e.V,e.g,"readystatechange",e.gb),t=e.H?ad(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),br(1),F_(e.j,e.u,e.A,e.m,e.X,e.s)}O.gb=function(e){e=e.target;const t=this.L;t&&We(e)==3?t.l():this.Ia(e)};O.Ia=function(e){try{if(e==this.g)t:{const _=We(this.g);var t=this.g.Da();const v=this.g.ba();if(!(3>_)&&(_!=3||hu||this.g&&(this.h.h||this.g.ga()||jc(this.g)))){this.I||_!=4||t==7||(t==8||0>=v?br(3):br(2)),Mo(this);var n=this.g.ba();this.N=n;e:if(Cd(this)){var r=jc(this.g);e="";var o=r.length,a=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mn(this),pr(this);var c="";break e}this.h.i=new W.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:a&&t==o-1});r.splice(0,o),this.h.g+=e,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=n==200,z_(this.j,this.u,this.A,this.m,this.X,_,n),this.i){if(this.$&&!this.J){e:{if(this.g){var d,f=this.g;if((d=f.g?f.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!so(d)){var m=d;break e}}m=null}if(n=m)gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vu(this,n);else{this.i=!1,this.o=3,te(12),Mn(this),pr(this);break t}}this.U?(kd(this,_,c),hu&&this.i&&_==3&&(wd(this.V,this.W,"tick",this.fb),this.W.start())):(gi(this.j,this.m,c,null),vu(this,c)),_==4&&Mn(this),this.i&&!this.I&&(_==4?Xd(this.l,this):(this.i=!1,Zr(this)))}else n==400&&0<c.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),Mn(this),pr(this)}}}catch{}finally{}};function Cd(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function kd(e,t,n){let r=!0,o;for(;!e.I&&e.C<n.length;)if(o=H_(e,n),o==ao){t==4&&(e.o=4,te(14),r=!1),gi(e.j,e.m,null,"[Incomplete Response]");break}else if(o==gu){e.o=4,te(15),gi(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else gi(e.j,e.m,o,null),vu(e,o);Cd(e)&&o!=ao&&o!=gu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,te(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(t),t.L=!0,te(11))):(gi(e.j,e.m,n,"[Invalid Chunked Response]"),Mn(e),pr(e))}O.fb=function(){if(this.g){var e=We(this.g),t=this.g.ga();this.C<t.length&&(Mo(this),kd(this,e,t),this.i&&e!=4&&Zr(this))}};function H_(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ao:(n=Number(t.substring(n,r)),isNaN(n)?gu:(r+=1,r+n>t.length?ao:(t=t.substr(r,n),e.C=r+n,t)))}O.cancel=function(){this.I=!0,Mn(this)};function Zr(e){e.Y=Date.now()+e.P,xd(e,e.P)}function xd(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qr(Ft(e.eb,e),t)}function Mo(e){e.B&&(W.clearTimeout(e.B),e.B=null)}O.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(V_(this.j,this.A),this.K!=2&&(br(3),te(17)),Mn(this),this.o=2,pr(this)):xd(this,this.Y-e)};function pr(e){e.l.G==0||e.I||Xd(e.l,e)}function Mn(e){Mo(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Gu(e.W),Td(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vu(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||yu(n.i,e))){if(n.I=e.N,!e.J&&yu(n.i,e)&&n.G==3){try{var r=n.Ca.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var o=r;if(o[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)lo(n),Uo(n);else break t;oh(n),te(18)}else n.ta=o[1],0<n.ta-n.U&&37500>o[2]&&n.N&&n.A==0&&!n.v&&(n.v=qr(Ft(n.ab,n),6e3));if(1>=Bd(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Nn(n,11)}else if((e.J||n.g==e)&&lo(n),!so(t))for(o=n.Ca.g.parse(t),t=0;t<o.length;t++){let m=o[t];if(n.U=m[0],m=m[1],n.G==2)if(m[0]=="c"){n.J=m[1],n.la=m[2];const _=m[3];_!=null&&(n.ma=_,n.h.info("VER="+n.ma));const v=m[4];v!=null&&(n.za=v,n.h.info("SVER="+n.za));const E=m[5];E!=null&&typeof E=="number"&&0<E&&(r=1.5*E,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const P=e.g;if(P){const C=P.g?P.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var a=r.i;!a.g&&(Yt(C,"spdy")||Yt(C,"quic")||Yt(C,"h2"))&&(a.j=a.l,a.g=new Set,a.h&&(eh(a,a.h),a.h=null))}if(r.D){const D=P.g?P.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(r.sa=D,It(r.F,r.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var c=e;if(r.oa=tf(r,r.H?r.la:null,r.W),c.J){Fd(r.i,c);var d=c,f=r.K;f&&d.setTimeout(f),d.B&&(Mo(d),Zr(d)),r.g=c}else Kd(r);0<n.l.length&&Bo(n)}else m[0]!="stop"&&m[0]!="close"||Nn(n,7);else n.G==3&&(m[0]=="stop"||m[0]=="close"?m[0]=="stop"?Nn(n,7):sh(n):m[0]!="noop"&&n.j&&n.j.wa(m),n.A=0)}}br(4)}catch{}}function W_(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(uu(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Qu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(uu(e)||typeof e=="string")od(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(uu(e)||typeof e=="string"){n=[];for(var r=e.length,o=0;o<r;o++)n.push(o)}else for(o in n=[],r=0,e)n[r++]=o;r=W_(e),o=r.length;for(var a=0;a<o;a++)t.call(void 0,r[a],n&&n[a],e)}}function xi(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof xi)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}O=xi.prototype;O.R=function(){th(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};O.T=function(){return th(this),this.g.concat()};function th(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];zn(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var o={};for(n=t=0;t<e.g.length;)r=e.g[t],zn(o,r)||(e.g[n++]=r,o[r]=1),t++;e.g.length=n}}O.get=function(e,t){return zn(this.h,e)?this.h[e]:t};O.set=function(e,t){zn(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};O.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var o=n[r],a=this.get(o);e.call(t,a,o,this)}};function zn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Rd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Z_(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var a=e[n].substring(0,r);o=e[n].substring(r+1)}else a=e[n];t(a,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Vn(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Vn){this.g=t!==void 0?t:e.g,uo(this,e.j),this.s=e.s,ho(this,e.i),co(this,e.m),this.l=e.l,t=e.h;var n=new Sr;n.i=t.i,t.g&&(n.g=new xi(t.g),n.h=t.h),Hc(this,n),this.o=e.o}else e&&(n=String(e).match(Rd))?(this.g=!!t,uo(this,n[1]||"",!0),this.s=mr(n[2]||""),ho(this,n[3]||"",!0),co(this,n[4]),this.l=mr(n[5]||"",!0),Hc(this,n[6]||"",!0),this.o=mr(n[7]||"")):(this.g=!!t,this.h=new Sr(null,this.g))}Vn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(lr(t,Wc,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(lr(t,Wc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(lr(n,n.charAt(0)=="/"?X_:J_,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",lr(n,Q_)),e.join("")};function Je(e){return new Vn(e)}function uo(e,t,n){e.j=n?mr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ho(e,t,n){e.i=n?mr(t,!0):t}function co(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Hc(e,t,n){t instanceof Sr?(e.h=t,tv(e.h,e.g)):(n||(t=lr(t,Y_)),e.h=new Sr(t,e.g))}function It(e,t,n){e.h.set(t,n)}function No(e){return It(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function j_(e){return e instanceof Vn?Je(e):new Vn(e,void 0)}function G_(e,t,n,r){var o=new Vn(null,void 0);return e&&uo(o,e),t&&ho(o,t),n&&co(o,n),r&&(o.l=r),o}function mr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function lr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,K_),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function K_(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Wc=/[#\/\?@]/g,J_=/[#\?:]/g,X_=/[#\?]/g,Y_=/[#\?@]/g,Q_=/#/g;function Sr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wn(e){e.g||(e.g=new xi,e.h=0,e.i&&Z_(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=Sr.prototype;O.add=function(e,t){wn(this),this.i=null,e=Ri(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Md(e,t){wn(e),t=Ri(e,t),zn(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,zn(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&th(e)))}function Nd(e,t){return wn(e),t=Ri(e,t),zn(e.g.h,t)}O.forEach=function(e,t){wn(this),this.g.forEach(function(n,r){od(n,function(o){e.call(t,o,r,this)},this)},this)};O.T=function(){wn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var o=e[r],a=0;a<o.length;a++)n.push(t[r]);return n};O.R=function(e){wn(this);var t=[];if(typeof e=="string")Nd(this,e)&&(t=Oc(t,this.g.get(Ri(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Oc(t,e[n])}return t};O.set=function(e,t){return wn(this),this.i=null,e=Ri(this,e),Nd(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Od(e,t,n){Md(e,t),0<n.length&&(e.i=null,e.g.set(Ri(e,t),Fu(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],o=encodeURIComponent(String(r));r=this.R(r);for(var a=0;a<r.length;a++){var c=o;r[a]!==""&&(c+="="+encodeURIComponent(String(r[a]))),e.push(c)}}return this.i=e.join("&")};function Ri(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tv(e,t){t&&!e.j&&(wn(e),e.i=null,e.g.forEach(function(n,r){var o=r.toLowerCase();r!=o&&(Md(this,r),Od(this,o,n))},e)),e.j=t}var ev=class{constructor(e,t){this.h=e,this.g=t}};function Dd(e){this.l=e||nv,W.PerformanceNavigationTiming?(e=W.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nv=10;function Ud(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Bd(e){return e.h?1:e.g?e.g.size:0}function yu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function eh(e,t){e.g?e.g.add(t):e.h=t}function Fd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Dd.prototype.cancel=function(){if(this.i=zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function zd(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Fu(e.i)}function nh(){}nh.prototype.stringify=function(e){return W.JSON.stringify(e,void 0)};nh.prototype.parse=function(e){return W.JSON.parse(e,void 0)};function iv(){this.g=new nh}function rv(e,t,n){const r=n||"";try{Qu(e,function(o,a){let c=o;Vr(o)&&(c=Zu(o)),t.push(r+a+"="+encodeURIComponent(c))})}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function sv(e,t){const n=new Co;if(W.Image){const r=new Image;r.onload=Bs(zs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Bs(zs,n,r,"TestLoadImage: error",!1,t),r.onabort=Bs(zs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Bs(zs,n,r,"TestLoadImage: timeout",!1,t),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function zs(e,t,n,r,o){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,o(r)}catch{}}function jr(e){this.l=e.$b||null,this.j=e.ib||!1}qt(jr,Ju);jr.prototype.g=function(){return new Oo(this.l,this.j)};jr.prototype.i=function(e){return function(){return e}}({});function Oo(e,t){Ut.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ih,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qt(Oo,Ut);var ih=0;O=Oo.prototype;O.open=function(e,t){if(this.readyState!=ih)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pr(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||W).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=ih};O.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vd(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Vd(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}O.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Gr(this):Pr(this),this.readyState==3&&Vd(this)}};O.Ua=function(e){this.g&&(this.response=this.responseText=e,Gr(this))};O.Ta=function(e){this.g&&(this.response=e,Gr(this))};O.ha=function(){this.g&&Gr(this)};function Gr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pr(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Pr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ov=W.JSON.parse;function Nt(e){Ut.call(this),this.headers=new xi,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$d,this.K=this.L=!1}qt(Nt,Ut);var $d="",av=/^https?$/i,uv=["POST","PUT"];O=Nt.prototype;O.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mu.g(),this.C=this.u?qc(this.u):qc(mu),this.g.onreadystatechange=Ft(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(a){Zc(this,a);return}e=n||"";const o=new xi(this.headers);r&&Qu(r,function(a,c){o.set(c,a)}),r=y_(o.T()),n=W.FormData&&e instanceof W.FormData,!(0<=sd(uv,t))||r||n||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach(function(a,c){this.g.setRequestHeader(c,a)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wd(this),0<this.B&&((this.K=hv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.pa,this)):this.A=Ku(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(a){Zc(this,a)}};function hv(e){return bi&&b_()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function cv(e){return e.toLowerCase()=="content-type"}O.pa=function(){typeof Bu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zt(this,"timeout"),this.abort(8))};function Zc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qd(e),Do(e)}function qd(e){e.D||(e.D=!0,zt(e,"complete"),zt(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,zt(this,"complete"),zt(this,"abort"),Do(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Do(this,!0)),Nt.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Hd(this):this.cb())};O.cb=function(){Hd(this)};function Hd(e){if(e.h&&typeof Bu!="undefined"&&(!e.C[1]||We(e)!=4||e.ba()!=2)){if(e.v&&We(e)==4)Ku(e.Fa,0,e);else if(zt(e,"readystatechange"),We(e)==4){e.h=!1;try{const d=e.ba();t:switch(d){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=d===0){var o=String(e.H).match(Rd)[1]||null;if(!o&&W.self&&W.self.location){var a=W.self.location.protocol;o=a.substr(0,a.length-1)}r=!av.test(o?o.toLowerCase():"")}n=r}if(n)zt(e,"complete"),zt(e,"success");else{e.m=6;try{var c=2<We(e)?e.g.statusText:""}catch{c=""}e.j=c+" ["+e.ba()+"]",qd(e)}}finally{Do(e)}}}}function Do(e,t){if(e.g){Wd(e);const n=e.g,r=e.C[0]?ro:null;e.g=null,e.C=null,t||zt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Wd(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(W.clearTimeout(e.A),e.A=null)}function We(e){return e.g?e.g.readyState:0}O.ba=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ov(t)}};function jc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $d:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function lv(e){let t="";return zu(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function rh(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=lv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):It(e,t,n))}function ar(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zd(e){this.za=0,this.l=[],this.h=new Co,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ar("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ar("baseRetryDelayMs",5e3,e),this.$a=ar("retryDelaySeedMs",1e4,e),this.Ya=ar("forwardChannelMaxRetries",2,e),this.ra=ar("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Dd(e&&e.concurrentRequestLimit),this.Ca=new iv,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}O=Zd.prototype;O.ma=8;O.G=1;function sh(e){if(jd(e),e.G==3){var t=e.V++,n=Je(e.F);It(n,"SID",e.J),It(n,"RID",t),It(n,"TYPE","terminate"),Kr(e,n),t=new Wr(e,e.h,t,void 0),t.K=2,t.v=No(Je(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(t.v.toString(),"")),!n&&W.Image&&(new Image().src=t.v,n=!0),n||(t.g=ef(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Zr(t)}Qd(e)}O.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Uo(e){e.g&&(ah(e),e.g.cancel(),e.g=null)}function jd(e){Uo(e),e.u&&(W.clearTimeout(e.u),e.u=null),lo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&W.clearTimeout(e.m),e.m=null)}function ja(e,t){e.l.push(new ev(e.Za++,t)),e.G==3&&Bo(e)}function Bo(e){Ud(e.i)||e.m||(e.m=!0,ju(e.Ha,e),e.C=0)}function dv(e,t){return Bd(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=qr(Ft(e.Ha,e,t),Yd(e,e.C)),e.C++,!0)}O.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const o=new Wr(this,this.h,e,void 0);let a=this.s;if(this.P&&(a?(a=ad(a),ud(a,this.P)):a=this.P),this.o===null&&(o.H=a),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Gd(this,o,t),n=Je(this.F),It(n,"RID",e),It(n,"CVER",22),this.D&&It(n,"X-HTTP-Session-Id",this.D),Kr(this,n),this.o&&a&&rh(n,this.o,a),eh(this.i,o),this.Ra&&It(n,"TYPE","init"),this.ja?(It(n,"$req",t),It(n,"SID","null"),o.$=!0,_u(o,n,null)):_u(o,n,t),this.G=2}}else this.G==3&&(e?Gc(this,e):this.l.length==0||Ud(this.i)||Gc(this))};function Gc(e,t){var n;t?n=t.m:n=e.V++;const r=Je(e.F);It(r,"SID",e.J),It(r,"RID",n),It(r,"AID",e.U),Kr(e,r),e.o&&e.s&&rh(r,e.o,e.s),n=new Wr(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Gd(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),eh(e.i,n),_u(n,r,t)}function Kr(e,t){e.j&&Qu({},function(n,r){It(t,r,n)})}function Gd(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Ft(e.j.Oa,e.j,e):null;t:{var o=e.l;let a=-1;for(;;){const c=["count="+n];a==-1?0<n?(a=o[0].h,c.push("ofs="+a)):a=0:c.push("ofs="+a);let d=!0;for(let f=0;f<n;f++){let m=o[f].h;const _=o[f].g;if(m-=a,0>m)a=Math.max(0,o[f].h-100),d=!1;else try{rv(_,c,"req"+m+"_")}catch{r&&r(_)}}if(d){r=c.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,r}function Kd(e){e.g||e.u||(e.Y=1,ju(e.Ga,e),e.A=0)}function oh(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=qr(Ft(e.Ga,e),Yd(e,e.A)),e.A++,!0)}O.Ga=function(){if(this.u=null,Jd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=qr(Ft(this.bb,this),e)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,te(10),Uo(this),Jd(this))};function ah(e){e.B!=null&&(W.clearTimeout(e.B),e.B=null)}function Jd(e){e.g=new Wr(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=Je(e.oa);It(t,"RID","rpc"),It(t,"SID",e.J),It(t,"CI",e.N?"0":"1"),It(t,"AID",e.U),Kr(e,t),It(t,"TYPE","xmlhttp"),e.o&&e.s&&rh(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=No(Je(t)),n.s=null,n.U=!0,Ad(n,e)}O.ab=function(){this.v!=null&&(this.v=null,Uo(this),oh(this),te(19))};function lo(e){e.v!=null&&(W.clearTimeout(e.v),e.v=null)}function Xd(e,t){var n=null;if(e.g==t){lo(e),ah(e),e.g=null;var r=2}else if(yu(e.i,t))n=t.D,Fd(e.i,t),r=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var o=e.C;r=ko(),zt(r,new bd(r,n,t,o)),Bo(e)}else Kd(e);else if(o=t.o,o==3||o==0&&0<e.I||!(r==1&&dv(e,t)||r==2&&oh(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),o){case 1:Nn(e,5);break;case 4:Nn(e,10);break;case 3:Nn(e,6);break;default:Nn(e,2)}}}function Yd(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Nn(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var r=Ft(e.jb,e);n||(n=new Vn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||uo(n,"https"),No(n)),sv(n.toString(),r)}else te(2);e.G=0,e.j&&e.j.va(t),Qd(e),jd(e)}O.jb=function(e){e?(this.h.info("Successfully pinged google.com"),te(2)):(this.h.info("Failed to ping google.com"),te(1))};function Qd(e){e.G=0,e.I=-1,e.j&&((zd(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Fu(e.l),e.l.length=0),e.j.ua())}function tf(e,t,n){let r=j_(n);if(r.i!="")t&&ho(r,t+"."+r.i),co(r,r.m);else{const o=W.location;r=G_(o.protocol,t?t+"."+o.hostname:o.hostname,+o.port,n)}return e.aa&&zu(e.aa,function(o,a){It(r,a,o)}),t=e.D,n=e.sa,t&&n&&It(r,t,n),It(r,"VER",e.ma),Kr(e,r),r}function ef(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Nt(new jr({ib:!0})):new Nt(e.qa),t.L=e.H,t}function nf(){}O=nf.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function fo(){if(bi&&!(10<=Number(S_)))throw Error("Environmental error: no available transport.")}fo.prototype.g=function(e,t){return new le(e,t)};function le(e,t){Ut.call(this),this.g=new Zd(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!so(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!so(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Mi(this)}qt(le,Ut);le.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ju(Ft(e.hb,e,t))),te(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=tf(e,null,e.W),Bo(e)};le.prototype.close=function(){sh(this.g)};le.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,ja(this.g,t)}else this.v?(t={},t.__data__=Zu(e),ja(this.g,t)):ja(this.g,e)};le.prototype.M=function(){this.g.j=null,delete this.j,sh(this.g),delete this.g,le.Z.M.call(this)};function rf(e){Xu.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}qt(rf,Xu);function sf(){Yu.call(this),this.status=1}qt(sf,Yu);function Mi(e){this.g=e}qt(Mi,nf);Mi.prototype.xa=function(){zt(this.g,"a")};Mi.prototype.wa=function(e){zt(this.g,new rf(e))};Mi.prototype.va=function(e){zt(this.g,new sf(e))};Mi.prototype.ua=function(){zt(this.g,"b")};fo.prototype.createWebChannel=fo.prototype.g;le.prototype.send=le.prototype.u;le.prototype.open=le.prototype.m;le.prototype.close=le.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;Sd.COMPLETE="complete";Pd.EventType=Hr;Hr.OPEN="a";Hr.CLOSE="b";Hr.ERROR="c";Hr.MESSAGE="d";Ut.prototype.listen=Ut.prototype.N;Nt.prototype.listenOnce=Nt.prototype.O;Nt.prototype.getLastError=Nt.prototype.La;Nt.prototype.getLastErrorCode=Nt.prototype.Da;Nt.prototype.getStatus=Nt.prototype.ba;Nt.prototype.getResponseJson=Nt.prototype.Qa;Nt.prototype.getResponseText=Nt.prototype.ga;Nt.prototype.send=Nt.prototype.ea;var fv=function(){return new fo},pv=function(){return ko()},Ga=xo,mv=Sd,gv=Jn,Kc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_v=jr,Vs=Pd,vv=Nt;const Jc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Ou("@firebase/firestore");function Xc(){return $n.logLevel}function F(e,...t){if($n.logLevel<=lt.DEBUG){const n=t.map(uh);$n.debug(`Firestore (${Ni}): ${e}`,...n)}}function gn(e,...t){if($n.logLevel<=lt.ERROR){const n=t.map(uh);$n.error(`Firestore (${Ni}): ${e}`,...n)}}function Yc(e,...t){if($n.logLevel<=lt.WARN){const n=t.map(uh);$n.warn(`Firestore (${Ni}): ${e}`,...n)}}function uh(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e="Unexpected state"){const t=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+e;throw gn(t),new Error(t)}function vt(e,t){e||K()}function J(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ne.UNAUTHENTICATED))}shutdown(){}}class Tv{constructor(t){this.t=t,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const o=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let a=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ge,t.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const f=a;t.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},d=f=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ge)}},0),c()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string"),new yv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string"),new ne(t)}}class Ev{constructor(t,n,r){this.type="FirstParty",this.user=ne.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const o=t.auth.getAuthHeaderValueForFirstParty([]);o&&this.headers.set("Authorization",o),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Iv{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new Ev(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sv{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,n){this.o=o=>{t.enqueueRetryable(()=>(a=>(a.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`),n(a.token)))(o))};const r=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.g.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.g.getImmediate({optional:!0});o?r(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(vt(typeof n.token=="string"),new bv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hh.I=-1;class of{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const o=Pv(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<n&&(r+=t.charAt(o[a]%t.length))}return r}}function pt(e,t){return e<t?-1:e>t?1:0}function Si(e,t,n){return e.length===t.length&&e.every((r,o)=>n(r,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return he.fromMillis(Date.now())}static fromDate(t){return he.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new he(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ct(t)}static min(){return new ct(new he(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Oi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function af(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,n,r){n===void 0?n=0:n>t.length&&K(),r===void 0?r=t.length-n:r>t.length-n&&K(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Lr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Lr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let o=0;o<r;o++){const a=t.get(o),c=n.get(o);if(a<c)return-1;if(a>c)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Pt extends Lr{construct(t,n,r){return new Pt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new $(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const Lv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends Lr{construct(t,n,r){return new ie(t,n,r)}static isValidIdentifier(t){return Lv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(t){const n=[];let r="",o=0;const a=()=>{if(r.length===0)throw new $(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let c=!1;for(;o<t.length;){const d=t[o];if(d==="\\"){if(o+1===t.length)throw new $(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new $(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(r+=d,o++):(a(),o++)}if(a(),c)throw new $(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(n)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t){this.fields=t,t.sort(ie.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Si(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new $t(n)}static fromUint8Array(t){const n=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(t);return new $t(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const Av=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(e){if(vt(!!e),typeof e=="string"){let t=0;const n=Av.exec(e);if(vt(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Mt(e.seconds),nanos:Mt(e.nanos)}}function Mt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pi(e){return typeof e=="string"?$t.fromBase64String(e):$t.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hf(e){const t=e.mapValue.fields.__previous_value__;return uf(t)?hf(t):t}function Ar(e){const t=_n(e.mapValue.fields.__local_write_time__.timestampValue);return new he(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){return e==null}function po(e){return e===0&&1/e==-1/0}function Cv(e){return typeof e=="number"&&Number.isInteger(e)&&!po(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(Pt.fromString(t))}static fromName(t){return new Z(Pt.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new Pt(t.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?uf(e)?4:10:K()}function Ne(e,t){if(e===t)return!0;const n=qn(e);if(n!==qn(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ar(e).isEqual(Ar(t));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=_n(r.timestampValue),c=_n(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,o){return Pi(r.bytesValue).isEqual(Pi(o.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,o){return Mt(r.geoPointValue.latitude)===Mt(o.geoPointValue.latitude)&&Mt(r.geoPointValue.longitude)===Mt(o.geoPointValue.longitude)}(e,t);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return Mt(r.integerValue)===Mt(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=Mt(r.doubleValue),c=Mt(o.doubleValue);return a===c?po(a)===po(c):isNaN(a)&&isNaN(c)}return!1}(e,t);case 9:return Si(e.arrayValue.values||[],t.arrayValue.values||[],Ne);case 10:return function(r,o){const a=r.mapValue.fields||{},c=o.mapValue.fields||{};if(Qc(a)!==Qc(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!Ne(a[d],c[d])))return!1;return!0}(e,t);default:return K()}}function Cr(e,t){return(e.values||[]).find(n=>Ne(n,t))!==void 0}function Li(e,t){if(e===t)return 0;const n=qn(e),r=qn(t);if(n!==r)return pt(n,r);switch(n){case 0:return 0;case 1:return pt(e.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Mt(o.integerValue||o.doubleValue),d=Mt(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(e,t);case 3:return tl(e.timestampValue,t.timestampValue);case 4:return tl(Ar(e),Ar(t));case 5:return pt(e.stringValue,t.stringValue);case 6:return function(o,a){const c=Pi(o),d=Pi(a);return c.compareTo(d)}(e.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),d=a.split("/");for(let f=0;f<c.length&&f<d.length;f++){const m=pt(c[f],d[f]);if(m!==0)return m}return pt(c.length,d.length)}(e.referenceValue,t.referenceValue);case 8:return function(o,a){const c=pt(Mt(o.latitude),Mt(a.latitude));return c!==0?c:pt(Mt(o.longitude),Mt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(o,a){const c=o.values||[],d=a.values||[];for(let f=0;f<c.length&&f<d.length;++f){const m=Li(c[f],d[f]);if(m)return m}return pt(c.length,d.length)}(e.arrayValue,t.arrayValue);case 10:return function(o,a){const c=o.fields||{},d=Object.keys(c),f=a.fields||{},m=Object.keys(f);d.sort(),m.sort();for(let _=0;_<d.length&&_<m.length;++_){const v=pt(d[_],m[_]);if(v!==0)return v;const E=Li(c[d[_]],f[m[_]]);if(E!==0)return E}return pt(d.length,m.length)}(e.mapValue,t.mapValue);default:throw K()}}function tl(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return pt(e,t);const n=_n(e),r=_n(t),o=pt(n.seconds,r.seconds);return o!==0?o:pt(n.nanos,r.nanos)}function ch(e){return Tu(e)}function Tu(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const o=_n(r);return`time(${o.seconds},${o.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Z.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let o="[",a=!0;for(const c of r.values||[])a?a=!1:o+=",",o+=Tu(c);return o+"]"}(e.arrayValue):"mapValue"in e?function(r){const o=Object.keys(r.fields||{}).sort();let a="{",c=!0;for(const d of o)c?c=!1:a+=",",a+=`${d}:${Tu(r.fields[d])}`;return a+"}"}(e.mapValue):K();var t,n}function Eu(e){return!!e&&"integerValue"in e}function lh(e){return!!e&&"arrayValue"in e}function el(e){return!!e&&"nullValue"in e}function nl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zs(e){return!!e&&"mapValue"in e}function gr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Oi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=gr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gr(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.value=t}static empty(){return new Ie({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Zs(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gr(n)}setAll(t){let n=ie.emptyPath(),r={},o=[];t.forEach((c,d)=>{if(!n.isImmediateParentOf(d)){const f=this.getFieldsMap(n);this.applyChanges(f,r,o),r={},o=[],n=d.popLast()}c?r[d.lastSegment()]=gr(c):o.push(d.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,o)}delete(t){const n=this.field(t.popLast());Zs(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ne(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let o=n.mapValue.fields[t.get(r)];Zs(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,r){Oi(n,(o,a)=>t[o]=a);for(const o of r)delete t[o]}clone(){return new Ie(gr(this.value))}}function cf(e){const t=[];return Oi(e.fields,(n,r)=>{const o=new ie([n]);if(Zs(r)){const a=cf(r.mapValue).fields;if(a.length===0)t.push(o);else for(const c of a)t.push(o.child(c))}else t.push(o)}),new wu(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,n,r,o,a){this.key=t,this.documentType=n,this.version=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Kt(t,0,ct.min(),Ie.empty(),0)}static newFoundDocument(t,n,r){return new Kt(t,1,n,r,0)}static newNoDocument(t,n){return new Kt(t,2,n,Ie.empty(),0)}static newUnknownDocument(t,n){return new Kt(t,3,n,Ie.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(t,n=null,r=[],o=[],a=null,c=null,d=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.R=null}}function il(e,t=null,n=[],r=[],o=null,a=null,c=null){return new kv(e,t,n,r,o,a,c)}function dh(e){const t=J(e);if(t.R===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Rv(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Di(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=mo(t.startAt)),t.endAt&&(n+="|ub:",n+=mo(t.endAt)),t.R=n}return t.R}function xv(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ch(r.value)}`;var r}).join(", ")}]`),Di(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+mo(e.startAt)),e.endAt&&(t+=", endAt: "+mo(e.endAt)),`Target(${t})`}function fh(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let o=0;o<e.orderBy.length;o++)if(!zv(e.orderBy[o],t.orderBy[o]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let o=0;o<e.filters.length;o++)if(n=e.filters[o],r=t.filters[o],n.op!==r.op||!n.field.isEqual(r.field)||!Ne(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sl(e.startAt,t.startAt)&&sl(e.endAt,t.endAt)}function Iu(e){return Z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class re extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.P(t,n,r):new Mv(t,n,r):n==="array-contains"?new Dv(t,r):n==="in"?new Uv(t,r):n==="not-in"?new Bv(t,r):n==="array-contains-any"?new Fv(t,r):new re(t,n,r)}static P(t,n,r){return n==="in"?new Nv(t,r):new Ov(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Li(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.v(Li(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Rv(e){return e.field.canonicalString()+e.op.toString()+ch(e.value)}class Mv extends re{constructor(t,n,r){super(t,n,r),this.key=Z.fromName(r.referenceValue)}matches(t){const n=Z.comparator(t.key,this.key);return this.v(n)}}class Nv extends re{constructor(t,n){super(t,"in",n),this.keys=lf("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ov extends re{constructor(t,n){super(t,"not-in",n),this.keys=lf("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function lf(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class Dv extends re{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return lh(n)&&Cr(n.arrayValue,this.value)}}class Uv extends re{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Cr(this.value.arrayValue,n)}}class Bv extends re{constructor(t,n){super(t,"not-in",n)}matches(t){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Cr(this.value.arrayValue,n)}}class Fv extends re{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cr(this.value.arrayValue,r))}}class bu{constructor(t,n){this.position=t,this.before=n}}function mo(e){return`${e.before?"b":"a"}:${e.position.map(t=>ch(t)).join(",")}`}class _r{constructor(t,n="asc"){this.field=t,this.dir=n}}function zv(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function rl(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const a=t[o],c=e.position[o];if(a.field.isKeyField()?r=Z.comparator(Z.fromName(c.referenceValue),n.key):r=Li(c,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return e.before?r<=0:r<0}function sl(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ne(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,n=null,r=[],o=[],a=null,c="F",d=null,f=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=f,this.S=null,this.D=null,this.startAt,this.endAt}}function Vv(e,t,n,r,o,a,c,d){return new Fo(e,t,n,r,o,a,c,d)}function ph(e){return new Fo(e)}function js(e){return!Di(e.limit)&&e.limitType==="F"}function go(e){return!Di(e.limit)&&e.limitType==="L"}function $v(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function qv(e){for(const t of e.filters)if(t.V())return t.field;return null}function Hv(e){return e.collectionGroup!==null}function kr(e){const t=J(e);if(t.S===null){t.S=[];const n=qv(t),r=$v(t);if(n!==null&&r===null)n.isKeyField()||t.S.push(new _r(n)),t.S.push(new _r(ie.keyField(),"asc"));else{let o=!1;for(const a of t.explicitOrderBy)t.S.push(a),a.field.isKeyField()&&(o=!0);if(!o){const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new _r(ie.keyField(),a))}}}return t.S}function Hn(e){const t=J(e);if(!t.D)if(t.limitType==="F")t.D=il(t.path,t.collectionGroup,kr(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const a of kr(t)){const c=a.dir==="desc"?"asc":"desc";n.push(new _r(a.field,c))}const r=t.endAt?new bu(t.endAt.position,!t.endAt.before):null,o=t.startAt?new bu(t.startAt.position,!t.startAt.before):null;t.D=il(t.path,t.collectionGroup,n,t.filters,t.limit,r,o)}return t.D}function Wv(e,t,n){return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zo(e,t){return fh(Hn(e),Hn(t))&&e.limitType===t.limitType}function df(e){return`${dh(Hn(e))}|lt:${e.limitType}`}function Su(e){return`Query(target=${xv(Hn(e))}; limitType=${e.limitType})`}function Vo(e,t){return t.isFoundDocument()&&function(n,r){const o=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):Z.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(e,t)&&function(n,r){for(const o of n.explicitOrderBy)if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const o of n.filters)if(!o.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!rl(n.startAt,kr(n),r)||n.endAt&&rl(n.endAt,kr(n),r))}(e,t)}function ff(e){return(t,n)=>{let r=!1;for(const o of kr(e)){const a=Zv(o,t,n);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Zv(e,t,n){const r=e.field.isKeyField()?Z.comparator(t.key,n.key):function(o,a,c){const d=a.data.field(o),f=c.data.field(o);return d!==null&&f!==null?Li(d,f):K()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(t)?"-0":t}}function mf(e){return{integerValue:""+e}}function jv(e,t){return Cv(t)?mf(t):pf(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this._=void 0}}function Gv(e,t,n){return e instanceof _o?function(r,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,t):e instanceof xr?_f(e,t):e instanceof Rr?vf(e,t):function(r,o){const a=gf(r,o),c=ol(a)+ol(r.N);return Eu(a)&&Eu(r.N)?mf(c):pf(r.k,c)}(e,t)}function Kv(e,t,n){return e instanceof xr?_f(e,t):e instanceof Rr?vf(e,t):n}function gf(e,t){return e instanceof vo?Eu(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class _o extends $o{}class xr extends $o{constructor(t){super(),this.elements=t}}function _f(e,t){const n=yf(t);for(const r of e.elements)n.some(o=>Ne(o,r))||n.push(r);return{arrayValue:{values:n}}}class Rr extends $o{constructor(t){super(),this.elements=t}}function vf(e,t){let n=yf(t);for(const r of e.elements)n=n.filter(o=>!Ne(o,r));return{arrayValue:{values:n}}}class vo extends $o{constructor(t,n){super(),this.k=t,this.N=n}}function ol(e){return Mt(e.integerValue||e.doubleValue)}function yf(e){return lh(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Jv(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof xr&&r instanceof xr||n instanceof Rr&&r instanceof Rr?Si(n.elements,r.elements,Ne):n instanceof vo&&r instanceof vo?Ne(n.N,r.N):n instanceof _o&&r instanceof _o}(e.transform,t.transform)}class Xv{constructor(t,n){this.version=t,this.transformResults=n}}class Dn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Dn}static exists(t){return new Dn(void 0,t)}static updateTime(t){return new Dn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gs(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qo{}function Yv(e,t,n){e instanceof Ho?function(r,o,a){const c=r.value.clone(),d=hl(r.fieldTransforms,o,a.transformResults);c.setAll(d),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):e instanceof Ui?function(r,o,a){if(!Gs(r.precondition,o))return void o.convertToUnknownDocument(a.version);const c=hl(r.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(wf(r)),d.setAll(c),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(e,t,n):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Pu(e,t,n){e instanceof Ho?function(r,o,a){if(!Gs(r.precondition,o))return;const c=r.value.clone(),d=cl(r.fieldTransforms,a,o);c.setAll(d),o.convertToFoundDocument(ul(o),c).setHasLocalMutations()}(e,t,n):e instanceof Ui?function(r,o,a){if(!Gs(r.precondition,o))return;const c=cl(r.fieldTransforms,a,o),d=o.data;d.setAll(wf(r)),d.setAll(c),o.convertToFoundDocument(ul(o),d).setHasLocalMutations()}(e,t,n):function(r,o){Gs(r.precondition,o)&&o.convertToNoDocument(ct.min())}(e,t)}function Qv(e,t){let n=null;for(const r of e.fieldTransforms){const o=t.data.field(r.field),a=gf(r.transform,o||null);a!=null&&(n==null&&(n=Ie.empty()),n.set(r.field,a))}return n||null}function al(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Si(n,r,(o,a)=>Jv(o,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function ul(e){return e.isFoundDocument()?e.version:ct.min()}class Ho extends qo{constructor(t,n,r,o=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}}class Ui extends qo{constructor(t,n,r,o,a=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}}function wf(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function hl(e,t,n){const r=new Map;vt(e.length===n.length);for(let o=0;o<n.length;o++){const a=e[o],c=a.transform,d=t.data.field(a.field);r.set(a.field,Kv(c,d,n[o]))}return r}function cl(e,t,n){const r=new Map;for(const o of e){const a=o.transform,c=n.data.field(o.field);r.set(o.field,Gv(a,c,t))}return r}class Tf extends qo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class ty extends qo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,ot;function ny(e){switch(e){default:return K();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ef(e){if(e===void 0)return gn("GRPC error has no .code"),S.UNKNOWN;switch(e){case Rt.OK:return S.OK;case Rt.CANCELLED:return S.CANCELLED;case Rt.UNKNOWN:return S.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return S.INTERNAL;case Rt.UNAVAILABLE:return S.UNAVAILABLE;case Rt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Rt.NOT_FOUND:return S.NOT_FOUND;case Rt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Rt.ABORTED:return S.ABORTED;case Rt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Rt.DATA_LOSS:return S.DATA_LOSS;default:return K()}}(ot=Rt||(Rt={}))[ot.OK=0]="OK",ot[ot.CANCELLED=1]="CANCELLED",ot[ot.UNKNOWN=2]="UNKNOWN",ot[ot.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ot[ot.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ot[ot.NOT_FOUND=5]="NOT_FOUND",ot[ot.ALREADY_EXISTS=6]="ALREADY_EXISTS",ot[ot.PERMISSION_DENIED=7]="PERMISSION_DENIED",ot[ot.UNAUTHENTICATED=16]="UNAUTHENTICATED",ot[ot.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ot[ot.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ot[ot.ABORTED=10]="ABORTED",ot[ot.OUT_OF_RANGE=11]="OUT_OF_RANGE",ot[ot.UNIMPLEMENTED=12]="UNIMPLEMENTED",ot[ot.INTERNAL=13]="INTERNAL",ot[ot.UNAVAILABLE=14]="UNAVAILABLE",ot[ot.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,n){this.comparator=t,this.root=n||Bt.EMPTY}insert(t,n){return new Xt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new Xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(t,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $s(this.root,t,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $s(this.root,t,this.comparator,!0)}}class $s{constructor(t,n,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=n?r(t.key,n):1,o&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,n,r,o,a){this.key=t,this.value=n,this.color=r!=null?r:Bt.RED,this.left=o!=null?o:Bt.EMPTY,this.right=a!=null?a:Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,o,a){return new Bt(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,o!=null?o:this.left,a!=null?a:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let o=this;const a=r(t,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(t,n,r),null):a===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,n,r,o){return this}insert(e,t,n){return new Bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.comparator=t,this.data=new Xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ll(this.data.getIterator())}getIteratorFrom(t){return new ll(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Vt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Vt(this.comparator);return n.data=t,n}}class ll{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Xt(Z.comparator);function Wn(){return iy}const ry=new Xt(Z.comparator);function Lu(){return ry}const sy=new Xt(Z.comparator);function oy(){return sy}const ay=new Vt(Z.comparator);function Tt(...e){let t=ay;for(const n of e)t=t.add(n);return t}const uy=new Vt(pt);function If(){return uy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,n,r,o,a){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,n){const r=new Map;return r.set(t,Jr.createSynthesizedTargetChangeForCurrentChange(t,n)),new Wo(ct.min(),r,If(),Wn(),Tt())}}class Jr{constructor(t,n,r,o,a){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Jr($t.EMPTY_BYTE_STRING,n,Tt(),Tt(),Tt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,n,r,o){this.$=t,this.removedTargetIds=n,this.key=r,this.O=o}}class bf{constructor(t,n){this.targetId=t,this.M=n}}class Sf{constructor(t,n,r=$t.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=o}}class dl{constructor(){this.F=0,this.L=pl(),this.B=$t.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Tt(),n=Tt(),r=Tt();return this.L.forEach((o,a)=>{switch(a){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:K()}}),new Jr(this.B,this.U,t,n,r)}H(){this.q=!1,this.L=pl()}J(t,n){this.q=!0,this.L=this.L.insert(t,n)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class hy{constructor(t){this.et=t,this.nt=new Map,this.st=Wn(),this.it=fl(),this.rt=new Vt(pt)}ot(t){for(const n of t.$)t.O&&t.O.isFoundDocument()?this.ct(n,t.O):this.at(n,t.key,t.O);for(const n of t.removedTargetIds)this.at(n,t.key,t.O)}ut(t){this.forEachTarget(t,n=>{const r=this.ht(n);switch(t.state){case 0:this.lt(n)&&r.W(t.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(t.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(t.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(t.resumeToken));break;default:K()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.nt.forEach((r,o)=>{this.lt(o)&&n(o)})}dt(t){const n=t.targetId,r=t.M.count,o=this.wt(n);if(o){const a=o.target;if(Iu(a))if(r===0){const c=new Z(a.path);this.at(n,c,Kt.newNoDocument(c,ct.min()))}else vt(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(t){const n=new Map;this.nt.forEach((a,c)=>{const d=this.wt(c);if(d){if(a.current&&Iu(d.target)){const f=new Z(d.target.path);this.st.get(f)!==null||this.yt(c,f)||this.at(c,f,Kt.newNoDocument(f,t))}a.j&&(n.set(c,a.G()),a.H())}});let r=Tt();this.it.forEach((a,c)=>{let d=!0;c.forEachWhile(f=>{const m=this.wt(f);return!m||m.purpose===2||(d=!1,!1)}),d&&(r=r.add(a))});const o=new Wo(t,n,this.rt,this.st,r);return this.st=Wn(),this.it=fl(),this.rt=new Vt(pt),o}ct(t,n){if(!this.lt(t))return;const r=this.yt(t,n.key)?2:0;this.ht(t).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(t))}at(t,n,r){if(!this.lt(t))return;const o=this.ht(t);this.yt(t,n)?o.J(n,1):o.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(t)),r&&(this.st=this.st.insert(n,r))}removeTarget(t){this.nt.delete(t)}_t(t){const n=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let n=this.nt.get(t);return n||(n=new dl,this.nt.set(t,n)),n}Tt(t){let n=this.it.get(t);return n||(n=new Vt(pt),this.it=this.it.insert(t,n)),n}lt(t){const n=this.wt(t)!==null;return n||F("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.nt.get(t);return n&&n.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new dl),this.et.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}yt(t,n){return this.et.getRemoteKeysForTarget(t).has(n)}}function fl(){return new Xt(Z.comparator)}function pl(){return new Xt(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ly=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dy{constructor(t,n){this.databaseId=t,this.C=n}}function yo(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Pf(e,t){return e.C?t.toBase64():t.toUint8Array()}function fy(e,t){return yo(e,t.toTimestamp())}function Ke(e){return vt(!!e),ct.fromTimestamp(function(t){const n=_n(t);return new he(n.seconds,n.nanos)}(e))}function mh(e,t){return function(n){return new Pt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Lf(e){const t=Pt.fromString(e);return vt(kf(t)),t}function Au(e,t){return mh(e.databaseId,t.path)}function Ka(e,t){const n=Lf(t);if(n.get(1)!==e.databaseId.projectId)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Z(Af(n))}function Cu(e,t){return mh(e.databaseId,t)}function py(e){const t=Lf(e);return t.length===4?Pt.emptyPath():Af(t)}function ku(e){return new Pt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Af(e){return vt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ml(e,t,n){return{name:Au(e,t),fields:n.value.mapValue.fields}}function my(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],a=function(f,m){return f.C?(vt(m===void 0||typeof m=="string"),$t.fromBase64String(m||"")):(vt(m===void 0||m instanceof Uint8Array),$t.fromUint8Array(m||new Uint8Array))}(e,t.targetChange.resumeToken),c=t.targetChange.cause,d=c&&function(f){const m=f.code===void 0?S.UNKNOWN:Ef(f.code);return new $(m,f.message||"")}(c);n=new Sf(r,o,a,d||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=Ka(e,r.document.name),a=Ke(r.document.updateTime),c=new Ie({mapValue:{fields:r.document.fields}}),d=Kt.newFoundDocument(o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];n=new Ks(f,m,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=Ka(e,r.document),a=r.readTime?Ke(r.readTime):ct.min(),c=Kt.newNoDocument(o,a),d=r.removedTargetIds||[];n=new Ks([],d,c.key,c)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=Ka(e,r.document),a=r.removedTargetIds||[];n=new Ks([],a,o,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const o=r.count||0,a=new ey(o),c=r.targetId;n=new bf(c,a)}}return n}function gy(e,t){let n;if(t instanceof Ho)n={update:ml(e,t.key,t.value)};else if(t instanceof Tf)n={delete:Au(e,t.key)};else if(t instanceof Ui)n={update:ml(e,t.key,t.data),updateMask:Py(t.fieldMask)};else{if(!(t instanceof ty))return K();n={verify:Au(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof _o)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vo)return{fieldPath:a.field.canonicalString(),increment:c.N};throw K()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:fy(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(e,t.precondition)),n}function _y(e,t){return e&&e.length>0?(vt(t!==void 0),e.map(n=>function(r,o){let a=r.updateTime?Ke(r.updateTime):Ke(o);return a.isEqual(ct.min())&&(a=Ke(o)),new Xv(a,r.transformResults||[])}(n,t))):[]}function vy(e,t){return{documents:[Cu(e,t.path)]}}function yy(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Cu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Cu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(d){if(d.length===0)return;const f=d.map(m=>function(_){if(_.op==="=="){if(nl(_.value))return{unaryFilter:{field:mi(_.field),op:"IS_NAN"}};if(el(_.value))return{unaryFilter:{field:mi(_.field),op:"IS_NULL"}}}else if(_.op==="!="){if(nl(_.value))return{unaryFilter:{field:mi(_.field),op:"IS_NOT_NAN"}};if(el(_.value))return{unaryFilter:{field:mi(_.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(_.field),op:Iy(_.op),value:_.value}}}(m));return f.length===1?f[0]:{compositeFilter:{op:"AND",filters:f}}}(t.filters);o&&(n.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:mi(m.field),direction:Ey(m.dir)}}(f))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const c=function(d,f){return d.C||Di(f)?f:{value:f}}(e,t.limit);return c!==null&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt=gl(t.startAt)),t.endAt&&(n.structuredQuery.endAt=gl(t.endAt)),n}function wy(e){let t=py(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){vt(r===1);const _=n.from[0];_.allDescendants?o=_.collectionId:t=t.child(_.collectionId)}let a=[];n.where&&(a=Cf(n.where));let c=[];n.orderBy&&(c=n.orderBy.map(_=>function(v){return new _r(_i(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(_)));let d=null;n.limit&&(d=function(_){let v;return v=typeof _=="object"?_.value:_,Di(v)?null:v}(n.limit));let f=null;n.startAt&&(f=_l(n.startAt));let m=null;return n.endAt&&(m=_l(n.endAt)),Vv(t,o,c,a,d,"F",f,m)}function Ty(e,t){const n=function(r,o){switch(o){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Cf(e){return e?e.unaryFilter!==void 0?[Sy(e)]:e.fieldFilter!==void 0?[by(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Cf(t)).reduce((t,n)=>t.concat(n)):K():[]}function gl(e){return{before:e.before,values:e.position}}function _l(e){const t=!!e.before,n=e.values||[];return new bu(n,t)}function Ey(e){return cy[e]}function Iy(e){return ly[e]}function mi(e){return{fieldPath:e.canonicalString()}}function _i(e){return ie.fromServerFormat(e.fieldPath)}function by(e){return re.create(_i(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}function Sy(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_i(e.unaryFilter.field);return re.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=_i(e.unaryFilter.field);return re.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_i(e.unaryFilter.field);return re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(e.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function Py(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function kf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const Ly="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ay{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new N((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):N.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):N.reject(n)}static resolve(t){return new N((n,r)=>{n(t)})}static reject(t){return new N((n,r)=>{r(t)})}static waitFor(t){return new N((n,r)=>{let o=0,a=0,c=!1;t.forEach(d=>{++o,d.next(()=>{++a,c&&a===o&&n()},f=>r(f))}),c=!0,a===o&&n()})}static or(t){let n=N.resolve(!1);for(const r of t)n=n.next(o=>o?N.resolve(o):r());return n}static forEach(t,n){const r=[];return t.forEach((o,a)=>{r.push(n.call(this,o,a))}),this.waitFor(r)}}function Xr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,n,r,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(t.key)&&Yv(a,t,r[o])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Pu(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Pu(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const r=t.get(n.key),o=r;this.applyToLocalView(o),r.isValidDocument()||o.convertToNoDocument(ct.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Tt())}isEqual(t){return this.batchId===t.batchId&&Si(this.mutations,t.mutations,(n,r)=>al(n,r))&&Si(this.baseMutations,t.baseMutations,(n,r)=>al(n,r))}}class gh{constructor(t,n,r,o){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(t,n,r){vt(t.mutations.length===r.length);let o=oy();const a=t.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,r[c].version);return new gh(t,n,r,o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,n,r,o,a=ct.min(),c=ct.min(),d=$t.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d}withSequenceNumber(t){return new Un(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t){this.Gt=t}}function xy(e){const t=wy({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Wv(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.zt=new My}addToCollectionParentIndex(t,n){return this.zt.add(n),N.resolve()}getCollectionParents(t,n){return N.resolve(this.zt.getEntries(n))}}class My{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),o=this.index[n]||new Vt(Pt.comparator),a=!o.has(r);return this.index[n]=o.add(r),a}has(t){const n=t.lastSegment(),r=t.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(t){return(this.index[t]||new Vt(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Ai(0)}static re(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(e){if(e.code!==S.FAILED_PRECONDITION||e.message!==Ly)throw e;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,t))return a}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),o=this.inner[r];if(o!==void 0){for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],t))return void(o[a]=[t,n]);o.push([t,n])}else this.inner[r]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return r.length===1?delete this.inner[n]:r.splice(o,1),!0;return!1}forEach(t){Oi(this.inner,(n,r)=>{for(const[o,a]of r)t(o,a)})}isEmpty(){return af(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.changes=new Qr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:ct.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:Kt.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n,r){this.Je=t,this.An=n,this.Jt=r}Rn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKey(t,n).next(r=>this.bn(t,n,r))}bn(t,n,r){return this.Je.getEntry(t,n).next(o=>{for(const a of r)a.applyToLocalView(o);return o})}Pn(t,n){t.forEach((r,o)=>{for(const a of n)a.applyToLocalView(o)})}vn(t,n){return this.Je.getEntries(t,n).next(r=>this.Vn(t,r).next(()=>r))}Vn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(t,n,r){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.Sn(t,n.path):Hv(n)?this.Dn(t,n,r):this.Cn(t,n,r)}Sn(t,n){return this.Rn(t,new Z(n)).next(r=>{let o=Lu();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}Dn(t,n,r){const o=n.collectionGroup;let a=Lu();return this.Jt.getCollectionParents(t,o).next(c=>N.forEach(c,d=>{const f=function(m,_){return new Fo(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,d.child(o));return this.Cn(t,f,r).next(m=>{m.forEach((_,v)=>{a=a.insert(_,v)})})}).next(()=>a))}Cn(t,n,r){let o,a;return this.Je.getDocumentsMatchingQuery(t,n,r).next(c=>(o=c,this.An.getAllMutationBatchesAffectingQuery(t,n))).next(c=>(a=c,this.Nn(t,a,o).next(d=>{o=d;for(const f of a)for(const m of f.mutations){const _=m.key;let v=o.get(_);v==null&&(v=Kt.newInvalidDocument(_),o=o.insert(_,v)),Pu(m,v,f.localWriteTime),v.isFoundDocument()||(o=o.remove(_))}}))).next(()=>(o.forEach((c,d)=>{Vo(n,d)||(o=o.remove(c))}),o))}Nn(t,n,r){let o=Tt();for(const c of n)for(const d of c.mutations)d instanceof Ui&&r.get(d.key)===null&&(o=o.add(d.key));let a=r;return this.Je.getEntries(t,o).next(c=>(c.forEach((d,f)=>{f.isFoundDocument()&&(a=a.insert(d,f))}),a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n,r,o){this.targetId=t,this.fromCache=n,this.kn=r,this.xn=o}static $n(t,n){let r=Tt(),o=Tt();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new _h(t,n.fromCache,r,o)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{On(t){this.Mn=t}getDocumentsMatchingQuery(t,n,r,o){return function(a){return a.filters.length===0&&a.limit===null&&a.startAt==null&&a.endAt==null&&(a.explicitOrderBy.length===0||a.explicitOrderBy.length===1&&a.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ct.min())?this.Fn(t,n):this.Mn.vn(t,o).next(a=>{const c=this.Ln(n,a);return(js(n)||go(n))&&this.Bn(n.limitType,c,o,r)?this.Fn(t,n):(Xc()<=lt.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Su(n)),this.Mn.getDocumentsMatchingQuery(t,n,r).next(d=>(c.forEach(f=>{d=d.insert(f.key,f)}),d)))})}Ln(t,n){let r=new Vt(ff(t));return n.forEach((o,a)=>{Vo(t,a)&&(r=r.add(a))}),r}Bn(t,n,r,o){if(r.size!==n.size)return!0;const a=t==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Fn(t,n){return Xc()<=lt.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Su(n)),this.Mn.getDocumentsMatchingQuery(t,n,ct.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t,n,r,o){this.persistence=t,this.Un=n,this.k=o,this.qn=new Xt(pt),this.Kn=new Qr(a=>dh(a),fh),this.jn=ct.min(),this.An=t.getMutationQueue(r),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new xf(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qn))}}function Uy(e,t,n,r){return new Dy(e,t,n,r)}async function Rf(e,t){const n=J(e);let r=n.An,o=n.Wn;const a=await n.persistence.runTransaction("Handle user change","readonly",c=>{let d;return n.An.getAllMutationBatches(c).next(f=>(d=f,r=n.persistence.getMutationQueue(t),o=new xf(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(c))).next(f=>{const m=[],_=[];let v=Tt();for(const E of d){m.push(E.batchId);for(const P of E.mutations)v=v.add(P.key)}for(const E of f){_.push(E.batchId);for(const P of E.mutations)v=v.add(P.key)}return o.vn(c,v).next(E=>({Gn:E,removedBatchIds:m,addedBatchIds:_}))})});return n.An=r,n.Wn=o,n.Un.On(n.Wn),a}function By(e,t){const n=J(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=t.batch.keys(),a=n.Qn.newChangeBuffer({trackRemovals:!0});return function(c,d,f,m){const _=f.batch,v=_.keys();let E=N.resolve();return v.forEach(P=>{E=E.next(()=>m.getEntry(d,P)).next(C=>{const D=f.docVersions.get(P);vt(D!==null),C.version.compareTo(D)<0&&(_.applyToRemoteDocument(C,f),C.isValidDocument()&&m.addEntry(C,f.commitVersion))})}),E.next(()=>c.An.removeMutationBatch(d,_))}(n,r,t,a).next(()=>a.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,o))})}function Mf(e){const t=J(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.He.getLastRemoteSnapshotVersion(n))}function Fy(e,t){const n=J(e),r=t.snapshotVersion;let o=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=n.Qn.newChangeBuffer({trackRemovals:!0});o=n.qn;const d=[];t.targetChanges.forEach((m,_)=>{const v=o.get(_);if(!v)return;d.push(n.He.removeMatchingKeys(a,m.removedDocuments,_).next(()=>n.He.addMatchingKeys(a,m.addedDocuments,_)));let E=v.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.has(_)?E=E.withResumeToken($t.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,r)),o=o.insert(_,E),function(P,C,D){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(v,E,m)&&d.push(n.He.updateTargetData(a,E))});let f=Wn();if(t.documentUpdates.forEach((m,_)=>{t.resolvedLimboDocuments.has(m)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(a,m))}),d.push(zy(a,c,t.documentUpdates,r,void 0).next(m=>{f=m})),!r.isEqual(ct.min())){const m=n.He.getLastRemoteSnapshotVersion(a).next(_=>n.He.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(m)}return N.waitFor(d).next(()=>c.apply(a)).next(()=>n.Wn.Vn(a,f)).next(()=>f)}).then(a=>(n.qn=o,a))}function zy(e,t,n,r,o){let a=Tt();return n.forEach(c=>a=a.add(c)),t.getEntries(e,a).next(c=>{let d=Wn();return n.forEach((f,m)=>{const _=c.get(f),v=(o==null?void 0:o.get(f))||r;m.isNoDocument()&&m.version.isEqual(ct.min())?(t.removeEntry(f,v),d=d.insert(f,m)):!_.isValidDocument()||m.version.compareTo(_.version)>0||m.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(m,v),d=d.insert(f,m)):F("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",m.version)}),d})}function Vy(e,t){const n=J(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.An.getNextMutationBatchAfterBatchId(r,t)))}function $y(e,t){const n=J(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.He.getTargetData(r,t).next(a=>a?(o=a,N.resolve(o)):n.He.allocateTargetId(r).next(c=>(o=new Un(t,c,0,r.currentSequenceNumber),n.He.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.qn.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(t,r.targetId)),r})}async function xu(e,t,n){const r=J(e),o=r.qn.get(t),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,c=>r.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Xr(c))throw c;F("LocalStore",`Failed to update sequence numbers for target ${t}: ${c}`)}r.qn=r.qn.remove(t),r.Kn.delete(o.target)}function vl(e,t,n){const r=J(e);let o=ct.min(),a=Tt();return r.persistence.runTransaction("Execute query","readonly",c=>function(d,f,m){const _=J(d),v=_.Kn.get(m);return v!==void 0?N.resolve(_.qn.get(v)):_.He.getTargetData(f,m)}(r,c,Hn(t)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(c,d.targetId).next(f=>{a=f})}).next(()=>r.Un.getDocumentsMatchingQuery(c,t,n?o:ct.min(),n?a:Tt())).next(d=>({documents:d,zn:a})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,n){return N.resolve(this.Xn.get(n))}saveBundleMetadata(t,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ke(r.createTime)}),N.resolve()}getNamedQuery(t,n){return N.resolve(this.Zn.get(n))}saveNamedQuery(t,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:xy(r.bundledQuery),readTime:Ke(r.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.ts=new Vt(Ot.es),this.ns=new Vt(Ot.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,n){const r=new Ot(t,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.os(new Ot(t,n))}cs(t,n){t.forEach(r=>this.removeReference(r,n))}us(t){const n=new Z(new Pt([])),r=new Ot(n,t),o=new Ot(n,t+1),a=[];return this.ns.forEachInRange([r,o],c=>{this.os(c),a.push(c.key)}),a}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const n=new Z(new Pt([])),r=new Ot(n,t),o=new Ot(n,t+1);let a=Tt();return this.ns.forEachInRange([r,o],c=>{a=a.add(c.key)}),a}containsKey(t){const n=new Ot(t,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,n){this.key=t,this.fs=n}static es(t,n){return Z.comparator(t.key,n.key)||pt(t.fs,n.fs)}static ss(t,n){return pt(t.fs,n.fs)||Z.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t,n){this.Jt=t,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new Vt(Ot.es)}checkEmpty(t){return N.resolve(this.An.length===0)}addMutationBatch(t,n,r,o){const a=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const c=new Cy(a,n,r,o);this.An.push(c);for(const d of o)this.ws=this.ws.add(new Ot(d.key,a)),this.Jt.addToCollectionParentIndex(t,d.key.path.popLast());return N.resolve(c)}lookupMutationBatch(t,n){return N.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,o=this.gs(r),a=o<0?0:o;return N.resolve(this.An.length>a?this.An[a]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(t){return N.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ot(n,0),o=new Ot(n,Number.POSITIVE_INFINITY),a=[];return this.ws.forEachInRange([r,o],c=>{const d=this._s(c.fs);a.push(d)}),N.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Vt(pt);return n.forEach(o=>{const a=new Ot(o,0),c=new Ot(o,Number.POSITIVE_INFINITY);this.ws.forEachInRange([a,c],d=>{r=r.add(d.fs)})}),N.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,o=r.length+1;let a=r;Z.isDocumentKey(a)||(a=a.child(""));const c=new Ot(new Z(a),0);let d=new Vt(pt);return this.ws.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===o&&(d=d.add(f.fs)),!0)},c),N.resolve(this.ys(d))}ys(t){const n=[];return t.forEach(r=>{const o=this._s(r);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){vt(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return N.forEach(n.mutations,o=>{const a=new Ot(o.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.ws=r})}ee(t){}containsKey(t,n){const r=new Ot(n,0),o=this.ws.firstAfterOrEqual(r);return N.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.An.length,N.resolve()}ps(t,n){return this.gs(t)}gs(t){return this.An.length===0?0:t-this.An[0].batchId}_s(t){const n=this.gs(t);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t,n){this.Jt=t,this.Ts=n,this.docs=new Xt(Z.comparator),this.size=0}addEntry(t,n,r){const o=n.key,a=this.docs.get(o),c=a?a.size:0,d=this.Ts(n);return this.docs=this.docs.insert(o,{document:n.mutableCopy(),size:d,readTime:r}),this.size+=d-c,this.Jt.addToCollectionParentIndex(t,o.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(t,n){let r=Wn();return n.forEach(o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Kt.newInvalidDocument(o))}),N.resolve(r)}getDocumentsMatchingQuery(t,n,r){let o=Wn();const a=new Z(n.path.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:d,value:{document:f,readTime:m}}=c.getNext();if(!n.path.isPrefixOf(d.path))break;m.compareTo(r)<=0||Vo(n,f)&&(o=o.insert(f.key,f.mutableCopy()))}return N.resolve(o)}Es(t,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Zy(this)}getSize(t){return N.resolve(this.size)}}class Zy extends Ny{constructor(t){super(),this.De=t}applyChanges(t){const n=[];return this.changes.forEach((r,o)=>{o.document.isValidDocument()?n.push(this.De.addEntry(t,o.document,this.getReadTime(r))):this.De.removeEntry(r)}),N.waitFor(n)}getFromCache(t,n){return this.De.getEntry(t,n)}getAllFromCache(t,n){return this.De.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t){this.persistence=t,this.Is=new Qr(n=>dh(n),fh),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.As=0,this.Rs=new vh,this.targetCount=0,this.bs=Ai.ie()}forEachTarget(t,n){return this.Is.forEach((r,o)=>n(o)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),N.resolve()}ae(t){this.Is.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Ai(n),this.highestTargetId=n),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,n){return this.ae(n),this.targetCount+=1,N.resolve()}updateTargetData(t,n){return this.ae(n),N.resolve()}removeTargetData(t,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,n,r){let o=0;const a=[];return this.Is.forEach((c,d)=>{d.sequenceNumber<=n&&r.get(d.targetId)===null&&(this.Is.delete(c),a.push(this.removeMatchingKeysForTargetId(t,d.targetId)),o++)}),N.waitFor(a).next(()=>o)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,n){const r=this.Is.get(n)||null;return N.resolve(r)}addMatchingKeys(t,n,r){return this.Rs.rs(n,r),N.resolve()}removeMatchingKeys(t,n,r){this.Rs.cs(n,r);const o=this.persistence.referenceDelegate,a=[];return o&&n.forEach(c=>{a.push(o.markPotentiallyOrphaned(t,c))}),N.waitFor(a)}removeMatchingKeysForTargetId(t,n){return this.Rs.us(n),N.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Rs.ls(n);return N.resolve(r)}containsKey(t,n){return N.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t,n){this.Ps={},this.Be=new hh(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new jy(this),this.Jt=new Ry,this.Je=function(r,o){return new Wy(r,o)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new ky(n),this.Ye=new qy(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let n=this.Ps[t.toKey()];return n||(n=new Hy(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,n,r){F("MemoryPersistence","Starting transaction:",t);const o=new Ky(this.Be.next());return this.referenceDelegate.Vs(),r(o).next(a=>this.referenceDelegate.Ss(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Ds(t,n){return N.or(Object.values(this.Ps).map(r=>()=>r.containsKey(t,n)))}}class Ky extends Ay{constructor(t){super(),this.currentSequenceNumber=t}}class yh{constructor(t){this.persistence=t,this.Cs=new vh,this.Ns=null}static ks(t){return new yh(t)}get xs(){if(this.Ns)return this.Ns;throw K()}addReference(t,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),N.resolve()}removeReference(t,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),N.resolve()}removeTarget(t,n){this.Cs.us(n.targetId).forEach(o=>this.xs.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(a=>this.xs.add(a.toString()))}).next(()=>r.removeTargetData(t,n))}Vs(){this.Ns=new Set}Ss(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.xs,r=>{const o=Z.fromPath(r);return this.$s(t,o).next(a=>{a||n.removeEntry(o)})}).next(()=>(this.Ns=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(t){return 0}$s(t,n){return N.or([()=>N.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ds(t,n)])}}class yl{constructor(){this.activeTargetIds=If()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jy{constructor(){this.pi=new yl,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,n,r){this.Ti[t]=n}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new yl,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{Ei(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,n,r,o,a){const c=this.Ui(t,n);F("RestConnection","Sending: ",c,r);const d={};return this.qi(d,o,a),this.Ki(t,c,d,r).then(f=>(F("RestConnection","Received: ",f),f),f=>{throw Yc("RestConnection",`${t} failed with error: `,f,"url: ",c,"request:",r),f})}ji(t,n,r,o,a){return this.Bi(t,n,r,o,a)}qi(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ni,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>t[a]=o),r&&r.headers.forEach((o,a)=>t[a]=o)}Ui(t,n){const r=Yy[t];return`${this.Fi}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,n,r,o){return new Promise((a,c)=>{const d=new vv;d.listenOnce(mv.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ga.NO_ERROR:const m=d.getResponseJson();F("Connection","XHR received:",JSON.stringify(m)),a(m);break;case Ga.TIMEOUT:F("Connection",'RPC "'+t+'" timed out'),c(new $(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const _=d.getStatus();if(F("Connection",'RPC "'+t+'" failed with status:',_,"response text:",d.getResponseText()),_>0){const v=d.getResponseJson().error;if(v&&v.status&&v.message){const E=function(P){const C=P.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(C)>=0?C:S.UNKNOWN}(v.status);c(new $(E,v.message))}else c(new $(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new $(S.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+t+'" completed.')}});const f=JSON.stringify(o);d.send(n,"POST",f,r,15)})}Qi(t,n,r){const o=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=fv(),c=pv(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(d.xmlHttpFactory=new _v({})),this.qi(d.initMessageHeaders,n,r),Ql()||ed()||_g()||nd()||vg()||td()||(d.httpHeadersOverwriteParam="$httpHeaders");const f=o.join("");F("Connection","Creating WebChannel: "+f,d);const m=a.createWebChannel(f,d);let _=!1,v=!1;const E=new Qy({Vi:C=>{v?F("Connection","Not sending because WebChannel is closed:",C):(_||(F("Connection","Opening WebChannel transport."),m.open(),_=!0),F("Connection","WebChannel sending:",C),m.send(C))},Si:()=>m.close()}),P=(C,D,nt)=>{C.listen(D,mt=>{try{nt(mt)}catch(gt){setTimeout(()=>{throw gt},0)}})};return P(m,Vs.EventType.OPEN,()=>{v||F("Connection","WebChannel transport opened.")}),P(m,Vs.EventType.CLOSE,()=>{v||(v=!0,F("Connection","WebChannel transport closed"),E.Oi())}),P(m,Vs.EventType.ERROR,C=>{v||(v=!0,Yc("Connection","WebChannel transport errored:",C),E.Oi(new $(S.UNAVAILABLE,"The operation could not be completed")))}),P(m,Vs.EventType.MESSAGE,C=>{var D;if(!v){const nt=C.data[0];vt(!!nt);const mt=nt,gt=mt.error||((D=mt[0])===null||D===void 0?void 0:D.error);if(gt){F("Connection","WebChannel received error:",gt);const st=gt.status;let _t=function(G){const V=Rt[G];if(V!==void 0)return Ef(V)}(st),yt=gt.message;_t===void 0&&(_t=S.INTERNAL,yt="Unknown error status: "+st+" with message "+gt.message),v=!0,E.Oi(new $(_t,yt)),m.close()}else F("Connection","WebChannel received:",nt),E.Mi(nt)}}),P(c,gv.STAT_EVENT,C=>{C.stat===Kc.PROXY?F("Connection","Detected buffering proxy"):C.stat===Kc.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{E.$i()},0),E}}function Ja(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(e){return new dy(e,!0)}class Nf{constructor(t,n,r=1e3,o=1.5,a=6e4){this.Me=t,this.timerId=n,this.Wi=r,this.Gi=o,this.zi=a,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),o=Math.max(0,n-r);o>0&&F("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,o,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,n,r,o,a,c,d,f){this.Me=t,this.nr=r,this.sr=o,this.ir=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Nf(t,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,t!==4?this.ur.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.rr===n&&this.Ir(r,o)},r=>{t(()=>{const o=new $(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(o)})})}Ir(t,n){const r=this.Er(this.rr);this.stream=this.Rr(t,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(o=>{r(()=>this.Ar(o))}),this.stream.onMessage(o=>{r(()=>this.onMessage(o))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return F("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return n=>{this.Me.enqueueAndForget(()=>this.rr===t?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ew extends Of{constructor(t,n,r,o,a,c){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,c),this.k=a}Rr(t,n){return this.ir.Qi("Listen",t,n)}onMessage(t){this.ur.reset();const n=my(this.k,t),r=function(o){if(!("targetChange"in o))return ct.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?ct.min():a.readTime?Ke(a.readTime):ct.min()}(t);return this.listener.br(n,r)}Pr(t){const n={};n.database=ku(this.k),n.addTarget=function(o,a){let c;const d=a.target;return c=Iu(d)?{documents:vy(o,d)}:{query:yy(o,d)},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0?c.resumeToken=Pf(o,a.resumeToken):a.snapshotVersion.compareTo(ct.min())>0&&(c.readTime=yo(o,a.snapshotVersion.toTimestamp())),c}(this.k,t);const r=Ty(this.k,t);r&&(n.labels=r),this.gr(n)}vr(t){const n={};n.database=ku(this.k),n.removeTarget=t,this.gr(n)}}class nw extends Of{constructor(t,n,r,o,a,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,c),this.k=a,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,n){return this.ir.Qi("Write",t,n)}onMessage(t){if(vt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const n=_y(t.writeResults,t.commitTime),r=Ke(t.commitTime);return this.listener.Cr(r,n)}return vt(!t.writeResults||t.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=ku(this.k),this.gr(t)}Dr(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>gy(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends class{}{constructor(t,n,r,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.ir=r,this.k=o,this.$r=!1}Or(){if(this.$r)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.ir.Bi(t,n,r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(S.UNKNOWN,o.toString())})}ji(t,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.ir.ji(t,n,r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(S.UNKNOWN,o.toString())})}terminate(){this.$r=!0}}class rw{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,t==="Online"&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(gn(n),this.Lr=!1):F("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t,n,r,o,a){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=a,this.Hr.Ei(c=>{r.enqueueAndForget(async()=>{Xn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=J(d);f.Gr.add(4),await ts(f),f.Jr.set("Unknown"),f.Gr.delete(4),await jo(f)}(this))})}),this.Jr=new rw(r,o)}}async function jo(e){if(Xn(e))for(const t of e.zr)await t(!0)}async function ts(e){for(const t of e.zr)await t(!1)}function Df(e,t){const n=J(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Eh(n)?Th(n):Bi(n).lr()&&wh(n,t))}function Uf(e,t){const n=J(e),r=Bi(n);n.Wr.delete(t),r.lr()&&Bf(n,t),n.Wr.size===0&&(r.lr()?r._r():Xn(n)&&n.Jr.set("Unknown"))}function wh(e,t){e.Yr.X(t.targetId),Bi(e).Pr(t)}function Bf(e,t){e.Yr.X(t),Bi(e).vr(t)}function Th(e){e.Yr=new hy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Bi(e).start(),e.Jr.Br()}function Eh(e){return Xn(e)&&!Bi(e).hr()&&e.Wr.size>0}function Xn(e){return J(e).Gr.size===0}function Ff(e){e.Yr=void 0}async function ow(e){e.Wr.forEach((t,n)=>{wh(e,t)})}async function aw(e,t){Ff(e),Eh(e)?(e.Jr.Kr(t),Th(e)):e.Jr.set("Unknown")}async function uw(e,t,n){if(e.Jr.set("Online"),t instanceof Sf&&t.state===2&&t.cause)try{await async function(r,o){const a=o.cause;for(const c of o.targetIds)r.Wr.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Wr.delete(c),r.Yr.removeTarget(c))}(e,t)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await wo(e,r)}else if(t instanceof Ks?e.Yr.ot(t):t instanceof bf?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(ct.min()))try{const r=await Mf(e.localStore);n.compareTo(r)>=0&&await function(o,a){const c=o.Yr.gt(a);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const m=o.Wr.get(f);m&&o.Wr.set(f,m.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach(d=>{const f=o.Wr.get(d);if(!f)return;o.Wr.set(d,f.withResumeToken($t.EMPTY_BYTE_STRING,f.snapshotVersion)),Bf(o,d);const m=new Un(f.target,d,1,f.sequenceNumber);wh(o,m)}),o.remoteSyncer.applyRemoteEvent(c)}(e,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await wo(e,r)}}async function wo(e,t,n){if(!Xr(t))throw t;e.Gr.add(1),await ts(e),e.Jr.set("Offline"),n||(n=()=>Mf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await jo(e)})}function zf(e,t){return t().catch(n=>wo(e,n,t))}async function Go(e){const t=J(e),n=vn(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;hw(t);)try{const o=await Vy(t.localStore,r);if(o===null){t.Qr.length===0&&n._r();break}r=o.batchId,cw(t,o)}catch(o){await wo(t,o)}Vf(t)&&$f(t)}function hw(e){return Xn(e)&&e.Qr.length<10}function cw(e,t){e.Qr.push(t);const n=vn(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Vf(e){return Xn(e)&&!vn(e).hr()&&e.Qr.length>0}function $f(e){vn(e).start()}async function lw(e){vn(e).kr()}async function dw(e){const t=vn(e);for(const n of e.Qr)t.Dr(n.mutations)}async function fw(e,t,n){const r=e.Qr.shift(),o=gh.from(r,t,n);await zf(e,()=>e.remoteSyncer.applySuccessfulWrite(o)),await Go(e)}async function pw(e,t){t&&vn(e).Sr&&await async function(n,r){if(o=r.code,ny(o)&&o!==S.ABORTED){const a=n.Qr.shift();vn(n).wr(),await zf(n,()=>n.remoteSyncer.rejectFailedWrite(a.batchId,r)),await Go(n)}var o}(e,t),Vf(e)&&$f(e)}async function Tl(e,t){const n=J(e);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Xn(n);n.Gr.add(3),await ts(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await jo(n)}async function mw(e,t){const n=J(e);t?(n.Gr.delete(2),await jo(n)):t||(n.Gr.add(2),await ts(n),n.Jr.set("Unknown"))}function Bi(e){return e.Xr||(e.Xr=function(t,n,r){const o=J(t);return o.Or(),new ew(n,o.ir,o.authCredentials,o.appCheckCredentials,o.k,r)}(e.datastore,e.asyncQueue,{Di:ow.bind(null,e),Ni:aw.bind(null,e),br:uw.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),Eh(e)?Th(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Ff(e))})),e.Xr}function vn(e){return e.Zr||(e.Zr=function(t,n,r){const o=J(t);return o.Or(),new nw(n,o.ir,o.authCredentials,o.appCheckCredentials,o.k,r)}(e.datastore,e.asyncQueue,{Di:lw.bind(null,e),Ni:pw.bind(null,e),Nr:dw.bind(null,e),Cr:fw.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await Go(e)):(await e.Zr.stop(),e.Qr.length>0&&(F("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n,r,o,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}static createAndSchedule(t,n,r,o,a){const c=Date.now()+r,d=new Ih(t,n,c,o,a);return d.start(r),d}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(e,t){if(gn("AsyncQueue",`${t}: ${e}`),Xr(e))return new $(S.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t){this.comparator=t?(n,r)=>t(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Lu(),this.sortedSet=new Xt(this.comparator)}static emptySet(t){return new yi(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof yi)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.eo=new Xt(Z.comparator)}track(t){const n=t.doc.key,r=this.eo.get(n);r?t.type!==0&&r.type===3?this.eo=this.eo.insert(n,t):t.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.eo=this.eo.remove(n):t.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):K():this.eo=this.eo.insert(n,t)}no(){const t=[];return this.eo.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ci{constructor(t,n,r,o,a,c,d,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=f}static fromInitialDocuments(t,n,r,o){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Ci(t,n,yi.emptySet(n),a,r,o,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.so=void 0,this.listeners=[]}}class _w{constructor(){this.queries=new Qr(t=>df(t),zo),this.onlineState="Unknown",this.io=new Set}}async function qf(e,t){const n=J(e),r=t.query;let o=!1,a=n.queries.get(r);if(a||(o=!0,a=new gw),o)try{a.so=await n.onListen(r)}catch(c){const d=bh(c,`Initialization of query '${Su(t.query)}' failed`);return void t.onError(d)}n.queries.set(r,a),a.listeners.push(t),t.ro(n.onlineState),a.so&&t.oo(a.so)&&Sh(n)}async function Hf(e,t){const n=J(e),r=t.query;let o=!1;const a=n.queries.get(r);if(a){const c=a.listeners.indexOf(t);c>=0&&(a.listeners.splice(c,1),o=a.listeners.length===0)}if(o)return n.queries.delete(r),n.onUnlisten(r)}function vw(e,t){const n=J(e);let r=!1;for(const o of t){const a=o.query,c=n.queries.get(a);if(c){for(const d of c.listeners)d.oo(o)&&(r=!0);c.so=o}}r&&Sh(n)}function yw(e,t,n){const r=J(e),o=r.queries.get(t);if(o)for(const a of o.listeners)a.onError(n);r.queries.delete(t)}function Sh(e){e.io.forEach(t=>{t.next()})}class Wf{constructor(t,n,r){this.query=t,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(t){if(!this.options.includeMetadataChanges){const r=[];for(const o of t.docChanges)o.type!==3&&r.push(o);t=new Ci(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(t)&&(this.co.next(t),n=!0):this.lo(t,this.onlineState)&&(this.fo(t),n=!0),this.uo=t,n}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),n=!0),n}lo(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!t.docs.isEmpty()||n==="Offline")}ho(t){if(t.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(t){t=Ci.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t){this.key=t}}class jf{constructor(t){this.key=t}}class ww{constructor(t,n){this.query=t,this.To=n,this.Eo=null,this.current=!1,this.Io=Tt(),this.mutatedKeys=Tt(),this.Ao=ff(t),this.Ro=new yi(this.Ao)}get bo(){return this.To}Po(t,n){const r=n?n.vo:new El,o=n?n.Ro:this.Ro;let a=n?n.mutatedKeys:this.mutatedKeys,c=o,d=!1;const f=js(this.query)&&o.size===this.query.limit?o.last():null,m=go(this.query)&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((_,v)=>{const E=o.get(_),P=Vo(this.query,v)?v:null,C=!!E&&this.mutatedKeys.has(E.key),D=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let nt=!1;E&&P?E.data.isEqual(P.data)?C!==D&&(r.track({type:3,doc:P}),nt=!0):this.Vo(E,P)||(r.track({type:2,doc:P}),nt=!0,(f&&this.Ao(P,f)>0||m&&this.Ao(P,m)<0)&&(d=!0)):!E&&P?(r.track({type:0,doc:P}),nt=!0):E&&!P&&(r.track({type:1,doc:E}),nt=!0,(f||m)&&(d=!0)),nt&&(P?(c=c.add(P),a=D?a.add(_):a.delete(_)):(c=c.delete(_),a=a.delete(_)))}),js(this.query)||go(this.query))for(;c.size>this.query.limit;){const _=js(this.query)?c.last():c.first();c=c.delete(_.key),a=a.delete(_.key),r.track({type:1,doc:_})}return{Ro:c,vo:r,Bn:d,mutatedKeys:a}}Vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const o=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const a=t.vo.no();a.sort((m,_)=>function(v,E){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(v)-P(E)}(m.type,_.type)||this.Ao(m.doc,_.doc)),this.So(r);const c=n?this.Do():[],d=this.Io.size===0&&this.current?1:0,f=d!==this.Eo;return this.Eo=d,a.length!==0||f?{snapshot:new Ci(this.query,t.Ro,o,a,t.mutatedKeys,d===0,f,!1),Co:c}:{Co:c}}ro(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new El,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(n=>this.To=this.To.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Tt(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return t.forEach(r=>{this.Io.has(r)||n.push(new jf(r))}),this.Io.forEach(r=>{t.has(r)||n.push(new Zf(r))}),n}ko(t){this.To=t.zn,this.Io=Tt();const n=this.Po(t.documents);return this.applyChanges(n,!0)}xo(){return Ci.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Tw{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ew{constructor(t){this.key=t,this.$o=!1}}class Iw{constructor(t,n,r,o,a,c){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Oo={},this.Mo=new Qr(d=>df(d),zo),this.Fo=new Map,this.Lo=new Set,this.Bo=new Xt(Z.comparator),this.Uo=new Map,this.qo=new vh,this.Ko={},this.jo=new Map,this.Qo=Ai.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function bw(e,t){const n=Nw(e);let r,o;const a=n.Mo.get(t);if(a)r=a.targetId,n.sharedClientState.addLocalQueryTarget(r),o=a.view.xo();else{const c=await $y(n.localStore,Hn(t)),d=n.sharedClientState.addLocalQueryTarget(c.targetId);r=c.targetId,o=await Sw(n,t,r,d==="current"),n.isPrimaryClient&&Df(n.remoteStore,c)}return o}async function Sw(e,t,n,r){e.Go=(_,v,E)=>async function(P,C,D,nt){let mt=C.view.Po(D);mt.Bn&&(mt=await vl(P.localStore,C.query,!1).then(({documents:_t})=>C.view.Po(_t,mt)));const gt=nt&&nt.targetChanges.get(C.targetId),st=C.view.applyChanges(mt,P.isPrimaryClient,gt);return bl(P,C.targetId,st.Co),st.snapshot}(e,_,v,E);const o=await vl(e.localStore,t,!0),a=new ww(t,o.zn),c=a.Po(o.documents),d=Jr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline"),f=a.applyChanges(c,e.isPrimaryClient,d);bl(e,n,f.Co);const m=new Tw(t,n,a);return e.Mo.set(t,m),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),f.snapshot}async function Pw(e,t){const n=J(e),r=n.Mo.get(t),o=n.Fo.get(r.targetId);if(o.length>1)return n.Fo.set(r.targetId,o.filter(a=>!zo(a,t))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Uf(n.remoteStore,r.targetId),Ru(n,r.targetId)}).catch(Yr)):(Ru(n,r.targetId),await xu(n.localStore,r.targetId,!0))}async function Lw(e,t,n){const r=Ow(e);try{const o=await function(a,c){const d=J(a),f=he.now(),m=c.reduce((v,E)=>v.add(E.key),Tt());let _;return d.persistence.runTransaction("Locally write mutations","readwrite",v=>d.Wn.vn(v,m).next(E=>{_=E;const P=[];for(const C of c){const D=Qv(C,_.get(C.key));D!=null&&P.push(new Ui(C.key,D,cf(D.value.mapValue),Dn.exists(!0)))}return d.An.addMutationBatch(v,f,P,c)})).then(v=>(v.applyToLocalDocumentSet(_),{batchId:v.batchId,changes:_}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),function(a,c,d){let f=a.Ko[a.currentUser.toKey()];f||(f=new Xt(pt)),f=f.insert(c,d),a.Ko[a.currentUser.toKey()]=f}(r,o.batchId,n),await es(r,o.changes),await Go(r.remoteStore)}catch(o){const a=bh(o,"Failed to persist write");n.reject(a)}}async function Gf(e,t){const n=J(e);try{const r=await Fy(n.localStore,t);t.targetChanges.forEach((o,a)=>{const c=n.Uo.get(a);c&&(vt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.$o=!0:o.modifiedDocuments.size>0?vt(c.$o):o.removedDocuments.size>0&&(vt(c.$o),c.$o=!1))}),await es(n,r,t)}catch(r){await Yr(r)}}function Il(e,t,n){const r=J(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Mo.forEach((a,c)=>{const d=c.view.ro(t);d.snapshot&&o.push(d.snapshot)}),function(a,c){const d=J(a);d.onlineState=c;let f=!1;d.queries.forEach((m,_)=>{for(const v of _.listeners)v.ro(c)&&(f=!0)}),f&&Sh(d)}(r.eventManager,t),o.length&&r.Oo.br(o),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Aw(e,t,n){const r=J(e);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.Uo.get(t),a=o&&o.key;if(a){let c=new Xt(Z.comparator);c=c.insert(a,Kt.newNoDocument(a,ct.min()));const d=Tt().add(a),f=new Wo(ct.min(),new Map,new Vt(pt),c,d);await Gf(r,f),r.Bo=r.Bo.remove(a),r.Uo.delete(t),Ph(r)}else await xu(r.localStore,t,!1).then(()=>Ru(r,t,n)).catch(Yr)}async function Cw(e,t){const n=J(e),r=t.batch.batchId;try{const o=await By(n.localStore,t);Jf(n,r,null),Kf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await es(n,o)}catch(o){await Yr(o)}}async function kw(e,t,n){const r=J(e);try{const o=await function(a,c){const d=J(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return d.An.lookupMutationBatch(f,c).next(_=>(vt(_!==null),m=_.keys(),d.An.removeMutationBatch(f,_))).next(()=>d.An.performConsistencyCheck(f)).next(()=>d.Wn.vn(f,m))})}(r.localStore,t);Jf(r,t,n),Kf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await es(r,o)}catch(o){await Yr(o)}}function Kf(e,t){(e.jo.get(t)||[]).forEach(n=>{n.resolve()}),e.jo.delete(t)}function Jf(e,t,n){const r=J(e);let o=r.Ko[r.currentUser.toKey()];if(o){const a=o.get(t);a&&(n?a.reject(n):a.resolve(),o=o.remove(t)),r.Ko[r.currentUser.toKey()]=o}}function Ru(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fo.get(t))e.Mo.delete(r),n&&e.Oo.zo(r,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(r=>{e.qo.containsKey(r)||Xf(e,r)})}function Xf(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);n!==null&&(Uf(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Ph(e))}function bl(e,t,n){for(const r of n)r instanceof Zf?(e.qo.addReference(r.key,t),xw(e,r)):r instanceof jf?(F("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Xf(e,r.key)):K()}function xw(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(F("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Ph(e))}function Ph(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new Z(Pt.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Ew(n)),e.Bo=e.Bo.insert(n,r),Df(e.remoteStore,new Un(Hn(ph(n.path)),r,2,hh.I))}}async function es(e,t,n){const r=J(e),o=[],a=[],c=[];r.Mo.isEmpty()||(r.Mo.forEach((d,f)=>{c.push(r.Go(f,t,n).then(m=>{if(m){r.isPrimaryClient&&r.sharedClientState.updateQueryState(f.targetId,m.fromCache?"not-current":"current"),o.push(m);const _=_h.$n(f.targetId,m);a.push(_)}}))}),await Promise.all(c),r.Oo.br(o),await async function(d,f){const m=J(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>N.forEach(f,v=>N.forEach(v.kn,E=>m.persistence.referenceDelegate.addReference(_,v.targetId,E)).next(()=>N.forEach(v.xn,E=>m.persistence.referenceDelegate.removeReference(_,v.targetId,E)))))}catch(_){if(!Xr(_))throw _;F("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of f){const v=_.targetId;if(!_.fromCache){const E=m.qn.get(v),P=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(P);m.qn=m.qn.insert(v,C)}}}(r.localStore,a))}async function Rw(e,t){const n=J(e);if(!n.currentUser.isEqual(t)){F("SyncEngine","User change. New user:",t.toKey());const r=await Rf(n.localStore,t);n.currentUser=t,function(o,a){o.jo.forEach(c=>{c.forEach(d=>{d.reject(new $(S.CANCELLED,a))})}),o.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await es(n,r.Gn)}}function Mw(e,t){const n=J(e),r=n.Uo.get(t);if(r&&r.$o)return Tt().add(r.key);{let o=Tt();const a=n.Fo.get(t);if(!a)return o;for(const c of a){const d=n.Mo.get(c);o=o.unionWith(d.view.bo)}return o}}function Nw(e){const t=J(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Gf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Aw.bind(null,t),t.Oo.br=vw.bind(null,t.eventManager),t.Oo.zo=yw.bind(null,t.eventManager),t}function Ow(e){const t=J(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kw.bind(null,t),t}class Dw{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Zo(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return Uy(this.persistence,new Oy,t.initialUser,this.k)}Yo(t){return new Gy(yh.ks,this.k)}Jo(t){return new Jy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uw{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rw.bind(null,this.syncEngine),await mw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new _w}createDatastore(t){const n=Zo(t.databaseInfo.databaseId),r=(o=t.databaseInfo,new tw(o));var o;return function(a,c,d,f){return new iw(a,c,d,f)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,o=t.asyncQueue,a=d=>Il(this.syncEngine,d,0),c=wl.Pt()?new wl:new Xy,new sw(n,r,o,a,c);var n,r,o,a,c}createSyncEngine(t,n){return function(r,o,a,c,d,f,m){const _=new Iw(r,o,a,c,d,f);return m&&(_.Wo=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=J(t);F("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await ts(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t,n,r,o){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=ne.UNAUTHENTICATED,this.clientId=of.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=bh(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Fw(e,t){e.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async o=>{r.isEqual(o)||(await Rf(t.localStore,o),r=o)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function zw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Vw(e);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(o=>Tl(t.remoteStore,o)),e.setAppCheckTokenChangeListener((o,a)=>Tl(t.remoteStore,a)),e.onlineComponents=t}async function Vw(e){return e.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Fw(e,new Dw)),e.offlineComponents}async function Qf(e){return e.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await zw(e,new Uw)),e.onlineComponents}function $w(e){return Qf(e).then(t=>t.syncEngine)}async function tp(e){const t=await Qf(e),n=t.eventManager;return n.onListen=bw.bind(null,t.syncEngine),n.onUnlisten=Pw.bind(null,t.syncEngine),n}function qw(e,t,n={}){const r=new Ge;return e.asyncQueue.enqueueAndForget(async()=>function(o,a,c,d,f){const m=new Yf({next:v=>{a.enqueueAndForget(()=>Hf(o,_));const E=v.docs.has(c);!E&&v.fromCache?f.reject(new $(S.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&v.fromCache&&d&&d.source==="server"?f.reject(new $(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(v)},error:v=>f.reject(v)}),_=new Wf(ph(c.path),m,{includeMetadataChanges:!0,wo:!0});return qf(o,_)}(await tp(e),e.asyncQueue,t,n,r)),r.promise}function Hw(e,t,n={}){const r=new Ge;return e.asyncQueue.enqueueAndForget(async()=>function(o,a,c,d,f){const m=new Yf({next:v=>{a.enqueueAndForget(()=>Hf(o,_)),v.fromCache&&d.source==="server"?f.reject(new $(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(v)},error:v=>f.reject(v)}),_=new Wf(c,m,{includeMetadataChanges:!0,wo:!0});return qf(o,_)}(await tp(e),e.asyncQueue,t,n,r)),r.promise}class Ww{constructor(t,n,r,o,a,c,d,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.useFetchStreams=f}}class Mr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Mr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e,t,n){if(!n)throw new $(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Zw(e,t,n,r){if(t===!0&&r===!0)throw new $(S.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Pl(e){if(!Z.isDocumentKey(e))throw new $(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ll(e){if(Z.isDocumentKey(e))throw new $(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Lh(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":K()}function Zn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lh(e);throw new $(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new $(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new $(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Zw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Al({}),this._settingsFrozen=!1,t instanceof Mr?this._databaseId=t:(this._app=t,this._databaseId=function(o){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new $(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(o.options.projectId)}(t))}get app(){if(!this._app)throw new $(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new $(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Al(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wv;switch(n.type){case"gapi":const r=n.client;return vt(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Iv(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Sl.get(t);n&&(F("ComponentProvider","Removing Datastore"),Sl.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ce(this.firestore,t,this._key)}}class Ko{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ko(this.firestore,t,this._query)}}class mn extends Ko{constructor(t,n,r){super(t,n,ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ce(this.firestore,null,new Z(t))}withConverter(t){return new mn(this.firestore,t,this._path)}}function eI(e,t,...n){if(e=Me(e),ep("collection","path",t),e instanceof Ah){const r=Pt.fromString(t,...n);return Ll(r),new mn(e,null,r)}{if(!(e instanceof ce||e instanceof mn))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return Ll(r),new mn(e.firestore,null,r)}}function nI(e,t,...n){if(e=Me(e),arguments.length===1&&(t=of.A()),ep("doc","path",t),e instanceof Ah){const r=Pt.fromString(t,...n);return Pl(r),new ce(e,null,new Z(r))}{if(!(e instanceof ce||e instanceof mn))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return Pl(r),new ce(e.firestore,e instanceof mn?e.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Nf(this,"async_queue_retry"),this.bc=()=>{const n=Ja();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const t=Ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const n=Ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Ge;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Xr(t))throw t;F("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const n=this.mc.then(()=>(this.Ic=!0,t().catch(r=>{this.Ec=r,this.Ic=!1;const o=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw gn("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(t,n,r){this.Pc(),this.Rc.indexOf(t)>-1&&(n=0);const o=Ih.createAndSchedule(this,t,n,r,a=>this.Sc(a));return this.Tc.push(o),o}Pc(){this.Ec&&K()}verifyOperationInProgress(){}async Dc(){let t;do t=this.mc,await t;while(t!==this.mc)}Cc(t){for(const n of this.Tc)if(n.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const n=this.Tc.indexOf(t);this.Tc.splice(n,1)}}class ns extends Ah{constructor(t,n,r){super(t,n,r),this.type="firestore",this._queue=new jw,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||np(this),this._firestoreClient.terminate()}}function iI(e=rd()){return Uu(e,"firestore").getImmediate()}function Ch(e){return e._firestoreClient||np(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function np(e){var t;const n=e._freezeSettings(),r=function(o,a,c,d){return new Ww(o,a,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Bw(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new $(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ki($t.fromBase64String(t))}catch(n){throw new $(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ki($t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new $(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new $(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=/^__.*__$/;class Kw{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ui(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(t,this.data,n,this.fieldTransforms)}}function rp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Rh{constructor(t,n,r,o,a,c){this.settings=t,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=o,a===void 0&&this.xc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Rh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Oc({path:r,Fc:!1});return o.Lc(t),o}Bc(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Oc({path:r,Fc:!1});return o.xc(),o}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return To(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(t.length===0)throw this.qc("Document fields must not be empty");if(rp(this.$c)&&Gw.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Jw{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.k=r||Zo(t)}Qc(t,n,r,o=!1){return new Rh({$c:t,methodName:n,jc:r,path:ie.emptyPath(),Fc:!1,Kc:o},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Xw(e){const t=e._freezeSettings(),n=Zo(e._databaseId);return new Jw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Yw(e,t,n,r,o,a={}){const c=e.Qc(a.merge||a.mergeFields?2:0,t,n,o);up("Data must be an object, but it was:",c,r);const d=op(r,c);let f,m;if(a.merge)f=new wu(c.fieldMask),m=c.fieldTransforms;else if(a.mergeFields){const _=[];for(const v of a.mergeFields){const E=Qw(t,v,n);if(!c.contains(E))throw new $(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);e0(_,E)||_.push(E)}f=new wu(_),m=c.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,m=c.fieldTransforms;return new Kw(new Ie(d),f,m)}function sp(e,t){if(ap(e=Me(e)))return up("Unsupported field value:",t,e),op(e,t);if(e instanceof ip)return function(n,r){if(!rp(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&t.$c!==4)throw t.qc("Nested arrays are not supported");return function(n,r){const o=[];let a=0;for(const c of n){let d=sp(c,r.Uc(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(e,t)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jv(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=he.fromDate(n);return{timestampValue:yo(r.k,o)}}if(n instanceof he){const o=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yo(r.k,o)}}if(n instanceof xh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ki)return{bytesValue:Pf(r.k,n._byteString)};if(n instanceof ce){const o=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw r.qc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Lh(n)}`)}(e,t)}function op(e,t){const n={};return af(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oi(e,(r,o)=>{const a=sp(o,t.Mc(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function ap(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof he||e instanceof xh||e instanceof ki||e instanceof ce||e instanceof ip)}function up(e,t,n){if(!ap(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Lh(n);throw r==="an object"?t.qc(e+" a custom object"):t.qc(e+" "+r)}}function Qw(e,t,n){if((t=Me(t))instanceof kh)return t._internalPath;if(typeof t=="string")return hp(e,t);throw To("Field path arguments must be of type string or ",e,!1,void 0,n)}const t0=new RegExp("[~\\*/\\[\\]]");function hp(e,t,n){if(t.search(t0)>=0)throw To(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kh(...t.split("."))._internalPath}catch{throw To(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function To(e,t,n,r,o){const a=r&&!r.isEmpty(),c=o!==void 0;let d=`Function ${t}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||c)&&(f+=" (found",a&&(f+=` in field ${r}`),c&&(f+=` in document ${o}`),f+=")"),new $(S.INVALID_ARGUMENT,d+e+f)}function e0(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,n,r,o,a){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new n0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(lp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class n0 extends cp{data(){return super.data()}}function lp(e,t){return typeof t=="string"?hp(e,t):t instanceof kh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dp extends cp{constructor(t,n,r,o,a,c){super(t,n,r,o,c),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(lp("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Js extends dp{data(t={}){return super.data(t)}}class i0{constructor(t,n,r,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new dr(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Js(this._firestore,this._userDataWriter,r.key,r,new dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>({type:"added",doc:new Js(r._firestore,r._userDataWriter,c.doc.key,c.doc,new dr(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:a++}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new Js(r._firestore,r._userDataWriter,c.doc.key,c.doc,new dr(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:r0(c.type),doc:d,oldIndex:f,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function r0(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(e){if(go(e)&&e.explicitOrderBy.length===0)throw new $(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{convertValue(t,n="none"){switch(qn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Pi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw K()}}convertObject(t,n){const r={};return Oi(t.fields,(o,a)=>{r[o]=this.convertValue(a,n)}),r}convertGeoPoint(t){return new xh(Mt(t.latitude),Mt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=hf(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ar(t));default:return null}}convertTimestamp(t){const n=_n(t);return new he(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Pt.fromString(t);vt(kf(r));const o=new Mr(r.get(1),r.get(3)),a=new Z(r.popFirst(5));return o.isEqual(n)||gn(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(e){e=Zn(e,ce);const t=Zn(e.firestore,ns);return qw(Ch(t),e._key).then(n=>u0(t,e,n))}class fp extends o0{constructor(t){super(),this.firestore=t}convertBytes(t){return new ki(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ce(this.firestore,null,n)}}function sI(e){e=Zn(e,Ko);const t=Zn(e.firestore,ns),n=Ch(t),r=new fp(t);return s0(e._query),Hw(n,e._query).then(o=>new i0(t,r,e,o))}function oI(e,t,n){e=Zn(e,ce);const r=Zn(e.firestore,ns),o=a0(e.converter,t,n);return pp(r,[Yw(Xw(r),"setDoc",e._key,o,e.converter!==null,n).toMutation(e._key,Dn.none())])}function aI(e){return pp(Zn(e.firestore,ns),[new Tf(e._key,Dn.none())])}function pp(e,t){return function(n,r){const o=new Ge;return n.asyncQueue.enqueueAndForget(async()=>Lw(await $w(n),r,o)),o.promise}(Ch(e),t)}function u0(e,t,n){const r=n.docs.get(t._key),o=new fp(e);return new dp(e,o,t._key,r,new dr(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Ni=n})(zr),Tr(new Ii("firestore",(n,{options:r})=>{const o=n.getProvider("app").getImmediate(),a=new ns(o,new Tv(n.getProvider("auth-internal")),new Sv(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC")),pn(Jc,"3.4.4",e),pn(Jc,"3.4.4","esm2017")})();function uI(e,t,n=[]){class r extends HTMLElement{constructor(){super();this.target=this.attachShadow({mode:"open"}),this.data={}}connectedCallback(){n.forEach(a=>{this[a]!==void 0&&(this.data[a]=this[a])}),this.instance=new t({target:this.target,data:this.data}),n.forEach(a=>{this.instance.observe(a,c=>{this.setAttribute(a,c)})})}detachedCallback(){this.instance.destroy(),this.instance=null}attributeChangedCallback(a,c,d){const f=isNaN(d)?d:+d;this.data[a]=f,this.instance&&this.instance.set({[a]:f})}}return Object.defineProperty(r,"observedAttributes",{get(){return n}}),n.forEach(o=>{Object.defineProperty(r.prototype,o,{get(){return this.instance?this.instance.get(o):this.data[o]},set(a){this.data[o]=a,this.instance&&this.instance.set({[o]:a})}})}),customElements.define(e,r),r}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Mh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function ae(e,t,n,r){function o(a){return a instanceof n?a:new n(function(c){c(a)})}return new(n||(n=Promise))(function(a,c){function d(_){try{m(r.next(_))}catch(v){c(v)}}function f(_){try{m(r.throw(_))}catch(v){c(v)}}function m(_){_.done?a(_.value):o(_.value).then(d,f)}m((r=r.apply(e,t||[])).next())})}function ue(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(m){return function(_){return f([m,_])}}function f(m){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(a=m[0]&2?o.return:m[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,m[1])).done)return a;switch(o=0,a&&(m=[m[0]&2,a.value]),m[0]){case 0:case 1:a=m;break;case 4:return n.label++,{value:m[1],done:!1};case 5:n.label++,o=m[1],m=[0];continue;case 7:m=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(m[0]===6||m[0]===2)){n=0;continue}if(m[0]===3&&(!a||m[1]>a[0]&&m[1]<a[3])){n.label=m[1];break}if(m[0]===6&&n.label<a[1]){n.label=a[1],a=m;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(m);break}a[2]&&n.ops.pop(),n.trys.pop();continue}m=t.call(e,n)}catch(_){m=[6,_],o=0}finally{r=a=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}function vr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var mp=function(e,t){e.componentOnReady?e.componentOnReady().then(function(n){return t(n)}):hn(function(){return t(e)})},hn=function(e){return typeof __zone_symbol__requestAnimationFrame=="function"?__zone_symbol__requestAnimationFrame(e):typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e)},Xa,h0=function(e){return e.forEach(function(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];if(n==="easing"){var o="animation-timing-function";t[o]=r,delete t[n]}else{var o=c0(n);o!==n&&(t[o]=r,delete t[n])}}}),e},c0=function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},Nh=function(e){if(Xa===void 0){var t=e.style.animationName!==void 0,n=e.style.webkitAnimationName!==void 0;Xa=!t&&n?"-webkit-":""}return Xa},Et=function(e,t,n){var r=t.startsWith("animation")?Nh(e):"";e.style.setProperty(r+t,n)},Ee=function(e,t){var n=t.startsWith("animation")?Nh(e):"";e.style.removeProperty(n+t)},l0=function(e,t){var n,r={passive:!0},o=function(){n&&n()},a=function(c){e===c.target&&(o(),t(c))};return e&&(e.addEventListener("webkitAnimationEnd",a,r),e.addEventListener("animationend",a,r),n=function(){e.removeEventListener("webkitAnimationEnd",a,r),e.removeEventListener("animationend",a,r)}),o},d0=function(e){return e===void 0&&(e=[]),e.map(function(t){var n=t.offset,r=[];for(var o in t)t.hasOwnProperty(o)&&o!=="offset"&&r.push(o+": "+t[o]+";");return n*100+"% { "+r.join(" ")+" }"}).join(" ")},Cl=[],f0=function(e){var t=Cl.indexOf(e);return t<0&&(t=Cl.push(e)-1),"ion-animation-"+t},p0=function(e){var t=e.getRootNode();return t.head||t},m0=function(e,t,n){var r=p0(n),o=Nh(n),a=r.querySelector("#"+e);if(a)return a;var c=(n.ownerDocument||document).createElement("style");return c.id=e,c.textContent="@"+o+"keyframes "+e+" { "+t+" } @"+o+"keyframes "+e+"-alt { "+t+" }",r.appendChild(c),c},qs=function(e,t){if(e===void 0&&(e=[]),t!==void 0){var n=Array.isArray(t)?t:[t];return vr(vr([],e),n)}return e},Bn=function(e){var t,n,r,o,a,c,d=[],f=[],m=[],_=!1,v,E={},P=[],C=[],D={},nt=0,mt=!1,gt=!1,st,_t,yt,G,V=!0,b=!1,x=!0,U,k,X=e,Tn=[],Ht=[],bt=[],dt=[],de=[],q=[],Oe=[],z=[],Y=[],at=[],wt=typeof AnimationEffect=="function"||typeof window.AnimationEffect=="function",et=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&wt,Q=100,ft=function(){return at},Wt=function(w){return dt.forEach(function(A){A.destroy(w)}),Se(w),bt.length=0,dt.length=0,d.length=0,zi(),_=!1,x=!0,k},Se=function(w){Qe(),w&&Yn()},hs=function(){mt=!1,gt=!1,x=!0,_t=void 0,yt=void 0,G=void 0,nt=0,b=!1,V=!0},Ye=function(w,A){var R=A&&A.oneTimeCallback?Ht:Tn;return R.push({c:w,o:A}),k},zi=function(){return Tn.length=0,Ht.length=0,k},Qe=function(){if(et)at.forEach(function(A){A.cancel()}),at.length=0;else{var w=bt.slice();hn(function(){w.forEach(function(A){Ee(A,"animation-name"),Ee(A,"animation-duration"),Ee(A,"animation-timing-function"),Ee(A,"animation-iteration-count"),Ee(A,"animation-delay"),Ee(A,"animation-play-state"),Ee(A,"animation-fill-mode"),Ee(A,"animation-direction")})})}},Yn=function(){de.forEach(function(w){w&&w.parentNode&&w.parentNode.removeChild(w)}),de.length=0},ta=function(w){return q.push(w),k},cs=function(w){return Oe.push(w),k},ls=function(w){return z.push(w),k},Vi=function(w){return Y.push(w),k},Qn=function(w){return f=qs(f,w),k},tn=function(w){return m=qs(m,w),k},ti=function(w){return w===void 0&&(w={}),E=w,k},$i=function(w){w===void 0&&(w=[]);for(var A=0,R=w;A<R.length;A++){var j=R[A];E[j]=""}return k},En=function(w){return P=qs(P,w),k},In=function(w){return C=qs(C,w),k},ea=function(w){return w===void 0&&(w={}),D=w,k},ds=function(w){w===void 0&&(w=[]);for(var A=0,R=w;A<R.length;A++){var j=R[A];D[j]=""}return k},De=function(){return a!==void 0?a:v?v.getFill():"both"},Pe=function(){return _t!==void 0?_t:c!==void 0?c:v?v.getDirection():"normal"},Ue=function(){return mt?"linear":r!==void 0?r:v?v.getEasing():"linear"},Zt=function(){return gt?0:yt!==void 0?yt:n!==void 0?n:v?v.getDuration():0},_e=function(){return o!==void 0?o:v?v.getIterations():1},Be=function(){return G!==void 0?G:t!==void 0?t:v?v.getDelay():0},fs=function(){return d},qi=function(w){return c=w,Gt(!0),k},Hi=function(w){return a=w,Gt(!0),k},ps=function(w){return t=w,Gt(!0),k},ee=function(w){return r=w,Gt(!0),k},en=function(w){return!et&&w===0&&(w=1),n=w,Gt(!0),k},na=function(w){return o=w,Gt(!0),k},ia=function(w){return v=w,k},Le=function(w){if(w!=null)if(w.nodeType===1)bt.push(w);else if(w.length>=0)for(var A=0;A<w.length;A++)bt.push(w[A]);else console.error("Invalid addElement value");return k},fe=function(w){if(w!=null)if(Array.isArray(w))for(var A=0,R=w;A<R.length;A++){var j=R[A];j.parent(k),dt.push(j)}else w.parent(k),dt.push(w);return k},pe=function(w){var A=d!==w;return d=w,A&&ms(d),k},ms=function(w){et?ft().forEach(function(A){if(A.effect.setKeyframes)A.effect.setKeyframes(w);else{var R=new KeyframeEffect(A.effect.target,w,A.effect.getTiming());A.effect=R}}):Wi()},ra=function(){q.forEach(function(j){return j()}),Oe.forEach(function(j){return j()});var w=f,A=m,R=E;bt.forEach(function(j){var Ct=j.classList;w.forEach(function(oe){return Ct.add(oe)}),A.forEach(function(oe){return Ct.remove(oe)});for(var ve in R)R.hasOwnProperty(ve)&&Et(j,ve,R[ve])})},Ae=function(){Ki(),z.forEach(function(Ct){return Ct()}),Y.forEach(function(Ct){return Ct()});var w=V?1:0,A=P,R=C,j=D;bt.forEach(function(Ct){var ve=Ct.classList;A.forEach(function(rt){return ve.add(rt)}),R.forEach(function(rt){return ve.remove(rt)});for(var oe in j)j.hasOwnProperty(oe)&&Et(Ct,oe,j[oe])}),Tn.forEach(function(Ct){return Ct.c(w,k)}),Ht.forEach(function(Ct){return Ct.c(w,k)}),Ht.length=0,x=!0,V&&(b=!0),V=!0},se=function(){nt!==0&&(nt--,nt===0&&(Ae(),v&&v.animationFinish()))},Wi=function(w){w===void 0&&(w=!0),Yn();var A=h0(d);bt.forEach(function(R){if(A.length>0){var j=d0(A);U=e!==void 0?e:f0(j);var Ct=m0(U,j,R);de.push(Ct),Et(R,"animation-duration",Zt()+"ms"),Et(R,"animation-timing-function",Ue()),Et(R,"animation-delay",Be()+"ms"),Et(R,"animation-fill-mode",De()),Et(R,"animation-direction",Pe());var ve=_e()===1/0?"infinite":_e().toString();Et(R,"animation-iteration-count",ve),Et(R,"animation-play-state","paused"),w&&Et(R,"animation-name",Ct.id+"-alt"),hn(function(){Et(R,"animation-name",Ct.id||null)})}})},ei=function(){bt.forEach(function(w){var A=w.animate(d,{id:X,delay:Be(),duration:Zt(),easing:Ue(),iterations:_e(),fill:De(),direction:Pe()});A.pause(),at.push(A)}),at.length>0&&(at[0].onfinish=function(){se()})},bn=function(w){w===void 0&&(w=!0),ra(),d.length>0&&(et?ei():Wi(w)),_=!0},jt=function(w){if(w=Math.min(Math.max(w,0),.9999),et)at.forEach(function(R){R.currentTime=R.effect.getComputedTiming().delay+Zt()*w,R.pause()});else{var A="-"+Zt()*w+"ms";bt.forEach(function(R){d.length>0&&(Et(R,"animation-delay",A),Et(R,"animation-play-state","paused"))})}},gs=function(w){at.forEach(function(A){A.effect.updateTiming({delay:Be(),duration:Zt(),easing:Ue(),iterations:_e(),fill:De(),direction:Pe()})}),w!==void 0&&jt(w)},ni=function(w,A){w===void 0&&(w=!0),hn(function(){bt.forEach(function(R){Et(R,"animation-name",U||null),Et(R,"animation-duration",Zt()+"ms"),Et(R,"animation-timing-function",Ue()),Et(R,"animation-delay",A!==void 0?"-"+A*Zt()+"ms":Be()+"ms"),Et(R,"animation-fill-mode",De()||null),Et(R,"animation-direction",Pe()||null);var j=_e()===1/0?"infinite":_e().toString();Et(R,"animation-iteration-count",j),w&&Et(R,"animation-name",U+"-alt"),hn(function(){Et(R,"animation-name",U||null)})})})},Gt=function(w,A,R){return w===void 0&&(w=!1),A===void 0&&(A=!0),w&&dt.forEach(function(j){j.update(w,A,R)}),et?gs(R):ni(A,R),k},Zi=function(w,A){return w===void 0&&(w=!1),dt.forEach(function(R){R.progressStart(w,A)}),Gi(),mt=w,_||bn(),Gt(!1,!0,A),k},ji=function(w){return dt.forEach(function(A){A.progressStep(w)}),jt(w),k},nn=function(w,A,R){return mt=!1,dt.forEach(function(j){j.progressEnd(w,A,R)}),R!==void 0&&(yt=R),b=!1,V=!0,w===0?(_t=Pe()==="reverse"?"normal":"reverse",_t==="reverse"&&(V=!1),et?(Gt(),jt(1-A)):(G=(1-A)*Zt()*-1,Gt(!1,!1))):w===1&&(et?(Gt(),jt(A)):(G=A*Zt()*-1,Gt(!1,!1))),w!==void 0&&(Ye(function(){yt=void 0,_t=void 0,G=void 0},{oneTimeCallback:!0}),v||vs()),k},Gi=function(){_&&(et?at.forEach(function(w){w.pause()}):bt.forEach(function(w){Et(w,"animation-play-state","paused")}))},sa=function(){return dt.forEach(function(w){w.pause()}),Gi(),k},oa=function(){st=void 0,se()},Ki=function(){st&&clearTimeout(st)},aa=function(){if(Ki(),hn(function(){bt.forEach(function(j){d.length>0&&Et(j,"animation-play-state","running")})}),d.length===0||bt.length===0)se();else{var w=Be()||0,A=Zt()||0,R=_e()||1;isFinite(R)&&(st=setTimeout(oa,w+A*R+Q)),l0(bt[0],function(){Ki(),hn(function(){ua(),hn(se)})})}},ua=function(){bt.forEach(function(w){Ee(w,"animation-duration"),Ee(w,"animation-delay"),Ee(w,"animation-play-state")})},_s=function(){at.forEach(function(w){w.play()}),(d.length===0||bt.length===0)&&se()},Ji=function(){et?(jt(0),gs()):ni()},vs=function(w){return new Promise(function(A){w&&w.sync&&(gt=!0,Ye(function(){return gt=!1},{oneTimeCallback:!0})),_||bn(),b&&(Ji(),b=!1),x&&(nt=dt.length+1,x=!1),Ye(function(){return A()},{oneTimeCallback:!0}),dt.forEach(function(R){R.play()}),et?_s():aa()})},ha=function(){dt.forEach(function(w){w.stop()}),_&&(Qe(),_=!1),hs()},Sn=function(w,A){var R,j=d[0];return j!==void 0&&(j.offset===void 0||j.offset===0)?j[w]=A:d=vr([(R={offset:0},R[w]=A,R)],d),k},ii=function(w,A){var R,j=d[d.length-1];return j!==void 0&&(j.offset===void 0||j.offset===1)?j[w]=A:d=vr(vr([],d),[(R={offset:1},R[w]=A,R)]),k},rn=function(w,A,R){return Sn(w,A).to(w,R)};return k={parentAnimation:v,elements:bt,childAnimations:dt,id:X,animationFinish:se,from:Sn,to:ii,fromTo:rn,parent:ia,play:vs,pause:sa,stop:ha,destroy:Wt,keyframes:pe,addAnimation:fe,addElement:Le,update:Gt,fill:Hi,direction:qi,iterations:na,duration:en,easing:ee,delay:ps,getWebAnimations:ft,getKeyframes:fs,getFill:De,getDirection:Pe,getDelay:Be,getIterations:_e,getEasing:Ue,getDuration:Zt,afterAddRead:ls,afterAddWrite:Vi,afterClearStyles:ds,afterStyles:ea,afterRemoveClass:In,afterAddClass:En,beforeAddRead:ta,beforeAddWrite:cs,beforeClearStyles:$i,beforeStyles:ti,beforeRemoveClass:tn,beforeAddClass:Qn,onFinish:Ye,progressStart:Zi,progressStep:ji,progressEnd:nn}},g0=typeof window!="undefined"?window:{};g0.document;(function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replace=="function"}catch{}return!1})();var _0=function(e){return y0(e).$modeName$},v0=new WeakMap,y0=function(e){return v0.get(e)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var w0,Oh=function(e){return e&&_0(e)||w0},T0=99,Dh=function(e){return Bn().duration(e?400:300)},E0=function(e){var t,n,r=e.width+8,o=Bn(),a=Bn();e.isEndSide?(t=r+"px",n="0px"):(t=-r+"px",n="0px"),o.addElement(e.menuInnerEl).fromTo("transform","translateX("+t+")","translateX("+n+")");var c=Oh(e),d=c==="ios",f=d?.2:.25;return a.addElement(e.backdropEl).fromTo("opacity",.01,f),Dh(d).addAnimation([o,a])},I0=function(e){var t,n,r=Oh(e),o=e.width;e.isEndSide?(t=-o+"px",n=o+"px"):(t=o+"px",n=-o+"px");var a=Bn().addElement(e.menuInnerEl).fromTo("transform","translateX("+n+")","translateX(0px)"),c=Bn().addElement(e.contentEl).fromTo("transform","translateX(0px)","translateX("+t+")"),d=Bn().addElement(e.backdropEl).fromTo("opacity",.01,.32);return Dh(r==="ios").addAnimation([a,c,d])},b0=function(e){var t=Oh(e),n=e.width*(e.isEndSide?-1:1)+"px",r=Bn().addElement(e.contentEl).fromTo("transform","translateX(0px)","translateX("+n+")");return Dh(t==="ios").addAnimation(r)},S0=function(){var e=new Map,t=[],n=function(b){return ae(void 0,void 0,void 0,function(){var x;return ue(this,function(U){switch(U.label){case 0:return[4,m(b)];case 1:return x=U.sent(),x?[2,x.open()]:[2,!1]}})})},r=function(b){return ae(void 0,void 0,void 0,function(){var x;return ue(this,function(U){switch(U.label){case 0:return[4,b!==void 0?m(b):_()];case 1:return x=U.sent(),x!==void 0?[2,x.close()]:[2,!1]}})})},o=function(b){return ae(void 0,void 0,void 0,function(){var x;return ue(this,function(U){switch(U.label){case 0:return[4,m(b)];case 1:return x=U.sent(),x?[2,x.toggle()]:[2,!1]}})})},a=function(b,x){return ae(void 0,void 0,void 0,function(){var U;return ue(this,function(k){switch(k.label){case 0:return[4,m(x)];case 1:return U=k.sent(),U&&(U.disabled=!b),[2,U]}})})},c=function(b,x){return ae(void 0,void 0,void 0,function(){var U;return ue(this,function(k){switch(k.label){case 0:return[4,m(x)];case 1:return U=k.sent(),U&&(U.swipeGesture=b),[2,U]}})})},d=function(b){return ae(void 0,void 0,void 0,function(){var x,x;return ue(this,function(U){switch(U.label){case 0:return b==null?[3,2]:[4,m(b)];case 1:return x=U.sent(),[2,x!==void 0&&x.isOpen()];case 2:return[4,_()];case 3:return x=U.sent(),[2,x!==void 0]}})})},f=function(b){return ae(void 0,void 0,void 0,function(){var x;return ue(this,function(U){switch(U.label){case 0:return[4,m(b)];case 1:return x=U.sent(),x?[2,!x.disabled]:[2,!1]}})})},m=function(b){return ae(void 0,void 0,void 0,function(){var x,U;return ue(this,function(k){switch(k.label){case 0:return[4,V()];case 1:return k.sent(),b==="start"||b==="end"?(x=G(function(X){return X.side===b&&!X.disabled}),x?[2,x]:[2,G(function(X){return X.side===b})]):b!=null?[2,G(function(X){return X.menuId===b})]:(U=G(function(X){return!X.disabled}),U?[2,U]:[2,t.length>0?t[0].el:void 0])}})})},_=function(){return ae(void 0,void 0,void 0,function(){return ue(this,function(b){switch(b.label){case 0:return[4,V()];case 1:return b.sent(),[2,st()]}})})},v=function(){return ae(void 0,void 0,void 0,function(){return ue(this,function(b){switch(b.label){case 0:return[4,V()];case 1:return b.sent(),[2,_t()]}})})},E=function(){return ae(void 0,void 0,void 0,function(){return ue(this,function(b){switch(b.label){case 0:return[4,V()];case 1:return b.sent(),[2,yt()]}})})},P=function(b,x){e.set(b,x)},C=function(b){t.indexOf(b)<0&&(b.disabled||nt(b),t.push(b))},D=function(b){var x=t.indexOf(b);x>-1&&t.splice(x,1)},nt=function(b){var x=b.side;t.filter(function(U){return U.side===x&&U!==b}).forEach(function(U){return U.disabled=!0})},mt=function(b,x,U){return ae(void 0,void 0,void 0,function(){var k;return ue(this,function(X){switch(X.label){case 0:return yt()?[2,!1]:x?[4,_()]:[3,3];case 1:return k=X.sent(),k&&b.el!==k?[4,k.setOpen(!1,!1)]:[3,3];case 2:X.sent(),X.label=3;case 3:return[2,b._setOpen(x,U)]}})})},gt=function(b,x){var U=e.get(b);if(!U)throw new Error("animation not registered");var k=U(x);return k},st=function(){return G(function(b){return b._isOpen})},_t=function(){return t.map(function(b){return b.el})},yt=function(){return t.some(function(b){return b.isAnimating})},G=function(b){var x=t.find(b);if(x!==void 0)return x.el},V=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(b){return new Promise(function(x){return mp(b,x)})}))};return P("reveal",b0),P("push",I0),P("overlay",E0),typeof document!="undefined"&&document.addEventListener("ionBackButton",function(b){var x=st();x&&b.detail.register(T0,function(){return x.close()})}),{registerAnimation:P,get:m,getMenus:v,getOpen:_,isEnabled:f,swipeGesture:c,isAnimating:E,isOpen:d,enable:a,toggle:o,close:r,open:n,_getOpenSync:st,_createAnimation:gt,_register:C,_unregister:D,_setOpen:mt,_setActiveMenu:nt}};S0();var gp=function(e){return{create:function(t){return P0(e,t)},dismiss:function(t,n,r){return A0(document,t,n,e,r)},getTop:function(){return ae(this,void 0,void 0,function(){return ue(this,function(t){return[2,_p(document,e)]})})}}},hI=gp("ion-modal"),cI=gp("ion-popover"),P0=function(e,t){return typeof window!="undefined"&&typeof window.customElements!="undefined"?window.customElements.whenDefined(e).then(function(){var n=document.createElement(e);return n.classList.add("overlay-hidden"),Object.assign(n,Object.assign(Object.assign({},t),{hasController:!0})),k0(document).appendChild(n),new Promise(function(r){return mp(n,r)})}):Promise.resolve()},L0=function(e){return e.classList.contains("overlay-hidden")},A0=function(e,t,n,r,o){var a=_p(e,r,o);return a?a.dismiss(t,n):Promise.reject("overlay does not exist")},C0=function(e,t){return t===void 0&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter(function(n){return n.overlayIndex>0})},_p=function(e,t,n){var r=C0(e,t).filter(function(o){return!L0(o)});return n===void 0?r[r.length-1]:r.find(function(o){return o.id===n})},k0=function(e){return e.querySelector("ion-app")||e.body};function vp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x0=vp,yp=new Br("auth","Firebase",vp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Ou("@firebase/auth");function Xs(e,...t){kl.logLevel<=lt.ERROR&&kl.error(`Auth (${zr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,...t){throw Uh(e,...t)}function xe(e,...t){return Uh(e,...t)}function R0(e,t,n){const r=Object.assign(Object.assign({},x0()),{[t]:n});return new Br("auth","Firebase",r).create(t,{appName:e.name})}function Uh(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return yp.create(e,...t)}function H(e,t,...n){if(!e)throw Uh(t,...n)}function Ze(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xs(t),new Error(t)}function Xe(e,t){e||Ze(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map;function je(e){Xe(e instanceof Function,"Expected a class definition");let t=xl.get(e);return t?(Xe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xl.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(e,t){const n=Uu(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),a=n.getOptions();if(eo(a,t!=null?t:{}))return o;be(o,"already-initialized")}return n.initialize({options:t})}function N0(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(je);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function O0(){return Rl()==="http:"||Rl()==="https:"}function Rl(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O0()||td()||"connection"in navigator)?navigator.onLine:!0}function U0(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xe(n>t,"Short delay should be less than long delay!"),this.isMobile=Ql()||ed()}get(){return D0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(e,t){Xe(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new is(3e4,6e4);function rs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ss(e,t,n,r,o={}){return Tp(e,o,async()=>{let a={},c={};r&&(t==="GET"?c=r:a={body:JSON.stringify(r)});const d=Fr(Object.assign({key:e.config.apiKey},c)).slice(1),f=await e._getAdditionalHeaders();return f["Content-Type"]="application/json",e.languageCode&&(f["X-Firebase-Locale"]=e.languageCode),wp.fetch()(Ep(e,e.config.apiHost,n,d),Object.assign({method:t,headers:f,referrerPolicy:"no-referrer"},a))})}async function Tp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},B0),t);try{const o=new z0(e),a=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Ya(e,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(e,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Ya(e,"email-already-in-use",c);const _=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw R0(e,_,m);be(e,_)}}catch(o){if(o instanceof Kn)throw o;be(e,"network-request-failed")}}async function os(e,t,n,r,o={}){const a=await ss(e,t,n,r,o);return"mfaPendingCredential"in a&&be(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Ep(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?Bh(e.config,o):`${e.config.apiScheme}://${o}`}class z0{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),F0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=xe(e,t,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(e,t){return ss(e,"POST","/v1/accounts:delete",t)}async function $0(e,t){return ss(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function q0(e,t=!1){const n=Me(e),r=await n.getIdToken(t),o=Fh(r);H(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:yr(Qa(o.auth_time)),issuedAtTime:yr(Qa(o.iat)),expirationTime:yr(Qa(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Qa(e){return Number(e)*1e3}function Fh(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const o=mg(n);return o?JSON.parse(o):(Xs("Failed to decode base64 JWT payload"),null)}catch(o){return Xs("Caught error parsing JWT payload as JSON",o),null}}function H0(e){const t=Fh(e);return H(t,"internal-error"),H(typeof t.exp!="undefined","internal-error"),H(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Kn&&W0(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function W0({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yr(this.lastLoginAt),this.creationTime=yr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(e){var t;const n=e.auth,r=await e.getIdToken(),o=await Nr(e,$0(n,{idToken:r}));H(o==null?void 0:o.users.length,n,"internal-error");const a=o.users[0];e._notifyReloadListener(a);const c=((t=a.providerUserInfo)===null||t===void 0?void 0:t.length)?K0(a.providerUserInfo):[],d=G0(e.providerData,c),f=e.isAnonymous,m=!(e.email&&a.passwordHash)&&!(d==null?void 0:d.length),_=f?m:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Ip(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(e,v)}async function j0(e){const t=Me(e);await Eo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function G0(e,t){return[...e.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function K0(e){return e.map(t=>{var{providerId:n}=t,r=Mh(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(e,t){const n=await Tp(e,{},async()=>{const r=Fr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:a}=e.config,c=Ep(e,o,"/v1/token",`key=${a}`),d=await e._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",wp.fetch()(c,{method:"POST",headers:d,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken!="undefined","internal-error"),H(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):H0(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:o,expiresIn:a}=await J0(t,n);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:o,expirationTime:a}=n,c=new Or;return r&&(H(typeof r=="string","internal-error",{appName:t}),c.refreshToken=r),o&&(H(typeof o=="string","internal-error",{appName:t}),c.accessToken=o),a&&(H(typeof a=="number","internal-error",{appName:t}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e,t){H(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Fn{constructor(t){var{uid:n,auth:r,stsTokenManager:o}=t,a=Mh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Ip(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await Nr(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return q0(this,t)}reload(){return j0(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Nr(this,V0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,o,a,c,d,f,m,_;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(o=n.email)!==null&&o!==void 0?o:void 0,P=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,C=(c=n.photoURL)!==null&&c!==void 0?c:void 0,D=(d=n.tenantId)!==null&&d!==void 0?d:void 0,nt=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,mt=(m=n.createdAt)!==null&&m!==void 0?m:void 0,gt=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:st,emailVerified:_t,isAnonymous:yt,providerData:G,stsTokenManager:V}=n;H(st&&V,t,"internal-error");const b=Or.fromJSON(this.name,V);H(typeof st=="string",t,"internal-error"),un(v,t.name),un(E,t.name),H(typeof _t=="boolean",t,"internal-error"),H(typeof yt=="boolean",t,"internal-error"),un(P,t.name),un(C,t.name),un(D,t.name),un(nt,t.name),un(mt,t.name),un(gt,t.name);const x=new Fn({uid:st,auth:t,email:E,emailVerified:_t,displayName:v,isAnonymous:yt,photoURL:C,phoneNumber:P,tenantId:D,stsTokenManager:b,createdAt:mt,lastLoginAt:gt});return G&&Array.isArray(G)&&(x.providerData=G.map(U=>Object.assign({},U))),nt&&(x._redirectEventId=nt),x}static async _fromIdTokenResponse(t,n,r=!1){const o=new Or;o.updateFromServerResponse(n);const a=new Fn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Eo(a),a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}bp.type="NONE";const Ml=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e,t,n){return`firebase:${e}:${t}:${n}`}class wi{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Ys(this.userKey,o.apiKey,a),this.fullPersistenceKey=Ys("persistence",o.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wi(je(Ml),t,r);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||je(Ml);const c=Ys(r,t.config.apiKey,t.name);let d=null;for(const m of n)try{const _=await m._get(c);if(_){const v=Fn._fromJSON(t,_);m!==a&&(d=v),a=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new wi(a,t,r):(a=f[0],d&&await a._set(c,d.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new wi(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cp(t))return"Blackberry";if(kp(t))return"Webos";if(zh(t))return"Safari";if((t.includes("chrome/")||Pp(t))&&!t.includes("edge/"))return"Chrome";if(Ap(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sp(e=Dt()){return/firefox\//i.test(e)}function zh(e=Dt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pp(e=Dt()){return/crios\//i.test(e)}function Lp(e=Dt()){return/iemobile/i.test(e)}function Ap(e=Dt()){return/android/i.test(e)}function Cp(e=Dt()){return/blackberry/i.test(e)}function kp(e=Dt()){return/webos/i.test(e)}function Jo(e=Dt()){return/iphone|ipad|ipod/i.test(e)}function X0(e=Dt()){var t;return Jo(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function Y0(){return nd()&&document.documentMode===10}function xp(e=Dt()){return Jo(e)||Ap(e)||kp(e)||Cp(e)||/windows phone/i.test(e)||Lp(e)}function Q0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(e,t=[]){let n;switch(e){case"Browser":n=Nl(Dt());break;case"Worker":n=`${Nl(Dt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ol(this),this.idTokenSubscription=new Ol(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await wi.create(this,t),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user)}return r?r._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Eo(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=U0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Me(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Br("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&je(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,o){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),c=this._isInitialized?Promise.resolve():this._initializationPromise;return H(c,this,"internal-error"),c.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,o):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function Xo(e){return Me(e)}class Ol{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ig(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(t){return Ze("not implemented")}_linkToIdToken(t,n){return Ze("not implemented")}_getReauthenticationResolver(t){return Ze("not implemented")}}async function eT(e,t){return ss(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(e,t){return os(e,"POST","/v1/accounts:signInWithPassword",rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(e,t){return os(e,"POST","/v1/accounts:signInWithEmailLink",rs(e,t))}async function rT(e,t){return os(e,"POST","/v1/accounts:signInWithEmailLink",rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Vh{constructor(t,n,r,o=null){super("password",r);this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Dr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Dr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return nT(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iT(t,{email:this._email,oobCode:this._password});default:be(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return eT(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rT(t,{idToken:n,email:this._email,oobCode:this._password});default:be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(e,t){return os(e,"POST","/v1/accounts:signInWithIdp",rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="http://localhost";class jn extends Vh{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=n,a=Mh(n,["providerId","signInMethod"]);if(!r||!o)return null;const c=new jn(r,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(t){const n=this.buildRequest();return Ti(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ti(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ti(t,n)}buildRequest(){const t={requestUri:sT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Fr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aT(e){const t=hr(cr(e)).link,n=t?hr(cr(t)).deep_link_id:null,r=hr(cr(e)).deep_link_id;return(r?hr(cr(r)).link:null)||r||n||t||e}class $h{constructor(t){var n,r,o,a,c,d;const f=hr(cr(t)),m=(n=f.apiKey)!==null&&n!==void 0?n:null,_=(r=f.oobCode)!==null&&r!==void 0?r:null,v=oT((o=f.mode)!==null&&o!==void 0?o:null);H(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=f.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const n=aT(t);try{return new $h(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.providerId=Fi.PROVIDER_ID}static credential(t,n){return Dr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=$h.parseLink(n);return H(r,"argument-error"),Dr._fromEmailAndCode(t,r.code,r.tenantId)}}Fi.PROVIDER_ID="password";Fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Mp{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends as{constructor(){super("facebook.com")}static credential(t){return jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends as{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends as{constructor(){super("github.com")}static credential(t){return jn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return dn.credential(t.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends as{constructor(){super("twitter.com")}static credential(t,n){return jn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(e,t){return os(e,"POST","/v1/accounts:signUp",rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,o=!1){const a=await Fn._fromIdTokenResponse(t,r,o),c=Dl(r);return new Gn({user:a,providerId:c,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const o=Dl(r);return new Gn({user:t,providerId:o,_tokenResponse:r,operationType:n})}}function Dl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Kn{constructor(t,n,r,o){var a;super(n.code,n.message);this.operationType=r,this.user=o,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,o){return new Io(t,n,r,o)}}function Np(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(e,a,t,r):a})}async function hT(e,t,n=!1){const r=await Nr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const a=await Nr(e,Np(r,o,t,e),n);H(a.idToken,r,"internal-error");const c=Fh(a.idToken);H(c,r,"internal-error");const{sub:d}=c;return H(e.uid===d,r,"user-mismatch"),Gn._forOperation(e,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&be(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(e,t,n=!1){const r="signIn",o=await Np(e,r,t),a=await Gn._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(a.user),a}async function lT(e,t){return Op(Xo(e),t)}async function lI(e,t,n){const r=Xo(e),o=await uT(r,{returnSecureToken:!0,email:t,password:n}),a=await Gn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function dI(e,t,n){return lT(Me(e),Fi.credential(t,n))}const bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){const e=Dt();return zh(e)||Jo(e)}const fT=1e3,pT=10;class Up extends Dp{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dT()&&Q0(),this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&t(n,o,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((c,d,f)=>{this.notifyListeners(c,f)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(t.newValue!==c)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const o=()=>{const c=this.storage.getItem(r);!n&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Y0()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,pT):o()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},fT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Up.type="LOCAL";const mT=Up;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Bp.type="SESSION";const Fp=Bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const r=new Yo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:o,data:a}=n.data,c=this.handlersMap[o];if(!(c==null?void 0:c.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(c).map(async m=>m(n.origin,a)),f=await gT(d);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const o=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,f)=>{const m=qh("",20);o.port1.start();const _=setTimeout(()=>{f(new Error("unsupported_event"))},r);c={messageChannel:o,onMessage(v){const E=v;if(E.data.eventId===m)switch(E.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(E.data.response);break;default:clearTimeout(_),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:t,eventId:m,data:n},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return window}function vT(e){Re().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return typeof Re().WorkerGlobalScope!="undefined"&&typeof Re().importScripts=="function"}async function yT(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function TT(){return zp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="firebaseLocalStorageDb",ET=1,So="firebaseLocalStorage",$p="fbase_key";class us{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(e,t){return e.transaction([So],t?"readwrite":"readonly").objectStore(So)}function IT(){const e=indexedDB.deleteDatabase(Vp);return new us(e).toPromise()}function Nu(){const e=indexedDB.open(Vp,ET);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(So,{keyPath:$p})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(So)?t(r):(r.close(),await IT(),t(await Nu()))})})}async function Ul(e,t,n){const r=Qo(e,!0).put({[$p]:t,value:n});return new us(r).toPromise()}async function bT(e,t){const n=Qo(e,!1).get(t),r=await new us(n).toPromise();return r===void 0?null:r.value}function Bl(e,t){const n=Qo(e,!0).delete(t);return new us(n).toPromise()}const ST=800,PT=3;class qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>PT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(TT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await yT(),!this.activeServiceWorker)return;this.sender=new _T(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Nu();return await Ul(t,bo,"1"),await Bl(t,bo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ul(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>bT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const a=Qo(o,!1).getAll();return new us(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:o,value:a}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ST)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qp.type="LOCAL";const LT=qp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function CT(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=o=>{const a=xe("internal-error");a.customData=o,n(a)},r.type="text/javascript",r.charset="UTF-8",AT().appendChild(r)})}function kT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(e,t){return t?je(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Vh{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return Ti(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ti(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ti(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function RT(e){return Op(e.auth,new Hh(e),e.bypassAuthState)}function MT(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),cT(n,new Hh(e),e.bypassAuthState)}async function NT(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),hT(n,new Hh(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,n,r,o,a=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:o,tenantId:a,error:c,type:d}=t;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return RT;case"linkViaPopup":case"linkViaRedirect":return NT;case"reauthViaPopup":case"reauthViaRedirect":return MT;default:be(this.auth,"internal-error")}}resolve(t){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new is(2e3,1e4);class vi extends Hp{constructor(t,n,r,o,a){super(t,n,o,a);this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const t=qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,OT.get())};t()}}vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="pendingRedirect",tu=new Map;class UT extends Hp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let t=tu.get(this.auth._key());if(!t){try{const r=await BT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}tu.set(this.auth._key(),t)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BT(e,t){const n=zT(t),r=FT(e);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function FT(e){return je(e._redirectPersistence)}function zT(e){return Ys(DT,e.config.apiKey,e.name)}async function VT(e,t,n=!1){const r=Xo(e),o=xT(r,t),c=await new UT(r,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,t)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=10*60*1e3;class qT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!HT(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Wp(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fl(t))}saveEventToCache(t){this.cachedEventUids.add(Fl(t)),this.lastProcessedEventTime=Date.now()}}function Fl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Wp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function HT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(e,t={}){return ss(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jT=/^https?/;async function GT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await WT(e);for(const n of t)try{if(KT(n))return}catch{}be(e,"unauthorized-domain")}function KT(e){const t=Mu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const c=new URL(e);return c.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===r}if(!jT.test(n))return!1;if(ZT.test(e))return r===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new is(3e4,6e4);function zl(){const e=Re().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function XT(e){return new Promise((t,n)=>{var r,o,a;function c(){zl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zl(),n(xe(e,"network-request-failed"))},timeout:JT.get()})}if((o=(r=Re().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0?void 0:o.Iframe)t(gapi.iframes.getContext());else if((a=Re().gapi)===null||a===void 0?void 0:a.load)c();else{const d=kT("iframefcb");return Re()[d]=()=>{gapi.load?c():n(xe(e,"network-request-failed"))},CT(`https://apis.google.com/js/api.js?onload=${d}`).catch(f=>n(f))}}).catch(t=>{throw Qs=null,t})}let Qs=null;function YT(e){return Qs=Qs||XT(e),Qs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new is(5e3,15e3),tE="__/auth/iframe",eE="emulator/auth/iframe",nE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rE(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bh(t,eE):`https://${e.config.authDomain}/${tE}`,r={apiKey:t.apiKey,appName:e.name,v:zr},o=iE.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Fr(r).slice(1)}`}async function sE(e){const t=await YT(e),n=Re().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:rE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nE,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const c=xe(e,"network-request-failed"),d=Re().setTimeout(()=>{a(c)},QT.get());function f(){Re().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aE=500,uE=600,hE="_blank",cE="http://localhost";class Vl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lE(e,t,n,r=aE,o=uE){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},oE),{width:r.toString(),height:o.toString(),top:a,left:c}),m=Dt().toLowerCase();n&&(d=Pp(m)?hE:n),Sp(m)&&(t=t||cE,f.scrollbars="yes");const _=Object.entries(f).reduce((E,[P,C])=>`${E}${P}=${C},`,"");if(X0(m)&&d!=="_self")return dE(t||"",d),new Vl(null);const v=window.open(t||"",d,_);H(v,e,"popup-blocked");try{v.focus()}catch{}return new Vl(v)}function dE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="__/auth/handler",pE="emulator/auth/handler";function $l(e,t,n,r,o,a){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zr,eventId:o};if(t instanceof Mp){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Eg(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries(a||{}))c[f]=m}if(t instanceof as){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(c.scopes=f.join(","))}e.tenantId&&(c.tid=e.tenantId);const d=c;for(const f of Object.keys(d))d[f]===void 0&&delete d[f];return`${mE(e)}?${Fr(d).slice(1)}`}function mE({config:e}){return e.emulator?Bh(e,pE):`https://${e.authDomain}/${fE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="webStorageSupport";class gE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=VT}async _openPopup(t,n,r,o){var a;Xe((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=$l(t,n,r,Mu(),o);return lE(t,c,qh())}async _openRedirect(t,n,r,o){return await this._originValidation(t),vT($l(t,n,r,Mu(),o)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:a}=this.eventManagers[n];return o?Promise.resolve(o):(Xe(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await sE(t),r=new qT(t);return n.register("authEvent",o=>(H(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(eu,{type:eu},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[eu];c!==void 0&&n(!!c),be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GT(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return xp()||zh()||Jo()}}const _E=gE;var ql="@firebase/auth",Hl="0.19.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var o;t(((o=r)===null||o===void 0?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wE(e){Tr(new Ii("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:o,authDomain:a}=r.options;return(c=>{H(o&&!o.includes(":"),"invalid-api-key",{appName:c.name}),H(!(a==null?void 0:a.includes(":")),"argument-error",{appName:c.name});const d={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rp(e)},f=new tT(c,d);return N0(f,n),f})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tr(new Ii("auth-internal",t=>{const n=Xo(t.getProvider("auth").getImmediate());return(r=>new vE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ql,Hl,yE(e)),pn(ql,Hl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(e=rd()){const t=Uu(e,"auth");return t.isInitialized()?t.getImmediate():M0(e,{popupRedirectResolver:_E,persistence:[LT,mT,Fp]})}wE("Browser");const pI=Yl("Browser",{web:()=>import("./web.2f8a7318.js").then(e=>new e.BrowserWeb)});var TE="firebase",EE="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(TE,EE,"app");export{qE as $,UE as A,$E as B,CE as C,eI as D,aI as E,bE as F,XE as G,RE as H,Jl as I,ZE as J,Jm as K,KE as L,Km as M,nI as N,Xm as O,zE as P,VE as Q,cI as R,GE as S,uI as T,iI as U,hI as V,fI as W,dI as X,lI as Y,pI as Z,HE as _,AE as a,SE as a0,WE as a1,FE as a2,tI as a3,JE as a4,LE as b,OE as c,$m as d,kE as e,NE as f,xE as g,DE as h,jE as i,Zl as j,BE as k,ME as l,kc as m,On as n,QE as o,he as p,oI as q,Ur as r,Fm as s,jl as t,rI as u,sI as v,YE as w,qm as x,PE as y,IE as z};
