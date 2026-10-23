(function(){
document.documentElement.className+=' js';
var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
if(t&&d&&o){
function openM(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
function closeM(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
t.addEventListener('click',function(){if(t.getAttribute('aria-expanded')==='true'){closeM();}else{openM();}});
if(c){c.addEventListener('click',closeM);}
o.addEventListener('click',closeM);
var links=d.querySelectorAll('a');
for(var i=0;i<links.length;i++){links[i].addEventListener('click',closeM);}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();}});
var gb=d.querySelectorAll('.mob-group-btn');
for(var j=0;j<gb.length;j++){gb[j].addEventListener('click',function(){var s=this.nextElementSibling;var ex=this.getAttribute('aria-expanded')==='true';this.setAttribute('aria-expanded',ex?'false':'true');if(s){s.classList.toggle('open',!ex);}});}
window.addEventListener('resize',function(){if(window.innerWidth>768){closeM();}});
}
var qs=document.querySelectorAll('.faq-q');
for(var k=0;k<qs.length;k++){qs[k].addEventListener('click',function(){var it=this.parentNode.parentNode;var open=it.classList.toggle('open');this.setAttribute('aria-expanded',open?'true':'false');});}
})();
