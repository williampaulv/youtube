var _yt_player={};(function(g){var window=this;var ba,da,la,ka,ma,ra,sa,ta,ya,Ga,Ha,Ja,La,Qa,Ta,$a,fb,cb,ib,db,jb,nb,pb,sb,Cb,Db,Jb,Mb,Nb,Ob,Qb,Ub,$b,bc,cc,fc,gc,mc,lc,oc,pc,qc,rc,tc,uc,Ac,Bc,Fc,Gc,Hc,Jc,Oc,Mc,Vc,Uc,bd,ed,ud,yd,Id,Sd,Td,Cd,id,de,je,ke,ie,ee,ne,pe,me,qe,re,se,te,ue,ve,we,Ae,ze,Ce,De,Ee,Fe,He,Ge,Ie,Je,Oe,Se,Te,Ue,Ve,Xe,af,df,Ye,gf,pf,of,jf,$e,sf,tf,uf,vf,wf,yf,zf,Cf,Bf,Df,Ef,Gf,Kf,Mf,Nf,Qf,Tf,Uf,Vf,Xf,Yf,ag,dg,$f,bg,Of,Wf,jg,gg,eg,fg,kg,ig,hg,og,pg,qg,rg,sg,ug,wg,vg,yg,Bg,Cg,Mg,Ng,Og,Pg,Qg,Rg,Tg,Vg,Wg,Yg,ah,bh,ch,dh,fh,gh,nh,oh,
ph,qh,rh,th,uh,vh,Ah,Bh,Fh,Gh,Mh,Dh,Sh,Wh,Zh,ai,bi,ci,di,ei,fi,hi,ii,ji,li,ni,pi,qi,ri,si,wi,xi,yi,zi,Ai,Bi,Ci,Di,Ei,Gi,Li,Mi,Si,Ti,Ui,Wi,Yi,Zi,$i,aj,bj,Vi,Xi,cj,dj,ej,fj,gj,hj,nj,ij,oj,pj,rj,qj,sj,tj,uj,wj,xj,yj,Bj,Dj,Gj,Ij,Kj,Hj,Mj,Lj,Nj,Pj,Qj,Rj,Sj,Tj,Uj,Vj,Wj,Xj,Yj,Zj,ak,bk,ck,dk,ek,fk,gk,hk,ik,jk,kk,nk,ok,pk,uk,lk,vk,mk,wk,xk,yk,zk,Bk,Ak,Ck,Dk,Fk,Hk,Ik,Jk,Kk,Lk,Mk,Nk,Ok,Qk,Rk,Tk,Uk,Xk,Yk,Wk,Zk,$k,al,bl,cl,Vk,fl,gl,kl,jl,ll,hl,ml,nl,pl,rl,vl,wl,xl,yl,Bl,Al,zl,Cl,Dl,El,Fl,Hl,Gl,Il,Jl,Kl,Ll,Ml,
Nl,Pl,Ql,Rl,Sl,Tl,Ul,Vl,Wl,Yl,Xl,am,bm,cm,dm,em,gm,hm,im,jm,mm,om,pm,lm,qm,sm,um,vm,wm,ym,xm,nm,zm,rm,Cm,Bm,Dm,Em,Am,tm,Fm,Gm,Hm,Jm,Km,Mm,Im,Pm,Nm,Rm,Sm,Tm,Um,Vm,Wm,Ym,Xm,Zm,cn,$m,bn,dn,en,gn,hn,kn,jn,ln,mn,nn,on,pn,qn,rn,sn,tn,un,vn,xn,zn,yn,An,En,Fn,Hn,Cn,Jn,Kn,Ln,wn,Nn,Mn,Qn,Pn,Rn,Un,Vn,Wn,Xn,Yn,$n,fo,ao,jo,ko,lo,mo,no,Ol,oo,po,qo,so,ro,uo,vo,wo,xo,yo,zo,Ao,Do,Fo,Eo,Go,Ho,Io,Jo,Lo,Ko,Po,Oo,Uo,Vo,Yo,bp,cp,ep,dp,Xo,hp,lp,mp,op,pp,qp,np,sp,tp,up,yp,Ap,vp,wp,xp,Cp,Dp,Bp,Gp,Fp,Hp,Lp,Mp,Pp,Qp,Sp,Up,
Vp,Yp,Wp,Xp,Zp,aq,bq,cq,eq,fq,gq,jq,kq,mq,tq,xq,yq,Fq,Gq,Hq,Iq,Jq,Lq,Mq,Nq,Oq,Pq,Qq,Tq,Vq,Wq,Xq,Yq,ar,br,cr,dr,er,fr,hr,ir,jr,kr,lr,or,qr,tr,ur,Ar,Br,Cr,Er,Gr,Hr,Ir,Dr,Fr,Lr,Kr,Mr,Nr,Pr,Qr,Ur,Vr,Wr,Yr,es,gs,js,ks,ls,ns,rs,os,ps,us,ys,ws,xs,ts,Ds,Fs,Gs,Hs,Is,Js,Ks,Cs,Ls,Bs,Os,Ms,Ts,Us,Ss,Vs,Ws,Xs,Zs,Ys,$s,et,ct,dt,gt,ft,ht,it,jt,kt,qt,rt,vt,wt,xt,tt,At,Bt,Dt,It,Jt,Kt,Pt,Qt,St,Wt,Ut,Yt,Xt,bu,cu,ru,tu,qu,Bu,Du,Gu,Ju,Iu,Hu,Ou,Ru,Su,ev,fv,iv,jv,kv,gv,ov,nv,pv,qv,tv,uv,wv,xv,zv,Av,Bv,Cv,Dv,Ev,Gv,Jv,Kv,
Lv,Mv,Nv,Ov,Pv,Rv,Qv,Sv,Uv,Wv,Yv,$v,bw,fw,jw,kw,lw,nw,ow,rw,tw,Cw,Aw,Ew,Bw,Fw,Dw,Hw,Iw,Jw,Ow,Pw,Rw,Qw,Sw,Uw,Vw,$w,ex,fx,gx,hx,ix,jx,kx,lx,mx,nx,ox,qx,rx,ux,vx,px,zx,Ax,xx,tx,Bx,Cx,wx,yx,Dx,Ex,Fx,Gx,Ix,Jx,Lx,Kx,Mx,Nx,Ox,Px,Qx,Sx,Rx,Tx,Ux,Vx,Wx,ay,cy,hy,Yx,dy,fy,ey,by,jy,ly,ky,Xx,Zx,$x,iy,gy,my,ny,oy,py,qy,ry,sy,ty,uy,vy,wy,yy,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,Jy,Ly,Ny,Oy,Py,Sy,Ty,Vy,Ry,Yy,Wy,Xy,Zy,$y,az,bz,cz,dz,fz,ez,hz,jz,kz,lz,nz,oz,pz,qz,rz,sz,uz,tz,vz,wz,xz,yz,zz,Az,Bz,Cz,Dz,Ez,Iz,Jz,Fz,Gz,Hz,Lz,
Nz,Pz,Oz,Sz,Tz,Uz,Wz,Zz,Yz,Xz,$z,bA,aA,hA,eA,fA,iA,jA,kA,lA,mA,nA,oA,pA,aaa,baa,qA,dA,cA,caa,tA,vA,wA,yA,zA,uA,BA,CA,daa,EA,faa,haa,gaa,iaa,FA,HA,GA,IA,jaa,kaa,KA,LA,MA,NA,OA,PA,QA,JA,RA,SA,laa,UA,VA,TA,ZA,raa,gB,zaa,fB,eB,qaa,$A,nB,oB,pB,qB,rB,sB,tB,uB,vB,xB,yB,zB,QB,RB,SB,TB,UB,WB,IB,PB,$B,Faa,HB,GB,bC,NB,dC,eC,Haa,fC,Iaa,Jaa,gC,Kaa,hC,iC,jC,mC,oC,qC,pC,rC,nC,sC,tC,uC,Laa,Maa,wC,Oaa,xC,IC,AC,Paa,KC,Qaa,LC,MC,PC,$C,cD,WC,dD,TC,eD,ZC,VC,YC,hD,Saa,Taa,gD,aD,UC,bD,iD,NC,QC,OC,Waa,Xaa,lD,pD,dba,qD,eba,
rD,tD,uD,fba,xD,zD,AD,DD,ED,wD,gba,Zaa,$aa,aba,Yaa,HD,ID,iba,KD,LD,MD,ND,OD,oD,bba,PD,kba,RD,SD,TD,UD,VD,WD,XD,YD,ZD,$D,aE,dE,lba,eE,mba,bE,gE,hE,iE,kE,nba,lE,pba,oE,qE,rE,sE,tE,pE,wE,yE,oba,CE,EE,GE,IE,JE,KE,qba,rba,ME,OE,FE,QE,TE,SE,UE,VE,tba,WE,RE,XE,ZE,YE,$E,aF,bF,cF,dF,gF,hF,fF,eF,iF,jF,kF,lF,nF,vba,sF,tF,uF,vF,wba,xba,qF,wF,xF,yF,zF,yba,BF,UF,WF,VF,Aba,XF,YF,TF,AF,zba,$F,aG,bG,cG,dG,eG,fG,gG,hG,ZF,Bba,Cba,Dba,Eba,iG,jG,lG,kG,mG,nG,oG,pG,qG,rG,wG,uG,vG,xG,zG,sG,yG,tG,AG,BG,Gba,CG,DG,EG,GG,HG,
FG,JG,KG,IG,MG,Hba,LG,NG,OG,Iba,PG,Jba,QG,RG,SG,TG,Lba,Mba,Nba,Oba,UG,VG,Kba,WG,YG,XG,$G,ZG,aH,bH,cH,eH,dH,hH,fca,kH,lH,mH,gH,nH,oH,fH,pH,qH,rH,sH,jH,iH,tH,uH,vH,gca,hca,yH,xH,ica,wH,zH,jca,EH,kca,GH,HH,DH,FH,AH,lca,BH,CH,mca,IH,nca,oca,pca,JH,KH,qca,rca,sca,LH,MH,tca,NH,uca,OH,PH,QH,RH,SH,vca,wca,xca,TH,UH,VH,WH,ZH,$H,aI,cI,dI,gI,eI,hI,iI,Aca,zca,Bca,nI,oI,kI,lI,mI,pI,bI,yca,Cca,qI,rI,sI,jI,tI,YH,uI,vI,Dca,Eca,Fca,wI,Gca,xI,yI,zI,AI,BI,Hca,CI,Ica,Jca,DI,FI,EI,Lca,HI,II,GI,JI,KI,Mca,LI,MI,Nca,Oca,
NI,PI,Qca,Pca,SI,RI,Rca,Sca,QI,TI,Tca,UI,WI,VI,Uca,$I,ZI,aJ,dJ,Wca,Xca,Yca,eJ,cJ,bJ,YI,Vca,fJ,cE,fE,jE,zE,gJ,iJ,jJ,kJ,hJ,mJ,nJ,xJ,Zca,pJ,zJ,AJ,CJ,BJ,lJ,uJ,IJ,GJ,HJ,ada,DJ,OJ,NJ,MJ,TJ,UJ,VJ,JJ,WJ,cda,dda,KJ,qJ,PJ,cK,eda,QJ,dK,fda,FJ,eK,EJ,ZJ,aK,$J,bK,gK,gda,iK,vJ,bda,jK,fK,wJ,kK,lK,SJ,mK,oJ,hK,XJ,nK,RJ,pK,qK,rK,uK,AK,KK,WK,ZK,jda,$K,kda,lda,mda,nda,aL,bL,cL,eL,fL,gL,hL,jL,iL,kL,lL,pda,qda,qL,mL,pL,nL,oL,rda,rL,sL,sda,tda,uda,tL,uL,vL,wL,xL,yL,zL,AL,BL,CL,DL,FL,EL,JL,vda,ML,LL,NL,wda,OL,xda,PL,QL,RL,
SL,TL,UL,yda,VL,WL,XL,YL,zda,ZL,$L,aM,cM,Ada,bM,dM,eM,fM,gM,hM,iM,jM,kM,KL,mM,nM,oM,lM,pM,qM,Bda,rM,Cda,tM,vM,Eda,wM,xM,zM,AM,Fda,BM,DM,Gda,GM,HM,IM,CM,EM,FM,JM,LM,Hda,MM,KM,NM,OM,Ida,PM,QM,RM,SM,TM,UM,VM,WM,XM,YM,ZM,$M,aN,bN,cN,dN,eN,fN,gN,hN,iN,jN,kN,lN,mN,nN,oN,pN,qN,rN,sN,tN,Jda,wN,xN,uN,vN,yN,zN,AN,Kda,Lda,BN,CN,Mda,DN,EN,Nda,FN,Oda,Pda,HN,Qda,IN,Rda,Sda,JN,Uda,Tda,KN,LN,Vda,NN,PN,QN,RN,Wda,Xda,Yda,SN,Zda,TN,WN,XN,UN,GN,YN,aO,bO,cO,dO,Y,eO,fO,iO,jO,kO,lO,mO,pO,sO,tO,uO,wO,xO,yO,zO,BO,CO,DO,EO,
FO,HO,IO,JO,KO,LO,MO,NO,OO,PO,$da,aea,cea,dea,SO,TO,QO,bea,RO,eea,UO,VO,WO,XO,YO,ZO,$O,aP,bP,cP,dP,fP,gP,hP,eP,jP,kP,lP,mP,nP,oP,pP,sP,tP,uP,vP,fea,wP,xP,yP,zP,AP,BP,gea,CP,hea,DP,EP,FP,GP,HP,IP,JP,KP,LP,MP,NP,PP,OP,QP,RP,SP,TP,UP,VP,XP,iea,YP,ZP,$P,aQ,bQ,dQ,eQ,fQ,gQ,hQ,iQ,jQ,kQ,jea,kea,lQ,lea,mea,mQ,nea,nQ,oQ,pQ,qQ,rQ,sQ,tQ,uQ,vQ,wQ,xQ,yQ,zQ,BQ,CQ,DQ,EQ,GQ,HQ,KQ,LQ,JQ,MQ,NQ,QQ,RQ,SQ,TQ,PQ,UQ,WQ,XQ,VQ,ZQ,YQ,$Q,aR,cR,bR,dR,eR,fR,iR,gR,hR,jR,kR,lR,nR,oR,mR,pR,qR,rR,sR,tR,vR,uR,xR,pea,yR,qea,FR,GR,ER,
JR,KR,LR,MR,NR,OR,RR,SR,QR,PR,TR,VR,UR,WR,XR,ZR,aS,YR,dS,fS,eS,rea,cS,gS,hS,iS,jS,kS,lS,sea,mS,nS,oS,pS,rS,qS,sS,tS,uS,vS,wS,yS,xS,AS,zS,BS,CS,DS,ES,IS,GS,FS,HS,KS,JS,LS,MS,OS,RS,PS,US,VS,WS,SS,XS,$S,YS,gT,hT,iT,jT,bT,lT,fT,dT,kT,mT,eT,nT,qT,rT,sT,tT,uT,vT,wT,yT,xT,zT,AT,BT,CT,DT,ET,FT,GT,wea,HT,IT,JT,MT,LT,NT,OT,PT,QT,ST,RT,UT,WT,xea,XT,aU,wR,cU,bU,$T,dU,NS,eU,yea,zea,fU,iU,gU,hU,jU,kU,lU,nU,oU,rU,qU,sU,tU,Bea,uU,vU,yU,wU,AU,yM,BU,CU,VK,DU,EU,FU,GU,HU,Dea,Cea,LU,NU,OU,VN,ZN,JU,QU,$N,PU,XU,uV,RU,
vV,Fea,Gea,IV,HV,KU,NV,OV,IU,PV,QV,SV,wK,TV,VV,GV,DV,YV,MV,ZV,aW,LV,$V,cW,eW,dW,fW,iW,jW,XV,WV,kW,LK,lW,Gw,mW,KV,oW,pW,NK,rW,bW,sW,qW,tW,uW,Eea,UV,RV,aa,ia,ea,ha,na,vW,Da,Ea;ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.ca=function(a,b){return aa[a]=b};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=ha)};
la=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});
la=function(){}};
ka=function(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ma=function(a){la();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.q=function(a){la();var b=a[window.Symbol.iterator];return b?b.call(a):ka(a)};
g.r=function(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wa=b.prototype};
g.pa=function(a){if(!(a instanceof Array)){a=g.q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
ra=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{gs:e,hx:f}}return{gs:-1,hx:void 0}};
sa=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a){return void 0!==a};
g.w=function(a){return"string"==typeof a};
g.ua=function(a){return"boolean"==typeof a};
g.va=function(a){return"number"==typeof a};
g.y=function(a,b,c){a=a.split(".");c=c||g.x;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.t(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.z=function(a,b){for(var c=a.split("."),d=b||g.x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.wa=function(){};
g.xa=function(a){a.yc=void 0;a.getInstance=function(){return a.yc?a.yc:a.yc=new a}};
ya=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.za=function(a){return"array"==ya(a)};
g.Aa=function(a){var b=ya(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ba=function(a){return"function"==ya(a)};
g.Ca=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Fa=function(a){return a[Da]||(a[Da]=++Ea)};
Ga=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.A=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.A=Ga:g.A=Ha;return g.A.apply(null,arguments)};
g.B=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.Ia=function(a,b){for(var c in b)a[c]=b[c]};
g.E=function(a,b){function c(){}
c.prototype=b.prototype;a.wa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.nN=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
Ja=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ja);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ka=function(a){return a[a.length-1]};
La=function(a,b){var c=0;(0,g.F)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);
return c};
g.Na=function(a,b,c){b=g.Ma(a,b,c);return 0>b?null:g.w(a)?a.charAt(b):a[b]};
g.Ma=function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
Qa=function(a,b){var c=g.Pa(a,b,void 0);return 0>c?null:g.w(a)?a.charAt(c):a[c]};
g.Pa=function(a,b,c){for(var d=g.w(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1};
g.Sa=function(a,b){return 0<=(0,g.Ra)(a,b)};
Ta=function(a){if(!g.za(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.Ua=function(a,b){g.Sa(a,b)||a.push(b)};
g.Wa=function(a,b){var c=(0,g.Ra)(a,b),d;(d=0<=c)&&g.Va(a,c);return d};
g.Va=function(a,b){Array.prototype.splice.call(a,b,1)};
g.Xa=function(a,b){var c=g.Ma(a,b,void 0);0<=c&&g.Va(a,c)};
g.Ya=function(a){return Array.prototype.concat.apply([],arguments)};
g.Za=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
$a=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.bb=function(a,b,c,d){Array.prototype.splice.apply(a,g.ab(arguments,1))};
g.ab=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.eb=function(a,b,c){return cb(a,c||db,!1,b)};
fb=function(a,b){return cb(a,b,!0,void 0,void 0)};
cb=function(a,b,c,d,e){for(var f=0,k=a.length,l;f<k;){var m=f+k>>1,n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(k=m,l=!n)}return l?f:~f};
g.gb=function(a,b){a.sort(b||db)};
ib=function(a,b){var c=db;g.gb(a,function(a,e){return c(b(a),b(e))})};
g.kb=function(a,b){if(!g.Aa(a)||!g.Aa(b)||a.length!=b.length)return!1;for(var c=a.length,d=jb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
db=function(a,b){return a>b?1:a<b?-1:0};
jb=function(a,b){return a===b};
g.lb=function(a,b,c){var d={};(0,g.F)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
nb=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};
g.ob=function(a,b){return 0==a.lastIndexOf(b,0)};
pb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.qb=function(a){return/^[\s\xa0]*$/.test(a)};
g.rb=function(a){return(0,window.encodeURIComponent)(String(a))};
sb=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Bb=function(a){if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;"));return a};
Cb=function(a,b){a.length>b&&(a=a.substring(0,b-3)+"...");return a};
Db=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Fb=function(a,b){var c=g.t(void 0)?a.toFixed(void 0):String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Eb("0",Math.max(0,b-d))+c};
g.Gb=function(a){return null==a?"":String(a)};
g.Hb=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.G)()).toString(36)};
g.Kb=function(a,b){for(var c=0,d=Ib(String(a)).split("."),e=Ib(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Jb(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Jb(0==l[2].length,0==m[2].length)||Jb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Jb=function(a,b){return a<b?-1:a>b?1:0};
g.Lb=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
Mb=function(a){var b=Number(a);return 0==b&&g.qb(a)?window.NaN:b};
Nb=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
Ob=function(a){var b=g.w(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};
Qb=function(a){return-1!=g.Pb.indexOf(a)};
g.Rb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Sb=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Ub=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Vb=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
g.Wb=function(a){var b=0,c;for(c in a)b++;return b};
g.Xb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Yb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Zb=function(a,b){var c=g.Aa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};
$b=function(a,b){return null!==a&&b in a};
g.ac=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
bc=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
cc=function(a,b){var c=bc(a,b,void 0);return c&&a[c]};
g.dc=function(a){for(var b in a)return!1;return!0};
g.ec=function(a){for(var b in a)delete a[b]};
fc=function(a,b){b in a&&delete a[b]};
gc=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.hc=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ic=function(a){var b=ya(a);if("object"==b||"array"==b){if(g.Ba(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ic(a[c]);return b}return a};
g.kc=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jc.length;f++)c=jc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
mc=function(){return Qb("Safari")&&!(lc()||Qb("Coast")||Qb("Opera")||Qb("Edge")||Qb("Silk")||Qb("Android"))};
lc=function(){return(Qb("Chrome")||Qb("CriOS"))&&!Qb("Edge")};
g.nc=function(){return Qb("Android")&&!(lc()||Qb("Firefox")||Qb("Opera")||Qb("Silk"))};
oc=function(){return Qb("iPhone")&&!Qb("iPod")&&!Qb("iPad")};
pc=function(){return oc()||Qb("iPad")||Qb("iPod")};
qc=function(a){qc[" "](a);return a};
rc=function(a,b){try{return qc(a[b]),!0}catch(c){}return!1};
tc=function(a,b){var c=sc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
uc=function(){var a=g.x.document;return a?a.documentMode:void 0};
g.wc=function(a){return tc(a,function(){return 0<=g.Kb(vc,a)})};
g.yc=function(a){return Number(xc)>=a};
Ac=function(){this.g="";this.l=zc};
Bc=function(a){return a instanceof Ac&&a.constructor===Ac&&a.l===zc?a.g:"type_error:Const"};
g.Cc=function(a){var b=new Ac;b.g=a;return b};
Fc=function(){this.g="";this.l=Ec};
Gc=function(a){if(a instanceof Fc&&a.constructor===Fc&&a.l===Ec)return a.g;ya(a);return"type_error:TrustedResourceUrl"};
Hc=function(a){var b=new Fc;b.g=a;return b};
Jc=function(){this.g="";this.l=Ic};
g.Kc=function(a){if(a instanceof Jc&&a.constructor===Jc&&a.l===Ic)return a.g;ya(a);return"type_error:SafeUrl"};
g.Nc=function(a){if(a instanceof Jc)return a;a=a.yg?a.Gf():String(a);Lc.test(a)||(a="about:invalid#zClosurez");return Mc(a)};
Oc=function(a){if(a instanceof Jc)return a;a=a.yg?a.Gf():String(a);Lc.test(a)||(a="about:invalid#zClosurez");return Mc(a)};
Mc=function(a){var b=new Jc;b.g=a;return b};
g.Qc=function(){this.g="";this.o=Pc;this.l=null};
g.Rc=function(a){if(a instanceof g.Qc&&a.constructor===g.Qc&&a.o===Pc)return a.g;ya(a);return"type_error:SafeHtml"};
Vc=function(a){if(a instanceof g.Qc)return a;var b=null;a.nn&&(b=a.Hm());a=g.Bb(a.yg?a.Gf():String(a));return Uc(a,b)};
Uc=function(a,b){var c=new g.Qc;c.g=a;c.l=b;return c};
g.Wc=function(a,b){var c=b instanceof Jc?b:Oc(b);a.href=g.Kc(c)};
g.Yc=function(a,b){a.src=Gc(b)};
g.Zc=function(a,b){Bc(a);Bc(a);return Uc(b,null)};
g.$c=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.ad=function(a,b){var c=a%b;return 0>c*b?c+b:c};
bd=function(a,b,c){return a+c*(b-a)};
g.cd=function(a){return a*Math.PI/180};
g.dd=function(a,b){this.x=g.t(a)?a:0;this.y=g.t(b)?b:0};
ed=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.fd=function(a,b){return new g.dd(a.x-b.x,a.y-b.y)};
g.gd=function(a,b){this.width=a;this.height=b};
g.hd=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.ld=function(a){return a?new id(g.jd(a)):kd||(kd=new id)};
g.md=function(a){return g.w(a)?window.document.getElementById(a):a};
g.od=function(a,b){var c=b||window.document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.nd(window.document,"*",a,b)};
g.pd=function(a,b){var c=b||window.document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=window.document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.nd(c,"*",a,b)[0]||null}return c||null};
g.nd=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,k;k=a[f];f++)b==k.nodeName&&(d[e++]=k);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;k=a[f];f++)b=k.className,"function"==typeof b.split&&g.Sa(b.split(/\s+/),c)&&(d[e++]=k);d.length=e;return d}return a};
g.rd=function(a,b){g.Rb(b,function(b,d){b&&b.yg&&(b=b.Gf());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:qd.hasOwnProperty(d)?a.setAttribute(qd[d],b):g.ob(d,"aria-")||g.ob(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.td=function(a){a=a.document;a=g.sd(a)?a.documentElement:a.body;return new g.gd(a.clientWidth,a.clientHeight)};
g.wd=function(a){var b=ud(a);a=a.parentWindow||a.defaultView;return g.vd&&g.wc("10")&&a.pageYOffset!=b.scrollTop?new g.dd(b.scrollLeft,b.scrollTop):new g.dd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
ud=function(a){return a.scrollingElement?a.scrollingElement:!g.xd&&g.sd(a)?a.documentElement:a.body||a.documentElement};
yd=function(a){return a?a.parentWindow||a.defaultView:window};
g.Bd=function(a,b,c){var d=arguments,e=window.document,f=String(d[0]),k=d[1];if(!zd&&k&&(k.name||k.type)){f=["<",f];k.name&&f.push(' name="',g.Bb(k.name),'"');if(k.type){f.push(' type="',g.Bb(k.type),'"');var l={};g.kc(l,k);delete l.type;k=l}f.push(">");f=f.join("")}f=e.createElement(f);k&&(g.w(k)?f.className=k:g.za(k)?f.className=k.join(" "):g.rd(f,k));2<d.length&&g.Ad(e,f,d,2);return f};
g.Ad=function(a,b,c,d){function e(c){c&&b.appendChild(g.w(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.Aa(f)||g.Ca(f)&&0<f.nodeType?e(f):(0,g.F)(Cd(f)?g.Za(f):f,e)}};
g.Dd=function(a){return window.document.createElement(String(a))};
g.Fd=function(a){return window.document.createTextNode(String(a))};
g.sd=function(a){return"CSS1Compat"==a.compatMode};
g.Gd=function(a,b){a.appendChild(b)};
g.Hd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
Id=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.Jd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Md=function(a){return Kd&&void 0!=a.children?a.children:(0,g.Ld)(a.childNodes,function(a){return 1==a.nodeType})};
g.Nd=function(a){if(g.t(a.firstElementChild))a=a.firstElementChild;else for(a=a.firstChild;a&&1!=a.nodeType;)a=a.nextSibling;return a};
g.Pd=function(a){var b;if(Od&&!(g.vd&&g.wc("9")&&!g.wc("10")&&g.x.SVGElement&&a instanceof g.x.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Ca(b)&&1==b.nodeType?b:null};
g.Qd=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.jd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.Rd=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.Hd(a);var c=g.jd(a);a.appendChild(c.createTextNode(String(b)))}};
g.Ud=function(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Sd(a)||Td(a)):Sd(a)&&Td(a))&&g.vd){var c;!g.Ba(a.getBoundingClientRect)||g.vd&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
Sd=function(a){return g.vd&&!g.wc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
Td=function(a){a=a.tabIndex;return g.va(a)&&0<=a&&32768>a};
Cd=function(a){if(a&&"number"==typeof a.length){if(g.Ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ba(a))return"function"==typeof a.item}return!1};
g.Wd=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return g.Vd(a,function(a){return(!e||a.nodeName==e)&&(!c||g.w(a.className)&&g.Sa(a.className.split(/\s+/),c))},!0,d)};
g.Xd=function(a,b){return g.Wd(a,null,b,void 0)};
g.Vd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
id=function(a){this.g=a||g.x.document||window.document};
g.Yd=function(a){a=a.g;return a.parentWindow||a.defaultView};
g.$d=function(a){Zd();return Hc(a)};
g.ae=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
g.ce=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192){var d=g.ab(a,c,c+8192);b+=String.fromCharCode.apply(null,d)}return b};
de=function(a){return(0,g.H)(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
g.he=function(a,b){g.Aa(a);ee();for(var c=b?fe:ge,d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,p=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;m||(n=64,k||(l=64));d.push(c[p],c[f],c[l],c[n])}return d.join("")};
je=function(a){var b=[];ie(a,function(a){b.push(a)});
return b};
ke=function(a){var b=a.length,c=0;"="===a[b-2]?c=2:"="===a[b-1]&&(c=1);var d=new window.Uint8Array(Math.ceil(3*b/4)-c),e=0;ie(a,function(a){d[e++]=a});
return d.subarray(0,e)};
ie=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=le[c];if(null!=e)return e;if(!g.qb(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
ee();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
ee=function(){if(!ge){ge={};le={};fe={};for(var a=0;65>a;a++)ge[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),le[ge[a]]=a,fe[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(le["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
ne=function(a,b,c){this.l=null;this.C=this.F=this.g=this.o=this.A=0;this.B=!1;a&&me(this,a,b,c)};
pe=function(a,b,c){if(oe.length){var d=oe.pop();a&&me(d,a,b,c);return d}return new ne(a,b,c)};
me=function(a,b,c,d){b=b.constructor===window.Uint8Array?b:b.constructor===window.ArrayBuffer?new window.Uint8Array(b):b.constructor===Array?new window.Uint8Array(b):b.constructor===String?ke(b):new window.Uint8Array(0);a.l=b;a.A=g.t(c)?c:0;a.o=g.t(d)?a.A+d:a.l.length;a.g=a.A};
qe=function(a){var b=a.l;var c=b[a.g+0];var d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=5;128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&a.g++;return d};
re=function(a){this.g=pe(a,void 0,void 0);this.l=this.o=-1;this.A=!1};
se=function(a){var b=a.g;(b=b.g==b.o)||(b=a.A)||(b=a.g,b=b.B||0>b.g||b.g>b.o);if(b)return!1;b=qe(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.A=!0,!1;a.o=b>>>3;a.l=c;return!0};
te=function(a){switch(a.l){case 0:if(0!=a.l)te(a);else{for(a=a.g;a.l[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.l?te(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.l)te(a);else{var b=qe(a.g);a=a.g;a.g+=b}break;case 5:5!=a.l?te(a):(a=a.g,a.g+=4);break;case 3:b=[a.o];do{if(!se(a)){a.A=!0;break}if(3==a.l)b.push(a.o);else if(4==a.l&&a.o!=b.pop()){a.A=!0;break}}while(0<b.length)}};
ue=function(a){var b=qe(a.g);a=a.g;var c=a.l,d=a.g;b=d+b;for(var e=[],f="";d<b;){var k=c[d++];if(128>k)e.push(k);else if(192>k)continue;else if(224>k){var l=c[d++];e.push((k&31)<<6|l&63)}else if(240>k){l=c[d++];var m=c[d++];e.push((k&15)<<12|(l&63)<<6|m&63)}else if(248>k){l=c[d++];m=c[d++];var n=c[d++];k=(k&7)<<18|(l&63)<<12|(m&63)<<6|n&63;k-=65536;e.push((k>>10&1023)+55296,(k&1023)+56320)}8192<=e.length&&(f+=String.fromCharCode.apply(null,e),e.length=0)}f+=g.ce(e);a.g=d;return f};
ve=function(a){var b=qe(a.g);a=a.g;if(0>b||a.g+b>a.l.length)a.B=!0,b=new window.Uint8Array(0);else{var c=a.l.subarray(a.g,a.g+b);a.g+=b;b=c}return b};
we=function(){};
Ae=function(a,b,c){a.o=null;b||(b=[]);a.F=void 0;a.A=-1;a.g=b;a:{if(a.g.length){b=a.g.length-1;var d=a.g[b];if(d&&"object"==typeof d&&!g.za(d)&&!(xe&&d instanceof window.Uint8Array)){a.B=b-a.A;a.l=d;break a}}a.B=Number.MAX_VALUE}a.C={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.B?(d+=a.A,a.g[d]=a.g[d]||ye):(ze(a),a.l[d]=a.l[d]||ye)};
ze=function(a){var b=a.B+a.A;a.g[b]||(a.l=a.g[b]={})};
Ce=function(a,b){if(b<a.B){var c=b+a.A,d=a.g[c];return d===ye?a.g[c]=[]:d}if(a.l)return d=a.l[b],d===ye?a.l[b]=[]:d};
De=function(a,b){if(b<a.B){var c=b+a.A,d=a.g[c];return d===ye?a.g[c]=[]:d}d=a.l[b];return d===ye?a.l[b]=[]:d};
Ee=function(a){if(null==a||a instanceof window.Uint8Array)return a;if(g.w(a))return ke(a);ya(a);return null};
Fe=function(a,b,c){b<a.B?a.g[b+a.A]=c:(ze(a),a.l[b]=c)};
He=function(a){if(a.o)for(var b in a.o){var c=a.o[b];if(g.za(c))for(var d=0;d<c.length;d++)c[d]&&Ge(c[d]);else c&&Ge(c)}};
Ge=function(a){He(a);return a.g};
Ie=function(a){if(g.za(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Ie(d):d)}return b}if(xe&&a instanceof window.Uint8Array)return new window.Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Ie(d):d);return b};
Je=function(a){for(var b=[],c=a=yd(a.ownerDocument);c!=a.top;c=c.parent)if(c.frameElement)b.push(c.frameElement);else break;return b};
g.I=function(){this.Fb=this.Fb;this.tb=this.tb};
g.J=function(a,b){g.Ke(a,g.B(g.Le,b))};
g.Ke=function(a,b){a.Fb?g.t(void 0)?b.call(void 0):b():(a.tb||(a.tb=[]),a.tb.push(g.t(void 0)?(0,g.A)(b,void 0):b))};
g.Le=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Me=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Aa(d)?g.Me.apply(null,d):g.Le(d)}};
g.Ne=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Og=!1;this.Xv=!0};
Oe=function(a,b){g.Ne.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)};
g.Qe=function(a){return!(!a||!a[g.Pe])};
Se=function(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.sk=e;this.key=++Re;this.Bh=this.Fj=!1};
Te=function(a){a.Bh=!0;a.listener=null;a.g=null;a.src=null;a.sk=null};
Ue=function(a){this.src=a;this.listeners={};this.g=0};
Ve=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Wa(a.listeners[c],b);d&&(Te(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--));return d};
g.We=function(a){var b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Te(d[e]);delete a.listeners[c];a.g--}};
Xe=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Bh&&f.listener==b&&f.capture==!!c&&f.sk==d)return e}return-1};
g.Ze=function(a,b,c,d,e){if(d&&d.once)return Ye(a,b,c,d,e);if(g.za(b)){for(var f=0;f<b.length;f++)g.Ze(a,b[f],c,d,e);return null}c=$e(c);return g.Qe(a)?a.fa(b,c,g.Ca(d)?!!d.capture:!!d,e):af(a,b,c,!1,d,e)};
af=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ca(e)?!!e.capture:!!e,l=g.bf(a);l||(a[cf]=l=new Ue(a));c=l.add(b,c,d,k,f);if(c.g)return c;d=df();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)ef||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(gf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");hf++;return c};
df=function(){var a=jf,b=kf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
Ye=function(a,b,c,d,e){if(g.za(b)){for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);return null}c=$e(c);return g.Qe(a)?a.Ik(b,c,g.Ca(d)?!!d.capture:!!d,e):af(a,b,c,!0,d,e)};
g.lf=function(a,b,c,d,e){if(g.za(b))for(var f=0;f<b.length;f++)g.lf(a,b[f],c,d,e);else d=g.Ca(d)?!!d.capture:!!d,c=$e(c),g.Qe(a)?a.Qa(b,c,d,e):a&&(a=g.bf(a))&&(b=a.di(b,c,d,e))&&g.mf(b)};
g.mf=function(a){if(g.va(a)||!a||a.Bh)return!1;var b=a.src;if(g.Qe(b))return Ve(b.Td,a);var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(gf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);hf--;(c=g.bf(b))?(Ve(c,a),0==c.g&&(c.src=null,b[cf]=null)):Te(a);return!0};
gf=function(a){return a in nf?nf[a]:nf[a]="on"+a};
pf=function(a,b,c,d){var e=!0;if(a=g.bf(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Bh&&(f=of(f,d),e=e&&!1!==f)}return e};
of=function(a,b){var c=a.listener,d=a.sk||a.src;a.Fj&&g.mf(a);return c.call(d,b)};
jf=function(a,b){if(a.Bh)return!0;if(!kf){var c=b||g.z("window.event"),d=new Oe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.Og&&0<=k;k--){d.currentTarget=c[k];var l=pf(c[k],f,!0,d);e=e&&l}for(k=0;!d.Og&&k<c.length;k++)d.currentTarget=c[k],l=pf(c[k],f,!1,d),e=e&&l}return e}return of(a,new Oe(b,
this))};
g.bf=function(a){a=a[cf];return a instanceof Ue?a:null};
$e=function(a){if(g.Ba(a))return a;a[qf]||(a[qf]=function(b){return a.handleEvent(b)});
return a[qf]};
g.rf=function(){g.I.call(this);this.Td=new Ue(this);this.da=this;this.K=null};
sf=function(a,b,c,d){b=a.Td.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Bh&&k.capture==c){var l=k.listener,m=k.sk||k.src;k.Fj&&Ve(a.Td,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Xv};
tf=function(a,b){this.o=a;this.A=b;this.l=0;this.g=null};
uf=function(a,b){a.A(b);100>a.l&&(a.l++,b.next=a.g,a.g=b)};
vf=function(a){return function(){return a}};
wf=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
g.xf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
yf=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
zf=function(a){g.x.setTimeout(function(){throw a;},0)};
Cf=function(a,b){var c=a;b&&(c=(0,g.A)(a,b));!g.Ba(g.x.setImmediate)||g.x.Window&&g.x.Window.prototype&&!Qb("Edge")&&g.x.Window.prototype.setImmediate==g.x.setImmediate?(Af||(Af=Bf()),Af(c)):g.x.setImmediate(c)};
Bf=function(){var a=g.x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Qb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.A)(function(a){if(("*"==d||
a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!Qb("Trident")&&!Qb("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.t(c.next)){c=c.next;var a=c.zq;c.zq=null;a()}};
return function(a){d.next={zq:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.x.setTimeout(a,0)}};
Df=function(){this.l=this.g=null};
Ef=function(){this.next=this.scope=this.g=null};
g.Jf=function(a,b){Ff||Gf();Hf||(Ff(),Hf=!0);If.add(a,b)};
Gf=function(){if(-1!=String(g.x.Promise).indexOf("[native code]")){var a=g.x.Promise.resolve(void 0);Ff=function(){a.then(Kf)}}else Ff=function(){Cf(Kf)}};
Kf=function(){for(var a;a=If.remove();){try{a.g.call(a.scope)}catch(b){zf(b)}uf(Lf,a)}Hf=!1};
Mf=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
Nf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Pf=function(a,b){this.g=0;this.F=void 0;this.A=this.l=this.o=null;this.B=this.C=!1;if(a!=g.wa)try{var c=this;a.call(b,function(a){Of(c,2,a)},function(a){Of(c,3,a)})}catch(d){Of(this,3,d)}};
Qf=function(){this.next=this.context=this.l=this.A=this.g=null;this.o=!1};
Tf=function(a,b,c){var d=Sf.get();d.A=a;d.l=b;d.context=c;return d};
Uf=function(a){if(a instanceof g.Pf)return a;var b=new g.Pf(g.wa);Of(b,2,a);return b};
Vf=function(a){return new g.Pf(function(b,c){c(a)})};
Xf=function(a,b,c){Wf(a,b,c,null)||g.Jf(g.B(b,a))};
Yf=function(a){return new g.Pf(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Xf(e,b,c)})};
g.Zf=function(a){return new g.Pf(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],Xf(m,g.B(f,l),k);
else b(e)})};
ag=function(a,b){var c=Tf(b,b,void 0);c.o=!0;$f(a,c);return a};
g.cg=function(a,b){return bg(a,null,b,void 0)};
dg=function(a,b){if(0==a.g)if(a.o){var c=a.o;if(c.l){for(var d=0,e=null,f=null,k=c.l;k&&(k.o||(d++,k.g==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.g&&1==d?dg(c,b):(f?(d=f,d.next==c.A&&(c.A=d),d.next=d.next.next):eg(c),fg(c,e,3,b)))}a.o=null}else Of(a,3,b)};
$f=function(a,b){a.l||2!=a.g&&3!=a.g||gg(a);a.A?a.A.next=b:a.l=b;a.A=b};
bg=function(a,b,c,d){var e=Tf(null,null,null);e.g=new g.Pf(function(a,k){e.A=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){k(n)}}:a;
e.l=c?function(b){try{var e=c.call(d,b);!g.t(e)&&b instanceof hg?k(b):a(e)}catch(n){k(n)}}:k});
e.g.o=a;$f(a,e);return e.g};
Of=function(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Wf(c,a.I,a.K,a)||(a.F=c,a.g=b,a.o=null,gg(a),3!=b||c instanceof hg||ig(a,c)))};
Wf=function(a,b,c,d){if(a instanceof g.Pf)return $f(a,Tf(b||g.wa,c||null,d)),!0;if(Nf(a))return a.then(b,c,d),!0;if(g.Ca(a))try{var e=a.then;if(g.Ba(e))return jg(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
jg=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
gg=function(a){a.C||(a.C=!0,g.Jf(a.H,a))};
eg=function(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.A=null);return b};
fg=function(a,b,c,d){if(3==c&&b.l&&!b.o)for(;a&&a.B;a=a.o)a.B=!1;if(b.g)b.g.o=null,kg(b,c,d);else try{b.o?b.A.call(b.context):kg(b,c,d)}catch(e){lg.call(null,e)}uf(Sf,b)};
kg=function(a,b,c){2==b?a.A.call(a.context,c):a.l&&a.l.call(a.context,c)};
ig=function(a,b){a.B=!0;g.Jf(function(){a.B&&lg.call(null,b)})};
hg=function(a){Ja.call(this,a)};
g.mg=function(a,b){g.rf.call(this);this.zc=a||1;this.Jh=b||g.x;this.km=(0,g.A)(this.tc,this);this.Gn=(0,g.G)()};
g.ng=function(a,b,c){if(g.Ba(a))c&&(a=(0,g.A)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.x.setTimeout(a,b||0)};
og=function(a,b){var c=null;return g.cg(new g.Pf(function(d,e){c=g.ng(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(a){g.x.clearTimeout(c);
throw a;})};
pg=function(){return Math.round((0,g.G)()/1E3)};
qg=function(a){var b=window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing.domLoading?Math.round(window.performance.timing.domLoading/1E3):null;return null!=b?b:null!=a?a:pg()};
rg=function(){this.l=-1};
sg=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
ug=function(a){try{return g.x.JSON.parse(a)}catch(d){var b=d}a=String(a);if(sg(a))try{var c=eval("("+a+")");b&&tg("Invalid JSON: "+a,b);return c}catch(d){}throw Error("Invalid JSON string: "+a);};
g.xg=function(a){var b=[];vg(new wg,a,b);return b.join("")};
wg=function(){};
vg=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.za(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),vg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yg(d,c),c.push(":"),vg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yg(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
yg=function(a,b){b.push('"',a.replace(zg,function(a){var b=Ag[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ag[a]=b);return b}),'"')};
Bg=function(a){this.g=a||{cookie:""}};
Cg=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Dg=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.Ig=function(a){return a.match(Hg)};
g.Jg=function(a){return a?(0,window.decodeURI)(a):a};
g.Kg=function(a){return g.Jg(g.Ig(a)[3]||null)};
g.Lg=function(a){return Number(g.Ig(a)[4]||null)||null};
Mg=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var k=c[d].substring(0,e);f=c[d].substring(e+1)}else k=c[d];b(k,f?sb(f):"")}};
Ng=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
Og=function(a,b){return b?a?a+"&"+b:b:a};
Pg=function(a,b){if(!b)return a;var c=Ng(a);c[1]=Og(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Qg=function(a,b,c){if(g.za(b))for(var d=0;d<b.length;d++)Qg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.rb(b)))};
Rg=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Qg(a[d],a[d+1],c);return c.join("&")};
g.Sg=function(a){var b=[],c;for(c in a)Qg(c,a[c],b);return b.join("&")};
Tg=function(a,b){var c=2==arguments.length?Rg(arguments[1],0):Rg(arguments,1);return Pg(a,c)};
g.Ug=function(a,b){var c=g.Sg(b);return Pg(a,c)};
Vg=function(a,b,c){c=null!=c?"="+g.rb(c):"";return Pg(a,b+c)};
Wg=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
Yg=function(a){var b=a.search(Xg),c=Wg(a,0,"post_data",b);if(0>c)return null;var d=a.indexOf("&",c);if(0>d||d>b)d=b;c+=10;return sb(a.substr(c,d-c))};
g.$g=function(a,b){for(var c=a.search(Xg),d=0,e,f=[];0<=(e=Wg(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Zg,"$1")};
ah=function(a,b,c){return Vg(g.$g(a,b),b,c)};
bh=function(a,b){var c=Ng(a),d=c[1],e=[];d&&(0,g.F)(d.split("&"),function(a){var c=a.indexOf("=");b.hasOwnProperty(0<=c?a.substr(0,c):a)||e.push(a)});
c[1]=Og(e.join("&"),g.Sg(b));return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
ch=function(){this.g={};return this};
dh=function(a,b){a.g.eb=gc(a.g,"eb",0)|b};
g.eh=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
fh=function(a,b){return a==b?!0:a&&b?a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left:!1};
gh=function(a,b,c){b instanceof g.dd?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,g.va(c)&&(a.top+=c,a.bottom+=c));return a};
g.hh=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.ih=function(a){return new g.eh(a.top,a.left+a.width,a.top+a.height,a.left)};
g.jh=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.kh=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.lh=function(a){return new g.gd(a.width,a.height)};
g.mh=function(a){return new g.dd(a.left,a.top)};
nh=function(){this.g={};this.l=0};
oh=function(a,b){this.B=a;this.o=!0;this.g=b};
ph=function(a,b){oh.call(this,String(a),b);this.A=a;this.g=!!b};
qh=function(a,b){oh.call(this,a,b)};
rh=function(a){if(a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)){a=a.split(".");var b=Number(a[0]),c=Number(a[1]);return new qh("",new g.hh(c,b,Number(a[3])-c,Number(a[2])-b))}return new qh("",new g.hh(0,0,0,0))};
th=function(){sh||(sh=new nh);return sh};
uh=function(a,b){a.g[b.B]=b};
g.wh=function(a,b,c){if(g.w(b))(b=vh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=vh(c,d);f&&(c.style[f]=e)}};
vh=function(a,b){var c=xh[b];if(!c){var d=Nb(b);c=d;void 0===a.style[d]&&(d=(g.xd?"Webkit":g.yh?"Moz":g.vd?"ms":g.zh?"O":null)+Ob(d),void 0!==a.style[d]&&(c=d));xh[b]=c}return c};
Ah=function(a,b){var c=a.style[Nb(b)];return"undefined"!==typeof c?c:a.style[vh(a,b)]||""};
Bh=function(a,b){var c=g.jd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
g.Ch=function(a,b){return Bh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.Eh=function(a,b,c){if(b instanceof g.dd){var d=b.x;b=b.y}else d=b,b=c;a.style.left=Dh(d,!1);a.style.top=Dh(b,!1)};
Fh=function(a){return new g.dd(a.offsetLeft,a.offsetTop)};
Gh=function(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}g.vd&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
g.Jh=function(a){if(g.vd&&!g.yc(8))return a.offsetParent;var b=g.jd(a),c=g.Ch(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=g.Ch(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.Lh=function(a){for(var b=new g.eh(0,window.Infinity,window.Infinity,0),c=g.ld(a),d=c.g.body,e=c.g.documentElement,f=ud(c.g);a=g.Jh(a);)if(!(g.vd&&0==a.clientWidth||g.xd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=g.Ch(a,"overflow")){var k=g.Kh(a),l=new g.dd(a.clientLeft,a.clientTop);k.x+=l.x;k.y+=l.y;b.top=Math.max(b.top,k.y);b.right=Math.min(b.right,k.x+a.clientWidth);b.bottom=Math.min(b.bottom,k.y+a.clientHeight);b.left=Math.max(b.left,k.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,
d);b.top=Math.max(b.top,f);c=g.td(g.Yd(c)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
g.Kh=function(a){var b=g.jd(a),c=new g.dd(0,0);var d=b?g.jd(b):window.document;d=!g.vd||g.yc(9)||g.sd(g.ld(d).g)?d.documentElement:d.body;if(a==d)return c;a=Gh(a);b=g.wd(g.ld(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c};
g.Nh=function(a,b){var c=new g.dd(0,0),d=yd(g.jd(a));if(!rc(d,"parent"))return c;var e=a;do{var f=d==b?g.Kh(e):Mh(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&d!=d.parent&&(e=d.frameElement)&&(d=d.parent));return c};
g.Ph=function(a,b){var c=g.Oh(a),d=g.Oh(b);return new g.dd(c.x-d.x,c.y-d.y)};
Mh=function(a){a=Gh(a);return new g.dd(a.left,a.top)};
g.Oh=function(a){if(1==a.nodeType)return Mh(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.dd(a.clientX,a.clientY)};
g.Rh=function(a,b,c){if(b instanceof g.gd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");g.Qh(a,b);a.style.height=Dh(c,!0)};
Dh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Qh=function(a,b){a.style.width=Dh(b,!0)};
g.Th=function(a){var b=Sh;if("none"!=g.Ch(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
Sh=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.xd&&!b&&!c;return g.t(b)&&!d||!a.getBoundingClientRect?new g.gd(b,c):(a=Gh(a),new g.gd(a.right-a.left,a.bottom-a.top))};
g.Uh=function(a,b){a.style.display=b?"":"none"};
g.Vh=function(a,b,c,d){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return+b};
Wh=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?g.Vh(a,c,"left","pixelLeft"):0};
g.Xh=function(a){if(g.vd){var b=Wh(a,"paddingLeft"),c=Wh(a,"paddingRight"),d=Wh(a,"paddingTop");a=Wh(a,"paddingBottom");return new g.eh(d,c,a,b)}b=Bh(a,"paddingLeft");c=Bh(a,"paddingRight");d=Bh(a,"paddingTop");a=Bh(a,"paddingBottom");return new g.eh((0,window.parseFloat)(d),(0,window.parseFloat)(c),(0,window.parseFloat)(a),(0,window.parseFloat)(b))};
Zh=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Yh?Yh[c]:g.Vh(a,c,"left","pixelLeft")};
g.$h=function(a){if(g.vd&&!g.yc(9)){var b=Zh(a,"borderLeft"),c=Zh(a,"borderRight"),d=Zh(a,"borderTop");a=Zh(a,"borderBottom");return new g.eh(d,c,a,b)}b=Bh(a,"borderLeftWidth");c=Bh(a,"borderRightWidth");d=Bh(a,"borderTopWidth");a=Bh(a,"borderBottomWidth");return new g.eh((0,window.parseFloat)(d),(0,window.parseFloat)(c),(0,window.parseFloat)(a),(0,window.parseFloat)(b))};
ai=function(a){var b=new g.hh(-Number.MAX_VALUE/2,-Number.MAX_VALUE/2,Number.MAX_VALUE,Number.MAX_VALUE),c=new g.hh(0,0,0,0);if(!a||0==a.length)return c;for(var d=0;d<a.length;d++)if(!g.kh(b,a[d]))return c;return b};
bi=function(a,b){var c=a.getBoundingClientRect(),d=g.Nh(a,b);return new g.hh(Math.round(d.x),Math.round(d.y),Math.round(c.right-c.left),Math.round(c.bottom-c.top))};
ci=function(a,b,c){if(b&&c){a:{var d=Math.max(b.left,c.left);var e=Math.min(b.left+b.width,c.left+c.width);if(d<=e){var f=Math.max(b.top,c.top),k=Math.min(b.top+b.height,c.top+c.height);if(f<=k){d=new g.hh(d,f,e-d,k-f);break a}}d=null}e=d?d.height*d.width:0;f=d?b.height*b.width:0;d=d&&f?Math.round(e/f*100):0;uh(a,new oh("vp",d));d&&0<d?(e=g.ih(b),f=g.ih(c),e=e.top>=f.top&&e.top<f.bottom):e=!1;uh(a,new ph(512,e));d&&0<d?(e=g.ih(b),f=g.ih(c),e=e.bottom<=f.bottom&&e.bottom>f.top):e=!1;uh(a,new ph(1024,
e));d&&0<d?(e=g.ih(b),f=g.ih(c),e=e.left>=f.left&&e.left<f.right):e=!1;uh(a,new ph(2048,e));d&&0<d?(b=g.ih(b),c=g.ih(c),c=b.right<=c.right&&b.right>c.left):c=!1;uh(a,new ph(4096,c))}};
di=function(a,b){var c=0;g.Zb(yd(),"ima","video","client","tagged")&&(c=1);var d=null;a&&(d=a());if(d){var e=d;d=th();d.g={};var f=new ph(32,!0);f.o=!1;uh(d,f);f=yd().document;f=f.visibilityState||f.webkitVisibilityState||f.mozVisibilityState||f.msVisibilityState||"";uh(d,new ph(64,"hidden"!=f.toLowerCase().substring(f.length-6)?!0:!1));try{var k=yd().top;try{var l=!!k.location.href||""===k.location.href}catch(u){l=!1}if(l){var m=Je(e);var n=m&&0!=m.length?"1":"0"}else n="2"}catch(u){n="2"}uh(d,new ph(256,
"2"==n));uh(d,new ph(128,"1"==n));m=l=yd().top;"2"==n&&(m=yd());k=bi(e,m);uh(d,new qh("er",k));try{var p=m.document&&!m.document.body?null:g.td(m||window)}catch(u){p=null}p?(m=g.wd(g.ld(m.document).g),uh(d,new ph(16384,!!m)),p=m?new g.hh(m.x,m.y,p.width,p.height):null):p=null;uh(d,new qh("vi",p));if(p&&"1"==n){n=Je(e);e=[];for(m=0;m<n.length;m++)(f=bi(n[m],l))&&e.push(f);e.push(p);p=ai(e)}ci(d,k,p);d.l&&(n=pg()-d.l,uh(d,new oh("ts",n)));d.l=pg()}else d=th(),d.g={},d.l=pg(),uh(d,new ph(32,!1));this.o=
d;this.g=new ch;this.g.set("ve",4);c&&dh(this.g,1);g.Zb(yd(),"ima","video","client","crossdomainTag")&&dh(this.g,4);g.Zb(yd(),"ima","video","client","sdkTag")&&dh(this.g,8);g.Zb(yd(),"ima","video","client","jsTag")&&dh(this.g,2);b&&gc(b,"fullscreen",!1)&&dh(this.g,16);this.l=d=null;if(c&&(c=g.Zb(yd(),"ima","video","client"),c.getEData)){this.l=c.getEData();if(c=g.Zb(yd(),"ima","video","client","getLastSnapshotFromTop"))if(n=c())this.l.extendWithDataFromTopIframe(n.tagstamp,n.playstamp,n.lactstamp),
c=this.o,d=n.er,n=n.vi,d&&n&&(d=rh(d).getValue(),n=rh(n).getValue(),e=null,gc(c.g,"er",null)&&(e=gc(c.g,"er",null).getValue(),e.top+=d.top,e.left+=d.left,uh(c,new qh("er",e))),gc(c.g,"vi",null)&&(p=gc(c.g,"vi",null).getValue(),p.top+=d.top,p.left+=d.left,l=[],l.push(p),l.push(d),l.push(n),d=ai(l),ci(c,e,d),uh(c,new qh("vi",n))));a:{if(this.l){if(this.l.getTagLoadTimestamp){d=this.l.getTagLoadTimestamp();break a}if(this.l.getTimeSinceTagLoadSeconds){d=this.l.getTimeSinceTagLoadSeconds();break a}}d=
null}}this.g.set("td",pg()-qg(d))};
ei=function(a,b){try{var c=new di(a,b),d=[],e=Number(c.g.get("eb"));c.g.remove("eb");var f,k=c.g,l=[],m;for(m in k.g)l.push(m+k.g[m]);(f=l.join("_"))&&d.push(f);if(c.l){var n=c.l.serialize();n&&d.push(n)}var p,u=c.o;f=e;k=[];f||(f=0);for(var v in u.g){var D=u.g[v];if(D instanceof ph)D.getValue()&&(f|=D.A);else{var C,N=u.g[v];(C=N.o?N.l():"")&&k.push(v+C)}}k.push("eb"+String(f));(p=k.join("_"))&&d.push(p);c.g.set("eb",e);return d.join("_")}catch(fa){return"tle;"+Cb(fa.name,12)+";"+Cb(fa.message,40)}};
fi=function(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?g.t(void 0)?fi(a,b,void 0,d):a:c};
hi=function(){var a=g.x.document.querySelector("script[nonce]");if(a&&(a=a.nonce||a.getAttribute("nonce"))&&gi.test(a))return a};
ii=function(a){try{return!!a&&null!=a.location.href&&rc(a,"foo")}catch(b){return!1}};
ji=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
li=function(a){return(a=ki.exec(a))&&a[0]||""};
ni=function(){var a=mi;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec((0,window.decodeURIComponent)(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
pi=function(a){return a?a.passive&&oi()?a:a.capture||!1:a};
qi=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,pi(d)):a.attachEvent&&a.attachEvent("on"+b,c)};
ri=function(a){a=a||g.x;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null};
si=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};
wi=function(){if(ti&&!ii(ui)){var a="."+vi.domain;try{for(;2<a.split(".").length&&!ii(ui);)vi.domain=a=a.substr(a.indexOf(".")+1),ui=window.parent}catch(b){}ii(ui)||(ui=window)}return ui};
xi=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.gd(b.innerWidth,b.innerHeight)).round():g.td(b||window).round()}catch(d){return new g.gd(-12245933,-12245933)}};
yi=function(){this.g=0;this.o=!1;this.l=-1;this.We=!1};
zi=function(){this.g=!1};
Ai=function(){this.g={};this.o=!0;this.l={}};
Bi=function(a,b){var c=new zi;return a.g[b]=c};
Ci=function(a,b){if($b(a.l,b))return a.l[b];if(!a.o)return null;var c=a.g[b];if(c)return c.getValue()};
Di=function(a){var b={},c;for(c in a.g)if(a.g.hasOwnProperty(c)){var d="";void 0!==a.l[c]?d=String(a.l[c]):a.o&&(d="");0<d.length&&(b[c]=d)}return b};
Ei=function(a){a=Di(a);var b=[];g.Rb(a,function(a,d){d in Object.prototype||"undefined"!=typeof a&&b.push([d,":",a].join(""))});
return b};
Gi=function(){return(0,g.G)()-Fi};
Li=function(a){var b=0<=Hi?Gi()-Hi:-1,c=Ii?Gi()-Ji:-1,d=0<=Ki?Gi()-Ki:-1;if(79463068==a)return 500;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var k=e[b];break}void 0===k&&(k=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:k};
Mi=function(){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[vi.visibilityState||vi.webkitVisibilityState||vi.mozVisibilityState||""]||0};
Si=function(a){Qi.e=-1;Qi.i=6;Qi.n=7;Qi.t=8;if(!Ri){var b=[];ji(Qi,function(a,c){b[a+1]=c});
var c=b.join(""),d=a&&a[c];Ri=d&&function(b,c){return d.call(a,b,c)}}return Ri};
Ti=function(){this.l=this.o=this.A=this.g=0};
Ui=function(){this.l=[1,.75,.5,.3,0];this.g=(0,g.H)(this.l,function(){return new Ti})};
Wi=function(a,b){return Vi(a,function(a){return a.g},void 0===b?!0:b)};
Yi=function(a,b){return Xi(a,b,function(a){return a.g})};
Zi=function(a){return Vi(a,function(a){return a.o},!0)};
$i=function(a,b){return Xi(a,b,function(a){return a.o})};
aj=function(a,b){return Xi(a,b,function(a){return a.l})};
bj=function(a){(0,g.F)(a.g,function(a){a.l=0})};
Vi=function(a,b,c){a=(0,g.H)(a.g,function(a){return b(a)});
return c?a:cj(a)};
Xi=function(a,b,c){var d=g.Pa(a.l,function(a){return b<=a});
return-1==d?0:c(a.g[d])};
cj=function(a){return(0,g.H)(a,function(a,c,d){return 0<c?d[c]-d[c-1]:d[c]})};
dj=function(){this.g=new Ui;this.V=new Ti;this.O=this.F=-1;this.aa=1E3};
ej=function(a,b){this.l=(void 0===a?0:a)||0;this.g=(void 0===b?"":b)||""};
fj=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
gj=function(a,b,c){this.g=a;this.l=b;this.o=c};
hj=function(a,b,c){this.url=a;this.l=b;this.Cn=!!c;this.depth=g.va(void 0)?void 0:null};
nj=function(a){a=a||ij();for(var b=new hj(g.x.location.href,g.x,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&mj.test(f.url)&&(c=f);if(f.url&&!f.Cn){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new gj(b,e,c)};
ij=function(){var a=g.x,b=[],c=null;do{var d=a;if(ii(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new hj(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);a=0;for(d=b.length-1;a<=d;++a)b[a].depth=d-a;d=g.x;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.Cn=!0);return b};
oj=function(){this.o="&";this.A=g.t(void 0)?void 0:"trn";this.B=!1;this.l={};this.C=0;this.g=[]};
pj=function(a,b){var c={};c[a]=b;return[c]};
rj=function(a,b,c,d,e){var f=[];ji(a,function(a,l){var k=qj(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
qj=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(qj(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(rj(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
sj=function(a,b,c,d){a.g.push(b);a.l[b]=pj(c,d)};
tj=function(a){if(!a.A)return 4E3;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return 4E3-a.A.length-b-a.o.length-1};
uj=function(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof oj)var e=c;else e=new oj,ji(c,function(a,b){var c=e,d=c.C++,f=pj(b,a);c.g.push(d);c.l[d]=f});
var f=e.xb(a.A,a.l,a.o+b+"&","");f&&si(g.x,f)}catch(k){}};
g.vj=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};
wj=function(){var a=g.x.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.G)()};
xj=function(){var a=void 0===a?g.x:a;return(a=a.performance)&&a.now?a.now():null};
yj=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
Bj=function(){var a=zj;this.events=[];this.l=a||g.x;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Aj()||(null!=b?b:1>Math.random())};
Dj=function(a){a&&Cj&&Aj()&&(Cj.clearMarks("goog_"+a.uniqueId+"_start"),Cj.clearMarks("goog_"+a.uniqueId+"_end"))};
Gj=function(){var a=Ej;this.o=Fj;this.l=!0;this.A=this.g;this.za=void 0===a?null:a};
Ij=function(a,b,c,d,e){try{if(a.za&&a.za.g){var f=a.za.start(b.toString(),3);var k=c();a.za.end(f)}else k=c()}catch(m){c=a.l;try{Dj(f);var l=Hj(m);c=(e||a.A).call(a,b,l,void 0,d)}catch(n){a.g(217,n)}if(!c)throw m;}return k};
Kj=function(a,b,c,d){var e=Jj;return function(f){for(var k=[],l=0;l<arguments.length;++l)k[l-0]=arguments[l];return Ij(e,a,function(){return b.apply(c,k)},d,void 0)}};
Hj=function(a){return new Lj(Mj(a),a.fileName,a.lineNumber)};
Mj=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Lj=function(a,b,c){fj.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
Nj=function(){if(!zj.google_measure_js_timing){var a=Ej;a.g=!1;a.events!=a.l.google_js_reporting_queue&&(Aj()&&(0,g.F)(a.events,Dj),a.events.length=0)}};
Pj=function(a,b){return Ij(Jj,a,b,void 0,Oj)};
Qj=function(a,b,c,d){return Kj(a,b,c,d)};
Rj=function(a,b,c,d){Jj.g(a,b,c,d)};
Sj=function(a,b,c,d){c=Kj(d,c,void 0,void 0);qi(a,b,c,{capture:!1});return c};
Tj=function(a,b){a&&(a.l&&(b[4]=a.l),a.g&&(b[12]=a.g))};
Uj=function(a){var b=[];g.Rb(a,function(a,d){var c=(0,window.encodeURIComponent)(d),f=a;g.w(f)&&(f=(0,window.encodeURIComponent)(f));b.push(c+"="+f)});
b.push("24="+(0,g.G)());return b.join("\n")};
Vj=function(){var a=g.Bd("DIV");a.style.cssText="position:relative;left:0px;top:0px;width:0;height:0;";return a};
Wj=function(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);return!e&&rc(a,"parentElement")?Wj(g.Pd(a),b,c,d):{done:e,value:d}};
Xj=function(a,b,c,d){if(!a)return d;d=Wj(a,b,c,d);if(!d.done)try{var e=g.jd(a),f=e&&yd(e);return Xj(f&&f.frameElement,b,c,d.value)}catch(k){}return d.value};
Yj=function(a){var b=!g.vd||g.wc(8);return Xj(a,function(a,d){var c=rc(d,"style")&&d.style&&Ah(d,"visibility");return{hidden:"hidden"===c,visible:b&&"visible"===c}},function(a){return a.hidden||a.visible},{hidden:!1,
visible:!1}).hidden};
Zj=function(a){return Xj(a,function(a,c){return!(!rc(c,"style")||!c.style||"none"!==Ah(c,"display"))},function(a){return a},!1)?!0:Yj(a)};
ak=function(a){return new g.eh(a.top,a.right,a.bottom,a.left)};
bk=function(a){return null!=a&&0<=a&&1>=a};
ck=function(a,b){return null===a||null===b?new g.eh(0,0,0,0):new g.eh(Math.max(a.top,b.top),Math.min(a.right,b.right),Math.min(a.bottom,b.bottom),Math.max(a.left,b.left))};
dk=function(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=g.Pd(a)||a){var d=g.jd(a),e=d&&yd(d),f=e&&e.frameElement;f&&(a=f)}}catch(k){break}}return!1};
ek=function(a,b,c){if(!a||!b)return!1;b=gh(a.clone(),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;var d=wi();ii(d.top)&&d.top&&d.top.document&&(d=d.top);d=Si(d&&d.document);if(!d)return!1;a=d(a,b);if(!a)return!1;b=(b=(b=g.jd(c))&&b.defaultView&&b.defaultView.frameElement)&&dk(b,a);d=a===c;a=!d&&a&&g.Vd(a,function(a){return a===c});
return!(b||d||a)};
fk=function(a,b,c,d){return 0>=a.pk()||0>=a.getHeight()?!0:c&&d?Pj(208,function(){return ek(a,b,c)}):!1};
gk=function(a,b){this.l=null;this.C=a;this.F=b||1};
hk=function(a,b){var c=b.right-b.left,d=b.bottom-b.top,e=Math.floor(c/2),f=Math.floor(d/2);switch(a.F){case 4:return a.C?(e=Math.floor(.3*c),f=Math.floor(.3*d),[new g.dd(e,f),new g.dd(c-e,f),new g.dd(e,d-f),new g.dd(c-e,d-f)]):[new g.dd(e,0),new g.dd(0,f),new g.dd(e,d-1),new g.dd(c-1,f)];case 3:return[new g.dd(c-1,0),new g.dd(e,f),new g.dd(0,d-1)];default:return[new g.dd(e,f)]}};
ik=function(a,b){if(void 0===b)try{b=a.l.getBoundingClientRect()}catch(d){b=new g.eh(0,0,0,0)}var c=hk(a,b);(0,g.F)(c,function(a){a.x+=b.left;a.y+=b.top});
return c};
jk=function(a,b,c){this.snapshot=a;this.l=b;this.g=c};
kk=function(a,b){gk.call(this,a,b);this.g=[];this.B=!1;this.A=0;this.o=-1};
nk=function(a,b){var c=b.getBoundingClientRect(),d="DIV"==b.tagName||"INS"==b.tagName,e=g.jd(b),f=!0,k=a.g;if(d){var l=Vj();c=hk(a,c);Id(b,l,0);(0,g.F)(c,function(a){var b=new lk(e);k.push(b);var c;if(c=f)if(b.g){b.g.style.position="absolute";mk(b,a);a=!0;try{l.appendChild(b.g)}catch(u){a=!1}c=a}else c=!1;f=c})}else c=ik(a,c),(0,g.F)(c,function(a){var c=new lk(e);
k.push(c);var d;if(d=f)if(c.g&&b.parentNode){c.g.style.position="fixed";mk(c,a);a=!0;try{b.parentNode&&b.parentNode.insertBefore(c.g,b.nextSibling)}catch(u){a=!1}d=a}else d=!1;f=d});
f?(a.l=b,a.B=!d&&!1):((0,g.F)(k,function(a){a.remove()}),a.g=[]);
return f};
ok=function(a){if(a.l&&a.B){var b=ik(a);(0,g.F)(b,function(a,b){this.g[b]&&mk(this.g[b],a)},a)}};
pk=function(a){(0,g.F)(a.g,function(a){a.remove()});
a.g=[]};
uk=function(a){var b=(0,g.G)(),c=a.A?b-a.A:0,d=La(a.g,function(a){return a.isVisible(b)});
d=4==a.g.length?a.C?qk[d]:rk[d]:3==a.g.length?sk[d]:1==a.g.length?tk[d]:-1;c=new jk(d,a.o,c);a.o=d;a.A=b;ok(a);return c};
lk=function(a){this.g=null;this.o=this.l=0;vk(this,a)};
vk=function(a,b){var c=(new id(b)).createElement("IFRAME");c.srcdoc="";c.frameBorder="0";c.style.width="1px";c.style.height="1px";c.style.opacity="0";c.style.zIndex=-999999;a.g=c;var d=Kj(245,a.A,a,void 0);c.addEventListener("load",Qj(244,function(){c.contentWindow.requestAnimationFrame(d)}))};
mk=function(a,b){a.g&&!ed(b,Fh(a.g))&&g.Eh(a.g,b)};
wk=function(){this.K=!1;this.H=void 0;this.l=!ii(K.top);var a=ij();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.Kg(a[a.length-1].url)||"":"";this.A=this.F=this.C=this.g=null;this.L=0;this.o=!1;this.B=null;this.I=0;this.Ya="geo";this.nb=new Ai;Bi(this.nb,"nio_mode").g=!0;Bi(this.nb,"omid");Bi(this.nb,"mraid_race");Bi(this.nb,"osd").g=!0;Bi(this.nb,"pdc").g=!0;Bi(this.nb,"rafv").g=!0;Bi(this.nb,"rafx").g=!0;Bi(this.nb,"umt").g=!0};
xk=function(a,b,c,d,e,f){this.time=a;this.l=b;this.volume=void 0===f?null:f;this.A=d;this.g=c;this.o=e};
yk=function(a,b,c,d,e,f,k){this.o=a;this.C=b;this.g=c;this.A=d;this.B=e;this.l=f;this.F=k};
zk=function(a){this.l=a;this.g=null};
Bk=function(){return!Ak()&&(Qb("iPod")||Qb("iPhone")||Qb("Android")||Qb("IEMobile"))};
Ak=function(){return Qb("iPad")||Qb("Android")&&!Qb("Mobile")||Qb("Silk")};
Ck=function(a,b){b=void 0===b?0:b;this.l=a;this.B=[];this.g=new xk(-1,new g.gd(0,0),null,!0,this);this.I=this.o=b;this.H=this.O=!1;this.F="uk";this.U=!1};
Dk=function(a,b){g.Sa(a.B,b)||(a.B.push(b),b.pi(a.o),b.xg(a.g),b.Dh()&&(a.H=!0))};
Fk=function(a){a.H=a.B.length?(0,g.Ek)(a.B,function(a){return a.Dh()}):!1};
Hk=function(a){(0,g.F)(a.B,function(b){b.xg(a.g)})};
Ik=function(a){(0,g.F)(a.B,function(b){b.pi(a.o)})};
Jk=function(a,b,c,d,e){this.element=a;this.g=b;this.nb=c;this.Mj=d;this.C=e;this.B=!1;this.o=new yk(b.g,this.element,new g.eh(0,0,0,0),null,this.A(),0,0)};
Kk=function(a,b,c){this.l=void 0===c?0:c;this.Mb=a;this.g=null==b?"":b};
Lk=function(a,b){return new Kk(a.Mb,a.g,a.l+b)};
Mk=function(a,b){return a.l<b.l?!0:a.l>b.l?!1:a.Mb<b.Mb?!0:a.Mb>b.Mb?!1:typeof a.g<typeof b.g?!0:typeof a.g>typeof b.g?!1:a.g<b.g};
Nk=function(){this.o=0;this.g=[];this.l=!1};
Ok=function(a){var b=new Nk;var c=void 0===c?0:c;var d=void 0===d?!0:d;ji(a,function(a,f){d&&void 0===a||b.add(f,a,c)});
return b};
Qk=function(a){a.l&&(g.gb(a.g,function(a,c){return Mk(c,a)?1:Mk(a,c)?-1:0}),a.l=!1);
return Pk(a.g,function(a,c){var b="boolean"===typeof c.g;b=""+(b&&!c.g?"":c.Mb)+(b||""===c.g?"":"="+c.g);return""+a+(""!=a&&""!=b?"&":"")+b},"")};
Rk=function(a){ji(a,function(b,c){b instanceof Array&&(a[c]=b.join(","))});
return a};
Tk=function(a,b,c){this.position=Sk.clone();this.zd=0;this.Ln=this.ik();this.In=-2;this.AJ=(0,g.G)();this.Gw=-1;this.sh=b;this.rg=-1!=b;this.gj=this.Au=null;this.opacity=-1;this.Rv=c;this.Uw=this.Mn=g.wa;this.Qe=this.element=a;this.Pg=null;this.Kp=this.Dg=!1;this.Em=1;this.vp=!0;this.re=!1;wk.getInstance().L++;this.domain=null;this.zs=0;this.dc=this.Mm();this.Fw=-1;this.Rl=new g.eh(0,0,0,0);this.nb=new Ai;Bi(this.nb,"od");Bi(this.nb,"opac").g=!0;Bi(this.nb,"ud")};
Uk=function(a,b,c,d,e){if(a.rg){var f=K.innerWidth,k=K.innerHeight,l=new g.eh(Math.round(K.mozInnerScreenY),Math.round(K.mozInnerScreenX+f),Math.round(K.mozInnerScreenY+k),Math.round(K.mozInnerScreenX));c=new g.eh(K.screenY+d,K.screenX+c.width,K.screenY+c.height,K.screenX);e||(d=new g.eh(l.top-c.top,l.right-c.left,l.bottom-c.top,l.left-c.left),d.top>a.position.top?a.position=d:(a.position.right=a.position.left+f,a.position.bottom=a.position.top+k),a.zd=f*k);a.kf(l,c,b,e,!0,!0)}};
Xk=function(a,b,c){if(a.rg){var d=Si(K&&K.document);if(d){c||Vk(a,K,!0);if(a.We()||a.Kp){var e=Wk(a,d);d=!0}else e=g.wd(window.document),e=d(Math.floor((a.position.left+a.position.right)/2)-e.x,Math.floor((a.position.top+a.position.bottom)/2)-e.y)?.5:0,d=!1;a.kf(a.position,e,b,c,!0,d)}}};
Yk=function(a,b,c){if(c(b))return b;for(;;){var d=Math.floor((a+b)/2);if(d==a||d==b)return a;c(d)?a=d:b=d}};
Wk=function(a,b){var c=g.wd(window.document),d=a.Em,e=Math.floor(a.position.left-c.x)+1,f=Math.floor(a.position.top-c.y)+1,k=Math.floor(a.position.right-c.x)-d,l=Math.floor(a.position.bottom-c.y)-d;c=(l-f)*(k-e);if(f>l||e>k)return 0;d=!!b(e,f);var m=!!b(k,l);if(d&&m)return 1;var n=!!b(k,f),p=!!b(e,l);if(d)l=Yk(f,l,function(a){return!!b(e,a)}),k=Yk(e,k,function(a){return!!b(a,f)});
else if(n)l=Yk(f,l,function(a){return!!b(k,a)}),e=Yk(k,e,function(a){return!!b(a,f)});
else if(p)f=Yk(l,f,function(a){return!!b(e,a)}),k=Yk(e,k,function(a){return!!b(a,l)});
else if(m)f=Yk(l,f,function(a){return!!b(k,a)}),e=Yk(k,e,function(a){return!!b(a,l)});
else{var u=Math.floor((e+k)/2),v=Math.floor((f+l)/2);if(!b(u,v))return 0;f=Yk(v,f,function(a){return!!b(u,a)});
l=Yk(v,l,function(a){return!!b(u,a)});
e=Yk(u,e,function(a){return!!b(a,v)});
k=Yk(u,k,function(a){return!!b(a,v)})}return(l-f)*(k-e)/c};
Zk=function(a,b,c,d,e){a.rg&&(d||Vk(a,K,e),a.kf(a.position,c,b,d,!1,!0))};
$k=function(a,b,c){if(a.rg){var d=c?a.dc.g:a.zs;a.Rl&&!fh(a.Rl,new g.eh(0,0,0,0))&&(d=gh(a.Rl.clone(),a.position.left,a.position.top));a.kf(a.position,d,b,c,!0,!0)}};
al=function(a,b,c){a=b.create(a.Qe,a.nb,a.Mj(),function(){c()});
null!=a&&a.Os();return a};
bl=function(a,b){var c=al(a,b,function(){return a.Uw(a)});
c&&(a.Ya=c)};
cl=function(a,b,c){if(a.rg&&a.Ya){var d=wi(),e=wk.getInstance();Vk(a,d,e.l);a.Ya.pm();d=a.Ya.o;e=d.o.g;var f=!(!d.B&&!e);if(null!=d.A&&e){var k=d.g;a.Au=new g.dd(k.left-e.left,k.top-e.top);a.gj=new g.gd(e.right-e.left,e.bottom-e.top)}a.kf(a.position,d.l,b,c,!0,f)}};
Vk=function(a,b,c,d){if(d)a.position=d;else{b=c?b:b.top;try{var e=Sk.clone(),f=new g.dd(0,0);if(a.Qe){var k=1==a.Rv;!c&&k&&Zj(a.Qe)||(e=a.Qe.getBoundingClientRect());f=g.Nh(a.Qe,b)}c=f;var l=c.x,m=c.y;a.position=new g.eh(Math.round(m),Math.round(l+(e.right-e.left)),Math.round(m+(e.bottom-e.top)),Math.round(l))}catch(n){a.position=Sk.clone()}}a.zd=(a.position.bottom-a.position.top)*(a.position.right-a.position.left)};
fl=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c};
gl=function(a){a.Ya&&a.Ya.Pn()};
kl=function(a,b){var c=!1,d=a.Qe;b.document&&b.document.body&&12==a.Rv&&(d=b.document.body);if(null===d)return!1;Pj(152,function(){var e=new b.IntersectionObserver(function(c){try{hl(b,c,a)}catch(k){try{e.unobserve(d),Rj("osd_adblock::nioc",k)}catch(l){}}},il);
e.observe(d);jl(d);c=!0});
return c};
jl=function(a){if(a&&(a=a.style)){var b=a.opacity;a.opacity=.98;a.opacity=.99;a.opacity=b}};
ll=function(a,b){var c=!1;Pj(151,function(){var d=ri(b).observeIntersection(function(c){try{hl(b,c,a)}catch(f){try{d(),Rj("osd_adblock::aioc",f)}catch(k){}}});
c=!0});
return c};
hl=function(a,b,c){if(!b||!b.length||0>=b.length)b=null;else{for(var d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);b=d}if(d=b)b=ak(d.boundingClientRect),e=ak(d.intersectionRect),c.dc.g=g.$c(d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height),0,1),c.zs=c.dc.g,Vk(c,a,!0,b),a=ck(b,e),c.Rl=0>=c.zd||a.top>=a.bottom||a.left>=a.right?new g.eh(0,0,0,0):gh(a,-b.left,-b.top)};
ml=function(a,b,c,d){d&&(a.Uw=d);switch(c){case "nio":return kl(a,b);case "aio":return ll(a,b);case "raf":return a.tp();case "geo":case "xde":case "iem":return!0}return!1};
nl=function(){};
pl=function(a){if(a instanceof nl)return a;if("function"==typeof a.uf)return a.uf(!1);if(g.Aa(a)){var b=0,c=new nl;c.next=function(){for(;;){if(b>=a.length)throw ol;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.ql=function(a,b,c){if(g.Aa(a))try{(0,g.F)(a,b,c)}catch(d){if(d!==ol)throw d;}else{a=pl(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==ol)throw d;}}};
rl=function(a){if(g.Aa(a))return g.Za(a);a=pl(a);var b=[];g.ql(a,function(a){b.push(a)});
return b};
vl=function(a){var b=g.sl&&0<=g.Kb(g.tl,9),c=g.ul&&g.wc(601);return!(void 0===a?0:a)&&(b||c)};
wl=function(){for(var a=K,b=a,c=0;a&&a!=a.parent;)a=a.parent,c++,ii(a)&&(b=a);return b};
xl=function(a){var b=[],c=[];g.Rb(a,function(a,e){if(!(e in Object.prototype)&&"undefined"!=typeof a){g.za(a)&&(a=a.join(","));var d=[e,"=",a].join("");switch(e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":case "aio":case "nio":case "iem":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}}});
return b.concat(c)};
yl=function(){this.A=this.g=this.o=this.l=this.B=0};
Bl=function(){this.g=new yl;var a=yd();zl(this,a,window.document);var b=Al();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)zl(this,c,c.document);zl(this,a.top,a.top.document)}}catch(d){}};
Al=function(){var a=window.document.documentElement;try{if(!ii(yd().top))return"2";var b=[],c=yd(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}};
zl=function(a,b,c){Sj(c,"mousedown",function(){var b=a.g;1E5<b.o||++b.o},301);
Sj(b,"scroll",function(){var b=a.g;1E5<b.g||++b.g},302);
Sj(c,"touchmove",function(){var b=a.g;1E5<b.g||++b.g},303);
Sj(c,"mousemove",function(){var b=a.g;1E5<b.A||++b.A},304);
Sj(c,"keydown",function(){var b=a.g;1E5<b.l||++b.l},305)};
Cl=function(){yi.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.A=-1};
Dl=function(a){return bk(a.volume)&&.1<=a.volume};
El=function(){var a={};this.l=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.cm=[128,128],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a);this.g={};for(var b in this.l)0<this.l[b][1]&&(this.g[b]=0);this.o=0};
Fl=function(a,b){var c=a.l[b],d=c[1];a.o+=c[0];0<d&&0==a.g[b]&&(a.g[b]=1)};
Hl=function(a){return Gl(a,g.Yb(a.l))};
Gl=function(a,b){var c=0,d;for(d in a.g)g.Sa(b,d)&&1==a.g[d]&&(c+=a.l[d][1],a.g[d]=2);return c};
Il=function(a){var b=0,c;for(c in a.g){var d=a.g[c];if(1==d||2==d)b+=a.l[c][1]}return b};
Jl=function(){this.g=this.l=0};
Kl=function(){dj.call(this);this.o=new Ti;this.T=this.I=this.L=0;this.H=-1;this.da=new Ti;this.B=new Ti;this.l=new Ui;this.C=this.A=-1;this.K=new Ti;this.aa=2E3;this.U=new Jl;this.X=new Jl;this.ba=new Jl};
Ll=function(a,b,c){var d=a.T;Ii||c||-1==a.H||(d+=b-a.H);return d};
Ml=function(){this.g=!1};
Nl=function(a,b){this.g=!1;this.C=a;this.H=b;this.o=0};
Pl=function(a,b){if(a.B(b)){var c=Ol(a.H,a.C,b);a.o|=c;return 0==c}return!1};
Ql=function(a,b,c,d,e,f){e=void 0===e?null:e;f=void 0===f?[]:f;Tk.call(this,b,c,d);this.V=0;this.o={};this.ac=new El;this.jx={};this.md="";this.Xf=null;this.Vw=!1;this.l=[];this.yi=e;this.C=f;this.A=void 0;this.B=-1;this.I=this.da=void 0;this.ba=!1;this.H=this.K=0;this.U=-1;this.aa=this.ya=!1;this.Nh=this.Oa=0;this.ma=!1;this.Fb=this.Ja=-1;this.O=this.F=this.g=0;this.bb=this.Va=-1;this.Wa=0;this.Sa=new Ui;this.T=this.sa=this.Ua=0;this.tb=-1;this.ua=0;this.Ca=!1;this.X=null;this.Ub=0;this.ha=g.wa;
this.L=[this.ik()];this.Ma=!1;this.Kp=!0;this.Em=2;b=wk.getInstance();Vk(this,a,b.l);this.Xg={};this.Xg.pause="p";this.Xg.resume="r";this.Xg.skip="s";this.Xg.mute="m";this.Xg.unmute="um";this.Xg.exitfullscreen="ef"};
Rl=function(a,b,c){a.Ub=1;a.o={};a.o.firstquartile=!1;a.o.midpoint=!1;a.o.thirdquartile=!1;a.o.complete=!1;a.o.pause=!1;a.o.skip=!1;a.o.viewable_impression=!1;a.V=0;c||(a.fd().H=b)};
Sl=function(a){return g.t(a)?Number(a)?fl(a,3):0:a};
Tl=function(a,b){var c;null!=b&&b<a.L.length?c=b:c=a.L.length-1;return a.L[c]};
Ul=function(a,b){(0,g.Ek)(a.C,function(a){return a.A()&&a.l()==b.l()})||a.C.push(b)};
Vl=function(a,b,c){return 15E3<=b?!0:a.ya?(void 0===c?0:c)?!0:-1!=a.B?b>=a.B/2:-1!=a.U?b>=a.U:!1:!1};
Wl=function(a){var b={},c=wk.getInstance();b.insideIframe=c.l;b.unmeasurable=a.Dg;b.position=a.position;b.exposure=a.dc.g;b.documentSize=c.A;b.viewportSize=c.g;return b};
Yl=function(a,b){Xl(a.l,b,function(){return{OJ:0,xk:void 0}});
a.l[b]={viewableArea:fl(a.dc.g,2),instantaneousState:a.ac.o}};
Xl=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++};
am=function(a,b,c){var d=a.jx[b];if(null!=d)return d;g.Sa(Zl,b)?d=!0:(d=a.o[b],g.t(d)?(a.o[b]=!0,d=!d):d=!1);c=a.lk(d,d,c,$l[b]);"fully_viewable_audible_half_duration_impression"==b&&(c.std="csm",c.ic=Gl(a.ac,["gdr"]));return c};
bm=function(a){if(a.re)return 1;var b=K.screen.width*K.screen.height;return 0>=b?-1:Math.min(a.zd*a.dc.g/b,1)};
cm=function(a){this.B=!1;this.g=a};
dm=function(){this.g=this.l=null};
em=function(a,b){function c(c,e){a.g=null;b(c,e)}
if(null==a.l)return!1;a.g=g.Na(a.l,function(a){return null!=a&&a.eh()&&a.init(c)});
return null!=a.g};
g.fm=function(a,b,c){g.I.call(this);this.o=null!=c?(0,g.A)(a,c):a;this.zc=b;this.l=(0,g.A)(this.Cz,this);this.g=[]};
gm=function(a){a.za=g.ng(a.l,a.zc);a.o.apply(null,a.g)};
hm=function(){this.g=this.A=null;this.o=0;this.l=null};
im=function(){this.g=[];this.o=[];this.done=!1;this.l={Sy:0,oq:0,lp:0,ir:0,sn:-1};this.O=this.F=this.K=this.H=this.L=null;this.U=!1;this.B=null;this.I=0;this.C=Ak()||Bk();this.T=0;this.A=new zk(this)};
jm=function(){var a=wk.getInstance().Ya;return"nio"==a||"aio"==a};
mm=function(){var a=km;if(!a.U){a.U=!0;var b=g.x.requestAnimationFrame||g.x.webkitRequestAnimationFrame||g.x.mozRequestAnimationFrame||g.x.oRequestAnimationFrame||g.x.msRequestAnimationFrame;if(!a.L&&!jm()){if(b){var c=Qj(136,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];return a.cn.apply(a,[].concat(g.pa(c)))});
var d=function(){b(function(){K.setTimeout(c,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.cn.apply(a,[].concat(g.pa(c)))};
a.H=new g.fm(Kj(137,d,void 0,void 0),100);a.L=Sj(K,"scroll",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];null!==a.H&&a.H.lh.apply(a.H,[].concat(g.pa(c)))},138)}if(!a.K&&!jm()){if(b){var e=Qj(139,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Hs.apply(a,[].concat(g.pa(c)))});
d=function(){b(function(){K.setTimeout(e,0)})}}else d=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Hs.apply(a,[].concat(g.pa(c)))};
a.F=new g.fm(Kj(140,d,void 0,void 0),100);a.K=Sj(K,"resize",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];null!==a.F&&a.F.lh.apply(a.F,[].concat(g.pa(c)))},141)}lm(a,function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];
return a.Wr.apply(a,[].concat(g.pa(c)))});
a.Wr()}};
om=function(a){var b=a.C,c=wk.getInstance();b&&!c.o&&"exc"!=c.Ya&&nm(a,!0);b=new hm;switch(c.Ya){case "xde":var d=a.I;nm(a,!1);a=wk.getInstance();var e=a.F,f=e.height-d;0>=f&&(f=e.height,d=0);a.g=new g.gd(e.width,f);f=new hm;f.A=a.g;f.g=e;f.o=d;return f;case "geo":a:{c=c.g;b=new hm;b.A=c;if(null!=c&&-12245933!=c.width&&-12245933!=c.height){var k=wk.getInstance();if(k.o)d=k.B;else try{k=K;e=a.C;k=k.top;f=c||xi(!0,k,void 0===e?!1:e);var l=g.wd(g.ld(k.document).g);if(-12245933==f.width){var m=f.width;
var n=new g.eh(m,m,m,m)}else n=new g.eh(l.y,l.x+f.width,l.y+f.height,l.x);d=n}catch(p){a=b;break a}b.l=d}a=b}return a;default:return b}};
pm=function(a,b,c,d){if(!a.done)if(a.A.cancel(),0==b.length)c||a.A.schedule();else{a.B=null;var e=om(a),f=wk.getInstance();try{var k=Gi();if(null!=dm.getInstance().g)for(d=0;d<b.length;d++)cl(b[d],k,c);else switch(f.Ya){case "exc":for(d=0;d<b.length;d++)$k(b[d],k,c);break;case "nis":for(e=0;e<b.length;e++)g.t(d)?b[e].Nl(d):b[e].Gs(k);break;case "gsv":for(e=0;e<b.length;e++)g.t(d)?b[e].Pr(d):b[e].Fs(k);break;case "aio":case "nio":for(d=0;d<b.length;d++)$k(b[d],k,c);break;case "xde":if(e.g)for(d=0;d<
b.length;d++)Uk(b[d],k,e.g,e.o,c);break;case "iem":for(d=0;d<b.length;d++)Xk(b[d],k,c);break;case "raf":(0,g.F)(b,function(a){if(c)a.Pg&&(a.Pg.o=3,a.dc.g=0);else if(a.Pg){var b=uk(a.Pg),d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[b.snapshot+1];a.dc.g=d[b.l+1];a.kf(a.position,e,a.sh+b.g,!1,!0,!1);a.Mf()&&1!=a.Wd()&&!a.vp&&a.Pg&&pk(a.Pg)}});
break;case "geo":if(e.l)for(d=0;d<b.length;d++)Zk(b[d],k,e.l,c,f.l)}for(d=0;d<b.length;d++);a.l.lp+=Gi()-k;++a.l.ir}finally{c?(0,g.F)(b,function(a){a.dc.g=0}):a.A.schedule()}}};
lm=function(a,b){var c;vi.visibilityState?c="visibilitychange":vi.mozVisibilityState?c="mozvisibilitychange":vi.webkitVisibilityState&&(c="webkitvisibilitychange");c&&(a.O=a.O||Sj(vi,c,b,142))};
qm=function(a){var b=wk.getInstance().nb,c=[];0===(Ci(b,"nio_mode")||0)&&c.push(a.EJ);c.push(a.FJ,a.DJ,a.CJ);return c};
sm=function(){var a=km;var b=void 0===b?qm(a):b;b=g.q(b);for(var c=b.next();!c.done;c=b.next())if(c.value.call(a,K))return!0;(0,g.F)(a.o,function(b){b.Dg=!0;b.o(rm(a),"goog_update_data","i")});
return!1};
um=function(a){if(tm(a))return!0;var b=Mi();a=1===b;b=0===b;return wk.getInstance(),a||b};
vm=function(a,b){return null!=b&&(0,g.Ek)(a.g,function(a){return a.element==b})};
wm=function(a){return g.Na(km.g,function(b){return b.md==a})};
ym=function(){return(0,g.Ek)(xm(km),function(a){return 1===Ci(a.nb,"inapp")})};
xm=function(a){return 0==a.g.length?a.o:0==a.o.length?a.g:g.Ya(a.o,a.g)};
nm=function(a,b){var c=a.C,d=wk.getInstance(),e,f=dm.getInstance();null!=f.g&&(e=f.g.g);d.g=e?e.g.l:d.o?d.B?(new g.gd(d.B.pk(),d.B.getHeight())).round():new g.gd(0,0):xi(!0,K,c);if(!b){d.F=K&&K.outerWidth?new g.gd(K.outerWidth,K.outerHeight):new g.gd(-12245933,-12245933);var k=void 0===k?K:k;null!==k&&k!=k.top&&(k=k.top);e=c=0;f=wk.getInstance().g;try{var l=k.document,m=l.body,n=l.documentElement;if("CSS1Compat"==l.compatMode&&n.scrollHeight)c=n.scrollHeight!=f.height?n.scrollHeight:n.offsetHeight,
e=n.scrollWidth!=f.width?n.scrollWidth:n.offsetWidth;else{var p=n.scrollHeight,u=n.scrollWidth,v=n.offsetHeight,D=n.offsetWidth;n.clientHeight!=v&&(p=m.scrollHeight,u=m.scrollWidth,v=m.offsetHeight,D=m.offsetWidth);p>f.height?p>v?(c=p,e=u):(c=v,e=D):p<v?(c=p,e=u):(c=v,e=D)}var C=new g.gd(e,c)}catch(N){C=new g.gd(-12245933,-12245933)}d.A=C}};
zm=function(){var a=wk.getInstance();K.screen&&(a.C=new g.gd(K.screen.width,K.screen.height))};
rm=function(a){if(!a.B){var b=K.document,c=0<=Hi?Gi()-Hi:-1,d=Gi();-1==a.l.sn&&(c=d);var e=wk.getInstance(),f=Di(e.nb),k=xm(a);try{if(0<k.length){var l=e.g;l&&(f.bs=[l.width,l.height]);var m=e.F;m&&(f.bos=[m.width,m.height]);var n=e.A;n&&(f.ps=[n.width,n.height]);K.screen&&(f.ss=[K.screen.width,K.screen.height])}else f.url=(0,window.encodeURIComponent)(K.location.href.substring(0,1024)),b.referrer&&(f.referrer=(0,window.encodeURIComponent)(b.referrer.substring(0,512)));f.tt=c;f.pt=Hi;switch(wk.getInstance().Ya){case "xde":f.xde=
1;break;case "iem":f.iem=1;break;case "aio":f.aio=1;break;case "nio":f.nio=1}f.deb=[1,a.l.Sy,a.l.oq,a.l.lp,a.l.ir,a.l.sn].join("-");f.tvt=Am(a,d);if(null!==K&&K!=K.top){0<k.length&&(f.iframe_loc=(0,window.encodeURIComponent)(K.location.href.substring(0,512)));var p=xi(!1,K,a.C);f.is=[p.width,p.height]}}catch(u){f.error=1}a.B=f}return xl(g.hc(a.B))};
Cm=function(a,b){var c=Bm(b,"raf",xm(a));c&&(wk.getInstance().Ya="raf");return c};
Bm=function(a,b,c){var d=!1;(0,g.F)(c,function(c){ml(c,a,b,void 0)&&(d=!0)});
return d};
Dm=function(a){var b=km,c=[];(0,g.F)(a,function(a){vm(b,a.element)||(b.g.push(a),c.push(a))})};
Em=function(a){var b=km,c=[];(0,g.F)(a,function(a){null==g.Na(b.g,function(b){return b.element==a.element&&!0})&&(b.g.push(a),c.push(a))})};
Am=function(a,b){var c=a.T;Ii&&(c+=b-Ji);return c};
tm=function(a){return(0,g.Ek)(xm(a),function(a){return a.re})};
Fm=function(){var a=g.Pb;return a?(0,g.Ek)("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"),function(b){return Db(a,b)})?!0:Db(a,"Presto")&&Db(a,"Linux")&&!Db(a,"X11")&&!Db(a,"Android")&&!Db(a,"Mobi"):!1};
Gm=function(a){if(!a)return"";var b=[];b.push("url="+(0,window.encodeURIComponent)(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+(0,window.encodeURIComponent)(a.document.referrer.substring(0,512)));return b.join("&")};
Hm=function(a){return function(b){return!g.t(b[a])&&g.t(0)?0:b[a]}};
Jm=function(){var a=[0,2,4];return function(b){b=b.tos;if(g.za(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return g.t(a)?Im(c,a):c}}};
Km=function(a,b){return function(c){c=c[a];if(g.za(c))return Im(c,b)}};
Mm=function(a){var b=Lm;return function(c){return b(c)?c[a]:void 0}};
Im=function(a,b){return(0,g.Ld)(a,function(a,d){return g.Sa(b,d)})};
Pm=function(a,b){var c={sv:"644",cb:"j"};c.nas=km.g.length;c.msg=a;if(g.t(b)){var d=Nm(b);d&&(c.e=Om[d])}return c};
Nm=function(a){var b=a.toLowerCase();return bc(Qm,function(a){return a==b})};
Rm=function(a,b){Nl.call(this,a,b)};
Sm=function(){this.l=this.A=this.C=this.B=this.o=this.g=""};
Tm=function(){};
Um=function(a,b,c,d,e){var f={};if(g.t(a))if(null!=b)for(var k in b){var l=b[k];k in Object.prototype||null!=l&&(g.Ba(l)?f[k]=l(a):f[k]=a[l])}else g.kc(f,a);g.t(c)&&g.kc(f,c);a=Qk(Ok(Rk(f)));0<a.length&&g.t(d)&&g.t(e)&&(e=e(a),a+="&"+d+"="+e);return a};
Vm=function(){};
Wm=function(a,b,c,d,e){Jk.call(this,a,b,c,d,e);this.l=new g.eh(0,0,0,0)};
Ym=function(a){a=Xm(a);cm.call(this,a.length?a[a.length-1]:null);this.o=a;this.A=g.wa;this.l=null};
Xm=function(a){if(!a.length)return[];a=(0,g.Ld)(a,function(a){return null!=a&&a.eh()});
for(var b=1;b<a.length;b++)Dk(a[b-1],a[b]);return a};
Zm=function(a,b,c,d,e){Jk.call(this,a,b,c,d,e);this.l=null};
cn=function(a){if(!a.element)return!1;var b=a.element;a.l=new a.g.l.IntersectionObserver(function(b){try{if(b.length){var c=$m(b),e=ak(c.boundingClientRect),f=gh(ak(c.intersectionRect),-e.left,-e.top),k=c.boundingClientRect.width*c.boundingClientRect.height,l=c.intersectionRect.width*c.intersectionRect.height;var m=k?l/k:0;b=0;var n=c.intersectionRect.width*c.intersectionRect.height,p=a.g.g.g;p&&(b=(p.bottom-p.top)*(p.right-p.left));a.o=new yk(a.g.g,a.element,e,f,a.A(),m,b?n/b:0)}}catch(u){a.Pn(),
Rj(299,u)}},an);
a.l.observe(b);bn(b);return!0};
$m=function(a){return Pk(a,function(a,c){return a.time>c.time?a:c},a[0])};
bn=function(a){if(a=a.style){var b=a.opacity;a.opacity=.98;a.opacity=.99;a.opacity=b}};
dn=function(a){cm.call(this,new Ck(a))};
en=function(){Ck.call(this,K,1);this.C=new ej(0,"");this.V=4;this.A=[];this.aa=[];this.K=0;this.T=!1;this.ba=this.X=0;this.L=""};
gn=function(a,b){var c=0,d=a.l;try{if(d&&d.Goog_AdSense_getAdAdapterInstance)return d}catch(e){}for(;d&&5>c;){try{if(d.google_osd_static_frame)return d}catch(e){}try{if(d.aswift_0&&(!b||d.aswift_0.google_osd_static_frame))return d.aswift_0}catch(e){}c++;d=d!=d.parent?d.parent:null}return null};
hn=function(a,b,c,d,e,f){e=void 0===e?!1:e;f=void 0===f?"":f;var k={};Tj(c,k);k[0]="goog_request_monitoring";k[6]=b;k[27]=a.l.document.domain;k[16]=e;f&&f.length&&(k[19]=f);try{var l=Uj(k);d.postMessage(l,"*")}catch(m){}};
kn=function(a,b,c,d,e,f){d=void 0===d?!1:d;e=void 0===e?"":e;f=void 0===f?function(){return null}:f;
++a.ba;2==a.K?jn(a):10<a.ba?(a.F="no",jn(a),f()):a.l.postMessage?c.Uc()?(f=gn(a,!0))&&hn(a,b,c,f,d,e):(a.F="ib",jn(a),f()):(a.F="c",jn(a),f())};
jn=function(a){a.l.clearInterval(a.X)};
ln=function(a,b){(0,g.F)(a.A,function(a){a.A(b)})};
mn=function(a,b){(0,g.F)(a.A,function(a){a.o(b)})};
nn=function(a,b){(0,g.F)(a.A,function(a){a.l(b)})};
on=function(a,b){(0,g.F)(a.A,function(a){a.H(b)})};
pn=function(a,b){(0,g.F)(a.A,function(a){a.g(b)})};
qn=function(a,b,c){(0,g.F)(a.A,function(a){a.B(b,c)})};
rn=function(a,b){(0,g.F)(a.A,function(a){a.F(b)})};
sn=function(a){(0,g.F)(a.A,function(a){a.C()})};
tn=function(a,b){(0,g.F)(a.aa,function(a){a(b)})};
un=function(a,b){if(b.source){var c={};Tj(a.C,c);c[0]="goog_provide_mode";c[6]=a.V;c[19]=a.L;c[16]=a.T;try{var d=Uj(c);b.source.postMessage(d,b.origin)}catch(e){Rj(406,e,.01,function(a){a.bcn="false"})}}};
vn=function(){this.A=this.K=!1;this.o=null;this.l=new Vm;this.g=null;var a={};this.L=(a.start=this.hA,a.firstquartile=this.cA,a.midpoint=this.eA,a.thirdquartile=this.iA,a.complete=this.aA,a.pause=this.cp,a.resume=this.Wv,a.skip=this.gA,a.viewable_impression=this.Se,a.mute=this.Lh,a.unmute=this.Lh,a.fullscreen=this.dA,a.exitfullscreen=this.bA,a.fully_viewable_audible_half_duration_impression=this.Se,a.measurable_impression=this.Se,a.abandon=this.cp,a.engagedview=this.Se,a.impression=this.Se,a.creativeview=
this.Se,a.progress=this.Lh,a.custom_metric_viewable=this.Se,a.loaded=this.jn,a.bufferstart=this.cp,a.bufferfinish=this.Wv,a);a={};this.O=(a.overlay_resize=this.fA,a.abandon=this.kn,a.close=this.kn,a.collapse=this.kn,a.overlay_unmeasurable_impression=function(a){return am(a,"overlay_unmeasurable_impression",um(km))},a.overlay_viewable_immediate_impression=function(a){return am(a,"overlay_viewable_immediate_impression",um(km))},a.overlay_unviewable_impression=function(a){return am(a,"overlay_unviewable_impression",
um(km))},a.overlay_viewable_end_of_session_impression=function(a){return am(a,"overlay_viewable_end_of_session_impression",um(km))},a);
wk.getInstance().I=3};
xn=function(a){a.re=!1;wn(a.Wd(),a.md)};
zn=function(a,b,c,d){d=yn(a,null,d,!0);d.A=c;d.Mn=function(b){a.gn(b)};
Dm([d]);d.md=b;return d};
yn=function(a,b,c,d){a.g||(a.g=a.Zq());c=d?c:-1;return null==a.g||a.A?new Ql(K,b,c,7):new Ql(K,b,c,7,new Nl("measurable_impression",a.g),a.Sm())};
An=function(a,b){var c=[];b&&(wk.getInstance().o=!1,c.push(en.getInstance()));var d=[],e=2===Ci(a,"nio_mode");e&&d.push(new dn(K));0<c.length&&d.push(new Ym(c));e||d.push(new dn(K));return d};
En=function(a){if(!a.K){a.K=!0;try{var b=Gi(),c=wk.getInstance();Hi=b;Bn=wl();nm(km,!1);zm();if("nis"!=c.Ya&&"gsv"!=c.Ya)if(K.document.body&&K.document.body.getBoundingClientRect){km.l.oq=0;km.l.sn=Gi()-b;var d=!!Ci(c.nb,"osd"),e=An(c.nb,d&&c.l&&c.o&&"exc"!=c.Ya),f=dm.getInstance();f.l=e;if(em(f,function(){c.o=!1;Cn()}))km.done||mm();
else if(!c.l&&vl()&&Cm(km,K))mm();else if(c.l&&"exc"!=c.Ya)if(c.o&&!d){var k=en.getInstance();Dk(k,a);k.initialize()}else Cn();else mm()}else Dn=!0}catch(l){throw km.reset(),l;}}};
Fn=function(a){var b=wk.getInstance();if(null==a.o)switch(b.Ya){case "nis":a.o="n";break;case "gsv":a.o="m";break;default:a.o="h"}return a.o};
Hn=function(a,b,c){if(null==a.g)return b.Nh|=4,!1;a=Ol(a.g,c,b);b.Nh|=a;return 0==a};
Cn=function(){sm()?mm():(km.A.cancel(),In="i",km.done=!0)};
Jn=function(a,b,c){if(!b.Vw){var d=am(b,"start",um(km));a=a.l.g(d).g;d=Bn||K;var e=[];e.push("v=644v");e.push("r="+c);e.push(a);e.push(Gm(d));c=("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&"+e.join("&")).toString();c=c.substring(0,2E3);a=wi()||K;si(a,c);b.Vw=!0}};
Kn=function(a,b,c,d){pm(km,[a],!um(km),d);Yl(a,c);4!=c&&Xl(a.L,c,a.ik);return am(a,b,um(km))};
Ln=function(a,b,c){if(0==b.Ub){"i"!=In&&(km.done=!1);var d=dm.getInstance();null!=d.g&&bl(b,d.g);ml(b,K,wk.getInstance().Ya,function(b){if(b){b.Dg=!0;switch(b.Wd()){case 1:Jn(a,b,"fp");break;case 2:a.hp(b)}a.np(b)}});
d=g.t(c)?c.opt_nativeTime:void 0;Ki=d=g.va(d)?d:Gi();b.rg=!0;var e=um(km);Rl(b,d,e);pm(km,[b],!e,c)}};
wn=function(a,b){if(g.w(b)){if(1==a)var c=km.g;else if(2==a)c=km.o;else return;var d=g.Ma(c,function(c){return c.Wd()!=a?!1:c.md==b});
0<=d&&(gl(c[d]),g.Va(c,d))}};
Nn=function(a,b,c,d){var e=g.Na(km.g,function(a){return a.element==c});
null!==e&&e.md!=b&&(xn(e),e=null);e||(e=Mn(a,c),e.md=b,e.A=Fn(a),d&&(e.Xf=d));return e};
Mn=function(a,b){var c=yn(a,b,Gi(),!1);c.Mn=(0,g.A)(a.gn,a);0==km.o.length&&(wk.getInstance().H=79463069);Em([c]);mm();return c};
Qn=function(a,b){b.F=0;for(var c in On)null==a[c]&&(b.F|=On[c]);Pn(a,"currentTime");Pn(a,"duration")};
Pn=function(a,b){var c=a[b];g.t(c)&&(a[b]=Math.floor(1E3*c))};
Rn=function(){this.g=void 0;this.l=!1;this.o=0;this.A=-1;this.B="tos"};
Un=function(a){try{var b=a.split(",");return b.length>g.Yb(Sn).length?null:Pk(b,function(a,b){var c=b.toLowerCase().split("=");if(2!=c.length||!g.t(Tn[c[0]])||!Tn[c[0]](c[1]))throw Error("Entry ("+c[0]+", "+c[1]+") is invalid.");a[c[0]]=c[1];return a},{})}catch(c){return null}};
Vn=function(a,b){if(void 0==a.g)return 0;switch(a.B){case "mtos":return a.l?$i(b.l,a.g):$i(b.g,a.g);case "tos":return a.l?Yi(b.l,a.g):Yi(b.g,a.g)}return 0};
Wn=function(a,b,c,d){Nl.call(this,b,d);this.oa=a;this.F=c};
Xn=function(a){Nl.call(this,"fully_viewable_audible_half_duration_impression",a)};
Yn=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
$n=function(a){return!!(1<<a&Zn)};
fo=function(){try{ao()}catch(d){}var a="a=1&b="+Zn+"&",b=[],c=99;(0,g.F)(bo,function(a,c){var d=!1;try{d=a(K)}catch(k){}b[c/32>>>0]|=d<<c%32});
(0,g.F)(b,function(b,e){a+=String.fromCharCode(c+e)+"="+(b>>>0).toString(16)+"&"});
c=105;(0,g.F)(co,function(b){var d="false";try{d=b(K)}catch(f){}a+=String.fromCharCode(c++)+"="+d+"&"});
(0,g.F)(eo,function(b){var d="";try{var f=b(K);d=g.he(g.ae(f),!0)}catch(k){}a+=String.fromCharCode(c++)+"="+d+"&"});
return a.slice(0,-1)};
ao=function(){if(!go){var a=function(){ho=!0;K.document.removeEventListener("webdriver-evaluate",a,!0)};
K.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){io=!0;K.document.removeEventListener("webdriver-evaluate-response",b,!0)};
K.document.addEventListener("webdriver-evaluate-response",b,!0);go=!0}};
jo=function(){this.l=64;this.g=Array(4);this.B=Array(this.l);this.A=this.o=0;this.reset()};
ko=function(a,b,c){c||(c=0);var d=Array(16);if(g.w(b))for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0];c=a.g[1];e=a.g[2];var f=a.g[3];var k=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^
b))+d[3]+3250441966&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+
(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(k<<5&4294967295|
k>>>27);k=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=e+(k<<20&4294967295|
k>>>12);k=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[7]+1735328473&4294967295;e=f+(k<<14&4294967295|
k>>>18);k=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^
b^c)+d[7]+4139469664&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[12]+3873151461&4294967295;
f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[12]+1700485571&4294967295;b=c+
(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[13]+1309151649&4294967295;
c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+(e+(k<<21&4294967295|k>>>11))&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295};
lo=function(){this.l=null};
mo=function(a){return function(b){var c=new jo;c.update(b+a);return de(c.digest()).slice(-8)}};
no=function(a,b){this.l=a;this.o=b};
Ol=function(a,b,c){var d=a.g(c);if(g.Ba(d)){var e={};e=(e.sv="644",e.cb="j",e.e=oo(b),e);var f=am(c,b,um(km));g.kc(e,f);c.jx[b]=f;a=2==c.Wd()?xl(e).join("&"):a.o.g(e).g;try{return d(c.md,a,b),0}catch(k){return 2}}else return 1};
oo=function(a){var b=bc(Qm,function(b){return b==a});
return Om[b]};
po=function(a,b,c){no.call(this,a,b);this.A=c};
qo=function(a,b){this.g=a;this.depth=b};
so=function(a){function b(a,b){return null==a?b:a}
var c=a||ij();a=Math.max(c.length-1,0);var d=nj(c);c=d.g;var e=d.l,f=d.o,k=[];f&&k.push(new qo([f.url,f.Cn?2:0],b(f.depth,1)));e&&e!=f&&k.push(new qo([e.url,2],0));c.url&&c!=f&&k.push(new qo([c.url,0],b(c.depth,a)));d=(0,g.H)(k,function(a,b){return k.slice(0,k.length-b)});
!c.url||(f||e)&&c!=f||(e=li(c.url))&&d.push([new qo([e,1],b(c.depth,a))]);d.push([]);return(0,g.H)(d,g.B(ro,a))};
ro=function(a,b){(0,g.to)(b,function(a){return 0<=a.depth});
var c=Pk(b,function(a,b){return Math.max(a,b.depth)},-1),d=nb(c+2);
d[0]=a;(0,g.F)(b,function(a){return d[a.depth+1]=a.g});
return d};
uo=function(){var a=so();return(0,g.H)(a,function(a){return qj(a)})};
vo=function(){vn.call(this);this.H=void 0;this.B=this.I=null;this.C=!1;this.F={};this.l=new lo};
wo=function(a,b,c){c=c.opt_configurable_tracking_events;if(null!=a.g&&g.za(c)){var d=a.g;(0,g.F)(c,function(a){var c=(0,g.H)(a.pN,function(a){var b=Un(a);if(null==b)a=null;else if(a=new Rn,null!=b.visible&&(a.g=b.visible/100),null!=b.audible&&(a.l=1==b.audible),null!=b.time){var c="mtos"==b.timetype?"mtos":"tos",d=pb(b.time,"%")?"%":"ms";b=(0,window.parseInt)(b.time,10);"%"==d&&(b/=100);"ms"==d?(a.o=b,a.A=-1):(a.o=-1,a.A=b);a.B=void 0===c?"tos":c}return a});
(0,g.Ek)(c,function(a){return null==a})||Ul(b,new Wn(a.id,a.event,c,d))})}};
xo=function(a,b,c){var d=wm(b);d||(d=c.opt_nativeTime||-1,d=zn(a,b,Fn(a),d),c.opt_osdId&&(d.Xf=c.opt_osdId));return d};
yo=function(a,b,c){var d=wm(b);d||(d=zn(a,b,"n",c.opt_nativeTime||-1),d.Ca=wk.getInstance().K);return d};
zo=function(a,b){var c=wm(b);c||(c=zn(a,b,"h",-1));return c};
Ao=function(a){var b=wk.getInstance();switch(Fn(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":if("exc"==b.Ya)return"ima.bridge.triggerExternalActivityEvent";case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};
Do=function(a,b,c,d){c=void 0===c?{}:c;var e={};g.kc(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);if(e.opt_bounds)return a.l.g(Pm("ol",d));if(g.t(d))if(c=Nm(d),g.t(c))if(Dn)b=Pm("ue",d);else if(b=a.Om(b,e)){b:{En(a);"i"==In&&(b.Dg=!0,a.np(b));c=e.opt_fullscreen;g.t(c)&&(b.re=!!c);Db(g.Pb,"CrKey")||Db(g.Pb,"PlayStation")||Db(g.Pb,"Roku")||Fm()||Db(g.Pb,"Xbox")?c=!1:(c=wk.getInstance().Ya,c=K&&K.g||"nis"===c||"gsv"===c?!1:0===Mi());var f=c;if(f){switch(b.Wd()){case 1:Jn(a,b,"pv");break;case 2:a.hp(b)}km.A.cancel();
In="pv";km.done=!0}c=d.toLowerCase();!f&&g.Sa(Bo,c)&&Ln(a,b,e);0!=b.Ub&&g.Sa(Co,c)&&!b.Dg&&!a.A&&b.yi&&(f=b.yi,f.g||(f.g=Pl(f,b)));(f=b.Xg[c])&&Fl(b.ac,f);switch(b.Wd()){case 1:var k=a.L[c];break;case 2:k=a.O[c]}if(k&&(d=k.call(a,b,e,d),g.t(d))){e=Pm(void 0,c);g.kc(e,d);d=e;break b}d=void 0}3==b.Ub&&xn(b);b=d}else b=Pm("nf",d);else b=void 0;else b=a.lk(b,e);if(b){if(d=a.B)d=a.B,e={},e=(e.ptlt=d.B,e),(k=d.l)&&(e.pnk=k),(k=d.o)&&(e.pnc=k),(k=d.A)&&(e.pnmm=k),(d=d.g)&&(e.pns=d),d=e;g.kc(b,d||{})}return a.l.g(b)};
Fo=function(a,b){var c;if(b.Xf&&Eo(a)){var d=a.F[b.Xf];d?c=function(a,b){d.o(a,b)}:null!==d&&Rj("lidar::missingPlayerCallback",Error())}else c=g.z("ima.common.triggerViewabilityMeasurementUpdate");
if(g.Ba(c)){var e=Wl(b);e.nativeVolume=a.H;a.C&&(e.userActivity=a.B);c(b.md,e)}};
Eo=function(a){return"exc"==wk.getInstance().Ya||"h"!=Fn(a)&&Fn(a),!1};
Go=function(a){var b={};return b.viewability=a.g,b.googleViewability=a.o,b.moatInit=a.B,b.moatViewability=a.C,b.integralAdsViewability=a.A,b.doubleVerifyViewability=a.l,b};
Ho=function(a,b,c){c=void 0===c?{}:c;a=Do(vo.getInstance(),b,c,a);return Go(a)};
Io=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
Jo=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=n=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var n=l^d&(f^l);var p=1518500249}else n=d^f^l,p=1859775393;else 60>c?(n=d&f|l&(d|f),p=2400959708):(n=d^f^l,p=3395469782);n=((a<<5|a>>>27)&4294967295)+n+m+p+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=n}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64;for(;d<c;)if(f[n++]=a[d++],p++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,p+=64}
function d(){var a=[],d=8*p;56>n?c(l,56-n):c(l,64-(n-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var n,p;a();return{reset:a,update:c,digest:d,ez:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
Lo=function(a,b,c){var d=[],e=[];if(1==(g.za(c)?2:1))return e=[b,a],(0,g.F)(d,function(a){e.push(a)}),Ko(e.join(" "));
var f=[],k=[];(0,g.F)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];(0,g.F)(d,function(a){e.push(a)});
a=Ko(e.join(" "));a=[c,a];0==k.length||a.push(k.join(""));return a.join("_")};
Ko=function(a){var b=Jo();b.update(a);return b.ez().toLowerCase()};
g.Mo=function(){var a=[],b=Io(String(g.x.location.href)),c=g.x.__OVERRIDE_SID;null==c&&(c=(new Bg(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.x.__SAPISID:g.x.__APISID,null==b&&(b=(new Bg(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.x.location.href);return d&&b&&c?[c,Lo(Io(d),b,a||null)].join(" "):null}return null};
g.No=function(a,b){this.l={};this.g=[];this.ig=this.Aa=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof g.No)for(c=a.pd(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
Po=function(a){if(a.Aa!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Oo(a.l,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.Aa!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Oo(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}};
Oo=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Qo=function(a,b){this.g=this.H=this.A="";this.B=null;this.C=this.l="";this.F=!1;var c;a instanceof g.Qo?(this.F=g.t(b)?b:a.F,g.Ro(this,a.A),this.H=a.H,g.So(this,a.g),g.To(this,a.B),this.l=a.l,Uo(this,a.o.clone()),this.C=a.C):a&&(c=g.Ig(String(a)))?(this.F=!!b,g.Ro(this,c[1]||"",!0),this.H=Vo(c[2]||""),g.So(this,c[3]||"",!0),g.To(this,c[4]),this.l=Vo(c[5]||"",!0),Uo(this,c[6]||"",!0),this.C=Vo(c[7]||"")):(this.F=!!b,this.o=new g.Wo(null,this.F))};
g.Ro=function(a,b,c){a.A=c?Vo(b,!0):b;a.A&&(a.A=a.A.replace(/:$/,""))};
g.So=function(a,b,c){a.g=c?Vo(b,!0):b;return a};
g.To=function(a,b){if(b){b=Number(b);if((0,window.isNaN)(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null;return a};
Uo=function(a,b,c){b instanceof g.Wo?(a.o=b,Xo(a.o,a.F)):(c||(b=Yo(b,Zo)),a.o=new g.Wo(b,a.F))};
g.$o=function(a,b,c){a.o.set(b,c);return a};
g.ap=function(a){return a instanceof g.Qo?a.clone():new g.Qo(a,void 0)};
Vo=function(a,b){return a?b?(0,window.decodeURI)(a.replace(/%25/g,"%2525")):(0,window.decodeURIComponent)(a):""};
Yo=function(a,b,c){return g.w(a)?(a=(0,window.encodeURI)(a).replace(b,bp),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
bp=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
g.Wo=function(a,b){this.Aa=this.g=null;this.l=a||null;this.o=!!b};
cp=function(a){a.g||(a.g=new g.No,a.Aa=0,a.l&&Mg(a.l,function(b,c){a.add(sb(b),c)}))};
ep=function(a,b){cp(a);b=dp(a,b);return Oo(a.g.l,b)};
g.fp=function(a,b,c){a.remove(b);0<c.length&&(a.l=null,a.g.set(dp(a,b),g.Za(c)),a.Aa=a.Aa+c.length)};
dp=function(a,b){var c=String(b);a.o&&(c=c.toLowerCase());return c};
Xo=function(a,b){b&&!a.o&&(cp(a),a.l=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),g.fp(this,c,a))},a));
a.o=b};
g.gp=function(a){g.I.call(this);this.l=a;this.g={}};
hp=function(a,b,c,d,e,f){if(g.za(c))for(var k=0;k<c.length;k++)hp(a,b,c[k],d,e,f);else{b=Ye(b,c,d||a.handleEvent,e,f||a.l||a);if(!b)return a;a.g[b.key]=b}return a};
g.ip=function(a){g.Rb(a.g,function(a,c){this.g.hasOwnProperty(c)&&g.mf(a)},a);
a.g={}};
g.kp=function(a,b){return a.replace(jp,function(a,d){try{var c=gc(b,d);if(null==c)return a;c=c.toString();if(""==c||!g.qb(g.Gb(c)))return(0,window.encodeURIComponent)(c).replace(/%2C/g,",")}catch(f){}return a})};
lp=function(a){g.Ne.call(this,a)};
mp=function(a){this.g=a};
op=function(){var a=np();a:{if($b(a.g,"disableExperiments")&&(a=a.g.disableExperiments,g.ua(a)))break a;a=!1}return a};
pp=function(a){if($b(a.g,"forceExperimentIds")){a=a.g.forceExperimentIds;var b=[],c=0;g.za(a)&&(0,g.F)(a,function(a){g.va(a)&&(b[c++]=a)});
return b}return null};
qp=function(){this.l=null;try{so(void 0)}catch(a){}};
np=function(){var a=rp;if(null==a.l){var b={};var c=(new g.Qo(yd().location.href)).o;if(ep(c,"tcnfp"))try{b=JSON.parse(c.get("tcnfp"))}catch(d){}a.l=new mp(b)}return a.l};
sp=function(a,b,c){this.oa=a;this.g=g.$c(b||0,0,1);this.l=null!=c?c:!0};
tp=function(a){this.oa=a;this.l=new g.No;this.g=null};
up=function(a){var b=Math.random(),c=0,d=a.l.hc();(0,g.F)(d,function(a){c+=a.g},a);
var e=1<c?c:1;a.g=null;for(var f=0,k=0;k<d.length;++k)if(f+=d[k].g,f/e>=b){a.g=d[k];break}};
yp=function(){this.l=null!=g.x.G_testRunner;this.g=new g.No;rp.g()||(vp(this,"GvnExternalLayer",31061774,.01),vp(this,"GvnExternalLayer",31061775,.01),vp(this,"GvnExternalLayer",41351088,.01),vp(this,"GvnExternalLayer",41351089,.01),vp(this,"GvnExternalLayer",420706008,.05),vp(this,"GvnExternalLayer",420706009,.05),vp(this,"GvnExternalLayer",41351073,.01),vp(this,"GvnExternalLayer",41351074,.01),vp(this,"GvnExternalLayer",41351075,.01),vp(this,"GvnExternalLayer",634360101,0),vp(this,"GvnExternalLayer",
634360102,0),vp(this,"GvnExternalLayer",21592080,.1),vp(this,"GvnExternalLayer",21592081,.1),vp(this,"GvnExternalLayer",21592082,.01),vp(this,"GvnExternalLayer",413051059,.05),vp(this,"GvnExternalLayer",413051060,.05),vp(this,"GvnExternalLayer",324123E3,.05),vp(this,"GvnExternalLayer",324123001,.05),vp(this,"GvnExternalLayer",420706068,.01),vp(this,"GvnExternalLayer",420706069,.01),vp(this,"GvnExternalLayer",324123020,.01),vp(this,"GvnExternalLayer",324123021,.01),vl(!1)&&(ii(K.top)?(vp(this,"ActiveViewExternalLayer",
509445010,.01),vp(this,"ActiveViewExternalLayer",509445011,.01)):(vp(this,"ActiveViewExternalLayer",509445012,.01),vp(this,"ActiveViewExternalLayer",509445013,.01))),vp(this,"ActiveViewExternalLayer",509445016,.01),vp(this,"ActiveViewExternalLayer",509445017,.01));wp(this);var a=np();a=pp(a);null!=a&&(this.l=!1,xp(this,a.map(String)))};
Ap=function(){zp||(zp=new yp);return zp};
vp=function(a,b,c,d){g.qb(g.Gb(b))||(0,window.isNaN)(c)||0>=c||(c=new sp(c,d),Bp(a,b).l.set(c.oa,c))};
wp=function(a){op()||(0,g.F)(a.g.hc(),function(a){up(a)},a)};
xp=function(a,b){(0,g.F)(b,function(a){var b=Number(a);a="FORCED_PUB_EXP_LAYER_"+a;(0,window.isNaN)(b)||0>=b||g.qb(g.Gb(a))||(Bp(this,a).g=new sp(b,0,!0))},a)};
Cp=function(a,b){return a.l?!1:(0,g.Ek)(a.g.hc(),function(a){return!!a.g&&a.g.oa==b})};
Dp=function(){var a=Ap();if(a.l)return"";var b=[];(0,g.F)(a.g.hc(),function(a){(a=a.g)&&a.l&&b.push(a.oa)});
return b.sort().join(",")};
Bp=function(a,b){var c=a.g.get(b);null==c&&(c=new tp(b),a.g.set(b,c));return c};
Gp=function(a){try{var b=(new g.Qo(a)).g;b=b.replace(/^www./i,"");return(0,g.Ek)(Ep,function(a){return Fp(a,b)})}catch(c){return!1}};
Fp=function(a,b){if(g.qb(g.Gb(b)))return!1;a=a.toLowerCase();b=b.toLowerCase();return"*."==a.substr(0,2)?(a=a.substr(2),a.length>b.length?!1:b.substr(-a.length)==a&&(b.length==a.length||"."==b.charAt(b.length-a.length-1))):a==b};
Hp=function(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)};
Lp=function(a){try{a:{var b=a,c=void 0,d=b.length-11-2;if(!(-1==b.indexOf("URL_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray)){c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray();d={};for(var e=0;e<c.length;++e){d.URL_SIGNALS=c[e];var f=g.kp(b,d);if(2048>f.length){a=f;break a}}}a=b}}catch(n){}try{f=a;b=!1;Hp(f,Ip)?b=!1:null!=f&&Gp(f)?b=!0:"https:"==window.location.protocol&&(Hp(f,Jp)||rp.g())&&(b=!0);if(b){var k=new g.Qo(f);"https"==k.A?a=f:(g.Ro(k,"https"),a=k.toString())}else a=
f;var l=Ap(),m=!rp.g()||Cp(l,41351089);k=!1;rp.g()||!Cp(Ap(),634360102)||(k=!0);Kp.jJ(a,m,k)}catch(n){}};
Mp=function(a){return(a=a.exec(g.Pb))?a[1]:""};
g.Op=function(a){return 0<=g.Kb(Np,a)};
g.Rp=function(a,b,c){g.va(a)?(this.date=Pp(a,b||0,c||1),Qp(this,c||1)):g.Ca(a)?(this.date=Pp(a.getFullYear(),a.getMonth(),a.getDate()),Qp(this,a.getDate())):(this.date=new Date((0,g.G)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Qp(this,a))};
Pp=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Qp=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
Sp=function(){this.g=null;this.o="";this.l=null};
Up=function(){var a="h."+Tp.o;null!=Tp.l&&(a+="/n."+Tp.l,null!=Tp.g&&(a+="/"+Tp.g));return a};
Vp=function(){this.l=.01>Math.random();this.g=Math.floor(4503599627370496*Math.random())};
Yp=function(a,b){var c=b||{};c.lid=43;c.sdkv=Up();var d=Dp();g.qb(g.Gb(d))||(c.e=d);c=Wp(a,c);var e=new g.Qo("http://pagead2.googlesyndication.com/pagead/gen_204");g.Rb(c,function(a,b){g.$o(e,b,null!=a?"boolean"==typeof a?a?"t":"f":""+a:"")},a);
c=Xp();g.Ro(e,c.A);Lp(e.toString())};
Wp=function(a,b){b.id="ima_html5";var c=Xp();b.c=a.g;b.domain=c.g;return b};
Xp=function(){var a=yd(),b=window.document;return new g.Qo(a.parent==a?a.location.href:b.referrer)};
Zp=function(){g.rf.call(this);new g.No;this.ea=new g.gp(this);g.J(this,this.ea)};
aq=function(){null!=$p||($p=new Zp);return $p};
bq=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
cq=function(){g.rf.call(this);this.g=null;this.ea=new g.gp(this);g.J(this,this.ea);this.C=new g.No;this.B=new g.No;this.l=!1;this.o=null};
eq=function(){null!=dq||(dq=new cq);return dq};
fq=function(a){if(g.Ba(window.Goog_AdSense_Lidar_getUrlSignalsArray)){var b={};b.pageSignals=window.Goog_AdSense_Lidar_getUrlSignalsArray();a.g.send("activityMonitor","pageSignals",b)}};
gq=function(a,b,c){var d=b?a.B.get(b):rp.o;a={};null!=c&&(a.fullscreen=c);c="";try{c=ei(function(){return d},a)}catch(e){c="sdktle;"+Cb(e.name,12)+";"+Cb(e.message,40)}return c};
g.hq=function(){};
g.iq=function(a,b){var c=a.g(b);return-1==(0==c?null:c)?"rtl":"ltr"};
jq=function(){throw Error("Do not instantiate directly");};
kq=function(){jq.call(this)};
mq=function(a,b){var c="key_"+a+":"+b,d=lq[c];if(void 0===d||0>d)lq[c]=0;else if(0==d)throw Error('Encountered two active delegates with the same priority ("'+a+":"+b+'").');};
g.nq=function(a){if(a.classList)return a.classList;a=a.className;return g.w(a)&&a.match(/\S+/g)||[]};
g.oq=function(a,b){return a.classList?a.classList.contains(b):g.Sa(g.nq(a),b)};
g.M=function(a,b){a.classList?a.classList.add(b):g.oq(a,b)||(a.className+=0<a.className.length?" "+b:b)};
g.pq=function(a,b){if(a.classList)(0,g.F)(b,function(b){g.M(a,b)});
else{var c={};(0,g.F)(g.nq(a),function(a){c[a]=!0});
(0,g.F)(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}};
g.qq=function(a,b){a.classList?a.classList.remove(b):g.oq(a,b)&&(a.className=(0,g.Ld)(g.nq(a),function(a){return a!=b}).join(" "))};
g.rq=function(a,b){a.classList?(0,g.F)(b,function(b){g.qq(a,b)}):a.className=(0,g.Ld)(g.nq(a),function(a){return!g.Sa(b,a)}).join(" ")};
g.O=function(a,b,c){c?g.M(a,b):g.qq(a,b)};
g.sq=function(a,b){var c=!g.oq(a,b);g.O(a,b,c)};
tq=function(){if(!g.vd)return!1;try{return new window.ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}};
g.vq=function(a){if("undefined"!=typeof window.DOMParser)return(new window.DOMParser).parseFromString(a,"application/xml");if(uq){var b=new window.ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};
g.wq=function(a,b,c){g.I.call(this);this.oa=null;this.o=!1;this.B=a;this.A=c;this.g=b||window;this.l=(0,g.A)(this.zz,this)};
xq=function(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
yq=function(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.P=function(a,b,c){g.I.call(this);this.g=a;this.zc=b||0;this.l=c;this.o=(0,g.A)(this.Jr,this)};
g.zq=function(a,b){a.isActive()||a.start(b)};
g.Aq=function(a){a.stop();a.Jr()};
g.Bq=function(a){a.isActive()&&g.Aq(a)};
g.Cq=function(){};
g.Dq=function(a){return":"+(a.g++).toString(36)};
g.Eq=function(a){g.rf.call(this);this.U=a||g.ld();this.oa=null;this.zg=!1;this.l=null;this.B=void 0;this.C=this.H=this.I=null};
Fq=function(a,b){a.H&&(0,g.F)(a.H,b,void 0)};
Gq=function(a,b){this.type=a;this.label=b};
Hq=function(a){new Gq(a,1)};
Iq=function(a){new Gq(a,2)};
Jq=function(a){new Gq(a,3)};
g.Kq=function(a){if(g.x.JSON)try{return g.x.JSON.parse(a)}catch(b){}return ug(a)};
Lq=function(){};
Mq=function(){};
Nq=function(a,b,c,d,e,f,k,l){this.g=a;this.F=b;this.o=c;this.B=d;this.A=e;this.C=f;this.l=k;this.H=l};
Oq=function(a,b){if(0==b)return a.g;if(1==b)return a.l;var c=bd(a.g,a.o,b),d=bd(a.o,a.A,b),e=bd(a.A,a.l,b);c=bd(c,d,b);d=bd(d,e,b);return bd(c,d,b)};
Pq=function(a,b){var c=(b-a.g)/(a.l-a.g);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,k=0;8>k;k++){f=Oq(a,c);var l=(Oq(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(k=0;1E-6<Math.abs(f-b)&&8>k;k++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=Oq(a,c);return c};
Qq=function(){this.g=this.o=this.A=5E3};
g.Rq=function(a,b,c,d,e,f){a=a.clone();b=b.clone();var k=0;if(d||0!=c)c&4?a.x-=b.width+(d?d.right:0):c&2?a.x-=b.width/2:d&&(a.x+=d.left),c&1?a.y-=b.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){k=a;c=b;d=0;65==(f&65)&&(k.x<e.left||k.x>=e.right)&&(f&=-2);132==(f&132)&&(k.y<e.top||k.y>=e.bottom)&&(f&=-5);k.x<e.left&&f&1&&(k.x=e.left,d|=1);if(f&16){var l=k.x;k.x<e.left&&(k.x=e.left,d|=4);k.x+c.width>e.right&&(c.width=Math.min(e.right-k.x,l+c.width-e.left),c.width=Math.max(c.width,0),d|=4)}k.x+c.width>
e.right&&f&1&&(k.x=Math.max(e.right-c.width,e.left),d|=1);f&2&&(d|=(k.x<e.left?16:0)|(k.x+c.width>e.right?32:0));k.y<e.top&&f&4&&(k.y=e.top,d|=2);f&32&&(l=k.y,k.y<e.top&&(k.y=e.top,d|=8),k.y+c.height>e.bottom&&(c.height=Math.min(e.bottom-k.y,l+c.height-e.top),c.height=Math.max(c.height,0),d|=8));k.y+c.height>e.bottom&&f&4&&(k.y=Math.max(e.bottom-c.height,e.top),d|=2);f&8&&(d|=(k.y<e.top?64:0)|(k.y+c.height>e.bottom?128:0));e=d}else e=256;k=e}e=new g.hh(0,0,0,0);e.left=a.x;e.top=a.y;e.width=b.width;
e.height=b.height;return{rect:e,status:k}};
g.Sq=function(a){g.I.call(this);this.Mb=1;this.o=[];this.A=0;this.g=[];this.l={};this.B=!!a};
Tq=function(a,b,c){g.Jf(function(){a.apply(b,c)})};
g.Uq=function(a){this.g=a};
Vq=function(a){this.g=a};
Wq=function(a){this.data=a};
Xq=function(a){return!g.t(a)||a instanceof Wq?a:new Wq(a)};
Yq=function(a){this.g=a};
g.Zq=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.G)()||!!b&&b>(0,g.G)()};
g.$q=function(a){this.g=a};
ar=function(){};
br=function(){};
cr=function(a){this.g=a};
dr=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a};
er=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};
fr=function(a,b){this.l=a;this.g=b+"::"};
g.gr=function(a){var b=new dr;return b.isAvailable()?a?new fr(b,a):b:null};
hr=function(a,b){this.Mb=a;this.g=b};
ir=function(a){this.g=[];if(a)a:{if(a instanceof ir){var b=a.pd();a=a.hc();if(0>=this.g.length){for(var c=this.g,d=0;d<b.length;d++)c.push(new hr(b[d],a[d]));break a}}else b=g.Yb(a),a=g.Xb(a);for(d=0;d<b.length;d++)jr(this,b[d],a[d])}};
jr=function(a,b,c){var d=a.g;d.push(new hr(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].Mb>c.Mb)a[b]=a[d],b=d;else break;a[b]=c};
kr=function(){ir.call(this)};
lr=function(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");e.rel="preload";e.href=Db("preload","stylesheet")?Gc(b):b instanceof Fc?Gc(b):b instanceof Jc?g.Kc(b):Oc(b).Gf();d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}};
or=function(a){return mr.test(a)&&!nr.test(a)};
qr=function(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+(0,window.encodeURIComponent)(g.x.location.hostname)];pr[3]>=(0,g.G)()&&b.push("adsid="+(0,window.encodeURIComponent)(pr[1]));return a+"?"+b.join("&")};
tr=function(){rr=g.x;pr=rr.googleToken=rr.googleToken||{};var a=(0,g.G)();pr[1]&&pr[3]>a&&0<pr[2]||(pr[1]="",pr[2]=-1,pr[3]=-1,pr[4]="",pr[6]="");sr=rr.googleIMState=rr.googleIMState||{};or(sr[1])||(sr[1]=".google.com");g.za(sr[5])||(sr[5]=[]);g.ua(sr[6])||(sr[6]=!1);g.za(sr[7])||(sr[7]=[]);g.va(sr[8])||(sr[8]=0)};
ur=function(){tr();return pr[1]};
Ar=function(a){tr();var b=rr.googleToken[5]||0;a&&(0!=b||pr[3]>=(0,g.G)()?vr.xq(a):(vr.vr().push(a),vr.gp()));pr[3]>=(0,g.G)()&&pr[2]>=(0,g.G)()||vr.gp()};
Br=function(a){g.x.processGoogleToken=g.x.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",k="NT"==f,l=(0,window.parseInt)(b.freshLifetimeSecs||"",10),m=(0,window.parseInt)(b.validLifetimeSecs||"",10);k&&!m&&(m=3600);var n=b["1p_jar"]||"";b=b.pucrd||"";tr();1==e?vr.VI():vr.UI();if(!f&&vr.shouldRetry())or(".google.com")&&(sr[1]=".google.com"),vr.gp();else{var p=rr.googleToken=rr.googleToken||{},u=0==e&&f&&g.w(f)&&!k&&g.va(l)&&0<l&&g.va(m)&&0<m&&
g.w(n);k=k&&!vr.Km()&&(!(pr[3]>=(0,g.G)())||"NT"==pr[1]);var v=!(pr[3]>=(0,g.G)())&&0!=e;if(u||k||v)k=(0,g.G)(),l=k+1E3*l,m=k+1E3*m,1E-5>Math.random()&&si(g.x,"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),p[5]=e,p[1]=f,p[2]=l,p[3]=m,p[4]=n,p[6]=b,tr();if(u||!vr.Km()){e=vr.vr();for(f=0;f<e.length;f++)vr.xq(e[f]);e.length=0}}};
Ar(a)};
Cr=function(a,b){this.B=[];this.O=a;this.L=b||null;this.A=this.g=!1;this.o=void 0;this.I=this.U=this.F=!1;this.C=0;this.l=null;this.H=0};
Er=function(a,b,c){a.g=!0;a.o=c;a.A=!b;Dr(a)};
Gr=function(a){if(a.g){if(!a.I)throw new Fr(a);a.I=!1}};
Hr=function(a,b,c){a.B.push([b,c,void 0]);a.g&&Dr(a)};
Ir=function(a){return(0,g.Ek)(a.B,function(a){return g.Ba(a[1])})};
Dr=function(a){if(a.C&&a.g&&Ir(a)){var b=a.C,c=Jr[b];c&&(g.x.clearTimeout(c.oa),delete Jr[b]);a.C=0}a.l&&(a.l.H--,delete a.l);b=a.o;for(var d=c=!1;a.B.length&&!a.F;){var e=a.B.shift(),f=e[0],k=e[1];e=e[2];if(f=a.A?k:f)try{var l=f.call(e||a.L,b);g.t(l)&&(a.A=a.A&&(l==b||a.isError(l)),a.o=b=l);if(Nf(b)||"function"===typeof g.x.Promise&&b instanceof g.x.Promise)d=!0,a.F=!0}catch(m){b=m,a.A=!0,Ir(a)||(c=!0)}}a.o=b;d&&(l=(0,g.A)(a.K,a,!0),d=(0,g.A)(a.K,a,!1),b instanceof Cr?(Hr(b,l,d),b.U=!0):b.then(l,
d));c&&(b=new Kr(b),Jr[b.oa]=b,a.C=b.oa)};
Fr=function(){Ja.call(this)};
Lr=function(){Ja.call(this)};
Kr=function(a){this.oa=g.x.setTimeout((0,g.A)(this.l,this),0);this.g=a};
Mr=function(a){Ae(this,a,null)};
Nr=function(a,b){for(;se(b)&&4!=b.l;)switch(b.o){case 1:var c=ve(b);Fe(a,1,c);break;case 2:c=ve(b);Fe(a,2,c);break;default:te(b)}return a};
Pr=function(a){Ae(this,a,Or)};
Qr=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Sr=function(a){Qr(g.Rr,arguments)};
g.Tr=function(a,b){return a in g.Rr?g.Rr[a]:b};
Ur=function(){};
Vr=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Q(b)}}:a};
g.Q=function(a,b,c,d,e){var f=g.z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.Tr("ERRORS",[]),f.push([a,b,c,d,e]),g.Sr("ERRORS",f))};
Wr=function(a){g.Q(a,"WARNING",void 0,void 0,void 0)};
Yr=function(){if(!Xr)return null;var a=Xr();return"open"in a?a:null};
g.Zr=function(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.$r=function(a,b){g.Ba(a)&&(a=Vr(a));return window.setTimeout(a,b)};
g.as=function(a,b){g.Ba(a)&&(a=Vr(a));return window.setInterval(a,b)};
g.bs=function(a){window.clearTimeout(a)};
g.cs=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=sb(e[0]||"");e=sb(e[1]||"");f in b?g.za(b[f])?$a(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.ds=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return g.cs(a)};
es=function(a){a=a.split(",");return a=a.map(function(a){return g.ds(a)})};
g.fs=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.ds(1<a.length?a[1]:a[0])):{}};
g.hs=function(a,b){return gs(a,b||{},!0)};
g.is=function(a,b){return gs(a,b||{},!1)};
gs=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.ds(e[1]||"");for(var f in b)if(c||!$b(e,f))e[f]=b[f];return g.Ug(a,e)+d};
js=function(a){if(!b)var b=window.location.href;var c=g.Ig(a)[1]||null,d=g.Kg(a);c&&d?(a=g.Ig(a),b=g.Ig(b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.Kg(b)==d&&g.Lg(b)==g.Lg(a):!0;return a};
ks=function(a){a||(a=window.document.location.href);a=g.Ig(a)[1]||null;return null!==a&&"https"==a};
ls=function(a){a=g.Kg(a);a=null===a?null:a.split(".").reverse();return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1};
ns=function(a,b){b=void 0===b?{}:b;var c=js(a),d;for(d in ms){var e=g.Tr(ms[d]),f;if((f=e)&&!(f=c)){f=d;var k=g.Tr("CORS_HEADER_WHITELIST")||{},l=g.Kg(a);f=l?(k=k[l])?g.Sa(k,f):!1:!0}f&&(b[d]=e)}return b};
rs=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=os(a,b);var d=ps(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.bs(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.x;c?b.fb&&b.fb.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Kc&&b.Kc.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Ou&&0<b.timeout&&(f=g.$r(function(){e||(e=!0,g.bs(f),b.Ou.call(b.context||g.x))},b.timeout))}else g.qs(a,b)};
g.qs=function(a,b){var c=b.format||"JSON";a=os(a,b);var d=ps(a,b),e=!1,f,k=ts(a,function(a){if(!e){e=!0;f&&g.bs(f);var d=g.Zr(a),k=null;if(d||400<=a.status&&500>a.status)k=us(c,a,b.oN);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.x;d?b.fb&&b.fb.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Kc&&b.Kc.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Xc&&0<b.timeout&&(f=g.$r(function(){e||(e=!0,k.abort(),g.bs(f),b.Xc.call(b.context||g.x,k))},b.timeout));
return k};
os=function(a,b){b.rN&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.Tr("XSRF_FIELD_NAME",void 0),d=b.Ec;d&&(d[c]&&delete d[c],a=g.hs(a,d));return a};
ps=function(a,b){var c=g.Tr("XSRF_FIELD_NAME",void 0),d=g.Tr("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.rb,k=g.Tr("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.qN||g.Kg(a)&&!b.withCredentials&&g.Kg(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.rb&&b.rb[k]||(f||(f={}),f[c]=d);f&&g.w(e)&&(e=g.ds(e),g.kc(e,f),e=b.zv&&"JSON"==b.zv?JSON.stringify(e):g.Sg(e));f=e||f&&!g.dc(f);!vs&&f&&"POST"!=b.method&&(vs=!0,g.Q(Error("AJAX request with postData should use POST")));
return e};
us=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ws(b):null)d={},(0,g.F)(b.getElementsByTagName("*"),function(a){d[a.tagName]=xs(a)})}c&&ys(d);
return d};
ys=function(a){if(g.Ca(a))for(var b in a)"html_content"==b||pb(b,"_html")?a[b]=g.Zc(g.Cc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ys(a[b])};
ws=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
xs=function(a){var b="";(0,g.F)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.zs=function(a,b){b.method="POST";b.rb||(b.rb={});g.qs(a,b)};
ts=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Vr(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Yr();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=ns(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
g.As=function(){var a=/Chrome\/(\d+)/.exec(g.Pb);return a?(0,window.parseFloat)(a[1]):window.NaN};
Ds=function(){return Bs("android")&&Bs("chrome")&&!Cs()};
g.Es=function(){return Bs("cobalt")};
Fs=function(){return Bs("cobalt")&&Bs("; youtubevr")};
Gs=function(){return Bs("cobalt")&&Bs("appletv")};
Hs=function(){return Bs("(ps3; leanback shell)")||Bs("ps3")&&g.Es()};
Is=function(){return Bs("(ps4; leanback shell)")||Bs("ps4")&&g.Es()};
Js=function(){var a=/WebKit\/([0-9]+)/.exec(g.Pb);return!!(a&&600<=(0,window.parseInt)(a[1],10))};
Ks=function(){return Bs("iemobile")||Bs("windows phone")&&Bs("edge")};
Cs=function(){return Bs("trident/")||Bs("edge/")};
Ls=function(){return Bs("smart-tv")&&Bs("samsung")};
Bs=function(a){var b=g.Pb;return b?0<=b.toLowerCase().indexOf(a):!1};
g.Ns=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!g.Es()?a&&(a=g.Kc(g.Nc(a)),"about:invalid#zClosurez"===a?a="":(a=g.Rc(Vc(a)),a=g.rb(g.xg(a))),g.qb(a)||(a=g.Bd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.jd(a).body.appendChild(a))):e?ts(a,b,"POST",e,d):g.Tr("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?ts(a,b,"GET","",d):Ms(a,b))};
Os=function(a,b,c){c=void 0===c?"":c;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,c)?b&&b():g.Ns(a,b,void 0,void 0,c)}catch(d){g.Ns(a,b,void 0,void 0,c)}};
Ms=function(a,b){var c=new window.Image,d=""+Ps++;Qs[d]=c;c.onload=c.onerror=function(){b&&Qs[d]&&b();delete Qs[d]};
c.src=a};
g.Rs=function(a){return g.Tr("EXPERIMENT_FLAGS",{})[a]};
Ts=function(a,b){var c=g.hc(b);return new g.Pf(function(b,e){c.fb=function(a){g.Zr(a)?b(a):e(new Ss("Request failed, status="+a.status,"net.badstatus",a))};
c.onError=function(a){e(new Ss("Unknown request error","net.unknown",a))};
c.Xc=function(a){e(new Ss("Request timed out","net.timeout",a))};
g.qs(a,c)})};
Us=function(a,b,c,d){function e(d,l,m){return g.cg(d,function(d){return 0>=l||403===d.g.status?Vf(new Ss("Request retried too many times","net.retryexhausted",d.g)):f(m).then(function(){return e(Ts(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(a){return new g.Pf(function(b){(0,window.setTimeout)(b,a)})}
return e(Ts(a,b),c-1,d)};
Ss=function(a,b,c){Ja.call(this,a+", errorCode="+b);this.errorCode=b;this.g=c;this.name="PromiseAjaxError"};
Vs=function(a){this.o=void 0===a?null:a;this.l=0;this.g=null};
Ws=function(a){var b=new Vs;a=void 0===a?null:a;b.l=2;b.g=void 0===a?null:a;return b};
Xs=function(a){var b=new Vs;a=void 0===a?null:a;b.l=1;b.g=void 0===a?null:a;return b};
Zs=function(a){Ja.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ys;this.isTimeout=a instanceof Ss&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof hg};
Ys=function(){Ja.call(this,"Biscotti ID is missing from server")};
$s=function(){return g.Zb(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||g.Tr("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||g.Rs("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id"};
et=function(){if("1"===g.Zb(g.Tr("PLAYER_CONFIG",{}),"args","privembed"))return Vf(Error("Biscotti ID is not available in private embed mode"));at||(at=g.cg(Ts($s(),bt).then(ct),function(a){return dt(2,a)}));
return at};
ct=function(a){a=a.responseText;if(!g.ob(a,")]}'"))throw new Ys;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ys;a=a.id;ft(a);at=Xs(a);gt(18E5,2);return a};
dt=function(a,b){var c=new Zs(b);ft("");at=Ws(c);0<a&&gt(12E4,a-1);throw c;};
gt=function(a,b){g.$r(function(){g.cg(Ts($s(),bt).then(ct,function(a){return dt(b,a)}),g.wa)},a)};
ft=function(a){g.y("yt.ads.biscotti.lastId_",a,void 0)};
ht=function(){try{var a=g.z("yt.ads.biscotti.getId_");return a?a():et()}catch(b){return Vf(b)}};
it=function(a){Ja.apply(this,arguments)};
jt=function(){var a=new it("ID is missing"),b=new it("Timeout"),c=null,d=!1;Br(function(){c=ur();d=!0});
if(d)return c?Xs(c):Ws(a);var e=new g.Pf(function(b,c){Br(function(){var d=ur();d?b(d):c(a)})}),f=og(5E3).then(function(){return Vf(b)});
return ag(Yf([e,f]),function(){return f.cancel()})};
kt=function(){g.z("yt.ads.yuzu.getId_")||g.y("yt.ads.yuzu.getId_",jt,void 0);try{return g.z("yt.ads.yuzu.getId_")()}catch(a){return Vf(a)}};
g.mt=function(a,b,c){a&&(a.dataset?a.dataset[g.lt(b)]=String(c):a.setAttribute("data-"+b,c))};
g.nt=function(a,b){return a?a.dataset?a.dataset[g.lt(b)]:a.getAttribute("data-"+b):null};
g.lt=function(a){return ot[a]||(ot[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
qt=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=pt+"VisibilityState";if(b in a)return a[b]};
rt=function(a,b){var c;(0,g.Ek)(a,function(a){c=b[a];return!!c});
return c};
vt=function(a){var b;tt()?g.ut()==a&&(b=window.document):b=a;b&&(a=rt(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))&&a.call(b)};
wt=function(a){return g.Na(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
xt=function(){var a=window.document;return g.Na(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
tt=function(){return!!rt(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],window.document)};
g.ut=function(){var a=rt(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],window.document);return a?a:null};
At=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in zt||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.l=a.pageY}};
Bt=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.g=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.l=a.clientY+b}};
Dt=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return bc(Ct,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.Ft=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Dt(a,b,c,d);if(e)return e;e=++Et.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new At(d);if(!g.Vd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new At(b);
b.currentTarget=a;return c.call(a,b)};
k=Vr(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Ct[e]=[a,b,c,k,d];return e};
g.Gt=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.F)(a,function(a){if(a in Ct){var b=Ct[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ct[a]}}))};
g.Ht=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
It=function(a){a=a||window.event;return a.path&&a.path.length?a.path[0]:g.Ht(a)};
Jt=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
Kt=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;window.document.body&&window.document.documentElement&&(g.va(b)||(b=a.clientX+window.document.body.scrollLeft+window.document.documentElement.scrollLeft),g.va(c)||(c=a.clientY+window.document.body.scrollTop+window.document.documentElement.scrollTop));return new g.dd(b,c)};
g.Lt=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Mt=function(a){a=a||window.event;return!1===a.returnValue||a.ms&&a.ms()};
g.Nt=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
g.Ot=function(a,b,c){var d;return d=g.Ft(a,b,function(){g.Gt(d);c.apply(a,arguments)},!1)};
Pt=function(a){for(var b in Ct)Ct[b][0]==a&&g.Gt(b)};
Qt=function(a){this.I=a;this.g=null;this.A=0;this.B=null;this.o=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.Pa=0;this.F=g.Ft(window,"mousemove",(0,g.A)(this.K,this));this.H=g.as((0,g.A)(this.C,this),25)};
g.Rt=function(a){g.I.call(this);this.L=[];this.Pb=a||this};
St=function(a,b,c,d){for(var e=0;e<c.length;e++)a.M(b,c[e],d)};
g.Tt=function(a){for(;a.L.length;){var b=a.L.pop();b.target.removeEventListener(b.name,b.Hj)}};
g.R=function(){g.I.call(this);this.oc=new g.Sq;g.J(this,this.oc)};
g.Vt=function(a,b,c,d){g.R.call(this);this.o=!!b;this.C=a;this.I=c||a;this.H=!!d;this.g=new g.Rt(this);g.J(this,this.g);this.B=this.F=null;this.A=this.l=!1;b&&(g.xd&&a.setAttribute("draggable","true"),a.style.touchAction="none");Ut(this)};
Wt=function(a,b,c){a.g.M(a.I,b,c,void 0,!a.o)};
Ut=function(a){a.B=null;a.F=null;Wt(a,Xt("over"),a.Rs);Wt(a,"touchstart",a.Rn);a.o&&Wt(a,Xt("down"),a.CE)};
Yt=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.F)return d}return null};
Xt=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
bu=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.hc(Zt);this.assets=a.assets||{};this.attrs=a.attrs||g.hc($t);this.params=a.params||g.hc(au);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
cu=function(a){a instanceof bu||(a=new bu(a));return a};
g.hu=function(a,b,c){var d=g.du();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){g.eu[e]&&b.apply(c||window,d)};
try{fu[a]?k():g.$r(k,0)}catch(l){g.Q(l)}},c);
g.eu[e]=!0;g.gu[a]||(g.gu[a]=[]);g.gu[a].push(e);return e}return 0};
g.ju=function(a,b){var c=g.hu(a,function(a){b.apply(void 0,arguments);g.iu(c)},void 0);
return c};
g.iu=function(a){var b=g.du();b&&(g.va(a)?a=[a]:g.w(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.F)(a,function(a){b.unsubscribeByKey(a);delete g.eu[a]}))};
g.ku=function(a,b){var c=g.du();return c?c.publish.apply(c,arguments):!1};
g.lu=function(a,b){fu[a]=!0;var c=g.du();c&&c.publish.apply(c,arguments);fu[a]=!1};
g.du=function(){return g.z("ytPubsubPubsubInstance")};
g.uu=function(a,b){mu[a.endpoint]=b;if(g.Rs("very_optimistically_create_gel_client"))for(var c in nu)if(!ou[c]){var d=mu[c];d&&(ou[c]=new d)}a.Sj?(c=a.Sj,d={},c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId),pu[a.Sj.token]=d,c=qu(a.endpoint,a.Sj.token)):c=qu(a.endpoint);c.push(a.payload);c.length>=(Number(g.Rs("web_logging_max_batch")||0)||20)?ru():tu()};
ru=function(){g.bs(vu);if(!g.dc(nu)){for(var a in nu){var b=ou[a];if(!b){var c=mu[a];if(!c)continue;b=new c;ou[a]=b}c=void 0;var d=a,e=b,f=wu[d],k=xu[d]||{};xu[d]=k;b=Math.round(g.yu());for(c in nu[d]){var l={context:g.zu(e.g)};l[f]=qu(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var m=pu[c];if(m)a:{var n=l,p=c;if(m.videoId)var u="VIDEO";else if(m.playlistId)u="PLAYLIST";else break a;n.credentialTransferTokenTargetId=m;n.context=n.context||
{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:p,scope:u}]}delete pu[c];g.Au(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete nu[a]}g.dc(nu)||tu()}};
tu=function(){g.bs(vu);vu=g.$r(ru,g.Tr("LOGGING_BATCH_TIMEOUT",1E4))};
qu=function(a,b){b=void 0===b?"":b;nu[a]=nu[a]||{};nu[a][b]=nu[a][b]||[];return nu[a][b]};
Bu=function(){};
g.Cu=function(a,b){var c=b;(0,window.isNaN)(c)&&(c=void 0);var d=g.z("yt.scheduler.instance.addJob");d?c=d(a,1,c):void 0===c?(a(),c=window.NaN):c=g.$r(a,c||0);return c};
Du=function(){};
g.Eu=function(){return!!g.z("yt.scheduler.instance")};
g.Fu=function(a){if(!(0,window.isNaN)(a)){var b=g.z("yt.scheduler.instance.cancelJob");b?b(a):g.bs(a)}};
Gu=function(a){var b=g.z("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
Ju=function(){if(null==g.z("_lact",window)){var a=(0,window.parseInt)(g.Tr("LACT"),10);a=(0,window.isFinite)(a)?(0,g.G)()-Math.max(a,0):-1;g.y("_lact",a,window);g.y("_fact",a,window);-1==a&&Hu();g.Ft(window.document,"keydown",Hu);g.Ft(window.document,"keyup",Hu);g.Ft(window.document,"mousedown",Hu);g.Ft(window.document,"mouseup",Hu);g.Rs("lact_local_listeners")?(g.Ft(window,"resize",function(){Iu("resize",200)}),g.Ft(window,"scroll",function(){Iu("scroll",200)}),new Qt(function(){Iu("mouse",100)}),
g.Ft(window.document,"touchstart",Hu),g.Ft(window.document,"touchend",Hu)):(g.hu("page-mouse",Hu),g.hu("page-scroll",Hu),g.hu("page-resize",Hu))}};
Iu=function(a,b){Ku[a]||(Ku[a]=!0,g.Cu(function(){Hu();Ku[a]=!1},b))};
Hu=function(){null==g.z("_lact",window)&&Ju();var a=(0,g.G)();g.y("_lact",a,window);-1==g.z("_fact",window)&&g.y("_fact",a,window);(a=g.z("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Lu=function(){var a=g.z("_lact",window);return null==a?-1:Math.max((0,g.G)()-a,0)};
g.Nu=function(a,b,c,d){var e=g.Mu,f={};f.eventTimeMs=Math.round(c||g.yu());f[a]=b;f.context={lastActivityMs:String(c?-1:g.Lu())};g.uu({endpoint:"log_event",payload:f,Sj:d},e)};
Ou=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.zu=function(a){a={client:{hl:a.wn,gl:a.vn,clientName:a.un,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.Tr("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.Tr("DELEGATED_SESSION_ID")});return a};
g.Mu=function(a){this.g=a||{innertubeApiKey:g.Tr("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.Tr("INNERTUBE_API_VERSION",void 0),un:g.Tr("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.Tr("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wn:g.Tr("INNERTUBE_CONTEXT_HL",void 0),vn:g.Tr("INNERTUBE_CONTEXT_GL",void 0),wk:g.Tr("INNERTUBE_HOST_OVERRIDE",void 0)||"",uA:!!g.Tr("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
g.Au=function(a,b,c,d){!g.Tr("VISITOR_DATA")&&.01>Math.random()&&g.Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.Tr("VISITOR_DATA","")},method:"POST",rb:c,zv:"JSON",Xc:function(){d.Xc()},
Ou:d.Xc,fb:function(a,b){d.fb&&d.fb(b)},
uN:function(a){d.fb&&d.fb(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
tN:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f;a.g.uA?f="Bearer "+g.z("gapi.auth.getToken")().lN:f=g.Mo();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.Tr("SESSION_INDEX",0));var k="",l=a.g.wk;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+Ou(a.g.innertubeApiVersion,b,c)+"?alt=json&key="+a.g.innertubeApiKey;try{g.Rs("use_fetch_for_op_xhr")?rs(a,e):g.zs(a,e)}catch(m){if("InvalidAccessError"==m)g.Q(Error("An extension is blocking network request."),"WARNING");else throw m;
}};
g.Pu=function(a,b,c){this.l=a;this.A=b;this.o=c;this.g=void 0};
Ru=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=(0,g.G)();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Qu)for(b=1,c=0;c<Qu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Qu.charCodeAt(c),b++;return a};
Su=function(){for(var a=Ru(),b=[],c=0;c<a.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c]&63));return b.join("")};
g.Tu=function(){return(0,g.H)(Ru(),function(a){return(a&15).toString(16)}).join("")};
g.Wu=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.G)()+1E3*d:0;if((d=d?(0,g.Uu)():Vu())&&window.JSON){g.w(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.Xu=function(a){var b=Vu(),c=(0,g.Uu)();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if(!g.w(d))try{d=c.get(a)}catch(e){}if(!g.w(d))return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
g.Yu=function(a){try{var b=Vu(),c=(0,g.Uu)();b&&b.remove(a);c&&c.remove(a)}catch(d){}};
g.Zu=function(){var a=g.Tr("client-screen-nonce")||g.Tr("EVENT_ID");return a?a:null};
g.av=function(a,b,c){g.$u.set(""+a,b,c,"/","youtube.com",!1)};
g.bv=function(){return g.Xu("yt-remote-session-screen-id")};
g.dv=function(a){Qr(cv,arguments)};
g.S=function(a,b,c){b=void 0===b?{}:b;a=(a=a in cv?cv[a]:c)||"";c={};for(var d in b)c.ll=d,a=a.replace(new RegExp("\\$"+c.ll,"gi"),function(a){return function(){return b[a.ll]}}(c)),c={ll:c.ll};
return a};
ev=function(a,b,c){this.sampleRate=a||0;this.g=b||0;this.spatialAudioType=c||0};
fv=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
iv=function(a,b,c,d,e,f,k,l,m,n,p,u){u=void 0===u?0:u;this.width=a;this.height=b;this.quality=f||gv(a,b);this.g=g.hv[this.quality];this.isAccelerated=!!k;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(a=l)||(a=this.fps,b=this.projectionType,c=g.hv[this.quality],a=0==c?g.S("YTP_AUTO"):c+(2==b||3==b||4==b?"s":"p")+(55<a?"60":49<a?"50":39<a?"48":""));this.qualityLabel=a;this.l=m||"";this.primaries=n||"";this.o=!1!==p;this.A=u};
jv=function(a){return 1280<=a.width||720<=a.height};
kv=function(a){return"smpte2084"==a.l||"arib-std-b67"==a.l};
gv=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=lv[0],f=0;f<lv.length;f++){var k=lv[f],l=g.hv[k];if(c>=1.3*Math.floor(16*l/9)||d>=1.3*l)return e;e=k}return"tiny"};
ov=function(a,b,c,d,e,f,k,l){this.id=a;this.containerType=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.g=k||0;this.A=l||0;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.ob=void 0===e?null:e;this.bc=void 0===f?null:f;this.l=mv[nv(this)]||"";this.o=null};
nv=function(a){return a.id.split(";",1)[0]};
pv=function(a){return"9"==a.l||"("==a.l||"9h"==a.l||"(h"==a.l};
qv=function(a){return"9h"==a.l||"(h"==a.l};
g.rv=function(a){return 1==a.containerType};
tv=function(a){return 0<=a.indexOf("opus")||0<=a.indexOf("vorbis")||0<=a.indexOf("mp4a")};
uv=function(a){return 0<=a.indexOf("vp9")||0<=a.indexOf("vp8")||0<=a.indexOf("avc1")||0<=a.indexOf("av1")};
g.vv=function(a){return a.includes("vtt")||a.includes("text/mp4")};
wv=function(a,b,c,d,e,f,k){var l=new ev;b in g.hv||(b="small");d&&e?(e=(0,window.parseInt)(e,10),d=(0,window.parseInt)(d,10)):(e=g.hv[b],d=Math.round(16*e/9));b=new iv(d,e,0,null,void 0,b,f,void 0,void 0,void 0,k);a=(0,window.unescape)(a.replace(/&quot;/g,'"'));return new ov(c,a,l,b)};
xv=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=g.cs(b||"");var c={};(0,g.F)(this.experimentIds,function(a){c[a]=!0});
this.experiments=c;this.g=!!c["9414740"]};
g.T=function(a,b){return"true"==a.flags[b]};
g.yv=function(a,b){return(0,window.parseFloat)(a.flags[b])||0};
zv=function(a,b){var c=a.flags[b];return c?c.toString():""};
Av=function(a,b){this.Of=a;this.g=!!b;this.l=!1};
Bv=function(a){this.Bf=a};
Cv=function(a,b,c){this.l=a||0;this.g=b||0;this.o=c};
Dv=function(a,b,c){return new Cv(g.hv[a]||0,g.hv[b]||0,c)};
Ev=function(a){var b=g.hv.auto;return a.l==b&&a.g==b};
Gv=function(a,b){if(b.o&&Ev(b))return Fv;if(b.o||Ev(a))return b;if(a.o||Ev(b))return a;var c=a.l&&b.l?Math.max(a.l,b.l):a.l||b.l,d=a.g&&b.g?Math.min(a.g,b.g):a.g||b.g;c=Math.min(c,d);return c==a.l&&d==a.g?a:new Cv(c,d,!1)};
g.Iv=function(a){var b=a.g||a.l;return cc(Hv,function(a){return g.hv[a]==b})||"auto"};
Jv=function(a,b){var c=g.hv[b];return a.l<=c&&(!a.g||a.g>=c)};
Kv=function(){var a=g.Xu("yt-player-volume")||{},b=a.volume;return{volume:(0,window.isNaN)(b)?100:g.$c(Math.floor(b),0,100),muted:!!a.muted}};
Lv=function(a){g.Wu("yt-player-bandwidth",a,2592E3)};
Mv=function(){return g.Xu("yt-player-quality")||"auto"};
Nv=function(a){g.Wu("yt-player-watch-later-pending",a)};
Ov=function(){return g.Xu("yt-player-performance-cap")||0};
Pv=function(){return g.Xu("yt-player-headers-readable")||!1};
Rv=function(a,b,c){g.w(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Qv(a)};
Qv=function(a,b,c){if(g.Ca(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}};
Sv=function(a,b,c,d){!a&&(void 0===c?0:c)&&Wr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
Uv=function(a){return(a=Tv.exec(a))?a[0]:""};
Wv=function(a){var b=void 0===b?!1:b;return Sv(Vv.test(a),a,b,"Nielsen OCR URL")};
Yv=function(a){var b=void 0===b?!1:b;return Sv(Xv.test(a),a,b,"Active View 3rd Party Integration URL")};
$v=function(a){var b=void 0===b?!1:b;return Sv(Zv.test(a),a,b,"Google/YouTube Brand Lift URL")};
bw=function(a){var b=void 0===b?!1:b;return Sv(aw.test(a),a,b,"Trusted Stream URL")};
g.dw=function(a){var b=void 0===b?!1:b;return Sv(cw.test(a),a,b,"Trusted Image URL")};
fw=function(a){var b=void 0===b?!1:b;return Sv(ew.test(a),a,b,"Trusted Ad Domain URL")};
g.hw=function(a){var b=void 0===b?!1:b;return Sv(gw.test(a),a,b,"Trusted Promoted Video Domain URL")};
jw=function(a,b){b=void 0===b?!1:b;return Sv(iw.test(a),a,b,"Captions URL")};
kw=function(a){a=new g.Qo(a);g.Ro(a,window.document.location.protocol);g.So(a,window.document.location.hostname);window.document.location.port&&g.To(a,window.document.location.port);return a.toString()};
lw=function(a){a=new g.Qo(a);g.Ro(a,window.document.location.protocol);return a.toString()};
nw=function(){return"ytp-id-"+mw++};
g.pw=function(a){g.I.call(this);this.Z={};this.Ma={};this.element=ow(this,a)};
ow=function(a,b,c){c=c||"svg"==b.D;if(c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",b.D);g.qw&&(b.N||(b.N={}),b.N.focusable="false")}else d=g.Dd(b.D);var e=b.J;if(e){if(e=rw(a,d,"class",e))tw(a,d,"class",e),a.Z[e]=d}else if(e=b.W){for(var f=0;f<e.length;f++)a.Z[e[f]]=d;tw(a,d,"class",e.join(" "))}if(e=b.G)for(var k=f=0;k<e.length;k++){var l=e[k];if(l)if(g.w(l))l=rw(a,d,"child",l),null!=l&&d.appendChild(g.Fd(l));else if(l.element)d.appendChild(l.element);else{var m=l;l=ow(a,
m,c);d.appendChild(l);m.Ia&&(m=nw(),l.id=m,l=window.document.createElementNS("http://www.w3.org/2000/svg","use"),l.setAttribute("class","ytp-svg-shadow"),l.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+m),Id(d,l,f++))}}if(b=b.N){c=d;for(var n in b)e=b[n],null!=e&&tw(a,c,n,g.w(e)?rw(a,c,n,e):e)}return d};
g.uw=function(a){g.Jd(a.element)};
rw=function(a,b,c,d){return"{{"==d.substr(0,2)?(a.Ma[d]=[b,c],null):d};
tw=function(a,b,c,d){if("child"==c){g.Hd(b);if(!g.za(d)||g.Ca(d)&&g.w(d.D))d=[d];c=[];for(var e=0;e<d.length;e++){var f=d[e];if(null!=f){var k=f.nodeType;if(1==k||3==k)c.push(f);else if(g.Ca(f)&&g.w(f.D))c.push(ow(a,f));else if(f.element)c.push(f.element);else if(g.w(f)&&-1!=f.indexOf("\n"))for(f=f.split("\n"),k=0;k<f.length;k++)0<k&&c.push(g.Dd("BR")),c.push(g.Fd(f[k]));else c.push(g.Fd(f))}}for(a=0;a<c.length;a++)b.appendChild(c[a])}else"style"==c?b.style.cssText=d?d:"":null===d?b.removeAttribute(c):
b.setAttribute(c,d.toString())};
g.U=function(a){g.pw.call(this,a);this.Nc="";this.ba=!0;this.U=[]};
g.vw=function(a,b){b?a.show():a.hide()};
g.ww=function(a){g.U.call(this,a);this.T=new g.R;g.J(this,this.T)};
g.yw=function(a,b,c,d){g.ww.call(this,a);this.priority=b;c&&g.xw(this,c);d&&this.sb(d)};
g.zw=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex="0");return{D:c?"a":"div",W:b,N:a,G:[{D:"div",J:"ytp-menuitem-label",G:["{{label}}"]},{D:"div",J:"ytp-menuitem-content",G:["{{content}}"]}]}};
g.xw=function(a,b){a.updateValue("label",b)};
Cw=function(a,b){g.I.call(this);this.app=a;this.g=!0;this.o=null;this.I={};this.K={};this.A={};this.F=[];this.C={};this.B={};this.l=null;this.L=new window.Set;this.playerType=b;Aw(this,"cueVideoById",this.ht);Aw(this,"loadVideoById",this.gC);Aw(this,"cueVideoByUrl",this.SB);Aw(this,"loadVideoByUrl",this.hC);Aw(this,"playVideo",this.Vc);Aw(this,"pauseVideo",this.Wb);Aw(this,"stopVideo",this.Ae);Aw(this,"clearVideo",this.QB);Aw(this,"getVideoBytesLoaded",this.ZB);Aw(this,"getVideoBytesTotal",this.aC);
Aw(this,"getVideoLoadedFraction",this.fo);Aw(this,"getVideoStartBytes",this.bC);Aw(this,"cuePlaylist",this.RB);Aw(this,"loadPlaylist",this.fC);Aw(this,"nextVideo",this.wh);Aw(this,"previousVideo",this.Gi);Aw(this,"playVideoAt",this.kt);Aw(this,"setShuffle",this.setShuffle);Aw(this,"setLoop",this.jC);Aw(this,"getPlaylist",this.Be);Aw(this,"getPlaylistIndex",this.it);Aw(this,"getPlaylistId",this.getPlaylistId);Aw(this,"loadModule",this.Fi);Aw(this,"unloadModule",this.Nk);Aw(this,"setOption",this.Wc);
Aw(this,"getOption",this.Ob);Aw(this,"getOptions",this.Ig);Aw(this,"mute",this.mute);Aw(this,"unMute",this.Ce);Aw(this,"isMuted",this.isMuted);Aw(this,"setVolume",this.setVolume);Aw(this,"getVolume",this.Nb);Aw(this,"seekTo",this.wb);Aw(this,"getPlayerState",this.Pf);Aw(this,"getPlaybackRate",this.kc);Aw(this,"setPlaybackRate",this.ze);Aw(this,"getAvailablePlaybackRates",this.vh);Aw(this,"getPlaybackQuality",this.Ei);Aw(this,"setPlaybackQuality",this.Hi);Aw(this,"getAvailableQualityLevels",this.co);
Aw(this,"getCurrentTime",this.xa);Aw(this,"getDuration",this.Bc);Aw(this,"addEventListener",this.addEventListener);Aw(this,"removeEventListener",this.removeEventListener);Aw(this,"getVideoUrl",this.getVideoUrl);Aw(this,"getDebugText",this.Di);Aw(this,"getVideoEmbedCode",this.jt);Aw(this,"getVideoData",this.Y);Aw(this,"addCueRange",this.gt);Aw(this,"removeCueRange",this.lt);Aw(this,"setSize",this.kC);Aw(this,"getApiInterface",this.VB);Aw(this,"destroy",this.TB);Aw(this,"showVideoInfo",this.ot);Aw(this,
"hideVideoInfo",this.dC);Aw(this,"getMediaReferenceTime",this.XB);if(this.app.UA){var c=this.app.g;c.experiments&&g.T(c.experiments,"html5_enable_360_api")&&(Aw(this,"getSphericalProperties",this.eo),Aw(this,"setSphericalProperties",this.Mk))}Bw(this,"getInternalApiInterface",this.WB);Bw(this,"getAdState",this.UB);Bw(this,"isNotServable",this.eC);Bw(this,"getUpdatedConfigurationData",this.YB);Bw(this,"sendAbandonmentPing",this.iC);Bw(this,"setAutonav",this.mt);Bw(this,"setAutonavState",this.ho);Bw(this,
"startInteractionLogging",this.lC);Bw(this,"channelSubscribed",this.OB);Bw(this,"channelUnsubscribed",this.PB);Bw(this,"handleExternalCall",this.cC)};
Aw=function(a,b,c){var d=void 0===d?!0:d;a.I[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Dw(a,b);return c.apply(a,f)};
Bw(a,b,c);a.F.push(b)};
Ew=function(a,b,c){var d=void 0===d?!0:d;a.K[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Dw(a,b);return c.apply(a,f)};
Bw(a,b,c);a.F.push(b)};
Bw=function(a,b,c){var d=void 0===d?!1:d;a.A[b]=function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];d&&Dw(a,b);return c.apply(a,f)}};
Fw=function(a){a.l||(a.l={},g.Ia(a.l,a.I),g.Ia(a.l,a.K),a.l.addEventListener=(0,g.A)(a.lz,a),a.l.removeEventListener=(0,g.A)(a.mz,a));return a.l};
Dw=function(a,b){var c=a.app.g;c.jg&&!a.L.has(b)&&(a.L.add(b),c={callerUrl:c.U,methodName:b},g.T(a.app.g.experiments,"web_player_gel_logging_killswitch")||(g.T(a.app.g.experiments,"web_player_gel_direct")?g.Nu("webPlayerApiCalled",c,void 0,void 0):a.ka("onLogToGel",{payload_name:"webPlayerApiCalled",payload:c})))};
Hw=function(a,b,c){b=g.$c(Math.floor(b),0,100);(0,window.isFinite)(b)&&Gw(a.app,{volume:b,muted:a.isMuted()},c)};
Iw=function(a,b){Gw(a.app,{muted:!0,volume:a.Nb()},b)};
Jw=function(a,b){Gw(a.app,{muted:!1,volume:Math.max(5,a.Nb())},b)};
g.Kw=function(a){return(a=a.app.A.L)?a.Xn:null};
g.Lw=function(a){this.languageCode=a.languageCode;this.languageName=a.languageName||null;this.g=a.languageOriginal||null;this.id=a.id||null;this.isDefault=a.is_default||!1};
g.Mw=function(a){a=void 0===a?{}:a;this.L=a.formats||"";this.o=a.format||1;if(1==this.o)for(var b=this.L.split(","),c=0;c<b.length;c++){var d=(0,window.parseInt)(b[c],10);(0,window.isNaN)(d)||(this.o=Math.max(d,this.o))}this.l=a.languageCode||"";this.C=a.languageName;this.A=a.kind||"";this.B=a.name;this.oa=a.id;this.O=a.is_servable;this.H=a.is_translateable;this.I=a.url||null;this.F=a.vss_id||"";this.g=null;if(a=a.translationLanguage)this.g=new g.Lw(a)};
g.Nw=function(a){var b=a.C||"",c=[b];"asr"==a.A&&-1==b.indexOf("(")&&c.push(" ("+g.S("YTP_ASR_SETTINGS_LABEL")+")");a.B&&c.push(" - "+a.B);a.g&&c.push(" >> "+a.g.languageName);return c.join("")};
Ow=function(a,b){this.id=a;this.ob=b;this.captionTracks=[];this.ci=this.Dm=this.g=null;this.yq="UNKNOWN"};
Pw=function(){var a=qt();return!(!a||"visible"==a)};
Rw=function(a){var b=Qw();b&&window.document.addEventListener(b,a,!1)};
Qw=function(){if(window.document.visibilityState)var a="visibilitychange";else{if(!window.document[pt+"VisibilityState"])return"";a=pt+"visibilitychange"}return a};
Sw=function(a,b,c,d,e,f,k,l){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.na=a;this.sourceURL=e;this.startTime=b;this.l=k||0;this.range=f||null;this.g=l||!1};
g.Tw=function(){this.segments=[]};
Uw=function(a,b){if(b>a.Qb())a.segments=[];else{var c=g.Ma(a.segments,function(a){return a.na>=b},a);
0<c&&a.segments.splice(0,c)}};
Vw=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.g=e?0:8;this.dataOffset=this.offset+this.g;this.l=e};
$w=function(a){var b=a.data.getInt32(a.offset+a.g);a.g+=4;return b};
ex=function(a){var b=a.data.getUint32(a.offset+a.g);a.g+=4;return b};
fx=function(a){var b=a.data;var c=a.offset+a.g;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.g+=8;return b};
gx=function(a){var b=[];do{var c=a.data.getUint8(a.offset+a.g);b.push(c);a.g++}while(0!=c);b.pop();return String.fromCharCode.apply(String,b)};
hx=function(a){this.data=new window.DataView(new window.ArrayBuffer(a));this.g=0};
ix=function(a,b){a.data.setInt32(a.g,b);a.g+=4};
jx=function(a,b){for(var c=0;c+4<=b.size;)ix(a,b.data.getUint32(b.offset+c)),c+=4;for(;c<b.size;)a.data.setUint8(a.g++,b.data.getUint8(b.offset+c++))};
kx=function(a,b,c){for(var d=8,e=g.q(c),f=e.next();!f.done;f=e.next())d+=f.value.size;ix(a,d);ix(a,b);b=g.q(c);for(f=b.next();!f.done;f=b.next())jx(a,f.value)};
lx=function(a,b,c){this.Pd=a;this.durationSecs=b;this.context=c};
mx=function(a,b){this.g=a;this.A=void 0===b?null:b;this.l=(0,window.parseInt)(this.g["Sequence-Number"],10)||0;this.ingestionTime=((0,window.parseInt)(this.g["Ingestion-Walltime-Us"],10)||0)/1E6;this.B=(((0,window.parseInt)(this.g["First-Frame-Time-Us"],10)||0)+((0,window.parseInt)(this.g["First-Frame-Uncertainty-Us"],10)||0))/1E6;this.H=((0,window.parseInt)(this.g["Target-Duration-Us"],10)||0)/1E6;this.F="T"==this.g["Overlayed-With-Slate"];this.o="T"==this.g["Stream-Finished"];this.C="T"==this.g.Streamable};
nx=function(a,b,c,d,e){this.l=a||0;this.pitch=b||0;this.yaw=c||0;this.roll=d||0;this.g=e;e.getUint32(4)};
ox=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0==a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
qx=function(a,b,c){var d=px(a,0,1836019558);if(!d)return null;var e=px(a,d.dataOffset,1835427940),f=px(a,d.dataOffset,1953653094),k=px(a,d.dataOffset,1886614376);if(!e||!f)return null;var l=px(a,f.dataOffset,1952868452),m=px(a,f.dataOffset,1953658222),n=px(a,f.dataOffset,1952867444);if(!l||!m||!n)return null;var p=px(a,f.dataOffset,1935763823),u=px(a,f.dataOffset,1935763834),v=0;if(p){v=$w(p);var D=$w(p);if(0!=v||1!=D)return null;v=$w(p)}D=px(a,f.dataOffset,1935828848);f=px(a,f.dataOffset,1936158820);
var C=$w(l),N=$w(l),fa=C&2,qa=C&1?fx(l):0,Oa=fa?$w(l):0,L=C&8?$w(l):0,Tb=C&16?$w(l):0,be=C&32?$w(l):0;C=$w(m);var Ed=C&1,Sc=C&4,Eg=C&256;l=C&512;var ff=C&1024,tb=C&2048;C=$w(m);var Ni=Ed?$w(m):0,Rf=Sc?$w(m):0;Ed=[];for(var Oi=[],Be=[],Fg=[],Tc=0,Dc=0,Pi=0;Pi<C;Pi++){var fn=Eg?$w(m):L;l&&Ed.push($w(m));var Gg=be;Sc&&0==Pi?Gg=Rf:ff&&(Gg=$w(m));Oi.push(Gg);Gg=tb?$w(m):0;0==Pi&&(Tc=Gg);Be.push(Dc+Gg);Fg.push(Pi);Dc+=fn}1<=Math.abs(Dc-b)&&c({flaw:"segDurMismatch",dts:Dc.toFixed(),seg:b.toFixed()});g.gb(Fg,
function(a,b){return Be[a]-Be[b]});
c=[];for(Dc=0;Dc<C;Dc++)c[Fg[Dc]]=Dc;Dc=fa?4:0;be=16*C;Sc=68+Dc+n.size+be+(p?p.size:0)+(u?u.size:0)+(D?D.size:0)+(f?f.size:0)+(k?k.size:0);m=Sc-d.size;L=new hx(Sc+d.offset);d.offset&&L.Pj(a,0,d.offset);ix(L,Sc);ix(L,1836019558);jx(L,e);ix(L,Sc-24-(k?k.size:0));ix(L,1953653094);ix(L,16+Dc);ix(L,1952868452);ix(L,131072|(fa?2:0));ix(L,N);fa&&ix(L,Oa);jx(L,n);ix(L,20+be);ix(L,1953658222);ix(L,16781057);ix(L,C);ix(L,qa+Ni+m);for(a=Dc=0;a<C;a++)e=c[a],d=Math.round(b*e/C),e=Math.round(b*(e+1)/C)-d,d=d-Dc+
Tc,ix(L,e),ix(L,l?Ed[a]:Tb),ix(L,Oi[a]),ix(L,d),Dc+=e;p&&(ix(L,p.size),ix(L,1935763823),ix(L,0),ix(L,1),ix(L,v+m));u&&jx(L,u);D&&jx(L,D);f&&jx(L,f);k&&jx(L,k);return L.data.buffer};
rx=function(a,b){var c=px(a.data,a.dataOffset,1952868452),d=px(a.data,a.dataOffset,1953658222),e=$w(c);$w(c);e&2&&$w(c);c=e&8?$w(c):0;var f=$w(d),k=f&1;e=f&4;var l=f&256,m=f&512,n=f&1024;f&=2048;var p=ex(d);k&&$w(d);e&&$w(d);for(var u=k=0;u<p;u++){var v=l?$w(d):c;m&&$w(d);e&&0==u||!n||$w(d);f&&$w(d);k+=v}return k/b};
ux=function(a){a=new window.DataView(a.buffer,a.byteOffset,a.byteLength);return(a=g.sx(a,1836476516))?tx(a):window.NaN};
vx=function(a){var b=g.sx(a,1937011556);if(!b)return null;b=px(a,b.dataOffset+8,1635148593);if(!b)return null;var c=px(a,b.dataOffset+78,1936995172),d=px(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),b=c.data.getUint8(c.offset+c.g),c.g+=1,b){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=px(a,d.dataOffset,1886547818)){var k=px(a,d.dataOffset,1886546020),l=px(a,d.dataOffset,2037673328);if(!l&&(l=px(a,d.dataOffset,1836279920),
!l))return null;k&&(k.skip(4),c=$w(k)/65536,f=$w(k)/65536,e=$w(k)/65536);a=new window.DataView(l.data.buffer,l.dataOffset,l.size-8);return new nx(b,c,f,e,a)}return null};
px=function(a,b,c){for(;wx(a,b);){var d=xx(a,b);if(d.type==c)return d;b+=d.size}return null};
g.sx=function(a,b){for(var c=0;wx(a,c);){var d=xx(a,c);if(d.type==b)return d;c=yx(d.type)?c+8:c+d.size}return null};
zx=function(a,b){if(a.data.getUint8(a.dataOffset)){var c=a.data,d=a.dataOffset+4;c.setUint32(d,Math.floor(b/4294967296));c.setUint32(d+4,b&4294967295)}else a.data.setUint32(a.dataOffset+4,b)};
Ax=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
xx=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new Vw(a,b,c,d)};
tx=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
Bx=function(a){return a.data.getUint32(a.dataOffset+8)};
Cx=function(a){var b=a.data.getUint8(a.dataOffset);a.data.getUint16(a.dataOffset+(0==b?22:30));return a.data.getUint32(a.dataOffset+(0==b?28:36))};
wx=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
yx=function(a){return 1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a};
Dx=function(a){return(a=px(a,0,1836019558))?a.offset+a.size:null};
Ex=function(a,b){for(var c=px(a,0,b);c;){var d=c;d.type=1936419184;d.data.setUint32(d.offset+4,1936419184);c=px(a,c.offset+c.size,b)}};
Fx=function(a,b){for(var c=[],d=b.dataOffset,e=b.offset+b.size;d<e&&wx(a,d);){var f=xx(a,d);c.push(f);d+=f.size}return c};
Gx=function(a){for(var b=0,c=[];wx(a,b);){var d=xx(a,b);1886614376==d.type&&c.push(d);b=yx(d.type)?b+8:b+d.size}return c};
g.Hx=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
Ix=function(a){a=a.split("-");return 2==a.length&&(a=new g.Hx((0,window.parseInt)(a[0],10),(0,window.parseInt)(a[1],10)),!(0,window.isNaN)(a.start)&&!(0,window.isNaN)(a.end)&&!(0,window.isNaN)(a.length)&&0<a.length)?a:null};
Jx=function(a,b){return new g.Hx(a,a+b-1)};
Lx=function(a,b,c,d,e,f,k,l,m){this.g=b;this.range=c;this.type=a;this.na=0<=d?d:-1;this.startTime=e||0;this.duration=f||0;this.l=k||0;this.La=0<=l?l:this.range?this.range.length:window.NaN;this.C=!!m;this.range?(this.o=this.l+this.La==this.range.length,this.B=this.startTime+this.duration*this.l/this.range.length,this.F=this.duration*this.La/this.range.length,this.A=this.B+this.F):(this.o=0!=this.La,Kx(this));this.H=[]};
Kx=function(a){a.B=a.startTime;a.F=a.duration;a.A=a.B+a.F};
Mx=function(a,b,c){var d=!(!b||b.g!=a.g||b.type!=a.type||b.na!=a.na);return c?d&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.l+b.La==a.l+a.La:d};
Nx=function(a){return 1==a.type||2==a.type};
Ox=function(a,b,c){return c||a.g==b.g?a.range&&b.range?a.range.start+a.l+a.La==b.range.start+b.l:a.na==b.na?a.l+a.La==b.l:a.na+1==b.na&&0==b.l&&a.o:!1};
Px=function(a,b){return Ox(a,b)||1E-6>=Math.abs(a.A-b.B)||a.na+1==b.na&&0==b.l&&a.o?!0:!1};
Qx=function(a){1==a.length||(0,g.to)(a,function(a){return!!a.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new g.Hx(a[0].range.start+a[0].l,b.range.start+b.l+b.La-1)};
Sx=function(a){var b="";g.Rb(Rx(a),function(a,d){b+=d+"="+a+","});
return b.slice(0,-1)};
Rx=function(a){var b={};b.itag=nv(a.g.info);b.seg=String(a.na);a.range&&(b.range=""+(a.range.start+a.l)+"-"+(a.range.start+a.l+a.La-1));b.time=""+a.B.toFixed(1)+"-"+(a.B+a.F).toFixed(1);b.off=String(a.l);b.len=String(a.La);a.o&&(b.end="1");a.C&&(b.eos="1");return b};
Tx=function(a,b,c,d){a=new Lx(a.type,a.g,a.range,a.na,a.startTime,a.duration,b,c,d&&a.C);a.o=d;return a};
Ux=function(a,b){a.na=b.na;if(a.startTime!=b.startTime||a.duration!=b.duration)a.startTime=b.startTime,a.duration=b.duration,Kx(a)};
Vx=function(a,b){this.l=a;this.g=0;this.o=b||0};
Wx=function(a){return a.g>=a.l.byteLength};
ay=function(a,b){var c=new Vx(b);if(!Xx(c,[408125543,374648427,174,224]))return!1;c=Yx(c);if(Zx(c,a)){for(var d=0;a;)a>>>=8,d++;var e=c.o+c.g-d;d=$x(c,!0)+d-1;var f;f||(f=Math.ceil(Math.log(d+2)/Math.log(2)/7));var k=1<<8-f;for(c=[];c.length<f-1;)c.unshift(d%256),d=Math.floor(d/256);c.unshift(d|k);b.setUint8(e,236);for(f=0;f<c.length;f++)b.setUint8(e+1+f,c[f]);return!0}return!1};
cy=function(a){by(new Vx(a));ay(30320,a)&&ay(21432,a)};
hy=function(a){var b=new Vx(a);by(b);if(Xx(b,[408125543,374648427,174,224]))b=Yx(b);else return null;for(var c=a=null;!Wx(b);){var d=$x(b,!1);if(21432==d)switch(dy(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=Yx(b):ey(b)}if(!c)return null;for(var e,f=d=b=null;!Wx(c);)switch($x(c,!1)){case 30321:if(3!=dy(c))return null;break;case 30324:b=fy(c);break;case 30323:f=fy(c);break;case 30325:d=fy(c);break;case 30322:e=$x(c,!0);e=gy(c,e);e=new window.DataView(e.buffer,
e.byteOffset,e.byteLength);break;default:ey(c)}return e?new nx(a,b,f,d,e):null};
Yx=function(a){var b=$x(a,!0),c=a.l.byteOffset+a.g;c=new window.DataView(a.l.buffer,c,Math.min(b,a.l.buffer.byteLength-c));c=new Vx(c,a.o+a.g);a.g+=b;return c};
dy=function(a){for(var b=$x(a,!0),c=iy(a),d=1;d<b;d++)c=256*c+iy(a);return c};
fy=function(a){var b=$x(a,!0),c=0;4==b?c=a.l.getFloat32(a.g):8==b&&(c=a.l.getFloat64(a.g));a.g+=b;return c};
ey=function(a){var b=$x(a,!0);a.g+=b};
by=function(a){var b=a.g;a.g=0;var c=!1;Zx(a,440786851)&&(a.g=0,Zx(a,408125543)&&(c=!0));a.g=b;return c};
jy=function(a){var b=a.g;a.g=0;var c=1E6;Xx(a,[408125543,357149030,2807729])&&(c=dy(a));a.g=b;return c};
ly=function(a,b){var c=a.g;a.g=0;if(!ky(a)||!Zx(a,160))return a.g=c,window.NaN;$x(a,!0);var d=a.g;if(!Zx(a,161))return a.g=c,window.NaN;$x(a,!0);iy(a);var e=iy(a)<<8|iy(a);a.g=d;if(!Zx(a,155))return a.g=c,window.NaN;d=dy(a);a.g=c;return(e+d)*b/1E9};
ky=function(a){a:{if(by(a)){if(!Zx(a,408125543)){var b=!1;break a}$x(a,!0)}b=!0}if(!b||!Zx(a,524531317))return!1;$x(a,!0);return!0};
Xx=function(a,b){for(var c=0;c<b.length;c++){if(!Zx(a,b[c]))return!1;c!=b.length-1&&$x(a,!0)}return!0};
Zx=function(a,b){if(Wx(a))return!1;for(;$x(a,!1)!=b;)if(ey(a),Wx(a))return!1;return!0};
$x=function(a,b){var c=iy(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+iy(a);return c}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+iy(a),d*=128;return b?c-d:c};
iy=function(a){return a.l.getUint8(a.g++)};
gy=function(a,b){var c=new window.Uint8Array(a.l.buffer,a.l.byteOffset+a.g,b);a.g+=b;return c};
my=function(a,b,c,d,e){this.info=a;this.g=b;this.range=c;this.l=null;this.o=d;this.sd=e};
ny=function(a){return a.range?new window.DataView(a.g,a.range.start,a.range.length):new window.DataView(a.g)};
oy=function(a,b){b=Math.min(b,a.info.La);var c=new Lx(a.info.type,a.info.g,a.info.range,a.info.na,a.info.startTime,a.info.duration,a.info.l,b,!1);c.o=!1;var d=Jx(a.range.start,b);c=new my(c,a.g,d,a.o,a.sd);var e=new Lx(a.info.type,a.info.g,a.info.range,a.info.na,a.info.startTime,a.info.duration,a.info.l+b,a.info.La-b,a.info.C);e.o=a.info.o;d=new g.Hx(d.end+1,a.range.end);d=new my(e,a.g,d,a.o,!1);return[c,d]};
py=function(a,b){if(g.rv(a.info.g.info)){for(var c=a.info.g.g,d=new window.DataView(a.g),e=window.NaN,f=window.NaN,k=0;wx(d,k);){var l=xx(d,k);(0,window.isNaN)(e)&&(1936286840==l.type?e=Bx(l):1836476516==l.type&&(e=tx(l)));if(1952867444==l.type){!e&&c&&(e=ux(c));var m=Ax(l);(0,window.isNaN)(f)&&(f=Math.round(b*e)-m);zx(l,m+f)}k=yx(l.type)?k+8:k+l.size}return!0}c=new Vx(new window.DataView(a.g));e=a.sd?c:new Vx(new window.DataView(a.info.g.g.buffer));d=b;f=jy(e);e=c.g;c.g=0;if(ky(c)&&Zx(c,231))if(k=
$x(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>k)c=!1;else{for(f=k-1;0<=f;f--)c.l.setUint8(c.g+f,d&255),d>>>=8;c.g=e;c=!0}else c=!1;return c};
qy=function(a){var b;if(g.rv(a.info.g.info)){for(var c=b=0,d=new window.DataView(a.g);wx(d,b);){var e=xx(d,b);if(1936286840==e.type){var f=Bx(e),k=Cx(e);c+=k/f}b=yx(e.type)?b+8:b+e.size}b=c||window.NaN;if(!(0<=b))a:{b=a.info.g.g;c=0;d=new window.DataView(a.g);for(e=0;wx(d,c);){f=xx(d,c);if(1836476516==f.type)var l=tx(f);else if(1836019558==f.type){!l&&b&&(l=ux(b));if(!l){b=window.NaN;break a}k=px(f.data,f.dataOffset,1953653094);e+=rx(k,l)}c=yx(f.type)?c+8:c+f.size}b=e||window.NaN}}else l=new Vx(new window.DataView(a.g)),
b=a.sd?l:new Vx(new window.DataView(a.info.g.g.buffer)),b=ly(l,jy(b));return b||a.info.F};
ry=function(a){return g.rv(a.info.g.info)?a.l?a.l.F&&!!px(new window.DataView(a.g),0,1718909296):!1:by(new Vx(new window.DataView(a.g)))};
sy=function(){var a=g.z("yt.player.utils.videoElement_");a||(a=g.Dd("VIDEO"),g.y("yt.player.utils.videoElement_",a,void 0));return a};
ty=function(){var a=sy();return!!a.webkitSetPresentationMode&&g.Ba(a.webkitSupportsPresentationMode)&&!!a.webkitSupportsPresentationMode("picture-in-picture")};
uy=function(){var a=sy();try{var b=a.muted;a.muted=!b;return a.muted!=b}catch(c){}return!1};
vy=function(a){a=g.Bd("DIV",{"class":a});window.document.body.appendChild(a);var b="none"==Bh(a,"display");g.Jd(a);return b};
wy=function(){this.length=1};
yy=function(){this.buffered=new wy};
zy=function(a,b){this.l=a;this.o=b;this.A=0;Object.defineProperty(this,"timestampOffset",{get:this.SJ,set:this.WJ});Object.defineProperty(this,"buffered",{get:this.QJ})};
Ay=function(){this.length=0};
By=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.g=a;this.l=window.NaN;this.o=0;Object.defineProperty(this,"duration",{get:this.RJ,set:this.VJ});Object.defineProperty(this,"readyState",{get:this.TJ});this.g.addEventListener("webkitsourceclose",(0,g.A)(this.UJ,this),!0)};
Cy=function(a){return window.MediaSource?new window.MediaSource:window.WebKitMediaSource?new window.WebKitMediaSource:new By(a)};
Dy=function(a){g.I.call(this);this.F=new g.Rt(this);g.J(this,this.F);this.l=this.g=null;a=this.o=a;a=a.yD?a.g.webkitMediaSourceURL:window.URL.createObjectURL(a);this.B=new Av(a,!0);this.H=this.C=this.A=null;St(this.F,this.o,["sourceopen","webkitsourceopen"],this.K);St(this.F,this.o,["sourceclose","webkitsourceclose"],this.I)};
Ey=function(a){a.H||(a.H=new window.Promise((0,g.A)(function(a){this.A=a},a)));
return a.H};
Fy=function(a){try{return"open"==a.o.readyState}catch(b){return!1}};
Gy=function(a){try{return"closed"==a.o.readyState}catch(b){return!0}};
Hy=function(a){return!!(a.g&&a.g.updating||a.l&&a.l.updating)};
Iy=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
Jy=function(a){return a.g?!!a.g.appendBuffer:Iy()};
Ly=function(a){if(/opus/.test(a)&&(g.Ky&&!g.Op("38")||g.Ky&&Bs("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Is())return!1;'audio/mp4; codecs="mp4a.40.2"'==a&&(a='video/mp4; codecs="avc1.4d401f"');return!!sy().canPlayType(a)};
g.My=function(){this.fk=this.Yj=!1;this.kj=2;this.A=20971520;this.C=8388608;this.l=window.NaN;this.ha=3145728;this.U=62914560;this.ma=10485760;this.lj=this.Wa=0;this.I=window.NaN;this.od=0;this.Zv=this.He=this.Wp=2;this.tb=25;this.T=2097152;this.Lv=1048576;this.X=!1;this.K=1800;this.Ua=5;this.bb=10;this.ba=30;this.Oc=1;this.g=1.15;this.o=1.05;this.mj=8;this.rj=!0;var a;!(a=Bs("xboxone"))&&(a=Js())&&(a=/WebKit\/([0-9]+)/.exec(g.Pb),a=!(a&&602<=(0,window.parseInt)(a[1],10)));this.gy=a||Ds();this.Sa=
15;this.Ab=!1;this.V=this.lx=!0;this.nj=this.F=!1;this.Dw=.8;this.zb=this.Zk=!1;this.zu=!0;this.Ja=this.nf=!1;this.Zg=25;this.hy=this.Kv=!1;this.sa=6;this.tf=this.da=!1;this.Qc=.5;this.aa=0;this.yd=this.ya=!1;this.Va=0;this.Ie=this.pj=!1;this.kb=0;this.jg=this.lf=!1;this.Vp=2;this.O=this.Fb=!1;this.Cc=.5;this.Nc=2;this.Tp=.8;this.Up=.2;this.Yb=this.Rp=!1;this.qc=0;this.Ca=this.Yg=this.oj=!1;this.Ma=15;this.Oa=1;this.Tw=this.sj=this.ua=this.Le=!1;this.jj=0;this.H=this.qj=this.mx=this.Je=this.L=this.Dk=
this.rf=this.Pb=this.ox=this.sf=this.uk=this.Cj=!1;this.pf=1;this.qf=0;this.jb=this.Ck=this.mf=this.Fx=this.Pc=this.B=!1};
Ny=function(a,b){1080<b.video.g&&!a.Yj&&(a.A=36700160,a.C=5242880,a.ha=10485760,a.T=4194304,a.Yj=!0);2160<b.video.g&&!a.fk&&(a.A=104857600,a.I=13107200,a.fk=!0);a.Lv=Math.min(a.T,5*b.g)};
Oy=function(){this.g=this.l=this.o=this.A=0};
Py=function(a,b){a[b]||(a[b]=new Oy);return a[b]};
g.Qy=function(a){this.A=a;this.B=this.l=this.C="";this.g={};this.o=""};
Sy=function(a){Ry(a);return a.B};
Ty=function(a){Ry(a);return Ub(a.g,function(a){return null!==a})};
Vy=function(a){Ry(a);if("/videoplayback"!=a.l){var b=a.clone();b.set("playerfallback","1");return b}var c=a.xb();b=new g.Qo(c);if(Uy){var d=a.get("fvip");a=(0,window.decodeURIComponent)(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.g.replace(/^[^.]*/,""),g.So(b,"r"+d+"---"+a[1]+c),b=new g.Qy(b.toString()),b.set("fallback_count","1"),b}d=b.g.match("\\.a1\\.googlevideo\\.com$");b.g.match("\\.googlevideo\\.com$")?(g.So(b,"redirector.googlevideo.com"),c=b.toString()):b.g.match("r[1-9].*\\.c\\.youtube\\.com$")?
(g.So(b,"www.youtube.com"),c=b.toString()):c=kw(c);b=new g.Qy(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
Ry=function(a){if(a.A){if(!bw(a.A))throw Error("Untrusted URL: "+a.A);var b=g.ap(a.A);a.C=b.A;a.B=b.g+(null!=b.B?":"+b.B:"");var c=b.l;if(0==c.indexOf("/videoplayback"))a.l="/videoplayback",c=c.substr(14);else if(0==c.indexOf("/api/manifest/")){var d=c.indexOf("/",14);0<d?(a.l=c.substr(0,d),c=c.substr(d+1)):(a.l=c,c="")}else a.l=c,c="";d=a.g;a.g=Wy(c);g.Ia(a.g,Xy(b.o.toString()));g.Ia(a.g,d);"index.m3u8"==a.g.file&&(delete a.g.file,a.l+="/file/index.m3u8");a.A="";a.o=""}};
Yy=function(a){Ry(a);var b=a.C+(a.C?"://":"//")+a.B+a.l;if(Ty(a)){var c=[];g.Rb(a.g,function(a,b){null!==a&&c.push(b+"="+a)});
b+="?"+c.join("&")}return b};
Wy=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&Zy(c,a[b],a[b+1]);return c};
Xy=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?Zy(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
Zy=function(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
$y=function(a){this.g=a;this.l={};this.o=""};
az=function(a,b){var c=b.indexOf("?");if(0<c){var d=Xy(b.substr(c+1));g.Rb(d,function(a,b){this.set(b,a)},a);
b=b.substr(0,c)}c=Wy(b);g.Rb(c,function(a,b){this.set(b,a)},a)};
bz=function(a){var b=a.g.xb(),c=[];g.Rb(a.l,function(a,b){c.push(b+"="+a)});
if(!c.length)return b;var d=c.join("&");a=Ty(a.g)?"&":"?";return b+a+d};
cz=function(a,b){var c=new g.Qy(b),d=c.get("req_id");d&&a.set("req_id",d);g.Rb(a.l,function(a,b){c.set(b,null)});
return c};
dz=function(a){this.B=a.clone();this.o=a;this.l=null;this.A=this.g=0};
fz=function(a,b,c){var d=Py(c,Sy(a.o));if(d.l>=b.Vp||1<=d.g)if(a=ez(a),c=Py(c,Sy(a)),c.l+c.g<=d.l+d.g)return!0;return!1};
g.gz=function(a,b){var c=b?ez(a):a.o;return new $y(c)};
ez=function(a){a.l||(a.l=Vy(a.B));return a.l};
hz=function(a){return 1<a.g?a.A+1E3*Math.pow(1.6,a.g-1)<g.yu():!0};
g.iz=function(a,b,c){b.g===a.o&&(a.o=cz(b,c));b.g===a.l&&(a.l=cz(b,c))};
jz=function(a,b){this.g=a[0].g.A;this.o=b||"";this.va=a;this.range=this.va[0].range&&0<this.va[0].La?Qx(this.va):null;this.l=window.NaN;this.A=this.requestId=null};
kz=function(a){return Nx(a.va[0])};
lz=function(a){return 4==a.va[a.va.length-1].type};
g.mz=function(a,b,c,d){/http[s]?:\/\//.test(a.o)?b=new $y(new g.Qy(a.o)):(b=null===a.A?fz(a.g,b,c):a.A,b=g.gz(a.g,b),a.o&&az(b,a.o));(d=d||a.range)&&b.set("range",d.toString());a.requestId&&b.set("req_id",a.requestId);(0,window.isNaN)(a.l)||b.set("headm",a.l.toString());return b};
nz=function(a){if(a.range)return a.range.length;a=a.va[0];return Math.round(a.F*a.g.info.g)};
oz=function(a,b,c){return a.range?new g.Hx(a.range.start+b,a.range.end):Jx(b,c)};
pz=function(a,b,c){this.index=null;this.info=b;this.initRange=c||null;this.g=null;this.C=this.F=!1;this.A=new dz(a);this.o=null};
qz=function(a,b){a.info&&a.info.video&&4==a.info.video.projectionType&&!a.o&&(g.rv(a.info)?a.o=vx(b):2==a.info.containerType&&(a.o=hy(b)))};
rz=function(a,b,c,d,e,f){f=void 0===f?0:f;pz.call(this,a,b,d);this.index=e||new g.Tw;this.B=f;this.I=c;this.H=!0;if(this.l=!c)this.F=!0};
sz=function(a,b,c){this.segments=[];this.l=a;this.o=void 0===b?0:b;this.g=void 0===c?!1:c};
uz=function(a,b,c){b=tz(a,b);return 0<=b&&(c||!a.segments[b].g)};
tz=function(a,b){return g.eb(a.segments,{na:b},function(a,b){return a.na-b.na})};
vz=function(a,b,c){return new Sw(b,c.startTime-(c.na-b)*a.l,a.l,0,"sq/"+b,void 0,void 0,!0)};
wz=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?14400:e;rz.call(this,a,b,"",void 0,void 0,c);this.index=new sz(c||0,e,d)};
xz=function(a,b,c,d,e){this.na=a;this.Pd=b;this.durationSecs=c;this.g=d||window.NaN;this.l=e||window.NaN};
yz=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""};
zz=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
Az=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(0,window.parseFloat)(b[2]||0)+60*(0,window.parseFloat)(b[4]||0)+(0,window.parseFloat)(b[6]||0):(0,window.parseFloat)(a)};
Bz=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
Cz=function(){this.g=[];this.l=null;this.B=0;this.A=[];this.o=!1;this.C=""};
Dz=function(a){var b=a.A;a.A=[];return b};
Ez=function(){this.A=[];this.g=null;this.l={};this.o={}};
Iz=function(a,b,c){var d=[];b=g.q(b.getElementsByTagName("SegmentTimeline"));for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,k=null;"Period"==f.nodeName?k=Fz(a):"AdaptationSet"==f.nodeName?k=Gz(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(k=Hz(a,f.attributes.id.value));if(null==k)return;k.update(e,c);$a(d,Dz(k))}ib(d,function(a){return a.Pd});
$a(a.A,d)};
Jz=function(a){a.g&&(a.g.g=[]);g.Rb(a.l,function(a){a.g=[]});
g.Rb(a.o,function(a){a.g=[]})};
Fz=function(a){a.g||(a.g=new Cz);return a.g};
Gz=function(a,b){a.l[b]||(a.l[b]=new Cz);return a.l[b]};
Hz=function(a,b){a.o[b]||(a.o[b]=new Cz);return a.o[b]};
g.Kz=function(){this.Aa=0;this.g=new window.Float64Array(128);this.l=new window.Float64Array(128);this.A=1;this.o=!1};
Lz=function(a){if(a.g.length<a.Aa+1){var b=2*a.g.length;b+=2;var c=a.g;a.g=new window.Float64Array(b+1);var d=a.l;a.l=new window.Float64Array(b+1);for(b=0;b<a.Aa+1;b++)a.g[b]=c[b],a.l[b]=d[b]}};
g.Mz=function(a,b,c,d,e,f){pz.call(this,a,b,c||void 0);this.indexRange=d;this.B=null;this.index=new g.Kz;this.l=e;this.lastModified=f};
Nz=function(a,b,c,d){for(var e=[];b<=a.index.Qb();b++){var f=a.index,k=b;f=Jx(f.Pk(k),k+1<f.Aa||f.o?f.g[k+1]-f.g[k]:-1);k=a.index.jd(b);var l=a.index.Rf(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m);e.push(new Lx(3,a,f,b,k,l,m,n,b==a.index.Qb()&&m+n==f.length));if(f.start+m+n>=c+d)break}return new jz(e)};
Pz=function(a,b){return Oz(function(a,b){return Us(a,b,4,1E3)},a,b)};
g.Qz=function(a){var b;a.responseType&&"text"!=a.responseType?"arraybuffer"==a.responseType&&(b=String.fromCharCode.apply(String,new window.Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0==b.indexOf("https://")?b:""};
Oz=function(a,b,c){return a(b,c).then(function(b){var d=g.Qz(b);return d?Oz(a,d,c):b})};
Sz=function(a){a=a.split("");Rz.J2(a,26);Rz.Ro(a,24);Rz.J2(a,8);Rz.J2(a,61);return a.join("")};
Tz=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.R.call(this);this.T=this.duration=0;this.isLive=this.o=!1;this.K=g.yu();this.F=window.Infinity;this.g={};this.V=a||"";this.C=this.O=0;this.B=null;this.ha=!!b&&g.T(b,"html5_live_nonzero_first_segment_start_time");this.l=!1;this.L=[];this.ma=!!b&&g.T(b,"html5_live_self_init_segments");this.A=null;this.sa=c;this.da=!b||!g.T(b,"html5_manifest_without_credentials");this.H=0;this.U=!!b&&g.T(b,"disable_html5_manifest_namespace_redux");
this.ba="";this.I=window.NaN;this.aa=b&&g.T(b,"disable_html5_duration_caching")?window.Infinity:10;this.X=!b||g.T(b,"html5_add_ratebypass_param")};
Uz=function(a){return Ub(a.g,function(a){return!!a.info.bc})};
g.Vz=function(a){return Ub(a.g,function(a){return g.vv(a.info.mimeType)})};
Wz=function(a){return g.Vb(a.g,function(a){return a.info.video?a.ep():!0})};
Zz=function(a,b,c,d,e){c=void 0===c?0:c;return(void 0===d?0:d)?Xz(a,b,e):Yz(a,b,c,e)};
Yz=function(a,b,c,d){c=void 0===c?0:c;var e=new Tz("",d,!1);e.duration=c||0;(0,g.F)(a,function(a){var c=$z(a,b,e.duration),d=Ix(a.init),f=Ix(a.index),n=(0,window.parseInt)(a.clen,10),p=aA(e,a.url,a.s);a=(0,window.parseInt)(a.lmt,10);p&&(c=new g.Mz(p,c,d,f,n,a),e.g[c.info.id]=c)});
return e};
Xz=function(a,b,c){var d=new Tz("",c,!0);(0,g.F)(a,function(a){var e=$z(a,b),k=aA(d,a.url,a.s),l=(0,window.parseInt)(a.target_duration_sec,10);a=(0,window.parseInt)(a.max_dvr_duration_sec,10)||14400;k&&(e=new wz(k,e,l,c&&g.T(c,"html5_manifestless_interpolate"),a),d.g[e.info.id]=e)});
d.o=!0;d.l=!0;d.isLive=!0;return d};
$z=function(a,b,c){c=void 0===c?0:c;var d=a.type,e=a.itag,f=bA(a),k=null;uv(d)&&(k=(a.size||"640x360").split("x"),k=new iv(+k[0],+k[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,!!a.isAccelerated,a.quality_label,a.eotf,a.primaries,!!a.isAcceleratedUiEnabled,a.video_level),d=cA(d,k,f));var l=null,m=null;if(tv(d)){l=0;if("258"==e||"261"==e)l=6;l=new ev(void 0,l,+a.spatial_audio_type);a.name&&(m=new fv(a.name,a.audio_track_id,"1"==a.isDefault))}e=(0,window.parseInt)(a.bitrate,10)/8;var n=(0,window.parseInt)(a.clen,
10);c=c&&n?n/c:0;var p=null;b&&a.drm_families&&(p={},(0,g.F)(a.drm_families.split(","),function(a){p[a]=b[a]}));
return new ov(f,d,l,k,m,p,e,c)};
bA=function(a){var b=a.itag,c=a.xtags;c&&(b=a.itag+";"+c);return b};
aA=function(a,b,c){c=void 0===c?"":c;var d=new g.Qy(b);a.X&&d.set("ratebypass","yes");b.match(/https:\/\/yt.akamaized.net/)||d.set("alr","yes");c&&d.set("signature",Sz(c));return d};
hA=function(a,b){var c=yz(b,"id");c=c.replace(":",";");"captions"==c&&(c=yz(b,"lang"));var d=yz(b,"mimeType"),e=yz(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=(0,window.parseInt)(yz(b,"bandwidth"),10)/8;var f=(0,window.parseInt)(zz(b,"BaseURL").getAttribute(dA(a,"contentLength")),10);f=a.duration&&f?f/a.duration:0;var k=null;if(uv(d)){k=(0,window.parseInt)(yz(b,"width"),10);var l=(0,window.parseInt)(yz(b,"height"),10),m=(0,window.parseInt)(yz(b,"frameRate"),10),n=eA(yz(b,dA(a,"projectionType")));a:switch(yz(b,
dA(a,"stereoLayout"))){case "layout_left_right":var p=1;break a;case "layout_top_bottom":p=2;break a;default:p=0}var u=(0,window.parseInt)(yz(b,"video_level"),10);k=new iv(k,l,m,n,p,void 0,void 0,void 0,void 0,void 0,void 0,u)}m=l=null;tv(d)&&(l=(0,window.parseInt)(yz(b,"audioSamplingRate"),10),m=(0,window.parseInt)(yz(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10),n=fA(yz(b,dA(a,"spatialAudioType"))),l=new ev(l,m,n),m=yz(b,"lang")||"und",(n=zz(b,"Role"))?(u=yz(n,"value")||"",
$b(gA,u)?(n=m+"."+gA[u],p="main"==u,m=yz(b,dA(a,"langName"))||m+" - "+u,m=new fv(m,n,p)):m=null):m=null);p=null;if(n=zz(b,"ContentProtection"))if(g.Es())if((p=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==p.value)for(p={},n=n.firstChild;null!=n;n=n.nextSibling)"yt:SystemURL"==n.nodeName&&(p[n.attributes.type.value]=n.textContent.trim());else p=null;else if((p=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==p.textContent)for(p={},n=n.firstChild;null!=n;n=n.nextSibling)"SystemURL"==
n.localName&&"http://youtube.com/yt/2012/10/10"==n.namespaceURI&&(p[n.attributes.type.textContent]=n.textContent.trim());else p=null;return new ov(c,d,l,k,m,p,e,f)};
eA=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
fA=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
iA=function(a,b){b=void 0===b?"":b;a.C=1;a.K=g.yu();return g.cg(Pz(b||a.V,{format:"RAW",method:"GET",withCredentials:a.da}).then((0,g.A)(a.Gz,a)),(0,g.A)(a.Iz,a))};
jA=function(a,b){var c=new Tz,d;for(d in a)c[d]=g.ic(a[d]);var e={},f=!1;g.Rb(a.g,function(a,c){if(a){var d=b(a,c);d?(e[c]=d,f=!0):e[c]=a}});
c.g=e;return f?c:null};
kA=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(0<=(0,window.parseInt)(a.split("-")[1],10)?e=Ix(a):d=d+"?range="+a));return new Sw(b.na,b.Pd,b.durationSecs,b.g,d,e,b.l)};
lA=function(a){return a.isLive&&g.yu()-a.K>=a.F};
mA=function(a){var b=a.F;(0,window.isFinite)(b)&&(lA(a)?a.Ct():(b=Math.max(0,a.K+b-g.yu()),a.A||(a.A=new g.P(a.Ct,b,a),g.J(a,a.A)),a.A.start(b)))};
nA=function(a){a=a.g;for(var b in a){var c=a[b].index;if(c&&c.Tb())return c.Qb()+1}return 0};
oA=function(a){if(!(0,window.isNaN)(a.I))return a.I;var b=a.g,c;for(c in b){var d=b[c].index;if(d&&d.Tb()){b=0;for(c=d.je();c<=d.Qb();c++)b+=d.Rf(c);b/=d.kh();b=.5*Math.round(b/.5);d.kh()>a.aa&&(a.I=b);return b}if(a.isLive&&(d=b[c],d.B))return d.B}return window.NaN};
pA=function(a,b){for(var c in a.g){var d=a.g[c].index;if(d&&d.Tb()){var e=d.Ff(b),f=d.no(e);if(f)return f+b-d.jd(e)}}return window.NaN};
aaa=function(a,b){g.Rb(a.g,function(a){g.Rb(b,function(b,c){var d=a.A;d.o.set(c,b);d.B.set(c,b);d.l&&d.l.set(c,b)})})};
baa=function(a,b,c){var d=!1,e;for(e in a.g)if(!!a.g[e].info.video==c){var f=a.g[e].index;uz(f,b.na)||(f.At(b),d=!0)}return d};
qA=function(a,b,c){for(var d in a.g)if(!!a.g[d].info.video==c){var e=a.g[d].index,f=tz(e,b);0<=f&&e.segments.splice(f,1)}};
dA=function(a,b){return a.U?"yt:"+b:a.ba+":"+b};
cA=function(a,b,c){null===rA&&(rA=window.MediaSource&&window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16"')&&!window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99"'));if(rA||sA){var d="video/webm; codecs=vp09.02.51.10.01.";if('video/webm; codecs="vp9"'==a){a="00";d="08";var e="51";c=mv[c.split(";",1)[0]]||"";if("9h"==c||"(h"==c)a="02",d="10";0!=b.A&&(e=b.A);d="video/webm;codecs=vp09."+a+"."+e+"."+d+".01."}else if('video/webm; codecs="vp9.2"'!=
a)return a;return d+(("bt2020"==b.primaries?"09":"01")+".")+("smpte2084"==b.l?"16":"arib-std-b67"==b.l?"18":"01")}return a};
caa=function(a){return g.Na(Object.values(a.g),function(a){return a.info.bc&&a.info.video?480<a.info.video.g&&"H"==a.info.l:!1})};
tA=function(a,b,c,d){this.flavor=a;this.g=b;this.A=c;this.o={};this.l=null;this.fairPlayCert="";this.B=!!d&&g.T(d,"edge_nonprefixed_eme")};
vA=function(a){return a.B?!1:!a.l&&!!uA()&&"com.microsoft.playready"==a.g};
wA=function(a){return"com.microsoft.playready"==a.g};
yA=function(a){return xA&&"com.microsoft.playready"==a.g&&!!window.navigator.requestMediaKeySystemAccess};
zA=function(a){return!a.l&&!!uA()&&"com.apple.fps.1_0"==a.g};
uA=function(){var a=window.MSMediaKeys;Js()&&!a&&(a=window.WebKitMediaKeys);return a&&a.isTypeSupported?a:null};
BA=function(a){return window.navigator.requestMediaKeySystemAccess?g.Ky?g.Op("45"):xA||g.vd?g.T(a,"edge_nonprefixed_eme"):g.AA?g.Op("47"):!g.T(a,"html5_disable_nonprefixed_eme_for_other"):!1};
CA=function(a,b,c){g.I.call(this);this.l=[];this.g={};this.A={};this.B=null;this.o=b;this.I=c;this.C=!1;daa(this,a)};
daa=function(a,b){for(var c in b)for(var d=g.q(b[c]),e=d.next();!e.done;e=d.next()){e=e.value;if(!e.bc)return;for(var f in e.bc){if(!DA[f])return;for(var k=g.q(DA[f]),l=k.next();!l.done;l=k.next())l=l.value,a.g[l]=a.g[l]||new tA(f,l,e.bc[f],a.o),a.A[f]=a.A[f]||{},a.A[f][e.mimeType]=!0}}Gs()?(a.l=["com.youtube.fairplay"],a.g["com.youtube.fairplay"]=new tA("fairplay","com.youtube.fairplay","",a.o),a.A.fairplay={'audio/mp4; codecs="avc1.4d4015"':!0,'video/mp4; codecs="mp4a.40.2"':!0}):a.l=eaa.filter(function(b){return a.g[b]?
!(a.I&&"widevine"==a.g[b].flavor):!1})};
EA=function(a){if(!a.ga())if(0==a.l.length)a.B(null);else{var b=a.l[0],c=a.g[b],d={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};wA(c)&&(d.initDataTypes=["keyids","cenc"]);for(var e in a.A[c.flavor]){var f=0==e.indexOf("audio/"),k=f?d.audioCapabilities:d.videoCapabilities;g.T(a.o,"html5_widevine_robustness_strings")&&"widevine"==c.flavor&&!a.C?f?k.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(f=g.T(a.o,"html5_widevine_hw_secure_all")?"HW_SECURE_ALL":"HW_DECODE_ALL",
k.push({contentType:e,robustness:f}),k.push({contentType:e,robustness:"SW_SECURE_DECODE"})):k.push({contentType:e})}window.navigator.requestMediaKeySystemAccess(b,[d]).then(Vr((0,g.A)(a.H,a,c)),Vr((0,g.A)(a.F,a)))}};
faa=function(a,b){function c(a){b.o[a.contentType]=!0}
if(wA(b)){var d=sy(),e;for(e in a.A[b.flavor])b.o[e]=!!d.canPlayType(e)}else d=b.l.getConfiguration(),d.audioCapabilities&&d.audioCapabilities.forEach(c),d.videoCapabilities&&d.videoCapabilities.forEach(c)};
haa=function(a){if(uA()&&g.ul)a.B(new tA("fairplay","com.apple.fps.1_0","",a.o));else{var b=gaa(),c=g.Na(a.l,function(c){var d=a.g[c],f=!1,k=!1,l;for(l in a.A[d.flavor])b(l,c)&&(d.o[l]=!0,f=f||0==l.indexOf("audio/"),k=k||0==l.indexOf("video/"));return f&&k});
c=c?a.g[c]:null;a.l=[];a.B(c)}};
gaa=function(){var a=uA();if(a)return function(b,d){return a.isTypeSupported(d,b)};
var b=sy();return b&&(b.addKey||b.webkitAddKey)?(0,g.A)(b.canPlayType,b):function(){return!1}};
iaa=function(){this.o=2048;this.g=17;this.B=13E4;this.F=.5;this.A=!1;this.C=0;this.l=!1};
FA=function(a){this.B=Math.exp(Math.log(.5)/a);this.l=this.A=0};
HA=function(a,b,c,d){c=void 0===c?.5:c;d=void 0===d?0:d;this.L=b;this.l=Math.round(a*this.L);this.B=Array(this.l);for(a=0;a<this.l;a++)this.B[a]=window.Infinity;this.K=GA(this);this.A=0;this.C=!1;this.H=!0;this.F=c;this.I=d};
GA=function(a){for(var b=Array(a.l),c=0;c<a.l;c++)b[c]=c;return b};
IA=function(a,b){if(!a.C&&0==a.A)return 0;a.H&&(g.gb(a.K,function(b,d){return a.B[b]-a.B[d]}),a.H=!1);
return a.B[a.K[Math.round(b*((a.C?a.l:a.A)-1))]]||0};
jaa=function(){this.l=0;this.C=this.bandwidthEstimate=this.B=this.o=this.A=window.NaN;this.g=""};
kaa=function(a){this.policy=a;this.H=this.K=0;this.A=-1;this.F=this.o=g.yu();this.C=new HA(4,1,.6,.4);this.I=new HA(10,1,.5,.4);this.g=a.A?new FA(a.g):new HA(a.g,20,.5,.4);this.B=new HA(5,1,.25);this.l=new HA(30,1,.5);a=g.Xu("yt-player-bandwidth")||{};this.g.g(this.policy.F,0<a.byterate?a.byterate:this.policy.B);0<a.delay&&this.C.g(1,Math.min(+a.delay,2));0<a.stall&&this.I.g(1,+a.stall);0<a.init&&(this.F=Math.min(a.init,this.F));this.A=g.yu()};
KA=function(a,b,c){b=Math.max(b,a.policy.o);a.I.g(1,c/b);JA(a)};
LA=function(a){a=a.C.o();a=(0,window.isNaN)(a)?.5:a;return a=Math.min(a,5)};
MA=function(a,b,c){(0,window.isNaN)(c)||(a.H+=c);(0,window.isNaN)(b)||(a.K+=b)};
NA=function(a){return a.I.o()||0};
OA=function(a){a=a.g.o();return 0<a?a:1};
PA=function(a){var b=OA(a);a.policy.l&&(b=1/(NA(a)+1/b));a=a.B.o();return Math.max(b,0<a?a:1)};
QA=function(a){var b={};b.delay=LA(a);b.stall=NA(a);b.byterate=OA(a);b.init=a.F;return b};
JA=function(a){-1<a.A&&3E4<g.yu()-a.A&&(Lv(QA(a)),a.A=g.yu())};
RA=function(a){return 4E3<=g.yu()-a.o};
SA=function(a,b,c){this.videoInfos=a;this.g=b||null;this.audioTracks=[];this.l=c||null;if(this.g){var d={};(0,g.F)(this.g,(0,g.A)(function(a){if(a.ob&&!d[a.id]){var b=new Ow(a.id,a.ob);d[a.id]=b;this.audioTracks.push(b)}},this))}};
laa=function(a,b,c){this.g=a;this.B=b;this.C=void 0===c?!1:c;this.o={};this.A=!!g.z("cast.receiver.platform.canDisplayType");a=g.z("cast.receiver.platform.getValue");this.l=!this.A&&a&&a("max-video-resolution-vpx")||null};
UA=function(a,b){if(b)return Ws();for(var c={},d=sy(),e=g.q(a),f=e.next();!f.done;f=e.next())if(f=f.value,nv(f.Bf)in maa||"5"==nv(f.Bf)?0:TA(d,f.Re().mimeType)){var k=f.Bf.video.quality;c[k]&&2!=c[k].Re().containerType||(c[k]=f)}var l=[];c.auto&&l.push(c.auto);(0,g.F)(lv,function(a){(a=c[a])&&l.push(a)});
return l.length?Xs(l):Ws()};
VA=function(){var a=Ds()&&!g.Op(29),b=Bs("google tv")&&Bs("chrome")&&!g.Op(30),c=Gs();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&window.HTMLMediaElement.prototype.webkitSourceAddId)};
TA=function(a,b){var c=a.canPlayType(b);WA?c=c||naa[b]:2.2==XA?c=c||oaa[b]:Ds()&&(c=c||paa[b]);return!!c};
g.YA=function(){return!(!TA(sy(),"application/x-mpegURL")&&!VA())};
ZA=function(a,b){var c={},d=b.Gd()||b.se()||b.te();Fs();for(var e in b.g){var f=b.g[e],k=nv(f.info);("304"!=k&&"266"!=k||b.o||d)&&qaa(a,f.info)&&(c[f.info.l]=c[f.info.l]||[],c[f.info.l].push(f.info))}return c};
raa=function(a,b,c){var d={},e;g.Rb(b,function(b,k){var f=b.filter(function(b){return b.bc?c&&b.bc[c.flavor]&&c.o[b.mimeType]?"261"!=nv(b)||$A(a,aB)?"("!=b.l&&"(h"!=b.l||$A(a,bB)||a.C?!0:!1:(e||(e=sy()),!1):!1:!0});
f.length&&(d[k]=f)});
return d};
gB=function(a,b,c,d,e,f){function k(a){return!!l[a]}
var l=ZA(a,b);Uz(b)&&(l=raa(a,l,c));var m=g.T(a.g,"html5_disable_vp9_hdr_enc")?saa:taa;f?m=uaa:!Bs("windows nt 5.1")||g.AA&&!g.T(a.g,"html5_prefer_h264_on_xp")?(b.se()||b.te()||b.Gd())&&cB&&6>=XA&&(m=dB):m=dB;c=vaa;d&&(f||(m=dB),c=waa);if(Hs()||Is()||$A(a,aB))c=xaa;(b.se()||b.te()||b.Gd())&&e&&(c=yaa.concat(c));d=g.Na(m,k);e=g.Na(c,k);if(!d||!e)return Ws();"9"==d&&l.h&&(f=function(a,b){return Math.max(a,b.video.height)},c=Pk(l["9"],f,0),Pk(l.h,f,0)>1.5*c&&(d="h"),g.T(a.g,"html5_vp9_live_blacklist_edge")&&
b.o&&xA&&(d="h"));
b=l[d];f=l[e];b=eB(a,b);fB(b,f);return Xs(new SA(b,f,zaa(a,l,d,e)))};
zaa=function(a,b,c,d){var e=b.h;"f"==c&&(e=b[c]);var f=b.a;c=b[c]!=e;b=b[d]!=f;return e&&f&&(c||b)?(e=eB(a,e),fB(e,f),new SA(e,f)):null};
fB=function(a,b){g.gb(a,function(a,b){return b.video.height*b.video.width-a.video.height*a.video.width||b.g-a.g});
g.gb(b,function(a,b){return b.g-a.g})};
eB=function(a,b){var c=(0,g.Ek)(b,function(a){return 32<a.video.fps});
c&&(b=a.B||$A(a,hB)?(0,g.Ld)(b,function(a){var b;(b=32<a.video.fps)||(a=a.video,b=!(854<a.width||480<a.height));return b}):(0,g.Ld)(b,function(a){return!(32<a.video.fps)}));
c&&Hs()&&(b=(0,g.Ld)(b,function(a){return"299"!=nv(a)}));
return b};
qaa=function(a,b){if("0"==nv(b))return!0;var c=b.mimeType;if(b.video&&(kv(b.video)||"bt2020"==b.video.primaries)&&!(24<window.screen.pixelDepth||$A(a,iB))||!("338"!=nv(b)||g.Ky&&g.Op(53)))return!1;var d={};b.video&&(b.video.width&&(d[jB.name]=b.video.width),b.video.height&&(d[kB.name]=b.video.height),b.video.fps&&(d[hB.name]=b.video.fps),b.video.l&&(d[iB.name]=b.video.l),b.g&&(d[lB.name]=8*b.g),"("==b.l&&(d[bB.name]="subsample"));b.audio&&b.audio.g&&(d[aB.name]=b.audio.g);for(var e in mB){var f=mB[e];
if(d[f.name]&&!(f==iB&&0<b.mimeType.indexOf("vp09.02")))if($A(a,f))if(a.l){if(a.l[f.name]<d[f.name])return!1}else c=c+"; "+f.name+"="+d[f.name];else if(qv(b)&&f==iB)return!1}!g.T(a.g,"disable_html5_cast_hdcp_filter2")&&a.A&&b.video&&1080<b.video.g&&b.bc&&(c+="; hdcp=2.2");return nB(a,c)};
$A=function(a,b){if(!(b.name in a.o)){var c=a.o,d=b.name;if(a.l)var e=!!a.l[b.name];else b==lB&&g.T(a.g,"html5_ignore_bad_bitrates")&&nB(a,'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!nB(a,'video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000')?e=!1:(b.video?(e='video/webm; codecs="vp9"',nB(a,e)||(e='video/mp4; codecs="avc1.4d401e"')):(e='audio/webm; codecs="opus"',nB(a,e)||(e='audio/mp4; codecs="mp4a.40.2"')),e=nB(a,e+"; "+b.name+"="+b.valid)&&!nB(a,e+"; "+
b.name+"="+b.Ag));c[d]=e}return a.o[b.name]};
nB=function(a,b){return a.A?window.cast.receiver.platform.canDisplayType(b):Ly(b)};
oB=function(){g.R.call(this);this.Ba={}};
pB=function(a,b){return void 0==b?a:"1"==b?!0:!1};
qB=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
rB=function(a,b){return void 0==b?a:Number(b)};
sB=function(a,b){return void 0==b?a:b.toString()};
tB=function(a,b){if(b){if("fullwidth"==a)return window.Infinity;if("fullheight"==a)return 0}if(a){var c=a.match(Aaa);if(c){var d=(0,window.parseFloat)(c[2]);if(0<d)return(0,window.parseFloat)(c[1])/d}}return window.NaN};
uB=function(a,b){var c=g.hv.auto,d=b?g.hv[b]:void 0;return d>g.hv.medium?new Cv(d,c,!1):d>=c?new Cv(c,d,!1):a};
vB=function(a){return a.docid||a.video_id||a.videoId||a.id};
xB=function(){this.g=g.Tr("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=g.$u.get(""+this.g,void 0)){a=(0,window.decodeURIComponent)(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(wB[d]=c.toString())}}};
yB=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
zB=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
QB=function(a){g.I.call(this);a=g.hc(a);this.Ma=!1;this.sa=this.ua="";this.Cc={};this.Zg=sB("",a.csp_nonce);this.experiments=new xv(a.fexp,a.fflags);this.forcedExperiments=a.forced_experiments||null;try{var b=window.document.location.toString()}catch(e){b=""}this.ya=b;this.U=(this.l=Baa.test(this.ya))?sB("",a.loaderUrl):this.ya;this.Za=Caa.test(this.U);fw(this.U);this.Oa=pB(!1,a.privembed);this.I=(this.Ja=pB(!1,a.forcenewui))||g.T(this.experiments,"embed_new_info_bar")&&this.l;this.protocol=0==this.ya.indexOf("http:")?
"http":"https";this.baseYtUrl=Uv(a.BASE_YT_URL)||Uv(this.ya)||this.protocol+"://www.youtube.com/";b=a.el;var c="detailpage";"adunit"==b?c=this.l?"embedded":"detailpage":"embedded"==b||this.Za?c=qB(c,b,Daa):b&&(c="embedded");this.V=c;Ju();b=null;c=a.ps;var d=g.Sa(AB,c);!c||d&&!this.Za||(b=c);this.playerStyle=b;this.H=(this.Sb=g.Sa(AB,this.playerStyle))&&"play"!=this.playerStyle&&"jamboard"!=this.playerStyle;this.oj=!this.H;b={};this.A=(b.c=a.c||"web",b.cver=a.cver||"html5",b.cplayer="UNIPLAYER",b);
this.L=pB(!1,a.disableplaybackui);this.Ca=!this.L&&!(!sy().defaultPlaybackRate||g.zh&&!Bs("chrome")||BB||CB||Bs("android")||Bs("silk"));this.g=pB("blazer"==this.playerStyle,a.is_html5_mobile_device);this.g?b=!0:(b=(0,window.parseInt)((0,g.G)()/1E3,10),c=xB.getInstance(),b=g.T(this.experiments,"block_desktop_background_playback_with_mobile_cookie")&&c&&b>(0,window.parseInt)(c.get("dhmu",b.toString()),10));this.nj=b;this.da="3"==this.o||this.g||pB(!1,a.use_media_volume);this.O=uy();this.Cj=DB;(BB||
CB||g.ul)&&"blazer"!=this.playerStyle&&g.EB(this);this.Va=g.FB(this)&&g.T(this.experiments,"use_rawcc_captions");this.B=pB(!1,a.is_dni);this.ba=sB("#cc181e",a.dni_color);this.Oc=this.Ja||pB(!GB(this)&&!HB(this)&&!this.Sb,a.showinfo);this.lf=pB(!1,a.playsinline);b=this.g&&cB&&2.3>=XA;c=this.g;c=IB(this)||!b&&pB(c,a.use_native_controls)?"3":"1";this.o="0"!=a.controls?c:"0";this.useTabletControls=this.g;this.color=qB("red",a.color,Eaa);this.pj="3"==this.o||pB(!1,a.modestbranding)&&"red"==this.color;
this.aa=0==this.U.indexOf(this.baseYtUrl);this.pf=(c=!this.aa&&!HB(this)&&!this.H&&!this.Sb&&!GB(this))&&(this.B||!this.pj)&&"1"==this.o;this.qf=g.JB(this)&&c&&!this.Oc&&!this.pf;this.Zk=this.qj=b;this.rf=!CB||g.wc(601)?!0:!1;this.mj=this.l||!1;this.Sa=HB(this)?"":(this.U||a.post_message_origin||"").substring(0,128);this.widgetReferrer=sB("",a.widget_referrer);this.zb=(!this.Za||pB(!0,a.enablecastapi))&&"1"==this.o&&!this.g&&(HB(this)||g.JB(this)||g.KB(this));this.jj=((this.kb=pB(!1,a.autoplay))||
HB(this))&&!a.suppress_autoplay_on_watch;this.Qc=!this.g&&!Bs("nintendo wiiu")&&!Bs("nintendo 3ds")||pB(!1,a.autoplayoverride);this.od=pB(!1,a.mutedautoplay)&&!1;b=(HB(this)||GB(this))&&("blazer"==this.playerStyle||"mweb-polymer"==this.playerStyle);this.Pb=!pB(!0,a.fs);this.ma=!this.Pb&&(b||tt());this.Yg=g.T(this.experiments,"uniplayer_block_pip")&&Ds()&&g.Op(58)&&!(g.LB&&Bs("version/"));this.Pc=this.Ja||pB(!this.Sb,a.rel);this.fk=pB(this.B,a.co_rel);this.ha=g.KB(this);this.Nc="blazer"==this.playerStyle||
"mweb-polymer"==this.playerStyle;switch(this.playerStyle){case "blogger":b="bl";break;case "gmail":b="gm";break;case "books":b="gb";break;case "docs":b="gd";break;case "google-live":b="gl";break;case "play":b="gp";break;case "chat":b="hc";break;case "picasaweb":b="pw";break;default:b="yt"}this.Wa=b;this.uc=sB("",a.authuser);this.uk=(this.l&&!this.Oa||!!this.uc)&&pB(!this.H,this.Za?a.showwatchlater:void 0);this.He=pB(!1,a.disablekb);this.Je=sB("",a.ecver);this.loop=pB(!1,a.loop);this.pageId=sB("",
a.pageid);this.rj=uB(Fv,a.vq);this.Yj=pB(!0,a.canplaylive);this.kj=pB(this.Sb,a.ss);(b=a.video_container_override)?(c=b.split("x"),2!=c.length?b=null:(b=(0,window.parseInt)(c[0],10),c=(0,window.parseInt)(c[1],10),b=(0,window.isNaN)(b)||(0,window.isNaN)(c)||0>=b*c?null:new g.gd(b,c))):b=null;this.sf=b;this.mute=pB(!1,a.mute);this.useMiniplayerUi=pB(!1,a.use_miniplayer_ui);this.storeUserVolume=!this.mute&&pB("0"!=this.o,a.store_user_volume);this.wf="3"==this.o?3:qB(void 0,a.iv_load_policy,MB);this.yf=
sB("",a.cc_lang_pref);b=qB(2,a.cc_load_policy,MB);"3"==this.o&&2==b&&(b=3);this.zf=b;this.Yb=sB("en_US",a.hl);this.region=sB("US",a.cr);this.hostLanguage=sB("en",a.host_language);this.jg=!this.Oa&&Math.random()<g.yv(this.experiments,"web_player_api_logging_fraction");this.C=!this.Oa&&!g.T(this.experiments,"web_player_interaction_logging_killswitch");this.Ab=new window.Set;this.F=pB(!0,a.deviceHasDisplay);this.Ve=rB(this.Ve,a.ismb);this.oj?(b=a.vss_host||"s.youtube.com",g.T(this.experiments,"www_for_videostats")&&
"s.youtube.com"==b&&(b=NB(this.baseYtUrl)||"www.youtube.com")):b="video.google.com";this.tf=b;this.jf(a);this.Cc=a;this.K=new oB;g.J(this,this.K);this.T=this.g;this.Le={innertubeApiKey:sB("",a.innertube_api_key),innertubeApiVersion:sB("",a.innertube_api_version),un:this.A.c,innertubeContextClientVersion:sB("",a.innertube_context_client_version),wn:this.hostLanguage,vn:this.region,wk:""};this.nf=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.X=new laa(this.experiments,g.T(this.experiments,
"html5_force_hfr_support")?!0:g.OB(this)||Hs()||Is()||PB(this),g.Ky&&56<=g.As()||PB(this));b=new iaa;g.EB(this)&&(b.A=!0,b.F=.1);g.T(this.experiments,"html5_ewma_bandwidth_estimator")&&(b.A=!0);this.Ve&&(b.B=this.Ve/8);b.g=g.yv(this.experiments,"html5_bandwidth_window_size")||b.g;b.l=g.T(this.experiments,"html5_composite_stall");this.schedule=new kaa(b);this.enableSafetyMode=pB(!1,a.enable_safety_mode);this.yd=pB(this.L?!1:HB(this)&&"blazer"!=this.playerStyle&&"mweb-polymer"!=this.playerStyle,a.autonav);
this.qc=pB(!1,a.send_visitor_id_header)||this.experiments.g;this.xf=!1;this.mf=Fv;this.sj=g.yu();this.Ud=!1;this.Ck=pB(!1,a.transparent_background);this.disableNativeContextMenu=pB(!1,"docs"==this.playerStyle?a.disable_native_context_menu:void 0);this.lj=g.OB(this)&&g.T(this.experiments,"enable_skip_intro_button");this.Ie=sB("",a.embed_config);this.Dk=pB(!0,a.use_fast_sizing_on_watch_default)};
RB=function(a,b){return!a.Sb&&Ds()&&g.Op(55)&&!b};
SB=function(a){a=NB(a.baseYtUrl);return"www.youtube-nocookie.com"==a?"www.youtube.com":a};
TB=function(a){return"gaming"==a.playerStyle?"gaming.youtube.com":SB(a)};
UB=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
WB=function(a){return HB(a)&&"gaming"!=a.playerStyle&&!g.VB(a)};
IB=function(a){return CB&&!a.lf||Bs("nintendo wiiu")||Bs("nintendo 3ds")?!0:!1};
g.EB=function(a){return g.Ky&&Bs("crkey")||"TV"==a.A.cplatform};
PB=function(a){return"CHROMECAST ULTRA/STEAK"==a.A.cmodel||"CHROMECAST/STEAK"==a.A.cmodel};
g.XB=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
g.OB=function(a){return"web"==a.A.c.toLowerCase().substr(0,3)};
g.VB=function(a){return"WEB_UNPLUGGED"==a.A.c};
g.FB=function(a){return g.VB(a)||"TV_UNPLUGGED_CAST"==a.A.c||"TVHTML5_UNPLUGGED"==a.A.c};
g.YB=function(a){return a.F&&g.Ky&&!WA&&"3"!==a.o?g.LB?a.l&&g.wc(51):!0:!1};
g.ZB=function(a){return a.F&&g.AA&&!WA&&"3"!==a.o?g.LB?a.l&&g.wc(48):g.wc(38):!1};
$B=function(a){return g.YB(a)||g.ZB(a)||(a.F&&g.zh&&!WA&&"3"!==a.o?g.LB?a.l&&g.wc(37):g.wc(27):!1)||a.F&&g.qw&&!Ks()&&g.wc(11)||a.F&&g.ul&&g.wc("604.4")&&g.T(a.experiments,"safari_enable_spherical")};
Faa=function(a){return g.T(a.experiments,"disable_html5_ambisonic_audio")||!($B(a)||g.T(a.experiments,"html5_enable_spherical")||g.T(a.experiments,"html5_enable_spherical3d"))||g.JB(a)&&cB||g.AA&&(!g.wc(47)||!g.wc(52)&&g.wc(51))?!1:window.AudioContext||window.webkitAudioContext?!0:!1};
HB=function(a){return"detailpage"==a.V};
g.JB=function(a){return"embedded"==a.V};
g.aC=function(a){return"leanback"==a.V};
GB=function(a){return"adunit"==a.V||"gvn"==a.playerStyle};
g.KB=function(a){return"profilepage"==a.V};
bC=function(a){return Ls()&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(a.A.cmodel)};
NB=function(a){var b=g.Kg(a);return(a=g.Lg(a))?b+":"+a:b};
g.cC=function(a,b,c){this.errorCode=a;this.g=b;this.details=c||{}};
dC=function(a){var b;for(b in a){var c=(""+a[b]).replace(/[:,]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
eC=function(a){if(a){var b=[],c;for(c in a)Gaa.has(c)||b.push(c);b.length&&.01>Math.random()&&g.Q(Error("Unknown house brand player vars: "+b),"WARNING")}};
Haa=function(a,b,c,d,e,f,k,l,m,n){this.itag=a;this.url=b;this.Oq=c;this.width=d;this.height=e;this.bitrate=k;this.fps=f;this.audioItag=l||null;this.g=m||"";this.ob=void 0===n?null:n};
fC=function(a){for(var b={},c=0,d=a.length;c<d;++c){var e=a[c],f=e.type.match(/codecs="([^"]*)"/);f=f?f[1]:"";var k=null;e.audio_track_id&&(k=new fv(e.name,e.audio_track_id,!!e.is_default));e=new Haa(e.itag,e.url,f,+e.width,+e.height,+e.fps,+e.bitrate,e.audio_itag,e.drm_families,k);b[e.itag]=b[e.itag]||[];b[e.itag].push(e)}return b};
Iaa=function(a,b){this.o=a;this.g=b;this.B=0;this.A=!1;this.l=""};
Jaa=function(a){for(var b=[],c=[],d=0,e=a.g.length;d<e;++d){var f=a.g[d];f.bitrate<=a.B?b.push(f):c.push(f)}b.sort(function(a,b){return b.bitrate-a.bitrate});
c.sort(function(a,b){return a.bitrate-b.bitrate});
a.g=b.concat(c)};
gC=function(a,b){this.Bf=a;this.o=b;this.g=null};
Kaa=function(a,b,c,d){if(!(WA||Js()||Gs()))return Ws();c=fC(c);if(!c)return Ws();var e={};e=(e.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",e);var f,k=[],l=[],m=[],n=g.T(a.experiments,"html5_hls_multiaudio_killswitch"),p;for(p in c){var u=g.q(c[p]);for(f=u.next();!f.done;f=u.next()){var v=f.value;if(v.width){var D=c[v.audioItag];if(D&&(k.push(v),f="fairplay"==v.g?e:null,m.push(hC(D,[v],v.itag,v.width,v.height,v.fps,void 0,void 0,f,n)),!C||v.width*v.height*v.fps>C.width*C.height*C.fps))var C=
v}else l.push(v)}}f=m.reduce(function(a,b){return!!b.Bf.bc&&a},!0)?e:null;
!g.T(a.experiments,"html5_hls_optimal_resolution_killswitch")&&C?m.push(hC(l,k,"93",C.width,C.height,C.fps,"auto",d,f,n)):m.push(hC(l,k,"93",0,0,0,"auto",d,f,n));return UA(m,RB(a,b))};
hC=function(a,b,c,d,e,f,k,l,m,n){n=void 0===n?!1:n;var p=new ev;d=new iv(d,e,f,null,void 0,k);c=new ov(c,"application/x-mpegURL",p,d,void 0,m);a=new Iaa(a,b);a.B=l?l:1369843;n&&(a.A=!0);return new gC(c,a)};
iC=function(a,b){this.Bf=a;this.g=b};
jC=function(a,b,c,d){var e=[];c=g.q(c);for(var f=c.next();!f.done;f=c.next()){var k=f.value;if(k.url){f=new g.Qy(k.url);var l=k.sig;l?f.set("signature",l):k.s&&f.set("signature",Sz(k.s));for(var m in d)f.set(m,d[m]);k=wv(k.type,k.quality,k.itag,k.width,k.height,!!k.isAccelerated,!!k.isAcceleratedUiEnabled);e.push(new iC(k,f))}}return UA(e,RB(a,b))};
g.kC=function(a,b,c,d){this.we=new window.Set;this.I=a;this.K=b;a=c.split("#");this.C=(0,window.parseInt)(a[0],10);this.B=(0,window.parseInt)(a[1],10);this.l=(0,window.parseInt)(a[2],10);this.columns=(0,window.parseInt)(a[3],10);this.rows=(0,window.parseInt)(a[4],10);this.o=(0,window.parseInt)(a[5],10);this.A=a[6];this.F=a[7];this.L=d};
g.lC=function(a,b){var c=Math.floor(b/(a.columns*a.rows)),d=a.columns*a.rows,e=b%d,f=e%a.columns;e=Math.floor(e/a.columns);var k=a.Uk()+1-d*c;if(k<a.columns){var l=k;d=1}else l=a.columns,d=k<d?Math.ceil(k/a.columns):a.rows;return{url:a.xb(c),Pq:f,columns:l,Zb:e,rows:d,Ko:a.C*l,Jo:a.B*d}};
mC=function(a){g.R.call(this);this.A=new kr;this.l=null;this.H=new window.Set;this.F=a||""};
oC=function(a,b,c){for(c=nC(a,c);0<=c;){var d=a.g[c];if(d.Tb(Math.floor(b/(d.columns*d.rows)))&&(d=g.lC(d,b)))return d;c--}return g.lC(a.g[0],b)};
qC=function(a,b,c){c=nC(a,c);for(var d,e;0<=c;c--)if(d=a.g[c],e=Math.floor(b/(d.columns*d.rows)),!d.Tb(e)){d=a;var f=c,k=f+"-"+e;d.H.has(k)||(d.H.add(k),jr(d.A,f,{Bs:f,ru:e}))}pC(a)};
pC=function(a){if(!a.l&&!a.A.isEmpty()){var b=a.A.remove(),c=new window.Image;a.F&&(c.crossOrigin=a.F);c.src=a.g[b.Bs].xb(b.ru);c.onload=(0,g.A)(a.K,a,b.Bs,b.ru);a.l=c}};
rC=function(a,b,c,d){d=void 0===d?!1:d;mC.call(this,c);this.isLive=d;this.g=this.o(a,b);this.B=new window.Map;1<this.g.length&&this.g[0].isDefault()&&this.g.splice(0,1)};
nC=function(a,b){var c=a.B.get(b);if(c)return c;c=a.g.length;for(var d=0;d<c;d++)if(a.g[d].C>=b)return a.B.set(b,d),d;a.B.set(b,c-1);return c-1};
sC=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.kC.call(this,a,b,c,0);this.g=null;this.H=d?3:0};
tC=function(a,b){rC.call(this,a,0,void 0,b)};
uC=function(a,b){this.Bf=a;this.g=b};
Laa=function(a){var b=[];(0,g.F)(a,function(a){if(a.url){var c=wv(a.type,"medium","0");b.push(new uC(c,a.url))}});
return b};
Maa=function(a){if(void 0==window.navigator.mediaCapabilities)return Xs(a);var b=(0,g.H)(a.videoInfos,function(a){return window.navigator.mediaCapabilities.decodingInfo({type:"media-source",video:a.video?{contentType:a.mimeType,width:a.video.width,height:a.video.height,bitrate:8*a.g,framerate:a.video.fps}:null})});
return g.Zf(b).then(function(b){for(var c=0;c<b.length;c++)a.videoInfos[c].o=b[c].smooth;return a},function(){return a})};
wC=function(a,b){var c={},d;for(d in vC){var e=b?b+d:d;e=a[e+"_webp"]||a[e];g.dw(e)&&(c[vC[d]]=e)}return c};
Oaa=function(a){var b={};if(!a||!a.thumbnails)return b;var c=null;a=g.q(a.thumbnails);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=xC(d);if(g.dw(e)){var f=Naa[d.width];f&&(b[f]=e);if(!c||c.width<d.width)c=d}}c&&1280<c.width&&(b["maxresdefault.jpg"]=xC(c));return b};
xC=function(a){a=a.url;return 0==a.indexOf("//")?"https:"+a:a};
g.yC=function(a,b){this.version=a;this.args=b};
g.zC=function(a,b){this.topic=a;this.g=b};
g.BC=function(a,b){var c=AC();c&&c.publish.call(c,a.toString(),a,b)};
g.FC=function(a,b,c){var d=AC();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,k){var f=g.z("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(CC[e])try{if(k&&a instanceof g.zC&&a!=d)try{var f=a.g,l=k;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.ig){var p=new f;f.ig=p.version}var u=f.ig}catch(v){}if(!u||l.version!=u)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=window.Reflect.construct(f,
g.Za(l.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,k)}catch(v){g.Q(v)}},DC[a.toString()]?g.Eu()?g.Cu(f):g.$r(f,0):f())});
CC[e]=!0;EC[a.toString()]||(EC[a.toString()]=[]);EC[a.toString()].push(e);return e};
IC=function(a,b){var c=g.FC(GC,function(d){a.apply(b,arguments);g.HC(c)},b);
return c};
g.HC=function(a){var b=AC();b&&(g.va(a)&&(a=[a]),(0,g.F)(a,function(a){b.unsubscribeByKey(a);delete CC[a]}))};
AC=function(){return g.z("ytPubsub2Pubsub2Instance")};
Paa=function(a){if(JC.getEntriesByType){var b=JC.getEntriesByType("paint");if(b=g.Na(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ba(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
KC=function(){var a=g.Tr("TIMING_TICK_EXPIRATION");a||(a={},g.Sr("TIMING_TICK_EXPIRATION",a));return a};
Qaa=function(){var a=KC(),b;for(b in a)g.Fu(a[b]);g.Sr("TIMING_TICK_EXPIRATION",{})};
LC=function(a,b){g.yC.call(this,1,arguments)};
MC=function(a,b){g.yC.call(this,1,arguments);this.g=a};
PC=function(a){NC(a);Raa();OC(!1,a);a||(g.Tr("TIMING_ACTION")&&g.Sr("PREVIOUS_ACTION",g.Tr("TIMING_ACTION")),g.Sr("TIMING_ACTION",""))};
$C=function(a,b){a:if(!QC(a)){if(!g.Rs("send_empty_timing")){var c=g.Tr("CSI_SERVICE_NAME","youtube");if(!g.Tr((a||"")+"TIMING_ACTION",void 0)||!c)break a}g.RC("aa",void 0,a);g.SC("ap",1,a);g.SC("yt_fss","c",a);if(g.Rs("enable_csi_abandonment_info")&&!a&&!TC("yt_lt")){c=g.Tr("TIMING_INFO",{});for(var d in c)g.SC(d,c[d]);g.SC("is_nav",1);(d=g.Zu())&&g.SC("csn",d);(d=g.Tr("PREVIOUS_ACTION",void 0))&&g.SC("pa",d);c=UC();c.p=g.Tr("CLIENT_PROTOCOL")||"unknown";c.t=g.Tr("CLIENT_TRANSPORT")||"unknown";g.SC("yt_vis",
VC());if("cold"==c.yt_lt){d=JC.timing||{};d.navigationStart&&(g.RC("srt",d.responseStart),1!=c.prerender&&WC("n",d.navigationStart));c=Paa(d);0<c&&g.RC("fpt",c);g.RC("nreqs",d.requestStart,void 0);g.RC("nress",d.responseStart,void 0);g.RC("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(g.RC("nrs",d.redirectStart,void 0),g.RC("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(g.RC("ndnss",d.domainLookupStart,void 0),g.RC("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-
d.connectStart&&(g.RC("ntcps",d.connectStart,void 0),g.RC("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&0<d.connectEnd-d.secureConnectionStart&&(g.RC("nstcps",d.secureConnectionStart,void 0),g.RC("ntcpe",d.connectEnd,void 0));JC.getEntriesByType&&Saa();d=[];if(window.document.querySelector&&JC&&JC.getEntriesByName)for(var e in XC)c=XC[e],Taa(e,c)&&d.push(c);d.length&&g.SC("rc",d.join(","))}}YC(a)}PC(a);g.Sr(a+"TIMING_AFT_KEYS",b);g.Sr(a+"TIMING_ACTION",a);WC("c",void 0,
a);g.y("ytglobal.timing"+(a||"")+"ready_",!0,void 0);ZC(a)};
g.RC=function(a,b,c){if(!b&&"_"!=a[0]){var d=a;JC.mark&&(g.ob(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),JC.mark(d))}d=aD(c);var e=b||g.yu();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=KC();if(e=d[a])g.Fu(e),d[a]=0;bD(c)["tick_"+a]=b;c||b||g.yu();ZC(c)};
cD=function(a){var b="above_the_fold";JC&&JC.measure&&(g.ob(b,"measure_")||(b="measure_"+b),a?JC.measure(b,a):JC.measure(b))};
WC=function(a,b,c){g.SC("yt_sts",a,c);g.RC("_start",b,c)};
dD=function(a,b){var c=aD(b);return a in c};
g.SC=function(a,b,c){UC(c)[a]=b;bD(c)["info_"+a]=b};
TC=function(a){var b=UC(void 0);return a in b};
eD=function(a){var b=aD(a);if(b.aft)return b.aft;a=g.Tr((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
ZC=function(a){if(!QC(a)){var b=g.Tr((a||"")+"TIMING_ACTION",void 0),c=aD(a);if(g.z("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=eD(a)))if(g.Rs("tighter_critical_section")&&!fD&&(g.BC(Uaa,new LC(Math.round(b-c._start),a)),fD=!0),a)YC(a);else{b=!0;var d=g.Tr("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&YC(a)}}};
VC=function(){switch(qt()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
YC=function(a){Qaa();var b=aD(a),c=UC(a),d=b._start,e;for(e in b)if(g.ob(e,"_")&&g.za(b[e])){var f=e.slice(1);if(f in Vaa){var k=(0,g.H)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.z("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))gD(k,f),PC(a)}else{var l=g.Tr("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.Tr((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var n=window.location.protocol+g.z("ytplayer.config.assets.js");(n=JC.getEntriesByName?JC.getEntriesByName(n)[0]:null)?c.h5jse=Math.round(c.h5jse-n.responseEnd):delete c.h5jse}b.aft=eD(a);Waa(a)&&"youtube"==l&&(g.SC("yt_lt","hot_bg",
a),l=b.vc,n=b.pbs,delete b.aft,c.aft=Math.round(n-l));for(var p in c)"_"!=p.charAt(0)&&(k[p]=c[p]);b.ps=g.yu();c={};p=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,p.push(e+"."+l));k.rt=p.join(",");(b=g.z("ytdebug.logTiming"))&&b(k,c);gD(k,f,a);g.BC(GC,new MC(c.aft+(m||0),a))}};
hD=function(a){return Math.round(JC.timing.navigationStart+a)};
Saa=function(){var a=window.location.protocol,b=JC.getEntriesByType("resource");b=(0,g.Ld)(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Pk(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.RC("wffs",hD(b.startTime)),g.RC("wffe",hD(b.responseEnd)))};
Taa=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=JC.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.RC("rsf_"+b,d+Math.round(c.fetchStart)),g.RC("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(TC("rc")||g.SC("rc",""),0===c.transferSize))?!0:!1:!1};
gD=function(a,b,c){if(g.Rs("debug_csi_data")){var d=g.z("yt.timing.csiData");d||(d=[],g.y("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);window.navigator&&window.navigator.sendBeacon&&b?Os(a):g.Ns(a);OC(!0,c)};
aD=function(a){return iD(a).tick};
UC=function(a){return iD(a).info};
bD=function(a){a=iD(a);"gel"in a||(a.gel={});return a.gel};
iD=function(a){return g.z("ytcsi."+(a||"")+"data_")||NC(a)};
NC=function(a){var b={tick:{},info:{}};g.y("ytcsi."+(a||"")+"data_",b,void 0);return b};
QC=function(a){return!!g.z("yt.timing."+(a||"")+"pingSent_")};
OC=function(a,b){g.y("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Waa=function(a){var b=aD(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==UC(a).yt_pvis};
g.kD=function(a){if(a.simpleText)return a.simpleText;a=g.jD(a);var b=g.Dd("div");b.appendChild(a);return b.textContent};
g.jD=function(a,b){if(a.simpleText){a:{var c=a.simpleText;if(b){var d=lD(c);if(d){c=g.Bd("SPAN",null,d);break a}}c=window.document.createTextNode(c)}return c}c=[];if(a.runs)for(d=0;d<a.runs.length;d++){var e=a.runs[d];e.text&&c.push(Xaa(e,b))}return 1==c.length?c[0]:g.Bd("SPAN",null,c)};
Xaa=function(a,b){var c=null,d=a.text;b&&(d=lD(d)||d);a.bold&&(c=g.Bd("B",null,c||d));a.italics&&(c=g.Bd("I",null,c||d));a.strikethrough&&(c=g.Bd("STRIKE",null,c||d));if(a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint){var e=a.navigationEndpoint.urlEndpoint;c=g.Bd("A",null,c||d);g.Wc(c,e.url);"TARGET_NEW_WINDOW"==e.target&&(c.target="_blank")}return c||g.Bd("SPAN",null,d)};
lD=function(a){a=a.split(/(?:\r\n|\r|\n)/g);if(1<a.length){for(var b=[a[0]],c=1;c<a.length;c++)b.push(g.Bd("BR")),b.push(a[c]);return b}return null};
g.mD=function(a){g.R.call(this);this.adModule=!1;this.adaptiveFormats="";this.bc=null;this.allowEmbed=!0;this.Me=this.backgroundable=!1;this.fe="";this.zj=this.wj=this.vj=!1;this.relativeLoudness=window.NaN;this.watchAjaxToken=this.gg=null;this.author="";this.Oe=0;this.nm=this.fr=this.Ij=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.up=this.channelBanner=this.channelPath=this.Jj="";this.contentCheckOk=!1;this.he=0;this.jr=this.enableCardioBeforePlayback=this.enableCardio=!1;this.endSeconds=
0;this.xe=!1;this.Ve=this.oh=0;this.yk=!1;this.uv=0;this.isLowLatencyLiveStream=this.isLiveDefaultBroadcast=this.isLiveDestination=this.pa=this.ti=this.isListed=this.zn=this.bf=!1;this.latencyClass="UNKNOWN";this.isMdxPlayback=!1;this.mdxControlMode=null;this.isPharma=!1;this.Yf=0;this.reloadReason="";this.Dn=this.ws=this.Lf=!1;this.Ek=0;this.liveChunkReadahead=window.NaN;this.liveStartWalltime=0;this.Hn=null;this.xi=this.lengthSeconds=0;this.playerParams=null;this.paygated=!1;this.ud=[];this.profilePicture=
void 0;this.racyCheckOk=!1;this.rootVeType=0;this.autonavState=1;this.aj=Fv;this.Ud=!1;this.tn=this.startSeconds=0;this.spacecastModule=!1;this.tj=null;this.dj=Fv;this.Ih=this.suggestions=null;this.hlsFormats=this.Mh=this.title="";this.gb=this.df=this.cf=this.Zi=this.tk=null;this.Sl="vvt";this.ypcOfferButtonFormattedText=null;this.requiresPurchase=!1;this.clipStart=0;this.clipEnd=window.Infinity;this.ol=this.Eg=this.hh=!1;this.Rm="";this.yl=this.jp=this.Gr=0;this.os=!1;this.wp=!0;this.eg={};this.ln=
!1;this.captionTracks=[];this.Uh=[];this.qm=0;this.captionTranslationLanguages=[];this.Vh=!1;this.chapterMarkers=[];this.qg=new Ow("und",new fv("Default","und",!0));this.Fn=0;this.Eh=this.Qv=!1;this.ue=null;this.lg=[];this.Yr=!1;this.Sg={};this.cw=new g.P(this.dw,5E3,this);g.J(this,this.cw);this.Qm=0;this.Hr=!0;this.hf=this.Xa=null;this.yn=this.rw=this.partialSpherical=this.Kf=!1;this.ks=this.ls=window.NaN;this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=window.NaN;this.hj=!1;this.Hb={};
this.keywords={};this.Ed={};this.setData(a)};
pD=function(a,b,c){b=b||{};var d={};if(!c)d=a.Xa||{};else if(b.player_response)for(d=g.Kq(b.player_response),d=null!=d?d:{},a.Xa||(a.Xa={}),c=0;c<nD.length;c++){var e=nD[c];e in d&&(a.Xa[e]=d[e])}if(c=oD(d))a.fe=lw(c.invideoUrl),a.vj=!!c.adsOnly,a.wj=!!c.allowInPlaceSwitch;else{if(c=b.iv_invideo_url)a.fe=lw(c);a.vj=pB(a.vj,b.iv_ads_only);a.wj=pB(a.wj,b.iv_allow_in_place_switch)}if(c=b.cta_conversion_urls)a.rq=c;a.isPharma=pB(a.isPharma,b.is_pharma);a.author=sB(a.author,b.author);a.Ij=pB(a.Ij,b.cc_asr);
c=b.ttsurl;jw(c)?a.Jj=c:c&&(c=kw(c),jw(c,!0)&&(a.Jj=c));if(d.captions&&d.captions.playerCaptionsTracklistRenderer)Yaa(a,d.captions.playerCaptionsTracklistRenderer);else{c=b.caption_tracks;e=b.caption_audio_tracks;a.ln=void 0!=c;if(c&&e){Zaa(a,c);$aa(a,e);if(c=b.default_audio_track_index)a.qm=(0,window.parseInt)(c,10)||0;(c=b.caption_translation_languages)&&aba(a,c)}a.Vh=pB(a.Vh,b.cc_contribute)}a.channelPath=sB(a.channelPath,b.channel_path);a.channelBanner=sB(a.channelBanner,b.channel_banner);d.chapterMarkers&&
(a.chapterMarkers=d.chapterMarkers);a.up=sB(a.up,b.short_subscriber_count_text);a.clientPlaybackNonce=sB(a.clientPlaybackNonce,b.cpn);a.subscribed=pB(a.subscribed,b.subscribed);a.shortViewCount=sB(a.shortViewCount,b.short_view_count_text);a.title=sB(a.title,b.title);a.ypcPreview=sB(a.ypcPreview,b.ypc_preview);a.ypcOrigin=sB(a.ypcOrigin,b.ypc_origin);a.paygated=pB(a.paygated,b.paygated);a.requiresPurchase=pB(a.requiresPurchase,b.requires_purchase);if(d=b.keywords)a.keywords=bba(d);if(d=b.rvs)a.suggestions=
es(d);a.contentCheckOk=pB(a.contentCheckOk,"1"==b.cco);a.racyCheckOk=pB(a.racyCheckOk,"1"==b.rco);a.oauthToken=sB(a.oauthToken,b.oauth_token);a.visitorData=sB(a.visitorData,b.visitor_data);if(d=b.session_data)a.nd=g.cs(d);if(d=b.endscreen_autoplay_session_data)a.lr=g.cs(d);a.kr=sB(a.kr,b.endscreen_ad_tracking_data);a.kx=pB(a.kx,b.wait_for_vast_info_cards_xml);a.Aw=pB(a.Aw,b.suppress_creator_endscreen);a.ug=sB(a.ug,b.wpid);a.Kw=sB(a.Kw,b.tracking_list||b.tv_list);b.skip_wv&&(a.rw=!0);b.intro_start_ms&&
b.intro_end_ms&&(a.ls=(0,window.parseInt)(b.intro_start_ms,10),a.ks=(0,window.parseInt)(b.intro_end_ms,10));(0,g.F)(cba,function(a){a in b&&(this.Hb[a]=b[a])},a)};
dba=function(a){if(!a||!a.adPlacements)return!1;a=g.q(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1};
qD=function(a){return!(!a.Ha||!a.Ha.videoInfos.length)};
eba=function(a){return a.l&&Ly('video/webm; codecs="vp9"')&&Ub(a.g,function(a){return pv(a.info)})};
rD=function(a){return!VA()||a.fr?!0:!1};
g.sD=function(a){if(!a.hf)return null;var b=null!=a.hf.latitudeE7&&null!=a.hf.longitudeE7?a.hf.latitudeE7+","+a.hf.longitudeE7:",";return b+=","+(a.hf.clientPermissionState||0)+","+(a.hf.locationRadiusMeters||"")+","+(a.hf.locationOverrideToken||"")};
tD=function(a){a.ga()||(a.xe=!1,a.P("dataloaded",a.Hb))};
uD=function(a,b,c){c&&a.la&&a.la.dispose();a.la=b;g.J(a,b);(a.te()||a.se()||a.Bg()||a.Gd())&&a.ud.push("webgl");a.la.isLive||(a.pa=!1)};
g.vD=function(a,b,c){if(a.ga())return Ws();a.Ha=null;a.cf=null;a.df=null;var d=b.A.c;g.T(b.experiments,"disable_rqs")||(a.Kf=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(d)||g.T(b.experiments,"html5_high_res_logging"));return fba(a,b,c).then(void 0,(0,g.A)(a.NA,a,b)).then(void 0,(0,g.A)(a.KA,a,b,c)).then(void 0,(0,g.A)(a.LA,a,b)).then(void 0,(0,g.A)(a.OA,a,b)).then(void 0,(0,g.A)(a.MA,a,b)).then(function(){if(g.T(b.experiments,"html5_probe_media_capabilities")&&
a.Ha)return Maa(a.Ha).then(a.Cl,void 0,a)})};
fba=function(a,b,c){if(!c&&!rD(a)){c=!1;if(a.spacecastAdaptiveFormats)uD(a,Zz(wD(a,a.spacecastAdaptiveFormats),a.bc,a.lengthSeconds,void 0),!0),c=!0;else if(a.la&&a.Fl){var d=jA(a.la,a.Fl);d&&(uD(a,d,!0),c=!0)}if(c)return gB(b.X,a.la,a.ue,!0,!1,!b.F||a.hj&&b.Za).then(a.Cl,void 0,a).then(a.pr,void 0,a)}return Ws()};
xD=function(a,b){var c={cpn:a.clientPlaybackNonce,c:b.A.c,cver:b.A.cver};a.kl&&(c.ptk=a.kl,c.oid=a.wv,c.ptchn=a.vv,c.pltype=a.xv);return c};
g.yD=function(a){return Gs()&&a.fairPlayCert?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.Da&&a.Da.bc||null};
zD=function(a){var b=a.Xa&&a.Xa.paidContentOverlay&&a.Xa.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.kD(b.text):a.HI};
AD=function(a){var b=a.Xa&&a.Xa.paidContentOverlay&&a.Xa.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?Mb(b.durationMs):a.uv};
g.BD=function(a,b){return g.w(a.keywords[b])?a.keywords[b]:null};
g.CD=function(a){if(!a.gb)if(a.Xa&&a.Xa.storyboards){var b=a.Xa.storyboards;b.playerStoryboardSpecRenderer?a.gb=new rC(b.playerStoryboardSpecRenderer.spec,a.lengthSeconds):b.playerLiveStoryboardSpecRenderer&&a.la&&(a.gb=new tC(b.playerLiveStoryboardSpecRenderer.spec,a.la.isLive))}else(b=a.Hb.storyboard_spec)?a.gb=new rC(b,a.lengthSeconds):(b=a.Hb.live_storyboard_spec)&&a.la&&(a.gb=new tC(b,a.la.isLive));return a.gb};
DD=function(a){return!!(a.bd||a.adaptiveFormats||a.Mh||a.Ih||a.spacecastFormatMap||a.spacecastAdaptiveFormats||a.hlsvp)};
ED=function(a){var b=g.Sa(a.ud,"ypc");a.ypcPreview&&(b=!1);return a.Uc()&&!a.xe&&(DD(a)||g.Sa(a.ud,"fresca")||g.Sa(a.ud,"heartbeat")||b)};
wD=function(a,b,c){b=es(b);var d={};c&&(0,g.F)(c.split(","),function(a){(a=a.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[a[1]]={width:a[2],height:a[3]})});
(0,g.F)(b,function(a){var b=d[a.itag];b&&(a.width=b.width,a.height=b.height)},a);
return b};
gba=function(a){a=es(a);var b={};(0,g.F)(a,function(a){var c=a.family;a=a.url;c&&a&&(b[c]=a)});
return b};
Zaa=function(a,b){for(var c=es(b),d=0;d<c.length;d++){var e=c[d],f=e.u;jw(f)&&a.captionTracks.push(new g.Mw({is_translateable:pB(!1,e.t),languageCode:e.lc,languageName:e.n,url:f,vss_id:e.v,kind:e.k,format:3}))}};
$aa=function(a,b){var c=es(b);a.Uh=[];(0,g.F)(c,function(a){var b={};g.t(a.aid)&&(b.audioTrackId=a.aid);var c=a.i;c&&(b.captionTrackIndices=(0,g.H)(c.split(","),function(a){return(0,window.parseInt)(a,10)}));
b.hasDefaultTrack=g.t(a.d);b.hasDefaultTrack&&(b.defaultCaptionTrackIndex=(0,window.parseInt)(a.d,10)||void 0);b.hasForcedTrack=g.t(a.f);b.hasForcedTrack&&(b.forcedCaptionTrackIndex=(0,window.parseInt)(a.f,10));b.visibility=hba[(0,window.parseInt)(a.v,10)]||"UNKNOWN";this.Uh.push(b)},a)};
aba=function(a,b){for(var c=es(b),d=0;d<c.length;d++){var e=c[d];a.captionTranslationLanguages.push(new g.Lw({languageCode:e.lc,languageName:e.n}))}};
Yaa=function(a,b){a.ln=!0;a.captionTracks=[];b.captionTracks&&(0,g.F)(b.captionTracks,function(a){var b=a.baseUrl;jw(b,!0)&&(a=new g.Mw({is_translateable:!!a.isTranslatable,languageCode:a.languageCode,languageName:a.name&&g.kD(a.name),url:b,vss_id:a.vssId,kind:a.kind,format:3}),this.captionTracks.push(a))},a);
a.Uh=b.audioTracks||[];a.qm=b.defaultAudioTrackIndex||0;a.captionTranslationLanguages=b.translationLanguages?(0,g.H)(b.translationLanguages,function(a){return new g.Lw({languageCode:a.languageCode,languageName:g.kD(a.languageName)})}):[];
a.Vh=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
g.FD=function(a,b){return!!a.Hb[b]};
g.GD=function(a){return a.pa&&!a.Me};
HD=function(a){return a.pa&&a.Me};
ID=function(a){var b=g.hc(a.Hb);!a.pa&&0<a.startSeconds&&(b.start=a.startSeconds);return b};
iba=function(a){a.Ha=a.Ha.l};
g.JD=function(a){if(a.Aw)return null;var b=a.Hb.iv_endscreen_url;b||(b=a.Xa&&a.Xa.endscreen&&a.Xa.endscreen.endscreenUrlRenderer&&a.Xa.endscreen.endscreenUrlRenderer.url);return b};
KD=function(a,b){return a.adFormat&&"1_5"!=a.adFormat?"adunit":b.V};
LD=function(a,b){if(a.isAd()&&a.videoId!=b.ua)return b.ua};
MD=function(a,b){var c=b.jj||a.bf;if(g.T(b.experiments,"html5_new_autoplay_redux")){var d=a.bf||"detailpage"==KD(a,b);d!=c&&g.Q(Error("b/64881898 a "+d),"WARNING");return d}return c};
ND=function(a,b){var c=a.bf||!g.T(b.experiments,"html5_deprecated_autoplay_killswitch")&&b.kb;if(g.T(b.experiments,"html5_new_autoplay_redux")){var d=!1;MD(a,b)&&(d="detailpage"==KD(a,b)?a.yk||0<a.Yf:!0);d!=c&&g.Q(Error("b/64881898 b "+d),"WARNING");return d}return c};
OD=function(a,b){var c=1,d=g.yv(b.experiments,"html5_default_ad_gain");d&&a.isAd()&&(c=d);return Math.min(1,Math.pow(10,-a.relativeLoudness/20))||c};
oD=function(a){return a&&a.annotations&&(a=a.annotations[0],a.playerAnnotationsUrlsRenderer)?a.playerAnnotationsUrlsRenderer:null};
bba=function(a){var b={};(0,g.F)(a.split(","),function(a){var c=a.split("=");2==c.length?b[c[0]]=c[1]:b[a]=!0});
return b};
PD=function(a,b,c,d){this.videoData=a;this.g=b;this.reason=c;this.l=d};
g.QD=function(a){return(a=jba[a.toString()])?a:"YTP_ERROR_LICENSE"};
kba=function(){this.B=this.g=window.NaN;this.o=this.A=this.l=!1};
RD=function(a,b){return b>a.g&&b<a.g+5};
SD=function(a,b,c,d){if(d=1<d)a.A=!0;if(a.l)b!=a.g&&(a.l=!1);else if(0<b&&a.g==b)return c-a.B>(d||!a.A?1500:400);a.g=b;a.B=c;return!1};
TD=function(){var a=[],b=[];return{start:function(b){return a[b]},
end:function(a){return b[a]},
length:a.length}};
UD=function(a,b){b=void 0===b?",":b;var c="";if(a)for(var d=0;d<a.length;d++)c+=a.start(d).toFixed(3)+"-"+a.end(d).toFixed(3)+b;return c};
VD=function(a,b){if(!a)return-1;for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c;return-1};
WD=function(a,b){var c=VD(a,b);return 0<=c?a.end(c):window.NaN};
XD=function(a){return a&&a.length?a.end(a.length-1):window.NaN};
YD=function(a,b){var c=WD(a,b);return 0<=c?c-b:0};
ZD=function(){};
$D=function(){g.I.call(this);this.o=this.l=null;this.F=this.C=!1;this.B=new g.rf;g.J(this,this.B)};
aE=function(a){a=a.g.seekable||TD();return 1>a.length?window.NaN:a.end(a.length-1)};
dE=function(a,b){var c="";b&&(bE(a,b),c=b.Of);a.gd()&&""==c||(c&&a.gd()!=c&&(cE(a,c),a.o&&(a.o.dispose(),a.o=null)),b&&b.g||a.load(),a.F||(a.addEventListener("volumechange",a.Jq),a.F=!0))};
lba=function(a){a=Cy(a.g);return new Dy(a)};
eE=function(a){if(!a.o||a.o.ga()){var b=new Dy(Cy(a.g));Ey(b);dE(a,b.B);a.o=b}};
mba=function(a){eE(a);var b=a.o;a.o=null;return b};
bE=function(a,b){a.l&&null!=b&&b.Of==a.l.Of||(a.l&&a.l.dispose(),a.l=b)};
gE=function(a){return YD(fE(a),a.xa())};
hE=function(a){var b=fE(a);return 0<XD(b)&&a.Bc()?WD(b,a.xa()):0};
iE=function(a){var b=a.Bc();return window.Infinity==b?1:b?hE(a)/b:0};
kE=function(a){return{vct:a.xa().toFixed(3),vd:a.Bc().toFixed(3),vpl:UD(a.g.played||TD()),vbu:UD(fE(a)),vpa:String(a.g.paused),vsk:String(a.g.seeking),ven:String(a.g.ended),vpr:String(a.kc()),vrs:String(a.g.readyState),vns:String(a.g.networkState),vec:String(jE(a)),vvol:String(a.Nb())}};
nba=function(a){a=jE(a);switch(a){case 1:return"aborted";case 2:return"network";case 3:return"decode";case 4:return"unsupported";case 5:return"encrypted";default:return a.toString()}};
lE=function(a,b,c){g.Ne.call(this,b,a);this.g=c||null};
g.mE=function(a,b){this.l=a||64;this.g=void 0===b?null:b};
pba=function(a,b,c,d){function e(a){return!!d&&g.T(d,a)}
if(g.V(a,128))return a;nE=nE||e("html5_dompause_is_paused_killswitch");var f=a.l,k=a.g,l=b.target;if(!g.V(a,64)||"ended"!=b.type&&"pause"!=b.type)if("pause"==b.type&&l.g.ended||"ended"==b.type&&(l.g.ended||1>Math.abs(l.xa()-l.Bc())))0<l.g.networkState&&l.gd()&&(f=14,k=null);else if("pause"==b.type)g.V(a,256)?(f^=256)||(f=64):g.V(a,32)||g.V(a,2)||g.V(a,4)||(f=4,g.V(a,1)&&g.V(a,8)&&(f|=1),k=null);else if("playing"==b.type)e("html5_ignore_playing_evt")?(f=(f|8)&-5,RD(c,l.xa())&&(f&=-2)):(f=8,k=null,
g.V(a,32)&&(f|=32),g.V(a,1)&&oE(c,l)&&(f|=1));else if("error"==b.type){if(c=oba(l))k=c,f|=128}else if("progress"!=b.type||e("html5_ignore_playing_evt"))if("seeked"==b.type)f&=-17;else if("seeking"==b.type){f|=16;if(0>=gE(l)||e("html5_ignore_playing_evt"))f|=1;f&=-3}else if("waiting"==b.type)g.V(a,2)||(f|=1),e("html5_ignore_playing_evt")&&oE(c,l);else if("timeupdate"==b.type)e("html5_ignore_playing_evt")?((g.V(a,8)||g.V(a,16))&&RD(c,l.xa())&&(f=8),oE(c,l)&&(f|=1)):(b=2<l.g.readyState,c.o=c.o||b,g.V(a,
16)||g.V(a,4)||(oE(c,l)?f|=1:e("html5_timeupdate_readystate_check")&&!b&&c.o||(f&=-2)),1<l.g.readyState&&0<l.xa()&&(f&=-65));else return a;else pE(a)&&oE(c,l)&&(f|=1);return qE(a,f,k)};
oE=function(a,b){return SD(a,b.xa(),g.yu(),gE(b))};
qE=function(a,b,c){return b==a.l&&c==a.g||void 0!=b&&(b&128&&!c||b&2&&b&16)?a:new g.mE(b,c)};
rE=function(a,b){return qE(a,a.l|b)};
sE=function(a,b){return qE(a,a.l&~b)};
tE=function(a,b,c){return qE(a,(a.l|b)&~c)};
g.V=function(a,b){return!!(a.l&b)};
g.uE=function(a,b){return b.l==a.l&&b.g==a.g};
g.vE=function(a){return g.V(a,8)&&!g.V(a,64)&&!g.V(a,2)};
pE=function(a){return g.V(a,8)&&!g.V(a,2)&&!(!nE&&g.V(a,1024))};
wE=function(a){return g.V(a,64)&&!g.V(a,8)&&!g.V(a,4)};
g.xE=function(a){return g.V(a,1)&&!g.V(a,2)};
yE=function(a){return g.V(a,128)?-1:g.V(a,2)?0:g.V(a,64)?-1:g.V(a,1)&&!g.V(a,32)?3:g.V(a,8)?1:g.V(a,4)?2:-1};
oba=function(a){if(2==jE(a))var b="progressive.net.retryexhausted";else if(3==jE(a))b="fmt.decode";else if(4==jE(a))b="fmt.unplayable";else if(5==jE(a))b="drm.unavailable";else return null;var c="mediaElem.1";zE(a)&&(c+=";msg."+zE(a));.001>Math.random()&&(c+=";gpu."+(0,g.AE)());return{errorCode:b,errorDetail:c,message:g.S("YTP_ERROR_GENERIC_WITHOUT_LINK"),messageKey:"YTP_ERROR_GENERIC_WITHOUT_LINK"}};
g.BE=function(a,b){this.state=a;this.g=b};
CE=function(a,b){return g.V(a.state,b)&&!g.V(a.g,b)?1:!g.V(a.state,b)&&g.V(a.g,b)?-1:0};
g.DE=function(a,b){return a.baseYtUrl+"timedtext_video?ref=player&v="+b.videoId};
EE=function(){this.endTime=this.startTime=-1;this.rm="-";this.playbackRate=1;this.visibilityState=0;this.hm="";this.volume=this.connectionType=this.xf=0;this.muted=!1};
GE=function(a){this.l=a;this.g=0;this.B=-1;this.K=this.l.dd().volume;this.I=this.l.dd().muted;this.C=window.NaN;this.o=0;this.Ta=[];this.A=FE(this.l);this.F=this.H=0};
g.HE=function(a){a.A.startTime=a.o;a.A.endTime=a.g;a.Ta.length&&g.Ka(a.Ta).isEmpty()?a.Ta[a.Ta.length-1]=a.A:a.Ta.length&&a.A.isEmpty()||a.Ta.push(a.A);a.H+=a.g-a.o;a.A=FE(a.l);a.o=a.g};
IE=function(a){return a.H+a.l.l()-a.o};
JE=function(a){a.Ta.length&&a.g==a.o||g.HE(a);var b=a.Ta;a.Ta=[];return b};
KE=function(a,b,c){c-=a.C;return b==a.g&&.5<c};
qba=function(a,b,c,d,e,f,k,l,m,n,p,u,v){this.videoData=a;this.g=b;this.dd=c;this.C=d;this.l=e;this.B=f;this.L=k;this.getAudioTrack=l;this.K=m;this.F=n;this.A=p;this.H=u||function(){};
this.o=null;this.I=v||function(){}};
g.LE=function(a){return rba(a)()};
rba=function(a){if(!a.o){var b=g.B(function(a){var b=g.yu();a&&631152E6>=b&&(g.Q(Error("invalid yt.global.now value: "+b)),b=(new Date).getTime()+2);return b},g.T(a.g.experiments,"html5_validate_yt_now"));
a.o=g.B(function(a){return Math.round(b()-a)/1E3},b());
a.I()}return a.o};
ME=function(a){var b=a.dd();g.Ia(b,a.videoData.dd());return b};
OE=function(){return window.navigator.connection&&window.navigator.connection.type?NE[window.navigator.connection.type]||NE.other:0};
FE=function(a){var b=new EE;b.rm=a.dd().cc||"-";b.playbackRate=a.K();var c=a.A();0!=c&&(b.visibilityState=c);a.g.xf&&(b.xf=1);c=a.getAudioTrack();c.ob&&c.ob.id&&"und"!=c.ob.id&&(b.hm=c.ob.id);b.connectionType=OE();b.volume=a.dd().volume;b.muted=a.dd().muted;return b};
QE=function(a){g.I.call(this);var b=this;this.g=a;this.l={};this.ua=1;this.T=window.NaN;this.o="N";this.C=this.ba=this.A=0;this.L=this.aa="";this.V=0;this.da=-1;this.K=this.O=0;this.U=this.I=!1;this.ha=[];this.F=null;this.H=!1;(a=window.navigator.getBattery?window.navigator.getBattery():null)&&a.then&&a.then(function(a){b.F=a});
this.sa=(g.yv(this.g.g.experiments,"html5_disable_qoe_percentage")||0)>Math.floor(100*Math.random());g.T(this.g.g.experiments,"html5_qoe_unstarted_in_initialization")&&g.PE(this,0,"vps",["N"])};
g.PE=function(a,b,c,d){var e=a.l[c];e||(e=[],a.l[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
TE=function(a,b){b=0<=b?b:g.LE(a.g);var c=a.g.B();if(!(0,window.isNaN)(a.X)&&!(0,window.isNaN)(c.o)){var d=c.o-a.X;0<d&&g.PE(a,b,"bwm",[d,(c.B-a.ya).toFixed(3)])}a.X=c.o;a.ya=c.B;(0,window.isNaN)(c.bandwidthEstimate)||g.PE(a,b,"bwe",[c.bandwidthEstimate.toFixed(0)]);a.g.videoData.Kf&&c.g&&RE(a,"bwinfo",c.g);a.F&&g.PE(a,b,"bat",[a.F.level,a.F.charging?"1":"0"]);d=a.g.A();a.da!=d&&(g.PE(a,b,"vis",[d]),a.da=d);g.PE(a,b,"cmt",[a.g.l().toFixed(3)]);(d=OE())&&d!=a.V&&(g.PE(a,b,"conn",[d]),a.V=d);SE(a,b,
c);null!==a.g.videoData.tj&&(a.l.acc=[a.g.videoData.tj.join(":")])};
SE=function(a,b,c){if(!(0,window.isNaN)(c.l)){var d=c.l;c.A<d&&(d=c.A);g.PE(a,b,"bh",[d.toFixed(3)])}};
UE=function(a){var b=0,c;for(c in a.l)b+=c.length+Pk(a.l[c],function(a,b){return a+b.length},0);
1E3<b&&(new g.P(a.B,0,a)).start()};
VE=function(a,b,c,d){var e=a.g.l();c=[c,e.toFixed(3)];d&&c.push(d);g.PE(a,b,"error",c)};
tba=function(a,b){if(g.V(b,128))return"ER";if(g.V(b,512))return"SU";if(g.V(b,16)||g.V(b,32))return"S";var c=sba[yE(b)];g.T(a.g.g.experiments,"tvhtml5_background_su")&&g.EB(a.g.g)&&"B"==c&&3==a.g.A()&&(c="SU");"B"==c&&g.V(b,4)&&(c="PB");return c};
WE=function(a,b){var c=a.l.cat||[];c.push(b);a.l.cat=c};
RE=function(a,b,c,d){var e=a.l.ctmp||[],f=-1!=a.ha.indexOf(b);f||a.ha.push(b);d&&f||(d||(c="t."+(1E3*g.LE(a.g)).toFixed()+";"+c),e.push(b+":"+c),a.l.ctmp=e,UE(a))};
XE=function(a,b,c,d){this.Va=b;this.segments=[];this.experimentIds=[];this.adQueryId=null;this.Lf=this.Ma=this.da=this.aa=this.Fb=this.U=this.autoplay=this.autonav=!1;this.ha="yt";this.gg=this.l=this.B=null;this.T=!1;this.A="watchtime"==c;this.o="playback"==c;this.H="delayplay"==c;this.F="atr"==c;this.Ja="engage"==c;this.Eh=!1;this.zb=this.F?"/api/stats/"+c:"//"+b.tf+"/api/stats/"+c;d&&(this.da=d.fs,d.rtn&&(this.l=d.rtn),this.A?(this.Wa=d.state,0<d.rti&&(this.B=d.rti)):(this.Oa=d.mos,this.jb=d.volume,
d.at&&(this.adType=d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.sa=d.inview),d.size&&(this.ma=d.size));this.Ua=g.hc(b.A);this.U=b.B;this.ya=b.Sa;this.experimentIds=b.experiments.experimentIds;this.X=b.Yb;this.ha=b.Wa;this.region=b.region;this.bb=b.Ua?b.Ua.toString():"";this.userAge=b.userAge;this.userGender=b.userGender;this.Ab=g.Lu();this.Eh=b.qc;c=this.Va;this.I=a.oauthToken||c.sa;this.adFormat=a.adFormat;this.adQueryId=a.adQueryId;this.autoplay=ND(a,c);this.autonav=a.yk||this.autonav;
this.contentVideoId=LD(a,c);this.gg=a.gg;this.clientPlaybackNonce=a.clientPlaybackNonce;a.vssCredentialsToken&&(this.O=a.vssCredentialsToken,this.tb=a.Sl);a.mdxEnvironment&&(this.mdxEnvironment=a.mdxEnvironment);this.Oe=a.Oe;this.he=a.he;a.Da&&(this.ua=nv(a.Da),a.Jb&&nv(a.Jb)!=this.ua&&(this.L=nv(a.Jb)));this.Lf=a.Lf;this.oh=a.oh;a.pa&&(this.Sa=a.Me?"dvr":"live");this.xi=a.xi;this.Fe=a.Fe;this.playbackId=a.playbackId;this.eventId=a.eventId;this.playlistId=a.Kw||a.playlistId;this.ul=a.ul;this.Zf=a.Zf;
this.gf=a.gf;this.El=a.El;this.subscribed=a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.bp=a.bp;this.referrer=a.referrer;this.Yi=a.fp||a.Yi;this.Kh=a.Kh;this.Jl=a.Jl;this.ug=a.ug;this.Ca=KD(a,b)};
ZE=function(a){var b={ns:a.ha,el:a.Ca,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.g(a.Oe),plid:a.playbackId,ei:a.eventId,fmt:a.ua,fs:a.da?"1":"0",rt:a.g(a.kb),of:a.bp,adformat:a.adFormat,content_v:a.contentVideoId,euri:a.ya,lact:a.Ab,live:a.Sa,cl:a.bb,mos:a.Oa,osid:a.osid,state:a.Wa,vm:a.videoMetadata,volume:a.jb};a.adQueryId&&(b.aqi=a.adQueryId);a.subscribed&&(b.subscribed="1");g.Ia(b,a.Ua);a.autonav&&(b.autonav="1");a.autoplay&&(b.autoplay="1");a.U&&(b.dni="1");a.aa&&
(b["final"]="1");a.Lf&&(b.splay="1");a.he&&(b.delay=a.he);a.X&&(b.hl=a.X);a.region&&(b.cr=a.region);g.t(a.userAge)&&a.userGender&&(b.uga=a.userGender+a.userAge);g.t(a.ba)&&(b.len=a.g(a.ba));!a.A&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!=a.l&&(b.rtn=a.g(a.l));a.Yi&&(b.feature=a.Yi);a.playlistId&&(b.list=a.playlistId);a.Zf&&(b.ctrl=a.Zf);a.gf&&(b.ytr=a.gf);a.El&&(b.ssrt="1");a.L&&(b.afmt=a.L);a.V&&(b.lio=a.g(a.V));a.A?(b.idpj=a.oh,b.ldpj=a.xi,null!=a.B&&(b.rti=a.g(a.B))):
g.t(a.adType)&&(b.at=a.adType);(a.o||a.H)&&a.gg&&(b.tst=a.gg);a.ma&&(a.o||a.H)&&(b.size=a.ma);null!=a.sa&&(a.o||a.H)&&(b.inview=a.g(a.sa));a.A&&(b.volume=YE(a,(0,g.H)(a.segments,function(a){return a.volume})),b.muted=YE(a,(0,g.H)(a.segments,function(a){return a.muted?1:0})),b.st=YE(a,(0,g.H)(a.segments,function(a){return a.startTime})),b.et=YE(a,(0,g.H)(a.segments,function(a){return a.endTime})),(0,g.Ek)(a.segments,function(a){return 1!=a.playbackRate})&&(b.rate=YE(a,(0,g.H)(a.segments,function(a){return a.playbackRate}))));
(0,g.Ek)(a.segments,function(a){return 0!=a.visibilityState})&&(b.vis=YE(a,(0,g.H)(a.segments,function(a){return a.visibilityState})));
(0,g.Ek)(a.segments,function(a){return 0!=a.connectionType})&&(b.conn=YE(a,(0,g.H)(a.segments,function(a){return a.connectionType})));
(0,g.Ek)(a.segments,function(a){return 0!=a.xf})&&(b.blo=YE(a,(0,g.H)(a.segments,function(a){return a.xf})));
(0,g.Ek)(a.segments,function(a){return"-"!=a.rm})&&(b.cc=(0,g.H)(a.segments,function(a){return a.rm}).join(","));
if((0,g.Ek)(a.segments,function(a){return!!a.hm})){var c="au";
a.o&&(c="au_d");b[c]=(0,g.H)(a.segments,function(a){return a.hm}).join(",")}ks()&&a.O&&(b.ctt=a.O,b.cttype=a.tb,b.mdx_environment=a.mdxEnvironment);
a.Ja&&(b.etype=g.t(a.C)?a.C:0);a.Kh&&(b.uoo=a.Kh);a.Jl&&(b.upt=a.Jl);a.ug&&(b.wpid=a.ug);return b};
YE=function(a,b){return(0,g.H)(b,a.g).join(",")};
$E=function(a){g.I.call(this);this.g=a;this.l=new QE(a);g.J(this,this.l);this.o=new GE(a);this.C="paused";this.F=window.NaN;this.K=[10,10,10,40];this.L=this.I=0;this.V=this.T=this.X=this.ba=this.U=this.O=this.B=!1;this.A=window.NaN};
aF=function(a,b,c){var d=g.LE(a.g);c=(0,window.isNaN)(c)?d:c;c=Math.ceil(c);var e=a.K[a.I];a.I+1<a.K.length&&a.I++;c+=e;d=1E3*(c-d);a.F=g.$r((0,g.A)(a.aa,a,c,b),d);return c};
bF=function(a,b){var c=ME(a.g);g.Ia(c,{state:a.C});c=new XE(a.g.videoData,a.g.g,b,c);c.Oe=a.g.l();a.g.videoData.pa||(c.ba=a.g.C());if(a.g.videoData.la){var d=pA(a.g.videoData.la,c.Oe);d&&(c.V=d-c.Oe)}c.kb=g.LE(a.g);c.segments=[FE(a.g)];return c};
cF=function(a,b){var c=bF(a,"watchtime");c.segments=b;c.Oe=a.o.g;return c};
dF=function(a){a.o.update();return cF(a,JE(a.o))};
gF=function(a){a.g.videoData.remarketingUrl&&!a.ba&&(eF(a,a.g.videoData.remarketingUrl),a.ba=!0);a.g.videoData.youtubeRemarketingUrl&&!a.X&&(eF(a,a.g.videoData.youtubeRemarketingUrl),a.X=!0);a.g.videoData.googleRemarketingUrl&&!a.T&&(eF(a,a.g.videoData.googleRemarketingUrl),a.T=!0);a.g.videoData.ppvRemarketingUrl&&!a.V&&(eF(a,a.g.videoData.ppvRemarketingUrl),a.V=!0);fF(a)};
hF=function(a){a.A=g.as((0,g.A)(a.H,a,"heartbeat"),3E4)};
fF=function(a){a.g.videoData.Ed.eventLabel=KD(a.g.videoData,a.g.g);a.g.videoData.Ed.playerStyle=a.g.g.playerStyle;a.g.videoData.ql&&(a.g.videoData.Ed.feature="pyv");a.g.videoData.Ed.vid=a.g.videoData.videoId;var b=a.g.videoData.Ed;a=a.g.videoData;a=a.isAd()||!!a.ql;b.isAd=a};
eF=function(a,b,c){a.g.g.qc&&a.g.videoData.visitorData&&js(b)?g.qs(b,{Kc:c,headers:{"X-Goog-Visitor-Id":a.g.videoData.visitorData}}):g.Ns(b,c)};
iF=function(a,b){var c=a.l;g.PE(c,g.LE(c.g),"lra",[b]);RE(c,"live-readahead-seconds",b.toString())};
jF=function(a,b){Cw.call(this,a,b);this.g=!1;Ew(this,"getPresentingPlayerType",this.Ga);Ew(this,"addInfoCardXml",this.mC);Ew(this,"cueVideoByPlayerVars",this.nC);Ew(this,"loadVideoByPlayerVars",this.Ii);Ew(this,"preloadVideoByPlayerVars",this.ko);Ew(this,"seekBy",this.Hd);Ew(this,"updatePlaylist",this.JC);Ew(this,"updateLastActiveTime",this.IC);Ew(this,"updateVideoData",this.KC);Ew(this,"getPlayerResponse",this.getPlayerResponse);Ew(this,"getStoryboardFormat",this.getStoryboardFormat);Ew(this,"getProgressState",
this.Qf);Ew(this,"getHousebrandProperties",this.qC);Ew(this,"setPlaybackQualityRange",this.wt);Ew(this,"getCurrentPlaylistSequence",this.pC);Ew(this,"canPlayType",this.bo);Ew(this,"sendVideoStatsEngageEvent",this.De);Ew(this,"setCardsVisible",this.Ji);Ew(this,"handleGlobalKeyDown",this.vC);Ew(this,"getAudioTrack",this.getAudioTrack);Ew(this,"setAudioTrack",this.mo);Ew(this,"getAvailableAudioTracks",this.getAvailableAudioTracks);Ew(this,"getMaxPlaybackQuality",this.rC);Ew(this,"getUserPlaybackQualityPreference",
this.tC);Ew(this,"setSizeStyle",this.EC);Ew(this,"forceFrescaUpdate",this.oC);Ew(this,"setAutonav",this.mt);Ew(this,"setAutonavState",this.ho);Ew(this,"showControls",this.xt);Ew(this,"hideControls",this.vt);Ew(this,"getVisibilityState",this.Ye);Ew(this,"shouldSendVisibilityState",this.HC);Ew(this,"getVideoContentRect",this.qt);Ew(this,"setSafetyMode",this.DC);Ew(this,"setFauxFullscreen",this.zC);Ew(this,"cancelPlayback",this.jo);Ew(this,"getVideoStats",this.Ir);Ew(this,"updateSubtitlesUserSettings",
this.Ok);Ew(this,"getSubtitlesUserSettings",this.Kg);Ew(this,"resetSubtitlesUserSettings",this.lo);Ew(this,"isFastLoad",this.wC);Ew(this,"isInline",this.xC);Ew(this,"isPeggedToLive",this.isPeggedToLive);Ew(this,"setMinimized",this.CC);Ew(this,"setInline",this.BC);Ew(this,"getSphericalProperties",this.eo);Ew(this,"setSphericalProperties",this.Mk);Ew(this,"getSphericalConfig",this.sC);Ew(this,"setSphericalConfig",this.FC);Ew(this,"setBlackout",this.yC);Ew(this,"onAdUxClicked",this.Zd);Ew(this,"getPlayerSize",
this.Jg);Ew(this,"setGlobalCrop",this.AC);Ew(this,"wakeUpControls",this.PJ);Ew(this,"isMutedByMutedAutoplay",this.wA);Ew(this,"getVideoAspectRatio",this.uC);Ew(this,"setUseFastSizingOnWatch",this.GC)};
kF=function(a,b){this.o=a;this.l=b||null;this.A=!1};
lF=function(a,b){var c=a.o,d=g.JB(c)&&c.kb&&c.Qc;if(c.Nc&&(HB(c)||g.aC(c)||d)&&!a.A){a.A=!0;g.Tr("TIMING_ACTION")||g.Sr("TIMING_ACTION",a.o.csiPageType);a.o.jb&&g.Sr("CSI_SERVICE_NAME",a.o.jb);if(a.l){c=a.l.aa;for(var e in c)g.RC(e,c[e],"");e=a.l.X;for(var f in e)g.SC(f,e[f],"");f=a.l;f.aa={};f.X={}}g.SC("yt_pvis",VC(),"");g.SC("yt_pt","html5","");b&&!dD("pbs","")&&a.g("pbs",b);f=a.o;HB(f)&&"blazer"!=f.playerStyle||g.aC(f)||!dD("_start","")||YC("")}};
g.mF=function(a,b,c){this.start=a;this.end=b;this.B=uba++;a=c||{};this.oa=a.id||"";this.C=a.priority||7;this.active=!0;this.visible=a.visible||!1;this.style=a.style||"ytp-ad-progress";this.namespace=a.namespace||"";this.color="";if(b=a.color)b=b.toString(16),this.color="#"+Array(7-b.length).join("0")+b;this.o=null;this.tooltip=a.tooltip;this.visible=this.visible;this.style=this.style;this.start=this.start};
nF=function(a){return-0x8000000000000==a?"BEFORE_MEDIA_START":0==a?"MEDIA_START":0x7ffffffffffff==a?"MEDIA_END":0x8000000000000==a?"AFTER_MEDIA_END":a.toString()};
vba=function(a,b){switch(a.style){case "ytp-chapter-marker":return b?8:5;case "ytp-ad-progress":return 6;case "ytp-time-marker":return Number.POSITIVE_INFINITY;default:return 0}};
g.oF=function(a,b){return a.start-b.start||a.C-b.C||a.B-b.B};
g.pF=function(a,b){this.type=a||"";this.id=b||""};
g.rF=function(a){g.R.call(this);this.startSeconds=0;this.ww=!1;this.Pa=0;this.title="";this.Nf=0;this.Ba=[];this.wi=this.we=!1;this.nd=this.lr=this.Xi=null;this.views=0;this.Uy=0!=a.fetch;this.ld=[];this.Pa=Math.max(0,a.index||0);this.loop=!!a.loop;this.startSeconds=a.startSeconds||0;this.FE="1"==a.mob;this.title=a.playlist_title||"";this.description=a.playlist_description||"";this.author=a.author||a.playlist_author||"";this.eg={};a.video_id&&(this.Ba[this.Pa]=a);var b=a.api;b&&("string"==typeof b&&
16==b.length?a.list="PL"+b:a.playlist=b);this.Gk=0;if(b=a.list)switch(a.listType){case "user_uploads":this.wi||(this.listId=new g.pF("UU","PLAYER_"+b),qF(this,"/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:b}));break;case "user_favorites":this.wi||(this.listId=new g.pF("FL","PLAYER_"+b),qF(this,"/list_ajax?style=json&action_get_favorited_by_user=1",{username:b}));break;case "search":wba(this,b);break;default:var c=a.playlist_length;c&&(this.Nf=c);this.listId=new g.pF(b.substr(0,
2),b.substr(2));(b=a.video)?(this.Ba=b.slice(0),this.we=!0):xba(this)}else a.playlist&&(b=a.playlist.toString().split(","),0<this.Pa&&(this.Ba=[]),(0,g.F)(b,function(a){a&&this.Ba.push({video_id:a})},this),this.Nf=this.Ba.length,b=(0,g.H)(this.Ba,function(a){return a.video_id}),qF(this,"/list_ajax?style=json&action_get_templist=1",{video_ids:b.join(",")}),this.we=!0);
this.setShuffle(!!a.shuffle);if(b=a.suggestedQuality)this.quality=b;this.eg=wC(a,"playlist_");this.Ew=(a=a.thumbnail_ids)?a.split(","):[]};
sF=function(a){return!!(a.playlist||a.list||a.api)};
tF=function(a){var b=a.Pa+1;return b>=a.Nf?0:b};
uF=function(a){var b=a.Pa-1;return 0>b?a.Nf-1:b};
vF=function(a,b){a.Pa=g.$c(b,0,a.Nf-1);a.startSeconds=0};
wba=function(a,b){if(!a.wi){a.listId=new g.pF("SR",b);var c={search_query:b};a.FE&&(c.mob="1");qF(a,"/search_ajax?style=json&embeddable=1",c)}};
xba=function(a){if(!a.wi){var b=b||a.listId;b={list:b};var c=a.Eb();c&&c.videoId&&(b.v=c.videoId);qF(a,"/list_ajax?style=json&action_get_list=1",b)}};
qF=function(a,b,c){a.Uy&&g.qs(g.Ug(b,c),{format:"JSON",fb:(0,g.A)(function(a,b){wF(this,b)},a),
onError:(0,g.A)(function(){this.P("error")},a)})};
wF=function(a,b){if(b.video&&b.video.length){a.title=b.title;a.description=b.description;a.views=b.views;a.author=b.author;var c=b.loop;c&&(a.loop=c);c=a.Eb();a.Ba=[];(0,g.F)(b.video,function(a){a&&(a.video_id=a.encrypted_id,this.Ba.push(a))},a);
a.Nf=a.Ba.length;var d=b.index;d?a.Pa=d:a.bi(c);a.setShuffle(!1);a.wi=!1;a.we=!0;a.Gk++;a.Xi&&a.Xi()}};
xF=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
yF=function(a){this.l=window.Float32Array?new window.Float32Array(a):Array(a);this.o=this.g=a-1};
zF=function(a){return a.l[a.g]||0};
yba=function(){this.B=new yF(50);this.g=null;this.A=this.o=0;this.l=null};
BF=function(a,b,c){g.R.call(this);var d=new zba;if("ULTRALOW"==a.latencyClass||g.T(b,"html5_treat_latency_low_like_ultra_low")&&a.isLowLatencyLiveStream)d.A=!1;a.ti?d.o=3:g.GD(a)&&(d.o=2);if(Cs()){var e=g.yv(b,"html5_platform_minimum_readahead_seconds")||3;d.l=Math.max(d.l,e)}g.yv(b,"html5_minimum_readahead_seconds")&&(d.l=g.yv(b,"html5_minimum_readahead_seconds"));g.yv(b,"html5_maximum_readahead_seconds")&&(d.C=g.yv(b,"html5_maximum_readahead_seconds"));g.T(b,"html5_force_adaptive_readahead")&&(d.A=
!0);g.yv(b,"html5_allowable_liveness_drift_chunks")&&(d.g=g.yv(b,"html5_allowable_liveness_drift_chunks"));g.T(b,"html5_disable_use_media_max_time")&&(d.B=!0);g.yv(b,"html5_readahead_ratelimit")&&(d.F=g.yv(b,"html5_readahead_ratelimit"));switch(a.liveExperimentalContentId){case 21530001:d.g/=5}this.l=d;this.A=a;this.I=c;this.o=[];this.B=0;this.C=1!=this.l.o;this.F=!1;this.H=0;b=(0,window.isNaN)(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.ti&&b--;a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||
b++;switch(a.liveExperimentalContentId){case 21530001:b=1;break;case 2153E4:b=2}this.g=AF(this,b)};
UF=function(a){return TF(a)*a.g};
WF=function(a,b){var c=VF(a);var d=a.l.g;a.F||(d=Math.max(d-1,0));d*=TF(a);return b>=c-d};
VF=function(a){return Math.max(Aba(a)-UF(a),a.A.ub())};
Aba=function(a){return a.l.B?a.A.ed():a.I()};
XF=function(a,b,c){3==a.l.o&&((b=WF(a,b),c||b)?b&&(a.C=!0):a.C=!1)};
YF=function(a,b){var c=WF(a,b);a.F!=c&&a.P("livestatusshift",c);a.F=c};
TF=function(a){return a.A.la?oA(a.A.la)||5:5};
AF=function(a,b){b=Math.max(Math.max(1,Math.ceil(a.l.l/TF(a))),b);return Math.min(Math.min(8,Math.floor(a.l.C/TF(a))),b)};
zba=function(){this.l=0;this.C=window.Infinity;this.F=0;this.A=!0;this.g=2;this.o=1;this.B=!1};
$F=function(a){this.H=a;this.g=new ZF(0,0,null);this.B=8;this.A=[];this.o=[];this.C=this.I=window.NaN;this.T=this.l=this.K=0;this.F=window.NaN;this.V=0;this.U=!1;this.O=null;this.L=0};
aG=function(a){return{startTime:a.F/a.l,duration:a.T/a.l}};
bG=function(a){a.F=window.NaN;a.T=0;a.O=null;a.L=0};
cG=function(a){return!(0,window.isNaN)(a.C)&&a.l?a.C/a.l:a.V};
dG=function(a,b,c){var d=b.getUint32(c);b=b.getUint32(c+4);a.g=new ZF(b,d,a.g);return 8};
eG=function(a){a.l&&!(0,window.isNaN)(a.I)&&(a.C=Math.floor(a.I*a.l),a.I=window.NaN)};
fG=function(a){return 0==a.g.type||1836019574==a.g.type||1952867444==a.g.type||1936286840==a.g.type||1953653094==a.g.type||1836019558==a.g.type};
gG=function(a,b,c){for(var d=c;d<b.byteLength;d++)a.A.push(b.getUint8(d));0<c&&a.o.push(new window.DataView(b.buffer,b.byteOffset,c))};
hG=function(a,b,c){return new Vw(b,c,a.g.size,a.g.type,!0)};
ZF=function(a,b,c){this.type=a;this.size=b;this.g=c;this.offset=this.version=0};
Bba=function(a,b){this.l=a;this.C=this.B=!1;this.length=b?b:0;this.o=0;this.g=[];this.A=null;this.length?1!=this.l.length||this.l[0].La||(this.l[0].La=this.length):1==this.l.length||(0,g.to)(this.l,function(a){return!!a.range})};
Cba=function(a){var b=a.length-a.o;(0,g.F)(a.g,function(a){b+=a.range.length});
return b};
Dba=function(a){this.C=a;this.A=window.NaN;this.B=[];this.o=this.g=this.l=0};
Eba=function(a,b,c,d,e){this.da=null;this.g=a;this.ma=b;this.ua=c;this.ha=e;this.V=this.l=window.NaN;this.aa=0;this.K=this.L=this.o=this.C=window.NaN;this.X=this.ba=this.A=!1;this.B=0;this.I=QA(this.g);this.T=this.U=window.NaN;this.sa=d;this.H=window.NaN;this.F=this.O=null};
iG=function(a){return{rt:((0,g.G)()-a.l).toFixed(),lb:a.o.toFixed(),pt:(1E3*a.U).toFixed(),pb:a.ma.toFixed(),stall:(1E3*a.B).toFixed(),elbowTime:(a.V-a.l).toFixed(),elbowBytes:a.aa.toFixed()}};
jG=function(a){a.H||(a.H=a.da(),3==a.H&&(a.O=new Dba(a.g)));return a.H};
lG=function(a,b,c,d){var e=(b-a.C)/1E3,f=c-a.o,k=jG(a);if(3==k&&f){var l=a.O;l.B.push({Jk:f,Ap:(0,window.isNaN)(l.A)?window.NaN:d-l.A,vN:d});l.A=d}a.A?1==k&&0<f&&(.2<e||1024>f?(a.B+=e,.2<e&&kG(a,.05,f)):kG(a,e,f),a.X=!0):c>=a.g.policy.o&&(1==k&&(d=a.g,d.C.g(1,(b-a.l)/1E3),JA(d)),a.V=b,a.aa=c,a.A=!0);MA(a.g,e,f);a.C=b;a.o=c};
kG=function(a,b,c){b=Math.max(b,.05);a=a.g;var d=void 0;a.g.g(void 0===d?b:d,c/b);a.o=g.yu()};
mG=function(a,b,c){c=Math.round(c/1024);if(a.F){var d=b-a.L,e=c-a.K;d=Math.min(d,4095);e=Math.min(e,4095);a.F.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e&63))}a.L=b;a.K=c};
nG=function(a){return a.o>=a.g.policy.o};
oG=function(a){return Math.max(0,((0,g.G)()-a.L)/1E3)};
pG=function(a){var b=a.ma-a.o;b=1E3*(b*a.I.stall+b/a.I.byterate);var c=(0,g.G)();b=nG(a)?b+c:b+Math.max(c,a.l+1E3*a.I.delay);a.T=b};
qG=function(a){if(a.gk())return!1;a=a.Id("content-type");return"audio/mp4"==a||"video/mp4"==a};
rG=function(a,b,c,d,e,f){this.status=0;this.K=this.response=null;this.U=d;this.B=c;this.T=e;this.F=f;this.A=[];this.o=null;this.l=this.g=0;this.oa=Fba++;this.C=null;a=new window.Request(a,{method:"GET",credentials:"include"});(0,window.fetch)(a).then(Vr((0,g.A)(this.RI,this)),Vr((0,g.A)(this.Dt,this)));(0,g.G)();this.O=this.H=this.I=!1;this.L="";b()};
wG=function(a,b){a.l+=b.length;var c=b.length;var d=sG(a)?1:Math.max(tG(a)/2,16384);c=c>=d;d=b.length+a.g>tG(a);a.O?((c||d)&&0!==a.g&&uG(a),c?a.A.push(b):vG(a,b)):(vG(a,b),a.l>=(sG(a)?1:16384)&&uG(a))};
uG=function(a){a.O=!0;a.A.push(a.o.subarray(0,a.g));a.g=0;a.o=a.I?null:new window.Uint8Array(tG(a))};
vG=function(a,b){if(b.length+a.g>tG(a)){var c=new window.Uint8Array(a.g+b.length);c.set(a.o,0);a.o=c}a.o.set(b,a.g);a.g+=b.length};
xG=function(a){a.C.read().then(Vr((0,g.A)(a.sF,a)),Vr((0,g.A)(a.Dt,a)));(0,g.G)()};
zG=function(a){if(a.B){a.I=!0;if(yG(a)&&!a.A.length&&!a.g&&!a.H&&a.l){qG(a);if(!a.o||8>a.o.length)a.o=new window.Uint8Array(8);var b=new window.DataView(a.o.buffer,0,8);b.setUint32(0,8);b.setUint32(4,1936419184);a.g=8;a.l+=8}a.U()}};
sG=function(a){return a.F.Ca&&a.F.B&&qG(a)};
yG=function(a){return a.F.Pb&&a.F.B&&qG(a)};
tG=function(a){a=a.gk()||0;return Math.max(16384,.125*a)};
AG=function(a,b,c,d,e){this.status=0;this.response=null;this.l=this.o=!1;this.g=new window.XMLHttpRequest;this.g.open("GET",a);this.g.responseType="arraybuffer";this.g.withCredentials=!0;this.g.onreadystatechange=(0,g.A)(this.OC,this);this.A=d;this.C=c;this.B=e;a=Vr((0,g.A)(this.MC,this));this.g.addEventListener("load",a,!1);this.g.addEventListener("error",a,!1);this.g.send();b();this.g.addEventListener("progress",Vr((0,g.A)(this.NC,this)),!1)};
BG=function(a,b,c,d){this.o=a;this.info=b;this.timing=c;this.V=d;this.state=1;this.g=this.ba=null;this.F=this.O=0;this.U=new g.P(this.aJ,a.K,this);this.B=this.A=this.H=null;this.C=0;this.K=this.l=null;this.L=0;this.X=this.T=!1;this.I=this.o.ua&&(lz(this.info)||kz(this.info))};
Gba=function(a,b){a.H=b};
CG=function(a){return a.A?Sy(a.A.g):""};
DG=function(a){var b=iG(a.timing);b.shost=CG(a);b.rn=a.O.toString();a.C&&(b.rc=a.C.toString());b.itag=""+nv(a.info.va[0].g.info);b.ml=""+ +a.info.va[0].g.Tc();b.sq=""+a.info.va[0].na;410!=a.C&&500!=a.C&&503!=a.C||(b.fmt_unav="true");a.g&&a.g.oo()&&(b.msg=a.g.oo());return b};
EG=function(a){CG(a);return Py(a.V,CG(a))};
GG=function(a){if("net.timeout"==a.B){var b=a.timing,c=(0,g.G)();c=c>b.l&&4E12>c?c:(0,g.G)();mG(b,c,1024*b.K);var d=(c-b.l)/1E3;if(2!=jG(b))if(nG(b))b.B+=(c-b.C)/1E3,KA(b.g,b.o,b.B);else{var e=b.g;e.C.g(1,d);JA(e);b.V=c}e=b.g;var f=b.U,k=b.ha;e.B.g(d,b.o/d);e.o=g.yu();k||e.l.g(1,d-f);MA(b.g,(c-b.C)/1E3,0)}else(0,g.G)();"net.nocontent"!=a.B&&("net.timeout"==a.B||"net.connect"==a.B?(b=EG(a),b.l+=1):(b=EG(a),b.g+=1),a.info.g.g++);FG(a,7)};
HG=function(a){if(1==a.state)return!0;a=EG(a);return 100>a.l&&6>a.g};
FG=function(a,b){a.state=b;if(5<=a.state){var c=a.timing;c.A&&(c.A=!1)}a.H&&a.H(a)};
JG=function(a){IG(a);a.B="net.timeout";GG(a)};
KG=function(a){return(0,g.to)(a.info.va,function(a){return 3==a.type})};
IG=function(a){if(a.g){var b=a.g;a.g=null;b.abort()}a=a.timing;a.A&&(a.A=!1)};
MG=function(a){var b=a.g.Id("content-type"),c=a.g.gk();(b=(!LG(a)||!b||-1!=b.indexOf("text/plain"))&&(!c||2048>=c))&&LG(a)&&sG(a.g);return b};
Hba=function(a,b){var c=(0,g.A)(a.AI,a),d=(0,g.A)(a.DI,a),e=(0,g.A)(a.CI,a),f=(0,g.A)(a.BI,a);return a.o.F&&(a.o.Tw&&!(0,window.isNaN)(a.info.l)&&a.info.l>a.o.jj?0:BG.g()&&KG(a))?new rG(b,d,e,c,f,a.o):new AG(b,d,e,c,f)};
LG=function(a){return a.g?a.g.zw():!1};
NG=function(a){return 2<=a.state&&!!a.l&&!!a.l.g.length};
OG=function(a,b){if(b||LG(a)&&!MG(a)){if(!a.l){var c;LG(a)||(c=a.g.Gm());a.l=new Bba(a.info.va,c)}for(;a.g.Cg();){c=a.l;for(var d=a.g.pw(),e=b&&!a.g.Cg(),f=0,k=0,l=g.q(c.l),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.La<=c.o)f+=m.La;else{var n=c,p=m;if(1==p.type){n.B=!0;var u=!1}else 3==p.type||4==p.type?(p=n.B&&!n.C,n.C=!0,u=p):u=!1;n=c;var v=c.o-f,D=k;p=d;u=u||m.g.Us();var C=p.length-D;m.range&&(C=Math.min(m.La-v,C));v=Tx(m,m.l+v,C,m.range?m.l+v+C==m.range.length:!!e);var N=Jx(p.byteOffset,
p.length);D=Jx(p.byteOffset+D,C);n.g.push(new my(v,p.buffer,D,N,u));n=C;c.o+=n;k+=n;f+=m.La;if(k==d.length)break}}}};
Iba=function(a){var b=a.timing.sa;return a.o.qj?b:!b||!(0,window.isNaN)(a.info.l)&&0<a.info.l?!1:a.g&&a.g.ri()?!qG(a.g)||(0,window.isNaN)(a.info.l)&&(b=a.g.Id("x-head-seqnum"))&&(0,window.parseInt)(b,10)>a.info.va[0].na?!1:!0:!0};
PG=function(a){for(var b=new window.Uint8Array(0),c=new window.DataView(a.buffer,a.byteOffset,a.length),d=0;d<a.length-8;){var e=c.getUint32(d);if(1>=e)break;var f=c.getUint32(d+4);if(1836019574==f)d+=8;else{if(1886614376==f){f=a.subarray(d,d+e);var k=new window.Uint8Array(b.length+f.length);k.set(b);k.set(f,b.length);b=k}d+=e}}return b};
Jba=function(a){a=Gx(a);(0,g.F)(a,function(a){return!a.l});
return(0,g.H)(a,function(a){return new window.Uint8Array(a.data.buffer,a.offset+a.data.byteOffset,a.size)})};
QG=function(a){return g.he(a,!0).replace(/[\.]{1,2}$/,"")};
RG=function(a,b){g.R.call(this);this.F=0;this.o=a;this.g=[];this.A=null;this.K=b;this.B=this.H=window.NaN;this.U=null;this.V=(0,g.A)(function(a){this.o.zu&&(this.P("timestamprewrite",a),this.o.zu=!1)},this);
this.T=this.L=this.C=this.l=null;this.O=!1;this.I=null;this.o.Ja&&(this.l=new $F(this.o))};
SG=function(a){return a.g.length?a.g[0]:null};
TG=function(a){return a.g.length?a.g[a.g.length-1]:null};
Lba=function(a,b,c){b=Kba(a,b,c);(0,g.F)(b,function(b){a.g.push(b)})};
Mba=function(a){return(0,g.Ek)(a.g,function(a){return a.info.o})};
Nba=function(a,b){if(b){var c=g.Ma(a.g,function(a){return a.info.o});
-1!=c&&(a.g=g.ab(a.g,0,c+1))}else a.g=[]};
Oba=function(a){if(!a.g.length)return 0;for(var b=a.g[0].o.length,c=1;c<a.g.length;c++)a.g[c].g!=a.g[c-1].g&&(b+=a.g[c].o.length);a.A&&(b+=a.A.o.length);return b};
UG=function(a){return(0,g.H)(a.g,function(a){return a.info})};
VG=function(a){return a.l?cG(a.l):a.H||0};
Kba=function(a,b,c){if(!c.verify()||c.info.g.An()){var d=Rx(c.info);d.verification="1";a.P("error",d||{})}c.sd&&c.info.g.info.video&&qz(c.info.g,ny(c));a.K.info.bc&&g.rv(c.info.g.info)&&(c.info.H=Jba(ny(c)));c.info.o&&(a.T=c.info);if(!a.K.Dd()){if(2==c.info.g.info.containerType){var e=ny(c);c.sd&&c.info.g.info.video&&cy(e)}if(a.C){var f=c.info,k=a.C;f.na=k.l;f.C=k.o}var l=c;!a.L||(a.o.Ie?Ox(a.L,l.info,!0):Px(a.L,l.info))||(a.l&&a.l.reset(),a.H=window.NaN,a.F=0);a.L=l.info;if(a.l)b:{var m;if(!(m=!(0,window.isNaN)(a.B))){var n=
a.l;m=!(!(0,window.isNaN)(n.C)||!(0,window.isNaN)(n.I))}if(m){var p=a.l;p.I=(0,window.isNaN)(a.B)?(0,window.isNaN)(a.H)?l.info.startTime:a.H:a.B;eG(p);a.B=window.NaN}var u=ny(l),v=a.l.process(u),D;if(D=l.info.o){var C=a.l;D=!(0==C.g.type&&!C.A.length)}if(D&&!a.o.Je){var N=Rx(l.info);N.partialbox="1";a.P("error",N||{})}var fa=b.timing,qa=!!l.info.l&&1936286840!=v&&!(a.o.Pb&&1936419184==v),Oa=l.info.o;if(3==jG(fa)){var L=fa.O;if(L.B.length){var Tb=L.B.shift(),be=Tb.Ap;qa||(Tb.Jk-=Math.min(Tb.Jk,1500),
Tb.Ap=0);L.l+=Tb.Jk;L.g+=Tb.Ap;L.o+=(0,window.isNaN)(be)?0:be;if(Oa){if(!(0>=L.g)){var Ed=L.C,Sc=L.g/1E3,Eg=L.o/1E3;Eg=void 0===Eg?Sc:Eg;Ed.g.g(Eg,L.l/Sc);Ed.o=g.yu()}L.g=0;L.l=0;L.o=0}}}if(a.o.ox&&a.o.B){if(!a.l.U&&!l.info.o){var ff=null;break b}}else if((0,window.isNaN)(a.l.F)){ff=null;break b}var tb=a.l,Ni=l.info.g.info;if(tb.o.length)if(tb.U=!1,tb.H.H||1!=tb.o.length){for(var Rf=0,Oi=g.q(tb.o),Be=Oi.next();!Be.done;Be=Oi.next())Rf+=Be.value.byteLength;if(tb.H.H){if(!tb.O||tb.O.length-tb.L<Rf)tb.O=
new window.Uint8Array(Math.max(Rf,tb.H.qf+Math.round(Ni.g*tb.H.pf))),tb.L=0;var Fg=tb.O;var Tc=tb.L}else Fg=new window.Uint8Array(Rf),Tc=0;var Dc=Tc,Pi=g.q(tb.o);for(Be=Pi.next();!Be.done;Be=Pi.next()){var fn=Be.value;Fg.set(new window.Uint8Array(fn.buffer,fn.byteOffset,fn.byteLength),Tc);Tc+=fn.byteLength}tb.o.length=0;tb.H.H&&(tb.L=Tc);var Gg=new window.DataView(Fg.buffer,Dc,Rf)}else{var s$=tb.o[0];tb.o.length=0;Gg=s$}else Gg=null;var Gk=Gg;if(Gk){var SU=Jx(Gk.byteOffset,Gk.byteLength);var Pba=
a.o.H?Jx(0,Gk.buffer.byteLength):SU;var TU=l.info.l+l.info.La-a.l.A.length-Gk.byteLength,Qba=Tx(l.info,TU,Gk.byteLength,l.info.o);ff=new my(Qba,Gk.buffer,SU,Pba,l.sd&&(!a.o.H||!TU))}else ff=null}else{var UU=(0,window.isNaN)(a.B)?(0,window.isNaN)(a.H)?l.info.startTime:a.H:a.B;a.B=window.NaN;if(a.o.V&&!py(l,UU)){var VU=Rx(l.info);VU.smst="1";a.P("error",VU||{})}else a.H=UU+qy(l);ff=l}var WU=ff;if(!WU)return[];c=WU;if(WG(a,c)){var Ww=c;if(g.rv(Ww.info.g.info)){var Rba=ny(Ww),Xc=px(Rba,0,1701671783);
if(Xc){Xc.skip(4);gx(Xc);gx(Xc);ex(Xc);ex(Xc);ex(Xc);ex(Xc);var YU=new window.Uint8Array(new window.ArrayBuffer(Xc.size-Xc.g)),Sba=new window.Uint8Array(Xc.data.buffer,Xc.offset+Xc.g,Xc.size-Xc.g);YU.set(Sba);Xc.g=Xc.size;var Tba=YU.buffer;var Uba=Xc.offset;var ZU,Vba=String.fromCharCode.apply(String,new window.Uint8Array(Tba));var CF=(ZU=ox(Vba))?new mx(ZU,Uba):null}else CF=null}else{var Gn=new Vx(ny(Ww)),Wba=Gn.g;Gn.g=0;var $U=null;if(Xx(Gn,[408125543,307544935,29555,26568,17543])){var Xba=$x(Gn,
!0);var Yba=String.fromCharCode.apply(String,gy(Gn,Xba));var aV=ox(Yba);$U=aV?new mx(aV):null}Gn.g=Wba;CF=$U}Ww.l=CF;if(c.l){a.C=c.l;a.O=!!a.l;var bV=c.info,cV=a.C;bV.na=cV.l;bV.C=cV.o;var dV=a.L,eV=a.C;dV.na=eV.l;dV.C=eV.o}}a.o.Zk&&WG(a,c)&&Ex(ny(c),1701671783);var Hh=c;if(a.C){if(Hh.info.o){a.O=!1;a.I=null;var jj=a.C;if(a.l){var fV=aG(a.l);bG(a.l);var DF=fV.startTime;var gV=fV.duration}else{if(g.rv(Hh.info.g.info)){for(var hV=Hh.info.g.g,EF=window.NaN,wr=window.NaN,xr=0,iV=new window.DataView(Hh.g);wx(iV,
xr);){var kj=xx(iV,xr);1936286840==kj.type?wr=Bx(kj):1836476516==kj.type?wr=tx(kj):1952867444==kj.type&&(0,window.isNaN)(EF)&&(EF=Ax(kj));xr=yx(kj.type)?xr+8:xr+kj.size}!wr&&hV&&(wr=ux(hV));var Xw=EF/wr}else{var Ih=new Vx(ny(Hh));var Zba=Hh.sd?Ih:new Vx(new window.DataView(Hh.info.g.g.buffer));var $ba=jy(Zba),FF=Ih.g;Ih.g=0;if(ky(Ih))if(Zx(Ih,231)){var aca=dy(Ih)*$ba/1E9;Ih.g=FF;Xw=aca}else Ih.g=FF,Xw=window.NaN;else Ih.g=FF,Xw=window.NaN}DF=Xw||Hh.info.B;gV=qy(Hh)}var jV=new Sw(jj.l,DF,gV,jj.ingestionTime,
"sq/"+jj.l,void 0,void 0,!1);a.P("segmentinfo",jV);var Yw=jj.g["Cuepoint-Type"]?new lx((0,window.parseFloat)(jj.g["Cuepoint-Playhead-Time-Sec"])||0,(0,window.parseFloat)(jj.g["Cuepoint-Total-Duration-Sec"])||0,jj.g["Cuepoint-Context"]):null;Yw&&(Yw.Pd+=DF,a.P("cuepoint",Yw,jj.l));var kV=jV}else{if(a.O&&!(0,window.isNaN)(a.l.F)){var GF=a.C,bca=aG(a.l).startTime;var HF=new Sw(GF.l,bca,a.C.H,GF.ingestionTime,"sq/"+GF.l,void 0,void 0,!0);a.I=HF;a.P("placeholderinfo",HF);a.O=!1;var lV=HF}else lV=null;
kV=lV}var mV=kV}else mV=null;var IF=mV;var nV=c;if(a.o.Yg)if(IF){Ux(nV.info,IF);for(var oV=g.q(b.info.va),JF=oV.next();!JF.done;JF=oV.next())Ux(JF.value,IF)}else a.I&&Ux(nV.info,a.I);c.info.o&&(a.C=null)}var yr=c;if(a.o.lx&&!a.K.Dd()&&(0==yr.info.l||a.A)&&g.rv(yr.info.g.info)&&3==yr.info.type&&!ry(yr)&&yr.info.duration&&!a.o.Ja){var pV=c;a.F+=1E3*(qy(pV)-pV.info.duration);if(a.U&&Math.abs(a.F-a.U.F)>=a.o.Zg){var dl=c,KF=(a.U.F-a.F)/1E3,qV=qy(dl)+KF,cca=new window.DataView(dl.g),rV=g.sx(cca,1936286840);
var LF=rV?Bx(rV):window.NaN;if((0,window.isNaN)(LF)){var sV=dl.info.g.g,dca=new window.DataView(dl.g),tV=g.sx(dca,1836476516);LF=tV?tx(tV):sV?ux(sV):window.NaN}var Zw=XG(a,dl,qV*LF);if(Zw&&Zw.length){var MF=Rx(dl.info);MF.fds=qV.toFixed(3);MF.com=a.F.toFixed(3);a.P("timestamprewrite",MF);a.H+=KF;a.F+=1E3*KF}return Zw?Zw:YG(a,dl)}}if(!a.K.Dd()&&a.K.info.bc&&a.o.oj){var ax=c,lj=ZG(a,ax);if(lj){var NF=px(lj,0,1718909296),OF=px(lj,0,1836019574),bx=px(lj,0,1701671783),PF=px(lj,0,1836019558);if(NF&&OF&&
PF){for(var wV=Fx(lj,OF),QF=Fx(lj,PF),xV=OF.size,yV=g.q(QF),el=yV.next();!el.done;el=yV.next()){var RF=el.value;1886614376==RF.type&&(wV.push(RF),xV+=RF.size)}var zV=NF.size+xV+PF.size;bx&&(zV+=bx.size);var zr=new hx(zV);jx(zr,NF);kx(zr,1836019574,wV);bx&&jx(zr,bx);var AV=g.q(QF);for(el=AV.next();!el.done;el=AV.next()){var cx=el.value;1886614376==cx.type&&(cx.type=1936419184,cx.data.setUint32(cx.offset+4,1936419184))}kx(zr,1836019558,QF);var BV=zr.data.buffer}else BV=null;var CV=BV;var SF=CV?$G(a,
lj,CV,ax):YG(a,ax)}else SF=YG(a,ax)}else{if(a.o.Ab&&a.K.Dd()&&(0==c.info.l||a.A)&&g.rv(c.info.g.info)){var dx=c,eca=dx.info.g.index.Im(dx.info.na),EV=XG(a,dx,eca);var FV=EV?EV:YG(a,dx)}else FV=[c];SF=FV}return SF};
WG=function(a,b){return!a.K.Dd()&&3==b.info.type&&0==b.info.l&&(g.rv(b.info.g.info)||2==b.info.g.info.containerType)};
YG=function(a,b){if(a.A&&a.A!=b){var c=[a.A,b];a.A=null;return c}return[]};
XG=function(a,b,c){var d=ZG(a,b);return d?(c=qx(d,c,a.V))?$G(a,d,c,b):null:null};
$G=function(a,b,c,d){b=Dx(b);a.A&&(b-=a.A.range.length,a.A=null);a=oy(d,b);a[0].g=c;a[0].range=Jx(0,c.byteLength);a[0].o=Jx(0,c.byteLength);d=a[0];c=new window.DataView(c);c=!!px(c,0,1836019574);d.sd=c;return a};
ZG=function(a,b){if(a.A){var c=a.A,d=new window.Uint8Array(c.range.length+b.range.length);d.set(new window.Uint8Array(c.g,c.range.start,c.range.length));d.set(new window.Uint8Array(b.g,b.range.start,b.range.length),c.range.length);c=new window.DataView(d.buffer);Dx(c);return c}c=ny(b);if((d=Dx(c))&&d<c.byteLength)return c;a.A=b;return null};
aH=function(){this.g=this.l=!1};
bH=function(a,b){this.Ea=b;this.o=[];this.l=new RG(a,b);this.T=this.A=this.g=null;this.O=0;this.K=b.info.g;this.H=this.I=!1;this.F=new aH;this.L=0;this.C=b.Lb();this.B=-1;this.Gh=this.C?0:window.NaN};
cH=function(a,b){a.o.push(b);a.g=g.Ka(b.info.va)};
eH=function(a){for(;a.o.length&&6==a.o[0].state;){var b=a.o.shift();dH(a,b);b=b.timing;a.O=(b.C-b.l)/1E3}a.o.length&&NG(a.o[0])&&!kz(a.o[0].info)&&dH(a,a.o[0])};
dH=function(a,b){if(NG(b)){b.T=!0;var c=b.l,d=c.g;c.g=[];c.A=g.Ka(d).info;(0,g.F)(d,(0,g.A)(a.V,a,b))}};
hH=function(a,b){a.Ea.Tc();var c=fH(a,b);if(0<=c)return c;a.g=a.Ea.Ef(b).va[0];gH(a)&&(a.A=null);a.L=0;return a.g.startTime};
fca=function(a,b){var c=a.l.g.length?TG(a.l).info:a.A;if(b&&c&&!c.o){var d=c.na;c=[];for(var e=g.q(a.o),f=e.next();!f.done;f=e.next())f=f.value,(0,g.Ek)(f.info.va,function(a){return a.na==d})?c.push(f):iH(a,f);
a.o=c;a.g=a.o.length?g.Ka(g.Ka(a.o).info.va):null}else jH(a)};
kH=function(a){var b=0;(0,g.F)(a.o,function(a){var c=b;a=a.l&&a.l.length?Cba(a.l):nz(a.info);b=c+a},a);
return b+=Oba(a.l)};
lH=function(a,b){var c=!!a.Ea.info.video&&!!a.A&&!a.A.o,d=1<=b&&c;Nba(a.l,d);a.I=d;fca(a,2<=b&&c)};
mH=function(a){a.F.l||a.F.start();lH(a,0);gH(a)&&(a.A=null)};
gH=function(a){return!!a.A&&a.A.C};
nH=function(a){var b=[];a.A&&b.push(a.A);b=g.Ya(b,UG(a.l));(0,g.F)(a.o,function(a){(0,g.F)(a.info.va,function(c){a.T&&(b=(0,g.Ld)(b,function(a){return!(a.g!=c.g?0:a.range&&c.range?a.range.start+a.l>=c.range.start+c.l&&a.range.start+a.l+a.La<=c.range.start+c.l+c.La:a.na==c.na&&a.l>=c.l&&(a.l+a.La<=c.l+c.La||c.o))}));
3!=c.type&&4!=c.type||b.push(c)})});
a.g&&!Mx(a.g,g.Ka(b),a.g.g.Dd())&&b.push(a.g);return b};
oH=function(a){if(!a.g||!a.g.La)return!1;a=nH(a);if(!a.length)return!1;for(var b=1;b<a.length;b++)if(!Px(a[b-1],a[b]))return!1;return!0};
fH=function(a,b){if(oH(a)){a:{var c=nH(a);c=g.q(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.B<=b&&d.startTime+d.duration>=b){c=d;break a}c=null}if(c)return c.startTime}return window.NaN};
pH=function(a){return(0,g.Ek)(a.o,function(a){return 4<=a.state})};
qH=function(a){return!(!a.g||!a.Ea.Tc()||a.g.g==a.Ea)};
rH=function(a){return qH(a)&&a.g.g.info.g<a.Ea.info.g};
sH=function(a,b,c){return(a=TG(a.l)?TG(a.l).info:a.A)&&!a.C?a.A>b&&a.A<b+c:!1};
jH=function(a){(0,g.F)(a.o,function(a){iH(this,a)},a);
a.o=[];a.g=null};
iH=function(a,b){if(b.T){var c=a.l,d=b.info;c.O=!1;c.I&&(c.P("placeholderrollback",c.I),c.I=null);c.l&&(d=(0,window.isNaN)(c.B)?d.va[0].range?d.va[0].B:(0,window.isNaN)(c.l.F)?cG(c.l):aG(c.l).startTime:c.B,c.l.reset(),c.L=c.T,c.B=d);c.C=null}b.dispose()};
tH=function(a){return!!a.g&&-1!=a.g.na&&a.g.na<a.Ea.index.je()};
uH=function(a){if(a.g){var b=TG(a.l);b&&3==b.info.type&&-1==a.g.na&&(a.g.na=b.info.na)}};
vH=function(a){return(0,g.Ek)(a.o,function(a){return a.I})};
gca=function(a,b){this.g=a;this.l=b;this.o=1};
hca=function(a,b){var c=Math.min(2.5,LA(a.g)),d=wH(a);return b-c*d};
yH=function(a,b,c,d,e){e=void 0===e?!1:e;d/=a.o;var f=a.g.policy.l?1/PA(a.g):NA(a.g)+1/PA(a.g);var k=Math.max(.9*(d-3),LA(a.g)+a.g.policy.o*f);c=k/f*a.l.Dw/(b+c);c=Math.min(c,d);a.l.Ma&&e&&(c=Math.max(c,a.l.Ma));return xH(a,c,b)};
xH=function(a,b,c){return Math.ceil(Math.max(Math.max(65536,a.l.Zv*c),Math.min(Math.min(a.l.T,a.l.tb*c),Math.ceil(b*c))))};
ica=function(a,b){var c=xH(a,b.video?a.l.Wp:a.l.He,b.g);return a.l.od&&b.video?Math.max(c,a.l.od):c};
wH=function(a){var b=PA(a.g);if(a.l.nf)return b;var c=a.l.Lv,d=1E-9+LA(a.g);a.g.policy.l||(d+=c*NA(a.g));b*=Math.min(1,c/(b*d));a.l.Qc&&(c=((IA(a.g.l,.98)||0)-1)/2,c=Math.max(0,Math.min(1,c)),b*=1-a.l.Qc*c);return b};
zH=function(a){return wH(a)/a.o};
jca=function(a,b,c,d){this.X=a;this.C=b;this.H=c;this.K=d;this.o=this.U=this.da=this.F=null;this.A="i";this.T=-1;this.l=this.B=null;this.g=[];this.ba={};this.V=this.L=0;this.ha=null;this.O=this.I=!1;this.aa=0};
EH=function(a,b,c,d){"m"==c&&a.F.isLocked()&&!b.isLocked()&&(c="a");a.I=a.I||d;if("m"==c&&b.isLocked())return a.A=c,AH(a,b),a.L=a.g.length-1,BH(a),CH(a),a.O=a.O||a.o!=a.l,a.o=a.l,new xF(a.B,a.o,c);d=a.F;d=d.l==b.l&&d.g==b.g&&d.o==b.o;if("m"==a.A&&a.F.isLocked()&&d)return null;"r"!=c||d||(a.T=-1);if("u"==c){if("m"==a.A)return null;a.da=b;b=a.F}"m"==c&&(a.da=null);a.da?AH(a,Gv(b,a.da)):AH(a,b);CH(a);if("r"==c&&a.l==a.o){if(d)return null;a.o=a.l;return new xF(a.B,a.l,c)}a.A=c;DH(a);return null};
kca=function(a,b){if(b.info.video){if(a.o!=b)return a.o=b,FH(a)}else a.U=b;return null};
GH=function(a){return!!a.V&&1E4>=g.yu()-a.V};
HH=function(a){return a.F.isLocked()};
DH=function(a){a.o&&a.l&&IH(a,a.o.info)<IH(a,a.l.info)&&(a.I=a.I||"r"==a.A,a.I=a.C.lf?a.I||"v"==a.A&&a.l.info.video.width>a.o.info.video.width:a.I||a.l.info.video.width>1.6*a.o.info.video.width)};
FH=function(a){var b=a.A;a.A="a";a.T=g.yu();a.I=!1;return new xF(a.U,a.o,b)};
AH=function(a,b){a.F=b;var c=a.K.videoInfos;if(!HH(a)&&(c=(0,g.Ld)(c,function(a){return a.g>this.C.I||4<this.H.g[a.id].A.g?!1:!0},a),GH(a))){c=(0,g.Ld)(c,function(a){return a.id!=this.ha.id},a);
var d=(0,g.Ld)(c,function(a){a=nv(a);return"140"==a||"134"==a||"243"==a});
d.length&&(c=d)}c.length||(c=a.K.videoInfos);d=(0,g.Ld)(c,b.A,b);d.length||(d=[c[0]]);d.sort((0,g.A)(function(a,b){return IH(this,a)-IH(this,b)},a));
for(c=1;c<d.length;c++){var e=d[c-1],f=d[c];e.video.width>f.video.width?(g.Va(d,c),c--):IH(a,e)*a.C.g>IH(a,f)&&(g.Va(d,c-1),c--)}c=d[d.length-1];a.g=d;Ny(a.C,c)};
lca=function(a,b){if(b)a.B=a.H.g[b];else{var c=g.Na(a.K.g,function(a){return!!a.ob&&a.ob.isDefault});
c=c||a.K.g[0];a.B=a.H.g[c.id]}BH(a)};
BH=function(a){if(!a.B.info.ob&&(a.B=a.H.g[a.K.g[0].id],1<a.K.g.length)){if(a.F.isLocked())var b=240>a.F.g;else{for(b=0;b+1<a.g.length&&"tiny"==a.g[b].video.quality;)b++;var c=zH(a.X)/a.C.g;b=IH(a,a.B.info)+IH(a,a.g[b])>c}b&&(a.B=a.H.g[a.K.g[1].id])}};
CH=function(a){if(HH(a))a.l=a.H.g[a.g[a.g.length-1].id];else{for(var b=Math.min(a.L,a.g.length-1),c=zH(a.X),d=IH(a,a.B.info),e=c/a.C.o-d;0<b&&!(IH(a,a.g[b])<=e);b--);for(c=c/a.C.g-d;b<a.g.length-1&&!(IH(a,a.g[b+1])>=c);b++);a.l=a.H.g[a.g[b].id];a.L=b;DH(a)}};
mca=function(a){var b=a.C.o,c=zH(a.X)/b-IH(a,a.B.info);b=g.Pa(a.g,function(a){return IH(this,a)<c},a);
0>b&&(b=0);a.L=b;a.l=a.H.g[a.g[b].id]};
IH=function(a,b){if(!a.C.aa)return b.g;if(!a.ba[b.id]){var c=a.H.g[b.id].index.Br(a.aa,a.C.aa);c=b.A&&a.o&&a.o.index.Tb()?c||b.A:c||b.g;a.ba[b.id]=c}return a.ba[b.id]};
nca=function(a,b){var c=cc(a.H.g,function(a){return nv(a.info)==b});
if(void 0!=c)return EH(a,Dv("auto",c.info.video.quality,!0),"u",!0),c;throw Error("Itag "+b+" from server not known.");};
oca=function(a){var b=[];if("i"!=a.A&&"a"!=a.A&&"u"!=a.A)return b;var c=!1;if(Wz(a.H)){for(var d=Math.max(0,a.L-2);d<a.L;d++){var e=nv(a.g[d]);jv(a.g[d].video)||(c=!0);b.push(e)}if(!c&&a.C.sj)for(d=Math.max(0,a.L-3);0<=d&&!c;d--)jv(a.g[d].video)||(c=!0,b.push(nv(a.g[d])))}return b};
pca=function(){this.g=this.l=0;this.o=[]};
JH=function(a,b){return(a[b]<<24)+(a[b+1]<<16)+(a[b+2]<<8)+a[b+3]};
KH=function(a,b,c,d){this.l=a;this.C=b;this.B=d;this.A=c;this.g=0};
qca=function(a,b){this.l=a;this.K=b;this.H=this.F=this.I=this.g=null;this.B=this.A=window.NaN;this.C=!1;this.o=window.NaN};
rca=function(a){if(!a.g)return window.NaN;if(!a.l.Yb){var b=0;a.g.ga()||5<=a.g.state||(b=1E3*(a.A-oG(a.g.timing)));if(0<b)return b+1;if(!a.C)return 0}return Math.max(0,1E3*(a.B+a.l.Nc)-(0,g.G)())};
sca=function(a,b,c){var d=(0,g.G)()/1E3-a.B<a.l.Nc;if(d&&!a.g.ga()&&!(5<=a.g.state)&&(a.l.Yb?(0,window.isNaN)(c)||((0,window.isNaN)(a.o)?0:c<a.o+a.l.qc):oG(a.g.timing)<a.A))return window.NaN;if(SG(b.l)==a.I)return d?a.C=!0:LH(a),window.NaN;a.o=MH(a,a.F,a.H);if((0,window.isNaN)(a.o))return LH(a),window.NaN;if((0,window.isNaN)(c)||((0,window.isNaN)(a.o)?0:c<a.o+a.l.qc))return d?a.C=!0:LH(a),window.NaN;b=a.o;LH(a);return b};
LH=function(a){a.g=null;a.I=null;a.F=null;a.H=null;a.A=window.NaN;a.B=window.NaN;a.C=!1;a.o=window.NaN};
MH=function(a,b,c){b=(0,g.G)()/1E3-(a.K.o()||0)-b.B-a.l.Cc;if(0>=b)return window.NaN;var d=c.g.index;if(!uz(d,c.na,!0))return window.NaN;var e=d.Rf(c.na);c=d.jd(c.na);a=Math.min(c+b,c+e-a.l.Up);return a<=c?window.NaN:a};
tca=function(){this.g=[];this.l=g.oF};
NH=function(a,b){for(var c=[],d=g.q(a.g),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
uca=function(a){return a.g.slice(OH(a,0x7ffffffffffff),a.g.length)};
OH=function(a,b){var c=fb(a.g,function(a){return b-a.start||1});
return 0>c?-(c+1):c};
PH=function(a,b){for(var c=window.NaN,d=g.q(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&((0,window.isNaN)(c)||e.end<c)&&(c=e.end),e.start>b&&((0,window.isNaN)(c)||e.start<c)){c=e.start;break}return c};
QH=function(a,b,c,d){g.I.call(this);this.A=window.NaN;this.I=!1;this.H=null;this.K=this.L=this.B=!1;this.ba=a;this.V=b;this.O=c;this.U=d;this.T=new g.P(this.o,250,this);g.J(this,this.T);this.F=new g.P(this.o,0,this);g.J(this,this.F);this.l=[];this.g=new tca};
RH=function(a,b){a.o();var c=a.g;if(1<b.length&&b.length>c.g.length)c.g=c.g.concat(b),c.g.sort(c.l);else for(var d=g.q(b),e=d.next();!e.done;e=d.next()){var f=e.value;if(!c.g.length||0<c.l(f,c.g[c.g.length-1]))c.g.push(f);else{e=c.g;var k=g.eb(e,f,c.l);0>k&&g.bb(e,-(k+1),0,f)}}a.A=window.NaN;a.o()};
SH=function(a){return a.ga()?[]:a.g.g};
vca=function(a,b){var c=(0,g.Ld)(SH(a),function(a){return a.namespace==b});
a.C.apply(a,c);return c};
wca=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1==a.l.indexOf(e)&&(a.l.push(e),c.push([1,e]))}return c};
xca=function(a,b){var c=[];if(!b.length)return c;b.sort(g.oF);for(var d=0;d<b.length;d++){var e=b[d];a.l.splice(a.l.indexOf(e),1);c.push([2,e])}return c};
TH=function(){var a=this;this.g=this.l=null;this.o=new g.Pf(function(b,c){a.l=b;a.g=c})};
UH=function(a,b,c,d,e){g.R.call(this);this.O=a;this.l=b;this.C=c;this.bb=e||null;this.g=this.o=null;this.H=new gca(a,b);this.A=null;this.F=new jca(this.H,b,this.C,d);this.U=new g.P(this.Jd,0,this);g.J(this,this.U);this.sa=new g.P(this.Jd,1E3,this);g.J(this,this.sa);this.jb=new g.P(this.Jd,void 0,this);g.J(this,this.jb);this.Ua=new g.P(this.Jd,1E4,this);g.J(this,this.Ua);this.B=window.NaN;this.K=!1;this.I=window.NaN;this.Wa=0;this.ba=this.ya=this.T=!1;this.kb={};this.ma="";this.Ca=this.Ja=0;this.Va=
b.nj?new pca:null;this.Sa=new FA(5);this.V=!1;this.X={};this.Oa="";this.Ma=window.NaN;this.aa=!1;a=this.l;this.L=a.O&&this.C.l?new qca(a,this.Sa):null;this.da=null};
VH=function(a,b){b=b||a.g&&a.g.g&&a.g.g.startTime||a.B;var c=a.g;var d=a.F;if(d.C.aa){var e=d.l&&d.l.index.Ff(b)||0;d.aa!=e&&(d.ba={},d.aa=e,AH(d,d.F))}e=!HH(d)&&-1<d.T&&g.yu()-d.T<1E3*d.C.mj;var f=3*IH(d,d.l.info)<zH(d.X);if(!e||f)d.V&&!GH(d)&&(d.V=0,AH(d,d.F)),BH(d),CH(d),d.O=d.O||d.l!=d.o;d.l.index.Tb()||(d.aa=-1);d=d.l;c.Ea!=d&&(c.Ea=d);c=a.o;d=a.F.B;c.Ea!=d&&(c.Ea=d)};
WH=function(a,b){a.T=!0;a.ya=b};
g.XH=function(a,b){var c=a.g.Ea.info.mimeType;b.g=b.o.addSourceBuffer(a.o.Ea.info.mimeType);"fakesb"==c?b.l=new yy:b.l=b.o.addSourceBuffer(c);a.A=b;a.o.H=!1;a.g.H=!1;a.o.A=null;a.g.A=null;a.resume();Jy(b)&&(b.g.addEventListener("updateend",(0,g.A)(a.Jd,a),!1),b.l.addEventListener("updateend",(0,g.A)(a.Jd,a),!1),b.g.addEventListener("error",(0,g.A)(a.al,a,!0),!1),b.l.addEventListener("error",(0,g.A)(a.al,a,!1),!1));a.tc("msa");g.RC("msa",void 0,"video_to_ad");JC.measure&&JC.getEntriesByName("mark_vta").length&&
JC.measure("measure_vta_to_msa","mark_vta");a.ua&&a.ha&&(c=g.z("yt.scheduler.instance.enablePriorityThreshold"))&&c(1);a.Jd()};
ZH=function(a){a.A&&a.A.g&&a.A.g.removeEventListener&&(a.A.g.removeEventListener("updateend",(0,g.A)(a.Jd,a),!1),a.A.l.removeEventListener("updateend",(0,g.A)(a.Jd,a),!1),a.A.g.removeEventListener("error",(0,g.A)(a.al,a,!0),!1),a.A.l.removeEventListener("error",(0,g.A)(a.al,a,!1),!1));a.A=null;WH(a,!1);YH(a,!1)};
$H=function(a){a.A&&Gy(a.A)&&ZH(a)};
aI=function(a,b,c){if(!b.F.l||!c.remove)return!1;if(c.updating)return!0;if(!b.F.g&&c.buffered.length)return a=c.buffered.end(c.buffered.length-1),c.remove(0,a),b.F.g=!0;b.F.reset();a.P("seekelementrequired");return!1};
cI=function(a,b,c){if(a.T&&(!RA(a.O)||a.ya))return!1;if(a.C.l){if(1<a.l.Oa&&0<b.o.length&&b.g&&-1==b.g.na||b.o.length>=a.l.Oa&&!a.l.ya||!a.l.Cj&&0<b.o.length&&(a.l.Pc?!a.l.B:!a.V))return!1;if(b.C)return!(0,window.isNaN)(a.Ma)}if(vH(b))return!1;if(!(b.g||a.C.l&&a.l.ya&&b.C)){if(!b.Ea.Tc())return!1;hH(b,a.B)}var d=b.o.length+c.o.length;(pH(b)||pH(c)||a.C.isLive&&(!a.l.ya||!b.o.length))&&--d;if(d+1>=a.l.kj)return!1;d=b.g;if(!d)return!0;if(!hz(d.g.A))return!1;4==d.type&&d.g.Tc()&&(b.g=g.Ka(d.g.xl(d)),
d=b.g);!d.C&&!d.g.Hg(d)||d.g.info.audio&&4==d.type?a=!1:rH(b)&&!a.l.X?a=!0:(!(c=d.C||kH(b)&&kH(b)+kH(c)>a.l.ha||!!(c.g&&!c.g.C&&c.g.A<d.A)&&(!a.C.l||c.g.A&&d.A))&&(c=3==d.type)&&(d=d.A,b=bI(a,b,!0),!HH(a.F)&&0<a.l.ba&&(c=(g.yu()-a.Wa)/1E3,b=Math.min(b,a.l.ba+a.l.Oc*c)),b=a.B+b,a.l.kb?(c=Math.min(b,yca(a)+a.l.kb),c!=b&&a.ye("mrl","ori."+b+";mod."+c,!0),a=c):a=b,c=d>a),a=c?!1:!0);return a};
dI=function(a,b,c){if((!a.A||Fy(a.A)||Jy(a.A))&&!a.K&&a.F.I){var d=a.B;a=a.H;c=yH(a,b.Ea.info.g,c.Ea.info.g,0);var e=a.g.policy.l?LA(a.g)+c/PA(a.g):LA(a.g)+c*NA(a.g)+c/PA(a.g);d+=Math.max(e,e+a.l.bb-c/b.Ea.info.g);a:{if(b.o.length){if(b.o[0].info.va[0].startTime<=d)break a;jH(b)}a=b.l;for(c=a.g.length-1;0<=c;c--)a.g[c].info.startTime>d&&a.g.pop();b.o.length?b.g=g.Ka(g.Ka(b.o).info.va):b.l.g.length?b.g=TG(b.l).info:b.g=b.A;b.g&&d<b.g.startTime&&(b.L=0,b.g=b.Ea.Ef(d,!0).va[0])}}};
gI=function(a,b,c){cI(a,b,c);var d=b.g;if(b.C)a.V=!0,d=b.Ea.Ef(window.Infinity),d.l=a.Ma,cH(b,eI(a,d));else if(b.g.g.Tc()){!rH(b)||a.l.X||a.C.l||(dI(a,b,c),b.g||hH(b,a.B));d=b.g;var e=d.A-a.B,f=!d.range||0==d.La&&0==d.l?0:d.range.length-(d.l+d.La),k=d.g;if(qH(b)){var l=Math.min(a.l.Sa,.5*bI(a,b,!0));l=rH(b)||e<=l}else l=!1;l&&0==f&&(a.C.l?k=b.Ea:(k=d.startTime+fI,d.La&&(k+=d.duration),hH(b,k),d=b.g,k=d.g));k.Dd()?(f=a.F,c=yH(a.H,k.info.g,c.Ea.info.g,e,0<f.g.length&&0==f.L&&a.ba),e=qH(b),c=d.g.Gg(d,
c),c.range&&1<c.va.length&&(e||c.g.g?c=d.g.Gg(d,c.va[0].La):(e=c.va[c.va.length-1],k=e.La/c.range.length,!e.o&&.4>k&&(c=d.g.Gg(d,c.range.length-e.La)))),d=c):d=k.Ai(d);cH(b,eI(a,d))}else d.g.Dd()?(c=yH(a.H,b.Ea.info.g,c.Ea.info.g,0),d=d.g.Gg(d,c)):d=d.g.Ai(d),cH(b,eI(a,d))};
eI=function(a,b){3==b.va[b.va.length-1].type&&hI(a,kca(a.F,b.va[0].g));var c=nz(b);c=new Eba(a.O,c,hca(a.H,c),a.l.Pc?a.l.B:a.V,kz(b));a.l.tf&&(c.F=[]);var d=new BG(a.l,b,c,a.X);c.da=function(){return Iba(d)?d.o.mf&&window.performance&&window.performance.now&&d.g&&d.g.ri()&&LG(d)&&sG(d.g)?d.info.va[0].g.info.video?3:4:2:1};
Gba(d,(0,g.A)(a.BH,a));3==b.va.length&&1==b.va[0].type&&2==b.va[1].type&&4==b.va[2].type&&b.va[0].g.info.video&&(d.ba=oca(a.F));d.start(Math.max(0,b.va[0].B-a.B));b.va[0].g.info.video&&(c=CG(d))&&(a.Oa=c.substr(0,c.indexOf(".")));return d};
hI=function(a,b){b&&a.P("videoformatchange",b)};
iI=function(a,b,c){a:{b=b.info;var d=a.l.sf,e=null,f=b.va[0];if(b.range)e=Jx(b.range.start,Math.min(4096,b.range.length));else if(!d||f.g.info.video){c=null;break a}b=new Lx(5,f.g,e,f.na);b=new jz([b]);b.A=c;c=b}c&&eI(a,c)};
Aca=function(a){var b=-1!=a.g.B,c=-1!=a.o.B;if(!b||!c)if(b=!b&&SG(a.g.l),c=!c&&SG(a.o.l),b||c){c=b?a.g:a.o;b=b?a.o:a.g;var d=SG(c.l).info.na;if(-1!=b.B&&b.B!=d)a.l.V&&qA(a.C,d,c==a.g),zca(c,b.B),jI(a,!1,"qoe.avsync",{start:"1",target:String(b.B),actual:String(d)});else{c.B=d;c.Gh=window.NaN;var e=Math.max(b.Ea.index.jd(b.B),c.Ea.index.jd(c.B));-1!=b.B&&(a.da&&(a.da.resolve(e+.1),a.da=null),g.Jf(function(){return kI(a,e)}))}}};
zca=function(a,b){lH(a,0);hH(a,window.Infinity);var c=a.Gh;a.l.B=c;a.Gh=c;a.g.na=b-1};
Bca=function(a){if(a.C.o)return!1;var b;if(!(b=vH(a.g))&&(b=a.K)){b=a.H;var c=a.g,d=a.o;if(0==c.o.length&&0==d.o.length)b=!0;else{var e=0,f=UG(c.l).concat(UG(d.l));f=g.q(f);for(var k=f.next();!k.done;k=f.next())e+=k.value.La;c=c.Ea.info.g+d.Ea.info.g;e/=c;b=10<e?!0:10>c*(10-e)/zH(b)}(b=!b)||(b=a.g,b=0<b.o.length&&1==b.l.g.length&&SG(b.l).info.F<b.O)}if(b)return!0;if(!a.ba||!a.l.sa||10>a.B||360<a.g.Ea.info.video.g)return!1;b=sH(a.g,a.B,a.l.sa)||sH(a.o,a.B,a.l.sa);return(0<a.g.o.length||0<a.o.o.length||
cI(a,a.g,a.o)||cI(a,a.o,a.g))&&b};
nI=function(a,b,c,d){if(c.updating)return!0;var e=SG(b.l);if(!e)return!1;!b.A||b.A.o||Ox(b.A,e.info)||(b.A=null,Fy(a.A)&&c.abort(),c.g=null);var f=a.C.isLive&&ry(e),k;if(k=a.l.zb&&a.C.o&&0==e.info.l&&g.rv(e.info.g.info)){if(null==c.g){if(!(k=null==b.A||b.A.g!=e.info.g)){a:{k=b.A.H;var l=e.info.H;if(k.length!=l.length)k=!1;else{for(var m=0;m<k.length;m++)if(!g.kb(k[m],l[m])){k=!1;break a}k=!0}}k=!k}}else k=c.g!=e.info.g.g;k=!k}k&&(Ex(ny(e),1836019574),Ex(ny(e),1718909296),e.sd=!1);if(!a.C.o||0==e.info.l)if(f||
a.C.l||e.sd)c.g=null;else if(lI(a,c,e))return!0;f=bI(a,b,!1);f=a.B+f;null!==d&&0<=d&&(f=Math.min(f,d));d=f;if(a.L)a:if(a.L.g&&b.Ea.info.audio){if((f=SG(b.l))&&(f=f.l)&&null!=f.A){f=f.A-1;break a}f=-1}else f=window.Infinity;else f=window.Infinity;if(b.I)d=SG(b.l).range;else if(k=b.l,!k.g.length||k.g[0].info.B>=d)d=null;else if(l=k.g[0].sd?0:k.g[0].range.start,l>f)d=null;else{for(m=1;m<k.g.length;m++){var n=k.g[m].range.start>f,p=k.g[m].g!=k.g[m-1].g;if(k.g[m].info.B>d||n||p||k.o.Ab)break}m--;d=new g.Hx(l,
Math.min(k.g[m].range.end,f))}if(!d)return!1;f=new window.Uint8Array(e.g,d.start,d.length);if(a.Va&&e.info.g.info.video&&g.rv(e.info.g.info)&&(k=a.Va,0==e.info.l&&(k.l=0,k.g=0,k.o.length=0),!((0,window.isNaN)(k.l)||8>f.length))){l=new window.DataView(f.buffer,f.byteOffset);for(m=!1;!m;)if(k.l==k.g)a:if(m=k,n=f.length,m.l+7>=n){for(p=m.l;p<n;p++)m.o.push(l.getUint8(p));m=!0}else{if(0<m.o.length){for(p=0;8>m.o.length;p++)m.o.push(l.getUint8(p));var u=JH(m.o,0);p=JH(m.o,4);m.o.length=0}else u=l.getUint32(m.g),
p=l.getUint32(m.g+4);if(1836019558==p||1836019574==p||1718909296==p||1936286840==p)m.l+=u,m.g=m.l;else if(1835295092==p)m.l+=u,m.g+=8;else{m.l=window.NaN;m=!0;break a}m=m.g>=n}else a:if(m=k,n=f.length,m.g+5>=n){for(p=m.g;p<n;p++)m.o.push(l.getUint8(p));m=!0}else{if(0<m.o.length){for(p=0;6>m.o.length;p++)m.o.push(l.getUint8(p));p=JH(m.o,0);12==p&&6==m.o[4]&&45==m.o[5]&&l.setUint8(m.g+5,63);m.g+=p+4;m.o.length=0}for(;m.g<m.l&&m.g+5<n;){p=l.getUint32(m.g);if(0>=p){m.l=window.NaN;m=!0;break a}12==p&&
6==l.getUint8(m.g+4)&&45==l.getUint8(m.g+5)&&l.setUint8(m.g+5,63);m.g+=p+4}m=m.g>=n}(0,window.isNaN)(k.l)||(k.l-=f.length,k.g-=f.length)}k=!1;3!=e.info.type||!g.rv(e.info.g.info)&&2!=e.info.g.info.containerType||(k=g.rv(e.info.g.info)&&a.l.gy&&!b.H&&0==e.info.l&&0<e.info.startTime)&&py(e,0);f=mI(a,c,f);if(0!=f){if(2!=f)if(e.info.g.info.video?(l=a.l,l.A=Math.floor(.8*l.A),l.U=Math.floor(.8*l.U),l.l=Math.floor(.8*l.l)):(l=a.l,l.C=Math.floor(.8*l.C),l.ma=Math.floor(.8*l.ma),l.l=Math.floor(.8*l.l)),1==
f&&c.remove&&!c.updating){f=!1;l=c.buffered.length;for(m=0;!f&&m<l;m++)c.buffered.start(m)>e.info.A&&(c.remove(c.buffered.start(m),c.buffered.end(l-1)),f=!0);f||c.remove(0,Math.max(0,Math.min(a.B,e.info.startTime)-5))}else a.l.L?a.P("reattachrequired"):mH(b);f=!1}else f=!0;if(!f)return!1;b.H=!0;if(k)py(e,e.info.startTime),c.abort(),c.g=null;else{f=b.l;for(k=[];f.g.length&&(f.g[0].range.end>d.end?(m=oy(f.g[0],d.end-f.g[0].range.start+1),l=m[0],f.g[0]=m[1]):l=f.g.shift(),k.push(l),l.range.end!=d.end););
k.length&&(0,g.F)(k,b.ba,b)}e.sd&&e.info.g.g&&(c.g=e.info.g.g,a.P("initsegment",c.g));return!0};
oI=function(a,b,c){baa(a.C,b,c)&&c&&g.Jf(function(){return kI(a,b.startTime)})};
kI=function(a,b){!a.ga()&&a.l.Fb&&a.aa&&-1!=a.g.B&&-1!=a.o.B&&(a.aa=!1,a.P("seekplayerrequired",b+.1,!0))};
lI=function(a,b,c){c.info.g.Tc();c=c.info.g.g;if(null==c||b.g==c)return!1;mI(a,b,c);b.g=c;a.P("initsegment",b.g);return b.updating};
mI=function(a,b,c){try{Jy(a.A)?b.appendBuffer(c):b.append(c)}catch(d){if(11==d.code)return jI(a,!1,"html5.invalidstate",{updating:""+ +b.updating,mrs:a.A.o.readyState}),2;if(22!=d.code&&0!=d.message.indexOf("Not enough storage"))return g.Q(d),4;a.l.jg&&a.ye("quex","br."+UD(b.buffered).replace(/,/g,"_"));return 1}return Gy(a.A)?3:0};
pI=function(a,b){b.l.subscribe("error",a.yG,a);b.l.subscribe("timestamprewrite",a.CG,a);var c=(0,g.A)(a.zG,a,b);b.l.subscribe("placeholderinfo",c,void 0);c=(0,g.A)(a.AG,a,b);b.l.subscribe("placeholderrollback",c,void 0);c=(0,g.A)(a.BG,a,b);b.l.subscribe("segmentinfo",c,void 0);b==a.g&&b.l.subscribe("cuepoint",a.xG,a)};
bI=function(a,b,c){if(a.T)return 1;var d=b.Ea.info.audio?a.l.C:a.l.A;!a.l.X&&HH(a.F)&&(d=Math.max(d,b.Ea.info.audio?a.l.ma:a.l.U));c&&(d+=a.l.ha);var e=HH(a.F)?b.g?b.g.g.info.g:b.Ea.info.g:b.K;d/=e;0<a.l.Wa&&a.A&&Fy(a.A)&&(b=b.Ea.info.video?a.A.l:a.A.g)&&!b.updating&&(e=VD(b.buffered,a.B),0<=e&&(b=a.B-b.buffered.start(e),d+=Math.max(0,Math.min(b-a.l.Wa,a.l.lj))));0<a.l.l&&(d=Math.min(d,a.l.l));a.l.Va&&c&&!HH(a.F)&&(c=a.F,c=IH(c,g.Ka(c.g))+IH(c,c.K.g[0]),c=a.l.Va*(c/wH(a.H)),c<d&&15>c&&a.ye("bwcapped",
"1",!0),c=Math.max(c,15),d=Math.min(d,c));return d};
yca=function(a){if(!a.bb)return window.Infinity;var b=(0,g.Ld)(SH(a.bb),function(a){return"ad"==a.namespace});
b=g.q(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.B)return c.start/1E3;return window.Infinity};
Cca=function(a){qI(a);a.da=new TH;return a.da};
qI=function(a){YH(a,!1);var b=Math.max(VG(a.g.l),VG(a.o.l)),c=a.g;c.C=!0;c.B=-1;hH(c,window.Infinity);c.l.B=b;c.Gh=b;c=a.o;c.C=!0;c.B=-1;hH(c,window.Infinity);c.l.B=b;c.Gh=b;c=a.C;for(var d in c.g)Uw(c.g[d].index,window.Infinity);a.l.Fb&&(a.aa=!0);a.B=b;a.K=!0;g.zq(a.U);return b+.1};
rI=function(a,b,c,d){if(b.Ea.Tc())if(d){var e=WD(d.buffered,c),f=window.NaN,k=b.A;k&&(f=WD(d.buffered,k.g.index.jd(k.na)));if(e==f&&oH(b))return c;d=fH(b,c);if(0<=d)return d;lH(b,b.Ea.Dd()?1:2);b.Ea.info.video&&b.A&&!b.A.o&&!Mba(b.l)&&b.Ea.Dd()&&(d=eI,f=b.A,b.l.g.length&&(f=TG(b.l).info),f=b.g||f,f=f.g.Gg(f,f.range.length-(f.La+f.l)),cH(b,d(a,f)));if((0,window.isNaN)(e))return hH(b,c);hH(b,e+fI)}else hH(b,c);else 0!=c&&jH(b);return c};
sI=function(a,b,c,d){c.Tc()||c.F||!hz(c.A)||(d=c.gi(d?ica(a.H,c.info):0),(0,g.F)(d,function(a){if("f"!=a.va[0].g.info.l){var c=eI(this,a);!Nx(a.va[a.va.length-1])&&cH(b,c)}},a),c.F=!0)};
jI=function(a,b,c,d){a.ga()||(c=new g.cC(c,b,d),dC(c.details),a.P("error",c),b&&a.dispose())};
tI=function(a){var b={lct:a.B.toFixed(3),lsk:a.K,lmf:HH(a.F),lbw:OA(a.O).toFixed(3),lhd:LA(a.O).toFixed(3),lst:(1E9*NA(a.O)).toFixed(3),laa:a.o.A?Sx(a.o.A):"",lva:a.g.A?Sx(a.g.A):"",lar:a.o.g?Sx(a.o.g):"",lvr:a.g.g?Sx(a.g.g):"",lvh:a.Oa};a.A&&!Gy(a.A)&&(b.lab=UD(a.A.g.buffered),b.lvb=UD(a.A.l.buffered));return b};
YH=function(a,b){var c=b?1:0;a.o&&lH(a.o,c);a.g&&lH(a.g,c)};
uI=function(a,b,c){if(!b||!c)return!0;c=-1!=VD(c.buffered,a);var d=TG(b.l)?TG(b.l).info.A>=a:!1,e=b.o.length?b.o[0]:null;a=(b=e?e.info.va[0]:b.g)&&b.startTime<=a;return!!(c||d||a)};
vI=function(a,b){a.l.jb&&a.l.B&&(!a.l.F||!BG.g())||--b;a.Ma=Math.max(b,0)};
Dca=function(a,b){var c=b.info.video?a.g:a.o;null!=c&&sI(a,c,b,!1)};
Eca=function(a,b){var c=new g.My;c.Oc=g.yv(a.experiments,"html5_throttle_rate")||c.Oc;g.T(a.experiments,"html5_streaming_xhr")&&(c.F=!0);g.T(a.experiments,"html5_streaming_debug")&&(c.F=!0,c.Ja=!0);g.yv(a.experiments,"html5_max_av_sync_drift")&&(c.Zg=g.yv(a.experiments,"html5_max_av_sync_drift"));var d=a.schedule;d.g.o()==d.policy.B?c.ba=10:c.ba=g.yv(a.experiments,"html5_throttle_burst_secs")||c.ba;g.yv(a.experiments,"html5_min_secs_between_format_selections")&&(c.mj=g.yv(a.experiments,"html5_min_secs_between_format_selections"));
c.aa=g.yv(a.experiments,"html5_local_max_byterate_lookahead");c.ya=g.T(a.experiments,"html5_stop_overlapping_requests");c.Wa=g.yv(a.experiments,"html5_min_readbehind_secs");c.lj=g.yv(a.experiments,"html5_min_readbehind_cap_secs");c.yd=g.T(a.experiments,"html5_append_init_while_paused");c.Va=g.yv(a.experiments,"html5_max_readahead_bandwidth_cap");c.pj=g.T(a.experiments,"html5_disable_audio_append_cap");c.Ie=g.T(a.experiments,"html5_disable_non_contiguous");c.kb=g.yv(a.experiments,"html5_post_interrupt_readahead");
c.lf=g.T(a.experiments,"html5_disable_urgent_upgrade_for_quality");c.jg=g.T(a.experiments,"html5_log_quota_exceeded");c.Cc=g.yv(a.experiments,"html5_subsegment_readahead_target_buffer_health_secs");c.Nc=g.yv(a.experiments,"html5_subsegment_readahead_timeout_secs");c.Tp=g.yv(a.experiments,"html5_subsegment_readahead_progress_timeout_fraction");c.Up=g.yv(a.experiments,"html5_subsegment_readahead_tail_margin_secs");c.Rp=g.T(a.experiments,"html5_subsegment_readahead_always_delay_appends");c.Yb=g.T(a.experiments,
"html5_subsegment_readahead_controlled_by_buffer_health");c.qc=g.yv(a.experiments,"html5_subsegment_readahead_min_buffer_health_secs");c.Ca=g.T(a.experiments,"html5_streaming_xhr_optimize_lengthless_mp4");c.ua=g.T(a.experiments,"html5_peak_shave");c.sj=g.T(a.experiments,"html5_peak_shave_always_include_sd");c.Tw=g.T(a.experiments,"html5_restrict_streaming_xhr_on_sqless_requests");c.jj=g.yv(a.experiments,"html5_max_headm_for_streaming_xhr");c.Cj=g.T(a.experiments,"html5_pipeline_manifestless_allow_nonstreaming");
c.uk=g.T(a.experiments,"html5_prefer_server_bwe3");c.od=1024*g.yv(a.experiments,"html5_video_tbd_min_kb");c.sf=g.T(a.experiments,"html5_live_probe_primary_host");c.ox=g.T(a.experiments,"html5_streaming_xhr_buffer_mdat");c.Pb=g.T(a.experiments,"html5_streaming_xhr_no_mp4_holdback_chunk");c.rf=g.T(a.experiments,"html5_last_slice_transition");c.L=g.T(a.experiments,"html5_clear_by_reattaching");c.Je=g.T(a.experiments,"html5_disable_incomplete_incremental_parse_error");c.mx=g.T(a.experiments,"html5_store_xhr_headers_readable");
c.qj=g.T(a.experiments,"html5_live_no_dynamic_streaming_response_detection")||!g.T(a.experiments,"html5_enable_bandwidth_estimation_type");c.H=g.T(a.experiments,"html5_incremental_parser_coalesce_slice_buffers");c.pf=g.yv(a.experiments,"html5_incremental_parser_buffer_duration_secs");c.qf=g.yv(a.experiments,"html5_incremental_parser_buffer_extra_bytes");c.Pc=g.T(a.experiments,"html5_use_has_subfragmented_fmp4");c.Fx=g.T(a.experiments,"html5_streaming_xhr_progress_includes_latest");c.mf=g.T(a.experiments,
"html5_enable_packet_train_response_rate");g.T(a.experiments,"html5_probe_secondary_during_timeout")&&(c.Ck=!0,c.Vp=1);Js()&&(c.Ab=!0);Cs()&&(c.l=240);g.yh&&(c.U=41943040);g.EB(a)||!Iy()?(c.A=8388608,c.C=524288,c.He=5,c.ha=2097152,c.T=1048576,c.Zv=1.5,c.tb=15,c.X=!Iy(),c.rj=!1,c.I=4587520,Hs()&&(c.I=786432),c.g*=1.1,c.o*=1.1,c.zb=!0,c.U=c.A,c.ma=c.C,c.L=!0):a.g&&(c.g*=1.3,c.o*=1.3);g.Ky&&Bs("crkey")&&(d="CHROMECAST/ANCHOVY"==a.A.cmodel,c.A=20971520,c.C=1572864,d&&(c.I=812500,c.K=1E3,c.Wp=5,c.T=2097152));
(d=bC(a))||(d=Ls()&&/(J\d{3}|JS\d{3}|JU\d{3})/.test(a.A.cmodel));d&&!g.T(a.experiments,"html5_disable_move_pssh_to_moov")&&(c.oj=!0);c.nj=!g.T(a.experiments,"disable_fpa_sei_removal")&&Bs("windows nt")&&(b.Bg()||b.Gd());d="ULTRALOW"==b.latencyClass||g.T(a.experiments,"html5_treat_latency_low_like_ultra_low")&&b.isLowLatencyLiveStream;if(b.Lb()){c.nf=!0;c.lx=!1;g.T(a.experiments,"html5_manifestless_no_rewrite")&&(c.V=!1,c.Fb=!0);if("ULTRALOW"==b.latencyClass||"LOW"==b.latencyClass)c.Oa=2,c.kj=4;c.B=
b.hasSubfragmentedFmp4}b.isAd()&&(c.sa=0,c.Ma=0);!((g.T(a.experiments,"html5_streaming_response_mediastream_rewrite_v2")||g.T(a.experiments,"html5_ultra_low_latency_streaming_responses")&&d)&&b.Ha&&b.Ha.videoInfos.length&&g.rv(b.Ha.videoInfos[0])&&b.Lb())||g.Es()&&!g.T(a.experiments,"html5_streaming_xhr_try_cobalt")||xA&&!g.T(a.experiments,"html5_streaming_xhr_try_edge")||(c.F=!0,c.Ja=!0);c.jb=g.T(a.experiments,"html5_live_no_streaming_impedance_mismatch")||d&&g.T(a.experiments,"html5_ull_no_streaming_impedance_mismatch");
c.O=g.T(a.experiments,"html5_enable_subsegment_readahead_v3")||g.T(a.experiments,"html5_ultra_low_latency_subsegment_readahead")&&d;c.Yg=(g.T(a.experiments,"html5_manifestless_accurate_sliceinfo")||c.O)&&b.Lb();c.da=b.Kf;c.tf=c.da&&(/^rq[a-f]/.test(b.clientPlaybackNonce)||g.T(a.experiments,"html5_high_res_logging"));/^pp/.test(b.clientPlaybackNonce)&&(c.hy=!0,c.Kv=!0);bC(a)&&!g.T(a.experiments,"html5_disable_move_pssh_to_moov")&&b.la&&Uz(b.la)&&(c.zb=!1);if(b.pa){var e=oA(b.la),f=g.yv(a.experiments,
"html5_live_abr_head_miss_fraction"),k=g.yv(a.experiments,"html5_live_abr_repredict_fraction");f&&e&&(c.Ua=Math.min(e*f,c.Ua));k&&e&&(c.K=Math.min(1E3*e*k,c.K))}e=0;g.T(a.experiments,"html5_live_use_alternate_bandwidth_window_sizes")&&(e=a.schedule.policy.g,b.pa&&(e=g.yv(a.experiments,d?"html5_live_ultra_low_latency_bandwidth_window":b.isLowLatencyLiveStream?"html5_live_low_latency_bandwidth_window":"html5_live_normal_latency_bandwidth_window")||e));d=a.schedule;d.policy.C=b.Lb()?.5:0;if(!d.policy.A&&
e&&(d=d.g,e=Math.round(e*d.L),e!=d.l)){f=Array(e);k=Math.min(e,d.C?d.l:d.A);var l=d.A-k;0>l&&(l+=d.l);for(var m=0;m<k;++m)f[m]=d.B[(l+m)%d.l];for(;m<e;++m)f[m]=window.Infinity;d.l=e;d.B=f;d.A=k%e;d.C=k==e;d.H=!0;d.K=GA(d)}switch(b.liveExperimentalContentId){case 21530001:c.Ca=!0;c.O=!0;c.Cc=g.yv(a.experiments,"html5_jumbo_ull_subsegment_readahead_target");c.jb=!0;break;case 2153E4:c.Ca=!0,c.O=!1}d=g.yv(a.experiments,"html5_deadzone_multiplier")||1;(e=g.yv(a.experiments,"html5_sticky_reduces_discount_by"))&&
"auto"!=Mv()&&(d-=e);c.g*=d;c.o*=d;if(d=g.yv(a.experiments,"html5_request_sizing_multiplier"))c.Dw=d;g.T(a.experiments,"html5_strip_emsg")&&(c.Zk=!0);c.l=g.yv(a.experiments,"html5_max_buffer_duration")||c.l;c.Sa=g.yv(a.experiments,"html5_max_buffer_health_for_downgrade")||c.Sa;c.bb=g.yv(a.experiments,"html5_min_upgrade_health")||c.bb;$A(a.X,lB)&&(c.I=window.NaN);c.tb=g.yv(a.experiments,"html5_request_size_max_secs")||c.tb;c.Le=g.T(a.experiments,"killswitch_metadata_events");g.T(a.experiments,"html5_sticky_disables_variability")&&
"auto"!=Mv()&&(c.Qc=0);c.Dk=g.T(a.experiments,"html5_rec_2020_matrix_correction_killswitch");return c};
Fca=function(a,b,c){this.url=a;this.interval=b;this.g=c};
wI=function(a,b){this.message=a;this.number=b;this.g=new Qq};
Gca=function(a,b,c,d){this.statusCode=a;this.statusMessage=b;this.headers=c;this.message=d};
xI=function(a){var b=String.fromCharCode.apply(String,a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1==c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;var f=e[1];(0,window.isFinite)(f)&&(f=String(f));f=g.w(f)?/^\s*-?0x/i.test(f)?(0,window.parseInt)(f,16):(0,window.parseInt)(f,10):window.NaN;e=e[2];b=ox(b.slice(d+2));return null==b?null:new Gca(f,e,b,a.subarray(c+4))};
yI=function(a,b,c,d,e){g.I.call(this);this.A=a;this.K=b;this.F=c;this.g=d;this.l=e;this.sessionId="";this.I=this.H=this.B=this.C=null;this.ea=new g.Rt(this);g.J(this,this.ea);this.g?(this.ea.M(this.g,"message",this.TC),this.ea.M(this.g,"keystatuseschange",this.UC)):this.l&&(St(this.ea,this.l,["mskeymessage","webkitkeymessage"],this.bv),St(this.ea,this.l,["mskeyerror","webkitkeyerror"],this.av),St(this.ea,this.l,["mskeyadded","webkitkeyadded"],this.Zu))};
zI=function(a,b){this.initData=a;this.contentType=(void 0===b?"":b)||null;this.l=this.g=window.NaN;this.o=!1;this.A=[]};
AI=function(a,b){g.I.call(this);this.l=a;this.g=b;this.C={};this.A=null;this.ea=new g.Rt(this);g.J(this,this.ea);this.o=this.B=null};
BI=function(a){if(a.g.l)return a.g.l.createMediaKeys().then(Vr(function(b){a.ga()||(a.B=b,a.l.setMediaKeys(b))}));
vA(a.g)?a.o=new (uA())(a.g.g):zA(a.g)?(a.o=new (uA())(a.g.g),a.l.webkitSetMediaKeys(a.o)):Hca(a);return null};
Hca=function(a){St(a.ea,a.l,["keymessage","webkitkeymessage"],a.XC);St(a.ea,a.l,["keyerror","webkitkeyerror"],a.WC);St(a.ea,a.l,["keyadded","webkitkeyadded"],a.VC)};
CI=function(a,b){var c=b.subarray(4);c=String.fromCharCode.apply(null,new window.Uint16Array(c.buffer,c.byteOffset,c.byteLength/2)).match(/ek=([0-9a-f]+)/)[1];for(var d="",e=0;e<c.length;e+=2)d+=String.fromCharCode((0,window.parseInt)(c.substr(e,2),16));e=a.g.fairPlayCert;c=new window.Uint8Array(new window.ArrayBuffer(e.length));for(var f=0;f<e.length;f++)c[f]=e.charCodeAt(f);e=new window.ArrayBuffer(2*d.length);f=new window.Uint16Array(e);for(var k=0;k<d.length;k++)f[k]=d.charCodeAt(k);d=new window.Uint8Array(e);
e=0;k=new window.ArrayBuffer(b.byteLength+4+d.byteLength+4+c.byteLength);f=new window.Uint8Array(k);k=new window.DataView(k);f.set(b);e+=b.byteLength;k.setUint32(e,d.length,!0);e+=4;f.set(d,e);e+=d.length;k.setUint32(e,c.byteLength,!0);f.set(c,e+4);return f};
Ica=function(a,b){var c=CI(a,b);c=a.o.createSession("video/mp4",c);return new yI(null,null,null,null,c)};
Jca=function(a,b){for(var c=new window.Uint8Array(270),d=0;135>d;d++)c[2*d]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(d);c=a.o.createSession("video/mp4",b,c);return new yI(null,null,null,null,c)};
DI=function(a,b){var c=a.C[b.sessionId];!c&&a.A&&(c=a.A,a.A=null,c.sessionId=b.sessionId,a.C[b.sessionId]=c);return c};
FI=function(a,b,c,d,e,f){g.I.call(this);this.l=a;this.oc=d;this.oc.subscribe("oauthtoken",this.Et,this);this.C={session_id:e};this.H=!0;"playready"==a.flavor&&(a=(0,window.parseInt)(zv(f,"playready_first_play_expiration"),10),!(0,window.isNaN)(a)&&0<=a&&(this.C.mfpe=a),g.T(f,"html5_playready_keystatuses_killswitch")||(this.H=!1));this.V=g.yv(f,"html5_drm_generate_request_delay");this.T=g.T(f,"html5_use_drm_retry");this.O=0;f=this.l.A;"fairplay"==this.l.flavor&&(f=c.initData.subarray(4),f=String.fromCharCode.apply(null,
new window.Uint16Array(f.buffer,f.byteOffset,f.byteLength/2)).replace("skd://","https://"));EI(this,f);this.F=this.I=!1;g.RC("drm_gk_s");try{var k=b.createSession(c,this.V)}catch(l){b="t.g",l instanceof window.DOMException&&(b+=";c."+l.code),this.oc.P("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"),k=null}if(this.o=k)b=this.o,k=this.QC,f=this.PC,a=this.SC,b.C=this.RC,b.B=k,b.H=f,b.I=a,b.o=this,g.J(this,this.o);this.ba=c.A;this.A=[];this.g={};this.K=window.NaN;this.B=
c.g||window.NaN};
EI=function(a,b){var c=b;var d=void 0===d?!1:d;if(Sv(Kca.test(c),c,d,"Drm Licensor URL")){for(var e in a.C)b=ah(b,e,a.C[e]);a.U=b}else GI(a,"drm.net",!0,"t.x")};
Lca=function(a){var b={};g.kc(b,a.C);return b};
HI=function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new window.DOMParser).parseFromString(b,"text/xml").querySelector("Challenge");return new window.Uint8Array(je(a.childNodes[0].data))};
II=function(a){var b;if(b=a.H)a=a.o,b=!(!a.g||!a.g.keyStatuses);return b};
GI=function(a,b,c,d,e){a.ga()||a.oc.P("licenseerror",b,c,d,e);c&&a.dispose()};
JI=function(a){return g.Sa(a,"UHD2")?"highres":g.Sa(a,"UHD1")?"hd2160":g.Sa(a,"HD")?"hd1080":g.Sa(a,"HD720")?"hd720":"large"};
KI=function(a,b){if(!II(a)&&yA(a.l)&&!b)return"large";var c=[],d=!0;if(II(a))for(var e in a.g)"usable"==a.g[e].status&&c.push(a.g[e].type),"unknown"!=a.g[e].status&&(d=!1);if(!II(a)||d)c=a.A;return JI(c)};
Mca=function(a){if(!a)return{};var b={};(0,g.F)(a.split(";"),function(a){a=a.split(",");2==a.length&&(b[a[1]]={type:a[0],status:"unknown"})});
return b};
LI=function(a){var b=a[0];a[0]=a[3];a[3]=b;b=a[1];a[1]=a[2];a[2]=b;b=a[4];a[4]=a[5];a[5]=b;b=a[6];a[6]=a[7];a[7]=b};
MI=function(a,b){var c=[],d;for(d in a.g)c.push.apply(c,[d,a.g[d].type,a.g[d].status]);return c.join(b)};
Nca=function(a){return II(a)?MI(a,";"):a.A.join(";")};
Oca=function(a,b,c,d){a=new window.Uint8Array(a);a=HI(a);a={format:"RAW",method:"POST",postBody:(new wI(a,1)).message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4};c=bh(c,d);Us(c,a,3,500).then(function(a){a=new window.Uint8Array(a.response);(a=xI(a))&&b.update(a.message)})};
NI=function(){this.keys=[];this.values=[]};
PI=function(a,b,c,d,e){e=void 0===e?"":e;g.R.call(this);a&&(a.addKey||a.webkitAddKey)||uA()||BA(c);this.K=c;this.I=a;this.g=b;this.subscribe("newlicense",this.SG,this);this.subscribe("newsession",this.TG,this);this.subscribe("sessionready",this.OH,this);this.subscribe("keystatuseschange",this.YC,this);this.subscribe("hdentitled",this.cG,this);this.da=e||g.Tu();this.O=null;this.l=new NI;this.A=this.C=null;this.o=[];this.F="fairplay"==this.g.flavor?Fv:OI;this.L=new AI(a,b);g.J(this,this.L);this.B=null;
vA(b)&&(this.B=new AI(a,b),g.J(this,this.B));this.X=2;this.ea=new g.Rt(this);g.J(this,this.ea);this.V=!1;this.ba=null;this.H=!1;a=this.I;this.g.l?this.ea.M(a,"encrypted",this.RF):St(this.ea,a,vA(this.g)?["msneedkey"]:["needkey","webkitneedkey"],this.PG);(a=BI(this.L))?a.then(Vr((0,g.A)(this.vG,this)),Vr((0,g.A)(this.dF,this))):this.H=!0;this.B&&BI(this.B);this.aa=d;this.T=this.U=!1;BA(c)};
Qca=function(a,b){if(vA(a.g)&&!a.U){var c=PG(b);if(0!=c.length){var d=new zI(c);a.U=!0;window.navigator.requestMediaKeySystemAccess("com.microsoft.playready",[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}]).then(function(b){b.createMediaKeys().then(function(b){Pca(a,b,d)})},null)}}};
Pca=function(a,b,c){var d=b.createSession(),e=a.l.values[0],f=Lca(e);d.addEventListener("message",function(b){Oca(b.message,d,a.g.A,f)});
d.addEventListener("keystatuseschange",function(){d.keyStatuses.forEach(function(b,c){"usable"==c&&(a.T=!0,QI(a,KI(e,a.T)))})});
d.generateRequest("cenc",c.initData)};
SI=function(a,b,c){a.ga()||vA(a.g)==c||a.V&&a.aa||(a.V=!0,a.o.push(b),1<a.o.length||a.H&&RI(a))};
RI=function(a){for(;a.o.length;){var b=a.o[0];if(g.kb(a.C,b.initData))a.o.shift();else{if(a.l.get(b.initData))if("fairplay"==a.g.flavor)a.l.remove(b.initData);else{a.o.shift();continue}a:{var c=b.initData;try{for(var d=0,e=new window.DataView(c.buffer);d<e.byteLength-8;){var f=e.getUint32(d);if(1>=f)break;if(1886614376==e.getUint32(d+4)){var k=32;if(0<e.getUint8(d+8)){var l=e.getUint32(d+28);k+=16*l+4}var m=e.getUint32(d+k-4);try{var n=new re(c.subarray(d+k,d+k+m)),p=new Pr;for(k=n;se(k)&&4!=k.l;)switch(k.o){case 1:var u=
k.g;b:{for(var v,D,C=u,N=0,fa=0;4>fa;fa++)if(D=C.l[C.g++],N|=(D&127)<<7*fa,128>D){C.F=N>>>0;C.C=0;break b}D=C.l[C.g++];N|=(D&127)<<28;v=0|(D&127)>>4;if(128>D)C.F=N>>>0,C.C=v>>>0;else{for(fa=0;5>fa;fa++)if(D=C.l[C.g++],v|=(D&127)<<7*fa+3,128>D){C.F=N>>>0;C.C=v>>>0;break b}C.B=!0}}var qa=u.F,Oa=u.C;if(C=Oa&2147483648)qa=~qa+1>>>0,Oa=~Oa>>>0,0==qa&&(Oa=Oa+1>>>0);N=4294967296*Oa+qa;var L=C?-N:N;Fe(p,1,L);break;case 2:C=L=ve(k);De(p,2).push(C);break;case 3:L=ue(k);Fe(p,3,L);break;case 4:L=ve(k);Fe(p,4,
L);break;case 5:L=ue(k);Fe(p,5,L);break;case 6:L=ue(k);Fe(p,6,L);break;case 7:L=qe(k.g);Fe(p,7,L);break;case 8:L=ve(k);Fe(p,8,L);break;case 9:L=qe(k.g);Fe(p,9,L);break;case 10:L=qe(k.g);Fe(p,10,L);break;case 11:L=new Mr;C=k;N=L;fa=Nr;var Tb=C.g.o,be=qe(C.g),Ed=C.g.g+be;C.g.o=Ed;fa(N,C);C.g.g=Ed;C.g.o=Tb;C=p;N=L;fa=Mr;var Sc=C,Eg=fa;Sc.o||(Sc.o={});if(!Sc.o[11]){for(var ff=De(Sc,11),tb=[],Ni=0;Ni<ff.length;Ni++)tb[Ni]=new Eg(ff[Ni]);Sc.o[11]=tb}var Rf=C.o[11];Rf||(Rf=C.o[11]=[]);var Oi=N?N:new fa,
Be=De(C,11);Rf.push(Oi);Be.push(Ge(Oi));break;case 12:L=ve(k);Fe(p,12,L);break;default:te(k)}var Fg=p;if(null!=Fg){var Tc=Fg;break a}}catch(Dc){}}d+=f}Tc=null}catch(Dc){Tc=null}}if(null!=Tc)for(c=Ce(Tc,7),null!=c&&(b.g=c),c=Ce(Tc,10),null!=c&&0<c&&(b.l=c),c=De(Tc,2),c=!c.length||c[0]instanceof window.Uint8Array?c:(0,g.H)(c,Ee),c=g.q(c),d=c.next();!d.done;d=c.next())b.A.push(QG(d.value));if("widevine"==a.g.flavor){a:if(c=a,(0,window.isNaN)(b.g)&&0<c.l.values.length)c=!0;else{c=g.q(c.l.values);for(d=
c.next();!d.done;d=c.next())if(d.value.B==b.g){c=!0;break a}c=!1}if(c&&!g.T(a.K,"html5_dedup_by_cryptoperiod_killswitch"))a.o.shift();else{a:{c=a;if(!(g.T(c.K,"disable_license_delay")||"widevine"!=c.g.flavor||b.o||(0,window.isNaN)(b.g)))for(c=g.q(c.l.values),d=c.next();!d.done;d=c.next())if(1>=Math.abs(d.value.B-b.g)){c=!0;break a}c=!1}if(c){Rca(a,b);a.o.shift();continue}}}break}}a.o.length&&(b=a.o[0],a.l.get(b.initData),Tc=new FI(a.g,a.L,b,a,a.da,a.K),Tc.Et(a.O),a.l.set(b.initData,Tc))};
Rca=function(a,b){a.A&&a.A.dispose();a.C=b.initData;a.A=new g.P(function(){a.C=null;a.A=null;b.o=!0;a.o.push(b);1<a.o.length||RI(a)},Sca(b.l));
a.A.start()};
Sca=function(a){return 1E3*Math.max(0,Math.random()*(((0,window.isNaN)(a)?120:a)-30))};
QI=function(a,b){Jv(a.F,b)||(a.F=Dv("auto",b,!1),a.P("qualitychange"))};
TI=function(a){var b={};this.o=(b.c1a=(0,g.A)(this.B,this),b.c3a=(0,g.A)(this.C,this),b.c6a=(0,g.A)(this.A,this),b);(this.g=a)&&this.g.yj?this.l=g.ds(this.g.yj):this.l=[]};
Tca=function(a,b){this.g=a;this.l=b};
UI=function(a,b){var c=Gv(Gv(a.g.rj,b.aj),b.dj);"auto"!=Mv()||(c=g.T(a.g.experiments,"html5_restore_performance_cap")?Gv(c,new Cv(0,Ov(),!1)):Gv(c,a.g.mf));return c};
WI=function(a,b){var c=Mv();return"auto"!=c?Dv("auto",c,!1):VI(a,b)};
VI=function(a,b){if(g.EB(a.g)&&$A(a.g.X,kB))return Fv;var c,d=!!b.Ha.g;IB(a.g)&&(c=window.screen&&window.screen.width?new g.gd(window.screen.width,window.screen.height):null);c||(c=a.g.sf?a.g.sf.clone():a.l.Fa());if(CB||XI||d){d=c;var e=g.XB(),f=g.va(void 0)?void 0:e;d.width*=e;d.height*=f}e=b.Ha.videoInfos;if(e.length){d=.85;4!=e[0].video.projectionType&&2!=e[0].video.projectionType&&3!=e[0].video.projectionType||cB||(d=.45);var k;e=g.q(e);for(f=e.next();!f.done;f=e.next()){var l=k=f.value;k=k.video;
if(null===c||k.width*d<c.width&&k.height*d<c.height)break}l=Dv("auto","93"==nv(l)?gv(k.width,k.height):k.quality,!1)}else l=Fv;k=l.g;(Bs("armv7")||Bs("android"))&&!g.EB(a.g)&&pv(b.Ha.videoInfos[0])&&(k=Math.min(k,g.hv.large));!g.T(a.g.experiments,"html5_mweb_client_cap")||!a.g.g||g.JB(a.g)||Ks()||g.T(a.g.experiments,"mweb_uniplayer_auto_quality")||g.T(a.g.experiments,"hls_for_vod")||(k=Math.min(k,g.hv.medium));k=Math.max(k,g.hv.medium);g.yv(a.g.experiments,"html5_default_quality_cap")&&(c=!0,(d=g.yv(a.g.experiments,
"html5_quality_cap_min_age_secs"))&&(c=g.yu()-a.g.schedule.F>1E3*d),c&&(k=Math.min(k,g.yv(a.g.experiments,"html5_default_quality_cap"))));g.T(a.g.experiments,"html5_use_media_capabilities")&&(k=Math.min(Uca(b.Ha),k));l.g!=k&&(l=new Cv(l.l,k,l.o));return l};
Uca=function(a){if(!a.videoInfos.length)return 0;if(null==a.videoInfos[0].o)return a.videoInfos[0].video.height;for(var b=g.q(a.videoInfos),c=b.next();!c.done;c=b.next())if(c=c.value,c.o)return c.video.height;return a.videoInfos[0].video.height};
$I=function(a,b,c,d){a=void 0===a?null:a;b=void 0===b?null:b;c=void 0===c?null:c;d=void 0===d?null:d;g.R.call(this);var e=this;this.I=new g.Rt;g.J(this,this.I);this.l=a;YI(this);this.B=null;ZI(this,b);this.o=c;this.O=d;this.g=window.NaN;this.H=this.C=this.A=null;this.K=this.F=!1;this.L=new g.P(function(){e.P("ctmp","seektimeout",dC(Vca(e)))},2E4);
g.J(this,this.L)};
ZI=function(a,b){a.B&&a.B.unsubscribe("seekelementrequired",a.U,a);a.B=b;a.B&&a.B.subscribe("seekelementrequired",a.U,a)};
aJ=function(a){return!(0,window.isNaN)(a.g)&&(0,window.isFinite)(a.g)?a.g:a.l?a.l.xa():window.NaN};
dJ=function(a,b,c){c=void 0===c?!0:c;if(b!=a.g||!a.F){a.F&&bJ(a);a.H||(a.H=new TH);if((0,window.isFinite)(b)||!a.o.Lb())b=g.$c(b,a.ub(),a.ed());a.g=b;a.P("seekto",b,c);c&&(a.F=!0,!a.o.pa&&a.g>=a.ed()?(b=a.ed(),a.P("seekstart"),cJ(a,b),a.g=b,a.P("ended")):Wca(a))}};
Wca=function(a){Xca(a).then(void 0,function(){bJ(a)});
Yca(a).then(function(b){return cJ(a,b)},function(){bJ(a)});
a.L.start();a.P("seekstart")};
Xca=function(a){a.C||(a.B?(0,window.isFinite)(a.g)?a.C=a.B.seek(a.g):(a.P("pausemediaelement"),a.C=Cca(a.B).then(function(b){a.g=b;eJ(a);a.P("seekto",b,a.F);a.P("resumemediaelement")})):a.C=Uf(a.g));
return a.C};
Yca=function(a){a.A||(a.A=new TH,eJ(a));return a.A};
eJ=function(a){a.A&&(0<a.l.g.readyState||0<a.l.xa())&&!(0,window.isNaN)(a.g)&&(0,window.isFinite)(a.g)&&a.l.wb(a.g)};
cJ=function(a,b){a.H.resolve(b);a.P("seekend");bJ(a)};
bJ=function(a){a.g=window.NaN;a.A=null;a.C=null;a.H=null;a.F=!1;a.K=!1;a.L.stop()};
YI=function(a){if(a.l)for(var b=g.q(["loadedmetadata","seeked","seeking","playing"]),c=b.next();!c.done;c=b.next())a.I.M(a.l,c.value,function(b){switch(b.type){case "seeking":b=a.l.xa();if(!a.A||a.K&&b!=a.g)a.A=new TH,a.A.resolve(b),dJ(a,b,!0),a.K=!0;break;case "seeked":a.A&&a.A.resolve(a.l.xa());break;case "loadedmetadata":eJ(a);break;case "playing":a.H&&cJ(a,a.l.xa())}})};
Vca=function(a){var b={Gh:a.g};a.B&&g.Ia(b,tI(a.B));a.l&&g.Ia(b,kE(a.l));return b};
fJ=function(a){$D.call(this);this.g=a;this.A={}};
cE=function(a,b){var c=a.kc();a.g.src=b;a.ze(c)};
fE=function(a){return a.g.buffered||TD()};
jE=function(a){return a.g.error?a.g.error.code:null};
zE=function(a){return a.g.error?a.g.error.message:""};
gJ=function(){g.I.call(this);this.o={};this.g={};this.l=new g.P(this.A,250,this);g.J(this,this.l)};
iJ=function(a,b,c,d){a.o[b]=c;a.g[b]=new hJ(!!d)};
jJ=function(a,b){if(a.g[b]){var c=a.g[b].g;for(var d=[];c.o!=c.g;)c.o=(c.o+1)%c.l.length,d.push(c.l[c.o]);c=d}else c=[];return c};
kJ=function(a,b){return a.g[b]?zF(a.g[b].g):0};
hJ=function(a){this.o=a;this.g=new yF(100);this.l=window.NaN};
mJ=function(a,b,c,d,e,f){g.R.call(this);this.Oa=new kba;this.O=c;this.kb=d;this.pf=f;c=(0,g.A)(function(a,b){"crn_endcr"!=a||g.V(this.o,32)||lJ(this);e(a,b)},this);
this.K=new QH((0,g.A)(this.Vb,this),(0,g.A)(this.Ts,this),(0,g.A)(this.cB,this),c);g.J(this,this.K);this.ma=window.NaN;this.ba=this.H=null;this.A=a;this.sa=new Tca(a,this.kb);this.Oc=!0;this.L=this.B=null;this.X=[];this.ua=new aH;this.T=new aH;this.Le=this.He=this.qf=this.Sa=!1;this.Ab=window.NaN;this.o=new g.mE;this.Pb=[];this.jb=b;this.ya=null;this.V=window.NaN;this.Ca=new g.Rt;g.J(this,this.Ca);this.g=new g.mD;this.l=null;this.aa=window.NaN;this.C=null;this.Ie=this.Ua=!1;this.Va=window.NaN;this.Ja=
this.Qc=this.Yb=this.Wa=!1;this.qc=this.od=window.NaN;this.Yg=g.T(a.experiments,"html5_force_play_on_suspend_event");this.Zg=g.T(a.experiments,"html5_force_play_on_suspend_event_limited");this.U=null;this.ha=new gJ;g.J(this,this.ha);iJ(this.ha,"bufferhealth",(0,g.A)(this.ur,this));iJ(this.ha,"bandwidth",(0,g.A)(this.sz,this));iJ(this.ha,"networkactivity",(0,g.A)(this.vz,this),!0);iJ(this.ha,"livelatency",(0,g.A)(this.Ar,this));this.ha.start();this.Je=!1;this.Cc=!0;this.Pc=!1;this.bb=window.NaN;this.yd=
!1;this.Ma=1;this.I=null;this.mf=(0,g.A)(this.tI,this);Rw(this.mf);this.tf=this.nf=this.sf=this.zb=0;this.jg=g.yv(a.experiments,"html5_reattach_resource_after_timeout_limit");this.rf=0;this.da=this.F=null;this.lf=!1};
nJ=function(a){g.Eu()?g.Fu(a.Va):g.bs(a.Va)};
xJ=function(a,b,c,d){d=void 0===d?!0:d;a.X.length=0;a.ua.reset();a.T.reset();a.ma=window.NaN;a.V=window.NaN;a.Ua=!1;a.Pc=!1;a.bb=window.NaN;a.Oc=!0;a.l&&a.l.Ae();oJ(a);pJ(a);qJ(a);a.F&&(a.F.dispose(),a.F=null);nJ(a);a.ha.clear();a.U=null;a.I=null;g.Le(a.g);if(2==a.jb||fw(a.A.U))b.ws=!0;var e=b.Hb;var f=a.A.l;var k=a.A.Za,l;(l=e.adformat)||(l=(e=e.attrib)&&$b(rJ,e)&&$b(sJ,e)?sJ[e]+"_"+rJ[e]:void 0);if(e=l)if((l=e.match(tJ))&&5==l.length){l=e.match(tJ);var m=(0,window.parseInt)(l[3],10),n=[7,8,10,5,
6];l=!(1==(0,window.parseInt)(l[1],10)&&8==m)&&0<=n.indexOf(m);f=f||k||l?e:null}else f=null;else f=null;f&&(b.adFormat=f);2==a.jb&&(b.bf=!0);if(a.A.Ma||a.A.l)f=g.Xu("yt-player-autonavstate"),b.autonavState=f||(a.A.l?2:a.g.autonavState);a.Cc=d;a.g=b;a.g.subscribe("dataupdated",a.pI,a);a.g.subscribe("dataloaded",a.Iq,a);a.g.subscribe("dataloaderror",a.uh,a);a.g.subscribe("onStatusFail",a.oI,a);b.endSeconds&&b.endSeconds>b.startSeconds&&uJ(a,b.endSeconds);Zca(a,c);a.Wa=!1;vJ(a,"newdata");wJ(a,new g.mE)};
Zca=function(a,b){pJ(a);if(!a.g.Ih){var c=new qba(a.g,a.A,b,(0,g.A)(a.zi,a),(0,g.A)(a.Vb,a),(0,g.A)(a.wz,a),(0,g.A)(a.kb.Fa,a.kb),(0,g.A)(a.getAudioTrack,a),(0,g.A)(a.Ts,a),(0,g.A)(a.Pm,a),a.pf,(0,g.A)(a.Hz,a),function(){return a.O.g("qoes")});
a.C=new $E(c)}};
pJ=function(a){if(a.C){var b=a.C;if(!b.ga()&&b.B){b.C="paused";var c=dF(b);c.aa=!0;c.send();c=b.l;"PL"==c.o&&(c.o="N");var d=g.LE(c.g);g.PE(c,d,"vps",[c.o]);c.B(d);g.bs(b.A);b.dispose()}g.Le(a.C);a.C=null}};
zJ=function(a){if(a.g.Uc())return!0;g.yJ(a,"api.invalidparam",void 0,"invalidVideodata.1");return!1};
AJ=function(a,b){a.Sa=void 0===b?!1:b;if(zJ(a)&&!a.ua.l){a.ua.start();if(a.C){var c=a.C.l;g.T(c.g.g.experiments,"html5_qoe_unstarted_in_initialization")?g.LE(c.g):g.PE(c,g.LE(c.g),"vps",["N"]);c.g.videoData.ol?WE(c,"prefetch"):(c.l.user_intent=["0"],c.H=!0);c.g.videoData.Yf&&(RE(c,"reload",c.g.videoData.reloadReason),RE(c,"reloadcount",c.g.videoData.Yf.toString()));c.g.videoData.ti&&WE(c,"monitor");c.g.videoData.pa&&WE(c,"live");c.g.videoData.Zf&&RE(c,"ctrl",c.g.videoData.Zf,!0);c.g.videoData.gf&&
RE(c,"ytp",c.g.videoData.gf,!0);if(c.g.videoData.Ov){var d=c.g.videoData.Ov.replace(/,/g,".");RE(c,"ytrexp",d,!0)}if(!g.T(c.g.g.experiments,"html5_disable_gpu_reporting")){var e=c.g.g.experiments;d=c.g.videoData;e=g.T(e,"enable_white_noise")||g.T(e,"enable_webgl_noop")||g.T(e,"enable_gpu_logging");var f=d.Bg()||d.se()||d.te()||d.Gd();d=0==d.clientPlaybackNonce.indexOf("gp");(e||f||d)&&(d=(0,g.AE)())&&(c.l.gpu=[d])}c.T=g.as((0,g.A)(c.B,c),1E4)}a.Iq()}};
CJ=function(a){a.l&&dE(a.l);AJ(a);zJ(a)&&!g.V(a.o,128)&&(a.T.l||(a.T.start(),wJ(a,rE(rE(a.o,8),1))),BJ(a))};
BJ=function(a){if(!a.T.g&&a.ua.g&&!g.V(a.o,128)&&!a.X.length){if(!a.K.B){var b=a.K;b.B=!0;b.o()}if(!DJ(a)){a.B&&(b=a.B,a.qf=!!b.ha&&!!b.ua);a.T.g||(a.T.g=!0);!a.g.pa||0<a.g.tn&&!a.g.Lb()||(0!=g.yv(a.A.experiments,"html5_start_off_live")&&HD(a.g)&&!Gs()?(b=Math.max(a.g.ub(),a.g.ed()-g.yv(a.A.experiments,"html5_start_off_live")),EJ(a,b,!0)):EJ(a,window.Infinity,!0),Pw()&&(a.Ie=!0));if(a.C&&(b=a.C,b.g.videoData.enableCardio&&b.g.videoData.enableCardioBeforePlayback&&(b.H("connected"),hF(b)),b.g.videoData.pa)){b=
b.l;var c=b.g.videoData.la;b.g.videoData.Lb()&&WE(b,"manifestless");c&&oA(c)&&WE(b,"live-segment-"+oA(c).toFixed(1))}a.P("playbackready",a);dD("pbr","")||(a.O.g("pbr"),g.RC("pbr",void 0,"video_to_ad"))}}};
lJ=function(a,b){b=void 0===b?!0:b;FJ(a);var c=b?new g.mE(14):new g.mE;wJ(a,c)};
uJ=function(a,b){a.ba&&(a.K.C(a.ba),a.ba=null);a.ba=new g.mF(1E3*b,0x7ffffffffffff);a.ba.namespace="endcr";RH(a.K,[a.ba])};
IJ=function(a,b,c,d){a.g.Da=c;a.g.Jb=d||c;if(a.C){var e=GJ(a);c=new PD(a.g,c,b,e?nv(e):"");d&&"i"==b&&HJ(a,b,d);d=a.C.l;e=g.LE(d.g);g.PE(d,e,"vfs",[c.g.id,c.l,d.aa,c.reason]);d.aa=c.g.id;var f=d.g.L();if(0<f.width&&0<f.height){f=[Math.round(f.width),Math.round(f.height)];var k=g.XB();1<k&&f.push(k);g.PE(d,e,"view",f)}"i"!=c.reason&&"s"!=c.reason||!d.g.videoData.Kf||WE(d,"rqs");g.PE(d,e,"vps",[d.o]);d.B(e);g.T(a.A.experiments,"html5_report_performance_cap")&&"i"==b&&(c=Ov())&&a.ec("perfCap",""+c)}a.zb=
0;a.P("internalvideoformatchange",a.g,"m"==b)};
GJ=function(a){if(!a.g.Ha)return null;var b=Gv(Gv(WI(a.sa,a.g),JJ(a)),KJ(a));return g.Na(a.g.Ha.videoInfos,(0,g.A)(b.A,b))};
HJ=function(a,b,c){a.g.Jb=c;if(a.C){var d=a.C.l;c=new PD(a.g,c,b,"");var e=g.LE(d.g);c.g.id!=d.L&&(g.PE(d,e,"afs",[c.g.id,d.L,c.reason]),d.L=c.g.id)}"i"!=b&&a.P("internalaudioformatchange",a.g,"m"==b)};
g.yJ=function(a,b,c,d){var e,f;g.ac($ca,c)?e=c:c?f=c:e="YTP_ERROR_GENERIC_WITHOUT_LINK";b={errorCode:b,errorDetail:d,message:f||g.S(e),messageKey:e};wJ(a,qE(a.o,128,b));nJ(a);qJ(a);g.LJ(a)};
ada=function(a,b){a.X=a.X.filter(function(a){return b!=a});
a.T.l&&BJ(a)};
DJ=function(a){var b;(b=!!a.X.length)||(a=a.K.g.g[0],b=!!a&&-0x8000000000000>=a.start);return b};
OJ=function(a,b){a.l&&MJ(a);if(!a.o.isError()){var c=sE(a.o,512);g.T(a.A.experiments,"html5_ignore_playing_evt")&&g.V(c,8)&&rE(c,1);wJ(a,c)}a.l=b;a.l.g.loop=a.yd;a.l.ze(a.Ma);bda(a);NJ(a);if(a.F){c=a.F;var d=a.l;g.Tt(c.I);c.l=d;YI(c)}};
NJ=function(a){if(g.T(a.A.experiments,"html5_prewarm_mse")&&VA())try{eE(a.l)}catch(b){}};
MJ=function(a){PJ(a);a.B&&(g.zq(a.B.U),WH(a.B,!1));a.l&&(!a.T.l||a.o.isError()||g.V(a.o,2)||wJ(a,rE(a.o,512)),oJ(a),g.Tt(a.Ca),a.l.Ae(),a.l=null,a.F&&(a=a.F,g.Tt(a.I),a.l=null,YI(a)))};
TJ=function(a){if(!g.V(a.o,128))if(a.Je)a.Je=!1,QJ(a);else if(CJ(a),g.V(a.o,64)&&wJ(a,rE(a.o,8)),a.T.g&&a.l)if(a.g.Ha){if(a.g.pa){var b=a.Vb()<a.ub()-15;var c=g.GD(a.g)&&g.V(a.o,4);if(b||c)c?EJ(a,window.Infinity,!0):EJ(a,a.ub(),!0);!RJ(a,void 0,!0)&&a.isPeggedToLive()&&EJ(a,window.Infinity,!0);if(g.T(a.A.experiments,"html5_new_seeking")&&g.V(a.o,256)&&a.g.Ud){wJ(a,tE(a.o,8,4));return}}SJ(a)?a.A.Cj?g.$r((0,g.A)(a.Vi,a),0):a.Vi():a.Vi()}else b=a.g.pa&&!g.YA()?"html5.unsupportedlive":a.g.bc?"fmt.unplayable":
"fmt.noneavailable",g.yJ(a,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","selectableFormats.1")};
UJ=function(a){if(!a.g.Ha)return[];var b=JJ(a);g.EB(a.A)&&(b=Gv(b,VI(a.sa,a.g)));b=b||Fv;a=(0,g.Ld)(a.g.Ha.videoInfos,(0,g.A)(b.A,b));b=[];for(var c={},d=0;d<a.length;d++){var e=a[d].video;c[e.quality]||(b.push(e),c[e.quality]=!0)}return b};
VJ=function(a){return Gv(Gv(Gv(UI(a.sa,a.g),WI(a.sa,a.g)),JJ(a)),KJ(a))};
JJ=function(a){return a.H?a.H.F:qD(a.g)&&a.g.Ha.g&&Uz(a.g.la)?OI:Fv};
WJ=function(a,b,c){if(!a.ga()&&!g.V(a.o,128)&&(c&&(a.g.dj=c),qD(a.g))){if("m"==b&&c){Ev(c)&&(b="a");a:{var d=a.g;if(d.Ha){var e=g.hv[Mv()];d=d.Ha.videoInfos[0].video.g;if(e>d&&0!=d&&c.g==d)break a}g.Wu("yt-player-quality",g.Iv(c),2592E3)}}c=VJ(a);if(a.g.Ha.g){if(a.B&&"i"!=b&&(e=a.B,!e.ga()&&e.g)){hI(e,EH(e.F,c,b,!1));VH(e);if(HH(e.F)&&"m"==b&&e.F.O||"b"==b)e.l.L?e.P("reattachrequired"):(mH(e.g),mH(e.o));rH(e.g)&&dI(e,e.g,e.o);g.zq(e.U)}}else{e=a.g;a:if(d=a.g.df,c.g){for(var f=g.q(d),k=f.next();!k.done;k=
f.next()){k=k.value;var l=k.Re(),m=g.hv[l.video.quality];if((!c.o||"auto"!=l.video.quality)&&m<=c.g){c=k;break a}}c=d[d.length-1]}else c=d[0];e.cf=c;IJ(a,b,a.g.cf.Re())}g.vE(a.o)&&TJ(a)}};
cda=function(a){a.I=new BF(a.g,a.A.experiments,function(){return XJ(a,!0)});
a.C&&iF(a.C,UF(a.I))};
g.YJ=function(a){aaa(a.g.la,{cpn:a.g.clientPlaybackNonce,c:a.A.A.c,cver:a.A.A.cver});var b=Eca(a.A,a.g);a.B=new UH(a.A.schedule,b,a.g.la,a.g.Ha,a.K);a.B.subscribe("initsegment",a.eG,a);a.B.subscribe("videoformatchange",a.pG,a);a.B.subscribe("audioformatchange",a.oG,a);a.B.subscribe("error",a.uh,a);a.B.subscribe("ctmp",a.ec,a);a.B.subscribe("seekelementrequired",a.fJ,a);a.B.subscribe("seekplayerrequired",(0,g.A)(function(a,b){EJ(this,a,!0,void 0,b)},a));
a.B.subscribe("reattachrequired",a.Tv,a);a.B.subscribe("metadata",a.Xu,a);b=g.Sa(a.X,"spacecast")||a.Sa&&!g.T(a.A.experiments,"html5_preload_media");var c=a.getAudioTrack();c=c.ob.isDefault?void 0:c;a.B.initialize(a.g.startSeconds,VJ(a),b,c);a.g.probeUrl&&(a.B.ma=a.g.probeUrl);(a.X.length||a.Sa)&&WH(a.B,!1);a.F&&ZI(a.F,a.B);a.I&&vI(a.B,a.I.g)};
dda=function(a){a.F=new $I(a.l,a.B,a.g,a.I);a.F.subscribe("seekto",function(b,c){ZJ(a,b);c||$J(a);aK(a,b);a.P("seekto",a,b)});
a.F.subscribe("seekstart",function(){return bK(a)});
a.F.subscribe("ended",function(){return lJ(a)});
a.F.subscribe("pausemediaelement",function(){return FJ(a,!0)});
a.F.subscribe("resumemediaelement",function(){g.V(a.o,8)&&a.Vi()});
a.F.subscribe("ctmp",a.ec,a)};
KJ=function(a){var b=g.yv(a.A.experiments,"html5_background_quality_cap");a=g.yv(a.A.experiments,"html5_background_cap_idle_secs");return!b||"auto"!=Mv()||g.Lu()/1E3<a?Fv:Pw()?new Cv(0,b,!1):Fv};
qJ=function(a){a.B&&(a.B.dispose(),a.B=null,a.F&&ZI(a.F,null));PJ(a)};
PJ=function(a){a.L&&(a.L.dispose(),a.L=null)};
cK=function(a){if(a.L)return a.L.B;a.B?a.B.seek(a.Vb()):g.YJ(a);try{g.T(a.A.experiments,"html5_mse_refactor")?a.L=mba(a.l):a.L=lba(a.l)}catch(d){return d.message="window.URL object overwritten by external code",window.setTimeout(function(){throw d;},0),g.yJ(a,a.g.bc?"drm.unavailable":"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1"),null}var b=(0,g.A)(a.wG,a),c=(0,g.A)(function(a){g.yJ(this,"fmt.unplayable",void 0,"msi.1;ename."+a.name)},a);
g.T(a.A.experiments,"html5_mse_refactor")?Ey(a.L).then(b).then(void 0,c):(a.L.A=b,a.L.C=c);return a.L.B};
eda=function(a){return 403==a.details.rc?(a=a.errorCode,"net.badstatus"==a||"manifest.net.retryexhausted"==a):!1};
QJ=function(a){!a.g.Ud&&a.g.Yf||a.Yb||(a.Yb=!0,a.P("signatureexpired"))};
dK=function(a){return"net.retryexhausted"==a.errorCode||"net.badstatus"==a.errorCode&&!!a.details.fmt_unav};
fda=function(a,b){if(a.l&&("fmt.unplayable"==b.errorCode||"html5.invalidstate"==b.errorCode)){var c=jE(a.l);b.details.merr=c?c.toString():"0";b.details.msg=zE(a.l)}};
FJ=function(a,b){b=void 0===b?!1:b;var c=!g.T(a.A.experiments,"web_player_ended_pause_killswitch")&&g.V(a.o,2);if((g.V(a.o,64)||c)&&!b)if(g.V(a.o,8))wJ(a,tE(a.o,4,8));else return;if(a.l||g.T(a.A.experiments,"html5_pause_video_fix"))g.V(a.o,128)||(b?wJ(a,rE(a.o,256)):wJ(a,tE(a.o,4,8))),a.l&&a.l.pause(),g.T(a.A.experiments,"html5_live_only_disable_loader")&&g.GD(a.g)&&a.B&&WH(a.B,!1)};
eK=function(a){FJ(a);a.B&&(WH(a.B,!1),YH(a.B,!1))};
g.LJ=function(a,b){b=void 0===b?!1:b;if(a.l){try{a.l.pause()}catch(c){return}oJ(a);qJ(a);a.g&&(a.g.startSeconds=a.Vb());a.V=window.NaN;a.l.Ae();NJ(a);g.V(a.o,128)||(b?wJ(a,tE(a.o,4,8)):wJ(a,qE(a.o)));a.A.K.remove(a.g.videoId)}};
EJ=function(a,b,c,d,e){b=void 0===b?0:b;c=void 0===c?!1:c;e=void 0===e?!1:e;if(a.l&&a.T.g){if(b&&!(0,window.isFinite)(b)&&a.I&&a.B){if(a.g.isLowLatencyLiveStream||"LOW"==a.g.latencyClass||"ULTRALOW"==a.g.latencyClass){var f=a.I;if(f.o.length){var k=f.g;1<Math.min.apply(null,f.o)?f.g=AF(f,f.g-1):f.l.A&&(f.g=AF(f,f.g+1));if(k=k!=f.g)f.o=[],f.B=0;f=k}else f=!1;f&&a.C&&iF(a.C,UF(a.I))}vI(a.B,a.I.g)}if(g.T(a.A.experiments,"html5_new_seeking"))dJ(a.F,b,c);else{var l;if(f=b&&!(0,window.isFinite)(b)&&a.B&&
a.g.Lb())f=a.B,f=!(f.g.C||f.o.C)||a.g.Ud&&!g.T(a.A.experiments,"html5_manifestless_no_redundant_seek_to_head");f&&(l=qI(a.B));l||(l=g.$c(b||0,a.ub(),XJ(a,e)));ZJ(a,l);c?a.mr():$J(a,d);aK(a,l);a.P("seekto",a,l)}}else a.g.startSeconds=b};
ZJ=function(a,b){if(a.I){var c=a.I;XF(c,b,!1);YF(c,b)}a.g.startSeconds=b;a.V=b;c=a.Oa;c.g=b;c.l=!0};
aK=function(a,b){a.ba&&b>a.g.endSeconds&&(0,window.isFinite)(b)&&(a.K.C(a.ba),a.ba=null);b<XJ(a)&&wJ(a,sE(a.o,2))};
$J=function(a,b){g.V(a.o,32)||(wJ(a,rE(a.o,32)),g.V(a.o,8)&&FJ(a,!0),a.P("beginseeking",a));b&&(a.ya||(a.ya=new g.P(a.mr,b,a)),a.ya.start());fK(a)};
bK=function(a){a.ya&&(a.ya.dispose(),a.ya=null);g.V(a.o,32)&&(wJ(a,rE(sE(a.o,32),16)),a.P("endseeking",a))};
gK=function(a){if(!a.g.la){if(g.T(a.A.experiments,"html5_start_date_from_element")&&Gs()&&a.l){var b=a.l.g.getStartDate().getTime();if(!(0,window.isNaN)(b))return b/1E3+a.Vb()}return window.NaN}return pA(a.g.la,a.Vb())};
gda=function(a){if(!a.l)return 0;if(g.GD(a.g))return 1;if(HD(a.g)){if(RJ(a)||a.isPeggedToLive())return 1;var b=a.l,c=fE(b);b=(0<XD(c)&&b.Bc()?c.end(c.length-1):0)-a.ub();a=hK(a)-a.ub();return Math.max(0,Math.min(1,b/a))}return iE(a.l)};
iK=function(a,b){var c={};if(void 0===b?0:b){a.C?g.Ia(c,ZE(bF(a.C,"playback"))):a.g&&(c.cpn=a.g.clientPlaybackNonce);a.l&&(g.Ia(c,kE(a.l)),g.Ia(c,a.Pm()));a.B&&g.Ia(c,tI(a.B));if(a.H){var d=a.H,e=d.g;e={systemInfo:{flavor:e.flavor,keySystem:e.g},sessions:[]};d=g.q(d.l.values);for(var f=d.next();!f.done;f=d.next()){f=f.value;var k={requestedKeyIds:f.ba,cryptoPeriodIndex:f.B};f.o&&(k.keyStatuses=f.g);e.sessions.push(k)}c.drm=e}c.state=a.o.l.toString(16);g.V(a.o,128)&&(c.debug_error=a.o.g);DJ(a)&&(c.prerolls=
a.X.join(","));a.g.Ve&&(c.ismb=a.g.Ve);"UNKNOWN"!=a.g.latencyClass&&(c.latency_class=a.g.latencyClass);a.g.isLowLatencyLiveStream&&(c.lowlatency="1");a.g.pa&&(a.g.la&&oA(a.g.la)&&(c.segduration=oA(a.g.la)),a.U&&(c.lat=zF(a.U.B)));c.relative_loudness=a.g.relativeLoudness.toFixed(3);if(e=GJ(a))c.optimal_format=e.video.qualityLabel;c.user_qual=Mv()}c.debug_videoId=a.g.videoId;return c};
vJ=function(a,b){a.P("internalvideodatachange",void 0===b?"dataupdated":b,a,a.g)};
bda=function(a){(0,g.F)("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange ratechange error waiting abort resize".split(" "),function(a){this.Ca.M(this.l,a,this.fB,this)},a);
a.A.nf&&(a.Ca.M(a.l,"webkitplaybacktargetavailabilitychanged",a.UE,a),a.Ca.M(a.l,"webkitcurrentplaybacktargetiswirelesschanged",a.VE,a))};
jK=function(a){var b=a.Vb(),c=a.g;!dD("pbs","")&&JC.measure&&JC.getEntriesByName&&(JC.getEntriesByName("mark_nr")[0]?cD("mark_nr"):cD());c.videoId&&a.O.info("docid",c.videoId);c.eventId&&a.O.info("ei",c.eventId);c.clientPlaybackNonce&&a.O.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.O.info("start",c.startSeconds.toString());a.l&&a.l.g.paused&&a.O.info("paused",1);c.Da?a.O.info("fmt",nv(c.Da)):a.O.info("fmt","-1");c.ol&&a.O.info("yt_pre",a.qf?"2":"1");a.A.Ma&&a.O.info("yt_fs","1");a.O.info("cmt",
b.toFixed(3));if(a.B){b=a.B;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.ua),c.length&&(c=c[0],b.tc("vri",c.fetchStart),b.tc("vdns",c.domainLookupEnd),b.tc("vreq",c.requestStart),b.tc("fvb",c.responseStart),b.tc("vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.ha),c.length&&(c=c[0],b.tc("ari",c.fetchStart),b.tc("adns",c.domainLookupEnd),b.tc("areq",c.requestStart),b.tc("avb",c.responseStart),b.tc("arc",c.responseEnd)));b=b.kb;
for(var d in b)a.O.g(d,b[d])}};
fK=function(a,b){b=void 0===b?!1:b;if(a.l&&a.g){var c=a.Vb();if(a.I&&RJ(a)){var d=a.I,e=a.ur();d.B++;3>d.B||(0,g.G)()-d.H<d.l.F||(d.H=(0,g.G)(),d.o.push(e),50<d.o.length&&d.o.shift())}a.I&&(d=g.vE(a.o),e=a.I,XF(e,c,void 0===d?!0:d),YF(e,c),d&&(d=a.I,d=!WF(d,c)&&d.isPeggedToLive()?window.Infinity:c<d.A.ub()?d.A.ub():window.NaN,(0,window.isNaN)(d)||EJ(a,d,!0)));a.U&&RJ(a)&&(d=a.U,!d.g||c>=d.o&&c<d.A||(e=d.g.Ff(c),-1!=e&&(d.o=d.g.jd(e),d.A=d.o+d.g.Rf(e),e=(0,g.G)()/1E3-d.g.no(e),d.l&&(e-=d.l()),d.B.add(e))));
if(a.B&&!(g.T(a.A.experiments,"html5_live_only_disable_loader")&&g.V(a.o,4)&&g.GD(a.g))&&(d=a.B,d.A)){d.B!=c&&d.resume();if(d.K&&!Gy(d.A)){e=d.B<=c&&c<d.B+10;var f=0<=VD(d.A.l.buffered,d.B+fI);e&&f&&(d.K=!1)}d.K||(d.B=c);g.zq(d.sa)}5<c&&(a.g.startSeconds=c);(d=g.Eu())?g.Fu(a.Va):g.bs(a.Va);!g.xE(a.o)&&a.l.g.paused||g.V(a.o,128)||(e=(0,g.A)(a.Tz,a),a.Va=0==(a.l.g.played||TD()).length?d?g.Cu(e,100):g.$r(e,100):d?g.Cu(e,500):g.$r(e,500));a.g.Oe=c;!b&&g.vE(a.o)&&a.C&&(c=a.C,c.o.update(),c.g.videoData.Tb()&&
c.g.videoData.he&&!c.U&&IE(c.o)>=c.g.videoData.he&&(c.B&&c.g.videoData.he&&(d=bF(c,"delayplay"),d.Fb=!0,d.send(),c.U=!0),gF(c)),RJ(a)&&(!a.g.la||!lA(a.g.la))&&(0,g.G)()>a.rf+6283&&(c=a.C.l,e=c.g.B(),d=g.LE(c.g),SE(c,d,e),e=e.C,(0,window.isNaN)(e)||g.PE(c,d,"e2el",[e.toFixed(3)]),a.rf=(0,g.G)()));a.P("progresssync",a,b)}};
wJ=function(a,b){if(!g.uE(a.o,b)){var c=new g.BE(b,a.o);a.o=b;var d=!a.Pb.length;a.Pb.push(c);var e=a.l&&a.l.g.seeking;if(0<CE(c,1)&&!g.V(c.g,16)&&!e&&g.V(a.o,8)&&!g.V(a.o,64)&&a.B){a.B.ba=!0;a.g.Kf&&a.l&&a.ec("rbinfo","rs."+a.l.g.readyState+";lact."+g.Lu());e=g.yv(a.A.experiments,"html5_nnr_downgrade_count");var f=5<=gE(a.l),k=g.T(a.A.experiments,"html5_perf_cap_for_live")&&a.g.pa;e&&a.l&&(f||k)&&(g.T(a.A.experiments,"html5_nnr_downgrade_adjacency")&&6E4<(0,g.G)()-a.sf&&(a.zb=0),a.zb++,a.sf=(0,g.G)(),
f=a.g.Da.video.g,k=360,g.T(a.A.experiments,"html5_mobile_perf_cap_240")&&a.A.g&&(k=240),a.zb==e&&f>k&&(e=a.sa,e.g.mf=new Cv(0,f-1,!1),g.T(e.g.experiments,"html5_report_performance_cap")&&g.Wu("yt-player-performance-cap",f-1,2592E3),WJ(a,"b"),g.T(a.A.experiments,"html5_report_performance_cap")&&a.ec("perfDowngrade",""+f)))}0>CE(c,8)&&(g.bs(a.aa),a.aa=window.NaN);0<CE(c,8)&&!a.g.Ud&&(0,window.isNaN)(a.aa)&&(a.aa=g.$r((0,g.A)(a.Tu,a),15E3));g.V(c.state,2)&&HD(a.g)&&(e=a.Vb(),a.g.lengthSeconds!=e&&(a.g.lengthSeconds=
e,vJ(a)),fK(a,!0));0<CE(c,2)&&a.mp();a.g.la&&a.g.pa&&(0>CE(c,8)?(e=a.g.la,e.A&&e.A.stop()):0<CE(c,8)&&a.g.la.resume());0<CE(c,1)&&(a.qc=g.$r((0,g.A)(a.bJ,a),5E3));if(a.C&&(e=a.C,!e.ga())){g.V(c.state,2)?(e.C="paused",0<CE(c,2)&&e.B&&dF(e).send()):g.V(c.state,8)?(e.C="playing",e.B&&(0,window.isNaN)(e.F)&&aF(e,!1)):e.C="paused";f=e.l;k=c.state;var l=g.LE(f.g),m=tba(f,c.state);m!=f.o&&(l<f.A||("PL"==f.o?f.K+=l-f.A:"B"==f.o&&f.I&&(f.I=!1,f.O+=l-f.A,!f.U&&10<=f.O&&180>=f.K&&(f.g.H(),f.l.qoealert=["1"],
f.U=!0)),"B"!=m||"PL"!=f.o&&"PB"!=f.o||(f.I=!0),f.A=l),"B"==m&&"PL"==f.o||f.g.videoData.Kf?TE(f,l):g.PE(f,l,"cmt",[f.g.l().toFixed(3)]),g.PE(f,l,"vps",[m]),f.o=m,f.A=l);g.V(k,128)&&VE(f,l,k.g.errorCode,k.g.errorDetail);(g.V(k,2)||g.V(k,128))&&f.B(l);g.V(k,8)&&f.g.videoData.ol&&!f.H&&(f.l.user_intent=[g.LE(f.g).toString()],f.H=!0);UE(f);e.A&&g.V(c.state,128)&&(e.H("error-100"),g.bs(e.A))}if(d)try{for(var n=g.q(a.Pb),p=n.next();!p.done;p=n.next()){var u=p.value,v=a.K;c=u;if(v.B&&!v.I&&(v.o(),g.V(c.g,
16))){c=v;var D=PH(c.g,Math.max(c.A-2E3,0));!(0,window.isNaN)(D)&&0x7ffffffffffff>D&&c.F.start()}a.P("statechange",u)}}finally{a.Pb.length=0}}};
kK=function(a){g.V(a.o,2)||g.V(a.o,32)||(a.V=window.NaN)};
lK=function(a,b){wJ(a,tE(a.o,1028,9));a.ec("dompaused",b);a.P("onDompaused")};
SJ=function(a){if(!a.l||!a.g.Ha)return!1;var b=null;a.g.Ha.g?(b=cK(a),a.B.resume()):(qJ(a),a.g.cf&&(b=a.g.cf.l()));var c=a.l.l,d=!1;c&&null!=b&&b.Of==c.Of||(a.O.g("vta"),g.RC("vta",void 0,"video_to_ad"),dE(a.l,b),g.T(a.A.experiments,"html5_mse_refactor")||mK(a),a.L&&Gu(4),g.bs(a.aa),!a.g.Ud&&pE(a.o)&&(a.aa=g.$r((0,g.A)(a.Tu,a),15E3)),d=!0);g.T(a.A.experiments,"html5_mse_refactor")&&mK(a);return d};
mK=function(a){if(g.yD(a.g)&&a.l){var b=a.g.ue;if(b){if(a.H){if("fairplay"!=b.flavor||Gs()){g.T(a.A.experiments,"html5_mse_refactor");return}oJ(a)}a.H=new PI(a.l.ia(),b,a.A.experiments,"widevine"==b.flavor&&!a.g.pa&&!a.g.xn,a.g.drmSessionId);a.H.subscribe("newsession",a.RG,a);a.H.subscribe("licenseerror",a.hG,a);a.H.subscribe("qualitychange",a.jG,a);a.H.subscribe("heartbeatparams",a.dB,a);a.H.subscribe("keystatuseschange",a.eB,a);a.H.subscribe("hdproberequired",a.iG,a);b=a.H;a=a.g.oauthToken;b.O=
a;b.P("oauthtoken",a)}else g.yJ(a,"fmt.unplayable","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1")}};
oJ=function(a){a.H&&(a.H.dispose(),a.H=null)};
hK=function(a){return a.g.pa&&(RJ(a)||a.isPeggedToLive()||g.GD(a.g))?a.Vb():XJ(a)};
XJ=function(a,b){b=void 0===b?!1:b;if(g.T(a.A.experiments,"html5_new_seeking"))var c=a.F?a.F.ed(b):0;else if(a.l)if(a.g.pa)if(Gs())a:{if(g.T(a.A.experiments,"html5_start_date_from_element")&&Gs()&&a.l&&(c=a.l.g.getStartDate().getTime(),!(0,window.isNaN)(c))){c=Math.max(((0,g.G)()-c)/1E3-30,0);break a}c=0}else c=a.g.Ha&&a.g.Ha.g&&a.I?b?a.g.ed():VF(a.I):aE(a.l)||0;else c=a.g.ed();else c=0;return c};
nK=function(a,b){a.Ma=b;a.l&&a.l.ze(b)};
RJ=function(a,b,c){if(!a.g.pa||!a.I||!(a.Oc||void 0!==c&&c))return!1;void 0==b&&(b=a.Vb());return WF(a.I,b)};
g.oK=function(a,b){a.Oc=b;if(a.g.la)if(b)a.g.la.resume();else{var c=a.g.la;c.A&&c.A.stop()}g.T(a.A.experiments,"html5_suspend_loader")&&a.B&&(b?a.B.resume():WH(a.B,!0));g.T(a.A.experiments,"html5_fludd_suspend")&&(g.V(a.o,2)||b?g.V(a.o,512)&&b&&wJ(a,sE(a.o,512)):wJ(a,rE(a.o,512)));a.C&&(c=a.C.l,g.PE(c,g.LE(c.g),"stream",[b?"A":"I"]))};
pK=function(a){a.l&&(a.L?(oJ(a),qJ(a),cK(a)):(a.g.cf&&a.g.cf.A(),a.l.Ae()),TJ(a))};
qK=function(a,b){g.T(a.A.experiments,"html5_log_rebuffer_reason")&&a.ec("bufreason","r."+b+";lact."+g.Lu())};
rK=function(a,b){jF.call(this,a,b);this.H=null};
g.sK=function(a){return a.app.A};
g.tK=function(a){a=g.sK(a).I;return!!a&&a.Xs()};
uK=function(a){a=g.sK(a);var b=a.I;return b&&b.Ys()?!0:g.FD(a.g.Y(),"ypc_module")};
g.vK=function(a,b){3==a.Ga()?a.P("mdxautoplaycancel"):a.P("autonavcancel",b)};
g.W=function(a){return a.app.g};
g.yK=function(a){var b=a.app;a=a.playerType;return 3==wK(b)?g.xK(b.A).H:g.X(b,a).o};
g.zK=function(a){return a.app.H};
AK=function(a){var b=g.xK(g.sK(a));return a.app.ba&&!a.isFullscreen()||3==a.Ga()&&b.hasNext()&&b.qe()||!!a.Be()};
g.BK=function(a,b){var c=a.playerType;(c=g.X(a.app,void 0===c?1:c))&&lJ(c,b)};
g.CK=function(a){if(tt())if(a.isFullscreen())vt(a.getRootNode());else{a=a.getRootNode();var b=rt(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],a);b&&b.call(a)}else a.ka("onFullscreenToggled",a.isFullscreen())};
g.DK=function(a){var b={};a=UJ(g.X(a.app));a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b[c.quality]=c;return b};
g.EK=function(a){return(a=g.X(a.app))?g.Iv(UI(a.sa,a.g)):"unknown"};
g.FK=function(a){return(a=g.sK(a).o)?a.CB():{}};
g.GK=function(a,b,c,d){var e=g.X(a.app);c.event=b;a.isFullscreen()&&(c.fs=1);c.ux=1;e.logEvent(c,d)};
g.HK=function(a){a=g.sK(a).A;return!!a&&a.Bi()};
g.IK=function(a){a=g.sK(a).A;return!!a&&a.Ws()};
g.JK=function(a){var b=g.Kw(a);if(b)return b.Yn();a=a.app.H.Fa();return new g.hh(0,0,a.width,a.height)};
KK=function(a){a=g.sK(a).O;return!!a&&a.uB()};
g.MK=function(a,b,c){LK(a.app,b,c||a.playerType)};
g.OK=function(a,b,c){var d=a.app;a=c||a.playerType;if(c=g.X(d,a))c.K.C.apply(c.K,b),a&&wK(d)!=a||NK(d,"cuerangesremoved",b)};
g.PK=function(a,b){var c=a.app,d=a.playerType,e=g.X(c,d);e&&(e=vca(e.K,b),d&&wK(c)!=d||NK(c,"cuerangesremoved",e))};
g.QK=function(a,b){var c=g.X(a.app,a.playerType);c&&ada(c,b)};
g.RK=function(a){a=a.Y().Da;return!!a&&!(!a.audio||!a.video)&&"application/x-mpegURL"!=a.mimeType};
g.SK=function(a){a=a.Y();return!!(a.adaptiveFormats||a.hlsFormats||a.bd)};
g.TK=function(a,b,c){a=g.zK(a).element;var d=fb(a.children,function(a){a=(0,window.parseInt)(a.getAttribute("data-layer"),10);return c-a||1});
0>d&&(d=-(d+1));Id(a,b,d);b.setAttribute("data-layer",c)};
g.UK=function(a){var b=g.W(a);if(!b.yd)return!1;var c=a.Y();if(!c||3==a.Ga())return!1;b=c.pa&&(!g.T(b.experiments,"allow_live_autoplay")||c.isLiveDefaultBroadcast);return!c.ypcPreview&&!b&&!g.Sa(c.ud,"ypc")&&!a.Be()};
WK=function(a,b,c,d){if(g.W(a).C){a=a.app.L;g.Sa(a.g,b);g.Ua(a.g,b);var e=String(a.H++);b.setAttribute("data-visual-id",e);VK(a,"onLogClientVeCreated",{id:e,ve_type:d});g.Ke(c,(0,g.A)(a.F,a,b))}};
g.XK=function(a,b){g.W(a).C&&a.app.L.click(b)};
g.YK=function(a,b,c){if(g.W(a).C){a=a.app.L;var d=b.getAttribute("data-visual-id");g.Sa(a.g,b);c?g.Ua(a.l,d):g.Wa(a.l,d);c&&!g.Sa(a.o,d)&&(VK(a,"onLogVesShown",{ids:[d]}),g.Ua(a.o,d))}};
ZK=function(a,b){return g.W(a).C?g.Sa(a.app.L.g,b):!1};
jda=function(){var a={};a.dt=hda;a.flash=ida||"0";a:{try{var b=window.top.location.href}catch(e){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}a=(a.frm=b,a);a.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?K:c;try{var d=c.history.length}catch(e){d=0}a.u_his=d;a.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(a.u_h=K.screen.height,a.u_w=K.screen.width,a.u_ah=K.screen.availHeight,a.u_aw=K.screen.availWidth,
a.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(a.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(a.u_nmime=K.navigator.mimeTypes.length);return a};
$K=function(a){return a.isTimeout?"NO_BID":"ERR_BID"};
kda=function(){var a=null;ht().then(function(b){return a=b},function(b){return a=$K(b)});
return a};
lda=function(){var a=og(1E3,"NO_BID");return ag(g.cg(Yf([ht(),a]),$K),function(){return a.cancel()})};
mda=function(){var a=null;kt().then(function(b){return a=b},function(){return a="NO_ADS_ID"});
return a};
nda=function(){var a=og(1E3,"NO_ADS_ID");return ag(g.cg(Yf([kt(),a]),function(){return"NO_ADS_ID"}),function(){return a.cancel()})};
aL=function(a){this.g=a;this.l=1};
bL=function(a,b){a.g.app.I.g(b)};
cL=function(a,b,c,d){c=void 0===c?"":c;d=void 0===d?"":d;var e=a.g.Y(1),f={AD_BLOCK:a.l++,CA_TYPE:oda?"flash":"image",CPN:e.clientPlaybackNonce,LACT:g.Lu(),VIS:a.g.Ye(),P_H:g.zK(a.g).Fa().height,P_W:g.zK(a.g).Fa().width},k=jda();Object.keys(k).forEach(function(a){f[a.toUpperCase()]=k[a].toString()});
""!==c&&(f.BISCOTTI_ID=c);""!==d&&(f.ANID=d);a=g.kp(b,f).split("?");if(2!=a.length)return Vf(Error("Invalid AdBreakInfo URL"));b=g.q(a);a=b.next().value;c=b.next().value;b={};e.oauthToken&&ks()&&(b.Authorization="Bearer "+e.oauthToken);(e=g.ds(c))&&e.post_data&&(c=g.ds(e.post_data),Object.assign(e,c),delete e.post_data);return Ts(a,{format:"RAW",headers:b,method:"POST",rb:e,timeout:2E3,withCredentials:!0})};
g.dL=function(a){g.R.call(this);this.g=a;this.loaded=!1};
eL=function(a,b,c){this.o=a;this.l=null;this.A=b;this.g=0;this.livestream=void 0===c?!1:c};
fL=function(a,b,c,d){g.mF.call(this,b.start,b.end,{id:d,namespace:"ad",priority:2,visible:c});this.l=a.kind||"AD_PLACEMENT_KIND_UNKNOWN";this.g=!1;this.A=null};
gL=function(a){return"AD_PLACEMENT_KIND_START"==a.l};
hL=function(a,b,c){c=void 0===c?!1:c;switch(a.kind){case "AD_PLACEMENT_KIND_START":return new g.vj(-0x8000000000000,-0x8000000000000);case "AD_PLACEMENT_KIND_END":return c?new g.vj(Math.max(0,b.o-b.g),0x7ffffffffffff):new g.vj(0x7ffffffffffff,0x8000000000000);case "AD_PLACEMENT_KIND_MILLISECONDS":var d=a.adTimeOffset;a=(0,window.parseInt)(d.offsetStartMilliseconds,10);d=(0,window.parseInt)(d.offsetEndMilliseconds,10);-1===d&&(d=b.o);if(c&&(d=a,a=Math.max(0,a-b.g),a==d))break;return new g.vj(a,d);
case "AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED":return a=b.l,d=1E3*a.Pd,c?new g.vj(Math.floor(b.A+Math.random()*Math.max(0,d-b.A-1E4)),d):new g.vj(d,d+(0<a.durationSecs?1E3*a.durationSecs:5E3))}return null};
jL=function(a,b,c){b=void 0===b?null:b;c=void 0===c?{}:c;this.id=iL(a);this.componentType=a;this.macros=c;this.renderer=b};
iL=function(a){return a+g.Dq(g.Cq.getInstance())};
kL=function(a,b,c){this.id=c;this.content=a;this.actionType=b};
lL=function(){this.g=null};
pda=function(a){return mL(a).then(function(){return new g.Pf(function(a,c){var b=nL();(b=b?oL(b):null)&&"adSizes"in b[0]?a((0,g.H)(b[0].adSizes,function(a){return new g.gd(a.adWidth,a.adHeight)})):c(Error("No slots registered with GPT services"))})})};
qda=function(a){!pL()&&a.g?a.g.cancel():mL(a).then(function(){return qL(null,300,60)})};
qL=function(a,b,c){var d=og(5E3).then(function(){throw Error("Timed out while waiting for GPT set companion");}),e=new g.Pf(function(d,e){var f=nL();
if(f){var k=oL(f);if(k&&0!=k.length){var n={};n.slotId=k[0].slotId;n.adContent="<div></div>";n.adWidth=b;n.adHeight=c;n.friendlyIframeRendering=!1;n.onAdContentSet=function(b){var c=g.Nd(b);c||(c=g.Dd("div"),b.appendChild(c));a&&c.appendChild(a);d()};
(f=f.googleSetCompanionAdContents)?f([n]):e(Error("Missing googleSetCompanionAdContents API"))}else e(Error("No slots registered with GPT services"))}else e(Error("Failed to find GPT services"))});
return Yf([e,d])};
mL=function(a){null==a.g&&(a.g=new g.Pf(function(a,c){function b(d){pL()?a():0>=d?c(Error("Timed out while waiting for GPT services")):g.cg(og(200).then(function(){b(d-1)}),c)}
b(150)}));
return a.g};
pL=function(){var a=nL();if(!a)return!1;a=oL(a);return g.za(a)&&0!=a.length?null!=g.md("google_companion_ad_div"):!1};
nL=function(){var a=yd();return g.z("googletag.cmd",a)?a:null};
oL=function(a){a=void 0!==a.googleGetCompanionAdSlots?Vr(a.googleGetCompanionAdSlots)():void 0;return void 0!==a&&0<a.length?a:null};
rda=function(){this.url=null;this.height=this.width=0;this.clickTrackingUrls=null};
rL=function(){this.contentVideoId=null;this.macros={};this.imageCompanionAdRenderer=this.iframeCompanionRenderer=null};
sL=function(a,b){this.l=a;this.g=b};
sda=function(a){return a.g?pda(a.g):Vf("GPT is not enalbed")};
tda=function(a){this.o=a;this.g={};this.l=Bk()?500:2500};
uda=function(a,b){return b.reduce(function(b,d){if(!(d&&d.mimeType&&d.maxBitrate&&d.uri))return b;d.mimeType in a.g||(a.g[d.mimeType]=a.o.bo(d.mimeType));if(!a.g[d.mimeType])return b;if(!b)return d;if(d.delivery!=b.delivery)return"STREAMING"==d.delivery?d:b;var c=b.maxBitrate-a.l,f=d.maxBitrate-a.l;return 0>=c&&0>=f?f>c?d:b:0<c&&0<f?f<c?d:b:0>=f?d:b},null)};
tL=function(a){this.ba=a||{};this.L=String(Math.floor(1E9*Math.random()))};
uL=function(a,b){return a.ba[b]?a.ba[b]:[]};
vL=function(a,b){this.g=a;this.l=b.length;this.adBreakLengthSeconds=b.reduce(function(a,b){return a+b},0);
for(var c=0,d=a+1;d<b.length;d++)c+=b[d];this.adBreakRemainingLengthSeconds=c};
wL=function(a,b){var c;if(c=a.pings){var d={};d.impression=c.impressionPings||[];d.error=c.errorPings||[];d.mute=c.mutePings||[];d.unmute=c.unmutePings||[];d.pause=c.pausePings||[];d.rewind=c.rewindPings||[];d.resume=c.resumePings||[];d.skip=c.skipPings||[];d.close=c.closePings||[];d.progress=c.progressPings||[];d.clickthrough=c.clickthroughPings||[];d.fullscreen=c.fullscreenPings||[];d.active_view_viewable=c.activeViewViewablePings||[];d.active_view_measurable=c.activeViewMeasurablePings||[];d.active_view_fully_viewable_audible_half_duration=
c.activeViewFullyViewableAudibleHalfDurationPings||[];d.end_fullscreen=c.endFullscreenPings||[];d.channel_clickthrough=c.channelClickthroughPings||[];d.abandon=c.abandonPings||[];d.start=c.startPings||[];d.first_quartile=c.firstQuartilePings||[];d.midpoint=c.secondQuartilePings||[];d.third_quartile=c.thirdQuartilePings||[];d.complete=c.completePings||[];c=d}else c={};tL.call(this,c);this.B=new vL(0,[]);this.H=this.C=null;this.I=!1;this.X=b;this.K=[];this.l={};this.A=a;this.V=this.T=null;this.o=0;
this.U=this.F=null;c=this.A.skipOffsetMilliseconds;0<c&&(this.T=c);this.l=g.ds(this.A.playerVars||"");if(c=this.A.external)this.K=c.mediaFiles||[],c=c.durationMilliseconds,g.va(c)&&(this.o=c/1E3,this.l.length_seconds=this.o.toString()),(c=uda(this.X,this.K))?(d=c.mimeType,this.l.url_encoded_third_party_media="url="+(0,window.encodeURIComponent)(c.uri)+"&type="+(0,window.encodeURIComponent)(d)):this.U=Error("Nonplayable third party ad media file.");else if(this.F=this.l.video_id,this.C=this.l.ucid||
null,this.I=pB(this.I,this.l.is_listed),this.V=this.l.title||null,this.o=rB(this.o,this.l.length_seconds),this.l.cta_conversion_urls)try{this.l.cta_conversion_urls=JSON.parse(this.l.cta_conversion_urls)}catch(e){g.Q(e)}this.H=this.A.clickthroughEndpoint||null;this.B=new vL(0,[this.o])};
xL=function(a){a=a.l||{};a.autoplay="1";return a};
yL=function(a){tL.call(this);this.l=a};
zL=function(a){tL.call(this);this.l=a};
AL=function(a){tL.call(this);this.l=a};
BL=function(){this.g=[];this.l=null;this.A=this.o=0};
CL=function(a){a=a.impressionUrls;var b={};a&&(b.impression=a);tL.call(this,b)};
DL=function(){tL.call(this)};
FL=function(a,b){var c=g.Tr("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=g.Kg(window.location.href);d&&c.push(d);d=g.Kg(a);if(g.Sa(c,d)||!d&&g.ob(a,"/"))if(g.Rs("autoescape_tempdata_url")&&(c=window.document.createElement("a"),g.Wc(c,a),a=c.href),a&&(c=g.Ig(a),c=g.Dg(null,null,null,null,c[5],c[6],c[7]),d=c.indexOf("#"),c=0>d?c:c.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Zu();if(e){var e=(0,window.parseInt)(e,10);(0,window.isFinite)(e)&&0<e&&(c="ST-"+g.Lb(c).toString(36),d=b?g.Sg(b):"",g.av(c,d,e||5),
EL(b))}else e="ST-"+g.Lb(c).toString(36),c=b?g.Sg(b):"",g.av(e,c,5),EL(b)}};
EL=function(a){if(a){a=a.itct||a.ved;var b=g.z("yt.logging.screen.storeParentElement");a&&b&&b(new g.Pu(a))}};
g.GL=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Ug(a,b)+c;a=a instanceof Jc?a:Oc(a);d.href=g.Kc(a)};
g.HL=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.Tr("EVENT_ID");d&&(b.ei||(b.ei=d));b&&FL(a,b);if(c)return!1;(window.ytspf||{}).enabled?window.spf.navigate(a):g.GL(a);return!0};
g.IL=function(a,b,c){c&&FL(a,c);window.open(a,b||g.Lb(a).toString(36))};
JL=function(a){this.g=a};
vda=function(a,b){switch(b.action){case "START_LINEAR_AD":g.Jf(function(){var b=a.g;b.l&&KL(b.l.o)&&b.l.Wt()});
break;case "END_LINEAR_AD":g.Jf(function(){var b=a.g;b.l&&KL(b.l.o)&&(b=b.l,KL(b.o)&&b.Sd())});
break;case "END_LINEAR_AD_PLACEMENT":g.Jf(function(){var b=a.g;b.l&&KL(b.l.o)&&b.l.Ut()})}};
ML=function(a,b){(0,g.F)(a,function(a){return LL(a,b)})};
LL=function(a,b){a.loggingUrls&&(0,g.F)(a.loggingUrls,function(a){if(a.baseUrl){a=g.kp(a.baseUrl,b);if("https:"==window.location.protocol){var c=g.Ig(a);a="https"==c[1]?a:g.Dg("https",c[2],c[3],c[4],c[5],c[6],c[7])}g.Ns(a,void 0,Kp.Bk(a))}});
a.urlEndpoint&&a.urlEndpoint.url&&g.IL(a.urlEndpoint.url)};
NL=function(a,b){g.U.call(this,a);this.o=b;this.g=wda(this)};
wda=function(a){var b=a.o;if(b){a=function(a){return{toString:function(){return a()}}};
var c={};c.AD_MT=a(function(){return Math.round(Math.max(0,1E3*b.xa(2))).toString()});
c.MT=a(function(){return Math.round(Math.max(0,1E3*b.xa(1))).toString()});
c.P_H=a(function(){return b.Jg().height.toString()});
c.PV_H=c.P_H;c.P_W=a(function(){return b.Jg().width.toString()});
c.PV_W=c.P_W;c.CONN="0";c.WT=a(function(){return(0,g.G)().toString()});
c.LACT=a(function(){return g.Lu().toString()});
c.VIS=a(function(){return b.Ye().toString()});
c.VOL=a(function(){return b.Nb().toString()});
return c}return{}};
OL=function(a,b,c){c=xda(b,c);var d={D:"div"};c&&(d={D:"div",J:"image-companion",G:[{D:"img",N:{src:c.url,border:"0",style:"cursor:pointer;"}}]});NL.call(this,d,a);this.l=b;if(a=this.Z["image-companion"])void 0!==c.width&&void 0!==c.height&&g.Rh(a,c.width,c.height),this.fa("click",this.A,this),this.Gc(b.impressionCommands)};
xda=function(a,b){if(!a.image||!a.image.thumbnail)return null;var c=a.image.thumbnail;return null==c.thumbnails?null:g.Na(c.thumbnails||[],function(a){return a.width==b.width&&a.height==b.height})};
PL=function(a){tL.call(this);this.l=a;this.C=(0,g.H)((a.image&&a.image.thumbnail?a.image.thumbnail.thumbnails:null)||[],function(a){return new g.gd(a.width,a.height)})};
QL=function(a,b){BL.call(this);var c=this;if(a.renderers){var d=[];a.renderers.forEach(function(a){a.instreamVideoAdRenderer&&(a=new wL(a.instreamVideoAdRenderer,b),c.g.push(a),d.push(a.o))});
this.g.forEach(function(a,b){var c=new vL(b,d);a.B=c})}};
RL=function(a){tL.call(this);this.l=a};
SL=function(a){g.Xb(a).filter(g.Ca).forEach(SL);Object.freeze(a)};
TL=function(a){tL.call(this);this.l=g.ic(a);SL(this.l)};
UL=function(a){if(!a)return[];var b=[];a=g.q(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,c.loggingUrls){c=g.q(c.loggingUrls);for(var d=c.next();!d.done;d=c.next())b.push({baseUrl:d.value.baseUrl})}return b};
yda=function(a){var b={};b.impression=UL(a.impressionCommands)||[];b.complete=UL(a.completionCommands)||[];return b};
VL=function(a){tL.call(this,yda(a));this.l=a};
WL=function(a){if(!a)return[];var b=[];a.forEach(function(a){a.command.loggingUrls.forEach(function(c){b.push({baseUrl:c.baseUrl,offsetMilliseconds:a.adVideoOffset.milliseconds})})});
return b};
XL=function(a){return a&&a.adVideoOffset&&a.adVideoOffset.percent||0};
YL=function(a){return"AD_VIDEO_PROGRESS_KIND_PERCENT"==a.adVideoOffset.kind};
zda=function(a){a=a.playbackCommands;if(!a)return{};var b={};b.impression=UL(a.impressionCommands)||[];b.error=UL(a.errorCommands)||[];b.mute=UL(a.muteCommands)||[];b.unmute=UL(a.unmuteCommands)||[];b.pause=UL(a.pauseCommands)||[];b.rewind=UL(a.rewindCommands)||[];b.resume=UL(a.resumeCommands)||[];b.skip=UL(a.skipCommands)||[];b.close=UL(a.closeCommands)||[];b.clickthrough=UL(a.clickthroughCommands)||[];b.fullscreen=UL(a.fullscreenCommands)||[];b.active_view_viewable=UL(a.activeViewViewableCommands)||
[];b.active_view_measurable=UL(a.activeViewMeasurableCommands)||[];b.active_view_fully_viewable_audible_half_duration=UL(a.activeViewFullyViewableAudibleHalfDurationCommands)||[];b.end_fullscreen=UL(a.endFullscreenCommands)||[];b.channel_clickthrough=UL(a.channelClickthroughCommands)||[];b.abandon=UL(a.abandonCommands)||[];b.progress=WL(a.progressCommands.filter(function(a){return"AD_VIDEO_PROGRESS_KIND_MILLISECONDS"==a.adVideoOffset.kind}));
b.start=WL(a.progressCommands.filter(function(a){return YL(a)&&1E-6>=Math.abs(XL(a)-0)}));
b.first_quartile=WL(a.progressCommands.filter(function(a){return YL(a)&&1E-6>=Math.abs(XL(a)-.25)}));
b.midpoint=WL(a.progressCommands.filter(function(a){return YL(a)&&1E-6>=Math.abs(XL(a)-.5)}));
b.third_quartile=WL(a.progressCommands.filter(function(a){return YL(a)&&1E-6>=Math.abs(XL(a)-.75)}));
b.complete=WL(a.progressCommands.filter(function(a){return YL(a)&&1E-6>=Math.abs(XL(a)-1)}));
return b};
ZL=function(a,b){b=void 0===b?!0:b;tL.call(this,zda(a));this.A=a;this.o=b;this.l=a.questions?a.questions.reduce(function(a,b){var c=b.instreamSurveyAdSingleSelectQuestionRenderer||b.instreamSurveyAdMultiSelectQuestionRenderer;return c?a+c.surveyAdQuestionCommon.durationMilliseconds/1E3:a},0):0};
$L=function(a){tL.call(this);this.l=a};
aM=function(a){tL.call(this);this.l=a};
cM=function(a,b){BL.call(this);var c=bM(this,a.adVideoStart);c&&this.g.push(c);(c=Ada(this,a.linearAd,b))&&this.g.push(c);(c=bM(this,a.adVideoEnd))&&this.g.push(c);a.persistingOverlay&&a.persistingOverlay.persistingAdOverlayRenderer&&(this.l=new AL(a.persistingOverlay.persistingAdOverlayRenderer))};
Ada=function(a,b,c){if(b){if(b.instreamVideoAdRenderer)return new wL(b.instreamVideoAdRenderer,c);if(b.instreamSurveyAdRenderer)return a=!a.g.some(function(a){return a instanceof $L}),new ZL(b.instreamSurveyAdRenderer,a)}return null};
bM=function(a,b){return null==b?null:b.adActionInterstitialRenderer?(a.A=1,new VL(b.adActionInterstitialRenderer)):b.adTextInterstitialRenderer?new aM(b.adTextInterstitialRenderer):b.surveyTextInterstitialRenderer?(a.o=1,new $L(b.surveyTextInterstitialRenderer)):null};
dM=function(a){tL.call(this);this.l=a};
eM=function(a,b){NL.call(this,{D:"iframe",J:"videowall-companion",N:{marginwidth:"0",marginheight:"0",hspace:"0",vspace:"0",frameborder:"0",scrolling:"no",src:b.iframeUrl}},a);var c=this;this.element.width=g.t(b.iframeWidth)?b.iframeWidth:300;this.element.height=g.t(b.iframeHeight)?b.iframeHeight:250;this.l=b;var d=this.Z["videowall-companion"];d&&d.addEventListener("load",function(){c.Gc(b.impressionCommands);try{var a=d.contentDocument||d.contentWindow.document;var f=a&&a.body}catch(k){g.Q(k),f=
null}f&&g.Ze(f,"click",c.A.bind(c))})};
fM=function(a){tL.call(this);this.l=a};
gM=function(a){return a.length?(0,g.H)(a[0].loggingUrls||[],function(a){return a.baseUrl}):[]};
hM=function(a,b,c,d){this.id=b;this.A=a.placementStartPings||[];this.o=a.placementEndPings||[];b=a.config&&a.config.adPlacementConfig;if(!b)throw Error("Malformed AdPlacementRenderer: missing AdPlacementConfig");var e=a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer||{};this.l=e.getAdBreakUrl||"";d.g=(0,window.parseInt)(e.prefetchMilliseconds,10)||0;var f=hL(b,d);if(null==f)d=new fL(b,new g.vj(-1,-1),!1,"adcuerange:invalid"),d.g=!0,d=[null,d];else{e=g.Dq(g.Cq.getInstance());
f=new fL(b,f,!(d.livestream||d.l),"adcuerange:"+e);var k=null;if(d.l||0<d.g)if(d=hL(b,d,!0))k=new fL(b,d,!1,"prefetch:"+e),f.A=k,k.A=f;d=[k,f]}this.C=d[0];this.B=d[1];if(a.renderer){var l=a.renderer;a=l.instreamVideoAdRenderer;d=l.clientForecastingAdRenderer;b=l.invideoOverlayAdRenderer;e=l.videowallIframeCompanionAdRenderer;f=l.imageCompanionAdRenderer;k=l.instreamSurveyAdRenderer;var m=l.plaShelfRenderer,n=l.sandwichedLinearAdRenderer,p=l.shoppingCompanionCarouselRenderer,u=l.backfillMpuCompanionAdRenderer,
v=l.actionCompanionAdRenderer;l=l.multipleInstreamVideoAdRenderer;c=null!=a&&a.playerVars?new wL(a,c):null!=d?new CL(d):null!=b?new RL(b):null!=e?new fM(e):null!=f?new PL(f):null!=k?new ZL(k):null!=n?new cM(n,c):null!=l?new QL(l,c):null!=m?new TL(m):null!=p?new dM(p):null!=u?new zL(u):null!=v?new yL(v):null}else c=null;this.g=c};
iM=function(a,b,c,d){var e=null;try{e=new hM(a,b,c,d)}catch(f){g.Q(f)}return e};
jM=function(a){return"AD_PLACEMENT_KIND_MILLISECONDS"==a.wc().l||"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==a.wc().l};
kM=function(a){return"AD_PLACEMENT_KIND_START"==a.wc().l};
KL=function(a){return a.g instanceof wL||a.g instanceof ZL||a.g instanceof BL};
mM=function(a){var b={};Bda(a,b);Cda(b);b.LACT=lM(function(){return g.Lu().toString()});
b.VIS=lM(function(){return a.Ye().toString()});
b.SDKV="h.3.0";b.VOL=lM(function(){return a.Nb().toString()});
b.VED="";return b};
nM=function(a){var b=Object.assign({},{});b.MIDROLL_POS=jM(a)?lM(vf(Math.round(a.wc().start/1E3).toString())):lM(vf("0"));return b};
oM=function(a,b){var c={};return c.YT_ERROR_CODE=a.toString(),c.ERRORCODE="400",c.ERROR_MSG=b,c};
lM=function(a){return{toString:function(){return a()}}};
pM=function(a){for(var b={},c=g.q(Dda),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];e&&(b[d]=e.toString())}return b};
qM=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c={};Object.assign.apply(Object,[].concat([c],g.pa(b)));return c};
Bda=function(a,b){b.CPN=lM(function(){var b;(b=a.Y(1))?b=b.clientPlaybackNonce:(g.Q(Error("Video data is null."),"WARNING"),b=null);return b});
b.AD_MT=lM(function(){return rM(a,2)});
b.MT=lM(function(){return rM(a,1)});
b.P_H=lM(function(){return g.zK(a).Fa().height.toString()});
b.P_W=lM(function(){return g.zK(a).Fa().width.toString()});
b.PV_H=lM(function(){return g.sM(g.zK(a)).height.toString()});
b.PV_W=lM(function(){return g.sM(g.zK(a)).width.toString()})};
rM=function(a,b){var c=1E3*a.xa(b);return Math.round(Math.max(0,c)).toString()};
Cda=function(a){a.CONN=lM(vf("0"));a.WT=lM(function(){return Date.now().toString()})};
tM=function(){g.R.call(this);this.g=new window.Map};
vM=function(){null==uM&&(uM=new tM,vo.getInstance().o="b");return uM};
Eda=function(a){switch(a){case "fully_viewable_audible_half_duration_impression":return"g";case "measurable_impression":return"b";case "overlay_unmeasurable_impression":return"h";case "overlay_unviewable_impression":return"i";case "overlay_viewable_end_of_session_impression":return"j";case "overlay_viewable_immediate_impression":return"k";case "viewable_impression":return"o";default:return null}};
wM=function(a){a=a.ii();return void 0!==a&&2==a.getPlayerType()};
xM=function(a){a=g.W(a);return g.OB(a)&&!g.FB(a)&&"desktop-polymer"==a.playerStyle};
zM=function(a,b){var c=g.W(a);IB(c)||"3"!=c.o||(c=g.zK(a),IB(c.app.g),c.H=!b,yM(c))};
AM=function(a){g.I.call(this);this.g=a};
Fda=function(a){switch(a){case "abandon":return"abandon";case "active_view_fully_viewable_audible_half_duration":return"fully_viewable_audible_half_duration_impression";case "active_view_measurable":return"measurable_impression";case "active_view_viewable":return"viewable_impression";case "complete":return"complete";case "end_fullscreen":return"exitfullscreen";case "first_quartile":return"firstquartile";case "fullscreen":return"fullscreen";case "impression":return"impression";case "midpoint":return"midpoint";
case "mute":return"mute";case "pause":return"pause";case "progress":return"progress";case "resume":return"resume";case "skip":return"skip";case "start":return"start";case "third_quartile":return"thirdquartile";case "unmute":return"unmute"}return null};
BM=function(a,b,c,d){g.I.call(this);this.A=a;this.H=b;g.J(this,this.H);this.g=c;this.l=d;this.I=ks();this.C=Array.from(uL(this.A,"progress"));this.C.sort(function(a,b){return a.offsetMilliseconds-b.offsetMilliseconds});
this.B=0;this.o={};this.F={ay:.25,zy:.5,Ky:.75}};
DM=function(a){CM(a,"impression");CM(a,"start")};
Gda=function(a,b){b&&b.forEach(function(b){b.baseUrl&&EM(a,b.baseUrl,{})})};
GM=function(a,b,c){for(c=void 0===c?!1:c;a.B<a.C.length;){var d=FM(a,"progress"),e=a.C[a.B];if(e.offsetMilliseconds<=1E3*b||c)(e=e.baseUrl)&&EM(a,e,d),a.B++;else break}};
HM=function(a,b,c,d){d=void 0===d?!1:d;(b>=c*a.F.ay||d)&&CM(a,"first_quartile");(b>=c*a.F.zy||d)&&CM(a,"midpoint");(b>=c*a.F.Ky||d)&&CM(a,"third_quartile")};
IM=function(a,b){for(var c=FM(a,b),d=g.q(uL(a.A,b)),e=d.next();!e.done;e=d.next())(e=e.value.baseUrl)&&EM(a,e,c);a.o[b]=!0};
CM=function(a,b){a.o.hasOwnProperty(b)||IM(a,b)};
EM=function(a,b,c){for(var d=Kp.Bk(b),e={},f=mM(a.l),k=g.q(Object.keys(f)),l=k.next();!l.done;l=k.next())l=l.value,e[l]=f[l].toString();e=Object.assign(e,a.g);c&&((f=c.doubleVerifyViewability)&&(e.DV_VIEWABILITY=d?(0,window.encodeURIComponent)(f):f),(f=c.integralAdsViewability)&&(e.IAS_VIEWABILITY=d?(0,window.encodeURIComponent)(f):f),(f=c.googleViewability)&&(e.GOOGLE_VIEWABILITY=f),(f=c.moatInit)&&(e.MOAT_INIT=d?(0,window.encodeURIComponent)(f):f),(f=c.moatViewability)&&(e.MOAT_VIEWABILITY=d?(0,window.encodeURIComponent)(f):
f),(c=c.viewability)&&(e.VIEWABILITY=c));b=g.kp(b,e);"https:"==window.location.protocol&&(c=g.Ig(b),b="https"==c[1]?b:g.Dg("https",c[2],c[3],c[4],c[5],c[6],c[7]));c=void 0;(e=a.l.Y())&&e.oauthToken&&a.I&&ks(b)&&ls(b)&&(c={Authorization:"Bearer "+e.oauthToken});try{g.Ns(b,void 0,d,c)}catch(m){}};
FM=function(a,b){var c=a.H;var d=a.A;if(d.O()){var e=Fda(b);if(null==e)d={};else{var f;f=(f=c.g)&&f.ii?(f=f.ii())&&2==f.getPlayerType()?f.l?f.l.ia():null:null:null;c={opt_adElement:f,opt_fullscreen:c.g.isFullscreen()};d=Ho(e,d.L,c)}}else d={};return d?Object.assign({},d):{}};
JM=function(a,b,c,d){d=void 0===d?!1:d;g.R.call(this);this.g=a;this.l=new BM(b,new AM(this.g),c,this.g);g.J(this,this.l);this.A=vM();this.A.g.set(b.L,this);this.A.subscribe("b",this.Dv,this);this.A.subscribe("g",this.Ev,this);this.A.subscribe("h",this.Fv,this);this.A.subscribe("i",this.Gv,this);this.A.subscribe("j",this.Hv,this);this.A.subscribe("k",this.Iv,this);this.A.subscribe("o",this.Jv,this);this.K=b;this.I=[];this.macros=c;this.F=!1;if(a=d)a=g.W(this.g),g.FB(a)||a.g||g.EB(a)||g.T(a.experiments,
"disable_bulleit_adblocker_check")&&!g.ul?a=!0:(a=g.pd("video-ads"),a=null!=a&&"none"!=Bh(a,"display")),a=!a;this.L=a};
LM=function(a,b){$a(a.I,b);KM(a,b,1)};
Hda=function(a,b){var c=[];(0,g.F)(b,function(a){0<=g.Ma(this.I,function(b){return b.componentType==a.componentType})?c.push(a):g.Q(Error("Cannot find UX Component "+a.componentType+" to modify"),"WARNING")},a);
KM(a,c,2)};
MM=function(a){KM(a,a.I,3);a.I=[]};
KM=function(a,b,c){0!=b.length&&(b=(0,g.H)(b,function(a){return new kL(a,c,a.id)}),a.P("onAdUxUpdate",b))};
NM=function(a){return(a=a.g.Y(2))&&a.clientPlaybackNonce||""};
OM=function(a,b){jL.call(this,"action-companion",a,b)};
Ida=function(a){var b=a.renderer;var c=a.renderer;c=c.navigationEndpoint&&c.navigationEndpoint.urlEndpoint&&c.navigationEndpoint.urlEndpoint.url||"";var d=PM(b.bannerImage),e=PM(b.iconImage),f=b.headline&&b.headline.text||"",k=b.description&&b.description.text||"";a=a.renderer;a=(a=a.actionButton&&a.actionButton.buttonRenderer&&a.actionButton.buttonRenderer.text)?g.kD(a):"";return{target:c,bannerImageUrl:d,iconImageUrl:e,headline:f,descriptionText:k,actionTitle:a,impressionEndpoints:b.impressionCommands}};
PM=function(a){return a&&a.thumbnail&&a.thumbnail.thumbnails&&a.thumbnail.thumbnails.length?a.thumbnail.thumbnails[0].url||"":""};
QM=function(a,b,c){JM.call(this,a,b,c);this.o=null};
RM=function(a,b){var c=b.renderer,d=c.iconImage&&c.iconImage.thumbnail&&c.iconImage.thumbnail.thumbnails||null;d&&d.length&&g.qb(g.Gb(d[0].url))&&(d[0].url=a.profilePicture);(d=c.bannerImage&&c.bannerImage.thumbnail&&c.bannerImage.thumbnail.thumbnails||null)&&d.length&&g.qb(g.Gb(d[0].url))&&(d[0].url=a.channelBanner);c=c.headline;null!=c&&g.qb(g.Gb(c.text))&&(c.text=a.author)};
SM=function(a,b){jL.call(this,"ad-action-interstitial",a,b)};
TM=function(a,b,c){JM.call(this,a,b,c,!0);this.B=b;this.o=b.l.durationMilliseconds||0;this.za=null};
UM=function(a,b){b.SLOT_POS="1";jL.call(this,"backfill-mpu-companion",a,b)};
VM=function(a,b,c){JM.call(this,a,b,c)};
WM=function(a,b,c){JM.call(this,a,b,c)};
XM=function(a,b){jL.call(this,"invideo-overlay",a,b)};
YM=function(a,b,c){JM.call(this,a,b,c);this.o=b};
ZM=function(a){jL.call(this,"persisting-overlay",a)};
$M=function(a,b,c){JM.call(this,a,b,c);this.o=b};
aN=function(a,b){jL.call(this,"pla-shelf",a,b)};
bN=function(a,b,c){JM.call(this,a,b,c);this.o=b};
cN=function(a,b){jL.call(this,"shopping-companion",a,b)};
dN=function(a,b,c){JM.call(this,a,b,c)};
eN=function(a){jL.call(this,"survey",a);this.g=!1};
fN=function(a,b,c){JM.call(this,a,b,c,!0);this.B=b;this.o=null};
gN=function(a,b){jL.call(this,"survey-interstitial",a,b)};
hN=function(a,b,c){JM.call(this,a,b,c,!0);this.o=b};
iN=function(a){jL.call(this,"ad-text-interstitial",a)};
jN=function(a,b){JM.call(this,a,b,{});this.B=b;this.o=b.l.durationMilliseconds||0;this.za=null};
kN=function(a,b){a.za&&a.za.stop();MM(a);a.P(b)};
lN=function(){jL.call(this,"ad-attribution-bar");this.adPodPositionInfoString=null;this.adPodPosition=0;this.adPodLength=1;this.adBreakLengthSeconds=0;this.adBadgeText=null;this.adBreakRemainingLengthSeconds=0;this.adVideoId=null};
mN=function(a){a=void 0===a?null:a;jL.call(this,"ad-channel-thumbnail");this.channelIconThumbnailUrl=a};
nN=function(a){a=void 0===a?null:a;jL.call(this,"ad-title");this.videoTitle=a};
oN=function(a){a=void 0===a?null:a;jL.call(this,"advertiser-name");this.channelName=a};
pN=function(a){jL.call(this,"player-overlay",a)};
qN=function(a){jL.call(this,"skip-button",a)};
rN=function(a){jL.call(this,"visit-advertiser",a);var b={};var c=a.text;a=a.navigationEndpoint;null!=c&&null!=c.runs&&null!=a?(b.runs=[g.hc(c.runs[0])],b.runs[0].navigationEndpoint=a):(b={text:g.S("YTP_VISIT_ADVERTISERS_SITE")},a&&(b.navigationEndpoint=a),b={runs:[b]});this.visitAdvertiserLabel=b};
sN=function(a,b,c,d){JM.call(this,a,b,c,!0);this.o=b;this.H=d;this.B=new g.P(this.Lz,15E3,this);g.J(this,this.B);this.C=!1};
tN=function(a,b,c){return a&&b&&c?[new nN(a),new mN(c),new oN(b)]:(g.Q(Error("Channel metadata contains null for "+(a?b?"channel icon thumbnail.":"channel name.":"video title."))),[])};
Jda=function(a){var b=new lN;b.adBadgeText=g.S("YTP_AD_BADGE");var c=a.o.B;1<c.l&&(b.adPodPositionInfoString=g.S("YTP_AD_POD_POSITION",{AD_INDEX:String(c.g+1),ADS_COUNT:String(c.l)}));b.adBreakLengthSeconds=c.adBreakLengthSeconds;b.adBreakRemainingLengthSeconds=c.adBreakRemainingLengthSeconds;b.adPodPosition=c.g+1;b.adPodLength=c.l;if(a=a.o.F)b.adVideoId=a;return b};
wN=function(a){var b=a.o.A,c=b.playerOverlay&&b.playerOverlay.instreamAdPlayerOverlayRenderer;c||(c={});var d=g.W(a.g);if((g.FB(d)||g.EB(d))&&!c.skipOrPreviewRenderer){var e=1E3*a.g.Bc(2),f=0<e&&7050>=e;(0,window.isFinite)(e)&&33E3<e&&!a.o.isSkippable()&&!g.FB(d)&&g.Q(Error("Instream ad is skippable by length, but was was marked "+("nonskippable. adLengthMs:"+e+", IVAR: "+JSON.stringify(b))),"ERROR");d={};a.o.isSkippable()&&!f?d.skipAdRenderer=uN(a):d.adPreviewRenderer=vN(a,!1,f);c.skipOrPreviewRenderer=
d}c.skipOrPreviewRenderer&&g.dc(c.skipOrPreviewRenderer)&&g.Q(Error("IAPOR.skipOrPreview was filled, but empty. IVAR: "+JSON.stringify(b)),"ERROR");return c};
xN=function(a,b){a.B.stop();MM(a);zM(a.g,!0);a.P(b)};
uN=function(a){var b={preskipRenderer:{}};b.preskipRenderer.adPreviewRenderer=vN(a,!0,!1);b.skippableRenderer={};a=b.skippableRenderer;var c={message:{}};c.message.text=g.S("YTP_SKIP_AD");a.skipButtonRenderer=c;return b};
vN=function(a,b,c){var d=a.g.Y(1),e={};if(b||c){var f={},k={};c=c?g.S("YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"}):g.S("YTP_CAN_SKIP_AD_SOON",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"});k.text=c;k.isTemplated=!0;f.g=5;f.templatedAdText=k;e.templatedCountdown=f}else f={},k=g.S("YTP_AD_PREVIEW_NONSKIPPABLE",{NEW_LINE:"\n"}),f.text=k,f.isTemplated=!1,e.staticPreview=f;b&&(e.durationMilliseconds=5E3);e.thumbnail={};b=e.thumbnail;f={};f.url=UB(g.W(a.g),
d.videoId,"mqdefault.jpg");f.width=320;f.height=180;b.thumbnail={thumbnails:[f]};return e};
yN=function(a,b,c,d){var e=Object.assign({},{});e.FINAL=lM(vf("1"));e.SLOT_POS=lM(vf("0"));c=qM(c,pM(e));return b instanceof wL?(e={},e.SLOT_POS=lM(vf(b.B.g.toString())),c=qM(c,pM(e)),new sN(a,b,c,d)):b instanceof RL?new YM(a,b,c):b instanceof CL?new WM(a,b,c):b instanceof dM?new dN(a,b,c):b instanceof ZL?new fN(a,b,c):b instanceof TL?new bN(a,b,c):b instanceof zL?new VM(a,b,c):b instanceof VL?new TM(a,b,c):b instanceof AL?new $M(a,b,c):b instanceof yL?new QM(a,b,c):b instanceof aM?new jN(a,b):b instanceof
$L?new hN(a,b,c):null};
zN=function(){this.L=g.Tr("INNERTUBE_CLIENT_NAME",void 0);this.O=g.Tr("INNERTUBE_CLIENT_VERSION",void 0);this.H="AD_PLACEMENT_KIND_UNKNOWN";this.o=this.F=this.C=this.A=null;this.g="unknown_type";this.I=!0;this.K=this.l=this.B=!1};
AN=function(a){a.A=null;a.C=null;a.F=null;a.o=null;a.H="AD_PLACEMENT_KIND_UNKNOWN";a.g="unknown_type";a.B=!1;a.l=!1};
Kda=function(a){a.l=!1;a.K?$C("ad_to_video",["pbresume"]):$C("ad_to_ad",["apbs"])};
Lda=function(a){a.B&&!a.l&&(a.I=!1,a.l=!0,"ad_to_video"!=a.g&&g.RC("apbs",void 0,a.g))};
BN=function(a,b){for(var c=[a,a.A].filter(function(a){return null!=a}),d=g.q(c),e=d.next();!e.done;e=d.next())e.value.g=!0;
g.Jf(function(){g.OK(b.g,c,1);for(var a=g.q(c),d=a.next();!d.done;d=a.next())d=d.value,b.A["delete"](d),b.B["delete"](d)})};
CN=function(a,b,c,d,e){g.R.call(this);this.F=a;this.g=b;this.o=d;this.C=this.o.g instanceof tL?this.o.g:null;this.T=qM(e,pM(nM(d)));this.l=[];this.H=c;this.I=!1;this.L=(a=b.Y(1))&&a.pa||!1;this.O=0;this.U=!1};
Mda=function(a){a.l.forEach(function(a){return a.Xd()})};
DN=function(a){(a=a.baseUrl)&&g.Ns(a,void 0,Kp.Bk(a))};
EN=function(a,b,c){var d=a.H,e=a.g;a=a.o.wc().l;b=void 0===b?0:b;c=void 0===c?1:c;AN(d);var f=e.Y(1);e=e.Y(2);f&&(d.A=f.clientPlaybackNonce,d.F=f.videoId);e&&(d.C=e.clientPlaybackNonce,d.o=e.videoId);d.H=a;0>=c?AN(d):(d.I?d.g="video_to_ad":b<c?d.g="ad_to_ad":b==c&&(d.g="ad_to_video"),d.K=b+1==c,d.B=!0,d.B&&(g.SC("c",d.L,d.g),g.SC("cver",d.O,d.g),g.SC("yt_pt","html5",d.g),g.SC("yt_pre","2",d.g),g.SC("yt_abt",d.H,d.g),d.A&&g.SC("cpn",d.A,d.g),d.F&&g.SC("docid",d.F,d.g),d.C&&g.SC("ad_cpn",d.C,d.g),d.o&&
g.SC("ad_docid",d.o,d.g)))};
Nda=function(a){if(a.U)return function(a){a.wb(window.Infinity,!0)};
var b=Math.floor((0,g.G)()/1E3)-a.O;return function(a){a.wb(a.xa()+b,!0)}};
FN=function(a,b){a.l.forEach(function(a){if(a.F){var c=a.l;a=a.St();0<a&&(GM(c,b),HM(c,b,a))}})};
Oda=function(a){a.l.forEach(function(a){var b=a.g.isMuted();CM(a.l,b?"mute":"unmute")})};
Pda=function(a,b){a.l.forEach(function(a){CM(a.l,b?"fullscreen":"end_fullscreen")})};
HN=function(a,b,c,d,e){JM.call(this,b,d.g,e);this.U=c;this.H=d;this.o=d.g;this.O=a;this.B=this.C=null;a=this.H.wc();a.visible=!1;GN(this.O,a,this)};
Qda=function(a){return IN(a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer.getAdBreakUrl||"")};
IN=function(a){if(!a)return!1;a=Yg(a);if(!a)return!1;try{var b=(0,window.decodeURIComponent)(a)}catch(c){return g.Q(c),!1}return b?b.split("&").some(function(a){a=a.split("=");return 1<a.length&&"pat"==a[0]}):!1};
Rda=function(a){return a&&a.renderer&&a.renderer.invideoOverlayAdRenderer?!0:!1};
Sda=function(a){return a&&a.config&&a.config.adPlacementConfig&&"AD_PLACEMENT_KIND_START"==a.config.adPlacementConfig.kind&&a.renderer&&a.renderer.backfillMpuCompanionAdRenderer?!0:!1};
JN=function(a,b,c,d){g.R.call(this);this.l=a;this.A=b;this.g=c;this.B=qM(d,pM(nM(c)));this.o=!1;Tda(this)};
Uda=function(a){var b=null,c={isEmpty:!0,us:!1,Zl:[]};try{b=JSON.parse(a.response)}catch(d){return c}if(!b)return c;if((a=b)&&a.adThrottled)return c.us=!0,c;a=a.playerAds;if(!a||!a.length)return c;a=a.map(function(a){return a.adPlacementRenderer}).filter(function(a){return a&&null!=a.renderer});
if(0==a.length)return c;c.Zl=a;c.isEmpty=!1;return c};
Tda=function(a){[a.g.C,a.g.wc()].filter(function(a){return null!=a}).forEach(function(b){GN(a.l,b,a)})};
KN=function(a,b,c,d,e){CN.call(this,a,b,c,d,e);this.V=(this.A=d.g instanceof BL?d.g:null)?this.A.g.length:0;this.K=-1;this.B=null;this.A&&this.A.l&&(this.B=yN(b,this.A.l,e,a),g.J(this,this.B))};
LN=function(a){if(null!=a.A){a.K++;if(a.A.g.length){var b=a.A.g.shift();a.Xb(b);1==a.A.o&&a.A.g.length&&LN(a)}else a.Sd();EN(a,a.K,a.V)}};
Vda=function(a,b){b.forEach(function(b){b instanceof wL&&!(0<b.K.length)&&(b=xL(b),a.g.ko(b,2))})};
NN=function(a){MN=a&&a.data};
PN=function(a){ON=a&&a.data};
QN=function(){MN=null};
RN=function(a,b){g.R.call(this);var c=this;this.g=a;this.to=null;this.V=b;this.T=new sL(a,xM(a)?null:new lL);this.o=null;this.O=yf(function(){c.g.ga()||g.QK(c.g,"ad")});
this.l=null;this.B=new window.Map;this.A=new window.Set;this.H=[];this.F=this.K=null;this.ba=new tda(a);this.ea=new g.Rt(this);g.J(this,this.ea);this.C=new g.Rt(this);g.J(this,this.C);this.U=!1;this.L=null;this.I=g.FB(g.W(a))};
Wda=function(a){return a&&a.adPlacements?a.adPlacements.map(function(a){return a.adPlacementRenderer}).filter(function(a){return a&&null!=a.renderer}):[]};
Xda=function(a,b){return b.filter(function(b){return"AD_PLACEMENT_KIND_CUE_POINT_TRIGGERED"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind||null)?(a.K=b,!1):!0})};
Yda=function(a,b){return b.every(function(b){b=a.B.get(b);return null==b?(g.Q(Error("AdCueRange without a corresponding AdPlacement.")),!0):b instanceof JN?!1:b instanceof CN?!KL(b.o):!0})};
SN=function(a){var b=Zda(a);0<b.length?(Yda(a,b)&&a.O(),g.Jf(function(){if(!a.ga())for(var c=g.q(b),d=c.next();!d.done;d=c.next())a.uo(d.value)})):a.O()};
Zda=function(a){for(var b=[],c=g.q(a.A),d=c.next();!d.done;d=c.next())d=d.value,gL(d)&&b.push(d);c=g.q(b);for(d=c.next();!d.done;d=c.next())a.A["delete"](d.value);return b};
TN=function(a,b,c){c=void 0===c?null:c;c=void 0===c?null:c;var d=a.ba;var e=1E3*a.g.Bc(1);var f=a.g.Y(1).pa||!1;e=new eL(e,1E3*a.g.xa()||0,f);f=a.H.length;var k=c;f=void 0===f?0:f;k=void 0===k?null:k;c=[];var l=0;if(k){k=g.q(k);for(var m=k.next();!m.done;m=k.next()){m=m.value;var n=e,p=new eL(n.o,n.A,n.livestream),u=n.l;u&&(p.l=new lx(u.Pd,u.durationSecs,u.context));n.g&&(p.g=n.g);n=p;n.l=m;c.push(iM(b[0],f+l,d,n));l++}}else for(b=g.q(b),k=b.next();!k.done;k=b.next())c.push(iM(k.value,f+l,d,e)),l++;
a.H=a.H.concat(c);if(0!=c.length)for(d=pM(mM(a.g)),b=c.length-1;0<=b;b--)e=a,f=a.g,l=a.V,k=a.T,m=c[b],m.g instanceof BL?(e=new KN(e,f,new zN,m,d),GN(e.F,e.o.wc(),e)):m.g instanceof DL?new HN(e,f,k,m,d):""==m.l?(e=new CN(e,f,new zN,m,d),GN(e.F,e.o.wc(),e)):new JN(e,l,m,d)};
WN=function(a,b){if(b.zk())g.Le(a.o),a.o=b;else{if((b.C instanceof wL||b.C instanceof ZL)&&a.o&&a.o.wc().start<b.wc().start){var c=a.T;if(c.g)c.g&&qda(c.g);else{var d=c.l.Y(1);c.l.ka("updatekevlarcompanion",{contentVideoId:d&&d.videoId})}g.Le(a.o);a.o=null}b.rs()&&(a.l&&UN(a),a.l=b,KL(b.o)&&(a.C.M(a.g,"presentingplayerstatechange",a.wD),a.C.M(a.g,"internalAbandon",a.JE),a.C.M(a.g,"aduxclicked",a.QE),a.C.M(a.g,"progresssync",a.sI),a.C.M(a.g,"onVolumeChange",a.xD),a.C.M(a.g,"fullscreentoggled",a.vD),
g.pq(a.g.getRootNode(),["ad-showing","ad-interrupting"]),VN(a.g.app,2)))}};
XN=function(a,b){switch(b){case "control_play":wM(a.g)&&!a.l.I&&TJ(a.g.ii());break;case "control_pause":wM(a.g)&&!a.l.I&&FJ(a.g.ii())}};
UN=function(a,b){var c=!!a.l&&KL(a.l.o)&&wM(a.g);a.l&&YN(a,a.l);a.l=null;if(c&&(g.Tt(a.C),g.rq(a.g.getRootNode(),["ad-showing","ad-interrupting"]),g.LJ(g.X(a.g.app,2)),!a.U)){c=a.g;if(2==wK(c.app)){c=c.app;var d=g.X(c,2);d&&(d!=c.o?ZN(c,c.o):$N(c))}g.T(g.W(a.g).experiments,"allow_midrolls_on_watch_resume_in_bulleit")&&(a.I||g.V(g.yK(a.g),4)&&a.g.Vc());b&&b(a.g)}a.O()};
GN=function(a,b,c){if(b instanceof fL){if("AD_PLACEMENT_KIND_MILLISECONDS"==b.l&&g.V(g.yK(a.g),64)){var d=g.W(a.g);if(a.I||!g.T(d.experiments,"allow_midrolls_on_watch_resume_in_bulleit"))d=1E3*a.g.xa()||0,d!=b.start&&b.contains(d)&&(b.g=!0)}a.B.has(b)?g.Q(Error(b.toString()+" has already been seen")):(a.A.add(b),a.B.set(b,c),"AD_PLACEMENT_KIND_START"!=b.l&&g.MK(a.g,[b],1))}else g.Q(Error("Should use AdCueRange instead of CueRange"))};
YN=function(a,b){for(var c=a.B,d=g.q(c),e=d.next();!e.done;e=d.next()){e=g.q(e.value);var f=e.next().value;if(e.next().value==b){c["delete"](f);break}}g.Le(b)};
aO=function(a){g.I.call(this);this.F=a};
bO=function(a,b){if(!a.F)throw Error("This does not support the append operation");a.Rh(b.ia())};
cO=function(a){aO.call(this,!0);this.g=a};
dO=function(a,b){function c(a){return{toString:a}}
var d={};d.CPN=c(function(){var b=a.Y();return b&&b.clientPlaybackNonce||null});
d.AD_CPN=c(function(){return b.to});
d.AD_MT=c(function(){return Math.round(Math.max(0,1E3*a.xa(2))).toString()});
d.MT=c(function(){return Math.round(Math.max(0,1E3*a.xa(1))).toString()});
d.P_H=c(function(){return a.Jg().height.toString()});
d.PV_H=d.P_H;d.P_W=c(function(){return a.Jg().width.toString()});
d.PV_W=d.P_W;d.CONN="0";d.WT=c(function(){return Date.now().toString()});
d.LACT=c(function(){return g.Lu().toString()});
d.VIS=c(function(){return a.Ye().toString()});
d.VOL=c(function(){return a.Nb().toString()});
return d};
Y=function(a,b,c,d,e){e=void 0===e?null:e;g.ww.call(this,c);this.g=a;this.l=b;this.macros={};this.componentType=d;this.H=null;this.X=e;this.K=null;this.da=new cO(this.element);g.J(this,this.da);this.M(this.element,"click",this.onClick)};
eO=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.Q(Error("Got null or undefined adText object"),"WARNING"),"";var c=g.Gb(a.text);if(!a.isTemplated)return c;if(null==b)return g.Q(Error("Missing required parameters for a templated message"),"WARNING"),c;for(var d=g.q(Object.entries(b)),e=d.next();!e.done;e=d.next()){var f=g.q(e.value);e=f.next().value;f=f.next().value;c=c.replace("{"+e+"}",f)}return c};
fO=function(a){a=void 0===a?null:a;return null!=a&&(a=a.thumbnail,null!=a&&null!=a.thumbnails&&0!=a.thumbnails.length&&null!=a.thumbnails[0].url)?g.Gb(a.thumbnails[0].url):""};
iO=function(a,b,c){var d=a.g;g.W(d).C&&g.gO(d.app.L,b,a);a=a.g;g.W(a).C&&g.hO(a.app.L,b,c)};
jO=function(a,b,c){ZK(a.g,b)&&g.YK(a.g,b,c)};
kO=function(a){return a&&a.thumbnails&&0!=(a.thumbnails||null).length&&a.thumbnails[0].url?g.Gb(a.thumbnails[0].url):""};
lO=function(a,b,c){Y.call(this,a,b,{D:"img",J:"ytp-ad-image"},"ad-image",void 0===c?null:c);this.hide()};
mO=function(a,b,c){Y.call(this,a,b,{D:"div",J:"ytp-ad-text"},"ad-text",void 0===c?null:c);this.o=null;this.hide()};
g.oO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-cast-desktop-on"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
pO=function(){return{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.qO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-chevron-back"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},G:[{D:"path",N:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.rO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-chevron-forward"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},G:[{D:"path",N:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
sO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-clip-clear"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",N:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{D:"path",N:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
tO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-clip-end"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
uO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-clip-start"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.vO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
wO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-closed-captioning"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z",
fill:"#fff"}}]}};
xO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-forward-five-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.7,.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.5,.3 C 18.3,22 18.1,22 17.9,22 17.7,22 17.5,22 17.4,21.9 17.3,21.8 17.1,21.8 16.9,21.7 16.7,21.6 16.7,21.5 16.6,21.3 16.5,21.1 16.5,21 16.5,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.4,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.6 z"}}]}};
yO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-link"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
zO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-next"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.AO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-notifications-active"]}:{D:"svg",N:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},G:[{D:"path",N:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
BO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-pause"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
CO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-play"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
DO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-prev"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
EO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-replay"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
FO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-rewind-five-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m -1.3,8.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.4,.3 C 18.5,22 18.2,22 18,22 17.8,22 17.6,22 17.5,21.9 17.4,21.8 17.2,21.8 17,21.7 16.8,21.6 16.8,21.5 16.7,21.3 16.6,21.1 16.6,21 16.6,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.5,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.7 z"}}]}};
g.GO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-settings"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
HO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-stop"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
IO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-volume-high"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
JO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-volume-low"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
KO=function(){return g.nO?{D:"div",W:["ytp-icon","ytp-icon-volume-muted"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
LO=function(a){if(!a)return null;switch(a.iconType){case "OPEN_IN_NEW":return{D:"svg",N:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},G:[{D:"path",N:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",N:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]};case "CHECK_BOX":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-check-box"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},
G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"#d4d4d4"}}]};case "CHECK_BOX_OUTLINE_BLANK":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-check-box-outline-blank"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",fill:"#d4d4d4"}},
{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}}]};case "CLOSE":return g.vO();case "INFO_OUTLINE":return{D:"svg",N:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},G:[{D:"path",N:{d:"M0 0h48v48H0z",fill:"none"}},{D:"path",N:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]};case "REMOVE_CIRCLE":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-remove-circle"]}:
{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 24 24",width:"100%"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z",fill:"#757575"}}]};case "SKIP_NEXT":return zO();case "LIKE":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-like"]}:{D:"svg",N:{viewBox:"0 0 24 24"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",
fill:"#fff"}}]};case "DISLIKE":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-dislike"]}:{D:"svg",N:{viewBox:"0 0 24 24"},G:[{D:"path",N:{d:"M0 0h24v24H0z",fill:"none"}},{D:"path",N:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]};default:return g.Q(Error("Unexpected icon "+a),"WARNING"),null}};
MO=function(a,b,c,d,e){c=void 0===c?[]:c;e=void 0===e?!1:e;Y.call(this,a,b,{D:"button",W:["ytp-ad-button"].concat(c)},void 0===d?"button":d);this.B=this.A=this.C=null;this.F=e;this.hide()};
NO=function(a){var b=null;null!=a.B&&(b=[a.B.serviceEndpoint,a.B.navigationEndpoint].filter(function(a){return null!=a}));
return b||[]};
OO=function(a,b){Y.call(this,a,b,{D:"div",J:"iv-website-companion",G:[{D:"div",J:"iv-website-companion-block",G:[{D:"div",J:"iv-website-companion-icon"},{D:"div",J:"iv-website-companion-text",G:[{D:"div",J:"iv-website-companion-desc",G:[{D:"span",W:["yt-badge","yt-badge-ad"],G:["{{adBadgeText}}"]}]}]}]}]},"action-companion");this.V=this.Z["iv-website-companion"];this.B=new lO(this.g,this.l,"iv-website-companion-banner");g.J(this,this.B);this.B.ca(this.V,0);this.L=new lO(this.g,this.l);g.J(this,this.B);
this.L.ca(this.Z["iv-website-companion-icon"]);this.F=new mO(this.g,this.l,"iv-website-companion-header");g.J(this,this.F);this.F.ca(this.Z["iv-website-companion-text"],0);this.C=new mO(this.g,this.l,"iv-website-companion-domain");g.J(this,this.C);this.C.ca(this.Z["iv-website-companion-desc"]);this.A=new MO(this.g,this.l,["iv-website-companion-action","yt-uix-button-size-default","yt-uix-button-primary"]);g.J(this,this.A);this.A.ca(this.Z["iv-website-companion-block"]);this.I=null;this.O=[];this.ea=
new g.Rt;g.J(this,this.ea);this.aa=new lL;this.o=null;this.hide()};
PO=function(){g.I.call(this);this.A=this.l=this.B=this.g=this.C=this.o=null};
$da=function(a,b){return QO(a).then(function(a){a.promotionShelfShow(b)})};
aea=function(a){QO(a).then(function(a){a.promotionShelfClear()})};
cea=function(a){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div";return QO(a).then(function(b){return bea(a,b)}).then(function(b){b();
return RO(a)})};
dea=function(a){return QO(a).then(function(b){b.loadAfc();return RO(a)})};
SO=function(){return g.z("yt.www.watch.ads")};
TO=function(){return g.z("window.google_show_companion_ad")};
QO=function(a){if(a.ga())throw Error("Object is disposed");if(!a.o){var b=SO();a.o=b?Uf(b):(new g.Pf(function(b){a.C=g.ju("watchAdsInit",b)})).then(SO)}return a.o};
bea=function(a,b){if(a.ga())throw Error("Object is disposed");if(!a.g){var c=TO();eea(c,b.getGlobals)?a.g=Uf(c):a.g=(new g.Pf(function(b){a.B=g.ju("showCompanionAdLoaded",b)})).then(TO)}return a.g};
RO=function(a){if(a.ga())throw Error("Object is disposed");a.l||(UO()?Uf():a.l=new g.Pf(function(b,c){a.A=new g.P(function(){UO()?b():c()},2E3,a);
a.A.start()}));
return a.l};
eea=function(a,b){if(!g.Ba(a)||!g.Ba(b))return!1;var c=b();return!(!c||!c.length)};
UO=function(){var a=g.md("google_companion_ad_div");return a?(a=g.Nd(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1};
VO=function(a,b){Y.call(this,a,b,{D:"div"},"backfill-mpu-companion");this.A=new PO;g.J(this,this.A);this.o=null};
WO=function(a,b,c,d,e){Y.call(this,a,b,c,d);this.o=e;g.J(this,this.o);this.V=this.C=-1};
XO=function(a){a.o&&-1===a.C&&(a.C=a.o.subscribe("q",a.Wi,a),a.V=a.o.subscribe("p",a.pl,a),a.Wi())};
YO=function(a){null!=a.o&&-1!==a.C&&(a.o.Dc(a.C),a.o.Dc(a.V),a.V=-1,a.C=-1)};
ZO=function(a,b,c){WO.call(this,a,b,{D:"div",J:"ytp-ad-timed-pie-countdown-container",G:[{D:"svg",J:"ytp-ad-timed-pie-countdown",N:{viewBox:"0 0 20 20"},G:[{D:"circle",J:"ytp-ad-timed-pie-countdown-inner",N:{r:"5",cx:"10",cy:"10"}},{D:"circle",J:"ytp-ad-timed-pie-countdown-outer",N:{r:"10",cx:"10",cy:"10"}}]}]},"timed-pie-countdown",c);this.B=this.Z["ytp-ad-timed-pie-countdown-inner"];this.A=Math.ceil(10*3.14);this.hide()};
$O=function(a,b,c){c=void 0===c?!0:c;g.R.call(this);this.B=b;this.C=new g.Rt(this);g.J(this,this.C);this.l=a;this.za=new g.mg(100);g.J(this,this.za);this.C.M(this.za,"tick",this.tE);this.A={seekableStart:0,seekableEnd:a/1E3,current:0};this.o=!1;this.g=0;c&&this.start()};
aP=function(a,b){Y.call(this,a,b,{D:"div",J:"ytp-ad-action-interstitial",G:[{D:"div",J:"ytp-ad-action-interstitial-background"},{D:"div",J:"ytp-ad-action-interstitial-slot",G:[{D:"div",J:"ytp-ad-action-interstitial-card",G:[{D:"div",J:"ytp-ad-action-interstitial-image-container"},{D:"div",J:"ytp-ad-action-interstitial-headline-container"},{D:"div",J:"ytp-ad-action-interstitial-description-container"},{D:"div",J:"ytp-ad-action-interstitial-action-button-container"}]}]}]},"ad-action-interstitial");
this.aa=this.Z["ytp-ad-action-interstitial-image-container"];this.B=new lO(this.g,this.l,"ytp-ad-action-interstitial-image");g.J(this,this.B);this.B.ca(this.aa);this.V=this.Z["ytp-ad-action-interstitial-headline-container"];this.F=new mO(this.g,this.l,"ytp-ad-action-interstitial-headline");g.J(this,this.F);this.F.ca(this.V);this.O=this.Z["ytp-ad-action-interstitial-description-container"];this.C=new mO(this.g,this.l,"ytp-ad-action-interstitial-description");g.J(this,this.C);this.C.ca(this.O);this.ha=
this.Z["ytp-ad-action-interstitial-background"];this.L=this.Z["ytp-ad-action-interstitial-action-button-container"];this.A=this.o=null;this.ea=new g.Rt;g.J(this,this.ea);this.I=null;this.hide()};
bP=function(a){var b=g.pd("html5-video-player");b&&g.O(b,"ytp-ad-display-override",a)};
cP=function(a,b){Y.call(this,a,b,{D:"div",J:"ytp-ad-text-interstitial"},"ad-text-interstitial");this.A=this.Z["ytp-ad-text-interstitial"];this.o=new mO(this.g,this.l,"ytp-ad-text-interstitial-message");g.J(this,this.o);this.o.ca(this.A);this.hide()};
dP=function(a){var b=g.pd("html5-video-player");b&&g.O(b,"ytp-ad-display-override",a)};
fP=function(a,b){Y.call(this,a,b,{D:"div",J:"ytp-ad-overlay-slot",G:[{D:"div",J:"ytp-ad-overlay-container"}]},"invideo-overlay");this.I=[];this.o=this.L=null;var c=this.Z["ytp-ad-overlay-container"];this.F=new eP(c,"ytp-overlay-ad-dimmed");g.J(this,this.F);this.M(c,"mouseover",this.F.MG,this.F);this.M(c,"mouseout",this.F.JG,this.F);var d=new g.ww({D:"div",J:"ytp-ad-text-overlay",G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.vO()]}]},{D:"div",J:"ytp-ad-overlay-title",
G:["{{title}}"]},{D:"div",J:"ytp-ad-overlay-desc",G:["{{description}}"]},{D:"div",J:"ytp-ad-overlay-link",G:["{{displayUrl}}"]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-title"],"click",g.B(this.Ri,d.element));this.M(d.Z["ytp-ad-overlay-link"],"click",g.B(this.Ri,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.Io);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.So);d.hide();this.C=d;g.J(this,this.C);this.C.ca(c);d=new g.ww({D:"div",
W:["ytp-ad-text-overlay","ytp-ad-enhanced-overlay"],G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.vO()]}]},{D:"div",J:"ytp-ad-overlay-text-image",G:[{D:"img",N:{src:"{{imageUrl}}"}}]},{D:"div",J:"ytp-ad-overlay-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-overlay-desc",G:["{{description}}"]},{D:"div",J:"ytp-ad-overlay-link",G:["{{displayUrl}}"]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-title"],"click",g.B(this.Ri,
d.element));this.M(d.Z["ytp-ad-overlay-link"],"click",g.B(this.Ri,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.Io);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.So);this.M(d.Z["ytp-ad-overlay-text-image"],"click",this.bI);d.hide();this.A=d;g.J(this,this.A);this.A.ca(c);d=new g.ww({D:"div",J:"ytp-ad-image-overlay",G:[{D:"div",J:"ytp-ad-close-container",G:[{D:"button",J:"ytp-ad-close-button",G:[g.vO()]}]},{D:"div",J:"ytp-ad-overlay-image",G:[{D:"img",N:{src:"{{imageUrl}}",width:"{{width}}",
height:"{{height}}"}}]},{D:"div",J:"ytp-ad-overlay-attribution",G:["{{attribution}}"]}]});this.M(d.Z["ytp-ad-overlay-image"],"click",g.B(this.Ri,d.element));this.M(d.Z["ytp-ad-close-container"],"click",this.Io);this.M(d.Z["ytp-ad-overlay-attribution"],"click",this.So);d.hide();this.B=d;g.J(this,this.B);this.B.ca(c);this.hide()};
gP=function(a,b){g.Uh(b.Z["ytp-ad-overlay-attribution"],null!=a.o.attributionText);b.updateValue("attribution",eO(a.o.attributionText))};
hP=function(a,b){var c=a.g.getRootNode();g.O(c,"ytp-ad-overlay-open",b);g.O(c,"ytp-ad-overlay-closed",!b)};
eP=function(a,b){g.I.call(this);this.B=a;this.l=!1;this.A=b;this.C=!1;this.g=new g.P(this.tq,45E3,this);g.J(this,this.g);this.o=new g.P(this.tq,6E3,this);g.J(this,this.o)};
g.iP=function(a,b,c,d){g.I.call(this);this.l=a;c||a.hide();this.B=null==d?b:d;this.g=this.A=null;this.o=new g.P(this.Ll,0,this);g.J(this,this.o)};
jP=function(a,b){var c=a.l.element;b?c.setAttribute("aria-hidden",!0):c.removeAttribute("aria-hidden")};
kP=function(a,b,c){WO.call(this,a,b,{D:"div",J:"ytp-ad-preview-slot"},"ad-preview",c);this.aa=-1;this.B=new g.ww({D:"span",J:"ytp-ad-preview-container"});g.J(this,this.B);this.A=new mO(this.g,this.l,"ytp-ad-preview-text");g.J(this,this.A);this.A.ca(this.B.element);this.I=new g.ww({D:"span",J:"ytp-ad-preview-image"});g.J(this,this.I);this.F=new lO(this.g,this.l);g.J(this,this.F);this.F.ca(this.I.element);this.I.ca(this.B.element);this.B.ca(this.element);this.O=new g.iP(this.B,400,!1,100);g.J(this,
this.O);this.L=0;this.hide()};
lP=function(a){a.O.hide(function(){return a.hide()})};
mP=function(a,b,c,d){Y.call(this,a,b,{D:"div",J:"ytp-ad-skip-button-slot"},(void 0===d?0:d)?"persisting-skip-button":"skip-button");this.A=null;this.I=!1;this.O=c;this.F=!1;this.B=new g.ww({D:"span",J:"ytp-ad-skip-button-container"});g.J(this,this.B);this.B.ca(this.element);this.o=this.C=null;this.L=new g.iP(this.B,500,!1,100);g.J(this,this.L);this.hide()};
nP=function(a,b,c,d,e){e=void 0===e?!1:e;WO.call(this,a,b,{D:"div",J:"ytp-ad-skip-ad-slot"},"skip-ad",c);this.F=!1;this.I=0;this.B=this.A=null;this.L=e;this.O=d;this.hide()};
oP=function(a,b){if(!a.F)if(a.F=!0,a.A&&(b?lP(a.A):a.A.hide()),b){var c=a.B;c.L.show();c.show()}else a.B.show()};
pP=function(a,b,c,d){Y.call(this,a,b,{D:"div",J:"ytp-ad-persisting-overlay",G:[{D:"div",J:"ytp-ad-persisting-overlay-skip"}]},"persisting-overlay");this.B=this.Z["ytp-ad-persisting-overlay-skip"];this.o=c;g.J(this,this.o);this.A=d;this.hide()};
g.qP=function(a){var b=Math.abs(Math.floor(a)),c=Math.floor(b/86400),d=Math.floor(b%86400/3600),e=Math.floor(b%3600/60);b=Math.floor(b%60);var f="";0<c&&(f+=c+":",10>d&&(f+="0"));if(0<c||0<d)f+=d+":",10>e&&(f+="0");f+=e+":";10>b&&(f+="0");f+=b;return 0<=a?f:"-"+f};
g.rP=function(a){return(!g.va(a.button)||0==a.button)&&!a.shiftKey&&!a.altKey&&!a.metaKey&&!a.ctrlKey};
sP=function(a,b,c){WO.call(this,a,b,{D:"span",J:"ytp-ad-duration-remaining"},"ad-duration-remaining",c);this.A=null;this.hide()};
tP=function(a,b){Y.call(this,a,b,{D:"div",J:"ytp-ad-feedback-dialog-background",G:[{D:"div",J:"ytp-ad-feedback-dialog-container",G:[{D:"div",J:"ytp-ad-feedback-dialog-form",G:[{D:"div",J:"ytp-ad-feedback-dialog-title",G:[{D:"span",G:["{{title}}"]}]},{D:"span",J:"ytp-ad-info-dialog-feedback-options-title",G:["{{reasonsTitle}}"]},{D:"div",J:"ytp-ad-info-dialog-feedback-options"},{D:"div",J:"ytp-ad-feedback-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-feedback-dialog-cancel-button",G:["{{cancelLabel}}"]},
{D:"button",J:"ytp-ad-feedback-dialog-confirm-button",G:["{{confirmLabel}}"]}]}]}]}]},"ad-info-dialog");this.B=[];this.o=null;this.C=this.Z["ytp-ad-feedback-dialog-cancel-button"];this.F=this.Z["ytp-ad-feedback-dialog-confirm-button"];this.I=this.Z["ytp-ad-info-dialog-feedback-options"];this.L=this.Z["ytp-ad-feedback-dialog-title"];this.A=null;this.hide()};
uP=function(a,b){this.l=b;this.g=new g.ww({D:"label",J:"ytp-ad-feedback-dialog-reason-label",G:[{D:"input",J:"ytp-ad-feedback-dialog-reason-input",N:{type:"radio",name:"feedback-reason-group"}},{D:"span",J:"ytp-ad-feedback-dialog-reason-text",G:[g.kD(a)]}]});this.o=this.g.Z["ytp-ad-feedback-dialog-reason-input"]};
vP=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?"confirm-dialog":d;Y.call(this,a,b,{D:"div",W:["ytp-ad-confirm-dialog-background"],G:[{D:"div",J:"ytp-ad-confirm-dialog-container",G:[{D:"div",W:["ytp-ad-confirm-dialog"].concat(c),G:[{D:"div",J:"ytp-ad-confirm-dialog-title",G:["{{title}}"]},{D:"div",J:"ytp-ad-confirm-dialog-messages"},{D:"div",J:"ytp-ad-confirm-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-confirm-dialog-cancel-button",G:["{{cancelLabel}}"]},{D:"button",J:"ytp-ad-confirm-dialog-confirm-button",
G:["{{confirmLabel}}"]}]}]}]},{D:"button",W:["ytp-ad-confirm-dialog-close-overlay-button","ytp-ad-button","ytp-ad-button-link"],G:[{D:"span",J:"ytp-ad-button-icon",G:[g.vO()]}]}]},d);this.A=this.Z["ytp-ad-confirm-dialog-close-overlay-button"];this.B=this.Z["ytp-ad-confirm-dialog-cancel-button"];this.F=this.Z["ytp-ad-confirm-dialog-confirm-button"];this.C=this.Z["ytp-ad-confirm-dialog-messages"];this.ea=new g.Rt;g.J(this,this.ea);this.o=null;this.hide()};
fea=function(a,b){if(b.title){var c=g.kD(b.title);a.updateValue("title",c)}if(b.dialogMessages){c=g.q(b.dialogMessages);for(var d=c.next();!d.done;d=c.next())d=g.jD(d.value),a.C.appendChild(d)}b.cancelLabel&&(c=g.kD(b.cancelLabel),a.updateValue("cancelLabel",c),a.ea.M(a.B,"click",function(b){return a.Uo(b)}));
b.confirmLabel&&(c=g.kD(b.confirmLabel),a.updateValue("confirmLabel",c),a.ea.M(a.F,"click",function(b){return a.Wo(b)}));
a.ea.M(a.A,"click",function(b){return a.Vo(b)})};
wP=function(a,b){vP.call(this,a,b,[],"ad-mute-confirm-dialog")};
xP=function(a,b,c){Y.call(this,a,b,{D:"div",J:"ytp-ad-info-dialog-background",G:[{D:"div",J:"ytp-ad-info-dialog-container",G:[{D:"div",J:"ytp-ad-info-dialog-form",G:[{D:"div",J:"ytp-ad-info-dialog-title",G:["{{title}}"]},{D:"ul",J:"ytp-ad-info-dialog-ad-reasons"},{D:"div",J:"ytp-ad-info-dialog-message"},{D:"div",J:"ytp-ad-info-dialog-mute-container"},{D:"div",J:"ytp-ad-info-dialog-confirm-container",G:[{D:"button",J:"ytp-ad-info-dialog-confirm-button",G:["{{confirmLabel}}"]}]}]}]}]},"ad-info-dialog");
this.o=this.B=null;this.L=this.Z["ytp-ad-info-dialog-confirm-button"];this.aa=this.Z["ytp-ad-info-dialog-mute-container"];this.V=this.Z["ytp-ad-info-dialog-message"];this.I=this.Z["ytp-ad-info-dialog-ad-reasons"];this.C=this.A=null;this.O=c;this.F=null;this.hide()};
yP=function(a,b,c){MO.call(this,a,b,["ytp-ad-info-icon-button"],"ad-info-icon-button");this.o=c;g.J(this,this.o);this.hide()};
zP=function(a,b,c){Y.call(this,a,b,{D:"span",J:"ytp-ad-info-overlay"},"ad-info-overlay");this.o=this.B=this.A=null;this.C=c;this.hide()};
AP=function(a,b,c,d){c=void 0===c?[]:c;d=void 0===d?"toggle-button":d;var e=iL("ytp-ad-toggle-button-input");Y.call(this,a,b,{D:"div",W:["ytp-ad-toggle-button"].concat(c),G:[{D:"label",J:"ytp-ad-toggle-button-label",N:{"for":e},G:[{D:"span",J:"ytp-ad-toggle-button-icon",G:[{D:"span",J:"ytp-ad-toggle-button-untoggled-icon",G:["{{untoggledIconTemplateSpec}}"]},{D:"span",J:"ytp-ad-toggle-button-toggled-icon",G:["{{toggledIconTemplateSpec}}"]}]},{D:"input",J:"ytp-ad-toggle-button-input",N:{id:e,type:"checkbox"}},
{D:"span",J:"ytp-ad-toggle-button-text",G:["{{buttonText}}"]},{D:"span",J:"ytp-ad-toggle-button-tooltip",G:["{{tooltipText}}"]}]}]},d);this.B=this.Z["ytp-ad-toggle-button"];this.o=this.Z["ytp-ad-toggle-button-input"];this.O=this.Z["ytp-ad-toggle-button-icon"];this.F=this.Z["ytp-ad-toggle-button-untoggled-icon"];this.C=this.Z["ytp-ad-toggle-button-toggled-icon"];this.L=this.Z["ytp-ad-toggle-button-text"];this.A=null;this.I=!1;this.hide()};
BP=function(a){a.I&&(a.isToggled()?(g.Uh(a.F,!1),g.Uh(a.C,!0)):(g.Uh(a.F,!0),g.Uh(a.C,!1)))};
gea=function(a,b){var c=null;a.A&&(c=(b?[a.A.defaultServiceEndpoint,a.A.defaultNavigationEndpoint]:[a.A.toggledServiceEndpoint]).filter(function(a){return null!=a}));
return c||[]};
CP=function(a,b,c){Y.call(this,a,b,{D:"div",J:"ytp-ad-instream-user-sentiment-container"},"instream-user-sentiment",void 0===c?null:c);this.o=null;this.B=new AP(this.g,this.l,["ytp-ad-instream-user-sentiment-like-button"]);g.J(this,this.B);this.B.ca(this.element);this.A=new AP(this.g,this.l,["ytp-ad-instream-user-sentiment-dislike-button"]);g.J(this,this.A);this.A.ca(this.element);this.C=new g.iP(this,400,!1,500);g.J(this,this.C);this.hide()};
hea=function(a){a.C.hide(function(){return a.hide()})};
DP=function(a,b){Y.call(this,a,b,{D:"span",J:"ytp-ad-simple-ad-badge"},"simple-ad-badge");this.hide()};
EP=function(a,b){MO.call(this,a,b,["ytp-ad-visit-advertiser-button"],"visit-advertiser")};
FP=function(a,b){this.l=a;this.g=b};
GP=function(a,b){return a.l+b*a.getLength()};
HP=function(a,b,c){if(!a.getLength())return null!=c?c:window.Infinity;a=(b-a.l)/a.getLength();return g.$c(a,0,1)};
IP=function(a,b){g.ww.call(this,{D:"div",J:"ytp-ad-persistent-progress-bar-container",G:[{D:"div",J:"ytp-ad-persistent-progress-bar"}]});this.o=a;this.l=b;g.J(this,this.l);this.C=this.Z["ytp-ad-persistent-progress-bar"];this.g=-1;this.M(a,"presentingplayerstatechange",this.B);this.hide();this.B()};
JP=function(a,b,c,d){Y.call(this,a,b,{D:"div",J:"ytp-ad-player-overlay",G:[{D:"div",J:"ytp-ad-player-overlay-instream-info"},{D:"div",J:"ytp-ad-player-overlay-skip-or-preview"},{D:"div",J:"ytp-ad-player-overlay-progress-bar"},{D:"div",J:"ytp-ad-player-overlay-instream-user-sentiment"}]},"player-overlay");this.A=this.Z["ytp-ad-player-overlay-instream-info"];this.B=this.Z["ytp-ad-player-overlay-skip-or-preview"];this.I=this.Z["ytp-ad-player-overlay-progress-bar"];this.C=this.Z["ytp-ad-player-overlay-instream-user-sentiment"];
this.o=c;g.J(this,this.o);this.F=d;this.hide()};
KP=function(a,b){aO.call(this,a);this.gc=b};
LP=function(a,b){g.I.call(this);this.Gb=a;this.dm=b;this.gc=new g.R;g.J(this,this.gc);this.view=this.Rj();g.J(this,this.view);this.l=null;this.g=[];this.macros={};this.A=!1;this.hide()};
MP=function(a){for(var b={},c=g.q(Object.entries(dO(a.Gb,a.dm))),d=c.next();!d.done;d=c.next()){var e=g.q(d.value);d=e.next().value;e=e.next().value;b[d]=e.toString()}Object.assign(b,a.macros);return b};
NP=function(){g.U.call(this,{D:"div",J:"ad-carousel",G:[{D:"div",J:"ad-carousel-clip",G:[{D:"ul",W:["ad-carousel-list","ad-carousel-list-animation"]}]}]});var a=this.Z["ad-carousel"];this.o=new g.U({D:"button",W:["ad-carousel-nav-button","ad-carousel-nav-prev"],N:{type:"button",onclick:"return false;"},G:[{D:"span",W:["ad-carousel-prev-icon","yt-uix-tooltip","yt-sprite"],N:{"data-tooltip-text":"Prev",title:"Prev"}}]});g.J(this,this.o);this.o.fa("click",this.C,this);this.o.ca(a);this.l=new g.U({D:"button",
W:["ad-carousel-nav-button","ad-carousel-nav-next"],N:{type:"button",onclick:"return false;"},G:[{D:"span",W:["ad-carousel-next-icon","yt-uix-tooltip","yt-sprite"],N:{"data-tooltip-text":"Next",title:"Next"}}]});g.J(this,this.l);this.l.fa("click",this.B,this);this.l.ca(a);this.A=this.Z["ad-carousel-list"];this.g=0;this.Ba=[]};
PP=function(a){a.A&&g.wh(a.A,"left",(2>a.Ba.length?0:-a.g*a.Ba[1].element.clientWidth)+"px");g.vw(a.o,0<a.g);g.vw(a.l,a.g<a.Ba.length-OP(a))};
OP=function(a){return 2>a.Ba.length?1:Math.round((a.element.clientWidth-a.Ba[0].element.clientWidth)/a.Ba[1].element.clientWidth)+1};
QP=function(a){KP.call(this,!0,a);this.Zc=new NP};
RP=function(a){KP.call(this,!1,a);this.l=new g.U({D:"div",J:"iv-btp-card",G:[{D:"a",J:"iv-btp-card-content",G:[{D:"div",G:["{{cards}}"]}]}]});g.J(this,this.l);a={D:"div",J:"iv-btp-card-merchant",G:[{D:"span",J:"iv-btp-card-merchant-text",G:["{{merchant}}"]}]};this.A=new g.pw({D:"div",W:["iv-btp-small-card","yt-uix-hovercard-target"],N:{"data-position":"bottomright","data-orientation":"vertical"},G:[{D:"div",W:["iv-btp-card-image","yt-uix-hovercard-anchor"],G:["{{image}}"]},{D:"div",J:"iv-btp-card-info",
G:[{D:"span",J:"iv-btp-card-action",G:["{{price}}"]},a]},{D:"div",W:["yt-uix-hovercard-content","iv-btp-hovercard"],G:["{{hovercard}}"]}]});g.J(this,this.A);this.g=new g.pw({D:"div",J:"iv-btp-large-card",G:[{D:"div",J:"iv-btp-card-image",G:[{D:"span"},{D:"div",J:"iv-btp-card-image-aligned",G:["{{image}}"]}]},{D:"div",J:"iv-btp-card-info",G:[{D:"div",J:"iv-btp-card-text-box",G:[{D:"div",J:"iv-btp-card-text-valign",G:[{D:"div",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-btp-card-headline"],G:["{{headline}}"]}]}]},
{D:"span",J:"iv-btp-card-action",G:["{{price}}"]},a,{D:"div",G:["{{review}}"]}]}]});g.J(this,this.g);this.o=new g.pw({D:"div",J:"iv-btp-hovercard-text-box",G:[{D:"a",G:[{D:"div",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-btp-hovercard-headline"],G:["{{headline}}"]}]},{D:"div",J:"iv-btp-hovercard-info",G:[{D:"span",J:"iv-btp-hovercard-action",G:["{{price}}"]},a]},{D:"div",G:["{{review}}"]}]});g.J(this,this.o);this.B=new g.pw({D:"div",J:"iv-btp-card-review",G:[{D:"div",J:"iv-btp-card-rating",G:[{D:"span",
J:"iv-btp-card-rating-bg",G:[{D:"span",J:"iv-btp-card-rating-fg"}]}]},{D:"span",J:"iv-btp-card-reviews",G:["{{reviewText}}"]}]});g.J(this,this.B);this.A.updateValue("hovercard",this.o);this.l.updateValue("cards",[this.A,this.g]);this.Qd()};
SP=function(a,b,c){c=c?g.jD(c):null;a.updateValue(b,c)};
TP=function(a,b){LP.call(this,a,b);this.o=null;this.Qd()};
UP=function(a){KP.call(this,!0,a);this.g=new g.U({D:"div",J:"iv-btp-companion",G:[{D:"div",J:"iv-btp-block-clicks"},{D:"div",J:"iv-btp-attribution",G:[{D:"span",J:"iv-btp-title",G:["{{shopText}}"]},{D:"div",W:["yt-uix-hovercard","ad-info-container"],G:[{D:"span",J:"iv-btp-sponsored",G:[{D:"span",G:["{{sponsoredText}}"]},{D:"span",J:"yt-uix-hovercard-target",N:{"data-position":"topright","data-orientation":"horizontal"},G:[{D:"span",J:"ad-info-icon"}]}]},{D:"div",J:"yt-uix-hovercard-content",G:[{D:"span",
J:"ytp-ad_settings",G:["{{adInfoText}}"]}]}]}]},{D:"div",G:["{{content}}"]}]});g.J(this,this.g);this.o=this.g.Z["iv-btp-block-clicks"];this.l=new PO;g.J(this,this.l);this.A=$da(this.l,this.g.element)};
VP=function(a,b,c){c=c?g.jD(c):null;a.g.updateValue(b,c)};
XP=function(a,b){LP.call(this,a,b);this.ea=new g.Rt(this);g.J(this,this.ea);this.Qd();this.Mg=[];this.Cd=null;this.Zc=new WP.Tl(this.gc);g.J(this,this.Zc);bO(this.view,this.Zc)};
iea=function(a){var b=a.oe();g.Uh(b.o,!0);Yf([a.Cd,og(1E3)]).then(function(){g.Uh(b.o,!1)})};
YP=function(a){KP.call(this,!0,a);var b=this;this.A=this.l=0;this.g=new g.U({D:"div",J:"iv-cards-slider",G:[{D:"div",J:"iv-cards-slider-body",G:[{D:"ul",J:"iv-cards-slider-list"}]},{D:"button",W:["iv-cards-slider-button","iv-cards-slider-prev"],N:{type:"button",onclick:";return false;"},G:[{D:"span",W:["iv-cards-slider-prev-icon","yt-sprite"]}]},{D:"button",W:["iv-cards-slider-button","iv-cards-slider-next"],N:{type:"button",onclick:";return false;"},G:[{D:"span",W:["iv-cards-slider-next-icon","yt-sprite"]}]}]});
this.C=g.pd("iv-cards-slider-list",this.g.element);if(this.o=g.pd("iv-cards-slider-prev",this.g.element))this.g.M(this.o,"click",function(){b.gc.P("prevbuttonclick",b)}),g.Uh(this.o,!1);
(this.B=g.pd("iv-cards-slider-next",this.g.element))&&this.g.M(this.B,"click",function(){b.gc.P("nextbuttonclick",b)});
g.J(this,this.g)};
ZP=function(a){a.C.style.left=125*-a.l+"px";a.o&&g.Uh(a.o,0<a.l);a.B&&g.Uh(a.B,a.l<a.A-3)};
$P=function(a){KP.call(this,!0,a);this.g=new g.U({D:"div",J:"iv-cards-companion",G:[{D:"div",J:"iv-cards-attribution",G:[{D:"span",W:["yt-badge","yt-badge-ad"],G:["{{adBadgeText}}"]},{D:"a",J:"ad-companion-clickthrough",N:{target:"_blank"},G:["{{shopText}}"]},{D:"div",W:["yt-uix-hovercard","ad-info-container"],G:[{D:"span",J:"yt-uix-hovercard-target",N:{"data-position":"topright","data-orientation":"horizontal",hidden:"true"},G:[{D:"span",J:"ad-info-icon"}]},{D:"div",J:"yt-uix-hovercard-content",
G:[{D:"p",G:["{{adSettingsText}}"]}]}]}]},{D:"div",G:["{{content}}"]}]});g.J(this,this.g);this.l=new lL;this.o=this.l.showCompanion(this.g.element,300,250);this.Qd()};
aQ=function(a){KP.call(this,!1,a);this.g=new g.U({D:"li",J:"iv-cards-slider-item",G:[{D:"div",J:"iv-cards-slider-unit",G:[{D:"a",G:[{D:"div",J:"iv-cards-slider-image",G:["{{image}}"]},{D:"span",W:["yt-ui-ellipsis","yt-ui-ellipsis-4","iv-cards-slider-text"],G:["{{headline}}"]},{D:"span",J:"iv-cards-slider-action",G:["{{price}}"]}]}]}]});g.J(this,this.g);this.Qd()};
bQ=function(a,b){LP.call(this,a,b);var c=this;this.o=null;this.gc.subscribe("offerclick",function(){return c.onClick()})};
dQ=function(a,b){LP.call(this,a,b);this.ea=new g.Rt(this);g.J(this,this.ea);this.Mq=[];this.Mo=null;this.Qd();this.Mg=[];this.Cd=null;this.gh=new cQ.Tl(this.gc);g.J(this,this.gh);bO(this.view,this.gh)};
eQ=function(a,b,c){Y.call(this,a,b,{D:"div",J:"ytp-ad-survey-answer"},"survey-answer");this.C=c;this.A=this.Z["ytp-ad-survey-answer"];this.o=null;this.B="";this.hide()};
fQ=function(a,b){Y.call(this,a,b,{D:"div",J:"ytp-ad-survey-none-of-the-above"},"survey-none-of-the-above");this.A=this.Z["ytp-ad-survey-none-of-the-above"];this.o=null;this.hide()};
gQ=function(a,b){MO.call(this,a,b,["ytp-ad-survey-submit-button"],"survey-submit")};
hQ=function(a,b,c,d){Y.call(this,a,b,{D:"div",J:"ytp-ad-survey-player-overlay",G:[{D:"div",J:"ytp-ad-survey-player-overlay-instream-info"},{D:"div",J:"ytp-ad-survey-player-overlay-skip-preview-submit",G:[{D:"div",J:"ytp-ad-survey-player-overlay-skip-or-preview"},{D:"div",J:"ytp-ad-survey-player-overlay-submit"}]},{D:"div",J:"ytp-ad-survey-player-overlay-instream-user-sentiment"}]},"survey-player-overlay");this.F=this.Z["ytp-ad-survey-player-overlay-instream-info"];this.A={};this.I=this.Z["ytp-ad-survey-player-overlay-skip-or-preview"];
this.o=null;this.V=this.Z["ytp-ad-survey-player-overlay-submit"];this.B=null;this.L=this.Z["ytp-ad-survey-player-overlay-instream-user-sentiment"];this.C=c;g.J(this,this.C);this.O=d;this.hide()};
iQ=function(a,b,c,d,e){Y.call(this,a,b,{D:"div",J:"ytp-ad-survey-question",G:[{D:"div",W:["ytp-ad-survey-question-text","ytp-ad-survey-question-foreground"]},{D:"div",W:["ytp-ad-survey-answers","ytp-ad-survey-question-foreground"]},{D:"div",W:["ytp-ad-survey-question-player-overlay","ytp-ad-survey-question-foreground"]},{D:"div",J:"ytp-ad-survey-question-background"}]},c);this.C=d;this.question=this.Z["ytp-ad-survey-question"];this.ma=this.Z["ytp-ad-survey-question-background"];this.V=this.Z["ytp-ad-survey-question-text"];
this.answers=this.Z["ytp-ad-survey-answers"];this.O=this.Z["ytp-ad-survey-question-player-overlay"];this.I=null;this.B=[];this.o=null;this.F=(0,g.G)();this.ha=e};
jQ=function(a,b,c){var d=new eQ(a.g,a.l,a.C);d.ca(a.answers);d.init(iL("survey-answer"),b,c);a.B.push(d)};
kQ=function(a,b){if(b){var c=b.background;c&&c.instreamSurveyAdBackgroundImageRenderer&&(c=(c=c.instreamSurveyAdBackgroundImageRenderer.image)&&kO(c)||"",g.qb(c)?g.Q(Error("Found ThumbnailDetails without valid image URL"),"WARNING"):g.wh(a.ma,"backgroundImage","url("+c+")"));jea(a,b)}else g.Q(Error("addCommonComponents() needs to be called before starting countdown."))};
jea=function(a,b){if(null==b.durationMilliseconds||void 0==b.durationMilliseconds||0==b.durationMilliseconds)g.Q(Error("durationMilliseconds unset or 0 for SurveyAdQuestionCommon: "+JSON.stringify(b)));else{a.F=(0,g.G)();a.o=new $O(b.durationMilliseconds,a.l,a.ha);g.J(a,a.o);if(b.timeoutCommands){var c=b.timeoutCommands;a.o.subscribe("p",function(){return a.C.Gc(c,a.macros)})}if(a.o&&b.instreamAdPlayerOverlay&&b.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer)try{var d=new hQ(a.g,a.l,
a.o,a.C);
d.ca(a.O);d.init(iL("survey-player-overlay"),b.instreamAdPlayerOverlay.instreamSurveyAdPlayerOverlayRenderer,a.macros);a.I=d;g.J(a,d);a.Nv()}catch(e){g.Q(Error("ISAPOR had an error when initializing. Error: "+(e+" SurveyAdQuestionCommon: "+JSON.stringify(b))))}else g.Q(Error("ISAPOR was not present in renderer. SurveyAdQuestionCommon: "+JSON.stringify(b)));a.o&&b.durationMilliseconds&&0<b.durationMilliseconds?(d=new IP(a.g,a.o),d.ca(a.O),g.J(a,d)):g.Q(Error("Survey progress bar was not added. SurveyAdQuestionCommon: "+
JSON.stringify(b)))}};
kea=function(a){function b(a){return{toString:function(){return a()}}}
a.macros.SURVEY_LOCAL_TIME_EPOCH_S=b(function(){var a=new Date;return Math.round(a.valueOf()/1E3)+-60*a.getTimezoneOffset()});
a.macros.SURVEY_ELAPSED_MS=b(function(){return(0,g.G)()-a.F})};
lQ=function(a,b,c,d){iQ.call(this,a,b,"survey-question-multi-select",c,d);this.A=null;this.aa=[];this.L=null;this.hide()};
lea=function(a,b,c){a.A=new fQ(a.g,a.l);a.A.ca(a.answers);a.A.init(iL("survey-none-of-the-above"),b,c)};
mea=function(a){a.B.forEach(function(a){a.o.toggleButton(!1)});
mQ(a,!0)};
mQ=function(a,b){var c=a.I,d=nea(a),e=b;e=void 0===e?!1:e;c.o&&(d?c.o.hide():c.o.show(),e&&c.o instanceof nP&&!c.o.F&&oP(c.o,!1));c.B&&(d?c.B.show():c.B.hide())};
nea=function(a){return a.B.some(function(a){return a.o.isToggled()})||a.A.o.isToggled()};
nQ=function(a,b,c,d){iQ.call(this,a,b,"survey-question-single-select",c,d);this.hide()};
oQ=function(a,b,c){Y.call(this,a,b,{D:"div",J:"ytp-ad-survey",G:[{D:"div",J:"ytp-ad-survey-title"},{D:"div",J:"ytp-ad-survey-questions"}]},"survey");this.A=c;this.C=this.Z["ytp-ad-survey-title"];this.B=this.Z["ytp-ad-survey-questions"];this.o=[];this.hide()};
pQ=function(a,b,c){Y.call(this,a,b,{D:"div",J:"ytp-ad-survey-interstitial",G:[{D:"div",J:"ytp-ad-survey-interstitial-modal",G:[{D:"div",J:"ytp-ad-survey-interstitial-contents",G:[{D:"div",J:"ytp-ad-survey-interstitial-text"},{D:"div",J:"ytp-ad-survey-interstitial-logo"}]},{D:"div",J:"ytp-ad-survey-interstitial-action"}]}]},"survey-interstitial");this.A=c;this.F=this.Z["ytp-ad-survey-interstitial-action"];this.O=this.Z["ytp-ad-survey-interstitial"];this.o=null;this.L=this.Z["ytp-ad-survey-interstitial-modal"];
this.V=this.Z["ytp-ad-survey-interstitial-text"];this.I=this.Z["ytp-ad-survey-interstitial-logo"];this.C=null;this.ea=new g.Rt;g.J(this,this.ea);this.B=new g.iP(this,500,!1,300);g.J(this,this.B)};
qQ=function(a,b){var c=b&&kO(b)||"";g.qb(c)?Wr(Error("Found ThumbnailDetails without valid image URL")):g.wh(a,"backgroundImage","url("+c+")")};
rQ=function(a){g.R.call(this);this.g=a;this.l=new g.Rt(this);g.J(this,this.l);this.A=oea;this.o=null;this.l.M(this.g,"presentingplayerstatechange",this.uE);this.o=this.l.M(this.g,"progresssync",this.vE)};
sQ=function(a,b,c,d){switch(a){case "invideo-overlay":return new fP(b,c);case "persisting-overlay":return new pP(b,c,new rQ(b),d);case "player-overlay":return new JP(b,c,new rQ(b),d);case "pla-shelf":return new XP(b,c);case "shopping-companion":return new dQ(b,c);case "survey":return new oQ(b,c,d);case "backfill-mpu-companion":return new VO(b,c);case "ad-action-interstitial":return new aP(b,c);case "action-companion":return new OO(b,c);case "ad-text-interstitial":return new cP(b,c);case "survey-interstitial":return new pQ(b,
c,d);default:return null}};
tQ=function(a){g.Rt.call(this);this.Gb=a;this.M(this.Gb,"onAdUxUpdate",this.F)};
uQ=function(a,b){tQ.call(this,a);this.A=b;this.o=null;this.g=new window.Map};
vQ=function(a){tQ.call(this,a)};
wQ=function(a,b){tQ.call(this,a);this.A=a;this.C=b;this.o=null;this.g={};var c=new g.U({D:"div",W:["video-ads","ytp-ad-module"]});g.J(this,c);this.B=new cO(c.element);g.J(this,this.B);g.TK(this.A,c.element,4)};
xQ=function(a,b){var c=gc(a.g,b.id,null);null!=c||g.Q(Error("Component not found for element id: "+b.id),"WARNING");return c||null};
yQ=function(a){g.dL.call(this,a);var b=this;this.l=null;this.created=!1;var c=g.W(a);g.OB(c)&&!g.VB(c)&&(c=function(){return b.l},g.J(this,new wQ(a,c)),g.J(this,xM(a)?new vQ(a):new uQ(a,c)))};
zQ=function(a){var b=!g.W(a).Pb&&3!=a.Ga();return a.isFullscreen()||b};
g.AQ=function(a,b,c,d){if((void 0===c||!c)&&g.rP(a))return g.Lt(a),!0;b.Wb();a=a.currentTarget.getAttribute("href");g.HL(a,d,!0);return!1};
BQ=function(a,b,c){if(WB(g.W(b))&&2!=b.Ga()){if(g.rP(c))return b.isFullscreen()&&g.CK(b),g.Lt(c),!0}else{var d=g.rP(c);d&&b.Wb();g.HL(a,void 0,!0);d&&(g.IL(a),g.Lt(c))}return!1};
CQ=function(){return{D:"div",J:"ytp-spinner-container",G:[{D:"div",J:"ytp-spinner-rotator",G:[{D:"div",J:"ytp-spinner-left",G:[{D:"div",J:"ytp-spinner-circle"}]},{D:"div",J:"ytp-spinner-right",G:[{D:"div",J:"ytp-spinner-circle"}]}]}]}};
DQ=function(a){if(window.document.createRange){var b=window.document.createRange();b.selectNodeContents(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b)}};
EQ=function(a,b,c){g.I.call(this);this.ma=b;this.sa=c;this.L=this.H=this.O=this.F=this.A=this.U=this.V=this.T=this.o=this.I=this.l=null;this.X={};this.aa={};this.ha=null;this.g=a;this.ba=this.C=this.K=this.B=null;this.da=g.T(g.W(a).experiments,"web_player_defer_modules")};
g.FQ=function(a){var b=g.W(a.g);if(g.aC(b)||b.Sb||!b.Pc&&!b.ha)return!1;var c=a.g.Ga();if(2==c)return!1;if(3==c)return g.T(b.experiments,"desktop_enable_autoplay");a=a.g.Y();return!!a&&(!a.pa||g.T(b.experiments,"allow_live_autoplay"))};
GQ=function(a){a.da&&(a.Am(),a.ym(),a.zm())};
HQ=function(a){if(a=a.g.Y(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
KQ=function(a,b,c,d){try{if(d){var e=g.IQ[b];if(e)return new e(a.g);"creatorendscreen"==b?JQ(a,"annotations_module",c):JQ(a,b,c)}else g.QK(a.g,b)}catch(f){g.QK(a.g,b),g.Q(f)}return null};
LQ=function(a,b){a.l&&(b||a.l.sc())&&(g.Le(a.l),a.l=null);a.I&&(b||a.I.sc())&&(g.Le(a.I),a.I=null);a.o&&(b||a.o.sc()?(g.Le(a.o),a.o=null):a.o.loaded&&a.o.unload());a.T&&(b||a.T.sc())&&(g.Le(a.T),a.T=null);a.V&&(b||a.V.sc())&&(g.Le(a.V),a.V=null);a.U&&(b||a.U.sc())&&(g.Le(a.U),a.U=null);a.A&&(b||a.A.sc())&&(g.Le(a.A),a.A=null);a.F&&(b||a.F.sc())&&(g.Le(a.F),a.F=null);a.O&&(b||a.O.sc())&&(g.Le(a.O),a.O=null);a.H&&(b||a.H.sc())&&(g.Le(a.H),a.H=null);a.K&&(b||a.K.sc())&&(g.Le(a.K),a.K=null);a.C&&(b||
a.C.sc())&&(g.Le(a.C),a.C=null);a.B&&(b||a.B.sc())&&(g.Le(a.B),a.B=null);a.L&&(b||a.L.sc())&&(g.Le(a.L),a.L=null)};
g.xK=function(a){return g.W(a.g).zb?a.K:null};
JQ=function(a,b,c){if(a.ma){for(var d=a.ma+b+".js",e=window.document.getElementsByTagName("SCRIPT"),f=!1,k,l=0;l<e.length;l++){var m=e[l];m.src==d&&(k=m)}k||(k=g.Dd("SCRIPT"),f=!0);var n=function(){a.ga()||c.call(a)},p=function(){a.ga()||g.QK(a.g,b)};
k.onload=g.B(function(a){Cf(n);a&&a()},k.onload);
k.onerror=g.B(function(a){Cf(p);a&&a()},k.onerror);
k.onreadystatechange=g.B(function(a){switch(k.readyState){case "loaded":case "complete":Cf(n,this)}a&&a()},k.onreadystatechange);
f&&((e=g.W(a.g).Zg)&&k.setAttribute("nonce",e),g.Yc(k,g.$d(d)),d=window.document.getElementsByTagName("HEAD")[0]||window.document.body,d.insertBefore(k,d.firstChild),g.Ke(a,function(){k.parentNode&&k.parentNode.removeChild(k);g.IQ[b]=null;"annotations_module"==b&&(g.IQ.creatorendscreen=null)}))}};
MQ=function(a,b,c,d){g.R.call(this);this.l=a;this.O=(0,g.A)(b,null);this.g=0;this.C=!1;this.A=new g.dd(window.NaN,window.NaN);this.ea=new g.Rt(this);g.J(this,this.ea);b=d?4E3:3E3;this.H=new g.P(g.B(this.yb,1,!1),b,this);g.J(this,this.H);this.I=new g.P(g.B(this.yb,2,!1),b,this);g.J(this,this.I);this.L=new g.P(g.B(this.yb,512,!1),0,this);g.J(this,this.L);this.T=c&&0<c.lg.length?5E3:3E3;d||(this.o=this.ea.M(a,"mouseover",this.yo),this.ea.M(a,"mousemove",this.zD),this.ea.M(a,"mouseleave",this.DE));g.yh?
this.ea.M(a,"keypress",this.AA):this.ea.M(a,"focusin",this.nz);this.B=this.ea.M(a,"mousedown",this.Zt);this.F=this.ea.M(a,"touchstart",this.bu,void 0,!0);this.U=null;this.yb(640,!0)};
NQ=function(a){a.yb(4,!1);a.K&&(a.ea.Qa(a.K),a.K=null,a.o=a.ea.M(a.l,"mouseover",a.yo));a.o&&(a.ea.Qa(a.o),a.o=a.ea.M(a.l,"mouseover",a.yo))};
g.OQ=function(a){g.U.call(this,{D:"div",J:"ytp-bezel",N:{role:"status","aria-label":"{{label}}"},G:[{D:"div",J:"ytp-bezel-icon",G:["{{icon}}"]}]});this.l=new g.P(this.show,10,this);g.J(this,this.l);this.g=new g.P(this.hide,500,this);g.J(this,this.g);this.o=a;this.hide()};
QQ=function(a,b){if(b)g.V(g.yK(a.o),64)||PQ(a,CO(),g.S("YTP_PLAY"));else{var c=a.o.Y();c.pa&&!c.Me?PQ(a,HO(),g.S("YTP_STOP")):PQ(a,BO(),g.S("YTP_PAUSE"))}};
RQ=function(a,b,c){0>=b?(c=KO(),b=g.S("YTP_SCREENREADER_VOLUME_MUTED")):(c=c?JO():IO(),b=Math.floor(b)+"% "+g.S("YTP_SCREENREADER_VOLUME_SETTING"));PQ(a,c,b)};
SQ=function(a,b,c){c=c?g.nO?{D:"div",W:["ytp-icon","ytp-icon-fast-rewind"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.nO?{D:"div",W:["ytp-icon","ytp-icon-fast-forward"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]};b=g.S("YTP_PLAYBACK_SPEED_CHANGED",
{RATE:String(b)});PQ(a,c,b)};
TQ=function(a){PQ(a,DO(),g.S("YTP_PREVIOUS"))};
PQ=function(a,b,c){a.updateValue("label",void 0===c?"":c);a.updateValue("icon",b);g.Bq(a.g);a.l.start()};
UQ=function(a){var b=g.W(a),c=["ytp-large-play-button","ytp-button"];if(b.B&&b.ba)var d=g.T(b.experiments,"enable_dni_lozenge_play_button")?[g.nO?{D:"div",W:["ytp-icon","ytp-icon-dni-large-play-button-exp"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-dni-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#212121","fill-opacity":"0.8"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:[{D:"div",J:"ytp-large-play-button-circle",N:{style:"background-color: "+b.ba}},g.nO?{D:"div",W:["ytp-icon","ytp-icon-dni-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"4 -6 60 60",width:"100%"},G:[{D:"path",N:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}}]}];else b.T&&!b.Sb?d=[g.nO?{D:"div",W:["ytp-icon","ytp-icon-large-play-button-hover"]}:{D:"svg",N:{height:"100%",
version:"1.1",viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:(b.g&&c.push("ytp-touch-device"),
d=[b.Sb?g.nO?{D:"div",W:["ytp-icon","ytp-icon-house-brand-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{"clip-rule":"evenodd",d:"M59.6,1.35c0.26,.5,.4,1.13,.4,1.9v53.5c0,.76-0.13,1.4-0.4,1.9c-0.5,.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.33-0.43-2.8-1.3C0.15,58.16,0,57.51,0,56.75V3.25c0-0.83,.16-1.5,.5-2C1,.41,1.91,0,3.25,0h53.5C58.15,0,59.1,.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z",fill:"#1f1f1f","fill-rule":"evenodd"}},
{D:"path",N:{d:"M21,41.65 L21,18 L43.7,29.85 L21,41.65 Z",fill:"#fff"}}]}:g.nO?{D:"div",W:["ytp-icon","ytp-icon-large-play-button"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},G:[{D:"path",J:"ytp-large-play-button-bg",N:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#212121","fill-opacity":"0.8"}},{D:"path",N:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]);g.U.call(this,{D:"div",J:"ytp-cued-thumbnail-overlay",G:[{D:"div",J:"ytp-cued-thumbnail-overlay-image"},{D:"button",W:c,N:{"aria-label":g.S("YTP_PLAY")},G:d}]});g.T(b.experiments,"enable_dni_lozenge_play_button")&&b.B&&b.ba&&this.Z["ytp-dni-large-play-button-bg"].setAttribute("fill",b.ba);this.A=new g.Rt(this);g.J(this,this.A);this.g=a;this.C=this.Z["ytp-cued-thumbnail-overlay-image"];this.B=this.Z["ytp-large-play-button"];
this.o=new g.iP(this,250);g.J(this,this.o);this.l=new g.P(this.eu,0,this);g.J(this,this.l);this.eu();this.M(a,"presentingplayerstatechange",this.LD);this.M(a,"ypcStateChanged",this.FI);HB(g.W(a))&&this.M(a,"videoplayerreset",this.KD)};
WQ=function(a,b){g.U.call(this,{D:"canvas",J:"ytp-tv-static"});this.l=this.element.getContext("2d");this.height=this.width=window.NaN;this.H=null;this.I=this.K=this.A=this.o=0;this.B=-75;this.g=new g.wq(this.F,void 0,this);g.J(this,this.g);this.C=new g.P(this.g.ki,75,this.g);g.J(this,this.C);VQ(this,a,b)};
XQ=function(a){for(var b=Math.floor(.6*a),c=b;c<a;++c){for(var d=!1,e=2;e<Math.sqrt(c);e++){if(!(c%e)){d=!1;break}d=!0}if(d)return c}return b};
VQ=function(a,b,c){if(b&&c){a.width=a.element.width=b;a.height=a.element.height=c;var d=g.Dd("CANVAS");d.width=b;d.height=c;for(var e=d.getContext("2d"),f=e.getImageData(0,0,b,c),k=b*c,l=0;l<k;l++){var m=4*l;f.data[m]=f.data[m+1]=f.data[m+2]=Math.floor(35*Math.random());f.data[m+3]=255}e.putImageData(f,0,0);a.H=d;a.K=XQ(b);a.I=XQ(c/10);a.l.scale(1.5,1.5);a.l.fillStyle="rgba(255, 255, 255, 0.02)"}};
ZQ=function(a){g.U.call(this,{D:"div",W:["ytp-error"],N:{role:"alert"},G:[{D:"div",J:"ytp-error-content",G:[{D:"div",J:"ytp-error-content-wrap",G:["{{content}}"]}]}]});this.g=a;this.o=[];try{this.l=new WQ(1,1),g.J(this,this.l),this.l.ca(this.element,0)}catch(b){}YQ(this,g.zK(this.g).Fa())};
YQ=function(a,b){$Q(a,function(a){VQ(a,b.width,b.height)})};
$Q=function(a,b){if(a.l)try{b.call(a,a.l)}catch(c){a.l.dispose(),a.l=null}};
aR=function(a,b,c,d,e,f){e||(e=g.W(a.g).l);a=d?{CPN:a.g.Y().clientPlaybackNonce}:null;b=g.S(b,a).split(/\$(BEGIN|END)_LINK/);a=[];f&&(f=g.S(f,null))&&a.push({D:"h2",G:[f]});a.push(b[0]);a.push({D:"br"});a.push({D:"a",N:{href:c,target:e?"_blank":null},G:[b[2]]});a.push(b[4]);return{D:"span",G:a}};
cR=function(a,b){g.Rt.call(this);this.g=a;this.A=b;this.o=new window.Set;this.l=window.navigator.mediaSession;bR(this,"play",function(){QQ(b,!0);a.Vc()});
bR(this,"pause",function(){QQ(b,!1);a.Wb()});
bR(this,"seekbackward",function(){PQ(b,FO());a.Hd(-5*a.kc())});
bR(this,"seekforward",function(){PQ(b,xO());a.Hd(5*a.kc())});
this.M(a,"videodatachange",this.C);this.M(a,"presentingplayerstatechange",this.B);this.C()};
bR=function(a,b,c){a.l.setActionHandler(b,c?(0,g.A)(c,a):null);a.o.add(b)};
dR=function(a){g.U.call(this,{D:"div",J:"ytp-paid-content-overlay",N:{"aria-live":"assertive","aria-atomic":"true"}});this.H=new g.U({D:"div",W:["ytp-button","ytp-paid-content-overlay-text"]});g.J(this,this.H);this.H.ca(this.element);this.I=a;this.l=null;this.C=!1;this.A=new g.iP(this.H,250,!1,100);g.J(this,this.A);this.B=this.g=null;this.o={};this.F=0;this.M(a,"videodatachange",this.O);this.M(a,"presentingplayerstatechange",this.L)};
eR=function(a,b){var c=zD(b),d=AD(b);a.g?b.videoId&&b.videoId!=a.l&&(g.Bq(a.g),a.l=b.videoId,c=a.o[b.videoId]||0,a.C=!!d&&3E3>c):c&&d&&(a.g=new g.P(a.K,d,a),g.J(a,a.g),g.Rd(g.pd("ytp-paid-content-overlay-text",a.element),c))};
fR=function(a,b){a.g&&g.V(b,8)&&a.C&&(a.C=!1,a.A.show(),a.F=(0,g.G)(),a.g.start())};
iR=function(a){g.U.call(this,{D:"div",J:"ytp-spinner",G:[{D:"div",G:["{{icon}}"]},{D:"div",J:"ytp-spinner-message",G:[g.S("YTP_PLAYBACK_STALLED_AT_START")]}]});this.A=this.Z["ytp-spinner-message"];this.g=a;this.l=new g.P(this.show,500,this);g.J(this,this.l);this.o=!0;gR(this,!1);this.M(a,"presentingplayerstatechange",this.kE);this.M(a,"onFrescaStateChange",this.VF);this.M(a,"playbackstalledatstart",this.fH);this.M(a,"videodatachange",this.Mu);this.M(a,"videoplayerreset",this.Mu);hR(this,g.yK(a))};
gR=function(a,b){if(b!=a.o){var c;b?c={D:"div",W:["ytp-spinner-container","ytp-fidget-spinner"],G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-fidget-spinner"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 64 64",width:"100%"},G:[{D:"path",J:"ytp-fidget-spinner",N:{d:"m32 2.2c-7.6 0-10.7 7.1-10.7 10.6 0 3.5 1 5.3 2.3 7 1.3 1.7 2.2 4.3-0.2 7.7-2.4 3.5-3.5 2.9-7.9 3.1-4.4 .1-10.5 3.9-10.5 11-0.1 7.1 6.4 10.4 10.4 10.5 4 .1 7.6-2.1 9.4-5.2 2.2-3.8 4-5.4 7.3-5.3 3.3 .1 5.1 1.5 7 4.9 1.8 3.4 5.5 5.6 9.6 5.6 4.2 0 10.5-2.8 10.4-10.8-0.1-8.1-6.6-10.3-10.3-10.5-3.7-0.2-6-0.1-8.1-3.3-2.1-3.2-1.2-5.9-0.1-7.5 1.1-1.7 2.3-3.2 2.3-7.1C42.8 8.7 39.6 2.2 32 2.2zm0.1 4.3c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm0 18.8c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm-16.3 9.4c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5zm32.7 0c3.6 0 6.5 2.9 6.5 6.5 0 3.6-2.9 6.5-6.5 6.5-3.6 0-6.5-2.9-6.5-6.5 0-3.6 2.9-6.5 6.5-6.5z",
fill:"#fff"}}]}]}:c=CQ();a.update({icon:c});a.o=b}};
hR=function(a,b){if(g.V(b,128))var c=0;else!(c=g.V(b,16))&&(c=g.V(b,1))&&(c=g.sK(a.g).H,c=!(c&&c.loaded));c?a.l.start():a.hide()};
jR=function(a,b,c,d){d=void 0===d?!1:d;g.ww.call(this,b);this.V=a;this.aa=d;this.I=null;this.H=new g.Rt(this);g.J(this,this.H);this.K=new g.iP(this,c,!0);g.J(this,this.K);this.A=null};
kR=function(a){a.A&&(window.document.activeElement&&g.Qd(a.element,window.document.activeElement)&&(g.Ud(a.A),a.A.focus()),a.A.removeAttribute("aria-expanded"),a.A=null);g.Tt(a.H);a.I=null};
lR=function(a){return a.Na()&&3!=a.K.g};
nR=function(a){var b=zv(g.W(a).experiments,"mweb_muted_autoplay_animation"),c=[],d=[];"none"!=b&&(c.push("ytp-unmute-animated"),d.push({D:"div",W:["ytp-unmute-box"]}),"expand"==b?c.push("ytp-unmute-expand"):"shrink"==b&&c.push("ytp-unmute-shrink"));jR.call(this,a,{D:"button",W:["ytp-unmute","ytp-popup","ytp-button"].concat(c),G:[{D:"div",J:"ytp-unmute-inner",G:[{D:"div",W:["ytp-unmute-icon"],G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-volume-muted-dark"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{D:"div",W:["ytp-unmute-text"],G:[g.S("YTP_TAP_TO_UNMUTE_SHORT")]}].concat(d)}]},100);this.g=a;this.l=this.o=!1;this.M(a,"mutedautoplaychange",this.B,this);this.M(a,"presentingplayerstatechange",this.C);this.fa("click",this.onClick,this);a=a.app.X;g.vw(this,a);a&&mR(this)};
oR=function(a){a.o||(a.o=!0,g.GK(a.g,"mutedAutoplayClick",{}))};
mR=function(a){a.l||(a.l=!0,g.GK(a.g,"mutedAutoplayImpression",{}))};
pR=function(a){g.Rt.call(this);var b=g.W(a),c=g.zK(a);this.g=a;this.Ab=!1;this.K=null;this.bb=!1;this.Wa=new g.P(this.gF,0,this);g.J(this,this.Wa);var d=new UQ(a);g.J(this,d);g.TK(a,d.element,4);var e=new iR(a);g.J(this,e);g.TK(a,e.element,4);this.C=new g.OQ(a);g.J(this,this.C);g.TK(a,this.C.element,4);var f=a.Y();this.o=new MQ(c,(0,g.A)(this.CD,this),f,b.useTabletControls);g.J(this,this.o);this.o.subscribe("autohideupdate",this.To,this);var k=new dR(a);g.J(this,k);g.TK(a,k.element,4);this.da=new nR(a);
g.J(this,this.da);g.TK(this.g,this.da.element,2);this.jb=this.g.app.X;this.M(a,"mutedautoplaychange",this.DD);this.X=new g.P(this.zo,200,this);g.J(this,this.X);this.Ca=f.videoId;this.B=null;this.Ua=!1;this.Va=null;this.ma=[];f=a.getRootNode();f.setAttribute("aria-label",g.S("YTP_PLAYER_NORMAL"));switch(b.color){case "white":g.M(f,"ytp-color-white")}!g.T(g.W(a).experiments,"disable_mediasession2")&&"mediaSession"in window.navigator&&!window.navigator.mediaSession.metadata&&window.navigator.mediaSession.setActionHandler&&
(f=new cR(a,this.C),g.J(this,f));this.M(a,"appresize",this.Ni);this.M(a,"presentingplayerstatechange",this.iH);this.M(a,"videodatachange",this.cu);this.M(a,"videoplayerreset",this.gH);this.M(a,"autonavvisibility",this.Wg,this);g.T(g.W(a).experiments,"player_minimized_controls_killswitch")&&this.M(a,"minimized",this.hg,this);this.M(a,"onFrescaStateChange",this.hg,this);this.M(c,"click",this.FH,this);this.M(c,"dblclick",this.GH,this);b.ma&&(this.M(c,"gesturechange",this.HH,this),this.M(c,"gestureend",
this.IH,this));this.kb=[c.l,e.element,d.element,this.C.element]};
qR=function(a){return g.T(g.W(a.g).experiments,"player_minimized_controls_killswitch")?a.g.app.ha:!1};
rR=function(a,b){if(!b)return!1;var c=a.g.app.B.ia();if(c&&g.Qd(c,b))return c.controls;for(c=0;c<a.kb.length;c++)if(g.Qd(a.kb[c],b))return!1;return g.oq(b,"ytp-player-content")||g.oq(b,"html5-endscreen")||b==a.g.getRootNode()?!1:!0};
sR=function(a,b){if(g.rP(b)&&a.g.app.X){a.g.Ce();2==a.g.Ga()&&a.g.Vc();var c=g.yK(a.g);!g.V(c,4)||g.V(c,8)||g.V(c,2)||a.zo();return!0}return!1};
tR=function(a,b,c){a.g.isFullscreen()?c<1-b&&g.CK(a.g):c>1+b&&g.CK(a.g)};
vR=function(a,b,c){var d={"aria-label":g.S("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-owns":"iv-drawer","aria-haspopup":"true","data-tooltip-opaque":String(g.W(a).I)},e={D:"span",J:"ytp-cards-button-icon-default",G:[{D:"div",J:"ytp-cards-button-icon",G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-info-card"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{D:"div",J:"ytp-cards-button-title",G:[g.S("YTP_CARDS_BUTTON_INFO")]}]};d={D:"button",W:["ytp-button","ytp-cards-button"],N:d,G:[e,{D:"span",J:"ytp-cards-button-icon-shopping",G:[{D:"div",J:"ytp-cards-button-icon",G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-shopping-card"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",J:"ytp-svg-shadow",N:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{D:"path",J:"ytp-svg-fill",N:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{D:"path",J:"ytp-svg-shadow-fill",N:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]},{D:"div",
J:"ytp-cards-button-title",G:[g.S("YTP_CARDS_BUTTON_SHOPPING")]}]}]};g.U.call(this,d);this.g=a;this.A=b;this.B=c;this.l=null;this.o=new g.iP(this,250,!0,100);g.J(this,this.o);a=g.W(this.g);b=g.zK(this.g).Fa().width;b=a.l&&480<b;a.I&&g.O(this.B,"ytp-show-cards-title",b);this.hide();this.fa("click",this.C);this.fa("mouseover",this.F);uR(this,!0)};
uR=function(a,b){b?a.l=wR(a.A.ib(),a.element):(a.l(),a.l=null)};
xR=function(a,b){g.U.call(this,{D:"div",J:"ytp-cards-teaser",G:[{D:"div",J:"ytp-cards-teaser-box"},{D:"div",J:"ytp-cards-teaser-text",G:[{D:"span",J:"ytp-cards-teaser-label",G:["{{text}}"]}]}]});this.l=a;this.B=new g.iP(this,250,!1,250);g.J(this,this.B);this.I=b;this.g=null;this.H=new g.P(this.OG,300,this);g.J(this,this.H);this.F=new g.P(this.LG,2E3,this);g.J(this,this.F);this.K=new g.hq;this.C=[];this.A=this.o=null;this.M(b.element,"mouseover",this.du);this.M(b.element,"mouseout",this.Wf);this.M(a,
"cardsteasershow",this.aI);this.M(a,"cardsteaserhide",this.Oi);this.M(a,"cardstatechange",this.Yw);this.M(a,"presentingplayerstatechange",this.Yw);this.fa("click",this.wJ);this.fa("mouseenter",this.ED)};
pea=function(a,b){a.updateValue("text",b.teaserText);a.element.setAttribute("dir",g.iq(a.K,b.teaserText));a.B.show();a.o=new g.P(function(){g.M(this.l.getRootNode(),"ytp-cards-teaser-shown")},0,a);
a.o.start();uR(a.I,!1);a.g=new g.P(a.Oi,580+b.durationMs,a);a.g.start();a.C.push(a.fa("mouseover",a.du,a));a.C.push(a.fa("mouseout",a.Wf,a))};
yR=function(a,b,c,d,e){var f={D:"div",J:"ytp-panel"};if(c){var k="ytp-panel-title";var l={D:"div",J:"ytp-panel-header",G:[{D:"button",W:["ytp-button",k],G:[c]}]};if(e){var m="ytp-panel-options";l.G.push({D:"button",W:["ytp-button",m],G:[d]})}f.G=[l]}g.ww.call(this,f);this.V=b;b.ca(this.element);this.da=!1;c&&(this.M(this.Z[k],"click",this.ma),this.da=!0,e&&this.M(this.Z[m],"click",e));b.subscribe("size-change",this.ha,this);this.M(a,"fullscreentoggled",this.ha)};
g.zR=function(a,b,c,d,e){b=void 0===b?null:b;var f={role:"menu"};b&&(f.id=b);b=new g.ww({D:"div",J:"ytp-panel-menu",N:f});yR.call(this,a,b,c,d,e);this.C=b;g.J(this,this.C);this.Ba=[]};
g.AR=function(a,b,c){if(void 0===c?0:c)a.Ba.push(b),a.C.element.appendChild(b.element);else{c=g.eb(a.Ba,b,qea);if(0<=c)return;c=~c;g.bb(a.Ba,c,0,b);Id(a.C.element,b.element,c)}b.subscribe("size-change",a.X,a);a.C.P("size-change")};
g.BR=function(a,b){b.unsubscribe("size-change",a.X,a);a.ga()||(g.Wa(a.Ba,b),a.C.element.removeChild(b.element),a.C.P("size-change"))};
g.CR=function(a){for(var b=g.q(a.Ba),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.X,a);a.Ba=[];g.Hd(a.C.element);a.C.P("size-change")};
qea=function(a,b){return b.priority-a.priority};
g.DR=function(a,b){jR.call(this,a,{D:"div",W:["ytp-popup",b||null]},100,!0);this.g=[];this.size=new g.gd(0,0);this.B=this.C=null;this.L=this.O=0;this.fa("keydown",this.TD)};
FR=function(a){g.Rh(a.element,a.O||"100%",a.L||"100%");var b=ER(a);b.element.style.width="";b.element.style.height="";b.element.style.maxWidth="100%";b.element.style.maxHeight="100%";b.V.element.style.height="";var c=g.Th(b.element);c.width+=1;c.height+=1;b.element.style.width=c.width+"px";b.element.style.height=c.height+"px";b.element.style.maxWidth="";b.element.style.maxHeight="";var d=0;b.da&&(d=g.Th(b.Z["ytp-panel-header"]).height);b.V.element.style.height=c.height-d+"px";a.size=c};
g.HR=function(a,b){var c=a.g[a.g.length-1];a.g.push(b);GR(a,c,b)};
g.IR=function(a){var b=a.g.pop(),c=a.g[0];a.g=[c];GR(a,b,c,!0)};
GR=function(a,b,c,d){JR(a);ER(a);g.oq(c.element,"ytp-panel-animate-back")||g.oq(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.ej,a),b.unsubscribe("back",a.Od,a));c.subscribe("size-change",a.ej,a);c.subscribe("back",a.Od,a);if(a.Na()){g.M(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.ca(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;FR(a);g.Rh(a.element,e);a.C=new g.P(g.B(a.sJ,b,c,d),20,a);a.C.start()}else c.ca(a.element),
b&&g.uw(b)};
ER=function(a){return a.g[a.g.length-1]};
JR=function(a){a.C&&g.Aq(a.C);a.B&&g.Aq(a.B)};
KR=function(a){var b=g.zw({"aria-haspopup":"true"});g.yw.call(this,b,a);this.fa("keydown",this.g)};
LR=function(a,b){a.element.setAttribute("aria-haspopup",b)};
MR=function(a,b){var c=g.zw({role:"menuitemcheckbox","aria-checked":"false"});g.yw.call(this,c,b,a,{D:"div",J:"ytp-menuitem-toggle-checkbox"});this.l=!1;this.fa("click",this.I)};
NR=function(a,b){a.l=b;a.element.setAttribute("aria-checked",a.l)};
OR=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Ug("/sharing_services",a);g.Ns(d)};
RR=function(a,b,c,d){g.zR.call(this,a);this.g=a;this.K=c;this.L=d;this.A=new KR(8);g.J(this,this.A);g.AR(this,this.A,!0);this.A.fa("click",this.bG,this);WK(a,this.A.element,this.A,28659);this.o=new KR(7);g.J(this,this.o);g.AR(this,this.o,!0);this.o.fa("click",this.aG,this);WK(a,this.o.element,this.o,28660);this.l=new KR(6);g.J(this,this.l);g.AR(this,this.l,!0);this.l.fa("click",this.YF,this);WK(a,this.l.element,this.l,28658);this.B=new MR(g.S("YTP_LOOP"),5);g.J(this,this.B);g.AR(this,this.B,!0);this.B.fa("click",
this.sG,this);WK(a,this.B.element,this.B,28661);this.O=new g.yw(g.zw({href:"{{href}}",target:"_blank"},void 0,!0),4,g.S("YTP_TROUBLESHOOT_ISSUE"));g.J(this,this.O);g.AR(this,this.O,!0);this.O.fa("click",this.zH,this);this.I=new KR(3);g.J(this,this.I);g.AR(this,this.I,!0);this.I.fa("click",this.XF,this);b=new g.yw(g.zw(),2,g.S("YTP_SHOW_VIDEO_INFO"));g.J(this,b);g.AR(this,b,!0);b.fa("click",this.RH,this);this.H=new g.ww({D:"div",W:["ytp-copytext","ytp-no-contextmenu"],N:{draggable:"false",tabindex:"1"},
G:["{{text}}"]});g.J(this,this.H);this.H.fa("click",this.EF,this);this.aa=new yR(a,this.H);g.J(this,this.aa);this.F=null;b=window.document.queryCommandSupported&&window.document.queryCommandSupported("copy");g.Ky&&g.wc(43)&&(b=!0);g.AA&&!g.wc(41)&&(b=!1);b&&(this.F=new g.U({D:"textarea",J:"ytp-html5-clipboard"}),g.J(this,this.F),this.F.ca(this.element));this.M(a,"loopchange",this.rG);this.M(a,"videodatachange",this.ID);PR(this);QR(this,this.g.Y())};
SR=function(a,b){if(a.F){var c=a.F.element;c.value=b;c.select();try{var d=window.document.execCommand("copy")}catch(e){}}d?a.K.qb():(a.H.sb(b,"text"),g.HR(a.K,a.aa),DQ(a.H.element),a.F&&(a.F=null,PR(a)));return d};
QR=function(a,b){var c=g.W(a.g),d=2!=a.g.Ga()||b.isListed;d=!c.H&&!!b.videoId&&d;"play"!=c.playerStyle?c="https://support.google.com/youtube/?p=report_playback":(c={contact_type:"playbackissue",html5:1,plid:b.playbackId,ei:b.eventId,v:b.videoId,p:"movies_playback"},b.Da&&(c.fmt=nv(b.Da)),b.clientPlaybackNonce&&(c.cpn=b.clientPlaybackNonce),b.Fe&&(c.partnerid=b.Fe),c=g.Ug("//support.google.com/googleplay/",c));g.vw(a.l,d&&b.allowEmbed);g.vw(a.A,d);g.vw(a.o,d&&!b.pa);a.O.sb(c,"href")};
PR=function(a){var b=!!a.F;g.xw(a.I,g.S(b?"YTP_COPY_DEBUG_INFO":"YTP_GET_DEBUG_INFO"));LR(a.I,!b);g.xw(a.l,g.S(b?"YTP_EMBED_COPY":"YTP_GET_EMBED"));LR(a.l,!b);g.xw(a.A,g.S(b?"YTP_COPY_VIDEO_URL":"YTP_GET_VIDEO_URL"));LR(a.A,!b);g.xw(a.o,g.S(b?"YTP_COPY_VIDEO_URL_AT_TIME":"YTP_GET_VIDEO_URL_AT_TIME"));LR(a.o,!b)};
TR=function(a,b){g.YK(a.g,a.l.element,b);g.YK(a.g,a.A.element,b);g.YK(a.g,a.o.element,b);g.YK(a.g,a.B.element,b)};
VR=function(a,b,c){g.DR.call(this,a);this.l=a;this.da=b;this.X=c;this.o=new g.Rt(this);g.J(this,this.o);this.F=null;WK(a,this.element,this,28656);g.M(this.element,"ytp-contextmenu");g.W(a).B&&g.M(this.element,"ytp-dni");UR(this);this.hide()};
UR=function(a){g.Tt(a.o);"gvn"!=g.W(a.l).playerStyle&&a.o.M(g.zK(a.l),"contextmenu",a.DF)};
WR=function(a){a.l.isFullscreen()?g.TK(a.l,a.element,9):a.ca(window.document.body)};
XR=function(a,b,c,d,e,f){g.Rt.call(this);this.g=a;this.F=c;this.B=d;this.l=e;this.C=f;this.A=new g.P(g.B(this.gu,!1),1E3,this);g.J(this,this.A);this.o="";a=g.B(this.rp,!1);this.M(b,"mousedown",a);this.M(c.element,"mousedown",a);this.M(b,"keydown",this.Ur);this.M(c.element,"keydown",this.Ur);this.M(b,"keyup",this.Vr);this.M(c.element,"keyup",this.Vr)};
ZR=function(a,b,c){var d=!1,e=g.W(a.g);if(!e.He){switch(b){case 80:c&&!e.L&&(TQ(a.l),a.g.Gi(),d=!0);break;case 78:c&&!e.L&&(PQ(a.l,zO(),g.S("YTP_NEXT")),a.g.wh(),d=!0);break;case 74:a.g.Ac()&&(PQ(a.l,g.nO?{D:"div",W:["ytp-icon","ytp-icon-rewind-ten-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z M 16.9,22 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 -0.2,0 -0.4,.1 -0.6,.1 -0.2,0 -0.4,0 -0.6,-0.1 -0.2,-0.1 -0.3,-0.2 -0.5,-0.3 -0.2,-0.1 -0.2,-0.3 -0.3,-0.6 -0.1,-0.3 -0.1,-0.5 -0.1,-0.8 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.9,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.Hd(-10*a.g.kc()),d=!0);break;case 76:a.g.Ac()&&(PQ(a.l,g.nO?{D:"div",W:["ytp-icon","ytp-icon-forward-ten-seconds"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.8,3 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 C 20,21.9 19.8,22 19.6,22 19.4,22 19.2,22 19,21.9 18.8,21.8 18.7,21.7 18.5,21.6 18.3,21.5 18.3,21.3 18.2,21 18.1,20.7 18.1,20.5 18.1,20.2 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.8,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.Hd(10*a.g.kc()),d=!0);break;case 77:a.g.isMuted()?(a.g.Ce(),RQ(a.l,a.g.Nb(),!1)):(a.g.mute(),RQ(a.l,0,!0));d=!0;break;case 75:e.L||(d=!pE(g.yK(a.g)),QQ(a.l,d),d?a.g.Vc():a.g.Wb(),d=!0);break;case 190:if(c){if(e.Ca)for(b=a.g.vh(),c=a.g.kc(),e=0;e<b.length-1;e++)b[e]==c&&(d=b[e+1],a.g.ze(d,!0),SQ(a.l,d,!1),d=!0)}else a.g.Ac()&&(YR(a,1),d=!0);break;case 188:if(c){if(e.Ca)for(b=a.g.vh(),c=a.g.kc(),e=b.length-1;1<=e;e--)b[e]==c&&(d=b[e-1],a.g.ze(d,!0),SQ(a.l,d,!0),d=!0)}else a.g.Ac()&&(YR(a,-1),d=
!0);break;case 70:zQ(a.g)&&(g.CK(a.g),d=!0)}d&&a.B.yb(2,!0)}return d};
aS=function(a,b,c,d){var e=g.sK(a.g).l;if(!e||!e.loaded)return!1;e=a.g.Kg();for(var f,k=0;k<g.$R.length;k++){var l=g.$R[k];if(l.option==b){f=l.options;break}}var m;for(k=0;k<f.length;k++)f[k].option==e[b]&&(m=k);if(d)if(c){if(0==m)return!1}else if(m==f.length-1)return!1;d={};d[b]=f[(m+(c?f.length-1:1))%f.length].option;a.g.Ok(d);a.gu(!0);a.A.start();return!0};
YR=function(a,b){a.g.Ac();if(g.V(g.yK(a.g),4)){var c=a.g.Y().Da;c&&(c=c.video)&&a.g.Hd(b/(c.fps||30))}};
g.bS=function(a){return sF(a)?(a.fetch=0,new g.rF(a)):new g.mD(a)};
dS=function(a,b){g.U.call(this,{D:"div",J:"ytp-pause-overlay"});this.g=a;this.X=b;this.o=new g.Rt(this);g.J(this,this.o);this.O=new g.iP(this,250,!1,100);g.J(this,this.O);var c=g.W(a);this.B=[];this.l=[];this.C=0;this.ha=c.l&&!c.B;this.V=!1;g.T(c.experiments,"enable_dni_channel_on_related")&&c.B&&(this.I=new g.U({D:"div",J:"ytp-channel",G:["{{channel}}"]}),g.J(this,this.I),this.I.ca(this.element));this.F=new g.U({D:"div",J:"ytp-suggestions"});g.J(this,this.F);this.F.ca(this.element);this.L=new g.U({D:"button",
W:["ytp-button","ytp-previous"],N:{"aria-label":g.S("YTP_PREVIOUS")},G:[g.qO()]});g.J(this,this.L);this.L.ca(this.element);this.L.fa("click",this.VD,this);c=g.Ky||g.zh?{style:"will-change: opacity"}:null;this.aa=new cS((0,g.A)(this.bx,this));g.J(this,this.aa);for(var d=this.da=this.T=this.A=0;16>d;d++){var e=new g.U({D:"a",J:"ytp-suggestion-link",N:{href:"{{link}}",target:"_blank"},G:[{D:"div",J:"ytp-suggestion-image"},{D:"div",J:"ytp-suggestion-overlay",N:c,G:[{D:"div",J:"ytp-suggestion-title",G:["{{title}}"]},
{D:"div",J:"ytp-suggestion-author",G:["{{author_and_views}}"]},{D:"div",J:"ytp-suggestion-duration",G:["{{duration}}"]}]}]});g.J(this,e);e.ca(this.F.element);var f=e.Z["ytp-suggestion-link"];g.wh(f,"transitionDelay",d/20+"s");this.o.M(f,"click",g.B(this.yF,d));this.B.push(e)}this.K=new g.U({D:"button",W:["ytp-button","ytp-next"],N:{"aria-label":g.S("YTP_NEXT")},G:[g.rO()]});g.J(this,this.K);this.K.ca(this.element);this.K.fa("click",this.UD,this);c={"aria-label":g.S("YTP_CLOSE")};c=new g.U({D:"button",
W:["ytp-button","ytp-collapse"],N:c,G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-small-close"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 16 16",width:"100%"},G:[{D:"path",N:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.J(this,c);c.ca(this.element);c.fa("click",this.uF,this);this.H=new g.U({D:"button",W:["ytp-button","ytp-expand"],G:[g.S("YTP_MORE_VIDEOS")]});g.J(this,this.H);this.H.ca(this.element);this.H.fa("click",this.wF,this);this.o.M(this.g,"appresize",this.Bb);
this.o.M(this.g,"fullscreentoggled",this.WD);this.o.M(this.g,"presentingplayerstatechange",this.XD);this.o.M(this.g,"videodatachange",this.YD);this.Bb(g.zK(this.g).Fa())};
fS=function(a,b){var c=g.$c(b,a.C-a.l.length*(a.T+8),0);a.aa.start(a.A,c,1E3);a.A=c;eS(a)};
eS=function(a){var b=a.X.Ic();b=a.da/2+(b?20:8);a.K.element.style.bottom=b+"px";a.L.element.style.bottom=b+"px";b=a.A;var c=a.C-a.l.length*(a.T+8);g.O(a.element,"ytp-scroll-min",0<=b);g.O(a.element,"ytp-scroll-max",b<=c)};
rea=function(a){for(var b=g.W(a.g),c=0;c<a.l.length;c++){var d=a.l[c].Eb(),e=a.B[c],f=d.shortViewCount?d.author+" \u2022 "+d.shortViewCount:d.author;e.element.style.display="";e.update({author_and_views:f,duration:d.lengthSeconds?g.qP(d.lengthSeconds):0,link:d.mk(b),title:d.title});e=e.Z["ytp-suggestion-image"];d=d.xc(b);e.style.backgroundImage=d?"url("+d+")":""}for(;c<a.B.length;c++)a.B[c].element.style.display="none";eS(a)};
cS=function(a){g.I.call(this);this.B=a;this.A=new Nq(0,0,.4,0,.2,1,1,1);this.l=new g.wq(this.o,window,this);g.J(this,this.l)};
gS=function(a,b,c){var d=b.Eb(c),e=g.W(a),f=d.xc(e,"default.jpg");g.U.call(this,{D:"a",W:["ytp-video-menu-item","ytp-button"],N:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},G:[{D:"div",J:"ytp-video-menu-item-index",G:[String(c+1)]},{D:"div",J:"ytp-video-menu-item-now-playing",G:["\u25b6"]},{D:"div",J:"ytp-video-menu-item-thumbnail",N:{style:f?"background-image: url("+f+");":null}},{D:"div",J:"ytp-video-menu-item-title",G:[d.title]},{D:"div",
J:"ytp-video-menu-item-author",G:[d.author]}]});this.g=a;this.Pa=c;this.fa("click",this.l)};
hS=function(a){jR.call(this,a,{D:"div",J:"ytp-playlist-menu",N:{role:"dialog",id:nw()},G:[{D:"div",J:"ytp-playlist-menu-header",G:[{D:"div",J:"ytp-playlist-menu-title",G:[{D:"a",J:"ytp-playlist-menu-title-name",N:{href:"{{playlisturl}}"},G:["{{title}}"]},{D:"button",W:["ytp-playlist-menu-close","ytp-button"],N:{"aria-label":g.S("YTP_CLOSE")},G:[g.vO()]}]},{D:"div",J:"ytp-playlist-menu-subtitle",G:["{{subtitle}}"]}]},{D:"div",J:"ytp-playlist-menu-items",N:{role:"menu"}}]},250);this.M(this.Z["ytp-playlist-menu-close"],
"click",this.qb);this.M(this.Z["ytp-playlist-menu-title-name"],"click",this.dI);this.l=a;this.B=this.F=this.g=null;this.Ba=this.Z["ytp-playlist-menu-items"];this.C=new g.Rt(this);g.J(this,this.C);this.o=[];this.hide()};
iS=function(a,b){if(a.g!=b)if(a.g&&a.g.unsubscribe("shuffle",a.wl,a),a.g=b,a.F=null,b){b.subscribe("shuffle",a.wl,a);var c=b.author;a.update({title:b.title,subtitle:g.S(c?"YTP_PLAYLIST_AUTHOR_AND_POSITION":"YTP_PLAYLIST_POSITION",{AUTHOR:c,CURRENT_POSITION:String(b.Pa+1),PLAYLIST_LENGTH:String(b.getLength())}),playlisturl:a.l.getVideoUrl(!0)});a.wl()}else a.Na()&&a.hide();else a.g&&a.wl()};
jS=function(a,b,c){var d={title:"{{title}}","aria-owns":String(c.element.id),"aria-haspopup":"true","aria-label":g.S("YTP_PLAYLIST")};g.U.call(this,{D:"button",W:["ytp-playlist-menu-button","ytp-button"],N:d,G:[{D:"div",J:"ytp-playlist-menu-button-icon",G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-playlist"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{D:"div",J:"ytp-playlist-menu-button-text",G:["{{text}}"]}]});this.o=a;this.g=null;this.A=b.ib();this.M(a,"videodatachange",this.B);this.M(a,"onPlaylistUpdate",this.B);this.M(a,"presentingplayerstatechange",this.l);this.M(a,"appresize",this.l);this.hide();this.B();g.Ke(this,wR(this.A,this.element));this.fa("click",(0,g.A)(c.fg,c,this.element,!1))};
kS=function(a,b){g.U.call(this,{D:"button",W:["ytp-replay-button","ytp-button"],N:{title:g.S("YTP_REPLAY")},G:[EO()]});this.g=a;this.M(a,"presentingplayerstatechange",this.o);this.fa("click",this.l,this);var c=g.yK(a);g.vw(this,g.V(c,2));wR(b.ib(),this.element)};
lS=function(a,b){var c=nw();c={D:"div",J:"ytp-share-panel",N:{id:nw(),role:"dialog","aria-labelledby":c},G:[{D:"button",W:["ytp-share-panel-close","ytp-button"],N:{title:g.S("YTP_CLOSE")},G:[g.vO()]},{D:"div",J:"ytp-share-panel-inner-content",G:[{D:"div",J:"ytp-share-panel-title",N:{id:c},G:[g.S("YTP_SHARE")]},{D:"a",W:["ytp-share-panel-link","ytp-no-contextmenu"],N:{href:"{{link}}",target:"_blank",title:g.S("YTP_SHARE_LINK"),"aria-label":g.S("YTP_SHARE_LINK")},G:["{{linkText}}"]},{D:"label",J:"ytp-share-panel-include-playlist",
G:[{D:"input",J:"ytp-share-panel-include-playlist-checkbox",N:{type:"checkbox",checked:!0}},g.S("YTP_SHARE_WITH_PLAYLIST_2")]},{D:"div",J:"ytp-share-panel-loading-spinner",G:[CQ()]},{D:"div",J:"ytp-share-panel-service-buttons",G:["{{buttons}}"]},{D:"div",J:"ytp-share-panel-error",G:[g.S("YTP_SHARE_PANEL_ERROR")]}]}]};jR.call(this,a,c,250);this.g=a;this.l=b.ib();this.o=[];this.L=this.Z["ytp-share-panel-inner-content"];this.C=this.Z["ytp-share-panel-close"];this.M(this.C,"click",this.qb);g.Ke(this,
wR(this.l,this.C));this.F=this.Z["ytp-share-panel-include-playlist-checkbox"];this.M(this.F,"click",this.iu);this.B=this.Z["ytp-share-panel-link"];g.Ke(this,wR(this.l,this.B));this.fa("click",this.cH);this.M(a,"videoplayerreset",this.hide);this.M(a,"fullscreentoggled",this.eE);this.hide()};
sea=function(a){switch(a){case "facebook":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-share-facebook"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};case "googleplus":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-share-googleplus"]}:{D:"svg",N:{height:"100%",version:"1.0",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M34.3,0H3.7C1.7,0,0,1.7,0,3.7v30.5c0,2,1.7,3.7,3.7,3.7h30.5c2,0,3.7-1.7,3.7-3.7V3.7C38,1.7,36.3,0,34.3,0z M13.3,28.5c-5.2,0-9.5-4.3-9.5-9.5c0-5.2,4.3-9.5,9.5-9.5c2.6,0,4.7,.9,6.4,2.5l-2.7,2.7c-1-0.9-2.2-1.4-3.6-1.4 c-3.1,0-5.6,2.6-5.6,5.7s2.5,5.7,5.6,5.7c2.8,0,4.7-1.6,5.1-3.8h-5.1v-3.6h8.9c0.1,.6,.2,1.3,.2,2C22.4,24.6,18.8,28.5,13.3,28.5 z M34.2,19.6H31v3.2h-2.2v-3.2h-3.2v-2.2h3.2v-3.2H31v3.2h3.2V19.6z",
fill:"#dc4537"}}]};case "twitter":return g.nO?{D:"div",W:["ytp-icon","ytp-icon-share-twitter"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};default:return null}};
mS=function(a){for(var b=g.q(a.o),c=b.next();!c.done;c=b.next())c=c.value,g.uw(c),g.Le(c);a.o=[]};
nS=function(a,b,c,d){g.U.call(this,{D:"button",W:["ytp-button","ytp-share-button"],N:{title:g.S("YTP_SHARE"),"aria-haspopup":"true","aria-owns":c.element.id,"data-tooltip-opaque":String(g.W(a).I)},G:[{D:"div",J:"ytp-share-icon",G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-sharrow"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z"}}]}]},
{D:"div",J:"ytp-share-title",G:["{{share}}"]}]});this.g=a;this.o=d;this.F=c;this.B=this.l=!1;WK(a,this.element,this,28664);this.fa("click",this.C);this.M(a,"videodatachange",this.A);this.M(a,"appresize",this.A);this.A();g.Ke(this,wR(b.ib(),this.element))};
oS=function(a){jR.call(this,a,{D:"button",W:["ytp-skip-intro-button","ytp-popup","ytp-button"],G:[{D:"div",J:"ytp-skip-intro-button-text",G:[g.S("YTP_SKIP_INTRO")]},{D:"div",J:"ytp-skip-intro-button-icon",G:[zO()]}]},100);var b=this;this.g=a;this.o=!1;this.l=this.B=window.NaN;this.F=function(){return b.show()};
this.C=function(){return b.hide()};
this.M(this.g,"videodatachange",function(a,d){"dataloaded"==a&&(b.B=d.ls,b.l=d.ks);if((0,window.isNaN)(b.B)||(0,window.isNaN)(b.l))b.o&&(g.PK(b.g,"intro"),b.g.removeEventListener("crn_intro",b.F),b.g.removeEventListener("crx_intro",b.C),b.hide(),b.o=!1);else{b.g.addEventListener("crn_intro",b.F);b.g.addEventListener("crx_intro",b.C);var c=new g.mF(b.B,b.l,{priority:7,namespace:"intro"});g.MK(b.g,[c]);b.o=!0}});
this.M(this.element,"click",function(){b.g.wb(b.l/1E3)})};
pS=function(a,b){g.U.call(this,{D:"button",W:["ytp-airplay-button","ytp-button"],N:{title:g.S("YTP_AIRPLAY")},G:["{{icon}}"]});this.g=a;this.fa("click",this.o);this.M(a,"airplayactivechange",this.l);this.M(a,"airplayavailabilitychange",this.l);this.l();g.Ke(this,wR(b.ib(),this.element))};
rS=function(a){g.ww.call(this,{D:"div",J:"ytp-gradient-bottom"});this.l=g.Dd("CANVAS");this.l.width=1;this.g=this.l.getContext("2d");this.o=window.NaN;qS(this,g.zK(a).Fa().height)};
qS=function(a,b){if(a.g){var c=Math.floor(.4*b);c=Math.max(c,47);var d=c+2;if(a.o!=d){a.o=d;a.l.height=d;a.g.clearRect(0,0,1,d);var e=a.g.createLinearGradient(0,2,0,2+c),f=c-42;e.addColorStop(0,"rgba(0, 0, 0, 0)");e.addColorStop(f/c,"rgba(0, 0, 0, 0.3)");e.addColorStop(1,"rgba(0, 0, 0, 0.68)");a.g.fillStyle=e;a.g.fillRect(0,2,1,c);a.element.style.height=d+"px";a.element.style.backgroundImage="url("+a.l.toDataURL()+")"}}};
sS=function(a,b,c,d,e){var f=b.Jo/b.rows,k=Math.min(c/(b.Ko/b.columns),d/f),l=b.Ko*k,m=b.Jo*k;l=Math.floor(l/b.columns)*b.columns;m=Math.floor(m/b.rows)*b.rows;var n=l/b.columns,p=m/b.rows,u=-b.Pq*n,v=-b.Zb*p;e&&45>=f&&(p-=1/k);n-=2/k;a=a.style;a.width=n+"px";a.height=p+"px";e||(d=(d-p)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+u+"px "+v+"px/"+l+"px "+m+"px";if(e)return new g.gd(n,
p)};
tS=function(a,b){g.ww.call(this,{D:"div",J:"ytp-storyboard",G:[{D:"div",J:"ytp-storyboard-filmstrip",G:[{D:"div",J:"ytp-storyboard-thumbnail"}]},{D:"div",J:"ytp-storyboard-lens",G:[{D:"div",J:"ytp-storyboard-lens-thumbnail"},{D:"div",J:"ytp-storyboard-lens-timestamp-wrapper",G:[{D:"span",J:"ytp-storyboard-lens-timestamp"}]}]}]});this.l=a;this.V=b.ib();this.L=new g.fm(this.FA,250,this);g.J(this,this.L);this.H=g.zK(a).Fa().width;this.g=this.Z["ytp-storyboard-filmstrip"];this.aa=this.Z["ytp-storyboard-lens"];
this.da=this.Z["ytp-storyboard-lens-thumbnail"];this.ha=this.Z["ytp-storyboard-lens-timestamp"];this.X=this.Z["ytp-storyboard-thumbnail"];g.Jd(this.X);this.I=0;this.O=!1;this.K=this.A=this.o=window.NaN;this.gb=this.B=null;this.C=new g.Rt(this);g.J(this,this.C);this.F=new g.iP(this,100);g.J(this,this.F);this.M(this.l,"appresize",this.Vz);this.M(this.l,"presentingplayerstatechange",this.MD)};
uS=function(a,b){var c=!!a.gb;c&&a.gb.unsubscribe("l",a.Ml,a);a.gb=b&&g.CD(b);a.O=!!b&&b.pa;a.gb?(c||(a.C.M(a.l,"videodatachange",a.ND),a.C.M(a.l,"progresssync",a.Wk),a.C.M(a.l,"videoplayerreset",a.Wk)),a.gb.subscribe("l",a.Ml,a),a.K=window.NaN,a.o=window.NaN,a.A=window.NaN,a.Wk(),a.F.show(200)):(c&&g.Tt(a.C),a.L.stop(),g.Fu(a.I),a.F.hide(),a.F.stop())};
vS=function(a,b,c,d){var e=a.X.cloneNode(!1);a=oC(a.gb,b,c);sS(e,a,c,d);return e};
wS=function(a){g.U.call(this,{D:"div",J:"ytp-storyboard-framepreview",G:[{D:"div",J:"ytp-storyboard-framepreview-img"}]});this.B=this.Z["ytp-storyboard-framepreview-img"];this.g=a;this.gb=null;this.A=window.NaN;this.l=new g.Rt(this);g.J(this,this.l);this.o=new g.iP(this,100);g.J(this,this.o);this.M(this.g,"presentingplayerstatechange",this.OD)};
yS=function(a,b){var c=!!a.gb;a.gb=b&&g.CD(b);a.gb?(c||(a.l.M(a.g,"videodatachange",a.QD),a.l.M(a.g,"progresssync",a.PD),a.l.M(a.g,"appresize",a.Wz)),a.A=window.NaN,xS(a),a.o.show(200)):(c&&g.Tt(a.l),a.o.hide(),a.o.stop())};
xS=function(a){var b=a.g.xa(),c=g.zK(a.g).Fa(),d=nC(a.gb,c.width);b=a.gb.g[d].Mi(b);b!=a.A&&(a.A=b,qC(a.gb,b,c.width),b=oC(a.gb,b,c.width),sS(a.B,b,c.width,c.height))};
AS=function(a,b){g.U.call(this,{D:"button",W:["ytp-fullscreen-button","ytp-button"],N:{title:"{{title}}"},G:["{{icon}}"]});this.l=a;this.B=b;this.g=null;this.o=wR(b.ib(),this.element);this.A=new g.P(this.bz,2E3,this);g.J(this,this.A);this.M(a,"fullscreentoggled",this.kw);this.M(a,"presentingplayerstatechange",this.fu);this.fa("click",this.RD);if(tt()){var c=g.zK(this.l);this.M(c,xt(),this.Qu);this.M(c,wt(window.document),this.SD)}g.W(a).ma||zS(this);this.fu();this.kw(a.isFullscreen())};
zS=function(a){if(!a.g){var b=g.S(null!=rt(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],window.document.body)?"YTP_FULLSCREEN_GENERIC_ERROR":"YTP_FULLSCREEN_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/);a.g=new jR(a.l,{D:"div",W:["ytp-popup","ytp-generic-popup"],N:{role:"alert",tabindex:"0"},G:[b[0],{D:"a",N:{href:"https://support.google.com/youtube/answer/6276924",target:"_blank"},G:[b[2]]},b[4]]},100,!0);a.g.hide();g.J(a,a.g);a.g.subscribe("show",
(0,g.A)(a.B.Uj,a.B,a.g));g.TK(a.l,a.g.element,4);a.element.setAttribute("aria-disabled",!0);a.element.setAttribute("aria-haspopup",!0);a.o();a.o=null}};
BS=function(a){var b={D:"div",J:"ytp-multicam-menu",N:{role:"dialog"},G:[{D:"div",J:"ytp-multicam-menu-header",G:[{D:"div",J:"ytp-multicam-menu-title",G:[g.S("YTP_SWITCH_CAMERA"),{D:"button",W:["ytp-multicam-menu-close","ytp-button"],N:{"aria-label":g.S("YTP_CLOSE")},G:[g.vO()]}]}]},{D:"div",J:"ytp-multicam-menu-items"}]};jR.call(this,a,b,250);this.o=new g.Rt(this);g.J(this,this.o);this.M(this.Z["ytp-multicam-menu-close"],"click",this.qb);this.g=a;this.Ba=this.Z["ytp-multicam-menu-items"];this.l=
[];this.hide()};
CS=function(a,b,c){g.U.call(this,{D:"button",W:["ytp-multicam-button","ytp-button"],N:{title:g.S("YTP_SWITCH_CAMERA"),"aria-haspopup":"true","data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-switch-camera"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});this.g=a;this.A=!1;this.l=b.ib();this.B=new g.P(this.F,400,this);g.J(this,this.B);this.fa("click",(0,g.A)(c.fg,c,this.element,!1));this.M(a,"presentingplayerstatechange",g.B(this.o,!1));this.M(a,"videodatachange",this.C);this.o(!0);g.Ke(this,wR(this.l,this.element))};
DS=function(){g.I.call(this);this.B=null;this.A=this.g=0;this.o=new g.wq(this.l,null,this);g.J(this,this.o)};
ES=function(a,b){if("path"==b.D)return b.N.d;if(b.G)for(var c=0;c<b.G.length;c++){var d=b.G[c];if(d&&!g.w(d)&&(d=ES(a,d)))return d}};
IS=function(a,b,c){c=ES(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=nw();b=b.getElementsByTagName("use");for(var k=0;k<b.length;k++)b[k].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=FS(e),m=FS(c);GS(a,function(a){d.setAttribute("d",HS(l,m,a))},200)};
GS=function(a,b,c){a.B=b;a.A=g.yu();a.g=c;a.l()};
FS=function(a){var b=[];a=a.match(tea);for(var c=0;c<a.length;c++){var d=(0,window.parseFloat)(a[c]);b.push((0,window.isNaN)(d)?a[c]:d)}return b};
HS=function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e];d=g.va(f)?d+(f+(b[e]-f)*c):d+f}return d};
KS=function(a,b){var c=g.W(a);g.U.call(this,{D:"button",W:["ytp-mute-button","ytp-button"],N:c.O?{title:"{{title}}"}:{"aria-disabled":"true","aria-haspopup":"true"},G:["{{icon}}"]});this.updateValue("icon",KO());this.g=a;this.aa=b.ib();this.H=this.K=this.I=this.O=window.NaN;this.C=[];this.B=[];this.F=this.o=!1;g.W(this.g).T||(this.l=new g.pw({D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"defs",G:[{D:"clipPath",N:{id:"ytp-svg-volume-animation-mask"},G:[{D:"path",N:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},
{D:"path",N:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{D:"path",J:"ytp-svg-volume-animation-mover",N:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{D:"clipPath",N:{id:"ytp-svg-volume-animation-slash-mask"},G:[{D:"path",J:"ytp-svg-volume-animation-mover",N:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{D:"path",Ia:!0,W:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],N:{"clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",
fill:"#fff"}},{D:"path",Ia:!0,W:["ytp-svg-fill","ytp-svg-volume-animation-hider"],N:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.J(this,this.l),this.T=this.l.Z["ytp-svg-volume-animation-speaker"],this.ma=this.T.getAttribute("d"),this.C=g.od("ytp-svg-volume-animation-mover",this.l.element),this.B=g.od("ytp-svg-volume-animation-hider",this.l.element));this.A=null;this.V=new DS;g.J(this,this.V);this.L=new DS;g.J(this,this.L);
this.fa("click",this.da);this.M(a,"appresize",this.Mc);this.M(a,"onVolumeChange",this.ha);var d=null;c.O?g.Ke(this,wR(b.ib(),this.element)):(c=g.S("YTP_VOLUME_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/),d=new jR(a,{D:"span",W:["ytp-popup","ytp-generic-popup"],N:{tabindex:"0"},G:[c[0],{D:"a",N:{href:"https://support.google.com/youtube/?p=noaudio",target:"_blank"},G:[c[2]]},c[4]]},100,!0),g.J(this,d),d.hide(),d.subscribe("show",(0,g.A)(b.Uj,b,d)),g.TK(a,d.element,4));this.X=d;WK(a,this.element,
this,28662);this.Mc(g.zK(a).Fa());JS(this,a.Nb(),a.isMuted())};
JS=function(a,b,c){var d=c?0:b/100,e=g.W(a.g);if(e.T)d=0==d?KO():0<d&&.5>d?JO():IO(),d!=a.A&&(a.updateValue("icon",d),a.A=d);else{b=0==d?1:50<b?1:0;if(a.I!=b){var f=a.O;(0,window.isNaN)(f)?LS(a,b):GS(a.V,(0,g.A)(function(a){LS(this,f+(this.I-f)*a)},a),250);
a.I=b}d=0==d?1:0;if(a.H!=d){var k=a.K;(0,window.isNaN)(k)?MS(a,d):GS(a.L,(0,g.A)(function(a){MS(this,k+(this.H-k)*a)},a),250);
a.H=d}}e.O&&(a.updateValue("title",c?g.S("YTP_UNMUTE"):g.S("YTP_MUTE")),NS(a.aa))};
LS=function(a,b){a.O=b;var c=a.ma;b&&(c+=HS(uea,vea,b));a.T.setAttribute("d",c)};
MS=function(a,b){a.K=b;for(var c=20*b,d=0;d<a.C.length;d++)a.C[d].setAttribute("transform","translate("+c+", "+c+")");var e;1==b?e=KO():e=a.l;for(c=0;c<a.B.length;c++)a.B[c].style.display=0==b?"none":"";e!=a.A&&(a.updateValue("icon",e),a.A=e)};
OS=function(a,b){g.U.call(this,{D:"button",W:["ytp-pip-button","ytp-button"],N:{title:g.S("YTP_PIP")},G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-pip"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}]});
this.g=a;this.fa("click",this.l);g.Ke(this,wR(b.ib(),this.element))};
g.QS=function(a,b){g.U.call(this,{D:"button",W:["ytp-play-button","ytp-button"],N:{title:"{{title}}","aria-label":"{{label}}"},G:["{{icon}}"]});this.l=a;this.o=null;this.A=b.ib();this.g=null;this.B=new DS;g.J(this,this.B);this.M(a,"fullscreentoggled",this.C);this.M(a,"presentingplayerstatechange",this.F);this.M(a,"videodatachange",this.C);PS(this,g.yK(a));this.fa("click",this.H,this)};
RS=function(a){switch(a){case 1:return CO();case 2:return BO();case 3:return EO();case 4:return HO();default:return null}};
PS=function(a,b){var c=g.GD(a.l.Y()),d=!1;if(pE(b))var e=c?4:2;else g.V(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.o!=e){switch(e){case 2:var f=g.S("YTP_PAUSE");break;case 3:f=g.S("YTP_REPLAY");break;case 1:f=g.S("YTP_PLAY");break;case 4:f=g.S("YTP_STOP")}3==e?(a.g||(a.g=wR(a.A,a.element)),a.update({title:f,label:null,icon:RS(e)})):(a.g&&(a.g(),a.g=null),a.update({title:null,label:f}),(c=RS(e))&&a.o&&3!=a.o&&!g.W(a.l).T?IS(a.B,a.element,c):a.updateValue("icon",c));NS(a.A);a.o=e}};
g.TS=function(a,b,c){if(c){var d="ytp-next-button";var e=zO()}else d="ytp-prev-button",e=DO();g.U.call(this,{D:"a",W:[d,"ytp-button"],N:{title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},G:[e]});this.g=a;this.K=b.ib();this.o=c;this.l=this.C=null;this.I=!1;this.F=this.H=this.A=null;this.B=!1;this.M(a,"fullscreentoggled",this.yh);this.M(a,"videodatachange",
this.yh);this.M(a,"onPlaylistUpdate",this.yh);this.o||this.M(a,"appresize",this.Mc);this.M(a,"mdxpreviousnextchange",function(){SS(this);this.Mc()});
this.yh()};
US=function(a){a.l&&a.l.unsubscribe("shuffle",a.yh,a)};
VS=function(a){return!!a.l&&!a.o&&!!a.C&&!a.C.pa&&3<=a.g.xa()&&2!=a.g.Ga()};
WS=function(a){var b=g.xK(g.sK(a.g));return b?a.o?b.hasNext():b.qe():!1};
SS=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=g.W(a.g),d=AK(a.g),e=a.o&&g.UK(a.g),f=WS(a);if(a.B)b.title=g.S("YTP_REPLAY");else if(d){var k=null;a.l&&(k=a.l.Eb(a.o?tF(a.l):uF(a.l)));if(k){if(k.videoId){var l=a.l.listId;b.url=c.getVideoUrl(k.videoId,l?l.toString():void 0)}b.text=k.title;b.duration=k.lengthSeconds?g.qP(k.lengthSeconds):null;b.preview=k.xc(c,"mqdefault.jpg")}b.title=g.S(a.o?"YTP_NEXT":"YTP_PREVIOUS")}else e&&(a.C.suggestions&&a.C.suggestions.length&&
(k=g.bS(a.C.suggestions[0]),b.url=k.mk(c),b.text=k.title,b.duration=k instanceof g.mD?g.qP(k.lengthSeconds):null,b.preview=k.xc(c,"mqdefault.jpg")),b.title=g.S("YTP_NEXT"));b.disabled=!e&&!d&&!f;a.update(b);a.I=!!b.url;e||d||a.B||f?a.A||(a.A=wR(a.K,a.element),a.H=a.fa("click",a.aE,a)):a.A&&(a.A(),a.A=null,a.Qa(a.H),a.H=null);NS(a.K)};
XS=function(){this.l=this.position=this.A=this.g=this.B=this.o=this.width=window.NaN};
g.ZS=function(a,b){g.ww.call(this,{D:"div",J:"ytp-progress-bar-container",N:{"aria-disabled":"true"},G:[{D:"div",W:["ytp-progress-bar",g.W(a).g?"ytp-mobile":""],N:{tabindex:"0",role:"slider","aria-label":g.S("YTP_SEEK_SLIDER"),"aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},G:[{D:"div",J:"ytp-progress-bar-padding"},{D:"div",J:"ytp-progress-list",G:[{D:"div",W:["ytp-play-progress","ytp-swatch-background-color"]},{D:"div",
J:"ytp-load-progress"},{D:"div",J:"ytp-hover-progress"},{D:"div",J:"ytp-clip-start-exclude"},{D:"div",J:"ytp-clip-end-exclude"},{D:"div",J:"ytp-ad-progress-list"},{D:"div",J:"ytp-marker-crenellation-list"},{D:"div",J:"ytp-marker-progress-list"}]},{D:"div",J:"ytp-scrubber-container",G:[{D:"div",W:["ytp-scrubber-button","ytp-swatch-background-color"],G:[{D:"div",J:"ytp-scrubber-pull-indicator"}]}]}]},{D:"div",J:"ytp-bound-time-left",G:["{{boundTimeLeft}}"]},{D:"div",J:"ytp-bound-time-right",G:["{{boundTimeRight}}"]},
{D:"div",J:"ytp-clip-start",N:{title:g.S("YTP_WATCH_ALL")},G:["{{clipstarticon}}"]},{D:"div",J:"ytp-clip-end",N:{title:g.S("YTP_WATCH_ALL")},G:["{{clipendicon}}"]}]});this.updateValue("clipstarticon",uO());this.updateValue("clipendicon",tO());this.l=a;this.Ca=b.ib();this.Sa=!1;this.A=this.Ja=0;this.V=1;this.Pb=this.H=0;this.o=null;this.Wa=!1;this.I=this.ma=0;this.Yb=this.Z["ytp-ad-progress-list"];this.qc=this.Z["ytp-marker-progress-list"];this.Va=this.Z["ytp-marker-crenellation-list"];this.O={};this.ha=
{};this.K=window.Infinity;var c=b.ib();this.X=this.Z["ytp-clip-end"];g.Ke(this,wR(c,this.X));this.sa=new g.Vt(this.X,!0);g.J(this,this.sa);this.sa.subscribe("hoverstart",this.Iu,this);this.sa.subscribe("hoverend",this.Hu,this);this.M(this.X,"click",this.vl);this.Ua=this.Z["ytp-clip-end-exclude"];this.Cc=this.Z["ytp-clip-start-exclude"];this.L=0;this.aa=this.Z["ytp-clip-start"];g.Ke(this,wR(c,this.aa));this.ua=new g.Vt(this.aa,!0);g.J(this,this.ua);this.ua.subscribe("hoverstart",this.Iu,this);this.ua.subscribe("hoverend",
this.Hu,this);this.M(this.aa,"click",this.vl);this.zb=this.Z["ytp-load-progress"];this.da=0;this.Oc=this.Z["ytp-play-progress"];this.jb=this.Z["ytp-hover-progress"];this.F=0;this.Ab=this.Z["ytp-progress-bar"];this.B=null;this.Pc=this.Z["ytp-scrubber-button"];this.Qc=this.Z["ytp-scrubber-container"];this.ya=new g.dd;this.bb=new XS;this.g=new FP(0,0);this.C=this.Oa=!1;this.kb=null;this.M(a,"presentingplayerstatechange",this.Rz);this.M(a,"videodatachange",this.hu);this.M(a,"videoplayerreset",this.Qz);
this.M(a,"cuerangesadded",this.ax);this.M(a,"cuerangesremoved",this.YI);this.M(a,"cuerangemarkersupdated",this.ax);this.M(a,"onPlaybackQualityChange",this.Uz);YS(this,a.Y(),!0)};
g.aT=function(a){$S(a);var b=a.l.xa();(b<a.L||b>a.K)&&a.vl()};
$S=function(a){if(a.A){var b=a.l.Qf(),c=new FP(b.seekableStart,b.seekableEnd),d=HP(c,b.loaded,0);b=HP(c,b.current,0);var e=a.g.l!=c.l||a.g.g!=c.g;a.g=c;bT(a,b,d);e&&g.cT(a);dT(a)}};
YS=function(a,b,c){c=void 0===c?!1:c;var d=!!b&&b.Uc();a.Oa=d&&b.Me;eT(a,a.l.Ac());c&&(d?(c=b.clipEnd,a.L=b.clipStart,a.K=c,fT(a),bT(a,a.F,a.da)):a.vl(),b=a.Ca,1==b.g&&b.Yd());$S(a)};
gT=function(a){return!!a&&a.Uc()&&!!a.Da&&a.Da.video.isAccelerated&&a.Da.video.o};
hT=function(a,b){a.Wa=b;g.O(a.zb,"ytp-fast-load",b)};
iT=function(a,b,c,d){b=g.$c(b,0,a.C?60:40);a.H=b;var e=a.V,f=Math.max(a.g.getLength()/a.A,1);a.V=b/(a.C?60:40)*(f-1)+1;b=a.A*a.V;a.I=g.$c(d*b-c,0,b-a.A);e!=a.V&&g.cT(a)};
g.cT=function(a){var b=jT(a),c=-b.o/b.g,d=(-b.o+b.width)/b.g,e=g.Md(a.Va),f=0;if(a.H>.2*(a.C?60:40)){var k=c*(a.g.getLength()/60),l=d*(a.g.getLength()/60);for(k=Math.ceil(k);k<l;k++){var m=e[f];m||(m=g.Dd("DIV"),a.Va.appendChild(m));f++;m.className=0==k%60?"ytp-60m-progress":0==k%30?"ytp-30m-progress":0==k%15?"ytp-15m-progress":"ytp-1m-progress";var n=(60*k/a.g.getLength()-c)*b.g;m.style.left=n+"px"}}b=a.Oa?a.g.g:0;a.update({boundTimeLeft:g.qP(GP(a.g,c)-b),boundTimeRight:g.qP(GP(a.g,d)-b)});for(c=
e.length-1;c>=f;c--)g.Jd(e[c]);a.element.style.height=a.H+(a.C?8:5)+"px";a.P("height-change",a.H);a.Pc.style.height=a.H+(a.C?20:13)+"px";for(var p in a.O)kT(a,a.O[p],a.ha[p]);fT(a);bT(a,a.F,a.da)};
jT=function(a){var b=a.ya.x,c=a.A*a.V;b=g.$c(b,0,a.A);a.bb.update(b,a.A,-a.I,-(c-a.I-a.A));return a.bb};
bT=function(a,b,c){a.F=b;a.da=c;var d=jT(a),e=a.g.g,f=GP(a.g,a.F);a.update({ariamin:Math.floor(a.g.l),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:g.S("YTP_PROGRESS_LABEL_2",{PLAY_PROGRESS:g.qP(f),DURATION:g.qP(e)})});e=HP(a.g,a.L,0);var k=HP(a.g,a.K,1);f=g.$c(b,e,k);c=a.Wa?1:g.$c(c,e,k);g.wh(a.Qc,"transform","translateX("+(b*d.g+d.o)+"px)");lT(a,a.Oc,d,e,f);lT(a,a.zb,d,e,c)};
lT=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.g+c.o,0)+"px";d=g.$c((e-d)*c.g+c.o,0,c.width);(void 0===f?0:f)||g.W(a.l).g?b.style.width=d+"px":g.wh(b,"transform","scalex("+(c.width?d/c.width:0)+")")};
fT=function(a){var b=a.L>a.g.l,c=0<a.g.g&&a.K<a.g.g;g.O(a.element,"ytp-clip-start-enabled",b);g.O(a.element,"ytp-clip-end-enabled",c);b=b?HP(a.g,a.L,0):0;c=c?HP(a.g,a.K,1):1;a.aa.style.left=Math.round(1E3*b)/10+"%";a.X.style.left=Math.round(1E3*c)/10+"%";a.Cc.style.width=Math.round(1E3*b)/10+"%";a.Ua.style.left=Math.round(1E3*c)/10+"%";a.Ua.style.width=Math.round(1E3*(1-c))/10+"%"};
dT=function(a){var b=jT(a);lT(a,a.jb,b,a.F,b.l);g.O(a.jb,"ytp-hover-progress-light",b.l>a.F)};
kT=function(a,b,c){var d=jT(a),e=HP(a.g,b.start/1E3,0),f=vba(b,a.C),k=f/d.width;switch(b.style){case "ytp-chapter-marker":var l=e+k/2;e-=k/2;c.style.borderRadius=f+"px";break;default:l=HP(a.g,b.end/1E3,1),k!=Number.POSITIVE_INFINITY&&(e=g.$c(e,0,l-k)),l=Math.min(l,e+k)}b.color&&(c.style.background=b.color);lT(a,c,d,e,l,!0);c.className=b.style};
mT=function(a,b){var c=b.oa;a.O[c]==b&&(g.Jd(a.ha[c]),delete a.O[c],delete a.ha[c])};
eT=function(a,b){b?a.B||(a.element.removeAttribute("aria-disabled"),a.B=new g.Vt(a.Ab,!0),a.B.subscribe("hovermove",a.nH,a),a.B.subscribe("hoverend",a.mH,a),a.B.subscribe("dragstart",a.lH,a),a.B.subscribe("dragmove",a.pH,a),a.B.subscribe("dragend",a.oH,a),a.kb=a.fa("keydown",a.bE)):a.B&&(a.element.setAttribute("aria-disabled",!0),a.Qa(a.kb),a.B.cancel(),a.B.dispose(),a.B=null)};
nT=function(a,b){MR.call(this,g.S("YTP_ANNOTATIONS"),5);this.A=b;this.o=a;this.g=!1;this.M(a,"videodatachange",this.B);this.M(a,"onApiChange",this.B);this.subscribe("select",this.C,this);this.B()};
g.oT=function(a,b,c,d,e,f){var k=g.zw({"aria-haspopup":"true"});g.yw.call(this,k,b,a);this.o=d;this.H=!1;this.C=null;this.l={};this.B=new g.zR(c,void 0,a,e,f);g.J(this,this.B);this.fa("keydown",this.cE);this.fa("click",this.open)};
g.pT=function(a,b){g.CR(a.B);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],k=a.l[f],l=f==a.C;l&&(d=!0);k&&k.priority==-e?(l=a,g.xw(l.l[f],l.ae(f,!0)),delete a.l[f]):(k=new g.yw({D:"div",W:["ytp-menuitem"],N:{tabindex:"0",role:"menuitemradio","aria-checked":l?"true":void 0},G:[{D:"div",W:["ytp-menuitem-label"],G:["{{label}}"]}]},-e,a.ae(f,!0)),k.fa("click",(0,g.A)(a.dE,a,f)));c[f]=k;g.AR(a.B,k,!0)}d||(a.C=null);for(var m in a.l)a.l[m].dispose();a.l=c};
qT=function(a,b){g.oT.call(this,g.S("YTP_AUDIO_TRACK_TITLE"),2,a,b);this.g=a;this.I=new g.U({D:"div",G:[{D:"span",G:[g.S("YTP_AUDIO_TRACK_TITLE")]},{D:"span",J:"ytp-menuitem-label-count",G:["{{content}}"]}]});g.xw(this,this.I);this.K={};this.M(a,"videodatachange",this.F);this.M(a,"onPlaybackAudioChange",this.F);this.F()};
rT=function(a,b){MR.call(this,g.S("YTP_AUTOPLAY"),6);this.C=b;this.g=a;this.A=!1;this.o=[];this.M(a,"presentingplayerstatechange",this.B);this.subscribe("select",this.H,this);this.B()};
sT=function(a,b){g.oT.call(this,g.S("YTP_QUALITY_TITLE"),1,a,b);g.M(this.B.element,"ytp-quality-menu");this.g=a;this.I={};this.F="unknown";this.M(a,"videodatachange",this.A);this.M(a,"videoplayerreset",this.A);this.M(a,"onPlaybackQualityChange",this.K);this.A()};
tT=function(a,b,c){a=a.I[b];var d=g.hv[b];d=a?a.qualityLabel:d?d+"p":g.S("YTP_AUTO");c={D:"span",W:c,G:[]};a&&a.isAccelerated&&a.o&&c.G.push({D:"div",J:"ytp-menuitem-badge-container",G:[{D:"svg",N:{fill:"#00838f",height:"11px",viewBox:"0 0 48 48",width:"11px"},G:[{D:"path",N:{d:"M0 0v48h48V0H0zm10.6 30.64L4 24.05l6.69-6.69 6.6 6.59-6.69 6.69zM24 44l-6.7-6.7 13.35-13.35-13.32-13.28L24 4l20 20-20 20z"}},{D:"path",N:{d:"M 24,44 44,24 24,4 17.33,10.67 30.65,23.95 17.3,37.3 z M 10.6,30.64 17.29,23.95 10.69,17.36 4,24.05 z",
fill:"#fff"}}]}]});c.G.push(d);var e;"highres"==b?e="8K":"hd2880"==b?e="5K":"hd2160"==b?e="4K":0==b.indexOf("hd")&&(e="HD");e&&(c.G.push(" "),c.G.push({D:"sup",J:"ytp-swatch-color",G:[e]}));return c};
uT=function(a,b,c){g.U.call(this,{D:"button",W:["ytp-button","ytp-settings-button"],N:{"aria-haspopup":"true","aria-owns":nw(),title:g.S("YTP_SETTINGS")},G:[g.GO()]});this.o=c;this.g=a;this.A=!0;this.fa("click",this.B);this.M(a,"onPlaybackQualityChange",this.l);this.M(a,"videodatachange",this.l);this.M(a,"webglsettingschanged",this.l);this.M(a,"appresize",this.Mc);g.Ke(this,wR(b.ib(),this.element));this.l();this.Mc(g.zK(a).Fa())};
vT=function(a,b){a.A=!!b;a.Mc(g.zK(a.g).Fa())};
wT=function(a,b){g.oT.call(this,g.S("YTP_SPEED_TITLE"),4,a,b);this.g=a;this.A=null;this.M(a,"presentingplayerstatechange",this.ju);this.ju()};
yT=function(a,b,c,d){var e=g.S("YTP_VIDEO_SUBTITLES_OVERRIDE"),f=new g.zR(b,void 0,e);g.oT.call(this,xT(d),a,b,c,e,function(){return g.HR(c,f)});
g.M(this.element,"ytp-subtitles-options-menu-item");this.I=d.option.toString();a=d.options;this.K=g.lb(a,this.mu,this);this.F=f;g.J(this,this.F);b=new g.yw({D:"div",J:"ytp-menuitemtitle",G:[g.S("YTP_VIDEO_SUBTITLES_OVERRIDE_DESC")]},0);g.J(this,b);g.AR(this.F,b,!0);this.A=new g.yw({D:"div",J:"ytp-menuitem",N:{role:"menuitemradio",tabindex:"0"},G:[{D:"div",J:"ytp-menuitem-label",G:[g.S("YTP_ON")]}]},-1);g.J(this,this.A);g.AR(this.F,this.A,!0);this.M(this.A.element,"click",g.B(this.nu,!0));this.g=new g.yw({D:"div",
J:"ytp-menuitem",N:{role:"menuitemradio",tabindex:"0"},G:[{D:"div",J:"ytp-menuitem-label",G:[g.S("YTP_OFF")]}]},-2);g.J(this,this.g);g.AR(this.F,this.g,!0);this.M(this.g.element,"click",g.B(this.nu,!1));g.pT(this,(0,g.H)(a,this.mu))};
xT=function(a){return(a.message?g.S(a.message):a.text)||""};
zT=function(a,b){g.zR.call(this,a,void 0,g.S("YTP_OPTIONS"));this.g={};for(var c=0;c<g.$R.length;c++){var d=g.$R[c],e=new yT(-c,a,b,d);g.J(this,e);e.subscribe("settingChange",this.l,this);this.g[d.option.toString()]=e;g.AR(this,e,!0)}c=new g.yw(g.zw(),-g.$R.length,g.S("YTP_RESET"));g.J(this,c);c.fa("click",(0,g.A)(this.l,this,"reset",!0));g.AR(this,c,!0)};
AT=function(a,b){for(var c in b){var d=a.g[c];if(d){var e=b[c].toString(),f=!!b[c+"Override"];d.l[e]&&(d.be(e),d.A.element.setAttribute("aria-checked",!f),d.g.element.setAttribute("aria-checked",f))}}};
BT=function(a,b){g.oT.call(this,g.S("YTP_AUTO_TRANSLATE"),0,a,b);this.g={}};
CT=function(a,b){var c=new zT(a,b);g.oT.call(this,g.S("YTP_SUBTITLES"),3,a,b,g.S("YTP_OPTIONS"),function(){return g.HR(b,c)});
this.g=a;this.A={};this.L=new g.P(g.B(this.lu,!1),3E3,this);g.J(this,this.L);this.I=new g.U({D:"div",G:[{D:"span",G:[g.S("YTP_SUBTITLES")]},{D:"span",J:"ytp-menuitem-label-count",G:["{{content}}"]}]});g.J(this,this.I);g.xw(this,this.I);this.F=new BT(a,b);g.J(this,this.F);this.F.subscribe("select",this.nE,this);this.K=c;g.J(this,this.K);this.K.subscribe("settingChange",this.mE,this);this.M(a,"videodatachange",this.Pi);this.M(a,"onApiChange",this.Pi);this.M(a,"onCaptionsTrackListChanged",this.Pi);this.M(a,
"captionschanged",this.Pi);this.Pi()};
DT=function(a){g.DR.call(this,a,"ytp-settings-menu");this.l=a;this.o=new g.zR(a);g.J(this,this.o);this.F=null;this.X=!1;this.hide();g.HR(this,this.o)};
ET=function(a){if(!a.X){a.X=!0;var b=new sT(a.l,a);g.J(a,b);b=new CT(a.l,a);g.J(a,b);b=new nT(a.l,a);g.J(a,b);g.W(a.l).Ca&&(b=new wT(a.l,a),g.J(a,b));g.W(a.l).yd&&(b=new rT(a.l,a),g.J(a,b));b=new qT(a.l,a);g.J(a,b);vT(a.F,a.o.Ba.length)}};
FT=function(a,b){ET(a);g.AR(a.o,b);vT(a.F,a.o.Ba.length)};
GT=function(a,b){a.Na()&&1>=a.o.Ba.length&&a.hide();g.BR(a.o,b);vT(a.F,a.o.Ba.length)};
wea=function(a,b){a.F=b;a.element.id=b.element.getAttribute("aria-owns")};
HT=function(a,b,c){g.U.call(this,{D:"button",J:"ytp-button",N:{title:g.S("YTP_MDX_TOOLTIP"),"aria-haspopup":"true"},G:["{{icon}}"]});this.g=a;this.A=c;this.o=null;this.M(a,"onMdxReceiversChange",this.l);this.M(a,"presentingplayerstatechange",this.l);this.M(a,"appresize",this.l);this.l();this.fa("click",this.B,this);g.Ke(this,wR(b.ib(),this.element))};
IT=function(a,b){g.U.call(this,{D:"button",W:["ytp-size-button","ytp-button"],N:{title:"{{title}}"},G:["{{icon}}"]});this.g=a;this.A=b.ib();this.o=null;this.B=new DS;g.J(this,this.B);this.M(a,"sizestylechange",this.l);this.M(a,"fullscreentoggled",this.l);this.M(a,"presentingplayerstatechange",this.l);this.l();this.fa("click",this.C);g.Ke(this,wR(this.A,this.element))};
JT=function(a,b){g.U.call(this,{D:"button",W:["ytp-subtitles-button","ytp-button"],N:{"aria-pressed":"{{pressed}}",title:g.S("YTP_SUBTITLES_TOOLTIP")},G:[wO()]});this.l=a;this.M(a,"videodatachange",this.g);this.M(a,"appresize",this.g);this.M(a,"onApiChange",this.g);this.M(a,"onCaptionsTrackListChanged",this.g);this.M(a,"captionschanged",this.g);this.g();this.fa("click",this.o);g.Ke(this,wR(b.ib(),this.element))};
g.KT=function(a,b){g.U.call(this,{D:"div",W:["ytp-time-display","notranslate"],G:[{D:"span",J:"ytp-time-current",G:["{{currenttime}}"]},{D:"span",J:"ytp-time-separator",G:[" / "]},{D:"span",J:"ytp-time-duration",G:["{{duration}}"]}]});this.A=new g.U({D:"button",W:["ytp-live-badge","ytp-button"],N:{disabled:"true"},G:[g.S("YTP_LIVE")]});g.J(this,this.A);this.A.ca(this.element);this.B=a;this.I=b.ib();this.l=null;this.C=this.o=!1;this.H=this.F=null;this.fa("click",this.K);this.M(a,"presentingplayerstatechange",
this.g);this.M(a,"appresize",this.g);this.M(a,"videodatachange",this.L);var c=a.Y();c&&(this.o=c.pa,g.O(this.element,"ytp-live",this.o));this.g()};
MT=function(a,b,c){g.U.call(this,{D:"div",J:"ytp-volume-panel",N:{role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:"0"},G:[{D:"div",J:"ytp-volume-slider",G:[{D:"div",J:"ytp-volume-slider-handle"}]}]});this.g=a;this.C=b;this.L=c;this.I=!1;this.F=b.Ic();this.T=this.A=0;this.O=this.Z["ytp-volume-slider"];this.V=this.Z["ytp-volume-slider-handle"];this.H=new g.Vt(this.O,!0);g.J(this,this.H);this.H.subscribe("dragstart",this.VH,
this);this.H.subscribe("dragmove",this.UH,this);this.H.subscribe("dragend",this.TH,this);this.K=null;this.l=this.o=this.B=!1;this.M(a,"onVolumeChange",this.qE);this.M(a,"appresize",this.Mc);this.M(a,"fullscreentoggled",this.oE);this.M(a,"onShowControls",this.Hq);this.M(a,"onHideControls",this.Hq);this.M(this.element,"keydown",this.WH);this.M(this.element,"focus",g.B(this.ou,!0));this.M(this.element,"blur",g.B(this.ou,!1));this.Mc(g.zK(a).Fa());LT(this,a.Nb(),a.isMuted())};
LT=function(a,b,c){var d=Math.floor(b),e=d+"% "+g.S("YTP_SCREENREADER_VOLUME_SETTING")+(c?" "+g.S("YTP_SCREENREADER_VOLUME_MUTED"):"");c=c?0:b/100;a.updateValue("valuenow",d);a.updateValue("valuetext",e);a.V.style.left=(a.F?60:40)*c+"px";a.A=b};
NT=function(a,b,c,d,e){var f=a.o||a.B||a.l||a.I;a.o=b;a.B=c;a.l=d;a.I=e;b=a.o||a.B||a.l||a.I;f!=b&&(b?a.K=a.M(a.element,"wheel",a.pE):(a.Qa(a.K),a.K=null),g.O(a.L,"ytp-volume-slider-active",b))};
OT=function(a,b){var c=g.W(a),d=TB(c);0==d.indexOf("www.")&&(d=d.substring(4));var e=["ytp-youtube-button","ytp-button","yt-uix-sessionlink"];(c="gaming"==c.playerStyle)&&e.push("ytp-youtube-gaming-button");g.U.call(this,{D:"a",W:e,N:{href:"{{url}}",target:"_blank",title:g.S("YTP_URL_NAVIGATE_TO",{WEBSITE:d}),"data-sessionlink":"feature=player-button"},G:[c?g.nO?{D:"div",W:["ytp-icon","ytp-icon-logo-gaming"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 122 36",width:"100%"},G:[{D:"path",
Ia:!0,J:"ytp-svg-fill",N:{d:"M 45.32 10 L 45.32 25.81 L 47.39 25.81 L 47.64 24.75 L 47.68 24.75 C 47.87 25.13 48.17 25.43 48.56 25.65 C 48.95 25.87 49.37 25.98 49.84 25.98 C 50.69 25.98 51.32 25.59 51.72 24.81 C 52.12 24.03 52.32 22.81 52.32 21.15 L 52.32 19.39 C 52.34 18.13 52.26 17.15 52.11 16.44 C 51.96 15.74 51.72 15.23 51.38 14.91 C 51.04 14.60 50.57 14.44 49.98 14.44 C 49.52 14.44 49.08 14.57 48.68 14.83 C 48.48 14.96 48.31 15.11 48.15 15.29 C 48.00 15.46 47.86 15.65 47.75 15.86 L 47.74 15.86 L 47.74 10 L 45.32 10 z M 94.83 10.25 C 93.91 10.25 93.48 10.61 93.48 11.81 C 93.48 13.05 93.91 13.35 94.83 13.35 C 95.77 13.35 96.19 13.05 96.19 11.81 C 96.19 10.66 95.78 10.25 94.83 10.25 z M 67.44 10.31 C 64.14 10.31 63.40 12.21 63.40 16.34 L 63.40 20.15 C 63.40 24.06 64.21 26.00 66.56 26.00 C 68.00 26.00 68.86 25.31 69.19 23.91 L 69.55 25.81 L 71.03 25.81 L 71.03 18.25 L 71.03 18.24 L 67.41 18.24 L 67.41 20.19 L 68.82 20.19 L 68.82 21.47 C 68.82 23.38 68.38 24.10 67.34 24.10 C 66.32 24.10 66 23.12 66 20.52 L 66 16.22 C 66 13.11 66.37 12.19 67.35 12.19 C 68.01 12.19 68.40 12.58 68.53 14.02 C 68.57 14.50 68.59 15.10 68.58 15.83 L 70.83 15.68 C 71.14 12.21 70.35 10.31 67.44 10.31 z M 14.06 10.55 L 13.01 15.24 C 12.72 16.61 12.54 17.58 12.46 18.16 L 12.39 18.16 C 12.27 17.35 12.08 16.38 11.83 15.23 L 10.83 10.56 L 8.33 10.56 L 11.18 20.86 L 11.18 25.80 L 13.66 25.80 L 13.66 20.85 L 16.55 10.55 L 14.06 10.55 z M 30.33 10.56 L 30.33 12.58 L 32.83 12.58 L 32.83 25.81 L 35.27 25.81 L 35.27 12.58 L 37.76 12.58 L 37.76 10.56 L 30.33 10.56 z M 113.35 13.31 C 112.35 13.40 111.89 14.17 111.65 15.17 C 111.12 14.68 110.37 14.47 109.41 14.47 C 107.10 14.47 106.06 15.76 106.06 18.80 L 106.06 19.03 C 106.06 21.16 106.61 22.30 107.57 22.85 C 106.66 23.21 106.14 23.92 106.16 24.76 C 106.18 25.61 106.75 26.05 107.51 26.34 C 106.45 26.61 105.76 27.27 105.76 28.40 C 105.76 30.03 107.14 30.96 109.36 30.96 C 111.91 30.96 113.39 29.76 113.39 27.74 C 113.39 23.92 108.06 25.30 108.07 23.82 C 108.07 23.59 108.17 23.34 108.44 23.16 C 108.73 23.23 109.06 23.25 109.41 23.25 C 111.54 23.25 112.74 22.21 112.74 19.01 L 112.74 18.77 C 112.74 17.70 112.60 16.84 112.33 16.19 C 112.42 16.12 112.51 16.05 112.60 15.99 C 112.90 15.82 113.25 15.73 113.66 15.73 L 113.35 13.31 z M 85.40 14.43 C 84.45 14.43 83.64 14.88 83.07 15.71 C 82.99 15.82 82.91 15.95 82.84 16.08 L 82.81 16.08 L 82.58 14.66 L 80.60 14.66 L 80.60 25.81 L 83.11 25.81 L 83.11 16.91 C 83.38 16.45 83.77 16.21 84.21 16.21 C 84.75 16.21 84.99 16.66 84.99 17.57 L 84.99 25.81 L 87.5 25.81 L 87.5 17.39 C 87.5 17.23 87.50 17.08 87.48 16.93 C 87.75 16.45 88.14 16.21 88.58 16.21 C 89.12 16.21 89.36 16.66 89.36 17.57 L 89.36 25.81 L 91.88 25.81 L 91.88 17.39 C 91.88 15.52 91.29 14.42 89.77 14.43 C 88.77 14.43 87.91 14.95 87.33 15.91 C 87.05 14.97 86.45 14.43 85.40 14.43 z M 102.56 14.43 C 101.77 14.43 101.08 14.77 100.56 15.38 C 100.38 15.59 100.22 15.82 100.08 16.08 L 100.03 16.08 L 99.82 14.66 L 97.83 14.66 L 97.83 25.81 L 100.34 25.81 L 100.34 16.91 C 100.61 16.45 100.99 16.21 101.43 16.21 C 101.99 16.21 102.24 16.72 102.24 17.63 L 102.24 25.81 L 104.75 25.81 L 104.75 17.39 C 104.75 15.52 104.12 14.42 102.56 14.43 z M 19.43 14.46 C 18.59 14.46 17.92 14.63 17.41 14.96 C 16.89 15.29 16.50 15.82 16.26 16.55 C 16.02 17.28 15.91 18.23 15.91 19.43 L 15.91 21.06 C 15.91 22.24 16.02 23.20 16.23 23.91 C 16.44 24.62 16.80 25.15 17.30 25.49 C 17.80 25.83 18.49 26 19.39 26 C 20.25 26 20.92 25.83 21.42 25.5 C 21.92 25.17 22.29 24.63 22.51 23.91 C 22.74 23.19 22.85 22.25 22.85 21.06 L 22.85 19.43 C 22.85 18.23 22.73 17.28 22.50 16.56 C 22.27 15.84 21.91 15.31 21.41 14.97 C 20.91 14.63 20.25 14.46 19.43 14.46 z M 56.83 14.47 C 55.59 14.47 54.70 14.84 54.19 15.61 C 53.68 16.38 53.42 17.60 53.42 19.27 L 53.42 21.23 C 53.42 22.86 53.67 24.05 54.17 24.83 C 54.55 25.40 55.13 25.77 55.92 25.91 C 56.18 25.96 56.46 25.99 56.77 25.99 C 57.80 25.99 58.60 25.74 59.16 25.23 C 59.73 24.72 60.01 23.94 60.01 22.91 C 60.01 22.74 60.01 22.61 60 22.51 L 57.83 22.39 C 57.81 23.06 57.74 23.54 57.60 23.83 C 57.46 24.12 57.21 24.27 56.83 24.27 C 56.55 24.27 56.35 24.18 56.22 24.02 C 56.09 23.86 56.00 23.61 55.96 23.25 C 55.92 22.89 55.90 22.36 55.90 21.64 L 55.90 21.08 L 60.07 21.08 L 60.07 19.16 C 60.07 17.99 59.97 17.08 59.78 16.41 C 59.59 15.75 59.28 15.25 58.82 14.93 C 58.36 14.62 57.69 14.47 56.83 14.47 z M 75.83 14.47 C 73.32 14.47 72.24 15.61 72.46 18.32 L 74.66 18.5 C 74.68 16.77 74.93 16.18 75.73 16.18 C 76.44 16.18 76.59 16.72 76.59 18.27 L 76.59 19.08 C 73.41 19.93 72.22 21.31 72.22 23.33 C 72.22 25.15 73.30 26.06 74.68 26.06 C 75.79 26.06 76.46 25.44 76.82 24.46 L 76.85 24.46 L 77.10 25.82 L 79.01 25.82 L 79.01 18.38 C 79.01 15.78 78.18 14.45 75.83 14.47 z M 24.15 14.66 L 24.15 22.99 C 24.15 24.02 24.32 24.77 24.67 25.25 C 25.03 25.74 25.58 25.99 26.32 25.99 C 27.39 25.99 28.19 25.47 28.72 24.44 L 28.76 24.44 L 28.99 25.81 L 30.94 25.81 L 30.94 14.66 L 28.44 14.66 L 28.44 23.51 C 28.34 23.72 28.2 23.89 28 24.02 C 27.8 24.15 27.58 24.23 27.36 24.23 C 27.10 24.23 26.93 24.12 26.82 23.91 C 26.71 23.70 26.66 23.34 26.66 22.84 L 26.66 14.66 L 24.15 14.66 z M 37.01 14.66 L 37.01 22.99 C 37.01 24.02 37.20 24.77 37.55 25.25 C 37.82 25.62 38.19 25.85 38.67 25.94 C 38.83 25.97 39.00 25.99 39.18 25.99 C 40.25 25.99 41.05 25.47 41.58 24.44 L 41.64 24.44 L 41.85 25.81 L 43.82 25.81 L 43.82 14.66 L 41.32 14.66 L 41.32 23.51 C 41.22 23.72 41.06 23.89 40.86 24.02 C 40.66 24.15 40.46 24.23 40.24 24.23 C 39.98 24.23 39.79 24.12 39.68 23.91 C 39.57 23.70 39.52 23.34 39.52 22.84 L 39.52 14.66 L 37.01 14.66 z M 93.63 14.66 L 93.63 25.82 L 96.02 25.82 L 96.02 14.66 L 93.63 14.66 z M 56.83 16.15 C 57.10 16.15 57.28 16.23 57.41 16.38 C 57.53 16.53 57.62 16.79 57.67 17.16 C 57.72 17.53 57.75 18.07 57.75 18.78 L 57.75 19.58 L 55.91 19.58 L 55.91 18.78 C 55.91 18.05 55.93 17.52 55.97 17.16 C 56.01 16.81 56.09 16.55 56.22 16.39 C 56.35 16.23 56.55 16.15 56.83 16.15 z M 19.36 16.18 C 19.72 16.18 19.96 16.37 20.10 16.74 C 20.24 17.11 20.32 17.69 20.32 18.49 L 20.32 21.96 C 20.32 22.78 20.24 23.38 20.10 23.74 C 19.97 24.11 19.72 24.28 19.36 24.28 C 19.01 24.28 18.77 24.10 18.64 23.74 C 18.51 23.38 18.43 22.78 18.43 21.96 L 18.43 18.49 C 18.43 17.69 18.51 17.11 18.65 16.74 C 18.79 16.37 19.02 16.18 19.36 16.18 z M 109.41 16.19 C 110.12 16.19 110.33 16.73 110.33 18.75 L 110.33 19.14 C 110.33 21.14 110.09 21.63 109.41 21.63 C 108.73 21.63 108.46 21.14 108.46 19.14 L 108.46 18.75 C 108.46 16.74 108.70 16.19 109.41 16.19 z M 48.84 16.22 C 49.09 16.22 49.29 16.31 49.43 16.51 C 49.57 16.71 49.68 17.05 49.73 17.52 C 49.78 17.99 49.81 18.68 49.81 19.55 L 49.81 21 L 49.82 21 C 49.82 21.81 49.79 22.45 49.72 22.91 C 49.65 23.37 49.54 23.70 49.38 23.89 C 49.22 24.08 49.01 24.17 48.74 24.17 C 48.53 24.17 48.33 24.12 48.16 24.02 C 47.98 23.92 47.85 23.78 47.74 23.58 L 47.74 17.25 C 47.82 16.95 47.96 16.70 48.17 16.50 C 48.38 16.31 48.60 16.22 48.84 16.22 z M 76.60 20.36 L 76.60 23.60 C 76.36 23.99 75.98 24.30 75.58 24.30 C 74.98 24.30 74.74 23.81 74.74 22.88 C 74.74 21.66 75.29 20.78 76.60 20.36 z M 108.67 26.65 C 110.00 26.90 111.34 27.06 111.30 28.02 C 111.28 28.64 110.64 29.16 109.48 29.16 C 108.33 29.16 107.76 28.59 107.76 27.81 C 107.76 27.27 108.11 26.85 108.67 26.65 z"}}]}:
g.nO?{D:"div",W:["ytp-icon","ytp-icon-logo"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 67 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 45.09 10 L 45.09 25.82 L 47.16 25.82 L 47.41 24.76 L 47.47 24.76 C 47.66 25.14 47.94 25.44 48.33 25.66 C 48.72 25.88 49.16 25.99 49.63 25.99 C 50.48 25.99 51.1 25.60 51.5 24.82 C 51.9 24.04 52.09 22.82 52.09 21.16 L 52.09 19.40 C 52.12 18.13 52.05 17.15 51.90 16.44 C 51.75 15.74 51.50 15.23 51.16 14.91 C 50.82 14.59 50.34 14.44 49.75 14.44 C 49.29 14.44 48.87 14.57 48.47 14.83 C 48.27 14.96 48.09 15.11 47.93 15.29 C 47.78 15.46 47.64 15.65 47.53 15.86 L 47.51 15.86 L 47.51 10 L 45.09 10 z M 8.10 10.56 L 10.96 20.86 L 10.96 25.82 L 13.42 25.82 L 13.42 20.86 L 16.32 10.56 L 13.83 10.56 L 12.78 15.25 C 12.49 16.62 12.31 17.59 12.23 18.17 L 12.16 18.17 C 12.04 17.35 11.84 16.38 11.59 15.23 L 10.59 10.56 L 8.10 10.56 z M 30.10 10.56 L 30.10 12.58 L 32.59 12.58 L 32.59 25.82 L 35.06 25.82 L 35.06 12.58 L 37.55 12.58 L 37.55 10.56 L 30.10 10.56 z M 19.21 14.46 C 18.37 14.46 17.69 14.63 17.17 14.96 C 16.65 15.29 16.27 15.82 16.03 16.55 C 15.79 17.28 15.67 18.23 15.67 19.43 L 15.67 21.06 C 15.67 22.24 15.79 23.19 16 23.91 C 16.21 24.62 16.57 25.15 17.07 25.49 C 17.58 25.83 18.27 26 19.15 26 C 20.02 26 20.69 25.83 21.19 25.5 C 21.69 25.17 22.06 24.63 22.28 23.91 C 22.51 23.19 22.63 22.25 22.63 21.06 L 22.63 19.43 C 22.63 18.23 22.50 17.28 22.27 16.56 C 22.04 15.84 21.68 15.31 21.18 14.97 C 20.68 14.63 20.03 14.46 19.21 14.46 z M 56.64 14.47 C 55.39 14.47 54.51 14.84 53.99 15.61 C 53.48 16.38 53.22 17.60 53.22 19.27 L 53.22 21.23 C 53.22 22.85 53.47 24.05 53.97 24.83 C 54.34 25.40 54.92 25.77 55.71 25.91 C 55.97 25.96 56.26 25.99 56.57 25.99 C 57.60 25.99 58.40 25.74 58.96 25.23 C 59.53 24.72 59.81 23.94 59.81 22.91 C 59.81 22.74 59.79 22.61 59.78 22.51 L 57.63 22.39 C 57.62 23.06 57.54 23.54 57.40 23.83 C 57.26 24.12 57.01 24.27 56.63 24.27 C 56.35 24.27 56.13 24.18 56.00 24.02 C 55.87 23.86 55.79 23.61 55.75 23.25 C 55.71 22.89 55.68 22.36 55.68 21.64 L 55.68 21.08 L 59.86 21.08 L 59.86 19.16 C 59.86 17.99 59.77 17.08 59.58 16.41 C 59.39 15.75 59.07 15.25 58.61 14.93 C 58.15 14.62 57.50 14.47 56.64 14.47 z M 23.92 14.67 L 23.92 23.00 C 23.92 24.03 24.11 24.79 24.46 25.27 C 24.82 25.76 25.35 26.00 26.09 26.00 C 27.16 26.00 27.97 25.49 28.5 24.46 L 28.55 24.46 L 28.76 25.82 L 30.73 25.82 L 30.73 14.67 L 28.23 14.67 L 28.23 23.52 C 28.13 23.73 27.97 23.90 27.77 24.03 C 27.57 24.16 27.37 24.24 27.15 24.24 C 26.89 24.24 26.70 24.12 26.59 23.91 C 26.48 23.70 26.43 23.35 26.43 22.85 L 26.43 14.67 L 23.92 14.67 z M 36.80 14.67 L 36.80 23.00 C 36.80 24.03 36.98 24.79 37.33 25.27 C 37.60 25.64 37.97 25.87 38.45 25.96 C 38.61 25.99 38.78 26.00 38.97 26.00 C 40.04 26.00 40.83 25.49 41.36 24.46 L 41.41 24.46 L 41.64 25.82 L 43.59 25.82 L 43.59 14.67 L 41.09 14.67 L 41.09 23.52 C 40.99 23.73 40.85 23.90 40.65 24.03 C 40.45 24.16 40.23 24.24 40.01 24.24 C 39.75 24.24 39.58 24.12 39.47 23.91 C 39.36 23.70 39.31 23.35 39.31 22.85 L 39.31 14.67 L 36.80 14.67 z M 56.61 16.15 C 56.88 16.15 57.08 16.23 57.21 16.38 C 57.33 16.53 57.42 16.79 57.47 17.16 C 57.52 17.53 57.53 18.06 57.53 18.78 L 57.53 19.58 L 55.69 19.58 L 55.69 18.78 C 55.69 18.05 55.71 17.52 55.75 17.16 C 55.79 16.81 55.87 16.55 56.00 16.39 C 56.13 16.23 56.32 16.15 56.61 16.15 z M 19.15 16.19 C 19.50 16.19 19.75 16.38 19.89 16.75 C 20.03 17.12 20.09 17.7 20.09 18.5 L 20.09 21.97 C 20.09 22.79 20.03 23.39 19.89 23.75 C 19.75 24.11 19.51 24.29 19.15 24.30 C 18.80 24.30 18.54 24.11 18.41 23.75 C 18.28 23.39 18.22 22.79 18.22 21.97 L 18.22 18.5 C 18.22 17.7 18.28 17.12 18.42 16.75 C 18.56 16.38 18.81 16.19 19.15 16.19 z M 48.63 16.22 C 48.88 16.22 49.08 16.31 49.22 16.51 C 49.36 16.71 49.45 17.05 49.50 17.52 C 49.55 17.99 49.58 18.68 49.58 19.55 L 49.58 21 L 49.59 21 C 49.59 21.81 49.57 22.45 49.5 22.91 C 49.43 23.37 49.32 23.70 49.16 23.89 C 49.00 24.08 48.78 24.17 48.51 24.17 C 48.30 24.17 48.11 24.12 47.94 24.02 C 47.76 23.92 47.62 23.78 47.51 23.58 L 47.51 17.25 C 47.59 16.95 47.75 16.70 47.96 16.50 C 48.17 16.31 48.39 16.22 48.63 16.22 z "}}]}]});
this.g=a;this.o=this.l=!1;WK(a,this.element,this,28666);this.fa("click",this.B);this.M(a,"videodatachange",this.A);this.A();g.Ke(this,wR(b.ib(),this.element))};
PT=function(a,b,c){g.Rt.call(this);var d=this,e=g.W(a);this.A=a;this.o=b;this.X=window.NaN;this.ba=null;this.U=c;this.U.subscribe("autohideupdate",this.Du,this);c=!wE(g.yK(a));var f;g.T(g.W(a).experiments,"html5_player_dynamic_bottom_gradient")?this.aa=f=new rS(a):f=new g.U({D:"div",J:"ytp-gradient-bottom"});g.J(this,f);g.TK(a,f.element,8);this.O=new g.iP(f,250,c,100);g.J(this,this.O);this.l=new g.U({D:"div",J:"ytp-chrome-bottom",G:[{D:"div",J:"ytp-chrome-controls"}]});g.J(this,this.l);g.TK(a,this.l.element,
8);this.K=new g.iP(this.l,250,c,100);g.J(this,this.K);c=this.l.element.children[0];e.B&&(c.style.background=e.ba);this.g=new DT(a);g.Ke(this.g,function(){a.H==d.g&&(a.H=null)});
g.J(this,this.g);a.H=this.g;g.TK(a,this.g.element,6);this.g.subscribe("show",this.NJ,this);this.g.subscribe("show",(0,g.A)(b.mw,b,this.g));this.C=new g.ZS(a,b);g.J(this,this.C);this.C.ca(this.l.element,0);f=new tS(a,b);g.J(this,f);g.TK(a,f.element,4);this.C.subscribe("height-change",f.mJ,f);f=new wS(a);g.J(this,f);g.TK(a,f.element,4);f=new g.pw({D:"div",J:"ytp-left-controls"});g.J(this,f);f.ca(c);var k=new g.TS(a,b,!1);g.J(this,k);k.ca(f.element);e.L||(k=new g.QS(a,b),g.J(this,k),k.ca(f.element));
k=new g.TS(a,b,!0);g.J(this,k);k.ca(f.element);var l=new g.U({D:"span"});g.J(this,l);l.ca(f.element);if(!e.da&&(this.B=new KS(a,b),g.J(this,this.B),this.B.ca(l.element),e.O)){k=new MT(a,b,this.l.element);g.J(this,k);k.ca(l.element);l=new g.Vt(l.element);g.J(this,l);var m=(0,g.A)(k.lw,k,!0);l.subscribe("hoverstart",m);l=new g.Vt(f.element);g.J(this,l);k=(0,g.A)(k.lw,k,!1);l.subscribe("hoverend",k)}this.T=new g.KT(a,b);g.J(this,this.T);this.T.ca(f.element);f=new g.pw({D:"div",J:"ytp-right-controls"});
g.J(this,f);f.ca(c);c=new JT(a,b);g.J(this,c);c.ca(f.element);c=new uT(a,b,this.g);g.J(this,c);wea(this.g,c);c.ca(f.element);c=new BS(a);g.J(this,c);g.TK(a,c.element,5);c.subscribe("show",(0,g.A)(b.Tj,b,c));c=new CS(a,b,c);g.J(this,c);c.ca(f.element);e.pf&&(this.F=new OT(a,b),g.J(this,this.F),this.F.ca(f.element));c=new IT(a,b);g.J(this,c);c.ca(f.element);e.zb&&(c=new HT(a,b,this.g),g.J(this,c),c.ca(f.element));e.nf&&(e=new pS(a,b),g.J(this,e),e.ca(f.element));ty()&&(e=new OS(a,b),g.J(this,e),e.ca(f.element));
this.V=new AS(a,b);g.J(this,this.V);this.V.ca(f.element);this.H=new g.wq(this.lE,null,this);g.J(this,this.H);this.I=null;this.M(a,"appresize",this.Bb);this.M(a,"fullscreentoggled",this.Bb);this.M(a,"presentingplayerstatechange",this.Fo);this.Bb()};
QT=function(a,b){if(wE(g.yK(a.A))||b){if(b){a.K.hide();a.O.hide();if(a.B){var c=a.B;c.F=!1;g.YK(c.g,c.element,c.o&&!1)}a.F&&(c=a.F,c.o=!1,g.YK(c.g,c.element,c.l&&!1));a.o.ib().fh(a.ia())}}else b||(a.K.show(),a.O.show(),a.B&&(c=a.B,c.F=!0,g.YK(c.g,c.element,c.o&&!0)),a.F&&(c=a.F,c.o=!0,g.YK(c.g,c.element,c.l&&!0)),a.Du())};
ST=function(a){var b=g.zK(a.A).Fa().width;return Math.max(b-2*RT(a),100)};
RT=function(a){var b=a.o.Ic();return 12*(g.W(a.A).B?0:b?2:1)};
g.TT=function(a,b,c,d,e,f,k,l,m,n,p,u){f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;if(p){c=g.W(u);p={href:p,"aria-label":a,tabindex:"-1"};if(g.JB(c)||g.KB(c))p.target="_blank";g.U.call(this,{D:"div",W:["ytp-button","ytp-sb"],G:[{D:"a",J:"ytp-sb-subscribe",N:p,G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",G:[b]}:""]}]});f&&g.M(this.element,"ytp-sb-classic")}else{g.U.call(this,
{D:"div",W:["ytp-button","ytp-sb"],G:[{D:"div",J:"ytp-sb-subscribe",N:{tabindex:"-1","aria-label":a},G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},a]},b?{D:"div",J:"ytp-sb-count",G:[b]}:""]},{D:"div",J:"ytp-sb-unsubscribe",N:{tabindex:"-1","aria-label":c},G:[{D:"div",J:"ytp-sb-text",G:[{D:"div",J:"ytp-sb-icon"},c]},d?{D:"div",J:"ytp-sb-count",G:[d]}:""]}]});var v=this;this.g=k;var D=this.Z["ytp-sb-subscribe"],C=this.Z["ytp-sb-unsubscribe"];f&&g.M(this.element,"ytp-sb-classic");if(e){l&&
g.M(this.element,"ytp-sb-subscribed");a=g.W(u);var N=null;"gaming"==a.playerStyle&&(N="gaming_channels");if(m){var fa=a.baseYtUrl+"subscription_ajax";var qa=function(){return{method:"POST",Ec:{action_create_subscription_to_channel:1,c:v.g},rb:{feature:m,silo_name:N},withCredentials:!0}};
var Oa=function(){return{method:"POST",Ec:{action_remove_subscriptions:1},rb:{c:v.g,silo_name:N,feature:m},withCredentials:!0}}}else if(n)fa="/subscription_service",qa=function(){return{method:"POST",
Ec:{action_subscribe:1},rb:{channel_ids:v.g,itct:n}}},Oa=function(){return{method:"POST",
Ec:{action_unsubscribe:1},rb:{channel_ids:v.g,itct:n}}};
else return;var L=function(){g.qs(fa,qa());u.ka("SUBSCRIBE");C.focus();C.removeAttribute("aria-hidden");D.setAttribute("aria-hidden",!0)},Tb=function(){g.qs(fa,Oa());
u.ka("UNSUBSCRIBE");D.focus();D.removeAttribute("aria-hidden");C.setAttribute("aria-hidden",!0)};
this.M(D,"click",L);this.M(C,"click",Tb);this.M(D,"keypress",function(a){13==a.keyCode&&L(a)});
this.M(C,"keypress",function(a){13==a.keyCode&&Tb(a)});
var be=(0,g.A)(this.l,this),Ed=(0,g.A)(this.o,this);u.addEventListener("SUBSCRIBE",be);u.addEventListener("UNSUBSCRIBE",Ed);g.Ke(this,function(){u.removeEventListener("SUBSCRIBE",be);u.removeEventListener("UNSUBSCRIBE",Ed)})}else g.M(D,"ytp-sb-disabled"),g.M(C,"ytp-sb-disabled")}};
g.VT=function(a,b,c,d,e,f){b=UT(b,c,f);d=d||375;e=e||440;if(b=window.open(b,"loginPopup","width="+d+",height="+e+",resizable=yes,scrollbars=yes",!0))c=g.hu("LOGGED_IN",function(b){g.iu(g.Tr("LOGGED_IN_PUBSUB_KEY",void 0));g.Sr("LOGGED_IN",!0);a(b)}),g.Sr("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((window.screen.width-d)/2,(window.screen.height-e)/2)};
UT=function(a,b,c){var d="/signin?context=popup";c&&(d=window.document.location.protocol+"//"+c+d);c=window.document.location.protocol+"//"+window.document.domain+"/post_login";a&&(c=Tg(c,"mode",a));a=Tg(d,"next",c);b&&(a=Tg(a,"feature",b));return a};
WT=function(a){var b=new g.U({D:"a",J:"ytp-title-channel-logo",N:{href:"{{channelLink}}",target:"_blank"}});g.U.call(this,{D:"div",J:"ytp-title",G:[{D:"div",J:"ytp-title-channel",G:[b,{D:"div",J:"ytp-title-channel-popup",G:[{D:"div",J:"ytp-title-channel-heading",G:[{D:"h2",J:"ytp-title-channel-text",G:[{D:"a",N:{href:"{{popupChannelLink}}",target:"_blank"},G:["{{popupChannelName}}"]}]},{D:"h3",J:"ytp-title-channel-subtext",G:["{{subscriberCount}}"]}]}]}]},{D:"div",J:"ytp-title-text",G:[{D:"a",W:["ytp-title-link",
"yt-uix-sessionlink"],N:{target:"_blank",href:"{{url}}","data-sessionlink":"feature=player-title"},G:["{{title}}"]},{D:"div",J:"ytp-title-subtext",G:[{D:"a",J:"ytp-title-channel-name",N:{href:"{{channelLink}}",target:"_blank"},G:["{{channelName}}"]},{D:"span",J:"ytp-title-view-count",G:["{{viewCount}}"]}]}]}]});g.J(this,b);this.g=a;this.o=null;this.O=this.Z["ytp-title-link"];this.l=this.Z["ytp-title-channel"];this.C=b;this.I=this.Z["ytp-title-channel-popup"];this.A=null;this.B=!1;this.F=this.L=this.K=
null;WK(a,this.element,this,23851);WK(a,b.element,this,36925);this.M(a,"videodatachange",this.H);this.M(a,"videoplayerreset",this.H);g.W(a).I&&xea(this);this.H()};
xea=function(a){var b=new g.U({D:"div",J:"ytp-title-beacon"});g.J(a,b);b.ca(a.l,0);b=g.W(a.g).uc?null:UT();var c=a.g.Y(),d=new g.TT(g.S("YTP_SUBSCRIBE"),null,g.S("YTP_SUBSCRIBED"),null,!0,!1,c.fj,c.subscribed,"embed_title",null,b,a.g);a.A=d;g.J(a,d);d.ca(a.I);WK(a.g,d.element,a,36926);b={D:"div",J:"ytp-title-notifications-on",N:{title:g.S("YTP_SUBSCRIBE_NOTIFY_ON",void 0,"")},G:[g.AO()]};c={title:g.S("YTP_SUBSCRIBE_NOTIFY_OFF",void 0,"")};var e=new g.U({D:"button",W:["ytp-button","ytp-title-notifications"],
G:[b,{D:"div",J:"ytp-title-notifications-off",N:c,G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-notifications-inactive"]}:{D:"svg",N:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},G:[{D:"path",N:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});g.J(a,e);e.ca(a.I);WK(a.g,e.element,a,36927);a.M(a.g,"SUBSCRIBE",function(){g.M(a.element,
"ytp-subscribed")});
a.M(a.g,"UNSUBSCRIBE",function(){a.B=!1;g.qq(a.element,"ytp-subscribed");g.qq(a.element,"ytp-notifications-enabled")});
a.M(a.l,"mouseenter",function(){if(524<=a.g.Jg().width){a.F.stop();var b=a.g.getRootNode();g.M(b,"ytp-title-channel-expanded");g.qq(b,"ytp-title-channel-collapsed");g.YK(a.g,d.element,!0);g.YK(a.g,e.element,!0)}});
a.M(a.l,"mouseleave",function(){a.F.start();g.YK(a.g,d.element,!1);g.YK(a.g,e.element,!1)});
a.M(a.l,"click",function(){g.XK(a.g,a.l)});
a.M(d.element,"click",function(){g.XK(a.g,d.element)});
a.M(e.element,"click",function(){g.XK(a.g,e.element);g.qs("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",rb:{channel_id:a.L,receive_all_updates:!a.B}});a.B=!a.B;g.O(a.element,"ytp-notifications-enabled",a.B)});
a.F=new g.P(function(){var b=a.g.getRootNode();g.oq(b,"ytp-title-channel-expanded")&&(g.qq(b,"ytp-title-channel-expanded"),g.M(b,"ytp-title-channel-collapsed"))},500);
g.J(a,a.F)};
XT=function(a){var b=a.g.Y(),c=2==a.g.Ga()&&b.isListed;c=b.videoId&&(c||g.W(a.g).I);var d=a.g.getRootNode();if(c&&b.videoId==a.K)g.M(d,"ytp-title-extra-info"),g.YK(a.g,a.C.element,!0);else if(g.qq(d,"ytp-title-extra-info"),g.YK(a.g,a.C.element,!1),c&&b.author&&b.channelPath&&b.profilePicture){c=b.videoId;d=b.fj;var e=b.author,f=b.channelPath,k=b.profilePicture;b=b.up;f=g.W(a.g).protocol+"://"+SB(g.W(a.g))+f;a.C.element.style.backgroundImage="url("+k+")";a.A&&(a.A.g=d);a.C.updateValue("channelLink",
f);a.updateValue("channelLink",f);2==a.g.Ga()?a.updateValue("channelName",e):a.updateValue("channelName","");a.updateValue("popupChannelLink",f);a.updateValue("popupChannelName",e);a.updateValue("subscriberCount",b);a.L=d;a.K=c;XT(a)}};
g.ZT=function(a,b){var c=g.zK(a).Fa();g.U.call(this,{D:"div",G:[{D:"div",J:"ytp-tooltip-bg",G:[{D:"div",J:"ytp-tooltip-duration",G:["{{duration}}"]}]},{D:"div",J:"ytp-tooltip-text-wrapper",G:[{D:"div",J:"ytp-tooltip-image"},{D:"div",J:"ytp-tooltip-title",G:["{{title}}"]},{D:"span",J:"ytp-tooltip-text",G:["{{text}}"]}]}]});this.L=a;this.ma=b;this.aa=g.W(a).g;this.F=this.Z["ytp-tooltip-bg"];this.sa=this.Z["ytp-tooltip-image"];this.ha=(0,g.A)(this.KG,this);this.O=(0,g.A)(this.NG,this);this.T=(0,g.A)(this.Yd,
this);this.l=null;this.H=new g.iP(this,100);g.J(this,this.H);this.g=null;this.K=!1;this.o=null;this.B=window.NaN;this.C="";this.da=c.width;this.I=!0;this.A=1;this.V=new g.P(this.GA,250,this);g.J(this,this.V);this.X=new g.P(this.Yd,5E3,this);g.J(this,this.X)};
aU=function(a,b){if(null!=a.g)if(b)switch(a.g){case 3:case 2:$T(a);a.H.show();break;default:a.H.show()}else a.H.hide();a.I=b};
wR=function(a,b){if(a.aa)return g.wa;b.addEventListener("mouseover",a.O);return(0,g.A)(function(){this.l==b&&this.Yd();b.removeEventListener("mouseover",this.O)},a)};
cU=function(a,b,c){if(a.g)if(3==a.g)a.Yd();else return;bU(a,b,3,c)};
bU=function(a,b,c,d){(0,window.isNaN)(a.B)||(a.B=window.NaN,a.F.style.background="");a.l=b;a.K=!!d;d?a.C=d:(a.C=b.getAttribute("title"),b.removeAttribute("title"));a.element.className="ytp-tooltip";if(d=b.getAttribute("data-tooltip-image"))a.sa.style.backgroundImage="url("+d+")";g.O(a.element,"ytp-tooltip-image-enabled",!!d);b=b.getAttribute("data-tooltip-opaque");g.O(a.element,"ytp-tooltip-opaque",!!b);a.g=c;a.L.addEventListener("appresize",a.T);a.I&&($T(a),a.H.show(0))};
$T=function(a){var b=a.l.getAttribute("data-tooltip-text");if(b&&!a.K){a.updateValue("text",b);var c=a.l.getAttribute("data-duration");a.update({title:a.C,duration:c});var d=a.l.getAttribute("data-preview"),e=160*a.A,f=90*a.A,k=160*a.A,l=90*a.A;a.F.style.width=e+"px";a.F.style.height=f+"px";a.F.style.backgroundImage=d?"url("+d+")":"";a.F.style.backgroundPosition=(e-k)/2+"px "+(f-l)/2+"px";a.F.style.backgroundSize=k+"px "+l+"px";g.pq(a.element,["ytp-text-detail","ytp-preview"]);g.O(a.element,"ytp-has-duration",
!!c)}else a.updateValue("text",a.C),g.rq(a.element,["ytp-text-detail","ytp-preview","ytp-has-duration"]);3==a.g?a.element.setAttribute("role","status"):a.element.removeAttribute("role");dU(a,!!b)};
dU=function(a,b,c){a.element.style.maxWidth=b?"":Math.min(a.da,300*a.A)+"px";a.ma.nl(a.element,a.l,c,1==a.g);a.element.style.top?g.M(a.element,"ytp-bottom"):a.element.style.bottom&&g.M(a.element,"ytp-top");3==a.g&&a.X.start()};
NS=function(a){a.l&&!a.K&&a.l.hasAttribute("title")&&(a.C=a.l.getAttribute("title"),a.l.removeAttribute("title"),a.I&&$T(a))};
eU=function(a,b){g.O(a.element,"ytp-preview",0<=b);if(!(0>b||b==a.B)){a.B=b;var c=160*a.A,d=160*a.A,e=oC(a.o,a.B,c);sS(a.F,e,c,d,!0);a.V.start()}};
yea=function(a,b,c){fU("add_to_watch_later_list",a,b,c)};
zea=function(a,b,c){fU("delete_from_watch_later_list",a,b,c)};
fU=function(a,b,c,d){g.qs(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",Ec:{feature:b.feature||null,authuser:b.uc||null,pageid:b.pageId||null},rb:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.wN||null,add_to_playlists:b.mN||null,plid:g.Tr("PLAYBACK_ID")||null},context:b.context,onError:b.onError,fb:function(a,c){b.fb.call(this,a,c)},
Kc:b.Kc,withCredentials:!!d})};
iU=function(a,b,c){g.U.call(this,{D:"button",W:["ytp-watch-later-button","ytp-button"],N:{title:"{{title}}","data-tooltip-image":"{{image}}","data-tooltip-opaque":String(g.W(a).I)},G:[{D:"div",J:"ytp-watch-later-icon",G:["{{icon}}"]},{D:"div",J:"ytp-watch-later-title",G:["{{watch_later}}"]}]});this.g=a;this.F=b.ib();this.H=c;this.B=null;this.C=this.A=this.o=this.l=!1;WK(a,this.element,this,28665);this.fa("click",this.rE,this);this.M(a,"videoplayerreset",this.sE);this.M(a,"appresize",this.Mc);this.Mc(g.zK(a).Fa());
a=g.W(this.g);c=g.Xu("yt-player-watch-later-pending");a.l&&c?(Nv(),gU(this,c.videoId)):hU(this,2);g.Ke(this,wR(b.ib(),this.element))};
gU=function(a,b){if(!a.o){a.o=!0;hU(a,3);var c=g.W(a.g);(a.l?zea:yea)({videoIds:b,uc:c.uc,pageId:c.pageId,onError:a.wI,fb:a.l?a.xI:a.vI,context:a},c.baseYtUrl,!0)}};
hU=function(a,b,c){if(b!=a.B){switch(b){case 3:var d=CQ();break;case 1:d=pO();break;case 2:d=g.nO?{D:"div",W:["ytp-icon","ytp-icon-watch-later"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z"}}]};break;case 4:d=g.nO?{D:"div",W:["ytp-icon","ytp-icon-alert"]}:
{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M21,7.91 L19.60,20.91 L16.39,20.91 L15,7.91 L21,7.91 Z M18,27.91 C16.61,27.91 15.5,26.79 15.5,25.41 C15.5,24.03 16.61,22.91 18,22.91 C19.38,22.91 20.5,24.03 20.5,25.41 C20.5,26.79 19.38,27.91 18,27.91 Z"}}]}}a.updateValue("icon",d);a.B=b}b=g.W(a.g);c?a.update({title:c,image:null}):b.userDisplayName?(c={USER_NAME:b.userDisplayName},a.update({title:a.l?g.S("YTP_ADDED_TO_WATCH_LATER_AS",
c):g.S("YTP_WATCH_LATER_AS_2",c),image:b.userDisplayImage})):a.update({title:g.S("YTP_WATCH_LATER_2"),image:null});NS(a.F)};
jU=function(a){g.U.call(this,{D:"a",W:["ytp-watermark","yt-uix-sessionlink"],N:{target:"_blank",href:"{{url}}","aria-label":g.S("YTP_URL_NAVIGATE_TO",{WEBSITE:TB(g.W(a))}),"data-sessionlink":"feature=player-watermark"},G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-watermark"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}]});
this.l=a;this.g=null;this.M(a,"videodatachange",this.o);this.M(a,"presentingplayerstatechange",this.B);a=g.yK(a);g.vw(this,!g.V(a,2));this.o()};
kU=function(a){pR.call(this,a);var b=g.W(a),c=g.zK(a);this.ya=48;this.ua=69;b.I&&(this.ya=42,this.ua=63);var d=g.W(this.g),e=d.T;if(vy("ytp-normal-css-loaded")){var f=vy("ytp-sprite-mode-css-loaded");e!=f&&g.Q(Error("Player sprite mode mismatch. playerInSpriteMode: "+e+", spriteModeCssServed: "+f+", isMobile: "+d.g),"WARNING")}this.O=null;this.H=[];d=new g.U({D:"div",J:"ytp-gradient-top"});g.J(this,d);g.TK(a,d.element,1);this.Sa=new g.iP(d,250,!0,100);g.J(this,this.Sa);this.A=new g.U({D:"div",J:"ytp-chrome-top"});
g.J(this,this.A);g.TK(a,this.A.element,1);this.Oa=new g.iP(this.A,250,!0,100);g.J(this,this.Oa);this.aa=[];this.F=new g.ZT(a,this);g.J(this,this.F);g.TK(a,this.F.element,4);b.l&&b.Pc&&(this.zb=new dS(a,this),g.J(this,this.zb),g.TK(a,this.zb.element,4));d=new hS(a);g.J(this,d);g.TK(a,d.element,5);d.subscribe("show",(0,g.A)(this.Tj,this,d));this.aa.push(d);d=new jS(a,this,d);g.J(this,d);d.ca(this.A.element);this.Ja=new WT(a);g.J(this,this.Ja);this.Ja.ca(this.A.element);d=new g.pw({D:"div",J:"ytp-chrome-top-buttons"});
g.J(this,d);d.ca(this.A.element);b.uk&&(this.ha=new iU(a,this,this.A.element),g.J(this,this.ha),this.ha.ca(d.element));e=new lS(a,this);g.J(this,e);g.TK(a,e.element,5);e.subscribe("show",(0,g.A)(this.Tj,this,e));this.aa.push(e);this.Ma=new nS(a,this,e,this.A.element);g.J(this,this.Ma);this.Ma.ca(d.element);b.lj&&(e=new oS(a),g.J(this,e),g.TK(a,e.element,4));this.U=new vR(a,this,this.A.element);g.J(this,this.U);this.U.ca(d.element);e=new xR(a,this.U);g.J(this,e);e.ca(d.element);(this.l="1"==b.o?new PT(a,
this,this.o):null)&&g.J(this,this.l);"3"==b.o&&(d=new kS(a,this),g.J(this,d),g.TK(a,d.element,8));this.I=new VR(a,this,this.C);g.J(this,this.I);this.I.subscribe("show",this.Ww,this);this.sa=!1;b.qf&&(d=new jU(a),g.J(this,d),g.TK(a,d.element,7));d=new IP(a,new rQ(a));g.J(this,d);g.TK(a,d.element,4);this.V=new g.U({D:"div",N:{tabindex:"0"}});this.V.fa("focus",this.oz,this);g.J(this,this.V);this.T=new g.U({D:"div",N:{tabindex:"0"}});this.T.fa("focus",this.pz,this);g.J(this,this.T);(this.ba=b.useTabletControls?
null:new XR(a,c,this.I,this.o,this.C,(0,g.A)(this.Xj,this)))&&g.J(this,this.ba);this.M(a,"fullscreentoggled",this.FD);this.M(a,"offlineslatestatechange",this.WG,this);this.M(a,"cardstatechange",this.hg,this)};
lU=function(a,b,c){b=c?b.lastElementChild:b.firstElementChild;for(var d=null;b;){if("none"!=Bh(b,"display")&&"true"!=b.getAttribute("aria-hidden")){var e=void 0;0<=b.tabIndex?e=b:e=lU(a,b,c);e&&(d?c?e.tabIndex>d.tabIndex&&(d=e):e.tabIndex<d.tabIndex&&(d=e):d=e)}b=c?b.previousElementSibling:b.nextElementSibling}return d};
g.mU=function(a){g.dL.call(this,a);this.load()};
nU=function(a,b){g.I.call(this);this.o=a||window.NaN;this.g=b||null;this.l=[]};
oU=function(){this.g=[];this.l=[];this.o=[]};
rU=function(a,b,c){c=g.Dd(c?"AUDIO":"VIDEO");g.Ia(c,Aea);g.Ft(c,"loadeddata",(0,g.A)(c.l,c));CB&&6<=pU&&g.Ft(c,"webkitbeginfullscreen",(0,g.A)(c.play,c));a.l.push(c);b?a.o.push(c):qU(a,c);return c};
qU=function(a,b){g.Sa(a.l,b)&&!g.Sa(a.g,b)&&(b.src||b.load(),g.Wa(a.o,b)||a.g.push(b))};
sU=function(a){g.I.call(this);this.l=null;for(var b=[],c=0;100>=c;c++)b.push(c/100);b={threshold:b};(this.g=window.IntersectionObserver?new window.IntersectionObserver((0,g.A)(this.o,this),b):null)&&this.g.observe(a)};
tU=function(a){var b=a.g,c=["html5-video-player"];b.B&&c.push("ytp-dni");g.U.call(this,{D:"div",W:c,N:{tabindex:"-1",id:a.sa.attrs.id},G:[{D:"div",J:"html5-video-container",N:{"data-layer":"0"}}]});b.Ck&&this.Vk("ytp-transparent");g.mt(this.element,"version",a.sa.assets.js);this.app=a;this.l=this.Z["html5-video-container"];this.X=!!this.l;this.o=new g.hh(0,0,0,0);this.g=null;this.B=new g.hh(0,0,0,0);this.F=this.L=this.K=window.NaN;this.H=!1;this.C=window.NaN;this.I=!1;this.A=null;this.addEventListener=
(0,g.A)(this.element.addEventListener,this.element);this.removeEventListener=(0,g.A)(this.element.removeEventListener,this.element);this.dispatchEvent=function(){};
this.O=(0,g.A)(function(){this.element.focus()},this);
WB(b)&&"blazer"!=b.playerStyle&&"mweb-polymer"!=b.playerStyle&&window.matchMedia&&(this.V="desktop-polymer"==b.playerStyle?[{query:window.matchMedia("(max-width: 656px)"),size:new g.gd(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.gd(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.gd(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.gd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),
size:new g.gd(854,480)},{query:window.matchMedia("(min-width: 1000px)"),size:new g.gd(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.gd(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.gd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.gd(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.gd(640,360)}]);this.T=b.Dk;g.dv({YTP_ADVERTISEMENT:"Advertisement",YTP_AD_BADGE:"Ad",
YTP_AD_NOTIFICATION:"Ad in $X_SECONDSs",YTP_AD_POD_POSITION:"$AD_INDEX of $ADS_COUNT",YTP_AD_PREVIEW_NONSKIPPABLE:"Video will play after ad",YTP_AD_PREVIEW_NONSKIPPABLE_COUNTDOWN:"Your video will begin in $TIME_REMAINING",YTP_AIRPLAY:"AirPlay",YTP_AUDIO_TRACK_TITLE:"Audio track",YTP_AUTO:"Auto",YTP_CAN_SKIP_AD_SOON:"You can skip to video in $TIME_REMAINING",YTP_CARDS_BUTTON_ARIA_LABEL:"Show cards",YTP_CARDS_BUTTON_INFO:"Info",YTP_CARDS_BUTTON_SHOPPING:"Shopping",YTP_COPY_DEBUG_INFO:"Copy debug info",
YTP_COPY_VIDEO_URL:"Copy video URL",YTP_COPY_VIDEO_URL_AT_TIME:"Copy video URL at current time",YTP_GET_DEBUG_INFO:"Get debug info",YTP_GET_VIDEO_URL:"Get video URL",YTP_GET_VIDEO_URL_AT_TIME:"Get video URL at current time",YTP_GET_EMBED:"Get embed code",YTP_PLAYBACK_SPEED_CHANGED:"Speed is $RATE",YTP_DEFAULT_VIEW:"Default view",YTP_EMBED_COPY:"Copy embed code",YTP_ERROR_GENERIC_WITHOUT_LINK:"An error occurred. Please try again later.",YTP_ERROR_GENERIC_WITH_LINK_AND_CPN:"An error occurred. Please try again later. (Playback ID: $CPN) $BEGIN_LINKLearn More$END_LINK",
YTP_EXIT_FULLSCREEN:"Exit full screen",YTP_FULLSCREEN_GENERIC_ERROR:"Full screen is unavailable. $BEGIN_LINKLearn More$END_LINK",YTP_FULLSCREEN_UNSUPPORTED_ERROR:"Your browser doesn't support full screen. $BEGIN_LINKLearn More$END_LINK",YTP_VOLUME_UNSUPPORTED_ERROR:"Your browser doesn't support changing the volume. $BEGIN_LINKLearn More$END_LINK",YTP_FULLSCREEN:"Full screen",YTP_GOTO_LIVE_TOOLTIP:"Skip ahead to live broadcast.",YTP_LIVE:"Live",YTP_LIVE_NOW:"LIVE NOW",YTP_LOOP:"Loop",YTP_MORE:"More",
YTP_MORE_FROM_CHANNEL:"More from $DNI_RELATED_CHANNEL",YTP_MORE_VIDEOS:"More videos",YTP_MDX_TOOLTIP:"Play on TV",YTP_MUTE:"Mute",YTP_NEXT:"Next",YTP_NORMAL_SPEED:"Normal",YTP_ON:"On",YTP_OFF:"Off",YTP_OPTIONS:"Options",YTP_PREVIOUS:"Previous",YTP_PLAYBACK_STALLED_AT_START:"If playback doesn't begin shortly, try restarting your device.",YTP_MISSING_FORMATS:"Missing options?",YTP_PLAYLIST:"Playlist",YTP_QUALITY_TITLE:"Quality",YTP_REPLAY:"Replay",YTP_TROUBLESHOOT_ISSUE:"Troubleshoot playback issue",
YTP_SETTINGS:"Settings",YTP_SHARE:"Share",YTP_SHARE_LINK:"Share link",YTP_SHARE_WITH_PLAYLIST_2:"Include playlist",YTP_SHOW_VIDEO_INFO:"Stats for nerds",YTP_SIGN_IN:"Sign in",YTP_SKIP_AD:"Skip Ad",YTP_SKIP_INTRO:"Skip Intro",YTP_SPEED_TITLE:"Speed",YTP_SUBSCRIBE:"Subscribe",YTP_SUBSCRIBED:"Subscribed",YTP_SUBSCRIBE_NOTIFY_OFF:"Get notified about every new video",YTP_SUBSCRIBE_NOTIFY_ON:"Stop getting notified about every new video",YTP_SUBTITLES:"Subtitles/CC",YTP_SUBTITLES_TOOLTIP:"Subtitles/closed captions",
YTP_SUBTITLES_OFF:"Subtitles/closed captions off",YTP_SUBTITLES_ON:"Subtitles/closed captions on",YTP_TAP_TO_UNMUTE_SHORT:"Tap to unmute",YTP_THEATER_MODE:"Theater mode",YTP_UNMUTE:"Unmute",YTP_URL_NAVIGATE_TO:"Watch on $WEBSITE",YTP_WATCH_ALL:"Watch entire video",YTP_WATCH_LATER_2:"Watch later",YTP_WATCH_LATER_AS_2:"Watch later as $USER_NAME",YTP_ADDED_TO_WATCH_LATER_AS:"Added as $USER_NAME",YTP_PLAY:"Play",YTP_ERROR_LICENSE:"Sorry, there was an error licensing this video.",YTP_ERROR_VIDEO_NOT_FOUND:"This video can not be found.",
YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE:"This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",YTP_ERROR_PURCHASE_NOT_FOUND:"This video requires payment.",YTP_ERROR_PURCHASE_REFUNDED:"This video's purchase has been refunded.",YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK:"Your account is playing this video in another location. Please reload this page to resume watching.",YTP_ERROR_TOO_MANY_STREAMS_PER_USER:"Playback stopped because too many videos belonging to the same account are playing.",
YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT:"Playback stopped because this video has been played on too many devices.",YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED:"Too many devices/IP addresses have been used over the 24 hour period.",YTP_ERROR_STREAM_LICENSE_NOT_FOUND:"Video playback interrupted. Please try again.",YTP_CLOSE:"Close",YTP_ANNOTATIONS:"Annotations",YTP_SEEK_SLIDER:"Seek slider",YTP_PAUSE:"Pause",YTP_AUTOPLAY:"Autoplay",YTP_RESET:"Reset",YTP_STOP:"Stop live playback",YTP_SCREENREADER_VOLUME_SETTING:"volume",
YTP_SCREENREADER_VOLUME_MUTED:"muted",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK:"This video format is not supported.",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK:"Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",YTP_HTML5_FLASH_DEPRECATED:"Flash videos are no longer supported. For the best experience, please upgrade your browser to the latest version. $BEGIN_LINKLEARN MORE$END_LINK",
YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED:"The device in the cast session doesn't match the requested one.",YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED:"The video in the cast session doesn't match the requested one.",YTP_ERROR_CAST_TOKEN_EXPIRED:"Cast session was expired. Please refresh.",YTP_ERROR_CAST_TOKEN_FAILED:"Cast session not available. Please refresh or try again later.",YTP_ERROR_CAST_TOKEN_MALFORMED:"Invalid cast session. Please refresh or try again later.",YTP_ERROR_GEO_FAILURE:"This video isn't available in your country.",
YTP_ERROR_INVALID_DRM_MESSAGE:"The DRM system specific message is invalid.",YTP_ERROR_RENTAL_EXPIRED:"This video's rental has expired.",YTP_ERROR_RETRYABLE_ERROR:"There was a temporary server error. Please try again later.",YTP_ERROR_SERVER_ERROR:"There was an internal server error. Please try again later.",YTP_ERROR_STREAMING_NOT_ALLOWED:"Playback not allowed because this video is pinned on another device.",YTP_ERROR_UNSUPPORTED_DEVICE:"Playback isn't supported on this device.",YTP_ERROR_VIDEO_FORBIDDEN:"Access to this video is forbidden.",
YTP_ERROR_VIDEO_UNAVAILABLE:"Video unavailable",YTP_ERROR_FORMAT_UNAVALIABLE:"This video isn't avaliable at the selected quality. Please try again later.",YTP_DEVICE_FALLBACK:"Sorry, this video is not available on this device.",YTP_VISIT_ADVERTISERS_SITE:"Visit advertiser's site",YTP_PROGRESS_LABEL_2:"$PLAY_PROGRESS of $DURATION",YTP_PLAYLIST_NAME:"Playlist: $PLAYLIST_NAME",YTP_PLAYLIST_POSITION:"$CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_SHARE_PANEL_ERROR:"An error occurred while retrieving sharing information. Please try again later.",
YTP_PLAYLIST_AUTHOR_AND_POSITION:"by $AUTHOR \u2022 $CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_PLAYER_NORMAL:"YouTube Video Player",YTP_PLAYER_FULLSCREEN:"YouTube Video Player in Fullscreen",YTP_SPONSORED:"Sponsored",YTP_SPONSORED_PRODUCT_INFO:"You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.",YTP_PIP:"Picture in Picture",YTP_AUTO_TRANSLATE:"Auto-translate",YTP_SWITCH_CAMERA:"Switch camera",YTP_MULTICAM_INDEX:"Viewing $CAMERA_INDEX of $CAMERA_COUNT",
YTP_MORE_CAMERAS_AVAILABLE:"More cameras available",YTP_VIDEO_SUBTITLES_OVERRIDE:"Video Override",YTP_VIDEO_SUBTITLES_OVERRIDE_DESC:"Allow for a different caption style if specified by the video.",YTP_WATCH_VIDEO_OR_PLAYLIST:"Watch $TITLE",YTP_FONT_FAMILY:"Font family",YTP_FONT_SIZE:"Font size",YTP_FONT_COLOR:"Font color",YTP_FONT_OPACITY:"Font opacity",YTP_BACKGROUND_COLOR:"Background color",YTP_BACKGROUND_OPACITY:"Background opacity",YTP_WINDOW_COLOR:"Window color",YTP_WINDOW_OPACITY:"Window opacity",
YTP_COLOR_WHITE:"White",YTP_COLOR_YELLOW:"Yellow",YTP_COLOR_GREEN:"Green",YTP_COLOR_CYAN:"Cyan",YTP_COLOR_BLUE:"Blue",YTP_COLOR_MAGENTA:"Magenta",YTP_COLOR_RED:"Red",YTP_COLOR_BLACK:"Black",YTP_FONT_FAMILY_MONO_SERIF:"Monospaced Serif",YTP_FONT_FAMILY_PROP_SERIF:"Proportional Serif",YTP_FONT_FAMILY_MONO_SANS:"Monospaced Sans-Serif",YTP_FONT_FAMILY_PROP_SANS:"Proportional Sans-Serif",YTP_FONT_FAMILY_CASUAL:"Casual",YTP_FONT_FAMILY_CURSIVE:"Cursive",YTP_FONT_FAMILY_SMALL_CAPS:"Small Capitals",YTP_CHAR_EDGE_STYLE:"Character edge style",
YTP_EDGE_STYLE_NONE:"None",YTP_EDGE_STYLE_RAISED:"Raised",YTP_EDGE_STYLE_DEPRESSED:"Depressed",YTP_EDGE_STYLE_OUTLINE:"Outline",YTP_EDGE_STYLE_DROP_SHADOW:"Drop Shadow",YTP_CONTRIBUTE_MENU_ITEM:"Add subtitles/CC",YTP_ASR_SETTINGS_LABEL:"Automatic Captions",YTP_LANGUAGE_OFF:"Off"});Bea(this);this.M(a.l,"mutedautoplaychange",this.HD)};
Bea=function(a){var b=a.app.l,c=(0,g.A)(a.jA,a),d=(0,g.A)(a.kA,a),e=(0,g.A)(a.GD,a),f=(0,g.A)(a.Sz,a);b.addEventListener("initializingmode",c);b.addEventListener("videoplayerreset",d);b.addEventListener("videodatachange",e);b.addEventListener("presentingplayerstatechange",f);g.Ke(a,function(){b.removeEventListener("initializingmode",c);b.removeEventListener("videoplayerreset",d);b.removeEventListener("videodatachange",e);b.removeEventListener("presentingplayerstatechange",f)})};
uU=function(a){a.g&&(a.g.removeEventListener("focus",a.O),g.Jd(a.g),a.g=null)};
vU=function(a,b){if(a.g){var c=a.app.g;WA&&(a.g.setAttribute("x-webkit-airplay","allow"),b.title?a.g.setAttribute("title",b.title):a.g.removeAttribute("title"));a.g.setAttribute("controlslist","nodownload");c.Zk&&b.videoId&&(a.g.poster=b.xc(c,"default.jpg"))}c=g.BD(b,"yt:bgcolor");a.l.style.backgroundColor=c?c:"";a.K=tB(g.BD(b,"yt:stretch"));a.L=tB(g.BD(b,"yt:crop"),!0);a.Ee()};
g.xU=function(a){var b=g.T(a.app.g.experiments,"html5_aspect_from_adaptive_format");if(b){var c=g.X(a.app);if((c=c?c.g:null)&&qD(c)&&c.Ha.g)return b=c.Ha.videoInfos[0],wU(b.video.width,b.video.height)}return(a=a.g)?wU(a.videoWidth,a.videoHeight):b?16/9:window.NaN};
g.sM=function(a,b){var c=a.Fa(),d=yU(a,c,g.xU(a),b);return new g.hh((c.width-d.width)/2,(c.height-d.height)/2,d.width,d.height)};
yU=function(a,b,c,d){(0,window.isNaN)(a.K)||(c=a.K);var e=c;(0,window.isNaN)(a.F)?(0,window.isNaN)(a.L)||(e=a.L):e=a.F;a=wU(b.width,b.height);(0,window.isFinite)(e)||(e=Math.max(c,a));var f;e>a?f={width:b.width,height:b.width/e,aspectRatio:e}:e<a?f={width:b.height*e,height:b.height,aspectRatio:e}:f={width:b.width,height:b.height,aspectRatio:a};d||(0,window.isNaN)(c)||(c>e?f.width=f.height*c:c<e&&(f.height=f.width/c),f.aspectRatio=c);return f};
wU=function(a,b){return 1>Math.abs(zU*b-a)||1>Math.abs(zU/a-b)?zU:a/b};
AU=function(a){if(1==a.app.T)return!1;var b=g.yK(a.app.l);a=g.V(b,1024)&&!g.T(a.app.g.experiments,"dompaused_video_visible_killswitch");return b&&!g.V(b,2)&&!a&&!wE(b)};
yM=function(a){var b="3"==a.app.g.o&&!a.H&&AU(a)&&!a.app.X;a.g.controls=b;a.g.tabIndex=b?0:-1;b?a.g.removeEventListener("focus",a.O):g.T(a.app.g.experiments,"disable_focus_redirect")||a.g.addEventListener("focus",a.O)};
BU=function(a){var b=g.xU(a),c=a.Fa(),d=1,e=!1,f=yU(a,c,b),k=Ks();if(AU(a)){var l=(0,window.isNaN)(b)||xA||g.T(a.app.g.experiments,"web_player_use_container_size_mac_safari")&&XI&&g.ul;WA&&!g.wc(601)?b=f.aspectRatio:l=l||"3"==a.app.g.o;l?l=new g.hh(0,0,c.width,c.height):(d=f.aspectRatio/b,l=new g.hh((c.width-f.width/d)/2,(c.height-f.height)/2,f.width/d,f.height),1==d&&g.ul&&(b=l.width-c.height*b,0<b&&(l.width+=b,l.height+=b)));k&&(a.g.style.display="");a.I=!0}else b=-c.height,WA?b*=window.devicePixelRatio:
g.qw&&(b-=window.screen.height),l=new g.hh(0,b,c.width,c.height),k&&(a.g.style.display="none"),a.I=!1;g.jh(a.B,l)||(a.B=l,g.VB(a.app.g)?(a.g.style.setProperty("width",l.width+"px","important"),a.g.style.setProperty("height",l.height+"px","important")):g.Rh(a.g,g.lh(l)),g.Eh(a.g,g.mh(l)),e=!0);c=new g.hh((c.width-f.width)/2,(c.height-f.height)/2,f.width,f.height);g.jh(a.o,c)||(a.o=c,e=!0);g.wh(a.g,"transform",1==d?"":"scaleX("+d+")");return e};
CU=function(a){this.I=a;this.C=null;this.g=[];this.o=[];this.B=[];this.H=1;this.l=[];this.A=!1};
VK=function(a,b,c){a.A?a.B.push({type:b,data:c}):a.I.P(b,c)};
g.gO=function(a,b,c){g.Sa(a.g,b);g.Ua(a.g,b);var d=String(a.H++);b.setAttribute("data-visual-id",d);g.Ke(c,(0,g.A)(a.F,a,b))};
g.hO=function(a,b,c){var d=b.getAttribute("data-visual-id");g.Sa(a.g,b);VK(a,"onLogServerVeCreated",{id:d,tracking_params:c})};
DU=function(a,b,c,d,e){g.U.call(this,{D:"div",J:"ytp-horizonchart"});this.l=Math.round(a/c);this.H=b;this.B=c;this.C=d;this.F=e;this.Pa=0;this.element.style.width=this.l*this.B+"px";this.element.style.height=this.H+"em";this.g=-1;this.A=this.o=null};
EU=function(a,b){if(-1==a.g){try{var c=g.Dd("CANVAS");a.o=c.getContext("2d")}catch(m){}if(a.o){var d=a.l*a.B;a.A=c;a.A.width=d;a.A.style.width=d+"px";a.element.appendChild(a.A)}else for(a.B=Math.floor(a.B/4),a.l*=4,c=0;c<a.B;c++)d=g.Dd("SPAN"),d.style.width=a.l+"px",d.style.left=a.l*c+"px",a.element.appendChild(d)}c=a.element.clientHeight||24;c!=a.g&&(a.g=c,a.o&&(c=1<(window.devicePixelRatio||1)?2:1,a.A.height=a.g*c,a.A.style.height=a.g+"px",a.o.scale(1,c)));c=g.q(b);for(var e=c.next();!e.done;e=
c.next()){d=a;var f=a.Pa,k=e.value;for(e=0;e+2<d.C.length&&d.C[e+1]<k;)e++;k=Math.min(1,(k-d.C[e])/(d.C[e+1]-d.C[e]));if(d.o)d.o.fillStyle=d.F[e],d.o.fillRect(f*d.l,0,d.l,d.g),d.o.fillStyle=d.F[e+1],d.o.fillRect(f*d.l,d.g*(1-k),d.l,d.g);else{f=d.element.children[f];var l=window.devicePixelRatio||1;k=Math.min(d.g,Math.round(d.g*k*l)/l);f.style.height=k+"px";f.style.backgroundColor=d.F[e+1];f.style.borderTop="solid "+(d.g-k)+"px "+d.F[e]}a.Pa=(a.Pa+1)%a.B}c=a.Pa;a.o?a.o.clearRect(c*a.l,0,a.l,a.g):(c=
a.element.children[c],c.style.height="0px",c.style.borderTop="")};
FU=function(a){var b=null;b={D:"button",W:["html5-video-info-panel-close","ytp-button"],N:{title:"close"},G:["[x]"]};g.U.call(this,{D:"div",J:"html5-video-info-panel",G:[b,{D:"div",J:"html5-video-info-panel-content",G:[{D:"div",G:[{D:"div",G:["Video ID / CPN"]},{D:"span",G:["{{video_id_and_cpn}}"]}]},{D:"div",G:[{D:"div",G:["Viewport"]},{D:"span",G:["{{dimensions}}"]}]},{D:"div",G:[{D:"div",G:["Current / Optimal Res"]},{D:"span",G:["{{resolution}}"]}]},{D:"div",G:[{D:"div",G:["Volume / Normalized"]},
{D:"span",G:["{{volume}}"]}]},{D:"div",G:[{D:"div",G:["Codecs"]},{D:"span",G:["{{codecs}}"]}]},{D:"div",N:{style:"{{shader_info_style}}"},G:[{D:"div",G:["Shader Info"]},{D:"span",G:["{{shader_info}}"]}]},{D:"div",N:{style:"{{color_style}}"},G:[{D:"div",G:["Color"]},{D:"span",G:["{{color}}"]}]},{D:"div",N:{style:"{{drm_style}}"},G:[{D:"div",G:["Protected"]},{D:"span",G:["{{drm}}"]}]},{D:"div",G:[{D:"div",G:["Host"]},{D:"span",G:["{{stream_host}}"]}]},{D:"div",G:[{D:"div",G:["Connection Speed"]},{D:"span",
G:[{D:"span",G:["{{bandwidth_chart}}"]},{D:"span",G:["{{bandwidth_kbps}}"]}]}]},{D:"div",G:[{D:"div",G:["Network Activity"]},{D:"span",G:[{D:"span",G:["{{network_activity_chart}}"]},{D:"span",G:["{{network_activity_bytes}}"]}]}]},{D:"div",G:[{D:"div",G:["Buffer Health"]},{D:"span",G:[{D:"span",G:["{{buffer_health_chart}}"]},{D:"span",G:["{{buffer_health_seconds}}"]}]}]},{D:"div",N:{style:"{{live_latency_style}}"},G:[{D:"div",G:["Live Latency"]},{D:"span",G:[{D:"span",G:["{{live_latency_chart}}"]},
{D:"span",G:["{{live_latency_secs}}"]}]}]},{D:"div",N:{style:"{{live_mode_style}}"},G:[{D:"div",G:["Live Mode"]},{D:"span",G:["{{live_mode}}"]}]},{D:"div",G:[{D:"div",G:["Dropped Frames"]},{D:"span",G:["{{dropped_frames}}"]}]}]}]});b&&this.M(this.Z["html5-video-info-panel-close"],"click",this.hide);b=[0,18750,37500,81250,128E3,256E3,512E3,2048E3,8192E3,32768E3,131072E3];var c="#000 #d53e4f #f46d43 #fdae61 #fee08b #e6f598 #abdda4 #66c2a5 #3288bd #124588 #fff".split(" "),d=b.map(function(a){return a/
4});
this.o=new DU(300,1,150,b,c);g.J(this,this.o);this.updateValue("bandwidth_chart",this.o);this.B=new DU(300,1,150,[0,3,10,15,30,60,90],"#000 #66c2a5 #abdda4 #e6f598 #fdae61 #f46d43 #a8330f".split(" "));g.J(this,this.B);this.updateValue("live_latency_chart",this.B);this.A=new DU(300,1,150,[0,15,30,60,90,120],"#000 #fdae61 #e6f598 #66c2a5 #3288bd #fff".split(" "));g.J(this,this.A);this.updateValue("buffer_health_chart",this.A);this.C=new DU(300,1,150,d,c);g.J(this,this.C);this.updateValue("network_activity_chart",
this.C);this.l=new g.P(this.Ho,500,this);g.J(this,this.l);this.g=a};
GU=function(a){var b=/codecs="([^"]*)"/.exec(a.mimeType);return(b&&b[1]?b[1]+" ("+nv(a)+")":nv(a))+(a.video&&a.video.isAccelerated?" [acc]":"")};
HU=function(a,b){g.I.call(this);var c=this;this.sa=cu(b);var d=this.sa.args||{};this.g=new QB(d);g.J(this,this.g);g.T(this.g.experiments,"html5_parse_inline_fallback_host")&&(Uy=!0);g.T(this.g.experiments,"html5_vp9_new_mime")&&void 0!=window.navigator.mediaCapabilities&&(sA=!0);this.yd=pB(HB(this.g)&&"blazer"!=this.g.playerStyle,d.enablesizebutton);this.Yb=pB(!1,d.player_wide);this.Ab=this.ha=!1;this.ba=this.g.Za&&pB(!1,d.external_list);this.Ja=(this.Nc=this.g.Za&&pB(!1,d.external_play_video))&&
g.T(this.g.experiments,"player_unified_fullscreen_transitions");this.O=new g.Rt(this);g.J(this,this.O);tg=function(a,b){g.Q(b,"WARNING")};
this.V=null;this.aa=new g.Sq;g.J(this,this.aa);this.da=new g.Sq;g.J(this,this.da);this.L=new CU(this.da);this.L.pause();this.l=new rK(this);g.J(this,this.l);this.U=new rK(this,1);g.J(this,this.U);this.H=new tU(this);g.J(this,this.H);this.T=1;this.bb={};this.K=this.g.storeUserVolume?Kv():{volume:100,muted:this.g.mute};this.Qc=this.g.Za?new jF(this,1):new Cw(this,1);g.J(this,this.Qc);this.B=null;this.Sa={};d={};this.jb=(d.internalvideodatachange=this.aF,d.playbackready=this.bF,d.playbackstarted=this.cF,
d.statechange=this.VA,d.signatureexpired=this.SH,d);this.A=Cea(this);g.J(this,this.A);this.qc=new g.Rt(this);g.J(this,this.qc);this.I=new kF(this.g,this.A);this.o=Dea(this);d={};this.od=(d.airplayactivechange=this.SE,d.airplayavailabilitychange=this.TE,d.beginseeking=this.jF,d.endseeking=this.SF,d.internalAbandon=this.fG,d.internalaudioformatchange=this.eF,d.internalvideodatachange=this.Sn,d.internalvideoformatchange=this.qI,d.liveviewshift=this.lG,d.playbackstalledatstart=this.XH,d.progresssync=
this.YA,d.seekto=this.ZA,d.onLoadProgress=this.mG,d.onVideoProgress=this.bB,d.onLoadedMetadata=this.nG,d.onDompaused=this.NF,d.playbackready=this.eH,d.statechange=this.tv,d.connectionissue=this.BF,d.newelementrequired=this.QG,d.heartbeatparams=this.WA,d.videoelementevent=this.aB,d.drmoutputrestricted=this.PF,d);this.F=null;this.ya=new nU(10,function(a){a!=g.X(c,a.getPlayerType())&&a.dispose()});
g.J(this,this.ya);this.kb=this.zb=-1;this.Wa=new g.P(this.H.Ee,16,this.H);g.J(this,this.Wa);this.Va=!1;this.ma=!0;this.Ca=this.Oa=this.C=null;this.Oc=!1;this.Pb=this.Pc=null;this.Ua=this.ua=0;this.X=this.Ma=!1;this.O.M(this.l,"crn_appapi",this.YE);this.O.M(this.l,"crx_appapi",this.ZE);this.O.M(this.l,"crn_appad",this.Cu);this.O.M(this.l,"crx_appad",this.Cu);this.O.M(this.l,"presentingplayerstatechange",this.XA);this.O.M(this.l,"resize",this.CH);this.H.ca(g.md(a));this.O.M(this.l,"offlineslatestatechange",
this.VG);this.Cc=Eea(this,this.H.element);g.J(this,this.Cc);g.nO=this.g.T;Fea(this);this.I.g("fs");Gea(this);g.VB(this.g)||(g.IQ.ux=g.mU,this.A.Yq())};
Dea=function(a){var b=new mJ(a.g,1,a.I,a.H,(0,g.A)(a.aa.P,a.aa),(0,g.A)(a.l.Ye,a.l));nK(b,a.g.l?1:IU(a,g.Xu("yt-player-playback-rate")||1));JU(a,b,a.jb);return b};
Cea=function(a){var b="",c=a.sa.assets.js||"";0==c.indexOf("//")&&(c=a.g.protocol+":"+c);"/base.js"==c.substr(-8)&&(b=c.substr(0,c.length-8)+"/");!g.T(a.g.experiments,"web_player_module_url_debug_killswitch")&&(c=Error().stack)&&(c=c.match(/\((.*?\/(debug-)?player-.*?):\d+:\d+\)/))&&(c=c[1],c.includes(b)||g.Q(Error("Player module URL mismatch: "+(c+" vs "+b+".")),"WARNING"));b=new EQ(a.l,b,a);c={};a=(c.loaded=(0,g.A)(a.GG,a),c.unloaded=(0,g.A)(a.HG,a),c.destroyed=(0,g.A)(a.Oo,a),c);b.ha=a;return b};
LU=function(a,b){var c=!(!a.V||!a.V.Na());a.V||(a.V=new FU(a),g.J(a,a.V),g.TK(a.l,a.V.element,4));g.vw(a.V,b);KU(a)&&c!=b&&g.xK(a.A).dD();b&&a.F.ec("sfn","1",!0)};
NU=function(a){var b=MU.getTag(!0,!a.g.F);a.B=new fJ(b);g.J(a,a.B);a.F&&OJ(a.F,a.B);try{if(a.g.da)a.Ca&&a.O.Qa(a.Ca),a.Ca=a.O.M(a.B,"volumechange",a.DG);else{a.B.setVolume(a.K.volume/100);var c=a.B,d=a.K.muted;uy();c.g.muted=d}}catch(e){b="setvolume.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_"));g.yJ(a.o,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",b);return}c=a.H;c.g=b;c.H=!1;if(!c.g.parentNode)try{Id(c.l,c.g,0)}catch(e){throw Error("videoElement_: "+!!c.g+", containerElement: "+!!c.l+
", containerElement.childNodes: "+!(!c.l||!c.l.childNodes)+", containerInitiallyTruthy: "+c.X+", isDisposed: "+c.ga());}c.B=new g.hh(0,0,0,0);BU(c);yM(c);g.M(c.g,"video-stream");g.M(c.g,"html5-main-video");b=c.app.g;b.Pb&&c.g.setAttribute("data-no-fullscreen",!0);b.lf&&(c.g.setAttribute("webkit-playsinline",""),c.g.setAttribute("playsinline",""));b.qj&&c.g&&c.M(c.g,"click",c.g.play,c.g);try{dE(a.B)}catch(e){b="activate.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_")),g.yJ(a.o,"html5.missingapi",
"YTP_ERROR_UNSUPPORTED_DEVICE",b)}};
OU=function(a){a.B&&(a.Ca&&(a.O.Qa(a.Ca),a.Ca=null),a.F&&MJ(a.F),uU(a.H),MU.releaseTag(a.B.ia()),a.B=null)};
VN=function(a,b){var c=g.X(a,b);c||(c=PU(a,b),QU(a,c));ZN(a,c)};
ZN=function(a,b){if(a.F!=b){var c=null;a.F&&(c=a.F.o,LQ(a.A),NK(a,"cuerangesremoved",SH(a.F.K)||[]),$N(a));QU(a,b);a.F=b;a.B&&OJ(b,a.B);JU(a,b,a.od);a.Sn("newdata",b,b.g);c&&!g.uE(c,b.o)&&a.tv(new g.BE(b.o,c));b.ua.g&&a.Sn("dataloaded",b,b.g);b.g.Da&&a.l.ka("onPlaybackQualityChange",b.g.Da.video.quality);NK(a,"cuerangesadded",SH(a.F.K)||[]);pE(b.o)&&TJ(b)}};
JU=function(a,b,c){for(var d in c)b.subscribe(d,c[d],a)};
QU=function(a,b){if(b!=a.o){var c=b.getPlayerType();a.Sa[c]=b}};
$N=function(a){if(a.B){var b=a.A.o;b&&b.ts(a.B)&&(OU(a),NU(a))}MJ(a.F);b=a.F;var c=a.od;for(d in c)b.unsubscribe(d,c[d],a);if(g.T(a.g.experiments,"html5_disable_preserve_reference_redux")){var d=a.F;d!=a.o&&(b=d.getPlayerType(),a.Sa[b]==d&&delete a.Sa[b])}a.F=null};
g.X=function(a,b){return b?1==b?a.o:a.Sa[b]||null:a.F};
PU=function(a,b){var c=a.I;2==b&&(c=new kF(a.g));return new mJ(a.g,b,c,a.H,(0,g.A)(a.aa.P,a.aa),(0,g.A)(a.l.Ye,a.l))};
XU=function(a){var b=a.A;if(!b.B)try{HQ(b)?(b.B=new yQ(b.sa.U),b.B.create()):g.QK(b.g,"ad")}catch(c){g.QK(b.g,"ad"),g.Q(c)}b.Wq();b.da?g.QK(b.g,"endscreen"):b.Am();b.ar();b.dr();b.br();b.Vq();b.da?(g.QK(b.g,"annotations_module"),g.QK(b.g,"creatorendscreen")):(b.ym(),b.zm());b.Tq();b.Sq();b.Bm();b.Xq();b.Uq();b=RU(a);MD(b,a.g)||GQ(a.A);a.qc.M(a.l,"presentingplayerstatechange",a.jH);a.l.P("videoready",b)};
uV=function(a){var b=sy();return!!(b&&b.canPlayType&&b.canPlayType(a))};
RU=function(a){return a.F.g};
vV=function(a,b){var c=g.X(a,b);return(c=c?c.l:null)?iE(c):0};
Fea=function(a){var b=a.sa.args;a.g.Sb&&eC(b);b=new g.mD(b);g.bv()&&b.ud.push("remote");b.Uc()&&(xJ(a.o,b,(0,g.A)(a.dd,a)),MD(a.o.g,a.g)&&(a.g.Qc||a.g.od)&&AJ(a.o))};
Gea=function(a){var b=a.H,c=b.app.g;c.rf||b.Vk("tag-pool-enabled");c.Sb&&b.Vk("house-brand");"gvn"==c.playerStyle&&(b.Vk("ytp-gvn"),b.element.style.backgroundColor="transparent");c.aa&&(b.C=g.hu("yt-dom-content-change",b.Ee,b));b.M(window,"resize",b.Ee,b);b=a.Qc;b.o=a.H.element;for(var d in b.A)b.o[d]=b.A[d];(d=wt(a.H.element))&&a.O.M(a.H,d,a.WF);a.O.M(window,"resize",a.DH);b=a.sa.args;NU(a);d=a.o.g;a.l.ka("onVolumeChange",a.K);if(b&&sF(b))if((c=WB(a.g))&&!a.ba&&(b.fetch=0),DV(a,b),c&&!a.ba)GV(a);
else if(!d.Uc())a.C.onReady((0,g.A)(a.Yo,a));ZN(a,a.o);if(!g.V(a.o.o,128)){a:{b=a.g.F;try{var e=sy();if(e.canPlayType)for(b=b?Hea:Iea,c=0;c<b.length;c++)if(e.canPlayType(b[c])){var f=null;break a}f="fmt.noneavailable"}catch(k){f="html5.missingapi"}}"fmt.noneavailable"==f?g.yJ(a.o,"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1"):"html5.missingapi"==f?g.yJ(a.o,f,"YTP_ERROR_UNSUPPORTED_DEVICE","nocanplaymedia.1"):d&&d.Uc()&&MD(a.o.g,a.g)&&(a.g.Qc||a.g.od)?HV(a):g.aC(a.g)||IV(a)}};
IV=function(a){a.l.P("initializingmode");g.JV(a,2);a.A.Bm()};
HV=function(a){if(g.V(a.o.o,128))return!1;MD(a.o.g,a.g)&&a.g.od&&(MU.hasTags(void 0)&&a.X?(Gw(a,{muted:!1,volume:a.K.volume},!1),KV(a,!1)):MU.hasTags(void 0)||a.K.muted||(Gw(a,{muted:!0,volume:a.K.volume},!1),KV(a,!0)));LV(a,1,a.o.g);a.l.P("initializingmode");ZN(a,a.o);g.JV(a,3);var b=a.A.o;if(!a.g.rf||b&&b.ts(a.B)&&a.Oc)OU(a),NU(a),OJ(a.o,a.B);CJ(a.o);if(g.V(a.o.o,128))return!1;MV(a,3);return a.Oc=!0};
KU=function(a){a=g.xK(a.A);return!!a&&a.loaded};
NV=function(a,b){if(a.F==a.o&&a.F.yd!=b){var c=a.F;c.yd=b;c.l&&(c.l.g.loop=b);a.l.P("loopchange",b)}};
OV=function(a,b,c){(0,window.isNaN)(b)||(b=IU(a,b),a.o.Ma!=b&&(nK(a.o,b),c&&!a.g.l&&g.Wu("yt-player-playback-rate",b),a.l.ka("onPlaybackRateChange",b)))};
IU=function(a,b){var c=1;c=a.l.vh();return c=1>b?g.Na(c,function(a){return a>=b}):Qa(c,function(a){return a<=b})};
PV=function(a,b){if(3==wK(a))return g.xK(a.A).F;var c=g.X(a,b);return c?c.Vb():0};
QV=function(a,b){var c=g.X(a,b);return c?c.zi():0};
SV=function(a,b){var c=iK(a.o,b);a.F&&a.F!=a.o&&(c=RV(c,iK(a.F,b),"ad_"));if(b&&a.B){c["0sz"]=0==g.Th(a.B.g).zd();c.op=Ah(a.B.g,"opacity");var d=Fh(a.B.g).y+g.Th(a.B.g).height;c.yof=0>=d;c.dis=Ah(a.B.g,"display")}(d=b?(0,g.AE)():null)&&(c.gpu=d);c.cgr=!0;c.debug_playbackQuality=a.U.Ei();c.debug_date=(new Date).toString();delete c.uga;delete c.q;(d=a.A.H)&&(c=RV(c,d.Ax(),"fresca_"));return JSON.stringify(c,null,2)};
wK=function(a){return 1==a.T?1:KU(a)?3:g.X(a).getPlayerType()};
TV=function(a,b){return 3==wK(a)?yE(g.xK(a.A).H):2==b?a.kb:a.zb};
VV=function(a){UV(a);NV(a,!1);a.bb={};a=a.I;var b=a.l;b.aa={};b.X={};a.A=!1};
GV=function(a){var b=WV();if(b)if(b.list){if(a.C&&a.C.listId.toString()==b.list)if(0<=b.index){var c=b.video;a.l.isFullscreen()&&((c=c[a.C.Pa])&&c.encrypted_id!=a.C.Eb().videoId||(b.index=a.C.Pa));wF(a.C,b);a.Oa&&XV(a,a.Oa)}else a.Oa=null}else a.Nj()};
DV=function(a,b){a.C&&(a.C.unsubscribe("error",a.Nj,a),g.Le(a.C),a.C=null);b&&(a.ba&&(b.fetch=0),a.C=new g.rF(b),a.C.subscribe("error",a.Nj,a))};
YV=function(a,b,c,d){b in a.bb||(c=new g.mF(c,d,{id:b,priority:1}),c.namespace="appad",RH(a.o.K,[c]),a.bb[b]=c)};
g.JV=function(a,b){b!=a.T&&(2==b&&(MV(a,-1),MV(a,5)),a.T=b,a.l.P("appstatechange",b))};
MV=function(a,b){a.F&&2==a.F.getPlayerType()?a.kb!=b&&(a.kb=b,a.l.ka("onAdStateChange",b)):a.zb!=b&&(a.zb=b,a.l.ka("onStateChange",b))};
ZV=function(a,b,c,d,e){c=0!=c;if(e=g.X(a,e))2==a.T&&HV(a),EJ(e,b,c,d)};
aW=function(a,b,c,d,e){a.g.Sb&&eC(b);var f=new g.mD(b);d||(b&&sF(b)?(WB(a.g)&&!a.ba&&(b.fetch=0),DV(a,b)):a.C&&DV(a,null),a.ba=pB(!1,b.external_list),WB(a.g)&&!a.ba&&GV(a));return $V(a,f,c,e)};
LV=function(a,b,c){var d=b+c.videoId,e=a.ya.get(d);if(e){a.ya.remove(d);if(e==g.X(a,b))return e;if(1==e.getPlayerType()){e.g.autonavState=a.o.g.autonavState;g.T(a.g.experiments,"html5_preload_sync_autoplay")&&(e.g.bf=c.bf);b=a.o;c=a.jb;for(var f in c)b.unsubscribe(f,c[f],a);f=a.o.Ma;a.o.dispose();a.o=e;nK(a.o,f);JU(a,e,a.jb);VV(a)}else(f=g.X(a,b))&&f.dispose();a.F.getPlayerType()==e.getPlayerType()?ZN(a,e):QU(a,e)}return e};
$V=function(a,b,c,d){dD("_start","")||(WC("p",void 0,""),a.I.info("srt",0));var e=LV(a,c||a.F.getPlayerType(),b);if(!e){e=g.X(a,c);if(!e)return!1;a.Wa.stop();bW(a,c);xJ(e,b,(0,g.A)(a.dd,a),d)}if(!zJ(e))return!1;a.Va&&(e.Yb=!1,a.Va=!1);if(e==a.o)return g.JV(a,1),HV(a);CJ(e);return!0};
cW=function(a,b,c){c=g.X(a,c);b&&c==a.o&&(c.g.Lf=!0)};
eW=function(a,b,c){a.g.Sb&&eC(b);if(b&&sF(b))if(a.ma=!0,DV(a,b),(b=a.C.Eb())&&b.Uc())dW(a,b,c);else a.C.onReady((0,g.A)(a.Yo,a));else c||(c=wK(a)),1==c&&a.Nj(),dW(a,new g.mD(b),c)};
dW=function(a,b,c){var d=g.X(a,c);d&&(bW(a,c),xJ(d,b,(0,g.A)(a.dd,a)),d==a.o&&(g.JV(a,1),IV(a)))};
g.gW=function(a,b,c,d,e,f,k){if(!b&&!d)throw Error("Playback source is invalid");a.l.isFullscreen()&&!a.Ja||!HB(a.g)&&!g.FB(a.g)?(c=a.I,f=c.l,f.aa={},f.X={},c.A=!1,a.I.reset(),b={video_id:b},e&&(b.autoplay="1"),g.T(a.g.experiments,"html5_player_autonav_logging")&&e&&(b.autonav="1"),d?(b.list=d,a.ma=!1,fW(a,b,void 0,void 0,void 0)):aW(a,b,1)):(c=c||{},c.lact=g.Lu(),c.vis=a.l.Ye(),a.Nc||"gaming"==a.g.playerStyle?a.l.ka("onPlayVideo",{videoId:b,watchEndpoint:k,sessionData:c,listId:d}):(a=f&&RU(a).isLiveDestination?
a.g.U:a.g.getVideoUrl(b,d),g.z("yt.player.exports.navigate")(a,c)))};
fW=function(a,b,c,d,e){if(g.Ca(b)&&!g.za(b)){c="playlist list listType index startSeconds suggestedQuality".split(" ");d={};for(e=0;e<c.length;e++){var f=c[e];b[f]&&(d[f]=b[f])}b=d}else c={index:c,startSeconds:d,suggestedQuality:e},g.w(b)&&16==b.length?c.list="PL"+b:c.playlist=b,b=c;DV(a,b);a.C.onReady((0,g.A)(a.Yo,a))};
g.hW=function(a){if(a.l.app.X)return!1;if(3==wK(a))return!0;WB(a.g)&&!a.ba&&GV(a);return!(!a.C||!a.C.hasNext())};
iW=function(a,b,c){var d=g.X(a,1).g.suggestions;g.UK(a.l)&&d?(d=g.H(d,g.bS),b=d[0],d=c?b.lr:b.nd,g.gW(a,b.Eb().videoId,d,b.getPlaylistId(),c)):!a.ba||a.l.isFullscreen()&&!a.Ja?3==wK(a)?g.xK(a.A).bD():a.C&&(WB(a.g)&&!a.l.isFullscreen()?XV(a,"yt.www.watch.lists.next"):(a.C.hasNext(b)&&vF(a.C,tF(a.C)),a.C.we?(b=c&&g.T(a.g.experiments,"html5_player_autonav_logging"),$V(a,a.C.Eb(void 0,c,b),1)):a.ma=!1)):a.l.ka("onPlaylistNext")};
jW=function(a,b){!a.ba||a.l.isFullscreen()&&!a.Ja?3==wK(a)?g.xK(a.A).cD():a.C&&(WB(a.g)&&!a.l.isFullscreen()?XV(a,"yt.www.watch.lists.prev"):(a.C.qe(b)&&vF(a.C,uF(a.C)),a.C.we?$V(a,a.C.Eb(),1):a.ma=!1)):a.l.ka("onPlaylistPrevious")};
XV=function(a,b){var c=g.z(b);if(c){var d=WV();d&&d.list&&c();a.Oa=null}else a.Oa=b};
WV=function(){var a=g.z("yt.www.watch.lists.getState");return a?a():null};
kW=function(a,b,c,d,e,f){b={id:b};"chapter"==f?(b.style="ytp-chapter-marker",b.visible=!0):(0,window.isNaN)(e)||("ad"==f?b.style="ytp-ad-progress":(b.style="ytp-time-marker",b.color=e),b.visible=!0);c=new g.mF(1E3*c,1E3*d,b);c.namespace="appapi";LK(a,[c],1);return!0};
LK=function(a,b,c){var d=g.X(a,c);d&&(RH(d.K,b),c&&wK(a)!=c||NK(a,"cuerangesadded",b))};
lW=function(a){var b=g.yu(),c=PV(a);a=RU(a);return b-Math.max(1E3*(c-a.startSeconds),0)};
Gw=function(a,b,c){a.g.O&&(a.K=b,b.muted||KV(a,!1),c&&a.g.storeUserVolume&&!a.g.da&&(c={volume:Math.floor(b.volume),muted:b.muted},c.unstorable||(g.Wu("yt-player-volume",c),g.Wu("yt-player-volume",c,2592E3))),mW(a),c=g.Ky&&!a.B.gd(),!a.g.da||c)&&(b=g.hc(b),a.g.storeUserVolume||(b.unstorable=!0),a.l.ka("onVolumeChange",b))};
mW=function(a){var b=RU(a);b.zj||(b=a.g.da?1:OD(b,a.g),a.B.setVolume(a.K.volume*b/100),b=a.B,a=a.K.muted,uy(),b.g.muted=a)};
KV=function(a,b){b!=a.X&&(a.X=b,a.l.P("mutedautoplaychange",b))};
oW=function(a,b){var c=window.screen&&window.screen.orientation;if(g.T(a.g.experiments,"lock_fullscreen2")&&c&&c.lock&&(!g.Ky||!g.nW))if(b){var d=0==c.type.indexOf("portrait"),e=g.xU(a.H),f=d;1>e?f=!0:1<e&&(f=!1);if(!a.Ma||f!=d){if(c=c.lock(f?"portrait":"landscape"))c["catch"](g.wa);a.Ma=!0}}else a.Ma&&(a.Ma=!1,c.unlock())};
pW=function(a,b){var c=!!b,d=!!a.Ua!=c;a.Ua=b;a.g.Ma=c;a.H.Ee();d&&a.I.g("fsc");d&&(a.l.P("fullscreentoggled",c),d=a.o.g,c={fullscreen:c,videoId:d.ypcOrigin||d.videoId,time:PV(a)},a.U.getPlaylistId()&&(c.listId=a.U.getPlaylistId()),a.l.ka("onFullscreenChange",c))};
NK=function(a,b,c){a.l.P(b,c);var d=g.EB(a.g)||g.VB(a.g);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.l.ka(e,c)}};
rW=function(a,b){var c=g.X(a,b);c&&(2==a.T?HV(a):g.T(a.g.experiments,"html5_restore_userreload_killswitch")&&c.o.isError()?qW(a,"user"):(null!=a.V&&a.V.Na()&&a.V.start(),g.V(c.o,2)?(ZV(a,0),g.T(a.g.experiments,"html5_ignore_playing_evt")&&TJ(c)):TJ(c)))};
bW=function(a,b){g.HC(a.ua);a.ua=0;var c=g.X(a,b);if(c&&1!=a.T&&2!=a.T){(g.T(a.g.experiments,"html5_disable_module_ownership")||c==a.F)&&LQ(a.A);1==b&&(g.T(a.g.experiments,"html5_stop_video_in_cancel_playback")&&eK(c),UV(a));g.LJ(c);var d=g.T(a.g.experiments,"html5_disable_non_presenting_cueranges")?a.F:c;NK(a,"cuerangesremoved",SH(d.K)||[]);c.K.reset()}};
sW=function(a,b,c,d,e){c=0!=c;var f=g.X(a,e);if(!f||2!=f.getPlayerType()&&!g.GD(f.g))3==wK(a)?g.xK(a.A).Ki("control_seek",b,c):ZV(a,b,c,d,e)};
qW=function(a,b,c){if(!a.Va){c&&(OU(a),NU(a));a.Va=!0;c=g.X(a);c.Yb=!0;c.ec("reloading","reason."+b);c=RU(a);var d={};d.video_id=c.videoId;d.adformat=c.adFormat;c.pa||(d.start=g.X(a).Vb(),d.resume="1");c.Ge&&(d.vvt=c.Ge);c.vssCredentialsToken&&(d.vss_credentials_token=c.vssCredentialsToken,d.vss_credentials_token_type=c.Sl);c.oauthToken&&(d.oauth_token=c.oauthToken);d.autoplay=1;d.reload_count=c.Yf+1;d.reload_reason=b;c.Kh&&(d.unplugged_partner_opt_out=c.Kh);aW(a,d)}};
tW=function(a,b){a.o.g.autonavState=b;g.Wu("yt-player-autonavstate",b);a.l.P("autonavchange",b)};
uW=function(a){var b=RU(a).zj,c=a.g.xf;b||c?(a=a.B,a.C=!0,uy(),a.g.muted=!0):(a.B.C=!1,Gw(a,a.K))};
Eea=function(a,b){return g.T(a.g.experiments,"html5_enable_embedded_player_visibility_signals")&&a.g.l?new sU(b):null};
UV=function(a){(a=a.A.B)&&a.created&&(a.unload(),a.created=!1)};
RV=function(a,b,c){for(var d in b)a[c+d]=b[d];return a};
aa=[];ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ha=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)vW=Object.setPrototypeOf;else{var wW;a:{var Jea={Fc:!0},xW={};try{xW.__proto__=Jea;wW=xW.Fc;break a}catch(a){}wW=!1}vW=wW?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=vW;
sa("Array.prototype.findIndex",function(a){return a?a:function(a,c){return ra(this,a,c).gs}});
sa("Array.prototype.find",function(a){return a?a:function(a,c){return ra(this,a,c).hx}});
var Kea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
sa("Object.assign",function(a){return a||Kea});
sa("Promise",function(a){function b(a){this.g=0;this.o=void 0;this.l=[];var b=this.A();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.g=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.l=function(a){null==this.g&&(this.g=[],this.A());this.g.push(a)};
c.prototype.A=function(){var a=this;this.o(function(){a.C()})};
var e=ea.setTimeout;c.prototype.o=function(a){e(a,0)};
c.prototype.C=function(){for(;this.g&&this.g.length;){var a=this.g;this.g=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.B(n)}}}this.g=null};
c.prototype.B=function(a){this.o(function(){throw a;})};
b.prototype.A=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.K),reject:a(this.B)}};
b.prototype.K=function(a){if(a===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.L(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.I(a):this.C(a)}};
b.prototype.I=function(a){var b=void 0;try{b=a.then}catch(m){this.B(m);return}"function"==typeof b?this.O(b,a):this.C(a)};
b.prototype.B=function(a){this.F(2,a)};
b.prototype.C=function(a){this.F(1,a)};
b.prototype.F=function(a,b){if(0!=this.g)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.g);this.g=a;this.o=b;this.H()};
b.prototype.H=function(){if(null!=this.l){for(var a=this.l,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.l=null}};
var f=new c;b.prototype.L=function(a){var b=this.A();a.Gj(b.resolve,b.reject)};
b.prototype.O=function(a,b){var c=this.A();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(N){f(N)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Gj(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Gj=function(a,b){function c(){switch(d.g){case 1:a(d.o);break;case 2:b(d.o);break;default:throw Error("Unexpected state: "+d.g);}}
var d=this;null==this.l?f.l(c):this.l.push(function(){f.l(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.q(a),f=e.next();!f.done;f=e.next())d(f.value).Gj(b,c)})};
b.all=function(a){var c=g.q(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Gj(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
sa("Math.trunc",function(a){return a?a:function(a){a=Number(a);if((0,window.isNaN)(a)||window.Infinity===a||-window.Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});
sa("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
sa("WeakMap",function(a){function b(a){this.oa=(f+=Math.random()+1).toString();if(a){da();la();a=g.q(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ta(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ta(a,e))throw Error("WeakMap key fail: "+a);a[e][this.oa]=b;return this};
b.prototype.get=function(a){return ta(a,e)?a[e][this.oa]:void 0};
b.prototype.has=function(a){return ta(a,e)&&ta(a[e],this.oa)};
b.prototype["delete"]=function(a){return ta(a,e)&&ta(a[e],this.oa)?delete a[e][this.oa]:!1};
return b});
sa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.g;return ma(function(){if(c){for(;c.head!=a.g;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.l[c];if(d&&ta(a.l,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,Rc:l}}return{id:c,list:d,index:-1,Rc:void 0}}
function e(a){this.l={};this.g=b();this.size=0;if(a){a=g.q(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.q([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(u){return!1}}())return a;
da();la();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.l[c.id]=[]);c.Rc?c.Rc.value=b:(c.Rc={next:this.g,previous:this.g.previous,head:this.g,key:a,value:b},c.list.push(c.Rc),this.g.previous.next=c.Rc,this.g.previous=c.Rc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.Rc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.l[a.id],a.Rc.previous.next=a.Rc.next,a.Rc.next.previous=a.Rc.previous,a.Rc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).Rc};
e.prototype.get=function(a){return(a=d(this,a).Rc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
sa("Set",function(a){function b(a){this.g=new window.Map;if(a){a=g.q(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.q([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
da();la();b.prototype.add=function(a){this.g.set(a,a);this.size=this.g.size;return this};
b.prototype["delete"]=function(a){a=this.g["delete"](a);this.size=this.g.size;return a};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(a){return this.g.has(a)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.g.forEach(function(d){return a.call(b,d,d,c)})};
return b});
sa("Array.from",function(a){return a?a:function(a,c,d){la();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
sa("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
sa("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=c||0;f<e;f++)if(b[f]==a||Object.is(b[f],a))return!0;return!1}});
sa("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
sa("Object.values",function(a){return a?a:function(a){var b=[],d;for(d in a)ta(a,d)&&b.push(a[d]);return b}});
var Lea=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
sa("Reflect.construct",function(){return Lea});
sa("Object.entries",function(a){return a?a:function(a){var b=[],d;for(d in a)ta(a,d)&&b.push([d,a[d]]);return b}});
sa("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
sa("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
g.yW=g.yW||{};g.x=this;Da="closure_uid_"+(1E9*Math.random()>>>0);Ea=0;g.G=Date.now||function(){return+new Date};g.E(Ja,Error);Ja.prototype.name="CustomError";var kd;var Pk;g.Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.w(a))return g.w(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.Mea=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.w(a))return g.w(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Ld=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.w(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.H=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.w(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
Pk=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
(0,g.F)(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
g.Ek=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.to=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,ub=/[\x00&<>"']/,Eb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var zW=g.x.navigator;if(zW){var AW=zW.userAgent;if(AW){g.Pb=AW;break a}}g.Pb=""};var jc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");qc[" "]=g.wa;var xA,XI,BW,CW,Nea,DW;g.zh=Qb("Opera");g.vd=Qb("Trident")||Qb("MSIE");xA=Qb("Edge");g.qw=xA||g.vd;g.yh=Qb("Gecko")&&!(Db(g.Pb,"WebKit")&&!Qb("Edge"))&&!(Qb("Trident")||Qb("MSIE"))&&!Qb("Edge");g.xd=Db(g.Pb,"WebKit")&&!Qb("Edge");XI=Qb("Macintosh");g.nW=Qb("Windows");g.LB=Qb("Android");BW=oc();CW=Qb("iPad");Nea=Qb("iPod");g.sl=pc();
a:{var EW="",FW=function(){var a=g.Pb;if(g.yh)return/rv:([^\);]+)(\)|;)/.exec(a);if(xA)return/Edge\/([\d\.]+)/.exec(a);if(g.vd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.xd)return/WebKit\/(\S+)/.exec(a);if(g.zh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
FW&&(EW=FW?FW[1]:"");if(g.vd){var GW=uc();if(null!=GW&&GW>(0,window.parseFloat)(EW)){DW=String(GW);break a}}DW=EW}var vc=DW,sc={},HW;var IW=g.x.document;HW=IW&&g.vd?uc()||("CSS1Compat"==IW.compatMode?(0,window.parseInt)(vc,10):5):void 0;var xc=HW;var zd,Kd,Od;zd=!g.vd||g.yc(9);Kd=!g.yh&&!g.vd||g.vd&&g.yc(9)||g.yh&&g.wc("1.9.1");g.JW=g.vd&&!g.wc("9");Od=g.vd||g.zh||g.xd;Ac.prototype.yg=!0;Ac.prototype.Gf=function(){return this.g};
Ac.prototype.toString=function(){return"Const{"+this.g+"}"};
var zc={};g.Cc("");var Oea=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Pea=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),Qea=/^http:\/\/.*/,Rea=/\s+/,Sea=/[\d\u06f0-\u06f9]/;Fc.prototype.yg=!0;Fc.prototype.Gf=function(){return this.g};
Fc.prototype.nn=!0;Fc.prototype.Hm=function(){return 1};
var Ec={};Jc.prototype.yg=!0;Jc.prototype.Gf=function(){return this.g};
Jc.prototype.nn=!0;Jc.prototype.Hm=function(){return 1};
var Lc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ic={};Mc("about:blank");g.Qc.prototype.nn=!0;g.Qc.prototype.Hm=function(){return this.l};
g.Qc.prototype.yg=!0;g.Qc.prototype.Gf=function(){return this.g};
var Pc={};Uc("<!DOCTYPE html>",0);Uc("",0);Uc("<br>",0);g.dd.prototype.clone=function(){return new g.dd(this.x,this.y)};
g.dd.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.dd.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.dd.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.gd.prototype;g.h.clone=function(){return new g.gd(this.width,this.height)};
g.h.zd=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.zd()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var qd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.h=id.prototype;g.h.ia=function(){return g.w(void 0)?this.g.getElementById(void 0):void 0};
g.h.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
g.h.createElement=function(a){return this.g.createElement(String(a))};
g.h.appendChild=g.Gd;g.h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.h.removeNode=g.Jd;g.h.contains=g.Qd;var Zd=g.wa;var CB,BB,DB;g.AA=Qb("Firefox");CB=oc()||Qb("iPod");BB=Qb("iPad");DB=g.nc();g.Ky=lc();g.ul=mc()&&!pc();var ge=null,le=null,fe=null;var oe=[];ne.prototype.clone=function(){return pe(this.l,this.A,this.o-this.A)};
ne.prototype.clear=function(){this.l=null;this.g=this.o=this.A=0;this.B=!1};
ne.prototype.reset=function(){this.g=this.A};re.prototype.reset=function(){this.g.reset();this.l=this.o=-1};var xe="function"==typeof window.Uint8Array,ye=[];we.prototype.toString=function(){He(this);return this.g.toString()};
we.prototype.clone=function(){return new this.constructor(Ie(Ge(this)))};window.console&&"function"===typeof window.console.log&&(0,g.A)(window.console.log,window.console);var kf=!g.vd||g.yc(9),Tea=g.vd&&!g.wc("9"),ef=function(){if(!g.x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.x.addEventListener("test",g.wa,b);g.x.removeEventListener("test",g.wa,b);return a}();g.I.prototype.Fb=!1;g.I.prototype.ga=function(){return this.Fb};
g.I.prototype.dispose=function(){this.Fb||(this.Fb=!0,this.R())};
g.I.prototype.R=function(){if(this.tb)for(;this.tb.length;)this.tb.shift()()};g.Ne.prototype.stopPropagation=function(){this.Og=!0};
g.Ne.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Xv=!1};g.E(Oe,g.Ne);var Uea={2:"touch",3:"pen",4:"mouse"};
Oe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.yh&&(rc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=g.w(a.pointerType)?a.pointerType:Uea[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Oe.prototype.stopPropagation=function(){Oe.wa.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Oe.prototype.preventDefault=function(){Oe.wa.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Tea)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Re;g.Pe="closure_listenable_"+(1E6*Math.random()|0);Re=0;Ue.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var k=Xe(a,b,d,e);-1<k?(b=a[k],c||(b.Fj=!1)):(b=new Se(b,this.src,f,!!d,e),b.Fj=c,a.push(b));return b};
Ue.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Xe(e,b,c,d);return-1<b?(Te(e[b]),g.Va(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
Ue.prototype.di=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Xe(a,b,c,d));return-1<e?a[e]:null};var cf="closure_lm_"+(1E6*Math.random()|0),nf={},hf=0,qf="__closure_events_fn_"+(1E9*Math.random()>>>0);g.E(g.rf,g.I);g.rf.prototype[g.Pe]=!0;g.h=g.rf.prototype;g.h.sp=function(a){this.K=a};
g.h.addEventListener=function(a,b,c,d){g.Ze(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.lf(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.K;if(b){var c=[];for(var d=1;b;b=b.K)c.push(b),++d}b=this.da;d=a.type||a;if(g.w(a))a=new g.Ne(a,b);else if(a instanceof g.Ne)a.target=a.target||b;else{var e=a;a=new g.Ne(d,b);g.kc(a,e)}e=!0;if(c)for(var f=c.length-1;!a.Og&&0<=f;f--){var k=a.currentTarget=c[f];e=sf(k,d,!0,a)&&e}a.Og||(k=a.currentTarget=b,e=sf(k,d,!0,a)&&e,a.Og||(e=sf(k,d,!1,a)&&e));if(c)for(f=0;!a.Og&&f<c.length;f++)k=a.currentTarget=c[f],e=sf(k,d,!1,a)&&e;return e};
g.h.R=function(){g.rf.wa.R.call(this);this.Td&&g.We(this.Td);this.K=null};
g.h.fa=function(a,b,c,d){return this.Td.add(String(a),b,!1,c,d)};
g.h.Ik=function(a,b,c,d){return this.Td.add(String(a),b,!0,c,d)};
g.h.Qa=function(a,b,c,d){this.Td.remove(String(a),b,c,d)};
g.h.di=function(a,b,c,d){return this.Td.di(String(a),b,c,d)};tf.prototype.get=function(){if(0<this.l){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.o();return a};var Af;var Lf=new tf(function(){return new Ef},function(a){a.reset()});
Df.prototype.add=function(a,b){var c=Lf.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
Df.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
Ef.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Ef.prototype.reset=function(){this.next=this.scope=this.g=null};var Ff,Hf=!1,If=new Df;Qf.prototype.reset=function(){this.context=this.l=this.A=this.g=null;this.o=!1};
var Sf=new tf(function(){return new Qf},function(a){a.reset()});
g.Pf.prototype.then=function(a,b,c){return bg(this,g.Ba(a)?a:null,g.Ba(b)?b:null,c)};
Mf(g.Pf);g.Pf.prototype.cancel=function(a){0==this.g&&g.Jf(function(){var b=new hg(a);dg(this,b)},this)};
g.Pf.prototype.I=function(a){this.g=0;Of(this,2,a)};
g.Pf.prototype.K=function(a){this.g=0;Of(this,3,a)};
g.Pf.prototype.H=function(){for(var a;a=eg(this);)fg(this,a,this.g,this.F);this.C=!1};
var lg=zf;g.E(hg,Ja);hg.prototype.name="cancel";g.E(g.mg,g.rf);g.h=g.mg.prototype;g.h.enabled=!1;g.h.za=null;g.h.setInterval=function(a){this.zc=a;this.za&&this.enabled?(this.stop(),this.start()):this.za&&this.stop()};
g.h.tc=function(){if(this.enabled){var a=(0,g.G)()-this.Gn;0<a&&a<.8*this.zc?this.za=this.Jh.setTimeout(this.km,this.zc-a):(this.za&&(this.Jh.clearTimeout(this.za),this.za=null),this.dispatchEvent("tick"),this.enabled&&(this.za=this.Jh.setTimeout(this.km,this.zc),this.Gn=(0,g.G)()))}};
g.h.start=function(){this.enabled=!0;this.za||(this.za=this.Jh.setTimeout(this.km,this.zc),this.Gn=(0,g.G)())};
g.h.stop=function(){this.enabled=!1;this.za&&(this.Jh.clearTimeout(this.za),this.za=null)};
g.h.R=function(){g.mg.wa.R.call(this);this.stop();delete this.Jh};var tg=g.wa,Ag={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.h=Bg.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.t(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.G)()+1E3*c)).toUTCString();this.g.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.t(this.get(a));this.set(a,"",0,b,c);return d};
g.h.pd=function(){return Cg(this).keys};
g.h.hc=function(){return Cg(this).values};
g.h.isEmpty=function(){return!this.g.cookie};
g.h.clear=function(){for(var a=Cg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.$u=new Bg("undefined"==typeof window.document?null:window.document);g.$u.l=3950;var Hg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Xg=/#|$/,Zg=/[?&]($|#)/;ch.prototype.remove=function(a){fc(this.g,a)};
ch.prototype.set=function(a,b){this.g[a]=b};
ch.prototype.get=function(a){return gc(this.g,a,null)};g.h=g.eh.prototype;g.h.pk=function(){return this.right-this.left};
g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.eh(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return this&&a?a instanceof g.eh?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};g.h=g.hh.prototype;g.h.clone=function(){return new g.hh(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.dd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var sh=null;oh.prototype.getValue=function(){return this.g};
oh.prototype.l=function(){return String(this.g)};
g.E(ph,oh);ph.prototype.l=function(){return this.g?"1":"0"};
g.E(qh,oh);qh.prototype.l=function(){return this.g?Math.round(this.g.top)+"."+Math.round(this.g.left)+"."+(Math.round(this.g.top)+Math.round(this.g.height))+"."+(Math.round(this.g.left)+Math.round(this.g.width)):""};var xh={},Yh={thin:2,medium:4,thick:6};new g.mg(200);var vi=window.document,K=window;var gi=/^[\w+/_-]+[=]{0,2}$/;var ki=/https?:\/\/[^\/]+/;var oi=g.xf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.x.addEventListener("test",null,b)}catch(c){}return a});var ti=!!window.google_async_iframe_id,ui=ti&&window.parent||window;var Vea=[0,2,1],KW=null;window.document.addEventListener&&window.document.addEventListener("mousedown",function(a){KW=a},!0);
window.mb=function(a){if(a){var b;if(b=window.event||KW){var c;(c=b.which?1<<Vea[b.which-1]:b.button)&&b.shiftKey&&(c|=8);c&&b.altKey&&(c|=16);c&&b.ctrlKey&&(c|=32);b=c}else b=null;b&&(window.css?window.css(a.id,"mb",b,void 0,void 0):a&&(a.href=fi(a.href,"mb",b,void 0)))}};yi.prototype.isVisible=function(){return this.We?.3<=this.g:.5<=this.g};zi.prototype.getValue=function(){return null};Ai.prototype.enable=function(){this.o=!0};
Ai.prototype.isEnabled=function(){return this.o};
Ai.prototype.reset=function(){this.g={};this.o=!0;this.l={}};var Fi=(0,g.G)(),Ji=-1,Hi=-1,LW,Ki=-1,Ii=!1;var Qi={},Ri=null;Qi.le=0;Qi.nt=2;Qi.Fr=3;Qi.Po=5;Qi.me=1;Qi.om=4;Ti.prototype.update=function(a,b,c){a&&(this.g+=b,this.l+=b,this.A+=b,this.o=Math.max(this.o,this.A));if(void 0===c?!a:c)this.A=0};Ui.prototype.update=function(a,b,c,d,e,f){f=void 0===f?!0:f;b=e?Math.min(a,b):b;for(e=0;e<this.l.length;e++){var k=this.l[e],l=0<b&&b>=k;k=!(0<a&&a>=k)||c;this.g[e].update(f&&l,d,!f||k)}};dj.prototype.update=function(a,b,c,d,e){this.F=-1!=this.F?Math.min(this.F,b.g):b.g;e&&(this.O=Math.max(this.O,b.g));this.g.update(b.g,c.g,b.o,a,d);c=d||c.We!=b.We?c.isVisible()&&b.isVisible():c.isVisible();this.V.update(c,a,!b.isVisible())};
dj.prototype.Mf=function(){return this.V.o>=this.aa};ej.prototype.Uc=function(){return!!this.l||!!this.g};
ej.prototype.toString=function(){return this.l+(this.g?"-":"")+this.g};
ej.prototype.matches=function(a){return this.g||a.g?this.g==a.g:this.l||a.l?this.l==a.l:!1};var mj=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;oj.prototype.xb=function(a,b,c,d){a=a+"//"+b+c;var e=tj(this)-c.length-d.length;if(0>e)return"";this.g.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.g.length;f++)for(var k=this.g[f],l=this.l[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var n=rj(l[m],this.o,",$");if(n){n=b+n;if(e>=n.length){e-=n.length;a+=n;b=this.o;break}else this.B&&(b=e,n[b-1]==this.o&&--b,a+=n.substr(0,b),b=this.o,e=0);c=null==c?k:c}}f="";this.A&&null!=c&&(f=b+this.A+"="+c);return a+f+d};g.vj.prototype.clone=function(){return new g.vj(this.start,this.end)};
g.vj.prototype.getLength=function(){return this.end-this.start};var MW=null;var Cj=g.x.performance,Wea=!!(Cj&&Cj.mark&&Cj.measure&&Cj.clearMarks),Aj=g.xf(function(){var a;if(a=Wea){var b;if(null===MW){MW="";try{a="";try{a=g.x.top.location.hash}catch(c){a=g.x.location.hash}a&&(MW=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=MW;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
Bj.prototype.start=function(a,b){if(!this.g)return null;var c=xj()||wj();c=new yj(a,b,c);var d="goog_"+c.uniqueId+"_start";Cj&&Aj()&&Cj.mark(d);return c};
Bj.prototype.end=function(a){if(this.g&&g.va(a.value)){var b=xj()||wj();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";Cj&&Aj()&&Cj.mark(b);this.g&&this.events.push(a)}};Gj.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new oj;f.B=!0;sj(f,1,"context",a);b.error&&b.meta&&b.id||(b=Hj(b));b.msg&&sj(f,2,"msg",b.msg.substring(0,512));b.file&&sj(f,3,"file",b.file);0<b.line&&sj(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(m){}b=[k];f.g.push(5);f.l[5]=b;var l=nj();l.l&&sj(f,6,"top",l.l.url||"");sj(f,7,"url",l.g.url||"");uj(this.o,e,f,c)}catch(m){try{uj(this.o,e,{context:"ecmserr",rctx:a,msg:Mj(m),url:l&&l.g.url},c)}catch(n){}}return this.l};
g.r(Lj,fj);var Fj,Jj,zj=wi(),Ej=new Bj;Fj=new function(){var a=void 0===a?K:a;this.A="http:"===a.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.o="/pagead/gen_204?id=";this.g=.01};
Jj=new Gj;"complete"==zj.document.readyState?Nj():Ej.g&&qi(zj,"load",function(){Nj()});
var Oj=Jj.g;if(vi&&vi.URL){var NW,mi=vi.URL;NW=!!mi&&0<ni().length;Jj.l=!NW};g.OW=!g.vd&&!mc();gk.prototype.getStatus=function(){return"u"};
g.r(kk,gk);var qk=[3,7,8,5,5],rk=[3,4,4,5,6],sk=[3,4,5,6],tk=[3,5];lk.prototype.A=function(a){this.g&&this.g.contentWindow&&(this.g.contentWindow.requestAnimationFrame(Kj(245,this.A,this,void 0)),this.l||(this.l=(0,g.G)()-a),this.o=a)};
lk.prototype.isVisible=function(a){return 50>a-this.l-this.o};
lk.prototype.remove=function(){try{g.Jd(this.g)}catch(a){}this.g=null};g.xa(wk);yk.prototype.ia=function(){return this.C};zk.prototype.cancel=function(){K.clearTimeout(this.g);this.g=null};
zk.prototype.schedule=function(){var a=this;K&&(this.g=K.setTimeout(Qj(143,function(){a.l.Yv()}),Li(wk.getInstance().H)))};g.h=Ck.prototype;g.h.eh=function(){return!0};
g.h.initialize=function(){};
g.h.Xe=function(){return"geo"};
g.h.vg=function(){return{}};
g.h.Yv=function(){};
g.h.yp=function(){};
g.h.pi=function(a){var b=this.o;this.O=a>=this.I;this.o=Math.max(this.I,a);!this.O||1==a&&0!=this.I||this.yp();this.o!=b&&Ik(this)};
g.h.xg=function(a){var b=this.g,c=this.H;b=!(a&&(void 0===c||!c||b.volume==a.volume)&&b.A==a.A&&fh(b.g,a.g)&&g.hd(null,null));this.g=a;b&&Hk(this)};
g.h.Dh=function(){return this.H};
g.h.dispose=function(){this.U=!0};
g.h.ga=function(){return this.U};g.h=Jk.prototype;g.h.Os=function(){};
g.h.Pn=function(){};
g.h.pm=function(){this.o=new yk(this.g.g,this.element,this.o.g,this.o.A,this.A(),this.o.l,this.o.F)};
g.h.dispose=function(){if(!this.ga()){var a=this.g;g.Wa(a.B,this);a.H&&this.Dh()&&Fk(a);this.B=!0}};
g.h.ga=function(){return this.B};
g.h.vg=function(){return this.g.vg()};
g.h.pi=function(){};
g.h.xg=function(){this.pm()};
g.h.Dh=function(){return this.Mj};Nk.prototype.add=function(a,b,c){++this.o;var d=this.o/4096;this.g.push(Lk(new Kk(a,b,c),d));this.l=!0;return this};var PW=new Date(0);g.Fb(PW.getUTCFullYear(),4);g.Fb(PW.getUTCMonth()+1,2);g.Fb(PW.getUTCDate(),2);g.Fb(PW.getUTCHours(),2);g.Fb(PW.getUTCMinutes(),2);var Sk=new g.eh(0,0,0,0),il={threshold:[0,.3,.5,.75,1]};g.h=Tk.prototype;g.h.Mj=function(){return!1};
g.h.ik=function(){return new dj};
g.h.fd=function(){return this.Ln};
g.h.Gs=function(){};
g.h.Fs=function(){};
g.h.Pr=function(){};
g.h.Nl=function(){};
g.h.kf=function(a,b,c,d,e,f,k){k=void 0===k?{}:k;var l=this.Er(c,k);k=this.lm(a,b,d,k);g.va(b)||(this.Au=new g.dd(a.left-b.left,a.top-b.top),this.gj=new g.gd(b.right-b.left,b.bottom-b.top));e=e&&this.dc.g>=(this.We()?.3:.5);this.Ip(l,k,e,f);this.sh=c;0<k.g&&-1===this.Fw&&(this.Fw=c);-1==this.Gw&&this.Mf()&&(this.Gw=c);if(-2==this.In)try{a:{var m=g.va(b)?null:b;if(a&&a!=Sk&&0!=this.zd){if(!m){if(!this.gj){var n=-1;break a}m=new g.eh(0,this.gj.width,this.gj.height,0)}n=m.pk&&0<m.pk()&&m.getHeight&&
0<m.getHeight()?this.Xh(a,m):-1}else n=-1}this.In=n}catch(p){Rj(207,p)}this.dc=k;d&&(this.dc.g=0);this.Mn(this)};
g.h.Ip=function(a,b,c,d){this.fd().update(a,b,this.dc,c,d)};
g.h.Mm=function(){return new yi};
g.h.lm=function(a,b,c){var d=this.Mm();d.o=c;c=Mi();d.l=0==c?-1:1==c?0:1;d.g=g.va(b)?this.Xh(b):this.Xh(a,b);d.We=this.We();return d};
g.h.Er=function(a){if(-1==this.sh)return 0;a=a-this.sh||1;return 1E4<a?1:a};
g.h.Xh=function(a,b){if(0===this.opacity&&1===Ci(this.nb,"opac"))return 0;if(g.va(a))return a;if(b){var c=ck(a,b),d=1==Ci(this.nb,"od");return 0>=this.zd||fk(c,b,this.Qe,d)?0:(c.bottom-c.top)*(c.right-c.left)/this.zd}return 0};
g.h.We=function(){return!1};
g.h.Wd=function(){return 0};
g.h.Mf=function(){return this.Ln.Mf()};
g.h.tp=function(a){a=void 0===a?1:a;if(!this.Qe)return!1;var b=this.We();b&&(a=4);b=new kk(b,a);if(a=nk(b,this.Qe))this.Pg=b;return a};var ol="StopIteration"in g.x?g.x.StopIteration:{message:"StopIteration",stack:""};nl.prototype.next=function(){throw ol;};
nl.prototype.uf=function(){return this};g.tl=function(){if(g.nW){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.Pb))?a[1]:"0"}return XI?(a=/10[_.][0-9_.]+/,(a=a.exec(g.Pb))?a[0].replace(/_/g,"."):"10"):g.LB?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.Pb))?a[1]:""):BW||CW||Nea?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.Pb))?a[1].replace(/_/g,"."):""):""}();var On={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},Qm={Gy:"start",by:"firstquartile",oy:"midpoint",Ly:"thirdquartile",Lx:"complete",ny:"metric",PAUSE:"pause",wy:"resume",Dy:"skip",Ny:"viewable_impression",qy:"mute",My:"unmute",ey:"fullscreen",Zx:"exitfullscreen",xK:"bufferstart",wK:"bufferfinish",fy:"fully_viewable_audible_half_duration_impression",my:"measurable_impression",Gx:"abandon",Wx:"engagedview",ky:"impression",Rx:"creativeview",ly:"loaded",nM:"progress",CLOSE:"close",
JK:"collapse",aM:"overlay_resize",bM:"overlay_unmeasurable_impression",cM:"overlay_unviewable_impression",eM:"overlay_viewable_immediate_impression",dM:"overlay_viewable_end_of_session_impression",Sx:"custom_metric_viewable"},Bo="start firstquartile midpoint thirdquartile resume loaded".split(" "),Co=["start","firstquartile","midpoint","thirdquartile"],Zl=["abandon"],Om={UNKNOWN:-1,Gy:0,by:1,oy:2,Ly:3,Lx:4,ny:5,PAUSE:6,wy:7,Dy:8,Ny:9,qy:10,My:11,ey:12,Zx:13,fy:14,my:15,Gx:16,Wx:17,ky:18,Rx:19,ly:20,
Sx:21};g.r(Cl,yi);Jl.prototype.getValue=function(){return this.l};
Jl.prototype.update=function(a,b){32<=a||(this.g&1<<a&&!b?this.l&=~(1<<a):this.g&1<<a||!b||(this.l|=1<<a),this.g|=1<<a)};g.r(Kl,dj);
Kl.prototype.update=function(a,b,c,d,e){if(!b.paused){dj.prototype.update.call(this,a,b,c,d,e);e=Dl(b)&&Dl(c);var f=.5<=(d?Math.min(b.g,c.g):c.g);bk(b.volume)&&(this.A=-1!=this.A?Math.min(this.A,b.volume):b.volume,this.C=Math.max(this.C,b.volume));f&&(this.L+=a,this.I+=e?a:0);this.l.update(b.g,c.g,b.o,a,d,e);this.o.update(!0,a);this.B.update(e,a);this.K.update(c.fullscreen,a);this.da.update(e&&!f,a);a=Math.floor(b.A/1E3);this.U.update(a,b.isVisible());this.X.update(a,1<=b.g);this.ba.update(a,Dl(b))}};g.r(Nl,Ml);Nl.prototype.B=function(){return!0};
Nl.prototype.A=function(){return!1};
Nl.prototype.l=function(){var a=this,b=bc(Qm,function(b){return b==a.C});
return Om[b].toString()};
Nl.prototype.toString=function(){var a="";this.A()&&(a+="c");this.g&&(a+="s");0<this.o&&(a+=":"+this.o);return this.l()+a};var Xea=new g.eh(0,0,0,0),QW={},$l=(QW.firstquartile=0,QW.midpoint=1,QW.thirdquartile=2,QW.complete=3,QW);g.r(Ql,Tk);g.h=Ql.prototype;g.h.Mj=function(){return!0};
g.h.tp=function(a){a=void 0===a?3:a;var b=wk.getInstance().nb,c=!!Ci(b,"rafx");b=!!Ci(b,"rafv");return c||b?(this.Ma=!0,Tk.prototype.tp.call(this,a)):!1};
g.h.Gs=function(a){var b=this,c=a-this.Ja;this.ma&&1E3>=c||(c=g.z("ima.bridge.getNativeViewability"),g.Ba(c)&&(c(this.md,function(a){b.ma=!1;g.dc(a)&&b.ua++;b.Nl(a)}),this.ma=!0,this.Ja=a))};
g.h.Fs=function(a){var b=wk.getInstance();a-this.Fb>Li(b.H)&&(a=g.z("ima.admob.getViewability"),g.Ba(a)&&a(this.md))};
g.h.Pr=function(a){this.Fb=Gi();this.Nl(a)};
g.h.Nl=function(a){var b=a.opt_nativeViewBounds||{},c=a.opt_nativeViewVisibleBounds||{},d=a.opt_nativeTime||-1,e=a.opt_nativeVolume,f=a.opt_nativeViewAttached;a=a.opt_nativeViewHidden;void 0!==f&&(this.X=!!f);b=new g.eh(b.top||0,b.left+b.width||0,b.top+b.height||0,b.left||0);c=a?Xea.clone():new g.eh(c.top||0,c.left+c.width||0,c.top+c.height||0,c.left||0);f=void 0;if("n"==this.A||"ml"==this.A)f={volume:e};e=f;e=void 0===e?{}:e;this.zd=(b.bottom-b.top)*(b.right-b.left);this.position=b;this.kf(b,c,d,
!1,!0,!0,e)};
g.h.kf=function(a,b,c,d,e,f,k){var l=this;k=void 0===k?{}:k;var m=this.ha(this)||{};g.kc(m,k);this.B=m.duration||this.B;this.da=m.isVpaid||this.da;this.I=m.isYouTube||this.I;this.ba=f;Tk.prototype.kf.call(this,a,b,c,d,e,f,m);(0,g.F)(this.C,function(a){a.g||(a.g=Pl(a,l))})};
g.h.Ip=function(a,b,c,d){Tk.prototype.Ip.call(this,a,b,c,d);Tl(this).update(a,b,this.dc,c,d);this.aa=Dl(this.dc)&&Dl(b);-1==this.U&&this.ya&&(this.U=this.fd().o.g);this.ac.o=0;a=this.dc;b=this.Mf();.5<=a.g&&Fl(this.ac,"vs");b&&Fl(this.ac,"vw");bk(a.volume)&&Fl(this.ac,"am");this.aa&&Fl(this.ac,"a");this.re&&Fl(this.ac,"f");-1!=a.l&&(Fl(this.ac,"bm"),1==a.l&&Fl(this.ac,"b"));this.aa&&b&&Fl(this.ac,"avw");this.ba&&Fl(this.ac,"cm");this.ba&&0<a.g&&Fl(this.ac,"pv");Vl(this,this.fd().o.g,!0)&&Fl(this.ac,
"gdr");2E3<=$i(this.fd().g,1)&&Fl(this.ac,"pmx")};
g.h.ik=function(){return new Kl};
g.h.fd=function(){return this.Ln};
g.h.Mm=function(){return new Cl};
g.h.lm=function(a,b,c,d){a=Tk.prototype.lm.call(this,a,b,c,d);a.fullscreen=this.re;a.paused=2==this.Ub;a.volume=d.volume;bk(a.volume)||(this.Oa++,b=this.dc,bk(b.volume)&&(a.volume=b.volume));d=d.currentTime;a.A=g.t(d)&&0<=d?d:-1;return a};
g.h.Er=function(a,b){var c=g.t(b.currentTime)?b.currentTime:this.K;if(-1==this.sh||2==this.Ub)var d=0;else{d=a-this.sh||1;var e=1E4;g.t(this.B)&&-1!=this.B&&(e=Math.max(e,this.B/3));d=d>e?1:d}e=c-this.K;var f=0;0<=e?(this.H+=d,this.T+=Math.max(d-e,0),f=Math.min(e,this.H)):this.sa+=Math.abs(e);0!=e&&(this.H=0);-1==this.tb&&0<e&&(this.tb=0<=Ki?Gi()-Ki:-1);this.K=c;return 1==(Ci(wk.getInstance().nb,"umt")||this.I?1:0)?f:d};
g.h.Xh=function(a,b){return this.Ca?0:this.re?1:Tk.prototype.Xh.call(this,a,b)};
g.h.Wd=function(){return 1};
g.h.lk=function(a,b,c,d){if(this.Dg)return{"if":0};var e=this.position.clone();e.round();var f=(0,g.H)(this.l,function(a){return 100*a.OJ|0}),k=wk.getInstance(),l=this.fd(),m={};
this.Ma&&(m.avms="raf");m["if"]=k.l?1:void 0;m.sdk=this.A?this.A:void 0;m.t=this.AJ;m.p=[e.top,e.left,e.bottom,e.right];m.tos=Wi(l.g,!1);m.mtos=Zi(l.g);m.mcvt=l.V.o;m.ps=void 0;m.pt=f;e=Ll(l,Gi(),2==this.Ub);m.vht=e;m.mut=l.da.o;m.a=Sl(this.dc.volume);m.mv=Sl(l.C);m.fs=this.re?1:0;m.ft=l.K.g;m.at=l.B.g;m.as=.1<=l.A?1:0;m.atos=Wi(l.l);m.amtos=Zi(l.l);m.uac=this.Oa;m.vpt=l.o.g;"nio"==k.Ya&&(m.nio=1,m.avms="nio");m.gmm="4";m.gdr=Vl(this,l.o.g,!0)?1:0;this.Kp&&(m.efpf=this.Em);0<this.ua&&(m.nnut=this.ua);
m.tcm=Ci(wk.getInstance().nb,"umt")||this.I?1:0;m.nmt=this.sa;m.bt=this.T;m.pst=this.tb;m.vpaid=this.da;m.dur=this.B;m.vmtime=this.K;m.is=this.ac.o;1<=this.l.length&&(m.i0=this.l[0].xk);2<=this.l.length&&(m.i1=this.l[1].xk);3<=this.l.length&&(m.i2=this.l[2].xk);4<=this.l.length&&(m.i3=this.l[3].xk);m.cs=Il(this.ac);a&&(m.ic=Hl(this.ac),m.dvpt=l.o.l,m.dvs=aj(l.g,.5),m.dfvs=aj(l.g,1),m.davs=aj(l.l,.5),m.dafvs=aj(l.l,1),b&&(l.o.l=0,bj(l.g),bj(l.l)),this.Mf()&&(m.dtos=l.L,m.dav=l.I,m.dtoss=this.V+1,b&&
(l.L=0,l.I=0,this.V++)),m.dat=l.B.l,m.dft=l.K.l,b&&(l.B.l=0,l.K.l=0));k.A&&(m.ps=[k.A.width,k.A.height]);k.g&&(m.bs=[k.g.width,k.g.height]);k.C&&(m.scs=[k.C.width,k.C.height]);m.dom=k.domain;this.Nh&&(m.vds=this.Nh);if(0<this.C.length||this.yi)a=g.Za(this.C),this.yi&&a.push(this.yi),m.pings=(0,g.H)(a,function(a){return a.toString()});
m.ces=(0,g.H)((0,g.Ld)(this.C,function(a){return a.A()}),function(a){return a.l()});
this.g&&(m.vmer=this.g);this.F&&(m.vmmk=this.F);this.O&&(m.vmiec=this.O);this.Ya&&(m.avms=this.Ya.Xe(),g.kc(m,this.Ya.vg()));"exc"==k.Ya&&(m.femt=this.Va,m.femvt=this.bb,m.emc=this.Wa,m.emb=Wi(this.Sa,!1),m.emuc=this.Ua,m.avms="exc");c?(m.c=fl(this.dc.g,2),m.ss=fl(bm(this),2)):m.tth=Gi()-LW;m.mc=fl(l.O,2);m.nc=fl(l.F,2);m.mv=Sl(l.C);m.nv=Sl(l.A);m.lte=fl(this.In,2);c=Tl(this,d);Zi(l.g);m.qmtos=Zi(c.g);m.qnc=fl(c.F,2);m.qmv=Sl(c.C);m.qnv=Sl(c.A);m.qas=.1<=c.A?1:0;m.qi=this.md;null!==this.X&&(m.nvat=
this.X?1:0);m.avms||(m.avms="geo");m.psm=l.U.g;m.psv=l.U.getValue();m.psfv=l.X.getValue();m.psa=l.ba.getValue();k=Ei(k.nb);k.length&&(m.veid=k);return m};g.h=cm.prototype;g.h.create=function(a,b,c,d){var e=null;this.g&&(e=this.Ns(a,b,void 0===c?!1:c,void 0===d?function(){return null}:d),Dk(this.g,e));
return e};
g.h.eh=function(){return!1};
g.h.init=function(){return!0};
g.h.dispose=function(){this.B=!0};
g.h.ga=function(){return this.B};
g.h.vg=function(){return{}};g.xa(dm);g.E(g.fm,g.I);g.h=g.fm.prototype;g.h.mh=!1;g.h.li=0;g.h.za=null;g.h.lh=function(a){this.g=arguments;this.za||this.li?this.mh=!0:gm(this)};
g.h.stop=function(){this.za&&(g.x.clearTimeout(this.za),this.za=null,this.mh=!1,this.g=[])};
g.h.pause=function(){this.li++};
g.h.resume=function(){this.li--;this.li||!this.mh||this.za||(this.mh=!1,gm(this))};
g.h.R=function(){g.fm.wa.R.call(this);this.stop()};
g.h.Cz=function(){this.za=null;this.mh&&!this.li&&(this.mh=!1,gm(this))};g.h=im.prototype;g.h.Hs=function(){nm(this,!1);this.cn()};
g.h.cn=function(){pm(this,xm(this),!1)};
g.h.Yv=function(){pm(this,xm(this),!1)};
g.h.Wr=function(){var a=um(this),b=Gi();a?(Ii||(Ji=b,(0,g.F)(this.g,function(a){var c=a.fd();c.T=Ll(c,b,1!=a.Ub)})),Ii=!0,nm(this,!0)):(this.T=Am(this,b),Ii=!1,LW=b,(0,g.F)(this.g,function(a){a.rg&&(a.fd().H=b)}));
pm(this,xm(this),!a)};
g.h.EJ=function(a){var b;if(b=null!=a.IntersectionObserver){if(a=Bm(a,"nio",xm(this)))wk.getInstance().Ya="nio";b=a}return b};
g.h.FJ=function(a){return vl()&&Cm(this,a)};
g.h.DJ=function(a){if(g.yh&&g.va(a.screenX)&&g.va(a.mozInnerScreenX)&&g.va(a.outerWidth)){a=a.navigator.userAgent;var b=a.indexOf("Firefox/");if(0<=b){b=Math.floor(a.substr(b+8))||-1;var c=a.indexOf("Mac OS X 10."),d=-1;0<=c&&(d=Number(a.substr(c+12,1))||-1);var e=0<d?-1:a.indexOf("Windows NT ");c=-1;0<=e&&(c={"6.0":0,"6.1":1,"6.2":2}[a.substr(e+11,3)]||-1);a=148;5<=d?a=4<=b?108:3<=b?127:108:0<=c&&(16==b||17==b||18==b)&&(a=[[146,146,146],[148,147,148],[131,130,136]][c][b-16])}else a=null;null!==a&&
(this.I=a,wk.getInstance().Ya="xde");return!0}return!1};
g.h.CJ=function(a){return g.vd&&g.wc(8)&&g.Ba(Si(a&&a.document))?(wk.getInstance().Ya="iem",!0):!1};
g.h.reset=function(){this.g=[];this.o=[]};
g.xa(im);var km=im.getInstance();var Bn=null,In="",Dn=!1;var Lm=function(a,b){return function(c){for(var d=0;d<b.length;d++)if(b[d]===c[a]||!g.t(b[d])&&!c.hasOwnProperty(a))return!0;return!1}}("e",[void 0,
1,2,3,4,8,16]),Yea={sv:"sv",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",tos:"tos",mtos:"mtos",mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",pt:"pt",vht:"vht",mut:"mut",a:"a",ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",
is:"is",i0:"i0",i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:Mm("qmtos"),qnc:Mm("qnc"),qmv:Mm("qmv"),qnv:Mm("qnv"),raf:"raf",rafc:"rafc",lte:"lte",ces:"ces",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnk:"pnk",pnc:"pnc",pnmm:"pnmm",pns:"pns",ptlt:"ptlt",dc_rfl:"urlsigs",pngs:"pings",obd:"obd",veid:"veid"},Zea={c:Hm("c"),at:"at",atos:Km("atos",[0,2,4]),ta:function(a,
b){return function(c){if(!g.t(c[a]))return b}}("tth","1"),
a:"a",dur:"dur",p:"p",tos:Jm(),j:"dom",mtos:Km("mtos",[0,2,4]),gmm:"gmm",gdr:"gdr",ss:Hm("ss"),vsv:vf("w2"),t:"t"},$ea={atos:"atos",amtos:"amtos",avt:Km("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:Hm("ss"),t:"t"},afa={a:"a",tos:Jm(),at:"at",c:Hm("c"),mtos:Km("mtos",[0,2,4]),dur:"dur",fs:"fs",p:"p",vpt:"vpt",vsv:vf("ias_w2"),dom:"dom",gmm:"gmm",gdr:"gdr",t:"t"},bfa={tos:Jm(),at:"at",c:Hm("c"),mtos:Km("mtos",[0,2,4]),p:"p",vpt:"vpt",vsv:vf("dv_w4"),gmm:"gmm",gdr:"gdr",dom:"dom",t:"t",mv:"mv",
qmpt:Km("qmtos",[0,2,4]),qvs:function(a,b){return function(c){var d=c[a];if(g.va(d))return(0,g.H)(b,function(a){return 0<d&&d>=a?1:0})}}("qnc",[1,
.5,0]),qmv:"qmv",qa:"qas",a:"a"};g.r(Rm,Nl);Rm.prototype.B=function(a){return a.fd().Mf()};g.r(Vm,Tm);Vm.prototype.g=function(a){var b=new Sm;b.g=Um(a,Yea);b.o=Um(a,$ea);return b};g.r(Wm,Jk);Wm.prototype.A=function(){return!0};
Wm.prototype.pm=function(){if(this.element){var a=this.element.getBoundingClientRect(),b=a.right-a.left;a=a.bottom-a.top;var c=g.Nh(this.element,this.g.l),d=c.x;c=c.y;this.l=new g.eh(Math.round(c),Math.round(d+b),Math.round(c+a),Math.round(d))}(b=this.g.g.g)?(b=ck(this.l,b),b=b.top>=b.bottom||b.left>=b.right?new g.eh(0,0,0,0):gh(b,-this.l.left,-this.l.top)):b=new g.eh(0,0,0,0);var e=this.g.g.g;d=a=0;var f=1==Ci(this.nb,"od");c=(this.l.bottom-this.l.top)*(this.l.right-this.l.left);e&&b&&0<c&&(fk(b,
e,this.element,f)?b=new g.eh(0,0,0,0):(f=(b.bottom-b.top)*(b.right-b.left),e=(e.bottom-e.top)*(e.right-e.left),a=f/c,e&&(d=f/e)));this.o=new yk(this.g.g,this.element,this.l,b,this.A(),a,d)};
Wm.prototype.Xe=function(){return this.o.o.o.Xe()};
Wm.prototype.xg=function(a){null==this.element&&(this.l=new g.eh(0,0,0,0));Jk.prototype.xg.call(this,a)};g.r(Ym,cm);g.h=Ym.prototype;g.h.Xe=function(){return this.l?this.l.Xe():this.g?this.g.Xe():"none"};
g.h.vg=function(){return this.l?this.l.vg():this.g?this.g.vg():{}};
g.h.init=function(a){this.A=a;return this.g?((0,g.F)(this.o,function(a){return a.initialize()}),Dk(this.g,this),!0):!1};
g.h.dispose=function(){(0,g.F)(this.o,function(a){a.yp();a.dispose()});
cm.prototype.dispose.call(this)};
g.h.eh=function(){return(0,g.Ek)(this.o,function(a){return a.eh()})};
g.h.Ns=function(a,b,c,d){return new Wm(a,this.g,b,c,d)};
g.h.pi=function(a){0==a&&this.A(this.g.F,this)};
g.h.xg=function(a){this.l=a.o};
g.h.Dh=function(){return!1};var an={threshold:[0,.3,.5,.75,1]};g.r(Zm,Jk);Zm.prototype.Xe=function(){return"nio"};
Zm.prototype.A=function(){return!0};
Zm.prototype.Os=function(){var a=this;Pj(298,function(){return cn(a)})||this.C("msf",this)};
Zm.prototype.Pn=function(){if(this.l&&this.element)try{this.l.unobserve(this.element)}catch(a){}};
g.r(dn,cm);dn.prototype.Xe=function(){return"nio"};
dn.prototype.eh=function(){var a=Ci(wk.getInstance().nb,"nio_mode");return(2===a||1===a)&&!ym()&&null!=this.g.l.IntersectionObserver};
dn.prototype.Ns=function(a,b,c,d){return new Zm(a,this.g,b,c,d)};g.r(en,Ck);en.prototype.Xe=function(){return"osd"};
en.prototype.initialize=function(){var a=this;if(this.C.Uc()){Sj(g.x,"message",function(b){if(null!=b&&b.data&&g.w(b.data)){var c=b.data;if(g.w(c)){var e={};c=c.split("\n");for(var f=0;f!=c.length;++f){var k=c[f],l=k.indexOf("=");if(!(0>=l)){var m=Number(k.substr(0,l));k=k.substr(l+1);switch(m){case 26:case 15:case 8:case 11:case 16:case 5:case 18:k="true"==k;break;case 4:case 6:case 25:case 28:case 29:case 24:case 23:case 22:case 7:case 21:case 20:k=Number(k);break;case 19:case 3:if(g.Ba(window.decodeURIComponent))try{k=
(0,window.decodeURIComponent)(k)}catch(n){throw Error("Error: URI malformed: "+k);}}e[m]=k}}e=e[0]?e:null}else e=null;if(e&&a.C.matches(new ej(e[4],e[12]))&&(c=e[29],f=e[0],g.Sa(["goog_acknowledge_monitoring","goog_get_mode","goog_update_data","goog_image_request"],f))){tn(a,e);"goog_get_mode"==f&&un(a,b);if("goog_get_mode"==f||"goog_acknowledge_monitoring"==f)ln(a,e[28]),a.K=2,jn(a);if(a.A.length||a.B.length)switch(4!=c&&(l=e[0],k=!1,b=a.g.l,c=a.g.volume,f=a.g.g,m=Gi(),"goog_acknowledge_monitoring"==
l&&(a.o=e[8]?0:2,Ik(a)),(0,window.isNaN)(e[22])||(0,window.isNaN)(e[23])||(k=!0,b=new g.gd(e[22],e[23])),e[9]&&(k=!0,l=e[9].split("-"),4==l.length&&(f=new g.eh(Mb(l[0]),Mb(l[3]),Mb(l[2]),Mb(l[1])))),k&&(k=um(km),a.g=new xk(m,b,f,k,a,c),Hk(a))),b=e[0],c=100*e[25],g.va(c)&&!(0,window.isNaN)(c)&&nn(a,c),void 0!=e[18]&&on(a,e[18]),void 0!=e[7]&&0<e[7]&&pn(a,e[7]),c=!!e[5],f=!!e[11],m=!1,"goog_update_data"==b&&(m=!!e[15],mn(a,e[3])),b){case "goog_image_request":qn(a,c,f);case "goog_update_data":c&&rn(a,
m),f&&sn(a)}}}},118);
var b=Qj(197,function(){kn(a,a.V,a.C,a.T,a.L,function(){a.o=0;Ik(a)})});
this.K=1;this.X=this.l.setInterval(b,500)}else this.o=0,this.F="ib",this.I=this.o=0,Ik(this)};
en.prototype.yp=function(){var a={};Tj(this.C,a);a[0]="goog_stop_monitoring";a=Uj(a);var b=gn(this,!1),c=!b;c&&(b=this.l.parent);if(b&&b.postMessage)try{b.postMessage(a,"*"),c&&this.l.postMessage(a,"*")}catch(d){}};
g.xa(en);g.h=vn.prototype;g.h.Om=function(){};
g.h.Sm=function(){return[new Rm("viewable_impression",this.g)]};
g.h.pi=function(a){switch(a){case 0:wk.getInstance().o=!1;Cn();break;case 2:mm()}};
g.h.xg=function(a){var b=wk.getInstance();b.g=a.l;b.B=a.g};
g.h.Dh=function(){return!1};
g.h.hA=function(a){Yl(a,0);return am(a,"start",um(km))};
g.h.Lh=function(a,b,c){pm(km,[a],!um(km),b);return this.Se(a,b,c)};
g.h.Se=function(a,b,c){return am(a,c,um(km))};
g.h.cA=function(a,b){return Kn(a,"firstquartile",1,b)};
g.h.eA=function(a,b){a.ya=!0;return Kn(a,"midpoint",2,b)};
g.h.iA=function(a,b){return Kn(a,"thirdquartile",3,b)};
g.h.aA=function(a,b){var c=Kn(a,"complete",4,b);0!=a.Ub&&(a.Ub=3);return c};
g.h.Wv=function(a,b,c){var d=um(km);if(2==a.Ub&&!d){var e=Gi();a.fd().H=e}pm(km,[a],!d,b);2==a.Ub&&(a.Ub=1);return am(a,c,d)};
g.h.gA=function(a,b){var c=this.Lh(a,b||{},"skip");0!=a.Ub&&(a.Ub=3);return c};
g.h.dA=function(a,b){a.re=!0;return this.Lh(a,b||{},"fullscreen")};
g.h.bA=function(a,b){a.re=!1;return this.Lh(a,b||{},"exitfullscreen")};
g.h.jn=function(a,b){return this.Se(a,b||{},"loaded")};
g.h.cp=function(a,b,c){var d=a.fd(),e=Gi();d.T=Ll(d,e,1!=a.Ub);pm(km,[a],!um(km),b);1==a.Ub&&(a.Ub=2);return am(a,c,um(km))};
g.h.fA=function(a,b){pm(km,[a],!um(km),b);return a.l()};
g.h.kn=function(a,b){pm(km,[a],!um(km),b);this.Pv(a);0!=a.Ub&&(a.Ub=3);return a.l()};
g.h.gn=function(){};
g.h.lk=function(a,b){if(Dn)return Pm("ue");var c=this.Om(a,b);if(!c)return Pm("nf");var d=Pm();g.kc(d,c.lk(!0,!1));return d};
g.h.hp=function(){};
g.h.Pv=function(){};
g.h.Ms=function(){};
g.h.np=function(){};
g.h.Zq=function(){};var Sn={bL:"visible",lK:"audible",OM:"time",PM:"timetype"},Tn={visible:function(a){return/^(100|[0-9]{1,2})$/.test(a)},
audible:function(a){return"0"==a||"1"==a},
timetype:function(a){return"mtos"==a||"tos"==a},
time:function(a){return/^(100|[0-9]{1,2})%$/.test(a)||/^([0-9])+ms$/.test(a)}};g.r(Wn,Nl);Wn.prototype.l=function(){return this.oa};
Wn.prototype.A=function(){return!0};
Wn.prototype.B=function(a){var b=a.fd(),c=a.B;return(0,g.Ek)(this.F,function(a){if(void 0!=a.g)var d=Vn(a,b);else b:{switch(a.B){case "mtos":d=a.l?b.B.o:b.o.g;break b;case "tos":d=a.l?b.B.g:b.o.g;break b}d=0}0==d?a=!1:(a=-1!=a.o?a.o:g.t(c)&&0<c?a.A*c:-1,a=-1!=a&&d>=a);return a})};g.r(Xn,Nl);Xn.prototype.B=function(a){var b=Yi(a.fd().l,1);return Vl(a,b)};var Zn=(0,g.G)(),go=!1,ho=!1,io=!1,bo=[function(a){return!(!a.chrome||!a.chrome.webstore)},
function(a){return!!a.document.documentMode},
function(a){return!!a.document.fonts.ready},
function(){return $n(0)},
function(a){return!!a.ActiveXObject},
function(a){return!!a.chrome},
function(a){return!!a.navigator.serviceWorker},
function(a){return!!a.opera},
function(a){return!!a.sidebar},
function(){return!+"\v1"},
function(){return $n(1)},
function(a){return!a.ActiveXObject},
function(a){return"-ms-ime-align"in a.document.documentElement.style},
function(a){return"-ms-scroll-limit"in a.document.documentElement.style},
function(a){return"-webkit-font-feature-settings"in a.document.body.style},
function(){return $n(2)},
function(a){return"ActiveXObject"in a},
function(a){return"MozAppearance"in a.document.documentElement.style},
function(a){return"_phantom"in a},
function(a){return"callPhantom"in a},
function(a){return"content"in a.document.createElement("template")},
function(a){return"getEntriesByType"in a.performance},
function(){return $n(3)},
function(a){return"image-rendering"in a.document.body.style},
function(a){return"object-fit"in a.document.body.style},
function(a){return"open"in a.document.createElement("details")},
function(a){return"orientation"in a.screen},
function(a){return"performance"in a},
function(a){return"shape-image-threshold"in a.document.body.style},
function(){return $n(4)},
function(a){return"srcset"in a.document.createElement("img")},
function(){return ho},
function(){return io},
function(){return $n(5)},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="-webkit-min-content";a.style.width="min-content";return"1px"!=a.style.width},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="calc(1px - 1px)";a.style.width="-webkit-calc(1px - 1px)";return"1px"!=a.style.width},
function(){var a=!1;eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');try{(0,window.DummyFunction1)()}catch(b){a=!0}return a},
function(){var a=!1;try{(0,window.DummyFunction2)()}catch(b){a=!0}return a},
function(){return!1},
function(){return $n(6)},
function(a){var b=a.document.createElement("canvas");b.width=b.height=1;b=b.getContext("2d");b.globalCompositeOperation="multiply";b.fillStyle="rgb(0,255,255)";b.fillRect(0,0,1,1);b.fill();b.fillStyle="rgb(255,255,0)";b.fillRect(0,0,1,1);b.fill();b=b.getImageData(0,0,1,1).data;return b[0]==b[2]&&b[1]==b[3]||Yn(a.navigator.vibrate)},
function(a){a=a.document.createElement("canvas");a.width=a.height=1;a=a.getContext("2d");a.globalCompositeOperation="multiply";a.fillStyle="rgb(0,255,255)";a.fillRect(0,0,1,1);a.fill();a.fillStyle="rgb(255,255,0)";a.fillRect(0,0,1,1);a.fill();a=a.getImageData(0,0,1,1).data;return a[0]==a[2]&&a[1]==a[3]},
function(a){a=a.document.createElement("div");return Yn(a.matches)},
function(a){a=a.document.createElement("input");a.setAttribute("type","range");return"text"!==a.type},
function(a){return a.CSS.supports("image-rendering","pixelated")},
function(a){return a.CSS.supports("object-fit","contain")},
function(){return $n(7)},
function(a){return a.CSS.supports("object-fit","inherit")},
function(a){return a.CSS.supports("shape-image-threshold","0.9")},
function(a){return a.CSS.supports("word-break","keep-all")},
function(){return eval("1 == [for (item of [1,2,3]) item][0]")},
function(a){return Yn(a.CSS.supports)},
function(){return Yn(window.Intl.Collator)},
function(a){return Yn(a.document.createElement("dialog").show)},
function(){return $n(8)},
function(a){return Yn(a.document.createElement("div").animate([{transform:"scale(1)",iz:"ease-in"},{transform:"scale(1.3)",iz:"ease-in"}],{duration:1300,sN:1}).reverse)},
function(a){return Yn(a.document.createElement("div").animate)},
function(a){return Yn(a.document.documentElement.webkitRequestFullScreen)},
function(a){return Yn(a.navigator.getBattery)},
function(a){return Yn(a.navigator.permissions.query)},
function(){return!1},
function(){return $n(9)},
function(){return Yn(window.webkitRequestAnimationFrame)},
function(a){return Yn(a.BroadcastChannel.call)},
function(a){return Yn(a.FontFace)},
function(a){return Yn(a.Gamepad)},
function(){return $n(10)},
function(a){return Yn(a.MutationEvent)},
function(a){return Yn(a.MutationObserver)},
function(a){return Yn(a.crypto.getRandomValues)},
function(a){return Yn(a.document.body.createShadowRoot)},
function(a){return Yn(a.document.body.webkitCreateShadowRoot)},
function(a){return Yn(a.fetch)},
function(){return $n(11)},
function(a){return Yn(a.navigator.serviceWorker.register)},
function(a){return Yn(a.navigator.webkitGetGamepads)},
function(a){return Yn(a.speechSynthesis.speak)},
function(a){return Yn(a.webkitRTCPeerConnection)},
function(a){return a.CSS.supports("--fake-var","0")},
function(){return $n(12)},
function(a){return a.CSS.supports("cursor","grab")},
function(a){return a.CSS.supports("cursor","zoom-in")},
function(a){return a.CSS.supports("image-orientation","270deg")},
function(){return $n(13)},
function(a){return a.CSS.supports("position","sticky")},
function(a){return void 0===a.document.createElement("style").scoped},
function(a){return a.performance.getEntriesByType("resource")instanceof Array},
function(){return"undefined"==typeof window.InstallTrigger},
function(){return"object"==typeof(new window.Intl.Collator).resolvedOptions()},
function(a){return"boolean"==typeof a.navigator.onLine},
function(){return $n(14)},
function(a){return"undefined"==typeof a.navigator.xN},
function(a){return"number"==typeof a.performance.now()},
function(){return 0==(new window.Uint16Array(1))[0]},
function(a){return-1==a.ActiveXObject.toString().indexOf("native")},
function(a){return-1==Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")}],co=[function(a){a=a.document.createElement("div");
var b=null,c=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{a.style.behavior="url(#default#clientcaps)"}catch(e){}for(var d=0;d<c.length;d++){try{b=a.getComponentVersion(c[d],"componentid").replace(/,/g,".")}catch(e){}if(b)return b.split(".")[0]}return!1},
function(){return(new Date).getTimezoneOffset()},
function(a){return(a.innerWidth||a.document.documentElement.clientWidth||a.document.body.clientWidth)/(a.innerHeight||a.document.documentElement.clientHeight||a.document.body.clientHeight)},
function(a){return(a.outerWidth||a.document&&a.document.body&&a.document.body.offsetWidth)/(a.outerHeight||a.document&&a.document.body&&a.document.body.offsetHeight)},
function(a){return a.screen.availWidth/a.screen.availHeight},
function(a){return a.screen.width/a.screen.height}],eo=[function(a){return a.navigator.userAgent},
function(a){return a.navigator.platform},
function(a){return a.navigator.vendor}];g.E(jo,rg);jo.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.A=this.o=0};
jo.prototype.update=function(a,b){g.t(b)||(b=a.length);for(var c=b-this.l,d=this.B,e=this.o,f=0;f<b;){if(0==e)for(;f<=c;)ko(this,a,f),f+=this.l;if(g.w(a))for(;f<b;){if(d[e++]=a.charCodeAt(f++),e==this.l){ko(this,d);e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.l){ko(this,d);e=0;break}}this.o=e;this.A+=b};
jo.prototype.digest=function(){var a=Array((56>this.o?this.l:2*this.l)-this.o);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;var c=8*this.A;for(b=a.length-8;b<a.length;++b)a[b]=c&255,c/=256;this.update(a);a=Array(16);for(b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};g.r(lo,Vm);lo.prototype.g=function(a){var b=Vm.prototype.g.call(this,a);var c=Zn=(0,g.G)();var d=$n(5);c=(ho?!d:d)?c|2:c&-3;d=$n(2);c=(io?!d:d)?c|8:c&-9;c={s1:(c>>>0).toString(16)};this.l||(this.l=fo());b.B=this.l;b.C=Um(a,Zea,c,"h",mo("kArwaWEsTs"));b.A=Um(a,afa,{},"h",mo("b96YPMzfnx"));b.l=Um(a,bfa,{},"h",mo("yb8Wev6QDg"));return b};no.prototype.g=function(){return g.z(this.l)};g.r(po,no);po.prototype.g=function(a){if(!a.Xf)return no.prototype.g.call(this,a);var b=this.A[a.Xf];if(b)return function(a,d,e){b.l(a,d,e)};
Rj(393,Error());return null};g.r(vo,vn);g.h=vo.prototype;g.h.Om=function(a,b){var c=this;switch(wk.getInstance().Ya){case "nis":var d=yo(this,a,b);break;case "gsv":d=xo(this,a,b);break;case "exc":d=zo(this,a);break;default:b.opt_overlayAdElement?d=void 0:b.opt_adElement?d=Nn(this,a,b.opt_adElement,b.opt_osdId):d=wm(a)||void 0}d&&1==d.Wd()&&(d.ha==g.wa&&(d.ha=function(a){return c.Ms(a)}),wo(this,d,b));
return d};
g.h.Ms=function(a){var b=wk.getInstance();a.g=0;a.O=0;if("h"==a.A||"n"==a.A){if("exc"==b.Ya||"nis"==b.Ya)var c=g.z("ima.bridge.getVideoMetadata");else if(a.Xf&&Eo(this)){var d=this.F[a.Xf];d?c=function(a){d.g(a)}:null!==d&&Rj("lidar::missingPlayerCallback",Error())}else c=g.z("ima.common.getVideoMetadata");
if(g.Ba(c))try{var e=c(a.md)}catch(f){a.g|=4}else a.g|=2}else if("b"==a.A)if(b=g.z("ytads.bulleit.getVideoMetadata"),g.Ba(b))try{e=b(a.md)}catch(f){a.g|=4}else a.g|=2;else if("ml"==a.A)if(b=g.z("ima.common.getVideoMetadata"),g.Ba(b))try{e=b(a.md)}catch(f){a.g|=4}else a.g|=2;else a.g|=1;a.g||(g.t(e)?null===e?a.g|=16:g.dc(e)?a.g|=32:null!=e.errorCode&&(a.O=e.errorCode,a.g|=64):a.g|=8);null!=e||(e={});Qn(e,a);bk(e.volume)&&bk(this.H)&&(e.volume*=this.H);return e};
g.h.Zq=function(){if(Eo(this))return new po("ima.common.triggerExternalActivityEvent",this.l,this.F);var a=Ao(this);return null!=a?new no(a,this.l):null};
g.h.Sm=function(){var a=this.g,b=vn.prototype.Sm.call(this);b.push(new Xn(a));return b};
g.h.hp=function(a){!a.g&&a.Dg&&Hn(this,a,"overlay_unmeasurable_impression")&&(a.g=!0)};
g.h.Pv=function(a){a.vp&&(a.Mf()?Hn(this,a,"overlay_viewable_end_of_session_impression"):Hn(this,a,"overlay_unviewable_impression"),a.vp=!1)};
g.h.gn=function(a){if(this.C&&this.I){var b=this.I,c=b.g,d=Gi();c.B=d;this.B=b.g}this.A&&1==a.Wd()&&Fo(this,a)};
g.h.np=function(a){this.A&&1==a.Wd()&&Fo(this,a)};
g.h.jn=function(a,b){var c=wk.getInstance().nb;!Ci(c,"pdc")&&!Ci(c,"pdcy")||"h"!=Fn(this)&&"b"!=Fn(this)||"exc"==wk.getInstance().Ya||(this.C=!0,this.I=new Bl,this.B=null);return vn.prototype.jn.call(this,a,b)};
g.xa(vo);g.y("Goog_AdSense_Lidar_sendVastEvent",Qj(193,Ho,void 0,function(){var a=wk.getInstance(),b={};return b.sv="644",b["if"]=a.l?"1":"0",b.nas=String(km.g.length),b}),void 0);
g.y("Goog_AdSense_Lidar_getViewability",Qj(194,function(a,b){b=void 0===b?{}:b;var c=Do(vo.getInstance(),a,b);return Go(c)}),void 0);
g.y("Goog_AdSense_Lidar_getUrlSignalsArray",Qj(195,function(){return uo()}),void 0);
g.y("Goog_AdSense_Lidar_getUrlSignalsList",Qj(196,function(){return g.xg(uo())}),void 0);var hda=(new Date).getTime();g.h=g.No.prototype;g.h.hc=function(){Po(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.l[this.g[b]]);return a};
g.h.pd=function(){Po(this);return this.g.concat()};
g.h.isEmpty=function(){return 0==this.Aa};
g.h.clear=function(){this.l={};this.ig=this.Aa=this.g.length=0};
g.h.remove=function(a){return Oo(this.l,a)?(delete this.l[a],this.Aa--,this.ig++,this.g.length>2*this.Aa&&Po(this),!0):!1};
g.h.get=function(a,b){return Oo(this.l,a)?this.l[a]:b};
g.h.set=function(a,b){Oo(this.l,a)||(this.Aa++,this.g.push(a),this.ig++);this.l[a]=b};
g.h.forEach=function(a,b){for(var c=this.pd(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.No(this)};
g.h.uf=function(a){Po(this);var b=0,c=this.ig,d=this,e=new nl;e.next=function(){if(c!=d.ig)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw ol;var e=d.g[b++];return a?e:d.l[e]};
return e};g.Qo.prototype.toString=function(){var a=[],b=this.A;b&&a.push(Yo(b,RW,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.H)&&a.push(Yo(b,RW,!0),"@"),a.push(g.rb(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.l)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(Yo(c,"/"==c.charAt(0)?cfa:dfa,!0));(c=this.o.toString())&&a.push("?",c);(c=this.C)&&a.push("#",Yo(c,efa));return a.join("")};
g.Qo.prototype.resolve=function(a){var b=this.clone(),c=!!a.A;c?g.Ro(b,a.A):c=!!a.H;c?b.H=a.H:c=!!a.g;c?g.So(b,a.g):c=null!=a.B;var d=a.l;if(c)g.To(b,a.B);else if(c=!!a.l){if("/"!=d.charAt(0))if(this.g&&!this.l)d="/"+d;else{var e=b.l.lastIndexOf("/");-1!=e&&(d=b.l.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=g.ob(e,"/");e=e.split("/");for(var f=[],k=0;k<e.length;){var l=e[k++];"."==l?d&&k==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&k==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.l=d:c=""!==a.o.toString();c?Uo(b,a.o.clone()):c=!!a.C;c&&(b.C=a.C);return b};
g.Qo.prototype.clone=function(){return new g.Qo(this)};
var RW=/[#\/\?@]/g,dfa=/[#\?:]/g,cfa=/[#\?]/g,Zo=/[#\?@]/g,efa=/#/g;g.h=g.Wo.prototype;g.h.add=function(a,b){cp(this);this.l=null;a=dp(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.Aa=this.Aa+1;return this};
g.h.remove=function(a){cp(this);a=dp(this,a);return Oo(this.g.l,a)?(this.l=null,this.Aa=this.Aa-this.g.get(a).length,this.g.remove(a)):!1};
g.h.clear=function(){this.g=this.l=null;this.Aa=0};
g.h.isEmpty=function(){cp(this);return 0==this.Aa};
g.h.forEach=function(a,b){cp(this);this.g.forEach(function(c,d){(0,g.F)(c,function(c){a.call(b,c,d,this)},this)},this)};
g.h.pd=function(){cp(this);for(var a=this.g.hc(),b=this.g.pd(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.h.hc=function(a){cp(this);var b=[];if(g.w(a))ep(this,a)&&(b=g.Ya(b,this.g.get(dp(this,a))));else{a=this.g.hc();for(var c=0;c<a.length;c++)b=g.Ya(b,a[c])}return b};
g.h.set=function(a,b){cp(this);this.l=null;a=dp(this,a);ep(this,a)&&(this.Aa=this.Aa-this.g.get(a).length);this.g.set(a,[b]);this.Aa=this.Aa+1;return this};
g.h.get=function(a,b){var c=a?this.hc(a):[];return 0<c.length?String(c[0]):b};
g.h.toString=function(){if(this.l)return this.l;if(!this.g)return"";for(var a=[],b=this.g.pd(),c=0;c<b.length;c++){var d=b[c],e=g.rb(d);d=this.hc(d);for(var f=0;f<d.length;f++){var k=e;""!==d[f]&&(k+="="+g.rb(d[f]));a.push(k)}}return this.l=a.join("&")};
g.h.clone=function(){var a=new g.Wo;a.l=this.l;this.g&&(a.g=this.g.clone(),a.Aa=this.Aa);return a};var Kp={iy:5E3,jy:15E3,Zp:"://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),vy:/\bocr\b/,xm:0,ff:{},jJ:function(a,b,c){a&&(Kp.Bk(a)?Kp.kJ(a,b):Kp.iJ(a,b,c))},
Bk:function(a){if(g.qb(g.Gb(a)))return!1;if(0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))return!0;try{var b=new g.Qo(a)}catch(c){return null!=g.Na(Kp.Zp,function(b){return 0<a.search(b)})}return b.C.match(Kp.vy)?!0:null!=g.Na(Kp.Zp,function(b){return null!=a.match(b)})},
kJ:function(a,b){if(a&&(a=Kp.uz(a),!g.qb(a))){var c='javascript:"<body><img src=\\""+'+a+'+"\\"></body>"';b?Kp.qs(function(b){Kp.ew(b?c:'javascript:"<body><object data=\\""+'+a+'+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')}):Kp.ew(c)}},
ew:function(a){var b=g.Bd("IFRAME",{src:a,style:"display:none"});a=g.jd(b).body;var c=g.ng(function(){g.mf(d);g.Jd(b)},Kp.jy);
var d=Ye(b,["load","error"],function(){g.ng(function(){g.x.clearTimeout(c);g.Jd(b)},Kp.iy)});
a.appendChild(b)},
qs:function(a,b){var c=Kp.ff.imageLoadingEnabled;if(null!=c)a(c);else{var d=!1;c=function(b,c){delete Kp.ff[c];d||(d=!0,null!=Kp.ff.imageLoadingEnabled||(Kp.ff.imageLoadingEnabled=b),a(b))};
b?b(c):Kp.HA(c)}},
HA:function(a){var b=new window.Image,c=""+Kp.xm++;Kp.ff[c]=b;b.onload=function(){(0,window.clearTimeout)(d);a(!0,c)};
var d=(0,window.setTimeout)(function(){a(!1,c)},300);
b.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},
hJ:function(a){if(a){var b=g.Dd("OBJECT");b.data=a;b.width="1";b.height="1";b.style.visibility="hidden";var c=""+Kp.xm++;Kp.ff[c]=b;b.onload=b.onerror=function(){delete Kp.ff[c]};
window.document.body.appendChild(b)}},
gw:function(a){if(a){var b=new window.Image,c=""+Kp.xm++;Kp.ff[c]=b;b.onload=b.onerror=function(){delete Kp.ff[c]};
b.src=a}},
iJ:function(a,b,c){if(a){if(c)try{if(g.x.navigator&&g.x.navigator.sendBeacon&&g.x.navigator.sendBeacon(a,""))return}catch(d){}b?Kp.qs(function(b){b?Kp.gw(a):Kp.hJ(a)}):Kp.gw(a)}},
uz:function(a){a=g.Kc(g.Nc(a));if("about:invalid#zClosurez"===a)return"";a=g.Rc(Vc(a));return g.rb(g.xg(a))}};g.E(g.gp,g.I);var SW=[];g.h=g.gp.prototype;g.h.fa=function(a,b,c,d){g.za(b)||(b&&(SW[0]=b.toString()),b=SW);for(var e=0;e<b.length;e++){var f=g.Ze(a,b[e],c||this.handleEvent,d||!1,this.l||this);if(!f)break;this.g[f.key]=f}return this};
g.h.Ik=function(a,b,c,d){return hp(this,a,b,c,d)};
g.h.Qa=function(a,b,c,d,e){if(g.za(b))for(var f=0;f<b.length;f++)this.Qa(a,b[f],c,d,e);else c=c||this.handleEvent,d=g.Ca(d)?!!d.capture:!!d,e=e||this.l||this,c=$e(c),d=!!d,b=g.Qe(a)?a.di(b,c,d,e):a?(a=g.bf(a))?a.di(b,c,d,e):null:null,b&&(g.mf(b),delete this.g[b.key])};
g.h.R=function(){g.gp.wa.R.call(this);g.ip(this)};
g.h.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var jp=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.E(lp,g.Ne);qp.prototype.g=function(){return!1};
qp.prototype.getPlayerType=function(){return""};
var rp=new qp;var zp=null;var Ep=["*.youtu.be","*.youtube.com"],Jp="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),Ip=["c.googlesyndication.com"];var Np=function(){if(g.AA)return Mp(/Firefox\/([0-9.]+)/);if(g.vd||xA||g.zh)return vc;if(g.Ky)return pc()?Mp(/CriOS\/([0-9.]+)/):Mp(/Chrome\/([0-9.]+)/);if(g.ul&&!pc())return Mp(/Version\/([0-9.]+)/);if(CB||BB){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.Pb);if(a)return a[1]+"."+a[2]}else if(DB)return(a=Mp(/Android\s+([0-9.]+)/))?a:Mp(/Version\/([0-9.]+)/);return""}();var TW;
TW={Yx:["BC","AD"],Xx:["Before Christ","Anno Domini"],ry:"JFMAMJJASOND".split(""),Ey:"JFMAMJJASOND".split(""),Yp:"January February March April May June July August September October November December".split(" "),cq:"January February March April May June July August September October November December".split(" "),aq:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),eq:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),lq:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),gq:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
bq:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fq:"Sun Mon Tue Wed Thu Fri Sat".split(" "),PL:"SMTWTFS".split(""),Fy:"SMTWTFS".split(""),Ay:["Q1","Q2","Q3","Q4"],uy:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Qp:["AM","PM"],Ul:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],kq:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ux:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],Vl:6,Oy:[5,6],Wl:5};g.UW=TW;g.UW=TW;g.h=g.Rp.prototype;g.h.ak=g.UW.Vl;g.h.ck=g.UW.Wl;g.h.clone=function(){var a=new g.Rp(this.date);a.ak=this.ak;a.ck=this.ck;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.add=function(a){if(a.l||a.months){var b=this.getMonth()+a.months+12*a.l,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),Qp(this,a.getDate()))};
g.h.Hl=function(a){return[this.getFullYear(),g.Fb(this.getMonth()+1,2),g.Fb(this.getDate(),2)].join(a?"-":"")+""};
g.h.toString=function(){return this.Hl()};
g.h.valueOf=function(){return this.date.valueOf()};var Tp=new Sp;Sp.prototype.clear=function(){this.g=null;this.o="";this.l=null};g.xa(Vp);Vp.prototype.isLoggingEnabled=function(){return this.l};g.E(Zp,g.rf);var $p=null;g.y("ima.bridge.getNativeViewability",function(a,b){aq();b({})},void 0);
g.y("ima.bridge.getVideoMetadata",function(){var a=(aq(),null);return g.Ba(a)?a():{}},void 0);
g.y("ima.bridge.triggerViewEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;aq().dispatchEvent(new lp("viewable_impression",null,c))},void 0);
g.y("ima.bridge.triggerMeasurableEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;aq().dispatchEvent(new lp("measurable_impression",null,c))},void 0);
g.y("ima.bridge.triggerExternalActivityEvent",function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;aq().dispatchEvent(new lp("externalActivityEvent",null,d))},void 0);var VW=!1,WW="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(VW=!0,a.description)){WW=bq(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){VW=!0;WW="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],VW=!(!a||!a.enabledPlugin))){WW=bq(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");VW=
!0;WW=bq(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");VW=!0;WW="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),VW=!0,WW=bq(b.GetVariable("$version"))}catch(c){}})();
var oda=VW,ida=WW;g.E(cq,g.rf);var dq=null;cq.prototype.R=function(){this.ea.Qa(this.g,"activityMonitor",this.A);this.l=!1;this.C.clear();cq.wa.R.call(this)};
cq.prototype.init=function(a){if(!this.l){if(this.g=a||null)this.ea.fa(this.g,"activityMonitor",this.A),fq(this);if(!(g.x.ima&&g.x.ima.video&&g.x.ima.video.client&&g.x.ima.video.client.tagged)){g.y("ima.video.client.sdkTag",!0,void 0);var b=g.x.document;a=b.createElement("script");var c=b.location.protocol;"http:"!=c&&"https:"!=c&&(c="");a.src=c+"//s0.2mdn.net/instream/video/client.js";a.async=!0;a.type="text/javascript";b=b.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(a=rp.g())||
(a=!1);a||(vo.getInstance().A=!0);this.o=(g.Ba(null),null);this.l=!0}};
cq.prototype.A=function(a){var b=a.g(),c=b.queryId,d={};d.eventId=b.eventId;switch(a.l()){case "getPageSignals":fq(this);break;case "reportVastEvent":a=b.vastEvent;var e=b.osdId,f={};f.opt_fullscreen=b.isFullscreen;b.isOverlay&&(f.opt_bounds=b.overlayBounds);if(this.l)if(this.o)c=this.o(a,c,f);else{b=f||{};if(e=e?this.B.get(e):rp.o){if(null==b.opt_fullscreen){if(null==e)f=!1;else if((BW&&!CW||Db(g.Pb,"iPod"))&&null!=e.webkitDisplayingFullscreen)f=e.webkitDisplayingFullscreen;else{f=window.screen.availWidth||
window.screen.width;var k=window.screen.availHeight||window.screen.height;var l=g.Ba(e.getBoundingClientRect)&&g.Qd(g.jd(e),e)?e.getBoundingClientRect():{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};f=0>=f-l.width&&42>=k-l.height}b.opt_fullscreen=f}null!=b.opt_adElement||(b.opt_adElement=e)}c=Pj("lidar::handlevast_html5",g.B(Ho,a,c,b))||{}}else c={};d.viewabilityData=c;this.g.send("activityMonitor","viewability",d);break;case "fetchAdTagUrl":c={},c.eventId=b.eventId,
e=b.osdId,d=null,$b(b,"isFullscreen")&&(d=b.isFullscreen),$b(b,"loggingId")&&(a=b.loggingId,c.loggingId=a,Yp(Vp.getInstance(),{step:"beforeLookup",logid:a,time:(0,g.G)()})),c.engagementString=gq(this,e,d),this.g.send("activityMonitor","engagement",c)}};
g.y("ima.common.getVideoMetadata",function(a){a=eq().C.get(a);return g.Ba(a)?a():{}},void 0);
g.y("ima.common.triggerViewEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=eq().g;d?d.send("activityMonitor","viewableImpression",c):eq().dispatchEvent(new lp("viewable_impression",null,c))},void 0);
g.y("ima.common.triggerViewabilityMeasurementUpdate",function(a,b){var c=eq().g,d={};d.queryId=a;d.viewabilityData=b;c&&c.send("activityMonitor","viewabilityMeasurement",d)},void 0);
g.y("ima.common.triggerMeasurableEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=eq().g;d?d.send("activityMonitor","measurableImpression",c):eq().dispatchEvent(new lp("measurable_impression",null,c))},void 0);
g.y("ima.common.triggerExternalActivityEvent",function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;(a=eq().g)?a.send("activityMonitor","externalActivityEvent",d):eq().dispatchEvent(new lp("externalActivityEvent",null,d))},void 0);
eq();g.hq.prototype.g=function(a){var b=0,c=0,d=!1;a=a.split(Rea);for(var e=0;e<a.length;e++){var f=a[e];Pea.test(f)?(b++,c++):Qea.test(f)?d=!0:Oea.test(f)?c++:Sea.test(f)&&(d=!0)}return 0==c?d?1:0:.4<b/c?-1:1};jq.prototype.g=null;jq.prototype.toString=function(){return this.content};
g.E(kq,jq);(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=new b(String(a));void 0!==d&&(c.g=d);return c}})(kq);
var lq={};(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=String(a);if(!c)return"";c=new b(c);void 0!==d&&(c.g=d);return c}})(kq);var ffa=g.vd?Hc(Bc(g.Cc('javascript:""'))):Hc(Bc(g.Cc("about:blank")));Gc(ffa);var gfa=g.vd?Hc(Bc(g.Cc('javascript:""'))):Hc(Bc(g.Cc("javascript:undefined")));Gc(gfa);mq("a","");mq("a","fixedDirectionality");mq("a","redesign2014q4");mq("b","");mq("b","redesign2014q4");mq("b","forcedlinebreak");var uq=g.vd&&tq();g.E(g.wq,g.I);g.h=g.wq.prototype;g.h.start=function(){this.stop();this.o=!1;var a=xq(this),b=yq(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.oa=g.Ze(this.g,"MozBeforePaint",this.l),this.g.mozRequestAnimationFrame(null),this.o=!0):this.oa=a&&b?a.call(this.g,this.l):this.g.setTimeout(wf(this.l),20)};
g.h.ki=function(){this.isActive()||this.start()};
g.h.stop=function(){if(this.isActive()){var a=xq(this),b=yq(this);a&&!b&&this.g.mozRequestAnimationFrame?g.mf(this.oa):a&&b?b.call(this.g,this.oa):this.g.clearTimeout(this.oa)}this.oa=null};
g.h.isActive=function(){return null!=this.oa};
g.h.zz=function(){this.o&&this.oa&&g.mf(this.oa);this.oa=null;this.B.call(this.A,(0,g.G)())};
g.h.R=function(){this.stop();g.wq.wa.R.call(this)};g.E(g.P,g.I);g.h=g.P.prototype;g.h.oa=0;g.h.R=function(){g.P.wa.R.call(this);this.stop();delete this.g;delete this.l};
g.h.start=function(a){this.stop();this.oa=g.ng(this.o,g.t(a)?a:this.zc)};
g.h.stop=function(){this.isActive()&&g.x.clearTimeout(this.oa);this.oa=0};
g.h.isActive=function(){return 0!=this.oa};
g.h.Jr=function(){this.oa=0;this.g&&this.g.call(this.l)};g.xa(g.Cq);g.Cq.prototype.g=0;g.E(g.Eq,g.rf);g.h=g.Eq.prototype;g.h.rA=g.Cq.getInstance();g.h.ia=function(){return this.l};
g.h.sp=function(a){if(this.I&&this.I!=a)throw Error("Method not supported");g.Eq.wa.sp.call(this,a)};
g.h.Zm=ba(0);g.h.Yh=function(){Fq(this,function(a){a.zg&&a.Yh()});
this.B&&g.ip(this.B);this.zg=!1};
g.h.R=function(){this.zg&&this.Yh();this.B&&(this.B.dispose(),delete this.B);Fq(this,function(a){a.dispose()});
this.l&&g.Jd(this.l);this.I=this.l=this.C=this.H=null;g.Eq.wa.R.call(this)};
g.h.removeChild=function(a,b){if(a){var c=g.w(a)?a:a.oa||(a.oa=g.Dq(a.rA));a=this.C&&c?gc(this.C,c)||null:null;if(c&&a){fc(this.C,c);g.Wa(this.H,a);b&&(a.Yh(),a.l&&g.Jd(a.l));c=a;if(null==c)throw Error("Unable to set parent component");c.I=null;g.Eq.wa.sp.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};Hc(Bc(g.Cc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Hc(Bc(g.Cc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Hq("d");Iq("d");Jq("d");Hq("f");Iq("f");Jq("f");Hq("i");Iq("i");Jq("i");Hq("j");Iq("j");Jq("j");Jq("j");Hq("u");Iq("u");Jq("u");Hq("v");Iq("v");Jq("v");Jq("v");Hq("b");Iq("b");Jq("b");Hq("e");Iq("e");Jq("e");Hq("s");Iq("s");Jq("s");Hq("B");Iq("B");Jq("B");Hq("x");Iq("x");Jq("x");Hq("y");Iq("y");Jq("y");Hq("g");Iq("g");Jq("g");Hq("h");Iq("h");Jq("h");Hq("n");Iq("n");Jq("n");Hq("o");Iq("o");Jq("o");Jq("o");Hc(Bc(g.Cc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Hc(Bc(g.Cc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Lq.prototype.g=null;g.E(Mq,Lq);g.XW=new Mq;new g.No;var YW=[];g.y("onYouTubeIframeAPIReady",function(){(0,g.F)(YW,function(a){a()});
Ta(YW)},window);Nq.prototype.clone=function(){return new Nq(this.g,this.F,this.o,this.B,this.A,this.C,this.l,this.H)};Qq.prototype.l=0;Qq.prototype.reset=function(){this.g=this.o=this.A;this.l=0};
Qq.prototype.getValue=function(){return this.o};g.E(g.Sq,g.I);g.h=g.Sq.prototype;g.h.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.Mb;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.Mb=e+3;d.push(e);return e};
g.h.unsubscribe=function(a,b,c){if(a=this.l[a]){var d=this.g;if(a=g.Na(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.Dc(a)}return!1};
g.h.Dc=function(a){var b=this.g[a];if(b){var c=this.l[b];0!=this.A?(this.o.push(a),this.g[a+1]=g.wa):(c&&g.Wa(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
g.h.P=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var k=c[e];Tq(this.g[k+1],this.g[k+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.g[k+1].apply(this.g[k+2],d)}finally{if(this.A--,0<this.o.length&&0==this.A)for(;c=this.o.pop();)this.Dc(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.l[a];b&&((0,g.F)(b,this.Dc,this),delete this.l[a])}else this.g.length=0,this.l={}};
g.h.R=function(){g.Sq.wa.R.call(this);this.clear();this.o.length=0};g.Uq.prototype.set=function(a,b){g.t(b)?this.g.set(a,g.xg(b)):this.g.remove(a)};
g.Uq.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Uq.prototype.remove=function(a){this.g.remove(a)};g.E(Vq,g.Uq);Vq.prototype.set=function(a,b){Vq.wa.set.call(this,a,Xq(b))};
Vq.prototype.l=function(a){a=Vq.wa.get.call(this,a);if(!g.t(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Vq.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!g.t(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.E(Yq,Vq);Yq.prototype.set=function(a,b,c){if(b=Xq(b)){if(c){if(c<(0,g.G)()){Yq.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.G)()}Yq.wa.set.call(this,a,b)};
Yq.prototype.l=function(a,b){var c=Yq.wa.l.call(this,a);if(c)if(!b&&g.Zq(c))Yq.prototype.remove.call(this,a);else return c};g.E(g.$q,Yq);g.E(br,ar);br.prototype.clear=function(){var a=rl(this.uf(!0)),b=this;(0,g.F)(a,function(a){b.remove(a)})};g.E(cr,br);g.h=cr.prototype;g.h.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.g.getItem(a);if(!g.w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.g.removeItem(a)};
g.h.uf=function(a){var b=0,c=this.g,d=new nl;d.next=function(){if(b>=c.length)throw ol;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.w(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.g.clear()};
g.h.key=function(a){return this.g.key(a)};g.E(dr,cr);g.E(er,cr);g.E(fr,br);fr.prototype.set=function(a,b){this.l.set(this.g+a,b)};
fr.prototype.get=function(a){return this.l.get(this.g+a)};
fr.prototype.remove=function(a){this.l.remove(this.g+a)};
fr.prototype.uf=function(a){var b=this.l.uf(!0),c=this,d=new nl;d.next=function(){for(var d=b.next();d.substr(0,c.g.length)!=c.g;)d=b.next();return a?d.substr(c.g.length):c.l.get(d)};
return d};hr.prototype.getValue=function(){return this.g};
hr.prototype.clone=function(){return new hr(this.Mb,this.g)};g.h=ir.prototype;g.h.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)Ta(a);else{a[0]=a.pop();a=0;b=this.g;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,k=2*a+2;f=k<d&&b[k].Mb<b[f].Mb?k:f;if(b[f].Mb>e.Mb)break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.h.hc=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.h.pd=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].Mb);return b};
g.h.clone=function(){return new ir(this)};
g.h.isEmpty=function(){return 0==this.g.length};
g.h.clear=function(){Ta(this.g)};g.E(kr,ir);var mr=/^\.google\.(com?\.)?[a-z]{2,3}$/,nr=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,rr=g.x,pr,sr,vr={Km:function(){return 0<sr[8]},
TI:function(){sr[8]++},
UI:function(){0<sr[8]&&sr[8]--},
VI:function(){sr[8]=0},
shouldRetry:function(){return!1},
vr:function(){return sr[5]},
xq:function(a){try{a()}catch(b){g.x.setTimeout(function(){throw b;},0)}},
gp:function(){if(!vr.Km()){var a=g.x.document,b=function(b){b=qr(b);a:{try{var c=hi();break a}catch(l){}c=void 0}var d=c;lr(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return g.x.processGoogleToken({},2)};
b=g.$d(b);g.Yc(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),vr.TI()}catch(l){}},c=sr[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.x.setTimeout(function(){return g.x.processGoogleToken(d,1)},1E3)}}};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
Cr.prototype.cancel=function(a){if(this.g)this.o instanceof Cr&&this.o.cancel();else{if(this.l){var b=this.l;delete this.l;a?b.cancel(a):(b.H--,0>=b.H&&b.cancel())}this.O?this.O.call(this.L,this):this.I=!0;this.g||(a=new Lr(this),Gr(this),Er(this,!1,a))}};
Cr.prototype.K=function(a,b){this.F=!1;Er(this,a,b)};
Cr.prototype.Hj=function(a){Gr(this);Er(this,!0,a)};
Cr.prototype.then=function(a,b,c){var d,e,f=new g.Pf(function(a,b){d=a;e=b});
Hr(this,d,function(a){a instanceof Lr?f.cancel():e(a)});
return f.then(a,b,c)};
Mf(Cr);Cr.prototype.isError=function(a){return a instanceof Error};
g.E(Fr,Ja);Fr.prototype.message="Deferred has already fired";Fr.prototype.name="AlreadyCalledError";g.E(Lr,Ja);Lr.prototype.message="Deferred was canceled";Lr.prototype.name="CanceledError";Kr.prototype.l=function(){delete Jr[this.oa];throw this.g;};
var Jr={};g.E(Mr,we);g.E(Pr,we);var Or=[2,11];g.yu=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.Rr=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.y("yt.config_",g.Rr,void 0);(0,g.G)();var Xr=g.t(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.t(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var ms={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},vs=!1;var WA=CB||BB;var Qs={},Ps=0;g.r(Ss,Ja);Vs.prototype.then=function(a,b,c){return this.o?this.o.then(a,b,c):1===this.l&&a?(a=a.call(c,this.g),Nf(a)?a:Xs(a)):2===this.l&&b?(a=b.call(c,this.g),Nf(a)?a:Ws(a)):this};
Vs.prototype.getValue=function(){return this.g};
Mf(Vs);g.r(Zs,Ja);Zs.prototype.name="BiscottiError";g.r(Ys,Ja);Ys.prototype.name="BiscottiMissingError";var bt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},at=null;g.r(it,Ja);it.prototype.name="YuzuError";var ot={};var hfa,pt;hfa=0;pt=g.xd?"webkit":g.yh?"moz":g.vd?"ms":g.zh?"o":"";g.ZW=g.z("ytDomDomGetNextId")||function(){return++hfa};
g.y("ytDomDomGetNextId",g.ZW,void 0);var zt={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};At.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
At.prototype.ms=function(){return this.event?!1===this.event.returnValue:!1};
At.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
At.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ct=g.z("ytEventsEventsListeners")||{};g.y("ytEventsEventsListeners",Ct,void 0);var Et=g.z("ytEventsEventsCounter")||{count:0};g.y("ytEventsEventsCounter",Et,void 0);var ifa=g.xf(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.E(Qt,g.I);Qt.prototype.K=function(a){g.t(a.g)||Bt(a);var b=a.g;g.t(a.l)||Bt(a);this.g=new g.dd(b,a.l)};
Qt.prototype.C=function(){if(this.g){var a=g.yu();if(0!=this.A){var b=this.B,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.A);this.l[this.Pa]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.I();this.o=d}this.A=a;this.B=this.g;this.Pa=(this.Pa+1)%4}};
Qt.prototype.R=function(){window.clearInterval(this.H);g.Gt(this.F)};g.r(g.Rt,g.I);g.Rt.prototype.M=function(a,b,c,d,e){c=Vr((0,g.A)(c,d||this.Pb));c={target:a,name:b,Hj:c};var f;e&&ifa()&&(f={passive:!0});a.addEventListener(b,c.Hj,f);this.L.push(c);return c};
g.Rt.prototype.Qa=function(a){for(var b=0;b<this.L.length;b++)if(this.L[b]==a){this.L.splice(b,1);a.target.removeEventListener(a.name,a.Hj);break}};
g.Rt.prototype.R=function(){g.Tt(this);g.I.prototype.R.call(this)};g.E(g.R,g.I);g.h=g.R.prototype;g.h.subscribe=function(a,b,c){return this.ga()?0:this.oc.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.ga()?!1:this.oc.unsubscribe(a,b,c)};
g.h.Dc=function(a){return this.ga()?!1:this.oc.Dc(a)};
g.h.P=function(a,b){return this.ga()?!1:this.oc.P.apply(this.oc,arguments)};
g.h.Df=ba(2);g.r(g.Vt,g.R);g.h=g.Vt.prototype;g.h.cancel=function(){this.A&&(this.A=!1,this.P("dragend",0,0,null));this.l&&(this.l=!1,this.P("hoverend",0,0,null),g.Tt(this.g),Ut(this))};
g.h.Rs=function(a){g.Tt(this.g);Wt(this,Xt("move"),this.Ps);Wt(this,Xt("out"),this.Qs);Wt(this,"touchstart",this.Rn);this.o&&Wt(this,Xt("down"),this.Qn);var b=g.Ht(a);a=Kt(a);this.l=!0;this.P("hoverstart",a.x,a.y,b);this.P("hovermove",a.x,a.y,b)};
g.h.Ps=function(a){var b=g.Ht(a);a=Kt(a);if(this.B){var c=this.B;this.B=null;if(Jt(c)==b&&ed(Kt(c),a))return}this.P("hovermove",a.x,a.y,b)};
g.h.Qs=function(a){var b=Kt(a),c=Jt(a);c&&g.Qd(this.C,c)?(this.B=a,this.P("hovermove",b.x,b.y,c)):(g.Tt(this.g),Ut(this),this.l=!1,this.P("hoverend",b.x,b.y,c))};
g.h.CE=function(a){this.Rs(a);this.Qn(a)};
g.h.Qn=function(a){if(!g.va(a.button)||0==a.button){g.Tt(this.g);this.g.M(window.document,Xt("move"),this.BE);this.g.M(window.document,Xt("up"),this.TA);var b=g.Ht(a);if(g.xd)Wt(this,"dragstart",this.gz);else if(g.Lt(a),(g.qw||g.yh)&&b)a:{for(var c=b;c;){if(g.Ud(c)||"-1"===c.getAttribute("tabindex")){c.focus();break a}c=c.parentElement}window.document.activeElement.blur()}this.A=!0;a=Kt(a);this.P("dragstart",a.x,a.y,b);this.P("dragmove",a.x,a.y,b)}};
g.h.gz=function(a){g.Lt(a)};
g.h.BE=function(a){var b=g.Ht(a);b==window.document&&(b=null);a=Kt(a);this.P("hovermove",a.x,a.y,b);this.P("dragmove",a.x,a.y,b)};
g.h.TA=function(a){g.Tt(this.g);this.A=!1;var b=It(a),c=g.Ht(a);a=Kt(a);b&&g.Qd(this.C,b)?(Wt(this,Xt("move"),this.Ps),Wt(this,Xt("out"),this.Qs),Wt(this,Xt("down"),this.Qn),Wt(this,"touchstart",this.Rn),this.P("dragend",a.x,a.y,c)):(Ut(this),this.l=!1,this.P("dragend",a.x,a.y,c),this.P("hoverend",a.x,a.y,c))};
g.h.Rn=function(a){var b=a.changedTouches[0];b&&(g.Tt(this.g),Wt(this,"touchmove",this.BJ),Wt(this,"touchend",this.Ss),Wt(this,"touchcancel",this.Ss),this.F=b.identifier,a=g.Ht(a),this.l||(this.l=!0,this.P("hoverstart",b.pageX,b.pageY,a)),this.P("hovermove",b.pageX,b.pageY,a),this.o&&(this.A=!0,this.P("dragstart",b.pageX,b.pageY,a),this.P("dragmove",b.pageX,b.pageY,a)))};
g.h.BJ=function(a){var b=Yt(this,a);b&&(this.o&&g.Lt(a),a=g.Ht(a),this.P("hovermove",b.pageX,b.pageY,a),this.o&&this.P("dragmove",b.pageX,b.pageY,a))};
g.h.Ss=function(a){var b=Yt(this,a);if(b){g.Tt(this.g);Ut(this);this.l=!1;var c=g.Ht(a);this.o&&(this.H||g.Lt(a),this.A=!1,this.P("dragend",b.pageX,b.pageY,c));this.P("hoverend",b.pageX,b.pageY,c)}};
g.h.R=function(){this.o&&(g.xd&&this.C.removeAttribute("draggable"),this.C.style.touchAction="");g.Tt(this.g);g.R.prototype.R.call(this)};var Zt={enablejsapi:1},$t={},au={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};bu.prototype.clone=function(){var a=new bu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ya(c)?a[b]=g.hc(c):a[b]=c}return a};var jfa=g.z("ytPubsubPubsubInstance")||new g.Sq;g.Sq.prototype.subscribe=g.Sq.prototype.subscribe;g.Sq.prototype.unsubscribeByKey=g.Sq.prototype.Dc;g.Sq.prototype.publish=g.Sq.prototype.P;g.Sq.prototype.clear=g.Sq.prototype.clear;g.y("ytPubsubPubsubInstance",jfa,void 0);g.eu=g.z("ytPubsubPubsubSubscribedKeys")||{};g.y("ytPubsubPubsubSubscribedKeys",g.eu,void 0);g.gu=g.z("ytPubsubPubsubTopicToKeys")||{};g.y("ytPubsubPubsubTopicToKeys",g.gu,void 0);var fu=g.z("ytPubsubPubsubIsSynchronous")||{};
g.y("ytPubsubPubsubIsSynchronous",fu,void 0);var wu={log_event:"events",log_interaction:"interactions"},$W=Object.create(null);$W.log_event="GENERIC_EVENT_LOGGING";$W.log_interaction="INTERACTION_LOGGING";var ou={},mu={},vu=0,nu=g.z("ytLoggingTransportLogPayloadsQueue_")||{};g.y("ytLoggingTransportLogPayloadsQueue_",nu,void 0);var pu=g.z("ytLoggingTransportTokensToCttTargetIds_")||{};g.y("ytLoggingTransportTokensToCttTargetIds_",pu,void 0);var xu=g.z("ytLoggingTransportDispatchedStats_")||{};g.y("ytLoggingTransportDispatchedStats_",xu,void 0);
g.y("ytytLoggingTransportCapturedTime_",g.z("ytLoggingTransportCapturedTime_")||{},void 0);g.r(Du,Bu);Du.prototype.start=function(){var a=g.z("yt.scheduler.instance.start");a&&a()};
Du.prototype.pause=function(){var a=g.z("yt.scheduler.instance.pause");a&&a()};
g.xa(Du);Du.getInstance();var Ku={};g.y("ytLoggingLatencyUsageStats_",g.z("ytLoggingLatencyUsageStats_")||{},void 0);var Qu=(0,g.G)().toString();Su();var Vu;g.Uu=g.xf(function(){var a=new dr;return a.isAvailable()?new g.$q(a):null});
Vu=g.xf(function(){var a=new er;return a.isAvailable()?new g.$q(a):null});var cv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.y("yt.msgs_",cv,void 0);var zU=16/9,kfa=[.25,.5,.75,1,1.25,1.5,2];var mv={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",305:"h",140:"a",327:"sa",258:"m",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",147:"H",384:"H",376:"H",385:"H",377:"H",149:"A",261:"M",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",271:"9",313:"9",272:"9",302:"9",303:"9",308:"9",315:"9",330:"9h",331:"9h",332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",250:"o",251:"o",194:"*",
195:"*",220:"*",221:"*",196:"*",197:"*",198:"V",279:"(",280:"(",317:"(",318:"(",273:"(",274:"(",357:"(",358:"(",275:"(",359:"(",360:"(",276:"(",314:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",367:"(h",368:"(h",394:"1",395:"1",396:"1",397:"1",398:"1",399:"1",400:"1",401:"1",402:"1",386:"3",387:"w",406:"6"};var jB={name:"width",video:!0,valid:640,Ag:99999},kB={name:"height",video:!0,valid:360,Ag:99999},hB={name:"framerate",video:!0,valid:30,Ag:9999},lB={name:"bitrate",video:!0,valid:3E5,Ag:2E9},iB={name:"eotf",video:!0,valid:"bt709",Ag:"catavision"},aB={name:"channels",video:!1,valid:2,Ag:99},bB={name:"cryptoblockformat",video:!0,valid:"subsample",Ag:"invalidformat"},mB={fN:jB,lL:kB,eL:hB,rK:lB,YK:iB,GK:aB,NK:bB};fv.prototype.o=function(){return this.name};
fv.prototype.l=function(){return this.id};
fv.prototype.g=function(){return this.isDefault};
fv.prototype.toString=function(){return this.name};
fv.prototype.getName=fv.prototype.o;fv.prototype.getId=fv.prototype.l;fv.prototype.getIsDefault=fv.prototype.g;var Hv={oK:"auto",QM:"tiny",FL:"light",GM:"small",LL:"medium",DL:"large",kL:"hd720",gL:"hd1080",hL:"hd1440",iL:"hd2160",jL:"hd2880",pL:"highres",UNKNOWN:"unknown"};var aX;aX={};g.hv=(aX.auto=0,aX.tiny=144,aX.light=144,aX.small=240,aX.medium=360,aX.large=480,aX.hd720=720,aX.hd1080=1080,aX.hd1440=1440,aX.hd2160=2160,aX.hd2880=2880,aX.highres=4320,aX);var lv="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");Av.prototype.dispose=function(){if(!this.l){if(this.g)try{window.URL.revokeObjectURL(this.Of)}catch(a){}this.l=!0}};
Av.prototype.ga=function(){return this.l};Bv.prototype.Re=function(){return this.Bf};
Bv.prototype.l=function(){return null};
Bv.prototype.A=function(){};
var maa={52:!0,53:!0,54:!0,55:!0,60:!0,79:!0,87:!0};Cv.prototype.isLocked=function(){return this.o&&!!this.l&&this.l==this.g};
Cv.prototype.A=function(a){return a.video?Jv(this,a.video.quality):!1};
var OI=Dv("auto","large",!1),Fv=Dv("auto","auto",!1);Dv("small","auto",!1);var bX={},cX=(bX["api.invalidparam"]=2,bX.auth=150,bX["drm.auth"]=150,bX["heartbeat.net"]=150,bX["heartbeat.servererror"]=150,bX["heartbeat.stop"]=150,bX["html5.unsupportedads"]=5,bX["fmt.noneavailable"]=5,bX["fmt.decode"]=5,bX["fmt.unplayable"]=5,bX["html5.missingapi"]=5,bX["html5.unsupportedlive"]=5,bX["drm.unavailable"]=5,bX);var Xv=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,Tv=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(education|-nocookie)?\.com\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/,
Zv=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,iw=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,Kca=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|youtube\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
Baa=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/\/*embed(\/+|\?|#|$|%)/,cw=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
Vv=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/,gw=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion)))/,aw=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(ba\.l\.google\.com|c\.googlesyndication\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|c\.lh3\.googleusercontent\.com|plus\.google\.com|mail\.google\.com|ed\.video\.google\.com|vp\.video\.l\.google\.com|youtube\.com|youtubeeducation\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b))/,
ew=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
Caa=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|picasaweb\.google\.com|get\.google\.com|lh2\.google\.com|plus\.google\.com|spaces\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|vevo\.com|jamboard\.google\.com|chat\.google\.com|meet\.google\.com)(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?\/(?!url\b)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|24e12c4a-a-95274a9c-s-sites\.googlegroups\.com\/a\/google\.com\/flash-api-test-harness\/apiharness\.swf|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/,
lfa=/^(https\:\/\/googleads\.g\.doubleclick\.net|https\:\/\/play\.google\.com|https\:\/\/photos\.google\.com|https\:\/\/get\.google\.com|https\:\/\/plus\.google\.com|https\:\/\/mail\.google\.com|https\:\/\/talkgadget\.google\.com|https\:\/\/jamboard\.google\.com|https\:\/\/chat\.google\.com)$|^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?$|^http:\/\/[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?$|^https:\/\/((staging|today)\.)?meet\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)*youtube\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sandbox\.google\.com$|^https:\/\/(books|play-books-internal-sandbox)\.googleusercontent\.com$|^https:\/\/(draft|www|www\.daily\.alpha)\.blogger\.com$|^https?:\/\/(((docs|m|sing|ss|sss|www)\.)?drive\.google\.com$|([A-Za-z0-9-]{1,63}\.)*corp\.google\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\.)*googleplex\.com(:[0-9]+)?$|(www\.|encrypted\.)google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))$|docs\.google\.com$|imasdk\.googleapis\.com$|lightbox-(demos|builder)\.appspot\.com$|s[01](qa)?\.2mdn\.net$|survey\.g\.doubleclick\.net$|tpc\.googlesyndication\.com$|www\.gstatic\.com$)/;var mw=1;g.r(g.pw,g.I);g.pw.prototype.ca=function(a,b){g.va(b)?Id(a,this.element,b):a.appendChild(this.element)};
g.pw.prototype.update=function(a){for(var b in a)this.updateValue(b,a[b])};
g.pw.prototype.updateValue=function(a,b){var c=this.Ma["{{"+a+"}}"];c&&tw(this,c[0],c[1],b)};
g.pw.prototype.R=function(){this.Z={};this.Ma={};g.uw(this);g.I.prototype.R.call(this)};g.r(g.U,g.pw);g.h=g.U.prototype;g.h.sb=function(a,b){this.updateValue(b||"content",a)};
g.h.show=function(){this.ba||(this.element.style.display=this.Nc,this.ba=!0)};
g.h.hide=function(){this.ba&&(this.element.style.display="none",this.ba=!1)};
g.h.Na=function(){return this.ba};
g.h.fa=function(a,b,c){return this.M(this.element,a,b,c)};
g.h.M=function(a,b,c,d){c=(0,g.A)(c,d||this);d={target:a,type:b,listener:c};this.U.push(d);a.addEventListener(b,c);return d};
g.h.Qa=function(a){for(var b=0;b<this.U.length;b++)if(this.U[b]==a){a=this.U.splice(b,1)[0];a.target.removeEventListener(a.type,a.listener);break}};
g.h.focus=function(){g.Ud(this.element);this.element.focus()};
g.h.R=function(){for(;this.U.length;){var a=this.U.pop();a.target.removeEventListener(a.type,a.listener)}g.pw.prototype.R.call(this)};g.r(g.ww,g.U);g.ww.prototype.subscribe=function(a,b,c){return this.T.subscribe(a,b,c)};
g.ww.prototype.unsubscribe=function(a,b,c){return this.T.unsubscribe(a,b,c)};
g.ww.prototype.Dc=function(a){return this.T.Dc(a)};
g.ww.prototype.P=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.T.P.apply(this.T,[].concat([a],g.pa(c)))};g.r(g.yw,g.ww);g.yw.prototype.updateValue=function(a,b){g.ww.prototype.updateValue.call(this,a,b);this.P("size-change")};g.r(Cw,g.I);g.h=Cw.prototype;g.h.cC=function(a,b,c){var d=this.I[a];d||(d=this.K[a])&&(c&&lfa.test(c)||Wr(Error('API call from an untrusted origin: "'+c+'"')));if(d)return d.apply(this,b);throw Error('Unknown API method: "'+a+'".');};
g.h.VB=function(){return this.F.slice()};
g.h.WB=function(){return g.Yb(this.A)};
g.h.ia=function(){return this.o};
g.h.addEventListener=function(a,b){if(g.w(b)){var c=function(){g.z(b).apply(window,arguments)};
this.C[b]=c}else c=b;this.app.da.subscribe(a,c)};
g.h.lz=function(a,b){var c=this,d=g.w(b)?a+b:a+g.Fa(b);if(!this.B[d]){var e;g.w(b)?e=function(){g.z(b).apply(window,arguments)}:e=b;
var f=function(a){e({target:c.l,data:a})};
this.B[d]=f;this.app.da.subscribe(a,f)}};
g.h.removeEventListener=function(a,b){if(g.w(b)){var c=this.C[b];fc(this.C,b);b=c}this.app.da.unsubscribe(a,b)};
g.h.mz=function(a,b){var c=g.w(b)?a+b:a+g.Fa(b),d=this.B[c];d&&(this.app.da.unsubscribe(a,d),fc(this.B,c))};
g.h.Pf=function(){return TV(this.app)};
g.h.wb=function(a,b){this.g&&cW(this.app,!0,this.playerType);sW(this.app,a,b,void 0,this.playerType)};
g.h.xa=function(){return PV(this.app,this.playerType)};
g.h.XB=function(){var a=g.X(this.app,this.playerType);if(!a)return 0;a=gK(a);return(0,window.isNaN)(a)?this.xa():a};
g.h.Bc=function(){return QV(this.app,this.playerType)};
g.h.Nb=function(){return this.app.K.volume};
g.h.setVolume=function(a){Hw(this,a)};
g.h.isMuted=function(){return this.app.K.muted};
g.h.mute=function(){Iw(this)};
g.h.Ce=function(){Jw(this)};
g.h.Vc=function(){this.g&&cW(this.app,!0,this.playerType);var a=wK(this.app);2==a?(a=this.app.A.B)&&XN(a.l,"control_play"):3==a?g.xK(this.app.A).Ki("control_play"):rW(this.app,this.playerType)};
g.h.Wb=function(){var a=wK(this.app);2==a?(a=this.app.A.B)&&XN(a.l,"control_pause"):3==a?g.xK(this.app.A).Ki("control_pause"):(a=g.X(this.app,this.playerType))&&FJ(a)};
g.h.Ae=function(){var a=this.app;a.g.aa&&(a.l.isFullscreen()&&!g.T(a.g.experiments,"player_external_control_on_classic_desktop")&&g.CK(a.l),a.l.P("pageTransition"));var b=a.o.g,c=new g.mD({video_id:b.videoId,oauth_token:b.oauthToken});g.T(a.g.experiments,"html5_stopVideo_copy_thumbs_killswitch")||(c.eg=g.hc(b.eg));dW(a,c,1);null!=a.V&&a.V.stop()};
g.h.QB=function(){};
g.h.kc=function(){return g.X(this.app,1).Ma};
g.h.ze=function(a){OV(this.app,a)};
g.h.vh=function(){return this.app.g.Ca?kfa:[1]};
g.h.Ei=function(){var a=g.X(this.app,this.playerType);if(a){var b="unknown";a.g.Da&&(b=a.g.Da.video.quality,"auto"==b&&a.l&&(a=a.l?a.l.ia():null)&&0<a.videoHeight&&(b=gv(a.videoWidth,a.videoHeight)))}else b="unknown";return b};
g.h.Hi=function(a){if(!g.T(this.app.g.experiments,"html5_ignore_public_setPlaybackQuality")&&!this.app.g.g){var b=g.X(this.app,this.playerType);b&&(a=Dv(a,a,!0),WJ(b,"p",a))}};
g.h.co=function(){var a=g.X(this.app,this.playerType);return a?(a=(0,g.H)(UJ(a),function(a){return a.quality}),a.length&&("auto"==a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.h.ZB=function(){return this.fo()};
g.h.aC=function(){return 1};
g.h.fo=function(){return vV(this.app)};
g.h.bC=function(){return 0};
g.h.kC=function(){this.app.H.Ee()};
g.h.mt=function(a){this.ho(a?2:1)};
g.h.ho=function(a){tW(this.app,a)};
g.h.OB=function(){this.ka("SUBSCRIBE")};
g.h.PB=function(){this.ka("UNSUBSCRIBE")};
g.h.Fi=function(a){"captions"==a&&(a=this.app.A.l)&&!a.loaded&&a.load()};
g.h.Nk=function(a){"captions"==a&&(a=this.app.A.l)&&a.loaded&&a.HJ()};
g.h.gC=function(a,b,c){a=aW(this.app,Qv(a,b,c),this.playerType);this.g&&cW(this.app,a,this.playerType)};
g.h.ht=function(a,b,c){eW(this.app,Qv(a,b,c),this.playerType)};
g.h.hC=function(a,b,c){a=Rv(a,b,c);a=aW(this.app,a,this.playerType);this.g&&cW(this.app,a,this.playerType)};
g.h.SB=function(a,b,c){a=Rv(a,b,c);eW(this.app,a,this.playerType)};
g.h.getVideoUrl=function(){var a=this.app.g;if(a.H)return"";var b=this.app.o.g,c=void 0;b.pa||(c=Math.floor(PV(this.app,1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.h.Di=function(){return SV(this.app)};
g.h.jt=function(){var a=this.app.g;if(a.H)var b="";else{var c=this.app.o.g.videoId;b=this.app.H.Fa();var d=this.getPlaylistId()||void 0;c="https://"+TB(a)+"/embed/"+c;d&&(c=g.Ug(c,{list:d}));d=!g.T(a.experiments,"enable_responsive_embed_snippet");g.T(a.experiments,"embed_snippet_includes_version")&&(c=g.Ug(c,{ecver:d?"1":"2"}));a=b.width;b=b.height;d?(d=g.Bb(c),b='<iframe width="'+a+'" height="'+b+'" src="'+d+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'):(d=Math.round(360*
a/b),b='<div style="position:relative;height:0;padding-bottom:'+Math.round(1E4*b/a)/100+'%"><iframe src="'+g.Bb(c)+'" style="position:absolute;width:100%;height:100%;left:0" width="'+d+'" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>')}return b};
g.h.gt=function(a,b,c){return kW(this.app,a,b,c)};
g.h.lt=function(a){a:{for(var b=this.app,c=SH(b.o.K)||[],d=0;d<c.length;d++){var e=c[d];if(e.oa==a){b.o.K.C(e);NK(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.h.fC=function(a,b,c,d){var e=this.app;e.ma=!1;fW(e,a,b,c,d);this.g&&cW(this.app,!0,this.playerType)};
g.h.RB=function(a,b,c,d){var e=this.app;e.ma=!0;fW(e,a,b,c,d)};
g.h.wh=function(){iW(this.app);this.g&&cW(this.app,!0,this.playerType)};
g.h.Gi=function(){jW(this.app);this.g&&cW(this.app,!0,this.playerType)};
g.h.kt=function(a){var b=this.app;!b.ba||b.l.isFullscreen()&&!b.Ja?b.C&&(b.C.we?$V(b,b.C.Eb(a),1):b.ma=!1,vF(b.C,a)):b.l.ka("onPlaylistIndex",a);this.g&&cW(this.app,!0,this.playerType)};
g.h.setShuffle=function(a){var b=this.app.C;b&&b.setShuffle(a)};
g.h.jC=function(a){var b=this.app.C;b&&(b.loop=a)};
g.h.Be=function(){var a=this.app.C;if(!a)return null;for(var b=[],c=0;c<a.getLength();c++){var d=a.Eb(c);d&&b.push(d.videoId)}return b};
g.h.it=function(){var a=this.app.C;return a?a.Pa:-1};
g.h.getPlaylistId=function(){var a=this.app.C;return a&&a.listId?a.listId.toString():null};
g.h.Wc=function(a,b,c){if(!b)return null;var d=this.app.A;return"captions"==a?(a=d.l)&&a.Wn(b,c):null};
g.h.Ob=function(a,b,c){return this.Wc(a,b,c)};
g.h.Ig=function(a){var b=this.app.A;return"captions"==a?(b=b.l)&&b.yB():a?null:(a=[],b.l&&a.push("captions"),a)};
g.h.Y=function(){var a={},b=g.X(this.app,this.playerType);if(b&&(b=b.g,a.video_id=b.videoId,a.author=b.author,a.title=b.title,b.Da)){a.video_quality=b.Da.video.quality;b=b.Da.video;var c=[];32<b.fps&&c.push("hfr");kv(b)&&c.push("hdr");"bt2020"==b.primaries&&c.push("wcg");a.video_quality_features=c}(b=this.getPlaylistId())&&(a.list=b);return a};
g.h.ot=function(){LU(this.app,!0)};
g.h.dC=function(){LU(this.app,!1)};
g.h.UB=function(){return-1};
g.h.eC=function(a){if(a!=this.app.sa.args.video_id)return!1;a=(a=g.X(this.app,1))?a.o:null;return!(!a||!g.V(a,128)||5!=cX[a.g.errorCode])};
g.h.YB=function(){var a=this.app.sa.clone();g.Ia(a.args,ID(this.app.o.g));return a};
g.h.lC=function(){this.app.g.C&&this.app.L.resume()};
g.h.eo=function(){var a=this.app.A.o;return a?a.DB():{}};
g.h.Mk=function(a){if(a){var b=this.app.A.o;b&&b.ct(a,!0)}};
g.h.TB=function(){this.app.dispose()};
g.h.iC=function(){var a=g.X(this.app);a&&!g.V(a.o,128)&&(a.P("internalAbandon"),pJ(a),nJ(a))};
g.h.P=function(a,b){for(var c=1;c<arguments.length;++c);this.app.g.Za&&("videodatachange"==a||"audiotrackchanged"==a||"resize"==a||"cardstatechange"==a)&&this.app.da.P.apply(this.app.da,arguments);this.app.aa.P.apply(this.app.aa,arguments)};
g.h.ka=function(a,b){this.app.da.P.apply(this.app.da,arguments);this.app.aa.P.apply(this.app.aa,arguments)};
g.h.R=function(){if(this.o){for(var a in this.A)this.o[a]=null;this.o=null}this.C=this.B=null;g.I.prototype.R.call(this)};g.Lw.prototype.toString=function(){return this.languageCode+"_"+this.languageName+"_"+this.g+"_"+this.id+"_"+this.isDefault};g.Mw.prototype.xb=function(){return this.I};
g.Mw.prototype.toString=function(){return this.l+": "+g.Nw(this)+" - "+this.F};
g.Mw.prototype.K=ba(3);g.Mw.prototype.Uc=function(){return!(!this.l||this.g&&!this.g.languageCode)};Ow.prototype.l=function(){return this.ob};
Ow.prototype.toString=function(){return this.ob.name};
Ow.prototype.getLanguageInfo=Ow.prototype.l;g.h=g.Tw.prototype;g.h.At=function(a){this.segments.push(a)};
g.h.Rf=function(a){return(a=this.tg(a))?a.duration:0};
g.h.Im=function(a){return this.Rf(a)};
g.h.je=function(){return this.segments.length?this.segments[0].na:-1};
g.h.no=function(a){return(a=this.tg(a))?a.ingestionTime:window.NaN};
g.h.Qb=function(){return this.segments.length?this.segments[this.segments.length-1].na:-1};
g.h.fi=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:window.NaN};
g.h.ub=function(){return this.segments[0].startTime};
g.h.kh=function(){return this.segments.length};
g.h.Pk=function(){return 0};
g.h.Ff=function(a){return(a=this.Zj(a))?a.na:-1};
g.h.Dr=function(a){return(a=this.tg(a))?a.sourceURL:""};
g.h.jd=function(a){return(a=this.tg(a))?a.startTime:0};
g.h.jk=ba(5);g.h.Tb=function(){return 0<this.segments.length};
g.h.tg=function(a){a=g.eb(this.segments,new Sw(a,0,0,0,""),function(a,c){return a.na-c.na});
return 0<=a?this.segments[a]:null};
g.h.Zj=function(a){a=g.eb(this.segments,{startTime:a},function(a,c){return a.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.h.Br=function(){return 0};Vw.prototype.skip=function(a){this.g+=a};hx.prototype.Pj=function(a,b,c){(new window.Uint8Array(this.data.buffer,this.g,c)).set(new window.Uint8Array(a.buffer,b+a.byteOffset,c));this.g+=c};g.Hx.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};my.prototype.verify=function(){if(this.info.La!=this.range.length)return!1;if(1==this.info.g.info.containerType){if(8>this.info.La||4==this.info.type)return!0;var a=ny(this),b=a.getUint32(0,!1);a=a.getUint32(4,!1);if(2==this.info.type)return b==this.info.La&&1936286840==a;if(3==this.info.type&&0==this.info.l)return 1836019558==a||1936286840==a||1937013104==a||1718909296==a||1701671783==a||1936419184==a}else if(2==this.info.g.info.containerType){if(4>this.info.La||4==this.info.type)return!0;b=ny(this).getUint32(0,
!1);if(3==this.info.type&&0==this.info.l)return 524531317==b||440786851==b}return!0};var Hea=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Iea=['audio/mp4; codecs="mp4a.40.2"'];wy.prototype.start=function(){return 0};
wy.prototype.end=function(){return window.Infinity};g.h=yy.prototype;g.h.addEventListener=function(){};
g.h.removeEventListener=function(){};
g.h.dispatchEvent=function(){return!1};
g.h.abort=function(){};
g.h.remove=function(){};
g.h.appendBuffer=function(){};g.h=zy.prototype;g.h.append=function(a){this.l.webkitSourceAppend(this.o,a)};
g.h.abort=function(){this.l.webkitSourceAbort(this.o)};
g.h.QJ=function(){return this.l.webkitSourceState==this.l.SOURCE_CLOSED?new Ay:this.l.webkitSourceBuffered(this.o)};
g.h.SJ=function(){return this.A};
g.h.WJ=function(a){this.A=a;this.l.webkitSourceTimestampOffset(this.o,a)};g.h=By.prototype;g.h.addEventListener=function(a,b,c){this.g.addEventListener(a,b,c)};
g.h.removeEventListener=function(a,b,c){this.g.removeEventListener(a,b,c)};
g.h.yD=function(){return this.g.webkitMediaSourceURL};
g.h.addSourceBuffer=function(a){var b=(this.o++).toString();this.g.webkitSourceAddId(b,a);a=new zy(this.g,b);this.sourceBuffers.push(a);return a};
g.h.removeSourceBuffer=function(a){for(var b=0;b<this.sourceBuffers.length;b++)if(a===this.sourceBuffers[b]){this.g.webkitSourceRemoveId(a.o);for(a=b+1;a<this.sourceBuffers.length;a++)this.sourceBuffers[a-1]=this.sourceBuffers[a];this.sourceBuffers.pop();break}};
g.h.TJ=function(){switch(this.g.webkitSourceState){case this.g.SOURCE_CLOSED:return"closed";case this.g.SOURCE_OPEN:return"open";case this.g.SOURCE_ENDED:return"ended"}return""};
g.h.endOfStream=function(){this.g.webkitSourceEndOfStream(this.g.EOS_NO_ERROR)};
g.h.UJ=function(){Ta(this.sourceBuffers)};
g.h.RJ=function(){return this.l};
g.h.VJ=function(a){this.l=a;this.g.webkitSourceSetDuration&&this.g.webkitSourceSetDuration(a)};g.r(Dy,g.I);Dy.prototype.K=function(){if(!this.ga()&&Fy(this))try{this.A&&(this.A(this),this.A=null)}catch(a){this.C&&this.C(a)}};
Dy.prototype.I=function(){this.dispose()};g.Qy.prototype.set=function(a,b){this.g[a]!==b&&(this.g[a]=b,this.o="")};
g.Qy.prototype.get=function(a){Ry(this);return this.g[a]||null};
g.Qy.prototype.xb=function(){this.o||(this.o=Yy(this));return this.o};
g.Qy.prototype.clone=function(){var a=new g.Qy(this.A);a.C=this.C;a.l=this.l;a.B=this.B;a.g=g.hc(this.g);a.o=this.o;return a};
var Uy=!1;$y.prototype.set=function(a,b){this.g.get(a);this.l[a]=b;this.o=""};
$y.prototype.get=function(a){return this.l[a]||this.g.get(a)};
$y.prototype.xb=function(){this.o||(this.o=bz(this));return this.o};var mfa=0;g.h=pz.prototype;g.h.Dd=function(){};
g.h.Lb=function(){};
g.h.An=function(){return!1};
g.h.Tc=function(){return!!this.g&&!!this.index&&this.index.Tb()};
g.h.Hg=function(){};
g.h.Us=function(){return!1};
g.h.gi=function(){};
g.h.Gg=function(){};
g.h.Ai=function(){};
g.h.Ef=function(){};
g.h.hn=function(){};
g.h.Vs=function(a){return[a]};
g.h.xl=function(a){return[a]};
g.h.ep=function(){};
g.h.Lm=function(){};g.r(rz,pz);g.h=rz.prototype;g.h.Dd=function(){return!1};
g.h.Lb=function(){return!1};
g.h.Us=function(){return this.l};
g.h.gi=function(){if(this.l)return[];var a=new Lx(1,this,this.initRange);return[new jz([a],this.I)]};
g.h.Gg=function(){return null};
g.h.Ai=function(a){this.Hg(a);return this.Qj(a.o?a.na+1:a.na,!1)};
g.h.Ef=function(a,b){b=void 0===b?!1:b;var c=this.index.Ff(a);b&&(c=Math.min(this.index.Qb(),c+1));return this.Qj(c,!0)};
g.h.hn=function(a){this.g=new window.Uint8Array(ny(a).buffer)};
g.h.An=function(){return!1};
g.h.Hg=function(a){return 0==a.La?!0:this.index.Qb()>a.na&&this.index.je()<=a.na+1};
g.h.update=function(a,b,c){var d=this.index;if(0!=a.length)if(a=g.Za(a),0==d.segments.length)d.segments=a;else{var e=d.segments.length?g.Ka(d.segments).endTime:0,f=a[0].na-d.Qb();1<f&&Ta(d.segments);for(f=0<f?0:-f+1;f<a.length;f++){var k=a[f];k.startTime=e;k.endTime=k.startTime+k.duration;e+=a[f].duration;d.segments.push(a[f])}}Uw(this.index,c);this.H=b};
g.h.Tc=function(){return this.l?!0:pz.prototype.Tc.call(this)};
g.h.Qj=function(a,b){var c=this.index.Dr(a),d=this.index.jd(a),e=this.index.Rf(a),f;b?e=f=0:f=0<this.info.g?this.info.g*e:1E3;d=new Lx(3,this,null,a,d,e,0,f,a==this.index.Qb()&&!this.H&&0<f);return new jz([d],c)};
g.h.Lm=function(){return this.l?0:this.initRange.length};
g.h.ep=function(){return!1};g.r(sz,g.Tw);g.h=sz.prototype;g.h.je=function(){return this.g?this.segments.length?this.Zj(this.ub()).na:-1:g.Tw.prototype.je.call(this)};
g.h.ub=function(){return this.g?this.segments.length?Math.max(g.Ka(this.segments).endTime-this.o,0):0:g.Tw.prototype.ub.call(this)};
g.h.kh=function(){return this.g?this.segments.length?this.Qb()-this.je()+1:0:g.Tw.prototype.kh.call(this)};
g.h.At=function(a){var b=tz(this,a.na);0<=b?this.segments[b]=a:this.segments.splice(-(b+1),0,a)};
g.h.Zj=function(a){if(!this.g)return g.Tw.prototype.Zj.call(this,a);if(!this.segments.length)return null;var b=g.eb(this.segments,{startTime:a},function(a,b){return a.startTime-b.startTime}),c=this.segments[0<=b?b:Math.max(-(b+2),0)];
return c.startTime+c.duration>a&&c.startTime<=a?c:-1==b?vz(this,c.na-Math.ceil((c.startTime-a)/this.l),c):vz(this,c.na+Math.ceil((a-c.endTime)/this.l),c)};
g.h.tg=function(a){if(!this.g)return g.Tw.prototype.tg.call(this,a);if(!this.segments.length)return null;var b=tz(this,a);return 0<=b?this.segments[b]:vz(this,a,this.segments[Math.max(-(b+2),0)])};g.r(wz,rz);g.h=wz.prototype;g.h.Lb=function(){return!0};
g.h.Tc=function(){return!0};
g.h.Hg=function(){return!0};
g.h.gi=function(){return[]};
g.h.Ef=function(a,b){if(g.va(a)&&!(0,window.isFinite)(a)){var c=new Lx(3,this,null,-1,void 0,this.B,void 0,this.B*this.info.g);return new jz([c],"")}return rz.prototype.Ef.call(this,a,b)};
g.h.Qj=function(a,b){if(uz(this.index,a))return rz.prototype.Qj.call(this,a,b);var c=this.index.jd(a);c=new Lx(3,this,null,a,c,void 0,void 0,b?0:this.B*this.info.g);return new jz([c],0<=a?"sq/"+a:"")};Cz.prototype.update=function(a,b){var c=void 0;this.l&&(c=this.l);var d=new Cz,e=a.getElementsByTagName("S");if(e.length){var f=+yz(a,"timescale")||1,k=(+e[0].getAttribute("t")||0)/f,l=+yz(a,"startNumber")||0;var m=k;var n=+yz(a,"presentationTimeOffset")||0;m=c?c.Pd+c.durationSecs:b?m-n/f:0;n=Date.parse(Bz(yz(a,"yt:segmentIngestTime")))/1E3;d.o="SegmentTemplate"==a.parentNode.tagName;d.o&&(d.C=yz(a,"media"));var p=c?l-c.na:1;d.B=0<p?0:-p+1;e=g.q(e);for(p=e.next();!p.done;p=e.next()){p=p.value;for(var u=
+p.getAttribute("d")/f,v=(+p.getAttribute("yt:sid")||0)/f,D=+p.getAttribute("r")||0,C=0;C<=D;C++)if(c&&l<=c.na)l++;else{var N=new xz(l,m,u,n+v,k);d.g.push(N);var fa=N.Pd,qa=p.getAttribute("yt:cuepointTimeOffset");N=p.getAttribute("yt:cuepointDuration");qa&&N?(fa=+qa/f+fa,N=+N/f,qa=p.getAttribute("yt:cuepointContext")||null,N=new lx(fa,N,qa)):N=null;N&&d.A.push(N);l++;m+=u;k+=u;n+=u+v}}d.g.length&&(d.l=g.Ka(d.g))}this.B=d.B;this.l=d.l||this.l;$a(this.g,d.g);$a(this.A,d.A);this.o=d.o;this.C=d.C};g.h=g.Kz.prototype;g.h.Pk=function(a){return this.g[a]};
g.h.jd=function(a){return this.l[a]/this.A};
g.h.jk=ba(4);g.h.no=function(){return window.NaN};
g.h.Rf=function(a){a=this.Im(a);return 0<=a?a/this.A:-1};
g.h.Im=function(a){return a+1<this.Aa||this.o?this.l[a+1]-this.l[a]:-1};
g.h.je=function(){return 0};
g.h.Qb=function(){return this.Aa-1};
g.h.fi=function(){return this.o?this.l[this.Aa]/this.A:window.NaN};
g.h.ub=function(){return 0};
g.h.kh=function(){return this.Aa};
g.h.Dr=function(){return""};
g.h.Ff=function(a){a=g.eb(this.l.subarray(0,this.Aa),a*this.A);return 0<=a?a:Math.max(0,-a-2)};
g.h.Tb=function(){return 0<=this.Qb()};
g.h.Br=function(a,b){if(a>=this.Qb())return 0;for(var c=0,d=this.jd(a)+b,e=a;e<this.Qb()&&d>this.jd(e);e++)c=Math.max(c,(e+1<this.Aa||this.o?this.g[e+1]-this.g[e]:-1)/this.Rf(e));return c};
g.h.cap=function(a,b){Lz(this);this.o=!0;this.l[this.Aa]=b;this.g[this.Aa]=a};g.r(g.Mz,pz);g.h=g.Mz.prototype;g.h.gi=function(a){var b=new Lx(1,this,this.initRange),c=new Lx(2,this,this.indexRange),d=[],e=[b];Ox(b,c)?e.push(c):(d.push(new jz([c])),a=0);(0,window.isNaN)(this.l)&&(a=0);b=e[e.length-1];a=Math.min(a,this.l-(b.range.end-e[0].range.start+1));0<a&&(a=Jx(b.range.end+1,a),e.push(new Lx(4,this,a)));d.push(new jz(e));return d};
g.h.hn=function(a){if(1==a.info.type){if(this.g)return;if(a.g.slice)var b=new window.Uint8Array(a.g.slice(a.range.start,a.range.end+1));else b=new window.Uint8Array(a.g,a.range.start,a.range.end+1),b=new window.Uint8Array(b);this.g=b}else if(2==a.info.type){if(this.B||0<=this.index.Qb())return;if(g.rv(this.info)){b=this.index;var c=ny(a),d=a.info.range.start;a=0;var e=c.getUint32(0,!1),f=c.getUint8(a+8);a+=12;var k=c.getUint32(a+4,!1);b.A=k;a+=8;0==f?(f=c.getUint32(a,!1),k=c.getUint32(a+4,!1),a+=
8):(f=4294967296*c.getUint32(a,!1)+c.getUint32(a+4,!1),k=4294967296*c.getUint32(a+8,!1)+c.getUint32(a+12,!1),a+=16);b.g[0]=k+(e+d);b.l[0]=f;b.o=!0;d=c.getUint16(a+2,!1);a+=4;for(e=0;e<d;e++){f=c.getUint32(a,!1);k=c.getUint32(a+4,!1);a+=12;var l=b;l.Aa++;Lz(l);l.g[l.Aa]=l.g[l.Aa-1]+f;l.l[l.Aa]=l.l[l.Aa-1]+k}}else this.B=ny(a)}if(2==this.info.containerType&&this.g&&this.B){a=new window.DataView(this.g.buffer);b=this.index;k=this.B;c=this.indexRange.end;a=new Vx(a);if(Zx(a,440786851)&&(ey(a),Zx(a,408125543)&&
(e=a,f=e.g,d=$x(e,!0),e.g=f,a=Yx(a),e=a.o+a.g,Zx(a,357149030)))){a=Yx(a);l=1E6;var m=1E9;for(f=0;!Wx(a);){var n=$x(a,!1);2807729==n?l=dy(a):2807730==n?m=dy(a):17545==n?f=fy(a):ey(a)}b.A=m/l;a=new Vx(k);if(Zx(a,475249515)){a=Yx(a);k=!0;for(l=!1;Zx(a,187);){m=Yx(a);if(Zx(m,179))if(n=dy(m),Zx(m,183)){m=Yx(m);for(var p=e;Zx(m,241);)p=dy(m)+e;m=[p,n]}else m=null;else m=null;p=m;k&&c==p[0]&&(l=!0);k=!1;l&&(p[0]+=1);m=b;n=p[0];p=p[1];Lz(m);m.g[m.Aa]=n;m.l[m.Aa]=p;m.Aa++}b.cap(d+e,f)}}this.B=null}};
g.h.Vs=function(a){for(var b=this.xl(a.info),c=[],d=a.sd,e=0;e<b.length;e++){var f=Jx(b[e].range.start+b[e].l-a.info.range.start+a.range.start,b[e].La);c.push(new my(b[e],a.g,f,a.o,d));d=!1}return c};
g.h.xl=function(a){for(var b=0;b<this.index.Qb()&&a.range.start>=this.index.Pk(b+1);)b++;return Nz(this,b,a.range.start,a.range.length).va};
g.h.Hg=function(a){return this.Tc()?!0:(0,window.isNaN)(this.l)?!1:a.range.end+1<this.l};
g.h.Gg=function(a,b){this.Hg(a);if(!this.Tc()){var c=Jx(a.range.end+1,b);c.end+1>this.l&&(c=new g.Hx(c.start,this.l-1));c=[new Lx(4,a.g,c)];return new jz(c)}4==a.type&&(c=this.xl(a),a=c[c.length-1]);c=0;var d=a.range.start+a.l+a.La;3==a.type&&(c=a.na,d==a.range.end+1&&(c+=1));return Nz(this,c,d,b)};
g.h.Ai=function(){return null};
g.h.Ef=function(a,b){var c=this.index.Ff(a);b&&(c=Math.min(this.index.Qb(),c+1));return Nz(this,c,this.index.Pk(c),0)};
g.h.An=function(){var a;if(a=this.Tc()&&!(0,window.isNaN)(this.l))a=this.index,a=(a.o?a.g[a.Aa]:-1)!=this.l;return a};
g.h.Dd=function(){return!0};
g.h.Lb=function(){return!1};
g.h.Lm=function(){return this.indexRange.length+this.initRange.length};
g.h.ep=function(){return this.indexRange&&this.initRange&&this.initRange.end+1==this.indexRange.start?!0:!1};var Rz={J2:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c},
Ro:function(a){a.reverse()},
tW:function(a,b){a.splice(0,b)}};g.r(Tz,g.R);g.h=Tz.prototype;g.h.se=function(){return Ub(this.g,function(a){return a.info.video?2==a.info.video.projectionType:!1})};
g.h.te=function(){return Ub(this.g,function(a){return a.info.video?3==a.info.video.projectionType:!1})};
g.h.Gd=function(){return Ub(this.g,function(a){return a.info.video?4==a.info.video.projectionType:!1})};
g.h.Bg=function(){return Ub(this.g,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})};
g.h.II=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.o=!0;this.B||(this.B=new Ez);Iz(this.B,a,this.ha);this.P("refresh");for(a=0;a<b.length;a++){var c=hA(this,b[a]),d=this.isLive&&g.rv(c)&&this.ma;if(!this.g[c.id]){var e=aA(this,zz(b[a],"BaseURL").textContent),f=zz(b[a],"Initialization"),k=yz(f,"sourceURL");f=Ix(yz(f,"range"));d&&(k="",f=void 0);this.g[c.id]=new rz(e,c,k,null===
f?void 0:f)}c=this.g[c.id];e=yz(b[a],"id","AdaptationSet");e=""!=e?e:yz(b[a],"mimetype","AdaptationSet");k=this.B;e=k.o[c.info.id]||k.l[e]||k.g||null;k=e.g;if(e.o)for(d=[],k=g.q(k),f=k.next();!f.done;f=k.next()){f=f.value;for(var l=c.info.id,m=8*c.info.g,n=f.na,p=f.Pd,u=e.C.split("$$"),v=0;v<u.length;v++)u[v]=u[v].replace("$RepresentationID$",l),u[v]=u[v].replace("$Number$",n.toString()),u[v]=u[v].replace("$Bandwidth$",m.toString()),u[v]=u[v].replace("$Time$",p.toString());d.push(new Sw(f.na,f.Pd,
f.durationSecs,f.g,u.join("$"),null,f.l))}else{e=g.ab(zz(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.B);f=[];for(l=0;l<e.length;l++)f.push(kA(e[l],k[l],d));d=f}c.update(d,this.isLive,this.T)}Jz(this.B);return!0}this.duration=Az(yz(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){k=b[a];c=hA(this,k);e=zz(k,"BaseURL");d=aA(this,e.textContent);f=zz(k,"SegmentBase");k=Ix(f.attributes.indexRange.value);f=Ix(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=(0,window.parseInt)(e.getAttribute(dA(this,
"contentLength")),10);c=new g.Mz(d,c,f,k,e,window.NaN);if(!c){b=!1;break a}this.g[c.info.id]=c}b=!0}return b};
g.h.Gz=function(a){if(this.ga())return this;this.O=a.status;a=a.responseText;a=(new window.DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.F=1E3*Az(yz(a,"minimumUpdatePeriod"))||window.Infinity;if(!this.U){var b;a:{for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.ba=b}this.isLive=window.Infinity>this.F&&this.sa;this.T=(0,window.parseInt)(yz(a,dA(this,"earliestMediaSequence")),
10)||0;if(b=Date.parse(Bz(yz(a,dA(this,"mpdResponseTime")))))this.H=((0,g.G)()-b)/1E3;this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length||(0,g.to)(a.getElementsByTagName("Period"),this.II,this);this.C=2;this.P("loaded");mA(this);return this};
g.h.Iz=function(a){this.O=a.g.status;this.C=3;this.P("loaderror");return Vf(a.g)};
g.h.Ct=function(){if(1!=this.C&&!this.ga()){var a=g.Ug(this.V,{start_seq:nA(this).toString()});g.cg(iA(this,a),function(){})}};
g.h.resume=function(){mA(this)};
g.h.ed=function(){var a=this.g,b=window.NaN,c;for(c in a){var d=a[c].index;d&&d.Tb()&&((0,window.isNaN)(b)||d.fi()<b)&&(b=d.fi())}return b};
g.h.ub=function(){var a=this.g,b;for(b in a){var c=a[b].index;if(c&&c.Tb())return c.ub()}return 0};
g.h.LC=function(){return this.H};
var rA=null,sA=!1,gA={commentary:1,alternate:2,dub:3,main:4};var dX={},DA=(dX.playready=["com.youtube.playready","com.microsoft.playready"],dX.widevine=["com.widevine.alpha"],dX),eaa=g.Ya(DA.widevine,DA.playready);g.r(CA,g.I);CA.prototype.F=function(){(this.C=g.T(this.o,"html5_widevine_robustness_strings")&&!this.C&&"widevine"==this.g[this.l[0]].flavor)||this.l.shift();EA(this)};
CA.prototype.H=function(a,b){this.ga()||(a.l=b,faa(this,a),this.B(a))};var Eaa={tM:"red",dN:"white"};FA.prototype.g=function(a,b){var c=Math.pow(this.B,a);this.l=b*(1-c)+c*this.l;this.A+=a};
FA.prototype.o=function(){return this.l/(1-Math.pow(this.B,this.A))};HA.prototype.g=function(a,b){var c=Math.min(this.l,Math.max(1,Math.round(a*this.L)));c+this.A>=this.l&&(this.C=!0);for(;c--;)this.B[this.A]=b,this.A=(this.A+1)%this.l;this.H=!0};
HA.prototype.o=function(){return this.I?(IA(this,this.F-this.I)+IA(this,this.F)+IA(this,this.F+this.I))/3:IA(this,this.F)};var Daa={jK:"adunit",RK:"detailpage",WK:"editpage",XK:"embedded",EL:"leanback",kM:"previewpage",mM:"profilepage",WM:"unplugged"};SA.prototype.getAvailableAudioTracks=function(){return this.audioTracks};var eX={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},fX;var gX=g.Pb;gX=gX.toLowerCase();if(-1!=gX.indexOf("android")){var hX=gX.match(/android\D*(\d\.\d)[^;|\)]*[;\)]/);if(hX)fX=(0,window.parseFloat)(hX[1]);else{var iX=gX.match("("+g.Yb(eX).join("|")+")");fX=iX?eX[iX[0]]:0}}else fX=void 0;var XA=fX,cB=0<=XA;var taa="1 9h 9 h 8 (h ( H *".split(" "),saa="1 9h 9 h 8 ( H *".split(" "),dB="h198H(*".split(""),vaa="oMavAV".split(""),yaa=["so","sa"],xaa="moMavAV".split(""),waa="aoMvAV".split(""),uaa=["f"],oaa={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},paa={"application/x-mpegURL":"maybe"},naa={"application/x-mpegURL":"maybe"};var MB={GL:1,HL:2,IL:3};g.r(oB,g.R);oB.prototype.add=function(a,b){if(!this.Ba[a]&&(b.Kj||b.Lj||b.Dp)){var c=this.Ba,d=b;Object.isFrozen&&!Object.isFrozen(b)&&(d=Object.create(b),Object.freeze(d));c[a]=d;this.P("vast_info_card_add",a)}};
oB.prototype.remove=function(a){var b=this.get(a);delete this.Ba[a];return b};
oB.prototype.get=function(a){return this.Ba[a]||null};
oB.prototype.isEmpty=function(){return g.dc(this.Ba)};var Aaa=/^([0-9\.]+):([0-9\.]+)$/;var wB=g.z("ytglobal.prefsUserPrefsPrefs_")||{};g.y("ytglobal.prefsUserPrefsPrefs_",wB,void 0);g.h=xB.prototype;g.h.get=function(a,b){zB(a);yB(a);var c=void 0!==wB[a]?wB[a].toString():null;return null!=c?c:b?b:""};
g.h.set=function(a,b){zB(a);yB(a);if(null==b)throw Error("ExpectedNotNull");wB[a]=b.toString()};
g.h.remove=function(a){zB(a);yB(a);delete wB[a]};
g.h.save=function(){var a=this.g,b=[],c;for(c in wB)b.push(c+"="+(0,window.encodeURIComponent)(String(wB[c])));g.av(a,b.join("&"),63072E3)};
g.h.clear=function(){g.ec(wB)};
g.xa(xB);var AB="blogger books docs google-live play chat picasaweb gmail jamboard".split(" ");g.r(QB,g.I);
QB.prototype.jf=function(a){this.ua=sB(this.ua,a.video_id);this.bb=sB(this.bb,a.eventid);this.sa=a.oauth_token;for(var b in jX){var c=jX[b],d=a[c];void 0!=d&&(this.A[c]=d)}b=a.cl;!this.Ua&&b&&(this.Ua=+b);this.userAge=rB(this.userAge,a.user_age);this.userDisplayImage=sB(this.userDisplayImage,a.user_display_image);g.dw(this.userDisplayImage)||(this.userDisplayImage="");this.userDisplayName=sB(this.userDisplayName,a.user_display_name);this.userGender=sB(this.userGender,a.user_gender);this.csiPageType=
sB(this.csiPageType,a.csi_page_type);this.jb=sB(this.jb,a.csi_service_name);this.Nc=pB(this.Nc,a.enablecsi);if(a=a.enabled_engage_types)this.Ab=new window.Set(a.split(","))};
QB.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=TB(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:g.VB(this)?(d="https://"+c+"/fire",b.v=a):(d=this.protocol+"://"+c+"/watch",b.v=a,WA&&(a=g.z("yt.ads.biscotti.lastId_")||"")&&(b.ebc=a));return g.Ug(d,b)};
var jX={sK:"cbrand",tK:"cbr",uK:"cbrver",wL:"c",zL:"cver",yL:"ctheme",xL:"cplayer",ML:"cmodel",QL:"cnetwork",XL:"cos",YL:"cosver",gM:"cplatform"};var Gaa=new window.Set("BASE_URL BASE_YT_URL abd allow_embed authuser autoplay captions_load_policy cc_load_policy cc3_module dash dashmpd disable_native_context_menu docid el enable_cardio enablecastapi enablepostapi fmt_list fmt_stream_map hl hlsdvr hlsrange hlsvp html5 iurl iurlhq iurlmq length_seconds live_playback nohtml5 origin override_hl partnerid plid postid ps public rel reload_count reload_reason reportabuseurl resume start status streaminglib_load_policy streaminglib_preroll t timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoid wmode".split(" "));g.r(gC,Bv);
gC.prototype.l=function(){if(!this.g||this.g.ga()){var a=this.o;Jaa(a);for(var b=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],c={},d=0,e=a.o.length;d<e;++d){var f=a.o[d];if(!a.l||!f.ob||f.ob.id==a.l)if(c[f.itag]=f,a.A)b.push('#EXT-X-MEDIA:TYPE=AUDIO,NAME="audio",DEFAULT=YES,AUTOSELECT=YES,'+('GROUP-ID="'+f.itag.toString()+'",')+('URI="'+f.url+'"'));else{var k="#EXT-X-MEDIA:TYPE=AUDIO,",l="YES",m="audio";if(f.ob){m=f.ob;var n=m.id.split(".")[0];n&&(k+='LANGUAGE="'+n+'",');a.l||m.isDefault||(l="NO");m=
m.name}k=k+('NAME="'+m+'",'+("DEFAULT="+l+",AUTOSELECT=YES,"))+('GROUP-ID="'+f.itag.toString()+'",'+('URI="'+f.url+'"'));b.push(k)}}d=0;for(e=a.g.length;d<e;++d)f=a.g[d],k=c[f.audioItag],b.push("#EXT-X-STREAM-INF:BANDWIDTH="+(f.bitrate+k.bitrate)+","+('CODECS="'+f.Oq+","+k.Oq+'",')+("RESOLUTION="+f.width+"x"+f.height+",")+('AUDIO="'+k.itag.toString()+'",')+"CLOSED-CAPTIONS=NONE"),b.push(f.url);a="data:application/x-mpegurl;charset=utf-8,"+(0,window.encodeURIComponent)(b.join("\n"));this.g=new Av(a)}return this.g};var nfa={UNKNOWN:"UNKNOWN",NORMAL:"NORMAL",JL:"LOW",VM:"ULTRALOW"};g.r(iC,Bv);iC.prototype.l=function(){return new Av(this.g.xb())};
iC.prototype.A=function(){this.g=Vy(this.g)};g.h=g.kC.prototype;g.h.getHeight=function(){return this.B};
g.h.zr=ba(6);g.h.Jm=function(){return this.l};
g.h.isDefault=function(){return-1!=this.A.indexOf("default")};
g.h.Tb=function(a){return this.we.has(a)};
g.h.xb=function(a){var b=this.K;b=b.replace("$N",this.A);b=b.replace("$L",this.I.toString());b=b.replace("$M",a.toString());this.F&&(b=g.Ug(b,{sigh:this.F}));return lw(b)};
g.h.Mi=function(a){var b=this.Jm()-1;return g.$c(0==this.o?Math.round(a*this.l/this.L):Math.round(1E3*a/this.o),0,b)};
g.h.Uk=function(){return this.l-1};
g.h.Xt=function(){return this.l?0:-1};
g.h.Yt=function(){};g.r(mC,g.R);mC.prototype.K=function(a,b){this.l=this.l.onload=null;var c=this.g[a];c.we.add(b);pC(this);var d=c.columns*c.rows;var e=b*d;c=Math.min(e+d-1,c.Jm()-1);e=[e,c];this.P("l",e[0],e[1])};
mC.prototype.R=function(){this.l&&(this.l=this.l.onload=null);g.R.prototype.R.call(this)};g.r(rC,mC);rC.prototype.o=function(a,b){for(var c=[],d=a.split("|"),e=d[0],f=1;f<d.length;f++){var k=this.C(f-1,e,d[f],b);180>k.getHeight()&&c.push(k)}return c};
rC.prototype.C=function(a,b,c,d){return new g.kC(a,b,c,d)};
rC.prototype.I=function(){};g.r(sC,g.kC);g.h=sC.prototype;g.h.Jm=function(){return this.g?this.g.kh():-1};
g.h.Mi=function(a){var b=this.rows*this.columns*this.H,c=-1,d=-1,e=this.g;e&&(c=e.Qb(),d=e.Ff(a));return d>c-b?-1:d};
g.h.Uk=function(){return this.g?this.g.Qb():-1};
g.h.Xt=function(){return this.g?this.g.je():-1};
g.h.Yt=function(a){this.g=a};g.r(tC,rC);tC.prototype.o=function(a,b){return rC.prototype.o.call(this,"$N|"+a,b)};
tC.prototype.C=function(a,b,c){return new sC(a,b,c,this.isLive)};
tC.prototype.I=function(a){for(var b=0;b<this.g.length;b++)this.g[b].Yt(a)};g.r(uC,Bv);uC.prototype.l=function(){return new Av(this.g)};var vC={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},Naa={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};g.zC.prototype.toString=function(){return this.topic};var ofa=g.z("ytPubsub2Pubsub2Instance")||new g.Sq;g.Sq.prototype.subscribe=g.Sq.prototype.subscribe;g.Sq.prototype.unsubscribeByKey=g.Sq.prototype.Dc;g.Sq.prototype.publish=g.Sq.prototype.P;g.Sq.prototype.clear=g.Sq.prototype.clear;g.y("ytPubsub2Pubsub2Instance",ofa,void 0);var CC=g.z("ytPubsub2Pubsub2SubscribedKeys")||{};g.y("ytPubsub2Pubsub2SubscribedKeys",CC,void 0);var EC=g.z("ytPubsub2Pubsub2TopicToKeys")||{};g.y("ytPubsub2Pubsub2TopicToKeys",EC,void 0);
var DC=g.z("ytPubsub2Pubsub2IsAsync")||{};g.y("ytPubsub2Pubsub2IsAsync",DC,void 0);g.y("ytPubsub2Pubsub2SkipSubKey",null,void 0);var JC=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.r(LC,g.yC);g.r(MC,g.yC);var Uaa=new g.zC("aft-recorded",LC),GC=new g.zC("timing-sent",MC);var Vaa={vc:!0},XC={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},fD=!1,Raa=(0,g.A)(JC.clearResourceTimings||JC.webkitClearResourceTimings||JC.mozClearResourceTimings||JC.msClearResourceTimings||JC.oClearResourceTimings||g.wa,JC);var kX;var lX=g.Pb,mX=lX.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!mX||2>mX.length)kX=void 0;else{var nX=lX.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);kX=nX&&6==nX.length?Number(nX[5].replace("_",".")):0}var pU=kX,oX=0<=pU;oX&&0<=g.Pb.search("Safari")&&g.Pb.search("Version");var hba={0:"UNKNOWN",1:"OFF",2:"ON",3:"FORCED_ON"},pX={},pfa=(pX.ALWAYS=1,pX.BY_REQUEST=3,pX),cba,nD;g.r(g.mD,g.R);g.h=g.mD.prototype;g.h.jf=function(a,b){b?(this.setData(a),ED(this)&&tD(this)):(pD(this,a,!0),this.P("dataupdated"))};
g.h.setData=function(a){a=a||{};var b=a.player_response;b&&(this.Xa=g.Kq(b));this.Me="1"!=a.hlsdvr?!1:VA()?!0:BB&&5>pU?!1:!0;this.adQueryId=a.ad_query_id;this.adSafetyReason=a.encoded_ad_safety_reason;this.Ty=a.agcid;this.zj="1"==a.infringe||"1"==a.muted;this.authKey=a.authkey;this.uc=a.authuser;this.clientPlaybackNonce||(this.clientPlaybackNonce=a.cpn||Su());this.enableCardio=pB(this.enableCardio,a.enable_cardio);this.enableCardioBeforePlayback=pB(this.enableCardioBeforePlayback,a.enable_cardio_before_playback);
this.endSeconds=rB(this.endSeconds,a.end||a.endSeconds);this.ph=sB(this.ph,a.itct);this.zn=pB(this.zn,a.noiba);this.ti="1"==a.livemonitor;this.pa="1"==a.live_playback||!!a.fresca_preroll||!!a.heartbeat_preroll;this.isLiveDestination=pB(this.isLiveDestination,a.is_live_destination);this.isLiveDefaultBroadcast="1"==a.live_default_broadcast;this.isLowLatencyLiveStream="1"==a.is_low_latency_live_stream;if(b=a.latency_class)this.latencyClass=qB("UNKNOWN",b,nfa);this.isMdxPlayback=pB(this.isMdxPlayback,
a.mdx);if(b=a.mdx_control_mode)this.mdxControlMode=Mb(b);this.yn=pB(this.yn,a.is_inline_playback_no_ad);this.Yf=rB(this.Yf,a.reload_count);this.reloadReason=sB(this.reloadReason,a.reload_reason);this.wp=pB(this.wp,a.show_content_thumbnail);this.Dn=pB(this.Dn,a.utpsa);this.cycToken=a.cyc;this.Hw=a.tkn;this.eg="1"==a.innertube_thumbnail&&this.Xa.videoDetails.thumbnail?Oaa(this.Xa.videoDetails.thumbnail):wC(a);this.Ge=sB(this.Ge,a.vvt);this.revocableUnlistedToken=a.revocable_unlisted_token;this.mdxEnvironment=
sB(this.mdxEnvironment,a.mdx_environment);this.IE=a.osig;this.vv=a.ptchn;this.wv=a.oid;this.kl=a.ptk;this.xv=a.pltype;this.playbackId=a.plid;this.eventId=a.eventid;this.osid=a.osid;this.videoMetadata=a.vm;this.bp=a.of;this.Jl=a.upt;this.playlistId=sB(this.playlistId,a.list);this.Cv=a.pyv_view_beacon_url;this.NI=a.pyv_quartile25_beacon_url;this.OI=a.pyv_quartile50_beacon_url;this.QI=a.pyv_quartile75_beacon_url;this.MI=a.pyv_quartile100_beacon_url;if(b=a.remarketing_url)this.remarketingUrl=b;this.Xa&&
this.Xa.playbackTracking&&this.Xa.playbackTracking.youtubeRemarketingUrl&&(this.youtubeRemarketingUrl=this.Xa.playbackTracking.youtubeRemarketingUrl.baseUrl);this.Xa&&this.Xa.playbackTracking&&this.Xa.playbackTracking.googleRemarketingUrl&&(this.googleRemarketingUrl=this.Xa.playbackTracking.googleRemarketingUrl.baseUrl);if(b=a.ppv_remarketing_url)this.ppvRemarketingUrl=b;this.ul=a.sdetail;b=a.session_data;!this.fp&&b&&(this.fp=g.cs(b).feature);this.isFling=1==rB(this.isFling?1:0,a.is_fling);this.vnd=
rB(this.vnd,a.vnd);this.Fm=sB(this.Fm,a.force_ads_url);this.Zf=sB(this.Zf,a.ctrl);this.gf=sB(this.gf,a.ytr);this.Qq=a.ytrcc;this.Ov=a.ytrexp;this.aj=uB(this.aj,a.vq);this.dj=uB(this.dj,a.suggestedQuality);this.El=pB(this.El,a.ssrt);this.videoId=vB(a)||this.videoId;this.vssCredentialsToken=sB(this.vssCredentialsToken,a.vss_credentials_token);this.Sl=sB(this.Sl,a.vss_credentials_token_type);this.heartbeatToken=sB(this.heartbeatToken,a.heartbeat_token);this.heartbeatInterval=rB(this.heartbeatInterval,
a.heartbeat_interval);this.heartbeatRetries=rB(this.heartbeatRetries,a.heartbeat_retries);this.heartbeatSoftFail=pB(this.heartbeatSoftFail,a.heartbeat_soft_fail);this.xn=pB(this.xn,a.ithb);this.relativeLoudness=rB(this.relativeLoudness,a.relative_loudness);this.hj=pB(this.hj,a.audio_only);dba(this.Xa)&&(this.adModule=!0,this.ud.push("ad"));if(b=a.adaptive_fmts)this.adaptiveFormats=b;b=a.atc;void 0!=b&&(this.yj=b);if(b=a.license_info)this.bc=gba(b);if(b=a.allow_embed)this.allowEmbed="1"==b;if(b=a.backgroundable)this.backgroundable=
"1"==b;if(b=a.autonav)this.yk="1"==b;if(b=a.autoplay)this.bf="1"==b;(b=a.iv_load_policy)?this.wf=qB(this.wf,b,MB):(b=oD(this.Xa))&&b.loadPolicy&&(this.wf=pfa[b.loadPolicy]);if(b=a.cc_lang_pref)this.yf=sB(b,this.yf);if(b=a.cc_load_policy)this.zf=qB(this.zf,b,MB);if(b=a.cached_load)this.nm=pB(this.nm,b);"0"==a.dash&&(this.fr=!0);if(b=a.dashmpd){this.bd=g.Ug(b,{cpn:this.clientPlaybackNonce});b=/\/s\/([0-9A-F.]+)/;var c=b.exec(this.bd);c&&(c=Sz(c[1]),this.bd=this.bd.replace(b,"/signature/"+c))}if(b=a.delay)this.he=
Mb(b);if(b=a.drm_session_id)this.drmSessionId=b;b=a.end;void 0!=b&&(this.clipEnd=b);a.fair_play_cert&&window.atob&&(this.fairPlayCert=(0,window.atob)(a.fair_play_cert));if(b=a.fmt_list)this.fmtList=b;a.fresca_preroll&&this.ud.push("fresca");a.heartbeat_preroll&&this.ud.push("heartbeat");if(b=a.idpj)this.oh=Mb(b);if(b=a.ismb)this.Ve=Mb(b);if(b=a.is_listed)this.isListed=pB(this.isListed,b);if(b=a.paid_content_overlay_duration_ms)this.uv=Mb(b);if(b=a.paid_content_overlay_text)this.HI=b;if(b=a.url_encoded_fmt_stream_map)this.Mh=
b;if(b=a.hls_formats)this.hlsFormats=b;if(b=a.hlsvp)this.hlsvp=b;if(b=a.length_seconds)this.lengthSeconds=Mb(b);if(b=a.live_chunk_readahead)this.liveChunkReadahead=rB(this.liveChunkReadahead,b);if(b=a.live_start_walltime)this.liveStartWalltime=Mb(b);if(b=a.live_manifest_duration)this.Hn=Mb(b);if(b=a.ldpj)this.xi=Mb(b);if(b=a.player_params)this.playerParams=b;if(b=a.partnerid)this.Fe=Mb(b);if(b=a.probe_url)this.probeUrl=lw(g.Ug(b,{cpn:this.clientPlaybackNonce}));if(b=a.profile_picture)this.profilePicture=
sB(b,this.profilePicture);(b=a.pyv_billable_url)&&g.hw(b)&&(this.ql=b);(b=a.pyv_conv_url)&&g.hw(b)&&(this.rl=b);if(b=a.video_masthead_ad_quartile_urls)this.Nn=b.quartile_0_url,this.Js=b.quartile_25_url,this.Ks=b.quartile_50_url,this.Ls=b.quartile_75_url,this.Is=b.quartile_100_url;"1"==a.spacecast_playback&&(this.ud.push("spacecast"),this.spacecastModule=!0,this.Sg.JI=!0);if(c=a.spacecast_addrs)this.spacecastModule=!0,b={},b.addresses=c.split(","),b.probe=!0,(c=a.spacecast_query_params)&&(b.applianceQueryParams=
c),this.Sg.init=b;0<this.startSeconds||(this.tn=this.startSeconds=rB(this.startSeconds,a.start||a.startSeconds));b=a.live_utc_start;null!=b&&(this.liveUtcStartSeconds=(0,window.parseInt)(b,10));b=a.start;void 0==b||"1"==a.resume||this.pa||(this.clipStart=b);if(b=a.two_stage_token)this.gg=b;if(b=a.url_encoded_third_party_media)this.Ih=es(b);if(b=a.watch_ajax_token)this.watchAjaxToken=b;a.ypc_module&&this.ud.push("ypc");a.ypc_clickwrap_module&&this.ud.push("ypc_clickwrap");if(b=a.ypc_offer_button_formatted_text)b=
g.Kq(b),this.ypcOfferButtonFormattedText=null!=b?b:null;this.fj=sB(this.fj,a.ucid);(0,g.F)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(b){a[b]&&(this.Ed[b]=a[b])},this);
this.Ed.focEnabled=pB(this.Ed.focEnabled,a.focEnabled);this.Ed.rmktEnabled=pB(this.Ed.rmktEnabled,a.rmktEnabled);this.Hb=a;pD(this,a,!1);rD(this)?Gs()&&(this.pa&&this.bd?this.hh=!0:this.fairPlayCert&&(this.Eg=!0)):this.adaptiveFormats&&!this.pa?(uD(this,Zz(wD(this,this.adaptiveFormats),this.bc,this.lengthSeconds,void 0)),Uz(this.la)&&(this.Eg=!0)):this.bd&&(this.hh=!0);if(b=a.adpings)this.pq=b?g.ds(b):null;if(b=a.feature)this.Yi=b;if(b=a.referrer)this.referrer=b;if(b=a.multifeed_metadata_list)this.lg=
es(b);this.clientScreenNonce=sB(this.clientScreenNonce,a.csn);this.rootVeType=rB(this.rootVeType,a.root_ve_type);this.Ek=rB(this.Ek,a.kids_age_up_mode);if(b=a.unplugged_location_info)this.hf=b;if(b=a.unplugged_partner_opt_out)this.Kh=sB("",b);if(b=a.partial_spherical)this.partialSpherical="1"==b;if(b=a.fflags)if(b=g.cs(b).enable_spherical_kabuki)this.jr="true"==b;this.si=sB(this.si,a.internal_ip_override);this.innertubez=sB(this.innertubez,a.innertubez);this.hasSubfragmentedFmp4=pB(this.hasSubfragmentedFmp4,
a.sfmp4);this.liveExperimentalContentId=rB(this.liveExperimentalContentId,a.live_experimental_content_id)};
g.h.Ac=function(){return!this.pa||this.Me};
g.h.BA=function(a){(this.ue=a)&&"fairplay"==this.ue.flavor&&(this.ue.fairPlayCert=this.fairPlayCert);tD(this)};
g.h.Lb=function(){return!(!this.la||!this.la.l)};
g.h.GF=function(a){if(!this.ga()){if(this.Fl){var b=jA(a,this.Fl);b&&(a=b)}uD(this,a);this.pa&&this.la.subscribe("refresh",this.Lu,this);g.RC("mrc");Uz(this.la)&&(this.Eg=!0);tD(this)}};
g.h.FF=function(a){this.ga()||(this.xe=!1,this.P("dataloaderror",new g.cC("manifest.net.retryexhausted",!0,{backend:"manifest",rc:a.status})))};
g.h.Lu=function(){this.ga()||(this.la.isLive||this.la.unsubscribe("refresh",this.Lu,this),this.Gq())};
g.h.Gq=function(){var a=this.la;var b=this.Fn;a=a.B?g.ab(a.B.A,b):a.L.length?g.ab(a.L,b):[];0<a.length&&(this.P("cuepointupdated",a),this.Fn+=a.length)};
g.h.NA=function(a){if(this.spacecastFormatMap){var b=wD(this,this.spacecastFormatMap);return jC(a,this.isAd(),b,xD(this,a)).then(this.Bl,void 0,this).then(this.pr,void 0,this)}return Ws()};
g.h.KA=function(a,b){var c=b||rD(this);if(this.la&&!c){if(c=!a.F||this.hj&&a.Za){var d=this.la,e=this.pa;if(!d.g["0"]){var f=new iv(0,0,0,void 0,void 0,"auto");f=new ov("0","fakesb",void 0,f,null,null,1);d.g["0"]=e?new rz(new g.Qy("http://www.youtube.com/videoplayback"),f,"fake"):new g.Mz(new g.Qy("http://www.youtube.com/videoplayback"),f,new g.Hx(0,0),new g.Hx(0,0),0,window.NaN)}}return gB(a.X,this.la,this.ue,!1,Faa(a),c).then(this.Cl,void 0,this)}return Ws()};
g.h.LA=function(a){if(this.hlsFormats){var b=wD(this,this.hlsFormats);if(!g.T(a.experiments,"html5_hls_select_audio_killswitch")){var c;if(WA||Js()||Gs())if(c=fC(b)){var d=[],e={},f;for(f in c)for(var k=g.q(c[f]),l=k.next();!l.done;l=k.next()){var m=l.value;m.ob&&(l=m.ob.id,e[l]||(m=new Ow(l,m.ob),e[l]=m,d.push(m)))}c=0<d.length?d:null}else c=null;else c=null;this.tk=c}return Kaa(a,this.isAd(),b,this.Ve).then(this.Bl,void 0,this)}return Ws()};
g.h.OA=function(a){if(this.Ih&&this.ws){var b=this.isAd(),c=Laa(this.Ih);a=UA(c,RB(a,b)).then(this.Bl,void 0,this)}else a=Ws();return a};
g.h.MA=function(a){var b=wD(this,this.Mh,this.fmtList);if(this.hlsvp){var c=this.hlsvp;var d=this.Ve,e={cpn:this.clientPlaybackNonce};-1==c.indexOf("/ibw/")&&(e.ibw=d?String(d):"1369843");c={url:g.Ug(c,e),type:"application/x-mpegURL",quality:"auto",itag:"93"};b.push(c)}return jC(a,this.isAd(),b,xD(this,a)).then(this.Bl,void 0,this)};
g.h.Cl=function(a){this.Ha=a;/^r/.test(this.clientPlaybackNonce)&&(this.Ha.videoInfos.length&&1080<this.Ha.videoInfos[0].video.g&&(this.Kf=!0),this.Lb()&&(this.Kf=!0));a=this.Ha?this.Ha.getAvailableAudioTracks():[];a=a.concat(this.qg);for(var b=0;b<this.Uh.length;b++)for(var c=this.Uh[b],d=0;d<a.length;d++){var e=a[d],f=e.ob.id==c.audioTrackId;if(e.ob.isDefault&&b==this.qm||f){if(c.captionTrackIndices)for(f=0;f<c.captionTrackIndices.length;f++)e.captionTracks[f]=this.captionTracks[c.captionTrackIndices[f]];
g.t(c.defaultCaptionTrackIndex)&&(e.Dm=this.captionTracks[c.defaultCaptionTrackIndex]);g.t(c.forcedCaptionTrackIndex)&&(e.ci=this.captionTracks[c.forcedCaptionTrackIndex]);e.yq=c.visibility||"UNKNOWN"}}};
g.h.Bl=function(a){this.df=a;this.Cl(new SA((0,g.H)(this.df,function(a){return a.Re()})))};
g.h.pr=function(){var a=Pk(this.Ha.videoInfos,function(a,c){return c.video.isAccelerated&&(!a||a.height<c.video.height)?c.video:a},null);
a&&(this.dj=this.aj=a=Dv(a.quality,a.quality,!0))};
g.h.dd=function(){var a={};this.Da&&(a.fmt=nv(this.Da),this.Jb&&nv(this.Jb)!=nv(this.Da)&&(a.afmt=nv(this.Jb)));a.plid=this.playbackId;a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.zj&&(a.infringe=1);this.Lf&&(a.splay=1);this.pa&&(a.live=this.Me?"dvr":"live");this.bf&&(a.autoplay=1);this.ul&&(a.sdetail=this.ul);this.Fe&&(a.partnerid=this.Fe);this.osid&&(a.osid=this.osid);return a};
g.h.getStoryboardFormat=function(){if(this.Xa&&this.Xa.storyboards){var a=this.Xa.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.Hb.storyboard_spec||this.Hb.live_storyboard_spec};
g.h.ed=function(){return this.la&&!(0,window.isNaN)(this.la.ed())?this.la.ed():this.Lb()?0:this.lengthSeconds};
g.h.ub=function(){return this.la&&!(0,window.isNaN)(this.la.ub())?this.la.ub():0};
g.h.Uc=function(){return!this.ga()&&!(!this.videoId&&!this.Ih)};
g.h.Tb=function(){return ED(this)&&!this.hh&&!this.Eg};
g.h.dw=function(){var a={format:"RAW",method:"GET",withCredentials:this.Qv};this.Eh&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData});0<this.Qm&&(a.timeout=this.Qm);var b=this.Rm;0<this.yl&&(b=g.is(b,{playerretry:this.yl}));this.Hr?Oz(Ts,b,a).then(Vr(this.Ru),Vr(this.ZF),this):(a.context=this,a.fb=this.Ru,a.onError=this.fn,g.qs(b,a));g.RC("vir");g.RC("vir",void 0,"video_to_ad");this.Gr=g.yu()};
g.h.xc=function(a,b){if(30==this.Fe){var c=this.eg["default.jpg"];return c?c:this.videoId?g.Ug("//docs.google.com/vt",{id:this.videoId,authuser:this.uc,authkey:this.authKey}):"//docs.google.com/images/doclist/cleardot.gif"}b||(b="hqdefault.jpg");return(c=this.eg[b])||a.H||"pop1.jpg"==b||"pop2.jpg"==b||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b?c:UB(a,this.videoId,b)};
g.h.Ru=function(a){if(!this.ga()){var b=a.responseText;if(b){this.xe=!1;var c=g.ds(b);this.os&&eC(c);"fail"==c.status?this.P("onStatusFail",c):(g.RC("virc"),g.RC("virc",void 0,"video_to_ad"),(0,g.F)(g.qX,function(a){a in this.Hb&&(c[a]=this.Hb[a])},this),this.setData(c),ED(this)?tD(this):this.P("dataloaderror",new g.cC("manifest.net.retryexhausted",!0,{successButUnplayable:"1"})))}else this.fn(a)}};
g.h.ZF=function(a){this.fn(a.g)};
g.h.fn=function(a){if(!this.ga()){var b=a?a.status:-1;a=this.yl>=this.jp||400==b;var c=200<b?"manifest.net.badstatus":"manifest.net.connect",d=((g.yu()-this.Gr)/1E3).toFixed(3);b={backend:"gvi",rc:b,rt:d};a&&this.jp?(c="manifest.net.retryexhausted",b.urllen=String(this.Rm.length)):a||(this.yl++,this.cw.start());this.P("dataloaderror",new g.cC(c,a,b))}};
g.h.getAvailableAudioTracks=function(){return qD(this)?0<this.Ha.getAvailableAudioTracks().length?this.Ha.getAvailableAudioTracks():this.tk||[]:[]};
g.h.getAudioTrack=function(){var a=this;if(this.Jb&&"application/x-mpegURL"!=this.Jb.mimeType)return g.Na(this.getAvailableAudioTracks(),function(b){return b.id==a.Jb.id})||this.qg;
if(this.tk){if(!this.Zi)for(var b=g.q(this.tk),c=b.next();!c.done;c=b.next())if(c=c.value,c.ob.isDefault){this.Zi=c;break}return this.Zi||this.qg}return this.qg};
g.h.getPlayerResponse=function(){return this.Xa};
g.h.getPlaylistId=function(){return null};
g.h.Eb=function(){return this};
g.h.mk=function(a){return a.getVideoUrl(this.videoId)};
g.h.se=function(){return!!this.la&&this.la.se()};
g.h.te=function(){return!!this.la&&this.la.te()};
g.h.Gd=function(){return!!this.la&&this.la.Gd()};
g.h.Bg=function(){return!!this.la&&this.la.Bg()};
g.h.isAd=function(){return!!this.adFormat};
g.qX="oauth_token ypc_buy_url ypc_full_video_message ypc_item_thumbnail ypc_item_title ypc_item_url ypc_module ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_offer_type ypc_overlay_timeout ypc_preview ypc_signin_message ypc_vid".split(" ");cba="author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_button_formatted_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
nD=["annotations","captions","storyboard","chapterMarkers"];var $ca={kK:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"ERROR_AUTHENTICATION_EXPIRED",mK:"ERROR_AUTHENTICATION_MALFORMED",nK:"ERROR_AUTHENTICATION_MISSING",qK:"ERROR_BAD_REQUEST",EK:"ERROR_CGI_PARAMS_MALFORMED",FK:"ERROR_CGI_PARAMS_MISSING",SK:"YTP_DEVICE_FALLBACK",ZK:"YTP_ERROR_LICENSE",aL:"YTP_ERROR_VIDEO_UNAVAILABLE",dL:"YTP_ERROR_FORMAT_UNAVALIABLE",fL:"YTP_ERROR_GEO_FAILURE",sL:"YTP_ERROR_GENERIC_WITHOUT_LINK",tL:"YTP_HTML5_FLASH_DEPRECATED",uL:"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
AL:"YTP_ERROR_INVALID_DRM_MESSAGE",pM:"YTP_ERROR_PURCHASE_NOT_FOUND",qM:"YTP_ERROR_PURCHASE_REFUNDED",vM:"YTP_ERROR_RENTAL_EXPIRED",zK:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",AK:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",CK:"YTP_ERROR_CAST_TOKEN_FAILED",BK:"YTP_ERROR_CAST_TOKEN_EXPIRED",DK:"YTP_ERROR_CAST_TOKEN_MALFORMED",zM:"YTP_ERROR_SERVER_ERROR",JM:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",MM:"YTP_ERROR_STREAM_LICENSE_NOT_FOUND",KM:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",LM:"YTP_ERROR_STREAMING_NOT_ALLOWED",
xM:"YTP_ERROR_RETRYABLE_ERROR",TM:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",SM:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",XM:"YTP_ERROR_UNSUPPORTED_DEVICE",YM:"YTP_ERROR_VIDEO_FORBIDDEN",ZM:"YTP_ERROR_VIDEO_NOT_FOUND"},jba={300:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",303:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",304:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",305:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"YTP_ERROR_VIDEO_NOT_FOUND",401:"YTP_ERROR_GEO_FAILURE",
402:"YTP_ERROR_STREAMING_NOT_ALLOWED",403:"YTP_ERROR_UNSUPPORTED_DEVICE",405:"YTP_ERROR_VIDEO_FORBIDDEN",500:"YTP_ERROR_PURCHASE_NOT_FOUND",501:"YTP_ERROR_RENTAL_EXPIRED",502:"YTP_ERROR_PURCHASE_REFUNDED",5E3:"ERROR_BAD_REQUEST",5001:"ERROR_CGI_PARAMS_MISSING",5002:"ERROR_CGI_PARAMS_MALFORMED",5100:"ERROR_AUTHENTICATION_MISSING",5101:"ERROR_AUTHENTICATION_MALFORMED",5102:"ERROR_AUTHENTICATION_EXPIRED",5200:"YTP_ERROR_CAST_TOKEN_MALFORMED",5201:"YTP_ERROR_CAST_TOKEN_EXPIRED",5202:"YTP_ERROR_CAST_TOKEN_FAILED",
5203:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",5204:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",6E3:"YTP_ERROR_INVALID_DRM_MESSAGE",7E3:"YTP_ERROR_SERVER_ERROR",8E3:"YTP_ERROR_RETRYABLE_ERROR"};var qfa=oX&&4>pU?.1:0,Aea=new ZD;ZD.prototype.g=null;ZD.prototype.l=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};g.r($D,g.I);g.h=$D.prototype;g.h.Vc=function(){this.g.ended&&this.wb(0);!this.gd()&&this.l&&(g.Q(Error("playVideo without src")),cE(this,this.l.Of),this.l.g||this.load());var a=this.play();!a&&oX&&7<=pU&&g.Ot(this,"playing",(0,g.A)(function(){g.$r((0,g.A)(this.sr,this,this.xa(),0),500)},this));
return a};
g.h.sr=function(a,b){this.g.paused||this.xa()>a||10<b||(this.play(),g.$r((0,g.A)(this.sr,this,this.xa(),b+1),500))};
g.h.wb=function(a){0<this.g.readyState&&(oX&&4>pU&&(a=Math.max(.1,a)),this.g.currentTime=a)};
g.h.Ae=function(){!this.o&&this.gd()&&(WA&&0<this.xa()&&this.wb(0),this.g.removeAttribute("src"),this.load(),bE(this,null))};
g.h.addEventListener=function(a,b){this.B.fa(a,b,!1,this);if(!this.A[a]){var c=(0,g.A)(this.NB,this);this.g.addEventListener(a,c);this.A[a]=c}};
g.h.removeEventListener=function(a,b){this.B.Qa(a,b,!1,this)};
g.h.dispatchEvent=function(a){return this.B.dispatchEvent(a)};
g.h.Jq=function(){this.C&&!this.g.muted&&(uy(),this.g.muted=!0)};
g.h.R=function(){this.F&&this.removeEventListener("volumechange",this.Jq);g.I.prototype.R.call(this)};g.r(lE,g.Ne);lE.prototype.preventDefault=function(){g.Ne.prototype.preventDefault.call(this);this.g&&this.g.preventDefault()};
lE.prototype.stopPropagation=function(){g.Ne.prototype.stopPropagation.call(this);this.g&&this.g.stopPropagation()};g.AE=g.xf(function(){var a="";try{var b=g.Dd("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.mE.prototype.isError=function(){return g.V(this,128)};
var nE=!1;EE.prototype.isEmpty=function(){return this.endTime==this.startTime};GE.prototype.update=function(){var a=this.l.l()||0,b=g.LE(this.l);if(a!=this.g||KE(this,a,b)){var c;if(!(c=a<this.g||a-this.g>b-this.C+2||KE(this,a,b))){var d=this.l.dd();c=d.volume;var e=c!=this.K;d=d.muted;d!=this.I?(this.I=d,c=!0):(!e||0<=this.B||(this.K=c,this.B=b),c=b-this.B,0<=this.B&&2<c?(this.B=-1,c=!0):c=!1)}c&&(g.HE(this),this.o=a);this.C=b;this.g=a}};var NE={other:1,none:2,wifi:3,cellular:7};g.r(QE,g.I);
QE.prototype.B=function(a){if(!this.ga()&&(a=0<=a?a:g.LE(this.g),"PL"==this.o&&(!g.dc(this.l)||a>=this.A+30)&&(g.PE(this,a,"vps",[this.o]),this.A=a),!g.dc(this.l)&&!this.sa)){TE(this,a);var b=a,c=this.g.F(),d=c.droppedVideoFrames,e=d-this.ba;if(d>c.totalVideoFrames||5E3<e)this.onError("html5.badframedropcount","df."+d+";tf."+c.totalVideoFrames);else 0<e&&g.PE(this,b,"df",[e]);this.ba=d;!g.T(this.g.g.experiments,"disable_webgl_reporting")&&0<this.C&&(g.PE(this,a,"glf",[this.C]),this.C=0);a={event:"streamingstats"};
this.g.videoData.Da&&(a.fmt=nv(this.g.videoData.Da),(b=this.g.videoData.Jb)&&nv(b)!=a.fmt&&(a.afmt=nv(b)));a.cpn=this.g.videoData.clientPlaybackNonce;a.ei=this.g.videoData.eventId;a.el=KD(this.g.videoData,this.g.g);a.docid=this.g.videoData.videoId;a.ns=this.g.g.Wa;a.fexp=this.g.g.experiments.experimentIds.toString();a.cl=this.g.g.Ua;this.g.videoData.adFormat&&(a.adformat=this.g.videoData.adFormat);this.g.videoData.pa&&(a.live=this.g.videoData.Me?"dvr":"live");a.seq=this.ua++;g.kc(a,this.g.g.A);a=
g.Ug("//"+this.g.g.tf+"/api/stats/qoe",a);b="";for(var f in this.l)null==this.l[f]?g.Q(Error("Stats report key has invalid value: "+f),"WARNING"):b+="&"+f+"="+this.l[f].join(",");g.T(this.g.g.experiments,"html5_qoe_post")?Os(a,void 0,b.replace(/ /g,"%20")):Os(a+b);this.l={}}};
QE.prototype.ma=function(){this.g.videoData.ue&&WE(this,"drm-"+this.g.videoData.ue.flavor)};
QE.prototype.onError=function(a,b){var c=g.LE(this.g);VE(this,c,a,b);TE(this,c);UE(this)};
QE.prototype.R=function(){g.I.prototype.R.call(this);window.clearInterval(this.T)};
var rX={},sba=(rX[5]="N",rX[-1]="N",rX[3]="B",rX[0]="EN",rX[2]="PA",rX[1]="PL",rX);XE.prototype.send=function(a){if(!this.T){var b=ZE(this);b=g.Ug(this.zb,b);if(this.F)this.K&&(a={method:"POST",rb:{atr:this.K}},this.Eh&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData}),g.qs(b,a));else{if(this.F)var c=null;else{c=this.I&&ks();var d=this.Eh&&!!this.visitorData;if(c||d){var e={};c&&(e.Authorization="Bearer "+this.I);d&&(e["X-Goog-Visitor-Id"]=this.visitorData);c={headers:e,withCredentials:!0,Kc:a}}else c=null}c?g.qs(b,c):g.Ns(b,a)}this.T=!0}};
XE.prototype.g=function(a){void 0==a&&(a=window.NaN);return(1*a.toFixed(3)).toString()};g.r($E,g.I);$E.prototype.aa=function(a,b){if(!this.ga()){this.F=window.NaN;this.o.update();var c=JE(this.o),d=cF(this,c);b&&(d.B=a);var e=400<this.L;!(1<c.length)&&c[0].isEmpty()||e||(d.l=aF(this,!0,a));d.send();this.L++}};
$E.prototype.onError=function(a,b){if(!this.ga())this.l.onError(a,b)};
$E.prototype.H=function(a){var b=this.g.g,c=this.g.videoData,d={ns:b.Wa,el:KD(c,b),eurl:b.Sa,fmt:c.Da?nv(c.Da):0,html5:1,list:c.playlistId,plid:c.playbackId,cpn:c.clientPlaybackNonce,ei:c.eventId,ps:b.playerStyle,noflv:1,st:this.g.l(),video_id:c.videoId,metric:a};ND(c,b)&&(d.autoplay="1");"heartbeat"==a&&(d.tpmt=IE(this.o));g.Ia(d,b.A);eF(this,g.Ug((b.g?b.protocol+"://www.youtube.com/":b.baseYtUrl)+"live_204",d))};
$E.prototype.R=function(){g.I.prototype.R.call(this);g.bs(this.F);this.F=window.NaN;var a=this.o;window.clearInterval(a.F);a.F=window.NaN;g.bs(this.A)};g.r(jF,Cw);g.h=jF.prototype;g.h.Ga=function(){return wK(this.app)};
g.h.gt=function(a,b,c,d,e){return kW(this.app,a,b,c,d,e)};
g.h.mC=function(a,b,c){this.app.g.K.add(a,{Lj:b,Dp:c})};
g.h.nC=function(a,b){eW(this.app,a,b||this.playerType)};
g.h.Pf=function(a){return TV(this.app,a)};
g.h.Ii=function(a,b,c,d){aW(this.app,a,c||this.playerType,b,d)};
g.h.ko=function(a,b,c){var d=this.app;b=b||this.playerType||1;c=c||!1;d.ya.get(b+vB(a))||(d.g.Sb&&eC(a),a=new g.mD(a),d.ya.get(b+a.videoId)||(a.ol=!0,c?(c=g.X(d,b),bW(d,b)):c=PU(d,b),xJ(c,a,(0,g.A)(d.dd,d)),AJ(c,!0),d.ya.set(b+a.videoId,c)))};
g.h.wh=function(a,b){iW(this.app,a,b)};
g.h.Gi=function(a){jW(this.app,a)};
g.h.Hd=function(a,b,c){sW(this.app,PV(this.app)+a,b,c,this.playerType)};
g.h.JC=function(a){if(a){var b=this.getPlaylistId();if(!b||b==a.list){var c=a.video;(b=this.app.C)?this.isFullscreen()&&((c=c[b.Pa])&&c.encrypted_id!=b.Eb().videoId||(a.index=b.Pa)):DV(this.app,{list:a.list,index:a.index,playlist_length:c.length});wF(this.app.C,a);this.ka("onPlaylistUpdate")}}else a=this.app,GV(a),a.l.ka("onPlaylistUpdate")};
g.h.IC=function(){Hu()};
g.h.KC=function(a,b){var c=g.X(this.app,this.playerType||1);c&&c.g.jf(a,b)};
g.h.getPlayerResponse=function(){var a=g.X(this.app,this.playerType);return a?a.g.getPlayerResponse():null};
g.h.getStoryboardFormat=function(){return RU(this.app).getStoryboardFormat()};
g.h.qC=function(){var a=this.app.g;return{Sb:a.Sb,Za:a.Za}};
g.h.Y=function(){var a=Cw.prototype.Y.call(this),b=g.X(this.app,this.playerType);b&&(b=b.g,a.backgroundable=b.backgroundable,a.eventId=b.eventId,a.cpn=b.clientPlaybackNonce,a.isLive=b.pa,a.itct=b.ph,a.paidContentOverlayText=zD(b),a.paidContentOverlayDurationMs=AD(b),null!=b.liveUtcStartSeconds&&(a.liveUtcStartSeconds=b.liveUtcStartSeconds));return a};
g.h.xa=function(a){return a?PV(this.app,a):Cw.prototype.xa.call(this)};
g.h.Bc=function(a){return a?QV(this.app,a):Cw.prototype.Bc.call(this)};
g.h.Qf=function(a){if(3==this.Ga())return g.xK(this.app.A).aD();var b=RU(this.app),c=g.X(this.app,a)||g.X(this.app),d=this.app.Ac(),e=b.clipEnd;b=b.clipStart;var f=this.xa(a);a=this.Bc(a);var k=gK(c),l=RJ(c),m=g.X(this.app,void 0);if(m){var n=window.NaN;m.l&&(n=hE(m.l));m=0<=n?n:m.Vb()}else m=0;return{allowSeeking:d,clipEnd:e,clipStart:b,current:f,displayedStart:-1,duration:a,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:hK(c),seekableStart:c.ub()}};
g.h.fo=function(a){return vV(this.app,a)};
g.h.bo=function(a){return uV(a)};
g.h.wt=function(a,b){var c=g.X(this.app,this.playerType);if(c){var d=Dv(a,b||a,!0);WJ(c,"m",d)}};
g.h.pC=function(){var a=RU(this.app);var b=PV(this.app);if(a.la&&a.pa&&a.Da){var c=a.la.g[a.Da.id];c&&c.index?(a=c.index.Ff(b),c=c.index.jd(a),b={sequence:a,elapsed:Math.floor(1E3*(b-c))}):b=null}else b=null;return b};
g.h.De=function(a){var b=this.app,c=g.X(b,this.playerType);c&&b.g.Ab.has(a.toString())&&c.C&&(b=bF(c.C,"engage"),b.C=a,b.send(void 0))};
g.h.Ji=function(a,b,c){var d=this.app.A.A;d&&d.Bi()&&d.Un(a,b,c)};
g.h.vC=function(a,b){var c=g.Kw(this);c&&c.Zn(a,b)};
g.h.getAudioTrack=function(){var a=g.X(this.app,this.playerType);return a?a.getAudioTrack():RU(this.app).qg};
g.h.mo=function(a){3==this.Ga()&&g.xK(this.app.A).Ki("control_set_audio_track",a);var b=g.X(this.app,this.playerType);if(b&&!b.ga()&&!g.V(b.o,128))if(b.g.Ha.g){var c=b.B;if(c.ga())a=!0;else{var d=c.F;a=a.id;d.A="m";d.B=d.H.g[a];d.U=d.B;c.P("audioformatchange",new xF(d.U,d.o,d.A));c.l.L||c.A&&!c.A.g.remove?a=!1:(VH(c),mH(c.g),mH(c.o),g.zq(c.U),a=!0)}a||b.Tv()}else{a:if(c=b.g,"application/x-mpegURL"!=c.Jb.mimeType||a==c.Zi||!c.df||0>=c.df.length)c=!1;else{d=g.q(c.df);for(var e=d.next();!e.done;e=d.next()){e=
e.value;if(!(e instanceof gC)){c=!1;break a}e.o&&(e.o.l=a.ob.id,e.g=null)}c.Zi=a;c=!0}c&&(b.g.Jb&&HJ(b,"m",b.g.Jb),SJ(b)&&b.ec("hlsaudio",a.id))}};
g.h.getAvailableAudioTracks=function(){return g.X(this.app,this.playerType).getAvailableAudioTracks()};
g.h.rC=function(){var a=g.X(this.app,this.playerType);return a&&a.g.Da?g.Iv(WI(a.sa,a.g)):"unknown"};
g.h.tC=function(){return Mv()};
g.h.EC=function(a,b){var c=this.app;c.yd=a;c.Yb=b;c.l.P("sizestylechange",a,b);c.H.Ee()};
g.h.oC=function(){var a=this.app.A.H;a&&a.rz()};
g.h.xt=function(){var a=g.Kw(this);a&&a.Lk(!0)};
g.h.vt=function(){var a=g.Kw(this);a&&a.Lk(!1)};
g.h.Ye=function(){var a=this.isFullscreen()||IB(this.app.g);return this.Ci()?4:Pw()?3:a?2:this.app.ha?1:this.app.Ab?5:0};
g.h.isFullscreen=function(){return this.app.g.Ma};
g.h.xC=function(){return this.app.Ab};
g.h.Ci=function(){var a=g.X(this.app,this.playerType);return!!a&&a.Ja};
g.h.HC=function(){return!0};
g.h.qt=function(a){a=g.sM(this.app.H,a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.h.DC=function(a){this.app.g.enableSafetyMode=a};
g.h.zC=function(a){tt();pW(this.app,a?2:0)};
g.h.jo=function(){var a=this.app.A.B;a&&a.created&&(a.unload(),a.created=!1);(a=g.X(this.app))&&eK(a);(a=this.app.A.I)&&a.vA()&&g.vK(this.app.U,!0)};
g.h.Ae=function(){var a=this.app.g;!g.T(a.experiments,"disable_new_pause_state3")&&WB(a)&&"blazer"!=a.playerStyle?this.jo():Cw.prototype.Ae.call(this)};
g.h.Ir=function(){return iK(g.X(this.app,this.playerType),!0)};
g.h.Ok=function(a){this.app.A.l.Jp(a,!0)};
g.h.Kg=function(){var a=this.app.A.l;return a?a.Nm():null};
g.h.lo=function(){this.app.A.l.Uv()};
g.h.wC=function(){var a=g.X(this.app,this.playerType);if(!a)return!1;a=a.g;return!!a&&a.Uc()&&!!a.Da&&a.Da.video.isAccelerated&&a.Da.video.o};
g.h.isPeggedToLive=function(a){return this.app.isPeggedToLive(void 0===a?!0:a)};
g.h.CC=function(a){var b=this.app;b.ha=a;a=b.A;(a=g.W(a.g).useMiniplayerUi?a.ba:null)&&(b.ha?a.load():a.unload());b.l.P("minimized")};
g.h.BC=function(a){this.app.Ab=a};
g.h.Di=function(a){return SV(this.app,a)};
g.h.Mk=function(a){if(a){var b=this.app.A.o;b&&b.ct(a,!1)}};
g.h.FC=function(a){this.Mk(a)};
g.h.sC=function(){return this.eo()};
g.h.yC=function(a){var b=this.app;b.g.xf=a;b.F&&(a=b.F,a.C&&g.HE(a.C.o),b.g.O&&uW(b))};
g.h.Zd=function(a){this.P("aduxclicked",a)};
g.h.setVolume=function(a,b){Hw(this,a,b)};
g.h.mute=function(a){Iw(this,a)};
g.h.Ce=function(a){Jw(this,a)};
g.h.wA=function(){return this.app.X};
g.h.Fi=function(a){if("annotations_module"==a){var b=this.app.A.A;b&&!b.loaded&&b.load()}Cw.prototype.Fi.call(this,a)};
g.h.Nk=function(a){if("annotations_module"==a){var b=this.app.A.A;b&&b.loaded&&b.unload()}Cw.prototype.Nk.call(this,a)};
g.h.Wc=function(a,b,c){if(!b)return null;var d=this.app.A;switch(a){case "ad":return(a=d.B)&&a.Ft&&a.Ft(b,c);case "remote":return(a=g.xK(d))&&a.ZC(b,c);case "unplugged":return(a=g.VB(g.W(d.g))?d.C:null)&&a.B(b,c);case "spacecast":return(c=d.U)&&c.C(b);case "annotations_module":return(a=d.A)&&a.gB(b,c);case "creatorendscreen":return(a=d.F)&&a.mB(b,c)}return Cw.prototype.Wc.call(this,a,b,c)};
g.h.Ig=function(a){var b=this.app.A;switch(a){case "ad":return(b=b.B)&&b.Gt&&b.Gt();case "remote":return g.xK(b)&&["casting","receivers","currentReceiver","quickCast"];case "annotations_module":return(b=b.A)&&b.hB();case "creatorendscreen":return(b=b.F)&&b.nB();case "unplugged":return(g.VB(g.W(b.g))?b.C:null)&&"settingsMenuShown hideSettingsMenu showSettingsMenu getStoryboardFrameData getStoryboardFrameIndex getStoryboardFrameIntervalSeconds getStoryboardMaxFrameIndex".split(" ")}return a?Cw.prototype.Ig.call(this,
a):(a=Cw.prototype.Ig.call(this),b.B&&a.push("ad"),g.xK(b)&&a.push("remote"),b.A&&a.push("annotations_module"),b.F&&a.push("creatorendscreen"),g.VB(g.W(b.g))&&b.C&&a.push("unplugged"),a)};
g.h.Jg=function(){var a=this.app.H.Fa();return{width:a.width,height:a.height}};
g.h.AC=function(a){var b=this.app.H;b.F=tB(a,!0);b.Ee()};
g.h.PJ=function(){var a=g.Kw(this);a&&a.ao()};
g.h.uC=function(){return g.xU(this.app.H)};
g.h.GC=function(a){var b=this.app.H;b.T!=a&&(b.T=a,b.Ee())};kF.prototype.reset=function(){PC("")};
kF.prototype.g=function(a,b){g.RC(a,b,"")};
kF.prototype.info=function(a,b){g.SC(a,b,"")};g.mF.prototype.Df=ba(1);g.mF.prototype.F=function(){return this.oa};
g.mF.prototype.toString=function(){return"CueRange{"+this.namespace+":"+this.oa+"}["+nF(this.start)+", "+nF(this.end)+"]"};
g.mF.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a==this.end&&this.start==this.end)&&(null==b||a<b&&b<=this.end)};
var uba=1;g.mF.prototype.getId=g.mF.prototype.F;g.pF.prototype.toString=function(){return this.type+this.id};g.r(g.rF,g.R);g.h=g.rF.prototype;g.h.hasNext=function(a){return this.loop||!!a||this.Pa+1<this.Nf};
g.h.qe=function(a){return this.loop||!!a||0<=this.Pa-1};
g.h.Eb=function(a,b,c){a=void 0!=a?a:this.Pa;a=this.Ba&&a in this.Ba?this.Ba[this.ld[a]]:null;var d=null;a&&(b&&(a.autoplay="1"),c&&(a.autonav="1"),d=new g.mD(a),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.h.setShuffle=function(a){this.ww=a;a=this.ld&&null!=this.ld[this.Pa]?this.ld[this.Pa]:this.Pa;this.ld=[];for(var b=0;b<this.Ba.length;b++)this.ld.push(b);this.Pa=a;this.Gk++;if(this.ww){a=this.ld[this.Pa];for(b=1;b<this.ld.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.ld[b];this.ld[b]=this.ld[c];this.ld[c]=d}for(b=0;b<this.ld.length;b++)this.ld[b]==a&&(this.Pa=b);this.Gk++}this.P("shuffle")};
g.h.xc=function(a,b){b=b||"hqdefault.jpg";var c=this.eg[b];if(c||a.H||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b)return c;if(this.Ew.length)return UB(a,this.Ew[0],b)};
g.h.getLength=function(){return this.Nf};
g.h.bi=function(a){if(a&&(a=a.videoId,!this.Ba[this.Pa]||this.Ba[this.Pa].video_id!=a))for(var b=0;b<this.Ba.length;b++)if(this.Ba[b].video_id==a){this.Pa=b;break}};
g.h.onReady=function(a){this.Xi=a;this.we&&g.$r(this.Xi,0)};
g.h.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.h.mk=function(a){return a.getVideoUrl(this.Eb().videoId,this.getPlaylistId())};
g.h.R=function(){this.Xi=null;g.Me(this.Ba);g.R.prototype.R.call(this)};yF.prototype.add=function(a){this.g=(this.g+1)%this.l.length;this.l[this.g]=a};
yF.prototype.clear=function(){for(var a=this.l.length,b=0;b<a;b++)this.l[b]=0;this.o=this.g=this.l.length-1};g.r(BF,g.R);BF.prototype.isPeggedToLive=function(){return this.C};$F.prototype.reset=function(){this.V=cG(this);bG(this);this.g=new ZF(0,0,null);this.B=8;this.A=[];this.o=[];this.C=this.I=window.NaN;this.l=this.K=0;this.U=!1};
$F.prototype.process=function(a){var b=!1;if(this.A.length){if(fG(this)&&this.A.length+a.byteLength<this.B)return gG(this,a,0),0;b=this.A.length;var c=new window.Uint8Array(b+a.byteLength);c.set(this.A,0);c.set(new window.Uint8Array(a.buffer,a.byteOffset,a.byteLength),b);this.A=[];a=new window.DataView(c.buffer);b=!0}for(var d=c=0;c<a.byteLength;){var e=a.byteLength-c,f=window.NaN;if(fG(this)){if(e<this.B)return gG(this,a,c),0;switch(this.g.type){case 0:f=dG(this,a,c);b||0!=c||(d=this.g.type);break;
case 1836019574:case 1836019558:f=dG(this,a,c);break;case 1953653094:e=a;f=c;this.K||(this.K=rx(hG(this,e,f),this.l));f=dG(this,e,f);break;case 1836476516:this.l=tx(hG(this,a,c));eG(this);f=this.g.size-8;break;case 1952867444:(0,window.isNaN)(this.C)||(e=hG(this,a,c),f=this.H.V?this.C:Ax(e),this.H.V&&zx(e,f),(0,window.isNaN)(this.F)&&(this.F=f),this.C+=this.K,this.T+=this.K);f=this.g.size-8;break;case 1936286840:e=hG(this,a,c),f=Cx(e),this.l=Bx(e),eG(this),this.K=f,f=this.g.size-8}}else f=Math.min(this.B,
e);this.g.offset+=f;this.B-=f;c+=f;if(0==this.B){for(;0!=this.g.type&&this.g.offset==this.g.size&&this.g.g;)1835295092==this.g.type&&(this.U=!0),this.g.g.offset+=this.g.size,this.g=this.g.g;switch(this.g.type){case 0:case 1836019574:case 1836019558:case 1953653094:this.B=8;break;default:this.B=this.g.size-8}}}0<a.byteLength&&this.o.push(a);return d};var Fba=0;g.h=rG.prototype;g.h.RI=function(a){this.status=a.status;a.ok?(this.C=a.body.getReader(),this.B?(this.K=a.headers,this.T(),this.o=new window.Uint8Array(tG(this)),xG(this)):this.C.cancel("Cancelling")):zG(this)};
g.h.sF=function(a){if(this.B){var b;window.performance&&window.performance.now&&(b=window.performance.now());var c=(0,g.G)(),d=a.value?a.value:null;(0,g.G)();a.done?(this.C=null,zG(this)):(yG(this)?(wG(this,d),this.B(c,this.l,b)):(a=this.l,this.F.Fx&&(a+=d.length),this.B(c,a,b),wG(this,d)),xG(this))}};
g.h.Dt=function(a){this.L=""+a;this.H=!0;zG(this)};
g.h.Id=function(a){return this.K.get(a)};
g.h.ri=function(){return!!this.K};
g.h.Gm=function(){return this.l};
g.h.gk=function(){return+this.Id("content-length")};
g.h.Xr=function(){return 200<=this.status&&300>this.status&&!!this.l};
g.h.Cg=function(){return!!this.A.length||(this.I||yG(this))&&0<this.g};
g.h.pw=function(){this.Cg();this.A.length||uG(this);return this.A.shift()};
g.h.zt=function(){this.Cg();this.A.length||uG(this);return this.A[0]};
g.h.abort=function(){this.C&&this.C.cancel("Cancelling");this.U=this.B=null};
g.h.zw=function(){return!0};
g.h.Mv=function(){return this.H};
g.h.oo=function(){return this.L};g.h=AG.prototype;g.h.MC=function(){if(!this.l){this.status=this.g.status;try{this.response=this.g.response}catch(a){}this.o=!0;this.A()}};
g.h.OC=function(){2==this.g.readyState&&this.B()};
g.h.NC=function(a){this.l||(this.status=this.g.status,this.C(a.timeStamp,a.loaded))};
g.h.ri=function(){return 2<=this.g.readyState};
g.h.Id=function(a){try{return this.g.getResponseHeader(a)}catch(b){return g.Q(b),""}};
g.h.gk=function(){return+this.Id("content-length")};
g.h.Gm=function(){return this.response.byteLength};
g.h.Xr=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.h.Cg=function(){return this.o&&!!this.response&&!!this.response.byteLength};
g.h.pw=function(){this.Cg();var a=this.response;this.response=null;return new window.Uint8Array(a)};
g.h.zt=function(){this.Cg();return new window.Uint8Array(this.response)};
g.h.abort=function(){this.l=!0;this.g.abort()};
g.h.zw=function(){return!1};
g.h.Mv=function(){return!1};
g.h.oo=function(){return""};g.h=BG.prototype;g.h.xb=function(){return this.A?this.A.xb():""};
g.h.start=function(a){var b=this;FG(this,2);this.O=mfa++;this.l?(this.K=oz(this.info,this.l.o,this.l.length),this.A=g.mz(this.info,this.o,this.V,this.K)):(this.K=this.info.range,this.A=g.mz(this.info,this.o,this.V));var c=!1;if(this.o.ua&&2>this.info.g.g&&this.I){var d=this.A.get("aitags");if(d&&(lz(this.info)||kz(this.info))&&this.ba&&"auto"==Mv()&&Pv()){d=sb(d).split(",");var e=[];(0,g.F)(d,function(a){g.Sa(b.ba,a)&&e.push(a)});
0<e.length&&(this.A.set("altitags",g.rb(e.join(","))),c=!0)}}c||(this.I=!1);this.A.set("rn",this.O.toString());0<=a&&this.A.set("rbuf",(1E3*a).toFixed().toString());a=this.A.xb();try{this.g=Hba(this,a)}catch(f){this.B="net.ssl";GG(this);return}0<this.o.K&&this.U.start()};
g.h.DI=function(){this.F=0;this.info.g.A=g.yu();var a=EG(this);a.A=g.yu();a.o+=1;a=this.timing;a.l=(0,g.G)();a.C=a.l;a.o=0;a.L=a.l;a.K=0;a.F&&(a.F=[]);a.ba=!1;a.X=!1;a.B=0;a.I=QA(a.g);pG(a);a.U=(a.T-a.l)/1E3;a.H=window.NaN;a.O=null};
g.h.CI=function(a,b,c){if(!this.ga()){this.C=this.g.status;OG(this,!1);var d=this.timing;a=a>d.l&&4E12>a?a:(0,g.G)();mG(d,a,b);50>a-d.C&&nG(d)&&3!=jG(d)||lG(d,a,b,c);b=this.timing;b.o>b.ua&&b.o>b.g.policy.o&&4>this.state?FG(this,4):LG(this)&&NG(this)&&FG(this,Math.max(3,this.state))}};
g.h.BI=function(){if(!this.ga()){if(!this.L&&this.g.ri()&&this.g.Id("X-Walltime-Ms")){var a=(0,window.parseInt)(this.g.Id("X-Walltime-Ms"),10);this.L=((0,g.G)()-a)/1E3}this.g.ri()&&this.g.Id("X-Restrict-Formats-Hint")&&this.o.mx&&!Pv()&&g.Wu("yt-player-headers-readable",!0,2592E3)}};
g.h.AI=function(){var a=this.g;if(!this.ga()&&a){this.U.stop();this.C=a.status;var b=!1;if(400<=a.status)b=!0,this.B="net.badstatus";else if(a.Xr()){var c="";MG(this)&&(c=a.zt(),2048<c.length?c="":(c=String.fromCharCode.apply(String,c),c=bw(c)?c:""));if(c){a=EG(this);g.yu();a.o=0;a.l=0;a.g=0;a=this.info;var d=this.A;g.iz(a.g,d,c);a.requestId=d.get("req_id");FG(this,5)}else if(c=a.Gm(),(d=!!this.K&&this.K.length)&&d!=c||a.Mv())b=!0,this.B="net.closed";else{OG(this,!0);var e=KG(this)?this.g.Id("X-Bandwidth-Est"):
0;if(a=KG(this)?this.g.Id("X-Bandwidth-Est3"):0)this.X=!0,this.o.uk&&(e=a);a=this.timing;d=(0,g.G)();e=e?(0,window.parseInt)(e,10):0;if(!a.ba){a.ba=!0;d=d>a.l&&4E12>d?d:(0,g.G)();mG(a,d,c);lG(a,d,c);var f=jG(a);if(2==f&&e)kG(a,a.o/e,a.o);else if(2==f||1==f)e=(d-a.l)/1E3,(e<=a.g.policy.C||!a.g.policy.C)&&!a.X&&nG(a)&&kG(a,e,c),nG(a)&&KA(a.g,c,a.B);c=a.g;d=(d-a.l)/1E3;e=a.U;f=a.ha;c.B.g(d,a.o/d);c.o=g.yu();f||c.l.g(1,d-e);a.A&&(a.A=!1)}a=EG(this);g.yu();a.o=0;a.l=0;a.g=0;this.info.g.g=0;FG(this,6)}}else b=
!0,this.B=204==a.status?"net.nocontent":"net.connect";b&&GG(this)}};
g.h.aJ=function(){if(!this.ga()){var a=(0,g.G)(),b=!1;nG(this.timing)?(a=this.timing.T,pG(this.timing),this.timing.T-a>=.8*this.o.K?(this.F++,b=5<=this.F):this.F=0):(b=this.timing,a-=b.l+1E3*b.I.delay,0<a&&(this.F=1),b=a>1E3*this.o.Ua);this.F&&this.H&&this.H(this);b?JG(this):this.U.start()}};
g.h.ga=function(){return-1==this.state};
g.h.dispose=function(){kz(this.info)&&6!=this.state&&(this.info.va[0].g.F=!1);FG(this,-1);this.H=null;this.U.dispose();IG(this)};
BG.g=function(){return!("function"!=typeof window.fetch||!window.ReadableStream)};
BG.DEBUG=!1;g.r(RG,g.R);aH.prototype.start=function(){this.l=!0};
aH.prototype.reset=function(){this.g=this.l=!1};bH.prototype.V=function(a,b){switch(b.info.type){case 1:case 2:this.U(b);break;case 4:var c=b.info.g.Vs(b),d=b.info,e=this.g;e&&e.g==d.g&&e.type==d.type&&(d.range&&e.range?e.range.start==d.range.start&&e.range.end==d.range.end:e.range==d.range)&&e.na==d.na&&e.l==d.l&&e.La==d.La&&(this.g=g.Ka(c).info);(0,g.F)(c,(0,g.A)(this.V,this,a));break;case 3:Lba(this.l,a,b)}};
bH.prototype.U=function(a){var b=this.l;if(1==a.info.type){var c=ny(a);pv(a.info.g.info)&&!qv(a.info.g.info)&&(by(new Vx(c)),ay(21936,c));!b.o.Dk&&qv(a.info.g.info)&&"bt2020"==a.info.g.info.video.primaries&&(b=new Vx(c),Xx(b,[408125543,374648427,174,224,21936,21937])&&(b=b.o+b.g,129==c.getUint8(b)&&1==c.getUint8(b+1)&&c.setUint8(b+1,9)));a.info.g.info.video&&qz(a.info.g,c);2==a.info.g.info.containerType&&a.info.g.info.video&&cy(c)}a.info.g.hn(a)};
bH.prototype.ba=function(a){a=a.info;this.A&&(this.T=this.A);this.A=a;this.I&&this.A.o&&(this.I=!1);a.g.info.g>=this.K&&(this.K=a.g.info.g)};KH.prototype.send=function(){g.qs(this.l,{format:"RAW",responseType:"arraybuffer",timeout:1E4,Kc:this.o,Xc:this.o,context:this});this.g=g.yu()};
KH.prototype.o=function(a){var b={rc:a.status,lb:a.response?a.response.byteLength:0,rt:((g.yu()-this.g)/1E3).toFixed(3),shost:g.Kg(this.l),trigger:this.C};204==a.status||a.response?this.A&&this.A(dC(b)):this.B(new g.cC("pathprobe.net",!1,b))};var rfa=1024/48E3;g.r(QH,g.I);QH.prototype.C=function(a){if(!this.ga()){for(var b=arguments.length-1;0<=b;b--){var c=arguments[b];if(c){g.Wa(this.l,c);var d=this.g,e=d.g;c=g.eb(e,c,d.l);0<=c&&g.Va(e,c)}}this.o()}};
QH.prototype.reset=function(){this.B=this.I=!1;this.F.stop();this.g.g=[];this.l=[];this.o();this.H=null};
QH.prototype.o=function(){this.K=!0;if(!this.L){for(var a=3;this.K&&a;){this.K=!1;this.L=!0;if(this.B&&!this.I&&!this.ga()){this.F.stop();var b=this.O();g.V(b,32)&&this.T.start();for(var c=g.V(this.O(),2)?0x8000000000000:1E3*this.ba(),d=g.V(b,2),e=[],f=[],k=0;k<this.l.length;k++){var l=this.l[k];l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l)}e=e.concat(xca(this,f));if(d)b=NH(this.g,0x7ffffffffffff),b=b.concat(uca(this.g));else if(this.A<=c&&g.vE(b)&&!g.V(b,16)&&!g.V(b,32)){b=this.g;
d=c;f=[];for(k=OH(b,this.A);k<b.g.length&&!(l=b.g[k],(l.end<=d||l.contains(d))&&f.push(l),l.start>d);++k);b=f}else b=NH(this.g,c);e=e.concat(wca(this,b));this.A=c;!this.I&&this.H&&(this.H=null);c=g.q(e);for(e=c.next();!e.done;e=c.next())e=e.value,b=e[1],1==e[0]?(b.o&&b.o.P("onEnter",b),this.U("crn_"+b.namespace,b)):(b.o&&b.o.P("onExit",b),this.U("crx_"+b.namespace,b))}this.L=!1;a--}g.vE(this.O())&&(a=PH(this.g,this.A),!(0,window.isNaN)(a)&&0x7ffffffffffff>a&&(a=(a-this.A)/this.V(),this.F.start(a)))}};
QH.prototype.R=function(){this.l=[];this.g.g=[];this.H=null;g.I.prototype.R.call(this)};TH.prototype.then=function(a,b){return this.o.then(a,b)};
TH.prototype.resolve=function(a){this.l(a)};
TH.prototype.reject=function(a){this.g(a)};g.r(UH,g.R);g.h=UH.prototype;
g.h.initialize=function(a,b,c,d){a=a||0;var e=this.F;d=d&&d.id;e.A="i";"auto"!=Mv()&&(e.A="s");AH(e,b);lca(e,d);e.U=e.B;mca(e);e.o=e.l;b=FH(e);this.o=new bH(this.l,b.audio);this.g=new bH(this.l,b.video);pI(this,this.o);pI(this,this.g);this.g.l.U=this.o.l;this.P("videoformatchange",b);this.aa=this.g.C;this.l.F&&BG.g()&&this.ye("streaming","1",!0);this.B=a;c?(WH(this,!1),g.zq(this.sa)):(a=0==this.B,sI(this,this.g,this.g.Ea,a),sI(this,this.o,this.o.Ea,a),this.seek(this.B),this.tc("gv"))};
g.h.resume=function(){if(this.T||this.ba)this.ya=this.ba=this.T=!1};
g.h.BH=function(a){if(this.l.Ck&&2<=a.state&&!(5<=a.state)&&a.F&&!fz(a.info.g,this.l,this.X)){var b=this.X;var c=Sy(ez(a.info.g));b=Py(b,c);b.g||b.l||b.o||iI(this,a,!0)}if(!this.ga()&&3<=a.state){c=a.info.va[0].g;b=!this.ua&&c.info.video;c=!this.ha&&c.info.audio;5==a.state?b?this.tc("vrr"):c&&this.tc("arr"):6==a.state?b?(this.ua=a.xb(),Gu(4)):c&&(this.ha=a.xb()):4==a.state&&b&&Gu(4);if(5<=a.state){if(this.l.da){b=iG(a.timing);c=a.timing;b={rn:a.O.toString(),rt:b.rt,pt:b.pt,stall:b.stall,elt:b.elbowTime,
elb:b.elbowBytes,rqd:c.F?c.F.join(""):""};c=b.rqd;delete b.rqd;if(c)for(var d=0;256*d<c.length;d++)this.ye("rqd",dC({rn:b.rn,ix:String(d),d:c.substring(256*d,256*(d+1))}));this.ye("rqs",dC(b))}a.X&&this.ye("sbwe3","1",!0)}if(5==a.state)a.start(Math.max(0,a.info.va[0].B-this.B));else if(5<=a.state&&5==a.info.va[0].type)6==a.state&&(b=(a.info.va[0].g.info.video?this.g:this.o).o[0]||null)&&b.F&&JG(b),a.dispose();else{if(this.l.ua&&a.I&&4<=a.state&&5!=a.state)if(b=a.g?a.g.Id("X-Response-Itag"):null){b=
nca(this.F,b);d=b.gi(a.info.range.length-b.Lm())[0];a.info=d;if(a.l){c=a.l;d=d.va;c.l=d;for(var e=0;e<c.g.length;e++)c.g[e].info=d[e],c.g[e].range.start=d[e].range.start,c.g[e].range.end=d[e].range.end,c.g[e].range.length=d[e].range.length}a.I=!1;c=this.g;c.Ea!=b&&(c.Ea=b);c=this.g;c.g&&(c.g.g=b)}else a.I=!1;if(6==a.state||this.l.F&&3<=a.state&&!(5<=a.state)){b=a.info.va[0].g;c=b.info.video?this.g:this.o;this.C.l&&(c.C=!1,a.L&&this.Sa.g(1,a.L));if(d=kz(a.info))d=a.info,d=!!Nx(d.va[d.va.length-1]);
d&&((0,g.F)(a.l.g,c.U,c),this.l.Le||this.P("metadata",b))}else if(7==a.state)if(c=a.info.va[0].g,HG(a)){if(d=(c.info.video&&1<c.A.g||410==a.C||500==a.C||503==a.C)&&!GH(this.F),e=DG(a),b=c.info.video?this.g:this.o,d&&(e.stun="1"),jI(this,!1,a.B,e),!this.ga()){d&&(d=this.F,c=c.info,GH(d),d.ha=c,d.V=g.yu(),d.T=-1,AH(d,d.F));for(c=0;c<b.o.length&&a!==b.o[c];c++);if(c==b.o.length)iH(b,a);else{for(;c<b.o.length;)iH(b,b.o.pop());3==a.info.va[0].type?(a.l&&a.l.A?(c=a.l.A,c=new Lx(c.type,c.g,c.range,c.na,
c.startTime+c.duration,0,c.l+c.La,0,!1)):(c=a.info.va[0],c=new Lx(c.type,c.g,c.range,c.na,c.startTime,0,c.l,0,!1)),b.g=c):b.g=null}this.Jd()}}else kz(a.info)?(c.C=!0,this.Jd()):jI(this,!0,"net.retryexhausted",DG(a));this.Jd();5<=a.state&&HG(a)&&fz(a.info.g,this.l,this.X)&&(b=this.X,c=Sy(a.info.g.o),b=Py(b,c),c=5E3*Math.pow(1.6,b.o),b.g||b.A+c>g.yu()||iI(this,a,!1))}}};
g.h.Jd=function(){$H(this);if(this.A&&Fy(this.A)&&!Hy(this.A)){var a=this.l.rf&&this.g.A&&this.g.A.C;this.C.isLive&&!a?(0,window.isNaN)(this.I)?(this.I=this.B+3600,this.A.o.duration=this.I):this.I<=this.B+1800&&(this.I=Math.max(this.I+1800,this.B+3600),this.A.o.duration=this.I):(a=Math.max(this.o.Ea.index.fi(),this.g.Ea.index.fi()),(!(0,window.isFinite)(this.I)||this.I!=a)&&0<a&&(this.I=this.A.o.duration=a))}if(!this.ga())if(lA(this.C)&&3==this.C.C)jI(this,!0,"manifest.net.retryexhausted",{rc:this.C.O.toString()});
else if(this.C.isLive&&(tH(this.g)||tH(this.o)))YH(this,!0),this.P("seekplayerrequired",window.Infinity);else if($H(this),eH(this.g),!this.ga()&&(eH(this.o),!this.ga())){this.C.l&&(uH(this.g),uH(this.o),Aca(this),(a=SG(this.g.l))&&a.l&&(this.V=SG(this.g.l).l.C,this.ye("strm","strm."+(this.V?"1":"0")+";sfmp4."+(this.l.B?"1":"0"),!0)));if(this.A){a=this.A.g;var b=this.A.l;if(!aI(this,this.o,a)&&!aI(this,this.g,b))if(Bca(this)){if(this.l.yd){if(!a.g){var c=SG(this.o.l);c&&lI(this,a,c)}b.g||(a=SG(this.g.l))&&
lI(this,b,a)}}else{if(this.L){c=!!this.L.g;var d=this.L;var e=this.o,f=XD(this.A.l.buffered);if(d.g)d=sca(d,e,f);else{if(f=SG(e.l)){var k=f.l;if(k&&k.C&&k.B&&(e=e.o.length?e.o[0]:null)&&3<=e.state&&7!=e.state&&LG(e)&&0==e.info.l&&(d.l.Rp||MH(d,k,f.info))){var l=d.l.Tp*rfa;d.g=e;d.I=f;d.F=k;d.H=f.info;d.A=l;d.B=(0,g.G)()/1E3}}d=window.NaN}f=!!this.L.g;c!=f&&this.ye("ssr",f?"start":"stop."+d);d&&this.P("seekplayerrequired",d,!0)}(c=nI(this,this.g,b,null))&&!this.Ja&&(this.Ja=(0,g.G)(),this.tc("vda"),
g.RC("vda",void 0,"video_to_ad"),this.Ca&&Gu(4));if(!Gy(this.A)){b=WD(b.buffered,this.B+fI);if(!(0,window.isNaN)(b)||gH(this.g)||!a.buffered.length){if(gH(this.g)||this.l.pj)b=window.NaN;a=nI(this,this.o,a,b);c=c||a;a&&!this.Ca&&(this.Ca=(0,g.G)(),this.tc("ada"),g.RC("ada",void 0,"video_to_ad"),this.Ja&&Gu(4))}gH(this.g)&&gH(this.o)&&Fy(this.A)&&!Hy(this.A)&&(a=this.A,Fy(a)&&a.o.endOfStream(),a=this.O,Lv(QA(a)),a.A=g.yu());c&&!Jy(this.A)&&g.zq(this.U)}}}VH(this);sI(this,this.g,this.g.Ea,!1);sI(this,
this.o,this.o.Ea,!1);this.g.Ea.C||this.o.Ea.C?jI(this,!0,"net.retryexhausted",{metadata:"1",video:this.g.Ea.C?"1":"0",audio:this.o.Ea.C?"1":"0"}):(cI(this,this.g,this.o)&&gI(this,this.g,this.o),cI(this,this.o,this.g)&&gI(this,this.o,this.g),this.l.rj&&this.ma&&!this.T&&RA(this.O)&&(a=this.ma,b=(0,g.A)(this.P,this,"error"),c=this.l.Kv?(0,g.A)(this.ye,this,"pathprobe"):null,(new KH(a,"cms",c,b)).send(),this.ma=""),this.C.o&&g.zq(this.sa),this.L&&(a=rca(this.L),(0,window.isNaN)(a)||g.zq(this.jb,a)),
g.zq(this.Ua))}};
g.h.al=function(a){var b=a?this.o:this.g;a=b&&b.A;var c=b&&b.T;b=void 0;a&&(b=Rx(a));if(c){b=b||{};a=Rx(c);for(var d in a)b["prev_"+d]=a[d]}jI(this,!0,"fmt.unplayable",b)};
g.h.yG=function(a){jI(this,!0,"fmt.unparseable",a)};
g.h.CG=function(a){jI(this,!1,"qoe.avsync",a)};
g.h.zG=function(a,b){this.C.l&&oI(this,b,a==this.g)};
g.h.AG=function(a,b){this.C.l&&qA(this.C,b.na,a==this.g)};
g.h.BG=function(a,b){this.C.l&&oI(this,b,a==this.g)};
g.h.xG=function(a,b){if(this.g.Ea.index.Qb()<=b){var c=this.C;c.L.push(a);c.P("cuepointsadded")}};
g.h.seek=function(a){if(this.ga())return Vf();if(this.g.C||this.o.C)return Uf();$H(this);this.Wa=g.yu();VH(this,a);var b=this.g.g,c=rI(this,this.g,a,this.A&&this.A.l),d=rI(this,this.o,c,this.A&&this.A.g);this.B=Math.max(a,c,d);this.K=!0;this.C.l&&this.l.Fb&&(c=this.g.g.na,uz(this.g.Ea.index,c)||b&&b.na==c||(this.aa=!0));g.zq(this.U);return Uf(a)};
g.h.R=function(){ZH(this);this.o&&(jH(this.o),jH(this.g));g.R.prototype.R.call(this)};
g.h.tc=function(a,b){this.kb[a]=b?window.performance.timing.navigationStart+b:g.yu()};
g.h.Bt=function(){return this.Sa.o()||0};
g.h.ye=function(a,b,c){this.P("ctmp",a,b,void 0===c?!1:c)};
var fI=2/24;g.r(yI,g.I);g.h=yI.prototype;g.h.TC=function(a){this.C.call(this.o,new window.Uint8Array(a.message))};
g.h.UC=function(){this.I.call(this.o,this.g.keyStatuses)};
g.h.Qo=function(a,b){g.Q(b);var c=a;b instanceof window.DOMException&&(c+=";n."+b.name+";m."+b.message);this.B.call(this.o,c)};
g.h.bv=function(a){this.C.call(this.o,a.message)};
g.h.av=function(a){if(this.l){var b=this.l.error.code;a=this.l.error.systemCode}else b=a.errorCode&&a.errorCode.code,a=a.systemCode;this.B.call(this.o,"t.prefixedKeyError;c."+b+";sc."+a)};
g.h.Zu=function(){this.H.call(this.o)};
g.h.update=function(a){if(this.g)return this.g.update(a).then(null,Vr((0,g.A)(this.Qo,this,"t.update")));this.l?this.l.update(a):this.A.addKey?this.A.addKey(this.K.g,a,this.F,this.sessionId):this.A.webkitAddKey(this.K.g,a,this.F,this.sessionId);return Xs()};
g.h.R=function(){this.g&&this.g.close();this.A=null;g.I.prototype.R.call(this)};g.r(AI,g.I);g.h=AI.prototype;g.h.createSession=function(a,b){var c=a.initData;if(this.g.l){var d=this.B.createSession();"com.youtube.fairplay"==this.g.g&&(c=CI(this,c));var e=new yI(null,null,null,d,null),f=a.contentType||"";if(0<b){var k=new g.P(function(){d.generateRequest(f,c).then(null,Vr((0,g.A)(e.Qo,e,"t.generateRequest")))},b,this);
g.J(this,k);k.start()}else d.generateRequest(f,c).then(null,Vr((0,g.A)(e.Qo,e,"t.generateRequest")));return e}if(vA(this.g))return Jca(this,c);if(zA(this.g))return Ica(this,c);this.l.generateKeyRequest?this.l.generateKeyRequest(this.g.g,c):this.l.webkitGenerateKeyRequest(this.g.g,c);return this.A=new yI(this.l,this.g,c,null,null)};
g.h.XC=function(a){var b=DI(this,a);b&&b.bv(a)};
g.h.WC=function(a){var b=DI(this,a);b&&b.av(a)};
g.h.VC=function(a){var b=DI(this,a);b&&b.Zu(a)};
g.h.R=function(){this.l=null;g.I.prototype.R.call(this)};g.r(FI,g.I);g.h=FI.prototype;g.h.Et=function(a){this.L=a};
g.h.RC=function(a){if(!this.ga()){this.I||(g.RC("drm_gk_f"),this.I=!0,this.oc.P("newsession",this));wA(this.l)&&(a=HI(a));if("fairplay"==this.l.flavor){var b=g.he(a);a=new window.Uint8Array(new window.ArrayBuffer(b.length));for(var c=0;c<b.length;c++)a[c]=b.charCodeAt(c)}a=new wI(a,++this.O);this.hw(a)}};
g.h.PC=function(){this.ga()||this.F||(this.oc.P("sessionready"),this.F=!0)};
g.h.SC=function(a){var b=this;this.ga()||(a.forEach(function(a,d){var c=wA(b.l)?d:a,f=new window.Uint8Array(wA(b.l)?a:d);wA(b.l)&&LI(f);var k=QG(f);LI(f);f=QG(f);b.g[k]?b.g[k].status=c:b.g[f]?b.g[f].status=c:b.g[k]={type:"",status:c}}),Ur("Key statuses changed: "+MI(this,",")),this.oc.P("keystatuseschange",this))};
g.h.hw=function(a){g.RC("drm_net_s");a={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,fb:(0,g.A)(this.kG,this,a),onError:(0,g.A)(this.Su,this,a)};var b=this.U;this.L&&(b=ah(b,"access_token",this.L));(0,window.isNaN)(this.B)||(b=ah(b,"cpi",this.B));g.qs(b,a)};
g.h.kG=function(a,b){if(!this.ga())if(0!=b.status&&b.response){g.RC("drm_net_r");var c=new window.Uint8Array(b.response);if(c=xI(c))if(0!=c.statusCode)GI(this,"drm.auth",!0,"t.f;c."+c.statusCode,g.QD(c.statusCode));else{g.RC("drm_kr_s");var d=null,e=c.headers["Heartbeat-Url"];e&&(d=new Fca(e,(0,window.parseInt)(c.headers["Heartbeat-Interval-Secs"],10)||60,(0,window.parseInt)(c.headers["Heartbeat-Num-Retries"],10)||4));d&&this.oc.P("newlicense",d);if(d=c.headers["Authorized-Format-Types"])this.A=d.split(","),
II(this)||(yA(this.l)?(d=JI(this.A),480<g.hv[d]&&this.oc.P("hdentitled",this)):this.oc.P("keystatuseschange",this));c.headers["Key-Ids"]&&(this.g=Mca(c.headers["Key-Ids"]));zA(this.l)&&(c.message=new window.Uint8Array(je(String.fromCharCode.apply(null,c.message))));this.o.update(c.message).then(function(){g.RC("drm_kr_f")});
this.F&&(this.K=g.yu())}else GI(this,"drm.net",!0,"t.p","YTP_ERROR_SERVER_ERROR")}else this.Su(a,b)};
g.h.QC=function(a){this.ga()||GI(this,"drm.keyerror",!0,a)};
g.h.Su=function(a,b){var c=!1;if(3<=a.g.l||this.T&&36E4<g.yu()-this.K){var d="drm.net.retryexhausted";c=!0}else d=b.status?"drm.net.badstatus":"drm.net.connect";GI(this,d,c,"t.r;c."+b.status);if(this.T&&this.F?0:!c&&this.O==a.number)d=a.g.getValue(),d=new g.P((0,g.A)(this.hw,this,a),d),g.J(this,d),d.start(),d=a.g,d.g=Math.min(2E4,2*d.g),d.o=Math.min(2E4,d.g+Math.round(.4*(Math.random()-.5)*d.g)),d.l++};
g.h.R=function(){this.oc=null;g.I.prototype.R.call(this)};
g.h.Re=function(){var a=this.A.join();if(II(this)){var b=[],c;for(c in this.g)"usable"!=this.g[c].status&&b.push(this.g[c].type);a+="/UKS:"+b}return a};NI.prototype.get=function(a){a=this.bi(a);return-1!=a?this.values[a]:null};
NI.prototype.remove=function(a){a=this.bi(a);-1!=a&&(this.keys.splice(a,1),this.values.splice(a,1))};
NI.prototype.set=function(a,b){var c=this.bi(a);-1!=c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};
NI.prototype.bi=function(a){return g.Pa(this.keys,function(b){return g.kb(a,b)})};g.r(PI,g.R);g.h=PI.prototype;g.h.RF=function(a){a=new zI(new window.Uint8Array(a.initData),a.initDataType);SI(this,a,!0)};
g.h.PG=function(a){SI(this,new zI(a.initData,a.contentType),!0)};
g.h.vG=function(){this.ga()||(this.H=!0,RI(this))};
g.h.dF=function(a){if(!this.ga()){g.Q(a);var b="t.a";a instanceof window.DOMException&&(b+=";n."+a.name+";m."+a.message);this.P("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}};
g.h.SG=function(a){this.ga()||!a||this.ba||(this.ba=a,this.P("heartbeatparams",a))};
g.h.TG=function(){this.ga()||(this.o.shift(),RI(this))};
g.h.OH=function(){if(vA(this.g)&&(this.X--,0==this.X)){var a=this.B;a.l.msSetMediaKeys(a.o)}};
g.h.YC=function(a){this.ga()||QI(this,KI(a,this.T))};
g.h.cG=function(){this.ga()||!this.U&&yA(this.g)&&this.P("hdproberequired")};
g.h.R=function(){this.g.l&&this.I.setMediaKeys(null);this.I=null;this.o=[];for(var a=g.q(this.l.values),b=a.next();!b.done;b=a.next())b.value.dispose();a=this.l;a.keys=[];a.values=[];this.A&&(this.A.dispose(),this.A=null);this.C=null;g.R.prototype.R.call(this)};
g.h.Re=function(){return 0>=this.l.values.length?"no session":this.l.values[0].Re()};TI.prototype.B=function(){var a=g.z("yt.abuse.botguardInitialized");return a&&a()?(a=g.z("yt.abuse.invokeBotguard")())?"r1a="+a:null:null};
TI.prototype.C=function(a){return"r3a="+Math.floor(this.g.lengthSeconds%Mb(a.c3a))};
TI.prototype.A=function(a){a=Mb(a.c);var b=g.z("yt.abuse.dclkstatus.checkDclkStatus")();return"r6a="+(a^b)};g.r($I,g.R);$I.prototype.ed=function(a){return this.l&&this.o?this.o.pa?this.o&&this.o.Ha&&this.o.Ha.g&&this.O?a?this.o.ed():VF(this.O):aE(this.l)||0:this.o.ed():0};
$I.prototype.ub=function(){return this.o?this.o.ub():0};
$I.prototype.U=function(){var a=aJ(this)+.1;this.C=Uf(a);dJ(this,a,!0)};var rJ={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},sJ={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},tJ=/^(\d*)_((\d*)_?(\d*))$/;g.r(fJ,$D);g.h=fJ.prototype;g.h.ia=function(){return this.g};
g.h.gd=function(){return this.g.src};
g.h.kc=function(){try{return 0<=this.g.playbackRate?this.g.playbackRate:1}catch(a){return 1}};
g.h.ze=function(a){this.kc()!=a&&(this.g.playbackRate=a);return a};
g.h.bo=function(a,b){return this.g.canPlayType(a,b)};
g.h.xa=function(){return this.g.currentTime};
g.h.Bc=function(){return this.g.duration};
g.h.load=function(){var a=this.g.playbackRate;this.g.load&&this.g.load();this.g.playbackRate=a};
g.h.pause=function(){this.g.pause()};
g.h.play=function(){var a=this.g.play();return a&&a.then?a:null};
g.h.Ci=function(){return!!this.g.webkitCurrentPlaybackTargetIsWireless};
g.h.Nb=function(){return this.g.volume};
g.h.setVolume=function(a){uy();this.g.volume=a};
g.h.NB=function(a){this.dispatchEvent(new lE(this,a.type,a))};
g.h.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.h.removeAttribute=function(a){this.g.removeAttribute(a)};
g.h.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.h.R=function(){for(var a in this.A)this.g.removeEventListener(a,this.A[a]);$D.prototype.R.call(this)};g.r(gJ,g.I);gJ.prototype.start=function(){this.l.start()};
gJ.prototype.stop=function(){this.l.stop()};
gJ.prototype.clear=function(){for(var a in this.g)this.g[a].clear()};
gJ.prototype.A=function(){for(var a in this.o)this.g[a].update(this.o[a]());this.l.start()};
hJ.prototype.update=function(a){this.o?(this.g.add(a-this.l||0),this.l=a):this.g.add(a)};
hJ.prototype.clear=function(){this.g.clear();this.l=0};g.r(mJ,g.R);g.h=mJ.prototype;g.h.R=function(){g.bs(this.aa);window.clearInterval(this.Ab);g.bs(this.qc);var a=Qw();a&&window.document.removeEventListener(a,this.mf,!1);pJ(this);qJ(this);this.F&&(this.F.dispose(),this.F=null);nJ(this);MJ(this);g.Me(this.ya,this.g);this.ba=null;this.Wa=!1;g.R.prototype.R.call(this)};
g.h.Iq=function(){if(this.g.Tb())g.V(this.o,128)||(this.g.Tb(),g.T(this.A.experiments,"html5_probe_media_capabilities")||(this.ua.g=!0),this.Cc=!0,4!=this.jb&&(this.X=g.Za(this.g.ud)),g.vD(this.g,this.A,this.Ja).then(this.qr,this.qr,this),this.ec("loudness",""+this.g.relativeLoudness.toFixed(3),!0));else{var a=this.g;if(a.pa&&a.adaptiveFormats&&!a.Yr&&(g.GD(a)||g.T(this.A.experiments,"html5_manifestless_always_redux"))){a=this.g;var b=this.A.experiments;if(!rD(a)){a.Yr=!0;var c=Zz(wD(a,a.adaptiveFormats),
a.bc,a.lengthSeconds,!0,b);!g.T(b,"html5_manifestless_vp9")&&eba(c)||!g.T(b,"html5_manifestless_captions")&&a.ln?c.dispose():(a.hh=!1,uD(a,c),c.subscribe("cuepointsadded",a.Gq,a),Uz(a.la)&&(a.Eg=!0));tD(a)}}else if(this.g.hh){a=this.g;b=this.A.experiments;a.xe=!0;a.hh=!1;bw(a.bd)||g.Q(Error("DASH MPD Origin invalid: "+a.bd),"WARNING");c=a.bd;var d=g.yv(b,"dash_manifest_version")||4;c=g.Ug(c,{mpd_version:d});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(c=g.Ug(c,{pacing:0}));iA(new Tz(c,b,a.pa),
c).then(a.GF,a.FF,a);g.RC("mrs")}else if(this.g.Eg)this.C&&(a=this.C.l,WE(a,"protected"),a.g.videoData.ue?a.ma():a.g.videoData.subscribe("dataloaded",a.ma,a)),a=this.g,c=this.A.X,b=this.A.experiments,a.fairPlayCert||a.la&&Uz(a.la),c=a.la?ZA(c,a.la):{},b=new CA(c,b,a.rw),g.J(a,b),a.Eg=!1,a.xe=!0,a=(0,g.A)(a.BA,a),b.B=a,BA(b.o)?EA(b):haa(b);else if(!this.g.xe&&this.Cc){b=this.A;a=this.g;d=this.kb.Fa();var e=this.pf();38==a.Fe&&"books"==b.playerStyle?(b=a.videoId.indexOf(":"),a=g.Ug("//play.google.com/books/volumes/"+
a.videoId.slice(0,b)+"/content/media",{aid:a.videoId.slice(b+1),sig:a.IE})):30==a.Fe&&"docs"==b.playerStyle?a=g.Ug("https://docs.google.com/get_video_info",{docid:a.videoId,authuser:a.uc,authkey:a.authKey,eurl:b.Sa}):33==a.Fe&&"google-live"==b.playerStyle?a=g.Ug("//google-liveplayer.appspot.com/get_video_info",{key:a.videoId}):(c={html5:"1",video_id:a.videoId,cpn:a.clientPlaybackNonce,eurl:b.Sa,ps:b.playerStyle,el:KD(a,b),hl:b.Yb,list:a.playlistId,agcid:a.Ty,aqi:a.adQueryId,sts:17570,lact:g.Lu()},
g.Ia(c,b.A),b.Je&&(c.ecver=b.Je),b.forcedExperiments&&(c.forced_experiments=b.forcedExperiments),a.Ge?(c.vvt=a.Ge,a.mdxEnvironment&&(c.mdx_environment=a.mdxEnvironment)):(a.oauthToken||b.sa)&&(c.access_token=a.oauthToken||b.sa),a.revocableUnlistedToken&&(c.ut=a.revocableUnlistedToken),a.adFormat&&(c.adformat=a.adFormat),b.yf&&(c.cc_lang_pref=b.yf),b.zf&&2!=b.zf&&(c.cc_load_policy=b.zf),b.mute&&(c.mute=b.mute),a.wf&&2!=b.wf&&(c.iv_load_policy=a.wf),a.ph&&(c.itct=a.ph),ND(a,b)&&(c.autoplay="1"),a.yk&&
(c.autonav="1"),a.zn&&(c.noiba="1"),a.isMdxPlayback&&(c.mdx="1",c.ytr=a.gf),a.mdxControlMode&&(c.mdx_control_mode=a.mdxControlMode),a.Qq&&(c.ytrcc=a.Qq),a.Dn&&(c.utpsa="1"),a.isFling&&(c.is_fling="1"),a.yn&&(c.mute="1"),a.vnd&&(c.vnd=a.vnd),a.Fm&&(c.force_ad_param_ad_type="video_ad",c.force_ad_param_url=a.Fm,c.force_ad_param_break_type="1",c.force_ad_param_offset_value=0),d.width&&(c.width=d.width),d.height&&(c.height=d.height),a.Lf&&(c.splay="1"),a.ypcPreview&&(c.ypc_preview="1"),LD(a,b)&&(c.content_v=
LD(a,b)),a.ti&&(c.livemonitor=1),b.uc&&(c.authuser=b.uc),b.pageId&&(c.pageid=b.pageId),b.bb&&(c.ei=b.bb),b.l&&(c.iframe="1"),a.gg&&(c.tst=a.gg),a.contentCheckOk&&(c.cco="1"),a.racyCheckOk&&(c.rco="1"),b.Za&&a.liveStartWalltime&&(c.live_start_walltime=a.liveStartWalltime),b.Za&&a.Hn&&(c.live_manifest_duration=a.Hn),b.Za&&a.playerParams&&(c.player_params=a.playerParams),b.Za&&a.cycToken&&(c.cyc=a.cycToken),b.Za&&a.Hw&&(c.tkn=a.Hw),0!=e&&(c.vis=e),b.enableSafetyMode&&(c.enable_safety_mode="1"),a.Ek&&
(c.kids_age_up_mode=a.Ek),b.widgetReferrer&&(c.widget_referrer=b.widgetReferrer.substring(0,128)),(d=b.Cc.embedding_app)&&(c.embedding_app=d),(d=g.sD(a))&&(c.uloc=d),a.si&&(c.internalipoverride=a.si),a.innertubez&&(c.innertubez=a.innertubez),b.Za&&a.ug&&(c.wpid=a.ug),b.Ie&&(c.embed_config=b.Ie),b.fk&&(c.co_rel="1"),a=g.Ug(b.baseYtUrl+"get_video_info",c));b=2;this.g.isAd()&&(b=0);c=this.g;d=this.A.qc;e=this.A.experiments;var f=this.A.Sb;c.ga()||(c.Rm=a,c.jp=b,c.Eh=!!d,c.os=!!f,e&&(c.Qv=!g.T(e,"disable_gvi_cors"),
c.Qm=g.yv(e,"html5_get_video_info_timeout_ms")||0,c.Hr=g.T(e,"html5_get_video_info_promiseajax")),c.xe=!0,c.dw())}}};
g.h.qr=function(){if(qD(this.g)){this.g.pa&&(this.U=new yba,cda(this),0<this.g.tn&&!this.g.Lb()||EJ(this,XJ(this),!0));this.g.Ha.g&&g.YJ(this);WJ(this,"i");if(this.U)if(this.g.Lb()){var a=(0,g.A)(this.B.Bt,this.B);this.U.l=a}else this.g.la&&(a=(0,g.A)(this.g.la.LC,this.g.la),this.U.l=a);g.T(this.A.experiments,"html5_new_seeking")&&dda(this)}this.Sa&&SJ(this);a=this.g;a.endSeconds&&a.endSeconds>a.startSeconds&&uJ(this,a.endSeconds);g.T(this.A.experiments,"html5_probe_media_capabilities")&&(this.ua.g=
!0);vJ(this,"dataloaded");this.T.l?BJ(this):this.Sa&&wJ(this,rE(rE(this.o,512),1));if(null!=this.g.Ha&&0<this.g.Ha.videoInfos.length&&null!=this.g.Ha.videoInfos[0].o){a=this.g.Ha.videoInfos[0];for(var b=null,c=g.q(this.g.Ha.videoInfos),d=c.next();!d.done;d=c.next())if(d=d.value,d.o){b=d;break}b&&this.ec("mediacapabilities","bestHeight."+a.video.height+";bestSmoothHeight."+b.video.height+";updateConstraint."+(b.video.height<a.video.height))}};
g.h.logEvent=function(a,b){if(this.C){var c=this.C,d={};d.rt=g.LE(c.g).toFixed(3);g.Ia(d,ME(c.g));var e=c.g.g,f=c.g.videoData,k={ns:e.Wa,html5:"1",el:KD(f,e),ps:e.playerStyle,fexp:e.experiments.experimentIds.join(",")||void 0,feature:f.fp||f.Yi||void 0,ctrl:f.Zf||void 0,ytr:f.gf||void 0,list:f.playlistId};ND(f,e)&&(k.autoplay="1");f.subscribed&&(k.subscribed=f.subscribed);g.Ia(d,k);delete d.fexp;g.Ia(d,a);d=g.hs(c.g.g.baseYtUrl+"player_204",d);eF(c,d,b)}};
g.h.isPeggedToLive=function(){return!!this.I&&this.I.isPeggedToLive()};
g.h.cB=function(){return this.o};
g.h.getPlayerType=function(){return this.jb};
g.h.Tv=function(){PJ(this);wJ(this,rE(this.o,16));SJ(this);pE(this.o)&&TJ(this)};
g.h.getAvailableAudioTracks=function(){return g.T(this.A.experiments,"html5_hls_select_audio_killswitch")?this.g.Ha?this.g.Ha.getAvailableAudioTracks():[]:this.g.getAvailableAudioTracks()};
g.h.getAudioTrack=function(){if(g.T(this.A.experiments,"html5_hls_select_audio_killswitch")){var a=this.g,b=a.Jb;if(!b)return a.qg;var c=g.Na(this.getAvailableAudioTracks(),function(a){return a.id==b.id});
return c?c:a.qg}return this.g.getAudioTrack()};
g.h.tI=function(){g.yv(this.A.experiments,"html5_background_quality_cap")&&this.B&&WJ(this,"v");this.A.nj&&!this.g.backgroundable&&this.l&&!this.Ja&&(Pw()&&this.l.l?(this.ec("bgmobile","suspend"),g.LJ(this,!0)):SJ(this)&&this.ec("bgmobile","resume"))};
g.h.wG=function(a){if(this.Le)this.He=!0;else{var b=this.zi();!b&&this.g.Lb()&&(b=3600);a.o.duration=b;g.XH(this.B,a)}};
g.h.eG=function(a){if(this.H){var b=this.H;vA(b.g)&&(a=PG(a),0!=a.length&&SI(b,new zI(a),!1))}};
g.h.Xu=function(){xA&&this.da&&this.da.g&&this.H&&(Qca(this.H,this.da.g),this.da=null)};
g.h.pG=function(a){IJ(this,a.reason,a.video.info,a.audio.info);var b=g.CD(this.g);b&&b.I(a.video.index);this.U&&(this.U.g=a.audio.index)};
g.h.oG=function(a){HJ(this,a.reason,a.audio.info)};
g.h.uh=function(a){fda(this,a);var b=/^pp/.test(this.g.clientPlaybackNonce);if(eda(a))g.V(this.o,4)?(this.Je=!0,qJ(this)):QJ(this);else if(dK(a)&&this.g.Ha.l){if(this.C)this.C.onError(a.errorCode,dC(a.details));this.ec("highrepfallback","1",!0);iba(this.g);oJ(this);qJ(this);cK(this);TJ(this)}else a.g?(b=this.B?this.B.F.F:null,b=dK(a)&&b&&b.isLocked()?"YTP_ERROR_FORMAT_UNAVALIABLE":void 0,g.yJ(this,a.errorCode,b,dC(a.details))):this.C&&(this.C.onError(a.errorCode,dC(a.details)),b&&"manifest.net.connect"==
a.errorCode&&(a="https://www.youtube.com/generate_204?cpn="+this.g.clientPlaybackNonce+"&t="+g.yu(),(new KH(a,"manifest",(0,g.A)(function(a){this.ec("pathprobe",a)},this),(0,g.A)(function(a){this.onError(a.errorCode,dC(a.details))},this.C))).send()))};
g.h.mr=function(){if(g.T(this.A.experiments,"html5_new_seeking"))dJ(this.F,aJ(this.F),!0);else{if(!(0,window.isNaN)(this.V)&&this.l){var a=this.zi(),b=XJ(this);!this.g.pa&&this.V>=b?(this.V=a,this.P("endseeking",this),FJ(this,!0),lJ(this)):(this.B&&this.B.seek(this.V),(!this.g.pa||1<=this.l.g.readyState)&&this.l.wb(this.V),this.B&&!g.V(this.o,2)&&wJ(this,rE(this.o,16)))}bK(this)}};
g.h.Vb=function(){if(this.F&&!(0,window.isNaN)(aJ(this.F)))return aJ(this.F);if(!(0,window.isNaN)(this.V))return this.V;var a=0;this.l&&1<=this.l.g.readyState?a=this.l.xa():this.g&&(a=this.g.Oe||this.g.startSeconds||0);return a};
g.h.zi=function(){return this.g.lengthSeconds?this.g.lengthSeconds:XJ(this)?XJ(this):0};
g.h.wz=function(){var a=new jaa;if(this.B){var b=this.A.schedule;a.o=b.H;a.B=b.K;a.bandwidthEstimate=PA(b);a.g="d."+LA(b).toFixed(2)+";st."+(1E9*NA(b)).toFixed(2)+";bw."+b.g.o().toFixed(0)+";abw."+b.B.o().toFixed(0)+";v50."+IA(b.l,.5).toFixed(2)+";v92."+IA(b.l,.92).toFixed(2)+";v96."+IA(b.l,.96).toFixed(2)+";v98."+IA(b.l,.98).toFixed(2);b=this.B;if(b.A&&!Gy(b.A)&&(a.l=gH(b.g)?b.g.A.A:YD(b.A.l.buffered,b.B),a.A=gH(b.o)?b.o.A.A:YD(b.A.g.buffered,b.B),b.l.da)){var c=kH(b.g),d=kH(b.o),e=UD(b.A.l.buffered,
"_"),f=UD(b.A.g.buffered,"_");a.g=(a.g||"")+(";lvq."+c+";laq."+d+";lvb."+e+";lab."+f)}a.bandwidthEstimate=wH(b.H)}else this.l&&(a.l=gE(this.l));a.C=this.Ar();return a};
g.h.pI=function(){if(this.H){var a=this.H,b=this.g.oauthToken;a.O=b;a.P("oauthtoken",b)}vJ(this)};
g.h.oI=function(a){g.yJ(this,"auth",(0,window.unescape)(a.reason),a.errordetail||"sec."+a.errorcode)};
g.h.fB=function(a){var b=a.target.gd();if(this.l&&this.l.gd()&&this.l.gd()==b){var c=!1;switch(a.type){case "error":var d=!this.Pc,e=g.yv(this.A.experiments,"html5_error_reload_cooldown_ms");0<e&&(d=(0,window.isNaN)(this.bb)||(0,g.G)()-this.bb>e);if(d&&0<jE(this.l)){this.Pc=!0;this.bb=(0,g.G)();a=this.g;a=a.cf?+g.fs(a.cf.l().Of).expire<Date.now()/1E3+1800:!1;this.C&&(c={e:nba(this.l),msg:zE(this.l)},this.L&&(c.msopened=""+ +!!this.L.g),a&&(c.stale="1"),this.C.onError("qoe.restart",dC(c)));if(a){QJ(this);
return}if(Bs("philips"))try{window.close()}catch(f){}pK(this);return}if(g.T(this.A.experiments,"html5_defer_background_errors")&&Pw()&&4==jE(this.l)){g.LJ(this);lK(this,"unplayable");return}break;case "durationchange":d=this.l.Bc();(!this.L||(0,window.isFinite)(d)&&0<d)&&1!=d&&this.g.lengthSeconds!=d&&(this.g.lengthSeconds=d,vJ(this));break;case "ratechange":this.B&&(this.B.H.o=Math.max(1,this.l.kc()));d=this.K;d.B=!0;d.o();break;case "loadedmetadata":this.g.startSeconds&&(0<(this.l.g.seekable||TD()).length?
g.T(this.A.experiments,"html5_new_seeking")?EJ(this,this.g.startSeconds,!0):this.l.g.currentTime=this.g.startSeconds:(this.ma=this.g.startSeconds,FJ(this,!0))),this.P("onLoadedMetadata");case "loadstart":window.clearInterval(this.Ab);this.wm()||(this.Ab=g.as((0,g.A)(this.wm,this),100));break;case "progress":this.ma&&this.l&&(d=this.l.g.seekable||TD(),d.length&&d.end(0)>this.ma&&(g.T(this.A.experiments,"html5_new_seeking")?EJ(this,this.ma,!0):this.l.g.currentTime=this.ma,this.ma=window.NaN,this.Nc=
this.Ca.M(this.l,"canplay",this.HF,this)));case "suspend":fK(this);this.P("onLoadProgress",this,gda(this));g.V(this.o,8)&&(this.Yg?c=!0:this.Zg&&((0,window.isNaN)(this.od)||this.od+1<this.l.xa())&&(c=!0,this.od=this.l.xa()));break;case "seeked":kK(this);break;case "seeking":g.T(this.A.experiments,"html5_new_seeking")||(d=this.Vb(),this.B&&this.B.seek(d),e=this.Oa,e.g=d,e.l=!0);break;case "playing":this.O.g("plev");g.RC("plev",void 0,"video_to_ad");this.Ie&&(this.Ie=!1,RJ(this)||EJ(this,window.Infinity,
!0));g.bs(this.qc);this.qc=window.NaN;break;case "timeupdate":d=this.l&&!this.l.xa();e=this.l&&0==this.l.g.readyState;if(d&&(!this.Ua||e))return;this.Ua=this.Ua||!!this.l.xa();this.wm();kK(this);fK(this);if(!this.l||this.l.gd()!=b)return;this.P("onVideoProgress",this,this.l.xa());break;case "waiting":if(0<(this.l.g.played||TD()).length&&0==fE(this.l).length&&0<this.l.xa()&&5>this.l.xa()&&this.B)return;break;case "resize":this.g.Da&&"auto"==this.g.Da.video.quality&&this.P("internalvideoformatchange",
this.g,!1);break;case "pause":if(g.T(this.A.experiments,"safari_show_cued")&&this.lf&&g.V(this.o,8)&&!g.V(this.o,1024)&&0==this.Vb()&&g.ul){lK(this,"safari_autoplay_disabled");return}}this.l&&this.l.gd()==b&&(this.P("videoelementevent",a),b=pba(this.o,a,this.Oa,this.A.experiments),!g.V(this.o,1)&&g.V(b,1)&&qK(this,"evt_"+a.type),wJ(this,b),c&&this.l.play())}};
g.h.UE=function(a){a="available"==a.g.availability;a!=this.Qc&&(this.Qc=a,this.P("airplayavailabilitychange"))};
g.h.VE=function(){var a=this.l.Ci();a!=this.Ja&&(this.Ja=a)&&(g.vD(this.g,this.A,this.Ja),WJ(this,"m"));this.P("airplayactivechange")};
g.h.wm=function(){var a=this.l;a&&this.Ua&&!this.g.Ud&&!dD("vfp","")&&2<=a.g.readyState&&!a.g.ended&&0<XD(fE(a))&&this.O.g("vfp");if((a=this.l)&&!this.g.Ud&&0<a.Bc()){!dD("pbp","")&&a.g.paused&&2<=a.g.readyState&&0<XD(fE(a))&&this.O.g("pbp");var b=g.T(this.A.experiments,"html5_use_start_seconds_for_pbs")?this.g.startSeconds:0;if(a.xa()>b){window.clearInterval(this.Ab);g.bs(this.aa);this.aa=window.NaN;this.g.Ud=!0;this.A.Ud=!0;jK(this);g.T(this.A.experiments,"html5_ignore_playing_evt")&&g.V(this.o,
8)&&wJ(this,sE(this.o,65));if(this.C){a=this.C;if(!a.B){g.T(a.g.g.experiments,"disable_embedpage_playback_logging")||16623!=a.g.videoData.rootVeType||Wr(Error("Playback for EmbedPage"));b=bF(a,"playback");a.K=[10+a.g.videoData.oh,10,10,40+a.g.videoData.xi-a.g.videoData.oh,40];var c=a.o;window.clearInterval(c.F);c.F=window.NaN;c.F=g.as((0,g.A)(c.update,c),100);c.C=g.LE(c.l);c.A=FE(c.l);b.l=aF(a,!0);b.Ma=!0;b.send();a.g.videoData.kl&&(b=a.g.g,c=a.g.videoData,c={html5:"1",video_id:c.videoId,cpn:c.clientPlaybackNonce,
plid:c.playbackId,ei:c.eventId,ptk:c.kl,oid:c.wv,ptchn:c.vv,pltype:c.xv,content_v:LD(c,b)},b=g.Ug(b.baseYtUrl+"ptracking",c),eF(a,b));a.g.videoData.enableCardio&&(a.H("playback"),a.A||hF(a));a.g.videoData.he||gF(a);a.B=!0;a=a.o;a.g=a.l.l();a.C=g.LE(a.l);!(0==a.o&&5>a.g)&&2<a.g-a.o&&(a.o=a.g)}g.$r((0,g.A)(this.mp,this),4500)}this.P("playbackstarted");g.Eu()&&((a=g.z("yt.scheduler.instance.clearPriorityThreshold"))?a():Gu(0));return!0}}return!1};
g.h.HF=function(){this.Nc&&(this.Ca.Qa(this.Nc),delete this.Nc,this.Vi())};
g.h.Tz=function(){if(this.l){var a=g.T(this.A.experiments,"html5_ignore_playing_evt");if(!a||!g.V(this.o,128)){var b=this.Vb();a&&g.V(this.o,8)&&RD(this.Oa,b)?wJ(this,sE(this.o,1)):g.V(this.o,8)&&SD(this.Oa,b,g.yu(),gE(this.l))?(a=this.zi(),!this.g.pa&&a&&1.1>Math.abs(a-b)?this.l.g.loop?EJ(this,0,!0):lJ(this):(g.xE(this.o)||qK(this,"progress_fix"),wJ(this,rE(this.o,1)))):g.V(this.o,4)&&g.xE(this.o)&&5<gE(this.l)&&wJ(this,sE(this.o,1));fK(this)}}};
g.h.sz=function(){return this.B?wH(this.B.H):PA(this.A.schedule)};
g.h.ur=function(){return this.l?gE(this.l):0};
g.h.vz=function(){return this.A.schedule.H};
g.h.Ar=function(){if(!(this.g.pa&&this.g.la&&this.B&&RJ(this)&&g.vE(this.o)))return window.NaN;var a=this.g.Lb()?this.B.Bt():this.g.la.H;return(0,g.G)()/1E3-gK(this)-a};
g.h.bJ=function(){var a;if(a=g.V(this.o,1)&&this.B){a=this.B;var b=this.Vb();a=!(!a.A||Gy(a.A)||Hy(a.A)||uI(b,a.g,a.A.l)&&uI(b,a.o,a.A.g))}a&&(a=tI(this.B),this.ec("reseek",dC({cur:a.lct,vb:a.lvb,ab:a.lab})),EJ(this,this.Vb(),!0))};
g.h.Hz=function(){this.g.pa||this.P("connectionissue")};
g.h.fJ=function(){g.T(this.A.experiments,"html5_new_seeking")||this.l.wb(this.l.xa()+.1)};
g.h.Vi=function(){var a=this,b=this.l.Vc();b&&b.then(void 0,function(){g.V(a.o,4)||(lK(a,"promise"),a.lf=!0)})};
g.h.RG=function(a){var b={};g.Ia(b,this.A.A);b.cpn=this.g.clientPlaybackNonce;this.g.Ge&&(b.vvt=this.g.Ge,this.g.mdxEnvironment&&(b.mdx_environment=this.g.mdxEnvironment));this.A.uc&&(b.authuser=this.A.uc);this.A.pageId&&(b.pageid=this.A.pageId);g.kc(a.C,b);EI(a,a.U)};
g.h.hG=function(a,b,c,d){d=void 0===d?"YTP_ERROR_LICENSE":d;c=c.substr(0,256);"drm.keyerror"==a&&1<this.H.l.keys.length&&96>this.nf&&(a="drm.sessionlimitexhausted",b=!1);if(b)g.yJ(this,a,d,c);else if(this.C)this.C.onError(a,c);"drm.sessionlimitexhausted"==a&&(this.nf++,pK(this))};
g.h.jG=function(){var a=this,b=g.yv(this.A.experiments,"html5_license_constraint_delay"),c=Ls();b&&c?(b=new g.P(function(){WJ(a,"l");vJ(a)},b),g.J(this,b),b.start()):(WJ(this,"l"),vJ(this))};
g.h.iG=function(){var a=this;xA&&(this.da=caa(this.g.la))&&(this.da.g?g.Jf(function(){a.Xu()}):Dca(this.B,this.da))};
g.h.dB=function(a){this.P("heartbeatparams",a)};
g.h.eB=function(a){this.ec("keystatuses",Nca(a));var b=0;this.g.Da&&(b=this.g.Da.video.g);a:{for(var c in a.g)if("output-restricted"==a.g[c].status){a=!0;break a}a=!1}a&&480<b&&this.P("drmoutputrestricted")};
g.h.Tu=function(){if(!this.g.Ud&&this.l&&!Pw()){var a="0";0<this.l.g.readyState&&5<=gE(this.l)&&this.g.Ha.g&&(wJ(this,rE(this.o,1)),qK(this,"load_soft_timeout"),this.P("playbackstalledatstart"),a="1");this.C&&(a={preroll:""+ +DJ(this),restartmsg:a},this.B&&g.Ia(a,tI(this.B)),this.l&&g.Ia(a,kE(this.l)),this.C.onError("qoe.start15s",dC(a)));0<this.jg&&this.tf<this.jg&&(this.tf++,pK(this));this.P("loadsofttimeout")}};
g.h.mp=function(){if(!this.Wa){var a=new TI(this.g);if("c1a"in a.l){var b=g.z("yt.abuse.botguardInitialized");b=!(b&&b())}else b=!1;if(b)g.$r((0,g.A)(this.mp,this),4500);else{if(a.g&&a.g.yj){b=[a.g.yj];for(var c in a.o)if(a.l[c]&&a.o[c]){var d=a.o[c](a.l);d&&b.push(d)}a=b.join("&")}else a=null;a&&this.C&&(c=this.C,c.O||(b=bF(c,"atr"),b.K=a,b.send(),c.O=!0),this.Wa=!0)}}};
g.h.ub=function(){return g.T(this.A.experiments,"html5_new_seeking")?this.F?this.F.ub():0:this.g.ub()};
g.h.Ts=function(){return this.Ma};
g.h.Pm=function(){if(this.l)a:{var a=this.l;var b={};if(a.g){if(a.g.getVideoPlaybackQuality){a=a.g.getVideoPlaybackQuality();break a}a.g.webkitDecodedFrameCount&&(b.totalVideoFrames=a.g.webkitDecodedFrameCount,b.droppedVideoFrames=a.g.webkitDroppedFrameCount)}a=b}else a={};return a};
g.h.ec=function(a,b,c){if(this.C){var d=this.C;d.ga()||RE(d.l,a,b,void 0===c?!1:c)}};g.r(rK,jF);g.h=rK.prototype;g.h.getPlayerType=function(){return this.playerType};
g.h.getRootNode=function(){return g.zK(this).element};
g.h.Be=function(){return this.app.C};
g.h.Y=function(a){return(a=g.X(this.app,a||this.playerType))&&a.g};
g.h.isWidescreen=function(){return this.app.isWidescreen()};
g.h.Vc=function(a){3==this.Ga()?g.xK(this.app.A).Ki("control_play"):rW(this.app,a)};
g.h.Ae=function(a){eK(g.X(this.app,a))};
g.h.addEventListener=function(a,b){this.app.aa.subscribe(a,b)};
g.h.removeEventListener=function(a,b){this.app.aa.unsubscribe(a,b)};
g.h.Hi=function(a){this.wt(a,a)};
g.h.Di=function(a){return SV(this.app,a)};
g.h.getVideoUrl=function(a,b,c,d){var e=this.Ga(),f=2==e;if(d&&f||3==e)f=!1,e=1;d=this.Y(e);if(!d)return"";var k;a||d.pa||(k=Math.floor(this.xa(e)));return this.app.g.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,k,b,c)};
g.h.Ji=function(a,b,c){var d=g.sK(this).A;d&&d.Un(a,b,c)};
g.h.Ac=function(){if(g.W(this).L)return!1;var a=g.X(this.app,1);if(!a)return!1;var b=a.g;return b.Uc()&&!g.GD(b)&&2!=this.Ga()&&(!DJ(a)||3==this.Ga())};
g.h.De=function(a,b){var c=this.app,d=g.X(c,this.playerType);d&&c.g.Ab.has(a.toString())?d.C?(c=bF(d.C,"engage"),c.C=a,c.send(b)):b&&b():b&&b()};
g.h.ze=function(a,b){OV(this.app,a,b)};
g.h.setVolume=function(a){a=g.$c(a,0,100);Gw(this.app,{volume:a,muted:this.isMuted()},!0)};
g.h.mute=function(){Gw(this.app,{muted:!0,volume:this.Nb()},!0)};
g.h.Ce=function(){Gw(this.app,{muted:!1,volume:Math.max(5,this.Nb())},!0)};
g.h.ii=function(){return g.X(this.app)};aL.prototype.fetch=function(a){var b=this,c=a.match(/\[(?:BISCOTTI_|AN)ID\]/g);if(!c)return cL(this,a);var d=c.includes("[BISCOTTI_ID]");c=c.includes("[ANID]");var e=1===this.l;e&&(d&&bL(this,"a_bid_s"),c&&bL(this,"a_mid_s"));var f=d?kda():"",k=c?mda():"";if(null!==f&&null!==k)return e&&(d&&bL(this,"a_bid_f"),c&&bL(this,"a_mid_f")),cL(this,a,f,k);f=d?lda():Uf("");k=c?nda():Uf("");e&&(d&&ag(f,function(){return bL(b,"a_bid_f")}),c&&ag(k,function(){return bL(b,"a_mid_f")}));
return g.Zf([f,k]).then(function(c){return cL(b,a,c[0],c[1])})};var sfa={wM:"replaceUrlMacros",BL:"isExternalShelfAllowedFor"};g.E(g.dL,g.R);g.h=g.dL.prototype;g.h.load=function(){this.loaded=!0};
g.h.unload=function(){this.loaded=!1};
g.h.sc=function(){return!0};
g.h.R=function(){this.loaded&&this.unload();g.dL.wa.R.call(this)};
g.h.Ax=function(){return{}};g.r(fL,g.mF);lL.prototype.showCompanion=function(a,b,c){return mL(this).then(function(){return qL(a,b,c)})};sL.prototype.showCompanion=function(a,b){b.contentVideoId||(b.contentVideoId=a);this.l.ka("updatekevlarcompanion",b)};tL.prototype.O=function(){return!1};g.r(wL,tL);wL.prototype.g=function(){return!0};
wL.prototype.isListed=function(){return this.I};
wL.prototype.isSkippable=function(){return null!=this.T};
wL.prototype.O=function(){return!0};g.r(yL,tL);yL.prototype.g=function(){return!1};g.r(zL,tL);zL.prototype.g=function(){return!1};g.r(AL,tL);AL.prototype.g=function(){return!0};g.r(CL,tL);CL.prototype.g=function(){return!1};g.r(DL,tL);JL.prototype.Gc=function(a,b){var c=this;a.forEach(function(a){return c.sg(a,b)})};
JL.prototype.sg=function(a,b){(a.loggingUrls||a.urlEndpoint&&a.urlEndpoint.url)&&LL(a,b);a.adLifecycleCommand&&vda(this,a.adLifecycleCommand)};g.r(NL,g.U);NL.prototype.Gc=function(a){a=void 0===a?null:a;null!=a&&ML(a,this.g)};
NL.prototype.sg=function(a){a=void 0===a?null:a;null!=a&&LL(a,this.g)};g.r(OL,NL);OL.prototype.A=function(a){g.Lt(a);this.Gc(this.l.onClickCommands);this.sg(this.l.clickthroughEndpoint)};g.r(PL,DL);PL.prototype.g=function(){return!1};
PL.prototype.B=function(){var a=new rL;a.imageCompanionAdRenderer=this.l;return a};
PL.prototype.A=function(){return this.C};
PL.prototype.o=function(a,b){return new OL(a,this.l,b)};g.r(QL,BL);g.r(RL,tL);RL.prototype.g=function(){return!0};g.r(TL,tL);TL.prototype.g=function(){return!1};g.r(VL,tL);VL.prototype.g=function(){return!0};g.r(ZL,tL);ZL.prototype.g=function(){return!0};g.r($L,tL);$L.prototype.g=function(){return!0};g.r(aM,tL);aM.prototype.g=function(){return!0};g.r(cM,BL);g.r(dM,tL);dM.prototype.g=function(){return!1};g.r(eM,NL);eM.prototype.A=function(){this.Gc(this.l.onClickCommands)};g.r(fM,DL);fM.prototype.g=function(){return!1};
fM.prototype.B=function(){var a=new rda;a.url=this.l.iframeUrl||null;a.width=this.l.iframeWidth||0;a.height=this.l.iframeHeight||0;var b=gM(this.l.impressionCommands||[]);a.impressionTrackingUrls=b;b=gM(this.l.onClickCommands||[]);a.clickTrackingUrls=b;b=new rL;b.iframeCompanionRenderer=a;return b};
fM.prototype.A=function(){return[new g.gd(300,60)]};
fM.prototype.o=function(a){return new eM(a,this.l)};hM.prototype.wc=function(){return this.B};var Dda=["FINAL","CPN","MIDROLL_POS","SDKV","SLOT_POS"];g.r(tM,g.R);tM.prototype.dispose=function(){this.g.clear();g.R.prototype.dispose.call(this)};
var uM=null;g.y("ytads.bulleit.getVideoMetadata",function(a){return(a=vM().g.get(a))?a.Tt():{}},void 0);
g.y("ytads.bulleit.triggerExternalActivityEvent",function(a,b,c){var d=vM();c=Eda(c);null!=c&&d.P(c,{queryId:a,viewabilityString:b})},void 0);g.r(AM,g.I);g.r(BM,g.I);g.r(JM,g.R);g.h=JM.prototype;g.h.Tt=function(){return{}};
g.h.Bn=function(){return!1};
g.h.St=function(){return this.g.Bc(2)};
g.h.an=function(){CM(this.l,"pause")};
g.h.rk=function(){if(!this.L){this.F||this.jc();var a=this.l;a.o.hasOwnProperty("pause")&&CM(a,"resume")}};
g.h.Jf=function(){var a=this.l;GM(a,0,!0);HM(a,0,0,!0);CM(a,"complete")};
g.h.Xd=function(){var a=this.l;!a.o.hasOwnProperty("impression")||a.o.hasOwnProperty("skip")||a.o.hasOwnProperty("complete")||IM(a,"abandon")};
g.h.Ue=function(){CM(this.l,"skip")};
g.h.jc=function(){var a=NM(this);this.l.g.AD_CPN=a;DM(this.l);this.F=!0};
g.h.Sc=function(a){var b=this.l;b.g=qM(b.g,oM(3,"There was an error playing the video ad. Error code: "+a));CM(b,"error")};
g.h.Dv=function(){this.P("b")};
g.h.Ev=function(){this.P("g")};
g.h.Fv=function(){this.P("h")};
g.h.Gv=function(){this.P("i")};
g.h.Hv=function(){this.P("j")};
g.h.Iv=function(){this.P("k")};
g.h.Jv=function(){this.P("o")};
g.h.dispose=function(){if(!this.ga()){MM(this);this.A.unsubscribe("b",this.Dv,this);this.A.unsubscribe("g",this.Ev,this);this.A.unsubscribe("h",this.Fv,this);this.A.unsubscribe("i",this.Gv,this);this.A.unsubscribe("j",this.Hv,this);this.A.unsubscribe("k",this.Iv,this);this.A.unsubscribe("o",this.Jv,this);for(var a=this.A,b=[],c=g.q(a.g),d=c.next();!d.done;d=c.next()){d=g.q(d.value);var e=d.next().value;d.next().value==this&&b.push(e)}b=g.q(b);for(c=b.next();!c.done;c=b.next())a.g["delete"](c.value);
g.R.prototype.dispose.call(this)}};g.r(OM,jL);g.r(QM,JM);QM.prototype.Xb=function(){var a=new OM(this.K.l,this.macros),b=this.g.Y(2);!b||b.xe?(this.o=this.B.bind(this,a),this.g.addEventListener("videodatachange",this.o)):b.profilePicture&&b.channelBanner&&(RM(b,a),LM(this,[a]))};
QM.prototype.B=function(a,b,c,d){c&&2==d&&(this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null),c.profilePicture&&c.channelBanner&&(RM(c,a),LM(this,[a])))};
QM.prototype.hd=function(){};
QM.prototype.R=function(){this.o&&(this.g.removeEventListener("videodatachange",this.o),this.o=null);JM.prototype.R.call(this)};g.r(SM,jL);g.r(TM,JM);g.h=TM.prototype;g.h.Xb=function(){0<this.o&&this.jc()};
g.h.jc=function(){this.za=new g.P(g.B(this.Rt,"e"),this.o,this);g.J(this,this.za);this.za.start();LM(this,[new SM(this.B.l,this.macros)]);JM.prototype.jc.call(this)};
g.h.Xd=function(){JM.prototype.Xd.call(this);this.Rt("a")};
g.h.Rt=function(a){this.za&&this.za.stop();"e"==a&&this.Jf();MM(this);this.P(a)};
g.h.hd=function(){};g.r(UM,jL);g.r(VM,JM);VM.prototype.Xb=function(){var a=new UM(this.K.l,this.macros);LM(this,[a])};
VM.prototype.hd=function(){};g.r(WM,JM);WM.prototype.Xb=function(){var a=NM(this);this.l.g.AD_CPN=a;DM(this.l)};
WM.prototype.hd=function(){};g.r(XM,jL);g.r(YM,JM);YM.prototype.Xb=function(){var a=new XM(this.o.l,this.macros);LM(this,[a])};
YM.prototype.hd=function(a){switch(a){case "invideo-overlay":this.g.Wb()}};g.r(ZM,jL);g.r($M,JM);g.h=$M.prototype;g.h.Xb=function(){this.jc()};
g.h.jc=function(){LM(this,[new ZM(this.o.l)]);JM.prototype.jc.call(this)};
g.h.Sc=function(a){JM.prototype.Sc.call(this,a);MM(this);this.P("f")};
g.h.Ue=function(){JM.prototype.Ue.call(this);MM(this);this.P("e")};
g.h.hd=function(a){switch(a){case "persisting-skip-button":this.Ue()}};g.r(aN,jL);g.r(bN,JM);bN.prototype.Xb=function(){var a=new aN(this.o.l,this.macros);LM(this,[a])};
bN.prototype.hd=function(){};g.r(cN,jL);g.r(dN,JM);dN.prototype.Xb=function(){var a=new cN(this.K.l,this.macros);LM(this,[a])};
dN.prototype.hd=function(){};g.r(eN,jL);g.r(fN,JM);g.h=fN.prototype;g.h.Bn=function(){return!0};
g.h.Xb=function(){this.F?this.o&&(this.o.g=!0,Hda(this,[this.o])):this.jc()};
g.h.jc=function(){this.o=new eN(this.B.A);this.o.g=this.B.o;LM(this,[this.o]);JM.prototype.jc.call(this)};
g.h.St=function(){return this.B.l};
g.h.Xd=function(){JM.prototype.Xd.call(this);MM(this);this.P("a")};
g.h.Ue=function(){JM.prototype.Ue.call(this);MM(this);this.P("e")};
g.h.Sc=function(a){JM.prototype.Sc.call(this,a);MM(this);this.P("f")};
g.h.hd=function(a){switch(a){case "skip-button":this.Ue();break;case "ad-feedback-dialog-close-button":case "ad-feedback-dialog-confirm-button":case "survey-submit":MM(this),this.P("e")}};g.r(gN,jL);g.r(hN,JM);g.h=hN.prototype;g.h.Xb=function(){this.jc()};
g.h.jc=function(){LM(this,[new gN(this.o.l,this.macros)]);JM.prototype.jc.call(this)};
g.h.Xd=function(){JM.prototype.Xd.call(this);MM(this);this.P("a")};
g.h.Sc=function(a){JM.prototype.Sc.call(this,a);MM(this);this.P("f")};
g.h.hd=function(){};g.r(iN,jL);g.r(jN,JM);g.h=jN.prototype;g.h.Xb=function(){0<this.o&&this.jc()};
g.h.jc=function(){this.za=new g.P(this.Jf,this.o,this);g.J(this,this.za);this.za.start();LM(this,[new iN(this.B.l)]);JM.prototype.jc.call(this)};
g.h.Jf=function(){JM.prototype.Jf.call(this);kN(this,"e")};
g.h.Xd=function(){JM.prototype.Xd.call(this);kN(this,"a")};
g.h.Sc=function(a){JM.prototype.Sc.call(this,a);kN(this,"f")};
g.h.hd=function(){};g.r(lN,jL);g.r(mN,jL);g.r(nN,jL);g.r(oN,jL);g.r(pN,jL);g.r(qN,jL);g.r(rN,jL);g.r(sN,JM);g.h=sN.prototype;g.h.Zy=function(a){if((a=JSON.parse(a.response))&&a.items&&a.items.length){a=a.items[0].snippet;if(a){var b=a.title;var c=g.Zb(a,"thumbnails","default","url")}LM(this,tN(this.o.V,b,c))}};
g.h.Tt=function(){var a=this.g.xa(2),b=this.o.o;var c=this.g;c=wM(c)&&1==c.Pf(2);return{currentTime:a,duration:b,isPlaying:c,isVpaid:!1,isYouTube:!0,volume:this.g.Nb()/100}};
g.h.Bn=function(){return!0};
g.h.Xb=function(){if(this.o.U){var a=this.l;a.g=qM(a.g,oM(0,"No playable media files can be selected"));CM(a,"error");xN(this,"f")}else{a=this.o.A.legacyInfoCardVastExtension;var b=this.o.F;a&&b&&g.W(this.g).K.add(b,{Kj:a});zM(this.g,!1);a=xL(this.o);this.B.start();this.g.Ii(a,!0,2)}};
g.h.an=function(){JM.prototype.an.call(this);this.P("l",2)};
g.h.rk=function(){JM.prototype.rk.call(this);this.P("m",1)};
g.h.jc=function(){JM.prototype.jc.call(this);this.B.stop();var a=this.H,b=this.g.Y(2);a.to=b?b.clientPlaybackNonce:null;g.T(g.W(this.g).experiments,"use_gvi_response_for_upg_ui")?(a=this.g.Y(2))&&a.videoId&&a.isListed&&a.videoId==this.o.F&&LM(this,tN(a.title,a.author,a.profilePicture)):this.o.isListed()&&this.o.C&&(a=g.Ug("https://www.googleapis.com/youtube/v3/channels",{id:this.o.C,part:"snippet",fields:"items/snippet/title,items/snippet/thumbnails/default/url",key:"AIzaSyA-dlBUjVQeuc4a6ZN4RkNUYDFddrVLxrA"}),
b={timeout:2E3,method:"GET"},b.fb=(0,g.A)(this.Zy,this),g.qs(a,b));a=[];a.push(Jda(this));b=this.o.H;if(null==b)b=null;else{var c={};b.urlEndpoint&&(c.url=b.urlEndpoint.url,c.target="TARGET_NEW_WINDOW");b=new rN({navigationEndpoint:{urlEndpoint:c}})}b&&a.push(b);b=1E3*this.o.o;b=0<b&&7050>=b;this.o.isSkippable()&&!b&&(b=wN(this),(b=b.skipOrPreviewRenderer&&b.skipOrPreviewRenderer.skipAdRenderer)||(b=uN(this)),a.push(new qN(b)));b=wN(this);a.push(new pN(b));LM(this,a);this.g.isMuted()&&(a=this.g.isMuted(),
CM(this.l,a?"mute":"unmute"));this.P("m",1)};
g.h.Jf=function(){JM.prototype.Jf.call(this);xN(this,"e")};
g.h.Xd=function(){JM.prototype.Xd.call(this);xN(this,"a")};
g.h.Ue=function(){JM.prototype.Ue.call(this);xN(this,"e")};
g.h.Sc=function(a){JM.prototype.Sc.call(this,a);xN(this,"f")};
g.h.Lz=function(){this.Sc("net.timeout")};
g.h.hd=function(a){var b=this.l;if(!g.T(g.W(b.l).experiments,"disable_vss2_engage_for_bulleit")&&wM(b.l))switch(a){case "ad-title":b.l.De(14);break;case "ad-channel-thumbnail":case "advertiser-name":b.l.De(15);break;case "visit-advertiser":b.l.De(3)}switch(a){case "ad-mute-confirm-dialog-confirm-button":case "ad-feedback-dialog-close-button":case "ad-feedback-dialog-confirm-button":xN(this,"e");break;case "ad-mute-confirm-dialog-close-button":case "ad-feedback-undo-mute-button":case "ad-info-dialog-close-button":this.C||
this.g.Vc();break;case "ad-info-icon-button":(this.C=2==this.g.Pf(2))||this.g.Wb();break;case "ad-channel-thumbnail":case "advertiser-name":a=g.W(this.g).protocol+"://"+SB(g.W(this.g))+"/channel/"+this.o.C;g.IL(a);break;case "ad-title":this.g.Wb();g.IL(this.g.getVideoUrl());break;case "visit-advertiser":this.g.Wb();g.FB(g.W(this.g))&&(a=this.o.H)&&(Gda(this.l,a.loggingUrls||null),a.urlEndpoint&&a.urlEndpoint.url&&g.IL(a.urlEndpoint.url));IM(this.l,"clickthrough");break;case "skip-button":this.Ue()}};g.r(CN,g.R);g.h=CN.prototype;g.h.wc=function(){return this.o.wc()};
g.h.Sk=function(){return kM(this.o)};
g.h.vo=function(){return jM(this.o)};
g.h.bn=function(a){gL(a)||(this.L&&(this.U=this.g.isPeggedToLive(),this.O=Math.ceil((0,g.G)()/1E3)),BN(a,this.F));WN(this.F,this);a=g.q(this.o.A);for(var b=a.next();!b.done;b=a.next())DN(b.value);this.H.l=!1;$C("video_to_ad",["apbs"]);this.yv()};
g.h.zk=function(){return this.C instanceof dM||this.C instanceof zL||this.C instanceof yL||this.C instanceof DL};
g.h.rs=function(){return!(this.C instanceof TL)&&!this.zk()};
g.h.yv=function(){this.C?this.Xb(this.C):this.Sd()};
g.h.Si=function(a){a=void 0===a?!1:a;this.Tk(0);this.Sd(a)};
g.h.Bu=function(){this.Si()};
g.h.KE=function(){this.l.forEach(function(a){CM(a.l,"active_view_measurable")})};
g.h.LE=function(){this.l.forEach(function(a){CM(a.l,"active_view_fully_viewable_audible_half_duration")})};
g.h.ME=function(){this.l.forEach(function(){})};
g.h.NE=function(){this.l.forEach(function(){})};
g.h.OE=function(){this.l.forEach(function(){})};
g.h.PE=function(){this.l.forEach(function(){})};
g.h.RE=function(){this.l.forEach(function(a){CM(a.l,"active_view_viewable")})};
g.h.xo=function(a){if(0!=this.l.length){var b=a.state;g.V(b,2)?(Kda(this.H),this.l.forEach(function(a){return a.Jf()})):g.vE(b)?(Lda(this.H),this.l.forEach(function(a){return a.rk()})):b.isError()?this.l.forEach(function(a){return a.Sc(b.g.errorCode)}):g.V(b,4)&&this.l.forEach(function(a){return a.an()})}};
g.h.Wt=function(){};
g.h.Ut=function(){KL(this.o)&&this.Sd()};
g.h.Tk=function(a){var b=this.F.g.app;1==a&&(b.I.g("vr"),b.ua||(b.ua=IC(b.Ju,b)),jK(b.F),lF(b.I,lW(b)));var c=b.g;(g.aC(c)&&c.Za||g.VB(c))&&b.l.ka("onAdStateChange",a)};
g.h.Vt=function(a){this.F.g.ka("onAdUxUpdate",a)};
g.h.wo=function(a){this.l.forEach(function(b){return b.hd(a)})};
g.h.Xb=function(a){a instanceof ZL&&(this.I=!0);this.qw()&&(g.Me(this.l),this.l.length=0);var b=yN(this.g,a,this.T,this.F);this.l.push(b);g.J(this,b);b.subscribe("a",g.B(this.Si,!0),this);b.subscribe("b",this.KE,this);b.subscribe("e",this.Si,this);b.subscribe("f",this.Bu,this);b.subscribe("g",this.LE,this);b.subscribe("h",this.ME,this);b.subscribe("i",this.NE,this);b.subscribe("j",this.OE,this);b.subscribe("k",this.PE,this);b.subscribe("l",this.Tk,this);b.subscribe("m",this.Tk,this);b.subscribe("onAdUxUpdate",
this.Vt,this);b.subscribe("o",this.RE,this);b.L?b.Sc("html5.unsupportedads"):b.Xb();a instanceof wL&&EN(this)};
g.h.qw=function(){return!0};
g.h.Sd=function(a){a=void 0===a?!1:a;g.Me(this.l);this.l.length=0;if(!a){a=g.q(this.o.o);for(var b=a.next();!b.done;b=a.next())DN(b.value)}this.L&&this.vo()&&this.C instanceof wL?UN(this.F,Nda(this)):UN(this.F)};g.r(HN,JM);g.h=HN.prototype;g.h.bn=function(a){var b=this;gL(a)||BN(a,this.O);if(this.o instanceof fM){a=this.g.Y(2);if(!a||a.xe||null==this.o.l||this.o.l.adVideoId!=a.videoId){this.B=function(a,d,e){d&&2==e&&null!=b.o.l&&b.o.l.adVideoId==d.videoId&&(b.B&&(b.g.removeEventListener("videodatachange",b.B),b.B=null),d.isListed&&b.Xb())};
this.g.addEventListener("videodatachange",this.B);return}if(!a.isListed)return}this.Xb()};
g.h.Xb=function(){var a=this;WN(this.O,this);if(xM(this.g)){var b=this.g.Y(1),c=this.o.B();null!=c&&(c.macros=Object.assign({},this.macros),this.U.showCompanion(b.videoId,c))}else{var d=this.o.A();sda(this.U).then(function(b){a:{if(d&&b){b=g.q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;for(var e=g.q(d),l=e.next();!l.done;l=e.next())if(l=l.value,l.width==c.width&&l.height==c.height){b=l;break a}}}b=null}b&&(c=a.o.o(a.g,b),null!=c&&(g.J(a,c),e=a.U,e.g&&e.g.showCompanion(c.element,b.width,b.height)))})}if(this.o instanceof
fM){this.C=this.lA.bind(this);
try{window.addEventListener("message",this.C)}catch(e){g.Q(e)}}};
g.h.lA=function(a){var b;if(b=a.data)a:{try{if(ls(a.source.document.location.origin)){b=!0;break a}}catch(d){g.Q(d)}b=!1}if(b)if(b=this.o.l,"companion-setup-complete"==a.data)try{a.source.postMessage(JSON.stringify(b),"*");var c=a.source.frameElement;c.parentNode.style.cssText="";c.width=String(b.iframeWidth);c.height=String(b.iframeHeight)}catch(d){g.Q(d)}else"pause-video"==a.data&&this.g.Wb()};
g.h.wc=function(){return this.H.wc()};
g.h.Sk=function(){return kM(this.H)};
g.h.vo=function(){return jM(this.H)};
g.h.zk=function(){return!0};
g.h.hd=function(){};
g.h.R=function(){if(this.C)try{window.removeEventListener("message",this.C),this.C=null}catch(a){g.Q(a)}this.B&&(this.g.removeEventListener("videodatachange",this.B),this.B=null);JM.prototype.R.call(this)};g.r(JN,g.R);g.h=JN.prototype;g.h.wc=function(){return this.g.wc()};
g.h.Sk=function(){return kM(this.g)};
g.h.vo=function(){return jM(this.g)};
g.h.zk=function(){return!1};
g.h.bn=function(a){var b=this,c=g.kp(this.g.l,this.B);this.Sk()||BN(a,this.l);ag(this.A.fetch(c).then(function(a){if(!b.ga()&&(a=Uda(a),!a.us)){if(IN(b.g.l)){var c=b.l,d=c.L;c.L=null;d&&(a.Zl.some(Rda)&&(d.renderer.backfillMpuCompanionAdRenderer.type="BACKFILL_MPU_TYPE_AFV"),TN(b.l,[d]),b.o=!0)}a.isEmpty||TN(b.l,a.Zl)}}),function(){(b.Sk()||b.o)&&SN(b.l)})};g.r(KN,CN);g.h=KN.prototype;g.h.rs=function(){return null==this.A?!1:this.A.g.some(function(a){return a.g()})};
g.h.yv=function(){if(this.B){this.B.subscribe("e",this.Sd,this);this.B.subscribe("onAdUxUpdate",this.Vt,this);var a=this.B;a.L?a.Sc("html5.unsupportedads"):a.Xb()}Vda(this,this.A.g);LN(this)};
g.h.Sd=function(a){a=void 0===a?!1:a;this.B&&g.Le(this.B);CN.prototype.Sd.call(this,a)};
g.h.Ut=function(){this.Sd()};
g.h.Wt=function(){for(var a=this.l;a.length;)if(a[0].Bn()){a[0].Xb();break}else g.Le(a.shift())};
g.h.qw=function(){return null==this.A?!0:0==this.A.o};
g.h.xo=function(a){CN.prototype.xo.call(this,a);this.B&&(a=a.state,g.V(a,2)?this.B.Jf():g.vE(a)?this.B.rk():a.isError()&&this.B.Sc(a.g.errorCode))};
g.h.Si=function(a){a=void 0===a?!1:a;this.Tk(0);a?this.Sd(a):LN(this)};
g.h.Bu=function(){1==this.A.A?this.Sd():this.Si()};
g.h.wo=function(a){CN.prototype.wo.call(this,a);this.B&&this.B.hd(a)};var MN=null,ON=null;g.y("yt.www.ads.eventcache.getLastCompanionData",function(){return MN},void 0);
g.y("yt.www.ads.eventcache.getLastPlaShelfData",function(){return ON},void 0);g.r(RN,g.R);g.h=RN.prototype;
g.h.init=function(){var a=this.g.Y();if(a.nm||g.Tr("SERVED_VIA_SPF_HISTORY"))SN(this);else{if(xM(this.g)){var b=Fw(this.g);b.addEventListener("updatekevlarcompanion",NN);b.addEventListener("onPlaShelfInfoCardsReady",PN);window.addEventListener("yt-navigate-start",QN)}this.ea.M(this.g,"applicationplayerstatechange",this.tD);b=Wda(a.getPlayerResponse()||{});b=Xda(this,b);var c=b;if(c.some(Qda)){var d=c.findIndex(Sda),e=null;-1!=d&&(e=c[d],c.splice(d,1));c=e}else c=null;this.L=c;if(0<b.length){TN(this,
b);b=!1;c=g.q(this.A);for(d=c.next();!d.done;d=c.next())if(gL(d.value)){b=!0;break}if(!b&&!this.I)for(b=g.q(this.A),c=b.next();!c.done;c=b.next())c.value.g=!1}this.ea.M(this.g,"crn_ad",this.uo,this);this.ea.M(this.g,"crx_ad",this.uD,this);a.subscribe("cuepointupdated",this.Ku,this);SN(this);g.Jf(this.KJ,this)}};
g.h.R=function(){g.Tt(this.ea);this.g.Y(1).unsubscribe("cuepointupdated",this.Ku,this);if(xM(this.g)){var a=Fw(this.g);a.removeEventListener("updatekevlarcompanion",NN);a.removeEventListener("onPlaShelfInfoCardsReady",PN);window.removeEventListener("yt-navigate-start",QN);MN=null}a=g.q(this.B.values());for(var b=a.next();!b.done;b=a.next())YN(this,b.value);UN(this);this.A.clear();this.H=[];this.F=null;g.Le(this.o);this.o=null;this.B.clear();g.R.prototype.R.call(this)};
g.h.uo=function(a){if(!a.g){this.F=null;var b=g.yK(this.g);g.V(b,32)||g.V(b,16)?this.F=a:(b=this.B.get(a))&&b.bn(a)}};
g.h.uD=function(a){a.g&&(a.g=!1);a==this.F&&(this.F=null)};
g.h.Ku=function(a){if(null==this.K)g.Q(Error("Dynamically inserted ad was requested, but no cuepoint AdPlacementRenderer was present to fulfill the request."));else{var b=this.g.xa()||0;a=a.filter(function(a){return 0!=b&&a.Pd>b});
TN(this,[this.K],a)}};
g.h.wD=function(a){this.l&&this.l.xo(a)};
g.h.tD=function(a){0>CE(a,16)&&this.F&&this.uo(this.F)};
g.h.sI=function(){if(wM(this.g)&&this.l){var a=this.g.xa(2);FN(this.l,a)}};
g.h.JE=function(){this.U=!0;this.l&&Mda(this.l)};
g.h.QE=function(a){this.l&&this.l.wo(a)};
g.h.xD=function(){2==this.g.Ga()&&this.l&&Oda(this.l)};
g.h.vD=function(a){this.l&&Pda(this.l,a)};
g.h.KJ=function(){for(var a=[],b=g.q(this.A),c=b.next();!c.done;c=b.next())c=c.value,gL(c)||a.push(c);c=this.g;b=c.app;(c=c.playerType)&&wK(b)!=c||NK(b,"cuerangemarkersupdated",a)};g.r(aO,g.I);aO.prototype.Rh=function(a){this.ia().appendChild(a)};
g.r(cO,aO);cO.prototype.ia=function(){return this.g};g.r(Y,g.ww);g.h=Y.prototype;g.h.xj=function(a){bO(a,this.da)};
g.h.bind=function(a){if(this.K)this.Xk(a);else if(a.renderer){var b=Object.assign({},dO(this.g,this.l),a.macros);this.init(a.id,a.renderer,b,a)}return window.Promise.resolve()};
g.h.init=function(a,b,c){this.K=a;this.element.setAttribute("id",this.K);this.X&&g.M(this.element,this.X);this.macros=c;this.H=b.trackingParams||null;null!=this.H&&iO(this,this.element,this.H)};
g.h.Xk=function(){};
g.h.clear=function(){};
g.h.hide=function(){g.ww.prototype.hide.call(this);null!=this.H&&jO(this,this.element,!1)};
g.h.show=function(){g.ww.prototype.show.call(this);null!=this.H&&jO(this,this.element,!0)};
g.h.onClick=function(){if(null!=this.H){var a=this.element;ZK(this.g,a)&&this.Na()&&g.XK(this.g,a)}};
g.h.R=function(){this.clear(null);g.ww.prototype.R.call(this)};g.r(lO,Y);lO.prototype.init=function(a,b,c){var d=b.thumbnail;d=d&&kO(d)||"";g.qb(d)?g.Q(Error("Found AdImage without valid image URL"),"WARNING"):(g.rd(this.element,{src:d}),Y.prototype.init.call(this,a,b,c),this.show())};
lO.prototype.clear=function(){this.hide()};g.r(mO,Y);mO.prototype.init=function(a,b,c){this.o=b;this.isTemplated()||g.Rd(this.element,eO(this.o));Y.prototype.init.call(this,a,b,c);this.show()};
mO.prototype.isTemplated=function(){return this.o.isTemplated||!1};
mO.prototype.clear=function(){this.hide()};g.r(MO,Y);
MO.prototype.init=function(a,b,c){this.B=b;if(null==b.text&&null==b.icon)g.Q(Error("ButtonRenderer did not have text or an icon set."),"WARNING");else{switch(b.style||null){case "STYLE_UNKNOWN":var d="ytp-ad-button-link";break;default:d=null}null!=d&&g.M(this.element,d);null!=b.text&&(d=g.kD(b.text),g.qb(d)||(this.element.setAttribute("aria-label",d),this.C=new g.ww({D:"span",J:"ytp-ad-button-text",G:[d]}),g.J(this,this.C),this.C.ca(this.element)));null!=b.icon&&(d=LO(b.icon),null!=d&&(this.A=new g.ww({D:"span",
J:"ytp-ad-button-icon",G:[d]}),g.J(this,this.A)),this.F?Id(this.element,this.A.element,0):this.A.ca(this.element));Y.prototype.init.call(this,a,b,c)}};
MO.prototype.clear=function(){this.hide()};
MO.prototype.onClick=function(a){Y.prototype.onClick.call(this,a);ML(NO(this),this.macros);this.g.Zd(this.componentType)};g.r(OO,Y);g.h=OO.prototype;
g.h.init=function(a,b,c){var d=this;Y.prototype.init.call(this,a,b,c);this.o&&(this.o.cancel(),this.o=null);this.o=new g.Pf(g.wa);b.bannerImage?b.iconImage?b.headline?b.description?b.actionButton&&b.actionButton.buttonRenderer?b.navigationEndpoint?(this.B.init(iL("ad-image"),b.bannerImage,c),this.L.init(iL("ad-image"),b.iconImage,c),this.F.init(iL("ad-text"),b.headline,c),this.C.init(iL("ad-text"),b.description,c),this.A.init(iL("button"),b.actionButton.buttonRenderer,c),g.Rd(this.Z["yt-badge-ad"],
g.S("YTP_AD_BADGE")),this.O=b.impressionCommands||[],this.I=b.navigationEndpoint,this.ea.M(this.element,"click",this.onClick,this),window.Promise.race([this.o,this.aa.showCompanion(this.element,300,250)]).then(function(){return d.show()})):g.Q(Error("ActionCompanionAdRenderer has no navigation endpoint.")):g.Q(Error("ActionCompanionAdRenderer has no button.")):g.Q(Error("ActionCompanionAdRenderer has no description string.")):g.Q(Error("ActionCompanionAdRenderer has no headline string.")):g.Q(Error("ActionCompanionAdRenderer has no icon image.")):
g.Q(Error("ActionCompanionAdRenderer has no banner image."))};
g.h.clear=function(){g.Tt(this.ea);this.hide()};
g.h.show=function(){this.A.show();Y.prototype.show.call(this);ML(this.O,this.macros)};
g.h.hide=function(){this.A.hide();Y.prototype.hide.call(this)};
g.h.onClick=function(a){Y.prototype.onClick.call(this,a);this.I&&LL(this.I,this.macros)};
g.h.R=function(){this.o&&(this.o.cancel(),this.o=null);Y.prototype.R.call(this)};g.r(PO,g.I);PO.prototype.R=function(){this.C&&g.iu(this.C);this.o&&(this.o.cancel(),this.o=null);this.B&&g.iu(this.B);this.g&&(this.g.cancel(),this.g=null);this.l&&(this.l.cancel(),this.l=null);this.A&&(this.A.stop(),this.A=null);g.I.prototype.R.call(this)};g.r(VO,Y);VO.prototype.init=function(a,b,c){var d=this;Y.prototype.init.call(this,a,b,c);this.o&&(this.o.cancel(),this.o=null);this.o=new g.Pf(g.wa);"BACKFILL_MPU_TYPE_AFV"==b.type?window.Promise.race([this.o,cea(this.A)]).then(function(){ML(b.impressionEndpoints||[],d.macros)}):"BACKFILL_MPU_TYPE_AFC"==b.type&&(b.mpuAllowed?window.Promise.race([this.o,
dea(this.A)]).then(function(){ML(b.impressionEndpoints||[],d.macros)},function(){ML(b.noAdEndpoints||[],d.macros)}):ML(b.noAdEndpoints||[],this.macros))};
VO.prototype.R=function(){this.o&&(this.o.cancel(),this.o=null);Y.prototype.R.call(this)};var oea={seekableStart:0,seekableEnd:1,current:0};g.r(WO,Y);WO.prototype.clear=function(){this.dispose()};g.r(ZO,WO);g.h=ZO.prototype;g.h.init=function(a,b,c){WO.prototype.init.call(this,a,b,c);g.wh(this.B,"stroke-dasharray","0 "+this.A);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){YO(this);WO.prototype.hide.call(this)};
g.h.show=function(){XO(this);WO.prototype.show.call(this)};
g.h.pl=function(){this.hide()};
g.h.Wi=function(){if(this.o){var a=this.o.Ah();null!=a&&null!=a.current&&g.wh(this.B,"stroke-dasharray",a.current/a.seekableEnd*this.A+" "+this.A)}};g.r($O,g.R);g.h=$O.prototype;g.h.wr=function(){return this.l};
g.h.start=function(){this.o||(this.o=!0,this.za.start())};
g.h.stop=function(){this.o&&(this.o=!1,this.za.stop())};
g.h.tE=function(){this.g+=100;var a=!1;this.g>this.l&&(this.g=this.l,this.za.stop(),a=!0);this.A={seekableStart:0,seekableEnd:this.l/1E3,current:this.g/1E3};if(this.B){var b=this.B,c=this.A.current;b.l&&FN(b.l,c)}this.P("q");a&&this.P("p")};
g.h.Ah=function(){return this.A};g.r(aP,Y);g.h=aP.prototype;
g.h.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);if(b.image&&b.image.thumbnail)if(b.headline)if(b.description)if(b.background)if(b.actionButton&&b.actionButton.buttonRenderer)if(a=b.durationMilliseconds||0,!g.va(a)||0>=a)g.Q(Error("durationMilliseconds was specified incorrectly in AdActionInterstitialRenderer with a value of: "+a));else if(b.navigationEndpoint){var d=this.g.Y(2);if(null!=d){var e=b.image.thumbnail.thumbnails;null!=e&&0<e.length&&g.qb(g.Gb(e[0].url))&&(e[0].url=d.profilePicture);
e=b.background.thumbnails;null!=e&&0<e.length&&g.qb(g.Gb(e[0].url))&&(e[0].url=d.xc(g.W(this.g)));e=b.headline;null!=e&&g.qb(g.Gb(e.text))&&(e.text=d.author)}this.B.init(iL("ad-image"),b.image,c);this.F.init(iL("ad-text"),b.headline,c);this.C.init(iL("ad-text"),b.description,c);d=(d=b.background)&&kO(d)||"";g.qb(d)?Wr(Error("Found ThumbnailDetails without valid image URL")):g.wh(this.ha,"backgroundImage","url("+d+")");this.o=new MO(this.g,this.l,["ytp-ad-action-interstitial-action-button"]);g.J(this,
this.o);this.o.ca(this.L);this.o.init(iL("button"),b.actionButton.buttonRenderer,c);this.I=b.navigationEndpoint;this.ea.M(this.aa,"click",this.Wj,this);this.ea.M(this.V,"click",this.Wj,this);this.ea.M(this.O,"click",this.Wj,this);this.ea.M(this.L,"click",this.Wj,this);this.A=new $O(a);g.J(this,this.A);(b=b.countdownRenderer)&&b.timedPieCountdownRenderer&&this.A&&(c=new ZO(this.g,this.l,this.A),g.J(this,c),c.ca(this.element),c.init(iL("timed-pie-countdown"),b.timedPieCountdownRenderer,this.macros));
this.show()}else g.Q(Error("AdActionInterstitialRenderer has no navigation endpoint."));else g.Q(Error("AdActionInterstitialRenderer has no button."));else g.Q(Error("AdActionInterstitialRenderer has no background."));else g.Q(Error("AdActionInterstitialRenderer has no description AdText."));else g.Q(Error("AdActionInterstitialRenderer has no headline AdText."));else g.Q(Error("AdActionInterstitialRenderer has no image."))};
g.h.clear=function(){g.Tt(this.ea);this.hide()};
g.h.show=function(){bP(!0);this.o&&this.o.show();Y.prototype.show.call(this)};
g.h.hide=function(){bP(!1);this.o&&this.o.hide();Y.prototype.hide.call(this)};
g.h.Wj=function(){this.I&&LL(this.I,this.macros)};g.r(cP,Y);g.h=cP.prototype;g.h.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);b.text?(a=b.durationMilliseconds||0,!g.va(a)||0>=a?g.Q(Error("durationMilliseconds was specified incorrectly in AdTextInterstitialRenderer with a value of: "+a)):(this.o.init(iL("ad-text"),b.text,c),this.show())):g.Q(Error("AdTextInterstitialRenderer has no message AdText."))};
g.h.clear=function(){this.hide()};
g.h.show=function(){dP(!0);Y.prototype.show.call(this)};
g.h.hide=function(){dP(!1);Y.prototype.hide.call(this)};
g.h.onClick=function(){};g.r(fP,Y);g.h=fP.prototype;
g.h.init=function(a,b,c){this.o=b;this.I=g.Za(this.o.onClickCommands||[]);var d;if(d=this.o.contentSupportedRenderer)if(d=this.o.contentSupportedRenderer,d.textOverlayAdContentRenderer){d=d.textOverlayAdContentRenderer;var e=eO(d.title),f=eO(d.description);g.qb(e)||g.qb(f)?d=!1:(iO(this,this.C.element,d.trackingParams||null),this.C.updateValue("title",eO(d.title)),this.C.updateValue("description",eO(d.description)),this.C.updateValue("displayUrl",eO(d.displayUrl)),d.navigationEndpoint&&$a(this.I,
d.navigationEndpoint),gP(this,this.C),this.C.show(),jO(this,this.C.element,!0),d=!0)}else if(d.enhancedTextOverlayAdContentRenderer)d=d.enhancedTextOverlayAdContentRenderer,e=eO(d.title),f=eO(d.description),g.qb(e)||g.qb(f)?d=!1:(iO(this,this.A.element,d.trackingParams||null),this.A.updateValue("title",eO(d.title)),this.A.updateValue("description",eO(d.description)),this.A.updateValue("displayUrl",eO(d.displayUrl)),this.A.updateValue("imageUrl",fO(d.image)),d.navigationEndpoint&&$a(this.I,d.navigationEndpoint),
this.L=d.imageNavigationEndpoint||null,gP(this,this.A),this.A.show(),jO(this,this.A.element,!0),d=!0);else if(d.imageOverlayAdContentRenderer){d=d.imageOverlayAdContentRenderer;b:{e=d.image;e=void 0===e?null:e;if(null!=e&&(e=e.thumbnail,null!=e&&null!=e.thumbnails&&0!=e.thumbnails.length&&null!=e.thumbnails[0].width&&null!=e.thumbnails[0].height)){e=new g.gd(e.thumbnails[0].width||0,e.thumbnails[0].height||0);break b}e=new g.gd(0,0)}0==e.width||0==e.height?d=!1:(iO(this,this.B.element,d.trackingParams||
null),this.B.updateValue("imageUrl",fO(d.image)),this.B.updateValue("width",e.width),this.B.updateValue("height",e.height),d.navigationEndpoint&&$a(this.I,d.navigationEndpoint),g.wh(this.B.Z["ytp-ad-image-overlay"],"max-width",e.width+"px"),gP(this,this.B),this.B.show(),jO(this,this.B.element,!0),(new g.P(this.clear,45E3,this)).start(),this.M(this.g,"resize",g.B(this.Bb,e)),d=!0)}else d=!1;d&&(Y.prototype.init.call(this,a,b,c),this.F.start(),this.show(),hP(this,!0),ML(this.o&&this.o.impressionCommands?
this.o.impressionCommands:[],this.macros))};
g.h.Bb=function(a){var b=this.element;var c=g.jd(b),d=g.vd&&b.currentStyle;d&&g.sd(g.ld(c).g)&&"auto"!=d.width&&"auto"!=d.height&&!d.boxSizing?(c=g.Vh(b,d.width,"width","pixelWidth"),b=g.Vh(b,d.height,"height","pixelHeight"),b=new g.gd(c,b)):(d=new g.gd(b.offsetWidth,b.offsetHeight),c=g.Xh(b),b=g.$h(b),b=new g.gd(d.width-b.left-c.left-c.right-b.right,d.height-b.top-c.top-c.bottom-b.bottom));(a.width>b.width||a.height>b.height)&&this.clear()};
g.h.clear=function(){hP(this,!1);this.F.reset();this.C.hide();jO(this,this.C.element,!1);this.A.hide();jO(this,this.A.element,!1);this.B.hide();jO(this,this.B.element,!1);this.hide();this.dispose()};
g.h.Ri=function(a,b){var c=g.hc(this.macros),d=g.Ph(b,a).floor();c.I_X={toString:function(){return d.x.toString()}};
c.I_Y={toString:function(){return d.y.toString()}};
ML(this.I,c)};
g.h.bI=function(){this.L&&LL(this.L,this.macros)};
g.h.Io=function(){this.clear();a:{if(this.o&&this.o.closeButton&&this.o.closeButton.buttonRenderer){var a=this.o.closeButton.buttonRenderer;if(a.serviceEndpoint){a=[a.serviceEndpoint];break a}}a=[]}ML(a,this.macros)};
g.h.So=function(){var a=this.o&&this.o.attributionEndpoint?this.o.attributionEndpoint:null;null!=a&&LL(a,this.macros)};
g.r(eP,g.I);g.h=eP.prototype;g.h.reset=function(){this.C=!1;this.g.stop();this.o.stop();this.l=!1;g.qq(this.B,this.A)};
g.h.start=function(){this.reset();this.g.start()};
g.h.MG=function(){this.l&&(this.l=!1,g.qq(this.B,this.A));this.o.stop();this.g.stop()};
g.h.JG=function(){this.C?this.o.start():this.g.start()};
g.h.tq=function(){this.l||(this.l=!0,g.M(this.B,this.A),this.C=!0)};g.r(g.iP,g.I);g.h=g.iP.prototype;g.h.show=function(a){1!=this.g&&2!=this.g&&(3==this.g&&this.Ll(),4==this.g?(this.l.show(),this.g=null,this.o.stop()):this.l.Na()||(jP(this,!0),this.g=1,a?this.o.start(a):this.Ll()))};
g.h.hide=function(a){3!=this.g&&(1==this.g||2==this.g?(this.l.hide(),this.g=null,this.o.stop()):this.l.Na()&&(a&&(this.A=a),jP(this,!0),this.g=3,this.o.start(this.B)))};
g.h.Ll=function(){switch(this.g){case 1:this.l.show();this.g=2;this.o.start(10);break;case 2:jP(this,!1);this.g=null;break;case 3:this.l.hide();jP(this,!1);this.g=4;this.o.start(0);break;case 4:this.g=null,this.A&&this.A()}};
g.h.stop=function(){for(;null!=this.g&&4!=this.g;)this.o.stop(),this.Ll()};
g.h.R=function(){this.l.ga()||this.l.element.removeAttribute("aria-hidden");g.I.prototype.R.call(this)};g.r(kP,WO);g.h=kP.prototype;
g.h.init=function(a,b,c){var d=b.durationMilliseconds;g.va(d)&&0>d&&g.Q(Error("durationMilliseconds was specified incorrectly in AdPreviewRenderer with a value of: "+d));d=b.durationMilliseconds;this.L=null==d||0===d?this.o.wr():d;if(b.templatedCountdown)var e=b.templatedCountdown.templatedAdText;else b.staticPreview&&(e=b.staticPreview);this.A.init(iL("ad-text"),e,c);this.g.Y()&&this.g.Y().wp&&b.thumbnail?this.F.init(iL("ad-image"),b.thumbnail,c):this.I.hide();WO.prototype.init.call(this,a,b,c);
this.O.show(100);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.A.hide();this.F.hide();YO(this);WO.prototype.hide.call(this)};
g.h.show=function(){XO(this);this.B.show();this.A.show();this.F.show();WO.prototype.show.call(this)};
g.h.pl=function(){this.hide()};
g.h.Wi=function(){if(null!=this.o){var a=this.o.Ah();if(null!=a&&null!=a.current)if(a=1E3*a.current,a>=this.L)lP(this);else if(this.A&&this.A.isTemplated()&&(a=Math.max(0,Math.ceil((this.L-a)/1E3)),a!=this.aa)){var b=this.A,c={TIME_REMAINING:String(a)};null!=c&&g.Rd(b.element,eO(b.o,c));this.aa=a}}};g.r(mP,Y);g.h=mP.prototype;
g.h.init=function(a,b,c){for(var d=(this.A=b)&&this.A.onClickCommands||[],e=0;e<d.length;++e)d[e].adLifecycleCommand&&(this.F=!0);!b||g.dc(b)?g.Q(Error("SkipButtonRenderer was not specified or empty."),"ERROR"):!b.message||g.dc(b.message)?g.Q(Error("SkipButtonRenderer.message was not specified or empty."),"ERROR"):(d={iconType:"SKIP_NEXT"},e=LO(d),null==e?g.Q(Error("Icon for SkipButton was unable to be retrieved. yt.innertube.Icon.IconType: "+d.iconType+"."),"ERROR"):(this.C=new g.ww({D:"button",
W:["ytp-ad-skip-button","ytp-button"],G:[{D:"span",J:"ytp-ad-skip-button-icon",G:[e]}]}),g.J(this,this.C),this.C.ca(this.B.element),this.o=new mO(this.g,this.l,"ytp-ad-skip-button-text"),this.o.init(iL("ad-text"),this.A.message,c),g.J(this,this.o),Id(this.C.element,this.o.element,0)),Y.prototype.init.call(this,a,b,c))};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.o&&this.o.hide();Y.prototype.hide.call(this)};
g.h.onClick=function(a){null!=this.C&&(g.Lt(a),Y.prototype.onClick.call(this,a),this.O.Gc(this.A&&this.A.onClickCommands||[],this.macros),this.F||this.g.Zd(this.componentType))};
g.h.show=function(){this.I||(ML(this.A&&this.A.impressionCommands||[],this.macros),this.I=!0);this.B.show();this.o&&this.o.show();Y.prototype.show.call(this)};g.r(nP,WO);g.h=nP.prototype;
g.h.init=function(a,b,c){var d=b&&b.preskipRenderer&&b.preskipRenderer.adPreviewRenderer||{};d=g.dc(d)?null:d;null==d?this.I=0:(this.I=null!=d.durationMilliseconds&&void 0!==d.durationMilliseconds?d.durationMilliseconds:5E3,this.A=new kP(this.g,this.l,this.o),this.A.init(iL("preskip-component"),d,c),g.J(this,this.A),this.A.ca(this.element));d=b&&b.skippableRenderer&&b.skippableRenderer.skipButtonRenderer||{};d=g.dc(d)?null:d;null==d?g.Q(Error("SkipButtonRenderer was not set in player response."),"ERROR"):
(null!=d&&(this.B=new mP(this.g,this.l,this.O,this.L),this.B.init(iL(this.L?"persisting-skip-button":"skip-button"),d,c),g.J(this,this.B),this.B.ca(this.element)),WO.prototype.init.call(this,a,b,c),this.show())};
g.h.show=function(){this.F&&this.B?this.B.show():this.A&&this.A.show();XO(this);WO.prototype.show.call(this)};
g.h.pl=function(){};
g.h.clear=function(){this.A&&this.A.clear();this.B&&this.B.clear();YO(this);WO.prototype.hide.call(this)};
g.h.hide=function(){this.A&&this.A.hide();this.B&&this.B.hide();YO(this);WO.prototype.hide.call(this)};
g.h.Wi=function(){1E3*this.o.Ah().current>=this.I&&oP(this,!0)};g.r(pP,Y);pP.prototype.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);b.skipAd&&(a=b.skipAd,a.skipAdRenderer&&(b=new nP(this.g,this.l,this.o,this.A,!0),b.ca(this.B),b.init(iL("skip-button"),a.skipAdRenderer,this.macros),g.J(this,b)));this.show()};g.r(sP,WO);g.h=sP.prototype;g.h.init=function(a,b,c){if(b.templatedCountdown){var d=b.templatedCountdown.templatedAdText;if(!d.isTemplated){g.Q(Error("AdDurationRemainingRenderer has no templated ad text."),"WARNING");return}this.A=new mO(this.g,this.l);this.A.init(iL("ad-text"),d,{});this.A.ca(this.element);g.J(this,this.A)}WO.prototype.init.call(this,a,b,c);this.show()};
g.h.clear=function(){this.hide()};
g.h.hide=function(){YO(this);WO.prototype.hide.call(this)};
g.h.pl=function(){this.hide()};
g.h.Wi=function(){if(null!=this.o){var a=this.o.Ah();if(null!=a&&null!=a.current){var b=this.o instanceof $O?a.seekableEnd:this.g.Bc(2);b=g.qP(b-a.current);this.A&&(a=this.A,b={FORMATTED_AD_DURATION_REMAINING:String(b)},null!=b&&g.Rd(a.element,eO(a.o,b)))}}};
g.h.show=function(){XO(this);WO.prototype.show.call(this)};g.r(tP,Y);g.h=tP.prototype;
g.h.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);if(b.reasons)if(null==b.confirmLabel)g.Q(Error("AdFeedbackRenderer.confirmLabel was not set."),"ERROR");else{null==b.cancelLabel&&g.Q(Error("AdFeedbackRenderer.cancelLabel was not set."),"WARNING");null==b.title&&g.Q(Error("AdFeedbackRenderer.title was not set."),"WARNING");if(a=b.cancelRenderer&&b.cancelRenderer.buttonRenderer||null)this.o=new MO(this.g,this.l,["ytp-ad-feedback-dialog-close-button"],"button"),g.J(this,this.o),this.o.init(iL("button"),
a,this.macros),this.o.fa("click",this.pu,this),this.o.ca(this.element);b.title&&(a=g.kD(b.title),this.updateValue("title",a));b.reasonsTitle&&(a=g.kD(b.reasonsTitle),this.updateValue("reasonsTitle",a));if(b.reasons)for(a=g.q(b.reasons),c=a.next();!c.done;c=a.next()){var d=c.value;c=d.reason;null==c?g.Q(Error("AdFeedbackReason.reason was not set."),"WARNING"):(d=d.endpoint,null==d?g.Q(Error("AdFeedbackReason.endpoint was not set."),"WARNING"):(c=new uP(c,d),g.J(this,c),this.I.appendChild(c.ia()),this.B.push(c)))}b.cancelLabel&&
(a=g.kD(b.cancelLabel),this.updateValue("cancelLabel",a),g.Ft(this.C,"click",this.pu.bind(this)));b.confirmLabel&&(a=g.kD(b.confirmLabel),this.updateValue("confirmLabel",a),g.Ft(this.F,"click",this.yE.bind(this)));b.undoRenderer&&(b=(b=b.undoRenderer)&&b.buttonRenderer||null)&&(b.serviceEndpoint?(this.A=new MO(this.g,this.l,["ytp-ad-feedback-dialog-undo-mute-button"],"ad-feedback-undo-mute-button"),g.J(this,this.A),this.A.init(iL("ad-feedback-undo-mute-button"),b,this.macros),this.A.fa("click",this.lI,
this),this.A.ca(this.L)):g.Q(Error("AdFeedbackRenderer.undoRenderer.undoButtonRenderer was specified but did not contain a service endpoint."),"WARNING"))}else g.Q(Error("AdFeedbackRenderer.reasons were not set."),"ERROR")};
g.h.clear=function(){Pt(this.C);Pt(this.F);this.B.length=0;this.hide()};
g.h.hide=function(){this.o&&this.o.hide();this.A&&this.A.hide();Y.prototype.hide.call(this)};
g.h.show=function(){this.o&&this.o.show();this.A&&this.A.show();Y.prototype.show.call(this)};
g.h.pu=function(){this.g.Zd("ad-feedback-dialog-close-button");this.hide()};
g.h.yE=function(){var a=this.B.filter(function(a){return a.o.checked});
0!==a.length&&(LL(a[0].l,this.macros),this.g.Zd("ad-feedback-dialog-confirm-button"),this.hide())};
g.h.lI=function(){this.hide()};
uP.prototype.ia=function(){return this.g.element};g.r(vP,Y);g.h=vP.prototype;g.h.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);this.o=b;b.dialogMessages||null!=b.title?null==b.confirmLabel?g.Q(Error("ConfirmDialogRenderer.confirmLabel was not set."),"ERROR"):null==b.cancelLabel?g.Q(Error("ConfirmDialogRenderer.cancelLabel was not set."),"ERROR"):fea(this,b):g.Q(Error("Neither ConfirmDialogRenderer.title nor ConfirmDialogRenderer.dialogMessages were set."),"ERROR")};
g.h.clear=function(){g.Tt(this.ea);this.hide()};
g.h.Vo=function(){this.hide()};
g.h.Uo=function(){var a=this.o.cancelEndpoint;a&&LL(a,this.macros);this.hide()};
g.h.Wo=function(){var a=this.o.confirmNavigationEndpoint||this.o.confirmEndpoint;a&&LL(a,this.macros);this.hide()};g.r(wP,vP);wP.prototype.Vo=function(a){vP.prototype.Vo.call(this,a);this.g.Zd("ad-mute-confirm-dialog-close-button")};
wP.prototype.Uo=function(a){vP.prototype.Uo.call(this,a);this.g.Zd("ad-mute-confirm-dialog-close-button")};
wP.prototype.Wo=function(a){vP.prototype.Wo.call(this,a);this.g.Zd("ad-mute-confirm-dialog-confirm-button")};g.r(xP,Y);g.h=xP.prototype;
g.h.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);this.F=b;if(null==b.dialogMessage&&null==b.title)g.Q(Error("Neither AdInfoDialogRenderer.dialogMessage nor AdInfoDialogRenderer.title was set."),"ERROR");else{null==b.confirmLabel&&g.Q(Error("AdInfoDialogRenderer.confirmLabel was not set."),"WARNING");if(a=b.closeOverlayRenderer&&b.closeOverlayRenderer.buttonRenderer||null)this.o=new MO(this.g,this.l,["ytp-ad-info-dialog-close-button"],"ad-info-dialog-close-button"),g.J(this,this.o),this.o.init(iL("button"),
a,this.macros),this.o.ca(this.element);b.title&&(a=g.kD(b.title),this.updateValue("title",a));if(b.adReasons)for(a=b.adReasons,c=0;c<a.length;c++){var d=g.jD(a[c]);if(!g.qb(d.textContent)){var e=g.Bd("LI");e.appendChild(d);this.I.appendChild(e)}}else g.Uh(this.I,!1);b.dialogMessage&&(a=g.jD(b.dialogMessage,!0),this.V.appendChild(a));b.confirmLabel&&(a=g.kD(b.confirmLabel),this.updateValue("confirmLabel",a));if(b.muteAdRenderer&&(b=(b=b.muteAdRenderer)&&b.buttonRenderer||null))if(a=b.navigationEndpoint&&
b.navigationEndpoint.adFeedbackEndpoint||null,c=b.navigationEndpoint&&b.navigationEndpoint.confirmDialogEndpoint||null,null==a&&null==c)g.Q(Error("AdInfoDialogRenderer.muteAdRenderer was specified but contains neither an AdFeedbackEndpoint, nor a ConfirmDialogEndpoint."),"WARNING");else{if(a){if(a=a.content&&a.content.adFeedbackRenderer||null)this.B=new tP(this.g,this.l),g.J(this,this.B),this.B.init(iL("ad-feedback-dialog"),a,this.macros),this.B.ca(this.O)}else c&&(a=c.content&&c.content.confirmDialogRenderer||
null)&&(this.C=new wP(this.g,this.l),g.J(this,this.C),this.C.init(iL("ad-mute-confirm-dialog"),a,this.macros),this.C.ca(this.O));this.A=new MO(this.g,this.l,["ytp-ad-info-dialog-mute-button"],"button",!0);g.J(this,this.A);this.A.init(iL("button"),b,this.macros);this.A.fa("click",this.zE,this);this.A.ca(this.aa)}this.o.fa("click",this.qu,this);g.Ft(this.L,"click",this.qu.bind(this))}};
g.h.clear=function(){Pt(this.L);this.hide()};
g.h.hide=function(){this.B?this.B.hide():this.C&&this.C.hide();this.o&&this.o.hide();this.A&&this.A.hide();Y.prototype.hide.call(this)};
g.h.show=function(){this.o&&this.o.show();this.A&&this.A.show();Y.prototype.show.call(this)};
g.h.qu=function(){this.F&&this.F.confirmServiceEndpoint&&LL(this.F.confirmServiceEndpoint,this.macros);this.g.Zd("ad-info-dialog-close-button");this.hide()};
g.h.zE=function(){var a=this.B?this.B:this.C;a&&!a.Na()&&(this.hide(),a.show())};g.r(yP,MO);yP.prototype.init=function(a,b,c){this.o&&!g.oq(this.element,"ytp-ad-clickable")&&g.M(this.element,"ytp-ad-clickable");MO.prototype.init.call(this,a,b,c);this.show()};
yP.prototype.onClick=function(){this.o&&!this.o.Na()&&(this.o.show(),ML(NO(this),this.macros),this.g.Zd(this.componentType))};g.r(zP,Y);
zP.prototype.init=function(a,b,c){if(b.hoverText){var d=b.button&&b.button.buttonRenderer||null;if(null==d)g.Q(Error("AdInfoOverlayRenderer.button was not set in player response."),"WARNING");else{var e=b.hoverText;this.B=new g.ww({D:"div",J:"ytp-ad-info-hover-text-container",G:[{D:"div",J:"ytp-ad-info-hover-text-callout"}]});g.J(this,this.B);this.B.ca(this.element);e=g.jD(e);Id(this.B.element,e,0);e=d.serviceEndpoint&&d.serviceEndpoint.adInfoDialogEndpoint||null;var f="ytp-ad-info-hover-text-long";if(e){if(e=
e.dialog&&e.dialog.adInfoDialogRenderer||null)this.A=new xP(this.g,this.l,this.C),g.J(this,this.A),this.A.init(iL("ad-info-dialog"),e,c),this.A.ca(this.C);f="ytp-ad-info-hover-text-short"}g.M(this.B.element,f);this.o=new yP(this.g,this.l,this.A);g.J(this,this.o);this.o.init(iL("ad-info-icon-button"),d,c);this.o.ca(this.element);Y.prototype.init.call(this,a,b,c);this.show()}}else g.Q(Error("AdInfoOverlayRenderer.hoverText not set in player response."),"WARNING")};
zP.prototype.hide=function(){this.o&&this.o.hide();this.A&&this.A.hide();Y.prototype.hide.call(this)};
zP.prototype.show=function(){this.o&&this.o.show();Y.prototype.show.call(this)};g.r(AP,Y);g.h=AP.prototype;
g.h.init=function(a,b,c){this.A=b;if(null==b.defaultText&&null==b.defaultIcon)g.Q(Error("ToggleButtonRenderer must have either text or icon set."));else if(null==b.defaultIcon&&null!=b.toggledIcon)g.Q(Error("ToggleButtonRenderer cannot have toggled icon set without a default icon."));else{if(b.style){switch(b.style.styleType){case "STYLE_UNKNOWN":case "STYLE_DEFAULT":var d="ytp-ad-toggle-button-default-style";break;default:d=null}null!=d&&g.M(this.B,d)}d={};if(b.defaultText){var e=g.kD(b.defaultText);
g.qb(e)||(d.buttonText=e,this.o.setAttribute("aria-label",e))}else g.Uh(this.L,!1);b.defaultTooltip&&(d.tooltipText=b.defaultTooltip);b.defaultIcon?(e=LO(b.defaultIcon),this.updateValue("untoggledIconTemplateSpec",e),b.toggledIcon?(this.I=!0,e=LO(b.toggledIcon),this.updateValue("toggledIconTemplateSpec",e)):(g.Uh(this.F,!0),g.Uh(this.C,!1)),g.Uh(this.o,!1)):g.Uh(this.O,!1);g.dc(d)||this.update(d);b.isToggled&&(g.M(this.B,"ytp-ad-toggle-button-toggled"),this.toggleButton(b.isToggled));BP(this);this.M(this.element,
"change",this.wE);Y.prototype.init.call(this,a,b,c);this.show()}};
g.h.wE=function(){g.O(this.B,"ytp-ad-toggle-button-toggled",this.isToggled());ML(gea(this,this.isToggled()),this.macros);this.isToggled()&&this.g.Zd("toggle-button");BP(this)};
g.h.clear=function(){this.hide()};
g.h.toggleButton=function(a){g.O(this.B,"ytp-ad-toggle-button-toggled",a);this.o.checked=a;BP(this)};
g.h.isToggled=function(){return this.o.checked};g.r(CP,Y);g.h=CP.prototype;g.h.init=function(a,b,c){this.o=b;this.o.rectangle&&(this.B.init(iL("toggle-button"),this.o.likeButton.toggleButtonRenderer,c),this.A.init(iL("toggle-button"),this.o.dislikeButton.toggleButtonRenderer,c),this.M(this.element,"change",this.xE),Y.prototype.init.call(this,a,b,c),this.C.show(100),this.show(),ML(this.o&&this.o.impressionCommands||[],this.macros))};
g.h.clear=function(){this.hide()};
g.h.hide=function(){this.B.hide();this.A.hide();Y.prototype.hide.call(this)};
g.h.show=function(){this.B.show();this.A.show();Y.prototype.show.call(this)};
g.h.xE=function(){g.sq(this.element,"ytp-ad-instream-user-sentiment-selected");this.o.postMessageAction&&this.g.ka("onYtShowToast",this.o.postMessageAction);hea(this)};g.r(DP,Y);DP.prototype.init=function(a,b,c){var d=b.text;if(g.qb(eO(d)))g.Q(Error("SimpleAdBadgeRenderer has invalid or empty text"),"WARNING");else{if(d&&d.text){var e={text:d.text+" \u00b7",isTemplated:d.isTemplated};d.style&&(e.style=d.style);d=new mO(this.g,this.l);d.init(iL("simple-ad-badge"),e,c);d.ca(this.element);g.J(this,d)}Y.prototype.init.call(this,a,b,c);this.show()}};
DP.prototype.clear=function(){this.hide()};g.r(EP,MO);EP.prototype.init=function(a,b,c){var d=!1;null!=b.text&&(d=g.kD(b.text),d=!g.qb(d));d?null==b.navigationEndpoint?g.Q(Error("No visit advertiser clickthrough provided in renderer,"),"WARNING"):"STYLE_UNKNOWN"!==b.style?g.Q(Error("Button style was not a link-style type in renderer,"),"WARNING"):(MO.prototype.init.call(this,a,b,c),this.show()):g.Q(Error("No visit advertiser text was present in the renderer."),"WARNING")};FP.prototype.getLength=function(){return this.g-this.l};g.r(IP,g.ww);IP.prototype.A=function(){var a=this.l.Ah();a=HP(new FP(a.seekableStart,a.seekableEnd),a.current,0);this.C.style.width=100*a+"%"};
IP.prototype.B=function(){g.VB(g.W(this.o))||(2==this.o.Ga()?-1===this.g&&(this.show(),this.g=this.l.subscribe("q",this.A,this),this.A()):-1!==this.g&&(this.hide(),this.l.Dc(this.g),this.g=-1))};g.r(JP,Y);
JP.prototype.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);b.skipOrPreviewRenderer&&(a=b.skipOrPreviewRenderer,a.skipAdRenderer?(c=new nP(this.g,this.l,this.o,this.F),c.ca(this.B),c.init(iL("skip-button"),a.skipAdRenderer,this.macros),g.J(this,c)):a.adPreviewRenderer&&-1!==a.adPreviewRenderer.durationMilliseconds&&(c=new kP(this.g,this.l,this.o),c.ca(this.B),c.init(iL("ad-preview"),a.adPreviewRenderer,this.macros),g.J(this,c)));b.brandInteractionRenderer&&(a=b.brandInteractionRenderer.brandInteractionRenderer,c=
new CP(this.g,this.l),c.ca(this.C),c.init(iL("instream-user-sentiment"),a,this.macros),g.J(this,c));b.adBadgeRenderer&&(a=b.adBadgeRenderer.simpleAdBadgeRenderer,null==a&&(a={},c={},c.text=g.S("YTP_AD_BADGE"),c.isTemplated=!1,a.text=c),c=new DP(this.g,this.l),g.J(this,c),c.ca(this.A),c.init(iL("simple-ad-badge"),a,this.macros));b.adDurationRemaining&&(a=b.adDurationRemaining.adDurationRemainingRenderer,null==a&&(a={templatedCountdown:{templatedAdText:{text:"{FORMATTED_AD_DURATION_REMAINING}",isTemplated:!0}}}),
c=new sP(this.g,this.l,this.o),g.J(this,c),c.ca(this.A),c.init(iL("ad-duration-remaining"),a,this.macros));b.adInfoOverlay&&(a=b.adInfoOverlay,a.adInfoOverlayRenderer&&(c=new zP(this.g,this.l,this.element),g.J(this,c),c.ca(this.A),c.init(iL("ad-info-overlay"),a.adInfoOverlayRenderer,this.macros)));b.visitAdvertiserRenderer&&(b=b.visitAdvertiserRenderer,b.buttonRenderer&&(a=new EP(this.g,this.l),g.J(this,a),a.ca(this.A),a.init(iL("visit-advertiser"),b.buttonRenderer,this.macros)));(b=g.W(this.g))&&
!IB(b)&&"3"==b.o&&(b=new IP(this.g,this.o),b.ca(this.I),g.J(this,b));this.show()};g.r(KP,aO);g.r(LP,g.I);g.h=LP.prototype;g.h.xj=function(a){bO(a,this.view)};
g.h.bind=function(a){var b=a.renderer,c=b.trackingParams;if(this.l&&this.l!=c)throw Error("Cannot re-bind presenter with new tracking params");if(c){this.l=c;var d=this.view,e=this.Gb,f=d.ia();g.W(e).C&&g.gO(e.app.L,f,d);g.W(e).C&&g.hO(e.app.L,f,c)}this.g=b.impressionEndpoints||[];this.macros=Object.assign({},a.macros);return this.Dj(a)};
g.h.Na=function(){return this.A};
g.h.show=function(){this.view.show();this.A=!0;var a=this.Gb,b=this.view.ia();ZK(a,b)&&g.YK(a,b,!0);this.Gc(this.g);this.g=[]};
g.h.hide=function(){this.view.hide();this.A=!1;var a=this.Gb,b=this.view.ia();ZK(a,b)&&g.YK(a,b,!1)};
g.h.onClick=function(a){a=void 0===a?{}:a;this.jl(a);if(this.Na()){a=this.Gb;var b=this.view.ia();ZK(a,b)&&g.XK(a,b)}};
g.h.sg=function(a){LL(a,MP(this))};
g.h.Gc=function(a){ML(a,MP(this))};g.r(NP,g.U);NP.prototype.clear=function(){for(var a=g.q(this.Ba),b=a.next();!b.done;b=a.next())g.Le(b.value);this.Ba=[]};
NP.prototype.C=function(a){g.Lt(a);this.g=Math.max(0,this.g-OP(this));PP(this)};
NP.prototype.B=function(a){g.Lt(a);this.g=Math.min(this.Ba.length-1,this.g+OP(this));PP(this)};
NP.prototype.R=function(){this.clear();g.U.prototype.R.call(this)};g.r(QP,KP);g.h=QP.prototype;g.h.ia=function(){return this.Zc.element};
g.h.Rh=function(a){var b=this.Zc,c=new g.U({D:"li",J:"ad-carousel-listitem",G:[{D:"div",J:"ad-carousel-item"}]});c.Z["ad-carousel-item"].appendChild(a);b.Ba.push(c);b.A.appendChild(c.element)};
g.h.show=function(){this.Zc.show()};
g.h.hide=function(){this.Zc.hide()};
g.h.clear=function(){this.Zc.clear()};var tfa={ty:"offerclick",VL:"offernavclick"};g.r(RP,KP);RP.prototype.show=function(){this.l.show()};
RP.prototype.hide=function(){this.l.hide()};
RP.prototype.Qd=function(){var a=this;this.l.fa("click",function(){a.gc.P("offerclick",a)});
for(var b=g.q((this.l.element||window.document).getElementsByTagName("A")),c=b.next();!c.done;c=b.next())this.l.M(c.value,"click",function(){a.gc.P("offernavclick",a)})};
RP.prototype.ia=function(){return this.l.element};var ufa={Yl:RP};g.r(TP,LP);g.h=TP.prototype;g.h.Rj=function(){return new ufa.Yl(this.gc)};
g.h.Dj=function(a){var b=this.oe();a=a.renderer;this.o=a.clickthroughEndpoint||null;var c=a.headline||null;SP(b.o,"headline",c);SP(b.g,"headline",c);c=a.merchant||null;SP(b.A,"merchant",c);SP(b.o,"merchant",c);SP(b.g,"merchant",c);c=a.priceText||null;SP(b.A,"price",c);SP(b.o,"price",c);SP(b.g,"price",c);c=(c=a.image&&0<a.image.thumbnails.length?a.image.thumbnails[0].url||null:null)?{D:"img",N:{src:c}}:null;b.A.updateValue("image",c);b.g.updateValue("image",c);a.rating?(c=a.reviewText||null,g.Qh(b.B.element,
Math.floor(100*a.rating/5)+"%"),SP(b.B,"reviewText",c),b.o.updateValue("review",b.B),b.g.updateValue("review",b.B)):(b.o.updateValue("review",null),b.g.updateValue("review",null));this.show();return window.Promise.resolve()};
g.h.Qd=function(){for(var a=this,b={},c=g.q(Object.values(tfa)),d=c.next();!d.done;b={type:b.type},d=c.next())b.type=d.value,this.gc.subscribe(b.type,function(b){return function(){return a.onClick({type:b.type})}}(b))};
g.h.jl=function(a){switch(void 0===a.type?void 0:a.type){case "offernavclick":this.o&&this.sg(this.o)}};
g.h.oe=function(){return this.view};g.r(UP,KP);g.h=UP.prototype;g.h.ia=function(){return this.g.element};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.Rh=function(a){this.g.sb(a)};
g.h.R=function(){aea(this.l);KP.prototype.R.call(this)};var WP={Jy:UP,Xl:TP,Tl:QP};g.r(XP,LP);g.h=XP.prototype;g.h.Rj=function(){return new WP.Jy(this.gc)};
g.h.oe=function(){return this.view};
g.h.Dj=function(a){var b=this;this.Th();this.Cd=new g.Pf(g.wa);return window.Promise.race([this.Cd,this.oe().A]).then(function(){return b.jm(a.renderer)})};
g.h.jm=function(a){var b=this.oe();VP(b,"shopText",a.shopText||null);VP(b,"sponsoredText",a.sponsoredText||null);VP(b,"adInfoText",a.adInfoText||null);a=a.itemList.horizontalListRenderer||null;this.Wh();this.Zc.clear();a=g.q(a&&a.items||[]);for(b=a.next();!b.done;b=a.next()){b=b.value.plaShelfItemRenderer;var c=new WP.Xl(this.Gb,this.dm);this.Mg.push(c);c.xj(this.Zc);c.bind({renderer:b,macros:this.macros})}PP(this.Zc.Zc);iea(this);this.show()};
g.h.Qd=function(){this.ea.M(this.Gb,"appresize",this.Bb)};
g.h.Bb=function(){PP(this.Zc.Zc)};
g.h.jl=function(){};
g.h.Th=function(){this.Cd&&(this.Cd.cancel(),this.Cd=null)};
g.h.Wh=function(){g.Me(this.Mg);this.Mg=[]};
g.h.R=function(){this.Th();this.Wh();LP.prototype.R.call(this)};var vfa={KK:"companionclick",TL:"nextbuttonclick",lM:"prevbuttonclick",CM:"shoptextclick",ty:"offerclick"};g.r(YP,KP);g.h=YP.prototype;g.h.ia=function(){return this.g.element};
g.h.Rh=function(a){this.A++;this.C.appendChild(a);ZP(this)};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.clear=function(){this.A=0;g.Hd(this.C)};
g.h.scrollLeft=function(){this.l=Math.max(0,this.l-1);ZP(this)};g.r($P,KP);g.h=$P.prototype;g.h.ia=function(){return this.g.element};
g.h.show=function(){this.g.show()};
g.h.hide=function(){this.g.hide()};
g.h.Rh=function(a){this.g.sb(a)};
g.h.Qd=function(){var a=this;this.g.fa("click",function(){a.gc.P("companionclick",a)});
var b=g.pd("ad-companion-clickthrough",this.g.element);b&&this.g.M(b,"click",function(){a.gc.P("shoptextclick",a)})};
g.h.R=function(){KP.prototype.R.call(this);g.Le(this.l)};g.r(aQ,KP);aQ.prototype.show=function(){this.g.show()};
aQ.prototype.hide=function(){this.g.hide()};
aQ.prototype.Qd=function(){var a=this;this.g.fa("click",function(){a.gc.P("offerclick",a)})};
aQ.prototype.ia=function(){return this.g.element};var wfa={Yl:aQ};g.r(bQ,LP);bQ.prototype.Rj=function(){return new wfa.Yl(this.gc)};
bQ.prototype.Dj=function(a){var b=this.oe();a=a.renderer;this.o=a.clickthroughEndpoint||null;var c=a.headline||null;c&&g.Rd(b.g.Z["iv-cards-slider-text"],g.kD(c));(c=a.priceText||null)&&g.Rd(b.g.Z["iv-cards-slider-action"],g.kD(c));a=a.image&&0<a.image.thumbnails.length?a.image.thumbnails[0].url||null:null;b.g.updateValue("image",a?{D:"img",N:{src:a}}:null);this.show();return window.Promise.resolve()};
bQ.prototype.jl=function(){this.o&&this.sg(this.o)};
bQ.prototype.oe=function(){return this.view};var cQ={Tx:$P,Xl:bQ,Tl:YP};g.r(dQ,LP);g.h=dQ.prototype;g.h.Rj=function(){return new cQ.Tx(this.gc)};
g.h.oe=function(){return this.view};
g.h.Dj=function(a){var b=this;this.Th();this.Cd=new g.Pf(g.wa);return window.Promise.race([this.Cd,this.oe().o]).then(function(){return b.jm(a.renderer)})};
g.h.jm=function(a){this.Mq=a.clickTrackingEndpoints||[];this.Mo=a.clickToAdvSiteEndpoint||null;var b=this.oe(),c=a.adBadgeText||null;c&&g.Rd(b.g.Z["yt-badge-ad"],g.kD(c));(c=a.shopText||null)&&g.Rd(b.g.Z["ad-companion-clickthrough"],g.kD(c));(c=a.g||null)&&g.Rd(b.g.Z["yt-uix-hovercard-content"],g.kD(c));a=a.itemList.horizontalListRenderer||null;this.Wh();this.gh.clear();a=g.q(a&&a.items||[]);for(b=a.next();!b.done;b=a.next())b=b.value.shoppingCompanionCarouselItemRenderer,c=new cQ.Xl(this.Gb,this.dm),
this.Mg.push(c),c.xj(this.gh),c.bind({renderer:b,macros:this.macros});this.show()};
g.h.Qd=function(){for(var a=this,b={},c=g.q(Object.values(vfa)),d=c.next();!d.done;b={type:b.type},d=c.next())b.type=d.value,this.gc.subscribe(b.type,function(b){return function(){return a.onClick({type:b.type})}}(b))};
g.h.jl=function(a){switch(void 0===a.type?void 0:a.type){case "companionclick":this.Gc(this.Mq);break;case "nextbuttonclick":a=this.gh;a.l=Math.min(a.A-3,a.l+1);ZP(a);break;case "prevbuttonclick":this.gh.scrollLeft();break;case "shoptextclick":this.Mo&&this.sg(this.Mo)}};
g.h.Wh=function(){g.Me(this.Mg);this.Mg=[]};
g.h.Th=function(){this.Cd&&(this.Cd.cancel(),this.Cd=null)};
g.h.R=function(){this.Th();this.Wh();LP.prototype.R.call(this)};g.r(eQ,Y);eQ.prototype.init=function(a,b,c){var d=this;b.toggledLoggingParams&&(this.B=b.toggledLoggingParams);if(b.clickCommands){var e=b.clickCommands;this.M(this.element,"click",function(){d.C.Gc(e,d.macros)})}if(b.answer&&b.answer.buttonRenderer){var f=new MO(this.g,this.l,["ytp-ad-survey-answer-button"],"survey-single-select-answer-button");
f.ca(this.A);f.init(iL("ytp-ad-survey-answer-button"),b.answer.buttonRenderer,c);f.show()}else b.answer&&b.answer.toggleButtonRenderer&&(this.o=new AP(this.g,this.l,["ytp-ad-survey-answer-toggle-button"]),this.o.ca(this.A),g.J(this,this.o),this.o.init(iL("survey-answer-button"),b.answer.toggleButtonRenderer,c));Y.prototype.init.call(this,a,b,c);this.show()};g.r(fQ,Y);fQ.prototype.init=function(a,b,c){b.answer&&b.answer.toggleButtonRenderer&&(this.o=new AP(this.g,this.l,["ytp-ad-survey-answer-toggle-button","ytp-ad-survey-none-of-the-above-button"]),this.o.ca(this.A),this.o.init(iL("survey-none-of-the-above-button"),b.answer.toggleButtonRenderer,c));Y.prototype.init.call(this,a,b,c);this.show()};g.r(gQ,MO);gQ.prototype.init=function(a,b,c){var d=!1;b.text&&(d=g.kD(b.text),d=!g.qb(d));d?MO.prototype.init.call(this,a,b,c):g.Q(Error("No submit text was present in the renderer."),"WARNING")};
gQ.prototype.onClick=function(a){this.P("r");MO.prototype.onClick.call(this,a)};g.r(hQ,Y);
hQ.prototype.init=function(a,b,c){this.A=c;var d=b.skipOrPreviewRenderer;if(d)if(d.skipAdRenderer){d=d.skipAdRenderer;var e=new nP(this.g,this.l,this.C,this.O);e.ca(this.I);e.init(iL("skip-button"),d,this.A);g.J(this,e);this.o=e}else d.adPreviewRenderer&&(d=d.adPreviewRenderer,e=new kP(this.g,this.l,this.C),e.ca(this.I),e.init(iL("ad-preview"),d,this.A),g.J(this,e),this.o=e);null==this.o&&g.Q(Error("ISAPOR.skipOrPreviewRenderer was not initialized properly.ISAPOR: "+JSON.stringify(b)));b.brandInteractionRenderer&&
(d=b.brandInteractionRenderer.brandInteractionRenderer,e=new CP(this.g,this.l),e.ca(this.L),e.init(iL("instream-user-sentiment"),d,this.macros),g.J(this,e));b.submitButton&&(d=b.submitButton,d.buttonRenderer&&(d=d.buttonRenderer,e=new gQ(this.g,this.l),e.ca(this.V),e.init(iL("survey-submit"),d,this.A),g.J(this,e),this.B=e));if(d=b.adBadgeRenderer)d=d.simpleAdBadgeRenderer,e=new DP(this.g,this.l),e.ca(this.F),e.init(iL("simple-ad-badge"),d,this.A),g.J(this,e);if(d=b.adDurationRemaining)d=d.adDurationRemainingRenderer,
e=new sP(this.g,this.l,this.C),e.ca(this.F),e.init(iL("ad-duration-remaining"),d,this.A),g.J(this,e);(d=b.adInfoOverlay)&&d.adInfoOverlayRenderer&&(e=new zP(this.g,this.l,this.element),g.J(this,e),e.ca(this.F),e.init(iL("ad-info-overlay"),d.adInfoOverlayRenderer,this.macros));Y.prototype.init.call(this,a,b,c);this.show()};g.r(iQ,Y);iQ.prototype.init=function(a,b,c){Y.prototype.init.call(this,a,b,c);kea(this)};
iQ.prototype.show=function(){this.F=(0,g.G)();Y.prototype.show.call(this)};
iQ.prototype.Nv=function(){};
iQ.prototype.Xk=function(a){a instanceof eN&&a.g&&this.o.start()};g.r(lQ,iQ);g.h=lQ.prototype;g.h.init=function(a,b,c){var d=this;iQ.prototype.init.call(this,a,b,c);b.questionText&&g.Rd(this.V,g.kD(b.questionText));b.answers&&b.answers.forEach(function(a){a.instreamSurveyAdAnswerRenderer&&jQ(d,a.instreamSurveyAdAnswerRenderer,c)});
this.L=new window.Set(this.B.map(function(a){return a.o.o}));
(a=b.noneOfTheAbove)&&(a=a.instreamSurveyAdAnswerNoneOfTheAboveRenderer)&&lea(this,a,c);b.surveyAdQuestionCommon?kQ(this,b.surveyAdQuestionCommon):g.Q(Error("SurveyAdQuestionCommon was not sent.MultiSelectQuestionRenderer: "+JSON.stringify(b)));b.submitEndpoints&&(this.aa=b.submitEndpoints);this.M(this.element,"change",this.AE);this.show()};
g.h.Nv=function(){mQ(this,!1);this.I.B.subscribe("r",this.YH,this)};
g.h.AE=function(a){this.o&&this.o.stop();a.target==this.A.o.o?mea(this):this.L.has(a.target)&&(this.A.o.toggleButton(!1),mQ(this,!0))};
g.h.YH=function(){var a=this.B.reduce(function(a,b){var c=b.B;b.o&&b.o.isToggled()&&c&&a.push(c);return a},[]).join("&"),b=this.aa.map(function(b){if(!b.loggingUrls)return b;
b=g.ic(b);b.loggingUrls=b.loggingUrls.map(function(b){b.baseUrl&&(b.baseUrl=Vg(b.baseUrl,a));return b});
return b});
b&&this.C.Gc(b,this.macros)};
g.h.clear=function(){this.dispose()};g.r(nQ,iQ);nQ.prototype.init=function(a,b,c){var d=this;iQ.prototype.init.call(this,a,b,c);b.questionText&&g.Rd(this.V,g.kD(b.questionText));b.answers&&b.answers.forEach(function(a){a.instreamSurveyAdAnswerRenderer&&jQ(d,a.instreamSurveyAdAnswerRenderer,c)});
b.surveyAdQuestionCommon?kQ(this,b.surveyAdQuestionCommon):g.Q(Error("SurveyAdQuestionCommon was not sent.SingleSelectQuestionRenderer: "+JSON.stringify(b)));this.show()};
nQ.prototype.clear=function(){this.dispose()};g.r(oQ,Y);
oQ.prototype.init=function(a,b,c,d){var e=this;null!=d&&d instanceof eN&&(b.titleText&&g.Rd(this.C,g.kD(b.titleText)),b.questions.forEach(function(a){if(a.instreamSurveyAdSingleSelectQuestionRenderer){a=a.instreamSurveyAdSingleSelectQuestionRenderer;var b=new nQ(e.g,e.l,e.A,d.g);b.ca(e.B);b.init(iL("survey-question-single-select"),a,c);e.o.push(b);g.J(e,b)}else a.instreamSurveyAdMultiSelectQuestionRenderer&&(a=a.instreamSurveyAdMultiSelectQuestionRenderer,b=new lQ(e.g,e.l,e.A,d.g),b.ca(e.B),b.init(iL("survey-question-multi-select"),
a,c),e.o.push(b),g.J(e,b))}),Y.prototype.init.call(this,a,b,c),this.show())};
oQ.prototype.Xk=function(a){this.o.forEach(function(b){return b.Xk(a)})};
oQ.prototype.clear=function(){this.hide();this.dispose()};g.r(pQ,Y);
pQ.prototype.init=function(a,b,c){var d=this;Y.prototype.init.call(this,a,b,c);a=b.timeoutSeconds||0;if(!g.va(a)||0>a)g.Q(Error("timeoutSeconds was specified incorrectly in SurveyTextInterstitialRenderer with a value of: "+a));else if(b.timeoutCommands)if(b.text)if(b.ctaButton&&b.ctaButton.buttonRenderer)if(b.brandImage)if(b.backgroundImage&&b.backgroundImage.thumbnailLandscapePortraitRenderer&&b.backgroundImage.thumbnailLandscapePortraitRenderer.landscape){qQ(this.L,b.backgroundImage.thumbnailLandscapePortraitRenderer.landscape);qQ(this.I,
b.brandImage);g.Rd(this.V,g.kD(b.text));this.o=new MO(this.g,this.l,["ytp-ad-survey-interstitial-action-button"]);g.J(this,this.o);this.o.ca(this.F);this.o.init(iL("button"),b.ctaButton.buttonRenderer,c);this.o.show();var e=b.timeoutCommands;this.C=new $O(1E3*a);this.C.subscribe("p",function(){d.B.hide();d.A.Gc(e,c)});
g.J(this,this.C);this.M(this.element,"click",function(a){var c={adLifecycleCommand:{action:"START_LINEAR_AD"}},e=[c];b.dismissCommands&&b.dismissCommands.length&&(e=b.dismissCommands);var f=a.target==d.O;a=d.o.element.contains(a.target);if(f||a)d.B.hide(),f?d.A.Gc(e,d.macros):a&&d.A.Gc([c],d.macros)});
this.B.show(100);b.impressionCommands&&this.A.Gc(b.impressionCommands,c)}else g.Q(Error("SurveyTextInterstitialRenderer has no landscape background image."));else g.Q(Error("SurveyTextInterstitialRenderer has no brandImage."));else g.Q(Error("SurveyTextInterstitialRenderer has no button."));else g.Q(Error("SurveyTextInterstitialRenderer has no text."));else g.Q(Error("timeoutSeconds was specified yet no timeoutCommands where specified"))};
pQ.prototype.clear=function(){g.Tt(this.ea);this.hide()};g.r(rQ,g.R);g.h=rQ.prototype;g.h.wr=function(){return 1E3*this.g.Bc(2)};
g.h.stop=function(){this.o&&this.l.Qa(this.o)};
g.h.vE=function(){var a=this.g.Qf(2);this.A={seekableStart:a.seekableStart,seekableEnd:a.seekableEnd,current:a.current};this.P("q")};
g.h.Ah=function(){return this.A};
g.h.uE=function(a){0<CE(a,2)&&this.P("p")};g.r(tQ,g.Rt);tQ.prototype.F=function(a){if(Array.isArray(a)){a=g.q(a);for(var b=a.next();!b.done;b=a.next())b=b.value,b instanceof kL&&this.l(b)}};var xfa=["pla-shelf","shopping-companion","backfill-mpu-companion","action-companion"];g.r(uQ,tQ);uQ.prototype.l=function(a){var b=a.id,c=a.content,d=c.componentType;if(xfa.includes(d)){var e=this.A();this.o||(this.o=new JL(e));switch(a.actionType){case 1:if(this.g.has(b))break;a=sQ(d,this.Gb,e,this.o);if(!a){Wr(Error("Unable to create component with type: "+d));break}this.g.set(b,a);case 2:b=this.g.get(b);if(!b)break;b.bind(c);break;case 3:if(c=this.g.get(b))c.dispose(),this.g["delete"](b)}}};
uQ.prototype.R=function(){g.Me([].concat(g.pa(this.g.values())))};g.r(vQ,tQ);
vQ.prototype.l=function(a){var b=a.content;switch(b.componentType){case "pla-shelf":switch(a.actionType){case 1:case 2:this.Gb.ka("onPlaShelfInfoCardsReady",{renderer:b.renderer,macros:b.macros});break;case 3:this.Gb.ka("onPlaShelfInfoCardsReady",{})}break;case "shopping-companion":switch(a.actionType){case 1:case 2:a=this.Gb.Y(1);this.Gb.ka("updatekevlarcompanion",{contentVideoId:a&&a.videoId,shoppingCompanionCarouselRenderer:b.renderer,macros:b.macros});break;case 3:this.Gb.ka("updatekevlarcompanion",{})}break;
case "action-companion":switch(a.actionType){case 1:case 2:a=this.Gb.Y(1);this.Gb.ka("updatekevlarcompanion",{contentVideoId:a&&a.videoId,actionCompanionRenderer:Ida(b),macros:b.macros});break;case 3:this.Gb.ka("updatekevlarcompanion",{})}break;case "backfill-mpu-companion":switch(a.actionType){case 1:case 2:if(!b.renderer)break;a=this.Gb.Y(1);a={contentVideoId:a&&a.videoId,backfillMpuCompanionAdRenderer:b.renderer};if("BACKFILL_MPU_TYPE_AFV"==b.renderer.type)ML(b.renderer.impressionEndpoints||[],
b.macros);else if("BACKFILL_MPU_TYPE_AFC"==b.renderer.type){if(!b.renderer.mpuAllowed){ML(b.renderer.noAdEndpoints||[],b.macros);break}a.afcMpu={logImpression:(0,g.A)(ML,this,b.renderer.impressionEndpoints||[],b.macros),logNoAd:(0,g.A)(ML,this,b.renderer.noAdEndpoints||[],b.macros)}}this.Gb.ka("updatekevlarcompanion",a);break;case 3:this.Gb.ka("updatekevlarcompanion",{})}}};var yfa="ad-attribution-bar ad-channel-thumbnail advertiser-name ad-preview ad-title skip-button visit-advertiser".split(" ").concat(["pla-shelf","shopping-companion","backfill-mpu-companion","action-companion"]);g.r(wQ,tQ);
wQ.prototype.l=function(a){var b=a.id,c=a.content;if(c){var d=c.componentType;if(!yfa.includes(d))switch(a.actionType){case 1:a=this.C();this.o||(this.o=new JL(a));a=sQ(d,this.A,a,this.o);if(!a){g.Q(Error("No UI component returned from ComponentFactory for type: "+d),"WARNING");break}$b(this.g,b)?g.Q(Error("Ad UI component already registered: "+b),"WARNING"):this.g[b]=a;a.bind(c);a.xj(this.B);break;case 2:b=xQ(this,a);if(null==b)break;b.bind(c);break;case 3:c=xQ(this,a),null!=c&&(g.Le(c),$b(this.g,
b)?fc(this.g,b):g.Q(Error("Ad UI component does not exist: "+b),"WARNING"))}}};
wQ.prototype.R=function(){g.Me(Object.values(this.g));this.g={};tQ.prototype.R.call(this)};g.r(yQ,g.dL);g.h=yQ.prototype;g.h.create=function(){this.load();this.created=!0};
g.h.load=function(){g.dL.prototype.load.call(this);this.g.getRootNode().classList.add("ad-created");this.l=new RN(this.g,new aL(this.g));this.l.init()};
g.h.unload=function(){g.dL.prototype.unload.call(this);this.g.getRootNode().classList.remove("ad-created");var a=this.l;this.l=null;a.dispose()};
g.h.sc=function(){return!1};
g.h.Gt=function(){return Object.values(sfa)};
g.h.Ft=function(a,b){b=void 0===b?{}:b;switch(a){case "replaceUrlMacros":var c=b;if(c.url){var d=mM(this.g);Object.assign(d,c.additionalMapping);this.l&&!d.AD_CPN&&(d.AD_CPN=this.l.to);c=g.kp(c.url,d)}else c=null;return c;case "isExternalShelfAllowedFor":a:if(b.playerResponse){c=b.playerResponse.adPlacements||[];for(d=0;d<c.length;d++){var e=c[d];if(e.adPlacementRenderer&&e.adPlacementRenderer.renderer&&e.adPlacementRenderer.renderer.plaShelfRenderer){c=!1;break a}}c=!0}else c=!1;return c;default:return null}};g.IQ={};var zfa=[2,5];var sX=!1,tX=!1;g.hu("showCompanionAdLoaded",function(){if(tX){var a=g.z("window.google_show_companion_ad");var b=g.z("yt.www.watch.ads.getGlobals");g.Ba(a)&&g.Ba(b)?(b=b(),b=!(!b||!b.length)):b=!1;b?a():tX=!0;tX=!1}});
g.hu("watchAdsInit",function(){if(sX){sX=!1;var a=g.z("yt.www.watch.ads.loadAfc");g.Ba(a)?a():sX=!0}});new function(){this.l=1;this.g=g.va(void 0)?void 0:null;if(g.Sa(zfa,this.l)){if(!g.va(this.g)||0>this.g)throw Error("Must have valid offset");}else if(null!==this.g)throw Error("Must not have offset");};g.r(EQ,g.I);g.h=EQ.prototype;g.h.Wq=function(){if(!this.l){var a=this.Wq;if("lb3"==g.W(this.g).playerStyle)var b=!1;else b=this.g.Y(),b=b.Jj||b.captionTracks.length||b.pa&&b.la&&(null!=b.la.g.en||g.Vz(b.la))?!0:!1;(a=KQ(this,"captions",a,b))&&!this.l&&(this.l=a,a.Zs()&&a.load(),this.g.ka("onApiChange"))}};
g.h.Am=function(){this.I=this.I||KQ(this,"endscreen",this.Am,g.FQ(this))};
g.h.ar=function(){var a=this.g.Y();var b=g.W(this.g).experiments,c=g.Es()&&(Bs("ps4 vr")||Bs("ps4 pro vr")),d=Fs(),e=g.T(b,"enable_mesh_cobalt"),f=g.T(b,"enable_spherical_kabuki")||a.jr,k=$B(g.W(this.g));a=a.Gd()?c||e||f||k||d||g.T(b,"html5_enable_spherical"):a.se()?k||c||f||g.T(b,"html5_enable_spherical"):a.te()?k||c||g.T(b,"html5_enable_spherical3d"):a.Bg()?k||g.T(b,"html5_enable_anaglyph3d"):k&&!g.yD(a)&&(g.T(b,"enable_webgl_noop")||g.T(b,"enable_white_noise"));this.o||(this.o=KQ(this,"webgl",
this.ar,a));this.o&&a&&this.o.load()};
g.h.dr=function(){this.T=this.T||KQ(this,"ypc",this.dr,g.FD(this.g.Y(),"ypc_module"))};
g.h.br=function(){this.V=this.V||KQ(this,"ypc_clickwrap",this.br,g.FD(this.g.Y(),"ypc_clickwrap_module"))};
g.h.Vq=function(){this.U=this.U||KQ(this,"spacecast",this.Vq,this.g.Y().spacecastModule)};
g.h.Tq=function(){this.O=this.O||KQ(this,"heartbeat",this.Tq,g.FD(this.g.Y(),"ypc_license_checker_module"))};
g.h.ym=function(){if(!this.A){var a=this.ym;var b=g.W(this.g);if("3"==b.o)b=!1;else if(b.K.isEmpty()&&"annotation-editor"!=b.playerStyle&&"live-dashboard"!=b.playerStyle){var c=this.g.Y();b=g.T(b.experiments,"disable_new_iv_module_create_logic")?g.FD(c,"iv3_module"):!!c.fe}else b=!0;if(this.A=KQ(this,"annotations_module",a,b)){a=this.A;for(var d in this.ha)b=d,a.subscribe(b,this.ha[b]);this.g.ka("onApiChange")}}};
g.h.Sq=function(){this.H=this.H||KQ(this,"fresca",this.Sq,g.FD(this.g.Y(),"fresca_module"))};
g.h.Bm=function(){this.K||(this.K=KQ(this,"remote",this.Bm,g.W(this.g).zb))&&this.K.create()};
g.h.Xq=function(){this.C||(this.C=KQ(this,"unplugged",this.Xq,g.VB(g.W(this.g))))&&this.C.init()};
g.h.Yq=function(){this.L||(this.L=KQ(this,"ux",this.Yq,!0))&&this.L.init()};
g.h.Uq=function(){this.ba||(this.ba=KQ(this,"miniplayer",this.Uq,g.W(this.g).useMiniplayerUi))&&this.ba.init()};
g.h.zm=function(){if(!this.F){var a=this.zm;var b=g.W(this.g);"3"==b.o?b=!1:"creator-endscreen-editor"==b.playerStyle?b=!0:(b=this.g.Y(),b=!!b&&!!g.JD(b));(this.F=KQ(this,"creatorendscreen",a,b))&&this.g.ka("onApiChange")}};
g.h.R=function(){g.I.prototype.R.call(this);LQ(this,!0)};g.r(MQ,g.R);g.h=MQ.prototype;g.h.zD=function(a){a=Kt(a);if(!ed(a,this.A)){var b=2;this.C&&(b|=8);this.A=a;this.yb(b,!0)}};
g.h.DE=function(){this.C&&this.yb(8,!0);this.yb(2,!1)};
g.h.yo=function(a){var b=Kt(a);ed(b,this.A)||(this.A=b,(a=g.Ht(a))&&this.O(a)&&(this.yb(4,!0),this.ea.Qa(this.o),this.o=this.ea.M(this.l,"mouseover",this.au),this.K=this.ea.M(this.l,"mouseout",this.au)))};
g.h.au=function(a){a=Jt(a);a&&this.O(a)||(this.A=new g.dd(window.NaN,window.NaN),NQ(this))};
g.h.AA=function(){this.yb(1,!0)};
g.h.nz=function(a){a=g.Ht(a);a instanceof window.Element&&!(0<a.tabIndex)||this.yb(1,!0)};
g.h.Zt=function(){this.C=!0;this.ea.Qa(this.B);this.B=this.ea.M(window.document,"mouseup",this.AD)};
g.h.AD=function(){this.C=!1;this.yb(8,!1);this.ea.Qa(this.B);this.B=this.ea.M(this.l,"mousedown",this.Zt)};
g.h.bu=function(a){if(a=(a=a.changedTouches)&&a[0])this.U=a.identifier,this.ea.Qa(this.F),this.F=this.ea.M(this.l,"touchend",this.BD,void 0,!0),this.yb(1024,!0)};
g.h.BD=function(a){if(a=a.changedTouches)for(var b=0;b<a.length;b++){var c=a[b];if(c.identifier==this.U){var d=c;break}}d&&(this.ea.Qa(this.F),this.F=this.ea.M(this.l,"touchstart",this.bu,void 0,!0),this.yb(1024,!1))};
g.h.yb=function(a,b){var c=!this.g;b?(this.g|=a,a&1&&this.H.start(),a&2&&this.I.start()):(this.g&=~a,a&1&&this.H.stop(),a&2&&this.I.stop(),a&512&&this.L.stop());this.g&512&&!(this.g&128)&&g.zq(this.L,this.T);var d=!this.g;c!=d&&this.P("autohideupdate",d)};
g.h.toString=function(){var a=[],b;for(b in uX)this.g&uX[b]&&a.push(b);return"yt.player.ux.AutohideBlock<"+a.join(",")+">"};
var uX={cL:1,NL:2,qL:4,UK:8,ZL:16,TK:32,MK:64,UL:128,uM:256,SL:512,UM:1024};g.r(g.OQ,g.U);g.OQ.prototype.show=function(){g.U.prototype.show.call(this);g.zq(this.g)};
g.OQ.prototype.hide=function(){this.l.stop();g.U.prototype.hide.call(this)};g.r(UQ,g.U);g.h=UQ.prototype;g.h.show=function(){var a=this;this.Na()||(this.A.M(this.g,"videodatachange",function(){return g.zq(a.l)}),this.A.M(this.g,"videoplayerreset",function(){return g.zq(a.l)}));
g.U.prototype.show.call(this)};
g.h.hide=function(){this.A&&g.Tt(this.A);g.U.prototype.hide.call(this)};
g.h.LD=function(a){var b=g.W(this.g);g.T(b.experiments,"disable_new_pause_state3")&&WB(b)&&(a=wE(a.state)&&!wE(a.g)||AK(this.g)&&g.V(a.state,2),g.wh(this.element,"transition-delay",a?"2s":""));g.zq(this.l)};
g.h.FI=function(){g.zq(this.l)};
g.h.KD=function(){this.o.stop();this.hide();g.zq(this.l)};
g.h.eu=function(){var a=g.yK(this.g);if(3==this.g.Ga()&&(g.vE(a)||g.V(a,4)))var b=!0;else(b=g.sK(this.g).T)&&b.rJ()?b=!0:(b=g.W(this.g),b=g.V(a,2)&&uK(this.g)&&b.ha?!0:!1);b?(b=!0,window.document.activeElement==this.B&&this.g.getRootNode().focus(),this.B.style.display="none"):(this.B.style.display="",wE(a)&&2!=this.g.Ga()?b=!0:(b=!g.T(g.W(this.g).experiments,"disable_new_pause_state3"),b=!(!g.V(a,2)||uK(this.g)||b&&g.hW(this.g.app))||g.V(a,1024)?!0:!1));b?(this.o.show(),this.MJ(this.g.Be(),this.g.Y())):
(this.o.hide(),g.V(a,1)||this.o.stop())};
g.h.MJ=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];c=g.W(this.g);b=g.q(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,!(!d||d instanceof g.mD&&!d.videoId)){var e=g.zK(this.g).Fa();var f=g.XB(),k=e.width*f;f*=e.height;if(1280<k||720<f)if(e=d.xc(c,"maxresdefault.jpg"))break;if(640<k||480<f)if(e=d.xc(c,"maxresdefault.jpg"))break;if(320<k||180<f)if(e=d.xc(c,"sddefault.jpg")||d.xc(c,"hqdefault.jpg")||d.xc(c,"mqdefault.jpg"))break;if(e=d.xc(c,"default.jpg"))break}this.C.style.backgroundImage=
e?"url("+e+")":""};g.r(WQ,g.U);WQ.prototype.show=function(){g.U.prototype.show.call(this);this.F()};
WQ.prototype.F=function(){var a=1-1/1.5;this.o=(this.o+this.K)%(this.width*a);this.A=(this.A+this.I)%(this.height*a);this.l.drawImage(this.H,-1*this.o,-1*this.A);this.l.fillRect(0,this.B,this.width,75);this.B=(this.B+75+7)%this.height-75;this.g.isActive()||g.zq(this.C)};
WQ.prototype.hide=function(){this.g.stop();this.C.stop();g.U.prototype.hide.call(this)};g.r(ZQ,g.U);ZQ.prototype.show=function(){g.U.prototype.show.call(this);$Q(this,function(a){a.show()})};
ZQ.prototype.hide=function(){g.U.prototype.hide.call(this);$Q(this,function(a){a.hide()})};
ZQ.prototype.A=function(a){if(g.AQ(a,this.g,!WB(g.W(this.g)))){a={as3:!1,html5:!0,player:!0,cpn:this.g.Y().clientPlaybackNonce};var b=this.g;b.ka("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:a});b.isFullscreen()&&g.CK(b)}};
var Afa=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.r(cR,g.Rt);cR.prototype.C=function(){this.B();var a=g.W(this.g),b=this.g.Y(),c=[];a.H||c.push({src:b.xc(a,"mqdefault.jpg"),sizes:"320x180"});this.l.metadata=new window.MediaMetadata({title:b.title,artist:b.author,artwork:c});a=AK(this.g);this.o.has("nexttrack")!=a&&(c=b=null,a&&(b=(0,g.A)(function(){PQ(this.A,zO(),g.S("YTP_NEXT"));this.g.wh()},this),c=(0,g.A)(function(){TQ(this.A);
this.g.Gi()},this)),bR(this,"nexttrack",b),bR(this,"previoustrack",c))};
cR.prototype.B=function(){var a=g.yK(this.g);a=a.isError()?"none":pE(a)?"playing":"paused";this.l.playbackState=a};
cR.prototype.R=function(){this.l.playbackState="none";this.l.metadata=null;for(var a=g.q(this.o),b=a.next();!b.done;b=a.next())bR(this,b.value,null);g.Rt.prototype.R.call(this)};g.r(dR,g.U);dR.prototype.O=function(a,b){eR(this,b);this.B&&fR(this,this.B)};
dR.prototype.L=function(a){var b=this.I.Y();this.l!=b.videoId&&eR(this,b);this.g&&fR(this,a.state);this.B=a.state};
dR.prototype.K=function(){this.A.hide();this.l&&(this.o[this.l]=(this.o[this.l]||0)+((0,g.G)()-this.F));this.F=0};var Bfa=/fidget ?spinner/i;g.r(iR,g.U);g.h=iR.prototype;g.h.hide=function(){this.l.stop();this.A.style.display="none";g.U.prototype.hide.call(this)};
g.h.Mu=function(){gR(this,Bfa.test(this.g.Y().title))};
g.h.kE=function(a){hR(this,a.state)};
g.h.VF=function(){hR(this,g.yK(this.g))};
g.h.fH=function(){this.A.style.display="block"};g.r(jR,g.ww);g.h=jR.prototype;g.h.show=function(){var a=lR(this);g.ww.prototype.show.call(this);this.aa&&(this.H.M(window,"blur",this.qb),this.H.M(window.document,"click",this.LF));a||this.P("show",!0)};
g.h.hide=function(){var a=lR(this);g.ww.prototype.hide.call(this);kR(this);a&&this.P("show",!1)};
g.h.Kd=function(a,b){this.A=a;this.K.show();b?(this.I||(this.I=this.H.M(this.V,"appresize",this.qq)),this.qq()):this.I&&(this.H.Qa(this.I),this.I=null);a&&(a.getAttribute("aria-haspopup"),a.setAttribute("aria-expanded",!0),window.document.activeElement&&g.Qd(a,window.document.activeElement)&&this.focus())};
g.h.qq=function(){g.Kw(this.V).nl(this.element,this.A)};
g.h.qb=function(){var a=lR(this);kR(this);this.K.hide();a&&this.P("show",!1)};
g.h.fg=function(a,b){lR(this)?this.qb():this.Kd(a,b)};
g.h.LF=function(a){var b=It(a);b&&(g.Qd(this.element,b)||this.A&&g.Qd(this.A,b)||!g.rP(a))||this.qb()};g.r(nR,jR);nR.prototype.B=function(a){a?(mR(this),this.Kd()):(this.l&&oR(this),this.qb())};
nR.prototype.C=function(a){this.g.app.X&&0<CE(a,2)&&this.qb()};
nR.prototype.onClick=function(){this.g.Ce();oR(this)};g.r(pR,g.Rt);g.h=pR.prototype;g.h.init=function(){var a=g.yK(this.g);this.Al(a);this.Wg();this.Ni()};
g.h.cu=function(a,b){if(this.Ca!=b.videoId){this.Ca=b.videoId;var c=this.o;c.T=b&&0<b.lg.length?5E3:3E3;c.yb(512,!0);this.Wg()}};
g.h.gH=function(){this.cu("newdata",this.g.Y())};
g.h.Fh=function(){var a=g.HK(this.g)&&g.IK(this.g);qR(this);(a=this.bb||a)||(a=g.sK(this.g).H,a=!!a&&a.sB());return a||this.jb||qR(this)};
g.h.hg=function(){var a=!this.Fh();g.O(this.g.getRootNode(),"ytp-menu-shown",!a)};
g.h.CD=function(a){if(!g.Qd(this.g.getRootNode(),a))return!1;for(;a&&!g.Ud(a);)a=a==this.g.getRootNode()?null:g.Pd(a);return!!a};
g.h.To=function(a){var b=this.g.getRootNode();g.O(b,"ytp-autohide",a);g.O(b,"ytp-autohide-active",!0);this.Wa.start(a?250:100);a&&(this.Ua=!1,g.qq(b,"ytp-touch-mode"));b=this.g;a=!a;b.ka("onVideoAreaChange");b.ka(a?"onShowControls":"onHideControls")};
g.h.gF=function(){if(!g.T(g.W(this.g).experiments,"web_player_edge_autohide_killswitch3")){var a=this.g.getRootNode();g.O(a,"ytp-autohide-active",!1)}};
g.h.JH=function(a){var b=lR(this.da);g.sl&&sR(this,a)?b&&g.Lt(a):(wE(g.yK(this.g))&&!g.W(this.g).Oa&&(b=this.g.Y(),b.videoId&&this.g.ko(ID(b))),this.o.g||rR(this,It(a))||lR(this.da)||(g.yK(this.g),g.Lt(a)),this.Ua=!0,g.M(this.g.getRootNode(),"ytp-touch-mode"),this.o.yb(2,!0))};
g.h.FH=function(a){sR(this,a)||rR(this,It(a))||(this.o.yb(2,!0),g.rP(a)&&!g.W(this.g).L&&(this.Xj()?g.Lt(a):(a=g.yK(this.g),g.V(a,2)&&uK(this.g)||QQ(this.C,!pE(a)),!g.W(this.g).ma||wE(a)||g.V(a,1024)?this.zo():this.X.isActive()?(this.C.hide(),this.X.stop()):this.X.start())))};
g.h.zo=function(){var a=g.yK(this.g);g.V(a,2)&&uK(this.g)||(pE(a)?this.g.Wb():this.g.Vc())};
g.h.GH=function(a){rR(this,It(a))||3!=this.g.Ga()&&g.CK(this.g)};
g.h.HH=function(a){tR(this,.3,a.scale);g.Lt(a)};
g.h.IH=function(a){tR(this,.1,a.scale)};
g.h.Ni=function(){var a=this.Ic(),b=g.zK(this.g).Fa(),c=this.g.isFullscreen(),d=this.g.getRootNode(),e=!a&&(480>b.width||290>b.height);g.Ky&&NQ(this.o);g.O(d,"ytp-fullscreen",c);g.O(d,"ytp-small-mode",e);g.O(d,"ytp-big-mode",a);this.B&&YQ(this.B,b)};
g.h.iH=function(a){this.Al(a.state);this.Wg()};
g.h.Wg=function(){var a=!!this.Ca&&!g.tK(this.g);var b=2==this.g.Ga(),c=g.W(this.g);b?(b=g.sK(this.g).B,a&&(null==b.l?a=!1:(a=b.l,a=(b=a.g.Y(2))?b.isListed&&!a.I:!1))):a=(g.T(c.experiments,"embed_api_deprecation")||c.Ja)&&c.B&&5==this.g.app.T?a:a&&(c.Oc||this.g.isFullscreen());this.K!=a&&(this.K=a,g.O(this.g.getRootNode(),"ytp-hide-info-bar",!a))};
g.h.Al=function(a){var b=wE(a);b!=this.Yb&&(this.Yb=b,this.Va&&this.Qa(this.Va),this.Va=this.M(g.zK(this.g),"touchstart",this.JH,void 0,b));this.o.yb(128,!(g.vE(a)&&!g.V(a,32)||KK(this.g)));var c=3==this.g.Ga();this.o.yb(256,c);c=this.g.getRootNode();if(g.V(a,2))var d=["ended-mode"];else d=[],g.V(a,8)?d.push("playing-mode"):g.V(a,4)&&d.push("paused-mode"),g.V(a,1)&&!g.V(a,32)&&d.push("buffering-mode"),g.V(a,32)&&d.push("seeking-mode"),g.V(a,64)&&d.push("unstarted-mode");g.kb(this.ma,d)||(g.rq(c,this.ma),
this.ma=d,g.pq(c,d));d=g.W(this.g);var e=g.V(a,2);g.O(c,"ytp-hide-controls",("3"==d.o?!e:"1"!=d.o)||b);g.O(c,"ytp-native-controls","3"==d.o&&!b&&!e);if(g.V(a,128)){this.B||(this.B=new ZQ(this.g),g.J(this,this.B),g.TK(this.g,this.B.element,4));b=this.B;a=a.g;for(c=0;c<b.o.length;c++)b.Qa(b.o[c]);b.o=[];c=a.messageKey;d=g.W(b.g);"play"!=d.playerStyle||"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c&&"YTP_ERROR_UNSUPPORTED_DEVICE"!=c||(c="YTP_HTML5_FLASH_DEPRECATED");if("YTP_ERROR_GENERIC_WITHOUT_LINK"!=
c||d.Sb)if("YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c||d.Sb)if("YTP_HTML5_FLASH_DEPRECATED"==c)b.sb(aR(b,c,"//support.google.com/googleplay/answer/2844198#movies",!1,!0,"YTP_ERROR_VIDEO_UNAVAILABLE"));else{a=a.message.split(Afa);c=[];for(d=0;d<a.length;d+=3){e=a[d++].split("\n");c.push(e[0]);for(var f=1;f<e.length;f++)c.push({D:"br"}),c.push(e[f]);d<a.length&&c.push({D:"a",N:{href:a[d],target:a[d+1]},G:[a[d+2]]})}b.sb({D:"span",G:c})}else b.sb(aR(b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",
"//www.youtube.com/html5"));else if(b.sb(aR(b,"YTP_ERROR_GENERIC_WITH_LINK_AND_CPN","//support.google.com/youtube/?p=player_error1",!0)),d.aa&&!d.l)for(a=(0,g.A)(b.A,b),c=b.element.getElementsByTagName("a"),d=0;d<c.length;d++)e=b.M(c[d],"click",a),b.o.push(e);this.B.show()}else this.B&&(this.B.dispose(),this.B=null)};
g.h.Xj=function(){return g.HK(this.g)&&g.IK(this.g)?(this.g.Ji(!1,!1),!0):g.tK(this.g)?(g.vK(this.g,!0),!0):!1};
g.h.DD=function(a){this.jb=a;this.hg()};
g.h.Ic=function(){return!1};
g.h.qh=function(){return this.Ua};
g.h.Kk=function(){return null};
g.h.Yn=function(){var a=g.zK(this.g).Fa();return new g.hh(0,0,a.width,a.height)};
g.h.Zn=function(){};
g.h.nl=function(){};
g.h.Lk=function(){};
g.h.ao=function(){};g.r(vR,g.U);vR.prototype.R=function(){this.l&&this.l();g.U.prototype.R.call(this)};
vR.prototype.F=function(){g.ku("iv-button-mouseover")};
vR.prototype.C=function(a){g.HK(this.g);var b=g.oq(this.g.getRootNode(),"ytp-cards-teaser-shown");g.ku("iv-teaser-clicked",b);a=0==a.screenX&&0==a.screenY;this.g.Ji(!g.IK(this.g),a,"YOUTUBE_DRAWER_MANUAL_OPEN")};g.r(xR,g.U);g.h=xR.prototype;g.h.Yw=function(){g.HK(this.l)&&g.IK(this.l)&&this.Na()&&3!=this.B.g&&this.Oi()};
g.h.wJ=function(){this.Oi();g.ku("iv-teaser-clicked",!!this.g);this.l.Ji(!0,!1,"YOUTUBE_DRAWER_MANUAL_OPEN")};
g.h.ED=function(){g.ku("iv-teaser-mouseover");this.g&&this.g.stop()};
g.h.aI=function(a){this.g||!a||g.IK(this.l)||this.o&&this.o.isActive()||(pea(this,a),g.ku("iv-teaser-shown"))};
g.h.du=function(){this.F.stop();this.g&&this.g.isActive()&&this.H.start()};
g.h.Wf=function(){this.H.stop();this.g&&!this.g.isActive()&&this.F.start()};
g.h.OG=function(){this.g&&this.g.stop()};
g.h.LG=function(){this.Oi()};
g.h.Oi=function(){!this.g||this.A&&this.A.isActive()||(this.B.hide(),g.qq(this.l.getRootNode(),"ytp-cards-teaser-shown"),this.A=new g.P(function(){for(var a=g.q(this.C),b=a.next();!b.done;b=a.next())this.Qa(b.value);this.C=[];this.g&&(this.g.dispose(),this.g=null);uR(this.I,!0)},330,this),this.A.start())};
g.h.R=function(){var a=this.l.getRootNode();a&&g.qq(a,"ytp-cards-teaser-shown");g.Me(this.o,this.A,this.g);g.U.prototype.R.call(this)};g.r(yR,g.ww);yR.prototype.ha=function(){this.P("size-change")};
yR.prototype.focus=function(){this.V.focus()};
yR.prototype.ma=function(){this.P("back")};g.r(g.zR,yR);g.zR.prototype.X=function(){this.C.P("size-change")};
g.zR.prototype.focus=function(){for(var a=0,b=0;b<this.Ba.length;b++)if("true"==this.Ba[b].element.getAttribute("aria-checked")){a=b;break}this.Ba[a].focus()};g.r(g.DR,jR);g.h=g.DR.prototype;g.h.show=function(){jR.prototype.show.call(this);this.ej()};
g.h.hide=function(){jR.prototype.hide.call(this);1<this.g.length&&g.IR(this)};
g.h.ej=function(){JR(this);this.Na()&&(FR(this),g.Rh(this.element,this.size))};
g.h.Od=function(){var a=this.g.pop(),b=ER(this);GR(this,a,b,!0)};
g.h.sJ=function(a,b,c){this.C.dispose();this.C=null;g.M(this.element,"ytp-popup-animating");c?(g.M(a.element,"ytp-panel-animate-forward"),g.qq(b.element,"ytp-panel-animate-back")):(g.M(a.element,"ytp-panel-animate-back"),g.qq(b.element,"ytp-panel-animate-forward"));g.Rh(this.element,this.size);this.B=new g.P(g.B(this.WE,a,b),250,this);this.B.start()};
g.h.WE=function(a){g.qq(this.element,"ytp-popup-animating");g.uw(a);g.rq(a.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);this.B.dispose();this.B=null};
g.h.TD=function(a){if(!g.Mt(a))switch(g.Nt(a)){case 27:this.qb();g.Lt(a);break;case 37:1<this.g.length&&this.Od();g.Lt(a);break;case 39:g.Lt(a)}};
g.h.focus=function(){ER(this).focus()};
g.h.R=function(){jR.prototype.R.call(this);this.C&&this.C.dispose();this.B&&this.B.dispose()};g.r(KR,g.yw);KR.prototype.g=function(a){g.Mt(a)||39!=g.Nt(a)||(this.element.click(),g.Lt(a))};g.r(MR,g.yw);MR.prototype.I=function(){NR(this,!this.l);this.P("select",this.l)};
MR.prototype.getValue=function(){return this.l};g.r(RR,g.zR);g.h=RR.prototype;g.h.EF=function(){DQ(this.H.element)};
g.h.XF=function(){SR(this,this.g.Di(!0))&&PQ(this.L,pO())};
g.h.YF=function(){SR(this,this.g.jt())&&PQ(this.L,g.nO?{D:"div",W:["ytp-icon","ytp-icon-code"]}:{D:"svg",N:{height:"100%",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",N:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]});g.XK(this.g,this.l.element);OR("EMBED",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.bG=function(){SR(this,this.g.getVideoUrl(!0,!0))&&PQ(this.L,yO());g.XK(this.g,this.A.element);OR("COPY_PASTE",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.aG=function(){SR(this,this.g.getVideoUrl(!1,!0))&&PQ(this.L,yO());g.XK(this.g,this.o.element);OR("COPY_PASTE",this.g.Y().videoId,this.g.getPlaylistId()||void 0)};
g.h.rG=function(a){NR(this.B,a)};
g.h.sG=function(){var a=this.B.getValue();NV(this.g.app,a);this.K.qb();g.XK(this.g,this.B.element)};
g.h.zH=function(a){var b=g.X(this.g.app);b&&b.uh(new g.cC("feedback",!1,{gpu:(0,g.AE)()}));if(g.AQ(a,this.g,!WB(g.W(this.g)))){a=this.g;b=b={as3:!1,html5:!0,player:!0};var c=a.Ir().debug_error;c&&(b.player_error=c.errorCode,b.player_error_details=c.errorDetail);b.debug_text=a.Di(!0);a.ka("onFeedbackStartRequest",b);a.isFullscreen()&&g.CK(a)}this.K.qb()};
g.h.RH=function(){this.g.ot();this.K.qb()};
g.h.ID=function(a,b){QR(this,b)};g.r(VR,g.DR);g.h=VR.prototype;g.h.show=function(){this.F||(this.F=new RR(this.l,this.da,this,this.X),g.J(this,this.F),g.HR(this,this.F));g.DR.prototype.show.call(this);g.YK(this.l,this.element,!0);TR(this.F,!0)};
g.h.hide=function(){UR(this);g.DR.prototype.hide.call(this);g.YK(this.l,this.element,!1);this.F&&TR(this.F,!1)};
g.h.DF=function(a){var b=It(a);this.Na()||b&&(g.Wd(b,"a")||g.Xd(b,"ytp-no-contextmenu"))||(g.Lt(a),WR(this),this.element.style.left="",this.element.style.top="",a=Kt(a),a.x++,a.y++,this.Kd(),b=g.Lh(window.document.body),a=g.Rq(a,this.size,0,void 0,b,5),g.Eh(this.element,g.mh(a.rect)),g.Tt(this.o),this.o.M(window.document,"contextmenu",this.MF),this.o.M(this.l,"fullscreentoggled",this.JD),this.o.M(this.l,"pageTransition",this.ZG))};
g.h.MF=function(a){g.Mt(a)||(g.Qd(this.element,It(a))||this.qb(),g.W(this.l).disableNativeContextMenu&&g.Lt(a))};
g.h.JD=function(){this.qb();WR(this)};
g.h.ZG=function(){this.qb()};var vX,wX;vX=[{option:"#fff",message:"YTP_COLOR_WHITE"},{option:"#ff0",message:"YTP_COLOR_YELLOW"},{option:"#0f0",message:"YTP_COLOR_GREEN"},{option:"#0ff",message:"YTP_COLOR_CYAN"},{option:"#00f",message:"YTP_COLOR_BLUE"},{option:"#f0f",message:"YTP_COLOR_MAGENTA"},{option:"#f00",message:"YTP_COLOR_RED"},{option:"#080808",message:"YTP_COLOR_BLACK"}];wX=[{option:0,text:"0%"},{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}];
g.$R=[{option:"fontFamily",message:"YTP_FONT_FAMILY",options:[{option:1,message:"YTP_FONT_FAMILY_MONO_SERIF"},{option:2,message:"YTP_FONT_FAMILY_PROP_SERIF"},{option:3,message:"YTP_FONT_FAMILY_MONO_SANS"},{option:4,message:"YTP_FONT_FAMILY_PROP_SANS"},{option:5,message:"YTP_FONT_FAMILY_CASUAL"},{option:6,message:"YTP_FONT_FAMILY_CURSIVE"},{option:7,message:"YTP_FONT_FAMILY_SMALL_CAPS"}]},{option:"color",message:"YTP_FONT_COLOR",options:vX},{option:"fontSizeIncrement",message:"YTP_FONT_SIZE",options:[{option:-2,
text:"50%"},{option:-1,text:"75%"},{option:0,text:"100%"},{option:1,text:"150%"},{option:2,text:"200%"},{option:3,text:"300%"},{option:4,text:"400%"}]},{option:"background",message:"YTP_BACKGROUND_COLOR",options:vX},{option:"backgroundOpacity",message:"YTP_BACKGROUND_OPACITY",options:wX},{option:"windowColor",message:"YTP_WINDOW_COLOR",options:vX},{option:"windowOpacity",message:"YTP_WINDOW_OPACITY",options:wX},{option:"charEdgeStyle",message:"YTP_CHAR_EDGE_STYLE",options:[{option:0,message:"YTP_EDGE_STYLE_NONE"},
{option:4,message:"YTP_EDGE_STYLE_DROP_SHADOW"},{option:1,message:"YTP_EDGE_STYLE_RAISED"},{option:2,message:"YTP_EDGE_STYLE_DEPRESSED"},{option:3,message:"YTP_EDGE_STYLE_OUTLINE"}]},{option:"textOpacity",message:"YTP_FONT_OPACITY",options:[{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}]}];g.r(XR,g.Rt);g.h=XR.prototype;
g.h.Ur=function(a){var b=!1,c=g.Nt(a),d=It(a),e=!a.altKey&&!a.ctrlKey&&!a.metaKey,f=!1,k=!1,l=g.W(this.g);g.Mt(a)?(e=!1,k=!0):l.He&&(e=!1);if(9==c)b=!0;else{if(d)switch(c){case 32:case 13:if("BUTTON"==d.tagName||"A"==d.tagName||"INPUT"==d.tagName)b=!0,e=!1;else if(e){var m=d.getAttribute("role");!m||"option"!=m&&"button"!=m&&0!=m.indexOf("menuitem")||(b=!0,d.click(),f=!0)}break;case 37:case 39:case 36:case 35:b="slider"==d.getAttribute("role");break;case 38:case 40:m=d.getAttribute("role"),d=38==
c?d.previousSibling:d.nextSibling,"slider"==m?b=!0:e&&("option"==m?(d&&"option"==d.getAttribute("role")&&d.focus(),f=b=!0):m&&0==m.indexOf("menuitem")&&(d&&d.hasAttribute("role")&&0==d.getAttribute("role").indexOf("menuitem")&&d.focus(),f=b=!0))}if((d=g.sK(this.g).o)&&e&&!f&&d.o&&d.o.Na())switch(c){case 65:case 68:case 87:case 83:case 107:case 221:case 109:case 219:f=d.o.Rr(c)}l.Sb||!e||f||(f=String.fromCharCode(c).toLowerCase(),this.o+=f,0=="awesome".indexOf(this.o)?(f=!0,7==this.o.length&&g.sq(this.g.getRootNode(),
"ytp-color-party")):(this.o=f,f=0=="awesome".indexOf(this.o)));if(e&&!f){switch(c){case 32:l.L||(k=!pE(g.yK(this.g)),QQ(this.l,k),k?this.g.Vc():this.g.Wb(),k=f=!0);break;case 37:this.g.Ac()&&(PQ(this.l,FO()),this.g.Hd(-5*this.g.kc()),k=f=!0);break;case 39:this.g.Ac()&&(PQ(this.l,xO()),this.g.Hd(5*this.g.kc()),k=f=!0);break;case 38:k=Math.min(this.g.Nb()+5,100);RQ(this.l,k,!1);this.g.setVolume(k);k=f=!0;break;case 40:k=Math.max(this.g.Nb()-5,0);RQ(this.l,k,!0);this.g.setVolume(k);k=f=!0;break;case 27:this.C()&&
(k=f=!0);break;case 36:this.g.Ac()&&(this.g.wb(0),k=f=!0);break;case 35:this.g.Ac()&&(this.g.wb(window.Infinity),k=f=!0)}if("3"!=l.o)switch(c){case 67:g.sK(this.g).l&&(k=this.g.Ob("captions","track"),(f=g.sK(this.g).l)&&f.Iw(),f=this.l,k=!k||k&&!k.displayName?g.S("YTP_SUBTITLES_ON"):g.S("YTP_SUBTITLES_OFF"),PQ(f,wO(),k),k=f=!0);break;case 79:aS(this,"textOpacity")&&(f=!0);break;case 87:aS(this,"windowOpacity")&&(f=!0);break;case 187:aS(this,"fontSizeIncrement",!1,!0)&&(f=!0);break;case 189:aS(this,
"fontSizeIncrement",!0,!0)&&(f=!0)}var n;48<=c&&57>=c?n=c-48:96<=c&&105>=c&&(n=c-96);null!=n&&this.g.Ac()&&(k=this.g.Qf(),this.g.wb(n/10*(k.seekableEnd-k.seekableStart)+k.seekableStart),k=f=!0)}}b&&this.rp(!0);(b||k)&&this.B.yb(2,!0);(f||e&&ZR(this,c,a.shiftKey))&&g.Lt(a);l.Za&&(a={keyCode:g.Nt(a),altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,handled:g.Mt(a),fullscreen:this.g.isFullscreen()},this.g.ka("onKeyPress",a))};
g.h.Vr=function(a){a=g.Nt(a);var b=g.sK(this.g).o;b&&b.o&&b.o.Na()&&b.o.Tr(a);9==a&&this.rp(!0)};
g.h.rp=function(a){g.O(this.g.getRootNode(),"ytp-probably-keyboard-focus",a);g.O(this.F.element,"ytp-probably-keyboard-focus",a)};
g.h.gu=function(a){g.sK(this.g).l&&this.g.Wc("captions","sampleSubtitles",a)};
g.h.R=function(){g.Bq(this.A);g.Rt.prototype.R.call(this)};g.r(dS,g.U);g.h=dS.prototype;g.h.hide=function(){g.qq(this.g.getRootNode(),"ytp-expand-pause-overlay");g.U.prototype.hide.call(this)};
g.h.uF=function(){this.V=!0;g.qq(this.g.getRootNode(),"ytp-expand-pause-overlay");this.H.focus()};
g.h.wF=function(){this.V=!1;g.M(this.g.getRootNode(),"ytp-expand-pause-overlay")};
g.h.UD=function(){fS(this,this.A-this.C)};
g.h.VD=function(){fS(this,this.A+this.C)};
g.h.yF=function(a,b){var c=this.l[a],d=c.nd;if(g.AQ(b,this.g,this.ha,d||void 0)){var e=c.Eb().videoId;c=c.getPlaylistId();g.gW(this.g.app,e,d,c,void 0,void 0,void 0)}};
g.h.WD=function(){this.Bb(g.zK(this.g).Fa())};
g.h.XD=function(a){g.V(a.state,1)||g.V(a.state,16)||g.V(a.state,32)||(g.V(a.state,4)&&!g.V(a.state,2)?this.l.length&&(this.V||(g.M(this.g.getRootNode(),"ytp-expand-pause-overlay"),eS(this)),this.O.show()):this.O.hide())};
g.h.Bb=function(a){var b=16/9,c=this.X.Ic();a=a.width-(c?136:68);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].Z["ytp-suggestion-image"];e.style.width=c+"px";e.style.height=b+"px"}this.F.element.style.height=b+"px";this.T=c;this.da=b;this.C=a;this.A=0;this.bx(0);eS(this)};
g.h.YD=function(){var a=this.g.Y();if(a.suggestions){var b=(0,g.Ld)(a.suggestions,function(a){return a&&!a.list});
this.l=(0,g.H)(b,function(a){return g.bS(a)})}else this.l.length=0;
rea(this);this.I&&this.I.update({channel:g.S("YTP_MORE_FROM_CHANNEL",{DNI_RELATED_CHANNEL:a.author})})};
g.h.bx=function(a){this.F.element.scrollLeft=-a};
g.r(cS,g.I);cS.prototype.start=function(a,b,c){this.g=a;this.H=b;this.C=c;this.F=g.yu();this.o()};
cS.prototype.o=function(){var a=g.yu()-this.F;var b=this.A;a=Pq(b,a/this.C);if(0==a)b=b.F;else if(1==a)b=b.H;else{var c=bd(b.F,b.B,a),d=bd(b.B,b.C,a);b=bd(b.C,b.H,a);c=bd(c,d,a);d=bd(d,b,a);b=bd(c,d,a)}b=g.$c(b,0,1);this.B((this.H-this.g)*b+this.g);1>b&&this.l.start()};g.r(gS,g.U);gS.prototype.l=function(a){g.AQ(a,this.g)&&this.g.kt(this.Pa)};g.r(hS,jR);g.h=hS.prototype;g.h.show=function(){jR.prototype.show.call(this);this.C.M(this.l,"videodatachange",this.Bo);this.C.M(this.l,"onPlaylistUpdate",this.Bo);this.Bo()};
g.h.hide=function(){jR.prototype.hide.call(this);g.Tt(this.C);iS(this,null)};
g.h.Bo=function(){iS(this,this.l.Be())};
g.h.wl=function(){var a=this.g.Gk;if(a==this.F)this.B.element.setAttribute("aria-checked",!1),this.B=this.o[this.g.Pa];else{for(var b=g.q(this.o),c=b.next();!c.done;c=b.next())c.value.dispose();b=this.g.getLength();this.o=[];for(c=0;c<b;c++){var d=new gS(this.l,this.g,c);this.o.push(d);d.ca(this.Ba)}this.B=this.o[this.g.Pa];this.F=a}this.B.element.setAttribute("aria-checked",!0)};
g.h.dI=function(a){var b=this.l.getVideoUrl(!0);BQ(b,this.l,a)};
g.h.focus=function(){this.B.focus()};
g.h.R=function(){this.hide();jR.prototype.R.call(this)};g.r(jS,g.U);jS.prototype.l=function(){g.O(this.element,"ytp-playlist-menu-button-tiny",400>g.zK(this.o).Fa().width);this.g&&2!=this.o.Ga()?(this.update({text:g.S("YTP_PLAYLIST_POSITION",{CURRENT_POSITION:String(this.g.Pa+1),PLAYLIST_LENGTH:String(this.g.getLength())}),title:g.S("YTP_PLAYLIST_NAME",{PLAYLIST_NAME:this.g.title})}),this.Na()||(this.show(),NS(this.A))):this.Na()&&(this.hide(),NS(this.A))};
jS.prototype.B=function(){this.g&&this.g.unsubscribe("shuffle",this.l,this);(this.g=this.o.Be())&&this.g.subscribe("shuffle",this.l,this);this.l()};g.r(kS,g.U);kS.prototype.o=function(a){g.vw(this,g.V(a.state,2))};
kS.prototype.l=function(){g.yK(this.g);this.g.Vc()};g.r(lS,jR);g.h=lS.prototype;g.h.cH=function(a){a=It(a);g.Qd(this.L,a)||g.Qd(this.C,a)||this.fg()};
g.h.qb=function(){jR.prototype.qb.call(this);this.l.fh(this.element)};
g.h.show=function(){var a=this.Na();jR.prototype.show.call(this);this.iu();a||this.g.ka("onSharePanelOpened")};
g.h.iu=function(){g.M(this.element,"ytp-share-panel-loading");g.qq(this.element,"ytp-share-panel-fail");var a=this.g.Y(),b=this.g.getPlaylistId(),c=b&&this.F.checked;g.O(this.element,"ytp-share-panel-has-playlist",!!b);var d={action_get_share_info:1,feature:"player_embedded",video_id:a.videoId},e=g.W(this.g);e.uc&&(d.authuser=e.uc);e.pageId&&(d.pageid=e.pageId);c&&(d.list=b);g.qs(g.W(this.g).baseYtUrl+"share_ajax",{method:"GET",onError:(0,g.A)(this.uw,this),fb:(0,g.A)(function(a,b){if(b){if(!this.ga()){g.qq(this.element,
"ytp-share-panel-loading");mS(this);for(var c=b.links,d=0,e=0;e<c.length&&3>d;e++){var f=c[e],k=sea(f.img);k&&(k=new g.U({D:"a",W:["ytp-share-panel-service-button","ytp-button"],N:{href:f.url,target:"_blank",title:f.sname},G:[k]}),k.fa("click",g.B(this.NH,f.url)),g.Ke(k,wR(this.l,k.element)),this.o.push(k),d++)}c=new g.U({D:"a",W:["ytp-share-panel-service-button","ytp-button"],G:[{D:"span",J:"ytp-share-panel-service-button-more",G:[g.nO?{D:"div",W:["ytp-icon","ytp-icon-share-more"]}:{D:"svg",N:{height:"100%",
version:"1.1",viewBox:"0 0 38 38",width:"100%"},G:[{D:"rect",N:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{D:"path",N:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],N:{href:b.more,target:"_blank",title:g.S("YTP_MORE")}});c.fa("click",(0,g.A)(this.IG,this,b.more));g.Ke(c,wR(this.l,c.element));this.o.push(c);this.updateValue("buttons",this.o)}}else this.uw(null,null)},this),
Ec:d,withCredentials:!0});a=e.getVideoUrl(a.videoId,c?b:void 0,void 0,!0);this.updateValue("link",a);this.updateValue("linkText",a);DQ(this.B)};
g.h.uw=function(){g.qq(this.element,"ytp-share-panel-loading");g.M(this.element,"ytp-share-panel-fail")};
g.h.NH=function(a,b){if(g.rP(b)){var c=void 0===c?{}:c;c.target=c.target||"YouTube";c.width=c.width||"600";c.height=c.height||"600";c||(c={});var d=window;var e=a instanceof Jc?a:g.Nc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,k=[];for(l in c)switch(l){case "width":case "height":case "top":case "left":k.push(l+"="+c[l]);break;case "target":case "noopener":case "noreferrer":break;default:k.push(l+"="+(c[l]?1:0))}var l=k.join(",");pc()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(l=d.document.createElement("A"),g.Wc(l,e),l.setAttribute("target",f),c.noreferrer&&l.setAttribute("rel","noreferrer"),c=window.document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),l.dispatchEvent(c),d={}):c.noreferrer?(d=d.open("",f,l),c=g.Kc(e),d&&(g.qw&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,c=g.Zc(g.Cc("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+
g.Bb(c)+'">'),d.document.write(g.Rc(c)),d.document.close())):(d=d.open(g.Kc(e),f,l))&&c.noopener&&(d.opener=null);if(c=d)c.opener||(c.opener=window),c.focus();g.Lt(b)}};
g.h.IG=function(a,b){BQ(a,this.g,b)&&this.g.ka("SHARE_CLICKED")};
g.h.eE=function(a){!a&&lR(this)&&this.fg()};
g.h.focus=function(){this.B.focus()};
g.h.R=function(){jR.prototype.R.call(this);mS(this)};g.r(nS,g.U);nS.prototype.C=function(){var a=g.W(this.g);if(g.T(a.experiments,"web_player_navigator_share")&&window.navigator.pJ){var b=this.g.Y(),c=this.g.getPlaylistId();a=a.getVideoUrl(b.videoId,c,void 0,!0);window.navigator.pJ({title:b.title,url:a})}else this.F.fg(this.element,!1);g.XK(this.g,this.element)};
nS.prototype.A=function(){var a=g.W(this.g).kj&&2!=this.g.Ga(),b=g.zK(this.g).Fa().width;this.l=!!this.g.Y().videoId&&300<=b&&!a;g.O(this.o,"ytp-share-button-visible",this.l);a=480<b;g.W(this.g).I&&(g.O(this.o,"ytp-show-share-title",a),this.updateValue("share",a?g.S("YTP_SHARE"):""));g.YK(this.g,this.element,this.l&&this.B)};
nS.prototype.R=function(){g.U.prototype.R.call(this);g.qq(this.o,"ytp-share-button-visible")};g.r(oS,jR);g.r(pS,g.U);pS.prototype.o=function(){var a=g.X(this.g.app);a&&a.l.g.webkitShowPlaybackTargetPicker()};
pS.prototype.l=function(){var a=g.X(this.g.app);g.vw(this,!!a&&a.Qc);this.updateValue("icon",this.g.Ci()?g.nO?{D:"div",W:["ytp-icon","ytp-icon-airplay-on"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M11,13 L25,13 L25,21 L11,21 L11,13 Z M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",fill:"#fff"}}]}:
g.nO?{D:"div",W:["ytp-icon","ytp-icon-airplay-off"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z"}}]})};g.r(rS,g.ww);rS.prototype.R=function(){this.g=null;g.ww.prototype.R.call(this)};g.r(tS,g.ww);g.h=tS.prototype;g.h.MD=function(a){g.V(a.state,32)?uS(this,this.l.Y()):this.F.hide()};
g.h.Wk=function(){var a=this.l.Qf(),b=a.current,c=nC(this.gb,141);b=this.gb.g[c].Mi(b);b!=this.K&&(c=oC(this.gb,b,141),this.B=sS(this.da,c,141,141,!0),g.Eh(this.aa,(this.H-this.B.width)/2),this.K=b);g.Rd(this.ha,g.qP(this.O?a.current-a.seekableEnd:a.current));g.Fu(this.I);this.I=g.Cu((0,g.A)(this.Ml,this));this.L.lh()};
g.h.ND=function(a,b){uS(this,b)};
g.h.Ml=function(){g.Uh(this.g,!1);g.Fu(this.I);var a=Math.round(.5*this.B.width),b=Math.round(.5*this.B.height),c=this.l.Qf(),d=c.current/(c.seekableEnd-c.seekableStart);c=this.gb.g[0].Xt();var e=this.gb.g[0].Uk();d=a*(e-c+1)*d-this.H/2;var f=Math.floor(d/a)+c;e=Math.min(f+Math.min(20,Math.ceil(this.H/a)),e);f=Math.max(f,c);var k;if(this.A>=f&&this.o<=e){for(k=this.A;k>e;k--)g.Jd(this.g.children[k-this.o]);for(k=f-1;k>=this.o;k--)g.Jd(this.g.children[k-this.o]);for(k=this.o-1;k>=f;k--)this.g.insertBefore(vS(this,
k,a,b),this.g.firstChild);k=this.A+1}else g.Hd(this.g),k=f;for(;k<=e;k++){var l=vS(this,k,a,b);this.g.appendChild(l)}for(k=f;k<=e;k++)g.wh(this.g.children[k-f],"transform","translatex("+(-d+(k-c)*a)+"px)");this.o=f;this.A=e;g.Uh(this.g,!0)};
g.h.FA=function(){for(var a=this.o;a<=this.A;a++)qC(this.gb,a,this.B.width)};
g.h.Vz=function(){var a=g.zK(this.l).Fa();this.H!=a.width&&(this.H=a.width,this.gb&&(this.Wk(),this.Ml()))};
g.h.mJ=function(a){this.element.style.g=a+"px"};
g.h.show=function(){g.ww.prototype.show.call(this);aU(this.V,!1)};
g.h.hide=function(){this.gb&&uS(this,null);g.ww.prototype.hide.call(this);aU(this.V,!0)};
g.h.R=function(){uS(this,null);g.ww.prototype.R.call(this)};
tS.g=200;g.r(wS,g.U);g.h=wS.prototype;g.h.OD=function(a){g.V(a.state,32)?yS(this,this.g.Y()):this.Na()&&(g.V(a.state,16)||g.V(a.state,1))||this.o.hide()};
g.h.QD=function(a,b){yS(this,b)};
g.h.PD=function(){var a=g.yK(this.g);(g.V(a,32)||g.V(a,16))&&xS(this)};
g.h.Wz=function(){this.A=window.NaN;xS(this)};
g.h.hide=function(){this.gb&&yS(this,null);g.U.prototype.hide.call(this)};g.r(AS,g.U);g.h=AS.prototype;g.h.RD=function(){g.W(this.l).ma?g.CK(this.l):this.g.fg(this.element,!0)};
g.h.Qu=function(){zS(this);this.g.Kd(this.element,!0)};
g.h.SD=function(){g.ut()==this.l.getRootNode()?this.A.start():(this.A.stop(),this.g&&this.g.hide())};
g.h.bz=function(){if(window.screen&&window.outerWidth&&window.outerHeight){var a=.9*window.screen.width,b=.9*window.screen.height,c=Math.max(window.outerWidth,window.innerWidth),d=Math.max(window.outerHeight,window.innerHeight);if(c>d!=a>b){var e=c;c=d;d=e}a>c&&b>d&&this.Qu()}};
g.h.fu=function(){g.vw(this,zQ(this.l))};
g.h.kw=function(a){if(a){var b=g.nO?{D:"div",W:["ytp-icon","ytp-icon-full-screen-close"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"g",J:"ytp-fullscreen-button-corner-2",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-3",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-0",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",
N:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-1",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]};a=g.S("YTP_EXIT_FULLSCREEN");window.document.activeElement==this.element&&this.l.getRootNode().focus()}else b=g.nO?{D:"div",W:["ytp-icon","ytp-icon-full-screen"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"g",J:"ytp-fullscreen-button-corner-0",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",
N:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-1",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-2",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{D:"g",J:"ytp-fullscreen-button-corner-3",G:[{D:"path",Ia:!0,J:"ytp-svg-fill",N:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]},a=g.S("YTP_FULLSCREEN");this.updateValue("icon",
b);this.updateValue("title",this.g?null:a);NS(this.B.ib())};
g.h.R=function(){this.g||(this.o(),this.o=null);g.U.prototype.R.call(this)};g.r(BS,jR);g.h=BS.prototype;g.h.show=function(){var a=this.Na();jR.prototype.show.call(this);a||(this.o.M(this.g,"presentingplayerstatechange",this.Ao),this.o.M(this.g,"videodatachange",this.Ao),this.Ao())};
g.h.hide=function(){this.o&&(g.Tt(this.o),jR.prototype.hide.call(this))};
g.h.Ao=function(){var a=this.g.Y(),b=a.lg,c;for(c=0;c<b.length;c++){var d=this.l[c];d||(d=new g.U({D:"button",W:["ytp-multicam-menu-item","ytp-button"],N:{"aria-checked":"{{selected}}","data-id":"{{videoId}}"},G:[{D:"div",J:"ytp-multicam-menu-item-title",G:["{{cameraName}}"]}]}),d.fa("click",g.B(this.xF,c),this),d.ca(this.Ba),this.l[c]=d);var e=b[c],f=e.id;if(f!=d.element.getAttribute("data-id")){var k=e.thumbnail_url;!k&&f&&(k=UB(g.W(this.g),f,"default.jpg"));d.element.style.backgroundImage=k?"url("+
k+")":""}d.update({cameraName:e.title,videoId:f,selected:f==a.videoId?!0:null})}for(;c<this.l.length;)this.l.pop().dispose();c=g.yK(this.g);a=b.length||!a.Tb();pE(c)||g.V(c,4)||a||!lR(this)||this.fg()};
g.h.xF=function(a){this.g.Y();var b=this.g;a=this.g.Y().lg[a];var c=g.X(b.app,1).g,d=b.xa();a.id==c.videoId?g.X(b.app)!=g.X(b.app,1)&&(VN(b.app,1),c.pa||b.wb(d)):(VN(b.app,4),aW(b.app,{videoId:a.id,title:c.title,start:c.pa?null:d,multifeed_metadata_list:c.Hb.multifeed_metadata_list},4))};
g.h.focus=function(){for(var a=this.g.Y(),b=a.lg,c=0;c<b.length;c++)if(b[c].id==a.videoId){this.l[c].focus();break}};
g.h.R=function(){g.Me(this.l);jR.prototype.R.call(this)};g.r(CS,g.U);CS.prototype.C=function(a){this.o("newdata"==a)};
CS.prototype.o=function(a){var b=this.g.Y(),c=b.lg,d=g.yK(this.g);d=(pE(d)||g.V(d,4))&&0<c.length;g.vw(this,d);a&&(this.A=!0);if(d){this.A&&g.zq(this.B);a=null;d="";for(var e=0;e<c.length;e++)if(c[e].id==b.videoId){a=c[e].title;d=g.S("YTP_MULTICAM_INDEX",{CAMERA_INDEX:String(e+1),CAMERA_COUNT:String(c.length)})+"\n";break}this.update({text:d+a,preview:b.xc(g.W(this.g),"default.jpg")});NS(this.l)}else this.B.stop()};
CS.prototype.F=function(){cU(this.l,this.element,g.S("YTP_MORE_CAMERAS_AVAILABLE"));this.A=!1};g.r(DS,g.I);DS.prototype.l=function(){var a=g.yu()-this.A;a=a<this.g?a/this.g:1;this.B(Oq(Cfa,a));1>a&&this.o.start()};
var Cfa=new Nq(0,0,.4,0,.2,1,1,1),tea=/[0-9.-]+|[^0-9.-]+/g;g.r(KS,g.U);KS.prototype.Mc=function(a){this.o=300<=a.width;g.vw(this,this.o);g.YK(this.g,this.element,this.o&&this.F)};
KS.prototype.da=function(){g.W(this.g).O?this.g.isMuted()?this.g.Ce():this.g.mute():this.X.fg(this.element,!0);g.XK(this.g,this.element)};
KS.prototype.ha=function(a){JS(this,a.volume,a.muted)};
var uea=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],vea=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.r(OS,g.U);OS.prototype.l=function(){var a=g.X(this.g.app);a&&(a=a.l,a.g.webkitSetPresentationMode("picture-in-picture"==a.g.webkitPresentationMode?"inline":"picture-in-picture"))};g.r(g.QS,g.U);g.QS.prototype.F=function(a){PS(this,a.state)};
g.QS.prototype.C=function(){g.O(this.element,"ytp-play-button-playlist",AK(this.l))};
g.QS.prototype.H=function(){pE(g.yK(this.l))?this.l.Wb():this.l.Vc()};
g.QS.prototype.R=function(){this.g&&this.g();g.U.prototype.R.call(this)};g.r(g.TS,g.U);g.h=g.TS.prototype;g.h.yh=function(){US(this);this.F&&(this.Qa(this.F),this.F=null);this.C=this.g.Y(1);if(this.l=this.g.Be())this.l.subscribe("shuffle",this.yh,this),this.F=this.M(this.g,"progresssync",this.ZD);this.B=VS(this);SS(this);this.Mc(g.zK(this.g).Fa())};
g.h.Mc=function(a){a=void 0===a?g.zK(this.g).Fa():a;var b=AK(this.g)||this.o&&g.UK(this.g)||WS(this);g.vw(this,b&&(this.o||400<=a.width))};
g.h.aE=function(a){var b=!0;this.I?b=g.AQ(a,this.g):g.Lt(a);b&&(this.o?this.g.wh(!0):this.B?this.g.wb(0):this.g.Gi(!0))};
g.h.ZD=function(){var a=VS(this);a!=this.B&&(this.B=a,SS(this))};
g.h.R=function(){this.A&&(this.A(),this.A=null);US(this);g.U.prototype.R.call(this)};XS.prototype.update=function(a,b,c,d){this.width=b;this.o=c;this.B=d;this.g=b-c-d;this.position=g.$c(a,c,c+this.g);this.A=this.position-c;this.l=this.A/this.g};g.r(g.ZS,g.ww);g.h=g.ZS.prototype;g.h.bE=function(a){if(!g.Mt(a)){var b=!1;switch(g.Nt(a)){case 36:this.l.wb(0);b=!0;break;case 35:this.l.wb(window.Infinity);b=!0;break;case 34:this.l.Hd(-60);b=!0;break;case 33:this.l.Hd(60);b=!0;break;case 38:this.l.Hd(5);b=!0;break;case 40:this.l.Hd(-5),b=!0}b&&g.Lt(a)}};
g.h.hu=function(a,b){YS(this,b,"newdata"==a)};
g.h.Qz=function(){this.hu("newdata",this.l.Y())};
g.h.Uz=function(){gT(this.l.Y())?g.vE(g.yK(this.l))&&hT(this,!0):hT(this,!1)};
g.h.Rz=function(a){0<CE(a,64)||!gT(this.l.Y())?hT(this,!1):pE(a.state)&&0>CE(a,64)&&hT(this,!0);this.B&&!g.V(a.state,32)&&3!=this.l.Ga()&&this.B.cancel()};
g.h.nH=function(a,b,c){var d=g.Kh(this.element),e=jT(this).g,f=c?c.getAttribute("data-tooltip"):void 0;f&&(a=HP(this.g,Number(c.getAttribute("data-position")),0)*e+g.Kh(this.Ab).x);this.ya.x=a-d.x;this.ya.y=b-d.y;c=jT(this);a=GP(this.g,c.l);d=f||g.qP(this.Oa?a-this.g.g:a);b=this.Ca;c=c.position+this.Ja;f=!!f;b.aa||(3==b.g&&b.Yd(),1!=b.g&&(b.element.className="ytp-tooltip ytp-bottom",b.g=1,b.I&&b.H.show(),b.o=g.CD(b.L.Y()),b.o&&b.o.subscribe("l",b.Pu,b)),b.update({text:d,title:""}),g.O(b.element,"ytp-text-detail",
!!f),d=-1,b.o&&(d=nC(b.o,160*b.A),d=b.o.g[d].Mi(a)),eU(b,d),dU(b,!!f,c));g.O(this.l.getRootNode(),"ytp-progress-bar-hover",!g.V(g.yK(this.l),64));dT(this)};
g.h.mH=function(){var a=this.Ca;1==a.g&&a.Yd();g.qq(this.l.getRootNode(),"ytp-progress-bar-hover")};
g.h.lH=function(a,b){this.o&&(this.o.dispose(),this.o=null);this.Pb=b;this.l.wb(GP(this.g,jT(this).l),!1);g.M(this.element,"ytp-drag");(this.Sa=pE(g.yK(this.l)))&&this.l.Wb()};
g.h.oH=function(){this.ma=0;g.qq(this.element,"ytp-pull-ui");g.qq(this.element,"ytp-pulling");this.o&&(this.o.dispose(),this.o=null);0<this.H&&(this.o=new g.wq((0,g.A)(this.Vy,this,g.yu(),this.H,jT(this).position)),this.o.start());if(g.V(g.yK(this.l),32)||3==this.l.Ga())this.l.wb(GP(this.g,jT(this).l)),g.qq(this.element,"ytp-drag"),this.Sa&&!g.V(g.yK(this.l),2)&&this.l.Vc()};
g.h.Vy=function(a,b,c){a=1-Math.pow(1-(g.yu()-a)/200,3);c+=a*(this.F*this.A-c);if(0>a||1<a)a=1;iT(this,(1-a)*b,c,this.F);1>a&&this.o.start()};
g.h.pH=function(a,b){var c=!1,d=!1,e=jT(this);3600<=this.g.getLength()&&(iT(this,this.Pb-b-10,e.position,e.l),d=!0,c=this.H>.1*(this.C?60:40),e=jT(this));g.O(this.element,"ytp-pull-ui",d);c&&g.M(this.element,"ytp-pulling");c=0;e.o&&0>=e.position?c=-1:e.B&&e.position>=e.width&&(c=1);this.ma!=c&&(this.ma=c,this.o&&(this.o.dispose(),this.o=null),c&&(this.o=new g.wq((0,g.A)(this.dJ,this,g.yu(),this.I)),this.o.start()));this.l.wb(GP(this.g,e.l),!1)};
g.h.dJ=function(a,b){var c=this.A*(this.V-1);this.I=g.$c(b+this.ma*(g.yu()-a)*.3,0,c);g.cT(this);this.l.wb(GP(this.g,jT(this).l),!1);0<this.I&&this.I<c&&this.o.start()};
g.h.Iu=function(){this.updateValue("clipstarticon",sO());this.updateValue("clipendicon",sO());g.M(this.element,"ytp-clip-hover")};
g.h.Hu=function(){this.updateValue("clipstarticon",uO());this.updateValue("clipendicon",tO());g.qq(this.element,"ytp-clip-hover")};
g.h.vl=function(){this.L=0;this.K=window.Infinity;fT(this);bT(this,this.F,this.da)};
g.h.ax=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.visible){var c=b.oa;if(!this.O[c]){var d=g.Dd("DIV");b.tooltip&&(d.setAttribute("data-tooltip",b.tooltip),d.setAttribute("data-position",b.start/1E3));this.O[c]=b;this.ha[c]=d;kT(this,b,d);"ytp-chapter-marker"==b.style?this.qc.appendChild(d):this.Yb.appendChild(d)}}else mT(this,b)};
g.h.YI=function(a){a=g.q(a);for(var b=a.next();!b.done;b=a.next())mT(this,b.value)};
g.h.R=function(){eT(this,!1);g.ww.prototype.R.call(this)};g.r(nT,MR);nT.prototype.B=function(){g.sK(this.o).A&&3!=this.o.Ga()?this.g||(FT(this.A,this),this.g=!0):this.g&&(GT(this.A,this),this.g=!1);var a=g.sK(this.o).A;NR(this,!!a&&a.loaded)};
nT.prototype.C=function(a){a?this.o.Fi("annotations_module"):this.o.Nk("annotations_module")};
nT.prototype.R=function(){this.g&&GT(this.A,this);MR.prototype.R.call(this)};g.r(g.oT,g.yw);g.h=g.oT.prototype;g.h.open=function(){g.HR(this.o,this.B)};
g.h.be=function(a){if(this.C){var b=this.l[this.C];b.element.getAttribute("aria-checked");b.element.removeAttribute("aria-checked")}this.l[a].element.setAttribute("aria-checked",!0);this.sb(this.ae(a));this.C=a};
g.h.enable=function(a){this.H?a||(this.H=!1,this.zh(!1)):a&&(this.H=!0,this.zh(!0))};
g.h.zh=function(a){a?FT(this.o,this):GT(this.o,this)};
g.h.Jc=function(a){this.P("select",a)};
g.h.dE=function(a){"true"!=this.l[a].element.getAttribute("aria-disabled")&&this.Jc(a)};
g.h.ae=function(a){return a.toString()};
g.h.cE=function(a){g.Mt(a)||39!=g.Nt(a)||(this.open(),g.Lt(a))};
g.h.R=function(){this.H&&GT(this.o,this);g.yw.prototype.R.call(this);for(var a in this.l)this.l[a].dispose()};g.r(qT,g.oT);qT.prototype.F=function(){var a=this.g.getAvailableAudioTracks();1<a.length?(g.pT(this,(0,g.H)(a,this.A)),this.K=g.lb(a,this.A,this),this.I.sb(a.length?" ("+a.length+")":""),this.P("size-change"),this.be(this.A(this.g.getAudioTrack())),this.enable(!0)):this.enable(!1)};
qT.prototype.Jc=function(a){g.oT.prototype.Jc.call(this,a);this.g.mo(this.K[a]);this.o.Od()};
qT.prototype.A=function(a){return a.toString()};g.r(rT,MR);rT.prototype.B=function(){var a=this.g.Ga();if(2!=a&&3!=a&&g.UK(this.g))this.A||(FT(this.C,this),this.A=!0,this.o.push(this.M(this.g,"videodatachange",this.B)),this.o.push(this.M(this.g,"videoplayerreset",this.B)),this.o.push(this.M(this.g,"onPlaylistUpdate",this.B)),this.o.push(this.M(this.g,"autonavchange",this.F)),this.F(this.g.Y().autonavState));else if(this.A){GT(this.C,this);this.A=!1;a=g.q(this.o);for(var b=a.next();!b.done;b=a.next())this.Qa(b.value)}};
rT.prototype.F=function(a){NR(this,1!=a)};
rT.prototype.H=function(a){var b=this.g;a=a?2:1;b.app.l.ka("onAutonavChangeRequest",1!=a);a&&tW(b.app,a)};
rT.prototype.R=function(){this.A&&GT(this.C,this);MR.prototype.R.call(this)};g.r(sT,g.oT);sT.prototype.A=function(){var a=this.g.Ga();if(2!=a&&3!=a&&(this.I=g.DK(this.g),a=this.g.co(),g.RK(this.g)&&g.SK(this.g)&&a.unshift("missing-qualities"),g.pT(this,a),a.length)){this.K();this.enable(!0);return}this.enable(!1)};
sT.prototype.K=function(){var a=g.EK(this.g);this.l[a]&&(this.F=this.g.Ei(),this.be(a),"auto"==a&&this.sb(this.ae(a)))};
sT.prototype.Jc=function(a){"missing-qualities"!=a&&(g.oT.prototype.Jc.call(this,a),this.g.Hi(a),this.o.qb())};
sT.prototype.ae=function(a,b){b=void 0===b?!1:b;if("missing-qualities"==a)return{D:"a",N:{href:"https://support.google.com/youtube/?p=missing_quality",target:"_blank"},G:[g.S("YTP_MISSING_FORMATS")]};var c=[tT(this,a)],d=g.EK(this.g);b||"auto"!=d||"auto"!=a||(c.push(" "),c.push(tT(this,this.F,["ytp-menu-label-secondary"])));return{D:"div",G:c}};g.r(uT,g.U);uT.prototype.Mc=function(a){g.vw(this,this.A&&400<=a.width)};
uT.prototype.B=function(){if(this.o.Na())this.o.qb();else{var a=g.sK(this.g).l;a&&!a.loaded&&(a.Wn("tracklist",{includeAsr:!0}).length||a.load());this.o.Kd(this.element)}};
uT.prototype.l=function(){var a=this.g.Ga(),b=2!=a&&3!=a,c=g.FK(this.g),d=b&&!!g.sK(this.g).o;a=d&&1==c.Pe;c=d&&2==c.Pe;b=(d=a||c)||!b?null:this.g.Ei();g.O(this.element,"ytp-hd-quality-badge","hd720"==b||"hd1080"==b||"hd1440"==b);g.O(this.element,"ytp-4k-quality-badge","hd2160"==b);g.O(this.element,"ytp-5k-quality-badge","hd2880"==b);g.O(this.element,"ytp-8k-quality-badge","highres"==b);g.O(this.element,"ytp-3d-badge-grey",d&&a);g.O(this.element,"ytp-3d-badge",d&&c)};g.r(wT,g.oT);g.h=wT.prototype;g.h.Co=function(a){return a.toString()};
g.h.ae=function(a){return"1"==a?g.S("YTP_NORMAL_SPEED"):a.toString()};
g.h.ju=function(){var a=this.g.Ga();this.enable(2!=a&&3!=a)};
g.h.zh=function(a){g.oT.prototype.zh.call(this,a);a?(this.A=this.M(this.g,"onPlaybackRateChange",this.fE),g.pT(this,(0,g.H)(this.g.vh(),this.Co)),this.be(this.Co(this.g.kc()))):(this.Qa(this.A),this.A=null)};
g.h.fE=function(a){this.be(this.Co(a))};
g.h.Jc=function(a){g.oT.prototype.Jc.call(this,a);this.g.ze((0,window.parseFloat)(a),!0);this.o.Od()};g.r(yT,g.oT);g.h=yT.prototype;g.h.be=function(a){g.oT.prototype.be.call(this,a)};
g.h.mu=function(a){return a.option.toString()};
g.h.ae=function(a){return xT(this.K[a])};
g.h.Jc=function(a){g.oT.prototype.Jc.call(this,a);this.P("settingChange",this.I,this.K[a].option)};
g.h.nu=function(a){this.P("settingChange",this.I+"Override",!a);this.o.Od()};g.r(zT,g.zR);zT.prototype.l=function(a,b){this.P("settingChange",a,b)};g.r(BT,g.oT);BT.prototype.A=function(a){return a.languageCode};
BT.prototype.ae=function(a){return this.g[a].languageName||""};
BT.prototype.Jc=function(a){this.P("select",a);g.IR(this.o)};g.r(CT,g.oT);g.h=CT.prototype;g.h.Go=function(a){return g.dc(a)?"__off__":a.displayName};
g.h.ae=function(a){return"__off__"==a?g.S("YTP_LANGUAGE_OFF"):"__translate__"==a?g.S("YTP_AUTO_TRANSLATE"):"__contribute__"==a?g.S("YTP_CONTRIBUTE_MENU_ITEM"):("__off__"==a?{}:this.A[a]).displayName};
g.h.Jc=function(a){"__translate__"==a?this.F.open():"__contribute__"==a?(this.g.Wb(),this.g.isFullscreen()&&g.CK(this.g),a=g.DE(g.W(this.g),this.g.Y()),g.IL(a)):(this.g.Wc("captions","track","__off__"==a?{}:this.A[a]),g.oT.prototype.Jc.call(this,a),this.o.Od())};
g.h.Pi=function(){var a=-1!=this.g.Ig().indexOf("captions"),b=this.g.Y().Vh;if(a||b){if(a){var c=this.g.Ob("captions","track");var d=this.g.Ob("captions","tracklist",{includeAsr:!0});var e=this.g.Ob("captions","translationLanguages");this.A=g.lb(d,this.Go,this);var f=(0,g.H)(d,this.Go);if(e.length){var k=this.F;var l=e;k.g=g.lb(l,k.A,k);g.pT(k,(0,g.H)(l,k.A));f.push("__translate__")}k=this.Go(c)}else this.A={},f=[],k="__off__";f.unshift("__off__");this.A.__off__={};b&&f.unshift("__contribute__");
this.A[k]||(this.A[k]=c,f.push(k));g.pT(this,f);this.be(k);a?(AT(this.K,this.g.Kg()),this.I.sb(d.length?" ("+d.length+")":""),this.P("size-change"),a&&e.length&&this.l.__translate__.element.setAttribute("aria-disabled",!!g.dc(c))):(this.I.sb(""),this.P("size-change"));this.enable(!0)}else this.enable(!1)};
g.h.lu=function(a){this.g.Wc("captions","sampleSubtitles",a)};
g.h.nE=function(a){var b=this.g.Ob("captions","track");b=g.hc(b);b.translationLanguage=this.F.g[a];this.g.Wc("captions","track",b)};
g.h.mE=function(a,b){if("reset"==a)this.g.lo();else{var c={};c[a]=b;this.g.Ok(c)}this.lu(!0);this.L.start();AT(this.K,this.g.Kg())};
g.h.R=function(){g.Bq(this.L);g.oT.prototype.R.call(this)};g.r(DT,g.DR);DT.prototype.Kd=function(a){ET(this);0<this.o.Ba.length&&g.DR.prototype.Kd.call(this,a)};
DT.prototype.show=function(){g.DR.prototype.show.call(this);g.M(this.l.getRootNode(),"ytp-settings-shown")};
DT.prototype.hide=function(){g.DR.prototype.hide.call(this);g.qq(this.l.getRootNode(),"ytp-settings-shown")};g.r(HT,g.U);
HT.prototype.l=function(){var a=!1;-1!=this.g.Ig().indexOf("remote")&&(a=1<this.g.Ob("remote","receivers").length);g.vw(this,a&&400<=g.zK(this.g).Fa().width);var b=1;a&&this.g.Ob("remote","casting")&&(b=2);if(this.o!=b){this.o=b;switch(b){case 1:this.updateValue("icon",g.nO?{D:"div",W:["ytp-icon","ytp-icon-cast-desktop-off"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z",fill:"#fff"}}]});
break;case 2:this.updateValue("icon",g.oO())}g.O(this.element,"ytp-remote-button-active",!!this.g.Ob("remote","casting"))}};
HT.prototype.B=function(){if(this.g.Ob("remote","quickCast"))this.g.Wc("remote","quickCast",!0);else{var a=this.A,b=this.element;if(lR(a))a.qb();else{ET(a);a:{var c=g.q(a.o.Ba);for(var d=c.next();!d.done;d=c.next())if(d=d.value,0==d.priority){c=d;break a}c=null}c&&(c.open(),a.Kd(b));a.Kd(b)}}};g.r(IT,g.U);IT.prototype.C=function(){var a=this.g.app;a.l.ka("SIZE_CLICKED",!a.Yb)};
IT.prototype.l=function(){g.vw(this,this.g.app.yd&&!this.g.isFullscreen()&&3!=this.g.Ga());if(this.Na()){var a=this.g.isWidescreen();if(this.o!=a){var b=a?g.nO?{D:"div",W:["ytp-icon","ytp-icon-default-view"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},G:[{D:"path",Ia:!0,N:{d:"m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z",fill:"#fff","fill-rule":"evenodd"}}]}:g.nO?{D:"div",W:["ytp-icon","ytp-icon-theater-mode"]}:{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},G:[{D:"path",Ia:!0,N:{d:"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z",fill:"#fff","fill-rule":"evenodd"}}]};g.W(this.g).T||null==this.o?this.updateValue("icon",b):IS(this.B,this.element,b);a=(this.o=a)?g.S("YTP_DEFAULT_VIEW"):g.S("YTP_THEATER_MODE");this.updateValue("title",a);NS(this.A)}}};g.r(JT,g.U);JT.prototype.o=function(){var a=g.sK(this.l).l;a&&a.Iw()};
JT.prototype.g=function(){var a=!!g.sK(this.l).l;g.vw(this,a&&300<=g.zK(this.l).Fa().width);a&&this.updateValue("pressed",!!this.l.Ob("captions","track").displayName)};g.r(g.KT,g.U);
g.KT.prototype.g=function(){var a=g.zK(this.B).Fa().width,b=350<=a&&(!this.o||!g.V(g.yK(this.B),64));g.vw(this,b);g.O(this.element,"ytp-time-display-allow-autohide",b&&400>a);a=this.B.Qf();b&&(b=g.qP(a.current),this.F!=b&&(this.updateValue("currenttime",b),this.F=b),b=g.qP(a.duration),this.H!=b&&(this.updateValue("duration",b),this.H=b));this.o&&(a=a.isPeggedToLive,this.C!=a&&(this.C=a,this.g(),b=this.A.element,(b.disabled=a)?this.l&&(this.l(),this.l=null,b.removeAttribute("title")):(b.title=g.S("YTP_GOTO_LIVE_TOOLTIP"),
this.l=wR(this.I,this.A.element))))};
g.KT.prototype.L=function(a,b){this.o=b.pa;g.O(this.element,"ytp-live",this.o);this.g()};
g.KT.prototype.K=function(a){a.target==this.A.element&&(this.B.wb(window.Infinity),this.B.Vc())};
g.KT.prototype.R=function(){this.l&&this.l();g.U.prototype.R.call(this)};g.r(MT,g.U);g.h=MT.prototype;g.h.oE=function(){var a=this.C.Ic();this.F!=a&&(this.F=a,LT(this,this.g.Nb(),this.g.isMuted()))};
g.h.Mc=function(a){g.vw(this,350<=a.width)};
g.h.WH=function(a){if(!g.Mt(a)){var b=g.Nt(a),c=null;37==b?c=this.A-5:39==b?c=this.A+5:36==b?c=0:35==b&&(c=100);null!=c&&(c=g.$c(c,0,100),0==c?this.g.mute():(this.g.isMuted()&&this.g.Ce(),this.g.setVolume(c)),g.Lt(a))}};
g.h.pE=function(a){var b=a.deltaX||-a.deltaY;a.deltaMode?this.g.setVolume(this.A+(0>b?-10:10)):this.g.setVolume(this.A+g.$c(b/10,-10,10));g.Lt(a)};
g.h.VH=function(){NT(this,this.o,!0,this.l,this.C.qh());this.T=this.A;this.g.isMuted()&&this.g.Ce()};
g.h.UH=function(a){a-=g.Kh(this.O).x;this.g.setVolume(100*g.$c(a/(this.F?78:52),0,1))};
g.h.TH=function(){NT(this,this.o,!1,this.l,this.C.qh());0==this.A&&(this.g.mute(),this.g.setVolume(this.T))};
g.h.qE=function(a){LT(this,a.volume,a.muted)};
g.h.Hq=function(){NT(this,this.o,this.B,this.l,this.C.qh())};
g.h.ou=function(a){NT(this,this.o,this.B,a,this.C.qh())};
g.h.lw=function(a){g.O(this.element,"ytp-volume-control-hover",a);NT(this,a,this.B,this.l,this.C.qh())};
g.h.R=function(){g.U.prototype.R.call(this);g.qq(this.L,"ytp-volume-slider-active")};g.r(OT,g.U);OT.prototype.A=function(){this.l=!!this.g.Y().videoId;g.vw(this,this.l);g.YK(this.g,this.element,this.l&&this.o);if(this.l){var a=this.g.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a)}};
OT.prototype.B=function(a){var b=this.g.getVideoUrl(!g.rP(a),!1,!0,!0);BQ(b,this.g,a);g.XK(this.g,this.element)};g.r(PT,g.Rt);g.h=PT.prototype;g.h.Eo=function(){g.aT(this.C);this.T.g()};
g.h.Du=function(){this.Fo();!this.U.g||this.Eo()};
g.h.lE=function(){this.Eo();this.H.start()};
g.h.Fo=function(){var a;if(a=!g.W(this.A).g){a=this.C;var b=2*a.A*g.XB();a=300>1E3*a.g.getLength()/a.l.kc()/b}a=a&&g.vE(g.yK(this.A))&&!!window.requestAnimationFrame;b=!a;this.U.g||(a=b=!1);b?this.I||(this.I=this.M(this.A,"progresssync",this.Eo)):this.I&&(this.Qa(this.I),this.I=null);a?this.H.isActive()||this.H.start():this.H.stop()};
g.h.NJ=function(a){aU(this.o.ib(),!a)};
g.h.Bb=function(){var a=this.o.Ic(),b=g.zK(this.A).Fa(),c=RT(this),d=Math.max(b.width-2*c,100);if(this.X!=b.width||this.ba!=a){this.X=b.width;this.ba=a;var e=ST(this);this.l.element.style.width=e+"px";this.l.element.style.left=c+"px";var f=this.C;f.Ja=c;f.A=e;f.C=a;g.cT(f);this.o.ib().da=e}c=this.g;e=Math.min(413*(a?1.5:1),Math.round(.82*(b.height-(this.o.Ic()?72:50))));c.O=Math.min(570*(a?1.5:1),d);c.L=e;c.ej();this.Fo();g.T(g.W(this.A).experiments,"html5_player_dynamic_bottom_gradient")&&qS(this.aa,
b.height)};
g.h.ia=function(){return this.l.element};g.r(g.TT,g.U);g.TT.prototype.l=function(){g.M(this.element,"ytp-sb-subscribed")};
g.TT.prototype.o=function(){g.qq(this.element,"ytp-sb-subscribed")};g.y("yt.pubsub.publish",g.ku,void 0);g.r(WT,g.U);WT.prototype.T=function(a){g.XK(this.g,this.element);var b=this.g.getVideoUrl(!g.rP(a),!1,!0);BQ(b,this.g,a)};
WT.prototype.H=function(){XT(this);var a=this.g.Y();this.updateValue("title",a.title);this.A&&(this.A.g=a.fj);var b=g.W(this.g);if(b.I&&2!=this.g.Ga()){var c=a.shortViewCount;g.O(this.g.getRootNode(),"ytp-show-title-view-count",!!c);this.updateValue("viewCount",c)}else g.qq(this.g.getRootNode(),"ytp-show-title-view-count"),this.updateValue("viewCount","");!b.H&&a.videoId?(this.updateValue("url",this.g.getVideoUrl(!0)),this.o||(this.o=this.M(this.O,"click",this.T))):this.o&&(this.updateValue("url",
null),this.Qa(this.o),this.o=null)};g.r(g.ZT,g.U);g.h=g.ZT.prototype;g.h.NG=function(a){3==this.g&&this.Yd();a=a.currentTarget;this.g||(a.removeEventListener("mouseover",this.O),a.addEventListener("mouseout",this.ha),bU(this,a,2))};
g.h.KG=function(a){(a=Jt(a))&&g.Qd(this.l,a)||this.Yd()};
g.h.Pu=function(a,b){if(a<=this.B&&this.B<=b){var c=this.B;this.B=window.NaN;eU(this,c)}};
g.h.GA=function(){qC(this.o,this.B,160*this.A)};
g.h.Yd=function(){switch(this.g){case 2:this.l.removeEventListener("mouseout",this.ha),this.l.addEventListener("mouseover",this.O);case 3:3==this.g&&this.X.stop();this.L.removeEventListener("appresize",this.T);this.K||this.l.setAttribute("title",this.C);this.C="";this.l=null;break;case 1:this.o&&(this.o.unsubscribe("l",this.Pu,this),this.o=null),this.L.removeEventListener("videoready",this.T),this.V.stop()}this.g=null;this.I&&this.H.hide()};
g.h.fh=function(a){if(this.l)for(var b=0;b<arguments.length;b++)g.Qd(arguments[b],this.l)&&this.Yd()};
g.h.R=function(){null!=this.g&&this.Yd();g.U.prototype.R.call(this)};g.r(iU,g.U);g.h=iU.prototype;g.h.Mc=function(a){this.A=300<=a.width;g.vw(this,this.A);a=480<a.width;g.W(this.g).I&&(g.O(this.H,"ytp-show-watch-later-title",a),this.updateValue("watch_later",a?g.S("YTP_WATCH_LATER_2"):""));g.YK(this.g,this.element,this.A&&this.C)};
g.h.vI=function(){this.l=!0;this.o=!1;hU(this,1);g.W(this.g).g&&cU(this.F,this.element);g.W(this.g).Za&&this.g.ka("WATCH_LATER_VIDEO_ADDED")};
g.h.rE=function(){g.XK(this.g,this.element);var a=this.g.Y().videoId,b=g.W(this.g);b.uc?gU(this,a):g.VT(function(){Nv({videoId:a});window.location.reload()},null,"wl_button",800,600,SB(b))};
g.h.wI=function(a,b){this.o=!1;var c=g.S("YTP_ERROR_GENERIC_WITHOUT_LINK");b&&(c=b.errors&&b.errors.length?b.errors[0]:b.error_message);hU(this,4,c);g.W(this.g).Za&&this.g.ka("WATCH_LATER_ERROR",c)};
g.h.xI=function(){this.o=this.l=!1;hU(this,2);g.W(this.g).Za&&this.g.ka("WATCH_LATER_VIDEO_REMOVED")};
g.h.sE=function(){this.o=this.l=!1;hU(this,2)};g.r(jU,g.U);jU.prototype.B=function(a){g.vw(this,!g.V(a.state,2))};
jU.prototype.o=function(){if(this.l.Y().videoId){var a=this.l.getVideoUrl(!0,!1,!1,!0);this.updateValue("url",a);this.g||(this.g=this.fa("click",this.A))}else this.g&&(this.updateValue("url",null),this.Qa(this.g),this.g=null)};
jU.prototype.A=function(a){var b=this.l.getVideoUrl(!g.rP(a),!1,!0,!0);BQ(b,this.l,a)};g.r(kU,pR);g.h=kU.prototype;g.h.ib=function(){return this.F};
g.h.Tj=function(a,b){b?this.O=a:this.O=null;this.hg()};
g.h.Uj=function(a,b){if(b)this.H.push(a);else for(var c=this.H.length;0<=c;c--)if(this.H[c]==a){this.H.splice(c,1);break}this.o.yb(64,0<this.H.length)};
g.h.Fh=function(){g.HK(this.g)&&g.IK(this.g);qR(this);return!!this.O||pR.prototype.Fh.call(this)};
g.h.hg=function(){var a=!this.Fh(),b=a&&g.HK(this.g)&&!g.V(g.yK(this.g),2);a?(this.Oa.show(),this.Sa.show()):(this.Oa.hide(),this.Sa.hide(),this.F.fh(this.A.element));b?this.U.o.show():this.U.o.hide();this.l&&QT(this.l,!a);pR.prototype.hg.call(this)};
g.h.nl=function(a,b,c,d){a.style.left="";a.style.top="";a.style.bottom="";var e=g.Th(a);d=d||this.l&&g.Qd(this.l.ia(),b);if(null==c||!d){var f=g.Th(b);var k=g.Ph(b,this.g.getRootNode())}c=(null==c?k.x+f.width/2:c)-e.width/2;d?(f=RT(this.l),k=ST(this.l),b=g.zK(this.g).Fa().height,c=g.$c(c,f,f+k-e.width),e=b-(this.l.o.Ic()?72:50)-e.height):g.Qd(this.A.element,b)?(f=g.zK(this.g).Fa().width,c=g.$c(c,12,f-e.width-12),e=this.Ic()?this.ua:this.ya,"gvn"==g.W(this.g).playerStyle&&(e+=20)):(b=g.zK(this.g).Fa(),
c=g.$c(c,12,b.width-e.width-12),e=k.y>(b.height-f.height)/2?k.y-e.height-12:k.y+f.height+12);a.style.top=e+"px";a.style.left=c+"px"};
g.h.To=function(a){a&&(this.F.fh(this.A.element),this.l&&this.F.fh(this.l.ia()));pR.prototype.To.call(this,a)};
g.h.Yn=function(){var a=g.zK(this.g).Fa();a=new g.hh(0,0,a.width,a.height);if(this.o.g&&!this.Fh()){if(g.W(this.g).Oc){var b=this.Ic()?this.ua:this.ya;a.top+=b;a.height-=b}this.l&&(a.height-=this.l.o.Ic()?72:50)}return a};
g.h.FD=function(a){var b=this.g.getRootNode();a?b.parentElement?(b.setAttribute("aria-label",g.S("YTP_PLAYER_FULLSCREEN")),b.parentElement.insertBefore(this.V.element,b),b.parentElement.insertBefore(this.T.element,b.nextSibling)):g.Q(Error("Player not in DOM.")):(b.setAttribute("aria-label",g.S("YTP_PLAYER_NORMAL")),g.uw(this.V),g.uw(this.T));this.Ni();this.Wg()};
g.h.Ic=function(){return this.g.isFullscreen()||!1};
g.h.Lk=function(a){this.bb=!a;this.hg()};
g.h.Ni=function(){var a=this.Ic();this.F.A=a?1.5:1;g.O(this.I.element,"ytp-big-mode",a);pR.prototype.Ni.call(this)};
g.h.Wg=function(){pR.prototype.Wg.call(this);g.YK(this.g,this.Ja.element,!!this.K);var a=this.Ma,b=!!this.K;a.B=b;g.YK(a.g,a.element,a.l&&b);this.ha&&(a=this.ha,b=!!this.K,a.C=b,g.YK(a.g,a.element,a.A&&b));if(!this.K)for(this.F.fh(this.A.element),a=0;a<this.aa.length;a++)b=this.aa[a],lR(b)&&b.qb()};
g.h.Al=function(a){this.l&&QT(this.l,this.Fh());pR.prototype.Al.call(this,a)};
g.h.WG=function(){KK(this.g)&&this.o.yb(128,!1)};
g.h.Zn=function(a,b){this.ba&&ZR(this.ba,a,b)};
g.h.Xj=function(){return this.I.Na()?(this.I.qb(),!0):this.H.length?(this.H[this.H.length-1].qb(),!0):this.O?(this.O.qb(),!0):pR.prototype.Xj.call(this)};
g.h.mw=function(a,b){this.Ab=b;this.Uj(a,b);this.Ww()};
g.h.Ww=function(){var a=this.Ab||lR(this.I);this.sa!=a&&(this.sa=a,this.g.ka("onAutonavPauseRequest",this.sa))};
g.h.oz=function(){lU(this,this.g.getRootNode(),!0).focus()};
g.h.pz=function(){lU(this,this.g.getRootNode(),!1).focus()};
g.h.Kk=function(){return this.l&&this.l.g};
g.h.ao=function(){this.o.yb(2,!0)};g.r(g.mU,g.dL);g.mU.prototype.sc=function(){return!1};
g.mU.prototype.init=function(){this.Xn=new kU(this.g);g.J(this,this.Xn);this.Xn.init()};g.r(nU,g.I);nU.prototype.get=function(a){var b=this.l.find(function(b){return b[0]==a});
return b?b[1]:null};
nU.prototype.set=function(a,b){this.remove(a,!0);for(this.l.push([a,b]);this.l.length>this.o;){var c=this.l.shift();this.g&&this.g(c[1])}};
nU.prototype.remove=function(a,b){if(b&&this.g){var c=this.get(a);if(c)this.g(c);else return}g.Xa(this.l,function(b){return b[0]==a})};
nU.prototype.R=function(){var a=this;this.g&&this.l.forEach(function(b){a.g(b[1])})};g.xa(oU);var MU=g.z("ytPlayerUtilsVideoTagPoolInstance")||oU.getInstance();g.y("ytPlayerUtilsVideoTagPoolInstance",MU,void 0);g.h=oU.prototype;g.h.nr=function(a){if(!(this.g.length>=a)){a-=this.g.length;for(var b=0;b<a;b++)rU(this)}};
g.h.yz=function(a,b){if(this.g.length)return this.g.pop();var c=rU(this,a,b);a||g.Wa(this.g,c);return c};
g.h.WI=function(a){a&&g.Sa(this.l,a)&&(a.src&&(WA&&0<a.readyState&&(a.currentTime=Math.max(qfa,0)),a.removeAttribute("src"),a.load(),a.g&&a.g.g&&(a.g&&a.g.dispose(),a.g=null)),Pt(a),g.Wa(this.l,a),g.Wa(this.o,a))};
g.h.mA=function(a){return this.g.length>=(a||1)};
g.h.Ry=function(){for(var a=this.o.length-1;0<=a;a--)qU(this,this.o[a]);this.g.length==this.l.length&&4<=this.g.length||(4>this.l.length?this.nr(4):(this.g=[],(0,g.F)(this.l,function(a){qU(this,a)},this)))};
oU.prototype.fillPool=oU.prototype.nr;oU.prototype.getTag=oU.prototype.yz;oU.prototype.releaseTag=oU.prototype.WI;oU.prototype.hasTags=oU.prototype.mA;oU.prototype.activateTags=oU.prototype.Ry;g.r(sU,g.I);sU.prototype.o=function(a){this.l=a[a.length-1].intersectionRatio};
sU.prototype.R=function(){g.I.prototype.R.call(this);this.l=null;this.g&&this.g.disconnect()};g.r(tU,g.U);g.h=tU.prototype;g.h.jA=function(){this.B=new g.hh(0,0,0,0);this.o=new g.hh(0,0,0,0)};
g.h.Vk=function(a){g.pq(this.element,arguments)};
g.h.Ee=function(){if(this.g){var a=this.Fa();if(!a.isEmpty()){var b=!g.hd(a,g.lh(this.o)),c=BU(this);b&&(this.o.width=a.width,this.o.height=a.height);a=this.app.g;(c||b||a.aa)&&this.app.l.P("resize",this.Fa())}}};
g.h.GD=function(a,b){vU(this,b)};
g.h.kA=function(a){a.g&&vU(this,a.g)};
g.h.Fa=function(){var a=this.app.g,b=this.app.U.isFullscreen();if(b&&Ds())return new g.gd(window.outerWidth,window.outerHeight);if(b||a.mj){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.A&&this.A.media==a||(this.A=window.matchMedia(a));var c=this.A&&this.A.matches}if(c)return new g.gd(window.innerWidth,window.innerHeight)}else if(this.V&&this.T&&!this.app.isWidescreen())for(a=0;a<this.V.length;a++)if(b=this.V[a],b.query.matches)return new g.gd(b.size.width,
b.size.height);return new g.gd(this.element.clientWidth,this.element.clientHeight)};
g.h.Sz=function(){this.g&&yM(this);AU(this)!=this.I&&this.Ee()};
g.h.HD=function(){yM(this)};
g.h.R=function(){this.C&&g.iu(this.C);uU(this);g.U.prototype.R.call(this)};CU.prototype.click=function(a){var b=a.getAttribute("data-visual-id");g.Sa(this.g,a);g.Sa(this.l,b);VK(this,"onLogVeClicked",{id:b})};
CU.prototype.F=function(a){g.Sa(this.g,a);var b=a.getAttribute("data-visual-id");g.Wa(this.g,a);g.Wa(this.o,b);g.Wa(this.l,b);a.removeAttribute("data-visual-id")};
CU.prototype.pause=function(){this.A=!0};
CU.prototype.resume=function(){this.A=!1;for(var a=g.q(this.B),b=a.next();!b.done;b=a.next())b=b.value,VK(this,b.type,b.data);this.B.length=0};g.r(DU,g.U);g.r(FU,g.U);g.h=FU.prototype;g.h.show=function(){g.U.prototype.show.call(this);this.Ho()};
g.h.hide=function(){g.U.prototype.hide.call(this);this.l.stop()};
g.h.stop=function(){this.l.stop()};
g.h.start=function(){this.l.isActive()||this.Ho()};
g.h.Ho=function(){var a=g.yu(),b=g.X(this.g),c=RU(this.g),d=this.g.l,e=d.app.B.ia(),f=this.g.g,k=b.Pm(),l=b.ha,m=8*kJ(l,"bandwidth")/1024,n=kJ(l,"networkactivity")/1024,p=kJ(l,"bufferhealth");if(b.H){var u=b.H.g.g+"/"+g.Iv(JJ(b));u=u+"/"+b.H.Re()}else u="";var v=g.XB();d=g.FK(d).pn;k={video_id_and_cpn:c.videoId+" / "+c.clientPlaybackNonce,codecs:"",dropped_frames:k.totalVideoFrames?""+(k.droppedVideoFrames||0)+"/"+k.totalVideoFrames:"-",stream_host:b.B?b.B.Oa:"",dimensions:e.clientWidth+"x"+e.clientHeight+
(1<v?"*"+v:""),bandwidth_kbps:m.toFixed(0)+" Kbps",buffer_health_seconds:p.toFixed(2)+" s",drm_style:u?"":"display:none",drm:u,network_activity_bytes:n.toFixed(0)+" KB",shader_info:d,shader_info_style:d?"":"display:none"};m=this.g.U.Nb();f=OD(c,f);f=Math.round(m)+"% / "+Math.round(m*f)+"%";m=c.relativeLoudness.toFixed(1);(0,window.isFinite)(m)&&(f+=" (content loudness "+m+"dB)");k.volume=f;k.resolution=e.videoWidth+"x"+e.videoHeight;if(c.Da){e=c.Da.video.fps;1<e&&(k.resolution+="@"+e);(b=GJ(b))&&
b.video&&(k.resolution+=" / "+b.video.width+"x"+b.video.height,1<b.video.fps&&(k.resolution+="@"+b.video.fps));k.codecs=GU(c.Da);if(b=c.Jb)b=c.Da,b=!(b.audio&&b.video);b&&(k.codecs+=" / "+GU(c.Jb));c.Da.video.l||c.Da.video.primaries?(b=c.Da.video.l||"unknown","smpte2084"==b?b+=" (PQ)":"arib-std-b67"==b&&(b+=" (HLG)"),k.color=b+" / "+(c.Da.video.primaries||"unknown"),k.color_style=""):k.color_style="display:none"}b=c.pa;k.live_latency_style=b?"":"display:none";k.live_mode_style=b?"":"display:none";
if(b){b=kJ(l,"livelatency");k.live_latency_secs=b.toFixed(2)+"s";e=c.Lb()?"Manifestless, ":"";f="Uncertain";if(0<=b&&120>b)if(c.latencyClass&&"UNKNOWN"!=c.latencyClass)switch(c.latencyClass){case "NORMAL":f="Optimized for Normal Latency";break;case "LOW":f="Optimized for Low Latency";break;case "ULTRALOW":f="Optimized for Ultra Low Latency";break;default:f="Unknown Latency Setting"}else f=c.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming";k.live_mode=e+f}EU(this.o,
jJ(l,"bandwidth"));EU(this.C,jJ(l,"networkactivity"));EU(this.B,jJ(l,"livelatency"));EU(this.A,jJ(l,"bufferhealth"));this.update(k);a=25<g.yu()-a?5E3:500;this.l.start(a)};g.r(HU,g.I);g.h=HU.prototype;g.h.bF=function(){KU(this)||g.JV(this,5)};
g.h.eH=function(a){KU(this)||(mW(this),pE(a.o)&&rW(this))};
g.h.UA=function(){return this.g};
g.h.dd=function(){var a=this.A,b={};a.l&&g.Ia(b,a.l.zB());this.A.B&&g.Ia(b,{});b.fs=this.l.isFullscreen();b.volume=Math.round(this.U.Nb());b.mos=this.U.isMuted()?1:0;if(g.T(this.g.experiments,"html5_enable_embedded_player_visibility_signals")&&this.g.l&&(this.Cc&&(a=this.Cc,a=null==a.l?null:Math.round(100*a.l)/100,null!=a&&(b.inview=a)),a=this.H.Fa(),0<a.height&&0<a.width)){a=[Math.round(a.height),Math.round(a.width)];var c=g.XB();1<c&&a.push(c);b.size=a.join(":")}return b};
g.h.aB=function(a){switch(a.type){case "loadedmetadata":dD("fvb","")||this.I.g("fvb");g.RC("fvb",void 0,"video_to_ad");this.Wa.start();break;case "loadstart":dD("gv","")||this.I.g("gv");g.RC("gv",void 0,"video_to_ad");break;case "progress":case "timeupdate":!dD("l2s","")&&2<=XD(fE(a.target))&&this.I.g("l2s");break;case "playing":g.qw&&this.Wa.start();if(g.EB(this.g))a=!1;else{var b=this.A.o;a="none"==Ah(this.B.g,"display")||0==g.Th(this.B.g).zd();var c=this.g;c=!c.F||this.F.g.hj&&c.Za;b=!AU(this.H)||
b||c||this.g.xf;a=a&&!b}a&&(this.F.ec("hidden","1",!0),RU(this).Yf||qW(this,"hidden",!0))}};
g.h.mG=function(a,b){this.l.ka("onLoadProgress",b)};
g.h.XH=function(){this.l.P("playbackstalledatstart")};
g.h.bB=function(a,b){this.l.ka("onVideoProgress",b)};
g.h.NF=function(){this.l.ka("onDompaused")};
g.h.YA=function(){this.U.P("progresssync")};
g.h.VA=function(a){0<CE(a,1)&&!g.V(a.state,64)&&this.o.g.pa&&RJ(this.o)&&1<this.l.kc()&&OV(this,1,!0);var b;if(b=0<CE(a,2))this.C&&(g.JB(this.g)||this.l.isFullscreen()&&!this.Ja)&&g.hW(this)?(b=g.T(this.g.experiments,"html5_player_autonav_logging"),iW(this,!1,b),b=!0):b=!1,b=!b;b&&(b=this.o.l)&&vt(b.g);g.V(a.state,128)&&(b=a.state,bW(this),b=b.g,this.l.ka("onError",cX[b.errorCode]||5),this.l.ka("onDetailedError",b),6048E5<g.yu()-this.g.sj&&this.l.ka("onReloadRequired"));!g.vE(a.state)||g.xE(a.state)||
dD("pbresume")||(b=RU(this),g.SC("cpn",b.clientPlaybackNonce,"ad_to_video"),b.videoId&&g.SC("docid",b.videoId,"ad_to_video"),b.playbackId&&g.SC("plid",b.playbackId,"ad_to_video"),g.RC("pbresume",void 0,"ad_to_video"));this.l.P("applicationplayerstatechange",a)};
g.h.tv=function(a){3!=wK(this)&&(g.T(this.g.experiments,"html5_ignore_playing_evt")||!g.V(a.state,32)&&0>CE(a,16)&&(!g.V(a.state,8)||g.V(a.state,64)||this.B.g.ended||g.V(a.state,2)||rW(this)),this.l.P("presentingplayerstatechange",a))};
g.h.XA=function(a){MV(this,yE(a.state));g.V(a.state,1024)&&this.l.app.X&&(Gw(this,{muted:!1,volume:this.K.volume},!1),KV(this,!1))};
g.h.jH=function(a){g.vE(a.state)&&!g.xE(a.state)&&(GQ(this.A),g.Tt(this.qc))};
g.h.aF=function(a){"newdata"==a&&VV(this)};
g.h.eF=function(){this.l.ka("onPlaybackAudioChange",this.l.getAudioTrack().ob.name)};
g.h.qI=function(a){a==this.F.g&&this.l.ka("onPlaybackQualityChange",a.Da.video.quality)};
g.h.Sn=function(a,b,c){if("newdata"==a)LQ(this.A),this.l.P("videoplayerreset",b);else{if(!this.B)return;if("dataloaded"==a)if(this.F==this.o){if(b.A.jf(c.Hb),!this.o.o.isError()){var d=KU(this),e=this.o.g;if(!DD(e)||d||qD(this.o.g))e.Tb(),d&&g.JV(this,6),XU(this),d||(e=this.A.B)&&!e.created&&HQ(this.A)&&this.A.B.create();else if(g.T(this.g.experiments,"html5_defer_background_errors")&&Pw())lK(this.o,"app_none_avail");else{d=e.pa&&!g.YA()?"html5.unsupportedlive":"fmt.noneavailable";var f=+!!e.adaptiveFormats,
k=+!!e.bd,l=+(0<=e.Mh.indexOf("itag=18")),m=+(0<=e.Mh.indexOf("itag=43")),n=+uV('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),p=+uV('video/webm; codecs="vp8.0, vorbis"');f="nosupported.1;a."+f+";d."+k+";"+("f18."+l+";c18."+n+";f43."+m+";c43."+p);e.la&&(f+=";f133."+ +!!e.la.g["133"]+";f140."+ +!!e.la.g["140"]);g.yJ(this.o,d,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",f)}}}else XU(this);if(1==b.getPlayerType()&&(this.g.O&&uW(this),RU(this).pa&&!this.g.Yj&&g.yJ(this.o,"html5.unsupportedlive","YTP_DEVICE_FALLBACK",
void 0),c.Tb())){if(c.ql||c.Nn||c.Ed.focEnabled||c.Ed.rmktEnabled||RU(this).pq)e=RU(this),YV(this,"part2viewed",1,0x8000000000000),YV(this,"engagedview",Math.max(1,1E3*e.he),0x8000000000000),e.pa||(e=1E3*e.lengthSeconds,YV(this,"videoplaytime25",.25*e,e),YV(this,"videoplaytime50",.5*e,e),YV(this,"videoplaytime75",.75*e,e),YV(this,"videoplaytime100",e,0x8000000000000),YV(this,"conversionview",e,0x8000000000000));if(c.chapterMarkers.length){e=RU(this);d=[];for(f=0;f<e.chapterMarkers.length;f++)if(k=
e.chapterMarkers[f].playerChapterMarkerRenderer)l={id:"__chapterMarker"+f+"__",style:"ytp-chapter-marker",visible:!0},k.color&&(l.color=k.color),k.tooltip&&(l.tooltip=k.tooltip),m=k.startTimeMs,k=new g.mF(m,k.endTimeMs||m,l),k.namespace="appchaptermarker",d.push(k);LK(this,d,1)}}this.l.P("videodatachange",a,c,b.getPlayerType())}this.g.Za&&this.l.ka("onVideoDataChange",{type:a,playertype:b.getPlayerType()});a=c.clientScreenNonce;c=c.rootVeType;a&&c&&(b=this.L,a!=b.C&&(b.C=a,VK(b,"onScreenChanged",
{csn:a,root_ve_type:c}),b.l.length&&VK(b,"onLogVesShown",{ids:b.l}),b.o=g.Za(b.l)))};
g.h.Nj=function(){DV(this,null);this.l.ka("onPlaylistUpdate")};
g.h.Cu=function(a){var b=a.oa,c=this.o.g;if("part2viewed"==b)c.Cv&&g.Ns(c.Cv),c.Nn&&g.Ns(c.Nn);else if("conversionview"==b){var d=this.o;d.C&&fF(d.C)}else"engagedview"==b&&g.Ns(c.ql);if(c.rl){d=c.rl;var e={label:a.oa};if(g.T(this.g.experiments,"send_pyv_ad_mt_and_abandon_pings")){var f=1E3*PV(this);e.ad_mt=Math.round(Math.max(0,f)).toString()}d=g.hs(d,e);g.Ns(d)}switch(b){case "videoplaytime25":c.Js&&g.Ns(c.Js);g.Ns(c.NI);break;case "videoplaytime50":c.Ks&&g.Ns(c.Ks);g.Ns(c.OI);break;case "videoplaytime75":c.Ls&&
g.Ns(c.Ls);g.Ns(c.QI);break;case "videoplaytime100":c.Is&&g.Ns(c.Is),g.Ns(c.MI)}(b=RU(this).pq)&&b[a.oa]&&(c=b[a.oa],g.Ns(c,void 0,Yv(c)||$v(c)||Wv(c)),b=b[a.oa+"gaia"],g.Ns(b,void 0,Yv(b)||$v(b)||Wv(b)));this.o.K.C(a)};
g.h.isPeggedToLive=function(a){return RJ(this.o,void 0,void 0===a?!1:a)};
g.h.ZA=function(a,b){var c=a.g;if(1==this.T||2==this.T)c.startSeconds=b;2==this.T?HV(this):this.l.P("seekto",b)};
g.h.SE=function(){this.l.P("airplayactivechange")};
g.h.TE=function(){this.l.P("airplayavailabilitychange")};
g.h.jF=function(){this.l.P("beginseeking")};
g.h.SF=function(){this.l.P("endseeking")};
g.h.Yo=function(){var a=this.C.Eb(),b=RU(this);b.bf||!this.ma?(b=b.Lf,a=$V(this,a),b&&cW(this,a)):a&&dW(this,a);this.l.ka("onPlaylistUpdate")};
g.h.YE=function(a){this.l.ka("onCueRangeEnter",a.oa)};
g.h.ZE=function(a){this.l.ka("onCueRangeExit",a.oa)};
g.h.cF=function(){this.ua||(this.ua=IC(this.Ju,this));lF(this.I,lW(this))};
g.h.fG=function(){this.U.P("internalAbandon")};
g.h.Ju=function(a){a=a.g;if(!(0,window.isNaN)(a)&&0<a&&this.o){var b=this.o;b.C&&0<a&&(b.C.l.l.aft=[a])}};
g.h.GG=function(){this.Oo()};
g.h.HG=function(){this.Oo()};
g.h.Oo=function(){this.g.Za&&this.F?this.l.ka("onApiChange",this.F.getPlayerType()):this.l.ka("onApiChange")};
g.h.DG=function(){var a={volume:g.$c(Math.floor(100*this.B.Nb()),0,100),muted:this.B.g.muted};a.muted||KV(this,!1);this.K=g.hc(a);this.l.ka("onVolumeChange",a)};
g.h.WF=function(){var a=g.ut();pW(this,a==this.H.element?1:0);oW(this,!!a&&g.Qd(this.H.element,a))};
g.h.DH=function(){2!=this.Ua&&pW(this,g.ut()==this.H.element?1:0);this.g.Yg&&RU(this)&&!RU(this).backgroundable&&this.B&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&vt(this.B.g)};
g.h.lG=function(a){3!=wK(this)&&this.l.P("liveviewshift",a)};
g.h.isWidescreen=function(){return this.Yb};
g.h.CH=function(a){var b=g.sM(this.H);g.jh(this.Pc,b)||(this.Pc=b,this.F&&WJ(this.F,"r"),this.o&&this.o!=this.F&&WJ(this.o,"r"),1==this.Ua&&this.Ma&&oW(this,!0));this.Pb&&g.hd(this.Pb,a)||(this.l.P("appresize",a),this.Pb=a)};
g.h.Ac=function(){return this.U.Ac()};
g.h.SH=function(){qW(this,"signature")};
g.h.QG=function(){OU(this);NU(this)};
g.h.BF=function(){this.l.ka("CONNECTION_ISSUE")};
g.h.WA=function(a){this.l.P("heartbeatparams",a)};
g.h.VG=function(){var a=g.X(this);a&&g.oK(a,!KK(this.l))};
g.h.nG=function(){this.l.ka("onLoadedMetadata")};
g.h.PF=function(){this.l.ka("onDrmOutputRestricted")};
g.h.R=function(){this.o.dispose();OU(this);g.Me(g.Xb(this.Sa),this.C);g.HC(this.ua);this.ua=0;g.I.prototype.R.call(this)};
var xX={};g.y("yt.player.Application.create",function(a,b){try{var c=g.w(a)?a:"player"+g.Fa(a);if(xX[c]){try{xX[c].dispose()}catch(e){g.Q(e)}xX[c]=null}var d=new HU(a,b);g.Ke(d,function(){xX[c]=null});
return xX[c]=d}catch(e){throw g.Q(e),e.stack;}},void 0);
var yX=g.z("ytcsi.tick");yX&&yX("pe");})(_yt_player);
