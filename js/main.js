/* ============================================================
   PORTFOLIO RENDERER
   ============================================================
   Reads PORTFOLIO_CONTENT (data/content.js) and ICONS (js/icons.js)
   and renders the whole page, then wires up interactions.
   Edit data/content.js for content changes — this file shouldn't
   need touching for normal updates.
   ============================================================ */

(function(){
  const C = window.PORTFOLIO_CONTENT;
  if(!C){ console.error('PORTFOLIO_CONTENT not found — check data/content.js is loaded first.'); return; }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, opts){
    const node = document.createElement(tag);
    opts = opts || {};
    if(opts.class) node.className = opts.class;
    if(opts.text !== undefined) node.textContent = opts.text;
    if(opts.html !== undefined) node.innerHTML = opts.html;
    if(opts.attrs) Object.entries(opts.attrs).forEach(([k,v]) => node.setAttribute(k, v));
    return node;
  }
  function pill(text){ return el('span', { class: 'tag-pill', text }); }

  /* ---------- THEME ---------- */
  function initTheme(){
    const saved = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    document.querySelectorAll('[data-action="toggle-theme"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
      });
    });
  }

  /* ---------- MOBILE NAV ---------- */
  function initMobileNav(){
    const toggle = document.getElementById('navToggle');
    const panel = document.getElementById('mobileNav');
    if(!toggle || !panel) return;
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
      toggle.innerHTML = panel.classList.contains('open') ? icon('close') : icon('menu');
    });
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.innerHTML = icon('menu');
    }));
  }

  /* ---------- NAV IDENTITY ---------- */
  function renderNavAndFooterIdentity(){
    document.title = `${C.profile.name} — ${C.profile.title}`;

    document.querySelectorAll('[data-bind="avatar-initials"]').forEach(n => n.textContent = C.profile.initials);
    document.querySelectorAll('[data-bind="name"]').forEach(n => n.textContent = C.profile.name);
    document.querySelectorAll('[data-bind="title"]').forEach(n => n.textContent = C.profile.title);

    const navLinksHtml = ['Home','About','Experience','Skills','Projects','Achievements','Contact']
      .map(label => `<a href="#${label.toLowerCase()}">${label}</a>`).join('');
    const navLinks = document.getElementById('navLinks');
    if(navLinks) navLinks.innerHTML = navLinksHtml;
    const mobileNav = document.getElementById('mobileNav');
    if(mobileNav) mobileNav.innerHTML = navLinksHtml;

    document.querySelectorAll('[data-bind="link-resume"]').forEach(n => n.setAttribute('href', C.links.resume));
    document.querySelectorAll('[data-bind="link-github"]').forEach(n => n.setAttribute('href', C.links.github));
    document.querySelectorAll('[data-bind="link-linkedin"]').forEach(n => n.setAttribute('href', C.links.linkedin));
    document.querySelectorAll('[data-bind="link-email"]').forEach(n => n.setAttribute('href', 'mailto:' + C.links.email));

    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = `<span class="moon">${icon('moon')}</span><span class="sun">${icon('sun')}</span>`;
    });
    document.querySelectorAll('.social-icon-github').forEach(n => n.innerHTML = icon('github'));
    document.querySelectorAll('.social-icon-linkedin').forEach(n => n.innerHTML = icon('linkedin'));
    document.querySelectorAll('.social-icon-mail').forEach(n => n.innerHTML = icon('mail'));

    const navToggle = document.getElementById('navToggle');
    if(navToggle) navToggle.innerHTML = icon('menu');
  }

  /* ---------- HERO ---------- */
  function renderHero(){
    const badge = document.getElementById('heroBadge');
    if(badge) badge.textContent = C.profile.heroBadge;

    const nameEl = document.getElementById('heroName');
    if(nameEl){
      nameEl.innerHTML = `Hi, I'm <span class="accent">${C.profile.name}</span>`;
    }

    const textEl = document.getElementById('heroText');
    if(textEl) textEl.textContent = C.profile.heroText;

    document.getElementById('btnResumeIcon') && (document.getElementById('btnResumeIcon').innerHTML = icon('download'));

    // hero stats
    const statsEl = document.getElementById('heroStats');
    if(statsEl){
      statsEl.innerHTML = '';
      C.profile.heroStats.forEach(s => {
        const box = el('div', { class: 'hero-stat' });
        box.appendChild(el('div', { class: 'num', text: s.value }));
        box.appendChild(el('div', { class: 'lbl', text: s.label }));
        statsEl.appendChild(box);
      });
    }

    // hero tags
    const tagsEl = document.getElementById('heroTags');
    if(tagsEl){
      tagsEl.innerHTML = '';
      C.profile.heroTags.forEach(t => tagsEl.appendChild(pill(t)));
    }

    // floating badges
    const fb1 = document.getElementById('heroFloat1');
    if(fb1) fb1.innerHTML = `${icon('team')}<span>${C.profile.heroFloatingBadgeRight1}</span>`;
    const fb2 = document.getElementById('heroFloat2');
    if(fb2) fb2.innerHTML = `${icon('automation')}<span>${C.profile.heroFloatingBadgeRight2}</span>`;
    const fbYears = document.getElementById('heroYearsBadge');
    if(fbYears) fbYears.innerHTML = `${icon('check-badge')}<span>${C.profile.heroFloatingBadgeTop}</span>`;

    const photoInitials = document.getElementById('heroPhotoInitials');
    if(photoInitials) photoInitials.textContent = C.profile.initials;
    const photoName = document.getElementById('heroPhotoName');
    if(photoName) photoName.textContent = C.profile.name;
    const photoRole = document.getElementById('heroPhotoRole');
    if(photoRole) photoRole.textContent = C.profile.title;

        // Show the real photo if one is set in data/content.js, otherwise keep initials.
    const heroPhotoImg = document.getElementById('heroPhotoImg');
    if(heroPhotoImg && C.profile.photo){
      heroPhotoImg.src = C.profile.photo;
      heroPhotoImg.onload = () => {
        heroPhotoImg.style.display = 'block';
        if(photoInitials) photoInitials.style.display = 'none';
      };
      heroPhotoImg.onerror = () => {
        heroPhotoImg.style.display = 'none';
        if(photoInitials) photoInitials.style.display = 'block';
      };
    }

    // typewriter role cycler
    const roleEl = document.getElementById('heroRoleText');
    if(roleEl && C.profile.roles && C.profile.roles.length){
      if(reduceMotion){
        roleEl.textContent = C.profile.roles[0];
      } else {
        startTypewriter(roleEl, C.profile.roles);
      }
    }
  }

  function startTypewriter(node, words){
    let wordIndex = 0, charIndex = 0, deleting = false;
    function tick(){
      const word = words[wordIndex];
      if(!deleting){
        charIndex++;
        node.textContent = word.slice(0, charIndex);
        if(charIndex === word.length){
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        node.textContent = word.slice(0, charIndex);
        if(charIndex === 0){
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  /* ---------- ABOUT ---------- */
  function renderAbout(){
    const A = C.about;
    setText('aboutBadge', A.badge);
    setText('aboutHeading', A.heading);
    setText('aboutSubheading', A.subheading);
    setText('aboutRoleHeading', A.roleHeading);
    setText('aboutPhotoInitials', C.profile.initials);
    setHTML('aboutPhotoBadge', A.photoBadge);

    // Show the real photo if one is set in data/content.js, otherwise keep initials.
const photoImg = document.getElementById('aboutPhotoImg');
const photoInitials = document.getElementById('aboutPhotoInitials');
if(photoImg && C.profile.photo){
  photoImg.src = C.profile.photo;
  photoImg.onload = () => {
    photoImg.style.display = 'block';
    if(photoInitials) photoInitials.style.display = 'none';
  };
  photoImg.onerror = () => {
    photoImg.style.display = 'none';
    if(photoInitials) photoInitials.style.display = 'block';
  };
}

    const copyEl = document.getElementById('aboutParagraphs');
    if(copyEl){
      copyEl.innerHTML = '';
      A.paragraphs.forEach(p => copyEl.appendChild(el('p', { text: p })));
    }

    const infoGrid = document.getElementById('infoGrid');
    if(infoGrid){
      infoGrid.innerHTML = '';
      A.infoCards.forEach(card => {
        const cardEl = el('div', { class: 'info-card' + (card.positive ? ' positive' : '') });
        const iconWrap = el('div', { class: 'info-icon', html: icon(card.icon) });
        const textWrap = el('div', { class: 'info-text' });
        textWrap.appendChild(el('div', { class: 'lbl', text: card.label }));
        textWrap.appendChild(el('div', { class: 'val', text: card.value }));
        cardEl.appendChild(iconWrap);
        cardEl.appendChild(textWrap);
        infoGrid.appendChild(cardEl);
      });
    }
  }

  /* ---------- HIGHLIGHTS STRIP ---------- */
  function renderHighlights(){
    const strip = document.getElementById('highlightsStrip');
    if(!strip) return;
    strip.innerHTML = '';
    C.highlights.forEach(h => {
      const card = el('div', { class: 'highlight-card reveal' });
      card.appendChild(el('div', { class: 'highlight-icon', html: icon(h.icon) }));
      card.appendChild(el('div', { class: 'num', text: h.value }));
      card.appendChild(el('div', { class: 'lbl', text: h.label }));
      strip.appendChild(card);
    });
  }

  /* ---------- EXPERIENCE ---------- */
  function renderExperience(){
    const E = C.experience;
    setText('expBadge', E.badge);
    setText('expHeading', E.heading);
    setText('expSubheading', E.subheading);

    const timeline = document.getElementById('timeline');
    if(!timeline) return;
    timeline.innerHTML = '';

    E.items.forEach(job => {
      const entry = el('div', { class: 'timeline-entry reveal' + (job.active ? ' is-active' : '') });
      entry.appendChild(el('div', { class: 'timeline-dot' }));

      const card = el('div', { class: 'exp-card' });

      const top = el('div', { class: 'exp-top' });
      const tagsWrap = el('div', { class: 'exp-tags' });
      tagsWrap.appendChild(el('span', { class: 'exp-status' + (job.active ? ' active-tag' : ''), text: job.tag }));
      if(job.active) tagsWrap.appendChild(el('span', { class: 'exp-badge-active', text: 'ACTIVE' }));
      top.appendChild(tagsWrap);
      top.appendChild(el('span', { class: 'exp-employment', text: job.employment }));
      card.appendChild(top);

      card.appendChild(el('h3', { class: 'exp-role', text: job.role }));
      card.appendChild(el('div', { class: 'exp-project', text: '• ' + job.project }));
      card.appendChild(el('p', { class: 'exp-desc', text: job.description }));

      const bulletsEl = el('ul', { class: 'exp-bullets' });
      job.bullets.forEach(b => {
        const li = el('li');
        li.innerHTML = icon('check');
        li.appendChild(document.createTextNode(b));
        bulletsEl.appendChild(li);
      });
      card.appendChild(bulletsEl);

      card.appendChild(el('div', { class: 'exp-tech-label', text: 'TECHNOLOGIES' }));
      const techPills = el('div', { class: 'exp-tech-pills' });
      job.tech.forEach(t => techPills.appendChild(pill(t)));
      card.appendChild(techPills);

      entry.appendChild(card);
      timeline.appendChild(entry);
    });
  }

  /* ---------- SKILLS ---------- */
  function renderSkills(){
    const S = C.skills;
    setText('skillsBadge', S.badge);
    setText('skillsHeading', S.heading);
    setText('skillsSubheading', S.subheading);

    const grid = document.getElementById('skillsGrid');
    if(!grid) return;
    grid.innerHTML = '';

    S.groups.forEach(group => {
      const card = el('div', { class: 'skill-card reveal' });
      const head = el('div', { class: 'skill-head' });
      head.appendChild(el('div', { class: 'skill-icon', html: icon(group.icon) }));
      head.appendChild(el('h3', { text: group.name }));
      card.appendChild(head);

      const tagsWrap = el('div', { class: 'skill-tags' });
      group.items.forEach(t => tagsWrap.appendChild(pill(t)));
      card.appendChild(tagsWrap);

      grid.appendChild(card);
    });
  }

  /* ---------- PROJECTS ---------- */
  function renderProjects(){
    const P = C.projects;
    setText('projectsBadge', P.badge);
    setText('projectsHeading', P.heading);
    setText('projectsSubheading', P.subheading);

    const grid = document.getElementById('projectsGrid');
    if(!grid) return;
    grid.innerHTML = '';

    P.items.forEach(proj => {
      const card = el('div', { class: 'project-card reveal' });

      const thumb = el('div', { class: 'project-thumb thumb-' + proj.gradient });
      thumb.innerHTML = icon(proj.icon);
      thumb.appendChild(el('span', { class: 'thumb-label', text: proj.imageLabel }));
      card.appendChild(thumb);

      const body = el('div', { class: 'project-body' });
      body.appendChild(el('h3', { text: proj.title }));
      body.appendChild(el('p', { text: proj.description }));

      const tagsWrap = el('div', { class: 'project-tags' });
      proj.tags.forEach(t => tagsWrap.appendChild(pill(t)));
      body.appendChild(tagsWrap);

      const links = el('div', { class: 'project-links' });
      if(proj.github){
        const a = el('a', { attrs: { href: proj.github, target: '_blank', rel: 'noopener' } });
        a.innerHTML = icon('github');
        a.appendChild(document.createTextNode('GitHub'));
        links.appendChild(a);
      }
      if(proj.demo){
        const a = el('a', { attrs: { href: proj.demo, target: '_blank', rel: 'noopener' } });
        a.innerHTML = icon('extension');
        a.appendChild(document.createTextNode('Live Demo'));
        links.appendChild(a);
      }
      body.appendChild(links);

      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- ACHIEVEMENTS ---------- */
  function renderAchievements(){
    const A = C.achievements;
    setText('achieveBadge', A.badge);
    setText('achieveHeading', A.heading);

    const grid = document.getElementById('achieveGrid');
    if(!grid) return;
    grid.innerHTML = '';
    A.items.forEach(item => {
      const card = el('div', { class: 'achieve-card reveal' });
      card.appendChild(el('div', { class: 'achieve-icon', html: icon(item.icon) }));
      card.appendChild(el('div', { class: 'val', text: item.value }));
      card.appendChild(el('div', { class: 'lbl', text: item.label }));
      grid.appendChild(card);
    });
  }

  /* ---------- CONTACT ---------- */
  function renderContact(){
    const K = C.contact;
    setText('contactHeading', K.heading);
    setText('contactBody', K.body);

    const rows = document.getElementById('contactRows');
    if(rows){
      rows.innerHTML = '';
      const items = [
        { icon: 'mail', label: 'Email', value: C.links.email },
        { icon: 'phone', label: 'Phone', value: C.links.phone },
        { icon: 'pin', label: 'Location', value: C.links.location }
      ];
      items.forEach(it => {
        const row = el('div', { class: 'contact-row' });
        row.appendChild(el('div', { class: 'info-icon', html: icon(it.icon) }));
        const text = el('div');
        text.appendChild(el('div', { class: 'clbl', text: it.label }));
        text.appendChild(el('div', { class: 'cval', text: it.value }));
        row.appendChild(text);
        rows.appendChild(row);
      });
    }

    const sendIcon = document.getElementById('sendIcon');
    if(sendIcon) sendIcon.innerHTML = icon('send');

    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if(form){
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(note){
          note.textContent = 'This is a demo form — connect it to a form service (e.g. Formspree) to receive messages.';
        }
      });
    }
  }

  /* ---------- FOOTER ---------- */
  function renderFooter(){
    setText('footerTagline', C.footer.tagline);
    setText('footerCopyright', C.footer.copyright);
    const yearEl = document.getElementById('footerYear');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- helpers ---------- */
  function setText(id, text){ const n = document.getElementById(id); if(n) n.textContent = text; }
  function setHTML(id, html){ const n = document.getElementById(id); if(n) n.innerHTML = html; }

  /* ---------- SCROLL SPY ---------- */
  function initScrollSpy(){
    const sections = ['home','about','experience','skills','projects','achievements','contact']
      .map(id => document.getElementById(id)).filter(Boolean);
    if(!sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const id = entry.target.id;
          document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => io.observe(s));
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  function initReveal(){
    const items = document.querySelectorAll('.reveal');
    if(reduceMotion){
      items.forEach(i => i.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(i => io.observe(i));
  }

  /* ---------- BACK TO TOP ---------- */
  function initBackToTop(){
    const btn = document.getElementById('backToTop');
    if(!btn) return;
    btn.innerHTML = icon('arrowUp');
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', window.scrollY > 500);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  }

  /* ---------- INIT ---------- */
  document.addEventListener('DOMContentLoaded', function(){
    initTheme();
    renderNavAndFooterIdentity();
    renderHero();
    renderAbout();
    renderHighlights();
    renderExperience();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderContact();
    renderFooter();
    initMobileNav();
    initScrollSpy();
    initReveal();
    initBackToTop();
  });
})();
