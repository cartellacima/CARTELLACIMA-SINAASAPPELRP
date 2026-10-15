CARTEL LA CIMA — WEBSITE

BESTANDEN
- index.html: alle inhoud en secties van de website
- style.css: styling, kleuren, layout en mobiele weergave
- script.js: Discord-knoppen, YouTube-video en mobiel menu
- assets/la-cima-logo.png: aangeleverd La Cima-logo
- assets/la-cima-hero.png: gegenereerde bannerafbeelding

VOORDAT JE PUBLICeert
1. Open script.js.
2. Vervang CONFIG.discordUrl door jullie echte Discord-invite-link.
3. Vul CONFIG.youtubeVideoId in met de ID van jullie YouTube-video (alleen de ID, niet de volledige URL).
4. Vervang de twee galerij-vakken in index.html door jullie eigen screenshots als die klaar zijn.
5. Open index.html in je browser om de site lokaal te bekijken.

FOTO'S TOEVOEGEN
Plaats je screenshots in assets/, bijvoorbeeld assets/crew-01.jpg. Vervang in index.html een placeholder <figure class="gallery-item placeholder">...</figure> door:
<figure class="gallery-item">
  <img src="assets/crew-01.jpg" alt="Cartel La Cima crew in FiveM">
  <figcaption><span>02</span><div><b>De familie</b><small>FiveM screenshot</small></div></figcaption>
</figure>

PUBLICEREN
Je kunt deze bestanden uploaden naar een statische hostingdienst of webhosting met HTML/CSS/JS-ondersteuning. De Discord-link werkt zodra je de echte invite hebt ingevuld. De YouTube-embed verschijnt zodra je een video-ID hebt ingevuld.
