/* ========================================
   CV LOGIC — faner, filter, print, språk
======================================== */

function g(id){return document.getElementById(id);}
// SNOWFLAKES
(function(){var c=g('sfw'),ch=['❄','❅','❆','·','•'];for(var i=0;i<18;i++){var s=document.createElement('div');s.className='sf';s.textContent=ch[Math.floor(Math.random()*5)];s.style.left=(Math.random()*100)+'%';s.style.animationDuration=(8+Math.random()*14)+'s';s.style.animationDelay=(-Math.random()*20)+'s';s.style.fontSize=(8+Math.random()*10)+'px';s.style.opacity=.2+Math.random()*.3;c.appendChild(s);}})();
// TABS
function sw(n,b){
  document.querySelectorAll('.tp-panel').forEach(function(p){p.classList.remove('on');});
  document.querySelectorAll('.tb').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-selected','false');});
  g('p-'+n).classList.add('on');
  b.classList.add('on');
  b.setAttribute('aria-selected','true');
}
// FILTER
function tf(type){var ww=g('sec-wk'),ew=g('sec-ed'),sk=g('sec-sk'),bw=g('bfw'),be=g('bfe');if(AF===type){AF=null;ww.style.display=ew.style.display=sk.style.display='';bw.classList.remove('af');be.classList.remove('af');}else{AF=type;bw.classList.remove('af');be.classList.remove('af');if(type==='work'){ww.style.display=sk.style.display='';ew.style.display='none';bw.classList.add('af');}else{ew.style.display='';ww.style.display=sk.style.display='none';be.classList.add('af');}}rfl();}
function rfl(){var t=T[L];g('lfw').textContent=AF==='work'?t.lfwo:t.lfw;g('lfe').textContent=AF==='edu'?t.lfeo:t.lfe;}
// TIMELINE
function rt(){
  var c=g('tl'),op={};c.querySelectorAll('.ye.op').forEach(function(e){op[e.dataset.idx]=1;});c.innerHTML='';
  EX.forEach(function(x,i){
    var r=x.r[L],co=x.c[L],d=x.d[L],b=x.b[L],t=T[L];
    var el=document.createElement('div');el.className='ye'+(op[i]?' op':'');el.dataset.idx=i;
    el.innerHTML='<div class="yh"><div class="yhl" onclick="this.closest(\'.ye\').classList.toggle(\'op\')">'
      +'<div class="yb2" contenteditable="true" onblur="EX['+i+'].y=this.textContent.trim();S()">'+x.y+'</div>'
      +'<div class="yc"><strong contenteditable="true" onblur="EX['+i+'].r.no=EX['+i+'].r.en=this.textContent.trim();S()">'+r+'</strong>'
      +'<span contenteditable="true" onblur="EX['+i+'].c.no=EX['+i+'].c.en=this.textContent.trim();S()">'+co+'</span></div>'
      +'<div class="ex">+</div></div>'
      +'<div class="yact"><button class="ya" onclick="mv('+i+',-1)">&#x2191;</button>'
      +'<button class="ya" onclick="mv('+i+',1)">&#x2193;</button>'
      +'<button class="ya dy" onclick="dy('+i+')">&#215;</button></div></div>'
      +'<div class="yb"><div class="ybi">'
      +'<span class="yd" contenteditable="true" onblur="EX['+i+'].d.no=EX['+i+'].d.en=this.textContent.trim();S()">'+d+'</span>'
      +'<ul class="ybul">'+b.map(function(bi,j){return'<li><span contenteditable="true" onblur="EX['+i+'].b.no['+j+']=EX['+i+'].b.en['+j+']=this.textContent.trim();S()">'+bi+'</span><span class="bdel" onclick="db('+i+','+j+')">&#215;</span></li>';}).join('')+'</ul>'
      +'<button class="add-btn" style="margin-bottom:10px;font-size:10px" onclick="ab('+i+')">'+t.addb+'</button>'
      +'<div class="ytags">'+x.t.map(function(ti,j){return'<span class="ytag"><span class="ytag-text" contenteditable="true" onblur="EX['+i+'].t['+j+']=this.textContent.trim();S()">'+ti+'</span><span class="xb" onclick="dt('+i+','+j+')" style="font-size:10px">&#215;</span></span>';}).join('')
      +'<button class="add-btn" style="font-size:10px" onclick="at('+i+')">'+t.addt+'</button>'
      +'</div></div></div>';
    c.appendChild(el);
  });
}
function db(i,j){EX[i].b.no.splice(j,1);EX[i].b.en.splice(j,1);rt();S();}
function ab(i){var p='Nytt punkt';EX[i].b.no.push(p);EX[i].b.en.push(p);rt();var el=g('tl').querySelector('[data-idx="'+i+'"]');if(el)el.classList.add('op');S();}
function dt(i,j){EX[i].t.splice(j,1);rt();S();}
function at(i){EX[i].t.push('Tag');rt();S();}
function dy(i){if(confirm(T[L].dc)){EX.splice(i,1);rt();S();}}
function mv(i,d){var n=i+d;if(n<0||n>=EX.length)return;var t=EX[i];EX[i]=EX[n];EX[n]=t;rt();S();}
function addYr(){EX.unshift({y:"2025",c:{no:"Selskap AS",en:"Company Ltd"},r:{no:"Tittel",en:"Title"},d:{no:"Beskrivelse.",en:"Description."},b:{no:["Punkt 1"],en:["Point 1"]},t:["Tag"]});rt();var f=g('tl').querySelector('.ye');if(f)f.classList.add('op');S();}
// SKILLS
function addSk(){var w=g('skw');var s=document.createElement('span');s.className='stag';s.innerHTML='<span class="stag-text" contenteditable="true">Ny</span><span class="xb" onclick="this.closest(\'.stag\').remove();S()">&#215;</span>';w.appendChild(s);s.querySelector('.stag-text').focus();document.execCommand('selectAll',false,null);S();}
// EDUCATION
function addEd(){var l=g('edl');var d=document.createElement('div');d.className='ei';d.innerHTML='<div class="ey" contenteditable="true">2025</div><div class="einfo"><strong contenteditable="true">Grad</strong><span contenteditable="true">Institusjon</span></div><span class="eidel" onclick="this.closest(\'.ei\').remove();S()">&#215;</span>';l.appendChild(d);d.querySelector('[contenteditable]').focus();S();}
// VALUES
function addVal(){var gr=g('vgrid');var d=document.createElement('div');d.className='vc';d.innerHTML='<div class="ic" contenteditable="true">&#x2B50;</div><h4 contenteditable="true">Ny verdi</h4><p contenteditable="true">Beskrivelse.</p><span class="xb" style="position:absolute;top:12px;right:12px;font-size:14px" onclick="this.closest(\'.vc\').remove();S()">&#215;</span>';gr.appendChild(d);d.querySelector('h4').focus();S();}
// INTERESTS
function addInt(){var w=g('intwrap');var d=document.createElement('div');d.className='ic2';d.innerHTML='<span contenteditable="true">&#x2B50;</span>&nbsp;<span contenteditable="true">Ny</span><span class="ic2del" onclick="this.closest(\'.ic2\').remove();S()">&#215;</span>';w.appendChild(d);d.querySelectorAll('span')[1].focus();S();}
// LANGUAGE BARS
function addLng(){var l=g('langl');var d=document.createElement('div');d.className='lr';d.innerHTML='<div class="ln" contenteditable="true">Spr\u00e5k</div><div class="ll" contenteditable="true">Niv\u00e5</div><div class="lbw" data-pct="50"><div class="lbar" style="width:50%"></div></div><div class="lpct">50%</div><span class="lrdel" onclick="this.closest(\'.lr\').remove();S()">&#215;</span>';l.appendChild(d);iBar(d.querySelector('.lbw'));d.querySelector('.ln').focus();S();}
function iBar(bar){bar.addEventListener('mousedown',function(e){e.preventDefault();_dr=bar;});bar.addEventListener('touchstart',function(){_dr=bar;},{passive:true});}
function cpct(bar,cx){var r=bar.getBoundingClientRect();var p=Math.round(Math.max(0,Math.min(100,(cx-r.left)/r.width*100)));bar.querySelector('.lbar').style.width=p+'%';bar.dataset.pct=p;var lp=bar.parentElement.querySelector('.lpct');if(lp)lp.textContent=p+'%';}
document.addEventListener('mousemove',function(e){if(_dr){e.preventDefault();cpct(_dr,e.clientX);}});
document.addEventListener('mouseup',function(){if(_dr){S();_dr=null;}});
document.addEventListener('touchmove',function(e){if(_dr){e.preventDefault();cpct(_dr,e.touches[0].clientX);}},{passive:false});
document.addEventListener('touchend',function(){if(_dr){S();_dr=null;}});
document.querySelectorAll('.lbw').forEach(iBar);
// AVATAR
function loadAv(inp){
  var f=inp.files[0];if(!f)return;
  var allowed=['image/jpeg','image/png','image/webp','image/gif'];
  if(allowed.indexOf(f.type)===-1){alert(L==='no'?'Kun JPG, PNG, WebP eller GIF er tillatt.':'Only JPG, PNG, WebP or GIF allowed.');inp.value='';return;}
  if(f.size>2097152){alert(L==='no'?'Bildet er for stort. Maks 2MB.':'Image too large. Max 2MB.');inp.value='';return;}
  var r=new FileReader();
  r.onload=function(e){
    var av=document.querySelector('.av');
    av.innerHTML='<img src="'+e.target.result+'" alt="Profilbilde" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">';
  };
  r.readAsDataURL(f);
}
// AUTOSAVE
function S(){clearTimeout(_st);_st=setTimeout(function(){try{localStorage.setItem('cv_EX',JSON.stringify(EX));localStorage.setItem('cv_L',L);var f=g('sfl');f.textContent=T[L].sav;f.classList.add('show');setTimeout(function(){f.classList.remove('show');},1500);}catch(e){}},600);}
document.addEventListener('input',function(e){if(e.target&&e.target.isContentEditable)S();});
// LANGUAGE SWITCH
function setLang(l){
  L=l;document.documentElement.lang=l;var t=T[l];
  document.querySelectorAll('.lb').forEach(function(b,i){
    var active=(l==='no'&&i===0)||(l==='en'&&i===1);
    b.classList.toggle('on',active);
    b.setAttribute('aria-pressed',active?'true':'false');
  });
  var ids=['t1','t2','t3','sl1','sl2','sl3','sl4','lsk','lex','led','lval','lint','llng','lci','lph','lloc','lweb','lsend','sl','pdfl','asl','ayl','ael','avl','ail','all','ehint','lfw','lfe','fln','fle','fls','flm'];
  ids.forEach(function(id){var el=g(id);if(el)el.textContent=t[id]||t[id.replace('sl','sl')];});
  // stat labels
  g('sl1').textContent=t.sl1;g('sl2').textContent=t.sl2;g('sl3').textContent=t.sl3;g('sl4').textContent=t.sl4;
  // about
  g('ain').innerHTML=typeof DOMPurify!=='undefined'?DOMPurify.sanitize(t.ain):t.ain;g('ap1').textContent=t.ap1;g('ap2').textContent=t.ap2;
  // values
  ['vh1','vp1','vh2','vp2','vh3','vp3','vh4','vp4'].forEach(function(id){var el=g(id);if(el)el.textContent=t[id];});
  // interests
  [1,2,3,4,5,6].forEach(function(n){var el=g('in'+n);if(el)el.textContent=t['in'+n];});
  // contact
  if(g('ch2'))g('ch2').textContent=t.ch2;
  if(g('csub'))g('csub').textContent=t.csub;
  if(g('avail'))g('avail').textContent=t.avail;
  if(g('locv'))g('locv').textContent=t.locv;
  // filter
  rfl();

  // update dark/print btn labels
  var dkl=g('dklbl');if(dkl){var isDark=document.body.classList.contains('dark');dkl.textContent=isDark?(l==='no'?'Lys modus':'Light mode'):(l==='no'?'Mørk modus':'Dark mode');}
  var pll=g('pllbl');if(pll)pll.textContent=_printMode?(l==='no'?'Tilbake til normal':'Back to normal'):(l==='no'?'Kompakt visning':'Compact view');

  // re-render timeline
  rt();
}
// SEND
function doSend(){var t=T[L],n=g('fn').value.trim(),e=g('fe').value.trim(),s=g('fs').value.trim(),m=g('fm').value.trim(),er=g('fer');if(!n||!e||!m){er.textContent=t.er;er.style.display='block';return;}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){er.textContent=t.ee;er.style.display='block';return;}er.style.display='none';var ep=g('eml').textContent.trim();var sub=s?s+' (fra '+n+')':((L==='no'?'Melding fra ':'Message from ')+n);var bdy=(L==='no'?'Fra: ':'From: ')+n+' <'+e+'>\n\n'+m;window.location.href='mailto:'+ep+'?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent(bdy);var btn=document.querySelector('.sb');btn.innerHTML=t.om;btn.style.background='var(--ag)';btn.style.color='var(--mn)';setTimeout(function(){btn.innerHTML='<span id="sl">'+t.sl+'</span>';btn.style.background='';btn.style.color='';},3000);}
// PRINT
// PRINT — inline styles beat all CSS including !important


function printCV(){
  var w = window.open('cv-print.html', '_blank');
  if(!w) alert(L==='no' ? 'Tillat popup for å bruke PDF.' : 'Allow popups to use PDF.');
}
// DARK MODE
function toggleDark(){
  var on=document.body.classList.toggle('dark');
  try{localStorage.setItem('cv_dark',on?'1':'0');}catch(e){}
  var t=T[L];
  var lbl=document.getElementById('dklbl');
  if(lbl)lbl.textContent=on?(L==='no'?'Lys modus':'Light mode'):(L==='no'?'Mørk modus':'Dark mode');
}
// PRINT LAYOUT TOGGLE
var _printMode=false;
function togglePrintLayout(){
  _printMode=!_printMode;
  document.body.classList.toggle('print-mode',_printMode);
  var btn=document.getElementById('plbtn');
  var lbl=document.getElementById('pllbl');
  if(_printMode){
    // open all year entries
    document.querySelectorAll('.ye').forEach(function(y){y.classList.add('op');});
    if(lbl)lbl.textContent=L==='no'?'Tilbake til normal':'Back to normal';
    if(btn){btn.style.background='var(--df)';btn.style.color='#fff';btn.style.borderColor='var(--df)';}
  } else {
    if(lbl)lbl.textContent=L==='no'?'Kompakt visning':'Compact view';
    if(btn){btn.style.background='';btn.style.color='';btn.style.borderColor='';}
  }
}
// RESTORE
(function(){try{var s=localStorage.getItem('cv_EX');if(s)EX=JSON.parse(s);var sl=localStorage.getItem('cv_L');if(sl==='no'||sl==='en')L=sl;
  // restore dark mode
  try{if(localStorage.getItem('cv_dark')==='1'){document.body.classList.add('dark');var dl=document.getElementById('dklbl');if(dl)dl.textContent=L==='no'?'Lys modus':'Light mode';}}catch(e){}
}catch(e){}})();
// INIT
rt();
if(L==='en')setLang('en');
// Expose for cv-print.html (window.opener access)
window.L=L;window.EX=EX;window.T=T;
