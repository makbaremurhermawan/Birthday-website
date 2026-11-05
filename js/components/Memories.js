/* ---------- memories ---------- */
function Memories(){
  const [sel,setSel]=useState(null);
  const tilt=[-2,1.5,-1,2,-1.5,1];const tones=["#1e3a8a","#1d4ed8","#1e40af","#1c3f94","#2347a8","#1e3a8a"];
  const Ph=({p,i,big})=>p.src?html`<img src=${p.src} alt=${p.cap} class="w-full h-full object-cover"/>`:
    html`<div class="w-full h-full flex flex-col items-center justify-center gap-2 text-[#cfe0ff]" style=${{background:`linear-gradient(135deg,${tones[i]},#0f1e3d)`}}><${Camera} size=${big?40:26}/><span class="text-xs">Ganti dengan fotomu</span></div>`;
  return html`<${Sec} id="memories">
    <${Title} sub="Our Little Memories" title="Potongan kecil tentang kita"/>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-7 max-w-4xl w-full">
      ${PHOTOS.map((p,i)=>html`<${Reveal} key=${i}>
        <${motion.button} whileHover=${{scale:1.04,rotate:0}} whileTap=${{scale:.97}} style=${{rotate:tilt[i]}} onClick=${()=>setSel(i)}
          class="block w-full bg-white p-2 sm:p-3 pb-3 shadow-md shadow-pink-200/60 rounded-sm text-left">
          <div class=${"overflow-hidden "+(i%3===1?"aspect-[3/4]":"aspect-square")}><${Ph} p=${p} i=${i}/></div>
          <p class="font-serif italic text-sm text-[#cfe0ff] mt-2 text-center">${p.cap}</p>
        <//><//>`)}
    </div>
    <${AnimatePresence}>
      ${sel!==null&&html`<${motion.div} key="lb" initial=${{opacity:0}} animate=${{opacity:1}} exit=${{opacity:0}} onClick=${()=>setSel(null)}
        class="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-5">
        <${motion.div} initial=${{scale:.7,opacity:0}} animate=${{scale:1,opacity:1}} exit=${{scale:.8,opacity:0}} transition=${{type:"spring",damping:22,stiffness:240}}
          onClick=${e=>e.stopPropagation()} class="bg-white p-3 pb-4 rounded-sm max-w-md w-full shadow-2xl">
          <div class="aspect-[4/5] max-h-[65vh] w-full overflow-hidden"><${Ph} p=${PHOTOS[sel]} i=${sel} big=${true}/></div>
          <p class="font-serif italic text-center text-[#cfe0ff] mt-3">${PHOTOS[sel].cap}</p>
        <//>
        <button onClick=${()=>setSel(null)} aria-label="Tutup" class="absolute top-5 right-5 text-white"><${X} size=${28}/></button>
      <//>`}
    <//>
  <//>`;
}
