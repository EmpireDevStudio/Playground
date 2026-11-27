const PIPELINE_STEPS = [
  // =========================================================================
  // STAGE 1: RESEARCH (Steps 1–10)
  // =========================================================================
  {
    num: 1, stage: 1, stageName: 'Research',
    title: 'The Core Problem or Desire',
    directive: 'Confirm whether the underlying pain point (for a utility/tool) or itch (for a game/creative app) is real, frequent, and urgent enough that people actively seek a solution. Define the core value proposition, trigger moments, usage frequency, and the exact functional or emotional payoff deliverable purely client-side with zero backend.'
  },
  {
    num: 2, stage: 1, stageName: 'Research',
    title: 'Target Audience and Context of Use',
    directive: 'Define primary, secondary, and first-time user archetypes, their technical fluency, natural mental models, and real-world operating contexts (e.g., focused desktop workspace vs. one-handed two-minute mobile commute, offline/low-connectivity environments, ambient lighting, and distraction levels).'
  },
  {
    num: 3, stage: 1, stageName: 'Research',
    title: 'Existing Alternatives and Workarounds',
    directive: 'Map direct web and native competitors alongside the makeshift habits people already rely on—spreadsheets, notes apps, calculators, timers, or manual pen-and-paper routines—to uncover what this app truly competes against, where alternatives feel bloated, and which familiar conventions users expect.'
  },
  {
    num: 4, stage: 1, stageName: 'Research',
    title: 'User Complaints, Reviews and Friction Audit',
    directive: 'Analyze recurring 1-to-3-star complaints, forum/Reddit pain points, and abandonment triggers across existing tools or games—such as confusing navigation, forced logins, sluggish rendering, intrusive popups, unclear states, or broken mobile layouts—to catalog concrete failure modes to eliminate.'
  },
  {
    num: 5, stage: 1, stageName: 'Research',
    title: 'Your Clear Differentiator & Zero-Bloat Edge',
    directive: 'Pinpoint the unmistakable advantage this three-file (index.html, style.css, script.js) app delivers over alternatives—whether faster instant execution, calmer zero-bloat UI, a fresher game mechanic, or superior keyboard/touch ergonomics—so users have a compelling reason to choose and keep using it.'
  },
  {
    num: 6, stage: 1, stageName: 'Research',
    title: 'Onboarding and Immediate Time-to-Value',
    directive: 'Examine how top browser products deliver an "aha" moment within the first 5 seconds without forced sign-ups, account walls, or lengthy tutorials. Identify intuitive visual cues, interactive empty states, and realistic starter/sample data that let first-time users succeed on their very first tap or click.'
  },
  {
    num: 7, stage: 1, stageName: 'Research',
    title: 'Core UX Flow and Friction Points',
    directive: 'Study the shortest possible path from opening index.html to completing the primary task or core game loop. Pinpoint every step where ambiguous labels, extra clicks, slow transitions, awkward scrolling, or unnecessary modal detours could break user momentum.'
  },
  {
    num: 8, stage: 1, stageName: 'Research',
    title: 'Platform Expectations, Mobile Ergonomics and Accessibility',
    directive: 'Research target platform conventions across desktop and mobile: WCAG 2.2 AA contrast (>=4.5:1), semantic landmarks, screen-reader ARIA live regions, colorblind-safe multi-sensory cues, desktop keyboard shortcuts, and thumb-friendly mobile layouts (>=44x44px tap targets, safe-area insets, zero horizontal overflow).'
  },
  {
    num: 9, stage: 1, stageName: 'Research',
    title: 'Trust, Local-Only Privacy and Zero-Backend Value Fit',
    directive: 'Because the app runs 100% client-side in three files with zero backend, servers, ads, or paywalls, research how to maximize user trust: transparent local-only localStorage persistence, zero tracking/telemetry, clear data ownership (easy export/reset), and reliable offline-ready execution.'
  },
  {
    num: 10, stage: 1, stageName: 'Research',
    title: 'Discovery, Shareability and Audience Search Language',
    directive: 'Identify where the target audience discovers standalone web tools or games (search, niche communities, itch.io, GitHub, direct link sharing) and capture the exact plain-language terminology, page title/meta cues, and self-explanatory UI copy that make the app immediately clear when opened cold.'
  },

  // =========================================================================
  // STAGE 2: REASONING (Steps 11–20)
  // =========================================================================
  {
    num: 11, stage: 2, stageName: 'Reasoning',
    title: 'Core Scope and Strict MVP Boundaries',
    directive: 'Synthesize Stage 1 research to lock the single core workflow or game loop that delivers the primary user benefit. Explicitly separate non-negotiable essentials from "nice-to-have" bloat so every shipped feature is deeply polished within three standalone files.'
  },
  {
    num: 12, stage: 2, stageName: 'Reasoning',
    title: 'Primary User Journey & Shortest Path to Value',
    directive: 'Map the exact end-to-end path a user takes from opening index.html to getting value or completing a game loop, ruthlessly stripping unnecessary steps, redundant confirmations, multi-field forms, and decision fatigue along the way.'
  },
  {
    num: 13, stage: 2, stageName: 'Reasoning',
    title: 'Intentional Architectural & UX Trade-offs',
    directive: 'Weigh competing priorities—simplicity vs. power-user customization, instant load speed vs. heavy visual effects, compact desktop density vs. mobile breathing room, and smart defaults vs. manual configuration—justifying each choice based on target user needs.'
  },
  {
    num: 14, stage: 2, stageName: 'Reasoning',
    title: 'Edge Cases, Boundary Inputs and Empty States',
    directive: 'Reason through non-ideal conditions: 0-item first-time empty states, 1,000+ item stress loads, invalid or extreme user inputs, rapid double-taps, narrow 320px mobile viewports, mid-session page reloads, and blocked or full localStorage in private browsing.'
  },
  {
    num: 15, stage: 2, stageName: 'Reasoning',
    title: 'Zero-Dependency Three-File Stack & Browser API Fit',
    directive: 'Validate how pure semantic HTML5, modern CSS3, and Vanilla ES6+ JavaScript (index.html, style.css, script.js) satisfy every requirement with zero backend, zero build step, and zero external runtime dependencies—selecting native APIs (localStorage, Blob, Canvas, SVG, Web Audio, Pointer Events, Intl, requestAnimationFrame) only where they add genuine value.'
  },
  {
    num: 16, stage: 2, stageName: 'Reasoning',
    title: 'Information Architecture and Visual Hierarchy',
    directive: 'Organize workspaces, toolbars, cards, secondary drawers/modals, and progressive disclosure tiers so the primary action is immediately obvious at a glance while secondary settings, export/import, and power options stay cleanly tucked out of sight.'
  },
  {
    num: 17, stage: 2, stageName: 'Reasoning',
    title: 'Feedback Loops, Tactile Responsiveness and App/Game Feel',
    directive: 'Reason through every user interaction to guarantee immediate, unmistakable feedback—optimistic UI updates, inline validation, non-destructive undo/reset safety nets, crisp status indicators, and satisfying micro-rewards—so nothing ever feels broken or unresponsive.'
  },
  {
    num: 18, stage: 2, stageName: 'Reasoning',
    title: 'Client-Side Privacy and Local Data Minimization',
    directive: 'With zero backend or server storage, decide the bare minimum state needed in localStorage, avoiding unnecessary personal data while designing schema versioning, an in-memory fallback for restricted storage contexts, and one-click user control to export or wipe local data.'
  },
  {
    num: 19, stage: 2, stageName: 'Reasoning',
    title: 'Measurable Success Criteria and Quality Benchmarks',
    directive: 'Define what "working exceptionally well" looks like in concrete, testable terms—such as sub-second cold load, task completion in minimal steps, smooth 60Hz–120Hz frame-rate-independent responsiveness, zero console errors, full keyboard/touch parity, and reliable reload persistence.'
  },
  {
    num: 20, stage: 2, stageName: 'Reasoning',
    title: 'Iterative Build Sequence and Verification Strategy',
    directive: 'Structure the logical progression from semantic DOM skeleton and central state model to core engine logic, mobile-first styling, sensory polish, and integration checks—locking non-negotiable engineering invariants that keep index.html, style.css, and script.js synchronized.'
  },

  // =========================================================================
  // STAGE 3: PLANNING (Steps 21–30)
  // =========================================================================
  {
    num: 21, stage: 3, stageName: 'Planning',
    title: 'Internal Sections and Modular Architecture for script.js',
    directive: 'Plan a consistent top-to-bottom structure for script.js (strict-mode/IIFE encapsulation, constants & seed data, central state, DOM hooks, pure domain logic, persistence helpers, batched renderers, Web Audio/Canvas effects, event delegation, reset(), and init()) for fast debugging and zero global pollution.'
  },
  {
    num: 22, stage: 3, stageName: 'Planning',
    title: 'Single Central state Object and Unidirectional Render Flow',
    directive: 'Store all app or game data in one central state object with pure derived selectors and a deterministic unidirectional flow (Action -> State Update -> Persist -> Targeted Render), eliminating out-of-sync UI panels and guaranteeing predictable behavior.'
  },
  {
    num: 23, stage: 3, stageName: 'Planning',
    title: 'Mobile-Ready index.html Skeleton and Semantic Hooks',
    directive: 'Blueprint semantic index.html with <link rel="stylesheet" href="style.css">, <script src="script.js" defer></script>, <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">, landmarks, <template> blocks, ARIA attributes, and dedicated id/data-* hooks separate from styling classes.'
  },
  {
    num: 24, stage: 3, stageName: 'Planning',
    title: 'Mobile-First style.css with :root Tokens and State Classes',
    directive: 'Plan style.css starting with :root custom properties and mobile-first base rules, scaling cleanly with Flexbox/CSS Grid, fluid clamp() sizing, safe-area inset padding (env(safe-area-inset-*)), and toggleable state classes (.is-active, .is-hidden, .is-loading, .is-error) to prevent specificity battles.'
  },
  {
    num: 25, stage: 3, stageName: 'Planning',
    title: 'Touch-Friendly Controls and Cross-Device Input Parity',
    directive: 'Plan minimum 44x44px tap targets, thumb-zone control placement, unified PointerEvent handlers (instead of mouse-only events), touch-action CSS rules to prevent accidental pinch-zoom or pull-to-refresh in games/canvases, and full desktop keyboard shortcuts (safely ignoring active text inputs).'
  },
  {
    num: 26, stage: 3, stageName: 'Planning',
    title: 'Root-Level Event Delegation Architecture',
    directive: 'Attach listeners to stable parent containers in index.html using event.target.closest(...) instead of binding handlers to every dynamic button or list item—reducing memory overhead, surviving DOM re-renders, and keeping mobile processors responsive.'
  },
  {
    num: 27, stage: 3, stageName: 'Planning',
    title: 'Safe, Fast DOM Updates and Mobile Battery Performance',
    directive: 'Plan XSS-safe, high-speed DOM updates using <template> cloning, document.createDocumentFragment(), and textContent instead of heavy innerHTML rewrites—while avoiding layout-thrashing reads/writes and excessive full-screen blurs to preserve mobile smoothness and battery life.'
  },
  {
    num: 28, stage: 3, stageName: 'Planning',
    title: 'localStorage Safety, Versioning and Data Portability',
    directive: 'Wrap all localStorage reads/writes in try/catch with a versioned JSON key, corrupt-data recovery, and an in-memory fallback for private browsing—paired with simple one-click clipboard copy or JSON/CSV export and validated import so user progress never vanishes.'
  },
  {
    num: 29, stage: 3, stageName: 'Planning',
    title: 'Frame-Rate-Independent Loops and Clean reset() Logic',
    directive: 'For games or animated tools, plan a single delta-time (clamped dt) requestAnimationFrame loop alongside a thorough reset() function that clears active timers/RAFs and restores clean initial/seed state—ensuring consistent speed across 60Hz desktops and 120Hz mobile screens.'
  },
  {
    num: 30, stage: 3, stageName: 'Planning',
    title: 'Zero-Asset Sensory Feedback and Error Guardrails',
    directive: 'Plan inline <svg> icons, <canvas> visuals, Web Audio API synthesized sound effects (safely unlocked on the user first tap/gesture for mobile browsers, with a mute toggle), and lightweight try/catch + aria-live toast guardrails—keeping everything self-contained in three files.'
  },

  // =========================================================================
  // STAGE 4: DESIGN (Steps 31–40)
  // =========================================================================
  {
    num: 31, stage: 4, stageName: 'Designing',
    title: 'Visual Direction, Mood and 60-30-10 Color Tokens',
    directive: 'Choose an intentional aesthetic (e.g., crisp editorial utility, tactile retro, frosted matte, or vibrant arcade) built on :root hex/HSL tokens following a 60-30-10 balance (neutral canvas, elevated surfaces, one sharp accent, plus semantic status hues) with verified contrast and optional light/dark parity.'
  },
  {
    num: 32, stage: 4, stageName: 'Designing',
    title: 'Typography, Hierarchy, clamp() Scale and Optical Rhythm',
    directive: 'Pair clean, legible system/modern fonts with a fluid clamp() type scale, tight tracking on large headings, wider uppercase tracking on micro-labels, comfortable line-heights, and font-variant-numeric: tabular-nums for live timers, counters, or scores so numbers never jitter.'
  },
  {
    num: 33, stage: 4, stageName: 'Designing',
    title: 'Spatial Grid, Breathing Room and Mobile Thumb Zones',
    directive: 'Anchor all layout spacing to a strict 4px or 8px scale with generous padding, clear visual focal points, balanced density, and primary interactive controls positioned within comfortable thumb reach on mobile viewports.'
  },
  {
    num: 34, stage: 4, stageName: 'Designing',
    title: 'Surface Textures, Subtle Grain and Tactile Depth',
    directive: 'Layer subtle CSS film grain (via inline SVG feTurbulence filter), faint dot-matrix or grid backgrounds (radial-gradient), selective frosted glass (backdrop-filter: blur()), and soft multi-layered directional shadows instead of flat solid rectangles so surfaces feel custom-crafted.'
  },
  {
    num: 35, stage: 4, stageName: 'Designing',
    title: 'Lighting, Borders, Nested Radii and Micro-Details',
    directive: 'Add 1px top-edge inner specular highlights (inset 0 1px 0), subtle gradient or hairline borders, mathematically nested border-radius values (outer radius = inner radius + padding), and custom ::selection and scrollbar styling for cohesive light and native-app polish.'
  },
  {
    num: 36, stage: 4, stageName: 'Designing',
    title: 'Accessible Contrast and Multi-Sensory State Cues',
    directive: 'Maintain >=4.5:1 text contrast (>=3:1 UI graphics) for outdoor mobile readability while pairing color with distinct inline SVG icons, border patterns, or explicit labels for success, warning, error, and active states so clarity never depends on color alone.'
  },
  {
    num: 37, stage: 4, stageName: 'Designing',
    title: 'Motion Choreography, Custom Easing and Reduced-Motion Rules',
    directive: 'Replace stiff linear transitions with custom cubic-bezier curves, staggered list entrances, and GPU-accelerated transform/opacity animations—always paired with a strict @media (prefers-reduced-motion: reduce) fallback to keep users spatially oriented and comfortable.'
  },
  {
    num: 38, stage: 4, stageName: 'Designing',
    title: 'Micro-Interactions and Tactile Control States',
    directive: 'Design responsive :hover lifts, crisp press-down feedback (transform: scale(0.97) on :active), high-contrast :focus-visible rings, and smooth toggle, chip, or slider transitions so every control feels physically responsive under a finger or cursor.'
  },
  {
    num: 39, stage: 4, stageName: 'Designing',
    title: 'Custom Inline SVG Craft and Canvas Visual Effects',
    directive: 'Design inline <svg> icons with uniform viewBox and stroke weights, animated SVG line-draws (stroke-dashoffset) or progress meters, and <canvas> particle trails, ripples, or ambient shaders where appropriate—keeping all visuals razor-sharp inside the three files.'
  },
  {
    num: 40, stage: 4, stageName: 'Designing',
    title: 'Living States, Ambient Motion and Rewarding Celebrations',
    directive: 'Craft inviting empty/zero states with helpful copy and a primary call-to-action, smooth shimmer/loading states, subtle ambient life, and rewarding completion moments (micro-confetti, floating score pop-ups, and optional Web Audio chimes) that deliver genuine delight.'
  },

  // =========================================================================
  // STAGE 5: BUILDING (Steps 41–50)
  // =========================================================================
  {
    num: 41, stage: 5, stageName: 'Build & Code',
    title: 'Complete Feature, State and Edge-Case Inventory',
    directive: 'Audit every user flow, interactive control, game rule, data field, empty state, error state, and reset condition across notes.txt before writing a line of code—guaranteeing zero missing features or forgotten edge cases and one unified mental model across index.html, style.css, and script.js.'
  },
  {
    num: 42, stage: 5, stageName: 'Build & Code',
    title: 'Exact DOM Contract and Component Blueprint',
    directive: 'Map out the canonical manifest of every section, modal/drawer, <template>, id, data-* hook, ARIA attribute, and dynamic container alongside its exact CSS state classes (.is-active, .is-hidden, .is-loading, .is-error) so markup, styling, and logic synchronize with 0% selector mismatch.'
  },
  {
    num: 43, stage: 5, stageName: 'Build & Code',
    title: 'Design Token, Texture and Motion Specification',
    directive: 'Finalize the exact :root color palette, clamp() typography scale, 4px/8px spacing tokens, multi-layered shadows, inline SVG noise/grain or pattern layers, 1px inner highlights, nested border radii, and cubic-bezier easing curves—plus prefers-reduced-motion fallbacks—ready for verbatim CSS implementation.'
  },
  {
    num: 44, stage: 5, stageName: 'Build & Code',
    title: 'Mobile-First Ergonomics and Cross-Device Input Mapping',
    directive: 'Lock mobile viewport rules (viewport-fit=cover, safe-area insets), >=44x44px minimum tap targets, thumb-zone control placement, unified PointerEvent handlers, touch-action protections against accidental zooming or pull-to-refresh, and every desktop keyboard shortcut with input-focus guards.'
  },
  {
    num: 45, stage: 5, stageName: 'Build & Code',
    title: 'Self-Contained SVG, Canvas and Web Audio Engineering',
    directive: 'Specify all zero-asset visual and audio modules in exact detail—crisp inline <svg> icons, <canvas> rendering or particle celebration routines, and Web Audio API synthesized feedback unlocked on first mobile tap with mute persistence—keeping the entire app strictly inside three files.'
  },
  {
    num: 46, stage: 5, stageName: 'Build & Code',
    title: 'Algorithm, Persistence and Performance Architecture',
    directive: 'Finalize the core algorithms, delta-time requestAnimationFrame loop (if animated/game), parent-level event delegation map, DocumentFragment + <template> DOM batching, versioned try/catch localStorage persistence (plus export/import where useful), and clean reset() lifecycle.'
  },
  {
    num: 47, stage: 5, stageName: 'Build & Code',
    title: 'Final Pre-Build Harmony and Completeness Check',
    directive: 'Cross-verify that every research insight, UX reasoning decision, visual texture, accessibility requirement, XSS guard, and mobile constraint is accounted for with zero TODOs, stubs, or half-wired features—setting up index.html, style.css, and script.js to lock together cleanly.'
  },
  {
    num: 48, stage: 5, stageName: 'Build & Code',
    title: 'Develop and Build the Full index.html File',
    targetFile: 'html',
    directive: 'Write the complete, production-ready index.html with mobile-optimized <meta> tags (viewport-fit=cover), semantic landmarks, accessible ARIA labels/live regions, inline <svg> assets, <template> blocks for dynamic elements, every locked id/data-* hook from Steps 42–47, <link rel="stylesheet" href="style.css">, and <script src="script.js" defer></script>. Zero placeholder comments or omitted markup. Output ONLY valid HTML code.'
  },
  {
    num: 49, stage: 5, stageName: 'Build & Code',
    title: 'Develop and Build the Full style.css File',
    targetFile: 'css',
    directive: 'Write the complete, production-ready style.css implementing every :root design token, mobile-first responsive Grid/Flexbox layout, surface textures/grain, inner lighting, nested border radii, >=44px touch targets, touch-action rules, tactile control states, fluid cubic-bezier animations, @media (prefers-reduced-motion: reduce) rules, and state classes matching index.html (Step 48). Zero placeholders or omitted rules. Output ONLY valid CSS code.'
  },
  {
    num: 50, stage: 5, stageName: 'Build & Code',
    title: 'Develop and Build the Full script.js File',
    targetFile: 'js',
    directive: 'Write the complete, production-ready script.js organized into clear sections (constants & seed data, central state, DOM cache, pure core logic, safe localStorage persistence & export, batched <template>/DocumentFragment renderers, root event delegation, pointer/keyboard handlers, Web Audio/Canvas effects, reset(), and init()) matching 100% of index.html (Step 48) and style.css (Step 49) with full error handling and zero stubs or TODOs. Output ONLY valid JavaScript code.'
  }
];

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

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
  mobilePersistenceBanner: document.getElementById('mobilePersistenceBanner'),
  persistenceSummaryText: document.getElementById('persistenceSummaryText'),
  grantPersistenceBtn: document.getElementById('grantPersistenceBtn'),
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

// =========================================================================
// MULTI-KEY POOL & LONG-HORIZON RATE-LIMIT MANAGEMENT
// =========================================================================
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
  if (changed) {
    saveKeyPool();
  }
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
    if (!keyCell) {
      keyCell = cells.find((c) => c.length >= 16 && !/\s/.test(c) && !headerWords.test(c));
    }
    if (!keyCell) {
      keyCell = cells.find((c) => c.length >= 12 && !/\s/.test(c) && !headerWords.test(c));
    }
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

  el.keyPoolDot.className = 'w-2 h-2 rounded-full';
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
    el.notifKeyPill.textContent = `All cooling • ${remStr}`;
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
  if (status === 403 && /resource_exhausted|rate[_\s-]?limit|quota|too many requests/i.test(combined)) {
    return true;
  }
  return false;
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
        if (num > 1e12) {
          explicitMs = Math.max(5000, num - Date.now() + 2000);
        } else if (num > 1e9) {
          explicitMs = Math.max(5000, num * 1000 - Date.now() + 2000);
        } else {
          explicitMs = Math.round((num + 2) * 1000);
        }
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

// =========================================================================
// BACKGROUND PERSISTENCE, WORKER HEARTBEAT, BATTERY, NETWORK & LOCK SCREEN
// =========================================================================
function onHeartbeatTick() {
  state.heartbeatTickCount += 1;
  const changed = refreshExpiredCooldowns();
  if (changed || (el.keysModal && !el.keysModal.classList.contains('hidden'))) {
    updateKeyPoolUI();
  }
  if (changed) {
    wakeFreezeIfReady();
  }

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
  // Ultra-low sub-audible dither (128/129) prevents mobile OSes from suspending pure zero-amplitude silence
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
      audio.addEventListener('pause', () => {
        updateKeepAliveBadges();
      });
      audio.addEventListener('play', () => {
        updateKeepAliveBadges();
      });
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
    if (state.isRunning) {
      showToast('Network reconnected — resuming pipeline.', 'success');
    }
  });
  window.addEventListener('offline', () => {
    updateNetworkUI();
    if (state.isRunning) {
      showToast('Device went offline — pipeline will wait and auto-resume when back online.', 'warn');
    }
  });
}

function updateKeepAliveBadges() {
  if (state.wakeLock) {
    el.notifWakeBadge.textContent = 'Wake: ON';
    el.notifWakeBadge.className = 'hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifWakeBadge.textContent = 'Wake: Off';
    el.notifWakeBadge.className = 'hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
  }

  const audioActive = state.bgAudioEl && !state.bgAudioEl.paused;
  if (audioActive) {
    el.notifAudioBadge.textContent = 'BG: ON';
    el.notifAudioBadge.className = 'hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifAudioBadge.textContent = 'BG: Off';
    el.notifAudioBadge.className = 'hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
  }

  const perm = typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';
  if (perm === 'granted') {
    el.notifOsBtn.textContent = state.osNotifEnabled ? 'OS Notif: ON' : 'OS Notif: Muted';
    el.notifOsBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 transition';
  } else if (perm === 'denied') {
    el.notifOsBtn.textContent = 'OS Notif: Blocked';
    el.notifOsBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-rose-500/15 border border-rose-500/35 text-rose-300 transition';
  } else {
    el.notifOsBtn.textContent = 'Enable OS Notif';
    el.notifOsBtn.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-indigo-500/20 hover:bg-indigo-500/35 border border-indigo-500/40 text-indigo-200 transition';
  }
  updatePersistenceBannerUI();
}

function updatePersistenceBannerUI() {
  if (!el.mobilePersistenceBanner) return;
  const notifGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
  const batText = getBatteryShortString();
  if (notifGranted && state.osNotifEnabled && state.bgKeepAliveEnabled) {
    el.mobilePersistenceBanner.className = 'shrink-0 border-b border-emerald-500/30 bg-emerald-950/20 px-3 sm:px-5 py-1.5';
    el.persistenceSummaryText.textContent = `Lock-Screen Shade ON • Background Audio & Auto-Resume Armed${state.storagePersisted ? ' • Storage Locked' : ''}${batText ? ` • ${batText}` : ''}`;
    el.grantPersistenceBtn.textContent = 'Re-Sync Permissions';
  } else {
    el.mobilePersistenceBanner.className = 'shrink-0 border-b border-cyan-500/35 bg-cyan-950/30 px-3 sm:px-5 py-1.5';
    el.persistenceSummaryText.textContent = 'Enable OS notification shade & background keep-alive for lock-screen and walk-away runs.';
    el.grantPersistenceBtn.textContent = 'Enable Always-Active Mode';
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
  if (state.isRunning) {
    startBackgroundAudioKeepAlive();
  }

  updatePersistenceBannerUI();
  updateKeepAliveBadges();
  if (el.mobileReadinessModal && !el.mobileReadinessModal.classList.contains('hidden')) {
    renderReadinessChecklist();
  }

  if (notifGranted) {
    const done = Object.keys(state.completedSteps).length;
    pushOsProgressNotification(
      '50-Point Studio • Lock-Screen Ready',
      state.isRunning
        ? `Building Step ${state.nextStepIndex + 1}/50 (${done}/50 done) — safe to lock screen and walk away.`
        : 'Notification shade, lock-screen media keep-alive & storage persistence armed.',
      { force: true, status: state.isRunning ? 'running' : 'paused', step: state.nextStepIndex }
    );
    showToast('Lock-Screen Notification, Wake Lock & Storage Persistence enabled!', 'success');
  } else {
    showToast('Please allow Notifications in your browser site settings for the lock-screen banner.', 'warn');
  }
}

function sendOsAlertNotification(title, body) {
  if (!state.osNotifEnabled || typeof Notification === 'undefined' || Notification.permission !== 'granted') {
    return;
  }
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
  if (!state.osNotifEnabled || typeof Notification === 'undefined' || Notification.permission !== 'granted') {
    return;
  }
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
    state.swRegistration.active.postMessage({
      type: 'UPDATE_PROGRESS_NOTIFICATION',
      payload
    });
  } else if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'UPDATE_PROGRESS_NOTIFICATION',
      payload
    });
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
      : `${timing.elapsedStr} elapsed`;
  }
  if (el.notifCallsPill) {
    el.notifCallsPill.textContent = `Calls: ${state.sessionCalls}${state.sessionRetries ? ` (${state.sessionRetries} retries)` : ''}`;
  }

  el.liveNotificationBar.className = 'shrink-0 border-b px-3 sm:px-5 py-1.5';
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
    pushOsProgressNotification(title, detail, {
      force: forceOs,
      status: mode,
      step: stepNum
    });
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

  // Unlock background audio & wake lock on any user touch if auto-resumed without initial gesture
  const unlockOnGesture = () => {
    if (state.isRunning && state.bgKeepAliveEnabled) {
      if (!state.bgAudioEl || state.bgAudioEl.paused) {
        startBackgroundAudioKeepAlive();
      }
      if (!state.wakeLock) {
        acquireWakeLock();
      }
    }
  };
  ['pointerdown', 'touchstart', 'keydown'].forEach((evt) => {
    document.addEventListener(evt, unlockOnGesture, { passive: true });
  });
}

function stripMarkdownCodeFences(rawText) {
  let text = String(rawText || '').replace(/^\uFEFF/, '').trim();
  const fencedMatch = text.match(/^```[a-zA-Z0-9_-]*\s*\r?\n([\s\S]*?)\r?\n```\s*$/);
  if (fencedMatch) {
    return fencedMatch[1].trim();
  }
  const firstFence = text.match(/```[a-zA-Z0-9_-]*\s*\r?\n/);
  const lastFenceIdx = text.lastIndexOf('\n```');
  if (firstFence && lastFenceIdx > firstFence.index) {
    const extracted = text.slice(firstFence.index + firstFence[0].length, lastFenceIdx).trim();
    if (extracted.length > text.length * 0.55) {
      return extracted;
    }
  }
  // Handle truncated/unclosed leading markdown fence (e.g. ```javascript\n...)
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
  el.requestCounterText.textContent = `Calls: ${state.sessionCalls} (Retries: ${state.sessionRetries})`;

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

    pill.className = 'stage-pill flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium transition';
    dot.className = 'stage-dot w-2 h-2 rounded-full';

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
      ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30 animate-pulse-soft">Cooldown / Retry</span>'
      : isActive
      ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 animate-pulse-soft">Reasoning...</span>'
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
          <span class="px-1.5 py-0.5 rounded text-[10px] font-medium border ${stageColors[step.stage]}">${step.stageName}</span>
          ${fileTag}
          <span class="text-xs font-semibold text-slate-200">${escapeHtml(step.title)}</span>
        </div>
        <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">${escapeHtml(step.directive)}</p>
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
      ? 'ws-tab inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-indigo-600/20 text-indigo-200 border border-indigo-500/40 transition'
      : 'ws-tab inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900/70 text-slate-400 border border-slate-800 hover:text-slate-200 transition';
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
    return '<!DOCTYPE html><html><body style="font-family:sans-serif;background:#0f172a;color:#94a3b8;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px;"><div><h2 style="color:#e2e8f0;margin-bottom:8px;">Live Preview Ready</h2><p style="font-size:14px;">Run the 50-point pipeline (or paste code into index.html, style.css, and script.js tabs) to launch the app here.</p></div></body></html>';
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
    if (/<\/head>/i.test(html)) {
      html = html.replace(/<\/head>/i, () => `${headInjection}\n</head>`);
    } else {
      html = `${headInjection}\n${html}`;
    }
  }

  if (scriptTag) {
    if (/<\/body>/i.test(html)) {
      html = html.replace(/<\/body>/i, () => `${scriptTag}\n</body>`);
    } else {
      html = `${html}\n${scriptTag}`;
    }
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

  const msg = `Device offline on Step ${stepObj.num}/50 — waiting for Wi-Fi / cellular data to reconnect...`;
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
      showToast(`All ${stats.limitedCount} API keys hit limits. Waiting until ${resetClock} — no work will be lost.`, 'warn');

      await sleepWithAbort(
        waitMs,
        state.abortController?.signal,
        (rem) => {
          const remFormatted = formatDurationCompact(rem);
          const msg = `All ${stats.limitedCount}/${stats.total} keys cooling — auto-resuming Step ${stepObj.num}/50 in ${remFormatted} (at ${resetClock})`;
          el.pipelineStatusText.textContent = msg;
          updateLiveNotificationBar({
            mode: 'frozen',
            title: `Waiting on Step ${stepObj.num}/50 — All APIs Cooling`,
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

    const stepMsg = `Step ${stepObj.num}/50 (${stepObj.stageName}): ${stepObj.title}`;
    el.pipelineStatusText.textContent = `${stepMsg} [${keyObj.label}]...`;
    updateLiveNotificationBar({
      mode: 'running',
      title: `Step ${stepObj.num}/50 • ${stepObj.stageName}`,
      detail: `${stepObj.title} (${keyObj.label})`,
      stepNum: stepObj.num
    });

    const endpoint = `${GEMINI_API_BASE}/${encodeURIComponent(state.model)}:generateContent`;
    const generationConfig = {
      maxOutputTokens: state.maxOutputTokens
    };
    const thinkingCfg = getThinkingConfigForModel(state.model, state.thinkingLevel, forceOmitThinking);
    if (thinkingCfg) {
      generationConfig.thinkingConfig = thinkingCfg;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        signal: state.abortController?.signal,
        headers: {
          'x-goog-api-key': keyObj.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: userPrompt }]
            }
          ],
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
            throw new Error(`Generation blocked (${finishReason}) on Step ${stepObj.num} (${stepObj.title}).`);
          }
          throw Object.assign(
            new Error(`Empty output on Step ${stepObj.num} (${stepObj.title})${finishReason ? ` [finishReason: ${finishReason}]` : ''}`),
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
        showToast(`Model ${state.model} rejected thinkingConfig — retrying same model cleanly.`, 'warn');
        continue;
      }

      if (isQuotaOrRateLimitError(response.status, errJson, errDetail)) {
        const { waitMs, reason } = markKeyRateLimited(keyObj, keyIdx, response, errJson, errDetail);
        const nextReady = getNextAvailableKey();
        if (nextReady) {
          showToast(
            `${keyObj.label} hit limit (${reason}, back in ${formatDurationCompact(waitMs)}). Rotated to ${nextReady.keyObj.label}.`,
            'warn'
          );
        }
        continue;
      }

      if (response.status === 401 || response.status === 403) {
        keyObj.status = 'invalid';
        keyObj.lastError = errDetail;
        if (state.apiKeys.length > 0) {
          state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        }
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
          title: `Step ${stepObj.num}/50 • Transient Retry`,
          detail: msg,
          stepNum: stepObj.num
        });
      });

      updateProgressUI(stepObj.num, false);
      renderChecklist(stepObj.num, false);

    } catch (err) {
      if (err.name === 'AbortError') throw err;

      const isNetworkOrTransient = err.retryable || err instanceof TypeError || err instanceof SyntaxError;
      if (!isNetworkOrTransient) {
        throw err;
      }

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

      const networkWake = new Promise((res) => {
        state.networkWakeResolver = res;
      });
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

function buildStepPrompts(stepObj) {
  const isCodeStep = Boolean(stepObj.targetFile);

  if (isCodeStep) {
    const fileMap = {
      html: 'index.html',
      css: 'style.css',
      js: 'script.js'
    };
    const targetFilename = fileMap[stepObj.targetFile];

    const systemPrompt =
      `You are executing Step ${stepObj.num} of 50 (Stage ${stepObj.stage} — ${stepObj.stageName}: ${stepObj.title}) in an elite Web App Architecture Pipeline.\n` +
      `Your sole task is to author the complete, most advanced, production-grade ${targetFilename} file.\n` +
      `Non-Negotiable Rules:\n` +
      `1. Honor EVERY specification, locked ID, CSS class, data-* attribute, color/texture/lighting token, accessibility requirement, and functional requirement in notes.txt.\n` +
      `2. Output ONLY raw ${targetFilename} code—zero markdown prose, zero placeholders, zero "// ... rest of code", zero omitted handlers or styles.\n` +
      `3. Guarantee 100% standalone browser execution with zero external runtime dependencies.`;

    const userPrompt =
      `TARGET WEB APP REQUEST:\n${state.userPrompt}\n\n` +
      `CURRENT STEP (${stepObj.num}/50): ${stepObj.title}\n` +
      `DIRECTIVE: ${stepObj.directive}\n\n` +
      `CUMULATIVE notes.txt (Steps 1 to ${stepObj.num - 1}):\n${state.notesText}`;

    return { systemPrompt, userPrompt };
  }

  const stageGuidance = {
    1: 'Stage 1 (Research): Uncover concrete problem/desire truths, user contexts, competitor/workaround gaps, mobile & accessibility expectations, and local-only zero-backend trust factors. Avoid generic platitudes.',
    2: 'Stage 2 (Reasoning): Critically synthesize Stage 1 research in notes.txt to lock MVP scope, shortest user journeys, intentional trade-offs, edge cases, and measurable success criteria for a 3-file zero-backend app.',
    3: 'Stage 3 (Planning): Produce exact 3-file engineering blueprints—script.js module sections, central state schema, mobile-ready index.html skeleton, mobile-first style.css tokens, pointer/touch parity, event delegation, and localStorage/RAF safety.',
    4: 'Stage 4 (Design): Deliver rich, concrete, implementable CSS/SVG/Canvas/UX specifications—60-30-10 color tokens, clamp() typography, 4px/8px mobile thumb-zone spacing, surface textures/grain, inner lighting, cubic-bezier motion, tactile states, and living celebrations.',
    5: 'Stage 5 (Build & Code): Complete the pre-build audit, lock exact DOM/CSS/JS contracts, and generate the full, zero-backend, zero-dependency index.html, style.css, and script.js files.'
  };

  const systemPrompt =
    `You are executing Step ${stepObj.num} of 50 (Stage ${stepObj.stage} — ${stepObj.stageName}: ${stepObj.title}) in an elite 50-Point Web App Engineering Pipeline.\n` +
    `${stageGuidance[stepObj.stage]}\n` +
    `Execution Rules:\n` +
    `- Read and build directly upon ALL prior decisions in notes.txt without contradicting locked specs.\n` +
    `- Use dense, structured, high-signal technical bullet points and exact specifications (zero conversational filler).\n` +
    `- Keep every decision strictly 100% client-side with NO backend, delivered across three standalone files (index.html, style.css, script.js) with zero external runtime dependencies.\n` +
    `- Do NOT write full HTML/CSS/JS files yet (code generation occurs exclusively in Steps 48–50).`;

  const userPrompt =
    `TARGET WEB APP REQUEST:\n${state.userPrompt}\n\n` +
    `CURRENT STEP (${stepObj.num}/50): ${stepObj.title}\n` +
    `DIRECTIVE: ${stepObj.directive}\n\n` +
    `CUMULATIVE notes.txt SO FAR:\n${state.notesText || '(Empty — this is Step 1)'}`;

  return { systemPrompt, userPrompt };
}

function truncateNotesBeforeStep(stepNum) {
  const marker = `\n--- [STEP ${stepNum}/50 |`;
  const idx = state.notesText.indexOf(marker);
  if (idx !== -1) {
    state.notesText = state.notesText.slice(0, idx);
  }
  for (let i = stepNum; i <= 50; i++) {
    delete state.completedSteps[i];
  }
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
    el.apiKeyInput.focus();
    return;
  }
  if (stats.readyCount === 0 && stats.limitedCount === 0) {
    showToast('All saved API keys are invalid. Please add a valid key.', 'error');
    el.manageKeysBtn.click();
    return;
  }

  const promptText = el.promptInput.value.trim() || state.userPrompt;
  if (!promptText) {
    showToast('Please enter a web app prompt first.', 'warn');
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
    await appendToNotes(
      `========================================================================\n` +
      `50-POINT WEB APP BUILD LEDGER (${ts})\n` +
      `MODEL: ${state.model} | THINKING: ${state.thinkingLevel}\n` +
      `========================================================================\n` +
      `USER PROMPT:\n${state.userPrompt}\n` +
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
  if (window.innerWidth < 1024) {
    setPromptCollapsed(true);
  }

  await acquireWakeLock();
  startBackgroundAudioKeepAlive();

  let deliberatelyPaused = false;

  const executeLoop = async () => {
    try {
      for (let idx = state.nextStepIndex; idx < PIPELINE_STEPS.length; idx++) {
        const step = PIPELINE_STEPS[idx];
        const stepStartTs = Date.now();

        el.pipelineStatusText.textContent = `Step ${step.num}/50 (${step.stageName}): ${step.title}...`;
        updateProgressUI(step.num, false);
        renderChecklist(step.num, false);
        updateLiveNotificationBar({
          mode: 'running',
          title: `Step ${step.num}/50 • ${step.stageName}`,
          detail: step.title,
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
          `\n--- [STEP ${step.num}/50 | ${step.stageName.toUpperCase()}: ${step.title}] ---\n` +
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
            const msg = `Completed Step ${step.num}/50 — pacing next step in ${(rem / 1000).toFixed(1)}s...`;
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

      el.pipelineStatusText.textContent = 'All 50 Steps Complete! Live Preview launched.';
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
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32Bytes(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
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
  if (/[",\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
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
  const csvContent = [header.join(','), ...rows].join('\n');
  triggerDownload('gemini-api-keys.csv', csvContent, 'text/csv;charset=utf-8');
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

function handleQuickAddKey() {
  const raw = el.apiKeyInput.value.trim();
  if (!raw) return;
  const added = parseAndAddKeys(raw);
  el.apiKeyInput.value = '';
  if (added > 0) {
    showToast(`Added ${added} API key${added > 1 ? 's' : ''} to pool.`, 'success');
  } else {
    showToast('Key already in pool or invalid format.', 'warn');
  }
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
  el.toggleKeyVisBtn.innerHTML = `<i data-lucide="${isPwd ? 'eye-off' : 'eye'}" class="w-3.5 h-3.5"></i>`;
  refreshIcons();
});

el.manageKeysBtn.addEventListener('click', () => {
  renderKeysModalList();
  el.keysModal.classList.remove('hidden');
});

el.closeKeysModalBtn.addEventListener('click', () => {
  el.keysModal.classList.add('hidden');
});

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

if (el.exportCsvKeysBtn) {
  el.exportCsvKeysBtn.addEventListener('click', exportApiKeysToCsv);
}

el.csvKeysFileInput.addEventListener('change', async (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  try {
    const content = await file.text();
    const entries = parseCsvApiKeys(content);
    const added = parseAndAddKeys('', entries);
    renderKeysModalList();
    if (added > 0) {
      showToast(`Imported ${added} API key${added > 1 ? 's' : ''} from ${file.name}.`, 'success');
    } else {
      showToast(`No new valid API keys found in ${file.name}.`, 'warn');
    }
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
    if (choice.outcome === 'accepted') {
      state.deferredInstallPrompt = null;
    }
  } else {
    showToast('On iOS Safari: tap Share → "Add to Home Screen" to install.', 'info');
  }
});

if (el.grantPersistenceBtn) {
  el.grantPersistenceBtn.addEventListener('click', requestFullMobilePersistence);
}

if (el.androidBatteryHelpBtn) {
  el.androidBatteryHelpBtn.addEventListener('click', () => {
    renderReadinessChecklist();
    if (el.mobileReadinessModal) {
      el.mobileReadinessModal.classList.remove('hidden');
      refreshIcons();
    }
  });
}

if (el.closeReadinessBtn) {
  el.closeReadinessBtn.addEventListener('click', () => {
    el.mobileReadinessModal.classList.add('hidden');
  });
}

if (el.enableAllReadinessBtn) {
  el.enableAllReadinessBtn.addEventListener('click', requestFullMobilePersistence);
}

if (el.testLockNotifBtn) {
  el.testLockNotifBtn.addEventListener('click', async () => {
    const granted = await ensureNotificationPermission();
    if (!granted) {
      showToast('Notification permission not granted yet.', 'warn');
      return;
    }
    pushOsProgressNotification(
      '50-Point Studio • Lock-Screen Test',
      'If you see this on your lock screen, background progress updates are working!',
      { force: true, status: state.isRunning ? 'running' : 'paused', step: state.nextStepIndex }
    );
    showToast('Test notification sent to OS shade!', 'success');
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

el.closeSettingsBtn.addEventListener('click', () => {
  el.settingsModal.classList.add('hidden');
});

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
  if (state.abortController) {
    state.abortController.abort();
  }
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
  el.pipelineStatusText.textContent = 'Idle — Ready for Web App Prompt';
  showToast('Workspace reset.', 'info');
});

document.querySelectorAll('.sample-prompt-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (state.isRunning) return;
    el.promptInput.value = btn.dataset.prompt || '';
    el.promptInput.focus();
  });
});

document.querySelectorAll('#checklistFilterBar .filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.activeFilter = btn.dataset.filter;
    document.querySelectorAll('#checklistFilterBar .filter-btn').forEach((b) => {
      b.className = b.dataset.filter === state.activeFilter
        ? 'filter-btn px-2.5 py-1 rounded text-[11px] font-medium bg-indigo-600/25 text-indigo-200 border border-indigo-500/40'
        : 'filter-btn px-2.5 py-1 rounded text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200';
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
  showToast(`Downloaded ZIP with ${files.length} document(s) (including notes).`, 'success');
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
    if (err.name !== 'AbortError') {
      showToast('Could not link local file.', 'warn');
    }
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
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank', 'noopener');
});

function setPromptCollapsed(collapsed) {
  if (collapsed) {
    el.buildForm.classList.add('hidden');
    el.promptCollapsedBar.classList.remove('hidden');
    el.promptCollapsedBar.classList.add('flex');
    const preview = (el.promptInput.value || state.userPrompt || 'Edit Web App Prompt...').trim();
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
    if (['html', 'css', 'js'].includes(btn.dataset.tab)) {
      lastMobileCodeTab = btn.dataset.tab;
    }
  });
});

(function init() {
  initTimerWorker();
  registerServiceWorkerAndPwa();
  initBatteryMonitor();
  initNetworkMonitor();

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
      if (Array.isArray(parsed)) {
        state.apiKeys = parsed;
      }
    }
  } catch (_) {}

  const legacyKey = safeGet('gemini_api_key', '');
  if (legacyKey && state.apiKeys.length === 0) {
    parseAndAddKeys(legacyKey);
  }
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
      updatePersistenceBannerUI();
    }).catch(() => {});
  }

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

  // Fallback interval in case Web Worker is unavailable
  if (!state.timerWorker) {
    setInterval(onHeartbeatTick, 1000);
  }

  refreshIcons();
})();