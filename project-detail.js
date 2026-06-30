const caseProjects = window.portfolioProjects || [];
const params = new URLSearchParams(window.location.search);
const requestedSlug = params.get("case");
const selectedIndex = Math.max(0, caseProjects.findIndex((item) => item.slug === requestedSlug));
const project = caseProjects[selectedIndex] || caseProjects[0];
const i18n = () => window.TPORT_I18N;

function t(key) {
  return i18n()?.t(key) || key;
}

function localize(item) {
  return item ? i18n()?.localizeProject(item) || item : item;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value || "";
}

function setSelectorText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value || "";
}

function setProjectLink(id, item, label) {
  const element = document.getElementById(id);
  const localizedItem = localize(item);
  if (!element || !localizedItem) return;

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const titleElement = document.createElement("strong");
  titleElement.textContent = localizedItem.title;

  element.href = `project.html?case=${item.slug}`;
  element.replaceChildren(labelElement, titleElement);
}

function setStaticLabels() {
  const backLink = document.querySelector(".case-back");
  if (backLink) backLink.textContent = t("caseBack");

  const metaLabels = document.querySelectorAll(".case-meta-grid article span");
  [t("roleLabel"), t("yearLabel"), t("categoryLabel")].forEach((label, index) => {
    if (metaLabels[index]) metaLabels[index].textContent = label;
  });

  setSelectorText(".case-gallery-heading span", t("visualArchive"));
  setSelectorText(".case-gallery-heading h2", t("selectedDesigns"));
  setSelectorText(".case-board-note span", t("caseNote"));

  const storyTitles = document.querySelectorAll(".case-story h2");
  [t("brief"), t("idea"), t("result")].forEach((label, index) => {
    if (storyTitles[index]) storyTitles[index].textContent = label;
  });

  const metaSection = document.querySelector(".case-meta-grid");
  if (metaSection) metaSection.setAttribute("aria-label", t("projectDetails"));

  const gallerySection = document.querySelector(".case-gallery");
  if (gallerySection) gallerySection.setAttribute("aria-label", t("projectVisuals"));

  const boardSection = document.querySelector(".case-board");
  if (boardSection) boardSection.setAttribute("aria-label", t("visualDirection"));

  const nextSection = document.querySelector(".case-next");
  if (nextSection) nextSection.setAttribute("aria-label", t("otherProjects"));
}

function renderProject() {
  if (!project) {
    window.location.href = "index.html#work";
    return;
  }

  const localizedProject = localize(project);
  const title = localizedProject.title;
  const cover = project.image || project.images?.[0] || "";

  setStaticLabels();
  document.title = `${title} | ${t("title")}`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = localizedProject.intro || t("description");

  setText("caseEyebrow", `${String(selectedIndex + 1).padStart(2, "0")} / ${localizedProject.category}`);
  setText("caseTitle", title);
  setText("caseIntro", localizedProject.intro);
  setText("caseRole", localizedProject.role);
  setText("caseYear", localizedProject.year);
  setText("caseCategory", localizedProject.category);
  setText("caseBrief", localizedProject.brief);
  setText("caseIdea", localizedProject.idea);
  setText("caseResult", localizedProject.result);
  setText("caseBoardTitle", title);

  const image = document.getElementById("caseImage");
  const imageFrame = document.getElementById("caseImageFrame");
  const placeholder = document.getElementById("caseImagePlaceholder");

  if (image && imageFrame && placeholder) {
    imageFrame.classList.remove("is-missing");
    image.style.display = "";
    image.src = cover;
    image.alt = title;
    placeholder.textContent = title;
    image.onerror = () => {
      imageFrame.classList.add("is-missing");
      image.style.display = "none";
    };
    image.onload = () => {
      imageFrame.classList.remove("is-missing");
      image.style.display = "";
    };
  }

  const tags = document.getElementById("caseTags");
  if (tags) {
    tags.replaceChildren(
      ...(project.tags || []).map((tag) => {
        const item = document.createElement("span");
        item.textContent = tag;
        return item;
      })
    );
  }

  const gallery = document.getElementById("caseGallery");
  if (gallery) {
    gallery.replaceChildren(
      ...(project.images || []).map((src, index) => {
        const figure = document.createElement("figure");
        figure.className = "case-gallery-card";
        figure.style.setProperty("--float-delay", `${index * -1.6}s`);
        figure.style.setProperty("--float-distance", `${10 + (index % 3) * 6}px`);

        const itemImage = document.createElement("img");
        itemImage.src = src;
        itemImage.alt = `${title} ${t("designCaption")} ${index + 1}`;
        itemImage.loading = index > 1 ? "lazy" : "eager";

        const caption = document.createElement("figcaption");
        caption.textContent = `${String(index + 1).padStart(2, "0")} / ${title}`;

        figure.append(itemImage, caption);
        return figure;
      })
    );
  }

  const previous = caseProjects[(selectedIndex - 1 + caseProjects.length) % caseProjects.length];
  const next = caseProjects[(selectedIndex + 1) % caseProjects.length];
  setProjectLink("prevProject", previous, t("previous"));
  setProjectLink("nextProject", next, t("next"));
}

renderProject();
window.addEventListener("tport:languagechange", renderProject);
