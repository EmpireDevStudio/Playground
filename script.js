const PIPELINE_STEPS = [
  // =========================================================================
  // STAGE 1: DEEP RESEARCH (Steps 1–10)
  // =========================================================================
  {
    num: 1, stage: 1, stageName: 'Research',
    title: 'Domain & Problem Space Deconstruction',
    directive: 'Deconstruct the problem domain from first principles: identify core user pain points, primary & secondary objectives, domain terminology, industry conventions, and the exact measurable value proposition this web app must deliver.'
  },
  {
    num: 2, stage: 1, stageName: 'Research',
    title: 'Target Personas, Mental Models & Jobs-to-be-Done',
    directive: 'Profile primary, power, and first-time user archetypes: map their technical fluency, natural mental models, daily operating contexts, emotional friction points, and concrete Jobs-to-be-Done (JTBD) with success triggers.'
  },
  {
    num: 3, stage: 1, stageName: 'Research',
    title: 'Best-in-Class Interaction & Industry Benchmarks',
    directive: 'Analyze elite modern web apps in this category: extract proven interaction patterns, command ergonomics, spatial layouts, visual feedback loops, and trust signals that make top-tier tools feel effortless and fast.'
  },
  {
    num: 4, stage: 1, stageName: 'Research',
    title: 'Feature Taxonomy: Core Essentials vs. Power Delighters',
    directive: 'Catalog and stratify every potential capability into (A) Non-Negotiable Core Workflows, (B) High-Leverage Productivity Accelerators (search, filters, bulk actions, shortcuts), and (C) Subtle Power-User Delighters—explicitly flagging bloat to exclude.'
  },
  {
    num: 5, stage: 1, stageName: 'Research',
    title: 'Data Entities, Cardinality, Relations & State Lifecycle',
    directive: 'Map every domain entity, field type, default value, validation constraint, parent-child or many-to-many relationship, CRUD lifecycle, sorting/grouping keys, and derived/computed aggregate metrics.'
  },
  {
    num: 6, stage: 1, stageName: 'Research',
    title: 'Client-Side Web APIs & Zero-Dependency Browser Capabilities',
    directive: 'Audit native, zero-dependency browser APIs applicable to this app (LocalStorage with quota guards, Blob/URL file export & FileReader import, Clipboard API, Web Audio API, Inline SVG/Canvas, Drag & Drop, Intersection/ResizeObserver, Intl formatting).'
  },
  {
    num: 7, stage: 1, stageName: 'Research',
    title: 'WCAG 2.2 AA Accessibility, Focus & Keyboard Ergonomics',
    directive: 'Research exact WCAG 2.2 AA requirements: semantic landmarks, heading hierarchy, ARIA roles/states/live regions, modal focus trapping, roving tabindex, >=4.5:1 contrast, and full keyboard-only operability.'
  },
  {
    num: 8, stage: 1, stageName: 'Research',
    title: 'Client-Side Performance Budgets & DOM Rendering Mechanics',
    directive: 'Identify potential rendering bottlenecks (layout thrashing, forced synchronous reflows, O(n^2) list filtering, excessive event listeners) and establish Vanilla JS optimization patterns (DocumentFragment, event delegation, debouncing, CSS containment).'
  },
  {
    num: 9, stage: 1, stageName: 'Research',
    title: 'Client-Side Security, XSS Defense & Storage Resilience',
    directive: 'Audit client-side threat & corruption vectors: HTML/script injection via user-supplied strings, unsafe innerHTML templates, malformed JSON/CSV imports, prototype-pollution keys, NaN/Infinity math leaks, and corrupt localStorage recovery.'
  },
  {
    num: 10, stage: 1, stageName: 'Research',
    title: 'Edge Cases, Boundary Inputs & Stress-Scenario Discovery',
    directive: 'Systematically uncover non-obvious edge cases: 0-item empty states, 1,000+ item stress loads, ultra-long unbroken strings, rapid double-clicks/submissions, 320px narrow mobile viewports, dark/light theme flips, and offline/sandboxed storage.'
  },

  // =========================================================================
  // STAGE 2: DEEP REASONING (Steps 11–20)
  // =========================================================================
  {
    num: 11, stage: 2, stageName: 'Reasoning',
    title: 'Synthesizing Hidden User Intent & 10x Leverage Opportunities',
    directive: 'Reason deeply across Stage 1 research to uncover implicit user needs and high-leverage workflows (e.g., instant live summaries, smart defaults, quick-add flows, contextual filters) that multiply usefulness without adding UI clutter.'
  },
  {
    num: 12, stage: 2, stageName: 'Reasoning',
    title: 'Resolving Architectural Trade-offs & Strict Scope Borders',
    directive: 'Evaluate competing design/engineering trade-offs from Stage 1, justify every architectural choice, and lock strict scope borders so every included feature is deeply polished rather than half-baked.'
  },
  {
    num: 13, stage: 2, stageName: 'Reasoning',
    title: 'Inferring Deterministic Unidirectional State & Data Flow',
    directive: 'Reason out a rock-solid single-source-of-truth state model (State -> Pure Selectors/Computations -> Render -> Delegated Events -> Action Dispatch) so all panels, counters, and views stay 100% synchronized.'
  },
  {
    num: 14, stage: 2, stageName: 'Reasoning',
    title: 'Extracting Micro-Interaction & Immediate Feedback Loops',
    directive: 'Reason through every user action to guarantee immediate, unmistakable feedback: optimistic UI updates, non-destructive delete/undo safety nets, inline field validation, and crisp status confirmations.'
  },
  {
    num: 15, stage: 2, stageName: 'Reasoning',
    title: 'Cross-Device Ergonomics & Viewport Adaptation Logic',
    directive: 'Reason through how desktop power ergonomics (multi-column workspaces, hover actions, keyboard shortcuts) adapt seamlessly to touch-first tablet/mobile viewports without losing capability or causing horizontal scroll.'
  },
  {
    num: 16, stage: 2, stageName: 'Reasoning',
    title: 'Zero-Friction Onboarding, Starter Seed Data & Empty States',
    directive: 'Design the first-5-seconds experience: realistic, domain-authentic starter seed data that showcases the app immediately, paired with a clean one-click "Clear / Start Fresh" and "Load Sample Data" recovery path.'
  },
  {
    num: 17, stage: 2, stageName: 'Reasoning',
    title: 'Performance Pre-Mortem & Algorithmic Efficiency Strategy',
    directive: 'Conduct a pre-mortem on the heaviest computational and DOM paths identified in Stage 1, locking down exact mitigation strategies (memoized/cached selectors, keyed/targeted DOM updates, throttled storage writes).'
  },
  {
    num: 18, stage: 2, stageName: 'Reasoning',
    title: 'Strict Separation of Concerns (HTML / CSS / JS Contract)',
    directive: 'Define clean architectural boundaries: semantic structure & accessibility hooks in index.html, visual tokens & state-driven styling ([data-state], .is-active) in style.css, and pure logic + DOM orchestration in script.js.'
  },
  {
    num: 19, stage: 2, stageName: 'Reasoning',
    title: 'Inclusive Accessibility & Keyboard-First Synthesis',
    directive: 'Translate Stage 1 WCAG research into concrete runtime behaviors: modal focus trapping & restoration, ESC dismissal, Enter/Space activation, "/" search focus, Ctrl/Cmd+Z undo, and aria-live status announcements.'
  },
  {
    num: 20, stage: 2, stageName: 'Reasoning',
    title: 'Master Engineering Principles & Non-Negotiable Invariants',
    directive: 'Distill all Stage 1–2 insights into 10 strict, verifiable engineering invariants (zero external runtime dependencies, zero XSS vectors, zero silent failures, deterministic state, full keyboard parity) that govern all code.'
  },

  // =========================================================================
  // STAGE 3: MASTER ENGINEERING PLANNING (Steps 21–30)
  // =========================================================================
  {
    num: 21, stage: 3, stageName: 'Planning',
    title: 'Master System Architecture & 3-File Interface Blueprint',
    directive: 'Plan the complete modular architecture across index.html, style.css, and script.js: define script loading (defer), CSS link order, IIFE/module encapsulation, and zero-build-step standalone execution.'
  },
  {
    num: 22, stage: 3, stageName: 'Planning',
    title: 'Semantic DOM Hierarchy, Landmarks & Component Tree',
    directive: 'Blueprint the full DOM tree for index.html: header/topbar, primary controls/filters, main workspace regions, analytics/summary bar, modals/drawers, toast region, and exact semantic elements + ARIA attributes.'
  },
  {
    num: 23, stage: 3, stageName: 'Planning',
    title: 'Complete State Schema, Versioning, Persistence & Undo Stack',
    directive: 'Define the exact JSON state schema, schemaVersion field, safe localStorage get/set/migrate wrapper, in-memory fallback if storage is blocked, and an undo/redo history stack (or snapshot restore).'
  },
  {
    num: 24, stage: 3, stageName: 'Planning',
    title: 'Core Algorithms, Domain Engine & Pure Utility Functions',
    directive: 'Specify every pure function in script.js: ID generation, date/currency/unit formatting (Intl), multi-criteria filtering & sorting, aggregation/analytics calculations, and input validation.'
  },
  {
    num: 25, stage: 3, stageName: 'Planning',
    title: 'Event Delegation, Keyboard Shortcuts & Pointer/Drag Handling',
    directive: 'Map every user interaction to root-level event delegation, form submit handlers, debounced search inputs, global keyboard shortcut router (safely ignoring inputs/textareas), and drag/reorder or touch interactions.'
  },
  {
    num: 26, stage: 3, stageName: 'Planning',
    title: 'CSS Token System, Cascade Layers & Layout Architecture',
    directive: 'Plan the complete style.css architecture: :root semantic custom properties, light/dark theme overrides ([data-theme]), CSS Grid/Flexbox shell, component primitives, and state modifier classes.'
  },
  {
    num: 27, stage: 3, stageName: 'Planning',
    title: 'Safe Dynamic Rendering, SVG Charts & Focus Preservation',
    directive: 'Plan exact DOM rendering pipelines: strict escapeHtml() / createElement helpers, DocumentFragment batching, dynamic inline SVG chart/meter generation, and preserving active input focus/cursor during re-renders.'
  },
  {
    num: 28, stage: 3, stageName: 'Planning',
    title: 'Defensive Error Handling, Inline Validation & Toast System',
    directive: 'Plan try/catch boundaries around parsing/storage/audio/file I/O, accessible inline validation feedback, confirmation dialogs for destructive actions, and an auto-dismissing aria-live toast queue.'
  },
  {
    num: 29, stage: 3, stageName: 'Planning',
    title: 'Realistic Starter Seed Data, JSON/CSV Export & Safe Import',
    directive: 'Plan rich, domain-accurate starter seed data, clean Blob-based export (JSON and/or CSV), strict schema-validated file import with user feedback, and one-click reset to sample data.'
  },
  {
    num: 30, stage: 3, stageName: 'Planning',
    title: 'End-to-End Integration & Verification Test Matrix',
    directive: 'Construct a detailed verification matrix mapping every core workflow, keyboard shortcut, persistence reload, import/export round-trip, and edge case to exact expected DOM and state outcomes.'
  },

  // =========================================================================
  // STAGE 4: VISUAL & UX DESIGNING — 10 Steps × 2 Paired Dimensions = 20 Specs
  // =========================================================================
  {
    num: 31, stage: 4, stageName: 'Designing',
    title: 'Visual Identity & Aesthetic Direction + Color Palette & WCAG Contrast',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Cohesive Visual Identity & Aesthetic Direction tailored to this domain, AND (2) Complete Hex/HSL Color Palette (canvas, elevated surfaces, borders, primary/secondary accents, semantic success/warn/danger) with verified WCAG AA contrast ratios.'
  },
  {
    num: 32, stage: 4, stageName: 'Designing',
    title: 'Surface Textures & Materiality + Lighting, Shadows & Elevation Depth',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Surface Textures, Subtle Gradients, Hairline Borders & Glass/Matte Materiality, AND (2) Multi-layered Directional Shadows, Top-Edge Specular Highlights, Ambient Glow & Z-Index Elevation Tiers.'
  },
  {
    num: 33, stage: 4, stageName: 'Designing',
    title: 'Typography Hierarchy & Font System + Readability, Measure & Micro-Spacing',
    directive: 'Deliver 2 paired design specs in exact detail: (1) System/Modern Font Stack, Expressive Type Scale, Weights & font-variant-numeric: tabular-nums for metrics, AND (2) Line-Heights, Character Measure, Letter-Spacing & 4px/8px Spatial Rhythm Tokens.'
  },
  {
    num: 34, stage: 4, stageName: 'Designing',
    title: 'App Style & Structural Grid + Information Density & Whitespace Balance',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Signature App Shell Style (header bar, toolbars, cards/panels, sidebars) & CSS Grid/Flexbox proportions, AND (2) Intentional Information Density & Breathing Whitespace Rules.'
  },
  {
    num: 35, stage: 4, stageName: 'Designing',
    title: 'UX Flow & Ergonomic Efficiency + Cognitive Load Reduction & Affordances',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Frictionless Primary & Secondary UX Flows (minimal clicks/keystrokes from intent to completion), AND (2) Progressive Disclosure, Clear Visual Affordances & Cognitive Load Reduction.'
  },
  {
    num: 36, stage: 4, stageName: 'Designing',
    title: 'Interactive Controls & Form Craft + Hover, Focus, Active & Disabled States',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Precision Craft for Buttons, Inputs, Selects, Toggles, Badges & Sliders, AND (2) Distinct Tactile States for :hover, :focus-visible rings, :active press-down & :disabled.'
  },
  {
    num: 37, stage: 4, stageName: 'Designing',
    title: 'Motion Choreography & Transitions + Tactile Physics & Reduced-Motion Rules',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Purposeful Cubic-Bezier Transitions, Drawer/Modal Reveals & List Entry Animations, AND (2) Snappy Tactile Physics paired with strict @media (prefers-reduced-motion: reduce) overrides.'
  },
  {
    num: 38, stage: 4, stageName: 'Designing',
    title: 'Inline SVG Iconography & Data Visuals + Empty, Loading & Zero-State Art',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Crisp Inline SVG Icon System (consistent stroke-width/viewBox), Progress Meters & SVG Charts, AND (2) Designed Empty/Zero States with Helpful Copy & Primary Call-to-Action.'
  },
  {
    num: 39, stage: 4, stageName: 'Designing',
    title: 'Responsive Breakpoints & Touch Targets + Adaptive Mobile Navigation',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Fluid Breakpoints (Desktop >=1024px, Tablet 768px, Mobile <=640px) with >=44px Touch Targets, AND (2) Adaptive Panel Stacking & Overflow-Free Mobile Toolbars.'
  },
  {
    num: 40, stage: 4, stageName: 'Designing',
    title: 'Theme Polish (Dark/Light Toggle) + Signature Brand Details & Delight',
    directive: 'Deliver 2 paired design specs in exact detail: (1) Complete Dual-Theme (Dark & Light) CSS Variable Parity with instant toggle persistence, AND (2) Signature Polish Details (custom scrollbars, kbd shortcut chips, subtle celebratory feedback).'
  },

  // =========================================================================
  // STAGE 5: ADVANCEMENTS, AUDIT, POLISH & CODE GENERATION (Steps 41–50)
  // =========================================================================
  {
    num: 41, stage: 5, stageName: 'Build & Code',
    title: 'Architectural Advancements & Power-Feature Elevation',
    directive: 'Review all accumulated notes.txt decisions and inject high-impact engineering advancements (instant live KPIs, smart keyboard shortcuts, undo safety, theme toggle, export/import polish) that elevate the app to flagship quality.'
  },
  {
    num: 42, stage: 5, stageName: 'Build & Code',
    title: 'Cross-Stage Alignment Audit (Research → Reason → Plan → Design)',
    directive: 'Audit notes.txt across Stages 1–4 to eliminate any contradictions, gaps, or orphaned features, verifying every planned feature has both visual styling and JS state/event backing.'
  },
  {
    num: 43, stage: 5, stageName: 'Build & Code',
    title: 'Proactive Bug Hunting, Race-Condition & Edge-Case Hardening',
    directive: 'Pre-emptively hunt and resolve subtle bugs before code generation: null DOM refs, duplicate event bindings, XSS in dynamic HTML, NaN/division-by-zero in stats, stale modal state, and localStorage quota/JSON errors.'
  },
  {
    num: 44, stage: 5, stageName: 'Build & Code',
    title: 'Performance, Accessibility & Semantic Polish Pass',
    directive: 'Audit ARIA attributes, keyboard focus order, contrast pairs, CSS layout stability (preventing CLS), and batched DOM updates to guarantee 60fps responsiveness and full WCAG 2.2 AA compliance.'
  },
  {
    num: 45, stage: 5, stageName: 'Build & Code',
    title: 'UX Micro-Copy, Shortcut Hints & Empty-State Refinement',
    directive: 'Refine every button label, placeholder, tooltip, confirmation message, and empty-state explanation so the UI reads like an expertly crafted flagship product.'
  },
  {
    num: 46, stage: 5, stageName: 'Build & Code',
    title: 'Pre-Code Contract Lock: Exact IDs, Classes, Data-Attrs & Events',
    directive: 'Publish the canonical, locked manifest of EVERY HTML element ID, CSS class name, state hook ([data-state], .is-active), data-* attribute, and custom event so index.html, style.css, and script.js synchronize with 0% mismatch.'
  },
  {
    num: 47, stage: 5, stageName: 'Build & Code',
    title: 'Full 3-Script Engineering Specification in Fine Exact Detail',
    directive: 'Produce the exhaustive, implementation-grade blueprint for all three scripts: (1) complete index.html section-by-section structure, (2) complete style.css token & selector inventory, and (3) complete script.js module/function/handler specifications.'
  },
  {
    num: 48, stage: 5, stageName: 'Build & Code',
    title: 'Generate Advanced index.html → index.html Notepad',
    targetFile: 'html',
    directive: 'Write the complete, production-ready, most advanced form of index.html. Include <link rel="stylesheet" href="style.css"> in <head> and <script src="script.js" defer></script> before </body>, full semantic landmarks, ARIA attributes, inline SVGs (zero external icon/CSS dependencies required to run), and every exact ID/class/data-attribute locked in Steps 46–47. Output ONLY valid HTML code.'
  },
  {
    num: 49, stage: 5, stageName: 'Build & Code',
    title: 'Generate Advanced style.css → style.css Notepad',
    targetFile: 'css',
    directive: 'Write the complete, production-ready, most advanced form of style.css implementing every token, dark/light theme variable, surface texture, lighting/shadow tier, typography rule, interactive state, responsive breakpoint, reduced-motion rule, and animation defined in notes.txt and matching every selector in index.html (Step 48). Zero placeholders or omitted rules. Output ONLY valid CSS code.'
  },
  {
    num: 50, stage: 5, stageName: 'Build & Code',
    title: 'Generate Advanced script.js → script.js Notepad',
    targetFile: 'js',
    directive: 'Write the complete, production-ready, most advanced form of script.js powering every feature, pure algorithm, state lifecycle, localStorage persistence, realistic seed data, undo/reset, keyboard shortcuts, accessibility focus/ARIA management, export/import, and defensive error handling defined in notes.txt, matching 100% of IDs/classes/data-attributes in index.html (Step 48) and style.css (Step 49). Zero TODOs or stubs. Output ONLY valid JavaScript code.'
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
  retryCapSec: 90,
  bgKeepAliveEnabled: true,
  osNotifEnabled: true,
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
  freezeWakeResolver: null,
  sessionCalls: 0,
  sessionRetries: 0,
  abortController: null,
  fileHandle: null,
  previewErrors: [],
  swRegistration: null,
  deferredInstallPrompt: null,
  wakeLock: null,
  bgAudioEl: null,
  bgAudioUrl: null,
  timerWorker: null,
  lastOsNotifPush: 0
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
  liveNotificationBar: document.getElementById('liveNotificationBar'),
  notifStatusDot: document.getElementById('notifStatusDot'),
  notifTitle: document.getElementById('notifTitle'),
  notifDetail: document.getElementById('notifDetail'),
  notifKeyPill: document.getElementById('notifKeyPill'),
  notifProgressText: document.getElementById('notifProgressText'),
  notifProgressFill: document.getElementById('notifProgressFill'),
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
    resetAt: k.resetAt,
    lastError: k.lastError || '',
    calls: k.calls || 0,
    hits429: k.hits429 || 0
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
    osNotifEnabled: state.osNotifEnabled
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
  }, 3600);
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
  if (!ts) return '';
  try {
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  } catch (_) {
    return '';
  }
}

// =========================================================================
// MULTI-KEY POOL & RATE-LIMIT MANAGEMENT
// =========================================================================
function refreshExpiredCooldowns() {
  const now = Date.now();
  let changed = false;
  state.apiKeys.forEach((k) => {
    if (k.status === 'rate_limited' && k.resetAt && now >= k.resetAt) {
      k.status = 'ready';
      k.resetAt = null;
      changed = true;
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
    } else if (k.status === 'rate_limited' && k.resetAt && k.resetAt > now) {
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
  const len = state.apiKeys.length;
  if (len === 0) return null;

  for (let offset = 0; offset < len; offset++) {
    const idx = (state.activeKeyIndex + offset) % len;
    const candidate = state.apiKeys[idx];
    if (candidate.status === 'ready') {
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
      lastError: '',
      calls: 0,
      hits429: 0
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

    // Split CSV row respecting double quotes
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

    // Find API key cell (prefer AIza... or >=16 char non-space token, fallback >=12)
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
  if (activeKeyObj) {
    el.notifKeyPill.textContent = `${activeKeyObj.label} (${stats.readyCount}/${stats.total} ready)`;
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
    const remSec = Math.max(0, Math.ceil((stats.earliestResetAt - now) / 1000));
    el.modalPoolSummary.textContent = `0 Ready • Next reset in ${remSec}s`;
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
    const remSec = Math.ceil(remMs / 1000);

    let statusPill = '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Ready</span>';
    if (isActive && state.isRunning) {
      statusPill = '<span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/20 text-indigo-200 border border-indigo-500/40">Active</span>';
    } else if (k.status === 'rate_limited' && remMs > 0) {
      statusPill = `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-amber-500/15 text-amber-300 border border-amber-500/30">Cooldown ${remSec}s (${formatResetClock(k.resetAt)})</span>`;
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
          Calls: ${k.calls || 0} • 429s: ${k.hits429 || 0}${k.lastError ? ` • ${escapeHtml(k.lastError.slice(0, 60))}` : ''}
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

function extractRateLimitWaitMs(response, errJson, errDetail, keyObj) {
  // 1. Retry-After header
  const retryAfter = response.headers.get('Retry-After');
  if (retryAfter) {
    const asNum = Number(retryAfter);
    if (!Number.isNaN(asNum) && asNum > 0) {
      return Math.round((asNum + 1.5) * 1000);
    }
    const asDate = Date.parse(retryAfter);
    if (!Number.isNaN(asDate) && asDate > Date.now()) {
      return Math.max(2000, asDate - Date.now() + 1500);
    }
  }

  // 2. x-ratelimit-reset header (epoch seconds or relative seconds)
  const rlReset = response.headers.get('x-ratelimit-reset') || response.headers.get('x-ratelimit-reset-requests');
  if (rlReset) {
    const num = Number(rlReset);
    if (!Number.isNaN(num) && num > 0) {
      if (num > 1e9) {
        return Math.max(2000, num * 1000 - Date.now() + 1500);
      }
      return Math.round((num + 1.5) * 1000);
    }
  }

  // 3. Google API error.details RetryInfo.retryDelay (e.g. "42s" or "42.5s")
  const details = errJson?.error?.details;
  if (Array.isArray(details)) {
    for (const d of details) {
      if (d?.retryDelay) {
        const m = String(d.retryDelay).match(/([\d.]+)\s*s/i);
        if (m) return Math.round((parseFloat(m[1]) + 1.5) * 1000);
      }
    }
  }

  // 4. Parse "Please retry in 42.3s" from error message
  const msgMatch = String(errDetail || '').match(/retry\s+(?:in|after)\s+([\d.]+)\s*s/i);
  if (msgMatch) {
    return Math.round((parseFloat(msgMatch[1]) + 1.5) * 1000);
  }

  // 5. Fallback configured cooldown with gentle escalation per consecutive 429
  const hits = Math.min(4, (keyObj?.hits429 || 0));
  const sec = Math.min(state.retryCapSec * 4, Math.round(state.defaultCooldownSec * Math.pow(1.25, hits)));
  return sec * 1000;
}

// =========================================================================
// BACKGROUND PERSISTENCE, WORKER TIMERS, WAKE LOCK & NOTIFICATIONS
// =========================================================================
function initTimerWorker() {
  if (state.timerWorker || typeof Worker === 'undefined') return;
  try {
    const workerCode = `
      const timers = new Map();
      self.onmessage = function(e) {
        const { cmd, id, ms } = e.data || {};
        if (cmd === 'start') {
          const tid = setTimeout(() => {
            timers.delete(id);
            self.postMessage({ id, done: true });
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
      if (e.data && e.data.id === id) {
        state.timerWorker.removeEventListener('message', onMsg);
        resolve();
      }
    };
    state.timerWorker.addEventListener('message', onMsg);
    state.timerWorker.postMessage({ cmd: 'start', id, ms });
  });
}

function createSilentWavBlobUrl() {
  // 1-second 8kHz mono 8-bit PCM silent WAV
  const sampleRate = 8000;
  const numSamples = sampleRate;
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
  for (let i = 44; i < 44 + numSamples; i++) view.setUint8(i, 128);
  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

async function acquireWakeLock() {
  if (!state.bgKeepAliveEnabled || !('wakeLock' in navigator)) {
    updateKeepAliveBadges();
    return;
  }
  try {
    if (!state.wakeLock) {
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
      audio.volume = 0.01;
      audio.setAttribute('playsinline', '');
      state.bgAudioEl = audio;
    }
    state.bgAudioEl.play().catch(() => {});
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
  updateKeepAliveBadges();
}

function updateMediaSessionMetadata(title, detail) {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title || '50-Point Web App Studio',
      artist: detail || 'Background Build Active',
      album: state.model || 'Gemini',
      artwork: [
        { src: './icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: './icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    });
    navigator.mediaSession.playbackState = state.isRunning ? 'playing' : 'paused';
    navigator.mediaSession.setActionHandler('pause', () => {
      if (state.abortController) state.abortController.abort();
    });
    navigator.mediaSession.setActionHandler('play', () => {
      if (!state.isRunning && state.nextStepIndex < 50) runPipeline(false);
    });
  } catch (_) {}
}

function updateKeepAliveBadges() {
  if (state.wakeLock) {
    el.notifWakeBadge.textContent = 'Wake: ON';
    el.notifWakeBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifWakeBadge.textContent = 'Wake: Off';
    el.notifWakeBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
  }

  const audioActive = state.bgAudioEl && !state.bgAudioEl.paused;
  if (audioActive) {
    el.notifAudioBadge.textContent = 'BG: ON';
    el.notifAudioBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/15 border border-emerald-500/35 text-emerald-300';
  } else {
    el.notifAudioBadge.textContent = 'BG: Off';
    el.notifAudioBadge.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-slate-900/80 border border-slate-700/70 text-slate-400';
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

function pushOsProgressNotification(title, body, { force = false, status = 'running', step = 0 } = {}) {
  if (!state.osNotifEnabled || typeof Notification === 'undefined' || Notification.permission !== 'granted') {
    return;
  }
  const now = Date.now();
  if (!force && now - state.lastOsNotifPush < 3500) return;
  state.lastOsNotifPush = now;

  const actions = status === 'running' || status === 'frozen'
    ? [{ action: 'pause', title: 'Pause Build' }]
    : status === 'paused'
    ? [{ action: 'resume', title: 'Resume Build' }]
    : [];

  const payload = {
    title,
    body,
    tag: 'wbs-pipeline-progress',
    renotify: false,
    silent: true,
    requireInteraction: status === 'running' || status === 'frozen',
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
      new Notification(title, { body, tag: 'wbs-pipeline-progress', silent: true, icon: './icon-192.png' });
    } catch (_) {}
  }
}

function updateLiveNotificationBar({ mode = 'hidden', title = '', detail = '', stepNum = 0, forceOs = false } = {}) {
  if (mode === 'hidden') {
    el.liveNotificationBar.classList.add('hidden');
    return;
  }

  el.liveNotificationBar.classList.remove('hidden');
  const doneCount = Object.keys(state.completedSteps).length;
  const pct = Math.round((doneCount / 50) * 100);
  el.notifProgressText.textContent = `${doneCount}/50 (${pct}%)`;
  el.notifProgressFill.style.width = `${pct}%`;

  el.liveNotificationBar.className = 'shrink-0 border-b px-3 sm:px-5 py-2';
  el.notifStatusDot.className = 'w-2.5 h-2.5 rounded-full shrink-0';

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
  updateMediaSessionMetadata(title, detail);

  if (mode === 'running' || mode === 'frozen' || mode === 'complete' || mode === 'error' || mode === 'paused') {
    pushOsProgressNotification(title, `${detail} (${doneCount}/50 • ${pct}%)`, {
      force: forceOs,
      status: mode,
      step: stepNum
    });
  }
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

  // Show install button on iOS Safari when not already standalone
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isIos && !isStandalone) {
    el.installAppBtn.classList.remove('hidden');
    el.installAppBtn.classList.add('inline-flex');
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && state.isRunning) {
      acquireWakeLock();
      updateKeyPoolUI();
    }
    if (state.isRunning && state.swRegistration && state.swRegistration.active) {
      state.swRegistration.active.postMessage({ type: 'KEEPALIVE_PING' });
    }
  });
}

function stripMarkdownCodeFences(rawText) {
  const text = (rawText || '').trim();
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

function buildCombinedPreviewHtml({ includePreviewBridge = true } = {}) {
  const rawHtml = (state.htmlCode || '').trim();
  const rawCss = (state.cssCode || '').trim();
  const rawJs = (state.jsCode || '').trim();

  if (!rawHtml && !rawCss && !rawJs) {
    return '<!DOCTYPE html><html><body style="font-family:sans-serif;background:#0f172a;color:#94a3b8;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px;"><div><h2 style="color:#e2e8f0;margin-bottom:8px;">Live Preview Ready</h2><p style="font-size:14px;">Run the 50-point pipeline (or paste code into index.html, style.css, and script.js tabs) to launch the app here.</p></div></body></html>';
  }

  let html = rawHtml || '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>App Preview</title></head><body><div id="app"></div></body></html>';

  html = html.replace(/<link[^>]*href=["'](?:\.\/)?style\.css["'][^>]*>/gi, '');
  html = html.replace(/<script[^>]*src=["'](?:\.\/)?script\.js["'][^>]*>\s*<\/script>/gi, '');

  const styleOpenTag = '<sty' + 'le>';
  const styleCloseTag = '</sty' + 'le>';
  const scriptOpenTag = '<scr' + 'ipt>';
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
  const scriptTag = safeJs ? `${scriptOpenTag}\n${safeJs}\n${scriptCloseTag}` : '';

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

    // 1. Acquire next ready API key from pool
    let picked = getNextAvailableKey();

    if (!picked) {
      const stats = getKeyPoolStats();
      if (stats.total === 0) {
        throw new Error('No API keys configured. Add at least one Google AI Studio API key.');
      }
      if (stats.limitedCount === 0 || !stats.earliestResetAt) {
        throw new Error('All configured API keys are marked invalid. Please add a valid API key.');
      }

      // 2. ALL keys rate-limited -> Enter Pause/Freeze state until earliest key resets
      state.isFrozen = true;
      const waitMs = Math.max(1500, stats.earliestResetAt - Date.now());
      const resetClock = formatResetClock(stats.earliestResetAt);
      const wakePromise = new Promise((res) => {
        state.freezeWakeResolver = res;
      });

      updateProgressUI(stepObj.num, true);
      renderChecklist(stepObj.num, true);
      showToast(`All ${stats.limitedCount} API keys hit rate limits. Frozen until ${resetClock}.`, 'warn');

      await sleepWithAbort(
        waitMs,
        state.abortController?.signal,
        (rem) => {
          const sec = Math.ceil(rem / 1000);
          const msg = `Rate-Limit Freeze (${stats.limitedCount}/${stats.total} keys cooling) — auto-resuming in ${sec}s (at ${resetClock})`;
          el.pipelineStatusText.textContent = msg;
          updateLiveNotificationBar({
            mode: 'frozen',
            title: `Frozen on Step ${stepObj.num}/50 — Waiting for API Reset`,
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
        saveKeyPool();
        // Rotate starting index for next call so load distributes cleanly across ready keys
        if (state.apiKeys.length > 1) {
          state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        }
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

      // Rate-limit (429): Record reset time on THIS key and cycle immediately to next key!
      if (response.status === 429) {
        const waitMs = extractRateLimitWaitMs(response, errJson, errDetail, keyObj);
        keyObj.status = 'rate_limited';
        keyObj.resetAt = Date.now() + waitMs;
        keyObj.hits429 = (keyObj.hits429 || 0) + 1;
        keyObj.lastError = errDetail;
        state.sessionRetries += 1;
        state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        saveKeyPool();
        updateKeyPoolUI();

        const nextReady = getNextAvailableKey();
        if (nextReady) {
          showToast(`${keyObj.label} rate-limited (${Math.ceil(waitMs / 1000)}s). Switched to ${nextReady.keyObj.label}.`, 'warn');
        }
        continue;
      }

      // Invalid/Unauthorized key (401/403): mark invalid & move to next key
      if (response.status === 401 || response.status === 403) {
        keyObj.status = 'invalid';
        keyObj.lastError = errDetail;
        state.activeKeyIndex = (keyIdx + 1) % state.apiKeys.length;
        saveKeyPool();
        updateKeyPoolUI();
        showToast(`${keyObj.label} rejected (${response.status}). Switching to next key.`, 'error');
        continue;
      }

      if (!isTransientStatus(response.status)) {
        throw new Error(`API error (${response.status}) on ${state.model}: ${errDetail}`);
      }

      transientAttempt += 1;
      state.sessionRetries += 1;
      const backoffSec = Math.min(state.retryCapSec, Math.round(state.retryBaseSec * Math.pow(1.35, Math.min(transientAttempt - 1, 6))));
      updateProgressUI(stepObj.num, true);
      renderChecklist(stepObj.num, true);

      await sleepWithAbort(backoffSec * 1000, state.abortController?.signal, (rem) => {
        const msg = `HTTP ${response.status} on Step ${stepObj.num}/50 — retry #${transientAttempt} in ${(rem / 1000).toFixed(0)}s...`;
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

      transientAttempt += 1;
      state.sessionRetries += 1;
      const backoffSec = Math.min(state.retryCapSec, Math.round(state.retryBaseSec * Math.pow(1.35, Math.min(transientAttempt - 1, 6))));
      updateProgressUI(stepObj.num, true);
      renderChecklist(stepObj.num, true);

      await sleepWithAbort(backoffSec * 1000, state.abortController?.signal, (rem) => {
        const msg = `Network issue on Step ${stepObj.num}/50 — retry #${transientAttempt} in ${(rem / 1000).toFixed(0)}s...`;
        el.pipelineStatusText.textContent = msg;
        updateLiveNotificationBar({
          mode: 'running',
          title: `Step ${stepObj.num}/50 • Network Retry`,
          detail: msg,
          stepNum: stepObj.num
        });
      });

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
    1: 'Stage 1 (Deep Research): Uncover concrete domain truths, user workflows, browser capabilities, security vectors, and edge cases. Avoid generic platitudes.',
    2: 'Stage 2 (Deep Reasoning): Critically synthesize Stage 1 research in notes.txt to extract maximum architectural & UX leverage, resolve trade-offs, and lock engineering invariants.',
    3: 'Stage 3 (Master Planning): Produce exact schemas, module contracts, DOM hierarchies, algorithms, CSS token plans, and test matrices ready for implementation.',
    4: 'Stage 4 (Visual & UX Design): You MUST explicitly deliver BOTH paired design dimensions in rich, concrete, implementable detail (exact CSS values, visual mechanics, and UX rules).',
    5: 'Stage 5 (Audit, Polish & Specification): Ruthlessly audit notes.txt for bugs, gaps, and ID/class mismatches, and lock the exact 3-script blueprint before code generation.'
  };

  const systemPrompt =
    `You are executing Step ${stepObj.num} of 50 (Stage ${stepObj.stage} — ${stepObj.stageName}: ${stepObj.title}) in an elite 50-Point Web App Engineering Pipeline.\n` +
    `${stageGuidance[stepObj.stage]}\n` +
    `Execution Rules:\n` +
    `- Read and build directly upon ALL prior decisions in notes.txt without contradicting locked specs.\n` +
    `- Use dense, structured, high-signal technical bullet points and exact specifications (zero conversational filler).\n` +
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
  }

  state.isRunning = true;
  state.isPaused = false;
  state.isFrozen = false;
  state.abortController = new AbortController();
  updateControlButtons();
  if (window.innerWidth < 1024) {
    setPromptCollapsed(true);
  }

  await acquireWakeLock();
  startBackgroundAudioKeepAlive();

  const executeLoop = async () => {
    try {
      for (let idx = state.nextStepIndex; idx < PIPELINE_STEPS.length; idx++) {
        const step = PIPELINE_STEPS[idx];

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
      state.freezeWakeResolver = null;
      state.abortController = null;
      releaseWakeLock();
      stopBackgroundAudioKeepAlive();
      updateProgressUI(0, false);
      renderChecklist(0, false);
      updateControlButtons();
      saveWorkspaceSnapshot();
    }
  };

  if (navigator.locks && typeof navigator.locks.request === 'function') {
    await navigator.locks.request('wbs-active-pipeline', executeLoop);
  } else {
    await executeLoop();
  }
}

function triggerDownload(filename, content, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([content || ''], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
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
  state.apiKeys.forEach((k) => {
    if (k.status === 'rate_limited') {
      k.status = 'ready';
      k.resetAt = null;
    }
  });
  saveKeyPool();
  updateKeyPoolUI();
  renderKeysModalList();
  wakeFreezeIfReady();
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
  state.retryCapSec = Math.max(state.retryBaseSec, Number(el.retryCapInput.value) || 90);
  state.bgKeepAliveEnabled = Boolean(el.bgKeepAliveToggle.checked);
  state.osNotifEnabled = Boolean(el.osNotifToggle.checked);
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
  el.promptInput.value = '';
  saveWorkspaceSnapshot();
  updateEditorsAndBadges();
  updateProgressUI(0, false);
  renderChecklist(0, false);
  updateControlButtons();
  updateLiveNotificationBar({ mode: 'hidden' });
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
    { name: 'index.html', content: state.htmlCode, mime: 'text/html;charset=utf-8' },
    { name: 'style.css', content: state.cssCode, mime: 'text/css;charset=utf-8' },
    { name: 'script.js', content: state.jsCode, mime: 'application/javascript;charset=utf-8' },
    { name: 'notes.txt', content: state.notesText, mime: 'text/plain;charset=utf-8' }
  ];
  let count = 0;
  files.forEach((f, idx) => {
    if (f.content) {
      count += 1;
      setTimeout(() => triggerDownload(f.name, f.content, f.mime), idx * 180);
    }
  });
  if (count === 0) {
    showToast('No files generated yet.', 'warn');
  } else {
    showToast(`Downloading ${count} file(s)...`, 'success');
  }
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

  // Load settings
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
      el.modelBadge.textContent = `${state.model} • ${state.thinkingLevel}`;
    }
  } catch (_) {}

  // Load multi-key pool (and migrate legacy single key if present)
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

  try {
    const metaRaw = safeGet('wbs_completed_meta', '') || safeGet('wbs_completed', '{}');
    state.completedSteps = JSON.parse(metaRaw) || {};
  } catch (_) {
    state.completedSteps = {};
  }

  hydrateStepOutputsFromNotes();
  updateEditorsAndBadges();
  updateKeyPoolUI();
  updateKeepAliveBadges();
  updateProgressUI(0, false);
  renderChecklist(0, false);
  updateControlButtons();

  if (state.nextStepIndex > 0 && state.nextStepIndex < 50) {
    el.pipelineStatusText.textContent = `Saved session at Step ${state.nextStepIndex}/50 — ready to Resume`;
    updateLiveNotificationBar({
      mode: 'paused',
      title: `Saved Session at Step ${state.nextStepIndex}/50`,
      detail: 'Tap Resume to continue building.',
      stepNum: state.nextStepIndex
    });
  } else if (state.nextStepIndex >= 50) {
    el.pipelineStatusText.textContent = 'Previous 50-Step Build Loaded';
    updateLiveNotificationBar({
      mode: 'complete',
      title: 'Previous 50-Step Build Loaded',
      detail: 'Preview & downloads are ready.',
      stepNum: 50
    });
  }

  // Tick every 1s to keep key cooldown timers live in UI & wake frozen runs automatically
  setInterval(() => {
    const changed = refreshExpiredCooldowns();
    if (changed || !el.keysModal.classList.contains('hidden')) {
      updateKeyPoolUI();
    }
    if (changed) {
      wakeFreezeIfReady();
    }
  }, 1000);

  refreshIcons();
})();