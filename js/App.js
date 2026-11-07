/* Navigasi, pemutar musik, komponen App, dan render utama */
/* ---------- navigasi & musik ---------- */
const NAV=[["home","Awal"],["memories","Kenangan"],["reasons","Alasan"],["letter","Surat"],["surprise","Kejutan"]];
const Nav=()=>html`<nav class="fixed top-0 inset-x-0 z-30 pt-[calc(env(safe-area-inset-top,0px)+10px)] px-3 pointer-events-none">
  <div class="nav-pill pointer-events-auto mx-auto w-fit max-w-full flex gap-0.5 rounded-full bg-white/70 backdrop-blur px-1.5 py-1 shadow-sm border border-white overflow-x-auto">
  ${NAV.map(n=>html`<button key=${n[0]} onClick=${()=>go(n[0])} class="px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-sm text-[#8a5a62] hover:bg-[#ffe3e8] transition-colors whitespace-nowrap shrink-0">${n[1]}</button>`)}</div></nav>`;

const Player=({on,toggle})=>html`<div class=${"player "+(on?"on":"paused")}>
  <div class="eq" aria-hidden="true"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>
  <div class="meta"><b>${on?"Sedang diputar":"Musik berhenti"}</b><span>${MUSIC_TITLE}</span></div>
  <${motion.button} whileTap=${{scale:.9}} onClick=${toggle} class="pbtn" aria-label=${on?"Jeda musik":"Putar musik"}>${on?html`<${Pause} size=${18}/>`:html`<${Play} size=${18}/>`}<//>
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
    <${Player} on=${on} toggle=${toggle}/>
  </div>`;
}
ReactDOM.createRoot(document.getElementById("root")).render(html`<${App}/>`);