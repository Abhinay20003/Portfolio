const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
$('#year').textContent=new Date().getFullYear();

window.addEventListener('load',()=>setTimeout(()=>$('#pageLoader')?.classList.add('hide'),900));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));

const dot=$('.cursor-dot'), ring=$('.cursor-ring');
if(matchMedia('(pointer:fine)').matches){
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
  const follow=()=>{rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(follow)};follow();
  $$('a,.magnetic-card').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'))});
}

const portrait=$('.portrait-card'), portraitWrap=$('.portrait-wrap');
if(portrait && portraitWrap){
  portraitWrap.addEventListener('mousemove',e=>{
    if(innerWidth<900)return;
    const r=portraitWrap.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*9;
    const y=((e.clientY-r.top)/r.height-.5)*-9;
    portrait.style.animation='none';
    portrait.style.transform=`perspective(1200px) rotateY(${x}deg) rotateX(${y}deg) scale(1.018)`;
  });
  portraitWrap.addEventListener('mouseleave',()=>{
    portrait.style.transform='';
    setTimeout(()=>portrait.style.animation='',180);
  });
}

$$('.magnetic-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    if(innerWidth<900)return;
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left-r.width/2)/30, y=(e.clientY-r.top-r.height/2)/30;
    card.style.transform=`perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

addEventListener('scroll',()=>{
  const y=scrollY;
  if(portrait&&innerWidth>900) portrait.querySelector('img').style.transform=`scale(1.06) translateY(${Math.min(y*.025,18)}px)`;
},{passive:true});


// Light / dark mode — remembers the visitor's choice.
const themeToggle=$('#themeToggle'), themeMeta=$('#themeColorMeta');
const applyTheme=(theme)=>{
  document.documentElement.dataset.theme=theme;
  localStorage.setItem('theme',theme);
  if(themeToggle){
    themeToggle.setAttribute('aria-label', theme==='dark' ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.title=theme==='dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }
  if(themeMeta) themeMeta.setAttribute('content',theme==='dark' ? '#0a0a0a' : '#f1eee7');
};
if(themeToggle){
  const initial=document.documentElement.dataset.theme || 'dark';
  applyTheme(initial);
  themeToggle.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
}
