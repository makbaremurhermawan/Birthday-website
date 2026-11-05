/* ---------- surprise ---------- */
function Surprise(){
  const [st,setSt]=useState(0);
  const run=()=>{if(st)return;setSt(1);setTimeout(()=>setSt(2),1000)};
  return html`<${Sec} id="surprise" cls="min-h-screen text-center">
    <${Title} sub="Interactive Surprise" title="Satu kejutan terakhir"/>
    <div class="relative h-48 w-44 flex items-end justify-center">
      ${st>=1&&html`<${Burst} n=${44} dist=${300}/>`}
      <${motion.div} animate=${{y:st?-46:0,rotate:st?-14:0,x:st?-18:0}} transition=${{type:"spring",damping:10}} class="absolute top-[22px] z-20 w-44 h-9 rounded-md bg-[#2563eb] shadow-md"><div class="absolute left-1/2 -translate-x-1/2 w-5 h-full bg-[#bfdbfe]"></div><//>
      <div class="relative w-40 h-32 rounded-b-lg bg-[#3b82f6]"><div class="absolute left-1/2 -translate-x-1/2 w-5 h-full bg-[#bfdbfe]"></div>
        ${st>=1&&html`<${motion.div} initial=${{opacity:0,y:0,scale:.3}} animate=${{opacity:1,y:-72,scale:1}} transition=${{delay:.2}} class="absolute left-1/2 -translate-x-1/2 top-2"><${Heart} size=${40} fill="#bfdbfe" color="#3b82f6"/><//>`}
      </div>
    </div>
    ${st===0&&html`<${motion.button} whileHover=${{scale:1.05}} whileTap=${{scale:.95}} onClick=${run} class="mt-10 inline-flex items-center gap-2 rounded-full bg-[#2563eb] text-white px-8 py-4 font-medium shadow-lg shadow-blue-500/40"><${Gift} size=${18}/> One Last Surprise<//>`}
    <${AnimatePresence}>${st===2&&html`<${motion.div} key="m" initial=${{opacity:0,y:20}} animate=${{opacity:1,y:0}} transition=${{duration:1}} class="mt-12 max-w-lg">
      <p class="font-serif text-2xl sm:text-3xl text-[#cfe0ff] leading-snug">No matter how many birthdays come, I hope I get to celebrate every single one with you. <span class="rg font-bold">I love you! ♡</span></p>
      <button onClick=${()=>go("home")} class="mt-8 text-sm text-[#6cb2ff] underline underline-offset-4">Kembali ke atas</button>
    <//>`}<//>
  <//>`;
}