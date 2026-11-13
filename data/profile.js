(function () {
  
  
  
  
  
  
  

  
  var NAME = { value: "Magnel Olivero" };
  var NAME_UPPER = { value: "MAGNEL OLIVERO" };
  var SHORT_HANDLE = { value: "magnel" };
  var GITHUB_HANDLE = { value: "m4gnel" };
  var TAGLINE = { value: "Software, AI Systems & Visual Design" };
  var EMAIL = { value: "magnelolivero@gmail.com" };
  var LOCATION = { value: "Kochi, Kerala" };
  var COORDINATES = { value: "10.1518° N, 76.4357° E" };
  var COORDINATES_SHORT = { value: "10.1518N" };
  var EDUCATION_SHORT = { value: "B.Tech CSE '27 • ASIET" };
  var AVAILABILITY = { value: "Open to internships & roles" };
  var AVAILABILITY_UPPER = { value: "OPEN TO INTERNSHIPS & ROLES" };

  
  var ASSETS = {
    portrait: {
      src: { value: "hero_portrait_clean.webp" },
      alt: NAME},
    filmFrame: {
      src: { value: "neo_tokyo_frame.webp" }},
    rgbScope: {
      src: { value: "rgb_parade.webp" }},
    stageBackground: {
      src: { value: "cyberpunk_stage_bg.webp" }}};

  
  var SOCIALS = [
    {
      id: "github",
      label: { value: "GITHUB" },
      display: { value: "github.com/" + GITHUB_HANDLE.value },
      handle: { value: "@" + GITHUB_HANDLE.value },
      href: { value: "https://github.com/" + GITHUB_HANDLE.value }},
    {
      id: "linkedin",
      label: { value: "LINKEDIN" },
      display: { value: "linkedin.com/in/magnel-olivero" },
      handle: { value: "magnel-olivero" },
      href: { value: "https://www.linkedin.com/in/magnel-olivero" }},
    {
      id: "twitter",
      label: { value: "TWITTER/X" },
      display: { value: "x.com/_magnel_" },
      handle: { value: "@_magnel_" },
      href: { value: "https://x.com/_magnel_" }},
    {
      id: "instagram",
      label: { value: "INSTAGRAM" },
      display: { value: "instagram.com/_magnel_" },
      handle: { value: "@_magnel_" },
      href: { value: "https://instagram.com/_magnel_" }}];

  
  var AGRISAGE_ADVISORY_NODES = { value: "14" };
  var AGRISAGE_DIAGNOSTIC_NODES = { value: "10" };
  var AGRISAGE_COMPLIANCE_RATE = { value: "TBD" }; 
  var AGRISAGE_REGULATORY_STATUS = { value: "TBD" }; 
  var MIRLO_ROUTING_LATENCY = { value: "TBD" }; 
  var MIRLO_ROUNDTRIP_LATENCY = { value: "TBD" }; 
  var MIRLO_RTT_TELEMETRY = { value: "TBD" }; 
  var MIRLO_LOSS_TELEMETRY = { value: "TBD" }; 
  var MIRLO_TOOLS_COUNT = { value: "TBD" }; 
  var MIRLO_LANGUAGES_COUNT = { value: "TBD" }; 
  var PORTAL_RTT_LATENCY = { value: "TBD" }; 
  var SPECIMEN_RTT_TELEMETRY = { value: "TBD" }; 
  var AMAZON_BLOCKER_MODE = { value: "3-key union blocker (exact name, token index, Soundex)" };
  var AMAZON_ACC_TELEMETRY = { value: "TBD" }; 
  var AMAZON_PAIR_COUNT = { value: "TBD" }; 
  var AMAZON_HONOR_TITLE = { value: "TBD" }; 
  var COLOR_CALIBRATION_CLAIM = { value: "TBD" }; 
  var WCAG_CLAIM = { value: "TBD" }; 

  
  var MONOGRAM = {
    
    
    selectedOption: { value: "MO." },
    options: [
      {
        id: { value: "M." },
        usage: { value: "Unused alternative SVG monogram" },
        faviconDataUri: {
          value:
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230b0c10'/><path d='M7 23V9L13 17L19 9V23' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/><circle cx='24' cy='21' r='2' fill='%23c3f400'/></svg>"}},
      {
        id: { value: "MO." },
        usage: { value: "Active monogram rendered in the browser tab favicon and Design Lab SVG" },
        faviconDataUri: {
          value:
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230b0c10'/><path d='M4.5 22.5V9.5L9.5 17L14.5 9.5V22.5' stroke='%23ffffff' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round' fill='none'/><circle cx='21' cy='16' r='3.8' stroke='%23ffffff' stroke-width='2.3' fill='none'/><circle cx='27' cy='21.5' r='1.7' fill='%23c3f400'/></svg>"},
        headerLeft: { value: "MONOGRAM ARCHITECTURE" },
        headerRight: { value: "GRID: 16PX // CHAMFER: 45°" },
        apexLabel: { value: "TBD" }, 
        radiusLabel: { value: "R:48PX" },
        kerningLabel: { value: "CHAR_KERNING: -0.04em" },
        title: { value: "Geometric Grid & Monogram Construction" },
        description: {
          value:
            "Built on a strict 16px grid with 45° bevel cuts and balanced counter-spacing. Scales cleanly from favicons to large-format print."},
        footerLeft: { value: "VECTOR PATHS // NATIVE SVG" },
        footerRight: { value: "TBD" }}]};

  window.PROFILE = {
    seo: {
      title: { value: NAME.value + " | " + TAGLINE.value },
      description: {
        value:
          NAME.value +
          " - Computer Science student and builder working on multi-agent systems, real-time voice apps, and visual design. ASIET '27, Kerala, India."},
      keywords: {
        value:
          NAME.value +
          ", " +
          GITHUB_HANDLE.value +
          ", Software Engineer, AI Systems, Graphic Designer, Motion Designer, LangGraph, AgriSage, Mirlo, LiveKit, WebRTC, Gemini Live, ASIET, " +
          LOCATION.value},
      author: NAME,
      ogTitle: { value: NAME.value + " | " + TAGLINE.value },
      ogDescription: {
        value:
          "Computer Science student building multi-agent tools, real-time voice apps, and visual design systems. ASIET '27, Kerala, India."},
      ogType: { value: "website" },
      ogSiteName: { value: NAME.value + " Portfolio" },
      ogUrl: { value: "https://m4gnel.github.io/" },
      ogImage: { value: "https://m4gnel.github.io/assets/og-preview.png" },
      ogImageWidth: { value: "1200" },
      ogImageHeight: { value: "630" },
      ogImageAlt: { value: "Magnel Olivero - Software, AI Systems & Visual Design" },
      ogLocale: { value: "en_US" },
      themeColor: { value: "#0b0c10" },
      colorScheme: { value: "dark" },
      twitterCard: { value: "summary_large_image" },
      twitterTitle: { value: NAME.value + " | " + TAGLINE.value },
      twitterDescription: {
        value:
          "Computer Science student building multi-agent tools, real-time voice apps, and visual design systems. ASIET '27, Kerala, India."},
      twitterImage: { value: "https://m4gnel.github.io/assets/og-preview.png" }},

    branding: {
      monogram: MONOGRAM},

    identity: {
      name: NAME,
      nameUpper: NAME_UPPER,
      shortHandle: SHORT_HANDLE,
      githubHandle: GITHUB_HANDLE,
      tagline: TAGLINE,
      location: LOCATION,
      coordinates: COORDINATES,
      coordinatesShort: COORDINATES_SHORT,
      educationShort: EDUCATION_SHORT,
      availability: AVAILABILITY,
      availabilityUpper: AVAILABILITY_UPPER,
      bio: {
        value:
          "Building real-time voice apps, multi-agent tools, and visual design systems while studying Computer Science at ASIET."},
      portrait: ASSETS.portrait},

    navigation: {
      links: [
        { label: { value: "WORK" }, href: "#work" },
        { label: { value: "APPROACH" }, href: "#philosophy" },
        { label: { value: "DESIGN" }, href: "#design" },
        { label: { value: "EDUCATION" }, href: "#academics" },
        { label: { value: "STACK" }, href: "#stack" },
        { label: { value: "TRACK" }, href: "#milestones" },
        { label: { value: "EXPERIENCE" }, href: "#experience" },
        { label: { value: "CONTACT" }, href: "#terminal" }],
      ctaLabel: { value: "GET IN TOUCH" },
      paletteKeyLabel: { value: "⌘K" }},

    hero: {
      backdropText: { value: "PORTFOLIO" },
      greeting: { value: "Hello, I'm" },
      bioBadge: { value: "bio" },
      primaryCtaLabel: { value: "See my work" },
      secondaryCtaLabel: { value: "Get in touch" }},

    approach: {
      eyebrow: { value: "How I Work" },
      headlinePrefix: { value: "Practical engineering," },
      headlineHighlight: { value: "clean code, real output." },
      summary: {
        value:
          "Most of my projects revolve around multi-agent systems, low-latency voice pipelines, and backend tooling. I care about getting past toy demos: wiring LangGraph workflows, WebRTC audio, and strict validation checks so things hold up in use."},
      cards: [
        {
          eyebrow: { value: "MULTI-AGENT WORKFLOWS" },
          title: { value: AGRISAGE_ADVISORY_NODES.value + "-Node Advisory Graph" },
          description: {
            value:
              "Built a " +
              AGRISAGE_ADVISORY_NODES.value +
              "-node LangGraph advisory graph with a separate " +
              AGRISAGE_DIAGNOSTIC_NODES.value +
              "-node diagnostic pipeline, tying DSSAT-style rule-based crop simulation to CIB&RC chemical compliance checks and agronomist review in Agri-SAGE."},
          footerTags: { value: "LANGGRAPH // FASTAPI // RULE-BASED SIM" },
          icon: "account_tree",
          accent: "red"},
        {
          eyebrow: { value: "REAL-TIME STREAMING & VOICE" },
          title: { value: "Real-Time Voice Assistant" },
          description: {
            value:
              "Real-time voice assistant on Gemini Live API & LiveKit with offline Piper TTS and OS-level system tools."}, 
          footerTags: { value: "GEMINI LIVE // WEBRTC // PIPER" },
          icon: "record_voice_over",
          accent: "lime"},
        {
          eyebrow: { value: "GRAPHIC & MOTION DESIGN" },
          title: { value: "Design & Motion Work" },
          description: {
            value:
              "Layout, typography, color grading, and motion graphics across Figma, Photoshop, After Effects, and DaVinci Resolve."},
          footerTags: { value: "FIGMA // AFTER EFFECTS // DAVINCI" },
          icon: "palette",
          accent: "red"}]},

    designLab: {
      eyebrow: { value: "Visual Identity & Design" },
      headingPrefix: { value: "Graphic Design &" },
      headingHighlight: { value: "Visual Systems." },
      subtitle: {
        value: "Typography, color systems, brand identity, and motion graphics: the visual side of the work."},
      monogramCard: MONOGRAM.options[1],
      colorCard: {
        headerLeft: { value: "COLOR SCIENCE" },
        headerRight: COLOR_CALIBRATION_CLAIM, 
        title: { value: "Palette & Color Tokens" },
        description: { value: "Click any swatch below to copy its hex value to your clipboard." },
        swatches: [
          {
            name: { value: "Crimson Core" },
            role: { value: "Primary Accent" },
            hex: { value: "#ef4940" },
            variant: "crimson"},
          {
            name: { value: "Electric Lime" },
            role: { value: "Status & Highlights" },
            hex: { value: "#c3f400" },
            variant: "lime"},
          {
            name: { value: "Obsidian Void" },
            role: { value: "Base Background" },
            hex: { value: "#0b0c10" },
            variant: "dark"},
          {
            name: { value: "Hardware Bezel" },
            role: { value: "Card & Panel Surface" },
            hex: { value: "#151622" },
            variant: "bezel"}],
        footerLeft: { value: "HIGH-CONTRAST DARK UI" },
        footerRight: { value: "CLICK TO COPY" }},
      typographyCard: {
        headerLeft: { value: "TYPOGRAPHY SPECIMEN" },
        headerRight: { value: "3 TYPE FAMILIES" },
        rttTelemetry: SPECIMEN_RTT_TELEMETRY, 
        specimens: [
          {
            fontLabel: { value: "ANTON // ULTRA-CONDENSED DISPLAY" },
            weightLabel: { value: "900 WEIGHT" },
            sampleText: { value: "BUILT TO WORK" },
            styleVariant: "anton"},
          {
            fontLabel: { value: "SPACE GROTESK // EDITORIAL HEADINGS" },
            weightLabel: { value: "700 / 800 BOLD" },
            sampleText: { value: "Clean type, strong hierarchy." },
            styleVariant: "grotesk"},
          {
            fontLabel: { value: "JETBRAINS MONO // TELEMETRY & LABELS" },
            weightLabel: { value: "TABULAR MONOSPACE" },
            sampleText: { value: "ABC abc 0123 {} [] <>" },
            styleVariant: "mono"}],
        footerLeft: { value: "TENSION & RHYTHM" },
        footerRight: WCAG_CLAIM},
      motionCard: {
        headerLeft: { value: "MOTION GRAPHICS & VFX GRADING" },
        headerRight: { value: "DAVINCI RESOLVE" },
        filmViewport: {
          image: ASSETS.filmFrame,
          alt: { value: "Interactive lens-mask demo" },
          badge: { value: "INTERACTIVE DEMO" }},
        scopeViewport: {
          image: ASSETS.rgbScope,
          alt: { value: "Waveform graphic demo" },
          badge: { value: "DEMO" }},
        lensLabel: { value: "LENS_MASK:" },
        aspectOptions: [
          { id: "cinema", label: { value: "2.39:1" } },
          { id: "imax", label: { value: "1.43:1" } },
          { id: "stadium", label: { value: "STADIUM" } },
          { id: "full", label: { value: "16:9" } }],
        title: { value: "Color Grading & Motion (demo)" },
        description: {
          value: "Color grading and motion graphics work in DaVinci Resolve and After Effects."},
        footerLeft: { value: "TBD" }, 
        footerRight: { value: "TBD" }}},

    education: {
      eyebrow: { value: "Education" },
      headingPrefix: { value: "Education" },
      intro: {
        value: "Where the fundamentals come from: algorithms, systems, databases, and AI/ML foundations."},
      degree: {
        value: "B.Tech in Computer Science & Engineering (Artificial Intelligence)"},
      years: { value: "2023 - 2027" },
      cgpa: { value: "7.39" },
      institution: {
        value: "Adi Shankara Institute of Engineering & Technology (ASIET) • Kalady, Kerala, India"},
      summary: {
        value:
          "Coursework in data structures, algorithms, operating systems, DBMS, and AI/ML fundamentals. Active in open-source projects, hackathons, and ML competitions."},
      courseworkLabel: { value: "Core Coursework & Focus:" },
      coursework: [
        { value: "Data Structures & Algorithms" },
        { value: "OOP" },
        { value: "DBMS" },
        { value: "Operating Systems" },
        { value: "Computer Networks" },
        { value: "AI Fundamentals" },
        { value: "ML Basics" },
        { value: "GenAI Concepts" }]},

    projects: {
      eyebrow: { value: "Selected Work" },
      headingPrefix: { value: "Selected" },
      headingHighlight: { value: "Projects." },
      subtitle: {
        value: "A mix of multi-agent workflows, real-time voice pipelines, full-stack web apps, and competitive ML pipelines."},
      featured: [
        {
          id: "agrisage",
          accent: "lime",
          filename: { value: "agrisage_14node_langgraph_orchestrator.py" },
          statusLabel: { value: AGRISAGE_ADVISORY_NODES.value + "-NODE ADVISORY" },
          techTags: [
            { value: "LangGraph State Graph" },
            { value: "DSSAT-Style Rule Sim" },
            { value: "EfficientNet-B3 + ONNX" },
            { value: "Kotlin Compose" }],
          title: { value: "AGRI-SAGE ENGINE" },
          description: {
            value:
              "Agricultural decision system built around a " +
              AGRISAGE_ADVISORY_NODES.value +
              "-node LangGraph advisory graph with a separate " +
              AGRISAGE_DIAGNOSTIC_NODES.value +
              "-node diagnostic pipeline, DSSAT-style rule-based crop simulation, an EfficientNet-B3 training pipeline and Android ONNX Runtime integration, 5 Indian languages + English, and CIB&RC chemical compliance checks."},
          metrics: [
            {
              value: {
                value: AGRISAGE_ADVISORY_NODES.value + " + " + AGRISAGE_DIAGNOSTIC_NODES.value + " Nodes"},
              label: { value: "Advisory + Diag Graph" },
              highlight: false},
            {
              value: AGRISAGE_COMPLIANCE_RATE, 
              label: { value: "CIB&RC Compliance" },
              highlight: true},
            {
              value: { value: "5 Indian Languages" },
              label: { value: "Plus English" },
              highlight: false}],
          links: {
            github: { value: "" },
            demo: { value: "" }},
          images: [
            {
              src: { value: "assets/hero_section_cleaned.webp" },
              alt: { value: "Agri-SAGE Web Interface Hero" },
              badge: { value: "WEB_HERO" }},
            {
              src: { value: "assets/landing_page_dark_theme.webp" },
              alt: { value: "Agri-SAGE Dark Theme Overview" },
              badge: { value: "WEB_OVERVIEW" }},
            {
              src: { value: "assets/screen_diagnose.webp" },
              alt: { value: "Agri-SAGE Android Leaf Diagnosis Screen" },
              badge: { value: "ANDROID_DIAGNOSE" }},
            {
              src: { value: "assets/screen_advisor_chat.webp" },
              alt: { value: "Agri-SAGE Android Advisor Chat Screen" },
              badge: { value: "ANDROID_ADVISOR" }}],
          viewport: {
            type: "radar",
            canvasId: "kinetic-canvas",
            topLeft: { value: "ORCHESTRATION: LANGGRAPH_v1.0" },
            topRightPrimary: {
              value:
                "NODES: " +
                AGRISAGE_ADVISORY_NODES.value +
                " ADV / " +
                AGRISAGE_DIAGNOSTIC_NODES.value +
                " DIAG"},
            topRightSecondary: { value: "TRIAGE: HUMAN_CRITIC_READY" },
            bottomLeft: { value: "" },
            bottomRight: { value: "DB: POSTGRES + PGVECTOR" }}},
        {
          id: "mirlo",
          accent: "red",
          filename: { value: "mirlo_duplex_voice_gateway.stream" },
          statusLabel: { value: "DUPLEX AUDIO ACTIVE" },
          techTags: [
            { value: "Gemini Live API" },
            { value: "LiveKit WebRTC" },
            { value: "Python" }, 
            { value: "Piper Neural TTS" }],
          title: { value: "MIRLO DESKTOP" },
          description: {
            value:
              "Cross-platform desktop voice assistant built on the Gemini Live API with offline Piper TTS and OS-level automation tools."}, 
          metrics: [
            {
              value: MIRLO_ROUNDTRIP_LATENCY, 
              label: { value: "Roundtrip Latency" },
              highlight: true},
            {
              value: { value: "TBD" }, 
              label: { value: "OS Handlers" },
              highlight: false},
            {
              value: { value: "TBD" }, 
              label: { value: "Neural TTS" },
              highlight: false}],
          links: {
            github: { value: "" },
            demo: { value: "" }},
          images: [],
          viewport: {
            type: "waveform",
            canvasId: "voice-waveform-canvas",
            topLeft: { value: "CODEC: OPUS 48KHZ" },
            topCenter: { value: "Echo Cancellation: Locked" },
            topRight: { value: "STATUS: STREAMING" },
            rttValue: MIRLO_RTT_TELEMETRY, 
            bottomCenter: { value: "Piper Neural Speech Stream" },
            lossValue: MIRLO_LOSS_TELEMETRY}},
        {
          id: "amazon-ml",
          accent: "lime",
          filename: { value: "amazon_ml_multimodal_entity_resolution.py" },
          statusLabel: { value: "NATIONAL CHALLENGE" },
          techTags: [
            { value: "LightGBM GBDT" },
            { value: "MPNet Multilingual" },
            { value: "Scikit-learn" },
            { value: "TF-IDF ANN" }],
          competitionBadge: {
            value: "Amazon ML Challenge 2026 • Entity Resolution"},
          title: { value: "ENTITY RESOLUTION PIPELINE" },
          description: {
            value:
              "Multilingual business entity matching pipeline across US, India, and France datasets (2.2M train entities, 176M candidate pairs after blocking) using a " +
              AMAZON_BLOCKER_MODE.value +
              " and calibrated LightGBM classification."},
          metrics: [
            {
              value: { value: "2.2M" },
              label: { value: "Train Entities" },
              highlight: true},
            {
              value: { value: "176M" },
              label: { value: "Candidate Pairs After Blocking" },
              highlight: false},
            {
              value: { value: "22 Features" },
              label: { value: "Semantic & Lexical" },
              highlight: false}],
          links: {
            github: { value: "" },
            demo: { value: "" }},
          images: [],
          viewport: {
            type: "scrubber",
            pairCount: AMAZON_PAIR_COUNT, 
            statusLabel: { value: "UNION_BLOCKING ACTIVE" },
            accuracyValue: AMAZON_ACC_TELEMETRY}}],
      bento: [
        {
          id: "amrs",
          accent: "lime",
          category: { value: "RESEARCH TOOLING" },
          stackHighlight: { value: "Next.js 16 + Neo4j" },
          title: { value: "AMRS: Autonomous Multi-Agent Research Scientist" },
          description: {
            value:
              "Multi-agent research workflow that breaks down complex questions using literature synthesis, source fact-checking, Neo4j Graph RAG, and structured implementation plans."},
          techTags: [
            { value: "Next.js 16" },
            { value: "FastAPI" },
            { value: "Qdrant Vector" },
            { value: "Neo4j Graph RAG" }],
          footerLeft: { value: "EVIDENCE VERIFIED" },
          footerRight: { value: "STATE MACHINE" },
          links: { github: { value: "" }, demo: { value: "" } },
          images: []},
        {
          id: "interview-coach",
          accent: "red",
          category: { value: "EDTECH & SPEECH AI" },
          stackHighlight: { value: "Web Speech + STAR Rubric" },
          title: { value: "AI Interview Coach" },
          description: {
            value:
              "Mock interview app pairing Web Speech API voice capture with live LLM evaluation (plus deterministic STAR rubric fallback) and Chart.js skill radar charts."},
          techTags: [
            { value: "Flask 3.0" },
            { value: "Web Speech API" },
            { value: "Chart.js Radar" },
            { value: "SQLAlchemy ORM" }],
          footerLeft: { value: "DUAL-ENGINE EVAL" },
          footerRight: { value: "STAR FALLBACK" },
          links: { github: { value: "" }, demo: { value: "" } },
          images: []},
        {
          id: "lazy-terminal",
          accent: "lime",
          category: { value: "TINKERHUB USELESS PROJECTS" },
          stackHighlight: { value: "Team ADHOLOKAM" },
          title: { value: "Lazy Terminal: Developer Environment Simulator" },
          description: {
            value:
              "Built with teammate Vikhneswar S. for TinkerHub Useless Projects: a zero-dependency web workspace with a playful custom terminal REPL and simulated code editor in plain HTML, CSS, and JavaScript."},
          techTags: [
            { value: "Vanilla JS" },
            { value: "CSS3 Hardware UI" },
            { value: "HTML5 Terminal" },
            { value: "Zero Dependencies" }],
          footerLeft: { value: "VANILLA WEB WORKSPACE" },
          footerRight: { value: "ZERO DEPENDENCY" },
          links: { github: { value: "" }, demo: { value: "" } },
          images: []},
        {
          id: "zebec-ai",
          accent: "red",
          category: { value: "CREATOR WORKFLOW // FULL-STACK" },
          stackHighlight: { value: "React 19 + SQLite WAL" },
          title: { value: "Zebec AI: Creator Production Platform" },
          description: {
            value:
              "Multi-tenant creator workflow app that generates clip script drafts (hook, script, duration) with OpenAI/Gemini or local templates, plus approval and publishing queues, built on React 19, Express 4, and SQLite in WAL mode."},
          techTags: [
            { value: "React 19" },
            { value: "Express 4" },
            { value: "SQLite WAL" },
            { value: "Tailwind CSS" }],
          footerLeft: { value: "FULL-STACK APP" },
          footerRight: { value: "SQLITE WAL MODE" },
          links: { github: { value: "" }, demo: { value: "" } },
          images: []}]},

    portal: {
      badge: { value: "AGRI-SAGE // 14+10 NODE LANGGRAPH" },
      headingPrefix: { value: "Inside" },
      headingHighlight: { value: "Agri-SAGE." },
      description: {
        value:
          "Scroll through the pipeline view below connecting a " +
          AGRISAGE_ADVISORY_NODES.value +
          "-node LangGraph advisory graph and separate " +
          AGRISAGE_DIAGNOSTIC_NODES.value +
          "-node diagnostic pipeline, DSSAT-style rule-based crop simulation, CIB&RC chemical compliance checks, and agronomist review triage."},
      backgroundImage: ASSETS.stageBackground.src,
      hudTopLeft: {
        value:
          "AGRI_SAGE_PIPELINE // " +
          AGRISAGE_ADVISORY_NODES.value +
          "+" +
          AGRISAGE_DIAGNOSTIC_NODES.value +
          " NODES"},
      hudCoordinates: {
        value: ""},
      hudTopRight: { value: "STATEFUL_GRAPH // ACTIVE" },
      hudCenterBadge: {
        value:
          AGRISAGE_ADVISORY_NODES.value +
          "+" +
          AGRISAGE_DIAGNOSTIC_NODES.value +
          " LANGGRAPH NODES • DSSAT-STYLE CROP SIM • EFFICIENTNET-B3 ONNX"},
      hudCenterTitle: { value: "AGRI-SAGE CHEMICAL SAFETY PIPELINE" },
      hudRttValue: PORTAL_RTT_LATENCY, 
      hudBottomCenter: { value: "DETERMINISTIC SAFETY CHECKS" },
      hudBottomRight: AGRISAGE_REGULATORY_STATUS},

    stack: {
      eyebrow: { value: "Daily Toolchain" },
      headingPrefix: { value: "Tools & Stack" },
      categories: [
        {
          title: { value: "AI & AGENT SYSTEMS" },
          accent: "red",
          items: [
            { value: "LangGraph" },
            { value: "PyTorch" },
            { value: "LiveKit WebRTC" },
            { value: "Gemini Live" },
            { value: "ONNX Runtime" },
            { value: "Scikit-learn" }]},
        {
          title: { value: "GRAPHIC & MOTION" },
          accent: "lime",
          items: [
            { value: "Figma" },
            { value: "Photoshop" },
            { value: "After Effects" },
            { value: "DaVinci Resolve" }]},
        {
          title: { value: "CODE & RUNTIME" },
          accent: "red",
          items: [
            { value: "Python 3.11+" },
            { value: "TypeScript" },
            { value: "Next.js 16" },
            { value: "FastAPI" },
            { value: "Tailwind CSS" },
            { value: "Kotlin" }]},
        {
          title: { value: "DATA & DEVOPS" },
          accent: "lime",
          items: [
            { value: "PostgreSQL" },
            { value: "pgvector" },
            { value: "Docker + GitHub Actions" },
            { value: "Qdrant" },
            { value: "SQLite WAL" },
            { value: "Neo4j" }]}]},

    milestones: {
      eyebrow: { value: "Track Record" },
      headingPrefix: { value: "Milestones & Honors" },
      items: [
        {
          title: { value: "Personal Project: Agri-SAGE" },
          period: { value: "2026 - PRESENT" },
          organization: { value: "Agri-SAGE Project" },
          description: {
            value:
              "Built a " +
              AGRISAGE_ADVISORY_NODES.value +
              "-node LangGraph advisory graph with a separate " +
              AGRISAGE_DIAGNOSTIC_NODES.value +
              "-node diagnostic pipeline, linking DSSAT-style rule-based crop simulation, an EfficientNet-B3 training pipeline with Android ONNX Runtime integration, CIB&RC chemical checks, and agronomist review."},
          accent: "lime"},
        {
          title: { value: "Personal Project: MIRLO" },
          period: { value: "TBD" }, 
          organization: { value: "MIRLO Assistant & Autonomous Systems" },
          description: {
            value:
              "Built the real-time voice loop on Gemini Live with offline Piper speech synthesis, OS-level automation tools, and live process tracking."}, 
          accent: "red"},
        {
          
          title: { value: "Amazon ML Challenge 2026 Participant" },
          period: { value: "2026" },
          organization: { value: "Amazon ML Challenge" },
          description: {
            value:
              "Built a multilingual entity matching pipeline on 2.2M train entities using a " +
              AMAZON_BLOCKER_MODE.value +
              " to produce 176M candidate pairs after blocking with 22 features and LightGBM scoring."},
          accent: "lime"},
        {
          title: { value: "2nd Runner Up • IGNIZ 2026" },
          period: { value: "FEB 2026" },
          organization: { value: "Upside Downed • SCMS School of Engineering & Technology, Ernakulam" },
          description: {
            value: "Placed 2nd runner up in the Upside Downed event at IGNIZ 2026."},
          accent: "red"},
        {
          title: { value: "TinkerHub Useless Projects • Team ADHOLOKAM" },
          period: { value: "2025" },
          organization: { value: "TinkerHub Useless Projects" },
          description: {
            value:
              "Built Lazy Terminal with teammate Vikhneswar S.: a zero-dependency web workspace with a playful custom terminal REPL and code editor simulator in plain HTML, CSS, and JavaScript."},
          accent: "lime"}]},

    experience: {
      eyebrow: { value: "Internships" },
      headingPrefix: { value: "Experience" },
      items: [
        {
          role: { value: "Associate Software Intern" },
          company: { value: "InfineCode Tech" },
          period: { value: "Jun 2026 – Jul 2026" },
          mode: { value: "Remote" },
          descriptions: [
            {
              value:
                "Built a Flutter-based Mobile Container app hosting a company web portal via WebView, with splash screen, navigation, loading indicators, error retry handling, and centralized config (package_info_plus)."},
            {
              value:
                "Developed an NGO Volunteer Connect Flutter app with volunteer registration, form validation, searchable and filterable event listings, REST API JSON integration, and local persistence (SharedPreferences/Hive)."},
            {
              value:
                "Worked on Python and AI-focused software development training, practicing Git workflows, REST API development, debugging, testing concepts, and SDLC practices."}],
          accent: "lime"},
        {
          role: { value: "Robotics & AI Intern" },
          company: { value: "GenZee Technologies LLP (with ORE Equipe Robotics Research Centre)" },
          period: { value: "Jul 2024" },
          mode: { value: "Muvattupuzha, Kerala" },
          descriptions: [
            {
              value:
                "Completed a 15-day internship (01–16 Jul 2024) on Robotics with Artificial Intelligence and Embedded Systems, gaining hands-on exposure to embedded systems and AI-driven automation."},
            {
              value:
                "Worked with sensor-based hardware modules and microcontrollers to build simple robotic prototypes, applying AI concepts to real-time decision-making."},
            {
              value:
                "Collaborated with peers and mentors to debug hardware-software integration issues under project deadlines."}],
          accent: "red"},
        {
          role: { value: "TBD" },
          company: { value: "Interspot" },
          period: { value: "TBD" },
          mode: { value: "TBD" },
          descriptions: [{ value: "TBD" }],
          accent: "lime"}]},

    contact: {
      email: EMAIL,
      backgroundImage: ASSETS.stageBackground.src,
      headlinePrefix: { value: "Looking for someone who builds?" },
      headlineHighlight: { value: "Let’s talk." },
      availabilityDescription: {
        value:
          "Open to internships, part-time roles, and project collaborations in AI engineering, agent workflows, and real-time voice pipelines (remote or on-site)."},
      copyButtonLabel: { value: "COPY" },
      copiedButtonLabel: { value: "COPIED!" }},

    socials: SOCIALS,

    footer: {
      links: [
        { label: { value: "Work" }, href: "#work" },
        { label: { value: "Approach" }, href: "#philosophy" },
        { label: { value: "Design" }, href: "#design" },
        { label: { value: "Education" }, href: "#academics" },
        { label: { value: "Stack" }, href: "#stack" },
        { label: { value: "Milestones" }, href: "#milestones" },
        { label: { value: "Experience" }, href: "#experience" },
        { label: { value: "Contact" }, href: "#terminal" }],
      copyright: { value: "© 2026 " + NAME_UPPER.value + ". BUILT BY HAND." }},

    commandPalette: {
      placeholder: { value: "Jump to section, explore works, copy contacts..." },
      navigationLabel: { value: "Direct Navigation" },
      navigationItems: [
        {
          label: { value: "How I Work (Workflows & Design)" },
          href: "#philosophy",
          dotColor: "#c3f400"},
        {
          label: { value: "Graphic Design & Visuals (Brand, Type, Motion)" },
          href: "#design",
          dotColor: "#c3f400"},
        {
          label: { value: "Education (B.Tech CSE AI '27)" },
          href: "#academics",
          dotColor: "#ef4940"},
        {
          label: { value: "Selected Projects (Agri-SAGE, MIRLO, Amazon ML)" },
          href: "#work",
          dotColor: "#ef4940"},
        {
          label: { value: "Tools & Stack (LangGraph, PyTorch, LiveKit)" },
          href: "#stack",
          dotColor: "#c3f400"},
        {
          label: { value: "Track Record & Milestones" },
          href: "#milestones",
          dotColor: "#ef4940"},
        {
          label: { value: "Experience & Internships" },
          href: "#experience",
          dotColor: "#c3f400"},
        {
          label: { value: "Contact & Links" },
          href: "#terminal",
          dotColor: "#c3f400"}],
      quickActionsLabel: { value: "Quick Actions" }}};
})();
