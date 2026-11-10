const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let lang='en', tab=0;
const carousel=$('.shots');
const slides=$$('.slide',carousel);
let currentSlide=0;

function showSlide(index){
  currentSlide=(index+slides.length)%slides.length;
  $('.slides',carousel).style.transform=`translateX(-${currentSlide*100}%)`;
  slides.forEach((slide,i)=>slide.setAttribute('aria-hidden',String(i!==currentSlide)));
}

$('.prev',carousel).addEventListener('click',()=>showSlide(currentSlide-1));
$('.next',carousel).addEventListener('click',()=>showSlide(currentSlide+1));

// 1. Render text for the current language (no page reload)
function render(){
  const t=T[lang];
  $$('[data-i18n]').forEach(e=>e.textContent=t[e.dataset.i18n]);
  $$('[data-i18n-ph]').forEach(e=>e.placeholder=t[e.dataset.i18nPh]);
  $('#know').innerHTML=t.know.map(k=>`<li>${k}</li>`).join('');
  $('#tabs').innerHTML=t.ed.map((x,i)=>`<li><button data-i="${i}" class="${i===tab?'on':''}"><span>0${i+1}</span>${x[0]}</button></li>`).join('');
  showTab(tab,false); placeInd();
}
function showTab(i,anim=true){
  tab=i; const x=T[lang].ed[i], p=$('#panel');
  $$('#tabs button').forEach((b,n)=>b.classList.toggle('on',n===i));
  $('h3',p).textContent=x[0]; $('p',p).textContent=x[1];
  $('.tags',p).innerHTML=x[2].map(s=>`<span>${s}</span>`).join('');
  p.classList.remove('k'); if(anim&&!calm){void p.offsetWidth;p.classList.add('k')}
}
$('#tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(b)showTab(+b.dataset.i)});

// 2. Language switch: fade out, swap lang/dir, fade in
$('#lang').onclick=()=>{
  document.body.classList.add('sw');
  setTimeout(()=>{
    lang=lang==='en'?'ar':'en';
    const h=document.documentElement; h.lang=lang; h.dir=lang==='ar'?'rtl':'ltr';
    $('#lang').textContent=lang==='ar'?'English':'عربي';
    render(); document.body.classList.remove('sw');
  },calm?0:250);
};

// 3. Loader and scroll reveals (IntersectionObserver)
addEventListener('load',()=>setTimeout(()=>{$('#loader').classList.add('done');
  $$('#hero .r').forEach((e,i)=>setTimeout(()=>e.classList.add('in'),calm?0:400+i*120))},300));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.sec .r').forEach(e=>io.observe(e));

// 4. Nav indicator follows the section in view
function placeInd(){const a=$('#links a.on')||$('#links a');if(!a)return;const i=$('#ind');i.style.left=a.offsetLeft+'px';i.style.width=a.offsetWidth+'px'}
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
  $$('#links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id));placeInd()}}),{rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s=>so.observe(s)); addEventListener('resize',placeInd);

// 5. Light parallax on elements marked data-p (skipped for reduced motion)
if(!calm){let tick=false;addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{
  $$('[data-p]').forEach(e=>e.style.transform=`translateY(${scrollY*e.dataset.p}px)`);tick=false})},{passive:true})}

render();
