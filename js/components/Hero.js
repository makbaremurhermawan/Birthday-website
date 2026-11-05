/* ---------- hero ---------- */
function Hero(){
  const t=useTyping(GREETING,true,36);
  return html`<${Sec} id="home" cls="min-h-screen text-center">
    <${motion.p} initial=${{opacity:0}} animate=${{opacity:1}} transition=${{delay:.3}} class="font-serif italic text-[#b76e79] flex items-center gap-2"><${Sparkles} size=${16}/> Hari spesialmu <${Sparkles} size=${16}/><//>
    <${motion.h1} initial=${{opacity:0,y:20}} animate=${{opacity:1,y:0}} transition=${{delay:.5,duration:.9}} class="font-serif font-bold text-[2.6rem] sm:text-7xl text-[#3a2a2e] leading-[1.05] mt-4">Happy Birthday,<br/><span class="rg">My Love!</span><//>
    <${motion.p} initial=${{opacity:0}} animate=${{opacity:1}} transition=${{delay:1.1}} class="font-serif italic text-2xl text-[#7a6468] mt-4">untuk ${NAME}<//>
    <${motion.div} initial=${{opacity:0}} animate=${{opacity:1}} transition=${{delay:1.4}} class="mt-6 inline-flex items-center gap-2 rounded-full border border-[#e3b7bb] bg-white/60 px-5 py-2 text-sm text-[#8a5a62]"><${Calendar} size=${16}/> ${DATE_TEXT}<//>
    <p class="mt-8 max-w-lg min-h-[7rem] text-[#5b4a4e] leading-relaxed">${t}<span class="inline-block w-[2px] h-4 bg-[#e8457a] ml-1 align-middle animate-pulse"></span></p>
    <${motion.button} onClick=${()=>go("memories")} animate=${{y:[0,8,0]}} transition=${{duration:1.8,repeat:Infinity}} class="mt-6 text-[#b76e79]" aria-label="Turun"><${ChevronDown} size=${28}/><//>
  <//>`;
}
