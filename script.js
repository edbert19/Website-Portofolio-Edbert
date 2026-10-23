// =====================================================
//  DATA PROJECT
//  - Cover  : img/<id>/cover.png (atau .jpg)
//  - Foto dokumentasi: taruh di folder img/<id>/
//    lalu jalankan:  node generate-gallery.js
// =====================================================
const projects = [
  {
    id: "cbt-akademis-ai",
    title: "CBT Akademis AI",
    type: "Web Platform",
    year: 2026,
    period: "Mar – Jun 2026",
    tagline: "A web-based Computer-Based Testing platform with AI-powered proctoring.",
    description:
      "CBT Akademis AI is a web-based Computer-Based Testing platform built in collaboration with Akademis.ai so educational institutions can run exams online. It covers the full exam flow, from question banks and scheduling to an exam portal, automatic grading, and real-time AI proctoring. This project was published in the JIKSI journal (2026).",
    tech: ["Laravel", "Next.js", "PostgreSQL", "Python", "WebSocket"],
    features: [
      { name: "Question bank", info: "Multiple choice, checklist, and essay questions with AI question generation" },
      { name: "Exam scheduling", info: "Duration, randomization, attempts, passing grade, and sections" },
      { name: "Exam configuration", info: "Link question banks and control shuffling and evaluation" },
      { name: "Exam portal", info: "Navigation panel, auto-save, resume after disconnect, and review" },
      { name: "Exam results", info: "Automatic grading for objective questions, manual grading for essays" },
      { name: "AI proctoring", info: "Detects tab switching, multiple faces, copy-paste, and fullscreen exits" },
      { name: "Monitoring dashboard", info: "Live view of active exams and participant status" },
    ],
    icon: "ti-school",
    color: "#2f6b51",
    duration: 214,
    github: "https://github.com/NatanaelVineDjapri/CBT-Akademis-AI",
    demo: "https://cbtakademis-ai.my.id",
    paper: "https://doi.org/10.24912/jiksi.v14i2.38604",
  },
  {
    id: "rajawali-plastik",
    title: "Rajawali Plastik",
    type: "Operational Digital Platform",
    year: 2025,
    period: "Oct – Nov 2025",
    tagline: "DigiHub, a platform that brings inventory, sales, and distribution into one integrated system.",
    description:
      "Rajawali Plastik is a growing SME that distributes plastic products across various industries. Its digital platform, DigiHub, brings inventory, sales, and distribution together in a single integrated system, with core business modules designed for operational efficiency and easy access to data.",
    tech: ["Laravel", "Next.js", "MySQL"],
    features: [
      { name: "Inventory management", info: "Track and manage product stock" },
      { name: "Sales tracking", info: "Monitor sales activity" },
      { name: "Distribution management", info: "Handle the product distribution process" },
      { name: "Integrated business modules", info: "One system for daily operations and data access" },
    ],
    icon: "ti-building-store",
    color: "#2f4f7a",
    duration: 187,
    github: "https://github.com/NatanaelVineDjapri/RajawaliPlastic",
    demo: "https://rajawali-plastic.vercel.app",
    paper: "",
  },
  {
    id: "eggsplore",
    title: "Eggsplore Marketplace",
    type: "Mobile App",
    year: 2025,
    period: "Sep – Oct 2025",
    tagline: "A mobile marketplace app inspired by Tokopedia, Shopee, and Lazada.",
    description:
      "Eggsplore is a mobile marketplace app built with Flutter. Users can browse products, add them to a cart, check out with an in-app balance, chat with the admin, and even upload products to sell, all powered by a Laravel REST API.",
    tech: ["Flutter", "Dart", "Laravel", "MySQL"],
    features: [
      { name: "Product browsing", info: "Explore products from the backend API" },
      { name: "Authentication", info: "Register, login, logout, and forgot password" },
      { name: "EggsplorePay", info: "Manage and top up in-app balance" },
      { name: "Cart & checkout", info: "Complete purchase flow" },
      { name: "Messaging", info: "Chat between users and admin" },
      { name: "Wishlist & likes", info: "Save favorite products" },
      { name: "Sell products", info: "Upload and manage your own products" },
    ],
    icon: "ti-egg",
    color: "#8a6a1f",
    duration: 203,
    github: "https://github.com/NatanaelVineDjapri/Eggsplore_Marketplace",
    demo: "",
    paper: "",
  },
  {
    id: "cosmo",
    title: "Cosmo",
    type: "Social Media Web",
    year: 2025,
    period: "2025",
    tagline: "A space-themed social media website inspired by Instagram.",
    description:
      "Cosmo is a space-themed social media website that recreates Instagram's core features, built as the final project for the Back-End Programming course. Users can share posts, follow each other, like posts, send messages, and manage their profiles, while an admin account can moderate all posts.",
    tech: ["Laravel", "PHP", "MySQL"],
    features: [
      { name: "Authentication", info: "Login, register, and forgot password" },
      { name: "Home feed", info: "Posts from accounts you follow" },
      { name: "Explore & search", info: "Discover posts from all users" },
      { name: "Create & edit posts", info: "Share and manage your own posts" },
      { name: "Likes & follows", info: "Interact with other users" },
      { name: "Direct messages", info: "Chat with other users" },
      { name: "Profile page", info: "Photo, name, username, bio, and posts" },
      { name: "Admin moderation", info: "Admin can edit all posts" },
    ],
    icon: "ti-planet",
    color: "#232323",
    coverFit: "contain",
    duration: 196,
    github: "https://github.com/ClaudioTaffarel/Project-UAS-BE-2025",
    demo: "",
    paper: "",
  },
    {
    id: "musindo",
    title: "Musindo",
    type: "Static Website",
    year: 2025,
    period: "2025",
    tagline: "A website that introduces traditional musical instruments from central Indonesia.",
    description:
      "Musindo is a website that helps preserve Indonesian cultural heritage by introducing traditional musical instruments from central Indonesia, covering each instrument's origin, history, meaning, and how it is played. Users can explore instruments through an interactive map, search and filter them by province or playing method, and save their favorites.",
    tech: ["HTML", "CSS", "JavaScript", "JSON"],
    features: [
      { name: "Interactive map", info: "Click a province to see its instruments" },
      { name: "Search", info: "Find instruments by name or region" },
      { name: "Filter", info: "Filter by province and playing method" },
      { name: "Instrument detail", info: "Origin, history, and how to play" },
      { name: "Favorites", info: "Save instruments with localStorage" },
      { name: "About & contact", info: "Information about the developers" },
    ],
    icon: "ti-music",
    color: "#672f0a",
    coverFit: "contain",
    duration: 182,
    github: "https://github.com/edbert19/Projek_UTS_Nusantara",
    demo: "",
    paper: "",
  },
];

const extraReleases = [
  {
    title: "CBT System on Akademis.ai",
    sub: "2026 · JIKSI Journal",
    icon: "ti-file-text",
    color: "#6b3a5a",
    image: "img/cover-jiksi.png",
    link: "https://doi.org/10.24912/jiksi.v14i2.38604",
  },
];

// =====================================================
//  SKILL PLAYLISTS
//  "match" = kata yang dicocokkan ke tech project (otomatis)
//  "extra" = tempat lain skill itu dipakai (sertifikat dll)
// =====================================================
const playlists = [
  {
    id: "frontend",
    title: "Frontend Mix",
    desc: "Building interfaces people enjoy using.",
    icon: "ti-layout",
    color: "#3d5a99",
    skills: [
            { name: "HTML", type: "Markup", icon: "ti-brand-html5", match: ["HTML", "Next.js", "PHP"] },
      { name: "CSS", type: "Styling", icon: "ti-brand-css3", match: ["CSS", "Next.js", "PHP"] },
      { name: "JavaScript", type: "Language", icon: "ti-brand-javascript", match: ["JavaScript", "Next.js", "PHP"] },
      { name: "TypeScript", type: "Language", icon: "ti-brand-typescript", match: ["Next.js"] },
      { name: "React", type: "Library", icon: "ti-brand-react", match: ["React", "Next.js"] },
      { name: "Next.js", type: "Framework", icon: "ti-brand-nextjs" },
      { name: "Bootstrap", type: "CSS Framework", icon: "ti-brand-bootstrap" },
    ],
  },
  {
    id: "backend",
    title: "Backend Hits",
    desc: "APIs, databases, and the logic behind the scenes.",
    icon: "ti-server",
    color: "#7a3d99",
    skills: [
      { name: "PHP", type: "Language", icon: "ti-brand-php", match: ["Laravel", "PHP"] },
      { name: "Laravel", type: "Framework", icon: "ti-brand-laravel" },
      { name: "Node.js", type: "Runtime", icon: "ti-brand-nodejs" },
      { name: "MySQL", type: "Database", icon: "ti-brand-mysql" },
      { name: "PostgreSQL", type: "Database", icon: "ti-database" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Vibes",
    desc: "Cross-platform apps that live in your pocket.",
    icon: "ti-device-mobile",
    color: "#1f7a7a",
    skills: [
      { name: "Dart", type: "Language", icon: "ti-code" },
      { name: "Flutter", type: "Framework", icon: "ti-brand-flutter" },
    ],
  },
  {
    id: "core",
    title: "Core Languages",
    desc: "The fundamentals I learned and keep sharpening.",
    icon: "ti-code",
    color: "#99602f",
    skills: [
      { name: "Python", type: "Language", icon: "ti-brand-python" },
      { name: "Java", type: "Language", icon: "ti-coffee", extra: ["Oracle Java Fundamentals"] },
      { name: "C++", type: "Language", icon: "ti-brand-cpp" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Design",
    desc: "Everything that keeps the workflow smooth.",
    icon: "ti-tools",
    color: "#4a4a4a",
    skills: [
      { name: "Git", type: "Version Control", icon: "ti-brand-git", match: ["*"] },
      { name: "Linux", type: "Operating System", icon: "ti-terminal-2", extra: ["Red Hat System Admin I & II"] },
      { name: "Figma", type: "Design", icon: "ti-brand-figma" },
      { name: "Unity", type: "Game Engine", icon: "ti-brand-unity" },
    ],
  },
];

// Foto dokumentasi & cover dibuat otomatis oleh generate-gallery.js
const GALLERY = window.GALLERY || {};
const COVERS = window.COVERS || {};

// ================= HELPER =================
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
const coverOf = (p) => COVERS[p.id] || `img/${p.id}/cover.jpg`;
const techText = (p) => p.tech.join(" · ");
const findIndex = (id) => projects.findIndex((p) => p.id === id);

// Cover dengan fallback (kalau foto belum ada, tampil warna + ikon)
const coverHTML = (p) => `
  <i class="ti ${p.icon}"></i>
  <img class="cover-img" src="${coverOf(p)}" alt="${p.title}" loading="lazy" style="object-fit:${p.coverFit || "cover"}" onerror="this.remove()" />`;

// ================= HOME =================
document.getElementById("tracklist").innerHTML = projects
  .map(
    (p, i) => `
    <div class="track" data-index="${i}">
      <div class="num"><span>${i + 1}</span><i class="ti ti-player-play"></i></div>
      <div class="track-main">
        <div class="track-cover" style="background:${p.color}">${coverHTML(p)}</div>
        <div style="min-width:0">
          <p class="track-name">${p.title}</p>
          <p class="track-tech">${techText(p)}</p>
        </div>
      </div>
      <div class="track-type">${p.type}</div>
      <div class="track-year">${p.year}</div>
    </div>`
  )
  .join("");

document.getElementById("discography").innerHTML =
  projects
    .map(
      (p) => `
    <div class="card" data-project="${p.id}">
      <div class="card-cover" style="background:${p.color}">
        ${coverHTML(p)}
        <span class="card-play"><i class="ti ti-player-play"></i></span>
      </div>
      <p class="card-title">${p.title}</p>
      <p class="card-sub">${p.year} · Album</p>
    </div>`
    )
    .join("") +
  extraReleases
    .map(
      (r) => `
    <a class="card" href="${r.link}" target="_blank">
      <div class="card-cover" style="background:${r.color}">
        <i class="ti ${r.icon}"></i>
         ${r.image ? `<img class="cover-img" src="${r.image}" alt="${r.title}" loading="lazy" onerror="this.remove()" />` : ""}
        <span class="card-play"><i class="ti ti-external-link"></i></span>
      </div>
      <p class="card-title">${r.title}</p>
      <p class="card-sub">${r.sub}</p>
    </a>`
    )
    .join("");

document.getElementById("playlists").innerHTML = playlists
  .map(
    (pl) => `
    <div class="card" data-playlist="${pl.id}" tabindex="0" role="button" aria-label="Open ${pl.title}">
      <div class="card-cover" style="background:${pl.color}">
        <i class="ti ${pl.icon}"></i>
        <span class="cover-label">${pl.title}</span>
        <span class="card-play"><i class="ti ti-player-play"></i></span>
      </div>
      <p class="card-sub">${pl.skills.map((sk) => sk.name).join(", ")}</p>
    </div>`
  )
  .join("");

document.getElementById("sidebarPlaylists").innerHTML = playlists
  .map(
    (pl) => `
    <div class="lib-item" data-playlist="${pl.id}" tabindex="0" role="button" aria-label="Open ${pl.title}">
      <div class="lib-cover" style="background:${pl.color}"><i class="ti ${pl.icon}"></i></div>
      <div><p>${pl.title}</p><small>Playlist · ${pl.skills.length} skills</small></div>
    </div>`
  )
  .join("");

// ================= HALAMAN PROJECTS (grid) =================
document.getElementById("projectGrid").innerHTML = projects
  .map(
    (p, i) => `
    <div class="card project-card" data-project="${p.id}" tabindex="0" role="button" aria-label="Open ${p.title}">
      <div class="card-cover" style="background:${p.color}">
        ${coverHTML(p)}
        <button class="card-play" data-play="${i}" aria-label="Play ${p.title}"><i class="ti ti-player-play"></i></button>
      </div>
      <p class="card-title">${p.title}</p>
      <p class="card-sub">By Edbert Halim · ${p.year}</p>
    </div>`
  )
  .join("");

// ================= PLAYER =================
const npTitle = document.getElementById("npTitle");
const npCover = document.getElementById("npCover");
const progressFill = document.getElementById("progressFill");
const timeNow = document.getElementById("timeNow");
const timeEnd = document.getElementById("timeEnd");
const playBtn = document.getElementById("playBtn");

let current = 0;
let elapsed = 0;
let playing = false;
let timer = null;

function loadTrack(index) {
  current = (index + projects.length) % projects.length;
  elapsed = 0;
  const p = projects[current];
  npTitle.textContent = p.title;
  npCover.style.background = p.color;
  npCover.innerHTML = coverHTML(p);
  timeEnd.textContent = formatTime(p.duration);
  document.querySelectorAll(".track[data-index]").forEach((t) =>
    t.classList.toggle("playing", Number(t.dataset.index) === current)
  );
  updateProgress();
  syncPlayIcons();
}

function updateProgress() {
  const p = projects[current];
  progressFill.style.width = (elapsed / p.duration) * 100 + "%";
  timeNow.textContent = formatTime(elapsed);
}

// Samain ikon play/pause di semua tombol
function syncPlayIcons() {
  const icon = (on) => `<i class="ti ${on ? "ti-player-pause" : "ti-player-play"}"></i>`;
  playBtn.innerHTML = icon(playing);
  document.getElementById("playBig").innerHTML = icon(playing);
  document.querySelectorAll(".play-big[data-play]").forEach((b) => {
    b.innerHTML = icon(playing && Number(b.dataset.play) === current);
  });
}

function setPlaying(state) {
  playing = state;
  syncPlayIcons();
  clearInterval(timer);
  if (playing) {
    timer = setInterval(() => {
      elapsed++;
      if (elapsed >= projects[current].duration) loadTrack(current + 1);
      updateProgress();
    }, 1000);
  }
}

function playProject(index) {
  if (index === current && playing) return setPlaying(false);
  if (index !== current) loadTrack(index);
  setPlaying(true);
}

playBtn.addEventListener("click", () => setPlaying(!playing));
document.getElementById("playBig").addEventListener("click", () => setPlaying(!playing));
document.getElementById("nextBtn").addEventListener("click", () => loadTrack(current + 1));
document.getElementById("prevBtn").addEventListener("click", () => loadTrack(current - 1));

// ================= HALAMAN DETAIL PROJECT =================
const detailEl = document.getElementById("projectDetail");

function openProject(id, fromBack = false) {
  const i = findIndex(id);
  if (i < 0) return;
  if (!fromBack) backStack.push(snapshot()); // ingat posisi sebelum buka project
  currentProjectId = id;
  const p = projects[i];
  const photos = GALLERY[p.id] || [];

  const linkPill = (url, icon, label) =>
    url ? `<a class="pill" href="${url}" target="_blank"><i class="ti ${icon}"></i> ${label}</a>` : "";

  detailEl.innerHTML = `
    <header class="playlist-header" style="--c:${p.color}">
      <button class="back-btn" id="backBtn" aria-label="Back to projects"><i class="ti ti-chevron-left"></i></button>
      <div class="playlist-cover" style="background:${p.color}">${coverHTML(p)}</div>
      <div class="playlist-info">
        <p class="playlist-label">Public project · ${p.type}</p>
        <h1>${p.title}</h1>
        <p class="playlist-desc">${p.tagline}</p>
        <p class="playlist-meta">
          <strong>Edbert Halim</strong> · ${p.period} · ${p.features.length} features · ${photos.length} photos
        </p>
      </div>
    </header>

    <div class="content">
      <div class="actions">
        <button class="play-big" data-play="${i}" aria-label="Play"><i class="ti ti-player-play"></i></button>
        ${linkPill(p.github, "ti-brand-github", "GitHub")}
        ${linkPill(p.demo, "ti-world", "Live demo")}
        ${linkPill(p.paper, "ti-file-text", "Read paper")}
      </div>

      <p class="project-about">${p.description}</p>
      <div class="tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>

      <div class="track-head">
        <span>#</span><span>Feature</span><span><i class="ti ti-check"></i></span>
      </div>
      <div class="tracklist">
        ${p.features
          .map(
            (f, k) => `
          <div class="track feature">
            <div class="num"><span>${k + 1}</span></div>
            <div style="min-width:0">
              <p class="track-name">${f.name}</p>
              <p class="track-tech">${f.info}</p>
            </div>
            <div class="track-year"><i class="ti ti-circle-check green"></i></div>
          </div>`
          )
          .join("")}
      </div>

      <h2 class="section-title">Documentation</h2>
      ${
        photos.length
          ? `<div class="gallery">${photos
              .map(
                (src, k) => `
            <button class="shot" data-shot="${k}" aria-label="Open photo ${k + 1}">
              <img src="${src}" alt="${p.title} documentation ${k + 1}" loading="lazy" />
            </button>`
              )
              .join("")}</div>`
          : `<p class="empty">Documentation photos coming soon.</p>`
      }
    </div>`;

  document.getElementById("backBtn").addEventListener("click", () => goBack("projects"));
  detailEl.querySelector(".play-big").addEventListener("click", () => playProject(i));
  detailEl.querySelectorAll(".shot").forEach((s) =>
    s.addEventListener("click", () => openGallery(photos, Number(s.dataset.shot), p.title))
  );

  syncPlayIcons();
  showView("project");
}

// Klik kartu project (halaman Projects & Discography) = buka detail
document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openProject(card.dataset.project);
  });
});

// Tombol play kecil di kartu = putar tanpa buka detail
document.querySelectorAll(".project-card .card-play").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    playProject(Number(btn.dataset.play));
  })
);

// Klik baris di Popular releases = putar project
document.querySelectorAll(".track[data-index]").forEach((row) =>
  row.addEventListener("click", () => playProject(Number(row.dataset.index)))
);

// ================= GALERI (pop-up foto dokumentasi) =================
const galleryModal = document.getElementById("galleryModal");
const galleryImg = document.getElementById("galleryImg");
const galleryCount = document.getElementById("galleryCount");
let galleryPhotos = [];
let galleryIndex = 0;
let galleryTitle = "";

// Ambil nama foto dari nama file, misal "01%20Home%20Page.png" -> "Home Page"
function photoName(src) {
  return decodeURIComponent(src.split("/").pop())
    .replace(/\.[^.]+$/, "")      // buang .png
    .replace(/^\d+[\s._-]*/, ""); // buang angka urutan di depan
}

function showGalleryPhoto() {
  const src = galleryPhotos[galleryIndex];
  const name = photoName(src);
  galleryImg.src = src;
  galleryImg.alt = `${galleryTitle}: ${name}`;
  galleryCount.textContent = `${name} · ${galleryIndex + 1} / ${galleryPhotos.length}`;
}

function openGallery(photos, index, title) {
  galleryPhotos = photos;
  galleryIndex = index;
  galleryTitle = title;
  showGalleryPhoto();
  galleryModal.classList.add("open");
  galleryModal.setAttribute("aria-hidden", "false");
}

function closeGallery() {
  galleryModal.classList.remove("open");
  galleryModal.setAttribute("aria-hidden", "true");
}

function stepGallery(dir) {
  galleryIndex = (galleryIndex + dir + galleryPhotos.length) % galleryPhotos.length;
  showGalleryPhoto();
}

document.getElementById("galleryClose").addEventListener("click", closeGallery);
document.getElementById("galleryPrev").addEventListener("click", () => stepGallery(-1));
document.getElementById("galleryNext").addEventListener("click", () => stepGallery(1));
galleryModal.addEventListener("click", (e) => { if (e.target === galleryModal) closeGallery(); });

// ================= HALAMAN PLAYLIST SKILL =================
const playlistEl = document.getElementById("playlistDetail");

// Project yang memakai skill ini (dicocokkan dari tech project)
function projectsFor(skill) {
  const keys = (skill.match || [skill.name]).map((k) => k.toLowerCase());
  if (keys.includes("*")) return projects;
  return projects.filter((p) => p.tech.some((t) => keys.includes(t.toLowerCase())));
}

function openPlaylist(id, fromBack = false) {
  const pl = playlists.find((x) => x.id === id);
  if (!pl) return;
  if (!fromBack) backStack.push(snapshot()); // ingat posisi sebelum buka playlist
  currentPlaylistId = id;

  const rows = pl.skills.map((sk) => ({ sk, used: projectsFor(sk) }));
  const usedProjects = new Set(rows.flatMap((r) => r.used.map((p) => p.id)));
  const firstProject = projects.findIndex((p) => usedProjects.has(p.id));

  playlistEl.innerHTML = `
    <header class="playlist-header" style="--c:${pl.color}">
      <button class="back-btn" id="playlistBack" aria-label="Back to home"><i class="ti ti-chevron-left"></i></button>
      <div class="playlist-cover" style="background:${pl.color}">
        <i class="ti ${pl.icon}"></i>
        <span class="cover-label">${pl.title}</span>
      </div>
      <div class="playlist-info">
        <p class="playlist-label">Public playlist</p>
        <h1>${pl.title}</h1>
        <p class="playlist-desc">${pl.desc}</p>
        <p class="playlist-meta">
          <strong>Edbert Halim</strong> · ${pl.skills.length} skills · used in ${usedProjects.size} projects
        </p>
      </div>
    </header>

    <div class="content">
      <div class="actions">
        ${firstProject >= 0 ? `<button class="play-big" data-play="${firstProject}" aria-label="Play"><i class="ti ti-player-play"></i></button>` : ""}
      </div>

      <div class="track-head skill-grid">
        <span>#</span><span>Skill</span><span class="hide-sm">Used in</span><span>Projects</span>
      </div>
      <div class="tracklist">
        ${rows
          .map(
            ({ sk, used }, k) => `
          <div class="track skill-grid skill-row">
            <div class="num"><span>${k + 1}</span></div>
            <div class="track-main">
              <div class="track-cover skill-icon" style="background:${pl.color}"><i class="ti ${sk.icon}"></i></div>
              <div style="min-width:0">
                <p class="track-name">${sk.name}</p>
                <p class="track-tech">${sk.type}</p>
              </div>
            </div>
            <div class="used-in hide-sm">
              ${
                [
                  ...used.map((p) => `<button class="used-link" data-open-project="${p.id}">${p.title}</button>`),
                  ...(sk.extra || []).map((e) => `<span>${e}</span>`),
                ].join(", ") || `<span class="muted">Personal & coursework</span>`
              }
            </div>
            <div class="track-year">${used.length}</div>
          </div>`
          )
          .join("")}
      </div>
    </div>`;

  document.getElementById("playlistBack").addEventListener("click", () => goBack("home"));
  const play = playlistEl.querySelector(".play-big");
  if (play) play.addEventListener("click", () => playProject(Number(play.dataset.play)));
  playlistEl.querySelectorAll("[data-open-project]").forEach((b) =>
    b.addEventListener("click", () => openProject(b.dataset.openProject))
  );

  syncPlayIcons();
  showView("playlist");
}

// Klik kartu playlist (Home) atau item di sidebar = buka halaman playlist
document.querySelectorAll("[data-playlist]").forEach((el) => {
  el.addEventListener("click", () => openPlaylist(el.dataset.playlist));
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openPlaylist(el.dataset.playlist);
  });
});

// ================= NAVIGASI HALAMAN =================
function showView(name) {
  const navName = name === "project" ? "projects" : name;
  document.querySelectorAll(".view").forEach((v) =>
    v.classList.toggle("active", v.dataset.view === name)
  );
  document.querySelectorAll(".nav a, .mobile-nav a").forEach((a) =>
    a.classList.toggle("active", a.dataset.view === navName)
  );
  document.getElementById("main").scrollTop = 0;
}

document.querySelectorAll("a[data-view]").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    backStack.length = 0; // pindah menu = mulai riwayat baru
    showView(el.dataset.view);
  })
);

// ================= TOMBOL BACK (balik ke tempat asal) =================
// Setiap buka project / playlist, posisi sebelumnya disimpan di sini
const backStack = [];
let currentProjectId = null;
let currentPlaylistId = null;

function snapshot() {
  const view = document.querySelector(".view.active")?.dataset.view || "home";
  const scroll = document.getElementById("main").scrollTop;
  const projectId = currentProjectId;
  const playlistId = currentPlaylistId;
  const wrapped = wrappedModal.classList.contains("open") ? { year: wYear, slide: wIndex } : null;

  return () => {
    if (view === "project") openProject(projectId, true);
    else if (view === "playlist") openPlaylist(playlistId, true);
    else showView(view);
    document.getElementById("main").scrollTop = scroll;
    if (wrapped) {
      openWrapped(wrapped.year);
      showSlide(wrapped.slide);
    }
  };
}

function goBack(fallbackView) {
  const restore = backStack.pop();
  if (restore) restore();
  else showView(fallbackView);
} 

// ================= SERTIFIKAT =================
// image  = foto sertifikat kamu, taruh di folder img/certificates/
// verify = link verifikasi (Credly dll). Kosongin "" kalau nggak ada
const certificates = [
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    date: "Dec 2025",
    credential: "f1c83bd2-886a-4e5c-91e9-379239170b3c",
    image: "img/certificates/Red Hat System Administration I (RH124 - RHA) - Ver. 8.2.png",
    verify: "https://www.credly.com/badges/1936f00f-cd24-4a89-848b-5752f71c67bf",
  },
  {
    title: "Red Hat System Administration II (RH134)",
    issuer: "Red Hat",
    date: "Nov 2025",
    credential: "2881fc2a-2763-44c5-8f9f-1ad2515c398c",
    image: "img/certificates/Red Hat System Administration I (RH124 - RHA) - Ver. 9.3.png",
    verify: "",
  },
  {
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    date: "Nov 2024",
    credential: "",
    image: "img/certificates/oracle academy.png",
    verify: "",
  },
  {
    title: "Data Analytics Bootcamp",
    issuer: "NAMA PENYELENGGARA",
    date: "BULAN TAHUN",
    credential: "",
    image: "img/certificates/revo-u.png",
    verify: "",
  },
  {
    title: "Gemini Academy Socialization",
    issuer: "Faculty of Information Technology, Untar",
    date: "Sep 2025",
    credential: "",
    image: "img/certificates/gemini.png",
    verify: "",
  },
  {
    title: "Webinar ICStar Hackathon 2024: Beyond Borders",
    issuer: "ONE Indonesia",
    date: "Jul 2024",
    credential: "",
    image: "img/certificates/ONE.png",
    verify: "",
  },
  {
    title: "Financial Literacy & Inclusion Socialization",
    issuer: "Bank Bumi Arta",
    date: "BULAN TAHUN",
    credential: "",
    image: "img/certificates/BUMI ARTA.png",
    verify: "",
  },
];

document.getElementById("certGrid").innerHTML = certificates
  .map(
    (c, i) => `
    <div class="card cert-card" data-cert="${i}" tabindex="0" role="button" aria-label="View ${c.title}">
      <div class="cert-cover">
        <img src="${c.image}" alt="Certificate: ${c.title}" loading="lazy"
             onerror="this.parentElement.classList.add('missing'); this.remove();" />
        <span class="card-play"><i class="ti ti-eye"></i></span>
      </div>
      <p class="card-title">${c.title}</p>
      <p class="card-sub">By ${c.issuer} · ${c.date}</p>
    </div>`
  )
  .join("");

const certModal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const modalVerify = document.getElementById("modalVerify");

function openCert(i) {
  const c = certificates[i];
  modalImg.src = c.image;
  modalImg.alt = "Certificate: " + c.title;
  document.getElementById("modalIssuer").textContent = c.issuer + " · " + c.date;
  document.getElementById("modalTitle").textContent = c.title;
  document.getElementById("modalMeta").textContent = c.credential ? "Credential ID: " + c.credential : "";
  modalVerify.href = c.verify;
  modalVerify.style.display = c.verify ? "inline-flex" : "none";
  certModal.classList.add("open");
  certModal.setAttribute("aria-hidden", "false");
}

function closeCert() {
  certModal.classList.remove("open");
  certModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => openCert(Number(card.dataset.cert)));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") openCert(Number(card.dataset.cert));
  });
});
document.getElementById("modalClose").addEventListener("click", closeCert);
certModal.addEventListener("click", (e) => { if (e.target === certModal) closeCert(); });

// ================= KEYBOARD =================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeCert(); closeGallery(); }
  if (galleryModal.classList.contains("open")) {
    if (e.key === "ArrowLeft") stepGallery(-1);
    if (e.key === "ArrowRight") stepGallery(1);
  }
});

// ================= START =================
loadTrack(0);

// =====================================================
//  JOURNEY
//  Pakai data "projects" dan "certificates" di atas
// =====================================================

// ---------- 1. TIMELINE (urut dari yang terbaru) ----------
// end: null = masih berjalan (muncul badge "Now playing")
const journey = [
  {
    place: "Universitas Tarumanagara",
    role: "Administrative Staff",
    org: "University Ranking & Reputation Office",
    start: "Mar 2026",
    end: null,
    icon: "ti-briefcase",
    logo: "img/journey/Untar.png",
    color: "#1e3264",
    details:
      "Supporting the university's ranking and reputation work, from collecting and organising institutional data to preparing reports for national and international ranking submissions.",
    tags: ["Data management", "Reporting", "Teamwork"],
  },
  {
    place: "Universitas Tarumanagara",
    role: "Bachelor of Informatics Engineering",
    org: "Faculty of Information Technology · GPA 3.74 / 4.00",
    start: "Aug 2024",
    end: null,
    icon: "ti-school",
    logo: "img/journey/Untar.png",
    color: "#8d1d2c",
    details:
      "Studying software engineering, databases, and web and mobile development. Built 5 team projects, published a paper in the JIKSI journal, and earned Red Hat and Oracle certifications along the way. Expected to graduate in 2028.",
    tags: ["Full-stack", "Laravel", "Next.js", "Flutter"],
  },
  {
    place: "Kasih Kemuliaan School",
    role: "Senior High School",
    org: "SMA",
    start: "Jul 2021",
    end: "May 2024",
    icon: "ti-building-community",
    logo: "img/journey/kasih-kemuliaan.png",
    color: "#7a4b12",
    details: "Finished senior high school and started exploring programming before moving on to university.",
    tags: [],
  },
  {
    place: "Tunas Agung",
    role: "Junior High School",
    org: "SMP",
    start: "Jul 2018",
    end: "May 2021",
    icon: "ti-backpack",
    logo: "img/journey/HBTA.png",
    color: "#285e61",
    details: "",
    tags: [],
  },
  {
    place: "Harapan Bunda",
    role: "Elementary School",
    org: "SD",
    start: "Jul 2012",
    end: "May 2018",
    icon: "ti-pencil",
    logo: "img/journey/HBTA.png",
    color: "#5b3a8c",
    details: "",
    tags: [],
  },
  {
    place: "Metanoia",
    role: "Playgroup – Kindergarten B",
    org: "PG – TK B",
    start: "Jul 2009",
    end: "May 2012",
    icon: "ti-mood-kid",
    logo: "img/journey/metanoia.png",
    color: "#a0375a",
    details: "",
    tags: [],
  },
];

// ---------- 2. MOMEN PENTING (masuk ke slide Wrapped) ----------
const milestones = [
  { date: "Aug 2025", title: "Published in JIKSI", text: "First journal publication", icon: "ti-file-text" },
];

// ---------- 3. KARTU WRAPPED PER TAHUN ----------
const wrappedYears = [
  { year: 2024, title: "The Beginning", line: "Where it all started.", colors: ["#1db954", "#0b3d22"] },
  { year: 2025, title: "The Builder", line: "The year of shipping projects.", colors: ["#7c3aed", "#1e0b47"] },
  { year: 2026, title: "Level Up", line: "Bigger systems, real-world work.", colors: ["#f97316", "#4a1606"] },
];

// =====================================================
//  HELPER TANGGAL
// =====================================================
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const parseMonth = (s) => {
  const [m, y] = s.split(" ");
  return new Date(Number(y), MONTHS.indexOf(m.slice(0, 3)));
};
const yearOf = (s) => Number((String(s).match(/\d{4}/) || [])[0]);
const startMonthOf = (p) => {
  const m = MONTHS.indexOf(String(p.period || "").trim().slice(0, 3));
  return m < 0 ? 0 : m;
};

function durationText(start, end) {
  const a = parseMonth(start);
  const b = end ? parseMonth(end) : new Date();
  let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(y + (y > 1 ? " yrs" : " yr"));
  if (m) parts.push(m + (m > 1 ? " mos" : " mo"));
  return parts.join(" ") || "1 mo";
}

// =====================================================
//  RENDER TIMELINE
// =====================================================
const eq = `<span class="eq"><i></i><i></i><i></i></span>`;

document.getElementById("timeline").innerHTML = journey
  .map((j, i) => {
    const now = !j.end;
    const hasMore = j.details || j.tags.length;
    return `
    <div class="tl-row${now ? " is-now" : ""}${hasMore ? " has-more" : ""}" data-tl="${i}" ${hasMore ? 'tabindex="0" role="button" aria-expanded="false"' : ""}>
      <div class="tl-num">${now ? eq : i + 1}</div>
      <div class="tl-logo" style="background:${j.color}">
        <i class="ti ${j.icon}"></i>
        ${j.logo ? `<img src="${j.logo}" alt="${j.place} logo" loading="lazy" onerror="this.remove()" />` : ""}
      </div>
      <div class="tl-main">
        <p class="tl-place">${j.place}</p>
        <p class="tl-role">${j.role}</p>
        <p class="tl-org">${j.org}</p>
        <p class="tl-when-mobile">${j.start} – ${j.end || "Now"}</p>
      </div>
      <div class="tl-when">
        <span>${j.start} – ${j.end || "Now"}</span>
        ${now ? '<span class="now-badge">Now playing</span>' : ""}
      </div>
      <div class="tl-dur">${durationText(j.start, j.end)}</div>
      ${hasMore ? '<i class="ti ti-chevron-down tl-chev"></i>' : '<span></span>'}
      ${
        hasMore
          ? `<div class="tl-more">
              ${j.details ? `<p>${j.details}</p>` : ""}
              ${j.tags.length ? `<div class="tl-tags">${j.tags.map((t) => `<span>${t}</span>`).join("")}</div>` : ""}
            </div>`
          : ""
      }
    </div>`;
  })
  .join("");

document.querySelectorAll(".tl-row.has-more").forEach((row) => {
  const toggle = () => {
    const open = row.classList.toggle("open");
    row.setAttribute("aria-expanded", open);
  };
  row.addEventListener("click", toggle);
  row.addEventListener("keydown", (e) => { if (e.key === "Enter") toggle(); });
});

// =====================================================
//  DATA WRAPPED PER TAHUN (otomatis dari projects & certificates)
// =====================================================
function wrappedData(year) {
  const yProjects = projects.filter((p) => p.year === year).sort((a, b) => startMonthOf(a) - startMonthOf(b));
  const yCerts = certificates
    .map((c, i) => ({ ...c, index: i }))
    .filter((c) => yearOf(c.date) === year);

  const started = journey
    .filter((j) => yearOf(j.start) === year)
    .map((j) => ({ date: j.start, title: "Started at " + j.place, text: j.role, icon: j.icon }));
  const finished = journey
    .filter((j) => j.end && yearOf(j.end) === year)
    .map((j) => ({ date: j.end, title: "Graduated from " + j.place, text: j.role, icon: "ti-confetti" }));
  const yMilestones = [...started, ...finished, ...milestones.filter((m) => yearOf(m.date) === year)].sort(
    (a, b) => parseMonth(a.date) - parseMonth(b.date)
  );

  const count = {};
  yProjects.forEach((p) => p.tech.forEach((t) => (count[t] = (count[t] || 0) + 1)));
  const topSkills = Object.entries(count).sort((a, b) => b[1] - a[1]);

  return { yProjects, yCerts, yMilestones, topSkills };
}

// =====================================================
//  KARTU WRAPPED
// =====================================================
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

document.getElementById("wrappedRow").innerHTML = wrappedYears
  .map((w, i) => {
    const d = wrappedData(w.year);
    return `
    <button class="wrapped-card" data-wrapped="${i}" style="--c1:${w.colors[0]};--c2:${w.colors[1]}" aria-label="Open ${w.year} Wrapped">
      <span class="wc-label">Edbert's Wrapped</span>
      <span class="wc-year">${w.year}</span>
      <span class="wc-title">${w.title}</span>
      <span class="wc-stats">${plural(d.yProjects.length, "project")} · ${plural(d.yCerts.length, "cert")}</span>
      <span class="wc-play"><i class="ti ti-player-play-filled"></i></span>
    </button>`;
  })
  .join("");

// =====================================================
//  SLIDER WRAPPED (pop-up)
// =====================================================
const wrappedModal = document.getElementById("wrappedModal");
const wrappedStage = document.getElementById("wrappedStage");
const wrappedBars = document.getElementById("wrappedBars");
let wSlides = [];
let wIndex = 0;
let wYear = 0;

function buildSlides(w) {
  const { yProjects, yCerts, yMilestones, topSkills } = wrappedData(w.year);
  const slides = [];

  // 1. Intro
  slides.push(`
    <div class="ws ws-intro">
      <p class="ws-kicker">Edbert's</p>
      <h2 class="ws-huge">${w.year}</h2>
      <p class="ws-big">Wrapped</p>
      <p class="ws-sub">${w.title} · ${w.line}</p>
      <p class="ws-hint"><i class="ti ti-hand-finger"></i> Tap the right side to continue</p>
    </div>`);

  // 2. Angka
  slides.push(`
    <div class="ws">
      <p class="ws-kicker">In ${w.year}, I…</p>
      <ul class="ws-stats">
        <li><b>${yProjects.length}</b><span>${yProjects.length === 1 ? "project shipped" : "projects shipped"}</span></li>
        <li><b>${yCerts.length}</b><span>${yCerts.length === 1 ? "certificate earned" : "certificates earned"}</span></li>
        <li><b>${yMilestones.length}</b><span>${yMilestones.length === 1 ? "milestone reached" : "milestones reached"}</span></li>
      </ul>
    </div>`);

  // 3. Top skill
  if (topSkills.length) {
    const [name, n] = topSkills[0];
    slides.push(`
      <div class="ws">
        <p class="ws-kicker">My top skill was</p>
        <h2 class="ws-huge ws-skill">${name}</h2>
        <p class="ws-sub">Used in ${n} of ${plural(yProjects.length, "project")}</p>
        <ol class="ws-rank" start="2">
          ${topSkills.slice(1, 5).map(([t]) => `<li>${t}</li>`).join("")}
        </ol>
      </div>`);
  }

  // 4. Satu slide per project
  yProjects.forEach((p, i) => {
    slides.push(`
      <div class="ws ws-project">
        <p class="ws-kicker">Project ${i + 1} of ${yProjects.length}</p>
        <div class="ws-cover" style="background:${p.color}">${coverHTML(p)}</div>
        <h3 class="ws-title">${p.title}</h3>
        <p class="ws-sub">${p.type || "Project"} · ${p.period || p.year}</p>
        <div class="ws-chips">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        <button class="ws-btn" data-open-project="${p.id}"><i class="ti ti-player-play-filled"></i> Open project</button>
      </div>`);
  });

  // 5. Momen penting
  if (yMilestones.length) {
    slides.push(`
      <div class="ws">
        <p class="ws-kicker">Moments that mattered</p>
        <ul class="ws-list">
          ${yMilestones
            .map(
              (m) => `<li><i class="ti ${m.icon}"></i><div><b>${m.title}</b><span>${m.date} · ${m.text}</span></div></li>`
            )
            .join("")}
        </ul>
      </div>`);
  }

  // 6. Sertifikat
  if (yCerts.length) {
    slides.push(`
      <div class="ws">
        <p class="ws-kicker">Certificates collected</p>
        <div class="ws-certs">
          ${yCerts
            .map(
              (c) => `
              <button class="ws-cert" data-open-cert="${c.index}">
                <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.remove()" />
                <span>${c.title}</span>
              </button>`
            )
            .join("")}
        </div>
      </div>`);
  }

  // 7. Ringkasan
  slides.push(`
    <div class="ws ws-summary">
      <div class="ws-card">
        <p class="ws-kicker">Edbert's ${w.year} Wrapped</p>
        <h3 class="ws-title">${w.title}</h3>
        <div class="ws-card-grid">
          <div><span>Top skill</span><b>${topSkills.length ? topSkills[0][0] : "Learning"}</b></div>
          <div><span>Projects</span><b>${yProjects.length}</b></div>
          <div><span>Certificates</span><b>${yCerts.length}</b></div>
          <div><span>Milestones</span><b>${yMilestones.length}</b></div>
        </div>
        ${
          yProjects.length
            ? `<p class="ws-card-list"><span>Releases</span>${yProjects.map((p) => p.title).join(" · ")}</p>`
            : ""
        }
        <p class="ws-brand"><i class="ti ti-vinyl"></i> edbertify</p>
      </div>
      <div class="ws-actions">
        <button class="ws-btn ghost" data-replay><i class="ti ti-reload"></i> Replay</button>
        <button class="ws-btn" data-close-wrapped>Done</button>
      </div>
    </div>`);

  return slides;
}

function showSlide(i) {
  wIndex = Math.max(0, Math.min(i, wSlides.length - 1));
  wrappedStage.innerHTML = wSlides[wIndex];
  wrappedBars.innerHTML = wSlides
    .map((_, k) => `<span class="${k < wIndex ? "done" : k === wIndex ? "on" : ""}"></span>`)
    .join("");
  document.getElementById("wPrev").disabled = wIndex === 0;
  document.getElementById("wNext").disabled = wIndex === wSlides.length - 1;

  wrappedStage.querySelectorAll("[data-open-project]").forEach((b) =>
      b.addEventListener("click", () => {
      openProject(b.dataset.openProject); // buka dulu, biar posisi Wrapped tersimpan
      closeWrapped();
    })
  );
  wrappedStage.querySelectorAll("[data-open-cert]").forEach((b) =>
    b.addEventListener("click", () => openCert(Number(b.dataset.openCert)))
  );
  const replay = wrappedStage.querySelector("[data-replay]");
  if (replay) replay.addEventListener("click", () => showSlide(0));
  const done = wrappedStage.querySelector("[data-close-wrapped]");
  if (done) done.addEventListener("click", closeWrapped);
}

function openWrapped(i) {
  const w = wrappedYears[i];
  wYear = i;
  wSlides = buildSlides(w);
  wrappedModal.style.setProperty("--c1", w.colors[0]);
  wrappedModal.style.setProperty("--c2", w.colors[1]);
  wrappedModal.classList.add("open");
  wrappedModal.setAttribute("aria-hidden", "false");
  showSlide(0);
}

function closeWrapped() {
  wrappedModal.classList.remove("open");
  wrappedModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-wrapped]").forEach((card) =>
  card.addEventListener("click", () => openWrapped(Number(card.dataset.wrapped)))
);
document.getElementById("wPrev").addEventListener("click", () => showSlide(wIndex - 1));
document.getElementById("wNext").addEventListener("click", () => showSlide(wIndex + 1));
document.getElementById("wClose").addEventListener("click", closeWrapped);
wrappedModal.addEventListener("click", (e) => { if (e.target === wrappedModal) closeWrapped(); });

// Klik sisi kiri / kanan slide = mundur / maju (kecuali klik tombol)
wrappedStage.addEventListener("click", (e) => {
  if (e.target.closest("button, a")) return;
  const r = wrappedStage.getBoundingClientRect();
  showSlide(wIndex + (e.clientX - r.left < r.width * 0.3 ? -1 : 1));
});

// Swipe di HP
let touchX = null;
wrappedStage.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
wrappedStage.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) showSlide(wIndex + (dx < 0 ? 1 : -1));
  touchX = null;
});

// Keyboard: panah kiri/kanan, Esc
window.addEventListener("keydown", (e) => {
  if (!wrappedModal.classList.contains("open")) return;
  if (certModal.classList.contains("open")) return; // sertifikat sedang dibuka di atasnya
  if (e.key === "ArrowRight") showSlide(wIndex + 1);
  if (e.key === "ArrowLeft") showSlide(wIndex - 1);
  if (e.key === "Escape") closeWrapped();
}, true);