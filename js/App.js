/* Navigasi, pemutar musik, komponen App, dan render utama */
/* ---------- navigasi & musik ---------- */
const NAV=[["home","Awal"],["memories","Kenangan"],["reasons","Alasan"],["letter","Surat"],["surprise","Kejutan"]];
const Nav=()=>html`<nav class="fixed top-0 inset-x-0 z-30 flex justify-center pt-[calc(env(safe-area-inset-top,0px)+10px)] px-3 pointer-events-none">
  <div class="pointer-events-auto flex gap-1 rounded-full bg-white/70 backdrop-blur px-2 py-1 shadow-sm border border-white overflow-x-auto max-w-full">
  ${NAV.map(n=>html`<button key=${n[0]} onClick=${()=>go(n[0])} class="px-3 py-1.5 rounded-full text-xs sm:text-sm text-[#8a5a62] hover:bg-[#ffe3e8] transition-colors whitespace-nowrap">${n[1]}</button>`)}</div></nav>`;

const Player=({on,toggle})=>html`<div class=${"fixed right-3 bottom-[calc(env(safe-area-inset-bottom,0px)+12px)] z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#e8457a] to-[#e49aa5] text-white pl-4 pr-2 py-2 shadow-lg "+(on?"":"paused")}>
  <div class="flex items-end gap-[3px] h-4" aria-hidden="true"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>
  <div class="text-xs leading-tight hidden sm:block"><div class="font-medium">${on?"Sedang diputar":"Musik berhenti"}</div><div class="opacity-80">${MUSIC_TITLE}</div></div>
  <${motion.button} whileTap=${{scale:.9}} onClick=${toggle} aria-label=${on?"Jeda musik":"Putar musik"} class="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center">${on?html`<${Pause} size=${16}/>`:html`<${Play} size=${16}/>`}<//>
</div>`;

function App(){
  const [stage,setStage]=useState("welcome");const [opening,setOpening]=useState(false);
  const [on,toggle]=useMusic();
  const open=()=>{setOpening(true);setTimeout(()=>{setStage("main");window.scrollTo(0,0)},1300)};
  return html`<div>
    <${Stars}/>
    ${stage==="welcome"?html`<${Welcome} onOpen=${open} opening=${opening}/>`:html`<${motion.div} initial=${{opacity:0}} animate=${{opacity:1}} transition=${{duration:1}}>
      <${HeartsBG} n=${10}/><${Nav}/><${Hero}/><${Memories}/><${Reasons}/><${Letter}/><${Surprise}/>
      <footer class="relative z-10 text-center text-xs text-[#a08589] pb-24">Dibuat oleh Muhammad Akbar</footer><//>`}
    ${stage==="main"&&html`<${Player} on=${on} toggle=${toggle}/>`}
    ${stage==="welcome"&&html`<${Player} on=${on} toggle=${toggle}/>`}
  </div>`;
}
ReactDOM.createRoot(document.getElementById("root")).render(html`<${App}/>`);
