/* ---------- letter ---------- */
function Letter(){
  const [open,setOpen]=useState(false);
  return html`<${Sec} id="letter"><${Title} sub="A Special Letter" title="Sepucuk surat untukmu"/>
    <${motion.div} animate=${{rotate:open?[0,-8,8,0]:0,scale:open?.85:1}} class="text-[#b76e79] mb-4"><${Mail} size=${open?34:52} strokeWidth=${1.3}/><//>
    <${motion.button} whileHover=${{scale:1.05}} whileTap=${{scale:.96}} onClick=${()=>setOpen(!open)}
      class="rounded-full bg-[#b76e79] text-white px-7 py-3 font-medium shadow-lg shadow-rose-300/50">${open?"Tutup Surat":"Read My Letter"}<//>
    <${AnimatePresence}>
      ${open&&html`<${motion.div} key="p" initial=${{opacity:0,y:50,scaleY:.4}} animate=${{opacity:1,y:0,scaleY:1}} exit=${{opacity:0,y:30,scaleY:.5}}
        transition=${{duration:.7,ease:"easeOut"}} style=${{transformOrigin:"top"}}
        class="paper mt-8 w-full max-w-xl rounded-md shadow-xl shadow-pink-200/60 border border-[#f0dcd8] px-6 sm:px-10 py-9">
        ${LETTER.map((l,i)=>html`<${motion.p} key=${i} initial=${{opacity:0}} animate=${{opacity:1}} transition=${{delay:.5+i*.45}}
          class=${"font-serif text-[#4a3a3e] leading-8 mb-4 whitespace-pre-line "+(i===5?"italic text-[#8a5a62]":"")}>${l}<//>`)}
      <//>`}
    <//>
  <//>`;
}
