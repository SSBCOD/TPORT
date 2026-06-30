const caseProjects = window.portfolioProjects || [];
const params = new URLSearchParams(window.location.search);
const requestedSlug = params.get("case");
const selectedIndex = Math.max(0, caseProjects.findIndex((item) => item.slug === requestedSlug));
const project = caseProjects[selectedIndex] || caseProjects[0];

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value || "";
}

function setProjectLink(id, item, label) {
  const element = document.getElementById(id);
  if (!element || !item) return;
  element.href = `project.html?case=${item.slug}`;
  element.innerHTML = `<span>${label}</span><strong>${item.title}</strong>`;
}

function renderProject() {
  if (!project) {
    window.location.href = "index.html#work";
    return;
  }

  document.title = `${project.title} | Тұрсын Files`;

  setText("caseEyebrow", `${String(selectedIndex + 1).padStart(2, "0")} / ${project.category}`);
  setText("caseTitle", project.title);
  setText("caseIntro", project.intro);
  setText("caseRole", project.role);
  setText("caseYear", project.year);
  setText("caseCategory", project.category);
  setText("caseBrief", project.brief);
  setText("caseIdea", project.idea);
  setText("caseResult", project.result);
  setText("caseBoardTitle", project.title);

  const image = document.getElementById("caseImage");
  const imageFrame = document.getElementById("caseImageFrame");
  const placeholder = document.getElementById("caseImagePlaceholder");

  if (image && imageFrame && placeholder) {
    image.src = project.image;
    image.alt = project.title;
    placeholder.textContent = project.title;
    image.addEventListener("error", () => {
      imageFrame.classList.add("is-missing");
      image.remove();
    });
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

  const previous = caseProjects[(selectedIndex - 1 + caseProjects.length) % caseProjects.length];
  const next = caseProjects[(selectedIndex + 1) % caseProjects.length];
  setProjectLink("prevProject", previous, "Previous");
  setProjectLink("nextProject", next, "Next");
}

renderProject();
