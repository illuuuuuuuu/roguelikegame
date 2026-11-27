const paths={
 cube:'<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m3 7 9 5 9-5M12 12v10M7.5 4.5l9 5"/>',
 blade:'<path d="m7 15 11-12 3 1-1 4L9 18M5 13l6 6M7 17l-4 4M3 17l4 4"/>',
 shield:'<path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6Z"/><path d="M12 6v11M7 9l5-3 5 3"/>',
 spark:'<path d="m14 2-9 12h7l-2 8 9-12h-7Z"/>',
 heart:'<path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/><path d="M8 12h8M12 8v8"/>',
 drop:'<path d="M12 2s-8 9-8 14a8 8 0 0 0 16 0c0-5-8-14-8-14Z"/><path d="M8 16a4 4 0 0 0 4 4"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 orbit:'<ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-45 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(45 12 12)"/><circle cx="12" cy="12" r="2"/>',
 sun:'<circle cx="12" cy="12" r="5"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
 book:'<path d="M12 5C8 2 3 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-2-7-1-10 1Zm0 0v16"/>',
 chart:'<path d="M3 3v18h18M7 16v-5m5 5V6m5 10v-8"/>',
 dice:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r=".8"/><circle cx="16" cy="8" r=".8"/><circle cx="12" cy="12" r=".8"/><circle cx="8" cy="16" r=".8"/><circle cx="16" cy="16" r=".8"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',
 menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
 volume:'<path d="M3 9h4l5-5v16l-5-5H3ZM16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
 mute:'<path d="M3 9h4l5-5v16l-5-5H3ZM16 9l6 6m0-6-6 6"/>',
 flame:'<path d="M13 2c2 7-6 8-3 12 2-1 3-3 4-5 3 3 6 5 5 9-1 5-12 6-14-1C3 11 9 7 13 2Z"/>',
 tent:'<path d="m3 21 9-19 9 19H3Zm5 0 4-9 4 9M2 21h20"/>',
 node:'<path d="m12 3 9 9-9 9-9-9Z"/><circle cx="12" cy="12" r="3"/>',
 external:'<path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>'};
export function icon(name,cls=''){return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.cube}</svg>`;}
export function enemyArt(kind='scout'){
 const complex=kind==='boss',elite=kind==='elite';
 return `<svg class="enemy-svg ${kind}" viewBox="0 0 360 290" fill="none" aria-hidden="true"><defs><radialGradient id="glow-${kind}"><stop stop-color="${complex?'#ff785a':'#bdf76e'}" stop-opacity=".24"/><stop offset="1" stop-color="#151b24" stop-opacity="0"/></radialGradient></defs><ellipse cx="180" cy="248" rx="110" ry="15" fill="#080b10"/><circle cx="180" cy="140" r="138" fill="url(#glow-${kind})"/><g stroke="${complex?'#ff8c70':'#b2db8e'}" stroke-width="1.2"><ellipse cx="180" cy="140" rx="125" ry="45" transform="rotate(-28 180 140)" opacity=".25"/><ellipse cx="180" cy="140" rx="125" ry="45" transform="rotate(48 180 140)" opacity=".18"/><path d="m180 40 80 47v94l-80 47-80-47V87Z" fill="#1a242d"/><path d="m180 40 80 47-80 48-80-48Z" fill="#2c3d43"/><path d="m180 135 80-48v94l-80 47Z" fill="#141d25"/><path d="M180 135v93"/><path d="m180 83 43 25v50l-43 25-43-25v-50Z" fill="#10161c" stroke-width="2"/><path d="m180 106 23 13v27l-23 13-23-13v-27Z" fill="${complex?'#ff785a':'#c6f778'}" stroke="none"/><path d="m180 117 13 8v15l-13 8-13-8v-15Z" fill="#151d21" stroke="none"/>${elite||complex?'<path d="m87 77-30 53 30 53M273 77l30 53-30 53M123 32l57-24 57 24M123 244l57 24 57-24" stroke-width="3"/>':''}${complex?'<circle cx="180" cy="133" r="103" stroke-dasharray="6 17"/><path d="M34 133h45m202 0h45M180 0v25m0 218v35"/>':''}</g></svg>`;
}
