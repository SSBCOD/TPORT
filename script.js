const hasGsap = Boolean(window.gsap && window.ScrollTrigger);

if (hasGsap) {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = window.portfolioProjects || [];

const tapeColors = ["#e64b42", "#ffd84d", "#171717", "#3e82ff", "#8b66d9"];
const tilts = [-3.5, 2.4, -1.8, 3.7, -2.7, 1.4, -3.1, 2.9, -0.9, 3.2, -2.2, 1.9, -3.8];
const tapeTilts = [3, -4, 2, -2, 5, -3, 4, -5, 2, -2, 4, -3, 5];

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
  const cover = project.image || project.images?.[0] || "";
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = `project.html?case=${project.slug}`;
  card.setAttribute("aria-label", `Открыть проект ${project.title}`);
  card.style.setProperty("--tilt", `${tilts[index % tilts.length]}deg`);
  card.style.setProperty("--tape", tapeColors[index % tapeColors.length]);
  card.style.setProperty("--tape-tilt", `${tapeTilts[index % tapeTilts.length]}deg`);

  const paper = document.createElement("div");
  paper.className = "paper";

  const visual = document.createElement("div");
  visual.className = "project-visual";

  const image = document.createElement("img");
  image.src = cover;
  image.alt = project.title;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    visual.classList.add("is-missing");
  });

  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";
  placeholder.textContent = project.title;

  visual.append(image, placeholder);
  paper.appendChild(visual);

  const title = document.createElement("h2");
  title.className = "project-title";
  title.textContent = project.title;

  const category = document.createElement("p");
  category.className = "project-category";
  category.textContent = project.category;

  const cue = document.createElement("span");
  cue.className = "project-open-cue";
  cue.textContent = "Open case";

  card.append(paper, title, category, cue);
  return card;
}

function createAboutCard() {
  const card = document.createElement("div");
  card.className = "about-card";

  const button = document.createElement("button");
  button.className = "about-button";
  button.type = "button";
  button.innerHTML = "<span>About me</span><small>Let's get personal</small>";
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
  track.appendChild(fragment);
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

function setupDraggableCards() {
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
setupDraggableCards();

window.addEventListener("load", () => {
  if (hasGsap) {
    ScrollTrigger.refresh();
  }
});
