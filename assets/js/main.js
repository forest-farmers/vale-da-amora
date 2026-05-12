// Vale da Amora — small static site
(() => {
  // ---------- year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- scrolled nav ----------
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- language toggle ----------
  const STRINGS = {
    pt: {
      'nav.about': 'Sobre',
      'nav.plantations': 'Plantações',
      'nav.history': 'História',
      'nav.team': 'Equipa',
      'nav.gallery': 'Galeria',
      'nav.contact': 'Contacto',

      'hero.eyebrow': 'um cantinho no Alentejo',
      'hero.title.l1': 'Da degradação',
      'hero.title.l2': 'à abundância',
      'hero.lede': 'Dois hectares de terra, um grupo de amigos e muita vontade de meter as mãos na terra.',
      'hero.cue': 'Saber mais',

      'about.eyebrow': 'quem somos',
      'about.title': 'Um laboratório de ideias (e amizades). Vem brincar connosco.',
      'about.p1': 'A Vale da Amora nasceu para juntar gente e cultivar um amanhã mais verde. Em dois hectares experimentamos formas diferentes de regenerar a terra — algumas funcionam logo, outras viram adubo. Aprendemos com todas.',
      'about.p2': 'Misturamos cientistas, agricultores, tecnólogos e quem traz saberes antigos. Em conjunto vamos descobrindo como reflorestar, capturar carbono e cultivar comida que devolve algo à terra em vez de a esgotar.',

      'plant.eyebrow': 'o que plantamos',
      'plant.title': 'Três experiências, uma paisagem a renascer.',
      'plant.miyawaki.title': 'Floresta Miyawaki',
      'plant.miyawaki.unit': 'plantas',
      'plant.miyawaki.body': '900 plantas apertadinhas a competir por luz. Em poucos anos torna-se uma pequena floresta de verdade.',
      'plant.agro.title': 'Agrofloresta',
      'plant.agro.unit': 'linhas',
      'plant.agro.each': 'cada',
      'plant.agro.body': 'Linhas longas a serpentear o terreno — árvores, arbustos e culturas todas misturadas. O coração produtivo do Vale.',
      'plant.nests.title': 'Ninhos agroflorestais',
      'plant.nests.unit': 'ninhos',
      'plant.nests.each': 'plantas cada',
      'plant.nests.body': 'Pequenas ilhas de plantas espalhadas pelo terreno. Cada uma é um ponto de partida para a floresta voltar.',

      'history.eyebrow': 'como aqui chegámos',
      'history.title': 'De carvoeira abandonada a terreno vivo.',
      'history.cap1': 'As antigas fornalhas de carvão',
      'history.cap2': 'Chegada do mulch — alimento para o solo',
      'history.p1': 'Houve uma altura em que esta terra produzia alimentos em sintonia com o que a rodeia. Depois alguém comprou-a para fazer carvão — e em pouco tempo as árvores desapareceram e ficou poluição.',
      'history.p2': 'A comunidade local resolveu travar a operação. Vinte anos depois, com o terreno abandonado, começámos a limpar — toneladas de lixo retiradas. Agora deixamos a natureza fazer o seu trabalho, e damos uma mão onde podemos.',

      'team.eyebrow': 'a malta',
      'team.title': 'A malta que anda nisto.',
      'team.bernardo.role': 'Agroflorestor',
      'team.bernardo.bio': 'Biólogo ambiental e permacultor, movido pela curiosidade e pela harmonia com a natureza. Especialista em ecossistemas regenerativos, hortas produtivas, florestas comestíveis e práticas de agrofloresta.',
      'team.miguel.role': 'Agroflorestor',
      'team.miguel.bio': 'Nascido em Portugal, filho de pais holandeses. Passou da hotelaria para a agroecologia, e hoje gere dez hectares de floresta. Poliglota a descobrir a língua da natureza, com uma paixão ecológica genuína.',
      'team.lieke.role': 'Fundadora',
      'team.lieke.bio': 'Nascida na Holanda, aprendeu a viver de forma sustentável no Alentejo. Inovadora focada em soluções para os desafios contemporâneos através de produção colaborativa, diversificada e sustentável.',

      'gallery.eyebrow': 'o álbum',
      'gallery.title': 'A terra, dia após dia.',

      'contact.eyebrow': 'aparece',
      'contact.title': 'Mete a mão na terra connosco.',
      'contact.lede': 'Cientistas, agricultores, voluntários ou só curiosos — somos para toda a gente. Se queres visitar, dar uma mão ou só saber mais, fala connosco.',
      'contact.place': 'Onde estamos',
      'contact.phone': 'Telefone',
    },
    en: {
      'nav.about': 'About',
      'nav.plantations': 'Plantations',
      'nav.history': 'Story',
      'nav.team': 'Crew',
      'nav.gallery': 'Album',
      'nav.contact': 'Say hi',

      'hero.eyebrow': 'a corner of the Alentejo',
      'hero.title.l1': 'From degradation',
      'hero.title.l2': 'to abundance',
      'hero.lede': 'Two hectares of land, a group of friends, and a serious soft spot for getting our hands in the soil.',
      'hero.cue': 'Read on',

      'about.eyebrow': 'who we are',
      'about.title': 'A lab for ideas (and friendships). Come play with us.',
      'about.p1': 'Vale da Amora started as a way to bring people together and grow a greener tomorrow. On two hectares we try out different ways to regenerate the land — some work right away, others turn into compost. We learn from all of them.',
      'about.p2': 'We mix scientists, farmers, technologists, and people carrying old wisdom. Together we figure out how to reforest, capture carbon, and grow food that gives back to the land instead of using it up.',

      'plant.eyebrow': 'what we plant',
      'plant.title': 'Three experiments, one landscape coming back to life.',
      'plant.miyawaki.title': 'Miyawaki forest',
      'plant.miyawaki.unit': 'plants',
      'plant.miyawaki.body': '900 plants packed in tight, competing for light. In a few years it turns into a proper little forest.',
      'plant.agro.title': 'Agroforestry',
      'plant.agro.unit': 'lines',
      'plant.agro.each': 'each',
      'plant.agro.body': 'Long lines snaking across the land — trees, shrubs and crops all mixed in. The productive heart of the Vale.',
      'plant.nests.title': 'Agroforestry nests',
      'plant.nests.unit': 'nests',
      'plant.nests.each': 'plants each',
      'plant.nests.body': 'Small islands of plants scattered across the land. Each one is a starting point for the forest to come back.',

      'history.eyebrow': 'how we got here',
      'history.title': 'From abandoned charcoal pit to living land.',
      'history.cap1': 'The old charcoal kilns',
      'history.cap2': 'Mulch arrives — food for the soil',
      'history.p1': 'There was a time when this land grew food in tune with what was around it. Then someone bought it to make charcoal — and pretty soon the trees were gone and there was pollution left behind.',
      'history.p2': 'The local community pushed back and stopped the operation. Twenty years later, with the land abandoned, we started cleaning up — tonnes of waste hauled out. Now we let nature do its thing and lend a hand where we can.',

      'team.eyebrow': 'the crew',
      'team.title': 'The crew behind the Vale.',
      'team.bernardo.role': 'Agroforester',
      'team.bernardo.bio': 'Environmental biologist and permaculturist, driven by curiosity and a desire to live in harmony with nature. Specialised in regenerative ecosystems, productive gardens, edible forests, and agroforestry.',
      'team.miguel.role': 'Agroforester',
      'team.miguel.bio': 'Born in Portugal to Dutch parents. Moved from hospitality into agroecology and now stewards ten hectares of forest. A polyglot learning the language of nature, with a genuine ecological passion.',
      'team.lieke.role': 'Founder',
      'team.lieke.bio': 'Dutch-born, learned to live sustainably in the Alentejo. An innovator focused on solutions to today’s challenges through collaborative, diversified, sustainable production.',

      'gallery.eyebrow': 'the album',
      'gallery.title': 'The land, day by day.',

      'contact.eyebrow': 'drop by',
      'contact.title': 'Get your hands in the soil with us.',
      'contact.lede': 'Scientists, farmers, volunteers, or just curious — we welcome all. If you want to visit, lend a hand, or just say hi, get in touch.',
      'contact.place': 'Where we are',
      'contact.phone': 'Phone',
    }
  };

  const META_DESC = {
    pt: document.querySelector('meta[name="description"]').getAttribute('data-i18n-desc-pt'),
    en: document.querySelector('meta[name="description"]').getAttribute('data-i18n-desc-en'),
  };

  function applyLang(lang) {
    const dict = STRINGS[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && META_DESC[lang]) descEl.setAttribute('content', META_DESC[lang]);
    document.querySelectorAll('.lang-opt').forEach(o => {
      o.classList.toggle('is-active', o.dataset.lang === lang);
    });
    try { localStorage.setItem('vda-lang', lang); } catch {}
  }

  const stored = (() => { try { return localStorage.getItem('vda-lang'); } catch { return null; } })();
  const initial = stored || (navigator.language && navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en');
  applyLang(initial);

  document.querySelector('.lang-toggle')?.addEventListener('click', () => {
    const next = document.documentElement.lang === 'pt' ? 'en' : 'pt';
    applyLang(next);
  });

  // ---------- reveal on scroll ----------
  const revealTargets = document.querySelectorAll('.section-header, .section-grid, .card, .member, .g-item, .story-image, .story-text, .contact-grid');
  revealTargets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-in'));
  }

  // ---------- gallery lightbox ----------
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.g-item').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(a.getAttribute('href'));
    });
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });
})();
