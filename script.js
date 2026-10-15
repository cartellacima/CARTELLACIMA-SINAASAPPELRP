
/* CARTEL LA CIMA — Websiteconfiguratie */
const CONFIG = {
  discordUrl: "https://discord.gg/J8NvURpN7F",
  youtubeVideoId: "KcJ9idXWCos"
};

/* Discord-links instellen */
document.querySelectorAll(".discord-link").forEach((link) => {
  link.href = CONFIG.discordUrl;
});

/* YouTube-video laden */
const videoFrame = document.querySelector("[data-video-frame], #videoFrame");

if (videoFrame && CONFIG.youtubeVideoId) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${CONFIG.youtubeVideoId}`;
  iframe.title = "Cartel La Cima YouTube-video";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  videoFrame.replaceChildren(iframe);
}

/* Navigatiemenu */
const menuToggle = document.querySelector("[data-menu-toggle], #menuToggle");
const siteNav = document.querySelector("[data-nav-menu], #siteNav");

if (menuToggle && siteNav) {
  function openMenu() {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Menu sluiten");
    siteNav.classList.add("is-open", "open");
    siteNav.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menu openen");
    siteNav.classList.remove("is-open", "open");
    siteNav.setAttribute("aria-hidden", "true");
  }

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
    } else {
      openMenu();
    }
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" &&
        menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });
}

/* Huidig jaartal */
document.querySelectorAll("[data-year], #year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

