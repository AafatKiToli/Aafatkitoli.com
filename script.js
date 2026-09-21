
const members = [
  {
    name: 'Kashi',
    handle: '@author.shivbhakt',
    role: 'ADMIN 🛡️',
    description: 'Pure-hearted, soft-spoken and somehow one of the sweetest people in the GC. She makes the group feel better just by being around, always looks out for people and makes sure nobody feels left out. Basically the soft soul of the admin trio. 🥹🫶🏻',
    tags: ['soft soul', 'caring', 'bachi energy', 'admin'],
    image: 'kashi.jpg',
    accent: '#9f6473',
    admin: true,
  },
  {
    name: 'Titli',
    handle: '@titlisarkivee',
    role: 'ADMIN 🦋',
    description: 'Sweet until the patience bar hits zero. 😭 Bold, straightforward and absolutely not interested in sugarcoating anything. She cares way more than she lets on and somehow manages to keep the GC functioning while contributing to the chaos herself.',
    tags: ['savage', 'straightforward', 'elder sis energy', 'admin'],
    image: 'titli.jpg',
    accent: '#624a79',
    admin: true,
  },
  {
    name: 'Akshit',
    role: 'ADMIN 🕶️',
    description: 'Usually somewhere between designing something, gaming, overthinking an idea or disappearing into a late-night creative phase. 🎧🖥️ He can be quiet when something actually matters, but once he decides he wants something, good luck changing his mind. Ambitious, stubborn in the best way, a little chaotic, and always trying to turn random ideas into something real. Basically: student + designer + gamer + dreamer with questionable sleep timing. 😭',
    tags: ['designer 🎨', 'gamer 🎮', 'dreamer ✦', 'stubborn', 'late-night energy 🌙'],
    image: 'akshit.jpg',
    accent: '#77777c',
    admin: true,
  },
  {
    name: 'Aylin',
    handle: '@aylinxwrites',
    realName: 'Anshika',
    age: 23,
    role: 'MEMBER',
    description: "Basically a perfect combination of sweetness, sass and pure chaos. 😭 She can be bold and savage one second and genuinely caring the next. She has that kind of energy where people naturally feel included around her. Add her goofy side into the mix and suddenly a normal conversation has turned into complete chaos. She'll roast you, hype you up and still have your back. 🫶🏻",
    tags: ['sweet ✨', 'savage', 'chaotic', 'caring 🫶🏻'],
    image: 'aylin.jpg',
    accent: '#71313d',
  },
  {
    name: 'Krix',
    handle: '@krix.ax',
    realName: 'Krishnansh',
    age: 18,
    role: 'MEMBER',
    description: "He's chaotic enough to turn the most normal conversation into a whole event. 😂 Funny without even trying and somehow always ready with a random comeback. His mood swings deserve their own separate character development. One minute he's all chill, the next he's in a completely different universe. Basically, pure chaos, peak humour and unpredictable energy packed into one person. 💀",
    tags: ['chaos 💀', 'random', 'peak humour', 'unpredictable'],
    image: 'krix.jpg',
    accent: '#30425d',
  },
  {
    name: 'Shayra',
    handle: '@shayra_ki_marzi',
    age: 26,
    role: 'MEMBER',
    description: "The eldest member of the GC and somehow still one of the funniest. 😭 Her chaotic energy has a talent for taking normal conversations completely off track. You never really know what kind of response you're getting, but that's exactly what makes it funny. Elder-sis energy with absolutely no shortage of chaos.",
    tags: ['eldest 👑', 'chaotic', 'funny', 'elder sis'],
    image: 'shayra.jpg',
    accent: '#6f2938',
  },
  {
    name: 'Rose',
    handle: '@pennedwithlove_',
    role: 'MEMBER',
    description: "Genuinely sweet and easygoing. 🌹 She's funny without needing to try too hard and sometimes quietly keeps the whole vibe nice. She cares about the people close to her and has that softer side that makes her really easy to have around.",
    tags: ['sweet 🌹', 'easygoing', 'soft', 'funny'],
    image: 'rose.jpg',
    accent: '#885663',
  },
  {
    name: 'Snow',
    handle: '@snowxwrites',
    realName: 'Kashish',
    age: 21,
    role: 'MEMBER',
    description: "A perfect mix of sweetness and savage energy. ❄️ Bold, confident and never really afraid to say what's on her mind. She genuinely cares about everyone and looks out for people, but can also turn a boring moment into complete chaos without even trying. Somehow capable of roasting you and comforting you in the same conversation. 😭",
    tags: ['savage ❄️', 'confident', 'caring', 'chaos'],
    image: 'snow.jpg',
    accent: '#667b8b',
  },
  {
    name: 'KavyRaag',
    handle: '@kavy_raag17',
    realName: 'Abhinav',
    age: 21,
    role: 'MEMBER',
    description: "The guy who knows exactly when to joke and when to actually be serious. 😭 Funny, chaotic and somehow good at keeping the vibe alive without making everything unnecessarily dramatic. He's genuinely caring and dependable when it matters. Basically a mix of chaos, calmness, intelligence and proper brother energy.",
    tags: ['bro energy 🤝', 'smart', 'chaotic', 'dependable'],
    image: 'kavyraag.jpg',
    accent: '#3d594d',
  },
  {
    name: 'Backatpluto',
    handle: '@backatpluto',
    realName: 'Sham',
    age: 18,
    role: 'MEMBER',
    description: "Somehow manages to make random moments even funnier. 😭 Effortlessly chaotic, unpredictable and usually responsible for making everyone else join the nonsense. You never really know where the conversation is going once he's involved.",
    tags: ['chaos 🪐', 'random', 'comedy', 'unpredictable'],
    image: 'backatpluto.jpg',
    accent: '#54416d',
  },
  {
    name: 'Moon',
    handle: '@author_moonlight14',
    realName: 'Shailja',
    age: 14,
    role: 'MEMBER',
    description: "Has that soft, comforting presence that makes people feel at ease. ☾ She's effortlessly funny and somehow turns random conversations into memorable ones. She genuinely cares about people and notices the little things. Usually calm... until the chaotic side suddenly appears. 😭",
    tags: ['soft ☾', 'comfort', 'funny', 'chaotic'],
    image: 'moon.jpg',
    accent: '#74757e',
  },
  {
    name: 'Ruhi',
    age: 16,
    role: 'MEMBER',
    description: "Genuinely sweet but definitely has a savage side waiting for its moment. 😭 Super talkative and somehow capable of discussing literally anything. She's warm, friendly and easy to talk to, with unexpected comebacks appearing whenever you least expect them.",
    tags: ['talkative 💬', 'sweet', 'savage', 'warm'],
    image: 'ruhi.jpg',
    accent: '#554074',
  },
  {
    name: 'Manav',
    age: 16,
    role: 'MEMBER',
    description: "Nice guy energy. 😭 Easygoing, doesn't talk a lot but still somehow has his own vibe. Slightly childish in the funniest way and randomly spamming stickers is apparently part of the personality.",
    tags: ['quiet', 'sweet', 'stickers 😭', 'childish'],
    image: 'manav.jpg',
    accent: '#5e6268',
  },
  {
    name: 'Avni',
    age: 16,
    role: 'MEMBER',
    description: "Genuinely sweet, warm and easygoing. 🫶🏻 She's the kind of person who's simply easy to get along with and makes people comfortable without really trying. Simple, chill and lovely energy.",
    tags: ['sweet ✨', 'warm', 'chill', 'easygoing'],
    image: 'avni.jpg',
    accent: '#713f4d',
  },
  {
    name: 'Kritika',
    age: 17,
    role: 'MEMBER',
    description: 'Genuinely sweet and naturally funny. 🦖 She has a way of making completely random conversations more fun and adds both warmth and comedy to the GC. Officially the Dino of the group. No further explanation required.',
    tags: ['DINO 🦖', 'sweet', 'funny', 'adorable'],
    image: 'kritika.jpg',
    accent: '#7d3f58',
  },
  {
    name: 'Syeda',
    age: 17,
    role: 'MEMBER',
    description: "Genuinely sweet, friendly and easy to talk to. 🫶🏻 Once she's comfortable, the talking starts and the slightly chaotic side slowly comes out. Warm energy, good vibes and pretty easy to get along with.",
    tags: ['sweet', 'talkative 💬', 'warm', 'chaotic'],
    image: 'syeda.jpg',
    accent: '#997b4f',
  },
  {
    name: 'Shivansh',
    age: 17,
    role: 'MEMBER',
    description: "Has that ‘I'm too cool for this’ attitude while actively keeping the GC entertained. 😭 Talkative, loves ragebaiting and somehow knows exactly how to get a reaction out of people. Pretends it's all for fun... and honestly, it probably is.",
    tags: ['too cool 😎', 'ragebait', 'talkative', 'chaos'],
    image: 'shivansh.jpg',
    accent: '#344b69',
  },
];

const root = document.querySelector('#root');
const instagramLinks = JSON.parse(document.querySelector('#instagram-links').textContent);
const assetSettings = JSON.parse(document.querySelector('#asset-settings')?.textContent || '{}');
const profileImages = assetSettings.profiles || {};
const initials = (name) => name.slice(0, 2).toUpperCase();
const hasOwn = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const assetPath = (value) => {
  const path = String(value || '').trim();
  if (!path) return '';
  return /^(https?:|data:|blob:|\/|\.\/)/i.test(path) ? path : `./${path}`;
};
const imagePath = (member) => assetPath(hasOwn(profileImages, member.name) ? profileImages[member.name] : `assets/pfps/${member.image}`);
const handleFromUrl = (url) => {
  const value = String(url || '').trim();
  if (!value) return '';
  const match = value.match(/instagram\.com\/([^/?#]+)/i);
  return match ? `@${match[1]}` : value.startsWith('@') ? value : `@${value}`;
};
members.forEach((member) => {
  if (Object.prototype.hasOwnProperty.call(instagramLinks, member.name)) {
    member.handle = handleFromUrl(instagramLinks[member.name]);
  }
});

function avatar(member, large = false) {
  const image = imagePath(member);
  return `<div class="avatar${large ? ' large' : ''}" style="--accent:${member.accent}" aria-label="${member.name} profile image">
    <span>${initials(member.name)}</span>
    ${image ? `<img src="${image}" alt="" onerror="this.remove()" />` : ''}
  </div>`;
}

function tags(member) {
  return `<ul class="tag-list">${member.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>`;
}

function profileTop(member) {
  return `<div class="profile-top">${avatar(member)}<div><h3>${member.name}</h3><p class="role">${member.role}</p></div></div>`;
}

function adminCard(member) {
  return `<article class="admin-card reveal" style="--accent:${member.accent}">
    ${profileTop(member)}
    <p class="profile-text">${member.description}</p>
    ${tags(member)}
  </article>`;
}

function personCard(member, index) {
  return `<article class="person-card reveal" data-name="${member.name.toLowerCase()}" data-role="${member.admin ? 'admin' : 'member'}" data-index="${index}" style="--accent:${member.accent}" tabindex="0" role="button" aria-label="View ${member.name}'s profile">
    ${profileTop(member)}
    <p class="profile-text">${member.description}</p>
    ${tags(member)}
    <a class="card-link" href="#profile" data-profile="${index}">VIEW PROFILE ↗</a>
  </article>`;
}

function logoMarkup() {
  const logo = assetPath(assetSettings.logo);
  if (!logo) {
    return '<div class="logo-disc" aria-label="Aafat Ki Toli logo"><small>PRIVATE ARCHIVE / 02:17 AM</small><strong>AK<br>TO</strong></div>';
  }
  return `<div class="logo-disc logo-image" aria-label="Aafat Ki Toli logo"><img src="${logo}" alt="Aafat Ki Toli logo" onerror="this.remove()" /></div>`;
}

function appMarkup() {
  const admins = members.filter((member) => member.admin);
  return `
    <header class="site-nav">
      <a class="brand" href="#home">AAFAT KI TOLI <span class="brand-mark">✦</span></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#home">HOME</a><a href="#admins">ADMINS</a><a href="#people">PEOPLE</a><a href="#about">ABOUT</a>
      </nav>
    </header>
    <div class="comet comet-one" aria-hidden="true"></div><div class="comet comet-two" aria-hidden="true"></div><div class="comet comet-three" aria-hidden="true"></div>
    <div class="soundtrack-control">
      <audio id="bg-track" preload="auto" autoplay loop src="./assets/aafat-soundtrack.mp3"></audio>
      <button class="soundtrack-button" type="button" id="soundtrack-toggle" aria-pressed="false">
        <span class="soundtrack-icon">♫</span><span id="soundtrack-label">PLAY SOUNDTRACK</span>
      </button>
      <span class="soundtrack-note">Badtameez Dil / 0:35</span>
    </div>
    <main>
      <section class="hero" id="home">
        <div class="hero-content reveal">
          <p class="kicker">somewhere between chaos &amp; friendship ⋆</p>
          <h1>AAFAT <span>KI TOLI</span></h1>
          <p class="hero-deck">One GC. Endless chaos. Zero peace.</p>
          <p class="hero-copy">A little corner of Instagram where random conversations become memories, inside jokes become lore, and somehow everyone survives each other. 😭</p>
          <div class="hero-actions">
            <button class="enter-button" type="button" data-scroll="#people">ENTER THE CHAOS ↘</button>
            <span class="admin-note">Kashi · Titli · Akshit<br><small>the ones who somehow became admins</small></span>
          </div>
        </div>
          <div class="hero-visual reveal">
          <div class="hero-orbit"></div>
          ${logoMarkup()}
            <span class="sticker one">do not leak ♡</span><span class="sticker two">OG online-ish</span><span class="sticker three">𖤐 lore loading...</span>
        </div>
      </section>
      <div class="info-strip" aria-label="Group chat facts"><span>👥 OG Members</span><span>📱 Instagram GC</span><span>💬 questionable conversations</span><span>🫠 peace: unavailable</span></div>

      <section class="section-shell admin-section" id="admins">
        <div class="section-label reveal"><div><p class="eyebrow">the original suspects / 001</p><h2>THE <em>ADMINS</em></h2></div><p>the people who were trusted with power for some reason</p></div>
        <div class="admin-grid">${admins.map(adminCard).join('')}</div>
      </section>

      <section class="section-shell people-section" id="people">
        <div class="section-label reveal"><div><p class="eyebrow">the archive / 002</p><h2>THE PEOPLE<br><em>BEHIND THE CHAOS</em></h2></div><p>OG personalities. One GC. Somehow still functioning.</p></div>
        <div class="people-tools">
          <label class="search-wrap"><span>⌕</span><input class="search-input" id="member-search" type="search" placeholder="search the chaos..." autocomplete="off" aria-label="Search people" /></label>
          <div class="filters" role="group" aria-label="Filter people">
            <button class="filter-btn active" type="button" data-filter="all">ALL</button>
            <button class="filter-btn" type="button" data-filter="admin">ADMINS</button>
            <button class="filter-btn" type="button" data-filter="member">MEMBERS</button>
          </div>
        </div>
        <div class="people-grid" id="people-grid">${members.map(personCard).join('')}</div>
      </section>

      <section class="section-shell about-section" id="about">
        <div class="reveal"><p class="eyebrow">a small explanation / 003</p><h2>ABOUT<br>THE TOLI</h2></div>
         <div class="about-copy reveal"><p>Aafat Ki Toli isn't just a GC.<br><br>It's random conversations at completely unnecessary hours, inside jokes nobody outside the GC would understand, people disappearing and randomly returning, unnecessary arguments, questionable humour, stickers that make absolutely no sense and somehow... a lot of memories.<br><br>OG Members.<br>One chat.<br>Zero normal behaviour. 🫠</p><p class="signature">made of chaos ✦ powered by friendship ♡</p></div>
      </section>
    </main>
    <footer class="site-footer"><div><p class="footer-title">AAFAT KI TOLI</p><p class="footer-copy">somewhere on Instagram, probably causing problems.</p></div><p class="copyright">© Aafat Ki Toli</p></footer>
    <div class="modal" id="profile-modal" role="dialog" aria-modal="true" aria-labelledby="modal-name" aria-hidden="true">
      <div class="modal-card" id="modal-card"><button class="modal-close" type="button" aria-label="Close profile">×</button><div id="modal-content"></div></div>
    </div>`;
}

root.innerHTML = appMarkup();

const modal = document.querySelector('#profile-modal');
const modalCard = document.querySelector('#modal-card');
const modalContent = document.querySelector('#modal-content');
const grid = document.querySelector('#people-grid');
const search = document.querySelector('#member-search');
const soundtrack = document.querySelector('#bg-track');
const soundtrackToggle = document.querySelector('#soundtrack-toggle');
const soundtrackLabel = document.querySelector('#soundtrack-label');
let activeFilter = 'all';
let soundtrackStarted = false;

function syncSoundtrackLabel() {
  const playing = soundtrack && !soundtrack.paused;
  soundtrackLabel.textContent = playing ? 'MUTE SOUNDTRACK' : 'PLAY SOUNDTRACK';
  soundtrackToggle.setAttribute('aria-pressed', String(Boolean(playing)));
  soundtrackToggle.classList.toggle('playing', Boolean(playing));
}

function startSoundtrack() {
  if (!soundtrack || soundtrackStarted) return;
  soundtrackStarted = true;
  if (soundtrack.currentTime < 34.5) soundtrack.currentTime = 35;
  soundtrack.play().then(syncSoundtrackLabel).catch(() => {
    soundtrackStarted = false;
    syncSoundtrackLabel();
  });
}

function openProfile(index) {
  const member = members[index];
  const instagramUrl = member.handle ? `https://instagram.com/${member.handle.slice(1)}` : '';
  modalCard.style.setProperty('--accent', member.accent);
  modalContent.innerHTML = `
    ${avatar(member, true)}
    <h2 id="modal-name">${member.name}</h2>
    <p class="role">${member.role}</p>
    <div class="modal-facts">${member.realName ? `<span>real name / ${member.realName}</span>` : ''}${member.age ? `<span>age / ${member.age}</span>` : ''}</div>
    <p class="modal-description">${member.description}</p>
    ${tags(member)}
    <a class="instagram-btn${instagramUrl ? '' : ' placeholder'}" href="${instagramUrl || '#'}" ${instagramUrl ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" data-empty-instagram title="Add this profile URL in index.html"'}>INSTAGRAM ↗</a>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeProfile() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function filterPeople() {
  const query = search.value.toLowerCase().trim();
  let visible = 0;
  grid.querySelectorAll('.person-card').forEach((card) => {
    const matchesText = !query || card.dataset.name.includes(query) || card.textContent.toLowerCase().includes(query);
    const matchesFilter = activeFilter === 'all' || card.dataset.role === activeFilter;
    const show = matchesText && matchesFilter;
    card.classList.toggle('hidden', !show);
    if (show) visible += 1;
  });
  let empty = grid.querySelector('.no-results');
  if (!visible) {
    if (!empty) { empty = document.createElement('div'); empty.className = 'no-results'; grid.appendChild(empty); }
    empty.textContent = query ? `nothing found for “${query}” — try another piece of lore.` : 'the archive is being shy right now.';
  } else if (empty) empty.remove();
}

document.addEventListener('click', (event) => {
  const emptyInstagram = event.target.closest('[data-empty-instagram]');
  if (emptyInstagram) event.preventDefault();
  const target = event.target.closest('[data-profile]');
  if (target) {
    event.preventDefault();
    openProfile(Number(target.dataset.profile));
  }
  const card = event.target.closest('.person-card');
  if (card && !event.target.closest('a')) openProfile(Number(card.dataset.index));
  const scrollTarget = event.target.closest('[data-scroll]');
  if (scrollTarget) document.querySelector(scrollTarget.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
  if (event.target.closest('.modal-close') || event.target === modal) closeProfile();
  if (event.target.closest('.nav-links a')) document.querySelector('.nav-links').classList.remove('open');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeProfile();
  const card = event.target.closest('.person-card');
  if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openProfile(Number(card.dataset.index)); }
});

search.addEventListener('input', filterPeople);
document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === button));
    filterPeople();
  });
});

soundtrack.addEventListener('loadedmetadata', () => {
  soundtrack.currentTime = 35;
});
soundtrack.addEventListener('play', syncSoundtrackLabel);
soundtrack.addEventListener('pause', syncSoundtrackLabel);
soundtrackToggle.addEventListener('click', () => {
  if (soundtrack.paused) {
    soundtrackStarted = true;
    if (soundtrack.currentTime < 34.5) soundtrack.currentTime = 35;
    soundtrack.play().catch(syncSoundtrackLabel);
  } else {
    soundtrack.pause();
  }
});
document.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.soundtrack-control')) startSoundtrack();
}, { once: true });
startSoundtrack();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));