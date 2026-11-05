/* ---------- welcome ---------- */
function Welcome({onOpen,opening}){
  return html`<div class="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
    <${HeartsBG} n=${8}/>
    <${motion.div} animate=${{opacity:opening?0:1,scale:opening?.96:1}} transition=${{duration:.9,delay:opening?.35:0}} class="relative z-10 max-w-xl">
      <${motion.div} animate=${{scale:[1,1.12,1]}} transition=${{duration:1.8,repeat:Infinity}} class="inline-block text-[#e8457a] mb-6"><${Heart} size=${40} fill="currentColor"/><//>
      <h1 class="font-serif font-bold text-4xl sm:text-6xl text-[#3a2a2e] leading-tight">Happy Birthday Rosita!</h1>
      <p class="font-serif italic text-lg sm:text-xl text-[#7a6468] mt-5">Someone special has prepared something for you... </p>
      <p class="font-serif italic text-lg sm:text-s text-[#7a6468] mt-5">Kamu bisa menyalakan musik yang ada pojok bawah!</p>
      <${motion.button} whileHover=${{scale:1.05}} whileTap=${{scale:.96}} onClick=${onOpen} disabled=${opening}
        class="mt-10 inline-flex items-center gap-2 rounded-full bg-[#e8457a] text-white px-8 py-4 font-medium shadow-lg shadow-pink-300/60">
        Open Your Surprise <${Gift} size=${18}/><//>
    <//>
    ${opening&&html`<${Burst} n=${36} dist=${340}/>`}
  </div>`;
}
