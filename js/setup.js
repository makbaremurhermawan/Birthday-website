/* Persiapan: alias React, htm, Framer Motion, dan ikon Lucide */
const {useState,useEffect,useRef,useMemo}=React;
const html=htm.bind(React.createElement);

const FM=window.Motion||{};
const strip=({initial,animate,exit,whileHover,whileTap,whileInView,viewport,transition,variants,layout,...p})=>p;
const motion=FM.motion||new Proxy({},{get:(_,t)=>(p)=>React.createElement(t,strip(p))});
const AnimatePresence=FM.AnimatePresence||(({children})=>children);
const L=window.LucideReact||{};
const Ic=n=>L[n]||(()=>null);
const Heart=Ic("Heart"),Gift=Ic("Gift"),Play=Ic("Play"),Pause=Ic("Pause"),Music=Ic("Music"),X=Ic("X"),
  Sparkles=Ic("Sparkles"),Mail=Ic("Mail"),ChevronDown=Ic("ChevronDown"),Camera=Ic("Camera"),Calendar=Ic("Calendar");
