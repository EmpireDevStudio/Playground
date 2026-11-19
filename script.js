/* ============================================================================
   ViralQuiz Studio Pro — 9:16 Mobile Quiz Video Generator
   Features:
   - 10 Bright & Shining Color Schemes (incl. 24K Liquid Gold & Rose Gold Luxe)
   - Individual Element Backlighting, Specular Sheen & Sparkle Physics
   - Broadcast-Mastered Smooth Human Voice (Compressor + Warmth EQ + Fade)
   - Mobile Social Safe-Zone Precision (1080x1920 @ 30fps, 8Mbps)
   ============================================================================ */

const CANVAS_W = 1080;
const CANVAS_H = 1920;

// --- 10 Bright & Shining Color Schemes ---
const SHINING_SCHEMES = [
  {
    id: "gold",
    name: "24K Liquid Gold",
    bgTop: "#2c1b00",
    bgMid: "#6e4700",
    bgBot: "#b87b00",
    aura: "#ffe97d",
    accent: "#ffd700",
    accentBright: "#fff4a3",
    accent2: "#ff9e00",
    cardBg: "rgba(36, 22, 2, 0.78)",
    backlight: "rgba(255, 215, 0, 0.55)",
    mascotBodyTop: "#fffbe6",
    mascotBodyBot: "#ffd86b",
    mascotAccent: "#ffae00",
  },
  {
    id: "rosegold",
    name: "Rose Gold Luxe",
    bgTop: "#36101f",
    bgMid: "#7a2a47",
    bgBot: "#c45b78",
    aura: "#ffc4d6",
    accent: "#ffb3c6",
    accentBright: "#ffe6ed",
    accent2: "#ff758f",
    cardBg: "rgba(46, 14, 28, 0.78)",
    backlight: "rgba(255, 166, 193, 0.58)",
    mascotBodyTop: "#fff5f8",
    mascotBodyBot: "#ffc2d1",
    mascotAccent: "#ff758f",
  },
  {
    id: "diamond",
    name: "Diamond Prism",
    bgTop: "#06253b",
    bgMid: "#0d5c85",
    bgBot: "#1aa3d9",
    aura: "#b8f5ff",
    accent: "#5ce1e6",
    accentBright: "#e0ffff",
    accent2: "#38b6ff",
    cardBg: "rgba(7, 30, 51, 0.78)",
    backlight: "rgba(110, 243, 255, 0.58)",
    mascotBodyTop: "#ffffff",
    mascotBodyBot: "#bceeff",
    mascotAccent: "#00d4ff",
  },
  {
    id: "emerald",
    name: "Emerald Aurora",
    bgTop: "#04291b",
    bgMid: "#0a6140",
    bgBot: "#12a86e",
    aura: "#8effca",
    accent: "#2effa8",
    accentBright: "#c7ffe8",
    accent2: "#00e1d9",
    cardBg: "rgba(5, 36, 24, 0.78)",
    backlight: "rgba(46, 255, 168, 0.55)",
    mascotBodyTop: "#f2fff9",
    mascotBodyBot: "#a6ffd9",
    mascotAccent: "#00e68a",
  },
  {
    id: "sunset",
    name: "Cyber Sunset",
    bgTop: "#36092e",
    bgMid: "#871b52",
    bgBot: "#e35d3b",
    aura: "#ffbe76",
    accent: "#ff9f43",
    accentBright: "#ffeaa7",
    accent2: "#ff4ecd",
    cardBg: "rgba(44, 10, 36, 0.78)",
    backlight: "rgba(255, 136, 86, 0.58)",
    mascotBodyTop: "#fff7f0",
    mascotBodyBot: "#ffcaa6",
    mascotAccent: "#ff5e99",
  },
  {
    id: "sapphire",
    name: "Electric Sapphire",
    bgTop: "#081240",
    bgMid: "#132e94",
    bgBot: "#2557e8",
    aura: "#8cb8ff",
    accent: "#4da6ff",
    accentBright: "#d6ebff",
    accent2: "#00f0ff",
    cardBg: "rgba(10, 20, 64, 0.78)",
    backlight: "rgba(77, 166, 255, 0.6)",
    mascotBodyTop: "#f5f9ff",
    mascotBodyBot: "#b3d4ff",
    mascotAccent: "#298dff",
  },
  {
    id: "amethyst",
    name: "Royal Amethyst",
    bgTop: "#200842",
    bgMid: "#4d1796",
    bgBot: "#8a2be2",
    aura: "#e3b5ff",
    accent: "#d580ff",
    accentBright: "#f5dbff",
    accent2: "#ff6ec7",
    cardBg: "rgba(31, 9, 64, 0.78)",
    backlight: "rgba(213, 128, 255, 0.58)",
    mascotBodyTop: "#fcf5ff",
    mascotBodyBot: "#e0b8ff",
    mascotAccent: "#c44dff",
  },
  {
    id: "ruby",
    name: "Ruby Starlight",
    bgTop: "#380512",
    bgMid: "#8a0e2b",
    bgBot: "#d9214f",
    aura: "#ff99b2",
    accent: "#ff4d79",
    accentBright: "#ffd1dc",
    accent2: "#ffbe0b",
    cardBg: "rgba(51, 7, 18, 0.78)",
    backlight: "rgba(255, 77, 121, 0.58)",
    mascotBodyTop: "#fff5f7",
    mascotBodyBot: "#ffb8c9",
    mascotAccent: "#ff2e63",
  },
  {
    id: "citrus",
    name: "Solar Citrus",
    bgTop: "#292102",
    bgMid: "#665805",
    bgBot: "#a89d08",
    aura: "#f5ff7d",
    accent: "#d4ff00",
    accentBright: "#f9ffd1",
    accent2: "#ff9f1c",
    cardBg: "rgba(38, 32, 4, 0.78)",
    backlight: "rgba(212, 255, 0, 0.52)",
    mascotBodyTop: "#fefff2",
    mascotBodyBot: "#edff9c",
    mascotAccent: "#c8ff00",
  },
  {
    id: "pearl",
    name: "Holographic Pearl",
    bgTop: "#131c42",
    bgMid: "#3c3b8c",
    bgBot: "#9656a1",
    aura: "#b8fff9",
    accent: "#70f8ff",
    accentBright: "#ffffff",
    accent2: "#ff9ce3",
    cardBg: "rgba(22, 26, 66, 0.76)",
    backlight: "rgba(150, 240, 255, 0.58)",
    mascotBodyTop: "#ffffff",
    mascotBodyBot: "#dcd9ff",
    mascotAccent: "#ff85e0",
  },
];

// --- Category Motif Resolver (Column C) ---
function resolveCategoryMeta(categoryStr) {
  const raw = (categoryStr || "General").trim();
  const c = raw.toLowerCase();
  if (/(space|astro|planet|cosmos|galaxy|star|universe)/.test(c))
    return { badge: "🪐", motif: "space", displayName: raw.toUpperCase() };
  if (/(science|bio|chem|physic|atom|body|medical)/.test(c))
    return { badge: "🧬", motif: "science", displayName: raw.toUpperCase() };
  if (/(history|ancient|war|empire|king|century)/.test(c))
    return { badge: "🏛️", motif: "history", displayName: raw.toUpperCase() };
  if (/(geo|country|capital|world|earth|ocean|city|map)/.test(c))
    return { badge: "🌍", motif: "geo", displayName: raw.toUpperCase() };
  if (/(movie|film|pop|music|tv|celebrity|disney|marvel)/.test(c))
    return { badge: "🎬", motif: "movies", displayName: raw.toUpperCase() };
  if (/(animal|nature|wildlife|ocean|plant|dog|cat|bird)/.test(c))
    return { badge: "🦁", motif: "nature", displayName: raw.toUpperCase() };
  if (/(tech|code|game|gaming|ai|computer|cyber)/.test(c))
    return { badge: "⚡", motif: "tech", displayName: raw.toUpperCase() };
  if (/(food|cook|fruit|drink|cuisine|kitchen)/.test(c))
    return { badge: "🍕", motif: "bokeh", displayName: raw.toUpperCase() };
  if (/(sport|football|soccer|nba|olympic|athlete)/.test(c))
    return { badge: "🏆", motif: "bokeh", displayName: raw.toUpperCase() };
  return { badge: "🧠", motif: "bokeh", displayName: raw.toUpperCase() };
}

function getSchemeForVideo(videoIdx) {
  const mode = els.colorSchemeMode.value;
  if (mode === "auto") {
    return SHINING_SCHEMES[videoIdx % SHINING_SCHEMES.length];
  }
  return SHINING_SCHEMES.find((s) => s.id === mode) || SHINING_SCHEMES[0];
}

// --- Voice Catalogs ---
const STREAMELEMENTS_VOICES = [
  { id: "Brian", label: "Brian (Warm British Male)" },
  { id: "Joanna", label: "Joanna (Silky US Female)" },
  { id: "Matthew", label: "Matthew (Smooth US Male)" },
  { id: "Amy", label: "Amy (Bright UK Female)" },
  { id: "Joey", label: "Joey (Energetic US Male)" },
  { id: "Salli", label: "Salli (Friendly US Female)" },
  { id: "Russell", label: "Russell (Confident AU Male)" },
];

const ELEVENLABS_VOICES = [
  { id: "pNInz6obpgDQGcFmaJgB", label: "Adam (Studio Deep Male)" },
  { id: "21m00Tcm4TlvDq8ikWAM", label: "Rachel (Silky Narrator)" },
  { id: "ErXwobaYiN019PkySvjV", label: "Antoni (Warm Conversational)" },
  { id: "EXAVITQu4vr4xnSDxMaL", label: "Bella (Bright Expressive)" },
  { id: "TxGEqnHWrfWFTfGW9XjX", label: "Josh (Modern Social)" },
];

// --- Sample 50-Question CSV ---
const SAMPLE_CSV = `Question,Answer,Category
What planet is known as the Red Planet?,Mars,Space
Which planet has the most moons in our solar system?,Saturn,Space
What is the name of the galaxy we live in?,Milky Way,Space
How long does light from the Sun take to reach Earth?,8 Minutes,Space
What is the hottest planet in our solar system?,Venus,Space
Which force keeps planets in orbit around the Sun?,Gravity,Space
What was the first artificial satellite launched into space?,Sputnik 1,Space
Which planet rotates completely on its side?,Uranus,Space
What is the largest moon of Saturn?,Titan,Space
In what year did humans first walk on the Moon?,1969,Space
What is the chemical symbol for Gold?,Au,Science
How many bones are in the adult human body?,206,Science
What gas do plants absorb from the atmosphere?,Carbon Dioxide,Science
What is known as the powerhouse of the cell?,Mitochondria,Science
At what temperature are Celsius and Fahrenheit equal?,-40 Degrees,Science
Which element has the atomic number 1?,Hydrogen,Science
What is the hardest natural substance on Earth?,Diamond,Science
What blood type is known as the universal donor?,O Negative,Science
What planet's gravity is roughly one-sixth of Earth's?,The Moon,Science
What part of the human eye controls how much light enters?,Iris,Science
In which year did the Titanic sink?,1912,History
Who was the first President of the United States?,George Washington,History
Which ancient civilization built Machu Picchu?,The Incas,History
Who painted the Mona Lisa?,Leonardo da Vinci,History
Which famous wall fell in November 1989?,Berlin Wall,History
Who was the first woman to win a Nobel Prize?,Marie Curie,History
In which country did the Renaissance begin?,Italy,History
What ship carried the Pilgrims to North America in 1620?,Mayflower,History
Who was the last active ruler of Ptolemaic Egypt?,Cleopatra,History
In what year did World War II end?,1945,History
What is the largest ocean on Earth?,Pacific Ocean,Geography
What is the capital city of Japan?,Tokyo,Geography
Which river is the longest in South America?,Amazon River,Geography
Which country has the largest population in the world?,India,Geography
What is the smallest country in the world by area?,Vatican City,Geography
On which continent is the Sahara Desert located?,Africa,Geography
What is the capital city of Australia?,Canberra,Geography
Which mountain is the tallest above sea level?,Mount Everest,Geography
How many continents are there on Earth?,Seven,Geography
Which country is known as the Land of Fire and Ice?,Iceland,Geography
How many hearts does an octopus have?,Three,Animals & Nature
What is the fastest land animal in the world?,Cheetah,Animals & Nature
Which mammal is capable of true sustained flight?,Bat,Animals & Nature
What is the largest mammal ever to live on Earth?,Blue Whale,Animals & Nature
Which bird can fly backward?,Hummingbird,Animals & Nature
What is a group of lions called?,Pride,Animals & Nature
Which animal has the longest lifespan among vertebrates?,Greenland Shark,Animals & Nature
What is the only continent with no native reptiles or snakes?,Antarctica,Animals & Nature
Which sea creature regrows lost arms?,Starfish,Animals & Nature
What color is a polar bear's skin underneath its fur?,Black,Animals & Nature`;

// --- DOM Elements ---
const els = {
  csvInput: document.getElementById("csvInput"),
  dropzone: document.getElementById("dropzone"),
  fileStatus: document.getElementById("fileStatus"),
  dataStats: document.getElementById("dataStats"),
  loadSampleBtn: document.getElementById("loadSampleBtn"),
  downloadTemplateBtn: document.getElementById("downloadTemplateBtn"),
  voiceProvider: document.getElementById("voiceProvider"),
  voiceSelect: document.getElementById("voiceSelect"),
  voiceSpeed: document.getElementById("voiceSpeed"),
  testVoiceBtn: document.getElementById("testVoiceBtn"),
  elevenLabsKeyRow: document.getElementById("elevenLabsKeyRow"),
  elevenLabsKey: document.getElementById("elevenLabsKey"),
  readAnswersAloud: document.getElementById("readAnswersAloud"),
  enableSFX: document.getElementById("enableSFX"),
  enableMusicPad: document.getElementById("enableMusicPad"),
  colorSchemeMode: document.getElementById("colorSchemeMode"),
  schemeSwatches: document.getElementById("schemeSwatches"),
  questionsPerVideo: document.getElementById("questionsPerVideo"),
  countdownSeconds: document.getElementById("countdownSeconds"),
  batchMode: document.getElementById("batchMode"),
  remainderMode: document.getElementById("remainderMode"),
  hookTemplate: document.getElementById("hookTemplate"),
  generateBtn: document.getElementById("generateBtn"),
  videoCount: document.getElementById("videoCount"),
  videoList: document.getElementById("videoList"),
  exportAllBtn: document.getElementById("exportAllBtn"),
  activeCategoryBadge: document.getElementById("activeCategoryBadge"),
  activeVideoTitle: document.getElementById("activeVideoTitle"),
  playPauseBtn: document.getElementById("playPauseBtn"),
  restartBtn: document.getElementById("restartBtn"),
  exportSingleBtn: document.getElementById("exportSingleBtn"),
  quizCanvas: document.getElementById("quizCanvas"),
  safeZoneOverlay: document.getElementById("safeZoneOverlay"),
  showSafeZones: document.getElementById("showSafeZones"),
  timeDisplay: document.getElementById("timeDisplay"),
  renderStatus: document.getElementById("renderStatus"),
  timelineProgress: document.getElementById("timelineProgress"),
};

const ctx = els.quizCanvas.getContext("2d");

// --- State ---
const state = {
  rows: [],
  videos: [],
  activeVideoIdx: -1,
  isPlaying: false,
  isExporting: false,
  isFetchingVoices: false,
  currentTime: 0,
  lastFrameTime: 0,
  rafId: null,
  lastCueKey: "",
  lastTickSecond: -1,
  lastAmbientBeat: -1,
  particles: [],
  sparkles: [],
  burstParticles: [],
  shockwaves: [],
  flyingOrb: null,
  voiceCache: new Map(),
  activeVoiceSource: null,
  activeVoiceBuffer: null,
  activeVoiceStartTime: 0,
  activeVoiceRate: 1.0,
};

// --- Broadcast-Mastered Audio Engine (Warm EQ + Compressor + Click-Free Fades) ---
const AudioMaster = {
  ctx: null,
  dest: null,
  voiceBus: null,
  musicBus: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.dest = this.ctx.createMediaStreamDestination();

      // Master Limiter/Compressor
      const masterComp = this.ctx.createDynamicsCompressor();
      masterComp.threshold.value = -10;
      masterComp.knee.value = 18;
      masterComp.ratio.value = 4;
      masterComp.attack.value = 0.004;
      masterComp.release.value = 0.15;
      masterComp.connect(this.ctx.destination);
      masterComp.connect(this.dest);

      // Smooth Vocal Mastering Chain (Warmth + De-ess + Smooth Compression)
      const warmLow = this.ctx.createBiquadFilter();
      warmLow.type = "lowshelf";
      warmLow.frequency.value = 180;
      warmLow.gain.value = 3.2;

      const silkyHigh = this.ctx.createBiquadFilter();
      silkyHigh.type = "lowpass";
      silkyHigh.frequency.value = 9800; // Softens harsh digital sibilance

      const vocalComp = this.ctx.createDynamicsCompressor();
      vocalComp.threshold.value = -18;
      vocalComp.knee.value = 24;
      vocalComp.ratio.value = 3.2;
      vocalComp.attack.value = 0.008;
      vocalComp.release.value = 0.22;

      this.voiceBus = this.ctx.createGain();
      this.voiceBus.gain.value = 1.15;
      this.voiceBus.connect(warmLow);
      warmLow.connect(silkyHigh);
      silkyHigh.connect(vocalComp);
      vocalComp.connect(masterComp);

      // Soft Ambient & SFX Bus
      this.musicBus = this.ctx.createGain();
      this.musicBus.gain.value = 0.85;
      this.musicBus.connect(masterComp);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  },

  playVoiceBuffer(buffer) {
    this.stopVoiceBuffer();
    if (!buffer) return;
    this.init();

    const rate = Number(els.voiceSpeed.value) || 1.0;
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = rate;

    // Micro fade-in/out to eliminate clicks & keep speech velvety
    const env = this.ctx.createGain();
    const now = this.ctx.currentTime;
    const dur = buffer.duration / rate;
    env.gain.setValueAtTime(0.001, now);
    env.gain.linearRampToValueAtTime(1.0, now + 0.02);
    env.gain.setValueAtTime(1.0, Math.max(now + 0.025, now + dur - 0.03));
    env.gain.linearRampToValueAtTime(0.001, now + dur);

    src.connect(env);
    env.connect(this.voiceBus);
    src.start(now);

    state.activeVoiceSource = src;
    state.activeVoiceBuffer = buffer;
    state.activeVoiceStartTime = state.currentTime;
    state.activeVoiceRate = rate;

    src.onended = () => {
      if (state.activeVoiceSource === src) {
        state.activeVoiceSource = null;
        state.activeVoiceBuffer = null;
      }
    };
  },

  stopVoiceBuffer() {
    if (state.activeVoiceSource) {
      try {
        state.activeVoiceSource.stop();
      } catch (_) {}
      state.activeVoiceSource = null;
    }
    state.activeVoiceBuffer = null;
  },

  playSoftPadNote(step) {
    if (!els.enableMusicPad.checked) return;
    this.init();
    const scale = [261.63, 329.63, 392.0, 493.88, 523.25, 392.0]; // Cmaj9 dreamy marimba
    const freq = scale[step % scale.length];
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.032, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0008, t + 0.55);

    osc.connect(gain);
    gain.connect(this.musicBus);
    osc.start(t);
    osc.stop(t + 0.58);
  },

  playPop(freq = 520) {
    if (!els.enableSFX.checked) return;
    this.init();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, t + 0.09);
    gain.gain.setValueAtTime(0.14, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(gain);
    gain.connect(this.musicBus);
    osc.start(t);
    osc.stop(t + 0.13);
  },

  playTick(isFinal = false) {
    if (!els.enableSFX.checked) return;
    this.init();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(isFinal ? 1046.5 : 783.99, t);
    osc.frequency.exponentialRampToValueAtTime(340, t + 0.07);
    gain.gain.setValueAtTime(0.13, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(gain);
    gain.connect(this.musicBus);
    osc.start(t);
    osc.stop(t + 0.09);
  },

  playRevealChime() {
    if (!els.enableSFX.checked) return;
    this.init();
    const t = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // Bright Cmaj7 sparkle
    notes.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, t + idx * 0.04);
      gain.gain.setValueAtTime(0.001, t + idx * 0.04);
      gain.gain.linearRampToValueAtTime(0.095, t + idx * 0.04 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.04 + 0.36);
      osc.connect(gain);
      gain.connect(this.musicBus);
      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.38);
    });
  },

  playWhoosh() {
    if (!els.enableSFX.checked) return;
    this.init();
    const t = this.ctx.currentTime;
    const len = Math.floor(this.ctx.sampleRate * 0.25);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / len) * Math.PI);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(400, t);
    filter.frequency.exponentialRampToValueAtTime(1900, t + 0.22);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.11, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicBus);
    noise.start(t);
  },
};

// --- Voice Fetcher & Smooth Text Normalizer ---
function normalizeSpeechText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/&/g, " and ")
    .replace(/(\d+)\/(\d+)/g, "$1 out of $2")
    .trim();
}

function getBrowserNaturalVoices() {
  if (!("speechSynthesis" in window)) return [];
  const all = window.speechSynthesis.getVoices() || [];
  return all
    .filter((v) => v.lang.startsWith("en"))
    .sort((a, b) => {
      const score = (v) =>
        (v.name.includes("Natural") ? 10 : 0) +
        (v.name.includes("Online") ? 8 : 0) +
        (v.name.includes("Google") ? 6 : 0) +
        (v.name.includes("Samantha") || v.name.includes("Daniel") ? 4 : 0);
      return score(b) - score(a);
    });
}

function populateVoiceSelect() {
  const provider = els.voiceProvider.value;
  els.voiceSelect.innerHTML = "";
  els.elevenLabsKeyRow.classList.toggle("hidden", provider !== "elevenlabs");

  if (provider === "streamelements") {
    STREAMELEMENTS_VOICES.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.label;
      els.voiceSelect.appendChild(opt);
    });
  } else if (provider === "elevenlabs") {
    ELEVENLABS_VOICES.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.label;
      els.voiceSelect.appendChild(opt);
    });
  } else {
    const voices = getBrowserNaturalVoices();
    if (voices.length === 0) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = "Default Browser Voice";
      els.voiceSelect.appendChild(opt);
    } else {
      voices.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v.name;
        opt.textContent = v.name;
        els.voiceSelect.appendChild(opt);
      });
    }
  }
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    if (els.voiceProvider.value === "browser") populateVoiceSelect();
  };
}

async function fetchHumanVoiceBuffer(rawText) {
  const text = normalizeSpeechText(rawText);
  const provider = els.voiceProvider.value;
  const voiceId = els.voiceSelect.value;
  if (provider === "browser" || !text) return null;

  const cacheKey = `${provider}:${voiceId}:${text}`;
  if (state.voiceCache.has(cacheKey)) return state.voiceCache.get(cacheKey);

  AudioMaster.init();
  let arrayBuffer = null;

  if (provider === "streamelements") {
    const url = `https://api.streamelements.com/kappa/v2/speech?voice=${encodeURIComponent(
      voiceId || "Brian"
    )}&text=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Voice API HTTP ${res.status}`);
    arrayBuffer = await res.arrayBuffer();
  } else if (provider === "elevenlabs") {
    const apiKey = els.elevenLabsKey.value.trim();
    if (!apiKey) throw new Error("Missing ElevenLabs API Key");
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_turbo_v2_5",
          voice_settings: {
            stability: 0.62,
            similarity_boost: 0.82,
            style: 0.22,
            use_speaker_boost: true,
          },
        }),
      }
    );
    if (!res.ok) throw new Error(`ElevenLabs HTTP ${res.status}`);
    arrayBuffer = await res.arrayBuffer();
  }

  if (!arrayBuffer) return null;
  const audioBuffer = await AudioMaster.ctx.decodeAudioData(arrayBuffer);
  state.voiceCache.set(cacheKey, audioBuffer);
  return audioBuffer;
}

function speakBrowserFallback(text) {
  if (!("speechSynthesis" in window) || state.isExporting) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(normalizeSpeechText(text));
  const chosenName = els.voiceSelect.value;
  const voices = getBrowserNaturalVoices();
  const match = voices.find((v) => v.name === chosenName) || voices[0];
  if (match) utter.voice = match;
  utter.rate = Number(els.voiceSpeed.value) || 1.0;
  utter.pitch = 1.01;
  window.speechSynthesis.speak(utter);
}

function stopAllSpeech() {
  AudioMaster.stopVoiceBuffer();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function getSegmentSpeechText(seg, vid) {
  if (seg.type === "HOOK") {
    return (els.hookTemplate.value || "Can you score {N} out of {N}?")
      .replace(/\{N\}\/\{N\}/g, `${vid.questions.length} out of ${vid.questions.length}`)
      .replaceAll("{N}", String(vid.questions.length));
  }
  if (seg.type === "READ") {
    return seg.item.question;
  }
  if (seg.type === "REVEAL" && els.readAnswersAloud.checked) {
    return seg.item.answer;
  }
  if (seg.type === "OUTRO") {
    return "How many did you get? Comment your score below!";
  }
  return "";
}

async function prepareVideoVoices(vid) {
  if (els.voiceProvider.value === "browser") return;
  state.isFetchingVoices = true;

  const speechSegments = vid.segments.filter(
    (s) => getSegmentSpeechText(s, vid).length > 0
  );

  let done = 0;
  let failed = 0;
  const rate = Number(els.voiceSpeed.value) || 1.0;

  for (const seg of speechSegments) {
    const line = getSegmentSpeechText(seg, vid);
    done++;
    els.renderStatus.textContent = `🎙️ Mastering smooth voice (${done}/${speechSegments.length})...`;
    try {
      seg.voiceBuffer = await fetchHumanVoiceBuffer(line);
      await new Promise((r) => setTimeout(r, 130));
    } catch (err) {
      console.warn("Voice fetch warning:", err.message);
      seg.voiceBuffer = null;
      failed++;
    }
  }

  let cursor = 0;
  for (const seg of vid.segments) {
    const spokenDur = seg.voiceBuffer ? seg.voiceBuffer.duration / rate : 0;
    if (seg.type === "HOOK") {
      seg.duration = spokenDur ? Math.max(2.1, spokenDur + 0.35) : 2.1;
    } else if (seg.type === "READ") {
      seg.duration = spokenDur ? Math.max(1.8, spokenDur + 0.32) : seg.duration;
    } else if (seg.type === "REVEAL") {
      seg.duration = spokenDur ? Math.max(1.55, spokenDur + 0.48) : 1.6;
    } else if (seg.type === "OUTRO") {
      seg.duration = spokenDur ? Math.max(2.4, spokenDur + 0.45) : 2.4;
    }
    seg.start = cursor;
    seg.end = cursor + seg.duration;
    cursor = seg.end;
  }
  vid.totalDuration = cursor;
  state.isFetchingVoices = false;

  els.renderStatus.textContent =
    failed > 0 && failed === speechSegments.length
      ? "⚠ Cloud voice blocked — using Browser Neural fallback."
      : "✨ Smooth voice mastered & synced!";
  updateTimelineUI();
}

// --- CSV Parser ---
function parseCSV(text) {
  const clean = text.replace(/^\uFEFF/, "");
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    const next = clean[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ",") {
        row.push(cell.trim());
        cell = "";
      } else if (ch === "\r" || ch === "\n") {
        if (ch === "\r" && next === "\n") i++;
        row.push(cell.trim());
        if (row.some((v) => v.length > 0)) rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += ch;
      }
    }
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    if (row.some((v) => v.length > 0)) rows.push(row);
  }
  if (rows.length === 0) return [];

  const first = rows[0].map((s) => s.toLowerCase());
  const startIdx =
    first[0]?.includes("question") || first[1]?.includes("answer") ? 1 : 0;

  const parsed = [];
  for (let i = startIdx; i < rows.length; i++) {
    const q = rows[i][0] || "";
    const a = rows[i][1] || "";
    const cat = rows[i][2] || "General";
    if (q && a) parsed.push({ question: q, answer: a, category: cat });
  }
  return parsed;
}

// --- Video Queue Builder ---
function buildVideoTimeline(questions, index) {
  const countdownSec = Math.max(1, Number(els.countdownSeconds.value) || 3);
  const hookDuration = 2.2;
  const outroDuration = 2.4;

  const counts = {};
  questions.forEach((q) => {
    counts[q.category] = (counts[q.category] || 0) + 1;
  });
  const dominantCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

  const segments = [];
  let cursor = 0;

  segments.push({
    type: "HOOK",
    start: cursor,
    end: cursor + hookDuration,
    duration: hookDuration,
    category: dominantCategory,
    voiceBuffer: null,
  });
  cursor += hookDuration;

  questions.forEach((item, qIdx) => {
    const words = item.question.split(/\s+/).length;
    const readDur = Math.min(4.2, Math.max(2.2, 1.1 + words * 0.24));
    const revealDur = 1.6;

    segments.push({
      type: "READ",
      qIdx,
      item,
      start: cursor,
      end: cursor + readDur,
      duration: readDur,
      voiceBuffer: null,
    });
    cursor += readDur;

    segments.push({
      type: "COUNTDOWN",
      qIdx,
      item,
      start: cursor,
      end: cursor + countdownSec,
      duration: countdownSec,
      voiceBuffer: null,
    });
    cursor += countdownSec;

    segments.push({
      type: "REVEAL",
      qIdx,
      item,
      start: cursor,
      end: cursor + revealDur,
      duration: revealDur,
      voiceBuffer: null,
    });
    cursor += revealDur;
  });

  segments.push({
    type: "OUTRO",
    start: cursor,
    end: cursor + outroDuration,
    duration: outroDuration,
    category: dominantCategory,
    voiceBuffer: null,
  });
  cursor += outroDuration;

  return {
    id: index + 1,
    category: dominantCategory,
    questions,
    segments,
    totalDuration: cursor,
  };
}

function generateVideos() {
  if (state.rows.length === 0) return;

  const perVideo = Math.max(1, Math.min(15, Number(els.questionsPerVideo.value) || 10));
  const mode = els.batchMode.value;
  const keepRemainder = els.remainderMode.value === "include";
  const chunks = [];

  if (mode === "byCategory") {
    const groups = new Map();
    state.rows.forEach((r) => {
      const key = r.category.trim() || "General";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(r);
    });
    groups.forEach((groupRows) => {
      for (let i = 0; i < groupRows.length; i += perVideo) {
        const slice = groupRows.slice(i, i + perVideo);
        if (slice.length === perVideo || keepRemainder) chunks.push(slice);
      }
    });
  } else {
    for (let i = 0; i < state.rows.length; i += perVideo) {
      const slice = state.rows.slice(i, i + perVideo);
      if (slice.length === perVideo || keepRemainder) chunks.push(slice);
    }
  }

  state.videos = chunks.map((qList, idx) => buildVideoTimeline(qList, idx));
  renderVideoList();

  if (state.videos.length > 0) {
    selectVideo(0);
    els.exportAllBtn.disabled = false;
  } else {
    els.exportAllBtn.disabled = true;
  }
}

function renderVideoList() {
  els.videoCount.textContent = state.videos.length;
  if (state.videos.length === 0) {
    els.videoList.innerHTML = `<div class="empty-state">Not enough rows for current settings.</div>`;
    return;
  }

  els.videoList.innerHTML = "";
  state.videos.forEach((vid, idx) => {
    const scheme = getSchemeForVideo(idx);
    const catMeta = resolveCategoryMeta(vid.category);
    const el = document.createElement("div");
    el.className = `video-item ${idx === state.activeVideoIdx ? "active" : ""}`;
    el.innerHTML = `
      <div class="video-item-info">
        <strong>Video #${vid.id} (${vid.questions.length} Qs)</strong>
        <span>~${formatTime(vid.totalDuration)} • ${scheme.name}</span>
      </div>
      <span class="video-pill" style="background:${scheme.accent}">${catMeta.badge} ${vid.category}</span>
    `;
    el.addEventListener("click", () => selectVideo(idx));
    els.videoList.appendChild(el);
  });
}

function selectVideo(idx) {
  pausePlayback();
  state.activeVideoIdx = idx;
  state.currentTime = 0;
  state.lastCueKey = "";
  state.lastTickSecond = -1;
  state.lastAmbientBeat = -1;
  state.burstParticles = [];
  state.shockwaves = [];
  state.flyingOrb = null;

  const vid = state.videos[idx];
  const catMeta = resolveCategoryMeta(vid.category);
  const scheme = getSchemeForVideo(idx);
  initAmbientFX();

  els.activeCategoryBadge.textContent = `${catMeta.badge} ${vid.category}`;
  els.activeVideoTitle.textContent = `Video #${vid.id} • ${scheme.name}`;
  els.playPauseBtn.disabled = false;
  els.restartBtn.disabled = false;
  els.exportSingleBtn.disabled = false;

  renderVideoList();
  drawFrame(0);
  updateTimelineUI();
}

// --- Particle, Sparkle & Shockwave FX ---
function initAmbientFX() {
  state.particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * CANVAS_W,
    y: Math.random() * CANVAS_H,
    size: 4 + Math.random() * 14,
    speedY: 20 + Math.random() * 48,
    alpha: 0.14 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
  }));
  state.sparkles = Array.from({ length: 24 }, () => ({
    x: Math.random() * CANVAS_W,
    y: Math.random() * CANVAS_H,
    size: 8 + Math.random() * 16,
    speed: 1.8 + Math.random() * 3,
    phase: Math.random() * Math.PI * 2,
  }));
}

function spawnBurst(x, y, color, color2) {
  for (let i = 0; i < 28; i++) {
    const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.25;
    const speed = 180 + Math.random() * 380;
    state.burstParticles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 5 + Math.random() * 8,
      color: i % 2 === 0 ? color : color2,
      life: 0.85,
      maxLife: 0.85,
    });
  }
}

function spawnShockwave(x, y, color) {
  state.shockwaves.push({ x, y, radius: 60, maxRadius: 220, color, life: 0.5, maxLife: 0.5 });
}

// --- Math, Text & Backlight Helpers ---
function easeOutBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.roundRect(x, y, w, h, r);
  c.closePath();
}

function drawBacklight(cx, cy, radius, color) {
  const g = ctx.createRadialGradient(cx, cy, radius * 0.08, cx, cy, radius);
  g.addColorStop(0, color);
  g.addColorStop(1, "transparent");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawDiamondStar(cx, cy, r, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.quadraticCurveTo(cx, cy, cx + r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy + r);
  ctx.quadraticCurveTo(cx, cy, cx - r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy - r);
  ctx.fill();
  ctx.restore();
}

function wrapTextLines(c, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (c.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function getCurrentVoiceAmplitude(timeSec) {
  const buf = state.activeVoiceBuffer;
  if (!buf) return 0;
  const elapsed = (timeSec - state.activeVoiceStartTime) * state.activeVoiceRate;
  if (elapsed < 0 || elapsed >= buf.duration) return 0;
  const data = buf.getChannelData(0);
  const startSample = Math.floor(elapsed * buf.sampleRate);
  const endSample = Math.min(data.length, startSample + 320);
  let sum = 0;
  for (let i = startSample; i < endSample; i++) sum += Math.abs(data[i]);
  return Math.min(1, (sum / Math.max(1, endSample - startSample)) * 5.6);
}

// --- Radiant Background & Category Motifs ---
function drawRadiantBackground(scheme, catMeta, t) {
  const grad = ctx.createLinearGradient(0, 0, CANVAS_W * 0.3, CANVAS_H);
  grad.addColorStop(0, scheme.bgTop);
  grad.addColorStop(0.5, scheme.bgMid);
  grad.addColorStop(1, scheme.bgBot);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // Sweeping Shining Light Rays
  ctx.save();
  ctx.translate(CANVAS_W * 0.5, -150);
  ctx.rotate(Math.sin(t * 0.4) * 0.14);
  for (let i = -2; i <= 2; i++) {
    const rayGrad = ctx.createLinearGradient(i * 220, 0, i * 320, 1900);
    rayGrad.addColorStop(0, scheme.accentBright + "22");
    rayGrad.addColorStop(1, "transparent");
    ctx.fillStyle = rayGrad;
    ctx.beginPath();
    ctx.moveTo(i * 190 - 60, 0);
    ctx.lineTo(i * 190 + 60, 0);
    ctx.lineTo(i * 360 + 200, 2100);
    ctx.lineTo(i * 360 - 200, 2100);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // Pulsing Luminous Aura
  drawBacklight(
    CANVAS_W * 0.72,
    CANVAS_H * 0.58 + Math.sin(t * 1.4) * 40,
    580,
    scheme.aura + "35"
  );

  // Category-Specific Animated Background Motifs
  ctx.save();
  if (catMeta.motif === "space") {
    ctx.strokeStyle = scheme.accentBright + "30";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(800, 460, 380, 110, -0.35 + Math.sin(t * 0.4) * 0.06, 0, Math.PI * 2);
    ctx.stroke();
  } else if (catMeta.motif === "science") {
    ctx.strokeStyle = scheme.accent + "28";
    ctx.lineWidth = 3;
    for (let i = 0; i < 3; i++) {
      ctx.save();
      ctx.translate(760, 1140);
      ctx.rotate(t * 0.5 + (i * Math.PI) / 3);
      ctx.beginPath();
      ctx.ellipse(0, 0, 290, 95, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  } else if (catMeta.motif === "tech") {
    ctx.strokeStyle = scheme.accent + "22";
    ctx.lineWidth = 2;
    const off = (t * 50) % 90;
    for (let x = 0; x < CANVAS_W; x += 90) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, CANVAS_H);
      ctx.stroke();
    }
    for (let y = off; y < CANVAS_H; y += 90) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(CANVAS_W, y);
      ctx.stroke();
    }
  }

  // Glowing Bokeh Orbs
  state.particles.forEach((p) => {
    const py = ((p.y - t * p.speedY) % CANVAS_H + CANVAS_H) % CANVAS_H;
    const px = p.x + Math.sin(t * 1.3 + p.phase) * 26;
    ctx.globalAlpha = p.alpha * (0.65 + 0.35 * Math.sin(t * 2.5 + p.phase));
    ctx.fillStyle = scheme.accentBright;
    ctx.beginPath();
    ctx.arc(px, py, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  // Twinkling 4-Point Shining Stars
  state.sparkles.forEach((sp) => {
    const pulse = Math.max(0, Math.sin(t * sp.speed + sp.phase));
    if (pulse > 0.1) {
      drawDiamondStar(sp.x, sp.y, sp.size * pulse, scheme.accentBright, pulse * 0.85);
    }
  });
}

// --- Expressive Animated Mascot with Backlighting ---
function drawMascot(x, y, scheme, mood, t, mouthAmp) {
  ctx.save();
  const hoverY = Math.sin(t * 3.8) * 16;
  const jumpY = mood === "celebrate" ? -Math.abs(Math.sin(t * 8.5)) * 26 : 0;
  const tilt =
    mood === "talk"
      ? Math.sin(t * 4.5) * 0.05
      : mood === "think"
      ? Math.sin(t * 2.2) * 0.08
      : 0;

  // Individual Element Backlighting behind Mascot
  drawBacklight(x, y + hoverY, 290, scheme.backlight);

  // Orbiting Energy Sparkle Orbs around Mascot
  for (let i = 0; i < 3; i++) {
    const ang = t * 2.2 + (i * Math.PI * 2) / 3;
    const ox = x + Math.cos(ang) * 175;
    const oy = y + hoverY + Math.sin(ang) * 55;
    drawDiamondStar(ox, oy, 13, scheme.accentBright, 0.9);
  }

  ctx.translate(x, y + hoverY + jumpY);
  ctx.rotate(tilt);

  // Floor Shadow
  ctx.fillStyle = "rgba(0,0,0,0.32)";
  ctx.beginPath();
  ctx.ellipse(0, 185 - (hoverY + jumpY) * 0.5, 92, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  // Glowing Antenna
  ctx.strokeStyle = scheme.accentBright;
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, -115);
  ctx.quadraticCurveTo(Math.sin(t * 6) * 16, -152, 0, -172);
  ctx.stroke();

  ctx.fillStyle = scheme.accent;
  ctx.shadowColor = scheme.accentBright;
  ctx.shadowBlur = 28;
  ctx.beginPath();
  ctx.arc(0, -178, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Floating Animated Hands
  const handWave = mood === "celebrate" ? Math.sin(t * 12) * 28 : Math.sin(t * 5) * 10;
  ctx.fillStyle = scheme.mascotBodyTop;
  ctx.shadowColor = scheme.accent;
  ctx.shadowBlur = 14;
  ctx.beginPath();
  ctx.arc(-138, 22 - handWave, 25, 0, Math.PI * 2);
  ctx.arc(138, 22 + (mood === "celebrate" ? -handWave : handWave), 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Metallic Shining Body with Rim Glow
  const bodyGrad = ctx.createLinearGradient(0, -120, 0, 130);
  bodyGrad.addColorStop(0, scheme.mascotBodyTop);
  bodyGrad.addColorStop(1, scheme.mascotBodyBot);
  ctx.fillStyle = bodyGrad;
  ctx.strokeStyle = scheme.accentBright;
  ctx.lineWidth = 4;
  ctx.shadowColor = scheme.backlight;
  ctx.shadowBlur = 26;
  roundRect(ctx, -114, -118, 228, 240, 96);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Glossy Belly Core
  ctx.fillStyle = scheme.mascotAccent;
  roundRect(ctx, -48, 72, 96, 26, 13);
  ctx.fill();

  // Visor Screen
  ctx.fillStyle = "#0b0f1e";
  roundRect(ctx, -86, -70, 172, 120, 48);
  ctx.fill();

  // Visor Top Specular Sheen
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  roundRect(ctx, -74, -62, 148, 34, 20);
  ctx.fill();

  // Expressive Eyes
  const blink = (t % 3.1) > 2.98;
  const eyeShiftX = mood === "think" ? Math.sin(t * 3.8) * 14 : 0;
  ctx.fillStyle = scheme.accentBright;
  ctx.strokeStyle = scheme.accentBright;
  ctx.lineWidth = 8;

  if (mood === "celebrate") {
    [-36, 36].forEach((ex) => {
      ctx.beginPath();
      ctx.arc(ex, -16, 18, Math.PI * 1.1, Math.PI * 1.9);
      ctx.stroke();
    });
  } else if (blink) {
    [-36, 36].forEach((ex) => {
      ctx.beginPath();
      ctx.moveTo(ex - 16, -20);
      ctx.lineTo(ex + 16, -20);
      ctx.stroke();
    });
  } else {
    [-36, 36].forEach((ex) => {
      ctx.beginPath();
      ctx.ellipse(ex + eyeShiftX, -22, 14, 21, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(ex + eyeShiftX - 4, -30, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = scheme.accentBright;
    });
  }

  // Real-Time Waveform Lip-Synced Mouth
  ctx.fillStyle = "#ffffff";
  if (mouthAmp > 0.03) {
    const mh = 7 + mouthAmp * 26;
    const mw = 28 + mouthAmp * 18;
    roundRect(ctx, -mw / 2, 16 - mh / 2, mw, mh, 10);
    ctx.fill();
  } else if (mood === "talk") {
    const mh = 6 + Math.abs(Math.sin(t * 20)) * 16;
    roundRect(ctx, -20, 15 - mh / 2, 40, mh, 10);
    ctx.fill();
  } else if (mood === "celebrate") {
    ctx.beginPath();
    ctx.arc(0, 12, 22, 0, Math.PI);
    ctx.fill();
  } else if (mood === "think") {
    ctx.beginPath();
    ctx.arc(12, 18, 8, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 10, 16, 0.2, Math.PI - 0.2);
    ctx.stroke();
  }

  // Floating "?" bubble while thinking
  if (mood === "think") {
    ctx.fillStyle = scheme.accentBright;
    ctx.font = "900 44px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("?", 126, -110 + Math.sin(t * 6) * 8);
  }

  ctx.restore();
}

// --- Left 1–10 Slots with Backlights & Glossy Reflections ---
function drawLeftSlots(video, activeQIdx, revealedUpTo, revealAnimProgress, scheme, t) {
  const count = video.questions.length;
  const startX = 46;
  const slotW = 478;
  const topY = 618;
  const maxHeight = 960;
  const gap = Math.max(10, Math.min(18, 140 / count));
  const slotH = Math.min(84, (maxHeight - gap * (count - 1)) / count);

  for (let i = 0; i < count; i++) {
    const y = topY + i * (slotH + gap);
    const isRevealed = i <= revealedUpTo;
    const isActive = i === activeQIdx;
    const isJustRevealed = i === revealedUpTo && revealAnimProgress < 1;

    ctx.save();

    // Individual Element Backlighting for Active or Revealed Slots
    if (isActive) {
      drawBacklight(startX + slotW / 2, y + slotH / 2, 230, scheme.accentBright + "44");
    } else if (isRevealed) {
      drawBacklight(startX + slotW / 2, y + slotH / 2, 180, scheme.backlight.replace(/[\d.]+\)$/, "0.26)"));
    }

    if (isJustRevealed) {
      const s = 1 + Math.sin(revealAnimProgress * Math.PI) * 0.09;
      ctx.translate(startX + slotW / 2, y + slotH / 2);
      ctx.scale(s, s);
      ctx.translate(-(startX + slotW / 2), -(y + slotH / 2));
    }

    // Card Fill + Glossy Metallic Border
    ctx.fillStyle = isRevealed
      ? scheme.cardBg
      : isActive
      ? "rgba(255, 255, 255, 0.22)"
      : "rgba(255, 255, 255, 0.09)";
    ctx.strokeStyle = isRevealed
      ? scheme.accent
      : isActive
      ? scheme.accentBright
      : "rgba(255, 255, 255, 0.24)";
    ctx.lineWidth = isActive || isRevealed ? 3.5 : 2;
    roundRect(ctx, startX, y, slotW, slotH, 18);
    ctx.fill();
    ctx.stroke();

    // Top-half glossy glass shine
    if (isRevealed || isActive) {
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRect(ctx, startX + 3, y + 3, slotW - 6, slotH * 0.45, 14);
      ctx.fill();
    }

    // Number Badge (1..10)
    const badgeSize = slotH - 16;
    const badgeGrad = ctx.createLinearGradient(startX + 8, y + 8, startX + 8, y + slotH - 8);
    if (isRevealed || isActive) {
      badgeGrad.addColorStop(0, scheme.accentBright);
      badgeGrad.addColorStop(1, scheme.accent);
      ctx.fillStyle = badgeGrad;
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.18)";
    }
    roundRect(ctx, startX + 8, y + 8, badgeSize, badgeSize, 13);
    ctx.fill();

    ctx.fillStyle = isRevealed || isActive ? "#0b0e17" : "#ffffff";
    ctx.font = `900 ${Math.round(badgeSize * 0.54)}px Inter, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(i + 1), startX + 8 + badgeSize / 2, y + slotH / 2 + 1);

    // Answer or Thinking State
    const textX = startX + badgeSize + 24;
    const maxTextW = slotW - badgeSize - 40;
    ctx.textAlign = "left";

    if (isRevealed) {
      const ans = video.questions[i].answer;
      let fontSize = Math.min(33, Math.round(slotH * 0.43));
      ctx.font = `800 ${fontSize}px Inter, sans-serif`;
      while (ctx.measureText(ans).width > maxTextW && fontSize > 17) {
        fontSize -= 2;
        ctx.font = `800 ${fontSize}px Inter, sans-serif`;
      }
      ctx.fillStyle = "#ffffff";
      ctx.fillText(ans, textX, y + slotH / 2 + 1, maxTextW);
    } else if (isActive) {
      const dots = ".".repeat(1 + (Math.floor(t * 4) % 3));
      ctx.fillStyle = scheme.accentBright;
      ctx.font = `800 26px Inter, sans-serif`;
      ctx.fillText(`THINKING${dots}`, textX, y + slotH / 2 + 1);
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.34)";
      ctx.font = `700 24px Inter, sans-serif`;
      ctx.fillText("• • • • •", textX, y + slotH / 2 + 1);
    }

    ctx.restore();
  }
}

// --- Main 60fps Frame Renderer ---
function drawFrame(timeSec) {
  const vid = state.videos[state.activeVideoIdx];
  if (!vid) return;

  let seg = vid.segments[vid.segments.length - 1];
  for (const s of vid.segments) {
    if (timeSec >= s.start && timeSec <= s.end) {
      seg = s;
      break;
    }
  }

  const segElapsed = Math.max(0, timeSec - seg.start);
  const segProgress = Math.min(1, segElapsed / seg.duration);
  const activeCat = seg.item ? seg.item.category : vid.category;
  const catMeta = resolveCategoryMeta(activeCat);
  const scheme = getSchemeForVideo(state.activeVideoIdx);

  // 1. Radiant Background
  drawRadiantBackground(scheme, catMeta, timeSec);

  // 2. Top Safe-Zone Category Pill & Progress Bar
  ctx.save();
  drawBacklight(CANVAS_W / 2, 130, 260, scheme.backlight.replace(/[\d.]+\)$/, "0.3)"));
  ctx.fillStyle = "rgba(0,0,0,0.42)";
  roundRect(ctx, 245, 96, 590, 62, 31);
  ctx.fill();
  ctx.strokeStyle = scheme.accentBright;
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 26px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`${catMeta.badge}  ${catMeta.displayName} QUIZ`, CANVAS_W / 2, 128);

  ctx.fillStyle = "rgba(255,255,255,0.2)";
  roundRect(ctx, 64, 54, CANVAS_W - 128, 10, 5);
  ctx.fill();
  const barGrad = ctx.createLinearGradient(64, 0, CANVAS_W - 64, 0);
  barGrad.addColorStop(0, scheme.accent);
  barGrad.addColorStop(1, scheme.accentBright);
  ctx.fillStyle = barGrad;
  roundRect(ctx, 64, 54, (CANVAS_W - 128) * (timeSec / vid.totalDuration), 10, 5);
  ctx.fill();
  ctx.restore();

  // Slot & Mascot States
  let activeQIdx = -1;
  let revealedUpTo = -1;
  let revealAnimProgress = 1;
  let mascotMood = "idle";

  if (seg.type === "HOOK") mascotMood = "celebrate";
  else if (seg.type === "READ") {
    activeQIdx = seg.qIdx;
    revealedUpTo = seg.qIdx - 1;
    mascotMood = "talk";
  } else if (seg.type === "COUNTDOWN") {
    activeQIdx = seg.qIdx;
    revealedUpTo = seg.qIdx - 1;
    mascotMood = "think";
  } else if (seg.type === "REVEAL") {
    activeQIdx = seg.qIdx;
    revealedUpTo = seg.qIdx;
    revealAnimProgress = segProgress;
    mascotMood = "celebrate";
  } else if (seg.type === "OUTRO") {
    revealedUpTo = vid.questions.length - 1;
    mascotMood = "celebrate";
  }

  // 3. Left Slots (1..10)
  drawLeftSlots(vid, activeQIdx, revealedUpTo, revealAnimProgress, scheme, timeSec);

  // 4. Mascot with Audio Lip-Sync
  const mouthAmp = getCurrentVoiceAmplitude(timeSec);
  drawMascot(740, 1140, scheme, mascotMood, timeSec, mouthAmp);

  // 5. Question Card / Hook / Outro with Individual Backlighting & Sheen
  if (seg.type === "HOOK" || seg.type === "OUTRO") {
    const scale =
      seg.type === "HOOK" ? easeOutBack(Math.min(1, segProgress * 2.2)) : 1;
    ctx.save();
    drawBacklight(CANVAS_W / 2, 370, 440, scheme.backlight);
    ctx.translate(CANVAS_W / 2, 370);
    ctx.scale(scale, scale);

    ctx.fillStyle = scheme.cardBg;
    ctx.strokeStyle = scheme.accentBright;
    ctx.lineWidth = 5;
    roundRect(ctx, -460, -165, 920, 330, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = scheme.accentBright;
    ctx.font = "900 56px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (seg.type === "HOOK") {
      const hookText = (els.hookTemplate.value || "CAN YOU SCORE {N}/{N}?")
        .replaceAll("{N}", String(vid.questions.length));
      ctx.fillText(hookText, 0, -42);
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 34px Inter, sans-serif";
      ctx.fillText(`Only ${els.countdownSeconds.value} seconds per question!`, 0, 56);
    } else {
      ctx.fillText("COMMENT YOUR SCORE! 👇", 0, -42);
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 34px Inter, sans-serif";
      ctx.fillText("Follow for Part 2 & daily quizzes 🔥", 0, 56);
    }
    ctx.restore();
  } else {
    const cardPop = seg.type === "READ" ? easeOutBack(Math.min(1, segProgress * 4)) : 1;
    ctx.save();
    drawBacklight(CANVAS_W / 2, 365, 450, scheme.backlight);
    ctx.translate(CANVAS_W / 2, 365);
    ctx.scale(cardPop, cardPop);

    ctx.fillStyle = scheme.cardBg;
    ctx.strokeStyle = seg.type === "REVEAL" ? scheme.accentBright : scheme.accent;
    ctx.lineWidth = 4.5;
    roundRect(ctx, -470, -165, 940, 330, 34);
    ctx.fill();
    ctx.stroke();

    // Sweeping Specular Sheen across Question Card
    ctx.save();
    roundRect(ctx, -470, -165, 940, 330, 34);
    ctx.clip();
    const sheenX = ((timeSec * 360) % 1600) - 800;
    const sheenGrad = ctx.createLinearGradient(sheenX, -165, sheenX + 220, 165);
    sheenGrad.addColorStop(0, "transparent");
    sheenGrad.addColorStop(0.5, "rgba(255,255,255,0.12)");
    sheenGrad.addColorStop(1, "transparent");
    ctx.fillStyle = sheenGrad;
    ctx.fillRect(-470, -165, 940, 330);
    ctx.restore();

    // Question Pill
    const pillGrad = ctx.createLinearGradient(-430, -135, -210, -89);
    pillGrad.addColorStop(0, scheme.accentBright);
    pillGrad.addColorStop(1, scheme.accent);
    ctx.fillStyle = pillGrad;
    roundRect(ctx, -430, -135, 224, 46, 23);
    ctx.fill();

    ctx.fillStyle = "#080b14";
    ctx.font = "900 24px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`QUESTION ${seg.qIdx + 1}`, -318, -111);

    // Bold Mobile-Optimized Question Text
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    let qFont = 46;
    ctx.font = `800 ${qFont}px Inter, sans-serif`;
    let lines = wrapTextLines(ctx, seg.item.question, 845);
    while (lines.length > 3 && qFont > 30) {
      qFont -= 4;
      ctx.font = `800 ${qFont}px Inter, sans-serif`;
      lines = wrapTextLines(ctx, seg.item.question, 845);
    }
    const lineH = qFont * 1.24;
    const startY = 22 - ((lines.length - 1) * lineH) / 2;
    lines.forEach((ln, idx) => ctx.fillText(ln, 0, startY + idx * lineH));
    ctx.restore();

    // Countdown Ring with Backlight & Shockwaves
    if (seg.type === "COUNTDOWN") {
      const remaining = Math.ceil(seg.duration - segElapsed);
      const frac = 1 - segProgress;

      ctx.save();
      drawBacklight(740, 775, 190, scheme.backlight);
      ctx.translate(740, 775);

      ctx.fillStyle = "rgba(0,0,0,0.52)";
      ctx.beginPath();
      ctx.arc(0, 0, 90, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.arc(0, 0, 78, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = remaining <= 1 ? scheme.accentBright : scheme.accent;
      ctx.shadowColor = scheme.accentBright;
      ctx.shadowBlur = 18;
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(0, 0, 78, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * frac);
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#ffffff";
      ctx.font = "900 74px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(remaining), 0, 4);
      ctx.restore();
    } else if (seg.type === "REVEAL") {
      const pop = easeOutBack(Math.min(1, segProgress * 3));
      ctx.save();
      drawBacklight(740, 775, 220, scheme.backlight);
      ctx.translate(740, 775);
      ctx.scale(pop, pop);

      const bGrad = ctx.createLinearGradient(-200, -48, 200, 48);
      bGrad.addColorStop(0, scheme.accentBright);
      bGrad.addColorStop(1, scheme.accent);
      ctx.fillStyle = bGrad;
      roundRect(ctx, -205, -48, 410, 96, 28);
      ctx.fill();

      ctx.fillStyle = "#080b14";
      ctx.font = "900 32px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("✨ ANSWER LOCKED!", 0, 2);
      ctx.restore();
    }
  }

  // 6. Flying Energy Orb from Card -> Slot on Reveal
  if (state.flyingOrb) {
    const o = state.flyingOrb;
    const p = 1 - o.life / o.maxLife;
    const ox = o.sx + (o.ex - o.sx) * p;
    const oy = o.sy + (o.ey - o.sy) * p - Math.sin(p * Math.PI) * 110;
    drawBacklight(ox, oy, 75, scheme.accentBright);
    drawDiamondStar(ox, oy, 22, "#ffffff", 1);
  }

  // 7. Shockwaves & Burst Confetti
  ctx.save();
  state.shockwaves.forEach((sw) => {
    const alpha = Math.max(0, sw.life / sw.maxLife);
    ctx.globalAlpha = alpha * 0.75;
    ctx.strokeStyle = sw.color;
    ctx.lineWidth = 6 * alpha;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  state.burstParticles.forEach((bp) => {
    ctx.globalAlpha = Math.max(0, bp.life / bp.maxLife);
    ctx.fillStyle = bp.color;
    ctx.beginPath();
    ctx.arc(bp.x, bp.y, bp.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

// --- Cue & Physics Update ---
function processAudioCues(timeSec, dt) {
  const vid = state.videos[state.activeVideoIdx];
  if (!vid) return;

  const scheme = getSchemeForVideo(state.activeVideoIdx);

  // Soft Ambient Marimba Pulse (Every 0.65s)
  const beatIdx = Math.floor(timeSec / 0.65);
  if (beatIdx !== state.lastAmbientBeat) {
    state.lastAmbientBeat = beatIdx;
    AudioMaster.playSoftPadNote(beatIdx);
  }

  for (let i = state.burstParticles.length - 1; i >= 0; i--) {
    const bp = state.burstParticles[i];
    bp.x += bp.vx * dt;
    bp.y += bp.vy * dt;
    bp.vy += 450 * dt;
    bp.life -= dt;
    if (bp.life <= 0) state.burstParticles.splice(i, 1);
  }

  for (let i = state.shockwaves.length - 1; i >= 0; i--) {
    const sw = state.shockwaves[i];
    sw.radius += (sw.maxRadius - 60) * (dt / sw.maxLife);
    sw.life -= dt;
    if (sw.life <= 0) state.shockwaves.splice(i, 1);
  }

  if (state.flyingOrb) {
    state.flyingOrb.life -= dt;
    if (state.flyingOrb.life <= 0) state.flyingOrb = null;
  }

  let seg = vid.segments[vid.segments.length - 1];
  for (const s of vid.segments) {
    if (timeSec >= s.start && timeSec <= s.end) {
      seg = s;
      break;
    }
  }

  const cueKey = `${seg.type}-${seg.qIdx ?? "x"}`;
  if (cueKey !== state.lastCueKey) {
    state.lastCueKey = cueKey;
    state.lastTickSecond = -1;

    const line = getSegmentSpeechText(seg, vid);
    if (line) {
      if (seg.voiceBuffer) {
        AudioMaster.playVoiceBuffer(seg.voiceBuffer);
      } else if (els.voiceProvider.value === "browser" || !state.isExporting) {
        speakBrowserFallback(line);
      }
    }

    if (seg.type === "HOOK" || seg.type === "OUTRO") {
      AudioMaster.playWhoosh();
    } else if (seg.type === "READ") {
      AudioMaster.playPop(540);
    } else if (seg.type === "REVEAL") {
      AudioMaster.playRevealChime();
      const count = vid.questions.length;
      const gap = Math.max(10, Math.min(18, 140 / count));
      const slotH = Math.min(84, (960 - gap * (count - 1)) / count);
      const slotY = 618 + seg.qIdx * (slotH + gap) + slotH / 2;

      spawnBurst(285, slotY, scheme.accentBright, scheme.accent2);
      spawnShockwave(285, slotY, scheme.accentBright);
      state.flyingOrb = { sx: 540, sy: 440, ex: 285, ey: slotY, life: 0.34, maxLife: 0.34 };
    }
  }

  if (seg.type === "COUNTDOWN") {
    const rem = Math.ceil(seg.end - timeSec);
    if (rem !== state.lastTickSecond && rem > 0) {
      state.lastTickSecond = rem;
      AudioMaster.playTick(rem === 1);
      spawnShockwave(740, 775, scheme.accentBright);
    }
  }
}

// --- Playback & High-Bitrate Mobile Export ---
async function startPlayback() {
  if (state.activeVideoIdx < 0 || state.isFetchingVoices) return;
  AudioMaster.init();
  const vid = state.videos[state.activeVideoIdx];

  els.playPauseBtn.disabled = true;
  await prepareVideoVoices(vid);
  els.playPauseBtn.disabled = false;

  state.isPlaying = true;
  state.lastFrameTime = performance.now();
  els.playPauseBtn.textContent = "⏸ Pause";

  const loop = (now) => {
    if (!state.isPlaying) return;
    const dt = Math.min(0.05, (now - state.lastFrameTime) / 1000);
    state.lastFrameTime = now;
    state.currentTime += dt;

    if (state.currentTime >= vid.totalDuration) {
      state.currentTime = vid.totalDuration;
      processAudioCues(state.currentTime, dt);
      drawFrame(state.currentTime);
      updateTimelineUI();
      pausePlayback();
      return;
    }

    processAudioCues(state.currentTime, dt);
    drawFrame(state.currentTime);
    updateTimelineUI();
    state.rafId = requestAnimationFrame(loop);
  };
  state.rafId = requestAnimationFrame(loop);
}

function pausePlayback() {
  state.isPlaying = false;
  if (state.rafId) cancelAnimationFrame(state.rafId);
  stopAllSpeech();
  els.playPauseBtn.textContent = "▶ Play";
}

function updateTimelineUI() {
  const vid = state.videos[state.activeVideoIdx];
  if (!vid) return;
  els.timeDisplay.textContent = `${formatTime(state.currentTime)} / ${formatTime(vid.totalDuration)}`;
  els.timelineProgress.style.width = `${Math.min(100, (state.currentTime / vid.totalDuration) * 100)}%`;
}

async function exportVideoAtIndex(idx) {
  selectVideo(idx);
  const vid = state.videos[idx];
  const scheme = getSchemeForVideo(idx);

  AudioMaster.init();
  stopAllSpeech();
  await prepareVideoVoices(vid);

  state.isExporting = true;
  els.renderStatus.textContent = `Rendering Mobile 9:16 Video #${vid.id} (${scheme.name})...`;

  const canvasStream = els.quizCanvas.captureStream(30);
  const combinedStream = new MediaStream([
    ...canvasStream.getVideoTracks(),
    ...AudioMaster.dest.stream.getAudioTracks(),
  ]);

  const mimeTypes = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"];
  const chosenMime = mimeTypes.find((m) => MediaRecorder.isTypeSupported(m)) || "";

  const recorder = new MediaRecorder(
    combinedStream,
    chosenMime ? { mimeType: chosenMime, videoBitsPerSecond: 8_000_000 } : undefined
  );
  const chunks = [];
  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  return new Promise((resolve) => {
    recorder.onstop = () => {
      stopAllSpeech();
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeCat = vid.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      a.href = url;
      a.download = `quiz-mobile-9x16-v${vid.id}-${scheme.id}-${safeCat}.webm`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      state.isExporting = false;
      els.renderStatus.textContent = `Saved Video #${vid.id} (${scheme.name})!`;
      resolve();
    };

    state.currentTime = 0;
    state.lastCueKey = "";
    state.lastTickSecond = -1;
    state.lastAmbientBeat = -1;
    state.burstParticles = [];
    state.shockwaves = [];
    recorder.start();

    let prev = performance.now();
    const recordStep = (now) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      state.currentTime += dt;
      processAudioCues(state.currentTime, dt);
      drawFrame(state.currentTime);
      updateTimelineUI();

      if (state.currentTime >= vid.totalDuration) {
        setTimeout(() => recorder.stop(), 200);
      } else {
        requestAnimationFrame(recordStep);
      }
    };
    requestAnimationFrame(recordStep);
  });
}

// --- Scheme Swatch Bar ---
function renderSchemeSwatches() {
  els.schemeSwatches.innerHTML = "";
  SHINING_SCHEMES.forEach((s) => {
    const div = document.createElement("div");
    div.className = `swatch ${els.colorSchemeMode.value === s.id ? "active" : ""}`;
    div.title = s.name;
    div.style.background = `linear-gradient(135deg, ${s.accentBright}, ${s.accent}, ${s.bgBot})`;
    div.addEventListener("click", () => {
      els.colorSchemeMode.value = s.id;
      renderSchemeSwatches();
      renderVideoList();
      if (state.activeVideoIdx >= 0) drawFrame(state.currentTime);
    });
    els.schemeSwatches.appendChild(div);
  });
}

// --- Event Wiring ---
function loadDataset(csvText, sourceName) {
  const rows = parseCSV(csvText);
  state.rows = rows;
  if (rows.length === 0) {
    els.dataStats.textContent = "No valid Question/Answer rows found.";
    els.generateBtn.disabled = true;
    return;
  }
  const cats = new Set(rows.map((r) => r.category));
  els.fileStatus.innerHTML = `<strong>${sourceName}</strong> loaded`;
  els.dataStats.textContent = `✓ ${rows.length} Q&As loaded across ${cats.size} categories.`;
  els.generateBtn.disabled = false;
  generateVideos();
}

els.colorSchemeMode.addEventListener("change", () => {
  renderSchemeSwatches();
  renderVideoList();
  if (state.activeVideoIdx >= 0) {
    const scheme = getSchemeForVideo(state.activeVideoIdx);
    els.activeVideoTitle.textContent = `Video #${state.videos[state.activeVideoIdx].id} • ${scheme.name}`;
    drawFrame(state.currentTime);
  }
});

els.voiceProvider.addEventListener("change", () => {
  state.voiceCache.clear();
  populateVoiceSelect();
});

els.voiceSelect.addEventListener("change", () => state.voiceCache.clear());

els.testVoiceBtn.addEventListener("click", async () => {
  AudioMaster.init();
  stopAllSpeech();
  const sampleLine = "Can you score 10 out of 10? What planet is known as the Red Planet?";
  if (els.voiceProvider.value === "browser") {
    speakBrowserFallback(sampleLine);
    return;
  }
  els.testVoiceBtn.disabled = true;
  els.testVoiceBtn.textContent = "⏳ Mastering Voice...";
  try {
    const buf = await fetchHumanVoiceBuffer(sampleLine);
    AudioMaster.playVoiceBuffer(buf);
    els.renderStatus.textContent = "🎙️ Smooth mastered voice playing!";
  } catch (err) {
    els.renderStatus.textContent = `⚠ Voice API error (${err.message}) — fallback active`;
    speakBrowserFallback(sampleLine);
  } finally {
    els.testVoiceBtn.disabled = false;
    els.testVoiceBtn.textContent = "🎙️ Test Smooth Mastered Voice";
  }
});

els.csvInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => loadDataset(reader.result, file.name);
  reader.readAsText(file);
});

els.dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  els.dropzone.classList.add("dragover");
});
els.dropzone.addEventListener("dragleave", () => els.dropzone.classList.remove("dragover"));
els.dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  els.dropzone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => loadDataset(reader.result, file.name);
  reader.readAsText(file);
});

els.loadSampleBtn.addEventListener("click", () => {
  loadDataset(SAMPLE_CSV, "50-viral-questions.csv");
});

els.downloadTemplateBtn.addEventListener("click", () => {
  const blob = new Blob([SAMPLE_CSV], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
});

els.generateBtn.addEventListener("click", generateVideos);

els.playPauseBtn.addEventListener("click", () => {
  if (state.isPlaying) {
    pausePlayback();
  } else {
    const vid = state.videos[state.activeVideoIdx];
    if (vid && state.currentTime >= vid.totalDuration) {
      state.currentTime = 0;
      state.lastCueKey = "";
    }
    startPlayback();
  }
});

els.restartBtn.addEventListener("click", () => {
  pausePlayback();
  state.currentTime = 0;
  state.lastCueKey = "";
  state.lastTickSecond = -1;
  state.lastAmbientBeat = -1;
  state.burstParticles = [];
  state.shockwaves = [];
  startPlayback();
});

els.exportSingleBtn.addEventListener("click", async () => {
  if (state.activeVideoIdx < 0 || state.isExporting) return;
  pausePlayback();
  els.exportSingleBtn.disabled = true;
  els.exportAllBtn.disabled = true;
  await exportVideoAtIndex(state.activeVideoIdx);
  els.exportSingleBtn.disabled = false;
  els.exportAllBtn.disabled = false;
});

els.exportAllBtn.addEventListener("click", async () => {
  if (state.videos.length === 0 || state.isExporting) return;
  pausePlayback();
  els.exportSingleBtn.disabled = true;
  els.exportAllBtn.disabled = true;
  for (let i = 0; i < state.videos.length; i++) {
    els.renderStatus.textContent = `Batch Rendering ${i + 1} of ${state.videos.length}...`;
    await exportVideoAtIndex(i);
  }
  els.renderStatus.textContent = `✨ All ${state.videos.length} mobile 9:16 videos exported!`;
  els.exportSingleBtn.disabled = false;
  els.exportAllBtn.disabled = false;
});

els.showSafeZones.addEventListener("change", (e) => {
  els.safeZoneOverlay.classList.toggle("visible", e.target.checked);
});

// --- Initialize App ---
populateVoiceSelect();
renderSchemeSwatches();

(function drawWelcomeCanvas() {
  const goldScheme = SHINING_SCHEMES[0];
  const meta = { badge: "✨", motif: "space", displayName: "24K GOLD" };
  initAmbientFX();
  drawRadiantBackground(goldScheme, meta, 0);
  drawMascot(CANVAS_W / 2, 960, goldScheme, "celebrate", 0, 0);

  ctx.save();
  drawBacklight(CANVAS_W / 2, 430, 420, goldScheme.backlight);
  ctx.fillStyle = goldScheme.accentBright;
  ctx.font = "900 66px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("VIRAL QUIZ STUDIO PRO", CANVAS_W / 2, 410);

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 34px Inter, sans-serif";
  ctx.fillText("10 Shining Schemes • Smooth Mastered Voice", CANVAS_W / 2, 485);
  ctx.restore();
})();