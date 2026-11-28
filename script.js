// =========================================================================
// DYNAMIC STUDIO CATALOG: PLAIN-LANGUAGE MODES, VISUALS & TECH STACK
// =========================================================================
const STUDIO_CATALOG = {
  projectTypes: {
    app: {
      id: 'app',
      label: 'Web App',
      roleLens: 'An interactive everyday app with clear screens, saved progress, helpful onboarding, and smooth workflows on any device.',
      samplePrompts: [
        { label: 'Kanban', prompt: 'Build an interactive Kanban & Sprint Planner app with drag-and-drop columns, priority tags, work-in-progress limits, instant search/filter, keyboard shortcuts, auto-save, and JSON backup export.' },
        { label: 'Cashflow', prompt: 'Build a Financial Expense & Cashflow Analyzer app with category budgets, recurring entries, visual charts, CSV export, and live balance projections.' },
        { label: 'Focus Synth', prompt: 'Build a Pomodoro & Deep Focus Workspace app with custom timer intervals, built-in ambient sound mixer, task queue, daily focus stats, and themes.' }
      ],
      categoryEssentials: [
        { id: 'onboarding-seed', label: 'Realistic Starter Examples', desc: 'Loads helpful sample data right away so users never stare at an empty screen.' },
        { id: 'search-filter', label: 'Instant Search, Filter & Sort', desc: 'Find, filter, and reorder items immediately as you type or tap tags.' },
        { id: 'multi-view', label: 'Multiple Views / Workspace Tabs', desc: 'Switch cleanly between views (e.g., Board, List, Stats) without losing state.' },
        { id: 'undo-redo', label: 'Undo & Redo Safety Net', desc: 'Let users reverse accidental deletes or edits with one click or Ctrl+Z.' },
        { id: 'command-palette', label: 'Keyboard Shortcuts & Quick Bar', desc: 'Fast power-user shortcuts that stay out of the way when typing.' },
        { id: 'empty-cta', label: 'Helpful Empty States', desc: 'Friendly guidance and a clear primary button whenever a list is empty.' },
        { id: 'theme-switch', label: 'Light / Dark Theme Switch', desc: 'Let users toggle between dark and daylight modes with saved preference.' },
        { id: 'print-share', label: 'Clean Print & Summary Export', desc: 'Format a clean printable summary or shareable snapshot of user data.' }
      ],
      defaults: {
        targetPlatform: 'responsive-parity',
        dataPersistence: 'localstorage-json',
        complexity: 'balanced-complete',
        navStyle: 'tabbed-views',
        starterExp: 'realistic-demo',
        sensoryAudio: 'web-audio-subtle',
        a11yMotion: 'wcag-aa-fluid',
        interfaceDesign: 'bento-grid',
        designStyle: 'obsidian-saas',
        colorMood: 'indigo-slate',
        typographyStyle: 'clean-modern',
        elementStyle: 'specular-hairline',
        lightingStyle: 'top-specular-rim',
        html5: ['semantic-landmarks', 'dialog-popover', 'template-cloning', 'inline-svg', 'aria-live', 'viewport-safe-area', 'file-blob-io'],
        css3: ['oklch-tokens', 'grid-subgrid', 'container-queries', 'has-selector', 'fluid-clamp-tabular', 'custom-scroll-selection', 'reduced-motion'],
        jsArch: ['central-state', 'event-delegation', 'undo-redo-stack', 'web-audio-synth'],
        jsLibs: [],
        essentials: ['onboarding-seed', 'search-filter', 'multi-view', 'undo-redo', 'empty-cta']
      }
    },
    tool: {
      id: 'tool',
      label: 'Utility / Tool',
      roleLens: 'A fast, accurate workbench tool focused on instant live results, zero friction, batch handling, and one-click copy/export.',
      samplePrompts: [
        { label: 'CSS Lab', prompt: 'Build a live CSS3 Gradient, Shadow & Glassmorphism Lab tool with multi-stop controls, real-time preview card, contrast checker, presets, and one-click CSS copy.' },
        { label: 'JSON Forge', prompt: 'Build a client-side JSON/CSV Transformer & Diff Inspector tool with validation, tree explorer, path filtering, and instant download.' },
        { label: 'Audio EQ', prompt: 'Build a browser-based Waveform & Parametric Tone Analyzer tool using Web Audio with real-time spectrum canvas, presets, and WAV export.' }
      ],
      categoryEssentials: [
        { id: 'live-calc', label: 'Instant Live Output', desc: 'Updates results immediately as you type or drag sliders—no extra Submit button.' },
        { id: 'batch-io', label: 'Drag & Drop File Processing', desc: 'Drop files or paste raw text to inspect, convert, and download in seconds.' },
        { id: 'precision-inputs', label: 'Precision Sliders & Steppers', desc: 'Fine-grained number controls and steady non-jittering numeric readouts.' },
        { id: 'copy-export', label: 'One-Click Copy & Export', desc: 'Copy formatted output to clipboard or download as clean files.' },
        { id: 'preset-bank', label: 'Built-in Starter Presets', desc: 'Ready-made examples users can load, tweak, and learn from immediately.' },
        { id: 'strict-validation', label: 'Clear Error Diagnostics', desc: 'Explains mistakes in plain language without crashing or losing input.' },
        { id: 'side-by-side-diff', label: 'Before / After Comparison', desc: 'Compare original input against transformed output side-by-side.' },
        { id: 'history-snapshots', label: 'Recent Runs History', desc: 'Quickly jump back to recent calculations or configurations.' }
      ],
      defaults: {
        targetPlatform: 'desktop-pro',
        dataPersistence: 'localstorage-csv',
        complexity: 'powerhouse-deep',
        navStyle: 'single-screen',
        starterExp: 'template-picker',
        sensoryAudio: 'silent-clean',
        a11yMotion: 'wcag-aa-fluid',
        interfaceDesign: 'split-workbench',
        designStyle: 'swiss-minimal',
        colorMood: 'ocean-cyan',
        typographyStyle: 'tech-mono',
        elementStyle: 'layered-elevation',
        lightingStyle: 'soft-studio-shadow',
        html5: ['semantic-landmarks', 'template-cloning', 'inline-svg', 'aria-live', 'drag-drop', 'file-blob-io', 'viewport-safe-area'],
        css3: ['oklch-tokens', 'grid-subgrid', 'container-queries', 'has-selector', 'cascade-layers', 'fluid-clamp-tabular', 'custom-scroll-selection', 'reduced-motion'],
        jsArch: ['central-state', 'event-delegation', 'undo-redo-stack', 'web-worker'],
        jsLibs: [],
        essentials: ['live-calc', 'precision-inputs', 'copy-export', 'preset-bank', 'strict-validation']
      }
    },
    game: {
      id: 'game',
      label: 'Game',
      roleLens: 'A smooth, responsive browser game with an addictive core loop, crisp controls on keyboard & touch, juicy feedback, and high replayability.',
      samplePrompts: [
        { label: 'Neon Drift', prompt: 'Build an arcade Neon Vector Space Dodge & Combo Wave game on Canvas with mouse/touch/keyboard controls, enemy waves, particle explosions, synth SFX, and local high-score board.' },
        { label: 'Hex Tactics', prompt: 'Build a turn-based Tactical Hex Grid Puzzle game with procedural boards, unit abilities, move previews, undo move, progressive stages, and synthesized sound effects.' },
        { label: 'Rhythm Tap', prompt: 'Build a precision 4-Lane Synth Rhythm Game with built-in beat synthesis, timing judgments (Perfect/Good/Miss), combo multiplier, BPM selector, and touch/keyboard lanes.' }
      ],
      categoryEssentials: [
        { id: 'core-loop', label: 'Addictive Core Gameplay Loop', desc: 'Clear Challenge -> Action -> Feedback -> Reward cycle playable in under 5 seconds.' },
        { id: 'game-fsm', label: 'Title, Play, Pause & Game-Over Flow', desc: 'Clean game states with instant 1-tap Restart and zero lingering bugs.' },
        { id: 'game-feel', label: 'Juicy Visual & Audio Feedback', desc: 'Particle bursts, subtle screen shake, score popups, and crisp sound cues.' },
        { id: 'score-progression', label: 'Combos, Streaks & High Scores', desc: 'Rewarding multipliers and saved personal-best leaderboards.' },
        { id: 'difficulty-curve', label: 'Fair Escalating Difficulty', desc: 'Welcoming first 30 seconds that ramps up into exciting mastery.' },
        { id: 'dual-controls', label: 'Keyboard + Touch Controls', desc: 'Plays effortlessly with WASD/Arrows/Mouse AND mobile touch controls.' },
        { id: 'unlockables', label: 'Achievements or Unlockables', desc: 'Milestones, ranks, or visual unlocks that keep players coming back.' },
        { id: 'practice-mode', label: 'Difficulty / Mode Selector', desc: 'Let players choose Chill, Standard, or Endless/Arcade pacing.' }
      ],
      defaults: {
        targetPlatform: 'fullscreen-arcade',
        dataPersistence: 'localstorage-json',
        complexity: 'balanced-complete',
        navStyle: 'single-screen',
        starterExp: 'quick-tour',
        sensoryAudio: 'web-audio-arcade',
        a11yMotion: 'high-refresh-120',
        interfaceDesign: 'fullscreen-stage',
        designStyle: 'cyberpunk-hud',
        colorMood: 'violet-neon',
        typographyStyle: 'tech-mono',
        elementStyle: 'chamfered-scifi',
        lightingStyle: 'neon-bloom',
        html5: ['canvas-surface', 'inline-svg', 'aria-live', 'viewport-safe-area'],
        css3: ['oklch-tokens', 'fluid-clamp-tabular', 'reduced-motion'],
        jsArch: ['central-state', 'fsm-states', 'delta-raf-loop', 'web-audio-synth', 'pointer-gesture-lock'],
        jsLibs: [],
        essentials: ['core-loop', 'game-fsm', 'game-feel', 'score-progression', 'difficulty-curve', 'dual-controls']
      }
    },
    experimental: {
      id: 'experimental',
      label: 'Creative / Sandbox',
      roleLens: 'An expressive creative playground blending generative visuals, live physics or sound, and tactile controls anyone can explore.',
      samplePrompts: [
        { label: 'Boid Field', prompt: 'Build an interactive Generative Flow-Field & Boids Ecosystem simulator with pointer attractor/repulsor brushes, color palette mutator, live parameter HUD, and PNG snapshot export.' },
        { label: 'Modular Synth', prompt: 'Build a Visual Node-Based Ambient Drone & Sequencer playground where dragging glowing orbs shapes oscillators, filters, and canvas ripples.' },
        { label: 'Kinetic Type', prompt: 'Build a kinetic interactive Typography & Physics Poster sandbox where user text shatters, orbits, and reacts to pointer speed, gravity sliders, and beat pulses.' }
      ],
      categoryEssentials: [
        { id: 'procedural-seed', label: 'Endless Variations & Randomize', desc: 'Generate fresh seeds and unexpected combinations with one tap.' },
        { id: 'param-hud', label: 'Collapsible Live Controls HUD', desc: 'Tweak sliders and dials in real time while watching the canvas react.' },
        { id: 'canvas-shader', label: 'Full-Screen Reactive Canvas', desc: 'Fluid particles, physics, or generative art responding to every move.' },
        { id: 'snapshot-export', label: 'Save Image or Preset', desc: 'Export a crisp PNG snapshot or save favorite setups.' },
        { id: 'audio-reactive', label: 'Sound & Visual Sync', desc: 'Built-in sound engine or beat pulse driving visual motion.' },
        { id: 'unconventional-ui', label: 'Playful Spatial Interface', desc: 'Floating pills, radial controls, or tactile direct-on-canvas manipulation.' },
        { id: 'gallery-presets', label: 'Curated Showcase Presets', desc: 'Inspiring starting scenes so anyone can see what is possible right away.' },
        { id: 'zen-hide-ui', label: 'Hide UI / Zen Mode', desc: 'Hide all panels with one tap for pure full-screen immersion.' }
      ],
      defaults: {
        targetPlatform: 'fullscreen-arcade',
        dataPersistence: 'localstorage-json',
        complexity: 'balanced-complete',
        navStyle: 'floating-dock',
        starterExp: 'template-picker',
        sensoryAudio: 'web-audio-arcade',
        a11yMotion: 'high-refresh-120',
        interfaceDesign: 'floating-hud',
        designStyle: 'glassmorphism',
        colorMood: 'ocean-cyan',
        typographyStyle: 'friendly-rounded',
        elementStyle: 'pill-tactile',
        lightingStyle: 'ambient-aura',
        html5: ['canvas-surface', 'inline-svg', 'viewport-safe-area', 'file-blob-io'],
        css3: ['oklch-tokens', 'view-transitions', 'fluid-clamp-tabular', 'reduced-motion'],
        jsArch: ['central-state', 'delta-raf-loop', 'web-audio-synth', 'pointer-gesture-lock'],
        jsLibs: [],
        essentials: ['procedural-seed', 'param-hud', 'canvas-shader', 'snapshot-export', 'gallery-presets']
      }
    }
  },

  interfaceDesigns: [
    {
      id: 'bento-grid',
      name: 'Bento Grid Cards',
      desc: 'Best for dashboards & apps: clean modular boxes of different sizes.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="8" y="8" width="68" height="42" rx="6" fill="#131c2e" stroke="#334155"/><rect x="82" y="8" width="70" height="20" rx="5" fill="#172542" stroke="#6366f1" stroke-opacity=".6"/><rect x="82" y="32" width="33" height="18" rx="4" fill="#131c2e" stroke="#334155"/><rect x="120" y="32" width="32" height="18" rx="4" fill="#131c2e" stroke="#334155"/><rect x="8" y="55" width="94" height="27" rx="5" fill="#131c2e" stroke="#334155"/><rect x="108" y="55" width="44" height="27" rx="5" fill="#0f2933" stroke="#22d3ee" stroke-opacity=".6"/></svg>`
    },
    {
      id: 'split-workbench',
      name: 'Side-by-Side Workbench',
      desc: 'Best for tools & editors: controls on one side, live result on the other.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="6" y="6" width="148" height="12" rx="3" fill="#111827" stroke="#334155"/><rect x="6" y="22" width="48" height="62" rx="5" fill="#0f172a" stroke="#6366f1" stroke-opacity=".5"/><rect x="12" y="28" width="36" height="8" rx="2" fill="#1e293b"/><rect x="12" y="40" width="36" height="8" rx="2" fill="#1e293b"/><rect x="12" y="52" width="36" height="8" rx="2" fill="#1e293b"/><rect x="59" y="22" width="95" height="62" rx="5" fill="#0b1220" stroke="#334155"/><rect x="66" y="29" width="81" height="48" rx="3" fill="#131c2e"/></svg>`
    },
    {
      id: 'fullscreen-stage',
      name: 'Full-Screen Stage',
      desc: 'Best for games & drawing: edge-to-edge canvas with compact corner HUD.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#050811"/><circle cx="80" cy="46" r="22" fill="none" stroke="#22d3ee" stroke-opacity=".4" stroke-dasharray="4 3"/><circle cx="80" cy="46" r="8" fill="#6366f1" fill-opacity=".8"/><rect x="8" y="8" width="38" height="11" rx="5" fill="#111827" stroke="#334155"/><rect x="114" y="8" width="38" height="11" rx="5" fill="#111827" stroke="#22d3ee" stroke-opacity=".6"/><rect x="50" y="73" width="60" height="10" rx="5" fill="#111827" stroke="#334155"/></svg>`
    },
    {
      id: 'focus-card',
      name: 'Centered Focus Column',
      desc: 'Best for calm daily use: one clear centered card with zero clutter.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="34" y="8" width="92" height="74" rx="7" fill="#111827" stroke="#334155"/><rect x="42" y="16" width="54" height="8" rx="2" fill="#6366f1" fill-opacity=".6"/><rect x="42" y="30" width="76" height="18" rx="4" fill="#1e293b"/><rect x="42" y="53" width="76" height="12" rx="4" fill="#1e293b"/><rect x="82" y="69" width="36" height="8" rx="3" fill="#22d3ee" fill-opacity=".75"/></svg>`
    },
    {
      id: 'floating-hud',
      name: 'Floating Dock & Canvas',
      desc: 'Best for creative sandboxes: open workspace with a sleek floating toolbar.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#060a12"/><path d="M10 65 Q50 20 90 50 T150 30" fill="none" stroke="#6366f1" stroke-width="2" stroke-opacity=".55"/><rect x="10" y="10" width="44" height="24" rx="6" fill="#111827" fill-opacity=".85" stroke="#334155"/><rect x="35" y="68" width="90" height="14" rx="7" fill="#111827" fill-opacity=".9" stroke="#22d3ee" stroke-opacity=".6"/><circle cx="52" cy="75" r="3" fill="#6366f1"/><circle cx="70" cy="75" r="3" fill="#22d3ee"/><circle cx="88" cy="75" r="3" fill="#34d399"/><circle cx="106" cy="75" r="3" fill="#f59e0b"/></svg>`
    },
    {
      id: 'tabbed-studio',
      name: 'Multi-Tab Studio',
      desc: 'Best for rich multi-part apps: organized tabs keeping each screen spacious.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="8" y="8" width="32" height="11" rx="3" fill="#4f46e5"/><rect x="44" y="8" width="32" height="11" rx="3" fill="#1e293b"/><rect x="80" y="8" width="32" height="11" rx="3" fill="#1e293b"/><rect x="8" y="23" width="144" height="59" rx="5" fill="#111827" stroke="#334155"/><rect x="16" y="31" width="60" height="43" rx="4" fill="#1e293b"/><rect x="82" y="31" width="62" height="20" rx="4" fill="#1e293b"/><rect x="82" y="54" width="62" height="20" rx="4" fill="#0f2933"/></svg>`
    }
  ],

  designStyles: [
    {
      id: 'obsidian-saas',
      name: 'Obsidian Pro Dark',
      desc: 'Sleek dark slate with razor-thin borders and crisp contrast.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#090d14"/><rect x="14" y="14" width="132" height="62" rx="8" fill="#111827" stroke="#334155"/><rect x="24" y="24" width="52" height="10" rx="3" fill="#e2e8f0" fill-opacity=".85"/><rect x="24" y="40" width="112" height="24" rx="5" fill="#0b101b" stroke="#1e293b"/><rect x="100" y="22" width="36" height="12" rx="4" fill="#6366f1"/></svg>`
    },
    {
      id: 'glassmorphism',
      name: 'Frosted Glass',
      desc: 'Translucent blurred panels floating over soft colorful gradients.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><radialGradient id="g1" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#090d14"/></radialGradient></defs><rect width="160" height="90" fill="url(#g1)"/><circle cx="122" cy="64" r="24" fill="#22d3ee" fill-opacity=".45"/><rect x="20" y="16" width="120" height="58" rx="10" fill="#ffffff" fill-opacity=".12" stroke="#ffffff" stroke-opacity=".35"/><rect x="30" y="28" width="55" height="8" rx="4" fill="#ffffff" fill-opacity=".7"/><rect x="30" y="42" width="96" height="20" rx="6" fill="#ffffff" fill-opacity=".1" stroke="#ffffff" stroke-opacity=".2"/></svg>`
    },
    {
      id: 'swiss-minimal',
      name: 'Clean Daylight Editorial',
      desc: 'Bright white/cream paper feel, sharp typography & generous space.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#f8fafc"/><rect x="14" y="14" width="46" height="10" fill="#0f172a"/><rect x="14" y="30" width="132" height="1" fill="#cbd5e1"/><rect x="14" y="38" width="62" height="36" fill="#ffffff" stroke="#e2e8f0"/><rect x="84" y="38" width="62" height="36" fill="#ffffff" stroke="#e2e8f0"/><circle cx="136" cy="19" r="5" fill="#ef4444"/></svg>`
    },
    {
      id: 'neubrutalism',
      name: 'Bold Pop-Art (Neubrutal)',
      desc: 'Playful thick black outlines, punchy colors & crisp block shadows.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#fef08a"/><rect x="22" y="18" width="120" height="56" rx="4" fill="#000000"/><rect x="18" y="14" width="120" height="56" rx="4" fill="#ffffff" stroke="#000000" stroke-width="2.5"/><rect x="28" y="24" width="56" height="12" fill="#f472b6" stroke="#000" stroke-width="2"/><rect x="94" y="44" width="36" height="16" fill="#34d399" stroke="#000" stroke-width="2"/></svg>`
    },
    {
      id: 'cyberpunk-hud',
      name: 'Sci-Fi / Cyberpunk HUD',
      desc: 'Futuristic telemetry lines, glowing neon edges & tactical feel.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#050510"/><path d="M0 70 L160 70 M0 20 L160 20" stroke="#22d3ee" stroke-opacity=".18"/><polygon points="18,16 132,16 144,28 144,74 28,74 18,64" fill="#0b1024" stroke="#22d3ee" stroke-width="1.5"/><rect x="28" y="28" width="68" height="8" fill="#f43f5e"/><rect x="28" y="42" width="102" height="18" fill="#111936" stroke="#22d3ee" stroke-opacity=".4"/></svg>`
    },
    {
      id: 'neumorphism-clay',
      name: 'Soft Clay / Plush',
      desc: 'Friendly sculpted 3D-like surfaces with soft pillowy corners.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#1e2433"/><rect x="20" y="16" width="120" height="58" rx="16" fill="#232a3b" stroke="#2f384f"/><rect x="32" y="28" width="44" height="34" rx="12" fill="#2a3347" stroke="#3b4661"/><circle cx="108" cy="45" r="15" fill="#6366f1"/></svg>`
    },
    {
      id: 'retro-crt',
      name: 'Retro Terminal / Arcade',
      desc: 'Classic glowing phosphor green/amber pixels with nostalgic charm.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#041008"/><rect x="12" y="10" width="136" height="70" rx="8" fill="#071a0e" stroke="#22c55e" stroke-width="2"/><rect x="22" y="22" width="70" height="8" fill="#22c55e"/><rect x="22" y="36" width="116" height="6" fill="#166534"/><rect x="22" y="48" width="90" height="6" fill="#166534"/><rect x="22" y="62" width="14" height="8" fill="#4ade80"/></svg>`
    },
    {
      id: 'warm-paper',
      name: 'Warm Studio Notebook',
      desc: 'Cozy warm stone/ivory tones, gentle ink borders & calm reading.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#f5efe6"/><rect x="18" y="14" width="124" height="62" rx="8" fill="#fffcf7" stroke="#d6ccc2" stroke-width="1.5"/><rect x="28" y="24" width="60" height="9" rx="3" fill="#432818"/><rect x="28" y="40" width="104" height="24" rx="5" fill="#f5ebe0" stroke="#e3d5ca"/><rect x="98" y="22" width="34" height="12" rx="4" fill="#bc6c25"/></svg>`
    }
  ],

  colorMoods: [
    { id: 'indigo-slate', name: 'Midnight Indigo', desc: 'Deep slate with indigo & sky accents', colors: ['#090d14', '#1e293b', '#6366f1', '#22d3ee'] },
    { id: 'ocean-cyan', name: 'Oceanic Teal', desc: 'Crisp navy with aqua & mint highlights', colors: ['#06131f', '#132a3e', '#0ea5e9', '#2dd4bf'] },
    { id: 'amber-charcoal', name: 'Warm Gold & Charcoal', desc: 'Rich charcoal with warm amber glow', colors: ['#111113', '#27272a', '#f59e0b', '#fb7185'] },
    { id: 'emerald-forest', name: 'Emerald Sage', desc: 'Deep forest dark with fresh mint', colors: ['#07120e', '#132920', '#10b981', '#a3e635'] },
    { id: 'violet-neon', name: 'Electric Arcade', desc: 'High-energy purple, magenta & cyan', colors: ['#090514', '#1e1035', '#a855f7', '#22d3ee'] },
    { id: 'crisp-daylight', name: 'Clean Daylight', desc: 'Bright airy whites with cobalt blue', colors: ['#f8fafc', '#e2e8f0', '#2563eb', '#0f172a'] }
  ],

  typographyStyles: [
    { id: 'clean-modern', name: 'Clean Modern', desc: 'Crisp everyday sans-serif (Inter / system) for instant clarity.' },
    { id: 'tech-mono', name: 'Technical & Precision', desc: 'Clean UI sans paired with monospace numbers & telemetry.' },
    { id: 'editorial-serif', name: 'Editorial Magazine', desc: 'Refined serif headlines paired with comfortable reading text.' },
    { id: 'friendly-rounded', name: 'Warm & Friendly', desc: 'Approachable rounded headings with relaxed, inviting spacing.' }
  ],

  elementStyles: [
    {
      id: 'specular-hairline',
      name: 'Crisp Glass Edge',
      desc: 'Subtle bright top edge on cards with smooth rounded corners.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#080c14"/><rect x="18" y="16" width="124" height="58" rx="12" fill="#111827" stroke="#334155"/><line x1="28" y1="17" x2="132" y2="17" stroke="#94a3b8" stroke-opacity=".55"/><rect x="28" y="26" width="104" height="38" rx="7" fill="#0b101b" stroke="#1e293b"/></svg>`
    },
    {
      id: 'brutal-offset',
      name: 'Bold Sticker Offset',
      desc: 'Thick crisp outlines with solid zero-blur drop shadows.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#111827"/><rect x="30" y="24" width="106" height="46" rx="4" fill="#000"/><rect x="24" y="18" width="106" height="46" rx="4" fill="#1e293b" stroke="#e2e8f0" stroke-width="2"/><rect x="34" y="30" width="52" height="22" rx="3" fill="#22d3ee"/></svg>`
    },
    {
      id: 'pill-tactile',
      name: 'Smooth Pill & Tactile',
      desc: 'Soft capsule buttons that gently bounce when pressed.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#090d14"/><rect x="20" y="22" width="120" height="46" rx="23" fill="#131c2e" stroke="#334155"/><rect x="30" y="32" width="56" height="26" rx="13" fill="#6366f1"/><rect x="94" y="32" width="36" height="26" rx="13" fill="#1e293b" stroke="#475569"/></svg>`
    },
    {
      id: 'chamfered-scifi',
      name: 'Angled Sci-Fi Cut',
      desc: 'Sleek 45-degree notched corners for tactical & game UIs.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070a12"/><polygon points="24,18 130,18 142,30 142,72 30,72 18,60 18,24" fill="#111827" stroke="#22d3ee" stroke-width="1.5"/><polygon points="32,32 88,32 96,40 96,58 32,58" fill="#164e63"/></svg>`
    },
    {
      id: 'flat-borderless',
      name: 'Clean Tonal Blocks',
      desc: 'No outlines at all—cards stand out purely by gentle shading.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0f172a"/><rect x="18" y="16" width="124" height="58" rx="8" fill="#1e293b"/><rect x="28" y="26" width="54" height="38" rx="6" fill="#293548"/><rect x="90" y="26" width="42" height="38" rx="6" fill="#334155"/></svg>`
    },
    {
      id: 'layered-elevation',
      name: 'Floating Layered Cards',
      desc: 'Soft multi-layered shadows that make active cards lift off the page.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0b101b"/><rect x="18" y="24" width="100" height="50" rx="8" fill="#131c2e" stroke="#1e293b"/><rect x="42" y="14" width="100" height="50" rx="8" fill="#1a2438" stroke="#475569"/></svg>`
    }
  ],

  lightingStyles: [
    {
      id: 'top-specular-rim',
      name: 'Overhead Rim Highlight',
      desc: 'Subtle light catching the top edge of panels like machined metal.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><linearGradient id="rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff" stop-opacity=".22"/><stop offset="40%" stop-color="#111827" stop-opacity="1"/></linearGradient></defs><rect width="160" height="90" fill="#070a10"/><rect x="22" y="20" width="116" height="52" rx="10" fill="url(#rim)" stroke="#334155"/><line x1="30" y1="20.5" x2="130" y2="20.5" stroke="#e2e8f0" stroke-width="1.5"/></svg>`
    },
    {
      id: 'ambient-aura',
      name: 'Soft Ambient Glow',
      desc: 'Gentle colored halo glowing softly behind the main focus area.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><radialGradient id="aura" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#6366f1" stop-opacity=".65"/><stop offset="100%" stop-color="#070a10" stop-opacity="0"/></radialGradient></defs><rect width="160" height="90" fill="#070a10"/><circle cx="80" cy="45" r="46" fill="url(#aura)"/><rect x="30" y="22" width="100" height="46" rx="9" fill="#0f172a" fill-opacity=".88" stroke="#6366f1" stroke-opacity=".5"/></svg>`
    },
    {
      id: 'neon-bloom',
      name: 'Vibrant Neon Glow',
      desc: 'Crisp glowing borders that light up on hover, tap, and focus.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#05070e"/><rect x="28" y="22" width="104" height="46" rx="8" fill="#0a1222" stroke="#22d3ee" stroke-width="2" stroke-opacity=".9"/><rect x="24" y="18" width="112" height="54" rx="11" fill="none" stroke="#22d3ee" stroke-width="4" stroke-opacity=".22"/></svg>`
    },
    {
      id: 'soft-studio-shadow',
      name: 'Soft Studio Lighting',
      desc: 'Balanced, glare-free shadows that feel calm and natural.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#131926"/><rect x="32" y="25" width="100" height="46" rx="10" fill="#090d14" fill-opacity=".6"/><rect x="28" y="19" width="100" height="46" rx="10" fill="#1e293b" stroke="#334155"/></svg>`
    },
    {
      id: 'daylight-flat',
      name: 'Bright Daylight Matte',
      desc: 'Zero glare and crystal-clear contrast for outdoor or sunny use.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#f1f5f9"/><rect x="24" y="18" width="112" height="54" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/><rect x="36" y="30" width="52" height="10" rx="3" fill="#0f172a"/><rect x="36" y="48" width="88" height="12" rx="4" fill="#e2e8f0"/></svg>`
    },
    {
      id: 'volumetric-vignette',
      name: 'Center Spotlight',
      desc: 'Gently dims the outer edges so your eyes stay on the main stage.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><radialGradient id="vig" cx="50%" cy="45%" r="55%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#030508"/></radialGradient></defs><rect width="160" height="90" fill="url(#vig)"/><rect x="38" y="22" width="84" height="46" rx="8" fill="#0f172a" stroke="#475569"/></svg>`
    }
  ],

  html5Options: [
    { id: 'semantic-landmarks', label: 'Clean Page Structure', tech: 'Semantic HTML5', desc: 'Organizes header, main content, and sidebars so browsers & screen readers navigate easily.' },
    { id: 'dialog-popover', label: 'Native Pop-ups & Tooltips', tech: '<dialog> & Popover', desc: 'Uses built-in browser pop-up windows that handle Escape keys and focus automatically.' },
    { id: 'template-cloning', label: 'Safe Fast List Rendering', tech: '<template> Cloning', desc: 'Builds repeated cards safely and quickly without messy HTML string bugs.' },
    { id: 'canvas-surface', label: 'High-Speed Drawing Canvas', tech: '<canvas> 2D/WebGL', desc: 'Smooth pixel/vector drawing surface for games, charts, or visual art.' },
    { id: 'inline-svg', label: 'Sharp Vector Icons & Art', tech: 'Inline <svg>', desc: 'Resolution-independent graphics that stay razor sharp on any zoom or retina screen.' },
    { id: 'aria-live', label: 'Screen-Reader Announcements', tech: 'ARIA Live', desc: 'Speaks important status updates and alerts aloud for visually impaired users.' },
    { id: 'drag-drop', label: 'Drag & Drop Sorting / Files', tech: 'Drag & Drop API', desc: 'Lets users drag cards between lists or drop files straight onto the page.' },
    { id: 'viewport-safe-area', label: 'Phone Notch & Bar Safe Fit', tech: 'viewport-fit=cover', desc: 'Prevents buttons from hiding behind phone notches or bottom swipe bars.' },
    { id: 'file-blob-io', label: 'Import & Download Files', tech: 'File & Blob API', desc: 'Lets users save backups or load their own files right in the browser.' },
    { id: 'print-ready', label: 'Print / Save-as-PDF Layout', tech: '@media print', desc: 'Hides buttons and formats clean pages when the user prints or saves as PDF.' }
  ],

  css3Options: [
    { id: 'oklch-tokens', label: 'Balanced Color System', tech: 'oklch() & :root', desc: 'Consistent primary, surface, and accent colors that stay harmonious everywhere.' },
    { id: 'grid-subgrid', label: 'Aligned Smart Grids', tech: 'CSS Grid & Subgrid', desc: 'Keeps cards, rows, and columns neatly lined up across every screen size.' },
    { id: 'container-queries', label: 'Self-Adapting Cards', tech: '@container Queries', desc: 'Cards automatically rearrange themselves based on the space inside their panel.' },
    { id: 'has-selector', label: 'Smart Parent Highlighting', tech: ':has() Selector', desc: 'Highlights whole cards when an input inside them is focused or checked.' },
    { id: 'cascade-layers', label: 'Clean Style Layering', tech: '@layer Cascade', desc: 'Keeps base styles, components, and utilities cleanly organized without conflicts.' },
    { id: 'view-transitions', label: 'Smooth Screen Transitions', tech: 'View Transitions', desc: 'Smoothly morphs and cross-fades between views and tabs.' },
    { id: 'scroll-driven', label: 'Scroll-Linked Motion', tech: 'Scroll Animations', desc: 'Subtle progress bars or reveals driven smoothly by scrolling.' },
    { id: 'fluid-clamp-tabular', label: 'Fluid Text & Steady Numbers', tech: 'clamp() + tabular', desc: 'Text scales smoothly with screen size; timers and counters never jitter.' },
    { id: 'custom-scroll-selection', label: 'Polished Scrollbars & Highlight', tech: 'Custom Chrome', desc: 'Matches scrollbars and text selection colors to the app theme.' },
    { id: 'reduced-motion', label: 'Motion-Sensitivity Safe', tech: 'prefers-reduced-motion', desc: 'Automatically tones down animations for users who prefer calm screens.' }
  ],

  jsArchOptions: [
    { id: 'central-state', label: 'Single Source of Truth', tech: 'Central State', desc: 'Keeps all data in one clean place so every screen and counter always agrees.' },
    { id: 'event-delegation', label: 'Fast Smart Click Handling', tech: 'Event Delegation', desc: 'One clean listener handles clicks across dynamic items without memory leaks.' },
    { id: 'fsm-states', label: 'Clear Mode Rules', tech: 'State Machine (FSM)', desc: 'Prevents impossible states (like clicking play while paused or game-over).' },
    { id: 'delta-raf-loop', label: '60–120fps Smooth Loop', tech: 'Delta-Time RAF', desc: 'Keeps movement and timers running at the exact same speed on every monitor.' },
    { id: 'web-worker', label: 'Background Heavy Math', tech: 'Web Worker', desc: 'Runs heavy calculations in the background so buttons never freeze.' },
    { id: 'undo-redo-stack', label: 'Undo & Redo History', tech: 'Command Stack', desc: 'Tracks recent changes so users can step backward or forward safely.' },
    { id: 'web-audio-synth', label: 'Built-In Sound Generator', tech: 'Web Audio API', desc: 'Synthesizes crisp clicks, chimes, and effects with zero external audio files.' },
    { id: 'pointer-gesture-lock', label: 'Unified Touch, Mouse & Pen', tech: 'PointerEvents', desc: 'Makes dragging, tapping, and aiming feel great on both phones and desktops.' }
  ],

  jsLibsOptions: [
    { id: 'threejs', label: '3D Worlds & Lighting (Three.js)', modes: ['game', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.min.js"></script>', desc: 'Real-time 3D scenes, cameras, meshes, and shadows.' },
    { id: 'pixijs', label: 'Ultra-Fast 2D Sprites (PixiJS)', modes: ['game', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/pixi.js@8.6.6/dist/pixi.min.js"></script>', desc: 'Hardware-accelerated 2D graphics and thousands of particles.' },
    { id: 'matterjs', label: '2D Physics & Gravity (Matter.js)', modes: ['game', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/matter-js@0.20.0/build/matter.min.js"></script>', desc: 'Bouncing bodies, collisions, ropes, and realistic gravity.' },
    { id: 'gsap', label: 'Pro Motion Timelines (GSAP)', modes: ['app', 'game', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>', desc: 'Silky choreographed animations and UI entrances.' },
    { id: 'chartjs', label: 'Charts & Analytics (Chart.js)', modes: ['app', 'tool'], cdn: '<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"></script>', desc: 'Clean interactive bar, line, pie, and radar charts.' },
    { id: 'konva', label: 'Interactive Canvas Shapes (Konva)', modes: ['tool', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/konva@9.3.18/konva.min.js"></script>', desc: 'Drag, resize, and layer shapes on a 2D canvas.' },
    { id: 'tonejs', label: 'Music & Beat Synth (Tone.js)', modes: ['game', 'experimental', 'tool'], cdn: '<script src="https://cdn.jsdelivr.net/npm/tone@15.0.4/build/Tone.js"></script>', desc: 'Musical instruments, sequencers, and audio effects.' },
    { id: 'd3', label: 'Custom Data Diagrams (D3.js)', modes: ['tool', 'app', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>', desc: 'Custom graphs, networks, and interactive data visuals.' },
    { id: 'confetti', label: 'Celebration Confetti', modes: ['app', 'game'], cdn: '<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>', desc: 'Fun particle bursts when users complete goals or win.' },
    { id: 'lucide', label: 'Crisp Icon Pack (Lucide)', modes: ['app', 'tool', 'game', 'experimental'], cdn: '<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>', desc: 'Consistent, clean vector icons across all buttons.' },
    { id: 'tailwind', label: 'Utility Styling (Tailwind CSS)', modes: ['app', 'tool'], cdn: '<script src="https://cdn.tailwindcss.com/3.4.17"></script>', desc: 'Rapid utility classes alongside custom style.css.' }
  ]
};

// =========================================================================
// 50-STEP DEEP ITERATIVE PIPELINE (Main Task & Supporting Task + Flow)
// =========================================================================
const PIPELINE_STEPS = [
  // STAGE 1: DISCOVERY & DOMAIN INTELLIGENCE (Steps 1–10)
  {
    num: 1, stage: 1, stageName: 'Discovery', section: '1A: Core Vision',
    role: 'Core Desire & Emotional Payoff Architect',
    mainTask: 'Uncover the deepest user desire, unspoken pain point, or gameplay thrill behind the prompt across multiple competing interpretations',
    supportTask: 'Architect the defining "Signature Moment"—a tactile, memorable interaction that makes someone fall in love with this within 10 seconds',
    upstreamInputs: 'Initial Prompt + Project Type + Complexity + Audience',
    downstreamTarget: 'Steps 2–5 (User Psychology, Landscape, Friction & Standout Edge)',
    creativeStretch: 'Propose 3 distinct product angles (Utility-First, Delight-First, Power-User/Obsessive), evaluate each brutally, and fuse the strongest mechanics into one unmistakable thesis.',
    insightHarvest: 'This is Step 1: dissect every noun, verb, and implied workflow in the prompt and Pre-Prompt Studio config to surface hidden opportunities the user did not even know to ask for.',
    criticalDeliverables: '1) 3-Angle Concept Matrix & Winning Thesis; 2) Exact 10-Second Signature Moment storyboard; 3) Core Emotional + Functional Payoff statement; 4) 3–5 non-obvious Domain Insights.',
    dynamicSignals: ['mode-lens', 'constraints-anti'],
    directive: 'Refuse generic CRUD or template thinking. Interrogate what makes this specific domain emotionally rewarding, visually magnetic, and immediately useful—then anchor the entire 50-step build around that high-leverage insight.'
  },
  {
    num: 2, stage: 1, stageName: 'Discovery', section: '1A: Core Vision',
    role: 'User Psychology & Contextual Ergonomics Strategist',
    mainTask: 'Map 3 concrete behavioral archetypes (First-Time Curious, Daily Habitual, Speed/Power User) with their exact mental models, anxieties, and goals',
    supportTask: 'Specify real-world physical contexts (one-handed thumb reach on mobile, focused desktop multi-tasking, low-light vs. bright glare, 30-second bursts vs. 45-minute deep sessions)',
    upstreamInputs: 'Step 1 Thesis + Target Platform + Audience + Starter Experience',
    downstreamTarget: 'Steps 6–8 (First-5-Seconds, Core Loop & Ergonomic Standards)',
    creativeStretch: 'Identify one "secret delight" tailored specifically to the Power User and one "instant confidence boost" tailored to the First-Time Curious user—and ensure they never collide.',
    insightHarvest: 'Harvest Step 1\'s Signature Moment and test how each behavioral archetype perceives it: what excites them, what intimidates them, and where they might hesitate.',
    criticalDeliverables: '1) 3 Behavioral Persona Cards (Mental Model, Trigger, Fear, Win Condition); 2) Physical Context & Posture Matrix; 3) Cognitive Load Budget per screen.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'constraints-anti'],
    directive: 'Go far beyond shallow demographics. Model moment-by-moment human attention, fatigue, thumb reach, and emotional momentum so every downstream UI decision serves real human behavior.'
  },
  {
    num: 3, stage: 1, stageName: 'Discovery', section: '1A: Core Vision',
    role: 'Competitive Landscape & Workaround Archaeologist',
    mainTask: 'Deconstruct the top 4 existing alternatives (bloated SaaS, messy spreadsheets, generic web clones, or native apps) and the duct-tape workarounds people use today',
    supportTask: 'Separate "Sacred Conventions" (muscle-memory patterns we MUST honor) from "Broken Legacy Habits" we can boldly reinvent',
    upstreamInputs: 'Steps 1–2 + Prompt Domain + Mode Essentials',
    downstreamTarget: 'Steps 4–5 (Friction Audit & Unmistakable Standout Edge)',
    creativeStretch: 'Borrow one brilliant interaction pattern from a completely different industry (e.g., music DAWs, video editors, arcade HUDs, or field notebooks) and adapt it seamlessly to this domain.',
    insightHarvest: 'Use Step 1\'s thesis and Step 2\'s mental models to expose where existing tools betray users—especially on mobile, offline, or when speed matters.',
    criticalDeliverables: '1) Existing Alternatives & Workaround Breakdown; 2) Keep-vs-Reinvent Table; 3) Cross-Industry Pattern Import with concrete UI adaptation.',
    dynamicSignals: ['mode-lens', 'constraints-anti'],
    directive: 'Pinpoint why people abandon existing solutions in this category. Turn competitor bloat, paywalls, and clunky multi-modal dialogs into our sharpest structural advantages.'
  },
  {
    num: 4, stage: 1, stageName: 'Discovery', section: '1B: Friction & Edge',
    role: 'Friction Auditor & Failure-Mode Prevention Lead',
    mainTask: 'Catalog the top 10 frustration, cognitive-overload, state-loss, and abandonment triggers specific to this domain and target platform',
    supportTask: 'Engineer a proactive, zero-compromise prevention mechanism for each of the 10 failure modes so they cannot occur',
    upstreamInputs: 'Steps 1–3 + Target Platform + Anti-Goals',
    downstreamTarget: 'Steps 7, 14, 28 (Core Loop, Stress Testing & Storage Resilience)',
    creativeStretch: 'Turn the single worst failure mode in this category (e.g., accidental deletion, blank-page paralysis, input lag, or unreadable tiny controls) into a signature trust-building feature.',
    insightHarvest: 'Cross-reference Step 2\'s physical contexts and Step 3\'s competitor flaws to catch subtle friction points (e.g., losing scroll position, awkward keyboard-vs-touch switching, or modal fatigue).',
    criticalDeliverables: '1) Top-10 Failure Mode & Prevention Matrix (Trigger -> Impact -> Architectural Safeguard); 2) Zero-Dead-End Guarantee rules.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'persistence-io', 'constraints-anti'],
    directive: 'Assume Murphy\'s Law applies to every click, tap, refresh, and resize. Eliminate friction structurally before a single layout box is drawn.'
  },
  {
    num: 5, stage: 1, stageName: 'Discovery', section: '1B: Friction & Edge',
    role: 'Standout Differentiator & Studio Quality Bar Director',
    mainTask: 'Synthesize Steps 1–4 into an unmistakable competitive edge, core value proposition, and measurable "Top 1% Web App" quality bar',
    supportTask: 'Fuse the functional differentiator directly with the chosen Interface Layout, Design Style, Color Mood, and Lighting Style so form amplifies function',
    upstreamInputs: 'Steps 1–4 + Full Visual & Tech Blueprint',
    downstreamTarget: 'Step 11 (Scope Evolution & Feature Synergy)',
    creativeStretch: 'Write a 3-sentence "Studio Launch Manifesto" and define 5 concrete "Whoa, it actually does THAT?!" micro-details that prove craftsmanship.',
    insightHarvest: 'Synthesize the strongest insights from Steps 1–4—resolving any tension between emotional delight (Step 1), simplicity (Step 2), borrowed patterns (Step 3), and bulletproof safety (Step 4).',
    criticalDeliverables: '1) Standout Edge Thesis; 2) Visual-Functional Synergy Map; 3) 5 Signature Micro-Details; 4) Objective Quality Bar rubric.',
    dynamicSignals: ['mode-lens', 'visual-system', 'constraints-anti'],
    directive: 'Do not settle for "clean and functional." Forge an opinionated, cohesive product identity where the chosen visual atmosphere and lighting actively reinforce the core workflow.'
  },
  {
    num: 6, stage: 1, stageName: 'Discovery', section: '1B: Friction & Edge',
    role: 'First-5-Seconds & Starter Experience Designer',
    mainTask: 'Choreograph the exact first 5 seconds from initial paint to first meaningful interaction, strictly honoring the selected Starter Experience mode',
    supportTask: 'Design domain-authentic starter examples, smart presets, or interactive micro-hints that teach by doing—with 1-click "Clear / Start Fresh" control',
    upstreamInputs: 'Steps 2, 5 + Starter Experience + Mode Essentials',
    downstreamTarget: 'Steps 12, 40 (End-to-End Journey & Living States)',
    creativeStretch: 'Design a "Zero-Tutorial Onboarding" mechanism where the starter data or canvas itself invites an immediate 1-tap experiment that produces an instant, gratifying result.',
    insightHarvest: 'Use Step 2\'s First-Time Curious persona and Step 4\'s abandonment triggers to eliminate sterile empty states and intrusive multi-step modal tours.',
    criticalDeliverables: '1) Second-by-Second First-5-Seconds Timeline (0s, 1s, 3s, 5s); 2) Realistic Starter Seed Data / Preset specification; 3) Clean Reset/Blank-Slate transition rule.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'constraints-anti'],
    directive: 'Make the very first screen feel alive, purposeful, and self-explanatory. The user should understand 90% of the app\'s power in 3 seconds without reading a manual.'
  },
  {
    num: 7, stage: 1, stageName: 'Discovery', section: '1B: Friction & Edge',
    role: 'Core Loop & Behavioral Momentum Architect',
    mainTask: 'Map the tightest primary Action -> Instant Feedback -> Meaningful Outcome -> Next-Step Momentum loop for sustained engagement',
    supportTask: 'Design secondary compounding loops (streaks, live comparisons, undo safety, instant copy/export, progressive mastery) that reward curiosity',
    upstreamInputs: 'Steps 1, 4, 6 + Navigation Style + Sensory Config',
    downstreamTarget: 'Steps 12, 17 (Journey Optimization & Feedback System)',
    creativeStretch: 'Eliminate artificial stopping points: design how every completed action naturally surfaces a smart next action, insight, or refinement without feeling pushy.',
    insightHarvest: 'Connect Step 1\'s emotional payoff with Step 6\'s first win so the transition from first-time trial to habitual mastery feels completely seamless.',
    criticalDeliverables: '1) Primary Core Loop Diagram (Trigger -> Action -> Micro-Feedback -> Reward -> Next Cue); 2) Secondary Retention/Mastery Loops; 3) Click/Tap-Count Reduction targets.',
    dynamicSignals: ['mode-lens', 'sensory-motion'],
    directive: 'Every millisecond between user intent and visible/audible response matters. Tighten the feedback loop until using the app feels effortless and mildly addictive.'
  },
  {
    num: 8, stage: 1, stageName: 'Discovery', section: '1C: Ergonomics & Trust',
    role: 'Universal Accessibility & Ergonomic Comfort Engineer',
    mainTask: 'Define concrete WCAG contrast, semantic landmark, keyboard-only navigation, focus-management, and screen-reader announcement standards',
    supportTask: 'Specify thumb-zone heatmaps, >=44x44px touch targets, non-hover touch equivalents, and colorblind-safe multi-sensory indicators',
    upstreamInputs: 'Steps 2, 4 + Target Platform + A11y/Motion Config',
    downstreamTarget: 'Steps 23, 25, 36 (HTML Landmarks, Input Parity & Contrast Audit)',
    creativeStretch: 'Design a keyboard shortcut & focus-navigation system so fast and intuitive that sighted power users prefer it, while screen-reader users experience zero friction.',
    insightHarvest: 'Audit Step 2\'s physical environments and Step 7\'s rapid core loop to guarantee high-speed interaction never breaks focus order, reduced-motion comfort, or mobile ergonomics.',
    criticalDeliverables: '1) Keyboard Shortcut & Focus Trap Map; 2) Mobile Thumb-Zone & Touch Target Spec; 3) ARIA Live Region & Colorblind-Safe Cue Matrix.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'Treat accessibility and ergonomics as core engineering craft, not an afterthought. Every interactive element must work flawlessly via mouse, touch, and keyboard alone.'
  },
  {
    num: 9, stage: 1, stageName: 'Discovery', section: '1C: Ergonomics & Trust',
    role: 'Local-First Privacy, Persistence & Portability Architect',
    mainTask: 'Architect 100% private, zero-backend, instant local-first data ownership aligned with the selected Persistence setting',
    supportTask: 'Design effortless backup, export/import (JSON/CSV/PNG), auto-save indicators, and corrupt-data recovery with zero user anxiety',
    upstreamInputs: 'Step 4 + Data Persistence Config + Project Type',
    downstreamTarget: 'Steps 18, 28 (Data Schema & Storage Resilience Layer)',
    creativeStretch: 'Design a human-friendly "Data Vault / Snapshot" micro-panel where users can see last-saved status, export cleanly, or safely reset without ever fearing lost work.',
    insightHarvest: 'Connect Step 4\'s state-loss prevention with the exact Persistence mode selected so incognito/private browsers and storage-quota limits degrade gracefully.',
    criticalDeliverables: '1) Local Storage/IndexedDB Ownership Strategy; 2) Export/Import Portability Spec; 3) Private-Browsing & Corrupt-Payload Fallback rules.',
    dynamicSignals: ['persistence-io', 'mode-lens'],
    directive: 'Make 100% client-side execution feel like a superpower: instant offline speed, complete privacy, and rock-solid portability.'
  },
  {
    num: 10, stage: 1, stageName: 'Discovery', section: '1C: Ergonomics & Trust',
    role: 'Domain Voice, Microcopy & Clarity Editor',
    mainTask: 'Craft crystal-clear, jargon-free UI copy: app title/subtitle, primary CTAs, navigation labels, inline hints, and status messages',
    supportTask: 'Write warm, encouraging empty states, plain-language error diagnostics, and concise keyboard/tooltip micro-hints',
    upstreamInputs: 'Steps 1–9 + Prompt + Typography Voice',
    downstreamTarget: 'Steps 16, 48 (Information Architecture & Final index.html Copy)',
    creativeStretch: 'Replace every robotic label (e.g., "Submit", "Invalid Input", "No Data") with crisp, domain-authentic phrasing that feels written by a thoughtful human designer.',
    insightHarvest: 'Synthesize Stage 1\'s entire emotional tone (Step 1), persona anxieties (Step 2), and error prevention (Step 4) into a unified Microcopy Style Guide.',
    criticalDeliverables: '1) Voice & Tone Rules; 2) Complete UI Copy Dictionary (Headers, CTAs, Tooltips, Empty States, Error Messages, Toast Confirmations).',
    dynamicSignals: ['mode-lens', 'visual-system', 'constraints-anti'],
    directive: 'Great copy eliminates the need for help docs. Every button label should state its exact outcome; every error should explain how to fix it in one glance.'
  },

  // STAGE 2: SYSTEMS REASONING & EVOLVING ARCHITECTURE (Steps 11–20)
  {
    num: 11, stage: 2, stageName: 'Systems', section: '2A: Scope & Synergy',
    role: 'Capability Synthesizer & Feature Synergy Architect',
    mainTask: 'Synthesize all Stage 1 discoveries into a cohesive, high-impact feature matrix calibrated to the selected Complexity level',
    supportTask: 'Engineer cross-feature synergies where selected Mode Essentials amplify one another instead of living as isolated widgets',
    upstreamInputs: 'All Stage 1 Insights (Steps 1–10) + Complexity + Mode Essentials',
    downstreamTarget: 'Steps 12–20 & Step 41 Completeness Audit',
    creativeStretch: 'Identify 3 "2+2=5" feature synergies (e.g., combining Search/Filter + Live Stats + Export, or Combo Multiplier + Audio Pulse + Dynamic Difficulty) that elevate the whole app.',
    insightHarvest: 'Critically review Steps 1–10: promote the strongest creative discoveries into core capabilities, and organize secondary power features behind progressive disclosure so the UI stays calm.',
    criticalDeliverables: '1) Prioritized Feature Matrix (Core Always-Visible vs. Progressive Power Drawer); 2) Cross-Feature Synergy Map; 3) Selected Mode Essentials Integration Plan.',
    dynamicSignals: ['mode-lens', 'constraints-anti'],
    directive: 'Never bolt features onto a checklist mechanically. Make every capability earn its pixels and reinforce the core loop.'
  },
  {
    num: 12, stage: 2, stageName: 'Systems', section: '2A: Scope & Synergy',
    role: 'End-to-End Journey & State Transition Choreographer',
    mainTask: 'Map the complete end-to-end user journey from cold page load through primary workflows, edge branches, and peak mastery',
    supportTask: 'Eliminate dead-ends, redundant clicks, and jarring view jumps across the selected Navigation Style',
    upstreamInputs: 'Steps 6, 7, 11 + Navigation Style',
    downstreamTarget: 'Steps 16, 22, 23 (IA, Central State & DOM Skeleton)',
    creativeStretch: 'Design "Smart Context Carryover" so switching views, tabs, or modes preserves filters, scroll/selection context, and unsaved drafts seamlessly.',
    insightHarvest: 'Connect Step 6\'s first-5-seconds entry and Step 7\'s core loop with Step 11\'s full feature matrix to verify every user path is <= 2 taps deep.',
    criticalDeliverables: '1) Complete User Flow Map (Entry -> Primary Loop -> Secondary Tools -> Export/Reset); 2) Navigation & Context-Preservation Rules.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics'],
    directive: 'Walk through every screen transition as if you are using the app on a phone on a train and on a 27-inch desktop monitor. Smooth out every single bump.'
  },
  {
    num: 13, stage: 2, stageName: 'Systems', section: '2A: Scope & Synergy',
    role: 'Principal Design & Engineering Trade-Off Resolver',
    mainTask: 'Identify and resolve the 6 toughest competing tensions (simplicity vs. depth, visual richness vs. 60fps battery, automation vs. manual override, density vs. touch comfort)',
    supportTask: 'Invent concrete hybrid patterns (progressive disclosure, smart defaults + instant override, GPU-composited effects) that refuse false compromises',
    upstreamInputs: 'Steps 11–12 + Platform/Motion/Complexity Config',
    downstreamTarget: 'Steps 15, 21, 34 (Stack, JS Architecture & Surface Materiality)',
    creativeStretch: 'For each tension, articulate a bold architectural rule that turns the constraint into an elegance multiplier.',
    insightHarvest: 'Surface any hidden conflicts between Stage 1\'s ambitions and Stage 2\'s scope or mobile ergonomics—and resolve them decisively now.',
    criticalDeliverables: '1) 6-Row Trade-Off Resolution Ledger (Tension -> Risk -> Winning Hybrid Solution -> Implementation Rule).',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'sensory-motion'],
    directive: 'Great architecture is defined by how cleanly it resolves tensions. Be explicit and decisive so downstream steps never oscillate.'
  },
  {
    num: 14, stage: 2, stageName: 'Systems', section: '2B: Resilience & Stack',
    role: 'Edge-Case Stress Tester & Chaos Engineer',
    mainTask: 'Stress-test the entire concept against extreme boundary conditions (0 items, 1,000+ items, 320px narrow screens, rapid double-taps, malformed imports, storage full)',
    supportTask: 'Define deterministic, non-destructive recovery behaviors and friendly inline warnings for every single stress scenario',
    upstreamInputs: 'Steps 4, 11, 12, 13',
    downstreamTarget: 'Steps 27, 28, 30 & Step 41 Audit',
    creativeStretch: 'Design an automated "Self-Healing State Guard" that sanitizes corrupted or partial saved data on boot without ever throwing a white screen.',
    insightHarvest: 'Expand Step 4\'s human friction audit into technical boundary cases across data volume, viewport extremes, timing races, and input spam.',
    criticalDeliverables: '1) 12-Scenario Chaos & Boundary Matrix (Condition -> Potential Breakage -> Exact Guardrail); 2) Long-Text / Overflow / High-Volume Performance Rules.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'persistence-io'],
    directive: 'Break the design on paper right now so the final app is unbreakable in the real world.'
  },
  {
    num: 15, stage: 2, stageName: 'Systems', section: '2B: Resilience & Stack',
    role: 'Web Platform Capabilities & Add-On Synergy Architect',
    mainTask: 'Map every selected HTML5, CSS3, JS Architecture pattern, and CDN Library to the exact features and UI moments it powers',
    supportTask: 'Verify clean dependency initialization, graceful fallbacks, and zero unused bloat (or pure zero-dependency Vanilla perfection)',
    upstreamInputs: 'Steps 11, 13 + Full Tech Stack & CDN Config',
    downstreamTarget: 'Steps 21–30 & Steps 48–50',
    creativeStretch: 'Find creative ways to combine native browser APIs (e.g., <dialog> + :has() + CSS Grid subgrid + Web Audio + PointerEvents) so the app feels native and super-fast.',
    insightHarvest: 'Audit every selected option in HTML5, CSS3, JS Arch, and JS Libs to ensure 100% of user-selected capabilities are meaningfully utilized.',
    criticalDeliverables: '1) Capability-to-Feature Wiring Matrix; 2) CDN Library Integration & Fallback Plan (or Pure Vanilla Guarantee); 3) Browser-Safety Notes.',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Every selected technical capability must have a clear job in index.html, style.css, or script.js—no decorative buzzwords.'
  },
  {
    num: 16, stage: 2, stageName: 'Systems', section: '2B: Resilience & Stack',
    role: 'Information Architecture & Spatial Hierarchy Designer',
    mainTask: 'Architect the exact spatial zones (Primary Stage >=65% visual weight, Control/Tool Rail, Secondary Drawers/Modals, Live Status/Telemetry Bar)',
    supportTask: 'Align every zone strictly with the chosen Interface Layout, Navigation Style, and Responsive Breakpoints (320px -> 768px -> 1440px)',
    upstreamInputs: 'Steps 10, 12, 15 + Selected Interface Design',
    downstreamTarget: 'Steps 23, 24, 33 (HTML Landmarks, CSS Grid & Spatial Rhythm)',
    creativeStretch: 'Design a responsive "Adaptive Reflow" plan so mobile users get effortless thumb-zone access without losing desktop spatial power.',
    insightHarvest: 'Combine Step 10\'s copy labels with Step 11\'s core-vs-secondary feature split to keep the primary canvas spacious and distraction-free.',
    criticalDeliverables: '1) Zone Hierarchy & Visual Weight Budget; 2) Mobile-to-Desktop Layout Reflow Blueprint; 3) Modal/Drawer/Popover Inventory.',
    dynamicSignals: ['visual-system', 'platform-ergonomics'],
    directive: 'Protect visual calm. Give the primary workspace commanding presence while organizing secondary controls into predictable, zero-overlap zones.'
  },
  {
    num: 17, stage: 2, stageName: 'Systems', section: '2B: Resilience & Stack',
    role: 'Interactive Feedback, Sensory Audio & Micro-Reward Designer',
    mainTask: 'Specify immediate visual, tactile, and optional Web Audio feedback for every user action (create, edit, filter, drag, error, milestone)',
    supportTask: 'Design non-blocking toast notifications, inline validation cues, and reversible Undo banners',
    upstreamInputs: 'Steps 7, 13 + Sensory/Audio Config',
    downstreamTarget: 'Steps 30, 38, 40 (Web Audio Synth, Micro-Interactions & Living States)',
    creativeStretch: 'Craft a cohesive "Sensory Signature"—subtle harmonic Web Audio intervals paired with synchronized visual pulses that reward mastery without annoying repetition.',
    insightHarvest: 'Connect Step 7\'s core loop with Step 8\'s reduced-motion and mute-control requirements so sensory feedback delights everyone safely.',
    criticalDeliverables: '1) Action-to-Feedback Matrix (Visual + Motion + Audio + ARIA); 2) Non-Blocking Toast & Undo Banner Spec.',
    dynamicSignals: ['sensory-motion', 'mode-lens'],
    directive: 'Zero silent dead clicks, zero jarring browser alert()/confirm() popups. Every interaction should feel alive, responsive, and reversible.'
  },
  {
    num: 18, stage: 2, stageName: 'Systems', section: '2C: Data & Quality',
    role: 'Data Model, Versioned Schema & Portability Architect',
    mainTask: 'Design the complete, normalized, versioned data schema (entities, IDs, timestamps, settings, derived/computed fields)',
    supportTask: 'Specify serialization, JSON/CSV/PNG export schemas, import validation/sanitization, and automatic schema migration safety',
    upstreamInputs: 'Steps 9, 14, 15 + Data Persistence Config',
    downstreamTarget: 'Steps 22, 28, 46 (Central State & Storage Layer)',
    creativeStretch: 'Include a lightweight `schemaVersion` + `migrateState()` design and deterministic sample-data generator so the app can evolve cleanly without breaking saved user data.',
    insightHarvest: 'Verify every feature from Step 11 and every stress case from Step 14 is cleanly represented in the data model without redundant or conflicting fields.',
    criticalDeliverables: '1) Complete State & Entity Schema (with field types & defaults); 2) Derived/Computed Selectors list; 3) Export/Import & Migration Rules.',
    dynamicSignals: ['persistence-io', 'mode-lens'],
    directive: 'A clean data model makes the entire JavaScript layer effortless. Design it so state is single-source-of-truth, serializable, and bug-resistant.'
  },
  {
    num: 19, stage: 2, stageName: 'Systems', section: '2C: Quality & Standards',
    role: 'Quality Benchmarks & Experience Verification Lead',
    mainTask: 'Establish measurable engineering & UX excellence targets (instant FCP, zero console errors, 60–120fps interaction, zero horizontal overflow at 320px, WCAG AA+)',
    supportTask: 'Create a concrete Pre-Ship Acceptance Test Matrix covering every core workflow, edge case, persistence reload, and visual polish detail',
    upstreamInputs: 'Steps 11–18 + Motion/A11y/Platform Config',
    downstreamTarget: 'Steps 41, 47–50 (Audits & Final Code)',
    creativeStretch: 'Include domain-specific "Delight & Accuracy" acceptance tests (e.g., physics stability, math precision, undo/redo parity, or keyboard-only full walkthrough).',
    insightHarvest: 'Turn all promises made across Stage 1 and Stage 2 into objective, testable pass/fail criteria.',
    criticalDeliverables: '1) Measurable Performance, A11y & Layout Targets; 2) 10-Point Functional Acceptance Checklist.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'Define "studio-grade" in concrete, verifiable terms so Steps 21–50 never cut corners.'
  },
  {
    num: 20, stage: 2, stageName: 'Systems', section: '2C: Data & Quality',
    role: 'Master Systems Synthesizer & Architectural Lock',
    mainTask: 'Consolidate Stage 1 & Stage 2 into a crystal-clear Master Architectural Charter uniting UX, Data, Visual Direction, and Tech Stack',
    supportTask: 'Highlight the top 5 compounding insights discovered across Steps 1–19 and lock non-negotiable cross-file invariants',
    upstreamInputs: 'All Stage 1 & Stage 2 Decisions (Steps 1–19)',
    downstreamTarget: 'Stage 3 Blueprinting (Steps 21–30)',
    creativeStretch: 'Perform a ruthless "Weak-Spot Upgrade": spot the single weakest part of the plan so far and elevate it before entering Blueprinting.',
    insightHarvest: 'Distill Steps 1–19 into an executive architectural brief so Stage 3 engineers can blueprint every file with zero ambiguity.',
    criticalDeliverables: '1) Top-5 Compounding Insights Summary; 2) Non-Negotiable Architectural Invariants; 3) Weak-Spot Upgrade decision; 4) Stage 3 Handoff Priorities.',
    dynamicSignals: ['mode-lens', 'visual-system', 'tech-stack', 'constraints-anti'],
    directive: 'Bridge strategy and engineering cleanly. After Step 20, every blueprint step should know the exact vision, constraints, and invariants.'
  },

  // STAGE 3: BLUEPRINTING & TECHNICAL CONTRACTS (Steps 21–30)
  {
    num: 21, stage: 3, stageName: 'Blueprint', section: '3A: JS & State',
    role: 'JavaScript Module & Execution Architecture Engineer',
    mainTask: 'Blueprint the complete top-to-bottom architecture of script.js (IIFE/module scope, constants, config, state, pure domain engine, storage, audio/canvas, DOM renderers, delegated events, init)',
    supportTask: 'Weave every selected JS Architecture pattern (Central State, Delegation, FSM, Delta-Time RAF, Web Worker, Undo Stack, Web Audio, PointerEvents) into clean, cohesive sections',
    upstreamInputs: 'Steps 15, 18, 20 + JS Architecture & CDN Libs Config',
    downstreamTarget: 'Steps 22, 26–30, 46, 50 (script.js)',
    creativeStretch: 'Separate pure domain/math/game logic cleanly from DOM rendering so state transitions are deterministic, testable, and bug-free.',
    insightHarvest: 'Use Step 13\'s trade-off resolutions and Step 15\'s tech wiring to ensure zero global pollution and clean initialization order.',
    criticalDeliverables: '1) Exact script.js Section-by-Section Outline; 2) Function Inventory with Signatures & Responsibilities; 3) Boot/Init Sequence.',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Architect script.js like a senior principal engineer—clean, modular, readable, zero spaghetti callbacks, and zero global variable leaks.'
  },
  {
    num: 22, stage: 3, stageName: 'Blueprint', section: '3A: JS & State',
    role: 'Central State Store & Finite State Machine Architect',
    mainTask: 'Specify every property of the central `state` object, derived selectors, and the strict unidirectional Action -> Mutate -> Persist -> Render cycle',
    supportTask: 'Define an explicit Finite State Machine (FSM) for app/game modes (e.g., idle, active, paused, editing, modal, error) with legal transitions only',
    upstreamInputs: 'Steps 12, 18, 21',
    downstreamTarget: 'Steps 26, 27, 46, 50 (script.js)',
    creativeStretch: 'Design a lightweight Undo/Redo command or snapshot stack (if applicable) and reactive UI-sync hooks so counters, badges, and views never desynchronize.',
    insightHarvest: 'Cross-check Step 18\'s data schema and Step 14\'s edge cases to guarantee impossible states (e.g., double-submitting, editing deleted items) are structurally blocked.',
    criticalDeliverables: '1) Exact Initial State Object Spec; 2) FSM State & Transition Table; 3) Action Dispatchers & Derived Selector Functions.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'persistence-io'],
    directive: 'Make the DOM a pure, predictable projection of `state`. Eliminate scattered state flags stored only in CSS classes or DOM text.'
  },
  {
    num: 23, stage: 3, stageName: 'Blueprint', section: '3B: HTML5 & CSS3',
    role: 'Semantic HTML5 & Accessibility DOM Architect',
    mainTask: 'Blueprint the complete index.html semantic landmark tree (<header>, <nav>, <main>, <aside>, <footer>, <dialog>, <template>, <canvas>, inline <svg>) and exact CDN script/link order',
    supportTask: 'Embed ARIA roles, aria-live polite/assertive regions, accessible labels, keyboard tabindex order, and mobile `viewport-fit=cover` meta tags',
    upstreamInputs: 'Steps 8, 10, 16, 20 + HTML5 & CDN Libs Config',
    downstreamTarget: 'Steps 24, 42, 48 (index.html)',
    creativeStretch: 'Use native HTML5 superpowers (<dialog>, <template>, semantic form constraints, <datalist>/popover where appropriate) to eliminate fragile JS boilerplate.',
    insightHarvest: 'Incorporate Step 10\'s finalized microcopy and Step 16\'s spatial zones directly into the HTML landmark blueprint.',
    criticalDeliverables: '1) Complete Indented DOM Tree with exact `id` and `data-action` attributes; 2) `<template>` & `<dialog>` Blueprints; 3) Head Meta & CDN Load Order.',
    dynamicSignals: ['tech-stack', 'platform-ergonomics', 'visual-system'],
    directive: 'Design clean, semantic HTML5 that screen readers love and CSS3/JS can target with surgical precision.'
  },
  {
    num: 24, stage: 3, stageName: 'Blueprint', section: '3B: HTML5 & CSS3',
    role: 'CSS3 Layout Engine & Responsive Geometry Architect',
    mainTask: 'Blueprint style.css architecture (@layer cascade order, :root design tokens, CSS Grid/Subgrid, Flexbox, @container queries, :has() parent selectors)',
    supportTask: 'Define safe-area-inset padding, fluid clamp() sizing, responsive breakpoints, and explicit state classes (.is-active, .is-hidden, .is-loading, .is-error)',
    upstreamInputs: 'Steps 16, 23 + CSS3 & Visual Layout Config',
    downstreamTarget: 'Steps 31–38, 43, 49 (style.css)',
    creativeStretch: 'Leverage modern CSS (:has(), @container, subgrid, logical properties) so components adapt intelligently to their container width without brittle media-query hacks.',
    insightHarvest: 'Align every layout grid track and state class directly with Step 23\'s DOM tree and Step 14\'s 320px–4K overflow stress tests.',
    criticalDeliverables: '1) @layer & Stylesheet Section Map; 2) Responsive Grid/Subgrid & @container Blueprint; 3) Canonical State Classes & Overflow-Zero Rules.',
    dynamicSignals: ['visual-system', 'tech-stack', 'platform-ergonomics'],
    directive: 'Engineer rock-solid layout geometry first—zero horizontal scrollbars, zero clipped modals, zero overlapping HUD badges at any screen size.'
  },
  {
    num: 25, stage: 3, stageName: 'Blueprint', section: '3C: Input & Engine',
    role: 'Unified Pointer, Touch & Keyboard Input Engineer',
    mainTask: 'Design unified PointerEvents (pointerdown/move/up/cancel), `touch-action` protections, and >=44px mobile thumb controls',
    supportTask: 'Architect complete keyboard navigation, arrow-key/tab flows, Escape dismissal, and smart shortcut guards (ignoring hotkeys while typing in inputs/textareas)',
    upstreamInputs: 'Steps 8, 21, 23 + Platform & Mode Config',
    downstreamTarget: 'Steps 26, 44, 50 (Input Handlers)',
    creativeStretch: 'Add tactile drag/swipe/long-press or multi-key responsiveness tailored to the app (e.g., smooth pointer capture on sliders/canvas, instant Escape/Enter ergonomics).',
    insightHarvest: 'Ensure Step 8\'s accessibility standards and Step 2\'s one-handed mobile posture work harmoniously with Step 23\'s controls.',
    criticalDeliverables: '1) Pointer & Touch Gesture Spec (with `touch-action` rules); 2) Complete Keyboard Shortcut & Input-Guard Table; 3) Focus Management Rules.',
    dynamicSignals: ['platform-ergonomics', 'mode-lens', 'tech-stack'],
    directive: 'Make mouse, touch, trackpad, and keyboard feel equally first-class—never trap focus or hijack typing.'
  },
  {
    num: 26, stage: 3, stageName: 'Blueprint', section: '3C: Input & Engine',
    role: 'Event Delegation & Lifecycle Hygiene Architect',
    mainTask: 'Map every interactive element in Step 23 to clean parent-container event delegation via `data-action`, `data-id`, and `closest()`',
    supportTask: 'Design clean listener attachment, debounced/throttled input handlers, and zero-leak lifecycle cleanup on re-renders or resets',
    upstreamInputs: 'Steps 21, 22, 23, 25',
    downstreamTarget: 'Steps 42, 46, 50 (script.js)',
    creativeStretch: 'Design a clean `ACTION_HANDLERS` dispatch map keyed by `data-action` so adding or auditing interactions is crystal clear and O(1).',
    insightHarvest: 'Verify every button, filter pill, modal trigger, and dynamic card row from Step 23 has a matching delegated action handler.',
    criticalDeliverables: '1) Complete `data-action` Dispatch Map; 2) Debounce/Throttle Timing Rules; 3) Listener Lifecycle & Anti-Leak Checklist.',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Zero inline `onclick` attributes, zero duplicate listeners attached inside render loops.'
  },
  {
    num: 27, stage: 3, stageName: 'Blueprint', section: '3C: Input & Engine',
    role: 'High-Speed DOM Rendering & Security Engineer',
    mainTask: 'Specify `<template>` cloning, `DocumentFragment` batching, keyed/targeted partial updates, and strict `textContent`-based XSS safety',
    supportTask: 'Eliminate layout thrashing (batch DOM reads before writes) and preserve active input focus/scroll positions during live updates',
    upstreamInputs: 'Steps 14, 22, 23',
    downstreamTarget: 'Steps 46, 50 (script.js)',
    creativeStretch: 'Design surgical sub-view renderers (e.g., updating live counters/timers separately from heavy lists/canvases) so typing or dragging stays locked at 60–120fps.',
    insightHarvest: 'Address Step 14\'s 1,000+ item stress test directly with batched rendering and zero `innerHTML` injection of user strings.',
    criticalDeliverables: '1) Renderer Pipeline & Granular Update Map; 2) XSS-Safe DOM Construction Rules; 3) Focus & Scroll Preservation Strategy.',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Fast, safe, flicker-free rendering—user input must never lose focus or stutter even during rapid live updates.'
  },
  {
    num: 28, stage: 3, stageName: 'Blueprint', section: '3C: Input & Engine',
    role: 'Storage Resilience, Validation & File I/O Engineer',
    mainTask: 'Architect try/catch `localStorage`/IndexedDB wrappers, in-memory fallbacks, quota-exceeded handling, and versioned schema validation',
    supportTask: 'Specify Blob file downloads, FileReader/drag-drop import parsing with strict sanitization, and Clipboard API copy with visual confirmation',
    upstreamInputs: 'Steps 9, 14, 18',
    downstreamTarget: 'Steps 46, 50 (script.js)',
    creativeStretch: 'Add debounced auto-save with an unobtrusive "Saved" micro-indicator and safe JSON/CSV export that works cleanly even offline.',
    insightHarvest: 'Implement Step 9\'s privacy/portability promise and Step 14\'s corrupt-data chaos test in concrete helper functions.',
    criticalDeliverables: '1) Storage Adapter & In-Memory Fallback Spec; 2) Import Sanitizer & Schema Validator Logic; 3) Export/Clipboard Pipeline.',
    dynamicSignals: ['persistence-io', 'tech-stack'],
    directive: 'Guarantee the app boots and saves reliably in every browser mode—including strict private browsing or restricted iframes.'
  },
  {
    num: 29, stage: 3, stageName: 'Blueprint', section: '3C: Input & Engine',
    role: 'Simulation Loop, Timing & Clean Reset Architect',
    mainTask: 'Architect clamped delta-time (`dt`) `requestAnimationFrame` loops, timer accuracy (date-delta), or Web Worker offloading for heavy computation',
    supportTask: 'Design a deterministic `resetAll()` / `pause()` / `resume()` lifecycle that cancels active RAFs, intervals, audio nodes, and timers cleanly',
    upstreamInputs: 'Steps 14, 21, 22 + JS Arch & Motion Config',
    downstreamTarget: 'Steps 46, 50 (script.js)',
    creativeStretch: 'Handle `visibilitychange` (tab switching / phone lock) gracefully by clamping `dt` and auto-pausing active timers or games so nothing teleports or breaks.',
    insightHarvest: 'Ensure Step 19\'s 60–120fps benchmark holds across both 60Hz laptops and 120Hz phones without speed drift.',
    criticalDeliverables: '1) Timing / RAF / Worker Loop Architecture; 2) Tab-Visibility Pause/Clamp Spec; 3) Deterministic Cleanup & Reset Contract.',
    dynamicSignals: ['tech-stack', 'sensory-motion', 'mode-lens'],
    directive: 'Zero runaway intervals, zero refresh-rate speed bugs, zero ghost animations after restart.'
  },
  {
    num: 30, stage: 3, stageName: 'Blueprint', section: '3C: Input & Engine',
    role: 'Procedural Web Audio & Fault-Tolerant Boundary Engineer',
    mainTask: 'Design zero-asset Web Audio API synthesizer patches (oscillators, gain envelopes, filters) unlocked on first user gesture with a persisted Mute toggle',
    supportTask: 'Architect top-level error boundaries, graceful `try/catch` guards around external APIs/CDNs, and accessible toast feedback',
    upstreamInputs: 'Steps 15, 17, 19 + Sensory/Audio Config',
    downstreamTarget: 'Steps 45, 50 (script.js)',
    creativeStretch: 'Craft 4–6 distinct, pleasant procedural sound cues (soft UI tick, warm success chord, subtle warning thud, celebratory arpeggio) tuned to match the app\'s mood.',
    insightHarvest: 'Honor Step 17\'s sensory design and Step 15\'s CDN fallback rules so audio and errors are always polished and never intrusive.',
    criticalDeliverables: '1) Web Audio Synth Patch Table (Freq, Waveform, Envelope, Gain); 2) Gesture-Unlock & Mute Persistence Spec; 3) Global Error Boundary & Toast API.',
    dynamicSignals: ['sensory-motion', 'tech-stack'],
    directive: 'Sound should feel crisp, subtle, and musical—never harsh or noisy—and errors should recover gracefully with helpful user guidance.'
  },

  // STAGE 4: VISUAL CRAFT, LIGHTING & MOTION SYSTEM (Steps 31–40)
  {
    num: 31, stage: 4, stageName: 'Visual Craft', section: '4A: Color & Type',
    role: 'Color Architecture & Semantic Token Director',
    mainTask: 'Build the complete `:root` color token system (60% canvas background, 30% layered surfaces, 10% focal accent + semantic success/warn/danger/info states)',
    supportTask: 'Harmonicize the chosen Design Style, Color Mood, and Lighting Style—and support crisp Light/Dark theme switching if selected',
    upstreamInputs: 'Steps 5, 24 + Design Style, Color Mood & Lighting Config',
    downstreamTarget: 'Steps 34–36, 43, 49 (style.css)',
    creativeStretch: 'Use `oklch()` (with clean hex fallbacks if needed) and subtle surface-tint stepping so dark modes feel rich and atmospheric rather than muddy gray.',
    insightHarvest: 'Make sure Step 16\'s primary workspace commands immediate attention through intentional color hierarchy.',
    criticalDeliverables: '1) Complete `:root` Color Token Table; 2) Surface Elevation Color Steps; 3) Semantic Status & Focus Ring Tokens.',
    dynamicSignals: ['visual-system', 'tech-stack'],
    directive: 'Every color token must have a clear semantic role. Keep the palette disciplined, harmonious, and unmistakable.'
  },
  {
    num: 32, stage: 4, stageName: 'Visual Craft', section: '4A: Color & Type',
    role: 'Typography Scale, Optical Rhythm & Readability Director',
    mainTask: 'Define font-family stacks, fluid `clamp()` type scale (display, h1, h2, body, small, micro-label), weights, and optical line-heights',
    supportTask: 'Enforce `font-variant-numeric: tabular-nums` on all counters/timers/metrics and crisp letter-spacing on uppercase labels',
    upstreamInputs: 'Steps 10, 31 + Typography Style & CSS3 Config',
    downstreamTarget: 'Steps 33, 43, 49 (style.css)',
    creativeStretch: 'Pair expressive display rhythm with ultra-legible UI text so scanning numbers, statuses, and headings feels effortless.',
    insightHarvest: 'Check Step 10\'s copy lengths and Step 14\'s long-text stress test to set `line-clamp`, `overflow-wrap`, and `min-width: 0` rules.',
    criticalDeliverables: '1) Fluid `clamp()` Type Scale Table; 2) Font Stack & Numeric Formatting Rules; 3) Truncation & Wrapping Guardrails.',
    dynamicSignals: ['visual-system', 'tech-stack'],
    directive: 'Typography carries 80% of UI clarity. Eliminate jittering numbers, cramped line heights, and unreadable micro-text.'
  },
  {
    num: 33, stage: 4, stageName: 'Visual Craft', section: '4A: Color & Type',
    role: 'Spatial Rhythm, Breathing Room & Density Director',
    mainTask: 'Establish a strict 4px/8px spacing scale (`--space-1` to `--space-12`), card internal padding, section gaps, and max-width reading/stage measures',
    supportTask: 'Balance desktop breathing room with compact, thumb-friendly mobile spacing so nothing feels cramped or wasted',
    upstreamInputs: 'Steps 16, 24, 32 + Interface Design Config',
    downstreamTarget: 'Steps 43, 49 (style.css)',
    creativeStretch: 'Use deliberate whitespace contrast (generous outer margins vs. tight inner element grouping) to make relationships obvious without extra divider lines.',
    insightHarvest: 'Align spacing tokens with Step 8\'s >=44px touch target requirement and Step 16\'s spatial hierarchy.',
    criticalDeliverables: '1) Spacing Token Scale; 2) Component Padding & Gap Matrix; 3) Responsive Density Adjustments (Mobile vs. Desktop).',
    dynamicSignals: ['visual-system', 'platform-ergonomics'],
    directive: 'Great spacing makes an interface feel twice as expensive. Let elements breathe.'
  },
  {
    num: 34, stage: 4, stageName: 'Visual Craft', section: '4B: Surface & Light',
    role: 'Surface Materiality & Tactile Finish Artist',
    mainTask: 'Translate the chosen Design Style and Element Style into concrete CSS surface treatments (frosted glass blur, razor-thin hairlines, crisp editorial paper, neubrutal ink borders, or soft clay)',
    supportTask: 'Optimize blur/filter layers so mobile GPUs sustain 60fps scrolling without frame drops',
    upstreamInputs: 'Steps 13, 31 + Design Style & Element Style Config',
    downstreamTarget: 'Steps 35, 43, 49 (style.css)',
    creativeStretch: 'Layer subtle CSS gradients or micro-noise/grid textures tastefully so backgrounds feel crafted and tactile rather than flat.',
    insightHarvest: 'Honor Step 13\'s performance trade-off rules while delivering maximum visual personality for the chosen style.',
    criticalDeliverables: '1) Surface Materiality CSS Spec (Cards, Panels, Inputs, Modals, Badges); 2) GPU-Safe Backdrop & Border Rules.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'Give the interface a unmistakable physical materiality that matches the user\'s chosen Design Style.'
  },
  {
    num: 35, stage: 4, stageName: 'Visual Craft', section: '4B: Surface & Light',
    role: 'Lighting Physics, Elevation & Nested Radius Engineer',
    mainTask: 'Translate the chosen Lighting Style into exact multi-layer `box-shadow` stacks, top specular inset highlights, ambient radial glows, or neon blooms',
    supportTask: 'Compute mathematically nested `border-radius` values (`outerRadius = innerRadius + padding`) across all cards, buttons, and inputs',
    upstreamInputs: 'Steps 31, 34 + Lighting Style & Element Style Config',
    downstreamTarget: 'Steps 38, 43, 49 (style.css)',
    creativeStretch: 'Create a 4-tier Elevation System (Base Canvas, Resting Card, Elevated Popover/Modal, Active/Hover Lift) driven by coherent directional lighting.',
    insightHarvest: 'Ensure lighting cues reinforce interactive hierarchy (Step 16) rather than glowing randomly everywhere.',
    criticalDeliverables: '1) Exact CSS Shadow & Specular Rim Tokens; 2) Nested Border-Radius Formula & Tokens; 3) Ambient Glow Positioning Rules.',
    dynamicSignals: ['visual-system'],
    directive: 'Consistent lighting physics separates amateur CSS from studio-grade visual craft.'
  },
  {
    num: 36, stage: 4, stageName: 'Visual Craft', section: '4B: Surface & Light',
    role: 'Visual Contrast Auditor & Universal Clarity Inspector',
    mainTask: 'Audit every foreground/background pair (normal text >=4.5:1, large text/icons/borders >=3:1) across resting, hover, active, disabled, and error states',
    supportTask: 'Verify every color-coded status or chart/game element also carries a distinct icon, pattern, or text label for color-vision accessibility',
    upstreamInputs: 'Steps 8, 31, 34, 35',
    downstreamTarget: 'Steps 43, 48–50',
    creativeStretch: 'Spot and fix subtle "low-contrast traps" (e.g., muted placeholder text, translucent glass over bright accents, or thin neon text on dark surfaces).',
    insightHarvest: 'Cross-check Step 31\'s palette and Step 34\'s glass/blur surfaces against Step 8\'s WCAG standards.',
    criticalDeliverables: '1) Foreground-Background Contrast Verification Table; 2) Non-Color Redundant Cue Checklist; 3) Adjusted Token Fixes if needed.',
    dynamicSignals: ['visual-system', 'platform-ergonomics'],
    directive: 'Beauty never comes at the expense of readability. Fix every low-contrast pair right here.'
  },
  {
    num: 37, stage: 4, stageName: 'Visual Craft', section: '4C: Motion & Craft',
    role: 'Motion Choreography & Reduced-Motion Director',
    mainTask: 'Define easing curves (`cubic-bezier`), View Transitions / panel entrances, staggered reveals, and strictly GPU-composited (`transform`, `opacity`) animations',
    supportTask: 'Specify comprehensive `@media (prefers-reduced-motion: reduce)` overrides that preserve instant clarity without disorienting motion',
    upstreamInputs: 'Steps 17, 24 + A11y/Motion & CSS3 Config',
    downstreamTarget: 'Steps 38, 43, 49 (style.css)',
    creativeStretch: 'Choreograph one signature transition (e.g., smooth card morph, springy drawer slide, or crisp stage reveal) that makes navigating feel physical and fluid.',
    insightHarvest: 'Align animation durations (120ms–260ms snappy UI vs. fluid canvas) with Step 7\'s rapid core loop so motion never slows down power users.',
    criticalDeliverables: '1) Motion Timing & Easing Tokens; 2) Keyframe & Transition Inventory; 3) Complete `prefers-reduced-motion` Fallback Rules.',
    dynamicSignals: ['sensory-motion', 'tech-stack'],
    directive: 'Motion should guide the eye and feel crisp—never sluggish, never animating layout-thrashing properties like width/top/left.'
  },
  {
    num: 38, stage: 4, stageName: 'Visual Craft', section: '4C: Motion & Craft',
    role: 'Tactile Micro-Interactions & Control Craft Specialist',
    mainTask: 'Craft bespoke CSS for every interactive control: buttons (`:hover` lift, `:active` press), custom range sliders, toggles, pills, inputs, and `:focus-visible` rings',
    supportTask: 'Design clear drag-over, selected, loading, and disabled states that respond instantaneously to pointer and keyboard input',
    upstreamInputs: 'Steps 25, 35, 37 + Element Style Config',
    downstreamTarget: 'Steps 43, 49 (style.css)',
    creativeStretch: 'Use `:has()` and smooth micro-transforms so hovering or focusing a card or input illuminates its parent container subtly.',
    insightHarvest: 'Connect Step 17\'s feedback matrix and Step 35\'s lighting tokens directly into interactive hover/active states.',
    criticalDeliverables: '1) Interactive Control State Matrix (Rest, Hover, Active, Focus-Visible, Disabled); 2) Custom Slider/Toggle/Input CSS Spec.',
    dynamicSignals: ['visual-system', 'sensory-motion', 'tech-stack'],
    directive: 'Make every button, slider, and card feel wonderfully tactile under the user\'s finger or cursor.'
  },
  {
    num: 39, stage: 4, stageName: 'Visual Craft', section: '4C: Motion & Craft',
    role: 'Bespoke Vector SVG & Canvas Visual Artist',
    mainTask: 'Design cohesive inline `<svg>` icons, brand mark/emblem, and custom empty-state illustrations with uniform stroke weights and `currentColor` theming',
    supportTask: 'Specify `<canvas>` rendering artistry (particles, trails, crisp `devicePixelRatio` HiDPI scaling, glow composites, or data visualizations) if applicable',
    upstreamInputs: 'Steps 15, 23, 31, 35 + HTML5 & JS Libs Config',
    downstreamTarget: 'Steps 45, 48, 50',
    creativeStretch: 'Design a custom inline SVG app logo/mark and an expressive empty-state illustration that look hand-crafted for this exact app.',
    insightHarvest: 'Ensure all visual assets honor Step 31\'s palette and Step 35\'s lighting direction with zero broken external image URLs.',
    criticalDeliverables: '1) Custom Inline SVG Icon & Emblem Inventory; 2) Empty-State Illustration Spec; 3) HiDPI Canvas / Chart Visual Styling Spec.',
    dynamicSignals: ['visual-system', 'tech-stack', 'mode-lens'],
    directive: 'Zero broken image links, zero mismatched icon weights. Every vector graphic should look native to the design system.'
  },
  {
    num: 40, stage: 4, stageName: 'Visual Craft', section: '4C: Motion & Craft',
    role: 'Living States, Polish & Celebration Experience Designer',
    mainTask: 'Design inviting empty states, smooth skeleton/loading shimmers, live status pulses, and subtle ambient background life',
    supportTask: 'Choreograph rewarding milestone/completion celebrations (particle bursts, floating score/status badges, warm audio chimes) calibrated to the app\'s tone',
    upstreamInputs: 'Steps 6, 17, 30, 37, 39',
    downstreamTarget: 'Steps 45, 48, 50',
    creativeStretch: 'Create a memorable "Peak Moment" celebration when the user finishes a task, exports a project, or hits a high score—never cheesy, always satisfying.',
    insightHarvest: 'Unite Stage 4\'s visual craft with Stage 1\'s Signature Moment (Step 1) and First-5-Seconds experience (Step 6).',
    criticalDeliverables: '1) Empty / Loading / Live-Pulse State Specs; 2) Milestone Celebration Choreography; 3) Final 10% Polish Checklist.',
    dynamicSignals: ['mode-lens', 'sensory-motion', 'visual-system'],
    directive: 'This is the final layer of studio magic that transforms a solid app into something people genuinely enjoy showing to friends.'
  },

  // STAGE 5: PRE-BUILD AUDIT & PRODUCTION CODE SYNTHESIS (Steps 41–50)
  {
    num: 41, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Holistic Completeness & Cross-Stage Upgrade Auditor',
    mainTask: 'Audit all 40 preceding steps against the Initial Prompt and every Pre-Prompt Studio option to uncover any gaps, contradictions, or missed synergies',
    supportTask: 'Actively upgrade any weak link using the deepest insights accumulated across Discovery, Systems, Blueprint, and Visual Craft',
    upstreamInputs: 'All Stages 1–4 (Steps 1–40) + Full Blueprint',
    downstreamTarget: 'Steps 42–50 (Locked Contracts & Code)',
    creativeStretch: 'Ask: "If a demanding user tested this for 5 minutes, what single missing detail would disappoint them?"—and add that fix to the locked plan right now.',
    insightHarvest: 'Reconcile every change or refinement discovered between Step 1 and Step 40 so there are zero contradictions entering contract lock.',
    criticalDeliverables: '1) Pre-Prompt Coverage Audit (100% of selected options verified); 2) Contradiction & Gap Resolution Log; 3) Final Feature & Polish Upgrades.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'visual-system', 'tech-stack', 'persistence-io', 'sensory-motion', 'constraints-anti'],
    directive: 'Be ruthless. Catch every missing edge case, mismatched selector idea, or forgotten constraint before locking the code contracts.'
  },
  {
    num: 42, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Canonical DOM, ID, Template & Selector Contract Lock',
    mainTask: 'Publish the exact, immutable manifest of every HTML landmark, `<dialog>`, `<template>`, `id`, `data-action`, `data-*` hook, and ARIA attribute',
    supportTask: 'Lock all shared CSS/JS state classes (`.is-active`, `.is-hidden`, `.is-open`, `.is-loading`, `.is-error`, `.is-dragging`) for 100% 3-file parity',
    upstreamInputs: 'Steps 23, 26, 41',
    downstreamTarget: 'Steps 48, 49, 50 (Zero Selector Mismatch)',
    creativeStretch: 'Include a clear Parent-Child Hierarchy & Template Slot map so CSS layout selectors and JS `querySelector` calls never miss.',
    insightHarvest: 'Verify every feature upgraded in Step 41 has its exact DOM hooks, IDs, and ARIA attributes locked in this manifest.',
    criticalDeliverables: '1) Canonical ID & `data-action` Manifest; 2) `<template>` & `<dialog>` Slot Contract; 3) Canonical State Class Dictionary.',
    dynamicSignals: ['tech-stack', 'platform-ergonomics'],
    directive: 'This manifest is law for Steps 48, 49, and 50. Every ID and class name must be exact and unambiguous.'
  },
  {
    num: 43, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Final CSS Token, Layout, Lighting & Motion Contract Lock',
    mainTask: 'Lock exact `:root` variables, `@layer` order, fluid `clamp()` typography, Grid/Flexbox/Container rules, and responsive breakpoints',
    supportTask: 'Lock surface materiality, lighting shadows, specular rims, nested radii, tactile hover/focus states, custom scrollbars, and `prefers-reduced-motion` rules',
    upstreamInputs: 'Steps 24, 31–38, 41, 42',
    downstreamTarget: 'Step 49 (style.css)',
    creativeStretch: 'Double-check every Step 42 state class and modal/dialog/toast styling rule so Step 49 writes complete, zero-gap CSS.',
    insightHarvest: 'Ensure all contrast fixes (Step 36) and mobile spacing rules (Step 33) are baked into the locked CSS tokens.',
    criticalDeliverables: '1) Locked `:root` Token List; 2) Locked Layout & Breakpoint Rules; 3) Locked Lighting, Surface & State Styling Spec.',
    dynamicSignals: ['visual-system', 'tech-stack', 'sensory-motion'],
    directive: 'Leave zero styling guesswork for Step 49—every visual token and state rule should be crystal clear.'
  },
  {
    num: 44, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Cross-Device Ergonomics, Input & A11y Contract Lock',
    mainTask: 'Lock mobile safe-area padding (`env(safe-area-inset-*)`), >=44px tap targets, `touch-action` rules, and unified PointerEvent handlers',
    supportTask: 'Lock complete keyboard shortcut bindings, input-focus guards, modal focus trapping, Escape dismissal, and ARIA live announcements',
    upstreamInputs: 'Steps 8, 25, 33, 41, 42',
    downstreamTarget: 'Steps 48, 49, 50',
    creativeStretch: 'Verify that every desktop-only hover tooltip or shortcut has a seamless, discoverable touch equivalent on mobile.',
    insightHarvest: 'Cross-verify Step 25\'s input plan against Step 42\'s final DOM IDs and `data-action` hooks.',
    criticalDeliverables: '1) Locked Keyboard Shortcut & Guard Map; 2) Locked Touch & Pointer Ergonomics Rules; 3) Focus & ARIA Live Contract.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'Guarantee desktop power users and mobile touch users both get an effortless, native-feeling experience.'
  },
  {
    num: 45, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Visual Assets, Web Audio, Canvas & CDN Library Contract Lock',
    mainTask: 'Finalize exact inline `<svg>` icon/emblem paths, `<canvas>` HiDPI draw/particle routines, and Web Audio synthesizer patch parameters',
    supportTask: 'Lock exact CDN `<script>`/`<link>` tags (if selected) and defensive initialization/fallback guards in JS',
    upstreamInputs: 'Steps 15, 30, 39, 40, 41, 42 + Selected JS Libs',
    downstreamTarget: 'Steps 48 & 50',
    creativeStretch: 'Confirm every SVG icon matches the exact `data-action` buttons in Step 42 and every celebration/feedback trigger fires cleanly.',
    insightHarvest: 'Ensure audio mute state, reduced-motion checks, and HiDPI canvas resizing are wired together seamlessly.',
    criticalDeliverables: '1) Final SVG & Illustration Asset Spec; 2) Canvas / Animation / Celebration Spec; 3) Web Audio & CDN Init Contract.',
    dynamicSignals: ['tech-stack', 'sensory-motion', 'visual-system'],
    directive: 'Zero broken icons, zero undefined CDN globals, zero un-unlocked AudioContext warnings.'
  },
  {
    num: 46, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Core Logic, State Engine & Persistence Contract Lock',
    mainTask: 'Lock the complete state schema, core domain algorithms/formulas, delegated `ACTION_HANDLERS`, and XSS-safe batched DOM renderers',
    supportTask: 'Lock storage keys, `saveState()`/`loadState()`/`migrateState()`, starter-data seeding, JSON/CSV/PNG export/import, and `resetAll()`',
    upstreamInputs: 'Steps 21, 22, 26–29, 41, 42',
    downstreamTarget: 'Step 50 (script.js)',
    creativeStretch: 'Trace through the boot sequence (`DOMContentLoaded` -> load/seed -> bind events -> initial render) step by step to verify zero race conditions.',
    insightHarvest: 'Verify every edge case from Step 14 and every feature from Step 41 has a complete, stub-free implementation plan.',
    criticalDeliverables: '1) Locked State & Algorithm Spec; 2) Locked Event & Render Flow; 3) Locked Persistence, Export/Import & Boot Sequence.',
    dynamicSignals: ['mode-lens', 'persistence-io', 'tech-stack'],
    directive: 'Every single button, slider, filter, modal, and export in Step 42 must have complete, concrete logic locked here.'
  },
  {
    num: 47, stage: 5, stageName: 'Build & Code', section: '5A: Contracts',
    role: 'Final Pre-Code Harmony & Zero-Defect Gatekeeper',
    mainTask: 'Perform a final 3-way parity check across Steps 41–46 against the Initial Prompt and every Pre-Prompt Studio selection',
    supportTask: 'Verify zero TODOs, zero placeholder copy, zero selector drift, and 100% readiness for Steps 48, 49, and 50',
    upstreamInputs: 'Steps 41–46 + Full Blueprint',
    downstreamTarget: 'Steps 48 (index.html), 49 (style.css), 50 (script.js)',
    creativeStretch: 'Write a concise "Code Generation Battle Plan" listing the top 10 subtle bugs to avoid during HTML, CSS, and JS emission.',
    insightHarvest: 'Catch any last-second mismatch between HTML IDs (Step 42), CSS classes (Step 43), and JS logic (Step 46).',
    criticalDeliverables: '1) 3-Way Parity Sign-Off; 2) Pre-Prompt Fidelity Confirmation; 3) Top-10 Bug-Prevention Checklist for Steps 48–50.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'visual-system', 'tech-stack', 'persistence-io', 'sensory-motion', 'constraints-anti'],
    directive: 'Clear the runway completely so Steps 48, 49, and 50 emit clean, harmonious, studio-grade production code.'
  },
  {
    num: 48, stage: 5, stageName: 'Build & Code', section: '5B: Code Output',
    targetFile: 'html',
    role: 'Principal HTML5 Engineer (index.html)',
    mainTask: 'Emit the complete, production-ready `index.html` implementing 100% of Steps 42, 44, 45, and 47 contracts',
    supportTask: 'Include `viewport-fit=cover`, semantic landmarks, accessible ARIA hooks, inline SVGs, `<template>`/`<dialog>` elements, CDN tags (only if selected), `./style.css`, and `./script.js`',
    upstreamInputs: 'Steps 42, 44, 45, 47 + Blueprint CDN Tags',
    downstreamTarget: 'index.html Deliverable & Steps 49–50',
    creativeStretch: 'Ensure clean indentation, crisp inline vector graphics, helpful domain microcopy, and zero unused or placeholder markup.',
    insightHarvest: 'Follow Step 42\'s exact ID/data-action manifest and Step 47\'s bug-prevention checklist character-for-character.',
    criticalDeliverables: 'Raw, complete, valid index.html only.',
    dynamicSignals: ['tech-stack', 'platform-ergonomics', 'visual-system', 'constraints-anti'],
    directive: 'Output ONLY valid, complete index.html code—no markdown fences, no commentary, no omitted sections, no placeholders.'
  },
  {
    num: 49, stage: 5, stageName: 'Build & Code', section: '5B: Code Output',
    targetFile: 'css',
    role: 'Principal CSS3 & Visual Engineer (style.css)',
    mainTask: 'Emit the complete, production-ready `style.css` matching 100% of the live generated `index.html` and Steps 43–44 contracts',
    supportTask: 'Implement all `:root` tokens, `@layer` structure, Design/Element/Lighting styles, responsive Grid/Flexbox/Container rules, tactile states, and `prefers-reduced-motion`',
    upstreamInputs: 'Live Generated index.html (Step 48) + Steps 43, 44, 47',
    downstreamTarget: 'style.css Deliverable & Step 50',
    creativeStretch: 'Craft luminous lighting, crisp nested corners, fluid clamp() typography, and buttery hover/focus/active states that make the UI look unforgettable.',
    insightHarvest: 'Inspect the live generated index.html provided below so every single ID, class, data-state, dialog, and template element is styled completely.',
    criticalDeliverables: 'Raw, complete, valid style.css only.',
    dynamicSignals: ['visual-system', 'tech-stack', 'platform-ergonomics', 'sensory-motion'],
    directive: 'Output ONLY valid, complete style.css code—no markdown fences, no commentary, no omitted rules, no placeholders.'
  },
  {
    num: 50, stage: 5, stageName: 'Build & Code', section: '5B: Code Output',
    targetFile: 'js',
    role: 'Principal JavaScript Engineer (script.js)',
    mainTask: 'Emit the complete, production-ready `script.js` matching 100% of the live generated `index.html` and `style.css`',
    supportTask: 'Implement full state management, storage resilience, starter data, delegated events, XSS-safe rendering, audio/canvas/CDN hooks, error boundaries, and `init()`',
    upstreamInputs: 'Live Generated index.html (Step 48) + Live Generated style.css (Step 49) + Steps 45, 46, 47',
    downstreamTarget: 'script.js Deliverable & Live Preview',
    creativeStretch: 'Ensure every single button, filter, shortcut, export, undo/redo, and celebration works out-of-the-box on first load with zero console errors.',
    insightHarvest: 'Cross-reference every selector and CSS state class against the live generated index.html and style.css provided below so parity is 100% exact.',
    criticalDeliverables: 'Raw, complete, valid script.js only.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'persistence-io', 'sensory-motion', 'platform-ergonomics', 'constraints-anti'],
    directive: 'Output ONLY valid, complete script.js code—no markdown fences, no commentary, zero TODOs, zero stubs, zero truncated functions.'
  }
];
const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

function createDefaultStudioConfig(type = 'app') {
  const mode = STUDIO_CATALOG.projectTypes[type] || STUDIO_CATALOG.projectTypes.app;
  const d = mode.defaults;
  return {
    projectType: mode.id,
    targetPlatform: d.targetPlatform,
    dataPersistence: d.dataPersistence,
    complexity: d.complexity || 'balanced-complete',
    navStyle: d.navStyle || 'tabbed-views',
    starterExp: d.starterExp || 'realistic-demo',
    sensoryAudio: d.sensoryAudio,
    a11yMotion: d.a11yMotion,
    targetAudience: '',
    extraConstraints: '',
    antiGoals: '',
    interfaceDesign: d.interfaceDesign,
    designStyle: d.designStyle,
    colorMood: d.colorMood || 'indigo-slate',
    typographyStyle: d.typographyStyle || 'clean-modern',
    elementStyle: d.elementStyle,
    lightingStyle: d.lightingStyle,
    html5: [...d.html5],
    css3: [...d.css3],
    jsArch: [...d.jsArch],
    jsLibs: [...d.jsLibs],
    essentials: [...d.essentials]
  };
}

const state = {
  apiKeys: [],
  activeKeyIndex: 0,
  model: 'gemini-4-hydrogen',
  thinkingLevel: 'xhigh',
  maxOutputTokens: 65536,
  delayMs: 4000,
  defaultCooldownSec: 60,
  retryBaseSec: 20,
  retryCapSec: 3600,
  bgKeepAliveEnabled: true,
  osNotifEnabled: true,
  autoResumeOnReload: true,
  storagePersisted: false,
  studioConfig: createDefaultStudioConfig('app'),
  activeBpTab: 'essentials',
  desktopLayout: 'split',
  userPrompt: '',
  notesText: '',
  htmlCode: '',
  cssCode: '',
  jsCode: '',
  completedSteps: {},
  expandedSteps: new Set(),
  lastScrolledStep: 0,
  nextStepIndex: 0,
  activeTab: 'notes',
  activeFilter: 'all',
  isRunning: false,
  isPaused: false,
  isFrozen: false,
  isOfflineWaiting: false,
  freezeWakeResolver: null,
  networkWakeResolver: null,
  sessionCalls: 0,
  sessionRetries: 0,
  runStartedAt: null,
  stepDurations: [],
  abortController: null,
  fileHandle: null,
  previewErrors: [],
  swRegistration: null,
  deferredInstallPrompt: null,
  wakeLock: null,
  bgAudioEl: null,
  bgAudioUrl: null,
  timerWorker: null,
  heartbeatTickCount: 0,
  lastOsNotifPush: 0,
  lastNotifSnapshot: {
    mode: 'hidden',
    title: '',
    detail: '',
    stepNum: 0
  },
  isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  battery: {
    supported: false,
    level: null,
    charging: null,
    dischargingTime: null,
    warnedLow: false,
    warnedCritical: false
  }
};

const el = {
  apiKeyInput: document.getElementById('apiKeyInput'),
  addKeyQuickBtn: document.getElementById('addKeyQuickBtn'),
  toggleKeyVisBtn: document.getElementById('toggleKeyVisBtn'),
  manageKeysBtn: document.getElementById('manageKeysBtn'),
  keyPoolDot: document.getElementById('keyPoolDot'),
  keyPoolBadge: document.getElementById('keyPoolBadge'),
  installAppBtn: document.getElementById('installAppBtn'),
  keysModal: document.getElementById('keysModal'),
  closeKeysModalBtn: document.getElementById('closeKeysModalBtn'),
  bulkKeysInput: document.getElementById('bulkKeysInput'),
  addBulkKeysBtn: document.getElementById('addBulkKeysBtn'),
  csvKeysFileInput: document.getElementById('csvKeysFileInput'),
  uploadCsvKeysBtn: document.getElementById('uploadCsvKeysBtn'),
  exportCsvKeysBtn: document.getElementById('exportCsvKeysBtn'),
  resetAllCooldownsBtn: document.getElementById('resetAllCooldownsBtn'),
  clearInvalidKeysBtn: document.getElementById('clearInvalidKeysBtn'),
  modalPoolSummary: document.getElementById('modalPoolSummary'),
  keysListContainer: document.getElementById('keysListContainer'),
  modelBadge: document.getElementById('modelBadge'),
  settingsBtn: document.getElementById('settingsBtn'),
  settingsModal: document.getElementById('settingsModal'),
  closeSettingsBtn: document.getElementById('closeSettingsBtn'),
  saveSettingsBtn: document.getElementById('saveSettingsBtn'),
  modelInput: document.getElementById('modelInput'),
  thinkingLevelSelect: document.getElementById('thinkingLevelSelect'),
  maxTokensInput: document.getElementById('maxTokensInput'),
  delayInput: document.getElementById('delayInput'),
  defaultCooldownInput: document.getElementById('defaultCooldownInput'),
  retryBaseInput: document.getElementById('retryBaseInput'),
  retryCapInput: document.getElementById('retryCapInput'),
  bgKeepAliveToggle: document.getElementById('bgKeepAliveToggle'),
  osNotifToggle: document.getElementById('osNotifToggle'),
  autoResumeOnReloadToggle: document.getElementById('autoResumeOnReloadToggle'),
  persistenceHeaderLabel: document.getElementById('persistenceHeaderLabel'),
  androidBatteryHelpBtn: document.getElementById('androidBatteryHelpBtn'),
  mobileReadinessModal: document.getElementById('mobileReadinessModal'),
  closeReadinessBtn: document.getElementById('closeReadinessBtn'),
  readinessChecklist: document.getElementById('readinessChecklist'),
  testLockNotifBtn: document.getElementById('testLockNotifBtn'),
  enableAllReadinessBtn: document.getElementById('enableAllReadinessBtn'),
  liveNotificationBar: document.getElementById('liveNotificationBar'),
  notifStatusDot: document.getElementById('notifStatusDot'),
  notifTitle: document.getElementById('notifTitle'),
  notifDetail: document.getElementById('notifDetail'),
  notifKeyPill: document.getElementById('notifKeyPill'),
  notifEtaPill: document.getElementById('notifEtaPill'),
  notifCallsPill: document.getElementById('notifCallsPill'),
  notifProgressText: document.getElementById('notifProgressText'),
  notifProgressFill: document.getElementById('notifProgressFill'),
  notifBatteryBadge: document.getElementById('notifBatteryBadge'),
  notifNetBadge: document.getElementById('notifNetBadge'),
  notifWakeBadge: document.getElementById('notifWakeBadge'),
  notifAudioBadge: document.getElementById('notifAudioBadge'),
  notifOsBtn: document.getElementById('notifOsBtn'),
  notifPauseBtn: document.getElementById('notifPauseBtn'),
  notifResumeBtn: document.getElementById('notifResumeBtn'),
  buildForm: document.getElementById('buildForm'),
  promptInput: document.getElementById('promptInput'),
  projectTypeSelector: document.getElementById('projectTypeSelector'),
  dynamicSamplePrompts: document.getElementById('dynamicSamplePrompts'),
  blueprintSummaryChips: document.getElementById('blueprintSummaryChips'),
  openBlueprintModalBtn: document.getElementById('openBlueprintModalBtn'),
  blueprintModal: document.getElementById('blueprintModal'),
  bpModalTypeBadge: document.getElementById('bpModalTypeBadge'),
  closeBlueprintModalBtn: document.getElementById('closeBlueprintModalBtn'),
  doneBlueprintModalBtn: document.getElementById('doneBlueprintModalBtn'),
  applyRecommendedPresetBtn: document.getElementById('applyRecommendedPresetBtn'),
  bpTargetPlatform: document.getElementById('bpTargetPlatform'),
  bpDataPersistence: document.getElementById('bpDataPersistence'),
  bpComplexity: document.getElementById('bpComplexity'),
  bpNavStyle: document.getElementById('bpNavStyle'),
  bpStarterExp: document.getElementById('bpStarterExp'),
  bpSensoryAudio: document.getElementById('bpSensoryAudio'),
  bpA11yMotion: document.getElementById('bpA11yMotion'),
  bpTargetAudience: document.getElementById('bpTargetAudience'),
  bpExtraConstraints: document.getElementById('bpExtraConstraints'),
  bpAntiGoals: document.getElementById('bpAntiGoals'),
  dynamicEssentialsTitle: document.getElementById('dynamicEssentialsTitle'),
  dynamicEssentialsSubtitle: document.getElementById('dynamicEssentialsSubtitle'),
  dynamicEssentialsBadge: document.getElementById('dynamicEssentialsBadge'),
  dynamicCategoryEssentials: document.getElementById('dynamicCategoryEssentials'),
  interfaceGallery: document.getElementById('interfaceGallery'),
  designStyleGallery: document.getElementById('designStyleGallery'),
  colorMoodGallery: document.getElementById('colorMoodGallery'),
  typographyStyleGallery: document.getElementById('typographyStyleGallery'),
  elementStyleGallery: document.getElementById('elementStyleGallery'),
  lightingStyleGallery: document.getElementById('lightingStyleGallery'),
  html5OptionsGrid: document.getElementById('html5OptionsGrid'),
  css3OptionsGrid: document.getElementById('css3OptionsGrid'),
  jsArchOptionsGrid: document.getElementById('jsArchOptionsGrid'),
  jsLibsOptionsGrid: document.getElementById('jsLibsOptionsGrid'),
  html5SelectedCount: document.getElementById('html5SelectedCount'),
  css3SelectedCount: document.getElementById('css3SelectedCount'),
  jsArchSelectedCount: document.getElementById('jsArchSelectedCount'),
  jsLibsSelectedCount: document.getElementById('jsLibsSelectedCount'),
  startBuildBtn: document.getElementById('startBuildBtn'),
  pauseBtn: document.getElementById('pauseBtn'),
  resumeBtn: document.getElementById('resumeBtn'),
  resumeBtnLabel: document.getElementById('resumeBtnLabel'),
  resetRunBtn: document.getElementById('resetRunBtn'),
  errorBanner: document.getElementById('errorBanner'),
  errorBannerText: document.getElementById('errorBannerText'),
  dismissErrorBannerBtn: document.getElementById('dismissErrorBannerBtn'),
  checklistContainer: document.getElementById('checklistContainer'),
  pipelineStatusText: document.getElementById('pipelineStatusText'),
  stepProgressText: document.getElementById('stepProgressText'),
  requestCounterText: document.getElementById('requestCounterText'),
  overallProgressBar: document.getElementById('overallProgressBar'),
  leftPane: document.getElementById('leftPane'),
  rightPane: document.getElementById('rightPane'),
  promptCollapsedBar: document.getElementById('promptCollapsedBar'),
  collapsedPromptPreview: document.getElementById('collapsedPromptPreview'),
  expandPromptBtn: document.getElementById('expandPromptBtn'),
  collapsePromptBtn: document.getElementById('collapsePromptBtn'),
  collapsedResumeBtn: document.getElementById('collapsedResumeBtn'),
  collapsedPauseBtn: document.getElementById('collapsedPauseBtn'),
  mobileBottomNav: document.getElementById('mobileBottomNav'),
  notesEditor: document.getElementById('notesEditor'),
  htmlEditor: document.getElementById('htmlEditor'),
  cssEditor: document.getElementById('cssEditor'),
  jsEditor: document.getElementById('jsEditor'),
  notesTokenEstimate: document.getElementById('notesTokenEstimate'),
  previewPanel: document.getElementById('previewPanel'),
  previewFrameWrapper: document.getElementById('previewFrameWrapper'),
  previewIframe: document.getElementById('previewIframe'),
  previewErrorCountBadge: document.getElementById('previewErrorCountBadge'),
  previewConsoleBar: document.getElementById('previewConsoleBar'),
  previewConsoleList: document.getElementById('previewConsoleList'),
  clearPreviewErrorsBtn: document.getElementById('clearPreviewErrorsBtn'),
  badgeNotes: document.getElementById('badgeNotes'),
  badgeHtml: document.getElementById('badgeHtml'),
  badgeCss: document.getElementById('badgeCss'),
  badgeJs: document.getElementById('badgeJs'),
  notesSubBar: document.getElementById('notesSubBar'),
  previewSubBar: document.getElementById('previewSubBar'),
  copyActiveBtn: document.getElementById('copyActiveBtn'),
  downloadActiveBtn: document.getElementById('downloadActiveBtn'),
  downloadActiveLabel: document.getElementById('downloadActiveLabel'),
  downloadAllBtn: document.getElementById('downloadAllBtn'),
  linkFileBtn: document.getElementById('linkFileBtn'),
  linkFileLabel: document.getElementById('linkFileLabel'),
  fileSyncBadge: document.getElementById('fileSyncBadge'),
  refreshPreviewBtn: document.getElementById('refreshPreviewBtn'),
  openPreviewTabBtn: document.getElementById('openPreviewTabBtn'),
  toastContainer: document.getElementById('toastContainer')
};

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function safeGet(key, fallback = null) {
  try {
    const val = localStorage.getItem(key);
    return val === null ? fallback : val;
  } catch (_) {
    return fallback;
  }
}

function safeSet(key, val) {
  try {
    localStorage.setItem(key, val);
    return true;
  } catch (_) {
    return false;
  }
}

function saveStudioConfig() {
  safeSet('wbs_studio_config', JSON.stringify(state.studioConfig));
}

function saveWorkspaceSnapshot() {
  safeSet('wbs_prompt', state.userPrompt);
  safeSet('wbs_notes', state.notesText);
  safeSet('wbs_html', state.htmlCode);
  safeSet('wbs_css', state.cssCode);
  safeSet('wbs_js', state.jsCode);
  safeSet('wbs_next_idx', String(state.nextStepIndex));
  safeSet('wbs_was_running', state.isRunning ? '1' : '0');
  safeSet('wbs_run_started_at', state.runStartedAt ? String(state.runStartedAt) : '');
  safeSet('wbs_session_calls', String(state.sessionCalls));
  safeSet('wbs_session_retries', String(state.sessionRetries));
  const compactCompleted = {};
  Object.keys(state.completedSteps).forEach((k) => {
    compactCompleted[k] = { timestamp: state.completedSteps[k].timestamp || '' };
  });
  safeSet('wbs_completed_meta', JSON.stringify(compactCompleted));
  saveStudioConfig();
}

function saveKeyPool() {
  const serializable = state.apiKeys.map((k) => ({
    id: k.id,
    key: k.key,
    label: k.label,
    status: k.status,
    resetAt: Number.isFinite(k.resetAt) ? k.resetAt : null,
    cooldownReason: k.cooldownReason || '',
    lastError: k.lastError || '',
    calls: k.calls || 0,
    hits429: k.hits429 || 0,
    consecutive429: k.consecutive429 || 0,
    last429At: k.last429At || null,
    lastSuccessAt: k.lastSuccessAt || null
  }));
  safeSet('gemini_api_keys_pool', JSON.stringify(serializable));
  safeSet('gemini_active_key_idx', String(state.activeKeyIndex));
}

function saveSettingsSnapshot() {
  safeSet('wbs_settings', JSON.stringify({
    model: state.model,
    thinkingLevel: state.thinkingLevel,
    maxOutputTokens: state.maxOutputTokens,
    delayMs: state.delayMs,
    defaultCooldownSec: state.defaultCooldownSec,
    retryBaseSec: state.retryBaseSec,
    retryCapSec: state.retryCapSec,
    bgKeepAliveEnabled: state.bgKeepAliveEnabled,
    osNotifEnabled: state.osNotifEnabled,
    autoResumeOnReload: state.autoResumeOnReload
  }));
}

function hydrateStepOutputsFromNotes() {
  if (!state.notesText) return;
  const regex = /\n?--- \[STEP (\d+)\/50 \| [^\]]+\] ---\n([\s\S]*?)(?=\n--- \[STEP \d+\/50 \| |$)/g;
  let match;
  while ((match = regex.exec(state.notesText)) !== null) {
    const stepNum = Number(match[1]);
    const body = match[2].trim();
    if (!state.completedSteps[stepNum]) {
      state.completedSteps[stepNum] = { timestamp: '' };
    }
    state.completedSteps[stepNum].output = body;
  }
}

function showToast(message, type = 'info') {
  const colors = {
    info: 'bg-slate-800 border-slate-700 text-slate-200',
    success: 'bg-emerald-950/95 border-emerald-600/50 text-emerald-200',
    warn: 'bg-amber-950/95 border-amber-600/50 text-amber-200',
    error: 'bg-rose-950/95 border-rose-600/50 text-rose-200'
  };
  const toast = document.createElement('div');
  toast.className = `pointer-events-auto px-3.5 py-2.5 rounded-lg border text-xs font-medium shadow-lg transition-opacity duration-300 ${colors[type] || colors.info}`;
  toast.textContent = message;
  el.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

function showErrorBanner(msg) {
  el.errorBannerText.textContent = msg;
  el.errorBanner.classList.remove('hidden');
}

function hideErrorBanner() {
  el.errorBanner.classList.add('hidden');
  el.errorBannerText.textContent = '';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// =========================================================================
// DESKTOP LAYOUT SWITCHER (MORE SCREEN REAL ESTATE)
// =========================================================================
function setDesktopLayout(mode) {
  state.desktopLayout = mode;
  document.querySelectorAll('#layoutModeSwitcher .layout-mode-btn').forEach((btn) => {
    const active = btn.dataset.layout === mode;
    btn.className = active
      ? 'layout-mode-btn px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-600/25 text-indigo-200 border border-indigo-500/40 transition'
      : 'layout-mode-btn px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-400 hover:text-slate-200 border border-transparent transition';
  });

  if (window.innerWidth < 1024) return;

  if (mode === 'steps') {
    el.leftPane.className = 'w-full flex flex-col h-full min-w-0 transition-all duration-200';
    el.rightPane.className = 'hidden flex-col flex-1 min-w-0 bg-[#0b101b] h-full';
  } else if (mode === 'workspace') {
    el.leftPane.className = 'hidden flex-col h-full min-w-0';
    el.rightPane.className = 'flex flex-col w-full flex-1 min-w-0 bg-[#0b101b] h-full transition-all duration-200';
  } else {
    el.leftPane.className = 'w-full lg:w-[46%] xl:w-[44%] flex flex-col h-full border-r border-slate-800/80 min-w-0 transition-all duration-200';
    el.rightPane.className = 'hidden lg:flex flex-col flex-1 min-w-0 bg-[#0b101b] h-full transition-all duration-200';
  }
}

// =========================================================================
// STUDIO BLUEPRINT CONFIGURATOR UI & DYNAMIC CONTEXT WEAVER
// =========================================================================
function findCatalogItem(list, id) {
  return list.find((item) => item.id === id) || list[0];
}

function setProjectType(typeId, applyDefaults = true) {
  const mode = STUDIO_CATALOG.projectTypes[typeId] || STUDIO_CATALOG.projectTypes.app;
  if (applyDefaults) {
    const fresh = createDefaultStudioConfig(mode.id);
    fresh.targetAudience = state.studioConfig.targetAudience;
    fresh.extraConstraints = state.studioConfig.extraConstraints;
    fresh.antiGoals = state.studioConfig.antiGoals;
    state.studioConfig = fresh;
  } else {
    state.studioConfig.projectType = mode.id;
  }
  saveStudioConfig();
  renderProjectTypeUI();
  renderBlueprintSummaryStrip();
  if (el.blueprintModal && !el.blueprintModal.classList.contains('hidden')) {
    renderBlueprintModalContents();
  }
}

function renderProjectTypeUI() {
  const current = state.studioConfig.projectType;
  document.querySelectorAll('#projectTypeSelector .proj-type-btn').forEach((btn) => {
    const active = btn.dataset.type === current;
    btn.className = active
      ? 'proj-type-btn shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition flex items-center gap-1 bg-indigo-600/25 text-indigo-200 border-indigo-500/50'
      : 'proj-type-btn shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition flex items-center gap-1 bg-slate-900/90 text-slate-400 border-slate-800 hover:text-slate-200';
  });

  const mode = STUDIO_CATALOG.projectTypes[current] || STUDIO_CATALOG.projectTypes.app;
  el.dynamicSamplePrompts.innerHTML = '';
  mode.samplePrompts.forEach((sp) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'shrink-0 text-[11px] px-2 py-1 rounded bg-slate-800/90 hover:bg-slate-700 border border-slate-700/70 text-slate-300 transition';
    b.textContent = sp.label;
    b.addEventListener('click', () => {
      if (state.isRunning) return;
      el.promptInput.value = sp.prompt;
      el.promptInput.focus();
    });
    el.dynamicSamplePrompts.appendChild(b);
  });
}

function renderBlueprintSummaryStrip() {
  if (!el.blueprintSummaryChips) return;
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const iface = findCatalogItem(STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign);
  const style = findCatalogItem(STUDIO_CATALOG.designStyles, cfg.designStyle);
  const mood = findCatalogItem(STUDIO_CATALOG.colorMoods, cfg.colorMood);
  const light = findCatalogItem(STUDIO_CATALOG.lightingStyles, cfg.lightingStyle);

  const chips = [
    { text: mode.label, cls: 'bg-indigo-500/15 text-indigo-200 border-indigo-500/35' },
    { text: iface.name, cls: 'bg-slate-800/90 text-slate-300 border-slate-700' },
    { text: style.name, cls: 'bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/30' },
    { text: mood.name, cls: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/30' },
    { text: light.name, cls: 'bg-amber-500/10 text-amber-200 border-amber-500/30' },
    { text: `${cfg.essentials.length} Features`, cls: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/30' },
    { text: cfg.jsLibs.length > 0 ? `${cfg.jsLibs.length} Add-On${cfg.jsLibs.length > 1 ? 's' : ''}` : 'Pure Vanilla', cls: 'bg-slate-800/90 text-slate-300 border-slate-700' }
  ];

  el.blueprintSummaryChips.innerHTML = chips
    .map((c) => `<span class="shrink-0 px-1.5 py-0.5 rounded border ${c.cls}">${escapeHtml(c.text)}</span>`)
    .join('');
}

function switchBlueprintTab(tabId) {
  state.activeBpTab = tabId;
  document.querySelectorAll('#blueprintTabs .bp-tab-btn').forEach((btn) => {
    const active = btn.dataset.bpTab === tabId;
    btn.className = active
      ? 'bp-tab-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/25 text-indigo-200 border border-indigo-500/40 transition shrink-0'
      : 'bp-tab-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 transition shrink-0';
  });
  document.querySelectorAll('.bp-tab-panel').forEach((panel) => {
    panel.classList.toggle('hidden', panel.id !== `bpTab-${tabId}`);
  });
}

function renderVisualGallery(container, items, selectedId, onSelect) {
  container.innerHTML = '';
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `visual-ref-card${isSel ? ' is-selected' : ''}`;
    btn.innerHTML = `
      ${item.svg ? `<div class="visual-ref-preview">${item.svg}</div>` : ''}
      ${item.colors ? `<div class="flex items-center gap-1 mb-1.5">${item.colors.map((c) => `<span class="h-3 flex-1 rounded-sm border border-white/10" style="background:${c}"></span>`).join('')}</div>` : ''}
      <div class="flex items-center justify-between gap-1">
        <span class="text-[11px] font-semibold text-slate-100 truncate">${escapeHtml(item.name)}</span>
        ${isSel ? '<span class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>' : ''}
      </div>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${escapeHtml(item.desc)}</p>
    `;
    btn.addEventListener('click', () => {
      onSelect(item.id);
      saveStudioConfig();
      renderBlueprintSummaryStrip();
      renderVisualGallery(container, items, item.id, onSelect);
    });
    container.appendChild(btn);
  });
}

function renderMultiToggleGrid(container, items, selectedList, countEl, onToggle, currentType = null) {
  container.innerHTML = '';
  if (countEl) countEl.textContent = `${selectedList.length} selected`;

  items.forEach((item) => {
    const isSel = selectedList.includes(item.id);
    const isRecommended = currentType && Array.isArray(item.modes) && item.modes.includes(currentType);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `bp-toggle-card${isSel ? ' is-selected' : ''}`;
    btn.innerHTML = `
      <span class="mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${isSel ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-900 border-slate-700 text-transparent'}">
        <svg viewBox="0 0 12 12" class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2"><polyline points="2 6 5 9 10 3"/></svg>
      </span>
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="text-[11px] font-semibold text-slate-100">${escapeHtml(item.label)}</span>
          ${item.tech ? `<span class="px-1.5 py-0.2 rounded text-[9px] font-mono-code bg-slate-800 text-slate-400 border border-slate-700">${escapeHtml(item.tech)}</span>` : ''}
          ${isRecommended ? '<span class="px-1 py-0.2 rounded text-[9px] font-mono-code bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Great Fit</span>' : ''}
        </div>
        <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${escapeHtml(item.desc)}</p>
      </div>
    `;
    btn.addEventListener('click', () => {
      onToggle(item.id);
      saveStudioConfig();
      renderBlueprintSummaryStrip();
      renderMultiToggleGrid(container, items, selectedList, countEl, onToggle, currentType);
    });
    container.appendChild(btn);
  });
}

function toggleArrayItem(arr, id) {
  const idx = arr.indexOf(id);
  if (idx === -1) arr.push(id);
  else arr.splice(idx, 1);
}

function renderBlueprintModalContents() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;

  el.bpModalTypeBadge.textContent = mode.label.toUpperCase();
  el.bpTargetPlatform.value = cfg.targetPlatform;
  el.bpDataPersistence.value = cfg.dataPersistence;
  el.bpComplexity.value = cfg.complexity || 'balanced-complete';
  el.bpNavStyle.value = cfg.navStyle || 'tabbed-views';
  el.bpStarterExp.value = cfg.starterExp || 'realistic-demo';
  el.bpSensoryAudio.value = cfg.sensoryAudio;
  el.bpA11yMotion.value = cfg.a11yMotion;
  el.bpTargetAudience.value = cfg.targetAudience || '';
  el.bpExtraConstraints.value = cfg.extraConstraints || '';
  el.bpAntiGoals.value = cfg.antiGoals || '';

  el.dynamicEssentialsTitle.textContent = `${mode.label} — Recommended Features`;
  el.dynamicEssentialsSubtitle.textContent = mode.roleLens;
  el.dynamicEssentialsBadge.textContent = `${cfg.essentials.length}/${mode.categoryEssentials.length} Active`;

  renderMultiToggleGrid(
    el.dynamicCategoryEssentials,
    mode.categoryEssentials,
    cfg.essentials,
    null,
    (id) => {
      toggleArrayItem(cfg.essentials, id);
      el.dynamicEssentialsBadge.textContent = `${cfg.essentials.length}/${mode.categoryEssentials.length} Active`;
    }
  );

  renderVisualGallery(el.interfaceGallery, STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign, (id) => {
    cfg.interfaceDesign = id;
  });
  renderVisualGallery(el.designStyleGallery, STUDIO_CATALOG.designStyles, cfg.designStyle, (id) => {
    cfg.designStyle = id;
  });
  renderVisualGallery(el.colorMoodGallery, STUDIO_CATALOG.colorMoods, cfg.colorMood, (id) => {
    cfg.colorMood = id;
  });
  renderVisualGallery(el.typographyStyleGallery, STUDIO_CATALOG.typographyStyles, cfg.typographyStyle, (id) => {
    cfg.typographyStyle = id;
  });
  renderVisualGallery(el.elementStyleGallery, STUDIO_CATALOG.elementStyles, cfg.elementStyle, (id) => {
    cfg.elementStyle = id;
  });
  renderVisualGallery(el.lightingStyleGallery, STUDIO_CATALOG.lightingStyles, cfg.lightingStyle, (id) => {
    cfg.lightingStyle = id;
  });

  renderMultiToggleGrid(el.html5OptionsGrid, STUDIO_CATALOG.html5Options, cfg.html5, el.html5SelectedCount, (id) => {
    toggleArrayItem(cfg.html5, id);
  });
  renderMultiToggleGrid(el.css3OptionsGrid, STUDIO_CATALOG.css3Options, cfg.css3, el.css3SelectedCount, (id) => {
    toggleArrayItem(cfg.css3, id);
  });
  renderMultiToggleGrid(el.jsArchOptionsGrid, STUDIO_CATALOG.jsArchOptions, cfg.jsArch, el.jsArchSelectedCount, (id) => {
    toggleArrayItem(cfg.jsArch, id);
  });
  renderMultiToggleGrid(
    el.jsLibsOptionsGrid,
    STUDIO_CATALOG.jsLibsOptions,
    cfg.jsLibs,
    el.jsLibsSelectedCount,
    (id) => {
      toggleArrayItem(cfg.jsLibs, id);
    },
    cfg.projectType
  );
}

function compileFullBlueprintSummaryText() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const iface = findCatalogItem(STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign);
  const style = findCatalogItem(STUDIO_CATALOG.designStyles, cfg.designStyle);
  const mood = findCatalogItem(STUDIO_CATALOG.colorMoods, cfg.colorMood);
  const typo = findCatalogItem(STUDIO_CATALOG.typographyStyles, cfg.typographyStyle);
  const elem = findCatalogItem(STUDIO_CATALOG.elementStyles, cfg.elementStyle);
  const light = findCatalogItem(STUDIO_CATALOG.lightingStyles, cfg.lightingStyle);

  const essLabels = mode.categoryEssentials.filter((e) => cfg.essentials.includes(e.id)).map((e) => `${e.label} (${e.desc})`);
  const htmlLabels = STUDIO_CATALOG.html5Options.filter((h) => cfg.html5.includes(h.id)).map((h) => `${h.label} [${h.tech}]`);
  const cssLabels = STUDIO_CATALOG.css3Options.filter((c) => cfg.css3.includes(c.id)).map((c) => `${c.label} [${c.tech}]`);
  const jsArchLabels = STUDIO_CATALOG.jsArchOptions.filter((j) => cfg.jsArch.includes(j.id)).map((j) => `${j.label} [${j.tech}]`);
  const jsLibsSelected = STUDIO_CATALOG.jsLibsOptions.filter((l) => cfg.jsLibs.includes(l.id));

  const lines = [
    `PROJECT TYPE: ${mode.label} — ${mode.roleLens}`,
    `EXPERIENCE PROFILE: Platform=${cfg.targetPlatform} | Complexity=${cfg.complexity} | Navigation=${cfg.navStyle} | First-5-Sec=${cfg.starterExp}`,
    `PERSISTENCE & SENSORY: Storage=${cfg.dataPersistence} | Audio=${cfg.sensoryAudio} | Motion/A11y=${cfg.a11yMotion}`,
    `SELECTED MODE FEATURES: ${essLabels.length ? essLabels.join('; ') : 'Standard'}`,
    `INTERFACE LAYOUT: ${iface.name} (${iface.desc})`,
    `DESIGN STYLE: ${style.name} (${style.desc})`,
    `COLOR & TYPOGRAPHY: ${mood.name} (${mood.colors.join(', ')}) | ${typo.name} (${typo.desc})`,
    `ELEMENT & LIGHTING: ${elem.name} (${elem.desc}) | ${light.name} (${light.desc})`,
    `HTML5 CAPABILITIES: ${htmlLabels.length ? htmlLabels.join(', ') : 'Standard Semantic HTML5'}`,
    `CSS3 CAPABILITIES: ${cssLabels.length ? cssLabels.join(', ') : 'Modern Responsive CSS3'}`,
    `JS ARCHITECTURE: ${jsArchLabels.length ? jsArchLabels.join(', ') : 'Clean Modular ES6+'}`,
    `ADD-ON LIBRARIES: ${jsLibsSelected.length ? jsLibsSelected.map((l) => `${l.label} (${l.cdn})`).join(' | ') : 'None (100% pure zero-dependency Vanilla HTML/CSS/JS)'}`
  ];

  if (cfg.targetAudience?.trim()) lines.push(`TARGET AUDIENCE: ${cfg.targetAudience.trim()}`);
  if (cfg.extraConstraints?.trim()) lines.push(`MUST-HAVE DETAILS: ${cfg.extraConstraints.trim()}`);
  if (cfg.antiGoals?.trim()) lines.push(`THINGS TO AVOID: ${cfg.antiGoals.trim()}`);

  return lines.join('\n');
}

function compileDynamicStepBlueprint(stepObj) {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const iface = findCatalogItem(STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign);
  const style = findCatalogItem(STUDIO_CATALOG.designStyles, cfg.designStyle);
  const mood = findCatalogItem(STUDIO_CATALOG.colorMoods, cfg.colorMood);
  const typo = findCatalogItem(STUDIO_CATALOG.typographyStyles, cfg.typographyStyle);
  const elem = findCatalogItem(STUDIO_CATALOG.elementStyles, cfg.elementStyle);
  const light = findCatalogItem(STUDIO_CATALOG.lightingStyles, cfg.lightingStyle);
  const jsLibsSelected = STUDIO_CATALOG.jsLibsOptions.filter((l) => cfg.jsLibs.includes(l.id));

  const essItems = mode.categoryEssentials.filter((e) => cfg.essentials.includes(e.id));
  const htmlItems = STUDIO_CATALOG.html5Options.filter((h) => cfg.html5.includes(h.id));
  const cssItems = STUDIO_CATALOG.css3Options.filter((c) => cfg.css3.includes(c.id));
  const jsArchItems = STUDIO_CATALOG.jsArchOptions.filter((j) => cfg.jsArch.includes(j.id));
  const signals = new Set(stepObj.dynamicSignals || ['mode-lens', 'visual-system', 'tech-stack']);

  const modeCriticalLenses = {
    app: 'Everyday Web App Lens: prioritize instant clarity, reversible actions (Undo/Redo), zero-clutter multi-view state continuity, realistic starter data, and effortless export/backup.',
    tool: 'Utility / Workbench Lens: prioritize zero-latency live calculation as inputs change, keyboard-first precision controls, crystal-clear error diagnostics, preset banks, and 1-click copy/export.',
    game: 'Browser Game Lens: prioritize <5-second playable entry, tight Action->Juice->Reward core loop, deterministic FSM (Title/Play/Pause/Over), 60-120fps delta-time physics/timing, and dual Keyboard + Touch parity.',
    experimental: 'Creative Sandbox Lens: prioritize immediate visual/audio wonder, tactile direct-on-canvas manipulation, collapsible live parameter HUD, randomize/seed exploration, and 1-tap Zen/Snapshot export.'
  };

  const platformLenses = {
    'responsive-parity': 'Mobile + Desktop Parity: fluid reflow from 320px phones (thumb-zone CTAs, >=44px tap targets, safe-area insets) to 1440px+ widescreen without horizontal overflow.',
    'desktop-pro': 'Desktop Power Workbench: dense scannable multi-pane ergonomics, rich keyboard shortcuts, precision hover states, while staying cleanly usable on smaller screens.',
    'fullscreen-arcade': 'Full-Screen Stage / Arcade: edge-to-edge 100dvh viewport lock, touch-action: none on playfield, compact non-obstructive corner HUD, zero accidental page bounce/scroll.'
  };

  const lines = [
    `- Project Mode: ${mode.label} — ${mode.roleLens}`,
    `- Scope & Flow: Complexity=${cfg.complexity} | Navigation=${cfg.navStyle} | First-5-Seconds=${cfg.starterExp}`,
    `- Active Mode Features to Intertwine: ${essItems.map((e) => `${e.label} (${e.desc})`).join(' | ') || 'Standard'}`
  ];

  if (signals.has('mode-lens')) {
    lines.push(`- Mode Critical Engineering Lens: ${modeCriticalLenses[mode.id] || modeCriticalLenses.app}`);
  }

  if (signals.has('platform-ergonomics')) {
    lines.push(`- Platform & Ergonomics Reality: ${platformLenses[cfg.targetPlatform] || `Platform=${cfg.targetPlatform}`} | A11y/Motion=${cfg.a11yMotion}`);
  }

  if (signals.has('persistence-io')) {
    lines.push(`- Data Ownership & Persistence Mandate: Storage=${cfg.dataPersistence} (must include try/catch fallback, versioned schema, and clean user export/reset).`);
  }

  if (signals.has('sensory-motion')) {
    lines.push(`- Sensory, Audio & Motion Mandate: Audio=${cfg.sensoryAudio} | Motion/A11y=${cfg.a11yMotion} (respect prefers-reduced-motion and include user mute if audio is active).`);
  }

  if (signals.has('visual-system') || stepObj.stage >= 3 || stepObj.num === 5 || stepObj.num === 16) {
    lines.push(`- Visual Direction & Materiality: Layout="${iface.name}" (${iface.desc}) | Style="${style.name}" (${style.desc}) | Palette="${mood.name}" (${mood.colors.join(', ')}) | Typography="${typo.name}" (${typo.desc}) | Elements="${elem.name}" (${elem.desc}) | Lighting="${light.name}" (${light.desc})`);
  }

  if (signals.has('tech-stack') || stepObj.stage === 2 || stepObj.stage === 3 || stepObj.stage === 5) {
    lines.push(`- HTML5 Capabilities: ${htmlItems.map((h) => `${h.label} [${h.tech}]`).join(', ') || 'Standard HTML5'}`);
    lines.push(`- CSS3 Capabilities: ${cssItems.map((c) => `${c.label} [${c.tech}]`).join(', ') || 'Modern CSS3'}`);
    lines.push(`- JS Architecture: ${jsArchItems.map((j) => `${j.label} [${j.tech}]`).join(', ') || 'Modular Vanilla ES6+'}`);
    if (jsLibsSelected.length > 0) {
      lines.push(`- Selected CDN Libraries (must integrate cleanly): ${jsLibsSelected.map((l) => `${l.label} => ${l.cdn}`).join(' | ')}`);
    } else {
      lines.push(`- External Libraries: NONE (100% standalone Vanilla HTML5/CSS3/ES6+)`);
    }
  }

  if (signals.has('constraints-anti') || stepObj.stage === 1 || stepObj.stage === 5) {
    if (cfg.targetAudience?.trim()) lines.push(`- Target Audience: ${cfg.targetAudience.trim()}`);
    if (cfg.extraConstraints?.trim()) lines.push(`- Must-Have Details: ${cfg.extraConstraints.trim()}`);
    if (cfg.antiGoals?.trim()) lines.push(`- Strictly Avoid: ${cfg.antiGoals.trim()}`);
  }

  return lines.join('\n');
}

// =========================================================================
// KEY POOL, RATE-LIMITS & BACKGROUND KEEP-ALIVE
// =========================================================================
function maskApiKey(key) {
  if (!key || key.length < 10) return '••••';
  return `${key.slice(0, 6)}••••${key.slice(-4)}`;
}

function formatResetClock(ts) {
  if (!Number.isFinite(ts)) return '';
  try {
    const d = new Date(ts);
    const sameDay = d.toDateString() === new Date().toDateString();
    if (sameDay) {
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    return d.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch (_) {
    return '';
  }
}

function formatDurationCompact(ms) {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  const hrs = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  if (hrs > 0) return `${hrs}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
  if (mins > 0) return `${mins}m ${String(secs).padStart(2, '0')}s`;
  return `${secs}s`;
}

function formatProgressBar(pct, width = 10) {
  const clamped = Math.max(0, Math.min(100, Number(pct) || 0));
  const filled = Math.round((clamped / 100) * width);
  return `${'█'.repeat(filled)}${'░'.repeat(width - filled)} ${clamped}%`;
}

function getTimingMetrics() {
  const doneCount = Object.keys(state.completedSteps).length;
  const elapsedMs = state.runStartedAt ? Math.max(0, Date.now() - state.runStartedAt) : 0;
  const remainingSteps = Math.max(0, 50 - doneCount);
  let etaMs = null;
  if (state.stepDurations.length > 0 && remainingSteps > 0) {
    const recent = state.stepDurations.slice(-8);
    const avgMs = recent.reduce((a, b) => a + b, 0) / recent.length;
    etaMs = Math.round(avgMs * remainingSteps);
  }
  return {
    doneCount,
    elapsedMs,
    etaMs,
    elapsedStr: elapsedMs > 0 ? formatDurationCompact(elapsedMs) : '0s',
    etaStr: etaMs !== null ? formatDurationCompact(etaMs) : '--'
  };
}

function refreshExpiredCooldowns() {
  const now = Date.now();
  let changed = false;
  state.apiKeys.forEach((k) => {
    if (k.status === 'rate_limited') {
      if (!Number.isFinite(k.resetAt)) {
        k.resetAt = now + Math.max(10000, (state.defaultCooldownSec || 60) * 1000);
        if (!k.cooldownReason) k.cooldownReason = 'Rate limit cooldown';
        changed = true;
      } else if (now >= k.resetAt) {
        k.status = 'ready';
        k.resetAt = null;
        k.cooldownReason = '';
        changed = true;
      }
    }
  });
  if (changed) saveKeyPool();
  return changed;
}

function getKeyPoolStats() {
  refreshExpiredCooldowns();
  const now = Date.now();
  let readyCount = 0;
  let limitedCount = 0;
  let invalidCount = 0;
  let earliestResetAt = Infinity;

  state.apiKeys.forEach((k) => {
    if (k.status === 'invalid') {
      invalidCount += 1;
    } else if (k.status === 'rate_limited' && Number.isFinite(k.resetAt) && k.resetAt > now) {
      limitedCount += 1;
      if (k.resetAt < earliestResetAt) earliestResetAt = k.resetAt;
    } else {
      readyCount += 1;
    }
  });

  return {
    total: state.apiKeys.length,
    readyCount,
    limitedCount,
    invalidCount,
    earliestResetAt: earliestResetAt === Infinity ? null : earliestResetAt
  };
}

function getNextAvailableKey() {
  refreshExpiredCooldowns();
  const now = Date.now();
  const len = state.apiKeys.length;
  if (len === 0) return null;

  if (state.activeKeyIndex < 0 || state.activeKeyIndex >= len) {
    state.activeKeyIndex = 0;
  }

  for (let offset = 0; offset < len; offset++) {
    const idx = (state.activeKeyIndex + offset) % len;
    const candidate = state.apiKeys[idx];
    const notCooling = !Number.isFinite(candidate.resetAt) || now >= candidate.resetAt;
    if (candidate.status === 'ready' && notCooling) {
      state.activeKeyIndex = idx;
      return { keyObj: candidate, index: idx };
    }
  }
  return null;
}

function parseAndAddKeys(rawText, entries = null) {
  const candidates = [];
  if (Array.isArray(entries)) {
    entries.forEach((item) => {
      if (item && item.key) candidates.push(item);
    });
  } else {
    String(rawText || '')
      .split(/[\s,;]+/)
      .map((t) => t.replace(/^["']|["']$/g, '').trim())
      .filter((t) => t.length >= 12 && !/^(api[_-]?key|key|token|secret)$/i.test(t))
      .forEach((t) => candidates.push({ key: t, label: '' }));
  }

  if (candidates.length === 0) return 0;

  let added = 0;
  const existingSet = new Set(state.apiKeys.map((k) => k.key));

  candidates.forEach(({ key, label }) => {
    if (existingSet.has(key)) return;
    existingSet.add(key);
    state.apiKeys.push({
      id: `k_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      key,
      label: label || `Key #${state.apiKeys.length + 1}`,
      status: 'ready',
      resetAt: null,
      cooldownReason: '',
      lastError: '',
      calls: 0,
      hits429: 0,
      consecutive429: 0,
      last429At: null,
      lastSuccessAt: null
    });
    added += 1;
  });

  if (added > 0) {
    saveKeyPool();
    updateKeyPoolUI();
    wakeFreezeIfReady();
  }
  return added;
}

function parseCsvApiKeys(csvText) {
  const lines = String(csvText || '').split(/\r?\n/);
  const entries = [];
  const headerWords = /^(api[_-]?key|key|token|secret|label|name|project|notes?)$/i;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const cells = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < trimmed.length; i++) {
      const ch = trimmed[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if ((ch === ',' || ch === ';' || ch === '\t') && !inQuotes) {
        cells.push(current.trim().replace(/^["']|["']$/g, ''));
        current = '';
      } else {
        current += ch;
      }
    }
    cells.push(current.trim().replace(/^["']|["']$/g, ''));

    let keyCell = cells.find((c) => /^AIza[0-9A-Za-z_-]{10,}$/.test(c));
    if (!keyCell) keyCell = cells.find((c) => c.length >= 16 && !/\s/.test(c) && !headerWords.test(c));
    if (!keyCell) keyCell = cells.find((c) => c.length >= 12 && !/\s/.test(c) && !headerWords.test(c));
    if (!keyCell) return;

    const labelCell = cells.find((c) => c && c !== keyCell && !headerWords.test(c) && c.length <= 32) || '';
    entries.push({ key: keyCell, label: labelCell });
  });

  return entries;
}

function wakeFreezeIfReady() {
  if (state.isFrozen && typeof state.freezeWakeResolver === 'function') {
    const next = getNextAvailableKey();
    if (next) {
      const resolve = state.freezeWakeResolver;
      state.freezeWakeResolver = null;
      resolve();
    }
  }
}

function wakeNetworkIfOnline() {
  if (state.isOfflineWaiting && navigator.onLine && typeof state.networkWakeResolver === 'function') {
    const resolve = state.networkWakeResolver;
    state.networkWakeResolver = null;
    resolve();
  }
}

function resetAllRateLimitedCooldowns() {
  state.apiKeys.forEach((k) => {
    if (k.status === 'rate_limited') {
      k.status = 'ready';
      k.resetAt = null;
      k.cooldownReason = '';
      k.consecutive429 = 0;
    }
  });
  saveKeyPool();
  updateKeyPoolUI();
  wakeFreezeIfReady();
}

function updateKeyPoolUI() {
  const stats = getKeyPoolStats();
  el.keyPoolBadge.textContent = `Keys: ${stats.readyCount}/${stats.total}`;

  el.keyPoolDot.className = 'w-2 h-2 rounded-full shrink-0';
  if (stats.total === 0 || (stats.readyCount === 0 && stats.limitedCount === 0)) {
    el.keyPoolDot.classList.add('bg-rose-400');
  } else if (stats.readyCount === 0 && stats.limitedCount > 0) {
    el.keyPoolDot.classList.add('bg-amber-400', 'animate-pulse-soft');
  } else if (stats.limitedCount > 0) {
    el.keyPoolDot.classList.add('bg-cyan-400');
  } else {
    el.keyPoolDot.classList.add('bg-emerald-400');
  }

  const activeKeyObj = state.apiKeys[state.activeKeyIndex];
  if (stats.readyCount === 0 && stats.limitedCount > 0 && stats.earliestResetAt) {
    const remStr = formatDurationCompact(stats.earliestResetAt - Date.now());
    el.notifKeyPill.textContent = `Cooling • ${remStr}`;
  } else if (activeKeyObj) {
    el.notifKeyPill.textContent = `${activeKeyObj.label} (${stats.readyCount}/${stats.total})`;
  } else {
    el.notifKeyPill.textContent = 'No Key';
  }

  if (el.keysModal && !el.keysModal.classList.contains('hidden')) {
    renderKeysModalList();
  }
}

function renderKeysModalList() {
  const stats = getKeyPoolStats();
  const now = Date.now();

  if (stats.readyCount === 0 && stats.limitedCount > 0 && stats.earliestResetAt) {
    const remStr = formatDurationCompact(stats.earliestResetAt - now);
    el.modalPoolSummary.textContent = `0 Ready • Next reset in ${remStr} (${formatResetClock(stats.earliestResetAt)})`;
    el.modalPoolSummary.className = 'font-mono-code text-amber-300';
  } else {
    el.modalPoolSummary.textContent = `${stats.readyCount} Ready / ${stats.total} Total`;
    el.modalPoolSummary.className = 'font-mono-code text-cyan-300';
  }

  el.keysListContainer.innerHTML = '';

  if (state.apiKeys.length === 0) {
    el.keysListContainer.innerHTML =
      '<div class="rounded-lg border border-slate-800 bg-[#090d14] p-4 text-center text-slate-500">No API keys added yet. Paste one or more Google AI Studio keys above.</div>';
    return;
  }

  state.apiKeys.forEach((k, idx) => {
    const isActive = idx === state.activeKeyIndex && k.status === 'ready';
    const remMs = k.resetAt ? Math.max(0, k.resetAt - now) : 0;

    let statusPill = '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Ready</span>';
    if (isActive && state.isRunning) {
      statusPill = '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/20 text-indigo-200 border border-indigo-500/40">Active</span>';
    } else if (k.status === 'rate_limited' && remMs > 0) {
      const reasonTag = k.cooldownReason ? ` • ${escapeHtml(k.cooldownReason)}` : '';
      statusPill = `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-amber-500/15 text-amber-300 border border-amber-500/30">Back in ${formatDurationCompact(remMs)} (${formatResetClock(k.resetAt)})${reasonTag}</span>`;
    } else if (k.status === 'invalid') {
      statusPill = '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-500/15 text-rose-300 border border-rose-500/30">Invalid</span>';
    }

    const row = document.createElement('div');
    row.className = 'rounded-lg border border-slate-800 bg-[#090d14] p-2.5 flex items-center justify-between gap-2';
    row.innerHTML = `
      <div class="min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-semibold text-slate-200">${escapeHtml(k.label)}</span>
          <span class="font-mono-code text-[11px] text-slate-400">${escapeHtml(maskApiKey(k.key))}</span>
          ${statusPill}
        </div>
        <div class="text-[10px] text-slate-500 font-mono-code mt-1">
          Calls: ${k.calls || 0} • 429s: ${k.hits429 || 0}${k.consecutive429 ? ` (${k.consecutive429} streak)` : ''}${k.lastError ? ` • ${escapeHtml(k.lastError.slice(0, 60))}` : ''}
        </div>
      </div>
      <div class="flex items-center gap-1 shrink-0">
        ${k.status !== 'ready' ? `<button type="button" data-action="reset-key" data-id="${escapeHtml(k.id)}" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-cyan-300 transition">Reset</button>` : ''}
        <button type="button" data-action="remove-key" data-id="${escapeHtml(k.id)}" class="px-2 py-1 rounded bg-slate-800 hover:bg-rose-900/60 text-[10px] text-rose-300 transition">Remove</button>
      </div>
    `;
    el.keysListContainer.appendChild(row);
  });
}

function parseDurationStringToMs(raw) {
  if (!raw) return null;
  const str = String(raw).trim();
  if (!str) return null;
  if (/^\d+(?:\.\d+)?$/.test(str)) {
    const val = parseFloat(str);
    return Number.isFinite(val) && val > 0 ? Math.round(val * 1000) : null;
  }
  let totalMs = 0;
  let matched = false;
  const tokenRegex = /(\d+(?:\.\d+)?)\s*(ms|milliseconds?|h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)/gi;
  let m;
  while ((m = tokenRegex.exec(str)) !== null) {
    const num = parseFloat(m[1]);
    if (!Number.isFinite(num)) continue;
    const unit = m[2].toLowerCase();
    matched = true;
    if (unit.startsWith('ms') || unit.startsWith('milli')) totalMs += num;
    else if (unit.startsWith('h')) totalMs += num * 3600 * 1000;
    else if (unit.startsWith('m')) totalMs += num * 60 * 1000;
    else if (unit.startsWith('s')) totalMs += num * 1000;
  }
  return matched && Number.isFinite(totalMs) && totalMs > 0 ? Math.round(totalMs) : null;
}

function isQuotaOrRateLimitError(status, errJson, errDetail) {
  if (status === 429) return true;
  const rpcStatus = String(errJson?.error?.status || '');
  const combined = `${rpcStatus} ${errDetail || ''}`;
  return status === 403 && /resource_exhausted|rate[_\s-]?limit|quota|too many requests/i.test(combined);
}

function extractRateLimitInfo(response, errJson, errDetail, keyObj) {
  const details = Array.isArray(errJson?.error?.details) ? errJson.error.details : [];
  let quotaText = String(errDetail || '');

  for (const d of details) {
    if (Array.isArray(d?.violations)) {
      quotaText += ' ' + d.violations.map((v) => `${v.quotaMetric || ''} ${v.quotaId || ''} ${v.description || ''}`).join(' ');
    }
  }

  const isDailyQuota = /per\s*day|daily|rpd|tpd|requestsperday|tokensperday/i.test(quotaText);
  const consecutive = Math.max(0, keyObj?.consecutive429 || 0);
  const minFloorMs = consecutive > 0
    ? Math.min(state.retryCapSec * 1000, Math.round(15000 * Math.pow(1.6, Math.min(consecutive, 6))))
    : 10000;

  let explicitMs = null;
  let reason = isDailyQuota ? 'Daily Quota (RPD)' : 'RPM/TPM Limit';

  const retryAfter = response?.headers?.get?.('Retry-After');
  if (retryAfter) {
    const parsedDur = parseDurationStringToMs(retryAfter);
    if (parsedDur) {
      explicitMs = parsedDur + 2000;
      reason = 'Retry-After';
    } else {
      const asDate = Date.parse(retryAfter);
      if (Number.isFinite(asDate) && asDate > Date.now()) {
        explicitMs = (asDate - Date.now()) + 2000;
        reason = 'Retry-After';
      }
    }
  }

  if (!explicitMs) {
    const rlReset = response?.headers?.get?.('x-ratelimit-reset') ||
      response?.headers?.get?.('x-ratelimit-reset-requests') ||
      response?.headers?.get?.('x-ratelimit-reset-tokens');
    if (rlReset) {
      const num = Number(rlReset);
      if (Number.isFinite(num) && num > 0) {
        if (num > 1e12) explicitMs = Math.max(5000, num - Date.now() + 2000);
        else if (num > 1e9) explicitMs = Math.max(5000, num * 1000 - Date.now() + 2000);
        else explicitMs = Math.round((num + 2) * 1000);
        reason = 'Rate-Limit Reset Header';
      } else {
        const parsedDur = parseDurationStringToMs(rlReset);
        if (parsedDur) {
          explicitMs = parsedDur + 2000;
          reason = 'Rate-Limit Reset Header';
        }
      }
    }
  }

  if (!explicitMs) {
    for (const d of details) {
      if (d?.retryDelay) {
        const parsedDur = parseDurationStringToMs(d.retryDelay);
        if (parsedDur) {
          explicitMs = parsedDur + 2000;
          reason = isDailyQuota ? 'Daily Quota + RetryInfo' : 'Server RetryInfo';
          break;
        }
      }
    }
  }

  if (!explicitMs) {
    const msgMatch = String(errDetail || '').match(/retry\s+(?:in|after)\s+([0-9.\s]*(?:ms|milliseconds?|h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)(?:\s*[0-9.]+\s*(?:m|mins?|minutes?|s|secs?|seconds?))*)/i);
    if (msgMatch) {
      const parsedDur = parseDurationStringToMs(msgMatch[1]);
      if (parsedDur) {
        explicitMs = parsedDur + 2000;
        reason = isDailyQuota ? 'Daily Quota' : 'Server Retry Delay';
      }
    }
  }

  let waitMs;
  if (Number.isFinite(explicitMs) && explicitMs > 0) {
    waitMs = Math.max(explicitMs, minFloorMs);
  } else {
    const baseSec = isDailyQuota ? Math.max(state.defaultCooldownSec, 900) : Math.max(15, state.defaultCooldownSec);
    const capSec = Math.max(state.retryCapSec, isDailyQuota ? 3600 : 300);
    const backoffSec = Math.min(capSec, Math.round(baseSec * Math.pow(1.45, Math.min(consecutive, 8))));
    waitMs = Math.max(backoffSec * 1000, minFloorMs);
  }

  if (!Number.isFinite(waitMs) || waitMs < 5000) {
    waitMs = Math.max(10000, (state.defaultCooldownSec || 60) * 1000);
  }

  return { waitMs, reason, isDailyQuota };
}

function markKeyRateLimited(keyObj, keyIdx, response, errJson, errDetail) {
  const { waitMs, reason } = extractRateLimitInfo(response, errJson, errDetail, keyObj);
  keyObj.status = 'rate_limited';
  keyObj.resetAt = Date.now() + waitMs;
  keyObj.cooldownReason = reason;
  keyObj.hits429 = (keyObj.hits429 || 0) + 1;
  keyObj.consecutive429 = (keyObj.consecutive429 || 0) + 1;
  keyObj.last429At = Date.now();
  keyObj.lastError = errDetail;
  state.sessionRetries += 1;
  if (state.apiKeys.length > 0) {
    state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
  }
  saveKeyPool();
  updateKeyPoolUI();
  return { waitMs, reason };
}

function onHeartbeatTick() {
  state.heartbeatTickCount += 1;
  const changed = refreshExpiredCooldowns();
  if (changed || (el.keysModal && !el.keysModal.classList.contains('hidden'))) {
    updateKeyPoolUI();
  }
  if (changed) wakeFreezeIfReady();

  if (state.isRunning) {
    const timing = getTimingMetrics();
    if (el.notifEtaPill) {
      el.notifEtaPill.textContent = timing.etaMs !== null
        ? `${timing.elapsedStr} • ETA ${timing.etaStr}`
        : `${timing.elapsedStr} elapsed`;
    }
    if (el.notifCallsPill) {
      el.notifCallsPill.textContent = `Calls: ${state.sessionCalls}${state.sessionRetries ? ` (${state.sessionRetries} retries)` : ''}`;
    }

    if (state.heartbeatTickCount % 10 === 0) {
      if (state.swRegistration && state.swRegistration.active) {
        state.swRegistration.active.postMessage({ type: 'KEEPALIVE_PING' });
      }
      const snap = state.lastNotifSnapshot;
      if (snap && snap.mode !== 'hidden') {
        const stats = getKeyPoolStats();
        let detail = snap.detail;
        if (state.isFrozen && stats.earliestResetAt) {
          detail = `All keys cooling — resumes in ${formatDurationCompact(stats.earliestResetAt - Date.now())} (at ${formatResetClock(stats.earliestResetAt)})`;
        } else if (state.isOfflineWaiting) {
          detail = 'Offline — waiting for Wi-Fi or cellular data to resume automatically';
        }
        pushOsProgressNotification(snap.title, detail, {
          force: true,
          status: snap.mode,
          step: snap.stepNum
        });
        updateMediaSessionMetadata(snap.title, detail);
      }
    }
  }
}

function initTimerWorker() {
  if (state.timerWorker || typeof Worker === 'undefined') return;
  try {
    const workerCode = `
      const timers = new Map();
      setInterval(() => {
        self.postMessage({ type: 'heartbeat', ts: Date.now() });
      }, 1000);
      self.onmessage = function(e) {
        const { cmd, id, ms } = e.data || {};
        if (cmd === 'start') {
          const tid = setTimeout(() => {
            timers.delete(id);
            self.postMessage({ type: 'timeout', id, done: true });
          }, ms);
          timers.set(id, tid);
        } else if (cmd === 'clear') {
          const tid = timers.get(id);
          if (tid) clearTimeout(tid);
          timers.delete(id);
        }
      };
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    state.timerWorker = new Worker(URL.createObjectURL(blob));
    state.timerWorker.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'heartbeat') {
        onHeartbeatTick();
      }
    });
  } catch (_) {
    state.timerWorker = null;
  }
}

function workerTimeout(ms) {
  if (!state.timerWorker) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return new Promise((resolve) => {
    const id = `${Date.now()}_${Math.random()}`;
    const onMsg = (e) => {
      if (e.data && e.data.type === 'timeout' && e.data.id === id) {
        state.timerWorker.removeEventListener('message', onMsg);
        resolve();
      }
    };
    state.timerWorker.addEventListener('message', onMsg);
    state.timerWorker.postMessage({ cmd: 'start', id, ms });
  });
}

function createSilentWavBlobUrl() {
  const sampleRate = 8000;
  const numSamples = sampleRate * 2;
  const buffer = new ArrayBuffer(44 + numSamples);
  const view = new DataView(buffer);
  const writeStr = (offset, s) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate, true);
  view.setUint16(32, 1, true);
  view.setUint16(34, 8, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples, true);
  for (let i = 44; i < 44 + numSamples; i++) {
    view.setUint8(i, i % 2 === 0 ? 128 : 129);
  }
  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

async function acquireWakeLock() {
  if (!state.bgKeepAliveEnabled || !('wakeLock' in navigator)) {
    updateKeepAliveBadges();
    return;
  }
  try {
    if (!state.wakeLock && document.visibilityState === 'visible') {
      state.wakeLock = await navigator.wakeLock.request('screen');
      state.wakeLock.addEventListener('release', () => {
        state.wakeLock = null;
        updateKeepAliveBadges();
      });
    }
  } catch (_) {
    state.wakeLock = null;
  }
  updateKeepAliveBadges();
}

function releaseWakeLock() {
  if (state.wakeLock) {
    state.wakeLock.release().catch(() => {});
    state.wakeLock = null;
  }
  updateKeepAliveBadges();
}

function startBackgroundAudioKeepAlive() {
  if (!state.bgKeepAliveEnabled) return;
  try {
    if (!state.bgAudioEl) {
      state.bgAudioUrl = createSilentWavBlobUrl();
      const audio = document.createElement('audio');
      audio.src = state.bgAudioUrl;
      audio.loop = true;
      audio.volume = 0.005;
      audio.setAttribute('playsinline', '');
      audio.addEventListener('pause', updateKeepAliveBadges);
      audio.addEventListener('play', updateKeepAliveBadges);
      state.bgAudioEl = audio;
    }
    if (state.bgAudioEl.paused) {
      state.bgAudioEl.play().catch(() => {});
    }
    updateMediaSessionMetadata('50-Point Studio Active', 'Running build pipeline...');
  } catch (_) {}
  updateKeepAliveBadges();
}

function stopBackgroundAudioKeepAlive() {
  if (state.bgAudioEl) {
    try {
      state.bgAudioEl.pause();
    } catch (_) {}
  }
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = 'paused';
    } catch (_) {}
  }
  updateKeepAliveBadges();
}

function updateMediaSessionMetadata(title, detail) {
  if (!('mediaSession' in navigator)) return;
  try {
    const doneCount = Object.keys(state.completedSteps).length;
    const pct = Math.round((doneCount / 50) * 100);
    const stats = getKeyPoolStats();
    const activeKeyObj = state.apiKeys[state.activeKeyIndex];
    const keyLabel = stats.readyCount === 0 && stats.limitedCount > 0
      ? 'Keys cooling'
      : activeKeyObj
      ? `${activeKeyObj.label} (${stats.readyCount}/${stats.total})`
      : 'No key';
    const batText = getBatteryShortString();

    navigator.mediaSession.metadata = new MediaMetadata({
      title: title || '50-Point Web App Studio',
      artist: `${detail || 'Background Build Active'} • ${doneCount}/50 (${pct}%) • ${keyLabel}`,
      album: `${state.model}${batText ? ` • ${batText}` : ''}`,
      artwork: [
        { src: './icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: './icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    });
    navigator.mediaSession.playbackState = state.isRunning ? 'playing' : 'paused';

    if (typeof navigator.mediaSession.setPositionState === 'function') {
      try {
        navigator.mediaSession.setPositionState({
          duration: 50,
          playbackRate: 1.0,
          position: Math.max(0, Math.min(50, doneCount))
        });
      } catch (_) {}
    }

    navigator.mediaSession.setActionHandler('pause', () => {
      if (state.abortController) state.abortController.abort();
    });
    navigator.mediaSession.setActionHandler('play', () => {
      if (!state.isRunning && state.nextStepIndex < 50) runPipeline(false);
    });
    navigator.mediaSession.setActionHandler('stop', () => {
      if (state.abortController) state.abortController.abort();
    });
  } catch (_) {}
}

function getBatteryShortString() {
  if (!state.battery.supported || !Number.isFinite(state.battery.level)) return '';
  const pct = Math.round(state.battery.level * 100);
  const icon = state.battery.charging ? '⚡' : '🔋';
  return `${icon}${pct}%`;
}

function updateBatteryUI() {
  if (!el.notifBatteryBadge) return;
  if (!state.battery.supported || !Number.isFinite(state.battery.level)) {
    el.notifBatteryBadge.textContent = 'Bat: N/A';
    el.notifBatteryBadge.className = 'hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
    return;
  }

  const pct = Math.round(state.battery.level * 100);
  const charging = Boolean(state.battery.charging);
  el.notifBatteryBadge.textContent = charging ? `⚡ ${pct}%` : `🔋 ${pct}%`;

  if (!charging && pct <= 10) {
    el.notifBatteryBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-rose-500/20 border border-rose-500/50 text-rose-200 animate-pulse-soft';
  } else if (!charging && pct <= 20) {
    el.notifBatteryBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-amber-500/20 border border-amber-500/45 text-amber-200';
  } else if (charging) {
    el.notifBatteryBadge.className = 'hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifBatteryBadge.className = 'hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-300';
  }
}

function checkBatteryWarnings() {
  if (!state.battery.supported || !Number.isFinite(state.battery.level)) return;
  const pct = Math.round(state.battery.level * 100);

  if (state.battery.charging || pct > 25) {
    state.battery.warnedLow = false;
    state.battery.warnedCritical = false;
    return;
  }

  if (!state.isRunning) return;

  if (pct <= 10 && !state.battery.warnedCritical) {
    state.battery.warnedCritical = true;
    state.battery.warnedLow = true;
    saveWorkspaceSnapshot();
    const msg = `Critical Battery (${pct}%): Plug in charger! Progress is auto-saved at Step ${state.nextStepIndex + 1}/50.`;
    showToast(msg, 'error');
    sendOsAlertNotification('⚠️ Critical Battery — Plug In Charger', msg);
  } else if (pct <= 20 && !state.battery.warnedLow) {
    state.battery.warnedLow = true;
    saveWorkspaceSnapshot();
    const msg = `Low Battery (${pct}%): Connect power to keep device awake until Step 50 completes. Progress is saved.`;
    showToast(msg, 'warn');
    sendOsAlertNotification('🔋 Low Battery Warning', msg);
  }
}

async function initBatteryMonitor() {
  if (typeof navigator === 'undefined' || typeof navigator.getBattery !== 'function') {
    updateBatteryUI();
    return;
  }
  try {
    const bat = await navigator.getBattery();
    const sync = () => {
      state.battery.supported = true;
      state.battery.level = bat.level;
      state.battery.charging = bat.charging;
      state.battery.dischargingTime = bat.dischargingTime;
      updateBatteryUI();
      checkBatteryWarnings();
      if (el.mobileReadinessModal && !el.mobileReadinessModal.classList.contains('hidden')) {
        renderReadinessChecklist();
      }
    };
    sync();
    bat.addEventListener('levelchange', sync);
    bat.addEventListener('chargingchange', sync);
  } catch (_) {
    updateBatteryUI();
  }
}

function updateNetworkUI() {
  state.isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  if (!el.notifNetBadge) return;
  if (state.isOnline) {
    el.notifNetBadge.textContent = 'Online';
    el.notifNetBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifNetBadge.textContent = 'Offline';
    el.notifNetBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-rose-500/20 border border-rose-500/45 text-rose-200 animate-pulse-soft';
  }
}

function initNetworkMonitor() {
  updateNetworkUI();
  window.addEventListener('online', () => {
    updateNetworkUI();
    wakeNetworkIfOnline();
    if (state.isRunning) showToast('Network reconnected — resuming pipeline.', 'success');
  });
  window.addEventListener('offline', () => {
    updateNetworkUI();
    if (state.isRunning) showToast('Device went offline — pipeline will wait and auto-resume when back online.', 'warn');
  });
}

function updateKeepAliveBadges() {
  if (state.wakeLock) {
    el.notifWakeBadge.textContent = 'Wake: ON';
    el.notifWakeBadge.className = 'hidden lg:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifWakeBadge.textContent = 'Wake: Off';
    el.notifWakeBadge.className = 'hidden lg:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
  }

  const audioActive = state.bgAudioEl && !state.bgAudioEl.paused;
  if (audioActive) {
    el.notifAudioBadge.textContent = 'BG: ON';
    el.notifAudioBadge.className = 'hidden lg:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifAudioBadge.textContent = 'BG: Off';
    el.notifAudioBadge.className = 'hidden lg:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
  }

  const perm = typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';
  if (perm === 'granted') {
    el.notifOsBtn.textContent = state.osNotifEnabled ? 'Notif: ON' : 'Notif: Muted';
    el.notifOsBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 transition';
  } else if (perm === 'denied') {
    el.notifOsBtn.textContent = 'Notif: Blocked';
    el.notifOsBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-rose-500/15 border border-rose-500/35 text-rose-300 transition';
  } else {
    el.notifOsBtn.textContent = 'Enable Notif';
    el.notifOsBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-indigo-500/20 hover:bg-indigo-500/35 border border-indigo-500/40 text-indigo-200 transition';
  }
  updatePersistenceHeaderUI();
}

function updatePersistenceHeaderUI() {
  if (!el.androidBatteryHelpBtn || !el.persistenceHeaderLabel) return;
  const notifGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
  if (notifGranted && state.osNotifEnabled && state.bgKeepAliveEnabled) {
    el.androidBatteryHelpBtn.className = 'touch-target inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/35 text-[11px] font-medium text-emerald-200 transition shrink-0';
    el.persistenceHeaderLabel.textContent = 'Active';
  } else {
    el.androidBatteryHelpBtn.className = 'touch-target inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-500/35 text-[11px] font-medium text-cyan-200 transition shrink-0';
    el.persistenceHeaderLabel.textContent = 'Keep-Alive';
  }
}

async function ensureNotificationPermission() {
  if (!state.osNotifEnabled || typeof Notification === 'undefined') return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'default') {
    try {
      const res = await Notification.requestPermission();
      updateKeepAliveBadges();
      return res === 'granted';
    } catch (_) {
      return false;
    }
  }
  return false;
}

async function requestFullMobilePersistence() {
  state.bgKeepAliveEnabled = true;
  state.osNotifEnabled = true;
  saveSettingsSnapshot();

  const notifGranted = await ensureNotificationPermission();

  if (navigator.storage && typeof navigator.storage.persist === 'function') {
    try {
      state.storagePersisted = await navigator.storage.persist();
    } catch (_) {}
  }

  await acquireWakeLock();
  if (state.isRunning) startBackgroundAudioKeepAlive();

  updateKeepAliveBadges();
  if (el.mobileReadinessModal && !el.mobileReadinessModal.classList.contains('hidden')) {
    renderReadinessChecklist();
  }

  if (notifGranted) {
    const done = Object.keys(state.completedSteps).length;
    pushOsProgressNotification(
      '50-Point Studio • Lock-Screen Ready',
      state.isRunning
        ? `Building Step ${state.nextStepIndex + 1}/50 (${done}/50 done) — safe to lock screen.`
        : 'Notification shade, lock-screen media keep-alive & storage persistence armed.',
      { force: true, status: state.isRunning ? 'running' : 'paused', step: state.nextStepIndex }
    );
    showToast('Always-Active Mode enabled!', 'success');
  } else {
    showToast('Please allow Notifications in your browser settings for lock-screen updates.', 'warn');
  }
}

function sendOsAlertNotification(title, body) {
  if (!state.osNotifEnabled || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  if (state.swRegistration && state.swRegistration.active) {
    state.swRegistration.active.postMessage({
      type: 'SHOW_ALERT_NOTIFICATION',
      payload: { title, body, requireInteraction: true }
    });
  } else if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SHOW_ALERT_NOTIFICATION',
      payload: { title, body, requireInteraction: true }
    });
  } else {
    try {
      new Notification(title, {
        body,
        icon: './icon-192.png',
        badge: './notif-badge.png',
        requireInteraction: true
      });
    } catch (_) {}
  }
}

function pushOsProgressNotification(title, detailText, { force = false, status = 'running', step = 0 } = {}) {
  if (!state.osNotifEnabled || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  const now = Date.now();
  if (!force && now - state.lastOsNotifPush < 3000) return;
  state.lastOsNotifPush = now;

  const timing = getTimingMetrics();
  const pct = Math.round((timing.doneCount / 50) * 100);
  const bar = formatProgressBar(pct, 10);
  const stats = getKeyPoolStats();
  const activeKeyObj = state.apiKeys[state.activeKeyIndex];
  const keyText = stats.readyCount === 0 && stats.limitedCount > 0 && stats.earliestResetAt
    ? `Keys cooling (next ${formatDurationCompact(stats.earliestResetAt - now)})`
    : activeKeyObj
    ? `${activeKeyObj.label} (${stats.readyCount}/${stats.total} ready)`
    : 'No Key';
  const batText = getBatteryShortString();
  const etaText = timing.etaMs !== null ? ` • ETA ${timing.etaStr}` : '';

  const richBody =
    `${bar} (${timing.doneCount}/50)\n` +
    `${detailText}\n` +
    `${keyText} • Calls: ${state.sessionCalls} • ${timing.elapsedStr}${etaText}${batText ? ` • ${batText}` : ''}`;

  let actions = [];
  if (status === 'frozen') {
    actions = [
      { action: 'pause', title: 'Pause' },
      { action: 'reset_cooldowns', title: 'Retry Now' }
    ];
  } else if (status === 'running') {
    actions = [{ action: 'pause', title: 'Pause Build' }];
  } else if (status === 'paused') {
    actions = [{ action: 'resume', title: 'Resume Build' }];
  }

  const payload = {
    title,
    body: richBody,
    tag: 'wbs-pipeline-progress',
    renotify: false,
    silent: true,
    requireInteraction: status === 'running' || status === 'frozen',
    timestamp: now,
    status,
    step,
    actions
  };

  if (state.swRegistration && state.swRegistration.active) {
    state.swRegistration.active.postMessage({ type: 'UPDATE_PROGRESS_NOTIFICATION', payload });
  } else if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'UPDATE_PROGRESS_NOTIFICATION', payload });
  } else {
    try {
      new Notification(title, {
        body: richBody,
        tag: 'wbs-pipeline-progress',
        silent: true,
        icon: './icon-192.png',
        badge: './notif-badge.png'
      });
    } catch (_) {}
  }
}

function clearOsProgressNotification() {
  if (state.swRegistration && state.swRegistration.active) {
    state.swRegistration.active.postMessage({ type: 'CLEAR_PROGRESS_NOTIFICATION' });
  } else if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'CLEAR_PROGRESS_NOTIFICATION' });
  }
}

function updateLiveNotificationBar({ mode = 'hidden', title = '', detail = '', stepNum = 0, forceOs = false } = {}) {
  state.lastNotifSnapshot = { mode, title, detail, stepNum };

  if (mode === 'hidden') {
    el.liveNotificationBar.classList.add('hidden');
    return;
  }

  el.liveNotificationBar.classList.remove('hidden');
  const timing = getTimingMetrics();
  const pct = Math.round((timing.doneCount / 50) * 100);
  el.notifProgressText.textContent = `${timing.doneCount}/50 (${pct}%)`;
  el.notifProgressFill.style.width = `${pct}%`;

  if (el.notifEtaPill) {
    el.notifEtaPill.textContent = timing.etaMs !== null
      ? `${timing.elapsedStr} • ETA ${timing.etaStr}`
      : `${timing.elapsedStr}`;
  }
  if (el.notifCallsPill) {
    el.notifCallsPill.textContent = `Calls: ${state.sessionCalls}${state.sessionRetries ? ` (${state.sessionRetries} retries)` : ''}`;
  }

  el.liveNotificationBar.className = 'shrink-0 border-b px-3 sm:px-4 py-1';
  el.notifStatusDot.className = 'w-2 h-2 rounded-full shrink-0';

  if (mode === 'frozen') {
    el.liveNotificationBar.classList.add('border-amber-500/45', 'bg-amber-950/35');
    el.notifStatusDot.classList.add('bg-amber-400', 'animate-pulse-soft');
  } else if (mode === 'paused') {
    el.liveNotificationBar.classList.add('border-cyan-500/40', 'bg-cyan-950/30');
    el.notifStatusDot.classList.add('bg-cyan-400');
  } else if (mode === 'complete') {
    el.liveNotificationBar.classList.add('border-emerald-500/45', 'bg-emerald-950/30');
    el.notifStatusDot.classList.add('bg-emerald-400');
  } else if (mode === 'error') {
    el.liveNotificationBar.classList.add('border-rose-500/45', 'bg-rose-950/35');
    el.notifStatusDot.classList.add('bg-rose-400');
  } else {
    el.liveNotificationBar.classList.add('border-indigo-500/40', 'bg-indigo-950/40');
    el.notifStatusDot.classList.add('bg-indigo-400', 'animate-pulse-soft');
  }

  el.notifTitle.textContent = title || '50-Point Studio';
  el.notifDetail.textContent = detail || '';

  if (state.isRunning) {
    el.notifPauseBtn.classList.remove('hidden');
    el.notifResumeBtn.classList.add('hidden');
  } else if (state.nextStepIndex > 0 && state.nextStepIndex < 50) {
    el.notifPauseBtn.classList.add('hidden');
    el.notifResumeBtn.classList.remove('hidden');
  } else {
    el.notifPauseBtn.classList.add('hidden');
    el.notifResumeBtn.classList.add('hidden');
  }

  updateKeyPoolUI();
  updateKeepAliveBadges();
  updateBatteryUI();
  updateNetworkUI();
  updateMediaSessionMetadata(title, detail);

  if (mode === 'running' || mode === 'frozen' || mode === 'complete' || mode === 'error' || mode === 'paused') {
    pushOsProgressNotification(title, detail, { force: forceOs, status: mode, step: stepNum });
  }
}

function renderReadinessChecklist() {
  if (!el.readinessChecklist) return;
  const notifPerm = typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';
  const audioActive = Boolean(state.bgAudioEl && !state.bgAudioEl.paused);
  const batPct = state.battery.supported && Number.isFinite(state.battery.level)
    ? `${Math.round(state.battery.level * 100)}%${state.battery.charging ? ' (Charging)' : ' (On Battery)'}`
    : 'Not exposed by browser';

  const items = [
    {
      label: 'OS & Lock-Screen Notifications',
      ok: notifPerm === 'granted' && state.osNotifEnabled,
      status: notifPerm === 'granted' ? (state.osNotifEnabled ? 'Granted & Active' : 'Muted in Settings') : notifPerm === 'denied' ? 'Blocked in Browser' : 'Permission Needed'
    },
    {
      label: 'Lock-Screen MediaSession & Audio Keep-Alive',
      ok: state.bgKeepAliveEnabled,
      status: audioActive ? 'Playing (Active)' : state.bgKeepAliveEnabled ? 'Armed (Starts with Build)' : 'Disabled'
    },
    {
      label: 'Screen Wake Lock API',
      ok: 'wakeLock' in navigator,
      status: state.wakeLock ? 'Active' : ('wakeLock' in navigator ? 'Supported (Auto-arms while visible)' : 'Unsupported (Uses Audio Keep-Alive)')
    },
    {
      label: 'Persistent Storage Protection',
      ok: state.storagePersisted,
      status: state.storagePersisted ? 'Locked (Protected from eviction)' : 'Standard (Tap Enable to request lock)'
    },
    {
      label: 'Battery & Power Monitor',
      ok: !state.battery.supported || state.battery.charging || (state.battery.level > 0.2),
      status: batPct
    },
    {
      label: 'Network & Auto-Reconnect',
      ok: state.isOnline,
      status: state.isOnline ? 'Online (Auto-waits on drops)' : 'Offline (Waiting for connection)'
    }
  ];

  el.readinessChecklist.innerHTML = items.map((item) => `
    <div class="rounded-lg border border-slate-800 bg-[#090d14] px-3 py-2 flex items-center justify-between gap-2">
      <span class="text-slate-200 font-medium">${escapeHtml(item.label)}</span>
      <span class="font-mono-code text-[10px] px-2 py-0.5 rounded ${item.ok ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}">${escapeHtml(item.status)}</span>
    </div>
  `).join('');
}

async function registerServiceWorkerAndPwa() {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      state.swRegistration = reg;

      navigator.serviceWorker.addEventListener('message', (event) => {
        const msg = event.data || {};
        if (msg.type === 'SW_ACTION') {
          if (msg.action === 'pause' && state.abortController) {
            state.abortController.abort();
          } else if (msg.action === 'resume' && !state.isRunning && state.nextStepIndex < 50) {
            runPipeline(false);
          } else if (msg.action === 'reset_cooldowns') {
            resetAllRateLimitedCooldowns();
            showToast('Cooldowns reset from notification — retrying now.', 'info');
          }
        }
      });
    } catch (_) {}
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredInstallPrompt = e;
    el.installAppBtn.classList.remove('hidden');
    el.installAppBtn.classList.add('inline-flex');
  });

  window.addEventListener('appinstalled', () => {
    state.deferredInstallPrompt = null;
    el.installAppBtn.classList.add('hidden');
    el.installAppBtn.classList.remove('inline-flex');
    showToast('App installed on device!', 'success');
  });

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isIos && !isStandalone) {
    el.installAppBtn.classList.remove('hidden');
    el.installAppBtn.classList.add('inline-flex');
  }

  const handleResumeLifecycle = () => {
    const changed = refreshExpiredCooldowns();
    updateKeyPoolUI();
    if (changed) wakeFreezeIfReady();
    if (state.isRunning) {
      acquireWakeLock();
      startBackgroundAudioKeepAlive();
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      handleResumeLifecycle();
    } else {
      saveWorkspaceSnapshot();
      saveKeyPool();
    }
    if (state.isRunning && state.swRegistration && state.swRegistration.active) {
      state.swRegistration.active.postMessage({ type: 'KEEPALIVE_PING' });
    }
  });

  document.addEventListener('resume', handleResumeLifecycle);
  document.addEventListener('freeze', () => {
    saveWorkspaceSnapshot();
    saveKeyPool();
    saveSettingsSnapshot();
  });
  window.addEventListener('pagehide', () => {
    saveWorkspaceSnapshot();
    saveKeyPool();
    saveSettingsSnapshot();
  });
  window.addEventListener('beforeunload', (e) => {
    saveWorkspaceSnapshot();
    saveKeyPool();
    saveSettingsSnapshot();
    if (state.isRunning) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  const unlockOnGesture = () => {
    if (state.isRunning && state.bgKeepAliveEnabled) {
      if (!state.bgAudioEl || state.bgAudioEl.paused) startBackgroundAudioKeepAlive();
      if (!state.wakeLock) acquireWakeLock();
    }
  };
  ['pointerdown', 'touchstart', 'keydown'].forEach((evt) => {
    document.addEventListener(evt, unlockOnGesture, { passive: true });
  });
}

function stripMarkdownCodeFences(rawText) {
  let text = String(rawText || '').replace(/^\uFEFF/, '').trim();
  const fencedMatch = text.match(/^```[a-zA-Z0-9_-]*\s*\r?\n([\s\S]*?)\r?\n```\s*$/);
  if (fencedMatch) return fencedMatch[1].trim();
  const firstFence = text.match(/```[a-zA-Z0-9_-]*\s*\r?\n/);
  const lastFenceIdx = text.lastIndexOf('\n```');
  if (firstFence && lastFenceIdx > firstFence.index) {
    const extracted = text.slice(firstFence.index + firstFence[0].length, lastFenceIdx).trim();
    if (extracted.length > text.length * 0.55) return extracted;
  }
  if (/^```[a-zA-Z0-9_-]*\s*\r?\n/.test(text)) {
    text = text.replace(/^```[a-zA-Z0-9_-]*\s*\r?\n/, '');
    text = text.replace(/\r?\n```\s*$/, '');
    return text.trim();
  }
  return text;
}

function formatCompactChars(len) {
  if (len >= 1000) return `${(len / 1000).toFixed(1)}k`;
  return String(len);
}

function updateEditorsAndBadges() {
  el.notesEditor.value = state.notesText;
  el.htmlEditor.value = state.htmlCode;
  el.cssEditor.value = state.cssCode;
  el.jsEditor.value = state.jsCode;

  el.badgeNotes.textContent = formatCompactChars(state.notesText.length);
  el.badgeHtml.textContent = formatCompactChars(state.htmlCode.length);
  el.badgeCss.textContent = formatCompactChars(state.cssCode.length);
  el.badgeJs.textContent = formatCompactChars(state.jsCode.length);

  const estTokens = Math.round(state.notesText.length / 4);
  el.notesTokenEstimate.textContent = `(~${formatCompactChars(estTokens)} tok)`;
}

async function appendToNotes(chunk) {
  state.notesText += chunk;
  updateEditorsAndBadges();
  el.notesEditor.scrollTop = el.notesEditor.scrollHeight;
  saveWorkspaceSnapshot();

  if (state.fileHandle) {
    try {
      const writable = await state.fileHandle.createWritable();
      await writable.write(state.notesText);
      await writable.close();
      el.fileSyncBadge.textContent = 'Synced to disk';
      el.fileSyncBadge.className = 'text-[10px] text-emerald-400';
    } catch (_) {
      el.fileSyncBadge.textContent = 'Disk sync failed';
      el.fileSyncBadge.className = 'text-[10px] text-rose-400';
    }
  }
}

function updateProgressUI(activeStepNum = 0, retryState = false) {
  const doneCount = Object.keys(state.completedSteps).length;
  el.stepProgressText.textContent = `${doneCount} / 50`;
  el.overallProgressBar.style.width = `${(doneCount / 50) * 100}%`;
  el.requestCounterText.textContent = `Calls: ${state.sessionCalls}${state.sessionRetries ? ` (${state.sessionRetries} retries)` : ''}`;

  const stagePills = document.querySelectorAll('#stageStepper .stage-pill');
  stagePills.forEach((pill) => {
    const sNum = Number(pill.dataset.stageFilter);
    const dot = pill.querySelector('.stage-dot');
    const startStep = (sNum - 1) * 10 + 1;
    const endStep = sNum * 10;

    let stageDone = true;
    for (let i = startStep; i <= endStep; i++) {
      if (!state.completedSteps[i]) {
        stageDone = false;
        break;
      }
    }
    const stageActive = activeStepNum >= startStep && activeStepNum <= endStep;

    pill.className = 'stage-pill flex items-center gap-1.5 px-2 py-0.5 rounded border text-[11px] font-medium transition shrink-0';
    dot.className = 'stage-dot w-1.5 h-1.5 rounded-full';

    if (stageDone) {
      pill.classList.add('border-emerald-500/40', 'bg-emerald-500/10', 'text-emerald-300');
      dot.classList.add('bg-emerald-400');
    } else if (stageActive && retryState) {
      pill.classList.add('border-amber-500/50', 'bg-amber-500/15', 'text-amber-200');
      dot.classList.add('bg-amber-400', 'animate-pulse-soft');
    } else if (stageActive) {
      pill.classList.add('border-indigo-500/50', 'bg-indigo-500/15', 'text-indigo-200');
      dot.classList.add('bg-indigo-400', 'animate-pulse-soft');
    } else {
      pill.classList.add('border-slate-800', 'bg-slate-900/70', 'text-slate-400');
      dot.classList.add('bg-slate-600');
    }
  });
}

function updateControlButtons() {
  const canResume = !state.isRunning && state.nextStepIndex > 0 && state.nextStepIndex < 50 && state.userPrompt.trim().length > 0;
  el.startBuildBtn.disabled = state.isRunning;
  el.promptInput.disabled = state.isRunning;

  if (state.isRunning) {
    el.pauseBtn.classList.remove('hidden');
    el.pauseBtn.classList.add('inline-flex');
    el.resumeBtn.classList.add('hidden');
    el.resumeBtn.classList.remove('inline-flex');
    el.collapsedPauseBtn.classList.remove('hidden');
    el.collapsedResumeBtn.classList.add('hidden');
  } else {
    el.pauseBtn.classList.add('hidden');
    el.pauseBtn.classList.remove('inline-flex');
    el.collapsedPauseBtn.classList.add('hidden');
    if (canResume) {
      el.resumeBtn.classList.remove('hidden');
      el.resumeBtn.classList.add('inline-flex');
      el.resumeBtnLabel.textContent = `Resume (Step ${state.nextStepIndex + 1})`;
      el.collapsedResumeBtn.classList.remove('hidden');
    } else {
      el.resumeBtn.classList.add('hidden');
      el.resumeBtn.classList.remove('inline-flex');
      el.collapsedResumeBtn.classList.add('hidden');
    }
  }
}

function renderChecklist(activeStepNum = 0, retryingStep = false) {
  const stageColors = {
    1: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/25',
    2: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/25',
    3: 'text-amber-300 bg-amber-500/10 border-amber-500/25',
    4: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/25',
    5: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/25'
  };

  const filtered = PIPELINE_STEPS.filter((step) =>
    state.activeFilter === 'all' ? true : step.stage === Number(state.activeFilter)
  );

  el.checklistContainer.innerHTML = '';

  filtered.forEach((step) => {
    const doneInfo = state.completedSteps[step.num];
    const isActive = step.num === activeStepNum;
    const isRetry = isActive && retryingStep;

    const card = document.createElement('div');
    card.id = `step-card-${step.num}`;
    let borderClass = 'border-slate-800/80 bg-[#0d131f]/70';
    if (doneInfo) borderClass = 'border-emerald-500/30 bg-emerald-950/10';
    if (isActive) borderClass = isRetry ? 'border-amber-500/60 bg-amber-950/20' : 'border-indigo-500/60 bg-indigo-950/20';

    card.className = `rounded-xl border ${borderClass} p-3 transition`;

    const statusBadge = doneInfo
      ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Done</span>'
      : isRetry
      ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30 animate-pulse-soft">Cooldown</span>'
      : isActive
      ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 animate-pulse-soft">Thinking...</span>'
      : '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-500">Queued</span>';

    const fileTag = step.targetFile
      ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-800 text-cyan-300 border border-slate-700">${step.targetFile === 'html' ? 'index.html' : step.targetFile === 'css' ? 'style.css' : 'script.js'}</span>`
      : '';

    const headerWrap = document.createElement('div');
    headerWrap.className = 'flex items-start justify-between gap-2';

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'flex-1 text-left flex items-start gap-2.5 min-w-0';
    toggleBtn.innerHTML = `
      <span class="shrink-0 w-6 h-6 rounded-md bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[11px] font-mono-code font-semibold ${doneInfo ? 'text-emerald-300 border-emerald-500/40' : isActive ? 'text-indigo-300 border-indigo-500/50' : 'text-slate-400'}">${step.num}</span>
      <div class="min-w-0">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="px-1.5 py-0.5 rounded text-[10px] font-medium border ${stageColors[step.stage]}">${escapeHtml(step.section)}</span>
          ${fileTag}
          <span class="text-xs font-semibold text-slate-100">${escapeHtml(step.role)}</span>
        </div>
        <p class="text-[11px] text-slate-300 mt-1 leading-snug"><strong class="text-indigo-300 font-medium">Main &amp; Supporting:</strong> ${escapeHtml(step.mainTask)} &amp; ${escapeHtml(step.supportTask)}</p>
      </div>
    `;

    const rightActions = document.createElement('div');
    rightActions.className = 'shrink-0 flex items-center gap-1.5';
    rightActions.innerHTML = statusBadge;

    if (!state.isRunning && state.userPrompt && (doneInfo || step.num <= state.nextStepIndex + 1)) {
      const rerunBtn = document.createElement('button');
      rerunBtn.type = 'button';
      rerunBtn.title = `Run from Step ${step.num}`;
      rerunBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 hover:bg-indigo-600/30 text-slate-300 hover:text-indigo-200 border border-slate-700 transition';
      rerunBtn.textContent = 'Run from here';
      rerunBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        rerunFromStep(step.num);
      });
      rightActions.appendChild(rerunBtn);
    }

    headerWrap.appendChild(toggleBtn);
    headerWrap.appendChild(rightActions);
    card.appendChild(headerWrap);

    if (doneInfo && doneInfo.output) {
      const previewBox = document.createElement('div');
      const isExpanded = state.expandedSteps.has(step.num);
      previewBox.className = `${isExpanded ? '' : 'hidden '}mt-2.5 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono-code text-slate-300 whitespace-pre-wrap max-h-60 overflow-y-auto bg-[#070a10] rounded-lg p-2.5`;
      previewBox.textContent = doneInfo.output;
      toggleBtn.addEventListener('click', () => {
        const nowHidden = previewBox.classList.toggle('hidden');
        if (nowHidden) state.expandedSteps.delete(step.num);
        else state.expandedSteps.add(step.num);
      });
      card.appendChild(previewBox);
    }

    el.checklistContainer.appendChild(card);
  });

  if (activeStepNum > 0 && state.lastScrolledStep !== activeStepNum) {
    state.lastScrolledStep = activeStepNum;
    const activeEl = document.getElementById(`step-card-${activeStepNum}`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function switchTab(tabName) {
  state.activeTab = tabName;

  document.querySelectorAll('#workspaceTabs .ws-tab').forEach((btn) => {
    const isCurrent = btn.dataset.tab === tabName;
    btn.className = isCurrent
      ? 'ws-tab shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/20 text-indigo-200 border border-indigo-500/40 transition'
      : 'ws-tab shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900/70 text-slate-400 border border-slate-800 hover:text-slate-200 transition';
  });

  [el.notesEditor, el.htmlEditor, el.cssEditor, el.jsEditor, el.previewPanel].forEach((p) => p.classList.add('hidden'));
  el.notesSubBar.classList.add('hidden');
  el.notesSubBar.classList.remove('flex');
  el.previewSubBar.classList.add('hidden');
  el.previewSubBar.classList.remove('flex');

  const labels = {
    notes: 'Download notes.txt',
    html: 'Download index.html',
    css: 'Download style.css',
    js: 'Download script.js',
    preview: 'Download index.html'
  };
  el.downloadActiveLabel.textContent = labels[tabName] || 'Download';

  if (tabName === 'notes') {
    el.notesEditor.classList.remove('hidden');
    el.notesSubBar.classList.remove('hidden');
    el.notesSubBar.classList.add('flex');
  } else if (tabName === 'html') {
    el.htmlEditor.classList.remove('hidden');
  } else if (tabName === 'css') {
    el.cssEditor.classList.remove('hidden');
  } else if (tabName === 'js') {
    el.jsEditor.classList.remove('hidden');
  } else if (tabName === 'preview') {
    el.previewPanel.classList.remove('hidden');
    el.previewSubBar.classList.remove('hidden');
    el.previewSubBar.classList.add('flex');
    renderLivePreview();
  }
}

function escapeScriptCloseInCode(code) {
  return code.replace(/<\/script/gi, (match, offset, str) => {
    if (offset > 0 && str[offset - 1] === '\\') return match;
    return '<\\/script';
  });
}

function isEsModuleScript(code, htmlSource = '') {
  if (/<script[^>]*type=["']module["'][^>]*src=["'](?:\.\/)?script\.js(?:\?[^"']*)?["'][^>]*>/i.test(htmlSource)) {
    return true;
  }
  return /(?:^|\n)\s*(?:import\s+(?:[\w*{},\s]+from\s+)?['"][^'"]+['"]|export\s+(?:default|const|let|var|function|class|\{|\*))/m.test(code);
}

function buildCombinedPreviewHtml({ includePreviewBridge = true } = {}) {
  const rawHtml = stripMarkdownCodeFences(state.htmlCode || '');
  const rawCss = stripMarkdownCodeFences(state.cssCode || '');
  const rawJs = stripMarkdownCodeFences(state.jsCode || '');

  if (!rawHtml && !rawCss && !rawJs) {
    return '<!DOCTYPE html><html><body style="font-family:sans-serif;background:#0f172a;color:#94a3b8;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px;"><div><h2 style="color:#e2e8f0;margin-bottom:8px;">Live Preview Ready</h2><p style="font-size:14px;">Customize your options & run the 50-point pipeline (or paste code into the tabs) to launch the app here.</p></div></body></html>';
  }

  const useModule = isEsModuleScript(rawJs, rawHtml);
  let html = rawHtml || '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>App Preview</title></head><body><div id="app"></div></body></html>';

  html = html.replace(/<link[^>]*href=["'](?:\.\/)?style\.css(?:\?[^"']*)?["'][^>]*>/gi, '');
  html = html.replace(/<script[^>]*src=["'](?:\.\/)?script\.js(?:\?[^"']*)?["'][^>]*>\s*<\/script>/gi, '');

  const styleOpenTag = '<sty' + 'le>';
  const styleCloseTag = '</sty' + 'le>';
  const scriptOpenTag = '<scr' + 'ipt>';
  const appScriptOpenTag = useModule ? '<scr' + 'ipt type="module">' : '<scr' + 'ipt>';
  const scriptCloseTag = '</scr' + 'ipt>';

  const bridgeScript = includePreviewBridge ? `${scriptOpenTag}
(function () {
  function makeMemStorage() {
    var store = Object.create(null);
    return {
      getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
      setItem: function (k, v) { store[String(k)] = String(v); },
      removeItem: function (k) { delete store[String(k)]; },
      clear: function () { store = Object.create(null); },
      key: function (i) { return Object.keys(store)[i] || null; },
      get length() { return Object.keys(store).length; }
    };
  }
  ['localStorage', 'sessionStorage'].forEach(function (name) {
    try {
      var s = window[name];
      var t = '__preview_probe__';
      s.setItem(t, '1');
      s.removeItem(t);
    } catch (_) {
      try {
        Object.defineProperty(window, name, { value: makeMemStorage(), configurable: true });
      } catch (__) {}
    }
  });
  window.addEventListener('error', function (ev) {
    try {
      window.parent.postMessage({
        type: 'wbs-preview-error',
        message: (ev.message || 'Script error') + (ev.lineno ? ' (line ' + ev.lineno + ')' : '')
      }, '*');
    } catch (_) {}
  });
  window.addEventListener('unhandledrejection', function (ev) {
    try {
      var reason = ev.reason && ev.reason.message ? ev.reason.message : String(ev.reason || 'Unhandled rejection');
      window.parent.postMessage({ type: 'wbs-preview-error', message: reason }, '*');
    } catch (_) {}
  });
})();
${scriptCloseTag}` : '';

  const styleTag = rawCss ? `${styleOpenTag}\n${rawCss}\n${styleCloseTag}` : '';
  const safeJs = rawJs ? escapeScriptCloseInCode(rawJs) : '';
  const scriptTag = safeJs ? `${appScriptOpenTag}\n${safeJs}\n${scriptCloseTag}` : '';

  const headInjection = [bridgeScript, styleTag].filter(Boolean).join('\n');
  if (headInjection) {
    if (/<\/head>/i.test(html)) html = html.replace(/<\/head>/i, () => `${headInjection}\n</head>`);
    else html = `${headInjection}\n${html}`;
  }

  if (scriptTag) {
    if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, () => `${scriptTag}\n</body>`);
    else html = `${html}\n${scriptTag}`;
  }

  return html;
}

function updatePreviewConsoleUI() {
  if (state.previewErrors.length === 0) {
    el.previewErrorCountBadge.classList.add('hidden');
    el.previewConsoleBar.classList.add('hidden');
    el.previewConsoleList.innerHTML = '';
    return;
  }
  el.previewErrorCountBadge.classList.remove('hidden');
  el.previewErrorCountBadge.textContent = `${state.previewErrors.length} error${state.previewErrors.length > 1 ? 's' : ''}`;
  el.previewConsoleBar.classList.remove('hidden');
  el.previewConsoleList.innerHTML = state.previewErrors
    .map((err) => `<div class="bg-rose-950/60 border border-rose-500/30 rounded px-2 py-1">${escapeHtml(err)}</div>`)
    .join('');
}

function renderLivePreview() {
  state.previewErrors = [];
  const cleanJs = stripMarkdownCodeFences(state.jsCode || '');
  if (cleanJs && !isEsModuleScript(cleanJs, state.htmlCode || '')) {
    try {
      new Function(cleanJs);
    } catch (syntaxErr) {
      state.previewErrors.push(`SyntaxError in script.js: ${syntaxErr.message}`);
    }
  }
  updatePreviewConsoleUI();
  el.previewIframe.srcdoc = buildCombinedPreviewHtml({ includePreviewBridge: true });
}

function sleepWithAbort(ms, signal, onTick, wakePromise = null) {
  return new Promise((resolve, reject) => {
    if (signal && signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }
    const targetEnd = Date.now() + ms;
    let settled = false;

    const onAbort = () => {
      if (settled) return;
      settled = true;
      if (signal) signal.removeEventListener('abort', onAbort);
      reject(new DOMException('Aborted', 'AbortError'));
    };

    if (signal) signal.addEventListener('abort', onAbort, { once: true });

    if (wakePromise) {
      wakePromise.then(() => {
        if (settled) return;
        settled = true;
        if (signal) signal.removeEventListener('abort', onAbort);
        resolve();
      });
    }

    (async function loop() {
      while (!settled) {
        const remaining = Math.max(0, targetEnd - Date.now());
        if (onTick) onTick(remaining);
        if (remaining <= 0) {
          settled = true;
          if (signal) signal.removeEventListener('abort', onAbort);
          resolve();
          return;
        }
        await workerTimeout(Math.min(1000, remaining));
      }
    })();
  });
}

async function waitForOnlineIfOffline(stepObj) {
  if (typeof navigator === 'undefined' || navigator.onLine) return;

  state.isOfflineWaiting = true;
  updateNetworkUI();
  updateProgressUI(stepObj.num, true);
  renderChecklist(stepObj.num, true);

  const wakePromise = new Promise((res) => {
    state.networkWakeResolver = res;
  });

  const msg = `Device offline on Step ${stepObj.num}/50 — waiting for connection to resume...`;
  el.pipelineStatusText.textContent = msg;
  updateLiveNotificationBar({
    mode: 'frozen',
    title: `Offline • Waiting on Step ${stepObj.num}/50`,
    detail: msg,
    stepNum: stepObj.num,
    forceOs: true
  });

  try {
    await sleepWithAbort(
      24 * 3600 * 1000,
      state.abortController?.signal,
      () => {
        if (navigator.onLine) wakeNetworkIfOnline();
      },
      wakePromise
    );
  } finally {
    state.isOfflineWaiting = false;
    state.networkWakeResolver = null;
    updateNetworkUI();
    updateProgressUI(stepObj.num, false);
    renderChecklist(stepObj.num, false);
  }
}

function isTransientStatus(status) {
  return status === 500 || status === 502 || status === 503 || status === 504;
}

function getThinkingConfigForModel(modelId, requestedLevel, forceOmitThinking = false) {
  if (forceOmitThinking) return undefined;
  const lower = modelId.toLowerCase();
  if (lower.includes('gemini-4') || lower.includes('hydrogen')) {
    return { thinkingLevel: requestedLevel };
  }
  if (lower.includes('gemini-3')) {
    return { thinkingLevel: requestedLevel === 'xhigh' ? 'high' : requestedLevel };
  }
  if (lower.includes('gemini-2.5')) {
    const budgetMap = { low: 2048, medium: 8192, high: 16384, xhigh: 24576 };
    return { thinkingBudget: budgetMap[requestedLevel] || 16384 };
  }
  return { thinkingLevel: requestedLevel };
}

async function callPrimaryModelRespectful(systemPrompt, userPrompt, stepObj) {
  let transientAttempt = 0;
  let forceOmitThinking = false;

  while (true) {
    if (state.abortController?.signal.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }

    await waitForOnlineIfOffline(stepObj);

    const picked = getNextAvailableKey();

    if (!picked) {
      const stats = getKeyPoolStats();
      if (stats.total === 0) {
        throw new Error('No API keys configured. Add at least one Google AI Studio API key.');
      }
      if (stats.limitedCount === 0 || !Number.isFinite(stats.earliestResetAt)) {
        throw new Error('All configured API keys are marked invalid. Please add a valid API key.');
      }

      state.isFrozen = true;
      const waitMs = Math.max(1500, stats.earliestResetAt - Date.now());
      const resetClock = formatResetClock(stats.earliestResetAt);
      const wakePromise = new Promise((res) => {
        state.freezeWakeResolver = res;
      });

      updateProgressUI(stepObj.num, true);
      renderChecklist(stepObj.num, true);
      showToast(`All ${stats.limitedCount} API keys cooling. Auto-resuming at ${resetClock}.`, 'warn');

      await sleepWithAbort(
        waitMs,
        state.abortController?.signal,
        (rem) => {
          const remFormatted = formatDurationCompact(rem);
          const msg = `All ${stats.limitedCount}/${stats.total} keys cooling — resuming Step ${stepObj.num}/50 in ${remFormatted}`;
          el.pipelineStatusText.textContent = msg;
          updateLiveNotificationBar({
            mode: 'frozen',
            title: `Waiting on Step ${stepObj.num}/50`,
            detail: msg,
            stepNum: stepObj.num
          });
        },
        wakePromise
      );

      state.isFrozen = false;
      state.freezeWakeResolver = null;
      refreshExpiredCooldowns();
      updateKeyPoolUI();
      updateProgressUI(stepObj.num, false);
      renderChecklist(stepObj.num, false);
      continue;
    }

    const { keyObj, index: keyIdx } = picked;
    state.sessionCalls += 1;
    keyObj.calls = (keyObj.calls || 0) + 1;
    updateProgressUI(stepObj.num, false);
    updateKeyPoolUI();

    const stepMsg = `Step ${stepObj.num}/50 (${stepObj.stageName}): ${stepObj.role}`;
    el.pipelineStatusText.textContent = `${stepMsg} [${keyObj.label}]...`;
    updateLiveNotificationBar({
      mode: 'running',
      title: `Step ${stepObj.num}/50 • ${stepObj.stageName}`,
      detail: `${stepObj.role} (${keyObj.label})`,
      stepNum: stepObj.num
    });

    const endpoint = `${GEMINI_API_BASE}/${encodeURIComponent(state.model)}:generateContent`;
    const generationConfig = { maxOutputTokens: state.maxOutputTokens };
    const thinkingCfg = getThinkingConfigForModel(state.model, state.thinkingLevel, forceOmitThinking);
    if (thinkingCfg) generationConfig.thinkingConfig = thinkingCfg;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        signal: state.abortController?.signal,
        headers: {
          'x-goog-api-key': keyObj.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
          generationConfig
        })
      });

      if (response.ok) {
        keyObj.lastError = '';
        keyObj.consecutive429 = 0;
        keyObj.cooldownReason = '';
        keyObj.lastSuccessAt = Date.now();
        if (state.apiKeys.length > 1) {
          state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        }
        saveKeyPool();
        updateKeyPoolUI();

        const data = await response.json();

        if (data?.promptFeedback?.blockReason) {
          throw new Error(`Prompt blocked by API (${data.promptFeedback.blockReason}) on Step ${stepObj.num}.`);
        }

        const candidate = data?.candidates?.[0];
        const finishReason = candidate?.finishReason;
        const parts = candidate?.content?.parts || [];
        const text = parts
          .filter((p) => typeof p.text === 'string' && !p.thought)
          .map((p) => p.text)
          .join('')
          .trim();

        if (!text) {
          if (finishReason === 'SAFETY' || finishReason === 'RECITATION' || finishReason === 'PROHIBITED_CONTENT' || finishReason === 'BLOCKLIST') {
            throw new Error(`Generation blocked (${finishReason}) on Step ${stepObj.num} (${stepObj.role}).`);
          }
          throw Object.assign(
            new Error(`Empty output on Step ${stepObj.num} (${stepObj.role})${finishReason ? ` [finishReason: ${finishReason}]` : ''}`),
            { retryable: true }
          );
        }
        return text;
      }

      let errJson = null;
      let errDetail = `HTTP ${response.status}`;
      try {
        errJson = await response.json();
        errDetail = errJson?.error?.message || errDetail;
      } catch (_) {}

      if (response.status === 400 && !forceOmitThinking && /thinking/i.test(errDetail)) {
        forceOmitThinking = true;
        showToast(`Model ${state.model} rejected thinkingConfig — retrying cleanly.`, 'warn');
        continue;
      }

      if (isQuotaOrRateLimitError(response.status, errJson, errDetail)) {
        const { waitMs, reason } = markKeyRateLimited(keyObj, keyIdx, response, errJson, errDetail);
        const nextReady = getNextAvailableKey();
        if (nextReady) {
          showToast(`${keyObj.label} hit limit (${reason}, back in ${formatDurationCompact(waitMs)}). Rotated to ${nextReady.keyObj.label}.`, 'warn');
        }
        continue;
      }

      if (response.status === 401 || response.status === 403) {
        keyObj.status = 'invalid';
        keyObj.lastError = errDetail;
        if (state.apiKeys.length > 0) state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        saveKeyPool();
        updateKeyPoolUI();
        showToast(`${keyObj.label} rejected (${response.status}). Rotating to next key.`, 'error');
        continue;
      }

      if (!isTransientStatus(response.status)) {
        throw new Error(`API error (${response.status}) on ${state.model}: ${errDetail}`);
      }

      transientAttempt += 1;
      state.sessionRetries += 1;
      if (state.apiKeys.length > 1) {
        state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        saveKeyPool();
      }
      const backoffSec = Math.min(state.retryCapSec, Math.round(state.retryBaseSec * Math.pow(1.35, Math.min(transientAttempt - 1, 8))));
      updateProgressUI(stepObj.num, true);
      renderChecklist(stepObj.num, true);

      await sleepWithAbort(backoffSec * 1000, state.abortController?.signal, (rem) => {
        const msg = `HTTP ${response.status} on Step ${stepObj.num}/50 — retry #${transientAttempt} in ${formatDurationCompact(rem)}...`;
        el.pipelineStatusText.textContent = msg;
        updateLiveNotificationBar({
          mode: 'running',
          title: `Step ${stepObj.num}/50 • Retry`,
          detail: msg,
          stepNum: stepObj.num
        });
      });

      updateProgressUI(stepObj.num, false);
      renderChecklist(stepObj.num, false);

    } catch (err) {
      if (err.name === 'AbortError') throw err;

      const isNetworkOrTransient = err.retryable || err instanceof TypeError || err instanceof SyntaxError;
      if (!isNetworkOrTransient) throw err;

      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        await waitForOnlineIfOffline(stepObj);
        continue;
      }

      transientAttempt += 1;
      state.sessionRetries += 1;
      if (state.apiKeys.length > 1) {
        state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        saveKeyPool();
      }
      const backoffSec = Math.min(state.retryCapSec, Math.round(state.retryBaseSec * Math.pow(1.35, Math.min(transientAttempt - 1, 8))));
      updateProgressUI(stepObj.num, true);
      renderChecklist(stepObj.num, true);

      const networkWake = new Promise((res) => { state.networkWakeResolver = res; });
      state.isOfflineWaiting = true;

      try {
        await sleepWithAbort(
          backoffSec * 1000,
          state.abortController?.signal,
          (rem) => {
            const msg = `Network issue on Step ${stepObj.num}/50 — retry #${transientAttempt} in ${formatDurationCompact(rem)}...`;
            el.pipelineStatusText.textContent = msg;
            updateLiveNotificationBar({
              mode: 'running',
              title: `Step ${stepObj.num}/50 • Network Retry`,
              detail: msg,
              stepNum: stepObj.num
            });
          },
          networkWake
        );
      } finally {
        state.isOfflineWaiting = false;
        state.networkWakeResolver = null;
      }

      updateProgressUI(stepObj.num, false);
      renderChecklist(stepObj.num, false);
    }
  }
}

// =========================================================================
// DEEP ITERATIVE PROMPT BUILDER (MAIN & SUPPORTING + DYNAMIC FLOW)
// =========================================================================
function buildStepPrompts(stepObj) {
  const isCodeStep = Boolean(stepObj.targetFile);
  const dynamicBlueprint = compileDynamicStepBlueprint(stepObj);
  const cfg = state.studioConfig;
  const hasLibs = cfg.jsLibs && cfg.jsLibs.length > 0;

  if (isCodeStep) {
    const fileMap = { html: 'index.html', css: 'style.css', js: 'script.js' };
    const targetFilename = fileMap[stepObj.targetFile];

    const systemPrompt =
      `You are the ${stepObj.role} executing Step ${stepObj.num} of 50 (Stage ${stepObj.stage}: ${stepObj.stageName} | ${stepObj.section}).\n` +
      `Your mission is to deliver the absolute highest-craft, studio-grade ${targetFilename} file—synthesizing every insight, creative breakthrough, visual craft decision, and locked contract from Steps 1–47.\n\n` +
      `Non-Negotiable Code Rules:\n` +
      `1. Main Task: ${stepObj.mainTask}.\n` +
      `2. Supporting Task: ${stepObj.supportTask}.\n` +
      `3. Creative & Polish Standard: ${stepObj.creativeStretch}\n` +
      `4. Intertwine EVERY active Pre-Prompt Studio option (Layout, Design Style, Color Mood, Typography, Elements, Lighting, HTML5/CSS3/JS capabilities, and Mode Features) seamlessly into your implementation.\n` +
      `5. Output ONLY raw, complete, production-ready ${targetFilename} code—zero markdown fences, zero commentary, zero TODOs, zero "// ... rest of code" shortcuts.\n` +
      `6. ${hasLibs ? 'Cleanly integrate ONLY the selected CDN libraries specified in the Blueprint with defensive checks.' : 'Guarantee 100% standalone zero-dependency Vanilla browser execution.'}`;

    let liveCodeContext = '';
    if (stepObj.targetFile === 'css' && state.htmlCode) {
      liveCodeContext = `\nLIVE GENERATED index.html (Step 48 — match 100% of IDs, classes, tags, and ARIA/data-* hooks):\n${state.htmlCode}\n`;
    } else if (stepObj.targetFile === 'js') {
      if (state.htmlCode) {
        liveCodeContext += `\nLIVE GENERATED index.html (Step 48 — match 100% of IDs, templates, dialogs, and data-action hooks):\n${state.htmlCode}\n`;
      }
      if (state.cssCode) {
        liveCodeContext += `\nLIVE GENERATED style.css (Step 49 — match 100% of state classes like .is-active/.is-hidden/.is-open/.is-error and CSS custom properties):\n${state.cssCode}\n`;
      }
    }

    const userPrompt =
      `INITIAL USER PROMPT:\n${state.userPrompt}\n\n` +
      `DYNAMIC PRE-PROMPT BLUEPRINT (INTERTWINED REQUIREMENTS):\n${dynamicBlueprint}\n\n` +
      `STEP ${stepObj.num}/50 MISSION:\n` +
      `- Main Task: ${stepObj.mainTask}\n` +
      `- Supporting Task: ${stepObj.supportTask}\n` +
      `- Creative Stretch: ${stepObj.creativeStretch}\n` +
      `- Insight Harvest Rule: ${stepObj.insightHarvest}\n` +
      `- Upstream Inputs: ${stepObj.upstreamInputs}\n` +
      `- Downstream Target: ${stepObj.downstreamTarget}\n` +
      `- Guidance: ${stepObj.directive}\n` +
      liveCodeContext +
      `\nCUMULATIVE ENGINEERING NOTEBOOK (notes.txt, Steps 1 to ${stepObj.num - 1}):\n${state.notesText}`;

    return { systemPrompt, userPrompt };
  }

  const stagePhilosophy = {
    1: 'Stage 1 (Discovery & Domain Intelligence): Dig deeper than the literal prompt. Question assumptions, mine real-world human psychology and competitor flaws, and discover high-leverage creative insights that turn a good idea into an unforgettable product.',
    2: 'Stage 2 (Systems Reasoning & Evolving Architecture): Synthesize Stage 1 discoveries into a cohesive, self-reinforcing system. Challenge weak assumptions, engineer cross-feature synergies, stress-test edge cases, and elevate the architecture continuously.',
    3: 'Stage 3 (Blueprinting & Technical Craft): Translate the evolved vision into rock-solid, zero-ambiguity engineering contracts across HTML5, CSS3, and modular ES6+ JavaScript where every selected capability works in harmony.',
    4: 'Stage 4 (Visual Craft, Lighting & Sensory Polish): Transform the Layout, Design Style, Color Mood, Typography, Element Style, and Lighting Style into tactile, high-contrast, GPU-smooth visual, SVG, Canvas, and Motion artistry.',
    5: 'Stage 5 (Holistic Audit & Contract Lock): Audit all 40 prior steps ruthlessly, resolve every remaining gap or contradiction, and lock character-for-character 3-file parity for Steps 48–50.'
  };

  const systemPrompt =
    `You are the ${stepObj.role} executing Step ${stepObj.num} of 50 (Stage ${stepObj.stage}: ${stepObj.stageName} | ${stepObj.section}).\n` +
    `${stagePhilosophy[stepObj.stage]}\n\n` +
    `How to Work Harder, Think Deeper & Develop Dynamic Insights:\n` +
    `- Dual-Task Mastery: Deliver BOTH a thorough **Main Task** (${stepObj.mainTask}) AND an equally rigorous **Supporting Task** (${stepObj.supportTask}).\n` +
    `- Mandatory Creative Stretch: ${stepObj.creativeStretch}\n` +
    `- Active Insight Harvesting: ${stepObj.insightHarvest}\n` +
    `- Dynamic Blueprint Weaving: Actively translate the user's Pre-Prompt Studio selections below into concrete, domain-specific decisions for THIS exact app—never give generic textbook filler.\n` +
    `- Required Output Structure (use these exact 4 headings so downstream steps can harvest your work cleanly):\n` +
    `  ### 1. Upstream Insight Harvest & Upgrades\n` +
    `  (Cite 3–5 specific insights/decisions from earlier steps in notes.txt, explain how you are building on or upgrading them, and flag any tension you are resolving.)\n` +
    `  ### 2. Core Specification (Main + Supporting Tasks)\n` +
    `  (Provide deep, concrete, exhaustive specifications, examples, matrices, schemas, or rules—dense with real substance.)\n` +
    `  ### 3. Creative Breakthrough & Critical Deliverables\n` +
    `  (Deliver every item listed in Critical Deliverables with concrete detail.)\n` +
    `  ### 4. New Dynamic Insights & Downstream Handoff\n` +
    `  (State 3+ newly discovered non-obvious insights from this step + exact action directives/warnings for ${stepObj.downstreamTarget}.)\n` +
    `- Do NOT emit full index.html / style.css / script.js files yet (final code emission happens in Steps 48–50).`;

  const userPrompt =
    `INITIAL USER PROMPT:\n${state.userPrompt}\n\n` +
    `DYNAMIC PRE-PROMPT BLUEPRINT (INTERTWINED INTO THIS STEP):\n${dynamicBlueprint}\n\n` +
    `STEP ${stepObj.num}/50 ASSIGNMENT — ${stepObj.role}:\n` +
    `- Main Task: ${stepObj.mainTask}\n` +
    `- Supporting Task: ${stepObj.supportTask}\n` +
    `- Creative Stretch: ${stepObj.creativeStretch}\n` +
    `- Insight Harvest Focus: ${stepObj.insightHarvest}\n` +
    `- Critical Deliverables Required: ${stepObj.criticalDeliverables}\n` +
    `- Upstream Inputs: ${stepObj.upstreamInputs}\n` +
    `- Downstream Target: ${stepObj.downstreamTarget}\n` +
    `- Deep Guidance: ${stepObj.directive}\n\n` +
    `CUMULATIVE ENGINEERING NOTEBOOK SO FAR (notes.txt):\n${state.notesText || '(Empty — this is Step 1: set an extraordinary creative and analytical bar!)'}`;

  return { systemPrompt, userPrompt };
}

function truncateNotesBeforeStep(stepNum) {
  const marker = `\n--- [STEP ${stepNum}/50 |`;
  const idx = state.notesText.indexOf(marker);
  if (idx !== -1) state.notesText = state.notesText.slice(0, idx);
  for (let i = stepNum; i <= 50; i++) delete state.completedSteps[i];
  state.nextStepIndex = stepNum - 1;
  updateEditorsAndBadges();
  saveWorkspaceSnapshot();
}

async function rerunFromStep(stepNum) {
  if (state.isRunning) return;
  truncateNotesBeforeStep(stepNum);
  await runPipeline(false);
}

async function runPipeline(startFresh = true) {
  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Please add at least one Google AI Studio API key first.', 'warn');
    if (el.apiKeyInput && window.innerWidth >= 1280) el.apiKeyInput.focus();
    else el.manageKeysBtn.click();
    return;
  }
  if (stats.readyCount === 0 && stats.limitedCount === 0) {
    showToast('All saved API keys are invalid. Please add a valid key.', 'error');
    el.manageKeysBtn.click();
    return;
  }

  const promptText = el.promptInput.value.trim() || state.userPrompt;
  if (!promptText) {
    showToast('Please describe what you want to build first.', 'warn');
    el.promptInput.focus();
    return;
  }

  hideErrorBanner();
  await ensureNotificationPermission();

  if (startFresh) {
    state.userPrompt = promptText;
    state.notesText = '';
    state.htmlCode = '';
    state.cssCode = '';
    state.jsCode = '';
    state.completedSteps = {};
    state.expandedSteps.clear();
    state.lastScrolledStep = 0;
    state.nextStepIndex = 0;
    state.sessionCalls = 0;
    state.sessionRetries = 0;
    state.stepDurations = [];
    state.runStartedAt = Date.now();

    const ts = new Date().toISOString();
    const bpSummary = compileFullBlueprintSummaryText();
    await appendToNotes(
      `========================================================================\n` +
      `50-POINT DYNAMIC WEB APP STUDIO LEDGER (${ts})\n` +
      `MODEL: ${state.model} | THINKING: ${state.thinkingLevel}\n` +
      `========================================================================\n` +
      `INITIAL USER PROMPT:\n${state.userPrompt}\n` +
      `========================================================================\n` +
      `PRE-PROMPT STUDIO CONFIGURATION:\n${bpSummary}\n` +
      `========================================================================\n`
    );
    updateEditorsAndBadges();
  } else {
    state.userPrompt = promptText;
    if (!state.runStartedAt) state.runStartedAt = Date.now();
  }

  state.isRunning = true;
  state.isPaused = false;
  state.isFrozen = false;
  state.abortController = new AbortController();
  saveWorkspaceSnapshot();
  updateControlButtons();
  if (window.innerWidth < 1024) setPromptCollapsed(true);

  await acquireWakeLock();
  startBackgroundAudioKeepAlive();

  let deliberatelyPaused = false;

  const executeLoop = async () => {
    try {
      for (let idx = state.nextStepIndex; idx < PIPELINE_STEPS.length; idx++) {
        const step = PIPELINE_STEPS[idx];
        const stepStartTs = Date.now();

        el.pipelineStatusText.textContent = `Step ${step.num}/50 (${step.stageName}): ${step.role}...`;
        updateProgressUI(step.num, false);
        renderChecklist(step.num, false);
        updateLiveNotificationBar({
          mode: 'running',
          title: `Step ${step.num}/50 • ${step.stageName}`,
          detail: step.role,
          stepNum: step.num,
          forceOs: idx === state.nextStepIndex
        });

        const { systemPrompt, userPrompt } = buildStepPrompts(step);
        const rawOutput = await callPrimaryModelRespectful(systemPrompt, userPrompt, step);

        let processedOutput = rawOutput;

        if (step.targetFile) {
          processedOutput = stripMarkdownCodeFences(rawOutput);
          if (step.targetFile === 'html') {
            state.htmlCode = processedOutput;
            switchTab('html');
          } else if (step.targetFile === 'css') {
            state.cssCode = processedOutput;
            switchTab('css');
          } else if (step.targetFile === 'js') {
            state.jsCode = processedOutput;
            switchTab('js');
          }
        }

        await appendToNotes(
          `\n--- [STEP ${step.num}/50 | ${step.stageName.toUpperCase()} (${step.section}): ${step.role}] ---\n` +
          `${processedOutput}\n`
        );

        state.completedSteps[step.num] = {
          output: processedOutput,
          timestamp: new Date().toISOString()
        };
        state.stepDurations.push(Date.now() - stepStartTs);
        state.nextStepIndex = idx + 1;
        saveWorkspaceSnapshot();
        updateEditorsAndBadges();
        updateProgressUI(step.num, false);
        renderChecklist(step.num, false);

        if (idx < PIPELINE_STEPS.length - 1) {
          await sleepWithAbort(state.delayMs, state.abortController.signal, (rem) => {
            const msg = `Completed Step ${step.num}/50 — next step in ${(rem / 1000).toFixed(1)}s...`;
            el.pipelineStatusText.textContent = msg;
            updateLiveNotificationBar({
              mode: 'running',
              title: `Step ${step.num}/50 Complete`,
              detail: msg,
              stepNum: step.num
            });
          });
        }
      }

      el.pipelineStatusText.textContent = 'All 50 Steps Complete! Live Preview ready.';
      updateProgressUI(0, false);
      renderChecklist(0, false);
      switchTab('preview');
      updateLiveNotificationBar({
        mode: 'complete',
        title: '50-Point Build Complete!',
        detail: 'index.html, style.css, script.js & Live Preview are ready.',
        stepNum: 50,
        forceOs: true
      });
      showToast('50-Point Web App Build Complete! Preview & Downloads ready.', 'success');

    } catch (err) {
      if (err.name === 'AbortError') {
        deliberatelyPaused = true;
        state.isPaused = true;
        el.pipelineStatusText.textContent = `Paused at Step ${state.nextStepIndex + 1}/50 — click Resume to continue`;
        updateLiveNotificationBar({
          mode: 'paused',
          title: `Paused at Step ${state.nextStepIndex}/50`,
          detail: 'Tap Resume to continue building.',
          stepNum: state.nextStepIndex,
          forceOs: true
        });
        showToast(`Paused cleanly. Progress saved at Step ${state.nextStepIndex}/50.`, 'warn');
      } else {
        const msg = err.message || String(err);
        el.pipelineStatusText.textContent = `Stopped on Step ${state.nextStepIndex + 1} — see error details`;
        showErrorBanner(`Step ${state.nextStepIndex + 1}/50: ${msg}`);
        updateLiveNotificationBar({
          mode: 'error',
          title: `Stopped on Step ${state.nextStepIndex + 1}/50`,
          detail: msg,
          stepNum: state.nextStepIndex + 1,
          forceOs: true
        });
        showToast('Pipeline stopped due to API error.', 'error');
      }
    } finally {
      state.isRunning = false;
      state.isFrozen = false;
      state.isOfflineWaiting = false;
      state.freezeWakeResolver = null;
      state.networkWakeResolver = null;
      state.abortController = null;
      releaseWakeLock();
      stopBackgroundAudioKeepAlive();
      updateProgressUI(0, false);
      renderChecklist(0, false);
      updateControlButtons();
      saveWorkspaceSnapshot();
      if (deliberatelyPaused || state.nextStepIndex >= 50) {
        safeSet('wbs_was_running', '0');
      }
    }
  };

  if (navigator.locks && typeof navigator.locks.request === 'function') {
    await navigator.locks.request('wbs-active-pipeline', executeLoop);
  } else {
    await executeLoop();
  }
}

function triggerDownloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function triggerDownload(filename, content, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([content || ''], { type: mime });
  triggerDownloadBlob(filename, blob);
}

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32Bytes(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function createZipBlob(files) {
  const encoder = new TextEncoder();
  const now = new Date();
  const dosTime = ((now.getHours() & 0x1f) << 11) | ((now.getMinutes() & 0x3f) << 5) | ((now.getSeconds() >> 1) & 0x1f);
  const dosDate = (((Math.max(1980, now.getFullYear()) - 1980) & 0x7f) << 9) | (((now.getMonth() + 1) & 0x0f) << 5) | (now.getDate() & 0x1f);

  const localParts = [];
  const centralParts = [];
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const dataBytes = encoder.encode(file.content || '');
    const crc = crc32Bytes(dataBytes);

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lView = new DataView(localHeader.buffer);
    lView.setUint32(0, 0x04034b50, true);
    lView.setUint16(4, 20, true);
    lView.setUint16(6, 0x0800, true);
    lView.setUint16(8, 0, true);
    lView.setUint16(10, dosTime, true);
    lView.setUint16(12, dosDate, true);
    lView.setUint32(14, crc, true);
    lView.setUint32(18, dataBytes.length, true);
    lView.setUint32(22, dataBytes.length, true);
    lView.setUint16(26, nameBytes.length, true);
    lView.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    localParts.push(localHeader, dataBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cView = new DataView(centralHeader.buffer);
    cView.setUint32(0, 0x02014b50, true);
    cView.setUint16(4, 20, true);
    cView.setUint16(6, 20, true);
    cView.setUint16(8, 0x0800, true);
    cView.setUint16(10, 0, true);
    cView.setUint16(12, dosTime, true);
    cView.setUint16(14, dosDate, true);
    cView.setUint32(16, crc, true);
    cView.setUint32(20, dataBytes.length, true);
    cView.setUint32(24, dataBytes.length, true);
    cView.setUint16(28, nameBytes.length, true);
    cView.setUint16(30, 0, true);
    cView.setUint16(32, 0, true);
    cView.setUint16(34, 0, true);
    cView.setUint16(36, 0, true);
    cView.setUint32(38, 0, true);
    cView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);

    centralParts.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endRecord = new Uint8Array(22);
  const eView = new DataView(endRecord.buffer);
  eView.setUint32(0, 0x06054b50, true);
  eView.setUint16(4, 0, true);
  eView.setUint16(6, 0, true);
  eView.setUint16(8, files.length, true);
  eView.setUint16(10, files.length, true);
  eView.setUint32(12, centralSize, true);
  eView.setUint32(16, offset, true);
  eView.setUint16(20, 0, true);

  return new Blob([...localParts, ...centralParts, endRecord], { type: 'application/zip' });
}

function escapeCsvCell(value) {
  const str = String(value ?? '');
  if (/[",\r\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

function exportApiKeysToCsv() {
  if (state.apiKeys.length === 0) {
    showToast('No API keys to export.', 'warn');
    return;
  }
  const header = ['label', 'api_key', 'status', 'calls', 'hits_429'];
  const rows = state.apiKeys.map((k) => [
    escapeCsvCell(k.label || ''),
    escapeCsvCell(k.key || ''),
    escapeCsvCell(k.status || 'ready'),
    escapeCsvCell(k.calls || 0),
    escapeCsvCell(k.hits429 || 0)
  ].join(','));
  triggerDownload('gemini-api-keys.csv', [header.join(','), ...rows].join('\n'), 'text/csv;charset=utf-8');
  showToast(`Exported ${state.apiKeys.length} API key(s) to CSV.`, 'success');
}

function getActiveNotepadData() {
  if (state.activeTab === 'html') return { name: 'index.html', content: state.htmlCode, mime: 'text/html;charset=utf-8' };
  if (state.activeTab === 'css') return { name: 'style.css', content: state.cssCode, mime: 'text/css;charset=utf-8' };
  if (state.activeTab === 'js') return { name: 'script.js', content: state.jsCode, mime: 'application/javascript;charset=utf-8' };
  if (state.activeTab === 'preview') return { name: 'index.html', content: state.htmlCode, mime: 'text/html;charset=utf-8' };
  return { name: 'notes.txt', content: state.notesText, mime: 'text/plain;charset=utf-8' };
}

// =========================================================================
// EVENT LISTENERS
// =========================================================================
window.addEventListener('message', (event) => {
  if (event.source !== el.previewIframe.contentWindow) return;
  if (event.data && event.data.type === 'wbs-preview-error' && event.data.message) {
    state.previewErrors.push(String(event.data.message));
    updatePreviewConsoleUI();
  }
});

el.clearPreviewErrorsBtn.addEventListener('click', () => {
  state.previewErrors = [];
  updatePreviewConsoleUI();
});

el.dismissErrorBannerBtn.addEventListener('click', hideErrorBanner);

document.querySelectorAll('#layoutModeSwitcher .layout-mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => setDesktopLayout(btn.dataset.layout));
});

document.querySelectorAll('#projectTypeSelector .proj-type-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (state.isRunning) {
      showToast('Pause the pipeline before changing Project Type.', 'warn');
      return;
    }
    setProjectType(btn.dataset.type, true);
    showToast(`Switched mode to ${STUDIO_CATALOG.projectTypes[btn.dataset.type].label}.`, 'info');
  });
});

el.openBlueprintModalBtn.addEventListener('click', () => {
  renderBlueprintModalContents();
  switchBlueprintTab(state.activeBpTab);
  el.blueprintModal.classList.remove('hidden');
  refreshIcons();
});

el.closeBlueprintModalBtn.addEventListener('click', () => el.blueprintModal.classList.add('hidden'));
el.doneBlueprintModalBtn.addEventListener('click', () => el.blueprintModal.classList.add('hidden'));

el.applyRecommendedPresetBtn.addEventListener('click', () => {
  setProjectType(state.studioConfig.projectType, true);
  renderBlueprintModalContents();
  showToast('Reset to recommended defaults for this mode.', 'success');
});

document.querySelectorAll('#blueprintTabs .bp-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => switchBlueprintTab(btn.dataset.bpTab));
});

[
  [el.bpTargetPlatform, 'targetPlatform'],
  [el.bpDataPersistence, 'dataPersistence'],
  [el.bpComplexity, 'complexity'],
  [el.bpNavStyle, 'navStyle'],
  [el.bpStarterExp, 'starterExp'],
  [el.bpSensoryAudio, 'sensoryAudio'],
  [el.bpA11yMotion, 'a11yMotion']
].forEach(([selectEl, key]) => {
  selectEl.addEventListener('change', (e) => {
    state.studioConfig[key] = e.target.value;
    saveStudioConfig();
    renderBlueprintSummaryStrip();
  });
});

[
  [el.bpTargetAudience, 'targetAudience'],
  [el.bpExtraConstraints, 'extraConstraints'],
  [el.bpAntiGoals, 'antiGoals']
].forEach(([inputEl, key]) => {
  inputEl.addEventListener('input', (e) => {
    state.studioConfig[key] = e.target.value;
    saveStudioConfig();
  });
});

function handleQuickAddKey() {
  const raw = el.apiKeyInput.value.trim();
  if (!raw) return;
  const added = parseAndAddKeys(raw);
  el.apiKeyInput.value = '';
  if (added > 0) showToast(`Added ${added} API key${added > 1 ? 's' : ''} to pool.`, 'success');
  else showToast('Key already in pool or invalid format.', 'warn');
}

el.addKeyQuickBtn.addEventListener('click', handleQuickAddKey);
el.apiKeyInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleQuickAddKey();
  }
});

el.toggleKeyVisBtn.addEventListener('click', () => {
  const isPwd = el.apiKeyInput.type === 'password';
  el.apiKeyInput.type = isPwd ? 'text' : 'password';
  el.toggleKeyVisBtn.innerHTML = `<i data-lucide="${isPwd ? 'eye-off' : 'eye'}" class="w-3 h-3"></i>`;
  refreshIcons();
});

el.manageKeysBtn.addEventListener('click', () => {
  renderKeysModalList();
  el.keysModal.classList.remove('hidden');
});

el.closeKeysModalBtn.addEventListener('click', () => el.keysModal.classList.add('hidden'));

el.addBulkKeysBtn.addEventListener('click', () => {
  const added = parseAndAddKeys(el.bulkKeysInput.value);
  if (added > 0) {
    el.bulkKeysInput.value = '';
    renderKeysModalList();
    showToast(`Added ${added} API key${added > 1 ? 's' : ''} to pool.`, 'success');
  } else {
    showToast('No new valid keys found.', 'warn');
  }
});

el.uploadCsvKeysBtn.addEventListener('click', () => {
  el.csvKeysFileInput.value = '';
  el.csvKeysFileInput.click();
});

if (el.exportCsvKeysBtn) el.exportCsvKeysBtn.addEventListener('click', exportApiKeysToCsv);

el.csvKeysFileInput.addEventListener('change', async (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  try {
    const content = await file.text();
    const entries = parseCsvApiKeys(content);
    const added = parseAndAddKeys('', entries);
    renderKeysModalList();
    if (added > 0) showToast(`Imported ${added} API key${added > 1 ? 's' : ''} from ${file.name}.`, 'success');
    else showToast(`No new valid API keys found in ${file.name}.`, 'warn');
  } catch (_) {
    showToast('Could not read CSV file.', 'error');
  }
});

el.resetAllCooldownsBtn.addEventListener('click', () => {
  resetAllRateLimitedCooldowns();
  renderKeysModalList();
  showToast('All rate-limit cooldowns reset.', 'info');
});

el.clearInvalidKeysBtn.addEventListener('click', () => {
  const before = state.apiKeys.length;
  state.apiKeys = state.apiKeys.filter((k) => k.status !== 'invalid');
  if (state.activeKeyIndex >= state.apiKeys.length) state.activeKeyIndex = 0;
  saveKeyPool();
  updateKeyPoolUI();
  renderKeysModalList();
  showToast(`Removed ${before - state.apiKeys.length} invalid key(s).`, 'info');
});

el.keysListContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;
  const idx = state.apiKeys.findIndex((k) => k.id === id);
  if (idx === -1) return;

  if (action === 'reset-key') {
    state.apiKeys[idx].status = 'ready';
    state.apiKeys[idx].resetAt = null;
    state.apiKeys[idx].cooldownReason = '';
    state.apiKeys[idx].consecutive429 = 0;
    state.apiKeys[idx].lastError = '';
    saveKeyPool();
    updateKeyPoolUI();
    renderKeysModalList();
    wakeFreezeIfReady();
  } else if (action === 'remove-key') {
    state.apiKeys.splice(idx, 1);
    if (state.activeKeyIndex >= state.apiKeys.length) state.activeKeyIndex = 0;
    saveKeyPool();
    updateKeyPoolUI();
    renderKeysModalList();
  }
});

el.installAppBtn.addEventListener('click', async () => {
  if (state.deferredInstallPrompt) {
    state.deferredInstallPrompt.prompt();
    const choice = await state.deferredInstallPrompt.userChoice;
    if (choice.outcome === 'accepted') state.deferredInstallPrompt = null;
  } else {
    showToast('On iOS Safari: tap Share → "Add to Home Screen" to install.', 'info');
  }
});

if (el.androidBatteryHelpBtn) {
  el.androidBatteryHelpBtn.addEventListener('click', () => {
    renderReadinessChecklist();
    if (el.mobileReadinessModal) {
      el.mobileReadinessModal.classList.remove('hidden');
      refreshIcons();
    }
  });
}

if (el.closeReadinessBtn) el.closeReadinessBtn.addEventListener('click', () => el.mobileReadinessModal.classList.add('hidden'));
if (el.enableAllReadinessBtn) el.enableAllReadinessBtn.addEventListener('click', requestFullMobilePersistence);

if (el.testLockNotifBtn) {
  el.testLockNotifBtn.addEventListener('click', async () => {
    const granted = await ensureNotificationPermission();
    if (!granted) {
      showToast('Notification permission not granted yet.', 'warn');
      return;
    }
    pushOsProgressNotification(
      '50-Point Studio • Lock-Screen Test',
      'Background progress updates are working!',
      { force: true, status: state.isRunning ? 'running' : 'paused', step: state.nextStepIndex }
    );
    showToast('Test notification sent!', 'success');
  });
}

el.notifOsBtn.addEventListener('click', async () => {
  if (typeof Notification === 'undefined') {
    showToast('Browser does not support OS notifications.', 'warn');
    return;
  }
  if (Notification.permission === 'granted') {
    state.osNotifEnabled = !state.osNotifEnabled;
    saveSettingsSnapshot();
    updateKeepAliveBadges();
    showToast(`OS notifications ${state.osNotifEnabled ? 'enabled' : 'muted'}.`, 'info');
  } else {
    const granted = await ensureNotificationPermission();
    showToast(granted ? 'OS notifications enabled!' : 'Notification permission denied.', granted ? 'success' : 'warn');
  }
});

el.notifPauseBtn.addEventListener('click', () => {
  if (state.abortController) state.abortController.abort();
});

el.notifResumeBtn.addEventListener('click', () => {
  if (!state.isRunning) runPipeline(false);
});

el.settingsBtn.addEventListener('click', () => {
  el.modelInput.value = state.model;
  el.thinkingLevelSelect.value = state.thinkingLevel;
  el.maxTokensInput.value = state.maxOutputTokens;
  el.delayInput.value = state.delayMs;
  el.defaultCooldownInput.value = state.defaultCooldownSec;
  el.retryBaseInput.value = state.retryBaseSec;
  el.retryCapInput.value = state.retryCapSec;
  el.bgKeepAliveToggle.checked = state.bgKeepAliveEnabled;
  el.osNotifToggle.checked = state.osNotifEnabled;
  if (el.autoResumeOnReloadToggle) el.autoResumeOnReloadToggle.checked = state.autoResumeOnReload;
  el.settingsModal.classList.remove('hidden');
});

el.closeSettingsBtn.addEventListener('click', () => el.settingsModal.classList.add('hidden'));

el.saveSettingsBtn.addEventListener('click', () => {
  state.model = el.modelInput.value.trim() || 'gemini-4-hydrogen';
  state.thinkingLevel = el.thinkingLevelSelect.value || 'xhigh';
  state.maxOutputTokens = Math.max(2048, Math.min(65536, Number(el.maxTokensInput.value) || 65536));
  state.delayMs = Math.max(1000, Number(el.delayInput.value) || 4000);
  state.defaultCooldownSec = Math.max(10, Number(el.defaultCooldownInput.value) || 60);
  state.retryBaseSec = Math.max(5, Number(el.retryBaseInput.value) || 20);
  state.retryCapSec = Math.max(state.retryBaseSec, Number(el.retryCapInput.value) || 3600);
  state.bgKeepAliveEnabled = Boolean(el.bgKeepAliveToggle.checked);
  state.osNotifEnabled = Boolean(el.osNotifToggle.checked);
  if (el.autoResumeOnReloadToggle) state.autoResumeOnReload = Boolean(el.autoResumeOnReloadToggle.checked);
  el.modelBadge.textContent = `${state.model} • ${state.thinkingLevel}`;
  saveSettingsSnapshot();
  updateKeepAliveBadges();
  el.settingsModal.classList.add('hidden');
  showToast('Settings saved.', 'success');
});

el.buildForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (state.isRunning) return;
  runPipeline(true);
});

el.pauseBtn.addEventListener('click', () => {
  if (state.abortController) state.abortController.abort();
});

el.resumeBtn.addEventListener('click', () => {
  if (state.isRunning) return;
  runPipeline(false);
});

el.resetRunBtn.addEventListener('click', () => {
  if (state.isRunning) {
    showToast('Pause the pipeline before resetting.', 'warn');
    return;
  }
  hideErrorBanner();
  state.notesText = '';
  state.htmlCode = '';
  state.cssCode = '';
  state.jsCode = '';
  state.completedSteps = {};
  state.expandedSteps.clear();
  state.lastScrolledStep = 0;
  state.nextStepIndex = 0;
  state.userPrompt = '';
  state.runStartedAt = null;
  state.stepDurations = [];
  state.sessionCalls = 0;
  state.sessionRetries = 0;
  el.promptInput.value = '';
  saveWorkspaceSnapshot();
  safeSet('wbs_was_running', '0');
  updateEditorsAndBadges();
  updateProgressUI(0, false);
  renderChecklist(0, false);
  updateControlButtons();
  updateLiveNotificationBar({ mode: 'hidden' });
  clearOsProgressNotification();
  el.pipelineStatusText.textContent = 'Ready — Choose your options & describe your idea';
  showToast('Workspace reset.', 'info');
});

document.querySelectorAll('#checklistFilterBar .filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.activeFilter = btn.dataset.filter;
    document.querySelectorAll('#checklistFilterBar .filter-btn').forEach((b) => {
      b.className = b.dataset.filter === state.activeFilter
        ? 'filter-btn shrink-0 px-2.5 py-1 rounded text-[11px] font-medium bg-indigo-600/25 text-indigo-200 border border-indigo-500/40'
        : 'filter-btn shrink-0 px-2.5 py-1 rounded text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200';
    });
    renderChecklist(0, false);
  });
});

document.querySelectorAll('#stageStepper .stage-pill').forEach((btn) => {
  btn.addEventListener('click', () => {
    const stage = btn.dataset.stageFilter;
    const filterBtn = document.querySelector(`#checklistFilterBar .filter-btn[data-filter="${stage}"]`);
    if (filterBtn) filterBtn.click();
  });
});

document.querySelectorAll('#workspaceTabs .ws-tab').forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

el.notesEditor.addEventListener('input', (e) => {
  state.notesText = e.target.value;
  updateEditorsAndBadges();
  saveWorkspaceSnapshot();
});
el.htmlEditor.addEventListener('input', (e) => {
  state.htmlCode = e.target.value;
  updateEditorsAndBadges();
  saveWorkspaceSnapshot();
});
el.cssEditor.addEventListener('input', (e) => {
  state.cssCode = e.target.value;
  updateEditorsAndBadges();
  saveWorkspaceSnapshot();
});
el.jsEditor.addEventListener('input', (e) => {
  state.jsCode = e.target.value;
  updateEditorsAndBadges();
  saveWorkspaceSnapshot();
});

el.copyActiveBtn.addEventListener('click', async () => {
  const { name, content } = getActiveNotepadData();
  if (!content) {
    showToast(`${name} is empty.`, 'warn');
    return;
  }
  try {
    await navigator.clipboard.writeText(content);
    showToast(`Copied ${name} to clipboard.`, 'success');
  } catch (_) {
    showToast('Clipboard permission unavailable.', 'warn');
  }
});

el.downloadActiveBtn.addEventListener('click', () => {
  const { name, content, mime } = getActiveNotepadData();
  triggerDownload(name, content, mime);
  showToast(`Downloaded ${name}`, 'success');
});

el.downloadAllBtn.addEventListener('click', () => {
  const files = [
    { name: 'index.html', content: state.htmlCode },
    { name: 'style.css', content: state.cssCode },
    { name: 'script.js', content: state.jsCode },
    { name: 'notes.txt', content: state.notesText }
  ].filter((f) => Boolean(f.content && f.content.trim().length > 0));

  if (files.length === 0) {
    showToast('No documents or notes generated yet.', 'warn');
    return;
  }

  const zipBlob = createZipBlob(files);
  triggerDownloadBlob('50-pt-studio-bundle.zip', zipBlob);
  showToast(`Downloaded ZIP with ${files.length} file(s).`, 'success');
});

el.linkFileBtn.addEventListener('click', async () => {
  if (typeof window.showSaveFilePicker !== 'function') {
    showToast('Direct disk linking requires Chrome/Edge outside a sandbox. Use Download instead.', 'warn');
    return;
  }
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: 'notes.txt',
      types: [{ description: 'Text Files', accept: { 'text/plain': ['.txt'] } }]
    });
    state.fileHandle = handle;
    el.linkFileLabel.textContent = 'Linked';
    el.fileSyncBadge.textContent = 'Auto-saving to disk';
    el.fileSyncBadge.className = 'text-[10px] text-emerald-400';
    const writable = await handle.createWritable();
    await writable.write(state.notesText);
    await writable.close();
    showToast('Linked to local notes.txt!', 'success');
  } catch (err) {
    if (err.name !== 'AbortError') showToast('Could not link local file.', 'warn');
  }
});

document.querySelectorAll('#previewSubBar .vp-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    el.previewFrameWrapper.style.width = btn.dataset.vp;
    document.querySelectorAll('#previewSubBar .vp-btn').forEach((b) => {
      b.className = b === btn
        ? 'vp-btn px-2 py-0.5 rounded bg-indigo-600/25 text-indigo-200 border border-indigo-500/40'
        : 'vp-btn px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700';
    });
  });
});

el.refreshPreviewBtn.addEventListener('click', () => {
  renderLivePreview();
  showToast('Preview reloaded.', 'info');
});

el.openPreviewTabBtn.addEventListener('click', () => {
  const blob = new Blob([buildCombinedPreviewHtml({ includePreviewBridge: false })], { type: 'text/html;charset=utf-8' });
  window.open(URL.createObjectURL(blob), '_blank', 'noopener');
});

function setPromptCollapsed(collapsed) {
  if (collapsed) {
    el.buildForm.classList.add('hidden');
    el.promptCollapsedBar.classList.remove('hidden');
    el.promptCollapsedBar.classList.add('flex');
    const preview = (el.promptInput.value || state.userPrompt || 'Show Prompt & Setup Options...').trim();
    el.collapsedPromptPreview.textContent = preview;
  } else {
    el.promptCollapsedBar.classList.add('hidden');
    el.promptCollapsedBar.classList.remove('flex');
    el.buildForm.classList.remove('hidden');
  }
}

el.collapsePromptBtn.addEventListener('click', () => setPromptCollapsed(true));
el.expandPromptBtn.addEventListener('click', () => setPromptCollapsed(false));
el.collapsedPauseBtn.addEventListener('click', () => {
  if (state.abortController) state.abortController.abort();
});
el.collapsedResumeBtn.addEventListener('click', () => {
  if (!state.isRunning) runPipeline(false);
});

let lastMobileCodeTab = 'html';

function setMobileView(view) {
  document.querySelectorAll('#mobileBottomNav .mob-nav-btn').forEach((b) => {
    const active = b.dataset.mobileView === view;
    b.className = active
      ? 'mob-nav-btn flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-indigo-300'
      : 'mob-nav-btn flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-slate-400';
  });

  if (view === 'build') {
    el.leftPane.classList.remove('hidden');
    el.leftPane.classList.add('flex');
    el.rightPane.classList.add('hidden');
    el.rightPane.classList.remove('flex');
  } else {
    el.leftPane.classList.add('hidden');
    el.leftPane.classList.remove('flex');
    el.rightPane.classList.remove('hidden');
    el.rightPane.classList.add('flex');
    if (view === 'notes') switchTab('notes');
    else if (view === 'code') switchTab(lastMobileCodeTab);
    else if (view === 'preview') switchTab('preview');
  }
}

document.querySelectorAll('#mobileBottomNav .mob-nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => setMobileView(btn.dataset.mobileView));
});

document.querySelectorAll('#workspaceTabs .ws-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (['html', 'css', 'js'].includes(btn.dataset.tab)) lastMobileCodeTab = btn.dataset.tab;
  });
});

(function init() {
  initTimerWorker();
  registerServiceWorkerAndPwa();
  initBatteryMonitor();
  initNetworkMonitor();

  try {
    const savedCfg = JSON.parse(safeGet('wbs_studio_config', 'null'));
    if (savedCfg && savedCfg.projectType && STUDIO_CATALOG.projectTypes[savedCfg.projectType]) {
      state.studioConfig = {
        ...createDefaultStudioConfig(savedCfg.projectType),
        ...savedCfg
      };
    }
  } catch (_) {}

  try {
    const savedSettings = JSON.parse(safeGet('wbs_settings', 'null'));
    if (savedSettings) {
      state.model = savedSettings.model || state.model;
      state.thinkingLevel = savedSettings.thinkingLevel || state.thinkingLevel;
      state.maxOutputTokens = savedSettings.maxOutputTokens || state.maxOutputTokens;
      state.delayMs = savedSettings.delayMs || state.delayMs;
      state.defaultCooldownSec = savedSettings.defaultCooldownSec || state.defaultCooldownSec;
      state.retryBaseSec = savedSettings.retryBaseSec || state.retryBaseSec;
      state.retryCapSec = savedSettings.retryCapSec || state.retryCapSec;
      if (typeof savedSettings.bgKeepAliveEnabled === 'boolean') state.bgKeepAliveEnabled = savedSettings.bgKeepAliveEnabled;
      if (typeof savedSettings.osNotifEnabled === 'boolean') state.osNotifEnabled = savedSettings.osNotifEnabled;
      if (typeof savedSettings.autoResumeOnReload === 'boolean') state.autoResumeOnReload = savedSettings.autoResumeOnReload;
      el.modelBadge.textContent = `${state.model} • ${state.thinkingLevel}`;
    }
  } catch (_) {}

  try {
    const poolRaw = safeGet('gemini_api_keys_pool', '');
    if (poolRaw) {
      const parsed = JSON.parse(poolRaw);
      if (Array.isArray(parsed)) state.apiKeys = parsed;
    }
  } catch (_) {}

  const legacyKey = safeGet('gemini_api_key', '');
  if (legacyKey && state.apiKeys.length === 0) parseAndAddKeys(legacyKey);
  state.activeKeyIndex = Math.max(0, Number(safeGet('gemini_active_key_idx', '0')) || 0);
  if (state.activeKeyIndex >= state.apiKeys.length) state.activeKeyIndex = 0;

  state.userPrompt = safeGet('wbs_prompt', '');
  if (state.userPrompt) el.promptInput.value = state.userPrompt;

  state.notesText = safeGet('wbs_notes', '');
  state.htmlCode = safeGet('wbs_html', '');
  state.cssCode = safeGet('wbs_css', '');
  state.jsCode = safeGet('wbs_js', '');
  state.nextStepIndex = Number(safeGet('wbs_next_idx', '0')) || 0;
  state.sessionCalls = Number(safeGet('wbs_session_calls', '0')) || 0;
  state.sessionRetries = Number(safeGet('wbs_session_retries', '0')) || 0;
  const savedStartedAt = Number(safeGet('wbs_run_started_at', '0'));
  state.runStartedAt = Number.isFinite(savedStartedAt) && savedStartedAt > 0 ? savedStartedAt : null;
  const wasRunning = safeGet('wbs_was_running', '0') === '1';

  try {
    const metaRaw = safeGet('wbs_completed_meta', '') || safeGet('wbs_completed', '{}');
    state.completedSteps = JSON.parse(metaRaw) || {};
  } catch (_) {
    state.completedSteps = {};
  }

  if (navigator.storage && typeof navigator.storage.persisted === 'function') {
    navigator.storage.persisted().then((persisted) => {
      state.storagePersisted = Boolean(persisted);
      updatePersistenceHeaderUI();
    }).catch(() => {});
  }

  renderProjectTypeUI();
  renderBlueprintSummaryStrip();
  hydrateStepOutputsFromNotes();
  updateEditorsAndBadges();
  updateKeyPoolUI();
  updateKeepAliveBadges();
  updateBatteryUI();
  updateNetworkUI();
  updateProgressUI(0, false);
  renderChecklist(0, false);
  updateControlButtons();

  if (state.nextStepIndex > 0 && state.nextStepIndex < 50) {
    if (wasRunning && state.autoResumeOnReload && state.apiKeys.length > 0 && state.userPrompt) {
      el.pipelineStatusText.textContent = `Auto-resuming Step ${state.nextStepIndex + 1}/50...`;
      updateLiveNotificationBar({
        mode: 'running',
        title: `Auto-Resuming Step ${state.nextStepIndex + 1}/50`,
        detail: 'Picking up right where the build left off...',
        stepNum: state.nextStepIndex + 1
      });
      setTimeout(() => {
        if (!state.isRunning) runPipeline(false);
      }, 800);
    } else {
      el.pipelineStatusText.textContent = `Saved session at Step ${state.nextStepIndex}/50 — ready to Resume`;
      updateLiveNotificationBar({
        mode: 'paused',
        title: `Saved Session at Step ${state.nextStepIndex}/50`,
        detail: 'Tap Resume to continue building.',
        stepNum: state.nextStepIndex
      });
    }
  } else if (state.nextStepIndex >= 50) {
    el.pipelineStatusText.textContent = 'Previous 50-Step Build Loaded';
    updateLiveNotificationBar({
      mode: 'complete',
      title: 'Previous 50-Step Build Loaded',
      detail: 'Preview & downloads are ready.',
      stepNum: 50
    });
  }

  if (!state.timerWorker) setInterval(onHeartbeatTick, 1000);
  refreshIcons();
})();