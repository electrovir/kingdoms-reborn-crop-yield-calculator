(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const Vn=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function zn(e,t){return e?Vn.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ut(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var jt;(function(e){e.Upper="upper",e.Lower="lower"})(jt||(jt={}));function Fn({value:e,min:t,max:r}){return Math.min(Math.max(e,t),r)}var Vt;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Vt||(Vt={}));function Wn(e){return e?e instanceof Error?e.message:zn(e,"message")?String(e.message):String(e):""}var zt;(function(e){e.Upper="upper",e.Lower="lower"})(zt||(zt={}));var Ft;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ft||(Ft={}));function Kn(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Kn();class Yn extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function Wt(e){return e instanceof Promise}function Ce(e){return Array.isArray(e)?"array":typeof e}function _(e,t){return Ce(e)===t}function qn(e,t){if(!(_(e,"string")||_(e,"number")||_(e,"symbol")))throw new Yn(t||`value is of type '${Ce(e)}' but expected a PropertyKey.`)}function Ge(e){try{return qn(e),!0}catch{return!1}}function Gn(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function Jn(e,t){let r=!1;const n=Ut(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(r=!0),{...i,[o]:a}},{});return r?new Promise(async(i,o)=>{try{await Promise.all(Ut(n).map(async a=>{const s=await n[a];n[a]=s})),i(n)}catch(a){o(a)}}):n}function Qn(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Qn();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis,Et=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Kt=new WeakMap;let Ir=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Et&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Kt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Kt.set(r,t))}return t}toString(){return this.cssText}};const M=e=>new Ir(typeof e=="string"?e:e+"",void 0,St),Se=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Ir(r,e,St)},Xn=(e,t)=>{if(Et)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Ee.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Yt=Et?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return M(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zn,defineProperty:ei,getOwnPropertyDescriptor:ti,getOwnPropertyNames:ri,getOwnPropertySymbols:ni,getPrototypeOf:ii}=Object,R=globalThis,qt=R.trustedTypes,oi=qt?qt.emptyScript:"",Je=R.reactiveElementPolyfillSupport,ce=(e,t)=>e,Le={toAttribute(e,t){switch(t){case Boolean:e=e?oi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Tt=(e,t)=>!Zn(e,t),Gt={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class Q extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Gt){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&ei(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=ti(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const s=i==null?void 0:i.call(this);o.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gt}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;const t=ii(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){const r=this.properties,n=[...ri(r),...ni(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Yt(i))}else t!==void 0&&r.push(Yt(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xn(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var o;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const a=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Le).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,r){var o;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=n.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Le;this._$Em=i,this[i]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Tt)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[ce("elementProperties")]=new Map,Q[ce("finalized")]=new Map,Je==null||Je({ReactiveElement:Q}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,Pe=ue.trustedTypes,Jt=Pe?Pe.createPolicy("lit-html",{createHTML:e=>e}):void 0,kr="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,Nr="?"+O,ai=`<${Nr}>`,F=document,he=()=>F.createComment(""),pe=e=>e===null||typeof e!="object"&&typeof e!="function",Or=Array.isArray,si=e=>Or(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Qe=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,Xt=/>/g,B=RegExp(`>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zt=/'/g,er=/"/g,Hr=/^(?:script|style|textarea|title)$/i,li=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ci=li(1),C=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),tr=new WeakMap,j=F.createTreeWalker(F,129);function Rr(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jt!==void 0?Jt.createHTML(t):t}const ui=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",a=ae;for(let s=0;s<r;s++){const l=e[s];let c,u,f=-1,d=0;for(;d<l.length&&(a.lastIndex=d,u=a.exec(l),u!==null);)d=a.lastIndex,a===ae?u[1]==="!--"?a=Qt:u[1]!==void 0?a=Xt:u[2]!==void 0?(Hr.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=B):u[3]!==void 0&&(a=B):a===B?u[0]===">"?(a=i??ae,f=-1):u[1]===void 0?f=-2:(f=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?B:u[3]==='"'?er:Zt):a===er||a===Zt?a=B:a===Qt||a===Xt?a=ae:(a=B,i=void 0);const h=a===B&&e[s+1].startsWith("/>")?" ":"";o+=a===ae?l+ai:f>=0?(n.push(c),l.slice(0,f)+kr+l.slice(f)+O+h):l+O+(f===-2?s:h)}return[Rr(e,o+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class me{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,a=0;const s=t.length-1,l=this.parts,[c,u]=ui(t,r);if(this.el=me.createElement(c,n),j.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=j.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(kr)){const d=u[a++],h=i.getAttribute(f).split(O),p=/([.?@])?(.*)/.exec(d);l.push({type:1,index:o,name:p[2],strings:h,ctor:p[1]==="."?di:p[1]==="?"?hi:p[1]==="@"?pi:Re}),i.removeAttribute(f)}else f.startsWith(O)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(Hr.test(i.tagName)){const f=i.textContent.split(O),d=f.length-1;if(d>0){i.textContent=Pe?Pe.emptyScript:"";for(let h=0;h<d;h++)i.append(f[h],he()),j.nextNode(),l.push({type:2,index:++o});i.append(f[d],he())}}}else if(i.nodeType===8)if(i.data===Nr)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(O,f+1))!==-1;)l.push({type:7,index:o}),f+=O.length-1}o++}}static createElement(t,r){const n=F.createElement("template");return n.innerHTML=t,n}}function ee(e,t,r=e,n){var a,s;if(t===C)return t;let i=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const o=pe(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(t=ee(e,i._$AS(e,t.values),i,n)),t}class fi{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??F).importNode(r,!0);j.currentNode=i;let o=j.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ve(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new mi(o,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(o=j.nextNode(),a++)}return j.currentNode=F,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ve{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ee(this,t,r),pe(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):si(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==y&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=me.createElement(Rr(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const a=new fi(i,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(t){let r=tr.get(t.strings);return r===void 0&&tr.set(t.strings,r=new me(t)),r}k(t){Or(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new ve(this.S(he()),this.S(he()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,r=this,n,i){const o=this.strings;let a=!1;if(o===void 0)t=ee(this,t,r,0),a=!pe(t)||t!==this._$AH&&t!==C,a&&(this._$AH=t);else{const s=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=ee(this,s[n+l],r,l),c===C&&(c=this._$AH[l]),a||(a=!pe(c)||c!==this._$AH[l]),c===y?t=y:t!==y&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class di extends Re{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class hi extends Re{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class pi extends Re{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=ee(this,t,r,0)??y)===C)return;const n=this._$AH,i=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class mi{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ee(this,t)}}const Xe=ue.litHtmlPolyfillSupport;Xe==null||Xe(me,ve),(ue.litHtmlVersions??(ue.litHtmlVersions=[])).push("3.1.2");const vi=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new ve(t.insertBefore(he(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fe extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}}var Mr;fe._$litElement$=!0,fe.finalized=!0,(Mr=globalThis.litElementHydrateSupport)==null||Mr.call(globalThis,{LitElement:fe});const Ze=globalThis.litElementPolyfillSupport;Ze==null||Ze({LitElement:fe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=e=>(...t)=>({_$litDirective$:e,values:t});class ge{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:Tt},bi=(e=gi,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function wi(e){return(t,r)=>typeof r=="object"?bi(e,t,r):((n,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=De(class extends ge{constructor(e){var t;if(super(e),e.type!==xt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return C}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends ge{constructor(t){if(super(t),this.it=y,t.type!==xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===C)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}at.directiveName="unsafeHTML",at.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rr extends at{}rr.directiveName="unsafeSVG",rr.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $i(e,t,r){return e?t(e):r==null?void 0:r(e)}class Dr extends fe{}const _i=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Be(e,t){return e?_i.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function W(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ei(e){return!!e}const Si={capitalizeFirstLetter:!1};function Ti(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function xi(e,t){return t.capitalizeFirstLetter?Ti(e):e}function Ai(e,t=Si){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return xi(n,t)}var nr;(function(e){e.Upper="upper",e.Lower="lower"})(nr||(nr={}));var ir;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ir||(ir={}));function Ci(e){return!!(Be(e,"then")&&typeof e.then=="function")}function Br(e){return e?e instanceof Error?e.message:Be(e,"message")?String(e.message):String(e):""}function At(e){return e instanceof Error?e:new Error(Br(e))}function Li(e,t){const r=At(e);return r.message=`${t}: ${r.message}`,r}function st(e){return!!e&&typeof e=="object"}function or({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const ar="Failed to compare objects using JSON.stringify";function sr(e,t,r){return or({source:e,errorHandler(n){if(r)return"";throw n}})===or({source:t,errorHandler(n){if(r)return"";throw n}})}function Ur(e,t,r={}){try{return e===t?!0:st(e)&&st(t)?sr(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(i=>Ur(e[i],t[i])):!1:sr(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const i=At(n);throw i.message.startsWith(ar)||(i.message=`${ar}: ${i.message}`),i}}function jr(e,t){let r=!1;const n=W(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(r=!0),{...i,[o]:a}},{});return r?new Promise(async(i,o)=>{try{await Promise.all(W(n).map(async a=>{const s=await n[a];n[a]=s})),i(n)}catch(a){o(a)}}):n}function lt(){let e,t,r=!1;const n=new Promise((i,o)=>{e=a=>(r=!0,i(a)),t=a=>{r=!0,o(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${lt.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Pi(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Pi();function lr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}var te;(function(e){e.Upper="upper",e.Lower="lower"})(te||(te={}));function Mi(e){return e.toLowerCase()!==e.toUpperCase()}function cr(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const i=e[n]||"";if(!Mi(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===te.Upper&&i!==i.toUpperCase())return!1;if(t===te.Lower&&i!==i.toLowerCase())return!1}return!0}function Ii(e){return e.split("").reduce((r,n,i,o)=>{const a=i>0&&o[i-1]||"",s=i<o.length-1&&o[i+1]||"",l=cr(a,te.Lower,{blockNoCaseCharacters:!0})||cr(s,te.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var ur;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ur||(ur={}));function ki(e){return!!e&&typeof e=="object"}function Ni(e,t){let r=!1;const n=lr(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(r=!0),{...i,[o]:a}},{});return r?new Promise(async(i,o)=>{try{await Promise.all(lr(n).map(async a=>{const s=await n[a];n[a]=s})),i(n)}catch(a){o(a)}}):n}function Oi(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Oi();function ie(e){if(ki(e))return Ni(e,(r,n)=>{if(!_(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ii(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const o=n,a=r.startsWith("--")?M(r):r.startsWith("-")?Se`-${M(r)}`:Se`--${M(r)}`;return{name:a,value:Se`var(${a}, ${M(o)})`,default:String(o)}});throw new Error(`Invalid setup input for '${ie.name}' function.`)}function Hi(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(s=>!!s.index).length;if(n||i)return[...e];const o=e.map(s=>[s]);return o.length||(o[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(o[s]=[])}),t.forEach(s=>{const l=o[s.index];l&&l.splice(0,0,...s.values)}),o.flat()}function Te(e){return Be(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ct(e){return Be(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Vr(e){return e.map(t=>Te(t)?t.definition:t).filter(t=>Ct(t))}const zr=new WeakMap;function Ri(e,t){var i;const r=Vr(t);return(i=Fr(zr,[e,...r]).value)==null?void 0:i.template}function Di(e,t,r){const n=Vr(t);return Kr(zr,[e,...n],r)}function Fr(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Wr(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Fr(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Wr(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Kr(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:a}=Wr(e,t,n);if(!o)return{result:!1,reason:a};const s=i??{nested:void 0,template:void 0};if(i||e.set(o,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),Kr(l,t,r,n+1)}const Bi=new WeakMap;function Yr(e,t,r){const n=Ri(e,t),i=n??r();if(!n){const s=Di(e,t,i);if(s.result)Bi.set(e,i);else throw new Error(`Failed to set template transform: ${s.reason}`)}const o=i.valuesTransform(t),a=Hi(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:a}}function qr(e,t,r,n){const i=[],o=[],a=[],s=[];return e.forEach((c,u)=>{const f=i.length-1,d=i[f],h=u-1,p=t[h];n&&n(c);let m,E=[];if(typeof d=="string"&&(m=r(d,c,p),m)){i[f]=d+m.replacement,a.push(h);const G=m.getExtraValues;E=G?G(p):[],E.length&&G?(i[f]+=" ",E.forEach(($e,qe)=>{qe&&i.push(" ")}),s.push($e=>{const qe=$e[h],jn=G(qe);return{index:h,values:jn}}),i.push(c)):i[f]+=c}m||i.push(c);const A=e.raw[u];m?(o[f]=o[f]+m.replacement+A,E.length&&E.forEach(()=>{o.push("")})):o.push(A)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(c){const u=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function Ui(...[e,t,r]){if(Ct(r))return{replacement:r.tagName,getExtraValues:void 0}}function ji(e,t){return qr(e,t,Ui)}function $(e,...t){const r=Yr(e,t,()=>ji(e,t));return Se(r.strings,...r.values)}const Vi={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Gr(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Dr?!0:Gr(r)}function Jr(e,t){const r=e.instanceState;W(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&W(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),zi(e)}function zi(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function fr(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Fi extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Qr(){return e=>{var t;return t=class extends Fi{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function K(){return Qr()}function Wi(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Qr()([e,n].join("-"));return r[n]=i,r},{}):{}}const Ki="_elementVirStateSetup";function Yi(e){return st(e)?Ki in e:!1}const qi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function de(e,t){return e?qi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Y(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Gi(e){return Y(e).map(t=>e[t])}function Ji(e,t){return e.includes(t)}function Qi(e){return!!e}var dr;(function(e){e.Upper="upper",e.Lower="lower"})(dr||(dr={}));var hr;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(hr||(hr={}));function Xi(e){return e?e.map(Xr).filter(Qi).join(`
`):""}function Xr(e){return e?e instanceof Error?e.message:de(e,"message")?String(e.message):String(e):""}function re(e){return!!e&&typeof e=="object"}function Zr(e,t){let r=!1;const n=Y(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(r=!0),{...i,[o]:a}},{});return r?new Promise(async(i,o)=>{try{await Promise.all(Y(n).map(async a=>{const s=await n[a];n[a]=s})),i(n)}catch(a){o(a)}}):n}function Zi(e,t){try{return eo(e,t),!0}catch{return!1}}function eo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function to(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}to();function ro(e,t){var s;const r=t==null?void 0:t.constructor,n=(s=e==null?void 0:e.constructor)==null?void 0:s.prototype,i=(e==null?void 0:e.constructor)===r,o=r&&n?n instanceof r:!1,a=i||o;return Ce(e)===Ce(t)&&a}const en="__vir__shape__definition__key__do__not__use__in__actual__objects";function tn(e){return de(e,en)}const rn=Symbol("and"),nn=Symbol("instance"),on=Symbol("enum"),an=Symbol("exact"),Lt=Symbol("indexed-keys"),sn=Symbol("or"),Pt=Symbol("unknown"),no=[rn,on,an,Lt,nn,sn,Pt],ln="__vir__shape__specifier__key__do__not__use__in__actual__objects";function io(...e){return cn(e,Lt)}function oo(e){return cn([e],Pt)}function Ue(e){return q(e,rn)}function je(e){return q(e,nn)}function Ve(e){return q(e,on)}function ze(e){return q(e,an)}function Fe(e){return q(e,Lt)}function be(e){return q(e,sn)}function We(e){return q(e,Pt)}function q(e,t){const r=we(e);return!!r&&r.specifierType===t}function cn(e,t){return{[ln]:!0,specifierType:t,parts:e}}function V(e,t,r,n){const i=we(t);if(i){if(je(i))return e instanceof i.parts[0];if(Ue(i))return i.parts.every(o=>V(e,o));if(be(i))return i.parts.some(o=>V(e,o));if(ze(i))return re(e)?V(e,i.parts[0]):e===i.parts[0];if(Ve(i))return Object.values(i.parts[0]).some(o=>o===e);if(Fe(i))return re(e)?ao(e,i,!!r)&&Gi(e).every(o=>V(o,i.parts[0].values)):!1;if(We(i))return!0}return n?t===e:ro(e,t)}function ao(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys;if(r)if(n){const o=Mt(t);return _(o,"boolean")?o:o.every(a=>Y(e).some(s=>V(s,a,!1,!0)))}else return!0;else return Y(e).every(o=>V(o,i))}function Mt(e){const t=e.parts[0].keys,r=we(t);if(Ge(t))return[t];if(r){if(je(r))return!1;if(Ue(r))return!1;if(be(r)){const n=r.parts.map(o=>Mt(io({...e.parts[0],keys:o})));let i;return n.forEach(o=>{_(o,"boolean")&&(o&&i==null?i=!0:i=!1)}),_(i,"boolean")?i:n.flat().filter(Ge)}else if(ze(r)){const n=r.parts.filter(Ge);return n.length!==r.parts.length?!1:n}else{if(Ve(r))return Object.values(r.parts[0]);if(Fe(r))return!1;if(We(r))return!0}}return!1}function we(e){if(re(e)&&de(e,ln)){if(!de(e,"parts")||!_(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!de(e,"specifierType")||!Ji(no,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class pr extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function ct(e,t=!1){return le(e)}function le(e){const t=we(e);if(t)if(je(t)){const r=t.parts[0];try{return new r}catch(n){throw new pr(`Failed to create default value for classShape for class '${r.name}': ${Xr(n)}`)}}else{if(be(t)||ze(t))return le(t.parts[0]);if(Ue(t))return t.parts.reduce((r,n)=>Object.assign(r,le(n)),{});if(Ve(t))return Object.values(t.parts[0])[0];if(Fe(t)){const r=Mt(t);return!t.parts[0].required||_(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,le(t.parts[0].values)]))}else{if(We(t))return t.parts[0]??{};throw new pr(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return tn(e)?ct(e.shape):e instanceof RegExp?e:_(e,"array")?e.map(le):re(e)?Zr(e,(r,n)=>ct(n)):e}function so(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return ct(e)},[en]:!0}}class T extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function lo(e,t,r={}){try{return co(e,t,r),!0}catch{return!1}}function co(e,t,r={}){P({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function ut(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function P({subject:e,shape:t,keys:r,options:n}){if(We(t))return!0;if(tn(t))return P({subject:e,shape:t.shape,keys:r,options:n});const i=ut(r);if(we(e))throw new T(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!V(e,t,!n.ignoreExtraKeys))throw new T(`Subject does not match shape definition at key ${i}`);if(_(t,"function"))return _(e,"function");if(je(t))return e instanceof t.parts[0];if(re(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(u=>[u,!1])),l=[];let c=!1;if(be(t)){const u=[];c=t.parts.some(f=>{try{const d=P({subject:e,shape:f,keys:r,options:{...n}});return Object.assign(s,d),!0}catch(d){if(d instanceof T)return u.push(d),!1;throw d}}),!c&&Zi(u,1)&&l.push(u[0])}else if(Ue(t))c=t.parts.every(u=>{try{const f=P({subject:e,shape:u,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(s,f),!0}catch(f){if(f instanceof T)return l.push(f),!1;throw f}});else if(ze(t)){const u=P({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(s,u),c=!0}else{if(Ve(t))throw new T(`Cannot compare an enum specifier to an object at ${i}`);if(_(t,"array")&&_(a,"array"))c=a.every((u,f)=>{const d=t.some(h=>{try{return P({subject:u,shape:h,keys:[...r,f],options:n}),!0}catch(p){if(p instanceof T)return l.push(p),!1;throw p}});return s[f]=d,d});else if(Fe(t)){const u=Zr(e,(f,d)=>(n.ignoreExtraKeys||P({shape:t.parts[0].keys,subject:f,keys:[...r,f],options:n}),P({shape:t.parts[0].values,subject:d,keys:[...r,f],options:n}),!0));Object.assign(s,u),c=!0}else{const u=uo({keys:r,options:n,shape:t,subject:e});Object.assign(s,u),c=!0}}if(l.length)throw new T(Xi(l));if(!c){const f=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).map(d=>ut([...r,d])).join(",")}`;throw new T(f)}return n.ignoreExtraKeys||Object.entries(s).forEach(([u,f])=>{if(!f)throw new T(`subject as extra key '${u}' in ${i}.`)}),s}else if(n.exactValues)return e===t;return!0}function uo({keys:e,options:t,shape:r,subject:n}){const i=ut(e),o={};if(re(r)){const a=new Set(Y(r)),s=new Set(Y(n));a.forEach(l=>{l in n&&s.add(l)}),t.ignoreExtraKeys||s.forEach(l=>{if(!a.has(l))throw new T(`Subject has extra key '${String(l)}' in ${i}`)}),a.forEach(l=>{var d;const c=r[l],u=be(c)?c.parts.includes(void 0):!1,f=((d=c==null?void 0:c.includes)==null?void 0:d.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!f)throw new T(`Subject missing key '${String(l)}' in ${i}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!a.has(l))return;const u=r[l];P({subject:c,shape:u,keys:[...e,l],options:t}),o[l]=!0})}else throw new T(`shape definition at ${i} was not an object.`);return o}const fo=so({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:oo()});function et(e){return lo(e,fo,{allowExtraKeys:!0})}function un(e,t){t in e||wi()(e,t)}function ho(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function mr(e,t){const r=e;function n(a){t?ho(a,e,e.tagName):un(e,a)}function i(a,s){return n(s),r[s]}return new Proxy({},{get:i,set(a,s,l){const c=Yi(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function f(p){a[s]=p,r[s]=p}const d=e.observablePropertyListenerMap[s];if(u!==c&&et(u)&&(d!=null&&d.length)&&u.removeListener(d),et(c))if(d)c.addListener(d);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[s]=p,c.addListener(p)}else et(u)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return i(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function po(e){return e?jr(e,t=>t):{}}function mo({hostClassNames:e,cssVars:t}){return{hostClasses:jr(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function vo({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&W(t).forEach(o=>{const a=t[o],s=r[o];typeof a=="function"&&(a({state:n,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function go({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(a){W(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function bo(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var wo=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ke(e){var t;const r=e;if(!_(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!_(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Vi,...r.options},i=Wi(r.tagName,r.events),o=po(r.hostClasses);r.hostClasses&&fr(r.tagName,r.hostClasses),r.cssVars&&fr(r.tagName,r.cssVars);const a=r.cssVars?ie(r.cssVars):{},s=bo(r.slotNames),l=typeof r.styles=="function"?r.styles(mo({hostClassNames:o,cssVars:a})):r.styles||$``,c=r.renderCallback;function u(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:d}}const f=(t=class extends Dr{createRenderParams(){return go({element:this,eventsMap:i,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Gr(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Ke.name}' to define ${r.tagName}.`),this._hasRendered=!0;const d=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(d);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return vo({host:d.host,hostClassesInit:r.hostClasses,hostClassNames:o,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},h}catch(d){const h=Li(d,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,Br(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const d=this.createRenderParams();if(r.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const d=this.createRenderParams();if(r.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(d){Jr(this,d)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:mr(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:mr(this,!n.allowPolymorphicState)});const d=r.stateInitStatic||{};W(d).forEach(h=>{un(this,h),this.instanceState[h]=d[h]}),this.definition=f}},wo(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(f,{name:{value:Ai(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof f,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,f),f}function fn(){return e=>{const t=e;if(!_(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Ke({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function yo(e,t){return e===t}function $o(e,t=yo){const r=new Set;function n(){r.forEach(a=>a(o.value))}function i(a){return r.delete(a)}const o={value:e,setValue(a){t(o.value,a)||(o.value=a,n())},addListener(a){return!r.has(a)&&r.add(a),()=>i(a)},removeListener:i,destroy(){r.clear()}};return o}const tt=Symbol("not set");function _o(e){let t=tt,r;const n=e&&"updateCallback"in e?e.updateCallback:void 0;let i=lt();const o=$o(i.promise);function a(){i=lt(),o.setValue(i.promise)}function s(m){i.resolve(m),o.setValue(m),h.latestResolvedValue=m}function l(m){i.reject(m),o.setValue(m)}function c(m){m!==r&&(r=m,i.isSettled()&&a(),m.then(E=>{r===m&&s(E)}).catch(E=>{if(r===m){i.promise.catch(()=>{});const A=At(E);console.error(A),l(A)}}))}function u(m,E){if(!n)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const A={...m},G={...E};if(t===tt||!Ur(A,t,{ignoreNonSerializableProperties:!0})){t=A;const $e=n(t,G);c($e)}}function f(m,E){t=tt,u(m,E)}const d={latestResolvedValue:e&&"defaultValue"in e&&!Wt(e.defaultValue)?e.defaultValue:void 0,setNewPromise(m){c(m)},setResolvedValue(m){m!==o.value&&(i.isSettled()&&a(),i.resolve(m),s(m))},updateTrigger:n?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:n?f:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}},h=Object.assign(o,d),p=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return p instanceof Promise?c(p):s(p),Wt(p)?c(p):s(p),h}function Eo(...e){return{_elementVirStateSetup(){return _o(...e)}}}function dn(e,t){return ft(e,t),e.element}function So(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ft(e,t){const r=So(e),n=r?`: in ${r}`:"";if(e.type!==xt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function To(e){return!Ci(e)}function xo(e){return e instanceof Error}function L(e,t){return Ao(e,t)}const Ao=De(class extends ge{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=dn(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),C}}),rt="onResize",hn=De(class extends ge{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ft(e,rt)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${rt} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ft(e,rt),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function xe(e,t,r){return $i(e,()=>t,()=>r)}function Co(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),fn()(r(n))),defineElementNoInputs:n=>(t(n),Ke(r(n)))}}function Lo(e,t){return t?vr(e,t):vr(void 0,e)}const vr=De(class extends ge{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=dn(e,"assign")}render(e,t){return Jr(this.element,t),C}});function Po(...[e,t,r]){const n=Te(r)?r.definition:r,i=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),o=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=i||o,s=Ct(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(i&&!n.elementOptions.ignoreUnsetInputs&&!Te(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(c){const u=Te(c)?c.inputs:void 0;return[i&&u?Lo(u):void 0].filter(Ei)}}}function Mo(e){}function Io(e){return qr(e.strings,e.values,Po,Mo)}function b(e,...t){const r=ci(e,...t),n=Yr(e,t,()=>Io(r));return{...r,strings:n.strings,values:n.values}}const gr="vira-",{defineElement:oe,defineElementNoInputs:cs}=Co({assertInputs:e=>{if(!e.tagName.startsWith(gr))throw new Error(`Tag name should start with '${gr}' but got '${e.tagName}'`)}});var br;(function(e){e.Upper="upper",e.Lower="lower"})(br||(br={}));var wr;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(wr||(wr={}));function pn(){let e,t,r=!1;const n=new Promise((i,o)=>{e=a=>(r=!0,i(a)),t=a=>{r=!0,o(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${pn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function yr(e){const t=pn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function ko(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ko();const No="px";function Oo(e){return Ho({value:e,suffix:No})}function Ho({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const mn=$`
    pointer-events: none;
    opacity: 0.3;
`,z=ie({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Me=ie({"vira-form-input-border-radius":"8px"}),Ie=ie({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":$`calc(${Me["vira-form-input-border-radius"].value} + 4px)`});function vn({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const i=M(Oo(n+r+t));return $`
        ${M(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ie["vira-focus-outline-color"].value};
            border-radius: ${Ie["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const It=$`
    padding: 0;
    margin: 0;
`,U=$`
    ${It};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,dt=$`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,S=oe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>$`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var ht;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ht||(ht={}));oe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ht.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>$`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${dt};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ie["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${mn};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${U};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Me["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${z["vira-interaction-animation-duration"].value},
                background-color
                    ${z["vira-interaction-animation-duration"].value},
                border-color ${z["vira-interaction-animation-duration"].value};
        }

        ${vn({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${S} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?b`
                  <${S.assign({icon:e.icon})}></${S}>
              `:"",r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:"";return b`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var pt;(function(e){e.Header="header"})(pt||(pt={}));oe()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>$`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${U};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${z["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:K()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:i}){const o=i.expanded?$`
                  height: ${e.contentHeight}px;
              `:$`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${L("click",()=>{r(new n.expandChange(!i.expanded))})}
            >
                <slot name=${pt.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${hn(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const g=ie({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function I({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Ro=I({name:"CloseX24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${g["vira-icon-fill-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `});I({name:"Element16Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `});I({name:"Element24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Do=I({name:"Loader24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Bo=$`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${z["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,gn=I({name:"LoaderAnimated24Icon",svgTemplate:b`
        <style>
            ${Bo}
        </style>
        ${Do.svgTemplate}
    `});I({name:"Options24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${g["vira-icon-fill-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${g["vira-icon-stroke-color"].value}"
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Uo=I({name:"StatusFailure24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${g["vira-icon-fill-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `});I({name:"StatusInProgress24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${g["vira-icon-fill-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${g["vira-icon-stroke-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width="calc(${g["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${g["vira-icon-stroke-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width="calc(${g["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${g["vira-icon-stroke-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width="calc(${g["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});I({name:"StatusSuccess24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${g["vira-icon-fill-color"].value}
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${g["vira-icon-stroke-color"].value}
                stroke-width=${g["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var ke;(function(e){e.Loading="loading",e.Error="error"})(ke||(ke={}));oe()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:K(),imageError:K()},styles:({hostClasses:e})=>$`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:i}){const o=e.imageUrl,a=t.erroredUrls[o]?b`
                  <slot class="status-wrapper" name=${ke.Error}>
                      <${S.assign({icon:Uo})} class="error"></${S}>
                  </slot>
              `:t.loadedUrls[o]?void 0:b`
                    <slot class="status-wrapper" name=${ke.Loading}>
                        <${S.assign({icon:gn})}></${S}>
                    </slot>
                `;return b`
            ${xe(!!a,a)}
            <img
                class=${yi({hidden:!!a})}
                ${L("load",async()=>{e._debugLoadDelay&&await yr(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new i.imageLoad)})}
                ${L("error",async s=>{e._debugLoadDelay&&await yr(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new i.imageError(s.error))})}
                src=${o}
            />
        `}});var $r;(function(e){e.Upper="upper",e.Lower="lower"})($r||($r={}));var _r;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(_r||(_r={}));function jo(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}jo();const Vo={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},zo=Object.keys(Vo);var Er;(function(e){e.Upper="upper",e.Lower="lower"})(Er||(Er={}));var Sr;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Sr||(Sr={}));function Fo(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Fo();const Wo=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...zo,...Wo];function Ko(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function mt({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>mt({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function bn({value:e,allowed:t,blocked:r}){const n=t?mt({input:e,matcher:t}):!0,i=r?mt({input:e,matcher:r}):!1;return n&&!i}function wn(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(bn({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Yo({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const o=Ko(r,HTMLInputElement),a=r.data,s=t;let l=o.value??"";if(a)if(a.length===1)bn({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:u}=wn({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}o.value!==l&&(o.value=l),s!==l&&i(l)}const J=oe()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:K(),inputBlocked:K()},styles:({hostClasses:e,cssVars:t})=>$`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ie["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${mn};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${U};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${dt};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${U};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Me["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${z["vira-interaction-animation-duration"].value};
            }

            label {
                ${U};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Me["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${vn({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${U};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${dt};
            }

            .close-x-button {
                ${U};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${z["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:o}=wn({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?b`
                  <${S.assign({icon:e.icon})} class="left-side-icon"></${S}>
              `:"",s=e.fitText?$`
                  width: ${r.forcedInputWidth}px;
              `:"";return b`
            <label>
                ${a}
                ${xe(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${hn(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${o||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${L("input",l=>{Yo({inputs:e,filteredValue:o,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!(e.showClearButton&&e.value),b`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${S.assign({icon:Ro})}></${S}>
                        </button>
                    `)}
                ${xe(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),qo=0;function Go(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==qo)}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var Tr;(function(e){e.Upper="upper",e.Lower="lower"})(Tr||(Tr={}));var xr;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(xr||(xr={}));function Jo(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Jo();oe()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>$`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,events:{routeChange:K()},renderCallback({inputs:e,dispatch:t,events:r}){var i,o;function n(a){e.route&&Go(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((i=e.link)!=null&&i.newTab)return b`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(o=e.route)==null?void 0:o.router.createRoutesUrl(e.route.route);return b`
                <a href=${a} rel="noopener noreferrer" ${L("click",n)}>
                    <slot></slot>
                </a>
            `}}});const Qo={Wheat:{yield:72,fertilityDependence:90},"Medicinal Herb":{fertilityDependence:90,yield:94},Cabbage:{yield:65,fertilityDependence:70}},Xo=Jn(Qo,(e,t)=>({...t,name:e}));function Zo(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var ne=Zo();function ea(){try{if(!ne||!ne.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function kt(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if(o.name!=="TypeError")throw o;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,n=new r,i=0;i<e.length;i+=1)n.append(e[i]);return n.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const v=Promise;function w(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function X(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function k(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Nt(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const vt="local-forage-detect-blob-support";let _e;const x={},ta=Object.prototype.toString,ye="readonly",Ye="readwrite";function ra(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),i=0;i<t;i++)n[i]=e.charCodeAt(i);return r}function na(e){return new v(function(t){var r=e.transaction(vt,Ye),n=kt([""]);r.objectStore(vt).put(n,"key"),r.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},r.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),o=navigator.userAgent.match(/Edge\//);t(o||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function ia(e){return typeof _e=="boolean"?v.resolve(_e):na(e).then(function(t){return _e=t,_e})}function Ne(e){var t=x[e.name],r={};r.promise=new v(function(n,i){r.resolve=n,r.reject=i}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function gt(e){var t=x[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function bt(e,t){var r=x[e.name],n=r.deferredOperations.pop();if(n)return n.reject(t),n.promise}function yn(e,t){return new v(function(r,n){if(x[e.name]=x[e.name]||Sn(),e.db)if(t)Ne(e),e.db.close();else return r(e.db);var i=[e.name];t&&i.push(e.version);var o=ne.open.apply(ne,i);t&&(o.onupgradeneeded=function(a){var s=o.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(vt)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),o.onerror=function(a){a.preventDefault(),n(o.error)},o.onsuccess=function(){var a=o.result;a.onversionchange=function(s){s.target.close()},r(a),gt(e)}})}function Ot(e){return yn(e,!1)}function Ht(e){return yn(e,!0)}function $n(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,i=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||r){if(r){var o=e.db.version+1;o>e.version&&(e.version=o)}return!0}return!1}function oa(e){return new v(function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(i){var o=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:o,type:e.type})},n.readAsBinaryString(e)})}function _n(e){var t=ra(atob(e.data));return kt([t],{type:e.type})}function En(e){return e&&e.__local_forage_encoded_blob}function aa(e){var t=this,r=t._initReady().then(function(){var n=x[t._dbInfo.name];if(n&&n.dbReady)return n.dbReady});return X(r,e,e),r}function sa(e){Ne(e);for(var t=x[e.name],r=t.forages,n=0;n<r.length;n++){const i=r[n];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,Ot(e).then(i=>(e.db=i,$n(e)?Ht(e):i)).then(i=>{e.db=t.db=i;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=i}).catch(i=>{throw bt(e,i),i})}function N(e,t,r,n){n===void 0&&(n=1);try{var i=e.db.transaction(e.storeName,t);r(null,i)}catch(o){if(n>0&&(!e.db||o.name==="InvalidStateError"||o.name==="NotFoundError"))return v.resolve().then(()=>{if(!e.db||o.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Ht(e)}).then(()=>sa(e).then(function(){N(e,t,r,n-1)})).catch(r);r(o)}}function Sn(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function la(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=e[n];var i=x[r.name];i||(i=Sn(),x[r.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=aa);var o=[];function a(){return v.resolve()}for(var s=0;s<i.forages.length;s++){var l=i.forages[s];l!==t&&o.push(l._initReady().catch(a))}var c=i.forages.slice(0);return v.all(o).then(function(){return r.db=i.db,Ot(r)}).then(function(u){return r.db=u,$n(r,t._defaultConfig.version)?Ht(r):u}).then(function(u){r.db=i.db=u,t._dbInfo=r;for(var f=0;f<c.length;f++){var d=c[f];d!==t&&(d._dbInfo.db=r.db,d._dbInfo.version=r.version)}})}function ca(e,t){var r=this;e=k(e);var n=new v(function(i,o){r.ready().then(function(){N(r._dbInfo,ye,function(a,s){if(a)return o(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),En(u)&&(u=_n(u)),i(u)},c.onerror=function(){o(c.error)}}catch(u){o(u)}})}).catch(o)});return w(n,t),n}function ua(e,t){var r=this,n=new v(function(i,o){r.ready().then(function(){N(r._dbInfo,ye,function(a,s){if(a)return o(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var f=c.result;if(f){var d=f.value;En(d)&&(d=_n(d));var h=e(d,f.key,u++);h!==void 0?i(h):f.continue()}else i()},c.onerror=function(){o(c.error)}}catch(f){o(f)}})}).catch(o)});return w(n,t),n}function fa(e,t,r){var n=this;e=k(e);var i=new v(function(o,a){var s;n.ready().then(function(){return s=n._dbInfo,ta.call(t)==="[object Blob]"?ia(s.db).then(function(l){return l?t:oa(t)}):t}).then(function(l){N(n._dbInfo,Ye,function(c,u){if(c)return a(c);try{var f=u.objectStore(n._dbInfo.storeName);l===null&&(l=void 0);var d=f.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),o(l)},u.onabort=u.onerror=function(){var h=d.error?d.error:d.transaction.error;a(h)}}catch(h){a(h)}})}).catch(a)});return w(i,r),i}function da(e,t){var r=this;e=k(e);var n=new v(function(i,o){r.ready().then(function(){N(r._dbInfo,Ye,function(a,s){if(a)return o(a);try{var l=s.objectStore(r._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){i()},s.onerror=function(){o(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;o(u)}}catch(u){o(u)}})}).catch(o)});return w(n,t),n}function ha(e){var t=this,r=new v(function(n,i){t.ready().then(function(){N(t._dbInfo,Ye,function(o,a){if(o)return i(o);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){n()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;i(c)}}catch(c){i(c)}})}).catch(i)});return w(r,e),r}function pa(e){var t=this,r=new v(function(n,i){t.ready().then(function(){N(t._dbInfo,ye,function(o,a){if(o)return i(o);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){n(l.result)},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return w(r,e),r}function ma(e,t){var r=this,n=new v(function(i,o){if(e<0){i(null);return}r.ready().then(function(){N(r._dbInfo,ye,function(a,s){if(a)return o(a);try{var l=s.objectStore(r._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var f=u.result;if(!f){i(null);return}e===0||c?i(f.key):(c=!0,f.advance(e))},u.onerror=function(){o(u.error)}}catch(f){o(f)}})}).catch(o)});return w(n,t),n}function va(e){var t=this,r=new v(function(n,i){t.ready().then(function(){N(t._dbInfo,ye,function(o,a){if(o)return i(o);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){n(c);return}c.push(u.key),u.continue()},l.onerror=function(){i(l.error)}}catch(u){i(u)}})}).catch(i)});return w(r,e),r}function ga(e,t){t=Nt.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,i;if(!e.name)i=v.reject("Invalid arguments");else{const a=e.name===r.name&&n._dbInfo.db?v.resolve(n._dbInfo.db):Ot(e).then(s=>{const l=x[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?i=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;Ne(e);const c=x[e.name],u=c.forages;s.close();for(let d=0;d<u.length;d++){const h=u[d];h._dbInfo.db=null,h._dbInfo.version=l}return new v((d,h)=>{const p=ne.open(e.name,l);p.onerror=m=>{p.result.close(),h(m)},p.onupgradeneeded=()=>{var m=p.result;m.deleteObjectStore(e.storeName)},p.onsuccess=()=>{const m=p.result;m.close(),d(m)}}).then(d=>{c.db=d;for(let h=0;h<u.length;h++){const p=u[h];p._dbInfo.db=d,gt(p._dbInfo)}}).catch(d=>{throw(bt(e,d)||v.resolve()).catch(()=>{}),d})}):i=a.then(s=>{Ne(e);const l=x[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const d=c[u];d._dbInfo.db=null}return new v((d,h)=>{var p=ne.deleteDatabase(e.name);p.onerror=()=>{const m=p.result;m&&m.close(),h(p.error)},p.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},p.onsuccess=()=>{const m=p.result;m&&m.close(),d(m)}}).then(d=>{l.db=d;for(var h=0;h<c.length;h++){const p=c[h];gt(p._dbInfo)}}).catch(d=>{throw(bt(e,d)||v.resolve()).catch(()=>{}),d})})}return w(i,t),i}var ba={_driver:"asyncStorage",_initStorage:la,_support:ea(),iterate:ua,getItem:ca,setItem:fa,removeItem:da,clear:ha,length:pa,key:ma,keys:va,dropInstance:ga};function wa(){return typeof openDatabase=="function"}var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ya="~~local_forage_type~",Ar=/^~~local_forage_type~([^~]+)~/,Oe="__lfsc__:",wt=Oe.length,Rt="arbf",yt="blob",Tn="si08",xn="ui08",An="uic8",Cn="si16",Ln="si32",Pn="ur16",Mn="ui32",In="fl32",kn="fl64",Cr=wt+Rt.length,Lr=Object.prototype.toString;function Nn(e){var t=e.length*.75,r=e.length,n,i=0,o,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<r;n+=4)o=H.indexOf(e[n]),a=H.indexOf(e[n+1]),s=H.indexOf(e[n+2]),l=H.indexOf(e[n+3]),u[i++]=o<<2|a>>4,u[i++]=(a&15)<<4|s>>2,u[i++]=(s&3)<<6|l&63;return c}function $t(e){var t=new Uint8Array(e),r="",n;for(n=0;n<t.length;n+=3)r+=H[t[n]>>2],r+=H[(t[n]&3)<<4|t[n+1]>>4],r+=H[(t[n+1]&15)<<2|t[n+2]>>6],r+=H[t[n+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function $a(e,t){var r="";if(e&&(r=Lr.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Lr.call(e.buffer)==="[object ArrayBuffer]")){var n,i=Oe;e instanceof ArrayBuffer?(n=e,i+=Rt):(n=e.buffer,r==="[object Int8Array]"?i+=Tn:r==="[object Uint8Array]"?i+=xn:r==="[object Uint8ClampedArray]"?i+=An:r==="[object Int16Array]"?i+=Cn:r==="[object Uint16Array]"?i+=Pn:r==="[object Int32Array]"?i+=Ln:r==="[object Uint32Array]"?i+=Mn:r==="[object Float32Array]"?i+=In:r==="[object Float64Array]"?i+=kn:t(new Error("Failed to get type for BinaryArray"))),t(i+$t(n))}else if(r==="[object Blob]"){var o=new FileReader;o.onload=function(){var a=ya+e.type+"~"+$t(this.result);t(Oe+yt+a)},o.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function _a(e){if(e.substring(0,wt)!==Oe)return JSON.parse(e);var t=e.substring(Cr),r=e.substring(wt,Cr),n;if(r===yt&&Ar.test(t)){var i=t.match(Ar);n=i[1],t=t.substring(i[0].length)}var o=Nn(t);switch(r){case Rt:return o;case yt:return kt([o],{type:n});case Tn:return new Int8Array(o);case xn:return new Uint8Array(o);case An:return new Uint8ClampedArray(o);case Cn:return new Int16Array(o);case Pn:return new Uint16Array(o);case Ln:return new Int32Array(o);case Mn:return new Uint32Array(o);case In:return new Float32Array(o);case kn:return new Float64Array(o);default:throw new Error("Unkown type: "+r)}}var Dt={serialize:$a,deserialize:_a,stringToBuffer:Nn,bufferToString:$t};function On(e,t,r,n){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],r,n)}function Ea(e){var t=this,r={db:null};if(e)for(var n in e)r[n]=typeof e[n]!="string"?e[n].toString():e[n];var i=new v(function(o,a){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(s){return a(s)}r.db.transaction(function(s){On(s,r,function(){t._dbInfo=r,o()},function(l,c){a(c)})},a)});return r.serializer=Dt,i}function D(e,t,r,n,i,o){e.executeSql(r,n,i,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?o(l,s):On(l,t,function(){l.executeSql(r,n,i,o)},o)},o):o(a,s)},o)}function Sa(e,t){var r=this;e=k(e);var n=new v(function(i,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){D(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),i(u)},function(l,c){o(c)})})}).catch(o)});return w(n,t),n}function Ta(e,t){var r=this,n=new v(function(i,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){D(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,f=u.length,d=0;d<f;d++){var h=u.item(d),p=h.value;if(p&&(p=a.serializer.deserialize(p)),p=e(p,h.key,d+1),p!==void 0){i(p);return}}i()},function(l,c){o(c)})})}).catch(o)});return w(n,t),n}function Hn(e,t,r,n){var i=this;e=k(e);var o=new v(function(a,s){i.ready().then(function(){t===void 0&&(t=null);var l=t,c=i._dbInfo;c.serializer.serialize(t,function(u,f){f?s(f):c.db.transaction(function(d){D(d,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(h,p){s(p)})},function(d){if(d.code===d.QUOTA_ERR){if(n>0){a(Hn.apply(i,[e,l,r,n-1]));return}s(d)}})})}).catch(s)});return w(o,r),o}function xa(e,t,r){return Hn.apply(this,[e,t,r,1])}function Aa(e,t){var r=this;e=k(e);var n=new v(function(i,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){D(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){i()},function(l,c){o(c)})})}).catch(o)});return w(n,t),n}function Ca(e){var t=this,r=new v(function(n,i){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(a){D(a,o,`DELETE FROM ${o.storeName}`,[],function(){n()},function(s,l){i(l)})})}).catch(i)});return w(r,e),r}function La(e){var t=this,r=new v(function(n,i){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(a){D(a,o,`SELECT COUNT(key) as c FROM ${o.storeName}`,[],function(s,l){var c=l.rows.item(0).c;n(c)},function(s,l){i(l)})})}).catch(i)});return w(r,e),r}function Pa(e,t){var r=this,n=new v(function(i,o){r.ready().then(function(){var a=r._dbInfo;a.db.transaction(function(s){D(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;i(u)},function(l,c){o(c)})})}).catch(o)});return w(n,t),n}function Ma(e){var t=this,r=new v(function(n,i){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(a){D(a,o,`SELECT key FROM ${o.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);n(c)},function(s,l){i(l)})})}).catch(i)});return w(r,e),r}function Ia(e){return new v(function(t,r){e.transaction(function(n){n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,o){for(var a=[],s=0;s<o.rows.length;s++)a.push(o.rows.item(s).name);t({db:e,storeNames:a})},function(i,o){r(o)})},function(n){r(n)})})}function ka(e,t){t=Nt.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var n=this,i;return e.name?i=new v(function(o){var a;e.name===r.name?a=n._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?o({db:a,storeNames:[e.storeName]}):o(Ia(a))}).then(function(o){return new v(function(a,s){o.db.transaction(function(l){function c(h){return new v(function(p,m){l.executeSql(`DROP TABLE IF EXISTS ${h}`,[],function(){p()},function(E,A){m(A)})})}for(var u=[],f=0,d=o.storeNames.length;f<d;f++)u.push(c(o.storeNames[f]));v.all(u).then(function(){a()}).catch(function(h){s(h)})},function(l){s(l)})})}):i=v.reject("Invalid arguments"),w(i,t),i}var Na={_driver:"webSQLStorage",_initStorage:Ea,_support:wa(),iterate:Ta,getItem:Sa,setItem:xa,removeItem:Aa,clear:Ca,length:La,key:Pa,keys:Ma,dropInstance:ka};function Oa(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Rn(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Ha(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Ra(){return!Ha()||localStorage.length>0}function Da(e){var t=this,r={};if(e)for(var n in e)r[n]=e[n];return r.keyPrefix=Rn(e,t._defaultConfig),Ra()?(t._dbInfo=r,r.serializer=Dt,v.resolve()):v.reject()}function Ba(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var o=localStorage.key(i);o.indexOf(n)===0&&localStorage.removeItem(o)}});return w(r,e),r}function Ua(e,t){var r=this;e=k(e);var n=r.ready().then(function(){var i=r._dbInfo,o=localStorage.getItem(i.keyPrefix+e);return o&&(o=i.serializer.deserialize(o)),o});return w(n,t),n}function ja(e,t){var r=this,n=r.ready().then(function(){for(var i=r._dbInfo,o=i.keyPrefix,a=o.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(o)===0){var f=localStorage.getItem(u);if(f&&(f=i.serializer.deserialize(f)),f=e(f,u.substring(a),l++),f!==void 0)return f}}});return w(n,t),n}function Va(e,t){var r=this,n=r.ready().then(function(){var i=r._dbInfo,o;try{o=localStorage.key(e)}catch{o=null}return o&&(o=o.substring(i.keyPrefix.length)),o});return w(n,t),n}function za(e){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,i=localStorage.length,o=[],a=0;a<i;a++){var s=localStorage.key(a);s.indexOf(n.keyPrefix)===0&&o.push(s.substring(n.keyPrefix.length))}return o});return w(r,e),r}function Fa(e){var t=this,r=t.keys().then(function(n){return n.length});return w(r,e),r}function Wa(e,t){var r=this;e=k(e);var n=r.ready().then(function(){var i=r._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return w(n,t),n}function Ka(e,t,r){var n=this;e=k(e);var i=n.ready().then(function(){t===void 0&&(t=null);var o=t;return new v(function(a,s){var l=n._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(o)}catch(f){(f.name==="QuotaExceededError"||f.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(f),s(f)}})})});return w(i,r),i}function Ya(e,t){if(t=Nt.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var n=this,i;return e.name?i=new v(function(o){e.storeName?o(Rn(e,n._defaultConfig)):o(`${e.name}/`)}).then(function(o){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(o)===0&&localStorage.removeItem(s)}}):i=v.reject("Invalid arguments"),w(i,t),i}var qa={_driver:"localStorageWrapper",_initStorage:Da,_support:Oa(),iterate:ja,getItem:Ua,setItem:Ka,removeItem:Wa,clear:Ba,length:Fa,key:Va,keys:za,dropInstance:Ya};const Ga=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Ja=(e,t)=>{const r=e.length;let n=0;for(;n<r;){if(Ga(e[n],t))return!0;n++}return!1},Dn=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},se={},Pr={},Z={INDEXEDDB:ba,WEBSQL:Na,LOCALSTORAGE:qa},Qa=[Z.INDEXEDDB._driver,Z.WEBSQL._driver,Z.LOCALSTORAGE._driver],Ae=["dropInstance"],nt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ae),Xa={description:"",driver:Qa.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Za(e,t){e[t]=function(){const r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function it(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let r in t)t.hasOwnProperty(r)&&(Dn(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}class Bt{constructor(t){for(let r in Z)if(Z.hasOwnProperty(r)){const n=Z[r],i=n._driver;this[r]=i,se[i]||this.defineDriver(n)}this._defaultConfig=it({},Xa),this._config=it({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let r in t){if(r==="storeName"&&(t[r]=t[r].replace(/\W/g,"_")),r==="version"&&typeof t[r]!="number")return new Error("Database version must be a number.");this._config[r]=t[r]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,r,n){const i=new v(function(o,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=nt.concat("_initStorage");for(let d=0,h=c.length;d<h;d++){const p=c[d];if((!Ja(Ae,p)||t[p])&&typeof t[p]!="function"){a(l);return}}(function(){const d=function(h){return function(){const p=new Error(`Method ${h} is not implemented by the current driver`),m=v.reject(p);return w(m,arguments[arguments.length-1]),m}};for(let h=0,p=Ae.length;h<p;h++){const m=Ae[h];t[m]||(t[m]=d(m))}})();const f=function(d){se[s]&&console.info(`Redefining LocalForage driver: ${s}`),se[s]=t,Pr[s]=d,o()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(f,a):f(!!t._support):f(!0)}catch(s){a(s)}});return X(i,r,n),i}driver(){return this._driver||null}getDriver(t,r,n){const i=se[t]?v.resolve(se[t]):v.reject(new Error("Driver not found."));return X(i,r,n),i}getSerializer(t){const r=v.resolve(Dt);return X(r,t),r}ready(t){const r=this,n=r._driverSet.then(()=>(r._ready===null&&(r._ready=r._initDriver()),r._ready));return X(n,t,t),n}setDriver(t,r,n){const i=this;Dn(t)||(t=[t]);const o=this._getSupportedDrivers(t);function a(){i._config.driver=i.driver()}function s(u){return i._extend(u),a(),i._ready=i._initStorage(i._config),i._ready}function l(u){return function(){let f=0;function d(){for(;f<u.length;){let p=u[f];return f++,i._dbInfo=null,i._ready=null,i.getDriver(p).then(s).catch(d)}a();const h=new Error("No available storage method found.");return i._driverSet=v.reject(h),i._driverSet}return d()}}const c=this._driverSet!==null?this._driverSet.catch(()=>v.resolve()):v.resolve();return this._driverSet=c.then(()=>{const u=o[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(f=>{i._driver=f._driver,a(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(o)})}).catch(()=>{a();const u=new Error("No available storage method found.");return i._driverSet=v.reject(u),i._driverSet}),X(this._driverSet,r,n),this._driverSet}supports(t){return!!Pr[t]}_extend(t){it(this,t)}_getSupportedDrivers(t){const r=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];this.supports(o)&&r.push(o)}return r}_wrapLibraryMethodsWithReady(){for(let t=0,r=nt.length;t<r;t++)Za(this,nt[t])}createInstance(t){return new Bt(t)}}const es=new Bt,ts=es,He={tilesPerWorker:64,maxFarmSize:500,minFarmSize:16},_t={farmSize:String(He.minFarmSize),fertility:"90"},Bn="calculationInputs",Un=ts.createInstance({description:"last calculations for KRCYC app",name:"krcyc",storeName:"krcyc"});async function rs(){return await Un.getItem(Bn)||[_t]}async function ns(e){await Un.setItem(Bn,e)}function is(e,t,r){return Math.round(e.yield/100*Fn({value:t,min:He.minFarmSize,max:He.maxFarmSize})*(1-(1-r/100)*e.fertilityDependence/100))}function os(e,t,r){const n=is(r,e,t),i=e/He.tilesPerWorker;return[{label:"Workers",value:i},{label:"Harvest",value:n},{label:"per tile",value:n/e},{label:"per worker",value:n/Math.ceil(i)},{label:"approx people fed",value:Math.floor(n/12)}]}const as="All",ot=fn()({tagName:"vir-calculator",stateInitStatic:{selectedCropName:as},events:{calculationInputsChange:K()},styles:$`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .error {
            color: red;
        }

        p {
            ${It};
        }

        table {
            align-self: flex-start;
        }

        td:first-child {
            text-align: right;
            padding-right: 16px;
        }
    `,renderCallback({inputs:e,events:t,dispatch:r}){const n=Object.values(e.crops),{errors:i,cropStats:o}=ss(e.calculationInputs.farmSize,e.calculationInputs.fertility,n),a=o.map(({crop:l,stats:c})=>{const u=c.map(f=>{const d=_(f.value,"number")?f.value.toFixed(1):f.value;return b`
                    <tr>
                        <td>${f.label}</td>
                        <td>${d}</td>
                    </tr>
                `});return b`
                <h3>${l.name}</h3>
                <table><tbody>${u}</tbody></table>
            `}),s=i.map(l=>b`
                <p class="error">
                    ${l?Wn(l):b`
                              &nbsp;
                          `}
                </p>
            `);return b`
            <span>Farm Size</span>
            <${J.assign({value:e.calculationInputs.farmSize})}
                ${L(J.events.valueChange,l=>{r(new t.calculationInputsChange({...e.calculationInputs,farmSize:l.detail}))})}
            ></${J}>
            <span>Fertility</span>
            <${J.assign({value:e.calculationInputs.fertility})}
                ${L(J.events.valueChange,l=>{r(new t.calculationInputsChange({...e.calculationInputs,fertility:l.detail}))})}
            ></${J}>

            ${s} ${a}
        `}});function ss(e,t,r){const n=[void 0,void 0],i=Number(e);isNaN(i)&&(n[0]=new Error("Farm size input is not a number."));const o=Number(t);isNaN(o)&&(n[1]=new Error("Fertility input is not a number."));const a=r.map(s=>({crop:s,stats:os(i,o,s||{fertilityDependence:NaN,name:"",yield:NaN})}));return{errors:n,cropStats:a}}Ke({tagName:"vir-app",styles:$`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-family: sans-serif;
            padding: 32px;
            gap: 16px;
        }

        article {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        h1 {
            ${It};
        }
    `,stateInitStatic:{allCalculations:Eo({defaultValue:rs()})},renderCallback({state:e}){if(!To(e.allCalculations.value))return b`
                <${S.assign({icon:gn})}
                    class="loader"
                ></${S}>
            `;const t=xo(e.allCalculations.value)?[_t]:e.allCalculations.value;async function r(i){const o=Gn(t);i(o),e.allCalculations.setResolvedValue(o),await ns(o)}const n=t.map((i,o)=>b`
                <${ot.assign({crops:Xo,calculationInputs:i})}
                    ${L(ot.events.calculationInputsChange,async a=>{await r(s=>{s[o]=a.detail})})}
                ></${ot}>
            `);return b`
            <h1>Kingdoms Reborn Crop Yield Calculator</h1>
            <button
                ${L("click",async()=>{await r(i=>{i.push(_t)})})}
            >
                +
            </button>
            <article>${n}</article>
        `}});
