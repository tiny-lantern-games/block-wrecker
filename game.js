var vd=2;var Fp=0,Op=1,sa=2;var yd=1,Sr=2;var Li=100,zp=101,kp=102;var Vp=200,Hp=201,Gp=202,Wp=203,bl=204,wl=205,qp=206,jp=207,Xp=208,Yp=209,Zp=210,$p=211,Jp=212,Kp=213,Qp=214,ef=0,tf=1,nf=2,sf=3,rf=4,of=5,af=6,lf=7;var xd=4;var _d=300,Ms=301,bs=302,Sl=303,El=304,ra=306,lr=1e3,cr=1001,Tl=1002,an=1003,cf=1004;var Hr=1005;var Dn=1006,za=1007;var vs=1008;var oi=1009,Md=1010,bd=1011,hr=1012,Zc=1013,Bi=1014,vn=1015,Er=1016,$c=1017,Jc=1018,ws=1020,wd=35902,Sd=1021,Ed=1022,yn=1023,Td=1024,Ad=1025,ur=1026,Ss=1027,Kc=1028,Qc=1029,Cd=1030,eh=1031;var th=1033,Mo=33776,bo=33777,wo=33778,So=33779,Al=35840,Cl=35841,Rl=35842,Il=35843,Pl=36196,Ll=37492,Nl=37496,Ul=37808,Bl=37809,Dl=37810,Fl=37811,Ol=37812,zl=37813,kl=37814,Vl=37815,Hl=37816,Gl=37817,Wl=37818,ql=37819,jl=37820,Xl=37821,Eo=36492,Yl=36494,Zl=36495,Rd=36283,$l=36284,Jl=36285,Kl=36286;var Ao=2300,Ql=2301,ka=2302,au=2400,lu=2401,cu=2402;var gs="",Rt="srgb",Ps="srgb-linear",oa="linear",Ze="srgb";var Ki=7680;var hf=512,uf=513,df=514,pf=515,ff=516,mf=517,gf=518,vf=519,ec=35044;var hu="300 es",Es=2e3,Co=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var To=Math.PI/180,tc=180/Math.PI;function Fn(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(At[255&s]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[255&e]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[63&t|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[255&n]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function yf(s,e){return(s%e+e)%e}function Va(s,e,t){return(1-t)*s+t*e}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],y=i[0],m=i[3],v=i[6],g=i[1],x=i[4],_=i[7],w=i[2],b=i[5],C=i[8];return r[0]=o*y+a*g+l*w,r[3]=o*m+a*x+l*b,r[6]=o*v+a*_+l*C,r[1]=c*y+h*g+d*w,r[4]=c*m+h*x+d*b,r[7]=c*v+h*_+d*C,r[2]=u*y+p*g+f*w,r[5]=u*m+p*x+f*b,r[8]=u*v+p*_+f*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,f=t*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=d*y,e[1]=(i*c-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=u*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Pe;function Id(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xf(){let s=Ro("canvas");return s.style.display="block",s}var uu={};function sr(s){s in uu||(uu[s]=!0,console.warn(s))}var Ge={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Ze&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?oa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function On(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function xs(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var du=[.64,.33,.3,.6,.15,.06],pu=[.2126,.7152,.0722],fu=[.3127,.329],mu=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Qi;Ge.define({[Ps]:{primaries:du,whitePoint:fu,transfer:oa,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:pu,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:du,whitePoint:fu,transfer:Ze,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:pu,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var nc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Ro("canvas")),Qi.width=e.width,Qi.height=e.height;let n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=255*On(r[o]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*On(t[n]/255)):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_f=0,Io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ga(i[o].image)):r.push(Ga(i[o]))}else r=Ga(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mf=0,Ft=class s extends ai{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,l=1009,c=s.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Fn(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=_d,Ft.DEFAULT_ANISOTROPY=1;var Xe=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],y=l[2],m=l[6],v=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(p+1)/2,w=(v+1)/2,b=(h+u)/4,C=(d+y)/4,I=(f+m)/4;return x>_&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=C/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=I/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=I/r),this.set(n,i,r,t),this}let g=Math.sqrt((m-f)*(m-f)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(d-y)/g,this.z=(u-h)/g,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],p=r[o+1],f=r[o+2],y=r[o+3];if(a===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(a===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=y);if(d!==y||l!==u||c!==p||h!==f){let m=1-a,v=l*u+c*p+h*f+d*y,g=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){let w=Math.sqrt(x),b=Math.atan2(w,v*g);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}let _=a*g;if(l=l*m+u*_,c=c*m+p*_,h=h*m+f*_,d=d*m+y*_,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-a*p,e[t+2]=c*f+h*p+a*u-l*d,e[t+3]=h*f-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wa=new S,vu=new xn,cn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Wr.subVectors(this.max,js),es.subVectors(e.a,js),ts.subVectors(e.b,js),ns.subVectors(e.c,js),Kn.subVectors(ts,es),Qn.subVectors(ns,ts),Ei.subVectors(es,ns);let t=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-Ei.z,Ei.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,Ei.z,0,-Ei.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-Ei.y,Ei.x,0];return!!qa(t,es,ts,ns,Wr)&&(t=[1,0,0,0,1,0,0,0,1],!!qa(t,es,ts,ns,Wr)&&(qr.crossVectors(Kn,Qn),t=[qr.x,qr.y,qr.z],qa(t,es,ts,ns,Wr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(sn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rn=[new S,new S,new S,new S,new S,new S,new S,new S],sn=new S,Gr=new cn,es=new S,ts=new S,ns=new S,Kn=new S,Qn=new S,Ei=new S,js=new S,Wr=new S,qr=new S,Ti=new S;function qa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);let a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var bf=new cn,Xs=new S,ja=new S,hn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);let t=Xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(ja)),this.expandByPoint(Xs.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new S,Xa=new S,jr=new S,ei=new S,Ya=new S,Xr=new S,Za=new S,Di=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xa.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Xa);let r=.5*e.distanceTo(t),o=-this.direction.dot(jr),a=ei.dot(this.direction),l=-ei.dot(jr),c=ei.lengthSq(),h=Math.abs(1-o*o),d,u,p,f;if(h>0)if(d=o*l-a,u=o*a-l,f=r*h,d>=0)if(u>=-f)if(u<=f){let y=1/h;d*=y,u*=y,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xa).addScaledVector(jr,u),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);let n=In.dot(this.direction),i=In.dot(In)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i?null:((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i?null:((a>n||n!=n)&&(n=a),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,r){Ya.subVectors(t,e),Xr.subVectors(n,e),Za.crossVectors(Ya,Xr);let o,a=this.direction.dot(Za);if(a>0){if(i)return null;o=1}else{if(!(a<0))return null;o=-1,a=-a}ei.subVectors(this.origin,e);let l=o*this.direction.dot(Xr.crossVectors(ei,Xr));if(l<0)return null;let c=o*this.direction.dot(Ya.cross(ei));if(c<0||l+c>a)return null;let h=-o*ei.dot(Za);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class s{constructor(e,t,n,i,r,o,a,l,c,h,d,u,p,f,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,u,p,f,y,m)}set(e,t,n,i,r,o,a,l,c,h,d,u,p,f,y,m){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=u,v[3]=p,v[7]=f,v[11]=y,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,f=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,y=c*d;t[0]=u+y*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-f,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,f=a*h,y=a*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,f=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=f*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,p=o*c,f=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Sf)}lookAt(e,t,n){let i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ti.crossVectors(n,Gt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ti.crossVectors(n,Gt)),ti.normalize(),Yr.crossVectors(Gt,ti),i[0]=ti.x,i[4]=Yr.x,i[8]=Gt.x,i[1]=ti.y,i[5]=Yr.y,i[9]=Gt.y,i[2]=ti.z,i[6]=Yr.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],y=n[6],m=n[10],v=n[14],g=n[3],x=n[7],_=n[11],w=n[15],b=i[0],C=i[4],I=i[8],U=i[12],F=i[1],W=i[5],V=i[9],L=i[13],N=i[2],H=i[6],O=i[10],ee=i[14],$=i[3],ae=i[7],pe=i[11],Q=i[15];return r[0]=o*b+a*F+l*N+c*$,r[4]=o*C+a*W+l*H+c*ae,r[8]=o*I+a*V+l*O+c*pe,r[12]=o*U+a*L+l*ee+c*Q,r[1]=h*b+d*F+u*N+p*$,r[5]=h*C+d*W+u*H+p*ae,r[9]=h*I+d*V+u*O+p*pe,r[13]=h*U+d*L+u*ee+p*Q,r[2]=f*b+y*F+m*N+v*$,r[6]=f*C+y*W+m*H+v*ae,r[10]=f*I+y*V+m*O+v*pe,r[14]=f*U+y*L+m*ee+v*Q,r[3]=g*b+x*F+_*N+w*$,r[7]=g*C+x*W+_*H+w*ae,r[11]=g*I+x*V+_*O+w*pe,r[15]=g*U+x*L+_*ee+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*p-n*l*p)+e[7]*(+t*l*p-t*c*u+r*o*u-i*o*p+i*c*h-r*l*h)+e[11]*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+e[15]*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],y=e[13],m=e[14],v=e[15],g=d*m*c-y*u*c+y*l*p-a*m*p-d*l*v+a*u*v,x=f*u*c-h*m*c-f*l*p+o*m*p+h*l*v-o*u*v,_=h*y*c-f*d*c+f*a*p-o*y*p-h*a*v+o*d*v,w=f*d*l-h*y*l-f*a*u+o*y*u+h*a*m-o*d*m,b=t*g+n*x+i*_+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return e[0]=g*C,e[1]=(y*u*r-d*m*r-y*i*p+n*m*p+d*i*v-n*u*v)*C,e[2]=(a*m*r-y*l*r+y*i*c-n*m*c-a*i*v+n*l*v)*C,e[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*p-n*l*p)*C,e[4]=x*C,e[5]=(h*m*r-f*u*r+f*i*p-t*m*p-h*i*v+t*u*v)*C,e[6]=(f*l*r-o*m*r-f*i*c+t*m*c+o*i*v-t*l*v)*C,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*p+t*l*p)*C,e[8]=_*C,e[9]=(f*d*r-h*y*r-f*n*p+t*y*p+h*n*v-t*d*v)*C,e[10]=(o*y*r-f*a*r+f*n*c-t*y*c-o*n*v+t*a*v)*C,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*p-t*a*p)*C,e[12]=w*C,e[13]=(h*y*i-f*d*i+f*n*u-t*y*u-h*n*m+t*d*m)*C,e[14]=(f*a*i-o*y*i-f*n*l+t*y*l+o*n*m-t*a*m)*C,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,f=r*d,y=o*h,m=o*d,v=a*d,g=l*c,x=l*h,_=l*d,w=n.x,b=n.y,C=n.z;return i[0]=(1-(y+v))*w,i[1]=(p+_)*w,i[2]=(f-x)*w,i[3]=0,i[4]=(p-_)*b,i[5]=(1-(u+v))*b,i[6]=(m+g)*b,i[7]=0,i[8]=(f+x)*C,i[9]=(m-g)*C,i[10]=(1-(u+y))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=is.set(i[0],i[1],i[2]).length(),o=is.set(i[4],i[5],i[6]).length(),a=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);let l=1/r,c=1/o,h=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=c,rn.elements[5]*=c,rn.elements[6]*=c,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=2e3){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,f;if(a===Es)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else{if(a!==Co)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);p=-o/(o-r),f=-o*r/(o-r)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*c,p=(n+i)*h,f,y;if(a===Es)f=(o+r)*d,y=-2*d;else{if(a!==Co)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);f=r*d,y=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},is=new S,rn=new Re,wf=new S(0,0,0),Sf=new S(1,1,1),ti=new S,Yr=new S,Gt=new S,yu=new Re,xu=new xn,_n=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Ef=0,_u=new S,ss=new xn,Pn=new Re,Zr=new S,Ys=new S,Tf=new S,Af=new xn,Mu=new S(1,0,0),bu=new S(0,1,0),wu=new S(0,0,1),Su={type:"added"},Cf={type:"removed"},rs={type:"childadded",child:null},$a={type:"childremoved",child:null},Pt=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new S,t=new _n,n=new xn,i=new S(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Pe}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ys,Zr,this.up):Pn.lookAt(Zr,Ys,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Pn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Pt.DEFAULT_UP=new S(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new S,Ln=new S,Ja=new S,Nn=new S,os=new S,as=new S,Eu=new S,Ka=new S,Qa=new S,el=new S,tl=new Xe,nl=new Xe,il=new Xe,Bn=class s{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){on.subVectors(i,t),Ln.subVectors(n,t),Ja.subVectors(e,t);let o=on.dot(on),a=on.dot(Ln),l=on.dot(Ja),c=Ln.dot(Ln),h=Ln.dot(Ja),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,f=(o*h-a*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,n),il.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(nl,r.y),o.addScaledVector(il,r.z),o}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),Ln.subVectors(e,t),on.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),.5*on.cross(Ln).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;os.subVectors(i,n),as.subVectors(r,n),Ka.subVectors(e,n);let l=os.dot(Ka),c=as.dot(Ka);if(l<=0&&c<=0)return t.copy(n);Qa.subVectors(e,i);let h=os.dot(Qa),d=as.dot(Qa);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(os,o);el.subVectors(e,r);let p=os.dot(el),f=as.dot(el);if(f>=0&&p<=f)return t.copy(r);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(as,a);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Eu.subVectors(r,i),a=(d-h)/(d-h+(p-f)),t.copy(i).addScaledVector(Eu,a);let v=1/(m+y+u);return o=y*v,a=u*v,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},$r={h:0,s:0,l:0};function sl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=yf(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sl(o,r,e+1/3),this.g=sl(o,r,e),this.b=sl(o,r,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ge.fromWorkingColorSpace(Ct.copy(this),e),65536*Math.round(St(255*Ct.r,0,255))+256*Math.round(St(255*Ct.g,0,255))+Math.round(St(255*Ct.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,i=Ct.g,r=Ct.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Rt){Ge.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,i=Ct.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL($r);let n=Va(ni.h,$r.h,t),i=Va(ni.s,$r.s,t),r=Va(ni.l,$r.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Ae;Ae.NAMES=Pd;var Rf=0,li=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Fn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},kn=class extends li{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vy=If();function If(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}var ut=new S,Jr=new oe,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var Lo=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var No=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ee=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pf=0,Xt=new Re,rl=new Pt,ls=new S,Wt=new cn,Zs=new cn,yt=new S,rt=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?No:Lo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Wt.min,Zs.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,Zs.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(Zs.min),Wt.expandByPoint(Zs.max))}Wt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),yt.add(ls)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new S,l[I]=new S;let c=new S,h=new S,d=new S,u=new oe,p=new oe,f=new oe,y=new S,m=new S;function v(I,U,F){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,F),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,U),f.fromBufferAttribute(r,F),h.sub(c),d.sub(c),p.sub(u),f.sub(u);let W=1/(p.x*f.y-f.x*p.y);isFinite(W)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(W),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(W),a[I].add(y),a[U].add(y),a[F].add(y),l[I].add(m),l[U].add(m),l[F].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let I=0,U=g.length;I<U;++I){let F=g[I],W=F.start;for(let V=W,L=W+F.count;V<L;V+=3)v(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let x=new S,_=new S,w=new S,b=new S;function C(I){w.fromBufferAttribute(i,I),b.copy(w);let U=a[I];x.copy(U),x.sub(w.multiplyScalar(w.dot(U))).normalize(),_.crossVectors(b,U);let F=_.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,F)}for(let I=0,U=g.length;I<U;++I){let F=g[I],W=F.start;for(let V=W,L=W+F.count;V<L;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new S,r=new S,o=new S,a=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let y=0,m=l.length;y<m;y++){p=a.isInterleavedBufferAttribute?l[y]*a.data.stride+a.offset:l[y]*h;for(let v=0;v<h;v++)u[f++]=c[p++]}return new Ot(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=e(i[a],n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tu=new Re,Ai=new Di,Kr=new hn,Au=new S,Qr=new S,eo=new S,to=new S,ol=new S,no=new S,Cu=new S,io=new S,st=class extends Pt{constructor(e=new rt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ol.fromBufferAttribute(d,e),o?no.addScaledVector(ol,h):no.addScaledVector(ol.sub(t),h))}t.add(no)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),Kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Kr,Au)===null||Ai.origin.distanceToSquared(Au)>(e.far-e.near)**2))return;Tu.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Tu),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ai)}}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,y=u.length;f<y;f++){let m=u[f],v=o[m.materialIndex];for(let g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));g<x;g+=3)i=so(this,v,e,n,c,h,d,a.getX(g),a.getX(g+1),a.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);f<y;f+=3)i=so(this,o,e,n,c,h,d,a.getX(f),a.getX(f+1),a.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(o))for(let f=0,y=u.length;f<y;f++){let m=u[f],v=o[m.materialIndex];for(let g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));g<x;g+=3)i=so(this,v,e,n,c,h,d,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);f<y;f+=3)i=so(this,o,e,n,c,h,d,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function so(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Qr),s.getVertexPosition(l,eo),s.getVertexPosition(c,to);let h=(function(d,u,p,f,y,m,v,g){let x;if(x=u.side===1?f.intersectTriangle(v,m,y,!0,g):f.intersectTriangle(y,m,v,u.side===0,g),x===null)return null;io.copy(g),io.applyMatrix4(d.matrixWorld);let _=p.ray.origin.distanceTo(io);return _<p.near||_>p.far?null:{distance:_,point:io.clone(),object:d}})(s,e,t,n,Qr,eo,to,Cu);if(h){let d=new S;Bn.getBarycoord(Cu,Qr,eo,to,d),i&&(h.uv=Bn.getInterpolatedAttribute(i,a,l,c,d,new oe)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,l,c,d,new oe)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,l,c,d,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new S,materialIndex:0};Bn.getNormal(Qr,eo,to,u.normal),h.face=u,h.barycoord=d}return h}var xt=class s extends rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;function f(y,m,v,g,x,_,w,b,C,I,U){let F=_/C,W=w/I,V=_/2,L=w/2,N=b/2,H=C+1,O=I+1,ee=0,$=0,ae=new S;for(let pe=0;pe<O;pe++){let Q=pe*W-L;for(let J=0;J<H;J++){let de=J*F-V;ae[y]=de*g,ae[m]=Q*x,ae[v]=N,c.push(ae.x,ae.y,ae.z),ae[y]=0,ae[m]=0,ae[v]=b>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(J/C),d.push(1-pe/I),ee+=1}}for(let pe=0;pe<I;pe++)for(let Q=0;Q<C;Q++){let J=u+Q+H*pe,de=u+Q+H*(pe+1),ve=u+(Q+1)+H*(pe+1),ue=u+(Q+1)+H*pe;l.push(J,de,ue),l.push(de,ve,ue),$+=6}a.addGroup(p,$,U),p+=$,u+=ee}f("z","y","x",-1,-1,n,t,e,o,r,0),f("z","y","x",1,-1,n,t,-e,o,r,1),f("x","z","y",1,1,e,n,t,i,o,2),f("x","z","y",1,-1,e,n,-t,i,o,3),f("x","y","z",1,-1,e,t,n,i,r,4),f("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ts(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){let e={};for(let t=0;t<s.length;t++){let n=Ts(s[t]);for(let i in n)e[i]=n[i]}return e}function Ld(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Lf={clone:Ts,merge:Ut},Mn=class extends li{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},pr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Es}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new S,Ru=new oe,Iu=new oe,It=class extends pr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*tc*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*To*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*tc*Math.atan(Math.tan(.5*To*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Iu),t.subVectors(Iu,Ru)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*To*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=-90,rc=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new It(cs,1,e,t);i.layers=this.layers,this.add(i);let r=new It(cs,1,e,t);r.layers=this.layers,this.add(r);let o=new It(cs,1,e,t);o.layers=this.layers,this.add(o);let a=new It(cs,1,e,t);a.layers=this.layers,this.add(a);let l=new It(cs,1,e,t);l.layers=this.layers,this.add(l);let c=new It(cs,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Es)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Co)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Uo=class extends Ft{constructor(e,t,n,i,r,o,a,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Ms,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let o=new st(i,r),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=Dn),new rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},al=new S,Nf=new S,Uf=new Pe,Un=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=al.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Uf.getNormalMatrix(e),i=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new hn,ro=new S,As=class{constructor(e=new Un,t=new Un,n=new Un,i=new Un,r=new Un,o=new Un){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],f=i[9],y=i[10],m=i[11],v=i[12],g=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,u-c,m-p,_-v).normalize(),n[1].setComponents(l+r,u+c,m+p,_+v).normalize(),n[2].setComponents(l+o,u+h,m+f,_+g).normalize(),n[3].setComponents(l-o,u-h,m-f,_-g).normalize(),n[4].setComponents(l-a,u-d,m-y,_-x).normalize(),t===Es)n[5].setComponents(l+a,u+d,m+y,_+x).normalize();else{if(t!==Co)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(a,d,y,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ro.x=i.normal.x>0?e.max.x:e.min.x,ro.y=i.normal.y>0?e.max.y:e.min.y,ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bf(s){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(s.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(r,o){let a=r.array,l=r.usage,c=a.byteLength,h=s.createBuffer(),d;if(s.bindBuffer(o,h),s.bufferData(o,a,l),r.onUploadCallback(),a instanceof Float32Array)d=s.FLOAT;else if(a instanceof Uint16Array)d=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(a instanceof Int16Array)d=s.SHORT;else if(a instanceof Uint32Array)d=s.UNSIGNED_INT;else if(a instanceof Int32Array)d=s.INT;else if(a instanceof Int8Array)d=s.BYTE;else if(a instanceof Uint8Array)d=s.UNSIGNED_BYTE;else{if(!(a instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);d=s.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:a.BYTES_PER_ELEMENT,version:r.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,o,a){let l=o.array,c=o.updateRanges;if(s.bindBuffer(a,r),c.length===0)s.bufferSubData(a,0,l);else{c.sort(((d,u)=>d.start-u.start));let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];s.bufferSubData(a,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}o.clearUpdateRanges()}o.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Fi=class s extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,p=[],f=[],y=[],m=[];for(let v=0;v<h;v++){let g=v*u-o;for(let x=0;x<c;x++){let _=x*d-r;f.push(_,-g,0),y.push(0,0,1),m.push(x/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let g=0;g<a;g++){let x=g+c*v,_=g+c*(v+1),w=g+1+c*(v+1),b=g+1+c*v;p.push(x,_,b),p.push(_,w,b)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},mn={basic:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ut([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ut([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ut([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ut([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ut([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ut([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ut([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ut([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ut([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ut([he.common,he.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ut([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};mn.physical={uniforms:Ut([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var oo={r:0,b:0,g:0},Ri=new _n,Df=new Re;function Ff(s,e,t,n,i,r,o){let a=new Ae(0),l,c,h=r===!0?0:1,d=null,u=0,p=null;function f(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v}function y(m,v){m.getRGB(oo,Ld(s)),n.buffers.color.setClear(oo.r,oo.g,oo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),h=v,y(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,y(a,h)},render:function(m){let v=!1,g=f(m);g===null?y(a,h):g&&g.isColor&&(y(g,1),v=!0);let x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(m,v){let g=f(v);g&&(g.isCubeTexture||g.mapping===ra)?(c===void 0&&(c=new st(new xt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ts(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(Ri)),c.material.toneMapped=Ge.getTransfer(g.colorSpace)!==Ze,d===g&&u===g.version&&p===s.toneMapping||(c.material.needsUpdate=!0,d=g,u=g.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new st(new Fi(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ts(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(g.colorSpace)!==Ze,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),d===g&&u===g.version&&p===s.toneMapping||(l.material.needsUpdate=!0,d=g,u=g.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Of(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=c(null),r=i,o=!1;function a(v){return s.bindVertexArray(v)}function l(v){return s.deleteVertexArray(v)}function c(v){let g=[],x=[],_=[];for(let w=0;w<t;w++)g[w]=0,x[w]=0,_[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:x,attributeDivisors:_,object:v,attributes:{},index:null}}function h(){let v=r.newAttributes;for(let g=0,x=v.length;g<x;g++)v[g]=0}function d(v){u(v,0)}function u(v,g){let x=r.newAttributes,_=r.enabledAttributes,w=r.attributeDivisors;x[v]=1,_[v]===0&&(s.enableVertexAttribArray(v),_[v]=1),w[v]!==g&&(s.vertexAttribDivisor(v,g),w[v]=g)}function p(){let v=r.newAttributes,g=r.enabledAttributes;for(let x=0,_=g.length;x<_;x++)g[x]!==v[x]&&(s.disableVertexAttribArray(x),g[x]=0)}function f(v,g,x,_,w,b,C){C===!0?s.vertexAttribIPointer(v,g,x,w,b):s.vertexAttribPointer(v,g,x,_,w,b)}function y(){m(),o=!0,r!==i&&(r=i,a(r.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(v,g,x,_,w){let b=!1,C=(function(I,U,F){let W=F.wireframe===!0,V=n[I.id];V===void 0&&(V={},n[I.id]=V);let L=V[U.id];L===void 0&&(L={},V[U.id]=L);let N=L[W];return N===void 0&&(N=c(s.createVertexArray()),L[W]=N),N})(_,x,g);r!==C&&(r=C,a(r.object)),b=(function(I,U,F,W){let V=r.attributes,L=U.attributes,N=0,H=F.getAttributes();for(let O in H)if(H[O].location>=0){let ee=V[O],$=L[O];if($===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),ee===void 0||ee.attribute!==$||$&&ee.data!==$.data)return!0;N++}return r.attributesNum!==N||r.index!==W})(v,_,x,w),b&&(function(I,U,F,W){let V={},L=U.attributes,N=0,H=F.getAttributes();for(let O in H)if(H[O].location>=0){let ee=L[O];ee===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));let $={};$.attribute=ee,ee&&ee.data&&($.data=ee.data),V[O]=$,N++}r.attributes=V,r.attributesNum=N,r.index=W})(v,_,x,w),w!==null&&e.update(w,s.ELEMENT_ARRAY_BUFFER),(b||o)&&(o=!1,(function(I,U,F,W){h();let V=W.attributes,L=F.getAttributes(),N=U.defaultAttributeValues;for(let H in L){let O=L[H];if(O.location>=0){let ee=V[H];if(ee===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){let $=ee.normalized,ae=ee.itemSize,pe=e.get(ee);if(pe===void 0)continue;let Q=pe.buffer,J=pe.type,de=pe.bytesPerElement,ve=J===s.INT||J===s.UNSIGNED_INT||ee.gpuType===Zc;if(ee.isInterleavedBufferAttribute){let ue=ee.data,R=ue.stride,A=ee.offset;if(ue.isInstancedInterleavedBuffer){for(let G=0;G<O.locationSize;G++)u(O.location+G,ue.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let G=0;G<O.locationSize;G++)d(O.location+G);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let G=0;G<O.locationSize;G++)f(O.location+G,ae/O.locationSize,J,$,R*de,(A+ae/O.locationSize*G)*de,ve)}else{if(ee.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)u(O.location+ue,ee.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ue=0;ue<O.locationSize;ue++)d(O.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let ue=0;ue<O.locationSize;ue++)f(O.location+ue,ae/O.locationSize,J,$,ae*de,ae/O.locationSize*ue*de,ve)}}else if(N!==void 0){let $=N[H];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(O.location,$);break;case 3:s.vertexAttrib3fv(O.location,$);break;case 4:s.vertexAttrib4fv(O.location,$);break;default:s.vertexAttrib1fv(O.location,$)}}}}p()})(v,g,x,_),w!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:y,resetDefaultState:m,dispose:function(){y();for(let v in n){let g=n[v];for(let x in g){let _=g[x];for(let w in _)l(_[w].object),delete _[w];delete g[x]}delete n[v]}},releaseStatesOfGeometry:function(v){if(n[v.id]===void 0)return;let g=n[v.id];for(let x in g){let _=g[x];for(let w in _)l(_[w].object),delete _[w];delete g[x]}delete n[v.id]},releaseStatesOfProgram:function(v){for(let g in n){let x=n[g];if(x[v.id]===void 0)continue;let _=x[v.id];for(let w in _)l(_[w].object),delete _[w];delete x[v.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function zf(s,e,t){let n;function i(r,o,a){a!==0&&(s.drawArraysInstanced(n,r,o,a),t.update(o,n,a))}this.setMode=function(r){n=r},this.render=function(r,o){s.drawArrays(n,r,o),t.update(o,n,1)},this.renderInstances=i,this.renderMultiDraw=function(r,o,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,o,0,a);let l=0;for(let c=0;c<a;c++)l+=o[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(r,o,a,l){if(a===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<r.length;h++)i(r[h],o[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,r,0,o,0,l,0,a);let h=0;for(let d=0;d<a;d++)h+=o[d]*l[d];t.update(h,n,1)}}}function kf(s,e,t,n){let i;function r(u){if(u==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,textureFormatReadable:function(u){return u===yn||n.convert(u)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==oi&&n.convert(u)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==vn&&!p)},precision:o,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:s.getParameter(s.MAX_SAMPLES)}}function Vf(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Un,a=new Pe,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,p!==!0||y===null){let m=u+4*f,v=d.matrixWorldInverse;a.getNormalMatrix(v),(y===null||y.length<m)&&(y=new Float32Array(m));for(let g=0,x=u;g!==f;++g,x+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(y,x),y[x+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,m=s.get(h);if(!i||p===null||p.length===0||r&&!y)r?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let v=r?0:n,g=4*v,x=m.clippingState||null;l.value=x,x=c(p,d,g,u);for(let _=0;_!==g;++_)x[_]=t[_];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}}}function Hf(s){let e=new WeakMap;function t(i,r){return r===Sl?i.mapping=Ms:r===El&&(i.mapping=bs),i}function n(i){let r=i.target;r.removeEventListener("dispose",n);let o=e.get(r);o!==void 0&&(e.delete(r),o.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping;if(r===Sl||r===El){if(e.has(i))return t(e.get(i).texture,i.mapping);{let o=i.image;if(o&&o.height>0){let a=new oc(o.height);return a.fromEquirectangularTexture(s,i),e.set(i,a),i.addEventListener("dispose",n),t(a.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Bo=class extends pr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pu=[.125,.215,.35,.446,.526,.582],$s=20,ll=new Bo,Lu=new Ae,cl=null,hl=0,ul=0,dl=!1,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,Nu=[new S(-Pi,hs,0),new S(Pi,hs,0),new S(-hs,0,Pi),new S(hs,0,Pi),new S(0,Pi,-hs),new S(0,Pi,hs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Do=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,hl,ul),this._renderer.xr.enabled=dl,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Er,format:yn,colorSpace:Ps,depthBuffer:!1},i=Uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(o){let a=[],l=[],c=[],h=o,d=o-4+1+Pu.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>o-4?f=Pu[u-o+4-1]:u===0&&(f=0),c.push(f);let y=1/(p-2),m=-y,v=1+y,g=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,_=6,w=3,b=2,C=1,I=new Float32Array(w*_*x),U=new Float32Array(b*_*x),F=new Float32Array(C*_*x);for(let V=0;V<x;V++){let L=V%3*2/3-1,N=V>2?0:-1,H=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];I.set(H,w*_*V),U.set(g,b*_*V);let O=[V,V,V,V,V,V];F.set(O,C*_*V)}let W=new rt;W.setAttribute("position",new Ot(I,w)),W.setAttribute("uv",new Ot(U,b)),W.setAttribute("faceIndex",new Ot(F,C)),a.push(W),h>4&&h--}return{lodPlanes:a,sizeLods:l,sigmas:c}})(r)),this._blurMaterial=(function(o,a,l){let c=new Float32Array($s),h=new S(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(r,e,t)}return i}_compileMaterial(e){let t=new st(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,n,i){let r=new It(90,1,t,n),o=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Lu),l.toneMapping=0,l.autoClear=!1;let d=new kn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new st(new xt,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Lu),p=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(r.up.set(0,o[y],0),r.lookAt(a[y],0,0)):m===1?(r.up.set(0,0,o[y]),r.lookAt(0,a[y],0)):(r.up.set(0,o[y],0),r.lookAt(0,0,a[y]));let v=this._cubeSize;ao(i,m*v,y>2?v:0,v,v),l.setRenderTarget(i),p&&l.render(u,r),l.render(e,r)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ms||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let a=this._cubeSize;ao(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,ll)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nu[(i-r-1)%Nu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new st(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,f=r/p,y=isFinite(r)?1+Math.floor(3*f):$s;y>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let m=[],v=0;for(let _=0;_<$s;++_){let w=_/f,b=Math.exp(-w*w/2);m.push(b),_===0?v+=b:_<y&&(v+=2*b)}for(let _=0;_<m.length;_++)m[_]=m[_]/v;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:g}=this;d.dTheta.value=p,d.mipInt.value=g-n;let x=this._sizeLods[i];ao(t,3*x*(i>g-4?i-g+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,ll)}};function Uu(s,e,t){let n=new zn(s,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Du(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gf(s){let e=new WeakMap,t=null;function n(i){let r=i.target;r.removeEventListener("dispose",n);let o=e.get(r);o!==void 0&&(e.delete(r),o.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping,o=r===Sl||r===El,a=r===Ms||r===bs;if(o||a){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Do(s)),l=o?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return o&&h&&h.height>0||a&&h&&(function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p})(h)?(t===null&&(t=new Do(s)),l=o?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Wf(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qf(s,e,t,n){let i={},r=new WeakMap;function o(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",o),delete i[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let y=h.array;u=h.version;for(let m=0,v=y.length;m<v;m+=3){let g=y[m+0],x=y[m+1],_=y[m+2];c.push(g,x,x,_,_,g)}}else{if(d===void 0)return;{let y=d.array;u=d.version;for(let m=0,v=y.length/3-1;m<v;m+=3){let g=m+0,x=m+1,_=m+2;c.push(g,x,x,_,_,g)}}}let p=new(Id(c)?No:Lo)(c,1);p.version=u;let f=r.get(l);f&&e.remove(f),r.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",o),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],s.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&a(l)}else a(l);return r.get(l)}}}function jf(s,e,t){let n,i,r;function o(a,l,c){c!==0&&(s.drawElementsInstanced(n,l,i,a*r,c),t.update(l,n,c))}this.setMode=function(a){n=a},this.setIndex=function(a){i=a.type,r=a.bytesPerElement},this.render=function(a,l){s.drawElements(n,l,i,a*r),t.update(l,n,1)},this.renderInstances=o,this.renderMultiDraw=function(a,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,a,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(a,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<a.length;u++)o(a[u]/r,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,l,0,i,a,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];t.update(u,n,1)}}}function Xf(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case s.TRIANGLES:e.triangles+=i*(t/3);break;case s.LINES:e.lines+=i*(t/2);break;case s.LINE_STRIP:e.lines+=i*(t-1);break;case s.LINE_LOOP:e.lines+=i*t;break;case s.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Yf(s,e,t){let n=new WeakMap,i=new Xe;return{update:function(r,o,a){let l=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0,d=n.get(o);if(d===void 0||d.count!==h){let I=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,y=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],g=0;u===!0&&(g=1),p===!0&&(g=2),f===!0&&(g=3);let x=o.attributes.position.count*g,_=1;x>e.maxTextureSize&&(_=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*_*4*h),b=new Po(w,x,_,h);b.type=vn,b.needsUpdate=!0;let C=4*g;for(let U=0;U<h;U++){let F=y[U],W=m[U],V=v[U],L=x*_*4*U;for(let N=0;N<F.count;N++){let H=N*C;u===!0&&(i.fromBufferAttribute(F,N),w[L+H+0]=i.x,w[L+H+1]=i.y,w[L+H+2]=i.z,w[L+H+3]=0),p===!0&&(i.fromBufferAttribute(W,N),w[L+H+4]=i.x,w[L+H+5]=i.y,w[L+H+6]=i.z,w[L+H+7]=0),f===!0&&(i.fromBufferAttribute(V,N),w[L+H+8]=i.x,w[L+H+9]=i.y,w[L+H+10]=i.z,w[L+H+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:b,size:new oe(x,_)},n.set(o,d),o.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)a.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let u=0;for(let f=0;f<l.length;f++)u+=l[f];let p=o.morphTargetsRelative?1:1-u;a.getUniforms().setValue(s,"morphTargetBaseInfluence",p),a.getUniforms().setValue(s,"morphTargetInfluences",l)}a.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),a.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}}}function Zf(s,e,t,n){let i=new WeakMap;function r(o){let a=o.target;a.removeEventListener("dispose",r),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:function(o){let a=n.render.frame,l=o.geometry,c=e.get(o,l);if(i.get(c)!==a&&(e.update(c),i.set(c,a)),o.isInstancedMesh&&(o.hasEventListener("dispose",r)===!1&&o.addEventListener("dispose",r),i.get(o)!==a&&(t.update(o.instanceMatrix,s.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,s.ARRAY_BUFFER),i.set(o,a))),o.isSkinnedMesh){let h=o.skeleton;i.get(h)!==a&&(h.update(),i.set(h,a))}return c},dispose:function(){i=new WeakMap}}}var Fo=class extends Ft{constructor(e,t,n,i,r,o,a,l,c,h=1026){if(h!==ur&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ur&&(n=Bi),n===void 0&&h===Ss&&(n=ws),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ud=new Ft,Fu=new Fo(1,1),Bd=new Po,Dd=new sc,Fd=new Uo,Ou=[],zu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function Ls(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ou[i];if(r===void 0&&(r=new Float32Array(i),Ou[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function aa(s,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $f(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Kf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function Qf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function em(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,n))return;Hu.set(n),s.uniformMatrix2fv(this.addr,!1,Hu),ft(t,n)}}function tm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,n))return;Vu.set(n),s.uniformMatrix3fv(this.addr,!1,Vu),ft(t,n)}}function nm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,n))return;ku.set(n),s.uniformMatrix4fv(this.addr,!1,ku),ft(t,n)}}function im(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function rm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function om(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function am(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function cm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function hm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function um(s,e,t){let n=this.cache,i=t.allocateTextureUnit(),r;n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),this.type===s.SAMPLER_2D_SHADOW?(Fu.compareFunction=515,r=Fu):r=Ud,t.setTexture2D(e||r,i)}function dm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dd,i)}function pm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fd,i)}function fm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bd,i)}function mm(s,e){s.uniform1fv(this.addr,e)}function gm(s,e){let t=Ls(e,this.size,2);s.uniform2fv(this.addr,t)}function vm(s,e){let t=Ls(e,this.size,3);s.uniform3fv(this.addr,t)}function ym(s,e){let t=Ls(e,this.size,4);s.uniform4fv(this.addr,t)}function xm(s,e){let t=Ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _m(s,e){let t=Ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mm(s,e){let t=Ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bm(s,e){s.uniform1iv(this.addr,e)}function wm(s,e){s.uniform2iv(this.addr,e)}function Sm(s,e){s.uniform3iv(this.addr,e)}function Em(s,e){s.uniform4iv(this.addr,e)}function Tm(s,e){s.uniform1uiv(this.addr,e)}function Am(s,e){s.uniform2uiv(this.addr,e)}function Cm(s,e){s.uniform3uiv(this.addr,e)}function Rm(s,e){s.uniform4uiv(this.addr,e)}function Im(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ud,r[o])}function Pm(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dd,r[o])}function Lm(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Fd,r[o])}function Nm(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bd,r[o])}var ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return $f;case 35664:return Jf;case 35665:return Kf;case 35666:return Qf;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return fm}})(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return vm;case 35666:return ym;case 35674:return xm;case 35675:return _m;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return wm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Am;case 36295:return Cm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Nm}})(t.type)}},cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function Gu(s,e){s.seq.push(e),s.map[e.id]=e}function Um(s,e,t){let n=s.name,i=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),o=pl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a|=0),c===void 0||c==="["&&o+2===i){Gu(t,c===void 0?new ac(a,s,e):new lc(a,s,e));break}{let h=t.map[a];h===void 0&&(h=new cc(a),Gu(t,h)),t=h}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i);Um(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Wu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Bm=0,qu=new Pe;function ju(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+(function(a,l){let c=a.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(s.getShaderSource(e),o)}return i}function Dm(s,e){let t=(function(n){Ge._getMatrix(qu,Ge.workingColorSpace,n);let i=`mat3( ${qu.elements.map((r=>r.toFixed(4)))} )`;switch(Ge.getTransfer(n)){case oa:return[i,"LinearTransferOETF"];case Ze:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fm(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lo=new S;function Om(){return Ge.getLuminanceCoefficients(lo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${lo.x.toFixed(4)}, ${lo.y.toFixed(4)}, ${lo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Js(s){return s!==""}function Xu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(s){return s.replace(zm,Vm)}var km=new Map;function Vm(s,e){let t=Ue[e];if(t===void 0){let n=km.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return hc(t)}var Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(s){return s.replace(Hm,Gm)}function Gm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $u(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wm(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=(function(W){let V="SHADOWMAP_TYPE_BASIC";return W.shadowMapType===1?V="SHADOWMAP_TYPE_PCF":W.shadowMapType===2?V="SHADOWMAP_TYPE_PCF_SOFT":W.shadowMapType===3&&(V="SHADOWMAP_TYPE_VSM"),V})(t),c=(function(W){let V="ENVMAP_TYPE_CUBE";if(W.envMap)switch(W.envMapMode){case Ms:case bs:V="ENVMAP_TYPE_CUBE";break;case ra:V="ENVMAP_TYPE_CUBE_UV"}return V})(t),h=(function(W){let V="ENVMAP_MODE_REFLECTION";return W.envMap&&W.envMapMode===bs&&(V="ENVMAP_MODE_REFRACTION"),V})(t),d=(function(W){let V="ENVMAP_BLENDING_NONE";if(W.envMap)switch(W.combine){case 0:V="ENVMAP_BLENDING_MULTIPLY";break;case 1:V="ENVMAP_BLENDING_MIX";break;case 2:V="ENVMAP_BLENDING_ADD"}return V})(t),u=(function(W){let V=W.envMapCubeUVHeight;if(V===null)return null;let L=Math.log2(V)-2,N=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,L),112)),texelHeight:N,maxMip:L}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)})(t),f=(function(W){let V=[];for(let L in W){let N=W[L];N!==!1&&V.push("#define "+L+" "+N)}return V.join(`
`)})(r),y=i.createProgram(),m,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Js).join(`
`),m.length>0&&(m+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Js).join(`
`),v.length>0&&(v+=`
`)):(m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),v=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),Om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=hc(o),o=Xu(o,t),o=Yu(o,t),a=hc(a),a=Xu(a,t),a=Yu(a,t),o=Zu(o),a=Zu(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=g+m+o,_=g+v+a,w=Wu(i,i.VERTEX_SHADER,x),b=Wu(i,i.FRAGMENT_SHADER,_);function C(W){if(s.debug.checkShaderErrors){let V=i.getProgramInfoLog(y).trim(),L=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(b).trim(),H=!0,O=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,w,b);else{let ee=ju(i,w,"vertex"),$=ju(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+V+`
`+ee+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):L!==""&&N!==""||(O=!1);O&&(W.diagnostics={runnable:H,programLog:V,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:v}})}i.deleteShader(w),i.deleteShader(b),I=new _s(i,y),U=(function(V,L){let N={},H=V.getProgramParameter(L,V.ACTIVE_ATTRIBUTES);for(let O=0;O<H;O++){let ee=V.getActiveAttrib(L,O),$=ee.name,ae=1;ee.type===V.FLOAT_MAT2&&(ae=2),ee.type===V.FLOAT_MAT3&&(ae=3),ee.type===V.FLOAT_MAT4&&(ae=4),N[$]={type:ee.type,location:V.getAttribLocation(L,$),locationSize:ae}}return N})(i,y)}let I,U;i.attachShader(y,w),i.attachShader(y,b),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),this.getUniforms=function(){return I===void 0&&C(this),I},this.getAttributes=function(){return U===void 0&&C(this),U};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(y,37297)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bm++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var qm=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dc(e),t.set(e,n)),n}},dc=class{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}};function jm(s,e,t,n,i,r,o){let a=new dr,l=new uc,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,g,x,_){let w=x.fog,b=_.geometry,C=m.isMeshStandardMaterial?x.environment:null,I=(m.isMeshStandardMaterial?t:e).get(m.envMap||C),U=I&&I.mapping===ra?I.image.height:null,F=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let W=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,V=W!==void 0?W.length:0,L,N,H,O,ee=0;if(b.morphAttributes.position!==void 0&&(ee=1),b.morphAttributes.normal!==void 0&&(ee=2),b.morphAttributes.color!==void 0&&(ee=3),F){let Gs=mn[F];L=Gs.vertexShader,N=Gs.fragmentShader}else L=m.vertexShader,N=m.fragmentShader,l.update(m),H=l.getVertexShaderID(m),O=l.getFragmentShaderID(m);let $=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),pe=_.isInstancedMesh===!0,Q=_.isBatchedMesh===!0,J=!!m.map,de=!!m.matcap,ve=!!I,ue=!!m.aoMap,R=!!m.lightMap,A=!!m.bumpMap,G=!!m.normalMap,k=!!m.displacementMap,P=!!m.emissiveMap,z=!!m.metalnessMap,E=!!m.roughnessMap,B=m.anisotropy>0,j=m.clearcoat>0,se=m.dispersion>0,q=m.iridescence>0,ne=m.sheen>0,te=m.transmission>0,re=B&&!!m.anisotropyMap,ge=j&&!!m.clearcoatMap,fe=j&&!!m.clearcoatNormalMap,Me=j&&!!m.clearcoatRoughnessMap,Te=q&&!!m.iridescenceMap,He=q&&!!m.iridescenceThicknessMap,Fe=ne&&!!m.sheenColorMap,be=ne&&!!m.sheenRoughnessMap,je=!!m.specularMap,Ke=!!m.specularColorMap,ot=!!m.specularIntensityMap,xe=te&&!!m.transmissionMap,ze=te&&!!m.thicknessMap,Je=!!m.gradientMap,$i=!!m.alphaMap,zr=m.alphaTest>0,Qt=!!m.alphaHash,pn=!!m.extensions,Mi=0;m.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(Mi=s.toneMapping));let X={shaderID:F,shaderType:m.type,shaderName:m.name,vertexShader:L,fragmentShader:N,defines:m.defines,customVertexShaderID:H,customFragmentShaderID:O,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Q,batchingColor:Q&&_._colorsTexture!==null,instancing:pe,instancingColor:pe&&_.instanceColor!==null,instancingMorph:pe&&_.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ps,alphaToCoverage:!!m.alphaToCoverage,map:J,matcap:de,envMap:ve,envMapMode:ve&&I.mapping,envMapCubeUVHeight:U,aoMap:ue,lightMap:R,bumpMap:A,normalMap:G,displacementMap:u&&k,emissiveMap:P,normalMapObjectSpace:G&&m.normalMapType===1,normalMapTangentSpace:G&&m.normalMapType===0,metalnessMap:z,roughnessMap:E,anisotropy:B,anisotropyMap:re,clearcoat:j,clearcoatMap:ge,clearcoatNormalMap:fe,clearcoatRoughnessMap:Me,dispersion:se,iridescence:q,iridescenceMap:Te,iridescenceThicknessMap:He,sheen:ne,sheenColorMap:Fe,sheenRoughnessMap:be,specularMap:je,specularColorMap:Ke,specularIntensityMap:ot,transmission:te,transmissionMap:xe,thicknessMap:ze,gradientMap:Je,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:$i,alphaTest:zr,alphaHash:Qt,combine:m.combine,mapUv:J&&y(m.map.channel),aoMapUv:ue&&y(m.aoMap.channel),lightMapUv:R&&y(m.lightMap.channel),bumpMapUv:A&&y(m.bumpMap.channel),normalMapUv:G&&y(m.normalMap.channel),displacementMapUv:k&&y(m.displacementMap.channel),emissiveMapUv:P&&y(m.emissiveMap.channel),metalnessMapUv:z&&y(m.metalnessMap.channel),roughnessMapUv:E&&y(m.roughnessMap.channel),anisotropyMapUv:re&&y(m.anisotropyMap.channel),clearcoatMapUv:ge&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:fe&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(m.sheenRoughnessMap.channel),specularMapUv:je&&y(m.specularMap.channel),specularColorMapUv:Ke&&y(m.specularColorMap.channel),specularIntensityMapUv:ot&&y(m.specularIntensityMap.channel),transmissionMapUv:xe&&y(m.transmissionMap.channel),thicknessMapUv:ze&&y(m.thicknessMap.channel),alphaMapUv:$i&&y(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(G||B),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!b.attributes.uv&&(J||$i),fog:!!w,useFog:m.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ae,skinning:_.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ee,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:s.shadowMap.enabled&&g.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mi,decodeVideoTexture:J&&m.map.isVideoTexture===!0&&Ge.getTransfer(m.map.colorSpace)===Ze,decodeVideoTextureEmissive:P&&m.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(m.emissiveMap.colorSpace)===Ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:pn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pn&&m.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return X.vertexUv1s=c.has(1),X.vertexUv2s=c.has(2),X.vertexUv3s=c.has(3),c.clear(),X},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)v.push(g),v.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)})(v,m),(function(g,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),g.push(a.mask)})(v,m),v.push(s.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=f[m.type],g;if(v){let x=mn[v];g=Lf.clone(x.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,v){let g;for(let x=0,_=h.length;x<_;x++){let w=h[x];if(w.cacheKey===v){g=w,++g.usedTimes;break}}return g===void 0&&(g=new Wm(s,v,m,r),h.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let v=h.indexOf(m);h[v]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Xm(){let s=new WeakMap;return{has:function(e){return s.has(e)},get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ju(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ku(){let s=[],e=0,t=[],n=[],i=[];function r(o,a,l,c,h,d){let u=s[e];return u===void 0?(u={id:o.id,object:o,geometry:a,material:l,groupOrder:c,renderOrder:o.renderOrder,z:h,group:d},s[e]=u):(u.id=o.id,u.object=o,u.geometry=a,u.material=l,u.groupOrder=c,u.renderOrder=o.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(o,a,l,c,h,d){let u=r(o,a,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?i.push(u):t.push(u)},unshift:function(o,a,l,c,h,d){let u=r(o,a,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let o=e,a=s.length;o<a;o++){let l=s[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,a){t.length>1&&t.sort(o||Ym),n.length>1&&n.sort(a||Ju),i.length>1&&i.sort(a||Ju)}}}function Zm(){let s=new WeakMap;return{get:function(e,t){let n=s.get(e),i;return n===void 0?(i=new Ku,s.set(e,[i])):t>=n.length?(i=new Ku,n.push(i)):i=n[t],i},dispose:function(){s=new WeakMap}}}function $m(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ae};break;case"SpotLight":t={position:new S,direction:new S,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new S,halfWidth:new S,halfHeight:new S}}return s[e.id]=t,t}}}var Jm=0;function Km(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qm(s){let e=new $m,t=(function(){let a={};return{get:function(l){if(a[l.id]!==void 0)return a[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3}}return a[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new S);let i=new S,r=new Re,o=new Re;return{setup:function(a){let l=0,c=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,u=0,p=0,f=0,y=0,m=0,v=0,g=0,x=0,_=0,w=0;a.sort(Km);for(let C=0,I=a.length;C<I;C++){let U=a[C],F=U.color,W=U.intensity,V=U.distance,L=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)l+=F.r*W,c+=F.g*W,h+=F.b*W;else if(U.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(U.sh.coefficients[N],W);w++}else if(U.isDirectionalLight){let N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let H=U.shadow,O=t.get(U);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=U.shadow.matrix,m++}n.directional[d]=N,d++}else if(U.isSpotLight){let N=e.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(F).multiplyScalar(W),N.distance=V,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,n.spot[p]=N;let H=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,H.updateMatrices(U),U.castShadow&&_++),n.spotLightMatrix[p]=H.matrix,U.castShadow){let O=t.get(U);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[p]=O,n.spotShadowMap[p]=L,g++}p++}else if(U.isRectAreaLight){let N=e.get(U);N.color.copy(F).multiplyScalar(W),N.halfWidth.set(.5*U.width,0,0),N.halfHeight.set(0,.5*U.height,0),n.rectArea[f]=N,f++}else if(U.isPointLight){let N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){let H=U.shadow,O=t.get(U);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[u]=O,n.pointShadowMap[u]=L,n.pointShadowMatrix[u]=U.shadow.matrix,v++}n.point[u]=N,u++}else if(U.isHemisphereLight){let N=e.get(U);N.skyColor.copy(U.color).multiplyScalar(W),N.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[y]=N,y++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let b=n.hash;b.directionalLength===d&&b.pointLength===u&&b.spotLength===p&&b.rectAreaLength===f&&b.hemiLength===y&&b.numDirectionalShadows===m&&b.numPointShadows===v&&b.numSpotShadows===g&&b.numSpotMaps===x&&b.numLightProbes===w||(n.directional.length=d,n.spot.length=p,n.rectArea.length=f,n.point.length=u,n.hemi.length=y,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=g+x-_,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=w,b.directionalLength=d,b.pointLength=u,b.spotLength=p,b.rectAreaLength=f,b.hemiLength=y,b.numDirectionalShadows=m,b.numPointShadows=v,b.numSpotShadows=g,b.numSpotMaps=x,b.numLightProbes=w,n.version=Jm++)},setupView:function(a,l){let c=0,h=0,d=0,u=0,p=0,f=l.matrixWorldInverse;for(let y=0,m=a.length;y<m;y++){let v=a[y];if(v.isDirectionalLight){let g=n.directional[c];g.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(f),c++}else if(v.isSpotLight){let g=n.spot[d];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(f),g.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(f),d++}else if(v.isRectAreaLight){let g=n.rectArea[u];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),g.halfWidth.set(.5*v.width,0,0),g.halfHeight.set(0,.5*v.height,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),u++}else if(v.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(f),p++}}},state:n}}function Qu(s){let e=new Qm(s),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){i.camera=r,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){n.push(r)}}}function eg(s){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),r;return i===void 0?(r=new Qu(s),e.set(t,[r])):n>=i.length?(r=new Qu(s),i.push(r)):r=i[n],r},dispose:function(){e=new WeakMap}}}var pc=class extends li{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends li{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tg(s,e,t){let n=new As,i=new oe,r=new oe,o=new Xe,a=new pc({depthPacking:3201}),l=new fc,c={},h=t.maxTextureSize,d={[Fp]:1,[Op]:0,[sa]:2},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new rt;f.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new st(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;function g(b,C){let I=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,I,u,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,I,p,y,null)}function x(b,C,I,U){let F=null,W=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(W!==void 0)F=W;else if(F=I.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let V=F.uuid,L=C.uuid,N=c[V];N===void 0&&(N={},c[V]=N);let H=N[L];H===void 0&&(H=F.clone(),N[L]=H,C.addEventListener("dispose",w)),F=H}return F.visible=C.visible,F.wireframe=C.wireframe,F.side=U===3?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,I.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(s.properties.get(F).light=I),F}function _(b,C,I,U,F){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&F===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let V=e.update(b),L=b.material;if(Array.isArray(L)){let N=V.groups;for(let H=0,O=N.length;H<O;H++){let ee=N[H],$=L[ee.materialIndex];if($&&$.visible){let ae=x(b,$,U,F);b.onBeforeShadow(s,b,C,I,V,ae,ee),s.renderBufferDirect(I,null,V,ae,b,ee),b.onAfterShadow(s,b,C,I,V,ae,ee)}}}else if(L.visible){let N=x(b,L,U,F);b.onBeforeShadow(s,b,C,I,V,N,null),s.renderBufferDirect(I,null,V,N,b,null),b.onAfterShadow(s,b,C,I,V,N,null)}}let W=b.children;for(let V=0,L=W.length;V<L;V++)_(W[V],C,I,U,F)}function w(b){b.target.removeEventListener("dispose",w);for(let C in c){let I=c[C],U=b.target.uuid;U in I&&(I[U].dispose(),delete I[U])}}this.render=function(b,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let U=s.getRenderTarget(),F=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),V=s.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let L=v!==3&&this.type===3,N=v===3&&this.type!==3;for(let H=0,O=b.length;H<O;H++){let ee=b[H],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let ae=$.getFrameExtents();if(i.multiply(ae),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,$.mapSize.y=r.y)),$.map===null||L===!0||N===!0){let Q=this.type!==3?{minFilter:an,magFilter:an}:{};$.map!==null&&$.map.dispose(),$.map=new zn(i.x,i.y,Q),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();let pe=$.getViewportCount();for(let Q=0;Q<pe;Q++){let J=$.getViewport(Q);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),V.viewport(o),$.updateMatrices(ee,Q),n=$.getFrustum(),_(C,I,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===3&&g($,I),$.needsUpdate=!1}v=this.type,m.needsUpdate=!1,s.setRenderTarget(U,F,W)}}var ng={[ef]:1,[nf]:6,[rf]:7,[sf]:5,[tf]:0,[af]:2,[lf]:4,[of]:3};function ig(s,e){let t=new function(){let E=!1,B=new Xe,j=null,se=new Xe(0,0,0,0);return{setMask:function(q){j===q||E||(s.colorMask(q,q,q,q),j=q)},setLocked:function(q){E=q},setClear:function(q,ne,te,re,ge){ge===!0&&(q*=re,ne*=re,te*=re),B.set(q,ne,te,re),se.equals(B)===!1&&(s.clearColor(q,ne,te,re),se.copy(B))},reset:function(){E=!1,j=null,se.set(-1,0,0,0)}}},n=new function(){let E=!1,B=!1,j=null,se=null,q=null;return{setReversed:function(ne){if(B!==ne){let te=e.get("EXT_clip_control");B?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);let re=q;q=null,this.setClear(re)}B=ne},getReversed:function(){return B},setTest:function(ne){ne?ve(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(ne){j===ne||E||(s.depthMask(ne),j=ne)},setFunc:function(ne){if(B&&(ne=ng[ne]),se!==ne){switch(ne){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}se=ne}},setLocked:function(ne){E=ne},setClear:function(ne){q!==ne&&(B&&(ne=1-ne),s.clearDepth(ne),q=ne)},reset:function(){E=!1,j=null,se=null,q=null,B=!1}}},i=new function(){let E=!1,B=null,j=null,se=null,q=null,ne=null,te=null,re=null,ge=null;return{setTest:function(fe){E||(fe?ve(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(fe){B===fe||E||(s.stencilMask(fe),B=fe)},setFunc:function(fe,Me,Te){j===fe&&se===Me&&q===Te||(s.stencilFunc(fe,Me,Te),j=fe,se=Me,q=Te)},setOp:function(fe,Me,Te){ne===fe&&te===Me&&re===Te||(s.stencilOp(fe,Me,Te),ne=fe,te=Me,re=Te)},setLocked:function(fe){E=fe},setClear:function(fe){ge!==fe&&(s.clearStencil(fe),ge=fe)},reset:function(){E=!1,B=null,j=null,se=null,q=null,ne=null,te=null,re=null,ge=null}}},r=new WeakMap,o=new WeakMap,a={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,y=null,m=null,v=null,g=null,x=null,_=new Ae(0,0,0),w=0,b=!1,C=null,I=null,U=null,F=null,W=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,N=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(H)[1]),L=N>=1):H.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),L=N>=2);let O=null,ee={},$=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),pe=new Xe().fromArray($),Q=new Xe().fromArray(ae);function J(E,B,j,se){let q=new Uint8Array(4),ne=s.createTexture();s.bindTexture(E,ne),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<j;te++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(B,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,q):s.texImage2D(B+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,q);return ne}let de={};function ve(E){a[E]!==!0&&(s.enable(E),a[E]=!0)}function ue(E){a[E]!==!1&&(s.disable(E),a[E]=!1)}de[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),ve(s.DEPTH_TEST),n.setFunc(3),k(!1),P(1),ve(s.CULL_FACE),G(0);let R={[Li]:s.FUNC_ADD,[zp]:s.FUNC_SUBTRACT,[kp]:s.FUNC_REVERSE_SUBTRACT};R[103]=s.MIN,R[104]=s.MAX;let A={[Vp]:s.ZERO,[Hp]:s.ONE,[Gp]:s.SRC_COLOR,[bl]:s.SRC_ALPHA,[Zp]:s.SRC_ALPHA_SATURATE,[Xp]:s.DST_COLOR,[qp]:s.DST_ALPHA,[Wp]:s.ONE_MINUS_SRC_COLOR,[wl]:s.ONE_MINUS_SRC_ALPHA,[Yp]:s.ONE_MINUS_DST_COLOR,[jp]:s.ONE_MINUS_DST_ALPHA,[$p]:s.CONSTANT_COLOR,[Jp]:s.ONE_MINUS_CONSTANT_COLOR,[Kp]:s.CONSTANT_ALPHA,[Qp]:s.ONE_MINUS_CONSTANT_ALPHA};function G(E,B,j,se,q,ne,te,re,ge,fe){if(E!==0){if(u===!1&&(ve(s.BLEND),u=!0),E===5)q=q||B,ne=ne||j,te=te||se,B===f&&q===v||(s.blendEquationSeparate(R[B],R[q]),f=B,v=q),j===y&&se===m&&ne===g&&te===x||(s.blendFuncSeparate(A[j],A[se],A[ne],A[te]),y=j,m=se,g=ne,x=te),re.equals(_)!==!1&&ge===w||(s.blendColor(re.r,re.g,re.b,ge),_.copy(re),w=ge),p=E,b=!1;else if(E!==p||fe!==b){if(f===Li&&v===Li||(s.blendEquation(s.FUNC_ADD),f=Li,v=Li),fe)switch(E){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}y=null,m=null,g=null,x=null,_.set(0,0,0),w=0,p=E,b=fe}}else u===!0&&(ue(s.BLEND),u=!1)}function k(E){C!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),C=E)}function P(E){E!==0?(ve(s.CULL_FACE),E!==I&&(E===1?s.cullFace(s.BACK):E===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),I=E}function z(E,B,j){E?(ve(s.POLYGON_OFFSET_FILL),F===B&&W===j||(s.polygonOffset(B,j),F=B,W=j)):ue(s.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:ve,disable:ue,bindFramebuffer:function(E,B){return l[E]!==B&&(s.bindFramebuffer(E,B),l[E]=B,E===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=B),E===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=B),!0)},drawBuffers:function(E,B){let j=h,se=!1;if(E){j=c.get(B),j===void 0&&(j=[],c.set(B,j));let q=E.textures;if(j.length!==q.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,te=q.length;ne<te;ne++)j[ne]=s.COLOR_ATTACHMENT0+ne;j.length=q.length,se=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,se=!0);se&&s.drawBuffers(j)},useProgram:function(E){return d!==E&&(s.useProgram(E),d=E,!0)},setBlending:G,setMaterial:function(E,B){E.side===2?ue(s.CULL_FACE):ve(s.CULL_FACE);let j=E.side===1;B&&(j=!j),k(j),E.blending===1&&E.transparent===!1?G(0):G(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),n.setFunc(E.depthFunc),n.setTest(E.depthTest),n.setMask(E.depthWrite),t.setMask(E.colorWrite);let se=E.stencilWrite;i.setTest(se),se&&(i.setMask(E.stencilWriteMask),i.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),i.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),z(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:k,setCullFace:P,setLineWidth:function(E){E!==U&&(L&&s.lineWidth(E),U=E)},setPolygonOffset:z,setScissorTest:function(E){E?ve(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=s.TEXTURE0+V-1),O!==E&&(s.activeTexture(E),O=E)},bindTexture:function(E,B,j){j===void 0&&(j=O===null?s.TEXTURE0+V-1:O);let se=ee[j];se===void 0&&(se={type:void 0,texture:void 0},ee[j]=se),se.type===E&&se.texture===B||(O!==j&&(s.activeTexture(j),O=j),s.bindTexture(E,B||de[E]),se.type=E,se.texture=B)},unbindTexture:function(){let E=ee[O];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},updateUBOMapping:function(E,B){let j=o.get(B);j===void 0&&(j=new WeakMap,o.set(B,j));let se=j.get(E);se===void 0&&(se=s.getUniformBlockIndex(B,E.name),j.set(E,se))},uniformBlockBinding:function(E,B){let j=o.get(B).get(E);r.get(B)!==j&&(s.uniformBlockBinding(B,j,E.__bindingPointIndex),r.set(B,j))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){pe.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),pe.copy(E))},viewport:function(E){Q.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),Q.copy(E))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),n.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),a={},O=null,ee={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,y=null,m=null,v=null,g=null,x=null,_=new Ae(0,0,0),w=0,b=!1,C=null,I=null,U=null,F=null,W=null,pe.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),t.reset(),n.reset(),i.reset()}}}function ed(s,e,t,n){let i=(function(r){switch(r){case oi:case Md:return{byteLength:1,components:1};case hr:case bd:case Er:return{byteLength:2,components:1};case $c:case Jc:return{byteLength:2,components:4};case Bi:case Zc:case vn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(n);switch(t){case Sd:case Td:return s*e;case Ad:return s*e*2;case Kc:case Qc:return s*e/i.components*i.byteLength;case Cd:case eh:return s*e*2/i.components*i.byteLength;case Ed:return s*e*3/i.components*i.byteLength;case yn:case th:return s*e*4/i.components*i.byteLength;case Mo:case bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(s,16)*Math.max(e,8)/4;case Al:case Rl:return Math.max(s,8)*Math.max(e,8)/2;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Yl:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rd:case $l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case Kl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sg(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,A){return p?new OffscreenCanvas(R,A):Ro("canvas")}function y(R,A,G){let k=1,P=ue(R);if((P.width>G||P.height>G)&&(k=G/Math.max(P.width,P.height)),k<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let z=Math.floor(k*P.width),E=Math.floor(k*P.height);d===void 0&&(d=f(z,E));let B=A?f(z,E):d;return B.width=z,B.height=E,B.getContext("2d").drawImage(R,0,0,z,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+z+"x"+E+")."),B}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),R}return R}function m(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,A,G,k,P=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let z=A;if(A===s.RED&&(G===s.FLOAT&&(z=s.R32F),G===s.HALF_FLOAT&&(z=s.R16F),G===s.UNSIGNED_BYTE&&(z=s.R8)),A===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(z=s.R8UI),G===s.UNSIGNED_SHORT&&(z=s.R16UI),G===s.UNSIGNED_INT&&(z=s.R32UI),G===s.BYTE&&(z=s.R8I),G===s.SHORT&&(z=s.R16I),G===s.INT&&(z=s.R32I)),A===s.RG&&(G===s.FLOAT&&(z=s.RG32F),G===s.HALF_FLOAT&&(z=s.RG16F),G===s.UNSIGNED_BYTE&&(z=s.RG8)),A===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(z=s.RG8UI),G===s.UNSIGNED_SHORT&&(z=s.RG16UI),G===s.UNSIGNED_INT&&(z=s.RG32UI),G===s.BYTE&&(z=s.RG8I),G===s.SHORT&&(z=s.RG16I),G===s.INT&&(z=s.RG32I)),A===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(z=s.RGB8UI),G===s.UNSIGNED_SHORT&&(z=s.RGB16UI),G===s.UNSIGNED_INT&&(z=s.RGB32UI),G===s.BYTE&&(z=s.RGB8I),G===s.SHORT&&(z=s.RGB16I),G===s.INT&&(z=s.RGB32I)),A===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),G===s.UNSIGNED_INT&&(z=s.RGBA32UI),G===s.BYTE&&(z=s.RGBA8I),G===s.SHORT&&(z=s.RGBA16I),G===s.INT&&(z=s.RGBA32I)),A===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),A===s.RGBA){let E=P?oa:Ge.getTransfer(k);G===s.FLOAT&&(z=s.RGBA32F),G===s.HALF_FLOAT&&(z=s.RGBA16F),G===s.UNSIGNED_BYTE&&(z=E===Ze?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return z!==s.R16F&&z!==s.R32F&&z!==s.RG16F&&z!==s.RG32F&&z!==s.RGBA16F&&z!==s.RGBA32F||e.get("EXT_color_buffer_float"),z}function _(R,A){let G;return R?A===null||A===Bi||A===ws?G=s.DEPTH24_STENCIL8:A===vn?G=s.DEPTH32F_STENCIL8:A===hr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Bi||A===ws?G=s.DEPTH_COMPONENT24:A===vn?G=s.DEPTH_COMPONENT32F:A===hr&&(G=s.DEPTH_COMPONENT16),G}function w(R,A){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function b(R){let A=R.target;A.removeEventListener("dispose",b),(function(G){let k=n.get(G);if(k.__webglInit===void 0)return;let P=G.source,z=u.get(P);if(z){let E=z[k.__cacheKey];E.usedTimes--,E.usedTimes===0&&I(G),Object.keys(z).length===0&&u.delete(P)}n.remove(G)})(A),A.isVideoTexture&&h.delete(A)}function C(R){let A=R.target;A.removeEventListener("dispose",C),(function(G){let k=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(k.__webglFramebuffer[z]))for(let E=0;E<k.__webglFramebuffer[z].length;E++)s.deleteFramebuffer(k.__webglFramebuffer[z][E]);else s.deleteFramebuffer(k.__webglFramebuffer[z]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[z])}else{if(Array.isArray(k.__webglFramebuffer))for(let z=0;z<k.__webglFramebuffer.length;z++)s.deleteFramebuffer(k.__webglFramebuffer[z]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let z=0;z<k.__webglColorRenderbuffer.length;z++)k.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[z]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let P=G.textures;for(let z=0,E=P.length;z<E;z++){let B=n.get(P[z]);B.__webglTexture&&(s.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(P[z])}n.remove(G)})(A)}function I(R){let A=n.get(R);s.deleteTexture(A.__webglTexture);let G=R.source;delete u.get(G)[A.__cacheKey],o.memory.textures--}let U=0;function F(R,A){let G=n.get(R);if(R.isVideoTexture&&(function(k){let P=o.render.frame;h.get(k)!==P&&(h.set(k,P),k.update())})(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let k=R.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(k.complete!==!1)return void O(G,R,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+A)}let W={[lr]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[Tl]:s.MIRRORED_REPEAT},V={[an]:s.NEAREST,[cf]:s.NEAREST_MIPMAP_NEAREST,[Hr]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[za]:s.LINEAR_MIPMAP_NEAREST,[vs]:s.LINEAR_MIPMAP_LINEAR},L={[hf]:s.NEVER,[vf]:s.ALWAYS,[uf]:s.LESS,[pf]:s.LEQUAL,[df]:s.EQUAL,[gf]:s.GEQUAL,[ff]:s.GREATER,[mf]:s.NOTEQUAL};function N(R,A){if(A.type!==vn||e.has("OES_texture_float_linear")!==!1||A.magFilter!==Dn&&A.magFilter!==za&&A.magFilter!==Hr&&A.magFilter!==vs&&A.minFilter!==Dn&&A.minFilter!==za&&A.minFilter!==Hr&&A.minFilter!==vs||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,W[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,W[A.wrapT]),R!==s.TEXTURE_3D&&R!==s.TEXTURE_2D_ARRAY||s.texParameteri(R,s.TEXTURE_WRAP_R,W[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,V[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,V[A.minFilter]),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,L[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===an||A.minFilter!==Hr&&A.minFilter!==vs||A.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function H(R,A){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",b));let k=A.source,P=u.get(k);P===void 0&&(P={},u.set(k,P));let z=(function(E){let B=[];return B.push(E.wrapS),B.push(E.wrapT),B.push(E.wrapR||0),B.push(E.magFilter),B.push(E.minFilter),B.push(E.anisotropy),B.push(E.internalFormat),B.push(E.format),B.push(E.type),B.push(E.generateMipmaps),B.push(E.premultiplyAlpha),B.push(E.flipY),B.push(E.unpackAlignment),B.push(E.colorSpace),B.join()})(A);if(z!==R.__cacheKey){P[z]===void 0&&(P[z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),P[z].usedTimes++;let E=P[R.__cacheKey];E!==void 0&&(P[R.__cacheKey].usedTimes--,E.usedTimes===0&&I(A)),R.__cacheKey=z,R.__webglTexture=P[z].texture}return G}function O(R,A,G){let k=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(k=s.TEXTURE_3D);let P=H(R,A),z=A.source;t.bindTexture(k,R.__webglTexture,s.TEXTURE0+G);let E=n.get(z);if(z.version!==E.__version||P===!0){t.activeTexture(s.TEXTURE0+G);let B=Ge.getPrimaries(Ge.workingColorSpace),j=A.colorSpace===gs?null:Ge.getPrimaries(A.colorSpace),se=A.colorSpace===gs||B===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let q=y(A.image,!1,i.maxTextureSize);q=ve(A,q);let ne=r.convert(A.format,A.colorSpace),te=r.convert(A.type),re,ge=x(A.internalFormat,ne,te,A.colorSpace,A.isVideoTexture);N(k,A);let fe=A.mipmaps,Me=A.isVideoTexture!==!0,Te=E.__version===void 0||P===!0,He=z.dataReady,Fe=w(A,q);if(A.isDepthTexture)ge=_(A.format===Ss,A.type),Te&&(Me?t.texStorage2D(s.TEXTURE_2D,1,ge,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,ge,q.width,q.height,0,ne,te,null));else if(A.isDataTexture)if(fe.length>0){Me&&Te&&t.texStorage2D(s.TEXTURE_2D,Fe,ge,fe[0].width,fe[0].height);for(let be=0,je=fe.length;be<je;be++)re=fe[be],Me?He&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,re.width,re.height,ne,te,re.data):t.texImage2D(s.TEXTURE_2D,be,ge,re.width,re.height,0,ne,te,re.data);A.generateMipmaps=!1}else Me?(Te&&t.texStorage2D(s.TEXTURE_2D,Fe,ge,q.width,q.height),He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,ne,te,q.data)):t.texImage2D(s.TEXTURE_2D,0,ge,q.width,q.height,0,ne,te,q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Me&&Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ge,fe[0].width,fe[0].height,q.depth);for(let be=0,je=fe.length;be<je;be++)if(re=fe[be],A.format!==yn)if(ne!==null)if(Me){if(He)if(A.layerUpdates.size>0){let Ke=ed(re.width,re.height,A.format,A.type);for(let ot of A.layerUpdates){let xe=re.data.subarray(ot*Ke/re.data.BYTES_PER_ELEMENT,(ot+1)*Ke/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,ot,re.width,re.height,1,ne,xe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,re.width,re.height,q.depth,ne,re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,ge,re.width,re.height,q.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,re.width,re.height,q.depth,ne,te,re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,ge,re.width,re.height,q.depth,0,ne,te,re.data)}else{Me&&Te&&t.texStorage2D(s.TEXTURE_2D,Fe,ge,fe[0].width,fe[0].height);for(let be=0,je=fe.length;be<je;be++)re=fe[be],A.format!==yn?ne!==null?Me?He&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,re.width,re.height,ne,re.data):t.compressedTexImage2D(s.TEXTURE_2D,be,ge,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?He&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,re.width,re.height,ne,te,re.data):t.texImage2D(s.TEXTURE_2D,be,ge,re.width,re.height,0,ne,te,re.data)}else if(A.isDataArrayTexture)if(Me){if(Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ge,q.width,q.height,q.depth),He)if(A.layerUpdates.size>0){let be=ed(q.width,q.height,A.format,A.type);for(let je of A.layerUpdates){let Ke=q.data.subarray(je*be/q.data.BYTES_PER_ELEMENT,(je+1)*be/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,je,q.width,q.height,1,ne,te,Ke)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ne,te,q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,q.width,q.height,q.depth,0,ne,te,q.data);else if(A.isData3DTexture)Me?(Te&&t.texStorage3D(s.TEXTURE_3D,Fe,ge,q.width,q.height,q.depth),He&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ne,te,q.data)):t.texImage3D(s.TEXTURE_3D,0,ge,q.width,q.height,q.depth,0,ne,te,q.data);else if(A.isFramebufferTexture){if(Te)if(Me)t.texStorage2D(s.TEXTURE_2D,Fe,ge,q.width,q.height);else{let be=q.width,je=q.height;for(let Ke=0;Ke<Fe;Ke++)t.texImage2D(s.TEXTURE_2D,Ke,ge,be,je,0,ne,te,null),be>>=1,je>>=1}}else if(fe.length>0){if(Me&&Te){let be=ue(fe[0]);t.texStorage2D(s.TEXTURE_2D,Fe,ge,be.width,be.height)}for(let be=0,je=fe.length;be<je;be++)re=fe[be],Me?He&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ne,te,re):t.texImage2D(s.TEXTURE_2D,be,ge,ne,te,re);A.generateMipmaps=!1}else if(Me){if(Te){let be=ue(q);t.texStorage2D(s.TEXTURE_2D,Fe,ge,be.width,be.height)}He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,te,q)}else t.texImage2D(s.TEXTURE_2D,0,ge,ne,te,q);m(A)&&v(k),E.__version=z.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ee(R,A,G,k,P,z){let E=r.convert(G.format,G.colorSpace),B=r.convert(G.type),j=x(G.internalFormat,E,B,G.colorSpace),se=n.get(A),q=n.get(G);if(q.__renderTarget=A,!se.__hasExternalTextures){let ne=Math.max(1,A.width>>z),te=Math.max(1,A.height>>z);P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?t.texImage3D(P,z,j,ne,te,A.depth,0,E,B,null):t.texImage2D(P,z,j,ne,te,0,E,B,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),de(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,P,q.__webglTexture,0,J(A)):(P===s.TEXTURE_2D||P>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,P,q.__webglTexture,z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(R,A,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer){let k=A.depthTexture,P=k&&k.isDepthTexture?k.type:null,z=_(A.stencilBuffer,P),E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=J(A);de(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B,z,A.width,A.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,B,z,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,E,s.RENDERBUFFER,R)}else{let k=A.textures;for(let P=0;P<k.length;P++){let z=k[P],E=r.convert(z.format,z.colorSpace),B=r.convert(z.type),j=x(z.internalFormat,E,B,z.colorSpace),se=J(A);G&&de(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,j,A.width,A.height):de(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,j,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,j,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(R){let A=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==R.depthTexture){let k=R.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),k){let P=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,k.removeEventListener("dispose",P)};k.addEventListener("dispose",P),A.__depthDisposeCallback=P}A.__boundDepthTexture=k}if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");(function(k,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(P.depthTexture);z.__renderTarget=P,z.__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),F(P.depthTexture,0);let E=z.__webglTexture,B=J(P);if(P.depthTexture.format===ur)de(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,E,0,B):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,E,0);else{if(P.depthTexture.format!==Ss)throw new Error("Unknown depthTexture format");de(P)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,E,0,B):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,E,0)}})(A.__webglFramebuffer,R)}else if(G){A.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[k]),A.__webglDepthbuffer[k]===void 0)A.__webglDepthbuffer[k]=s.createRenderbuffer(),$(A.__webglDepthbuffer[k],R,!1);else{let P=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=A.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,P,s.RENDERBUFFER,z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),$(A.__webglDepthbuffer,R,!1);else{let k=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,P=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,P),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,P)}t.bindFramebuffer(s.FRAMEBUFFER,null)}let pe=[],Q=[];function J(R){return Math.min(i.maxSamples,R.samples)}function de(R){let A=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ve(R,A){let G=R.colorSpace,k=R.format,P=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ps&&G!==gs&&(Ge.getTransfer(G)===Ze?k===yn&&P===oi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=U;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),U+=1,R},this.resetTextureUnits=function(){U=0},this.setTexture2D=F,this.setTexture2DArray=function(R,A){let G=n.get(R);R.version>0&&G.__version!==R.version?O(G,R,A):t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+A)},this.setTexture3D=function(R,A){let G=n.get(R);R.version>0&&G.__version!==R.version?O(G,R,A):t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+A)},this.setTextureCube=function(R,A){let G=n.get(R);R.version>0&&G.__version!==R.version?(function(k,P,z){if(P.image.length!==6)return;let E=H(k,P),B=P.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+z);let j=n.get(B);if(B.version!==j.__version||E===!0){t.activeTexture(s.TEXTURE0+z);let se=Ge.getPrimaries(Ge.workingColorSpace),q=P.colorSpace===gs?null:Ge.getPrimaries(P.colorSpace),ne=P.colorSpace===gs||se===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let te=P.isCompressedTexture||P.image[0].isCompressedTexture,re=P.image[0]&&P.image[0].isDataTexture,ge=[];for(let xe=0;xe<6;xe++)ge[xe]=te||re?re?P.image[xe].image:P.image[xe]:y(P.image[xe],!0,i.maxCubemapSize),ge[xe]=ve(P,ge[xe]);let fe=ge[0],Me=r.convert(P.format,P.colorSpace),Te=r.convert(P.type),He=x(P.internalFormat,Me,Te,P.colorSpace),Fe=P.isVideoTexture!==!0,be=j.__version===void 0||E===!0,je=B.dataReady,Ke,ot=w(P,fe);if(N(s.TEXTURE_CUBE_MAP,P),te){Fe&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,He,fe.width,fe.height);for(let xe=0;xe<6;xe++){Ke=ge[xe].mipmaps;for(let ze=0;ze<Ke.length;ze++){let Je=Ke[ze];P.format!==yn?Me!==null?Fe?je&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,0,0,Je.width,Je.height,Me,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,He,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,0,0,Je.width,Je.height,Me,Te,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,He,Je.width,Je.height,0,Me,Te,Je.data)}}}else{if(Ke=P.mipmaps,Fe&&be){Ke.length>0&&ot++;let xe=ue(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,He,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(re){Fe?je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ge[xe].width,ge[xe].height,Me,Te,ge[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,He,ge[xe].width,ge[xe].height,0,Me,Te,ge[xe].data);for(let ze=0;ze<Ke.length;ze++){let Je=Ke[ze].image[xe].image;Fe?je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,0,0,Je.width,Je.height,Me,Te,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,He,Je.width,Je.height,0,Me,Te,Je.data)}}else{Fe?je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Me,Te,ge[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,He,Me,Te,ge[xe]);for(let ze=0;ze<Ke.length;ze++){let Je=Ke[ze];Fe?je&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,0,0,Me,Te,Je.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,He,Me,Te,Je.image[xe])}}}m(P)&&v(s.TEXTURE_CUBE_MAP),j.__version=B.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version})(G,R,A):t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+A)},this.rebindTextures=function(R,A,G){let k=n.get(R);A!==void 0&&ee(k.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ae(R)},this.setupRenderTarget=function(R){let A=R.texture,G=n.get(R),k=n.get(A);R.addEventListener("dispose",C);let P=R.textures,z=R.isWebGLCubeRenderTarget===!0,E=P.length>1;if(E||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=A.version,o.memory.textures++),z){G.__webglFramebuffer=[];for(let B=0;B<6;B++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[B]=[];for(let j=0;j<A.mipmaps.length;j++)G.__webglFramebuffer[B][j]=s.createFramebuffer()}else G.__webglFramebuffer[B]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let B=0;B<A.mipmaps.length;B++)G.__webglFramebuffer[B]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(E)for(let B=0,j=P.length;B<j;B++){let se=n.get(P[B]);se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&de(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let B=0;B<P.length;B++){let j=P[B];G.__webglColorRenderbuffer[B]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[B]);let se=r.convert(j.format,j.colorSpace),q=r.convert(j.type),ne=x(j.internalFormat,se,q,j.colorSpace,R.isXRRenderTarget===!0),te=J(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ne,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.RENDERBUFFER,G.__webglColorRenderbuffer[B])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),$(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),N(s.TEXTURE_CUBE_MAP,A);for(let B=0;B<6;B++)if(A.mipmaps&&A.mipmaps.length>0)for(let j=0;j<A.mipmaps.length;j++)ee(G.__webglFramebuffer[B][j],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+B,j);else ee(G.__webglFramebuffer[B],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(A)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(E){for(let B=0,j=P.length;B<j;B++){let se=P[B],q=n.get(se);t.bindTexture(s.TEXTURE_2D,q.__webglTexture),N(s.TEXTURE_2D,se),ee(G.__webglFramebuffer,R,se,s.COLOR_ATTACHMENT0+B,s.TEXTURE_2D,0),m(se)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let B=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(B=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(B,k.__webglTexture),N(B,A),A.mipmaps&&A.mipmaps.length>0)for(let j=0;j<A.mipmaps.length;j++)ee(G.__webglFramebuffer[j],R,A,s.COLOR_ATTACHMENT0,B,j);else ee(G.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,B,0);m(A)&&v(B),t.unbindTexture()}R.depthBuffer&&ae(R)},this.updateRenderTargetMipmap=function(R){let A=R.textures;for(let G=0,k=A.length;G<k;G++){let P=A[G];if(m(P)){let z=g(R),E=n.get(P).__webglTexture;t.bindTexture(z,E),v(z),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(de(R)===!1){let A=R.textures,G=R.width,k=R.height,P=s.COLOR_BUFFER_BIT,z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,E=n.get(R),B=A.length>1;if(B)for(let j=0;j<A.length;j++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let j=0;j<A.length;j++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(P|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(P|=s.STENCIL_BUFFER_BIT)),B){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,E.__webglColorRenderbuffer[j]);let se=n.get(A[j]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,G,k,0,0,G,k,P,s.NEAREST),l===!0&&(pe.length=0,Q.length=0,pe.push(s.COLOR_ATTACHMENT0+j),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pe.push(z),Q.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),B)for(let j=0;j<A.length;j++){t.bindFramebuffer(s.FRAMEBUFFER,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,E.__webglColorRenderbuffer[j]);let se=n.get(A[j]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let A=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}},this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=de}function rg(s,e){return{convert:function(t,n=""){let i,r=Ge.getTransfer(n);if(t===oi)return s.UNSIGNED_BYTE;if(t===$c)return s.UNSIGNED_SHORT_4_4_4_4;if(t===Jc)return s.UNSIGNED_SHORT_5_5_5_1;if(t===wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(t===Md)return s.BYTE;if(t===bd)return s.SHORT;if(t===hr)return s.UNSIGNED_SHORT;if(t===Zc)return s.INT;if(t===Bi)return s.UNSIGNED_INT;if(t===vn)return s.FLOAT;if(t===Er)return s.HALF_FLOAT;if(t===Sd)return s.ALPHA;if(t===Ed)return s.RGB;if(t===yn)return s.RGBA;if(t===Td)return s.LUMINANCE;if(t===Ad)return s.LUMINANCE_ALPHA;if(t===ur)return s.DEPTH_COMPONENT;if(t===Ss)return s.DEPTH_STENCIL;if(t===Kc)return s.RED;if(t===Qc)return s.RED_INTEGER;if(t===Cd)return s.RG;if(t===eh)return s.RG_INTEGER;if(t===th)return s.RGBA_INTEGER;if(t===Mo||t===bo||t===wo||t===So)if(r===Ze){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Mo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===bo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===wo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===So)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Mo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===bo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===wo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===So)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Al||t===Cl||t===Rl||t===Il){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Al)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Cl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Rl)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Il)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Pl||t===Ll||t===Nl){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Pl||t===Ll)return r===Ze?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Nl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Ul||t===Bl||t===Dl||t===Fl||t===Ol||t===zl||t===kl||t===Vl||t===Hl||t===Gl||t===Wl||t===ql||t===jl||t===Xl){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Ul)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Bl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Dl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Fl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ol)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===zl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===kl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Vl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Hl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Gl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Wl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===ql)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===jl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Xl)return r===Ze?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Eo||t===Yl||t===Zl){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Eo)return r===Ze?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Yl)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Zl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Rd||t===$l||t===Jl||t===Kl){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Eo)return i.COMPRESSED_RED_RGTC1_EXT;if(t===$l)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Jl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Kl)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ws?s.UNSIGNED_INT_24_8:s[t]!==void 0?s[t]:null}}}var mc=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},si=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),v=this._getHandJoint(c,y);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ft;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends ai{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,y=new gc,m=t.getContextAttributes(),v=null,g=null,x=[],_=[],w=new oe,b=null,C=new It;C.viewport=new Xe;let I=new It;I.viewport=new Xe;let U=[C,I],F=new mc,W=null,V=null;function L(Q){let J=_.indexOf(Q.inputSource);if(J===-1)return;let de=x[J];de!==void 0&&(de.update(Q.inputSource,Q.frame,c||o),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",H);for(let Q=0;Q<x.length;Q++){let J=_[Q];J!==null&&(_[Q]=null,x[Q].disconnect(J))}W=null,V=null,y.reset(),e.setRenderTarget(v),p=null,u=null,d=null,i=null,g=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}function H(Q){for(let J=0;J<Q.removed.length;J++){let de=Q.removed[J],ve=_.indexOf(de);ve>=0&&(_[ve]=null,x[ve].disconnect(de))}for(let J=0;J<Q.added.length;J++){let de=Q.added[J],ve=_.indexOf(de);if(ve===-1){for(let R=0;R<x.length;R++){if(R>=_.length){_.push(de),ve=R;break}if(_[R]===null){_[R]=de,ve=R;break}}if(ve===-1)break}let ue=x[ve];ue&&ue.connect(de)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let J=x[Q];return J===void 0&&(J=new rr,x[Q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Q){let J=x[Q];return J===void 0&&(J=new rr,x[Q]=J),J.getGripSpace()},this.getHand=function(Q){let J=x[Q];return J===void 0&&(J=new rr,x[Q]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new zn(p.framebufferWidth,p.framebufferHeight,{format:yn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,de=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Ss:ur,de=m.stencil?ws:Bi);let ue={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),g=new zn(u.textureWidth,u.textureHeight,{format:yn,type:oi,depthTexture:new Fo(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let O=new S,ee=new S;function $(Q,J){J===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(J.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let J=Q.near,de=Q.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(de=y.depthFar)),F.near=I.near=C.near=J,F.far=I.far=C.far=de,W===F.near&&V===F.far||(i.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,V=F.far),C.layers.mask=2|Q.layers.mask,I.layers.mask=4|Q.layers.mask,F.layers.mask=C.layers.mask|I.layers.mask;let ve=Q.parent,ue=F.cameras;$(F,ve);for(let R=0;R<ue.length;R++)$(ue[R],ve);ue.length===2?(function(R,A,G){O.setFromMatrixPosition(A.matrixWorld),ee.setFromMatrixPosition(G.matrixWorld);let k=O.distanceTo(ee),P=A.projectionMatrix.elements,z=G.projectionMatrix.elements,E=P[14]/(P[10]-1),B=P[14]/(P[10]+1),j=(P[9]+1)/P[5],se=(P[9]-1)/P[5],q=(P[8]-1)/P[0],ne=(z[8]+1)/z[0],te=E*q,re=E*ne,ge=k/(-q+ne),fe=ge*-q;if(A.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(fe),R.translateZ(ge),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),P[10]===-1)R.projectionMatrix.copy(A.projectionMatrix),R.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let Me=E+ge,Te=B+ge,He=te-fe,Fe=re+(k-fe),be=j*B/Te*Me,je=se*B/Te*Me;R.projectionMatrix.makePerspective(He,Fe,be,je,Me,Te),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}})(F,C,I):F.projectionMatrix.copy(C.projectionMatrix),(function(R,A,G){G===null?R.matrix.copy(A.matrixWorld):(R.matrix.copy(G.matrixWorld),R.matrix.invert(),R.matrix.multiply(A.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(A.projectionMatrix),R.projectionMatrixInverse.copy(A.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=2*tc*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)})(Q,F,ve)},this.getCamera=function(){return F},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(F)};let ae=null,pe=new Nd;pe.setAnimationLoop((function(Q,J){if(h=J.getViewerPose(c||o),f=J,h!==null){let de=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ve=!1;de.length!==F.cameras.length&&(F.cameras.length=0,ve=!0);for(let R=0;R<de.length;R++){let A=de[R],G=null;if(p!==null)G=p.getViewport(A);else{let P=d.getViewSubImage(u,A);G=P.viewport,R===0&&(e.setRenderTargetTextures(g,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(g))}let k=U[R];k===void 0&&(k=new It,k.layers.enable(R),k.viewport=new Xe,U[R]=k),k.matrix.fromArray(A.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(A.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(G.x,G.y,G.width,G.height),R===0&&(F.matrix.copy(k.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ve===!0&&F.cameras.push(k)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let R=d.getDepthInformation(de[0]);R&&R.isValid&&R.texture&&y.init(e,R,i.renderState)}}for(let de=0;de<x.length;de++){let ve=_[de],ue=x[de];ve!==null&&ue!==void 0&&ue.update(ve,J,c||o)}ae&&ae(Q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),f=null})),this.setAnimationLoop=function(Q){ae=Q},this.dispose=function(){}}},Ii=new _n,ag=new Re;function lg(s,e){function t(i,r){i.matrixAutoUpdate===!0&&i.updateMatrix(),r.value.copy(i.matrix)}function n(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,t(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,t(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,t(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===1&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,t(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===1&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,t(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,t(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);let o=e.get(r),a=o.envMap,l=o.envMapRotation;a&&(i.envMap.value=a,Ii.copy(l),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),i.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Ii)),i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap&&(i.lightMap.value=r.lightMap,i.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,i.lightMapTransform)),r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,r){r.color.getRGB(i.fogColor.value,Ld(s)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,o,a,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(i,r):r.isMeshToonMaterial?(n(i,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,r)):r.isMeshPhongMaterial?(n(i,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,r)):r.isMeshStandardMaterial?(n(i,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,r),r.isMeshPhysicalMaterial&&(function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,r,l)):r.isMeshMatcapMaterial?(n(i,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,r)):r.isMeshDepthMaterial?n(i,r):r.isMeshDistanceMaterial?(n(i,r),(function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far})(i,r)):r.isMeshNormalMaterial?n(i,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,r)):r.isPointsMaterial?(function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,r,o,a):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function cg(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,f){let y=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let v=f[m];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return f[m]=y,!0}else if(v.equals(y)===!1)return v.copy(y),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=o.indexOf(u.__bindingPointIndex);o.splice(p,1),s.deleteBuffer(i[u.id]),delete i[u.id],delete r[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&((function(m){let v=m.uniforms,g=0,x=16;for(let w=0,b=v.length;w<b;w++){let C=Array.isArray(v[w])?v[w]:[v[w]];for(let I=0,U=C.length;I<U;I++){let F=C[I],W=Array.isArray(F.value)?F.value:[F.value];for(let V=0,L=W.length;V<L;V++){let N=c(W[V]),H=g%x,O=H%N.boundary,ee=H+O;g+=O,ee!==0&&x-ee<N.storage&&(g+=x-ee),F.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=g,g+=N.storage}}}let _=g%x;_>0&&(g+=x-_),m.__size=g,m.__cache={}})(d),p=(function(m){let v=(function(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=v;let g=s.createBuffer(),x=m.__size,_=m.usage;return s.bindBuffer(s.UNIFORM_BUFFER,g),s.bufferData(s.UNIFORM_BUFFER,x,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,g),g})(d),i[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let y=e.render.frame;r[d.id]!==y&&((function(m){let v=i[m.id],g=m.uniforms,x=m.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let _=0,w=g.length;_<w;_++){let b=Array.isArray(g[_])?g[_]:[g[_]];for(let C=0,I=b.length;C<I;C++){let U=b[C];if(l(U,_,C,x)===!0){let F=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],V=0;for(let L=0;L<W.length;L++){let N=W[L],H=c(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,F+V,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,V),V+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)})(d),r[d.id]=y)},dispose:function(){for(let d in i)s.deleteBuffer(i[d]);o=[],i={},r={}}}}var Oo=class{constructor(e={}){let{canvas:t=xf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let f=new Uint32Array(4),y=new Int32Array(4),m=null,v=null,g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=0,this.toneMappingExposure=1;let _=this,w=!1,b=0,C=0,I=null,U=-1,F=null,W=new Xe,V=new Xe,L=null,N=new Ae(0),H=0,O=t.width,ee=t.height,$=1,ae=null,pe=null,Q=new Xe(0,0,O,ee),J=new Xe(0,0,O,ee),de=!1,ve=new As,ue=!1,R=!1,A=new Re,G=new Re,k=new S,P=new Xe,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E=!1;function B(){return I===null?$:1}let j,se,q,ne,te,re,ge,fe,Me,Te,He,Fe,be,je,Ke,ot,xe,ze,Je,$i,zr,Qt,pn,Mi,X=n;function Gs(T,Y){return t.getContext(T,Y)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",qh,!1),t.addEventListener("webglcontextrestored",jh,!1),t.addEventListener("webglcontextcreationerror",Xh,!1),X===null){let Y="webgl2";if(X=Gs(Y,T),X===null)throw Gs(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function Wh(){j=new Wf(X),j.init(),Qt=new rg(X,j),se=new kf(X,j,e,Qt),q=new ig(X,j),se.reverseDepthBuffer&&u&&q.buffers.depth.setReversed(!0),ne=new Xf(X),te=new Xm,re=new sg(X,j,q,te,se,Qt,ne),ge=new Hf(_),fe=new Gf(_),Me=new Bf(X),pn=new Of(X,Me),Te=new qf(X,Me,ne,pn),He=new Zf(X,Te,Me,ne),Je=new Yf(X,se,re),ot=new Vf(te),Fe=new jm(_,ge,fe,j,se,pn,ot),be=new lg(_,te),je=new Zm,Ke=new eg(j),ze=new Ff(_,ge,fe,q,He,p,l),xe=new tg(_,He,se),Mi=new cg(X,ne,se,q),$i=new zf(X,j,ne),zr=new jf(X,j,ne),ne.programs=Fe.programs,_.capabilities=se,_.extensions=j,_.properties=te,_.renderLists=je,_.shadowMap=xe,_.state=q,_.info=ne}Wh();let vt=new vc(_,X);function qh(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function jh(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=ne.autoReset,Y=xe.enabled,K=xe.autoUpdate,ie=xe.needsUpdate,Z=xe.type;Wh(),ne.autoReset=T,xe.enabled=Y,xe.autoUpdate=K,xe.needsUpdate=ie,xe.type=Z}function Xh(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Yh(T){let Y=T.target;Y.removeEventListener("dispose",Yh),(function(K){(function(ie){let Z=te.get(ie).programs;Z!==void 0&&(Z.forEach((function(le){Fe.releaseProgram(le)})),ie.isShaderMaterial&&Fe.releaseShaderCache(ie))})(K),te.remove(K)})(Y)}function Zh(T,Y,K){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,Vr(T,Y,K),T.side=0,T.needsUpdate=!0,Vr(T,Y,K),T.side=2):Vr(T,Y,K)}this.xr=vt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(O,ee,!1))},this.getSize=function(T){return T.set(O,ee)},this.setSize=function(T,Y,K=!0){vt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(O=T,ee=Y,t.width=Math.floor(T*$),t.height=Math.floor(Y*$),K===!0&&(t.style.width=T+"px",t.style.height=Y+"px"),this.setViewport(0,0,T,Y))},this.getDrawingBufferSize=function(T){return T.set(O*$,ee*$).floor()},this.setDrawingBufferSize=function(T,Y,K){O=T,ee=Y,$=K,t.width=Math.floor(T*K),t.height=Math.floor(Y*K),this.setViewport(0,0,T,Y)},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,Y,K,ie){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,Y,K,ie),q.viewport(W.copy(Q).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,Y,K,ie){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,Y,K,ie),q.scissor(V.copy(J).multiplyScalar($).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){q.setScissorTest(de=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,Y=!0,K=!0){let ie=0;if(T){let Z=!1;if(I!==null){let le=I.texture.format;Z=le===th||le===eh||le===Qc}if(Z){let le=I.texture.type,ye=le===oi||le===Bi||le===hr||le===ws||le===$c||le===Jc,_e=ze.getClearColor(),we=ze.getClearAlpha(),Ie=_e.r,Ne=_e.g,Se=_e.b;ye?(f[0]=Ie,f[1]=Ne,f[2]=Se,f[3]=we,X.clearBufferuiv(X.COLOR,0,f)):(y[0]=Ie,y[1]=Ne,y[2]=Se,y[3]=we,X.clearBufferiv(X.COLOR,0,y))}else ie|=X.COLOR_BUFFER_BIT}Y&&(ie|=X.DEPTH_BUFFER_BIT),K&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qh,!1),t.removeEventListener("webglcontextrestored",jh,!1),t.removeEventListener("webglcontextcreationerror",Xh,!1),je.dispose(),Ke.dispose(),te.dispose(),ge.dispose(),fe.dispose(),He.dispose(),pn.dispose(),Mi.dispose(),Fe.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$h),vt.removeEventListener("sessionend",Jh),bi.stop()},this.renderBufferDirect=function(T,Y,K,ie,Z,le){Y===null&&(Y=z);let ye=Z.isMesh&&Z.matrixWorld.determinant()<0,_e=(function(Ve,Lt,wt,De,Ce){Lt.isScene!==!0&&(Lt=z),re.resetTextureUnits();let en=Lt.fog,Na=De.isMeshStandardMaterial?Lt.environment:null,Ws=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ps,Ji=(De.isMeshStandardMaterial?fe:ge).get(De.envMap||Na),Ua=De.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,Ba=!!wt.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),Da=!!wt.morphAttributes.position,$n=!!wt.morphAttributes.normal,Up=!!wt.morphAttributes.color,iu=0;De.toneMapped&&(I!==null&&I.isXRRenderTarget!==!0||(iu=_.toneMapping));let su=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,Bp=su!==void 0?su.length:0,ke=te.get(De),Dp=v.state.lights;if(ue===!0&&(R===!0||Ve!==F)){let jt=Ve===F&&De.id===U;ot.setState(De,Ve,jt)}let tn=!1;De.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Dp.state.version||ke.outputColorSpace!==Ws||Ce.isBatchedMesh&&ke.batching===!1?tn=!0:Ce.isBatchedMesh||ke.batching!==!0?Ce.isBatchedMesh&&ke.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&ke.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&ke.instancing===!1?tn=!0:Ce.isInstancedMesh||ke.instancing!==!0?Ce.isSkinnedMesh&&ke.skinning===!1?tn=!0:Ce.isSkinnedMesh||ke.skinning!==!0?Ce.isInstancedMesh&&ke.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&ke.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&ke.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&ke.instancingMorph===!1&&Ce.morphTexture!==null||ke.envMap!==Ji||De.fog===!0&&ke.fog!==en?tn=!0:ke.numClippingPlanes===void 0||ke.numClippingPlanes===ot.numPlanes&&ke.numIntersection===ot.numIntersection?(ke.vertexAlphas!==Ua||ke.vertexTangents!==Ba||ke.morphTargets!==Da||ke.morphNormals!==$n||ke.morphColors!==Up||ke.toneMapping!==iu||ke.morphTargetsCount!==Bp)&&(tn=!0):tn=!0:tn=!0:tn=!0:tn=!0:(tn=!0,ke.__version=De.version);let wi=ke.currentProgram;tn===!0&&(wi=Vr(De,Lt,Ce));let ru=!1,qs=!1,Fa=!1,ht=wi.getUniforms(),Jn=ke.uniforms;if(q.useProgram(wi.program)&&(ru=!0,qs=!0,Fa=!0),De.id!==U&&(U=De.id,qs=!0),ru||F!==Ve){q.buffers.depth.getReversed()?(A.copy(Ve.projectionMatrix),(function(Si){let nt=Si.elements;nt[2]=.5*nt[2]+.5*nt[3],nt[6]=.5*nt[6]+.5*nt[7],nt[10]=.5*nt[10]+.5*nt[11],nt[14]=.5*nt[14]+.5*nt[15]})(A),(function(Si){let nt=Si.elements;nt[11]===-1?(nt[10]=-nt[10]-1,nt[14]=-nt[14]):(nt[10]=-nt[10],nt[14]=1-nt[14])})(A),ht.setValue(X,"projectionMatrix",A)):ht.setValue(X,"projectionMatrix",Ve.projectionMatrix),ht.setValue(X,"viewMatrix",Ve.matrixWorldInverse);let jt=ht.map.cameraPosition;jt!==void 0&&jt.setValue(X,k.setFromMatrixPosition(Ve.matrixWorld)),se.logarithmicDepthBuffer&&ht.setValue(X,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&ht.setValue(X,"isOrthographic",Ve.isOrthographicCamera===!0),F!==Ve&&(F=Ve,qs=!0,Fa=!0)}if(Ce.isSkinnedMesh){ht.setOptional(X,Ce,"bindMatrix"),ht.setOptional(X,Ce,"bindMatrixInverse");let jt=Ce.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),ht.setValue(X,"boneTexture",jt.boneTexture,re))}Ce.isBatchedMesh&&(ht.setOptional(X,Ce,"batchingTexture"),ht.setValue(X,"batchingTexture",Ce._matricesTexture,re),ht.setOptional(X,Ce,"batchingIdTexture"),ht.setValue(X,"batchingIdTexture",Ce._indirectTexture,re),ht.setOptional(X,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&ht.setValue(X,"batchingColorTexture",Ce._colorsTexture,re));let Oa=wt.morphAttributes;Oa.position===void 0&&Oa.normal===void 0&&Oa.color===void 0||Je.update(Ce,wt,wi),(qs||ke.receiveShadow!==Ce.receiveShadow)&&(ke.receiveShadow=Ce.receiveShadow,ht.setValue(X,"receiveShadow",Ce.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(Jn.envMap.value=Ji,Jn.flipEnvMap.value=Ji.isCubeTexture&&Ji.isRenderTargetTexture===!1?-1:1),De.isMeshStandardMaterial&&De.envMap===null&&Lt.environment!==null&&(Jn.envMapIntensity.value=Lt.environmentIntensity),qs&&(ht.setValue(X,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&(nn=Fa,(fn=Jn).ambientLightColor.needsUpdate=nn,fn.lightProbe.needsUpdate=nn,fn.directionalLights.needsUpdate=nn,fn.directionalLightShadows.needsUpdate=nn,fn.pointLights.needsUpdate=nn,fn.pointLightShadows.needsUpdate=nn,fn.spotLights.needsUpdate=nn,fn.spotLightShadows.needsUpdate=nn,fn.rectAreaLights.needsUpdate=nn,fn.hemisphereLights.needsUpdate=nn),en&&De.fog===!0&&be.refreshFogUniforms(Jn,en),be.refreshMaterialUniforms(Jn,De,$,ee,v.state.transmissionRenderTarget[Ve.id]),_s.upload(X,tu(ke),Jn,re));var fn,nn;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(_s.upload(X,tu(ke),Jn,re),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&ht.setValue(X,"center",Ce.center),ht.setValue(X,"modelViewMatrix",Ce.modelViewMatrix),ht.setValue(X,"normalMatrix",Ce.normalMatrix),ht.setValue(X,"modelMatrix",Ce.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let jt=De.uniformsGroups;for(let Si=0,nt=jt.length;Si<nt;Si++){let ou=jt[Si];Mi.update(ou,wi),Mi.bind(ou,wi)}}return wi})(T,Y,K,ie,Z);q.setMaterial(ie,ye);let we=K.index,Ie=1;if(ie.wireframe===!0){if(we=Te.getWireframeAttribute(K),we===void 0)return;Ie=2}let Ne=K.drawRange,Se=K.attributes.position,Oe=Ne.start*Ie,lt=(Ne.start+Ne.count)*Ie;le!==null&&(Oe=Math.max(Oe,le.start*Ie),lt=Math.min(lt,(le.start+le.count)*Ie)),we!==null?(Oe=Math.max(Oe,0),lt=Math.min(lt,we.count)):Se!=null&&(Oe=Math.max(Oe,0),lt=Math.min(lt,Se.count));let Qe=lt-Oe;if(Qe<0||Qe===1/0)return;let dt;pn.setup(Z,ie,_e,K,we);let et=$i;if(we!==null&&(dt=Me.get(we),et=zr,et.setIndex(dt)),Z.isMesh)ie.wireframe===!0?(q.setLineWidth(ie.wireframeLinewidth*B()),et.setMode(X.LINES)):et.setMode(X.TRIANGLES);else if(Z.isLine){let Ve=ie.linewidth;Ve===void 0&&(Ve=1),q.setLineWidth(Ve*B()),Z.isLineSegments?et.setMode(X.LINES):Z.isLineLoop?et.setMode(X.LINE_LOOP):et.setMode(X.LINE_STRIP)}else Z.isPoints?et.setMode(X.POINTS):Z.isSprite&&et.setMode(X.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)et.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))et.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ve=Z._multiDrawStarts,Lt=Z._multiDrawCounts,wt=Z._multiDrawCount,De=we?Me.get(we).bytesPerElement:1,Ce=te.get(ie).currentProgram.getUniforms();for(let en=0;en<wt;en++)Ce.setValue(X,"_gl_DrawID",en),et.render(Ve[en]/De,Lt[en])}else if(Z.isInstancedMesh)et.renderInstances(Oe,Qe,Z.count);else if(K.isInstancedBufferGeometry){let Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,Ve);et.renderInstances(Oe,Qe,Lt)}else et.render(Oe,Qe)},this.compile=function(T,Y,K=null){K===null&&(K=T),v=Ke.get(K),v.init(Y),x.push(v),K.traverseVisible((function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))})),T!==K&&T.traverseVisible((function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))})),v.setupLights();let ie=new Set;return T.traverse((function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let le=Z.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){let _e=le[ye];Zh(_e,K,Z),ie.add(_e)}else Zh(le,K,Z),ie.add(le)})),x.pop(),v=null,ie},this.compileAsync=function(T,Y,K=null){let ie=this.compile(T,Y,K);return new Promise((Z=>{function le(){ie.forEach((function(ye){te.get(ye).currentProgram.isReady()&&ie.delete(ye)})),ie.size!==0?setTimeout(le,10):Z(T)}j.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)}))};let Pa=null;function $h(){bi.stop()}function Jh(){bi.start()}let bi=new Nd;function La(T,Y,K,ie){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ve.intersectsSprite(T)){ie&&P.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);let le=He.update(T),ye=T.material;ye.visible&&m.push(T,le,ye,K,P.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ve.intersectsObject(T))){let le=He.update(T),ye=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),P.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),P.copy(le.boundingSphere.center)),P.applyMatrix4(T.matrixWorld).applyMatrix4(G)),Array.isArray(ye)){let _e=le.groups;for(let we=0,Ie=_e.length;we<Ie;we++){let Ne=_e[we],Se=ye[Ne.materialIndex];Se&&Se.visible&&m.push(T,le,Se,K,P.z,Ne)}}else ye.visible&&m.push(T,le,ye,K,P.z,null)}}let Z=T.children;for(let le=0,ye=Z.length;le<ye;le++)La(Z[le],Y,K,ie)}function Kh(T,Y,K,ie){let Z=T.opaque,le=T.transmissive,ye=T.transparent;v.setupLightsView(K),ue===!0&&ot.setGlobalState(_.clippingPlanes,K),ie&&q.viewport(W.copy(ie)),Z.length>0&&kr(Z,Y,K),le.length>0&&kr(le,Y,K),ye.length>0&&kr(ye,Y,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Qh(T,Y,K,ie){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ie.id]===void 0&&(v.state.transmissionRenderTarget[ie.id]=new zn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Er:oi,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let Z=v.state.transmissionRenderTarget[ie.id],le=ie.viewport||W;Z.setSize(le.z,le.w);let ye=_.getRenderTarget();_.setRenderTarget(Z),_.getClearColor(N),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),E&&ze.render(K);let _e=_.toneMapping;_.toneMapping=0;let we=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),v.setupLightsView(ie),ue===!0&&ot.setGlobalState(_.clippingPlanes,ie),kr(T,K,ie),re.updateMultisampleRenderTarget(Z),re.updateRenderTargetMipmap(Z),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ne=0,Se=Y.length;Ne<Se;Ne++){let Oe=Y[Ne],lt=Oe.object,Qe=Oe.geometry,dt=Oe.material,et=Oe.group;if(dt.side===2&&lt.layers.test(ie.layers)){let Ve=dt.side;dt.side=1,dt.needsUpdate=!0,eu(lt,K,ie,Qe,dt,et),dt.side=Ve,dt.needsUpdate=!0,Ie=!0}}Ie===!0&&(re.updateMultisampleRenderTarget(Z),re.updateRenderTargetMipmap(Z))}_.setRenderTarget(ye),_.setClearColor(N,H),we!==void 0&&(ie.viewport=we),_.toneMapping=_e}function kr(T,Y,K){let ie=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,le=T.length;Z<le;Z++){let ye=T[Z],_e=ye.object,we=ye.geometry,Ie=ie===null?ye.material:ie,Ne=ye.group;_e.layers.test(K.layers)&&eu(_e,Y,K,we,Ie,Ne)}}function eu(T,Y,K,ie,Z,le){T.onBeforeRender(_,Y,K,ie,Z,le),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(_,Y,K,ie,T,le),Z.transparent===!0&&Z.side===2&&Z.forceSinglePass===!1?(Z.side=1,Z.needsUpdate=!0,_.renderBufferDirect(K,Y,ie,Z,T,le),Z.side=0,Z.needsUpdate=!0,_.renderBufferDirect(K,Y,ie,Z,T,le),Z.side=2):_.renderBufferDirect(K,Y,ie,Z,T,le),T.onAfterRender(_,Y,K,ie,Z,le)}function Vr(T,Y,K){Y.isScene!==!0&&(Y=z);let ie=te.get(T),Z=v.state.lights,le=v.state.shadowsArray,ye=Z.state.version,_e=Fe.getParameters(T,Z.state,le,Y,K),we=Fe.getProgramCacheKey(_e),Ie=ie.programs;ie.environment=T.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(T.isMeshStandardMaterial?fe:ge).get(T.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Yh),Ie=new Map,ie.programs=Ie);let Ne=Ie.get(we);if(Ne!==void 0){if(ie.currentProgram===Ne&&ie.lightsStateVersion===ye)return nu(T,_e),Ne}else _e.uniforms=Fe.getUniforms(T),T.onBeforeCompile(_e,_),Ne=Fe.acquireProgram(_e,we),Ie.set(we,Ne),ie.uniforms=_e.uniforms;let Se=ie.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Se.clippingPlanes=ot.uniform),nu(T,_e),ie.needsLights=(function(Oe){return Oe.isMeshLambertMaterial||Oe.isMeshToonMaterial||Oe.isMeshPhongMaterial||Oe.isMeshStandardMaterial||Oe.isShadowMaterial||Oe.isShaderMaterial&&Oe.lights===!0})(T),ie.lightsStateVersion=ye,ie.needsLights&&(Se.ambientLightColor.value=Z.state.ambient,Se.lightProbe.value=Z.state.probe,Se.directionalLights.value=Z.state.directional,Se.directionalLightShadows.value=Z.state.directionalShadow,Se.spotLights.value=Z.state.spot,Se.spotLightShadows.value=Z.state.spotShadow,Se.rectAreaLights.value=Z.state.rectArea,Se.ltc_1.value=Z.state.rectAreaLTC1,Se.ltc_2.value=Z.state.rectAreaLTC2,Se.pointLights.value=Z.state.point,Se.pointLightShadows.value=Z.state.pointShadow,Se.hemisphereLights.value=Z.state.hemi,Se.directionalShadowMap.value=Z.state.directionalShadowMap,Se.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Se.spotShadowMap.value=Z.state.spotShadowMap,Se.spotLightMatrix.value=Z.state.spotLightMatrix,Se.spotLightMap.value=Z.state.spotLightMap,Se.pointShadowMap.value=Z.state.pointShadowMap,Se.pointShadowMatrix.value=Z.state.pointShadowMatrix),ie.currentProgram=Ne,ie.uniformsList=null,Ne}function tu(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=_s.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function nu(T,Y){let K=te.get(T);K.outputColorSpace=Y.outputColorSpace,K.batching=Y.batching,K.batchingColor=Y.batchingColor,K.instancing=Y.instancing,K.instancingColor=Y.instancingColor,K.instancingMorph=Y.instancingMorph,K.skinning=Y.skinning,K.morphTargets=Y.morphTargets,K.morphNormals=Y.morphNormals,K.morphColors=Y.morphColors,K.morphTargetsCount=Y.morphTargetsCount,K.numClippingPlanes=Y.numClippingPlanes,K.numIntersection=Y.numClipIntersection,K.vertexAlphas=Y.vertexAlphas,K.vertexTangents=Y.vertexTangents,K.toneMapping=Y.toneMapping}bi.setAnimationLoop((function(T){Pa&&Pa(T)})),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){Pa=T,vt.setAnimationLoop(T),T===null?bi.stop():bi.start()},vt.addEventListener("sessionstart",$h),vt.addEventListener("sessionend",Jh),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(Y),Y=vt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,Y,I),v=Ke.get(T,x.length),v.init(Y),x.push(v),G.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ve.setFromProjectionMatrix(G),R=this.localClippingEnabled,ue=ot.init(this.clippingPlanes,R),m=je.get(T,g.length),m.init(),g.push(m),vt.enabled===!0&&vt.isPresenting===!0){let le=_.xr.getDepthSensingMesh();le!==null&&La(le,Y,-1/0,_.sortObjects)}La(T,Y,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ae,pe),E=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,E&&ze.addToRenderList(m,T),this.info.render.frame++,ue===!0&&ot.beginShadows();let K=v.state.shadowsArray;xe.render(K,T,Y),ue===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=m.opaque,Z=m.transmissive;if(v.setupLights(),Y.isArrayCamera){let le=Y.cameras;if(Z.length>0)for(let ye=0,_e=le.length;ye<_e;ye++)Qh(ie,Z,T,le[ye]);E&&ze.render(T);for(let ye=0,_e=le.length;ye<_e;ye++){let we=le[ye];Kh(m,T,we,we.viewport)}}else Z.length>0&&Qh(ie,Z,T,Y),E&&ze.render(T),Kh(m,T,Y);I!==null&&(re.updateMultisampleRenderTarget(I),re.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(_,T,Y),pn.resetDefaultState(),U=-1,F=null,x.pop(),x.length>0?(v=x[x.length-1],ue===!0&&ot.setGlobalState(_.clippingPlanes,v.state.camera)):v=null,g.pop(),m=g.length>0?g[g.length-1]:null},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,Y,K){te.get(T.texture).__webglTexture=Y,te.get(T.depthTexture).__webglTexture=K;let ie=te.get(T);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=K===void 0,ie.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,Y){let K=te.get(T);K.__webglFramebuffer=Y,K.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(T,Y=0,K=0){I=T,b=Y,C=K;let ie=!0,Z=null,le=!1,ye=!1;if(T){let _e=te.get(T);if(_e.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(X.FRAMEBUFFER,null),ie=!1;else if(_e.__webglFramebuffer===void 0)re.setupRenderTarget(T);else if(_e.__hasExternalTextures)re.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ne=T.depthTexture;if(_e.__boundDepthTexture!==Ne){if(Ne!==null&&te.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(T)}}let we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);let Ie=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Z=Array.isArray(Ie[Y])?Ie[Y][K]:Ie[Y],le=!0):Z=T.samples>0&&re.useMultisampledRTT(T)===!1?te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[K]:Ie,W.copy(T.viewport),V.copy(T.scissor),L=T.scissorTest}else W.copy(Q).multiplyScalar($).floor(),V.copy(J).multiplyScalar($).floor(),L=de;if(q.bindFramebuffer(X.FRAMEBUFFER,Z)&&ie&&q.drawBuffers(T,Z),q.viewport(W),q.scissor(V),q.setScissorTest(L),le){let _e=te.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e.__webglTexture,K)}else if(ye){let _e=te.get(T.texture),we=Y||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,_e.__webglTexture,K||0,we)}U=-1},this.readRenderTargetPixels=function(T,Y,K,ie,Z,le,ye){if(!T||!T.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(_e=_e[ye]),_e){q.bindFramebuffer(X.FRAMEBUFFER,_e);try{let we=T.texture,Ie=we.format,Ne=we.type;if(!se.textureFormatReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ne))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=T.width-ie&&K>=0&&K<=T.height-Z&&X.readPixels(Y,K,ie,Z,Qt.convert(Ie),Qt.convert(Ne),le)}finally{let we=I!==null?te.get(I).__webglFramebuffer:null;q.bindFramebuffer(X.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,Y,K,ie,Z,le,ye){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(_e=_e[ye]),_e){let we=T.texture,Ie=we.format,Ne=we.type;if(!se.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=T.width-ie&&K>=0&&K<=T.height-Z){q.bindFramebuffer(X.FRAMEBUFFER,_e);let Se=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Se),X.bufferData(X.PIXEL_PACK_BUFFER,le.byteLength,X.STREAM_READ),X.readPixels(Y,K,ie,Z,Qt.convert(Ie),Qt.convert(Ne),0);let Oe=I!==null?te.get(I).__webglFramebuffer:null;q.bindFramebuffer(X.FRAMEBUFFER,Oe);let lt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await(function(Qe,dt,et){return new Promise((function(Ve,Lt){setTimeout((function wt(){switch(Qe.clientWaitSync(dt,Qe.SYNC_FLUSH_COMMANDS_BIT,0)){case Qe.WAIT_FAILED:Lt();break;case Qe.TIMEOUT_EXPIRED:setTimeout(wt,et);break;default:Ve()}}),et)}))})(X,lt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Se),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,le),X.deleteBuffer(Se),X.deleteSync(lt),le}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,Y=null,K=0){T.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1]);let ie=Math.pow(2,-K),Z=Math.floor(T.image.width*ie),le=Math.floor(T.image.height*ie),ye=Y!==null?Y.x:0,_e=Y!==null?Y.y:0;re.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,K,0,0,ye,_e,Z,le),q.unbindTexture()},this.copyTextureToTexture=function(T,Y,K=null,ie=null,Z=0){let le,ye,_e,we,Ie,Ne,Se,Oe,lt;T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,T=arguments[1],Y=arguments[2],Z=arguments[3]||0,K=null);let Qe=T.isCompressedTexture?T.mipmaps[Z]:T.image;K!==null?(le=K.max.x-K.min.x,ye=K.max.y-K.min.y,_e=K.isBox3?K.max.z-K.min.z:1,we=K.min.x,Ie=K.min.y,Ne=K.isBox3?K.min.z:0):(le=Qe.width,ye=Qe.height,_e=Qe.depth||1,we=0,Ie=0,Ne=0),ie!==null?(Se=ie.x,Oe=ie.y,lt=ie.z):(Se=0,Oe=0,lt=0);let dt=Qt.convert(Y.format),et=Qt.convert(Y.type),Ve;Y.isData3DTexture?(re.setTexture3D(Y,0),Ve=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),Ve=X.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),Ve=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let Lt=X.getParameter(X.UNPACK_ROW_LENGTH),wt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),De=X.getParameter(X.UNPACK_SKIP_PIXELS),Ce=X.getParameter(X.UNPACK_SKIP_ROWS),en=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,we),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ne);let Na=T.isDataArrayTexture||T.isData3DTexture,Ws=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Ji=te.get(T),Ua=te.get(Y),Ba=te.get(Ji.__renderTarget),Da=te.get(Ua.__renderTarget);q.bindFramebuffer(X.READ_FRAMEBUFFER,Ba.__webglFramebuffer),q.bindFramebuffer(X.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let $n=0;$n<_e;$n++)Na&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(T).__webglTexture,Z,Ne+$n),T.isDepthTexture?(Ws&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(Y).__webglTexture,Z,lt+$n),X.blitFramebuffer(we,Ie,le,ye,Se,Oe,le,ye,X.DEPTH_BUFFER_BIT,X.NEAREST)):Ws?X.copyTexSubImage3D(Ve,Z,Se,Oe,lt+$n,we,Ie,le,ye):X.copyTexSubImage2D(Ve,Z,Se,Oe,lt+$n,we,Ie,le,ye);q.bindFramebuffer(X.READ_FRAMEBUFFER,null),q.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ws?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(Ve,Z,Se,Oe,lt,le,ye,_e,dt,et,Qe.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Ve,Z,Se,Oe,lt,le,ye,_e,dt,Qe.data):X.texSubImage3D(Ve,Z,Se,Oe,lt,le,ye,_e,dt,et,Qe):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Z,Se,Oe,le,ye,dt,et,Qe.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Z,Se,Oe,Qe.width,Qe.height,dt,Qe.data):X.texSubImage2D(X.TEXTURE_2D,Z,Se,Oe,le,ye,dt,et,Qe);X.pixelStorei(X.UNPACK_ROW_LENGTH,Lt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,wt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,De),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ce),X.pixelStorei(X.UNPACK_SKIP_IMAGES,en),Z===0&&Y.generateMipmaps&&X.generateMipmap(Ve),q.unbindTexture()},this.copyTextureToTexture3D=function(T,Y,K=null,ie=null,Z=0){return T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,ie=arguments[1]||null,T=arguments[2],Y=arguments[3],Z=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,Y,K,ie,Z)},this.initRenderTarget=function(T){te.get(T).__webglFramebuffer===void 0&&re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?re.setTextureCube(T,0):T.isData3DTexture?re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?re.setTexture2DArray(T,0):re.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){b=0,C=0,I=null,q.reset(),pn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var zo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ko=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new S,Vo=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vn=class extends li{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},us,Ks=new S,ds=new S,ps=new S,fs=new oe,Qs=new oe,Od=new Re,co=new S,er=new S,ho=new S,td=new oe,fl=new oe,nd=new oe,ci=class extends Pt{constructor(e=new Vn){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yc(t,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Vo(n,3,0,!1)),us.setAttribute("uv",new Vo(n,2,3,!1))}this.geometry=us,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Od.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-ps.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;uo(co.set(-.5,-.5,0),ps,o,ds,i,r),uo(er.set(.5,-.5,0),ps,o,ds,i,r),uo(ho.set(.5,.5,0),ps,o,ds,i,r),td.set(0,0),fl.set(1,0),nd.set(1,1);let a=e.ray.intersectTriangle(co,er,ho,!1,Ks);if(a===null&&(uo(er.set(-.5,.5,0),ps,o,ds,i,r),fl.set(0,1),a=e.ray.intersectTriangle(co,ho,er,!1,Ks),a===null))return;let l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||t.push({distance:l,point:Ks.clone(),uv:Bn.getInterpolation(Ks,co,er,ho,td,fl,nd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function uo(s,e,t,n,i,r){fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qs.x=r*fs.x-i*fs.y,Qs.y=i*fs.x+r*fs.y):Qs.copy(fs),s.copy(e),s.x+=Qs.x,s.y+=Qs.y,s.applyMatrix4(Od)}var Hy=new S,Gy=new S;var Wy=new S,qy=new Xe,jy=new Xe,Xy=new S,Yy=new Re,Zy=new S,$y=new hn,Jy=new Re,Ky=new Di;var xc=class extends Ft{constructor(e=null,t=1,n=1,i,r,o,a,l,c=1003,h=1003,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qy=new Re,ex=new Re;var Ho=class extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new Re,id=new Re,po=[],sd=new cn,hg=new Re,tr=new st,nr=new hn,Go=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),sd.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(sd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),nr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=e*(n.length+1)+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ms),id.multiplyMatrices(n,ms),tr.matrixWorld=id,tr.raycast(e,po);for(let o=0,a=po.length;o<a;o++){let l=po[o];l.instanceId=r,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xc(new Float32Array(i*this.count),i,this.count,Kc,vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var _c=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},tx=new Re,nx=new Ae(1,1,1),ix=new As,sx=new cn,rx=new hn,ox=new S,ax=new S,lx=new S,cx=new _c,hx=new st;var ux=new S,dx=new S,px=new Re,fx=new Di,mx=new hn,gx=new S,vx=new S;var yx=new S,xx=new S;var _x=new Re,Mx=new Di,bx=new hn,wx=new S;var hi=class extends Ft{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;o=t||e*n[r-1];let a,l=0,c=r-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),a=n[i]-o,a<0)l=i+1;else{if(!(a>0)){c=i;break}c=i-1}if(i=c,n[i]===o)return i/(r-1);let h=n[i];return(i+(o-h)/(n[i+1]-h))/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new oe:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],r=[],o=[],a=new S,l=new Re;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(St(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(St(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends Yt{constructor(e=0,t=0,n=1,i=1,r=0,o=2*Math.PI,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=o?0:i),this.aClockwise!==!0||o||(r===i?r=-i:r-=i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends fr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,i(o,a,u,p)},calc:function(r){let o=r*r;return s+e*r+t*o+n*(o*r)}}}var fo=new S,ml=new ih,gl=new ih,vl=new ih,bc=class extends Yt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a,l,c=Math.floor(o),h=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?a=i[(c-1)%r]:(fo.subVectors(i[0],i[1]).add(i[0]),a=fo);let d=i[c%r],u=i[(c+1)%r];if(this.closed||c+2<r?l=i[(c+2)%r]:(fo.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(a.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);y<1e-4&&(y=1),f<1e-4&&(f=y),m<1e-4&&(m=y),ml.initNonuniformCatmullRom(a.x,d.x,u.x,l.x,f,y,m),gl.initNonuniformCatmullRom(a.y,d.y,u.y,l.y,f,y,m),vl.initNonuniformCatmullRom(a.z,d.z,u.z,l.z,f,y,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(a.x,d.x,u.x,l.x,this.tension),gl.initCatmullRom(a.y,d.y,u.y,l.y,this.tension),vl.initCatmullRom(a.z,d.z,u.z,l.z,this.tension));return n.set(ml.calc(h),gl.calc(h),vl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rd(s,e,t,n,i){let r=.5*(n-e),o=.5*(i-t),a=s*s;return(2*t-2*n+r+o)*(s*a)+(-3*t+3*n-2*r-o)*a+r*s+t}function or(s,e,t,n){return(function(i,r){let o=1-i;return o*o*r})(s,e)+(function(i,r){return 2*(1-i)*i*r})(s,t)+(function(i,r){return i*i*r})(s,n)}function ar(s,e,t,n,i){return(function(r,o){let a=1-r;return a*a*a*o})(s,e)+(function(r,o){let a=1-r;return 3*a*a*r*o})(s,t)+(function(r,o){return 3*(1-r)*r*r*o})(s,n)+(function(r,o){return r*r*r*o})(s,i)}var Wo=class extends Yt{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(e,i.x,r.x,o.x,a.x),ar(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends Yt{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ar(e,i.x,r.x,o.x,a.x),ar(e,i.y,r.y,o.y,a.y),ar(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends Yt{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends Yt{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Yt{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(or(e,i.x,r.x,o.x),or(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Yt{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(or(e,i.x,r.x,o.x),or(e,i.y,r.y,o.y),or(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(rd(a,l.x,c.x,h.x,d.x),rd(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},Zo=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:bc,CubicBezierCurve:Wo,CubicBezierCurve3:wc,EllipseCurve:fr,LineCurve:qo,LineCurve3:Sc,QuadraticBezierCurve:jo,QuadraticBezierCurve3:Xo,SplineCurve:Yo}),Ec=class extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?2*e:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Zo[i.type]().fromJSON(i))}return this}},mr=class extends Ec{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new jo(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Wo(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new fr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$o=class s extends rt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=St(i,0,2*Math.PI);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new S,u=new oe,p=new S,f=new S,y=new S,m=0,v=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,v=e[g+1].y-e[g].y,p.x=1*v,p.y=-m,p.z=0*v,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[g+1].x-e[g].x,v=e[g+1].y-e[g].y,p.x=1*v,p.y=-m,p.z=0*v,f.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(f)}for(let g=0;g<=t;g++){let x=n+g*h*i,_=Math.sin(x),w=Math.cos(x);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*_,d.y=e[b].y,d.z=e[b].x*w,o.push(d.x,d.y,d.z),u.x=g/t,u.y=b/(e.length-1),a.push(u.x,u.y);let C=l[3*b+0]*_,I=l[3*b+1],U=l[3*b+0]*w;c.push(C,I,U)}}for(let g=0;g<t;g++)for(let x=0;x<e.length-1;x++){let _=x+g*e.length,w=_,b=_+e.length,C=_+e.length+1,I=_+1;r.push(w,b,I),r.push(C,I,b)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Tc=class s extends $o{constructor(e=1,t=1,n=4,i=8){let r=new mr;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},Cs=class s extends rt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new S,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class s extends rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],p=[],f=0,y=[],m=n/2,v=0;function g(x){let _=f,w=new oe,b=new S,C=0,I=x===!0?e:t,U=x===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,m*U,0),u.push(0,U,0),p.push(.5,.5),f++;let F=f;for(let W=0;W<=i;W++){let V=W/i*l+a,L=Math.cos(V),N=Math.sin(V);b.x=I*N,b.y=m*U,b.z=I*L,d.push(b.x,b.y,b.z),u.push(0,U,0),w.x=.5*L+.5,w.y=.5*N*U+.5,p.push(w.x,w.y),f++}for(let W=0;W<i;W++){let V=_+W,L=F+W;x===!0?h.push(L,L+1,V):h.push(L+1,L,V),C+=3}c.addGroup(v,C,x===!0?1:2),v+=C}(function(){let x=new S,_=new S,w=0,b=(t-e)/n;for(let C=0;C<=r;C++){let I=[],U=C/r,F=U*(t-e)+e;for(let W=0;W<=i;W++){let V=W/i,L=V*l+a,N=Math.sin(L),H=Math.cos(L);_.x=F*N,_.y=-U*n+m,_.z=F*H,d.push(_.x,_.y,_.z),x.set(N,b,H).normalize(),u.push(x.x,x.y,x.z),p.push(V,1-U),I.push(f++)}y.push(I)}for(let C=0;C<i;C++)for(let I=0;I<r;I++){let U=y[I][C],F=y[I+1][C],W=y[I+1][C+1],V=y[I][C+1];(e>0||I!==0)&&(h.push(U,F,V),w+=3),(t>0||I!==r-1)&&(h.push(F,W,V),w+=3)}c.addGroup(v,w,0),v+=w})(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ui=class s extends Zt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=2*Math.PI){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oi=class s extends rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];function a(u,p,f,y){let m=y+1,v=[];for(let g=0;g<=m;g++){v[g]=[];let x=u.clone().lerp(f,g/m),_=p.clone().lerp(f,g/m),w=m-g;for(let b=0;b<=w;b++)v[g][b]=b===0&&g===m?x:x.clone().lerp(_,b/w)}for(let g=0;g<m;g++)for(let x=0;x<2*(m-g)-1;x++){let _=Math.floor(x/2);x%2==0?(l(v[g][_+1]),l(v[g+1][_]),l(v[g][_])):(l(v[g][_+1]),l(v[g+1][_+1]),l(v[g+1][_]))}}function l(u){r.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,y){y<0&&u.x===1&&(o[p]=u.x-1),f.x===0&&f.z===0&&(o[p]=y/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new S,f=new S,y=new S;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],y),a(p,f,y,u)})(i),(function(u){let p=new S;for(let f=0;f<r.length;f+=3)p.x=r[f+0],p.y=r[f+1],p.z=r[f+2],p.normalize().multiplyScalar(u),r[f+0]=p.x,r[f+1]=p.y,r[f+2]=p.z})(n),(function(){let u=new S;for(let f=0;f<r.length;f+=3){u.x=r[f+0],u.y=r[f+1],u.z=r[f+2];let y=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);o.push(y,1-m)}var p;(function(){let f=new S,y=new S,m=new S,v=new S,g=new oe,x=new oe,_=new oe;for(let w=0,b=0;w<r.length;w+=9,b+=6){f.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),m.set(r[w+6],r[w+7],r[w+8]),g.set(o[b+0],o[b+1]),x.set(o[b+2],o[b+3]),_.set(o[b+4],o[b+5]),v.copy(f).add(y).add(m).divideScalar(3);let C=d(v);h(g,b+0,f,C),h(x,b+2,y,C),h(_,b+4,m,C)}})(),(function(){for(let f=0;f<o.length;f+=6){let y=o[f+0],m=o[f+2],v=o[f+4],g=Math.max(y,m,v),x=Math.min(y,m,v);g>.9&&x<.1&&(y<.2&&(o[f+0]+=1),m<.2&&(o[f+2]+=1),v<.2&&(o[f+4]+=1))}})()})(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},gr=class s extends Oi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},mo=new S,go=new S,yl=new S,vo=new Bn,Ac=class extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(To*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){o?(c[0]=o.getX(f),c[1]=o.getX(f+1),c[2]=o.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:m,c:v}=vo;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),v.fromBufferAttribute(a,c[2]),vo.getNormal(yl),d[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let g=0;g<3;g++){let x=(g+1)%3,_=d[g],w=d[x],b=vo[h[g]],C=vo[h[x]],I=`${_}_${w}`,U=`${w}_${_}`;U in u&&u[U]?(yl.dot(u[U].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(C.x,C.y,C.z)),u[U]=null):I in u||(u[I]={index0:c[g],index1:c[x],normal:yl.clone()})}}for(let f in u)if(u[f]){let{index0:y,index1:m}=u[f];mo.fromBufferAttribute(a,y),go.fromBufferAttribute(a,m),p.push(mo.x,mo.y,mo.z),p.push(go.x,go.y,go.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Rs=class extends mr{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new mr().fromJSON(i))}return this}},ug=function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=od(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,p;if(n&&(r=(function(f,y,m,v){let g=[],x,_,w,b,C;for(x=0,_=y.length;x<_;x++)w=y[x]*v,b=x<_-1?y[x+1]*v:f.length,C=od(f,w,b,v,!1),C===C.next&&(C.steiner=!0),g.push(xg(C));for(g.sort(gg),x=0;x<g.length;x++)m=vg(g[x],m);return m})(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let f=t;f<i;f+=t)d=s[f],u=s[f+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return vr(r,o,t,a,l,p,0),o};function od(s,e,t,n,i){let r,o;if(i===(function(a,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(a[p]-a[u])*(a[u+1]+a[p+1]),p=u;return d})(s,e,t,n)>0)for(r=e;r<t;r+=n)o=ad(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=ad(r,s[r],s[r+1],o);return o&&la(o,o.next)&&(xr(o),o=o.next),o}function zi(s,e){if(!s)return s;e||(e=s);let t,n=s;do if(t=!1,n.steiner||!la(n,n.next)&&at(n.prev,n,n.next)!==0)n=n.next;else{if(xr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function vr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&(function(h,d,u,p){let f=h;do f.z===0&&(f.z=Cc(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(y){let m,v,g,x,_,w,b,C,I=1;do{for(v=y,y=null,_=null,w=0;v;){for(w++,g=v,b=0,m=0;m<I&&(b++,g=g.nextZ,g);m++);for(C=I;b>0||C>0&&g;)b!==0&&(C===0||!g||v.z<=g.z)?(x=v,v=v.nextZ,b--):(x=g,g=g.nextZ,C--),_?_.nextZ=x:y=x,x.prevZ=_,_=x;v=g}_.nextZ=null,I*=2}while(w>1)})(f)})(s,n,i,r);let a,l,c=s;for(;s.prev!==s.next;)if(a=s.prev,l=s.next,r?pg(s,n,i,r):dg(s))e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),xr(s),s=l.next,c=l.next;else if((s=l)===c){o?o===1?vr(s=fg(zi(s),e,t),e,t,n,i,r,2):o===2&&mg(s,e,t,n,i,r):vr(zi(s),e,t,n,i,r,1);break}}function dg(s){let e=s.prev,t=s,n=s.next;if(at(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&ys(i,a,r,l,o,c,f.x,f.y)&&at(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function pg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(at(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,y=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,v=Cc(p,f,e,t,n),g=Cc(y,m,e,t,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=v&&_&&_.z<=g;){if(x.x>=p&&x.x<=y&&x.y>=f&&x.y<=m&&x!==i&&x!==o&&ys(a,h,l,d,c,u,x.x,x.y)&&at(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=y&&_.y>=f&&_.y<=m&&_!==i&&_!==o&&ys(a,h,l,d,c,u,_.x,_.y)&&at(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=v;){if(x.x>=p&&x.x<=y&&x.y>=f&&x.y<=m&&x!==i&&x!==o&&ys(a,h,l,d,c,u,x.x,x.y)&&at(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=g;){if(_.x>=p&&_.x<=y&&_.y>=f&&_.y<=m&&_!==i&&_!==o&&ys(a,h,l,d,c,u,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function fg(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!la(i,r)&&zd(i,n,n.next,r)&&yr(i,r)&&yr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xr(n),xr(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function mg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_g(o,a)){let l=kd(o,a);return o=zi(o,o.next),l=zi(l,l.next),vr(o,e,t,n,i,r,0),void vr(l,e,t,n,i,r,0)}a=a.next}o=o.next}while(o!==s)}function gg(s,e){return s.x-e.x}function vg(s,e){let t=(function(i,r){let o,a=r,l=-1/0,c=i.x,h=i.y;do{if(h<=a.y&&h>=a.next.y&&a.next.y!==a.y){let m=a.x+(h-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=c&&m>l&&(l=m,o=a.x<a.next.x?a:a.next,m===c))return o}a=a.next}while(a!==r);if(!o)return null;let d=o,u=o.x,p=o.y,f,y=1/0;a=o;do c>=a.x&&a.x>=u&&c!==a.x&&ys(h<p?c:l,h,u,p,h<p?l:c,h,a.x,a.y)&&(f=Math.abs(h-a.y)/(c-a.x),yr(a,i)&&(f<y||f===y&&(a.x>o.x||a.x===o.x&&yg(o,a)))&&(o=a,y=f)),a=a.next;while(a!==d);return o})(s,e);if(!t)return e;let n=kd(t,s);return zi(n,n.next),zi(t,t.next)}function yg(s,e){return at(s.prev,s,e.prev)<0&&at(e.next,s,s.next)<0}function Cc(s,e,t,n,i){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*i|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function xg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ys(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function _g(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&zd(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(s,e)&&(yr(s,e)&&yr(e,s)&&(function(t,n){let i=t,r=!1,o=(t.x+n.x)/2,a=(t.y+n.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&o<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r})(s,e)&&(at(s.prev,s,e.prev)||at(s,e.prev,e))||la(s,e)&&at(s.prev,s,s.next)>0&&at(e.prev,e,e.next)>0)}function at(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function la(s,e){return s.x===e.x&&s.y===e.y}function zd(s,e,t,n){let i=xo(at(s,e,t)),r=xo(at(s,e,n)),o=xo(at(t,n,s)),a=xo(at(t,n,e));return i!==r&&o!==a||!(i!==0||!yo(s,t,e))||!(r!==0||!yo(s,n,e))||!(o!==0||!yo(t,s,n))||!(a!==0||!yo(t,e,n))}function yo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function xo(s){return s>0?1:s<0?-1:0}function yr(s,e){return at(s.prev,s,s.next)<0?at(s,e,s.next)>=0&&at(s,s.prev,e)>=0:at(s,e,s.prev)<0||at(s,s.next,e)<0}function kd(s,e){let t=new Rc(s.i,s.x,s.y),n=new Rc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ad(s,e,t,n){let i=new Rc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ri=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return .5*n}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ld(e),cd(n,e);let o=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,cd(n,t[l]);let a=ug(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ld(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var _r=class s extends rt{constructor(e=new Rs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++)o(e[a]);function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Mg,x,_,w,b,C,I=!1;v&&(x=v.getSpacedPoints(h),I=!0,u=!1,_=v.computeFrenetFrames(h,!1),w=new S,b=new S,C=new S),u||(m=0,p=0,f=0,y=0);let U=a.extractPoints(c),F=U.shape,W=U.holes;if(!ri.isClockWise(F)){F=F.reverse();for(let k=0,P=W.length;k<P;k++){let z=W[k];ri.isClockWise(z)&&(W[k]=z.reverse())}}let V=ri.triangulateShape(F,W),L=F;for(let k=0,P=W.length;k<P;k++){let z=W[k];F=F.concat(z)}function N(k,P,z){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(P,z)}let H=F.length,O=V.length;function ee(k,P,z){let E,B,j,se=k.x-P.x,q=k.y-P.y,ne=z.x-k.x,te=z.y-k.y,re=se*se+q*q,ge=se*te-q*ne;if(Math.abs(ge)>Number.EPSILON){let fe=Math.sqrt(re),Me=Math.sqrt(ne*ne+te*te),Te=P.x-q/fe,He=P.y+se/fe,Fe=((z.x-te/Me-Te)*te-(z.y+ne/Me-He)*ne)/(se*te-q*ne);E=Te+se*Fe-k.x,B=He+q*Fe-k.y;let be=E*E+B*B;if(be<=2)return new oe(E,B);j=Math.sqrt(be/2)}else{let fe=!1;se>Number.EPSILON?ne>Number.EPSILON&&(fe=!0):se<-Number.EPSILON?ne<-Number.EPSILON&&(fe=!0):Math.sign(q)===Math.sign(te)&&(fe=!0),fe?(E=-q,B=se,j=Math.sqrt(re)):(E=se,B=q,j=Math.sqrt(re/2))}return new oe(E/j,B/j)}let $=[];for(let k=0,P=L.length,z=P-1,E=k+1;k<P;k++,z++,E++)z===P&&(z=0),E===P&&(E=0),$[k]=ee(L[k],L[z],L[E]);let ae=[],pe,Q=$.concat();for(let k=0,P=W.length;k<P;k++){let z=W[k];pe=[];for(let E=0,B=z.length,j=B-1,se=E+1;E<B;E++,j++,se++)j===B&&(j=0),se===B&&(se=0),pe[E]=ee(z[E],z[j],z[se]);ae.push(pe),Q=Q.concat(pe)}for(let k=0;k<m;k++){let P=k/m,z=p*Math.cos(P*Math.PI/2),E=f*Math.sin(P*Math.PI/2)+y;for(let B=0,j=L.length;B<j;B++){let se=N(L[B],$[B],E);ve(se.x,se.y,-z)}for(let B=0,j=W.length;B<j;B++){let se=W[B];pe=ae[B];for(let q=0,ne=se.length;q<ne;q++){let te=N(se[q],pe[q],E);ve(te.x,te.y,-z)}}}let J=f+y;for(let k=0;k<H;k++){let P=u?N(F[k],Q[k],J):F[k];I?(b.copy(_.normals[0]).multiplyScalar(P.x),w.copy(_.binormals[0]).multiplyScalar(P.y),C.copy(x[0]).add(b).add(w),ve(C.x,C.y,C.z)):ve(P.x,P.y,0)}for(let k=1;k<=h;k++)for(let P=0;P<H;P++){let z=u?N(F[P],Q[P],J):F[P];I?(b.copy(_.normals[k]).multiplyScalar(z.x),w.copy(_.binormals[k]).multiplyScalar(z.y),C.copy(x[k]).add(b).add(w),ve(C.x,C.y,C.z)):ve(z.x,z.y,d/h*k)}for(let k=m-1;k>=0;k--){let P=k/m,z=p*Math.cos(P*Math.PI/2),E=f*Math.sin(P*Math.PI/2)+y;for(let B=0,j=L.length;B<j;B++){let se=N(L[B],$[B],E);ve(se.x,se.y,d+z)}for(let B=0,j=W.length;B<j;B++){let se=W[B];pe=ae[B];for(let q=0,ne=se.length;q<ne;q++){let te=N(se[q],pe[q],E);I?ve(te.x,te.y+x[h-1].y,x[h-1].x+z):ve(te.x,te.y,d+z)}}}function de(k,P){let z=k.length;for(;--z>=0;){let E=z,B=z-1;B<0&&(B=k.length-1);for(let j=0,se=h+2*m;j<se;j++){let q=H*j,ne=H*(j+1);R(P+E+q,P+B+q,P+B+ne,P+E+ne)}}}function ve(k,P,z){l.push(k),l.push(P),l.push(z)}function ue(k,P,z){A(k),A(P),A(z);let E=i.length/3,B=g.generateTopUV(n,i,E-3,E-2,E-1);G(B[0]),G(B[1]),G(B[2])}function R(k,P,z,E){A(k),A(P),A(E),A(P),A(z),A(E);let B=i.length/3,j=g.generateSideWallUV(n,i,B-6,B-3,B-2,B-1);G(j[0]),G(j[1]),G(j[3]),G(j[1]),G(j[2]),G(j[3])}function A(k){i.push(l[3*k+0]),i.push(l[3*k+1]),i.push(l[3*k+2])}function G(k){r.push(k.x),r.push(k.y)}(function(){let k=i.length/3;if(u){let P=0,z=H*P;for(let E=0;E<O;E++){let B=V[E];ue(B[2]+z,B[1]+z,B[0]+z)}P=h+2*m,z=H*P;for(let E=0;E<O;E++){let B=V[E];ue(B[0]+z,B[1]+z,B[2]+z)}}else{for(let P=0;P<O;P++){let z=V[P];ue(z[2],z[1],z[0])}for(let P=0;P<O;P++){let z=V[P];ue(z[0]+H*h,z[1]+H*h,z[2]+H*h)}}n.addGroup(k,i.length/3-k,0)})(),(function(){let k=i.length/3,P=0;de(L,P),P+=L.length;for(let z=0,E=W.length;z<E;z++){let B=W[z];de(B,P),P+=B.length}n.addGroup(k,i.length/3-k,1)})()}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let r=0,o=t.length;r<o;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zo[i.type]().fromJSON(i)),new s(n,e.options)}},Mg={generateTopUV:function(s,e,t,n,i){let r=e[3*t],o=e[3*t+1],a=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[3*t],a=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],f=e[3*i+2],y=e[3*r],m=e[3*r+1],v=e[3*r+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-d),new oe(u,1-f),new oe(y,1-v)]:[new oe(a,1-l),new oe(h,1-d),new oe(p,1-f),new oe(m,1-v)]}},Ic=class s extends Oi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Pc=class s extends Oi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Mr=class s extends rt{constructor(e=.5,t=1,n=32,i=1,r=0,o=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new S,f=new oe;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){let v=r+m/n*o;p.x=d*Math.cos(v),p.y=d*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let y=0;y<i;y++){let m=y*(n+1);for(let v=0;v<n;v++){let g=v+m,x=g,_=g+n+1,w=g+n+2,b=g+1;a.push(x,_,b),a.push(_,w,b)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Lc=class s extends rt{constructor(e=new Rs([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;function c(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;ri.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,v=f.length;m<v;m++){let g=f[m];ri.isClockWise(g)===!0&&(f[m]=g.reverse())}let y=ri.triangulateShape(p,f);for(let m=0,v=f.length;m<v;m++){let g=f[m];p=p.concat(g)}for(let m=0,v=p.length;m<v;m++){let g=p[m];i.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let m=0,v=y.length;m<v;m++){let g=y[m],x=g[0]+d,_=g[1]+d,w=g[2]+d;n.push(x,_,w),l+=3}}this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}},$t=class s extends rt{constructor(e=1,t=32,n=16,i=0,r=2*Math.PI,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new S,u=new S,p=[],f=[],y=[],m=[];for(let v=0;v<=n;v++){let g=[],x=v/n,_=0;v===0&&o===0?_=.5/t:v===n&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let b=w/t;d.x=-e*Math.cos(i+b*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(i+b*r)*Math.sin(o+x*a),f.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(b+_,1-x),g.push(c++)}h.push(g)}for(let v=0;v<n;v++)for(let g=0;g<t;g++){let x=h[v][g+1],_=h[v][g],w=h[v+1][g],b=h[v+1][g+1];(v!==0||o>0)&&p.push(x,_,b),(v!==n-1||l<Math.PI)&&p.push(_,w,b)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Nc=class s extends Oi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},br=class s extends rt{constructor(e=1,t=.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new S,d=new S,u=new S;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let y=f/i*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let y=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,v=(i+1)*(p-1)+f,g=(i+1)*p+f;o.push(y,m,g),o.push(m,v,g)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Uc=class s extends rt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],d=new S,u=new S,p=new S,f=new S,y=new S,m=new S,v=new S;for(let x=0;x<=n;++x){let _=x/n*r*Math.PI*2;g(_,r,o,e,p),g(_+.01,r,o,e,f),m.subVectors(f,p),v.addVectors(f,p),y.crossVectors(m,v),v.crossVectors(y,m),y.normalize(),v.normalize();for(let w=0;w<=i;++w){let b=w/i*Math.PI*2,C=-t*Math.cos(b),I=t*Math.sin(b);d.x=p.x+(C*v.x+I*y.x),d.y=p.y+(C*v.y+I*y.y),d.z=p.z+(C*v.z+I*y.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(x/n),h.push(w/i)}}for(let x=1;x<=n;x++)for(let _=1;_<=i;_++){let w=(i+1)*(x-1)+(_-1),b=(i+1)*x+(_-1),C=(i+1)*x+_,I=(i+1)*(x-1)+_;a.push(w,b,I),a.push(b,C,I)}function g(x,_,w,b,C){let I=Math.cos(x),U=Math.sin(x),F=w/_*x,W=Math.cos(F);C.x=b*(2+W)*.5*I,C.y=b*(2+W)*U*.5,C.z=b*Math.sin(F)*.5}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Bc=class s extends rt{constructor(e=new Xo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,l=new S,c=new oe,h=new S,d=[],u=[],p=[],f=[];function y(m){h=e.getPointAt(m/t,h);let v=o.normals[m],g=o.binormals[m];for(let x=0;x<=i;x++){let _=x/i*Math.PI*2,w=Math.sin(_),b=-Math.cos(_);l.x=b*v.x+w*g.x,l.y=b*v.y+w*g.y,l.z=b*v.z+w*g.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}(function(){for(let m=0;m<t;m++)y(m);y(r===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let v=0;v<=i;v++)c.x=m/t,c.y=v/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let v=1;v<=i;v++){let g=(i+1)*(m-1)+(v-1),x=(i+1)*m+(v-1),_=(i+1)*m+v,w=(i+1)*(m-1)+v;f.push(g,x,w),f.push(x,_,w)}})()})(),this.setIndex(f),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Dc=class extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new S,r=new S;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let y=0;y<3;y++){let m=a.getX(p+y),v=a.getX(p+(y+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),hd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),hd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function hd(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Sx=Object.freeze({__proto__:null,BoxGeometry:xt,CapsuleGeometry:Tc,CircleGeometry:Cs,ConeGeometry:ui,CylinderGeometry:Zt,DodecahedronGeometry:gr,EdgesGeometry:Ac,ExtrudeGeometry:_r,IcosahedronGeometry:Ic,LatheGeometry:$o,OctahedronGeometry:Pc,PlaneGeometry:Fi,PolyhedronGeometry:Oi,RingGeometry:Mr,ShapeGeometry:Lc,SphereGeometry:$t,TetrahedronGeometry:Nc,TorusGeometry:br,TorusKnotGeometry:Uc,TubeGeometry:Bc,WireframeGeometry:Dc});var Bt=class extends li{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _o(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Is=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];t:{e:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break n}if(e>=r)break t;{let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0}}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends Is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lu:r=e,a=2*t-n;break;case cu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:o=e,l=2*n-t;break;case cu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),y=f*f,m=y*f,v=-u*m+2*u*y-u*f,g=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*f+1,x=(-1-p)*m+(1.5+p)*y+.5*f,_=p*m-p*y;for(let w=0;w!==a;++w)r[w]=v*o[h+w]+g*o[c+w]+x*o[l+w]+_*o[d+w];return r}},Oc=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},zc=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case ka:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&bg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a];if(c!==e[a+1]&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ln.prototype.TimeBufferType=Float32Array,ln.prototype.ValueBufferType=Float32Array,ln.prototype.DefaultInterpolation=Ql;var Ni=class extends ln{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool",Ni.prototype.ValueBufferType=Array,Ni.prototype.DefaultInterpolation=Ao,Ni.prototype.InterpolantFactoryMethodLinear=void 0,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends ln{};kc.prototype.ValueTypeName="color";var Vc=class extends ln{};Vc.prototype.ValueTypeName="number";var Hc=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jo=class extends ln{InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};Jo.prototype.ValueTypeName="quaternion",Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends ln{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string",Ui.prototype.ValueBufferType=Array,Ui.prototype.DefaultInterpolation=Ao,Ui.prototype.InterpolantFactoryMethodLinear=void 0,Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends ln{};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(e,t,n){let i=this,r,o=!1,a=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,o===!1&&i.onStart!==void 0&&i.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,l),a===l&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},wg=new Wc,qc=class{constructor(e){this.manager=e!==void 0?e:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,r){n.load(e,i,t,r)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ko=class extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xl=new Re,ud=new S,dd=new S,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pd=new Re,ir=new S,_l=new S,jc=class extends Qo{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),i.makeTranslation(-ir.x,-ir.y,-ir.z),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}},ea=class extends wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xc=class extends Qo{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ex=new Re,Tx=new Re,Ax=new Re;var na=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fd(){return performance.now()}var Cx=new S,Rx=new xn,Ix=new S,Px=new S;var Lx=new S,Nx=new xn,Ux=new S,Bx=new S;var sh="\\[\\]\\.:\\/",Sg=new RegExp("["+sh+"]","g"),Ml="[^"+sh+"]",Eg="[^"+sh.replace("\\.","")+"]",Tg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ml)+/(WCOD+)?/.source.replace("WCOD",Eg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml)+"$"),Ag=["material","materials","bones","map"],it=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(e){let t=Tg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=class{constructor(s,e,t){let n=t||it.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);var md=new Re,ia=class{constructor(e,t,n=0,i=1/0){this.ray=new Di(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return Yc(e,this,n,t),n.sort(gd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Yc(e[i],this,n,t);return n.sort(gd),n}};function gd(s,e){return s.distance-e.distance}function Yc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Yc(r[o],e,t,!0)}}var Fx=new oe;var Ox=new S,zx=new S;var kx=new S;var Vx=new S,Hx=new Re,Gx=new Re;var Wx=new S,qx=new Ae,jx=new Ae;var Xx=new S,Yx=new S,Zx=new S;var $x=new S,Jx=new pr;var Kx=new cn;var Qx=new S;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var pi=class s{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);let n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new s);let n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],f=n[8],y=i[0],m=i[1],v=i[2],g=i[3],x=i[4],_=i[5],w=i[6],b=i[7],C=i[8];return r[0]=o*y+a*g+l*w,r[1]=o*m+a*x+l*b,r[2]=o*v+a*_+l*C,r[3]=c*y+h*g+d*w,r[4]=c*m+h*x+d*b,r[5]=c*v+h*_+d*C,r[6]=u*y+p*g+f*w,r[7]=u*m+p*x+f*b,r[8]=u*v+p*_+f*C,t}scale(e,t){t===void 0&&(t=new s);let n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new M);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,h,d=4,u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){let p=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*p;while(--h)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new s);let t=3,n=6,i=Rg,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,l=a,c,h=n,d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){let u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{let u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{let u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,d=t*l,u=n*a,p=n*l,f=i*l,y=r*o,m=r*a,v=r*l,g=this.elements;return g[0]=1-(u+f),g[1]=h-v,g[2]=d+m,g[3]=h+v,g[4]=1-(c+f),g[5]=p-y,g[6]=d-m,g[7]=p+y,g[8]=1-(c+u),this}transpose(e){e===void 0&&(e=new s);let t=this.elements,n=e.elements,i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}},Rg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],M=class s{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new s);let n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new s(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new s(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new pi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new s);let t=this.x,n=this.y,i=this.z,r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new s);let n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new s),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new s),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new s),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let i=Ig,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=Pg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Vd),Vd.almostEquals(e,t)}clone(){return new s(this.x,this.y,this.z)}};M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);var Ig=new M,Pg=new M,Vd=new M,qt=class s{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Hd),c=Hd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new s().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){let c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){let n=Gd,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=Gd,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),f=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(f<0||p>f)}},Hd=new M,Gd=[new M,new M,new M,new M,new M,new M,new M,new M],fa=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},ma=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}},Et=class s{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=Lg,i=Ng;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-r*l,t.y=i*h+o*l+r*a-n*c,t.z=r*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new s);let t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new s),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);let n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,p=-o*n-a*i-l*r;return t.x=h*c+p*-o+d*-l-u*-a,t.y=d*c+p*-a+u*-o-h*-l,t.z=u*c+p*-l+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*p),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,h=e.z,d=e.w,u,p,f,y,m;return p=i*l+r*c+o*h+a*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),f=Math.sin(u),y=Math.sin((1-t)*u)/f,m=Math.sin(t*u)/f):(y=1-t,m=t),n.x=y*i+m*l,n.y=y*r+m*c,n.z=y*o+m*h,n.w=y*a+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new s);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}},Lg=new M,Ng=new M,Ug={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},me=class s{constructor(e){e===void 0&&(e={}),this.id=s.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};me.idCounter=0;me.types=Ug;var Ye=class s{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new Et,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return s.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return s.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Wd),Wd.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}},Wd=new Et,uh=class s extends me{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:me.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let i=new M;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);let t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){let r=new M,o=new M;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){let h=new M,d=-1,u=-Number.MAX_VALUE;for(let f=0;f<n.faces.length;f++){h.copy(n.faceNormals[f]),r.vmult(h,h);let y=h.dot(o);y>u&&(u=y,d=f)}let p=[];for(let f=0;f<n.faces[d].length;f++){let y=n.vertices[n.faces[d][f]],m=new M;m.copy(y),r.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,p,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){let c=new M,h=new M,d=new M,u=new M,p=new M,f=new M,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let v=0;v!==m.uniqueAxes.length;v++){n.vmult(m.uniqueAxes[v],c);let g=m.testSepAxis(c,e,t,n,i,r);if(g===!1)return!1;g<y&&(y=g,o.copy(c))}else{let v=a?a.length:m.faces.length;for(let g=0;g<v;g++){let x=a?a[g]:g;c.copy(m.faceNormals[x]),n.vmult(c,c);let _=m.testSepAxis(c,e,t,n,i,r);if(_===!1)return!1;_<y&&(y=_,o.copy(c))}}if(e.uniqueAxes)for(let v=0;v!==e.uniqueAxes.length;v++){r.vmult(e.uniqueAxes[v],h);let g=m.testSepAxis(h,e,t,n,i,r);if(g===!1)return!1;g<y&&(y=g,o.copy(h))}else{let v=l?l.length:e.faces.length;for(let g=0;g<v;g++){let x=l?l[g]:g;h.copy(e.faceNormals[x]),r.vmult(h,h);let _=m.testSepAxis(h,e,t,n,i,r);if(_===!1)return!1;_<y&&(y=_,o.copy(h))}}for(let v=0;v!==m.uniqueEdges.length;v++){n.vmult(m.uniqueEdges[v],u);for(let g=0;g!==e.uniqueEdges.length;g++)if(r.vmult(e.uniqueEdges[g],p),u.cross(p,f),!f.almostZero()){f.normalize();let x=m.testSepAxis(f,e,t,n,i,r);if(x===!1)return!1;x<y&&(y=x,o.copy(f))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){let a=this;s.project(a,e,n,i,rh),s.project(t,e,r,o,oh);let l=rh[0],c=rh[1],h=oh[0],d=oh[1];if(l<d||h<c)return!1;let u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(e,t){let n=new M,i=new M;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){let l=new M,c=new M,h=new M,d=new M,u=new M,p=new M,f=new M,y=new M,m=this,v=[],g=i,x=v,_=-1,w=Number.MAX_VALUE;for(let F=0;F<m.faces.length;F++){l.copy(m.faceNormals[F]),n.vmult(l,l);let W=l.dot(e);W<w&&(w=W,_=F)}if(_<0)return;let b=m.faces[_];b.connectedFaces=[];for(let F=0;F<m.faces.length;F++)for(let W=0;W<m.faces[F].length;W++)b.indexOf(m.faces[F][W])!==-1&&F!==_&&b.connectedFaces.indexOf(F)===-1&&b.connectedFaces.push(F);let C=b.length;for(let F=0;F<C;F++){let W=m.vertices[b[F]],V=m.vertices[b[(F+1)%C]];W.vsub(V,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[_]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(W),n.vmult(p,p),t.vadd(p,p);let L=b.connectedFaces[F];f.copy(this.faceNormals[L]);let N=this.getPlaneConstantOfFace(L);y.copy(f),n.vmult(y,y);let H=N-y.dot(t);for(this.clipFaceAgainstPlane(g,x,y,H);g.length;)g.shift();for(;x.length;)g.push(x.shift())}f.copy(this.faceNormals[_]);let I=this.getPlaneConstantOfFace(_);y.copy(f),n.vmult(y,y);let U=I-y.dot(t);for(let F=0;F<g.length;F++){let W=y.dot(g[F])+U;if(W<=r&&(console.log(`clamped: depth=${W} to minDist=${r}`),W=r),W<=o){let V=g[F];if(W<=1e-6){let L={point:V,normal:y,depth:W};a.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,r<0)if(o<0){let d=new M;d.copy(c),t.push(d)}else{let d=new M;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){let d=new M;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){let r=this.vertices,o,a,l,c,h,d,u=new M;for(let p=0;p<r.length;p++){u.copy(r[p]),t.vmult(u,u),e.vadd(u,u);let f=u;(o===void 0||f.x<o)&&(o=f.x),(c===void 0||f.x>c)&&(c=f.x),(a===void 0||f.y<a)&&(a=f.y),(h===void 0||f.y>h)&&(h=f.y),(l===void 0||f.z<l)&&(l=f.z),(d===void 0||f.z>d)&&(d=f.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){let o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=i[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a],c=t[n[a][0]],h=new M;e.vsub(c,h);let d=l.dot(h),u=new M;o.vsub(c,u);let p=l.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return r?1:-1}static project(e,t,n,i,r){let o=e.vertices.length,a=Dg,l=0,c=0,h=Fg,d=e.vertices;h.setZero(),Ye.vectorToLocalFrame(n,i,t,a),Ye.pointToLocalFrame(n,i,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let p=1;p<o;p++){let f=d[p].dot(a);f>l&&(l=f),f<c&&(c=f)}if(c-=u,l-=u,c>l){let p=c;c=l,l=p}r[0]=l,r[1]=c}},rh=[],oh=[],Bg=new M,Dg=new M,Fg=new M,Hi=class s extends me{constructor(e){super({type:me.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new uh({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),s.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){let n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)di.set(r[o][0],r[o][1],r[o][2]),t.vmult(di,di),e.vadd(di,di),n(di.x,di.y,di.z)}calculateWorldAABB(e,t,n,i){let r=this.halfExtents;bn[0].set(r.x,r.y,r.z),bn[1].set(-r.x,r.y,r.z),bn[2].set(-r.x,-r.y,r.z),bn[3].set(-r.x,-r.y,-r.z),bn[4].set(r.x,-r.y,-r.z),bn[5].set(r.x,r.y,-r.z),bn[6].set(-r.x,r.y,-r.z),bn[7].set(r.x,-r.y,r.z);let o=bn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=bn[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},di=new M,bn=[new M,new M,new M,new M,new M,new M,new M,new M],Mh={DYNAMIC:1,STATIC:2,KINEMATIC:4},bh={AWAKE:0,SLEEPY:1,SLEEPING:2},Le=class s extends ma{constructor(e){e===void 0&&(e={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?s.STATIC:s.DYNAMIC,typeof e.type==typeof s.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Et,this.initQuaternion=new Et,this.previousQuaternion=new Et,this.interpolatedQuaternion=new Et,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new pi,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new pi,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new qt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,e===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(s.sleepyEvent)):t===s.SLEEPY&&n>i?this.wakeUp():t===s.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){let i=new M,r=new Et;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,i=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=Og,o=zg,a=this.quaternion,l=this.aabb,c=kg;for(let h=0;h!==i;h++){let d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=Vg,i=Hg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=Wg;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;let n=qg,i=jg;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=t,i=Xg;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=Yg;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;let n=Zg,i=$g;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){let e=Jg;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Hi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;let f=d.elements,y=this.angularFactor,m=l.x*y.x,v=l.y*y.y,g=l.z*y.z;r.x+=e*(f[0]*m+f[1]*v+f[2]*g),r.y+=e*(f[3]*m+f[4]*v+f[5]*g),r.z+=e*(f[6]*m+f[7]*v+f[8]*g),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Le.idCounter=0;Le.COLLIDE_EVENT_NAME="collide";Le.DYNAMIC=Mh.DYNAMIC;Le.STATIC=Mh.STATIC;Le.KINEMATIC=Mh.KINEMATIC;Le.AWAKE=bh.AWAKE;Le.SLEEPY=bh.SLEEPY;Le.SLEEPING=bh.SLEEPING;Le.wakeupEvent={type:"wakeup"};Le.sleepyEvent={type:"sleepy"};Le.sleepEvent={type:"sleep"};var Og=new M,zg=new Et,kg=new qt,Vg=new pi,Hg=new pi,Gg=new pi,Wg=new M,qg=new M,jg=new M,Xg=new M,Yg=new M,Zg=new M,$g=new M,Jg=new M,ga=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&Le.STATIC)!==0||e.sleepState===Le.SLEEPING)&&((t.type&Le.STATIC)!==0||t.sleepState===Le.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){let r=Kg;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){let n=Qg,i=e0,r=t0,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new M;e.position.vsub(t.position,n);let i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Kg=new M;new M;new Et;new M;var Qg={keys:[]},e0=[],t0=[];new M;var t_=new M;new M;var dh=class extends ga{constructor(){super()}collisionPairs(e,t,n){let i=e.bodies,r=i.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){let r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},Bs=class{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},np,ip,sp,rp,op,ap,lp,wh={CLOSEST:1,ANY:2,ALL:4};np=me.types.SPHERE;ip=me.types.PLANE;sp=me.types.BOX;rp=me.types.CYLINDER;op=me.types.CONVEXPOLYHEDRON;ap=me.types.HEIGHTFIELD;lp=me.types.TRIMESH;var Jt=class s{get[np](){return this._intersectSphere}get[ip](){return this._intersectPlane}get[sp](){return this._intersectBox}get[rp](){return this._intersectConvex}get[op](){return this._intersectConvex}get[ap](){return this._intersectHeightfield}get[lp](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new Bs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||s.ANY,this.result=t.result||new Bs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(qd),ah.length=0,e.broadphase.aabbQuery(e,qd,ah),this.intersectBodies(ah),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=n0,r=i0;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){let r=this.from;if(x0(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){let o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);let h=new M;o.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;let p=c.dot(l);if(Math.abs(p)<this.precision)return;let f=new M,y=new M,m=new M;o.vsub(n,f);let v=-c.dot(f)/p;l.scale(v,y),o.vadd(y,m),this.reportIntersection(c,m,r,i,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;let o=s0;o.from.copy(this.from),o.to.copy(this.to),Ye.pointToLocalFrame(n,t,o.from,o.from),Ye.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=r0,l,c,h,d;l=c=0,h=d=e.data.length-1;let u=new qt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=l;p<h;p++)for(let f=c;f<d;f++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,f,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(p,f,!1),Ye.pointToWorldFrame(n,t,e.pillarOffset,ca),this._intersectConvex(e.pillarConvex,t,ca,i,r,jd),this.result.shouldStop)return;e.getConvexTrianglePillar(p,f,!0),Ye.pointToWorldFrame(n,t,e.pillarOffset,ca),this._intersectConvex(e.pillarConvex,t,ca,i,r,jd)}}}_intersectSphere(e,t,n,i,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,p=o0,f=a0;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,f),f.normalize(),this.reportIntersection(f,p,r,i,-1);else{let y=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(y>=0&&y<=1&&(o.lerp(a,y,p),p.vsub(n,f),f.normalize(),this.reportIntersection(f,p,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,f),f.normalize(),this.reportIntersection(f,p,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){let a=l0,l=Xd,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,f=this.from,y=this.to,m=f.distanceTo(y),v=c?c.length:h.length,g=this.result;for(let x=0;!g.shouldStop&&x<v;x++){let _=c?c[x]:x,w=h[_],b=u[_],C=t,I=n;l.copy(d[w[0]]),C.vmult(l,l),l.vadd(I,l),l.vsub(f,l),C.vmult(b,a);let U=p.dot(a);if(Math.abs(U)<this.precision)continue;let F=a.dot(l)/U;if(!(F<0)){p.scale(F,zt),zt.vadd(f,zt),un.copy(d[w[0]]),C.vmult(un,un),I.vadd(un,un);for(let W=1;!g.shouldStop&&W<w.length-1;W++){wn.copy(d[w[W]]),Sn.copy(d[w[W+1]]),C.vmult(wn,wn),C.vmult(Sn,Sn),I.vadd(wn,wn),I.vadd(Sn,Sn);let V=zt.distanceTo(f);!(s.pointInTriangle(zt,un,wn,Sn)||s.pointInTriangle(zt,wn,un,Sn))||V>m||this.reportIntersection(a,zt,r,i,_)}}}}_intersectTrimesh(e,t,n,i,r,o){let a=u0,l=v0,c=y0,h=Xd,d=d0,u=p0,p=f0,f=g0,y=m0,m=e.indices;e.vertices;let v=this.from,g=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),Ye.vectorToLocalFrame(n,t,x,d),Ye.pointToLocalFrame(n,t,v,u),Ye.pointToLocalFrame(n,t,g,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();let _=u.distanceSquared(p);e.tree.rayQuery(this,c,l);for(let w=0,b=l.length;!this.result.shouldStop&&w!==b;w++){let C=l[w];e.getNormal(C,a),e.getVertex(m[C*3],un),un.vsub(u,h);let I=d.dot(a),U=a.dot(h)/I;if(U<0)continue;d.scale(U,zt),zt.vadd(u,zt),e.getVertex(m[C*3+1],wn),e.getVertex(m[C*3+2],Sn);let F=zt.distanceSquared(u);!(s.pointInTriangle(zt,wn,un,Sn)||s.pointInTriangle(zt,un,wn,Sn))||F>_||(Ye.vectorToWorldFrame(t,a,y),Ye.pointToWorldFrame(n,t,zt,f),this.reportIntersection(y,f,r,i,C))}l.length=0}reportIntersection(e,t,n,i,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case s.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case s.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Vi),n.vsub(t,Tr),e.vsub(t,lh);let r=Vi.dot(Vi),o=Vi.dot(Tr),a=Vi.dot(lh),l=Tr.dot(Tr),c=Tr.dot(lh),h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}};Jt.CLOSEST=wh.CLOSEST;Jt.ANY=wh.ANY;Jt.ALL=wh.ALL;var qd=new qt,ah=[],Tr=new M,lh=new M,n0=new M,i0=new Et,zt=new M,un=new M,wn=new M,Sn=new M;new M;new Bs;var jd={faceList:[0]},ca=new M,s0=new Jt,r0=[],o0=new M,a0=new M,l0=new M,c0=new M,h0=new M,Xd=new M,u0=new M,d0=new M,p0=new M,f0=new M,m0=new M,g0=new M;new qt;var v0=[],y0=new Ye,Vi=new M,ha=new M;function x0(s,e,t){t.vsub(s,Vi);let n=Vi.dot(e);return e.scale(n,ha),ha.vadd(s,ha),t.distanceTo(ha)}var va=class s extends ga{static checkBounds(e,t,n){let i,r;n===0?(i=e.position.x,r=t.position.x):n===1?(i=e.position.y,r=t.position.y):n===2&&(i=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=i+o;return r-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let i=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let i=this.axisList,r=i.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=i[a];for(l=a+1;l<r;l++){let h=i[l];if(this.needBroadphaseCollision(c,h)){if(!s.checkBounds(c,h,o))break;this.intersectionTest(c,h,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){let r=e[i];r.aabbNeedsUpdate&&r.updateAABB()}t===0?s.insertionSortX(e):t===1?s.insertionSortY(e):t===2&&s.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let p=0;p!==l;p++){let f=a[p],y=f.position.x;e+=y,t+=y*y;let m=f.position.y;n+=m,i+=m*m;let v=f.position.z;r+=v,o+=v*v}let h=t-e*e*c,d=i-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,r="x";i===1&&(r="y"),i===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}},ya=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},ph=class s{constructor(e,t,n){n===void 0&&(n={}),n=ya.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};ph.idCounter=0;var xa=class{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},Ir=class s{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new xa,this.jacobianElementB=new xa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,Yd),a.scale(h,Zd),n.invInertiaWorldSolve.vmult(o,$d),i.invInertiaWorldSolve.vmult(l,Jd),e.multiplyVectors(Yd,$d)+t.multiplyVectors(Zd,Jd)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,ua),c+=ua.dot(e.rotational),l.vmult(t.rotational,ua),c+=ua.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=_0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Ir.idCounter=0;var Yd=new M,Zd=new M,$d=new M,Jd=new M,ua=new M,_0=new M,fh=class extends Ir{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){let t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=M0,c=b0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=r.velocity,p=r.angularVelocity;r.force,r.torque;let f=w0,y=this.jacobianElementA,m=this.jacobianElementB,v=this.ni;o.cross(v,l),a.cross(v,c),v.negate(y.spatial),l.negate(y.rotational),m.spatial.copy(v),m.rotational.copy(c),f.copy(r.position),f.vadd(a,f),f.vsub(i.position,f),f.vsub(o,f);let g=v.dot(f),x=this.restitution+1,_=x*u.dot(v)-x*h.dot(v)+p.dot(c)-d.dot(l),w=this.computeGiMf();return-g*t-_*n-e*w}getImpactVelocityAlongNormal(){let e=S0,t=E0,n=T0,i=A0,r=C0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}},M0=new M,b0=new M,w0=new M,S0=new M,E0=new M,T0=new M,A0=new M,C0=new M;var n_=new M,i_=new M;var s_=new M,r_=new M;new M;new M;var o_=new M,a_=new M;var l_=new M,c_=new M,_a=class extends Ir{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=R0,o=I0,a=this.t;n.cross(a,r),i.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}},R0=new M,I0=new M,Ma=class s{constructor(e,t,n){n=ya.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Ma.idCounter=0;var ba=class s{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=s.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};ba.idCounter=0;var h_=new M,u_=new M,d_=new M,p_=new M,f_=new M,m_=new M,g_=new M,v_=new M,y_=new M,x_=new M,__=new M;var M_=new M,b_=new M;new M;new M;new M;var w_=new M,S_=new M,E_=new M;new Jt;new M;var T_=new M,A_=new M,C_=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],R_=new M;var I_=new M,P_=new M,L_=new M;var N_=new M,U_=new M,B_=new M,D_=new M;var F_=new M,O_=new M,z_=new M;var Ds=class extends me{constructor(e){if(super({type:me.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new M);let n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let l=o[a];n[l]=e[l]-r,i[l]=e[l]+r}}};var k_=new M,V_=new M;var H_=new M,G_=new M,W_=new M,q_=new M,j_=new M,X_=new M,Y_=new M;var wa=class extends me{constructor(){super({type:me.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){let t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Hn.set(0,0,1),t.vmult(Hn,Hn);let r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Hn.x===1?i.x=e.x:Hn.x===-1&&(n.x=e.x),Hn.y===1?i.y=e.y:Hn.y===-1&&(n.y=e.y),Hn.z===1?i.z=e.z:Hn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},Hn=new M;var Z_=new M,$_=new M,J_=new M,K_=new M,Q_=new M,e1=new M,t1=new M,n1=new M,i1=new M;var s1=new M,r1=new qt;var o1=new M,a1=new qt,l1=new M,c1=new M,h1=new M,u1=new M,d1=new M,p1=new M,f1=new M,m1=new qt,g1=new M,v1=new Ye,y1=new qt,mh=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},gh=class extends mh{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e,d,u,p,f,y,m;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();let v=L0,g=N0,x=P0;v.length=a,g.length=a,x.length=a;for(let _=0;_!==a;_++){let w=o[_];x[_]=0,g[_]=w.computeB(h),v[_]=1/w.computeC()}if(a!==0){for(let b=0;b!==c;b++){let C=l[b],I=C.vlambda,U=C.wlambda;I.set(0,0,0),U.set(0,0,0)}for(n=0;n!==i;n++){f=0;for(let b=0;b!==a;b++){let C=o[b];d=g[b],u=v[b],m=x[b],y=C.computeGWlambda(),p=u*(d-y-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),x[b]+=p,f+=p>0?p:-p,C.addToWlambda(p)}if(f*f<r)break}for(let b=0;b!==c;b++){let C=l[b],I=C.velocity,U=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),I.vadd(C.vlambda,I),C.wlambda.vmul(C.angularFactor,C.wlambda),U.vadd(C.wlambda,U)}let _=o.length,w=1/h;for(;_--;)o[_].multiplier=x[_]*w}return n}},P0=[],L0=[],N0=[];var x1=Le.STATIC;var vh=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},yh=class extends vh{constructor(){super(...arguments),this.type=M}constructObject(){return new M}},tt={sphereSphere:me.types.SPHERE,spherePlane:me.types.SPHERE|me.types.PLANE,boxBox:me.types.BOX|me.types.BOX,sphereBox:me.types.SPHERE|me.types.BOX,planeBox:me.types.PLANE|me.types.BOX,convexConvex:me.types.CONVEXPOLYHEDRON,sphereConvex:me.types.SPHERE|me.types.CONVEXPOLYHEDRON,planeConvex:me.types.PLANE|me.types.CONVEXPOLYHEDRON,boxConvex:me.types.BOX|me.types.CONVEXPOLYHEDRON,sphereHeightfield:me.types.SPHERE|me.types.HEIGHTFIELD,boxHeightfield:me.types.BOX|me.types.HEIGHTFIELD,convexHeightfield:me.types.CONVEXPOLYHEDRON|me.types.HEIGHTFIELD,sphereParticle:me.types.PARTICLE|me.types.SPHERE,planeParticle:me.types.PLANE|me.types.PARTICLE,boxParticle:me.types.BOX|me.types.PARTICLE,convexParticle:me.types.PARTICLE|me.types.CONVEXPOLYHEDRON,cylinderCylinder:me.types.CYLINDER,sphereCylinder:me.types.SPHERE|me.types.CYLINDER,planeCylinder:me.types.PLANE|me.types.CYLINDER,boxCylinder:me.types.BOX|me.types.CYLINDER,convexCylinder:me.types.CONVEXPOLYHEDRON|me.types.CYLINDER,heightfieldCylinder:me.types.HEIGHTFIELD|me.types.CYLINDER,particleCylinder:me.types.PARTICLE|me.types.CYLINDER,sphereTrimesh:me.types.SPHERE|me.types.TRIMESH,planeTrimesh:me.types.PLANE|me.types.TRIMESH},xh=class{get[tt.sphereSphere](){return this.sphereSphere}get[tt.spherePlane](){return this.spherePlane}get[tt.boxBox](){return this.boxBox}get[tt.sphereBox](){return this.sphereBox}get[tt.planeBox](){return this.planeBox}get[tt.convexConvex](){return this.convexConvex}get[tt.sphereConvex](){return this.sphereConvex}get[tt.planeConvex](){return this.planeConvex}get[tt.boxConvex](){return this.boxConvex}get[tt.sphereHeightfield](){return this.sphereHeightfield}get[tt.boxHeightfield](){return this.boxHeightfield}get[tt.convexHeightfield](){return this.convexHeightfield}get[tt.sphereParticle](){return this.sphereParticle}get[tt.planeParticle](){return this.planeParticle}get[tt.boxParticle](){return this.boxParticle}get[tt.convexParticle](){return this.convexParticle}get[tt.cylinderCylinder](){return this.convexConvex}get[tt.sphereCylinder](){return this.sphereConvex}get[tt.planeCylinder](){return this.planeConvex}get[tt.boxCylinder](){return this.boxConvex}get[tt.convexCylinder](){return this.convexConvex}get[tt.heightfieldCylinder](){return this.heightfieldCylinder}get[tt.particleCylinder](){return this.particleCylinder}get[tt.sphereTrimesh](){return this.sphereTrimesh}get[tt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new yh,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new fh(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){let n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),p=n.invMass+i.invMass;p>0&&(p=1/p);let f=this.frictionEquationPool,y=f.length?f.pop():new _a(n,i,u*p),m=f.length?f.pop():new _a(n,i,u*p);return y.bi=m.bi=n,y.bj=m.bj=i,y.minForce=m.minForce=-u*p,y.maxForce=m.maxForce=u*p,y.ri.copy(e.ri),y.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(y.t,m.t),y.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=e.enabled,t.push(y,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ki.setZero(),Ns.setZero(),Us.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(ki.vadd(t.ni,ki),Ns.vadd(t.ri,Ns),Us.vadd(t.rj,Us)):(ki.vsub(t.ni,ki),Ns.vadd(t.rj,Ns),Us.vadd(t.ri,Us));let o=1/e;Ns.scale(o,n.ri),Us.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ki.normalize(),ki.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let l=D0,c=F0,h=U0,d=B0;for(let u=0,p=e.length;u!==p;u++){let f=e[u],y=t[u],m=null;f.material&&y.material&&(m=n.getContactMaterial(f.material,y.material)||null);let v=f.type&Le.KINEMATIC&&y.type&Le.STATIC||f.type&Le.STATIC&&y.type&Le.KINEMATIC||f.type&Le.KINEMATIC&&y.type&Le.KINEMATIC;for(let g=0;g<f.shapes.length;g++){f.quaternion.mult(f.shapeOrientations[g],l),f.quaternion.vmult(f.shapeOffsets[g],h),h.vadd(f.position,h);let x=f.shapes[g];for(let _=0;_<y.shapes.length;_++){y.quaternion.mult(y.shapeOrientations[_],c),y.quaternion.vmult(y.shapeOffsets[_],d),d.vadd(y.position,d);let w=y.shapes[_];if(!(x.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+w.boundingSphereRadius)continue;let b=null;x.material&&w.material&&(b=n.getContactMaterial(x.material,w.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;let C=x.type|w.type,I=this[C];if(I){let U=!1;x.type<w.type?U=I.call(this,x,w,h,d,l,c,f,y,x,w,v):U=I.call(this,w,x,d,h,c,l,y,f,x,w,v),U&&v&&(n.shapeOverlapKeeper.set(x.id,w.id),n.bodyOverlapKeeper.set(f.id,y.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;let u=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,h,d){let u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,da),u.ni.scale(u.ni.dot(da),Kd),da.vsub(Kd,u.rj),-da.dot(u.ni)<=e.radius){if(d)return!0;let p=u.ri,f=u.rj;p.vadd(n,p),p.vsub(a.position,p),f.vadd(i,f),f.vsub(l.position,f),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}sphereBox(e,t,n,i,r,o,a,l,c,h,d){let u=this.v3pool,p=cv;n.vsub(i,pa),t.getSideNormals(p,o);let f=e.radius,y=!1,m=uv,v=dv,g=pv,x=null,_=0,w=0,b=0,C=null;for(let O=0,ee=p.length;O!==ee&&y===!1;O++){let $=ov;$.copy(p[O]);let ae=$.length();$.normalize();let pe=pa.dot($);if(pe<ae+f&&pe>0){let Q=av,J=lv;Q.copy(p[(O+1)%3]),J.copy(p[(O+2)%3]);let de=Q.length(),ve=J.length();Q.normalize(),J.normalize();let ue=pa.dot(Q),R=pa.dot(J);if(ue<de&&ue>-de&&R<ve&&R>-ve){let A=Math.abs(pe-ae-f);if((C===null||A<C)&&(C=A,w=ue,b=R,x=ae,m.copy($),v.copy(Q),g.copy(J),_++,d))return!0}}}if(_){y=!0;let O=this.createContactEquation(a,l,e,t,c,h);m.scale(-f,O.ri),O.ni.copy(m),O.ni.negate(O.ni),m.scale(x,m),v.scale(w,v),m.vadd(v,m),g.scale(b,g),m.vadd(g,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let I=u.get(),U=hv;for(let O=0;O!==2&&!y;O++)for(let ee=0;ee!==2&&!y;ee++)for(let $=0;$!==2&&!y;$++)if(I.set(0,0,0),O?I.vadd(p[0],I):I.vsub(p[0],I),ee?I.vadd(p[1],I):I.vsub(p[1],I),$?I.vadd(p[2],I):I.vsub(p[2],I),i.vadd(I,U),U.vsub(n,U),U.lengthSquared()<f*f){if(d)return!0;y=!0;let ae=this.createContactEquation(a,l,e,t,c,h);ae.ri.copy(U),ae.ri.normalize(),ae.ni.copy(ae.ri),ae.ri.scale(f,ae.ri),ae.rj.copy(I),ae.ri.vadd(n,ae.ri),ae.ri.vsub(a.position,ae.ri),ae.rj.vadd(i,ae.rj),ae.rj.vsub(l.position,ae.rj),this.result.push(ae),this.createFrictionEquationsFromContact(ae,this.frictionResult)}u.release(I),I=null;let F=u.get(),W=u.get(),V=u.get(),L=u.get(),N=u.get(),H=p.length;for(let O=0;O!==H&&!y;O++)for(let ee=0;ee!==H&&!y;ee++)if(O%3!==ee%3){p[ee].cross(p[O],F),F.normalize(),p[O].vadd(p[ee],W),V.copy(n),V.vsub(W,V),V.vsub(i,V);let $=V.dot(F);F.scale($,L);let ae=0;for(;ae===O%3||ae===ee%3;)ae++;N.copy(n),N.vsub(L,N),N.vsub(W,N),N.vsub(i,N);let pe=Math.abs($),Q=N.length();if(pe<p[ae].length()&&Q<f){if(d)return!0;y=!0;let J=this.createContactEquation(a,l,e,t,c,h);W.vadd(L,J.rj),J.rj.copy(J.rj),N.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(f,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}u.release(F,W,V,L,N)}planeBox(e,t,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}convexConvex(e,t,n,i,r,o,a,l,c,h,d,u,p){let f=Cv;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,f,u,p)){let y=[],m=Rv;e.clipAgainstHull(n,r,t,i,o,f,-100,100,y);let v=0;for(let g=0;g!==y.length;g++){if(d)return!0;let x=this.createContactEquation(a,l,e,t,c,h),_=x.ri,w=x.rj;f.negate(x.ni),y[g].normal.negate(m),m.scale(y[g].depth,m),y[g].point.vadd(m,_),w.copy(y[g].point),_.vsub(n,_),w.vsub(i,w),_.vadd(n,_),_.vsub(a.position,_),w.vadd(i,w),w.vsub(l.position,w),this.result.push(x),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(e,t,n,i,r,o,a,l,c,h,d){let u=this.v3pool;n.vsub(i,fv);let p=t.faceNormals,f=t.faces,y=t.vertices,m=e.radius,v=!1;for(let g=0;g!==y.length;g++){let x=y[g],_=yv;o.vmult(x,_),i.vadd(_,_);let w=vv;if(_.vsub(n,w),w.lengthSquared()<m*m){if(d)return!0;v=!0;let b=this.createContactEquation(a,l,e,t,c,h);b.ri.copy(w),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),_.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let g=0,x=f.length;g!==x&&v===!1;g++){let _=p[g],w=f[g],b=xv;o.vmult(_,b);let C=_v;o.vmult(y[w[0]],C),C.vadd(i,C);let I=Mv;b.scale(-m,I),n.vadd(I,I);let U=bv;I.vsub(C,U);let F=U.dot(b),W=wv;if(n.vsub(C,W),F<0&&W.dot(b)>0){let V=[];for(let L=0,N=w.length;L!==N;L++){let H=u.get();o.vmult(y[w[L]],H),i.vadd(H,H),V.push(H)}if(rv(V,b,n)){if(d)return!0;v=!0;let L=this.createContactEquation(a,l,e,t,c,h);b.scale(-m,L.ri),b.negate(L.ni);let N=u.get();b.scale(-F,N);let H=u.get();b.scale(-m,H),n.vsub(i,L.rj),L.rj.vadd(H,L.rj),L.rj.vadd(N,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(N),u.release(H),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let O=0,ee=V.length;O!==ee;O++)u.release(V[O]);return}else for(let L=0;L!==w.length;L++){let N=u.get(),H=u.get();o.vmult(y[w[(L+1)%w.length]],N),o.vmult(y[w[(L+2)%w.length]],H),i.vadd(N,N),i.vadd(H,H);let O=mv;H.vsub(N,O);let ee=gv;O.unit(ee);let $=u.get(),ae=u.get();n.vsub(N,ae);let pe=ae.dot(ee);ee.scale(pe,$),$.vadd(N,$);let Q=u.get();if($.vsub(n,Q),pe>0&&pe*pe<O.lengthSquared()&&Q.lengthSquared()<m*m){if(d)return!0;let J=this.createContactEquation(a,l,e,t,c,h);$.vsub(i,J.rj),$.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(m,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let de=0,ve=V.length;de!==ve;de++)u.release(V[de]);u.release(N),u.release(H),u.release($),u.release(Q),u.release(ae);return}u.release(N),u.release(H),u.release($),u.release(Q),u.release(ae)}for(let L=0,N=V.length;L!==N;L++)u.release(V[L])}}}planeConvex(e,t,n,i,r,o,a,l,c,h,d){let u=Sv,p=Ev;p.set(0,0,1),r.vmult(p,p);let f=0,y=Tv;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,y),p.dot(y)<=0){if(d)return!0;let g=this.createContactEquation(a,l,e,t,c,h),x=Av;p.scale(p.dot(y),x),u.vsub(x,x),x.vsub(n,g.ri),g.ni.copy(p),u.vsub(i,g.rj),g.ri.vadd(n,g.ri),g.ri.vsub(a.position,g.ri),g.rj.vadd(i,g.rj),g.rj.vsub(l.position,g.rj),this.result.push(g),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(g,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}boxConvex(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,l,c,h,d){let u=t.data,p=e.radius,f=t.elementSize,y=Vv,m=kv;Ye.pointToLocalFrame(i,o,n,m);let v=Math.floor((m.x-p)/f)-1,g=Math.ceil((m.x+p)/f)+1,x=Math.floor((m.y-p)/f)-1,_=Math.ceil((m.y+p)/f)+1;if(g<0||_<0||v>u.length||x>u[0].length)return;v<0&&(v=0),g<0&&(g=0),x<0&&(x=0),_<0&&(_=0),v>=u.length&&(v=u.length-1),g>=u.length&&(g=u.length-1),_>=u[0].length&&(_=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);let w=[];t.getRectMinMax(v,x,g,_,w);let b=w[0],C=w[1];if(m.z-p>C||m.z+p<b)return;let I=this.result;for(let U=v;U<g;U++)for(let F=x;F<_;F++){let W=I.length,V=!1;if(t.getConvexTrianglePillar(U,F,!1),Ye.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.sphereConvex(e,t.pillarConvex,n,y,r,o,a,l,e,t,d)),d&&V||(t.getConvexTrianglePillar(U,F,!0),Ye.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.sphereConvex(e,t.pillarConvex,n,y,r,o,a,l,e,t,d)),d&&V))return!0;if(I.length-W>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,l,c,h,d){let u=t.data,p=t.elementSize,f=e.boundingSphereRadius,y=Ov,m=zv,v=Fv;Ye.pointToLocalFrame(i,o,n,v);let g=Math.floor((v.x-f)/p)-1,x=Math.ceil((v.x+f)/p)+1,_=Math.floor((v.y-f)/p)-1,w=Math.ceil((v.y+f)/p)+1;if(x<0||w<0||g>u.length||_>u[0].length)return;g<0&&(g=0),x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),g>=u.length&&(g=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let b=[];t.getRectMinMax(g,_,x,w,b);let C=b[0],I=b[1];if(!(v.z-f>I||v.z+f<C))for(let U=g;U<x;U++)for(let F=_;F<w;F++){let W=!1;if(t.getConvexTrianglePillar(U,F,!1),Ye.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(W=this.convexConvex(e,t.pillarConvex,n,y,r,o,a,l,null,null,d,m,null)),d&&W||(t.getConvexTrianglePillar(U,F,!0),Ye.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(W=this.convexConvex(e,t.pillarConvex,n,y,r,o,a,l,null,null,d,m,null)),d&&W))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,h,d){let u=Nv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;let f=this.createContactEquation(l,a,t,e,c,h);u.normalize(),f.rj.copy(u),f.rj.scale(e.radius,f.rj),f.ni.copy(u),f.ni.negate(f.ni),f.ri.set(0,0,0),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,h,d){let u=Iv;u.set(0,0,1),a.quaternion.vmult(u,u);let p=Pv;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;let y=this.createContactEquation(l,a,t,e,c,h);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=Lv;u.scale(u.dot(i),m),i.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexParticle(e,t,n,i,r,o,a,l,c,h,d){let u=-1,p=Bv,f=Dv,y=null,m=Uv;if(m.copy(i),m.vsub(n,m),r.conjugate(Qd),Qd.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let v=0,g=e.faces.length;v!==g;v++){let x=[e.worldVertices[e.faces[v][0]]],_=e.worldFaceNormals[v];i.vsub(x[0],ep);let w=-_.dot(ep);if(y===null||Math.abs(w)<Math.abs(y)){if(d)return!0;y=w,u=v,p.copy(_)}}if(u!==-1){let v=this.createContactEquation(l,a,t,e,c,h);p.scale(y,f),f.vadd(i,f),f.vsub(n,f),v.rj.copy(f),p.negate(v.ni),v.ri.set(0,0,0);let g=v.ri,x=v.rj;g.vadd(i,g),g.vsub(l.position,g),x.vadd(n,x),x.vsub(a.position,x),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,h,d)}particleCylinder(e,t,n,i,r,o,a,l,c,h,d){return this.convexParticle(t,e,i,n,o,r,l,a,c,h,d)}sphereTrimesh(e,t,n,i,r,o,a,l,c,h,d){let u=q0,p=j0,f=X0,y=Y0,m=Z0,v=$0,g=ev,x=W0,_=H0,w=tv;Ye.pointToLocalFrame(i,o,n,m);let b=e.radius;g.lowerBound.set(m.x-b,m.y-b,m.z-b),g.upperBound.set(m.x+b,m.y+b,m.z+b),t.getTrianglesInAABB(g,w);let C=G0,I=e.radius*e.radius;for(let L=0;L<w.length;L++)for(let N=0;N<3;N++)if(t.getVertex(t.indices[w[L]*3+N],C),C.vsub(m,_),_.lengthSquared()<=I){if(x.copy(C),Ye.pointToWorldFrame(i,o,x,C),C.vsub(n,_),d)return!0;let H=this.createContactEquation(a,l,e,t,c,h);H.ni.copy(_),H.ni.normalize(),H.ri.copy(H.ni),H.ri.scale(e.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.copy(C),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}for(let L=0;L<w.length;L++)for(let N=0;N<3;N++){t.getVertex(t.indices[w[L]*3+N],u),t.getVertex(t.indices[w[L]*3+(N+1)%3],p),p.vsub(u,f),m.vsub(p,v);let H=v.dot(f);m.vsub(u,v);let O=v.dot(f);if(O>0&&H<0&&(m.vsub(u,v),y.copy(f),y.normalize(),O=v.dot(y),y.scale(O,v),v.vadd(u,v),v.distanceTo(m)<e.radius)){if(d)return!0;let $=this.createContactEquation(a,l,e,t,c,h);v.vsub(m,$.ni),$.ni.normalize(),$.ni.scale(e.radius,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),Ye.pointToWorldFrame(i,o,v,v),v.vsub(l.position,$.rj),Ye.vectorToWorldFrame(o,$.ni,$.ni),Ye.vectorToWorldFrame(o,$.ri,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}let U=J0,F=K0,W=Q0,V=V0;for(let L=0,N=w.length;L!==N;L++){t.getTriangleVertices(w[L],U,F,W),t.getNormal(w[L],V),m.vsub(U,v);let H=v.dot(V);if(V.scale(H,v),m.vsub(v,v),H=v.distanceTo(m),Jt.pointInTriangle(v,U,F,W)&&H<e.radius){if(d)return!0;let O=this.createContactEquation(a,l,e,t,c,h);v.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(e.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),Ye.pointToWorldFrame(i,o,v,v),v.vsub(l.position,O.rj),Ye.vectorToWorldFrame(o,O.ni,O.ni),Ye.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,h,d){let u=new M,p=O0;p.set(0,0,1),r.vmult(p,p);for(let f=0;f<t.vertices.length/3;f++){t.getVertex(f,u);let y=new M;y.copy(u),Ye.pointToWorldFrame(i,o,y,u);let m=z0;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;let g=this.createContactEquation(a,l,e,t,c,h);g.ni.copy(p);let x=k0;p.scale(m.dot(p),x),u.vsub(x,x),g.ri.copy(x),g.ri.vsub(a.position,g.ri),g.rj.copy(u),g.rj.vsub(l.position,g.rj),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}}},ki=new M,Ns=new M,Us=new M,U0=new M,B0=new M,D0=new Et,F0=new Et,O0=new M,z0=new M,k0=new M,V0=new M,H0=new M;new M;var G0=new M,W0=new M,q0=new M,j0=new M,X0=new M,Y0=new M,Z0=new M,$0=new M,J0=new M,K0=new M,Q0=new M,ev=new qt,tv=[],da=new M,Kd=new M,nv=new M,iv=new M,sv=new M;function rv(s,e,t){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=nv;s[(r+1)%i].vsub(o,a);let l=iv;a.cross(e,l);let c=sv;t.vsub(o,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var pa=new M,ov=new M,av=new M,lv=new M,cv=[new M,new M,new M,new M,new M,new M],hv=new M,uv=new M,dv=new M,pv=new M,fv=new M,mv=new M,gv=new M,vv=new M,yv=new M,xv=new M,_v=new M,Mv=new M,bv=new M,wv=new M;new M;new M;var Sv=new M,Ev=new M,Tv=new M,Av=new M,Cv=new M,Rv=new M,Iv=new M,Pv=new M,Lv=new M,Nv=new M,Qd=new Et,Uv=new M;new M;var Bv=new M,ep=new M,Dv=new M,Fv=new M,Ov=new M,zv=[0],kv=new M,Vv=new M,Sa=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let l=0;l<r;l++){let c=!1,h=n[l];for(;h>i[a];)a++;c=h===i[a],c||tp(e,h)}a=0;for(let l=0;l<o;l++){let c=!1,h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||tp(t,h)}}};function tp(s,e){s.push((e&4294901760)>>16,e&65535)}var ch=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`,_h=class{constructor(){this.data={keys:[]}}get(e,t){let n=ch(e,t);return this.data[n]}set(e,t,n){let i=ch(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){let n=ch(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},Ea=class extends ma{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new dh,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new gh,this.constraints=[],this.narrowphase=new xh(this),this.collisionMatrix=new fa,this.collisionMatrixPrevious=new fa,this.bodyOverlapKeeper=new Sa,this.shapeOverlapKeeper=new Sa,this.contactmaterials=[],this.contactMaterialTable=new _h,this.defaultMaterial=new ba("default"),this.defaultContactMaterial=new Ma(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Bs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Jt.ALL,n.from=e,n.to=t,n.callback=i,hh.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Jt.ANY,n.from=e,n.to=t,n.result=i,hh.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Jt.CLOSEST,n.from=e,n.to=t,n.result=i,hh.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Le&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let i=t[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=mt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let i=mt.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(mt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=jv,i=Xv,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Le.DYNAMIC,u=-1/0,p=this.constraints,f=qv;l.length();let y=l.x,m=l.y,v=l.z,g=0;for(c&&(u=mt.now()),g=0;g!==r;g++){let L=o[g];if(L.type===d){let N=L.force,H=L.mass;N.x+=H*y,N.y+=H*m,N.z+=H*v}}for(let L=0,N=this.subsystems.length;L!==N;L++)this.subsystems[L].update();c&&(u=mt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=mt.now()-u);let x=p.length;for(g=0;g!==x;g++){let L=p[g];if(!L.collideConnected)for(let N=n.length-1;N>=0;N-=1)(L.bodyA===n[N]&&L.bodyB===i[N]||L.bodyB===n[N]&&L.bodyA===i[N])&&(n.splice(N,1),i.splice(N,1))}this.collisionMatrixTick(),c&&(u=mt.now());let _=Wv,w=t.length;for(g=0;g!==w;g++)_.push(t[g]);t.length=0;let b=this.frictionEquations.length;for(g=0;g!==b;g++)f.push(this.frictionEquations[g]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,_,this.frictionEquations,f),c&&(h.narrowphase=mt.now()-u),c&&(u=mt.now()),g=0;g<this.frictionEquations.length;g++)a.addEquation(this.frictionEquations[g]);let C=t.length;for(let L=0;L!==C;L++){let N=t[L],H=N.bi,O=N.bj,ee=N.si,$=N.sj,ae;if(H.material&&O.material?ae=this.getContactMaterial(H.material,O.material)||this.defaultContactMaterial:ae=this.defaultContactMaterial,ae.friction,H.material&&O.material&&(H.material.friction>=0&&O.material.friction>=0&&H.material.friction*O.material.friction,H.material.restitution>=0&&O.material.restitution>=0&&(N.restitution=H.material.restitution*O.material.restitution)),a.addEquation(N),H.allowSleep&&H.type===Le.DYNAMIC&&H.sleepState===Le.SLEEPING&&O.sleepState===Le.AWAKE&&O.type!==Le.STATIC){let pe=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),Q=O.sleepSpeedLimit**2;pe>=Q*2&&(H.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===Le.DYNAMIC&&O.sleepState===Le.SLEEPING&&H.sleepState===Le.AWAKE&&H.type!==Le.STATIC){let pe=H.velocity.lengthSquared()+H.angularVelocity.lengthSquared(),Q=H.sleepSpeedLimit**2;pe>=Q*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(H,O,!0),this.collisionMatrixPrevious.get(H,O)||(Ar.body=O,Ar.contact=N,H.dispatchEvent(Ar),Ar.body=H,O.dispatchEvent(Ar)),this.bodyOverlapKeeper.set(H.id,O.id),this.shapeOverlapKeeper.set(ee.id,$.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=mt.now()-u,u=mt.now()),g=0;g!==r;g++){let L=o[g];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=p.length,g=0;g!==x;g++){let L=p[g];L.update();for(let N=0,H=L.equations.length;N!==H;N++){let O=L.equations[N];a.addEquation(O)}}a.solve(e,this),c&&(h.solve=mt.now()-u),a.removeAllEquations();let I=Math.pow;for(g=0;g!==r;g++){let L=o[g];if(L.type&d){let N=I(1-L.linearDamping,e),H=L.velocity;H.scale(N,H);let O=L.angularVelocity;if(O){let ee=I(1-L.angularDamping,e);O.scale(ee,O)}}}this.dispatchEvent(Gv),c&&(u=mt.now());let F=this.stepnumber%(this.quatNormalizeSkip+1)===0,W=this.quatNormalizeFast;for(g=0;g!==r;g++)o[g].integrate(e,F,W);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=mt.now()-u),this.stepnumber+=1,this.dispatchEvent(Hv);let V=!0;if(this.allowSleep)for(V=!1,g=0;g!==r;g++){let L=o[g];L.sleepTick(this.time),L.sleepState!==Le.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Gn,Wn),e){for(let r=0,o=Gn.length;r<o;r+=2)Cr.bodyA=this.getBodyById(Gn[r]),Cr.bodyB=this.getBodyById(Gn[r+1]),this.dispatchEvent(Cr);Cr.bodyA=Cr.bodyB=null}if(t){for(let r=0,o=Wn.length;r<o;r+=2)Rr.bodyA=this.getBodyById(Wn[r]),Rr.bodyB=this.getBodyById(Wn[r+1]),this.dispatchEvent(Rr);Rr.bodyA=Rr.bodyB=null}Gn.length=Wn.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Gn,Wn),n){for(let r=0,o=Gn.length;r<o;r+=2){let a=this.getShapeById(Gn[r]),l=this.getShapeById(Gn[r+1]);qn.shapeA=a,qn.shapeB=l,a&&(qn.bodyA=a.body),l&&(qn.bodyB=l.body),this.dispatchEvent(qn)}qn.bodyA=qn.bodyB=qn.shapeA=qn.shapeB=null}if(i){for(let r=0,o=Wn.length;r<o;r+=2){let a=this.getShapeById(Wn[r]),l=this.getShapeById(Wn[r+1]);jn.shapeA=a,jn.shapeB=l,a&&(jn.bodyA=a.body),l&&(jn.bodyB=l.body),this.dispatchEvent(jn)}jn.bodyA=jn.bodyB=jn.shapeA=jn.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new qt;var hh=new Jt,mt=globalThis.performance||{};if(!mt.now){let s=Date.now();mt.timing&&mt.timing.navigationStart&&(s=mt.timing.navigationStart),mt.now=()=>Date.now()-s}new M;var Hv={type:"postStep"},Gv={type:"preStep"},Ar={type:Le.COLLIDE_EVENT_NAME,body:null,contact:null},Wv=[],qv=[],jv=[],Xv=[],Gn=[],Wn=[],Cr={type:"beginContact",bodyA:null,bodyB:null},Rr={type:"endContact",bodyA:null,bodyB:null},qn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},jn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var ce=s=>document.getElementById(s),_1=matchMedia("(pointer:coarse)").matches,Cn=new Oo({antialias:!0});Cn.setPixelRatio(Math.min(devicePixelRatio,2));Cn.setSize(innerWidth,innerHeight);Cn.shadowMap.enabled=!0;Cn.shadowMap.type=vd;Cn.toneMapping=xd;Cn.toneMappingExposure=1.05;document.body.prepend(Cn.domElement);var We=new ko;We.background=new Ae(10474495);We.fog=new zo(10474495,45,110);var dn=new It(45,innerWidth/innerHeight,.1,300);We.add(new Ko(14676223,9071178,1.6));var Vs=new ta(16773596,2.6);Vs.position.set(14,26,10);Vs.castShadow=!0;Vs.shadow.mapSize.set(2048,2048);Object.assign(Vs.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:70});Vs.shadow.bias=-4e-4;We.add(Vs);var ji=new ea(16752704,0,18,1.6);We.add(ji);var Zv=(()=>{let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#7cc56a",e.fillRect(0,0,256,256),e.fillStyle="#74bb62";for(let n=0;n<8;n++)for(let i=0;i<8;i++)(n+i)%2&&e.fillRect(n*32,i*32,32,32);let t=new hi(s);return t.wrapS=t.wrapT=lr,t.repeat.set(24,24),t.colorSpace=Rt,t})(),Ia=new st(new Fi(200,200),new Bt({map:Zv,roughness:.95}));Ia.rotation.x=-Math.PI/2;Ia.receiveShadow=!0;We.add(Ia);var Uh=new st(new Zt(9,9.4,.3,48),new Bt({color:15259832,roughness:.8}));Uh.position.y=-.14;Uh.receiveShadow=!0;We.add(Uh);var Tt=new Ea({gravity:new M(0,-9.82,0)});Tt.broadphase=new va(Tt);Tt.allowSleep=!0;Tt.solver.iterations=12;Tt.defaultContactMaterial.friction=.5;Tt.defaultContactMaterial.restitution=.05;Tt.addBody(new Le({mass:0,shape:new wa,quaternion:new Et().setFromEuler(-Math.PI/2,0,0)}));var $v=[16739179,16758861,16769126,7064439,5084927,10185727,16748487,16117990],Jv=$v.map(s=>new Bt({color:s,roughness:.55})),Kv={},gp=(s,e,t)=>Kv[s+","+e+","+t]||=new xt(s,e,t),gt=[],kt=[],bt=[],Ah=!1,Xn="toy",Qv={wood:[13142346,11563066,14262374].map(s=>new Bt({color:s,roughness:.8})),stone:[10133672,8883606,11778239].map(s=>new Bt({color:s,roughness:.9})),marble:[16249834,15328214,16777215].map(s=>new Bt({color:s,roughness:.45})),sand:[15254138,14265698,15782030].map(s=>new Bt({color:s,roughness:.9})),glass:[new Bt({color:12577023,roughness:.05,metalness:.1,transparent:!0,opacity:.45})]},ey={marble:1.2,toy:1,wood:.6,stone:2.4,sand:1.3,glass:.8},Lr=new Set,En=(s,e)=>{let t=Xn;Xn=s,e(),Xn=t},Aa=new Bt({color:16762940,metalness:.75,roughness:.3});function vp(s,e){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle=e,n.beginPath(),n.roundRect(4,6,248,52,26),n.fill(),n.fillStyle="#fff",n.font="bold 30px Arial Rounded MT Bold, Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(s,128,33);let i=new hi(t);i.colorSpace=Rt;let r=new ci(new Vn({map:i,depthTest:!1,transparent:!0}));return r.scale.set(2.4,.6,1),r.renderOrder=10,r}function ty(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=s==="dead";t.fillStyle=n?"#b8bcc8":"#ffd23c",t.strokeStyle="#2b2030",t.lineWidth=6,t.beginPath(),t.arc(64,64,52,0,7),t.fill(),t.stroke(),t.fillStyle="#2b2030",t.lineCap="round";let i=o=>{n?(t.beginPath(),t.moveTo(o-9,46),t.lineTo(o+9,64),t.moveTo(o+9,46),t.lineTo(o-9,64),t.stroke()):s==="happy"?(t.beginPath(),t.arc(o,58,9,Math.PI*1.1,Math.PI*1.9),t.stroke()):s==="scared"?(t.fillStyle="#fff",t.beginPath(),t.arc(o,54,13,0,7),t.fill(),t.stroke(),t.fillStyle="#2b2030",t.beginPath(),t.arc(o,56,5,0,7),t.fill()):(t.beginPath(),t.arc(o,54,6,0,7),t.fill())};i(44),i(84),t.beginPath(),s==="calm"?t.arc(64,74,18,.2*Math.PI,.8*Math.PI):s==="happy"?(t.arc(64,72,24,.1*Math.PI,.9*Math.PI),t.closePath(),t.fill()):s==="worry"?(t.moveTo(30,36),t.lineTo(50,42),t.moveTo(98,36),t.lineTo(78,42),t.moveTo(52,92),t.quadraticCurveTo(64,82,76,92)):s==="scared"?(t.ellipse(64,92,12,15,0,0,7),t.fill()):n&&(t.moveTo(44,94),t.quadraticCurveTo(54,86,64,94),t.quadraticCurveTo(74,102,84,94)),t.stroke(),(s==="worry"||s==="scared")&&(t.fillStyle="#7cc8ff",t.beginPath(),t.moveTo(104,30),t.quadraticCurveTo(114,48,104,52),t.quadraticCurveTo(94,48,104,30),t.fill());let r=new hi(e);return r.colorSpace=Rt,r}var ny={},yp=s=>ny[s]||=ty(s);function Os(s,e,t=1.5){!s.face||s.faceSt==="dead"||(e!==s.faceSt&&(s.face.material.map=yp(e),s.face.material.needsUpdate=!0,s.faceSt=e),s.faceT=t,e==="scared"&&Math.random()<.5&&Oy())}function Yi(s,e,t,n,i=3){let r=new si;for(let[c,h,d,u,p,f=0,y=0,m=0]of e){let v=new st(c,h);v.position.set(d,u,p),v.rotation.set(f,y,m),v.castShadow=v.receiveShadow=!0,r.add(v)}We.add(r);let o=new Le({mass:i,shape:new Hi(new M(...t)),position:new M(n[0],n[1],n[2]),sleepSpeedLimit:.15,sleepTimeLimit:.6});Tt.addBody(o),o.sleep();let a=vp("DON'T BREAK","#e0452a");We.add(a);let l=new ci(new Vn({map:yp("calm"),depthTest:!1,transparent:!0}));l.scale.setScalar(.85),l.renderOrder=11,We.add(l),bt.push({name:s,m:r,b:o,start:new S(...n),tag:a,face:l,faceSt:"calm",faceT:0,hit:!1,h:t[1]})}var ct=s=>new Bt({color:s,roughness:.6});function xp(s,e){Yi("the cat's house",[[new xt(1.2,.8,1.2),ct(16748487),0,-.15,0],[new ui(1,.6,4),ct(10181180),0,.55,0,0,Math.PI/4,0],[new Cs(.25,16),ct(2826288),0,-.2,.61],[new $t(.16,12,8),ct(16752704),.25,-.42,.75]],[.6,.55,.6],[s,.55,e])}function iy(s,e){Yi("the golden statue",[[new xt(1,.5,1),ct(14209216),0,-.75,0],[new Zt(.28,.4,.9,12),Aa,0,-.05,0],[new $t(.32,16,12),Aa,0,.62,0],[new ui(.22,.3,5),Aa,0,.98,0]],[.5,1,.5],[s,1,e],4)}function sy(s,e,t=0){let n=new Zt(.26,.26,.2,14);Yi("the new car",[[new xt(2,.5,1),ct(14692394),0,-.05,0],[new xt(1,.45,.9),ct(12575743),-.1,.42,0],...[[.65,.5],[-.65,.5],[.65,-.5],[-.65,-.5]].map(([i,r])=>[n,ct(2237740),i,-.3,r,Math.PI/2,0,0])],[1,.55,.5],[s,.56,e],6)}function ry(s,e){Yi("the prize pumpkin",[[new $t(.75,18,12),ct(16747038),0,0,0],[new Zt(.08,.1,.3,8),ct(4880938),0,.82,0],[new br(.2,.05,6,12),ct(16765500),.45,.5,.45]],[.7,.7,.7],[s,.72,e],3),bt[bt.length-1].m.children[0].scale.y=.75}function oy(s,e){Yi("the captain's boat",[[new xt(2.2,.5,.9),ct(16117990),0,-.1,0],[new xt(2.25,.14,.95),ct(2779864),0,-.3,0],[new xt(.8,.5,.7),ct(16765562),-.3,.4,0],[new Zt(.04,.04,1.4,6),ct(6965802),.5,.75,0]],[1.1,.55,.45],[s,.56,e],5)}function ay(s,e){xp(s,e);let t=bt[bt.length-1];t.name="the dog's house",t.m.children[0].material=ct(7064439)}function ly(s,e,t){let n=ct(16249834),i=Aa;Yi("the museum",[[new xt(1.7,.14,1.1),n,0,-.42,0],[new xt(1.5,.12,.95),n,0,.3,0],...[-.55,-.18,.18,.55].map(r=>[new Zt(.08,.09,.62,10),n,r,-.04,.32]),[new xt(1.2,.6,.6),ct(14274493),0,-.05,-.12],[(()=>{let r=new Rs;r.moveTo(-.8,0),r.lineTo(.8,0),r.lineTo(0,.36),r.closePath();let o=new _r(r,{depth:.95,bevelEnabled:!1});return o.translate(0,0,-.475),o})(),i,0,.36,0]],[.85,.5,.55],[s,e+.5,t],2)}function Ch(s,e){Yi("the garden gnome",[[new Zt(.22,.3,.5,12),ct(5084927),0,-.25,0],[new $t(.2,12,10),ct(16765616),0,.12,0],[new ui(.22,.5,12),ct(14692394),0,.5,0],[new ui(.16,.25,10),ct(16777215),0,-.02,.12,2.6,0,0]],[.3,.75,.3],[s,.75,e],1.5)}function Gi(s,e,t,n,i,r,o,a=0){let l=Xn==="toy"?Jv:Qv[Xn],c=new st(gp(n,i,r),l[o%l.length]);c.castShadow=Xn!=="glass",c.receiveShadow=!0,We.add(c);let h=new Le({mass:n*i*r*2*ey[Xn],shape:new Hi(new M(n/2,i/2,r/2)),position:new M(s,e,t),sleepSpeedLimit:.15,sleepTimeLimit:.6});a&&h.quaternion.setFromEuler(0,a,0),Tt.addBody(h),h.sleep();let d={m:c,b:h,start:new S(s,e,t),down:!1,keep:Ah,mat:Xn};gt.push(d),Gh.set(h,d),Xn==="glass"&&h.addEventListener("collide",u=>{Math.abs(u.contact.getImpactVelocityAlongNormal())>2.6&&Lr.add(d)})}function _t(s,e,t,n,i,r,o=-1,a=-1){for(let l=0;l<n;l++){let c=l%2?.5:0,h=l%2?t-1:t;for(let d=0;d<h;d++){let u=d+c+.5;if(l<4&&u>o&&u<a)continue;let p=i?s:s+u,f=i?e+u:e;Gi(p,.25+l*.5,f,i?.5:.98,.5,i?.98:.5,r+(l>>1))}}}function Kt(s,e,t,n,i,r=0){for(let o=r;o<r+n;o++){let a=.25+o*.5,l=t/2,c=o%2;for(let h=0;h<t;h++){let d=-l+h+.5;c?(Gi(s+d,a,e-l+.25,.98,.5,.5,i+(o>>2)),Gi(s+d,a,e+l-.25,.98,.5,.5,i+(o>>2))):(Gi(s-l+.25,a,e+d,.5,.5,.98,i+(o>>2)),Gi(s+l-.25,a,e+d,.5,.5,.98,i+(o>>2)))}}}function Sh(s,e,t,n){for(let i=0;i<t;i++){let r=t-i;for(let o=0;o<r;o++)for(let a=0;a<r;a++)Gi(s+(o-(r-1)/2)*.8,.2+i*.4,e+(a-(r-1)/2)*.8,.78,.4,.78,n+i)}}function Pr(s,e,t,n,i,r){Gi(s,e,t,n,.25,i,r)}var vi=[{n:"Little Tower",job:{av:"\u{1F468}\u200D\u{1F373}",who:"Bob the Baker",win:"My bakery has a view again! Free croissants for life!",fail:"Hmm\u2026 it is still standing.",say:'"My old water tower is blocking the view of my bakery. Knock it down!"',rule:"Hold to charge the cannon \xB7 release to fire"},build:()=>Kt(0,0,3,12,0)},{n:"Toy House",job:{av:"\u{1F475}",who:"Mrs. Patel",win:"Whiskers did not even wake up. Lovely work, dear!",fail:"WHISKERS! My poor baby!",say:`"Tear down the old house\u2026 but DO NOT touch Whiskers' house. He is napping."`,rule:"Don't break: the cat's house"},build:()=>{_t(-2.5,-2,5,6,0,1),_t(-2.5,2,5,6,0,1),_t(-2.5,-2,4,6,1,3),_t(2.5,-2,4,6,1,3),Pr(0,3.15,0,5.6,4.6,0),Sh(0,0,4,4),xp(4.3,-.5)}},{n:"Twin Towers",job:{av:"\u{1F3A9}",who:"Mayor Fizz",win:"The museum is safe! You get a statue. A small one.",fail:"That was the MUSEUM!",say:'"The colorful tower goes. The WHITE marble tower is our town museum. Not. One. Scratch."',rule:"Don't break: the white museum tower"},build:()=>{Kt(-3,0,3,16,0),Ah=!0,En("marble",()=>Kt(3,0,3,14,0)),Ah=!1,ly(3,7,0)}},{n:"Greenhouse",job:{av:"\u{1F474}",who:"Grandpa Joe",win:"My pumpkin is safe! That blue ribbon is mine!",fail:"Not the pumpkin! Twenty years of fertilizer!",say:'"Smash my old glass greenhouse. Glass breaks easy. My prize pumpkin does NOT."',rule:"Don't break: the prize pumpkin"},build:()=>En("glass",()=>{_t(-3,-2,6,6,0,0),_t(-3,2,6,6,0,0),_t(-3,-2,4,6,1,0),_t(3,-2,4,6,1,0),Pr(0,3.15,0,6.6,4.6,0)})||ry(-5.2,2.2)},{n:"Stone Castle",job:{av:"\u{1F934}",who:"King Grumble",win:"Splendid! My statue looks even shinier now.",fail:"MY STATUE! Guards! \u2026I have no guards.",say:`"Smash my castle, I'm building a bigger one. My golden statue in the middle stays!"`,rule:"Stone is heavy \xB7 Don't break: the golden statue"},build:()=>{En("stone",()=>{for(let[s,e]of[[-4,-4],[4,-4],[-4,4],[4,4]])Kt(s,e,2,12,0);_t(-3,-4.25,6,7,0,1),_t(-3,3.75,6,7,0,1,2,4),_t(-4.25,-3,6,7,1,2),_t(3.75,-3,6,7,1,2)}),iy(0,0)}},{n:"Glass Skyscraper",job:{av:"\u{1F576}\uFE0F",who:"Tech CEO Max",win:"Clean job. Not a scratch. You are hired.",fail:"My car! Do you know what that costs?!",say:'"Demolish the old glass tower. My new car is parked right there. Scratch it and you pay."',rule:"Don't break: the red car"},build:()=>{En("glass",()=>Kt(0,0,4,24,0)),En("stone",()=>{for(let s=1;s<6;s++)Pr(0,s*2+.12,0,4.2,4.2,s)}),sy(-4.4,-3.8)}},{n:"Lighthouse",job:{av:"\u{1F9D4}",who:"Captain Morgan Lee",win:"She went down like a proper ship. Boat is fine!",fail:"Me boat! Me beautiful boat!",say:'"The old lighthouse is retired. Bring it down. My boat is right there, so aim carefully!"',rule:"Don't break: the captain's boat"},build:()=>{En("stone",()=>Kt(0,0,3,10,0)),En("wood",()=>Kt(0,0,3,10,0,10)),En("glass",()=>Kt(0,0,3,3,0,20)),Pr(0,11.65,0,3.4,3.4,0),oy(-4,-3.6)}},{n:"Sand Pyramid",job:{av:"\u{1F9D3}",who:"Professor Dust",win:"Gnomes unharmed. Science is pleased.",fail:"Gerald! Not Gerald the gnome!",say:'"Flatten my practice pyramid. My two garden gnomes are watching. Leave them be."',rule:"Don't break: the 2 gnomes"},need:.75,build:()=>{En("sand",()=>Sh(0,0,8,0)),Ch(6.6,1),Ch(-1.5,-6.6)}},{n:"Log Cabin",job:{av:"\u{1FA93}",who:"Lumberjack Lou",win:"Rex says thank you. Woof.",fail:"Rex is homeless now. Look at his little face.",say:`"My old cabin has termites. Wood is light \u2014 it flies far. Rex's doghouse is right next to it\u2026"`,rule:"Don't break: the dog's house"},build:()=>{En("wood",()=>{_t(-2.5,-2,5,6,0,0),_t(-2.5,2,5,6,0,1),_t(-2.5,-2,4,6,1,2),_t(2.5,-2,4,6,1,0),Pr(0,3.15,0,5.6,4.6,1),Sh(0,0,4,2)}),ay(4.3,2.6)}},{n:"The Ex's Castle",job:{av:"\u{1F494}",who:"Lily",win:"Gone. All of it. I feel SO much better.",fail:"There is still some of him in there\u2026",say:'"My ex built me this castle. I want it GONE. All of it."',rule:"Knock down 95%. No mercy."},need:.95,build:()=>{for(let[s,e]of[[-3,-3],[3,-3],[-3,3],[3,3]])Kt(s,e,2,10,6);_t(-2,-3.25,4,6,0,6),_t(-2,2.75,4,6,0,6),Kt(0,0,3,12,6)}}],cy=[5,4,4,4,14,4,4,12,4,6],Bh=s=>cy[s]??10,hy={ball:1,tnt:1,mega:1,meteor:1},Dh=s=>zs(s).need||.85,zs=s=>s<vi.length?vi[s]:{n:"Bonus \xB7 Chaos City "+(s-vi.length+1),job:{av:"\u{1F3D7}\uFE0F",who:"City Hall",win:"The park can be built. The legend lives on!",fail:"You broke the legend!",say:`"Clear the old block for the new park. The gnome stays \u2014 it's a local legend."`,rule:"Don't break: the gnome"},build:()=>{Ch(7.5,1+s%3);let e=2+s%3;for(let t=0;t<e;t++){let n=t/e*Math.PI*2;Kt(Math.cos(n)*4,Math.sin(n)*4,2+t%2,10+2*(s%4),t)}Kt(0,0,3,14,0)}},Vt={sdk:null,playing:!1},uy=new Promise(s=>{if(!/poki/i.test(location.hostname+location.search+document.referrer+(location.ancestorOrigins?[...location.ancestorOrigins].join():"")))return s();let e=document.createElement("script");e.src="https://game-cdn.poki.com/scripts/v2/poki-sdk.js",e.onload=()=>{try{window.PokiSDK.init().then(()=>{Vt.sdk=window.PokiSDK,s()}).catch(()=>{Vt.sdk=window.PokiSDK,s()})}catch{s()}},e.onerror=()=>s(),document.head.appendChild(e),setTimeout(s,5e3)});function Zi(s){if(Vt.playing!==s){Vt.playing=s;try{Vt.sdk&&(s?Vt.sdk.gameplayStart():Vt.sdk.gameplayStop())}catch{}}}function Fh(s){if(Zi(!1),!Vt.sdk)return s();D.paused=!0;try{Vt.sdk.commercialBreak(()=>{Be&&Be.suspend()}).then(()=>{D.paused=!1,Be&&Be.resume(),s()})}catch{D.paused=!1,s()}}var D={lvl:0,money:0,pct:0,done:!1,tool:"ball",power:0,size:0,cd:{},shots:0};try{Object.assign(D,JSON.parse(localStorage.getItem("blockwrecker1")||"{}"),{done:!1,pct:0,cd:{}})}catch{}var _i=()=>{try{localStorage.setItem("blockwrecker1",JSON.stringify({lvl:D.lvl,money:D.money,power:D.power,size:D.size,unlocked:D.unlocked,stock:D.stock,stars:D.stars,free:D.free,mute:D.mute}))}catch{}};D.stars||={};D.left=0;D.outT=-1;D.unlocked||={ball:!0};D.stock||={tnt:1,mega:0,meteor:0};var Tn=[{k:"ball",n:"Cannon",ic:'<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="13" fill="#2b2f3a"/><circle cx="15" cy="17" r="4" fill="#fff" opacity=".35"/></svg>',key:"1",cd:.3,price:0},{k:"tnt",n:"TNT",ic:'<svg viewBox="0 0 40 40"><rect x="9" y="12" width="22" height="24" rx="3" fill="#d8312a"/><rect x="9" y="20" width="22" height="8" fill="#f5e6c8"/><text x="20" y="26.5" font-size="7.5" font-weight="900" text-anchor="middle" fill="#d8312a" font-family="Arial">TNT</text><path d="M20 12 q2 -6 7 -7" stroke="#5a3a24" stroke-width="2" fill="none"/><circle cx="28" cy="5" r="3" fill="#ffb020"/></svg>',key:"2",cd:1.2,price:60},{k:"mega",n:"Mega Bomb",ic:'<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="13" fill="#1d1f26"/><rect x="21" y="8" width="7" height="7" rx="1" fill="#555" transform="rotate(40 24 11)"/><path d="M28 9 q3 -5 7 -4" stroke="#8a6a3a" stroke-width="2" fill="none"/><circle cx="35" cy="5" r="3.5" fill="#ffcf3c"/><circle cx="13" cy="19" r="4" fill="#fff" opacity=".3"/></svg>',key:"3",cd:2.2,price:220},{k:"meteor",n:"Meteor",ic:'<svg viewBox="0 0 40 40"><path d="M5 6 L21 18 M10 3 L24 14 M3 11 L18 22" stroke="#ff9a3c" stroke-width="3" stroke-linecap="round" opacity=".8"/><circle cx="26" cy="26" r="11" fill="#ff6a2a"/><circle cx="23" cy="23" r="2.6" fill="#b8401a"/><circle cx="29.5" cy="30" r="2.2" fill="#b8401a"/></svg>',key:"4",cd:3,price:480}],_p=[{k:"power",n:"Blast power",cost:s=>Math.round(120*1.7**s),max:8},{k:"size",n:"Cannonball size",cost:s=>Math.round(100*1.8**s),max:6}];function dy(){Gh.clear();for(let s of Yn)We.remove(s.m);Yn.length=0;for(let s of Wi)We.remove(s.m);Wi.length=0;for(let s of[...gt,...kt,...bt])We.remove(s.m),Tt.removeBody(s.b);for(let s of bt)We.remove(s.tag),We.remove(s.face);gt.length=0,kt.length=0,bt.length=0}function ks(s){D.adUsed=!1,ce("adShots").style.display="none",ce("banner").classList.remove("show"),dy(),D.lvl=s,D.done=!1,D.pct=0,D.hits=0,D.keepHit=0,D.keepOops1=!1,by(s),D.left=Bh(s),D.shots=0,D.outT=-1,ce("retry").style.display="none",Or(),zs(s).build(),ce("lvl").textContent=`Level ${s+1} \xB7 ${zs(s).n}`,ce("next").style.display="none",xi(),_i();let e=0;for(let t of gt)e=Math.max(e,t.start.y);qe.target.set(0,Math.min(5,e*.4),0),qe.dist=Math.max(16,e*1.5+10)}var qe={yaw:.6,pitch:.42,dist:20,target:new S(0,2,0),vy:0};function py(s){qe.auto&&(qe.yaw+=s*.15),Mt.on||(qe.yaw+=qe.vy*s),qe.vy*=Math.pow(.05,s);let e=qe.pitch,t=qe.dist;dn.position.set(qe.target.x+Math.sin(qe.yaw)*Math.cos(e)*t,qe.target.y+Math.sin(e)*t,qe.target.z+Math.cos(qe.yaw)*Math.cos(e)*t),mi>0&&dn.position.add(new S((Math.random()-.5)*mi,(Math.random()-.5)*mi,(Math.random()-.5)*mi)),dn.lookAt(qe.target)}var Mt={on:!1,x:0,y:0,moved:0,id:null},Dt={on:!1,t:0,x:0,y:0},Mp=()=>Math.min(1,.25+Dt.t/1.1*.75),fy=new rt().setFromPoints(Array.from({length:48},()=>new S)),fi=new Go(new $t(.11,8,6),new kn({color:16777215,transparent:!0,opacity:.9}),26);fi.visible=!1;fi.frustumCulled=!1;We.add(fi);var cp=new Re;function bp(s,e,t){let n=e.x-s.x,i=e.z-s.z,r=Math.max(.01,Math.hypot(n,i)),o=e.y-s.y,a=9.82,l=t**4-a*(a*r*r+2*o*t*t),c=l<0?Math.PI/4:Math.atan((t*t-Math.sqrt(l))/(a*r));return new S(n/r*Math.cos(c)*t,Math.sin(c)*t,i/r*Math.cos(c)*t)}var wp=s=>dn.position.clone().add(s.clone().multiplyScalar(6)).add(new S(0,-1.2,0)),Sp=s=>8+40*s*s;function my(){if(!Dt.on){fi.visible=!1,ce("pow").style.display="none";return}let s=Mp();ce("pow").style.display="flex",ce("pow").style.left=Dt.x+"px",ce("pow").style.top=Dt.y+"px",ce("pow").querySelector(".ring").style.setProperty("--p",Math.round(s*100)+"%");let e=Ep(Dt.x,Dt.y);if(!e){fi.visible=!1;return}let t=Ca.ray.direction.clone(),n=wp(t),i=bp(n,e,Sp(s)),r=fy.attributes.position;for(let o=0;o<26;o++){let a=.1+o*.07,l=n.y+i.y*a-4.91*a*a;cp.makeScale(1-o*.02,1-o*.02,1-o*.02).setPosition(n.x+i.x*a,Math.max(.05,l),n.z+i.z*a),fi.setMatrixAt(o,cp)}fi.instanceMatrix.needsUpdate=!0,fi.visible=!1}Cn.domElement.addEventListener("pointerdown",s=>{Mt.on=!0,Mt.x=s.clientX,Mt.y=s.clientY,Mt.moved=0,Mt.id=s.pointerId,Hs(),D.tool==="ball"&&!D.card&&!D.menu&&!D.paused&&!D.done&&D.outT!==-2&&(Dt.on=!0,Dt.t=0,Dt.x=s.clientX,Dt.y=s.clientY)});addEventListener("pointermove",s=>{if(!Mt.on||s.pointerId!==Mt.id)return;let e=s.clientX-Mt.x,t=s.clientY-Mt.y;Mt.moved+=Math.abs(e)+Math.abs(t),Mt.x=s.clientX,Mt.y=s.clientY,Mt.moved>8&&(Dt.on=!1,qe.yaw-=e*.006,qe.vy=-e*.25,qe.pitch=Math.max(.12,Math.min(1.25,qe.pitch+t*.004)))});addEventListener("pointerup",s=>{if(!Mt.on||s.pointerId!==Mt.id)return;Mt.on=!1;let e=Dt.on?Mp():1;Dt.on=!1,Mt.moved<=8&&wy(s.clientX,s.clientY,e)});addEventListener("wheel",s=>{s.preventDefault(),!D.menu&&(qe.dist=Math.max(8,Math.min(60,qe.dist*(1+Math.sign(s.deltaY)*.1))))},{passive:!1});addEventListener("keydown",s=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.key)&&s.preventDefault()});addEventListener("resize",()=>{Cn.setSize(innerWidth,innerHeight),dn.aspect=innerWidth/innerHeight,dn.updateProjectionMatrix()});var Ca=new ia,gy=s=>{An(.45,9500,2500,.28);let e=Math.min(6,2+s);for(let t=0;t<e;t++)setTimeout(()=>{let n=2400+Math.random()*2600;Ht(n,n*(1.05+Math.random()*.2),.09+Math.random()*.08,.045,Math.random()<.5?"triangle":"sine")},t*(25+Math.random()*35))},Wi=[],vy=(()=>{let s=new rt,e=.03,t=[0,.22,0,-.16,-.12,0,.17,-.1,0],n=[];for(let i of[e,-e])for(let r=0;r<9;r+=3)n.push(t[r],t[r+1],i);return s.setAttribute("position",new Ee(n,3)),s.setIndex([0,1,2,5,4,3,0,3,4,0,4,1,1,4,5,1,5,2,2,5,3,2,3,0]),s.computeVertexNormals(),s})(),yy=new Bt({color:14087167,roughness:.05,metalness:.3,transparent:!0,opacity:.75,emissive:3364198,emissiveIntensity:.4,side:sa}),xy=(()=>{let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(200,240,255,.8)"),t.addColorStop(1,"rgba(200,240,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="#fff",e.fillRect(30,4,4,56),e.fillRect(4,30,56,4),new hi(s)})();function _y(s,e,t){let n=Wi.length>220?3:8;for(let i=0;i<n;i++){let r=new st(vy,yy.clone());r.position.copy(s).add(new S((Math.random()-.5)*(t.width||1),(Math.random()-.5)*(t.height||.5),(Math.random()-.5)*(t.depth||.5)));let o=.6+Math.random()*1.1;r.scale.setScalar(o),r.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),We.add(r);let a=new S((Math.random()-.5)*6,2+Math.random()*5,(Math.random()-.5)*6).add(new S(e.x,e.y,e.z).multiplyScalar(.35));Wi.push({m:r,v:a,w:new S((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18),t:2.2+Math.random()*1.4,bounce:0})}for(let i=0;i<3;i++){let r=new ci(new Vn({map:xy,transparent:!0,depthWrite:!1,blending:Sr}));r.position.copy(s).add(new S((Math.random()-.5)*.8,(Math.random()-.5)*.6,(Math.random()-.5)*.8)),r.scale.setScalar(.5+Math.random()*.5),We.add(r),Nr.push({m:r,v:new S(0,.6,0),t:.45,sparkle:!0})}}function My(s){for(let e=Wi.length-1;e>=0;e--){let t=Wi[e];t.t-=s,t.v.y-=12*s,t.m.position.addScaledVector(t.v,s),t.m.rotation.x+=t.w.x*s,t.m.rotation.y+=t.w.y*s,t.m.rotation.z+=t.w.z*s,t.m.position.y<.04&&(t.m.position.y=.04,t.bounce<2&&t.v.y<-1?(t.v.y*=-.32,t.v.x*=.5,t.v.z*=.5,t.w.multiplyScalar(.4),t.bounce++):(t.v.set(0,0,0),t.w.set(0,0,0),t.m.rotation.x=Math.PI/2)),t.t<.8&&(t.m.material.opacity=Math.max(0,t.t/.8)*.75),t.t<=0&&(We.remove(t.m),t.m.material.dispose(),Wi.splice(e,1))}}function Ep(s,e){Ca.setFromCamera(new oe(s/innerWidth*2-1,-(e/innerHeight)*2+1),dn);let t=Ca.intersectObjects([...gt.filter(n=>!n.gone).map(n=>n.m),Ia],!1);return t[0]?t[0].point:null}function by(s){let e=zs(s).job;e&&(ce("jobAv").textContent=e.av,ce("jobWho").textContent=e.who+" \xB7 Level "+(s+1),ce("jobSay").textContent=e.say,ce("jobRule").textContent=e.rule,ce("jobLine").textContent=e.rule,ce("job").style.display="flex",D.card=!0)}ce("jobGo").onclick=()=>{ce("job").style.display="none",D.lvl===0&&!D.stars[0]&&(ce("tut").style.display="block"),setTimeout(()=>D.card=!1,50),Hs(),Zi(!0),D.hinted||(D.hinted=!0,ce("hint").style.opacity=1,setTimeout(()=>ce("hint").style.opacity=0,6e3))};function wy(s,e,t=1){if(D.card||D.paused||D.menu)return;let n=Ep(s,e);n&&Oh(D.tool,n,Ca.ray.direction.clone(),t)}function Oh(s,e,t,n=.85){if((D.cd[s]||0)>0||D.done||D.outT===-2){qi(180);return}if(s!=="ball"&&!D.free&&!(D.stock[s]>0)){let o=Tn.find(a=>a.k===s);qi(180),Zn("NO "+o.n.toUpperCase()+" LEFT",D.money>=o.price?"tap its button to buy one ($"+o.price+")":"need $"+o.price+" to buy one");return}let i=hy[s];if(!D.free&&D.left<i){qi(180),Zn(D.left?"NOT ENOUGH SHOTS":"OUT OF SHOTS",D.left?`${Tn.find(o=>o.k===s).n} costs ${i}`:"");return}let r=Tn.find(o=>o.k===s);if(D.cd[s]=r.cd,D.shots+=i,s!=="ball"&&!D.free&&(D.stock[s]--,Xi(),_i()),ce("tut").style.display="none",D.free||(D.left-=i,D.left<=0&&(D.outT=2,D.outWait=0)),Or(),s==="ball"){let o=.32+D.size*.07,a=wp(t),l=bp(a,e,Sp(n)),c=Ta(new $t(o,20,14),3159103,new Ds(o),3+D.size*1.3,a);c.b.velocity.set(l.x,l.y,l.z),c.life=8,c.ball=!0,Dy(),c.b.addEventListener("collide",h=>{let d=Gh.get(h.body);d?mp(d.mat):Math.abs(h.contact.getImpactVelocityAlongNormal())>3&&mp("stone"),!c.hitFx&&Math.abs(h.contact.getImpactVelocityAlongNormal())>4&&(c.hitFx=!0,Ry(c.m.position.clone()),Fs(.12))}),n>.95&&(Fr("MAX!",e),Fs(.08))}if(s==="tnt"){let o=Ta(gp(.5,.6,.5),14168362,new Hi(new M(.25,.3,.25)),1,e.clone().add(new S(0,.6,0)));o.fuse=1,o.r=2.5,o.pow=16,o.kind="tnt",fp()}if(s==="mega"){let o=Ta(new $t(.55,20,14),1908518,new Ds(.55),3,e.clone().add(new S(0,.8,0)));o.fuse=1.4,o.r=3.8,o.pow=22,o.kind="mega",fp()}if(s==="meteor"){let o=e.clone().add(new S(6,26,4)),a=Ta(new gr(1.1,0),16738858,new Ds(1.1),40,o,!0),l=e.clone().sub(o).normalize().multiplyScalar(30);a.b.velocity.set(l.x,l.y,l.z),a.meteor=!0,a.kind="meteor",a.r=4.2,a.pow=26,a.life=6,Fy()}}function Ta(s,e,t,n,i,r){let o=new st(s,new Bt({color:e,roughness:.4,emissive:r?e:0,emissiveIntensity:r?1.4:0}));o.castShadow=!0,We.add(o);let a=new Le({mass:n,shape:t,position:new M(i.x,i.y,i.z)});Tt.addBody(a);let l={m:o,b:a};return kt.push(l),l}function hp(s,e,t,n="tnt"){let i=t*(1+D.power*.18),r=e*(1+D.power*.05);for(let a of gt)a.mat==="glass"&&!a.gone&&a.m.position.distanceTo(s)<r*1.1&&Lr.add(a);for(let a of bt){let l=a.m.position.distanceTo(s);l<r*1.7?Os(a,"scared",1.8):l<r*3&&Os(a,"worry",1.5)}for(let a of[...gt,...kt,...bt]){let l=a.m.position.distanceTo(s);if(l>r||l<.01)continue;let c=a.m.position.clone().sub(s).normalize();c.y+=.45,c.normalize();let h=i*(1-l/r)*Math.min(4,a.b.mass);a.b.wakeUp(),a.b.applyImpulse(new M(c.x*h,c.y*h,c.z*h),a.b.position),a.b.angularVelocity.set((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8)}let o=n==="mega"?24:18;for(let a=0;a<o;a++)Dr(s,n==="mega"?15267071:a<8?16773536:6974058,r);ji.position.copy(s).y+=1,ji.intensity=n==="mega"?260:130,Ur=.28,n==="mega"?(Ay(s,r),Fs(1.4),Uy()):n==="meteor"?(Cy(s,r),Fs(1.1),By()):(Ty(s,r),Fs(.6),Ny())}var Yn=[],Tp=(()=>{let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new hi(s)})();function yi(s,e,t,n,i,r=!1,o=2.2,a=.9){let l=new ci(new Vn({map:Tp,color:e,transparent:!0,opacity:a,depthWrite:!1,blending:r?Sr:yd}));l.position.copy(s),l.scale.setScalar(t),We.add(l),Yn.push({m:l,t:n,life:n,v:i||new S,s0:t,grow:o,op:a})}function Rh(s,e,t,n,i,r=.08){let o=new st(new Mr(.85,1,64),new kn({color:e,transparent:!0,opacity:.9,side:sa,depthWrite:!1,blending:Sr}));o.rotation.x=-Math.PI/2,o.position.set(s.x,r,s.z),o.scale.setScalar(t),We.add(o),Yn.push({m:o,t:i,life:i,ring:[t,n]})}function zh(s,e,t){let n=new st(new Cs(e,32),new kn({color:2759184,transparent:!0,opacity:.55,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.set(s.x,.03,s.z),We.add(n),Yn.push({m:n,t,life:t,decal:!0})}function kh(s){let e=ce("flashScr");e.style.transition="none",e.style.opacity=s,requestAnimationFrame(()=>{e.style.transition="opacity .45s",e.style.opacity=0})}function Sy(s){for(let e=Yn.length-1;e>=0;e--){let t=Yn[e];t.t-=s;let n=1-t.t/t.life;t.ring?(t.m.scale.setScalar(t.ring[0]+(t.ring[1]-t.ring[0])*Math.sqrt(n)),t.m.material.opacity=.9*(1-n)):t.decal?t.m.material.opacity=.55*Math.min(1,t.t/1.5):t.flame?(t.m.scale.set(t.s0*(.8+Math.random()*.5),t.s0*(1.2+Math.random()*.7),1),t.m.material.opacity=Math.min(1,t.t*1.5)*(.6+Math.random()*.4)):(t.m.position.addScaledVector(t.v,s),t.v.multiplyScalar(Math.pow(.4,s)),t.m.scale.setScalar(t.s0*(1+t.grow*n)),t.m.material.opacity=t.op*(1-n)),t.t<=0&&(We.remove(t.m),t.m.material.dispose(),Yn.splice(e,1))}}function Ey(s,e,t,n){for(let i=0;i<e;i++){let r=Math.random()*Math.PI*2,o=Math.random()*n,a=new ci(new Vn({map:Tp,color:new Ae(2.2,.8+Math.random()*.5,.2),transparent:!0,depthWrite:!1,blending:Sr})),l=.6+Math.random()*.7;a.position.set(s.x+Math.cos(r)*o,.35+l*.4,s.z+Math.sin(r)*o),We.add(a),Yn.push({m:a,t:t*(.6+Math.random()*.6),life:t,s0:l,flame:!0})}}function Ty(s,e){kh(.18);for(let t=0;t<12;t++)yi(s.clone().add(new S((Math.random()-.5)*.8,Math.random()*.8,(Math.random()-.5)*.8)),t%2?16738842:16760880,1.8,.55,new S((Math.random()-.5)*4,Math.random()*3,(Math.random()-.5)*4),!1,2.4,1);for(let t=0;t<5;t++)yi(s.clone().add(new S(0,.5,0)),new Ae(2.6,1.6,.5),1.4,.3,new S,!0,2.2,1);for(let t=0;t<10;t++)yi(s.clone().add(new S(Math.random()-.5,.5+Math.random(),Math.random()-.5)),3815998,1.3,2.2+Math.random(),new S((Math.random()-.5)*1.5,1.6+Math.random()*1.4,(Math.random()-.5)*1.5),!1,2.4,.75);zh(s,e*.45,4),ji.color.set(16742954)}function Ay(s,e){kh(.75),Rh(s,12577023,.5,e*2.6,.7),Rh(s,16777215,.3,e*1.7,.45,.12);for(let t=0;t<18;t++)yi(s.clone().add(new S((Math.random()-.5)*1.2,Math.random()*1.2,(Math.random()-.5)*1.2)),new Ae(2,2,2.4),1.4,.5,new S((Math.random()-.5)*7,Math.random()*5,(Math.random()-.5)*7),!0,3,1);for(let t=0;t<14;t++){let n=Math.random();yi(s.clone().add(new S((Math.random()-.5)*1.5,.6+n*3,(Math.random()-.5)*1.5)),5592413,1.8,3+Math.random(),new S((Math.random()-.5)*1.2,2.6+n*2,(Math.random()-.5)*1.2),!1,2.8,.7)}zh(s,e*.55,5),ji.color.set(13625599),Ur=.55}function Cy(s,e){kh(.35),Rh(s,16756832,.5,e*2,.6),Ey(s,18,2.8,e*.55),zh(s,e*.7,6);for(let t=0;t<16;t++)yi(s.clone().add(new S((Math.random()-.5)*2,.3,(Math.random()-.5)*2)),13214330,1.2,1.6,new S((Math.random()-.5)*6,.6+Math.random(),(Math.random()-.5)*6),!1,2.2,.8);for(let t=0;t<14;t++)Dr(s.clone().add(new S(0,.5,0)),5913130,e*1.2);ji.color.set(16747068)}function Ry(s){for(let e=0;e<6;e++)Dr(s,9071178,2.2);for(let e=0;e<11;e++)yi(s.clone().add(new S((Math.random()-.5)*.6,Math.random()*.5,(Math.random()-.5)*.6)),11045474,.95,1,new S((Math.random()-.5)*2.5,Math.random()*1.5,(Math.random()-.5)*2.5),!1,2.4,.85)}var Nr=[],Iy=new $t(.16,6,4);function Dr(s,e,t){let n=new st(Iy,new kn({color:e,transparent:!0}));n.position.copy(s),We.add(n);let i=new S(Math.random()-.5,Math.random()*.9+.2,Math.random()-.5).normalize().multiplyScalar(t*(.8+Math.random()*1.6));Nr.push({m:n,v:i,t:.7+Math.random()*.5})}var mi=0,Ur=0,Fs=s=>{mi=Math.max(mi,s)};function xi(){let s=gt.filter(n=>!n.keep&&(n.start.y>.3||n.mat==="glass")),e=s.length||1,t=s.filter(n=>n.down).length;D.pct=t/e,ce("bar").style.width=Math.min(100,D.pct/Dh(D.lvl)*100)+"%",ce("barT").textContent=Math.round(D.pct*100)+"% demolished",ce("money").textContent="$"+D.money.toLocaleString()}var Ih=0;function up(){let s=0,e=null;for(let t of gt)if(!t.down){let n=t.m.position;if(n.distanceTo(t.start)>.7||n.y<t.start.y-.35){if(t.down=!0,t.keep){D.keepHit++;continue}let i=1+Math.floor(D.lvl/3);s+=i,e=n.clone(),Ih>0&&(Ih--,Fr("+$"+i,n))}}if(s&&(D.money+=s,Hh(),xi(),Xi()),!D.done){let t=new S;for(let i of bt)i.hit||(t.set(0,1,0).applyQuaternion(i.m.quaternion),(i.m.position.distanceTo(i.start)>.6||t.y<.8)&&(i.hit=!0,dp(i.name,i.m.position)));gt.filter(i=>i.keep).length&&D.keepHit>=3&&!D.keepOops1&&(D.keepOops1=!0,dp("the museum",new S(3,4,0)))}if(!D.done&&D.outT!==-2&&D.pct>=Dh(D.lvl)){let t=Bh(D.lvl),n=D.shots<=Math.ceil(t*.5)?3:D.shots<=Math.ceil(t*.75)?2:1,i=D.free?0:n;if(!D.free&&i<=0){Ap();return}D.done=!0,D.outT=-1,ce("retry").style.display="none",i>(D.stars[D.lvl]||0)&&(D.stars[D.lvl]=i);let r=50*(D.lvl+1)*(i||1);D.money+=r;for(let a of bt)a.hit||Os(a,"happy",99);let o=zs(D.lvl).job||{};Zn("DEMOLISHED!",`${i?`<span class="stars">${"\u2605".repeat(i)}${"\u2606".repeat(3-i)}</span>`:""}${o.win?`<span class="quote">${o.av} \u201C${o.win}\u201D</span>`:""}+$${r} \xB7 ${D.shots} shot${D.shots===1?"":"s"}`,3600),zy(),Zi(!1),setTimeout(()=>ce("next").style.display="block",900),xi(),Xi(),_i()}}function dp(s,e){D.hits++,Fr("OOPS!",e),D.free?Zn("OOPS!",`You broke ${s}!`):Ap(s),Ht(300,120,.4,.25,"sawtooth"),Fs(.25);let t=bt.find(n=>n.name===s);t&&(t.tag.material.map=vp("BROKEN \u2717","#6a6f80").material.map,t.tag.material.needsUpdate=!0,Os(t,"dead",99),t.faceSt="dead")}function Ap(s){if(D.outT===-2)return;D.outT=-2,Zi(!1),ce("adShots").style.display="none";let e=zs(D.lvl).job||{};Zn("CLIENT IS FURIOUS",(s&&e.fail?`<span class="quote">${e.av} \u201C${e.fail}\u201D</span>`:"")+(s?`You broke ${s}. Job failed!`:"Job failed \u2014 try again"),3600),qi(120),ce("retry").style.display="block"}function Fr(s,e){let t=e.clone().project(dn);if(t.z>1)return;let n=document.createElement("div");n.className="pop",n.textContent=s,n.style.left=(t.x*.5+.5)*innerWidth+"px",n.style.top=(-t.y*.5+.5)*innerHeight+"px",document.body.appendChild(n),requestAnimationFrame(()=>{n.style.transform="translateY(-50px)",n.style.opacity=0}),setTimeout(()=>n.remove(),850)}var pp;function Zn(s,e="",t=2200){let n=ce("banner");n.innerHTML=s+(e?`<small>${e}</small>`:""),n.classList.add("show"),clearTimeout(pp),pp=setTimeout(()=>n.classList.remove("show"),t)}ce("next").onclick=()=>{ce("next").style.display="none",Fh(()=>ks(D.lvl+1))};ce("retry").onclick=()=>{ce("retry").style.display="none",ce("adShots").style.display="none",Fh(()=>ks(D.lvl))};ce("adShots").onclick=()=>{Vt.sdk&&(ce("adShots").style.display="none",D.paused=!0,Vt.sdk.rewardedBreak(()=>{Be&&Be.suspend()}).then(s=>{D.paused=!1,Be&&Be.resume(),s?(D.adUsed=!0,D.left+=3,D.outT=-1,ce("retry").style.display="none",Or(),Zn("+3 SHOTS","finish the job!"),Zi(!0)):ce("adShots").style.display="block"}))};var Ra=()=>{let s=0;for(;D.stars[s];)s++;return s},Py=s=>s===0||!!D.stars[s-1];function Cp(){D.menu=!0,ce("tut").style.display="none",document.body.classList.add("inmenu"),ce("menu").classList.remove("lvopen"),Zi(!1),ce("menu").style.display="flex",ce("grid").style.display="none",ce("playL").textContent="Level "+(Ra()+1)+(Ra()>=vi.length?" \xB7 Bonus":""),ce("freeB").textContent="\u221E Free play: "+(D.free?"ON":"OFF"),qe.auto=!0}function Rp(){D.menu=!1,document.body.classList.remove("inmenu"),ce("menu").style.display="none",qe.auto=!1}function Ip(s){Rp(),D.started?Fh(()=>ks(s)):(D.started=!0,ks(s))}ce("playB").onclick=()=>{Hs(),Ip(Ra())};ce("levelsB").onclick=()=>{Hs();let s=ce("grid");if(s.style.display==="grid"){s.style.display="none",ce("menu").classList.remove("lvopen"),ce("levelsB").textContent="LEVELS";return}s.style.display="grid",ce("menu").classList.add("lvopen"),ce("levelsB").textContent="\u25C0 BACK",s.innerHTML=[...vi.map((e,t)=>({i:t,av:e.job.av,n:t+1})),{i:vi.length,av:"\u267E\uFE0F",n:"Bonus"}].map(e=>{let t=!Py(e.i),n=D.stars[e.i]||0;return`<div class="lv ${t?"lock":""}" data-i="${e.i}"><div class="av">${t?"\u{1F512}":e.av}</div><div class="n">${e.n}</div><div class="st">${e.i<vi.length?"\u2605".repeat(n)+"\u2606".repeat(3-n):""}</div></div>`}).join("")};ce("grid").addEventListener("click",s=>{let e=s.target.closest(".lv");!e||e.classList.contains("lock")||Ip(+e.dataset.i)});ce("freeB").onclick=()=>{D.free=!D.free,ce("freeB").textContent="\u221E Free play: "+(D.free?"ON":"OFF"),Or(),_i()};ce("muteB").onclick=()=>{Hs(),Vh(!D.mute)};ce("muteM").onclick=()=>{Hs(),Vh(!D.mute)};ce("menuB").onclick=()=>{ce("job").style.display="none",D.card=!1,Cp()};ce("free").onclick=s=>{D.free=!D.free,ce("free").textContent="\u221E Free play: "+(D.free?"ON":"OFF"),D.free&&(D.outT=-1,ce("retry").style.display="none"),Or(),_i()};function Or(){let s=ce("ammo");if(!s)return;if(D.free){s.textContent="\u221E shots \xB7 free play";return}let e=Bh(D.lvl);s.innerHTML="Shots "+"\u25CF".repeat(Math.max(0,D.left))+'<span style="opacity:.25">'+"\u25CF".repeat(Math.max(0,e-D.left))+"</span>"}function Xi(){ce("tools").innerHTML=Tn.map(s=>{let e=s.k==="ball"||D.free?"\u221E":D.stock[s.k]||0,t=e===0;return`<div class="tool ${D.tool===s.k?"on":""} ${t?"lock":""}" data-k="${s.k}"><span class="k">${s.key}</span>${s.ic}<small>${s.n}</small><span class="stock">${e==="\u221E"?"\u221E":"\xD7"+e}</span><div class="cd" id="cd_${s.k}"></div>${s.price?`<span class="price ${D.money>=s.price?"ok":""}">+1 $${s.price}</span>`:""}</div>`}).join(""),ce("ups").innerHTML=_p.map(s=>{let e=D[s.k],t=e>=s.max,n=s.cost(e);return`<div class="up ${t||D.money<n?"no":""}" data-u="${s.k}">${s.n} ${e}${t?"<b>MAX</b>":`<b>$${n}</b>`}</div>`}).join("")}ce("tools").addEventListener("pointerdown",s=>{let e=s.target.closest(".tool");if(e){if(s.stopPropagation(),s.target.closest(".price")&&!D.free){Pp(e.dataset.k)&&(D.tool=e.dataset.k,Xi(),xi());return}Lp(e.dataset.k)}});ce("ups").addEventListener("pointerdown",s=>{let e=s.target.closest(".up");if(!e)return;let t=_p.find(r=>r.k===e.dataset.u),n=D[t.k],i=t.cost(n);if(n>=t.max||D.money<i){qi(180);return}D.money-=i,D[t.k]++,Hh(),xi(),Xi(),_i()});function Pp(s){let e=Tn.find(t=>t.k===s);return D.money<e.price?(qi(180),Zn("NOT ENOUGH MONEY",e.n+" costs $"+e.price),!1):(D.money-=e.price,D.stock[s]=(D.stock[s]||0)+1,Hh(),Fr("+1 "+e.n,new S(qe.target.x,qe.target.y+2,qe.target.z)),_i(),!0)}function Lp(s){let e=Tn.find(t=>t.k===s);s!=="ball"&&!D.free&&!(D.stock[s]>0)&&Zn("NO "+e.n.toUpperCase()+" LEFT","tap the green +1 $"+e.price+" tag to buy one"),D.tool=s,xi(),Xi()}addEventListener("keydown",s=>{let e=Tn.find(t=>t.key===s.key);e&&Lp(e.k)});var Be=null,gi=null,Br=null;function Hs(){if(!Be)try{Be=new(window.AudioContext||window.webkitAudioContext),gi=Be.createGain(),gi.gain.value=D.mute?0:1,gi.connect(Be.destination),Br=Be.createGain(),Br.gain.value=.05,Br.connect(gi),Ly()}catch{}Be&&Be.state==="suspended"&&!D.paused&&Be.resume()}function Ly(){let s=[130.8,110,87.3,98],e=[[523,659,784],[440,523,659],[349,440,523],[392,494,587]],t=Be.currentTime+.1,n=0,i=.27;setInterval(()=>{if(!(!Be||D.paused))for(;t<Be.currentTime+.5;){let r=(n>>3)%4;if(n%2===0){let o=Be.createOscillator(),a=Be.createGain();o.type="triangle",o.frequency.value=s[r],a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.9,t+.02),a.gain.exponentialRampToValueAtTime(1e-4,t+i*1.8),o.connect(a).connect(Br),o.start(t),o.stop(t+i*2)}if(n%8!==7){let o=Be.createOscillator(),a=Be.createGain();o.type="square",o.frequency.value=e[r][n%3]*(n%16>11?2:1),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.25,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+i*.8),o.connect(a).connect(Br),o.start(t),o.stop(t+i)}t+=i,n++}},120)}function Vh(s){D.mute=s,gi&&(gi.gain.value=s?0:1);for(let e of["muteB","muteM"]){let t=ce(e);t&&(t.textContent=s?"\u{1F507}":"\u{1F50A}")}_i()}function An(s,e,t,n){if(!Be)return;let i=Be.sampleRate*s,r=Be.createBuffer(1,i,Be.sampleRate),o=r.getChannelData(0);for(let h=0;h<i;h++)o[h]=(Math.random()*2-1)*Math.pow(1-h/i,2);let a=Be.createBufferSource();a.buffer=r;let l=Be.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(e,Be.currentTime),l.frequency.exponentialRampToValueAtTime(t,Be.currentTime+s);let c=Be.createGain();c.gain.value=n,a.connect(l).connect(c).connect(gi),a.start()}function Ht(s,e,t,n,i="sine"){if(!Be)return;let r=Be.createOscillator(),o=Be.createGain();r.type=i,r.frequency.setValueAtTime(s,Be.currentTime),r.frequency.exponentialRampToValueAtTime(e,Be.currentTime+t),o.gain.setValueAtTime(n,Be.currentTime),o.gain.exponentialRampToValueAtTime(.001,Be.currentTime+t),r.connect(o).connect(gi),r.start(),r.stop(Be.currentTime+t)}var Ny=()=>{An(.12,6e3,1500,.5),setTimeout(()=>{An(.8,1200,80,.9),Ht(110,40,.5,.6)},30)},Uy=()=>{An(1.8,500,30,1),Ht(60,22,1.4,.9,"sine"),setTimeout(()=>An(1.4,300,40,.5),250)},By=()=>{An(1.1,700,50,.95),Ht(75,30,.9,.7);for(let s=0;s<6;s++)setTimeout(()=>An(.08,3e3,800,.15),200+s*120)},Dy=()=>{An(.18,1800,200,.35),Ht(160,60,.15,.3)},fp=()=>Ht(900,900,.05,.12,"square"),Fy=()=>An(1.2,300,3e3,.35),qi=s=>Ht(s,s*.8,.08,.12,"square"),Ph=0,Hh=()=>{Ph>0||(Ph=.06,Ht(1300,1700,.07,.07,"triangle"))},Oy=()=>Ht(1200,1700,.12,.08,"triangle"),Lh=0,mp=s=>{Lh>0||(Lh=.05,s==="stone"||s==="sand"?An(.12,700,120,.3):s==="wood"?Ht(420,220,.07,.18,"triangle"):s==="glass"?Ht(2600,2200,.05,.05,"sine"):Ht(900,600,.04,.1,"square"))},zy=()=>{[523,659,784,1046].forEach((s,e)=>setTimeout(()=>Ht(s,s,.18,.15,"triangle"),e*110))},ky=new na,Nh=60,Eh=0,Th=0,Gh=new Map;function Np(){let s=Math.min(.05,ky.getDelta());s>0&&(Nh=Nh*.95+.05/s);let e=s*(Ur>0?.35:1);if(Ur=Math.max(0,Ur-s),Ph-=s,Lh-=s,D.paused||Tt.step(1/60,e,4),Lr.size){let t=0;for(let n of Lr)if(!n.gone){if(n.gone=!0,Tt.removeBody(n.b),We.remove(n.m),!n.down)if(n.down=!0,n.keep)D.keepHit++;else{let i=1+Math.floor(D.lvl/3);D.money+=i,t<4&&Fr("+$"+i,n.m.position)}t++<30&&_y(n.m.position,n.b.velocity,n.m.geometry.parameters||{width:1,height:.5,depth:.5})}Lr.clear(),t&&(gy(t),xi())}for(let t of[...gt,...kt,...bt])t.m.position.copy(t.b.position),t.m.quaternion.copy(t.b.quaternion);for(let t of bt){let n=Math.sin(performance.now()/300)*.06,i=t.faceSt==="scared"?(Math.random()-.5)*.08:0;t.face.position.set(t.m.position.x+i,t.m.position.y+t.h+.75+n,t.m.position.z),t.tag.position.set(t.m.position.x,t.m.position.y+t.h+1.45+n,t.m.position.z),t.faceT>0&&(t.faceT-=s,t.faceT<=0&&t.faceSt!=="dead"&&t.faceSt!=="happy"&&Os(t,"calm",0));for(let r of kt)r.ball&&t.faceSt==="calm"&&r.m.position.distanceTo(t.m.position)<3.2&&Os(t,"worry",.9)}for(let t=kt.length-1;t>=0;t--){let n=kt[t];if(n.fuse!=null&&Math.random()<.7&&Dr(n.m.position.clone().add(new S(0,n.kind==="mega"?.6:.4,0)),16764992,.8),n.ball&&!n.hitFx&&Math.random()<.5&&yi(n.m.position.clone(),12566470,.35,.6,new S(0,.3,0),!1,1.6,.5),n.fuse!=null&&(n.fuse-=e,n.m.scale.setScalar(1+Math.max(0,.25-n.fuse)*1.2+(Math.sin(n.fuse*30)>0?.05:0)),n.fuse<=0)){let i=n.m.position.clone();We.remove(n.m),Tt.removeBody(n.b),kt.splice(t,1),hp(i,n.r,n.pow,n.kind);continue}if(n.meteor&&(n.b.position.y<1.4||n.hitT)){let i=n.m.position.clone();We.remove(n.m),Tt.removeBody(n.b),kt.splice(t,1),hp(i,n.r,n.pow,n.kind);continue}if(n.meteor){n.m.rotation.x+=e*4,Math.random()<.8&&Dr(n.m.position,16747068,1.2);for(let i of gt)if(i.m.position.distanceTo(n.m.position)<1.6){n.hitT=1;break}}n.life!=null&&(n.life-=e,n.life<=0&&(We.remove(n.m),Tt.removeBody(n.b),kt.splice(t,1)))}My(s),Sy(s);for(let t=Nr.length-1;t>=0;t--){let n=Nr[t];n.t-=s,n.sparkle||(n.v.y-=14*s),n.m.position.addScaledVector(n.v,s),n.m.material.opacity=Math.min(1,n.t*2),(n.t<=0||n.m.position.y<0)&&(We.remove(n.m),Nr.splice(t,1))}if(ji.intensity*=Math.pow(.002,s),mi=Math.max(0,mi-s*2.2),Th-=s,Th<=0){Th=.08;let t=[...gt,...kt,...bt].filter(n=>n.b.sleepState!==2&&n.b.velocity.lengthSquared()>.3).map(n=>n.b.position);if(t.length){for(let n of[...gt,...bt])if(!n.gone&&n.b.sleepState===2){let i=n.b.position;for(let r of t){let o=r.x-i.x,a=r.y-i.y,l=r.z-i.z;if(o*o+a*a+l*l<1.9){n.b.wakeUp();break}}}}}D.outT>0&&(D.outWait+=s,(kt.some(n=>n.fuse!=null||n.meteor)||gt.some(n=>!n.gone&&n.b.sleepState!==2&&n.b.velocity.lengthSquared()>.15))&&D.outWait<9&&(D.outT=Math.max(D.outT,1)),ce("ammo").textContent="No shots left \xB7 waiting for the dust\u2026",D.outT-=s,D.outT<=0&&!D.done&&up(),D.outT<=0&&!D.done&&(D.outT=-2,ce("ammo").textContent="Out of shots",Zn("OUT OF SHOTS",`${Math.round(D.pct*100)}% \u2014 need ${Math.round(Dh(D.lvl)*100)}%`),qi(140),ce("retry").style.display="block",Zi(!1),Vt.sdk&&!D.adUsed&&D.hits<3&&(ce("adShots").style.display="block"))),Eh-=s,Eh<=0&&(Eh=.2,Ih=6,up());for(let t of Tn){D.cd[t.k]=Math.max(0,(D.cd[t.k]||0)-s);let n=ce("cd_"+t.k);n&&(n.style.transform=`scaleY(${t.cd?D.cd[t.k]/t.cd:0})`)}Dt.on&&(Dt.t+=s),my(),py(s),Cn.render(We,dn),requestAnimationFrame(Np)}Vh(!!D.mute);ks(Math.min(Ra(),vi.length-1));ce("job").style.display="none";D.card=!1;Xi();xi();Np();Cp();uy.then(()=>{try{Vt.sdk&&Vt.sdk.gameLoadingFinished()}catch{}});window.__gameState=()=>({phase:D.done?"won":"playing",level:D.lvl+1,pct:+D.pct.toFixed(2),money:D.money,fps:Math.round(Nh),blocks:gt.length,awake:Tt.bodies.filter(s=>s.sleepState===0&&s.mass>0).length});window.__autoplay=()=>{if(D.menu){ce("playB").click();return}if(D.card){ce("jobGo").click();return}if(D.done){ce("next").click();return}if(D.outT===-2){ce("retry").click();return}for(let n of Tn)n.price&&!(D.stock[n.k]>0)&&D.money>=n.price*2&&Pp(n.k);let s=Tn.filter(n=>(n.k==="ball"||D.free||D.stock[n.k]>0)&&!(D.cd[n.k]>0)).pop();if(!s)return;let e=gt.filter(n=>!n.down&&!n.keep&&!n.gone);if(!e.length)return;let t=e[Math.floor(Math.random()*e.length)];D.tool=s.k,Oh(s.k,t.m.position.clone(),t.m.position.clone().sub(dn.position).normalize())};window.__S=D;window.__cam=(s,e,t,n)=>{qe.yaw=s,qe.pitch=e,t&&(qe.dist=t),n!=null&&(qe.target.y=n),qe.vy=0,qe.auto=!1};window.__hud=s=>{document.body.classList.toggle("inmenu",!s)};window.__things=()=>kt.map(s=>({fuse:s.fuse,life:s.life,x:+s.b.position.x.toFixed(2),y:+s.b.position.y.toFixed(2),z:+s.b.position.z.toFixed(2),v:+s.b.velocity.length().toFixed(1),sleep:s.b.sleepState}));window.__load=s=>{Rp(),ks(s),ce("job").style.display="none",D.card=!1,ce("tut").style.display="none"};window.__fire=(s,e,t,n,i=1)=>{D.unlocked[s]=!0,s!=="ball"&&(D.stock[s]=(D.stock[s]||0)+1),D.cd[s]=0;let r=new S(e,t,n);Oh(s,r,r.clone().sub(dn.position).normalize(),i)};window.__targets=()=>({blocks:gt.filter(s=>!s.down&&!s.keep&&!s.gone&&(s.start.y>.3||s.mat==="glass")).map(s=>[s.m.position.x,s.m.position.y,s.m.position.z]),prots:bt.map(s=>[s.m.position.x,s.m.position.y,s.m.position.z]),keep:gt.filter(s=>s.keep).map(s=>[s.start.x,s.start.y,s.start.z]),outT:D.outT,done:D.done,pct:D.pct,left:D.left,shots:D.shots,hits:D.hits});
