/* Helper bersama: typing effect, scroll, hati melayang, confetti, layout section */
/* ---------- util ---------- */
function useTyping(text,active,speed=38){
  const [n,setN]=useState(0);
  useEffect(()=>{if(!active)return;setN(0);const id=setInterval(()=>setN(v=>{if(v>=text.length){clearInterval(id);return v}return v+1}),speed);return()=>clearInterval(id)},[active,text]);
  return text.slice(0,n);
}
const go=id=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"})};

const HeartsBG=({n=12})=>{
  const hs=useMemo(()=>Array.from({length:n},()=>({x:Math.random()*100,s:12+Math.random()*20,d:12+Math.random()*10,dl:Math.random()*8,o:.12+Math.random()*.2})),[]);
  return html`<div class="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">${hs.map((h,i)=>html`
    <${motion.div} key=${i} style=${{position:"absolute",left:h.x+"%",bottom:-40,color:"#60a5fa",opacity:h.o}}
      animate=${{y:[0,"-115vh"],x:[0,i%2?18:-18,0]}} transition=${{duration:h.d,delay:h.dl,repeat:Infinity,ease:"linear"}}>
      <${Heart} size=${h.s} fill="currentColor"/><//>`)}</div>`;
};

const Burst=({n=28,dist=260,colors=["#60a5fa","#93c5fd","#3b82f6","#bfdbfe"]})=>{
  const ps=useMemo(()=>Array.from({length:n},(_,i)=>{const a=(i/n)*Math.PI*2+Math.random()*.3,d=dist*(.5+Math.random()*.7);
    return{x:Math.cos(a)*d,y:Math.sin(a)*d-40,c:colors[i%colors.length],s:10+Math.random()*14,h:i%3!==0}}),[]);
  return html`<div class="pointer-events-none absolute left-1/2 top-1/2 z-40" aria-hidden="true">${ps.map((p,i)=>html`
    <${motion.div} key=${i} style=${{position:"absolute",color:p.c}} initial=${{x:0,y:0,opacity:1,scale:.3}}
      animate=${{x:p.x,y:p.y+90,opacity:0,scale:1.1,rotate:(i%2?1:-1)*120}} transition=${{duration:1.6,ease:"easeOut"}}>
      ${p.h?html`<${Heart} size=${p.s} fill="currentColor"/>`:html`<div style=${{width:p.s/2,height:p.s/1.5,background:p.c,borderRadius:2}}></div>`}<//>`)}</div>`;
};

const Reveal=({children,cls=""})=>html`<${motion.div} class=${cls} initial=${{opacity:0,y:22}} whileInView=${{opacity:1,y:0}} viewport=${{once:true,margin:"-60px"}} transition=${{duration:.7}}>${children}<//>`;
const Title=({sub,title})=>html`<${Reveal} cls="text-center mb-10"><p class="font-serif italic text-[#3b82f6] text-lg">${sub}</p><h2 class="font-serif font-bold text-3xl sm:text-4xl text-[#3a2a2e] mt-1">${title}</h2><//>`;
const Sec=({id,children,cls=""})=>html`<section id=${id} class=${"relative z-10 px-5 py-24 flex flex-col items-center justify-center "+cls}>${children}</section>`;

/* Bintang */
const Stars=({n=(window.innerWidth<640?50:90)})=>{
  const st=useMemo(()=>Array.from({length:n},()=>({
    x:Math.random()*100,y:Math.random()*100,s:Math.random()*2+1,
    d:2+Math.random()*4,dl:Math.random()*5,o:.4+Math.random()*.6
  })),[]);
  return html`<div class="stars" aria-hidden="true">
    ${st.map((s,i)=>html`<span key=${i} class="star" style=${{left:s.x+"%",top:s.y+"%",width:s.s,height:s.s,opacity:s.o,animationDuration:s.d+"s",animationDelay:s.dl+"s"}}></span>`)}
    <span class="shoot" style=${{top:"10%",left:"75%"}}></span>
    <span class="shoot" style=${{top:"28%",left:"95%",animationDelay:"5s"}}></span>
  </div>`;
};
