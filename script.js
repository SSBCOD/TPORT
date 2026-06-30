const hasGsap = Boolean(window.gsap && window.ScrollTrigger);

if (hasGsap) {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = window.portfolioProjects || [];
const i18n = () => window.TPORT_I18N;

const tapeColors = ["#e64b42", "#ffd84d", "#171717", "#3e82ff", "#8b66d9"];
const tilts = [-3.5, 2.4, -1.8, 3.7, -2.7, 1.4, -3.1, 2.9, -0.9, 3.2, -2.2, 1.9, -3.8];
const tapeTilts = [3, -4, 2, -2, 5, -3, 4, -5, 2, -2, 4, -3, 5];
const toolApps = [
  { name: "Photoshop", short: "Ps", bg: "#071a3d", color: "#69c9ff", border: "#69c9ff" },
  { name: "Illustrator", short: "Ai", bg: "#321705", color: "#ff9a00", border: "#ff9a00" },
  { name: "After Effects", short: "Ae", bg: "#171247", color: "#beb6ff", border: "#beb6ff" },
  { name: "Premiere Pro", short: "Pr", bg: "#1a1247", color: "#d5b8ff", border: "#d5b8ff" },
  { name: "InDesign", short: "Id", bg: "#341022", color: "#ff77bd", border: "#ff77bd" },
  { name: "Lightroom", short: "Lr", bg: "#082633", color: "#7fe6ff", border: "#7fe6ff" },
  { name: "Figma", short: "Fg", bg: "#101010", color: "#ffffff", border: "#f24e1e" },
  { name: "CapCut", short: "Cc", bg: "#ffffff", color: "#111111", border: "#ffffff" },
  { name: "Canva", short: "Ca", bg: "#00a2ff", color: "#ffffff", border: "#73f0ff" },
  { name: "Blender", short: "Bl", bg: "#261200", color: "#ff8a00", border: "#ffb347" },
  { name: "Notion", short: "No", bg: "#f6f1e7", color: "#111111", border: "#f6f1e7" },
  { name: "Meta Ads", short: "M", bg: "#062c65", color: "#8ed1ff", border: "#8ed1ff" },
];

const track = document.querySelector("#projectTrack");
const avatarFrame = document.querySelector(".portrait-frame");
const avatarImage = document.querySelector(".portrait-frame img");
const profileCard = document.querySelector(".profile-drag-card");
const profileImage = document.querySelector(".profile-drag-card img");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (avatarImage) {
  avatarImage.addEventListener("error", () => {
    avatarFrame.classList.add("is-missing");
    avatarImage.remove();
  });
}

if (profileImage) {
  profileImage.addEventListener("error", () => {
    profileCard.classList.add("is-missing");
    profileImage.remove();
  });
}

function createProjectCard(project, index) {
  const localizedProject = i18n()?.localizeProject(project) || project;
  const openCase = i18n()?.t("openCase") || "Open case";
  const cover = project.image || project.images?.[0] || "";
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = `project.html?case=${project.slug}`;
  card.setAttribute("aria-label", `${openCase}: ${localizedProject.title}`);
  card.style.setProperty("--tilt", `${tilts[index % tilts.length]}deg`);
  card.style.setProperty("--tape", tapeColors[index % tapeColors.length]);
  card.style.setProperty("--tape-tilt", `${tapeTilts[index % tapeTilts.length]}deg`);

  const paper = document.createElement("div");
  paper.className = "paper";

  const visual = document.createElement("div");
  visual.className = "project-visual";

  const image = document.createElement("img");
  image.src = cover;
  image.alt = localizedProject.title;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    visual.classList.add("is-missing");
  });

  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";
  placeholder.textContent = localizedProject.title;

  visual.append(image, placeholder);
  paper.appendChild(visual);

  const title = document.createElement("h2");
  title.className = "project-title";
  title.textContent = localizedProject.title;

  const category = document.createElement("p");
  category.className = "project-category";
  category.textContent = localizedProject.category;

  const cue = document.createElement("span");
  cue.className = "project-open-cue";
  cue.textContent = openCase;

  card.append(paper, title, category, cue);
  return card;
}

function createAboutCard() {
  const aboutLabel = i18n()?.t("aboutButton") || "About me";
  const aboutSmall = i18n()?.t("aboutButtonSmall") || "Personal file";
  const card = document.createElement("div");
  card.className = "about-card";

  const button = document.createElement("button");
  button.className = "about-button";
  button.type = "button";
  button.innerHTML = `<span>${aboutLabel}</span><small>${aboutSmall}</small>`;
  button.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  card.appendChild(button);
  return card;
}

function renderProjects() {
  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    fragment.appendChild(createProjectCard(project, index));
  });

  fragment.appendChild(createAboutCard());
  track.replaceChildren(fragment);
}

function setupIntroReveal() {
  if (!hasGsap || reduceMotion) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "+=100%",
        scrub: 0.8,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      },
    })
    .to(".intro-cover", {
      yPercent: -104,
      ease: "none",
    });
}

function setupHorizontalRail() {
  if (!hasGsap || reduceMotion || window.matchMedia("(max-width: 640px)").matches) {
    return;
  }

  const distance = () => {
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    return Math.max(0, trackWidth - viewportWidth);
  };

  gsap.to(track, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      trigger: "#work",
      start: "top top",
      end: () => `+=${distance()}`,
      scrub: 0.85,
      pin: ".work-pin",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

function createToolIcon(app, index) {
  const icon = document.createElement("div");
  icon.className = "tool-icon";
  icon.setAttribute("aria-label", app.name);
  icon.style.setProperty("--tool-bg", app.bg);
  icon.style.setProperty("--tool-color", app.color);
  icon.style.setProperty("--tool-border", app.border);
  icon.dataset.index = String(index);

  const mark = document.createElement("strong");
  mark.textContent = app.short;

  const label = document.createElement("span");
  label.textContent = app.name;

  icon.append(mark, label);
  return icon;
}

function setupToolsOrbit() {
  const section = document.querySelector(".tools-section");
  const orbit = document.querySelector("#toolsOrbit");
  if (!section || !orbit) return;

  const icons = toolApps.map(createToolIcon);
  orbit.append(...icons);

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const lerp = (from, to, progress) => from + (to - from) * progress;
  const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);

  function getStartPosition(index, width, height) {
    const side = index % 4;
    const spreadX = (index % 3 - 1) * width * 0.16;
    const spreadY = ((index * 2) % 5 - 2) * height * 0.08;
    const outsideX = width / 2 + 130;
    const outsideY = height / 2 + 130;

    if (side === 0) return { x: -outsideX, y: spreadY, rotate: -34 };
    if (side === 1) return { x: outsideX, y: spreadY, rotate: 32 };
    if (side === 2) return { x: spreadX, y: -outsideY, rotate: -18 };
    return { x: spreadX, y: outsideY, rotate: 22 };
  }

  function updateOrbit(progress) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width <= 640;
    const rx = isMobile ? Math.min(width * 0.34, 145) : Math.min(width * 0.36, 470);
    const ry = isMobile ? Math.min(height * 0.27, 230) : Math.min(height * 0.25, 245);
    const assemble = easeOut(progress / 0.42);
    const spinProgress = clamp((progress - 0.25) / 0.75);
    const spin = spinProgress * Math.PI * 2 * 1.35;

    icons.forEach((icon, index) => {
      const baseAngle = -Math.PI / 2 + (Math.PI * 2 * index) / icons.length;
      const angle = baseAngle + spin;
      const targetX = Math.cos(angle) * rx;
      const targetY = Math.sin(angle) * ry;
      const start = getStartPosition(index, width, height);
      const x = lerp(start.x, targetX, assemble);
      const y = lerp(start.y, targetY, assemble);
      const rotate = lerp(start.rotate, spinProgress * 360 + index * 4, assemble);
      const scale = lerp(0.68, isMobile ? 0.86 : 1, assemble);

      icon.style.opacity = String(lerp(0, 1, assemble));
      icon.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) rotate(${rotate}deg) scale(${scale})`;
    });
  }

  if (reduceMotion) {
    updateOrbit(1);
    return;
  }

  updateOrbit(0);

  if (hasGsap) {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=165%",
      scrub: 0.9,
      pin: ".tools-pin",
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => updateOrbit(self.progress),
      onRefresh: (self) => updateOrbit(self.progress),
    });
    return;
  }

  const updateFromScroll = () => {
    const rect = section.getBoundingClientRect();
    const distance = Math.max(1, section.offsetHeight - window.innerHeight);
    updateOrbit(clamp(-rect.top / distance));
  };

  window.addEventListener("scroll", updateFromScroll, { passive: true });
  window.addEventListener("resize", updateFromScroll);
  updateFromScroll();
}

function setupDraggableCards() {
  if (window.matchMedia("(max-width: 640px)").matches) return;

  const cards = [...document.querySelectorAll("[data-drag-card]")];
  let topLayer = 20;

  const layoutScale = () => Math.min(1, Math.max(0.42, (window.innerWidth - 80) / 1180));

  cards.forEach((card) => {
    const baseX = Number(card.dataset.x || 0);
    const baseY = Number(card.dataset.y || 0);
    const rotate = Number(card.dataset.r || 0);
    const startX = Math.round(baseX * layoutScale());
    const startY = Math.round(baseY * Math.min(1, Math.max(0.72, window.innerHeight / 900)));

    card.dataset.currentX = startX;
    card.dataset.currentY = startY;
    card.dataset.rotate = rotate;
    card.style.zIndex = String(topLayer++);
    moveCard(card, startX, startY, rotate);

    card.addEventListener("pointerdown", (event) => {
      if (event.target.closest("a")) return;
      event.preventDefault();

      const originX = Number(card.dataset.currentX || 0);
      const originY = Number(card.dataset.currentY || 0);
      const originRotate = Number(card.dataset.rotate || 0);
      const startPointerX = event.clientX;
      const startPointerY = event.clientY;

      card.classList.add("is-dragging");
      card.style.zIndex = String(topLayer++);
      card.setPointerCapture(event.pointerId);

      const onPointerMove = (moveEvent) => {
        const nextX = originX + moveEvent.clientX - startPointerX;
        const nextY = originY + moveEvent.clientY - startPointerY;
        card.dataset.currentX = nextX;
        card.dataset.currentY = nextY;
        moveCard(card, nextX, nextY, originRotate);
      };

      const onPointerUp = () => {
        card.classList.remove("is-dragging");
        card.removeEventListener("pointermove", onPointerMove);
        card.removeEventListener("pointerup", onPointerUp);
        card.removeEventListener("pointercancel", onPointerUp);
      };

      card.addEventListener("pointermove", onPointerMove);
      card.addEventListener("pointerup", onPointerUp);
      card.addEventListener("pointercancel", onPointerUp);
    });
  });
}

function moveCard(card, x, y, rotate) {
  card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg)`;
}

renderProjects();
setupIntroReveal();
setupHorizontalRail();
setupToolsOrbit();
setupDraggableCards();

window.addEventListener("load", () => {
  if (hasGsap) {
    ScrollTrigger.refresh();
  }
});

window.addEventListener("tport:languagechange", () => {
  renderProjects();

  if (hasGsap) {
    ScrollTrigger.refresh();
  }
});
