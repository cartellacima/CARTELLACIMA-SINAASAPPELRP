// CARTEL LA CIMA — pas de links aan in CONFIG voordat je publiceert.
const CONFIG = {
  // Vervang dit door je echte invite, bijvoorbeeld https://discord.gg/jouwcode
  discordUrl: "https://discord.gg/J8NvURpN7F",
  // Plak de YouTube-video-ID, bijvoorbeeld uit https://www.youtube.com/watch?v=VIDEO_ID
  youtubeVideoId: "https://www.youtube.com/watch?v=KcJ9idXWCos"
};

document.querySelectorAll(".discord-link").forEach((link) => {
  link.href = CONFIG.discordUrl;
  link.addEventListener("click", (event) => {
    if (!CONFIG.discordUrl || CONFIG.discordUrl.includes("https://discord.gg/J8NvURpN7F")) {
      event.preventDefault();
      alert("Stel eerst je echte Discord-uitnodigingslink in bovenaan script.js (CONFIG.discordUrl).");
    }
  });
});

const videoFrame = document.getElementById("videoFrame");
if (CONFIG.youtubeVideoId.trim()) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(CONFIG.youtubeVideoId.trim())}`;
  iframe.title = "Cartel La Cima YouTube-video";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  videoFrame.replaceChildren(iframe);
}

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
