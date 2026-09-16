// Shared header + nav drawer, injected into every page.
// Usage: call initNav({ page: 'home', title: 'Wheel of the Year', eyebrow: '' })
(function () {
  const PAGES = [
    { id: 'home', href: 'index.html', label: 'Wheel of the Year', glyph: '☸' },
    { id: 'solar', href: 'solar-hours.html', label: 'Solar Hours', glyph: '☉' },
    { id: 'moon', href: 'moon-cycle.html', label: 'Moon Cycles', glyph: '☽' },
    { id: 'astrology', href: 'astrology.html', label: 'Astrology', glyph: '✶' },
    { id: 'tarot', href: 'tarot.html', label: 'Tarot', glyph: '🜁' },
    { id: 'pyramid', href: 'pyramid.html', label: "Witches' Pyramid", glyph: '▲' },
    { id: 'herbs', href: 'herbs.html', label: 'Herbs', glyph: '❧' },
    { id: 'crystals', href: 'crystals.html', label: 'Crystals', glyph: '◆' },
    { id: 'chakras', href: 'chakras.html', label: 'Chakras', glyph: '✺' }
  ];

  window.initNav = function ({ page, title, eyebrow }) {
    const header = document.createElement('header');
    header.className = 'app-header';
    header.innerHTML = `
      <button class="menu-btn" id="menuBtn" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <span class="brand-icon" aria-hidden="true">
        <svg viewBox="-160 -160 320 320"><path d="M -4.06,129.52 L -5.38,128.87 L -8.28,123.75 L -11.54,119.54 L -18.76,103.89 L -22.24,93.06 L -24.12,84.18 L -24.90,72.60 L -24.66,59.06 L -24.01,53.19 L -29.19,50.44 L -37.77,44.77 L -44.69,37.93 L -50.46,29.87 L -56.06,17.53 L -74.03,19.36 L -88.32,17.94 L -96.97,16.17 L -105.63,13.59 L -118.56,7.74 L -122.93,4.58 L -127.29,2.22 L -129.46,0.38 L -129.90,-0.83 L -129.40,-2.13 L -122.78,-7.63 L -110.59,-14.01 L -98.25,-18.75 L -88.47,-21.11 L -79.90,-22.19 L -64.40,-22.49 L -55.67,-21.45 L -54.77,-21.74 L -52.93,-25.80 L -48.38,-33.63 L -41.11,-42.20 L -32.05,-49.27 L -21.82,-54.72 L -22.84,-61.46 L -23.10,-75.61 L -22.35,-82.38 L -19.71,-94.30 L -12.14,-112.02 L -8.96,-118.34 L -4.13,-125.26 L -0.74,-128.72 L 0.90,-129.41 L 2.11,-128.89 L 3.81,-127.07 L 9.14,-118.34 L 13.93,-107.66 L 16.96,-98.03 L 18.53,-90.80 L 20.41,-75.16 L 18.32,-55.75 L 26.78,-52.05 L 31.00,-49.61 L 36.86,-45.54 L 42.88,-40.12 L 49.54,-30.92 L 51.46,-26.26 L 53.56,-23.12 L 61.09,-24.12 L 75.23,-24.27 L 88.32,-22.46 L 99.00,-19.55 L 106.05,-16.48 L 123.83,-5.74 L 129.85,-0.55 L 130.38,0.98 L 129.40,2.84 L 115.86,11.45 L 104.72,16.87 L 99.16,18.62 L 83.06,22.64 L 76.28,23.31 L 68.01,23.61 L 53.87,22.45 L 53.11,23.19 L 48.15,32.86 L 45.54,36.49 L 41.35,41.00 L 36.86,45.12 L 31.30,49.07 L 19.41,54.89 L 19.23,55.75 L 20.23,60.26 L 20.68,68.39 L 18.59,85.54 L 15.51,97.12 L 10.29,109.76 L 6.66,116.08 L 0.76,124.96 L -2.77,129.02 Z M -9.48,-57.77 L -2.41,-58.74 L 7.37,-58.22 L 7.90,-58.76 L 9.55,-65.23 L 10.68,-80.57 L 8.88,-95.47 L 7.75,-102.24 L 4.51,-112.92 L 1.52,-120.30 L 0.15,-122.45 L -3.63,-116.23 L -7.26,-107.96 L -11.11,-94.57 L -10.96,-92.46 L -12.19,-80.91 L -12.10,-69.59 L -10.60,-58.76 Z M -2.56,-35.31 L -1.20,-36.80 L 1.56,-41.90 L 4.25,-48.22 L 3.91,-49.16 L -3.91,-49.34 L -7.85,-48.52 L -6.26,-42.81 Z M 43.63,-21.11 L 43.11,-22.95 L 39.42,-29.11 L 33.85,-35.36 L 30.54,-38.33 L 25.24,-42.05 L 16.10,-46.36 L 15.38,-45.82 L 10.58,-33.93 L 4.70,-23.25 L 9.22,-17.08 L 17.00,-9.08 L 30.39,-16.42 Z M -45.69,-19.18 L -32.50,-14.13 L -24.98,-10.18 L -22.27,-11.78 L -17.60,-15.73 L -10.90,-23.10 L -16.13,-34.68 L -19.56,-44.96 L -20.31,-45.09 L -22.72,-44.06 L -26.18,-41.63 L -27.69,-41.20 L -34.76,-35.62 L -39.27,-30.64 L -42.74,-25.95 L -45.76,-20.24 Z M 57.00,-12.71 L 58.02,-2.63 L 58.08,3.23 L 56.92,11.51 L 60.94,12.74 L 77.19,14.63 L 89.07,13.66 L 99.46,11.32 L 106.38,9.11 L 114.50,5.49 L 121.95,0.98 L 119.92,-1.00 L 107.13,-7.64 L 89.07,-13.06 L 74.03,-14.72 L 61.99,-14.08 L 57.78,-13.44 Z M -57.97,-10.46 L -58.83,-11.38 L -68.46,-12.94 L -77.19,-13.51 L -89.83,-13.08 L -98.85,-11.49 L -111.34,-7.56 L -117.94,-3.39 L -120.29,-1.13 L -118.72,0.00 L -108.94,4.05 L -96.97,7.30 L -87.42,8.69 L -80.20,8.96 L -66.20,7.92 L -59.73,6.63 L -58.61,5.94 L -58.76,-4.14 Z M -2.56,7.74 L 5.97,-0.98 L -3.76,-12.24 L -13.82,-2.48 Z M 48.00,8.73 L 48.87,1.88 L 48.82,-2.93 L 48.13,-9.55 L 47.55,-10.67 L 42.43,-9.20 L 35.51,-6.29 L 27.50,-1.58 L 27.79,-0.83 L 37.01,4.64 L 47.09,9.00 Z M -49.84,2.93 L -48.90,3.27 L -43.33,1.11 L -36.71,-2.16 L -36.28,-2.93 L -43.78,-6.85 L -48.60,-8.06 L -49.41,-6.09 L -50.00,-1.43 Z M -22.42,43.79 L -15.42,26.86 L -10.38,18.28 L -14.88,12.86 L -20.01,8.12 L -24.53,4.80 L -34.46,10.10 L -46.04,14.62 L -46.79,15.18 L -46.88,16.63 L -42.45,25.80 L -37.20,32.88 L -28.44,40.46 Z M 17.91,45.38 L 26.03,41.26 L 33.55,35.26 L 40.12,27.61 L 44.02,20.84 L 43.18,20.12 L 38.97,18.96 L 30.69,15.55 L 21.37,10.53 L 15.95,6.76 L 8.12,13.79 L 5.27,17.23 L 11.87,29.27 L 15.12,37.24 L 17.18,44.76 Z M 6.17,47.90 L 6.42,47.02 L 2.93,38.29 L -2.18,28.81 L -2.86,28.68 L -7.09,35.89 L -11.46,47.32 L -9.03,47.99 L -2.26,48.40 Z M -3.61,120.05 L -2.60,119.39 L 0.95,114.28 L 5.29,106.90 L 8.33,97.88 L 10.96,83.28 L 11.19,73.35 L 10.52,64.32 L 9.37,58.00 L 8.88,57.30 L 0.75,58.17 L -7.67,57.53 L -13.24,56.54 L -14.11,57.25 L -15.68,74.55 L -14.37,90.80 L -12.13,100.13 L -9.47,107.96 L -5.92,116.53 Z" fill="currentColor" fill-rule="evenodd"/></svg>
      </span>
      <div>
        ${eyebrow ? `<span class="page-eyebrow">${eyebrow}</span>` : ''}
        <h1>${title}</h1>
      </div>
    `;

    const scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    scrim.id = 'navScrim';

    const drawer = document.createElement('nav');
    drawer.className = 'nav-drawer';
    drawer.id = 'navDrawer';
    drawer.innerHTML = `
      <div class="drawer-title">Alyssa's Guide <span class="title-accent">to</span> Witchcraft</div>
      ${PAGES.map(p => `<a href="${p.href}" class="${p.id === page ? 'active' : ''}"><span class="glyph">${p.glyph}</span>${p.label}</a>`).join('')}
    `;

    document.body.prepend(drawer);
    document.body.prepend(scrim);
    document.body.prepend(header);

    const shell = document.querySelector('.app-shell');
    if (shell) shell.prepend(header); // header should sit inside shell for max-width alignment

    function open() { scrim.classList.add('open'); drawer.classList.add('open'); }
    function close() { scrim.classList.remove('open'); drawer.classList.remove('open'); }
    document.getElementById('menuBtn').addEventListener('click', open);
    scrim.addEventListener('click', close);
  };
})();
