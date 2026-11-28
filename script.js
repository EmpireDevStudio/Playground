// =========================================================================
// DYNAMIC STUDIO CATALOG: PLAIN-LANGUAGE MODES, VISUALS, SUB-MENUS & TECH
// =========================================================================
const STUDIO_CATALOG = {
  projectTypes: {
    app: {
      id: 'app',
      label: 'Web App',
      icon: 'layout-dashboard',
      shortTag: 'Everyday Interactive App',
      roleLens: 'An interactive everyday app with clear screens, saved progress, helpful onboarding, and smooth workflows on any device.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="10" y="10" width="140" height="14" rx="4" fill="#131c2e" stroke="#4f46e5" stroke-opacity=".6"/><rect x="10" y="29" width="42" height="51" rx="5" fill="#111827" stroke="#334155"/><rect x="58" y="29" width="92" height="24" rx="5" fill="#131c2e" stroke="#334155"/><rect x="58" y="57" width="44" height="23" rx="5" fill="#0f2933" stroke="#22d3ee" stroke-opacity=".5"/><rect x="106" y="57" width="44" height="23" rx="5" fill="#131c2e" stroke="#334155"/></svg>`,
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
        { id: 'print-share', label: 'Clean Print & Summary Export', desc: 'Format a clean printable summary or shareable snapshot of user data.' },
        { id: 'quick-capture', label: 'Instant Quick-Capture', desc: 'Add new items in one line from anywhere with Enter — no forms, no friction.' },
        { id: 'share-snapshot', label: 'Shareable Summary Snapshot', desc: 'One-tap clean snapshot of current status that can be copied or shared.' },
        { id: 'app-updater', label: 'GitHub Update Checker', desc: 'Checks your GitHub repo for a newer published version and refreshes the installed app in place.' }
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
        textureStyle: 'tex-plain',
        liveBackground: 'livebg-none',
        backlightStyle: 'bl-pill',
        lightBehaviour: 'light-studio',
        backlightColors: ['#6366f1', '#22d3ee'],
        backlightBehavior: 'static',
        backlightPhysics: 'none',
        backlightIntensity: 55,
        backlightSpread: 22,
        gameTypeId: 'gt-dodger',
        gameArtStyle: 'ga-flat',
        gameFlow: 'gf-straight',
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
      icon: 'wrench',
      shortTag: 'Fast Precision Workbench',
      roleLens: 'A fast, accurate workbench tool focused on instant live results, zero friction, batch handling, and one-click copy/export.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="8" y="8" width="52" height="74" rx="5" fill="#0f172a" stroke="#0ea5e9" stroke-opacity=".55"/><rect x="14" y="16" width="40" height="8" rx="2" fill="#1e293b"/><rect x="14" y="30" width="40" height="6" rx="3" fill="#22d3ee" fill-opacity=".6"/><rect x="14" y="42" width="28" height="6" rx="3" fill="#334155"/><rect x="66" y="8" width="86" height="74" rx="5" fill="#0b1220" stroke="#334155"/><path d="M76 64 L96 40 L114 52 L140 24" fill="none" stroke="#34d399" stroke-width="2.5"/></svg>`,
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
        { id: 'history-snapshots', label: 'Recent Runs History', desc: 'Quickly jump back to recent calculations or configurations.' },
        { id: 'paste-go', label: 'Paste & Go', desc: 'Drop raw text or data straight in and get instant results on the first paste.' },
        { id: 'pwa-offline', label: 'Installable Offline App', desc: 'Installs to the home screen and works fully offline with a tiny local cache.' },
        { id: 'app-updater', label: 'GitHub Update Checker', desc: 'Checks your GitHub repo for a newer published version and refreshes the installed app in place.' }
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
        textureStyle: 'tex-blueprint',
        liveBackground: 'livebg-none',
        backlightStyle: 'bl-state',
        lightBehaviour: 'light-studio',
        backlightColors: ['#0ea5e9', '#22d3ee'],
        backlightBehavior: 'state-aware',
        backlightPhysics: 'none',
        backlightIntensity: 50,
        backlightSpread: 18,
        gameTypeId: 'gt-slidepuzzle',
        gameArtStyle: 'ga-flat',
        gameFlow: 'gf-straight',
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
      icon: 'gamepad-2',
      shortTag: 'Playable Browser Game',
      roleLens: 'A smooth, responsive browser game with an addictive core loop, crisp controls on keyboard & touch, juicy feedback, and high replayability.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#050612"/><circle cx="80" cy="46" r="24" fill="none" stroke="#a855f7" stroke-opacity=".45" stroke-dasharray="4 3"/><polygon points="80,30 92,54 80,48 68,54" fill="#22d3ee"/><circle cx="42" cy="30" r="5" fill="#f43f5e"/><circle cx="122" cy="60" r="6" fill="#f59e0b"/><rect x="8" y="8" width="42" height="10" rx="5" fill="#1e1035" stroke="#a855f7" stroke-opacity=".6"/><rect x="114" y="8" width="38" height="10" rx="5" fill="#1e1035" stroke="#22d3ee" stroke-opacity=".6"/></svg>`,
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
        { id: 'practice-mode', label: 'Difficulty / Mode Selector', desc: 'Let players choose Chill, Standard, or Endless/Arcade pacing.' },
        { id: 'daily-challenge', label: 'Daily Challenge Seed', desc: 'A fresh everyone-plays-the-same daily board with its own best score.' },
        { id: 'assist-modes', label: 'Assist & Accessibility Modes', desc: 'One-tap assists (bigger hitboxes, slower speed, high contrast) so everyone can play.' },
        { id: 'gamepad-support', label: 'Controller / Gamepad Support', desc: 'Real Gamepad API support — D-pad, sticks and buttons map to the same controls as keyboard.' },
        { id: 'run-stats', label: 'Post-Run Stats Screen', desc: 'A satisfying results card after every run: score, best streak, accuracy, time — with one-tap retry.' },
        { id: 'settings-menu', label: 'In-Game Settings Menu', desc: 'Pause menu with sound, shake, difficulty and assist toggles — saved for next visit.' },
        { id: 'speedrun-timer', label: 'Speedrun / Time-Attack Timer', desc: 'A precise timer with personal-best splits for players who chase mastery.' },
        { id: 'app-updater', label: 'GitHub Update Checker', desc: 'Checks your GitHub repo for a newer published version and refreshes the installed app in place.' }
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
        textureStyle: 'tex-dotmatrix',
        liveBackground: 'livebg-stars',
        backlightStyle: 'bl-pill',
        lightBehaviour: 'light-rim',
        backlightColors: ['#a855f7', '#22d3ee'],
        backlightBehavior: 'pulse',
        backlightPhysics: 'embers',
        backlightIntensity: 70,
        backlightSpread: 26,
        gameTypeId: 'gt-dodger',
        gameArtStyle: 'ga-neonvector',
        gameFlow: 'gf-straight',
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
      icon: 'flask-conical',
      shortTag: 'Generative Art & Play',
      roleLens: 'An expressive creative playground blending generative visuals, live physics or sound, and tactile controls anyone can explore.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#060a14"/><path d="M12 64 Q45 14 82 48 T148 26" fill="none" stroke="#22d3ee" stroke-width="2.5"/><path d="M12 72 Q55 32 95 60 T148 40" fill="none" stroke="#6366f1" stroke-width="2" stroke-opacity=".7"/><circle cx="82" cy="48" r="6" fill="#34d399"/><rect x="38" y="70" width="84" height="12" rx="6" fill="#111827" stroke="#334155"/></svg>`,
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
        { id: 'zen-hide-ui', label: 'Hide UI / Zen Mode', desc: 'Hide all panels with one tap for pure full-screen immersion.' },
        { id: 'palette-lab', label: 'Editable Palette Studio', desc: 'Swap, randomize, and save color palettes live while the artwork reacts.' },
        { id: 'performance-hud', label: 'Live Performance HUD', desc: 'Tiny fps / particle counter overlay for curious creators.' },
        { id: 'app-updater', label: 'GitHub Update Checker', desc: 'Checks your GitHub repo for a newer published version and refreshes the installed app in place.' }
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
        textureStyle: 'tex-frosted',
        liveBackground: 'livebg-aurora',
        backlightStyle: 'bl-liquid',
        lightBehaviour: 'light-volumetric',
        backlightColors: ['#6366f1', '#a855f7'],
        backlightBehavior: 'hue-cycle',
        backlightPhysics: 'liquid',
        backlightIntensity: 60,
        backlightSpread: 30,
        gameTypeId: 'gt-physandbox',
        gameArtStyle: 'ga-lowpoly',
        gameFlow: 'gf-titlehub',
        css3: ['oklch-tokens', 'view-transitions', 'fluid-clamp-tabular', 'reduced-motion'],
        jsArch: ['central-state', 'delta-raf-loop', 'web-audio-synth', 'pointer-gesture-lock'],
        jsLibs: [],
        essentials: ['procedural-seed', 'param-hud', 'canvas-shader', 'snapshot-export', 'gallery-presets']
      }
    },
    free: {
      id: 'free',
      label: 'Free Create',
      icon: 'sparkles',
      shortTag: 'Open Hybrid Vision',
      roleLens: 'A boundary-free custom creation blending any mix of interactive storytelling, playful tools, mini-games, or bespoke experiments.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#080b14"/><circle cx="52" cy="45" r="20" fill="#6366f1" fill-opacity=".22" stroke="#6366f1"/><circle cx="104" cy="45" r="20" fill="#34d399" fill-opacity=".2" stroke="#34d399"/><rect x="64" y="31" width="32" height="28" rx="6" fill="#0f172a" stroke="#22d3ee"/><circle cx="80" cy="45" r="4" fill="#f59e0b"/></svg>`,
      samplePrompts: [
        { label: 'Hybrid World', prompt: 'Build an interactive Solar System Learning Playground that blends a real-time orbital simulator, clickable planet field notes, and a quick orbital-slingshot mini-challenge.' },
        { label: 'Story Forge', prompt: 'Build an interactive Branching Story & Atmosphere Studio where readers make choices, hear reactive Web Audio soundscapes, and inspect a live story map.' },
        { label: 'Habit RPG', prompt: 'Build a Cozy Daily Habit & Garden Companion where checking off real tasks grows procedural SVG plants and earns gentle chimes.' }
      ],
      categoryEssentials: [
        { id: 'hybrid-blend', label: 'Seamless Hybrid Flow', desc: 'Blends utility, play, and storytelling smoothly without jarring mode switches.' },
        { id: 'custom-metaphor', label: 'Original Spatial Metaphor', desc: 'Feels bespoke to your idea rather than looking like a standard SaaS template.' },
        { id: 'discoverable-magic', label: 'Delightful Hidden Surprises', desc: 'Rewards curiosity with tactile micro-animations, easter eggs, or live reactions.' },
        { id: 'portable-state', label: 'Easy Save & Share', desc: 'Saves progress locally and lets users export or reset cleanly anytime.' },
        { id: 'adaptive-hud', label: 'Calm, Focused Controls', desc: 'Keeps the main stage front-and-center while tucking extras into clean drawers.' },
        { id: 'multi-sensory', label: 'Optional Sound & Motion', desc: 'Gentle synthesized audio and smooth motion with instant mute/calm toggles.' },
        { id: 'share-link-state', label: 'Shareable State Link', desc: 'Encodes the whole current creation into a copyable URL anyone can open.' },
        { id: 'app-updater', label: 'GitHub Update Checker', desc: 'Checks your GitHub repo for a newer published version and refreshes the installed app in place.' }
      ],
      defaults: {
        targetPlatform: 'responsive-parity',
        dataPersistence: 'localstorage-json',
        complexity: 'balanced-complete',
        navStyle: 'floating-dock',
        starterExp: 'realistic-demo',
        sensoryAudio: 'web-audio-subtle',
        a11yMotion: 'wcag-aa-fluid',
        interfaceDesign: 'bento-grid',
        designStyle: 'glassmorphism',
        colorMood: 'indigo-slate',
        typographyStyle: 'friendly-rounded',
        elementStyle: 'pill-tactile',
        lightingStyle: 'ambient-aura',
        html5: ['semantic-landmarks', 'dialog-popover', 'inline-svg', 'canvas-surface', 'viewport-safe-area', 'file-blob-io'],
        textureStyle: 'tex-paper',
        liveBackground: 'livebg-orbs',
        backlightStyle: 'bl-duotone',
        lightBehaviour: 'light-natural',
        backlightColors: ['#34d399', '#22d3ee'],
        backlightBehavior: 'hover-brighten',
        backlightPhysics: 'none',
        backlightIntensity: 55,
        backlightSpread: 24,
        gameTypeId: 'gt-merge',
        gameArtStyle: 'ga-doodle',
        gameFlow: 'gf-titlehub',
        css3: ['oklch-tokens', 'container-queries', 'has-selector', 'view-transitions', 'fluid-clamp-tabular', 'reduced-motion'],
        jsArch: ['central-state', 'event-delegation', 'web-audio-synth', 'pointer-gesture-lock'],
        jsLibs: [],
        essentials: ['hybrid-blend', 'custom-metaphor', 'discoverable-magic', 'portable-state', 'adaptive-hud']
      }
    }
  },

  // Visual Reference Galleries for Platform, Complexity, Nav, Starter Exp
  platformOptions: [
    {
      id: 'responsive-parity',
      name: 'Both Phone & Computer',
      desc: 'Adapts fluidly from a 320px phone screen up to a wide desktop monitor.',
      bestFor: 'Almost any public web app, tracker, or shareable tool.',
      tradeoff: 'Avoids ultra-dense 5-column desktop-only layouts so mobile stays comfortable.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="14" y="16" width="84" height="58" rx="5" fill="#111827" stroke="#6366f1" stroke-opacity=".7"/><rect x="20" y="24" width="72" height="10" rx="2" fill="#1e293b"/><rect x="20" y="38" width="34" height="28" rx="3" fill="#172542"/><rect x="58" y="38" width="34" height="28" rx="3" fill="#1e293b"/><rect x="110" y="22" width="34" height="52" rx="6" fill="#0f172a" stroke="#22d3ee" stroke-opacity=".8"/><rect x="116" y="30" width="22" height="16" rx="2" fill="#172542"/><rect x="116" y="50" width="22" height="16" rx="2" fill="#1e293b"/></svg>`
    },
    {
      id: 'mobile-first-thumb',
      name: 'Phone First (Thumb-Friendly)',
      desc: 'Primary buttons sit at the bottom within easy one-handed thumb reach.',
      bestFor: 'On-the-go trackers, quick daily check-ins, mobile-first games.',
      tradeoff: 'Desktop view centers neatly like a focused mobile-style column.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="54" y="8" width="52" height="74" rx="9" fill="#111827" stroke="#22d3ee" stroke-opacity=".75"/><rect x="61" y="16" width="38" height="36" rx="4" fill="#1e293b"/><rect x="61" y="58" width="38" height="14" rx="7" fill="#6366f1"/><circle cx="80" cy="65" r="14" fill="#22d3ee" fill-opacity=".15"/></svg>`
    },
    {
      id: 'desktop-pro',
      name: 'Computer Power Workspace',
      desc: 'Side-by-side panels, rich keyboard shortcuts, and dense data visibility.',
      bestFor: 'Editors, calculators, analytics dashboards, developer/design tools.',
      tradeoff: 'Panels stack on phones, so mobile requires a little more scrolling.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="10" y="10" width="140" height="70" rx="5" fill="#0f172a" stroke="#475569"/><rect x="16" y="16" width="34" height="58" rx="3" fill="#1e293b"/><rect x="55" y="16" width="56" height="58" rx="3" fill="#131c2e" stroke="#6366f1" stroke-opacity=".5"/><rect x="116" y="16" width="28" height="58" rx="3" fill="#1e293b"/></svg>`
    },
    {
      id: 'fullscreen-arcade',
      name: 'Full-Screen Stage',
      desc: 'Edge-to-edge canvas with zero page scrolling and compact corner HUD.',
      bestFor: 'Games, particle sandboxes, drawing/music studios, immersive worlds.',
      tradeoff: 'Minimal room for long paragraphs of text—visuals lead the experience.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#04070e"/><rect x="4" y="4" width="152" height="82" rx="4" fill="#090d1a" stroke="#22d3ee" stroke-opacity=".5"/><circle cx="80" cy="45" r="20" fill="#6366f1" fill-opacity=".3" stroke="#22d3ee"/><rect x="10" y="10" width="32" height="9" rx="4" fill="#1e293b"/><rect x="118" y="10" width="32" height="9" rx="4" fill="#1e293b"/></svg>`
    },
    {
      id: 'tablet-split',
      name: 'Tablet Split View',
      desc: 'Two focused panels side-by-side on roomier screens; stacks neatly on phones.',
      bestFor: 'Compare-and-edit flows: notes + preview, list + detail, editor + live result.',
      tradeoff: 'On phones the panels stack vertically, so plan the primary panel first.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="30" y="12" width="100" height="66" rx="8" fill="#0f172a" stroke="#22d3ee" stroke-opacity=".5"/><line x1="80" y1="14" x2="80" y2="76" stroke="#334155" stroke-dasharray="3 3"/><rect x="38" y="20" width="36" height="50" rx="4" fill="#131c2e" stroke="#334155"/><rect x="86" y="20" width="36" height="50" rx="4" fill="#131c2e" stroke="#6366f1" stroke-opacity=".6"/></svg>`
    },
    {
      id: 'kiosk-display',
      name: 'Kiosk / Big Screen',
      desc: 'Extra-large type, giant touch targets, and minimal reading — built to be seen from a distance.',
      bestFor: 'Presentations, shared screens, events, kitchen counters, and gallery displays.',
      tradeoff: 'Far less information density per screen — content is split across simple steps.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="12" y="10" width="136" height="70" rx="6" fill="#0f172a" stroke="#475569"/><rect x="22" y="18" width="56" height="20" rx="4" fill="#6366f1" fill-opacity=".8"/><rect x="22" y="44" width="116" height="12" rx="6" fill="#131c2e"/><rect x="22" y="60" width="116" height="12" rx="6" fill="#1e293b"/></svg>`
    }
  ],

  complexityOptions: [
    {
      id: 'focused-minimal',
      name: 'Focused & Simple',
      desc: 'Does one core thing effortlessly well with zero clutter or extra menus.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="34" y="18" width="92" height="54" rx="8" fill="#111827" stroke="#34d399" stroke-opacity=".6"/><rect x="46" y="30" width="68" height="12" rx="4" fill="#1e293b"/><rect x="56" y="48" width="48" height="14" rx="6" fill="#34d399" fill-opacity=".8"/></svg>`
    },
    {
      id: 'balanced-complete',
      name: 'Balanced & Complete',
      desc: 'Polished everyday features, helpful filters, and clean secondary drawers.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="14" y="14" width="84" height="62" rx="6" fill="#111827" stroke="#6366f1" stroke-opacity=".7"/><rect x="104" y="14" width="42" height="29" rx="5" fill="#131c2e" stroke="#334155"/><rect x="104" y="47" width="42" height="29" rx="5" fill="#131c2e" stroke="#334155"/></svg>`
    },
    {
      id: 'powerhouse-deep',
      name: 'Deep Powerhouse',
      desc: 'Rich controls, analytics, presets, shortcuts, and deep customization.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="8" y="10" width="36" height="70" rx="4" fill="#111827" stroke="#334155"/><rect x="49" y="10" width="66" height="44" rx="4" fill="#131c2e" stroke="#22d3ee" stroke-opacity=".6"/><rect x="49" y="58" width="66" height="22" rx="4" fill="#111827" stroke="#334155"/><rect x="120" y="10" width="32" height="70" rx="4" fill="#111827" stroke="#334155"/></svg>`
    },
    {
      id: 'modular-progressive',
      name: 'Simple Core + Power Drawer',
      desc: 'Opens minimal and calm, then reveals deeper controls as the user grows curious.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="16" y="14" width="70" height="62" rx="8" fill="#111827" stroke="#34d399" stroke-opacity=".6"/><rect x="96" y="14" width="50" height="24" rx="5" fill="#131c2e" stroke="#334155"/><rect x="96" y="44" width="50" height="14" rx="5" fill="#131c2e" stroke="#334155"/><rect x="96" y="64" width="50" height="12" rx="5" fill="#131c2e" stroke="#6366f1" stroke-opacity=".7" stroke-dasharray="3 2"/></svg>`
    }
  ],

  navStyleOptions: [
    {
      id: 'single-screen',
      name: 'Single Screen',
      desc: 'Everything lives on one clear screen with zero page switching.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="14" y="12" width="132" height="66" rx="6" fill="#111827" stroke="#6366f1" stroke-opacity=".65"/><rect x="24" y="22" width="112" height="46" rx="4" fill="#1e293b"/></svg>`
    },
    {
      id: 'tabbed-views',
      name: 'Clean Tabs / Views',
      desc: 'Organized top or bottom tabs keep each screen spacious and focused.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="12" y="10" width="34" height="10" rx="3" fill="#6366f1"/><rect x="50" y="10" width="34" height="10" rx="3" fill="#1e293b"/><rect x="88" y="10" width="34" height="10" rx="3" fill="#1e293b"/><rect x="12" y="24" width="136" height="54" rx="5" fill="#111827" stroke="#334155"/></svg>`
    },
    {
      id: 'guided-steps',
      name: 'Step-by-Step Flow',
      desc: 'Guides users cleanly from Step 1 -> Step 2 -> Final Result.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><circle cx="40" cy="22" r="7" fill="#34d399"/><line x1="47" y1="22" x2="73" y2="22" stroke="#475569" stroke-width="2"/><circle cx="80" cy="22" r="7" fill="#6366f1"/><line x1="87" y1="22" x2="113" y2="22" stroke="#334155" stroke-width="2"/><circle cx="120" cy="22" r="7" fill="#1e293b" stroke="#475569"/><rect x="24" y="36" width="112" height="40" rx="6" fill="#111827" stroke="#334155"/></svg>`
    },
    {
      id: 'floating-dock',
      name: 'Floating Dock / HUD',
      desc: 'A sleek floating pill toolbar hovering over an open canvas.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#060a12"/><rect x="12" y="10" width="136" height="70" rx="6" fill="#0b1220" stroke="#1e293b"/><rect x="38" y="62" width="84" height="12" rx="6" fill="#111827" stroke="#22d3ee" stroke-opacity=".75"/></svg>`
    },
    {
      id: 'sidebar-rail',
      name: 'Slim Side Rail',
      desc: 'A slim icon rail on the edge that expands on hover or tap for power users.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="10" y="10" width="16" height="70" rx="5" fill="#131c2e" stroke="#6366f1" stroke-opacity=".6"/><circle cx="18" cy="20" r="2.5" fill="#6366f1"/><circle cx="18" cy="30" r="2.5" fill="#475569"/><circle cx="18" cy="40" r="2.5" fill="#475569"/><rect x="34" y="10" width="116" height="70" rx="6" fill="#111827" stroke="#334155"/></svg>`
    },
    {
      id: 'hub-dashboard',
      name: 'Home Hub Dashboard',
      desc: 'A central hub of cards that each open a focused room, tool, or view.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="55" y="32" width="50" height="26" rx="6" fill="#6366f1" fill-opacity=".8"/><rect x="18" y="14" width="42" height="18" rx="5" fill="#131c2e" stroke="#334155"/><rect x="100" y="14" width="42" height="18" rx="5" fill="#131c2e" stroke="#334155"/><rect x="18" y="58" width="42" height="18" rx="5" fill="#131c2e" stroke="#334155"/><rect x="100" y="58" width="42" height="18" rx="5" fill="#131c2e" stroke="#22d3ee" stroke-opacity=".5"/><line x1="38" y1="23" x2="70" y2="40" stroke="#334155" stroke-width="1.5"/><line x1="121" y1="23" x2="90" y2="40" stroke="#334155" stroke-width="1.5"/></svg>`
    }
  ],

  starterExpOptions: [
    {
      id: 'realistic-demo',
      name: 'Pre-Filled Realistic Examples',
      desc: 'Opens with realistic sample items ready to click, edit, or clear in 1 tap.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="16" y="14" width="128" height="16" rx="4" fill="#131c2e" stroke="#34d399" stroke-opacity=".5"/><rect x="16" y="36" width="128" height="16" rx="4" fill="#131c2e" stroke="#334155"/><rect x="16" y="58" width="128" height="16" rx="4" fill="#131c2e" stroke="#334155"/></svg>`
    },
    {
      id: 'quick-tour',
      name: 'Quick Interactive Hint',
      desc: 'Shows a friendly 1-line dismissible tip pointing to the main action.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="16" y="12" width="128" height="16" rx="4" fill="#312e81" stroke="#6366f1"/><rect x="16" y="34" width="128" height="44" rx="5" fill="#111827" stroke="#334155"/></svg>`
    },
    {
      id: 'template-picker',
      name: 'Starter Presets / Templates',
      desc: 'Offers 3–4 curated starting presets users can load and remix.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="14" y="18" width="40" height="54" rx="5" fill="#131c2e" stroke="#22d3ee" stroke-opacity=".65"/><rect x="60" y="18" width="40" height="54" rx="5" fill="#131c2e" stroke="#334155"/><rect x="106" y="18" width="40" height="54" rx="5" fill="#131c2e" stroke="#334155"/></svg>`
    },
    {
      id: 'clean-blank',
      name: 'Clean Blank Canvas',
      desc: 'Starts completely empty with an inviting centered "Create First" button.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="14" y="12" width="132" height="66" rx="6" fill="#0b101b" stroke="#1e293b" stroke-dasharray="4 3"/><rect x="52" y="38" width="56" height="14" rx="7" fill="#6366f1"/></svg>`
    },
    {
      id: 'bring-your-own',
      name: 'Bring Your Own Data',
      desc: 'A friendly drop zone invites users to import a file or paste data on first run.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="34" y="20" width="92" height="52" rx="6" fill="#0b101b" stroke="#1e293b" stroke-dasharray="4 3"/><path d="M80 26 L80 44 M80 44 L72 37 M80 44 L88 37" stroke="#34d399" stroke-width="2.5" fill="none"/><rect x="52" y="54" width="56" height="10" rx="5" fill="#131c2e" stroke="#334155"/></svg>`
    },
    {
      id: 'playground-first',
      name: 'Mini Playground First',
      desc: 'Users try the core interaction immediately — a tiny playable demo before any setup.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="12" y="12" width="136" height="50" rx="6" fill="#111827" stroke="#6366f1" stroke-opacity=".55"/><circle cx="52" cy="37" r="10" fill="#6366f1" fill-opacity=".7"/><rect x="80" y="27" width="24" height="20" rx="4" fill="#22d3ee" fill-opacity=".65"/><path d="M120 45 Q128 25 140 35" stroke="#34d399" stroke-width="2.5" fill="none"/><rect x="40" y="68" width="80" height="12" rx="6" fill="#131c2e" stroke="#334155"/></svg>`
    }
  ],

  // Conditional Sub-Menus Catalog
  subMenus: {
    modeDeepDive: {
      app: {
        title: 'Web App Workflow & Structure',
        subtitle: 'Fine-tune how your app organizes information and empowers users.',
        fields: [
          {
            key: 'appPrimaryView', label: 'Primary Way Data Is Shown',
            options: [
              { id: 'cards-board', label: 'Cards & Columns (Visual & tactile)' },
              { id: 'data-table', label: 'Sortable Table / List (Fast scanning)' },
              { id: 'timeline-cal', label: 'Timeline / Calendar (Time-based)' },
              { id: 'doc-canvas', label: 'Focused Editor / Sheet (Writing & creation)' }
            ]
          },
          {
            key: 'appPowerFeature', label: 'Signature Power Boost',
            options: [
              { id: 'cmd-palette', label: 'Quick Command Bar (Ctrl+K)' },
              { id: 'bulk-actions', label: 'Multi-Select & Bulk Actions' },
              { id: 'smart-tags', label: 'Color Tags & Smart Folders' },
              { id: 'live-analytics', label: 'Live Progress Charts & Insights' }
            ]
          },
          {
            key: 'appHomeStyle', label: 'First Screen Focus',
            options: [
              { id: 'dashboard-board', label: 'Overview Dashboard (Everything at a glance)' },
              { id: 'today-focus', label: 'Focused Today View (One priority at a time)' },
              { id: 'recent-first', label: 'Recent Items First (Jump back in fast)' },
              { id: 'create-first', label: 'Create Button Hero (Big add action)' }
            ]
          }
        ]
      },
      tool: {
        title: 'Utility / Tool Input & Output Engine',
        subtitle: 'Shape how users feed data in and get crisp results back out.',
        fields: [
          {
            key: 'toolInputMode', label: 'Primary Input Style',
            options: [
              { id: 'sliders-knobs', label: 'Live Sliders, Toggles & Steppers' },
              { id: 'code-text-editor', label: 'Raw Text / Code / Data Editor' },
              { id: 'file-dropzone', label: 'Drag & Drop File Processor' },
              { id: 'structured-form', label: 'Clean Structured Form Fields' }
            ]
          },
          {
            key: 'toolOutputMode', label: 'Primary Output Result',
            options: [
              { id: 'live-preview-card', label: 'Real-Time Visual Preview' },
              { id: 'table-diff', label: 'Structured Table / Side-by-Side Diff' },
              { id: 'copyable-snippet', label: '1-Click Copyable Code / Text' },
              { id: 'download-asset', label: 'Downloadable File / Image' }
            ]
          },
          {
            key: 'toolPrecisionMode', label: 'Input Precision Style',
            options: [
              { id: 'casual-drag', label: 'Casual Dragging (Friendly sliders & big handles)' },
              { id: 'pro-numeric', label: 'Pro Numeric (Exact values, arrow-key nudge)' },
              { id: 'hybrid-precision', label: 'Hybrid (Sliders + exact number boxes)' }
            ]
          }
        ]
      },
      game: {
        title: 'Game Mechanics, Pacing & Feel',
        subtitle: 'Dial in the exact gameplay session rhythm, controls and player feel.',
        fields: [
          {
            key: 'gamePacing', label: 'Session & Progression Structure',
            options: [
              { id: 'endless-highscore', label: 'Endless Escalating High-Score' },
              { id: 'level-campaign', label: 'Progressive Stages / Levels' },
              { id: 'quick-60s', label: 'Quick 60-Second Blitz Rounds' },
              { id: 'mission-based', label: 'Goal / Mission-Based Rounds' }
            ]
          },
          {
            key: 'gameCamera', label: 'Camera & Playfield View',
            options: [
              { id: 'side-view', label: 'Side View (runner / platformer)' },
              { id: 'top-down', label: 'Top-Down (shooter / snake)' },
              { id: 'isometric', label: 'Isometric (tactics / diorama)' },
              { id: 'one-screen-arena', label: 'One-Screen Arena (fixed stage)' },
              { id: 'pseudo-3d', label: 'Pseudo-3D Perspective (racing / tunnel)' }
            ]
          },
          {
            key: 'gameControls', label: 'Primary Control Scheme',
            options: [
              { id: 'keyboard-classic', label: 'Keyboard Classic (WASD / Arrows / Space)' },
              { id: 'touch-tap', label: 'Touch Taps & Holds (one-thumb play)' },
              { id: 'swipe-gestures', label: 'Swipe Gestures (4-direction flicks)' },
              { id: 'pointer-aim', label: 'Pointer Aim & Click (mouse / touch target)' },
              { id: 'hybrid-both', label: 'Hybrid — Full Keyboard + Touch parity' },
              { id: 'tilt-device', label: 'Device Tilt (accelerometer, mobile)' }
            ]
          },
          {
            key: 'gameJuice', label: 'Game Feel & Juice Intensity',
            options: [
              { id: 'max-juice', label: 'High Juice (Particles, screen shake, popups)' },
              { id: 'crisp-tactile', label: 'Crisp & Tactile (Clean flashes & chimes)' },
              { id: 'calm-zen', label: 'Calm & Zen (Gentle fades, zero shake)' }
            ]
          },
          {
            key: 'gameFailLoop', label: 'What Happens After Failing',
            options: [
              { id: 'instant-retry', label: 'Instant Retry (one tap, zero menus)' },
              { id: 'lives-system', label: 'Lives System (3 tries, then wave reset)' },
              { id: 'checkpoint', label: 'Checkpoint Restart (resume from last safe point)' },
              { id: 'gentle-penalty', label: 'Gentle Penalty (small score cost, keep playing)' }
            ]
          }
        ]
      },
      experimental: {
        title: 'Creative Sandbox Medium & Play',
        subtitle: 'Define what kind of expressive playground this is and how people play with it.',
        fields: [
          {
            key: 'expMedium', label: 'Primary Creative Medium',
            options: [
              { id: '2d-particles', label: '2D Particle / Flow-Field Canvas' },
              { id: '3d-webgl', label: 'Interactive 3D Scene / Sculpting' },
              { id: 'audio-synth', label: 'Visual Music Synth & Sequencer' },
              { id: 'kinetic-type', label: 'Kinetic Typography & Poster Art' }
            ]
          },
          {
            key: 'expInteraction', label: 'How Users Manipulate It',
            options: [
              { id: 'direct-brush', label: 'Direct Pointer Brush / Paint / Attract' },
              { id: 'physics-fling', label: 'Grab, Drag & Fling Objects' },
              { id: 'sliders-seed', label: 'Live Parameter Sliders + Randomize Seed' }
            ]
          },
          {
            key: 'expPaletteMode', label: 'Color Palette Behavior',
            options: [
              { id: 'fixed-palette', label: 'Curated Fixed Palettes (Hand-picked harmony)' },
              { id: 'user-editable', label: 'User-Editable Palette (Tune every hue live)' },
              { id: 'reactive-shift', label: 'Motion-Reactive Hues (Colors follow the flow)' }
            ]
          }
        ]
      },
      free: {
        title: 'Free Create — Hybrid Vision Mixer',
        subtitle: 'Blend different disciplines together into something completely original.',
        fields: [
          {
            key: 'freeBlend', label: 'What Worlds Are You Blending?',
            options: [
              { id: 'app-game-blend', label: 'Gamified App (Tasks/habits meet RPG/garden)' },
              { id: 'tool-art-blend', label: 'Playful Toy-Tool (Utility with generative visuals)' },
              { id: 'story-interactive', label: 'Interactive Story / Living World' },
              { id: 'total-wildcard', label: 'Pure Unconventional Experiment' }
            ]
          },
          {
            key: 'freeStructure', label: 'Overall Spatial Metaphor',
            options: [
              { id: 'spatial-desk', label: 'Tactile Desk / Workbench Metaphor' },
              { id: 'stage-performer', label: 'Living Stage / World Metaphor' },
              { id: 'notebook-lab', label: 'Interactive Field Notebook Metaphor' }
            ]
          },
          {
            key: 'freeDelightLevel', label: 'Delight & Surprise Level',
            options: [
              { id: 'subtle-magic', label: 'Subtle Magic (Quiet delightful touches)' },
              { id: 'frequent-sparkle', label: 'Frequent Sparkle (Visible rewards everywhere)' },
              { id: 'seasonal-magic', label: 'Seasonal Surprises (Festive one-offs)' }
            ]
          }
        ]
      }
    },

    audioEngine: {
      title: 'Sound Engine Tuning (Unlocked by Built-In Audio)',
      subtitle: 'Click "Test Sound" on any character to hear how your app will sound.',
      characters: [
        { id: 'warm-marimba', label: 'Warm Marimba / Sine', desc: 'Gentle, woody, pleasant tones ideal for daily apps & calm games.' },
        { id: 'retro-8bit', label: 'Crisp Retro 8-Bit', desc: 'Nostalgic square/triangle chiptune bleeps & power-up arpeggios.' },
        { id: 'scifi-fm', label: 'Futuristic Sci-Fi FM', desc: 'Glassy harmonic chimes and sleek telemetry sweeps.' },
        { id: 'soft-mech', label: 'Soft Mechanical Clicks', desc: 'Ultra-subtle tactile switch clicks with minimal tonal pitch.' },
        { id: 'glass-bell', label: 'Crisp Glass Bells', desc: 'Bright crystalline chimes with a silky decay for wins & unlocks.' },
        { id: 'lofi-warm', label: 'Lo-Fi Warm Keys', desc: 'Soft damped piano-like tones with a cozy, mellow character.' }
      ],
      triggers: [
        { id: 'milestones-only', label: 'Key Actions & Wins Only (Calm)' },
        { id: 'all-taps', label: 'Every Button Tap & Slider Tick (Tactile)' },
        { id: 'ambient-events', label: 'Optional Ambient Drone + Events' },
        { id: 'errors-too', label: 'Everything incl. Gentle Error Cues' }
      ]
    },

    persistenceBackup: {
      title: 'Save & Backup Fine-Tuning (Unlocked by Auto-Save)',
      fields: [
        {
          key: 'saveIndicator', label: 'Save Status Visibility',
          options: [
            { id: 'subtle-pill', label: 'Subtle "Saved" Micro-Badge' },
            { id: 'silent-auto', label: 'Silent Instant Auto-Save' }
          ]
        },
        {
          key: 'backupFormat', label: 'User Backup & Reset Controls',
          options: [
            { id: 'json-file', label: 'Download & Restore JSON File' },
            { id: 'csv-export', label: 'Export Spreadsheet (CSV)' },
            { id: 'both-formats', label: 'Both JSON Backup + CSV Export' }
          ]
        }
      ]
    },

    visualFinish: {
      title: 'Surface Finish & Atmosphere Tuning',
      cornerRadius: [
        { id: 'sharp', label: 'Crisp & Sharp (4px)' },
        { id: 'balanced', label: 'Modern Rounded (12px)' },
        { id: 'pillowy', label: 'Soft & Pillowy (20px)' }
      ],
      density: [
        { id: 'spacious', label: 'Airy & Spacious' },
        { id: 'balanced', label: 'Balanced' },
        { id: 'compact', label: 'Compact & Dense' }
      ],
      texture: [
        { id: 'clean-solid', label: 'Clean Solid Canvas' },
        { id: 'dot-grid', label: 'Subtle Blueprint Dot Grid' },
        { id: 'gradient-mesh', label: 'Soft Ambient Gradient Mesh' },
        { id: 'grid-paper', label: 'Faint Blueprint Grid Lines' },
        { id: 'noise-film', label: 'Film Grain Softness' }
      ]
    },

    textureTuning: {
      title: 'Texture Depth & Placement Tuning',
      subtitle: 'Control how strongly the texture appears and where it is applied.',
      fields: [
        {
          key: 'textureDepth', label: 'Texture Strength',
          options: [
            { id: 'subtle', label: 'Subtle Whisper (barely there — adds depth, not noise)' },
            { id: 'medium', label: 'Balanced Presence (clearly felt, never distracting)' },
            { id: 'bold', label: 'Bold Statement (texture is part of the identity)' }
          ]
        },
        {
          key: 'texturePlacement', label: 'Where the Texture Lives',
          options: [
            { id: 'background-only', label: 'Page Background Only' },
            { id: 'cards-too', label: 'Background + Card Surfaces' },
            { id: 'immersive', label: 'Everywhere (background, cards, panels & modals)' }
          ]
        },
        {
          key: 'textureMotion', label: 'Texture Motion Behaviour',
          options: [
            { id: 'static', label: 'Perfectly Static (fixed like real material)' },
            { id: 'gentle-drift', label: 'Gentle Drift (slow 60-120s material crawl)' },
            { id: 'pointer-parallax', label: 'Pointer Parallax (texture leans with the cursor)' }
          ]
        }
      ]
    },

    liveBgTuning: {
      title: 'Live Background Tuning',
      subtitle: 'Dial the density, speed, and how the living layer reacts to the user.',
      fields: [
        {
          key: 'liveBgDensity', label: 'Element Density',
          options: [
            { id: 'sparse', label: 'Sparse & Serene (few elements, lots of calm)' },
            { id: 'balanced', label: 'Balanced Field (comfortable middle)' },
            { id: 'rich', label: 'Rich & Lively (busy, atmospheric)' }
          ]
        },
        {
          key: 'liveBgSpeed', label: 'Motion Speed',
          options: [
            { id: 'calm', label: 'Calm (very slow — meditation pace)' },
            { id: 'steady', label: 'Steady (clearly moving, still relaxing)' },
            { id: 'lively', label: 'Lively (energetic, playful)' }
          ]
        },
        {
          key: 'liveBgInteraction', label: 'How It Reacts to the User',
          options: [
            { id: 'ambient', label: 'Purely Ambient (ignores the user completely)' },
            { id: 'pointer-react', label: 'Reacts to Pointer (elements drift near the cursor)' },
            { id: 'scroll-react', label: 'Reacts to Scroll (parallax tied to page position)' },
            { id: 'event-react', label: 'Reacts to App Events (celebrates wins, calms on errors)' }
          ]
        },
        {
          key: 'liveBgLayering', label: 'Layer Placement',
          options: [
            { id: 'behind-all', label: 'Behind Everything (content floats on glass above)' },
            { id: 'subtle-foreground', label: '+ Faint Forefront Dust (a few elements drift above content)' }
          ]
        },
        {
          key: 'liveBgFallback', label: 'Performance Fallback',
          options: [
            { id: 'auto-pause', label: 'Auto-Pause (hidden tab / low battery stops motion)' },
            { id: 'reduce-motion-respect', label: 'Honor Reduce-Motion (static poster instead)' },
            { id: 'always-on', label: 'Always On (user explicitly chose the motion)' }
          ]
        }
      ]
    },

    lightAdvanced: {
      title: 'Advanced Light Behaviour Tuning',
      subtitle: 'Fine-tune direction, softness, shadows and how light responds to the user.',
      fields: [
        {
          key: 'lightDirection', label: 'Light Source Direction',
          options: [
            { id: 'top-left', label: 'Top-Left (classic reading light)' },
            { id: 'top-center', label: 'Top-Center (softbox overhead)' },
            { id: 'all-around', label: 'All-Around (ambient, directionless)' },
            { id: 'bottom-up', label: 'Bottom-Up (dramatic, stage-lit)' },
            { id: 'follow-pointer', label: 'Follows the Pointer (living spotlight)' }
          ]
        },
        {
          key: 'lightSoftness', label: 'Light Softness',
          options: [
            { id: 'crisp', label: 'Crisp (sharp, small, defined shadows)' },
            { id: 'soft', label: 'Soft (blurred, feathered shadows)' },
            { id: 'diffused', label: 'Heavily Diffused (barely-there shadows)' }
          ]
        },
        {
          key: 'shadowCasting', label: 'Shadow Casting',
          options: [
            { id: 'none', label: 'No Cast Shadows (flat & calm)' },
            { id: 'soft', label: 'Soft Shadows (one gentle drop shadow)' },
            { id: 'layered-contact', label: 'Layered + Contact (multi-layer + tight contact shadow)' }
          ]
        },
        {
          key: 'lightTemp', label: 'Color Temperature',
          options: [
            { id: 'warm', label: 'Warm (2700K sunset comfort)' },
            { id: 'neutral', label: 'Neutral (clean daylight white)' },
            { id: 'cool', label: 'Cool (6500K blue-hour focus)' },
            { id: 'dynamic', label: 'Dynamic (shifts with time of day or app state)' }
          ]
        },
        {
          key: 'specularLevel', label: 'Specular Highlights',
          options: [
            { id: 'matte', label: 'Matte (zero shine — pure function)' },
            { id: 'satin', label: 'Satin (subtle sheen on top edges)' },
            { id: 'glossy', label: 'Glossy (visible light catch and reflections)' }
          ]
        },
        {
          key: 'lightParallax', label: 'Light & Depth Parallax',
          options: [
            { id: 'static', label: 'Static Rig (light never moves)' },
            { id: 'subtle-shift', label: 'Subtle Shift (light eases with scroll)' },
            { id: 'depth-layers', label: 'Depth Layers (multi-layer shadows track pointer)' }
          ]
        }
      ]
    },

    backlightEngine: {
      title: 'Back-Light Colour & Behaviour Engine',
      subtitle: 'The glow behind toggles, buttons, cards and inputs — tuned element by element.',
      behaviors: [
        { id: 'static', label: 'Steady Glow (always on, calm)' },
        { id: 'hue-cycle', label: 'Slow Hue Cycle (colors drift through the wheel)' },
        { id: 'rainbow-sweep', label: 'Rainbow Sweep (gradient slides around the element)' },
        { id: 'hover-brighten', label: 'Brightens on Hover / Touch (reward interaction)' },
        { id: 'state-aware', label: 'State-Aware (ON = warm glow, OFF = dim, ERROR = rose)' },
        { id: 'pulse', label: 'Pulse with Activity (beats when work is happening)' }
      ],
      physics: [
        { id: 'none', label: 'Pure Glow (no particles — cleanest)' },
        { id: 'embers', label: 'Rising Embers (tiny warm sparks float up behind)' },
        { id: 'liquid', label: 'Liquid Light (glow flows & morphs like lava lamp)' },
        { id: 'orbit', label: 'Orbiting Sparks (sparks circle the element)' }
      ],
      presets: [
        { label: 'Apple Cyan', colors: ['#22d3ee', '#0ea5e9'] },
        { label: 'Indigo Dusk', colors: ['#6366f1', '#a855f7'] },
        { label: 'Mint Fresh', colors: ['#34d399', '#a3e635'] },
        { label: 'Sunset', colors: ['#f59e0b', '#f43f5e'] },
        { label: 'Candy', colors: ['#f472b6', '#c084fc'] },
        { label: 'Neon Trio', colors: ['#22d3ee', '#a855f7', '#f43f5e'] },
        { label: 'Mono Ice', colors: ['#e0f2fe'] }
      ]
    },    updateChecker: {
      title: 'GitHub Update Checker Tuning (Unlocked by Update Checker)',
      subtitle: 'Generated apps can check your GitHub repo for a newer version and update themselves in place — perfect for GitHub Pages installs.',
      fields: [
        {
          key: 'ghCheckTiming', label: 'When to Check for Updates',
          options: [
            { id: 'launch-silent', label: 'Silently on Launch (Badge if newer)' },
            { id: 'manual-only', label: 'Manual Button Only (User asks)' },
            { id: 'launch-daily', label: 'Launch + Daily Silent Check' }
          ]
        },
        {
          key: 'ghUpdateUx', label: 'Update Experience',
          options: [
            { id: 'badge-prompt', label: 'Small Badge + One-Tap Update' },
            { id: 'dialog-changelog', label: 'Dialog with Changelog & Update' },
            { id: 'full-screen', label: 'Full Update Splash Screen' }
          ]
        },
        {
          key: 'ghVersionSource', label: 'Where the Version Lives',
          options: [
            { id: 'manifest-json', label: 'manifest.json version field' },
            { id: 'version-json', label: 'version.json { version, notes }' },
            { id: 'release-tag', label: 'Latest GitHub Release tag' }
          ]
        }
      ]
    },

    libraryTuning: {
      threejs: {
        title: '3D Scene & Camera Setup (Unlocked by Three.js)',
        camera: [
          { id: 'orbit', label: 'Orbit & Zoom (Mouse/Touch drag)' },
          { id: 'isometric', label: 'Fixed Isometric Diorama' },
          { id: 'first-person', label: 'First-Person / Fly Camera' }
        ],
        lighting: [
          { id: 'studio-3pt', label: 'Clean 3-Point Studio Light' },
          { id: 'neon-cyber', label: 'Moody Neon Rim Lights' },
          { id: 'daylight-sky', label: 'Bright Daylight Hemisphere' }
        ]
      },
      charts: {
        title: 'Data Visualization Setup (Unlocked by Chart.js / D3)',
        chartType: [
          { id: 'line-area', label: 'Smooth Line & Area Trends' },
          { id: 'bar-compare', label: 'Grouped / Stacked Bars' },
          { id: 'donut-gauge', label: 'Donut Breakdown & Gauges' },
          { id: 'network-graph', label: 'Interactive Nodes / Custom SVG' }
        ],
        interactivity: [
          { id: 'hover-tooltips', label: 'Rich Hover Tooltips' },
          { id: 'click-filter', label: 'Click Chart Segment to Filter' },
          { id: 'live-stream', label: 'Smooth Live-Updating Series' }
        ]
      },
      matterjs: {
        title: '2D Physics World Rules (Unlocked by Matter.js)',
        gravity: [
          { id: 'earth-down', label: 'Standard Downward Gravity' },
          { id: 'zero-g', label: 'Zero-Gravity Floating Space' },
          { id: 'toggleable', label: 'User-Toggleable Gravity Slider' }
        ],
        bounds: [
          { id: 'solid-walls', label: 'Bouncy Solid Screen Walls' },
          { id: 'open-abyss', label: 'Open Floor / Endless Drop' }
        ]
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
    },
    {
      id: 'kanban-lanes',
      name: 'Columns & Swimlanes',
      desc: 'Best for task flows: cards drag across columns that each tell a story.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b14"/><rect x="10" y="10" width="44" height="70" rx="5" fill="#0f172a" stroke="#334155"/><rect x="58" y="10" width="44" height="70" rx="5" fill="#0f172a" stroke="#334155"/><rect x="106" y="10" width="44" height="70" rx="5" fill="#0f172a" stroke="#334155"/><rect x="15" y="16" width="34" height="16" rx="3" fill="#6366f1"/><rect x="15" y="36" width="34" height="12" rx="3" fill="#1e293b"/><rect x="63" y="16" width="34" height="12" rx="3" fill="#22d3ee" fill-opacity=".7"/><rect x="111" y="16" width="34" height="20" rx="3" fill="#34d399" fill-opacity=".6"/></svg>`
    },
    {
      id: 'spatial-canvas',
      name: 'Spatial Infinite Canvas',
      desc: 'Best for mind-maps & worlds: draggable, zoomable nodes connected on an open canvas.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#060a12"/><circle cx="50" cy="30" r="11" fill="#131c2e" stroke="#6366f1"/><circle cx="112" cy="26" r="9" fill="#131c2e" stroke="#22d3ee"/><circle cx="84" cy="62" r="13" fill="#131c2e" stroke="#34d399"/><path d="M61 34 L103 27 M58 39 L74 54 M100 35 L88 56" stroke="#334155" stroke-width="1.5"/></svg>`
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
    },
    {
      id: 'nordic-frost',
      name: 'Nordic Frost',
      desc: 'Pale glacier blues and misty grays — calm, airy Scandinavian clarity.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#eef4f8"/><rect x="16" y="14" width="128" height="62" rx="10" fill="#ffffff" stroke="#d3e2ec"/><rect x="26" y="24" width="60" height="9" rx="4" fill="#33566e"/><rect x="26" y="40" width="108" height="22" rx="6" fill="#e9f1f6" stroke="#c9dbe7"/><circle cx="128" cy="24" r="5" fill="#7fb3d5"/></svg>`
    },
    {
      id: 'sunset-pop',
      name: 'Sunset Pop',
      desc: 'Warm orange-to-pink gradients with playful rounded cards.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><linearGradient id="sunsetPop1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#db2777"/></linearGradient></defs><rect width="160" height="90" fill="url(#sunsetPop1)"/><rect x="20" y="16" width="120" height="58" rx="12" fill="#fff7ed" fill-opacity=".94"/><rect x="32" y="28" width="56" height="10" rx="5" fill="#f97316"/><rect x="32" y="46" width="94" height="16" rx="8" fill="#ffe4e6" stroke="#fda4af"/></svg>`
    },
    {
      id: 'mono-ink',
      name: 'Monochrome Ink',
      desc: 'Bold black-on-white editorial blocks — maximum contrast, zero color noise.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#fafafa"/><rect x="18" y="14" width="124" height="62" rx="4" fill="#ffffff" stroke="#111111"/><rect x="28" y="24" width="70" height="9" fill="#111111"/><rect x="28" y="40" width="104" height="2" fill="#111111"/><rect x="28" y="48" width="104" height="2" fill="#111111"/><rect x="28" y="56" width="64" height="2" fill="#111111"/><rect x="112" y="22" width="26" height="14" rx="2" fill="#111111"/></svg>`
    },
    {
      id: 'luxury-noir',
      name: 'Luxury Noir Gold',
      desc: 'Deep black lacquer surfaces with refined champagne-gold accents.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0a0c"/><rect x="16" y="14" width="128" height="62" rx="8" fill="#121216" stroke="#b08d3e" stroke-opacity=".85"/><rect x="26" y="24" width="58" height="9" rx="2" fill="#d9c07f"/><rect x="26" y="42" width="108" height="18" rx="3" fill="#0d0d10" stroke="#b08d3e" stroke-opacity=".5"/><rect x="118" y="24" width="16" height="12" rx="2" fill="none" stroke="#b08d3e"/></svg>`
    }
  ],

  colorMoods: [
    { id: 'indigo-slate', name: 'Midnight Indigo', desc: 'Deep slate with indigo & sky accents', colors: ['#090d14', '#1e293b', '#6366f1', '#22d3ee'] },
    { id: 'ocean-cyan', name: 'Oceanic Teal', desc: 'Crisp navy with aqua & mint highlights', colors: ['#06131f', '#132a3e', '#0ea5e9', '#2dd4bf'] },
    { id: 'amber-charcoal', name: 'Warm Gold & Charcoal', desc: 'Rich charcoal with warm amber glow', colors: ['#111113', '#27272a', '#f59e0b', '#fb7185'] },
    { id: 'emerald-forest', name: 'Emerald Sage', desc: 'Deep forest dark with fresh mint', colors: ['#07120e', '#132920', '#10b981', '#a3e635'] },
    { id: 'violet-neon', name: 'Electric Arcade', desc: 'High-energy purple, magenta & cyan', colors: ['#090514', '#1e1035', '#a855f7', '#22d3ee'] },
    { id: 'crisp-daylight', name: 'Clean Daylight', desc: 'Bright airy whites with cobalt blue', colors: ['#f8fafc', '#e2e8f0', '#2563eb', '#0f172a'] },
    { id: 'rose-quartz', name: 'Rose Quartz', desc: 'Deep wine-dark base with soft pink glow', colors: ['#160d13', '#2a1a24', '#f472b6', '#fda4af'] },
    { id: 'deep-sea', name: 'Deep Sea', desc: 'Abyssal navy with luminous aqua life', colors: ['#03121c', '#0a2740', '#38bdf8', '#67e8f9'] },
    { id: 'solar-flare', name: 'Solar Flare', desc: 'Ember-dark base with blazing orange energy', colors: ['#180d04', '#36200a', '#f59e0b', '#fb923c'] },
    { id: 'grape-soda', name: 'Grape Soda', desc: 'Fizzy purple base with bright fuchsia highlights', colors: ['#10081d', '#241243', '#c084fc', '#f0abfc'] },
    { id: 'matcha-latte', name: 'Matcha Latte', desc: 'Calm deep-green base with fresh lime foam', colors: ['#101408', '#232b16', '#84cc16', '#d9f99d'] }
  ],

  typographyStyles: [
    { id: 'clean-modern', name: 'Clean Modern', desc: 'Crisp everyday sans-serif (Inter / system) for instant clarity.', sampleFont: "'Inter', sans-serif" },
    { id: 'tech-mono', name: 'Technical & Precision', desc: 'Clean UI sans paired with monospace numbers & telemetry.', sampleFont: "'JetBrains Mono', monospace" },
    { id: 'editorial-serif', name: 'Editorial Magazine', desc: 'Refined serif headlines paired with comfortable reading text.', sampleFont: "Georgia, 'Times New Roman', serif" },
    { id: 'friendly-rounded', name: 'Warm & Friendly', desc: 'Approachable rounded headings with relaxed, inviting spacing.', sampleFont: "ui-rounded, 'SF Pro Rounded', 'Inter', sans-serif" },
    { id: 'display-poster', name: 'Bold Poster Impact', desc: 'Punchy ultra-bold headlines that grab attention instantly.', sampleFont: "'Archivo Black', 'Arial Black', Impact, sans-serif" },
    { id: 'handwritten-warm', name: 'Handwritten Warmth', desc: 'Playful handwritten accents for cozy, personal-feeling creations.', sampleFont: "'Patrick Hand', 'Segoe Print', 'Comic Sans MS', cursive" }
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
    },
    {
      id: 'glass-outline',
      name: 'Frosted Outline Chips',
      desc: 'Translucent outlined pills that hover like glass coasters over the page.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#080c16"/><rect x="20" y="18" width="120" height="54" rx="10" fill="#ffffff" fill-opacity=".06" stroke="#ffffff" stroke-opacity=".45"/><rect x="30" y="28" width="52" height="12" rx="6" fill="#ffffff" fill-opacity=".12"/><rect x="30" y="46" width="100" height="14" rx="7" fill="none" stroke="#22d3ee" stroke-opacity=".6"/></svg>`
    },
    {
      id: 'solid-retro',
      name: 'Retro Solid Tabs',
      desc: 'Chunky solid tabs and buttons with crisp 90s software nostalgia.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#101425"/><rect x="22" y="20" width="60" height="22" rx="3" fill="#4f46e5"/><rect x="22" y="20" width="60" height="22" rx="3" fill="none" stroke="#0b0e1c"/><rect x="88" y="20" width="50" height="22" rx="3" fill="#22d3ee" fill-opacity=".85"/><rect x="22" y="50" width="116" height="14" rx="3" fill="#1e293b" stroke="#0b0e1c"/></svg>`
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
    },
    {
      id: 'dusk-glow',
      name: 'Dusk Horizon Glow',
      desc: 'A violet-to-night gradient glow rising behind key surfaces.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><linearGradient id="duskGlow1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#070a10"/></linearGradient></defs><rect width="160" height="90" fill="url(#duskGlow1)"/><rect x="24" y="22" width="112" height="48" rx="9" fill="#0e1523" fill-opacity=".92" stroke="#a78bfa" stroke-opacity=".45"/></svg>`
    },
    {
      id: 'spotlight-focus',
      name: 'Tight Spotlight Focus',
      desc: 'A soft pool of light exactly on the active content — everything else recedes.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><radialGradient id="spotFocus1" cx="50%" cy="42%" r="38%"><stop offset="0%" stop-color="#f8fafc" stop-opacity=".18"/><stop offset="100%" stop-color="#05070c" stop-opacity="0"/></radialGradient></defs><rect width="160" height="90" fill="#05070c"/><circle cx="80" cy="40" r="44" fill="url(#spotFocus1)"/><rect x="46" y="24" width="68" height="40" rx="8" fill="#111827" stroke="#475569"/></svg>`
    }
  ],

  // =========================================================================
  // SURFACE TEXTURE LIBRARY — each texture is a completely unique feel,
  // paired with the EXACT CSS recipe the final build must use.
  // =========================================================================
  textureDesigns: [
    {
      id: 'tex-plain', name: 'Pure Plain', feel: 'Flat & Calm',
      desc: 'Zero pattern, zero noise — pure clean surface so typography and content do the talking.',
      bestFor: 'Reading apps, admin panels, minimal tools.',
      swatch: 'texw-plain',
      code: 'background-color: var(--surface); /* no texture layer at all */'
    },
    {
      id: 'tex-paper', name: 'Warm Paper Grain', feel: 'Soft & Organic',
      desc: 'Fiber-flecked warm ivory like a favourite notebook — quiet, human, never sterile.',
      bestFor: 'Journal apps, notes, cozy dashboards.',
      swatch: 'texw-paper',
      code: 'background-color:#f7f1e6; background-image: radial-gradient(rgba(120,90,50,.06) .5px, transparent .5px), radial-gradient(rgba(120,90,50,.05) .5px, transparent .5px); background-size: 3px 3px, 7px 7px; background-position: 0 0, 2px 3px;'
    },
    {
      id: 'tex-blueprint', name: 'Blueprint Grid', feel: 'Technical & Precise',
      desc: 'Hairline engineering grid — the page feels drafted, deliberate and measurable.',
      bestFor: 'Dev tools, planners, architecture & data apps.',
      swatch: 'texw-blueprint',
      code: 'background-color:#0b1220; background-image: linear-gradient(rgba(99,102,241,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.14) 1px, transparent 1px), linear-gradient(rgba(99,102,241,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.06) 1px, transparent 1px); background-size: 96px 96px, 96px 96px, 24px 24px, 24px 24px;'
    },
    {
      id: 'tex-dotmatrix', name: 'Dot Matrix Halftone', feel: 'Print & Retro',
      desc: 'Rise-and-fall dot grid like old print halftones — playful rhythm without lines.',
      bestFor: 'Retro themes, arcade apps, poster-style marketing pages.',
      swatch: 'texw-dotmatrix',
      code: 'background-color:#0e1016; background-image: radial-gradient(rgba(255,255,255,.10) 1.2px, transparent 1.2px); background-size: 12px 12px;'
    },
    {
      id: 'tex-carbon', name: 'Carbon Weave', feel: 'Sport & Premium',
      desc: 'Tight diagonal woven carbon — engineered, expensive, performance-grade.',
      bestFor: 'Sports trackers, automotive, high-end dashboards.',
      swatch: 'texw-carbon',
      code: 'background-color:#121418; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 2px, transparent 2px 4px), repeating-linear-gradient(-45deg, rgba(0,0,0,.28) 0 2px, transparent 2px 4px); background-size: 8px 8px;'
    },
    {
      id: 'tex-brushed', name: 'Brushed Metal', feel: 'Machined & Cool',
      desc: 'Fine horizontal streaks like brushed aluminium under raking light.',
      bestFor: 'Tool UIs, pro audio gear, technical hardware themes.',
      swatch: 'texw-brushed',
      code: 'background-color:#1a1e26; background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.045) 0 1px, transparent 1px 3px), linear-gradient(180deg, rgba(255,255,255,.06), transparent 40%, rgba(0,0,0,.25));'
    },
    {
      id: 'tex-frosted', name: 'Frosted Film Grain', feel: 'Glassy & Soft',
      desc: 'Microscopic noise under a frosted pane — depth without visible pattern.',
      bestFor: 'Glassmorphism builds, media apps, premium dark UI.',
      swatch: 'texw-frosted',
      code: 'background-color:#11151f; background-image: radial-gradient(rgba(255,255,255,.05) .5px, transparent .5px); background-size: 4px 4px; backdrop-filter: blur(2px);'
    },
    {
      id: 'tex-herringbone', name: 'Herringbone Weave', feel: 'Tailored & Warm',
      desc: 'Zig-zag woven textile rhythm — crafted, upholstered, comforting.',
      bestFor: 'Lifestyle apps, reading rooms, habit trackers.',
      swatch: 'texw-herringbone',
      code: 'background-color:#241d18; background-image: repeating-linear-gradient(45deg, rgba(255,235,200,.07) 0 6px, transparent 6px 12px), repeating-linear-gradient(-45deg, rgba(255,235,200,.07) 0 6px, transparent 6px 12px); background-size: 12px 12px;'
    },
    {
      id: 'tex-watercolor', name: 'Watercolor Wash', feel: 'Artistic & Gentle',
      desc: 'Overlapping soft color blooms bleeding into the page — hand-painted serenity.',
      bestFor: 'Creative tools, kids apps, wellbeing & story apps.',
      swatch: 'texw-watercolor',
      code: 'background-color:#fbf7f4; background-image: radial-gradient(circle at 15% 25%, rgba(147,197,253,.35) 0 12%, transparent 34%), radial-gradient(circle at 80% 20%, rgba(251,191,36,.22) 0 10%, transparent 30%), radial-gradient(circle at 60% 85%, rgba(167,139,250,.28) 0 14%, transparent 36%), radial-gradient(circle at 25% 80%, rgba(52,211,153,.20) 0 12%, transparent 32%); background-blend-mode: multiply;'
    },
    {
      id: 'tex-concrete', name: 'Concrete Speckle', feel: 'Raw & Architectural',
      desc: 'Grey mineral speckle with tiny aggregate pits — brutalist honesty.',
      bestFor: 'Portfolio tools, galleries, monochrome builds.',
      swatch: 'texw-concrete',
      code: 'background-color:#2b2e33; background-image: radial-gradient(rgba(255,255,255,.10) .6px, transparent .6px), radial-gradient(rgba(0,0,0,.35) .8px, transparent .8px); background-size: 5px 5px, 9px 9px; background-position: 0 0, 3px 4px;'
    },
    {
      id: 'tex-wood', name: 'Wood Grain', feel: 'Natural & Grounded',
      desc: 'Long warm grain streaks like oiled oak — organic calm, cabin warmth.',
      bestFor: 'Cozy apps, reading trackers, nature themes.',
      swatch: 'texw-wood',
      code: 'background-color:#3a2a1a; background-image: repeating-linear-gradient(90deg, rgba(255,222,170,.05) 0 2px, transparent 2px 7px, rgba(0,0,0,.16) 7px 9px, transparent 9px 18px), linear-gradient(90deg, rgba(255,200,120,.06), transparent 60%);'
    },
    {
      id: 'tex-denim', name: 'Denim Twill', feel: 'Casual & Durable',
      desc: 'Diagonal indigo twill weave — everyday, reliable, effortlessly cool.',
      bestFor: 'Social apps, casual games, teen-friendly tools.',
      swatch: 'texw-denim',
      code: 'background-color:#1c2a4a; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,.08) 0 1.5px, transparent 1.5px 3px), repeating-linear-gradient(45deg, rgba(0,0,0,.22) 0 1.5px, transparent 1.5px 6px);'
    },
    {
      id: 'tex-marble', name: 'Marble Vein', feel: 'Luxury & Light',
      desc: 'Pale stone crossed by soft mineral veins — quiet wealth, spa calm.',
      bestFor: 'Luxury themes, finance tools, elegant dashboards.',
      swatch: 'texw-marble',
      code: 'background-color:#ece9e4; background-image: linear-gradient(115deg, transparent 30%, rgba(120,113,108,.16) 44%, transparent 47%, transparent 62%, rgba(120,113,108,.10) 70%, transparent 74%), linear-gradient(20deg, transparent 55%, rgba(120,113,108,.12) 63%, transparent 68%);'
    },
    {
      id: 'tex-circuit', name: 'Circuit Trace', feel: 'Hi-Tech & Engineered',
      desc: 'Dark PCB with fine copper traces and solder pads — hardware hacker energy.',
      bestFor: 'Dev tools, IoT dashboards, sci-fi builds.',
      swatch: 'texw-circuit',
      code: 'background-color:#0a1410; background-image: linear-gradient(90deg, rgba(16,185,129,.16) 1px, transparent 1px), linear-gradient(rgba(16,185,129,.16) 1px, transparent 1px), radial-gradient(rgba(16,185,129,.35) 1.4px, transparent 1.6px); background-size: 36px 36px, 36px 36px, 36px 36px; background-position: 0 0, 0 0, 17px 17px;'
    },
    {
      id: 'tex-leather', name: 'Leather Grain', feel: 'Rich & Classic',
      desc: 'Deep organic hide grain with soft creases — armchair and bound-book luxury.',
      bestFor: 'Note apps, journaling, premium long-session tools.',
      swatch: 'texw-leather',
      code: 'background-color:#2e1b12; background-image: radial-gradient(rgba(255,224,178,.08) 1px, transparent 1.4px), radial-gradient(rgba(0,0,0,.30) 1.2px, transparent 1.6px); background-size: 6px 6px, 8px 8px; background-position: 0 0, 3px 2px;'
    },
    {
      id: 'tex-iridescent', name: 'Iridescent Shimmer', feel: 'Futuristic & Magical',
      desc: 'Oil-slick rainbow shimmer drifting across the surface — wonder without noise.',
      bestFor: 'Music apps, creative sandboxes, futuristic HUDs.',
      swatch: 'texw-iridescent',
      code: 'background-color:#0d0f1e; background-image: linear-gradient(115deg, rgba(99,102,241,.22), rgba(34,211,238,.16) 30%, rgba(217,70,239,.18) 55%, rgba(250,204,21,.12) 75%, transparent); background-size: 220% 220%; animation: shimmerDrift 14s linear infinite alternate;'
    }
  ],

  // =========================================================================
  // LIVE BACKGROUNDS — a living motion layer behind the whole app
  // =========================================================================
  liveBackgrounds: [
    {
      id: 'livebg-none', name: 'Calm Static', feel: 'Still',
      desc: 'No motion layer — the quietest, most focused option with maximum battery mercy.',
      bestFor: 'Long reading sessions, battery-sensitive builds.',
      demo: 'lbd-none',
      impl: 'No live layer. Keep only the base texture/surface.'
    },
    {
      id: 'livebg-icons', name: 'Floating Icons Rising', feel: 'Gentle & Alive',
      desc: 'Soft app icons drift up from the bottom edge, swaying slightly and fading as they climb.',
      bestFor: 'Marketing pages, playful apps, hub screens.',
      demo: 'lbd-icons',
      impl: 'Spawn 10-16 lightweight inline <svg> glyphs at random X positions below the viewport; animate translateY(-100vh to -20vh) over 12-24s with slight rotate/sway via CSS keyframes; stagger delays; fade opacity out near the top; loop with randomized icons. Pause via prefers-reduced-motion.'
    },
    {
      id: 'livebg-physics', name: 'Physics Playground', feel: 'Tactile & Fun',
      desc: 'Soft rounded shapes bounce with real gravity inside the screen edges — an ambient toy world.',
      bestFor: 'Games, kids apps, creative tools.',
      demo: 'lbd-physics',
      impl: 'Simulate 8-14 circles with velocity + gravity + wall bounce + slight drag on a canvas or transform layer; keep sizes 12-64px; cap at 60fps delta-time; optionally make them pointer-repel on hover.'
    },
    {
      id: 'livebg-aurora', name: 'Aurora Ribbons', feel: 'Dreamy & Premium',
      desc: 'Huge blurred ribbons of color sweep slowly across the sky like northern lights.',
      bestFor: 'Wellbeing apps, music, premium landing screens.',
      demo: 'lbd-aurora',
      impl: '3-4 large blurred (filter: blur(60px)) gradient blobs animated with long-duration (30-60s) translate/scale keyframes; use will-change sparingly; alternatively animate background-position of a pre-baked gradient.'
    },
    {
      id: 'livebg-stars', name: 'Drifting Starfield', feel: 'Spacious & Cosmic',
      desc: 'Three depth layers of tiny stars drift and twinkle — infinite quiet space.',
      bestFor: 'Focus timers, night modes, space themes.',
      demo: 'lbd-stars',
      impl: '3 CSS star layers (box-shadow star fields or repeating radial-gradient) drifting at different speeds (parallax); add a 2-4s twinkle animation on a sparse 4th layer; pure GPU transforms only.'
    },
    {
      id: 'livebg-bubbles', name: 'Rising Bubbles', feel: 'Fresh & Bubbly',
      desc: 'Translucent bubbles wobble upward with playful refraction highlights.',
      bestFor: 'Kids apps, aqua themes, casual games.',
      demo: 'lbd-bubbles',
      impl: '12-18 circular divs with radial-gradient refraction spots; animate translateY upward at varied durations (8-20s) with slight X sway via keyframes; pop-free infinite loop; reduce count on mobile.'
    },
    {
      id: 'livebg-snow', name: 'Gentle Snowfall', feel: 'Cozy & Seasonal',
      desc: 'Soft flakes drift down with lazy side-to-side sway — calm winter air.',
      bestFor: 'Seasonal themes, cozy reading, meditation apps.',
      demo: 'lbd-snow',
      impl: '20-30 tiny blurred dots falling at 3 depths (scale+opacity differentiates depth) with translateX sway keyframes; durations 7-18s; pause on prefers-reduced-motion.'
    },
    {
      id: 'livebg-rain', name: 'Digital Code Rain', feel: 'Matrix & Hacker',
      desc: 'Falling glyph columns in phosphor green — the classic digital rain, tamed.',
      bestFor: 'Dev tools, terminal themes, hacker aesthetics.',
      demo: 'lbd-rain',
      impl: 'Canvas: 8-14 columns of random katakana/latin glyphs falling at varied speeds with fading trail (fillRect alpha overlay); throttle to ~24fps for battery; monochrome tint from palette.'
    },
    {
      id: 'livebg-flow', name: 'Flow Field Swirls', feel: 'Hypnotic & Organic',
      desc: 'Hundreds of tiny particles glide along invisible curl-noise currents like wind-blown seeds.',
      bestFor: 'Creative sandboxes, generative art backgrounds.',
      demo: 'lbd-flow',
      impl: 'Canvas with 150-350 particles advected by a slowly-evolving pseudo-noise flow field (sum of sines is fine); draw as 1-2px fading segments; wrap edges; 60fps delta loop with visibility pause.'
    },
    {
      id: 'livebg-parallax', name: 'Pointer Parallax Layers', feel: 'Deep & Immersive',
      desc: 'Stacked translucent scenery layers shift with the pointer — a living diorama.',
      bestFor: 'Hero screens, product pages, world apps.',
      demo: 'lbd-parallax',
      impl: '3-5 absolutely-positioned SVG/CSS layers translated by a smoothed pointer listener (lerp toward target, e.g. factor .06); depth = translate distance 4-24px; disable on touch-only where it idles.'
    },
    {
      id: 'livebg-orbs', name: 'Ambient Glow Orbs', feel: 'Soft & Meditative',
      desc: 'A few large, soft, colored orbs float almost imperceptibly behind everything.',
      bestFor: 'Dashboards, focus apps, ambient themes.',
      demo: 'lbd-orbs',
      impl: '4-7 blurred radial-gradient orbs (60-140px, blur 40-80px) drifting on 20-45s ease-in-out paths with translate3d; opacity 0.25-0.5; extremely cheap transform animation.'
    },
    {
      id: 'livebg-tide', name: 'Breathing Wave Tide', feel: 'Rhythmic & Grounding',
      desc: 'A slow gradient tide swells and recedes like breathing — centring and calm.',
      bestFor: 'Meditation, sleep, wellbeing apps.',
      demo: 'lbd-tide',
      impl: '2-3 stacked wave SVG/CSS gradients scaling/translating on 8-16s alternate ease-in-out loops; or animate a conic/linear gradient position; keep blur small for battery.'
    },
    {
      id: 'livebg-constellation', name: 'Constellation Web', feel: 'Connected & Intelligent',
      desc: 'Drifting nodes link with hairline lines when near — a thinking network.',
      bestFor: 'Data tools, AI themes, network diagrams.',
      demo: 'lbd-constellation',
      impl: 'Canvas: 30-60 nodes drifting with slow random velocity; draw lines between pairs under a distance threshold with alpha = proximity; nudge whole field with pointer; ~30fps is plenty.'
    }
  ],

  // =========================================================================
  // BACK-LIGHTING DESIGNS — the light that sits BEHIND elements
  // (Apple-style toggle glow and friends). Tunable in the Back-Light Studio.
  // =========================================================================
  backlightDesigns: [
    { id: 'bl-none', name: 'No Backlight', desc: 'Elements sit flat on the surface — light comes only from the main lighting design.', hint: 'Skip the back-light layer entirely.' },
    { id: 'bl-pill', name: 'Toggle Halo (Apple-style)', desc: 'A soft colored pool of light behind an ON toggle or active button — instant "alive" feeling.', hint: 'box-shadow: 0 0 <spread>px <blur>px <color>, plus a wider faint second ring; brighten ~20% on press.' },
    { id: 'bl-ring', name: 'Soft Ring Aura', desc: 'A neat ring of light slightly larger than the element — precise and confident.', hint: 'Two stacked box-shadows: crisp 1-2px rim + wide faint halo; keep ring color 15-20° hue from the fill.' },
    { id: 'bl-edge', name: 'Edge Light Bleed', desc: 'Light spills out from behind the element edges like it is lit from within.', hint: 'Inset border glow + outward gradient shadow; strongest on the side facing the light source.' },
    { id: 'bl-duotone', name: 'Dual-Tone Gradient Wash', desc: 'Two of your chosen colors blend into a gradient glow behind the element.', hint: 'background gradient layer or two box-shadows (one per color) offset left/right; blend with screen mode on dark.' },
    { id: 'bl-liquid', name: 'Liquid Light', desc: 'The glow slowly flows and morphs like liquid light under frosted glass.', hint: 'Animated multi-stop radial/conic gradient behind the element, 8-14s ease-in-out infinite alternate; blur 18-40px.' },
    { id: 'bl-embers', name: 'Rising Embers', desc: 'Tiny warm particles rise slowly behind the element — firelight made gentle.', hint: '8-14 2-3px particles (canvas or divs) spawning near the element base, drifting up 20-60px and fading; loop 2-5s staggered.' },
    { id: 'bl-orbit', name: 'Orbiting Sparks', desc: 'Small sparks orbit the element on an elliptical path — energy and importance.', hint: '3-5 particles on CSS offset-path/rotate keyframes around the element center; 4-10s per revolution.' },
    { id: 'bl-breathe', name: 'Breathing Bloom', desc: 'The glow inhales and exhales on a calm 3-5s cycle — presence without noise.', hint: 'box-shadow spread/opacity keyframes, 3-5s ease-in-out infinite; pair with a 2% scale breathing on the element.' },
    { id: 'bl-follow', name: 'Pointer Beam', desc: 'The backlight leans toward the pointer as it approaches — magnetic warmth.', hint: 'Track pointer distance; interpolate glow offset/intensity (closer = brighter); ease with lerp; fall back to static on touch.' },
    { id: 'bl-state', name: 'State Signal Light', desc: 'The backlight color signals state: cyan active, amber pending, rose error — glanceable meaning.', hint: 'Map app states to back-light colors via CSS custom property --bl-state; transition color 250ms; document the state map.' }
  ],

  // =========================================================================
  // LIGHT SOURCES & BEHAVIOUR — how light behaves across the WHOLE app
  // (not element backlighting) with advanced tuning sub-menu.
  // =========================================================================
  lightBehaviour: [
    {
      id: 'light-natural', name: 'Window Daylight', desc: 'One soft light from the top-left, like a big window — every shadow falls the same natural way.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><linearGradient id="lbNat" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="60%" stop-color="#0b101b" stop-opacity="0"/></linearGradient></defs><rect width="160" height="90" fill="#0a0f18"/><rect width="160" height="90" fill="url(#lbNat)" opacity=".5"/><rect x="44" y="30" width="72" height="36" rx="7" fill="#141c2c" stroke="#334155"/><rect x="52" y="38" width="34" height="8" rx="3" fill="#fde68a" opacity=".85"/><rect x="52" y="52" width="56" height="6" rx="3" fill="#1f2a3f"/><path d="M20 12 L44 30 M34 8 L58 30" stroke="#fde68a" stroke-opacity=".55" stroke-width="2"/></svg>`
    },
    {
      id: 'light-studio', name: 'Studio Softbox Overhead', desc: 'A big diffused softbox directly above — flattering, even, professional product-shot light.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0b101b"/><rect x="52" y="6" width="56" height="10" rx="4" fill="#f8fafc" opacity=".9"/><path d="M52 18 L46 46 M108 18 L114 46 M80 18 L80 48" stroke="#f8fafc" stroke-opacity=".28" stroke-width="2"/><rect x="44" y="42" width="72" height="32" rx="7" fill="#151d2e" stroke="#3b4864"/><rect x="44" y="42" width="72" height="6" rx="3" fill="#ffffff" opacity=".16"/></svg>`
    },
    {
      id: 'light-3point', name: 'Classic 3-Point Rig', desc: 'Key, fill and rim lights like a photo studio — sculpted, dimensional, magazine-ready.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0e17"/><circle cx="34" cy="28" r="9" fill="#fef3c7" opacity=".85"/><circle cx="128" cy="30" r="7" fill="#93c5fd" opacity=".6"/><circle cx="80" cy="70" r="8" fill="#fca5a5" opacity=".5"/><rect x="54" y="34" width="52" height="34" rx="7" fill="#161f31" stroke="#3c4a68"/><rect x="54" y="34" width="10" height="34" rx="5" fill="#fef3c7" opacity=".14"/><rect x="96" y="34" width="10" height="34" rx="5" fill="#93c5fd" opacity=".18"/></svg>`
    },
    {
      id: 'light-rim', name: 'Rim & Edge Light', desc: 'Light skims the edges from behind — dramatic silhouettes with glowing outlines.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070a12"/><rect x="40" y="20" width="80" height="50" rx="9" fill="#0b1120" stroke="#22d3ee" stroke-width="2" stroke-opacity=".85"/><rect x="36" y="16" width="88" height="58" rx="12" fill="none" stroke="#22d3ee" stroke-opacity=".3" stroke-width="5"/><rect x="52" y="34" width="40" height="7" rx="3" fill="#e2e8f0" opacity=".8"/><rect x="52" y="48" width="56" height="5" rx="2" fill="#475569"/></svg>`
    },
    {
      id: 'light-volumetric', name: 'Volumetric Light Shafts', desc: 'Visible beams of dusty light cut diagonally across the app — cathedral or sci-fi mood.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#080c15"/><defs><linearGradient id="lbVol" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e0e7ff" stop-opacity=".45"/><stop offset="100%" stop-color="#e0e7ff" stop-opacity="0"/></linearGradient></defs><polygon points="20,0 70,0 130,90 80,90" fill="url(#lbVol)"/><polygon points="90,0 120,0 160,60 130,90" fill="url(#lbVol)" opacity=".55"/><rect x="40" y="36" width="80" height="34" rx="7" fill="#101a2c" stroke="#33415c"/></svg>`
    },
    {
      id: 'light-screen', name: 'Screen Glow', desc: 'The UI itself is the light source — panels glow outward onto neighbors like screens in a dark room.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#060910"/><rect x="50" y="26" width="60" height="38" rx="8" fill="#1b2a44" stroke="#60a5fa" stroke-opacity=".8"/><circle cx="80" cy="45" r="44" fill="#3b82f6" opacity=".12"/><rect x="58" y="36" width="28" height="6" rx="3" fill="#93c5fd"/><rect x="58" y="48" width="44" height="5" rx="2" fill="#475569"/></svg>`
    },
    {
      id: 'light-flat', name: 'Ambient & Shadowless', desc: 'Light comes from everywhere and nowhere — zero cast shadows, pure flat clarity.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#111827"/><rect x="40" y="22" width="80" height="46" rx="8" fill="#1c2637" stroke="#374151"/><rect x="52" y="34" width="34" height="7" rx="3" fill="#e5e7eb" opacity=".8"/><rect x="52" y="48" width="56" height="5" rx="2" fill="#5b6472"/></svg>`
    },
    {
      id: 'light-candle', name: 'Warm Candle Flicker', desc: 'A low warm flame that flickers gently — intimate, nostalgic, cozy-night light.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0c0906"/><defs><radialGradient id="lbCnd" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#fbbf24" stop-opacity=".8"/><stop offset="100%" stop-color="#0c0906" stop-opacity="0"/></radialGradient></defs><circle cx="80" cy="40" r="52" fill="url(#lbCnd)"/><path d="M80 26 Q86 38 80 44 Q74 38 80 26" fill="#fde68a"/><rect x="77" y="44" width="6" height="16" rx="2" fill="#78350f"/><rect x="56" y="62" width="48" height="10" rx="4" fill="#292017"/></svg>`
    },
    {
      id: 'light-moon', name: 'Cool Moonlight', desc: 'A pale blue moonlight from above — serene, quiet, night-time calm.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b16"/><defs><radialGradient id="lbMoon" cx="72%" cy="18%" r="60%"><stop offset="0%" stop-color="#bfdbfe" stop-opacity=".5"/><stop offset="100%" stop-color="#070b16" stop-opacity="0"/></radialGradient></defs><rect width="160" height="90" fill="url(#lbMoon)"/><circle cx="118" cy="20" r="9" fill="#e2e8f0" opacity=".9"/><rect x="34" y="40" width="74" height="32" rx="8" fill="#0f1830" stroke="#31415f"/><rect x="44" y="50" width="30" height="6" rx="3" fill="#c7d5f0" opacity=".7"/></svg>`
    },
    {
      id: 'light-sunbeam', name: 'Sunbeam & Dust Motes', desc: 'A warm sunbeam enters from one side with floating dust motes — golden-hour daydream.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#120d07"/><defs><linearGradient id="lbSun" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fcd34d" stop-opacity=".5"/><stop offset="100%" stop-color="#fcd34d" stop-opacity="0"/></linearGradient></defs><polygon points="0,0 46,0 150,90 96,90" fill="url(#lbSun)"/><circle cx="60" cy="30" r="1.6" fill="#fde68a"/><circle cx="84" cy="48" r="1.2" fill="#fde68a" opacity=".8"/><circle cx="102" cy="62" r="1.8" fill="#fde68a" opacity=".7"/><circle cx="74" cy="66" r="1.1" fill="#fde68a" opacity=".6"/><rect x="22" y="50" width="58" height="26" rx="6" fill="#1d150c" stroke="#4a3a20"/></svg>`
    },
    {
      id: 'light-spotptr', name: 'Spotlight Follows Pointer', desc: 'A soft pool of light tracks the pointer — attention made physical, delightful on desktop.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#080b13"/><defs><radialGradient id="lbSpot" cx="62%" cy="46%" r="34%"><stop offset="0%" stop-color="#f1f5f9" stop-opacity=".22"/><stop offset="100%" stop-color="#080b13" stop-opacity="0"/></radialGradient></defs><rect width="160" height="90" fill="url(#lbSpot)"/><rect x="46" y="30" width="66" height="34" rx="7" fill="#0f1729" stroke="#33415c"/><circle cx="100" cy="42" r="2.5" fill="#22d3ee"/><path d="M96 46 L88 56" stroke="#22d3ee" stroke-width="1.5"/></svg>`
    }
  ],

  // =========================================================================
  // GAME STUDIO LIBRARY — 20 game types, 17 classic art styles & 10 game
  // app flows, each with a visual reference card.
  // =========================================================================
  gameTypes: [
    {
      id: 'gt-dodger', name: 'Arcade Dodger', genre: 'Action',
      desc: 'Your ship/sprite survives ever-denser waves of hazards — pure reflex, pure flow.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#060913"/><polygon points="80,40 88,56 80,52 72,56" fill="#22d3ee"/><polygon points="30,20 36,28 24,28" fill="#f43f5e"/><polygon points="126,30 132,38 120,38" fill="#f43f5e"/><rect x="34" y="60" width="14" height="4" rx="2" fill="#a855f7"/><rect x="112" y="14" width="14" height="4" rx="2" fill="#a855f7"/><circle cx="56" cy="70" r="2" fill="#f59e0b"/><circle cx="104" cy="24" r="2" fill="#f59e0b"/></svg>`,
      mechanics: 'Player moves in 1-2 axes; hazards spawn in escalating waves; score = survival time or wave count.'
    },
    {
      id: 'gt-shooter', name: 'Top-Down Shooter', genre: 'Action',
      desc: 'Rotate, aim and blast enemies from above — bullet ballet with power-ups.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#070b16"/><rect x="10" y="8" width="140" height="74" rx="6" fill="none" stroke="#334155" stroke-dasharray="4 4"/><circle cx="80" cy="46" r="7" fill="#6366f1"/><circle cx="80" cy="46" r="2.4" fill="#e0e7ff"/><line x1="80" y1="46" x2="104" y2="28" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/><circle cx="42" cy="26" r="4" fill="#f43f5e"/><circle cx="120" cy="64" r="4" fill="#f43f5e"/><circle cx="52" cy="66" r="4" fill="#f43f5e"/><circle cx="88" cy="18" r="2" fill="#fbbf24"/></svg>`,
      mechanics: 'Pointer/WASD aim + move; enemies path toward player; pickups rotate weapon tiers; room/wave clears.'
    },
    {
      id: 'gt-platformer', name: 'Side-Scrolling Platformer', genre: 'Action',
      desc: 'Run, jump and land precise hops across floating platforms — timing and flow.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#081019"/><rect x="0" y="70" width="70" height="20" fill="#12202f"/><rect x="86" y="56" width="30" height="8" rx="2" fill="#12202f"/><rect x="124" y="42" width="36" height="8" rx="2" fill="#12202f"/><circle cx="36" cy="60" r="7" fill="#34d399"/><circle cx="33" cy="58" r="1.6" fill="#064e3b"/><path d="M12 46 Q22 34 34 42" stroke="#fbbf24" stroke-width="2.5" fill="none"/><circle cx="34" cy="42" r="3" fill="#fbbf24"/></svg>`,
      mechanics: 'Coyote-time jumps, variable jump height, collectibles, hazards, a goal flag; level or endless.'
    },
    {
      id: 'gt-runner', name: 'Endless Runner', genre: 'Action',
      desc: 'Auto-run and react — jump, slide and dodge as the world speeds up forever.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0d1c"/><line x1="0" y1="68" x2="160" y2="68" stroke="#22d3ee" stroke-width="2" stroke-opacity=".7"/><circle cx="34" cy="58" r="7" fill="#f472b6"/><path d="M20 68 L44 68" stroke="#f472b6" stroke-width="3"/><rect x="70" y="52" width="12" height="16" fill="#334155"/><rect x="104" y="40" width="26" height="6" rx="2" fill="#a855f7"/><path d="M120 30 l0 -8 m-5 5 l10 -4" stroke="#c4b5fd" stroke-width="2"/><path d="M60 68 h14 M96 68 h10" stroke="#475569" stroke-width="2" stroke-dasharray="3 5"/></svg>`,
      mechanics: 'One/two-button controls, speed ramps with score, procedural obstacle patterns, near-miss bonuses.'
    },
    {
      id: 'gt-jumper', name: 'Vertical Jumper', genre: 'Action',
      desc: 'Bounce ever upward across crumbling platforms — one missed pad ends the climb.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0b1020"/><circle cx="80" cy="66" r="7" fill="#38bdf8"/><rect x="58" y="78" width="46" height="6" rx="3" fill="#334155"/><rect x="26" y="58" width="38" height="6" rx="3" fill="#334155"/><rect x="98" y="40" width="38" height="6" rx="3" fill="#334155"/><rect x="40" y="22" width="38" height="6" rx="3" fill="#475569"/><rect x="8" y="22" width="20" height="12" rx="2" fill="#134e4a"/><path d="M80 56 Q82 50 80 46" stroke="#7dd3fc" stroke-width="1.5" fill="none"/><circle cx="120" cy="16" r="3" fill="#fbbf24"/></svg>`,
      mechanics: 'Auto-bounce pads, wrap or clamp horizontal edges, platform types (solid/crumble/moving), height = score.'
    },
    {
      id: 'gt-flappy', name: 'One-Tap Flappy', genre: 'Action',
      desc: 'Tap to flap through gaps — brutally simple, instantly restartable, one-more-try energy.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a1428"/><rect x="52" y="0" width="10" height="34" rx="2" fill="#134e4a"/><rect x="52" y="56" width="10" height="34" rx="2" fill="#134e4a"/><rect x="112" y="0" width="10" height="22" rx="2" fill="#134e4a"/><rect x="112" y="44" width="10" height="46" rx="2" fill="#134e4a"/><circle cx="30" cy="44" r="6.5" fill="#fbbf24"/><path d="M24 42 L17 44 L24 47" fill="#f59e0b"/><circle cx="32" cy="42" r="1.2" fill="#78350f"/><path d="M96 40 h10" stroke="#22d3ee" stroke-width="2"/></svg>`,
      mechanics: 'Impulse flap physics, procedural gap pairs, pass-count score, instant retry loop.'
    },
    {
      id: 'gt-breakout', name: 'Breakout / Brick Buster', genre: 'Arcade Classic',
      desc: 'Bounce the ball, smash the wall — paddle angles and multi-hits with escalating rows.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0c0f1e"/><rect x="24" y="12" width="16" height="7" rx="1.5" fill="#f43f5e"/><rect x="42" y="12" width="16" height="7" rx="1.5" fill="#f43f5e"/><rect x="60" y="12" width="16" height="7" rx="1.5" fill="#f59e0b"/><rect x="78" y="12" width="16" height="7" rx="1.5" fill="#f59e0b"/><rect x="96" y="12" width="16" height="7" rx="1.5" fill="#34d399"/><rect x="114" y="12" width="16" height="7" rx="1.5" fill="#34d399"/><circle cx="70" cy="48" r="4" fill="#e2e8f0"/><rect x="54" y="70" width="34" height="6" rx="3" fill="#22d3ee"/><line x1="70" y1="52" x2="58" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/></svg>`,
      mechanics: 'Paddle angle physics, brick HP tiers, power-ups (wide/multi/fireball), 3-ball lives.'
    },
    {
      id: 'gt-snake', name: 'Snake Classic', genre: 'Arcade Classic',
      desc: 'Grow longer, turn tighter, don’t bite yourself — the evergreen grid classic.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#081408"/><rect x="18" y="14" width="124" height="62" rx="4" fill="#0c1e0d" stroke="#166534"/><rect x="30" y="50" width="10" height="10" fill="#22c55e"/><rect x="40" y="50" width="10" height="10" fill="#22c55e"/><rect x="50" y="50" width="10" height="10" fill="#22c55e"/><rect x="50" y="40" width="10" height="10" fill="#4ade80"/><circle cx="96" cy="30" r="5" fill="#f43f5e"/><circle cx="106" cy="56" r="5" fill="#f43f5e"/></svg>`,
      mechanics: 'Fixed-timestep grid movement, growth on eat, speed ramp, wrap or wall-death rule switch.'
    },
    {
      id: 'gt-stacker', name: 'Falling-Block Stacker', genre: 'Arcade Classic',
      desc: 'Rotate and slot falling shapes into clean lines — infinite Tetris-style depth.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0e1f"/><rect x="56" y="10" width="48" height="72" rx="3" fill="#0e1630" stroke="#334155"/><rect x="56" y="52" width="12" height="12" fill="#22d3ee"/><rect x="68" y="52" width="12" height="12" fill="#22d3ee"/><rect x="68" y="64" width="12" height="12" fill="#a855f7"/><rect x="80" y="64" width="12" height="12" fill="#a855f7"/><rect x="56" y="16" width="12" height="12" fill="#f59e0b" transform="rotate(0)"/><rect x="70" y="16" width="12" height="12" fill="#f59e0b"/><path d="M30 30 l10 -8" stroke="#475569" stroke-width="2"/><rect x="20" y="32" width="12" height="12" fill="#f43f5e" transform="rotate(18 26 38)"/></svg>`,
      mechanics: '7-bag randomizer, hold + next queue, ghost drop, lock delay, line-clear scoring with combos.'
    },
    {
      id: 'gt-merge', name: 'Match & Merge Tiles', genre: 'Puzzle',
      desc: 'Slide tiles to merge equals into bigger, rarer pieces — one-move-deep, endless mastery.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#14101c"/><rect x="34" y="12" width="92" height="66" rx="6" fill="#1e1830" stroke="#3b2f5c"/><rect x="40" y="18" width="24" height="24" rx="4" fill="#f59e0b"/><text x="52" y="35" font-size="11" text-anchor="middle" fill="#fff">4</text><rect x="68" y="18" width="24" height="24" rx="4" fill="#fbbf24"/><text x="80" y="35" font-size="11" text-anchor="middle" fill="#92400e">8</text><rect x="96" y="18" width="24" height="24" rx="4" fill="#f97316"/><text x="108" y="35" font-size="11" text-anchor="middle" fill="#fff">2</text><rect x="40" y="46" width="24" height="24" rx="4" fill="#eab308"/><text x="52" y="63" font-size="11" text-anchor="middle" fill="#fff">2</text><rect x="96" y="46" width="24" height="24" rx="4" fill="#6366f1"/><text x="108" y="63" font-size="11" text-anchor="middle" fill="#fff">16</text></svg>`,
      mechanics: '4-direction slide, merge rules, spawn piece after each move, board-full game over, best-score.'
    },
    {
      id: 'gt-slidepuzzle', name: 'Sliding Logic Puzzle', genre: 'Puzzle',
      desc: 'Nudge tiles, mirrors or beams to solve hand-crafted single-screen brain teasers.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0d1220"/><rect x="30" y="14" width="56" height="56" rx="5" fill="#131b30" stroke="#3b4a6b"/><rect x="34" y="18" width="22" height="22" rx="4" fill="#22d3ee" opacity=".85"/><rect x="60" y="18" width="22" height="22" rx="4" fill="#6366f1" opacity=".8"/><rect x="34" y="44" width="22" height="22" rx="4" fill="#312e81"/><rect x="60" y="44" width="22" height="22" rx="4" fill="#f43f5e" opacity=".8"/><circle cx="120" cy="42" r="12" fill="none" stroke="#fbbf24" stroke-width="2"/><path d="M120 30 L120 18 M120 54 L120 66 M108 42 L96 42 M132 42 L144 42" stroke="#fbbf24" stroke-width="2"/></svg>`,
      mechanics: 'Deterministic move rules, undo, hint system, move-count par, level progression with stars.'
    },
    {
      id: 'gt-maze', name: 'Maze Crawler', genre: 'Puzzle',
      desc: 'Explore fog-of-war corridors, collect keys and reach the exit before the timer.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0f18"/><rect x="22" y="12" width="116" height="66" fill="#101a2c" stroke="#243b57"/><path d="M22 34 h70 v20 h46 M62 12 v22 M92 54 v24 M22 58 h18 M116 34 v-10" stroke="#3d5a86" stroke-width="4" fill="none"/><circle cx="34" cy="46" r="4" fill="#22d3ee"/><rect x="122" y="62" width="8" height="8" rx="2" fill="#fbbf24"/><circle cx="98" cy="24" r="3" fill="#f43f5e"/></svg>`,
      mechanics: 'Grid or free movement, fog reveal radius, keys/doors, breadcrumbs map, step-par scoring.'
    },
    {
      id: 'gt-towerdef', name: 'Tower Defense', genre: 'Strategy',
      desc: 'Place towers along a winding path and stop waves of marching creeps — build, upgrade, hold.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0d1a14"/><path d="M6 44 h30 v-24 h36 v40 h40 v-30 h42" fill="none" stroke="#1f3d2b" stroke-width="9"/><circle cx="24" cy="44" r="3.5" fill="#f43f5e"/><circle cx="44" cy="20" r="3.5" fill="#f43f5e"/><rect x="62" y="8" width="9" height="9" rx="2" fill="#34d399"/><rect x="100" y="54" width="9" height="9" rx="2" fill="#34d399"/><rect x="24" y="66" width="9" height="9" rx="2" fill="#fbbf24"/><line x1="66" y1="17" x2="44" y2="20" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`,
      mechanics: 'Waypoint pathing, tower types (slow/AoE/sniper), economy from kills, wave preview, lives + wave counter.'
    },
    {
      id: 'gt-cardbattler', name: 'Card Battler / Deckbuilder', genre: 'Strategy',
      desc: 'Draft a deck, play energy-costed cards, chain combos — every run deals a new hand.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#101225"/><rect x="18" y="26" width="26" height="38" rx="4" fill="#1e293b" stroke="#64748b" transform="rotate(-14 31 45)"/><rect x="52" y="16" width="28" height="42" rx="4" fill="#312e81" stroke="#818cf8"/><rect x="88" y="16" width="28" height="42" rx="4" fill="#7f1d1d" stroke="#f87171"/><rect x="124" y="26" width="26" height="38" rx="4" fill="#1e293b" stroke="#64748b" transform="rotate(14 137 45)"/><circle cx="66" cy="34" r="6" fill="#a5b4fc"/><path d="M60 46 q6 5 12 0" stroke="#a5b4fc" fill="none"/><circle cx="102" cy="32" r="6" fill="#fca5a5"/><path d="M96 44 q6 -7 12 0" stroke="#fca5a5" fill="none"/><rect x="12" y="72" width="16" height="10" rx="5" fill="#facc15"/><text x="20" y="80" font-size="7" text-anchor="middle" fill="#713f12">3</text></svg>`,
      mechanics: 'Energy curve, hand-size, draw/discard pile, card synergies, run-based drafting with relic picks.'
    },
    {
      id: 'gt-tactics', name: 'Turn-Based Tactics', genre: 'Strategy',
      desc: 'Grid squads take turns using positioning, cover and abilities — chess meets combat.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#101625"/><path d="M34 14 h92 v62 h-92 z" fill="none" stroke="#2e3f5e"/><path d="M57 14 v62 M80 14 v62 M103 14 v62 M34 35.3 h92 M34 56.6 h92" stroke="#222f47" stroke-width="1.5"/><circle cx="45" cy="25" r="6" fill="#22d3ee"/><circle cx="68" cy="46" r="6" fill="#22d3ee" opacity=".55"/><circle cx="91" cy="25" r="6" fill="#f43f5e"/><circle cx="114" cy="67" r="6" fill="#f43f5e" opacity=".55"/><path d="M48 28 L88 27" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2"/><rect x="6" y="70" width="16" height="10" rx="3" fill="#22d3ee" opacity=".3"/></svg>`,
      mechanics: 'Action-point economy, terrain cover, fog of war, ability cooldowns, unit roster with counter-types.'
    },
    {
      id: 'gt-rhythm', name: 'Rhythm & Timing', genre: 'Rhythm',
      desc: 'Hit notes on the beat across lanes — Perfect/Good/Miss judgments and combo streaks.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0c0a1a"/><path d="M52 12 v66 M80 12 v66 M108 12 v66" stroke="#312e81" stroke-width="2"/><circle cx="52" cy="28" r="6" fill="#a855f7"/><circle cx="80" cy="42" r="6" fill="#22d3ee"/><circle cx="108" cy="30" r="6" fill="#f472b6"/><rect x="42" y="64" width="20" height="8" rx="4" fill="#4c1d95"/><rect x="70" y="64" width="20" height="8" rx="4" fill="#155e75"/><rect x="98" y="64" width="20" height="8" rx="4" fill="#9d174d"/><text x="80" y="82" font-size="7" text-anchor="middle" fill="#c4b5fd">COMBO x12</text></svg>`,
      mechanics: 'Beat-synced spawner, judgment windows (±ms), hold notes, combo multiplier, synth SFX per hit.'
    },
    {
      id: 'gt-idle', name: 'Idle / Incremental', genre: 'Idle',
      desc: 'Numbers grow while you watch and nudge — upgrades, milestones and prestige loops.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0f1320"/><path d="M14 74 Q40 74 52 62 T92 56 T148 30" fill="none" stroke="#34d399" stroke-width="2.5"/><rect x="14" y="52" width="10" height="22" fill="#1f2937" opacity=".5"/><rect x="52" y="46" width="10" height="28" fill="#1f2937" opacity=".5"/><rect x="92" y="40" width="10" height="34" fill="#1f2937" opacity=".5"/><rect x="132" y="26" width="10" height="48" fill="#1f2937" opacity=".5"/><circle cx="148" cy="30" r="3" fill="#6ee7b7"/><rect x="98" y="8" width="50" height="12" rx="6" fill="#065f46"/><text x="123" y="17" font-size="7" text-anchor="middle" fill="#a7f3d0">+2.4k/s</text><rect x="16" y="8" width="34" height="12" rx="3" fill="#fbbf24"/><text x="33" y="17" font-size="7" text-anchor="middle" fill="#7c2d12">x2</text></svg>`,
      mechanics: 'Per-second generators, buy-x10, exponential costs, milestone toasts, offline progress on return.'
    },
    {
      id: 'gt-typing', name: 'Typing & Words', genre: 'Word',
      desc: 'Type falling words or letters before they land — vocabulary at machine-gun speed.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0d1322"/><rect x="12" y="64" width="136" height="10" rx="3" fill="#1e293b"/><rect x="12" y="18" width="58" height="12" rx="3" fill="#312e81"/><text x="20" y="27" font-size="8" fill="#c7d2fe">garden</text><rect x="88" y="34" width="62" height="12" rx="3" fill="#155e75"/><text x="96" y="43" font-size="8" fill="#a5f3fc">quantum</text><path d="M40 34 L40 62" stroke="#22d3ee" stroke-width="1" stroke-dasharray="2 3"/><rect x="70" y="74" width="20" height="9" rx="2" fill="#334155"/><text x="80" y="81" font-size="6" text-anchor="middle" fill="#94a3b8">keys</text></svg>`,
      mechanics: 'Word list difficulty tiers, WPM/accuracy stats, streak multipliers, special golden words.'
    },
    {
      id: 'gt-memory', name: 'Memory Match', genre: 'Casual',
      desc: 'Flip pairs, remember positions, clear the board — cozy brain training with themes.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#111827"/><rect x="30" y="16" width="22" height="26" rx="4" fill="#6366f1"/><rect x="56" y="16" width="22" height="26" rx="4" fill="#1f2937" stroke="#374151"/><rect x="82" y="16" width="22" height="26" rx="4" fill="#22d3ee"/><rect x="108" y="16" width="22" height="26" rx="4" fill="#1f2937" stroke="#374151"/><rect x="30" y="46" width="22" height="26" rx="4" fill="#1f2937" stroke="#374151"/><rect x="56" y="46" width="22" height="26" rx="4" fill="#22d3ee"/><circle cx="67" cy="59" r="5" fill="#0e7490"/><rect x="82" y="46" width="22" height="26" rx="4" fill="#1f2937" stroke="#374151"/><rect x="108" y="46" width="22" height="26" rx="4" fill="#f43f5e"/><circle cx="93" cy="29" r="5" fill="#4338ca"/><circle cx="119" cy="59" r="5" fill="#881337"/></svg>`,
      mechanics: 'Flip-two rule, matched pairs lock, move counter vs par, themed decks, time-attack mode.'
    },
    {
      id: 'gt-physandbox', name: 'Physics Sandbox Game', genre: 'Sandbox',
      desc: 'Fling, stack and topple ragdoll objects — a playful toy box with goals and medals.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0c101c"/><rect x="14" y="64" width="132" height="8" rx="2" fill="#1f2937"/><circle cx="40" cy="52" r="8" fill="#f59e0b"/><rect x="58" y="48" width="16" height="16" rx="3" fill="#34d399" transform="rotate(14 66 56)"/><polygon points="96,44 110,60 82,60" fill="#a855f7"/><path d="M132 30 q10 -12 20 0" stroke="#22d3ee" stroke-width="2.5" fill="none"/><path d="M40 44 q-4 -14 8 -16" stroke="#fef08a" stroke-width="1.5" fill="none"/></svg>`,
      mechanics: 'Real gravity/collision world, drag-fling impulses, destructible stacks, goal stars per level, reset.'
    }
  ],

  gameArtStyles: [
    {
      id: 'ga-pixel8', name: '8-Bit Pixel (NES)', era: '1983–1990',
      desc: 'Chunky 8×8 sprites, 4 colors per sprite, hard edges and legendary simplicity.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0b1020"/><path d="M60 24 h8 v-8 h8 v8 h8 v16 h8 v8 h-32 v-8 h8 z" fill="#e0e7ff" shape-rendering="crispEdges"/><rect x="64" y="30" width="4" height="4" fill="#0b1020"/><rect x="72" y="30" width="4" height="4" fill="#0b1020"/><rect x="60" y="52" width="32" height="4" fill="#4338ca"/><rect x="96" y="24" width="4" height="4" fill="#f43f5e"/><rect x="100" y="28" width="4" height="4" fill="#f43f5e"/><rect x="104" y="32" width="4" height="4" fill="#f43f5e"/><rect x="20" y="66" width="4" height="4" fill="#22d3ee"/><rect x="24" y="70" width="4" height="4" fill="#22d3ee"/></svg>`,
      craft: 'image-rendering: pixelated; sprites on a 8px grid; 4-color palettes; square hit flashes; chiptune square-wave SFX.'
    },
    {
      id: 'ga-pixel16', name: '16-Bit Pixel (SNES)', era: '1990–1996',
      desc: 'Richer 16-color sprites, subtle shading and parallax — the golden-cartridge look.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#131033"/><circle cx="120" cy="20" r="9" fill="#fde68a"/><circle cx="116" cy="18" r="7" fill="#fef9c3"/><path d="M0 62 h160" stroke="#312e81" stroke-width="6"/><path d="M0 56 h160" stroke="#4338ca" stroke-width="3" opacity=".6"/><path d="M30 40 l5 -10 5 10 z" fill="#86efac"/><path d="M34 30 l3 -8 3 8 z" fill="#4ade80"/><rect x="60" y="42" width="12" height="16" fill="#c084fc"/><rect x="58" y="38" width="16" height="6" fill="#e9d5ff"/><rect x="58" y="42" width="4" height="4" fill="#3b0764"/><rect x="68" y="42" width="4" height="4" fill="#3b0764"/></svg>`,
      craft: '16-color ramps, dithered gradients, 2-3 parallax layers, sprite shadows as ellipses, warmer chiptune with echo.'
    },
    {
      id: 'ga-neonvector', name: 'Neon Vector', era: 'Modern Classic',
      desc: 'Glowing wireframe shapes on black — Geometry Wars particle fireworks.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#03040a"/><polygon points="80,38 96,66 64,66" fill="none" stroke="#22d3ee" stroke-width="2.5"/><polygon points="80,50 92,72 68,72" fill="none" stroke="#a855f7" stroke-width="2" opacity=".8"/><circle cx="80" cy="56" r="2.5" fill="#f8fafc"/><circle cx="30" cy="24" r="3" fill="none" stroke="#f43f5e" stroke-width="2"/><circle cx="128" cy="30" r="3" fill="none" stroke="#fbbf24" stroke-width="2"/><path d="M36 26 L60 44" stroke="#f43f5e" stroke-width="1" opacity=".6"/><path d="M20 74 h120" stroke="#1e3a8a" stroke-width="1" opacity=".8"/></svg>`,
      craft: 'Black canvas, additive glow (shadowBlur or layered strokes), particle bursts on every event, grid floor, bloom trails.'
    },
    {
      id: 'ga-gameboy', name: 'Game Boy 4-Shade', era: '1989',
      desc: 'Four shades of green on a pea-soup screen — maximal nostalgia, minimal palette.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#9bbc0f"/><rect x="12" y="12" width="136" height="66" rx="3" fill="#8bac0f"/><path d="M40 58 v-16 h8 v-8 h16 v8 h8 v16 z" fill="#0f380f"/><rect x="48" y="46" width="4" height="4" fill="#306230"/><rect x="60" y="46" width="4" height="4" fill="#306230"/><path d="M92 30 h20 v6 h-14 v4 h12 v6 h-12 v4 h16 v6 h-22 z" fill="#0f380f"/><rect x="26" y="30" width="8" height="6" fill="#306230"/></svg>`,
      craft: 'Exactly 4 shades (#0f380f/#306230/#8bac0f/#9bbc0f), chunky borders, dither pattern shading, mono bleeps.'
    },
    {
      id: 'ga-crt', name: 'CRT Phosphor Terminal', era: '1970s–80s',
      desc: 'Scan-lined phosphor amber/green on curved glass — retro-futurist operator chic.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0f0a"/><rect x="10" y="10" width="140" height="70" rx="8" fill="#07160c" stroke="#14532d" stroke-width="2"/><path d="M18 24 h50 M18 34 h86 M18 44 h64 M18 54 h96 M18 64 h40" stroke="#22c55e" stroke-width="2.5" opacity=".8"/><path d="M0 20 h160 M0 34 h160 M0 48 h160 M0 62 h160" stroke="#0a0f0a" stroke-width="1" opacity=".5"/><rect x="66" y="42" width="7" height="6" fill="#4ade80"/></svg>`,
      craft: 'Pseudo scanline overlay (repeating-linear-gradient), slight chromatic offset, phosphor glow text-shadow, hum + keyclick SFX.'
    },
    {
      id: 'ga-flat', name: 'Flat Minimal', era: 'Modern',
      desc: 'Big simple shapes, confident flat colors, zero gradients — clean and timeless.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#eef2f7"/><circle cx="80" cy="40" r="18" fill="#6366f1"/><rect x="52" y="62" width="56" height="10" rx="5" fill="#22d3ee"/><circle cx="34" cy="28" r="7" fill="#f43f5e"/><rect x="112" y="18" width="18" height="18" rx="4" fill="#fbbf24"/><path d="M136 62 l8 -14 8 14 z" fill="#34d399"/></svg>`,
      craft: '2-color + neutral palette, geometric shapes only, generous whitespace, soft UI shadows, snappy 150ms transitions.'
    },
    {
      id: 'ga-doodle', name: 'Hand-Drawn Doodle', era: 'Timeless',
      desc: 'Wobbly ink outlines and paper background — sketchbook charm with playful energy.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#fbf6ec"/><path d="M40 62 q-4 -22 18 -24 q26 -4 30 14 q3 14 -14 14 q-30 0 -34 -4" fill="none" stroke="#292524" stroke-width="2.5" stroke-linecap="round"/><circle cx="60" cy="46" r="2" fill="#292524"/><circle cx="74" cy="44" r="2" fill="#292524"/><path d="M58 54 q6 5 12 0" stroke="#292524" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M108 30 q10 -8 18 2 M104 40 q12 -4 14 6" stroke="#78716c" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M22 74 q20 6 40 0 t40 2" stroke="#d6d3d1" stroke-width="2" fill="none"/></svg>`,
      craft: 'Wobbly 2-3px strokes (slight random jitter), crayon fills, paper texture, handwritten-style display font.'
    },
    {
      id: 'ga-watercolor', name: 'Watercolor Storybook', era: 'Timeless',
      desc: 'Soft pigment blooms and paper bleed — gentle, warm, story-time wonder.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#fdfaf4"/><circle cx="80" cy="46" r="20" fill="#93c5fd" opacity=".45"/><circle cx="74" cy="42" r="14" fill="#bfdbfe" opacity=".5"/><circle cx="120" cy="26" r="12" fill="#fca5a5" opacity=".35"/><circle cx="34" cy="66" r="12" fill="#86efac" opacity=".4"/><path d="M80 46 q0 10 4 16" stroke="#3b5b8f" stroke-width="2.5" fill="none" opacity=".7"/><circle cx="82" cy="38" r="2" fill="#3b5b8f"/></svg>`,
      craft: 'Bloomed edges (blurred layered fills on paper texture), muted pigment palette, ink-line accents, soft page-turn transitions.'
    },
    {
      id: 'ga-comic', name: 'Comic Book Pop', era: 'Golden/Silver Age',
      desc: 'Bold ink lines, halftone dots, punchy primary colors and BANG energy.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#fef3c7"/><circle cx="58" cy="40" r="18" fill="#fde047" stroke="#111" stroke-width="3"/><circle cx="52" cy="36" r="2.5" fill="#111"/><circle cx="64" cy="36" r="2.5" fill="#111"/><path d="M50 48 q8 8 16 0" stroke="#111" stroke-width="3" fill="none"/><polygon points="96,24 108,40 88,44" fill="#ef4444" stroke="#111" stroke-width="2.5" transform="rotate(12 98 34)"/><path d="M20 66 h34 M28 74 h28" stroke="#111" stroke-width="2.5"/><circle cx="130" cy="60" r="9" fill="#38bdf8" stroke="#111" stroke-width="2.5"/><path d="M126 56 l2 4 4 -6" stroke="#fff" stroke-width="2" fill="none"/></svg>`,
      craft: '3-4px black outlines, halftone dot shading, off-register color layers, burst polygons, heavy display font.'
    },
    {
      id: 'ga-lowpoly', name: 'Low-Poly Facets', era: 'Modern',
      desc: 'Triangulated gem-like facets — crisp geometric beauty with deliberate simplicity.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0e1526"/><polygon points="80,14 58,44 102,44" fill="#1d4ed8"/><polygon points="80,14 102,44 124,30 96,10" fill="#3b82f6"/><polygon points="58,44 80,74 102,44" fill="#60a5fa"/><polygon points="58,44 36,58 80,74" fill="#2563eb"/><polygon points="102,44 124,30 128,58 80,74" fill="#1e40af"/><polygon points="36,58 44,74 80,74" fill="#172554"/></svg>`,
      craft: 'Flat-shaded triangles (each its own tone), controlled gradient ramps, faceted particles, subtle wireframe overlay.'
    },
    {
      id: 'ga-voxel', name: 'Voxel Blocks', era: 'Modern',
      desc: 'Chunky 3D cubes stacked into worlds — pixel art’s friendly 3D cousin.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0d1524"/><g transform="translate(80 20)"><polygon points="0,0 14,7 0,14 -14,7" fill="#22c55e"/><polygon points="-14,7 0,14 0,28 -14,21" fill="#15803d"/><polygon points="14,7 0,14 0,28 14,21" fill="#166534"/></g><g transform="translate(80 48)"><polygon points="0,0 14,7 0,14 -14,7" fill="#fbbf24"/><polygon points="-14,7 0,14 0,28 -14,21" fill="#b45309"/><polygon points="14,7 0,14 0,28 14,21" fill="#92400e"/></g><g transform="translate(52 62)"><polygon points="0,0 14,7 0,14 -14,7" fill="#94a3b8"/><polygon points="-14,7 0,14 0,28 -14,21" fill="#475569"/><polygon points="14,7 0,14 0,28 14,21" fill="#334155"/></g></svg>`,
      craft: 'Isometric cube units, 3 faces per cube (light/mid/dark), stacked grids, soft drop shadows, blocky pop SFX.'
    },
    {
      id: 'ga-isometric', name: 'Isometric Diorama', era: 'Modern Classic',
      desc: 'A tidy tilted world on a floating island — museum-clean diorama depth.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0f172a"/><polygon points="80,24 128,50 80,76 32,50" fill="#334155"/><polygon points="80,24 128,50 80,42 32,50" fill="#475569"/><path d="M32 50 l48 -8 48 8" stroke="#22d3ee" stroke-width="1.5" fill="none" opacity=".6"/><rect x="70" y="26" width="12" height="14" rx="2" fill="#64748b" transform="skewY(-14)"/><rect x="88" y="36" width="12" height="14" rx="2" fill="#64748b" transform="skewY(14)"/><circle cx="62" cy="52" r="5" fill="#34d399"/><path d="M80 76 L80 82" stroke="#64748b" stroke-width="2"/><circle cx="80" cy="85" r="8" fill="#0b1220" stroke="#64748b"/></svg>`,
      craft: 'True 2:1 isometric projection, layered depth with elevation steps, long soft shadows, ambient occlusion edges.'
    },
    {
      id: 'ga-claymation', name: 'Claymation', era: 'Timeless',
      desc: 'Squishy clay characters with thumbprints — handcrafted warmth you can almost squeeze.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#f5e9dc"/><circle cx="80" cy="42" r="22" fill="#f4a261"/><circle cx="80" cy="42" r="22" fill="none" stroke="#c97b3d" stroke-width="2" stroke-dasharray="1 3"/><circle cx="72" cy="38" r="3" fill="#5c3a21"/><circle cx="88" cy="38" r="3" fill="#5c3a21"/><ellipse cx="80" cy="52" rx="6" ry="4" fill="#c97b3d"/><circle cx="38" cy="66" r="9" fill="#90be6d"/><path d="M30 60 q8 -6 16 0" stroke="#5a7c3f" stroke-width="2" fill="none"/><rect x="112" y="52" width="24" height="14" rx="7" fill="#e76f51"/></svg>`,
      craft: 'Rounded blobby forms, visible fingerprint noise texture, slightly irregular outlines, squash-and-stretch animation.'
    },
    {
      id: 'ga-papercraft', name: 'Papercraft Layers', era: 'Modern',
      desc: 'Cut-paper shapes with drop shadows on stacked layers — a pop-up book come alive.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#e7ecf3"/><path d="M0 70 q40 -18 80 0 t80 0 v20 h-160 z" fill="#b6c4d8"/><path d="M0 70 q40 -18 80 0 t80 0" fill="none" stroke="#8fa3c0" stroke-width="1.5"/><path d="M24 58 q26 -30 56 -10 q22 14 -8 18 q-40 4 -48 -8" fill="#f49097"/><path d="M24 58 q26 -30 56 -10" fill="none" stroke="#c9575e" stroke-width="1.5"/><rect x="112" y="40" width="26" height="26" rx="3" fill="#8ecae6" stroke="#5390b5" stroke-width="1.5" transform="rotate(-6 125 53)"/><ellipse cx="125" cy="70" rx="18" ry="4" fill="#94a3b8" opacity=".5"/></svg>`,
      craft: 'Layered z-depth with real drop-shadows between paper cutouts, pastel paper palette, subtle wobble animation.'
    },
    {
      id: 'ga-glitch', name: 'Cyberpunk Glitch', era: 'Future Retro',
      desc: 'RGB-split glitches, scan tears and chrome neon on rain-slick night streets.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#090311"/><rect x="30" y="18" width="100" height="52" rx="3" fill="#12061f" stroke="#a855f7" stroke-width="1.5"/><path d="M34 30 h60" stroke="#22d3ee" stroke-width="3" opacity=".85"/><path d="M37 28 h60" stroke="#f43f5e" stroke-width="3" opacity=".55"/><path d="M34 44 h84" stroke="#64748b" stroke-width="2"/><rect x="52" y="24" width="18" height="3" fill="#f8fafc" opacity=".7"/><rect x="96" y="50" width="26" height="4" fill="#22d3ee" opacity=".6"/><path d="M40 56 h48" stroke="#a855f7" stroke-width="2"/><path d="M70 18 v52" stroke="#f43f5e" stroke-width="1" opacity=".4"/><path d="M0 66 h160" stroke="#1e1b4b" stroke-width="3"/></svg>`,
      craft: 'RGB-split on hit (3 offset clones in cyan/red), horizontal tear slices, neon palette on near-black, datamosh transitions.'
    },
    {
      id: 'ga-anime', name: 'Retro Anime Cel', era: '1980s–90s',
      desc: 'Bold cel shading, dramatic speed lines and sunset gradients — Saturday-morning energy.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><defs><linearGradient id="gaSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient></defs><rect width="160" height="90" fill="url(#gaSky)"/><circle cx="118" cy="30" r="12" fill="#fef08a"/><path d="M0 64 h160 v26 h-160 z" fill="#312e81"/><path d="M20 24 L60 10 M20 36 L74 20 M24 48 L92 26" stroke="#fde68a" stroke-width="1.5" opacity=".7"/><polygon points="58,58 66,44 74,58" fill="#e2e8f0"/><polygon points="60,58 66,50 72,58" fill="#f43f5e"/><path d="M66 58 q0 10 -4 14" stroke="#e2e8f0" stroke-width="3" fill="none"/></svg>`,
      craft: 'Hard 2-tone cel shading, sunset gradient skies, speed-line bursts, ink outlines, dramatic keyframe poses.'
    },
    {
      id: 'ga-ink', name: 'Monochrome Ink', era: 'Timeless',
      desc: 'Pure black ink on paper — stark, striking, graphic-novel gravitas.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#f2f0ea"/><circle cx="80" cy="42" r="22" fill="none" stroke="#141414" stroke-width="4"/><path d="M70 36 q4 -6 8 0 M82 36 q4 -6 8 0" stroke="#141414" stroke-width="3" fill="none"/><path d="M70 50 q10 8 20 0" stroke="#141414" stroke-width="3" fill="none"/><path d="M0 74 h160" stroke="#141414" stroke-width="2"/><path d="M24 74 q6 -18 14 -18 q6 0 6 12 M136 74 q-8 -14 -14 -6" stroke="#141414" stroke-width="3" fill="none"/></svg>`,
      craft: 'Single ink color, expressive line weight variation, hatching for shading, negative-space silhouettes.'
    }
  ],

  gameFlows: [
    {
      id: 'gf-straight', name: 'Straight to Play',
      desc: 'The game starts instantly — no menus, no friction, pure play from second zero.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0b1020"/><rect x="24" y="26" width="112" height="40" rx="8" fill="#111a30" stroke="#22d3ee" stroke-opacity=".6"/><path d="M66 38 L96 46 L66 54 Z" fill="#22d3ee"/><text x="80" y="66" font-size="6" text-anchor="middle" fill="#64748b">no menu — instant play</text></svg>`,
      wiring: 'Boot -> immediately spawn session; settings accessible mid-game via pause; ideal for arcade & quick-fix genres.'
    },
    {
      id: 'gf-titlehub', name: 'Title Screen + Menu Hub',
      desc: 'Classic animated title screen into a clean menu — Play, Settings, How to Play.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0a0f1e"/><text x="80" y="26" font-size="12" font-weight="bold" text-anchor="middle" fill="#e2e8f0">GAME</text><rect x="56" y="38" width="48" height="9" rx="4" fill="#6366f1"/><text x="80" y="45" font-size="6" text-anchor="middle" fill="#fff">PLAY</text><rect x="56" y="52" width="48" height="9" rx="4" fill="#1e293b"/><text x="80" y="59" font-size="6" text-anchor="middle" fill="#94a3b8">SETTINGS</text><rect x="56" y="66" width="48" height="9" rx="4" fill="#1e293b"/><text x="80" y="73" font-size="6" text-anchor="middle" fill="#94a3b8">HOW TO</text></svg>`,
      wiring: 'Title -> Menu -> Play / Settings / Help; supports saves & high scores; the safe default for most games.'
    },
    {
      id: 'gf-levelmap', name: 'Level Select Map',
      desc: 'A winding map of nodes — beat a level to unlock the next; stars show mastery.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0d1322"/><path d="M28 66 Q52 66 60 50 T96 44 Q124 40 128 22" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="4 3"/><circle cx="26" cy="66" r="6" fill="#22c55e"/><circle cx="62" cy="50" r="6" fill="#6366f1"/><circle cx="96" cy="44" r="6" fill="#1e293b" stroke="#475569"/><circle cx="128" cy="22" r="6" fill="#1e293b" stroke="#475569" stroke-dasharray="2 2"/><path d="M22 74 l2 4 4 -6" stroke="#fbbf24" stroke-width="1.5" fill="none"/><path d="M58 58 l2 4 4 -6" stroke="#fbbf24" stroke-width="1.5" fill="none"/></svg>`,
      wiring: 'Map -> Level -> Results (stars) -> back to map; 1-3 stars per level; level select locks; settings from map corner.'
    },
    {
      id: 'gf-campaign', name: 'Campaign Chapters',
      desc: 'Story chapters with named stages and save-any-chapter progress — a real journey.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#100e22"/><rect x="14" y="30" width="34" height="30" rx="3" fill="#1e1b3a" stroke="#6366f1"/><text x="31" y="48" font-size="7" text-anchor="middle" fill="#c7d2fe">Ch 1</text><rect x="54" y="30" width="34" height="30" rx="3" fill="#1e1b3a" stroke="#818cf8" opacity=".85"/><text x="71" y="48" font-size="7" text-anchor="middle" fill="#c7d2fe">Ch 2</text><rect x="94" y="30" width="34" height="30" rx="3" fill="#12102a" stroke="#374151" stroke-dasharray="3 2"/><text x="111" y="48" font-size="7" text-anchor="middle" fill="#475569">Ch 3</text><path d="M48 45 h4 M88 45 h4" stroke="#6366f1" stroke-width="2"/><rect x="14" y="66" width="114" height="6" rx="3" fill="#1e1b3a"/><rect x="14" y="66" width="76" height="6" rx="3" fill="#6366f1" opacity=".7"/></svg>`,
      wiring: 'Chapter select -> stage -> interstitial story beat -> next; chapter saves + "Continue" banner; completion %.'
    },
    {
      id: 'gf-missions', name: 'Endless + Missions',
      desc: 'One endless mode wrapped in rotating mission goals that refresh the challenge daily.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0c1322"/><path d="M8 70 Q40 70 80 56 T152 40" stroke="#22d3ee" stroke-width="2.5" fill="none"/><path d="M80 56 q30 -8 72 -2" stroke="#22d3ee" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/><rect x="12" y="12" width="132" height="8" rx="3" fill="#1e293b"/><text x="18" y="18" font-size="6" fill="#94a3b8">MISSIONS</text><circle cx="118" cy="16" r="2.5" fill="#34d399"/><circle cx="126" cy="16" r="2.5" fill="#34d399"/><circle cx="134" cy="16" r="2.5" fill="#1e293b" stroke="#475569"/></svg>`,
      wiring: 'Endless core + 3 rotating missions (collect X, survive Y, reach Z) -> claim rewards -> new missions; daily refresh seed.'
    },
    {
      id: 'gf-daily', name: 'Daily Challenge Hub',
      desc: 'Everyone gets the same seeded challenge each day — one shot, leaderboard glory.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0d1224"/><rect x="40" y="16" width="80" height="58" rx="8" fill="#151d36" stroke="#fbbf24" stroke-opacity=".7"/><text x="80" y="32" font-size="7" text-anchor="middle" fill="#fde68a">DAILY</text><text x="80" y="48" font-size="9" font-weight="bold" text-anchor="middle" fill="#e2e8f0">#409</text><rect x="52" y="56" width="56" height="8" rx="4" fill="#f59e0b"/><text x="80" y="62" font-size="6" text-anchor="middle" fill="#78350f">PLAY ONCE</text></svg>`,
      wiring: 'Hub -> daily seeded run (one attempt) -> submit score -> countdown to tomorrow; streaks for consecutive days.'
    },
    {
      id: 'gf-shop', name: 'Shop & Upgrade Loop',
      desc: 'Earn coins in runs, spend them on upgrades and cosmetics — a forever-rewarding circle.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#101426"/><rect x="16" y="14" width="58" height="62" rx="6" fill="#151b31" stroke="#334155"/><text x="45" y="26" font-size="6" text-anchor="middle" fill="#94a3b8">RUN</text><path d="M30 40 h30 M30 50 h30 M30 60 h18" stroke="#6366f1" stroke-width="2"/><rect x="86" y="14" width="58" height="62" rx="6" fill="#151b31" stroke="#fbbf24" stroke-opacity=".5"/><text x="115" y="26" font-size="6" text-anchor="middle" fill="#fde68a">SHOP</text><circle cx="100" cy="42" r="6" fill="#f59e0b"/><circle cx="116" cy="42" r="6" fill="#22d3ee"/><circle cx="132" cy="42" r="6" fill="#a855f7"/><path d="M74 45 h8" stroke="#34d399" stroke-width="2"/><path d="M79 41 l4 4 -4 4" fill="none" stroke="#34d399" stroke-width="2"/></svg>`,
      wiring: 'Run -> earn coins -> results -> shop (upgrades/cosmetics) -> back to run; show affordability states + owned states.'
    },
    {
      id: 'gf-lobby', name: 'Character / Loadout Lobby',
      desc: 'Pick your character, tweak your loadout, then jump in — identity and pre-game strategy.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0e1526"/><circle cx="44" cy="40" r="12" fill="#6366f1"/><circle cx="80" cy="40" r="12" fill="#1e293b" stroke="#475569"/><circle cx="116" cy="40" r="12" fill="#1e293b" stroke="#475569"/><circle cx="40" cy="38" r="2" fill="#fff"/><circle cx="48" cy="38" r="2" fill="#fff"/><rect x="30" y="60" width="104" height="8" rx="4" fill="#1e293b"/><rect x="30" y="60" width="34" height="8" rx="4" fill="#22d3ee"/><text x="80" y="78" font-size="6" text-anchor="middle" fill="#94a3b8">LOADOUT READY</text></svg>`,
      wiring: 'Lobby (character + loadout stats preview) -> play; characters differ in speed/size/ability; persist selection.'
    },
    {
      id: 'gf-tutorial', name: 'Guided Tutorial First',
      desc: 'A gentle scripted first level teaches controls as you play — then hands over the keys.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0c1120"/><rect x="40" y="18" width="80" height="54" rx="6" fill="#141c33"/><path d="M56 60 q24 -26 48 0" stroke="#22d3ee" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/><circle cx="80" cy="42" r="6" fill="#f472b6"/><path d="M64 30 l-8 -6 M96 30 l8 -6" stroke="#f472b6" stroke-width="1.5"/><text x="80" y="72" font-size="6" text-anchor="middle" fill="#94a3b8">TAP TO JUMP</text></svg>`,
      wiring: 'Scripted step-by-step first session (contextual prompts, no walls of text) -> completion badge -> main modes unlock.'
    },
    {
      id: 'gf-arcadehi', name: 'Arcade High-Score Loop',
      desc: 'The pure arcade ritual: insert coin, play, enter your initials on the top-score board.',
      svg: `<svg viewBox="0 0 160 90" class="w-full h-full"><rect width="160" height="90" fill="#0b0f1c"/><text x="80" y="20" font-size="9" font-weight="bold" text-anchor="middle" fill="#fbbf24">HIGH SCORES</text><path d="M44 30 h72" stroke="#374151" stroke-width="1"/><text x="48" y="42" font-size="7" fill="#e2e8f0">1. AAA 12400</text><text x="48" y="54" font-size="7" fill="#94a3b8">2. ZAI 9800</text><text x="48" y="66" font-size="7" fill="#64748b">3. KEN 7450</text><rect x="44" y="72" width="72" height="8" rx="4" fill="#6366f1"/><text x="80" y="78" font-size="6" text-anchor="middle" fill="#fff">PLAY AGAIN</text></svg>`,
      wiring: 'Game over -> score entry (3 initials) -> high-score table -> one-tap replay; local leaderboard with medals.'
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
    { id: 'print-ready', label: 'Print / Save-as-PDF Layout', tech: '@media print', desc: 'Hides buttons and formats clean pages when the user prints or saves as PDF.' },
    { id: 'share-links', label: 'Native Share Sheet', tech: 'Web Share API', desc: 'Uses the phone\'s built-in share sheet to send results or links to any app.' },
    { id: 'clipboard-io', label: 'Smart Copy Buttons', tech: 'Clipboard API', desc: 'One-tap copy that shows a friendly confirmation and falls back gracefully.' },
    { id: 'fullscreen-api', label: 'Full-Screen Mode', tech: 'Fullscreen API', desc: 'Lets users expand the stage edge-to-edge and exit with one tap.' },
    { id: 'speech-voice', label: 'Read Aloud & Voice Control', tech: 'Web Speech API', desc: 'Speaks text aloud and can take voice commands where supported.' },
    { id: 'hash-routing', label: 'Back-Button Friendly Views', tech: 'Hash Routing', desc: 'Deep-linkable screens so the browser back button works naturally.' },
    { id: 'vibration-haptics', label: 'Vibration Feedback', tech: 'Vibration API', desc: 'Gentle buzz confirmation on phones (desktop ignores it silently).' }
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
    { id: 'reduced-motion', label: 'Motion-Sensitivity Safe', tech: 'prefers-reduced-motion', desc: 'Automatically tones down animations for users who prefer calm screens.' },
    { id: 'text-wrap-balance', label: 'Balanced Headlines', tech: 'text-wrap: balance', desc: 'Keeps multi-word headlines evenly line-broken like a print designer would.' },
    { id: 'color-mix-blend', label: 'Smart Color Blending', tech: 'color-mix()', desc: 'Derives hover, active, and tinted variants from your base colors automatically.' },
    { id: 'backdrop-filters', label: 'Frosted Blur Surfaces', tech: 'backdrop-filter', desc: 'Glassy blur panels over content with crisp performance guards.' },
    { id: 'mask-craft', label: 'Artful Edge Cutouts', tech: 'mask-image', desc: 'Creative fades, cut corners, and gradient reveals without extra images.' }
  ],

  jsArchOptions: [
    { id: 'central-state', label: 'Single Source of Truth', tech: 'Central State', desc: 'Keeps all data in one clean place so every screen and counter always agrees.' },
    { id: 'event-delegation', label: 'Fast Smart Click Handling', tech: 'Event Delegation', desc: 'One clean listener handles clicks across dynamic items without memory leaks.' },
    { id: 'fsm-states', label: 'Clear Mode Rules', tech: 'State Machine (FSM)', desc: 'Prevents impossible states (like clicking play while paused or game-over).' },
    { id: 'delta-raf-loop', label: '60–120fps Smooth Loop', tech: 'Delta-Time RAF', desc: 'Keeps movement and timers running at the exact same speed on every monitor.' },
    { id: 'web-worker', label: 'Background Heavy Math', tech: 'Web Worker', desc: 'Runs heavy calculations in the background so buttons never freeze.' },
    { id: 'undo-redo-stack', label: 'Undo & Redo History', tech: 'Command Stack', desc: 'Tracks recent changes so users can step backward or forward safely.' },
    { id: 'web-audio-synth', label: 'Built-In Sound Generator', tech: 'Web Audio API', desc: 'Synthesizes crisp clicks, chimes, and effects with zero external audio files.' },
    { id: 'pointer-gesture-lock', label: 'Unified Touch, Mouse & Pen', tech: 'PointerEvents', desc: 'Makes dragging, tapping, and aiming feel great on both phones and desktops.' },
    { id: 'app-update-checker', label: 'GitHub Update Checker', tech: 'Fetch + SemVer', desc: 'Checks your GitHub repo for a newer published version and refreshes the installed app in place.' },
    { id: 'hash-router', label: 'Back-Button View Router', tech: 'Hash Router', desc: 'Maps screens to URLs so refresh & back always stay where the user expects.' },
    { id: 'pub-sub-events', label: 'Loose-Coupling Event Bus', tech: 'Pub/Sub Events', desc: 'Components talk through clean events instead of tangled direct calls.' },
    { id: 'virtualized-lists', label: 'Thousand-Item Smooth Lists', tech: 'Virtualized Lists', desc: 'Renders only visible rows so 1,000+ items scroll at full speed.' }
  ],

  jsLibsOptions: [
    { id: 'threejs', label: '3D Worlds & Lighting (Three.js)', modes: ['game', 'experimental', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.min.js"><\/script>', desc: 'Real-time 3D scenes, cameras, meshes, and shadows.' },
    { id: 'pixijs', label: 'Ultra-Fast 2D Sprites (PixiJS)', modes: ['game', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/pixi.js@8.6.6/dist/pixi.min.js"><\/script>', desc: 'Hardware-accelerated 2D graphics and thousands of particles.' },
    { id: 'matterjs', label: '2D Physics & Gravity (Matter.js)', modes: ['game', 'experimental', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/matter-js@0.20.0/build/matter.min.js"><\/script>', desc: 'Bouncing bodies, collisions, ropes, and realistic gravity.' },
    { id: 'gsap', label: 'Pro Motion Timelines (GSAP)', modes: ['app', 'game', 'experimental', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script>', desc: 'Silky choreographed animations and UI entrances.' },
    { id: 'chartjs', label: 'Charts & Analytics (Chart.js)', modes: ['app', 'tool', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"><\/script>', desc: 'Clean interactive bar, line, pie, and radar charts.' },
    { id: 'konva', label: 'Interactive Canvas Shapes (Konva)', modes: ['tool', 'experimental'], cdn: '<script src="https://cdn.jsdelivr.net/npm/konva@9.3.18/konva.min.js"><\/script>', desc: 'Drag, resize, and layer shapes on a 2D canvas.' },
    { id: 'tonejs', label: 'Music & Beat Synth (Tone.js)', modes: ['game', 'experimental', 'tool', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/tone@15.0.4/build/Tone.js"><\/script>', desc: 'Musical instruments, sequencers, and audio effects.' },
    { id: 'd3', label: 'Custom Data Diagrams (D3.js)', modes: ['tool', 'app', 'experimental', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"><\/script>', desc: 'Custom graphs, networks, and interactive data visuals.' },
    { id: 'confetti', label: 'Celebration Confetti', modes: ['app', 'game', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"><\/script>', desc: 'Fun particle bursts when users complete goals or win.' },
    { id: 'lucide', label: 'Crisp Icon Pack (Lucide)', modes: ['app', 'tool', 'game', 'experimental', 'free'], cdn: '<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"><\/script>', desc: 'Consistent, clean vector icons across all buttons.' },
    { id: 'tailwind', label: 'Utility Styling (Tailwind CSS)', modes: ['app', 'tool', 'free'], cdn: '<script src="https://cdn.tailwindcss.com/3.4.17"><\/script>', desc: 'Rapid utility classes alongside custom style.css.' },
    { id: 'sortablejs', label: 'Drag & Drop Lists (SortableJS)', modes: ['app', 'tool', 'game', 'experimental', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.6/Sortable.min.js"><\/script>', desc: 'Buttery reorderable lists and boards with touch support.' },
    { id: 'dayjs', label: 'Light Date Handling (Day.js)', modes: ['app', 'tool', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js"><\/script>', desc: 'Friendly dates, calendars, and relative times in 2KB.' },
    { id: 'animejs', label: 'Micro Animations (anime.js)', modes: ['app', 'game', 'experimental', 'free'], cdn: '<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js"><\/script>', desc: 'Choreographed springy transitions and staggered reveals.' }
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
    directive: 'Refuse generic CRUD or template thinking. Interrogate what makes this specific domain emotionally rewarding, visually magnetic, and immediately useful—then anchor the entire 50-step build around that high-leverage insight.',
    qualityGate: "A single-sentence thesis names the emotional payoff, and the Signature Moment is describable in one breath.",
    adaptiveFocus: {
      app: "For apps: the desire must name the daily job-to-be-done AND the relief users feel when it is done.",
      tool: "For tools: the desire must name the exact transformation (input -> result) and the precision expected.",
      game: "For games: name the core thrill (speed, mastery, luck, chaos) players chase within the first 10 seconds.",
      experimental: "For sandboxes: name the wonder \u2014 what users will gasp at or want to touch first.",
      free: "For hybrids: name the blended payoff \u2014 which utility meets which play, in one sentence."
    }

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
    directive: 'Go far beyond shallow demographics. Model moment-by-moment human attention, fatigue, thumb reach, and emotional momentum so every downstream UI decision serves real human behavior.',
    qualityGate: "3 personas are concrete enough to role-play cold, with named anxieties and win conditions.",
    adaptiveFocus: {
      app: "For apps: personas should differ in frequency (daily vs weekly) and in what 'done' looks like.",
      tool: "For tools: personas should differ in precision needs and input styles (casual vs pro).",
      game: "For games: personas should differ in skill (novice/mid/hardcore) and session intent (chill vs compete).",
      experimental: "For sandboxes: personas should differ in how they explore: tinkerer, watcher, performer.",
      free: "For hybrids: personas should span both blended worlds \u2014 the practical one and the playful one."
    }

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
    directive: 'Pinpoint why people abandon existing solutions in this category. Turn competitor bloat, paywalls, and clunky multi-modal dialogs into our sharpest structural advantages.',
    qualityGate: "4 real alternatives plus the exact workarounds used today, each with a keep-or-reinvent verdict.",
    adaptiveFocus: {
      app: "For apps: include at least one non-app workaround (paper, spreadsheet, memory) as the true competitor.",
      tool: "For tools: include the 'do it by hand / in a spreadsheet' baseline this tool must clearly beat.",
      game: "For games: name the exact moment existing games betray players (ads, unfair difficulty, dead ends).",
      experimental: "For sandboxes: name which existing tools feel cold or limited \u2014 and define what warmth means here.",
      free: "For hybrids: find the closest thing in EACH blended world and steal the best from both."
    }

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
    directive: 'Assume Murphy\'s Law applies to every click, tap, refresh, and resize. Eliminate friction structurally before a single layout box is drawn.',
    qualityGate: "10 failure modes each paired with a structural safeguard that makes the failure impossible, not just unlikely.",
    adaptiveFocus: {
      app: "For apps: prioritize accidental deletion, lost edits, and refresh/sync surprises.",
      tool: "For tools: prioritize invalid input, silent wrong answers, and precision frustration.",
      game: "For games: prioritize unfair deaths, control lag, and rage-quit difficulty spikes.",
      experimental: "For sandboxes: prioritize blank-canvas paralysis, accidental destruction of artwork, and export failures.",
      free: "For hybrids: prioritize mode-switch whiplash and unclear save/progress expectations."
    }

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
    directive: 'Do not settle for "clean and functional." Forge an opinionated, cohesive product identity where the chosen visual atmosphere and lighting actively reinforce the core workflow.',
    qualityGate: "Edge thesis in one sentence plus 5 micro-details \u2014 each cheap to build yet impossible to mistake for a template.",
    adaptiveFocus: {
      app: "For apps: the edge must survive: 'would a user screenshot this to a friend?'",
      tool: "For tools: the edge must show up in the first 10 seconds of use, not in a settings page.",
      game: "For games: the edge must be playable \u2014 a feel, a hook, not a menu of content.",
      experimental: "For sandboxes: the edge IS the aesthetic \u2014 name the exact visual signature.",
      free: "For hybrids: the edge lives in the blend \u2014 the seam between utility and play must feel intentional."
    }

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
    directive: 'Make the very first screen feel alive, purposeful, and self-explanatory. The user should understand 90% of the app\'s power in 3 seconds without reading a manual.',
    qualityGate: "A second-by-second timeline from first paint to first meaningful action, with zero dead air.",
    adaptiveFocus: {
      app: "For apps: the first screen must answer 'what is this and what do I do?' without a tutorial.",
      tool: "For tools: the user should produce their first real output within 5 seconds of arrival.",
      game: "For games: the player is actually controlling something inside the first 5 seconds.",
      experimental: "For sandboxes: something should already be moving or reacting when the page paints.",
      free: "For hybrids: the opening should perform the blend \u2014 both worlds visible, one obvious action."
    }

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
    directive: 'Every millisecond between user intent and visible/audible response matters. Tighten the feedback loop until using the app feels effortless and mildly addictive.',
    qualityGate: "Loop describable in 5 words; every action lands visible feedback under 100ms; a next cue is always present.",
    adaptiveFocus: {
      app: "For apps: the loop should compound \u2014 today's entries make tomorrow better.",
      tool: "For tools: the loop is tweak -> see -> copy; it must survive 100 repetitions without boredom.",
      game: "For games: Action -> Juice -> Reward -> Next inside 2 seconds at peak play.",
      experimental: "For sandboxes: the loop is touch -> wonder -> tune -> surprise.",
      free: "For hybrids: the loop should borrow the strongest mechanic from EACH world."
    }

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
    directive: 'Treat accessibility and ergonomics as core engineering craft, not an afterthought. Every interactive element must work flawlessly via mouse, touch, and keyboard alone.',
    qualityGate: "Every interactive element passes mouse, touch, AND keyboard-only use; contrast targets are numbers, not vibes.",
    adaptiveFocus: {
      app: "For apps: prioritize screen-reader announcements of state changes and focus restoration after dialogs.",
      tool: "For tools: guarantee full keyboard numeric entry plus arrow-key nudging parity on every control.",
      game: "For games: support one-handed play, remappable keys, and visible (not just audible) cue redundancy.",
      experimental: "For sandboxes: provide pointer alternatives (buttons/sliders) for every gesture-only interaction.",
      free: "For hybrids: every playful interaction needs a plain, reliable fallback that works."
    }

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
    directive: 'Make 100% client-side execution feel like a superpower: instant offline speed, complete privacy, and rock-solid portability.',
    qualityGate: "The data ownership story answers: where it lives, how it leaves, and what happens in private mode.",
    adaptiveFocus: {
      app: "For apps: define save granularity (per keystroke vs debounced) and a visible 'Saved' affordance.",
      tool: "For tools: never lose user inputs \u2014 even on crash, recover the last state.",
      game: "For games: high scores must survive refresh; settings should survive reinstalls where possible.",
      experimental: "For sandboxes: presets/artwork must be re-loadable and exportable as files.",
      free: "For hybrids: state should be one portable object \u2014 the whole creation, shareable."
    }

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
    directive: 'Great copy eliminates the need for help docs. Every button label should state its exact outcome; every error should explain how to fix it in one glance.',
    qualityGate: "A copy dictionary exists: every button states its outcome; every error states its fix.",
    adaptiveFocus: {
      app: "For apps: empty states should teach, errors should reassure, CTAs should be verb-first.",
      tool: "For tools: use precision language \u2014 'Copied 3 values', '2 decimals applied' \u2014 never vague.",
      game: "For games: score and feedback copy should celebrate in the realm's own voice, never lecture.",
      experimental: "For sandboxes: labels should invite play ('Stir the field'), not describe machinery.",
      free: "For hybrids: the voice itself can carry the blend \u2014 practical for utility, warm for play."
    }

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
    directive: 'Never bolt features onto a checklist mechanically. Make every capability earn its pixels and reinforce the core loop.',
    qualityGate: "Every feature has a job on a named screen; zero orphan features; core vs progressive split is explicit.",
    adaptiveFocus: {
      app: "For apps: the feature list should fit the 2x2: capture, organize, review, export.",
      tool: "For tools: features collapse into one screen; power hides behind progressive disclosure.",
      game: "For games: features must serve the loop \u2014 anything that pauses play gets demoted.",
      experimental: "For sandboxes: features are dials, not menus \u2014 everything tunes the live canvas.",
      free: "For hybrids: features should blur worlds gracefully (a stat that is also a decoration)."
    }

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
    directive: 'Walk through every screen transition as if you are using the app on a phone on a train and on a 27-inch desktop monitor. Smooth out every single bump.',
    qualityGate: "Every primary workflow is <= 2 taps deep; no path dead-ends; context survives every view switch.",
    adaptiveFocus: {
      app: "For apps: switching views must preserve filters, scroll position, and unsaved drafts.",
      tool: "For tools: the journey is a loop, not a path \u2014 users live inside one screen.",
      game: "For games: death/exit flows back into a retry in one action, every time.",
      experimental: "For sandboxes: navigation IS the canvas \u2014 no journey interruption unless requested.",
      free: "For hybrids: world-switching must never cost more than one tap."
    }

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
    directive: 'Great architecture is defined by how cleanly it resolves tensions. Be explicit and decisive so downstream steps never oscillate.',
    qualityGate: "6 tensions each resolved with a named hybrid pattern \u2014 no 'it depends' answers.",
    adaptiveFocus: {
      app: "For apps: depth-vs-simplicity resolves via progressive disclosure; document the exact trigger.",
      tool: "For tools: precision-vs-friendly resolves via dual input modes on every control.",
      game: "For games: juice-vs-battery resolves via a battery/calm toggle honored everywhere.",
      experimental: "For sandboxes: chaos-vs-control resolves via a randomness dial with saved presets.",
      free: "For hybrids: utility-vs-play resolves by never letting play damage the utility core."
    }

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
    directive: 'Break the design on paper right now so the final app is unbreakable in the real world.',
    qualityGate: "12 chaos scenarios each have deterministic recovery; the 1,000-item case has a measured plan.",
    adaptiveFocus: {
      app: "For apps: test rename-while-filtered, delete-during-undo, and import-collision cases.",
      tool: "For tools: test extreme inputs (0, negatives, 9-digit values) with sane clamping.",
      game: "For games: test tab-away mid-jump, 4am daylight-saving shifts, and 10-minute loops.",
      experimental: "For sandboxes: test particle counts at 10x with a graceful degradation plan.",
      free: "For hybrids: test the seam \u2014 quitting one world mid-action must not corrupt the other."
    }

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
    directive: 'Every selected technical capability must have a clear job in index.html, style.css, or script.js—no decorative buzzwords.',
    qualityGate: "A wiring matrix maps every selected capability to a concrete feature \u2014 zero decorative checkboxes.",
    adaptiveFocus: {
      app: "For apps: File/Blob IO wires to import/export; dialogs to confirmations that truly matter.",
      tool: "For tools: the Web Worker owns the heavy math; the UI never blocks on calculation.",
      game: "For games: PointerEvents carry the whole control scheme; audio unlocks on first gesture.",
      experimental: "For sandboxes: canvas + devicePixelRatio handling gets a dedicated resizing contract.",
      free: "For hybrids: shared state routes through ONE source of truth across both worlds."
    }

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
    directive: 'Protect visual calm. Give the primary workspace commanding presence while organizing secondary controls into predictable, zero-overlap zones.',
    qualityGate: "Zone map with a visual-weight budget; the primary stage holds >= 65% at every breakpoint from 320px up.",
    adaptiveFocus: {
      app: "For apps: the list/board is the stage; everything else is a drawer or dialog.",
      tool: "For tools: input and output compete for space \u2014 decide the winner per breakpoint.",
      game: "For games: HUD corners get strict budgets; the playfield always wins conflicts.",
      experimental: "For sandboxes: the canvas IS the app \u2014 UI floats or hides.",
      free: "For hybrids: each world needs a home zone; the seam between them must be designed, not accidental."
    }

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
    directive: 'Zero silent dead clicks, zero jarring browser alert()/confirm() popups. Every interaction should feel alive, responsive, and reversible.',
    qualityGate: "Every action has visual (and where enabled audio + ARIA) feedback; zero silent clicks.",
    adaptiveFocus: {
      app: "For apps: saves, deletes, and completions each get distinct, learnable feedback.",
      tool: "For tools: a subtle recalculation flicker proves liveness without noise.",
      game: "For games: hit, miss, and graze need three instantly distinguishable feedback signatures.",
      experimental: "For sandboxes: pointer proximity should always produce some visible response.",
      free: "For hybrids: feedback voice stays consistent while crossing world boundaries."
    }

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
    directive: 'A clean data model makes the entire JavaScript layer effortless. Design it so state is single-source-of-truth, serializable, and bug-resistant.',
    qualityGate: "The schema is fully normalized, versioned, and serializable \u2014 no feature lacks a field.",
    adaptiveFocus: {
      app: "For apps: entities get createdAt/updatedAt; ordering survives serialization.",
      tool: "For tools: formulas are data too \u2014 presets must serialize inputs plus settings.",
      game: "For games: run state vs persistent state are explicitly separated.",
      experimental: "For sandboxes: the seed IS the save \u2014 tiny, deterministic, re-loadable.",
      free: "For hybrids: one schema version across both worlds; migrations never drop the other world's data."
    }

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
    directive: 'Define "studio-grade" in concrete, verifiable terms so Steps 21–50 never cut corners.',
    qualityGate: "Numeric targets: FCP, interaction latency, error budget, contrast floor, plus a 10-point pass/fail checklist.",
    adaptiveFocus: {
      app: "For apps: add list-operations-per-second and save-latency targets.",
      tool: "For tools: recalculation must feel instant (<50ms) even at maximum input size.",
      game: "For games: set a frame budget per entity count and input-to-photon latency < 50ms.",
      experimental: "For sandboxes: set an fps floor at max particle count with a visible counter to prove it.",
      free: "For hybrids: set a world-switch latency budget < 200ms."
    }

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
    directive: 'Bridge strategy and engineering cleanly. After Step 20, every blueprint step should know the exact vision, constraints, and invariants.',
    qualityGate: "A one-page brief a stranger could build from; 5 invariants that are non-negotiable and testable.",
    adaptiveFocus: {
      app: "For apps: the invariants must include 'no data loss, ever'.",
      tool: "For tools: the invariants must include 'output is always honest and precise'.",
      game: "For games: the invariants must include 'controls are never unfair'.",
      experimental: "For sandboxes: the invariants must include 'the canvas never freezes unresponsive'.",
      free: "For hybrids: the invariants must include 'worlds never corrupt each other'."
    }

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
    directive: 'Architect script.js like a senior principal engineer—clean, modular, readable, zero spaghetti callbacks, and zero global variable leaks.',
    qualityGate: "A section outline plus function inventory with signatures; zero global leakage; boot order explicit.",
    adaptiveFocus: {
      app: "For apps: separate renderer functions per view, all sharing one state source.",
      tool: "For tools: a pure calculation module (testable) fully separated from the DOM.",
      game: "For games: fixed update/render split with clamped dt from line one.",
      experimental: "For sandboxes: the simulation loop separated from the render loop.",
      free: "For hybrids: world modules behind one shared event bus."
    }

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
    directive: 'Make the DOM a pure, predictable projection of `state`. Eliminate scattered state flags stored only in CSS classes or DOM text.',
    qualityGate: "The initial state object is written out literally; the FSM table contains no impossible transitions.",
    adaptiveFocus: {
      app: "For apps: item CRUD states (resting, editing, confirming-delete) are explicit.",
      tool: "For tools: dirty/clean output states plus preset-load transitions.",
      game: "For games: boot -> title -> playing -> paused -> gameover -> (restart|menu) only.",
      experimental: "For sandboxes: idle/active/recording modes where applicable.",
      free: "For hybrids: per-world substates nested under one root mode."
    }

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
    directive: 'Design clean, semantic HTML5 that screen readers love and CSS3/JS can target with surgical precision.',
    qualityGate: "An indentation tree with every id listed; landmarks valid; heading order sane.",
    adaptiveFocus: {
      app: "For apps: list containers land in <main>; toolbars in header/nav regions.",
      tool: "For tools: inputs grouped in a form with labels \u2014 every single control labelled.",
      game: "For games: the canvas gets role + aria-label; HUD elements stay in DOM order.",
      experimental: "For sandboxes: the canvas element gets a documented fallback content area.",
      free: "For hybrids: each world is a landmarked region, not a div soup."
    }

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
    directive: 'Engineer rock-solid layout geometry first—zero horizontal scrollbars, zero clipped modals, zero overlapping HUD badges at any screen size.',
    qualityGate: "@layer order fixed; token names locked; the state class list frozen.",
    adaptiveFocus: {
      app: "For apps: list and board layout classes are named by role, not position.",
      tool: "For tools: numeric outputs get tabular-nums plus fixed-width token classes.",
      game: "For games: HUD positioning uses logical properties; safe-area padding baked in.",
      experimental: "For sandboxes: the canvas fills the viewport under a dvh + no-scroll contract.",
      free: "For hybrids: one shared token layer plus a per-world theme layer."
    }

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
    directive: 'Make mouse, touch, trackpad, and keyboard feel equally first-class—never trap focus or hijack typing.',
    qualityGate: "Every gesture has keyboard parity or a documented exclusion; Escape/Enter behavior specified per screen.",
    adaptiveFocus: {
      app: "For apps: Enter submits the capture bar; Escape cancels edit-in-place.",
      tool: "For tools: arrow keys nudge; shift+arrow jumps; typing is never hijacked.",
      game: "For games: the pause key is sacred; all key handling de-duplicates repeats.",
      experimental: "For sandboxes: pointer capture during drag, release-on-up, cancel-on-leave.",
      free: "For hybrids: input modes switch cleanly along with the active world."
    }

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
    directive: 'Zero inline `onclick` attributes, zero duplicate listeners attached inside render loops.',
    qualityGate: "One dispatch map; every data-action has a handler; zero listeners attached inside render loops.",
    adaptiveFocus: {
      app: "For apps: list item actions (edit/done/delete) share one delegated listener.",
      tool: "For tools: input change events debounced at the container level.",
      game: "For games: keydown handled once; the loop reads a keys-set, not handlers.",
      experimental: "For sandboxes: pointer events attach to the canvas element, never per-particle.",
      free: "For hybrids: the event bus routes cross-world messages."
    }

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
    directive: 'Fast, safe, flicker-free rendering—user input must never lose focus or stutter even during rapid live updates.',
    qualityGate: "Batched reads/writes; user text only ever via textContent; focus survives re-renders.",
    adaptiveFocus: {
      app: "For apps: list re-renders preserve the focused row and scroll anchor.",
      tool: "For tools: output updates swap values, not whole DOM trees.",
      game: "For games: DOM HUD updates are throttled; the canvas carries the action.",
      experimental: "For sandboxes: zero DOM churn inside the RAF loop.",
      free: "For hybrids: only the active world re-renders."
    }

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
    directive: 'Guarantee the app boots and saves reliably in every browser mode—including strict private browsing or restricted iframes.',
    qualityGate: "Try/catch wrappers everywhere; the private-mode fallback is tested; schema validation runs on load.",
    adaptiveFocus: {
      app: "For apps: debounced save plus a 'restore draft?' recovery path.",
      tool: "For tools: inputs auto-saved as drafts; crash-safe.",
      game: "For games: high-score writes are atomic and version-checked.",
      experimental: "For sandboxes: the preset file format is small, human-readable, and future-proof.",
      free: "For hybrids: the full-creation export/import round-trips perfectly."
    }

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
    directive: 'Zero runaway intervals, zero refresh-rate speed bugs, zero ghost animations after restart.',
    qualityGate: "dt clamped; visibilitychange pauses everything; timers cancel cleanly on reset.",
    adaptiveFocus: {
      app: "For apps: relative dates ('2m ago') update via one interval, not many.",
      tool: "For tools: instant recalculation \u2014 no timing needed beyond the debounce.",
      game: "For games: fixed timestep with interpolation, or a documented variable-step choice.",
      experimental: "For sandboxes: the simulation pauses with the tab; time-skip clamped on resume.",
      free: "For hybrids: one shared clock keeps the worlds in sync."
    }

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
    directive: 'Sound should feel crisp, subtle, and musical—never harsh or noisy—and errors should recover gracefully with helpful user guidance.',
    qualityGate: "A synth patch table is complete; unlock-on-gesture; a global error boundary catches and reports humanely.",
    adaptiveFocus: {
      app: "For apps: 3 cues minimum \u2014 success, delete (soft), and error (gentle).",
      tool: "For tools: one subtle 'copied' tick is plenty; never surprise the user.",
      game: "For games: hit/graze/pickup/level-up are each audibly distinct within 4 notes.",
      experimental: "For sandboxes: audio-reactive mode needs a mute that also detaches visuals from audio.",
      free: "For hybrids: audio identity stays consistent across world switches."
    }

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
    directive: 'Every color token must have a clear semantic role. Keep the palette disciplined, harmonious, and unmistakable.',
    qualityGate: "The token table is complete with semantic names; dark-mode steps are tested adjacent, not just isolated.",
    adaptiveFocus: {
      app: "For apps: status colors (done/late/warn) must be label-redundant, not color-only.",
      tool: "For tools: input validity shown by color AND icon AND message.",
      game: "For games: enemy/friendly/pickup colors hold under color-blind simulation.",
      experimental: "For sandboxes: palette tokens are driven by the palette engine when selected.",
      free: "For hybrids: both worlds share one accent to stay cohesive."
    }

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
    directive: 'Typography carries 80% of UI clarity. Eliminate jittering numbers, cramped line heights, and unreadable micro-text.',
    qualityGate: "The scale is fluid via clamp(); tabular-nums on all metrics; nothing readable below 12px.",
    adaptiveFocus: {
      app: "For apps: item titles truncate gracefully; long content line-clamps with a hint.",
      tool: "For tools: numbers get guaranteed digit width \u2014 never jitter while dragging.",
      game: "For games: HUD numerals glance-readable at full gameplay speed.",
      experimental: "For sandboxes: minimal type \u2014 the art speaks, not the words.",
      free: "For hybrids: one display face for play, one workhorse for utility."
    }

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
    directive: 'Great spacing makes an interface feel twice as expensive. Let elements breathe.',
    qualityGate: "4/8px scale only; density consistent across every breakpoint.",
    adaptiveFocus: {
      app: "For apps: card internal spacing equals or exceeds the card gap (grouping logic).",
      tool: "For tools: tight inputs, generous output \u2014 space signals importance.",
      game: "For games: HUD spacing survives safe-area insets on notched phones.",
      experimental: "For sandboxes: zero chrome spacing \u2014 all space belongs to the canvas.",
      free: "For hybrids: spacing shifts subtly to signal world changes."
    }

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
    directive: 'Give the interface a unmistakable physical materiality that matches the user\'s chosen Design Style.',
    qualityGate: "One materiality spec covers cards, inputs, modals, and toasts \u2014 no orphan styles.",
    adaptiveFocus: {
      app: "For apps: surface elevation shows item state (default/hover/dragging/done).",
      tool: "For tools: input vs output surfaces contrast enough to map mentally.",
      game: "For games: panels never compete with the playfield's brightness.",
      experimental: "For sandboxes: UI surfaces fade toward transparency near the canvas.",
      free: "For hybrids: materiality can mark world identity (utility = solid, play = glassy)."
    }

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
    directive: 'Consistent lighting physics separates amateur CSS from studio-grade visual craft.',
    qualityGate: "A 4-tier elevation system written as token stacks; the radius nesting formula applied everywhere.",
    adaptiveFocus: {
      app: "For apps: dialogs get the highest tier plus the strongest shadow \u2014 hierarchy is light.",
      tool: "For tools: elevation reserved for overlays; the workspace stays flat and fast.",
      game: "For games: one glow budget per screen \u2014 maximum one glowing element at a time.",
      experimental: "For sandboxes: lighting lives mostly IN the canvas, not on the chrome.",
      free: "For hybrids: lighting consistency across the seam."
    }

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
    directive: 'Beauty never comes at the expense of readability. Fix every low-contrast pair right here.',
    qualityGate: "Every foreground/background pair is computed at >= AA (4.5 normal, 3.0 large) in every state.",
    adaptiveFocus: {
      app: "For apps: audit placeholder, disabled, and muted-metadata text specifically.",
      tool: "For tools: results must stay readable in bright daylight.",
      game: "For games: audit HUD vs playfield contrast during explosions and shake.",
      experimental: "For sandboxes: text-over-canvas needs a guaranteed scrim or badge background.",
      free: "For hybrids: audit both worlds' worst-case backgrounds."
    }

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
    directive: 'Motion should guide the eye and feel crisp—never sluggish, never animating layout-thrashing properties like width/top/left.',
    qualityGate: "All motion is transform/opacity only; reduced-motion fallbacks exist for every animation.",
    adaptiveFocus: {
      app: "For apps: view transitions run 180-240ms and never block the next click.",
      tool: "For tools: number updates tween under 150ms or not at all.",
      game: "For games: juice animations are cancelable by the next input \u2014 input beats animation.",
      experimental: "For sandboxes: the simulation is not UI animation \u2014 keep it running under reduced-motion, only tone down UI transitions.",
      free: "For hybrids: the world-switch transition is THE signature move \u2014 perfect it."
    }

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
    directive: 'Make every button, slider, and card feel wonderfully tactile under the user\'s finger or cursor.',
    qualityGate: "Every control has all 5 states designed: rest, hover, active, focus-visible, disabled.",
    adaptiveFocus: {
      app: "For apps: destructive buttons get a confirm step and a distinct danger surface.",
      tool: "For tools: sliders get exact-value tooltips; toggles get instant visual state.",
      game: "For games: mid-play there are no buttons \u2014 only keys and touches; document them all.",
      experimental: "For sandboxes: the canvas is the control \u2014 cursor states (brush/grab/pan) are designed.",
      free: "For hybrids: control language adapts per world without forcing a relearn."
    }

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
    directive: 'Zero broken image links, zero mismatched icon weights. Every vector graphic should look native to the design system.',
    qualityGate: "An icon inventory with consistent stroke weight; the empty-state illustration is spec'd; a HiDPI canvas plan is written.",
    adaptiveFocus: {
      app: "For apps: icons stay semantic (check != plus != arrow); the empty state teaches.",
      tool: "For tools: include a tiny app logo/emblem for the export header.",
      game: "For games: every game entity reads as a silhouette first.",
      experimental: "For sandboxes: a DPR-aware resize contract with tested min/max sizes.",
      free: "For hybrids: one bridging visual motif used by both worlds."
    }

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
    directive: 'This is the final layer of studio magic that transforms a solid app into something people genuinely enjoy showing to friends.',
    qualityGate: "Empty/loading/error/live states are specified for EVERY screen; one peak-moment celebration is designed.",
    adaptiveFocus: {
      app: "For apps: skeleton loaders for the board; celebration at a 100%-done day.",
      tool: "For tools: no shimmer under 80ms \u2014 instant or honest, never fake-fast.",
      game: "For games: level-up and new-best moments get the full juice budget.",
      experimental: "For sandboxes: idle drift keeps the page alive without stealing attention.",
      free: "For hybrids: cross-world achievements celebrate the blend itself."
    }

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
    directive: 'Be ruthless. Catch every missing edge case, mismatched selector idea, or forgotten constraint before locking the code contracts.',
    qualityGate: "100% of selected options are traced to an implementation decision; the contradiction count is zero.",
    adaptiveFocus: {
      app: "For apps: every essential feature appears on a named screen.",
      tool: "For tools: the precision mode is consistent across EVERY control.",
      game: "For games: the control scheme and juice settings agree everywhere.",
      experimental: "For sandboxes: export exists whenever any save-related option is on.",
      free: "For hybrids: both worlds survive the audit with equal depth."
    }

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
    directive: 'This manifest is law for Steps 48, 49, and 50. Every ID and class name must be exact and unambiguous.',
    qualityGate: "The ID/class/data-action manifest is final \u2014 no renames after this step.",
    adaptiveFocus: {
      app: "For apps: template ids and per-item action names locked.",
      tool: "For tools: every input's id + label-for pair locked.",
      game: "For games: canvas id, HUD ids, and overlay classes locked.",
      experimental: "For sandboxes: canvas and HUD hook names locked.",
      free: "For hybrids: world container ids locked."
    }

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
    directive: 'Leave zero styling guesswork for Step 49—every visual token and state rule should be crystal clear.',
    qualityGate: "The token list is final; the breakpoint list is final; every state class from Step 42 is styled.",
    adaptiveFocus: {
      app: "For apps: drag-over, dropping, and reordering transition classes locked.",
      tool: "For tools: valid/invalid input styles locked.",
      game: "For games: hit-flash, damage, and pickup flash classes locked.",
      experimental: "For sandboxes: recording/live/dormant canvas states locked.",
      free: "For hybrids: world-active vs world-dormant classes locked."
    }

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
    directive: 'Guarantee desktop power users and mobile touch users both get an effortless, native-feeling experience.',
    qualityGate: "The keyboard map is complete, including shortcuts, input guards, and focus-trap rules.",
    adaptiveFocus: {
      app: "For apps: the undo shortcut and capture-focus behavior are locked.",
      tool: "For tools: nudge steps and the reset key are locked.",
      game: "For games: pause and restart keys are locked and never re-bound.",
      experimental: "For sandboxes: the zen-mode key and modifier conventions are locked.",
      free: "For hybrids: the world-switch key is locked."
    }

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
    directive: 'Zero broken icons, zero undefined CDN globals, zero un-unlocked AudioContext warnings.',
    qualityGate: "Every icon is countable; audio patches are parameterized; CDN initialization is guarded.",
    adaptiveFocus: {
      app: "For apps: the export header logo and favicon are decided.",
      tool: "For tools: copy-confirm and success sound parameters are locked.",
      game: "For games: all 4+ SFX patches have exact frequencies and envelopes.",
      experimental: "For sandboxes: the snapshot pipeline and any beat-detect guards are locked.",
      free: "For hybrids: the shared celebration asset is locked."
    }

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
    directive: 'Every single button, slider, filter, modal, and export in Step 42 must have complete, concrete logic locked here.',
    qualityGate: "Every data-action has a locked handler; the boot sequence is traced end-to-end; resetAll is defined.",
    adaptiveFocus: {
      app: "For apps: CRUD, import/export, and search handlers locked.",
      tool: "For tools: the calc core, validation, and preset handlers locked.",
      game: "For games: spawn, loop, collision, and score handlers locked.",
      experimental: "For sandboxes: step/paint/attract and palette handlers locked.",
      free: "For hybrids: world bootstrap and shared-state handlers locked."
    }

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
    directive: 'Clear the runway completely so Steps 48, 49, and 50 emit clean, harmonious, studio-grade production code.',
    qualityGate: "The 3-way parity table is complete; the top-10 bug list names THIS app's risks, not generic ones.",
    adaptiveFocus: {
      app: "For apps: the bug list includes 'save fires before validation' and 'search steals focus'.",
      tool: "For tools: the bug list includes 'NaN propagation' and 'stale preset after edit'.",
      game: "For games: the bug list includes 'dt spike after tab return' and 'stuck key repeat'.",
      experimental: "For sandboxes: the bug list includes 'DPR change on window move' and 'seed drift'.",
      free: "For hybrids: the bug list includes 'state bleed between worlds'."
    }

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
    directive: 'Output ONLY valid, complete index.html code—no markdown fences, no commentary, no omitted sections, no placeholders.',
    qualityGate: "The file passes the Step-42 manifest check with zero orphans; it is valid and complete.",
    adaptiveFocus: {
      app: "For apps: templates for every repeating component are present.",
      tool: "For tools: form semantics plus datalists where useful.",
      game: "For games: canvas, HUD, and overlays sit in the exact planned DOM order.",
      experimental: "For sandboxes: the first canvas paint is instant.",
      free: "For hybrids: both world containers present with correct landmark structure."
    }

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
    directive: 'Output ONLY valid, complete style.css code—no markdown fences, no commentary, no omitted rules, no placeholders.',
    qualityGate: "Every id/class/data-state in the manifest has a style; zero !important escapes.",
    adaptiveFocus: {
      app: "For apps: the print layout completes the design when print is selected.",
      tool: "For tools: focus-visible rings on EVERY interactive control.",
      game: "For games: reduced-motion keeps the game fully playable (state intact, motion calmed).",
      experimental: "For sandboxes: fullscreen canvas with no scroll at any DPR.",
      free: "For hybrids: the world-switch animation is defined and performant."
    }

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
    directive: 'Output ONLY valid, complete script.js code—no markdown fences, no commentary, zero TODOs, zero stubs, zero truncated functions.',
    qualityGate: "Boots with zero console errors; every handler fires; save/load round-trips; works offline.",
    adaptiveFocus: {
      app: "For apps: a full CRUD + undo + export session is verified.",
      tool: "For tools: recalc < 50ms and copy/export are verified.",
      game: "For games: a full run + high-score persist + restart are verified.",
      experimental: "For sandboxes: randomize + preset save/load + snapshot are verified.",
      free: "For hybrids: both worlds are verified plus the seam between them."
    }

  }
];

// =========================================================================
// 50-STEP DEEP UPDATE PIPELINE v2 — takes the CURRENTLY ACTIVE index.html,
// style.css and script.js (plus the original prompt, notes.txt and the
// update goal) through 5 expertly-phased update stages:
//   U1–U10   Phase 1: Research & Codebase Intelligence
//   U11–U20  Phase 2: Update Architecture & Evolution Design
//   U21–U30  Phase 3: Implementation Blueprint
//   U31–U40  Phase 4: Integration, Quality & Safety Verification
//   U41–U50  Phase 5: Build & Deliver the Updated Files
// The ACTIVE FILES + notes.txt are attached to EVERY step so the AI is
// always working from the live, up-to-date codebase.
// =========================================================================
const UPDATE_PIPELINE_STEPS = [
  // PHASE 1: RESEARCH & CODEBASE INTELLIGENCE (U1–U10)
  {
    num: 1, stage: 1, stageName: 'Research', section: '1A: Update Intent',
    role: 'Update Intent Decoder & Goal Archaeologist',
    mainTask: 'Decode the update goal across multiple competing interpretations (bug fix, feature add, visual refresh, performance pass, or full evolution) and surface the unstated desires behind it',
    supportTask: 'Translate vague update language ("make it better", "more modern") into a numbered, testable list of explicit update theses ranked by user-visible impact',
    upstreamInputs: 'Original Prompt + Update Goal + AI Update Ideas (if kept) + Q&A Answers (if any)',
    downstreamTarget: 'U2–U5 (Codebase Cartography, Feature Inventory, Convention Codification, Health Audit)',
    creativeStretch: 'Propose 3 distinct "update personalities" (Conservative Polish, Balanced Evolution, Bold Reinvention), evaluate the risk/benefit of each against the existing app, and recommend one with justification.',
    insightHarvest: 'Read the Initial Prompt and the Update Goal together: identify which original promises are being amended, which are being extended, and which silent new expectations have appeared.',
    criticalDeliverables: '1) Decoded Update Thesis (one sentence); 2) Explicit Update Goal Matrix (Goal -> User-Visible Change -> Testable Success Criterion); 3) Update Personality recommendation with rationale; 4) Ambiguity Resolution list.',
    dynamicSignals: ['mode-lens', 'constraints-anti'],
    directive: 'Refuse generic "add features" thinking. Every decoded goal must name WHO feels WHAT change within seconds of using the updated app.',
    qualityGate: 'Each decoded goal is testable by a single manual action in the updated app.',
    adaptiveFocus: {
      app: "For apps: distinguish data-model changes from pure presentation changes — they have very different blast radius.",
      tool: "For tools: name whether accuracy/precision semantics change (breaking) or only presentation does.",
      game: "For games: separate feel-tuning updates from content/mechanic updates — players notice each differently.",
      experimental: "For sandboxes: name whether the generative core changes or only its presentation/controls.",
      free: "For hybrids: state which blended world each update touches — and which must stay untouched."
    }
  },
  {
    num: 2, stage: 1, stageName: 'Research', section: '1A: Update Intent',
    role: 'Codebase Cartographer & Architecture Surveyor',
    mainTask: 'Map the ENTIRE active codebase into a precise architecture map: every HTML landmark, template, dialog and data-action hook; every CSS layer, token and component class; every JS module, state slice, handler and render function',
    supportTask: 'Produce exact ID/class/selector inventories with line-area references so later steps can target changes without breaking untouched neighbours',
    upstreamInputs: 'Live index.html + style.css + script.js + Step U1 Update Thesis',
    downstreamTarget: 'U3–U7, U21–U26 (Inventory, Health, Blast Radius, Implementation Specs)',
    creativeStretch: 'Draw an ASCII component-and-dataflow diagram of the app showing how a user action travels from DOM event through state to render — the map every later step navigates by.',
    insightHarvest: 'While mapping, flag every place where the implementation already differs from what the notes.txt notebook promised — those gaps are update opportunities.',
    criticalDeliverables: '1) HTML Landmark & Hook Inventory (id, class, data-action, template, dialog); 2) CSS Architecture Map (tokens, layers, component classes, state classes); 3) JS Module Map (state shape, functions, listeners, render entry points); 4) ASCII Dataflow Diagram.',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Be exhaustive and literal — cite real names from the live files, never invented generic ones. This map is the update\'s ground truth.',
    qualityGate: 'Every interactive element in index.html appears in the inventory; every state class in style.css appears in the map.',
    adaptiveFocus: {
      app: "For apps: emphasize view/routing structure and save/load paths.",
      tool: "For tools: emphasize input -> calculation -> output pipeline and unit boundaries.",
      game: "For games: emphasize game-loop, FSM states and spawn/destroy paths.",
      experimental: "For sandboxes: emphasize the render loop, parameter model and pointer input path.",
      free: "For hybrids: emphasize both worlds plus the bridge/seam between them."
    }
  },
  {
    num: 3, stage: 1, stageName: 'Research', section: '1A: Update Intent',
    role: 'Feature & Capability Inventory Analyst',
    mainTask: 'Catalogue every user-facing feature currently working in the app with its trigger, result, state effect and storage footprint — the complete behavioural baseline the update must not silently break',
    supportTask: 'Mark each feature Fresh / Stable / Tired / Hidden-Gem so the update knows what to protect, what to polish, and what to retire',
    upstreamInputs: 'Live codebase + Step U2 Architecture Map + Original notes.txt feature contracts',
    downstreamTarget: 'U8 (Habit Continuity), U11 (Update Architecture)',
    creativeStretch: 'Identify one Hidden-Gem feature that deserves promotion (better placement, better discoverability) as part of this update.',
    insightHarvest: 'Compare the built feature set against the original notes.txt promises: list Delivered, Partially-Delivered and Never-Built features — partial deliveries are prime update candidates.',
    criticalDeliverables: '1) Feature Inventory Table (Feature -> Trigger -> Result -> State/Storage -> Freshness); 2) Delivered vs Promised gap list; 3) Hidden-Gem promotion candidate.',
    dynamicSignals: ['mode-lens', 'persistence-io'],
    directive: 'Inventory behaviour, not code. Describe each feature the way a user would demo it to a friend.',
    qualityGate: 'A user reading the table could regression-test the whole app feature by feature.',
    adaptiveFocus: {
      app: "For apps: include the full CRUD + undo + export loop statuses.",
      tool: "For tools: include live-recalc responsiveness and copy/export paths.",
      game: "For games: include the full run -> score -> restart loop and difficulty ramp.",
      experimental: "For sandboxes: include randomize, presets and snapshot export.",
      free: "For hybrids: include the seam flow between the two blended worlds."
    }
  },
  {
    num: 4, stage: 1, stageName: 'Research', section: '1A: Update Intent',
    role: 'Convention & Pattern Codifier',
    mainTask: 'Extract the living style guide of the current codebase: naming conventions, token names, class patterns, handler signatures, comment style, spacing rhythm and code idioms — the rules the update MUST follow to feel native',
    supportTask: 'Publish a "Voice of the Codebase" contract so every new line added by this update reads like it was written by the original author',
    upstreamInputs: 'Live codebase + Step U2 Architecture Map',
    downstreamTarget: 'U21–U26, U39 (Implementation Specs, Convention Audit)',
    creativeStretch: 'Note one existing convention that is actually a subtle trap (e.g., ambiguous event namespace, magic token), and propose a safe migration path for the update to fix it without a rewrite.',
    insightHarvest: 'Harvest the naming patterns from the most recently written, highest-quality section of the codebase — that is the direction the author was evolving toward.',
    criticalDeliverables: '1) Convention Contract (naming, tokens, structure, comments); 2) Idiom Examples (3 canonical before/after snippets); 3) Trap List with safe migration proposals.',
    dynamicSignals: ['tech-stack'],
    directive: 'Never let updated code fight the original architecture. New code should be indistinguishable in style from the code around it.',
    qualityGate: 'Given a new feature spec, any engineer could write it in-codebase-style using only this contract.',
    adaptiveFocus: {
      app: "For apps: codify view naming and data-action grammar.",
      tool: "For tools: codify input-control naming and unit formatting.",
      game: "For games: codify FSM state naming and entity/spawn idioms.",
      experimental: "For sandboxes: codify parameter/seed naming and HUD conventions.",
      free: "For hybrids: codify how both worlds share (or separate) their conventions."
    }
  },
  {
    num: 5, stage: 1, stageName: 'Research', section: '1B: Codebase Intelligence',
    role: 'Code Health, Debt & Fragility Auditor',
    mainTask: 'Audit the active codebase for tech debt, fragile couplings, dead code, duplicated logic, error-swallowing catch blocks, and brittle patterns the update must not inherit or worsen',
    supportTask: 'Score overall health (A–F) per file with a prioritised debt list: each item gets a Fix-Now / Fix-During-Update / Leave-For-Later verdict',
    upstreamInputs: 'Live codebase + Step U2 Architecture Map + Step U1 Update Thesis',
    downstreamTarget: 'U7 (Blast Radius), U18 (Resilience Upgrades), U31–U39 (Verification suite)',
    creativeStretch: 'Find the single "load-bearing wall" of the codebase — the one function/structure everything depends on — and propose a reinforcement that makes the update structurally safer.',
    insightHarvest: 'Cross-reference each debt item against the update goals: any goal that touches a fragile area gets a mandatory reinforcement precondition.',
    criticalDeliverables: '1) Per-file Health Scorecard (A–F + one-line reason); 2) Prioritised Debt Register (severity, location, verdict); 3) Load-Bearing Wall reinforcement plan.',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Judge debt by risk to THIS update, not abstract purity. A stable ugly function that the update never touches is not a problem.',
    qualityGate: 'Every debt item near the update goals has an explicit verdict and a concrete repair directive.',
    adaptiveFocus: {
      app: "For apps: scrutinize save/load and undo integrity paths hardest.",
      tool: "For tools: scrutinize calculation edge cases and precision handling.",
      game: "For games: scrutinize loop stability, pause/blur handling and state leaks between runs.",
      experimental: "For sandboxes: scrutinize pointer capture, RAF lifecycle and resize handling.",
      free: "For hybrids: scrutinize the seam — where both worlds meet is usually the most fragile spot."
    }
  },
  {
    num: 6, stage: 1, stageName: 'Research', section: '1B: Codebase Intelligence',
    role: 'Data, Storage & Migration Impact Analyst',
    mainTask: 'Map every persisted key, schema and data shape the current app writes, then determine exactly how each proposed update goal affects existing saved user data',
    supportTask: 'Design versioned migration rules so a user opening the updated app finds their old data intact, upgraded in place, and never silently wiped',
    upstreamInputs: 'Live codebase + Step U3 Feature Inventory + Update Goals',
    downstreamTarget: 'U12 (Data Evolution Design), U25 (Migration Implementation Spec), U37 (Migration Rehearsal)',
    creativeStretch: 'Design the "grandmother test": a migration flow where even the most confused legacy data lands in a safe, recoverable state with a friendly explanation.',
    insightHarvest: 'List every localStorage/IndexedDB key with its current shape, then mark each as Keep-As-Is / Extend-Backwards-Compatibly / Migrate / Retire.',
    criticalDeliverables: '1) Persisted Data Map (key -> shape -> owner feature); 2) Per-goal Data Impact verdicts; 3) Migration Strategy per affected key; 4) Grandmother-Test recovery flow.',
    dynamicSignals: ['persistence-io', 'mode-lens'],
    directive: 'Treat user data as sacred cargo. Any update that can corrupt, orphan or silently discard existing data is rejected at this step.',
    qualityGate: 'Every storage key has an explicit migration verdict; zero keys are left "accidental".',
    adaptiveFocus: {
      app: "For apps: multi-item collections with ids get explicit id-stability rules.",
      tool: "For tools: saved presets/settings get forward-compat defaults for new fields.",
      game: "For games: high scores and unlocks get preserved-or-merged rules, never reset.",
      experimental: "For sandboxes: saved artworks/seeds survive with their parameters.",
      free: "For hybrids: data from BOTH worlds migrates in one atomic pass."
    }
  },
  {
    num: 7, stage: 1, stageName: 'Research', section: '1B: Codebase Intelligence',
    role: 'Update Impact & Blast-Radius Forecaster',
    mainTask: 'For every update goal, compute the precise blast radius: which HTML sections, CSS rules, JS modules, data keys and event contracts are touched, modified or at collateral risk',
    supportTask: 'Produce a Touch Map per goal with a blast-radius score (1–5) so the update can be sequenced safest-first',
    upstreamInputs: 'Steps U1–U6 + Live codebase',
    downstreamTarget: 'U11 (Sequencing), U32 (Regression Sentinels)',
    creativeStretch: 'Identify any "two goals that fight" (each makes the other harder) and propose a reconciliation order or a merge design before implementation begins.',
    insightHarvest: 'Any element touched by 2+ goals becomes an Integration Hotspot — flag it now so U26 can design its final state explicitly.',
    criticalDeliverables: '1) Per-Goal Touch Map (file -> region -> change type); 2) Blast-Radius scores; 3) Integration Hotspot list; 4) Goal-conflict reconciliations.',
    dynamicSignals: ['tech-stack'],
    directive: 'Predict the future bug: every hotspot you fail to name here becomes a regression in the updated build. Name them all now.',
    qualityGate: 'Sum of per-goal touch maps covers 100% of the change surface with no unattributed regions.',
    adaptiveFocus: {
      app: "For apps: shared list-rendering templates are the usual silent hotspot.",
      tool: "For tools: the output panel is usually touched by every goal at once.",
      game: "For games: the HUD and the loop tick are the usual hotspots.",
      experimental: "For sandboxes: the parameter HUD touches every visual goal.",
      free: "For hybrids: the world-switch seam is the guaranteed hotspot."
    }
  },
  {
    num: 8, stage: 1, stageName: 'Research', section: '1B: Codebase Intelligence',
    role: 'User Habit & Workflow Continuity Analyst',
    mainTask: 'Model the muscle memory of existing users: their exact keystrokes, taps, orderings and rhythms they have built, and verify the update preserves every one of them or consciously upgrades it with a transition',
    supportTask: 'Classify each behavioural change as Invisible (nothing shifts), Additive (new optional path), or Breaking (old path changes) — and design a bridge for every Breaking one',
    upstreamInputs: 'Steps U3, U7 + Update Goals',
    downstreamTarget: 'U15 (Interaction Updates), U28 (Copy & Empty States)',
    creativeStretch: 'Design one delightful "we remembered you" moment the updated app shows returning users (restored scroll, resumed draft, anniversary greeting) that builds trust instantly.',
    insightHarvest: 'Walk the top 3 user workflows end-to-end against the planned changes; mark the exact step numbers where behaviour changes.',
    criticalDeliverables: '1) Habit Inventory (top 10 muscle-memory paths); 2) Change Classification (Invisible/Additive/Breaking); 3) Bridges for every Breaking change; 4) Returning-User delight moment design.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics'],
    directive: 'A returning user should feel the app got better while they were away — never that someone rearranged the furniture.',
    qualityGate: 'Zero unbridged Breaking changes; the delight moment is spec\'d concretely enough to build.',
    adaptiveFocus: {
      app: "For apps: keyboard shortcuts and bulk-action paths get the bridge treatment.",
      tool: "For tools: exact-value input habits and preset recall must not shift unexpectedly.",
      game: "For games: control mappings and scoring rules changing must be announced in-app.",
      experimental: "For sandboxes: saved presets must still load and still look right.",
      free: "For hybrids: whichever world a user favors must feel untouched by the other's updates."
    }
  },
  {
    num: 9, stage: 1, stageName: 'Research', section: '1B: Codebase Intelligence',
    role: 'Update Opportunity & Quick-Win Radar',
    mainTask: 'Scan beyond the literal update goal for high-value adjacent improvements the codebase is naturally begging for: cheap wins, obvious polish, sleeping potential, and one ambitious stretch idea',
    supportTask: 'Score every opportunity on Impact vs Effort (2x2) and label Each: Include (serves the goal), Defer (park with reason), or Reject (out of scope — protect focus)',
    upstreamInputs: 'Steps U1–U8 + Update Goals + Original Prompt',
    downstreamTarget: 'U10 (Update Charter), U11 (Architecture)',
    creativeStretch: 'Name one "10x whisper" — a tiny change (under 10 lines) that would make users say "whoa, it does THAT now?!" — and slot it into the update.',
    insightHarvest: 'Re-read the original notes.txt wishlist items that never shipped; any that can ride along with the current goals cheaply become Include candidates.',
    criticalDeliverables: '1) Opportunity Radar (10+ candidates with 2x2 scores); 2) Include/Defer/Reject verdicts; 3) The 10x whisper design; 4) Focus-protection rationale for every Reject.',
    dynamicSignals: ['mode-lens', 'constraints-anti'],
    directive: 'Scope discipline is the art: the best update includes what serves the goal and loudly rejects what dilutes it.',
    qualityGate: 'Every Include opportunity traces to a user-visible improvement; the update stays within the goal\'s logical neighborhood.',
    adaptiveFocus: {
      app: "For apps: quick wins usually hide in empty states and export polish.",
      tool: "For tools: quick wins usually hide in keyboard precision and preset previews.",
      game: "For games: quick wins usually hide in juice (screenshake, combos, celebrations).",
      experimental: "For sandboxes: quick wins usually hide in randomize quality and snapshot crispness.",
      free: "For hybrids: quick wins usually hide at the seam — small bridges that feel magical."
    }
  },
  {
    num: 10, stage: 1, stageName: 'Research', section: '1B: Codebase Intelligence',
    role: 'Update Charter & Non-Negotiables Locksmith',
    mainTask: 'Synthesize U1–U9 into the single authoritative Update Charter: in-scope goals, ordered priorities, protect-list (things that must NOT change), bridge-list, and the definition of done',
    supportTask: 'Publish the Non-Negotiables (data safety, regression limits, convention compliance, performance floors) that every later step must respect absolutely',
    upstreamInputs: 'All of Phase 1',
    downstreamTarget: 'All of Phase 2 (Update Architecture & Design)',
    creativeStretch: 'Write the 3-sentence "Update Manifesto" that a tired implementer at U48 can read and instantly make the right call on any ambiguous edge.',
    insightHarvest: 'Resolve every contradiction found in Phase 1 here — an unresolved contradiction becomes a corrupted file at emission time.',
    criticalDeliverables: '1) Update Charter (scope, priorities, sequence); 2) Non-Negotiables list (hard floors); 3) Protect-List (explicit no-touch zones); 4) Update Manifesto (3 sentences).',
    dynamicSignals: ['mode-lens', 'constraints-anti', 'persistence-io'],
    directive: 'This charter is the update\'s constitution. Later steps may refine HOW, never WHAT or WHY.',
    qualityGate: 'Any engineer could implement the update from the charter alone without re-reading Phase 1.',
    adaptiveFocus: {
      app: "For apps: the charter names the data-integrity floor as non-negotiable #1.",
      tool: "For tools: the charter names calculation-correctness as non-negotiable #1.",
      game: "For games: the charter names playability of the full loop as non-negotiable #1.",
      experimental: "For sandboxes: the charter names artwork-integrity (no lost creations) as #1.",
      free: "For hybrids: the charter names both-worlds-working as non-negotiable #1."
    }
  },

  // PHASE 2: UPDATE ARCHITECTURE & EVOLUTION DESIGN (U11–U20)
  {
    num: 11, stage: 2, stageName: 'Design', section: '2A: Update Architecture',
    role: 'Update Architecture & Module Evolution Strategist',
    mainTask: 'Design how the existing architecture absorbs every charter goal: which modules extend, which split, which gain new siblings — with exact before/after module boundaries',
    supportTask: 'Sequence the changes safest-first into ordered implementation waves, each wave leaving the app fully working (no broken intermediate states)',
    upstreamInputs: 'Step U10 Charter + Step U2 Architecture Map + Step U7 Touch Maps',
    downstreamTarget: 'U21–U26 (Implementation Specs), U30 (Contract Lock)',
    creativeStretch: 'Apply the "strangler fig" pattern where possible: new structure grows around and then replaces old structure, so at no point is the app broken.',
    insightHarvest: 'Re-verify each proposed boundary against Step U4\'s Convention Contract — evolution must feel native, not grafted.',
    criticalDeliverables: '1) Module Evolution Plan (before/after boundaries); 2) Safest-first Wave Sequence; 3) Strangler-fig strategy per big change; 4) Architecture Decision Record (3 key choices + alternatives rejected).',
    dynamicSignals: ['tech-stack', 'mode-lens'],
    directive: 'Evolve the skeleton, never break it. Every wave must end with a fully bootable, fully working app.',
    qualityGate: 'Each wave is independently shippable; no wave depends on a later wave to function.',
    adaptiveFocus: {
      app: "For apps: views/state evolve without orphaning saved data even mid-sequence.",
      tool: "For tools: the calc pipeline extends without a single wrong intermediate result.",
      game: "For games: the loop and FSM survive every wave; the game stays playable throughout.",
      experimental: "For sandboxes: the render loop never drops a frame boundary during module swaps.",
      free: "For hybrids: each wave keeps both worlds and their seam alive."
    }
  },
  {
    num: 12, stage: 2, stageName: 'Design', section: '2A: Update Architecture',
    role: 'State & Data Evolution Designer',
    mainTask: 'Design the target state schema (vNext) and its migration path from the live schema, including default-filling for new fields, deprecation handling for removed fields, and rollback safety',
    supportTask: 'Write the exact migration pseudocode (version detection -> transform -> validate -> persist) that U25 will turn into final code',
    upstreamInputs: 'Step U6 Data Impact + Step U10 Charter + Live codebase',
    downstreamTarget: 'U25 (Migration Implementation Spec), U37 (Migration Rehearsal)',
    creativeStretch: 'Design a self-healing touch: if migration encounters data it does not recognize, it preserves it verbatim in a legacy pocket instead of discarding it.',
    insightHarvest: 'Align every new field with the naming conventions from U4 so the vNext schema reads native from day one.',
    criticalDeliverables: '1) vNext State Schema (full shape + field-by-field rationale); 2) Migration Pseudocode (detect/transform/validate/persist); 3) Default-filling & deprecation rules; 4) Legacy-pocket self-healing design.',
    dynamicSignals: ['persistence-io', 'mode-lens'],
    directive: 'No user ever loses data to an update. The migration is designed, tested and reversible — or the goal is rejected.',
    qualityGate: 'Migration pseudocode handles clean, legacy, corrupted and empty storage cases explicitly.',
    adaptiveFocus: {
      app: "For apps: item id stability and collection merge rules are explicit.",
      tool: "For tools: user presets gain new fields with safe defaults, old presets stay loadable.",
      game: "For games: scores/unlocks merge, never reset; new stats start at zero without hiding old ones.",
      experimental: "For sandboxes: saved seeds/presets load into the new parameter model losslessly.",
      free: "For hybrids: one atomic migration covers both worlds' data."
    }
  },
  {
    num: 13, stage: 2, stageName: 'Design', section: '2A: Update Architecture',
    role: 'DOM, Semantics & Landmark Evolution Planner',
    mainTask: 'Design the updated DOM tree: which landmarks stay, move, appear or retire; how semantic structure, ARIA hooks and tab order evolve; and how every planned UI change lands as a concrete DOM edit list',
    supportTask: 'Guarantee accessibility parity or improvement: focus order never regresses, landmarks remain valid, and every new control is reachable and labeled',
    upstreamInputs: 'Steps U2, U7, U10 + Live index.html',
    downstreamTarget: 'U21 (HTML Change Spec), U35 (A11y Verification)',
    creativeStretch: 'Turn one previously-visual-only element into a semantic upgrade (e.g., a div row becoming a list, a custom popup becoming <dialog>) — the invisible update that quietly levels the app up.',
    insightHarvest: 'Every hook the script.js depends on (ids, data-*) is named here as Keep / Rename (with both old and new) / Add / Remove, so U23 can plan handler parity precisely.',
    criticalDeliverables: '1) Updated DOM tree blueprint; 2) Landmark & hook edit list (Keep/Rename/Add/Remove); 3) Tab-order & focus map; 4) Semantic upgrade opportunities taken.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics'],
    directive: 'The DOM is a public contract. Every hook change here is mirrored in U22 (CSS) and U23 (JS) — no unilateral edits later.',
    qualityGate: 'Every id/data-action used by live script.js has an explicit disposition; focus order map is complete.',
    adaptiveFocus: {
      app: "For apps: list/template structures evolve without breaking keyboard navigation.",
      tool: "For tools: form semantics extend with correct labels and datalists.",
      game: "For games: HUD elements keep their roles and live regions announce state changes.",
      experimental: "For sandboxes: canvas + control HUD structure stays sound across resize.",
      free: "For hybrids: both worlds keep distinct landmarks — screen readers can tell them apart."
    }
  },
  {
    num: 14, stage: 2, stageName: 'Design', section: '2A: Update Architecture',
    role: 'Visual Language & Design-System Evolution Designer',
    mainTask: 'Design how the visual language evolves to serve the update: token additions/retunes, new component states, and how any new visual options (textures, back-lighting, light behaviour, live backgrounds from the Blueprint) integrate into the existing look without a jarring style shift',
    supportTask: 'Produce an exact token diff (added/changed/retired custom properties with final values) plus the CSS recipe for each new visual layer the Blueprint demands',
    upstreamInputs: 'Blueprint Visual Options + Live style.css + Steps U4, U10',
    downstreamTarget: 'U22 (CSS Change Spec), U27 (Micro-interactions)',
    creativeStretch: 'Design one visual signature upgrade — a single detail (corner rhythm, glow behavior, texture, motion accent) refined to perfection — that makes the update feel designed, not patched.',
    insightHarvest: 'Harvest the existing token vocabulary so new tokens compose with old ones (same scale, same naming) rather than starting a second dialect.',
    criticalDeliverables: '1) Token Diff (add/change/retire + final values); 2) New-component visual specs; 3) Exact CSS recipes for new visual layers (texture/backlight/light behaviour/live background per Blueprint); 4) Visual signature upgrade design.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'Evolution, not revolution: every new visual element must share DNA with what already exists.',
    qualityGate: 'Every changed token has a before/after value and a migration-safe fallback; new layers degrade gracefully.',
    adaptiveFocus: {
      app: "For apps: density and readability levels stay pleasant during any visual change.",
      tool: "For tools: contrast of data vs chrome never drops below the current level.",
      game: "For games: juice additions never obscure gameplay-critical information.",
      experimental: "For sandboxes: new visual layers never cap the canvas frame rate.",
      free: "For hybrids: both worlds stay visually cohesive — one shared token dialect."
    }
  },
  {
    num: 15, stage: 2, stageName: 'Design', section: '2B: Evolution Design',
    role: 'Interaction, Motion & Feedback Update Designer',
    mainTask: 'Design every interaction change: new gestures/shortcuts, changed timings, updated feedback (visual, motion, audio) — each mapped to its habit-bridge from U8',
    supportTask: 'Define motion/delay budgets (hover <=150ms, panels <=300ms, celebrations <=900ms) and ensure prefers-reduced-motion parity for every new effect',
    upstreamInputs: 'Steps U8 (Habit Bridges), U10 Charter + Blueprint Motion/Audio settings',
    downstreamTarget: 'U27 (Micro-Interaction Spec), U31 (Parity Audit)',
    creativeStretch: 'Design one "hero interaction" for the update — the change users will show their friends — with full choreography (trigger, easing curve, feedback layers).',
    insightHarvest: 'Every changed timing is listed old -> new so U32 can regression-check that nothing users rely on got slower or quieter by accident.',
    criticalDeliverables: '1) Interaction Change Catalog (trigger -> behavior -> bridge); 2) Motion & timing budgets; 3) Reduced-motion parity plan; 4) Hero interaction choreography.',
    dynamicSignals: ['sensory-motion', 'platform-ergonomics'],
    directive: 'Interaction is where users FEEL the update. Make every change intentional, budgeted and reversible.',
    qualityGate: 'No interaction exceeds its budget; every new motion has a reduced-motion twin.',
    adaptiveFocus: {
      app: "For apps: drag/reorder and multi-select feel even more trustworthy than before.",
      tool: "For tools: input responsiveness (recalc <50ms) is protected as a hard floor.",
      game: "For games: input latency is sacred — juice never adds a single frame of delay.",
      experimental: "For sandboxes: pointer capture and pressure feel richer, never laggier.",
      free: "For hybrids: interactions feel identical in both worlds — one shared muscle memory."
    }
  },
  {
    num: 16, stage: 2, stageName: 'Design', section: '2B: Evolution Design',
    role: 'Internal API & Event Contract Evolution Planner',
    mainTask: 'Design the updated internal contracts: function signatures (added/changed params + defaults), event names/payloads, state-action grammar, and module boundaries — with explicit backward-compatibility rules',
    supportTask: 'Write the exact before/after signature table for every touched function so U23 can implement without re-deciding interfaces',
    upstreamInputs: 'Steps U2, U7, U11 + Live script.js',
    downstreamTarget: 'U23 (JS Change Spec), U31 (Parity Audit)',
    creativeStretch: 'Find one internal contract that was implicit and dangerous (undocumented invariants, stringly-typed events) and promote it to an explicit, documented, validated contract.',
    insightHarvest: 'Every renamed/retired internal call site is enumerated here (function -> call sites) so U23 leaves zero dangling references.',
    criticalDeliverables: '1) Signature Diff Table (before/after/defaults); 2) Event & payload contract diff; 3) Call-site enumeration for every change; 4) Promoted implicit-contract documentation.',
    dynamicSignals: ['tech-stack'],
    directive: 'Internal or not, contracts are contracts. The updated app must boot with zero undefined-function and zero unknown-event references.',
    qualityGate: 'Every changed signature has a compatibility default or a complete call-site update plan.',
    adaptiveFocus: {
      app: "For apps: render(state) and save/load contracts stay single-source-of-truth.",
      tool: "For tools: the calculate(input) pipeline contract stays pure and testable.",
      game: "For games: update(dt)/render(dt) and FSM transition contracts stay strict.",
      experimental: "For sandboxes: parameter-set and seed contracts stay serializable.",
      free: "For hybrids: the world-switch API stays atomic and reversible."
    }
  },
  {
    num: 17, stage: 2, stageName: 'Design', section: '2B: Evolution Design',
    role: 'Performance & Resource Evolution Planner',
    mainTask: 'Set performance floors for the updated app (first paint, interaction latency, sustained frame rate, memory ceiling) and design every goal to meet or beat the current app\'s numbers',
    supportTask: 'Budget each new feature\'s cost (DOM nodes, listeners, per-frame work) and design its lazy/deferred/cancellable strategy before implementation',
    upstreamInputs: 'Live codebase + Step U10 Charter + Blueprint platform settings',
    downstreamTarget: 'U34 (Perf Verification), U21–U26 (specs get budgets inline)',
    creativeStretch: 'Design one performance gift: find something the old app did wastefully (re-render storms, layout thrash, leak-prone listeners) and fix it so the update leaves the app faster than it found it.',
    insightHarvest: 'Every RAF/interval/listener in the live codebase is inventoried with its lifecycle owner (who starts it, who stops it) — leaks found here become the perf gift list.',
    criticalDeliverables: '1) Performance Floor Contract (per platform target); 2) Per-feature cost budgets + lazy strategies; 3) RAF/interval/listener lifecycle inventory; 4) Performance-gift fix design.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'The updated app must feel at least as fast as the old one on its WEAKEST target device — that is the floor, not the desktop.',
    qualityGate: 'Every new feature has a cost budget and a degradation path on weak hardware.',
    adaptiveFocus: {
      app: "For apps: list rendering of 200+ items stays smooth after the update.",
      tool: "For tools: live recalc stays <50ms even with the new features attached.",
      game: "For games: sustained 60fps with the new juice at 2x entity counts.",
      experimental: "For sandboxes: canvas + any new live background layer coexist within the frame budget.",
      free: "For hybrids: switching worlds never triggers a frame-rate cliff."
    }
  },
  {
    num: 18, stage: 2, stageName: 'Design', section: '2B: Evolution Design',
    role: 'Error Handling, Resilience & Recovery Upgrader',
    mainTask: 'Design the updated error-handling architecture: user-facing failure messages in plain language, input validation states, storage failure recovery, and network/capability fallbacks',
    supportTask: 'Replace every silent catch, undefined-swallowing fallback and console-only error in the blast radius with a designed recovery path',
    upstreamInputs: 'Step U5 Debt Register + Steps U6, U10',
    downstreamTarget: 'U24 (Feature Specs), U33 (Failure Testing)',
    creativeStretch: 'Design the "graceful degradation ladder": for the app\'s most advanced new capability, define progressively simpler fallbacks so the feature works for EVERYONE, just less richly.',
    insightHarvest: 'Harvest every existing try/catch in the blast radius; each gets an explicit verdict: keep / redesign / remove (because the failure became impossible).',
    criticalDeliverables: '1) Error UX catalogue (failure -> message -> recovery action); 2) Validation state designs per input; 3) Storage & capability fallback paths; 4) Graceful degradation ladder for flagship new features.',
    dynamicSignals: ['mode-lens', 'persistence-io'],
    directive: 'Errors are UX too. No updated feature ships without knowing exactly how it fails, what it says, and how it recovers.',
    qualityGate: 'Every failure mode in the update\'s blast radius has a designed, human-readable response.',
    adaptiveFocus: {
      app: "For apps: quota-exceeded and corrupted-save both recover without data loss.",
      tool: "For tools: invalid input never produces silently wrong output anymore.",
      game: "For games: even a corrupted save lands in a playable fresh state with scores explained.",
      experimental: "For sandboxes: WebGL/canvas failures fall back to a working simplified renderer.",
      free: "For hybrids: one world failing never takes the other down with it."
    }
  },
  {
    num: 19, stage: 2, stageName: 'Design', section: '2B: Evolution Design',
    role: 'Accessibility & Inclusive Update Auditor',
    mainTask: 'Audit every planned change for accessibility impact: contrast, focus, keyboard operability, screen-reader announcements, touch-target sizes, motion safety — and design the a11y spec for each new UI element',
    supportTask: 'Define the updated app\'s a11y floor (WCAG level, contrast minimums, target sizes, announcement rules) as a hard non-negotiable for implementation',
    upstreamInputs: 'Steps U13, U15 + Blueprint A11y/Motion settings',
    downstreamTarget: 'U21–U23 (specs), U35 (A11y Verification)',
    creativeStretch: 'Find one interaction that was keyboard-hostile in the old app and design the update to make it a keyboard showcase.',
    insightHarvest: 'List every aria-live region, focus trap and skip link in the live app — each must survive the update with its behavior intact or improved.',
    criticalDeliverables: '1) Per-change a11y impact verdicts; 2) New-element a11y specs (roles, labels, announcements); 3) Updated a11y floor contract; 4) Keyboard-showcase upgrade design.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'Accessibility is not a checklist — it is the update\'s promise that nobody gets locked out of the improvement.',
    qualityGate: 'Zero regressions vs the old app; every new element operable by keyboard alone.',
    adaptiveFocus: {
      app: "For apps: bulk actions and dialogs keep focus management correct.",
      tool: "For tools: every control reachable + operable by keyboard, values announced.",
      game: "For games: one-switch / low-mobility play paths preserved or added.",
      experimental: "For sandboxes: parameter controls remain screen-reader operable.",
      free: "For hybrids: the world switch itself is keyboard operable with clear announcements."
    }
  },
  {
    num: 20, stage: 2, stageName: 'Design', section: '2B: Evolution Design',
    role: 'Master Update Blueprint & Change Contract Lock',
    mainTask: 'Consolidate U11–U19 into the single Master Update Blueprint: final architecture, final data model, final DOM/hooks plan, final visual language, final interaction set, final contracts — with zero unresolved options',
    supportTask: 'Lock the Change Contract: a complete, ordered list of every atomic change (file, region, old -> new) that Phases 3–5 implement without re-deciding anything',
    upstreamInputs: 'All of Phase 2',
    downstreamTarget: 'All of Phase 3 (Implementation Blueprint)',
    creativeStretch: 'Write the "Update README": a short user-facing summary of what changed and why — the changelog the update will eventually show its users.',
    insightHarvest: 'Cross-check the locked blueprint against the U10 Charter: every charter goal is present, every protect-list item untouched, every bridge from U8 included.',
    criticalDeliverables: '1) Master Update Blueprint (all decisions final); 2) Atomic Change Contract (ordered, exhaustive); 3) Charter-compliance cross-check; 4) User-facing Update README draft.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'persistence-io', 'visual-system'],
    directive: 'From here, implementation steps EXECUTE the blueprint — they do not re-argue it. Ambiguity found later is resolved in favor of the Charter.',
    qualityGate: 'Zero open questions; every change in the contract traces to a charter goal or a protect-list guarantee.',
    adaptiveFocus: {
      app: "For apps: the contract preserves the full data-safety chain end-to-end.",
      tool: "For tools: the contract preserves calculation correctness end-to-end.",
      game: "For games: the contract preserves the full playable loop end-to-end.",
      experimental: "For sandboxes: the contract preserves render integrity end-to-end.",
      free: "For hybrids: the contract preserves both worlds and their seam end-to-end."
    }
  },

  // PHASE 3: IMPLEMENTATION BLUEPRINT (U21–U30)
  {
    num: 21, stage: 3, stageName: 'Blueprint', section: '3A: Implementation Specs',
    role: 'HTML Structure Change Specification Engineer',
    mainTask: 'Write the exact updated index.html change specification: for every touched region, the complete final markup (not diffs — the actual final code for changed regions), so emission is assembly, not invention',
    supportTask: 'Verify every change against the hook disposition list from U13 so ids, data-actions and templates match what CSS/JS will be told to expect',
    upstreamInputs: 'Step U20 Change Contract + Live index.html + Step U13 DOM Plan',
    downstreamTarget: 'U22–U23 (CSS/JS specs), U41 (HTML Manifest), U48 (Emission)',
    creativeStretch: 'Wherever new markup is added, author it at the same polish level as the app\'s best existing markup — indentation, comments and semantic care included.',
    insightHarvest: 'Each specified region lists what it replaces and why — so U46 can verify nothing was dropped silently at emission time.',
    criticalDeliverables: '1) Region-by-region final markup spec (complete code for every changed block); 2) Hook disposition cross-check table; 3) New-template/dialog specs; 4) Verification checklist for U46.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics'],
    directive: 'Write the code NOW, in this step, in final form — later steps assemble and verify, they never re-invent markup under pressure.',
    qualityGate: 'A cold reader could assemble the updated index.html from this spec alone with zero guesswork.',
    adaptiveFocus: {
      app: "For apps: list templates get the complete repeated-item markup.",
      tool: "For tools: every new control ships with label, help text and error slot.",
      game: "For games: HUD/overlay markup ships complete with ARIA live wiring.",
      experimental: "For sandboxes: new HUD parameters ship with accessible control markup.",
      free: "For hybrids: both worlds\' new regions are fully specified."
    }
  },
  {
    num: 22, stage: 3, stageName: 'Blueprint', section: '3A: Implementation Specs',
    role: 'CSS Token & Rule Change Specification Engineer',
    mainTask: 'Write the exact updated style.css change specification: final code for every new/changed token, component rule, state class, responsive branch, and every new visual layer (texture, back-lighting, light behaviour, live background) demanded by the Blueprint',
    supportTask: 'Ensure 100% selector parity with the U21 HTML spec and 100% state-class parity with the U23 JS spec — zero styled-but-dead and zero used-but-unstyled selectors',
    upstreamInputs: 'Steps U14 (Visual Evolution), U20 Contract, U21 HTML Spec',
    downstreamTarget: 'U42 (CSS Manifest), U49 (Emission)',
    creativeStretch: 'Craft the exact CSS for the update\'s visual signature moment at a level a master designer would sign — final values, easing curves, glow recipes, no approximations.',
    insightHarvest: 'Every rule that changes behavior (not just values) is flagged so U32 can regression-check the interactions it powers.',
    criticalDeliverables: '1) Final token definitions (complete :root block); 2) Final code for every new/changed rule; 3) Exact recipes for texture/backlight/light-behaviour/live-background layers per Blueprint; 4) Selector parity table.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'No "add appropriate styling" hand-waving. This step writes the actual final CSS that goes in the file.',
    qualityGate: 'Every selector in the updated app has its full rule written here; zero approximations.',
    adaptiveFocus: {
      app: "For apps: dense-state layouts (many items) stay beautiful in the spec.",
      tool: "For tools: input states (focus/error/disabled) fully specified with high-contrast focus rings.",
      game: "For games: HUD readability at all juice levels is specified with values.",
      experimental: "For sandboxes: canvas edge cases (resize, DPR) have specified layout rules.",
      free: "For hybrids: the world-switch transition has its complete keyframes written."
    }
  },
  {
    num: 23, stage: 3, stageName: 'Blueprint', section: '3A: Implementation Specs',
    role: 'JavaScript Module Change Specification Engineer',
    mainTask: 'Write the exact updated script.js change specification: final code for every new/changed function, handler, state slice and listener — assembled to match the U16 contract table exactly',
    supportTask: 'Guarantee handler parity: every data-action/id the U21 HTML spec exposes has a working handler, and every handler the JS ships has real markup to catch',
    upstreamInputs: 'Steps U16 (Contracts), U20 Contract, U21 HTML Spec, U12 Data Model',
    downstreamTarget: 'U43 (JS Manifest), U50 (Emission)',
    creativeStretch: 'Write the flagship new feature\'s core function at production quality NOW — the most-used code path of the whole update deserves its best craftsmanship here.',
    insightHarvest: 'Each specified function lists its U16 signature, its call sites, and the test scenario from U29 that will verify it.',
    criticalDeliverables: '1) Final code for every new/changed function & handler; 2) Handler-parity cross-check table; 3) State-slice diff with migration hooks marked; 4) Per-function test-scenario reference.',
    dynamicSignals: ['tech-stack', 'persistence-io', 'mode-lens'],
    directive: 'Write the real JS in this step. Emission (U50) is assembly + verification, never invention under token pressure.',
    qualityGate: 'A cold reader could assemble the updated script.js from this spec with zero guesswork.',
    adaptiveFocus: {
      app: "For apps: CRUD + undo + export paths get final code for every changed branch.",
      tool: "For tools: the calc pipeline changes ship as final, unit-annotated code.",
      game: "For games: loop/FSM changes ship as final code with dt-safety built in.",
      experimental: "For sandboxes: parameter/randomize changes ship as final, serializable code.",
      free: "For hybrids: the seam API changes ship as final atomic code."
    }
  },
  {
    num: 24, stage: 3, stageName: 'Blueprint', section: '3A: Implementation Specs',
    role: 'New Feature Deep-Implementation Specification Lead',
    mainTask: 'For each genuinely NEW feature in the update: the complete behavioral spec — every input, every state, every edge, every feedback channel, every failure — written so completely that no implementation decision remains',
    supportTask: 'Design each feature\'s integration: where it docks in the UI, how it announces itself to returning users, and how it stays out of the way of the old flows',
    upstreamInputs: 'Step U20 Contract + Steps U21–U23 Specs',
    downstreamTarget: 'U26 (Integration), U29 (Test Matrix)',
    creativeStretch: 'For the flagship new feature, design the 10-second wow: what a user does, sees and feels in the first ten seconds of discovering it.',
    insightHarvest: 'Each new feature lists its "quiet mode" — how it behaves for users who never touch it — so additions never tax people who just want the old app, better.',
    criticalDeliverables: '1) Per-feature behavioral spec (inputs/states/edges/feedback/failures); 2) Integration & discoverability design; 3) The 10-second wow choreography; 4) Quiet-mode behavior per feature.',
    dynamicSignals: ['mode-lens', 'sensory-motion'],
    directive: 'A new feature is only "specified" when its worst day is designed, not just its demo path.',
    qualityGate: 'Every feature has its failure, empty and first-run states fully designed.',
    adaptiveFocus: {
      app: "For apps: new features respect the undo and search paradigms of the host app.",
      tool: "For tools: new features respect the precision and copy/export paradigms.",
      game: "For games: new features respect the loop — nothing pauses the fun to explain itself.",
      experimental: "For sandboxes: new features respect the direct-manipulation feel.",
      free: "For hybrids: new features declare which world they belong to — or bridge both."
    }
  },
  {
    num: 25, stage: 3, stageName: 'Blueprint', section: '3A: Implementation Specs',
    role: 'Data Migration Implementation Specialist',
    mainTask: 'Turn U12\'s migration design into the exact final migration code (version detect -> transform -> validate -> persist, with legacy-pocket self-healing) ready to drop into script.js',
    supportTask: 'Define the dry-run mode: the migration logs what it WOULD change for the first run, giving paranoid users trust and developers a debug window',
    upstreamInputs: 'Step U12 Migration Design + U23 JS Spec',
    downstreamTarget: 'U37 (Migration Rehearsal), U50 (Emission)',
    creativeStretch: 'Design the migration\'s user-visible confirmation moment: a small, warm toast ("Your 47 items travelled safely to the new version") that turns an invisible triumph into felt trust.',
    insightHarvest: 'Enumerate every data shape the LIVE codebase can possibly have written (including older versions found in notes.txt history) — the migration handles them all explicitly.',
    criticalDeliverables: '1) Final migration code (complete); 2) Version-detection & branching logic; 3) Dry-run logging design; 4) Safe-travel confirmation UX.',
    dynamicSignals: ['persistence-io'],
    directive: 'The migration runs ONCE, on real user data, with no second chances. Write it like the parachute it is.',
    qualityGate: 'Migration code handles clean, legacy, corrupted and empty stores; it never throws uncaught.',
    adaptiveFocus: {
      app: "For apps: id collisions and merge duplicates have explicit resolution rules.",
      tool: "For tools: presets migrate with their parameters intact and typed.",
      game: "For games: personal bests migrate with dates; new stats start fresh.",
      experimental: "For sandboxes: seeds/presets migrate with full parameter fidelity.",
      free: "For hybrids: both worlds\' data migrates in one transaction-like pass."
    }
  },
  {
    num: 26, stage: 3, stageName: 'Blueprint', section: '3B: Integration & Safety',
    role: 'Cross-File Selector & Handler Parity Integrator',
    mainTask: 'Reconcile U21+U22+U23 into one integrated parity map: every hook -> its rule(s) -> its handler(s) -> its state effects, proving the three files will agree with each other in the updated build',
    supportTask: 'Kill every orphan found: dead selectors, unbound handlers, unused templates — and resolve every hotspot from U7 with its final integrated design',
    upstreamInputs: 'Steps U21, U22, U23',
    downstreamTarget: 'U30 (Contract Lock), U31 (Consistency Audit)',
    creativeStretch: 'Build the "three-way trace": follow ONE user journey (the flagship new feature) across HTML -> CSS -> JS and back, proving the chain is unbroken at every hop.',
    insightHarvest: 'Every integration hotspot gets a mini-integration-diagram: which files meet there and what each side expects from the others.',
    criticalDeliverables: '1) Full Hook-Handler-Rule parity map; 2) Orphan elimination list; 3) Hotspot final designs; 4) Three-way trace of the flagship journey.',
    dynamicSignals: ['tech-stack'],
    directive: 'The updated app is ONE system in three files. This step proves they shake hands everywhere.',
    qualityGate: 'Zero orphans, zero hotspots without final designs, flagship trace unbroken.',
    adaptiveFocus: {
      app: "For apps: the trace follows a full add -> edit -> undo -> export journey.",
      tool: "For tools: the trace follows input -> calc -> error -> copy journey.",
      game: "For games: the trace follows run -> score -> save -> restart journey.",
      experimental: "For sandboxes: the trace follows randomize -> tweak -> save -> reload journey.",
      free: "For hybrids: the trace crosses the world seam in both directions."
    }
  },
  {
    num: 27, stage: 3, stageName: 'Blueprint', section: '3B: Integration & Safety',
    role: 'Micro-Interaction & Motion Update Specialist',
    mainTask: 'Specify the final implementation of every changed/new micro-interaction: exact easing curves, durations, transforms, chained effects, audio cues and haptics — with reduced-motion twins for all',
    supportTask: 'Define the feedback choreography for the update\'s hero interaction and each new feature\'s success/error/empty moments',
    upstreamInputs: 'Step U15 Interaction Design + U22 CSS Spec + Blueprint motion settings',
    downstreamTarget: 'U31 (Parity Audit), U48–U50 (Emissions)',
    creativeStretch: 'Design the update\'s "signature transition": the one new motion users will remember the app by (and its reduced-motion soul).',
    insightHarvest: 'Every motion that changes from the old app is listed old-timing -> new-timing so habit bridges stay honest.',
    criticalDeliverables: '1) Final micro-interaction code specs (curves, durations, transforms); 2) Reduced-motion twins; 3) Hero + feature choreography; 4) Old->new timing change list.',
    dynamicSignals: ['sensory-motion', 'visual-system'],
    directive: 'Motion is communication. Every animation must answer: what just happened, and is anything still loading?',
    qualityGate: 'Every interaction has final values; every motion has a reduced-motion twin; budget from U15 respected.',
    adaptiveFocus: {
      app: "For apps: completion feedback (saved/done) is unmistakable but never naggy.",
      tool: "For tools: recalcs animate in <80ms or not at all — no blurry in-betweens.",
      game: "For games: juice layers add feel without stealing frame budget from input.",
      experimental: "For sandboxes: parameter changes ripple at exactly the same latency as before.",
      free: "For hybrids: the signature transition becomes the world-switch itself."
    }
  },
  {
    num: 28, stage: 3, stageName: 'Blueprint', section: '3B: Integration & Safety',
    role: 'Copy, Content & Empty-State Update Wordsmith',
    mainTask: 'Write every piece of user-facing copy the update touches: new-feature microcopy, changed labels, tooltips, empty states, error messages, and the update announcement for returning users — in the app\'s established voice',
    supportTask: 'Audit every string in the blast radius for clarity and warmth; rewrite anything that reads like an error message from a compiler',
    upstreamInputs: 'Steps U18 (Error UX), U24 (Feature Specs) + live copy',
    downstreamTarget: 'U48 (Emission), U29 (Test scenarios reference copy)',
    creativeStretch: 'Write the update\'s one-line haiku: a single sentence, shown once, that makes the returning user smile about the update.',
    insightHarvest: 'Match the app\'s existing tone (harvest 5 example strings from the live app first) so new copy sounds native, not marketing.',
    criticalDeliverables: '1) Complete copy sheet for all touched strings (final text, placement); 2) Error-message rewrites in plain language; 3) Empty/loading states copy; 4) The one-line update haiku.',
    dynamicSignals: ['mode-lens'],
    directive: 'Users read at a glance at best. Six honest words beat thirty clever ones, every time.',
    qualityGate: 'Every string in the blast radius is final; no Lorem, no TODO, no jargon without a plain-language gloss.',
    adaptiveFocus: {
      app: "For apps: empty states invite the next action in the app\'s own tone.",
      tool: "For tools: errors always name the exact field and the fix.",
      game: "For games: HUD labels stay short and glanceable mid-play.",
      experimental: "For sandboxes: parameter names stay poetic-but-clear.",
      free: "For hybrids: copy maintains one voice across both worlds."
    }
  },
  {
    num: 29, stage: 3, stageName: 'Blueprint', section: '3B: Integration & Safety',
    role: 'Verification Scenario Matrix Author',
    mainTask: 'Author the complete manual test matrix for the updated app: per-feature happy paths, every habit-bridge path, every migration path, every failure state, and cross-device sweeps — each as a numbered, executable scenario',
    supportTask: 'Mark each scenario Critical (must pass before emission) or Extended (post-emission confidence sweep), and trace each to the charter goal it protects',
    upstreamInputs: 'Steps U20 Contract, U24 Specs, U25 Migration, U8 Habit Bridges',
    downstreamTarget: 'U31–U40 (the entire verification phase executes this matrix)',
    creativeStretch: 'Design the "angry user suite": 5 scenarios modeling a tired, impatient user (double-clicks everything, back-buttons mid-flow, rotates the device, goes offline mid-save) — the update must survive all of them smiling.',
    insightHarvest: 'Every regression risk flagged in U5, U7 and U32-precursors becomes an explicit scenario here — nothing flagged earlier escapes testing.',
    criticalDeliverables: '1) Numbered scenario matrix (Critical/Extended); 2) Angry-user suite (5 scenarios); 3) Charter-goal traceability table; 4) Cross-device sweep checklist.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'persistence-io'],
    directive: 'Write scenarios a human can actually execute in 30 seconds each — a test nobody runs protects nothing.',
    qualityGate: 'Every charter goal + every bridge + every migration has at least one Critical scenario.',
    adaptiveFocus: {
      app: "For apps: scenarios cover full CRUD, undo and export round-trips.",
      tool: "For tools: scenarios cover precision edges and copy/export paths.",
      game: "For games: scenarios cover full runs, deaths, saves and restarts.",
      experimental: "For sandboxes: scenarios cover save/reload and snapshot fidelity.",
      free: "For hybrids: scenarios cross the world seam repeatedly, in both directions."
    }
  },
  {
    num: 30, stage: 3, stageName: 'Blueprint', section: '3B: Integration & Safety',
    role: 'Final Implementation Contract Locksmith',
    mainTask: 'Consolidate U21–U29 into the locked Final Implementation Contract: the complete, ordered, file-tagged manifest of every atomic change with its final code reference — the single source the emission steps assemble from',
    supportTask: 'Run the pre-verification triad: (a) every charter goal has its implementation located, (b) every protect-list item has its guard scenario, (c) every U29 Critical scenario has a named code path — zero gaps allowed',
    upstreamInputs: 'All of Phase 3',
    downstreamTarget: 'U31–U47 (Verification + Consolidation + Emission)',
    creativeStretch: 'Write the emission-readiness oath: the one-paragraph standard any emitted file must meet, which U47 will enforce ruthlessly.',
    insightHarvest: 'Freeze every remaining "nice to have" into the Defer list from U9 — emission discipline starts here.',
    criticalDeliverables: '1) Locked Implementation Contract (atomic, ordered, file-tagged); 2) Pre-verification triad results; 3) Emission-readiness standard; 4) Frozen defer list.',
    dynamicSignals: ['tech-stack', 'mode-lens', 'persistence-io', 'visual-system'],
    directive: 'From this step on, the update is a build, not a debate. Everything decided; everything located; nothing invented.',
    qualityGate: 'Triad passes with zero gaps; contract covers 100% of the change surface.',
    adaptiveFocus: {
      app: "For apps: the contract preserves the data-safety chain with named code paths.",
      tool: "For tools: the contract preserves calculation correctness with named code paths.",
      game: "For games: the contract preserves the playable loop with named code paths.",
      experimental: "For sandboxes: the contract preserves render integrity with named code paths.",
      free: "For hybrids: the contract preserves both worlds + seam with named code paths."
    }
  },

  // PHASE 4: INTEGRATION, QUALITY & SAFETY VERIFICATION (U31–U40)
  {
    num: 31, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Cross-File Consistency & Parity Auditor',
    mainTask: 'Execute the consistency audit: every hook/style/handler named in the Implementation Contract reconciles across all three files; every selector styled, every handler bound, every template used, every announcement wired',
    supportTask: 'Simulate the updated app\'s boot sequence mentally line-by-line and flag any reference that resolves to nothing (the classic zero-console-error guarantee check)',
    upstreamInputs: 'Steps U26 Parity Map + U30 Locked Contract',
    downstreamTarget: 'U32–U33 (Regression & Stress), U40 (Harmony Gate)',
    creativeStretch: 'Build the "parity proof": a three-column table (HTML hook | CSS rule | JS handler) for the entire updated app, proving no cell is empty.',
    insightHarvest: 'Every disagreement found is logged with its fix — these fixes join the contract as amendments before emission.',
    criticalDeliverables: '1) Executed parity audit results (pass/fix per row); 2) Boot-sequence simulation trace; 3) Amendment list for the contract; 4) Parity proof table.',
    dynamicSignals: ['tech-stack'],
    directive: 'Consistency is not a vibe — it is a table with no empty cells.',
    qualityGate: 'Parity proof table complete; boot simulation reaches init() with zero unresolved references.',
    adaptiveFocus: {
      app: "For apps: view-switch parity (every view reachable, every view renderable) is proven.",
      tool: "For tools: input-state parity (focus/error/disabled) is proven across every control.",
      game: "For games: FSM transition parity is proven (every state reachable + exitable).",
      experimental: "For sandboxes: parameter-UI parity is proven (every knob wired both ways).",
      free: "For hybrids: seam parity is proven in both directions."
    }
  },
  {
    num: 32, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Regression & Backward-Compatibility Sentinel',
    mainTask: 'Execute the regression audit against the OLD app\'s behavior: every protect-list item, every habit bridge, every timing change from U15, and every U29 Critical scenario is checked to behave exactly as the contract promises',
    supportTask: 'Produce the Old-vs-New behavior comparison table for every user-visible path that the update touches at all',
    upstreamInputs: 'Steps U8 Habit Bridges, U15 Timing Changes, U30 Contract, U29 Matrix',
    downstreamTarget: 'U40 (Harmony Gate), U46 (Final Anti-Regression Sweep)',
    creativeStretch: 'Hunt the "silent regression" class: changes nobody ordered (focus order drifting, sounds getting quieter, timings stretching by 100ms) — the regressions users feel but never report.',
    insightHarvest: 'Every protect-list guard from U30 is traced to its test scenario and marked enforced.',
    criticalDeliverables: '1) Regression audit results (per protect-item + bridge); 2) Old-vs-New behavior table; 3) Silent-regression hunt findings; 4) Enforced guard trace.',
    dynamicSignals: ['mode-lens', 'sensory-motion', 'persistence-io'],
    directive: 'The update improves the app; it does not quietly rearrange what users already loved.',
    qualityGate: 'Zero unbridged regressions; every guard enforced; silent-regression hunt complete.',
    adaptiveFocus: {
      app: "For apps: undo depth and export formats are verified unchanged-or-better.",
      tool: "For tools: recalc latency and copy formats verified unchanged-or-better.",
      game: "For games: input latency and scoring fairness verified unchanged-or-better.",
      experimental: "For sandboxes: pointer precision and snapshot quality verified unchanged-or-better.",
      free: "For hybrids: both worlds verified unchanged-or-better — especially the untouched one."
    }
  },
  {
    num: 33, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Edge Case & Failure Mode Stress Tester',
    mainTask: 'Execute the failure-mode audit on the updated design: every input at its extremes, every state at its boundaries, every timing race, every storage failure — each with its designed response from U18',
    supportTask: 'Run the angry-user suite from U29 against the contract and design any missing recovery that surfaces',
    upstreamInputs: 'Steps U18 Error UX, U24 Feature Specs, U29 Matrix',
    downstreamTarget: 'U34–U35, U40 (remaining gates)',
    creativeStretch: 'Design the chaos monkey pass: list the 3 most absurd-but-possible user actions (paste 50k chars, click during migration, hold 8 keys) and prove the updated app survives each gracefully.',
    insightHarvest: 'Every failure found without a designed response becomes an amendment — this is the last cheap moment to catch them.',
    criticalDeliverables: '1) Edge/extreme input audit; 2) Timing & race audit; 3) Storage failure audit; 4) Chaos-monkey pass results + amendments.',
    dynamicSignals: ['mode-lens', 'persistence-io'],
    directive: 'The updated app must fail like a professional: loudly enough to be understood, softly enough to be forgiven.',
    qualityGate: 'Every tested failure lands in a designed, human-readable state — no crashes, no freezes, no silent corruption.',
    adaptiveFocus: {
      app: "For apps: rapid multi-add + immediate undo + reload mid-save is stress-proven.",
      tool: "For tools: extreme values, empty input and paste-bombs produce designed responses.",
      game: "For games: tab-blur mid-run, device rotate mid-play and death-at-same-frame-as-save are proven.",
      experimental: "For sandboxes: resize mid-render and randomize-mid-drag are proven.",
      free: "For hybrids: world-switch during any in-flight action is proven atomic."
    }
  },
  {
    num: 34, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Performance & Memory Guard Auditor',
    mainTask: 'Audit the updated design against the U17 Performance Floor Contract: per-interaction latency, sustained frame rate with the update\'s new layers active, listener/RAF lifecycle closure, and memory ceiling on the weakest target platform',
    supportTask: 'Design the degradation ladder activation points: exactly when (and how) the app sheds load on weak devices — including how the new visual layers (live background, backlight physics) step down',
    upstreamInputs: 'Step U17 Floors + U22 CSS Spec + U23 JS Spec',
    downstreamTarget: 'U40 (Harmony Gate), U49–U50 (Emission must honor ladders)',
    creativeStretch: 'Verify the update\'s performance gift from U17 actually ships: the wasteful pattern the update fixes stays fixed, with a named code path.',
    insightHarvest: 'Every new RAF/interval/listener introduced by the update is inventoried with its stop condition — the anti-leak ledger.',
    criticalDeliverables: '1) Floor-contract audit per platform target; 2) Degradation ladder activation design; 3) Anti-leak ledger (every cycle has a stop); 4) Performance-gift verification.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'New beauty must never tax the weakest device the old app served well.',
    qualityGate: 'All floors pass on the weakest target; every cycle in the ledger stops; the gift ships.',
    adaptiveFocus: {
      app: "For apps: 200-item lists stay smooth with all new layers active.",
      tool: "For tools: recalc <50ms holds with the new features attached.",
      game: "For games: 60fps holds at 2x entities with new juice layers on.",
      experimental: "For sandboxes: canvas + live background coexist inside the frame budget.",
      free: "For hybrids: world switching stays frame-stable with all layers active."
    }
  },
  {
    num: 35, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Accessibility & Keyboard Flow Verifier',
    mainTask: 'Execute the a11y audit of the updated design: every new element reachable and operable by keyboard, contrast ratios computed (not eyeballed), focus order mapped, announcements scripted, touch targets measured',
    supportTask: 'Verify the keyboard showcase from U19 actually outperforms the old app, and that reduced-motion parity holds for every new effect',
    upstreamInputs: 'Step U19 A11y Specs + U27 Motion Specs + U21 HTML Spec',
    downstreamTarget: 'U40 (Harmony Gate), U48 (Emission)',
    creativeStretch: 'Compute and document the exact contrast values for the update\'s new colors — numbers in the notes, not adjectives.',
    insightHarvest: 'Every focus-visible ring specified in U22 is traced to its real interactive element — no invisible focus anywhere.',
    criticalDeliverables: '1) Keyboard operability map (every new control); 2) Computed contrast table; 3) Screen-reader script for flagship feature; 4) Reduced-motion parity confirmation.',
    dynamicSignals: ['platform-ergonomics', 'sensory-motion'],
    directive: 'The update is for everyone who used the old app — including everyone who uses it differently.',
    qualityGate: 'Zero a11y regressions vs the old app; flagship feature fully keyboard-operable with clear announcements.',
    adaptiveFocus: {
      app: "For apps: new dialogs/modals trap and restore focus correctly.",
      tool: "For tools: every new control operable + values announced by keyboard alone.",
      game: "For games: new features reachable in one-switch mode too.",
      experimental: "For sandboxes: new parameters operable without pointer precision.",
      free: "For hybrids: the world switch announces its state change to screen readers."
    }
  },
  {
    num: 36, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Mobile & Cross-Device Update Verifier',
    mainTask: 'Verify the updated design across the platform spectrum: phone-thumb ergonomics, tablet split layouts, desktop density, safe-area insets, orientation changes and dynamic viewport units — with every new UI element\'s responsive behavior specified',
    supportTask: 'Prove the update\'s new features are not desktop-only accidents: each new control gets a mobile-native interaction design (thumb reach, target size, gesture mapping)',
    upstreamInputs: 'Blueprint Platform Settings + U21 HTML Spec + U22 CSS Spec',
    downstreamTarget: 'U40 (Harmony Gate), U48–U49 (Emissions)',
    creativeStretch: 'Design the update\'s one-handed mobile win: how the flagship feature becomes even BETTER on a phone than on desktop.',
    insightHarvest: 'Every breakpoint in the updated CSS spec is verified against a real device class from the Blueprint platform selection.',
    criticalDeliverables: '1) Per-device-class verification results; 2) Mobile-native design per new control; 3) Breakpoint audit; 4) The one-handed mobile win design.',
    dynamicSignals: ['platform-ergonomics'],
    directive: 'If the update feels desktop-first, it is half an update. Phone users are first-class citizens.',
    qualityGate: 'Every new control has a working mobile interaction; zero horizontal scroll at 320px.',
    adaptiveFocus: {
      app: "For apps: new bulk actions get a mobile-native alternative (long-press or select mode).",
      tool: "For tools: new precision controls get mobile-friendly steppers + big handles.",
      game: "For games: new features map to taps/holds — never to nonexistent keys.",
      experimental: "For sandboxes: parameter HUD collapses gracefully to a phone drawer.",
      free: "For hybrids: the seam gesture works one-handed on phones."
    }
  },
  {
    num: 37, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Data Safety & Migration Rehearsal Director',
    mainTask: 'Rehearse the migration from U25 against every data shape the old app could have produced: dry-run first, then full rehearsal, verifying the legacy-pocket self-healing and the safe-travel confirmation UX end-to-end',
    supportTask: 'Verify rollback safety: if migration half-fails, prove exactly what the user sees and that their data survives in the legacy pocket',
    upstreamInputs: 'Steps U25 Migration Code, U6 Data Map, U12 Design',
    downstreamTarget: 'U40 (Harmony Gate), U50 (Emission)',
    creativeStretch: 'Design the migration\'s "second patient" rule: migrating the SAME data twice must be perfectly idempotent — no doubles, no loss, no drift.',
    insightHarvest: 'Each rehearsal outcome is logged per data shape — the rehearsal record becomes the emission checklist item for migration.',
    criticalDeliverables: '1) Dry-run rehearsal results per data shape; 2) Full rehearsal results; 3) Idempotency proof; 4) Rollback-safety verification + confirmation UX check.',
    dynamicSignals: ['persistence-io'],
    directive: 'Rehearse until the migration is boring. Boring migrations are what safe data feels like.',
    qualityGate: 'All data shapes migrate cleanly, idempotently, with zero loss and a friendly confirmation.',
    adaptiveFocus: {
      app: "For apps: 3 collections (empty/50/1000 items) all rehearsed.",
      tool: "For tools: presets (default/custom/extreme) all rehearsed.",
      game: "For games: score tables (empty/veteran/corrupted) all rehearsed.",
      experimental: "For sandboxes: saved artworks/seeds (default/rich) all rehearsed.",
      free: "For hybrids: data from BOTH worlds rehearsed in one pass, twice."
    }
  },
  {
    num: 38, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Security, Input & XSS Re-Auditor',
    mainTask: 'Re-audit the updated attack surface: every string the app renders from user input, every innerHTML-adjacent path, every file import/export, every eval-adjacent pattern in the blast radius',
    supportTask: 'Verify the updated export/import paths (including any new upload/download features) validate their inputs strictly and fail closed',
    upstreamInputs: 'Steps U23 JS Spec, U25 Migration + live codebase',
    downstreamTarget: 'U40 (Harmony Gate), U50 (Emission)',
    creativeStretch: 'Add one trust-visibility touch: where the app handles user files or data, make the safety visible (a small badge or wording that shows the app validated what it loaded).',
    insightHarvest: 'Any pre-existing unsafe pattern discovered in the blast radius gets an amendment — leave the app safer than the update found it.',
    criticalDeliverables: '1) Input-path audit (every render of user data); 2) Import/export validation verification; 3) Amendment list for unsafe patterns found; 4) Trust-visibility touch design.',
    dynamicSignals: ['tech-stack'],
    directive: 'Every user string is hostile until escaped. Every imported file is foreign until validated.',
    qualityGate: 'Zero unescaped user-data renders in the blast radius; imports fail closed; trust touch designed.',
    adaptiveFocus: {
      app: "For apps: item titles/tags render through the safe path everywhere, including exports.",
      tool: "For tools: pasted raw input (JSON/CSV) is validated before ANY parse executes.",
      game: "For games: player names/initials on the high-score board render safely.",
      experimental: "For sandboxes: imported seeds/presets are schema-checked before use.",
      free: "For hybrids: shared-state links decode defensively in both worlds."
    }
  },
  {
    num: 39, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Code Quality & Convention Compliance Auditor',
    mainTask: 'Audit the assembled update code against the U4 Convention Contract: naming, structure, comment style, error style — verifying the new code is indistinguishable in quality from the codebase\'s best existing sections',
    supportTask: 'Sweep for update-smell: dead code from removed features, commented-out experiments, stale comments that no longer match code, and leftover debug logging',
    upstreamInputs: 'Steps U4 Contract, U23 JS Spec, U22 CSS Spec, U21 HTML Spec',
    downstreamTarget: 'U40 (Harmony Gate), U46 (Final Sweep)',
    creativeStretch: 'Passion-detail pass: find 5 comment/structure touch-ups that would make the original author smile — the update leaves the campsite cleaner.',
    insightHarvest: 'Every file\'s final state is sanity-checked against its spec — any drift found here is corrected in the contract before emission.',
    criticalDeliverables: '1) Convention compliance results; 2) Update-smell sweep findings; 3) Campsite touch-ups (5); 4) Spec-vs-final drift corrections.',
    dynamicSignals: ['tech-stack'],
    directive: 'Ship code the codebase would have written itself, on its best day.',
    qualityGate: 'Compliance passes; zero update-smell; drift corrected back to spec.',
    adaptiveFocus: {
      app: "For apps: view modules read as cleanly as the original ones.",
      tool: "For tools: calculation code reads like a well-documented formula sheet.",
      game: "For games: the loop reads as cleanly as the original tick.",
      experimental: "For sandboxes: parameter code reads like poetry with types.",
      free: "For hybrids: the seam code is exemplary — it is the newest thing everyone will read."
    }
  },
  {
    num: 40, stage: 4, stageName: 'Verify', section: '4A: Quality Gates',
    role: 'Pre-Emission Harmony Gatekeeper',
    mainTask: 'Run the final gate across U31–U39: every audit passed or amended, every amendment itself re-audited, the Implementation Contract updated to its truly-final state, and the emission-readiness oath from U30 declared PASSED',
    supportTask: 'Produce the Emission Order of Operations: the exact sequence U41–U50 will follow, with the verification data each emission step must cross-check as it writes',
    upstreamInputs: 'All of Phase 4',
    downstreamTarget: 'U41–U50 (Consolidation + Emission)',
    creativeStretch: 'Write the "if-anything-breaks" card: the 3 most likely emission failure modes and the pre-planned response for each — so emission never improvises.',
    insightHarvest: 'Every phase-4 finding is resolved or consciously accepted with a written reason — nothing is swept under the emission carpet.',
    criticalDeliverables: '1) Gate results summary (all audits); 2) Final-final Implementation Contract; 3) Emission Order of Operations; 4) If-anything-breaks card.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'persistence-io', 'visual-system', 'platform-ergonomics'],
    directive: 'Emission is a privilege the update earns here. If the gate fails, the fix goes upstream — never into the emitted file.',
    qualityGate: 'All gates green or accepted-with-reason; oath declared PASSED; emission order unambiguous.',
    adaptiveFocus: {
      app: "For apps: data-safety chain from U6 to U37 is traced green end-to-end.",
      tool: "For tools: calculation-correctness chain from U1 to U39 is traced green end-to-end.",
      game: "For games: playable-loop chain from U3 to U36 is traced green end-to-end.",
      experimental: "For sandboxes: render-integrity chain from U2 to U34 is traced green end-to-end.",
      free: "For hybrids: both-worlds + seam chain is traced green end-to-end."
    }
  },

  // PHASE 5: BUILD & DELIVER THE UPDATED FILES (U41–U50)
  {
    num: 41, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'HTML Change Manifest Consolidator',
    mainTask: 'Assemble the complete, final index.html: the untouched regions taken verbatim from the live file + the changed regions from the U21 spec + all U31–U40 amendments — reconciled into one ordered build plan',
    supportTask: 'Build the region-by-region assembly list (keep-verbatim / replace-with / insert-after) that U48 will execute mechanically',
    upstreamInputs: 'Live index.html + Steps U21, U31, U40',
    downstreamTarget: 'U48 (index.html Emission)',
    creativeStretch: 'Pre-verify the emitted file\'s "diff elegance": the final index.html diff vs the old file contains ONLY contract changes — zero accidental reformats to pollute the update.',
    insightHarvest: 'Every region from the U7 Touch Map appears in the assembly list exactly once — completeness is proven before any code is emitted.',
    criticalDeliverables: '1) Ordered region assembly list; 2) Keep-verbatim region inventory; 3) Diff-elegance pre-verification; 4) Region completeness proof.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics'],
    directive: 'Prepare the emission so precisely that U48 becomes transcription, not authorship.',
    qualityGate: 'Every region dispositioned exactly once; keep-regions untouched; diff contains only contract changes.',
    adaptiveFocus: {
      app: "For apps: view containers and list templates are dispositioned explicitly.",
      tool: "For tools: form fieldsets and output panels are dispositioned explicitly.",
      game: "For games: canvas, HUD and overlay regions are dispositioned explicitly.",
      experimental: "For sandboxes: canvas + parameter HUD regions are dispositioned explicitly.",
      free: "For hybrids: both world containers + the seam element are dispositioned explicitly."
    }
  },
  {
    num: 42, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'CSS Change Manifest Consolidator',
    mainTask: 'Assemble the complete, final style.css build plan: verbatim sections, replaced/retuned rules from U22, new layers (texture, back-lighting, light behaviour, live background) with their exact final code, and the token block diff',
    supportTask: 'Order the rules for maintainability: tokens first, then base, then components, then features, then responsive branches — matching the original file\'s organization',
    upstreamInputs: 'Live style.css + Steps U14, U22, U27, U34, U40',
    downstreamTarget: 'U49 (style.css Emission)',
    creativeStretch: 'Design the CSS diff elegance: grouping and comments arranged so the update\'s changes read as a story in the diff, not a scramble.',
    insightHarvest: 'Every selector from the U31 parity table appears in exactly one disposition (kept/replaced/added) — parity is pre-proven.',
    criticalDeliverables: '1) Ordered rule assembly plan; 2) Token block diff (final values); 3) New-layer code pack (complete); 4) Selector disposition proof.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'The updated stylesheet should read like the original author came back a better designer.',
    qualityGate: 'All selectors dispositioned; new layers have final code; degradation ladders included for heavy effects.',
    adaptiveFocus: {
      app: "For apps: state classes for all item/view states are in the plan.",
      tool: "For tools: input states (focus/error/disabled) all dispositioned.",
      game: "For games: HUD + juice state classes all dispositioned.",
      experimental: "For sandboxes: canvas + parameter states all dispositioned.",
      free: "For hybrids: world-switch classes + both worlds' states dispositioned."
    }
  },
  {
    num: 43, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'JavaScript Change Manifest Consolidator',
    mainTask: 'Assemble the complete, final script.js build plan: verbatim modules, changed functions with their final code from U23, the migration module from U25, new-feature modules from U24, and init() updates',
    supportTask: 'Order the assembly to match the original file\'s structure and verify every U16 contract change lands with all its call sites updated',
    upstreamInputs: 'Live script.js + Steps U16, U23, U24, U25, U40',
    downstreamTarget: 'U50 (script.js Emission)',
    creativeStretch: 'Plan the "zero-dead-reference" emission: list every function/variable the update removes, and prove every reference to each is also removed or updated in the same emission.',
    insightHarvest: 'The anti-leak ledger from U34 is embedded in the plan: every new cycle\'s start/stop pair is placed in its final home.',
    criticalDeliverables: '1) Ordered module assembly plan; 2) Final code pack for every changed/new function; 3) Zero-dead-reference removal proof; 4) Cycle lifecycle placements.',
    dynamicSignals: ['tech-stack', 'persistence-io', 'mode-lens'],
    directive: 'Prepare the script so precisely that U50 is assembly with verification, never authorship under pressure.',
    qualityGate: 'Every function dispositioned; every removed symbol has zero remaining references; migration module fully placed.',
    adaptiveFocus: {
      app: "For apps: render/save/undo module changes all carry final code.",
      tool: "For tools: calc pipeline changes carry final code with unit checks.",
      game: "For games: loop/FSM changes carry final code with dt-safety.",
      experimental: "For sandboxes: parameter/seed changes carry final serializable code.",
      free: "For hybrids: the seam API changes carry final atomic code."
    }
  },
  {
    num: 44, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'Element-by-Element Visual Parity Planner',
    mainTask: 'Walk every element type in the updated app (buttons, toggles, inputs, cards, tabs, dialogs, toasts, HUD chips) and verify its final visual treatment: state classes, focus rings, backlight treatment per the Back-Light Studio config, texture placement per the Texture settings, and light treatment per the Light Behaviour settings',
    supportTask: 'Produce the Element Treatment Matrix: element type x states (default/hover/active/focus/disabled/loading) x files responsible — every cell filled',
    upstreamInputs: 'Steps U22 CSS Plan, Blueprint (Texture/Backlight/Light/LiveBG), U35 A11y',
    downstreamTarget: 'U48–U50 (Emissions must satisfy the matrix)',
    creativeStretch: 'Verify the update\'s visual signature detail from U14 lands on every element it should — consistency is the difference between "designed" and "patched".',
    insightHarvest: 'The per-element backlight settings (toggle/button/card/input/tab enabled + colors + intensity) from the Blueprint are translated into their exact final CSS/JS treatments here.',
    criticalDeliverables: '1) Element Treatment Matrix (complete); 2) Backlight per-element final treatments; 3) Texture/Light placement final rules; 4) Visual-signature consistency verification.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'Every element type must feel like it came from the same update, on the same day, by the same hand.',
    qualityGate: 'Matrix has zero empty cells; all Blueprint visual settings realized with exact treatments.',
    adaptiveFocus: {
      app: "For apps: list-item cards in all their states are matrix-complete.",
      tool: "For tools: precision inputs and steppers are matrix-complete.",
      game: "For games: HUD elements across all juice levels are matrix-complete.",
      experimental: "For sandboxes: parameter controls are matrix-complete.",
      free: "For hybrids: elements of BOTH worlds are matrix-complete."
    }
  },
  {
    num: 45, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'Save, Load & Settings Parity Planner',
    mainTask: 'Verify the complete data round-trip of the updated app: save -> reload -> migrate -> load -> edit -> save, with the new features\' data slots, the old features\' preserved slots, and the settings\' backward compatibility',
    supportTask: 'Reconcile the three files\' responsibilities in the round-trip: who writes, who migrates, who reads, who validates — one owner per key, no orphans',
    upstreamInputs: 'Steps U12, U25, U37 + U43 Plan',
    downstreamTarget: 'U46 (Anti-Regression Sweep), U50 (Emission)',
    creativeStretch: 'Design the "time-traveler test": data saved by the OLD app version, loaded by the NEW one, edited, saved again, then loaded by the new one again — perfect at every hop.',
    insightHarvest: 'The storage-key ownership map from U6 is finalized: every key, every version, one owner each.',
    criticalDeliverables: '1) Round-trip verification plan; 2) Key ownership map (final); 3) Time-traveler test design; 4) Settings compatibility rules (old settings + new settings coexist).',
    dynamicSignals: ['persistence-io'],
    directive: 'Old data is a guest of honor in the new app — treat it with ceremony.',
    qualityGate: 'Round-trip is provable key-by-key; time-traveler test fully designed; zero orphan keys.',
    adaptiveFocus: {
      app: "For apps: item collections survive the round-trip with ids intact.",
      tool: "For tools: presets round-trip with full fidelity + new defaults for new fields.",
      game: "For games: scores/unlocks round-trip; new stats initialize without hiding old ones.",
      experimental: "For sandboxes: artworks/seeds round-trip pixel-perfect.",
      free: "For hybrids: both worlds\' data round-trips atomically."
    }
  },
  {
    num: 46, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'Final Anti-Regression & Dead-Code Sweep Operator',
    mainTask: 'Execute the last full-body sweep of the assembled update: every protect-list guard re-verified, every U29 Critical scenario mapped to its final code path, every dead reference/dead selector/dead handler eliminated, and every defer-list item confirmed deferred',
    supportTask: 'Run the U21/U42/U43 verification checklists written by the spec authors — the checklists exist exactly for this moment',
    upstreamInputs: 'Steps U21, U42, U43 checklists + U29 Matrix + U30 Contract',
    downstreamTarget: 'U47 (Zero-Defect Gate)',
    creativeStretch: 'The one-hour-user simulation: mentally use the updated app as a real user for one hour (open, play, edit, save, leave, return) and catch whatever the checklists missed.',
    insightHarvest: 'Every sweep finding is either fixed into a manifest or explicitly accepted with a reason recorded in the contract.',
    criticalDeliverables: '1) Sweep results (guards, scenarios, dead code); 2) One-hour-user simulation findings; 3) Manifest fixes applied; 4) Accepted-with-reason register.',
    dynamicSignals: ['tech-stack', 'mode-lens', 'persistence-io'],
    directive: 'This sweep is the last line of defense before the files are born. Leave nothing for the preview console to discover.',
    qualityGate: 'Zero unexplained findings; all Critical scenarios code-verified; dead code at zero.',
    adaptiveFocus: {
      app: "For apps: the full user hour includes a reload mid-edit and a quota-exceeded save attempt.",
      tool: "For tools: the user hour includes every input edge and a copy at each stage.",
      game: "For games: the user hour includes 3 full runs and a score submission.",
      experimental: "For sandboxes: the user hour includes save/reload and a snapshot export.",
      free: "For hybrids: the user hour crosses the seam in both directions repeatedly."
    }
  },
  {
    num: 47, stage: 5, stageName: 'Deliver', section: '5A: Emission',
    role: 'Zero-Defect Emission Gatekeeper',
    mainTask: 'Declare the emission triple-check PASSED: (1) every manifest has final code for every change, (2) every audit from U31–U46 is green or accepted, (3) the three manifests (U41/U42/U43) together cover 100% of the U30 Implementation Contract — then authorize emission',
    supportTask: 'Freeze the emission briefs: the exact context summaries each emission engineer (U48–U50) receives, containing the manifest, the guard checklists, and the verification data relevant to its file',
    upstreamInputs: 'U41, U42, U43 manifests + U44, U45, U46 sweeps + U40 Gate',
    downstreamTarget: 'U48–U50 (Emissions)',
    creativeStretch: 'Write the emission dedication: one sentence naming WHO this update serves — the tired implementer at U48 reads it and emits with purpose.',
    insightHarvest: 'Any contract item that never surfaced in a manifest is hunted down NOW — a silent dropout here is a silent regression in the built app.',
    criticalDeliverables: '1) Triple-check declaration; 2) Frozen emission briefs (3); 3) Contract-coverage proof (100%); 4) Emission dedication.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'persistence-io', 'visual-system'],
    directive: 'Nothing emits from memory. Everything emits from the frozen briefs. No exceptions, no heroics.',
    qualityGate: 'Triple-check passed; coverage 100%; briefs frozen; emission authorized.',
    adaptiveFocus: {
      app: "For apps: the data-safety chain appears in all three briefs.",
      tool: "For tools: the correctness chain appears in all three briefs.",
      game: "For games: the playable-loop chain appears in all three briefs.",
      experimental: "For sandboxes: the render-integrity chain appears in all three briefs.",
      free: "For hybrids: the both-worlds chain appears in all three briefs."
    }
  },
  {
    num: 48, stage: 5, stageName: 'Deliver', section: '5B: Code Output',
    targetFile: 'html',
    role: 'Principal Update Engineer (index.html)',
    mainTask: 'Emit the complete, production-ready UPDATED index.html: the live file with every manifest change applied verbatim — preserving all untouched regions byte-for-byte',
    supportTask: 'Apply every U41 assembly instruction, satisfy the U44 Element Matrix for markup, keep every hook exactly as U13/U21 specified, and preserve semantic structure, ARIA and tab order',
    upstreamInputs: 'Live index.html + U41 Manifest + U47 Frozen Brief',
    downstreamTarget: 'index.html Deliverable (Version N+1) & U49',
    creativeStretch: 'The emitted file is not "old file plus patches" — it reads as one freshly-authored, confident document.',
    insightHarvest: 'Cross-check the emitted markup against the U21 hook disposition one final time as you write.',
    criticalDeliverables: 'Raw, complete, valid UPDATED index.html only.',
    dynamicSignals: ['mode-lens', 'platform-ergonomics', 'visual-system', 'constraints-anti'],
    directive: 'Output ONLY the complete updated index.html — no markdown fences, no commentary, no omitted sections, no placeholders, nothing truncated.',
    qualityGate: 'Every hook from the manifest present; every untouched region preserved; document is complete and valid.',
    adaptiveFocus: {
      app: "For apps: every view container and list template survives with its hooks.",
      tool: "For tools: every control keeps labels, help text and error slots.",
      game: "For games: canvas + HUD + overlays sit in the planned DOM order.",
      experimental: "For sandboxes: canvas + parameter HUD preserved and extended correctly.",
      free: "For hybrids: both worlds' containers + the seam element all present."
    }
  },
  {
    num: 49, stage: 5, stageName: 'Deliver', section: '5B: Code Output',
    targetFile: 'css',
    role: 'Principal Update Engineer (style.css)',
    mainTask: 'Emit the complete, production-ready UPDATED style.css: the live file with every manifest change applied — preserving untouched sections, applying all token diffs, and integrating the new visual layers (texture, back-lighting, light behaviour, live background) with their exact final code',
    supportTask: 'Match 100% of the updated index.html hooks and the U44 Element Matrix; include degradation ladders for heavy effects and reduced-motion twins for every new motion',
    upstreamInputs: 'Updated index.html (U48) + U42 Manifest + U47 Frozen Brief',
    downstreamTarget: 'style.css Deliverable (Version N+1) & U50',
    creativeStretch: 'The emitted stylesheet should make the update\'s visual signature feel inevitable — as if the app was always meant to look this way.',
    insightHarvest: 'Verify against the U31 parity table as you write: every hook styled, every state class real.',
    criticalDeliverables: 'Raw, complete, valid UPDATED style.css only.',
    dynamicSignals: ['visual-system', 'sensory-motion', 'tech-stack', 'platform-ergonomics'],
    directive: 'Output ONLY the complete updated style.css — no markdown fences, no commentary, no omitted rules, nothing truncated.',
    qualityGate: 'Every selector parity-checked against updated index.html; token diff complete; zero !important escapes.',
    adaptiveFocus: {
      app: "For apps: all item/view state classes present for the updated markup.",
      tool: "For tools: input states with high-contrast focus rings all present.",
      game: "For games: HUD + juice classes with reduced-motion twins present.",
      experimental: "For sandboxes: canvas layout + parameter states present.",
      free: "For hybrids: world-switch transitions with reduced-motion twins present."
    }
  },
  {
    num: 50, stage: 5, stageName: 'Deliver', section: '5B: Code Output',
    targetFile: 'js',
    role: 'Principal Update Engineer (script.js)',
    mainTask: 'Emit the complete, production-ready UPDATED script.js: the live file with every manifest change applied — preserving untouched modules, integrating the migration module, new-feature modules and updated contracts, and matching 100% of the updated index.html and style.css',
    supportTask: 'Implement the round-trip save/load/migrate chain from U45, every handler from the parity table, the anti-leak ledger (every cycle stops), and the U34 degradation ladders',
    upstreamInputs: 'Updated index.html (U48) + Updated style.css (U49) + U43 Manifest + U47 Frozen Brief',
    downstreamTarget: 'script.js Deliverable (Version N+1) + Live Preview',
    creativeStretch: 'The first load of the updated app must feel like a homecoming: old data greets you, new features reveal themselves naturally, and everything simply works — zero console errors.',
    insightHarvest: 'Cross-check every selector and state class against the two live emitted files as you write — parity is 100% or it is 0%.',
    criticalDeliverables: 'Raw, complete, valid UPDATED script.js only.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'persistence-io', 'sensory-motion', 'platform-ergonomics', 'constraints-anti'],
    directive: 'Output ONLY the complete updated script.js — no markdown fences, no commentary, zero TODOs, zero stubs, zero truncated functions.',
    qualityGate: 'Boots with zero console errors; migration runs safely; every handler fires; old data round-trips; works offline.',
    adaptiveFocus: {
      app: "For apps: a full add -> edit -> undo -> export session is verified in code.",
      tool: "For tools: recalc <50ms with new features verified in code.",
      game: "For games: a full run -> score -> save -> restart is verified in code.",
      experimental: "For sandboxes: randomize -> tweak -> save -> reload is verified in code.",
      free: "For hybrids: both worlds + the seam are verified in code."
    }
  }
];

// =========================================================================
// 10-STEP GRAPHIC DESIGN POLISH PIPELINE — refinement, not reinvention.
// Finds every graphic design element in the active files that can be
// polished, tidied and perfected (added DETAIL, never big redesign),
// then emits the fully polished files.
// =========================================================================
const POLISH_PIPELINE_STEPS = [
  {
    num: 1, stage: 1, stageName: 'Census & Space', section: 'P1: Element Census',
    role: 'Graphic Element Census & Inventory Director',
    mainTask: 'Census every visual element in the active files: every component, every state, every surface, every icon, every color usage — building the complete polish worklist',
    supportTask: 'Rate each element 1-10 on current craft level so effort flows to the highest-leverage polish targets first',
    upstreamInputs: 'Active index.html + style.css + script.js + Original notes.txt',
    downstreamTarget: 'P2–P7 (all polish specs)',
    creativeStretch: 'Mark the 5 elements users see most often — these get the deepest polish because they carry the app\'s perceived quality.',
    insightHarvest: 'Note which elements the original notes.txt promised as "signature" — those carry double polish duty.',
    criticalDeliverables: '1) Complete element census (component -> states -> craft score); 2) Top-10 polish priority list; 3) Most-seen 5 elements marked; 4) Initial polish budget allocation.',
    dynamicSignals: ['visual-system', 'mode-lens'],
    directive: 'This is a detail pass, NOT a redesign. Every finding must refine what exists — zero new layout paradigms, zero style changes.',
    qualityGate: 'Every visible element appears in the census with a craft score.',
    adaptiveFocus: {
      app: "For apps: list cards, empty states and dialogs lead the census.",
      tool: "For tools: inputs, steppers and the output panel lead the census.",
      game: "For games: HUD chips, score popups and the game-over card lead the census.",
      experimental: "For sandboxes: parameter controls and the stage frame lead the census.",
      free: "For hybrids: the seam element and both worlds' shared controls lead the census."
    }
  },
  {
    num: 2, stage: 1, stageName: 'Census & Space', section: 'P1: Element Census',
    role: 'Spacing, Alignment & Rhythm Refinement Specialist',
    mainTask: 'Audit and refine every spacing relationship: consistent scale steps, optical alignment (visual centering vs geometric), grouping/whitespace rhythm, and the 8px-ish system the app already implies',
    supportTask: 'Write the EXACT final values (padding, margin, gap) for every element that needs tightening — as ready-to-paste final CSS, not advice',
    upstreamInputs: 'P1 Census + active style.css',
    downstreamTarget: 'P8 (Polish Contract)',
    creativeStretch: 'Apply optical spacing to 3 elements where geometric spacing currently LOOKS wrong (icons in pills, labels in badges) — the invisible fix everyone feels.',
    insightHarvest: 'Find the app\'s existing spacing scale (harvest the most common gaps) and snap all outliers onto it.',
    criticalDeliverables: '1) Spacing scale decision (final values); 2) Per-element exact spacing fixes (final CSS); 3) Optical alignment fixes (3+); 4) Whitespace rhythm map.',
    dynamicSignals: ['visual-system'],
    directive: 'Perfect spacing is invisible. If users notice the spacing work, it is too loud.',
    qualityGate: 'Every fix is exact final CSS; no element left on an off-scale value.',
    adaptiveFocus: {
      app: "For apps: card grids get perfect gutters at every breakpoint.",
      tool: "For tools: control stacks get uniform rhythm — the panel reads as one instrument.",
      game: "For games: HUD elements get battle-tested spacing that survives score-length changes.",
      experimental: "For sandboxes: HUD drawers breathe evenly when collapsed and expanded.",
      free: "For hybrids: both worlds share ONE spacing scale."
    }
  },
  {
    num: 3, stage: 2, stageName: 'Type & Color', section: 'P2: Typography & Color',
    role: 'Typography & Hierarchy Polish Specialist',
    mainTask: 'Refine the typography: line-heights, letter-spacing (especially display sizes), tabular numbers where counting, hierarchy contrast between levels, text rendering hints, and balanced line breaks',
    supportTask: 'Write the exact final typographic values per role (h1-h4, body, caption, code, numeric) — ready-to-paste CSS',
    upstreamInputs: 'P1 Census + active style.css + Blueprint typography choice',
    downstreamTarget: 'P8 (Polish Contract)',
    creativeStretch: 'Add the one typographic detail that separates good from great: perfectly tabular, non-jumping numbers in every countable UI (scores, timers, totals).',
    insightHarvest: 'Check every text-shadow / gradient-text trick for readability under both light conditions the app supports.',
    criticalDeliverables: '1) Final type scale values (all roles); 2) Numeric tabular fixes; 3) Hierarchy contrast verification; 4) Rendering-hint additions (antialiasing, balance where useful).',
    dynamicSignals: ['visual-system'],
    directive: 'Typography is the UI\'s voice. Polish it until it speaks clearly at a whisper.',
    qualityGate: 'Every text role has final values; zero jumpy counters remain.',
    adaptiveFocus: {
      app: "For apps: item counts and dates get tabular-nums treatment.",
      tool: "For tools: every numeric readout is tabular and steady.",
      game: "For games: score/combo text is tabular and pop-styled consistently.",
      experimental: "For sandboxes: parameter values are tabular and legible at any size.",
      free: "For hybrids: both worlds share one typographic voice."
    }
  },
  {
    num: 4, stage: 2, stageName: 'Type & Color', section: 'P2: Typography & Color',
    role: 'Color, Contrast & Gradient Refinement Specialist',
    mainTask: 'Polish every color application: hover/active step consistency, gradient smoothness (banding checks), border tints, state color harmony (success/warn/error family), and focus-ring visibility',
    supportTask: 'Write exact final color values for every refined surface; verify contrast numbers (not eyeballs) for text-on-surface pairs',
    upstreamInputs: 'P1 Census + active style.css + Blueprint palette',
    downstreamTarget: 'P8 (Polish Contract)',
    creativeStretch: 'Craft the "hover glow-up" pass: every interactive element gets a noticeably more delightful hover state — consistent in language across the whole app.',
    insightHarvest: 'Find any place the palette drifts (slightly-off grays, accidental hex twins) and reconcile them to tokens.',
    criticalDeliverables: '1) Final color fixes per surface; 2) Computed contrast table for text pairs; 3) Hover/active glow-up set (final CSS); 4) Token reconciliation list.',
    dynamicSignals: ['visual-system'],
    directive: 'Refine the existing palette — do not replace it. The app keeps its identity, sharper.',
    qualityGate: 'All text pairs pass the app\'s a11y floor; hover states consistent app-wide.',
    adaptiveFocus: {
      app: "For apps: tag/chip colors form one visible family after polish.",
      tool: "For tools: error tints and focus rings are unmistakable at a glance.",
      game: "For games: damage/success/heal colors read instantly at gameplay speed.",
      experimental: "For sandboxes: palette-driven visuals get smoother gradient stops.",
      free: "For hybrids: both worlds share the refined family, no drift across the seam."
    }
  },
  {
    num: 5, stage: 3, stageName: 'Surface & Light', section: 'P3: Surface & Depth',
    role: 'Surface, Corner & Border Refinement Specialist',
    mainTask: 'Polish every surface treatment: corner-radius consistency (including nested-radius math so inner corners follow outer), border weight harmony, elevation layering, and edge treatments (hairlines, bevels)',
    supportTask: 'Write the exact final radius/border/shadow values per component tier — as ready-to-paste CSS with the nested-radius formula applied where cards contain elements',
    upstreamInputs: 'P1 Census + active style.css + Blueprint finish settings',
    downstreamTarget: 'P8 (Polish Contract)',
    creativeStretch: 'Apply the nested-corner formula everywhere a container holds a rounded child (outer minus padding) — the detail that instantly reads as professional.',
    insightHarvest: 'Verify every surface still matches its Blueprint finish (corner scale, density) — polish works WITH the chosen system.',
    criticalDeliverables: '1) Radius/border system (final values per tier); 2) Nested-radius fixes applied; 3) Elevation layer map (shadow tiers); 4) Hairline/edge treatments refined.',
    dynamicSignals: ['visual-system'],
    directive: 'Corners and edges are where craft is judged first. Make them mathematically perfect.',
    qualityGate: 'Zero ad-hoc radius values; nested corners follow the formula; shadows form a clear tier system.',
    adaptiveFocus: {
      app: "For apps: nested list cards and dialogs get the full corner treatment.",
      tool: "For tools: panel assemblies read as one machined object.",
      game: "For games: HUD chips keep their language at every size.",
      experimental: "For sandboxes: controls nest cleanly inside drawers and popovers.",
      free: "For hybrids: the seam keeps both worlds' corners speaking one language."
    }
  },
  {
    num: 6, stage: 3, stageName: 'Surface & Light', section: 'P3: Surface & Depth',
    role: 'Light, Shadow, Glow & Texture Micro-Polish Specialist',
    mainTask: 'Micro-polish every light treatment: shadow softness/stops, glow recipes (per Blueprint back-lighting settings), texture strength/opacity (per Blueprint texture), light behavior details (per Blueprint light behaviour), and specular highlights',
    supportTask: 'Write the exact final shadow/glow/texture CSS for every treated element — multi-stop shadows, correct blur/spread relationships, and opacity-corrected texture layers',
    upstreamInputs: 'P1 Census + active style.css + Blueprint (texture/backlight/light-behaviour)',
    downstreamTarget: 'P8 (Polish Contract)',
    creativeStretch: 'Give the app\'s primary button/toggle its "Apple moment": the one glow recipe (per the Back-Light Studio config) that makes the control feel physical and premium.',
    insightHarvest: 'Every glow from the Blueprint backlight config gets its exact CSS realization verified — colors, intensity, spread, behavior all honored.',
    criticalDeliverables: '1) Final shadow tiers (multi-stop, soft); 2) Back-light recipes per Blueprint config (exact CSS); 3) Texture opacity/strength final values; 4) Specular/edge-light micro-details.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'Light is applied physics. Every glow must obey the app\'s chosen light behaviour rules.',
    qualityGate: 'Every glow/shadow has exact final CSS; backlight config fully realized; textures at tasteful opacity.',
    adaptiveFocus: {
      app: "For apps: active cards glow gently; inactive ones stay calm.",
      tool: "For tools: the output panel basks in a subtle working light.",
      game: "For games: the HUD glows per state without stealing game focus.",
      experimental: "For sandboxes: parameter changes send a soft light ripple.",
      free: "For hybrids: light behaves identically on both sides of the seam."
    }
  },
  {
    num: 7, stage: 4, stageName: 'Contract', section: 'P4: Final Polish Contract',
    role: 'Icon, Micro-Motion & Final Polish Contract Locksmith',
    mainTask: 'Polish icon consistency (stroke weight, optical size, corner rounding in SVGs), micro-motion timing (eases, durations per interaction class), then LOCK the complete Graphic Polish Contract: every fix from P2–P6 assembled into one ordered, final-CSS change manifest',
    supportTask: 'Verify every polish item carries its exact final code, its target selector, and a "why this is refinement not redesign" justification',
    upstreamInputs: 'P2–P6 polish specs',
    downstreamTarget: 'P8–P10 (Emissions)',
    creativeStretch: 'Design the polish signature: the ONE micro-detail (a perfected ease curve, a 1px edge light, a tabular counter) that users will subconsciously associate with quality from now on.',
    insightHarvest: 'Sweep for any polish item that crept toward redesign — return it to the refinement lane or defer it.',
    criticalDeliverables: '1) Icon consistency fixes; 2) Micro-motion timing contract; 3) LOCKED Polish Contract (ordered, exact CSS); 4) Polish signature declaration.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'The contract contains ONLY final CSS/markup. If a fix is not exact, it is not done.',
    qualityGate: '100% of polish items have final code; zero redesign creep; signature declared.',
    adaptiveFocus: {
      app: "For apps: every icon in every state shares one optical weight.",
      tool: "For tools: icon+label pairs align perfectly in every control.",
      game: "For games: HUD icons read at a glance mid-play, at any speed.",
      experimental: "For sandboxes: tool icons share stroke language with parameter glyphs.",
      free: "For hybrids: one icon language bridges both worlds."
    }
  },
  {
    num: 8, stage: 5, stageName: 'Polish Emit', section: 'P5: Emit',
    targetFile: 'html',
    role: 'Polish Emission Engineer (index.html)',
    mainTask: 'Emit the complete POLISHED index.html: the live file with every markup-level polish item applied (icon SVG refinements, accessibility attributes, optical alignment wrappers if needed) — preserving everything else byte-for-byte',
    supportTask: 'Keep all hooks, ids and structure identical — polish only touches presentation-level markup',
    upstreamInputs: 'Live index.html + P7 Locked Contract + P1 Census',
    downstreamTarget: 'Polished index.html & P9',
    creativeStretch: 'Any inline SVGs get the stroke/alignment pass — crisp at every DPR.',
    insightHarvest: 'Cross-check every element the census scored under 7 — its markup-level polish is now applied.',
    criticalDeliverables: 'Raw, complete, valid POLISHED index.html only.',
    dynamicSignals: ['visual-system', 'mode-lens'],
    directive: 'Output ONLY the complete polished index.html — no fences, no commentary, nothing omitted.',
    qualityGate: 'All hooks identical to live file; polish items applied; zero structural drift.',
    adaptiveFocus: {
      app: "For apps: list templates polished inline where needed.",
      tool: "For tools: control markup keeps semantics while gaining polish.",
      game: "For games: HUD markup polished without touching the game DOM logic.",
      experimental: "For sandboxes: parameter rows polished in place.",
      free: "For hybrids: both worlds polished evenly."
    }
  },
  {
    num: 9, stage: 5, stageName: 'Polish Emit', section: 'P5: Emit',
    targetFile: 'css',
    role: 'Polish Emission Engineer (style.css)',
    mainTask: 'Emit the complete POLISHED style.css: the live file with the entire Locked Polish Contract applied — spacing, type, color, surfaces, shadows/glows, textures, motion timings — preserving untouched rules byte-for-byte',
    supportTask: 'Keep all selectors valid against the polished index.html; keep reduced-motion twins for anything touched',
    upstreamInputs: 'Live style.css + P7 Locked Contract + Polished index.html (P8)',
    downstreamTarget: 'Polished style.css & P10',
    creativeStretch: 'This stylesheet is the polish showcase: every tier, token and treatment now reads as one designed system.',
    insightHarvest: 'Verify every selector from the census matrix still resolves — no orphan polish.',
    criticalDeliverables: 'Raw, complete, valid POLISHED style.css only.',
    dynamicSignals: ['visual-system', 'sensory-motion'],
    directive: 'Output ONLY the complete polished style.css — no fences, no commentary, nothing omitted.',
    qualityGate: 'Polish Contract 100% applied; zero orphan selectors; reduced-motion honored.',
    adaptiveFocus: {
      app: "For apps: state classes for all interactive states polished.",
      tool: "For tools: focus rings and input states are the shiniest they have ever been.",
      game: "For games: HUD and juice states polished with motion twins.",
      experimental: "For sandboxes: HUD polish survives collapse/expand.",
      free: "For hybrids: seam transitions polished both ways."
    }
  },
  {
    num: 10, stage: 5, stageName: 'Polish Emit', section: 'P5: Emit',
    targetFile: 'js',
    role: 'Polish Emission Engineer (script.js) & Harmony Verifier',
    mainTask: 'Emit the complete POLISHED script.js: the live file with ONLY visual-behavior polish applied (smoothed transitions, tabular counter rendering, refined motion triggers, class-name parity with any polished CSS states) — all logic preserved exactly',
    supportTask: 'Perform the final harmony verification: confirm the three polished files agree on every selector, class and hook — and record the polish summary for the user',
    upstreamInputs: 'Polished index.html (P8) + Polished style.css (P9) + Live script.js',
    downstreamTarget: 'Polished Deliverable Set + Live Preview',
    creativeStretch: 'The first load after polish should feel like the app got a professional detailing — same car, deeper shine.',
    insightHarvest: 'Verify every dynamic class the JS toggles exists in the polished CSS — and every polished CSS state class has a trigger.',
    criticalDeliverables: 'Raw, complete, valid POLISHED script.js only.',
    dynamicSignals: ['mode-lens', 'tech-stack', 'sensory-motion', 'visual-system'],
    directive: 'Output ONLY the complete polished script.js — no fences, no commentary, nothing omitted, logic untouched beyond visual polish.',
    qualityGate: 'Zero logic changes beyond visual behavior; class parity 100%; boots with zero console errors.',
    adaptiveFocus: {
      app: "For apps: counters and toasts animate with the polished timing language.",
      tool: "For tools: result reveals use the perfected ease curves.",
      game: "For games: popups and celebrations hit the polished beat.",
      experimental: "For sandboxes: parameter changes ripple with refined physics.",
      free: "For hybrids: the seam transition is now the polish signature moment."
    }
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
    textureStyle: d.textureStyle,
    liveBackground: d.liveBackground,
    backlightStyle: d.backlightStyle,
    lightBehaviour: d.lightBehaviour,
    gameTypeId: d.gameTypeId,
    gameArtStyle: d.gameArtStyle,
    gameFlow: d.gameFlow,
    html5: [...d.html5],
    css3: [...d.css3],
    jsArch: [...d.jsArch],
    jsLibs: [...d.jsLibs],
    essentials: [...d.essentials],
    // Back-Light Studio configuration (colors, behaviour, physics + per-element overrides)
    backlightConfig: {
      colors: [...(d.backlightColors || ['#6366f1', '#22d3ee'])],
      behavior: d.backlightBehavior || 'static',
      physics: d.backlightPhysics || 'none',
      intensity: Number.isFinite(d.backlightIntensity) ? d.backlightIntensity : 55,
      spread: Number.isFinite(d.backlightSpread) ? d.backlightSpread : 22,
      elements: {
        toggle: { enabled: true, color: '', intensity: null, spread: null },
        button: { enabled: true, color: '', intensity: null, spread: null },
        card: { enabled: false, color: '', intensity: null, spread: null },
        input: { enabled: true, color: '', intensity: null, spread: null },
        tab: { enabled: false, color: '', intensity: null, spread: null }
      }
    },
    // Conditional & Expanded Sub-Menu Settings
    subConfig: {
      // Mode deep-dives
      appPrimaryView: 'cards-board',
      appPowerFeature: 'cmd-palette',
      appHomeStyle: 'dashboard-board',
      toolInputMode: 'sliders-knobs',
      toolOutputMode: 'live-preview-card',
      toolPrecisionMode: 'hybrid-precision',
      gamePacing: 'endless-highscore',
      gameCamera: 'side-view',
      gameControls: 'hybrid-both',
      gameJuice: 'max-juice',
      gameFailLoop: 'instant-retry',
      expMedium: '2d-particles',
      expInteraction: 'direct-brush',
      expPaletteMode: 'fixed-palette',
      freeBlend: 'app-game-blend',
      freeStructure: 'spatial-desk',
      freeDelightLevel: 'subtle-magic',
      // Audio sub-menu
      audioCharacter: type === 'game' ? 'retro-8bit' : 'warm-marimba',
      audioTriggers: 'milestones-only',
      // Persistence sub-menu
      saveIndicator: 'subtle-pill',
      backupFormat: type === 'tool' ? 'both-formats' : 'json-file',
      // Visual finish sub-menu
      cornerRadius: 'balanced',
      visualDensity: 'balanced',
      bgTexture: type === 'experimental' ? 'gradient-mesh' : 'clean-solid',
      // Texture sub-menu
      textureDepth: 'subtle',
      texturePlacement: 'background-only',
      textureMotion: 'static',
      // Live background sub-menu
      liveBgDensity: 'balanced',
      liveBgSpeed: 'calm',
      liveBgInteraction: 'ambient',
      liveBgLayering: 'behind-all',
      liveBgFallback: 'auto-pause',
      // Advanced light behaviour sub-menu
      lightDirection: 'top-left',
      lightSoftness: 'soft',
      shadowCasting: 'soft',
      lightTemp: 'neutral',
      specularLevel: 'satin',
      lightParallax: 'static',
      // Library sub-menus
      threeCamera: 'orbit',
      threeLighting: 'studio-3pt',
      chartType: 'line-area',
      chartInteractivity: 'hover-tooltips',
      matterGravity: 'earth-down',
      matterBounds: 'solid-walls',
      // GitHub update checker sub-menu (for generated apps)
      ghCheckTiming: 'launch-daily',
      ghUpdateUx: 'dialog-changelog',
      ghVersionSource: 'manifest-json'
    }
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
  guiderStepIndex: 0,
  desktopLayout: 'split',
  // Prompt Improver state (writes only into the main prompt box)
  improver: {
    view: 'hub',
    source: 'local',
    count: 10,
    questions: [],
    answers: {},
    index: 0,
    ai: { idea: '', focus: [], depth: 'practical', count: 30, note: '', metaPrompt: '', loading: false },
    enhance: { level: 'standard', tone: 'keep', loading: false, result: '' }
  },
  // GitHub update checker state (for this app itself)
  githubRepo: '',
  autoCheckUpdates: true,
  updateStatus: null,
  lastUpdateCheck: null,
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
  pipelineMode: 'build',
  versions: [],
  activeVersionId: null,
  evoRun: null,
  bugUi: null,
  evoUi: {
    view: 'hub',
    goal: '',
    polishFocus: '',
    questions: [],
    answers: {},
    qIndex: 0,
    qSource: 'local',
    qCount: 10,
    aiIdeas: [],
    aiLoading: false,
    ideaCount: 30,
    polishView: 'hub'
  },
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
  openPromptGuiderBtn: document.getElementById('openPromptGuiderBtn'),
  openBlueprintModalBtn: document.getElementById('openBlueprintModalBtn'),
  switchFromMenuToGuiderBtn: document.getElementById('switchFromMenuToGuiderBtn'),
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
  bpModeDeepDiveSection: document.getElementById('bpModeDeepDiveSection'),
  bpAudioSubSection: document.getElementById('bpAudioSubSection'),
  bpPersistenceSubSection: document.getElementById('bpPersistenceSubSection'),
  bpLiveVisualSpecimen: document.getElementById('bpLiveVisualSpecimen'),
  bpVisualFinishSection: document.getElementById('bpVisualFinishSection'),
  bpLibsSubMenusContainer: document.getElementById('bpLibsSubMenusContainer'),
  bpUpdateSubSection: document.getElementById('bpUpdateSubSection'),
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
  // Prompt Guider Modal Elements
  promptGuiderModal: document.getElementById('promptGuiderModal'),
  closePromptGuiderBtn: document.getElementById('closePromptGuiderBtn'),
  guiderOpenFullMenuBtn: document.getElementById('guiderOpenFullMenuBtn'),
  guiderStepCounterBadge: document.getElementById('guiderStepCounterBadge'),
  guiderModeBadge: document.getElementById('guiderModeBadge'),
  guiderProgressBar: document.getElementById('guiderProgressBar'),
  guiderStepPills: document.getElementById('guiderStepPills'),
  guiderBranchBadge: document.getElementById('guiderBranchBadge'),
  guiderBranchBadgeText: document.getElementById('guiderBranchBadgeText'),
  guiderQuestionTitle: document.getElementById('guiderQuestionTitle'),
  guiderQuestionSubtitle: document.getElementById('guiderQuestionSubtitle'),
  guiderWhyBox: document.getElementById('guiderWhyBox'),
  guiderWhyText: document.getElementById('guiderWhyText'),
  guiderOptionsArea: document.getElementById('guiderOptionsArea'),
  guiderInlineSubMenu: document.getElementById('guiderInlineSubMenu'),
  guiderLiveSpecimen: document.getElementById('guiderLiveSpecimen'),
  guiderVisionCount: document.getElementById('guiderVisionCount'),
  guiderVisionSummary: document.getElementById('guiderVisionSummary'),
  guiderBackBtn: document.getElementById('guiderBackBtn'),
  guiderNextBtn: document.getElementById('guiderNextBtn'),
  guiderNextBtnLabel: document.getElementById('guiderNextBtnLabel'),
  guiderDraftPromptBtn: document.getElementById('guiderDraftPromptBtn'),
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
  toastContainer: document.getElementById('toastContainer'),
  // Prompt Improver elements
  openImproverBtn: document.getElementById('openImproverBtn'),
  promptImproverModal: document.getElementById('promptImproverModal'),
  closeImproverBtn: document.getElementById('closeImproverBtn'),
  improverBody: document.getElementById('improverBody'),
  improverFooter: document.getElementById('improverFooter'),
  // GitHub update checker elements (Settings)
  updateRepoInput: document.getElementById('updateRepoInput'),
  updateBranchInput: document.getElementById('updateBranchInput'),
  checkUpdatesBtn: document.getElementById('checkUpdatesBtn'),
  applyUpdateBtn: document.getElementById('applyUpdateBtn'),
  autoCheckUpdatesToggle: document.getElementById('autoCheckUpdatesToggle'),
  updateStatusLine: document.getElementById('updateStatusLine'),
  updateDot: document.getElementById('updateDot'),
  // Guider extras
  guiderSpecimenWrap: document.getElementById('guiderSpecimenWrap'),
  guiderVisionWrap: document.getElementById('guiderVisionWrap'),
  guiderWhyToggle: document.getElementById('guiderWhyToggle'),
  guiderStageWrap: document.getElementById('guiderStageWrap'),
  guiderAside: document.getElementById('guiderAside'),
  // New visual & game galleries (Blueprint modal)
  textureGallery: document.getElementById('textureGallery'),
  liveBackgroundGallery: document.getElementById('liveBackgroundGallery'),
  backlightGallery: document.getElementById('backlightGallery'),
  backlightStudioPanel: document.getElementById('backlightStudioPanel'),
  lightBehaviourGallery: document.getElementById('lightBehaviourGallery'),
  lightAdvancedSection: document.getElementById('lightAdvancedSection'),
  liveBgSubSection: document.getElementById('liveBgSubSection'),
  gameStudioTabBtn: document.getElementById('gameStudioTabBtn'),
  gameTypeGallery: document.getElementById('gameTypeGallery'),
  gameArtGallery: document.getElementById('gameArtGallery'),
  gameFlowGallery: document.getElementById('gameFlowGallery'),
  // Workspace tools & versions
  uploadBtn: document.getElementById('uploadBtn'),
  uploadFileInput: document.getElementById('uploadFileInput'),
  updateStudioBtn: document.getElementById('updateStudioBtn'),
  bugScanBtn: document.getElementById('bugScanBtn'),
  polishBtn: document.getElementById('polishBtn'),
  versionStrip: document.getElementById('versionStrip'),
  versionChips: document.getElementById('versionChips'),
  backToBuildBtn: document.getElementById('backToBuildBtn'),
  // Update Studio modal
  updateStudioModal: document.getElementById('updateStudioModal'),
  closeUpdateStudioBtn: document.getElementById('closeUpdateStudioBtn'),
  updateStudioBody: document.getElementById('updateStudioBody'),
  updateStudioFooter: document.getElementById('updateStudioFooter'),
  // Bug Doctor modal
  bugScanModal: document.getElementById('bugScanModal'),
  closeBugScanBtn: document.getElementById('closeBugScanBtn'),
  bugScanBody: document.getElementById('bugScanBody'),
  bugScanFooter: document.getElementById('bugScanFooter'),
  bugScanStartBtn: document.getElementById('bugScanStartBtn'),
  bugFixBtn: document.getElementById('bugFixBtn'),
  // Design Polish modal
  polishModal: document.getElementById('polishModal'),
  closePolishBtn: document.getElementById('closePolishBtn'),
  polishBody: document.getElementById('polishBody'),
  polishFooter: document.getElementById('polishFooter')
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
  syncActiveVersionFromEditors();
  schedulePersistVersions();
  persistEvoRun();
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
// INTERACTIVE WEB AUDIO PREVIEWER (FOR PROMPT GUIDER & FULL MENU)
// =========================================================================
let previewAudioCtx = null;
function playPreviewTone(character) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!previewAudioCtx) previewAudioCtx = new AudioCtx();
    if (previewAudioCtx.state === 'suspended') previewAudioCtx.resume();

    const now = previewAudioCtx.currentTime;
    const playNote = (freq, type, startOffset, dur, vol = 0.08) => {
      const osc = previewAudioCtx.createOscillator();
      const gain = previewAudioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now + startOffset);
      gain.gain.setValueAtTime(0.0001, now + startOffset);
      gain.gain.exponentialRampToValueAtTime(vol, now + startOffset + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + startOffset + dur);
      osc.connect(gain);
      gain.connect(previewAudioCtx.destination);
      osc.start(now + startOffset);
      osc.stop(now + startOffset + dur + 0.02);
    };

    if (character === 'retro-8bit') {
      playNote(523.25, 'square', 0, 0.08, 0.05);
      playNote(659.25, 'square', 0.08, 0.08, 0.05);
      playNote(783.99, 'square', 0.16, 0.14, 0.05);
    } else if (character === 'scifi-fm') {
      playNote(440, 'triangle', 0, 0.14, 0.07);
      playNote(880, 'sine', 0.06, 0.2, 0.06);
    } else if (character === 'soft-mech') {
      playNote(180, 'triangle', 0, 0.035, 0.08);
      playNote(320, 'sine', 0.02, 0.025, 0.04);
    } else if (character === 'glass-bell') {
      playNote(1046.5, 'sine', 0, 0.22, 0.06);
      playNote(1568, 'sine', 0.05, 0.28, 0.045);
      playNote(2093, 'sine', 0.1, 0.34, 0.025);
    } else if (character === 'lofi-warm') {
      playNote(392, 'triangle', 0, 0.16, 0.07);
      playNote(494, 'triangle', 0.09, 0.2, 0.06);
      playNote(587, 'sine', 0.18, 0.26, 0.045);
    } else {
      // warm-marimba default
      playNote(523.25, 'sine', 0, 0.18, 0.08);
      playNote(659.25, 'sine', 0.07, 0.22, 0.07);
    }
  } catch (_) {}
}

// =========================================================================
// LIVE INTERACTIVE VISUAL SPECIMEN RENDERER
// =========================================================================
function renderLiveVisualSpecimen(containerEl) {
  if (!containerEl) return;
  const cfg = state.studioConfig;
  const sub = cfg.subConfig || {};
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const mood = findCatalogItem(STUDIO_CATALOG.colorMoods, cfg.colorMood);
  const style = findCatalogItem(STUDIO_CATALOG.designStyles, cfg.designStyle);
  const typo = findCatalogItem(STUDIO_CATALOG.typographyStyles, cfg.typographyStyle);
  const elem = findCatalogItem(STUDIO_CATALOG.elementStyles, cfg.elementStyle);
  const light = findCatalogItem(STUDIO_CATALOG.lightingStyles, cfg.lightingStyle);
  const iface = findCatalogItem(STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign);
  const texture = findCatalogItem(STUDIO_CATALOG.textureDesigns, cfg.textureStyle);
  const lbg = findCatalogItem(STUDIO_CATALOG.liveBackgrounds, cfg.liveBackground);
  const lbBehav = findCatalogItem(STUDIO_CATALOG.lightBehaviour, cfg.lightBehaviour);

  const isLightMode = cfg.designStyle === 'swiss-minimal' || cfg.designStyle === 'warm-paper' || cfg.designStyle === 'neubrutalism' || cfg.designStyle === 'nordic-frost' || cfg.designStyle === 'sunset-pop' || cfg.designStyle === 'mono-ink' || cfg.colorMood === 'crisp-daylight' || cfg.lightingStyle === 'daylight-flat';
  const bgByStyle = {
    'neubrutalism': '#fef08a',
    'warm-paper': '#f5efe6',
    'retro-crt': '#041008',
    'nordic-frost': '#eef4f8',
    'sunset-pop': '#fff1e6',
    'mono-ink': '#fafafa',
    'luxury-noir': '#0a0a0c'
  };
  const bg = bgByStyle[cfg.designStyle] || (isLightMode ? '#f8fafc' : mood.colors[0]);
  const cardBgByStyle = {
    'glassmorphism': 'rgba(255,255,255,0.08)',
    'neubrutalism': '#ffffff',
    'warm-paper': '#fffcf7',
    'retro-crt': '#071a0e',
    'nordic-frost': '#ffffff',
    'sunset-pop': '#fff7ed',
    'mono-ink': '#ffffff',
    'luxury-noir': '#121216'
  };
  const cardBg = cardBgByStyle[cfg.designStyle] || (isLightMode ? '#ffffff' : mood.colors[1]);
  const accent = cfg.designStyle === 'retro-crt' ? '#22c55e' : cfg.designStyle === 'luxury-noir' ? '#d9c07f' : mood.colors[2];
  const accent2 = cfg.designStyle === 'retro-crt' ? '#4ade80' : cfg.designStyle === 'luxury-noir' ? '#b08d3e' : mood.colors[3];
  const textPrimary = isLightMode ? '#0f172a' : '#f1f5f9';
  const textMuted = isLightMode ? '#475569' : '#94a3b8';

  const radiusMap = { sharp: '4px', balanced: '12px', pillowy: '20px' };
  const radiusByElement = { 'chamfered-scifi': '2px', 'solid-retro': '3px', 'glass-outline': '14px' };
  const radius = radiusByElement[cfg.elementStyle] || (cfg.elementStyle === 'pill-tactile' ? '18px' : (radiusMap[sub.cornerRadius] || '12px'));
  const padMap = { spacious: '16px', balanced: '12px', compact: '8px' };
  const pad = padMap[sub.visualDensity] || '12px';

  let border = `1px solid ${isLightMode ? '#cbd5e1' : 'rgba(148,163,184,0.22)'}`;
  let shadow = '0 8px 20px -8px rgba(0,0,0,0.45)';
  if (cfg.designStyle === 'neubrutalism' || cfg.elementStyle === 'brutal-offset') {
    border = '2px solid #000000';
    shadow = '4px 4px 0px #000000';
  } else if (cfg.lightingStyle === 'neon-bloom' || cfg.designStyle === 'cyberpunk-hud') {
    border = `1px solid ${accent2}`;
    shadow = `0 0 16px -3px ${accent2}66`;
  } else if (cfg.lightingStyle === 'top-specular-rim') {
    shadow = 'inset 0 1px 0 rgba(255,255,255,0.22), 0 10px 24px -10px rgba(0,0,0,0.6)';
  } else if (cfg.lightingStyle === 'ambient-aura' || cfg.lightingStyle === 'dusk-glow') {
    shadow = `0 0 28px -6px ${accent}55`;
  } else if (cfg.lightingStyle === 'spotlight-focus' || cfg.lightingStyle === 'volumetric-vignette') {
    shadow = `0 14px 30px -12px rgba(0,0,0,0.7), 0 0 22px -10px ${accent}44`;
  }

  if (cfg.designStyle === 'mono-ink' || cfg.designStyle === 'nordic-frost') {
    border = `1.5px solid ${cfg.designStyle === 'mono-ink' ? '#111111' : '#c9dbe7'}`;
  }

  // Light behaviour layering — direction, softness, temperature & shadows
  const softMap = { crisp: '4px', soft: '14px', diffused: '28px' };
  if (sub.lightDirection === 'top-left') shadow += `, inset 0 1px 0 ${hexToRgba(accent2, 0.10)}`;
  if (sub.lightDirection === 'bottom-up') shadow += `, inset 0 -2px 0 ${hexToRgba(accent, 0.14)}`;
  if (sub.shadowCasting === 'layered-contact') shadow = `0 1px 2px rgba(0,0,0,0.35), 0 8px ${softMap[sub.lightSoftness] || '14px'} -6px rgba(0,0,0,0.4), 0 22px 44px -18px rgba(0,0,0,0.45)`;
  if (sub.lightTemp === 'warm') shadow += `, 0 0 18px -8px rgba(253,230,138,0.25)`;
  if (sub.lightTemp === 'cool') shadow += `, 0 0 18px -8px rgba(219,234,254,0.22)`;

  // Texture layer — the real CSS recipe from the library, minus its base color
  let texOverlay = '';
  let texOpacity = sub.textureDepth === 'bold' ? 1 : sub.textureDepth === 'medium' ? 0.62 : 0.34;
  if (texture.id !== 'tex-plain') {
    const imgOnly = String(texture.code || '').replace(/background-color:[^;]+;?/g, '').trim();
    if (imgOnly) {
      texOverlay = `<div style="position:absolute; inset:0; border-radius:inherit; opacity:${texOpacity}; pointer-events:none; ${imgOnly.replace(/animation:[^;]+;?/g, '')}"></div>`;
    }
  }

  // Live background layer (CSS-animated vignette from the library)
  const liveBgLayer = lbg.id !== 'livebg-none'
    ? `<div class="lbd-stage ${escapeHtml(lbg.demo)}" style="position:absolute; inset:0; border-radius:inherit; opacity:${sub.liveBgSpeed === 'lively' ? 1 : sub.liveBgSpeed === 'steady' ? 0.8 : 0.6};"></div>`
    : '';

  // Back-light glow behind the primary control (Apple-style)
  const bconf = cfg.backlightConfig || {};
  const bElements = bconf.elements || {};
  const blDesign = findCatalogItem(STUDIO_CATALOG.backlightDesigns, cfg.backlightStyle);
  let btnGlow = '';
  if (blDesign.id !== 'bl-none' && bElements.button && bElements.button.enabled !== false) {
    const bcol = bElements.button.color || (bconf.colors && bconf.colors[0]) || accent;
    const bIntensity = Number.isFinite(bElements.button.intensity) ? bElements.button.intensity : (Number.isFinite(bconf.intensity) ? bconf.intensity : 55);
    const bSpread = Number.isFinite(bElements.button.spread) ? bElements.button.spread : (Number.isFinite(bconf.spread) ? bconf.spread : 22);
    btnGlow = `box-shadow:${computeBacklightGlow(bcol, bIntensity, bSpread, (bconf.colors && bconf.colors[1]) || bcol)};`;
  }

  const btnRadius = cfg.elementStyle === 'pill-tactile' || cfg.elementStyle === 'glass-outline' ? '9999px' : radius;
  const sampleTitle = cfg.projectType === 'game' ? 'Wave 04 • Score 2,450' : cfg.projectType === 'tool' ? 'Live Output • 98.4%' : cfg.projectType === 'experimental' ? 'Seed #409 • Flow' : 'Today’s Focus • 3/5';
  const sampleAction = cfg.projectType === 'game' ? 'Boost' : cfg.projectType === 'tool' ? 'Copy Result' : cfg.projectType === 'experimental' ? 'Randomize' : 'Add Item';

  containerEl.innerHTML = `
    <div class="live-specimen-stage" style="background-color:${bg}; border:1px solid rgba(51,65,85,0.6); font-family:${typo.sampleFont};${cfg.lightingStyle === 'dusk-glow' ? ' background-image:linear-gradient(180deg,' + accent + '40, transparent 70%);' : ''}">
      ${liveBgLayer}
      ${texOverlay}
      <div style="position:relative; background:${cardBg}; border:${border}; border-radius:${radius}; padding:${pad}; box-shadow:${shadow}; backdrop-filter:${cfg.designStyle === 'glassmorphism' ? 'blur(10px)' : 'none'};">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:8px;">
          <div style="min-width:0;">
            <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.06em; color:${accent2}; font-weight:700;">${escapeHtml(mode.label)} • ${escapeHtml(iface.name)}</div>
            <div style="font-size:13px; font-weight:700; color:${textPrimary}; margin-top:2px; font-variant-numeric:tabular-nums;">${escapeHtml(sampleTitle)}</div>
          </div>
          <span style="font-size:10px; padding:2px 8px; border-radius:${btnRadius}; background:${accent}22; color:${isLightMode ? textPrimary : accent2}; border:1px solid ${accent}55; font-weight:600;">${escapeHtml(style.name.split(' ')[0])}</span>
        </div>
        <div style="font-size:11px; color:${textMuted}; line-height:1.4; margin-bottom:10px;">
          ${escapeHtml(light.name)} lighting • ${escapeHtml(lbBehav.name.toLowerCase())} • ${escapeHtml(texture.id === 'tex-plain' ? 'plain surface' : texture.name.toLowerCase())}${lbg.id !== 'livebg-none' ? ` • ${escapeHtml(lbg.name.toLowerCase())}` : ''}.
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
          <button type="button" data-specimen-test="1" class="live-specimen-btn${backlightBehaviorClass(bconf.behavior)}" style="background:${accent}; color:#ffffff; border:${cfg.designStyle === 'neubrutalism' ? '2px solid #000' : 'none'}; border-radius:${btnRadius}; padding:5px 12px; font-size:11px; font-weight:600; ${btnGlow}">
            ${escapeHtml(sampleAction)} (Tap)
          </button>
          <span style="font-size:10px; color:${textMuted};">${escapeHtml(mood.name)}</span>
        </div>
      </div>
    </div>
  `;

  const testBtn = containerEl.querySelector('[data-specimen-test]');
  if (testBtn) {
    testBtn.addEventListener('click', () => {
      if (cfg.sensoryAudio === 'web-audio-subtle' || cfg.sensoryAudio === 'web-audio-arcade') {
        playPreviewTone(sub.audioCharacter || 'warm-marimba');
      }
      testBtn.textContent = 'Feels Great!';
      setTimeout(() => {
        testBtn.textContent = `${sampleAction} (Tap)`;
      }, 700);
    });
  }
}

// =========================================================================
// DESKTOP LAYOUT SWITCHER
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
// STUDIO BLUEPRINT CONFIGURATOR UI & CONDITIONAL SUB-MENUS
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
    const gameHidden = btn.id === 'gameStudioTabBtn' && state.studioConfig.projectType !== 'game' ? ' hidden' : '';
    btn.className = (active
      ? 'bp-tab-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/25 text-indigo-200 border border-indigo-500/40 transition shrink-0'
      : 'bp-tab-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 transition shrink-0') + gameHidden;
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
      ${item.sampleFont ? `<div class="bp-font-specimen mb-1.5" style="font-family:${item.sampleFont};"><span class="bp-font-specimen-lg">Ag</span><span class="bp-font-specimen-sm">The quick brown fox</span></div>` : ''}
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
      renderLiveVisualSpecimen(el.bpLiveVisualSpecimen);
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
      renderConditionalLibsSubMenus(el.bpLibsSubMenusContainer);
    });
    container.appendChild(btn);
  });
}

function toggleArrayItem(arr, id) {
  const idx = arr.indexOf(id);
  if (idx === -1) arr.push(id);
  else arr.splice(idx, 1);
}

function renderModeDeepDiveSubMenu(container) {
  if (!container) return;
  const cfg = state.studioConfig;
  const sub = cfg.subConfig;
  const spec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType] || STUDIO_CATALOG.subMenus.modeDeepDive.app;

  container.innerHTML = `
    <div class="flex items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-1.5">
          <span class="px-1.5 py-0.5 rounded text-[9px] font-mono-code bg-cyan-500/20 text-cyan-200 border border-cyan-500/35 uppercase">Mode Sub-Menu</span>
          <h4 class="text-xs font-semibold text-cyan-100">${escapeHtml(spec.title)}</h4>
        </div>
        <p class="text-[11px] text-slate-400 mt-0.5">${escapeHtml(spec.subtitle)}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${spec.fields.length >= 3 ? '3' : '2'} gap-3">
      ${spec.fields.map((f) => `
        <div>
          <label class="block text-[11px] font-semibold text-slate-200 mb-1">${escapeHtml(f.label)}</label>
          <select data-subkey="${escapeHtml(f.key)}" class="sub-select w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-2 text-slate-200 outline-none focus:border-cyan-500 text-xs">
            ${f.options.map((o) => `<option value="${escapeHtml(o.id)}" ${sub[f.key] === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
          </select>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.sub-select').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.subkey] = e.target.value;
      saveStudioConfig();
    });
  });
}

function renderConditionalAudioSubMenu(container) {
  if (!container) return;
  const cfg = state.studioConfig;
  const sub = cfg.subConfig;
  const isAudioActive = cfg.sensoryAudio === 'web-audio-subtle' || cfg.sensoryAudio === 'web-audio-arcade';
  container.classList.toggle('hidden', !isAudioActive);
  if (!isAudioActive) return;

  const spec = STUDIO_CATALOG.subMenus.audioEngine;
  container.innerHTML = `
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs font-semibold text-fuchsia-200">${escapeHtml(spec.title)}</span>
      <button type="button" data-play-current-tone="1" class="px-2 py-0.5 rounded bg-fuchsia-600/25 hover:bg-fuchsia-600/40 border border-fuchsia-400/40 text-fuchsia-100 text-[10px] font-semibold transition">
        Test Sound
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      <div>
        <label class="block text-[11px] font-medium text-slate-300 mb-1">Synth Tone Character</label>
        <select data-subkey="audioCharacter" class="sub-audio-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs outline-none focus:border-fuchsia-500">
          ${spec.characters.map((c) => `<option value="${escapeHtml(c.id)}" ${sub.audioCharacter === c.id ? 'selected' : ''}>${escapeHtml(c.label)}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-[11px] font-medium text-slate-300 mb-1">When Sounds Play</label>
        <select data-subkey="audioTriggers" class="sub-audio-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs outline-none focus:border-fuchsia-500">
          ${spec.triggers.map((t) => `<option value="${escapeHtml(t.id)}" ${sub.audioTriggers === t.id ? 'selected' : ''}>${escapeHtml(t.label)}</option>`).join('')}
        </select>
      </div>
    </div>
  `;

  container.querySelectorAll('.sub-audio-sel').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.subkey] = e.target.value;
      saveStudioConfig();
      if (sel.dataset.subkey === 'audioCharacter') playPreviewTone(e.target.value);
    });
  });
  const testBtn = container.querySelector('[data-play-current-tone]');
  if (testBtn) {
    testBtn.addEventListener('click', () => playPreviewTone(state.studioConfig.subConfig.audioCharacter));
  }
}

function renderConditionalPersistenceSubMenu(container) {
  if (!container) return;
  const cfg = state.studioConfig;
  const sub = cfg.subConfig;
  const isPersistActive = cfg.dataPersistence !== 'ephemeral';
  container.classList.toggle('hidden', !isPersistActive);
  if (!isPersistActive) return;

  const spec = STUDIO_CATALOG.subMenus.persistenceBackup;
  container.innerHTML = `
    <div class="text-xs font-semibold text-emerald-200">${escapeHtml(spec.title)}</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      ${spec.fields.map((f) => `
        <div>
          <label class="block text-[11px] font-medium text-slate-300 mb-1">${escapeHtml(f.label)}</label>
          <select data-subkey="${escapeHtml(f.key)}" class="sub-pers-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs outline-none focus:border-emerald-500">
            ${f.options.map((o) => `<option value="${escapeHtml(o.id)}" ${sub[f.key] === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
          </select>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.sub-pers-sel').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.subkey] = e.target.value;
      saveStudioConfig();
    });
  });
}

function renderConditionalUpdateSubMenu(container) {
  if (!container) return;
  const cfg = state.studioConfig;
  const sub = cfg.subConfig;
  const isActive = (cfg.jsArch && cfg.jsArch.includes('app-update-checker')) || (cfg.essentials && cfg.essentials.includes('app-updater'));
  container.classList.toggle('hidden', !isActive);
  if (!isActive) return;

  const spec = STUDIO_CATALOG.subMenus.updateChecker;
  container.innerHTML = `
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs font-semibold text-cyan-200">${escapeHtml(spec.title)}</span>
      <span class="text-[10px] text-slate-400">Works with GitHub Pages repos</span>
    </div>
    <p class="text-[11px] text-slate-400">${escapeHtml(spec.subtitle)}</p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
      ${spec.fields.map((f) => `
        <div>
          <label class="block text-[11px] font-medium text-slate-300 mb-1">${escapeHtml(f.label)}</label>
          <select data-subkey="${escapeHtml(f.key)}" class="sub-gh-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs outline-none focus:border-cyan-500">
            ${f.options.map((o) => `<option value="${escapeHtml(o.id)}" ${sub[f.key] === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
          </select>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.sub-gh-sel').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.subkey] = e.target.value;
      saveStudioConfig();
    });
  });
}

function renderVisualFinishSubMenu(container) {
  if (!container) return;
  const sub = state.studioConfig.subConfig;
  const spec = STUDIO_CATALOG.subMenus.visualFinish;
  container.innerHTML = `
    <div class="flex items-center justify-between gap-2">
      <h4 class="text-xs font-semibold text-slate-100 uppercase tracking-wider">11. ${escapeHtml(spec.title)}</h4>
      <span class="text-[11px] text-slate-400">Fine-tune corners &amp; density — textures have their own section above</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label class="block text-[11px] font-semibold text-slate-300 mb-1">Corner Roundness</label>
        <select data-subkey="cornerRadius" class="sub-vis-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-2 text-slate-200 text-xs outline-none focus:border-indigo-500">
          ${spec.cornerRadius.map((o) => `<option value="${o.id}" ${sub.cornerRadius === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-[11px] font-semibold text-slate-300 mb-1">Spacing Density</label>
        <select data-subkey="visualDensity" class="sub-vis-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-2 text-slate-200 text-xs outline-none focus:border-indigo-500">
          ${spec.density.map((o) => `<option value="${o.id}" ${sub.visualDensity === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
        </select>
      </div>
    </div>
  `;

  container.querySelectorAll('.sub-vis-sel').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.subkey] = e.target.value;
      saveStudioConfig();
      renderLiveVisualSpecimen(el.bpLiveVisualSpecimen);
      renderLiveVisualSpecimen(el.guiderLiveSpecimen);
    });
  });
}

function renderConditionalLibsSubMenus(container) {
  if (!container) return;
  const libs = state.studioConfig.jsLibs || [];
  const sub = state.studioConfig.subConfig;
  const blocks = [];

  if (libs.includes('threejs')) {
    const t = STUDIO_CATALOG.subMenus.libraryTuning.threejs;
    blocks.push(`
      <div class="rounded-xl border border-indigo-500/35 bg-indigo-950/15 p-3.5 space-y-2 submenu-reveal">
        <div class="text-xs font-semibold text-indigo-200">${escapeHtml(t.title)}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">Camera Control Style</label>
            <select data-subkey="threeCamera" class="sub-lib-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs">
              ${t.camera.map((o) => `<option value="${o.id}" ${sub.threeCamera === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">3D Scene Lighting Rig</label>
            <select data-subkey="threeLighting" class="sub-lib-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs">
              ${t.lighting.map((o) => `<option value="${o.id}" ${sub.threeLighting === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>
    `);
  }

  if (libs.includes('chartjs') || libs.includes('d3')) {
    const c = STUDIO_CATALOG.subMenus.libraryTuning.charts;
    blocks.push(`
      <div class="rounded-xl border border-cyan-500/35 bg-cyan-950/15 p-3.5 space-y-2 submenu-reveal">
        <div class="text-xs font-semibold text-cyan-200">${escapeHtml(c.title)}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">Primary Chart Style</label>
            <select data-subkey="chartType" class="sub-lib-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs">
              ${c.chartType.map((o) => `<option value="${o.id}" ${sub.chartType === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">Chart Interactivity</label>
            <select data-subkey="chartInteractivity" class="sub-lib-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs">
              ${c.interactivity.map((o) => `<option value="${o.id}" ${sub.chartInteractivity === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>
    `);
  }

  if (libs.includes('matterjs')) {
    const m = STUDIO_CATALOG.subMenus.libraryTuning.matterjs;
    blocks.push(`
      <div class="rounded-xl border border-emerald-500/35 bg-emerald-950/15 p-3.5 space-y-2 submenu-reveal">
        <div class="text-xs font-semibold text-emerald-200">${escapeHtml(m.title)}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">Gravity Mode</label>
            <select data-subkey="matterGravity" class="sub-lib-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs">
              ${m.gravity.map((o) => `<option value="${o.id}" ${sub.matterGravity === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-[11px] text-slate-300 mb-1">World Boundaries</label>
            <select data-subkey="matterBounds" class="sub-lib-sel w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs">
              ${m.bounds.map((o) => `<option value="${o.id}" ${sub.matterBounds === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>
    `);
  }

  container.innerHTML = blocks.join('');
  container.querySelectorAll('.sub-lib-sel').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.subkey] = e.target.value;
      saveStudioConfig();
    });
  });
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

  renderModeDeepDiveSubMenu(el.bpModeDeepDiveSection);
  renderConditionalAudioSubMenu(el.bpAudioSubSection);
  renderConditionalPersistenceSubMenu(el.bpPersistenceSubSection);
  renderConditionalUpdateSubMenu(el.bpUpdateSubSection);

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
      renderConditionalUpdateSubMenu(el.bpUpdateSubSection);
    }
  );

  renderLiveVisualSpecimen(el.bpLiveVisualSpecimen);
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
  // New visual layers: light behaviour, back-light studio, textures, live backgrounds
  renderVisualGallery(el.lightBehaviourGallery, STUDIO_CATALOG.lightBehaviour, cfg.lightBehaviour, (id) => {
    cfg.lightBehaviour = id;
  });
  renderLightAdvancedSubMenu(el.lightAdvancedSection);
  const onBacklightPick = (id) => {
    cfg.backlightStyle = id;
    saveStudioConfig();
    renderBlueprintSummaryStrip();
    renderBacklightDesignGallery(el.backlightGallery, cfg.backlightStyle, onBacklightPick);
    renderLiveVisualSpecimen(el.bpLiveVisualSpecimen);
  };
  renderBacklightDesignGallery(el.backlightGallery, cfg.backlightStyle, onBacklightPick);
  renderBacklightStudioPanel(el.backlightStudioPanel, {});
  renderTextureGalleryInto(el.textureGallery, cfg.textureStyle, (id) => {
    cfg.textureStyle = id;
  });
  renderLiveBgGalleryInto(el.liveBackgroundGallery, cfg.liveBackground, (id) => {
    cfg.liveBackground = id;
    renderLiveBgTuningSubMenu(el.liveBgSubSection);
  });
  renderLiveBgTuningSubMenu(el.liveBgSubSection);
  renderVisualFinishSubMenu(el.bpVisualFinishSection);

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
  renderConditionalLibsSubMenus(el.bpLibsSubMenusContainer);

  // Game Studio tab — only exists for Game mode
  const isGameMode = cfg.projectType === 'game';
  if (el.gameStudioTabBtn) el.gameStudioTabBtn.classList.toggle('hidden', !isGameMode);
  if (isGameMode) {
    renderGameGrid(el.gameTypeGallery, STUDIO_CATALOG.gameTypes, cfg.gameTypeId, (item) => {
      cfg.gameTypeId = item.id;
      saveStudioConfig();
      renderBlueprintSummaryStrip();
    }, { badgeKey: 'genre', extraKey: 'mechanics', smartFitStep: 'gameType', cols: 'grid-cols-1 sm:grid-cols-2' });
    renderGameGrid(el.gameArtGallery, STUDIO_CATALOG.gameArtStyles, cfg.gameArtStyle, (item) => {
      cfg.gameArtStyle = item.id;
      saveStudioConfig();
      renderBlueprintSummaryStrip();
    }, { badgeKey: 'era', extraKey: 'craft', smartFitStep: 'gameArt', cols: 'grid-cols-1 sm:grid-cols-2' });
    renderGameGrid(el.gameFlowGallery, STUDIO_CATALOG.gameFlows, cfg.gameFlow, (item) => {
      cfg.gameFlow = item.id;
      saveStudioConfig();
      renderBlueprintSummaryStrip();
    }, { extraKey: 'wiring', smartFitStep: 'gameFlow', cols: 'grid-cols-1 sm:grid-cols-2' });
  }
}

// =========================================================================
// PROMPT GUIDER v2 — SMALL, EASY, ONE-QUESTION-AT-A-TIME JOURNEY
// (Each step asks exactly ONE simple question with big tappable answers.
//  Sub-menus unlock inline. Visual steps preview live in the specimen.)
// =========================================================================

// Small icon hints so every non-visual choice still feels tactile.
const GUIDER_ICON_HINTS = {
  localstoragejson: 'hard-drive',
  'localstorage-json': 'hard-drive',
  'indexeddb-heavy': 'database',
  'localstorage-csv': 'table',
  ephemeral: 'eraser',
  'web-audio-subtle': 'volume-1',
  'web-audio-arcade': 'volume-2',
  'haptic-visual': 'vibrate',
  'silent-clean': 'volume-x'
};

function getGuiderJourneySteps() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const deepDiveSpec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType] || STUDIO_CATALOG.subMenus.modeDeepDive.app;

  const steps = [
    { id: 'projectType', short: 'Vision Type', kind: 'type' },
    { id: 'quickIdea', short: 'Your Idea', kind: 'idea' },
    ...deepDiveSpec.fields.map((f, i) => ({
      id: `modeFocus${i}`,
      fieldIndex: i,
      short: `${mode.label} ${i + 1}`,
      kind: 'branch',
      isBranch: true
    })),
    ...(cfg.projectType === 'game' ? [
      { id: 'gameType', short: 'Game Type', kind: 'visual' },
      { id: 'gameArt', short: 'Game Art', kind: 'visual' },
      { id: 'gameFlow', short: 'Game Flow', kind: 'visual' }
    ] : []),
    { id: 'targetPlatform', short: 'Devices', kind: 'pick' },
    { id: 'complexity', short: 'Depth', kind: 'pick' },
    { id: 'navStyle', short: 'Navigation', kind: 'pick' },
    { id: 'starterExp', short: 'First Impression', kind: 'pick' },
    { id: 'dataPersistence', short: 'Saving', kind: 'pick' },
    { id: 'sensoryAudio', short: 'Sound', kind: 'pick' },
    { id: 'a11yMotion', short: 'Motion', kind: 'pick' },
    { id: 'interfaceDesign', short: 'Layout', kind: 'visual' },
    { id: 'designStyle', short: 'Look & Feel', kind: 'visual' },
    { id: 'colorMood', short: 'Colors', kind: 'visual' },
    { id: 'typographyStyle', short: 'Typography', kind: 'visual' },
    { id: 'elementStyle', short: 'Buttons', kind: 'visual' },
    { id: 'lightingStyle', short: 'Lighting', kind: 'visual' },
    { id: 'lightBehaviour', short: 'Light Sources', kind: 'visual' },
    { id: 'backlight', short: 'Back-Light', kind: 'visual' },
    { id: 'textureStyle', short: 'Texture', kind: 'visual' },
    { id: 'liveBackground', short: 'Live BG', kind: 'visual' },
    { id: 'visualFinish', short: 'Surface', kind: 'visual' },
    { id: 'essentials', short: 'Features', kind: 'multi' },
    { id: 'jsLibs', short: 'Add-Ons', kind: 'multi' },
    { id: 'personalNotes', short: 'Personal', kind: 'notes' },
    { id: 'visionReview', short: 'Summary', kind: 'review' }
  ];
  return steps;
}

function getAdaptiveWhyText(stepId) {
  const cfg = state.studioConfig;
  const t = cfg.projectType;
  const mode = STUDIO_CATALOG.projectTypes[t] || STUDIO_CATALOG.projectTypes.app;

  const map = {
    projectType: 'This single choice sets smart defaults across all 50 engineering steps — how buttons behave, how data saves, even which questions come next.',
    quickIdea: 'Two or three rough sentences are plenty. Every option you pick after this gets woven around your words.',
    modeDeepDive: `Because you chose ${mode.label}, this follow-up shapes the core structure of your build.`,
    targetPlatform: t === 'game'
      ? 'Phone games need big thumb zones and zero page-scroll; desktop games unlock precision aiming and WASD.'
      : 'Where people open it decides button sizes, panel arrangement, and whether controls sit near the bottom thumb zone.',
    complexity: 'Depth sets how many features are visible on day one — and how many get tucked behind progressive disclosure.',
    navStyle: 'Navigation is the backbone of every screen. Matching it to how people think prevents "where did that go?" moments.',
    starterExp: 'The first 5 seconds decide whether someone understands your creation or closes the tab.',
    dataPersistence: t === 'game'
      ? 'Saved high scores and unlocked levels bring players back — while a fresh-start mode is great for quick arcade resets.'
      : 'Deciding how work is saved (with easy backups) protects users from ever losing progress.',
    sensoryAudio: 'Built-in Web Audio needs zero sound files, always includes a Mute button, and you can preview tones live below.',
    a11yMotion: 'Motion and readability settings keep the app comfortable for everyone — watch the live speed demo on each card.',
    interfaceDesign: 'Layout decides what feels most important on screen. Pick the skeleton first; style comes right after.',
    designStyle: 'Look & Feel is the personality layer — the Live Specimen updates instantly as you tap.',
    colorMood: 'Color sets emotion before a single word is read. Swatches below show the exact palette you are choosing.',
    typographyStyle: 'Fonts are the voice of the interface — you can see each one rendered live in its card.',
    elementStyle: 'Buttons and cards are what fingers actually touch — weight, corners, and press-feel matter.',
    lightingStyle: 'Lighting adds depth and atmosphere: glows, rims, and shadows that make elements feel physical.',
    lightBehaviour: 'Light sources decide where every shadow falls and how alive the whole app feels — one consistent light is what "designed" looks like.',
    backlight: 'Back-lighting is the soft glow behind toggles and buttons — the Apple-style touch that makes controls feel physical and alive. Tune colors, intensity and physics live below.',
    textureStyle: 'Texture is the material your app is made of — paper, carbon, marble, denim… or pure plain. Each has a completely unique feel; the swatches are the real CSS.',
    liveBackground: 'A live background quietly moves behind everything — floating icons, drifting stars, aurora ribbons. It must stay calm enough to ignore, beautiful enough to notice.',
    gameType: 'The game type locks in the core loop, the controls scheme and the scoring — everything else in the build hangs off this choice.',
    gameArt: 'Classic game art styles carry instant nostalgia or instant personality — pick the era your game should feel born from.',
    gameFlow: 'The game flow decides what happens between rounds — straight to play, level maps, shops, daily challenges. It is the difference between a game and a habit.',
    visualFinish: 'The final surface pass — corner roundness, spacing density, and background texture — polishes the whole feel.',
    essentials: `Hand-pick the ${mode.label} features you want. Leave the rest unchecked to keep the build lean.`,
    jsLibs: 'Add-on libraries give you 3D, physics, charts and more in one click — or leave everything off for a 100% pure, lightweight build.',
    personalNotes: 'A few personal touches (audience, must-haves, avoid-lists) make the 50 steps laser-targeted to you.',
    visionReview: 'Your complete blueprint, ready to review and weave into your prompt. Every choice already guides all 50 steps.'
  };
  return map[stepId] || map.modeDeepDive;
}

function getSmartFitReason(stepId, optionId) {
  const cfg = state.studioConfig;
  const t = cfg.projectType;
  const p = cfg.targetPlatform;

  if (stepId === 'targetPlatform') {
    if (t === 'game' && optionId === 'fullscreen-arcade') return 'Best fit for Games';
    if (t === 'tool' && optionId === 'desktop-pro') return 'Great for Tools';
    if (t === 'app' && optionId === 'responsive-parity') return 'Best all-rounder';
    if (t === 'tool' && optionId === 'tablet-split') return 'Compare & edit';
  }
  if (stepId === 'interfaceDesign') {
    if (t === 'game' && optionId === 'fullscreen-stage') return 'Ideal for Games';
    if (t === 'tool' && optionId === 'split-workbench') return 'Ideal for Tools';
    if (t === 'app' && optionId === 'bento-grid') return 'Ideal for Apps';
    if (t === 'app' && (optionId === 'kanban-lanes' || optionId === 'tabbed-studio')) return 'Great for Apps';
    if (t === 'experimental' && optionId === 'floating-hud') return 'Ideal for Sandboxes';
    if (t === 'experimental' && optionId === 'spatial-canvas') return 'Great for Sandboxes';
    if (p === 'mobile-first-thumb' && (optionId === 'focus-card' || optionId === 'tabbed-studio')) return 'Thumb-friendly';
  }
  if (stepId === 'designStyle') {
    if (t === 'game' && optionId === 'cyberpunk-hud') return 'Matches Game Energy';
    if (t === 'tool' && (optionId === 'swiss-minimal' || optionId === 'obsidian-saas' || optionId === 'mono-ink')) return 'High-Clarity Workbench';
    if (t === 'experimental' && (optionId === 'glassmorphism' || optionId === 'sunset-pop')) return 'Great for Sandboxes';
  }
  if (stepId === 'colorMood') {
    if (cfg.designStyle === 'cyberpunk-hud' && (optionId === 'violet-neon' || optionId === 'grape-soda')) return 'Matches Sci-Fi HUD';
    if ((cfg.designStyle === 'swiss-minimal' || cfg.designStyle === 'warm-paper' || cfg.designStyle === 'nordic-frost') && optionId === 'crisp-daylight') return 'Matches Daylight Style';
    if (cfg.designStyle === 'retro-crt' && optionId === 'matcha-latte') return 'Great on CRT Green';
    if (cfg.designStyle === 'luxury-noir' && optionId === 'amber-charcoal') return 'Noir + Gold';
  }
  if (stepId === 'lightingStyle') {
    if (cfg.designStyle === 'cyberpunk-hud' && optionId === 'neon-bloom') return 'Matches Sci-Fi HUD';
    if ((cfg.designStyle === 'swiss-minimal' || cfg.designStyle === 'nordic-frost' || cfg.designStyle === 'mono-ink') && optionId === 'daylight-flat') return 'Matches Daylight Style';
    if (cfg.designStyle === 'luxury-noir' && optionId === 'spotlight-focus') return 'Luxury Focus';
    if (cfg.designStyle === 'glassmorphism' && (optionId === 'ambient-aura' || optionId === 'dusk-glow')) return 'Suits Glass';
  }
  if (stepId === 'elementStyle') {
    if (cfg.designStyle === 'neubrutalism' && optionId === 'brutal-offset') return 'Matches Pop-Art';
    if (cfg.designStyle === 'glassmorphism' && optionId === 'glass-outline') return 'Suits Glass';
    if (t === 'game' && optionId === 'chamfered-scifi') return 'Great for Games';
  }
  if (stepId === 'textureStyle') {
    if ((cfg.designStyle === 'warm-paper' || cfg.designStyle === 'swiss-minimal') && (optionId === 'tex-paper' || optionId === 'tex-plain')) return 'Matches the Style';
    if (cfg.designStyle === 'cyberpunk-hud' && (optionId === 'tex-circuit' || optionId === 'tex-dotmatrix')) return 'Sci-Fi Material';
    if (cfg.designStyle === 'luxury-noir' && (optionId === 'tex-marble' || optionId === 'tex-leather')) return 'Luxury Material';
    if (cfg.designStyle === 'glassmorphism' && optionId === 'tex-frosted') return 'Frosted Glass';
  }
  if (stepId === 'liveBackground') {
    if (t === 'game' && (optionId === 'livebg-stars' || optionId === 'livebg-flow')) return 'Great for Games';
    if (cfg.designStyle === 'glassmorphism' && optionId === 'livebg-orbs') return 'Suits Glass';
    if (cfg.a11yMotion === 'battery-eco' && optionId !== 'livebg-none') return 'Mind the battery';
  }
  if (stepId === 'backlight') {
    if (cfg.designStyle === 'cyberpunk-hud' && (optionId === 'bl-pill' || optionId === 'bl-state')) return 'HUD Glow';
    if (cfg.designStyle === 'glassmorphism' && (optionId === 'bl-liquid' || optionId === 'bl-ring')) return 'Suits Glass';
    if (cfg.designStyle === 'neubrutalism' && optionId === 'bl-none') return 'Flat is Bold';
  }
  if (stepId === 'lightBehaviour') {
    if (cfg.designStyle === 'luxury-noir' && (optionId === 'light-rim' || optionId === 'light-candle')) return 'Noir Drama';
    if ((cfg.designStyle === 'swiss-minimal' || cfg.designStyle === 'mono-ink') && optionId === 'light-flat') return 'Editorial Flat';
    if (cfg.designStyle === 'glassmorphism' && optionId === 'light-screen') return 'Glass Glow';
  }
  if (stepId === 'gameType') {
    if (cfg.subConfig.gameControls === 'keyboard-classic' && (optionId === 'gt-platformer' || optionId === 'gt-shooter')) return 'Keyboard King';
    if (cfg.targetPlatform === 'mobile-first-thumb' && (optionId === 'gt-flappy' || optionId === 'gt-runner' || optionId === 'gt-merge')) return 'Thumb-Friendly';
    if (cfg.subConfig.gamePacing === 'quick-60s' && (optionId === 'gt-flappy' || optionId === 'gt-breakout')) return 'Blitz Perfect';
  }
  if (stepId === 'gameArt') {
    if (cfg.designStyle === 'cyberpunk-hud' && optionId === 'ga-glitch') return 'Matches Sci-Fi HUD';
    if (cfg.colorMood === 'violet-neon' && optionId === 'ga-neonvector') return 'Neon Pair';
    if (cfg.designStyle === 'retro-crt' && (optionId === 'ga-crt' || optionId === 'ga-pixel8')) return 'CRT Match';
    if (cfg.designStyle === 'warm-paper' && optionId === 'ga-doodle') return 'Sketchbook Pair';
  }
  if (stepId === 'gameFlow') {
    if (cfg.complexity === 'focused-minimal' && optionId === 'gf-straight') return 'Pure Play';
    if (cfg.dataPersistence === 'ephemeral' && optionId === 'gf-arcadehi') return 'No-save Classic';
    if (cfg.starterExp === 'tutorial-first' && optionId === 'gf-tutorial') return 'Matches Onboarding';
  }
  if (stepId === 'complexity') {
    if (t === 'tool' && optionId === 'powerhouse-deep') return 'Deep tools shine';
    if (optionId === 'modular-progressive') return 'Best of both worlds';
  }
  if (stepId === 'navStyle') {
    if (p === 'desktop-pro' && optionId === 'sidebar-rail') return 'Desktop Power';
    if (t === 'game' && optionId === 'single-screen') return 'Zero-distraction play';
  }
  if (stepId === 'starterExp') {
    if (t === 'experimental' && optionId === 'template-picker') return 'Show the magic';
    if (optionId === 'playground-first') return 'Instant hook';
  }
  return '';
}

function openPromptGuider(startStepIdx = 0) {
  state.guiderStepIndex = Math.max(0, startStepIdx);
  el.promptGuiderModal.classList.remove('hidden');
  renderPromptGuider();
  refreshIcons();
}

function updateGuiderVisionCount() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const deepDiveSpec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType] || STUDIO_CATALOG.subMenus.modeDeepDive.app;
  let count = 1 + deepDiveSpec.fields.length + 18; // type + deep dive + fixed picks (incl. light sources, back-light, texture, live bg)
  if (cfg.projectType === 'game') count += 3; // game type / art / flow
  count += cfg.essentials.length > 0 ? 1 : 0;
  count += cfg.jsLibs.length > 0 ? 1 : 0;
  if (cfg.targetAudience?.trim() || cfg.extraConstraints?.trim() || cfg.antiGoals?.trim()) count += 1;
  if (el.guiderVisionCount) el.guiderVisionCount.textContent = `${count} set`;
}

function findGuiderStepIdx(steps, idMatcher) {
  for (let i = 0; i < steps.length; i++) {
    if (typeof idMatcher === 'function' ? idMatcher(steps[i]) : steps[i].id === idMatcher) return i;
  }
  return 0;
}

function renderGuiderVisionSummary() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const iface = findCatalogItem(STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign);
  const style = findCatalogItem(STUDIO_CATALOG.designStyles, cfg.designStyle);
  const mood = findCatalogItem(STUDIO_CATALOG.colorMoods, cfg.colorMood);
  const light = findCatalogItem(STUDIO_CATALOG.lightingStyles, cfg.lightingStyle);
  const plat = findCatalogItem(STUDIO_CATALOG.platformOptions, cfg.targetPlatform);
  const comp = findCatalogItem(STUDIO_CATALOG.complexityOptions, cfg.complexity);
  const typo = findCatalogItem(STUDIO_CATALOG.typographyStyles, cfg.typographyStyle);
  const elem = findCatalogItem(STUDIO_CATALOG.elementStyles, cfg.elementStyle);
  const deepDiveSpec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType] || STUDIO_CATALOG.subMenus.modeDeepDive.app;

  const items = [
    { stepIdx: 0, label: 'Type', val: mode.label },
    ...deepDiveSpec.fields.map((f, i) => ({
      stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), (s) => s.id === `modeFocus${i}`),
      label: f.label.split(':')[0],
      val: (f.options.find((o) => o.id === cfg.subConfig[f.key]) || f.options[0]).label
    })),
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'targetPlatform'), label: 'Devices', val: plat.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'complexity'), label: 'Depth', val: comp.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'dataPersistence'), label: 'Saving', val: cfg.dataPersistence === 'ephemeral' ? 'Fresh Start' : 'Auto-Save + Backup' },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'interfaceDesign'), label: 'Layout', val: iface.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'designStyle'), label: 'Look', val: style.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'colorMood'), label: 'Colors', val: mood.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'typographyStyle'), label: 'Fonts', val: typo.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'elementStyle'), label: 'Controls', val: elem.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'lightingStyle'), label: 'Lighting', val: light.name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'lightBehaviour'), label: 'Light Source', val: findCatalogItem(STUDIO_CATALOG.lightBehaviour, cfg.lightBehaviour).name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'backlight'), label: 'Back-Light', val: `${findCatalogItem(STUDIO_CATALOG.backlightDesigns, cfg.backlightStyle).name} • ${(cfg.backlightConfig && cfg.backlightConfig.colors || []).join(' + ') || 'auto'}` },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'textureStyle'), label: 'Texture', val: findCatalogItem(STUDIO_CATALOG.textureDesigns, cfg.textureStyle).name },
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'liveBackground'), label: 'Live BG', val: findCatalogItem(STUDIO_CATALOG.liveBackgrounds, cfg.liveBackground).name },
    ...(cfg.projectType === 'game' ? [
      { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'gameType'), label: 'Game Type', val: findCatalogItem(STUDIO_CATALOG.gameTypes, cfg.gameTypeId).name },
      { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'gameArt'), label: 'Game Art', val: findCatalogItem(STUDIO_CATALOG.gameArtStyles, cfg.gameArtStyle).name },
      { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'gameFlow'), label: 'Game Flow', val: findCatalogItem(STUDIO_CATALOG.gameFlows, cfg.gameFlow).name }
    ] : []),
    { stepIdx: findGuiderStepIdx(getGuiderJourneySteps(), 'essentials'), label: 'Features', val: `${cfg.essentials.length} active • ${cfg.jsLibs.length || 'Pure'} libs` }
  ];

  if (el.guiderVisionCount) {
    el.guiderVisionCount.textContent = `${items.length} set`;
  }
  if (!el.guiderVisionSummary) return;
  el.guiderVisionSummary.innerHTML = items.map((it) => `
    <button type="button" data-jump-step="${it.stepIdx}" class="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-[#0d131f] hover:bg-slate-800/80 border border-slate-800/80 text-left transition">
      <span class="text-slate-400 shrink-0">${escapeHtml(it.label)}</span>
      <span class="text-slate-100 font-medium truncate">${escapeHtml(it.val)}</span>
    </button>
  `).join('');

  el.guiderVisionSummary.querySelectorAll('[data-jump-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.guiderStepIndex = Number(btn.dataset.jumpStep);
      renderPromptGuider();
    });
  });
}

// ---------- shared option-card builders ----------

function buildGuiderVisualGrid(container, items, selectedId, onPick, opts = {}) {
  const grid = document.createElement('div');
  const cols = opts.cols || 'grid-cols-2 sm:grid-cols-3';
  grid.className = `grid ${cols} gap-2.5`;
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const smartFit = opts.smartFitStep ? getSmartFitReason(opts.smartFitStep, item.id) : '';
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
    card.innerHTML = `
      ${item.svg ? `<div class="visual-ref-preview">${item.svg}</div>` : ''}
      ${item.colors ? `<div class="flex items-center gap-1 mb-1.5">${item.colors.map((c) => `<span class="h-4 flex-1 rounded-sm border border-white/10" style="background:${c}"></span>`).join('')}</div>` : ''}
      ${item.sampleFont ? `<div class="bp-font-specimen mb-1.5" style="font-family:${item.sampleFont};"><span class="bp-font-specimen-lg">Ag</span><span class="bp-font-specimen-sm">The quick brown fox</span></div>` : ''}
      <div class="flex items-center justify-between gap-1.5 flex-wrap">
        <span class="text-xs font-bold text-slate-100">${escapeHtml(item.name)}</span>
        ${smartFit ? `<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/35">${escapeHtml(smartFit)}</span>` : ''}
      </div>
      <p class="text-[11px] text-slate-400 mt-1 leading-snug">${escapeHtml(item.desc || '')}</p>
      ${opts.showDetail && item.bestFor ? `<div class="mt-1.5 pt-1.5 border-t border-slate-800/80 text-[10px] text-slate-400"><strong class="text-cyan-300">Best for:</strong> ${escapeHtml(item.bestFor)}</div>` : ''}
    `;
    card.addEventListener('click', () => onPick(item));
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

function buildGuiderIconGrid(container, items, selectedId, onPick) {
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2.5';
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const icon = item.icon || GUIDER_ICON_HINTS[item.id] || 'circle';
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `guider-option-card is-icon-card${isSel ? ' is-selected' : ''}`;
    card.innerHTML = `
      <div class="flex items-start gap-3">
        <span class="guider-icon-chip ${isSel ? 'is-on' : ''}"><i data-lucide="${escapeHtml(icon)}" class="w-4 h-4"></i></span>
        <div class="min-w-0">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-bold text-slate-100">${escapeHtml(item.name)}</span>
            ${isSel ? '<span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0"></span>' : ''}
          </div>
          <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">${escapeHtml(item.desc)}</p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => onPick(item));
    grid.appendChild(card);
  });
  container.appendChild(grid);
  refreshIcons();
}

// ---------- main guider renderer ----------

function renderPromptGuider() {
  const steps = getGuiderJourneySteps();
  if (state.guiderStepIndex >= steps.length) state.guiderStepIndex = steps.length - 1;
  if (state.guiderStepIndex < 0) state.guiderStepIndex = 0;

  const currentStep = steps[state.guiderStepIndex];
  const cfg = state.studioConfig;
  const sub = cfg.subConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;

  // Header & progress
  el.guiderStepCounterBadge.textContent = `Step ${state.guiderStepIndex + 1} of ${steps.length}`;
  el.guiderModeBadge.textContent = mode.label.toUpperCase();
  el.guiderProgressBar.style.width = `${Math.round(((state.guiderStepIndex + 1) / steps.length) * 100)}%`;

  el.guiderBranchBadge.classList.toggle('hidden', !currentStep.isBranch);
  if (currentStep.isBranch) {
    el.guiderBranchBadgeText.textContent = `Adaptive follow-up unlocked by ${mode.label}`;
  }

  // Segmented progress (compact dots instead of the old heavy breadcrumb row)
  el.guiderStepPills.innerHTML =
    steps.map((s, idx) => {
      const cls = idx === state.guiderStepIndex ? 'is-current' : idx < state.guiderStepIndex ? 'is-done' : '';
      return `<button type="button" data-seg-idx="${idx}" title="${escapeHtml(s.short)}" class="guider-seg ${cls}"></button>`;
    }).join('') +
    `<span class="guider-seg-label">${escapeHtml(currentStep.short)}</span>`;

  el.guiderStepPills.querySelectorAll('[data-seg-idx]').forEach((b) => {
    b.addEventListener('click', () => {
      state.guiderStepIndex = Number(b.dataset.segIdx);
      renderPromptGuider();
    });
  });

  // Footer
  el.guiderBackBtn.disabled = state.guiderStepIndex === 0;
  el.guiderNextBtnLabel.textContent = state.guiderStepIndex === steps.length - 1 ? 'Finish & Apply' : 'Next';
  el.guiderWhyText.textContent = getAdaptiveWhyText(currentStep.kind === 'branch' ? 'modeDeepDive' : currentStep.id);
  el.guiderWhyBox.classList.add('hidden');

  // Stage containers
  el.guiderOptionsArea.innerHTML = '';
  el.guiderInlineSubMenu.innerHTML = '';
  el.guiderInlineSubMenu.classList.add('hidden');

  // Sidebar visibility: specimen only on visual steps; vision panel only on the summary step.
  // The aside itself collapses on all other steps so the stage owns the full width.
  const hasAside = currentStep.kind === 'visual' || currentStep.kind === 'review';
  if (el.guiderSpecimenWrap) el.guiderSpecimenWrap.classList.toggle('hidden', currentStep.kind !== 'visual');
  if (el.guiderVisionWrap) el.guiderVisionWrap.classList.toggle('hidden', currentStep.kind !== 'review');
  if (el.guiderAside) el.guiderAside.classList.toggle('hidden', !hasAside);
  if (el.guiderStageWrap) {
    el.guiderStageWrap.className = hasAside
      ? 'lg:col-span-6 space-y-4'
      : 'lg:col-span-10 space-y-4 max-w-3xl mx-auto';
  }

  updateGuiderVisionCount();
  if (currentStep.kind === 'visual') renderLiveVisualSpecimen(el.guiderLiveSpecimen);
  if (currentStep.kind === 'review') renderGuiderVisionSummary();

  const sid = currentStep.id;
  const afterPick = () => {
    saveStudioConfig();
    renderBlueprintSummaryStrip();
    renderPromptGuider();
  };

  if (sid === 'projectType') {
    el.guiderQuestionTitle.textContent = 'What kind of creation are we building?';
    el.guiderQuestionSubtitle.textContent = 'One quick pick — every question after this instantly adapts to your choice.';
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3';
    Object.values(STUDIO_CATALOG.projectTypes).forEach((pt) => {
      const isSel = cfg.projectType === pt.id;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
      card.innerHTML = `
        <div class="visual-ref-preview">${pt.svg}</div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-slate-100">${escapeHtml(pt.label)}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-200 border border-indigo-500/30">${escapeHtml(pt.shortTag)}</span>
        </div>
        <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">${escapeHtml(pt.roleLens)}</p>
      `;
      card.addEventListener('click', () => {
        setProjectType(pt.id, true);
        state.guiderStepIndex = Math.min(state.guiderStepIndex, getGuiderJourneySteps().length - 1);
        renderPromptGuider();
      });
      grid.appendChild(card);
    });
    el.guiderOptionsArea.appendChild(grid);
  } else if (sid === 'quickIdea') {
    el.guiderQuestionTitle.textContent = 'Got the idea? Drop it in — even rough.';
    el.guiderQuestionSubtitle.textContent = 'This feeds your main prompt box directly. Not ready? Skip ahead and come back anytime.';
    const wrap = document.createElement('div');
    wrap.className = 'space-y-3';
    wrap.innerHTML = `
      <textarea id="guiderIdeaInput" rows="4" placeholder="e.g., A cozy little tracker where I check off my plants each day and they grow on screen..." class="w-full bg-[#0d131f] border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"></textarea>
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-[11px] text-slate-500">Need a spark?</span>
        <div class="flex items-center gap-1.5 flex-wrap" id="guiderIdeaSamples"></div>
      </div>
      <div class="rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/15 px-3.5 py-2.5 text-[11px] text-slate-300 flex items-start gap-2">
        <i data-lucide="wand-2" class="w-4 h-4 text-fuchsia-300 shrink-0 mt-0.5"></i>
        <span>Want the app to pull the idea out of you question-by-question? Use the <strong class="text-fuchsia-200">Improve Prompt</strong> tool from the prompt box (wand button) — it interviews you 10, 30, or 50 questions deep.</span>
      </div>
    `;
    el.guiderOptionsArea.appendChild(wrap);
    const ideaInput = wrap.querySelector('#guiderIdeaInput');
    ideaInput.value = el.promptInput.value;
    ideaInput.addEventListener('input', () => {
      el.promptInput.value = ideaInput.value;
      state.userPrompt = ideaInput.value;
      saveWorkspaceSnapshot();
    });
    const samplesWrap = wrap.querySelector('#guiderIdeaSamples');
    mode.samplePrompts.forEach((sp) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'px-2 py-1 rounded bg-slate-800/90 hover:bg-slate-700 border border-slate-700/70 text-[11px] text-slate-300 transition';
      b.textContent = sp.label;
      b.addEventListener('click', () => {
        if (state.isRunning) return;
        ideaInput.value = sp.prompt;
        el.promptInput.value = sp.prompt;
        state.userPrompt = sp.prompt;
        saveWorkspaceSnapshot();
      });
      samplesWrap.appendChild(b);
    });
    refreshIcons();
  } else if (sid.startsWith('modeFocus')) {
    const spec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType] || STUDIO_CATALOG.subMenus.modeDeepDive.app;
    const f = spec.fields[currentStep.fieldIndex];
    el.guiderQuestionTitle.textContent = f.label;
    el.guiderQuestionSubtitle.textContent = `A ${mode.label}-specific question — your choice here shapes the core structure.`;
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2.5';
    f.options.forEach((opt) => {
      const isSel = sub[f.key] === opt.id;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `guider-option-card is-icon-card${isSel ? ' is-selected' : ''}`;
      card.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-bold text-slate-100">${escapeHtml(opt.label)}</span>
          ${isSel ? '<span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0"></span>' : ''}
        </div>
      `;
      card.addEventListener('click', () => {
        sub[f.key] = opt.id;
        afterPick();
      });
      grid.appendChild(card);
    });
    el.guiderOptionsArea.appendChild(grid);
  } else if (sid === 'gameType') {
    el.guiderQuestionTitle.textContent = 'What kind of game is this?';
    el.guiderQuestionSubtitle.textContent = 'The game type locks in the core loop, controls and scoring — every step of the build adapts.';
    renderGameGrid(el.guiderOptionsArea, STUDIO_CATALOG.gameTypes, cfg.gameTypeId, (item) => {
      cfg.gameTypeId = item.id;
      afterPick();
    }, { badgeKey: 'genre', extraKey: 'mechanics', smartFitStep: 'gameType', cols: 'grid-cols-1 sm:grid-cols-2' });
  } else if (sid === 'gameArt') {
    el.guiderQuestionTitle.textContent = 'Which classic game art should it wear?';
    el.guiderQuestionSubtitle.textContent = 'Each art style is a complete craft recipe — pixels, palettes, shading and sound character included.';
    renderGameGrid(el.guiderOptionsArea, STUDIO_CATALOG.gameArtStyles, cfg.gameArtStyle, (item) => {
      cfg.gameArtStyle = item.id;
      afterPick();
    }, { badgeKey: 'era', extraKey: 'craft', smartFitStep: 'gameArt', cols: 'grid-cols-1 sm:grid-cols-2' });
  } else if (sid === 'gameFlow') {
    el.guiderQuestionTitle.textContent = 'How should the game flow around each round?';
    el.guiderQuestionSubtitle.textContent = 'Menus, level maps, shops and daily challenges — the meta loop that keeps players returning.';
    renderGameGrid(el.guiderOptionsArea, STUDIO_CATALOG.gameFlows, cfg.gameFlow, (item) => {
      cfg.gameFlow = item.id;
      afterPick();
    }, { extraKey: 'wiring', smartFitStep: 'gameFlow', cols: 'grid-cols-1 sm:grid-cols-2' });
  } else if (sid === 'targetPlatform') {
    el.guiderQuestionTitle.textContent = `Where will people use your ${mode.label}?`;
    el.guiderQuestionSubtitle.textContent = 'Sets screen proportions, touch-target sizes, and how panels arrange.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.platformOptions, cfg.targetPlatform, (item) => {
      cfg.targetPlatform = item.id;
      afterPick();
    }, { smartFitStep: 'targetPlatform', cols: 'grid-cols-1 sm:grid-cols-2', showDetail: true });
  } else if (sid === 'complexity') {
    el.guiderQuestionTitle.textContent = 'How deep should it feel?';
    el.guiderQuestionSubtitle.textContent = 'From one simple job to a full powerhouse — you can change this anytime.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.complexityOptions, cfg.complexity, (item) => {
      cfg.complexity = item.id;
      afterPick();
    }, { smartFitStep: 'complexity' });
  } else if (sid === 'navStyle') {
    el.guiderQuestionTitle.textContent = 'How do users move around?';
    el.guiderQuestionSubtitle.textContent = 'Pick the navigation skeleton that matches how people will think.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.navStyleOptions, cfg.navStyle, (item) => {
      cfg.navStyle = item.id;
      afterPick();
    }, { smartFitStep: 'navStyle' });
  } else if (sid === 'starterExp') {
    el.guiderQuestionTitle.textContent = `What happens in the first 5 seconds of your ${mode.label.toLowerCase()}?`;
    el.guiderQuestionSubtitle.textContent = 'Great creations never leave anyone wondering "what do I click first?"';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.starterExpOptions, cfg.starterExp, (item) => {
      cfg.starterExp = item.id;
      afterPick();
    }, { smartFitStep: 'starterExp' });
  } else if (sid === 'dataPersistence') {
    el.guiderQuestionTitle.textContent = 'How should work or progress be saved?';
    el.guiderQuestionSubtitle.textContent = 'Picking any save option unlocks a Save & Backup sub-menu below.';
    const persistChoices = [
      { id: 'localstorage-json', icon: 'hard-drive', name: 'Auto-Save + JSON Backup', desc: 'Instant browser memory with 1-click download/restore. Ideal for most apps & games.' },
      { id: 'indexeddb-heavy', icon: 'database', name: 'Large Browser Database', desc: 'Handles thousands of items, big drawings, or rich history without slowing down.' },
      { id: 'localstorage-csv', icon: 'table', name: 'Auto-Save + Spreadsheet Export', desc: 'Saves automatically and exports clean tables to Excel or Google Sheets.' },
      { id: 'ephemeral', icon: 'eraser', name: 'Fresh Start Every Visit', desc: 'Clean slate each open — great for quick calculators or arcade blitzes.' }
    ];
    buildGuiderIconGrid(el.guiderOptionsArea, persistChoices, cfg.dataPersistence, (item) => {
      cfg.dataPersistence = item.id;
      afterPick();
    });
    if (cfg.dataPersistence !== 'ephemeral') {
      el.guiderInlineSubMenu.classList.remove('hidden');
      renderConditionalPersistenceSubMenu(el.guiderInlineSubMenu);
    }
  } else if (sid === 'sensoryAudio') {
    el.guiderQuestionTitle.textContent = 'Should it make sound?';
    el.guiderQuestionSubtitle.textContent = 'Built-in sound needs zero audio files and always ships with a Mute button. Tap a card to hear a preview!';
    const audioChoices = [
      { id: 'web-audio-subtle', icon: 'volume-1', name: 'Gentle Clicks & Chimes', desc: 'Soft, pleasant feedback on key actions with an easy Mute toggle.' },
      { id: 'web-audio-arcade', icon: 'volume-2', name: 'Rich Arcade SFX & Synth', desc: 'Expressive synthesized effects, combo swells & celebrations.' },
      { id: 'haptic-visual', icon: 'vibrate', name: 'Vibration & Visual Flash', desc: 'Silent — phone vibration and crisp visual pulses instead.' },
      { id: 'silent-clean', icon: 'volume-x', name: 'Completely Silent', desc: 'Purely visual feedback — zero sound generation.' }
    ];
    buildGuiderIconGrid(el.guiderOptionsArea, audioChoices, cfg.sensoryAudio, (item) => {
      cfg.sensoryAudio = item.id;
      if (item.id === 'web-audio-subtle' || item.id === 'web-audio-arcade') {
        playPreviewTone(sub.audioCharacter || 'warm-marimba');
      }
      afterPick();
    });
    if (cfg.sensoryAudio === 'web-audio-subtle' || cfg.sensoryAudio === 'web-audio-arcade') {
      el.guiderInlineSubMenu.classList.remove('hidden');
      renderConditionalAudioSubMenu(el.guiderInlineSubMenu);
    }
  } else if (sid === 'a11yMotion') {
    el.guiderQuestionTitle.textContent = 'How should it move — and who needs extra care?';
    el.guiderQuestionSubtitle.textContent = 'Each card shows its motion speed live. All options keep text readable and motion optional.';
    const motionChoices = [
      { id: 'wcag-aa-fluid', cls: 'is-fluid', name: 'Smooth & Accessible', desc: 'Fluid animations that calm down automatically if the user prefers reduced motion.' },
      { id: 'high-refresh-120', cls: 'is-120', name: 'Ultra-Smooth 120fps', desc: 'Snappy high-refresh motion ideal for games and reactive canvases.' },
      { id: 'battery-eco', cls: 'is-eco', name: 'Battery Saver Crisp', desc: 'Instant transitions with minimal GPU work to save device battery.' },
      { id: 'wcag-aaa-high', cls: 'is-calm', name: 'Extra High Contrast', desc: 'Maximum readability, strong focus rings & screen-reader priority.' }
    ];
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2.5';
    motionChoices.forEach((opt) => {
      const isSel = cfg.a11yMotion === opt.id;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
      card.innerHTML = `
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <span class="text-xs font-bold text-slate-100">${escapeHtml(opt.name)}</span>
          <div class="w-20 h-3 rounded-full bg-slate-900 border border-slate-700 p-0.5 flex items-center overflow-hidden">
            <span class="w-2 h-2 rounded-full bg-cyan-400 motion-demo-ball ${opt.cls}"></span>
          </div>
        </div>
        <p class="text-[11px] text-slate-400">${escapeHtml(opt.desc)}</p>
      `;
      card.addEventListener('click', () => {
        cfg.a11yMotion = opt.id;
        afterPick();
      });
      grid.appendChild(card);
    });
    el.guiderOptionsArea.appendChild(grid);
  } else if (sid === 'interfaceDesign') {
    el.guiderQuestionTitle.textContent = 'Pick your screen layout.';
    el.guiderQuestionSubtitle.textContent = 'The skeleton first — style comes next. Watch the Live Speciment update as you tap.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign, (item) => {
      cfg.interfaceDesign = item.id;
      afterPick();
    }, { smartFitStep: 'interfaceDesign' });
  } else if (sid === 'designStyle') {
    el.guiderQuestionTitle.textContent = 'Choose the overall look & feel.';
    el.guiderQuestionSubtitle.textContent = 'This is the personality of your creation — the specimen mirrors every pick.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.designStyles, cfg.designStyle, (item) => {
      cfg.designStyle = item.id;
      afterPick();
    }, { smartFitStep: 'designStyle', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' });
  } else if (sid === 'colorMood') {
    el.guiderQuestionTitle.textContent = 'Pick your color palette.';
    el.guiderQuestionSubtitle.textContent = 'Swatches show the exact colors. Smart-fit badges hint at combos that just work.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.colorMoods, cfg.colorMood, (item) => {
      cfg.colorMood = item.id;
      afterPick();
    }, { smartFitStep: 'colorMood', cols: 'grid-cols-2 sm:grid-cols-3' });
  } else if (sid === 'typographyStyle') {
    el.guiderQuestionTitle.textContent = 'Pick the typography voice.';
    el.guiderQuestionSubtitle.textContent = 'Every card is rendered in its actual font — what you see is what you get.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.typographyStyles, cfg.typographyStyle, (item) => {
      cfg.typographyStyle = item.id;
      afterPick();
    }, { cols: 'grid-cols-2' });
  } else if (sid === 'elementStyle') {
    el.guiderQuestionTitle.textContent = 'How should buttons & cards feel?';
    el.guiderQuestionSubtitle.textContent = 'Weight, corners, and press-feel for the things fingers actually touch.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.elementStyles, cfg.elementStyle, (item) => {
      cfg.elementStyle = item.id;
      afterPick();
    }, { smartFitStep: 'elementStyle' });
  } else if (sid === 'lightingStyle') {
    el.guiderQuestionTitle.textContent = 'Choose the lighting & depth.';
    el.guiderQuestionSubtitle.textContent = 'Glows, rims, shadows — the atmosphere layer that makes UI feel physical.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.lightingStyles, cfg.lightingStyle, (item) => {
      cfg.lightingStyle = item.id;
      afterPick();
    }, { smartFitStep: 'lightingStyle' });
  } else if (sid === 'lightBehaviour') {
    el.guiderQuestionTitle.textContent = 'Where does the light come from?';
    el.guiderQuestionSubtitle.textContent = 'One honest light source makes every shadow agree — that is what "designed" feels like. Advanced tuning unlocks below.';
    buildGuiderVisualGrid(el.guiderOptionsArea, STUDIO_CATALOG.lightBehaviour, cfg.lightBehaviour, (item) => {
      cfg.lightBehaviour = item.id;
      afterPick();
    }, { smartFitStep: 'lightBehaviour', cols: 'grid-cols-2 sm:grid-cols-3' });
    el.guiderInlineSubMenu.classList.remove('hidden');
    renderLightAdvancedSubMenu(el.guiderInlineSubMenu);
  } else if (sid === 'backlight') {
    el.guiderQuestionTitle.textContent = 'Back-lighting — the glow behind controls.';
    el.guiderQuestionSubtitle.textContent = 'Apple-style toggle halos and friends. Pick a design, then open the Back-Light Studio below to tune colours, intensity, physics and per-element treatment.';
    renderBacklightDesignGallery(el.guiderOptionsArea, cfg.backlightStyle, (id) => {
      cfg.backlightStyle = id;
      afterPick();
    });
    const blStudioWrap = document.createElement('div');
    blStudioWrap.className = 'rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/10 p-3.5 space-y-3 submenu-reveal';
    blStudioWrap.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <h4 class="text-xs font-semibold text-fuchsia-100">${escapeHtml(STUDIO_CATALOG.subMenus.backlightEngine.title)}</h4>
        <span class="text-[10px] font-mono-code text-cyan-300">interactive</span>
      </div>
      <div class="text-[10px] text-slate-400">${escapeHtml(STUDIO_CATALOG.subMenus.backlightEngine.subtitle)}</div>
      <div data-bl-studio-host></div>
    `;
    el.guiderOptionsArea.appendChild(blStudioWrap);
    renderBacklightStudioPanel(blStudioWrap.querySelector('[data-bl-studio-host]'), {});
  } else if (sid === 'textureStyle') {
    el.guiderQuestionTitle.textContent = 'What material is it made of?';
    el.guiderQuestionSubtitle.textContent = 'Every texture is a completely unique feel — and every swatch below is the REAL CSS recipe the build will use. Or keep it pure plain.';
    renderTextureGalleryInto(el.guiderOptionsArea, cfg.textureStyle, (id) => {
      cfg.textureStyle = id;
      afterPick();
    });
    el.guiderInlineSubMenu.classList.remove('hidden');
    renderTextureTuningSubMenu(el.guiderInlineSubMenu);
  } else if (sid === 'liveBackground') {
    el.guiderQuestionTitle.textContent = 'Should the background come alive?';
    el.guiderQuestionSubtitle.textContent = 'Each card is a live animated preview. Living backgrounds must stay calm enough to ignore and beautiful enough to notice.';
    renderLiveBgGalleryInto(el.guiderOptionsArea, cfg.liveBackground, (id) => {
      cfg.liveBackground = id;
      renderLiveBgTuningSubMenu(el.guiderInlineSubMenu);
      afterPick();
    });
    el.guiderInlineSubMenu.classList.remove('hidden');
    renderLiveBgTuningSubMenu(el.guiderInlineSubMenu);
  } else if (sid === 'visualFinish') {
    el.guiderQuestionTitle.textContent = 'Final surface tuning.';
    el.guiderQuestionSubtitle.textContent = 'Corner roundness, spacing density, and background texture — the last 10% of polish.';
    el.guiderInlineSubMenu.classList.remove('hidden');
    renderVisualFinishSubMenu(el.guiderInlineSubMenu);
  } else if (sid === 'essentials') {
    el.guiderQuestionTitle.textContent = `Which ${mode.label} features do you want?`;
    el.guiderQuestionSubtitle.textContent = 'Tap to toggle. Choosing the GitHub Update Checker unlocks its tuning menu below.';
    const g = document.createElement('div');
    g.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2';
    el.guiderOptionsArea.appendChild(g);
    const updateDiv = document.createElement('div');
    updateDiv.id = 'guiderUpdateSub';
    updateDiv.className = 'pt-1';
    renderMultiToggleGrid(g, mode.categoryEssentials, cfg.essentials, null, (id) => {
      toggleArrayItem(cfg.essentials, id);
      updateGuiderVisionCount();
      renderConditionalUpdateSubMenu(updateDiv);
    });
    el.guiderOptionsArea.appendChild(updateDiv);
    renderConditionalUpdateSubMenu(updateDiv);
  } else if (sid === 'jsLibs') {
    el.guiderQuestionTitle.textContent = 'Any add-on power-ups?';
    el.guiderQuestionSubtitle.textContent = 'Leave empty for a 100% pure, zero-dependency build — or add 3D, physics, charts & more.';
    const g = document.createElement('div');
    g.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2';
    el.guiderOptionsArea.appendChild(g);
    renderMultiToggleGrid(g, STUDIO_CATALOG.jsLibsOptions, cfg.jsLibs, null, (id) => {
      toggleArrayItem(cfg.jsLibs, id);
      renderGuiderLibSubs();
    }, cfg.projectType);
    const libSubDiv = document.createElement('div');
    libSubDiv.id = 'guiderLibSubs';
    libSubDiv.className = 'space-y-3';
    el.guiderOptionsArea.appendChild(libSubDiv);
    renderGuiderLibSubs();
  } else if (sid === 'personalNotes') {
    el.guiderQuestionTitle.textContent = 'Any personal touches?';
    el.guiderQuestionSubtitle.textContent = 'Optional — but a line here sharpens every one of the 50 build steps.';
    const wrap = document.createElement('div');
    wrap.className = 'space-y-3 max-w-2xl';
    wrap.innerHTML = `
      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">Who is this made for?</label>
        <input id="gTargetAudience" type="text" value="${escapeHtml(cfg.targetAudience || '')}" placeholder="e.g., Busy parents, students, casual puzzle fans..." class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">Must-have details?</label>
        <input id="gExtraConstraints" type="text" value="${escapeHtml(cfg.extraConstraints || '')}" placeholder="e.g., Must work offline, print-friendly, keyboard shortcuts..." class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">Things to avoid?</label>
        <input id="gAntiGoals" type="text" value="${escapeHtml(cfg.antiGoals || '')}" placeholder="e.g., No cluttered menus, no harsh neon, no tiny text..." class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500" />
      </div>
    `;
    el.guiderOptionsArea.appendChild(wrap);
    wrap.querySelector('#gTargetAudience').addEventListener('input', (e) => {
      cfg.targetAudience = e.target.value;
      saveStudioConfig();
      updateGuiderVisionCount();
    });
    wrap.querySelector('#gExtraConstraints').addEventListener('input', (e) => {
      cfg.extraConstraints = e.target.value;
      saveStudioConfig();
    });
    wrap.querySelector('#gAntiGoals').addEventListener('input', (e) => {
      cfg.antiGoals = e.target.value;
      saveStudioConfig();
    });
  } else if (sid === 'visionReview') {
    el.guiderQuestionTitle.textContent = 'Your complete vision — ready to build.';
    el.guiderQuestionSubtitle.textContent = 'Tap any row to jump back and change it. Then weave it into your prompt or just finish.';

    const combo = buildComboInsights(cfg);
    const comboBox = document.createElement('div');
    comboBox.className = 'rounded-xl border border-amber-500/30 bg-amber-950/15 p-3.5 space-y-1.5';
    comboBox.innerHTML = `
      <div class="text-[11px] font-semibold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
        <i data-lucide="zap" class="w-3.5 h-3.5"></i> Smart Combo Insights
      </div>
      ${combo.length ? combo.map((tip) => `<div class="text-[11px] text-slate-300 leading-relaxed flex gap-1.5"><span class="text-amber-300 shrink-0">•</span><span>${escapeHtml(tip)}</span></div>`).join('') : '<div class="text-[11px] text-slate-400">Your current combination is clean — no conflicts or special tweaks needed.</div>'}
    `;
    el.guiderOptionsArea.appendChild(comboBox);
    refreshIcons();
  }

  refreshIcons();
}

if (el.guiderWhyToggle && el.guiderWhyBox) {
  el.guiderWhyToggle.addEventListener('click', () => {
    el.guiderWhyBox.classList.toggle('hidden');
  });
}

function renderGuiderLibSubs() {
  const libSubDiv = document.getElementById('guiderLibSubs');
  if (!libSubDiv) return;
  const cfg = state.studioConfig;
  const hasLibSub = cfg.jsLibs.some((l) => ['threejs', 'chartjs', 'd3', 'matterjs'].includes(l));
  libSubDiv.innerHTML = '';
  if (hasLibSub) {
    const inner = document.createElement('div');
    inner.className = 'rounded-xl border border-cyan-500/35 bg-cyan-950/15 p-3.5 space-y-3 submenu-reveal';
    libSubDiv.appendChild(inner);
    renderConditionalLibsSubMenus(inner);
  }
}

// =========================================================================
// SMART COMBINATION INSIGHTS — how your options adapt & interact together
// =========================================================================
function buildComboInsights(cfg) {
  const tips = [];
  const has = (arr, id) => Array.isArray(arr) && arr.includes(id);

  if (cfg.targetPlatform === 'mobile-first-thumb' && cfg.complexity === 'powerhouse-deep') {
    tips.push('Phone-first + Powerhouse: hide advanced controls inside collapsible drawers so the base screen stays thumb-simple while power features stay one tap deep.');
  }
  if (cfg.targetPlatform === 'kiosk-display' && cfg.complexity === 'powerhouse-deep') {
    tips.push('Kiosk + Powerhouse: split deep features into simple sequential steps — big screens reward focused flows, not dense dashboards.');
  }
  if (cfg.dataPersistence === 'indexeddb-heavy' && has(cfg.jsArch, 'virtualized-lists')) {
    tips.push('IndexedDB + Virtualized lists: load records page-by-page on demand so even 10,000 items open instantly.');
  }
  if (cfg.sensoryAudio === 'web-audio-arcade' && cfg.a11yMotion === 'battery-eco') {
    tips.push('Arcade audio + battery-eco motion: keep visuals calm while audio carries the energy — and always respect the Mute toggle.');
  }
  if (cfg.designStyle === 'glassmorphism' && (cfg.targetPlatform === 'mobile-first-thumb' || cfg.a11yMotion === 'battery-eco')) {
    tips.push('Frosted glass on low-power targets: cap backdrop-blur layers and provide a solid-color fallback so scrolling stays smooth.');
  }
  if (cfg.starterExp === 'clean-blank' && cfg.complexity === 'focused-minimal') {
    tips.push('Blank canvas + minimal build: make the empty state the hero — one inviting centered CTA that explains everything.');
  }
  if (cfg.starterExp === 'bring-your-own' && cfg.dataPersistence === 'ephemeral') {
    tips.push('Import-on-first-run + no saving: offer a one-tap export before exit so imported data is never silently lost.');
  }
  if (has(cfg.essentials, 'app-updater') || has(cfg.jsArch, 'app-update-checker')) {
    tips.push('GitHub updater: display the current version in a footer chip and cache-bust version checks (?t=timestamp) — GitHub Pages aggressively caches.');
  }
  if (cfg.colorMood === 'crisp-daylight' && (cfg.designStyle === 'obsidian-saas' || cfg.designStyle === 'cyberpunk-hud')) {
    tips.push('Daylight palette vs dark style: pick the dominant direction — either brighten the style or darken the palette — so contrast never suffers.');
  }
  if (cfg.navStyle === 'floating-dock' && (cfg.targetPlatform === 'desktop-pro' || cfg.targetPlatform === 'tablet-split')) {
    tips.push('Floating dock on large screens: let the dock detach or auto-hide so it never covers content on wide panels.');
  }
  if (has(cfg.jsLibs, 'threejs') && (cfg.targetPlatform === 'mobile-first-thumb' || cfg.a11yMotion === 'battery-eco')) {
    tips.push('3D on phones/eco mode: keep polygon counts small, cap devicePixelRatio at 2, and pause rendering when the tab hides.');
  }
  if (cfg.a11yMotion === 'wcag-aaa-high' && (cfg.designStyle === 'cyberpunk-hud' || cfg.lightingStyle === 'neon-bloom')) {
    tips.push('High contrast + neon glow: boost text contrast well above WCAG AA and keep glows behind content, never behind text.');
  }
  if (cfg.complexity === 'focused-minimal' && (has(cfg.essentials, 'undo-redo') === false)) {
    tips.push('Minimal build tip: even the simplest tool deserves a reliable Undo — safety nets build trust.');
  }
  if (cfg.starterExp === 'playground-first' && cfg.projectType === 'game') {
    tips.push('Playground-first for games: make the mini playground skippable and instantly hand over to the first real round.');
  }
  if (has(cfg.essentials, 'share-link-state') && cfg.dataPersistence === 'localstorage-json') {
    tips.push('Shareable state links: keep URLs under ~2,000 characters by trimming to essentials — long links break in some chat apps.');
  }
  if (cfg.sensoryAudio === 'haptic-visual' && !has(cfg.html5, 'vibration-haptics')) {
    tips.push('Vibration feedback: also enable the "Vibration Feedback" HTML5 capability so the haptic option has real API backing.');
  }
  if (cfg.designStyle === 'neubrutalism' && cfg.lightingStyle === 'neon-bloom') {
    tips.push('Pop-art + neon glow: pick one star — keep the bold block shadows OR the glow, not both, or the UI gets noisy.');
  }
  return tips;
}

// =========================================================================
// WEAVE GUIDER CHOICES INTO THE MAIN PROMPT BOX
// =========================================================================
function weaveChoicesIntoPromptBox() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const iface = findCatalogItem(STUDIO_CATALOG.interfaceDesigns, cfg.interfaceDesign);
  const style = findCatalogItem(STUDIO_CATALOG.designStyles, cfg.designStyle);
  const mood = findCatalogItem(STUDIO_CATALOG.colorMoods, cfg.colorMood);
  const light = findCatalogItem(STUDIO_CATALOG.lightingStyles, cfg.lightingStyle);
  const comp = findCatalogItem(STUDIO_CATALOG.complexityOptions, cfg.complexity);
  const deepDiveSpec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType] || STUDIO_CATALOG.subMenus.modeDeepDive.app;
  const deepPick = deepDiveSpec.fields.length
    ? (deepDiveSpec.fields[0].options.find((o) => o.id === cfg.subConfig[deepDiveSpec.fields[0].key]) || deepDiveSpec.fields[0].options[0]).label
    : '';
  const essNames = mode.categoryEssentials.filter((e) => cfg.essentials.includes(e.id)).map((e) => e.label);

  const texture = findCatalogItem(STUDIO_CATALOG.textureDesigns, cfg.textureStyle);
  const lbg = findCatalogItem(STUDIO_CATALOG.liveBackgrounds, cfg.liveBackground);
  const bl = findCatalogItem(STUDIO_CATALOG.backlightDesigns, cfg.backlightStyle);
  const lbh = findCatalogItem(STUDIO_CATALOG.lightBehaviour, cfg.lightBehaviour);
  const gameBits = cfg.projectType === 'game'
    ? ` • Game: ${findCatalogItem(STUDIO_CATALOG.gameTypes, cfg.gameTypeId).name}, ${findCatalogItem(STUDIO_CATALOG.gameArtStyles, cfg.gameArtStyle).name} art`
    : '';
  const existing = el.promptInput.value.trim();
  const visionTag = `[Vision: ${mode.label}${deepPick ? ` • ${deepPick}` : ''} • ${comp.name} • ${iface.name} • ${style.name} (${mood.name}, ${light.name}) • Light: ${lbh.name} • Backlight: ${bl.name} • Texture: ${texture.name}${lbg.id !== 'livebg-none' ? ` • Live BG: ${lbg.name}` : ''}${gameBits}${essNames.length ? ` • Features: ${essNames.slice(0, 5).join(', ')}` : ''}]`;

  if (!existing) {
    el.promptInput.value = `Build a ${mode.label} using a ${iface.name} layout with a ${style.name} look, ${mood.name} colors, and ${light.name} lighting.${deepPick ? ` Core approach: ${deepPick.toLowerCase()}.` : ''}${essNames.length ? ` Include: ${essNames.join(', ')}.` : ''}${cfg.targetAudience ? ` Designed for ${cfg.targetAudience.trim()}.` : ''}\n${visionTag}`;
  } else if (!existing.includes('[Vision:')) {
    el.promptInput.value = `${existing}\n${visionTag}`;
  } else {
    el.promptInput.value = existing.replace(/\[Vision:[^\]]+\]/, visionTag);
  }
  state.userPrompt = el.promptInput.value;
  saveWorkspaceSnapshot();
  showToast('Wove your guided choices into the prompt!', 'success');
}

// =========================================================================
// FULL BLUEPRINT SUMMARY (written into notes.txt at run start)
// =========================================================================
function compileFullBlueprintSummaryText() {
  const cfg = state.studioConfig;
  const sub = cfg.subConfig || {};
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

  const modeSpec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType];
  const modeSubStr = modeSpec
    ? modeSpec.fields.map((f) => `${f.label}=${(f.options.find((o) => o.id === sub[f.key]) || f.options[0]).label}`).join(' | ')
    : '';

  const lines = [
    `PROJECT TYPE: ${mode.label} — ${mode.roleLens}`,
    modeSubStr ? `MODE DEEP-DIVE: ${modeSubStr}` : '',
    `EXPERIENCE PROFILE: Platform=${cfg.targetPlatform} | Complexity=${cfg.complexity} | Navigation=${cfg.navStyle} | First-5-Sec=${cfg.starterExp}`,
    `PERSISTENCE & SENSORY: Storage=${cfg.dataPersistence} (Indicator=${sub.saveIndicator}, Backup=${sub.backupFormat}) | Audio=${cfg.sensoryAudio} (Character=${sub.audioCharacter}, Triggers=${sub.audioTriggers}) | Motion/A11y=${cfg.a11yMotion}`,
    `SELECTED MODE FEATURES: ${essLabels.length ? essLabels.join('; ') : 'Standard'}`,
    `INTERFACE LAYOUT: ${iface.name} (${iface.desc})`,
    `DESIGN STYLE: ${style.name} (${style.desc})`,
    `COLOR & TYPOGRAPHY: ${mood.name} (${mood.colors.join(', ')}) | ${typo.name} (${typo.desc})`,
    `ELEMENT, LIGHTING & FINISH: ${elem.name} (${elem.desc}) | ${light.name} (${light.desc}) | Corners=${sub.cornerRadius} | Density=${sub.visualDensity}`,
    `HTML5 CAPABILITIES: ${htmlLabels.length ? htmlLabels.join(', ') : 'Standard Semantic HTML5'}`,
    `CSS3 CAPABILITIES: ${cssLabels.length ? cssLabels.join(', ') : 'Modern Responsive CSS3'}`,
    `JS ARCHITECTURE: ${jsArchLabels.length ? jsArchLabels.join(', ') : 'Clean Modular ES6+'}`,
    `ADD-ON LIBRARIES: ${jsLibsSelected.length ? jsLibsSelected.map((l) => `${l.label} (${l.cdn})`).join(' | ') : 'None (100% pure zero-dependency Vanilla HTML/CSS/JS)'}`
  ].filter(Boolean);

  // New visual layers with EXACT code the final build must use (textures, back-lighting, light behaviour, live backgrounds)
  lines.push(compileTextureSpecLines());
  lines.push(compileBacklightSpecLines());
  lines.push(compileLightBehaviourSpecLines());
  lines.push(compileLiveBgSpecLines());
  const gameStudioLines = compileGameStudioSpecLines();
  if (gameStudioLines) lines.push(gameStudioLines);

  if (cfg.jsLibs.includes('threejs')) lines.push(`3D SCENE TUNING: Camera=${sub.threeCamera} | Lighting=${sub.threeLighting}`);
  if (cfg.jsLibs.includes('chartjs') || cfg.jsLibs.includes('d3')) lines.push(`CHART TUNING: Type=${sub.chartType} | Interactivity=${sub.chartInteractivity}`);
  if (cfg.jsLibs.includes('matterjs')) lines.push(`PHYSICS TUNING: Gravity=${sub.matterGravity} | Bounds=${sub.matterBounds}`);

  const ghActive = (cfg.jsArch && cfg.jsArch.includes('app-update-checker')) || (cfg.essentials && cfg.essentials.includes('app-updater'));
  if (ghActive) {
    lines.push(`GITHUB UPDATE CHECKER: Timing=${sub.ghCheckTiming} | Experience=${sub.ghUpdateUx} | Version Source=${sub.ghVersionSource} (checks the project's GitHub repo for a newer published version and refreshes the installed app in place — include a visible version chip and cache-busted fetches)`);
  }

  const combo = buildComboInsights(cfg);
  if (combo.length) lines.push(`SMART COMBO INSIGHTS:\n${combo.map((tip) => `- ${tip}`).join('\n')}`);

  if (cfg.targetAudience?.trim()) lines.push(`TARGET AUDIENCE: ${cfg.targetAudience.trim()}`);
  if (cfg.extraConstraints?.trim()) lines.push(`MUST-HAVE DETAILS: ${cfg.extraConstraints.trim()}`);
  if (cfg.antiGoals?.trim()) lines.push(`THINGS TO AVOID: ${cfg.antiGoals.trim()}`);

  return lines.join('\n');
}

// =========================================================================
// DYNAMIC PER-STEP BLUEPRINT (adaptive weaving of every option into each step)
// =========================================================================
function compileDynamicStepBlueprint(stepObj) {
  const cfg = state.studioConfig;
  const sub = cfg.subConfig || {};
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
    experimental: 'Creative Sandbox Lens: prioritize immediate visual/audio wonder, tactile direct-on-canvas manipulation, collapsible live parameter HUD, randomize/seed exploration, and 1-tap Zen/Snapshot export.',
    free: 'Free Create Hybrid Lens: embrace original spatial metaphors and seamless blending of play, utility, and storytelling without falling back on generic SaaS templates.'
  };

  const platformLenses = {
    'responsive-parity': 'Mobile + Desktop Parity: fluid reflow from 320px phones (thumb-zone CTAs, >=44px tap targets, safe-area insets) to 1440px+ widescreen without horizontal overflow.',
    'mobile-first-thumb': 'Phone-First Thumb Ergonomics: place primary CTAs and navigation within the lower thumb arc, >=48px tap targets, and clean vertical flow.',
    'desktop-pro': 'Desktop Power Workbench: dense scannable multi-pane ergonomics, rich keyboard shortcuts, precision hover states, while staying cleanly usable on smaller screens.',
    'fullscreen-arcade': 'Full-Screen Stage / Arcade: edge-to-edge 100dvh viewport lock, touch-action: none on playfield, compact non-obstructive corner HUD, zero accidental page bounce/scroll.',
    'tablet-split': 'Tablet Split View: two focused panels side-by-side with a draggable or fixed divider on wide screens that stack cleanly into one column under 768px — plan the primary panel first.',
    'kiosk-display': 'Kiosk / Big-Screen Display: extra-large type (>=18px base), giant >=64px touch targets, minimal reading, high contrast, and auto-timeout back to the home screen.'
  };

  const modeSpec = STUDIO_CATALOG.subMenus.modeDeepDive[cfg.projectType];
  const modeSubStr = modeSpec
    ? modeSpec.fields.map((f) => `${f.label}: ${(f.options.find((o) => o.id === sub[f.key]) || f.options[0]).label}`).join(' | ')
    : '';

  const lines = [
    `- Project Mode: ${mode.label} — ${mode.roleLens}`,
    modeSubStr ? `- Mode Sub-Menu Choices: ${modeSubStr}` : '',
    `- Scope & Flow: Complexity=${cfg.complexity} | Navigation=${cfg.navStyle} | First-5-Seconds=${cfg.starterExp}`,
    `- Active Mode Features to Intertwine: ${essItems.map((e) => `${e.label} (${e.desc})`).join(' | ') || 'Standard'}`
  ].filter(Boolean);

  if (signals.has('mode-lens')) {
    lines.push(`- Mode Critical Engineering Lens: ${modeCriticalLenses[mode.id] || modeCriticalLenses.app}`);
  }

  if (signals.has('platform-ergonomics')) {
    lines.push(`- Platform & Ergonomics Reality: ${platformLenses[cfg.targetPlatform] || `Platform=${cfg.targetPlatform}`} | A11y/Motion=${cfg.a11yMotion}`);
  }

  if (signals.has('persistence-io')) {
    lines.push(`- Data Ownership & Persistence Mandate: Storage=${cfg.dataPersistence} | Save Indicator=${sub.saveIndicator} | Backup Format=${sub.backupFormat} (include try/catch fallback, versioned schema, and clean user export/reset).`);
  }

  if (signals.has('sensory-motion')) {
    lines.push(`- Sensory, Audio & Motion Mandate: Audio=${cfg.sensoryAudio} (Synth=${sub.audioCharacter}, Triggers=${sub.audioTriggers}) | Motion/A11y=${cfg.a11yMotion} (respect prefers-reduced-motion and include user mute if audio is active).`);
  }

  if (signals.has('visual-system') || stepObj.stage >= 3 || stepObj.num === 5 || stepObj.num === 16) {
    lines.push(`- Visual Direction & Materiality: Layout="${iface.name}" (${iface.desc}) | Style="${style.name}" (${style.desc}) | Palette="${mood.name}" (${mood.colors.join(', ')}) | Typography="${typo.name}" (${typo.desc}) | Elements="${elem.name}" (${elem.desc}) | Lighting="${light.name}" (${light.desc}) | Finish: Corners=${sub.cornerRadius}, Density=${sub.visualDensity}`);
    lines.push(compileTextureSpecLines());
    lines.push(compileBacklightSpecLines());
    lines.push(compileLightBehaviourSpecLines());
    lines.push(compileLiveBgSpecLines());
    const gameLines = compileGameStudioSpecLines();
    if (gameLines) lines.push(gameLines);
  }

  if (signals.has('tech-stack') || stepObj.stage === 2 || stepObj.stage === 3 || stepObj.stage === 5) {
    lines.push(`- HTML5 Capabilities: ${htmlItems.map((h) => `${h.label} [${h.tech}]`).join(', ') || 'Standard HTML5'}`);
    lines.push(`- CSS3 Capabilities: ${cssItems.map((c) => `${c.label} [${c.tech}]`).join(', ') || 'Modern CSS3'}`);
    lines.push(`- JS Architecture: ${jsArchItems.map((j) => `${j.label} [${j.tech}]`).join(', ') || 'Modular Vanilla ES6+'}`);
    const ghActive = (cfg.jsArch && cfg.jsArch.includes('app-update-checker')) || (cfg.essentials && cfg.essentials.includes('app-updater'));
    if (ghActive) {
      lines.push(`- GitHub Update Checker Sub-Config: Check Timing=${sub.ghCheckTiming} | Update Experience=${sub.ghUpdateUx} | Version Source=${sub.ghVersionSource} — implement a real in-app version check against the project's GitHub repo (raw.githubusercontent fetch with cache-busting), compare semver, and offer a one-tap refresh of the installed app.`);
    }
    if (jsLibsSelected.length > 0) {
      lines.push(`- Selected CDN Libraries (must integrate cleanly): ${jsLibsSelected.map((l) => `${l.label} => ${l.cdn}`).join(' | ')}`);
      if (cfg.jsLibs.includes('threejs')) lines.push(`  * 3D Sub-Config: Camera=${sub.threeCamera}, Lighting=${sub.threeLighting}`);
      if (cfg.jsLibs.includes('chartjs') || cfg.jsLibs.includes('d3')) lines.push(`  * Chart Sub-Config: Type=${sub.chartType}, Interactivity=${sub.chartInteractivity}`);
      if (cfg.jsLibs.includes('matterjs')) lines.push(`  * Physics Sub-Config: Gravity=${sub.matterGravity}, Bounds=${sub.matterBounds}`);
    } else {
      lines.push(`- External Libraries: NONE (100% standalone Vanilla HTML5/CSS3/ES6+)`);
    }
  }

  if (signals.has('constraints-anti') || stepObj.stage === 1 || stepObj.stage === 5) {
    if (cfg.targetAudience?.trim()) lines.push(`- Target Audience: ${cfg.targetAudience.trim()}`);
    if (cfg.extraConstraints?.trim()) lines.push(`- Must-Have Details: ${cfg.extraConstraints.trim()}`);
    if (cfg.antiGoals?.trim()) lines.push(`- Strictly Avoid: ${cfg.antiGoals.trim()}`);
  }

  const combo = buildComboInsights(cfg);
  if (combo.length) {
    lines.push(`- Smart Combination Insights (adaptive to the current option mix): ${combo.join(' ')}`);
  }

  return lines.join('\n');
}

// =========================================================================
// PROMPT IMPROVER — extracts the idea FROM the user, straight into the
// prompt box. Five methods: guided question sets (10/30/50, offline &
// adaptive), AI custom questions (10/30/50 via the key pool, with a
// meta-prompt builder), AI enhance, clarity score, and idea sparkers.
// =========================================================================

const IMPROVER_SECTIONS = ['Core Vision', 'Mode Deep-Dive', 'Your Users', 'Features & Scope', 'Data & Content', 'Look & Feel', 'Sound & Motion', 'Quality & Future', 'Open Floor'];

const IMPROVER_QUESTION_BANK = [
  // ---------- CORE VISION (priority 100) ----------
  { id: 'core_goal', section: 'Core Vision', prio: 100, text: 'In one sentence, what should this help people do or feel?', hint: 'This becomes the north star for all 50 build steps.', chips: ['Save time', 'Stay organized', 'Learn & practice', 'Create something', 'Be entertained', 'Track progress'] },
  { id: 'core_audience', section: 'Core Vision', prio: 100, text: 'Who is the very first person you picture using it?', hint: 'Designing for one real person beats designing for everyone.', chips: ['Me, myself', 'Friends & family', 'Students', 'Busy professionals', 'Kids & teens', 'A hobby community'] },
  { id: 'core_freq', section: 'Core Vision', prio: 100, text: 'How often will they come back to it?', hint: 'Frequency shapes whether it is a daily ritual or a utility.', chips: ['Several times a day', 'Once a day', 'A few times a week', 'Only when a need pops up'] },
  { id: 'core_action', section: 'Core Vision', prio: 100, text: "What's the ONE main thing they do on each visit?", hint: 'The core action should be reachable in a single tap.', chips: ['Quickly capture something', 'Review & organize', 'Play a round', 'Explore & experiment', 'Calculate & compare'] },
  { id: 'core_win', section: 'Core Vision', prio: 100, text: "What would make someone say 'this is exactly what I needed'?", hint: 'This is your success criteria in the user\'s own words.', chips: ["It's instant & frictionless", 'It works offline', 'It makes me smile', 'Everything in one place', "It's beautiful"] },
  { id: 'core_pain', section: 'Core Vision', prio: 100, text: 'What annoys you about how this is solved today?', hint: 'Your frustration is the product opportunity.', chips: ['Too many steps', 'Ugly & cluttered', 'Needs an account', 'Too slow', 'Missing one key feature', 'Costs money'] },
  { id: 'core_mvp', section: 'Core Vision', prio: 100, text: 'What must it do brilliantly on day one?', hint: 'One thing done brilliantly beats five done okay.', chips: [] },
  { id: 'core_mood', section: 'Core Vision', prio: 100, text: 'One word for how it should feel.', hint: 'Every color, sound, and animation will follow this word.', chips: ['Calm', 'Playful', 'Powerful', 'Cozy', 'Premium', 'Futuristic', 'Nostalgic'] },
  { id: 'core_never', section: 'Core Vision', prio: 100, text: 'What must it NEVER do?', hint: 'Anti-goals prevent the AI building things you will hate.', chips: ['Lose my data', 'Feel cluttered', 'Require signup', 'Run slowly', 'Look generic'] },
  { id: 'core_name', section: 'Core Vision', prio: 100, text: 'Got a working name or title?', hint: 'A name helps the AI give the app a consistent personality.', chips: [] },

  // ---------- MODE DEEP-DIVE (priority 85) ----------
  { id: 'game_controls', section: 'Mode Deep-Dive', prio: 85, modes: ['game'], text: 'Primary controls?', hint: 'Controls decide everything about pacing and feel.', chips: ['Keyboard', 'Touch taps & swipes', 'Mouse aiming', 'Both keyboard & touch'] },
  { id: 'game_difficulty', section: 'Mode Deep-Dive', prio: 85, modes: ['game'], text: 'Difficulty model?', hint: 'Difficulty is the difference between addictive and rage-quit.', chips: ['Relaxing ramp', 'Steady challenge', 'Hardcore', 'Player-picked levels'] },
  { id: 'game_session', section: 'Mode Deep-Dive', prio: 85, modes: ['game'], text: 'Perfect round length?', hint: 'Session length shapes scoring, pacing, and UI density.', chips: ['30-second blitz', '~2 minutes', '5+ minutes', 'Endless'] },
  { id: 'game_fail', section: 'Mode Deep-Dive', prio: 85, modes: ['game'], text: 'What happens after failing?', hint: 'Great failure loops pull players straight back in.', chips: ['Instant retry', 'Lives then reset', 'Checkpoint restart', 'Gentle penalty'] },
  { id: 'game_hook', section: 'Mode Deep-Dive', prio: 85, modes: ['game'], text: 'What number will players chase?', hint: 'Every great game has one score-shaped heartbeat.', chips: ['High score', 'Streak days', 'Level count', 'Completion %'] },
  { id: 'game_content', section: 'Mode Deep-Dive', prio: 85, modes: ['game'], text: 'How much content?', hint: 'Scope honestly — polished beats plentiful.', chips: ['One polished mode', 'A handful of levels', 'Endless procedural'] },
  { id: 'tool_precision', section: 'Mode Deep-Dive', prio: 85, modes: ['tool'], text: 'Casual or precision inputs?', hint: 'This single choice defines the whole control surface.', chips: ['Casual sliders', 'Exact numeric fields', 'Both — hybrid'] },
  { id: 'tool_formulas', section: 'Mode Deep-Dive', prio: 85, modes: ['tool'], text: 'Are the formulas or rules already defined?', hint: 'Known rules = exact output; unknown = the tool proposes them.', chips: ["Yes — I'll describe them", 'Partially', 'The tool should figure them out'] },
  { id: 'tool_batch', section: 'Mode Deep-Dive', prio: 85, modes: ['tool'], text: 'One item at a time or batches?', hint: 'Batch mode changes the entire layout of the workflow.', chips: ['Single item focus', 'Batch & bulk', 'Both'] },
  { id: 'tool_errors', section: 'Mode Deep-Dive', prio: 85, modes: ['tool'], text: 'When the input is wrong?', hint: 'Error handling is where tools earn or lose trust.', chips: ['Highlight inline', 'Explain in plain words', 'Auto-fix best guess', 'Prevent it entirely'] },
  { id: 'exp_firstview', section: 'Mode Deep-Dive', prio: 85, modes: ['experimental'], text: 'What shows on the very first frame?', hint: 'First impressions are everything in a sandbox.', chips: ['A living artwork', 'A calm empty stage', 'A preset gallery', 'Pure controls & dials'] },
  { id: 'exp_randomness', section: 'Mode Deep-Dive', prio: 85, modes: ['experimental'], text: 'Random or controlled?', hint: 'The surprise/control dial sets the personality of the playground.', chips: ['Wild & surprising', 'Guided randomness', 'Fully controlled'] },
  { id: 'exp_capture', section: 'Mode Deep-Dive', prio: 85, modes: ['experimental'], text: 'How do users save a creation?', hint: 'Creative work deserves a reliable "keep this" moment.', chips: ['PNG snapshot', 'Save & re-load preset', 'Shareable link', 'Just enjoy the moment'] },
  { id: 'exp_react', section: 'Mode Deep-Dive', prio: 85, modes: ['experimental'], text: 'What does the artwork react to?', hint: 'The input source defines the entire interaction model.', chips: ['Pointer movement', 'Sound or music', 'Time & drift', 'User text or input'] },
  { id: 'free_blend', section: 'Mode Deep-Dive', prio: 85, modes: ['free'], text: 'Which worlds are blending here?', hint: 'Naming the blend keeps the build coherent.', chips: ['App + game', 'Tool + art', 'Story + tool', 'Totally new thing'] },
  { id: 'free_anchor', section: 'Mode Deep-Dive', prio: 85, modes: ['free'], text: "What's the anchor users return to?", hint: 'Every hybrid still needs one home base.', chips: ['A home hub', 'A living world', 'A single canvas', 'A daily ritual'] },
  { id: 'free_surprise', section: 'Mode Deep-Dive', prio: 85, modes: ['free'], text: 'How much hidden magic?', hint: 'Delight is dosing — pick the right amount.', chips: ['Quiet & subtle', 'Discoverable delights', 'Frequent celebration'] },
  { id: 'free_story', section: 'Mode Deep-Dive', prio: 85, modes: ['free'], text: 'Is there a story or narrative thread?', hint: 'Even a light frame story changes tone and microcopy.', chips: ['A light frame story', 'Choose-your-path', 'No story — pure function'] },
  { id: 'app_structure', section: 'Mode Deep-Dive', prio: 85, modes: ['app'], text: 'How are items organized?', hint: 'Organization model is the app\'s skeleton.', chips: ['One big list', 'Categories & folders', 'Tags', 'By time — calendar/timeline'] },
  { id: 'app_links', section: 'Mode Deep-Dive', prio: 85, modes: ['app'], text: 'Do items connect to each other?', hint: 'Connections unlock powerful cross-linking features.', chips: ['No — flat list', 'Parent & child', 'Many-to-many links'] },
  { id: 'app_rhythm', section: 'Mode Deep-Dive', prio: 85, modes: ['app'], text: 'Daily rhythm?', hint: 'Rituals need rhythm — morning, weekly, or none.', chips: ['Morning check-in', 'Anytime capture', 'Weekly review', 'No rhythm'] },
  { id: 'app_reminders', section: 'Mode Deep-Dive', prio: 85, modes: ['app'], text: 'Should it nudge users back?', hint: 'Nudges create habits — or noise. Choose wisely.', chips: ['Streaks & flame counters', 'Gentle badges', 'No nudges — respect attention'], when: (cfg) => cfg.dataPersistence !== 'ephemeral' },

  // ---------- YOUR USERS (priority 75) ----------
  { id: 'user_second', section: 'Your Users', prio: 75, text: 'Is there a second type of user worth designing for?', hint: 'A secondary persona often reveals hidden features.', chips: ['No, just me', 'Casual browsers', 'Power users', 'Kids with supervision', 'Share it with my team'] },
  { id: 'user_skill', section: 'Your Users', prio: 75, text: 'How tech-savvy are they?', hint: 'Skill level sets default complexity and error message tone.', chips: ['Total beginners', 'Everyday phone users', 'Comfortable tinkerers', 'Experts & pros'] },
  { id: 'user_access', section: 'Your Users', prio: 75, text: 'Anyone who needs extra accessibility care?', hint: 'Accessibility built in early is free; bolted on late it is expensive.', chips: ['Bigger text & contrast', 'Color-blind safe', 'Screen-reader friendly', 'Motor-friendly large targets', 'Cover the basics well'] },
  { id: 'user_language', section: 'Your Users', prio: 70, text: 'One language or several?', hint: 'Multi-language later is easier when copy is centralized now.', chips: ['English only', 'English + one more', 'Many languages later'] },
  { id: 'user_session', section: 'Your Users', prio: 70, text: 'How long is a typical visit?', hint: 'Session length tunes animation pacing and screen density.', chips: ['Under a minute', '2–5 minutes', '10–30 minutes', 'However long they like'] },
  { id: 'user_share', section: 'Your Users', prio: 70, text: 'Will users show it to others?', hint: 'Sharing changes what the "result" of the app looks like.', chips: ['Yes — shareable results', 'Yes — same device', 'Mostly private', 'Public showcase'] },
  { id: 'user_env', section: 'Your Users', prio: 70, text: 'Where will they usually use it?', hint: 'Environment drives contrast, offline needs, and one-handed use.', chips: ['On the couch', 'On a commute', 'At a desk', 'Outdoors'] },

  // ---------- FEATURES & SCOPE (priority 70) ----------
  { id: 'feat_three', section: 'Features & Scope', prio: 72, text: 'Pick your must-have extras (tap all that apply).', hint: 'Three focused features beat ten half-features.', chips: ['Search & filters', 'Stats & insights', 'Tags or folders', 'Import from file', 'Share & export', 'Dark / light mode', 'Keyboard shortcuts', 'Print-friendly view'], multi: true },
  { id: 'feat_onboard', section: 'Features & Scope', prio: 70, text: 'How should a brand-new user learn it?', hint: 'Onboarding is the difference between "wow" and "wut".', chips: ['Sample data to poke', 'Tiny hint tips', 'Explore freely', 'Guided first steps'] },
  { id: 'feat_wow', section: 'Features & Scope', prio: 70, text: "What's the one 'wow, it does THAT?!' feature?", hint: 'Every build deserves a signature moment.', chips: ['Smart auto-organizing', 'Live animated feedback', 'Undo literally everything', 'One-tap share card', 'Insights dashboard', 'Hidden easter eggs'] },
  { id: 'feat_custom', section: 'Features & Scope', prio: 68, text: 'Should users personalize it?', hint: 'Personalization deepens attachment — or adds clutter.', chips: ['Themes & colors', 'Custom names & labels', 'Layout choices', 'Keep it simple — no settings'] },
  { id: 'feat_grow', section: 'Features & Scope', prio: 66, text: 'Might it grow new parts later?', hint: 'Planning hooks now costs nothing; retrofitting costs everything.', chips: ['Yes — plan hooks for more', 'Maybe — keep options open', 'No — perfectly focused'] },
  { id: 'feat_limit', section: 'Features & Scope', prio: 66, text: 'What should stay OUT of version one?', hint: 'The out-list protects the build from bloat.', chips: ['Accounts & logins', 'Cloud sync', 'Social features', 'Complex settings', 'Everything — keep it tiny'] },

  // ---------- DATA & CONTENT (priority 65) ----------
  { id: 'data_kind', section: 'Data & Content', prio: 68, text: 'What kind of data lives inside?', hint: 'Data shape drives storage choice and editor design.', chips: ['Short notes & lists', 'Numbers & measurements', 'Long text entries', 'Scores & game state', 'Just settings'] },
  { id: 'data_volume', section: 'Data & Content', prio: 66, text: 'How many items might a heavy user have?', hint: 'Volume decides if we need virtualized lists and IndexedDB.', chips: ['Dozens', 'Hundreds', 'Thousands', 'Barely any'] },
  { id: 'data_seed', section: 'Data & Content', prio: 66, text: 'Should it open with example content?', hint: 'Sample data is the fastest teacher there is.', chips: ['Yes — realistic samples', 'A few starter presets', 'Empty with a friendly guide', 'Import my own file'] },
  { id: 'data_backup', section: 'Data & Content', prio: 65, text: 'How do people keep their data safe?', hint: 'Backups turn "trust me" into "trust this file".', chips: ['Auto-save is enough', 'Download backup file', 'Export to CSV/sheet', 'Copy-paste snapshot'], when: (cfg) => cfg.dataPersistence !== 'ephemeral' },
  { id: 'data_import', section: 'Data & Content', prio: 64, text: 'Need to bring data in?', hint: 'Import paths prevent the dreaded "start from scratch" wall.', chips: ['Paste it in', 'Load a file', 'Drag & drop', 'No — start fresh'] },
  { id: 'data_sensitive', section: 'Data & Content', prio: 63, text: 'Anything sensitive stored?', hint: 'Sensitive data means stricter privacy promises in the UI.', chips: ['No — casual data', 'Somewhat private', 'Yes — keep 100% local'] },

  // ---------- LOOK & FEEL (priority 60) ----------
  { id: 'look_words', section: 'Look & Feel', prio: 62, text: 'Pick three words that describe the look.', hint: 'These words translate directly into design tokens.', chips: ['Clean & airy', 'Dark & focused', 'Bright & playful', 'Warm & cozy', 'Sharp & technical', 'Soft & rounded', 'Bold & loud', 'Elegant & minimal'], multi: true },
  { id: 'look_theme', section: 'Look & Feel', prio: 60, text: 'Dark, light, or follow the system?', hint: 'Theme choice anchors the whole palette.', chips: ['Dark', 'Light', 'Auto (follow system)', 'Both — user toggles'] },
  { id: 'look_density', section: 'Look & Feel', prio: 60, text: 'Cozy & compact or airy & spacious?', hint: 'Density is comfort — pick for the thumbs, not the eyes.', chips: ['Compact — more on screen', 'Balanced', 'Airy — breathing room'] },
  { id: 'look_brand', section: 'Look & Feel', prio: 58, text: 'Any brand colors, hex codes, or palettes to respect?', hint: 'Give exact hex values and the AI will build around them.', chips: [] },
  { id: 'look_motion', section: 'Look & Feel', prio: 58, text: 'How should it move?', hint: 'Motion speed is a personality trait.', chips: ['Snappy & instant', 'Smooth & fluid', 'Cinematic & rich', 'Calm — barely any'] },
  { id: 'look_empty', section: 'Look & Feel', prio: 56, text: 'What should a fresh empty screen feel like?', hint: 'Empty states are the handshake of the app.', chips: ['An inviting big button', 'A playful hint', 'Example content to explore', 'Peaceful blank slate'] },

  // ---------- SOUND & MOTION (priority 55) ----------
  { id: 'sound_vibe', section: 'Sound & Motion', prio: 58, text: 'If it made sound, what would fit?', hint: 'Sound is optional texture — but choosing it now keeps it coherent.', chips: ['Soft clicks & chimes', 'Retro blips', 'Rich arcade SFX', 'Music-like tones', 'Total silence'] },
  { id: 'sound_celebrate', section: 'Sound & Motion', prio: 56, text: 'How should wins be celebrated?', hint: 'Celebration is the emotional payoff of the whole build.', chips: ['Subtle glow', 'Confetti burst', 'Score fanfare', 'Quiet checkmark'] },
  { id: 'sound_haptics', section: 'Sound & Motion', prio: 54, text: 'Should phones buzz on actions?', hint: 'Haptics make touches feel acknowledged.', chips: ['Yes — gentle', 'Only key moments', 'No vibration'] },

  // ---------- QUALITY & FUTURE (priority 50) ----------
  { id: 'qual_device', section: 'Quality & Future', prio: 54, text: 'Any device or performance concerns?', hint: 'Performance targets set hard engineering budgets.', chips: ['Older phones too', 'Big datasets', 'Low battery use', 'None special'] },
  { id: 'qual_offline', section: 'Quality & Future', prio: 54, text: 'Must it work fully offline?', hint: 'Offline-first changes the storage architecture.', chips: ['Yes — always', 'Mostly (cached)', 'No — online is fine'] },
  { id: 'qual_polish', section: 'Quality & Future', prio: 52, text: 'What level of polish matters most?', hint: 'You cannot maximize everything — pick your north star.', chips: ['Speed above all', 'Visual beauty', 'Rock-solid reliability', 'Delightful details'] },
  { id: 'qual_privacy', section: 'Quality & Future', prio: 52, text: 'Anything users would hate to leak?', hint: 'Privacy promises belong in the UI copy, not the fine print.', chips: ['Keep 100% local', 'Just be sensible', 'Nothing sensitive'] },
  { id: 'qual_future', section: 'Quality & Future', prio: 50, text: 'Where could this go in a year?', hint: 'A sentence about the future prevents tunnel-vision builds.', chips: [] },

  // ---------- OPEN FLOOR (fillers / priority 20) ----------
  { id: 'fill_anything', section: 'Open Floor', prio: 20, text: 'Anything else you wish it did?', hint: 'Open floor — dump every stray wish here.', chips: [] },
  { id: 'fill_session', section: 'Open Floor', prio: 20, text: 'Describe your perfect first session with it.', hint: 'Story-form answers often unlock the best features.', chips: [] },
  { id: 'fill_inspire', section: 'Open Floor', prio: 20, text: 'Name something you would steal from another app or game.', hint: 'Borrowing brilliance is how the best interfaces evolve.', chips: [] }
];

function buildImproverQuestionList(count) {
  const cfg = state.studioConfig;
  const eligible = IMPROVER_QUESTION_BANK.filter((q) => {
    if (q.modes && !q.modes.includes(cfg.projectType)) return false;
    if (q.when && typeof q.when === 'function' && !q.when(cfg)) return false;
    return true;
  });

  const sectionOrder = IMPROVER_SECTIONS;
  const sorted = [...eligible].sort((a, b) => {
    const sa = sectionOrder.indexOf(a.section);
    const sb = sectionOrder.indexOf(b.section);
    if (sa !== sb) return sa - sb;
    if (b.prio !== a.prio) return b.prio - a.prio;
    return 0;
  });

  if (count >= sorted.length) return sorted;
  // For the short set, take the highest-priority core questions across sections
  if (count <= 10) {
    const core = sorted.filter((q) => q.section === 'Core Vision');
    return core.slice(0, count);
  }
  return sorted.slice(0, count);
}

// ---------- Improver: open / render ----------

function openPromptImprover() {
  if (state.isRunning) {
    showToast('Pause the pipeline before using the Prompt Improver.', 'warn');
    return;
  }
  const imp = state.improver;
  if (imp.view === 'questions' || imp.view === 'aiLoading') {
    // keep session alive
  } else if (imp.view !== 'summary') {
    imp.view = 'hub';
  }
  el.promptImproverModal.classList.remove('hidden');
  renderImprover();
}

function closePromptImprover() {
  const imp = state.improver;
  if (imp.ai.loading || imp.enhance.loading) return; // don't close mid-flight
  el.promptImproverModal.classList.add('hidden');
}

function renderImprover() {
  const imp = state.improver;
  const views = {
    hub: renderImproverHub,
    precheck: renderImproverPrecheck,
    questions: renderImproverQuestionView,
    summary: renderImproverSummary,
    aiBuilder: renderAiQuestionBuilder,
    aiLoading: renderAiLoading,
    enhance: renderEnhanceView,
    sparkers: renderSparkersView,
    clarity: renderClarityView
  };
  (views[imp.view] || renderImproverHub)();
  refreshIcons();
}

function improverSetFooter(html, wire) {
  if (!el.improverFooter) return;
  el.improverFooter.innerHTML = html;
  if (typeof wire === 'function') wire(el.improverFooter);
}

// ---------- Improver: HUB ----------

function renderImproverHub() {
  const imp = state.improver;
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const promptLen = el.promptInput.value.trim().length;

  el.improverBody.innerHTML = `
    <div class="space-y-4">
      <div class="rounded-xl border border-slate-800 bg-[#090d14] px-3.5 py-2.5 flex items-center justify-between gap-2">
        <div class="min-w-0">
          <div class="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Your prompt right now</div>
          <div class="text-[11px] text-slate-400 truncate mt-0.5">${promptLen ? escapeHtml(el.promptInput.value.trim().slice(0, 120)) + (promptLen > 120 ? '…' : '') : '<span class="text-amber-300">Empty — even a rough line helps, or just start a method below.</span>'}</div>
        </div>
        <span class="font-mono-code text-[10px] text-cyan-300 shrink-0">${promptLen} chars • ${mode.label}</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button type="button" data-improver-go="questions" class="improver-method-card">
          <span class="improver-method-icon bg-indigo-500/20 text-indigo-300 border-indigo-500/35"><i data-lucide="messages-square" class="w-5 h-5"></i></span>
          <div class="min-w-0">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-slate-100">Guided Questions</span>
              <span class="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shrink-0">OFFLINE</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">A friendly interview that uncovers what you actually want. Answers get woven straight into your prompt.</p>
            <div class="flex items-center gap-1.5 mt-2">
              ${[10, 30, 50].map((n) => `<span data-improver-count="${n}" class="improver-count-chip ${imp.count === n && imp.view === 'precheck' ? 'is-on' : ''}">${n} questions</span>`).join('')}
            </div>
          </div>
        </button>

        <button type="button" data-improver-go="aiBuilder" class="improver-method-card">
          <span class="improver-method-icon bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/35"><i data-lucide="sparkles" class="w-5 h-5"></i></span>
          <div class="min-w-0">
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold text-slate-100">AI Custom Questions</span>
              <span class="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30 shrink-0">API</span>
            </div>
            <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">Your AI studies your idea and asks the 10, 30, or 50 questions YOU need answered — researched, specific, and relevant.</p>
            <div class="flex items-center gap-1.5 mt-2">
              ${[10, 30, 50].map((n) => `<span data-improver-ai-count="${n}" class="improver-count-chip ${imp.ai.count === n ? 'is-on' : ''}">${n} questions</span>`).join('')}
            </div>
          </div>
        </button>

        <button type="button" data-improver-go="enhance" class="improver-method-card">
          <span class="improver-method-icon bg-cyan-500/20 text-cyan-300 border-cyan-500/35"><i data-lucide="wand-2" class="w-5 h-5"></i></span>
          <div class="min-w-0">
            <span class="text-xs font-bold text-slate-100">AI Enhance</span>
            <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">Rewrites your rough idea into a rich, specific build brief — you approve before anything changes.</p>
          </div>
        </button>

        <button type="button" data-improver-go="clarity" class="improver-method-card">
          <span class="improver-method-icon bg-amber-500/20 text-amber-300 border-amber-500/35"><i data-lucide="gauge" class="w-5 h-5"></i></span>
          <div class="min-w-0">
            <span class="text-xs font-bold text-slate-100">Clarity Score</span>
            <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">Instant health check of your prompt: what is missing, vague, or already great — with one-tap fixes.</p>
          </div>
        </button>

        <button type="button" data-improver-go="sparkers" class="improver-method-card sm:col-span-2">
          <span class="improver-method-icon bg-emerald-500/20 text-emerald-300 border-emerald-500/35"><i data-lucide="lightbulb" class="w-5 h-5"></i></span>
          <div class="min-w-0">
            <span class="text-xs font-bold text-slate-100">Idea Sparkers</span>
            <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">Adaptive feature ideas, signature moments, and "what if…" angles for ${escapeHtml(mode.label)}s — tap to add the ones you love.</p>
          </div>
        </button>
      </div>
    </div>
  `;

  improverSetFooter(`
    <div class="text-[11px] text-slate-500 truncate">Every tool here writes only into your prompt box — your other settings stay untouched.</div>
    <button type="button" data-improver-close class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition">Done</button>
  `, (foot) => {
    foot.querySelector('[data-improver-close]').addEventListener('click', closePromptImprover);
  });

  el.improverBody.querySelectorAll('[data-improver-go]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const imp2 = state.improver;
      imp2.view = btn.dataset.improverGo;
      if (imp2.view === 'enhance') imp2.enhance.result = '';
      renderImprover();
    });
  });
  el.improverBody.querySelectorAll('[data-improver-count]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      state.improver.count = Number(chip.dataset.improverCount);
      state.improver.view = 'precheck';
      renderImprover();
    });
  });
  el.improverBody.querySelectorAll('[data-improver-ai-count]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      state.improver.ai.count = Number(chip.dataset.improverAiCount);
      renderImprover();
    });
  });
}

// ---------- Improver: SETTINGS PRE-CHECK ----------

function renderImproverPrecheck() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const plat = findCatalogItem(STUDIO_CATALOG.platformOptions, cfg.targetPlatform);
  const comp = findCatalogItem(STUDIO_CATALOG.complexityOptions, cfg.complexity);
  const persistText = cfg.dataPersistence === 'ephemeral' ? 'Fresh Start (no saving)' : 'Auto-Save + Backup';
  const soundText = { 'web-audio-subtle': 'Gentle Sound', 'web-audio-arcade': 'Arcade Sound', 'haptic-visual': 'Vibration Only', 'silent-clean': 'Silent' }[cfg.sensoryAudio] || cfg.sensoryAudio;

  const rows = [
    { label: 'Type', val: mode.label, step: 'projectType' },
    { label: 'Devices', val: plat.name, step: 'targetPlatform' },
    { label: 'Depth', val: comp.name, step: 'complexity' },
    { label: 'Saving', val: persistText, step: 'dataPersistence' },
    { label: 'Sound', val: soundText, step: 'sensoryAudio' }
  ];

  el.improverBody.innerHTML = `
    <div class="space-y-4 max-w-2xl">
      <div class="rounded-xl border border-amber-500/35 bg-amber-950/15 px-3.5 py-2.5 flex items-start gap-2.5">
        <i data-lucide="settings-2" class="w-4 h-4 text-amber-300 shrink-0 mt-0.5"></i>
        <div class="text-[11px] text-slate-300 leading-relaxed">
          <strong class="text-amber-200">Quick settings check.</strong> Your questions adapt to these choices — if something looks off, adjust it first. They shape both the questions you are asked and how your answers get used.
        </div>
      </div>
      <div class="space-y-2">
        ${rows.map((r) => `
          <div class="flex items-center justify-between gap-2 rounded-lg border border-slate-800 bg-[#090d14] px-3 py-2">
            <span class="text-[11px] text-slate-400">${escapeHtml(r.label)}</span>
            <div class="flex items-center gap-2 min-w-0">
              <span class="text-[11px] font-medium text-slate-100 truncate">${escapeHtml(r.val)}</span>
              <button type="button" data-guider-jump="${r.step}" class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 shrink-0 transition">Edit</button>
            </div>
          </div>
        `).join('')}
      </div>
      ${el.promptInput.value.trim() ? '' : `
        <div class="rounded-xl border border-indigo-500/30 bg-indigo-950/20 px-3.5 py-2.5 text-[11px] text-slate-300 leading-relaxed">
          <strong class="text-indigo-200">Tip:</strong> your prompt box is empty. That is okay — the questions will pull the idea out of you. But if you have even one sentence, paste it in first for sharper results.
        </div>
      `}
    </div>
  `;

  improverSetFooter(`
    <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <div class="flex items-center gap-2">
      <button type="button" data-improver-open-guider class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition hidden sm:inline-flex">Open Full Guider</button>
      <button type="button" data-improver-begin class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition">Start ${state.improver.count} Questions</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-improver-back]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
    foot.querySelector('[data-improver-begin]').addEventListener('click', () => {
      const imp = state.improver;
      imp.source = 'local';
      imp.questions = buildImproverQuestionList(imp.count);
      imp.answers = {};
      imp.index = 0;
      imp.view = 'questions';
      renderImprover();
    });
    const og = foot.querySelector('[data-improver-open-guider]');
    if (og) {
      og.addEventListener('click', () => {
        closePromptImprover();
        const steps = getGuiderJourneySteps();
        state.guiderStepIndex = Math.max(0, steps.findIndex((s) => s.id === 'projectType'));
        openPromptGuider(state.guiderStepIndex);
      });
    }
  });

  el.improverBody.querySelectorAll('[data-guider-jump]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closePromptImprover();
      const steps = getGuiderJourneySteps();
      state.guiderStepIndex = Math.max(0, steps.findIndex((s) => s.id === btn.dataset.guiderJump));
      openPromptGuider(state.guiderStepIndex);
    });
  });
}

// ---------- Improver: QUESTION FLOW (shared by local + AI sets) ----------

function renderImproverQuestionView() {
  const imp = state.improver;
  const q = imp.questions[imp.index];
  if (!q) {
    imp.view = 'summary';
    renderImprover();
    return;
  }
  const total = imp.questions.length;
  const answeredCount = Object.keys(imp.answers).filter((k) => Array.isArray(imp.answers[k]) && imp.answers[k].length).length;
  const currentAnswers = imp.answers[q.id] || [];

  el.improverBody.innerHTML = `
    <div class="space-y-4 max-w-2xl">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-200 border border-indigo-500/35 uppercase tracking-wider">${escapeHtml(q.section)}</span>
        <span class="text-[11px] text-slate-400">Question ${imp.index + 1} of ${total} • ${answeredCount} answered${imp.source === 'ai' ? ' • AI-generated' : ''}</span>
      </div>
      <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-300" style="width:${Math.round(((imp.index + 1) / total) * 100)}%"></div>
      </div>
      <h2 class="text-base sm:text-lg font-bold text-slate-100 leading-snug">${escapeHtml(q.text)}</h2>
      ${q.hint ? `<p class="text-xs text-slate-400 leading-relaxed -mt-1">${escapeHtml(q.hint)}</p>` : ''}
      <div class="flex flex-wrap gap-2" id="improverChipRow">
        ${(q.chips || []).map((c) => {
          const on = currentAnswers.includes(c);
          return `<button type="button" data-improver-chip="${escapeHtml(c)}" class="improver-chip ${on ? 'is-on' : ''}">${escapeHtml(c)}</button>`;
        }).join('')}
      </div>
      <div class="flex items-center gap-2">
        <input id="improverCustomInput" type="text" placeholder="${q.chips && q.chips.length ? 'Or write your own answer…' : 'Type your answer…'}" class="flex-1 bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500" />
        <button type="button" id="improverCustomAdd" class="px-3 py-2 rounded-lg bg-indigo-600/25 hover:bg-indigo-600/40 border border-indigo-500/45 text-indigo-100 text-xs font-semibold transition">Add</button>
      </div>
      ${q.multi ? '<div class="text-[10px] text-slate-500">Pick as many as you like, then hit Next.</div>' : ''}
    </div>
  `;

  const setAnswer = (val) => {
    const imp2 = state.improver;
    if (!imp2.answers[q.id]) imp2.answers[q.id] = [];
    if (q.multi) {
      const idx = imp2.answers[q.id].indexOf(val);
      if (idx === -1) imp2.answers[q.id].push(val);
      else imp2.answers[q.id].splice(idx, 1);
    } else {
      imp2.answers[q.id] = [val];
    }
    if (!q.multi && val) {
      // auto-advance for single-choice after a tiny beat
      setTimeout(() => {
        if (state.improver.view === 'questions' && state.improver.questions[state.improver.index] && state.improver.questions[state.improver.index].id === q.id) {
          improverGoNext();
        }
      }, 240);
    }
    renderImprover();
  };

  el.improverBody.querySelectorAll('[data-improver-chip]').forEach((chip) => {
    chip.addEventListener('click', () => setAnswer(chip.dataset.improverChip));
  });
  const customInput = el.improverBody.querySelector('#improverCustomInput');
  const customAdd = el.improverBody.querySelector('#improverCustomAdd');
  customAdd.addEventListener('click', () => {
    const v = customInput.value.trim();
    if (!v) return;
    setAnswer(v);
  });
  customInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const v = customInput.value.trim();
      if (v) setAnswer(v);
    }
  });

  improverSetFooter(`
    <button type="button" data-improver-qback class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-medium transition" ${imp.index === 0 ? 'disabled' : ''}>Back</button>
    <div class="flex items-center gap-2">
      <button type="button" data-improver-skip class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition">Skip</button>
      <button type="button" data-improver-next class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition">${imp.index === total - 1 ? 'Review Answers' : 'Next'}</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-improver-qback]').addEventListener('click', () => {
      if (state.improver.index > 0) {
        state.improver.index -= 1;
        renderImprover();
      }
    });
    foot.querySelector('[data-improver-skip]').addEventListener('click', () => {
      improverGoNext();
    });
    foot.querySelector('[data-improver-next]').addEventListener('click', () => {
      improverGoNext();
    });
  });
}

function improverGoNext() {
  const imp = state.improver;
  if (imp.index < imp.questions.length - 1) {
    imp.index += 1;
    renderImprover();
  } else {
    imp.view = 'summary';
    renderImprover();
  }
}

// ---------- Improver: SUMMARY + APPLY ----------

function renderImproverSummary() {
  const imp = state.improver;
  const answered = imp.questions.filter((q) => imp.answers[q.id] && imp.answers[q.id].length);
  const skipped = imp.questions.length - answered.length;

  el.improverBody.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between gap-2">
        <h2 class="text-base font-bold text-slate-100">${answered.length} answers collected${skipped ? ` • ${skipped} skipped` : ''}</h2>
        <span class="text-[11px] text-slate-400">${imp.source === 'ai' ? 'AI-generated set' : 'Guided set'} • ${imp.questions.length} questions</span>
      </div>
      ${answered.length === 0 ? `
        <div class="rounded-xl border border-slate-800 bg-[#090d14] p-4 text-center text-xs text-slate-400">
          No answers yet — start over or try a different method.
        </div>
      ` : `
        <div class="space-y-2 max-h-[46dvh] overflow-y-auto pr-1">
          ${answered.map((q) => `
            <div class="rounded-lg border border-slate-800 bg-[#090d14] px-3 py-2.5">
              <div class="flex items-start justify-between gap-2">
                <div class="text-[11px] text-slate-400 leading-snug min-w-0">${escapeHtml(q.text)}</div>
                <button type="button" data-improver-remove="${escapeHtml(q.id)}" class="p-1 rounded text-slate-500 hover:text-rose-300 shrink-0 transition" title="Remove answer"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
              </div>
              <div class="flex flex-wrap gap-1.5 mt-1.5">
                ${imp.answers[q.id].map((a) => `<span class="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-200 border border-cyan-500/30 text-[11px]">${escapeHtml(a)}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;

  improverSetFooter(`
    <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <div class="flex items-center gap-2">
      <button type="button" data-improver-restart class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Start Over</button>
      <button type="button" data-improver-apply class="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition" ${answered.length ? '' : 'disabled style="opacity:.45;cursor:not-allowed"'}>Add ${answered.length} Answers to Prompt</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-improver-back]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
    foot.querySelector('[data-improver-restart]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
    foot.querySelector('[data-improver-apply]').addEventListener('click', () => {
      const n = applyImproverAnswersToPrompt();
      if (n > 0) {
        closePromptImprover();
        showToast(`Wove ${n} answers into your prompt!`, 'success');
      }
    });
  });

  el.improverBody.querySelectorAll('[data-improver-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      delete state.improver.answers[btn.dataset.improverRemove];
      renderImprover();
    });
  });
}

function applyImproverAnswersToPrompt() {
  const imp = state.improver;
  const answered = imp.questions.filter((q) => imp.answers[q.id] && imp.answers[q.id].length);
  if (!answered.length) return 0;

  const lines = answered.map((q) => `- ${q.text.replace(/\?$/, '')}: ${imp.answers[q.id].join('; ')}`);
  const block = `[Uncovered Details]\n${lines.join('\n')}`;

  let existing = el.promptInput.value;
  if (existing.includes('[Uncovered Details]')) {
    existing = existing.replace(/\[Uncovered Details\][\s\S]*?(?=(\[Vision:|$))/, block);
    el.promptInput.value = existing;
  } else {
    el.promptInput.value = `${existing.trim()}${existing.trim() ? '\n\n' : ''}${block}`;
  }
  state.userPrompt = el.promptInput.value;
  saveWorkspaceSnapshot();
  imp.view = 'hub';
  return answered.length;
}

// ---------- Improver: AI CUSTOM QUESTIONS ----------

const IMPROVER_AI_FOCUS_AREAS = ['Core Purpose', 'Users & Audience', 'Features', 'Data & Content', 'Visual Style', 'Sound & Motion', 'Technical Constraints', 'Success Criteria', 'Fun & Delight', 'Growth & Sharing', 'Accessibility', 'Edge Cases & Failure'];

const IMPROVER_AI_DEPTHS = {
  practical: { label: 'Practical (everyday specifics)', brief: 'Ask concrete, answerable questions a builder can act on today. Favor specifics over theory.' },
  strategic: { label: 'Strategic (product decisions)', brief: 'Ask questions that shape the product: positioning, scope, differentiation, and trade-offs.' },
  research: { label: 'Deep Research (expert-level)', brief: 'Ask expert-level questions covering domain research, edge cases, and non-obvious considerations a pro would raise.' }
};

function renderAiQuestionBuilder() {
  const imp = state.improver;
  const ai = imp.ai;
  if (!ai.idea) ai.idea = el.promptInput.value.trim();

  el.improverBody.innerHTML = `
    <div class="space-y-4">
      <div class="rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/15 px-3.5 py-2.5 text-[11px] text-slate-300 leading-relaxed flex items-start gap-2.5">
        <i data-lucide="sparkles" class="w-4 h-4 text-fuchsia-300 shrink-0 mt-0.5"></i>
        <span>Answer 3 quick questions about what you want explored — and the app builds a research-grade prompt that makes the AI ask <strong class="text-fuchsia-200">you</strong> the ${ai.count} most valuable questions. Requires an API key.</span>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">1. Your idea so far (editable)</label>
        <textarea id="aiIdeaInput" rows="4" placeholder="Describe your idea — even rough. The AI uses this plus your studio settings." class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-fuchsia-500 resize-none"></textarea>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">2. What should the AI dig into? (tap to toggle)</label>
        <div class="flex flex-wrap gap-1.5" id="aiFocusRow">
          ${IMPROVER_AI_FOCUS_AREAS.map((f) => `<button type="button" data-ai-focus="${escapeHtml(f)}" class="improver-chip ${ai.focus.includes(f) ? 'is-on' : ''}">${escapeHtml(f)}</button>`).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-slate-200 mb-1">3. Question depth</label>
          <select id="aiDepthSelect" class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-slate-200 text-xs outline-none focus:border-fuchsia-500">
            ${Object.entries(IMPROVER_AI_DEPTHS).map(([k, v]) => `<option value="${k}" ${ai.depth === k ? 'selected' : ''}>${escapeHtml(v.label)}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-200 mb-1">4. How many questions?</label>
          <div class="flex items-center gap-1.5 pt-1.5" id="aiCountRow">
            ${[10, 30, 50].map((n) => `<button type="button" data-ai-count="${n}" class="improver-count-chip ${ai.count === n ? 'is-on' : ''}">${n} questions</button>`).join('')}
          </div>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">Anything specific the AI should dig into? (optional)</label>
        <input id="aiNoteInput" type="text" value="${escapeHtml(ai.note || '')}" placeholder="e.g., Ask me about how friends should compete on shared boards..." class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-fuchsia-500" />
      </div>

      <details id="aiMetaPromptWrap" class="rounded-xl border border-slate-800 bg-[#090d14] overflow-hidden ${ai.metaPrompt ? '' : 'hidden'}">
        <summary class="px-3.5 py-2.5 cursor-pointer text-[11px] font-semibold text-slate-300 select-none flex items-center justify-between gap-2">
          <span>View / edit the AI question-prompt (advanced)</span>
          <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-500"></i>
        </summary>
        <div class="px-3.5 pb-3 space-y-2">
          <textarea id="aiMetaPromptInput" rows="8" class="w-full bg-[#070a10] border border-slate-800 rounded-lg px-3 py-2 text-[11px] font-mono-code text-slate-300 outline-none focus:border-fuchsia-500 resize-y"></textarea>
          <button type="button" id="aiCopyMetaPrompt" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-medium text-slate-200 border border-slate-700 transition">Copy Prompt</button>
        </div>
      </details>
    </div>
  `;

  const ideaInput = el.improverBody.querySelector('#aiIdeaInput');
  ideaInput.value = ai.idea;
  ideaInput.addEventListener('input', () => { ai.idea = ideaInput.value; });
  el.improverBody.querySelectorAll('[data-ai-focus]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.aiFocus;
      const idx = ai.focus.indexOf(f);
      if (idx === -1) ai.focus.push(f);
      else ai.focus.splice(idx, 1);
      ai.metaPrompt = '';
      renderImprover();
    });
  });
  const depthSel = el.improverBody.querySelector('#aiDepthSelect');
  depthSel.addEventListener('change', () => { ai.depth = depthSel.value; ai.metaPrompt = ''; });
  el.improverBody.querySelectorAll('[data-ai-count]').forEach((chip) => {
    chip.addEventListener('click', () => { ai.count = Number(chip.dataset.aiCount); ai.metaPrompt = ''; renderImprover(); });
  });
  const noteInput = el.improverBody.querySelector('#aiNoteInput');
  noteInput.addEventListener('input', () => { ai.note = noteInput.value; });
  const metaWrap = el.improverBody.querySelector('#aiMetaPromptWrap');
  const metaInput = el.improverBody.querySelector('#aiMetaPromptInput');
  metaInput.value = ai.metaPrompt || buildAiQuestionMetaPrompt();
  metaInput.addEventListener('input', () => { ai.metaPrompt = metaInput.value; });
  el.improverBody.querySelector('#aiCopyMetaPrompt').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(metaInput.value);
      showToast('Question-prompt copied!', 'success');
    } catch (_) {
      showToast('Clipboard unavailable.', 'warn');
    }
  });
  void metaWrap;

  improverSetFooter(`
    <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <div class="flex items-center gap-2">
      <button type="button" data-improver-build class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition">Build Prompt</button>
      <button type="button" data-improver-generate class="px-4 py-1.5 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-semibold transition">Generate ${ai.count} AI Questions</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-improver-back]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
    foot.querySelector('[data-improver-build]').addEventListener('click', () => {
      ai.metaPrompt = buildAiQuestionMetaPrompt();
      showToast('Question-prompt built — open "View / edit" to see or tweak it.', 'success');
      renderImprover();
    });
    foot.querySelector('[data-improver-generate]').addEventListener('click', generateAiQuestions);
  });
}

function buildAiQuestionMetaPrompt() {
  const ai = state.improver.ai;
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const depth = IMPROVER_AI_DEPTHS[ai.depth] || IMPROVER_AI_DEPTHS.practical;
  const idea = (ai.idea || el.promptInput.value.trim() || '(no idea text yet — infer intent from the setup below)');
  const focus = ai.focus.length ? ai.focus.join(', ') : 'all dimensions a builder needs';

  return [
    'You are a world-class product discovery researcher and requirements interviewer.',
    `A builder is creating a ${mode.label.toLowerCase()}. Their setup: platform=${cfg.targetPlatform}, depth=${cfg.complexity}, navigation=${cfg.navStyle}, saving=${cfg.dataPersistence}, sound=${cfg.sensoryAudio}, visual style=${cfg.designStyle} (${cfg.colorMood}).`,
    '',
    `THEIR IDEA: "${idea}"`,
    '',
    `YOUR TASK: produce exactly ${ai.count} interview questions that will help this builder uncover the core details they haven't considered. Focus areas: ${focus}. Question style: ${depth.brief}`,
    '',
    'Rules for the questions:',
    '1. Each question must be concrete, answerable in one or two short sentences by a non-technical person.',
    '2. Never ask generic filler ("who is your audience?") when a specific, idea-relevant question is possible.',
    '3. Sequence them from most foundational to most refined.',
    '4. Include a few questions that challenge assumptions and surface edge cases or hidden opportunities.',
    '5. Write in warm, encouraging plain English (no jargon, no multiple sub-questions per line).',
    '',
    `OUTPUT FORMAT: Return ONLY a numbered list of exactly ${ai.count} questions, one per line, format "1. question text". No headings, no commentary, no answers.`
  ].join('\n');
}

async function generateAiQuestions() {
  const imp = state.improver;
  const ai = imp.ai;

  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Add an API key first (top-right key button) to generate AI questions.', 'warn');
    return;
  }

  ai.metaPrompt = ai.metaPrompt || buildAiQuestionMetaPrompt();
  ai.loading = true;
  imp.view = 'aiLoading';
  renderImprover();

  const systemPrompt =
    'You are an elite product discovery researcher. You ask precise, insightful, plain-English interview questions that help non-technical builders articulate exactly what they want to create. You never answer the questions yourself.';

  try {
    if (!state.isRunning) state.abortController = new AbortController();
    const raw = await callModelUtility(systemPrompt, ai.metaPrompt, 'AI Question Forge');
    const questions = parseAiQuestions(raw, ai.count);
    if (!questions.length) {
      throw new Error('The AI response could not be parsed into questions. Try again or edit the prompt.');
    }
    imp.source = 'ai';
    imp.questions = questions;
    imp.answers = {};
    imp.index = 0;
    imp.view = 'questions';
    showToast(`${questions.length} custom questions generated!`, 'success');
  } catch (err) {
    if (err && err.name === 'AbortError') {
      imp.view = 'aiBuilder';
    } else {
      imp.view = 'aiBuilder';
      showToast(`AI question generation failed: ${err.message || err}`, 'error');
    }
  } finally {
    ai.loading = false;
    if (!state.isRunning) state.abortController = null;
    renderImprover();
  }
}

function parseAiQuestions(rawText, count) {
  const seen = new Set();
  const questions = [];
  String(rawText || '').split(/\r?\n/).forEach((line) => {
    const cleaned = line.replace(/^\s*(?:\d{1,3}[.)\]]|[•*-])\s*/, '').replace(/^Q\d*[:.]\s*/i, '').trim();
    if (!cleaned || cleaned.length < 10) return;
    if (/^(here (are|is)|these questions|sure[,!]|below)/i.test(cleaned)) return;
    const key = cleaned.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) return;
    seen.add(key);
    questions.push({
      id: `aiq_${questions.length}`,
      section: 'AI Research',
      text: cleaned,
      hint: '',
      chips: [],
      ai: true
    });
  });
  return questions.slice(0, count);
}

function renderAiLoading() {
  const ai = state.improver.ai;
  el.improverBody.innerHTML = `
    <div class="flex flex-col items-center justify-center gap-4 py-14 text-center">
      <div class="relative w-14 h-14">
        <div class="absolute inset-0 rounded-full border-2 border-fuchsia-500/25"></div>
        <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-fuchsia-400 animate-spin"></div>
        <i data-lucide="sparkles" class="w-5 h-5 text-fuchsia-300 absolute inset-0 m-auto"></i>
      </div>
      <div>
        <div class="text-sm font-semibold text-slate-100">Forging your ${ai.count} custom questions…</div>
        <div class="text-[11px] text-slate-400 mt-1">The AI is studying your idea, your setup, and your focus areas.</div>
        <div class="text-[10px] font-mono-code text-slate-500 mt-2">${escapeHtml(ai.depth)} depth • ${ai.focus.length || 'all'} focus areas</div>
      </div>
    </div>
  `;
  improverSetFooter(`
    <span class="text-[11px] text-slate-500">This uses one API call from your key pool.</span>
    <button type="button" data-improver-cancel class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Cancel</button>
  `, (foot) => {
    foot.querySelector('[data-improver-cancel]').addEventListener('click', () => {
      if (state.abortController) state.abortController.abort();
    });
  });
}

// ---------- Improver: AI ENHANCE ----------

function renderEnhanceView() {
  const imp = state.improver;
  const en = imp.enhance;
  if (en.result) {
    const original = el.promptInput.value.trim();
    el.improverBody.innerHTML = `
      <div class="space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="rounded-xl border border-slate-800 bg-[#090d14] p-3 space-y-2">
            <div class="text-[10px] font-mono-code text-slate-500 uppercase tracking-wider">Original (${original.length} chars)</div>
            <div class="text-[11px] text-slate-300 leading-relaxed whitespace-pre-wrap max-h-[42dvh] overflow-y-auto">${escapeHtml(original || '(empty)')}</div>
          </div>
          <div class="rounded-xl border border-cyan-500/35 bg-cyan-950/10 p-3 space-y-2">
            <div class="text-[10px] font-mono-code text-cyan-300 uppercase tracking-wider">Enhanced (${en.result.length} chars)</div>
            <div class="text-[11px] text-slate-100 leading-relaxed whitespace-pre-wrap max-h-[42dvh] overflow-y-auto">${escapeHtml(en.result)}</div>
          </div>
        </div>
        <div class="text-[10px] text-slate-500">Review carefully — "Use" replaces your prompt box, "Append" keeps your text and adds the brief after it.</div>
      </div>
    `;
    improverSetFooter(`
      <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
      <div class="flex items-center gap-2">
        <button type="button" data-enhance-append class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition">Append</button>
        <button type="button" data-enhance-use class="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition">Use New Prompt</button>
      </div>
    `, (foot) => {
      foot.querySelector('[data-improver-back]').addEventListener('click', () => {
        state.improver.view = 'hub';
        state.improver.enhance.result = '';
        renderImprover();
      });
      foot.querySelector('[data-enhance-use]').addEventListener('click', () => {
        el.promptInput.value = state.improver.enhance.result;
        state.userPrompt = el.promptInput.value;
        saveWorkspaceSnapshot();
        state.improver.enhance.result = '';
        state.improver.view = 'hub';
        closePromptImprover();
        showToast('Prompt replaced with the enhanced brief!', 'success');
      });
      foot.querySelector('[data-enhance-append]').addEventListener('click', () => {
        const cur = el.promptInput.value.trim();
        el.promptInput.value = cur ? `${cur}\n\n${state.improver.enhance.result}` : state.improver.enhance.result;
        state.userPrompt = el.promptInput.value;
        saveWorkspaceSnapshot();
        state.improver.enhance.result = '';
        state.improver.view = 'hub';
        closePromptImprover();
        showToast('Enhanced brief appended to your prompt!', 'success');
      });
    });
    return;
  }

  el.improverBody.innerHTML = `
    <div class="space-y-4 max-w-2xl">
      <div class="rounded-xl border border-cyan-500/30 bg-cyan-950/10 px-3.5 py-2.5 text-[11px] text-slate-300 leading-relaxed flex items-start gap-2.5">
        <i data-lucide="wand-2" class="w-4 h-4 text-cyan-300 shrink-0 mt-0.5"></i>
        <span>The AI rewrites your idea into a rich, specific build brief — informed by your idea AND your studio setup. Nothing changes until you approve it.</span>
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">Enrichment level</label>
        <div class="flex flex-wrap gap-1.5" id="enhanceLevelRow">
          ${[['light', 'Light polish'], ['standard', 'Standard expansion'], ['full', 'Full build brief']].map(([v, l]) => `<button type="button" data-enhance-level="${v}" class="improver-chip ${en.level === v ? 'is-on' : ''}">${l}</button>`).join('')}
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1">Voice</label>
        <div class="flex flex-wrap gap-1.5" id="enhanceToneRow">
          ${[['keep', 'Keep my words (enrich only)'], ['pro', 'Professional rewrite']].map(([v, l]) => `<button type="button" data-enhance-tone="${v}" class="improver-chip ${en.tone === v ? 'is-on' : ''}">${l}</button>`).join('')}
        </div>
      </div>
      <div class="rounded-xl border border-slate-800 bg-[#090d14] px-3.5 py-2.5">
        <div class="text-[10px] font-mono-code text-slate-500 uppercase tracking-wider mb-1">Working from your prompt (${el.promptInput.value.trim().length} chars)</div>
        <div class="text-[11px] text-slate-300 leading-relaxed">${el.promptInput.value.trim() ? escapeHtml(el.promptInput.value.trim().slice(0, 240)) + (el.promptInput.value.trim().length > 240 ? '…' : '') : '<span class="text-amber-300">Your prompt box is empty — write at least a rough line first.</span>'}</div>
      </div>
    </div>
  `;

  el.improverBody.querySelectorAll('[data-enhance-level]').forEach((chip) => {
    chip.addEventListener('click', () => { en.level = chip.dataset.enhanceLevel; renderImprover(); });
  });
  el.improverBody.querySelectorAll('[data-enhance-tone]').forEach((chip) => {
    chip.addEventListener('click', () => { en.tone = chip.dataset.enhanceTone; renderImprover(); });
  });

  improverSetFooter(`
    <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <button type="button" data-enhance-run class="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition" ${el.promptInput.value.trim() ? '' : 'disabled style="opacity:.45;cursor:not-allowed"'}>Enhance My Prompt</button>
  `, (foot) => {
    foot.querySelector('[data-improver-back]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
    foot.querySelector('[data-enhance-run]').addEventListener('click', runAiEnhance);
  });
}

async function runAiEnhance() {
  const imp = state.improver;
  const en = imp.enhance;

  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Add an API key first (top-right key button) to use AI Enhance.', 'warn');
    return;
  }

  en.loading = true;
  el.improverBody.innerHTML = `
    <div class="flex flex-col items-center justify-center gap-4 py-14 text-center">
      <div class="relative w-14 h-14">
        <div class="absolute inset-0 rounded-full border-2 border-cyan-500/25"></div>
        <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin"></div>
        <i data-lucide="wand-2" class="w-5 h-5 text-cyan-300 absolute inset-0 m-auto"></i>
      </div>
      <div>
        <div class="text-sm font-semibold text-slate-100">Rewriting your idea into a build brief…</div>
        <div class="text-[11px] text-slate-400 mt-1">Level: ${en.level} • Voice: ${en.tone === 'keep' ? 'your words' : 'professional'}</div>
      </div>
    </div>
  `;
  improverSetFooter(`
    <span class="text-[11px] text-slate-500">One API call from your key pool.</span>
    <button type="button" data-improver-cancel class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Cancel</button>
  `, (foot) => {
    foot.querySelector('[data-improver-cancel]').addEventListener('click', () => {
      if (state.abortController) state.abortController.abort();
    });
  });

  try {
    if (!state.isRunning) state.abortController = new AbortController();
    const cfg = state.studioConfig;
    const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
    const levelBrief = {
      light: 'Keep it compact: polish grammar and clarity, add at most 2 missing specifics.',
      standard: 'Expand into a clear build brief: 3–6 sentences covering goal, audience, core features, and feel.',
      full: 'Expand into a full build brief: 6–10 sentences covering goal, audience, core features, data, feel, and success criteria — dense but readable.'
    }[en.level];
    const toneBrief = en.tone === 'keep'
      ? 'Preserve the user\'s own wording wherever possible; enrich around it without rewriting their voice.'
      : 'Rewrite in crisp professional product language while keeping every intent.';

    const systemPrompt = 'You are a senior product brief writer. You rewrite rough app/game/tool ideas into specific, buildable briefs. You never add features the user did not imply, never ask questions, and never use placeholders.';
    const userPrompt = [
      `USER IDEA: "${el.promptInput.value.trim()}"`,
      '',
      `CONTEXT: This is a ${mode.label} (${mode.roleLens}). Their studio setup: ${compileFullBlueprintSummaryText().split('\n').slice(0, 8).join(' | ')}`,
      '',
      `TASK: ${levelBrief} ${toneBrief} Write plain paragraphs only — no bullet lists, no headings, no markdown. Output ONLY the brief text.`
    ].join('\n');

    const result = await callModelUtility(systemPrompt, userPrompt, 'AI Prompt Enhance');
    en.result = String(result || '').trim();
    if (!en.result) throw new Error('Empty response — try again.');
    en.loading = false;
    renderImprover();
  } catch (err) {
    en.loading = false;
    imp.view = 'enhance';
    renderImprover();
    if (err && err.name === 'AbortError') return;
    showToast(`Enhance failed: ${err.message || err}`, 'error');
  } finally {
    if (!state.isRunning) state.abortController = null;
  }
}

// ---------- Improver: CLARITY SCORE ----------

function runClarityChecks() {
  const text = el.promptInput.value.trim().toLowerCase();
  const checks = [
    { label: 'A concrete goal', ok: /\b(build|make|create|track|plan|play|design|generate|manage|practice)\w*/.test(text) && text.length >= 15, fix: 'Start with what it should DO — "Build a …"' },
    { label: 'Who it is for', ok: /\b(for|my |me|users?|players?|team|family|students?|kids?|friends?|beginners?|pros?)\b/.test(text), fix: 'Add one clause: "for …"' },
    { label: 'Features or specifics', ok: (text.match(/\b(with|and|including|plus)\b/g) || []).length >= 1 && text.split(/\s+/).length >= 15, fix: 'Name 1–3 concrete features ("with streaks, stats, and…")' },
    { label: 'Data / saving intent', ok: /\b(save|saved|local|offline|export|import|track|record|store|progress|score|history|backup)\b/.test(text), fix: 'Mention what happens to data (saved locally, exported, high scores…)' },
    { label: 'Look or feel', ok: /\b(dark|light|clean|cozy|neon|minimal|bold|calm|playful|premium|retro|color|colour|style|glass|mood)\b/.test(text), fix: 'One mood word ("cozy dark", "playful neon") — or rely on your Guider picks' },
    { label: 'Where it will be used', ok: /\b(phone|mobile|desktop|browser|tablet|laptop|screen|one-handed|kiosk|tv)\b/.test(text), fix: 'Say phone, desktop, or both' },
    { label: 'Constraints or anti-goals', ok: /\b(must|always|never|no |avoid|without|don't|dont)\b/.test(text), fix: 'Add a "must" or a "never" ("must work offline", "no logins")' },
    { label: 'The win condition', ok: /\b(so that|so i|to help|feel|enjoy|fun|faster|easier|relax|win|smile|proud)\b/.test(text), fix: 'Finish the sentence: "so that …"' }
  ];
  return checks;
}

function renderClarityView() {
  const checks = runClarityChecks();
  const passed = checks.filter((c) => c.ok).length;
  const pct = Math.round((passed / checks.length) * 100);
  const ringColor = pct >= 75 ? '#34d399' : pct >= 50 ? '#f59e0b' : '#fb7185';

  el.improverBody.innerHTML = `
    <div class="space-y-4 max-w-2xl">
      <div class="flex items-center gap-4 rounded-xl border border-slate-800 bg-[#090d14] p-3.5">
        <div class="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 36 36" class="w-16 h-16 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1e293b" stroke-width="3.5"></circle>
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="${ringColor}" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="${Math.min(97.4, (pct / 100) * 97.4)} 97.4"></circle>
          </svg>
          <span class="absolute inset-0 flex items-center justify-center text-sm font-bold" style="color:${ringColor}">${pct}%</span>
        </div>
        <div class="min-w-0">
          <div class="text-sm font-bold text-slate-100">${passed} of ${checks.length} clarity signals found</div>
          <div class="text-[11px] text-slate-400 mt-0.5 leading-relaxed">${pct >= 75 ? 'Excellent — this prompt gives the 50 steps a lot to work with.' : pct >= 50 ? 'Good start — a few fixes below would sharpen it a lot.' : 'Worth strengthening — the missing pieces below are exactly what the AI would have to guess.'}</div>
        </div>
      </div>
      <div class="space-y-2">
        ${checks.map((c) => `
          <div class="flex items-start justify-between gap-2 rounded-lg border ${c.ok ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-slate-800 bg-[#090d14]'} px-3 py-2">
            <div class="flex items-start gap-2.5 min-w-0">
              <i data-lucide="${c.ok ? 'check-circle-2' : 'circle'}" class="w-4 h-4 mt-0.5 shrink-0 ${c.ok ? 'text-emerald-400' : 'text-slate-500'}"></i>
              <div class="min-w-0">
                <div class="text-[11px] font-medium ${c.ok ? 'text-emerald-200' : 'text-slate-200'}">${escapeHtml(c.label)}</div>
                ${c.ok ? '' : `<div class="text-[10px] text-slate-500 mt-0.5">Missing — ${escapeHtml(c.fix)}</div>`}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  improverSetFooter(`
    <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <div class="flex items-center gap-2">
      <button type="button" data-clarity-recheck class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Re-check</button>
      <button type="button" data-clarity-interview class="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition">Interview Me Instead</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-improver-back]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
    foot.querySelector('[data-clarity-recheck]').addEventListener('click', renderImprover);
    foot.querySelector('[data-clarity-interview]').addEventListener('click', () => {
      const imp = state.improver;
      imp.count = 30;
      imp.view = 'precheck';
      renderImprover();
    });
  });
}

// ---------- Improver: IDEA SPARKERS ----------

const IMPROVER_SPARKERS = {
  app: [
    { title: 'Streak Flames', desc: 'A gentle streak counter that celebrates consecutive-day use.', add: 'Add a streak counter that celebrates consecutive-day use with a warm glow.' },
    { title: 'Weekly Digest Card', desc: 'An auto-generated "this week in review" summary card.', add: 'Add an auto-generated weekly digest card summarizing activity and progress.' },
    { title: 'Quick-Capture Bar', desc: 'A always-visible input for capturing in one keystroke.', add: 'Add an always-visible quick-capture bar that accepts entries in a single line.' },
    { title: 'Smart Suggestions', desc: 'The app quietly suggests the next most useful action.', add: 'Add smart next-action suggestions that quietly guide users to the most useful step.' },
    { title: 'Milestone Celebrations', desc: 'Tiny confetti at 10th, 50th, 100th item.', add: 'Add small milestone celebrations at the 10th, 50th, and 100th item with a confetti burst.' },
    { title: 'Focus Mode', desc: 'One-tap zen mode that hides everything but the main task.', add: 'Add a one-tap focus mode that hides all panels except the primary task.' },
    { title: 'Time-Travel Stats', desc: 'Compare this week vs last week at a glance.', add: 'Add a this-week vs last-week comparison view for instant progress context.' },
    { title: 'Undo Everything', desc: 'A 10-step history timeline with previews.', add: 'Add a 10-step visual undo history timeline with previews of each state.' },
    { title: 'Ambient Idle', desc: 'A subtle animated hint when the app sits idle.', add: 'Add a subtle animated idle hint that demonstrates the next possible action when the app sits untouched.' }
  ],
  tool: [
    { title: 'Preset Remix', desc: 'Every built-in preset is editable and shareable.', add: 'Make every built-in preset editable and shareable as a compact code.' },
    { title: 'Live Formula Hints', desc: 'Plain-English explanation of what each control does.', add: 'Add live plain-English hints explaining what each control changes as it is dragged.' },
    { title: 'Compare Snapshots', desc: 'Pin two results side by side from different settings.', add: 'Add the ability to pin two result snapshots side-by-side from different settings.' },
    { title: 'One-Key Share', desc: 'Encodes the entire current setup in a shareable link.', add: 'Add a one-key share link that encodes the entire current setup.' },
    { title: 'Smart Defaults Memory', desc: 'Remembers your last-used settings per visit type.', add: 'Add smart defaults that remember the last-used settings and offer them on load.' },
    { title: 'Precision Nudge', desc: 'Arrow keys fine-tune any value by tiny steps.', add: 'Add keyboard nudging so arrow keys fine-tune any value in tiny precise steps.' },
    { title: 'Mini History Rail', desc: 'Recent results as tappable thumbnails.', add: 'Add a mini history rail of recent results as tappable thumbnails.' },
    { title: 'Pro Tips Rotator', desc: 'A tiny rotating tip teaches a power feature.', add: 'Add a rotating pro-tip line that teaches one power feature per session.' },
    { title: 'Export Perfection', desc: 'Pixel-perfect export presets for common uses.', add: 'Add pixel-perfect export presets for the most common use cases.' }
  ],
  game: [
    { title: 'Ghost Replay', desc: 'Race against your own best run.', add: 'Add a ghost replay of the player\'s best run to race against.' },
    { title: 'Near-Miss Bonus', desc: 'Rewards for razor-thin dodges.', add: 'Add a near-miss bonus that rewards razor-thin dodges with extra points.' },
    { title: 'Dynamic Music Layers', desc: 'Music intensity grows with your combo.', add: 'Add dynamic music layers where intensity grows with the combo multiplier.' },
    { title: 'Daily Seed Board', desc: 'Same board for everyone, once a day.', add: 'Add a daily challenge with one shared seed board for all players.' },
    { title: 'Fail-Friendly Retry', desc: 'One-tap retry with instant load.', add: 'Make retry instant with zero loading between rounds.' },
    { title: 'Combo Shield', desc: 'Long streaks earn one protective save.', add: 'Add a combo shield that grants one protective save at high streaks.' },
    { title: 'Boss Moods', desc: 'Bosses telegraph attacks with color cues.', add: 'Make bosses telegraph attacks with clear color and audio cues for fair play.' },
    { title: 'Photo Finish', desc: 'Auto-captures the final score moment as a card.', add: 'Auto-capture the final score moment as a shareable results card.' },
    { title: 'Chill & Rush Modes', desc: 'Two speeds of the same core loop.', add: 'Add both a Chill and a Rush mode of the same core loop for different moods.' }
  ],
  experimental: [
    { title: 'Palette Mutation', desc: 'Offspring palettes from your current favorite.', add: 'Add palette mutation that generates offspring palettes from the current one.' },
    { title: 'Flow Recorder', desc: 'Records 10 seconds of interaction as a looping GIF-like replay.', add: 'Add a flow recorder that captures 10 seconds of interaction as a looping replay.' },
    { title: 'Gravity Wells', desc: 'Drop temporary attractors mid-flow.', add: 'Add draggable gravity wells that pull the simulation toward them.' },
    { title: 'Symmetry Mirror', desc: 'Mirror the canvas 2/4/6 ways for instant mandalas.', add: 'Add a symmetry mirror mode (2/4/6-way) for instant mandala patterns.' },
    { title: 'Slow-Time Brush', desc: 'Hold to slow time and paint precisely.', add: 'Add a slow-time brush that lets users paint precisely while motion freezes.' },
    { title: 'Seed Explorer', desc: 'A filmstrip of neighboring seeds to hop between.', add: 'Add a seed explorer filmstrip that lets users hop between neighboring variations.' },
    { title: 'Audio Bloom', desc: 'Every visual burst triggers a soft harmonic tone.', add: 'Make every visual burst trigger a soft harmonic tone so the art composes its own music.' },
    { title: 'Zen Hideaway', desc: 'One key removes all UI for pure immersion.', add: 'Add a one-key zen mode that removes all UI for pure immersion.' },
    { title: 'Print Poster Mode', desc: 'Export at poster resolution with clean margins.', add: 'Add a poster export mode at high resolution with clean margins.' }
  ],
  free: [
    { title: 'Living Home Screen', desc: 'The hub subtly reflects your progress.', add: 'Make the home screen subtly react to and reflect the user\'s progress.' },
    { title: 'Seasonal Surprises', desc: 'Festive one-offs appear on special dates.', add: 'Add seasonal surprises that appear on special dates.' },
    { title: 'Companion Character', desc: 'A tiny guide that reacts to your actions.', add: 'Add a tiny companion character that reacts to user actions with charm.' },
    { title: 'Chapter Unlocks', desc: 'New areas unlock through real usage.', add: 'Add chapter unlocks where new areas open through real usage.' },
    { title: 'Shared Ritual Link', desc: 'Do a session with a friend via link.', add: 'Add a shared ritual link that lets two people do a session together.' },
    { title: 'Echoes', desc: 'Past sessions leave gentle visible traces.', add: 'Add gentle visible echoes of past sessions that accumulate over time.' },
    { title: 'Choice Weather', desc: 'A mood system that colors the world by choices.', add: 'Add a mood weather system that colors the world based on user choices.' },
    { title: 'Micro-Story Cards', desc: 'Tiny narrative snippets appear at milestones.', add: 'Add micro-story cards that reveal tiny narrative snippets at milestones.' },
    { title: 'The Button That Should Not Exist', desc: 'One mysterious button that does something delightful.', add: 'Add one mysterious unlabeled button that does something delightful when pressed.' }
  ]
};

function renderSparkersView() {
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const pack = IMPROVER_SPARKERS[cfg.projectType] || IMPROVER_SPARKERS.app;

  el.improverBody.innerHTML = `
    <div class="space-y-3">
      <div class="rounded-xl border border-emerald-500/30 bg-emerald-950/10 px-3.5 py-2.5 text-[11px] text-slate-300 leading-relaxed flex items-start gap-2.5">
        <i data-lucide="lightbulb" class="w-4 h-4 text-emerald-300 shrink-0 mt-0.5"></i>
        <span>Adaptive ideas for your <strong class="text-emerald-200">${escapeHtml(mode.label)}</strong>. Tap the plus on anything you want — it gets written into your prompt as a one-line feature sentence.</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5" id="sparkerGrid">
        ${pack.map((sp, i) => `
          <div class="sparker-card">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-100">${escapeHtml(sp.title)}</div>
                <p class="text-[11px] text-slate-400 mt-0.5 leading-relaxed">${escapeHtml(sp.desc)}</p>
              </div>
              <button type="button" data-sparker-add="${i}" class="sparker-add-btn shrink-0" title="Add to prompt"><i data-lucide="plus" class="w-4 h-4"></i></button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  improverSetFooter(`
    <button type="button" data-improver-back class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <span class="text-[11px] text-slate-500">Add as many as you like — then close and run when ready.</span>
  `, (foot) => {
    foot.querySelector('[data-improver-back]').addEventListener('click', () => {
      state.improver.view = 'hub';
      renderImprover();
    });
  });

  el.improverBody.querySelectorAll('[data-sparker-add]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sp = pack[Number(btn.dataset.sparkerAdd)];
      const cur = el.promptInput.value.trim();
      el.promptInput.value = cur ? `${cur}\n- ${sp.add}` : `Build an app. ${sp.add}`;
      state.userPrompt = el.promptInput.value;
      saveWorkspaceSnapshot();
      btn.classList.add('is-added');
      btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
      refreshIcons();
      showToast(`Added: ${sp.title}`, 'success');
    });
  });
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
  const totalSteps = getActiveSteps().length;
  const doneCount = Object.keys(getActiveCompleted()).length;
  const elapsedMs = state.runStartedAt ? Math.max(0, Date.now() - state.runStartedAt) : 0;
  const remainingSteps = Math.max(0, totalSteps - doneCount);
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
  const totalSteps = getActiveSteps().length;
  const pct = Math.round((timing.doneCount / totalSteps) * 100);
  el.notifProgressText.textContent = `${timing.doneCount}/${totalSteps} (${pct}%)`;
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
  const totalSteps = getActiveSteps().length;
  const doneCount = Object.keys(getActiveCompleted()).length;
  el.stepProgressText.textContent = `${doneCount} / ${totalSteps}`;
  el.overallProgressBar.style.width = `${(doneCount / totalSteps) * 100}%`;
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
  if (el.openImproverBtn) {
    el.openImproverBtn.disabled = state.isRunning;
    el.openImproverBtn.title = state.isRunning ? 'Pause the pipeline before editing the prompt' : 'Improve & uncover your idea — questions, AI help, sparkers & more';
  }

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

  const activeStepsArr = getActiveSteps();
  const activeCompletedMap = getActiveCompleted();
  const filtered = activeStepsArr.filter((step) =>
    state.activeFilter === 'all' ? true : step.stage === Number(state.activeFilter)
  );

  el.checklistContainer.innerHTML = '';

  filtered.forEach((step) => {
    const doneInfo = activeCompletedMap[step.num];
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
    preview: 'Download page'
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
    return '<!DOCTYPE html><html><body style="font-family:sans-serif;background:#0f172a;color:#94a3b8;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px;"><div><h2 style="color:#e2e8f0;margin-bottom:8px;">Live Preview Ready</h2><p style="font-size:14px;">Use the Paperclip Prompt Guider or Customize Options &amp; run the 50-point pipeline (or paste code into the tabs) to launch the app here.</p></div></body></html>';
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

async function waitForOnlineIfOffline(stepObj, quiet = false) {
  if (typeof navigator === 'undefined' || navigator.onLine) return;

  state.isOfflineWaiting = true;
  updateNetworkUI();
  if (!quiet) {
    updateProgressUI(stepObj.num, true);
    renderChecklist(stepObj.num, true);
  }

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

// Quiet wrapper for studio-internal AI calls (Prompt Improver etc.) —
// shares the same key pool, rotation, cooldown and retry engine, but never
// flashes the pipeline progress UI or OS notifications.
async function callModelUtility(systemPrompt, userPrompt, label) {
  const pseudoStep = { num: 0, stage: 0, stageName: 'Prompt Studio', section: 'Prompt Improver', role: label };
  try {
    return await callPrimaryModelRespectful(systemPrompt, userPrompt, pseudoStep, { quiet: true, statusLabel: label });
  } finally {
    // Leave no stale studio label in the pipeline status line
    if (!state.isRunning) {
      el.pipelineStatusText.textContent = 'Ready — Choose your options & describe your idea';
    }
  }
}

async function callPrimaryModelRespectful(systemPrompt, userPrompt, stepObj, opts = {}) {
  const quiet = Boolean(opts.quiet);
  const statusLabel = opts.statusLabel || 'AI request';
  let transientAttempt = 0;
  let forceOmitThinking = false;

  while (true) {
    if (state.abortController?.signal.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }

    await waitForOnlineIfOffline(stepObj, quiet);

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

      if (!quiet) {
        updateProgressUI(stepObj.num, true);
        renderChecklist(stepObj.num, true);
      }
      showToast(`All ${stats.limitedCount} API keys cooling. Auto-resuming at ${resetClock}.`, 'warn');

      await sleepWithAbort(
        waitMs,
        state.abortController?.signal,
        (rem) => {
          const remFormatted = formatDurationCompact(rem);
          const msg = `All ${stats.limitedCount}/${stats.total} keys cooling — resuming Step ${stepObj.num}/50 in ${remFormatted}`;
          el.pipelineStatusText.textContent = msg;
          if (!quiet) {
            updateLiveNotificationBar({
              mode: 'frozen',
              title: `Waiting on Step ${stepObj.num}/50`,
              detail: msg,
              stepNum: stepObj.num
            });
          }
        },
        wakePromise
      );

      state.isFrozen = false;
      state.freezeWakeResolver = null;
      refreshExpiredCooldowns();
      updateKeyPoolUI();
      if (!quiet) {
        updateProgressUI(stepObj.num, false);
        renderChecklist(stepObj.num, false);
      }
      continue;
    }

    const { keyObj, index: keyIdx } = picked;
    state.sessionCalls += 1;
    keyObj.calls = (keyObj.calls || 0) + 1;
    if (!quiet) updateProgressUI(stepObj.num, false);
    updateKeyPoolUI();

    const stepMsg = `Step ${stepObj.num}/50 (${stepObj.stageName}): ${stepObj.role}`;
    if (quiet) {
      el.pipelineStatusText.textContent = `${statusLabel} (${keyObj.label})...`;
    } else {
      el.pipelineStatusText.textContent = `${stepMsg} [${keyObj.label}]...`;
      updateLiveNotificationBar({
        mode: 'running',
        title: `Step ${stepObj.num}/50 • ${stepObj.stageName}`,
        detail: `${stepObj.role} (${keyObj.label})`,
        stepNum: stepObj.num
      });
    }

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
      if (!quiet) {
        updateProgressUI(stepObj.num, true);
        renderChecklist(stepObj.num, true);
      }

      await sleepWithAbort(backoffSec * 1000, state.abortController?.signal, (rem) => {
        const msg = `HTTP ${response.status} on Step ${stepObj.num}/50 — retry #${transientAttempt} in ${formatDurationCompact(rem)}...`;
        el.pipelineStatusText.textContent = msg;
        if (!quiet) {
          updateLiveNotificationBar({
            mode: 'running',
            title: `Step ${stepObj.num}/50 • Retry`,
            detail: msg,
            stepNum: stepObj.num
          });
        }
      });

      if (!quiet) {
        updateProgressUI(stepObj.num, false);
        renderChecklist(stepObj.num, false);
      }

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
      if (!quiet) {
        updateProgressUI(stepObj.num, true);
        renderChecklist(stepObj.num, true);
      }

      const networkWake = new Promise((res) => { state.networkWakeResolver = res; });
      state.isOfflineWaiting = true;

      try {
        await sleepWithAbort(
          backoffSec * 1000,
          state.abortController?.signal,
          (rem) => {
            const msg = `Network issue on Step ${stepObj.num}/50 — retry #${transientAttempt} in ${formatDurationCompact(rem)}...`;
            el.pipelineStatusText.textContent = msg;
            if (!quiet) {
              updateLiveNotificationBar({
                mode: 'running',
                title: `Step ${stepObj.num}/50 • Network Retry`,
                detail: msg,
                stepNum: stepObj.num
              });
            }
          },
          networkWake
        );
      } finally {
        state.isOfflineWaiting = false;
        state.networkWakeResolver = null;
      }

      if (!quiet) {
        updateProgressUI(stepObj.num, false);
        renderChecklist(stepObj.num, false);
      }
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
      `4. Intertwine EVERY active Pre-Prompt Studio option (Layout, Design Style, Color Mood, Typography, Elements, Lighting, HTML5/CSS3/JS capabilities, Mode Features, and Sub-Menu settings) seamlessly into your implementation.\n` +
      `5. Output ONLY raw, complete, production-ready ${targetFilename} code—zero markdown fences, zero commentary, zero TODOs, zero "// ... rest of code" shortcuts.\n` +
      `6. ${hasLibs ? 'Cleanly integrate ONLY the selected CDN libraries specified in the Blueprint with defensive checks.' : 'Guarantee 100% standalone zero-dependency Vanilla browser execution.'}\n` +
      `7. Quality Gate (definition of done): ${stepObj.qualityGate}\n` +
      `8. Mode-Adaptive Focus: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}`;

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
      `- Quality Gate (definition of done): ${stepObj.qualityGate}\n` +
      `- Mode-Adaptive Focus: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}\n` +
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
    `- Quality Gate (your definition of done): ${stepObj.qualityGate}\n` +
    `- Mode-Adaptive Focus for this exact build: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}\n` +
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
    `- Quality Gate (must pass before replying): ${stepObj.qualityGate}\n` +
    `- Mode-Adaptive Focus for this build: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}\n` +
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

  setPipelineMode('build');
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
// GITHUB UPDATE CHECKER — for THIS app (installed from a GitHub repo)
// Checks the repo for a newer published version and refreshes the
// installed PWA in place. Set the repo in Settings.
// =========================================================================

const APP_VERSION = '7.0.0';

function parseGithubRepoInput(raw, branchHint) {
  let s = String(raw || '').trim();
  if (!s) return null;
  s = s.replace(/\.git$/i, '');
  s = s.replace(/^https?:\/\//i, '').replace(/^www\./i, '');

  let m = s.match(/^github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/(?:tree|blob)\/([A-Za-z0-9_.-]+))?/i);
  if (m) return { owner: m[1], repo: m[2], branch: m[3] || branchHint || null };

  m = s.match(/^([A-Za-z0-9_.-]+)\.github\.io\/([A-Za-z0-9_.-]+)\/?$/i);
  if (m) return { owner: m[1], repo: m[2], branch: branchHint || null };

  m = s.match(/^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\s*(?:on\s+)?([A-Za-z0-9_.-]+)?$/);
  if (m) return { owner: m[1], repo: m[2], branch: m[3] || branchHint || null };

  return null;
}

function compareVersions(a, b) {
  const norm = (v) => String(v || '').replace(/[^0-9.]/g, '').split('.').map((n) => parseInt(n, 10) || 0);
  const av = norm(a);
  const bv = norm(b);
  const len = Math.max(av.length, bv.length);
  for (let i = 0; i < len; i++) {
    const x = av[i] || 0;
    const y = bv[i] || 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}

async function fetchWithTimeout(url, ms, signal) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  const onOuterAbort = () => ctrl.abort();
  if (signal) {
    if (signal.aborted) ctrl.abort();
    else signal.addEventListener('abort', onOuterAbort, { once: true });
  }
  try {
    return await fetch(url, { signal: ctrl.signal, cache: 'no-store', headers: { Accept: 'application/json, text/plain, */*' } });
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onOuterAbort);
  }
}

async function fetchLatestAppVersion(repoInfo, signal) {
  const branches = repoInfo.branch ? [repoInfo.branch] : ['main', 'master'];
  const notes = [];

  // 1) manifest.json version fields (works for any plain repo)
  for (const br of branches) {
    try {
      const resp = await fetchWithTimeout(`https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/${br}/manifest.json?t=${Date.now()}`, 12000, signal);
      if (!resp.ok) continue;
      const json = await resp.json();
      const v = json.version || json.version_name || null;
      if (v) {
        return { version: String(v), notes: '', source: `manifest.json (${br})` };
      }
    } catch (_) {}
  }

  // 2) version.json { version, notes }
  for (const br of branches) {
    try {
      const resp = await fetchWithTimeout(`https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/${br}/version.json?t=${Date.now()}`, 12000, signal);
      if (!resp.ok) continue;
      const json = await resp.json();
      if (json.version) {
        return { version: String(json.version), notes: String(json.notes || '').slice(0, 600), source: `version.json (${br})` };
      }
    } catch (_) {}
  }

  // 3) GitHub latest release tag
  try {
    const resp = await fetchWithTimeout(`https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/releases/latest`, 12000, signal);
    if (resp.ok) {
      const json = await resp.json();
      if (json.tag_name) {
        return { version: String(json.tag_name).replace(/^v/i, ''), notes: String(json.body || json.name || '').slice(0, 600), source: 'GitHub latest release' };
      }
    }
  } catch (_) {}

  if (notes.length) return { version: null, notes: notes.join(' '), source: '' };
  return null;
}

async function checkForAppUpdates({ silent = false } = {}) {
  if (!state.githubRepo) {
    state.updateStatus = { status: 'no-repo', current: APP_VERSION, checkedAt: new Date().toISOString() };
    renderUpdateSection();
    if (!silent) showToast('Add your GitHub repo (owner/repo) in Settings first.', 'warn');
    return state.updateStatus;
  }

  const repoInfo = parseGithubRepoInput(state.githubRepo);
  if (!repoInfo) {
    state.updateStatus = { status: 'invalid-repo', current: APP_VERSION, checkedAt: new Date().toISOString() };
    renderUpdateSection();
    if (!silent) showToast('Could not read that repo — use "owner/repo" or a GitHub URL.', 'error');
    return state.updateStatus;
  }

  if (!silent) {
    renderUpdateSection({ busy: true });
  }

  try {
    const result = await fetchLatestAppVersion(repoInfo);
    if (!result || !result.version) {
      state.updateStatus = { status: 'not-found', current: APP_VERSION, checkedAt: new Date().toISOString() };
      renderUpdateSection();
      if (!silent) showToast('No version info found in that repo (looked for manifest.json, version.json, and releases).', 'warn');
      return state.updateStatus;
    }

    const cmp = compareVersions(result.version, APP_VERSION);
    state.updateStatus = {
      status: cmp > 0 ? 'update' : 'latest',
      current: APP_VERSION,
      latest: result.version,
      notes: result.notes || '',
      source: result.source,
      checkedAt: new Date().toISOString()
    };
  } catch (err) {
    state.updateStatus = { status: 'error', current: APP_VERSION, message: err?.message || 'network error', checkedAt: new Date().toISOString() };
  }

  safeSet('wbs_last_update_result', JSON.stringify(state.updateStatus));
  renderUpdateSection();

  if (!silent) {
    if (state.updateStatus.status === 'update') {
      showToast(`Update available: v${APP_VERSION} → v${state.updateStatus.latest}!`, 'success');
    } else if (state.updateStatus.status === 'latest') {
      showToast(`You are up to date (v${APP_VERSION}).`, 'info');
    } else if (state.updateStatus.status === 'error') {
      showToast('Update check failed — check the repo or your connection.', 'error');
    }
  } else if (state.updateStatus.status === 'update') {
    showToast(`Update available: v${APP_VERSION} → v${state.updateStatus.latest}. Check Settings to install.`, 'success');
  }
  return state.updateStatus;
}

async function applyAppUpdateNow() {
  showToast('Fetching the latest version and refreshing…', 'info');
  try {
    if (state.swRegistration && typeof state.swRegistration.update === 'function') {
      try { await state.swRegistration.update(); } catch (_) {}
    }
    if (window.caches) {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (_) {}
    }
    if (navigator.serviceWorker) {
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      } catch (_) {}
    }
  } catch (_) {}
  saveWorkspaceSnapshot();
  saveSettingsSnapshot();
  setTimeout(() => window.location.reload(true), 350);
}

function renderUpdateSection(opts = {}) {
  const versionChip = document.getElementById('appVersionChip');
  if (versionChip) versionChip.textContent = `v${APP_VERSION}`;
  if (!el.updateStatusLine) return;
  const st = state.updateStatus;
  const busy = Boolean(opts.busy);

  if (el.updateDot) {
    el.updateDot.classList.toggle('hidden', !(st && st.status === 'update'));
  }
  if (el.applyUpdateBtn) {
    el.applyUpdateBtn.classList.toggle('hidden', !(st && st.status === 'update'));
  }
  if (el.checkUpdatesBtn) {
    el.checkUpdatesBtn.disabled = busy;
    el.checkUpdatesBtn.textContent = busy ? 'Checking…' : 'Check for Updates';
    el.checkUpdatesBtn.style.opacity = busy ? '.6' : '';
  }
  if (!el.updateRepoInput) return;
  if (document.activeElement !== el.updateRepoInput) el.updateRepoInput.value = state.githubRepo || '';
  if (el.autoCheckUpdatesToggle) el.autoCheckUpdatesToggle.checked = state.autoCheckUpdates;
  if (el.updateBranchInput && document.activeElement !== el.updateBranchInput) {
    const parsed = state.githubRepo ? parseGithubRepoInput(state.githubRepo) : null;
    el.updateBranchInput.value = (parsed && parsed.branch) || '';
  }

  const checkedAt = st?.checkedAt ? new Date(st.checkedAt).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
  let text = '';
  let cls = 'text-slate-400';
  if (busy) {
    text = 'Checking your GitHub repo for a newer version…';
    cls = 'text-cyan-300';
  } else if (!st) {
    text = `Current version: v${APP_VERSION}. Add your repo and check for updates.`;
  } else if (st.status === 'no-repo') {
    text = `Current version: v${APP_VERSION}. No repo configured yet.`;
  } else if (st.status === 'invalid-repo') {
    text = 'That repo text could not be read — use "owner/repo" or a GitHub URL.';
    cls = 'text-rose-300';
  } else if (st.status === 'not-found') {
    text = `No version info found (looked for manifest.json, version.json, releases). Current: v${APP_VERSION}.`;
    cls = 'text-amber-300';
  } else if (st.status === 'error') {
    text = `Check failed: ${st.message || 'network error'}. Current: v${APP_VERSION}.`;
    cls = 'text-rose-300';
  } else if (st.status === 'update') {
    text = `Update available: v${APP_VERSION} → v${st.latest}${st.source ? ` (${st.source})` : ''}${checkedAt ? ` • checked ${checkedAt}` : ''}`;
    cls = 'text-emerald-300';
  } else if (st.status === 'latest') {
    text = `You are up to date — v${APP_VERSION}${st.latest ? ` (repo: v${st.latest})` : ''}${checkedAt ? ` • checked ${checkedAt}` : ''}`;
    cls = 'text-emerald-300';
  }
  el.updateStatusLine.textContent = text;
  el.updateStatusLine.className = `text-[11px] leading-relaxed ${cls}`;
}

async function initUpdateChecker() {
  state.githubRepo = safeGet('wbs_github_repo', '') || '';
  state.autoCheckUpdates = safeGet('wbs_auto_check_updates', '1') !== '0';
  try {
    const cached = JSON.parse(safeGet('wbs_last_update_result', 'null'));
    if (cached && cached.status) state.updateStatus = cached;
  } catch (_) {}

  renderUpdateSection();

  const lastCheckStr = safeGet('wbs_last_update_check', '');
  const lastCheckMs = Number(lastCheckStr) || 0;
  const dayMs = 24 * 3600 * 1000;
  if (state.autoCheckUpdates && state.githubRepo && Date.now() - lastCheckMs > dayMs) {
    safeSet('wbs_last_update_check', String(Date.now()));
    setTimeout(() => checkForAppUpdates({ silent: true }), 2500);
  }
}

// =========================================================================
// VERSION SYSTEM — V1 (original build) / V2+ (updates, polish, bug fixes,
// uploads). Every run of the Update Pipeline, Design Polish or Bug Fix
// creates a NEW version tab; previous versions stay safe and accessible.
// =========================================================================
function sanitizeVersionFolder(label) {
  return String(label || 'version').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'version';
}

function ensureVersionSystem() {
  if (!Array.isArray(state.versions)) state.versions = [];
  if (state.versions.length === 0) {
    state.versions.push({
      id: 'v1',
      label: 'V1 • Original',
      source: 'build',
      createdAt: new Date().toISOString(),
      notes: state.notesText || '',
      html: state.htmlCode || '',
      css: state.cssCode || '',
      js: state.jsCode || ''
    });
  }
  if (!state.versions.find((v) => v.id === state.activeVersionId)) {
    state.activeVersionId = state.versions[0].id;
  }
}

function getCurrentVersion() {
  ensureVersionSystem();
  return state.versions.find((v) => v.id === state.activeVersionId) || state.versions[0];
}

function syncActiveVersionFromEditors() {
  if (!Array.isArray(state.versions) || state.versions.length === 0) return;
  const cur = state.versions.find((v) => v.id === state.activeVersionId);
  if (!cur) return;
  cur.notes = state.notesText || '';
  cur.html = state.htmlCode || '';
  cur.css = state.cssCode || '';
  cur.js = state.jsCode || '';
  cur.editedAt = new Date().toISOString();
}

let versionPersistTimer = null;
function schedulePersistVersions() {
  if (versionPersistTimer) return;
  versionPersistTimer = setTimeout(() => {
    versionPersistTimer = null;
    persistVersions();
  }, 1200);
}

function persistVersions() {
  try {
    safeSet('wbs_versions', JSON.stringify(state.versions || []));
    safeSet('wbs_active_version', state.activeVersionId || 'v1');
  } catch (_) {
    // Quota exceeded — versions stay safe in memory for this session.
  }
}

function loadVersions() {
  try {
    const raw = safeGet('wbs_versions', '[]');
    const parsed = JSON.parse(raw || '[]');
    if (Array.isArray(parsed) && parsed.length > 0 && parsed[0] && typeof parsed[0].id === 'string') {
      state.versions = parsed;
      state.activeVersionId = safeGet('wbs_active_version', parsed[0].id);
      if (!state.versions.find((v) => v.id === state.activeVersionId)) {
        state.activeVersionId = state.versions[0].id;
      }
      return;
    }
  } catch (_) {}
  ensureVersionSystem();
}

function createVersion(label, files, notes, source = 'manual', activate = true) {
  ensureVersionSystem();
  syncActiveVersionFromEditors();
  const n = state.versions.length + 1;
  const version = {
    id: `v${Date.now().toString(36)}${Math.floor(Math.random() * 1000)}`,
    label: label || `V${n}`,
    source,
    createdAt: new Date().toISOString(),
    notes: notes || '',
    html: (files && files.html) || '',
    css: (files && files.css) || '',
    js: (files && files.js) || ''
  };
  state.versions.push(version);
  if (activate) {
    state.activeVersionId = version.id;
    state.notesText = version.notes;
    state.htmlCode = version.html;
    state.cssCode = version.css;
    state.jsCode = version.js;
    updateEditorsAndBadges();
  }
  persistVersions();
  renderVersionStrip();
  return version;
}

function switchVersion(versionId) {
  if (state.isRunning) {
    showToast('Pause the running pipeline before switching versions.', 'warn');
    return;
  }
  ensureVersionSystem();
  const target = state.versions.find((v) => v.id === versionId);
  if (!target || versionId === state.activeVersionId) return;
  syncActiveVersionFromEditors();
  state.activeVersionId = versionId;
  state.notesText = target.notes || '';
  state.htmlCode = target.html || '';
  state.cssCode = target.css || '';
  state.jsCode = target.js || '';
  persistVersions();
  renderVersionStrip();
  updateEditorsAndBadges();
  saveWorkspaceSnapshot();
  renderLivePreview();
  showToast(`Now viewing ${target.label} — this is the active version used by Preview, downloads and the next update run.`, 'success');
}

function deleteVersion(versionId) {
  if (state.isRunning) {
    showToast('Pause the running pipeline before deleting versions.', 'warn');
    return;
  }
  ensureVersionSystem();
  if (state.versions.length <= 1) {
    showToast('The last remaining version cannot be deleted.', 'warn');
    return;
  }
  const idx = state.versions.findIndex((v) => v.id === versionId);
  if (idx === -1) return;
  if (versionId === state.activeVersionId) {
    showToast('Switch to another version first — the active one is protected.', 'warn');
    return;
  }
  const label = state.versions[idx].label;
  state.versions.splice(idx, 1);
  persistVersions();
  renderVersionStrip();
  showToast(`Deleted ${label}.`, 'info');
}

function renderVersionStrip() {
  if (!el.versionChips) return;
  ensureVersionSystem();
  el.versionChips.innerHTML = '';
  state.versions.forEach((v) => {
    const isActive = v.id === state.activeVersionId;
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `ver-chip${isActive ? ' is-active' : ''}`;
    const size = formatCompactChars((v.html || '').length + (v.css || '').length + (v.js || '').length);
    chip.innerHTML = `
      <span class="flex items-center gap-1 min-w-0">
        <i data-lucide="${v.source === 'update' ? 'rocket' : v.source === 'polish' ? 'sparkles' : v.source === 'bugfix' ? 'bug' : v.source === 'upload' ? 'upload' : 'box'}" class="w-3 h-3 shrink-0"></i>
        <span class="truncate max-w-[9rem]">${escapeHtml(v.label)}</span>
        <span class="font-mono-code text-[9px] opacity-70 shrink-0">${size}</span>
      </span>
      <span class="flex items-center gap-1 shrink-0">
        ${isActive ? '<span class="px-1 rounded text-[8px] font-bold bg-white/15">ACTIVE</span>' : ''}
      </span>
    `;
    chip.title = `${v.label} — created ${new Date(v.createdAt).toLocaleString()}\nClick to make this the active version (used by Preview, downloads & the next update run).`;
    chip.addEventListener('click', () => switchVersion(v.id));
    el.versionChips.appendChild(chip);
  });
  if (el.versionStrip) {
    el.versionStrip.classList.toggle('hidden', state.versions.length <= 1);
  }
  refreshIcons();
}

function downloadVersionBundle(version) {
  const files = [
    { name: 'index.html', content: version.html },
    { name: 'style.css', content: version.css },
    { name: 'script.js', content: version.js },
    { name: 'notes.txt', content: version.notes }
  ].filter((f) => Boolean(f.content && f.content.trim().length > 0));
  if (files.length === 0) {
    showToast(`${version.label} has no files yet.`, 'warn');
    return;
  }
  triggerDownloadBlob(`${sanitizeVersionFolder(version.label)}.zip`, createZipBlob(files));
  showToast(`Downloaded ${version.label} as a ZIP (${files.length} files).`, 'success');
}

function downloadAllWithVersions() {
  ensureVersionSystem();
  syncActiveVersionFromEditors();
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

  // Include every other saved version inside versions/<label>/ for safe keeping.
  state.versions.forEach((v) => {
    if (v.id === state.activeVersionId) return;
    const folder = `versions/${sanitizeVersionFolder(v.label)}`;
    if (v.html && v.html.trim()) files.push({ name: `${folder}/index.html`, content: v.html });
    if (v.css && v.css.trim()) files.push({ name: `${folder}/style.css`, content: v.css });
    if (v.js && v.js.trim()) files.push({ name: `${folder}/script.js`, content: v.js });
    if (v.notes && v.notes.trim()) files.push({ name: `${folder}/notes.txt`, content: v.notes });
  });

  triggerDownloadBlob('50-pt-studio-bundle.zip', createZipBlob(files));
  showToast(`Downloaded ZIP with ${files.length} file(s)${state.versions.length > 1 ? ` (all ${state.versions.length} versions included)` : ''}.`, 'success');
}

// =========================================================================
// FILE UPLOAD — load your own index.html / style.css / script.js (and
// notes.txt) straight into the studio, then update / polish / bug-fix them.
// =========================================================================
async function handleUploadedFiles(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  if (state.isRunning) {
    showToast('Pause the running pipeline before uploading files.', 'warn');
    return;
  }

  const loaded = { html: null, css: null, js: null, notes: null };
  const unknown = [];

  await Promise.all(files.map(async (f) => {
    const ext = (f.name.split('.').pop() || '').toLowerCase();
    try {
      const text = await f.text();
      if (ext === 'html' || ext === 'htm') loaded.html = text;
      else if (ext === 'css') loaded.css = text;
      else if (ext === 'js' || ext === 'mjs' || ext === 'jsx') loaded.js = text;
      else if (ext === 'txt' || ext === 'md') loaded.notes = text;
      else unknown.push(f.name);
    } catch (_) {
      unknown.push(f.name);
    }
  }));

  const any = loaded.html !== null || loaded.css !== null || loaded.js !== null || loaded.notes !== null;
  if (!any) {
    showToast('No loadable files found — upload .html, .css, .js or .txt files.', 'error');
    return;
  }

  ensureVersionSystem();
  const cur = getCurrentVersion();
  const curHasFiles = Boolean((cur.html || '').trim() || (cur.css || '').trim() || (cur.js || '').trim());

  if (curHasFiles) {
    // Keep the current version safe — uploads land in a brand-new version tab.
    const version = createVersion(
      `V${state.versions.length + 1} • Uploaded`,
      {
        html: loaded.html !== null ? loaded.html : cur.html,
        css: loaded.css !== null ? loaded.css : cur.css,
        js: loaded.js !== null ? loaded.js : cur.js
      },
      loaded.notes !== null ? loaded.notes : state.notesText,
      'upload',
      true
    );
    showToast(`Uploaded into ${version.label} — previous version kept safe in its tab.`, 'success');
  } else {
    if (loaded.html !== null) state.htmlCode = loaded.html;
    if (loaded.css !== null) state.cssCode = loaded.css;
    if (loaded.js !== null) state.jsCode = loaded.js;
    if (loaded.notes !== null) state.notesText = loaded.notes;
    syncActiveVersionFromEditors();
    persistVersions();
    renderVersionStrip();
    updateEditorsAndBadges();
    saveWorkspaceSnapshot();
    renderLivePreview();
    const names = [loaded.html && 'index.html', loaded.css && 'style.css', loaded.js && 'script.js', loaded.notes && 'notes.txt'].filter(Boolean);
    showToast(`Loaded ${names.join(', ')} into the workspace.`, 'success');
  }

  if (unknown.length) {
    showToast(`Skipped ${unknown.length} unrecognized file(s): ${unknown.slice(0, 3).join(', ')}${unknown.length > 3 ? '…' : ''}`, 'warn');
  }
  if (state.activeTab === 'preview') renderLivePreview();
}

// =========================================================================
// PIPELINE MODES — the checklist, progress bar, stage filters and stage
// stepper adapt to whichever pipeline is (or was last) running.
// =========================================================================
function getActiveSteps() {
  if (state.pipelineMode === 'update') return UPDATE_PIPELINE_STEPS;
  if (state.pipelineMode === 'polish') return POLISH_PIPELINE_STEPS;
  return PIPELINE_STEPS;
}

function getActiveCompleted() {
  if (state.pipelineMode === 'update' || state.pipelineMode === 'polish') {
    return (state.evoRun && state.evoRun.completedSteps) || {};
  }
  return state.completedSteps;
}

function getPipelineModeLabels() {
  if (state.pipelineMode === 'update') {
    return {
      all: 'All 50',
      stages: ['1. Research', '2. Design', '3. Blueprint', '4. Verify', '5. Deliver'],
      stepper: ['1. Research (U1–U10)', '2. Design (U11–U20)', '3. Blueprint (U21–U30)', '4. Verify (U31–U40)', '5. Deliver (U41–U50)'],
      badge: 'Update 50'
    };
  }
  if (state.pipelineMode === 'polish') {
    return {
      all: 'All 10',
      stages: ['1. Census', '2. Type & Color', '3. Surface & Light', '4. Contract', '5. Emit'],
      stepper: ['1. Census (P1–P2)', '2. Type & Color (P3–P4)', '3. Surface & Light (P5–P6)', '4. Contract (P7)', '5. Emit (P8–P10)'],
      badge: 'Polish 10'
    };
  }
  return {
    all: 'All 50',
    stages: ['1. Discovery', '2. Systems', '3. Blueprint', '4. Visuals', '5. Build'],
    stepper: ['1. Discovery (1–10)', '2. Systems (11–20)', '3. Blueprint (21–30)', '4. Visual Craft (31–40)', '5. Build & Code (41–50)'],
    badge: 'Build 50'
  };
}

function applyPipelineModeLabels() {
  const labels = getPipelineModeLabels();
  document.querySelectorAll('#checklistFilterBar .filter-btn').forEach((btn) => {
    if (btn.dataset.filter === 'all') {
      btn.textContent = labels.all;
    } else {
      const sNum = Number(btn.dataset.filter);
      if (labels.stages[sNum - 1]) {
        const txt = btn.childNodes[btn.childNodes.length - 1];
        if (txt && txt.nodeType === 3) txt.textContent = ` ${labels.stages[sNum - 1]}`;
      }
    }
  });
  document.querySelectorAll('#stageStepper .stage-pill').forEach((pill) => {
    const sNum = Number(pill.dataset.stageFilter);
    const textSpan = pill.querySelector('span:last-child');
    if (textSpan && labels.stepper[sNum - 1]) textSpan.textContent = labels.stepper[sNum - 1];
  });
  if (el.backToBuildBtn) el.backToBuildBtn.classList.toggle('hidden', state.pipelineMode === 'build');
  if (el.updateStudioBtn) {
    el.updateStudioBtn.classList.toggle('run-active', state.pipelineMode === 'update' && Boolean(state.evoRun) && !state.evoRun.completed);
  }
}

function setPipelineMode(mode) {
  state.pipelineMode = mode;
  applyPipelineModeLabels();
  state.activeFilter = 'all';
  document.querySelectorAll('#checklistFilterBar .filter-btn').forEach((b) => {
    b.className = b.dataset.filter === 'all'
      ? 'filter-btn shrink-0 px-2.5 py-1 rounded text-[11px] font-medium bg-indigo-600/25 text-indigo-200 border border-indigo-500/40'
      : 'filter-btn shrink-0 px-2.5 py-1 rounded text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200';
  });
  renderChecklist(0, false);
  updateProgressUI(0, false);
}

function stepTotalLabel(stepObj) {
  const total = (stepObj && Number.isFinite(stepObj.total)) ? stepObj.total : getActiveSteps().length;
  return `${(stepObj && stepObj.num) || 0}/${total}`;
}

// =========================================================================
// EXACT VISUAL CODE SPEC — the texture / back-lighting / light behaviour /
// live background choices compiled into the exact code the final build
// must use, written into notes.txt at run start.
// =========================================================================
function hexToRgba(hex, alpha) {
  let h = String(hex || '#6366f1').replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return `rgba(99, 102, 241, ${alpha})`;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function compileTextureSpecLines() {
  const cfg = state.studioConfig;
  const sub = cfg.subConfig || {};
  const tex = findCatalogItem(STUDIO_CATALOG.textureDesigns, cfg.textureStyle);
  const depthAlpha = sub.textureDepth === 'bold' ? 1.6 : sub.textureDepth === 'medium' ? 1.0 : 0.55;
  return [
    `- Surface Texture: "${tex.name}" (${tex.feel}) — ${tex.desc} | Strength=${sub.textureDepth} | Placement=${sub.texturePlacement} | Motion=${sub.textureMotion}`,
    `  EXACT TEXTURE CODE (use verbatim; multiply pattern opacities by ${depthAlpha.toFixed(2)} for the chosen strength):`,
    `  ${tex.code}`,
    tex.swatch === 'texw-plain' ? '  (No texture layer — keep surfaces pure and calm.)' : ''
  ].filter(Boolean).join('\n');
}

function compileBacklightSpecLines() {
  const cfg = state.studioConfig;
  const b = cfg.backlightConfig || {};
  const design = findCatalogItem(STUDIO_CATALOG.backlightDesigns, cfg.backlightStyle);
  if (design.id === 'bl-none') {
    return `- Back-Lighting: None — elements rely on the main lighting design only. (Do not add any back-light layer.)`;
  }
  const colors = (b.colors && b.colors.length) ? b.colors : ['#6366f1', '#22d3ee'];
  const intensity = Number.isFinite(b.intensity) ? Math.max(5, Math.min(100, b.intensity)) : 55;
  const spread = Number.isFinite(b.spread) ? Math.max(6, Math.min(80, b.spread)) : 22;
  const alpha = Math.round((0.18 + (intensity / 100) * 0.42) * 100) / 100;
  const c1 = colors[0];
  const c2 = colors[1] || colors[0];
  const elMap = b.elements || {};
  const enabled = Object.keys(elMap).filter((k) => elMap[k] && elMap[k].enabled !== false);
  const glow = (color) => `box-shadow: 0 0 ${spread}px ${Math.round(spread * 0.4)}px ${hexToRgba(color, alpha)}, 0 0 ${Math.round(spread * 2.2)}px ${Math.round(spread * 0.9)}px ${hexToRgba(c2, Math.round(alpha * 0.45 * 100) / 100)};`;

  const behaviorMap = {
    static: 'Steady glow — no animation.',
    'hue-cycle': 'Add: animation: blHue 16s linear infinite; with @keyframes blHue { to { filter: hue-rotate(360deg); } } on the glow layer (not the content).',
    sweep: 'Add: a background gradient layer behind the element with background-size: 250% 250%; animation: blSweep 7s ease-in-out infinite alternate; shifting background-position.',
    hover: 'Baseline glow at ~60% of final intensity; on :hover/:active transition to full glow in 150ms ease-out (transition: box-shadow .15s ease-out).',
    'state-aware': 'Map states to colors via CSS custom property --bl-state (ON=c1, PENDING=#f59e0b, ERROR=#f43f5e, OFF=dim gray); transition color 250ms.',
    pulse: 'Add: animation: blBreathe 3.6s ease-in-out infinite; @keyframes blBreathe { 0%,100% { box-shadow: 0 0 Xpx Ypx C(α); } 50% { box-shadow: 0 0 (X*1.8)px (Y*1.8)px C(α*1.5); } }'
  };
  const physicsMap = {
    none: 'Pure glow — no particles.',
    embers: 'Add 8-14 tiny 2-3px particles (divs or canvas) spawning near the element base, drifting upward 24-60px over 2-5s and fading; staggered; respect reduced-motion.',
    liquid: 'Implement the glow as an animated multi-stop radial/conic gradient layer behind the element (blur 18-40px, 8-14s ease-in-out alternate).',
    orbit: 'Add 3-5 small sparks orbiting the element (CSS offset-path or rotate transform-origin at element center, 4-10s per revolution).'
  };

  return [
    `- Back-Lighting Design: "${design.name}" — ${design.desc} | Recipe hint: ${design.hint}`,
    `  Colors=${colors.join(' + ')} | Behavior=${b.behavior || 'static'} | Physics=${b.physics || 'none'} | Intensity=${intensity}/100 | Spread=${spread}px`,
    `  EXACT BACK-LIGHT CODE (adapt selectors to the real app, keep values):`,
    `  :root { --bl-c1: ${c1}; --bl-c2: ${c2}; --bl-intensity: ${intensity}; --bl-spread: ${spread}px; --bl-alpha: ${alpha}; }`,
    `  .backlit { ${glow(c1)} } /* base glow */`,
    `  Behavior: ${behaviorMap[b.behavior] || behaviorMap.static}`,
    `  Physics: ${physicsMap[b.physics] || physicsMap.none}`,
    `  Elements receiving back-light: ${enabled.length ? enabled.join(', ') : 'none'} (per-element overrides: ${enabled.map((k) => {
    const o = elMap[k] || {};
    const bits = [];
    if (o.color) bits.push(`color=${o.color}`);
    if (Number.isFinite(o.intensity)) bits.push(`intensity=${o.intensity}`);
    if (Number.isFinite(o.spread)) bits.push(`spread=${o.spread}px`);
    return `${k}${bits.length ? `(${bits.join(', ')})` : '(inherit)'}`;
  }).join(' | ')})`
  ].join('\n');
}

function compileLightBehaviourSpecLines() {
  const cfg = state.studioConfig;
  const sub = cfg.subConfig || {};
  const lb = findCatalogItem(STUDIO_CATALOG.lightBehaviour, cfg.lightBehaviour);
  const softMap = { crisp: '4px', soft: '14px', diffused: '28px' };
  const shadowLayer = {
    none: 'box-shadow: none;',
    soft: 'box-shadow: 0 10px 24px -10px rgba(0,0,0,0.45);',
    'layered-contact': 'box-shadow: 0 1px 2px rgba(0,0,0,0.35), 0 8px 18px -6px rgba(0,0,0,0.40), 0 22px 44px -18px rgba(0,0,0,0.45);'
  };
  const dirMap = {
    'top-left': 'Light from top-left: top/left edges catch highlights, shadows fall bottom-right (translateY(+2) + darker bottom border).',
    'top-center': 'Light from above: top edge highlight (inset 0 1px 0 rgba(255,255,255,.16)), shadows straight down.',
    'all-around': 'Ambient: no directional highlight; even 1px inner ring instead.',
    'bottom-up': 'Light from below: bottom edge glows, shadows rise — dramatic stage feel.',
    'follow-pointer': 'Track pointer with a smoothed radial-gradient (lerp 0.06), light pool ~340px, on a ::before layer at z-index -1.'
  };
  return [
    `- Light Sources & Behaviour: "${lb.name}" — ${lb.desc}`,
    `  Direction=${sub.lightDirection} | Softness=${sub.lightSoftness} (blur ${softMap[sub.lightSoftness] || '14px'}) | Shadows=${sub.shadowCasting} | Temperature=${sub.lightTemp} | Specular=${sub.specularLevel} | Parallax=${sub.lightParallax}`,
    `  Direction rule: ${dirMap[sub.lightDirection] || dirMap['top-left']}`,
    `  EXACT SHADOW CODE: .surface { ${shadowLayer[sub.shadowCasting] || shadowLayer.soft} }`,
    sub.specularLevel !== 'matte' ? `  Specular: add a 1px top inner highlight — inset 0 1px 0 rgba(255,255,255,${sub.specularLevel === 'glossy' ? '0.28' : '0.14'});` : '  Specular: matte — no inner highlights.',
    sub.lightTemp === 'warm' ? '  Temperature: tint highlights #fde68a-family and shadows #451a03-family.' : sub.lightTemp === 'cool' ? '  Temperature: tint highlights #dbeafe-family and shadows #0c1a33-family.' : sub.lightTemp === 'dynamic' ? '  Temperature: derive highlight/shadow tints from time of day (warm at edges of day, neutral midday, cool night) or from app state.' : '  Temperature: keep neutral white highlights and pure-black-tinted shadows.'
  ].join('\n');
}

function compileLiveBgSpecLines() {
  const cfg = state.studioConfig;
  const sub = cfg.subConfig || {};
  const lbg = findCatalogItem(STUDIO_CATALOG.liveBackgrounds, cfg.liveBackground);
  if (lbg.id === 'livebg-none') {
    return `- Live Background: None — calm static surfaces only. (Do not add any ambient motion layer.)`;
  }
  return [
    `- Live Background: "${lbg.name}" (${lbg.feel}) — ${lbg.desc}`,
    `  Density=${sub.liveBgDensity} | Speed=${sub.liveBgSpeed} | Interaction=${sub.liveBgInteraction} | Layering=${sub.liveBgLayering} | Fallback=${sub.liveBgFallback}`,
    `  IMPLEMENTATION (follow exactly): ${lbg.impl}`,
    `  Density guide: sparse=~40% element count, balanced=~70%, rich=100% + slight size increase. Speed guide: calm=~0.6x velocities, steady=1x, lively=~1.6x.`,
    sub.liveBgInteraction !== 'ambient' ? '  The layer MUST react to the user as configured (pointer/scroll/app events) — it is not a looping video.' : ''
  ].filter(Boolean).join('\n');
}

function compileGameStudioSpecLines() {
  const cfg = state.studioConfig;
  if (cfg.projectType !== 'game') return '';
  const gt = findCatalogItem(STUDIO_CATALOG.gameTypes, cfg.gameTypeId);
  const ga = findCatalogItem(STUDIO_CATALOG.gameArtStyles, cfg.gameArtStyle);
  const gf = findCatalogItem(STUDIO_CATALOG.gameFlows, cfg.gameFlow);
  const sub = cfg.subConfig || {};
  return [
    `GAME STUDIO SPECIFICS:`,
    `- Game Type: "${gt.name}" (${gt.genre}) — ${gt.desc}`,
    `  Core mechanics to implement: ${gt.mechanics}`,
    `- Classic Art Style: "${ga.name}" (${ga.era}) — ${ga.desc}`,
    `  Art craft recipe: ${ga.craft}`,
    `- Game App Flow: "${gf.name}" — ${gf.desc}`,
    `  Flow wiring: ${gf.wiring}`,
    `- Deep-Dive: Pacing=${sub.gamePacing} | Camera=${sub.gameCamera} | Controls=${sub.gameControls} | Juice=${sub.gameJuice} | Fail Loop=${sub.gameFailLoop}`
  ].join('\n');
}

// =========================================================================
// BACK-LIGHT STUDIO — design gallery + colour engine (multi-colour, styles,
// interactions, intensity, physics) + live preview over real elements with
// PER-ELEMENT editing. Shared by the Blueprint modal and the Prompt Guider.
// =========================================================================
function computeBacklightGlow(color, intensity, spread, extraColor) {
  const i = Number.isFinite(intensity) ? intensity : 55;
  const s = Number.isFinite(spread) ? spread : 22;
  const alpha = 0.18 + (i / 100) * 0.42;
  const c2 = extraColor || color;
  return `0 0 ${s}px ${Math.round(s * 0.4)}px ${hexToRgba(color, Math.round(alpha * 100) / 100)}, 0 0 ${Math.round(s * 2.2)}px ${Math.round(s * 0.9)}px ${hexToRgba(c2, Math.round(alpha * 0.45 * 100) / 100)}`;
}

function backlightBehaviorClass(behavior) {
  return behavior === 'pulse' ? ' bl-anim-breathe' : behavior === 'hue-cycle' ? ' bl-anim-hue' : '';
}

// The five real element specimens with the live back-light applied.
function renderBacklightSpecimens(container, opts = {}) {
  const cfg = state.studioConfig;
  const b = cfg.backlightConfig || {};
  const elMap = b.elements || {};
  const onEditElement = opts.onEditElement || null;

  const specimenDefs = [
    { key: 'toggle', name: 'Toggle' },
    { key: 'button', name: 'Button' },
    { key: 'card', name: 'Card' },
    { key: 'input', name: 'Input' },
    { key: 'tab', name: 'Tab' }
  ];

  const wrap = document.createElement('div');
  wrap.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5';

  specimenDefs.forEach((def) => {
    const conf = elMap[def.key] || { enabled: def.key === 'toggle' || def.key === 'button' || def.key === 'input', color: '', intensity: null, spread: null };
    const color = conf.color || (b.colors && b.colors[0]) || '#6366f1';
    const extra = (b.colors && b.colors[1]) || color;
    const intensity = Number.isFinite(conf.intensity) ? conf.intensity : (Number.isFinite(b.intensity) ? b.intensity : 55);
    const spread = Number.isFinite(conf.spread) ? conf.spread : (Number.isFinite(b.spread) ? b.spread : 22);
    const glow = computeBacklightGlow(color, intensity, spread, extra);
    const anim = backlightBehaviorClass(b.behavior);

    const card = document.createElement('div');
    card.className = 'bl-specimen-card';
    card.innerHTML = `
      <div class="flex items-center justify-between gap-1.5 mb-2.5">
        <span class="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">${def.name}</span>
        <span class="flex items-center gap-1">
          <span class="text-[9px] font-mono-code ${conf.enabled ? 'text-emerald-300' : 'text-slate-500'}">${conf.enabled ? 'ON' : 'OFF'}</span>
          ${onEditElement ? `<button type="button" data-bl-edit="${def.key}" class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">Edit</button>` : ''}
        </span>
      </div>
      <div class="bl-specimen-stage">
        ${def.key === 'toggle' ? `
          <button type="button" class="bl-toggle${conf.enabled ? ' is-on' : ''}${anim}" ${conf.enabled ? `style="--bl-glow:${glow.replace(/"/g, '&quot;')}"` : ''}>
            <span class="bl-toggle-knob"></span>
          </button>
        ` : ''}
        ${def.key === 'button' ? `
          <button type="button" class="bl-btn${anim}" ${conf.enabled ? `style="box-shadow:${glow.replace(/"/g, '&quot;')}"` : ''}>Continue</button>
        ` : ''}
        ${def.key === 'card' ? `
          <div class="bl-card${anim}" ${conf.enabled ? `style="box-shadow:${glow.replace(/"/g, '&quot;')}"` : ''}>
            <span class="text-[11px] font-semibold text-slate-100">Focus Card</span>
            <span class="text-[10px] text-slate-400">Cards can glow too</span>
          </div>
        ` : ''}
        ${def.key === 'input' ? `
          <input type="text" placeholder="Type here…" class="bl-input${anim}" ${conf.enabled ? `style="box-shadow:${glow.replace(/"/g, '&quot;')}"` : ''} />
        ` : ''}
        ${def.key === 'tab' ? `
          <div class="flex items-center gap-1.5">
            <button type="button" class="bl-tab is-active${anim}" ${conf.enabled ? `style="box-shadow:${glow.replace(/"/g, '&quot;')}"` : ''}>Home</button>
            <button type="button" class="bl-tab">Stats</button>
          </div>
        ` : ''}
      </div>
      <div class="mt-2 text-[9px] font-mono-code text-slate-500 break-all leading-relaxed">${conf.enabled ? escapeHtml(glow.slice(0, 96)) : '(no back-light on this element)'}</div>
    `;
    if (onEditElement) {
      const editBtn = card.querySelector('[data-bl-edit]');
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        onEditElement(def.key);
      });
    }
    wrap.appendChild(card);
  });

  container.innerHTML = '';
  container.appendChild(wrap);
}

function renderBacklightDesignGallery(container, selectedId, onSelect) {
  const items = STUDIO_CATALOG.backlightDesigns;
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5';
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
    card.innerHTML = `
      <div class="bl-demo-stage${item.id === 'bl-none' ? '' : ' bl-demo-' + item.id}">
        <span class="bl-demo-chip"></span>
      </div>
      <div class="flex items-center justify-between gap-1.5 mt-1.5">
        <span class="text-[11px] font-bold text-slate-100">${escapeHtml(item.name)}</span>
        ${isSel ? '<span class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>' : ''}
      </div>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${escapeHtml(item.desc)}</p>
    `;
    card.addEventListener('click', () => onSelect(item.id));
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

function renderBacklightStudioPanel(container, opts = {}) {
  const cfg = state.studioConfig;
  const b = cfg.backlightConfig || {};
  const spec = STUDIO_CATALOG.subMenus.backlightEngine;
  const bColors = Array.isArray(b.colors) && b.colors.length ? b.colors : ['#6366f1'];
  const editing = opts.editElementKey || null;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
      <div class="space-y-3">
        <div>
          <label class="bl-studio-label">Back-Light Colours (${bColors.length}${bColors.length < 4 ? ' — tap + to add up to 4' : ' max'})</label>
          <div class="flex flex-wrap items-center gap-2">
            <div class="flex items-center gap-1.5 flex-wrap" data-bl-colors></div>
            ${bColors.length < 4 ? '<button type="button" data-bl-add-color class="w-7 h-7 rounded-lg border border-dashed border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-400 transition text-sm font-bold">+</button>' : ''}
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="bl-studio-label">Colour Behaviour &amp; Interaction</label>
            <select data-bl-behavior class="bl-studio-select">
              ${spec.behaviors.map((o) => `<option value="${o.id}" ${b.behavior === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="bl-studio-label">Light Physics (particles &amp; liquid)</label>
            <select data-bl-physics class="bl-studio-select">
              ${spec.physics.map((o) => `<option value="${o.id}" ${b.physics === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="bl-studio-label">Intensity — <span data-bl-intensity-out class="font-mono-code text-cyan-300">${Number.isFinite(b.intensity) ? b.intensity : 55}</span>/100</label>
            <input type="range" min="0" max="100" value="${Number.isFinite(b.intensity) ? b.intensity : 55}" data-bl-intensity class="bl-studio-range" />
          </div>
          <div>
            <label class="bl-studio-label">Spread / Blur — <span data-bl-spread-out class="font-mono-code text-cyan-300">${Number.isFinite(b.spread) ? b.spread : 22}</span>px</label>
            <input type="range" min="6" max="80" value="${Number.isFinite(b.spread) ? b.spread : 22}" data-bl-spread class="bl-studio-range" />
          </div>
        </div>
        <div>
          <label class="bl-studio-label">Quick Colour Presets</label>
          <div class="flex flex-wrap items-center gap-1.5" data-bl-presets>
            ${spec.presets.map((p) => `<button type="button" data-bl-preset="${escapeHtml(p.colors.join(','))}" class="px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 hover:border-cyan-500/60 text-[10px] text-slate-300 transition">${escapeHtml(p.label)}</button>`).join('')}
          </div>
        </div>
      </div>
      <div class="rounded-xl border border-slate-800 bg-[#05070c] p-3 space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Live Preview — Real Elements</span>
          <span class="text-[9px] font-mono-code text-cyan-300">interactive</span>
        </div>
        <div data-bl-specimens></div>
      </div>
    </div>
    ${editing ? '' : ''}
  `;

  const colorsWrap = container.querySelector('[data-bl-colors]');
  const rerenderAll = () => {
    saveStudioConfig();
    renderBlueprintSummaryStrip();
    renderBacklightStudioPanel(container, opts);
  };

  bColors.forEach((c, i) => {
    const holder = document.createElement('span');
    holder.className = 'relative inline-flex items-center';
    holder.innerHTML = `
      <input type="color" value="${escapeHtml(c)}" data-bl-color-idx="${i}" class="bl-color-input" title="Colour ${i + 1} — click to adjust" />
      ${bColors.length > 1 ? `<button type="button" data-bl-remove-color="${i}" class="bl-color-remove" title="Remove colour">×</button>` : ''}
    `;
    colorsWrap.appendChild(holder);
  });

  container.querySelectorAll('[data-bl-color-idx]').forEach((inp) => {
    inp.addEventListener('input', () => {
      cfg.backlightConfig.colors[Number(inp.dataset.blColorIdx)] = inp.value;
      saveStudioConfig();
      renderBlueprintSummaryStrip();
      renderBacklightSpecimens(container.querySelector('[data-bl-specimens]'), opts);
    });
  });
  container.querySelectorAll('[data-bl-remove-color]').forEach((btn) => {
    btn.addEventListener('click', () => {
      cfg.backlightConfig.colors.splice(Number(btn.dataset.blRemoveColor), 1);
      rerenderAll();
    });
  });
  const addBtn = container.querySelector('[data-bl-add-color]');
  if (addBtn) addBtn.addEventListener('click', () => {
    if (cfg.backlightConfig.colors.length >= 4) return;
    cfg.backlightConfig.colors.push('#22d3ee');
    rerenderAll();
  });
  container.querySelectorAll('[data-bl-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      cfg.backlightConfig.colors = btn.dataset.blPreset.split(',');
      rerenderAll();
    });
  });
  const behaviorSel = container.querySelector('[data-bl-behavior]');
  behaviorSel.addEventListener('change', () => {
    cfg.backlightConfig.behavior = behaviorSel.value;
    saveStudioConfig();
    renderBacklightSpecimens(container.querySelector('[data-bl-specimens]'), opts);
  });
  const physicsSel = container.querySelector('[data-bl-physics]');
  physicsSel.addEventListener('change', () => {
    cfg.backlightConfig.physics = physicsSel.value;
    saveStudioConfig();
  });
  const intRange = container.querySelector('[data-bl-intensity]');
  intRange.addEventListener('input', () => {
    cfg.backlightConfig.intensity = Number(intRange.value);
    container.querySelector('[data-bl-intensity-out]').textContent = intRange.value;
    renderBacklightSpecimens(container.querySelector('[data-bl-specimens]'), opts);
    saveStudioConfig();
  });
  const spreadRange = container.querySelector('[data-bl-spread]');
  spreadRange.addEventListener('input', () => {
    cfg.backlightConfig.spread = Number(spreadRange.value);
    container.querySelector('[data-bl-spread-out]').textContent = spreadRange.value;
    renderBacklightSpecimens(container.querySelector('[data-bl-specimens]'), opts);
    saveStudioConfig();
  });

  // Specimens + per-element editing popover
  const specWrap = container.querySelector('[data-bl-specimens]');
  const openElementEditor = (key) => {
    const conf = (cfg.backlightConfig.elements && cfg.backlightConfig.elements[key]) || { enabled: false, color: '', intensity: null, spread: null };
    const dialog = document.createElement('div');
    dialog.className = 'bl-element-editor submenu-reveal';
    dialog.innerHTML = `
      <div class="flex items-center justify-between gap-2 mb-2">
        <span class="text-[11px] font-bold text-slate-100">Edit back-light — ${escapeHtml(key.charAt(0).toUpperCase() + key.slice(1))} element</span>
        <button type="button" data-bl-ed-close class="text-slate-400 hover:text-slate-200 text-xs">✕</button>
      </div>
      <label class="bl-studio-label flex items-center gap-2">
        <input type="checkbox" data-bl-ed-enabled ${conf.enabled ? 'checked' : ''} class="rounded bg-slate-900 border-slate-600" />
        Enable back-light on this element type
      </label>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div>
          <label class="bl-studio-label">Colour override</label>
          <input type="color" value="${escapeHtml(conf.color || (cfg.backlightConfig.colors && cfg.backlightConfig.colors[0]) || '#6366f1')}" data-bl-ed-color class="bl-color-input" />
        </div>
        <div>
          <label class="bl-studio-label">Intensity override</label>
          <select data-bl-ed-intensity class="bl-studio-select">
            <option value="">Inherit (${cfg.backlightConfig.intensity || 55})</option>
            ${[10, 25, 40, 55, 70, 85, 100].map((v) => `<option value="${v}" ${conf.intensity === v ? 'selected' : ''}>${v}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="bl-studio-label">Spread override</label>
          <select data-bl-ed-spread class="bl-studio-select">
            <option value="">Inherit (${cfg.backlightConfig.spread || 22}px)</option>
            ${[8, 14, 22, 30, 42, 56, 72].map((v) => `<option value="${v}" ${conf.spread === v ? 'selected' : ''}>${v}px</option>`).join('')}
          </select>
        </div>
      </div>
      <button type="button" data-bl-ed-apply class="mt-2.5 w-full px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold transition">Apply to ${escapeHtml(key)}</button>
    `;
    dialog.querySelector('[data-bl-ed-close]').addEventListener('click', () => dialog.remove());
    dialog.querySelector('[data-bl-ed-apply]').addEventListener('click', () => {
      if (!cfg.backlightConfig.elements) cfg.backlightConfig.elements = {};
      cfg.backlightConfig.elements[key] = {
        enabled: dialog.querySelector('[data-bl-ed-enabled]').checked,
        color: dialog.querySelector('[data-bl-ed-color]').value,
        intensity: dialog.querySelector('[data-bl-ed-intensity]').value === '' ? null : Number(dialog.querySelector('[data-bl-ed-intensity]').value),
        spread: dialog.querySelector('[data-bl-ed-spread]').value === '' ? null : Number(dialog.querySelector('[data-bl-ed-spread]').value)
      };
      dialog.remove();
      saveStudioConfig();
      renderBacklightStudioPanel(container, opts);
    });
    const existing = container.querySelector('.bl-element-editor');
    if (existing) existing.remove();
    container.appendChild(dialog);
  };

  renderBacklightSpecimens(specWrap, { onEditElement: openElementEditor });
}

// =========================================================================
// TEXTURE GALLERY — real CSS-material swatch cards
// =========================================================================
function renderTextureGalleryInto(container, selectedId, onSelect) {
  const items = STUDIO_CATALOG.textureDesigns;
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5';
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
    card.innerHTML = `
      <div class="tex-swatch ${escapeHtml(item.swatch)}"></div>
      <div class="flex items-center justify-between gap-1.5 mt-1.5">
        <span class="text-[11px] font-bold text-slate-100">${escapeHtml(item.name)}</span>
        ${isSel ? '<span class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>' : ''}
      </div>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${escapeHtml(item.desc)}</p>
      ${onSelect.name === 'noop' ? '' : ''}
    `;
    card.addEventListener('click', () => onSelect(item.id));
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

// =========================================================================
// LIVE BACKGROUND GALLERY — animated CSS vignettes as visual references
// =========================================================================
function renderLiveBgGalleryInto(container, selectedId, onSelect) {
  const items = STUDIO_CATALOG.liveBackgrounds;
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5';
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
    card.innerHTML = `
      <div class="lbd-stage ${escapeHtml(item.demo)}"></div>
      <div class="flex items-center justify-between gap-1.5 mt-1.5">
        <span class="text-[11px] font-bold text-slate-100">${escapeHtml(item.name)}</span>
        ${isSel ? '<span class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>' : ''}
      </div>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${escapeHtml(item.desc)}</p>
    `;
    card.addEventListener('click', () => onSelect(item.id));
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

// =========================================================================
// ADVANCED SUB-MENU RENDERERS (texture tuning, live-bg tuning, light)
// =========================================================================
function renderSubSelectGrid(container, spec, onChange) {
  if (!container) return;
  const sub = state.studioConfig.subConfig;
  const count = Math.min(3, spec.fields.length);
  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-${count} gap-3">
      ${spec.fields.map((f) => `
        <div>
          <label class="block text-[11px] font-semibold text-slate-300 mb-1">${escapeHtml(f.label)}</label>
          <select data-advkey="${escapeHtml(f.key)}" class="w-full bg-[#0d131f] border border-slate-700 rounded-lg px-2.5 py-2 text-slate-200 text-xs outline-none focus:border-indigo-500">
            ${f.options.map((o) => `<option value="${escapeHtml(o.id)}" ${sub[f.key] === o.id ? 'selected' : ''}>${escapeHtml(o.label)}</option>`).join('')}
          </select>
        </div>
      `).join('')}
    </div>
  `;
  container.querySelectorAll('[data-advkey]').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      state.studioConfig.subConfig[sel.dataset.advkey] = e.target.value;
      saveStudioConfig();
      if (onChange) onChange(sel.dataset.advkey);
    });
  });
}

function renderTextureTuningSubMenu(container) {
  if (!container) return;
  container.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-2.5">
      <h4 class="text-xs font-semibold text-cyan-100">${escapeHtml(STUDIO_CATALOG.subMenus.textureTuning.title)}</h4>
      <span class="text-[10px] text-slate-400">${escapeHtml(STUDIO_CATALOG.subMenus.textureTuning.subtitle)}</span>
    </div>
  `;
  const inner = document.createElement('div');
  container.appendChild(inner);
  renderSubSelectGrid(inner, STUDIO_CATALOG.subMenus.textureTuning, () => {
    renderLiveVisualSpecimen(el.bpLiveVisualSpecimen);
    renderLiveVisualSpecimen(el.guiderLiveSpecimen);
  });
}

function renderLiveBgTuningSubMenu(container) {
  if (!container) return;
  const cfg = state.studioConfig;
  if (cfg.liveBackground === 'livebg-none') {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');
  container.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-2.5">
      <h4 class="text-xs font-semibold text-violet-200">${escapeHtml(STUDIO_CATALOG.subMenus.liveBgTuning.title)}</h4>
      <span class="text-[10px] text-slate-400">${escapeHtml(STUDIO_CATALOG.subMenus.liveBgTuning.subtitle)}</span>
    </div>
  `;
  const inner = document.createElement('div');
  container.appendChild(inner);
  renderSubSelectGrid(inner, STUDIO_CATALOG.subMenus.liveBgTuning);
}

function renderLightAdvancedSubMenu(container) {
  if (!container) return;
  const cfg = state.studioConfig;
  if (cfg.lightBehaviour === 'light-flat' && cfg.lightingStyle === 'daylight-flat') {
    // still render — flat light has meaningful advanced options
  }
  container.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-2.5">
      <h4 class="text-xs font-semibold text-amber-100">${escapeHtml(STUDIO_CATALOG.subMenus.lightAdvanced.title)}</h4>
      <span class="text-[10px] text-slate-400">${escapeHtml(STUDIO_CATALOG.subMenus.lightAdvanced.subtitle)}</span>
    </div>
  `;
  const inner = document.createElement('div');
  container.appendChild(inner);
  renderSubSelectGrid(inner, STUDIO_CATALOG.subMenus.lightAdvanced, () => {
    renderLiveVisualSpecimen(el.bpLiveVisualSpecimen);
    renderLiveVisualSpecimen(el.guiderLiveSpecimen);
  });
}

// =========================================================================
// GAME STUDIO — game type / classic art / game flow galleries
// =========================================================================
function renderGameGrid(container, items, selectedId, onPick, opts = {}) {
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = `grid ${opts.cols || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-2.5`;
  items.forEach((item) => {
    const isSel = item.id === selectedId;
    const badge = opts.badgeKey ? (item[opts.badgeKey] || '') : '';
    const extra = opts.extraKey ? (item[opts.extraKey] || '') : '';
    const smartFit = opts.smartFitStep ? getSmartFitReason(opts.smartFitStep, item.id) : '';
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `guider-option-card${isSel ? ' is-selected' : ''}`;
    card.innerHTML = `
      <div class="visual-ref-preview">${item.svg}</div>
      <div class="flex items-center justify-between gap-1.5 flex-wrap">
        <span class="text-xs font-bold text-slate-100">${escapeHtml(item.name)}</span>
        ${badge ? `<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/35">${escapeHtml(badge)}</span>` : ''}
        ${smartFit ? `<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/35">${escapeHtml(smartFit)}</span>` : ''}
      </div>
      <p class="text-[11px] text-slate-400 mt-1 leading-snug">${escapeHtml(item.desc)}</p>
      ${extra ? `<div class="mt-1.5 pt-1.5 border-t border-slate-800/80 text-[10px] text-slate-400 leading-snug">${escapeHtml(extra)}</div>` : ''}
    `;
    card.addEventListener('click', () => onPick(item));
    grid.appendChild(card);
  });
  container.appendChild(grid);
}

// =========================================================================
// UPDATE STUDIO — the 50-Step Update Pipeline control center.
// Takes the currently ACTIVE index.html + style.css + script.js (plus the
// original prompt, notes.txt and your update goal) through 5 phases of
// expertly-crafted research, design, blueprinting, verification and
// delivery — creating a NEW VERSION TAB (V2, V3… every run).
// =========================================================================
const UPDATE_QUESTION_BANK = [
  // ---------- GOAL CLARITY (priority 100) ----------
  { id: 'ug_what', section: 'Goal Clarity', prio: 100, text: 'In one sentence, what should change after this update?', hint: 'The sharper this sentence, the sharper all 50 update steps.', chips: ['New feature', 'Better look & feel', 'Fix problems', 'Performance', 'Content / data changes'] },
  { id: 'ug_why', section: 'Goal Clarity', prio: 100, text: 'What triggered this update right now?', hint: 'The trigger often hides the real goal.', chips: ['Something annoys me', 'Users asked for it', 'It feels dated', 'New idea to try', 'It broke somewhere'] },
  { id: 'ug_success', section: 'Goal Clarity', prio: 100, text: 'How will you KNOW the update worked?', hint: 'Your definition of done becomes the update\'s quality gate.', chips: ['It looks better', 'It does the new thing', 'It feels faster', 'Errors are gone', 'People smile using it'] },
  { id: 'ug_priority', section: 'Goal Clarity', prio: 95, text: 'If only ONE thing from this update ships, which is it?', hint: 'Updates with a clear #1 goal never scatter.', chips: [] },
  { id: 'ug_out', section: 'Goal Clarity', prio: 80, text: 'Anything you deliberately do NOT want changed?', hint: 'Protect-lists keep updates from wandering.', chips: ['Keep the colors', 'Keep the layout', 'Keep the data', 'Keep the sounds', 'Keep everything else working'] },

  // ---------- CURRENT PAIN POINTS (priority 90) ----------
  { id: 'up_annoy', section: 'Current Pain Points', prio: 90, text: 'What currently annoys you most about the app?', hint: 'Frustrations first — updates are great therapy.', chips: ['Too many clicks', 'Looks rough', 'Slow moments', 'Confusing bits', 'Missing feedback'] },
  { id: 'up_broken', section: 'Current Pain Points', prio: 90, text: 'Is anything actually broken or buggy?', hint: 'Bugs beat features — list them for the AI to hunt.', chips: ['Yes — a few', 'One specific thing', 'Not sure — please scan', 'No, just improving'] },
  { id: 'up_mobile', section: 'Current Pain Points', prio: 85, text: 'How does it feel on your phone right now?', hint: 'Most pain hides on small screens.', chips: ['Great', 'Cramped', 'Hard to tap', 'Haven\'t checked'] },
  { id: 'up_slow', section: 'Current Pain Points', prio: 85, text: 'Any moment where it feels slow or janky?', hint: 'Name the moment — the update will hunt it down.', chips: ['Opening/first load', 'When lists get long', 'During animations', 'All fine actually'] },
  { id: 'up_confusing', section: 'Current Pain Points', prio: 80, text: 'Where do you (or others) get confused using it?', hint: 'Confusion is a UX bug wearing a disguise.', chips: ['First open', 'A specific button', 'Saving & finding data', 'Nowhere really'] },

  // ---------- NEW FEATURES (priority 90) ----------
  { id: 'un_feature', section: 'New Features', prio: 90, text: 'What new ability should this update add?', hint: 'One sentence per feature is plenty at this stage.', chips: [] },
  { id: 'un_where', section: 'New Features', prio: 85, text: 'Where should the new feature live in the UI?', hint: 'Placement decided early means less reshuffling.', chips: ['A new tab/view', 'Inside an existing screen', 'A toolbar button', 'You decide — best fit'] },
  { id: 'un_settings', section: 'New Features', prio: 80, text: 'Should anything become user-adjustable?', hint: 'Settings are features too — cheap if planned now.', chips: ['Yes — a settings panel', 'Just an on/off toggle', 'No — keep it simple'] },
  { id: 'un_shortcut', section: 'New Features', prio: 75, text: 'Any keyboard shortcut or gesture you wish existed?', hint: 'Power users are made by good shortcuts.', chips: [] },

  // ---------- VISUAL & FEEL (priority 88) ----------
  { id: 'uv_look', section: 'Visual & Feel', prio: 88, text: 'How should the look change?', hint: 'Refreshes are fine — full redesigns change the charter.', chips: ['More detail & polish', 'More modern', 'More personality', 'Lighter & cleaner', 'Darker & moodier'] },
  { id: 'uv_texture', section: 'Visual & Feel', prio: 80, text: 'Should surfaces gain a texture or stay clean?', hint: 'Textures add soul; clean stays timeless.', chips: ['Add subtle texture', 'Keep it clean', 'Go bold — make it felt'] },
  { id: 'uv_glow', section: 'Visual & Feel', prio: 80, text: 'Should buttons/toggles get a soft back-light glow?', hint: 'Apple-style glows make controls feel alive.', chips: ['Yes — soft halo', 'Yes — colorful & animated', 'No — keep them flat'] },
  { id: 'uv_bg', section: 'Visual & Feel', prio: 78, text: 'Should the background come alive (floating icons, particles, aurora)?', hint: 'A living background adds magic — must stay calm.', chips: ['Yes — something gentle', 'Yes — something playful', 'No — keep it still'] },
  { id: 'uv_motion', section: 'Visual & Feel', prio: 75, text: 'How should motion change?', hint: 'Motion quality is felt more than seen.', chips: ['Smoother easing', 'More playful bounce', 'Calm everything down', 'Add celebrations'] },

  // ---------- PERFORMANCE & QUALITY (priority 85) ----------
  { id: 'uperf_target', section: 'Performance & Quality', prio: 85, text: 'What device matters most for this update?', hint: 'The update optimizes for the weakest device you name.', chips: ['My phone', 'Older phones', 'Desktop', 'All equally'] },
  { id: 'uperf_stress', section: 'Performance & Quality', prio: 78, text: 'What\'s the heaviest thing users do with it?', hint: 'The heavy path gets the perf attention.', chips: ['Long lists', 'Big calculations', 'Long sessions', 'Lots of data saved'] },
  { id: 'uperf_budget', section: 'Performance & Quality', prio: 70, text: 'What should never get slower?', hint: 'Non-negotiable speed floors get protected by contract.', chips: ['First open', 'Button taps', 'Typing/input', 'Saving'] },

  // ---------- DATA & SAFETY (priority 92) ----------
  { id: 'udata_keep', section: 'Data & Safety', prio: 92, text: 'Must existing saved data survive the update untouched?', hint: 'This answer becomes migration law.', chips: ['Yes — absolutely critical', 'Nice to have', 'No data exists yet'] },
  { id: 'udata_shape', section: 'Data & Safety', prio: 80, text: 'Should the update change what gets saved or how?', hint: 'New features often need new saved fields.', chips: ['Add new saved things', 'Reorganize storage', 'Keep as-is'] },
  { id: 'udata_export', section: 'Data & Safety', prio: 72, text: 'Should export/backup get smarter?', hint: 'Backups build trust in updated apps.', chips: ['Yes — easier export', 'Add auto-backup', 'Fine as-is'] },

  // ---------- USERS & HABITS (priority 82) ----------
  { id: 'uhab_who', section: 'Users & Habits', prio: 82, text: 'Who else uses this app besides you?', hint: 'Updates must not betray people\'s muscle memory.', chips: ['Just me', 'Friends/family', 'A community', 'Strangers (public)'] },
  { id: 'uhab_break', section: 'Users & Habits', prio: 85, text: 'Is it okay if any old habit changes?', hint: 'If yes — say which; the update designs bridges for the rest.', chips: ['Small changes fine', 'Only additions, no changes', 'Anything goes — it\'s new'] },
  { id: 'uhab_react', section: 'Users & Habits', prio: 75, text: 'What should returning users feel on first open after the update?', hint: 'The homecoming moment deserves design.', chips: ['"Ooh, nice!"', '"Where did that go?" is NOT ok', '"It got smarter"', '"Same, but better"'] },

  // ---------- SCOPE & PRIORITIES (priority 85) ----------
  { id: 'uscope_size', section: 'Scope & Priorities', prio: 85, text: 'How big should this update feel?', hint: 'Sets the depth of every phase.', chips: ['Small & surgical', 'Medium refresh', 'Major version bump'] },
  { id: 'uscope_later', section: 'Scope & Priorities', prio: 70, text: 'Anything to explicitly postpone for a future update?', hint: 'Park it now so the update stays focused.', chips: [] },
  { id: 'uscope_surprise', section: 'Scope & Priorities', prio: 65, text: 'Want the AI to add ONE small delightful surprise?', hint: 'The update pipeline loves a signature moment.', chips: ['Yes — surprise me', 'Maybe — propose one, I\'ll judge', 'No — stay focused'] },
  { id: 'uscope_theme', section: 'Scope & Priorities', prio: 60, text: 'Any seasonal or event theme to honor?', hint: 'Themes give updates a story.', chips: ['No theme', 'Holiday/festive', 'A launch moment'] },

  // ---------- OPEN FLOOR (priority 50) ----------
  { id: 'uo_notes', section: 'Open Floor', prio: 50, text: 'Anything else the update should know?', hint: 'Context the AI could never guess — now\'s the time.', chips: [] }
];

function buildUpdateQuestionList(count) {
  const picked = [...UPDATE_QUESTION_BANK];
  if (state.studioConfig.projectType === 'game') {
    picked.push(
      { id: 'ug_game_content', section: 'Game Update', prio: 92, text: 'New game content (levels, modes, enemies) or better feel for what exists?', hint: 'Content grows the world; feel deepens it.', chips: ['New content', 'Better feel', 'Both'] },
      { id: 'ug_game_balance', section: 'Game Update', prio: 88, text: 'Is difficulty fair right now?', hint: 'Balance updates are the most beloved kind.', chips: ['Too easy', 'Too hard', 'Unfair spikes', 'Just right'] },
      { id: 'ug_game_meta', section: 'Game Update', prio: 80, text: 'Should meta progress (unlocks, missions, stats) grow?', hint: 'Meta layers keep players returning.', chips: ['Add unlocks', 'Add daily missions', 'Add stats screen', 'Keep minimal'] }
    );
  }
  picked.sort((a, b) => (b.prio || 0) - (a.prio || 0));
  const questions = picked.slice(0, count).map((q, i) => ({
    ...q,
    num: i + 1
  }));
  return questions;
}

function updateStudioSetFooter(html, wire) {
  const foot = el.updateStudioFooter;
  if (!foot) return;
  foot.innerHTML = html;
  if (wire) wire(foot);
}

function openUpdateStudio() {
  if (state.isRunning && (!state.evoRun || state.evoRun.kind !== 'update')) {
    showToast('A pipeline is already running — let it finish or pause it first.', 'warn');
    return;
  }
  const evoDone = state.evoRun && state.evoRun.kind === 'update' && state.evoRun.completed;
  if (state.evoRun && state.evoRun.kind === 'update' && state.evoRun.isRunning) {
    state.evoUi.view = 'running';
  } else if (state.evoRun && state.evoRun.kind === 'update' && !evoDone) {
    state.evoUi.view = 'paused';
  } else {
    state.evoUi.view = 'hub';
  }
  el.updateStudioModal.classList.remove('hidden');
  trackModalOpen(el.updateStudioModal);
  renderUpdateStudio();
  refreshIcons();
}

function renderUpdateStudio() {
  const ui = state.evoUi;
  const view = ui.view || 'hub';
  const runDone = state.evoRun && state.evoRun.kind === 'update' && state.evoRun.completed;
  if (view === 'hub' || (runDone && view !== 'questions' && view !== 'aiIdeas')) renderUpdateHub();
  else if (view === 'questions') renderUpdateQuestions();
  else if (view === 'aiIdeas') renderUpdateAiIdeas();
  else if (view === 'running' || view === 'paused') renderUpdateRunning();
  refreshIcons();
}

function renderUpdateHub() {
  const ui = state.evoUi;
  ensureVersionSystem();
  const cur = getCurrentVersion();
  const size = formatCompactChars((cur.html || '').length + (cur.css || '').length + (cur.js || '').length);
  const nextLabel = `V${state.versions.length + 1}`;

  el.updateStudioBody.innerHTML = `
    <div class="space-y-4">
      <div class="rounded-xl border border-violet-500/30 bg-violet-950/15 p-3.5 space-y-1.5">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="text-[11px] font-bold text-violet-200">Active version: ${escapeHtml(cur.label)}</span>
          <span class="text-[10px] font-mono-code text-slate-400">index.html + style.css + script.js = ${size}</span>
        </div>
        <p class="text-[11px] text-slate-300 leading-relaxed">The 50-step update pipeline researches, designs, blueprints, verifies and then delivers updated files — stored in a NEW <strong class="text-violet-200">${nextLabel} tab</strong>. ${state.versions.length > 1 ? 'Every previous version stays safe in its own tab.' : ''}</p>
        <p class="text-[10px] text-slate-400 leading-relaxed">Your <strong>original prompt</strong>, the full <strong>notes.txt</strong> and all three <strong>active files</strong> are attached to every single update step, so the AI always works from the live codebase.</p>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1.5">What should this update do?</label>
        <textarea id="updateGoalInput" rows="4" placeholder="e.g., Add a settings view with theme choices and export options, make the toolbar glow softly behind active buttons, and fix the layout on small phones…" class="w-full bg-[#0d131f] border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none">${escapeHtml(ui.goal || '')}</textarea>
        <div class="flex flex-wrap items-center gap-1.5 mt-2">
          <span class="text-[10px] text-slate-500">Spark:</span>
          ${['Make it feel premium', 'Add a settings panel', 'Better mobile layout', 'More visual polish', 'Add sound feedback', 'Improve performance', 'Add dark/light themes', 'More juice & celebrations'].map((s) => `<button type="button" data-goal-spark="${escapeHtml(s)}" class="px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 hover:border-violet-500/60 text-[10px] text-slate-300 transition">${escapeHtml(s)}</button>`).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button type="button" data-upd-tool="questions" class="upd-tool-card">
          <span class="upd-tool-icon bg-cyan-500/15 border-cyan-500/40 text-cyan-300"><i data-lucide="help-circle" class="w-4 h-4"></i></span>
          <span class="min-w-0">
            <span class="block text-xs font-bold text-slate-100">Update Questions</span>
            <span class="block text-[10px] text-slate-400 leading-snug mt-0.5">Interview me about this update — 10, 30 or 50 questions (built-in bank or AI-generated) that pull the update plan out of my head. Answers weave into the goal.</span>
          </span>
        </button>
        <button type="button" data-upd-tool="aiIdeas" class="upd-tool-card">
          <span class="upd-tool-icon bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300"><i data-lucide="lightbulb" class="w-4 h-4"></i></span>
          <span class="min-w-0">
            <span class="block text-xs font-bold text-slate-100">AI Update Ideas</span>
            <span class="block text-[10px] text-slate-400 leading-snug mt-0.5">Get 10, 30 or 50 AI-generated update ideas from the live codebase — then toggle which ones to keep. Kept ideas weave into the goal.</span>
          </span>
        </button>
      </div>

      <div class="rounded-xl border border-slate-800 bg-[#090d14] p-3.5">
        <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">The 5 phases your update will travel through</div>
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
          ${[
            ['Research', 'U1–U10 — decode the goal, map the codebase, audit health, protect data'],
            ['Design', 'U11–U20 — architecture, data evolution, visual language, a11y'],
            ['Blueprint', 'U21–U30 — exact code-level change specs for all three files'],
            ['Verify', 'U31–U40 — parity, regressions, perf, mobile, migration rehearsal'],
            ['Deliver', 'U41–U50 — consolidated manifests, then emit V' + (state.versions.length + 1) + ' files']
          ].map(([t, d], i) => `
            <div class="rounded-lg border border-slate-800 bg-[#0d131f] p-2.5">
              <div class="flex items-center gap-1.5 mb-1">
                <span class="w-4 h-4 rounded-full bg-violet-600/30 border border-violet-500/50 text-[9px] font-bold text-violet-200 flex items-center justify-center">${i + 1}</span>
                <span class="text-[10px] font-bold text-slate-200">${t}</span>
              </div>
              <div class="text-[9px] text-slate-400 leading-snug">${d}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  const goalInput = el.updateStudioBody.querySelector('#updateGoalInput');
  goalInput.addEventListener('input', () => {
    state.evoUi.goal = goalInput.value;
  });
  el.updateStudioBody.querySelectorAll('[data-goal-spark]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const g = btn.dataset.goalSpark;
      const cur = state.evoUi.goal || '';
      state.evoUi.goal = cur.trim() ? `${cur.trim().replace(/\.$/, '')}. ${g}.` : `${g}.`;
      goalInput.value = state.evoUi.goal;
      goalInput.focus();
    });
  });
  el.updateStudioBody.querySelectorAll('[data-upd-tool]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.updTool;
      if (tool === 'questions') {
        state.evoUi.view = 'questions';
        renderUpdateStudio();
      } else {
        state.evoUi.view = 'aiIdeas';
        renderUpdateStudio();
      }
    });
  });

  updateStudioSetFooter(`
    <div class="text-[10px] text-slate-500 leading-relaxed max-w-[60%]">Requires your active files (generated, pasted or uploaded) and at least one API key.</div>
    <div class="flex items-center gap-2">
      <button type="button" data-upd-cancel class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Close</button>
      <button type="button" data-upd-run class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition shadow-sm shadow-violet-600/25"><i data-lucide="rocket" class="w-3.5 h-3.5"></i> Run 50-Step Update → ${nextLabel}</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-upd-cancel]').addEventListener('click', () => {
      el.updateStudioModal.classList.add('hidden');
      trackModalClosed(el.updateStudioModal);
    });
    foot.querySelector('[data-upd-run]').addEventListener('click', async () => {
      state.evoUi.goal = goalInput.value;
      await runEvoPipeline('update');
    });
  });
}

function renderUpdateQuestions() {
  const ui = state.evoUi;
  if (ui.questions.length === 0 || (ui.qSource === 'ai' && ui.questions.length === 0)) {
    ui.questions = buildUpdateQuestionList(ui.qCount || 10);
    ui.qIndex = 0;
    ui.answers = {};
  }
  const q = ui.questions[ui.qIndex];

  el.updateStudioBody.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/15 text-cyan-200 border border-cyan-500/35">${ui.qSource === 'ai' ? 'AI-GENERATED' : 'BUILT-IN'} QUESTIONS</span>
          <span class="text-[11px] text-slate-400">Question ${ui.qIndex + 1} of ${ui.questions.length}</span>
        </div>
        <div class="flex items-center gap-1">
          ${[10, 30, 50].map((n) => `<button type="button" data-upd-qcount="${n}" class="upd-count-chip${(ui.qCount || 10) === n ? ' is-on' : ''}">${n}</button>`).join('')}
        </div>
      </div>
      <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-300" style="width:${Math.round(((ui.qIndex + (Object.keys(ui.answers).length > ui.qIndex ? 1 : 0)) / ui.questions.length) * 100)}%"></div></div>
      <div>
        <h4 class="text-sm font-bold text-slate-100 leading-snug">${escapeHtml(q.text)}</h4>
        <p class="text-[11px] text-slate-400 mt-1">${escapeHtml(q.hint || '')}</p>
      </div>
      <div id="updQChips" class="flex flex-wrap items-center gap-1.5">
        ${(q.chips || []).map((c) => `<button type="button" data-upd-chip="${escapeHtml(c)}" class="improver-chip">${escapeHtml(c)}</button>`).join('')}
      </div>
      <textarea id="updQAnswer" rows="3" placeholder="Type your answer (a few words is plenty — or tap a chip above)…" class="w-full bg-[#0d131f] border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 resize-none">${escapeHtml(ui.answers[q.id] || '')}</textarea>
      <div class="rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/10 p-3 text-[10px] text-slate-300 leading-relaxed">
        Prefer the AI to interview you? <button type="button" data-upd-ai-questions class="text-fuchsia-300 underline underline-offset-2 hover:text-fuchsia-200">Generate ${ui.qCount || 10} AI questions from your app + goal instead</button>
      </div>
    </div>
  `;

  const answerInput = el.updateStudioBody.querySelector('#updQAnswer');
  const saveAnswer = () => { ui.answers[q.id] = answerInput.value; };

  el.updateStudioBody.querySelectorAll('[data-upd-chip]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.updChip;
      answerInput.value = answerInput.value ? `${answerInput.value.replace(/\s*$/, '')} ${v}` : v;
      saveAnswer();
    });
  });
  el.updateStudioBody.querySelectorAll('[data-upd-qcount]').forEach((btn) => {
    btn.addEventListener('click', () => {
      ui.qCount = Number(btn.dataset.updQcount);
      ui.qSource = 'local';
      ui.questions = buildUpdateQuestionList(ui.qCount);
      ui.qIndex = 0;
      ui.answers = {};
      renderUpdateStudio();
    });
  });
  const aiBtn = el.updateStudioBody.querySelector('[data-upd-ai-questions]');
  aiBtn.addEventListener('click', async () => {
    await generateAiUpdateQuestions();
  });

  updateStudioSetFooter(`
    <button type="button" data-upd-qback class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <div class="flex items-center gap-2">
      <span class="text-[10px] text-slate-500 hidden sm:inline">Answers weave into the update goal</span>
      <button type="button" data-upd-qnext class="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition">${ui.qIndex === ui.questions.length - 1 ? 'Finish & Weave' : 'Next Question'}</button>
    </div>
  `, (foot) => {
    foot.querySelector('[data-upd-qback]').addEventListener('click', () => {
      saveAnswer();
      if (ui.qIndex > 0) { ui.qIndex -= 1; renderUpdateStudio(); }
      else { ui.view = 'hub'; renderUpdateStudio(); }
    });
    foot.querySelector('[data-upd-qnext]').addEventListener('click', () => {
      saveAnswer();
      if (ui.qIndex < ui.questions.length - 1) {
        ui.qIndex += 1;
        renderUpdateStudio();
      } else {
        weaveUpdateResearchIntoGoal();
        ui.view = 'hub';
        renderUpdateStudio();
        showToast(`Wove ${Object.keys(ui.answers).length} answers into your update goal.`, 'success');
      }
    });
  });
}

function buildAiUpdateQuestionsMetaPrompt(count) {
  const ui = state.evoUi;
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const goal = ui.goal || '(no goal text yet — infer sensible update directions from the files)';
  return [
    'You are an elite software update discovery researcher.',
    `A builder is planning an UPDATE to their existing ${mode.label.toLowerCase()}.`,
    `Their update goal so far: "${goal}"`,
    '',
    `THE CURRENT APP (live codebase summary): index.html is ${state.htmlCode.length} chars, style.css is ${state.cssCode.length} chars, script.js is ${state.jsCode.length} chars.`,
    '',
    `YOUR TASK: produce exactly ${count} interview questions that will help this builder pin down exactly what this update should change, add, fix and polish — grounded in what an update to THIS kind of app can do.`,
    '',
    'Rules:',
    '1. Each question is concrete and answerable in one or two short sentences by a non-technical person.',
    '2. Ask about updates specifically: features to add, things to fix, looks to refresh, habits to protect, data to keep safe.',
    '3. Sequence from most foundational (what should change) to most refined (details, priorities, nice-to-haves).',
    '4. Include a few questions that challenge assumptions and surface risks.',
    '5. Warm, encouraging, plain English — no jargon.',
    '',
    `OUTPUT FORMAT: Return ONLY a numbered list of exactly ${count} questions, one per line, format "1. question text". No headings, no commentary.`
  ].join('\n');
}

async function generateAiUpdateQuestions() {
  const ui = state.evoUi;
  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Add an API key first to generate AI questions.', 'warn');
    return;
  }
  const wasRunning = state.isRunning;
  if (!wasRunning) state.abortController = new AbortController();
  ui.aiLoading = true;
  renderUpdateAiQuestionsLoading();

  try {
    const raw = await callModelUtility(
      'You are an elite software update discovery researcher. You ask precise, insightful, plain-English questions that help non-technical builders decide exactly what their app update should do. You never answer the questions yourself.',
      buildAiUpdateQuestionsMetaPrompt(ui.qCount || 10),
      'Update Question Forge'
    );
    const questions = parseAiQuestions(raw, ui.qCount || 10);
    if (!questions.length) throw new Error('Could not parse questions from the AI response.');
    ui.qSource = 'ai';
    ui.questions = questions.map((q, i) => ({ ...q, section: 'AI Update Research', num: i + 1 }));
    ui.qIndex = 0;
    ui.answers = {};
    ui.view = 'questions';
    showToast(`${questions.length} AI update questions generated!`, 'success');
  } catch (err) {
    if (!err || err.name !== 'AbortError') showToast(`AI question generation failed: ${err.message || err}`, 'error');
    ui.view = 'questions';
  } finally {
    ui.aiLoading = false;
    if (!wasRunning && !state.isRunning) state.abortController = null;
    renderUpdateStudio();
  }
}

function renderUpdateAiQuestionsLoading() {
  el.updateStudioBody.innerHTML = `
    <div class="flex flex-col items-center justify-center gap-4 py-14 text-center">
      <div class="relative w-14 h-14">
        <div class="absolute inset-0 rounded-full border-2 border-cyan-500/25"></div>
        <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin"></div>
        <i data-lucide="help-circle" class="w-5 h-5 text-cyan-300 absolute inset-0 m-auto"></i>
      </div>
      <div>
        <div class="text-sm font-semibold text-slate-100">Forging ${state.evoUi.qCount || 10} AI update questions…</div>
        <div class="text-[11px] text-slate-400 mt-1">The AI is studying your active files, your notes and your goal so far.</div>
      </div>
    </div>
  `;
  refreshIcons();
  updateStudioSetFooter(`
    <button type="button" data-upd-cancel class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Cancel</button>
  `, (foot) => {
    foot.querySelector('[data-upd-cancel]').addEventListener('click', () => {
      if (state.abortController) state.abortController.abort();
      state.evoUi.view = 'hub';
      renderUpdateStudio();
    });
  });
}

function renderUpdateAiIdeas() {
  const ui = state.evoUi;

  if (ui.aiLoading) {
    renderUpdateAiIdeasLoading();
    return;
  }

  el.updateStudioBody.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/35">AI UPDATE IDEAS</span>
            <span class="text-[11px] text-slate-400">${ui.aiIdeas.length ? `${ui.aiIdeas.filter((i) => i.keep).length} of ${ui.aiIdeas.length} kept` : 'Not generated yet'}</span>
          </div>
          <p class="text-[11px] text-slate-400 mt-1 max-w-md">The AI studies your live files, notes and goal, then proposes update ideas. Toggle the ones you want to keep — kept ideas weave into your update goal.</p>
        </div>
        <div class="flex items-center gap-1">
          ${[10, 30, 50].map((n) => `<button type="button" data-upd-icount="${n}" class="upd-count-chip${ui.ideaCount === n ? ' is-on' : ''}">${n}</button>`).join('')}
        </div>
      </div>
      ${ui.goal && ui.goal.trim() ? `<div class="rounded-lg border border-slate-800 bg-[#0d131f] px-3 py-2 text-[10px] text-slate-300 leading-relaxed"><strong class="text-violet-300">Current goal:</strong> ${escapeHtml(ui.goal.trim())}</div>` : ''}
      <div id="updIdeasList" class="space-y-2"></div>
      ${ui.aiIdeas.length === 0 ? `
        <div class="rounded-xl border border-dashed border-slate-700 bg-[#0d131f]/60 p-6 text-center">
          <i data-lucide="lightbulb" class="w-8 h-8 text-fuchsia-400/60 mx-auto mb-2"></i>
          <div class="text-xs font-semibold text-slate-200">No ideas generated yet</div>
          <div class="text-[10px] text-slate-400 mt-1">Pick a count above, then tap Generate. The AI reads your three active files before proposing.</div>
        </div>
      ` : ''}
    </div>
  `;

  const list = el.updateStudioBody.querySelector('#updIdeasList');
  ui.aiIdeas.forEach((idea, i) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = `upd-idea-row${idea.keep ? ' is-keep' : ''}`;
    row.innerHTML = `
      <span class="upd-idea-check">${idea.keep ? '<i data-lucide="check" class="w-3 h-3"></i>' : ''}</span>
      <span class="min-w-0 flex-1 text-left">
        <span class="block text-[11px] font-bold ${idea.keep ? 'text-emerald-200' : 'text-slate-200'}">${escapeHtml(idea.title)}</span>
        <span class="block text-[10px] text-slate-400 leading-snug mt-0.5">${escapeHtml(idea.detail)}</span>
        ${idea.meta ? `<span class="block text-[9px] font-mono-code text-slate-500 mt-1">${escapeHtml(idea.meta)}</span>` : ''}
      </span>
      <span class="text-[9px] font-semibold px-1.5 py-0.5 rounded shrink-0 ${idea.keep ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/35' : 'bg-slate-800 text-slate-400 border border-slate-700'}">${idea.keep ? 'KEEP' : 'IGNORE'}</span>
    `;
    row.addEventListener('click', () => {
      idea.keep = !idea.keep;
      saveStudioConfig();
      renderUpdateStudio();
    });
    list.appendChild(row);
  });

  el.updateStudioBody.querySelectorAll('[data-upd-icount]').forEach((btn) => {
    btn.addEventListener('click', () => {
      ui.ideaCount = Number(btn.dataset.updIcount);
      renderUpdateStudio();
    });
  });

  updateStudioSetFooter(`
    <button type="button" data-upd-iback class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Back</button>
    <div class="flex items-center gap-2">
      ${ui.aiIdeas.length ? `<button type="button" data-upd-iclear class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition">Clear List</button>` : ''}
      <button type="button" data-upd-igenerate class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-bold transition"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Generate ${ui.ideaCount} Ideas</button>
      ${ui.aiIdeas.some((i) => i.keep) ? `<button type="button" data-upd-iweave class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition"><i data-lucide="wand-2" class="w-3.5 h-3.5"></i> Weave ${ui.aiIdeas.filter((i) => i.keep).length} Into Goal</button>` : ''}
    </div>
  `, (foot) => {
    foot.querySelector('[data-upd-iback]').addEventListener('click', () => {
      ui.view = 'hub';
      renderUpdateStudio();
    });
    const gen = foot.querySelector('[data-upd-igenerate]');
    gen.addEventListener('click', generateUpdateIdeas);
    const clear = foot.querySelector('[data-upd-iclear]');
    if (clear) clear.addEventListener('click', () => {
      ui.aiIdeas = [];
      renderUpdateStudio();
    });
    const weave = foot.querySelector('[data-upd-iweave]');
    if (weave) weave.addEventListener('click', () => {
      weaveUpdateResearchIntoGoal();
      ui.view = 'hub';
      renderUpdateStudio();
      showToast('Kept ideas woven into your update goal.', 'success');
    });
  });
}

function renderUpdateAiIdeasLoading() {
  el.updateStudioBody.innerHTML = `
    <div class="flex flex-col items-center justify-center gap-4 py-14 text-center">
      <div class="relative w-14 h-14">
        <div class="absolute inset-0 rounded-full border-2 border-fuchsia-500/25"></div>
        <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-fuchsia-400 animate-spin"></div>
        <i data-lucide="lightbulb" class="w-5 h-5 text-fuchsia-300 absolute inset-0 m-auto"></i>
      </div>
      <div>
        <div class="text-sm font-semibold text-slate-100">Reading your app & forging ${state.evoUi.ideaCount} update ideas…</div>
        <div class="text-[11px] text-slate-400 mt-1">The AI is studying all three active files, your notes.txt and your goal.</div>
      </div>
    </div>
  `;
  refreshIcons();
  updateStudioSetFooter(`
    <button type="button" data-upd-cancel class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Cancel</button>
  `, (foot) => {
    foot.querySelector('[data-upd-cancel]').addEventListener('click', () => {
      if (state.abortController) state.abortController.abort();
      state.evoUi.aiLoading = false;
      state.evoUi.view = 'aiIdeas';
      renderUpdateStudio();
    });
  });
}

function buildUpdateIdeasMetaPrompt(count) {
  const ui = state.evoUi;
  const cfg = state.studioConfig;
  const mode = STUDIO_CATALOG.projectTypes[cfg.projectType] || STUDIO_CATALOG.projectTypes.app;
  const goal = ui.goal || '(no goal text yet — infer sensible update directions)';
  return [
    'You are a world-class product update strategist for single-file web apps (vanilla HTML/CSS/JS).',
    `A builder is planning an update to their existing ${mode.label.toLowerCase()}.`,
    `Their update goal so far: "${goal}"`,
    '',
    'THE LIVE APP FILES are provided below — read them and base your ideas on what is ACTUALLY there.',
    `=== index.html (${state.htmlCode.length} chars) ===\n${state.htmlCode.slice(0, 12000)}`,
    `=== style.css (${state.cssCode.length} chars) ===\n${state.cssCode.slice(0, 12000)}`,
    `=== script.js (${state.jsCode.length} chars) ===\n${state.jsCode.slice(0, 20000)}`,
    '',
    `YOUR TASK: propose exactly ${count} DISTINCT, concrete update ideas this app could receive. Ground them in the real code (name real features/sections you saw). Cover a healthy mix: quick wins, visual polish, UX improvements, new features, performance, and data safety.`,
    '',
    'Rules:',
    '1. Every idea is concrete and specific to THIS app — no generic filler.',
    '2. Ideas are independent (keeping one should not require another).',
    '3. Order them from highest value to lowest.',
    '',
    `OUTPUT FORMAT: exactly ${count} lines, one per idea, format:`,
    '"N. [CATEGORY] Short title :: 1-2 sentence description :: impact Low|Med|High / effort Low|Med|High"',
    'Categories: FEATURE | POLISH | UX | PERF | DATA | GAME | A11Y. No extra commentary.'
  ].join('\n');
}

function parseUpdateIdeas(rawText, count) {
  const ideas = [];
  const seen = new Set();
  String(rawText || '').split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s*(\d{1,3})[.)\]]\s*\[?([A-Za-z0-9 &/]+)\]?\s*(.+)$/);
    if (!m) return;
    let rest = m[3];
    let title = rest.split('::')[0].trim();
    const detailPart = rest.split('::').slice(1).join('::').trim();
    const metaMatch = detailPart.match(/impact\s*(Low|Med|High)[\s/|]*(?:effort\s*)?(Low|Med|High)/i);
    const detail = detailPart.replace(/impact\s*(Low|Med|High)[\s/|]*(?:effort\s*)?(Low|Med|High)\s*$/i, '').trim();
    if (!title || title.length < 4) return;
    const key = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) return;
    seen.add(key);
    ideas.push({
      id: `idea_${ideas.length}`,
      category: (m[2] || 'IDEA').trim().toUpperCase(),
      title: title.replace(/^["']|["']$/g, ''),
      detail: detail || title,
      meta: metaMatch ? `impact ${metaMatch[1]} · effort ${metaMatch[2]}` : (m[2] || '').trim().toUpperCase(),
      keep: false
    });
  });
  return ideas.slice(0, count);
}

async function generateUpdateIdeas() {
  const ui = state.evoUi;
  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Add an API key first to generate update ideas.', 'warn');
    return;
  }
  const wasRunning = state.isRunning;
  if (!wasRunning) state.abortController = new AbortController();
  ui.aiLoading = true;
  renderUpdateAiIdeasLoading();

  try {
    const raw = await callModelUtility(
      'You are a world-class product update strategist. You propose concrete, codebase-grounded update ideas for single-file web apps, formatted exactly as requested. You never add commentary.',
      buildUpdateIdeasMetaPrompt(ui.ideaCount || 30),
      'AI Idea Forge'
    );
    const ideas = parseUpdateIdeas(raw, ui.ideaCount || 30);
    if (!ideas.length) throw new Error('Could not parse ideas from the AI response — try again.');
    ui.aiIdeas = ideas;
    showToast(`${ideas.length} update ideas generated — toggle the ones to keep.`, 'success');
  } catch (err) {
    if (!err || err.name !== 'AbortError') showToast(`Idea generation failed: ${err.message || err}`, 'error');
  } finally {
    ui.aiLoading = false;
    if (!wasRunning && !state.isRunning) state.abortController = null;
    ui.view = 'aiIdeas';
    renderUpdateStudio();
  }
}

function weaveUpdateResearchIntoGoal() {
  const ui = state.evoUi;
  const parts = [];

  if (ui.goal && ui.goal.trim()) parts.push(ui.goal.trim());

  const kept = (ui.aiIdeas || []).filter((i) => i.keep);
  if (kept.length) {
    parts.push(`INCLUDE THESE UPDATE IDEAS (user kept them):\n${kept.map((i, n) => `${n + 1}. [${i.category}] ${i.title} — ${i.detail}`).join('\n')}`);
  }

  const answered = Object.entries(ui.answers || {})
    .map(([id, ans]) => {
      const q = (ui.questions || []).find((x) => x.id === id);
      const text = ans && String(ans).trim();
      if (!text) return null;
      return `- ${q ? q.text : 'Question'} → ${text.trim()}`;
    })
    .filter(Boolean);
  if (answered.length) {
    parts.push(`UPDATE INTERVIEW ANSWERS:\n${answered.join('\n')}`);
  }

  if (parts.length === 0) return;
  ui.goal = parts.join('\n\n');
}

function renderUpdateRunning() {
  const evo = state.evoRun;
  const ui = state.evoUi;
  if (!evo || evo.kind !== 'update' || evo.completed) {
    ui.view = 'hub';
    renderUpdateStudio();
    return;
  }
  const steps = UPDATE_PIPELINE_STEPS;
  const doneCount = Object.keys(evo.completedSteps || {}).length;
  const running = Boolean(evo.isRunning);
  const nextStep = steps[Math.min(evo.nextStepIndex, steps.length - 1)];

  el.updateStudioBody.innerHTML = `
    <div class="space-y-4">
      <div class="rounded-xl border ${running ? 'border-violet-500/40 bg-violet-950/20' : 'border-cyan-500/40 bg-cyan-950/15'} p-3.5 space-y-2">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="text-[11px] font-bold ${running ? 'text-violet-200' : 'text-cyan-200'}">${running ? `Running Update Step ${Math.min(evo.nextStepIndex + 1, 50)}/50 — ${escapeHtml(nextStep.stageName)}` : `Paused at Step ${Math.min(evo.nextStepIndex + 1, 50)}/50`}</span>
          <span class="font-mono-code text-[10px] text-slate-400">${doneCount}/50 complete · target ${escapeHtml(evo.label)}</span>
        </div>
        <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 transition-all duration-300" style="width:${(doneCount / 50) * 100}%"></div></div>
        <div class="text-[10px] text-slate-400 leading-relaxed">Current role: <strong class="text-slate-200">${escapeHtml(nextStep.role)}</strong> — ${escapeHtml(nextStep.mainTask)}</div>
        ${evo.baseLabel ? `<div class="text-[10px] text-slate-500">Updating from ${escapeHtml(evo.baseLabel)} → every previous version stays safe in its own tab.</div>` : ''}
      </div>
      <div class="rounded-xl border border-slate-800 bg-[#090d14] p-3.5">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Update goal riding along (attached to every step with the active files)</span>
        </div>
        <div class="text-[11px] text-slate-300 leading-relaxed max-h-32 overflow-y-auto scroll-fade-bottom whitespace-pre-wrap">${escapeHtml((evo.goal || '').slice(0, 1200)) || '(no goal text)'}</div>
      </div>
      <div class="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-3.5 text-[10px] text-slate-400 leading-relaxed">
        The full step-by-step checklist is live in the left panel — filter by phase (Research / Design / Blueprint / Verify / Deliver). Tap any completed step there to read its output.
      </div>
    </div>
  `;

  updateStudioSetFooter(`
    <div class="text-[10px] text-slate-500">${running ? 'You can close this modal — the update keeps running.' : 'Resume when ready — progress is saved.'}</div>
    <div class="flex items-center gap-2">
      <button type="button" data-upd-close class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Close</button>
      ${running
        ? '<button type="button" data-upd-pause class="px-4 py-1.5 rounded-lg bg-amber-600/25 hover:bg-amber-600/40 border border-amber-500/45 text-amber-100 text-xs font-semibold transition">Pause Update</button>'
        : '<button type="button" data-upd-resume class="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition">Resume Update</button>'}
    </div>
  `, (foot) => {
    foot.querySelector('[data-upd-close]').addEventListener('click', () => {
      el.updateStudioModal.classList.add('hidden');
      trackModalClosed(el.updateStudioModal);
    });
    const pauseBtn = foot.querySelector('[data-upd-pause]');
    if (pauseBtn) pauseBtn.addEventListener('click', () => {
      if (state.abortController) state.abortController.abort();
    });
    const resumeBtn = foot.querySelector('[data-upd-resume]');
    if (resumeBtn) resumeBtn.addEventListener('click', async () => {
      await runEvoPipeline('update', true);
    });
  });
}

// =========================================================================
// EVO RUNNER — shared engine for the 50-Step Update Pipeline and the
// 10-Step Design Polish. Sends the original prompt + notes.txt + the THREE
// ACTIVE FILES with EVERY step so the AI always works from the live code.
// =========================================================================
function buildEvoStepPrompts(stepObj) {
  const evo = state.evoRun;
  const isUpdate = evo.kind === 'update';
  const total = isUpdate ? 50 : 10;
  const cfg = state.studioConfig;
  const dynamicBlueprint = compileDynamicStepBlueprint(stepObj);
  const stepLabel = `Step ${stepObj.num}/${total}`;
  const modeName = isUpdate ? 'UPDATE' : 'DESIGN POLISH';

  const filesBlock =
    `CURRENT ACTIVE FILES — the live codebase being ${isUpdate ? 'updated' : 'polished'} (single source of truth; preserve everything not explicitly changed):\n` +
    `=== index.html (current) ===\n${evo.files.html || '(empty)'}\n\n` +
    `=== style.css (current) ===\n${evo.files.css || '(empty)'}\n\n` +
    `=== script.js (current) ===\n${evo.files.js || '(empty)'}`;

  if (stepObj.targetFile) {
    const fileMap = { html: 'index.html', css: 'style.css', js: 'script.js' };
    const target = fileMap[stepObj.targetFile];
    const systemPrompt =
      `You are the ${stepObj.role} executing ${stepLabel} of a ${total}-step ${modeName} PIPELINE (Phase ${stepObj.stage}: ${stepObj.stageName} | ${stepObj.section}) that evolves an EXISTING working web app.\n` +
      `Your mission: emit the complete, production-ready UPDATED ${target} — the current file with every change from the locked update manifests applied, and every untouched region preserved.\n\n` +
      `Non-Negotiable Rules:\n` +
      `1. Main Task: ${stepObj.mainTask}\n` +
      `2. Supporting Task: ${stepObj.supportTask}\n` +
      `3. Quality Gate: ${stepObj.qualityGate}\n` +
      `4. ${isUpdate ? 'Apply ONLY the planned changes — this is an evolution, not a rewrite. Untouched regions survive byte-for-byte.' : 'This is a DETAIL-POLISH pass — refine what exists (spacing, type, color, surface, light, icons, motion timing). NO layout redesigns, NO new features, NO structural changes.'}\n` +
      `5. Output ONLY raw, complete, production-ready ${target} code — zero markdown fences, zero commentary, zero TODOs, zero "// ... rest of code" shortcuts, nothing truncated.\n` +
      `6. Mode-Adaptive Focus: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}`;

    const userPrompt =
      `ORIGINAL BUILD PROMPT:\n${state.userPrompt || '(not provided)'}\n\n` +
      (isUpdate
        ? `UPDATE GOAL (what this update must deliver):\n${evo.goal || '(see notebook header)'}\n\n`
        : `POLISH FOCUS (graphic design refinement only):\n${evo.goal || 'Polish and perfect the graphic design details of the existing app — refinement, not redesign.'}\n\n`) +
      `DYNAMIC PRE-PROMPT BLUEPRINT:\n${dynamicBlueprint}\n\n` +
      `${stepLabel} MISSION:\n` +
      `- Main Task: ${stepObj.mainTask}\n` +
      `- Supporting Task: ${stepObj.supportTask}\n` +
      `- Creative Stretch: ${stepObj.creativeStretch}\n` +
      `- Quality Gate: ${stepObj.qualityGate}\n` +
      `- Mode-Adaptive Focus: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}\n` +
      `- Guidance: ${stepObj.directive}\n\n` +
      `${filesBlock}\n\n` +
      `${isUpdate ? 'UPDATE' : 'POLISH'} RUN NOTEBOOK SO FAR (this run's decisions):\n${evo.notes || '(this is the first emission step of this run)'}`;

    return { systemPrompt, userPrompt };
  }

  const systemPrompt =
    `You are the ${stepObj.role} executing ${stepLabel} of a ${total}-step ${modeName} PIPELINE (Phase ${stepObj.stage}: ${stepObj.stageName} | ${stepObj.section}) that evolves an EXISTING working web app.\n` +
    (isUpdate
      ? 'Philosophy: research the live codebase honestly, design an evolution that protects users\' data and habits, blueprint exact code-level changes, verify relentlessly, and deliver the updated files. Refuse scope creep; the update serves its goal and nothing else.'
      : 'Philosophy: this is a GRAPHIC DESIGN POLISH pass — find every visual element that can be refined, tidied, detailed and perfected WITHOUT changing layout structure, features or content. The app should look exactly like itself, but finished by a master designer.') +
    `\n\n` +
    `How to Work:\n` +
    `- Dual-Task Mastery: deliver BOTH the Main Task (${stepObj.mainTask}) AND the Supporting Task (${stepObj.supportTask}).\n` +
    `- Mandatory Creative Stretch: ${stepObj.creativeStretch}\n` +
    `- Insight Harvest Rule: ${stepObj.insightHarvest}\n` +
    `- Quality Gate: ${stepObj.qualityGate}\n` +
    `- Mode-Adaptive Focus: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}\n` +
    `- Cite the ACTUAL code you read (real IDs, classes, functions) — never generic textbook filler.\n` +
    `- Required Output Structure (use these exact 4 headings):\n` +
    `  ### 1. Upstream Insight Harvest & Upgrades\n` +
    `  (Cite 3–5 specific findings/decisions from earlier in this run's notebook, explain how you build on or upgrade them, flag tensions you resolve.)\n` +
    `  ### 2. Core Specification (Main + Supporting Tasks)\n` +
    `  (Deep, concrete, exhaustive — real names from the files, exact values, exact code where relevant.)\n` +
    `  ### 3. Creative Breakthrough & Critical Deliverables\n` +
    `  (Deliver every item in Critical Deliverables with concrete detail.)\n` +
    `  ### 4. New Dynamic Insights & Downstream Handoff\n` +
    `  (3+ newly discovered non-obvious insights + exact action directives for ${stepObj.downstreamTarget}.)\n` +
    `- Do NOT emit full index.html / style.css / script.js files in this step${isUpdate ? ' (final code emission happens in Update Steps 48–50)' : ' (final code emission happens in Polish Steps 8–10)'}.`;

  const userPrompt =
    `ORIGINAL BUILD PROMPT:\n${state.userPrompt || '(not provided)'}\n\n` +
    (isUpdate
      ? `UPDATE GOAL (what this update must deliver):\n${evo.goal || '(see notebook header)'}\n\n`
      : `POLISH FOCUS (graphic design refinement only — detail, not change):\n${evo.goal || 'Polish and perfect the graphic design of the existing app: spacing, typography, color, surfaces, light, icons, micro-motion. Refinement only.'}\n\n`) +
    `DYNAMIC PRE-PROMPT BLUEPRINT (INTERTWINED INTO THIS STEP):\n${dynamicBlueprint}\n\n` +
    `${stepLabel} ASSIGNMENT — ${stepObj.role}:\n` +
    `- Main Task: ${stepObj.mainTask}\n` +
    `- Supporting Task: ${stepObj.supportTask}\n` +
    `- Creative Stretch: ${stepObj.creativeStretch}\n` +
    `- Insight Harvest Focus: ${stepObj.insightHarvest}\n` +
    `- Critical Deliverables Required: ${stepObj.criticalDeliverables}\n` +
    `- Quality Gate (must pass before replying): ${stepObj.qualityGate}\n` +
    `- Mode-Adaptive Focus for this build: ${stepObj.adaptiveFocus ? stepObj.adaptiveFocus[cfg.projectType] || stepObj.adaptiveFocus.app : ''}\n` +
    `- Upstream Inputs: ${stepObj.upstreamInputs}\n` +
    `- Downstream Target: ${stepObj.downstreamTarget}\n` +
    `- Deep Guidance: ${stepObj.directive}\n\n` +
    `${filesBlock}\n\n` +
    `${isUpdate ? 'UPDATE' : 'POLISH'} RUN NOTEBOOK SO FAR:\n${evo.notes || '(Empty — this is Step 1 of the run: set an extraordinary bar.)'}`;

  return { systemPrompt, userPrompt };
}

function persistEvoRun() {
  try {
    if (state.evoRun) {
      safeSet('wbs_evo_run', JSON.stringify({
        ...state.evoRun,
        completedSteps: state.evoRun.completedSteps || {},
        isRunning: false
      }));
      safeSet('wbs_evo_active', state.evoRun.isRunning ? '1' : '0');
    } else {
      safeSet('wbs_evo_run', '');
      safeSet('wbs_evo_active', '0');
    }
  } catch (_) {}
}

async function runEvoPipeline(kind, resume = false) {
  if (state.isRunning) {
    showToast('A pipeline is already running.', 'warn');
    return;
  }
  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Please add at least one Google AI Studio API key first.', 'warn');
    if (window.innerWidth >= 1280 && el.apiKeyInput) el.apiKeyInput.focus();
    else el.manageKeysBtn.click();
    return;
  }
  if (stats.readyCount === 0 && stats.limitedCount === 0) {
    showToast('All saved API keys are invalid. Please add a valid key.', 'error');
    el.manageKeysBtn.click();
    return;
  }
  const hasFiles = Boolean((state.htmlCode || '').trim() || (state.cssCode || '').trim() || (state.jsCode || '').trim());
  if (!hasFiles) {
    showToast('No active files yet — run the 50-point build, paste code, or upload your HTML/CSS/JS files first.', 'warn');
    return;
  }

  ensureVersionSystem();
  syncActiveVersionFromEditors();
  const steps = kind === 'update' ? UPDATE_PIPELINE_STEPS : POLISH_PIPELINE_STEPS;

  let evo;
  if (resume && state.evoRun && state.evoRun.kind === kind && state.evoRun.nextStepIndex < steps.length) {
    evo = state.evoRun;
    if (kind === 'update') {
      const goalInput = document.getElementById('updateGoalInput');
      if (goalInput) state.evoUi.goal = goalInput.value;
      evo.goal = (state.evoUi.goal || evo.goal || '').trim();
    } else {
      const focusInput = document.getElementById('polishFocusInput');
      if (focusInput) state.evoUi.polishFocus = focusInput.value;
      evo.goal = (state.evoUi.polishFocus || evo.goal || '').trim();
    }
  } else {
    const goal = kind === 'update'
      ? (state.evoUi.goal || '').trim()
      : (state.evoUi.polishFocus || '').trim();
    if (kind === 'update' && !goal) {
      showToast('Describe what this update should do first — even one sentence.', 'warn');
      state.evoUi.view = 'hub';
      renderUpdateStudio();
      return;
    }
    const verNum = state.versions.length + 1;
    evo = state.evoRun = {
      kind,
      goal,
      baseVersionId: state.activeVersionId,
      baseLabel: getCurrentVersion().label,
      label: kind === 'update' ? `V${verNum} • Updated` : `V${verNum} • Design Polished`,
      notes: '',
      files: { html: state.htmlCode || '', css: state.cssCode || '', js: state.jsCode || '' },
      completedSteps: {},
      nextStepIndex: 0,
      startedAt: Date.now(),
      isRunning: true
    };
    const ts = new Date().toISOString();
    evo.notes =
      `========================================================================\n` +
      `${kind === 'update' ? '50-STEP UPDATE PIPELINE LEDGER' : '10-STEP GRAPHIC DESIGN POLISH LEDGER'} (${ts})\n` +
      `BASE VERSION: ${evo.baseLabel} | TARGET: ${evo.label}\n` +
      `========================================================================\n` +
      (kind === 'update' ? `UPDATE GOAL:\n${goal}\n` : `POLISH FOCUS:\n${goal || 'Refine and perfect the graphic design — detail, not change.'}\n`) +
      `========================================================================\n`;
    setPipelineMode(kind === 'update' ? 'update' : 'polish');
    if (el.updateStudioModal && el.updateStudioModal.classList.contains('hidden') === false && kind === 'update') {
      state.evoUi.view = 'running';
      renderUpdateStudio();
    }
  }

  evo.isRunning = true;
  state.isRunning = true;
  state.isPaused = false;
  state.isFrozen = false;
  state.abortController = new AbortController();
  state.sessionCalls = 0;
  state.sessionRetries = 0;
  state.stepDurations = [];
  state.runStartedAt = Date.now();
  saveWorkspaceSnapshot();
  persistEvoRun();
  updateControlButtons();
  await acquireWakeLock();
  startBackgroundAudioKeepAlive();

  const isUpdate = kind === 'update';
  const runLabel = isUpdate ? 'Update' : 'Polish';
  let deliberatelyPaused = false;

  const executeLoop = async () => {
    try {
      for (let idx = evo.nextStepIndex; idx < steps.length; idx++) {
        const step = { ...steps[idx], total: steps.length };
        const stepStartTs = Date.now();
        const kindName = isUpdate ? 'Update' : 'Polish';

        el.pipelineStatusText.textContent = `${kindName} ${step.num}/${steps.length} (${step.stageName}): ${step.role}...`;
        updateProgressUI(step.num, false);
        renderChecklist(step.num, false);
        updateLiveNotificationBar({
          mode: 'running',
          title: `${kindName} Step ${step.num}/${steps.length} • ${step.stageName}`,
          detail: step.role,
          stepNum: step.num,
          forceOs: idx === evo.nextStepIndex
        });

        const { systemPrompt, userPrompt } = buildEvoStepPrompts(step);
        const rawOutput = await callPrimaryModelRespectful(systemPrompt, userPrompt, step);

        let processedOutput = rawOutput;
        if (step.targetFile) {
          processedOutput = stripMarkdownCodeFences(rawOutput);
          evo.files[step.targetFile] = processedOutput;
        }

        evo.notes += `\n--- [${isUpdate ? 'UPDATE' : 'POLISH'} STEP ${step.num}/${steps.length} | ${step.stageName.toUpperCase()} (${step.section}): ${step.role}] ---\n${processedOutput}\n`;
        evo.completedSteps[step.num] = { timestamp: new Date().toISOString() };
        evo.nextStepIndex = idx + 1;
        state.stepDurations.push(Date.now() - stepStartTs);
        persistEvoRun();
        updateProgressUI(step.num, false);
        renderChecklist(step.num, false);

        if (el.updateStudioModal && !el.updateStudioModal.classList.contains('hidden') && isUpdate) {
          renderUpdateStudio();
        }
        if (el.polishModal && !el.polishModal.classList.contains('hidden') && !isUpdate) {
          renderPolishRunning();
        }

        if (idx < steps.length - 1) {
          await sleepWithAbort(state.delayMs, state.abortController.signal, (rem) => {
            el.pipelineStatusText.textContent = `${kindName} Step ${step.num}/${steps.length} complete — next in ${(rem / 1000).toFixed(1)}s...`;
          });
        }
      }

      // Success — create the new version.
      const baseNotes = (state.notesText || '').trim();
      const combinedNotes = baseNotes ? `${baseNotes}\n\n${evo.notes}` : evo.notes;
      const version = createVersion(evo.label, evo.files, combinedNotes, kind === 'update' ? 'update' : 'polish', true);
      el.pipelineStatusText.textContent = isUpdate
        ? `50-Step Update complete — ${version.label} is live in its own tab!`
        : `10-Step Design Polish complete — ${version.label} is live in its own tab!`;
      updateLiveNotificationBar({
        mode: 'complete',
        title: isUpdate ? 'Update Complete!' : 'Design Polish Complete!',
        detail: `${version.label} created — every previous version stays safe in its tab.`,
        stepNum: steps.length,
        forceOs: true
      });
      showToast(`${version.label} created — Preview is showing it now. Previous versions stay safe.`, 'success');
      switchTab('preview');
      // Keep the finished run on screen (checklist shows all completed steps), marked complete.
      evo.isRunning = false;
      evo.completed = true;
      state.evoUi.view = 'done';
      persistEvoRun();
      updateProgressUI(0, false);
      renderChecklist(0, false);
      if (el.updateStudioModal && !el.updateStudioModal.classList.contains('hidden')) renderUpdateStudio();
      if (el.polishModal && !el.polishModal.classList.contains('hidden')) renderPolishDone(version.label);
    } catch (err) {
      if (err.name === 'AbortError') {
        deliberatelyPaused = true;
        state.isPaused = true;
        evo.isRunning = false;
        persistEvoRun();
        el.pipelineStatusText.textContent = `${runLabel} paused at Step ${evo.nextStepIndex + 1}/${steps.length} — resume anytime, progress saved.`;
        updateLiveNotificationBar({
          mode: 'paused',
          title: `${runLabel} Paused at Step ${evo.nextStepIndex}/${steps.length}`,
          detail: 'Resume anytime — progress is saved.',
          stepNum: evo.nextStepIndex,
          forceOs: true
        });
        showToast(`${runLabel} paused cleanly at Step ${evo.nextStepIndex}/${steps.length}.`, 'warn');
        if (el.updateStudioModal && !el.updateStudioModal.classList.contains('hidden') && isUpdate) renderUpdateStudio();
        if (el.polishModal && !el.polishModal.classList.contains('hidden')) renderPolishModal();
      } else {
        evo.isRunning = false;
        persistEvoRun();
        const msg = err.message || String(err);
        el.pipelineStatusText.textContent = `${runLabel} stopped on Step ${evo.nextStepIndex + 1} — see details, then resume`;
        showErrorBanner(`${runLabel} Step ${evo.nextStepIndex + 1}/${steps.length}: ${msg}`);
        updateLiveNotificationBar({
          mode: 'error',
          title: `${runLabel} Stopped on Step ${evo.nextStepIndex + 1}/${steps.length}`,
          detail: msg,
          stepNum: evo.nextStepIndex + 1,
          forceOs: true
        });
        showToast(`${runLabel} stopped due to API error — resume when ready.`, 'error');
        if (el.updateStudioModal && !el.updateStudioModal.classList.contains('hidden') && isUpdate) renderUpdateStudio();
        if (el.polishModal && !el.polishModal.classList.contains('hidden')) renderPolishModal();
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
      if (state.evoRun) state.evoRun.isRunning = false;
      persistEvoRun();
      updateProgressUI(0, false);
      renderChecklist(0, false);
      updateControlButtons();
      saveWorkspaceSnapshot();
      if (deliberatelyPaused || !state.evoRun) {
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

// =========================================================================
// BUG DOCTOR — a non-AI scanner that runs real bug-finding techniques over
// the ACTIVE files (static analysis + live preview runtime errors), lists
// every finding, then (optionally) hands the exact bugs to the AI for a
// surgical fix that lands in a NEW version tab.
// =========================================================================
function countLine(src, idx) {
  let line = 1;
  for (let i = 0; i < idx && i < src.length; i++) if (src[i] === '\n') line++;
  return line;
}

function scanHtmlForBugs(html) {
  const findings = [];
  const push = (severity, title, detail, idx, snippet) => findings.push({
    file: 'index.html', line: Number.isFinite(idx) ? countLine(html, idx) : null,
    severity, title, detail, snippet: snippet || ''
  });

  if (!html.trim()) return findings;

  const ids = [];
  const idRe = /\bid\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = idRe.exec(html)) !== null) {
    ids.push({ id: m[1], idx: m.index });
    if (/^(true|false|null|undefined)$/i.test(m[1])) {
      push('warn', `Suspicious id="${m[1]}"`, 'This id value looks like it came from a JS boolean/null leak (e.g. id="${someVar}").', m.index);
    }
  }
  const seenIds = new Map();
  ids.forEach(({ id, idx }) => {
    if (seenIds.has(id)) push('error', `Duplicate id "${id}"`, `Already used on line ${seenIds.get(id)}. Duplicate ids break getElementById and label/aria wiring.`, idx);
    else seenIds.set(id, countLine(html, idx));
  });

  if (!/name=["']?viewport["']?/i.test(html)) push('warn', 'Missing viewport meta tag', 'Phones will render at 980px and zoom out — the app will look tiny on mobile.');
  if (!/charset/i.test(html)) push('error', 'Missing charset declaration', 'Add <meta charset="UTF-8"> or special characters will render as mojibake.');
  if (!/<html[^>]*\slang=["']?[a-z-]{2,}["']?/i.test(html)) push('info', 'Missing lang attribute', 'Screen readers cannot pick the right pronunciation without <html lang="en">.');
  if (!/<title>[^<]+<\/title>/i.test(html)) push('warn', 'Missing or empty <title>', 'The browser tab and bookmarks will be blank.');

  const imgRe = /<img\b[^>]*>/gi;
  while ((m = imgRe.exec(html)) !== null) {
    if (!/\balt\s*=/i.test(m[0])) push('warn', '<img> without alt attribute', 'Screen readers will announce the raw filename. Add alt="" if decorative.', m.index);
  }

  const inlineHandlerRe = /\son(click|change|input|load|error|submit|mouseover)\s*=\s*["']([^"']*)["']/gi;
  let inlineCount = 0;
  while ((m = inlineHandlerRe.exec(html)) !== null) {
    inlineCount++;
    if (/_\s*\(|eval\(/.test(m[2])) push('error', `Inline handler with eval-like code (${m[1]})`, 'Inline JS with eval breaks CSP and invites XSS. Move to script.js.', m.index);
  }
  if (inlineCount > 0) push('info', `${inlineCount} inline on* handler(s)`, 'Inline handlers (onclick=...) mix concerns and break under strict CSP. Prefer event delegation in script.js.');

  const deprecatedRe = /<(center|font|marquee|big|strike|blink)\b/gi;
  while ((m = deprecatedRe.exec(html)) !== null) {
    push('warn', `Deprecated tag <${m[1]}>`, 'Removed or unreliable in modern browsers. Use CSS instead.', m.index);
  }

  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polygon', 'polyline', 'ellipse', 'stop', 'use']);
  const pairRe = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)([^>]*?)>/g;
  const stack = [];
  while ((m = pairRe.exec(html)) !== null) {
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    if (voidTags.has(tag)) continue;
    if (m[3] && /\/\s*$/.test(m[3])) continue;
    if (!closing) stack.push({ tag, idx: m.index });
    else {
      let found = false;
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) {
          for (let j = stack.length - 1; j > i; j--) {
            push('error', `Unclosed <${stack[j].tag}>`, `Expected </${stack[j].tag}> before <${tag}> closes an outer scope — nesting is broken.`, stack[j].idx);
          }
          stack.length = i;
          found = true;
          break;
        }
      }
      if (!found) push('warn', `Stray closing </${tag}>`, 'A closing tag with no matching opening tag.', m.index);
    }
  }
  if (stack.length) {
    stack.slice(0, 3).forEach((t) => push('error', `Unclosed <${t.tag}>`, 'Reached end of file without a closing tag.', t.idx));
  }

  if (/<a\b[^>]*href\s*=\s*["']\s*["']/i.test(html)) push('warn', 'Empty link href (href="")', 'An empty href makes the link reload the page. Use href="#" with preventDefault, or a button.');
  return findings;
}

function scanCssForBugs(css, html, js) {
  const findings = [];
  const push = (severity, title, detail, idx, snippet) => findings.push({
    file: 'style.css', line: Number.isFinite(idx) ? countLine(css, idx) : null,
    severity, title, detail, snippet: snippet || ''
  });
  if (!css.trim()) return findings;

  let depth = 0;
  let inComment = false;
  for (let i = 0; i < css.length; i++) {
    if (!inComment && css.startsWith('/*', i)) inComment = true;
    else if (inComment && css.startsWith('*/', i)) { inComment = false; i++; }
    else if (!inComment && css[i] === '{') depth++;
    else if (!inComment && css[i] === '}') {
      depth--;
      if (depth < 0) {
        push('error', 'Unexpected "}" — extra closing brace', 'A closing brace with no matching opener. Everything after it may be ignored.', i);
        depth = 0;
      }
    }
  }
  if (inComment) push('error', 'Unterminated /* comment', 'A comment was never closed — the rest of the file is commented out.');
  if (depth > 0) push('error', `${depth} unclosed "{" brace(s)`, 'Missing closing brace(s) — trailing rules will silently break.');

  const blockRe = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  const selectorCounts = new Map();
  while ((m = blockRe.exec(css)) !== null) {
    const sel = m[1].trim().replace(/\s+/g, ' ');
    const body = m[2].trim();
    if (!body) push('warn', `Empty rule for "${sel.slice(0, 48)}"`, 'A selector with no properties — dead weight or a missing declaration.', m.index);
    const norm = sel.replace(/\s+/g, ' ');
    selectorCounts.set(norm, (selectorCounts.get(norm) || 0) + 1);
  }
  selectorCounts.forEach((count, sel) => {
    if (count > 1 && sel.length < 60) push('info', `Duplicate selector "${sel}" (x${count})`, 'Multiple blocks style the same selector — later ones win. Consider merging them.');
  });

  if (!/:focus(-visible)?/i.test(css)) push('warn', 'No :focus styles anywhere', 'Keyboard users get only the browser default focus ring — or none in some resets. Add :focus-visible styles.');
  const bangCount = (css.match(/!important/g) || []).length;
  if (bangCount > 12) push('info', `${bangCount} !important declarations`, 'High !important usage signals specificity wars; future updates get harder.');

  // Cross-check class selectors against HTML + JS
  const classRe = /\.([a-zA-Z][a-zA-Z0-9_-]*)/g;
  const htmlBlob = `${html}\n${js}`;
  let deadChecked = 0;
  while ((m = classRe.exec(css)) && deadChecked < 400) {
    const cls = m[1];
    if (/^(is-|has-|bl-|tex-|lbd-)/.test(cls)) continue;
    deadChecked++;
    if (!htmlBlob.includes(cls)) {
      push('info', `Possibly unused class ".${cls}"`, 'Not found in index.html nor in script.js (dynamic toggles) — may be dead CSS, or built dynamically the scanner cannot see.');
    }
  }
  return findings;
}

function stripJsForSyntaxCheck(code) {
  return code.replace(/^\s*(import|export)\b.*$/gm, (line) => line.replace(/^\s*(import|export)\b/, '/*$1*/'));
}

function scanJsForBugs(js, html, css) {
  const findings = [];
  const push = (severity, title, detail, idx, snippet) => findings.push({
    file: 'script.js', line: Number.isFinite(idx) ? countLine(js, idx) : null,
    severity, title, detail, snippet: snippet || ''
  });
  if (!js.trim()) return findings;

  // 1) Real syntax check via Function constructor (does NOT execute the body)
  try {
    new Function(stripJsForSyntaxCheck(js));
  } catch (err) {
    const lineMatch = /<anonymous>:(\d+)/.exec(err.stack || '');
    push('error', 'JavaScript syntax error', `${err.message}${lineMatch ? ` (near line ${lineMatch[1]})` : ''} — the file will fail to parse and NOTHING will run.`);
  }

  // 2) Bracket balance with string/comment awareness (approximate but useful)
  let bal = { '(': 0, '[': 0, '{': 0 };
  const closeOf = { ')': '(', ']': '[', '}': '{' };
  let mode = 'code';
  for (let i = 0; i < js.length; i++) {
    const c = js[i];
    const n = js[i + 1];
    if (mode === 'code') {
      if (c === '/' && n === '/') { mode = 'line'; i++; continue; }
      if (c === '/' && n === '*') { mode = 'block'; i++; continue; }
      if (c === "'" || c === '"' || c === '`') { mode = c; continue; }
      if (c === '(' || c === '[' || c === '{') bal[c]++;
      else if (c === ')' || c === ']' || c === '}') {
        bal[closeOf[c]]--;
        if (bal[closeOf[c]] < 0) {
          push('error', `Extra closing "${c}"`, 'A closing bracket with no opener — parse-breaking.', i);
          bal[closeOf[c]] = 0;
        }
      }
    } else if (mode === 'line') {
      if (c === '\n') mode = 'code';
    } else if (mode === 'block') {
      if (c === '*' && n === '/') { mode = 'code'; i++; }
    } else {
      if (c === '\\') { i++; continue; }
      if (c === mode) mode = 'code';
    }
  }
  ['(', '[', '{'].forEach((k) => {
    if (bal[k] > 0) push('error', `${bal[k]} unclosed "${k}"`, 'Reached end of file with brackets still open.');
  });

  // 3) getElementById / querySelector references against real HTML ids/classes
  const htmlIds = new Set();
  let m;
  const idRe = /\bid\s*=\s*["']([^"']+)["']/gi;
  while ((m = idRe.exec(html)) !== null) htmlIds.add(m[1]);
  const gbidRe = /getElementById\(\s*["']([^"']+)["']\s*\)/g;
  let checked = 0;
  while ((m = gbidRe.exec(js)) !== null && checked < 200) {
    checked++;
    if (htmlIds.size > 0 && !htmlIds.has(m[1])) {
      push('error', `getElementById("${m[1]}") → element does not exist in index.html`, 'This returns null; the next property/method call will throw "Cannot read properties of null".', m.index);
    }
  }
  const qsRe = /querySelector(?:All)?\(\s*["']([^"']+)["']\s*\)/g;
  checked = 0;
  while ((m = qsRe.exec(js)) !== null && checked < 200) {
    checked++;
    const sel = m[1];
    const hashId = /^#([a-zA-Z][\w-]*)$/.exec(sel);
    if (hashId && htmlIds.size > 0 && !htmlIds.has(hashId[1])) {
      push('error', `querySelector('#${hashId[1]}') → id not in index.html`, 'Selector matches nothing — returns null.', m.index);
    } else if (sel.startsWith('.') && html) {
      const cls = sel.slice(1).split(/[.:>\s[]/)[0];
      if (cls && !html.includes(cls) && !js.includes(`'${cls}'`) && !js.includes(`"${cls}"`) && !js.includes('`' + cls)) {
        push('warn', `querySelector('.${cls}') — class not found in the HTML`, 'Element may be built dynamically; otherwise this returns null.', m.index);
      }
    }
  }

  // 4) classList toggles vs CSS state classes
  const clRe = /classList\.(?:add|remove|toggle)\(\s*(["'])([^"']+)\1/g;
  checked = 0;
  while ((m = clRe.exec(js)) !== null && checked < 150) {
    checked++;
    const cls = m[2].split(',')[0].trim();
    if (!cls) continue;
    if (css && !css.includes(`.${cls}`) && !css.includes(`.${cls}`)) {
      push('warn', `classList toggles ".${cls}" but style.css never styles it`, 'Either the class is decorative (fine) or the CSS rule is missing/misnamed.', m.index);
    }
  }

  // 5) Classic footguns
  const eqRe = /[^=!<>]([^=!<>])==([^=])/g;
  let loose = 0;
  while ((m = eqRe.exec(js)) !== null) loose++;
  if (loose > 0) push('warn', `${loose} loose "==" comparison(s)`, 'Prefer === — loose equality coerces types and hides bugs ("0" == false).');

  if (/\bvar\s+/.test(js)) push('info', 'Uses var declarations', 'var hoists across blocks; prefer const/let for safer scoping.');

  const consoleLogs = (js.match(/console\.log\(/g) || []).length;
  if (consoleLogs > 0) push('info', `${consoleLogs} console.log() call(s)`, 'Leftover debug logging — consider a DEBUG flag or removal before shipping.');

  const emptyCatchRe = /catch\s*(\([^)]*\))?\s*\{\s*\}/g;
  let emptyCatches = 0;
  while ((m = emptyCatchRe.exec(js)) !== null) emptyCatches++;
  if (emptyCatches > 0) push('warn', `${emptyCatches} empty catch block(s)`, 'Errors are silently swallowed — at least console.warn or a user-facing hint.');

  const docWrite = /document\.write\s*\(/.exec(js);
  if (docWrite) push('warn', 'document.write usage', 'Blocks parsing and breaks async pages. Use DOM APIs instead.', docWrite.index);

  const evalUse = /(^|\s)eval\s*\(/.exec(js);
  if (evalUse) push('error', 'eval() usage', 'Security and CSP hazard — restructure to avoid eval.', evalUse.index);

  const setIntervalCount = (js.match(/setInterval\s*\(/g) || []).length;
  const clearIntervalCount = (js.match(/clearInterval\s*\(/g) || []).length;
  if (setIntervalCount > clearIntervalCount) push('warn', `${setIntervalCount} setInterval() vs ${clearIntervalCount} clearInterval()`, 'Timers that are never cleared keep running (battery drain, ghost loops after view switches).');

  if (/localStorage/.test(js) && !/try\s*\{/.test(js)) push('warn', 'localStorage used without any try/catch', 'Private mode / quota-exceeded throws and can crash boot. Wrap storage access.');

  const innerHtmlRe = /innerHTML\s*=\s*[^;"\n]{0,200}(?=\+|\$\{)/g;
  let xissy = 0;
  while ((m = innerHtmlRe.exec(js)) !== null) xissy++;
  if (xissy > 0) push('warn', `${xissy} innerHTML assignment(s) with interpolation`, 'Possible XSS if the joined data is user-controlled. Prefer textContent or escape.');

  const fnNames = new Map();
  const fnRe = /function\s+([a-zA-Z_$][\w$]*)\s*\(/g;
  while ((m = fnRe.exec(js)) !== null) {
    const name = m[1];
    if (fnNames.has(name)) push('warn', `Duplicate function name "${name}"`, `Already defined near line ${fnNames.get(name)}. The later definition silently wins.`, m.index);
    else fnNames.set(name, countLine(js, m.index));
  }

  if (/JSON\.parse\s*\(/.test(js) && !/try\s*\{/.test(js)) push('info', 'JSON.parse without visible try/catch', 'Malformed stored data will throw at boot — validate before parsing.');

  return findings;
}

function runBugScan() {
  ensureVersionSystem();
  syncActiveVersionFromEditors();
  const findings = [
    ...scanHtmlForBugs(state.htmlCode || ''),
    ...scanCssForBugs(state.cssCode || '', state.htmlCode || '', state.jsCode || ''),
    ...scanJsForBugs(state.jsCode || '', state.htmlCode || '', state.cssCode || '')
  ];

  (state.previewErrors || []).slice(0, 10).forEach((e) => {
    findings.push({
      file: 'live preview', line: null, severity: 'error',
      title: 'Runtime error in preview', detail: String(e), snippet: ''
    });
  });

  findings.sort((a, b) => {
    const rank = { error: 0, warn: 1, info: 2 };
    return (rank[a.severity] ?? 3) - (rank[b.severity] ?? 3);
  });
  return findings;
}

function severityMeta(sev) {
  if (sev === 'error') return { label: 'BUG', cls: 'bg-rose-500/15 text-rose-300 border-rose-500/40', icon: 'octagon-alert' };
  if (sev === 'warn') return { label: 'RISK', cls: 'bg-amber-500/15 text-amber-300 border-amber-500/40', icon: 'triangle-alert' };
  return { label: 'NOTE', cls: 'bg-sky-500/15 text-sky-300 border-sky-500/40', icon: 'info' };
}

function openBugScanModal() {
  if (state.isRunning) {
    showToast('Pause the running pipeline before scanning.', 'warn');
    return;
  }
  state.bugUi = { findings: null, fixing: false, fixLog: '' };
  el.bugScanModal.classList.remove('hidden');
  trackModalOpen(el.bugScanModal);
  renderBugScanModal();
  refreshIcons();
  setTimeout(() => {
    if (state.bugUi && state.bugUi.findings === null && !el.bugScanModal.classList.contains('hidden')) {
      state.bugUi.findings = runBugScan();
      renderBugScanModal();
    }
  }, 120);
}

function renderBugScanModal() {
  const ui = state.bugUi || { findings: null, fixing: false };
  const body = el.bugScanBody;
  if (!body) return;

  if (ui.fixing) {
    body.innerHTML = `
      <div class="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div class="relative w-14 h-14">
          <div class="absolute inset-0 rounded-full border-2 border-rose-500/25"></div>
          <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-rose-400 animate-spin"></div>
          <i data-lucide="bug" class="w-5 h-5 text-rose-300 absolute inset-0 m-auto"></i>
        </div>
        <div>
          <div class="text-sm font-semibold text-slate-100">AI repair in progress…</div>
          <div class="text-[11px] text-slate-400 mt-1">Handing the exact bugs to the AI with your three active files. Fixed files will arrive as a new version tab.</div>
          ${ui.fixLog ? `<div class="mt-3 text-[10px] font-mono-code text-emerald-300 max-h-24 overflow-y-auto">${escapeHtml(ui.fixLog)}</div>` : ''}
        </div>
      </div>
    `;
    refreshIcons();
    return;
  }

  if (ui.findings === null) {
    body.innerHTML = `
      <div class="space-y-4">
        <div class="rounded-xl border border-slate-800 bg-[#0d131f] p-4 space-y-2">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center"><i data-lucide="bug" class="w-4 h-4 text-rose-300"></i></span>
            <div>
              <div class="text-xs font-bold text-slate-100">Bug Doctor — scan first, AI never invents bugs</div>
              <div class="text-[10px] text-slate-400">Runs real bug-finding techniques over the ACTIVE version's files:</div>
            </div>
          </div>
          <ul class="text-[10px] text-slate-400 space-y-1 leading-relaxed list-disc list-inside">
            <li><strong class="text-slate-200">index.html</strong> — duplicate/missing ids, unclosed tags, missing meta/alt, deprecated tags, inline eval</li>
            <li><strong class="text-slate-200">style.css</strong> — unbalanced braces, unterminated comments, empty/duplicate rules, dead classes, focus styles</li>
            <li><strong class="text-slate-200">script.js</strong> — full syntax check (real parse, nothing executed), bracket balance, dead getElementById/querySelector references, classList vs CSS parity, leaky timers, swallowed catches, XSS-risky innerHTML, eval, duplicate functions</li>
            <li><strong class="text-slate-200">live preview</strong> — runtime errors captured from the last render</li>
          </ul>
        </div>
        <div class="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-3.5 text-[11px] text-slate-300 leading-relaxed">
          After the scan you can hand the <strong class="text-emerald-200">exact findings</strong> to the AI for a surgical fix — the fully fixed files arrive as a <strong class="text-emerald-200">new version tab</strong>, and the previous version stays safe.
        </div>
      </div>
    `;
    refreshIcons();
    return;
  }

  const errors = ui.findings.filter((f) => f.severity === 'error').length;
  const warns = ui.findings.filter((f) => f.severity === 'warn').length;
  const infos = ui.findings.filter((f) => f.severity === 'info').length;

  body.innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <div class="flex items-center gap-2">
          ${errors ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-300 border border-rose-500/40">${errors} bug${errors > 1 ? 's' : ''}</span>` : ''}
          ${warns ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40">${warns} risk${warns > 1 ? 's' : ''}</span>` : ''}
          ${infos ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/15 text-sky-300 border border-sky-500/40">${infos} note${infos > 1 ? 's' : ''}</span>` : ''}
          ${!ui.findings.length ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/40">CLEAN — no issues found</span>' : ''}
        </div>
        <button type="button" data-bug-rescan class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-medium text-slate-200 transition">Re-scan</button>
      </div>
      <div class="space-y-2 max-h-[52dvh] overflow-y-auto scroll-fade-bottom pr-1" id="bugFindingsList">
        ${ui.findings.map((f) => {
          const meta = severityMeta(f.severity);
          return `
            <div class="rounded-xl border border-slate-800 bg-[#0d131f] p-3">
              <div class="flex items-start justify-between gap-2">
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold border ${meta.cls}">${meta.label}</span>
                    <span class="text-[10px] font-mono-code text-slate-400">${escapeHtml(f.file)}${f.line ? ` : ${f.line}` : ''}</span>
                  </div>
                  <div class="text-[11px] font-bold text-slate-100 mt-1.5">${escapeHtml(f.title)}</div>
                  <div class="text-[10px] text-slate-400 leading-relaxed mt-0.5">${escapeHtml(f.detail)}</div>
                </div>
                <i data-lucide="${meta.icon}" class="w-4 h-4 text-slate-500 shrink-0 mt-1"></i>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  refreshIcons();

  const rescan = body.querySelector('[data-bug-rescan]');
  if (rescan) rescan.addEventListener('click', () => {
    ui.findings = null;
    renderBugScanModal();
    setTimeout(() => {
      ui.findings = runBugScan();
      renderBugScanModal();
    }, 60);
  });
  if (el.bugFixBtn) el.bugFixBtn.disabled = !(ui.findings && ui.findings.some((f) => f.severity === 'error' || f.severity === 'warn'));
  if (el.bugScanStartBtn) el.bugScanStartBtn.textContent = ui.findings === null ? 'Scan for Bugs' : 'Re-scan';
}

async function fixBugsWithAi() {
  const ui = state.bugUi;
  if (!ui || !Array.isArray(ui.findings) || ui.findings.length === 0) return;
  const stats = getKeyPoolStats();
  if (stats.total === 0) {
    showToast('Add an API key first — the AI repair uses your key pool.', 'warn');
    return;
  }

  ui.fixing = true;
  renderBugScanModal();

  const relevant = (file) => ui.findings.filter((f) => f.file === file || f.file === 'live preview');
  const fileTargets = [
    { key: 'html', name: 'index.html', findings: relevant('index.html') },
    { key: 'css', name: 'style.css', findings: relevant('style.css') },
    { key: 'js', name: 'script.js', findings: relevant('script.js') }
  ];

  const fixed = { html: state.htmlCode || '', css: state.cssCode || '', js: state.jsCode || '' };
  state.abortController = new AbortController();

  try {
    for (const target of fileTargets) {
      if (!target.findings.length || !String(fixed[target.key]).trim()) continue;
      ui.fixLog = `Fixing ${target.name} (${target.findings.length} findings)…`;
      renderBugScanModal();

      const findingsText = target.findings.map((f, i) => `${i + 1}. [${f.severity.toUpperCase()}] ${f.file}${f.line ? `:${f.line}` : ''} — ${f.title}\n   ${f.detail}`).join('\n');
      const systemPrompt =
        `You are a precision bug-fix engineer. You receive a web app file and a numbered list of REAL findings from a static/dynamic bug scanner.\n` +
        `Your mission: return the COMPLETE file with EXACTLY those bugs fixed — surgical, minimal, style-preserving changes. Do not refactor, redesign, rename, reorder or "improve" anything beyond the listed findings. Keep every untouched region byte-for-byte identical.\n` +
        `Output ONLY the complete fixed ${target.name} — zero markdown fences, zero commentary, zero TODOs.`;
      const userPrompt =
        `=== CURRENT ${target.name} (fix this file) ===\n${fixed[target.key]}\n\n` +
        `=== THE OTHER FILES (reference only — for cross-file checks) ===\n=== index.html ===\n${fixed.html.slice(0, 20000)}\n=== style.css ===\n${fixed.css.slice(0, 20000)}\n=== script.js ===\n${fixed.js.slice(0, 40000)}\n\n` +
        `=== EXACT FINDINGS TO FIX IN ${target.name} ===\n${findingsText}\n\n` +
        `Fix every finding. Where a finding is informational (INFO severity), fix it only if the change is safe and tiny — otherwise leave it. Return the complete fixed ${target.name}.`;

      const raw = await callModelUtility(systemPrompt, userPrompt, `AI Repair — ${target.name}`);
      const cleaned = stripMarkdownCodeFences(raw);
      if (cleaned.length > fixed[target.key].length * 0.35) {
        fixed[target.key] = cleaned;
        ui.fixLog = `${target.name}: fixed ✓`;
      } else {
        ui.fixLog = `${target.name}: AI response too short — kept current file`;
      }
      renderBugScanModal();
    }

    ensureVersionSystem();
    const version = createVersion(
      `V${state.versions.length + 1} • Bug-Fixed`,
      fixed,
      `${(state.notesText || '').trim() ? state.notesText.trim() + '\n\n' : ''}--- [BUG DOCTOR REPAIR LOG] ---\nFixed ${ui.findings.length} finding(s) via AI surgical repair.\n${ui.findings.slice(0, 30).map((f) => `- [${f.severity}] ${f.file}${f.line ? ':' + f.line : ''} ${f.title}`).join('\n')}\n`,
      'bugfix',
      true
    );
    ui.fixing = false;
    ui.findings = null;
    renderBugScanModal();
    el.bugScanModal.classList.add('hidden');
    trackModalClosed(el.bugScanModal);
    switchTab('preview');
    showToast(`${version.label} is live — the previous version stays safe in its tab.`, 'success');
    el.pipelineStatusText.textContent = `Bug Doctor: ${version.label} applied seamlessly.`;
  } catch (err) {
    ui.fixing = false;
    renderBugScanModal();
    if (err && err.name !== 'AbortError') {
      showToast(`AI repair failed: ${err.message || err}`, 'error');
    }
  } finally {
    if (!state.isRunning) state.abortController = null;
  }
}

// =========================================================================
// DESIGN POLISH — 10-step graphic design refinement (detail, not change)
// =========================================================================
function openPolishModal() {
  if (state.isRunning && (!state.evoRun || state.evoRun.kind !== 'polish')) {
    showToast('A pipeline is already running — let it finish or pause it first.', 'warn');
    return;
  }
  if (state.evoRun && state.evoRun.kind === 'polish' && state.evoRun.isRunning) {
    state.evoUi.polishView = 'running';
  } else {
    state.evoUi.polishView = 'hub';
  }
  el.polishModal.classList.remove('hidden');
  trackModalOpen(el.polishModal);
  renderPolishModal();
  refreshIcons();
}

function renderPolishModal() {
  const ui = state.evoUi;
  const evo = state.evoRun && state.evoRun.kind === 'polish' && !state.evoRun.completed ? state.evoRun : null;

  if (evo) {
    renderPolishRunning();
    return;
  }

  ensureVersionSystem();
  const cur = getCurrentVersion();
  const nextLabel = `V${state.versions.length + 1}`;

  el.polishBody.innerHTML = `
    <div class="space-y-4">
      <div class="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-3.5 space-y-1.5">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="text-[11px] font-bold text-emerald-200">Polishing: ${escapeHtml(cur.label)}</span>
          <span class="text-[10px] font-mono-code text-slate-400">target → ${nextLabel} • Design Polished</span>
        </div>
        <p class="text-[11px] text-slate-300 leading-relaxed">A focused <strong class="text-emerald-200">10-step graphic design pipeline</strong> that walks the active files, finds every visual element that can be polished, tidied, detailed and perfected — then emits the finished files into a NEW version tab.</p>
        <p class="text-[10px] text-slate-400 leading-relaxed"><strong>This is refinement, not redesign:</strong> spacing rhythm, typography, color harmony, corners, borders, shadows, glows, textures, icons and micro-motion get perfected. Layouts, features and content stay exactly as they are.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
        ${[
          ['Census', 'every visual element inventoried & craft-scored'],
          ['Type & Color', 'hierarchy, tabular numbers, contrast & hover glow-ups'],
          ['Surface & Light', 'corners, borders, shadows, back-light & texture polish'],
          ['Contract', 'icons, micro-motion, exact final CSS locked'],
          ['Emit', 'polished index.html + style.css + script.js']
        ].map(([t, d], i) => `
          <div class="rounded-lg border border-slate-800 bg-[#0d131f] p-2.5">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="w-4 h-4 rounded-full bg-emerald-600/25 border border-emerald-500/50 text-[9px] font-bold text-emerald-200 flex items-center justify-center">${i + 1}</span>
              <span class="text-[10px] font-bold text-slate-200">${t}</span>
            </div>
            <div class="text-[9px] text-slate-400 leading-snug">${d}</div>
          </div>
        `).join('')}
      </div>
      <div>
        <label class="block text-xs font-semibold text-slate-200 mb-1.5">Any specific polish focus? (optional)</label>
        <textarea id="polishFocusInput" rows="3" placeholder="e.g., Make the cards and buttons feel premium, perfect the spacing in the settings panel, give the header a subtle glow…" class="w-full bg-[#0d131f] border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none">${escapeHtml(ui.polishFocus || '')}</textarea>
      </div>
    </div>
  `;

  const focusInput = el.polishBody.querySelector('#polishFocusInput');
  focusInput.addEventListener('input', () => {
    ui.polishFocus = focusInput.value;
  });

  el.polishFooter.innerHTML = `
    <div class="text-[10px] text-slate-500">Uses 10 API calls · your three active files + notes ride along every step.</div>
    <div class="flex items-center gap-2">
      <button type="button" data-polish-close class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Close</button>
      <button type="button" data-polish-run class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm shadow-emerald-600/25"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Run 10-Step Polish → ${nextLabel}</button>
    </div>
  `;
  el.polishFooter.querySelector('[data-polish-close]').addEventListener('click', () => {
    el.polishModal.classList.add('hidden');
    trackModalClosed(el.polishModal);
  });
  el.polishFooter.querySelector('[data-polish-run]').addEventListener('click', async () => {
    ui.polishFocus = focusInput.value;
    await runEvoPipeline('polish');
  });
  refreshIcons();
}

function renderPolishRunning() {
  const evo = state.evoRun;
  const steps = POLISH_PIPELINE_STEPS;
  const doneCount = Object.keys(evo.completedSteps || {}).length;
  const running = Boolean(evo.isRunning);
  const nextStep = steps[Math.min(evo.nextStepIndex, steps.length - 1)];

  el.polishBody.innerHTML = `
    <div class="space-y-4">
      <div class="rounded-xl border ${running ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-cyan-500/40 bg-cyan-950/15'} p-3.5 space-y-2">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="text-[11px] font-bold ${running ? 'text-emerald-200' : 'text-cyan-200'}">${running ? `Polishing — Step ${Math.min(evo.nextStepIndex + 1, 10)}/10 (${nextStep.stageName})` : `Paused at Step ${Math.min(evo.nextStepIndex + 1, 10)}/10`}</span>
          <span class="font-mono-code text-[10px] text-slate-400">${doneCount}/10 · target ${escapeHtml(evo.label)}</span>
        </div>
        <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300" style="width:${doneCount * 10}%"></div></div>
        <div class="text-[10px] text-slate-400 leading-relaxed">Current focus: <strong class="text-slate-200">${escapeHtml(nextStep.role)}</strong> — ${escapeHtml(nextStep.mainTask)}</div>
      </div>
      <div class="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-3.5 text-[10px] text-slate-400 leading-relaxed">
        The live checklist is in the left panel (filter by polish phase). Each finished step's full polish spec is recorded — the emission steps turn them into the polished files.
      </div>
    </div>
  `;

  el.polishFooter.innerHTML = `
    <div class="text-[10px] text-slate-500">${running ? 'You can close this modal — the polish keeps running.' : 'Progress saved — resume anytime.'}</div>
    <div class="flex items-center gap-2">
      <button type="button" data-polish-close class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition">Close</button>
      ${running
        ? '<button type="button" data-polish-pause class="px-4 py-1.5 rounded-lg bg-amber-600/25 hover:bg-amber-600/40 border border-amber-500/45 text-amber-100 text-xs font-semibold transition">Pause</button>'
        : '<button type="button" data-polish-resume class="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition">Resume Polish</button>'}
    </div>
  `;
  el.polishFooter.querySelector('[data-polish-close]').addEventListener('click', () => {
    el.polishModal.classList.add('hidden');
    trackModalClosed(el.polishModal);
  });
  const pauseBtn = el.polishFooter.querySelector('[data-polish-pause]');
  if (pauseBtn) pauseBtn.addEventListener('click', () => {
    if (state.abortController) state.abortController.abort();
  });
  const resumeBtn = el.polishFooter.querySelector('[data-polish-resume]');
  if (resumeBtn) resumeBtn.addEventListener('click', async () => {
    await runEvoPipeline('polish', true);
  });
  refreshIcons();
}

function renderPolishDone(label) {
  el.polishBody.innerHTML = `
    <div class="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <div class="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center"><i data-lucide="sparkles" class="w-6 h-6 text-emerald-300"></i></div>
      <div>
        <div class="text-sm font-bold text-slate-100">Design Polish complete — ${escapeHtml(label)} is live!</div>
        <div class="text-[11px] text-slate-400 mt-1">The polished files are showing in the Preview now. The previous version stays safe in its own tab.</div>
      </div>
    </div>
  `;
  el.polishFooter.innerHTML = `
    <button type="button" data-polish-done class="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition">Done</button>
  `;
  el.polishFooter.querySelector('[data-polish-done]').addEventListener('click', () => {
    el.polishModal.classList.add('hidden');
    trackModalClosed(el.polishModal);
  });
  refreshIcons();
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

// Prompt Guider Modal Listeners
el.openPromptGuiderBtn.addEventListener('click', () => {
  if (state.isRunning) {
    showToast('Pause the pipeline before modifying options.', 'warn');
    return;
  }
  openPromptGuider(0);
});

el.closePromptGuiderBtn.addEventListener('click', () => {
  el.promptGuiderModal.classList.add('hidden');
});

el.guiderOpenFullMenuBtn.addEventListener('click', () => {
  el.promptGuiderModal.classList.add('hidden');
  renderBlueprintModalContents();
  switchBlueprintTab(state.activeBpTab);
  el.blueprintModal.classList.remove('hidden');
  refreshIcons();
});

el.switchFromMenuToGuiderBtn.addEventListener('click', () => {
  el.blueprintModal.classList.add('hidden');
  openPromptGuider(0);
});

el.guiderBackBtn.addEventListener('click', () => {
  if (state.guiderStepIndex > 0) {
    state.guiderStepIndex -= 1;
    renderPromptGuider();
  }
});

el.guiderNextBtn.addEventListener('click', () => {
  const steps = getGuiderJourneySteps();
  if (state.guiderStepIndex < steps.length - 1) {
    state.guiderStepIndex += 1;
    renderPromptGuider();
  } else {
    el.promptGuiderModal.classList.add('hidden');
    renderBlueprintSummaryStrip();
    showToast('Guided vision applied to your 50-Point Studio!', 'success');
  }
});

el.guiderDraftPromptBtn.addEventListener('click', weaveChoicesIntoPromptBox);

// Full Menu Modal Listeners
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
    if (key === 'sensoryAudio') renderConditionalAudioSubMenu(el.bpAudioSubSection);
    if (key === 'dataPersistence') renderConditionalPersistenceSubMenu(el.bpPersistenceSubSection);
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
  if (state.isRunning) return;
  if (state.pipelineMode === 'update' && state.evoRun && state.evoRun.kind === 'update') {
    runEvoPipeline('update', true);
  } else if (state.pipelineMode === 'polish' && state.evoRun && state.evoRun.kind === 'polish') {
    runEvoPipeline('polish', true);
  } else {
    runPipeline(false);
  }
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
  renderUpdateSection();
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
  if (el.updateRepoInput && document.activeElement !== el.updateRepoInput) {
    // repo value saved on its own change handler; nothing to do here
  }
  el.modelBadge.textContent = `${state.model} • ${state.thinkingLevel}`;
  saveSettingsSnapshot();
  updateKeepAliveBadges();
  el.settingsModal.classList.add('hidden');
  showToast('Settings saved.', 'success');
});

// Prompt Improver listeners
if (el.openImproverBtn) el.openImproverBtn.addEventListener('click', openPromptImprover);
if (el.closeImproverBtn) el.closeImproverBtn.addEventListener('click', closePromptImprover);

// GitHub update checker listeners (Settings)
if (el.checkUpdatesBtn) {
  el.checkUpdatesBtn.addEventListener('click', () => {
    if (el.updateRepoInput) {
      state.githubRepo = el.updateRepoInput.value.trim();
      safeSet('wbs_github_repo', state.githubRepo);
    }
    safeSet('wbs_last_update_check', String(Date.now()));
    checkForAppUpdates({ silent: false });
  });
}
if (el.applyUpdateBtn) el.applyUpdateBtn.addEventListener('click', applyAppUpdateNow);
if (el.updateRepoInput) {
  el.updateRepoInput.addEventListener('change', () => {
    state.githubRepo = el.updateRepoInput.value.trim();
    safeSet('wbs_github_repo', state.githubRepo);
    renderUpdateSection();
  });
}
if (el.updateBranchInput) {
  el.updateBranchInput.addEventListener('change', () => {
    const branch = el.updateBranchInput.value.trim();
    if (branch && state.githubRepo && !parseGithubRepoInput(state.githubRepo, branch)) {
      showToast('Could not combine repo and branch — try "owner/repo on branch".', 'warn');
    }
    const parsed = parseGithubRepoInput(state.githubRepo, branch || undefined);
    if (parsed) {
      state.githubRepo = branch ? `${parsed.owner}/${parsed.repo} on ${branch}` : `${parsed.owner}/${parsed.repo}`;
      safeSet('wbs_github_repo', state.githubRepo);
    }
    renderUpdateSection();
  });
}
if (el.autoCheckUpdatesToggle) {
  el.autoCheckUpdatesToggle.addEventListener('change', () => {
    state.autoCheckUpdates = Boolean(el.autoCheckUpdatesToggle.checked);
    safeSet('wbs_auto_check_updates', state.autoCheckUpdates ? '1' : '0');
  });
}

// ---------- Keyboard & modal UX: Escape closes topmost modal, backdrop click closes,
// arrow keys walk the Prompt Guider while it is open ----------
const MODAL_STACK = [];
function trackModalOpen(modalEl) {
  if (!modalEl) return;
  if (!MODAL_STACK.includes(modalEl)) MODAL_STACK.push(modalEl);
}
function trackModalClosed(modalEl) {
  const idx = MODAL_STACK.indexOf(modalEl);
  if (idx !== -1) MODAL_STACK.splice(idx, 1);
}
[
  el.promptGuiderModal,
  el.blueprintModal,
  el.keysModal,
  el.settingsModal,
  el.mobileReadinessModal,
  el.promptImproverModal
].forEach((modal) => {
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target !== modal) return;
    // backdrop click closes (improver refuses only while an AI call is in flight)
    if (modal === el.promptImproverModal) {
      if (state.improver.ai.loading || state.improver.enhance.loading) return;
      closePromptImprover();
      trackModalClosed(modal);
    } else {
      modal.classList.add('hidden');
      trackModalClosed(modal);
    }
  });
  const obs = new MutationObserver(() => {
    if (modal.classList.contains('hidden')) trackModalClosed(modal);
    else trackModalOpen(modal);
  });
  obs.observe(modal, { attributes: true, attributeFilter: ['class'] });
});

document.addEventListener('keydown', (e) => {
  const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
  const typing = tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target && e.target.isContentEditable);

  if (e.key === 'Escape' && MODAL_STACK.length > 0) {
    const top = MODAL_STACK[MODAL_STACK.length - 1];
    if (top === el.promptImproverModal) {
      if (!state.improver.ai.loading && !state.improver.enhance.loading) {
        closePromptImprover();
        trackModalClosed(top);
      }
    } else {
      top.classList.add('hidden');
      trackModalClosed(top);
    }
    e.preventDefault();
    return;
  }

  if (el.promptGuiderModal && !el.promptGuiderModal.classList.contains('hidden') && !typing) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const steps = getGuiderJourneySteps();
      if (e.key === 'ArrowRight' && state.guiderStepIndex < steps.length - 1) {
        state.guiderStepIndex += 1;
        renderPromptGuider();
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' && state.guiderStepIndex > 0) {
        state.guiderStepIndex -= 1;
        renderPromptGuider();
        e.preventDefault();
      }
    }
  }
});

// Re-apply the desktop layout when crossing the mobile/desktop boundary (rotation, resize)
let layoutResizeTimer = null;
window.addEventListener('resize', () => {
  if (layoutResizeTimer) clearTimeout(layoutResizeTimer);
  layoutResizeTimer = setTimeout(() => {
    if (window.innerWidth >= 1024) {
      setDesktopLayout(state.desktopLayout);
    }
  }, 150);
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
  state.evoRun = null;
  state.evoUi.view = 'hub';
  persistEvoRun();
  setPipelineMode('build');
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

el.downloadAllBtn.addEventListener('click', downloadAllWithVersions);

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

// --- Workspace tools: Upload, Update Studio, Bug Doctor, Design Polish, Versions ---
if (el.uploadBtn) el.uploadBtn.addEventListener('click', () => {
  if (state.isRunning) {
    showToast('Pause the pipeline before uploading files.', 'warn');
    return;
  }
  el.uploadFileInput.value = '';
  el.uploadFileInput.click();
});

if (el.uploadFileInput) el.uploadFileInput.addEventListener('change', (e) => {
  handleUploadedFiles(e.target.files);
});

if (el.updateStudioBtn) el.updateStudioBtn.addEventListener('click', openUpdateStudio);
if (el.closeUpdateStudioBtn) el.closeUpdateStudioBtn.addEventListener('click', () => {
  el.updateStudioModal.classList.add('hidden');
  trackModalClosed(el.updateStudioModal);
});

if (el.bugScanBtn) el.bugScanBtn.addEventListener('click', openBugScanModal);
if (el.closeBugScanBtn) el.closeBugScanBtn.addEventListener('click', () => {
  el.bugScanModal.classList.add('hidden');
  trackModalClosed(el.bugScanModal);
});
if (el.bugScanStartBtn) el.bugScanStartBtn.addEventListener('click', () => {
  if (!state.bugUi) state.bugUi = { findings: null, fixing: false, fixLog: '' };
  state.bugUi.findings = null;
  state.bugUi.fixing = false;
  renderBugScanModal();
  setTimeout(() => {
    state.bugUi.findings = runBugScan();
    renderBugScanModal();
  }, 60);
});
if (el.bugFixBtn) el.bugFixBtn.addEventListener('click', fixBugsWithAi);

if (el.polishBtn) el.polishBtn.addEventListener('click', openPolishModal);
if (el.closePolishBtn) el.closePolishBtn.addEventListener('click', () => {
  el.polishModal.classList.add('hidden');
  trackModalClosed(el.polishModal);
});

if (el.backToBuildBtn) el.backToBuildBtn.addEventListener('click', () => {
  if (state.isRunning) {
    showToast('Pause the running pipeline first.', 'warn');
    return;
  }
  setPipelineMode('build');
  el.pipelineStatusText.textContent = 'Back to the 50-step build plan — choose your options & describe your idea';
  showToast('Back to the 50-step build plan.', 'info');
});

(function init() {
  initTimerWorker();
  registerServiceWorkerAndPwa();
  initBatteryMonitor();
  initNetworkMonitor();
  initUpdateChecker();

  try {
    const savedCfg = JSON.parse(safeGet('wbs_studio_config', 'null'));
    if (savedCfg && savedCfg.projectType && STUDIO_CATALOG.projectTypes[savedCfg.projectType]) {
      const base = createDefaultStudioConfig(savedCfg.projectType);
      state.studioConfig = {
        ...base,
        ...savedCfg,
        subConfig: { ...base.subConfig, ...(savedCfg.subConfig || {}) },
        backlightConfig: {
          ...(base.backlightConfig || {}),
          ...(savedCfg.backlightConfig || {}),
          elements: {
            ...(base.backlightConfig?.elements || {}),
            ...(savedCfg.backlightConfig?.elements || {})
          }
        }
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

  loadVersions();
  renderVersionStrip();
  applyPipelineModeLabels();

  // Restore a paused update / polish run so the user can resume after a reload
  try {
    const savedEvo = JSON.parse(safeGet('wbs_evo_run', 'null'));
    if (savedEvo && savedEvo.kind && savedEvo.completedSteps && !savedEvo.completed) {
      savedEvo.isRunning = false;
      state.evoRun = savedEvo;
      const evoSteps = savedEvo.kind === 'update' ? UPDATE_PIPELINE_STEPS : POLISH_PIPELINE_STEPS;
      setPipelineMode(savedEvo.kind === 'update' ? 'update' : 'polish');
      const nextIdx = Math.min(savedEvo.nextStepIndex || 0, evoSteps.length);
      if (nextIdx > 0 && nextIdx < evoSteps.length) {
        const kindName = savedEvo.kind === 'update' ? 'Update' : 'Polish';
        el.pipelineStatusText.textContent = `${kindName} paused at Step ${nextIdx}/${evoSteps.length} — open the ${kindName === 'Update' ? 'Update Studio' : 'Design Polish'} to resume.`;
        updateLiveNotificationBar({
          mode: 'paused',
          title: `${kindName} Paused at Step ${nextIdx}/${evoSteps.length}`,
          detail: 'Resume anytime — progress is saved.',
          stepNum: nextIdx
        });
      }
    }
  } catch (_) {}

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
