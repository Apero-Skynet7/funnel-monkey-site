(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function We(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ao(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ge={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ut={duration:.5,overwrite:!1,delay:0},Ci,q,M,be=1e8,N=1/be,ei=Math.PI*2,Rc=ei/4,Vc=0,oo=Math.sqrt,Fc=Math.cos,Ec=Math.sin,Q=function(e){return typeof e=="string"},J=function(e){return typeof e=="function"},Ee=function(e){return typeof e=="number"},wi=function(e){return typeof e>"u"},Ge=function(e){return typeof e=="object"},te=function(e){return e!==!1},vi=function(){return typeof window<"u"},on=function(e){return J(e)||Q(e)},so=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$=Array.isArray,Yc=/random\([^)]+\)/g,Tc=/,\s*/g,oa=/(?:-?\.?\d|\.)+/gi,ro=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lo=/[+-]=-?[.\d]+/,Lc=/[^,'"\[\]\s]+/gi,Nc=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,D,Ce,ti,Bi,ue={},bn={},co,po=function(e){return(bn=vt(e,ue))&&se},ki=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jt=function(e,t){return!t&&console.warn(e)},go=function(e,t){return e&&(ue[e]=t)&&bn&&(bn[e]=t)||ue},Pt=function(){return 0},zc={suppressEvents:!0,isStart:!0,kill:!1},pn={suppressEvents:!0,kill:!1},Mc={suppressEvents:!0},Gi={},He=[],ni={},fo,re={},En={},sa=30,gn=[],Zi="",Si=function(e){var t=e[0],i,a;if(Ge(t)||J(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(a=gn.length;a--&&!gn[a].targetTest(t););i=gn[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new Yo(e[a],i)))||e.splice(a,1);return e},ot=function(e){return e._gsap||Si(ye(e))[0]._gsap},uo=function(e,t,i){return(i=e[t])&&J(i)?e[t]():wi(i)&&e.getAttribute&&e.getAttribute(t)||i},ne=function(e,t){return(e=e.split(",")).forEach(t)||e},O=function(e){return Math.round(e*1e5)/1e5||0},H=function(e){return Math.round(e*1e7)/1e7||0},It=function(e,t){var i=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+a:i==="-"?e-a:i==="*"?e*a:e/a},Xc=function(e,t){for(var i=t.length,a=0;e.indexOf(t[a])<0&&++a<i;);return a<i},yn=function(){var e=He.length,t=He.slice(0),i,a;for(ni={},He.length=0,i=0;i<e;i++)a=t[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},Wi=function(e){return!!(e._initted||e._startAt||e.add)},mo=function(e,t,i,a){He.length&&!q&&yn(),e.render(t,i,!!(q&&t<0&&Wi(e))),He.length&&!q&&yn()},ho=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Lc).length<2?t:Q(e)?e.trim():e},bo=function(e){return e},me=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Hc=function(e){return function(t,i){for(var a in i)a in t||a==="duration"&&e||a==="ease"||(t[a]=i[a])}},vt=function(e,t){for(var i in t)e[i]=t[i];return e},ra=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ge(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},xn=function(e,t){var i={},a;for(a in e)a in t||(i[a]=e[a]);return i},Mt=function(e){var t=e.parent||D,i=e.keyframes?Hc($(e.keyframes)):me;if(te(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Dc=function(e,t){for(var i=e.length,a=i===t.length;a&&i--&&e[i]===t[i];);return i<0},yo=function(e,t,i,a,o){var s=e[a],r;if(o)for(r=t[o];s&&s[o]>r;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[a]=t,t._prev=s,t.parent=t._dp=e,t},kn=function(e,t,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var o=t._prev,s=t._next;o?o._next=s:e[i]===t&&(e[i]=s),s?s._prev=o:e[a]===t&&(e[a]=o),t._next=t._prev=t.parent=null},Je=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},st=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Uc=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ii=function(e,t,i,a){return e._startAt&&(q?e._startAt.revert(pn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},Jc=function n(e){return!e||e._ts&&n(e.parent)},la=function(e){return e._repeat?Bt(e._tTime,e=e.duration()+e._rDelay)*e:0},Bt=function(e,t){var i=Math.floor(e=H(e/t));return e&&i===e?i-1:i},In=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gn=function(e){return e._end=H(e._start+(e._tDur/Math.abs(e._ts||e._rts||N)||0))},Zn=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=H(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gn(e),i._dirty||st(i,e)),e},xo=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=In(e.rawTime(),t),(!t._dur||$t(0,t.totalDuration(),i)-t._tTime>N)&&t.render(i,!0)),st(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-N}},we=function(e,t,i,a){return t.parent&&Je(t),t._start=H((Ee(i)?i:i||e!==D?he(e,i,t):e._time)+t._delay),t._end=H(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yo(e,t,"_first","_last",e._sort?"_start":0),ai(t)||(e._recent=t),a||xo(e,t),e._ts<0&&Zn(e,e._tTime),e},Io=function(e,t){return(ue.ScrollTrigger||ki("scrollTrigger",t))&&ue.ScrollTrigger.create(t,e)},Ao=function(e,t,i,a,o){if(Vi(e,t,o),!e._initted)return 1;if(!i&&e._pt&&!q&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fo!==le.frame)return He.push(e),e._lazy=[o,a],1},Pc=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ai=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Oc=function(e,t,i,a){var o=e.ratio,s=t<0||!t&&(!e._start&&Pc(e)&&!(!e._initted&&ai(e))||(e._ts<0||e._dp._ts<0)&&!ai(e))?0:1,r=e._rDelay,l=0,d,c,p;if(r&&e._repeat&&(l=$t(0,e._tDur,t),c=Bt(l,r),e._yoyo&&c&1&&(s=1-s),c!==Bt(e._tTime,r)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||q||a||e._zTime===N||!t&&e._zTime){if(!e._initted&&Ao(e,t,a,i,l))return;for(p=e._zTime,e._zTime=t||(i?N:0),i||(i=t&&!p),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,d=e._pt;d;)d.r(s,d.d),d=d._next;t<0&&ii(e,t,i,!0),e._onUpdate&&!i&&de(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&de(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Je(e,1),!i&&!q&&(de(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Kc=function(e,t,i){var a;if(i>t)for(a=e._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},kt=function(e,t,i,a){var o=e._repeat,s=H(t)||0,r=e._tTime/e._tDur;return r&&!a&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:H(s*(o+1)+e._rDelay*o):s,r>0&&!a&&Zn(e,e._tTime=e._tDur*r),e.parent&&Gn(e),i||st(e.parent,e),e},da=function(e){return e instanceof ee?st(e):kt(e,e._dur)},jc={_start:0,endTime:Pt,totalDuration:Pt},he=function n(e,t,i){var a=e.labels,o=e._recent||jc,s=e.duration()>=be?o.endTime(!1):e._dur,r,l,d;return Q(t)&&(isNaN(t)||t in a)?(l=t.charAt(0),d=t.substr(-1)==="%",r=t.indexOf("="),l==="<"||l===">"?(r>=0&&(t=t.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(r<0?o:i).totalDuration()/100:1)):r<0?(t in a||(a[t]=s),a[t]):(l=parseFloat(t.charAt(r-1)+t.substr(r+1)),d&&i&&(l=l/100*($(i)?i[0]:i).totalDuration()),r>1?n(e,t.substr(0,r-1),i)+l:s+l)):t==null?s:+t},Xt=function(e,t,i){var a=Ee(t[1]),o=(a?2:1)+(e<2?0:1),s=t[o],r,l;if(a&&(s.duration=t[1]),s.parent=i,e){for(r=s,l=i;l&&!("immediateRender"in r);)r=l.vars.defaults||{},l=te(l.vars.inherit)&&l.parent;s.immediateRender=te(r.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new K(t[0],s,t[o+1])},Qe=function(e,t){return e||e===0?t(e):t},$t=function(e,t,i){return i<e?e:i>t?t:i},_=function(e,t){return!Q(e)||!(t=Nc.exec(e))?"":t[1]},Qc=function(e,t,i){return Qe(i,function(a){return $t(e,t,a)})},oi=[].slice,Co=function(e,t){return e&&Ge(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ge(e[0]))&&!e.nodeType&&e!==Ce},qc=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(a){var o;return Q(a)&&!t||Co(a,1)?(o=i).push.apply(o,ye(a)):i.push(a)})||i},ye=function(e,t,i){return M&&!t&&M.selector?M.selector(e):Q(e)&&!i&&(ti||!Gt())?oi.call((t||Bi).querySelectorAll(e),0):$(e)?qc(e,i):Co(e)?oi.call(e,0):e?[e]:[]},si=function(e){return e=ye(e)[0]||Jt("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ye(t,i.querySelectorAll?i:i===e?Jt("Invalid scope")||Bi.createElement("div"):e)}},wo=function(e){return e.sort(function(){return .5-Math.random()})},vo=function(e){if(J(e))return e;var t=Ge(e)?e:{each:e},i=rt(t.ease),a=t.from||0,o=parseFloat(t.base)||0,s={},r=a>0&&a<1,l=isNaN(a)||r,d=t.axis,c=a,p=a;return Q(a)?c=p={center:.5,edges:.5,end:1}[a]||0:!r&&l&&(c=a[0],p=a[1]),function(f,u,b){var g=(b||t).length,x=s[g],B,k,w,h,m,A,y,C,I;if(!x){if(I=t.grid==="auto"?0:(t.grid||[1,be])[1],!I){for(y=-be;y<(y=b[I++].getBoundingClientRect().left)&&I<g;);I<g&&I--}for(x=s[g]=[],B=l?Math.min(I,g)*c-.5:a%I,k=I===be?0:l?g*p/I-.5:a/I|0,y=0,C=be,A=0;A<g;A++)w=A%I-B,h=k-(A/I|0),x[A]=m=d?Math.abs(d==="y"?h:w):oo(w*w+h*h),m>y&&(y=m),m<C&&(C=m);a==="random"&&wo(x),x.max=y-C,x.min=C,x.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(I>g?g-1:d?d==="y"?g/I:I:Math.max(I,g/I))||0)*(a==="edges"?-1:1),x.b=g<0?o-g:o,x.u=_(t.amount||t.each)||0,i=i&&g<0?cp(i):i}return g=(x[f]-x.min)/x.max||0,H(x.b+(i?i(g):g)*x.v)+x.u}},ri=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var a=H(Math.round(parseFloat(i)/e)*e*t);return(a-a%1)/t+(Ee(i)?0:_(i))}},Bo=function(e,t){var i=$(e),a,o;return!i&&Ge(e)&&(a=i=e.radius||be,e.values?(e=ye(e.values),(o=!Ee(e[0]))&&(a*=a)):e=ri(e.increment)),Qe(t,i?J(e)?function(s){return o=e(s),Math.abs(o-s)<=a?o:s}:function(s){for(var r=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),d=be,c=0,p=e.length,f,u;p--;)o?(f=e[p].x-r,u=e[p].y-l,f=f*f+u*u):f=Math.abs(e[p]-r),f<d&&(d=f,c=p);return c=!a||d<=a?e[c]:s,o||c===s||Ee(s)?c:c+_(s)}:ri(e))},ko=function(e,t,i,a){return Qe($(e)?!t:i===!0?!!(i=0):!a,function(){return $(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*a)/a})},_c=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(a){return t.reduce(function(o,s){return s(o)},a)}},$c=function(e,t){return function(i){return e(parseFloat(i))+(t||_(i))}},ep=function(e,t,i){return Zo(e,t,0,1,i)},Go=function(e,t,i){return Qe(i,function(a){return e[~~t(a)]})},tp=function n(e,t,i){var a=t-e;return $(e)?Go(e,n(0,e.length),t):Qe(i,function(o){return(a+(o-e)%a)%a+e})},np=function n(e,t,i){var a=t-e,o=a*2;return $(e)?Go(e,n(0,e.length-1),t):Qe(i,function(s){return s=(o+(s-e)%o)%o||0,e+(s>a?o-s:s)})},Ot=function(e){return e.replace(Yc,function(t){var i=t.indexOf("[")+1,a=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Tc);return ko(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},Zo=function(e,t,i,a,o){var s=t-e,r=a-i;return Qe(o,function(l){return i+((l-e)/s*r||0)})},ip=function n(e,t,i,a){var o=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!o){var s=Q(e),r={},l,d,c,p,f;if(i===!0&&(a=1)&&(i=null),s)e={p:e},t={p:t};else if($(e)&&!$(t)){for(c=[],p=e.length,f=p-2,d=1;d<p;d++)c.push(n(e[d-1],e[d]));p--,o=function(b){b*=p;var g=Math.min(f,~~b);return c[g](b-g)},i=t}else a||(e=vt($(e)?[]:{},e));if(!c){for(l in t)Ri.call(r,e,l,"get",t[l]);o=function(b){return Yi(b,r)||(s?e.p:e)}}}return Qe(i,o)},ca=function(e,t,i){var a=e.labels,o=be,s,r,l;for(s in a)r=a[s]-t,r<0==!!i&&r&&o>(r=Math.abs(r))&&(l=s,o=r);return l},de=function(e,t,i){var a=e.vars,o=a[t],s=M,r=e._ctx,l,d,c;if(o)return l=a[t+"Params"],d=a.callbackScope||e,i&&He.length&&yn(),r&&(M=r),c=l?o.apply(d,l):o.call(d),M=s,c},Tt=function(e){return Je(e),e.scrollTrigger&&e.scrollTrigger.kill(!!q),e.progress()<1&&de(e,"onInterrupt"),e},yt,So=[],Wo=function(e){if(e)if(e=!e.name&&e.default||e,vi()||e.headless){var t=e.name,i=J(e),a=t&&!i&&e.init?function(){this._props=[]}:e,o={init:Pt,render:Yi,add:Ri,kill:Ip,modifier:xp,rawVars:0},s={targetTest:0,get:0,getSetter:Ei,aliases:{},register:0};if(Gt(),e!==a){if(re[t])return;me(a,me(xn(e,o),s)),vt(a.prototype,vt(o,xn(e,s))),re[a.prop=t]=a,e.targetTest&&(gn.push(a),Gi[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}go(t,a),e.register&&e.register(se,a,ie)}else So.push(e)},L=255,Lt={aqua:[0,L,L],lime:[0,L,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,L],navy:[0,0,128],white:[L,L,L],olive:[128,128,0],yellow:[L,L,0],orange:[L,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[L,0,0],pink:[L,192,203],cyan:[0,L,L],transparent:[L,L,L,0]},Yn=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*L+.5|0},Ro=function(e,t,i){var a=e?Ee(e)?[e>>16,e>>8&L,e&L]:0:Lt.black,o,s,r,l,d,c,p,f,u,b;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lt[e])a=Lt[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),r=e.charAt(3),e="#"+o+o+s+s+r+r+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&L,a&L,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&L,e&L]}else if(e.substr(0,3)==="hsl"){if(a=b=e.match(oa),!t)l=+a[0]%360/360,d=+a[1]/100,c=+a[2]/100,s=c<=.5?c*(d+1):c+d-c*d,o=c*2-s,a.length>3&&(a[3]*=1),a[0]=Yn(l+1/3,o,s),a[1]=Yn(l,o,s),a[2]=Yn(l-1/3,o,s);else if(~e.indexOf("="))return a=e.match(ro),i&&a.length<4&&(a[3]=1),a}else a=e.match(oa)||Lt.transparent;a=a.map(Number)}return t&&!b&&(o=a[0]/L,s=a[1]/L,r=a[2]/L,p=Math.max(o,s,r),f=Math.min(o,s,r),c=(p+f)/2,p===f?l=d=0:(u=p-f,d=c>.5?u/(2-p-f):u/(p+f),l=p===o?(s-r)/u+(s<r?6:0):p===s?(r-o)/u+2:(o-s)/u+4,l*=60),a[0]=~~(l+.5),a[1]=~~(d*100+.5),a[2]=~~(c*100+.5)),i&&a.length<4&&(a[3]=1),a},Vo=function(e){var t=[],i=[],a=-1;return e.split(De).forEach(function(o){var s=o.match(bt)||[];t.push.apply(t,s),i.push(a+=s.length+1)}),t.c=i,t},pa=function(e,t,i){var a="",o=(e+a).match(De),s=t?"hsla(":"rgba(",r=0,l,d,c,p;if(!o)return e;if(o=o.map(function(f){return(f=Ro(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=Vo(e),l=i.c,l.join(a)!==c.c.join(a)))for(d=e.replace(De,"1").split(bt),p=d.length-1;r<p;r++)a+=d[r]+(~l.indexOf(r)?o.shift()||s+"0,0,0,0)":(c.length?c:o.length?o:i).shift());if(!d)for(d=e.split(De),p=d.length-1;r<p;r++)a+=d[r]+o[r];return a+d[p]},De=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lt)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),ap=/hsl[a]?\(/,Fo=function(e){var t=e.join(" "),i;if(De.lastIndex=0,De.test(t))return i=ap.test(t),e[1]=pa(e[1],i),e[0]=pa(e[0],i,Vo(e[1])),!0},Kt,le=function(){var n=Date.now,e=500,t=33,i=n(),a=i,o=1e3/240,s=o,r=[],l,d,c,p,f,u,b=function g(x){var B=n()-a,k=x===!0,w,h,m,A;if((B>e||B<0)&&(i+=B-t),a+=B,m=a-i,w=m-s,(w>0||k)&&(A=++p.frame,f=m-p.time*1e3,p.time=m=m/1e3,s+=w+(w>=o?4:o-w),h=1),k||(l=d(g)),h)for(u=0;u<r.length;u++)r[u](m,f,A,x)};return p={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(x){return f/(1e3/(x||60))},wake:function(){co&&(!ti&&vi()&&(Ce=ti=window,Bi=Ce.document||{},ue.gsap=se,(Ce.gsapVersions||(Ce.gsapVersions=[])).push(se.version),po(bn||Ce.GreenSockGlobals||!Ce.gsap&&Ce||{}),So.forEach(Wo)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&p.sleep(),d=c||function(x){return setTimeout(x,s-p.time*1e3+1|0)},Kt=1,b(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Kt=0,d=Pt},lagSmoothing:function(x,B){e=x||1/0,t=Math.min(B||33,e)},fps:function(x){o=1e3/(x||240),s=p.time*1e3+o},add:function(x,B,k){var w=B?function(h,m,A,y){x(h,m,A,y),p.remove(w)}:x;return p.remove(x),r[k?"unshift":"push"](w),Gt(),w},remove:function(x,B){~(B=r.indexOf(x))&&r.splice(B,1)&&u>=B&&u--},_listeners:r},p}(),Gt=function(){return!Kt&&le.wake()},V={},op=/^[\d.\-M][\d.\-,\s]/,sp=/["']/g,rp=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),a=i[0],o=1,s=i.length,r,l,d;o<s;o++)l=i[o],r=o!==s-1?l.lastIndexOf(","):l.length,d=l.substr(0,r),t[a]=isNaN(d)?d.replace(sp,"").trim():+d,a=l.substr(r+1).trim();return t},lp=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<i?e.indexOf(")",i+1):i)},dp=function(e){var t=(e+"").split("("),i=V[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[rp(t[1])]:lp(e).split(",").map(ho)):V._CE&&op.test(e)?V._CE("",e):i},cp=function(e){return function(t){return 1-e(1-t)}},rt=function(e,t){return e&&(J(e)?e:V[e]||dp(e))||t},gt=function(e,t,i,a){i===void 0&&(i=function(l){return 1-t(1-l)}),a===void 0&&(a=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:a},s;return ne(e,function(r){V[r]=ue[r]=o,V[s=r.toLowerCase()]=i;for(var l in o)V[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=V[r+"."+l]=o[l]}),o},Eo=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Tn=function n(e,t,i){var a=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),s=o/ei*(Math.asin(1/a)||0),r=function(c){return c===1?1:a*Math.pow(2,-10*c)*Ec((c-s)*o)+1},l=e==="out"?r:e==="in"?function(d){return 1-r(1-d)}:Eo(r);return o=ei/o,l.config=function(d,c){return n(e,d,c)},l},Ln=function n(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},a=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Eo(i);return a.config=function(o){return n(e,o)},a};ne("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;gt(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});V.Linear.easeNone=V.none=V.Linear.easeIn;gt("Elastic",Tn("in"),Tn("out"),Tn());(function(n,e){var t=1/e,i=2*t,a=2.5*t,o=function(r){return r<t?n*r*r:r<i?n*Math.pow(r-1.5/e,2)+.75:r<a?n*(r-=2.25/e)*r+.9375:n*Math.pow(r-2.625/e,2)+.984375};gt("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);gt("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});gt("Circ",function(n){return-(oo(1-n*n)-1)});gt("Sine",function(n){return n===1?1:-Fc(n*Rc)+1});gt("Back",Ln("in"),Ln("out"),Ln());V.SteppedEase=V.steps=ue.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,a=e+(t?0:1),o=t?1:0,s=1-N;return function(r){return((a*$t(0,s,r)|0)+o)*i}}};Ut.ease=V["quad.out"];ne("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Zi+=n+","+n+"Params,"});var Yo=function(e,t){this.id=Vc++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uo,this.set=t?t.getSetter:Ei},jt=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,kt(this,+t.duration,1,1),this.data=t.data,M&&(this._ctx=M,M.data.push(this)),Kt||le.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,kt(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,a){if(Gt(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Zn(this,i),!o._dp||o.parent||xo(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&we(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===N||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),mo(this,i,a)),this},e.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+la(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},e.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+la(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,a){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,a):this._repeat?Bt(this._tTime,o)+1:1},e.timeScale=function(i,a){if(!arguments.length)return this._rts===-N?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?In(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-N?0:this._rts,this.totalTime($t(-Math.abs(this._delay),this.totalDuration(),o),a!==!1),Gn(this),Uc(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==N&&(this._tTime-=N)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=H(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&we(a,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(te(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?In(a.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Mc);var a=q;return q=i,Wi(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),q=a,this},e.globalTime=function(i){for(var a=this,o=arguments.length?i:a.rawTime();a;)o=a._start+o/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,da(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,da(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,a){return this.totalTime(he(this,i),te(a))},e.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,te(a)),this._dur||(this._zTime=-N),this},e.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},e.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-N:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-N,this},e.isActive=function(){var i=this.parent||this._dp,a=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=a&&o<this.endTime(!0)-N)},e.eventCallback=function(i,a,o){var s=this.vars;return arguments.length>1?(a?(s[i]=a,o&&(s[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=a)):delete s[i],this):s[i]},e.then=function(i){var a=this,o=a._prom;return new Promise(function(s){var r=J(i)?i:bo,l=function(){var c=a.then;a.then=null,o&&o(),J(r)&&(r=r(a))&&(r.then||r===a)&&(a.then=c),s(r),a.then=c};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?l():a._prom=l})},e.kill=function(){Tt(this)},n}();me(jt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-N,_prom:0,_ps:!1,_rts:1});var ee=function(n){ao(e,n);function e(i,a){var o;return i===void 0&&(i={}),o=n.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=te(i.sortChildren),D&&we(i.parent||D,We(o),a),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&Io(We(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(a,o,s){return Xt(0,arguments,this),this},t.from=function(a,o,s){return Xt(1,arguments,this),this},t.fromTo=function(a,o,s,r){return Xt(2,arguments,this),this},t.set=function(a,o,s){return o.duration=0,o.parent=this,Mt(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new K(a,o,he(this,s),1),this},t.call=function(a,o,s){return we(this,K.delayedCall(0,a,o),s)},t.staggerTo=function(a,o,s,r,l,d,c){return s.duration=o,s.stagger=s.stagger||r,s.onComplete=d,s.onCompleteParams=c,s.parent=this,new K(a,s,he(this,l)),this},t.staggerFrom=function(a,o,s,r,l,d,c){return s.runBackwards=1,Mt(s).immediateRender=te(s.immediateRender),this.staggerTo(a,o,s,r,l,d,c)},t.staggerFromTo=function(a,o,s,r,l,d,c,p){return r.startAt=s,Mt(r).immediateRender=te(r.immediateRender),this.staggerTo(a,o,r,l,d,c,p)},t.render=function(a,o,s){var r=this._time,l=this._dirty?this.totalDuration():this._tDur,d=this._dur,c=a<=0?0:H(a),p=this._zTime<0!=a<0&&(this._initted||!d),f,u,b,g,x,B,k,w,h,m,A,y;if(this!==D&&c>l&&a>=0&&(c=l),c!==this._tTime||s||p){if(r!==this._time&&d&&(c+=this._time-r,a+=this._time-r),f=c,h=this._start,w=this._ts,B=!w,p&&(d||(r=this._zTime),(a||!o)&&(this._zTime=a)),this._repeat){if(A=this._yoyo,x=d+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(x*100+a,o,s);if(f=H(c%x),c===l?(g=this._repeat,f=d):(m=H(c/x),g=~~m,g&&g===m&&(f=d,g--),f>d&&(f=d)),m=Bt(this._tTime,x),!r&&this._tTime&&m!==g&&this._tTime-m*x-this._dur<=0&&(m=g),A&&g&1&&(f=d-f,y=1),g!==m&&!this._lock){var C=A&&m&1,I=C===(A&&g&1);if(g<m&&(C=!C),r=C?0:c%d?d:c,this._lock=1,this.render(r||(y?0:H(g*x)),o,!d)._lock=0,this._tTime=c,!o&&this.parent&&de(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,m=g),r&&r!==this._time||B!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,l=this._tDur,I&&(this._lock=2,r=C?d:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!B)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(k=Kc(this,H(r),H(f)),k&&(c-=f-(f=k._start))),this._tTime=c,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,r=0),!r&&c&&d&&!o&&!m&&(de(this,"onStart"),this._tTime!==c))return this;if(f>=r&&a>=0)for(u=this._first;u;){if(b=u._next,(u._act||f>=u._start)&&u._ts&&k!==u){if(u.parent!==this)return this.render(a,o,s);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,o,s),f!==this._time||!this._ts&&!B){k=0,b&&(c+=this._zTime=-N);break}}u=b}else{u=this._last;for(var G=a<0?a:f;u;){if(b=u._prev,(u._act||G<=u._end)&&u._ts&&k!==u){if(u.parent!==this)return this.render(a,o,s);if(u.render(u._ts>0?(G-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(G-u._start)*u._ts,o,s||q&&Wi(u)),f!==this._time||!this._ts&&!B){k=0,b&&(c+=this._zTime=G?-N:N);break}}u=b}}if(k&&!o&&(this.pause(),k.render(f>=r?0:-N)._zTime=f>=r?1:-1,this._ts))return this._start=h,Gn(this),this.render(a,o,s);this._onUpdate&&!o&&de(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&r)&&(h===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((a||!d)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Je(this,1),!o&&!(a<0&&!r)&&(c||r||!l)&&(de(this,c===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,o){var s=this;if(Ee(o)||(o=he(this,o,a)),!(a instanceof jt)){if($(a))return a.forEach(function(r){return s.add(r,o)}),this;if(Q(a))return this.addLabel(a,o);if(J(a))a=K.delayedCall(0,a);else return this}return this!==a?we(this,a,o):this},t.getChildren=function(a,o,s,r){a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),r===void 0&&(r=-be);for(var l=[],d=this._first;d;)d._start>=r&&(d instanceof K?o&&l.push(d):(s&&l.push(d),a&&l.push.apply(l,d.getChildren(!0,o,s)))),d=d._next;return l},t.getById=function(a){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===a)return o[s]},t.remove=function(a){return Q(a)?this.removeLabel(a):J(a)?this.killTweensOf(a):(a.parent===this&&kn(this,a),a===this._recent&&(this._recent=this._last),st(this))},t.totalTime=function(a,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=H(le.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),n.prototype.totalTime.call(this,a,o),this._forcing=0,this):this._tTime},t.addLabel=function(a,o){return this.labels[a]=he(this,o),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,o,s){var r=K.delayedCall(0,o||Pt,s);return r.data="isPause",this._hasPause=1,we(this,r,he(this,a))},t.removePause=function(a){var o=this._first;for(a=he(this,a);o;)o._start===a&&o.data==="isPause"&&Je(o),o=o._next},t.killTweensOf=function(a,o,s){for(var r=this.getTweensOf(a,s),l=r.length;l--;)ze!==r[l]&&r[l].kill(a,o);return this},t.getTweensOf=function(a,o){for(var s=[],r=ye(a),l=this._first,d=Ee(o),c;l;)l instanceof K?Xc(l._targets,r)&&(d?(!ze||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(c=l.getTweensOf(r,o)).length&&s.push.apply(s,c),l=l._next;return s},t.tweenTo=function(a,o){o=o||{};var s=this,r=he(s,a),l=o,d=l.startAt,c=l.onStart,p=l.onStartParams,f=l.immediateRender,u,b=K.to(s,me({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:o.duration||Math.abs((r-(d&&"time"in d?d.time:s._time))/s.timeScale())||N,onStart:function(){if(s.pause(),!u){var x=o.duration||Math.abs((r-(d&&"time"in d?d.time:s._time))/s.timeScale());b._dur!==x&&kt(b,x,0,1).render(b._time,!0,!0),u=1}c&&c.apply(b,p||[])}},o));return f?b.render(0):b},t.tweenFromTo=function(a,o,s){return this.tweenTo(o,me({startAt:{time:he(this,a)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),ca(this,he(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),ca(this,he(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+N)},t.shiftChildren=function(a,o,s){s===void 0&&(s=0);var r=this._first,l=this.labels,d;for(a=H(a);r;)r._start>=s&&(r._start+=a,r._end+=a),r=r._next;if(o)for(d in l)l[d]>=s&&(l[d]+=a);return st(this)},t.invalidate=function(a){var o=this._first;for(this._lock=0;o;)o.invalidate(a),o=o._next;return n.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),st(this)},t.totalDuration=function(a){var o=0,s=this,r=s._last,l=be,d,c,p;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(p=s.parent;r;)d=r._prev,r._dirty&&r.totalDuration(),c=r._start,c>l&&s._sort&&r._ts&&!s._lock?(s._lock=1,we(s,r,c-r._delay,1)._lock=0):l=c,c<0&&r._ts&&(o-=c,(!p&&!s._dp||p&&p.smoothChildTiming)&&(s._start+=H(c/s._ts),s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),l=0),r._end>o&&r._ts&&(o=r._end),r=d;kt(s,s===D&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(a){if(D._ts&&(mo(D,In(a,D)),fo=le.frame),le.frame>=sa){sa+=ge.autoSleep||120;var o=D._first;if((!o||!o._ts)&&ge.autoSleep&&le._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||le.sleep()}}},e}(jt);me(ee.prototype,{_lock:0,_hasPause:0,_forcing:0});var pp=function(e,t,i,a,o,s,r){var l=new ie(this._pt,e,t,0,1,Xo,null,o),d=0,c=0,p,f,u,b,g,x,B,k;for(l.b=i,l.e=a,i+="",a+="",(B=~a.indexOf("random("))&&(a=Ot(a)),s&&(k=[i,a],s(k,e,t),i=k[0],a=k[1]),f=i.match(Fn)||[];p=Fn.exec(a);)b=p[0],g=a.substring(d,p.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),b!==f[c++]&&(x=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:x,c:b.charAt(1)==="="?It(x,b)-x:parseFloat(b)-x,m:u&&u<4?Math.round:0},d=Fn.lastIndex);return l.c=d<a.length?a.substring(d,a.length):"",l.fp=r,(lo.test(a)||B)&&(l.e=0),this._pt=l,l},Ri=function(e,t,i,a,o,s,r,l,d,c){J(a)&&(a=a(o||0,e,s));var p=e[t],f=i!=="get"?i:J(p)?d?e[t.indexOf("set")||!J(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():p,u=J(p)?d?hp:zo:Fi,b;if(Q(a)&&(~a.indexOf("random(")&&(a=Ot(a)),a.charAt(1)==="="&&(b=It(f,a)+(_(f)||0),(b||b===0)&&(a=b))),!c||f!==a||li)return!isNaN(f*a)&&a!==""?(b=new ie(this._pt,e,t,+f||0,a-(f||0),typeof p=="boolean"?yp:Mo,0,u),d&&(b.fp=d),r&&b.modifier(r,this,e),this._pt=b):(!p&&!(t in e)&&ki(t,a),pp.call(this,e,t,f,a,u,l||ge.stringFilter,d))},gp=function(e,t,i,a,o){if(J(e)&&(e=Ht(e,o,t,i,a)),!Ge(e)||e.style&&e.nodeType||$(e)||so(e))return Q(e)?Ht(e,o,t,i,a):e;var s={},r;for(r in e)s[r]=Ht(e[r],o,t,i,a);return s},To=function(e,t,i,a,o,s){var r,l,d,c;if(re[e]&&(r=new re[e]).init(o,r.rawVars?t[e]:gp(t[e],a,o,s,i),i,a,s)!==!1&&(i._pt=l=new ie(i._pt,o,e,0,1,r.render,r,0,r.priority),i!==yt))for(d=i._ptLookup[i._targets.indexOf(o)],c=r._props.length;c--;)d[r._props[c]]=l;return r},ze,li,Vi=function n(e,t,i){var a=e.vars,o=a.ease,s=a.startAt,r=a.immediateRender,l=a.lazy,d=a.onUpdate,c=a.runBackwards,p=a.yoyoEase,f=a.keyframes,u=a.autoRevert,b=e._dur,g=e._startAt,x=e._targets,B=e.parent,k=B&&B.data==="nested"?B.vars.targets:x,w=e._overwrite==="auto"&&!Ci,h=e.timeline,m=a.easeReverse||p,A,y,C,I,G,Z,v,W,S,R,F,Y,P;if(h&&(!f||!o)&&(o="none"),e._ease=rt(o,Ut.ease),e._rEase=m&&(rt(m)||e._ease),e._from=!h&&!!a.runBackwards,e._from&&(e.ratio=1),!h||f&&!a.stagger){if(W=x[0]?ot(x[0]).harness:0,Y=W&&a[W.prop],A=xn(a,Gi),g&&(g._zTime<0&&g.progress(1),t<0&&c&&r&&!u?g.render(-1,!0):g.revert(c&&b?pn:zc),g._lazy=0),s){if(Je(e._startAt=K.set(x,me({data:"isStart",overwrite:!1,parent:B,immediateRender:!0,lazy:!g&&te(l),startAt:null,delay:0,onUpdate:d&&function(){return de(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(q||!r&&!u)&&e._startAt.revert(pn),r&&b&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&b&&!g){if(t&&(r=!1),C=me({overwrite:!1,data:"isFromStart",lazy:r&&!g&&te(l),immediateRender:r,stagger:0,parent:B},A),Y&&(C[W.prop]=Y),Je(e._startAt=K.set(x,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(q?e._startAt.revert(pn):e._startAt.render(-1,!0)),e._zTime=t,!r)n(e._startAt,N,N);else if(!t)return}for(e._pt=e._ptCache=0,l=b&&te(l)||l&&!b,y=0;y<x.length;y++){if(G=x[y],v=G._gsap||Si(x)[y]._gsap,e._ptLookup[y]=R={},ni[v.id]&&He.length&&yn(),F=k===x?y:k.indexOf(G),W&&(S=new W).init(G,Y||A,e,F,k)!==!1&&(e._pt=I=new ie(e._pt,G,S.name,0,1,S.render,S,0,S.priority),S._props.forEach(function(ft){R[ft]=I}),S.priority&&(Z=1)),!W||Y)for(C in A)re[C]&&(S=To(C,A,e,F,G,k))?S.priority&&(Z=1):R[C]=I=Ri.call(e,G,C,"get",A[C],F,k,0,a.stringFilter);e._op&&e._op[y]&&e.kill(G,e._op[y]),w&&e._pt&&(ze=e,D.killTweensOf(G,R,e.globalTime(t)),P=!e.parent,ze=0),e._pt&&l&&(ni[v.id]=1)}Z&&Ho(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!P,f&&t<=0&&h.render(be,!0,!0)},fp=function(e,t,i,a,o,s,r,l){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,p,f,u;if(!d)for(d=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(c=f[u][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return li=1,e.vars[t]="+=0",Vi(e,r),li=0,l?Jt(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(c)}for(u=d.length;u--;)p=d[u],c=p._pt||p,c.s=(a||a===0)&&!o?a:c.s+(a||0)+s*c.c,c.c=i-c.s,p.e&&(p.e=O(i)+_(p.e)),p.b&&(p.b=c.s+_(p.b))},up=function(e,t){var i=e[0]?ot(e[0]).harness:0,a=i&&i.aliases,o,s,r,l;if(!a)return t;o=vt({},t);for(s in a)if(s in o)for(l=a[s].split(","),r=l.length;r--;)o[l[r]]=o[s];return o},mp=function(e,t,i,a){var o=t.ease||a||"power1.inOut",s,r;if($(t))r=i[e]||(i[e]=[]),t.forEach(function(l,d){return r.push({t:d/(t.length-1)*100,v:l,e:o})});else for(s in t)r=i[s]||(i[s]=[]),s==="ease"||r.push({t:parseFloat(e),v:t[s],e:o})},Ht=function(e,t,i,a,o){return J(e)?e.call(t,i,a,o):Q(e)&&~e.indexOf("random(")?Ot(e):e},Lo=Zi+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",No={};ne(Lo+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return No[n]=1});var K=function(n){ao(e,n);function e(i,a,o,s){var r;typeof a=="number"&&(o.duration=a,a=o,o=null),r=n.call(this,s?a:Mt(a))||this;var l=r.vars,d=l.duration,c=l.delay,p=l.immediateRender,f=l.stagger,u=l.overwrite,b=l.keyframes,g=l.defaults,x=l.scrollTrigger,B=a.parent||D,k=($(i)||so(i)?Ee(i[0]):"length"in a)?[i]:ye(i),w,h,m,A,y,C,I,G;if(r._targets=k.length?Si(k):Jt("GSAP target "+i+" not found. https://gsap.com",!ge.nullTargetWarn)||[],r._ptLookup=[],r._overwrite=u,b||f||on(d)||on(c)){a=r.vars;var Z=a.easeReverse||a.yoyoEase;if(w=r.timeline=new ee({data:"nested",defaults:g||{},targets:B&&B.data==="nested"?B.vars.targets:k}),w.kill(),w.parent=w._dp=We(r),w._start=0,f||on(d)||on(c)){if(A=k.length,I=f&&vo(f),Ge(f))for(y in f)~Lo.indexOf(y)&&(G||(G={}),G[y]=f[y]);for(h=0;h<A;h++)m=xn(a,No),m.stagger=0,Z&&(m.easeReverse=Z),G&&vt(m,G),C=k[h],m.duration=+Ht(d,We(r),h,C,k),m.delay=(+Ht(c,We(r),h,C,k)||0)-r._delay,!f&&A===1&&m.delay&&(r._delay=c=m.delay,r._start+=c,m.delay=0),w.to(C,m,I?I(h,C,k):0),w._ease=V.none;w.duration()?d=c=0:r.timeline=0}else if(b){Mt(me(w.vars.defaults,{ease:"none"})),w._ease=rt(b.ease||a.ease||"none");var v=0,W,S,R;if($(b))b.forEach(function(F){return w.to(k,F,">")}),w.duration();else{m={};for(y in b)y==="ease"||y==="easeEach"||mp(y,b[y],m,b.easeEach);for(y in m)for(W=m[y].sort(function(F,Y){return F.t-Y.t}),v=0,h=0;h<W.length;h++)S=W[h],R={ease:S.e,duration:(S.t-(h?W[h-1].t:0))/100*d},R[y]=S.v,w.to(k,R,v),v+=R.duration;w.duration()<d&&w.to({},{duration:d-w.duration()})}}d||r.duration(d=w.duration())}else r.timeline=0;return u===!0&&!Ci&&(ze=We(r),D.killTweensOf(k),ze=0),we(B,We(r),o),a.reversed&&r.reverse(),a.paused&&r.paused(!0),(p||!d&&!b&&r._start===H(B._time)&&te(p)&&Jc(We(r))&&B.data!=="nested")&&(r._tTime=-N,r.render(Math.max(0,-c)||0)),x&&Io(We(r),x),r}var t=e.prototype;return t.render=function(a,o,s){var r=this._time,l=this._tDur,d=this._dur,c=a<0,p=a>l-N&&!c?l:a<N?0:a,f,u,b,g,x,B,k,w;if(!d)Oc(this,a,o,s);else if(p!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=p,w=this.timeline,this._repeat){if(g=d+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+a,o,s);if(f=H(p%g),p===l?(b=this._repeat,f=d):(x=H(p/g),b=~~x,b&&b===x?(f=d,b--):f>d&&(f=d)),B=this._yoyo&&b&1,B&&(f=d-f),x=Bt(this._tTime,g),f===r&&!s&&this._initted&&b===x)return this._tTime=p,this;b!==x&&this.vars.repeatRefresh&&!B&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(H(g*b),!0).invalidate()._lock=0)}if(!this._initted){if(Ao(this,c?a:f,s,o,p))return this._tTime=0,this;if(r!==this._time&&!(s&&this.vars.repeatRefresh&&b!==x))return this;if(d!==this._dur)return this.render(a,o,s)}if(this._rEase){var h=f<r;if(h!==this._inv){var m=h?r:d-r;this._inv=h,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=m?(h?-1:1)/m:0,this._invScale=h?-this.ratio:1-this.ratio,this._invEase=h?this._rEase:this._ease}this.ratio=k=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=k=this._ease(f/d);if(this._from&&(this.ratio=k=1-k),this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&p&&!o&&!x&&(de(this,"onStart"),this._tTime!==p))return this;for(u=this._pt;u;)u.r(k,u.d),u=u._next;w&&w.render(a<0?a:w._dur*w._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!o&&(c&&ii(this,a,o,s),de(this,"onUpdate")),this._repeat&&b!==x&&this.vars.onRepeat&&!o&&this.parent&&de(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(c&&!this._onUpdate&&ii(this,a,!0,!0),(a||!d)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Je(this,1),!o&&!(c&&!r)&&(p||r||B)&&(de(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),n.prototype.invalidate.call(this,a)},t.resetTo=function(a,o,s,r,l){Kt||le.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vi(this,d),c=this._ease(d/this._dur),fp(this,a,o,s,r,c,d,l)?this.resetTo(a,o,s,r,1):(Zn(this,0),this.parent||yo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,o){if(o===void 0&&(o="all"),!a&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Tt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!q),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,o,ze&&ze.vars.overwrite!==!0)._first||Tt(this),this.parent&&s!==this.timeline.totalDuration()&&kt(this,this._dur*this.timeline._tDur/s,0,1),this}var r=this._targets,l=a?ye(a):r,d=this._ptLookup,c=this._pt,p,f,u,b,g,x,B;if((!o||o==="all")&&Dc(r,l))return o==="all"&&(this._pt=0),Tt(this);for(p=this._op=this._op||[],o!=="all"&&(Q(o)&&(g={},ne(o,function(k){return g[k]=1}),o=g),o=up(r,o)),B=r.length;B--;)if(~l.indexOf(r[B])){f=d[B],o==="all"?(p[B]=o,b=f,u={}):(u=p[B]=p[B]||{},b=o);for(g in b)x=f&&f[g],x&&((!("kill"in x.d)||x.d.kill(g)===!0)&&kn(this,x,"_pt"),delete f[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&c&&Tt(this),this},e.to=function(a,o){return new e(a,o,arguments[2])},e.from=function(a,o){return Xt(1,arguments)},e.delayedCall=function(a,o,s,r){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:r})},e.fromTo=function(a,o,s){return Xt(2,arguments)},e.set=function(a,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(a,o)},e.killTweensOf=function(a,o,s){return D.killTweensOf(a,o,s)},e}(jt);me(K.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ne("staggerTo,staggerFrom,staggerFromTo",function(n){K[n]=function(){var e=new ee,t=oi.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Fi=function(e,t,i){return e[t]=i},zo=function(e,t,i){return e[t](i)},hp=function(e,t,i,a){return e[t](a.fp,i)},bp=function(e,t,i){return e.setAttribute(t,i)},Ei=function(e,t){return J(e[t])?zo:wi(e[t])&&e.setAttribute?bp:Fi},Mo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xo=function(e,t){var i=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+a,i=i._next;a+=t.c}t.set(t.t,t.p,a,t)},Yi=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},xp=function(e,t,i,a){for(var o=this._pt,s;o;)s=o._next,o.p===a&&o.modifier(e,t,i),o=s},Ip=function(e){for(var t=this._pt,i,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?kn(this,t,"_pt"):t.dep||(i=1),t=a;return!i},Ap=function(e,t,i,a){a.mSet(e,t,a.m.call(a.tween,i,a.mt),a)},Ho=function(e){for(var t=e._pt,i,a,o,s;t;){for(i=t._next,a=o;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:s)?t._prev._next=t:o=t,(t._next=a)?a._prev=t:s=t,t=i}e._pt=o},ie=function(){function n(t,i,a,o,s,r,l,d,c){this.t=i,this.s=o,this.c=s,this.p=a,this.r=r||Mo,this.d=l||this,this.set=d||Fi,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,a,o){this.mSet=this.mSet||this.set,this.set=Ap,this.m=i,this.mt=o,this.tween=a},n}();ne(Zi+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Gi[n]=1});ue.TweenMax=ue.TweenLite=K;ue.TimelineLite=ue.TimelineMax=ee;D=new ee({sortChildren:!1,defaults:Ut,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ge.stringFilter=Fo;var lt=[],fn={},Cp=[],ga=0,wp=0,Nn=function(e){return(fn[e]||Cp).map(function(t){return t()})},di=function(){var e=Date.now(),t=[];e-ga>2&&(Nn("matchMediaInit"),lt.forEach(function(i){var a=i.queries,o=i.conditions,s,r,l,d;for(r in a)s=Ce.matchMedia(a[r]).matches,s&&(l=1),s!==o[r]&&(o[r]=s,d=1);d&&(i.revert(),l&&t.push(i))}),Nn("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),ga=e,Nn("matchMedia"))},Do=function(){function n(t,i){this.selector=i&&si(i),this.data=[],this._r=[],this.isReverted=!1,this.id=wp++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,a,o){J(i)&&(o=a,a=i,i=J);var s=this,r=function(){var d=M,c=s.selector,p;return d&&d!==s&&d.data.push(s),o&&(s.selector=si(o)),M=s,p=a.apply(s,arguments),J(p)&&s._r.push(p),M=d,s.selector=c,s.isReverted=!1,p};return s.last=r,i===J?r(s,function(l){return s.add(null,l)}):i?s[i]=r:r},e.ignore=function(i){var a=M;M=null,i(this),M=a},e.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof n?i.push.apply(i,a.getTweens()):a instanceof K&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,a){var o=this;if(i?function(){for(var r=o.getTweens(),l=o.data.length,d;l--;)d=o.data[l],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}));for(r.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,p){return p.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=o.data.length;l--;)d=o.data[l],d instanceof ee?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof K)&&d.revert&&d.revert(i);o._r.forEach(function(c){return c(i,o)}),o.isReverted=!0}():this.data.forEach(function(r){return r.kill&&r.kill()}),this.clear(),a)for(var s=lt.length;s--;)lt[s].id===this.id&&lt.splice(s,1)},e.revert=function(i){this.kill(i||{})},n}(),vp=function(){function n(t){this.contexts=[],this.scope=t,M&&M.data.push(this)}var e=n.prototype;return e.add=function(i,a,o){Ge(i)||(i={matches:i});var s=new Do(0,o||this.scope),r=s.conditions={},l,d,c;M&&!s.selector&&(s.selector=M.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=i;for(d in i)d==="all"?c=1:(l=Ce.matchMedia(i[d]),l&&(lt.indexOf(s)<0&&lt.push(s),(r[d]=l.matches)&&(c=1),l.addListener?l.addListener(di):l.addEventListener("change",di)));return c&&a(s,function(p){return s.add(null,p)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},n}(),An={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(a){return Wo(a)})},timeline:function(e){return new ee(e)},getTweensOf:function(e,t){return D.getTweensOf(e,t)},getProperty:function(e,t,i,a){Q(e)&&(e=ye(e)[0]);var o=ot(e||{}).get,s=i?bo:ho;return i==="native"&&(i=""),e&&(t?s((re[t]&&re[t].get||o)(e,t,i,a)):function(r,l,d){return s((re[r]&&re[r].get||o)(e,r,l,d))})},quickSetter:function(e,t,i){if(e=ye(e),e.length>1){var a=e.map(function(c){return se.quickSetter(c,t,i)}),o=a.length;return function(c){for(var p=o;p--;)a[p](c)}}e=e[0]||{};var s=re[t],r=ot(e),l=r.harness&&(r.harness.aliases||{})[t]||t,d=s?function(c){var p=new s;yt._pt=0,p.init(e,i?c+i:c,yt,0,[e]),p.render(1,p),yt._pt&&Yi(1,yt)}:r.set(e,l);return s?d:function(c){return d(e,l,i?c+i:c,r,1)}},quickTo:function(e,t,i){var a,o=se.to(e,me((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),s=function(l,d,c){return o.resetTo(t,l,d,c)};return s.tween=o,s},isTweening:function(e){return D.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rt(e.ease,Ut.ease)),ra(Ut,e||{})},config:function(e){return ra(ge,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,a=e.plugins,o=e.defaults,s=e.extendTimeline;(a||"").split(",").forEach(function(r){return r&&!re[r]&&!ue[r]&&Jt(t+" effect requires "+r+" plugin.")}),En[t]=function(r,l,d){return i(ye(r),me(l||{},o),d)},s&&(ee.prototype[t]=function(r,l,d){return this.add(En[t](r,Ge(l)?l:(d=l)&&{},this),d)})},registerEase:function(e,t){V[e]=rt(t)},parseEase:function(e,t){return arguments.length?rt(e,t):V},getById:function(e){return D.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ee(e),a,o;for(i.smoothChildTiming=te(e.smoothChildTiming),D.remove(i),i._dp=0,i._time=i._tTime=D._time,a=D._first;a;)o=a._next,(t||!(!a._dur&&a instanceof K&&a.vars.onComplete===a._targets[0]))&&we(i,a,a._start-a._delay),a=o;return we(D,i,0),i},context:function(e,t){return e?new Do(e,t):M},matchMedia:function(e){return new vp(e)},matchMediaRefresh:function(){return lt.forEach(function(e){var t=e.conditions,i,a;for(a in t)t[a]&&(t[a]=!1,i=1);i&&e.revert()})||di()},addEventListener:function(e,t){var i=fn[e]||(fn[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=fn[e],a=i&&i.indexOf(t);a>=0&&i.splice(a,1)},utils:{wrap:tp,wrapYoyo:np,distribute:vo,random:ko,snap:Bo,normalize:ep,getUnit:_,clamp:Qc,splitColor:Ro,toArray:ye,selector:si,mapRange:Zo,pipe:_c,unitize:$c,interpolate:ip,shuffle:wo},install:po,effects:En,ticker:le,updateRoot:ee.updateRoot,plugins:re,globalTimeline:D,core:{PropTween:ie,globals:go,Tween:K,Timeline:ee,Animation:jt,getCache:ot,_removeLinkedListItem:kn,reverting:function(){return q},context:function(e){return e&&M&&(M.data.push(e),e._ctx=M),M},suppressOverwrites:function(e){return Ci=e}}};ne("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return An[n]=K[n]});le.add(ee.updateRoot);yt=An.to({},{duration:0});var Bp=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},kp=function(e,t){var i=e._targets,a,o,s;for(a in t)for(o=i.length;o--;)s=e._ptLookup[o][a],s&&(s=s.d)&&(s._pt&&(s=Bp(s,a)),s&&s.modifier&&s.modifier(t[a],e,i[o],a))},zn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,o,s){s._onInit=function(r){var l,d;if(Q(o)&&(l={},ne(o,function(c){return l[c]=1}),o=l),t){l={};for(d in o)l[d]=t(o[d]);o=l}kp(r,o)}}}},se=An.registerPlugin({name:"attr",init:function(e,t,i,a,o){var s,r,l;this.tween=i;for(s in t)l=e.getAttribute(s)||"",r=this.add(e,"setAttribute",(l||0)+"",t[s],a,o,0,0,s),r.op=s,r.b=l,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)q?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},zn("roundProps",ri),zn("modifiers"),zn("snap",Bo))||An;K.version=ee.version=se.version="3.15.0";co=1;vi()&&Gt();V.Power0;V.Power1;V.Power2;V.Power3;V.Power4;V.Linear;V.Quad;V.Cubic;V.Quart;V.Quint;V.Strong;V.Elastic;V.Back;V.SteppedEase;V.Bounce;V.Sine;V.Expo;V.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fa,Me,At,Ti,it,ua,Li,Gp=function(){return typeof window<"u"},Ye={},nt=180/Math.PI,Ct=Math.PI/180,ut=Math.atan2,ma=1e8,Ni=/([A-Z])/g,Zp=/(left|right|width|margin|padding|x)/i,Sp=/[\s,\(]\S/,ve={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ci=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Rp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fp=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Uo=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jo=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ep=function(e,t,i){return e.style[t]=i},Yp=function(e,t,i){return e.style.setProperty(t,i)},Tp=function(e,t,i){return e._gsap[t]=i},Lp=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Np=function(e,t,i,a,o){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(o,s)},zp=function(e,t,i,a,o){var s=e._gsap;s[t]=i,s.renderTransform(o,s)},U="transform",ae=U+"Origin",Mp=function n(e,t){var i=this,a=this.target,o=a.style,s=a._gsap;if(e in Ye&&o){if(this.tfm=this.tfm||{},e!=="transform")e=ve[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return i.tfm[r]=Re(a,r)}):this.tfm[e]=s.x?s[e]:Re(a,e),e===ae&&(this.tfm.zOrigin=s.zOrigin);else return ve.transform.split(",").forEach(function(r){return n.call(i,r,t)});if(this.props.indexOf(U)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(ae,t,"")),e=U}(o||t)&&this.props.push(e,t,o[e])},Po=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xp=function(){var e=this.props,t=this.target,i=t.style,a=t._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Ni,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Li(),(!o||!o.isStart)&&!i[U]&&(Po(i),a.zOrigin&&i[ae]&&(i[ae]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},Oo=function(e,t){var i={target:e,props:[],revert:Xp,save:Mp};return e._gsap||se.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return i.save(a)}),i},Ko,pi=function(e,t){var i=Me.createElementNS?Me.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Me.createElement(e);return i&&i.style?i:Me.createElement(e)},ce=function n(e,t,i){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Ni,"-$1").toLowerCase())||a.getPropertyValue(t)||!i&&n(e,Zt(t)||t,1)||""},ha="O,Moz,ms,Ms,Webkit".split(","),Zt=function(e,t,i){var a=t||it,o=a.style,s=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(ha[s]+e in o););return s<0?null:(s===3?"ms":s>=0?ha[s]:"")+e},gi=function(){Gp()&&window.document&&(fa=window,Me=fa.document,At=Me.documentElement,it=pi("div")||{style:{}},pi("div"),U=Zt(U),ae=U+"Origin",it.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ko=!!Zt("perspective"),Li=se.core.reverting,Ti=1)},ba=function(e){var t=e.ownerSVGElement,i=pi("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),o;a.style.display="block",i.appendChild(a),At.appendChild(i);try{o=a.getBBox()}catch{}return i.removeChild(a),At.removeChild(i),o},ya=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},jo=function(e){var t,i;try{t=e.getBBox()}catch{t=ba(e),i=1}return t&&(t.width||t.height)||i||(t=ba(e)),t&&!t.width&&!t.x&&!t.y?{x:+ya(e,["x","cx","x1"])||0,y:+ya(e,["y","cy","y1"])||0,width:0,height:0}:t},Qo=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jo(e))},Pe=function(e,t){if(t){var i=e.style,a;t in Ye&&t!==ae&&(t=U),i.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(a==="--"?t:t.replace(Ni,"-$1").toLowerCase())):i.removeAttribute(t)}},Xe=function(e,t,i,a,o,s){var r=new ie(e._pt,t,i,0,1,s?Jo:Uo);return e._pt=r,r.b=a,r.e=o,e._props.push(i),r},xa={deg:1,rad:1,turn:1},Hp={grid:1,flex:1},Oe=function n(e,t,i,a){var o=parseFloat(i)||0,s=(i+"").trim().substr((o+"").length)||"px",r=it.style,l=Zp.test(t),d=e.tagName.toLowerCase()==="svg",c=(d?"client":"offset")+(l?"Width":"Height"),p=100,f=a==="px",u=a==="%",b,g,x,B;if(a===s||!o||xa[a]||xa[s])return o;if(s!=="px"&&!f&&(o=n(e,t,i,"px")),B=e.getCTM&&Qo(e),(u||s==="%")&&(Ye[t]||~t.indexOf("adius")))return b=B?e.getBBox()[l?"width":"height"]:e[c],O(u?o/b*p:o/100*b);if(r[l?"width":"height"]=p+(f?s:a),g=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!d?e:e.parentNode,B&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Me||!g.appendChild)&&(g=Me.body),x=g._gsap,x&&u&&x.width&&l&&x.time===le.time&&!x.uncache)return O(o/x.width*p);if(u&&(t==="height"||t==="width")){var k=e.style[t];e.style[t]=p+a,b=e[c],k?e.style[t]=k:Pe(e,t)}else(u||s==="%")&&!Hp[ce(g,"display")]&&(r.position=ce(e,"position")),g===e&&(r.position="static"),g.appendChild(it),b=it[c],g.removeChild(it),r.position="absolute";return l&&u&&(x=ot(g),x.time=le.time,x.width=g[c]),O(f?b*o/p:b&&o?p/b*o:0)},Re=function(e,t,i,a){var o;return Ti||gi(),t in ve&&t!=="transform"&&(t=ve[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ye[t]&&t!=="transform"?(o=qt(e,a),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:wn(ce(e,ae))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||a||~(o+"").indexOf("calc("))&&(o=Cn[t]&&Cn[t](e,t,i)||ce(e,t)||uo(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?Oe(e,t,o,i)+i:o},Dp=function(e,t,i,a){if(!i||i==="none"){var o=Zt(t,e,1),s=o&&ce(e,o,1);s&&s!==i?(t=o,i=s):t==="borderColor"&&(i=ce(e,"borderTopColor"))}var r=new ie(this._pt,e.style,t,0,1,Xo),l=0,d=0,c,p,f,u,b,g,x,B,k,w,h,m;if(r.b=i,r.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=ce(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(g=e.style[t],e.style[t]=a,a=ce(e,t)||a,g?e.style[t]=g:Pe(e,t)),c=[i,a],Fo(c),i=c[0],a=c[1],f=i.match(bt)||[],m=a.match(bt)||[],m.length){for(;p=bt.exec(a);)x=p[0],k=a.substring(l,p.index),b?b=(b+1)%5:(k.substr(-5)==="rgba("||k.substr(-5)==="hsla(")&&(b=1),x!==(g=f[d++]||"")&&(u=parseFloat(g)||0,h=g.substr((u+"").length),x.charAt(1)==="="&&(x=It(u,x)+h),B=parseFloat(x),w=x.substr((B+"").length),l=bt.lastIndex-w.length,w||(w=w||ge.units[t]||h,l===a.length&&(a+=w,r.e+=w)),h!==w&&(u=Oe(e,t,g,w)||0),r._pt={_next:r._pt,p:k||d===1?k:",",s:u,c:B-u,m:b&&b<4||t==="zIndex"?Math.round:0});r.c=l<a.length?a.substring(l,a.length):""}else r.r=t==="display"&&a==="none"?Jo:Uo;return lo.test(a)&&(r.e=0),this._pt=r,r},Ia={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Up=function(e){var t=e.split(" "),i=t[0],a=t[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(e=i,i=a,a=e),t[0]=Ia[i]||i,t[1]=Ia[a]||a,t.join(" ")},Jp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,a=i.style,o=t.u,s=i._gsap,r,l,d;if(o==="all"||o===!0)a.cssText="",l=1;else for(o=o.split(","),d=o.length;--d>-1;)r=o[d],Ye[r]&&(l=1,r=r==="transformOrigin"?ae:U),Pe(i,r);l&&(Pe(i,U),s&&(s.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",qt(i,1),s.uncache=1,Po(a)))}},Cn={clearProps:function(e,t,i,a,o){if(o.data!=="isFromStart"){var s=e._pt=new ie(e._pt,t,i,0,0,Jp);return s.u=a,s.pr=-10,s.tween=o,e._props.push(i),1}}},Qt=[1,0,0,1,0,0],qo={},_o=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Aa=function(e){var t=ce(e,U);return _o(t)?Qt:t.substr(7).match(ro).map(O)},zi=function(e,t){var i=e._gsap||ot(e),a=e.style,o=Aa(e),s,r,l,d;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Qt:o):(o===Qt&&!e.offsetParent&&e!==At&&!i.svg&&(l=a.display,a.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,r=e.nextElementSibling,At.appendChild(e)),o=Aa(e),l?a.display=l:Pe(e,"display"),d&&(r?s.insertBefore(e,r):s?s.appendChild(e):At.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},fi=function(e,t,i,a,o,s){var r=e._gsap,l=o||zi(e,!0),d=r.xOrigin||0,c=r.yOrigin||0,p=r.xOffset||0,f=r.yOffset||0,u=l[0],b=l[1],g=l[2],x=l[3],B=l[4],k=l[5],w=t.split(" "),h=parseFloat(w[0])||0,m=parseFloat(w[1])||0,A,y,C,I;i?l!==Qt&&(y=u*x-b*g)&&(C=h*(x/y)+m*(-g/y)+(g*k-x*B)/y,I=h*(-b/y)+m*(u/y)-(u*k-b*B)/y,h=C,m=I):(A=jo(e),h=A.x+(~w[0].indexOf("%")?h/100*A.width:h),m=A.y+(~(w[1]||w[0]).indexOf("%")?m/100*A.height:m)),a||a!==!1&&r.smooth?(B=h-d,k=m-c,r.xOffset=p+(B*u+k*g)-B,r.yOffset=f+(B*b+k*x)-k):r.xOffset=r.yOffset=0,r.xOrigin=h,r.yOrigin=m,r.smooth=!!a,r.origin=t,r.originIsAbsolute=!!i,e.style[ae]="0px 0px",s&&(Xe(s,r,"xOrigin",d,h),Xe(s,r,"yOrigin",c,m),Xe(s,r,"xOffset",p,r.xOffset),Xe(s,r,"yOffset",f,r.yOffset)),e.setAttribute("data-svg-origin",h+" "+m)},qt=function(e,t){var i=e._gsap||new Yo(e);if("x"in i&&!t&&!i.uncache)return i;var a=e.style,o=i.scaleX<0,s="px",r="deg",l=getComputedStyle(e),d=ce(e,ae)||"0",c,p,f,u,b,g,x,B,k,w,h,m,A,y,C,I,G,Z,v,W,S,R,F,Y,P,ft,Wt,Rt,_e,aa,Se,$e;return c=p=f=g=x=B=k=w=h=0,u=b=1,i.svg=!!(e.getCTM&&Qo(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[U]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[U]!=="none"?l[U]:"")),a.scale=a.rotate=a.translate="none"),y=zi(e,i.svg),i.svg&&(i.uncache?(P=e.getBBox(),d=i.xOrigin-P.x+"px "+(i.yOrigin-P.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),fi(e,Y||d,!!Y||i.originIsAbsolute,i.smooth!==!1,y)),m=i.xOrigin||0,A=i.yOrigin||0,y!==Qt&&(Z=y[0],v=y[1],W=y[2],S=y[3],c=R=y[4],p=F=y[5],y.length===6?(u=Math.sqrt(Z*Z+v*v),b=Math.sqrt(S*S+W*W),g=Z||v?ut(v,Z)*nt:0,k=W||S?ut(W,S)*nt+g:0,k&&(b*=Math.abs(Math.cos(k*Ct))),i.svg&&(c-=m-(m*Z+A*W),p-=A-(m*v+A*S))):($e=y[6],aa=y[7],Wt=y[8],Rt=y[9],_e=y[10],Se=y[11],c=y[12],p=y[13],f=y[14],C=ut($e,_e),x=C*nt,C&&(I=Math.cos(-C),G=Math.sin(-C),Y=R*I+Wt*G,P=F*I+Rt*G,ft=$e*I+_e*G,Wt=R*-G+Wt*I,Rt=F*-G+Rt*I,_e=$e*-G+_e*I,Se=aa*-G+Se*I,R=Y,F=P,$e=ft),C=ut(-W,_e),B=C*nt,C&&(I=Math.cos(-C),G=Math.sin(-C),Y=Z*I-Wt*G,P=v*I-Rt*G,ft=W*I-_e*G,Se=S*G+Se*I,Z=Y,v=P,W=ft),C=ut(v,Z),g=C*nt,C&&(I=Math.cos(C),G=Math.sin(C),Y=Z*I+v*G,P=R*I+F*G,v=v*I-Z*G,F=F*I-R*G,Z=Y,R=P),x&&Math.abs(x)+Math.abs(g)>359.9&&(x=g=0,B=180-B),u=O(Math.sqrt(Z*Z+v*v+W*W)),b=O(Math.sqrt(F*F+$e*$e)),C=ut(R,F),k=Math.abs(C)>2e-4?C*nt:0,h=Se?1/(Se<0?-Se:Se):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_o(ce(e,U)),Y&&e.setAttribute("transform",Y))),Math.abs(k)>90&&Math.abs(k)<270&&(o?(u*=-1,k+=g<=0?180:-180,g+=g<=0?180:-180):(b*=-1,k+=k<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=O(u),i.scaleY=O(b),i.rotation=O(g)+r,i.rotationX=O(x)+r,i.rotationY=O(B)+r,i.skewX=k+r,i.skewY=w+r,i.transformPerspective=h+s,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(a[ae]=wn(d)),i.xOffset=i.yOffset=0,i.force3D=ge.force3D,i.renderTransform=i.svg?Op:Ko?$o:Pp,i.uncache=0,i},wn=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mn=function(e,t,i){var a=_(t);return O(parseFloat(t)+parseFloat(Oe(e,"x",i+"px",a)))+a},Pp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$o(e,t)},et="0deg",Vt="0px",tt=") ",$o=function(e,t){var i=t||this,a=i.xPercent,o=i.yPercent,s=i.x,r=i.y,l=i.z,d=i.rotation,c=i.rotationY,p=i.rotationX,f=i.skewX,u=i.skewY,b=i.scaleX,g=i.scaleY,x=i.transformPerspective,B=i.force3D,k=i.target,w=i.zOrigin,h="",m=B==="auto"&&e&&e!==1||B===!0;if(w&&(p!==et||c!==et)){var A=parseFloat(c)*Ct,y=Math.sin(A),C=Math.cos(A),I;A=parseFloat(p)*Ct,I=Math.cos(A),s=Mn(k,s,y*I*-w),r=Mn(k,r,-Math.sin(A)*-w),l=Mn(k,l,C*I*-w+w)}x!==Vt&&(h+="perspective("+x+tt),(a||o)&&(h+="translate("+a+"%, "+o+"%) "),(m||s!==Vt||r!==Vt||l!==Vt)&&(h+=l!==Vt||m?"translate3d("+s+", "+r+", "+l+") ":"translate("+s+", "+r+tt),d!==et&&(h+="rotate("+d+tt),c!==et&&(h+="rotateY("+c+tt),p!==et&&(h+="rotateX("+p+tt),(f!==et||u!==et)&&(h+="skew("+f+", "+u+tt),(b!==1||g!==1)&&(h+="scale("+b+", "+g+tt),k.style[U]=h||"translate(0, 0)"},Op=function(e,t){var i=t||this,a=i.xPercent,o=i.yPercent,s=i.x,r=i.y,l=i.rotation,d=i.skewX,c=i.skewY,p=i.scaleX,f=i.scaleY,u=i.target,b=i.xOrigin,g=i.yOrigin,x=i.xOffset,B=i.yOffset,k=i.forceCSS,w=parseFloat(s),h=parseFloat(r),m,A,y,C,I;l=parseFloat(l),d=parseFloat(d),c=parseFloat(c),c&&(c=parseFloat(c),d+=c,l+=c),l||d?(l*=Ct,d*=Ct,m=Math.cos(l)*p,A=Math.sin(l)*p,y=Math.sin(l-d)*-f,C=Math.cos(l-d)*f,d&&(c*=Ct,I=Math.tan(d-c),I=Math.sqrt(1+I*I),y*=I,C*=I,c&&(I=Math.tan(c),I=Math.sqrt(1+I*I),m*=I,A*=I)),m=O(m),A=O(A),y=O(y),C=O(C)):(m=p,C=f,A=y=0),(w&&!~(s+"").indexOf("px")||h&&!~(r+"").indexOf("px"))&&(w=Oe(u,"x",s,"px"),h=Oe(u,"y",r,"px")),(b||g||x||B)&&(w=O(w+b-(b*m+g*y)+x),h=O(h+g-(b*A+g*C)+B)),(a||o)&&(I=u.getBBox(),w=O(w+a/100*I.width),h=O(h+o/100*I.height)),I="matrix("+m+","+A+","+y+","+C+","+w+","+h+")",u.setAttribute("transform",I),k&&(u.style[U]=I)},Kp=function(e,t,i,a,o){var s=360,r=Q(o),l=parseFloat(o)*(r&&~o.indexOf("rad")?nt:1),d=l-a,c=a+d+"deg",p,f;return r&&(p=o.split("_")[1],p==="short"&&(d%=s,d!==d%(s/2)&&(d+=d<0?s:-s)),p==="cw"&&d<0?d=(d+s*ma)%s-~~(d/s)*s:p==="ccw"&&d>0&&(d=(d-s*ma)%s-~~(d/s)*s)),e._pt=f=new ie(e._pt,t,i,a,d,Wp),f.e=c,f.u="deg",e._props.push(i),f},Ca=function(e,t){for(var i in t)e[i]=t[i];return e},jp=function(e,t,i){var a=Ca({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=i.style,r,l,d,c,p,f,u,b;a.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),s[U]=t,r=qt(i,1),Pe(i,U),i.setAttribute("transform",d)):(d=getComputedStyle(i)[U],s[U]=t,r=qt(i,1),s[U]=d);for(l in Ye)d=a[l],c=r[l],d!==c&&o.indexOf(l)<0&&(u=_(d),b=_(c),p=u!==b?Oe(i,l,d,b):parseFloat(d),f=parseFloat(c),e._pt=new ie(e._pt,r,l,p,f-p,ci),e._pt.u=b||0,e._props.push(l));Ca(r,a)};ne("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",a="Bottom",o="Left",s=(e<3?[t,i,a,o]:[t+o,t+i,a+i,a+o]).map(function(r){return e<2?n+r:"border"+r+n});Cn[e>1?"border"+n:n]=function(r,l,d,c,p){var f,u;if(arguments.length<4)return f=s.map(function(b){return Re(r,b,d)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(c+"").split(" "),u={},s.forEach(function(b,g){return u[b]=f[g]=f[g]||f[(g-1)/2|0]}),r.init(l,u,p)}});var es={name:"css",register:gi,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,a,o){var s=this._props,r=e.style,l=i.vars.startAt,d,c,p,f,u,b,g,x,B,k,w,h,m,A,y,C,I;Ti||gi(),this.styles=this.styles||Oo(e),C=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(re[g]&&To(g,t,i,a,e,o)))){if(u=typeof c,b=Cn[g],u==="function"&&(c=c.call(i,a,e,o),u=typeof c),u==="string"&&~c.indexOf("random(")&&(c=Ot(c)),b)b(this,e,g,c,i)&&(y=1);else if(g.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",De.lastIndex=0,De.test(d)||(x=_(d),B=_(c),B?x!==B&&(d=Oe(e,g,d,B)+B):x&&(c+=x)),this.add(r,"setProperty",d,c,a,o,0,0,g),s.push(g),C.push(g,0,r[g]);else if(u!=="undefined"){if(l&&g in l?(d=typeof l[g]=="function"?l[g].call(i,a,e,o):l[g],Q(d)&&~d.indexOf("random(")&&(d=Ot(d)),_(d+"")||d==="auto"||(d+=ge.units[g]||_(Re(e,g))||""),(d+"").charAt(1)==="="&&(d=Re(e,g))):d=Re(e,g),f=parseFloat(d),k=u==="string"&&c.charAt(1)==="="&&c.substr(0,2),k&&(c=c.substr(2)),p=parseFloat(c),g in ve&&(g==="autoAlpha"&&(f===1&&Re(e,"visibility")==="hidden"&&p&&(f=0),C.push("visibility",0,r.visibility),Xe(this,r,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),g!=="scale"&&g!=="transform"&&(g=ve[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in Ye,w){if(this.styles.save(g),I=c,u==="string"&&c.substring(0,6)==="var(--"){if(c=ce(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var G=e.style.perspective;e.style.perspective=c,c=ce(e,"perspective"),G?e.style.perspective=G:Pe(e,"perspective")}p=parseFloat(c)}if(h||(m=e._gsap,m.renderTransform&&!t.parseTransform||qt(e,t.parseTransform),A=t.smoothOrigin!==!1&&m.smooth,h=this._pt=new ie(this._pt,r,U,0,1,m.renderTransform,m,0,-1),h.dep=1),g==="scale")this._pt=new ie(this._pt,m,"scaleY",m.scaleY,(k?It(m.scaleY,k+p):p)-m.scaleY||0,ci),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(ae,0,r[ae]),c=Up(c),m.svg?fi(e,c,0,A,0,this):(B=parseFloat(c.split(" ")[2])||0,B!==m.zOrigin&&Xe(this,m,"zOrigin",m.zOrigin,B),Xe(this,r,g,wn(d),wn(c)));continue}else if(g==="svgOrigin"){fi(e,c,1,A,0,this);continue}else if(g in qo){Kp(this,m,g,f,k?It(f,k+c):c);continue}else if(g==="smoothOrigin"){Xe(this,m,"smooth",m.smooth,c);continue}else if(g==="force3D"){m[g]=c;continue}else if(g==="transform"){jp(this,c,e);continue}}else g in r||(g=Zt(g)||g);if(w||(p||p===0)&&(f||f===0)&&!Sp.test(c)&&g in r)x=(d+"").substr((f+"").length),p||(p=0),B=_(c)||(g in ge.units?ge.units[g]:x),x!==B&&(f=Oe(e,g,d,B)),this._pt=new ie(this._pt,w?m:r,g,f,(k?It(f,k+p):p)-f,!w&&(B==="px"||g==="zIndex")&&t.autoRound!==!1?Fp:ci),this._pt.u=B||0,w&&I!==c?(this._pt.b=d,this._pt.e=I,this._pt.r=Vp):x!==B&&B!=="%"&&(this._pt.b=d,this._pt.r=Rp);else if(g in r)Dp.call(this,e,g,d,k?k+c:c);else if(g in e)this.add(e,g,d||e[g],k?k+c:c,a,o);else if(g!=="parseTransform"){ki(g,c);continue}w||(g in r?C.push(g,0,r[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,d||e[g])),s.push(g)}}y&&Ho(this)},render:function(e,t){if(t.tween._time||!Li())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Re,aliases:ve,getSetter:function(e,t,i){var a=ve[t];return a&&a.indexOf(",")<0&&(t=a),t in Ye&&t!==ae&&(e._gsap.x||Re(e,"x"))?i&&ua===i?t==="scale"?Lp:Tp:(ua=i||{})&&(t==="scale"?Np:zp):e.style&&!wi(e.style[t])?Ep:~t.indexOf("-")?Yp:Ei(e,t)},core:{_removeProperty:Pe,_getMatrix:zi}};se.utils.checkPrefix=Zt;se.core.getStyleSaver=Oo;(function(n,e,t,i){var a=ne(n+","+e+","+t,function(o){Ye[o]=1});ne(e,function(o){ge.units[o]="deg",qo[o]=1}),ve[a[13]]=n+","+e,ne(i,function(o){var s=o.split(":");ve[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ne("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ge.units[n]="px"});se.registerPlugin(es);var vn=se.registerPlugin(es)||se;vn.core.Tween;const ts="avc213",ns="avc213",is="languaso",as="hiepnv",os="draft",ss=[],rs=!1,ls="avc213",ds="bundle",cs="avc213",ps=[{id:"imported-1",type:"raw",url:"/imported/avc213/index.html"}],Qp={id:ts,concept:ns,product:is,owner:as,status:os,assigned:ss,cross_team:rs,imported_from:ls,import_mode:ds,title:cs,screens:ps},qp=Object.freeze(Object.defineProperty({__proto__:null,assigned:ss,concept:ns,cross_team:rs,default:Qp,id:ts,import_mode:ds,imported_from:ls,owner:as,product:is,screens:ps,status:os,title:cs},Symbol.toStringTag,{value:"Module"})),gs="bw-couple4-clone",fs="bw-couple4-clone",us="artimind",ms="hiepnv",hs="draft",bs=[],ys=!1,xs="https://app.artimind.com/bw_couple4_us",Is="funnelfox-clone",As="01KWYAC9423MKVXH72WGYX92HG",Cs="artimind",ws=[{id:"chon-anh",type:"raw",name:"Chọn ảnh",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/Gx-jgZAQ.webp" alt=""><h1>Choose Your <br>Forever Memory Styles</h1><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KVADE6C38ZWZ1VV94130CJ25/ByF6KnLM.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KVADE6C38ZWZ1VV94130CJ25/W7uIKfKk.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KTP1E1ZTZTA6WQQDCQS1YE21/7Af4pShe.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KTP1E1ZTZTA6WQQDCQS1YE21/0-GTpazc.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KVSZXTDZEDGHSNSBKQJQYWW9/4b25tK6z.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWYA82G1RYM7MZ837R7HSQRB/t8e1OI-H.webp" alt=""></div></div></div>`,cta:"Continue",role:"engagement-question"},{id:"up-anh",type:"raw",name:"Up ảnh",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/Gx-jgZAQ.webp" alt=""><h1>Create a magic moment from two photos with Artimind ✨</h1><div class="ff-col"><div class="ff-row"><style>
  #photo-container-1 {
    position: relative;
  }

  #navigate-btn-1 {
    display: none;
  }

  #image-upload-box-1 {
    width: 160px;
    height: 300px;
    border: 2px dashed #555;
    border-radius: 15px;
    position: relative;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
  }

  #image-upload-box-1:hover {
    border-color: #888;
  }

  #image-upload-box-1::before {
    content: "+";
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 52px;
    font-weight: 300;
    color: #aaa;
    z-index: 1;
    pointer-events: none;
  }

  #image-upload-box-1.has-photo::before {
    display: none;
  }

  #image-preview-1 {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
  }

  #image-upload-btn-1 {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(60px);
  }

  #image-upload-box-1.has-photo #image-upload-btn-1 {
    background: rgba(0, 0, 0, 0.25);
  }

  #photo-container-1 .spinner {
    width: 32px;
    height: 32px;
    border: 5px solid #eee;
    border-top: 5px solid #aaa;
    border-radius: 50%;
    animation: spin-1 1s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    visibility: hidden;
    z-index: 5;
  }

  #image-upload-box-1.loading .spinner {
    visibility: visible;
  }

  @keyframes spin-1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>

<div id="photo-container-1">
  <input type="file" id="file-1" accept="image/*" style="display: none" />

  <div id="image-upload-box-1">
    <img id="image-preview-1" src="" alt="">

    <button type="button" id="image-upload-btn-1">
      Upload your<br>1st photo
    </button>

    <div class="spinner"></div>
  </div>
</div>

<script>
  const navigateButton1 = document.getElementById('navigate-btn-1');
  const uploadContainer1 = document.getElementById('image-upload-box-1');
  const fileInput1 = document.getElementById('file-1');
  const uploadBtn1 = document.getElementById('image-upload-btn-1');
  const imagePreview1 = document.getElementById('image-preview-1');

  let isFileDialogOpen1 = false;

  init1();

  function init1() {
    uploadBtn1.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      selectFile1();
    };

    uploadContainer1.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      selectFile1();
    };

    fileInput1.onchange = async function (event) {
      const file = event.target.files[0];

      isFileDialogOpen1 = false;

      if (file) {
        await upload1(file);
      }

      fileInput1.value = '';
    };

    window.addEventListener('focus', function () {
      setTimeout(function () {
        isFileDialogOpen1 = false;
      }, 800);
    });
  }

  function selectFile1() {
    if (isFileDialogOpen1) {
      return;
    }

    isFileDialogOpen1 = true;
    fileInput1.click();
  }

  function setPhoto1(file) {
    uploadBtn1.innerHTML = 'Change<br>photo';

    const imageUrl = URL.createObjectURL(file);
    imagePreview1.src = imageUrl;
    imagePreview1.style.display = 'block';

    uploadContainer1.classList.add('has-photo');

    if (navigateButton1) {
      navigateButton1.style.display = 'block';
    }
  }

  function setLoading1(value) {
    uploadContainer1.classList.toggle('loading', value);
  }

  async function upload1(file) {
    try {
      setLoading1(true);
      setPhoto1(file);
      return true;
    } catch (error) {
      showError1('Failed to process photo. Please try again.');
      return false;
    } finally {
      setLoading1(false);
    }
  }

  function showError1(message) {
    alert(message);
  }
<\/script><style>
  #photo-container-2 {
    position: relative;
    width: 100%;
  }

  #navigate-btn-2 {
    display: none;
  }

  #file-2 {
    display: none;
  }

  #image-upload-box-2 {
    width: 160px;
    height: 300px;
    border: 2px dashed #555;
    border-radius: 15px;
    position: relative;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
    z-index: 10;
  }

  #image-upload-box-2:hover {
    border-color: #888;
  }

  #image-upload-box-2::before {
    content: "+";
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 52px;
    font-weight: 300;
    color: #aaa;
    z-index: 1;
    pointer-events: none;
  }

  #image-upload-box-2.has-photo::before {
    display: none;
  }

  #image-preview-2 {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  #image-upload-text-2 {
    position: absolute;
    inset: 0;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    z-index: 2;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(60px);
  }

  #image-upload-box-2.has-photo #image-upload-text-2 {
    background: rgba(0, 0, 0, 0.25);
  }

  #photo-container-2 .spinner {
    width: 32px;
    height: 32px;
    border: 5px solid #eee;
    border-top: 5px solid #aaa;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    visibility: hidden;
    z-index: 5;
  }

  #image-upload-box-2.loading .spinner {
    visibility: visible;
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>

<div id="photo-container-2">
  <input type="file" id="file-2" accept="image/*" />

  <label id="image-upload-box-2" for="file-2">
    <img id="image-preview-2" src="" alt="">

    <span id="image-upload-text-2">
      Upload your<br>2nd photo
    </span>

    <div class="spinner"></div>
  </label>
</div>

<script>
  const navigateButton2 = document.getElementById('navigate-btn-2');
  const uploadContainer2 = document.getElementById('image-upload-box-2');
  const fileInput2 = document.getElementById('file-2');
  const uploadText2 = document.getElementById('image-upload-text-2');
  const imagePreview2 = document.getElementById('image-preview-2');

  fileInput2.onchange = async function (event) {
    const file = event.target.files[0];

    if (file) {
      await upload2(file);
    }

    fileInput2.value = '';
  };

  function setPhoto2(file) {
    uploadText2.innerHTML = 'Change<br>photo';

    const imageUrl = URL.createObjectURL(file);
    imagePreview2.src = imageUrl;
    imagePreview2.style.display = 'block';

    uploadContainer2.classList.add('has-photo');

    if (navigateButton2) {
      navigateButton2.style.display = 'block';
    }
  }

  function setLoading2(value) {
    uploadContainer2.classList.toggle('loading', value);
  }

  async function upload2(file) {
    try {
      setLoading2(true);
      setPhoto2(file);
      return true;
    } catch (error) {
      showError2('Failed to process photo. Please try again.');
      return false;
    } finally {
      setLoading2(false);
    }
  }

  function showError2(message) {
    alert(message);
  }
<\/script></div></div><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

  #custom-create-now-wrapper {
    width: 100%;
    text-align: center;
    margin-top: 16px;
    position: relative;
    z-index: 1;
    pointer-events: none;
  }

  #custom-create-now {
    display: inline-block;
    width: 320px;
    max-width: 88%;
    height: 62px;
    border: none;
    border-radius: 999px;
    background: #ffffff;
    color: #000000;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 62px;
    cursor: pointer;
    text-align: center;
    pointer-events: auto;
    transition: all 0.2s ease;
  }

  #custom-create-now:hover {
    background: #f2f2f2;
    color: #000000;
  }

  #upload-warning-message {
    display: none;
    width: 100%;
    text-align: center;
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #820C16;
    pointer-events: none;
  }

  #upload-warning-message.show {
    display: block;
  }
</style>

<div id="custom-create-now-wrapper">
  <button id="custom-create-now" type="button">
    CREATE NOW
  </button>

  <div id="upload-warning-message">
    Please upload 2 photos to continue.
  </div>
</div>

<script>
  function setupPhotoGate() {
    const customWrapper = document.getElementById("custom-create-now-wrapper");
    const customBtn = document.getElementById("custom-create-now");

    // Nút thật của FunnelFox
    const triggerBtn = document.getElementById("el_8GqhZ");

    const box1 = document.getElementById("image-upload-box-1");
    const box2 = document.getElementById("image-upload-box-2");
    const warning = document.getElementById("upload-warning-message");

    if (!customWrapper || !customBtn || !triggerBtn || !box1 || !box2 || !warning) {
      setTimeout(setupPhotoGate, 300);
      return;
    }

    if (customBtn.dataset.gateReady === "true") {
      return;
    }

    customBtn.dataset.gateReady = "true";

    function hideRealButton() {
      triggerBtn.style.opacity = "0";
      triggerBtn.style.pointerEvents = "none";
      triggerBtn.style.visibility = "hidden";
    }

    function showRealButton() {
      triggerBtn.style.opacity = "1";
      triggerBtn.style.pointerEvents = "auto";
      triggerBtn.style.visibility = "visible";
    }

    function showCustomButton() {
      customWrapper.style.opacity = "1";
      customWrapper.style.pointerEvents = "none";
      customBtn.style.pointerEvents = "auto";
    }

    function hideCustomButton() {
      customWrapper.style.opacity = "0";
      customWrapper.style.pointerEvents = "none";
      customBtn.style.pointerEvents = "none";
    }

    function checkPhotosReady() {
      const hasPhoto1 = box1.classList.contains("has-photo");
      const hasPhoto2 = box2.classList.contains("has-photo");

      if (hasPhoto1 && hasPhoto2) {
        warning.classList.remove("show");
        hideCustomButton();
        showRealButton();
      } else {
        showCustomButton();
        hideRealButton();
      }
    }

    hideRealButton();
    showCustomButton();

    customBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      checkPhotosReady();

      const hasPhoto1 = box1.classList.contains("has-photo");
      const hasPhoto2 = box2.classList.contains("has-photo");

      if (!hasPhoto1 || !hasPhoto2) {
        warning.classList.add("show");
      }
    });

    const observer1 = new MutationObserver(checkPhotosReady);
    const observer2 = new MutationObserver(checkPhotosReady);

    observer1.observe(box1, { attributes: true, attributeFilter: ["class"] });
    observer2.observe(box2, { attributes: true, attributeFilter: ["class"] });

    setInterval(checkPhotosReady, 500);

    checkPhotosReady();
  }

  setupPhotoGate();
<\/script><button class="ff-btn" type="button" data-cta>CREATE NOW</button><h1>Not just a single photo - &lt;br&gt;get 50 templates included 📸</h1><img src="https://assets.fnlfx.com/01KQXS5TSGG3NBR9GX7GJJD2MH/jl6Zal9M.webp" alt=""></div>`,cta:"CREATE NOW"},{id:"loading-knitworld",type:"raw",name:"loading hug",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>Adding the final sparkle<br>to your AI video…</h1><div class="ff-note">[Processing]</div><div class="ff-col"><div class="ff-col"><h1>Trusted by 1+ million to turn &lt;br&gt;their photos into memories</h1><div class="ff-note">[Carousel]</div><div class="ff-col"><img src="https://assets.fnlfx.com/01KQXS5TSGG3NBR9GX7GJJD2MH/lzSGw643.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KQXS5TSGG3NBR9GX7GJJD2MH/f53l_6B9.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRDFRH91BHBXJRAKWGBKFN4E/MVTbU8LR.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRDFRH91BHBXJRAKWGBKFN4E/gAdzcO8F.webp" alt=""></div></div></div></div>`,cta:"Continue",role:"loading"},{id:"gift",type:"raw",name:"Gift",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/WE8wUzd5.webp" alt=""><button class="ff-btn" type="button" data-cta>Continue</button><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>Lucky Wheel</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background:
      radial-gradient(120% 60% at 50% 10%, rgba(200, 30, 50, 0.4) 0%, transparent 60%),
      linear-gradient(180deg, #170509 0%, #0a0203 100%);
    color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
  }

  h1 {
    font-size: clamp(20px, 5.4vw, 26px);
    font-weight: 800;
    text-align: center;
    line-height: 1.3;
  }

  p.subtitle {
    color: rgba(255, 255, 255, 0.78);
    text-align: center;
    font-size: 14px;
    line-height: 1.45;
    max-width: 320px;
    margin-top: -4px;
  }

  .wheel-box {
    position: relative;
    width: min(86vw, 320px);
    aspect-ratio: 1 / 1;
    margin: 8px auto;
    transform: translateZ(0);
  }

  .wheel-box::before,
  .wheel-box::after {
    content: "";
    position: absolute;
    inset: -18px;
    border: 1px solid rgba(255, 199, 59, 0.38);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
  }
  .wheel-box.ready::before {
    animation: invite-ring 1800ms ease-out infinite;
  }
  .wheel-box.ready::after {
    animation: invite-ring 1800ms ease-out 520ms infinite;
  }
  .wheel-box.spinning::before {
    inset: -10px;
    border: 3px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.95);
    border-right-color: rgba(255, 199, 59, 0.65);
    opacity: 1;
    animation: speed-ring 520ms linear infinite;
  }
  .wheel-box.spinning::after {
    inset: -22px;
    border: 1px solid rgba(248, 84, 93, 0.58);
    opacity: 0.75;
    animation: speed-ring 900ms linear infinite reverse;
  }
  @keyframes invite-ring {
    0%   { transform: scale(0.9); opacity: 0; }
    20%  { opacity: 0.72; }
    100% { transform: scale(1.18); opacity: 0; }
  }
  @keyframes speed-ring {
    to { transform: rotate(360deg); }
  }

  .pointer {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 22px solid #FFFFFF;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
    z-index: 4;
    animation: pointer-bob 900ms ease-in-out infinite alternate;
  }
  .wheel-box.spinning .pointer,
  .wheel-box.done .pointer {
    animation: none;
  }
  .wheel-box.spinning .pointer {
    animation: pointer-tick 120ms linear infinite;
  }
  @keyframes pointer-bob {
    from { transform: translateX(-50%) translateY(-2px); }
    to   { transform: translateX(-50%) translateY(4px); }
  }
  @keyframes pointer-tick {
    0%, 100% { transform: translateX(-50%) rotate(-3deg); }
    50%      { transform: translateX(-50%) rotate(3deg); }
  }

  .glow-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #F8545D, #FFC73B, #F8545D);
    filter: blur(8px);
    opacity: 0.55;
    transition: opacity 0.4s ease;
  }
  .wheel-box.spinning .glow-ring { opacity: 1; }
  .wheel-box.ready .glow-ring {
    animation: glow-breathe 1500ms ease-in-out infinite alternate;
  }
  @keyframes glow-breathe {
    from { opacity: 0.42; transform: scale(0.98); }
    to   { opacity: 0.76; transform: scale(1.03); }
  }

  svg.wheel {
    position: relative;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5));
    transform: rotate(0deg);
    transition: none;
  }
  .wheel-box.ready {
    animation: wheel-idle 1800ms ease-in-out infinite alternate;
  }
  .wheel-box.spinning,
  .wheel-box.done {
    animation: none;
  }
  @keyframes wheel-idle {
    from { transform: translateZ(0) rotate(-1deg) scale(0.995); }
    to   { transform: translateZ(0) rotate(1deg) scale(1.01); }
  }

  svg.wheel.phase-fast {
    transition: transform 5500ms cubic-bezier(0.18, 0.62, 0.32, 0.99);
  }
  svg.wheel.phase-crawl {
    transition: transform 4200ms cubic-bezier(0.02, 0.78, 0.18, 1);
  }

  .sparkle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 18px 4px rgba(255, 199, 59, 0.55);
    opacity: 0;
    pointer-events: none;
    z-index: 3;
    animation: sparkle 1600ms ease-in-out infinite;
  }
  .sparkle:nth-child(4) { top: 12%; left: 18%; animation-delay: 0ms; }
  .sparkle:nth-child(5) { top: 26%; right: 6%; animation-delay: 460ms; }
  .sparkle:nth-child(6) { right: 18%; bottom: 10%; animation-delay: 920ms; }
  .sparkle:nth-child(7) { left: 7%; bottom: 28%; animation-delay: 1240ms; }
  .wheel-box.spinning .sparkle,
  .wheel-box.done .sparkle {
    display: none;
  }
  @keyframes sparkle {
    0%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0; }
    35%      { transform: scale(1) rotate(90deg); opacity: 1; }
    70%      { transform: scale(0.45) rotate(180deg); opacity: 0; }
  }

  .tap-hint {
    color: rgba(255, 255, 255, 0.84);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 18px rgba(255, 199, 59, 0.4);
    animation: hint-pulse 900ms ease-in-out infinite alternate;
  }
  .tap-hint.hide {
    display: none;
  }
  @keyframes hint-pulse {
    from { opacity: 0.62; transform: translateY(0); }
    to   { opacity: 1; transform: translateY(-2px); }
  }

  .click-ripple {
    position: fixed;
    left: var(--x);
    top: var(--y);
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 199, 59, 0.72);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.2);
    pointer-events: none;
    z-index: 90;
    animation: click-ripple 520ms ease-out forwards;
  }
  @keyframes click-ripple {
    to {
      transform: translate(-50%, -50%) scale(8);
      opacity: 0;
    }
  }

  .tease {
    color: #FFC73B;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    text-shadow: 0 0 16px rgba(255, 199, 59, 0.55);
    margin-top: 4px;
    animation: pulse 0.9s ease-in-out infinite alternate;
    display: none;
  }
  .tease.show { display: block; }
  @keyframes pulse {
    from { opacity: 0.7; transform: scale(1); }
    to   { opacity: 1;   transform: scale(1.04); }
  }

  .reveal {
    text-align: center;
    padding: 18px 22px;
    border-radius: 18px;
    border: 1px solid rgba(255, 199, 59, 0.35);
    background: linear-gradient(180deg, rgba(255, 199, 59, 0.12), rgba(248, 84, 93, 0.1));
    width: 100%;
    max-width: 320px;
    display: none;
    animation: pop 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.show { display: block; }
  .reveal.show .amount {
    animation: amount-glow 900ms ease-out 2;
  }
  @keyframes pop {
    from { transform: scale(0.85); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
  }
  @keyframes amount-glow {
    0%   { transform: scale(0.94); text-shadow: 0 0 0 rgba(255, 199, 59, 0); }
    55%  { transform: scale(1.08); text-shadow: 0 0 34px rgba(255, 199, 59, 0.75); }
    100% { transform: scale(1); text-shadow: 0 0 24px rgba(255, 199, 59, 0.45); }
  }
  .reveal .eyebrow {
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  .reveal .amount {
    color: #FFC73B;
    font-size: 36px;
    font-weight: 800;
    margin: 4px 0;
    text-shadow: 0 0 24px rgba(255, 199, 59, 0.45);
  }
  .reveal .note {
    color: rgba(255, 255, 255, 0.65);
    font-size: 12px;
  }

  .confetti {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 100;
    display: none;
  }
  .confetti.show { display: block; }
  .confetti .piece {
    position: absolute;
    top: -20px;
    width: 8px;
    height: 14px;
    border-radius: 1px;
    animation: fall var(--dur, 2200ms) cubic-bezier(0.4, 0, 0.6, 1) var(--delay, 0ms) forwards;
    opacity: 0;
  }
  @keyframes fall {
    0%   { transform: translateY(0)     rotate(var(--rot, 0deg)); opacity: 0; }
    10%  { opacity: 1; }
    100% { transform: translateY(120vh) rotate(var(--rot, 0deg)); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
  .tease,
    .tap-hint,
    .confetti,
    .glow-ring,
    .wheel-box::before,
    .wheel-box::after,
    .pointer,
    .sparkle,
    svg.wheel,
    .reveal.show .amount {
      animation: none !important;
    }
  }
</style>
</head>
<body>

<div class="container">
  <p class="subtitle">
    You've been chosen to spin our lucky wheel.
    Try your luck and claim your exclusive discount - only one spin per user.
  </p>

  <div class="wheel-box ready" id="wheelBox" role="button" aria-label="Spin the lucky wheel" tabindex="0">
    <div class="pointer"></div>
    <div class="glow-ring"></div>
    <svg class="wheel" id="wheel" viewBox="0 0 300 300"></svg>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
  </div>

  <p class="tease" id="tease">Almost there...</p>
  <p class="tap-hint" id="tapHint">Tap anywhere to spin</p>

  <div class="reveal" id="reveal">
    <p class="eyebrow">Success</p>
    <p class="amount" id="revealAmount">50% OFF</p>
    <p class="note">Applied at checkout - limited to this session only.</p>
  </div>
</div>

<div class="confetti" id="confetti"></div>

<script>
  const PRIZES = [
    { label: '10%', color: '#F8545D', winner: false },
    { label: '50%', color: '#FFC73B', winner: true  },
    { label: 'x',   color: '#7E0612', winner: false },
    { label: '20%', color: '#F8545D', winner: false },
    { label: '5%',  color: '#7E0612', winner: false },
    { label: 'TRY', color: '#FFC73B', winner: false },
  ];
  const SLICE = 360 / PRIZES.length;
  const SPIN_MS = 6800;
  const TEASE_AT_MS = 4600;

  const wheel = document.getElementById('wheel');
  const wheelBox = document.getElementById('wheelBox');
  const tapHint = document.getElementById('tapHint');
  const tease = document.getElementById('tease');
  const reveal = document.getElementById('reveal');
  const revealAmount = document.getElementById('revealAmount');
  const confetti = document.getElementById('confetti');

  const cx = 150, cy = 150, r = 140;
  let svgInner = '';
  PRIZES.forEach((p, i) => {
    const start = i * SLICE;
    const end = start + SLICE;
    const a1 = (start - 90) * Math.PI / 180;
    const a2 = (end - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
    const mid = ((start + end) / 2 - 90) * Math.PI / 180;
    const tx = cx + r * 0.6 * Math.cos(mid);
    const ty = cy + r * 0.6 * Math.sin(mid);

    svgInner += \`
      <path
        d="M \${cx} \${cy} L \${x1} \${y1} A \${r} \${r} 0 0 1 \${x2} \${y2} Z"
        fill="\${p.color}" stroke="rgba(0,0,0,0.25)" stroke-width="1"
      />
      <text
        x="\${tx}" y="\${ty}"
        fill="#fff"
        font-size="\${p.winner ? 22 : 16}"
        font-weight="\${p.winner ? 800 : 700}"
        text-anchor="middle"
        dominant-baseline="middle"
        transform="rotate(\${start + SLICE / 2} \${tx} \${ty})"
        style="text-shadow: 0 1px 2px rgba(0,0,0,0.6)"
      >\${p.label}</text>
    \`;
  });
  svgInner += \`
    <circle cx="\${cx}" cy="\${cy}" r="28" fill="#fff" />
    <circle cx="\${cx}" cy="\${cy}" r="10" fill="#42050A" />
  \`;
  wheel.innerHTML = svgInner;

  let spun = false;
  let spinning = false;

  function createClickRipple(x, y) {
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    ripple.style.setProperty('--x', \`\${x}px\`);
    ripple.style.setProperty('--y', \`\${y}px\`);
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  function spinWheel(event) {
    if (spun || spinning) return;
    spun = true;
    spinning = true;
    document.body.style.cursor = 'default';
    wheelBox.classList.remove('ready');
    tapHint.classList.add('hide');
    if (typeof event?.clientX === 'number' && typeof event?.clientY === 'number') {
      createClickRipple(event.clientX, event.clientY);
    }

    const winnerIndex = PRIZES.findIndex(p => p.winner);
    const boundaryAfterWinner = (winnerIndex + 1) * SLICE;
    const almostLostOffset = 0.8;
    const finalTarget = -(360 * 9 + boundaryAfterWinner - almostLostOffset);

    wheelBox.classList.add('spinning');
    wheel.classList.remove('phase-fast', 'phase-crawl');
    wheel.style.transform = 'rotate(0deg)';
    wheel.style.transition = 'none';
    void wheel.offsetWidth;

    const spinAnimation = wheel.animate(
      [
        {
          transform: 'rotate(0deg)',
          easing: 'cubic-bezier(0.08, 0.76, 0.02, 1)'
        },
        {
          transform: \`rotate(\${finalTarget}deg)\`
        }
      ],
      {
        duration: SPIN_MS,
        fill: 'forwards'
      }
    );

    const teaseTimer = setTimeout(() => {
      tease.classList.add('show');
    }, TEASE_AT_MS);

    spinAnimation.onfinish = () => {
      clearTimeout(teaseTimer);
      wheel.style.transform = \`rotate(\${finalTarget}deg)\`;
      spinAnimation.cancel();
      wheelBox.classList.remove('spinning');
      wheelBox.classList.add('done');
      wheel.classList.remove('phase-crawl');
      tease.classList.remove('show');
      spinning = false;

      const winner = PRIZES[winnerIndex];
      revealAmount.textContent = \`\${winner.label} OFF\`;
      reveal.classList.add('show');

      confetti.innerHTML = '';
      const colors = ['#FFC73B', '#F8545D', '#FFFFFF', '#FF8A1E', '#22C55E'];
      for (let i = 0; i < 30; i++) {
        const piece = document.createElement('span');
        piece.className = 'piece';
        piece.style.left = \`\${(i * 3.4 + (i % 5) * 1.5) % 100}%\`;
        piece.style.background = colors[i % colors.length];
        piece.style.setProperty('--delay', \`\${(i % 8) * 120}ms\`);
        piece.style.setProperty('--dur', \`\${1800 + ((i * 137) % 900)}ms\`);
        piece.style.setProperty('--rot', \`\${(i * 47) % 360}deg\`);
        confetti.appendChild(piece);
      }
      confetti.classList.add('show');
      setTimeout(() => confetti.classList.remove('show'), 4000);
    };
  }

  document.addEventListener('pointerdown', spinWheel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      spinWheel();
    }
  });
<\/script>

</body>
</html>
</div>`,cta:"Continue"},{id:"registration",type:"raw",name:"registration",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/PIgFOrQi.webp" alt=""><h1>Enter your &lt;span style=&quot;color: rgb(211, 34, 49);&quot;&gt;&lt;strong&gt;email&lt;/strong&gt; &lt;/span&gt;to create your AI video in minutes</h1><button class="ff-btn" type="button" data-cta>Continue</button><input class="ff-input" type="email" placeholder=" Your email"><p>Your information is 100% secure. Email is required to log in and access all app features. &lt;strong&gt;Please make sure your email is correct so you can access your account anytime.&lt;/strong&gt;</p></div>`,cta:"Continue",role:"engagement-insert"},{id:"copy-of-copy-of-paywall",type:"raw",name:"Copy of Copy of Paywall",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><div class="ff-row"><div class="ff-note">[Timer] Your discount is active for:
{{countdown}} — GET OFFER {{countdown}}</div></div><div style="position: relative; width: 100%; height: 330px; overflow: hidden; border-radius: 10px; background: #000;">
  <img 
    src="https://static.apero.vn/content/uploads/1_1_2531cf32df.png"
    alt=""
    style="width: 100%; height: 100%; object-fit: cover; filter: blur(10px) brightness(0.9); transform: scale(1.04);"
  >

  <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 85%, #000 100%); pointer-events: none;"></div>

  <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 40px; opacity: 0.85; pointer-events: none;">
    🔒
  </div>
</div><div class="ff-col"><p>&lt;span style=&quot;color: rgb(255, 255, 255);&quot;&gt;STEP 2: YOUR MEMORY IS READY&lt;/span&gt;</p><h1>Create without limits</h1></div><div class="ff-col"><div class="ff-plan">
    <div><b>1-WEEK</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$7.99</s> <b style="color:#e8eaf0">$3.99</b></div></div>
    <div style="text-align:right"><b>$0.57</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>1-YEAR</b> <span class="ff-badge">MOST POPULAR</span>
      <div style="color:#8a8f9c;font-size:12px"><s>$29.99</s> <b style="color:#e8eaf0">$14.99</b></div></div>
    <div style="text-align:right"><b>$0.04</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>Weekly</b> <span class="ff-badge">🔥MOST POPULAR</span>
      <div style="color:#8a8f9c;font-size:12px"><s>$19.99</s> <b style="color:#e8eaf0">$9.99</b></div></div>
    <div style="text-align:right"><b>$0.95</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>Monthly</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$39.99</s> <b style="color:#e8eaf0">$19.99</b></div></div>
    <div style="text-align:right"><b>$0.65</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>Yearly</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$99.99</s> <b style="color:#e8eaf0">$49.99</b></div></div>
    <div style="text-align:right"><b>$0.15</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-col"><div class="ff-note">[Checkout]</div><div class="ff-col"><div class="ff-note">[Checkout]</div></div></div><div class="ff-note">[Checkout]</div><div class="ff-col"><h1>✨ Your Full Access Pass</h1><ul class="ff-list"><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/dTuDz01L.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>Transform photos into stunning videos</span></li><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/U1oc3xjF.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>High quality, AI-powered results</span></li><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/FN7WDEZn.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>Access all advanced features</span></li><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/iYkyIhWR.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>Cancel anytime, no commitment</span></li></ul></div></div><img src="https://assets.fnlfx.com/01JMVWDXQA7NHCBG5SW3JPTFS8/iqy3Kq.webp" alt=""><div class="ff-col"><p>Not just a single photo - <br>get 20 templates included 📸</p><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/vjFeSM62.webp" alt=""></div><div class="ff-col"><p>⭐️ 4.7 Average rating on App Store </p><h1>Loved by Millions of<br>Happy Users 👇</h1><div class="ff-note">[Reviews]</div></div><p>After the selected plan ends, I accept that Artmind will automatically charge $9.99 weekly until I cancel. To cancel your subscription, please contact support by email support@artimind.com</p><p>After the selected plan ends, I accept that Artmind will automatically charge $19.99 monthly until I cancel. To cancel your subscription, please contact support by email support@artimind.com</p><p>After the selected plan ends, I accept that Artmind will automatically charge $49.99 every 3 year until I cancel. To cancel your subscription, please contact support by email support support@artimind.com</p><div class="ff-col"><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/vQ60EWeR.webp" alt=""><button class="ff-btn" type="button" data-cta>Term of Use</button><button class="ff-btn" type="button" data-cta>Privacy Policy</button><div class="ff-col"><p>Need help?</p><button class="ff-btn" type="button" data-cta>support@artimind.com</button></div></div></div>`,cta:"Term of Use",role:"paywall"},{id:"screen13-success",type:"raw",name:"Success_download",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><script src="https://cdn.brevo.com/js/sdk-loader.js" async><\/script>
<script>
    // Version: 2.0
    window.Brevo = window.Brevo || [];
    Brevo.push([
        "init",
        {
            client_key: "d4adjhlt0thesem7s9enuo5n",
        }
    ]);
    const curEmail = fox.inputs.getEmail()
    if (!!curEmail) {
        Brevo.push([
            "identify", {identifiers: {email_id: curEmail}}]);
        setTimeout(() => {
            Brevo.push(["page", "photoshoot thankyou page"]);
            Brevo.push([
                "track",
                    "photoshoot_thankyou_page",
                    {"email": curEmail},
                    {"data":{"project": "GlamAI"}}
            ]);
        }, 300)
        
    }
<\/script>
<img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/_stJsnZW.webp" alt=""><h1>Just one more step! </h1><ul class="ff-list"><li>•<span>Remember the email you used {{email}}</span></li><li>•<span>Click the button below to download the app</span></li><li>•<span>Open the app and tap &quot;Have an account? Sign in&quot;</span></li><li>•<span>Enter the email that you used for signing up {{email}}</span></li></ul><button class="ff-btn" type="button" data-cta>Download</button></div>`,cta:"Download",role:"successfull"}],_p={id:gs,concept:fs,product:us,owner:ms,status:hs,assigned:bs,cross_team:ys,imported_from:xs,import_mode:Is,funnel_id:As,title:Cs,screens:ws},$p=Object.freeze(Object.defineProperty({__proto__:null,assigned:bs,concept:fs,cross_team:ys,default:_p,funnel_id:As,id:gs,import_mode:Is,imported_from:xs,owner:ms,product:us,screens:ws,status:hs,title:Cs},Symbol.toStringTag,{value:"Module"})),vs="fm-deploy",Bs="fm-deploy",ks="languaso",Gs="hiepnv",Zs="draft",Ss=[],Ws=!1,Rs="funnel-monkey-deploy",Vs="bundle",Fs="FM Deploy (bundle)",Es=[{id:"imported-1",type:"raw",url:"/imported/fm-deploy/index.html"}],Ys=[{id:"lang",role:"engagement-question"},{id:"bridge",role:"showcase"},{id:"name",role:"engagement-question"},{id:"goal",role:"engagement-question"},{id:"topics",role:"engagement-question"},{id:"current",role:"engagement-question"},{id:"target",role:"engagement-question"},{id:"deadline",role:"engagement-question"},{id:"ready",role:"engagement-question"},{id:"speaking",role:"engagement-question"},{id:"loading",role:"loading"},{id:"result",role:"showcase"},{id:"email",role:"engagement-insert"},{id:"learningPath",role:"showcase"},{id:"paywall",role:"paywall"},{id:"success",role:"successfull"}],eg={id:vs,concept:Bs,product:ks,owner:Gs,status:Zs,assigned:Ss,cross_team:Ws,imported_from:Rs,import_mode:Vs,title:Fs,screens:Es,steps:Ys},tg=Object.freeze(Object.defineProperty({__proto__:null,assigned:Ss,concept:Bs,cross_team:Ws,default:eg,id:vs,import_mode:Vs,imported_from:Rs,owner:Gs,product:ks,screens:Es,status:Zs,steps:Ys,title:Fs},Symbol.toStringTag,{value:"Module"})),Ts="reunion-v1-copy",Ls="template",Ns="hiepnv",zs="Artimind — Reunion",Ms="reunion-dark",Xs=[{id:"showcase-1",type:"showcase",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",title:"❤️ Recreate the moments you thought were gone forever",video:"https://static.apero.vn/content/uploads/Video_2_3459c348c2.mp4",cta:"Continue"},{id:"showcase-2",type:"showcase",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",title:`We didn't say "I love you" much. But our hearts always knew.`,video:"https://static.apero.vn/content/uploads/Video_5_1cd6ffca8d.mp4",cta:"Continue"},{id:"showcase-3",type:"showcase",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",title:"Turn that quiet love into something they can feel",video:"https://static.apero.vn/content/uploads/Video_2_e8dfb65601.mp4",cta:"Continue"},{id:"question-1",type:"engagement-question",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",question:"Who is this special gift for?",subtitle:"Help us personalize your video's atmosphere",defaultOption:0,options:["🏠 My Beloved Family","👫🏻 My Parents / Grandparents","😇 A Loved One Who Has Passed","🙆🏻 Myself"],cta:"Continue"},{id:"insert-1",type:"engagement-insert",question:"What message would you like to leave on screen?",optional:!0,inputType:"text",placeholder:"Your message (optional)",helper:'Share your heartfelt words. E.g., "I love you and miss you every day, Mom."',cta:"Continue"},{id:"question-2",type:"engagement-question",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",question:"Which melody should drive the emotional heart of your video?",defaultOption:0,options:["🎻 Deep & Nostalgic","🌅 Warm & Peaceful","🎠 Childhood Music Box","🎉 Joyful Days","🔇 No music"],cta:"Continue"},{id:"upload-1",type:"engagement-upload",title:"Create a new moment from two photos with Artimind ✨",zones:["UPLOAD YOUR 1ST PHOTO","UPLOAD YOUR 2ND PHOTO"],note:"Not just a single photo — get 20 templates included 📸",cta:"CREATE NOW"},{id:"trust-1",type:"trust",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",counter:1486211,counterLabel:"Families reunited with their loved ones through Artimind ✨",mediaTitle:"Trusted by leading media:",cta:"Continue",logos:[]},{id:"testimonials",type:"testimonial-carousel",title:"Millions shared #Artimind to revive family memories",images:["assets/testimonials/fb-00.webp","assets/testimonials/fb-01.webp","assets/testimonials/fb-02.webp","assets/testimonials/fb-03.webp","assets/testimonials/fb-04.webp","assets/testimonials/fb-05.webp","assets/testimonials/fb-06.webp"],cta:"Continue"},{id:"loading",type:"loading",title:"Adding the final sparkle to your AI video…",body:"We're putting the final touches",video:"https://static.apero.vn/content/uploads/onboarding_b4b0fc5507.mp4",durationMs:5200,tasks:["Analyzing image details","Bringing your precious photos to life","Blending your heartfelt message"]},{id:"insert-2",type:"engagement-insert",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/PIgFOrQi.webp",question:"Enter your email to access your account",subtitle:"Your information is 100% secure. We don't sell your personal information.",note:"By submitting your email, you'll receive updates and everything we have for you.",inputType:"email",placeholder:"you@example.com",cta:"Continue"},{id:"lucky-wheel",type:"wheel",subtitle:"You've been chosen to spin our lucky wheel. Try your luck and claim your exclusive discount — only one spin per user.",cta:"Claim my discount"},{id:"paywall",type:"paywall",eyebrow:"🔒 STEP 2: YOUR MEMORY IS READY",title:"Create without limits",countdownMin:15,image:"https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/vjFeSM62.webp",benefits:["Transform photos into stunning videos","High quality, AI-powered results","Access all advanced features"],plans:[{id:"week",label:"Weekly",price:"$9.99",was:"$19.99",period:"/wk",perDay:"$0.95",featured:!0,badge:"🔥 MOST POPULAR"},{id:"month",label:"Monthly",price:"$19.99",was:"$39.99",period:"/mo",perDay:"$0.65"},{id:"year",label:"Yearly",price:"$49.99",was:"$99.99",period:"/yr",perDay:"$0.15"}],payment:!0,fullAccess:["Transform photos into stunning videos","High quality, AI-powered results","Access all advanced features","Cancel anytime, no commitment"],moneyBack:{title:"14-Day Money-Back Guarantee",body:"We're here to help you reach your goals and we stand by that. If you don't see real results within 14 days, we'll give you a full refund.",body2:"You can cancel your subscription anytime right in the app settings."},templatesTitle:"Not just a single photo — get 20 templates included 📸",rating:"⭐ 4.7 Average rating on App Store",ratingSub:"Loved by Millions of Happy Users 👇",footerLinks:["Term of Use","Privacy Policy"],supportEmail:"support@artimind.com",cta:"Continue",disclaimer:"Cancel anytime. Secured by Stripe.",templatesMedia:""},{id:"successfull",type:"successfull",title:"Just one more step!",cta:"Download",ctaUrl:"https://apps.apple.com/us/app/artimind-ai-video-generator/id6459831969",steps:["Remember the email you used {{email}}","Click the button below to download the app",'Open the app and tap "Have an account? Sign in"',"Enter the email that you used for signing up {{email}}"]}],Hs={providers:["card","paypal","paddle"],monkey:{apiBase:"https://funnel-monkey.aperogroup.ai/api/v1",publishableKey:"",projectSlug:"",funnelSlug:""},paypal:{env:"sandbox",clientId:"",planIds:{week:"P-0YP81096E3265833FNJBDWEA",month:"P-0GU77130BU460602MNJBDIHA",year:"P-4YW32730WT332283VNJBDIHI"}},paddle:{env:"sandbox",clientToken:"",priceIds:{week:"",month:"",year:""}}},Ds={collectUrl:"/__track"},Us="reunion",Js="draft",Ps=[],Os=!1,Ks="2026-07-03T02:46:01.099Z",js="2026-07-03T04:06:44.480Z",Qs="artimind",ng={id:Ts,kind:Ls,owner:Ns,title:zs,theme:Ms,screens:Xs,payment:Hs,tracking:Ds,concept:Us,status:Js,assigned:Ps,cross_team:Os,_created:Ks,_updated:js,product:Qs},ig=Object.freeze(Object.defineProperty({__proto__:null,_created:Ks,_updated:js,assigned:Ps,concept:Us,cross_team:Os,default:ng,id:Ts,kind:Ls,owner:Ns,payment:Hs,product:Qs,screens:Xs,status:Js,theme:Ms,title:zs,tracking:Ds},Symbol.toStringTag,{value:"Module"})),qs="reunion-v1",_s="template",$s="huynq",er="Artimind — Reunion",tr="reunion-dark",nr=[{id:"showcase-1",type:"showcase",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",title:"❤️ Recreate the moments you thought were gone forever",video:"https://static.apero.vn/content/uploads/Video_2_3459c348c2.mp4",cta:"Continue"},{id:"showcase-2",type:"showcase",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",title:`We didn't say "I love you" much. But our hearts always knew.`,video:"https://static.apero.vn/content/uploads/Video_5_1cd6ffca8d.mp4",cta:"Continue"},{id:"showcase-3",type:"showcase",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",title:"Turn that quiet love into something they can feel",video:"https://static.apero.vn/content/uploads/Video_2_e8dfb65601.mp4",cta:"Continue"},{id:"question-1",type:"engagement-question",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",question:"Who is this special gift for?",subtitle:"Help us personalize your video's atmosphere",defaultOption:0,options:["🏠 My Beloved Family","👫🏻 My Parents / Grandparents","😇 A Loved One Who Has Passed","🙆🏻 Myself"],cta:"Continue"},{id:"insert-1",type:"engagement-insert",question:"What message would you like to leave on screen?",optional:!0,inputType:"text",placeholder:"Your message (optional)",helper:'Share your heartfelt words. E.g., "I love you and miss you every day, Mom."',cta:"Continue"},{id:"question-2",type:"engagement-question",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",question:"Which melody should drive the emotional heart of your video?",defaultOption:0,options:["🎻 Deep & Nostalgic","🌅 Warm & Peaceful","🎠 Childhood Music Box","🎉 Joyful Days","🔇 No music"],cta:"Continue"},{id:"upload-1",type:"engagement-upload",title:"Create a new moment from two photos with Artimind ✨",zones:["UPLOAD YOUR 1ST PHOTO","UPLOAD YOUR 2ND PHOTO"],note:"Not just a single photo — get 20 templates included 📸",cta:"CREATE NOW"},{id:"trust-1",type:"trust",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/W0AQh5e0.webp",counter:1486211,counterLabel:"Families reunited with their loved ones through Artimind ✨",mediaTitle:"Trusted by leading media:",cta:"Continue",logos:[]},{id:"testimonials",type:"testimonial-carousel",title:"Millions shared #Artimind to revive family memories",images:["assets/testimonials/fb-00.webp","assets/testimonials/fb-01.webp","assets/testimonials/fb-02.webp","assets/testimonials/fb-03.webp","assets/testimonials/fb-04.webp","assets/testimonials/fb-05.webp","assets/testimonials/fb-06.webp"],cta:"Continue"},{id:"loading",type:"loading",title:"Adding the final sparkle to your AI video…",body:"We're putting the final touches",video:"https://static.apero.vn/content/uploads/onboarding_b4b0fc5507.mp4",durationMs:5200,tasks:["Analyzing image details","Bringing your precious photos to life","Blending your heartfelt message"]},{id:"insert-2",type:"engagement-insert",eyebrowImage:"https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/PIgFOrQi.webp",question:"Enter your email to access your account",subtitle:"Your information is 100% secure. We don't sell your personal information.",note:"By submitting your email, you'll receive updates and everything we have for you.",inputType:"email",placeholder:"you@example.com",cta:"Continue"},{id:"lucky-wheel",type:"wheel",subtitle:"You've been chosen to spin our lucky wheel. Try your luck and claim your exclusive discount — only one spin per user.",cta:"Claim my discount"},{id:"paywall",type:"paywall",eyebrow:"🔒 STEP 2: YOUR MEMORY IS READY",title:"Create without limits",countdownMin:15,image:"https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/vjFeSM62.webp",benefits:["Transform photos into stunning videos","High quality, AI-powered results","Access all advanced features"],plans:[{id:"week",label:"Weekly",price:"$9.99",was:"$19.99",period:"/wk",perDay:"$0.95",featured:!0,badge:"🔥 MOST POPULAR"},{id:"month",label:"Monthly",price:"$19.99",was:"$39.99",period:"/mo",perDay:"$0.65"},{id:"year",label:"Yearly",price:"$49.99",was:"$99.99",period:"/yr",perDay:"$0.15"}],payment:!0,fullAccess:["Transform photos into stunning videos","High quality, AI-powered results","Access all advanced features","Cancel anytime, no commitment"],moneyBack:{title:"14-Day Money-Back Guarantee",body:"We're here to help you reach your goals and we stand by that. If you don't see real results within 14 days, we'll give you a full refund.",body2:"You can cancel your subscription anytime right in the app settings."},templatesTitle:"Not just a single photo — get 20 templates included 📸",rating:"⭐ 4.7 Average rating on App Store",ratingSub:"Loved by Millions of Happy Users 👇",footerLinks:["Term of Use","Privacy Policy"],supportEmail:"support@artimind.com",cta:"Continue",disclaimer:"Cancel anytime. Secured by Stripe.",templatesMedia:""},{id:"successfull",type:"successfull",title:"Just one more step!",cta:"Download",ctaUrl:"https://apps.apple.com/us/app/artimind-ai-video-generator/id6459831969",steps:["Remember the email you used {{email}}","Click the button below to download the app",'Open the app and tap "Have an account? Sign in"',"Enter the email that you used for signing up {{email}}"]}],ir={providers:["card","paypal","paddle"],monkey:{apiBase:"https://funnel-monkey.aperogroup.ai/api/v1",publishableKey:"pk_8451b3ab9b5bbd0e06845a8c0f77f4bf431514fdcbffd579",projectSlug:"artimind",funnelSlug:""},paypal:{env:"sandbox",clientId:"",planIds:{week:"P-0YP81096E3265833FNJBDWEA",month:"P-0GU77130BU460602MNJBDIHA",year:"P-4YW32730WT332283VNJBDIHI"}},paddle:{env:"sandbox",clientToken:"",priceIds:{week:"",month:"",year:""}}},ar={collectUrl:"/__track"},or="reunion",sr="published",rr=[],lr=!0,dr="artimind",ag={id:qs,kind:_s,owner:$s,title:er,theme:tr,screens:nr,payment:ir,tracking:ar,concept:or,status:sr,assigned:rr,cross_team:lr,product:dr},og=Object.freeze(Object.defineProperty({__proto__:null,assigned:rr,concept:or,cross_team:lr,default:ag,id:qs,kind:_s,owner:$s,payment:ir,product:dr,screens:nr,status:sr,theme:tr,title:er,tracking:ar},Symbol.toStringTag,{value:"Module"})),cr="test",pr="test",gr="languaso",fr="hiepnv",ur="draft",mr=[],hr=!1,br="https://app.languoso.ai/hanglm_ver1_basic_en",yr="funnelfox-clone",xr="01KRJC807A97QYE63C3R8CSBPF",Ir="Languoso - English Speaking Practice",Ar=[{id:"beginning",type:"raw",name:"Beginning",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/Xvq48Qxf.webp" alt=""><h1>Welcome to &lt;span style=&quot;color: rgb(46, 153, 229);&quot;&gt;Languoso!&lt;/span&gt;</h1><p>Get your personalized plan and start speaking like a native!</p><button class="ff-btn" type="button" data-cta>START NOW</button><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/ekbZqSIr.webp" alt=""></div>`,cta:"START NOW"},{id:"trigger-fear",type:"raw",name:"Trigger fear",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/2HgE4s5M.webp" alt=""><div class="ff-row"><h1>Why is a &lt;span style=&quot;color: rgb(62, 164, 237);&quot;&gt;3-minute&lt;/span&gt; talk so hard for you?</h1></div><p>Years of studying, but you still can't speak one full sentence.</p><button class="ff-btn" type="button" data-cta>CONTINUE</button><!-- PRELOAD: paste into a Raw HTML element on an EARLY screen (e.g. the first question).
     Warms the model + 3D libs into cache so the mascot welcome screen loads instantly. -->
<link rel="preload" as="fetch" crossorigin="anonymous" href="https://static.apero.vn/content/uploads/mascot_arkit12_opt_95bb6ee927.glb">
<link rel="preload" as="script" href="https://cdn.jsdelivr.net/npm/three@0.140.0/build/three.min.js">
<script>
try { fetch('https://static.apero.vn/content/uploads/mascot_arkit12_opt_95bb6ee927.glb', { mode: 'cors', cache: 'force-cache' }); } catch (e) {}
<\/script>
</div>`,cta:"CONTINUE"},{id:"branding",type:"raw",name:"Branding",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>You are not alone</h1><p>&lt;span style=&quot;color: rgb(60, 160, 232);&quot;&gt;&lt;strong&gt;20,000,000+ learners&lt;/strong&gt;&lt;/span&gt; went from &quot;silent&quot; to &quot;fluent&quot; with our method.</p><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/docB_sBC.webp" alt=""><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/fsjWMftH.webp" alt=""><div class="ff-note">[Carousel]</div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/L7hEmSl7.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/SI5kI3jf.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/6UQ3QRLI.webp" alt=""></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"showcase"},{id:"usp",type:"raw",name:"USP",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>&lt;strong&gt;Stop &lt;/strong&gt;&lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;&lt;strong&gt;memorizing&lt;/strong&gt;&lt;/span&gt;&lt;strong&gt; English. &lt;br&gt;Start &lt;/strong&gt;&lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;&lt;strong&gt;using &lt;/strong&gt;&lt;/span&gt;&lt;strong&gt;it.&lt;/strong&gt;</h1><p>All you need is a &lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;&lt;strong&gt;personal AI Tutor&lt;/strong&gt;&lt;/span&gt; to master &lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;&lt;strong&gt;1,000+&lt;/strong&gt;&lt;/span&gt; daily topics.</p><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/OCyqdXNs.webp" alt=""><ul class="ff-list"><li>•<span>Available 24/7</span></li><li>•<span>Instant feedback</span></li><li>•<span>No pressure</span></li></ul><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE"},{id:"cta",type:"raw",name:"CTA",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/_Nf4nbRM.webp" alt=""><h1>&lt;strong&gt;Unlock your English potential in &lt;/strong&gt;&lt;span style=&quot;color: rgb(62, 164, 238);&quot;&gt;&lt;strong&gt;just 2 minutes&lt;/strong&gt;&lt;/span&gt;&lt;strong&gt;.&lt;/strong&gt;</h1><p>Get a smart learning path perfectly built for your goals.</p><button class="ff-btn" type="button" data-cta>START THE QUIZ</button></div>`,cta:"START THE QUIZ"},{id:"q-a-1",type:"raw",name:"Q&A 1",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>How old are you?</h1><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/oYWAREAJ.webp" alt=""><span>Age: 18 - 24</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/CAYV75C3.webp" alt=""><span>Age: 25 - 34</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/obFqMLBW.webp" alt=""><span>Age: 35 - 44</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/c8G6CXkn.webp" alt=""><span>Age: 45+</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"q-a-2",type:"raw",name:"Q&A 2",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>What is your mother tongue?</h1><div class="ff-opts" style="grid-template-columns:repeat(1,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KVQE866SYXYMWP2F02RCMZN6/q0mx2ttm.webp" alt=""><span>English</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KVQE866SYXYMWP2F02RCMZN6/uaad_CRQ.webp" alt=""><span>العربية</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/var8U-IU.webp" alt=""><span>Português (Portugal)</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/lxY4wvGa.webp" alt=""><span>Português (Brazil)</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/BtMZgsY2.webp" alt=""><span>Chinese</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/_3Rpau5G.webp" alt=""><span>Turkish</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KVW7E3SNWPKH055SYWGZBMQK/wkwstiei.webp" alt=""><span>Deutsch</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/TMvdc7iC.webp" alt=""><span>Melayu</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/wVR8gDab.webp" alt=""><span>हिन्दी</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/m3XjnQ9L.webp" alt=""><span>Bahasa Indonesia</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/lOfPtI4B.webp" alt=""><span>Español</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/cOOyJgzA.webp" alt=""><span>Français</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/8lXJRsYB.webp" alt=""><span>Русский</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/nYA7gKIu.webp" alt=""><span>Nederlands</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/z8VccBUR.webp" alt=""><span>Vietnamese</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/GuyGhR3Q.webp" alt=""><span>한국어</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/j_P_dIBu.webp" alt=""><span>Italiano</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/MFZhM9mv.webp" alt=""><span>ภาษาไทย</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/MUWJLS_p.webp" alt=""><span>Filipina</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KT8D3HEKW1RQ4G6XQMR4PY3K/iwbTV9pZ.webp" alt=""><span>日本</span></div></div><button class="ff-btn" type="button" data-cta>WEITER</button></div>`,cta:"WEITER",role:"engagement-question"},{id:"q-a-4",type:"raw",name:"Q&A 4",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>What are you into? </h1><p>&lt;span style=&quot;color: rgb(0, 0, 0);&quot;&gt;&lt;em&gt;Pick 3 topics to start&lt;/em&gt;&lt;/span&gt;</p><div class="ff-opts" style="grid-template-columns:repeat(3,1fr)"><div class="ff-opt"><span>Cooking</span></div><div class="ff-opt"><span>Social Media</span></div><div class="ff-opt"><span>Travelling</span></div><div class="ff-opt"><span>Shopping</span></div><div class="ff-opt"><span>Cinema</span></div><div class="ff-opt"><span>Gaming</span></div><div class="ff-opt"><span>Technology</span></div><div class="ff-opt"><span>Sports</span></div><div class="ff-opt"><span>Music</span></div><div class="ff-opt"><span>Healthcare</span></div><div class="ff-opt"><span>Fashion</span></div><div class="ff-opt"><span>Culture</span></div><div class="ff-opt"><span>History</span></div><div class="ff-opt"><span>Arts</span></div><div class="ff-opt"><span>Finance</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"chem",type:"raw",name:"Chêm",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><script>window.MW_LANG='en';window.MW_PREBAKED='data:audio/mpeg;base64,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';<\/script>
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/build/three.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/examples/js/loaders/GLTFLoader.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/examples/js/loaders/DRACOLoader.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/examples/js/loaders/RGBELoader.js"><\/script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap');
#mascot-welcome { font-family:'Bricolage Grotesque',-apple-system,system-ui,sans-serif; width:100%; max-width:none; margin:0; padding:0; text-align:center; }
.mw-stage { position:relative; border-radius:0; overflow:hidden; background:radial-gradient(ellipse at 50% 42%, rgb(45,110,195) 0%, rgb(24,58,120) 75%); }
.mw-canvas { display:block; width:100%; height:100dvh; touch-action:manipulation; cursor:pointer; }
.mw-bubble { position:absolute; left:50%; bottom:100pt; transform:translateX(-50%) translateY(6px); width:80vw; background:#fff; color:#252525; border:1px solid #E6EEFB; border-radius:18px; padding:12px 16px; box-shadow:0 8px 22px rgba(40,80,140,.18); font-size:15px; font-weight:600; line-height:1.35; pointer-events:none; opacity:0; transition:opacity .336s ease, transform .336s ease; }
.mw-bubble.mw-show { opacity:1; transform:translateX(-50%) translateY(0); }
.mw-bubble:after { content:''; position:absolute; left:50%; top:-9px; transform:translateX(-50%); border:9px solid transparent; border-bottom-color:#fff; }
.mw-talk { display:none; }
.mw-talk-ic { font-size:17px; }
.mw-talk.mw-playing { opacity:.7; }
</style>
<div id="mascot-welcome"></div>
<script src="data:text/javascript;charset=utf-8;base64,LyogRnVubmVsRm94IC0gTWFzY290IHdlbGNvbWUgd2lkZ2V0ICh2YW5pbGxhIFRocmVlLmpzOyBleHBlY3RzIGdsb2JhbCBUSFJFRSArCiAqIFRIUkVFLkdMVEZMb2FkZXIgKyBUSFJFRS5EUkFDT0xvYWRlciArIFRIUkVFLlJvb21FbnZpcm9ubWVudCBsb2FkZWQgZmlyc3QpLgogKiBMb2FkcyB0aGUgc2FtZSBHTEIgdGhlIHdlYi9hcHAgdXNlLCBwbGF5cyBXYXZpbmcgT05DRSB0aGVuIGEgZ2VudGxlIFNwaW5lMDIKICogYnJlYXRoaW5nIGlkbGUgKGxpa2UgdGhlIHdlYiksIGhvbGRzIGEgaGFwcHkgc21pbGUsIHR5cGVzIGEgcGVyc29uYWxpemVkCiAqIGdyZWV0aW5nLCBhbmQgb24gVEFQIHNwZWFrcyBpdCB3aXRoIGxpcC1zeW5jICh2aXNlbWVzIGZyb20gdmlzZW1lLnRzKS4KICogQ29udGFpbmVyOiBlbGVtZW50IGlkPSJtYXNjb3Qtd2VsY29tZSIuICovCihmdW5jdGlvbiAoKSB7CiAgdmFyIE1PREVMX1VSTCA9ICdodHRwczovL3N0YXRpYy5hcGVyby52bi9jb250ZW50L3VwbG9hZHMvbWFzY290X2Fya2l0MTJfb3B0Xzk1YmI2ZWU5MjcuZ2xiJzsKICB2YXIgRFJBQ09fUEFUSCA9ICdodHRwczovL3d3dy5nc3RhdGljLmNvbS9kcmFjby92ZXJzaW9uZWQvZGVjb2RlcnMvMS41LjcvJzsKICB2YXIgTUFTQ09UX05BTUUgPSAnQml6Ym8nOwogIC8vIEJpbGluZ3VhbDogdGhlIERFIGZ1bm5lbCBwYXN0ZSBzZXRzIHdpbmRvdy5NV19MQU5HPSdkZScgYmVmb3JlIHRoaXMgc2NyaXB0IOKGkiBCaXpibyBncmVldHMKICAvLyBpbiBHZXJtYW4gKHNwb2tlbiArIGxpcC1zeW5jZWQpIHdpdGggYW4gRW5nbGlzaCBsaW5lIHNob3duIGJlbmVhdGguIEFueSBvdGhlciB2YWx1ZSA9IEVuZ2xpc2gKICAvLyBvbmx5LCBzbyBldmVyeSBleGlzdGluZyBsYW5ndWFnZSBmdW5uZWwgaXMgdW50b3VjaGVkLgogIHZhciBNV19MQU5HID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NV19MQU5HKSA/IFN0cmluZyh3aW5kb3cuTVdfTEFORykudG9Mb3dlckNhc2UoKSA6ICdlbic7CiAgLy8gRGlhZ25vc3RpYyBvdmVybGF5IChzZXQgd2luZG93Lk1XX0RFQlVHPTEgb3IgYWRkID9td2RlYnVnPTEpIOKAlCBwcmludHMgbGl2ZSBtYXNjb3Qgc3RhdGUgb24KICAvLyBzY3JlZW4gc28gd2UgY2FuIHNlZSwgb24gdGhlIHJlYWwgZnVubmVsLCB3aHkgbGlwLXN5bmMvYXV0by1hZHZhbmNlIG1pZ2h0IG5vdCBmaXJlLgogIHZhciBNV19ERUJVRyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTVdfREVCVUcpIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIC9bPyZdbXdkZWJ1Zz0xLy50ZXN0KGxvY2F0aW9uLnNlYXJjaCkpOwogIC8vIE5lY2stbGVuZ3RoIHR1bmluZy4gTWlycm9ycyBNYXNjb3QudHN4Ojk4NC05OTUg4oCUIHRyYW5zbGF0ZXMgTmVja1R3aXN0MDEueSAocm9vdCBvZiB0aGUKICAvLyBuZWNrIGNoYWluKSBzbyB0aGUgd2hvbGUgbmVjaytoZWFkIHNoaWZ0cyB1cCB3aGlsZSBzaG91bGRlcnMvc3BpbmUvYXJtcyBzdGF5IHB1dC4KICAvLyAwLjAzID0gd2ViJ3MgdmFsdWUgKHN1YnRsZSkuIEJ1bXAgdG8gMC4wNi0wLjA4IGZvciBhIG1vcmUgZ2lyYWZmZS1saWtlIHNpbGhvdWV0dGUuCiAgdmFyIE5FQ0tfTElGVCA9IDAuMDM7CiAgLy8gUG9zdC1zcGVlY2ggZ2VzdHVyZXMuIFBsYXllZCBpbiBvcmRlciBvbmNlIHRoZSBUVFMgYXVkaW8gZmluaXNoZXMuIER1cmF0aW9ucyArIGN1cnZlcwogIC8vIHBvcnRlZCBmcm9tIE1hc2NvdC50c3ggKG5vZF95ZXM6IDE2MTEsIGdlc3R1cmVfb3Blbl9wYWxtOiAxNjE2LzE5MTApLgogIHZhciBHRVNUVVJFUyA9IHsgbm9kX3llczogeyBkdXJhdGlvbjogMC45IH0sIGdlc3R1cmVfb3Blbl9wYWxtOiB7IGR1cmF0aW9uOiAxLjQgfSB9OwogIHZhciBQT1NUX1NQRUVDSF9HRVNUVVJFUyA9IFsnbm9kX3llcycsICdnZXN0dXJlX29wZW5fcGFsbSddOwogIC8vIEF1dG8tYWR2YW5jZTogYWZ0ZXIgQml6Ym8gZmluaXNoZXMgc3BlYWtpbmcgKyB0aGUgb3Blbi1wYWxtIGdlc3R1cmUsIG1vdmUgdG8gdGhlCiAgLy8gbmV4dCBGdW5uZWxGb3ggc2NyZWVuLiBTZXQgQVVUT19BRFZBTkNFPWZhbHNlIHRvIGtlZXAgdGhlIG1hbnVhbCBOZXh0IGJ1dHRvbi4KICB2YXIgQVVUT19BRFZBTkNFID0gdHJ1ZTsKICB2YXIgQURWQU5DRV9ERUxBWV9NUyA9IDcwMDsgICAvLyBiZWF0IGFmdGVyIHRoZSBvcGVuLXBhbG0gc2V0dGxlcyBiZWZvcmUgZ29OZXh0KCkKICAvLyBJbmhvdXNlIFRUUyAoREVWKSDigJQgcHJvZCAvYXBpL3YxL3R0cyBpcyBicm9rZW4gKGl0cyBpbnRlcm5hbCB3b3JrZmxvdyBjYWxsIG5lZWRzCiAgLy8geC1hcGktc2lnbmF0dXJlLCBFUlIxMTApICsgd3JvbmcgZGVmYXVsdCB2b2ljZS4gUmV2ZXJ0ZWQgdG8gdGhlIGRldiBhaS13cmFwcGVyCiAgLy8gc29mdC1mYXRoZXIgdm9pY2UgdW50aWwgYmFja2VuZCBmaXhlcyBwcm9kIC9hcGkvdjEvdHRzLgogIHZhciBUVFNfVVJMID0gJ2h0dHBzOi8vYWktd3JhcHBlci1zZXJ2aWNlLmRldi5hcGVyb2dyb3VwLmFpL2FwaS92NS90dHMnOwogIHZhciBUVFNfUkVGID0gJ3VwbG9hZHMvZ3JhdGVmdWxfc29mdF9mYXRoZXIubXAzJzsKICB2YXIgVFRTX1JBVEUgPSAwLjg1OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGF5YmFjayBzcGVlZDogMS4wID0gbmF0dXJhbCwgMC44NSA9IDE1JSBzbG93ZXIsIDAuNzUgPSBhIHRvdWNoIG1vcmUgY2hpbGwKICAvLyBQUkVCQUtFRCBncmVldGluZyDigJQgSGFuZ0xNJ3MgZ3JlZXRpbmcgaXMgbmFtZS1sZXNzLCBzbyB0aGUgc29mdC1mYXRoZXIgY2xpcCBpcyBnZW5lcmF0ZWQKICAvLyBhaGVhZCBvZiB0aW1lIGFuZCBpbmplY3RlZCBwZXIgbGFuZ3VhZ2UgYXMgd2luZG93Lk1XX1BSRUJBS0VEICgnZGF0YTphdWRpby9tcGVnO2Jhc2U2NCwuLi4nKS4KICAvLyBXaGVuIHByZXNlbnQsIHByZXBhcmVUVFMoKSBwbGF5cyBpdCBkaXJlY3RseSB3aXRoIFpFUk8gbmV0d29yayBhdCBydW50aW1lIChwcm9kLXNhZmUg4oCUIG5vCiAgLy8gZGVwZW5kZW5jeSBvbiB0aGUgZGV2IGFpLXdyYXBwZXIpLiBJZiBhYnNlbnQsIGl0IGZhbGxzIGJhY2sgdG8gdGhlIGxpdmUgVFRTX1VSTCBmZXRjaCBiZWxvdy4KICB2YXIgUFJFQkFLRUQgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1XX1BSRUJBS0VEKSA/IHdpbmRvdy5NV19QUkVCQUtFRCA6IG51bGw7CiAgLy8gaU9TIFNhZmFyaSBwbGF5cyBhIGJsb2I6IFVSTCBtb3JlIHJlbGlhYmx5IHRoYW4gYSBodWdlIGJhc2U2NCBkYXRhOiBVUkwg4oCUIGNvbnZlcnQgdGhlIHByZWJha2VkCiAgLy8gY2xpcCBvbmNlIHNvIGF1dG9wbGF5IGlzbid0IGJsb2NrZWQgYnkgdGhlIGRhdGEtVVJJLiBGYWxscyBiYWNrIHRvIHRoZSByYXcgZGF0YS1VUkkgb24gZmFpbHVyZS4KICBmdW5jdGlvbiBwcmViYWtlZEJsb2JVcmwoKSB7CiAgICBpZiAoIVBSRUJBS0VEKSByZXR1cm4gbnVsbDsKICAgIHRyeSB7CiAgICAgIHZhciBtID0gL15kYXRhOihbXjtdKyk7YmFzZTY0LCguKikkLy5leGVjKFBSRUJBS0VEKTsKICAgICAgaWYgKCFtKSByZXR1cm4gUFJFQkFLRUQ7CiAgICAgIHZhciBiaW4gPSBhdG9iKG1bMl0pLCBuID0gYmluLmxlbmd0aCwgYXJyID0gbmV3IFVpbnQ4QXJyYXkobik7CiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTsKICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2Fycl0sIHsgdHlwZTogbVsxXSB9KSk7CiAgICB9IGNhdGNoIChlKSB7IHJldHVybiBQUkVCQUtFRDsgfQogIH0KICB2YXIgVFRTX0FVVE9QTEFZX0RFTEFZX01TID0gNTAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXVzZSBiZXR3ZWVuIHdhdmUtZW5kcyBhbmQgbWFzY290LXNwZWFrcyAoYXV0b3BsYXkgb25seTsgbWFudWFsIHRhcHMgYXJlIGluc3RhbnQpCgogIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogIC8vIENBTUVSQSDigJQgdHdlYWsgdGhlc2UuIFRoZSBtb2RlbCBpcyBhdXRvLW5vcm1hbGl6ZWQgdG8gMS41bSB0YWxsLAogIC8vIGNlbnRyZWQgb24gd29ybGQgb3JpZ2luLiBTbyBpbiB0aGlzIHNwYWNlOgogIC8vICAgIHkgPSAgKzAuNzUgIHRvcCBvZiBoZWFkCiAgLy8gICAgeSA9ICArMC42NSAgZXllcyAoYXBwcm94KQogIC8vICAgIHkgPSAgKzAuNDUgIGNoZXN0CiAgLy8gICAgeSA9ICArMC4xMCAgbmF2ZWwKICAvLyAgICB5ID0gICAwLjAwICBoaXBzIC8gYm9keSBjZW50cmUKICAvLyAgICB5ID0gIC0wLjc1ICBmZWV0CiAgLy8gICAgeCA9ICAgMCAgICAgY2VudHJlZCBob3Jpem9udGFsbHkKICAvLyAgICB6ID0gICAwICAgICBtb2RlbCBvcmlnaW47IGNhbWVyYSBzaXRzIGF0ICt6IChpbiBmcm9udCBvZiBtYXNjb3QpCiAgLy8gQ0FNX0xPT0sueSA9PSBDQU1fUE9TLnkgIC0+IGhvcml6b250YWwgbG9vawogIC8vIENBTV9MT09LLnkgPCAgQ0FNX1BPUy55ICAtPiBsb29rIERPV04gKGNhbWVyYSBhYm92ZSwgdGFyZ2V0IGxvd2VyKQogIC8vIENBTV9MT09LLnkgPiAgQ0FNX1BPUy55ICAtPiBsb29rIFVQICAgKGNhbWVyYSBiZWxvdywgdGFyZ2V0IGhpZ2hlcikKICAvLyBDQU1fUE9TLnogbGFyZ2VyIC0+IGZ1cnRoZXIgYXdheSAobW9yZSB6b29tZWQgb3V0KQogIC8vIENBTV9GT0NBTF9NTSA9IGxlbnMgZm9jYWwgbGVuZ3RoIGluIG1tIG9uIGEgZnVsbC1mcmFtZSAoMzZ4MjQpIGJvZHkuIENvbW1vbiByZWZlcmVuY2VzOgogIC8vICAgMjQ9d2lkZSBhbmdsZSAgIDM1PW5hdHVyYWwgKH53ZWIncyAzOGRlZykgICA1MD1ub3JtYWwgICA4NT1wb3J0cmFpdCAgIDEzNT10ZWxlcGhvdG8KICAvLyAgIHNtYWxsZXIgbW0gLT4gd2lkZXIgYW5nbGUsIG1vcmUgaW4gZnJhbWUsIG1vcmUgbm9zZS1zdHJldGNoIGRpc3RvcnRpb24KICAvLyAgIGxhcmdlciAgbW0gLT4gdGlnaHRlciB0ZWxlcGhvdG8gY3JvcCwgZmxhdHRlciBwZXJzcGVjdGl2ZSAoY29tcGVuc2F0ZSBieSBzdGVwcGluZyBDQU1fUE9TLnogYmFjaykKICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICB2YXIgQ0FNX0ZPQ0FMX01NID0gODU7ICAgICAgICAgICAgICAgICAgICAvLyA4NW1tIHBvcnRyYWl0IGxlbnMgfiAxNi4xZGVnIHZlcnQgRk9WIChsb2NrZWQgMjAyNi0wNi0wMikKICB2YXIgQ0FNX1BPUyAgICAgID0gWzAsIDAsIDMuODVdOyAgICAgICAgICAvLyBjZW50cmVkIGF0IGJvZHkgb3JpZ2luLCBwdWxsZWQgYmFjawogIHZhciBDQU1fTE9PSyAgICAgPSBbMC4wMSwgMC4zMSwgLTAuMDJdOyAgIC8vIGdlbnRsZSB1cC1sb29rIHRvd2FyZCBjaGVzdAogIC8vIEhlbHBlcjogdmVydGljYWwgRk9WIChkZWcpIGZyb20gYSBmdWxsLWZyYW1lIGZvY2FsIGxlbmd0aCAobW0pLiBTZW5zb3IgaGVpZ2h0ID0gMjRtbS4KICBmdW5jdGlvbiBmb3ZGcm9tTW0obW0pIHsgcmV0dXJuIDIgKiBNYXRoLmF0YW4oMTIgLyBtbSkgKiAxODAgLyBNYXRoLlBJOyB9CgogIC8vIEdyZWV0aW5nIHBlciBsYW5ndWFnZS4gRU4gaXMgdGhlIHNlY29uZGFyeSBsaW5lIHNob3duIGJlbmVhdGggZm9yIGFueSBub24tRW5nbGlzaCBmdW5uZWwuCiAgdmFyIEdSRUVUID0gewogICAgZW46IGZ1bmN0aW9uICh3KSB7IHJldHVybiAnTmljZSB0byBtZWV0IHlvdScgKyB3ICsgIi4gSSdtICIgKyBNQVNDT1RfTkFNRSArICcgLSB5b3VyIHByaXZhdGUgQUkgVHV0b3IuIFRvIGtpY2sgdGhpbmdzIG9mZiwgdGVsbCBtZSBhYm91dCB5b3VyIGdvYWxzISc7IH0sCiAgICBkZTogZnVuY3Rpb24gKHcpIHsgcmV0dXJuICdTY2jDtm4sIGRpY2gga2VubmVuenVsZXJuZW4nICsgdyArICchIEljaCBiaW4gJyArIE1BU0NPVF9OQU1FICsgJyAtIGRlaW4gcGVyc8O2bmxpY2hlciBLSS1UdXRvci4gRXJ6w6RobCBtaXIgenVtIEVpbnN0aWVnIHZvbiBkZWluZW4gWmllbGVuISc7IH0sCiAgICBlczogZnVuY3Rpb24gKHcpIHsgcmV0dXJuICfCoUVuY2FudGFkbyBkZSBjb25vY2VydGUnICsgdyArICchIFNveSAnICsgTUFTQ09UX05BTUUgKyAnLCB0dSB0dXRvciBkZSBpbmdsw6lzIGNvbiBJQS4gUGFyYSBlbXBlemFyLCBjdcOpbnRhbWUgdHVzIG9iamV0aXZvcy4nOyB9LAogICAgZnI6IGZ1bmN0aW9uICh3KSB7IHJldHVybiAnUmF2aSBkZSB0ZSByZW5jb250cmVyJyArIHcgKyAnICEgSmUgc3VpcyAnICsgTUFTQ09UX05BTUUgKyAnLCB0b24gdHV0ZXVyIGRcJ2FuZ2xhaXMgSUEuIFBvdXIgY29tbWVuY2VyLCBwYXJsZS1tb2kgZGUgdGVzIG9iamVjdGlmcy4nOyB9LAogICAgYXI6IGZ1bmN0aW9uICh3KSB7IHJldHVybiAn2LPYudmK2K8g2KjZhNmC2KfYptmDJyArIHcgKyAnISDYo9mG2KcgJyArIE1BU0NPVF9OQU1FICsgJ9iMINmF2K/YsdmR2LMg2KfZhNil2YbYrNmE2YrYstmK2Kkg2KjYp9mE2LDZg9in2KEg2KfZhNin2LXYt9mG2KfYudmKLiDZhNmG2KjYr9ij2Iwg2KPYrtio2LHZhtmKINi52YYg2KPZh9iv2KfZgdmDLic7IH0sCiAgICB2aTogZnVuY3Rpb24gKHcpIHsgcmV0dXJuICdS4bqldCB2dWkgxJHGsOG7o2MgZ+G6t3AgYuG6oW4nICsgdyArICcuIE3DrG5oIGzDoCAnICsgTUFTQ09UX05BTUUgKyAnIC0gZ2lhIHPGsCBBSSByacOqbmcgY+G7p2EgYuG6oW4uIMSQ4buDIGLhuq90IMSR4bqndSwgaMOjeSBr4buDIGNobyBtw6xuaCBuZ2hlIHbhu4EgbeG7pWMgdGnDqnUgY+G7p2EgYuG6oW4gbmjDqSEnOyB9LAogICAgcHQ6IGZ1bmN0aW9uICh3KSB7IHJldHVybiAnUHJhemVyIGVtIGNvbmhlY2VyIHZvY8OqJyArIHcgKyAnLiBFdSBzb3UgbyAnICsgTUFTQ09UX05BTUUgKyAnIC0gbyBzZXUgdHV0b3IgZGUgaW5nbMOqcyBjb20gSUEuIFBhcmEgY29tZcOnYXIsIGNvbnRlLW1lIHNvYnJlIG9zIHNldXMgb2JqZXRpdm9zISc7IH0sCiAgICB0aDogZnVuY3Rpb24gKHcpIHsgcmV0dXJuICfguKLguLTguJnguJTguLXguJfguLXguYjguYTguJTguYnguKPguLnguYnguIjguLHguIEnICsgdyArICcg4LiJ4Lix4LiZ4LiK4Li34LmI4LitICcgKyBNQVNDT1RfTkFNRSArICcg4LiV4Li04Lin4LmA4LiV4Lit4Lij4LmMIEFJIOC4quC5iOC4p+C4meC4leC4seC4p+C4guC4reC4h+C4hOC4uOC4kyDguKHguLLguYDguKPguLTguYjguKHguIHguLHguJnguYDguKXguKIg4LmA4Lil4LmI4Liy4LmA4Lib4LmJ4Liy4Lir4Lih4Liy4Lii4LiC4Lit4LiH4LiE4Li44LiT4LmD4Lir4LmJ4LiJ4Lix4LiZ4Lif4Lix4LiH4Lir4LiZ4LmI4Lit4Lii4Liq4Li0ISc7IH0sCiAgICBqYTogZnVuY3Rpb24gKHcpIHsgcmV0dXJuICfjga/jgZjjgoHjgb7jgZfjgaYnICsgdyArICfjgILnp4Hjga8nICsgTUFTQ09UX05BTUUgKyAn44CB44GC44Gq44Gf5bCC55So44GuQUnjg4Hjg6Xjg7zjgr/jg7zjgafjgZnjgILjgb7jgZrjga/jgIHjgYLjgarjgZ/jga7nm67mqJnjgpLogZ7jgYvjgZvjgabjgY/jgaDjgZXjgYTvvIEnOyB9LAogICAga286IGZ1bmN0aW9uICh3KSB7IHJldHVybiAn66eM64KY7IScIOuwmOqwgOybjOyalCcgKyB3ICsgJy4g7KCA64qUIOyXrOufrOu2hOydmCDqsJzsnbggQUkg7Yqc7YSwICcgKyBNQVNDT1RfTkFNRSArICfsmIjsmpQuIOyLnOyeke2VmOq4sCDsoITsl5Ag66qp7ZGc66W8IOuTpOugpOyjvOyEuOyalCEnOyB9CiAgfTsKICAvLyBwcmltYXJ5ID0gc3Bva2VuICsgbGlwLXN5bmNlZCBsaW5lICh0aGUgZnVubmVsJ3MgbGFuZ3VhZ2UpOyBzZWNvbmRhcnkgPSB0aGUgRW5nbGlzaCBsaW5lIHNob3duIGJlbmVhdGggKG5vbi1FTiBmdW5uZWxzKQogIGZ1bmN0aW9uIGdyZWV0aW5nKG5hbWUpIHsgdmFyIHcgPSBuYW1lID8gKCcsICcgKyBuYW1lKSA6ICcnOyByZXR1cm4gKEdSRUVUW01XX0xBTkddIHx8IEdSRUVULmVuKSh3KTsgfQogIGZ1bmN0aW9uIGdyZWV0aW5nQWx0KG5hbWUpIHsgdmFyIHcgPSBuYW1lID8gKCcsICcgKyBuYW1lKSA6ICcnOyByZXR1cm4gKE1XX0xBTkcgIT09ICdlbicgJiYgR1JFRVRbTVdfTEFOR10pID8gR1JFRVQuZW4odykgOiAnJzsgfQogIGZ1bmN0aW9uIHJlYWROYW1lKCkgewogICAgdHJ5IHsKICAgICAgdmFyIGYgPSB3aW5kb3cuZm94ICYmIHdpbmRvdy5mb3guaW5wdXRzOyBpZiAoIWYpIHJldHVybiAnJzsKICAgICAgdmFyIHYgPSAoZi5nZXQgJiYgKGYuZ2V0KCd1c2VyX25hbWUnKSB8fCBmLmdldCgnbmFtZScpKSkgfHwgJyc7CiAgICAgIGlmICh2ICYmIHR5cGVvZiB2ID09PSAnb2JqZWN0JykgdiA9IHYudmFsdWU7CiAgICAgIHJldHVybiAodiB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7CiAgICB9IGNhdGNoIChlKSB7IHJldHVybiAnJzsgfQogIH0KCiAgLyogLS0tLSB2aXNlbWVzIChwb3J0IG9mIHZpc2VtZS50cykgLS0tLSAqLwogIGZ1bmN0aW9uIHp3KCkgeyByZXR1cm4geyBqYXdPcGVuOiAwLCBtb3V0aENsb3NlOiAwLCBtb3V0aFNtaWxlOiAwLCBtb3V0aEZ1bm5lbDogMCwgbW91dGhQdWNrZXI6IDAsIG1vdXRoU2hydWdVcHBlcjogMCwgbW91dGhMb3dlckRvd246IDAsIG1vdXRoVXBwZXJVcDogMCwgbW91dGhTdHJldGNoOiAwLCBtb3V0aERpbXBsZTogMCwgbW91dGhQcmVzczogMCwgbW91dGhSb2xsTG93ZXI6IDAsIG1vdXRoUm9sbFVwcGVyOiAwIH07IH0KICBmdW5jdGlvbiBtayhvKSB7IHZhciB3ID0gencoKTsgZm9yICh2YXIgayBpbiBvKSB3W2tdID0gb1trXTsgcmV0dXJuIHc7IH0KICB2YXIgVklTID0gewogICAgc2lsZW5jZTogbWsoeyBqYXdPcGVuOiAwLjA1IH0pLCAgIC8vIGlkbGU6IHNsaWdodGx5IHBhcnRlZCBsaXBzLCBubyBhY3RpdmUgbW91dGhDbG9zZSBwcmVzcyAobWF0Y2hlcyB3ZWIgZmVlbCkKICAgIGJpbGFiaWFsOiBtayh7IG1vdXRoQ2xvc2U6IDAuNjAsIG1vdXRoUHJlc3M6IDAuMjUsIG1vdXRoUm9sbExvd2VyOiAwLjEwLCBtb3V0aFJvbGxVcHBlcjogMC4xMCB9KSwKICAgIGxhYmlvZGVudGFsOiBtayh7IGphd09wZW46IDAuMDUsIG1vdXRoRnVubmVsOiAwLjEwLCBtb3V0aExvd2VyRG93bjogMC4zNSwgbW91dGhSb2xsTG93ZXI6IDAuMjUgfSksCiAgICBkZW50YWw6IG1rKHsgamF3T3BlbjogMC4xOCwgbW91dGhTbWlsZTogMC4xMCwgbW91dGhMb3dlckRvd246IDAuMjAgfSksCiAgICBhbHZlb2xhcjogbWsoeyBqYXdPcGVuOiAwLjE1LCBtb3V0aFNocnVnVXBwZXI6IDAuMjAsIG1vdXRoRGltcGxlOiAwLjEwIH0pLAogICAgdmVsYXI6IG1rKHsgamF3T3BlbjogMC4zMCwgbW91dGhTaHJ1Z1VwcGVyOiAwLjI1IH0pLAogICAgcG9zdGFsdmVvbGFyOiBtayh7IGphd09wZW46IDAuMTgsIG1vdXRoRnVubmVsOiAwLjQ1LCBtb3V0aFB1Y2tlcjogMC4zMCB9KSwKICAgIHNpYmlsYW50OiBtayh7IGphd09wZW46IDAuMDYsIG1vdXRoU21pbGU6IDAuMjAsIG1vdXRoU2hydWdVcHBlcjogMC4yMCwgbW91dGhEaW1wbGU6IDAuMjUgfSksCiAgICBsYXRlcmFsOiBtayh7IGphd09wZW46IDAuMTgsIG1vdXRoU21pbGU6IDAuMTAsIG1vdXRoU2hydWdVcHBlcjogMC4yNSB9KSwKICAgIGFwcHJveGltYW50OiBtayh7IGphd09wZW46IDAuMjAsIG1vdXRoRnVubmVsOiAwLjMwLCBtb3V0aFB1Y2tlcjogMC4yNSB9KSwKICAgIG9wZW5Wb3dlbDogbWsoeyBqYXdPcGVuOiAwLjU1LCBtb3V0aExvd2VyRG93bjogMC4yMCwgbW91dGhTdHJldGNoOiAwLjA1IH0pLAogICAgbWlkVm93ZWw6IG1rKHsgamF3T3BlbjogMC4zMCwgbW91dGhTbWlsZTogMC4xOCwgbW91dGhEaW1wbGU6IDAuMDggfSksCiAgICBmcm9udFZvd2VsOiBtayh7IGphd09wZW46IDAuMTIsIG1vdXRoU21pbGU6IDAuNDUsIG1vdXRoU3RyZXRjaDogMC4yNSwgbW91dGhEaW1wbGU6IDAuMTggfSksCiAgICByb3VuZGVkTWlkOiBtayh7IGphd09wZW46IDAuMjgsIG1vdXRoRnVubmVsOiAwLjQ1LCBtb3V0aFB1Y2tlcjogMC4yNSB9KSwKICAgIHJvdW5kZWRIaWdoOiBtayh7IGphd09wZW46IDAuMTAsIG1vdXRoRnVubmVsOiAwLjU1LCBtb3V0aFB1Y2tlcjogMC41MCB9KQogIH07CiAgdmFyIEJMRU5EX01BUCA9IFtbJ2phd09wZW4nLCAnamF3T3BlbiddLCBbJ21vdXRoQ2xvc2UnLCAnbW91dGhDbG9zZSddLCBbJ21vdXRoU21pbGVMZWZ0JywgJ21vdXRoU21pbGUnXSwgWydtb3V0aFNtaWxlUmlnaHQnLCAnbW91dGhTbWlsZSddLCBbJ21vdXRoRnVubmVsJywgJ21vdXRoRnVubmVsJ10sIFsnbW91dGhQdWNrZXInLCAnbW91dGhQdWNrZXInXSwgWydtb3V0aFNocnVnVXBwZXInLCAnbW91dGhTaHJ1Z1VwcGVyJ10sIFsnbW91dGhMb3dlckRvd25MZWZ0JywgJ21vdXRoTG93ZXJEb3duJ10sIFsnbW91dGhMb3dlckRvd25SaWdodCcsICdtb3V0aExvd2VyRG93biddLCBbJ21vdXRoVXBwZXJVcExlZnQnLCAnbW91dGhVcHBlclVwJ10sIFsnbW91dGhVcHBlclVwUmlnaHQnLCAnbW91dGhVcHBlclVwJ10sIFsnbW91dGhTdHJldGNoTGVmdCcsICdtb3V0aFN0cmV0Y2gnXSwgWydtb3V0aFN0cmV0Y2hSaWdodCcsICdtb3V0aFN0cmV0Y2gnXSwgWydtb3V0aERpbXBsZUxlZnQnLCAnbW91dGhEaW1wbGUnXSwgWydtb3V0aERpbXBsZVJpZ2h0JywgJ21vdXRoRGltcGxlJ10sIFsnbW91dGhQcmVzc0xlZnQnLCAnbW91dGhQcmVzcyddLCBbJ21vdXRoUHJlc3NSaWdodCcsICdtb3V0aFByZXNzJ10sIFsnbW91dGhSb2xsTG93ZXInLCAnbW91dGhSb2xsTG93ZXInXSwgWydtb3V0aFJvbGxVcHBlcicsICdtb3V0aFJvbGxVcHBlciddXTsKICAvLyBJZGxlIGZhY2lhbCBiZWhhdmlvcnMgKGJsaW5rICsgc2FjY2FkZSBnYXplICsgc21pbGUgcHVsc2UpIGFyZSBub3cgZHJpdmVuIGR5bmFtaWNhbGx5IGluCiAgLy8gdGhlIGxvb3AsIG1pcnJvcmluZyBNYXNjb3QudHN4IOKAlCBubyBzdGF0aWMgaGVsZCBFTU9USU9OLiBBIHNtYWxsIGJhc2VsaW5lIHNtaWxlIGlzIGtlcHQKICAvLyBzbyB0aGUgZnVubmVsIG1hc2NvdCBzdGF5cyB3ZWxjb21pbmcgYmV0d2VlbiBwdWxzZXMuCiAgdmFyIEJMSU5LX0RVUiA9IDAuMTU7ICAgICAvLyBNYXNjb3QudHN4OjE1NTgKICB2YXIgU01JTEVfRFVSID0gMS40OyAgICAgIC8vIE1hc2NvdC50c3g6MjMxNgogIHZhciBTTUlMRV9CQVNFTElORSA9IDAuMTU7ICAgICAvLyBmdW5uZWwtc3BlY2lmaWM6IGFsd2F5cy1vbiBmcmllbmRseSBiYXNlbGluZSAod2ViIGlzIDApCiAgdmFyIFNNSUxFX1BVTFNFX1BFQUsgPSAwLjIwOyAgIC8vIHB1bHNlIGNvbnRyaWJ1dGlvbiBvbiB0b3Agb2YgYmFzZWxpbmUgKHdlYiBpcyAwLjI4KQogIHZhciBTTUlMRV9XQVZFX0JPT1NUID0gMC4yMDsgICAvLyBleHRyYSBzbWlsZSB3aGlsZSB0aGUgb25lLXNob3Qgd2F2ZSBwbGF5cyAod2ViIGlzIDAuMzApCiAgZnVuY3Rpb24gY2hhclZpc2VtZShjKSB7CiAgICBjID0gYy50b0xvd2VyQ2FzZSgpOwogICAgaWYgKCdhw6HDpCcuaW5kZXhPZihjKSA+PSAwKSByZXR1cm4gJ29wZW5Wb3dlbCc7CiAgICBpZiAoJ2XDqMOpJy5pbmRleE9mKGMpID49IDApIHJldHVybiAnZnJvbnRWb3dlbCc7CiAgICBpZiAoJ2nDrXknLmluZGV4T2YoYykgPj0gMCkgcmV0dXJuICdmcm9udFZvd2VsJzsKICAgIGlmICgnb8Ozw7YnLmluZGV4T2YoYykgPj0gMCkgcmV0dXJuICdyb3VuZGVkTWlkJzsKICAgIGlmICgndcO6w7wnLmluZGV4T2YoYykgPj0gMCkgcmV0dXJuICdyb3VuZGVkSGlnaCc7CiAgICBpZiAoYyA9PT0gJ8OfJykgcmV0dXJuICdzaWJpbGFudCc7CiAgICBpZiAoJ3BibScuaW5kZXhPZihjKSA+PSAwKSByZXR1cm4gJ2JpbGFiaWFsJzsKICAgIGlmICgnZnYnLmluZGV4T2YoYykgPj0gMCkgcmV0dXJuICdsYWJpb2RlbnRhbCc7CiAgICBpZiAoJ3N6eCcuaW5kZXhPZihjKSA+PSAwKSByZXR1cm4gJ3NpYmlsYW50JzsKICAgIGlmICgnanEnLmluZGV4T2YoYykgPj0gMCkgcmV0dXJuICdwb3N0YWx2ZW9sYXInOwogICAgaWYgKCdrZ2MnLmluZGV4T2YoYykgPj0gMCkgcmV0dXJuICd2ZWxhcic7CiAgICBpZiAoJ3J3Jy5pbmRleE9mKGMpID49IDApIHJldHVybiAnYXBwcm94aW1hbnQnOwogICAgaWYgKGMgPT09ICdsJykgcmV0dXJuICdsYXRlcmFsJzsKICAgIGlmICgndGRuJy5pbmRleE9mKGMpID49IDApIHJldHVybiAnYWx2ZW9sYXInOwogICAgaWYgKGMgPT09ICdoJykgcmV0dXJuICdtaWRWb3dlbCc7CiAgICBpZiAoL1thLXpdLy50ZXN0KGMpKSByZXR1cm4gJ2FsdmVvbGFyJzsKICAgIC8vIE5vbi1MYXRpbiBzY3JpcHRzIChBcmFiaWMgLyBUaGFpIC8gSmFwYW5lc2UgLyBLb3JlYW4sIFZpZXRuYW1lc2UgcHJlY29tcG9zZWQgdm93ZWxzLCDigKYpIGFyZW4ndAogICAgLy8gcGhvbmV0aWMgdG8gdGhpcyBMYXRpbiBjaGFyIG1hcCwgc28gaW5zdGVhZCBvZiBmcmVlemluZyB0aGUgbW91dGggKCdzaWxlbmNlJykgd2Ugcm90YXRlIHRocm91Z2gKICAgIC8vIG9wZW4vbWlkL2Nsb3NlZCB2aXNlbWVzIGJ5IGNvZGUgcG9pbnQg4oCUIHBsYXVzaWJsZSwgdmFyaWVkIHRhbGtpbmcgbW90aW9uIGluIGFueSBsYW5ndWFnZS4KICAgIHZhciBjYyA9IGMuY2hhckNvZGVBdCgwKSB8fCAwOwogICAgaWYgKGNjID4gMHgyZmYpIHsgdmFyIE5MID0gWydvcGVuVm93ZWwnLCAnbWlkVm93ZWwnLCAnZnJvbnRWb3dlbCcsICdyb3VuZGVkTWlkJywgJ2JpbGFiaWFsJywgJ2FsdmVvbGFyJywgJ29wZW5Wb3dlbCcsICdyb3VuZGVkSGlnaCddOyByZXR1cm4gTkxbY2MgJSBOTC5sZW5ndGhdOyB9CiAgICByZXR1cm4gJ3NpbGVuY2UnOwogIH0KICBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHsgcmV0dXJuIGEgKyAoYiAtIGEpICogdDsgfQoKICBmdW5jdGlvbiBib290KCkgewogICAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzY290LXdlbGNvbWUnKTsKICAgIGlmICghcm9vdCB8fCAhd2luZG93LlRIUkVFIHx8ICFUSFJFRS5HTFRGTG9hZGVyKSByZXR1cm4gc2V0VGltZW91dChib290LCA4MCk7CiAgICB2YXIgdGFsa0xhYmVsID0gKHsgZGU6ICdUaXBwZSwgdW0gJyArIE1BU0NPVF9OQU1FICsgJyB6dSBow7ZyZW4nLCBlczogJ1RvY2EgcGFyYSBlc2N1Y2hhciBhICcgKyBNQVNDT1RfTkFNRSwgZnI6ICdUb3VjaGUgcG91ciDDqWNvdXRlciAnICsgTUFTQ09UX05BTUUsIGFyOiAn2KfYtti62Lcg2YTYs9mF2KfYuSAnICsgTUFTQ09UX05BTUUgfVtNV19MQU5HXSkgfHwgKCdUYXAgdG8gaGVhciAnICsgTUFTQ09UX05BTUUpOwogICAgcm9vdC5pbm5lckhUTUwgPQogICAgICAnPGRpdiBjbGFzcz0ibXctc3RhZ2UiPjxjYW52YXMgY2xhc3M9Im13LWNhbnZhcyI+PC9jYW52YXM+JyArCiAgICAgICc8ZGl2IGNsYXNzPSJtdy1idWJibGUiPjxzcGFuIGNsYXNzPSJtdy10ZXh0Ij48L3NwYW4+JyArCiAgICAgICc8c3BhbiBjbGFzcz0ibXctdGV4dDIiIHN0eWxlPSJkaXNwbGF5OmJsb2NrO29wYWNpdHk6LjYyO2ZvbnQtc2l6ZTouODJlbTtsaW5lLWhlaWdodDoxLjQ7bWFyZ2luLXRvcDo3cHgiPjwvc3Bhbj48L2Rpdj48L2Rpdj4nICsKICAgICAgJzxidXR0b24gY2xhc3M9Im13LXRhbGsiIHR5cGU9ImJ1dHRvbiI+PHNwYW4gY2xhc3M9Im13LXRhbGstaWMiPiYjMTI4MjY2Ozwvc3Bhbj4gJyArIHRhbGtMYWJlbCArICc8L2J1dHRvbj4nOwoKICAgIHZhciBjYW52YXMgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5tdy1jYW52YXMnKTsKICAgIHZhciB0ZXh0RWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5tdy10ZXh0Jyk7CiAgICB2YXIgdGV4dEVsMiA9IHJvb3QucXVlcnlTZWxlY3RvcignLm13LXRleHQyJyk7CiAgICB2YXIgYnRuID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcubXctdGFsaycpOwogICAgLy8gSGFuZ0xNIGdyZWV0aW5nIGlzIG5hbWUtbGVzcyAobm8gdXNlciBuYW1lIHNwb2tlbiBvciBzaG93bikgc28gdGhlIHZvaWNlIGNhbiBiZSBwcmViYWtlZC4KICAgIHZhciBsaW5lID0gZ3JlZXRpbmcoJycpOwogICAgdmFyIGxpbmVBbHQgPSBncmVldGluZ0FsdCgnJyk7ICAgLy8gRW5nbGlzaCBzZWNvbmRhcnkgKGVtcHR5IHVubGVzcyBiaWxpbmd1YWwgREUpCiAgICB2YXIgZGJnRWwgPSBudWxsLCBkYmdOID0gMDsKICAgIGlmIChNV19ERUJVRykgewogICAgICBkYmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpOwogICAgICAvLyBGSVhFRCArIG9uIDxib2R5PiBzbyBGdW5uZWxGb3gncyBzY3JlZW4gbGF5b3V0IGNhbiBuZXZlciBoaWRlL2NsaXAgaXQuCiAgICAgIGRiZ0VsLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7bGVmdDo2cHg7dG9wOjZweDt6LWluZGV4OjIxNDc0ODM2NDc7bWFyZ2luOjA7cGFkZGluZzo4cHggMTBweDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjg1KTtjb2xvcjojN0NGQzlBO2ZvbnQ6MTJweC8xLjUgbW9ub3NwYWNlO3doaXRlLXNwYWNlOnByZS13cmFwO2JvcmRlci1yYWRpdXM6OHB4O21heC13aWR0aDo5NnZ3O3BvaW50ZXItZXZlbnRzOm5vbmUnOwogICAgICBkYmdFbC50ZXh0Q29udGVudCA9ICdtYXNjb3QtZGVidWc6IGJvb3RpbmcuLi4nOwogICAgICAoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGRiZ0VsKTsKICAgICAgLy8gU3VyZmFjZSBBTlkgZXJyb3IgKGxvb3AgdGhyb3csIGxvYWRlciBmYWlsKSByaWdodCBpbiB0aGUgYm94IGluc3RlYWQgb2YgYSBzaWxlbnQgZnJlZXplLgogICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXYpIHsgdHJ5IHsgZGJnRWwudGV4dENvbnRlbnQgKz0gJ1xuRVJST1I6ICcgKyAoZXYubWVzc2FnZSB8fCBldi5lcnJvciB8fCBldikgKyAnIEAnICsgKGV2LmZpbGVuYW1lIHx8ICcnKSArICc6JyArIChldi5saW5lbm8gfHwgJycpOyB9IGNhdGNoIChlKSB7fSB9KTsKICAgIH0KICAgIHZhciBidWJibGVFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLm13LWJ1YmJsZScpOwogICAgdmFyIGJ1YmJsZVNob3duID0gZmFsc2U7CiAgICAvLyBCdWJibGUgc3RheXMgaGlkZGVuIHVudGlsIHRoZSBtYXNjb3QgYWN0dWFsbHkgc3RhcnRzIHNwZWFraW5nIOKAlCBjYWxsIHRoaXMgZnJvbSB0aGUKICAgIC8vIHBsYXkoKSBzdWNjZXNzIHBhdGhzIHNvIHRoZSB3b3JkcyBhcHBlYXIgaW4gc3luYyB3aXRoIHRoZSB2b2ljZSwgbm90IG9uIHNjcmVlbiBsb2FkLgogICAgZnVuY3Rpb24gcmV2ZWFsQnViYmxlKCkgewogICAgICBpZiAoYnViYmxlU2hvd24pIHJldHVybjsgYnViYmxlU2hvd24gPSB0cnVlOwogICAgICBidWJibGVFbC5jbGFzc0xpc3QuYWRkKCdtdy1zaG93Jyk7CiAgICAgIGlmICh0ZXh0RWwyKSB0ZXh0RWwyLnRleHRDb250ZW50ID0gbGluZUFsdDsgICAvLyBFbmdsaXNoIGxpbmUgdW5kZXIgdGhlIEdlcm1hbiAoYmlsaW5ndWFsIERFKTsgZW1wdHkgb3RoZXJ3aXNlCiAgICAgIChmdW5jdGlvbiB0eXBlKGkpIHsgdGV4dEVsLnRleHRDb250ZW50ID0gbGluZS5zbGljZSgwLCBpKTsgaWYgKGkgPD0gbGluZS5sZW5ndGgpIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0eXBlKGkgKyAxKTsgfSwgNjApOyB9KSgwKTsKICAgIH0KICAgIHByZXBhcmVUVFMoKTsgICAvLyBwcmUtd2FybSB0aGUgc29mdC1mYXRoZXIgdm9pY2Ugc28gVGFwLXRvLWhlYXIgaXMgaW5zdGFudCAoc3ludGhlc2lzIH4xcykKCiAgICB2YXIgVyA9IGNhbnZhcy5jbGllbnRXaWR0aCB8fCByb290LmNsaWVudFdpZHRoIHx8IDM2MDsKICAgIHZhciBIID0gY2FudmFzLmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgNTAwOwogICAgdmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhcywgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZSB9KTsKICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSwgMikpOwogICAgcmVuZGVyZXIuc2V0U2l6ZShXLCBILCBmYWxzZSk7CiAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZzsKICAgIHJlbmRlcmVyLnRvbmVNYXBwaW5nID0gVEhSRUUuQUNFU0ZpbG1pY1RvbmVNYXBwaW5nOwogICAgcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IDEuMDsgIC8vIHJlY2lwZSB2YWx1ZSAobWF0Y2hlcyBlbmdsaXNoLnBodW5ndHJ1bmcuY29tIC8gbWFzY290LXdlYi1lbWJlZCkKCiAgICB2YXIgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTsKICAgIC8vIHN0dWRpbyBJQkwg4oCUIHRoZSBleGFjdCBIRFIgZHJlaSdzIDxFbnZpcm9ubWVudCBwcmVzZXQ9InN0dWRpbyI+IGxvYWRzCiAgICB2YXIgcG1yZW0gPSBuZXcgVEhSRUUuUE1SRU1HZW5lcmF0b3IocmVuZGVyZXIpOyBwbXJlbS5jb21waWxlRXF1aXJlY3Rhbmd1bGFyU2hhZGVyKCk7CiAgICBuZXcgVEhSRUUuUkdCRUxvYWRlcigpLmxvYWQoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9wbW5kcnMvZHJlaS1hc3NldHNANDU2MDYwYTI2YmJlYjhmZGY3OTMyNmYyMjRiNmQ5OWI4YmNjZTczNi9oZHJpL3N0dWRpb19zbWFsbF8wM18xay5oZHInLCBmdW5jdGlvbiAoaGRyKSB7CiAgICAgIGhkci5tYXBwaW5nID0gVEhSRUUuRXF1aXJlY3Rhbmd1bGFyUmVmbGVjdGlvbk1hcHBpbmc7CiAgICAgIHNjZW5lLmVudmlyb25tZW50ID0gcG1yZW0uZnJvbUVxdWlyZWN0YW5ndWxhcihoZHIpLnRleHR1cmU7IGhkci5kaXNwb3NlKCk7CiAgICB9KTsKICAgIC8vIHRocmVlLXBvaW50IHJpZyDigJQgc2FtZSBkaXJlY3Rpb25zL2NvbG9ycyBhcyB0aGUgd2ViIG1hc2NvdAogICAgc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuNSkpOwogICAgdmFyIGtleSA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KG5ldyBUSFJFRS5Db2xvcigxLjAsIDAuOTIsIDAuODIpLCAxLjYpOyBrZXkucG9zaXRpb24uc2V0KC0wLjcsIDEuMCwgMC44KTsgc2NlbmUuYWRkKGtleSk7CiAgICB2YXIgZmlsbCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KG5ldyBUSFJFRS5Db2xvcigwLjc4LCAwLjg4LCAxLjApLCAwLjU1KTsgZmlsbC5wb3NpdGlvbi5zZXQoMC45LCAwLjYsIDAuNSk7IHNjZW5lLmFkZChmaWxsKTsKICAgIHZhciByaW0gPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodChuZXcgVEhSRUUuQ29sb3IoMC45NSwgMC45NSwgMS4wKSwgMi40KTsgcmltLnBvc2l0aW9uLnNldCgwLjIsIDEuMiwgLTEuMCk7IHNjZW5lLmFkZChyaW0pOwoKICAgIHZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoZm92RnJvbU1tKENBTV9GT0NBTF9NTSksIFcgLyBILCAwLjEsIDEwMCk7CgogICAgdmFyIG1vcnBocyA9IFtdOyAgICAgICAgICAvLyB7bWVzaCwgbWFwOntmaWVsZDpbaWR4XX0sIGVtbzpbW2lkeCx2YWxdXX0KICAgIHZhciBtaXhlciA9IG51bGwsIGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7CiAgICB2YXIgd2VpZ2h0cyA9IFZJUy5zaWxlbmNlLCB0YXJnZXQgPSBWSVMuc2lsZW5jZSwgc3BlYWtpbmcgPSBmYWxzZSwgc3BlYWtTdGFydCA9IDAsIHNwZWFrRHVyID0gMDsKICAgIHZhciB0dHNBdWRpbyA9IG51bGwsIHVzaW5nQXVkaW8gPSBmYWxzZSwgdHRzUGVuZGluZyA9IGZhbHNlLCB0dHNGYWlsZWQgPSBmYWxzZSwgd2FudFBsYXkgPSBmYWxzZSwgYXV0b3BsYXllZCA9IGZhbHNlOwogICAgdmFyIGlkbGVUaW1lciA9IDA7CiAgICB2YXIgbmV4dEJsaW5rQXQgPSAwLCBibGlua0FjdGl2ZVVudGlsID0gLTEsIGJsaW5rID0gMDsKICAgIHZhciBnYXplVGFyZ2V0ID0geyB4OiAwLCB5OiAwIH0sIGdhemVTbW9vdGhlZCA9IHsgeDogMCwgeTogMCB9LCBnYXplTmV4dEF0ID0gMDsKICAgIHZhciBzbWlsZVB1bHNlUmVtID0gMCwgbmV4dFNtaWxlQXQgPSAwLCBzbWlsZSA9IFNNSUxFX0JBU0VMSU5FOwogICAgdmFyIHdhdmluZyA9IHRydWUsIHNwaW5lQm9uZSA9IG51bGwsIHNwaW5lUmVzdCA9IG51bGwsIGFybUJvbmVzID0ge30sIGFsbEJvbmVzID0gW10sIGFybVJlc3QgPSBbXTsKICAgIHZhciBuZWNrVHdpc3QwMSA9IG51bGwsIG5lY2tSZXN0UG9zID0gbnVsbDsKICAgIHZhciBoZWFkQm9uZSA9IG51bGw7CiAgICB2YXIgc3dheUV1bCA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCAnWVhaJyksIHN3YXlRID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTsKICAgIC8vIFBvc3Qtc3BlZWNoIGdlc3R1cmUgc3RhdGUgKyByZXVzYWJsZSB0ZW1wcy4KICAgIHZhciBjdXJyZW50R2VzdHVyZSA9IG51bGwsIGdlc3R1cmVRdWV1ZSA9IFtdLCBhZHZhbmNlZCA9IGZhbHNlOwogICAgdmFyIFhwID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksIFlwID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIFpwID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSk7CiAgICB2YXIgbm9kRXVsID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsICdZWFonKSwgbm9kUSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7CiAgICB2YXIgZ2VzdFEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLCBnZXN0UTIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpOwogICAgdmFyIGFybVJlc3RNYXAgPSB7fTsgICAgICAvLyBidWlsdCBwb3N0LWFpbURvd24gc28gZ2VzdHVyZSBtYXRoIGNvbXBvc2VzIG9udG8gdGhlIGJha2VkIHJlc3QsIG5vdCBiaW5kCiAgICB2YXIgZHdQdyA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCksIGR3TmV3V29ybGQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpOwogICAgLy8gQXBwbHkgYSBXT1JMRC1zcGFjZSBkZWx0YSBvbiB0b3Agb2YgYSBib25lJ3MgY2FwdHVyZWQgcmVzdCAobWlycm9ycyBNYXNjb3QudHN4OjIwMzUtMjA0NSkuCiAgICAvLyBCb25lLnBhcmVudCdzIHdvcmxkLXF1YXRlcm5pb24gY2FuIGRpZmZlciBmcm9tIGlkZW50aXR5IChNaXhhbW8gYXJtcyBhcmVuJ3QgYWxpZ25lZCB0byB3b3JsZAogICAgLy8gYXhlcyksIHNvIGEgcGFyZW50LWxvY2FsIHByZW11bHRpcGx5IGdldHMgdGhlIHNpZ24gd3Jvbmcg4oCUIHRoaXMgY29tcG9zZXMgaW4gdHJ1ZSB3b3JsZCBzcGFjZS4KICAgIGZ1bmN0aW9uIGRyaXZlV29ybGQoYm9uZSwgcmVzdExvY2FsLCB3b3JsZERlbHRhKSB7CiAgICAgIGlmICghYm9uZSB8fCAhYm9uZS5wYXJlbnQgfHwgIXJlc3RMb2NhbCkgcmV0dXJuOwogICAgICBib25lLnBhcmVudC51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7CiAgICAgIGJvbmUucGFyZW50LmdldFdvcmxkUXVhdGVybmlvbihkd1B3KTsKICAgICAgZHdOZXdXb3JsZC5jb3B5KGR3UHcpLm11bHRpcGx5KHJlc3RMb2NhbCk7ICAgICAgICAgIC8vIHJlc3RXb3JsZCA9IHB3ICogcmVzdAogICAgICBkd05ld1dvcmxkLnByZW11bHRpcGx5KHdvcmxkRGVsdGEpOyAgICAgICAgICAgICAgICAgLy8gbmV3V29ybGQgID0gd29ybGREZWx0YSAqIHJlc3RXb3JsZAogICAgICBkd1B3LmludmVydCgpOwogICAgICBib25lLnF1YXRlcm5pb24uY29weShkd1B3KS5tdWx0aXBseShkd05ld1dvcmxkKTsgICAgLy8gYm9uZUxvY2FsID0gcHcuaW52ZXJ0KCkgKiBuZXdXb3JsZAogICAgfQogICAgdmFyIHRtcFEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLCB0bXBBeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCk7CgogICAgdmFyIGRyYWNvID0gbmV3IFRIUkVFLkRSQUNPTG9hZGVyKCk7IGRyYWNvLnNldERlY29kZXJQYXRoKERSQUNPX1BBVEgpOwogICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5HTFRGTG9hZGVyKCk7IGxvYWRlci5zZXREUkFDT0xvYWRlcihkcmFjbyk7CiAgICBsb2FkZXIubG9hZChNT0RFTF9VUkwsIGZ1bmN0aW9uIChnbHRmKSB7CiAgICAgIHZhciBtb2RlbCA9IGdsdGYuc2NlbmU7CiAgICAgIG1vZGVsLnRyYXZlcnNlKGZ1bmN0aW9uIChvKSB7CiAgICAgICAgaWYgKG8uaXNCb25lICYmIG8ubmFtZSAhPT0gJ1NwaW5lMDInKSBhbGxCb25lcy5wdXNoKG8pOyAgIC8vIGV2ZXJ5IGJvbmUgZXhjZXB0IFNwaW5lMDIgd2lsbCBlYXNlIGJhY2sgdG8gaXRzIGNhcHR1cmVkIHJlc3QgYWZ0ZXIgdGhlIHdhdmUKICAgICAgICBpZiAoby5uYW1lID09PSAnTmVja1R3aXN0MDEnKSBuZWNrVHdpc3QwMSA9IG87ICAgICAgICAgICAvLyBkaXJlY3QgcmVmIGZvciB0aGUgcGVyLWZyYW1lIG5lY2stbGlmdCBvdmVycmlkZQogICAgICAgIGlmIChvLm5hbWUgPT09ICdIZWFkJykgaGVhZEJvbmUgPSBvOyAgICAgICAgICAgICAgICAgICAgLy8gZGlyZWN0IHJlZiBmb3IgaWRsZSBoZWFkIHN3YXkgKE1hc2NvdC50c3g6MTY5My0xNjk0KQogICAgICAgIGlmIChvLm5hbWUgPT09ICdTcGluZTAyJykgeyBzcGluZUJvbmUgPSBvOyBzcGluZVJlc3QgPSBvLnF1YXRlcm5pb24uY2xvbmUoKTsgfQogICAgICAgIGVsc2UgaWYgKC9eW0xSXV8oVXBwZXJhcm18Rm9yZWFybXxIYW5kKSQvLnRlc3Qoby5uYW1lKSkgYXJtQm9uZXNbby5uYW1lXSA9IG87CiAgICAgICAgaWYgKG8uaXNNZXNoICYmIG8ubWF0ZXJpYWwpIHsKICAgICAgICAgIChBcnJheS5pc0FycmF5KG8ubWF0ZXJpYWwpID8gby5tYXRlcmlhbCA6IFtvLm1hdGVyaWFsXSkuZm9yRWFjaChmdW5jdGlvbiAobW0pIHsKICAgICAgICAgICAgaWYgKG1tICYmICdlbnZNYXBJbnRlbnNpdHknIGluIG1tKSB7IG1tLmVudk1hcEludGVuc2l0eSA9IDAuNzsgbW0ubmVlZHNVcGRhdGUgPSB0cnVlOyB9CiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgICAgaWYgKG8uaXNNZXNoICYmIG8ubW9ycGhUYXJnZXREaWN0aW9uYXJ5ICYmIG8ubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSB7CiAgICAgICAgICB2YXIgZCA9IG8ubW9ycGhUYXJnZXREaWN0aW9uYXJ5LCBtYXAgPSB7fTsKICAgICAgICAgIEJMRU5EX01BUC5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IGlmIChkW3BbMF1dICE9IG51bGwpIChtYXBbcFsxXV0gPSBtYXBbcFsxXV0gfHwgW10pLnB1c2goZFtwWzBdXSk7IH0pOwogICAgICAgICAgbW9ycGhzLnB1c2goeyBtZXNoOiBvLCBtYXA6IG1hcCwgZGljdDogZCB9KTsgICAvLyBkaWN0IGtlcHQgc28gYXBwbHlJZGxlIGNhbiBsb29rIHVwIGV5ZUJsaW5rL2V5ZUxvb2svc21pbGUgc2hhcGVzIGJ5IG5hbWUKICAgICAgICB9CiAgICAgIH0pOwogICAgICBzY2VuZS5hZGQobW9kZWwpOyBtb2RlbC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTsKCiAgICAgIC8vIEJpbmQgaXMgYSBULXBvc2Ug4oCUIGJha2UgYW4gYXJtcy1kb3duIHJlc3QgYnkgYWltaW5nIHVwcGVyLWFybS9mb3JlYXJtIGJvbmVzCiAgICAgIC8vIGRvd253YXJkIChwb3J0IG9mIGVuZ2xpc2gtYXBwLXdlYikuIFN0b3JlZCBhcyB0aGUgcmVzdCB0aGUgYXJtcyBlYXNlIHRvIGFmdGVyIHdhdmluZy4KICAgICAgZnVuY3Rpb24gYWltRG93bihib25lLCBjaGlsZCwgb3gsIGZ6KSB7CiAgICAgICAgaWYgKCFib25lIHx8ICFjaGlsZCkgcmV0dXJuOwogICAgICAgIGJvbmUudXBkYXRlV29ybGRNYXRyaXgodHJ1ZSwgZmFsc2UpOyBjaGlsZC51cGRhdGVXb3JsZE1hdHJpeCh0cnVlLCBmYWxzZSk7CiAgICAgICAgdmFyIGRpciA9IGNoaWxkLmdldFdvcmxkUG9zaXRpb24obmV3IFRIUkVFLlZlY3RvcjMoKSkuc3ViKGJvbmUuZ2V0V29ybGRQb3NpdGlvbihuZXcgVEhSRUUuVmVjdG9yMygpKSkubm9ybWFsaXplKCk7CiAgICAgICAgaWYgKGRpci5sZW5ndGhTcSgpIDwgMWUtNikgcmV0dXJuOwogICAgICAgIHZhciBkZWx0YSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKGRpciwgbmV3IFRIUkVFLlZlY3RvcjMob3gsIC0xLCAtZnopLm5vcm1hbGl6ZSgpKTsKICAgICAgICB2YXIgbncgPSBkZWx0YS5tdWx0aXBseShib25lLmdldFdvcmxkUXVhdGVybmlvbihuZXcgVEhSRUUuUXVhdGVybmlvbigpKSk7CiAgICAgICAgdmFyIHAgPSBib25lLnBhcmVudDsKICAgICAgICBpZiAocCkgeyBwLnVwZGF0ZVdvcmxkTWF0cml4KHRydWUsIGZhbHNlKTsgYm9uZS5xdWF0ZXJuaW9uLmNvcHkocC5nZXRXb3JsZFF1YXRlcm5pb24obmV3IFRIUkVFLlF1YXRlcm5pb24oKSkuaW52ZXJ0KCkubXVsdGlwbHkobncpKTsgfQogICAgICAgIGVsc2UgYm9uZS5xdWF0ZXJuaW9uLmNvcHkobncpOwogICAgICB9CiAgICAgIGFpbURvd24oYXJtQm9uZXMuTF9VcHBlcmFybSwgYXJtQm9uZXMuTF9Gb3JlYXJtLCAwLjI1LCAwLjEyKTsKICAgICAgYWltRG93bihhcm1Cb25lcy5SX1VwcGVyYXJtLCBhcm1Cb25lcy5SX0ZvcmVhcm0sIC0wLjI1LCAwLjEyKTsKICAgICAgYWltRG93bihhcm1Cb25lcy5MX0ZvcmVhcm0sIGFybUJvbmVzLkxfSGFuZCwgMC4yNSwgMC4yNSk7CiAgICAgIGFpbURvd24oYXJtQm9uZXMuUl9Gb3JlYXJtLCBhcm1Cb25lcy5SX0hhbmQsIC0wLjI1LCAwLjI1KTsKICAgICAgLy8gQnVpbGQgYXJtUmVzdE1hcCBieSBuYW1lIGZvciBkcml2ZVdvcmxkIGdlc3R1cmUgY29tcG9zaXRpb24gKG11c3QgY2FwdHVyZSBBRlRFUiBhaW1Eb3duKS4KICAgICAgWydMX1VwcGVyYXJtJywgJ1JfVXBwZXJhcm0nLCAnTF9Gb3JlYXJtJywgJ1JfRm9yZWFybScsICdMX0hhbmQnLCAnUl9IYW5kJ10uZm9yRWFjaChmdW5jdGlvbiAobikgewogICAgICAgIGlmIChhcm1Cb25lc1tuXSkgYXJtUmVzdE1hcFtuXSA9IGFybUJvbmVzW25dLnF1YXRlcm5pb24uY2xvbmUoKTsKICAgICAgfSk7CiAgICAgIC8vIENhcHR1cmUgRVZFUlkgYm9uZSdzIHJlc3QgQUZURVIgdGhlIGFybS1kb3duIGJha2Ug4oCUIHNvIGFybSBib25lcyBrZWVwIHRoZWlyIGJha2VkCiAgICAgIC8vIGFybXMtZG93biByZXN0IGFuZCBhbGwgb3RoZXIgYm9uZXMgKHNwaW5lIGNoYWluLCBoZWFkLCBuZWNrLCBIQU5EUywgRklOR0VSUywgdHdpc3RzKQogICAgICAvLyBnZXQgdGhlaXIgYmluZCByZXN0LiBBZnRlciB0aGUgd2F2ZSBjbGlwIGNsYW1wcyAoaXQgYmFrZXMga2V5ZnJhbWVzIGZvciB0aGUgd2hvbGUKICAgICAgLy8gc2tlbGV0b24pLCB0aGUgbG9vcCBlYXNlcyBldmVyeSBib25lIGJhY2sgdG8gdGhpcyByZXN0LiBUaGUgd2ViJ3MgJ29wZW4nIGlkbGUgaGFuZAogICAgICAvLyBwb3NlIElTIHRoZSBiaW5kIHBvc2UgKE1hc2NvdC50c3g6MjE0OCDigJQgaGFuZFBvc2U9J29wZW4nID0+IGJsZW5kPTAgPT4gbm8gZGVsdGEpLgogICAgICAvLyBTcGluZTAyIGlzIGV4Y2x1ZGVkIChvd25lZCBieSBicmVhdGhpbmcpLgogICAgICBhbGxCb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7IGFybVJlc3QucHVzaCh7IGJvbmU6IGIsIHJlc3Q6IGIucXVhdGVybmlvbi5jbG9uZSgpLCBjdXI6IG51bGwgfSk7IH0pOwogICAgICAvLyBDYXB0dXJlIE5lY2tUd2lzdDAxJ3MgYmluZCBMT0NBTCBwb3NpdGlvbiBzbyB0aGUgcGVyLWZyYW1lIG92ZXJyaWRlIGNhbiByZWFzc2VydAogICAgICAvLyB0aGUgbGlmdCBhZnRlciBldmVyeSBtaXhlci51cGRhdGUgKHdhdmUgY2xpcCBtYXkgYW5pbWF0ZSBib25lIHBvc2l0aW9ucykuCiAgICAgIGlmIChuZWNrVHdpc3QwMSkgeyBuZWNrUmVzdFBvcyA9IG5lY2tUd2lzdDAxLnBvc2l0aW9uLmNsb25lKCk7IG5lY2tUd2lzdDAxLnBvc2l0aW9uLnkgPSBuZWNrUmVzdFBvcy55ICsgTkVDS19MSUZUOyB9CiAgICAgIG1vZGVsLnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpOwoKICAgICAgLy8gTm9ybWFsaXplIEVYQUNUTFkgbGlrZSBlbmdsaXNoLWFwcC13ZWIgKE1hc2NvdC50c3ggYXV0by1maXQsIGxpbmVzIDEwNDQtMTA2Nyk6CiAgICAgIC8vIHNjYWxlIHRoZSBtb2RlbCB0byAxLjVtIHRhbGwsIHRoZW4gZHJvcCBpdHMgY2VudHJvaWQgb24gd29ybGQgb3JpZ2luLiBPbmx5IGFmdGVyCiAgICAgIC8vIHRoYXQgZG8gdGhlIHdlYidzIGxpdGVyYWwgY2FtZXJhIHByZXNldHMgZnJhbWUgaXQgMToxLgogICAgICB2YXIgbmIgPSBuZXcgVEhSRUUuQm94MygpLnNldEZyb21PYmplY3QobW9kZWwpLCBucyA9IG5iLmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSksIG5jID0gbmIuZ2V0Q2VudGVyKG5ldyBUSFJFRS5WZWN0b3IzKCkpOwogICAgICB2YXIgZml0ID0gMS41IC8gKG5zLnkgfHwgMS41KTsgbW9kZWwuc2NhbGUuc2V0U2NhbGFyKGZpdCk7CiAgICAgIG1vZGVsLnBvc2l0aW9uLnNldCgtbmMueCAqIGZpdCwgLW5jLnkgKiBmaXQsIC1uYy56ICogZml0KTsKICAgICAgbW9kZWwudXBkYXRlTWF0cml4V29ybGQodHJ1ZSk7CiAgICAgIHZhciBib3ggPSBuZXcgVEhSRUUuQm94MygpLnNldEZyb21PYmplY3QobW9kZWwpLCBzaXplID0gYm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSksIGMgPSBib3guZ2V0Q2VudGVyKG5ldyBUSFJFRS5WZWN0b3IzKCkpOwogICAgICAvLyBDYW1lcmEga25vYnMgbGl2ZSBpbiBDQU1fUE9TIC8gQ0FNX0xPT0sgLyBDQU1fRk9WIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlIOKAlCB0d2VhayB0aGVyZS4KICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldChDQU1fUE9TWzBdLCBDQU1fUE9TWzFdLCBDQU1fUE9TWzJdKTsKICAgICAgY2FtZXJhLmxvb2tBdChDQU1fTE9PS1swXSwgQ0FNX0xPT0tbMV0sIENBTV9MT09LWzJdKTsKCiAgICAgIC8vIHNvZnQgY29udGFjdCBzaGFkb3cgKGRyZWkgQ29udGFjdFNoYWRvd3MgbG9vazogb3BhY2l0eSAwLjMsIHNjYWxlIDIuNCkg4oCUCiAgICAgIC8vIGEgYmx1cnJlZCBkYXJrIGVsbGlwc2Ugb24gdGhlIGdyb3VuZCBhdCB0aGUgZmVldC4gTk9URTogc2l0cyBiZWxvdyB0aGUKICAgICAgLy8gY2hlc3QgZnJhbWUsIHNvIGl0IG9ubHkgYmVjb21lcyB2aXNpYmxlIGlmIHRoZSBjYW1lcmEgd2lkZW5zIHRvIGJvZHkuCiAgICAgIHZhciBzaEN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IHNoQ3Yud2lkdGggPSBzaEN2LmhlaWdodCA9IDEyODsKICAgICAgdmFyIHNoQ3R4ID0gc2hDdi5nZXRDb250ZXh0KCcyZCcpOwogICAgICB2YXIgc2hHcmFkID0gc2hDdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoNjQsIDY0LCA0LCA2NCwgNjQsIDYyKTsKICAgICAgc2hHcmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgwLDAsMCwwLjMwKScpOyBzaEdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDApJyk7CiAgICAgIHNoQ3R4LmZpbGxTdHlsZSA9IHNoR3JhZDsgc2hDdHguZmlsbFJlY3QoMCwgMCwgMTI4LCAxMjgpOwogICAgICB2YXIgc2hUZXggPSBuZXcgVEhSRUUuVGV4dHVyZShzaEN2KTsgc2hUZXgubmVlZHNVcGRhdGUgPSB0cnVlOwogICAgICB2YXIgc2hhZG93ID0gbmV3IFRIUkVFLk1lc2goCiAgICAgICAgbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoc2l6ZS54ICogMi40LCBzaXplLnggKiAyLjQpLAogICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogc2hUZXgsIHRyYW5zcGFyZW50OiB0cnVlLCBkZXB0aFdyaXRlOiBmYWxzZSB9KSk7CiAgICAgIHNoYWRvdy5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyOyBzaGFkb3cucG9zaXRpb24uc2V0KGMueCwgYm94Lm1pbi55ICsgMC4wMDEsIGMueik7CiAgICAgIHNjZW5lLmFkZChzaGFkb3cpOwoKICAgICAgaWYgKGdsdGYuYW5pbWF0aW9ucyAmJiBnbHRmLmFuaW1hdGlvbnMubGVuZ3RoKSB7CiAgICAgICAgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIobW9kZWwpOwogICAgICAgIHZhciBjbGlwID0gZ2x0Zi5hbmltYXRpb25zLmZpbHRlcihmdW5jdGlvbiAoYSkgeyByZXR1cm4gL3dhdi9pLnRlc3QoYS5uYW1lKTsgfSlbMF0gfHwgZ2x0Zi5hbmltYXRpb25zWzBdOwogICAgICAgIHZhciBhY3QgPSBtaXhlci5jbGlwQWN0aW9uKGNsaXApOyBhY3Quc2V0TG9vcChUSFJFRS5Mb29wT25jZSwgMSk7IGFjdC5jbGFtcFdoZW5GaW5pc2hlZCA9IHRydWU7IGFjdC5wbGF5KCk7CiAgICAgICAgbWl4ZXIuYWRkRXZlbnRMaXN0ZW5lcignZmluaXNoZWQnLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB3YXZpbmcgPSBmYWxzZTsKICAgICAgICAgIGZvciAodmFyIGFpID0gMDsgYWkgPCBhcm1SZXN0Lmxlbmd0aDsgYWkrKykgYXJtUmVzdFthaV0uY3VyID0gYXJtUmVzdFthaV0uYm9uZS5xdWF0ZXJuaW9uLmNsb25lKCk7CiAgICAgICAgICAvLyBQUkVCQUtFRCBhdXRvcGxheSBpcyBkcml2ZW4gT05DRSBieSB0aGUgfjM1MG1zIGVhcmx5LXBsYXkgaW4gcHJlcGFyZVRUUzsgY2FsbGluZyB0cnlBdXRvcGxheQogICAgICAgICAgLy8gaGVyZSB0b28gY2FuIGRvdWJsZS1wbGF5ICh0aGUgZmlyc3Qgd29yZHMgcmVwZWF0KSBpZiB0aGUgZWFybHkgcGxheSgpIHByb21pc2UgcmVqZWN0ZWQgb24gaU9TCiAgICAgICAgICAvLyBidXQgdGhlIGNsaXAgc3RpbGwgc3RhcnRlZC4gT25seSB0aGUgbGl2ZS1mZXRjaCBmYWxsYmFjayBuZWVkcyB0aGUgd2F2ZS1lbmQgdHJpZ2dlci4KICAgICAgICAgIGlmICghUFJFQkFLRUQpIHRyeUF1dG9wbGF5KCk7CiAgICAgICAgfSk7CiAgICAgIH0gZWxzZSB7IHdhdmluZyA9IGZhbHNlOyB9CiAgICAgIGNvbnNvbGUubG9nKCdbbWFzY290XSBsb2FkZWQgb2sg4oCUIG1vcnBoTWVzaGVzPScgKyBtb3JwaHMubGVuZ3RoICsgJyBzcGluZT0nICsgISFzcGluZUJvbmUgKyAnIGFuaW1zPScgKyAoZ2x0Zi5hbmltYXRpb25zID8gZ2x0Zi5hbmltYXRpb25zLmxlbmd0aCA6IDApKTsKICAgIH0sIGZ1bmN0aW9uIChwKSB7IGlmIChwLnRvdGFsKSBjb25zb2xlLmxvZygnW21hc2NvdF0gbG9hZGluZyAnICsgTWF0aC5yb3VuZChwLmxvYWRlZCAvIHAudG90YWwgKiAxMDApICsgJyUnKTsgfSwKICAgICAgIGZ1bmN0aW9uIChlKSB7IGNvbnNvbGUuZXJyb3IoJ1ttYXNjb3RdIGxvYWQgZXJyb3InLCAoZSAmJiBlLm1lc3NhZ2UpIHx8IGUpOyB9KTsKCiAgICBmdW5jdGlvbiBhcHBseU1vcnBocygpIHsKICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3JwaHMubGVuZ3RoOyBpKyspIHsKICAgICAgICB2YXIgbSA9IG1vcnBoc1tpXSwgaW5mbCA9IG0ubWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXM7CiAgICAgICAgZm9yICh2YXIgZiBpbiBtLm1hcCkgeyB2YXIgdiA9IHdlaWdodHNbZl0gfHwgMCwgaXggPSBtLm1hcFtmXTsgZm9yICh2YXIgayA9IDA7IGsgPCBpeC5sZW5ndGg7IGsrKykgaW5mbFtpeFtrXV0gPSB2OyB9CiAgICAgIH0KICAgIH0KICAgIC8vIElkbGUgZXhwcmVzc2lvbiBsYXllci4gZXllQmxpbmsvZXllTG9vay9jaGVla1NxdWludCBhcmVuJ3QgdmlzZW1lIHNoYXBlcyDigJQgYXBwbHlNb3JwaHMKICAgIC8vIG5ldmVyIHJlc2V0cyB0aGVtLCBzbyB0aGV5IG11c3QgYmUgRElSRUNULVNFVCBlYWNoIGZyYW1lIChvdGhlcndpc2UgdGhlIGJsaW5rIHBlYWtzIGF0IDEKICAgIC8vIGFuZCBuZXZlciBkcm9wcyBiYWNrIOKAlCBleWVzIHN0YXkgY2xvc2VkKS4gbW91dGhTbWlsZS9tb3V0aERpbXBsZSBBUkUgaW4gQkxFTkRfTUFQLCBzbwogICAgLy8gYXBwbHlNb3JwaHMgd3JpdGVzIGEgdmlzZW1lIHZhbHVlIGZpcnN0OyB3ZSBtYXgtYmxlbmQgb24gdG9wIHRvIGtlZXAgbGlwLXN5bmMgZXhwcmVzc2lvbi4KICAgIGZ1bmN0aW9uIGFwcGx5SWRsZSgpIHsKICAgICAgdmFyIGd4ID0gZ2F6ZVNtb290aGVkLngsIGd5ID0gZ2F6ZVNtb290aGVkLnk7CiAgICAgIHZhciBnSW4gPSBNYXRoLm1heCgwLCBneCksIGdPdXQgPSBNYXRoLm1heCgwLCAtZ3gpOwogICAgICB2YXIgZ1VwID0gTWF0aC5tYXgoMCwgZ3kpLCBnRG93biA9IE1hdGgubWF4KDAsIC1neSk7CiAgICAgIHZhciBzQ2hlZWsgPSBzbWlsZSAqIDAuODIsIHNEaW1wbGUgPSBzbWlsZSAqIDAuNDA7CiAgICAgIGZ1bmN0aW9uIHNldChkLCBpbmZsLCBuLCB2KSB7IHZhciBpeCA9IGRbbl07IGlmIChpeCAhPT0gdW5kZWZpbmVkKSBpbmZsW2l4XSA9IHY7IH0KICAgICAgZnVuY3Rpb24gc2V0TWF4KGQsIGluZmwsIG4sIHYpIHsgdmFyIGl4ID0gZFtuXTsgaWYgKGl4ICE9PSB1bmRlZmluZWQgJiYgdiA+IChpbmZsW2l4XSB8fCAwKSkgaW5mbFtpeF0gPSB2OyB9CiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9ycGhzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgdmFyIGQgPSBtb3JwaHNbaV0uZGljdCwgaW5mbCA9IG1vcnBoc1tpXS5tZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlczsKICAgICAgICBzZXQoZCwgaW5mbCwgJ2V5ZUJsaW5rTGVmdCcsIGJsaW5rKTsgIHNldChkLCBpbmZsLCAnZXllQmxpbmtSaWdodCcsIGJsaW5rKTsKICAgICAgICBzZXQoZCwgaW5mbCwgJ2V5ZUxvb2tJbkxlZnQnLCAgZ0luKTsgIHNldChkLCBpbmZsLCAnZXllTG9va091dExlZnQnLCAgZ091dCk7CiAgICAgICAgc2V0KGQsIGluZmwsICdleWVMb29rSW5SaWdodCcsIGdPdXQpOyBzZXQoZCwgaW5mbCwgJ2V5ZUxvb2tPdXRSaWdodCcsIGdJbik7CiAgICAgICAgc2V0KGQsIGluZmwsICdleWVMb29rVXBMZWZ0JywgIGdVcCk7ICBzZXQoZCwgaW5mbCwgJ2V5ZUxvb2tVcFJpZ2h0JywgIGdVcCk7CiAgICAgICAgc2V0KGQsIGluZmwsICdleWVMb29rRG93bkxlZnQnLCBnRG93bik7IHNldChkLCBpbmZsLCAnZXllTG9va0Rvd25SaWdodCcsIGdEb3duKTsKICAgICAgICBzZXQoZCwgaW5mbCwgJ2NoZWVrU3F1aW50TGVmdCcsIHNDaGVlayk7IHNldChkLCBpbmZsLCAnY2hlZWtTcXVpbnRSaWdodCcsIHNDaGVlayk7CiAgICAgICAgc2V0TWF4KGQsIGluZmwsICdtb3V0aFNtaWxlTGVmdCcsICBzbWlsZSk7ICAgc2V0TWF4KGQsIGluZmwsICdtb3V0aFNtaWxlUmlnaHQnLCAgc21pbGUpOwogICAgICAgIHNldE1heChkLCBpbmZsLCAnbW91dGhEaW1wbGVMZWZ0Jywgc0RpbXBsZSk7IHNldE1heChkLCBpbmZsLCAnbW91dGhEaW1wbGVSaWdodCcsIHNEaW1wbGUpOwogICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiBsb29wKCkgewogICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7CiAgICAgIHZhciBkdCA9IGNsb2NrLmdldERlbHRhKCk7CiAgICAgIGlmIChtaXhlcikgbWl4ZXIudXBkYXRlKGR0KTsKICAgICAgLy8gUmUtYXNzZXJ0IHRoZSBuZWNrIGxpZnQgZXZlcnkgZnJhbWUgc28gdGhlIG1peGVyIGNhbid0IG92ZXJyaWRlIGl0LgogICAgICBpZiAobmVja1R3aXN0MDEgJiYgbmVja1Jlc3RQb3MpIHsKICAgICAgICBuZWNrVHdpc3QwMS5wb3NpdGlvbi54ID0gbmVja1Jlc3RQb3MueDsKICAgICAgICBuZWNrVHdpc3QwMS5wb3NpdGlvbi55ID0gbmVja1Jlc3RQb3MueSArIE5FQ0tfTElGVDsKICAgICAgICBuZWNrVHdpc3QwMS5wb3NpdGlvbi56ID0gbmVja1Jlc3RQb3MuejsKICAgICAgfQogICAgICAvLyBhZnRlciB0aGUgd2F2ZTogZWFzZSBhcm1zIHRvIHRoZSBiYWtlZCBhcm1zLWRvd24gcmVzdCArIFNwaW5lMDIgYnJlYXRoaW5nCiAgICAgIGlmICghd2F2aW5nKSB7CiAgICAgICAgZm9yICh2YXIgYWkgPSAwOyBhaSA8IGFybVJlc3QubGVuZ3RoOyBhaSsrKSB7IHZhciBhID0gYXJtUmVzdFthaV07IGlmIChhLmN1cikgeyBhLmN1ci5zbGVycChhLnJlc3QsIDAuMSk7IGEuYm9uZS5xdWF0ZXJuaW9uLmNvcHkoYS5jdXIpOyB9IH0KICAgICAgICBpZiAoc3BpbmVCb25lICYmIHNwaW5lUmVzdCkgeyB2YXIgYnQgPSBjbG9jay5lbGFwc2VkVGltZSAqIDIgKiBNYXRoLlBJICogMC4yNSwgdHggPSBNYXRoLnNpbihidCkgKiAwLjAxNTsgdG1wUS5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHR4LCAwLCAwKSk7IHNwaW5lQm9uZS5xdWF0ZXJuaW9uLmNvcHkodG1wUSkubXVsdGlwbHkoc3BpbmVSZXN0KTsgdmFyIGJzID0gMSArIE1hdGguc2luKGJ0KSAqIDAuMDEyOyBzcGluZUJvbmUuc2NhbGUuc2V0KGJzLCAxLCBicyk7IH0KICAgICAgICAvLyBJZGxlIGhlYWQgc3dheSDigJQgc2xvdyB5YXcgKyBwaXRjaCBsYXllcmVkIG9udG8gdGhlIGhlYWQgcmVzdCAoTWFzY290LnRzeDoxNjkzLTE2OTQpLgogICAgICAgIGlmIChoZWFkQm9uZSkgewogICAgICAgICAgc3dheUV1bC5zZXQoTWF0aC5zaW4oY2xvY2suZWxhcHNlZFRpbWUgKiAwLjI3ICsgMS4wKSAqIDAuMDIwLCBNYXRoLnNpbihjbG9jay5lbGFwc2VkVGltZSAqIDAuNDIpICogMC4wMzUsIDAsICdZWFonKTsKICAgICAgICAgIHN3YXlRLnNldEZyb21FdWxlcihzd2F5RXVsKTsKICAgICAgICAgIGhlYWRCb25lLnF1YXRlcm5pb24ucHJlbXVsdGlwbHkoc3dheVEpOwogICAgICAgIH0KICAgICAgICAvLyA9PT09PSBQb3N0LXNwZWVjaCBnZXN0dXJlcyAobm9kX3llcyAtPiBnZXN0dXJlX29wZW5fcGFsbSksIHBvcnRlZCBmcm9tIE1hc2NvdC50c3ggPT09PT0KICAgICAgICBpZiAoIWN1cnJlbnRHZXN0dXJlICYmIGdlc3R1cmVRdWV1ZS5sZW5ndGggPiAwKSB7CiAgICAgICAgICB2YXIgZ25hbWUgPSBnZXN0dXJlUXVldWUuc2hpZnQoKTsKICAgICAgICAgIGlmIChHRVNUVVJFU1tnbmFtZV0pIGN1cnJlbnRHZXN0dXJlID0geyBuYW1lOiBnbmFtZSwgc3RhcnRUaW1lOiBjbG9jay5lbGFwc2VkVGltZSwgZHVyYXRpb246IEdFU1RVUkVTW2duYW1lXS5kdXJhdGlvbiB9OwogICAgICAgIH0KICAgICAgICBpZiAoY3VycmVudEdlc3R1cmUpIHsKICAgICAgICAgIHZhciBnRWwgPSBjbG9jay5lbGFwc2VkVGltZSAtIGN1cnJlbnRHZXN0dXJlLnN0YXJ0VGltZTsKICAgICAgICAgIHZhciBnSyA9IE1hdGgubWluKDEsIGdFbCAvIGN1cnJlbnRHZXN0dXJlLmR1cmF0aW9uKTsKICAgICAgICAgIHZhciBnRW52ID0gTWF0aC5zaW4oZ0sgKiBNYXRoLlBJKTsKICAgICAgICAgIGlmIChjdXJyZW50R2VzdHVyZS5uYW1lID09PSAnbm9kX3llcycgJiYgaGVhZEJvbmUpIHsKICAgICAgICAgICAgLy8gVHdvIGRpc3RpbmN0IGRvd24tdXAgbm9kcyAoTWFzY290LnRzeDoxNjUxKTogcGl0Y2ggPSAtc2luKGvCtzLPgCkgwrcgMC4yMCDCtyBlbnYKICAgICAgICAgICAgbm9kRXVsLnNldCgtTWF0aC5zaW4oZ0sgKiBNYXRoLlBJICogMikgKiAwLjIwICogZ0VudiwgMCwgMCwgJ1lYWicpOwogICAgICAgICAgICBub2RRLnNldEZyb21FdWxlcihub2RFdWwpOwogICAgICAgICAgICBoZWFkQm9uZS5xdWF0ZXJuaW9uLnByZW11bHRpcGx5KG5vZFEpOwogICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50R2VzdHVyZS5uYW1lID09PSAnZ2VzdHVyZV9vcGVuX3BhbG0nKSB7CiAgICAgICAgICAgIC8vIEJvdGggYXJtcyBmb3J3YXJkICsgb3V0d2FyZCwgZm9yZWFybXMgZnVydGhlciBmb3J3YXJkLCB3cmlzdHMgb3V0d2FyZC4KICAgICAgICAgICAgLy8gQXBwbGllZCBhcyBXT1JMRC1zcGFjZSBkZWx0YXMgb250byBlYWNoIGJvbmUncyBjYXB0dXJlZCByZXN0IHZpYSBkcml2ZVdvcmxkIChtYXRjaGVzIE1hc2NvdC50c3g6MTkxMC0xOTI2IGV4YWN0bHkpLgogICAgICAgICAgICB2YXIgdXBGd2QgPSBnRW52ICogLTAuNjAsIHVwU2lkZSA9IGdFbnYgKiAwLjMwOwogICAgICAgICAgICB2YXIgZmFGd2QgPSBnRW52ICogLTAuNTUsIHdyaXN0ID0gZ0VudiAqIDAuMzU7CiAgICAgICAgICAgIGdlc3RRLnNldEZyb21BeGlzQW5nbGUoWHAsIHVwRndkKTsgZ2VzdFEyLnNldEZyb21BeGlzQW5nbGUoWnAsICB1cFNpZGUpOyBnZXN0US5tdWx0aXBseShnZXN0UTIpOyBkcml2ZVdvcmxkKGFybUJvbmVzLkxfVXBwZXJhcm0sIGFybVJlc3RNYXAuTF9VcHBlcmFybSwgZ2VzdFEpOwogICAgICAgICAgICBnZXN0US5zZXRGcm9tQXhpc0FuZ2xlKFhwLCB1cEZ3ZCk7IGdlc3RRMi5zZXRGcm9tQXhpc0FuZ2xlKFpwLCAtdXBTaWRlKTsgZ2VzdFEubXVsdGlwbHkoZ2VzdFEyKTsgZHJpdmVXb3JsZChhcm1Cb25lcy5SX1VwcGVyYXJtLCBhcm1SZXN0TWFwLlJfVXBwZXJhcm0sIGdlc3RRKTsKICAgICAgICAgICAgZ2VzdFEuc2V0RnJvbUF4aXNBbmdsZShYcCwgZmFGd2QpOyBkcml2ZVdvcmxkKGFybUJvbmVzLkxfRm9yZWFybSwgYXJtUmVzdE1hcC5MX0ZvcmVhcm0sIGdlc3RRKTsKICAgICAgICAgICAgZ2VzdFEuc2V0RnJvbUF4aXNBbmdsZShYcCwgZmFGd2QpOyBkcml2ZVdvcmxkKGFybUJvbmVzLlJfRm9yZWFybSwgYXJtUmVzdE1hcC5SX0ZvcmVhcm0sIGdlc3RRKTsKICAgICAgICAgICAgZ2VzdFEuc2V0RnJvbUF4aXNBbmdsZShZcCwgIHdyaXN0KTsgZHJpdmVXb3JsZChhcm1Cb25lcy5MX0hhbmQsIGFybVJlc3RNYXAuTF9IYW5kLCBnZXN0USk7CiAgICAgICAgICAgIGdlc3RRLnNldEZyb21BeGlzQW5nbGUoWXAsIC13cmlzdCk7IGRyaXZlV29ybGQoYXJtQm9uZXMuUl9IYW5kLCBhcm1SZXN0TWFwLlJfSGFuZCwgZ2VzdFEpOwogICAgICAgICAgfQogICAgICAgICAgaWYgKGdFbCA+PSBjdXJyZW50R2VzdHVyZS5kdXJhdGlvbikgewogICAgICAgICAgICB2YXIgZmluaXNoZWROYW1lID0gY3VycmVudEdlc3R1cmUubmFtZTsgY3VycmVudEdlc3R1cmUgPSBudWxsOwogICAgICAgICAgICAvLyBMYXN0IHBvc3Qtc3BlZWNoIGdlc3R1cmUgKG9wZW4gcGFsbSkgZG9uZSAtPiBhdXRvLWFkdmFuY2UgdGhlIGZ1bm5lbC4KICAgICAgICAgICAgaWYgKGZpbmlzaGVkTmFtZSA9PT0gJ2dlc3R1cmVfb3Blbl9wYWxtJyAmJiBnZXN0dXJlUXVldWUubGVuZ3RoID09PSAwKSBhZHZhbmNlVG9OZXh0KCk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICAgIGlmIChzcGVha2luZykgewogICAgICAgIHZhciBwcjsKICAgICAgICBpZiAodXNpbmdBdWRpbyAmJiB0dHNBdWRpbykgewogICAgICAgICAgdmFyIGR1ciA9IHR0c0F1ZGlvLmR1cmF0aW9uOyBpZiAoIWR1ciB8fCAhaXNGaW5pdGUoZHVyKSkgZHVyID0gTWF0aC5tYXgoMS42LCBsaW5lLmxlbmd0aCAqIDAuMDYyKTsKICAgICAgICAgIHByID0gTWF0aC5taW4oMSwgdHRzQXVkaW8uY3VycmVudFRpbWUgLyBkdXIpOyAgIC8vIGxpcC1zeW5jIGRyaXZlbiBieSB0aGUgcmVhbCBhdWRpbydzIGNsb2NrCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHByID0gTWF0aC5taW4oMSwgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3BlYWtTdGFydCkgLyBzcGVha0R1cik7CiAgICAgICAgICBpZiAocHIgPj0gMSkgeyBzcGVha2luZyA9IGZhbHNlOyB0YXJnZXQgPSBWSVMuc2lsZW5jZTsgfQogICAgICAgIH0KICAgICAgICB0YXJnZXQgPSBWSVNbY2hhclZpc2VtZShsaW5lLmNoYXJBdChNYXRoLmZsb29yKHByICogbGluZS5sZW5ndGgpKSB8fCAnICcpXSB8fCBWSVMuc2lsZW5jZTsKICAgICAgfQogICAgICAvLyA9PT09PSBJZGxlIGJlaGF2aW9ycyDigJQgYmxpbmsgKyBzYWNjYWRlIGdhemUgKyBzbWlsZSBwdWxzZSAobWlycm9ycyBNYXNjb3QudHN4KSA9PT09PQogICAgICBpZGxlVGltZXIgKz0gZHQ7CiAgICAgIGlmIChuZXh0QmxpbmtBdCA9PT0gMCkgbmV4dEJsaW5rQXQgPSBpZGxlVGltZXIgKyAyICsgTWF0aC5yYW5kb20oKSAqIDM7CiAgICAgIGlmIChpZGxlVGltZXIgPCBibGlua0FjdGl2ZVVudGlsKSB7CiAgICAgICAgdmFyIGJrID0gMSAtIChibGlua0FjdGl2ZVVudGlsIC0gaWRsZVRpbWVyKSAvIEJMSU5LX0RVUjsKICAgICAgICBibGluayA9IE1hdGguc2luKGJrICogTWF0aC5QSSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgYmxpbmsgPSAwOwogICAgICAgIGlmIChpZGxlVGltZXIgPj0gbmV4dEJsaW5rQXQpIHsKICAgICAgICAgIGJsaW5rQWN0aXZlVW50aWwgPSBpZGxlVGltZXIgKyBCTElOS19EVVI7CiAgICAgICAgICBuZXh0QmxpbmtBdCA9IGlkbGVUaW1lciArIEJMSU5LX0RVUiArIDMgKyBNYXRoLnJhbmRvbSgpICogMzsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKGdhemVOZXh0QXQgPT09IDAgfHwgaWRsZVRpbWVyID49IGdhemVOZXh0QXQpIHsKICAgICAgICBnYXplVGFyZ2V0LnggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxLjI7CiAgICAgICAgZ2F6ZVRhcmdldC55ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC43OwogICAgICAgIGdhemVOZXh0QXQgPSBpZGxlVGltZXIgKyAxICsgTWF0aC5yYW5kb20oKSAqIDI7CiAgICAgIH0KICAgICAgZ2F6ZVNtb290aGVkLnggKz0gKGdhemVUYXJnZXQueCAtIGdhemVTbW9vdGhlZC54KSAqIDAuMzU7CiAgICAgIGdhemVTbW9vdGhlZC55ICs9IChnYXplVGFyZ2V0LnkgLSBnYXplU21vb3RoZWQueSkgKiAwLjM1OwogICAgICB2YXIgc1B1bHNlID0gMDsKICAgICAgaWYgKHNtaWxlUHVsc2VSZW0gPiAwKSB7CiAgICAgICAgdmFyIHNrID0gc21pbGVQdWxzZVJlbSAvIFNNSUxFX0RVUjsKICAgICAgICBzUHVsc2UgPSBNYXRoLnNpbigoMSAtIHNrKSAqIE1hdGguUEkpOwogICAgICAgIHNtaWxlUHVsc2VSZW0gLT0gZHQ7CiAgICAgIH0gZWxzZSBpZiAoaWRsZVRpbWVyID49IG5leHRTbWlsZUF0KSB7CiAgICAgICAgc21pbGVQdWxzZVJlbSA9IFNNSUxFX0RVUjsKICAgICAgICBuZXh0U21pbGVBdCA9IGlkbGVUaW1lciArIFNNSUxFX0RVUiArIDggKyBNYXRoLnJhbmRvbSgpICogMTA7CiAgICAgIH0KICAgICAgc21pbGUgPSBNYXRoLm1pbigwLjYsIFNNSUxFX0JBU0VMSU5FICsgc1B1bHNlICogU01JTEVfUFVMU0VfUEVBSyArICh3YXZpbmcgPyBTTUlMRV9XQVZFX0JPT1NUIDogMCkpOwoKICAgICAgdmFyIHNtID0ge307IGZvciAodmFyIGZmIGluIHRhcmdldCkgc21bZmZdID0gbGVycCh3ZWlnaHRzW2ZmXSB8fCAwLCB0YXJnZXRbZmZdIHx8IDAsIDAuMzUpOyB3ZWlnaHRzID0gc207CiAgICAgIGFwcGx5TW9ycGhzKCk7CiAgICAgIGFwcGx5SWRsZSgpOwogICAgICBpZiAoZGJnRWwgJiYgKGRiZ04rKyAlIDYgPT09IDApKSB7CiAgICAgICAgdmFyIG1jID0gMDsgZm9yICh2YXIgbWkgPSAwOyBtaSA8IG1vcnBocy5sZW5ndGg7IG1pKyspIHsgZm9yICh2YXIga2sgaW4gbW9ycGhzW21pXS5tYXApIG1jKys7IH0KICAgICAgICBkYmdFbC50ZXh0Q29udGVudCA9CiAgICAgICAgICAnVEhSRUUgJyArICghIXdpbmRvdy5USFJFRSkgKyAnIHwgbW9kZWwgJyArICghIW1peGVyIHx8IG1vcnBocy5sZW5ndGggPiAwKSArCiAgICAgICAgICAnXG5tb3JwaE1lc2hlcyAnICsgbW9ycGhzLmxlbmd0aCArICcgfCB2aXNlbWVLZXlzICcgKyBtYyArCiAgICAgICAgICAnXG53YXZpbmcgJyArIHdhdmluZyArICcgfCBzcGVha2luZyAnICsgc3BlYWtpbmcgKyAnIHwgdXNpbmdBdWRpbyAnICsgdXNpbmdBdWRpbyArCiAgICAgICAgICAnXG50dHNBdWRpbyAnICsgKHR0c0F1ZGlvID8gKCd0PScgKyAodHRzQXVkaW8uY3VycmVudFRpbWUgfHwgMCkudG9GaXhlZCgyKSArICcvJyArIChpc0Zpbml0ZSh0dHNBdWRpby5kdXJhdGlvbikgPyB0dHNBdWRpby5kdXJhdGlvbi50b0ZpeGVkKDIpIDogJz8nKSArICcgcGF1c2VkPScgKyB0dHNBdWRpby5wYXVzZWQpIDogJ25vbmUnKSArCiAgICAgICAgICAnXG50dHNGYWlsZWQgJyArIHR0c0ZhaWxlZCArICcgfCB3YW50UGxheSAnICsgd2FudFBsYXkgKyAnIHwgYXV0b3BsYXllZCAnICsgYXV0b3BsYXllZCArCiAgICAgICAgICAnXG5nZXN0dXJlUXVldWUgJyArIGdlc3R1cmVRdWV1ZS5sZW5ndGggKyAnIHwgY3VyR2VzdHVyZSAnICsgKGN1cnJlbnRHZXN0dXJlID8gY3VycmVudEdlc3R1cmUubmFtZSA6ICctJykgKyAnIHwgYWR2YW5jZWQgJyArIGFkdmFuY2VkICsKICAgICAgICAgICdcbmZveC5uYXYgJyArICEhKHdpbmRvdy5mb3ggJiYgd2luZG93LmZveC5uYXZpZ2F0aW9uICYmIHdpbmRvdy5mb3gubmF2aWdhdGlvbi5nb05leHQpOwogICAgICB9CiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTsKICAgIH0KICAgIGxvb3AoKTsKCiAgICAvLyBGZXRjaCB0aGUgcmVhbCBzb2Z0LWZhdGhlciBUVFMgY2xpcCAoc2FtZSBlbmRwb2ludCBhcyBlbmdsaXNoLWFwcC13ZWIpIGFuZCBjYWNoZSB0aGUgQXVkaW8uCiAgICBmdW5jdGlvbiBwcmVwYXJlVFRTKCkgewogICAgICBpZiAodHRzUGVuZGluZyB8fCB0dHNBdWRpbyB8fCB0dHNGYWlsZWQpIHJldHVybjsKICAgICAgLy8gUHJlYmFrZWQgcGF0aCDigJQgcGxheSB0aGUgZW1iZWRkZWQgbmFtZS1sZXNzIGNsaXAgZGlyZWN0bHksIG5vIGZldGNoIChwcm9kLXNhZmUpLgogICAgICBpZiAoUFJFQkFLRUQpIHsKICAgICAgICB0dHNQZW5kaW5nID0gdHJ1ZTsgICAvLyBndWFyZCByZS1lbnRyeTogcHJlYmFrZWQgc2V0cyB0dHNBdWRpbyBvbmx5IH4zNTBtcyBsYXRlciwgc28gd2l0aG91dCB0aGlzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBzZWNvbmQgcHJlcGFyZVRUUygpIChib290ICsgYSB0YXApIHdvdWxkIHNjaGVkdWxlIGEgMm5kIHBsYXkoKSBhbmQgdGhlCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3Qgd29yZHMgd291bGQgYmUgaGVhcmQgdHdpY2UuCiAgICAgICAgLy8gQnVpbGQgdGhlIDxhdWRpbz4gT05DRSAoY29uZmlnICsgb25lbmRlZCkuIE1pcnJvcnMgQW5oTk4ncyBvcGVuZXI6IGNyZWF0aW9uIGlzIGRlZmVycmVkCiAgICAgICAgLy8gaW50byB0aGUgc2FtZSB0aWNrIGFzIHBsYXkoKSBzbyBpT1MgdHJlYXRzIGl0IGFzIHVzZXItaW5pdGlhdGVkIChhbiBlbGVtZW50IGNvbnN0cnVjdGVkIGF0CiAgICAgICAgLy8gYm9vdCDigJQgb3V0c2lkZSBhbnkgZ2VzdHVyZSB0aWNrIOKAlCB0aGVuIHBsYXllZCAzNTBtcyBsYXRlciBpcyBmYXIgbW9yZSBsaWtlbHkgdG8gYmUgYmxvY2tlZCkuCiAgICAgICAgdmFyIG1rUHJlYmFrZWQgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICBpZiAodHRzQXVkaW8pIHJldHVybjsKICAgICAgICAgIHR0c0F1ZGlvID0gbmV3IEF1ZGlvKHByZWJha2VkQmxvYlVybCgpKTsgdHRzQXVkaW8ucHJlbG9hZCA9ICdhdXRvJzsKICAgICAgICAgIHRyeSB7IHR0c0F1ZGlvLnBsYXliYWNrUmF0ZSA9IFRUU19SQVRFOyB0dHNBdWRpby5wcmVzZXJ2ZXNQaXRjaCA9IHRydWU7IH0gY2F0Y2ggKGUpIHt9CiAgICAgICAgICB0dHNBdWRpby5vbmVuZGVkID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICBzcGVha2luZyA9IGZhbHNlOyB0YXJnZXQgPSBWSVMuc2lsZW5jZTsgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ213LXBsYXlpbmcnKTsKICAgICAgICAgICAgZ2VzdHVyZVF1ZXVlID0gUE9TVF9TUEVFQ0hfR0VTVFVSRVMuc2xpY2UoKTsgICAvLyBjaGFpbiBub2RfeWVzIC0+IGdlc3R1cmVfb3Blbl9wYWxtCiAgICAgICAgICB9OwogICAgICAgIH07CiAgICAgICAgaWYgKHdhbnRQbGF5KSB7IG1rUHJlYmFrZWQoKTsgcGxheUF1ZGlvKCk7IHJldHVybjsgfQogICAgICAgIC8vIGlPUyBhdXRvcGxheTogY3JlYXRlICsgcGxheSB3aXRoaW4gT05FIHRpY2ssIH4zNTBtcyBhZnRlciBlbnRyeSAoaW5zaWRlIFNhZmFyaSdzIHNob3J0CiAgICAgICAgLy8gdXNlci1hY3RpdmF0aW9uIHdpbmRvdyBmcm9tIHRoZSAiQ29udGludWUiIHRhcCkuIEJpemJvIHNwZWFrcyBvdmVyIHRoZSB0YWlsIG9mIHRoZSB3YXZlLgogICAgICAgIC8vIElmIGJsb2NrZWQsIGF1dG9wbGF5ZWQgcmVzZXRzIGFuZCB0aGUgd2F2ZS1maW5pc2hlZCBoYW5kbGVyICsgYSBzdGFnZSB0YXAgcmV0cnkuCiAgICAgICAgYXV0b3BsYXllZCA9IHRydWU7CiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgICAgICBta1ByZWJha2VkKCk7CiAgICAgICAgICB1c2luZ0F1ZGlvID0gdHJ1ZTsgc3BlYWtpbmcgPSB0cnVlOwogICAgICAgICAgdHJ5IHsgdHRzQXVkaW8uY3VycmVudFRpbWUgPSAwOyB9IGNhdGNoIChlKSB7fQogICAgICAgICAgdHRzQXVkaW8ucGxheSgpLnRoZW4oZnVuY3Rpb24gKCkgewogICAgICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgcmV2ZWFsQnViYmxlKCk7CiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIGlmICh0dHNBdWRpbyAmJiAhdHRzQXVkaW8ucGF1c2VkKSB7IHJldmVhbEJ1YmJsZSgpOyByZXR1cm47IH0gICAvLyBpT1M6IHByb21pc2UgcmVqZWN0ZWQgYnV0IHRoZSBjbGlwIGFjdHVhbGx5IHN0YXJ0ZWQg4oCUIGtlZXAgcGxheWluZywgZG9uJ3QgcmV0cnkgKHdvdWxkIGRvdWJsZSB0aGUgZmlyc3Qgd29yZHMpCiAgICAgICAgICAgIGF1dG9wbGF5ZWQgPSBmYWxzZTsgdXNpbmdBdWRpbyA9IGZhbHNlOyBzcGVha2luZyA9IGZhbHNlOyAgICAgICAvLyBnZW51aW5lbHkgYmxvY2tlZCAtPiBhIHN0YWdlIHRhcCBzdGFydHMgaXQKICAgICAgICAgIH0pOwogICAgICAgIH0sIDM1MCk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICAgIHR0c1BlbmRpbmcgPSB0cnVlOwogICAgICB2YXIgdHRzQm9keSA9IChNV19MQU5HICE9PSAnZW4nKSA/IHsgaW5wdXQ6IGxpbmUsIHJlZkF1ZGlvOiBUVFNfUkVGLCBsYW5ndWFnZTogTVdfTEFORyB9IDogeyBpbnB1dDogbGluZSwgcmVmQXVkaW86IFRUU19SRUYgfTsKICAgICAgZmV0Y2goVFRTX1VSTCwgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IEpTT04uc3RyaW5naWZ5KHR0c0JvZHkpIH0pCiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuanNvbigpOyB9KQogICAgICAgIC50aGVuKGZ1bmN0aW9uIChqKSB7CiAgICAgICAgICB0dHNQZW5kaW5nID0gZmFsc2U7CiAgICAgICAgICB2YXIgdSA9IGogJiYgai5kYXRhICYmIGouZGF0YS51cmw7CiAgICAgICAgICBpZiAoIXUpIHsgdHRzRmFpbGVkID0gdHJ1ZTsgaWYgKHdhbnRQbGF5KSBzcGVha0Jyb3dzZXIoKTsgZWxzZSB0cnlBdXRvcGxheSgpOyByZXR1cm47IH0KICAgICAgICAgIHR0c0F1ZGlvID0gbmV3IEF1ZGlvKHUpOyB0dHNBdWRpby5wcmVsb2FkID0gJ2F1dG8nOwogICAgICAgICAgdHJ5IHsgdHRzQXVkaW8ucGxheWJhY2tSYXRlID0gVFRTX1JBVEU7IHR0c0F1ZGlvLnByZXNlcnZlc1BpdGNoID0gdHJ1ZTsgfSBjYXRjaCAoZSkge30KICAgICAgICAgIHR0c0F1ZGlvLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIHNwZWFraW5nID0gZmFsc2U7IHRhcmdldCA9IFZJUy5zaWxlbmNlOyBidG4uY2xhc3NMaXN0LnJlbW92ZSgnbXctcGxheWluZycpOwogICAgICAgICAgICBnZXN0dXJlUXVldWUgPSBQT1NUX1NQRUVDSF9HRVNUVVJFUy5zbGljZSgpOyAgIC8vIGNoYWluIG5vZF95ZXMgLT4gZ2VzdHVyZV9vcGVuX3BhbG0KICAgICAgICAgIH07CiAgICAgICAgICBpZiAod2FudFBsYXkpIHBsYXlBdWRpbygpOwogICAgICAgICAgZWxzZSB0cnlBdXRvcGxheSgpOyAgIC8vIGF1ZGlvIGFycml2ZWQgYWZ0ZXIgdGhlIHdhdmUgZmluaXNoZWQg4oCUIHRyeSB0byBwbGF5IG5vdwogICAgICAgIH0pCiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgdHRzUGVuZGluZyA9IGZhbHNlOyB0dHNGYWlsZWQgPSB0cnVlOyBpZiAod2FudFBsYXkpIHNwZWFrQnJvd3NlcigpOyBlbHNlIHRyeUF1dG9wbGF5KCk7IH0pOwogICAgfQogICAgLy8gU2lsZW50IGF1dG8tcGxheSBhdHRlbXB0LiBNb2Rlcm4gbW9iaWxlIGJyb3dzZXJzIGdyYW50IHRoZSBwYWdlIHN0aWNreSBhdWRpbyBhY3RpdmF0aW9uCiAgICAvLyBvbmNlIGFueSBlbGVtZW50IGhhcyBiZWVuIHRhcHBlZCAodGhlIEZ1bm5lbEZveCAiTmV4dCIgYnV0dG9uIG9uIGEgcHJldmlvdXMgc2NyZWVuIGNvdW50cyksCiAgICAvLyBzbyB0aGlzIHVzdWFsbHkgd29ya3MuIE9uIHRoZSByYXJlIGZhaWwgKGNvbGQgaU9TIFNhZmFyaSwgaGFyZCByZWxvYWQpLCB0aGUgLmNhdGNoIGlzIGEKICAgIC8vIG5vLW9wIGFuZCB0aGUgdXNlcidzIHN0YWdlLXRhcCBpcyBzdGlsbCB0aGUgZmFsbGJhY2suCiAgICBmdW5jdGlvbiB0cnlBdXRvcGxheSgpIHsKICAgICAgaWYgKGF1dG9wbGF5ZWQgfHwgd2F2aW5nKSByZXR1cm47CiAgICAgIC8vIFRUUyBub3QgcmVhZHk6IGlmIGl0IEZBSUxFRCBvdXRyaWdodCwgZmFsbCBiYWNrIHRvIGJyb3dzZXIgdm9pY2UgKHN0aWxsIGNoYWlucwogICAgICAvLyBub2QgLT4gb3Blbi1wYWxtIC0+IGF1dG8tYWR2YW5jZSkgc28gdGhlIGZ1bm5lbCBuZXZlciBzdGFsbHMuIElmIHN0aWxsIHBlbmRpbmcsCiAgICAgIC8vIHdhaXQg4oCUIHByZXBhcmVUVFMncyByZXNvbHZlL2NhdGNoIHJlLWludm9rZXMgdHJ5QXV0b3BsYXkuCiAgICAgIGlmICghdHRzQXVkaW8pIHsgaWYgKHR0c0ZhaWxlZCkgeyBhdXRvcGxheWVkID0gdHJ1ZTsgc2V0VGltZW91dChzcGVha0Jyb3dzZXIsIFRUU19BVVRPUExBWV9ERUxBWV9NUyk7IH0gcmV0dXJuOyB9CiAgICAgIGF1dG9wbGF5ZWQgPSB0cnVlOwogICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKICAgICAgICBpZiAoIXR0c0F1ZGlvKSByZXR1cm47CiAgICAgICAgdXNpbmdBdWRpbyA9IHRydWU7IHNwZWFraW5nID0gdHJ1ZTsKICAgICAgICB0dHNBdWRpby5jdXJyZW50VGltZSA9IDA7CiAgICAgICAgdHRzQXVkaW8ucGxheSgpLnRoZW4oZnVuY3Rpb24gKCkgewogICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgICAgICAgICAgICAvLyBnb3QgYXV0b3BsYXkg4oCUIGhpZGUgdGhlIENUQTsgc3RhZ2UgdGFwcyByZXBsYXkKICAgICAgICAgIHJldmVhbEJ1YmJsZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd29yZHMgYXBwZWFyIGluIHN5bmMgd2l0aCB0aGUgdm9pY2UKICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7CiAgICAgICAgICBhdXRvcGxheWVkID0gZmFsc2U7IHVzaW5nQXVkaW8gPSBmYWxzZTsgc3BlYWtpbmcgPSBmYWxzZTsgICAvLyBibG9ja2VkIOKAlCBsZXQgdGhlIHVzZXIgdGFwCiAgICAgICAgfSk7CiAgICAgIH0sIFRUU19BVVRPUExBWV9ERUxBWV9NUyk7CiAgICB9CiAgICBmdW5jdGlvbiBwbGF5QXVkaW8oKSB7CiAgICAgIGF1dG9wbGF5ZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnkgcGxheSBhdHRlbXB0IGNvdW50czsgcHJldmVudHMgdHJ5QXV0b3BsYXkgbGF0ZXIKICAgICAgd2FudFBsYXkgPSBmYWxzZTsgdXNpbmdBdWRpbyA9IHRydWU7IHNwZWFraW5nID0gdHJ1ZTsgYnRuLmNsYXNzTGlzdC5hZGQoJ213LXBsYXlpbmcnKTsKICAgICAgdHJ5IHsgaWYgKHdpbmRvdy5zcGVlY2hTeW50aGVzaXMpIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuY2FuY2VsKCk7IH0gY2F0Y2ggKGUpIHt9CiAgICAgIHRyeSB7IHR0c0F1ZGlvLmN1cnJlbnRUaW1lID0gMDsgfSBjYXRjaCAoZSkge30KICAgICAgdHRzQXVkaW8ucGxheSgpCiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgcmV2ZWFsQnViYmxlKCk7IH0pICAgLy8gaGlkZSBhZnRlciBhIHN1Y2Nlc3NmdWwgbWFudWFsIHBsYXkgdG9vCiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgdXNpbmdBdWRpbyA9IGZhbHNlOyBzcGVha2luZyA9IGZhbHNlOyBidG4uY2xhc3NMaXN0LnJlbW92ZSgnbXctcGxheWluZycpOyBzcGVha0Jyb3dzZXIoKTsgfSk7CiAgICB9CiAgICAvLyBBdXRvLWFkdmFuY2UgdG8gdGhlIG5leHQgRnVubmVsRm94IHNjcmVlbiwgb25jZSwgYWZ0ZXIgdGhlIG9wZW4tcGFsbSBnZXN0dXJlLgogICAgZnVuY3Rpb24gYWR2YW5jZVRvTmV4dCgpIHsKICAgICAgaWYgKGFkdmFuY2VkIHx8ICFBVVRPX0FEVkFOQ0UpIHJldHVybjsKICAgICAgYWR2YW5jZWQgPSB0cnVlOwogICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKICAgICAgICB0cnkgeyBpZiAod2luZG93LmZveCAmJiB3aW5kb3cuZm94Lm5hdmlnYXRpb24gJiYgd2luZG93LmZveC5uYXZpZ2F0aW9uLmdvTmV4dCkgd2luZG93LmZveC5uYXZpZ2F0aW9uLmdvTmV4dCgpOyB9IGNhdGNoIChlKSB7fQogICAgICB9LCBBRFZBTkNFX0RFTEFZX01TKTsKICAgIH0KICAgIGZ1bmN0aW9uIHNwZWFrQnJvd3NlcigpIHsKICAgICAgaWYgKCEoJ3NwZWVjaFN5bnRoZXNpcycgaW4gd2luZG93KSkgcmV0dXJuOwogICAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpOwogICAgICB2YXIgdSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UobGluZSk7CiAgICAgIHZhciBsYW5nUHJlZml4ID0gKE1XX0xBTkcgIT09ICdlbicpID8gTVdfTEFORyA6ICdlbic7CiAgICAgIHUubGFuZyA9IChNV19MQU5HICE9PSAnZW4nKSA/IChNV19MQU5HICsgJy0nICsgTVdfTEFORy50b1VwcGVyQ2FzZSgpKSA6ICdlbi1VUyc7CiAgICAgIC8vIEJpemJvIGlzIG1hbGUg4oCUIHBpY2sgYSBNQUxFIHZvaWNlIGluIHRoZSByaWdodCBsYW5ndWFnZSBzbyB0aGUgZmFsbGJhY2sgZG9lc24ndCBzb3VuZCBmZW1hbGUKICAgICAgLy8gKGRlZmF1bHQgT1Mgdm9pY2UgaXMgb2Z0ZW4gZmVtYWxlLCBlLmcuIFNhbWFudGhhKS4gZ2V0Vm9pY2VzKCkgaXMgdXN1YWxseSByZWFkeSBieSBub3cuCiAgICAgIHRyeSB7CiAgICAgICAgdmFyIHZzID0gKHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzICYmIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCkpIHx8IFtdOwogICAgICAgIHZhciBsYW5nVnMgPSB2cy5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgbGFuZ1ByZWZpeCwgJ2knKS50ZXN0KHYubGFuZyB8fCAnJyk7IH0pOwogICAgICAgIHZhciBtYWxlID0gbGFuZ1ZzLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gL1xiKG1hbGV8ZGFuaWVsfGFsZXh8ZnJlZHxhYXJvbnxhcnRodXJ8b2xpdmVyfGdlb3JnZXxqYW1lc3x0b218ZGF2aWR8cmlzaGl8Z29yZG9ufG1hcmt1c3xjb25yYWR8c3RlZmFufHlhbm5pY2spXGIvaS50ZXN0KHYubmFtZSB8fCAnJykgJiYgIS9mZW1hbGUvaS50ZXN0KHYubmFtZSB8fCAnJyk7IH0pOwogICAgICAgIHZhciBwaWNrID0gbWFsZVswXSB8fCBsYW5nVnNbMF07CiAgICAgICAgaWYgKHBpY2spIHUudm9pY2UgPSBwaWNrOwogICAgICB9IGNhdGNoIChlKSB7fQogICAgICB1LnJhdGUgPSAwLjk1OyB1LnBpdGNoID0gMC45OyAgIC8vIGxvd2VyIHBpdGNoIC0+IG1hbGUtbGVhbmluZyBldmVuIGlmIG5vIG5hbWVkIG1hbGUgdm9pY2UgZm91bmQKICAgICAgdXNpbmdBdWRpbyA9IGZhbHNlOyBzcGVha0R1ciA9IE1hdGgubWF4KDE2MDAsIGxpbmUubGVuZ3RoICogNjIpOyBzcGVha1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7IHNwZWFraW5nID0gdHJ1ZTsKICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ213LXBsYXlpbmcnKTsKICAgICAgdS5vbnN0YXJ0ID0gcmV2ZWFsQnViYmxlOyAgIC8vIGZhbGxiYWNrIHZvaWNlIOKAlCBzdGlsbCBzeW5jIHRoZSB3b3JkcyB0byBzcGVlY2ggc3RhcnQKICAgICAgdS5vbmVuZCA9IGZ1bmN0aW9uICgpIHsKICAgICAgICBzcGVha2luZyA9IGZhbHNlOyB0YXJnZXQgPSBWSVMuc2lsZW5jZTsgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ213LXBsYXlpbmcnKTsKICAgICAgICBnZXN0dXJlUXVldWUgPSBQT1NUX1NQRUVDSF9HRVNUVVJFUy5zbGljZSgpOyAgIC8vIGZhbGxiYWNrIHZvaWNlIGFsc28gY2hhaW5zIG5vZCAtPiBvcGVuLXBhbG0gLT4gYWR2YW5jZQogICAgICB9OwogICAgICByZXZlYWxCdWJibGUoKTsgICAgICAgICAgICAgLy8gb25zdGFydCBjYW4gYmUgZmxha3kgaW4gc29tZSBicm93c2Vyczsgc2hvdyBub3cgYXMgYSBzYWZldHkgbmV0CiAgICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsodSk7CiAgICB9CiAgICBmdW5jdGlvbiBzcGVhaygpIHsKICAgICAgLy8gUHJlZmVyIHRoZSByZWFsIHNvZnQtZmF0aGVyIFRUUyAodGhlIGVuZ2xpc2gtYXBwLXdlYiB2b2ljZSk7IGJyb3dzZXIgc3BlZWNoIGlzIHRoZSBmYWxsYmFjay4KICAgICAgaWYgKHR0c0F1ZGlvKSB7IHBsYXlBdWRpbygpOyByZXR1cm47IH0KICAgICAgaWYgKCF0dHNGYWlsZWQpIHsgd2FudFBsYXkgPSB0cnVlOyBidG4uY2xhc3NMaXN0LmFkZCgnbXctcGxheWluZycpOyBpZiAoIXR0c1BlbmRpbmcpIHByZXBhcmVUVFMoKTsgcmV0dXJuOyB9CiAgICAgIHNwZWFrQnJvd3NlcigpOwogICAgfQogICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3BlYWspOwogICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3BlYWspOwogICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHsKICAgICAgdmFyIHcgPSBjYW52YXMuY2xpZW50V2lkdGggfHwgcm9vdC5jbGllbnRXaWR0aCB8fCAzNjA7CiAgICAgIHZhciBoID0gY2FudmFzLmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgSDsKICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3LCBoLCBmYWxzZSk7IGNhbWVyYS5hc3BlY3QgPSB3IC8gaDsgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTsKICAgIH0pOwogIH0KICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdCk7IGVsc2UgYm9vdCgpOwp9KSgpOwo="><\/script>
</div>`,cta:"Continue"},{id:"q-a-7",type:"raw",name:"Q&A 7",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>What is your current level?</h1><div class="ff-opts" style="grid-template-columns:repeat(1,1fr)"><div class="ff-opt"><span>A1 (Simple greetings)</span></div><div class="ff-opt"><span>A2 (Short conversations)</span></div><div class="ff-opt"><span>B1 (Detailed speaking)</span></div><div class="ff-opt"><span>B2 (Fluent &amp; Natural)</span></div><div class="ff-opt"><span>C1 (Expert in any topic)</span></div><div class="ff-opt"><span>A0 (Starting from zero)</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"q-a-8",type:"raw",name:"Q&A 8",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>What is your target level?</h1><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><span>A1 
(Simple greetings)</span></div><div class="ff-opt"><span>A2 
(Short conversations)</span></div><div class="ff-opt"><span>B1 
(Detailed speaking)</span></div><div class="ff-opt"><span>B2 
(Fluent &amp; Natural)</span></div><div class="ff-opt"><span>C1 
(Expert in any topic)</span></div><div class="ff-opt"><span>C2 
(Native-like)</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"specific-target",type:"raw",name:"Q&A 9",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>What is your goal for learning English?</h1><input class="ff-input" type="text" placeholder=""><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-insert"},{id:"deadline-weeks",type:"raw",name:"Q&A 10",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>&lt;span&gt;How soon do you want to reach this goal?&lt;/span&gt;</h1><div class="ff-opts" style="grid-template-columns:repeat(1,1fr)"><div class="ff-opt"><span>1 month</span></div><div class="ff-opt"><span>3 months</span></div><div class="ff-opt"><span>6 months</span></div><div class="ff-opt"><span>1 year</span></div><div class="ff-opt"><span>Help me decide</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"chem-2",type:"raw",name:"Chêm",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>See clear progress after &lt;br&gt;&lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;just 2 weeks&lt;/span&gt;.</h1><div class="ff-note">[Carousel]</div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/Qv9bGb3K.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/usY9H613.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/6DN19KWD.webp" alt=""></div><button class="ff-btn" type="button" data-cta>CONTINUE</button><!-- PREWARM (display-only, no visible UI). Put this in a Raw HTML element on an EARLY
     screen - AFTER the level/target/deadline/name questions, ideally 1-2 screens BEFORE the
     email screen. It pre-generates the path under a PLACEHOLDER email and caches it so the
     reveal is instant. It does NOT register the real email (the loader does that on submit
     when there is no cache). Safe to leave the loader in place - it reuses this cache, or
     regenerates with the real email if the prewarm did not finish. -->
<script>window.OB_MODE = "prewarm";<\/script>
<script>
// FunnelFox - Loader screen. Generates the learning path on the dedicated
// no-auth funnel endpoint, stores it for the reveal screen, then advances.
// See backend doc §13 (Onboarding qua Funnel) + spec 2026-05-27.
//
// 2026-06-06: migrated off the app endpoint. The backend turned on
// SIGNATURE_REQUIRED -> /v1/learning/onboarding (auth + x-api-signature) now
// 400s with ERR08 from a browser. The funnel must use the purpose-built
// /v1/learning/onboarding/funnelfox: NO Authorization, NO signature, just
// \`email\` in the body. Verified live -> 201 + full path.

// DEV. Routes live under /api/v1/... (verified: /v1/... -> 404). Swap host for prod.
var BASE_URL = 'https://api-chatbot-ai-iip505.dev.aperogroup.ai/api';

function normalizeEmail(raw) {
  return String(raw == null ? '' : raw).trim().toLowerCase();
}

function numOrUndef(v) {
  if (v === undefined || v === null || v === '') return undefined;
  var n = Number(v);
  // Non-numeric (e.g. an option label "3 months") -> undefined, NOT NaN. JSON.stringify
  // serializes NaN as null, which the API rejects ("deadline_weeks must be an integer").
  return isNaN(n) ? undefined : n;
}

// CEFR ladder - used to default target_cefr when the funnel doesn't ask for it.
var CEFR_LADDER = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// The API only accepts UPPERCASE CEFR codes (A1, B2, ...). Funnel option values are
// often lowercase ("a1"), which the API rejects with a 400 -> normalize to uppercase.
function normCefr(level) {
  return String(level == null ? '' : level).trim().toUpperCase();
}
function bumpCefr(level, steps) {
  var i = CEFR_LADDER.indexOf(normCefr(level));
  if (i < 0) return 'B1';
  return CEFR_LADDER[Math.min(i + steps, CEFR_LADDER.length - 1)];
}

// FunnelFox stores each answer as { id, value, label } (or { value, type } for
// text/email, or an array of those for multi-select). Extract the raw value;
// arrays become a comma-joined string of their values.
function fxVal(x) {
  if (x == null) return undefined;
  if (Array.isArray(x)) {
    return x.map(fxVal).filter(function (v) { return v != null && v !== ''; }).join(',');
  }
  if (typeof x === 'object') return x.value;
  return x;
}

// Read an input by name, case-insensitively (so "Current_cefr" matches "current_cefr"),
// already unwrapped to its value.
function fxGet(inputs, name) {
  var keys = Object.keys(inputs || {});
  name = String(name).toLowerCase();
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === name) return fxVal(inputs[keys[i]]);
  }
  return undefined;
}

function buildOnboardingPayload(inputs) {
  inputs = inputs || {};
  var topicsRaw = fxGet(inputs, 'topics');
  var topics = topicsRaw
    ? String(topicsRaw).split(',').map(function (s) { return s.trim(); }).filter(Boolean)
    : undefined;
  var cefr = normCefr(fxGet(inputs, 'current_cefr')) || undefined;
  var tgtRaw = fxGet(inputs, 'target_cefr');
  var payload = {
    // --- required by the live API (verified against DEV; doc wrongly marks some optional) ---
    targetLanguage: 'en',
    current_cefr: cefr,
    target_cefr: (tgtRaw ? normCefr(tgtRaw) : bumpCefr(cefr, 2)),
    l1_language: fxGet(inputs, 'l1_language') || 'vi',
    user_name: fxGet(inputs, 'user_name') || 'Learner',
    age: numOrUndef(fxGet(inputs, 'age')) || 25,
    // The /funnelfox endpoint REQUIRES these two (validation: specific_target "Field required",
    // deadline_weeks "must be a valid integer"). Default them so a skipped/misconfigured funnel
    // question never 400s the reveal; a real answer overrides the default.
    specific_target: fxGet(inputs, 'specific_target') || 'Speak English confidently in everyday situations',
    deadline_weeks: numOrUndef(fxGet(inputs, 'deadline_weeks')) || 12,
    // --- optional (omitted when empty) ---
    topics: topics,
    lessons_per_week: numOrUndef(fxGet(inputs, 'lessons_per_week')),
    study_days_per_week: numOrUndef(fxGet(inputs, 'study_days_per_week')),
    persona: fxGet(inputs, 'persona') || undefined,
    accent: fxGet(inputs, 'accent') || undefined,
    feedback_style: fxGet(inputs, 'feedback_style') || undefined
  };
  Object.keys(payload).forEach(function (k) {
    if (payload[k] === undefined) delete payload[k];
  });
  return payload;
}

// The reveal screen reads only a small subset of the path. FunnelFox input storage
// has a size ceiling, and the full path (~23 KB, half of which is the unused
// first3Details blob) overruns it -> the stored value silently fails to persist and
// the reveal sees nothing. Strip to just what the reveal renders (~3.6 KB).
function slimPath(data) {
  data = data || {};
  var u = data.user || {};
  return {
    user: {
      name: u.name, deadlineWeeks: u.deadlineWeeks,
      currentCefr: u.currentCefr, targetCefr: u.targetCefr, goal: u.goal
    },
    totalLessonsToTarget: data.totalLessonsToTarget,
    deadlineWeeks: data.deadlineWeeks,
    lessons: (data.lessons || []).map(function (l) {
      return { order: l.order, level: l.level, scenarioTitle: l.scenarioTitle, topic: l.topic };
    }),
    checkpoints: (data.checkpoints || []).map(function (c) {
      return { atLesson: c.atLesson, type: c.type, message: c.message };
    })
  };
}

// Generate the path on the no-auth funnel endpoint. \`payload\` MUST include \`email\`
// (backend §13.2: creates/reuses the email-bound account, then runs onboarding).
// No Authorization, no x-api-signature - this endpoint is built for the web funnel.
// 409 ERR111 = the email already has an active subscription (returning paid user);
// the path is not regenerated, so we surface the error and let the reveal fall back.
async function generatePath(fetchFn, base, payload) {
  var res = await fetchFn(base + '/v1/learning/onboarding/funnelfox', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    var body = '';
    try { body = await res.text(); } catch (e) {}
    throw new Error('onboarding failed: ' + res.status + ' - ' + String(body).slice(0, 300));
  }
  var json = await res.json();
  if (!json || !json.data) throw new Error('onboarding: empty data');
  return json.data;
}

// Read the cached path string (FunnelFox may wrap a stored value as { value }).
function cachedPath(fox) {
  var v = fox.inputs.get('learningPath');
  if (v && typeof v === 'object') v = v.value;
  return (v && fox.inputs.get('learningPathError') !== '1') ? v : '';
}

// DISPLAY-ONLY prewarm identity. The path CONTENT depends only on the answers, not the
// email, so we can pre-generate it before the real email is known and cache it for an
// instant reveal. We use a throwaway placeholder email (valid format, never an active sub
// -> no 409). NOTE: this does NOT register the user's real email - the loader still runs
// the real email when there's no cache, and the real email is what payment/stripe-register
// match on. (Open Q for backend: does payment need the real email to have hit /funnelfox?)
function prewarmEmail(fox) {
  var e = fxVal(fox.inputs.get('prewarmEmail'));
  if (!e) {
    e = 'pw-' + Date.now() + '-' + Math.floor(Math.random() * 1e9) + '@prewarm.languoso.ai';
    fox.inputs.set('prewarmEmail', e);
  }
  return e;
}

// deps: { fox, fetchFn, base, prewarm? }
// - submit (default): generates with the REAL email (or reuses a cached path), then goNext().
// - prewarm: generates from the answers-so-far under a PLACEHOLDER email, caches it, NO goNext.
//   Prewarm is display-only and never sets the error flag (a failed prewarm just lets the
//   loader regenerate with the real email on submit).
// Never blocks the funnel - on any submit failure it flags the error and still advances.
async function submitOnboarding(deps) {
  var fox = deps.fox, fetchFn = deps.fetchFn, base = deps.base, prewarm = !!deps.prewarm;

  // Already generated (e.g. by a prewarm run) -> nothing to do; just advance on submit.
  if (cachedPath(fox)) {
    if (!prewarm) fox.navigation.goNext();
    return;
  }

  var realEmail = normalizeEmail(fxVal(fox.inputs.getEmail()) || fxVal(fox.inputs.get('email')));
  if (!realEmail && !prewarm) {
    fox.inputs.set('learningPathError', '1');
    fox.trackCustom('OnboardingPathError', { message: 'missing email' });
    fox.navigation.goNext();
    return;
  }
  // submit -> real email; prewarm (email not yet known) -> placeholder, display only.
  var email = realEmail || prewarmEmail(fox);

  var payload = buildOnboardingPayload(fox.inputs.getAll());
  // Prewarm only once the required answer (current_cefr) exists - otherwise wait for a later run.
  if (prewarm && !payload.current_cefr) return;
  payload.email = email;   // required by the funnel endpoint (binds the account)

  try {
    fox.inputs.set('learningPathPayload', JSON.stringify(payload));   // for debugging a 400
    var data = await generatePath(fetchFn, base, payload);
    var stored = JSON.stringify(slimPath(data));
    fox.inputs.set('learningPathError', '');
    fox.inputs.set('learningPath', stored);
    fox.inputs.set('learningPathDebug', (prewarm ? 'prewarm ' : '') + 'ok: ' + (data.lessons ? data.lessons.length : 0) + ' lessons, stored ' + stored.length + ' chars');
    fox.trackCustom('OnboardingPathGenerated', { lessons: data.totalLessonsToTarget, prewarm: prewarm });
    if (!prewarm) fox.navigation.goNext();
  } catch (e) {
    var msg = String((e && e.message) || e);
    if (prewarm) {
      // Don't block the funnel on a prewarm failure - the loader regenerates on submit.
      fox.inputs.set('learningPathDebug', 'prewarm error: ' + msg);
      fox.trackCustom('OnboardingPathError', { message: msg, prewarm: true });
      return;
    }
    fox.inputs.set('learningPathError', '1');
    fox.inputs.set('learningPathDebug', 'error: ' + msg);
    fox.trackCustom('OnboardingPathError', { message: msg });
    fox.navigation.goNext();
  }
}

// Runtime wiring - runs in the FunnelFox browser, skipped under Jest.
// RECOMMENDED: paste this on a dedicated "Building your plan..." LOADER screen that
// comes AFTER the email screen. It auto-runs on load (email already captured) and
// advances to the reveal screen when the path is ready.
// ALT: paste on the email screen and trigger via a button (see selectors below).
if (typeof window !== 'undefined' && window.fox) {
  var _deps = function (extra) {
    var d = { fox: window.fox, fetchFn: window.fetch.bind(window), base: BASE_URL };
    if (extra) for (var k in extra) d[k] = extra[k];
    return d;
  };
  // Exposed so a button's "run JavaScript on click" action can call them directly.
  window.runOnboarding = function () { return submitOnboarding(_deps()); };                       // submit (loader)
  window.prewarmOnboarding = function () { return submitOnboarding(_deps({ prewarm: true })); };   // display-only pre-generate

  if (window.OB_MODE === 'prewarm') {
    // PREWARM screen: place this on an EARLY screen (after level/target/deadline/name Qs).
    // Generates the path under a placeholder email so the loader's reveal is instant. The
    // loader sets OB_MODE='submit' to override this if the script is left on later screens.
    window.prewarmOnboarding();
  } else if (normalizeEmail(fxVal(window.fox.inputs.getEmail()) || fxVal(window.fox.inputs.get('email')))) {
    // Loader-screen pattern: email captured on a previous screen -> run immediately
    // (instant if a prewarm already cached the path).
    window.runOnboarding();
  } else {
    // Email-screen pattern: wait for a click on a button tagged with ANY of these:
    //   attribute data-onboarding-submit  -  CSS class js-ob-submit  -  id ob-submit
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      var btn = t && t.closest && t.closest('[data-onboarding-submit], .js-ob-submit, #ob-submit');
      if (btn) window.runOnboarding();
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { normalizeEmail, numOrUndef, fxVal, fxGet, buildOnboardingPayload, generatePath, submitOnboarding, cachedPath, slimPath, prewarmEmail };
}
<\/script>
</div>`,cta:"CONTINUE",role:"showcase"},{id:"q-a-12",type:"raw",name:"Q&A 12",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>I understand but can't speak.</h1><p>&lt;em&gt;Is the following statement true for you?&lt;/em&gt;</p><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/Jv3wtf4c.webp" alt=""><span>TRUE</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/2PBha-cf.webp" alt=""><span>NOT TRUE</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"q-a-13",type:"raw",name:"Q&A 13",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>I get stuck while speaking because I know too few words.</h1><p>&lt;em&gt;Is the following statement true for you?&lt;/em&gt;</p><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/5vDFnmQf.webp" alt=""><span>TRUE</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/97kiVqdP.webp" alt=""><span>NOT TRUE</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"q-a-14",type:"raw",name:"Q&A 14",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>I don't have a friend to practice speaking with whenever I want.</h1><p>&lt;em&gt;Is the following statement true for you?&lt;/em&gt;</p><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/jDcHi-ih.webp" alt=""><span>TRUE</span></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/xNK4y8uY.webp" alt=""><span>NOT TRUE</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"chem-3",type:"raw",name:"Chêm",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/B9Z0F23v.webp" alt=""><h1>Create a &lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;personalized learning plan&lt;/span&gt; just for you.</h1><p>&lt;span style=&quot;color: rgb(0, 0, 0);&quot;&gt;No more random lessons. &lt;/span&gt;Get a path built &lt;br&gt;just for you.</p><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE"},{id:"q-a-16",type:"raw",name:"Q&A 16",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>&lt;strong&gt;Set a daily goal to practice&lt;/strong&gt;</h1><h2>&lt;strong&gt;18.8 hours per month&lt;/strong&gt;</h2><p>Just 15 minutes per day</p><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><span>10 minutes</span></div><div class="ff-opt"><span>15 minutes</span></div><div class="ff-opt"><span>30 minutes</span></div><div class="ff-opt"><span>1 hour</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"q-a-17",type:"raw",name:"Q&A 17",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>&lt;span&gt;When should we practice?&lt;/span&gt;</h1><div class="ff-opts" style="grid-template-columns:repeat(1,1fr)"><div class="ff-opt"><span>Morning</span></div><div class="ff-opt"><span>Afternoon</span></div><div class="ff-opt"><span>Evening</span></div><div class="ff-opt"><span>I'm flexible</span></div></div><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-question"},{id:"personal-plan",type:"raw",name:"Personal Plan",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>&lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;Creating your personalized plan...&lt;/span&gt;</h1><div class="ff-note">[Processing]</div><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/cFbMHpa7.webp" alt=""></div>`,cta:"Continue",role:"paywall"},{id:"register",type:"raw",name:"Register",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>Achieve your goals with</h1><h1>&lt;span style=&quot;color: rgb(62, 165, 239);&quot;&gt;Languoso&lt;/span&gt;</h1><p>Enter your email to access your learning account</p><input class="ff-input" type="email" placeholder="Your email"><!-- EMAIL AUTOFILL (no visible UI). Put this in a Raw HTML element on the EMAIL screen.
     FunnelFox's built-in email element renders a plain <input>; this finds it and sets the
     attributes the browser needs to offer the user's SAVED email as a one-tap suggestion
     (QuickType bar on iOS, autofill dropdown on Android/desktop). No third party.
     Note: Facebook/Instagram in-app webviews support this less reliably than real Safari/Chrome. -->
<script>
(function () {
  function findEmailInput() {
    var el = document.querySelector('input[type="email"]')
          || document.querySelector('input[name="email" i]')
          || document.querySelector('input[autocomplete*="email" i]')
          || document.querySelector('input[inputmode="email"]');
    if (el) return el;
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      var hint = (inputs[i].placeholder || '') + ' ' +
                 (inputs[i].getAttribute('aria-label') || '') + ' ' +
                 (inputs[i].id || '') + ' ' + (inputs[i].name || '');
      if (/e-?mail/i.test(hint)) return inputs[i];
    }
    return null;
  }
  function enhance() {
    var el = findEmailInput();
    if (!el) return false;
    el.type = 'email';
    el.setAttribute('autocomplete', 'email');
    el.setAttribute('inputmode', 'email');
    if (!el.getAttribute('name')) el.setAttribute('name', 'email');
    el.setAttribute('autocapitalize', 'off');
    el.setAttribute('autocorrect', 'off');
    el.setAttribute('spellcheck', 'false');
    return true;
  }
  // The input can mount a moment after screen load -> retry briefly (~4s), then stop.
  var tries = 0;
  var iv = setInterval(function () {
    if (enhance() || ++tries > 40) clearInterval(iv);
  }, 100);
})();
<\/script>
<p>Your information is 100% secure. We don’t sell your personal information. By submitting your email address, you confirm you are over 18 years and agree to&amp;nbsp;&lt;strong&gt;Terms &amp;amp; Conditions&lt;/strong&gt;&amp;nbsp;and&amp;nbsp;&lt;strong&gt;Privacy Policy&lt;/strong&gt;</p><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/ZiXC1YvO.webp" alt=""><button class="ff-btn" type="button" data-cta>CONTINUE</button></div>`,cta:"CONTINUE",role:"engagement-insert"},{id:"chem-4",type:"raw",name:"Chêm",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><!-- PASTE THIS ENTIRE FILE INTO ONE Raw HTML element on the LOADER screen
     (Raw HTML element -> Parameters -> HTML Content). -->
<style>
.ob-loader { text-align:center; padding:48px 24px; font-family:inherit; max-width:400px; margin:0 auto; }
.ob-spinner { width:60px; height:60px; margin:0 auto 26px; border:4px solid #DCE7F2;
  border-top-color:#3EA5EF; border-radius:50%; animation:ob-spin .9s linear infinite; }
@keyframes ob-spin { to { transform:rotate(360deg); } }
.ob-loader h3 { font-size:28px; font-weight:800; line-height:1.3; margin:0 0 14px; color:#16222B; }
.ob-quote { color:#5B6B78; font-size:17px; font-style:italic; line-height:1.5; margin:0; }
.ob-hl { color:#3EA5EF; font-style:italic; }
</style>
<div class="ob-loader">
  <div class="ob-spinner"></div>
  <h3>Your personalized plan is almost ready!</h3>
  <p class="ob-quote">"<span class="ob-hl">95%</span> of learners notice real improvement within their first <span class="ob-hl">7 days</span>"</p>
</div>
<script>window.OB_MODE = "submit";<\/script>
<script>
// FunnelFox - Loader screen. Generates the learning path on the dedicated
// no-auth funnel endpoint, stores it for the reveal screen, then advances.
// See backend doc Sec 13 (Onboarding qua Funnel) + spec 2026-05-27.
//
// 2026-06-06: migrated off the app endpoint. The backend turned on
// SIGNATURE_REQUIRED -> /v1/learning/onboarding (auth + x-api-signature) now
// 400s with ERR08 from a browser. The funnel must use the purpose-built
// /v1/learning/onboarding/funnelfox: NO Authorization, NO signature, just
// \`email\` in the body. Verified live -> 201 + full path.

// DEV. Routes live under /api/v1/... (verified: /v1/... -> 404). Swap host for prod.
var BASE_URL = 'https://api-chatbot-ai-iip505.aperogroup.ai/api';

function normalizeEmail(raw) {
  return String(raw == null ? '' : raw).trim().toLowerCase();
}

function numOrUndef(v) {
  if (v === undefined || v === null || v === '') return undefined;
  var n = Number(v);
  // Non-numeric (e.g. an option label "3 months") -> undefined, NOT NaN. JSON.stringify
  // serializes NaN as null, which the API rejects ("deadline_weeks must be an integer").
  return isNaN(n) ? undefined : n;
}

// CEFR ladder - used to default target_cefr when the funnel doesn't ask for it.
var CEFR_LADDER = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// The API only accepts UPPERCASE CEFR codes (A1, B2, ...). Funnel option values are
// often lowercase ("a1"), which the API rejects with a 400 -> normalize to uppercase.
function normCefr(level) {
  return String(level == null ? '' : level).trim().toUpperCase();
}
function bumpCefr(level, steps) {
  var i = CEFR_LADDER.indexOf(normCefr(level));
  if (i < 0) return 'B1';
  return CEFR_LADDER[Math.min(i + steps, CEFR_LADDER.length - 1)];
}

// FunnelFox stores each answer as { id, value, label } (or { value, type } for
// text/email, or an array of those for multi-select). Extract the raw value;
// arrays become a comma-joined string of their values.
function fxVal(x) {
  if (x == null) return undefined;
  if (Array.isArray(x)) {
    return x.map(fxVal).filter(function (v) { return v != null && v !== ''; }).join(',');
  }
  if (typeof x === 'object') return x.value;
  return x;
}

// Read an input by name, case-insensitively (so "Current_cefr" matches "current_cefr"),
// already unwrapped to its value.
function fxGet(inputs, name) {
  var keys = Object.keys(inputs || {});
  name = String(name).toLowerCase();
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === name) return fxVal(inputs[keys[i]]);
  }
  return undefined;
}

function buildOnboardingPayload(inputs) {
  inputs = inputs || {};
  var topicsRaw = fxGet(inputs, 'topics');
  var topics = topicsRaw
    ? String(topicsRaw).split(',').map(function (s) { return s.trim(); }).filter(Boolean)
    : undefined;
  var cefr = normCefr(fxGet(inputs, 'current_cefr')) || undefined;
  var tgtRaw = fxGet(inputs, 'target_cefr');
  var payload = {
    // --- required by the live API (verified against DEV; doc wrongly marks some optional) ---
    targetLanguage: 'en',
    current_cefr: cefr,
    target_cefr: (tgtRaw ? normCefr(tgtRaw) : bumpCefr(cefr, 2)),
    l1_language: (function(){var c=String(fxGet(inputs,'l1_language')||'').trim().toLowerCase();return {vi:1,ja:1,ko:1,th:1,pt:1,es:1,fr:1,de:1,hi:1}[c]?c:'es';})(),
    user_name: fxGet(inputs, 'user_name') || 'Learner',
    age: numOrUndef(fxGet(inputs, 'age')) || 25,
    // The /funnelfox endpoint REQUIRES these (PROD doc Sec Step 1: specific_target, deadline_weeks,
    // topics are required; missing -> 400 ERR16). Default them so a skipped/misconfigured funnel
    // question never 400s the reveal; a real answer overrides the default.
    specific_target: fxGet(inputs, 'specific_target') || 'Speak English confidently in everyday situations',
    deadline_weeks: numOrUndef(fxGet(inputs, 'deadline_weeks')) || 12,
    topics: (topics && topics.length) ? topics : ['Daily Life'],
    // --- optional (omitted when empty) ---
    lessons_per_week: numOrUndef(fxGet(inputs, 'lessons_per_week')),
    study_days_per_week: numOrUndef(fxGet(inputs, 'study_days_per_week')),
    persona: fxGet(inputs, 'persona') || undefined,
    accent: fxGet(inputs, 'accent') || undefined,
    feedback_style: fxGet(inputs, 'feedback_style') || undefined
  };
  Object.keys(payload).forEach(function (k) {
    if (payload[k] === undefined) delete payload[k];
  });
  return payload;
}

// The reveal screen reads only a small subset of the path. FunnelFox input storage
// has a size ceiling, and the full path (~23 KB, half of which is the unused
// first3Details blob) overruns it -> the stored value silently fails to persist and
// the reveal sees nothing. Strip to just what the reveal renders (~3.6 KB).
function slimPath(data) {
  data = data || {};
  var u = data.user || {};
  return {
    user: {
      name: u.name, deadlineWeeks: u.deadlineWeeks,
      currentCefr: u.currentCefr, targetCefr: u.targetCefr, goal: u.goal
    },
    totalLessonsToTarget: data.totalLessonsToTarget,
    deadlineWeeks: data.deadlineWeeks,
    lessons: (data.lessons || []).map(function (l) {
      return { order: l.order, level: l.level, scenarioTitle: l.scenarioTitle, topic: l.topic };
    }),
    checkpoints: (data.checkpoints || []).map(function (c) {
      return { atLesson: c.atLesson, type: c.type, message: c.message };
    })
  };
}

// Generate the path on the no-auth funnel endpoint. \`payload\` MUST include \`email\`
// (backend Sec 13.2: creates/reuses the email-bound account, then runs onboarding).
// No Authorization, no x-api-signature - this endpoint is built for the web funnel.
// 409 ERR111 = the email already has an active subscription (returning paid user);
// the path is not regenerated, so we surface the error and let the reveal fall back.
async function generatePath(fetchFn, base, payload) {
  var res = await fetchFn(base + '/v1/learning/onboarding/funnelfox', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    var body = '';
    try { body = await res.text(); } catch (e) {}
    throw new Error('onboarding failed: ' + res.status + ' - ' + String(body).slice(0, 300));
  }
  var json = await res.json();
  if (!json || !json.data) throw new Error('onboarding: empty data');
  return json.data;
}

// Read the cached path string (FunnelFox may wrap a stored value as { value }).
function cachedPath(fox) {
  var v = fox.inputs.get('learningPath');
  if (v && typeof v === 'object') v = v.value;
  return (v && fox.inputs.get('learningPathError') !== '1') ? v : '';
}

// DISPLAY-ONLY prewarm identity. The path CONTENT depends only on the answers, not the
// email, so we can pre-generate it before the real email is known and cache it for an
// instant reveal. We use a throwaway placeholder email (valid format, never an active sub
// -> no 409). NOTE: this does NOT register the user's real email - the loader still runs
// the real email when there's no cache, and the real email is what payment/stripe-register
// match on. (Open Q for backend: does payment need the real email to have hit /funnelfox?)
function prewarmEmail(fox) {
  var e = fxVal(fox.inputs.get('prewarmEmail'));
  if (!e) {
    e = 'pw-' + Date.now() + '-' + Math.floor(Math.random() * 1e9) + '@prewarm.languoso.ai';
    fox.inputs.set('prewarmEmail', e);
  }
  return e;
}

// deps: { fox, fetchFn, base, prewarm? }
// - submit (default): generates with the REAL email (or reuses a cached path), then goNext().
// - prewarm: generates from the answers-so-far under a PLACEHOLDER email, caches it, NO goNext.
//   Prewarm is display-only and never sets the error flag (a failed prewarm just lets the
//   loader regenerate with the real email on submit).
// Never blocks the funnel - on any submit failure it flags the error and still advances.
async function submitOnboarding(deps) {
  var fox = deps.fox, fetchFn = deps.fetchFn, base = deps.base, prewarm = !!deps.prewarm;

  // Already generated (e.g. by a prewarm run) -> nothing to do; just advance on submit.
  if (cachedPath(fox)) {
    if (!prewarm) fox.navigation.goNext();
    return;
  }

  var realEmail = normalizeEmail(fxVal(fox.inputs.getEmail()) || fxVal(fox.inputs.get('email')));
  if (!realEmail && !prewarm) {
    fox.inputs.set('learningPathError', '1');
    fox.trackCustom('OnboardingPathError', { message: 'missing email' });
    fox.navigation.goNext();
    return;
  }
  // submit -> real email; prewarm (email not yet known) -> placeholder, display only.
  var email = realEmail || prewarmEmail(fox);

  var payload = buildOnboardingPayload(fox.inputs.getAll());
  // Prewarm only once the required answer (current_cefr) exists - otherwise wait for a later run.
  if (prewarm && !payload.current_cefr) return;
  payload.email = email;   // required by the funnel endpoint (binds the account)

  try {
    fox.inputs.set('learningPathPayload', JSON.stringify(payload));   // for debugging a 400
    var data = await generatePath(fetchFn, base, payload);
    var stored = JSON.stringify(slimPath(data));
    fox.inputs.set('learningPathError', '');
    fox.inputs.set('learningPath', stored);
    fox.inputs.set('learningPathDebug', (prewarm ? 'prewarm ' : '') + 'ok: ' + (data.lessons ? data.lessons.length : 0) + ' lessons, stored ' + stored.length + ' chars');
    fox.trackCustom('OnboardingPathGenerated', { lessons: data.totalLessonsToTarget, prewarm: prewarm });
    if (!prewarm) fox.navigation.goNext();
  } catch (e) {
    var msg = String((e && e.message) || e);
    if (prewarm) {
      // Don't block the funnel on a prewarm failure - the loader regenerates on submit.
      fox.inputs.set('learningPathDebug', 'prewarm error: ' + msg);
      fox.trackCustom('OnboardingPathError', { message: msg, prewarm: true });
      return;
    }
    fox.inputs.set('learningPathError', '1');
    fox.inputs.set('learningPathDebug', 'error: ' + msg);
    fox.trackCustom('OnboardingPathError', { message: msg });
    fox.navigation.goNext();
  }
}

// Runtime wiring - runs in the FunnelFox browser, skipped under Jest.
// RECOMMENDED: paste this on a dedicated "Building your plan..." LOADER screen that
// comes AFTER the email screen. It auto-runs on load (email already captured) and
// advances to the reveal screen when the path is ready.
// ALT: paste on the email screen and trigger via a button (see selectors below).
if (typeof window !== 'undefined' && window.fox) {
  var _deps = function (extra) {
    var d = { fox: window.fox, fetchFn: window.fetch.bind(window), base: BASE_URL };
    if (extra) for (var k in extra) d[k] = extra[k];
    return d;
  };
  // Exposed so a button's "run JavaScript on click" action can call them directly.
  window.runOnboarding = function () { return submitOnboarding(_deps()); };                       // submit (loader)
  window.prewarmOnboarding = function () { return submitOnboarding(_deps({ prewarm: true })); };   // display-only pre-generate

  if (window.OB_MODE === 'prewarm') {
    // PREWARM screen: place this on an EARLY screen (after level/target/deadline/name Qs).
    // Generates the path under a placeholder email so the loader's reveal is instant. The
    // loader sets OB_MODE='submit' to override this if the script is left on later screens.
    window.prewarmOnboarding();
  } else if (normalizeEmail(fxVal(window.fox.inputs.getEmail()) || fxVal(window.fox.inputs.get('email')))) {
    // Loader-screen pattern: email captured on a previous screen -> run immediately
    // (instant if a prewarm already cached the path).
    window.runOnboarding();
  } else {
    // Email-screen pattern: wait for a click on a button tagged with ANY of these:
    //   attribute data-onboarding-submit  -  CSS class js-ob-submit  -  id ob-submit
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      var btn = t && t.closest && t.closest('[data-onboarding-submit], .js-ob-submit, #ob-submit');
      if (btn) window.runOnboarding();
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { normalizeEmail, numOrUndef, fxVal, fxGet, buildOnboardingPayload, generatePath, submitOnboarding, cachedPath, slimPath, prewarmEmail };
}
<\/script>
</div>`,cta:"Continue"},{id:"learning-path",type:"raw",name:"Learning Path",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><!-- PASTE WHOLE FILE INTO ONE Raw HTML element on the REVEAL screen. It brings its own light white->blue gradient bg. Paywall BELOW. Responsive. CSS source: reveal-head.html. -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap');
#learning-path { font-family: 'Bricolage Grotesque', -apple-system, 'SF Pro Text', system-ui, sans-serif; color: #3D3D3D; overflow-x: hidden; padding: 22px 0; background: transparent; }
#learning-path *, #learning-path *::before, #learning-path *::after { box-sizing: border-box; }
.lp-t1, .lp-cpcard-sub, .lp-goalcard-title, .lp-cptag-lg { overflow-wrap: anywhere; }
.lp { max-width: 460px; margin: 0 auto; text-align: left; padding: 4px; }
.lp-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: .08em; color: #3EA5EF; margin-bottom: 6px; }
.lp-headline { font-size: 26px; line-height: 1.2; font-weight: 800; color: #252525; margin: 0 0 18px; }
.lp-target { display: flex; gap: 12px; background: #fff; border: 1px solid #E6EEFB; border-radius: 18px; padding: 16px; box-shadow: 0 4px 14px rgba(86,170,239,.08); margin-bottom: 14px; }
.lp-target-ic { flex: none; width: 40px; height: 40px; border-radius: 12px; background: #FFEBE5; display: flex; align-items: center; justify-content: center; font-size: 20px; }
.lp-target-main { flex: 1; min-width: 0; }
.lp-target-label { font-size: 11px; font-weight: 700; letter-spacing: .06em; color: #9DB2CE; }
.lp-target-goal { font-size: 16px; font-weight: 800; color: #252525; margin: 2px 0 10px; line-height: 1.3; }
.lp-target-meta { display: flex; gap: 22px; }
.lp-target-meta span { font-size: 12px; color: #777; display: flex; flex-direction: column; gap: 2px; }
.lp-target-meta b { font-size: 14px; color: #3D3D3D; font-weight: 800; }
.lp-banner { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg,#4CC97A,#2E9E5B); border-radius: 18px; padding: 16px 18px; color: #fff; box-shadow: 0 6px 18px rgba(46,158,91,.25); overflow: hidden; }
.lp-banner-main { flex: 1; }
.lp-banner-main b { display: block; font-size: 17px; font-weight: 800; line-height: 1.25; }
.lp-banner-main span { font-size: 13px; opacity: .92; }
.lp-banner-ic { font-size: 34px; line-height: 1; }
.lp-label { font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #9DB2CE; margin: 24px 0 6px; }
.lp-journey { position: relative; width: 100%; max-width: 430px; margin: 0 auto; }
.lp-svg { position: absolute; left: 0; top: 0; width: 100%; height: 100%; }
.lp-node { position: absolute; transform: translate(-50%, -50%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; z-index: 1; box-shadow: 0 3px 9px rgba(20,40,80,.20); }
.lp-node--lesson { font-size: 18px; }
.lp-node--start { box-shadow: 0 0 0 4px rgba(52,199,89,.32), 0 3px 9px rgba(20,40,80,.20); }
.lp-nodelabel { position: absolute; transform: translateY(-50%); }
.lp-t1 { font-size: 16px; font-weight: 700; color: #252525; line-height: 1.25; }
.lp-t2 { font-size: 11px; font-weight: 700; letter-spacing: .4px; color: #9DB2CE; margin-top: 2px; }
.lp-cpcard { position: absolute; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 400px; display: flex; align-items: center; gap: 13px; padding: 13px 15px; border-radius: 16px; border: 1px solid; z-index: 2; }
.lp-cpcard-ic { flex: none; width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 21px; }
.lp-cpcard-txt { flex: 1; min-width: 0; }
.lp-cptag-lg { font-size: 19px; font-weight: 800; letter-spacing: .5px; line-height: 1.05; }
.lp-cpcard-sub { font-size: 12px; font-weight: 600; color: #6B7A90; margin-top: 3px; line-height: 1.2; }
.lp-goalcard { position: absolute; left: 50%; transform: translate(-50%, -50%); width: 92%; max-width: 410px; text-align: center; padding: 22px 18px 20px; border-radius: 22px; color: #fff; background: linear-gradient(135deg,#56AAEF,#3D6DE0); box-shadow: 0 14px 34px rgba(61,109,224,.45); z-index: 2; }
.lp-goalcard-ic { width: 54px; height: 54px; margin: 0 auto 10px; border-radius: 50%; background: rgba(255,255,255,.2); display: flex; align-items: center; justify-content: center; font-size: 28px; }
.lp-goalcard-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: .12em; opacity: .9; }
.lp-goalcard-title { font-size: 21px; font-weight: 800; line-height: 1.2; margin-top: 3px; }
.lp-goalcard-sub { font-size: 13px; font-weight: 600; opacity: .92; margin-top: 6px; }
.lp-fallback { text-align: center; color: #777; padding: 28px; font-size: 15px; }
</style>
<div id="learning-path"></div>
<script src="data:text/javascript;base64,Ly8gRnVubmVsRm94IC0gUmV2ZWFsIHNjcmVlbi4gUmVuZGVycyB0aGUgcGF0aCBzdG9yZWQgYnkgc2NyZWVuIEQuCi8vIFBsYWNlIGFuIGVsZW1lbnQgd2l0aCBpZD0ibGVhcm5pbmctcGF0aCIgb24gdGhlIHNjcmVlbjsgdGhpcyBmaWxscyBpdC4KLy8gQXBwLXN0eWxlIFMtY3VydmVkIChzZXJwZW50aW5lKSBqb3VybmV5OiBsZXNzb25zICsgY2hlY2twb2ludHMgKyBnb2FsIGRyYXduIGFzCi8vIE9ORSBTVkcgKHBhdGggKyBub2RlcyBzaGFyZSBhIGNvb3JkaW5hdGUgc3BhY2UsIHNvIHRoZXkgYWx3YXlzIGxpbmUgdXApLgovLyBEZWxpdmVyZWQgdG8gRnVubmVsRm94IGFzIGEgYmFzZTY0IGRhdGEtVVJMIDxzY3JpcHQ+IChzZWUgcGFzdGUvcmV2ZWFsLXNjcmVlbi5odG1sKQovLyBzbyB0aGUgZWRpdG9yIG5ldmVyIHBhcnNlcy9jb3JydXB0cyB0aGUgbWFya3VwLgoKLy8gREVWLiBVc2VkIG9ubHkgYnkgdGhlIGluLXBsYWNlIFJldHJ5IGJ1dHRvbiBiZWxvdzsgc3dhcCBob3N0IGZvciBwcm9kIChzYW1lIHZhbHVlIGFzCi8vIHNjcmVlbi1ELXN1Ym1pdC5qcyBCQVNFX1VSTCkuIFRoZSBsb2FkZXIgaXMgd2hhdCBub3JtYWxseSBnZW5lcmF0ZXMgLSB0aGlzIGlzIHRoZSBmYWxsYmFjay4KdmFyIEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLWNoYXRib3QtYWktaWlwNTA1LmFwZXJvZ3JvdXAuYWkvYXBpJzsKCmZ1bmN0aW9uIGVzY2FwZUh0bWwocykgewogIHJldHVybiBTdHJpbmcocyA9PSBudWxsID8gJycgOiBzKS5yZXBsYWNlKC9bJjw+IiddL2csIGZ1bmN0aW9uIChjKSB7CiAgICByZXR1cm4geyAnJic6ICcmYW1wOycsICc8JzogJyZsdDsnLCAnPic6ICcmZ3Q7JywgJyInOiAnJnF1b3Q7JywgIiciOiAnJiMzOTsnIH1bY107CiAgfSk7Cn0KZnVuY3Rpb24gdHJ1bmMocywgbikgewogIHMgPSBTdHJpbmcocyA9PSBudWxsID8gJycgOiBzKTsKICByZXR1cm4gcy5sZW5ndGggPiBuID8gcy5zbGljZSgwLCBuKS5yZXBsYWNlKC9ccyskLywgJycpICsgJy4uLicgOiBzOwp9CgovLyBLZWVwIGluIHN5bmMgd2l0aCBzY3JlZW4tRC1zdWJtaXQuanMgc2xpbVBhdGggLSB0aGUgcmV2ZWFsIHN0b3JlcyB0aGUgc2FtZSBzaGFwZSBzbyBhCi8vIHJldHJ5LWdlbmVyYXRlZCBwYXRoIHBlcnNpc3RzIGlkZW50aWNhbGx5IChGdW5uZWxGb3ggaW5wdXQgc2l6ZSBjZWlsaW5nIC0+IHN0b3JlIHNsaW0pLgpmdW5jdGlvbiBzbGltUGF0aChkYXRhKSB7CiAgZGF0YSA9IGRhdGEgfHwge307CiAgdmFyIHUgPSBkYXRhLnVzZXIgfHwge307CiAgcmV0dXJuIHsKICAgIHVzZXI6IHsgbmFtZTogdS5uYW1lLCBkZWFkbGluZVdlZWtzOiB1LmRlYWRsaW5lV2Vla3MsIGN1cnJlbnRDZWZyOiB1LmN1cnJlbnRDZWZyLCB0YXJnZXRDZWZyOiB1LnRhcmdldENlZnIsIGdvYWw6IHUuZ29hbCB9LAogICAgdG90YWxMZXNzb25zVG9UYXJnZXQ6IGRhdGEudG90YWxMZXNzb25zVG9UYXJnZXQsCiAgICBkZWFkbGluZVdlZWtzOiBkYXRhLmRlYWRsaW5lV2Vla3MsCiAgICBsZXNzb25zOiAoZGF0YS5sZXNzb25zIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGwpIHsgcmV0dXJuIHsgb3JkZXI6IGwub3JkZXIsIGxldmVsOiBsLmxldmVsLCBzY2VuYXJpb1RpdGxlOiBsLnNjZW5hcmlvVGl0bGUsIHRvcGljOiBsLnRvcGljIH07IH0pLAogICAgY2hlY2twb2ludHM6IChkYXRhLmNoZWNrcG9pbnRzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIHsgYXRMZXNzb246IGMuYXRMZXNzb24sIHR5cGU6IGMudHlwZSwgbWVzc2FnZTogYy5tZXNzYWdlIH07IH0pCiAgfTsKfQoKLy8gUmV0cnk6IHJlLVBPU1QgdGhlIGV4YWN0IHBheWxvYWQgdGhlIGxvYWRlciBhbHJlYWR5IGJ1aWx0K3N0b3JlZCAobGVhcm5pbmdQYXRoUGF5bG9hZCksCi8vIHNvIHdlIGRvbid0IHJlYnVpbGQgaXQgaGVyZS4gT24gc3VjY2VzcywgY2FjaGUgdGhlIHNsaW1tZWQgcGF0aCArIGNsZWFyIHRoZSBlcnJvciBmbGFnLgovLyBkZXBzOiB7IGZveCwgZmV0Y2hGbiwgYmFzZT8gfQphc3luYyBmdW5jdGlvbiByZXRyeUdlbmVyYXRlKGRlcHMpIHsKICB2YXIgZm94ID0gZGVwcy5mb3gsIGZldGNoRm4gPSBkZXBzLmZldGNoRm4sIGJhc2UgPSBkZXBzLmJhc2UgfHwgQkFTRV9VUkw7CiAgdmFyIHBsID0gZm94LmlucHV0cy5nZXQoJ2xlYXJuaW5nUGF0aFBheWxvYWQnKTsKICBpZiAocGwgJiYgdHlwZW9mIHBsID09PSAnb2JqZWN0JykgcGwgPSBwbC52YWx1ZTsKICBpZiAoIXBsKSB0aHJvdyBuZXcgRXJyb3IoJ25vIGNhY2hlZCBwYXlsb2FkIHRvIHJldHJ5Jyk7CiAgdmFyIHJlcyA9IGF3YWl0IGZldGNoRm4oYmFzZSArICcvdjEvbGVhcm5pbmcvb25ib2FyZGluZy9mdW5uZWxmb3gnLCB7CiAgICBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIGJvZHk6IHBsCiAgfSk7CiAgaWYgKCFyZXMub2spIHsKICAgIHZhciBiID0gJyc7IHRyeSB7IGIgPSBhd2FpdCByZXMudGV4dCgpOyB9IGNhdGNoIChlKSB7fQogICAgdGhyb3cgbmV3IEVycm9yKCdyZXRyeSBmYWlsZWQ6ICcgKyByZXMuc3RhdHVzICsgJyAtICcgKyBTdHJpbmcoYikuc2xpY2UoMCwgMjAwKSk7CiAgfQogIHZhciBqc29uID0gYXdhaXQgcmVzLmpzb24oKTsKICBpZiAoIWpzb24gfHwgIWpzb24uZGF0YSkgdGhyb3cgbmV3IEVycm9yKCdyZXRyeTogZW1wdHkgZGF0YScpOwogIHZhciBzdG9yZWQgPSBKU09OLnN0cmluZ2lmeShzbGltUGF0aChqc29uLmRhdGEpKTsKICBmb3guaW5wdXRzLnNldCgnbGVhcm5pbmdQYXRoRXJyb3InLCAnJyk7CiAgZm94LmlucHV0cy5zZXQoJ2xlYXJuaW5nUGF0aCcsIHN0b3JlZCk7CiAgaWYgKGZveC50cmFja0N1c3RvbSkgZm94LnRyYWNrQ3VzdG9tKCdPbmJvYXJkaW5nUGF0aEdlbmVyYXRlZCcsIHsgbGVzc29uczoganNvbi5kYXRhLnRvdGFsTGVzc29uc1RvVGFyZ2V0LCByZXRyeTogdHJ1ZSB9KTsKICByZXR1cm4ganNvbi5kYXRhOwp9CgovLyBGYWxsYmFjayBzaG93biB3aGVuIHRoZXJlJ3Mgbm8gcGF0aCB5ZXQgLSBhIGZyaWVuZGx5IG1lc3NhZ2UgKyBhIFJldHJ5IGJ1dHRvbi4KZnVuY3Rpb24gZmFsbGJhY2tXaXRoUmV0cnkoKSB7CiAgcmV0dXJuICc8ZGl2IGNsYXNzPSJscC1mYWxsYmFjayIgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6NDBweCAyNHB4O21heC13aWR0aDo0MjBweDttYXJnaW46MCBhdXRvIj4nICsKICAgICc8ZGl2IHN0eWxlPSJmb250LXNpemU6NDBweDttYXJnaW4tYm90dG9tOjEwcHgiPiYjMTI4NjQwOzwvZGl2PicgKwogICAgJzxkaXYgc3R5bGU9ImZvbnQtc2l6ZToyMnB4O2ZvbnQtd2VpZ2h0OjgwMDtjb2xvcjojMTYyMjJCO21hcmdpbi1ib3R0b206OHB4Ij5BbG1vc3QgdGhlcmUhPC9kaXY+JyArCiAgICAnPGRpdiBzdHlsZT0iZm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MS41O2NvbG9yOiM1QjZCNzg7bWFyZ2luLWJvdHRvbToyMnB4Ij5XZSBoaXQgYSBzbmFnIGJ1aWxkaW5nIHlvdXIgcGxhbi4gVGFwIHJldHJ5IC0gaXQgb25seSB0YWtlcyBhIG1vbWVudC48L2Rpdj4nICsKICAgICc8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgaWQ9ImxwLXJldHJ5IiBzdHlsZT0iYXBwZWFyYW5jZTpub25lO2JvcmRlcjowO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6IzNFQTVFRjtjb2xvcjojZmZmO2ZvbnQ6NzAwIDE2cHgvMSBpbmhlcml0O3BhZGRpbmc6MTVweCAzNHB4O2JvcmRlci1yYWRpdXM6MTRweDtib3gtc2hhZG93OjAgNnB4IDE2cHggcmdiYSg2MiwxNjUsMjM5LC4zNSkiPlJldHJ5PC9idXR0b24+JyArCiAgICAnPC9kaXY+JzsKfQoKdmFyIEdMWVBIID0geyB0YXJnZXQ6ICcmIzEyNzkxOTsnLCByb2NrZXQ6ICcmIzEyODY0MDsnLCBhcnJvdzogJyYjODU5NDsnLCBmbGFnOiAnJiM5ODczOycsIHN0YXI6ICcmIzk3MzM7JywgdHJvcGh5OiAnJiMxMjc5NDI7JyB9OwoKLy8gQ29sb3JzIGJ5IGNoZWNrcG9pbnQgdHlwZSAoZmFsbCBiYWNrIHRvIGEgbmV1dHJhbCBibHVlLWdyZXkpLgovLyBQaGFzZSBjb2xvdXJzOiBhIHdhcm0gZ3JlZW4tPmFtYmVyLT5vcmFuZ2UgcmFtcC4gQSBjaGVja3BvaW50IG9wZW5zIGEgbmV3IHBoYXNlLAovLyBzbyB0aGUgcGF0aCArIGxlc3NvbiBpY29ucyBob2xkIGEgcGhhc2UgY29sb3VyIGFuZCBzd2l0Y2ggYXQgZWFjaCBjaGVja3BvaW50LgpmdW5jdGlvbiBjcENvbG9yKHR5cGUpIHsKICByZXR1cm4geyBwaGFzZV9zdGFydDogJyMzNEM3NTknLCBsZXZlbF91cDogJyNGNUE2MjMnLCBtaWRwb2ludDogJyNGRjk0MTYnLCBmaW5hbF9zdHJldGNoOiAnI0ZGN0EyRScgfVt0eXBlXSB8fCAnIzlEQjJDRSc7Cn0KZnVuY3Rpb24gY3BHcmFkKHR5cGUpIHsKICByZXR1cm4gewogICAgcGhhc2Vfc3RhcnQ6ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCM1NkQ5OEMsIzJGQUU1NyknLAogICAgbGV2ZWxfdXA6ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCNGRkMyNEQsI0YwOTkwRiknLAogICAgbWlkcG9pbnQ6ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCNGRkIwNEQsI0ZGOEMxQSknLAogICAgZmluYWxfc3RyZXRjaDogJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsI0ZGQTg2NiwjRkY3QTJFKScKICB9W3R5cGVdIHx8ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCNCN0M0REEsIzkwQTJCRSknOwp9CmZ1bmN0aW9uIGNwVGFnKHR5cGUpIHsKICByZXR1cm4geyBwaGFzZV9zdGFydDogJ05FVyBQSEFTRScsIGxldmVsX3VwOiAnTEVWRUwgVVAnLCBtaWRwb2ludDogJ01JRFBPSU5UJywgZmluYWxfc3RyZXRjaDogJ0ZJTkFMIFNUUkVUQ0gnIH1bdHlwZV0gfHwgJ01JTEVTVE9ORSc7Cn0KZnVuY3Rpb24gaGV4QShoZXgsIGEpIHsgdmFyIG4gPSBwYXJzZUludChoZXguc2xpY2UoMSksIDE2KTsgcmV0dXJuICdyZ2JhKCcgKyAoKG4gPj4gMTYpICYgMjU1KSArICcsJyArICgobiA+PiA4KSAmIDI1NSkgKyAnLCcgKyAobiAmIDI1NSkgKyAnLCcgKyBhICsgJyknOyB9CnZhciBHUkFEX0dPQUwgPSAnbGluZWFyLWdyYWRpZW50KDE0NWRlZywjNUZCMEY1LCMzMzczRDgpJzsKCi8vIENvbG91ciBoZWxwZXJzOiBzYW1wbGUgdGhlIHBhdGgncyBncmFkaWVudCBhdCBhIHZlcnRpY2FsIHBvc2l0aW9uICgwLi4xKSBhbmQKLy8gYnVpbGQgbGlnaHQvZGFyayB2YXJpYW50cywgc28gbGVzc29uIGljb25zIGZsb3cgZ3JlZW4tPmFtYmVyLT5vcmFuZ2UgbGlrZSB0aGUgcGF0aC4KZnVuY3Rpb24gX3JnYihoKSB7IHZhciBuID0gcGFyc2VJbnQoaC5zbGljZSgxKSwgMTYpOyByZXR1cm4gWyhuID4+IDE2KSAmIDI1NSwgKG4gPj4gOCkgJiAyNTUsIG4gJiAyNTVdOyB9CmZ1bmN0aW9uIF9oZXgociwgZywgYikgeyByZXR1cm4gJyMnICsgKCgxIDw8IDI0KSArIChNYXRoLnJvdW5kKHIpIDw8IDE2KSArIChNYXRoLnJvdW5kKGcpIDw8IDgpICsgTWF0aC5yb3VuZChiKSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpOyB9CmZ1bmN0aW9uIF9taXgoaCwgdCwgdGd0KSB7IHZhciBjID0gX3JnYihoKTsgcmV0dXJuIF9oZXgoY1swXSArICh0Z3QgLSBjWzBdKSAqIHQsIGNbMV0gKyAodGd0IC0gY1sxXSkgKiB0LCBjWzJdICsgKHRndCAtIGNbMl0pICogdCk7IH0KZnVuY3Rpb24gbGlnaHRlbihoLCB0KSB7IHJldHVybiBfbWl4KGgsIHQsIDI1NSk7IH0KZnVuY3Rpb24gZGFya2VuKGgsIHQpIHsgcmV0dXJuIF9taXgoaCwgdCwgMCk7IH0KdmFyIFBBVEhfU1RPUFMgPSBbWzAsICcjMzRDNzU5J10sIFswLjIyLCAnIzU0RDA2QSddLCBbMC40NiwgJyNGRkM3MkMnXSwgWzAuNzIsICcjRkY5RjFDJ10sIFsxLCAnI0ZGN0EyRSddXTsKZnVuY3Rpb24gZ3JhZEF0KHQpIHsKICB0ID0gdCA8IDAgPyAwIDogKHQgPiAxID8gMSA6IHQpOwogIGZvciAodmFyIGkgPSAxOyBpIDwgUEFUSF9TVE9QUy5sZW5ndGg7IGkrKykgewogICAgdmFyIGIgPSBQQVRIX1NUT1BTW2ldOwogICAgaWYgKHQgPD0gYlswXSkgewogICAgICB2YXIgYSA9IFBBVEhfU1RPUFNbaSAtIDFdLCBmID0gKHQgLSBhWzBdKSAvICgoYlswXSAtIGFbMF0pIHx8IDEpLCBjYSA9IF9yZ2IoYVsxXSksIGNiID0gX3JnYihiWzFdKTsKICAgICAgcmV0dXJuIF9oZXgoY2FbMF0gKyAoY2JbMF0gLSBjYVswXSkgKiBmLCBjYVsxXSArIChjYlsxXSAtIGNhWzFdKSAqIGYsIGNhWzJdICsgKGNiWzJdIC0gY2FbMl0pICogZik7CiAgICB9CiAgfQogIHJldHVybiBQQVRIX1NUT1BTW1BBVEhfU1RPUFMubGVuZ3RoIC0gMV1bMV07Cn0KZnVuY3Rpb24gbm9kZUdyYWQoYykgeyByZXR1cm4gJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsJyArIGxpZ2h0ZW4oYywgMC4xNikgKyAnLCcgKyBkYXJrZW4oYywgMC4wNikgKyAnKSc7IH0KCi8vIE1lcmdlIGxlc3NvbnMgKyBjaGVja3BvaW50cyBpbnRvIG9uZSBvcmRlcmVkIGxpc3QgKGNoZWNrcG9pbnQgc2l0cyBqdXN0IGJlZm9yZSBpdHMgYXRMZXNzb24pLgpmdW5jdGlvbiBqb3VybmV5SXRlbXMoZGF0YSkgewogIHZhciBpdGVtcyA9IFtdOwogIChkYXRhLmxlc3NvbnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGwpIHsgaXRlbXMucHVzaCh7IGtpbmQ6ICdsZXNzb24nLCBwb3M6IChsLm9yZGVyIHx8IDApLCBsOiBsIH0pOyB9KTsKICAoZGF0YS5jaGVja3BvaW50cyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyBpdGVtcy5wdXNoKHsga2luZDogJ2NwJywgcG9zOiAoYy5hdExlc3NvbiB8fCAwKSAtIDAuNSwgYzogYyB9KTsgfSk7CiAgaXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5wb3MgLSBiLnBvczsgfSk7CiAgcmV0dXJuIGl0ZW1zOwp9CgovLyBCdWlsZHMgdGhlIHNlcnBlbnRpbmUgam91cm5leTogYSBzbW9vdGggZGFzaGVkIFNWRyBjdXJ2ZSAoZHJhd24gYmVoaW5kKSBwbHVzCi8vIEhUTUwgbm9kZXMgKyBsYWJlbHMgcG9zaXRpb25lZCBpbiB0aGUgU0FNRSBmaXhlZC13aWR0aCAoMzIwcHgpIGNvb3JkaW5hdGUgc3BhY2UsCi8vIHNvIHRoZXkgbGluZSB1cCBleGFjdGx5LiBIVE1MIGxhYmVscyB3cmFwLCBzbyB0aXRsZXMgc2hvdyBpbiBmdWxsLgpmdW5jdGlvbiBidWlsZEpvdXJuZXlTdmcoZGF0YSkgewogIHZhciBpdGVtcyA9IGpvdXJuZXlJdGVtcyhkYXRhKTsKICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuICcnOwogIHZhciBXID0gMzMwLCBYTCA9IDY2LCBYUiA9IDI1NCwgQ1ggPSAxNjAsIHJvd0ggPSAxNDIsIHRvcCA9IDM0LCByTm9kZSA9IDI3LCByQ3AgPSAyOSwgckdvYWwgPSAzMDsKICAvLyBsZXNzb25zIGFsdGVybmF0ZSAoYnkgdGhlaXIgb3duIGNvdW50KTsgY2hlY2twb2ludHMgYXJlIGNlbnRlcmVkIGNoYXB0ZXIgY2FyZHMKICB2YXIgbGMgPSAwOwogIHZhciBub2RlcyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXQsIGkpIHsKICAgIHZhciB5ID0gdG9wICsgck5vZGUgKyBpICogcm93SDsKICAgIGlmIChpdC5raW5kID09PSAnbGVzc29uJykgeyB2YXIgeCA9IChsYyAlIDIgPT09IDApID8gWEwgOiBYUjsgbGMrKzsgcmV0dXJuIHsgeDogeCwgeTogeSwgaXQ6IGl0LCBsZWZ0OiAoeCA9PT0gWEwpIH07IH0KICAgIHJldHVybiB7IHg6IENYLCB5OiB5LCBpdDogaXQsIGNwOiB0cnVlIH07CiAgfSk7CiAgdmFyIGdvYWwgPSB7IHg6IENYLCB5OiB0b3AgKyByTm9kZSArIGl0ZW1zLmxlbmd0aCAqIHJvd0ggKyAyNCwgZ29hbDogdHJ1ZSB9OwogIHZhciBwdHMgPSBub2Rlcy5jb25jYXQoW2dvYWxdKTsKICB2YXIgSCA9IGdvYWwueSArIDEzMDsKCiAgLy8gQm9sZCBhbHRlcm5hdGluZyBzZXJwZW50aW5lOiBzbW9vdGggY3ViaWMgd2l0aCBWRVJUSUNBTCB0YW5nZW50cyBhdCBlYWNoIG5vZGUgYW5kCiAgLy8gZ2VuZXJvdXMgaGFuZGxlcyAocm91bmRlZCwgbm90IHBvaW50eSkuIFRoZSBjdXJ2ZSBvbmx5IHN3ZWVwcyBzaWRld2F5cyBpbiB0aGUgZ2FwCiAgLy8gQkVUV0VFTiByb3dzIC0tIHdoZXJlIHRoZXJlIGFyZSBubyBsYWJlbHMgLS0gc28gYmVzaWRlLWxhYmVscyBuZXZlciBnZXQgY3Jvc3NlZC4KICB2YXIgZCA9ICdNICcgKyBwdHNbMF0ueCArICcgJyArIHB0c1swXS55OwogIGZvciAodmFyIGogPSAxOyBqIDwgcHRzLmxlbmd0aDsgaisrKSB7CiAgICB2YXIgcSA9IHB0c1tqIC0gMV0sIHAgPSBwdHNbal0sIGsgPSAocC55IC0gcS55KSAqIDAuNjI7CiAgICBkICs9ICcgQyAnICsgcS54ICsgJyAnICsgKHEueSArIGspLnRvRml4ZWQoMSkgKyAnICcgKyBwLnggKyAnICcgKyAocC55IC0gaykudG9GaXhlZCgxKSArICcgJyArIHAueCArICcgJyArIHAueTsKICB9CiAgLy8gUmVzcG9uc2l2ZTogdGhlIFNWRyBmaWxscyBhbiBhc3BlY3QtcmF0aW8gYm94IGFuZCBub2Rlcy9sYWJlbHMgYXJlIHBvc2l0aW9uZWQgYnkKICAvLyBQRVJDRU5UIG9mIHRoZSBXIHggSCBjb29yZGluYXRlIHNwYWNlLCBzbyBjdXJ2ZSArIG5vZGVzIHNjYWxlIHRvZ2V0aGVyIGF0IGFueSB3aWR0aC4KICAvLyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBpcyBzYWZlIGJlY2F1c2UgdGhlIC5scC1qb3VybmV5IGJveCBrZWVwcyB0aGUgVzpIIHJhdGlvLgogIC8vIFBoYXNlIGNvbG91ciBieSBjaGVja3BvaW50IHBvc2l0aW9uOiB0aGUgY29sb3VyIHN3aXRjaGVzIEFUIGVhY2ggY2hlY2twb2ludC4KICB2YXIgY3BOb2RlcyA9IG5vZGVzLmZpbHRlcihmdW5jdGlvbiAobikgeyByZXR1cm4gbi5jcDsgfSkubWFwKGZ1bmN0aW9uIChuKSB7IHJldHVybiB7IHk6IG4ueSwgY29sb3I6IGNwQ29sb3Iobi5pdC5jLnR5cGUpIH07IH0pOwogIGZ1bmN0aW9uIHBoYXNlQ29sb3JBdCh5KSB7CiAgICB2YXIgY29sID0gY3BOb2Rlcy5sZW5ndGggPyBjcE5vZGVzWzBdLmNvbG9yIDogJyNGRkFBMzknOwogICAgZm9yICh2YXIgY2kgPSAwOyBjaSA8IGNwTm9kZXMubGVuZ3RoOyBjaSsrKSB7IGlmIChjcE5vZGVzW2NpXS55IDw9IHkpIGNvbCA9IGNwTm9kZXNbY2ldLmNvbG9yOyB9CiAgICByZXR1cm4gY29sOwogIH0KICB2YXIgc3RvcHM7CiAgaWYgKCFjcE5vZGVzLmxlbmd0aCkgewogICAgc3RvcHMgPSAnPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzM0Qzc1OSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGN0EyRSIvPic7CiAgfSBlbHNlIHsKICAgIHZhciBhcnIgPSBbWzAsIGNwTm9kZXNbMF0uY29sb3JdXTsKICAgIGZvciAodmFyIGNpID0gMTsgY2kgPCBjcE5vZGVzLmxlbmd0aDsgY2krKykgewogICAgICB2YXIgY3QgPSBjcE5vZGVzW2NpXS55IC8gSDsKICAgICAgYXJyLnB1c2goW01hdGgubWF4KDAsIGN0IC0gMC4wMTUpLCBjcE5vZGVzW2NpIC0gMV0uY29sb3JdKTsKICAgICAgYXJyLnB1c2goW01hdGgubWluKDEsIGN0ICsgMC4wMTUpLCBjcE5vZGVzW2NpXS5jb2xvcl0pOwogICAgfQogICAgYXJyLnB1c2goWzEsIGNwTm9kZXNbY3BOb2Rlcy5sZW5ndGggLSAxXS5jb2xvcl0pOwogICAgc3RvcHMgPSBhcnIubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiAnPHN0b3Agb2Zmc2V0PSInICsgKHNbMF0gKiAxMDApLnRvRml4ZWQoMSkgKyAnJSIgc3RvcC1jb2xvcj0iJyArIHNbMV0gKyAnIi8+JzsgfSkuam9pbignJyk7CiAgfQoKICB2YXIgc3ZnID0gJzxzdmcgY2xhc3M9ImxwLXN2ZyIgdmlld0JveD0iMCAwICcgKyBXICsgJyAnICsgSCArICciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+JyArCiAgICAnPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJscGdyYWQiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4nICsgc3RvcHMgKyAnPC9saW5lYXJHcmFkaWVudD48L2RlZnM+JyArCiAgICAnPHBhdGggZD0iJyArIGQgKyAnIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjbHBncmFkKSIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMC4xIDExIiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiLz48L3N2Zz4nOwoKICBmdW5jdGlvbiBmeCh4KSB7IHJldHVybiAoeCAvIFcgKiAxMDApLnRvRml4ZWQoMykgKyAnJSc7IH0KICBmdW5jdGlvbiBmeSh5KSB7IHJldHVybiAoeSAvIEggKiAxMDApLnRvRml4ZWQoMykgKyAnJSc7IH0KCiAgLy8gSFRNTCBub2RlICsgbGFiZWwgKGNlbnRlcmVkIG9uIHRoZWlyIHBvaW50IHZpYSBDU1MgdHJhbnNsYXRlKQogIGZ1bmN0aW9uIG5vZGUobiwgY2xzLCByLCBiZywgaW5uZXIsIGV4dHJhKSB7CiAgICByZXR1cm4gJzxkaXYgY2xhc3M9ImxwLW5vZGUgJyArIGNscyArICciIHN0eWxlPSJsZWZ0OicgKyBmeChuLngpICsgJzt0b3A6JyArIGZ5KG4ueSkgKyAnO3dpZHRoOicgKyAoMiAqIHIpICsgJ3B4O2hlaWdodDonICsgKDIgKiByKSArICdweDtiYWNrZ3JvdW5kOicgKyBiZyArICc7JyArIChleHRyYSB8fCAnJykgKyAnIj4nICsgaW5uZXIgKyAnPC9kaXY+JzsKICB9CiAgZnVuY3Rpb24gc2lkZVN0eWxlKG4sIHIpIHsKICAgIHZhciBzID0gJ3RvcDonICsgZnkobi55KSArICc7JzsKICAgIGlmIChuLmxlZnQpIHMgKz0gJ2xlZnQ6JyArIGZ4KG4ueCArIHIgKyAxNikgKyAnO3JpZ2h0OjEwcHg7dGV4dC1hbGlnbjpsZWZ0Oyc7CiAgICBlbHNlIHMgKz0gJ3JpZ2h0OicgKyBmeChXIC0gKG4ueCAtIHIgLSAxNikpICsgJztsZWZ0OjEwcHg7dGV4dC1hbGlnbjpyaWdodDsnOwogICAgcmV0dXJuIHM7CiAgfQogIGZ1bmN0aW9uIGxhYmVsKG4sIHRpdGxlLCBzdWIsIGNvbG9yKSB7CiAgICByZXR1cm4gJzxkaXYgY2xhc3M9ImxwLW5vZGVsYWJlbCIgc3R5bGU9IicgKyBzaWRlU3R5bGUobiwgck5vZGUpICsgJyI+JyArCiAgICAgICc8ZGl2IGNsYXNzPSJscC10MSInICsgKGNvbG9yID8gJyBzdHlsZT0iY29sb3I6JyArIGNvbG9yICsgJyInIDogJycpICsgJz4nICsgdGl0bGUgKyAnPC9kaXY+JyArCiAgICAgIChzdWIgPyAnPGRpdiBjbGFzcz0ibHAtdDIiPicgKyBzdWIgKyAnPC9kaXY+JyA6ICcnKSArICc8L2Rpdj4nOwogIH0KICBmdW5jdGlvbiBsYWJlbENwKG4sIHRpdGxlLCB0YWcsIGNvbG9yKSB7CiAgICByZXR1cm4gJzxkaXYgY2xhc3M9ImxwLW5vZGVsYWJlbCIgc3R5bGU9IicgKyBzaWRlU3R5bGUobiwgckNwKSArICciPicgKwogICAgICAnPHNwYW4gY2xhc3M9ImxwLWNwdGFnIiBzdHlsZT0iYmFja2dyb3VuZDonICsgaGV4QShjb2xvciwgMC4xNCkgKyAnO2NvbG9yOicgKyBjb2xvciArICciPicgKyB0YWcgKyAnPC9zcGFuPicgKwogICAgICAnPGRpdiBjbGFzcz0ibHAtY3B0aXRsZSIgc3R5bGU9ImNvbG9yOicgKyBjb2xvciArICciPicgKyB0aXRsZSArICc8L2Rpdj48L2Rpdj4nOwogIH0KCiAgdmFyIGJvZHkgPSAnJzsKICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7CiAgICBpZiAobi5pdC5raW5kID09PSAnbGVzc29uJykgewogICAgICB2YXIgbCA9IG4uaXQubCwgaXNGaXJzdCA9IChsLm9yZGVyID09PSAxKTsKICAgICAgYm9keSArPSBub2RlKG4sICdscC1ub2RlLS1sZXNzb24nICsgKGlzRmlyc3QgPyAnIGxwLW5vZGUtLXN0YXJ0JyA6ICcnKSwgck5vZGUsIG5vZGVHcmFkKHBoYXNlQ29sb3JBdChuLnkpKSwgU3RyaW5nKGwub3JkZXIgfHwgJycpKTsKICAgICAgYm9keSArPSBsYWJlbChuLCBlc2NhcGVIdG1sKGwuc2NlbmFyaW9UaXRsZSksIGVzY2FwZUh0bWwoU3RyaW5nKGwudG9waWMgfHwgbC5sZXZlbCB8fCAnJykudG9VcHBlckNhc2UoKSkpOwogICAgfSBlbHNlIHsKICAgICAgdmFyIGMgPSBuLml0LmMsIGNvbCA9IGNwQ29sb3IoYy50eXBlKTsKICAgICAgYm9keSArPSAnPGRpdiBjbGFzcz0ibHAtY3BjYXJkIiBzdHlsZT0idG9wOicgKyBmeShuLnkpICsgJztiYWNrZ3JvdW5kOicgKyBsaWdodGVuKGNvbCwgMC44NikgKyAnO2JvcmRlci1jb2xvcjonICsgaGV4QShjb2wsIDAuMzUpICsgJztib3gtc2hhZG93OjAgOHB4IDIwcHggJyArIGhleEEoY29sLCAwLjIyKSArICciPicgKwogICAgICAgICc8ZGl2IGNsYXNzPSJscC1jcGNhcmQtaWMiIHN0eWxlPSJiYWNrZ3JvdW5kOicgKyBjcEdyYWQoYy50eXBlKSArICciPicgKyBHTFlQSC5mbGFnICsgJzwvZGl2PicgKwogICAgICAgICc8ZGl2IGNsYXNzPSJscC1jcGNhcmQtdHh0Ij48ZGl2IGNsYXNzPSJscC1jcHRhZy1sZyIgc3R5bGU9ImNvbG9yOicgKyBjb2wgKyAnIj4nICsgY3BUYWcoYy50eXBlKSArICc8L2Rpdj4nICsKICAgICAgICAnPGRpdiBjbGFzcz0ibHAtY3BjYXJkLXN1YiI+JyArIGVzY2FwZUh0bWwoYy5tZXNzYWdlKSArICc8L2Rpdj48L2Rpdj48L2Rpdj4nOwogICAgfQogIH0pOwogIC8vIGdvYWwKICB2YXIgd2Vla3MgPSAoZGF0YS51c2VyICYmIGRhdGEudXNlci5kZWFkbGluZVdlZWtzKSB8fCBkYXRhLmRlYWRsaW5lV2Vla3M7CiAgYm9keSArPSAnPGRpdiBjbGFzcz0ibHAtZ29hbGNhcmQiIHN0eWxlPSJ0b3A6JyArIGZ5KGdvYWwueSkgKyAnIj4nICsKICAgICc8ZGl2IGNsYXNzPSJscC1nb2FsY2FyZC1pYyI+JyArIEdMWVBILnRyb3BoeSArICc8L2Rpdj4nICsKICAgICc8ZGl2IGNsYXNzPSJscC1nb2FsY2FyZC1leWVicm93Ij5ZT1VSIEdPQUw8L2Rpdj4nICsKICAgICc8ZGl2IGNsYXNzPSJscC1nb2FsY2FyZC10aXRsZSI+JyArIGVzY2FwZUh0bWwoZGF0YS50YXJnZXQgfHwgKGRhdGEudXNlciAmJiBkYXRhLnVzZXIuZ29hbCkgfHwgJ1lvdXIgZ29hbCcpICsgJzwvZGl2PicgKwogICAgKHdlZWtzID8gJzxkaXYgY2xhc3M9ImxwLWdvYWxjYXJkLXN1YiI+UmVhY2ggaXQgaW4gJyArIHdlZWtzICsgJyB3ZWVrczwvZGl2PicgOiAnJykgKyAnPC9kaXY+JzsKCiAgcmV0dXJuICc8ZGl2IGNsYXNzPSJscC1qb3VybmV5IiBzdHlsZT0iYXNwZWN0LXJhdGlvOicgKyBXICsgJyAvICcgKyBIICsgJyI+JyArIHN2ZyArIGJvZHkgKyAnPC9kaXY+JzsKfQoKZnVuY3Rpb24gcmVuZGVyTGVhcm5pbmdQYXRoKGRhdGEsIG9wdHMpIHsKICBvcHRzID0gb3B0cyB8fCB7fTsKICBpZiAoIWRhdGEpIHsKICAgIHJldHVybiAnPGRpdiBjbGFzcz0ibHAtZmFsbGJhY2siPllvdXIgcGVyc29uYWxpemVkIHBsYW4gaXMgYmVpbmcgcHJlcGFyZWQgLSAnICsKICAgICAgJ2l0IHdpbGwgYmUgcmVhZHkgdGhlIG1vbWVudCB5b3Ugb3BlbiB0aGUgYXBwLjwvZGl2Pic7CiAgfQogIHZhciB1c2VyID0gZGF0YS51c2VyIHx8IHt9OwogIC8vIFRoaXMgZnVubmVsIGhhcyBOTyBuYW1lIGlucHV0IC0gdGhlIGhlYWRsaW5lIG5ldmVyIHVzZXMgYSBuYW1lLgogIHZhciB0b3RhbCA9IGRhdGEudG90YWxMZXNzb25zVG9UYXJnZXQgfHwgKGRhdGEubGVzc29ucyA/IGRhdGEubGVzc29ucy5sZW5ndGggOiAwKTsKICB2YXIgd2Vla3MgPSB1c2VyLmRlYWRsaW5lV2Vla3MgfHwgZGF0YS5kZWFkbGluZVdlZWtzOwogIHZhciBjdXIgPSB1c2VyLmN1cnJlbnRDZWZyLCB0Z3QgPSB1c2VyLnRhcmdldENlZnI7CiAgdmFyIGdvYWwgPSBlc2NhcGVIdG1sKG9wdHMuZ29hbCB8fCB1c2VyLmdvYWwgfHwgJycpOwoKICB2YXIgaCA9ICc8ZGl2IGNsYXNzPSJscCI+JzsKICBoICs9ICc8ZGl2IGNsYXNzPSJscC1leWVicm93Ij5ZT1VSIFBFUlNPTkFMSVpFRCBQTEFOPC9kaXY+JzsKICBoICs9ICc8aDIgY2xhc3M9ImxwLWhlYWRsaW5lIj5Zb3VyIGpvdXJuZXkgaXMgcmVhZHk8L2gyPic7CgogIGggKz0gJzxkaXYgY2xhc3M9ImxwLXRhcmdldCI+PGRpdiBjbGFzcz0ibHAtdGFyZ2V0LWljIj4nICsgR0xZUEgudGFyZ2V0ICsgJzwvZGl2PjxkaXYgY2xhc3M9ImxwLXRhcmdldC1tYWluIj4nOwogIGggKz0gJzxkaXYgY2xhc3M9ImxwLXRhcmdldC1sYWJlbCI+WU9VUiBUQVJHRVQ8L2Rpdj4nOwogIGlmIChnb2FsKSBoICs9ICc8ZGl2IGNsYXNzPSJscC10YXJnZXQtZ29hbCI+JyArIGdvYWwgKyAnPC9kaXY+JzsKICBoICs9ICc8ZGl2IGNsYXNzPSJscC10YXJnZXQtbWV0YSI+JzsKICBpZiAodGd0KSBoICs9ICc8c3Bhbj5UYXJnZXQgbGV2ZWw8Yj4nICsgZXNjYXBlSHRtbCh0Z3QpICsgJzwvYj48L3NwYW4+JzsKICBpZiAod2Vla3MpIGggKz0gJzxzcGFuPkR1cmF0aW9uPGI+JyArIHdlZWtzICsgJyB3ZWVrczwvYj48L3NwYW4+JzsKICBoICs9ICc8L2Rpdj48L2Rpdj48L2Rpdj4nOwoKICBoICs9ICc8ZGl2IGNsYXNzPSJscC1iYW5uZXIiPjxkaXYgY2xhc3M9ImxwLWJhbm5lci1tYWluIj48Yj4nICsgdG90YWwgKyAnIGxlc3NvbnMgbWFwcGVkIHRvIHlvdXIgZ29hbDwvYj4nOwogIGlmIChjdXIgJiYgdGd0KSBoICs9ICc8c3Bhbj5BIHBlcnNvbmFsaXplZCBwYXRoIGZyb20gJyArIGVzY2FwZUh0bWwoY3VyKSArICcgJyArIEdMWVBILmFycm93ICsgJyAnICsgZXNjYXBlSHRtbCh0Z3QpICsgJzwvc3Bhbj4nOwogIGggKz0gJzwvZGl2PjxkaXYgY2xhc3M9ImxwLWJhbm5lci1pYyI+JyArIEdMWVBILnJvY2tldCArICc8L2Rpdj48L2Rpdj4nOwoKICB2YXIgc3ZnID0gYnVpbGRKb3VybmV5U3ZnKGRhdGEpOwogIGlmIChzdmcpIGggKz0gJzxkaXYgY2xhc3M9ImxwLWxhYmVsIj5Zb3VyIGxlYXJuaW5nIGpvdXJuZXk8L2Rpdj4nICsgc3ZnOwoKICBoICs9ICc8L2Rpdj4nOwogIHJldHVybiBoOwp9CgpmdW5jdGlvbiBtb3VudFJldmVhbChkZXBzKSB7CiAgdmFyIGZveCA9IGRlcHMuZm94LCBjb250YWluZXIgPSBkZXBzLmNvbnRhaW5lcjsKICB2YXIgZGF0YSA9IG51bGwsIHBhcnNlRXJyID0gJyc7CiAgdmFyIGVyckZsYWcgPSBmb3guaW5wdXRzLmdldCgnbGVhcm5pbmdQYXRoRXJyb3InKTsKICB2YXIgcmF3ID0gZm94LmlucHV0cy5nZXQoJ2xlYXJuaW5nUGF0aCcpOwogIGlmIChyYXcgJiYgdHlwZW9mIHJhdyA9PT0gJ29iamVjdCcpIHJhdyA9IHJhdy52YWx1ZTsgICAvLyBGdW5uZWxGb3ggbWF5IHdyYXAgc3RvcmVkIHZhbHVlcwogIGlmIChlcnJGbGFnICE9PSAnMScpIHsKICAgIHRyeSB7IGRhdGEgPSBKU09OLnBhcnNlKHJhdyB8fCAnbnVsbCcpOyB9IGNhdGNoIChlKSB7IGRhdGEgPSBudWxsOyBwYXJzZUVyciA9IFN0cmluZyhlICYmIGUubWVzc2FnZSB8fCBlKTsgfQogIH0KICB2YXIgc3QgPSBmb3guaW5wdXRzLmdldCgnc3BlY2lmaWNfdGFyZ2V0Jyk7CiAgaWYgKHN0ICYmIHR5cGVvZiBzdCA9PT0gJ29iamVjdCcpIHN0ID0gc3QudmFsdWU7CgogIGlmIChkYXRhKSB7CiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVyTGVhcm5pbmdQYXRoKGRhdGEsIHsgZ29hbDogc3QgfHwgJycgfSk7CiAgICByZXR1cm47CiAgfQoKICAvLyBObyBwYXRoIC0+IGZyaWVuZGx5IGZhbGxiYWNrIHdpdGggYSBSZXRyeSBidXR0b24gKHJlLVBPU1RzIHRoZSBzdG9yZWQgcGF5bG9hZCkuCiAgY29udGFpbmVyLmlubmVySFRNTCA9IGZhbGxiYWNrV2l0aFJldHJ5KCk7CiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgIHZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHAtcmV0cnknKTsKICAgIGlmIChidG4pIHsKICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgewogICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7IGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuNic7IGJ0bi50ZXh0Q29udGVudCA9ICdCdWlsZGluZyB5b3VyIHBsYW4uLi4nOwogICAgICAgIHJldHJ5R2VuZXJhdGUoeyBmb3g6IGZveCwgZmV0Y2hGbjogd2luZG93LmZldGNoLmJpbmQod2luZG93KSwgYmFzZTogQkFTRV9VUkwgfSkKICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgbW91bnRSZXZlYWwoeyBmb3g6IGZveCwgY29udGFpbmVyOiBjb250YWluZXIgfSk7IH0pICAgLy8gcmUtcmVuZGVyIHdpdGggdGhlIG5ldyBwYXRoCiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHsKICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7IGJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnOyBidG4udGV4dENvbnRlbnQgPSAnUmV0cnknOwogICAgICAgICAgICBpZiAoZm94LnRyYWNrQ3VzdG9tKSBmb3gudHJhY2tDdXN0b20oJ09uYm9hcmRpbmdQYXRoRXJyb3InLCB7IG1lc3NhZ2U6ICdyZXRyeTogJyArIFN0cmluZyhlICYmIGUubWVzc2FnZSB8fCBlKSB9KTsKICAgICAgICAgIH0pOwogICAgICB9KTsKICAgIH0KICB9CgogIC8vIERpYWdub3N0aWNzOiBnYXRlZCBiZWhpbmQgP2xwZGVidWc9MSBzbyByZWFsIHVzZXJzIG5ldmVyIHNlZSB0aGUgYm94OyBhcHBlbmQgdGhlIHF1ZXJ5CiAgLy8gcGFyYW0gdG8gdGhlIGZ1bm5lbCBVUkwgdG8gc3VyZmFjZSBXSFkgaXQgZmVsbCBiYWNrIChob3N0LzQwMC9DT1JTKSB3aGVuIGRlYnVnZ2luZy4KICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAvWz8mXWxwZGVidWc9MS8udGVzdChsb2NhdGlvbi5zZWFyY2gpKSB7CiAgICB2YXIgZGJnID0gZm94LmlucHV0cy5nZXQoJ2xlYXJuaW5nUGF0aERlYnVnJyk7CiAgICBpZiAoZGJnICYmIHR5cGVvZiBkYmcgPT09ICdvYmplY3QnKSBkYmcgPSBkYmcudmFsdWU7CiAgICB2YXIgcGwgPSBmb3guaW5wdXRzLmdldCgnbGVhcm5pbmdQYXRoUGF5bG9hZCcpOwogICAgaWYgKHBsICYmIHR5cGVvZiBwbCA9PT0gJ29iamVjdCcpIHBsID0gcGwudmFsdWU7CiAgICB2YXIgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7CiAgICBib3guc3R5bGUuY3NzVGV4dCA9ICdtYXJnaW46MTZweDtwYWRkaW5nOjEycHg7YmFja2dyb3VuZDojMWQxZDFkO2NvbG9yOiM3Q0ZDOUE7Zm9udDoxMnB4LzEuNSBtb25vc3BhY2U7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Ym9yZGVyLXJhZGl1czo4cHgnOwogICAgYm94LnRleHRDb250ZW50ID0gJ0xQIERFQlVHXG4nICsKICAgICAgJ2xlYXJuaW5nUGF0aEVycm9yID0gJyArIEpTT04uc3RyaW5naWZ5KGVyckZsYWcpICsgJ1xuJyArCiAgICAgICdsZWFybmluZ1BhdGggbGVuZ3RoID0gJyArIChyYXcgPT0gbnVsbCA/ICdudWxsJyA6IFN0cmluZyhyYXcpLmxlbmd0aCkgKyAnIGNoYXJzXG4nICsKICAgICAgJ3BhcnNlIGVycm9yID0gJyArIChwYXJzZUVyciB8fCAnbm9uZScpICsgJ1xuJyArCiAgICAgICdsb2FkZXIgZGVidWcgPSAnICsgKGRiZyB8fCAnKG5vbmUgLSBsb2FkZXIgbWF5IG5vdCBoYXZlIHJ1biAvIHNldCBub3QgcGVyc2lzdGVkKScpICsgJ1xuJyArCiAgICAgICdwYXlsb2FkIHNlbnQgPSAnICsgKHBsIHx8ICcobm9uZSknKTsKICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpOwogIH0KfQoKLy8gUG9sbCBicmllZmx5IGZvciB0aGUgI2xlYXJuaW5nLXBhdGggZGl2LCB0aGVuIGZpbGwgaXQuIEdpdmVzIHVwIGFmdGVyIH40cy4KaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5mb3gpIHsKICB2YXIgX3RyaWVzID0gMDsKICB2YXIgX2l2ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgewogICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYXJuaW5nLXBhdGgnKTsKICAgIGlmIChlbCkgeyBjbGVhckludGVydmFsKF9pdik7IG1vdW50UmV2ZWFsKHsgZm94OiB3aW5kb3cuZm94LCBjb250YWluZXI6IGVsIH0pOyB9CiAgICBlbHNlIGlmICgrK190cmllcyA+IDQwKSB7IGNsZWFySW50ZXJ2YWwoX2l2KTsgfQogIH0sIDEwMCk7Cn0KCmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgewogIG1vZHVsZS5leHBvcnRzID0geyBlc2NhcGVIdG1sLCB0cnVuYywgam91cm5leUl0ZW1zLCBidWlsZEpvdXJuZXlTdmcsIHJlbmRlckxlYXJuaW5nUGF0aCwgbW91bnRSZXZlYWwsIHNsaW1QYXRoLCByZXRyeUdlbmVyYXRlLCBmYWxsYmFja1dpdGhSZXRyeSB9Owp9Cg=="><\/script>
<button class="ff-btn" type="button" data-cta>GET YOUR PLAN</button></div>`,cta:"GET YOUR PLAN"},{id:"lucky-wheel",type:"raw",name:"Lucky Wheel",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>Lucky Wheel</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background:
      radial-gradient(120% 60% at 50% 10%, rgba(30, 80, 200, 0.4) 0%, transparent 60%),
      linear-gradient(180deg, #050A17 0%, #020508 100%);
    color: #0A2558;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
  }

  h1 {
    font-size: clamp(20px, 5.4vw, 26px);
    font-weight: 800;
    text-align: center;
    line-height: 1.3;
    color: #0A2558;
  }

  p.subtitle {
    color: rgba(10, 37, 88, 0.78);
    text-align: center;
    font-size: 14px;
    line-height: 1.45;
    max-width: 320px;
    margin-top: -4px;
  }

  .wheel-box {
    position: relative;
    width: min(86vw, 320px);
    aspect-ratio: 1 / 1;
    margin: 8px auto;
    transform: translateZ(0);
  }

  .wheel-box::before,
  .wheel-box::after {
    content: "";
    position: absolute;
    inset: -18px;
    border: 1px solid rgba(62, 165, 239, 0.38);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
  }
  .wheel-box.ready::before {
    animation: invite-ring 1800ms ease-out infinite;
  }
  .wheel-box.ready::after {
    animation: invite-ring 1800ms ease-out 520ms infinite;
  }
  .wheel-box.spinning::before {
    inset: -10px;
    border: 3px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.95);
    border-right-color: rgba(62, 165, 239, 0.65);
    opacity: 1;
    animation: speed-ring 520ms linear infinite;
  }
  .wheel-box.spinning::after {
    inset: -22px;
    border: 1px solid rgba(30, 80, 200, 0.58);
    opacity: 0.75;
    animation: speed-ring 900ms linear infinite reverse;
  }
  @keyframes invite-ring {
    0%   { transform: scale(0.9); opacity: 0; }
    20%  { opacity: 0.72; }
    100% { transform: scale(1.18); opacity: 0; }
  }
  @keyframes speed-ring {
    to { transform: rotate(360deg); }
  }

  .pointer {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 22px solid #FFFFFF;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
    z-index: 4;
    animation: pointer-bob 900ms ease-in-out infinite alternate;
  }
  .wheel-box.spinning .pointer,
  .wheel-box.done .pointer {
    animation: none;
  }
  .wheel-box.spinning .pointer {
    animation: pointer-tick 120ms linear infinite;
  }
  @keyframes pointer-bob {
    from { transform: translateX(-50%) translateY(-2px); }
    to   { transform: translateX(-50%) translateY(4px); }
  }
  @keyframes pointer-tick {
    0%, 100% { transform: translateX(-50%) rotate(-3deg); }
    50%      { transform: translateX(-50%) rotate(3deg); }
  }

  .glow-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #3EA5EF, #FFFFFF, #0A2558, #3EA5EF);
    filter: blur(8px);
    opacity: 0.55;
    transition: opacity 0.4s ease;
  }
  .wheel-box.spinning .glow-ring { opacity: 1; }
  .wheel-box.ready .glow-ring {
    animation: glow-breathe 1500ms ease-in-out infinite alternate;
  }
  @keyframes glow-breathe {
    from { opacity: 0.42; transform: scale(0.98); }
    to   { opacity: 0.76; transform: scale(1.03); }
  }

  svg.wheel {
    position: relative;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5));
    transform: rotate(0deg);
    transition: none;
  }
  .wheel-box.ready {
    animation: wheel-idle 1800ms ease-in-out infinite alternate;
  }
  .wheel-box.spinning,
  .wheel-box.done {
    animation: none;
  }
  @keyframes wheel-idle {
    from { transform: translateZ(0) rotate(-1deg) scale(0.995); }
    to   { transform: translateZ(0) rotate(1deg) scale(1.01); }
  }

  svg.wheel.phase-fast {
    transition: transform 5500ms cubic-bezier(0.18, 0.62, 0.32, 0.99);
  }
  svg.wheel.phase-crawl {
    transition: transform 4200ms cubic-bezier(0.02, 0.78, 0.18, 1);
  }

  .sparkle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3EA5EF;
    box-shadow: 0 0 18px 4px rgba(62, 165, 239, 0.55);
    opacity: 0;
    pointer-events: none;
    z-index: 3;
    animation: sparkle 1600ms ease-in-out infinite;
  }
  .sparkle:nth-child(4) { top: 12%; left: 18%; animation-delay: 0ms; }
  .sparkle:nth-child(5) { top: 26%; right: 6%; animation-delay: 460ms; }
  .sparkle:nth-child(6) { right: 18%; bottom: 10%; animation-delay: 920ms; }
  .sparkle:nth-child(7) { left: 7%; bottom: 28%; animation-delay: 1240ms; }
  .wheel-box.spinning .sparkle,
  .wheel-box.done .sparkle {
    display: none;
  }
  @keyframes sparkle {
    0%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0; }
    35%      { transform: scale(1) rotate(90deg); opacity: 1; }
    70%      { transform: scale(0.45) rotate(180deg); opacity: 0; }
  }

  .tap-hint {
    color: #0A2558;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 18px rgba(10, 37, 88, 0.3);
    animation: hint-pulse 900ms ease-in-out infinite alternate;
  }
  .tap-hint.hide {
    display: none;
  }
  @keyframes hint-pulse {
    from { opacity: 0.62; transform: translateY(0); }
    to   { opacity: 1; transform: translateY(-2px); }
  }

  .click-ripple {
    position: fixed;
    left: var(--x);
    top: var(--y);
    width: 18px;
    height: 18px;
    border: 2px solid rgba(62, 165, 239, 0.72);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.2);
    pointer-events: none;
    z-index: 90;
    animation: click-ripple 520ms ease-out forwards;
  }
  @keyframes click-ripple {
    to {
      transform: translate(-50%, -50%) scale(8);
      opacity: 0;
    }
  }

  .tease {
    color: #0A2558;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    text-shadow: 0 0 16px rgba(10, 37, 88, 0.4);
    margin-top: 4px;
    animation: pulse 0.9s ease-in-out infinite alternate;
    display: none;
  }
  .tease.show { display: block; }
  @keyframes pulse {
    from { opacity: 0.7; transform: scale(1); }
    to   { opacity: 1;   transform: scale(1.04); }
  }

  .reveal {
    text-align: center;
    padding: 18px 22px;
    border-radius: 18px;
    border: 1px solid rgba(62, 165, 239, 0.35);
    background: linear-gradient(180deg, rgba(62, 165, 239, 0.12), rgba(10, 37, 88, 0.3));
    width: 100%;
    max-width: 320px;
    display: none;
    animation: pop 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.show { display: block; }
  .reveal.show .amount {
    animation: amount-glow 900ms ease-out 2;
  }
  @keyframes pop {
    from { transform: scale(0.85); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
  }
  @keyframes amount-glow {
    0%   { transform: scale(0.94); filter: drop-shadow(0 0 0px rgba(62, 165, 239, 0)); }
    55%  { transform: scale(1.08); filter: drop-shadow(0 0 18px rgba(62, 165, 239, 0.7)); }
    100% { transform: scale(1);    filter: drop-shadow(0 0 12px rgba(62, 165, 239, 0.4)); }
  }
  .reveal .eyebrow {
    color: rgba(10, 37, 88, 0.7);
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  .reveal .amount {
    background: linear-gradient(135deg, #3EA5EF 0%, #0A2558 50%, #3EA5EF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 36px;
    font-weight: 800;
    margin: 4px 0;
    filter: drop-shadow(0 0 12px rgba(62, 165, 239, 0.4));
  }
  .reveal .note {
    color: rgba(10, 37, 88, 0.65);
    font-size: 12px;
  }

  .confetti {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 100;
    display: none;
  }
  .confetti.show { display: block; }
  .confetti .piece {
    position: absolute;
    top: -20px;
    width: 8px;
    height: 14px;
    border-radius: 1px;
    animation: fall var(--dur, 2200ms) cubic-bezier(0.4, 0, 0.6, 1) var(--delay, 0ms) forwards;
    opacity: 0;
  }
  @keyframes fall {
    0%   { transform: translateY(0)     rotate(var(--rot, 0deg)); opacity: 0; }
    10%  { opacity: 1; }
    100% { transform: translateY(120vh) rotate(var(--rot, 0deg)); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
  .tease,
    .tap-hint,
    .confetti,
    .glow-ring,
    .wheel-box::before,
    .wheel-box::after,
    .pointer,
    .sparkle,
    svg.wheel,
    .reveal.show .amount {
      animation: none !important;
    }
  }
</style>
</head>
<body>

<div class="container">
  <p class="subtitle">
    You've been chosen to spin our lucky wheel.
    Try your luck and claim your exclusive discount - only one spin per user.
  </p>

  <div class="wheel-box ready" id="wheelBox" role="button" aria-label="Spin the lucky wheel" tabindex="0">
    <div class="pointer"></div>
    <div class="glow-ring"></div>
    <svg class="wheel" id="wheel" viewBox="0 0 300 300"></svg>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
  </div>

  <p class="tease" id="tease">Almost there...</p>
  <p class="tap-hint" id="tapHint">Tap anywhere to spin</p>

  <div class="reveal" id="reveal">
    <p class="eyebrow">Success</p>
    <p class="amount" id="revealAmount">50% OFF</p>
    <p class="note">Applied at checkout - limited to this session only.</p>
  </div>
</div>

<div class="confetti" id="confetti"></div>

<script>
  const PRIZES = [
    { label: '10%', color: '#3EA5EF', textColor: '#FFFFFF', winner: false },
    { label: '50%', color: '#FFFFFF', textColor: '#0A2558', winner: true  },
    { label: 'x',   color: '#0A2558', textColor: '#3EA5EF', winner: false },
    { label: '20%', color: '#3EA5EF', textColor: '#FFFFFF', winner: false },
    { label: '5%',  color: '#0A2558', textColor: '#3EA5EF', winner: false },
    { label: 'TRY', color: '#FFFFFF', textColor: '#0A2558', winner: false },
  ];
  const SLICE = 360 / PRIZES.length;
  const SPIN_MS = 6800;
  const TEASE_AT_MS = 4600;
  const AUTO_NAVIGATE_DELAY_MS = 3000;

  const wheel = document.getElementById('wheel');
  const wheelBox = document.getElementById('wheelBox');
  const tapHint = document.getElementById('tapHint');
  const tease = document.getElementById('tease');
  const reveal = document.getElementById('reveal');
  const revealAmount = document.getElementById('revealAmount');
  const confetti = document.getElementById('confetti');

  const cx = 150, cy = 150, r = 140;
  let svgInner = '';
  PRIZES.forEach((p, i) => {
    const start = i * SLICE;
    const end = start + SLICE;
    const a1 = (start - 90) * Math.PI / 180;
    const a2 = (end - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
    const mid = ((start + end) / 2 - 90) * Math.PI / 180;
    const tx = cx + r * 0.6 * Math.cos(mid);
    const ty = cy + r * 0.6 * Math.sin(mid);

    svgInner += \`
      <path
        d="M \${cx} \${cy} L \${x1} \${y1} A \${r} \${r} 0 0 1 \${x2} \${y2} Z"
        fill="\${p.color}" stroke="rgba(62,165,239,0.25)" stroke-width="1.5"
      />
      <text
        x="\${tx}" y="\${ty}"
        fill="\${p.textColor}"
        font-size="\${p.winner ? 22 : 16}"
        font-weight="\${p.winner ? 800 : 700}"
        text-anchor="middle"
        dominant-baseline="middle"
        transform="rotate(\${start + SLICE / 2} \${tx} \${ty})"
        style="text-shadow: 0 1px 2px rgba(0,0,0,0.4)"
      >\${p.label}</text>
    \`;
  });
  svgInner += \`
    <circle cx="\${cx}" cy="\${cy}" r="28" fill="#0A2558" />
    <circle cx="\${cx}" cy="\${cy}" r="10" fill="#3EA5EF" />
  \`;
  wheel.innerHTML = svgInner;

  let spun = false;
  let spinning = false;

  function goNext() {
    if (window.fox) window.fox.navigation.goNext();
  }

  function createClickRipple(x, y) {
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    ripple.style.setProperty('--x', \`\${x}px\`);
    ripple.style.setProperty('--y', \`\${y}px\`);
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  function spinWheel(event) {
    if (spun || spinning) return;
    spun = true;
    spinning = true;
    document.body.style.cursor = 'default';
    wheelBox.classList.remove('ready');
    tapHint.classList.add('hide');
    if (typeof event?.clientX === 'number' && typeof event?.clientY === 'number') {
      createClickRipple(event.clientX, event.clientY);
    }

    const winnerIndex = PRIZES.findIndex(p => p.winner);
    const boundaryAfterWinner = (winnerIndex + 1) * SLICE;
    const almostLostOffset = 0.8;
    const finalTarget = -(360 * 9 + boundaryAfterWinner - almostLostOffset);

    wheelBox.classList.add('spinning');
    wheel.classList.remove('phase-fast', 'phase-crawl');
    wheel.style.transform = 'rotate(0deg)';
    wheel.style.transition = 'none';
    void wheel.offsetWidth;

    const spinAnimation = wheel.animate(
      [
        {
          transform: 'rotate(0deg)',
          easing: 'cubic-bezier(0.08, 0.76, 0.02, 1)'
        },
        {
          transform: \`rotate(\${finalTarget}deg)\`
        }
      ],
      {
        duration: SPIN_MS,
        fill: 'forwards'
      }
    );

    const teaseTimer = setTimeout(() => {
      tease.classList.add('show');
    }, TEASE_AT_MS);

    spinAnimation.onfinish = () => {
      clearTimeout(teaseTimer);
      wheel.style.transform = \`rotate(\${finalTarget}deg)\`;
      spinAnimation.cancel();
      wheelBox.classList.remove('spinning');
      wheelBox.classList.add('done');
      wheel.classList.remove('phase-crawl');
      tease.classList.remove('show');
      spinning = false;

      const winner = PRIZES[winnerIndex];
      revealAmount.textContent = \`\${winner.label} OFF\`;
      reveal.classList.add('show');

      confetti.innerHTML = '';
      const colors = ['#3EA5EF', '#FFFFFF', '#0A2558', '#7EC8F7', '#B3E0FA'];
      for (let i = 0; i < 30; i++) {
        const piece = document.createElement('span');
        piece.className = 'piece';
        piece.style.left = \`\${(i * 3.4 + (i % 5) * 1.5) % 100}%\`;
        piece.style.background = colors[i % colors.length];
        piece.style.setProperty('--delay', \`\${(i % 8) * 120}ms\`);
        piece.style.setProperty('--dur', \`\${1800 + ((i * 137) % 900)}ms\`);
        piece.style.setProperty('--rot', \`\${(i * 47) % 360}deg\`);
        confetti.appendChild(piece);
      }
      confetti.classList.add('show');
      setTimeout(() => confetti.classList.remove('show'), 4000);

      setTimeout(goNext, AUTO_NAVIGATE_DELAY_MS);
    };
  }

  document.addEventListener('pointerdown', spinWheel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      spinWheel();
    }
  });
<\/script>

</body>
</html></div>`,cta:"Continue"},{id:"paywall-1",type:"raw",name:"Paywall_1",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><div class="ff-col"><div class="ff-note">[Timer] Your discount is active for
{{countdown}} —  {{countdown}}</div></div><h1>What you get</h1><div class="ffgift-root" id="ffgift-root">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
    .ffgift-root{font-family:'Bricolage Grotesque',-apple-system,Segoe UI,Roboto,sans-serif;text-align:center;max-width:340px;margin:0 auto;padding:8px 0}
    .ffgift-anim{width:230px;height:205px;margin:0 auto;pointer-events:none}
    .ffgift-cards{display:flex;flex-direction:column;gap:12px;margin-top:6px;text-align:left}
    .ffgift-card{display:flex;align-items:flex-start;gap:14px;background:#fff;border-radius:16px;padding:14px 16px;box-shadow:0 6px 18px rgba(31,120,214,.10);opacity:0;transform:translateY(28px) scale(.82);transition:opacity .5s ease,transform .55s cubic-bezier(.2,1.5,.45,1)}
    .ffgift-card.in{opacity:1;transform:translateY(0) scale(1)}
    .ffgift-ic{font-size:26px;line-height:1;flex:0 0 auto;margin-top:2px}
    .ffgift-t{font-size:16px;font-weight:700;color:#16202b;line-height:1.25}
    .ffgift-s{font-size:13.5px;color:#5b6b7a;line-height:1.35;margin-top:3px}
  </style>

  <div class="ffgift-anim" id="ffgift-anim"></div>

  <div class="ffgift-cards" id="ffgift-cards">
    <div class="ffgift-card">
      <div class="ffgift-ic">📚</div>
      <div>
        <div class="ffgift-t">Smart Review System</div>
        <div class="ffgift-s">Remember words 10x longer</div>
      </div>
    </div>
    <div class="ffgift-card">
      <div class="ffgift-ic">📊</div>
      <div>
        <div class="ffgift-t">Weekly Fluency Audit</div>
        <div class="ffgift-s">Get detailed weekly progress reports</div>
      </div>
    </div>
    <div class="ffgift-card">
      <div class="ffgift-ic">💼</div>
      <div>
        <div class="ffgift-t">The 'Office Survival Pack'</div>
        <div class="ffgift-s">Master career vocabulary, daily office communication</div>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"><\/script>
  <script>
  (function(){
    var ffgiftData = {"v":"5.6.3","fr":30,"ip":0,"op":38,"w":315,"h":280,"nm":"new","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"bodyband Konturen","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[157.5,129,0],"ix":2},"a":{"a":0,"k":[157.5,140,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-14.5,52],[14.5,52],[14.5,52.25],[-14.5,52.25]],"c":true}]},{"t":19.111328125,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-14.5,-41],[14.5,-41],[14.5,52.25],[-14.5,52.25]],"c":true}]}],"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[160.5,184],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"topband Konturen","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[157.5,140,0],"ix":2},"a":{"a":0,"k":[157.5,140,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16.777,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-14.5,-14.5],[14.5,-14.5],[15.036,-14.207],[-13.964,-14.207]],"c":true}]},{"t":23,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-14.5,-14.5],[14.5,-14.5],[14.5,14.5],[-14.5,14.5]],"c":true}]}],"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[160.5,128.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"body Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5.432,"s":[-13]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11.111,"s":[17.85]},{"t":16.2958984375,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[162.125,247.599,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8.148,"s":[162.125,145.599,0],"to":[0,0,0],"ti":[0,0,0]},{"t":16.2958984375,"s":[162.125,236.099,0]}],"ix":2},"a":{"a":0,"k":[162.125,225.099,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[-3.228,0],[0,0],[-2.75,0.062]],"o":[[0,0],[0,0],[4.75,-0.188],[0,0],[3.228,0],[0,0]],"v":[[56.25,46.5],[-54.75,46.5],[-55,46.688],[-49.658,46.5],[49.658,46.5],[56,46.688]],"c":true}]},{"t":3.7041015625,"s":[{"i":[[0,0],[0,0],[0,0],[-3.228,0],[0,0],[0,3.21]],"o":[[0,0],[0,0],[0,3.21],[0,0],[3.228,0],[0,0]],"v":[[55.5,-46.5],[-55.5,-46.5],[-55.5,40.688],[-49.658,46.5],[49.658,46.5],[55.5,40.688]],"c":true}]}],"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.387386546415,0.610226021561,0.944485294118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[161.5,178.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"top Konturen","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3.704,"s":[0]},{"t":4.4443359375,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8.148,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14.074,"s":[-23]},{"t":20,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.937,"y":0.946},"o":{"x":0.167,"y":0.167},"t":0,"s":[160,177.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.097,"y":0},"o":{"x":0.084,"y":0.101},"t":10.37,"s":[150,34.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":20,"s":[161,128.5,0]}],"ix":2},"a":{"a":0,"k":[161,128.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10.37,"s":[58.621,58.621,100]},{"t":20,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.219,0],[0,0],[0,-3.204],[0,0],[-3.219,0],[0,0],[0,3.204],[0,0]],"o":[[0,0],[-3.219,0],[0,0],[0,3.204],[0,0],[3.219,0],[0,0],[0,-3.204]],"v":[[61.174,-14.5],[-61.174,-14.5],[-67,-8.7],[-67,8.7],[-61.174,14.5],[61.174,14.5],[67,8.7],[67,-8.7]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.137254901961,0.458823529412,0.941176470588,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[161,128.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"schleife/new Konturen","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[161,115,0],"ix":2},"a":{"a":0,"k":[161,115,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.029,0.029,0.833],"y":[1.656,1.656,-15.667]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":23,"s":[0,0,100]},{"t":34,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[8.059,0],[1.667,-0.428],[-0.598,-1.849],[-1.278,0],[0,-4.797],[4.835,0],[0,0],[-8.693,2.139],[0.541,1.87],[3.006,-6.366],[4.932,3.716],[1.157,-1.595],[-1.586,-3.998],[0,0],[0,4.796],[-4.834,0],[-2.606,-1.934],[-1.272,1.478],[5.256,0],[0,-7.995],[-8.058,0],[0,0],[0,0],[0,7.995]],"o":[[-1.91,0],[0.541,1.87],[1.145,-0.282],[4.835,0],[0,4.796],[0,0],[2.097,-5.318],[-0.598,-1.849],[-9.385,2.413],[-2.071,-4.386],[-1.272,1.478],[5.152,3.823],[0,0],[-4.834,0],[0,-4.797],[3.679,0],[1.157,-1.595],[-3.498,-2.637],[-8.058,0],[0,7.995],[0,0],[0,0],[8.059,0],[0,-7.995]],"v":[[23.385,-14.5],[18.024,-13.831],[19.756,-8.259],[23.385,-8.7],[32.155,0],[23.385,8.7],[4.075,8.7],[19.756,-8.259],[18.024,-13.831],[0,3.422],[-10.322,-10.065],[-13.987,-5.478],[-4.083,8.7],[-23.385,8.7],[-32.154,0],[-23.385,-8.7],[-13.987,-5.478],[-10.322,-10.065],[-23.385,-14.5],[-38,0],[-23.385,14.5],[0,14.5],[23.385,14.5],[38,0]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478431402468,0.678431372549,0.984313785329,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[161,100.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"shadow Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[162,236,0],"ix":2},"a":{"a":0,"k":[162,225,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.115,0.115,0.833],"y":[1,1,-5.19]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":0,"s":[0,0,100]},{"t":13,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-53.02,0],[0,-3.313],[53.02,0],[0,3.313]],"o":[[53.02,0],[0,3.313],[-53.02,0],[0,-3.313]],"v":[[0,-6],[96,0],[0,6],[-96,0]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.944999964097,0.944999964097,0.944999964097,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[162,225],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Ebene 12 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":9,"s":[262]},{"t":29,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.359},"o":{"x":0.167,"y":0.167},"t":9,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":29,"s":[95.449,44.997,0]}],"ix":2},"a":{"a":0,"k":[95.449,44.997,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":9,"s":[0,0,100]},{"t":29,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-2.18,-3.777],[2.178,-3.775],[4.359,0.001],[2.181,3.777],[-2.18,3.775],[-4.359,-0.001]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.011999999776,0.663000009574,0.957000014361,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[95.449,44.997],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Ebene 13 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[-63]},{"t":23,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.564},"o":{"x":0.167,"y":0.167},"t":3,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":23,"s":[248.067,112.75,0]}],"ix":2},"a":{"a":0,"k":[248.067,112.75,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":3,"s":[0,0,100]},{"t":23,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1.53,-6.63],[4.974,-4.639],[6.505,1.99],[1.532,6.63],[-4.972,4.64],[-6.505,-1.989]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.011999999776,0.663000009574,0.957000014361,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[248.067,112.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Ebene 14 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-200]},{"t":20,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.477},"o":{"x":0.167,"y":0.167},"t":0,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":20,"s":[268.728,57.196,0]}],"ix":2},"a":{"a":0,"k":[120.728,247.196,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":0,"s":[0,0,100]},{"t":20,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-2.376,-3.394],[2.799,1.018],[-2.799,3.394]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.675171018114,0.793515613032,0.97103247549,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[120.728,247.196],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Ebene 15 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[134]},{"t":28,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.547},"o":{"x":0.167,"y":0.167},"t":8,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":28,"s":[61.63,139.445,0]}],"ix":2},"a":{"a":0,"k":[61.63,139.445,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":8,"s":[0,0,100]},{"t":28,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[4.37,-5.433],[4.286,5.433],[-4.37,1.022]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.675171018114,0.793515613032,0.97103247549,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[61.63,139.445],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Ebene 16 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[74]},{"t":25,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.387},"o":{"x":0.167,"y":0.167},"t":5,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":25,"s":[183.561,32.661,0]}],"ix":2},"a":{"a":0,"k":[183.561,32.661,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":5,"s":[0,0,100]},{"t":25,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.146,0],[0,-2.147],[2.146,0],[0,2.147]],"o":[[2.146,0],[0,2.147],[-2.146,0],[0,-2.147]],"v":[[-0.001,-3.888],[3.886,0],[-0.001,3.888],[-3.887,0]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.428810508578,0.645858585133,0.971430759804,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[183.561,32.661],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Ebene 17 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[29]},{"t":32,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.463},"o":{"x":0.167,"y":0.167},"t":12,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":32,"s":[44.65,36.558,0]}],"ix":2},"a":{"a":0,"k":[214.65,244.558,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":12,"s":[0,0,100]},{"t":32,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.22,0],[0,-3.222],[3.22,0],[0,3.221]],"o":[[3.22,0],[0,3.221],[-3.22,0],[0,-3.222]],"v":[[0,-5.832],[5.829,0],[0,5.832],[-5.829,0]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.478431402468,0.678431372549,0.984313785329,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Kontur 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[214.65,244.558],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Ebene 18 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[168]},{"t":23,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.243},"o":{"x":0.167,"y":0.167},"t":3,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":23,"s":[294.925,112.226,0]}],"ix":2},"a":{"a":0,"k":[62.925,234.226,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":3,"s":[0,0,100]},{"t":23,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.209,0.131],[0,0],[0,0],[0.174,-0.142],[0,0],[0,0],[-0.093,-0.228],[0,0],[0,0],[-0.247,0.014],[0,0],[0,0],[-0.059,0.236],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.012,-0.223],[0,0],[0,0],[-0.238,-0.069],[0,0],[0,0],[-0.135,0.201],[0,0],[0,0],[0.155,0.19],[0,0],[0,0],[0.232,-0.083]],"v":[[2.206,-0.077],[1.1,-0.771],[1.036,-2.051],[0.544,-2.269],[-0.45,-1.461],[-1.706,-1.819],[-2.062,-1.431],[-1.568,-0.237],[-2.281,0.82],[-2.008,1.278],[-0.711,1.208],[0.105,2.221],[0.628,2.116],[0.938,0.878],[2.156,0.446]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[62.916,234.223],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Ebene 19 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[-209]},{"t":28,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.25},"o":{"x":0.167,"y":0.167},"t":8,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":28,"s":[35.721,103.978,0]}],"ix":2},"a":{"a":0,"k":[35.721,103.978,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":8,"s":[0,0,100]},{"t":28,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.209,0.131],[0,0],[0,0],[0.174,-0.141],[0,0],[0,0],[-0.094,-0.227],[0,0],[0,0],[-0.247,0.014],[0,0],[0,0],[-0.059,0.237],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.012,-0.224],[0,0],[0,0],[-0.238,-0.068],[0,0],[0,0],[-0.135,0.2],[0,0],[0,0],[0.155,0.191],[0,0],[0,0],[0.231,-0.083]],"v":[[2.206,-0.078],[1.1,-0.771],[1.036,-2.051],[0.544,-2.27],[-0.45,-1.461],[-1.706,-1.82],[-2.062,-1.432],[-1.568,-0.238],[-2.281,0.82],[-2.008,1.278],[-0.711,1.207],[0.105,2.22],[0.628,2.115],[0.938,0.878],[2.156,0.446]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.712,103.975],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Ebene 20 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[275]},{"t":27,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.09},"o":{"x":0.167,"y":0.167},"t":7,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":27,"s":[261.12,26.218,0]}],"ix":2},"a":{"a":0,"k":[261.12,26.218,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":7,"s":[0,0,100]},{"t":27,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.21,0.131],[0,0],[0,0],[0.174,-0.141],[0,0],[0,0],[-0.093,-0.228],[0,0],[0,0],[-0.247,0.014],[0,0],[0,0],[-0.059,0.236],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.011,-0.223],[0,0],[0,0],[-0.238,-0.068],[0,0],[0,0],[-0.135,0.2],[0,0],[0,0],[0.155,0.19],[0,0],[0,0],[0.232,-0.082]],"v":[[2.206,-0.078],[1.099,-0.771],[1.034,-2.052],[0.543,-2.27],[-0.45,-1.461],[-1.707,-1.82],[-2.062,-1.432],[-1.568,-0.238],[-2.281,0.82],[-2.009,1.278],[-0.711,1.207],[0.105,2.22],[0.628,2.115],[0.937,0.878],[2.155,0.445]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[261.111,26.215],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Ebene 21 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[132.9]},{"t":23,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.326},"o":{"x":0.167,"y":0.167},"t":3,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":23,"s":[268.337,196.938,0]}],"ix":2},"a":{"a":0,"k":[252.337,213.938,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":3,"s":[0,0,100]},{"t":23,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.411,0.258],[0,0],[0,0],[0.34,-0.276],[0,0],[0,0],[-0.184,-0.446],[0,0],[0,0],[-0.483,0.027],[0,0],[0,0],[-0.116,0.463],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.022,-0.439],[0,0],[0,0],[-0.466,-0.133],[0,0],[0,0],[-0.265,0.392],[0,0],[0,0],[0.302,0.373],[0,0],[0,0],[0.454,-0.162]],"v":[[4.322,-0.152],[2.152,-1.51],[2.027,-4.017],[1.065,-4.447],[-0.882,-2.861],[-3.344,-3.565],[-4.038,-2.804],[-3.072,-0.465],[-4.468,1.607],[-3.935,2.505],[-1.392,2.366],[0.207,4.35],[1.231,4.145],[1.837,1.72],[4.222,0.874]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[252.32,213.932],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Ebene 22 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[-266]},{"t":33,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.337},"o":{"x":0.167,"y":0.167},"t":13,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":33,"s":[133.395,26.515,0]}],"ix":2},"a":{"a":0,"k":[133.395,26.515,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":13,"s":[0,0,100]},{"t":33,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.411,0.258],[0,0],[0,0],[0.34,-0.277],[0,0],[0,0],[-0.183,-0.446],[0,0],[0,0],[-0.484,0.026],[0,0],[0,0],[-0.116,0.462],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.022,-0.438],[0,0],[0,0],[-0.466,-0.133],[0,0],[0,0],[-0.264,0.392],[0,0],[0,0],[0.302,0.373],[0,0],[0,0],[0.454,-0.162]],"v":[[4.322,-0.152],[2.152,-1.511],[2.027,-4.018],[1.065,-4.446],[-0.882,-2.861],[-3.344,-3.565],[-4.039,-2.804],[-3.072,-0.466],[-4.469,1.607],[-3.935,2.505],[-1.392,2.366],[0.207,4.35],[1.231,4.145],[1.837,1.72],[4.222,0.874]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[133.378,26.508],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Ebene 23 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[399]},{"t":25,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.478},"o":{"x":0.167,"y":0.167},"t":5,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":25,"s":[257.258,159.497,0]}],"ix":2},"a":{"a":0,"k":[257.258,159.497,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":5,"s":[0,0,100]},{"t":25,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.721,-0.604],[0,0],[0,0],[-0.306,-0.794],[0,0],[0,0],[-0.932,0.071],[0,0],[0,0],[-0.241,0.908],[0,0],[0,0],[0.783,0.491],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.821,-0.221],[0,0],[0,0],[-0.524,0.78],[0,0],[0,0],[0.566,0.723],[0,0],[0,0],[0.869,-0.333],[0,0],[0,0],[-0.027,-0.935]],"v":[[2.281,-8.697],[-1.528,-5.509],[-6.23,-6.781],[-7.598,-5.261],[-5.84,-0.719],[-8.615,3.403],[-7.627,5.141],[-2.732,4.758],[0.255,8.578],[2.232,8.133],[3.5,3.356],[8.121,1.595],[8.357,-0.417],[4.245,-2.989],[4.113,-7.897]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[257.231,159.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Ebene 24 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[-212]},{"t":31,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.748},"o":{"x":0.167,"y":0.167},"t":11,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":31,"s":[97.064,84.204,0]}],"ix":2},"a":{"a":0,"k":[97.064,84.204,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":11,"s":[0,0,100]},{"t":31,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.675,-0.565],[0,0],[0,0],[-0.287,-0.743],[0,0],[0,0],[-0.872,0.067],[0,0],[0,0],[-0.226,0.849],[0,0],[0,0],[0.734,0.459],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.77,-0.208],[0,0],[0,0],[-0.491,0.73],[0,0],[0,0],[0.53,0.677],[0,0],[0,0],[0.814,-0.312],[0,0],[0,0],[-0.026,-0.875]],"v":[[2.135,-8.142],[-1.43,-5.157],[-5.831,-6.348],[-7.113,-4.926],[-5.467,-0.674],[-8.064,3.186],[-7.141,4.812],[-2.557,4.454],[0.239,8.029],[2.09,7.613],[3.277,3.141],[7.602,1.493],[7.822,-0.391],[3.974,-2.799],[3.851,-7.393]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[97.039,84.191],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Ebene 25 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[-256]},{"t":23,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.718},"o":{"x":0.167,"y":0.167},"t":3,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":23,"s":[78.559,168.874,0]}],"ix":2},"a":{"a":0,"k":[78.559,168.874,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":3,"s":[0,0,100]},{"t":23,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.516,-0.432],[0,0],[0,0],[-0.219,-0.569],[0,0],[0,0],[-0.668,0.051],[0,0],[0,0],[-0.173,0.65],[0,0],[0,0],[0.562,0.351],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.588,-0.159],[0,0],[0,0],[-0.376,0.559],[0,0],[0,0],[0.405,0.518],[0,0],[0,0],[0.623,-0.239],[0,0],[0,0],[-0.02,-0.669]],"v":[[1.633,-6.229],[-1.096,-3.945],[-4.463,-4.856],[-5.442,-3.768],[-4.183,-0.516],[-6.17,2.436],[-5.463,3.681],[-1.958,3.407],[0.182,6.143],[1.598,5.824],[2.507,2.403],[5.814,1.142],[5.984,-0.299],[3.04,-2.141],[2.945,-5.656]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[78.54,168.865],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Ebene 26 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[50]},{"t":37,"s":[18]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.897},"o":{"x":0.167,"y":0.167},"t":17,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":37,"s":[155.771,214.44,0]}],"ix":2},"a":{"a":0,"k":[155.771,214.44,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.008,1.008,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,15.952]},"t":17,"s":[0,0,100]},{"t":37,"s":[67,67,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.312,-0.183],[0,0],[0,0],[0.227,-1.177],[0,0],[0,0],[-1.168,-0.61],[0,0],[0,0],[-0.967,0.904],[0,0],[0,0],[0.57,1.171],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.816,-0.879],[0,0],[0,0],[-1.21,0.541],[0,0],[0,0],[0.137,1.287],[0,0],[0,0],[1.289,0.251],[0,0],[0,0],[0.665,-1.137]],"v":[[10.542,-8.02],[3.609,-7.053],[-1.06,-12.084],[-3.829,-11.291],[-5.121,-4.55],[-11.514,-1.696],[-11.632,1.119],[-5.496,4.318],[-4.779,11.114],[-2.084,12.058],[2.999,7.295],[9.835,8.642],[11.62,6.414],[8.627,0.269],[12.136,-5.695]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.728999956916,0.030999998953,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[155.828,214.455],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Ebene 27 Konturen","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[-239]},{"t":31,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.5},"o":{"x":0.167,"y":0.167},"t":11,"s":[157.5,140,0],"to":[0,0,0],"ti":[0,0,0]},{"t":31,"s":[219.606,61.933,0]}],"ix":2},"a":{"a":0,"k":[219.606,61.933,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.042,0.042,0.833],"y":[1.006,1.006,-26.778]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,16.667]},"t":11,"s":[0,0,100]},{"t":31,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.946,-0.131],[0,0],[0,0],[0.163,-0.849],[0,0],[0,0],[-0.842,-0.44],[0,0],[0,0],[-0.697,0.652],[0,0],[0,0],[0.411,0.845],[0,0],[0,0]],"o":[[0,0],[0,0],[-0.588,-0.633],[0,0],[0,0],[-0.872,0.39],[0,0],[0,0],[0.099,0.928],[0,0],[0,0],[0.929,0.181],[0,0],[0,0],[0.479,-0.819]],"v":[[7.601,-5.783],[2.602,-5.086],[-0.764,-8.713],[-2.76,-8.141],[-3.693,-3.281],[-8.301,-1.223],[-8.387,0.807],[-3.962,3.114],[-3.445,8.013],[-1.503,8.694],[2.163,5.259],[7.09,6.23],[8.378,4.624],[6.219,0.195],[8.749,-4.107]],"c":true},"ix":2},"nm":"Pfad 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478088468664,0.680082253849,0.983072916667,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"FlÃ¤che 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[219.647,61.944],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Gruppe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":150,"st":0,"bm":0}],"markers":[{"tm":0,"cm":"0","dr":0},{"tm":22,"cm":"1","dr":0}]};
    var played = false;
    function init(){
      if(typeof lottie === "undefined"){ return setTimeout(init, 120); }
      var anim = lottie.loadAnimation({
        container: document.getElementById("ffgift-anim"),
        renderer: "svg", loop: false, autoplay: false, animationData: ffgiftData
      });
      function revealCards(){
        var cards = document.querySelectorAll("#ffgift-cards .ffgift-card");
        for(var i=0;i<cards.length;i++){
          (function(c,idx){ setTimeout(function(){ c.classList.add("in"); }, idx*150); })(cards[i], i);
        }
      }
      anim.addEventListener("complete", revealCards);
      function play(){
        if(played) return; played = true;
        anim.goToAndPlay(0, true);
        setTimeout(revealCards, 2800); // safety net if "complete" never fires
      }
      // Play when the popup/element actually becomes visible
      var root = document.getElementById("ffgift-root");
      if("IntersectionObserver" in window){
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(e){ if(e.isIntersecting){ play(); io.disconnect(); } });
        }, {threshold: 0.25});
        io.observe(root);
        setTimeout(function(){ if(!played && root.offsetParent !== null) play(); }, 600);
      } else { play(); }
    }
    init();
  })();
  <\/script>
</div><div class="ff-plan">
    <div><b>Weekly</b> <span class="ff-badge">Best value 🔥</span>
      <div style="color:#8a8f9c;font-size:12px"><s>$19.99</s> <b style="color:#e8eaf0">$9.99</b></div></div>
    
  </div><div class="ff-plan">
    <div><b>Monthly</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$59.99</s> <b style="color:#e8eaf0">$29.99</b></div></div>
    
  </div><div class="ff-plan">
    <div><b>Yearly</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$199.99</s> <b style="color:#e8eaf0">$99.99</b></div></div>
    
  </div><div class="ff-note">[Checkout]</div><div class="ff-note">[Checkout]</div><div class="ff-note">[Checkout]</div><div class="ff-col"><h1>&lt;span style=&quot;color: rgb(255, 255, 255);&quot;&gt;This is your &lt;strong&gt;last chance&lt;/strong&gt; to get your &lt;br&gt;personalized plan and unlock a &lt;br&gt;better version of yourself.&lt;/span&gt;</h1></div><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/wDNaiuRe.webp" alt=""><h1>Languoso is &lt;span style=&quot;color: rgb(62, 164, 238);&quot;&gt;50x cheaper &lt;/span&gt;💰 than a Real Tutor</h1><img src="https://assets.fnlfx.com/01KRJC807A97QYE63C3R8CSBPF/ib9n892y.webp" alt=""><p>⭐️ 4.9 Average rating on App Store</p><h1>Trusted by Millions of&lt;br&gt;English Learners 👇</h1><div class="ff-row"><div class="ff-note">[Reviews]</div></div><style>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400&display=swap');

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(62,165,239,0.7), 10px 0px 10px rgba(0,0,0,0.15); transform: scale(1); }
  50%  { box-shadow: 0 0 0 8px rgba(62,165,239,0), 10px 0px 10px rgba(0,0,0,0.15); transform: scale(1.01); }
  100% { box-shadow: 0 0 0 0 rgba(62,165,239,0), 10px 0px 10px rgba(0,0,0,0.15); transform: scale(1); }
}

.scroll-btn {
  width: 100%;
  padding: 16px 0;
  background: #3EA5EF;
  color: #FFFFFF;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 4px solid #3EA5EF;
  border-radius: 32px;
  cursor: pointer;
  box-shadow: 10px 0px 10px rgba(0,0,0,0.15);
  display: block;
  text-decoration: none;
  animation: pulse 1.4s ease infinite;
}
</style>
<a class="scroll-btn" href="#el_o1Xjf">START LEARNING</a></div>`,cta:"Continue",role:"paywall"},{id:"success-payment",type:"raw",name:"Success Payment",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><!-- Languoso payment-success + activation guide. Paste into ONE FunnelFox Raw HTML element on the post-purchase screen. -->
<!-- PRIMARY download deeplink = the Adjust go.link (opens app+email if installed, else redirects to App Store). -->
<!-- Edit window.PS_DEEPLINK to your go.link; the plain App Store URL stays as the in-code fallback in success-screen.js. -->
<div id="ff-success"></div>
<script>
window.PS_DEEPLINK='https://languoso.go.link/activate?adj_t=21zy9b3q&adj_deep_link_id=387632';
window.PS_IMAGES={card:"data:image/webp;base64,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",phones:["data:image/webp;base64,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","data:image/webp;base64,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","data:image/webp;base64,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","data:image/webp;base64,UklGRvgpAABXRUJQVlA4WAoAAAAQAAAAzwIAVgMAQUxQSG8CAAABt6K4bduoUpLe7+4/bkeIiGxIJeQE1uAuVdhSKN/dGEbBu/Yd0EMnDCmBXAUi+h8UhW0bKen+a989M0gRkbStgqyksgD9whi4kSQ5cnr2yHP+HkCECP8VWPEBHzhfOg5AqngSERMAFIi//ygi8u6hBXHc7bEXyl3bxjJp7ixzzXqWSSHQzArN1OMs48zOnmWcLXH2gTPHGc8NZ0UGs4yz5IJ5SXKYVcE8JznLCs6UXDA/WYDZx4s1lHXlXY4yWRPMXTf/+++//5cozWnmPczq8qiAMt0vq7Fs4WL5MJqxbBwFs6EXzPtexrJBLpaPOLv+POBsgrMlzr5w1uEs4IznBWcLnDWcfePMcMbzFc5ecdbhbIIzw1nFWcNZj7OAs1+cGc4WOPvFWYezirMpziLOMs5GnE1x9okzw1nD2Ygzw1nE2eTsWcRZxVmPs1+cVZwNOEs4m509+8ZZwFnD2YiziLMZzgxn3zjj+Rpn8exZj7OKswFnhjPH2R/O9jgLOOP5F84izkac1bNnEWd27syyjGXJhXLTV5aRTAoxy1H2UopIHvynFjnHXLnkJJTn2KI7x5r/RD1Z4Jjs1fX2bo1irXs9WZee5RRznf6CzEVyk1wod93877///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///777/9/DgBWUDggYicAAJBeAZ0BKtACVwM+YTCXR6QjIqkh84mRIAwJaW7ny4UA591i81Dru3hGsA84Rux/LMOsu2T7f99R5iT6js4PqB+7f1UNw7+xHqr+lL/AeoB/SeqF5+H2hP2+yqT1J/lu4X/VeIPk2+Q6JGge0z+Y/hz+t/dvSXwT+WuoX7d3qPd/MX977/rWz8X6/hQQ8mTw0Ezf+krmsvulXpbWdjsAnqVHKm/RendrzfhaVm6pYObbUqusGEYXzJNoDfN411grujtgmHMTsNQN9UFimpew2PCeflhAGctd1drA5hve0BejwlLWB9vE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","data:image/webp;base64,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"]};
window.PS_LOTTIE={"v":"5.5.7","meta":{"g":"LottieFiles AE ","a":"","k":"","d":"","tc":""},"fr":25,"ip":0,"op":30,"w":1080,"h":1080,"nm":"HandGestures","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Arrow 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[358,213.941,0],"ix":2},"a":{"a":0,"k":[-182,-326.059,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-244,-56]],"o":[[0,0],[257.024,58.989]],"v":[[-182,-309],[212,-321]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":29,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":4,"s":[100]},{"t":10,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[100]},{"t":16,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Arrow 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":148,"ix":10},"p":{"a":0,"k":[375.656,224.224,0],"ix":2},"a":{"a":0,"k":[211.877,25.189,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":12,"s":[200,200,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[200,200,100]},{"t":18,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.495,2.563],[6.014,8.485],[2.342,-0.248],[0.461,-1.993],[1.138,-4.939],[1.254,-6.605],[0.885,-3.84],[-1.7,-1.209],[-1.794,1.041],[-9.081,4.188]],"o":[[-5.106,-8.727],[-1.29,-1.82],[-2.346,0.249],[-1.136,4.938],[-1.524,6.812],[-0.884,3.841],[-0.458,1.999],[1.698,1.209],[8.366,-4.854],[2.66,-1.223]],"v":[[110.146,3.457],[93.464,-22.382],[88.4,-24.754],[84.742,-20.801],[81.333,-5.986],[78.305,7.181],[75.654,18.702],[76.871,23.793],[81.779,23.866],[107.961,10.283]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[136.49,25.251],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Swipe Left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[19]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[0]},{"t":30,"s":[19]}],"ix":10},"p":{"a":0,"k":[703.934,831.105,0],"ix":2},"a":{"a":0,"k":[304.352,305.631,0],"ix":1},"s":{"a":0,"k":[200,200,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.013,-17.492],[34.727,-12.642],[9.567,0],[0,0],[20.459,9.608],[0,0],[0.478,0.248],[1.597,4.418],[-1.989,4.267],[-6.802,0],[-2.26,-1.055],[0,0],[-1.547,1.389],[0.715,1.947],[0,0],[-8.815,3.207],[-1.34,0],[-2.51,-6.896],[0,0],[-2.616,0.958],[0.96,2.631],[0,0],[-6.376,2.322],[-1.571,0],[-1.936,-5.32],[0,0],[0,0],[-2.616,0.956],[0.957,2.629],[0,0],[-6.898,2.511],[-1.573,0],[-1.939,-5.322],[0,0],[0,0],[-2.641,0.962],[0.957,2.629],[0,0],[-2.239,0.814],[-1.438,0],[-1.327,-3.644]],"o":[[-2.64,22.93],[-10.282,3.742],[0,0],[-20.357,-0.002],[0,0],[-31.952,-14.9],[-4.249,-1.983],[-1.596,-4.418],[2.906,-6.233],[2.563,0],[0,0],[1.857,0.922],[1.544,-1.384],[0,0],[-2.395,-6.591],[1.454,-0.529],[5.109,0],[0,0],[0.96,2.63],[2.632,-0.959],[0,0],[-3.814,-10.479],[1.495,-0.544],[5.66,0],[0,0],[0,0],[0.96,2.631],[2.629,-0.959],[0,0],[-2.404,-6.933],[1.494,-0.544],[5.657,0],[0,0],[0,0],[0.957,2.629],[2.629,-0.957],[0,0],[1.564,-1.624],[1.254,-0.457],[4.836,0],[7.757,21.318]],"v":[[99.73,55.448],[57.353,111.03],[27.855,116.592],[27.852,116.592],[-30.633,98.684],[-35.895,96.22],[-91.38,68.757],[-100.446,58.834],[-99.839,45.367],[-84.1,35.262],[-76.773,36.878],[-40.232,55.005],[-34.598,54.237],[-33.222,48.721],[-86.696,-97.162],[-79.95,-115.794],[-75.737,-116.592],[-63.572,-105.579],[-31.22,-16.699],[-24.728,-13.672],[-21.7,-20.167],[-26.321,-32.865],[-15.65,-52.925],[-11.031,-53.745],[1.672,-44.85],[7.97,-27.539],[8.026,-27.389],[14.518,-24.36],[17.546,-30.854],[14.587,-38.992],[22.732,-56.11],[27.354,-56.928],[40.054,-48.032],[47.46,-27.683],[47.559,-27.404],[54.054,-24.376],[57.083,-30.871],[52.672,-42.99],[59.764,-48.019],[63.822,-48.706],[74.287,-42.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.175,3.22],[9.158,0],[2.368,-0.862],[2.53,-1.986],[9.299,0],[2.609,-0.948],[2.691,-4.558],[7.082,0],[2.61,-0.949],[3.401,-4.962],[0,0],[9.553,0],[2.567,-0.936],[-5.025,-13.807],[0,0],[0,0],[4.054,0],[4.52,-9.694],[-2.517,-6.958],[-6.462,-3.003],[-32.226,-15.025],[0,0],[-22.62,-0.002],[0,0],[-11.41,4.154],[-2.804,24.355]],"o":[[-2.794,-7.69],[-2.622,0],[-2.2,0.8],[-3.8,-8.38],[-2.758,0],[-5.314,1.936],[-4.414,-5.224],[-2.755,0],[-5.555,2.023],[0,0],[-4.028,-11.072],[-2.528,0],[-12.439,4.525],[0,0],[0,0],[-3.725,-1.736],[-10.623,0],[-3.13,6.712],[2.517,6.971],[0.231,0.124],[0,0],[20.66,9.704],[0,0],[10.768,0],[40.087,-14.591],[2.695,-23.43]],"v":[[83.806,-45.985],[63.822,-58.841],[56.301,-57.542],[48.895,-53.167],[27.354,-67.063],[19.268,-65.633],[7.05,-55.457],[-11.031,-63.878],[-19.117,-62.448],[-33.17,-51.68],[-54.051,-109.045],[-75.737,-126.725],[-83.414,-125.316],[-96.213,-93.686],[-47.11,40.28],[-72.376,27.747],[-84.1,25.13],[-109.023,41.085],[-109.976,62.28],[-95.913,77.815],[-40.176,105.403],[-34.941,107.856],[27.852,126.725],[27.855,126.725],[60.817,120.553],[109.798,56.606]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.136999990426,0.122000002394,0.125,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[194.369,178.905],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":30,"st":0,"bm":0}],"markers":[]};
<\/script>
<script>
/* Languoso FunnelFox - Payment Success + Activation guide screen.
 *
 * A 5-step swipeable carousel shown AFTER a successful Stripe payment:
 *   1   Download the App
 *   2   Complete the quick onboarding
 *   3.1 Activate your Premium access (open Settings)
 *   3.2 Activate your Premium access (tap Activate Email)
 *   3.3 Activate your Premium access (enter checkout email) + Download CTA
 *
 * Built entirely with createElement (NO HTML-tag strings) so it pastes inline
 * into a FunnelFox Raw HTML element without the editor mangling it. ASCII only,
 * zero backslashes. See funnelfox/README + the funnelfox-custom-js playbook.
 *
 * Images + the App Store deeplink are read from globals defined BEFORE this
 * script (the build injects base64 data-URLs; the preview injects local paths):
 *   window.PS_IMAGES   = { card, phones: [p1, p2, p31, p32, p33] }
 *   window.PS_DEEPLINK = 'https://...'  // App Store / Adjust deeplink
 */
(function () {
  'use strict';

  // ---- config ------------------------------------------------------------
  var IMAGES = (window.PS_IMAGES) || { card: '', phones: ['', '', '', '', ''] };
  // Adjust deeplink BASE. Set window.PS_DEEPLINK to the real Adjust go.link, e.g.
  //   'https://languoso.go.link/activate?adj_t=21zy9b3q&adj_deep_link_id=387632'
  // The buyer email is appended at click time (buildDeeplink) -> app resolves to
  // languoso://activate?email=... -> opens the Activate Email screen pre-filled.
  // PRIMARY = the Adjust go.link (set via window.PS_DEEPLINK in build-success.sh): a smart link
  // that opens the app + email when installed, else auto-redirects to the App Store. The hardcoded
  // value below is only the FALLBACK used if PS_DEEPLINK is ever unset = plain App Store (no email,
  // no deferred deeplink).
  var DEEPLINK = (window.PS_DEEPLINK) || 'https://apps.apple.com/us/app/languoso-ai-language-tutor/id6767434143';
  // Customer Center link (text-button dưới nút Download ở slide cuối). Override qua window.PS_SUPPORT_URL.
  var SUPPORT_URL = window.PS_SUPPORT_URL || 'https://languoso.ai/customer';

  // Build the final download URL: set/replace the \`email\` query param with the buyer's
  // email (URL-encoded). If no email is known, return the base unchanged.
  function buildDeeplink() {
    var base = DEEPLINK;
    var email = getEmail();
    if (!email) return base;
    var enc = encodeURIComponent(email);
    var url = /[?&]email=/.test(base)
        ? base.replace(/([?&]email=)[^&]*/, '$1' + enc)
        : base + (base.indexOf('?') >= 0 ? '&' : '?') + 'email=' + enc;
    // deep_link param: Adjust passes this to adjustDeferredDeeplinkReceived on first install
    url += '&deep_link=' + encodeURIComponent('languoso://activate?email=' + enc);
    return url;
  }
  // FunnelFox renders Raw HTML inside a sandboxed <iframe>. Plain \`window.location.href\` only
  // moves the iframe, and the App Store refuses to render framed -> the button looks dead.
  // Break out to the TOP window, then fall back to a new tab / anchor click so it opens under
  // any sandbox config (the click is a user gesture, so popups are allowed).
  function openStore() {
    var url = buildDeeplink();
    try { if (window.top && window.top !== window) { window.top.location.href = url; return; } } catch (e) {}
    try { var w = window.open(url, '_blank'); if (w) return; } catch (e2) {}
    try {
      var a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); a.parentNode.removeChild(a); return;
    } catch (e3) {}
    window.location.href = url;
  }
  // Mở link phụ (Customer Center) — ưu tiên TAB MỚI để không rời màn success; fallback anchor/top.
  function openTab(url) {
    try { var w = window.open(url, '_blank'); if (w) return; } catch (e) {}
    try {
      var a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); a.parentNode.removeChild(a); return;
    } catch (e2) {}
    try { if (window.top) { window.top.location.href = url; return; } } catch (e3) {}
    window.location.href = url;
  }
  // Swipe-hint Lottie: inline animationData (window.PS_LOTTIE) or a hosted .json
  // URL (window.PS_LOTTIE_URL). If neither is set, a CSS hand+chevrons is used.
  var LOTTIE_DATA = window.PS_LOTTIE || null;
  var LOTTIE_URL = window.PS_LOTTIE_URL || '';

  // Tiny inline icons (data-URLs, ASCII, no HTML tags) -> safe to paste.
  var CHECK_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiIGZpbGw9IiMwMEJBNUQiLz48cGF0aCBkPSJNNS41IDEwLjRsMi44IDIuOCA1LjktNi4yIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMi4xIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K';
  var APPLE_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTE2LjM2NSAxLjQzYzAgMS4xNC0uNDIgMi4yMS0xLjEzIDMuMDItLjc5LjkxLTIuMDcgMS42MS0zLjEzIDEuNTMtLjEzLTEuMS40My0yLjI3IDEuMS0zLjAxLjc4LS44NiAyLjEzLTEuNSAzLjE2LTEuNTR6TTIwLjUgMTcuMDZjLS41NSAxLjI3LS44MiAxLjg0LTEuNTMgMi45Ni0uOTkgMS41Ny0yLjM5IDMuNTItNC4xMiAzLjUzLTEuNTQuMDItMS45NC0xLTQuMDMtLjk5LTIuMDkuMDEtMi41MyAxLjAxLTQuMDcuOTktMS43My0uMDItMy4wNS0xLjc4LTQuMDQtMy4zNC0yLjc3LTQuMzgtMy4wNi05LjUxLTEuMzUtMTIuMjQgMS4yMS0xLjk0IDMuMTMtMy4wOCA0LjkzLTMuMDggMS44NCAwIDIuOTkgMS4wMSA0LjUxIDEuMDEgMS40NyAwIDIuMzctMS4wMSA0LjUtMS4wMSAxLjYxIDAgMy4zMi44OCA0LjU0IDIuMzktMy45OSAyLjE5LTMuMzQgNy44OC42NiA5LjgyeiIvPjwvc3ZnPgo=';
  var HAND_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZD0iTTE0IDE3VjcuNmEyLjEgMi4xIDAgMCAxIDQuMiAwVjE1aC43bC42LTEuMmExLjggMS44IDAgMCAxIDMuNCAxbC4zIDFhMS43IDEuNyAwIDAgMSAzIC44IDEuNyAxLjcgMCAwIDEgMi42IDEuNXYzLjFjMCA0LTMgNi45LTcuMyA2LjktMyAwLTUtMS4xLTYuNi0zLjZsLTMuNC01LjRhMS44IDEuOCAwIDAgMSAzLTIuMWwxLjUgMS41eiIgZmlsbD0iIzJmM2U1NCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPgo=';

  // i18n: English defaults, overridden per-language by window.PS_I18N (set in the paste
  // file BEFORE this script). Only marketing/instruction copy is translated; the in-app
  // button names (Settings / Activate Email / Activate) stay English on purpose so they
  // match the (English) app UI the user is looking at.
  var T = {
    payTitle: 'Payment Success',
    payDesc: 'Follow these steps to access your premium content and start learning.',
    step: 'Step',
    dlTitle: 'Download the App',
    dlDesc: 'Install Languoso on your device on App Store. It only takes a few seconds',
    obTitle: 'Complete the quick onboarding',
    obDesc: 'A short setup personalizes your learning path. It takes less than a minute!',
    actTitle: 'Activate your Premium access',
    act1a: 'Open the app and tap the ', act1c: ' icon on the top left of the Home screen',
    act2a: 'Scroll down to the bottom of Settings and tap ', act2c: '',
    act3a: 'Enter the email you used at checkout, then tap ', act3c: ' to unlock your premium plan',
    cta: 'Download on App Store',
    csHelp: 'Need help? You can reach us at ',
    csLink: 'Languoso Customer Center',
    // --- Email-confirm slide (slide 0) + change-email screen ---
    ecLead: 'You have successfully purchased Languoso Premium. It is linked to the email you gave us: ',
    ecSub: 'To use Languoso, you need to activate with this exact email. We have sent your activation instructions and a personal support link to that address — please check your inbox.',
    ecConfirmQ: 'Is this email correct?',
    ecBtnOk: 'Yes, it is correct',
    ecBtnChange: 'I want to change it',
    ceTitle: 'Update activation email',
    cePlaceholder: 'Enter your new email',
    ceDisclaimer: 'Languoso only lets you change this email once, so please enter it carefully.',
    ceBtnSave: 'Update email',
    ceBack: 'Back',
    ceErrInvalid: 'Please enter a valid email address.',
    ceErrOnce: 'This email has already been changed once and cannot be changed again.',
    ceErrGeneric: 'Could not update your email. Please try again.',
    // --- Change-email request recorded (no live re-bind yet — team processes it) ---
    ceOkTitle: 'Request received',
    ceOkBody: 'We have received your email change request. Our team will update it and resend your activation instructions to your new email shortly:',
    ceOkBtn: 'Continue'
  };
  try { if (window.PS_I18N) { for (var _k in window.PS_I18N) { if (window.PS_I18N[_k]) T[_k] = window.PS_I18N[_k]; } } } catch (e) {}

  // Slide content. \`descParts\` is an array of {t, b} chunks (b=bold) so we can
  // emphasize words without any innerHTML / HTML-tag strings.
  var SLIDES = [
    {
      img: 0, pill: T.step + ' 1', title: T.dlTitle,
      descParts: [{ t: T.dlDesc }]
    },
    {
      img: 1, pill: T.step + ' 2', title: T.obTitle,
      descParts: [{ t: T.obDesc }]
    },
    {
      img: 2, pill: T.step + ' 3.1', title: T.actTitle,
      descParts: [
        { t: T.act1a }, { t: 'Settings', b: true },
        { t: T.act1c }
      ]
    },
    {
      img: 3, pill: T.step + ' 3.2', title: T.actTitle, fadeBoth: true,
      descParts: [
        { t: T.act2a }, { t: 'Activate Email', b: true }, { t: T.act2c }
      ]
    },
    {
      img: 4, pill: T.step + ' 3.3', title: T.actTitle,
      descParts: [
        { t: T.act3a }, { t: 'Activate', b: true },
        { t: T.act3c }
      ]
    }
  ];

  // ---- small DOM helpers -------------------------------------------------
  function el(tag, cls) { var n = document.createElement(tag); if (cls) n.className = cls; return n; }
  function txt(tag, cls, s) { var n = el(tag, cls); n.textContent = s; return n; }

  // Email dùng để kích hoạt/deeplink. Sau khi user đổi email thành công, \`emailOverride\`
  // được set và getEmail() ưu tiên trả về nó (thay cho email checkout gốc).
  var emailOverride = '';
  // The user's checkout email, if FunnelFox exposes it -> nice activation hint.
  function getEmail() {
    if (emailOverride) return emailOverride;
    try {
      var fox = window.fox;
      if (!fox || !fox.inputs) return '';
      var e = fox.inputs.getEmail && fox.inputs.getEmail();
      if (!e && fox.inputs.get) { e = fox.inputs.get('email'); }
      if (e && typeof e === 'object') { e = e.value; }
      return (typeof e === 'string') ? e.trim() : '';
    } catch (err) { return ''; }
  }

  function track(name, props) {
    try { if (window.fox && window.fox.trackCustom) window.fox.trackCustom(name, props || {}); } catch (e) {}
  }

  // ---- styles ------------------------------------------------------------
  var CSS = [
    "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&display=swap');",
    "#ff-success{--ink:#2d2d2d;--sub:#5e5e5e;--blue:#3ea5ef;box-sizing:border-box;position:relative;width:100%;min-height:100dvh;margin:0 auto;display:flex;flex-direction:column;align-items:center;font-family:'Bricolage Grotesque',-apple-system,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;background:radial-gradient(120% 70% at 85% 0%,#e6f1fd 0%,rgba(230,241,253,0) 55%),radial-gradient(120% 70% at 0% 100%,#d6e8fb 0%,rgba(214,232,251,0) 55%),linear-gradient(180deg,#f1f5fd 0%,#deecfb 100%)}",
    "#ff-success *{box-sizing:border-box}",
    /* toast */
    ".ps-toast{position:relative;width:calc(100% - 24px);max-width:384px;margin:8px 0 0;background:#e6fff3;border:1px solid rgba(0,186,93,.8);border-radius:14px;box-shadow:0 4px 16px rgba(0,0,0,.1);padding:16px 80px 16px 18px;display:flex;flex-direction:column;gap:5px;overflow:visible;z-index:3;text-align:left;animation:psToastIn .5s cubic-bezier(.22,.61,.36,1) both}",
    ".ps-toast .row{display:flex;align-items:center;gap:8px}",
    ".ps-toast .ic{width:22px;height:22px;flex:none;animation:psPop .5s cubic-bezier(.34,1.56,.64,1) .22s both}",
    ".ps-toast .tt{font-weight:700;font-size:18px;color:var(--ink);letter-spacing:-.4px;text-wrap:balance;animation:psFadeUp .45s ease-out .3s both}",
    ".ps-toast .ds{font-weight:400;font-size:14px;line-height:1.4;color:var(--sub);letter-spacing:-.3px;max-width:300px;text-wrap:balance;animation:psFadeUp .45s ease-out .4s both}",
    "@keyframes psToastIn{0%{opacity:0;transform:translateY(-14px)}100%{opacity:1;transform:none}}",
    "@keyframes psPop{0%{opacity:0;transform:scale(0)}60%{opacity:1;transform:scale(1.18)}100%{opacity:1;transform:scale(1)}}",
    "@keyframes psFadeUp{0%{opacity:0;transform:translateY(7px)}100%{opacity:1;transform:none}}",
    ".ps-toast .card{position:absolute;right:-8px;top:-42px;width:116px;height:auto;transform-origin:70% 40%;transform:rotate(-11.94deg);pointer-events:none;filter:drop-shadow(0 8px 12px rgba(9,60,120,.18));animation:psCardIn .72s cubic-bezier(.34,1.56,.64,1) .15s both}",
    "@keyframes psCardIn{0%{opacity:0;transform:translateY(-18px) rotate(10deg) scale(.35)}60%{opacity:1;transform:translateY(0) rotate(-17deg) scale(1.07)}100%{opacity:1;transform:rotate(-11.94deg) scale(1)}}",
    "@media (prefers-reduced-motion:reduce){.ps-toast,.ps-toast *{animation:none}.ps-hint{display:none}}",
    /* carousel */
    ".ps-view{position:relative;width:100%;flex:1 1 auto;overflow:hidden;display:flex;align-items:stretch}",
    /* swipe hint */
    ".ps-hint{position:absolute;left:50%;bottom:calc(20px + env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;align-items:center;justify-content:center;gap:12px;z-index:5;pointer-events:none;animation:psHintShow 3.6s ease 1s both}",
    ".ps-hint.lottie{animation:psHintFadeIn .4s ease .6s both}",
    ".ps-hint .lt{width:120px;height:120px}",
    ".ps-hint .hd{width:40px;height:40px;animation:psSwipe 1.5s ease-in-out 1s infinite;filter:drop-shadow(0 4px 8px rgba(0,0,0,.28))}",
    ".ps-hint .cv{width:9px;height:9px;border-top:3px solid #2f3e54;border-right:3px solid #2f3e54;opacity:.5;filter:drop-shadow(0 1px 1px rgba(255,255,255,.6))}",
    ".ps-hint .cv.l{transform:rotate(-135deg)}",
    ".ps-hint .cv.r{transform:rotate(45deg)}",
    "@keyframes psSwipe{0%{transform:translateX(16px) rotate(8deg);opacity:.35}18%{opacity:1}68%{transform:translateX(-16px) rotate(-8deg);opacity:1}88%{transform:translateX(-16px) rotate(-8deg);opacity:0}100%{transform:translateX(16px) rotate(8deg);opacity:0}}",
    "@keyframes psHintShow{0%{opacity:0}10%{opacity:1}85%{opacity:1}100%{opacity:0}}",
    "@keyframes psHintFadeIn{0%{opacity:0}100%{opacity:1}}",
    ".ps-track{display:flex;width:100%;transition:transform .35s cubic-bezier(.22,.61,.36,1);will-change:transform}",
    ".ps-track.drag{transition:none}",
    ".ps-slide{flex:0 0 100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:14px 24px 0;gap:24px}",
    ".ps-phone{width:88%;max-width:340px;height:auto;display:block;-webkit-user-drag:none;user-select:none;pointer-events:none;-webkit-mask-image:linear-gradient(180deg,#000 78%,rgba(0,0,0,0) 99%);mask-image:linear-gradient(180deg,#000 78%,rgba(0,0,0,0) 99%)}",
    ".ps-phone.both{-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0) 1%,#000 14%,#000 80%,rgba(0,0,0,0) 99%);mask-image:linear-gradient(180deg,rgba(0,0,0,0) 1%,#000 14%,#000 80%,rgba(0,0,0,0) 99%)}",
    ".ps-txt{display:flex;flex-direction:column;align-items:center;gap:16px;width:100%}",
    ".ps-tophalf{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%}",
    ".ps-pill{background:#c5e1f7;border:1px solid var(--blue);border-radius:24px;padding:6px 16px;font-weight:600;font-size:14px;letter-spacing:-.4px;color:#0080dd;filter:drop-shadow(0 4px 8px rgba(9,114,190,.2))}",
    ".ps-title{font-weight:700;font-size:20px;line-height:26px;letter-spacing:-.4px;color:var(--ink);text-align:center;margin:0;max-width:320px}",
    ".ps-desc{font-weight:500;font-size:15px;line-height:21px;letter-spacing:-.4px;color:var(--sub);text-align:center;margin:0;max-width:300px}",
    ".ps-desc b{font-weight:700;color:var(--ink)}",
    ".ps-mail{font-weight:700;color:#0080dd;word-break:break-all}",
    /* footer */
    ".ps-footer{position:relative;width:100%;display:flex;flex-direction:column;align-items:center;gap:16px;padding:16px 24px calc(44px + env(safe-area-inset-bottom));z-index:3}",
    ".ps-dots{display:flex;align-items:center;gap:8px}",
    ".ps-dot{width:8px;height:8px;border-radius:50%;background:#c3d3e8;border:0;padding:0;cursor:pointer;transition:all .25s ease}",
    ".ps-dot.on{width:10px;height:10px;background:var(--blue)}",
    ".ps-cta{width:100%;max-width:346px;height:56px;border:0;border-radius:24px;background:var(--blue);color:#fff;font-family:inherit;font-weight:600;font-size:16px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;filter:drop-shadow(0 8px 6px rgba(51,170,255,.3));box-shadow:inset -3px -3px 1px 0 rgba(244,254,255,.5),inset 3px 6px 10px 0 rgba(26,144,229,.6),inset -12px -8px 24px 0 rgba(255,255,255,.5);opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .3s ease,transform .3s ease}",
    ".ps-cta.show{opacity:1;transform:none;pointer-events:auto}",
    ".ps-cta:active{transform:scale(.985)}",
    ".ps-cta .al{width:22px;height:22px;margin-top:-2px}",
    ".ps-support{width:100%;max-width:346px;margin:2px 0 0;font-size:13px;line-height:1.45;color:var(--sub);text-align:center;letter-spacing:-.2px;opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .3s ease,transform .3s ease}",
    ".ps-support.show{opacity:1;transform:none;pointer-events:auto}",
    ".ps-support-link{background:none;border:0;padding:0;font-family:inherit;font-size:13px;font-weight:600;color:var(--blue);text-decoration:underline;cursor:pointer}",
    ".ps-support-link:active{opacity:.7}",
    /* RTL (Arabic): chữ căn phải + đẩy thẻ ảnh sang góc TRÁI (đảo nghiêng) để không che chữ */
    "[dir=\\"rtl\\"] .ps-gate{direction:rtl}",
    "[dir=\\"rtl\\"] .ps-toast{text-align:right}",
    "[dir=\\"rtl\\"] .ps-toast .card{right:auto;left:-8px;transform-origin:30% 40%;transform:rotate(11.94deg)}",
    "@media (max-height:720px){.ps-slide{gap:16px}.ps-phone{max-width:300px}.ps-title{font-size:18px;line-height:24px}.ps-desc{font-size:14px;line-height:20px}}",
    /* email-confirm + change-email screens */
    ".ps-gate{position:relative;width:100%;flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:20px;padding:44px 16px 28px;text-align:center;z-index:2}",
    ".ps-gate-body{width:100%;max-width:346px;display:flex;flex-direction:column;gap:14px}",
    ".ps-gate-lead{font-weight:500;font-size:16px;line-height:1.45;color:var(--ink);letter-spacing:-.3px}",
    ".ps-gate-sub{font-weight:400;font-size:14px;line-height:1.5;color:var(--sub);letter-spacing:-.3px}",
    ".ps-gate-q{font-weight:700;font-size:16px;color:var(--ink);margin-top:4px;letter-spacing:-.3px}",
    ".ps-gate .ps-title{font-size:22px;line-height:28px;font-weight:700;color:var(--ink);letter-spacing:-.5px;margin:0}",
    ".ps-mail{font-weight:700;color:var(--blue);word-break:break-all}",
    ".ps-gate-lead .ps-mail{display:block;margin-top:6px}",
    ".ps-gate-actions{width:100%;max-width:346px;display:flex;flex-direction:column;gap:12px;align-items:center}",
    ".ps-btn{width:100%;height:56px;border:0;border-radius:24px;background:var(--blue);color:#fff;font-family:inherit;font-weight:600;font-size:16px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;filter:drop-shadow(0 8px 6px rgba(51,170,255,.3));box-shadow:inset -3px -3px 1px 0 rgba(244,254,255,.5),inset 3px 6px 10px 0 rgba(26,144,229,.6),inset -12px -8px 24px 0 rgba(255,255,255,.5);transition:transform .12s ease,opacity .2s ease}",
    ".ps-btn:active{transform:scale(.985)}",
    ".ps-btn.ghost{background:transparent;color:var(--blue);box-shadow:none;filter:none;border:1.5px solid rgba(62,165,239,.55)}",
    ".ps-btn[disabled]{opacity:.55;pointer-events:none}",
    ".ps-input{width:100%;height:54px;border:1.5px solid #cddcee;border-radius:14px;background:#fff;padding:0 16px;font-family:inherit;font-size:16px;color:var(--ink);outline:none;transition:border-color .2s ease;text-align:center}",
    ".ps-input:focus{border-color:var(--blue)}",
    ".ps-input.err{border-color:#e5484d}",
    ".ps-disclaimer{font-weight:400;font-size:13px;line-height:1.45;color:var(--sub);letter-spacing:-.2px}",
    ".ps-error{font-weight:500;font-size:13px;line-height:1.35;color:#e5484d;margin:0}",
    ".ps-back{background:none;border:0;color:var(--sub);font-family:inherit;font-size:14px;cursor:pointer;padding:6px;text-decoration:underline}"
  ].join('');

  // ---- screen router -----------------------------------------------------
  function ensureStyle(root) {
    if (root.querySelector('style[data-ps]')) return;
    var style = el('style'); style.setAttribute('data-ps', '1'); style.textContent = CSS; root.appendChild(style);
  }
  // Xóa mọi màn hiện tại nhưng GIỮ <style> (tránh phải re-inject CSS mỗi lần chuyển màn).
  function clearScreens(root) {
    [].slice.call(root.childNodes).forEach(function (k) {
      if (k.tagName !== 'STYLE') root.removeChild(k);
    });
  }

  // Slide 0 — xác nhận email checkout trước khi vào hướng dẫn kích hoạt.
  function buildConfirm(root) {
    clearScreens(root);
    var wrap = el('div', 'ps-gate');

    var toast = el('div', 'ps-toast');
    var row = el('div', 'row');
    var ic = el('img', 'ic'); ic.src = CHECK_ICON; ic.alt = '';
    row.appendChild(ic); row.appendChild(txt('div', 'tt', T.payTitle));
    toast.appendChild(row);
    toast.appendChild(txt('div', 'ds', T.payDesc));
    if (IMAGES.card) { var card = el('img', 'card'); card.src = IMAGES.card; card.alt = ''; toast.appendChild(card); }
    wrap.appendChild(toast);

    var body = el('div', 'ps-gate-body');
    var lead = el('p', 'ps-gate-lead');
    lead.appendChild(document.createTextNode(T.ecLead));
    lead.appendChild(txt('span', 'ps-mail', getEmail() || '—'));
    body.appendChild(lead);
    body.appendChild(txt('p', 'ps-gate-sub', T.ecSub));
    body.appendChild(txt('p', 'ps-gate-q', T.ecConfirmQ));
    wrap.appendChild(body);

    var actions = el('div', 'ps-gate-actions');
    var ok = el('button', 'ps-btn'); ok.type = 'button'; ok.appendChild(txt('span', '', T.ecBtnOk));
    ok.addEventListener('click', function () { track('success_email_confirmed', {}); showCarousel(root); });
    var chg = el('button', 'ps-btn ghost'); chg.type = 'button'; chg.appendChild(txt('span', '', T.ecBtnChange));
    chg.addEventListener('click', function () { track('success_email_change_open', {}); buildChangeEmail(root); });
    actions.appendChild(ok); actions.appendChild(chg);
    wrap.appendChild(actions);

    root.appendChild(wrap);
    track('success_email_confirm_view', {});
  }

  // Màn đổi email — gọi backend để re-bind entitlement + gửi lại hướng dẫn (backend enforce "1 lần").
  function buildChangeEmail(root) {
    clearScreens(root);
    var wrap = el('div', 'ps-gate');

    var body = el('div', 'ps-gate-body');
    body.appendChild(txt('h2', 'ps-title', T.ceTitle));
    var input = el('input', 'ps-input'); input.type = 'email'; input.placeholder = T.cePlaceholder;
    input.setAttribute('autocomplete', 'email'); input.setAttribute('inputmode', 'email');
    body.appendChild(input);
    var err = el('p', 'ps-error'); err.style.display = 'none'; body.appendChild(err);
    body.appendChild(txt('p', 'ps-disclaimer', T.ceDisclaimer));
    wrap.appendChild(body);

    var actions = el('div', 'ps-gate-actions');
    var save = el('button', 'ps-btn'); save.type = 'button'; save.appendChild(txt('span', '', T.ceBtnSave));
    var back = el('button', 'ps-back'); back.type = 'button'; back.textContent = T.ceBack;
    back.addEventListener('click', function () { buildConfirm(root); });
    actions.appendChild(save); actions.appendChild(back);
    wrap.appendChild(actions);

    function showErr(msg) { err.textContent = msg; err.style.display = 'block'; input.classList.add('err'); }
    function clearErr() { err.style.display = 'none'; input.classList.remove('err'); }
    input.addEventListener('input', clearErr);

    save.addEventListener('click', function () {
      var val = (input.value || '').trim();
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(val)) { showErr(T.ceErrInvalid); return; }
      save.setAttribute('disabled', '1');
      track('success_email_change_submit', {});
      submitNewEmail(val).then(function () {
        // Recording only — do NOT re-point the activation email locally (server hasn't re-bound
        // the entitlement yet; the team processes the request). Show an honest "received" screen.
        track('success_email_change_ok', {});
        buildRequestReceived(root, val);
      }).catch(function (e) {
        save.removeAttribute('disabled');
        var code = e && e.code;
        showErr(code === 'ALREADY_CHANGED' ? T.ceErrOnce : (code === 'INVALID' ? T.ceErrInvalid : T.ceErrGeneric));
        track('success_email_change_fail', { code: code || 'generic' });
      });
    });

    root.appendChild(wrap);
    try { input.focus(); } catch (e) {}
  }

  // === RECORD email-change request → Cloudflare Worker (append Google Sheet + Discord ping) =====
  // KHÔNG re-bind entitlement (chưa có endpoint đó). Chỉ GHI NHẬN: {email đã thanh toán Stripe,
  // email muốn đổi, lang, funnel, ...}. Worker (languoso-email-change) là CORS front door → Apps
  // Script append row + bắn Discord. Override URL qua window.PS_EMAIL_CHANGE_URL nếu cần.
  // Test nhánh lỗi trên preview: window.PS_EMAIL_CHANGE_STUB='fail'.
  var EMAIL_CHANGE_URL = (typeof window !== 'undefined' && window.PS_EMAIL_CHANGE_URL) ||
    'https://languoso-email-change.trungpt.workers.dev/';
  function pick() { for (var i = 0; i < arguments.length; i++) { if (arguments[i]) return arguments[i]; } return ''; }
  function submitNewEmail(newEmail) {
    if (window.PS_EMAIL_CHANGE_STUB === 'fail') {
      return new Promise(function (_, reject) { setTimeout(function () { reject({ code: 'GENERIC' }); }, 500); });
    }
    var payload = {
      oldEmail: getEmail() || '',
      newEmail: newEmail,
      lang: pick(window.PS_LANG, window.LP_LANG, window.MW_LANG, (document.documentElement && document.documentElement.lang), 'en'),
      funnel: pick(window.PS_FUNNEL),
      page: pick(location && location.href),
      ref: pick(document && document.referrer),
      ua: pick(navigator && navigator.userAgent)
    };
    return fetch(EMAIL_CHANGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw { code: 'GENERIC' };
      return r.json().catch(function () { return { ok: true }; });
    });
  }

  // Màn "đã nhận yêu cầu" — hiển thị trung thực, KHÔNG bảo khách activate ngay bằng email mới.
  function buildRequestReceived(root, newEmail) {
    clearScreens(root);
    var wrap = el('div', 'ps-gate');

    var toast = el('div', 'ps-toast');
    var row = el('div', 'row');
    var ic = el('img', 'ic'); ic.src = CHECK_ICON; ic.alt = '';
    row.appendChild(ic); row.appendChild(txt('div', 'tt', T.ceOkTitle));
    toast.appendChild(row);
    wrap.appendChild(toast);

    var body = el('div', 'ps-gate-body');
    var lead = el('p', 'ps-gate-lead');
    lead.appendChild(document.createTextNode(T.ceOkBody + ' '));
    lead.appendChild(txt('span', 'ps-mail', newEmail || ''));
    body.appendChild(lead);
    wrap.appendChild(body);

    // Continue → sang carousel hướng dẫn kích hoạt. KHÔNG được block luồng funnel.
    var actions = el('div', 'ps-gate-actions');
    var cont = el('button', 'ps-btn'); cont.type = 'button'; cont.appendChild(txt('span', '', T.ceOkBtn));
    cont.addEventListener('click', function () { track('success_email_change_continue', {}); showCarousel(root); });
    actions.appendChild(cont);
    wrap.appendChild(actions);

    // dòng hỗ trợ dưới nút
    var help = el('p', 'ps-gate-sub');
    help.appendChild(document.createTextNode(T.csHelp));
    var slink = el('button', 'ps-support-link'); slink.type = 'button'; slink.textContent = T.csLink;
    slink.addEventListener('click', function () { track('success_support_click', {}); openTab(SUPPORT_URL); });
    help.appendChild(slink);
    wrap.appendChild(help);

    root.appendChild(wrap);
    track('success_email_change_received', {});
  }

  function showCarousel(root) { clearScreens(root); buildCarousel(root); }

  // ---- build (carousel) --------------------------------------------------
  function buildCarousel(root) {
    // Thẻ "Thanh toán thành công" đã hiện ở slide xác nhận (slide 0) → KHÔNG lặp lại ở carousel.
    // carousel
    var view = el('div', 'ps-view');
    var slideTrack = el('div', 'ps-track');   // renamed from \`track\` — collided with the track() analytics fn
    var email = getEmail();
    SLIDES.forEach(function (s, i) {
      var slide = el('div', 'ps-slide');
      var img = el('img', s.fadeBoth ? 'ps-phone both' : 'ps-phone'); img.src = IMAGES.phones[s.img] || ''; img.alt = ''; img.draggable = false;
      slide.appendChild(img);

      var tx = el('div', 'ps-txt');
      var top = el('div', 'ps-tophalf');
      top.appendChild(txt('div', 'ps-pill', s.pill));
      top.appendChild(txt('h2', 'ps-title', s.title));
      tx.appendChild(top);

      var desc = el('p', 'ps-desc');
      s.descParts.forEach(function (p) {
        // On the final step, show the user's real email if we have it.
        if (i === SLIDES.length - 1 && email && /the email you used at checkout/.test(p.t)) {
          desc.appendChild(document.createTextNode('Enter '));
          desc.appendChild(txt('span', 'ps-mail', email));
          desc.appendChild(document.createTextNode(' (the email you used at checkout), then tap '));
          return;
        }
        if (p.b) { desc.appendChild(txt('b', '', p.t)); }
        else { desc.appendChild(document.createTextNode(p.t)); }
      });
      tx.appendChild(desc);
      slide.appendChild(tx);
      slideTrack.appendChild(slide);
    });
    view.appendChild(slideTrack);
    root.appendChild(view);

    // footer: dots + CTA
    var footer = el('div', 'ps-footer');
    var dots = el('div', 'ps-dots');
    var dotEls = [];
    SLIDES.forEach(function (s, i) {
      var d = el('button', 'ps-dot' + (i === 0 ? ' on' : '')); d.type = 'button';
      d.setAttribute('aria-label', 'Go to step ' + (i + 1));
      d.addEventListener('click', function () { killHint(); go(i, true); });
      dots.appendChild(d); dotEls.push(d);
    });
    footer.appendChild(dots);

    var cta = el('button', 'ps-cta'); cta.type = 'button';
    var al = el('img', 'al'); al.src = APPLE_ICON; al.alt = '';
    cta.appendChild(al); cta.appendChild(txt('span', '', T.cta));
    cta.addEventListener('click', function () {
      track('success_download_click', { step: idx + 1 });
      openStore();
    });
    footer.appendChild(cta);

    // Dòng hỗ trợ dưới nút Download (chỉ hiện ở slide cuối, cùng nhịp với CTA).
    var support = el('p', 'ps-support');
    support.appendChild(document.createTextNode(T.csHelp));
    var slink = el('button', 'ps-support-link'); slink.type = 'button'; slink.textContent = T.csLink;
    slink.addEventListener('click', function () { track('success_support_click', {}); openTab(SUPPORT_URL); });
    support.appendChild(slink);
    footer.appendChild(support);

    root.appendChild(footer);

    // ---- carousel state + interaction -----------------------------------
    var idx = 0, n = SLIDES.length;

    function render(animate) {
      slideTrack.style.transform = 'translateX(' + (-idx * 100) + '%)';
      for (var i = 0; i < dotEls.length; i++) {
        if (i === idx) dotEls[i].classList.add('on'); else dotEls[i].classList.remove('on');
      }
      if (idx === n - 1) { cta.classList.add('show'); support.classList.add('show'); }
      else { cta.classList.remove('show'); support.classList.remove('show'); }
    }
    function go(to, fromTap) {
      idx = Math.max(0, Math.min(n - 1, to));
      render(true);
      if (fromTap) track('success_step_view', { step: idx + 1 });
    }
    window.__ps_go = go; // expose for the preview's arrow keys

    // ---- swipe hint: a Lottie if provided, else a CSS hand + chevrons,
    //      plus a gentle one-time track "peek". Clears on first interaction. ----
    var hint = null, hintKilled = false, peekTimer = null, hintTimer = null, lottieAnim = null;
    function killHint() {
      hintKilled = true;
      if (peekTimer) { clearTimeout(peekTimer); peekTimer = null; }
      if (hintTimer) { clearTimeout(hintTimer); hintTimer = null; }
      if (lottieAnim) { try { lottieAnim.destroy(); } catch (e) {} lottieAnim = null; }
      if (hint && hint.parentNode) { hint.parentNode.removeChild(hint); hint = null; }
    }
    function loadLottieLib(cb) {
      if (window.lottie) { cb(); return; }
      if (window.__psLottieCbs) { window.__psLottieCbs.push(cb); return; }
      window.__psLottieCbs = [cb];
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie_light.min.js';
      s.onload = function () { var q = window.__psLottieCbs || []; window.__psLottieCbs = null; q.forEach(function (f) { f(); }); };
      s.onerror = function () { window.__psLottieCbs = null; }; // silent fall-through
      document.head.appendChild(s);
    }
    function renderLottie(box) {
      loadLottieLib(function () {
        if (!window.lottie || hintKilled) return;
        var cfg = { container: box, renderer: 'svg', loop: true, autoplay: true };
        if (LOTTIE_DATA) cfg.animationData = LOTTIE_DATA; else cfg.path = LOTTIE_URL;
        try { lottieAnim = window.lottie.loadAnimation(cfg); } catch (e) {}
      });
    }
    function showHint() {
      if (n < 2) return;
      var hasLottie = !!(LOTTIE_DATA || LOTTIE_URL);
      hint = el('div', hasLottie ? 'ps-hint lottie' : 'ps-hint');
      if (hasLottie) {
        var box = el('div', 'lt'); hint.appendChild(box);
        footer.appendChild(hint);
        renderLottie(box); // loops until the user interacts
      } else {
        hint.appendChild(el('span', 'cv l'));
        var hd = el('img', 'hd'); hd.src = HAND_ICON; hd.alt = ''; hint.appendChild(hd);
        hint.appendChild(el('span', 'cv r'));
        footer.appendChild(hint);
        hintTimer = setTimeout(killHint, 4600);
      }
      // peek: nudge the track left a touch then back, revealing the next slide
      peekTimer = setTimeout(function () {
        if (hintKilled || idx !== 0) return;
        slideTrack.style.transform = 'translateX(-6%)';
        setTimeout(function () { if (!hintKilled && idx === 0) slideTrack.style.transform = 'translateX(0%)'; }, 380);
      }, 1300);
    }

    // swipe (pointer events; falls back to touch)
    var startX = 0, startY = 0, dx = 0, dragging = false, locked = false;
    function px(e) { return e.touches ? e.touches[0].clientX : e.clientX; }
    function py(e) { return e.touches ? e.touches[0].clientY : e.clientY; }
    function down(e) {
      killHint();
      dragging = true; locked = false; dx = 0;
      startX = px(e); startY = py(e);
      slideTrack.classList.add('drag');
    }
    function move(e) {
      if (!dragging) return;
      var mx = px(e) - startX, my = py(e) - startY;
      if (!locked) {
        if (Math.abs(mx) < 6 && Math.abs(my) < 6) return;
        locked = true;
        // vertical scroll intent -> abandon the swipe
        if (Math.abs(my) > Math.abs(mx)) { dragging = false; slideTrack.classList.remove('drag'); render(); return; }
      }
      dx = mx;
      if (e.cancelable) e.preventDefault();
      var pct = (dx / view.clientWidth) * 100;
      slideTrack.style.transform = 'translateX(' + (-idx * 100 + pct) + '%)';
    }
    function up() {
      if (!dragging) return;
      dragging = false; slideTrack.classList.remove('drag');
      var threshold = view.clientWidth * 0.18;
      if (dx <= -threshold && idx < n - 1) idx++;
      else if (dx >= threshold && idx > 0) idx--;
      render(true);
    }
    view.addEventListener('touchstart', down, { passive: true });
    view.addEventListener('touchmove', move, { passive: false });
    view.addEventListener('touchend', up);
    view.addEventListener('mousedown', function (e) { e.preventDefault(); down(e); });
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);

    render();
    showHint();
    track('success_screen_view', {});
  }

  function mount() {
    var root = document.getElementById('ff-success');
    if (!root || root.getAttribute('data-built')) return;
    root.setAttribute('data-built', '1');
    ensureStyle(root);
    buildConfirm(root);   // slide 0 xác nhận email → carousel; hoặc đổi email trước
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
<\/script>
</div>`,cta:"Continue",role:"successfull"}],sg={id:cr,concept:pr,product:gr,owner:fr,status:ur,assigned:mr,cross_team:hr,imported_from:br,import_mode:yr,funnel_id:xr,title:Ir,screens:Ar},rg=Object.freeze(Object.defineProperty({__proto__:null,assigned:mr,concept:pr,cross_team:hr,default:sg,funnel_id:xr,id:cr,import_mode:yr,imported_from:br,owner:fr,product:gr,screens:Ar,status:ur,title:Ir},Symbol.toStringTag,{value:"Module"})),Cr="test123",wr="test123",vr="artimind",Br="hiepnv",kr="draft",Gr=[],Zr=!1,Sr="https://app.artimind.net/wc_spain?fbclid=IwdGRjcAS9NSNwZG9mA2ZkaWQWUKR1TdgsGKfd6ntY46JXGJLYecSNnGV4dG4DYWVtATAAYWRpZAGrM7Rv10tEc3J0YwZhcHBfaWQKNjYyODU2ODM3OQABHsPC77ilyvhNB6-_Z_1FnqWb2jSTXNv0C6iu1OSQVm819eFUVylF0f6J69tz_aem_yd6cpFKwpKTk95pvFofMQQ&utm_medium=paid&utm_source=fb&utm_id=120246664965920452&utm_content=120246664965930452&utm_term=120246664965910452&utm_campaign=120246664965920452&fpid=01KX4X64FS46YQXF1NGDFXDDWP&fsid=01KX4X64FSY1YV0TDXZ0PYYTDZ&frm=true",Wr="funnelfox-clone",Rr="01KWVHSW5GFR74SWXA7XXDX6TN",Vr="test",Fr=[{id:"chon-anh",type:"raw",name:"Chọn ảnh",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/Gx-jgZAQ.webp" alt=""><h1>Choose Your <br>Forever Memory Styles</h1><div class="ff-opts" style="grid-template-columns:repeat(2,1fr)"><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWVHSW5GFR74SWXA7XXDX6TN/Ztfb5SXa.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWVHSW5GFR74SWXA7XXDX6TN/UBfKXk7R.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWVHSW5GFR74SWXA7XXDX6TN/g0-LM_Or.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWVHSW5GFR74SWXA7XXDX6TN/mIvz12yd.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWVHSW5GFR74SWXA7XXDX6TN/u1xSOuJD.webp" alt=""></div><div class="ff-opt"><img src="https://assets.fnlfx.com/01KWVHSW5GFR74SWXA7XXDX6TN/_KJL3nk2.webp" alt=""></div></div></div>`,cta:"Continue",role:"engagement-question"},{id:"up-anh",type:"raw",name:"Up ảnh",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/Gx-jgZAQ.webp" alt=""><h1>Create a magic moment from two photos with Artimind ✨</h1><div class="ff-col"><div class="ff-row"><style>
  #photo-container-1 {
    position: relative;
  }

  #navigate-btn-1 {
    display: none;
  }

  #image-upload-box-1 {
    width: 160px;
    height: 300px;
    border: 2px dashed #555;
    border-radius: 15px;
    position: relative;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
  }

  #image-upload-box-1:hover {
    border-color: #888;
  }

  #image-upload-box-1::before {
    content: "+";
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 52px;
    font-weight: 300;
    color: #aaa;
    z-index: 1;
    pointer-events: none;
  }

  #image-upload-box-1.has-photo::before {
    display: none;
  }

  #image-preview-1 {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
  }

  #image-upload-btn-1 {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(60px);
  }

  #image-upload-box-1.has-photo #image-upload-btn-1 {
    background: rgba(0, 0, 0, 0.25);
  }

  #photo-container-1 .spinner {
    width: 32px;
    height: 32px;
    border: 5px solid #eee;
    border-top: 5px solid #aaa;
    border-radius: 50%;
    animation: spin-1 1s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    visibility: hidden;
    z-index: 5;
  }

  #image-upload-box-1.loading .spinner {
    visibility: visible;
  }

  @keyframes spin-1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>

<div id="photo-container-1">
  <input type="file" id="file-1" accept="image/*" style="display: none" />

  <div id="image-upload-box-1">
    <img id="image-preview-1" src="" alt="">

    <button type="button" id="image-upload-btn-1">
      Upload your<br>1st photo
    </button>

    <div class="spinner"></div>
  </div>
</div>

<script>
  const navigateButton1 = document.getElementById('navigate-btn-1');
  const uploadContainer1 = document.getElementById('image-upload-box-1');
  const fileInput1 = document.getElementById('file-1');
  const uploadBtn1 = document.getElementById('image-upload-btn-1');
  const imagePreview1 = document.getElementById('image-preview-1');

  let isFileDialogOpen1 = false;

  init1();

  function init1() {
    uploadBtn1.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      selectFile1();
    };

    uploadContainer1.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      selectFile1();
    };

    fileInput1.onchange = async function (event) {
      const file = event.target.files[0];

      isFileDialogOpen1 = false;

      if (file) {
        await upload1(file);
      }

      fileInput1.value = '';
    };

    window.addEventListener('focus', function () {
      setTimeout(function () {
        isFileDialogOpen1 = false;
      }, 800);
    });
  }

  function selectFile1() {
    if (isFileDialogOpen1) {
      return;
    }

    isFileDialogOpen1 = true;
    fileInput1.click();
  }

  function setPhoto1(file) {
    uploadBtn1.innerHTML = 'Change<br>photo';

    const imageUrl = URL.createObjectURL(file);
    imagePreview1.src = imageUrl;
    imagePreview1.style.display = 'block';

    uploadContainer1.classList.add('has-photo');

    if (navigateButton1) {
      navigateButton1.style.display = 'block';
    }
  }

  function setLoading1(value) {
    uploadContainer1.classList.toggle('loading', value);
  }

  async function upload1(file) {
    try {
      setLoading1(true);
      setPhoto1(file);
      return true;
    } catch (error) {
      showError1('Failed to process photo. Please try again.');
      return false;
    } finally {
      setLoading1(false);
    }
  }

  function showError1(message) {
    alert(message);
  }
<\/script><style>
  #photo-container-2 {
    position: relative;
    width: 100%;
  }

  #navigate-btn-2 {
    display: none;
  }

  #file-2 {
    display: none;
  }

  #image-upload-box-2 {
    width: 160px;
    height: 300px;
    border: 2px dashed #555;
    border-radius: 15px;
    position: relative;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
    z-index: 10;
  }

  #image-upload-box-2:hover {
    border-color: #888;
  }

  #image-upload-box-2::before {
    content: "+";
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 52px;
    font-weight: 300;
    color: #aaa;
    z-index: 1;
    pointer-events: none;
  }

  #image-upload-box-2.has-photo::before {
    display: none;
  }

  #image-preview-2 {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  #image-upload-text-2 {
    position: absolute;
    inset: 0;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    z-index: 2;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(60px);
  }

  #image-upload-box-2.has-photo #image-upload-text-2 {
    background: rgba(0, 0, 0, 0.25);
  }

  #photo-container-2 .spinner {
    width: 32px;
    height: 32px;
    border: 5px solid #eee;
    border-top: 5px solid #aaa;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    left: 50%;
    top: 50%;
    visibility: hidden;
    z-index: 5;
  }

  #image-upload-box-2.loading .spinner {
    visibility: visible;
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>

<div id="photo-container-2">
  <input type="file" id="file-2" accept="image/*" />

  <label id="image-upload-box-2" for="file-2">
    <img id="image-preview-2" src="" alt="">

    <span id="image-upload-text-2">
      Upload your<br>2nd photo
    </span>

    <div class="spinner"></div>
  </label>
</div>

<script>
  const navigateButton2 = document.getElementById('navigate-btn-2');
  const uploadContainer2 = document.getElementById('image-upload-box-2');
  const fileInput2 = document.getElementById('file-2');
  const uploadText2 = document.getElementById('image-upload-text-2');
  const imagePreview2 = document.getElementById('image-preview-2');

  fileInput2.onchange = async function (event) {
    const file = event.target.files[0];

    if (file) {
      await upload2(file);
    }

    fileInput2.value = '';
  };

  function setPhoto2(file) {
    uploadText2.innerHTML = 'Change<br>photo';

    const imageUrl = URL.createObjectURL(file);
    imagePreview2.src = imageUrl;
    imagePreview2.style.display = 'block';

    uploadContainer2.classList.add('has-photo');

    if (navigateButton2) {
      navigateButton2.style.display = 'block';
    }
  }

  function setLoading2(value) {
    uploadContainer2.classList.toggle('loading', value);
  }

  async function upload2(file) {
    try {
      setLoading2(true);
      setPhoto2(file);
      return true;
    } catch (error) {
      showError2('Failed to process photo. Please try again.');
      return false;
    } finally {
      setLoading2(false);
    }
  }

  function showError2(message) {
    alert(message);
  }
<\/script></div></div><style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

  #custom-create-now-wrapper {
    width: 100%;
    text-align: center;
    margin-top: 16px;
    position: relative;
    z-index: 1;
    pointer-events: none;
  }

  #custom-create-now {
    display: inline-block;
    width: 320px;
    max-width: 88%;
    height: 62px;
    border: none;
    border-radius: 999px;
    background: #ffffff;
    color: #000000;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 62px;
    cursor: pointer;
    text-align: center;
    pointer-events: auto;
    transition: all 0.2s ease;
  }

  #custom-create-now:hover {
    background: #f2f2f2;
    color: #000000;
  }

  #upload-warning-message {
    display: none;
    width: 100%;
    text-align: center;
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #820C16;
    pointer-events: none;
  }

  #upload-warning-message.show {
    display: block;
  }
</style>

<div id="custom-create-now-wrapper">
  <button id="custom-create-now" type="button">
    CREATE NOW
  </button>

  <div id="upload-warning-message">
    Please upload 2 photos to continue.
  </div>
</div>

<script>
  function setupPhotoGate() {
    const customWrapper = document.getElementById("custom-create-now-wrapper");
    const customBtn = document.getElementById("custom-create-now");

    // Nút thật của FunnelFox
    const triggerBtn = document.getElementById("el_8GqhZ");

    const box1 = document.getElementById("image-upload-box-1");
    const box2 = document.getElementById("image-upload-box-2");
    const warning = document.getElementById("upload-warning-message");

    if (!customWrapper || !customBtn || !triggerBtn || !box1 || !box2 || !warning) {
      setTimeout(setupPhotoGate, 300);
      return;
    }

    if (customBtn.dataset.gateReady === "true") {
      return;
    }

    customBtn.dataset.gateReady = "true";

    function hideRealButton() {
      triggerBtn.style.opacity = "0";
      triggerBtn.style.pointerEvents = "none";
      triggerBtn.style.visibility = "hidden";
    }

    function showRealButton() {
      triggerBtn.style.opacity = "1";
      triggerBtn.style.pointerEvents = "auto";
      triggerBtn.style.visibility = "visible";
    }

    function showCustomButton() {
      customWrapper.style.opacity = "1";
      customWrapper.style.pointerEvents = "none";
      customBtn.style.pointerEvents = "auto";
    }

    function hideCustomButton() {
      customWrapper.style.opacity = "0";
      customWrapper.style.pointerEvents = "none";
      customBtn.style.pointerEvents = "none";
    }

    function checkPhotosReady() {
      const hasPhoto1 = box1.classList.contains("has-photo");
      const hasPhoto2 = box2.classList.contains("has-photo");

      if (hasPhoto1 && hasPhoto2) {
        warning.classList.remove("show");
        hideCustomButton();
        showRealButton();
      } else {
        showCustomButton();
        hideRealButton();
      }
    }

    hideRealButton();
    showCustomButton();

    customBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      checkPhotosReady();

      const hasPhoto1 = box1.classList.contains("has-photo");
      const hasPhoto2 = box2.classList.contains("has-photo");

      if (!hasPhoto1 || !hasPhoto2) {
        warning.classList.add("show");
      }
    });

    const observer1 = new MutationObserver(checkPhotosReady);
    const observer2 = new MutationObserver(checkPhotosReady);

    observer1.observe(box1, { attributes: true, attributeFilter: ["class"] });
    observer2.observe(box2, { attributes: true, attributeFilter: ["class"] });

    setInterval(checkPhotosReady, 500);

    checkPhotosReady();
  }

  setupPhotoGate();
<\/script><button class="ff-btn" type="button" data-cta>CREATE NOW</button><h1>Not just a single photo - &lt;br&gt;get 50 templates included 📸</h1><img src="https://assets.fnlfx.com/01KQXS5TSGG3NBR9GX7GJJD2MH/jl6Zal9M.webp" alt=""></div>`,cta:"CREATE NOW"},{id:"copy-of-registration",type:"raw",name:"Copy of registration",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/PIgFOrQi.webp" alt=""><h1>&lt;strong&gt;Which team are you supporting on their World Cup journey?&lt;/strong&gt;</h1><button class="ff-btn" type="button" data-cta>Continue</button><input class="ff-input" type="text" placeholder="Your team"></div>`,cta:"Continue",role:"engagement-insert"},{id:"loading-knitworld",type:"raw",name:"loading hug",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><h1>Adding the final sparkle<br>to your AI video…</h1><div class="ff-note">[Processing]</div><div class="ff-col"><div class="ff-col"><h1>Trusted by 1+ million to turn &lt;br&gt;their photos into memories</h1><div class="ff-note">[Carousel]</div><div class="ff-col"><img src="https://assets.fnlfx.com/01KQXS5TSGG3NBR9GX7GJJD2MH/lzSGw643.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KQXS5TSGG3NBR9GX7GJJD2MH/f53l_6B9.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRDFRH91BHBXJRAKWGBKFN4E/MVTbU8LR.webp" alt=""></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KRDFRH91BHBXJRAKWGBKFN4E/gAdzcO8F.webp" alt=""></div></div></div></div>`,cta:"Continue",role:"loading"},{id:"gift",type:"raw",name:"Gift",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/WE8wUzd5.webp" alt=""><button class="ff-btn" type="button" data-cta>Continue</button><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>Lucky Wheel</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background:
      radial-gradient(120% 60% at 50% 10%, rgba(200, 30, 50, 0.4) 0%, transparent 60%),
      linear-gradient(180deg, #170509 0%, #0a0203 100%);
    color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
  }

  h1 {
    font-size: clamp(20px, 5.4vw, 26px);
    font-weight: 800;
    text-align: center;
    line-height: 1.3;
  }

  p.subtitle {
    color: rgba(255, 255, 255, 0.78);
    text-align: center;
    font-size: 14px;
    line-height: 1.45;
    max-width: 320px;
    margin-top: -4px;
  }

  .wheel-box {
    position: relative;
    width: min(86vw, 320px);
    aspect-ratio: 1 / 1;
    margin: 8px auto;
    transform: translateZ(0);
  }

  .wheel-box::before,
  .wheel-box::after {
    content: "";
    position: absolute;
    inset: -18px;
    border: 1px solid rgba(255, 199, 59, 0.38);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
  }
  .wheel-box.ready::before {
    animation: invite-ring 1800ms ease-out infinite;
  }
  .wheel-box.ready::after {
    animation: invite-ring 1800ms ease-out 520ms infinite;
  }
  .wheel-box.spinning::before {
    inset: -10px;
    border: 3px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.95);
    border-right-color: rgba(255, 199, 59, 0.65);
    opacity: 1;
    animation: speed-ring 520ms linear infinite;
  }
  .wheel-box.spinning::after {
    inset: -22px;
    border: 1px solid rgba(248, 84, 93, 0.58);
    opacity: 0.75;
    animation: speed-ring 900ms linear infinite reverse;
  }
  @keyframes invite-ring {
    0%   { transform: scale(0.9); opacity: 0; }
    20%  { opacity: 0.72; }
    100% { transform: scale(1.18); opacity: 0; }
  }
  @keyframes speed-ring {
    to { transform: rotate(360deg); }
  }

  .pointer {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 22px solid #FFFFFF;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
    z-index: 4;
    animation: pointer-bob 900ms ease-in-out infinite alternate;
  }
  .wheel-box.spinning .pointer,
  .wheel-box.done .pointer {
    animation: none;
  }
  .wheel-box.spinning .pointer {
    animation: pointer-tick 120ms linear infinite;
  }
  @keyframes pointer-bob {
    from { transform: translateX(-50%) translateY(-2px); }
    to   { transform: translateX(-50%) translateY(4px); }
  }
  @keyframes pointer-tick {
    0%, 100% { transform: translateX(-50%) rotate(-3deg); }
    50%      { transform: translateX(-50%) rotate(3deg); }
  }

  .glow-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #F8545D, #FFC73B, #F8545D);
    filter: blur(8px);
    opacity: 0.55;
    transition: opacity 0.4s ease;
  }
  .wheel-box.spinning .glow-ring { opacity: 1; }
  .wheel-box.ready .glow-ring {
    animation: glow-breathe 1500ms ease-in-out infinite alternate;
  }
  @keyframes glow-breathe {
    from { opacity: 0.42; transform: scale(0.98); }
    to   { opacity: 0.76; transform: scale(1.03); }
  }

  svg.wheel {
    position: relative;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.5));
    transform: rotate(0deg);
    transition: none;
  }
  .wheel-box.ready {
    animation: wheel-idle 1800ms ease-in-out infinite alternate;
  }
  .wheel-box.spinning,
  .wheel-box.done {
    animation: none;
  }
  @keyframes wheel-idle {
    from { transform: translateZ(0) rotate(-1deg) scale(0.995); }
    to   { transform: translateZ(0) rotate(1deg) scale(1.01); }
  }

  svg.wheel.phase-fast {
    transition: transform 5500ms cubic-bezier(0.18, 0.62, 0.32, 0.99);
  }
  svg.wheel.phase-crawl {
    transition: transform 4200ms cubic-bezier(0.02, 0.78, 0.18, 1);
  }

  .sparkle {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 18px 4px rgba(255, 199, 59, 0.55);
    opacity: 0;
    pointer-events: none;
    z-index: 3;
    animation: sparkle 1600ms ease-in-out infinite;
  }
  .sparkle:nth-child(4) { top: 12%; left: 18%; animation-delay: 0ms; }
  .sparkle:nth-child(5) { top: 26%; right: 6%; animation-delay: 460ms; }
  .sparkle:nth-child(6) { right: 18%; bottom: 10%; animation-delay: 920ms; }
  .sparkle:nth-child(7) { left: 7%; bottom: 28%; animation-delay: 1240ms; }
  .wheel-box.spinning .sparkle,
  .wheel-box.done .sparkle {
    display: none;
  }
  @keyframes sparkle {
    0%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0; }
    35%      { transform: scale(1) rotate(90deg); opacity: 1; }
    70%      { transform: scale(0.45) rotate(180deg); opacity: 0; }
  }

  .tap-hint {
    color: rgba(255, 255, 255, 0.84);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 18px rgba(255, 199, 59, 0.4);
    animation: hint-pulse 900ms ease-in-out infinite alternate;
  }
  .tap-hint.hide {
    display: none;
  }
  @keyframes hint-pulse {
    from { opacity: 0.62; transform: translateY(0); }
    to   { opacity: 1; transform: translateY(-2px); }
  }

  .click-ripple {
    position: fixed;
    left: var(--x);
    top: var(--y);
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 199, 59, 0.72);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.2);
    pointer-events: none;
    z-index: 90;
    animation: click-ripple 520ms ease-out forwards;
  }
  @keyframes click-ripple {
    to {
      transform: translate(-50%, -50%) scale(8);
      opacity: 0;
    }
  }

  .tease {
    color: #FFC73B;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    text-shadow: 0 0 16px rgba(255, 199, 59, 0.55);
    margin-top: 4px;
    animation: pulse 0.9s ease-in-out infinite alternate;
    display: none;
  }
  .tease.show { display: block; }
  @keyframes pulse {
    from { opacity: 0.7; transform: scale(1); }
    to   { opacity: 1;   transform: scale(1.04); }
  }

  .reveal {
    text-align: center;
    padding: 18px 22px;
    border-radius: 18px;
    border: 1px solid rgba(255, 199, 59, 0.35);
    background: linear-gradient(180deg, rgba(255, 199, 59, 0.12), rgba(248, 84, 93, 0.1));
    width: 100%;
    max-width: 320px;
    display: none;
    animation: pop 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.show { display: block; }
  .reveal.show .amount {
    animation: amount-glow 900ms ease-out 2;
  }
  @keyframes pop {
    from { transform: scale(0.85); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
  }
  @keyframes amount-glow {
    0%   { transform: scale(0.94); text-shadow: 0 0 0 rgba(255, 199, 59, 0); }
    55%  { transform: scale(1.08); text-shadow: 0 0 34px rgba(255, 199, 59, 0.75); }
    100% { transform: scale(1); text-shadow: 0 0 24px rgba(255, 199, 59, 0.45); }
  }
  .reveal .eyebrow {
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  .reveal .amount {
    color: #FFC73B;
    font-size: 36px;
    font-weight: 800;
    margin: 4px 0;
    text-shadow: 0 0 24px rgba(255, 199, 59, 0.45);
  }
  .reveal .note {
    color: rgba(255, 255, 255, 0.65);
    font-size: 12px;
  }

  .confetti {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 100;
    display: none;
  }
  .confetti.show { display: block; }
  .confetti .piece {
    position: absolute;
    top: -20px;
    width: 8px;
    height: 14px;
    border-radius: 1px;
    animation: fall var(--dur, 2200ms) cubic-bezier(0.4, 0, 0.6, 1) var(--delay, 0ms) forwards;
    opacity: 0;
  }
  @keyframes fall {
    0%   { transform: translateY(0)     rotate(var(--rot, 0deg)); opacity: 0; }
    10%  { opacity: 1; }
    100% { transform: translateY(120vh) rotate(var(--rot, 0deg)); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
  .tease,
    .tap-hint,
    .confetti,
    .glow-ring,
    .wheel-box::before,
    .wheel-box::after,
    .pointer,
    .sparkle,
    svg.wheel,
    .reveal.show .amount {
      animation: none !important;
    }
  }
</style>
</head>
<body>

<div class="container">
  <p class="subtitle">
    You've been chosen to spin our lucky wheel.
    Try your luck and claim your exclusive discount - only one spin per user.
  </p>

  <div class="wheel-box ready" id="wheelBox" role="button" aria-label="Spin the lucky wheel" tabindex="0">
    <div class="pointer"></div>
    <div class="glow-ring"></div>
    <svg class="wheel" id="wheel" viewBox="0 0 300 300"></svg>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
    <span class="sparkle"></span>
  </div>

  <p class="tease" id="tease">Almost there...</p>
  <p class="tap-hint" id="tapHint">Tap anywhere to spin</p>

  <div class="reveal" id="reveal">
    <p class="eyebrow">Success</p>
    <p class="amount" id="revealAmount">50% OFF</p>
    <p class="note">Applied at checkout - limited to this session only.</p>
  </div>
</div>

<div class="confetti" id="confetti"></div>

<script>
  const PRIZES = [
    { label: '10%', color: '#F8545D', winner: false },
    { label: '50%', color: '#FFC73B', winner: true  },
    { label: 'x',   color: '#7E0612', winner: false },
    { label: '20%', color: '#F8545D', winner: false },
    { label: '5%',  color: '#7E0612', winner: false },
    { label: 'TRY', color: '#FFC73B', winner: false },
  ];
  const SLICE = 360 / PRIZES.length;
  const SPIN_MS = 6800;
  const TEASE_AT_MS = 4600;

  const wheel = document.getElementById('wheel');
  const wheelBox = document.getElementById('wheelBox');
  const tapHint = document.getElementById('tapHint');
  const tease = document.getElementById('tease');
  const reveal = document.getElementById('reveal');
  const revealAmount = document.getElementById('revealAmount');
  const confetti = document.getElementById('confetti');

  const cx = 150, cy = 150, r = 140;
  let svgInner = '';
  PRIZES.forEach((p, i) => {
    const start = i * SLICE;
    const end = start + SLICE;
    const a1 = (start - 90) * Math.PI / 180;
    const a2 = (end - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
    const mid = ((start + end) / 2 - 90) * Math.PI / 180;
    const tx = cx + r * 0.6 * Math.cos(mid);
    const ty = cy + r * 0.6 * Math.sin(mid);

    svgInner += \`
      <path
        d="M \${cx} \${cy} L \${x1} \${y1} A \${r} \${r} 0 0 1 \${x2} \${y2} Z"
        fill="\${p.color}" stroke="rgba(0,0,0,0.25)" stroke-width="1"
      />
      <text
        x="\${tx}" y="\${ty}"
        fill="#fff"
        font-size="\${p.winner ? 22 : 16}"
        font-weight="\${p.winner ? 800 : 700}"
        text-anchor="middle"
        dominant-baseline="middle"
        transform="rotate(\${start + SLICE / 2} \${tx} \${ty})"
        style="text-shadow: 0 1px 2px rgba(0,0,0,0.6)"
      >\${p.label}</text>
    \`;
  });
  svgInner += \`
    <circle cx="\${cx}" cy="\${cy}" r="28" fill="#fff" />
    <circle cx="\${cx}" cy="\${cy}" r="10" fill="#42050A" />
  \`;
  wheel.innerHTML = svgInner;

  let spun = false;
  let spinning = false;

  function createClickRipple(x, y) {
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    ripple.style.setProperty('--x', \`\${x}px\`);
    ripple.style.setProperty('--y', \`\${y}px\`);
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  function spinWheel(event) {
    if (spun || spinning) return;
    spun = true;
    spinning = true;
    document.body.style.cursor = 'default';
    wheelBox.classList.remove('ready');
    tapHint.classList.add('hide');
    if (typeof event?.clientX === 'number' && typeof event?.clientY === 'number') {
      createClickRipple(event.clientX, event.clientY);
    }

    const winnerIndex = PRIZES.findIndex(p => p.winner);
    const boundaryAfterWinner = (winnerIndex + 1) * SLICE;
    const almostLostOffset = 0.8;
    const finalTarget = -(360 * 9 + boundaryAfterWinner - almostLostOffset);

    wheelBox.classList.add('spinning');
    wheel.classList.remove('phase-fast', 'phase-crawl');
    wheel.style.transform = 'rotate(0deg)';
    wheel.style.transition = 'none';
    void wheel.offsetWidth;

    const spinAnimation = wheel.animate(
      [
        {
          transform: 'rotate(0deg)',
          easing: 'cubic-bezier(0.08, 0.76, 0.02, 1)'
        },
        {
          transform: \`rotate(\${finalTarget}deg)\`
        }
      ],
      {
        duration: SPIN_MS,
        fill: 'forwards'
      }
    );

    const teaseTimer = setTimeout(() => {
      tease.classList.add('show');
    }, TEASE_AT_MS);

    spinAnimation.onfinish = () => {
      clearTimeout(teaseTimer);
      wheel.style.transform = \`rotate(\${finalTarget}deg)\`;
      spinAnimation.cancel();
      wheelBox.classList.remove('spinning');
      wheelBox.classList.add('done');
      wheel.classList.remove('phase-crawl');
      tease.classList.remove('show');
      spinning = false;

      const winner = PRIZES[winnerIndex];
      revealAmount.textContent = \`\${winner.label} OFF\`;
      reveal.classList.add('show');

      confetti.innerHTML = '';
      const colors = ['#FFC73B', '#F8545D', '#FFFFFF', '#FF8A1E', '#22C55E'];
      for (let i = 0; i < 30; i++) {
        const piece = document.createElement('span');
        piece.className = 'piece';
        piece.style.left = \`\${(i * 3.4 + (i % 5) * 1.5) % 100}%\`;
        piece.style.background = colors[i % colors.length];
        piece.style.setProperty('--delay', \`\${(i % 8) * 120}ms\`);
        piece.style.setProperty('--dur', \`\${1800 + ((i * 137) % 900)}ms\`);
        piece.style.setProperty('--rot', \`\${(i * 47) % 360}deg\`);
        confetti.appendChild(piece);
      }
      confetti.classList.add('show');
      setTimeout(() => confetti.classList.remove('show'), 4000);
    };
  }

  document.addEventListener('pointerdown', spinWheel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      spinWheel();
    }
  });
<\/script>

</body>
</html>
</div>`,cta:"Continue"},{id:"registration",type:"raw",name:"registration",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><img src="https://assets.fnlfx.com/01KRDSC4C41NQ3BWNYDVAMPSTY/PIgFOrQi.webp" alt=""><h1>Enter your &lt;span style=&quot;color: rgb(211, 34, 49);&quot;&gt;&lt;strong&gt;email&lt;/strong&gt; &lt;/span&gt;to create your AI video in minutes</h1><button class="ff-btn" type="button" data-cta>Continue</button><input class="ff-input" type="email" placeholder=" Your email"><p>Your information is 100% secure. Email is required to log in and access all app features. &lt;strong&gt;Please make sure your email is correct so you can access your account anytime.&lt;/strong&gt;</p></div>`,cta:"Continue",role:"engagement-insert"},{id:"copy-of-copy-of-paywall",type:"raw",name:"Copy of Copy of Paywall",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><div class="ff-row"><div class="ff-note">[Timer] Your discount is active for:
{{countdown}} — GET OFFER {{countdown}}</div></div><div style="position: relative; width: 100%; height: 330px; overflow: hidden; border-radius: 10px; background: #000;">
  <img 
    src="https://static.apero.vn/content/uploads/1_1_2531cf32df.png"
    alt=""
    style="width: 100%; height: 100%; object-fit: cover; filter: blur(10px) brightness(0.9); transform: scale(1.04);"
  >

  <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 85%, #000 100%); pointer-events: none;"></div>

  <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 40px; opacity: 0.85; pointer-events: none;">
    🔒
  </div>
</div><div class="ff-col"><p>&lt;span style=&quot;color: rgb(255, 255, 255);&quot;&gt;STEP 2: YOUR MEMORY IS READY&lt;/span&gt;</p><h1>Create without limits</h1></div><div class="ff-col"><div class="ff-plan">
    <div><b>1-WEEK</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$7.99</s> <b style="color:#e8eaf0">$3.99</b></div></div>
    <div style="text-align:right"><b>$0.57</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>1-YEAR</b> <span class="ff-badge">MOST POPULAR</span>
      <div style="color:#8a8f9c;font-size:12px"><s>$29.99</s> <b style="color:#e8eaf0">$14.99</b></div></div>
    <div style="text-align:right"><b>$0.04</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>Weekly</b> <span class="ff-badge">🔥MOST POPULAR</span>
      <div style="color:#8a8f9c;font-size:12px"><s>$19.99</s> <b style="color:#e8eaf0">$9.99</b></div></div>
    <div style="text-align:right"><b>$0.95</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>Monthly</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$39.99</s> <b style="color:#e8eaf0">$19.99</b></div></div>
    <div style="text-align:right"><b>$0.65</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-plan">
    <div><b>Yearly</b> 
      <div style="color:#8a8f9c;font-size:12px"><s>$99.99</s> <b style="color:#e8eaf0">$49.99</b></div></div>
    <div style="text-align:right"><b>$0.15</b><div style="color:#8a8f9c;font-size:11px">per day</div></div>
  </div><div class="ff-col"><div class="ff-note">[Checkout]</div><div class="ff-col"><div class="ff-note">[Checkout]</div></div></div><div class="ff-note">[Checkout]</div><div class="ff-col"><h1>✨ Your Full Access Pass</h1><ul class="ff-list"><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/dTuDz01L.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>Transform photos into stunning videos</span></li><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/U1oc3xjF.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>High quality, AI-powered results</span></li><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/FN7WDEZn.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>Access all advanced features</span></li><li><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/iYkyIhWR.webp" style="width:22px;height:22px;border-radius:0;margin:0"><span>Cancel anytime, no commitment</span></li></ul></div></div><img src="https://assets.fnlfx.com/01JMVWDXQA7NHCBG5SW3JPTFS8/iqy3Kq.webp" alt=""><div class="ff-col"><p>Not just a single photo - <br>get 20 templates included 📸</p><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/vjFeSM62.webp" alt=""></div><div class="ff-col"><p>⭐️ 4.7 Average rating on App Store </p><h1>Loved by Millions of<br>Happy Users 👇</h1><div class="ff-note">[Reviews]</div></div><div class="ff-col"><img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/vQ60EWeR.webp" alt=""><button class="ff-btn" type="button" data-cta>Term of Use</button><button class="ff-btn" type="button" data-cta>Privacy Policy</button><div class="ff-col"><p>Need help?</p><button class="ff-btn" type="button" data-cta>support@artimind.com</button></div></div></div>`,cta:"Term of Use",role:"paywall"},{id:"screen13-success",type:"raw",name:"Success_download",html:`<style>
.ff{max-width:520px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:14px;text-align:center}
.ff h1{font-size:26px;font-weight:800;line-height:1.2;margin:0}
.ff h2{font-size:20px;font-weight:700;margin:0}
.ff h3{font-size:17px;font-weight:600;margin:0}
.ff p{font-size:15px;color:#cbd2e0;margin:0}
.ff img{max-width:100%;border-radius:12px;display:block;margin:0 auto}
.ff-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.ff-col{display:flex;flex-direction:column;gap:12px}
.ff-opts{display:grid;gap:10px;margin:0 auto;max-width:100%}
.ff-opt{border:1px solid #2a2f3a;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:6px;align-items:center;background:#12141a}
.ff-plan{border:1px solid #2a2f3a;border-radius:12px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;background:#12141a;text-align:left}
.ff-badge{font-size:11px;color:#ffd54a}
.ff-btn{background:#2d6cdf;color:#fff;border:none;border-radius:999px;padding:14px;font-weight:800;font-size:16px;width:100%;cursor:pointer}
.ff-note{color:#8a8f9c;font-size:12px;border:1px dashed #2a2f3a;border-radius:8px;padding:8px}
.ff-input{background:#101319;border:1px solid #2a2f3a;color:#e8eaf0;padding:12px;border-radius:10px;width:100%}
.ff-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.ff-list li{display:flex;gap:8px;align-items:center;justify-content:center}
</style><div class="ff"><script src="https://cdn.brevo.com/js/sdk-loader.js" async><\/script>
<script>
    // Version: 2.0
    window.Brevo = window.Brevo || [];
    Brevo.push([
        "init",
        {
            client_key: "d4adjhlt0thesem7s9enuo5n",
        }
    ]);
    const curEmail = fox.inputs.getEmail()
    if (!!curEmail) {
        Brevo.push([
            "identify", {identifiers: {email_id: curEmail}}]);
        setTimeout(() => {
            Brevo.push(["page", "photoshoot thankyou page"]);
            Brevo.push([
                "track",
                    "photoshoot_thankyou_page",
                    {"email": curEmail},
                    {"data":{"project": "GlamAI"}}
            ]);
        }, 300)
        
    }
<\/script>
<img src="https://assets.fnlfx.com/01KFN0FPDJVCAHTMMJ695Y6R93/_stJsnZW.webp" alt=""><h1>Just one more step! </h1><ul class="ff-list"><li>•<span>Remember the email you used {{email}}</span></li><li>•<span>Click the button below to download the app</span></li><li>•<span>Open the app and tap &quot;Have an account? Sign in&quot;</span></li><li>•<span>Enter the email that you used for signing up {{email}}</span></li></ul><button class="ff-btn" type="button" data-cta>Download</button></div>`,cta:"Download",role:"successfull"}],Er="2026-07-10T02:20:36.167Z",Yr="2026-07-10T02:20:36.167Z",lg={id:Cr,concept:wr,product:vr,owner:Br,status:kr,assigned:Gr,cross_team:Zr,imported_from:Sr,import_mode:Wr,funnel_id:Rr,title:Vr,screens:Fr,_created:Er,_updated:Yr},dg=Object.freeze(Object.defineProperty({__proto__:null,_created:Er,_updated:Yr,assigned:Gr,concept:wr,cross_team:Zr,default:lg,funnel_id:Rr,id:Cr,import_mode:Wr,imported_from:Sr,owner:Br,product:vr,screens:Fr,status:kr,title:Vr},Symbol.toStringTag,{value:"Module"})),Tr="test1245",Lr="test1245",Nr="artimind",zr="hiepnv",Mr="draft",Xr=[],Hr=!1,Dr="test1245",Ur="bundle",Jr="test1245",Pr=[{id:"imported-1",type:"raw",url:"/imported/test1245/index.html"}],Or=[{id:"lang",role:"engagement-question"},{id:"bridge",role:"showcase"},{id:"name",role:"engagement-question"},{id:"goal",role:"engagement-question"},{id:"topics",role:"engagement-question"},{id:"current",role:"engagement-question"},{id:"target",role:"engagement-question"},{id:"deadline",role:"engagement-question"},{id:"ready",role:"engagement-question"},{id:"speaking",role:"engagement-question"},{id:"loading",role:"loading"},{id:"result",role:"showcase"},{id:"email",role:"engagement-insert"},{id:"learningPath",role:"showcase"},{id:"paywall",role:"paywall"},{id:"success",role:"successfull"}],Kr="2026-07-10T02:23:08.445Z",jr="2026-07-10T02:23:08.445Z",cg={id:Tr,concept:Lr,product:Nr,owner:zr,status:Mr,assigned:Xr,cross_team:Hr,imported_from:Dr,import_mode:Ur,title:Jr,screens:Pr,steps:Or,_created:Kr,_updated:jr},pg=Object.freeze(Object.defineProperty({__proto__:null,_created:Kr,_updated:jr,assigned:Xr,concept:Lr,cross_team:Hr,default:cg,id:Tr,import_mode:Ur,imported_from:Dr,owner:zr,product:Nr,screens:Pr,status:Mr,steps:Or,title:Jr},Symbol.toStringTag,{value:"Module"})),Qr="bw-couple4-clone-1",qr="bw-couple4-clone",_r="artimind",$r=null,el="hiepnv",tl={title:"Artimind — bw-couple4-clone",screens:[]},gg={id:Qr,template:qr,product:_r,style:$r,owner:el,overrides:tl},fg=Object.freeze(Object.defineProperty({__proto__:null,default:gg,id:Qr,overrides:tl,owner:el,product:_r,style:$r,template:qr},Symbol.toStringTag,{value:"Module"})),nl="bw-couple4-clone-2",il="bw-couple4-clone",al="artimind",ol=null,sl="hiepnv",rl={title:"Artimind — bw-couple4-clone",screens:[]},ug={id:nl,template:il,product:al,style:ol,owner:sl,overrides:rl},mg=Object.freeze(Object.defineProperty({__proto__:null,default:ug,id:nl,overrides:rl,owner:sl,product:al,style:ol,template:il},Symbol.toStringTag,{value:"Module"})),ll="bw-couple4-clone-3",dl="bw-couple4-clone",cl="artimind",pl=null,gl="hiepnv",fl={title:"Artimind — bw-couple4-clone",screens:[]},ul="2026-07-14T02:02:16.318Z",ml="2026-07-14T02:02:16.318Z",hl="fcacb12719",hg={id:ll,template:dl,product:cl,style:pl,owner:gl,overrides:fl,_created:ul,_updated:ml,asset:hl},bg=Object.freeze(Object.defineProperty({__proto__:null,_created:ul,_updated:ml,asset:hl,default:hg,id:ll,overrides:fl,owner:gl,product:cl,style:pl,template:dl},Symbol.toStringTag,{value:"Module"})),bl="demo",yl="Artimind Funnel — Demo",xl="light",Il=[{id:"q-frequency",type:"engagement-question",question:"How often do you create something visual?",subtitle:"Help us tailor your experience.",options:["Every day","A few times a week","Occasionally","Just trying it out"]},{id:"q-fits",type:"engagement-question",question:"Which best describes you?",options:["Hobbyist","Content creator","Designer","Just exploring"]},{id:"insert-email",type:"engagement-insert",question:"Where should we send your plan?",subtitle:"We'll only email you about your account.",inputType:"email",placeholder:"you@example.com",cta:"Continue"},{id:"loading-personalize",type:"loading",title:"Building your personalized plan…",body:"1,247 results analyzed",durationMs:1500,checklist:["Matching your style preferences","Picking the best starter templates","Finalizing your dashboard"]},{id:"paywall-trial",type:"paywall",title:"Start your free trial",body:"Unlock everything for 7 days. Cancel anytime.",cta:"Start trial — 7 days free",disclaimer:"No charge during trial. Cancel anytime in Settings."}],yg={id:bl,title:yl,theme:xl,screens:Il},xg=Object.freeze(Object.defineProperty({__proto__:null,default:yg,id:bl,screens:Il,theme:xl,title:yl},Symbol.toStringTag,{value:"Module"})),Al="paw-run-1",Cl="reunion-v1",wl=null,vl="HuongNT",Bl={title:"Artimind — Paw Run",screens:[]},Ig={id:Al,template:Cl,style:wl,owner:vl,overrides:Bl},Ag=Object.freeze(Object.defineProperty({__proto__:null,default:Ig,id:Al,overrides:Bl,owner:vl,style:wl,template:Cl},Symbol.toStringTag,{value:"Module"})),kl="reunion-1",Gl="reunion-v1",Zl="artimind",Sl=null,Wl="hiepnv",Rl={title:"Artimind — reunion",screens:[]},Vl="2026-07-14T02:04:35.532Z",Fl="2026-07-14T02:04:35.532Z",El="fcacb12719",Cg={id:kl,template:Gl,product:Zl,style:Sl,owner:Wl,overrides:Rl,_created:Vl,_updated:Fl,asset:El},wg=Object.freeze(Object.defineProperty({__proto__:null,_created:Vl,_updated:Fl,asset:El,default:Cg,id:kl,overrides:Rl,owner:Wl,product:Zl,style:Sl,template:Gl},Symbol.toStringTag,{value:"Module"})),Yl="reunion-13-jul",Tl="reunion-v1",Ll="728",Nl="hoanglm",zl={metaPixel:{id:"1492068642251123",includeValue:!0,firstPurchaseOnly:!1,events:{one_off:{enabled:!0,browser:!0,event_name:"Purchase"},trial_start:{enabled:!0,browser:!0,event_name:"StartTrial"},trial_converted:{enabled:!0,browser:!1,event_name:"Purchase"},subscription_start:{enabled:!0,browser:!0,event_name:"Purchase"},subscription_renewal:{enabled:!0,browser:!1,event_name:"Renewal"},upsell:{enabled:!0,browser:!0,event_name:"Purchase"}}}},Ml={title:"Artimind — Reunion (Var A)",screens:[{id:"showcase-1",title:"🎞️ Bring your most precious memory back to life",cta:"Try it now"},{id:"showcase-2",title:"Some things were never said out loud. Your video can say them."},{id:"question-1",question:"Who do you want to surprise with this video?"},{id:"paywall",eyebrow:"🎁 YOUR MEMORY VIDEO IS READY",title:"Unlock your video now",cta:"Get my video",disclaimer:"Cancel anytime. Secured checkout."}]},Xl="2026-07-13T08:54:46.606Z",Hl="2026-07-13T08:54:46.606Z",Dl="fcacb12719",vg={id:Yl,template:Tl,style:Ll,owner:Nl,vendor:zl,overrides:Ml,_created:Xl,_updated:Hl,asset:Dl},Bg=Object.freeze(Object.defineProperty({__proto__:null,_created:Xl,_updated:Hl,asset:Dl,default:vg,id:Yl,overrides:Ml,owner:Nl,style:Ll,template:Tl,vendor:zl},Symbol.toStringTag,{value:"Module"})),Ul="reunion-2",Jl="reunion-v1",Pl="artimind",Ol=null,Kl="hiepnv",jl={title:"Artimind — reunion",screens:[]},Ql="2026-07-14T02:05:44.600Z",ql="2026-07-14T02:05:44.600Z",_l="fcacb12719",kg={id:Ul,template:Jl,product:Pl,style:Ol,owner:Kl,overrides:jl,_created:Ql,_updated:ql,asset:_l},Gg=Object.freeze(Object.defineProperty({__proto__:null,_created:Ql,_updated:ql,asset:_l,default:kg,id:Ul,overrides:jl,owner:Kl,product:Pl,style:Ol,template:Jl},Symbol.toStringTag,{value:"Module"})),$l="reunion-var-1-july11-1",ed="reunion-v1-copy",td="artimind",nd="123",id="hiepnv",ad={title:"Artimind — reunion-var-_1_July11",screens:[]},od="2026-07-11T04:34:45.250Z",sd="2026-07-11T04:34:45.250Z",rd="fcacb12719",Zg={id:$l,template:ed,product:td,style:nd,owner:id,overrides:ad,_created:od,_updated:sd,asset:rd},Sg=Object.freeze(Object.defineProperty({__proto__:null,_created:od,_updated:sd,asset:rd,default:Zg,id:$l,overrides:ad,owner:id,product:td,style:nd,template:ed},Symbol.toStringTag,{value:"Module"})),ld="reunion-var-a",dd="reunion-v1",cd="s1-emotive",pd="mkter-a",gd={title:"Artimind — Reunion (Var A)",screens:[{id:"showcase-1",title:"🎞️ Bring your most precious memory back to life",cta:"Try it now"},{id:"showcase-2",title:"Some things were never said out loud. Your video can say them."},{id:"question-1",question:"Who do you want to surprise with this video?"},{id:"paywall",eyebrow:"🎁 YOUR MEMORY VIDEO IS READY",title:"Unlock your video now",cta:"Get my video",disclaimer:"Cancel anytime. Secured checkout."}]},fd={monkey:{funnelSlug:"reunion-var-a"}},ud="2026-07-07T08:06:34.220Z",md="2026-07-07T08:06:34.220Z",hd="fcacb12719",Wg={id:ld,template:dd,style:cd,owner:pd,overrides:gd,payment:fd,_created:ud,_updated:md,asset:hd},Rg=Object.freeze(Object.defineProperty({__proto__:null,_created:ud,_updated:md,asset:hd,default:Wg,id:ld,overrides:gd,owner:pd,payment:fd,style:cd,template:dd},Symbol.toStringTag,{value:"Module"})),bd="reunion-var-b",yd="reunion-v1",xd="s1-emotive",Id="mkter-b",Ad={title:"Artimind — Reunion (Var B)",screens:[]},Cd="2026-07-07T08:06:34.220Z",wd="2026-07-07T08:06:34.221Z",vd="fcacb12719",Vg={id:bd,template:yd,style:xd,owner:Id,overrides:Ad,_created:Cd,_updated:wd,asset:vd},Fg=Object.freeze(Object.defineProperty({__proto__:null,_created:Cd,_updated:wd,asset:vd,default:Vg,id:bd,overrides:Ad,owner:Id,style:xd,template:yd},Symbol.toStringTag,{value:"Module"})),Bd="reunion",kd="reunion-v1",Gd={},Zd="s0-control",Sd="huynq",Wd="2026-07-07T08:06:34.221Z",Rd="2026-07-07T08:06:34.221Z",Vd="fcacb12719",Eg={id:Bd,template:kd,overrides:Gd,style:Zd,owner:Sd,_created:Wd,_updated:Rd,asset:Vd},Yg=Object.freeze(Object.defineProperty({__proto__:null,_created:Wd,_updated:Rd,asset:Vd,default:Eg,id:Bd,overrides:Gd,owner:Sd,style:Zd,template:kd},Symbol.toStringTag,{value:"Module"})),Fd="s131-full-demo",Ed="avc213",Yd="artimind",Td=null,Ld="huongnt",Nd="0a12254bb0",zd={title:"S131 Full Demo",screens:[]},Tg={id:Fd,template:Ed,product:Yd,style:Td,owner:Ld,asset:Nd,overrides:zd},Lg=Object.freeze(Object.defineProperty({__proto__:null,asset:Nd,default:Tg,id:Fd,overrides:zd,owner:Ld,product:Yd,style:Td,template:Ed},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Md=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Ng=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[i++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],s=n[t++],r=n[t++],l=((a&7)<<18|(o&63)<<12|(s&63)<<6|r&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],s=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(o&63)<<6|s&63)}}return e.join("")},zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const o=n[a],s=a+1<n.length,r=s?n[a+1]:0,l=a+2<n.length,d=l?n[a+2]:0,c=o>>2,p=(o&3)<<4|r>>4;let f=(r&15)<<2|d>>6,u=d&63;l||(u=64,s||(f=64)),i.push(t[c],t[p],t[f],t[u])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ng(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],r=a<n.length?t[n.charAt(a)]:0;++a;const d=a<n.length?t[n.charAt(a)]:64;++a;const p=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||r==null||d==null||p==null)throw new Mg;const f=o<<2|r>>4;if(i.push(f),d!==64){const u=r<<4&240|d>>2;if(i.push(u),p!==64){const b=d<<6&192|p;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xg=function(n){const e=Md(n);return zg.encodeByteArray(e,!0)},Xd=function(n){return Xg(n).replace(/\./g,"")};function Hg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mi(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function Dg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ug="FirebaseError";class qe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ug,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],s=o?Jg(o,i):"Error",r=`${this.serviceName}: ${s} (${a}).`;return new qe(a,r,i)}}function Jg(n,e){return n.replace(Pg,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const Pg=/\{\$([^}]+)}/g;/**
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
 */const Og=1e3,Kg=2,jg=4*60*60*1e3,Qg=.5;function ui(n,e=Og,t=Kg){const i=e*Math.pow(t,n),a=Math.round(Qg*i*(Math.random()-.5)*2);return Math.min(jg,i+a)}/**
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
 */function Dd(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const qg={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},_g=z.INFO,$g={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},e0=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=$g[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=_g,this._logHandler=e0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const t0=(n,e)=>e.some(t=>n instanceof t);let wa,va;function n0(){return wa||(wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i0(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ud=new WeakMap,mi=new WeakMap,Jd=new WeakMap,Xn=new WeakMap,Hi=new WeakMap;function a0(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(Ue(n.result)),a()},s=()=>{i(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&Ud.set(t,n)}).catch(()=>{}),Hi.set(e,n),e}function o0(n){if(mi.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),a()},s=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});mi.set(n,e)}let hi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function s0(n){hi=n(hi)}function r0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hn(this),e,...t);return Jd.set(i,e.sort?e.sort():[e]),Ue(i)}:i0().includes(n)?function(...e){return n.apply(Hn(this),e),Ue(Ud.get(this))}:function(...e){return Ue(n.apply(Hn(this),e))}}function l0(n){return typeof n=="function"?r0(n):(n instanceof IDBTransaction&&o0(n),t0(n,n0())?new Proxy(n,hi):n)}function Ue(n){if(n instanceof IDBRequest)return a0(n);if(Xn.has(n))return Xn.get(n);const e=l0(n);return e!==n&&(Xn.set(n,e),Hi.set(e,n)),e}const Hn=n=>Hi.get(n);function Pd(n,e,{blocked:t,upgrade:i,blocking:a,terminated:o}={}){const s=indexedDB.open(n,e),r=Ue(s);return i&&s.addEventListener("upgradeneeded",l=>{i(Ue(s.result),l.oldVersion,l.newVersion,Ue(s.transaction),l)}),t&&s.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),r.then(l=>{o&&l.addEventListener("close",()=>o()),a&&l.addEventListener("versionchange",d=>a(d.oldVersion,d.newVersion,d))}).catch(()=>{}),r}const d0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],Dn=new Map;function Ba(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dn.get(e))return Dn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=c0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||d0.includes(t)))return;const o=async function(s,...r){const l=this.transaction(s,a?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(r.shift())),(await Promise.all([d[t](...r),a&&l.done]))[0]};return Dn.set(e,o),o}s0(n=>({...n,get:(e,t,i)=>Ba(e,t)||n.get(e,t,i),has:(e,t)=>!!Ba(e,t)||n.has(e,t)}));/**
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
 */class p0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(g0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function g0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",ka="0.13.2";/**
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
 */const Te=new Xi("@firebase/app"),f0="@firebase/app-compat",u0="@firebase/analytics-compat",m0="@firebase/analytics",h0="@firebase/app-check-compat",b0="@firebase/app-check",y0="@firebase/auth",x0="@firebase/auth-compat",I0="@firebase/database",A0="@firebase/data-connect",C0="@firebase/database-compat",w0="@firebase/functions",v0="@firebase/functions-compat",B0="@firebase/installations",k0="@firebase/installations-compat",G0="@firebase/messaging",Z0="@firebase/messaging-compat",S0="@firebase/performance",W0="@firebase/performance-compat",R0="@firebase/remote-config",V0="@firebase/remote-config-compat",F0="@firebase/storage",E0="@firebase/storage-compat",Y0="@firebase/firestore",T0="@firebase/ai",L0="@firebase/firestore-compat",N0="firebase",z0="11.10.0",M0={[bi]:"fire-core",[f0]:"fire-core-compat",[m0]:"fire-analytics",[u0]:"fire-analytics-compat",[b0]:"fire-app-check",[h0]:"fire-app-check-compat",[y0]:"fire-auth",[x0]:"fire-auth-compat",[I0]:"fire-rtdb",[A0]:"fire-data-connect",[C0]:"fire-rtdb-compat",[w0]:"fire-fn",[v0]:"fire-fn-compat",[B0]:"fire-iid",[k0]:"fire-iid-compat",[G0]:"fire-fcm",[Z0]:"fire-fcm-compat",[S0]:"fire-perf",[W0]:"fire-perf-compat",[R0]:"fire-rc",[V0]:"fire-rc-compat",[F0]:"fire-gcs",[E0]:"fire-gcs-compat",[Y0]:"fire-fst",[L0]:"fire-fst-compat",[T0]:"fire-vertex","fire-js":"fire-js",[N0]:"fire-js-all"};/**
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
 */const X0=new Map,H0=new Map,Ga=new Map;function Za(n,e){try{n.container.addComponent(e)}catch(t){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function je(n){const e=n.name;if(Ga.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;Ga.set(e,n);for(const t of X0.values())Za(t,n);for(const t of H0.values())Za(t,n);return!0}function Od(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const D0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new en("app","Firebase",D0);/**
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
 */const U0=z0;function Be(n,e,t){var i;let a=(i=M0[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const r=[`Unable to register library "${a}" with version "${e}":`];o&&r.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&r.push("and"),s&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(r.join(" "));return}je(new Ke(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const J0="firebase-heartbeat-database",P0=1,_t="firebase-heartbeat-store";let Un=null;function Kd(){return Un||(Un=Pd(J0,P0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_t)}catch(t){console.warn(t)}}}}).catch(n=>{throw Di.create("idb-open",{originalErrorMessage:n.message})})),Un}async function O0(n){try{const t=(await Kd()).transaction(_t),i=await t.objectStore(_t).get(jd(n));return await t.done,i}catch(e){if(e instanceof qe)Te.warn(e.message);else{const t=Di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Te.warn(t.message)}}}async function Sa(n,e){try{const i=(await Kd()).transaction(_t,"readwrite");await i.objectStore(_t).put(e,jd(n)),await i.done}catch(t){if(t instanceof qe)Te.warn(t.message);else{const i=Di.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Te.warn(i.message)}}}function jd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const K0=1024,j0=30;class Q0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>j0){const s=$0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Te.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wa(),{heartbeatsToSend:i,unsentEntries:a}=q0(this._heartbeatsCache.heartbeats),o=Xd(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Te.warn(t),""}}}function Wa(){return new Date().toISOString().substring(0,10)}function q0(n,e=K0){const t=[];let i=n.slice();for(const a of n){const o=t.find(s=>s.agent===a.agent);if(o){if(o.dates.push(a.date),Ra(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Ra(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class _0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mi()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await O0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Ra(n){return Xd(JSON.stringify({version:2,heartbeats:n})).length}function $0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function ef(n){je(new Ke("platform-logger",e=>new p0(e),"PRIVATE")),je(new Ke("heartbeat",e=>new Q0(e),"PRIVATE")),Be(bi,ka,n),Be(bi,ka,"esm2017"),Be("fire-js","")}ef("");var tf="firebase",nf="11.10.0";/**
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
 */Be(tf,nf,"app");const Qd="@firebase/installations",Ui="0.6.18";/**
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
 */const qd=1e4,_d=`w:${Ui}`,$d="FIS_v2",af="https://firebaseinstallations.googleapis.com/v1",of=60*60*1e3,sf="installations",rf="Installations";/**
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
 */const lf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ct=new en(sf,rf,lf);function ec(n){return n instanceof qe&&n.code.includes("request-failed")}/**
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
 */function tc({projectId:n}){return`${af}/projects/${n}/installations`}function nc(n){return{token:n.token,requestStatus:2,expiresIn:cf(n.expiresIn),creationTime:Date.now()}}async function ic(n,e){const i=(await e.json()).error;return ct.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ac({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function df(n,{refreshToken:e}){const t=ac(n);return t.append("Authorization",pf(e)),t}async function oc(n){const e=await n();return e.status>=500&&e.status<600?n():e}function cf(n){return Number(n.replace("s","000"))}function pf(n){return`${$d} ${n}`}/**
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
 */async function gf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=tc(n),a=ac(n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const s={fid:t,authVersion:$d,appId:n.appId,sdkVersion:_d},r={method:"POST",headers:a,body:JSON.stringify(s)},l=await oc(()=>fetch(i,r));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:nc(d.authToken)}}else throw await ic("Create Installation",l)}/**
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
 */function sc(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ff(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uf=/^[cdef][\w-]{21}$/,yi="";function mf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=hf(n);return uf.test(t)?t:yi}catch{return yi}}function hf(n){return ff(n).substr(0,22)}/**
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
 */function Sn(n){return`${n.appName}!${n.appId}`}/**
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
 */const rc=new Map;function lc(n,e){const t=Sn(n);dc(t,e),bf(t,e)}function dc(n,e){const t=rc.get(n);if(t)for(const i of t)i(e)}function bf(n,e){const t=yf();t&&t.postMessage({key:n,fid:e}),xf()}let at=null;function yf(){return!at&&"BroadcastChannel"in self&&(at=new BroadcastChannel("[Firebase] FID Change"),at.onmessage=n=>{dc(n.data.key,n.data.fid)}),at}function xf(){rc.size===0&&at&&(at.close(),at=null)}/**
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
 */const If="firebase-installations-database",Af=1,pt="firebase-installations-store";let Jn=null;function Ji(){return Jn||(Jn=Pd(If,Af,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pt)}}})),Jn}async function Bn(n,e){const t=Sn(n),a=(await Ji()).transaction(pt,"readwrite"),o=a.objectStore(pt),s=await o.get(t);return await o.put(e,t),await a.done,(!s||s.fid!==e.fid)&&lc(n,e.fid),e}async function cc(n){const e=Sn(n),i=(await Ji()).transaction(pt,"readwrite");await i.objectStore(pt).delete(e),await i.done}async function Wn(n,e){const t=Sn(n),a=(await Ji()).transaction(pt,"readwrite"),o=a.objectStore(pt),s=await o.get(t),r=e(s);return r===void 0?await o.delete(t):await o.put(r,t),await a.done,r&&(!s||s.fid!==r.fid)&&lc(n,r.fid),r}/**
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
 */async function Pi(n){let e;const t=await Wn(n.appConfig,i=>{const a=Cf(i),o=wf(n,a);return e=o.registrationPromise,o.installationEntry});return t.fid===yi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Cf(n){const e=n||{fid:mf(),registrationStatus:0};return pc(e)}function wf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ct.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=vf(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Bf(n)}:{installationEntry:e}}async function vf(n,e){try{const t=await gf(n,e);return Bn(n.appConfig,t)}catch(t){throw ec(t)&&t.customData.serverCode===409?await cc(n.appConfig):await Bn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Bf(n){let e=await Va(n.appConfig);for(;e.registrationStatus===1;)await sc(100),e=await Va(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Pi(n);return i||t}return e}function Va(n){return Wn(n,e=>{if(!e)throw ct.create("installation-not-found");return pc(e)})}function pc(n){return kf(n)?{fid:n.fid,registrationStatus:0}:n}function kf(n){return n.registrationStatus===1&&n.registrationTime+qd<Date.now()}/**
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
 */async function Gf({appConfig:n,heartbeatServiceProvider:e},t){const i=Zf(n,t),a=df(n,t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const s={installation:{sdkVersion:_d,appId:n.appId}},r={method:"POST",headers:a,body:JSON.stringify(s)},l=await oc(()=>fetch(i,r));if(l.ok){const d=await l.json();return nc(d)}else throw await ic("Generate Auth Token",l)}function Zf(n,{fid:e}){return`${tc(n)}/${e}/authTokens:generate`}/**
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
 */async function Oi(n,e=!1){let t;const i=await Wn(n.appConfig,o=>{if(!gc(o))throw ct.create("not-registered");const s=o.authToken;if(!e&&Rf(s))return o;if(s.requestStatus===1)return t=Sf(n,e),o;{if(!navigator.onLine)throw ct.create("app-offline");const r=Ff(o);return t=Wf(n,r),r}});return t?await t:i.authToken}async function Sf(n,e){let t=await Fa(n.appConfig);for(;t.authToken.requestStatus===1;)await sc(100),t=await Fa(n.appConfig);const i=t.authToken;return i.requestStatus===0?Oi(n,e):i}function Fa(n){return Wn(n,e=>{if(!gc(e))throw ct.create("not-registered");const t=e.authToken;return Ef(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Wf(n,e){try{const t=await Gf(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Bn(n.appConfig,i),t}catch(t){if(ec(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cc(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bn(n.appConfig,i)}throw t}}function gc(n){return n!==void 0&&n.registrationStatus===2}function Rf(n){return n.requestStatus===2&&!Vf(n)}function Vf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+of}function Ff(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Ef(n){return n.requestStatus===1&&n.requestTime+qd<Date.now()}/**
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
 */async function Yf(n){const e=n,{installationEntry:t,registrationPromise:i}=await Pi(e);return i?i.catch(console.error):Oi(e).catch(console.error),t.fid}/**
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
 */async function Tf(n,e=!1){const t=n;return await Lf(t),(await Oi(t,e)).token}async function Lf(n){const{registrationPromise:e}=await Pi(n);e&&await e}/**
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
 */function Nf(n){if(!n||!n.options)throw Pn("App Configuration");if(!n.name)throw Pn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Pn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Pn(n){return ct.create("missing-app-config-values",{valueName:n})}/**
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
 */const fc="installations",zf="installations-internal",Mf=n=>{const e=n.getProvider("app").getImmediate(),t=Nf(e),i=Od(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Xf=n=>{const e=n.getProvider("app").getImmediate(),t=Od(e,fc).getImmediate();return{getId:()=>Yf(t),getToken:a=>Tf(t,a)}};function Hf(){je(new Ke(fc,Mf,"PUBLIC")),je(new Ke(zf,Xf,"PRIVATE"))}Hf();Be(Qd,Ui);Be(Qd,Ui,"esm2017");/**
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
 */const Ea="analytics",Df="firebase_id",Uf="origin",Jf=60*1e3,Pf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ki="https://www.googletagmanager.com/gtag/js";/**
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
 */const oe=new Xi("@firebase/analytics");/**
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
 */const Of={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xe=new en("analytics","Analytics",Of);/**
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
 */function Kf(n){if(!n.startsWith(Ki)){const e=xe.create("invalid-gtag-resource",{gtagURL:n});return oe.warn(e.message),""}return n}function uc(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function jf(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Qf(n,e){const t=jf("firebase-js-sdk-policy",{createScriptURL:Kf}),i=document.createElement("script"),a=`${Ki}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function qf(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function _f(n,e,t,i,a,o){const s=i[a];try{if(s)await e[s];else{const l=(await uc(t)).find(d=>d.measurementId===a);l&&await e[l.appId]}}catch(r){oe.error(r)}n("config",a,o)}async function $f(n,e,t,i,a){try{let o=[];if(a&&a.send_to){let s=a.send_to;Array.isArray(s)||(s=[s]);const r=await uc(t);for(const l of s){const d=r.find(p=>p.measurementId===l),c=d&&e[d.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",i,a||{})}catch(o){oe.error(o)}}function eu(n,e,t,i){async function a(o,...s){try{if(o==="event"){const[r,l]=s;await $f(n,e,t,r,l)}else if(o==="config"){const[r,l]=s;await _f(n,e,t,i,r,l)}else if(o==="consent"){const[r,l]=s;n("consent",r,l)}else if(o==="get"){const[r,l,d]=s;n("get",r,l,d)}else if(o==="set"){const[r]=s;n("set",r)}else n(o,...s)}catch(r){oe.error(r)}}return a}function tu(n,e,t,i,a){let o=function(...s){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=eu(o,n,e,t),{gtagCore:o,wrappedGtag:window[a]}}function nu(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ki)&&t.src.includes(n))return t;return null}/**
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
 */const iu=30,au=1e3;class ou{constructor(e={},t=au){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mc=new ou;function su(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ru(n){var e;const{appId:t,apiKey:i}=n,a={method:"GET",headers:su(i)},o=Pf.replace("{app-id}",t),s=await fetch(o,a);if(s.status!==200&&s.status!==304){let r="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(r=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:r})}return s.json()}async function lu(n,e=mc,t){const{appId:i,apiKey:a,measurementId:o}=n.options;if(!i)throw xe.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:i};throw xe.create("no-api-key")}const s=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new pu;return setTimeout(async()=>{r.abort()},Jf),hc({appId:i,apiKey:a,measurementId:o},s,r,e)}async function hc(n,{throttleEndTimeMillis:e,backoffCount:t},i,a=mc){var o;const{appId:s,measurementId:r}=n;try{await du(i,e)}catch(l){if(r)return oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:r};throw l}try{const l=await ru(n);return a.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!cu(d)){if(a.deleteThrottleMetadata(s),r)return oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:r};throw l}const c=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?ui(t,a.intervalMillis,iu):ui(t,a.intervalMillis),p={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return a.setThrottleMetadata(s,p),oe.debug(`Calling attemptFetch again in ${c} millis`),hc(n,p,i,a)}}function du(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(o),i(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cu(n){if(!(n instanceof qe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class pu{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gu(n,e,t,i,a){if(a&&a.global){n("event",t,i);return}else{const o=await e,s=Object.assign(Object.assign({},i),{send_to:o});n("event",t,s)}}/**
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
 */async function fu(){if(Mi())try{await Hd()}catch(n){return oe.warn(xe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return oe.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uu(n,e,t,i,a,o,s){var r;const l=lu(n);l.then(u=>{t[u.measurementId]=u.appId,n.options.measurementId&&u.measurementId!==n.options.measurementId&&oe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${u.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(u=>oe.error(u)),e.push(l);const d=fu().then(u=>{if(u)return i.getId()}),[c,p]=await Promise.all([l,d]);nu(o)||Qf(o,c.measurementId),a("js",new Date);const f=(r=s==null?void 0:s.config)!==null&&r!==void 0?r:{};return f[Uf]="firebase",f.update=!0,p!=null&&(f[Df]=p),a("config",c.measurementId,f),c.measurementId}/**
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
 */class mu{constructor(e){this.app=e}_delete(){return delete Dt[this.app.options.appId],Promise.resolve()}}let Dt={},Ya=[];const Ta={};let On="dataLayer",hu="gtag",La,bc,Na=!1;function bu(){const n=[];if(Hg()&&n.push("This is a browser extension environment."),Dg()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,a)=>`(${a+1}) ${i}`).join(" "),t=xe.create("invalid-analytics-context",{errorInfo:e});oe.warn(t.message)}}function yu(n,e,t){bu();const i=n.options.appId;if(!i)throw xe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(Dt[i]!=null)throw xe.create("already-exists",{id:i});if(!Na){qf(On);const{wrappedGtag:o,gtagCore:s}=tu(Dt,Ya,Ta,On,hu);bc=o,La=s,Na=!0}return Dt[i]=uu(n,Ya,Ta,e,La,On,t),new mu(n)}function xu(n,e,t,i){n=Dd(n),gu(bc,Dt[n.app.options.appId],e,t,i).catch(a=>oe.error(a))}const za="@firebase/analytics",Ma="0.10.17";function Iu(){je(new Ke(Ea,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return yu(i,a,t)},"PUBLIC")),je(new Ke("analytics-internal",n,"PRIVATE")),Be(za,Ma),Be(za,Ma,"esm2017");function n(e){try{const t=e.getProvider(Ea).getImmediate();return{logEvent:(i,a,o)=>xu(t,i,a,o)}}catch(t){throw xe.create("interop-component-reg-failed",{reason:t})}}}Iu();const Kn="@firebase/remote-config",Xa="0.6.5";/**
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
 */const Au="remote-config",Ha=100;/**
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
 */const Cu={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported."},fe=new en("remoteconfig","Remote Config",Cu);function wu(n){const e=Dd(n);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class vu{constructor(e,t,i,a){this.client=e,this.storage=t,this.storageCache=i,this.logger=a}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const i=Date.now()-t,a=i<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${i}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${a}.`),a}async fetch(e){const[t,i]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(i&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return i;e.eTag=i&&i.eTag;const a=await this.client.fetch(e),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return a.status===200&&o.push(this.storage.setLastSuccessfulFetchResponse(a)),await Promise.all(o),a}}/**
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
 */function Bu(n=navigator){return n.languages&&n.languages[0]||n.language}/**
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
 */class ku{constructor(e,t,i,a,o,s){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=i,this.projectId=a,this.apiKey=o,this.appId=s}async fetch(e){const[t,i]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),o=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},r={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:i,app_id:this.appId,language_code:Bu(),custom_signals:e.customSignals},l={method:"POST",headers:s,body:JSON.stringify(r)},d=fetch(o,l),c=new Promise((x,B)=>{e.signal.addEventListener(()=>{const k=new Error("The operation was aborted.");k.name="AbortError",B(k)})});let p;try{await Promise.race([d,c]),p=await d}catch(x){let B="fetch-client-network";throw(x==null?void 0:x.name)==="AbortError"&&(B="fetch-timeout"),fe.create(B,{originalErrorMessage:x==null?void 0:x.message})}let f=p.status;const u=p.headers.get("ETag")||void 0;let b,g;if(p.status===200){let x;try{x=await p.json()}catch(B){throw fe.create("fetch-client-parse",{originalErrorMessage:B==null?void 0:B.message})}b=x.entries,g=x.state}if(g==="INSTANCE_STATE_UNSPECIFIED"?f=500:g==="NO_CHANGE"?f=304:(g==="NO_TEMPLATE"||g==="EMPTY_CONFIG")&&(b={}),f!==304&&f!==200)throw fe.create("fetch-status",{httpStatus:f});return{status:f,eTag:u,config:b}}}/**
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
 */function Gu(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(o),i(fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Zu(n){if(!(n instanceof qe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Su{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:i}){await Gu(e.signal,t);try{const a=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),a}catch(a){if(!Zu(a))throw a;const o={throttleEndTimeMillis:Date.now()+ui(i),backoffCount:i+1};return await this.storage.setThrottleMetadata(o),this.attemptFetch(e,o)}}}/**
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
 */const Wu=60*1e3,Ru=12*60*60*1e3;class Vu{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,i,a,o){this.app=e,this._client=t,this._storageCache=i,this._storage=a,this._logger=o,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:Wu,minimumFetchIntervalMillis:Ru},this.defaultConfig={}}}/**
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
 */function un(n,e){const t=n.target.error||void 0;return fe.create(e,{originalErrorMessage:t&&(t==null?void 0:t.message)})}const Le="app_namespace_store",Fu="firebase_remote_config",Eu=1;function Yu(){return new Promise((n,e)=>{try{const t=indexedDB.open(Fu,Eu);t.onerror=i=>{e(un(i,"storage-open"))},t.onsuccess=i=>{n(i.target.result)},t.onupgradeneeded=i=>{const a=i.target.result;switch(i.oldVersion){case 0:a.createObjectStore(Le,{keyPath:"compositeKey"})}}}catch(t){e(fe.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}})}class yc{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}}class Tu extends yc{constructor(e,t,i,a=Yu()){super(),this.appId=e,this.appName=t,this.namespace=i,this.openDbPromise=a}async setCustomSignals(e){const i=(await this.openDbPromise).transaction([Le],"readwrite"),a=await this.getWithTransaction("custom_signals",i),o=xc(e,a||{});return await this.setWithTransaction("custom_signals",o,i),o}async getWithTransaction(e,t){return new Promise((i,a)=>{const o=t.objectStore(Le),s=this.createCompositeKey(e);try{const r=o.get(s);r.onerror=l=>{a(un(l,"storage-get"))},r.onsuccess=l=>{const d=l.target.result;i(d?d.value:void 0)}}catch(r){a(fe.create("storage-get",{originalErrorMessage:r==null?void 0:r.message}))}})}async setWithTransaction(e,t,i){return new Promise((a,o)=>{const s=i.objectStore(Le),r=this.createCompositeKey(e);try{const l=s.put({compositeKey:r,value:t});l.onerror=d=>{o(un(d,"storage-set"))},l.onsuccess=()=>{a()}}catch(l){o(fe.create("storage-set",{originalErrorMessage:l==null?void 0:l.message}))}})}async get(e){const i=(await this.openDbPromise).transaction([Le],"readonly");return this.getWithTransaction(e,i)}async set(e,t){const a=(await this.openDbPromise).transaction([Le],"readwrite");return this.setWithTransaction(e,t,a)}async delete(e){const t=await this.openDbPromise;return new Promise((i,a)=>{const s=t.transaction([Le],"readwrite").objectStore(Le),r=this.createCompositeKey(e);try{const l=s.delete(r);l.onerror=d=>{a(un(d,"storage-delete"))},l.onsuccess=()=>{i()}}catch(l){a(fe.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class Lu extends yc{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=xc(e,t),Promise.resolve(this.storage.custom_signals)}}function xc(n,e){const t=Object.assign(Object.assign({},e),n),i=Object.fromEntries(Object.entries(t).filter(([a,o])=>o!==null).map(([a,o])=>typeof o=="number"?[a,o.toString()]:[a,o]));if(Object.keys(i).length>Ha)throw fe.create("custom-signal-max-allowed-signals",{maxSignals:Ha});return i}/**
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
 */class Nu{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),a=this.storage.getCustomSignals(),o=await e;o&&(this.lastFetchStatus=o);const s=await t;s&&(this.lastSuccessfulFetchTimestampMillis=s);const r=await i;r&&(this.activeConfig=r);const l=await a;l&&(this.customSignals=l)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
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
 */function zu(){je(new Ke(Au,n,"PUBLIC").setMultipleInstances(!0)),Be(Kn,Xa),Be(Kn,Xa,"esm2017");function n(e,{options:t}){const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate(),{projectId:o,apiKey:s,appId:r}=i.options;if(!o)throw fe.create("registration-project-id");if(!s)throw fe.create("registration-api-key");if(!r)throw fe.create("registration-app-id");const l=(t==null?void 0:t.templateId)||"firebase",d=Mi()?new Tu(r,i.name,l):new Lu,c=new Nu(d),p=new Xi(Kn);p.logLevel=z.ERROR;const f=new ku(a,U0,l,o,s,r),u=new Su(f,d),b=new vu(u,d,c,p),g=new Vu(i,b,c,d,p);return wu(g),g}}zu();let Mu=null;async function Xu(n){return null}(async()=>{{console.info("[firebase] no apiKey — events log to console only.");return}})();function Hu(n,e){try{}catch(t){console.warn("[firebase] logEvent failed:",t==null?void 0:t.message)}}const Du={name:"Artimind - AI Video Generator",metaPixel:{pixels:[{id:"1492068642251123",label:""},{id:"1492068642251125",label:""}],id:"1492068642251123",includeValue:!0,firstPurchaseOnly:!1,events:{one_off:{enabled:!0,browser:!0,event_name:"Purchase"},trial_start:{enabled:!0,browser:!0,event_name:"StartTrial"},trial_converted:{enabled:!0,browser:!1,event_name:"Purchase"},subscription_start:{enabled:!0,browser:!0,event_name:"Purchase"},subscription_renewal:{enabled:!0,browser:!1,event_name:"Renewal"},upsell:{enabled:!0,browser:!0,event_name:"Purchase"}}},siteName:"Artimind",favicon:"favicon-32.png",appStoreUrl:"https://apps.apple.com/us/app/artimind-ai-video-generator/id6459831969",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/33/cb/f833cba5-5a25-d233-78a0-091637e9a403/AppIcon-Option1-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg"},Uu={name:"Genius",metaPixel:{id:"",includeValue:!0,firstPurchaseOnly:!1,events:{one_off:{enabled:!0,browser:!0,event_name:"Purchase"},trial_start:{enabled:!0,browser:!0,event_name:"StartTrial"},trial_converted:{enabled:!0,browser:!1,event_name:"Purchase"},subscription_start:{enabled:!0,browser:!0,event_name:"Purchase"},subscription_renewal:{enabled:!0,browser:!1,event_name:"Renewal"},upsell:{enabled:!0,browser:!0,event_name:"Purchase"}}},siteName:"Genius",favicon:"",appStoreUrl:""},Ju={name:"Languaso",metaPixel:{id:"",includeValue:!0,firstPurchaseOnly:!1,events:{one_off:{enabled:!0,browser:!0,event_name:"Purchase"},trial_start:{enabled:!0,browser:!0,event_name:"StartTrial"},trial_converted:{enabled:!0,browser:!1,event_name:"Purchase"},subscription_start:{enabled:!0,browser:!0,event_name:"Purchase"},subscription_renewal:{enabled:!0,browser:!1,event_name:"Renewal"},upsell:{enabled:!0,browser:!0,event_name:"Purchase"}}},siteName:"Languaso",favicon:"",appStoreUrl:""},Da={artimind:Du,genius:Uu,languaso:Ju},Pu=Object.assign({"./templates/avc213.json":qp,"./templates/bw-couple4-clone.json":$p,"./templates/fm-deploy.json":tg,"./templates/reunion-v1-copy.json":ig,"./templates/reunion-v1.json":og,"./templates/test.json":rg,"./templates/test123.json":dg,"./templates/test1245.json":pg}),Ou=Object.assign({"./funnels/bw-couple4-clone-1.json":fg,"./funnels/bw-couple4-clone-2.json":mg,"./funnels/bw-couple4-clone-3.json":bg,"./funnels/demo.json":xg,"./funnels/paw-run-1.json":Ag,"./funnels/reunion-1.json":wg,"./funnels/reunion-13-jul.json":Bg,"./funnels/reunion-2.json":Gg,"./funnels/reunion-var-1-july11-1.json":Sg,"./funnels/reunion-var-a.json":Rg,"./funnels/reunion-var-b.json":Fg,"./funnels/reunion.json":Yg,"./funnels/s131-full-demo.json":Lg}),St={};for(const n of Object.values(Pu)){const e=n.default;e!=null&&e.id&&(St[e.id]=e)}const Fe={};for(const n of Object.values(Ou)){const e=n.default;e!=null&&e.id&&(Fe[e.id]=e)}const Ku={type:"type",logo:"logoImage",reward:"awardImage",award:"awardImage",title:"title",subtitle:"subtitle",content:"__media__",media:"__media__",btn_text:"btnText",btn_color:"btnColor",btn_text_color:"btnTextColor",btn_animation:"btnAnimation",cta:"btnText",question:"question",placeholder:"placeholder",helper:"helper",note:"note",error_empty:"emptyError",error_invalid:"invalidError"};function Ie(n,e){if(e==null)return n;if(Array.isArray(n)||Array.isArray(e)||typeof n!="object"||typeof e!="object"||n==null)return e;const t={...n};for(const[i,a]of Object.entries(e))t[i]=Ie(n==null?void 0:n[i],a);return t}function jn(n){if(!n)return null;if(!n.template){const s=Da[n.product||"artimind"],r=s!=null&&s.metaPixel?{metaPixel:s.metaPixel}:null;return{...n,vendor:Ie(r,n.vendor),siteName:n.webName||(s==null?void 0:s.siteName)||null,favicon:n.favicon||(s==null?void 0:s.favicon)||null,funnelId:n.id,conceptId:n.concept||null,styleId:n.style||null,templateId:null}}const e=St[n.template];if(!e)return console.warn(`[funnel] template "${n.template}" not found for funnel "${n.id}"`),null;let t={...e,id:n.id,kind:void 0,owner:n.owner||e.owner,style:n.style||null,screens:[...e.screens]};const i=n.overrides||{};i.title&&(t.title=i.title),i.theme&&(t.theme=i.theme),t=xi(t,{screens:i.screens}),t.payment=Ie(Ie(e.payment,i.payment),n.payment),t.tracking=Ie(Ie(e.tracking,i.tracking),n.tracking);const a=Da[n.product||e.product||"artimind"],o=a!=null&&a.metaPixel?{metaPixel:a.metaPixel}:null;return t.product=n.product||e.product||"artimind",t.vendor=Ie(Ie(Ie(o,e.vendor),i.vendor),n.vendor),t.siteName=n.webName||i.webName||e.webName||(a==null?void 0:a.siteName)||null,t.favicon=n.favicon||e.favicon||(a==null?void 0:a.favicon)||null,t.funnelId=n.id,t.templateId=e.id,t.conceptId=e.concept||e.id,t.styleId=n.style||null,t}const ju="reunion";function Qu(){const n=new URLSearchParams(location.search).get("funnel");if(n!=null&&n.startsWith("tpl:")&&St[n.slice(4)])return jn({...St[n.slice(4)],template:void 0});const e=Fe[n]||Fe[ju]||Fe.reunion;return jn(e)||jn(Fe.reunion)}function Ua(n){if(!n||typeof n!="object")return n;const e={...n},t=n.screen_type||n.type;t==="question"&&(e.type="engagement-question"),t==="showcase"&&(e.type="showcase"),n.video_url&&(e.video=n.video_url),n.video_first_frame&&(e.poster=n.video_first_frame),n.image_url&&(e.image=n.image_url),!e.image&&n.ani_image_url&&(e.image=n.ani_image_url),n.title_color&&(e.titleColor=n.title_color),n.subtitle_color&&(e.subtitleColor=n.subtitle_color),n.button_cta&&(e.btnText=n.button_cta),n.button_cta_background_color&&(e.btnColor=n.button_cta_background_color),n.button_cta_text_color&&(e.btnTextColor=n.button_cta_text_color),(n.error_empty||n.empty_error)&&(e.emptyError=n.error_empty||n.empty_error),(n.error_invalid||n.invalid_error)&&(e.invalidError=n.error_invalid||n.invalid_error);const i=Array.isArray(n.questions)?n.questions[0]:null;if(i&&(e.type=e.type||"engagement-question",i.question_text&&(e.question=i.question_text),Array.isArray(i.answers)&&(e.options=i.answers.map(a=>a.answer_text??a)),Array.isArray(i.default_answer)&&e.options)){const a=e.options.indexOf(i.default_answer[0]);a>=0&&(e.defaultOption=a)}for(const a of["screen_type","video_url","video_first_frame","image_url","ani_image_url","title_color","subtitle_color","button_cta","button_cta_background_color","button_cta_text_color","questions"])delete e[a];return e}function qu(n){if(!n)return null;const e=Object.keys(n).filter(i=>/^scr\d+_/.test(i));if(!e.length)return Array.isArray(n.screens)?{...n,screens:n.screens.map(Ua)}:n;const t={};for(const i of e){const a=i.match(/^scr(\d+)_(.+)$/),o=Number(a[1]),s=Ku[a[2]]||a[2];t[o]??(t[o]={}),s==="__media__"?/\.(mp4|webm|mov)(\?|$)/i.test(n[i])?t[o].video=n[i]:t[o].image=n[i]:t[o][s]=n[i]}for(const i of Object.keys(t))t[i]=Ua(t[i]);return{title:n.funnel_name,screensByIndex:t}}function xi(n,e){const t=qu(e);if(!t)return n;const i={...n,screens:[...n.screens]};if(t.title&&(i.title=t.title),t.theme&&(i.theme=t.theme),t.screensByIndex){for(const[a,o]of Object.entries(t.screensByIndex)){const s=Number(a)-1;i.screens[s]?i.screens[s]={...i.screens[s],...o}:i.screens.push({id:`scr${a}`,...o})}return i}if(Array.isArray(t.screens))for(const a of t.screens){if(!a||typeof a!="object")continue;const o=i.screens.findIndex(s=>s.id===a.id);o>=0?i.screens[o]={...i.screens[o],...a}:i.screens.push(a)}return i}async function _u(n){return null}function Ic(){const n=`${location.pathname} ${location.hash} ${location.search}`;return{test:/\/hiepnv-test(\/|\b)/.test(n)||/[?&#]hiepnv-test\b/.test(n),purchase:/\/purchase(\/|\b)/.test(n)||/[?&#]purchase\b/.test(n)}}async function $u(){var o;const n=Qu();let e=n;const t=new URLSearchParams(location.search).get("rc");if(t)try{const s=JSON.parse(decodeURIComponent(escape(atob(t))));e=xi(n,s)}catch(s){console.warn("[funnel] bad ?rc= override:",s==null?void 0:s.message)}else{const s=await Xu(n.funnelId||n.id);e=xi(n,s)}const i=await _u(e.funnelId||e.id);i&&(e.payment=Ie(e.payment,i));const a=Ic();if(e.testMode=a.test,a.test&&((o=e.payment)!=null&&o.monkey)){const s=e.payment.monkey,r=s.funnelSlug||e.funnelId||e.id;e.payment=Ie(e.payment,{monkey:{funnelSlug:s.funnelSlugTest||`${r}-test`}})}return e}const tn={sessionId:crypto.randomUUID(),startedAt:Date.now(),answers:{},currentIndex:0,discountPct:null,email:null};function Ze(){return tn}function Rn(n,e){tn.answers[n]=e}function em(n){tn.currentIndex=n}function tm(n){tn.discountPct=n}function Ac(n){tn.email=n}function nm(n,e){const t=document.createElement("section");t.className="flex h-full min-h-0 flex-1 flex-col gap-5 py-2",t.innerHTML=`
    ${n.eyebrowImage?`<img src="${im(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <header class="flex shrink-0 flex-col gap-2 text-center">
      ${n.subtitle?`<p class="t-muted t-body">${Qn(n.subtitle)}</p>`:""}
      <h1 class="t-title t-screen-title font-bold">
        ${Qn(n.question||"Tell us about you")}
      </h1>
    </header>
    <div class="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto" data-options data-stagger></div>
    <div class="shrink-0 pt-1">
      <button type="button" class="btn-primary" data-cta disabled>${Qn(n.cta||"Continue")}</button>
    </div>
  `;const i=t.querySelector("[data-options]"),a=t.querySelector("[data-cta]"),o=n.options||["Option A","Option B"],s=Number.isInteger(n.defaultOption)?n.defaultOption:0;let r=null;return o.forEach((l,d)=>{const c=typeof l=="string"?l:l.label,p=typeof l=="string"?l:l.value??l.label,f=document.createElement("button");f.type="button",f.className="btn-option shrink-0",f.textContent=c,f.onclick=()=>{r=p,i.querySelectorAll(".btn-option").forEach(u=>u.classList.toggle("selected",u===f)),a.disabled=!1},i.appendChild(f),d===s&&(r=p,f.classList.add("selected"),a.disabled=!1)}),a.onclick=()=>{r!=null&&(Rn(n.id,r),e({choice:r}))},t}function Qn(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function im(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}function am(n,e){const t=document.createElement("section");t.className="flex h-full min-h-0 flex-1 flex-col gap-5 py-2";const i=n.inputType||"text",a=!!n.optional,o=n.placeholder||(a?"Your answer (optional)":""),s=n.cta||"Continue";t.innerHTML=`
    ${n.eyebrowImage?`<img src="${Ja(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <header class="flex shrink-0 flex-col gap-2 text-center">
      <h1 class="t-title t-screen-title font-bold">
        ${Ft(n.question||"Enter your details")}
      </h1>
      ${n.subtitle?`<p class="t-muted t-body">${Ft(n.subtitle)}</p>`:""}
    </header>
    <form class="flex min-h-0 flex-1 flex-col gap-3" data-form novalidate>
      <input
        type="${i}"
        ${a?"":"required"}
        class="input-field"
        placeholder="${Ja(o)}"
        autocomplete="${om(i,n.name)}"
      />
      ${n.helper?`<p class="t-muted t-body">${Ft(n.helper)}</p>`:""}
      <p class="hidden text-sm" style="color:var(--c-danger)" data-error></p>
      <div class="mt-auto flex shrink-0 flex-col gap-2 pb-1">
        ${n.note?`<p class="t-faint t-small text-center">${Ft(n.note)}</p>`:""}
        <button type="submit" class="btn-primary">${Ft(s)}</button>
      </div>
    </form>
  `;const r=t.querySelector("[data-form]"),l=t.querySelector("[data-error]"),d=n.emptyError||(i==="email"?"We'd love to send your video to you — please add your email 💌":"Almost there — could you fill this in for us?"),c=n.invalidError||(i==="email"?"Hmm, that email looks a little off — mind double-checking it?":"That doesn’t look quite right — mind checking it again?");return r.onsubmit=p=>{p.preventDefault();const f=r.querySelector("input"),u=f.value.trim();if(!a){if(!u){l.textContent=d,l.classList.remove("hidden"),f.focus();return}if(!f.checkValidity()){l.textContent=c,l.classList.remove("hidden"),f.focus();return}}l.classList.add("hidden"),Rn(n.id,u),i==="email"&&u&&Ac(u),e({value:u,skipped:a&&!u})},t}function om(n,e){return n==="email"?"email":n==="tel"?"tel":e==="age"?"bday":"off"}function Ft(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ja(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}function sm(n,e){var l;const t=document.createElement("section");t.className="relative flex h-full min-h-0 flex-1 flex-col py-1";const i=(l=n.zones)!=null&&l.length?n.zones:["UPLOAD YOUR 1ST PHOTO","UPLOAD YOUR 2ND PHOTO"],a=n.cta||"CREATE NOW";t.innerHTML=`
    ${n.eyebrowImage?`<img src="${rm(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <div class="screen-scroll flex flex-col gap-4">
      <header class="flex flex-col gap-2 text-center">
        <h1 class="t-title t-screen-title font-bold">${Et(n.title||"Upload your photos")}</h1>
        ${n.subtitle?`<p class="t-muted t-body">${Et(n.subtitle)}</p>`:""}
      </header>
      <div class="grid shrink-0 grid-cols-2 gap-3" data-zones data-stagger></div>
      ${n.note?`<p class="t-title t-body shrink-0 text-center font-semibold">${Et(n.note)}</p>`:""}
    </div>
    <div class="cta-dock">
      <button type="button" class="btn-primary" data-cta data-cta-pulse>${Et(a)}</button>
    </div>
  `;const o=t.querySelector("[data-zones]"),s=t.querySelector("[data-cta]"),r=new Array(i.length).fill(null);return i.forEach((d,c)=>{const p=document.createElement("label");p.className="upload-zone upload-zone-tall p-3",p.innerHTML=`
      <input type="file" accept="image/*" class="hidden" data-input />
      <div class="flex flex-col items-center gap-3" data-placeholder>
        <span class="t-faint text-5xl font-light leading-none">+</span>
        <span class="t-muted t-body font-bold uppercase tracking-wide">${Et(d)}</span>
      </div>
      <img class="hidden h-full w-full rounded-xl object-cover" data-preview alt="Selected photo" />
      <span class="change-overlay">CHANGE<br/>PHOTO</span>
    `;const f=p.querySelector("[data-input]"),u=p.querySelector("[data-placeholder]"),b=p.querySelector("[data-preview]");f.onchange=()=>{var x;const g=(x=f.files)==null?void 0:x[0];g&&(r[c]=g.name,b.src=URL.createObjectURL(g),b.classList.remove("hidden"),u.classList.add("hidden"),p.classList.add("filled"))},o.appendChild(p)}),s.onclick=()=>{Rn(n.id,r),e({photos:r.filter(Boolean).length})},t}function Et(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function rm(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}const mn={title:"❤️ Recreate the moments you thought were gone forever",media:"assets/testimonials/fb-00.webp",cta:"Continue"};function lm(n,e){const t=document.createElement("section");t.className="flex h-full min-h-0 flex-1 flex-col gap-3 py-1";const i=n.title===void 0?mn.title:n.title;return t.innerHTML=`
    ${dm(n)}
    ${i?`
    <header class="flex shrink-0 flex-col gap-1.5 text-center">
      <h1 class="t-title t-display font-bold"${n.titleColor?` style="color:${ke(n.titleColor)}"`:""}>${qn(i)}</h1>
      ${n.body||n.subtitle?`<p class="t-muted t-body"${n.subtitleColor?` style="color:${ke(n.subtitleColor)}"`:""}>${qn(n.body||n.subtitle)}</p>`:""}
    </header>`:""}
    <div class="card-surface min-h-0 flex-1 overflow-hidden rounded-2xl">
      ${cm(n)}
    </div>
    <div class="shrink-0 pt-1">
      <button type="button" class="btn-primary" data-cta
        ${n.btnAnimation==="none"?"":"data-cta-pulse"}
        ${pm(n)}>${qn(n.btnText||n.cta||mn.cta)}</button>
    </div>
  `,t.querySelectorAll("img[data-media], video[data-media]").forEach(a=>{a.onerror=()=>{const o=document.createElement("img");o.src=mn.media,o.alt="",o.dataset.media="",o.className="h-full w-full rounded-2xl object-cover shadow-lg",a.replaceWith(o)}}),t.querySelectorAll("img[data-optional]").forEach(a=>{a.onerror=()=>a.remove()}),t.querySelector("[data-cta]").onclick=()=>e({}),t}function dm(n){if(n.eyebrowImage)return`<img src="${ke(n.eyebrowImage)}" alt="" data-optional
                 class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`;const e=[];return n.logoImage&&e.push(`<img src="${ke(n.logoImage)}" alt="Logo" data-optional class="eyebrow-img w-auto object-contain" />`),n.awardImage&&e.push(`<img src="${ke(n.awardImage)}" alt="Award" data-optional class="eyebrow-img w-auto object-contain" />`),e.length?`<div class="flex shrink-0 items-center justify-center gap-3">${e.join("")}</div>`:""}function cm(n){if(n.video)return`
      <video src="${ke(n.video)}"
             ${n.poster?`poster="${ke(n.poster)}"`:""}
             autoplay muted loop playsinline data-media
             class="h-full w-full rounded-2xl object-cover shadow-lg">
      </video>
    `;const e=n.image||mn.media,t=n.imageAspect==="natural"?"object-contain":"object-cover";return`
    <img src="${ke(e)}" alt="" data-media
         class="h-full w-full rounded-2xl ${t} shadow-lg" />
  `}function pm(n){const e=[];return n.btnColor&&e.push(`background:${ke(n.btnColor)}`),n.btnTextColor&&e.push(`color:${ke(n.btnTextColor)}`),e.length?`style="${e.join(";")}"`:""}function qn(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ke(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}function gm(n,e){const t=document.createElement("section");t.className="flex h-full min-h-0 flex-1 flex-col gap-4 py-2";const i=n.tasks||n.checklist||[],a=Number.isFinite(n.durationMs)?n.durationMs:4e3;t.innerHTML=`
    ${n.eyebrowImage?`<img src="${Ii(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <header class="flex shrink-0 flex-col gap-1.5 text-center">
      <h2 class="t-title t-screen-title font-bold">${_n(n.title||"Đang chuẩn bị cho bạn…")}</h2>
      ${n.body?`<p class="t-muted t-body">${_n(n.body)}</p>`:""}
    </header>
    <div class="card-surface min-h-0 flex-1 overflow-hidden rounded-2xl">
      ${fm(n)}
    </div>
    <div class="flex shrink-0 flex-col gap-3 pb-2" data-tasks>
      ${i.map((l,d)=>`
        <div class="flex flex-col gap-1.5" data-task="${d}">
          <div class="t-body flex items-center justify-between gap-2">
            <span class="t-title font-semibold">${_n(l)}</span>
            <span class="t-muted font-mono" data-pct>0%</span>
          </div>
          <div class="loading-bar-track"><div class="loading-bar-fill" data-fill></div></div>
        </div>`).join("")}
    </div>
  `;const s=new URLSearchParams(location.search).has("nostep"),r=[...t.querySelectorAll("[data-task]")];if(r.length){const l=a/r.length,d=c=>{if(c>=r.length){s||setTimeout(()=>e({}),350);return}const p=r[c],f=p.querySelector("[data-pct]"),u=p.querySelector("[data-fill]"),b=performance.now(),g=x=>{const B=Math.min(1,(x-b)/l),k=Math.floor(B*100);f.textContent=`${k}%`,u.style.width=`${k}%`,B<1?requestAnimationFrame(g):(f.textContent="100% ✅",d(c+1))};requestAnimationFrame(g)};d(0)}else s||setTimeout(()=>e({}),a);return t}function fm(n){return n.video?`<video src="${Ii(n.video)}" autoplay muted loop playsinline data-media
                   class="h-full w-full object-cover"></video>`:n.image?`<img src="${Ii(n.image)}" alt="" data-media class="h-full w-full object-cover" />`:`<div class="flex h-full items-center justify-center">
    <div class="h-14 w-14 animate-spin rounded-full border-4"
         style="border-color: var(--c-border); border-top-color: var(--c-gold)"></div>
  </div>`}function _n(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ii(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}function um(n,e){const t=document.createElement("section");t.className="flex h-full min-h-0 flex-1 flex-col gap-4 py-2";const i=n.counter??1486211;t.innerHTML=`
    ${n.eyebrowImage?`<img src="${Cc(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <div class="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 overflow-y-auto text-center">
      <div class="trust-counter" data-counter>0</div>
      <p class="t-title t-body max-w-[300px] font-semibold leading-snug">
        ${hn(n.counterLabel||"Families reunited with their loved ones through Artimind ✨")}
      </p>
      <div class="mx-auto my-1 h-px w-3/4" style="background: var(--c-border)"></div>
      ${Array.isArray(n.logos)&&n.logos.length?`
      <p class="t-muted t-body">${hn(n.mediaTitle||"Trusted by leading media:")}</p>
      <div class="flex flex-col items-center gap-3 pt-1" data-stagger>
        ${mm(n)}
      </div>`:""}
    </div>
    <div class="shrink-0 pt-1">
      <button type="button" class="btn-primary" data-cta data-cta-pulse>${hn(n.cta||"Continue")}</button>
    </div>
  `;const a=t.querySelector("[data-counter]");if(matchMedia("(prefers-reduced-motion: reduce)").matches)a.textContent=i.toLocaleString("en-US");else{const o={val:i*.86};a.textContent=Math.floor(o.val).toLocaleString("en-US"),vn.to(o,{val:i,duration:2.4,ease:"power2.out",onUpdate:()=>{a.textContent=Math.floor(o.val).toLocaleString("en-US")},onComplete:()=>{let s=i;setInterval(()=>{a.isConnected&&(s+=1,a.textContent=s.toLocaleString("en-US"))},3500)}})}return t.querySelector("[data-cta]").onclick=()=>e({}),t}function mm(n){return(Array.isArray(n.logos)?n.logos:[]).map(t=>/^(https?:\/\/|uploads\/|assets\/)/.test(t)?`<img src="${Cc(t)}" alt="" class="media-logo h-8 w-auto object-contain" />`:`<span class="media-logo text-xl font-bold">${hn(t)}</span>`).join("")}function hn(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Cc(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}function hm(n,e){const t=document.createElement("section");t.className="flex h-full min-h-0 flex-1 flex-col gap-4 py-2";const i=n.images||[];t.innerHTML=`
    ${n.eyebrowImage?`<img src="${Oa(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <header class="shrink-0 text-center">
      <h1 class="t-title t-screen-title font-bold">${Pa(n.title||"Millions shared #Artimind")}</h1>
    </header>
    <div class="carousel min-h-0 flex-1 items-center" data-carousel>
      ${i.map(d=>`
        <div class="card-surface flex h-full items-center">
          <img src="${Oa(d)}" alt="Customer post" loading="lazy"
               class="max-h-full w-full object-contain" />
        </div>`).join("")}
    </div>
    <div class="flex shrink-0 items-center justify-center gap-2" data-dots>
      ${i.map((d,c)=>`<span class="carousel-dot${c===0?" active":""}" data-dot="${c}"></span>`).join("")}
    </div>
    <div class="shrink-0">
      <button type="button" class="btn-primary" data-cta data-cta-pulse>${Pa(n.cta||"Continue")}</button>
    </div>
  `;const a=t.querySelector("[data-carousel]"),o=[...t.querySelectorAll("[data-dot]")];let s=0,r=!1;const l=d=>{s=(d+i.length)%i.length;const c=a.children[s];c&&a.scrollTo({left:c.offsetLeft-16,behavior:"smooth"})};if(a.addEventListener("scroll",()=>{const d=a.scrollLeft+a.clientWidth/2;let c=0,p=1/0;[...a.children].forEach((f,u)=>{const b=Math.abs(f.offsetLeft+f.clientWidth/2-d);b<p&&(p=b,c=u)}),s=c,o.forEach((f,u)=>f.classList.toggle("active",u===s))},{passive:!0}),a.addEventListener("pointerdown",()=>{r=!0},{passive:!0}),!matchMedia("(prefers-reduced-motion: reduce)").matches){const d=setInterval(()=>{if(!a.isConnected)return clearInterval(d);r||l(s+1)},3200)}return t.querySelector("[data-cta]").onclick=()=>e({viewed:s+1}),t}function Pa(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Oa(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}const Nt=[{label:"10%",value:10,color:"#F8545D",winner:!1},{label:"50%",value:50,color:"#FFC73B",winner:!0},{label:"x",value:0,color:"#7E0612",winner:!1},{label:"20%",value:20,color:"#F8545D",winner:!1},{label:"5%",value:5,color:"#7E0612",winner:!1},{label:"TRY",value:0,color:"#FFC73B",winner:!1}],sn=360/Nt.length,bm=6800,ym=4600;function xm(n,e){const t=document.createElement("section");t.className="wheel-screen flex h-full min-h-0 flex-1 cursor-pointer flex-col items-center justify-center gap-3 py-2 text-center",t.innerHTML=`
    ${n.eyebrowImage?`<img src="${Im(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
    <p class="t-muted t-body max-w-[320px] leading-relaxed">
      ${Ka(n.subtitle||"You've been chosen to spin our lucky wheel. Try your luck and claim your exclusive discount — only one spin per user.")}
    </p>

    <div class="wheel-box ready" data-wheel-box role="button" aria-label="Spin the lucky wheel" tabindex="0">
      <div class="wheel-pointer"></div>
      <div class="glow-ring"></div>
      <svg class="wheel" data-wheel viewBox="0 0 300 300"></svg>
    </div>
    <span class="wheel-sparkle"></span>
    <span class="wheel-sparkle"></span>
    <span class="wheel-sparkle"></span>
    <span class="wheel-sparkle"></span>

    <p class="wheel-tease" data-tease>Almost there...</p>
    <p class="tap-hint" data-tap-hint>Tap anywhere to spin</p>

    <div class="wheel-reveal" data-reveal>
      <p class="eyebrow">Success</p>
      <p class="amount" data-reveal-amount>50% OFF</p>
      <p class="note">Applied at checkout — limited to this session only.</p>
    </div>

    <div class="mt-2 hidden w-full max-w-[320px]" data-continue-wrap>
      <button type="button" class="btn-primary" data-continue>${Ka(n.cta||"Claim my discount")}</button>
    </div>

    <div class="confetti" data-confetti></div>
  `;const i=t.querySelector("[data-wheel]"),a=t.querySelector("[data-wheel-box]"),o=t.querySelector("[data-tap-hint]"),s=t.querySelector("[data-tease]"),r=t.querySelector("[data-reveal]"),l=t.querySelector("[data-reveal-amount]"),d=t.querySelector("[data-confetti]"),c=t.querySelector("[data-continue-wrap]"),p=150,f=150,u=140;let b="";Nt.forEach((w,h)=>{const m=h*sn,A=m+sn,y=(m-90)*Math.PI/180,C=(A-90)*Math.PI/180,I=p+u*Math.cos(y),G=f+u*Math.sin(y),Z=p+u*Math.cos(C),v=f+u*Math.sin(C),W=((m+A)/2-90)*Math.PI/180,S=p+u*.6*Math.cos(W),R=f+u*.6*Math.sin(W);b+=`
      <path
        d="M ${p} ${f} L ${I} ${G} A ${u} ${u} 0 0 1 ${Z} ${v} Z"
        fill="${w.color}" stroke="rgba(0,0,0,0.25)" stroke-width="1"
      />
      <text
        x="${S}" y="${R}"
        fill="#fff"
        font-size="${w.winner?22:16}"
        font-weight="${w.winner?800:700}"
        text-anchor="middle"
        dominant-baseline="middle"
        transform="rotate(${m+sn/2} ${S} ${R})"
        style="text-shadow: 0 1px 2px rgba(0,0,0,0.6)"
      >${w.label}</text>
    `}),b+=`
    <circle cx="${p}" cy="${f}" r="28" fill="#fff" />
    <circle cx="${p}" cy="${f}" r="10" fill="#42050A" />
  `,i.innerHTML=b;let g=!1,x=!1;function B(w,h){const m=document.createElement("span");m.className="click-ripple",m.style.setProperty("--x",`${w}px`),m.style.setProperty("--y",`${h}px`),document.body.appendChild(m),m.addEventListener("animationend",()=>m.remove(),{once:!0})}function k(w){if(g||x)return;g=!0,x=!0,t.classList.remove("cursor-pointer"),t.classList.add("spinning"),a.classList.remove("ready"),o.classList.add("hide"),typeof(w==null?void 0:w.clientX)=="number"&&typeof(w==null?void 0:w.clientY)=="number"&&B(w.clientX,w.clientY);const h=Nt.findIndex(G=>G.winner),m=(h+1)*sn,y=-(360*9+m-.8);a.classList.add("spinning"),i.style.transform="rotate(0deg)",i.style.transition="none",i.offsetWidth;const C=i.animate([{transform:"rotate(0deg)",easing:"cubic-bezier(0.08, 0.76, 0.02, 1)"},{transform:`rotate(${y}deg)`}],{duration:bm,fill:"forwards"}),I=setTimeout(()=>{s.classList.add("show")},ym);C.onfinish=()=>{clearTimeout(I),i.style.transform=`rotate(${y}deg)`,C.cancel(),a.classList.remove("spinning"),a.classList.add("done"),t.classList.remove("spinning"),t.classList.add("done"),s.classList.remove("show"),x=!1;const G=Nt[h];l.textContent=`${G.label} OFF`,r.classList.add("show"),Rn(n.id,G.value),tm(G.value),c.classList.remove("hidden"),d.innerHTML="";const Z=["#FFC73B","#F8545D","#FFFFFF","#FF8A1E","#22C55E"];for(let v=0;v<30;v++){const W=document.createElement("span");W.className="piece",W.style.left=`${(v*3.4+v%5*1.5)%100}%`,W.style.background=Z[v%Z.length],W.style.setProperty("--delay",`${v%8*120}ms`),W.style.setProperty("--dur",`${1800+v*137%900}ms`),W.style.setProperty("--rot",`${v*47%360}deg`),d.appendChild(W)}d.classList.add("show"),setTimeout(()=>d.classList.remove("show"),4e3)}}return t.addEventListener("pointerdown",w=>{w.target.closest("[data-continue]")||k(w)}),t.addEventListener("keydown",w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),k())}),t.querySelector("[data-continue]").onclick=()=>{const w=Nt.find(h=>h.winner);e({discount:w.value})},t}function Ka(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Im(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}let Ve=null;function Am(n,{muted:e}={}){var i;const t=(i=n==null?void 0:n.vendor)==null?void 0:i.metaPixel;!(t!=null&&t.id)||e||(Ve={id:String(t.id),includeValue:t.includeValue!==!1,firstPurchaseOnly:!!t.firstPurchaseOnly,events:t.events||{},_purchased:!1},function(a,o,s,r,l,d,c){a.fbq||(l=a.fbq=function(){l.callMethod?l.callMethod.apply(l,arguments):l.queue.push(arguments)},a._fbq||(a._fbq=l),l.push=l,l.loaded=!0,l.version="2.0",l.queue=[],d=o.createElement(s),d.async=!0,d.src=r,c=o.getElementsByTagName(s)[0],c.parentNode.insertBefore(d,c))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),window.fbq("init",Ve.id),window.fbq("track","PageView"))}function mt(n,e,t=!1){try{if(!Ve||!window.fbq)return;window.fbq(t?"trackCustom":"track",n,e||{})}catch{}}let ja=!1;function Cm(n,e){if(!Ve)return;if(n==="iap_view"||n.startsWith("funnel_")&&n.endsWith("_view")){mt("screen_complete",{screen_id:e.screen_id,screen_index:e.screen_index,funnel_id:e.funnel_id},!0),e.screen_index===1&&!ja&&(ja=!0,mt("second_screen_presented",{funnel_id:e.funnel_id},!0));return}if(n==="funnel_insert_continue"&&e.value&&!e.skipped&&/@/.test(String(e.value))){mt("CompleteRegistration",{content_name:e.funnel_id});return}if(n.startsWith("funnel_")&&(n.endsWith("_continue")||n.endsWith("_done"))&&n!=="funnel_question_continue"&&n!=="funnel_successfull_continue"){mt("button_click",{screen_id:e.screen_id,screen_index:e.screen_index,funnel_id:e.funnel_id},!0);return}if(n==="iap_checkout_open")mt("InitiateCheckout",{content_name:e.funnel_id,content_ids:[e.package_id].filter(Boolean)});else if(n==="iap_successfull"){const a=Ve.events.subscription_start||{};if(a.enabled===!1||a.browser===!1||Ve.firstPurchaseOnly&&Ve._purchased)return;Ve._purchased=!0;const o={content_name:e.funnel_id,content_ids:[e.purchase_package_id].filter(Boolean)};Ve.includeValue&&e.value!=null&&(o.value=e.value,o.currency=e.currency||"USD"),mt(a.event_name||"Purchase",o)}}const Qa={paywall:{view:"iap_view",cont:"iap_btn_click"},"engagement-question":{view:"funnel_question_view",cont:"funnel_question_continue"},"engagement-insert":{view:"funnel_insert_view",cont:"funnel_insert_continue"},showcase:{view:"funnel_showcase_view",cont:"funnel_showcase_continue"},loading:{view:"funnel_loading_view",cont:"funnel_loading_done"}},E={funnel_id:null,concept_id:null,style_id:null,mkter:null,session_id:null,total_screens:0,convertNumber:0,onPaywall:null,purchased:!1};let Ne="/__track",Ai=0;function wm(n){return String(n||"unknown").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function wc(n){if(Qa[n])return Qa[n];const e=wm(n);return{view:`funnel_${e}_view`,cont:`funnel_${e}_continue`}}function vm(n,e){var a,o;E.funnel_id=n.funnelId||n.id,E.concept_id=n.conceptId||n.templateId||null,E.style_id=n.styleId||n.style||null,E.mkter=n.owner||null,E.session_id=e.sessionId,E.total_screens=((a=n.screens)==null?void 0:a.length)??0,(o=n.tracking)!=null&&o.collectUrl&&(Ne=n.tracking.collectUrl),Ne&&!/^https?:\/\//.test(Ne)&&(Ne=null);const t=new URLSearchParams(location.search);(t.get("editor")==="1"||t.get("edpreview")==="1")&&(Ne=null,E.muted=!0),E.env=n.testMode?"test":"production",Am(n,{muted:!!E.muted||n.testMode}),j("funnel_start",{screens:E.total_screens});const i=()=>{!E.onPaywall||E.purchased||(j("iap_exit",{screen_id:E.onPaywall.id,screen_index:E.onPaywall.index,screen_type:"paywall",...Qi(E.onPaywall)}),E.onPaywall=null)};addEventListener("pagehide",i),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&i()})}function ji(n){return n.role||n.type}function vc(n){return{screen_id:n.id,screen_index:n.index,screen_type:ji(n)}}function Qi(n){return{convert_number:E.convertNumber,source:`iap_funnel_${E.funnel_id}_screen_${(n==null?void 0:n.index)??"return"}`,entitlement_id:"Artimind Pro",offering_id:"default"}}function qi(){return{convert_number:E.convertNumber,entitlement_id:"Artimind Pro",offering_id:"default"}}function Bm(n){Ai=Date.now();const e=ji(n);E.onPaywall=e==="paywall"?n:null,e==="paywall"&&(E.convertNumber+=1);const t=e==="paywall"?Qi(n):{};j(wc(e).view,{...vc(n),...t})}function km(n,e={}){const t=ji(n),i={...vc(n),dwell_ms:Ai?Date.now()-Ai:null,...e};t==="engagement-question"&&e.choice!==void 0&&(i.selected_value=e.choice,delete i.choice),t==="paywall"&&(Object.assign(i,Qi(n)),e.plan&&(i.package_id=e.plan,delete i.plan)),j(wc(t).cont,i),t==="paywall"&&(E.onPaywall=null)}function _i(){E.purchased=!0,E.onPaywall=null}function Gm(n){j("funnel_complete",{duration_ms:Date.now()-n.startedAt,answers_count:Object.keys(n.answers).length,discount_pct:n.discountPct??0})}function j(n,e={}){const t={event:n,ts:new Date().toISOString(),funnel_id:E.funnel_id,concept_id:E.concept_id,style_id:E.style_id,mkter:E.mkter,session_id:E.session_id,total_screens:E.total_screens,env:E.env||"production",...e};console.log(`[track] ${n}`,t),!E.muted&&(Hu(n,t),Cm(n,t),Zm(t))}function Zm(n){var e;if(Ne)try{const t=JSON.stringify(n)+`
`;((e=navigator.sendBeacon)==null?void 0:e.call(navigator,Ne,new Blob([t],{type:"application/x-ndjson"})))||fetch(Ne,{method:"POST",body:t,keepalive:!0}).catch(()=>{})}catch{}}let zt=null;function $i(n,{onClose:e}={}){wt();const t=document.createElement("div");return t.id="checkout-modal",t.style.cssText="position:fixed;inset:0;z-index:60;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(2px)",t.innerHTML=`
    <div data-modal-card style="width:100%;max-width:430px;max-height:88dvh;overflow-y:auto;
         border-radius:20px 20px 0 0;background:#fff;color:#1a1a1a;padding:16px 16px 24px;position:relative">
      <button type="button" data-modal-close aria-label="Close"
        style="position:absolute;top:10px;right:12px;font-size:20px;line-height:1;border:none;background:none;cursor:pointer;color:#888">✕</button>
      <h3 style="font-weight:700;font-size:16px;margin:2px 24px 12px 2px">${Wm(n||"Complete your purchase")}</h3>
      <div data-modal-body><div style="text-align:center;color:#888;padding:32px 0">Loading secure checkout…</div></div>
    </div>`,t.querySelector("[data-modal-close]").onclick=()=>{wt(),e==null||e()},t.addEventListener("click",i=>{i.target===t&&(wt(),e==null||e())}),document.body.appendChild(t),t}function ea(){return document.querySelector("#checkout-modal [data-modal-body]")}function Sm(n){zt=n}function wt(){var n;try{zt==null||zt()}catch{}zt=null,(n=document.getElementById("checkout-modal"))==null||n.remove()}function Wm(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const Bc=new Set(["jpy","krw","vnd","clp","huf"]);function nn(n){return!!(n&&n.apiBase&&n.publishableKey&&n.projectSlug&&n.funnelSlug)}function ta(n){return{"Content-Type":"application/json","x-publishable-key":n.publishableKey}}function Rm(n){if(!n)return"";const e=(n.currency||"usd").toLowerCase(),t=Bc.has(e)?n.unitAmount:n.unitAmount/100;try{return new Intl.NumberFormat("en-US",{style:"currency",currency:e.toUpperCase()}).format(t)}catch{return`${t} ${e.toUpperCase()}`}}function kc(n){return n!=null&&n.interval?String(n.interval).toLowerCase():"month"}let Yt=null;function Vn(n){if(!nn(n))return Promise.resolve(null);if(Yt)return Yt;const e=`${n.apiBase}/funnel/offer/${n.projectSlug}/${n.funnelSlug}`;return Yt=fetch(e,{headers:ta(n)}).then(async t=>{const i=await t.json().catch(()=>({}));if(!t.ok)throw new Error(i.message||`HTTP ${t.status}`);return i.data||null}).catch(t=>(console.warn("[monkey] loadOffer failed:",t==null?void 0:t.message),Yt=null,null)),Yt}async function Vm(n){const e=await Vn(n);if(!e||!Array.isArray(e.items)||!e.items.length)return null;const i=e.items.slice().sort((o,s)=>(o.sortOrder??0)-(s.sortOrder??0)).map(o=>{var d,c,p,f;const s=kc(o.price),r=/week/.test(s)?"/wk":/year/.test(s)?"/yr":/day/.test(s)?"/day":"/mo",l=(((d=o.price)==null?void 0:d.currency)||"usd").toLowerCase();return{id:o.id,label:o.displayName||((c=o.product)==null?void 0:c.name)||"Plan",price:Rm(o.price),amount:Bc.has(l)?(p=o.price)==null?void 0:p.unitAmount:(((f=o.price)==null?void 0:f.unitAmount)??0)/100,currency:l.toUpperCase(),period:r,offerItemId:o.id}});if(!i.length)return null;const a=i.find(o=>o.period==="/wk")||i[0];return a.featured=!0,a.badge="🔥 MOST POPULAR",i}async function Gc(n,e){var o;const t=await Vn(n);if(!t||!Array.isArray(t.items))return null;const i={week:"week",month:"month",year:"year"}[e];return((o=i&&t.items.find(s=>kc(s.price).indexOf(i)===0)||t.items.find(s=>s.id===e)||null)==null?void 0:o.id)||null}let rn=null;function Zc(){return window.Stripe?Promise.resolve():rn||(rn=new Promise((n,e)=>{const t=document.createElement("script");t.src="https://js.stripe.com/v3/",t.onload=n,t.onerror=()=>e(new Error("Stripe.js failed to load")),document.head.appendChild(t)}),rn)}async function Fm(n,e,t,{sessionId:i,customerEmail:a,onComplete:o}={}){var g;await Zc();const s=await Vn(n),r=s==null?void 0:s.stripePublishableKey;if(!r)throw new Error("Stripe key unavailable for this offer");const l=(e==null?void 0:e.offerItemId)||await Gc(n,e==null?void 0:e.id);if(!l)throw new Error("No matching plan in the offer");const d=`${location.origin}${location.pathname}?funnel=${encodeURIComponent(new URLSearchParams(location.search).get("funnel")||"")}&status=complete&plan=${encodeURIComponent((e==null?void 0:e.id)||"")}&sid=${encodeURIComponent(i||"")}&session_id={CHECKOUT_SESSION_ID}`,c=await fetch(`${n.apiBase}/funnel/checkout`,{method:"POST",headers:ta(n),body:JSON.stringify({offerItemId:l,uiMode:"embedded",returnUrl:d,...a?{customerEmail:a}:{}})}),p=await c.json().catch(()=>({}));if(!c.ok)throw new Error(p.message||`HTTP ${c.status}`);const f=(g=p.data)==null?void 0:g.clientSecret;if(!f)throw new Error("No clientSecret returned");const b=await window.Stripe(r).initEmbeddedCheckout({clientSecret:f,onComplete:()=>{try{o==null||o()}catch{}}});return t.innerHTML="",b.mount(t),{destroy:()=>{try{b.destroy()}catch{}}}}async function Em(n,e,{fail:t,sessionId:i,customerEmail:a}){var s;$i(`Complete your purchase — ${(e==null?void 0:e.label)||"plan"}`);const o=ea();try{await Zc();const r=await Vn(n),l=r==null?void 0:r.stripePublishableKey;if(!l)throw new Error("Stripe key unavailable for this offer");const d=(e==null?void 0:e.offerItemId)||await Gc(n,e==null?void 0:e.id);if(!d)throw new Error("No matching plan in the offer");const c=`${location.origin}${location.pathname}?funnel=${encodeURIComponent(new URLSearchParams(location.search).get("funnel")||"")}&status=complete&plan=${encodeURIComponent((e==null?void 0:e.id)||"")}&sid=${encodeURIComponent(i||"")}&session_id={CHECKOUT_SESSION_ID}`,p=await fetch(`${n.apiBase}/funnel/checkout`,{method:"POST",headers:ta(n),body:JSON.stringify({offerItemId:d,uiMode:"embedded",returnUrl:c,...a?{customerEmail:a}:{}})}),f=await p.json().catch(()=>({}));if(!p.ok)throw new Error(f.message||`HTTP ${p.status}`);const u=(s=f.data)==null?void 0:s.clientSecret;if(!u)throw new Error("No clientSecret returned");const g=await window.Stripe(l).initEmbeddedCheckout({clientSecret:u});if(Sm(()=>{try{g.destroy()}catch{}}),!document.getElementById("checkout-modal")){try{g.destroy()}catch{}return{ok:!1}}return o.innerHTML="",g.mount(o),{ok:!0,provider:"monkey"}}catch(r){return o&&(o.innerHTML=`<p style="color:#c0392b;margin:0;text-align:center;padding:24px 0">${String((r==null?void 0:r.message)||"Checkout failed.")}</p>`),t==null||t(r),{ok:!1,error:r}}}let ln=null;function Ym(n){if(window.paypal)return Promise.resolve();if(ln)return ln;const e=new URLSearchParams({"client-id":n.clientId,vault:"true",intent:"subscription"});return ln=new Promise((t,i)=>{const a=document.createElement("script");a.src=`https://www.paypal.com/sdk/js?${e}`,a.onload=t,a.onerror=()=>i(new Error("PayPal SDK failed to load")),document.head.appendChild(a)}),ln}async function Tm(n,e,{done:t,fail:i,sessionId:a}){var r;const o=(r=n==null?void 0:n.planIds)==null?void 0:r[e==null?void 0:e.id];if(!(n!=null&&n.clientId))return i==null||i(new Error("PayPal not configured")),{ok:!1};if(!o)return i==null||i(new Error(`No PayPal plan id for "${e==null?void 0:e.id}"`)),{ok:!1};$i(`Subscribe with PayPal — ${(e==null?void 0:e.label)||"plan"}`);const s=ea();try{return await Ym(n),s.innerHTML='<div data-paypal-buttons style="min-height:120px"></div>',await new Promise(l=>{window.paypal.Buttons({style:{layout:"vertical",shape:"rect",label:"subscribe"},createSubscription:(d,c)=>c.subscription.create({plan_id:o,custom_id:`s=${a||""}`}),onApprove:d=>{wt(),t==null||t({subscription_id:d.subscriptionID}),l({ok:!0,provider:"paypal",subscriptionId:d.subscriptionID})},onError:d=>{i==null||i(d),l({ok:!1,error:d})},onCancel:()=>{l({ok:!1,cancelled:!0})}}).render(s.querySelector("[data-paypal-buttons]"))})}catch(l){return s&&(s.innerHTML=`<p style="color:#c0392b;margin:0;text-align:center;padding:24px 0">${String((l==null?void 0:l.message)||"PayPal failed.")}</p>`),i==null||i(l),{ok:!1,error:l}}}let dn=null;function Lm(){return window.Paddle?Promise.resolve():dn||(dn=new Promise((n,e)=>{const t=document.createElement("script");t.src="https://cdn.paddle.com/paddle/v2/paddle.js",t.onload=n,t.onerror=()=>e(new Error("Paddle.js failed to load")),document.head.appendChild(t)}),dn)}let qa=!1;async function Nm(n,e,{done:t,fail:i,sessionId:a}){var s;const o=(s=n==null?void 0:n.priceIds)==null?void 0:s[e==null?void 0:e.id];if(!(n!=null&&n.clientToken))return i==null||i(new Error("Paddle not configured")),{ok:!1};if(!o)return i==null||i(new Error(`No Paddle price id for "${e==null?void 0:e.id}"`)),{ok:!1};try{return await Lm(),qa||((n.env||"sandbox")==="sandbox"&&window.Paddle.Environment.set("sandbox"),window.Paddle.Initialize({token:n.clientToken,eventCallback:r=>{var l;(r==null?void 0:r.name)==="checkout.completed"&&(wt(),t==null||t({transaction_id:(l=r.data)==null?void 0:l.transaction_id})),(r==null?void 0:r.name)==="checkout.error"&&(i==null||i(new Error(r.detail||"Paddle checkout error")))}}),qa=!0),window.Paddle.Checkout.open({items:[{priceId:o,quantity:1}],customData:{session_id:a||""}}),{ok:!0,provider:"paddle"}}catch(r){return i==null||i(r),{ok:!1,error:r}}}function an(n){return(n==null?void 0:n.payment)||{}}function zm(n){var a,o;const e=an(n),t=[];t.push({id:"card",label:"Card",live:nn(e.monkey)}),(a=e.paypal)!=null&&a.clientId&&t.push({id:"paypal",label:"PayPal",live:!0}),(o=e.paddle)!=null&&o.clientToken&&t.push({id:"paddle",label:"Paddle",live:!0});const i=Array.isArray(e.providers)?e.providers:null;return i?t.filter(s=>i.includes(s.id)):t}async function Mm(n){const e=an(n);return nn(e.monkey)?Vm(e.monkey):null}function Xm(n){return nn(an(n).monkey)}async function Hm(n,e,t,{screen:i}={}){const a=an(n),o=Ze();j("iap_checkout_open",{provider:"card",via:"inline_embed",package_id:e==null?void 0:e.id,discount_pct:o.discountPct??0,screen_id:i==null?void 0:i.id,screen_index:i==null?void 0:i.index});const s=typeof(e==null?void 0:e.amount)=="number"?e.amount:/^\$([\d.]+)$/.exec(String((e==null?void 0:e.price)||""))?parseFloat(RegExp.$1):void 0,r=o.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)?o.email:void 0;return Fm(a.monkey,e,t,{sessionId:o.sessionId,customerEmail:r,onComplete:()=>{_i();try{sessionStorage.setItem("fm_paid_fired","1")}catch{}j("iap_successfull",{provider:"card",via:"stripe_oncomplete",purchase_package_id:e==null?void 0:e.id,discount_pct:o.discountPct??0,value:s,currency:(e==null?void 0:e.currency)||"USD",...qi()})}})}async function Dm(n,{provider:e,plan:t,screen:i}){const a=an(n),o=Ze();j("iap_checkout_open",{provider:e,package_id:t==null?void 0:t.id,discount_pct:o.discountPct??0,screen_id:i==null?void 0:i.id,screen_index:i==null?void 0:i.index});const s=l=>{_i();const d=/^\$([\d.]+)$/.exec(String((t==null?void 0:t.price)||"").trim());j("iap_successfull",{provider:e,purchase_package_id:t==null?void 0:t.id,discount_pct:o.discountPct??0,value:typeof(t==null?void 0:t.amount)=="number"?t.amount:d?parseFloat(d[1]):void 0,currency:"USD",...qi(),...l})},r=l=>{j("confirm_purchased_fail",{provider:e,package_id:t==null?void 0:t.id,msg:String((l==null?void 0:l.message)||l).slice(0,100),code:(l==null?void 0:l.code)||(l==null?void 0:l.name)||"unknown"})};try{return e==="paypal"?await Tm(a.paypal,t,{done:s,fail:r,sessionId:o.sessionId}):e==="paddle"?await Nm(a.paddle,t,{done:s,fail:r,sessionId:o.sessionId}):nn(a.monkey)?await Em(a.monkey,t,{done:s,fail:r,sessionId:o.sessionId,customerEmail:o.email||void 0}):Um(t,{done:s})}catch(l){throw r(l),l}}function Um(n,{done:e}){return new Promise(t=>{$i(`Complete your purchase — ${(n==null?void 0:n.label)||"plan"}`),ea().innerHTML=`
      <div class="flex flex-col items-center gap-3 py-8 text-center">
        <div class="text-4xl">🧪</div>
        <p class="t-title font-semibold">Mock checkout (no provider configured)</p>
        <p class="t-muted text-sm">Simulating payment…</p>
      </div>`,setTimeout(()=>{wt(),e({mock:!0}),t({ok:!0,provider:"mock"})},1200)})}function Jm(n,e){const t=new URLSearchParams(location.search);if(t.get("status")!=="complete")return!1;_i();let i=!1;try{i=sessionStorage.getItem("fm_paid_fired")==="1",sessionStorage.removeItem("fm_paid_fired")}catch{}i||j("iap_successfull",{provider:"card",purchase_package_id:t.get("plan")||null,checkout_session:t.get("session_id")||null,via:"embedded_return",...qi()});try{t.delete("status"),t.delete("session_id"),t.delete("plan");const a=t.toString();history.replaceState(null,"",location.pathname+(a?`?${a}`:""))}catch{}return e({provider:"Stripe"}),!0}const Pm=[{id:"week",label:"Weekly",price:"$9.99",period:"/wk",featured:!0,badge:"🔥 MOST POPULAR"},{id:"month",label:"Monthly",price:"$19.99",period:"/mo"},{id:"year",label:"Yearly",price:"$49.99",period:"/yr"}];function Om(n,e){var m,A,y,C,I,G,Z;const t=document.createElement("section");t.className="relative flex h-full min-h-0 flex-1 flex-col gap-3 py-1";const i=n.funnel||{};let a=$a((m=n.plans)!=null&&m.length?n.plans:Pm),o=(a.find(v=>v.featured)??a[0]).id;t.innerHTML=`
    ${_m(n)}
    <div class="screen-scroll flex flex-col gap-4">
      <header class="flex flex-col gap-2 text-center">
        ${n.eyebrowImage?`<img src="${xt(n.eyebrowImage)}" alt="" class="eyebrow-img mx-auto w-auto shrink-0 object-contain" />`:""}
        ${n.eyebrow?`<p class="t-faint t-small font-bold uppercase tracking-widest">${X(n.eyebrow)}</p>`:""}
        <h1 class="t-title t-screen-title font-bold">${X(n.title||"Start your free trial")}</h1>
        ${n.body?`<p class="t-muted t-body">${X(n.body)}</p>`:""}
      </header>
      ${n.image?`<img src="${xt(n.image)}" alt="" data-media class="max-h-[24dvh] w-full rounded-2xl object-cover shadow-lg" />`:""}
      ${(A=n.benefits)!=null&&A.length?`<ul class="t-body flex flex-col gap-2" data-stagger>
              ${n.benefits.map(v=>`<li class="t-muted flex items-start gap-2"><span style="color:var(--c-gold)">✓</span>${X(v)}</li>`).join("")}
            </ul>`:""}
      <div class="flex flex-col gap-3 pt-1" data-plans data-stagger></div>

      ${n.payment?qm():""}

      ${(y=n.fullAccess)!=null&&y.length?`<div class="flex flex-col gap-2 pt-2">
              <h2 class="t-title t-screen-title text-center font-bold">✨ Your Full Access Pass</h2>
              <ul class="t-body flex flex-col gap-2 pt-1">
                ${n.fullAccess.map(v=>`<li class="t-title flex items-start gap-2 font-semibold"><span>✓</span>${X(v)}</li>`).join("")}
              </ul>
            </div>`:""}
      ${n.moneyBack?`<div class="flex flex-col items-center gap-2 pt-3 text-center">
              <div class="text-5xl">🛡️</div>
              <h2 class="t-title t-screen-title font-bold">${X(n.moneyBack.title||"14-Day Money-Back Guarantee")}</h2>
              ${n.moneyBack.body?`<p class="t-muted t-body">${X(n.moneyBack.body)}</p>`:""}
              ${n.moneyBack.body2?`<p class="t-muted t-body">${X(n.moneyBack.body2)}</p>`:""}
            </div>`:""}
      ${n.templatesTitle||n.templatesMedia?`<div class="flex flex-col gap-3 pt-3">
              ${n.templatesTitle?`<h2 class="t-title t-screen-title text-center font-bold">${X(n.templatesTitle)}</h2>`:""}
              ${Km(n)}
            </div>`:""}
      ${n.rating?`<div class="flex flex-col items-center gap-1 pt-2 text-center">
              <p class="t-title t-body font-semibold">${X(n.rating)}</p>
              ${n.ratingSub?`<p class="t-title t-screen-title font-bold">${X(n.ratingSub)}</p>`:""}
            </div>`:""}
      <footer class="flex flex-col items-center gap-2 pb-4 pt-4 text-center">
        <p class="t-title text-xl font-bold">🦋 artimind</p>
        ${(n.footerLinks||[]).map(v=>`<a href="#" class="t-muted t-body underline">${X(v)}</a>`).join("")}
        ${n.supportEmail?`<p class="t-faint t-small pt-1">Need help?<br/><a class="t-muted underline" href="mailto:${xt(n.supportEmail)}">${X(n.supportEmail)}</a></p>`:""}
      </footer>
    </div>

    <div class="cta-dock">
      <button type="button" class="btn-primary" data-cta data-cta-pulse>
        ${X(n.cta||"Continue")}
      </button>
      <p class="t-faint pt-2 text-center text-xs">
        ${X(n.disclaimer||"Cancel anytime in Settings.")}
      </p>
    </div>
  `;const s=t.querySelector("[data-plans]"),r=()=>{s.innerHTML="";for(const v of a){const W=document.createElement("button");W.type="button",W.dataset.plan=v.id,W.className="relative rounded-2xl border-2 px-4 py-3.5 text-left transition",W.innerHTML=`
        ${v.badge?`<div class="absolute -top-2.5 left-4 rounded-full px-2 py-0.5 text-[11px] font-bold" style="background: var(--c-gold); color: #42050A">${X(v.badge)}</div>`:""}
        <div class="flex items-center justify-between gap-2">
          <span data-check class="hidden h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style="background: var(--c-gold); color: #42050A">✓</span>
          <div class="mr-auto">
            <div class="t-title text-base font-semibold">${X(v.label)}</div>
            <div class="flex items-baseline gap-2">
              ${v.was?`<span class="t-faint text-sm line-through">${X(v.was)}</span>`:""}
              <span class="t-title text-base font-semibold">${X(v.price)}<span class="t-faint text-sm font-normal">${X(v.period||"")}</span></span>
            </div>
          </div>
          ${v.perDay?`<div class="shrink-0 rounded-lg px-3 py-1.5 text-center" data-perday
                     style="background: var(--c-surface-2); color: #fff">
                   <span class="text-lg font-extrabold">${X(v.perDay)}</span>
                   <span class="block text-[10px] font-semibold opacity-85">per day</span>
                 </div>`:""}
        </div>
      `,s.appendChild(W)}d()},l=()=>{var R;const v=a.find(F=>F.id===o),W=t.querySelector("[data-summary-plan]");if(!v||!W)return;const S=((R=t.querySelector("[data-country]"))==null?void 0:R.value)||"Vietnam";W.textContent=`${v.label} plan`,t.querySelector("[data-summary-price]").textContent=`${v.price}${v.period||""}`,t.querySelector("[data-summary-tax]").textContent=Qm[S]||"tax included"},d=()=>{s.querySelectorAll("[data-plan]").forEach(v=>{const W=v.dataset.plan===o;v.style.borderColor=W?"var(--c-gold)":"var(--c-border)",v.style.background=W?"color-mix(in srgb, var(--c-gold) 12%, transparent)":"var(--c-surface)",v.style.boxShadow=W?"0 0 0 1px var(--c-gold)":"none";const S=v.querySelector("[data-check]");S&&(S.classList.toggle("hidden",!W),S.classList.toggle("flex",W));const R=v.querySelector("[data-perday]");R&&(R.style.background=W?"var(--c-danger)":"var(--c-surface-2)")}),l()};s.addEventListener("click",v=>{const W=v.target.closest("[data-plan]");W&&(o=W.dataset.plan,j("funnel_plan_select",{package_id:o,screen_id:n.id,screen_index:n.index}),d())}),r(),a.some(v=>v.offerItemId)||Mm(i).then(v=>{!(v!=null&&v.length)||!t.isConnected||(a=$a(v),o=(a.find(W=>W.featured)??a[0]).id,r())}).catch(()=>{});const p=()=>a.find(v=>v.id===o)||a[0],f=(v,W)=>{Dm(i,{provider:v,plan:p(),screen:n}).then(S=>{if(S!=null&&S.ok&&S.provider!=="monkey"){if(S.provider==="paddle")return;e({plan:o,via:W,purchased:!0,provider:S.provider})}}).catch(()=>{})},u=t.querySelector("[data-pay]");let b=null,g=0;const x=async()=>{const v=++g,W=u.querySelector("[data-stripe-inline]");if(W){b==null||b.destroy(),b=null,W.innerHTML='<div style="text-align:center;color:#888;padding:28px 0;background:#fff;border-radius:14px">Loading secure checkout…</div>';try{const S=await Hm(i,p(),W,{screen:n});if(v!==g||!t.isConnected){S.destroy();return}b=S}catch(S){if(v!==g)return;j("confirm_purchased_fail",{provider:"card",package_id:o,via:"inline_mount",msg:String((S==null?void 0:S.message)||"mount failed").slice(0,100),code:(S==null?void 0:S.code)||"mount_error"}),W.innerHTML=`
        <div style="background:#fff;border-radius:14px;padding:16px;color:#1a1a1a">
          <p style="margin:0 0 4px;font-weight:700;color:#c0392b">Không mở được cổng thanh toán</p>
          <p style="margin:0 0 10px;font-size:13px;color:#555">${X(String((S==null?void 0:S.message)||"Checkout unavailable"))}</p>
          <p style="margin:0 0 6px;font-size:13px;color:#333">Vui lòng nhập lại email để thử lại:</p>
          <input data-retry-email type="email" placeholder="you@example.com"
            value="${xt(Ze().email||"")}"
            style="width:100%;border:1px solid #ccc;border-radius:9px;padding:10px 12px;font-size:14px;margin-bottom:8px;box-sizing:border-box" />
          <p data-retry-err style="display:none;margin:0 0 8px;font-size:12px;color:#c0392b"></p>
          <button data-retry-btn type="button"
            style="width:100%;background:#111;color:#fff;border:none;border-radius:9px;padding:11px 0;font-weight:700;cursor:pointer">Thử lại thanh toán</button>
        </div>`;const R=W.querySelector("[data-retry-email]"),F=W.querySelector("[data-retry-err]");W.querySelector("[data-retry-btn]").onclick=()=>{const Y=R.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Y)){F.textContent="Email chưa hợp lệ — kiểm tra lại giúp mình nhé.",F.style.display="block",R.focus();return}Ac(Y),j("funnel_insert_continue",{screen_id:"paywall-email-retry",screen_index:n.index,screen_type:"engagement-insert",value:Y,retry:!0}),x()}}}},B=n.payment&&u&&Xm(i);if(B){u.innerHTML='<div data-stripe-inline style="min-height:340px"></div>',x(),s.addEventListener("click",S=>{S.target.closest("[data-plan]")&&x()}),(C=t.querySelector(".cta-dock"))==null||C.remove();const v=t.querySelector(".screen-scroll");v&&(v.style.paddingBottom="24px");let W=!1;window.addEventListener("blur",()=>{if(W||!t.isConnected)return;const S=document.activeElement;S&&S.tagName==="IFRAME"&&u.contains(S)&&(W=!0,j("iap_btn_click",{screen_id:n.id,screen_index:n.index,screen_type:"paywall",package_id:o,via:"stripe_inline"}))})}const k=t.querySelector("[data-card]");if(k){k.addEventListener("input",()=>{k.value=k.value.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()});const v=t.querySelector("[data-exp]");v.addEventListener("input",()=>{let S=v.value.replace(/\D/g,"").slice(0,4);v.value=S.length>2?`${S.slice(0,2)} / ${S.slice(2)}`:S}),t.querySelector("[data-subscribe]").onclick=()=>f("card","subscribe_form"),t.querySelectorAll("[data-wallet]").forEach(S=>{S.onclick=()=>f("card",S.dataset.wallet)}),(I=t.querySelector("[data-country]"))==null||I.addEventListener("change",l),l();const W=zm(i).filter(S=>S.id!=="card"&&S.live);if(W.length){const S=document.createElement("div");S.className="flex flex-col gap-2";for(const Y of W){const P=document.createElement("button");P.type="button",P.className="w-full rounded-xl py-3.5 text-base font-semibold",Y.id==="paypal"?(P.style.cssText="background:#FFC439;color:#111",P.innerHTML='<i>Pay</i><i style="color:#0070BA">Pal</i>'):(P.style.cssText="background:#FDDD35;color:#111",P.textContent="Paddle"),P.onclick=()=>f(Y.id,Y.id),S.appendChild(P)}const R=(G=t.querySelector("[data-wallet]"))==null?void 0:G.parentElement;R==null||R.insertBefore(S,((Z=R.querySelector("[data-card]"))==null?void 0:Z.closest("div"))||null);const F=R==null?void 0:R.querySelector("[data-pay-divider]");F&&R.insertBefore(S,F)}}const w=t.querySelector("[data-countdown]");if(w){let v=(n.countdownMin??15)*60;const W=()=>{const R=String(Math.floor(v/60)).padStart(2,"0"),F=String(v%60).padStart(2,"0");w.textContent=`${R}:${F}`};W();const S=setInterval(()=>{if(w.isConnected===!1&&w.ownerDocument.contains(w)===!1&&v<(n.countdownMin??15)*60){clearInterval(S);return}if(v<=0)return clearInterval(S);v-=1,W()},1e3)}const h=t.querySelector("[data-cta]");return h&&(h.onclick=()=>{B?(j("funnel_plan_select",{package_id:o,via:"dock_cta_scroll"}),u.scrollIntoView({behavior:"smooth",block:"start"})):n.payment?f("card","dock_cta"):e({plan:o,via:"dock_cta"})}),t}function Km(n){const e=n.templatesMedia;return e?/\.(mp4|webm|mov)(\?|$)/i.test(e)?`<video src="${xt(e)}" autoplay muted loop playsinline data-media
              class="max-h-[32dvh] w-full rounded-2xl object-cover shadow-lg"></video>`:`<img src="${xt(e)}" alt="" data-media class="max-h-[32dvh] w-full rounded-2xl object-cover shadow-lg" />`:""}const _a={"/wk":7,"/mo":30,"/yr":365,week:7,month:30,year:365};function Sc(n){if(typeof n.amount=="number")return n.amount;const e=/^\$([\d]+(?:\.[\d]{1,2})?)$/.exec(String(n.price||"").trim());return e?parseFloat(e[1]):null}function jm(n){if(n.perDay)return n.perDay;const e=Sc(n),t=_a[n.period]||_a[n.id]||null;if(!(e==null||!t))return`$${(e/t).toFixed(2)}`}function $a(n){return n.map(e=>{const t=Sc(e),i={...e,...t!=null?{amount:t}:{}};return t!=null&&!i.price&&(i.price=`$${t.toFixed(2)}`),i.perDay=jm(i),i})}const Qm={Vietnam:"incl. 8% VAT","United States":"incl. sales tax","United Kingdom":"incl. 20% VAT",Australia:"incl. 10% GST","Other…":"tax included"};function cn(n,e,t="#fff"){return`<span class="rounded px-1.5 py-0.5 text-[10px] font-extrabold" style="background:${e};color:${t}">${n}</span>`}function qm(){return`
    <div class="pay-card flex flex-col gap-3" data-pay>
      <button type="button" data-wallet="apple_pay"
        class="w-full rounded-xl bg-black py-3.5 text-base font-semibold text-white"> Pay</button>
      <button type="button" data-wallet="google_pay"
        class="w-full rounded-xl border border-gray-300 bg-white py-3.5 text-base font-semibold text-gray-800">
        <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span> Pay</button>
      <div class="flex items-center gap-3 text-xs text-gray-400" data-pay-divider>
        <span class="h-px flex-1 bg-gray-200"></span>or pay with card<span class="h-px flex-1 bg-gray-200"></span>
      </div>
      <div>
        <div class="pay-label">Card number</div>
        <div class="relative">
          <input class="pay-input pr-32" data-card inputmode="numeric" placeholder="1234 1234 1234 1234" />
          <span class="absolute right-2.5 top-1/2 flex -translate-y-1/2 gap-1">
            ${cn("VISA","#1A1F71")}${cn("MC","#EB001B")}${cn("AMEX","#2E77BC")}${cn("JCB","#0B4EA2")}
          </span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <div class="pay-label">Expiration date</div>
          <input class="pay-input" data-exp inputmode="numeric" placeholder="MM / YY" />
        </div>
        <div>
          <div class="pay-label">Security code</div>
          <input class="pay-input" inputmode="numeric" maxlength="4" placeholder="CVC" />
        </div>
      </div>
      <div>
        <div class="pay-label">Country</div>
        <select class="pay-input" data-country>
          <option selected>Vietnam</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Australia</option>
          <option>Other…</option>
        </select>
      </div>
      <div class="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2.5">
        <span class="text-sm font-semibold text-gray-700" data-summary-plan>—</span>
        <span class="text-right text-sm">
          <span class="font-bold text-gray-900" data-summary-price>—</span>
          <span class="block text-[11px] text-gray-500" data-summary-tax></span>
        </span>
      </div>
      <button type="button" class="pay-subscribe" data-subscribe>SUBSCRIBE</button>
      <p class="text-center text-xs text-gray-500">Your payment information is secure with SSL/TLS encryption</p>
    </div>
  `}function _m(n){return n.countdownMin?`
    <div class="shrink-0 rounded-xl px-4 py-2.5 text-center text-sm font-semibold"
         style="background: var(--c-danger); color: #fff">
      ${X(n.countdownText||"Offer ends in:")} <span data-countdown class="font-mono font-bold">15:00</span>
    </div>
  `:""}function X(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function xt(n){return String(n).replace(/["']/g,e=>({'"':"&quot;","'":"&#39;"})[e])}const $m=["Remember the email you used {{email}}","Click the button below to download the app",'Open the app and tap "Have an account? Sign in"',"Enter the email that you used for signing up {{email}}"];function eh(n,e){var r;const t=document.createElement("section");t.className="relative flex h-full min-h-0 flex-1 flex-col py-2";const a=Ze().email||"",o=a?`<span class="rounded-md px-1.5 py-0.5 font-semibold" style="background:rgba(255,199,59,.18);color:var(--c-gold)">${ht(a)}</span>`:"",s=((r=n.steps)!=null&&r.length?n.steps:$m).map(l=>ht(String(l)).replace("{{email}}",o||"your email"));return t.innerHTML=`
    <div class="screen-scroll flex flex-col gap-5" style="padding-bottom:116px">
      <header class="flex flex-col items-center gap-2 pt-6 text-center">
        <div class="text-5xl">🎉</div>
        <h1 class="t-title t-screen-title font-bold">${ht(n.title||"Just one more step!")}</h1>
        ${n.body?`<p class="t-muted t-body">${ht(n.body)}</p>`:""}
      </header>
      <ol class="flex flex-col gap-3" data-stagger>
        ${s.map((l,d)=>`
          <li class="card-surface flex items-start gap-3 rounded-2xl p-3.5">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style="background:var(--c-gold);color:#42050A">${d+1}</span>
            <span class="t-title t-body pt-0.5">${l}</span>
          </li>`).join("")}
      </ol>
      ${n.note?`<p class="t-faint text-center text-xs">${ht(n.note)}</p>`:""}
    </div>
    <div class="cta-dock">
      <button type="button" class="btn-primary" data-cta data-cta-pulse>${ht(n.cta||"Download")}</button>
      <p class="t-faint pt-2 text-center text-xs">⭐️ 4.7 Average rating on App Store</p>
    </div>
  `,t.querySelector("[data-cta]").onclick=()=>{j("funnel_successfull_continue",{screen_id:n.id,screen_index:n.index,screen_type:"successfull",via:"download_app"}),n.ctaUrl&&(location.href=n.ctaUrl)},t}function ht(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function th(n,e){const t=document.createElement("section");if(t.className="relative flex h-full min-h-0 flex-1 flex-col",n.url)return t.style.cssText="position:fixed;inset:0;z-index:1;background:#fff",t.innerHTML=`<iframe src="${ih(n.url)}" title="imported funnel"
        style="border:0;width:100vw;height:100dvh;display:block;background:#fff"
        loading="lazy" referrerpolicy="no-referrer"></iframe>`,t;t.innerHTML=`
    <div class="screen-scroll" style="padding-bottom:96px">${n.html||'<p class="t-muted" style="padding:24px;color:#8a8f9c">Màn import trống — mở lại Import.</p>'}</div>
    <div class="cta-dock"><button type="button" class="btn-primary" data-cta data-cta-pulse>${nh(n.cta||"Continue")}</button></div>`;const i=t.querySelector("[data-cta]");return i&&(i.onclick=()=>e({})),t}function nh(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ih(n){return String(n).replace(/"/g,"&quot;")}const ah={"engagement-question":nm,"engagement-insert":am,"engagement-upload":sm,showcase:lm,loading:gm,trust:um,"testimonial-carousel":hm,wheel:xm,paywall:Om,successfull:eh,raw:th},eo={"reunion-dark":"#0a0203",light:"#f8fafc"};let Ae=null,pe=[];const na=document.getElementById("app");async function oh(){Ae=await $u(),pe=Ae.screens;const n=Ae.theme||"light";document.body.dataset.theme=n,document.title=Ae.webName||Ae.siteName||"Artimind";const e=Ae.favicon;if(e){const a=document.querySelector('link[rel="icon"]')||document.head.appendChild(Object.assign(document.createElement("link"),{rel:"icon"}));a.href=e}const t=document.querySelector('meta[name="theme-color"]');if(t&&(t.content=eo[n]||eo.light),!pe.length){na.innerHTML='<div class="m-auto t-muted">Empty funnel — edit src/config/funnels/*.json</div>';return}vm(Ae,Ze());const i=pe.findIndex(a=>a.type==="successfull");if(!Jm(Ae,a=>i>=0?dt(i):ia(a))){if(Ic().purchase){const a=pe.findIndex(o=>o.type==="paywall");if(a>=0)return dt(a)}dt(0)}}function sh(){return{funnel:Ae,screens:pe,render:dt,finishSuccess:ia,currentIndex:()=>Ze().currentIndex,applyScreenPatch(n,e){const t=pe.findIndex(i=>i.id===n);return t<0?!1:(pe[t]={...pe[t],...e},Ze().currentIndex===t&&dt(t),!0)}}}function dt(n){if(n>=pe.length)return lh();em(n);const e={...pe[n],index:n,total:pe.length,funnel:Ae},t=ah[e.type];if(!t)return console.warn(`No renderer for screen type "${e.type}"`),to({skipped:!0});Bm(e);const i=t(e,to);na.replaceChildren(i),rh(i)}function rh(n){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=vn.timeline({defaults:{ease:"power2.out",duration:.5}});if(e.from(n,{autoAlpha:0,duration:.3}),!n.classList.contains("wheel-screen")){const a=[...n.children].filter(s=>!s.classList.contains("cta-dock")&&!s.hasAttribute("data-stagger"));a.length&&e.from(a,{y:22,autoAlpha:0,stagger:.07,clearProps:"all"},"<0.05"),n.querySelectorAll("[data-stagger]").forEach(s=>{s.children.length&&e.from([...s.children],{y:16,autoAlpha:0,stagger:.06,clearProps:"all"},"<0.12")});const o=n.querySelector(".cta-dock");o&&e.from(o,{y:28,autoAlpha:0,clearProps:"all"},"<0.1")}const t=n.querySelector("[data-media]");t&&e.from(t,{scale:1.06,duration:1.1,ease:"power3.out",clearProps:"scale"},.1);const i=n.querySelector("[data-cta-pulse]");i&&vn.to(i,{scale:1.025,duration:.85,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:1.2})}function to(n){const e=Ze(),t={...pe[e.currentIndex],index:e.currentIndex};km(t,n||{}),t.type==="wheel"&&n&&n.discount!==void 0&&j("funnel_wheel_spin",{screen_id:t.id,screen_index:t.index,discount_pct:n.discount}),dt(e.currentIndex+1)}function lh(){const n=Ze();Gm(n);const e=pe.findIndex(t=>t.type==="successfull");return e>=0?dt(e):ia({})}function ia(n={}){const e=Ze();na.innerHTML=`
    <section class="m-auto flex flex-col items-center gap-4 py-12 text-center">
      <div class="text-5xl">👑</div>
      <h2 class="t-title text-2xl font-bold">Payment received — welcome!</h2>
      <p class="t-muted">Your plan is active. Check your email for the receipt${n.provider?` (via ${n.provider})`:""}.</p>
      <p class="t-faint text-sm">Session: <code class="card-surface px-2 py-1">${e.sessionId.slice(0,8)}</code></p>
    </section>
  `}const $n=[{id:"iphone-se",label:"iPhone SE",w:375,h:667},{id:"iphone-11",label:"iPhone 11",w:414,h:896},{id:"iphone-12",label:"iPhone 12",w:390,h:844},{id:"iphone-13",label:"iPhone 13",w:390,h:844},{id:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932},{id:"pixel-7",label:"Pixel 7",w:412,h:915}],no="funnel-editor-device",io=54,Wc=340,dh=["title","cta","eyebrowImage"],ch=["title","subtitle","body","eyebrow","question","placeholder","helper","note","cta","image","video","poster","eyebrowImage","logoImage","awardImage","disclaimer","templatesTitle","templatesMedia","rating","ratingSub","supportEmail","ctaUrl","counterLabel","mediaTitle","countdownMin"],ph=["options","benefits","fullAccess","footerLinks","logos","tasks","checklist"],gh=["plans","moneyBack"],fh=new Set(["title","question","body","subtitle","helper","disclaimer"]),uh=new Set(["image","video","poster","eyebrowImage","logoImage","awardImage","templatesMedia"]);function mh(){const n=new URLSearchParams(location.search);if(n.get("editor")!=="1")return;const e=n.get("funnel")||"reunion",t=document.getElementById("app");t&&(t.style.display="none"),document.body.style.overflow="hidden";const i=hh(e),a=()=>{var s,r,l;try{return(l=(r=(s=i.iframe)==null?void 0:s.contentWindow)==null?void 0:r.__funnelRT)==null?void 0:l.call(r)}catch{return null}},o=()=>{const s=a();if(!s||!s.funnel)return setTimeout(o,150);let r=s;yh(()=>{const l=a();return l&&l.funnel&&(r=l),r})};o()}function hh(n){const e=document.createElement("div");e.id="editor-stage",e.style.cssText=`position:fixed;top:0;left:0;right:${Wc}px;bottom:0;z-index:50;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;background:radial-gradient(1200px 700px at 50% 30%, #1a1c24 0%, #0c0d12 70%)`,document.body.appendChild(e);const t={iframe:null},i=()=>$n.find(o=>o.id===(localStorage.getItem(no)||"iphone-13"))||$n[3],a=()=>{const o=i();e.innerHTML="";const s=document.createElement("div");s.style.cssText=`width:${o.w}px;height:${o.h}px;position:relative;flex:none;display:flex;flex-direction:column;border-radius:47px;border:10px solid #17181c;overflow:hidden;background:#000;box-shadow:0 24px 80px rgba(0,0,0,.6),0 0 0 1px #2a2c33`;const r=document.createElement("div");r.style.cssText=`height:${io}px;flex:none;background:#1d1f26;border-bottom:1px solid #2a2c33;display:flex;align-items:center;gap:8px;padding:0 12px;padding-top:14px`,r.innerHTML=`
      <span style="width:8px;height:8px;border-radius:50%;background:#3c4150"></span>
      <div style="flex:1;height:26px;border-radius:13px;background:#12141a;color:#6d7280;
                  font:11px ui-monospace,Menlo,monospace;display:flex;align-items:center;justify-content:center">
        (Browser tab here) · app.artimind.com/${bh(n)}
      </div>
      <span style="color:#6d7280;font-size:13px">⋯</span>`;const l=document.createElement("iframe"),d=new URLSearchParams(location.search);d.delete("editor"),d.set("funnel",n),d.set("edpreview","1"),l.src=`${location.pathname}?${d}`,l.style.cssText=`width:${o.w}px;height:${o.h-io}px;border:0;display:block;background:#000;flex:none`,t.iframe=l,s.append(r,l);const c=document.createElement("div");c.style.cssText="display:flex;align-items:center;gap:8px;flex:none";const p=document.createElement("select");p.style.cssText="background:#181b22;color:#dfe3ec;border:1px solid #2a2f3a;border-radius:8px;padding:4px 8px;font-size:12px",p.innerHTML=$n.map(u=>`<option value="${u.id}" ${u.id===o.id?"selected":""}>${u.label} · ${u.w}×${u.h}</option>`).join(""),p.onchange=()=>{localStorage.setItem(no,p.value),a()},c.append(p),e.append(s,c);const f=()=>{const b=Math.min(1,(e.clientHeight-36-30)/(o.h+20),(e.clientWidth-36)/(o.w+20));s.style.transform=`scale(${b})`,s.style.transformOrigin="center center",s.style.marginTop=b<1?`${-((o.h+20)*(1-b))/2}px`:"0",s.style.marginBottom=b<1?`${-((o.h+20)*(1-b))/2}px`:"0"};f(),window.addEventListener("resize",f)};return a(),{stage:e,get iframe(){return t.iframe}}}function bh(n){return String(n).replace(/[<>"']/g,"")}function yh(n){const e=n().funnel,t={};let i=n().currentIndex();const a=document.createElement("aside");a.id="funnel-editor",a.style.cssText=`position:fixed;top:0;right:0;bottom:0;width:${Wc}px;z-index:70;background:#101014;color:#e8e8ea;font:12px/1.5 ui-monospace,Menlo,monospace;border-left:1px solid #2a2a30;display:flex;flex-direction:column`,a.innerHTML=`
    <header style="padding:10px 12px;border-bottom:1px solid #2a2a30">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
        <strong>✏️ Funnel Editor</strong>
        <span style="display:flex;gap:6px;align-items:center">
          <button data-ed-save title="Ghi funnel JSON" style="background:#1f9d55;border:none;color:#fff;padding:4px 12px;border-radius:7px;cursor:pointer;font-weight:700">💾 Save</button>
          <button data-ed-export title="Copy link preview ?rc=" style="background:#6b4fd8;border:none;color:#fff;padding:4px 12px;border-radius:7px;cursor:pointer;font-weight:700">🔗 Export</button>
          <button data-ed-close style="background:none;border:none;color:#888;cursor:pointer">✕</button>
        </span>
      </div>
      <div style="color:#9a9aa2;margin-top:2px">
        funnel <b style="color:#ffc73b">${T(e.funnelId||e.id)}</b>
        ${e.templateId?` · concept <b>${T(e.conceptId)}</b> · style <b>${T(e.styleId||"—")}</b>`:" · standalone"}
      </div>
    </header>
    <div style="display:flex;gap:6px;padding:8px 12px;border-bottom:1px solid #2a2a30;flex-wrap:wrap">
      <input data-ed-clone-id placeholder="clone id (vd: reunion-var-b)" style="flex:1;min-width:120px;background:#1a1a20;border:1px solid #33333a;color:#eee;padding:4px 6px;border-radius:6px">
      <input data-ed-clone-owner placeholder="mkter" style="width:70px;background:#1a1a20;border:1px solid #33333a;color:#eee;padding:4px 6px;border-radius:6px">
      <input data-ed-clone-style placeholder="style" style="width:70px;background:#1a1a20;border:1px solid #33333a;color:#eee;padding:4px 6px;border-radius:6px">
      <button data-ed-clone style="background:#2d6cdf;border:none;color:#fff;padding:4px 10px;border-radius:6px;cursor:pointer">Clone as…</button>
    </div>
    <nav data-ed-screens style="max-height:24dvh;overflow-y:auto;border-bottom:1px solid #2a2a30"></nav>
    <section data-ed-fields style="flex:1;overflow-y:auto;padding:10px 12px"></section>
    <div data-ed-msg style="padding:2px 12px;color:#9a9aa2;min-height:18px"></div>
    <footer style="padding:10px 12px;border-top:1px solid #2a2a30">
      <button data-ed-apply style="width:100%;background:#33333a;border:1px solid #44444d;color:#fff;padding:9px 0;border-radius:9px;cursor:pointer;font-weight:700">⚡ Apply (preview)</button>
    </footer>
  `,document.body.appendChild(a);const o=(h,m)=>{const A=a.querySelector("[data-ed-msg]");A.textContent=h,A.style.color=m?"#5ad18a":"#e8b34b"},s=a.querySelector("[data-ed-screens]"),r=a.querySelector("[data-ed-fields]"),l=()=>n().screens,d=()=>{s.innerHTML=l().map((h,m)=>`
      <div data-ed-nav="${m}" style="padding:6px 12px;cursor:pointer;display:flex;gap:8px;align-items:center;
           ${m===i?"background:#1d1d26;border-left:3px solid #ffc73b":"border-left:3px solid transparent"}">
        <span style="color:#666;width:18px">${m+1}</span>
        <span style="flex:1">${T(h.id)}${t[h.id]?' <b style="color:#ffc73b">●</b>':""}</span>
        <span style="color:#7a7a85">${T(h.type)}</span>
      </div>`).join(""),s.querySelectorAll("[data-ed-nav]").forEach(h=>{h.onclick=()=>{i=Number(h.dataset.edNav),n().render(i),d(),f()}})},c="width:100%;background:#1a1a20;border:1px solid #33333a;color:#eee;padding:6px 8px;border-radius:6px;resize:vertical;font:12px/1.5 ui-monospace,Menlo,monospace",p=(h,m)=>{const A=String(m??"").length,y=fh.has(h)?2:1;return Math.max(y,Math.min(6,Math.ceil(A/36)))},f=()=>{const h=l()[i];if(!h){r.innerHTML="";return}const m=[];if(h.type==="engagement-insert"){const A=(h.inputType||"text")==="email";m.push(`
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;padding:8px;border:1px solid #33333a;border-radius:8px">
          <label style="color:#8a8a92">Dạng màn:
            <select data-ed-insert-variant style="background:#1a1a20;border:1px solid #33333a;color:#eee;border-radius:6px;padding:3px 6px;margin-left:4px">
              <option value="message" ${A?"":"selected"}>insert-message</option>
              <option value="email" ${A?"selected":""}>insert-email</option>
            </select>
          </label>
          <label style="color:#8a8a92;display:flex;align-items:center;gap:4px">
            <input type="checkbox" data-ed-required ${h.optional?"":"checked"}> Bắt buộc nhập
          </label>
        </div>
        <label style="display:block;margin-bottom:8px">
          <span style="color:#8a8a92">Câu validate khi CHƯA nhập (emptyError)</span>
          <textarea data-ed-f="emptyError" rows="${p("emptyError",h.emptyError)}" style="${c}">${T(String(h.emptyError??""))}</textarea>
        </label>
        <label style="display:block;margin-bottom:8px">
          <span style="color:#8a8a92">Câu validate khi nhập SAI (invalidError${A?" — email":""})</span>
          <textarea data-ed-f="invalidError" rows="${p("invalidError",h.invalidError)}" style="${c}">${T(String(h.invalidError??""))}</textarea>
        </label>`)}if(h.type==="paywall"){const A=Object.fromEntries((h.plans||[]).map(y=>[y.id,y]));m.push(`
        <div data-ed-monkey style="margin-bottom:10px;padding:8px;border:1px solid #33333a;border-radius:8px">
          <div style="color:#ffc73b;font-weight:700;margin-bottom:6px">💳 Giá — funnel-monkey (Stripe)</div>
          <div data-ed-monkey-status style="color:#8a8a92;margin-bottom:6px">Đang tải offer…</div>
          ${["week","month","year"].map(y=>{var C;return`
            <label style="display:block;margin-bottom:6px">
              <span style="color:#8a8a92;text-transform:capitalize">${y}</span>
              <select data-ed-price="${y}" data-current="${T(((C=A[y])==null?void 0:C.offerItemId)||"")}"
                style="width:100%;background:#1a1a20;border:1px solid #33333a;color:#eee;padding:5px 6px;border-radius:6px">
                <option value="">— đang tải —</option>
              </select>
            </label>`}).join("")}
          <div style="color:#5b5b64;font-size:11px">Chọn Price ID → Apply. Giá hiển thị + checkout lấy đúng offer item đã chọn.</div>
        </div>`)}for(const A of ch){if(h[A]===void 0&&!dh.includes(A))continue;const y=uh.has(A)?`<span style="float:right;display:inline-flex;gap:4px">
             <button type="button" data-ed-upload="${A}" title="Tải file lên ngay (tự đẩy S3/kho)"
               style="background:#2d6cdf;border:none;color:#fff;padding:1px 8px;border-radius:5px;cursor:pointer;font-size:11px">⬆ Tải lên</button>
             <button type="button" data-ed-lib="${A}" title="Chọn từ kho creative"
               style="background:#33333a;border:none;color:#ddd;padding:1px 8px;border-radius:5px;cursor:pointer;font-size:11px">🗂 Kho</button>
           </span>`:"";m.push(`
        <label style="display:block;margin-bottom:8px">
          <span style="color:#8a8a92">${A}</span>${y}
          <textarea data-ed-f="${A}" rows="${p(A,h[A])}" style="${c}">${T(String(h[A]??""))}</textarea>
        </label>`)}for(const A of ph){const y=h.type==="trust"&&A==="logos"||h.type==="loading"&&A==="tasks";if(!Array.isArray(h[A])&&!y)continue;const C=Array.isArray(h[A])?h[A]:[],I=A==="logos"?" — ẢNH hãng (Forbes, USA Today…), mỗi dòng 1 URL":A==="tasks"||A==="checklist"?" — câu analyze, mỗi dòng 1 câu":" (mỗi dòng 1 mục)",G=A==="logos"?`<span style="float:right;display:inline-flex;gap:4px">
             <button type="button" data-ed-upload-arr="${A}" title="Tải ảnh hãng lên (append 1 dòng)"
               style="background:#2d6cdf;border:none;color:#fff;padding:1px 8px;border-radius:5px;cursor:pointer;font-size:11px">⬆ Thêm ảnh</button>
             <button type="button" data-ed-lib-arr="${A}" title="Chọn từ kho (append 1 dòng)"
               style="background:#33333a;border:none;color:#ddd;padding:1px 8px;border-radius:5px;cursor:pointer;font-size:11px">🗂 Kho</button>
           </span>`:"";m.push(`
        <label style="display:block;margin-bottom:8px">
          <span style="color:#8a8a92">${A}${I}</span>${G}
          <textarea data-ed-fa="${A}" rows="${Math.max(2,Math.min(7,C.length+1))}" style="${c}">${T(C.join(`
`))}</textarea>
        </label>`)}for(const A of gh){if(h[A]===void 0&&h.type!=="paywall")continue;const y=h[A]!==void 0?JSON.stringify(h[A],null,1):"";m.push(`
        <label style="display:block;margin-bottom:8px">
          <span style="color:#8a8a92">${A} (JSON)</span>
          <textarea data-ed-fj="${A}" rows="${Math.max(3,Math.min(10,y.split(`
`).length))}" style="${c}">${T(y)}</textarea>
        </label>`)}r.innerHTML=`
      <div style="color:#ffc73b;font-weight:700;margin-bottom:8px">${T(h.id)} · ${T(h.type)}</div>
      ${m.join("")||'<p style="color:#666">Màn này không có field editable.</p>'}
    `,h.type==="paywall"&&x(),u()};function u(){r.querySelectorAll("[data-ed-upload]").forEach(m=>{m.onclick=()=>{const A=m.dataset.edUpload,y=document.createElement("input");y.type="file",y.accept=A==="video"?"video/*":"image/*,video/*",y.onchange=async()=>{var I;const C=(I=y.files)==null?void 0:I[0];if(C){m.textContent="⏳";try{const G=await new Promise((S,R)=>{const F=new FileReader;F.onload=()=>S(String(F.result).split(",")[1]),F.onerror=R,F.readAsDataURL(C)}),Z=await fetch("/__funnel/assets",{method:"POST",body:JSON.stringify({name:C.name,type:C.type.startsWith("video")?"video":"image",dataBase64:G})}),v=await Z.json();if(!Z.ok)throw new Error(v.error||Z.status);const W=r.querySelector(`[data-ed-f="${A}"]`);W.value=v.asset.url,o(`⬆ ${v.asset.name} → ${v.asset.storage==="s3"?"S3":"kho bundle"}${v.dedupe?" (đã có sẵn)":""}. Bấm Apply để xem.`,!0)}catch(G){o(`Upload lỗi: ${G.message}`)}m.textContent="⬆ Tải lên"}},y.click()}}),r.querySelectorAll("[data-ed-lib]").forEach(m=>{m.onclick=()=>b(m.dataset.edLib)});const h=(m,A)=>{const y=r.querySelector(`[data-ed-fa="${m}"]`);y&&(y.value=(y.value.trim()?y.value.trim()+`
`:"")+A)};r.querySelectorAll("[data-ed-upload-arr]").forEach(m=>{m.onclick=()=>{const A=m.dataset.edUploadArr,y=document.createElement("input");y.type="file",y.accept="image/*",y.onchange=async()=>{var I;const C=(I=y.files)==null?void 0:I[0];if(C){m.textContent="⏳";try{const G=await new Promise((W,S)=>{const R=new FileReader;R.onload=()=>W(String(R.result).split(",")[1]),R.onerror=S,R.readAsDataURL(C)}),Z=await fetch("/__funnel/assets",{method:"POST",body:JSON.stringify({name:C.name,type:"image",dataBase64:G})}),v=await Z.json();if(!Z.ok)throw new Error(v.error||Z.status);h(A,v.asset.url),o(`⬆ ${v.asset.name} → ${v.asset.storage==="s3"?"S3":"kho bundle"}. Apply để xem.`,!0)}catch(G){o(`Upload lỗi: ${G.message}`)}m.textContent="⬆ Thêm ảnh"}},y.click()}}),r.querySelectorAll("[data-ed-lib-arr]").forEach(m=>{m.onclick=()=>b(m.dataset.edLibArr,A=>h(m.dataset.edLibArr,A))})}async function b(h,m){let A=[];try{A=(await(await fetch("/__funnel/assets")).json()).assets||[]}catch{}const y=h==="video",C=A.filter(G=>y?G.type==="video":!0),I=document.createElement("div");I.style.cssText="position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center",I.innerHTML=`
      <div style="width:640px;max-width:94vw;max-height:80dvh;overflow-y:auto;background:#14161d;border:1px solid #262b38;border-radius:14px;padding:16px;color:#e8e8ea;font:12px ui-monospace,Menlo,monospace">
        <div style="display:flex;align-items:center;margin-bottom:10px">
          <b>🗂 Kho creative — chọn cho "${T(h)}"</b>
          <input data-lib-q placeholder="lọc theo tên…" style="margin-left:12px;flex:1;background:#1a1a20;border:1px solid #33333a;color:#eee;padding:4px 8px;border-radius:6px">
          <button data-lib-x style="margin-left:8px;background:none;border:none;color:#888;cursor:pointer;font-size:15px">✕</button>
        </div>
        <div data-lib-grid style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px">
          ${C.map(G=>`
            <div data-lib-pick="${T(G.url)}" title="${T(G.name)} · ${(G.size/1024).toFixed(0)}KB · ${T(G.storage)}"
                 style="cursor:pointer;border:1px solid #2a2a30;border-radius:8px;overflow:hidden;background:#0e0f14" data-lib-name="${T(G.name.toLowerCase())}">
              ${G.type==="video"?'<div style="height:80px;display:flex;align-items:center;justify-content:center;font-size:26px">🎬</div>':`<img src="${T(G.url)}" style="width:100%;height:80px;object-fit:cover" loading="lazy">`}
              <div style="padding:3px 6px;color:#9a9aa2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${T(G.name)}</div>
            </div>`).join("")||'<p style="color:#666;grid-column:1/-1">Kho trống — dùng ⬆ Tải lên trước.</p>'}
        </div>
      </div>`,document.body.appendChild(I),I.querySelector("[data-lib-x]").onclick=()=>I.remove(),I.addEventListener("click",G=>{G.target===I&&I.remove()}),I.querySelector("[data-lib-q]").oninput=G=>{const Z=G.target.value.toLowerCase();I.querySelectorAll("[data-lib-pick]").forEach(v=>{v.style.display=v.dataset.libName.includes(Z)?"":"none"})},I.querySelectorAll("[data-lib-pick]").forEach(G=>{G.onclick=()=>{if(m)m(G.dataset.libPick);else{const Z=r.querySelector(`[data-ed-f="${h}"]`);Z&&(Z.value=G.dataset.libPick)}I.remove(),o(`🗂 Đã chọn asset cho ${h}. Bấm Apply để xem.`,!0)}})}let g=[];async function x(){const h=r.querySelector("[data-ed-monkey-status]");if(h)try{const m=await fetch(`/__funnel/monkey/offer?funnel=${encodeURIComponent(e.funnelId||e.id)}`),A=await m.json();if(!m.ok)throw new Error(A.error||m.status);g=A.items||[],h.innerHTML=A.mock?`<span style="color:#e8b34b">⚠ MOCK offer</span> — ${T(A.reason||"")}`:`✓ Offer <b>${T(A.offerName||"")}</b> · ${g.length} price`,r.querySelectorAll("[data-ed-price]").forEach(y=>{const C=y.dataset.edPrice,I=y.dataset.current,G=['<option value="">— không dùng slot này —</option>'].concat(g.map(Z=>`<option value="${T(Z.offerItemId)}" ${Z.offerItemId===I?"selected":""}>${T(Z.name)} · ${T(Z.formatted)}/${T(Z.interval)}${Z.priceId?` · ${T(Z.priceId)}`:""}</option>`));if(y.innerHTML=G.join(""),!I){const Z=g.find(v=>v.interval.startsWith(C));Z&&(y.value=Z.offerItemId)}})}catch(m){h.innerHTML=`<span style="color:#f8545d">✗ ${T(String(m.message||m))}</span>`}}const B={week:{label:"Weekly",period:"/wk",featured:!0,badge:"🔥 MOST POPULAR"},month:{label:"Monthly",period:"/mo"},year:{label:"Yearly",period:"/yr"}};function k(){const h=[...r.querySelectorAll("[data-ed-price]")];if(!h.length)return null;const m=[];for(const A of h){if(!A.value)continue;const y=g.find(I=>I.offerItemId===A.value);if(!y)continue;const C=A.dataset.edPrice;m.push({id:C,...B[C],price:y.formatted,offerItemId:y.offerItemId,priceId:y.priceId||void 0})}return m.length?m:null}a.querySelector("[data-ed-apply]").onclick=()=>{const h=l()[i];if(!h)return;const m={};r.querySelectorAll("[data-ed-f]").forEach(C=>{const I=C.dataset.edF;let G=C.value;I==="countdownMin"&&(G=Number(G)||0),String(h[I]??"")!==String(G)&&(m[I]=G)}),r.querySelectorAll("[data-ed-fa]").forEach(C=>{const I=C.dataset.edFa,G=C.value.split(`
`).map(Z=>Z.trim()).filter(Boolean);JSON.stringify(h[I]??[])!==JSON.stringify(G)&&(m[I]=G)});for(const C of r.querySelectorAll("[data-ed-fj]")){const I=C.dataset.edFj,G=C.value.trim();if(G)try{const Z=JSON.parse(G);JSON.stringify(h[I])!==JSON.stringify(Z)&&(m[I]=Z)}catch(Z){return o(`JSON lỗi ở "${I}": ${Z.message}`)}}const A=k();if(A){const C=JSON.stringify((h.plans||[]).map(G=>G.offerItemId||G.id)),I=JSON.stringify(A.map(G=>G.offerItemId));C!==I&&(m.plans=A)}const y=r.querySelector("[data-ed-insert-variant]");if(y){const C=y.value==="email"?"email":"text";C!==(h.inputType||"text")&&(m.inputType=C);const I=r.querySelector("[data-ed-required]").checked;!!h.optional!=!I&&(m.optional=!I)}if(!Object.keys(m).length)return o("Không có thay đổi.");t[h.id]={...t[h.id]||{},...m},n().applyScreenPatch(h.id,m),d(),o(`Applied ${Object.keys(m).length} field(s) → màn ${h.id}.`,!0)};const w=(h,m,A)=>{var G;const y=((G=Fe[e.funnelId||e.id])==null?void 0:G.overrides)||{},C={};for(const Z of y.screens||[])Z!=null&&Z.id&&(C[Z.id]={...Z});for(const[Z,v]of Object.entries(t))C[Z]={...C[Z]||{id:Z},...v};const I=Fe[e.funnelId||e.id]||{};return{id:h,template:e.templateId||void 0,style:A||e.styleId||void 0,owner:m||e.owner||void 0,vendor:I.vendor||e.vendor||void 0,overrides:{...y,screens:Object.values(C)}}};a.querySelector("[data-ed-save]").onclick=async()=>{var A;const h=new URLSearchParams(location.search).get("funnel")||"";if(h.startsWith("tpl:")){const y=h.slice(4),C=St[y];if(!C)return o("Template không tìm thấy.");const I=JSON.parse(JSON.stringify(C)),G={};(I.screens||[]).forEach(Z=>{Z!=null&&Z.id&&(G[Z.id]=Z)});for(const[Z,v]of Object.entries(t))G[Z]={...G[Z]||{id:Z},...v};I.screens=(I.screens||[]).map(Z=>G[Z.id]||Z);try{const Z=await fetch("/__funnel/save-template",{method:"POST",body:JSON.stringify(I)}),v=await Z.json();if(!Z.ok)throw new Error(v.error||Z.status);o(`Template saved → ${v.file}${(A=v.synced)!=null&&A.length?` · sync ${v.synced.length} funnel`:""}`,!0)}catch(Z){o(`Save lỗi: ${Z.message}`)}return}const m=w(e.funnelId||e.id);try{const y=await fetch("/__funnel/save",{method:"POST",body:JSON.stringify(m)}),C=await y.json();if(!y.ok)throw new Error(C.error||y.status);o(`Saved → ${C.file}`,!0)}catch(y){o(`Save lỗi: ${y.message} (dev server only)`)}},a.querySelector("[data-ed-clone]").onclick=async()=>{const h=a.querySelector("[data-ed-clone-id]").value.trim(),m=h.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,""),A=a.querySelector("[data-ed-clone-owner]").value.trim(),y=a.querySelector("[data-ed-clone-style]").value.trim();if(!m)return o("Nhập clone id trước.");if(m!==h&&(a.querySelector("[data-ed-clone-id]").value=m),Fe[m])return o(`Funnel "${m}" đã tồn tại.`);if(!e.templateId)return o("Funnel standalone — không có template để clone.");const C=w(m,A,y);try{const I=await fetch("/__funnel/save",{method:"POST",body:JSON.stringify(C)}),G=await I.json();if(!I.ok)throw new Error(G.error||I.status);o(`Clone saved → ${G.file}. Mở ?funnel=${m}&editor=1`,!0),setTimeout(()=>{location.search=`?funnel=${m}&editor=1`},900)}catch(I){o(`Clone lỗi: ${I.message}`)}},a.querySelector("[data-ed-export]").onclick=()=>{var y;const h={screens:Object.entries(t).map(([C,I])=>({id:C,...I}))},m=btoa(unescape(encodeURIComponent(JSON.stringify(h)))),A=`${location.origin}${location.pathname}?funnel=${encodeURIComponent(e.funnelId||e.id)}&rc=${m}`;(y=navigator.clipboard)==null||y.writeText(A),o("Đã copy preview link (?rc=) vào clipboard.",!0)},a.querySelector("[data-ed-close]").onclick=()=>{var m;a.remove(),(m=document.getElementById("editor-stage"))==null||m.remove(),document.body.style.overflow="";const h=document.getElementById("app");h&&(h.style.display="")},d(),f(),console.info("[editor] templates:",Object.keys(St),"· funnels:",Object.keys(Fe))}function T(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}window.__funnelRT=sh;oh().then(()=>mh());
//# sourceMappingURL=index-C0CQ6w5y.js.map
