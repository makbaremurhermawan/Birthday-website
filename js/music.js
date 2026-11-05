/* Musik latar (dibuat dengan WebAudio, tanpa file mp3) */
/* ---------- musik (sintesis WebAudio, tanpa file) ---------- */
function useMusic(){
  const s=useRef({});const [on,setOn]=useState(false);
  const toggle=()=>{
    const m=s.current;
    if(MUSIC_SRC){ // pakai file musik sendiri
      if(!m.audio){m.audio=new Audio(MUSIC_SRC);m.audio.loop=true;m.audio.volume=.6}
      if(m.audio.paused){
          m.audio.play().then(()=>setOn(true)).catch(e=>{
            console.error("Gagal memutar:",e);
            alert("Musik gagal dimuat: cek nama dan lokasi file di MUSIC_SRC");
            setOn(false);
          });
        }else{m.audio.pause();setOn(false)}
      return;
    }
    if(!m.ctx){
      const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
      const ctx=new AC(),g=ctx.createGain();g.gain.value=.16;g.connect(ctx.destination);
      const ch=[[261.6,329.6,392],[220,261.6,329.6],[174.6,220,261.6],[196,246.9,293.7]],pat=[0,1,2,1,2,1];let i=0;
      const note=(f,t)=>{const o=ctx.createOscillator(),e=ctx.createGain();o.type="triangle";o.frequency.value=f;
        e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.7,t+.03);e.gain.exponentialRampToValueAtTime(.001,t+1.6);
        o.connect(e);e.connect(g);o.start(t);o.stop(t+1.7)};
      m.id=setInterval(()=>{const c=ch[Math.floor(i/6)%4],t=ctx.currentTime+.05;
        if(i%6===0)note(c[0]/2,t);note(c[pat[i%6]]*(pat[i%6]===2?2:1),t);i++},460);
      m.ctx=ctx;setOn(true);return;
    }
    if(m.ctx.state==="running"){m.ctx.suspend();setOn(false)}else{m.ctx.resume();setOn(true)}
  };
  return [on,toggle];
}
