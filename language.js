(function () {
  const languages = ["kk", "ru", "en"];
  const labels = {
    kk: "ҚАЗ",
    ru: "РУС",
    en: "ENG",
  };

  const ui = {
    kk: {
      htmlLang: "kk",
      title: "Тұрсын Files",
      description: "Тұрсын портфолиосы: SMM дизайн, верстка және графикалық дизайн.",
      languageLabel: "Тіл таңдау",
      marquee: "Тұрсын / SMM дизайнер / Верстка дизайнері / Графикалық дизайнер /",
      sampleWork: "Жұмыстар",
      openCase: "Кейсті ашу",
      aboutButton: "Мен туралы",
      aboutButtonSmall: "Жеке файл",
      aboutBoardTitle: "Мен туралы / файлдарды сүйре",
      profileTitle: "Мен Тұрсынмын",
      dragHint: "← Сүйре →",
      aboutKicker: "Мен туралы",
      aboutCopy:
        "Сәлем! Мен бірінші көзқарастан әсер қалдыратын жобалар жасайтын дизайнермін. Мен үшін дизайн жай ғана әдемі сурет емес, идеяны анық жеткізетін құрал.",
      rolesKicker: "Рөлдер",
      roleSmm: "SMM дизайнер",
      roleLayout: "Верстка дизайнері",
      roleGraphic: "Графикалық дизайнер",
      processCopy:
        "Жылдам жұмыс істеймін, детальға мұқият қараймын және жобаны мақтануға болатын нәтижеге дейін жеткіземін.",
      contacts: "Байланыс",
      caseBack: "Жұмыстарға қайту",
      caseFile: "Кейс файлы",
      roleLabel: "Рөл",
      yearLabel: "Жыл",
      categoryLabel: "Бағыт",
      visualArchive: "Визуал архиві",
      selectedDesigns: "Таңдалған дизайндар",
      brief: "Тапсырма",
      idea: "Идея",
      result: "Нәтиже",
      caseNote: "Кейс жазбасы",
      previous: "Алдыңғы",
      next: "Келесі",
      projectDetails: "Жоба мәліметтері",
      projectVisuals: "Жоба визуалдары",
      visualDirection: "Визуал бағыты",
      otherProjects: "Басқа жобалар",
      designCaption: "дизайн",
    },
    ru: {
      htmlLang: "ru",
      title: "Тұрсын Files",
      description: "Портфолио Тұрсын: SMM дизайн, верстка и графический дизайн.",
      languageLabel: "Выбор языка",
      marquee: "Тұрсын / SMM дизайнер / Дизайнер-верстальщик / Графический дизайнер /",
      sampleWork: "Работы",
      openCase: "Открыть кейс",
      aboutButton: "Обо мне",
      aboutButtonSmall: "Личный файл",
      aboutBoardTitle: "Обо мне / двигай файлы",
      profileTitle: "Я Тұрсын",
      dragHint: "← Двигай →",
      aboutKicker: "Обо мне",
      aboutCopy:
        "Привет! Я дизайнер, который любит создавать проекты, цепляющие с первого взгляда. Для меня дизайн — это не просто красивая картинка, а инструмент, который помогает выделиться и донести нужную идею.",
      rolesKicker: "Роли",
      roleSmm: "SMM дизайнер",
      roleLayout: "Дизайнер-верстальщик",
      roleGraphic: "Графический дизайнер",
      processCopy:
        "Работаю быстро, внимательно отношусь к деталям и всегда довожу проект до результата, которым можно гордиться.",
      contacts: "Контакты",
      caseBack: "Назад к работам",
      caseFile: "Кейс",
      roleLabel: "Роль",
      yearLabel: "Год",
      categoryLabel: "Категория",
      visualArchive: "Архив визуалов",
      selectedDesigns: "Выбранные дизайны",
      brief: "Задача",
      idea: "Идея",
      result: "Результат",
      caseNote: "Заметка кейса",
      previous: "Предыдущий",
      next: "Следующий",
      projectDetails: "Детали проекта",
      projectVisuals: "Визуалы проекта",
      visualDirection: "Визуальное направление",
      otherProjects: "Другие проекты",
      designCaption: "дизайн",
    },
    en: {
      htmlLang: "en",
      title: "Tursyn Files",
      description: "Tursyn portfolio: SMM design, layout design, and graphic design.",
      languageLabel: "Language switcher",
      marquee: "Tursyn / SMM designer / Layout designer / Graphic designer /",
      sampleWork: "Work",
      openCase: "Open case",
      aboutButton: "About me",
      aboutButtonSmall: "Personal file",
      aboutBoardTitle: "About me / drag the files",
      profileTitle: "I'm Tursyn",
      dragHint: "← Drag →",
      aboutKicker: "About me",
      aboutCopy:
        "Hi! I am a designer who loves creating projects that catch attention at first glance. For me, design is not just a pretty picture, but a tool that helps an idea stand out.",
      rolesKicker: "Roles",
      roleSmm: "SMM designer",
      roleLayout: "Layout designer",
      roleGraphic: "Graphic designer",
      processCopy:
        "I work fast, pay attention to details, and always bring projects to a result that feels worth showing.",
      contacts: "Contacts",
      caseBack: "Back to works",
      caseFile: "Case file",
      roleLabel: "Role",
      yearLabel: "Year",
      categoryLabel: "Category",
      visualArchive: "Visual archive",
      selectedDesigns: "Selected designs",
      brief: "Brief",
      idea: "Idea",
      result: "Result",
      caseNote: "Case note",
      previous: "Previous",
      next: "Next",
      projectDetails: "Project details",
      projectVisuals: "Project visuals",
      visualDirection: "Visual direction",
      otherProjects: "Other projects",
      designCaption: "design",
    },
  };

  const categories = {
    kk: {
      "SMM Design": "SMM дизайн",
      "Графический дизайн": "Графикалық дизайн",
    },
    ru: {
      "SMM Design": "SMM дизайн",
      "Графический дизайн": "Графический дизайн",
    },
    en: {
      "SMM Design": "SMM Design",
      "Графический дизайн": "Graphic Design",
    },
  };

  const roles = {
    kk: {
      "SMM designer": "SMM дизайнер",
      "graphic designer": "Графикалық дизайнер",
    },
    ru: {
      "SMM designer": "SMM дизайнер",
      "graphic designer": "Графический дизайнер",
    },
    en: {
      "SMM designer": "SMM designer",
      "graphic designer": "graphic designer",
    },
  };

  const projectCopy = {
    kk: {
      "alt-university": {
        intro: "ALT үшін студенттік коммуникацияға арналған жарқын серия: ірі типографика және кампус энергиясы.",
        brief: "Лентада бірден көзге түсетін және университет атмосферасын сақтайтын визуалдар жасау.",
        idea: "Фото, 3D мәтін, жарық эффектілері және қанық түстерді біріктіру.",
        result: "Оқиғаларға, клубтарға және анонстарға оңай бейімделетін динамикалық посттар сериясы шықты.",
      },
      edukeys: {
        intro: "Қазақ мәдениетіне сүйенген, типографикасы мықты білім беру постерлері.",
        brief: "Оқу тақырыбын заманауи, сенімді және тез оқылатын форматта көрсету.",
        idea: "Ірі 3D мәтін, жұмсақ градиенттер және ұлттық өрнек мотивтерін қолдану.",
        result: "Білім беру контенті мен анонстарға арналған танымал визуал стилі қалыптасты.",
      },
      nexa: {
        intro: "Қара палитра, 3D объектілер және қысқа офферлерге негізделген технологиялық SMM серия.",
        brief: "B2B аудиториясы үшін брендті сенімді әрі digital форматта көрсету.",
        idea: "Қара фон, жарық акцент, 3D форма және қысқа күшті тақырыптарды біріктіру.",
        result: "Сатылым, сенім және эксперттік контентке жарайтын біртұтас жүйе шықты.",
      },
      "qazaqways-qiwitravel": {
        intro: "Маусымдық сюжеттері мен ірі даталары бар кинематографиялық travel промо-визуалдар.",
        brief: "Саяхат жарнамасын эмоционалды және тез түсінікті ету.",
        idea: "Танымал pop-culture бейнелерін, мерекелік атмосфераны және сары акцентті қолдану.",
        result: "Турлар, бағыттар және маусымдық кампаниялар үшін сатушы визуалдар дайындалды.",
      },
      "asia-park": {
        intro: "Сауда орталығына арналған киношыл, жарқын және event көңіл күйіндегі визуалдар.",
        brief: "Контентті көзге түсетін, достық әрі мерекелік етіп көрсету.",
        idea: "Кейіпкерлерді, нақты фасадтарды, коллаждарды және қанық промо-композицияларды біріктіру.",
        result: "Афиша сияқты жұмыс істейтін серия: назар аудартады және оқиғаға шақырады.",
      },
      "business-growth-academy": {
        intro: "Нәтижеге бағытталған, контрастты бизнес-визуалдар сериясы.",
        brief: "Эксперттік контентті өсу мен әрекет жүйесі ретінде ұсыну.",
        idea: "Қара фон, неон акцент және алға қозғалыс метафораларын пайдалану.",
        result: "Прогрев, анонс және білім беру запусктарына арналған материалдар жинағы шықты.",
      },
      endorphin: {
        intro: "Эффектілі графикасы, ашық объектілері және эмоциясы бар визуал серия.",
        brief: "Жеке постер ретінде есте қалатын визуалдар жасау.",
        idea: "Контраст, пластикалық форма, ірі объектілер және қанық көңіл күйге сүйену.",
        result: "Мінезі күшті, біртұтас визуал кампания шықты.",
      },
      iqanat: {
        intro: "Сенім, түсініктілік және құрылым маңызды білім беру жобасына арналған таза визуал.",
        brief: "Білім беру хабарламаларын заманауи SMM форматына орау.",
        idea: "Анық тақырыптар, ұқыпты акценттер және тыныш сетка қолдану.",
        result: "Жоба коммуникациясына тұрақты қолдануға болатын жүйелі материалдар шықты.",
      },
      "kazakhtelecom-pm": {
        intro: "Қызметтерді қарапайым түсіндіруге бағытталған технологиялық бренд сериясы.",
        brief: "Күрделі сервистік ақпаратты визуалды түрде жеңіл түсіндіру.",
        idea: "Ірі тақырыптар, UI мотивтері және таза digital-композиция.",
        result: "Технологиялық әрі түсінікті посттар желісі дайын болды.",
      },
      langbridge: {
        intro: "Тіл үйрену жобасына арналған ойыншыл және жастарға жақын коммуникация.",
        brief: "Тілді үйренуді жеңіл, жылдам және батыл визуал ретінде көрсету.",
        idea: "Ашық типографика, карточка механикасы және контраст білім элементтері.",
        result: "Рубрикаларға, вовлечениеге және тұрақты публикацияға ыңғайлы серия шықты.",
      },
      "paluan-gym": {
        intro: "Спорт энергиясы, ірі офферлер және қозғалысқа толы фитнес серия.",
        brief: "Жаттығу күшін және клуб артықшылықтарын тез жеткізу.",
        idea: "Қара фон, контраст тақырыптар, динамикалық фото және спорттық ритм.",
        result: "Акция, кесте және мотивациялық посттарға жарайтын қуатты материалдар дайындалды.",
      },
      "samruk-kazyna-store": {
        intro: "E-commerce үшін тауарлық коллаждар мен коммерциялық хабарламалары бар промо-серия.",
        brief: "Тауарлар мен дүкен артықшылықтарын бірнеше секундта түсіндіру.",
        idea: "Ірі заттық композиция, стрелка, күшті тақырып және технологиялық фон.",
        result: "Соцжеліге арналған жылдам сатушы баннерлер сериясы шықты.",
      },
      "blagotvoritelnyy-fond-1": {
        intro: "Жылы визуал ритмі бар әлеуметтік серия.",
        brief: "Қор коммуникациясын көзге түсетін, бірақ адамға жақын және жұмсақ ету.",
        idea: "Эмоциялық акцент, анық иерархия және ұқыпты графика қолдану.",
        result: "Пост, story, есеп және қатысуға шақыруға жарайтын материалдар шықты.",
      },
      "forum-404": {
        intro: "Digital-оқиға атмосферасы бар контрастты event визуалдары.",
        brief: "Іс-шара графикасын заманауи және технологиялық етіп көрсету.",
        idea: "404 қате коды, типографика және glitch көңіл күйімен ойнау.",
        result: "Әртүрлі форматқа жеңіл ауысатын event-айдентика шықты.",
      },
      "ulttyq-tarih-kuni": {
        intro: "Ұлттық тарих күніне арналған салмақты және патриоттық визуал серия.",
        brief: "Тақырыпқа құрметті заманауи, бірақ ұстамды графика арқылы жеткізу.",
        idea: "Символика, күшті типографика және терең түстік акценттерді біріктіру.",
        result: "Ақпараттық кампанияға дайын, біртұтас материалдар шықты.",
      },
      "other-designs": {
        intro: "Коммерциялық және эксперименталды визуалдардың қосымша подборкасы.",
        brief: "Баннерден постқа дейінгі әртүрлі тапсырмалардағы дағдыларды көрсету.",
        idea: "Контраст жұмыстарды бір бөлімде жинап, сапа мен ұқыптылықты сақтау.",
        result: "Қосымша стильдер мен мүмкіндіктерді тез көрсететін бөлім шықты.",
      },
    },
    en: {
      "alt-university": {
        intro: "A bright student communication series for ALT with bold typography and campus energy.",
        brief: "Create visuals that stand out in the feed while keeping a youthful university feel.",
        idea: "Mix photography, 3D lettering, light effects, and saturated colors.",
        result: "A dynamic post system that can scale across events, clubs, and announcements.",
      },
      edukeys: {
        intro: "Educational posters and visuals with Kazakh cultural motifs and strong typography.",
        brief: "Present learning in a modern, confident, and easy-to-read format.",
        idea: "Use bold 3D type, soft gradients, and decorative national patterns.",
        result: "A recognizable visual language for educational content and announcements.",
      },
      nexa: {
        intro: "A tech SMM series built on dark palettes, 3D objects, and strong short offers.",
        brief: "Make the brand feel convincing for B2B audiences and digital services.",
        idea: "Combine dark backgrounds, glowing accents, 3D forms, and direct headlines.",
        result: "A unified system for sales, trust-building, and expert content.",
      },
      "qazaqways-qiwitravel": {
        intro: "Cinematic travel promo visuals with seasonal stories and bold dates.",
        brief: "Make travel advertising emotional and instantly clear.",
        idea: "Use familiar pop-culture imagery, festive mood, and a strong yellow accent.",
        result: "Selling visuals for tours, destinations, and seasonal campaigns.",
      },
      "asia-park": {
        intro: "Entertainment visuals for a mall with bright cinematic event energy.",
        brief: "Make mall content visible, friendly, and festive.",
        idea: "Combine characters, real facades, collages, and saturated promo compositions.",
        result: "A poster-like series that catches attention and leads people to events.",
      },
      "business-growth-academy": {
        intro: "Dense, high-contrast business visuals focused on action and growth.",
        brief: "Package expert content as a clear system of progress.",
        idea: "Use dark backgrounds, neon accents, and visual metaphors of moving forward.",
        result: "A set of materials for warm-ups, announcements, and educational launches.",
      },
      endorphin: {
        intro: "An expressive visual series with bold graphics, vivid objects, and emotional composition.",
        brief: "Create visuals that stay memorable as standalone posters.",
        idea: "Lean into contrast, flexible shapes, large objects, and rich mood.",
        result: "A cohesive visual campaign with a strong personality.",
      },
      iqanat: {
        intro: "A clean educational direction where trust, clarity, and structure matter.",
        brief: "Turn educational messages into a modern social media format.",
        idea: "Build around clear headlines, careful accents, and a calm grid.",
        result: "Systematic materials suitable for regular project communication.",
      },
      "kazakhtelecom-pm": {
        intro: "A tech brand series focused on services, speed, and simple explanation.",
        brief: "Make complex service information visually accessible.",
        idea: "Use bold headlines, UI motifs, and clean digital composition.",
        result: "A line of posts that feels technological and easy to understand.",
      },
      langbridge: {
        intro: "Playful communication for a language project with a youthful pace.",
        brief: "Make language learning feel light, fast, and bold.",
        idea: "Combine bright typography, card mechanics, and contrasting learning elements.",
        result: "A flexible series for engagement, recurring rubrics, and regular posts.",
      },
      "paluan-gym": {
        intro: "A powerful sports series with aggressive energy, large offers, and motion.",
        brief: "Communicate training intensity and club benefits quickly.",
        idea: "Use dark backgrounds, high-contrast headlines, dynamic photos, and a hard sports rhythm.",
        result: "Strong materials for promotions, schedules, and motivational posts.",
      },
      "samruk-kazyna-store": {
        intro: "An e-commerce promo series with product collages and fast commercial messages.",
        brief: "Explain products and store benefits in just a few seconds.",
        idea: "Build large product compositions, arrows, strong headlines, and a tech background.",
        result: "Fast-selling social banners for product promotion.",
      },
      "blagotvoritelnyy-fond-1": {
        intro: "A warm social series with a clear and human visual rhythm.",
        brief: "Make charity communication visible while keeping it gentle and people-focused.",
        idea: "Use emotional accents, clear hierarchy, and careful graphics.",
        result: "Materials for posts, stories, reports, and calls to participate.",
      },
      "forum-404": {
        intro: "Event visuals with a sharp name, contrast, and digital atmosphere.",
        brief: "Create event graphics that feel modern and technological.",
        idea: "Play with the 404 error code, typography, and glitch mood.",
        result: "An event identity that can easily move across different formats.",
      },
      "ulttyq-tarih-kuni": {
        intro: "A respectful patriotic series for a national history day.",
        brief: "Express respect for the topic through modern yet restrained graphics.",
        idea: "Combine symbolism, strong typography, and deep color accents.",
        result: "A cohesive set of materials ready for an informational campaign.",
      },
      "other-designs": {
        intro: "A selection of commercial and experimental visuals from broader design practice.",
        brief: "Show the range of tasks, from banners and posts to presentation graphics.",
        idea: "Bring contrasting works into one section while keeping quality and clarity.",
        result: "A quick overview of additional styles and design skills.",
      },
    },
  };

  function normalizeLanguage(value) {
    return languages.includes(value) ? value : "ru";
  }

  function getLanguage() {
    return normalizeLanguage(localStorage.getItem("tport-language") || "ru");
  }

  function translate(key, lang = getLanguage()) {
    return ui[lang]?.[key] || ui.ru[key] || key;
  }

  function localizeCategory(category, lang = getLanguage()) {
    return categories[lang]?.[category] || category;
  }

  function localizeRole(role, lang = getLanguage()) {
    return roles[lang]?.[role] || role;
  }

  function localizeProject(project, lang = getLanguage()) {
    const copy = projectCopy[lang]?.[project.slug] || {};
    return {
      ...project,
      ...copy,
      category: localizeCategory(project.category, lang),
      role: localizeRole(project.role, lang),
    };
  }

  function setLanguage(lang) {
    const nextLang = normalizeLanguage(lang);
    localStorage.setItem("tport-language", nextLang);
    applyLanguage(nextLang);
    window.dispatchEvent(new CustomEvent("tport:languagechange", { detail: { lang: nextLang } }));
  }

  function updateSwitcher(lang) {
    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const active = button.dataset.langOption === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function applyLanguage(lang = getLanguage()) {
    const strings = ui[lang] || ui.ru;
    document.documentElement.lang = strings.htmlLang;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && !document.body.classList.contains("case-page")) {
      metaDescription.content = strings.description;
    }

    if (!document.body.classList.contains("case-page")) {
      document.title = strings.title;
    }

    document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
      switcher.setAttribute("aria-label", strings.languageLabel);
    });

    if (!document.body.classList.contains("case-page")) {
      document.querySelectorAll(".marquee-track span").forEach((item) => {
        item.textContent = strings.marquee;
      });
      const sampleTitle = document.querySelector(".sample-title");
      if (sampleTitle) sampleTitle.textContent = strings.sampleWork;

      const aboutTitle = document.querySelector(".about-board-title");
      if (aboutTitle) aboutTitle.textContent = strings.aboutBoardTitle;

      const profileTitle = document.querySelector(".profile-overlay h1");
      if (profileTitle) profileTitle.textContent = strings.profileTitle;

      const dragHint = document.querySelector(".profile-overlay p");
      if (dragHint) dragHint.textContent = strings.dragHint;

      const aboutKicker = document.querySelector(".about-copy-card .card-kicker");
      if (aboutKicker) aboutKicker.textContent = strings.aboutKicker;

      const aboutCopy = document.querySelector(".about-copy-card p:last-child");
      if (aboutCopy) aboutCopy.textContent = strings.aboutCopy;

      const rolesKicker = document.querySelector(".skills-card .card-kicker");
      if (rolesKicker) rolesKicker.textContent = strings.rolesKicker;

      const roleItems = document.querySelectorAll(".skills-card .pill-cloud span");
      [strings.roleSmm, strings.roleLayout, strings.roleGraphic, "Branding"].forEach((value, index) => {
        if (roleItems[index]) roleItems[index].textContent = value;
      });

      const processCopy = document.querySelector(".process-card p:not(.card-kicker)");
      if (processCopy) processCopy.textContent = strings.processCopy;

      const contactKicker = document.querySelector(".contact-card .card-kicker");
      if (contactKicker) contactKicker.textContent = strings.contacts;

      const aboutButton = document.querySelector(".about-button");
      if (aboutButton) {
        aboutButton.innerHTML = `<span>${strings.aboutButton}</span><small>${strings.aboutButtonSmall}</small>`;
      }
    }

    updateSwitcher(lang);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang-option]");
    if (button) setLanguage(button.dataset.langOption);
  });

  document.addEventListener("DOMContentLoaded", () => applyLanguage(getLanguage()));

  window.TPORT_I18N = {
    languages,
    labels,
    getLanguage,
    setLanguage,
    t: translate,
    localizeCategory,
    localizeRole,
    localizeProject,
    applyLanguage,
  };
})();
