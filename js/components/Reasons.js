/* ---------- reasons ---------- */
function Card({r}){
  const [back,setBack]=useState(false);
  const [spin,setSpin]=useState(0);
  const flip=()=>{setSpin(s=>s+1);setTimeout(()=>setBack(b=>!b),250)};
  return html`<${Reveal}><div class="h-44 sm:h-52">
    <${motion.button} key=${spin} onClick=${flip} whileHover=${{y:-4}}
      initial=${{rotateY:0}} animate=${{rotateY:spin?[0,90,0]:0}} transition=${{duration:.5,ease:"easeInOut"}}
      style=${{transformPerspective:800}} aria-label=${"Alasan: "+r[0]}
      class=${"w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3 p-4 text-center shadow-md "+
        (back?"bg-gradient-to-br from-[#f7c6cf] to-[#efb5b3] text-sm sm:text-base leading-relaxed":"bg-white/80 border border-[#f0cfd4]")}>
      ${back
        ?html`<span>${r[1]}</span>`
        :html`<span class="text-[#e8457a]"><${Heart} size=${26} fill="currentColor"/></span>
              <span class="font-serif font-bold text-lg text-[#3a2a2e]">${r[0]}</span>
              <span class="text-xs text-[#a08589]">ketuk untuk membuka</span>`}
    <//></div><//>`;
}
const Reasons=()=>html`<${Sec} id="reasons"><${Title} sub="Reasons Why I Love You" title="Sebagian kecil alasanku"/>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl w-full">${REASONS.map((r,i)=>html`<${Card} key=${i} r=${r}/>`)}</div><//>`;