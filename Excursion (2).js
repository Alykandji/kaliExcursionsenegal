/* =====================================================
   KALIEXCURSIONS SÉNÉGAL – Excursion.js
   ✅ Utilise VOS vraies images locales
   Génération des cartes + Modal + Galerie + EmailJS
   ===================================================== */

const EMAILJS_PUBLIC_KEY  = 'fKyFDu7LDrefmKepk';
const EMAILJS_SERVICE_ID  = 'service_9ibpj3i';
const EMAILJS_TEMPLATE_ID = 'template_0af4l2q';

/* =====================================================
   ✅ DONNÉES AVEC VOS VRAIES IMAGES LOCALES
   Les noms de fichiers viennent directement de votre
   dossier (55.jpg, 47.jpeg, 59.jpg, etc.)
   ===================================================== */
const EXCURSIONS = [

  {
    id:      'goree',
    titre:   'Journée Dakar – Île de Gorée',
    badge:   'Historique',
    duree:   'Journée complète (8h)',
    type:    '🚢 Ferry',
    groupe:  '👥 Groupe ou privé',
    depart:  'Mbour / Somone',
    resume:  "Plongez dans l'histoire entre mémoire, culture et patrimoine vivant.",
    /* ── Vos vraies images ── */
    images: [
      '55.jpg',
      '10.jpeg',
      '5.jpeg',
      '30.jpeg',
      '35.jpeg',
    ],
    description: `
      <p>Traversez l'histoire poignante de l'<strong>île de Gorée</strong>, classée au patrimoine mondial de l'UNESCO. Visitez la <strong>Maison des Esclaves</strong> et sa célèbre Porte du Voyage sans Retour, flânez dans les ruelles colorées et découvrez le patrimoine colonial.</p>
      <p>Accompagné par votre guide <strong>KALIDOU KANDJI</strong>, vivez un moment d'émotion et de partage unique au Sénégal. Une journée inoubliable entre histoire, culture et beauté face à l'Atlantique.</p>
    `,
    highlights: [
      "Visite de la Maison des Esclaves et la Porte du Voyage sans Retour (UNESCO)",
      "Promenade dans les ruelles colorées et l'architecture coloniale du XVe siècle",
      "Rencontre avec les artistes et artisans locaux de l'île",
      "Panorama exceptionnel sur l'Atlantique depuis les remparts du fort",
      "Dégustation de plats traditionnels sénégalais en restaurant local",
      "Commentaires historiques approfondis par Kali, guide certifié bilingue",
    ],
    listInclus: [
      "Transport aller-retour depuis Mbour / Somone",
      "Billets de ferry Dakar ↔ Gorée inclus",
      "Guide officiel bilingue (fr / en)",
      "Entrée à la Maison des Esclaves",
      "Eau minérale pendant le trajet",
    ],
    listExclus: [
      "Repas du midi (recommandations fournies)",
      "Achats souvenirs et artisanat",
      "Boissons alcoolisées",
      "Pourboires (facultatifs)",
    ],
  },

  {
    id:      'saloum',
    titre:   'Journée aux Îles du Saloum',
    badge:   'Nature & Aventure',
    duree:   'Excursion 10h',
    type:    '🚣 Pirogue',
    groupe:  '👥 Max 12 pers.',
    depart:  'Djifer ou Missira',
    resume:  "Explorez mangroves, villages traditionnels et nature préservée en pirogue.",
    /* ── Vos vraies images ── */
    images: [
      '47.jpeg',
      '3.jpeg',
      '14.jpeg',
      '28.jpeg',
      '36.jpeg',
    ],
    description: `
      <p>Départ matinal pour le <strong>delta du Saloum</strong>, classé Réserve de Biosphère par l'UNESCO. Balade en <strong>pirogue traditionnelle</strong> à travers les mangroves, rencontre avec les communautés locales, dégustation d'huîtres et pause sur une île préservée.</p>
      <p>Un véritable voyage au cœur de la nature sénégalaise, accompagné de votre guide <strong>Kali</strong> qui vous fera découvrir les secrets de ce delta exceptionnel.</p>
    `,
    highlights: [
      "Navigation en pirogue au cœur des mangroves classées UNESCO",
      "Observation des oiseaux : pélicans, hérons, aigrettes, martin-pêcheurs",
      "Visite d'un village de pêcheurs sérère et immersion dans la vie locale",
      "Découverte des amas coquilliers, vestiges archéologiques millénaires",
      "Dégustation d'huîtres fraîches sur l'île",
      "Repas traditionnel thiéboudienne inclus",
    ],
    listInclus: [
      "Transport aller-retour depuis Mbour / Somone",
      "Location pirogue traditionnelle + pilote expérimenté",
      "Guide naturaliste bilingue (Kali ou son équipe)",
      "Repas traditionnel thiéboudienne inclus",
      "Eau minérale et jus de fruits locaux",
    ],
    listExclus: [
      "Boissons alcoolisées",
      "Achats dans les villages",
      "Équipement snorkeling (disponible sur demande)",
    ],
  },

  {
    id:      'mbour',
    titre:   "Arrivée des Pêcheurs de M'bour",
    badge:   'Authentique',
    duree:   'Matinée (4h)',
    type:    '🎣 Pêche artisanale',
    groupe:  '👥 Tous groupes',
    depart:  "Plage de M'bour",
    resume:  "Vivez une scène authentique du quotidien sénégalais entre mer et traditions.",
    /* ── Vos vraies images ── */
    images: [
      '59.jpg',
      '60.jpg',
      '61.jpg',
      '62.jpg',
      '63.jpg',
    ],
    description: `
      <p>Assistez au retour spectaculaire des <strong>pirogues colorées</strong> de pêche, à la criée haute en couleurs, échangez avec les pêcheurs artisans. Plongez dans l'ambiance unique de la Petite Côte.</p>
      <p>Votre guide <strong>Kali</strong> vous emmènera ensuite au <strong>marché aux poissons de M'bour</strong> pour découvrir les techniques de séchage, fumage et vente du poisson. Une immersion totale dans la vie sénégalaise authentique.</p>
    `,
    highlights: [
      "Spectacle de l'arrivée des pirogues colorées au lever du soleil",
      "Rencontre directe avec les pêcheurs et les mareyeuses du marché",
      "Visite du grand marché aux poissons de M'bour",
      "Découverte des techniques de séchage et fumage du poisson",
      "Séance photo exceptionnelle dans la lumière dorée du matin",
      "Dégustation de fruits de mer frais",
    ],
    listInclus: [
      "Transport depuis Mbour / Somone",
      "Guide bilingue certifié (Kali ou équipe)",
      "Visite commentée du marché aux poissons",
      "Eau minérale",
    ],
    listExclus: [
      "Achats au marché",
      "Petit-déjeuner (disponible sur demande)",
      "Pourboires",
    ],
  },

  {
    id:      'coquillages',
    titre:   'Excursion Île aux Coquillages',
    badge:   'Patrimoine',
    duree:   'Demi-journée',
    type:    '🐚 Île de Fadiouth',
    groupe:  '👥 Tous groupes',
    depart:  'Mbour / Somone',
    resume:  "Un site unique mêlant spiritualité, histoire et architecture naturelle.",
    /* ── Vos vraies images ── */
    images: [
      '64.jpg',
      '65.jpg',
      '66.jpg',
      '67.jpg',
      '68.jpg',
    ],
    description: `
      <p>L'<strong>île de Fadiouth</strong>, entièrement constituée de coquillages, reliée à la terre par une passerelle de bois, est l'une des curiosités les plus étonnantes du Sénégal. Découvrez le <strong>cimetière mixte chrétien-musulman</strong>, l'artisanat local et la sérénité des lieux.</p>
      <p>Une expérience hors du commun où spiritualité, histoire et architecture naturelle se mêlent dans un décor unique en Afrique de l'Ouest.</p>
    `,
    highlights: [
      "Île entièrement construite sur des coquillages (Fadiouth)",
      "Cimetière mixte chrétien-musulman, symbole de la paix interreligieuse",
      "Traversée de la passerelle en bois reliant l'île à Joal",
      "Rencontre avec les artisans locaux",
      "Découverte du grenier à mil sur l'île voisine",
      "Atmosphère unique et sereine loin du tourisme de masse",
    ],
    listInclus: [
      "Transport aller-retour depuis Mbour / Somone",
      "Guide bilingue (Kali ou équipe)",
      "Entrée à l'île et visite commentée",
      "Eau minérale",
    ],
    listExclus: [
      "Repas (disponible sur place)",
      "Achats artisanat",
      "Pourboires",
    ],
  },

  {
    id:      'bandia',
    titre:   'Safari Bandia & Ranch des Lions',
    badge:   'Safari',
    duree:   'Journée safari (7h)',
    type:    '🦁 4x4 ouvert',
    groupe:  '👥 Max 8 pers.',
    depart:  'Mbour / Somone',
    resume:  "Observez la faune africaine lors d'un safari sécurisé et spectaculaire.",
    /* ── Vos vraies images ── */
    images: [
      '1.jpeg',
      '8.jpeg',
      '53.jpeg',
      '24.jpeg',
      '33.jpeg',
      '21.jpeg',
      '49.jpeg',
    ],
    description: `
      <p>À 1h de Somone, partez en <strong>safari 4x4</strong> dans la <strong>Réserve de Bandia</strong> (3 500 hectares) : girafes, rhinocéros blancs, buffles, hyènes, antilopes et bien d'autres vous attendent dans leur habitat naturel.</p>
      <p>Puis cap sur le <strong>Ranch des Lions</strong> où vous approcherez des lions à pied avec un guide expert — une expérience unique en Afrique de l'Ouest. Idéal pour les familles avec enfants.</p>
    `,
    highlights: [
      "Safari 4x4 dans la Réserve de Bandia (3 500 hectares de savane)",
      "Rhinocéros blancs, girafes, buffles, hyènes et phacochères",
      "Ranch des Lions : approche à pied avec guide expert",
      "+150 espèces d'oiseaux dans la réserve",
      "Pique-nique en pleine brousse sous les acacias",
      "Idéal familles : sécurisé et adapté à tous les âges",
    ],
    listInclus: [
      "Transport aller-retour 4x4 climatisé depuis Mbour / Somone",
      "Droits d'entrée Réserve de Bandia",
      "Droits d'entrée Ranch des Lions",
      "Guide safari bilingue (Kali ou équipe)",
      "Pique-nique traditionnel dans la réserve",
      "Eau minérale et jus de fruits",
    ],
    listExclus: [
      "Boissons alcoolisées",
      "Photos pro avec les animaux",
      "Boutique souvenir",
    ],
  },

  {
    id:      'lompoul',
    titre:   'Saint-Louis & Désert de Lompoul',
    badge:   'Désert & Étoiles',
    duree:   '2 jours / 1 nuit',
    type:    '🐪 Chameau + bivouac',
    groupe:  '👥 Max 10 pers.',
    depart:  'Mbour / Somone',
    resume:  "Circuit complet entre ville coloniale, dunes dorées et nuit étoilée.",
    /* ── Vos vraies images ── */
    images: [
      '57.webp',
      '42.jpeg',
      '46.jpeg',
      '39.jpeg',
      '22.jpeg',
      '69.jpg',
      '70.jpg',
    ],
    description: `
      <p>Découvrez <strong>Saint-Louis</strong>, patrimoine mondial de l'UNESCO depuis 2000, ses ruelles colorées, son Pont Faidherbe et ses quartiers de pêcheurs animés.</p>
      <p>Puis aventure dans le <strong>désert de Lompoul</strong> : balade en dromadaire au coucher du soleil, dîner traditionnel au feu de camp sous un ciel d'étoiles absolu et nuit sous <strong>tente berbère traditionnelle</strong>. Une expérience hors du temps.</p>
    `,
    highlights: [
      "Visite de Saint-Louis classée UNESCO et son Pont Faidherbe (1897)",
      "Découverte du quartier des pêcheurs de Guet-Ndar",
      "Balade à dos de dromadaire au coucher du soleil sur les dunes",
      "Nuit sous tente berbère équipée au cœur du désert",
      "Ciel étoilé d'une pureté absolue loin de toute pollution lumineuse",
      "Lever de soleil spectaculaire sur les dunes dorées",
    ],
    listInclus: [
      "Transport aller-retour climatisé depuis Mbour / Somone",
      "Balade en dromadaire (1h)",
      "Nuit en tente berbère équipée (matelas, draps, couverture)",
      "Dîner traditionnel au feu de camp",
      "Petit-déjeuner le lendemain matin",
      "Thé à la menthe et eau minérale",
    ],
    listExclus: [
      "Boissons alcoolisées",
      "Quad / sandboard (supplément possible)",
      "Assurance annulation",
    ],
  },

];

/* =====================================================
   INITIALISATION
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {

  if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

  /* ── Génération des cartes ── */
  const grid = document.getElementById('excursions-grid') || document.getElementById('excursionsGrid');
  if (!grid) return;

  EXCURSIONS.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${ex.images[0]}" alt="${ex.titre}" loading="lazy"
           onerror="this.style.background='#f0e8d8';this.style.minHeight='220px'" />
      <div class="card-content">
        <span class="card-cat">${ex.badge}</span>
        <h3>${ex.titre}</h3>
        <p>${ex.resume}</p>
        <div class="card-footer-row">
          <span class="card-duree">⏱ ${ex.duree}</span>
          <button class="btn-savoir" data-id="${ex.id}">
            En savoir plus <span>→</span>
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  /* ── Clic sur "En savoir plus" ── */
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.btn-savoir');
    if (!btn) return;
    const ex = EXCURSIONS.find(x => x.id === btn.dataset.id);
    if (ex) openModal(ex);
  });

  /* ══════════════════════════════════════════════
     MODAL
  ══════════════════════════════════════════════ */
  const overlay    = document.getElementById('modal-overlay') || document.getElementById('excursionModal');
  const mainImg    = document.getElementById('main-modal-img') || document.getElementById('modalMainImage');
  const thumbGal   = document.getElementById('thumbnail-gallery') || document.getElementById('thumbnailContainer');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title')  || document.getElementById('modalTitle');
  const modalMeta  = document.getElementById('modal-meta');
  const modalDesc  = document.getElementById('modal-desc-text') || document.getElementById('modalDesc');
  const hlList     = document.getElementById('modal-highlights');
  const inclList   = document.getElementById('modal-inclus');
  const exclList   = document.getElementById('modal-exclus');

  if (!overlay || !mainImg) return;

  function openModal(ex) {

    /* ── Image principale ── */
    mainImg.src     = ex.images[0];
    mainImg.alt     = ex.titre;
    mainImg.style.opacity = '1';
    mainImg.style.transition = 'opacity .28s ease';

    /* ── Miniatures ── */
    thumbGal.innerHTML = '';
    ex.images.forEach((url, i) => {
      const img = document.createElement('img');
      img.className = 'thumb' + (i === 0 ? ' active-thumb' : '');
      img.src   = url;
      img.alt   = `Photo ${i + 1} – ${ex.titre}`;
      img.loading = 'lazy';

      img.addEventListener('click', () => {
        /* Fondu sur la grande image */
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = url;
          mainImg.style.opacity = '1';
        }, 280);
        thumbGal.querySelectorAll('.thumb').forEach(t => t.classList.remove('active-thumb'));
        img.classList.add('active-thumb');
        img.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      thumbGal.appendChild(img);
    });

    /* ── Badge & titre ── */
    if (modalBadge)  modalBadge.textContent = ex.badge;
    if (modalTitle)  modalTitle.textContent = ex.titre;

    /* ── Méta-infos ── */
    if (modalMeta) {
      modalMeta.innerHTML = `
        <span class="meta-pill">⏱ ${ex.duree}</span>
        <span class="meta-pill">${ex.type}</span>
        <span class="meta-pill">${ex.groupe}</span>
        <span class="meta-pill">📍 ${ex.depart}</span>`;
    }

    /* ── Description ── */
    if (modalDesc) {
      if (modalDesc.tagName === 'P') {
        /* Ancienne modale simple (texte brut) */
        modalDesc.textContent = ex.description.replace(/<[^>]+>/g, '');
      } else {
        modalDesc.innerHTML = ex.description;
      }
    }

    /* ── Points forts ── */
    if (hlList) {
      hlList.innerHTML = '';
      ex.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        hlList.appendChild(li);
      });
    }

    /* ── Inclus ── */
    if (inclList) {
      inclList.innerHTML = '';
      ex.listInclus.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>✅</span><span>${item}</span>`;
        inclList.appendChild(li);
      });
    }

    /* ── Exclus ── */
    if (exclList) {
      exclList.innerHTML = '';
      ex.listExclus.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>❌</span><span>${item}</span>`;
        exclList.appendChild(li);
      });
    }

    /* ── Champ caché formulaire ── */
    const rExcursion = document.getElementById('r-excursion');
    if (rExcursion) rExcursion.value = ex.titre;

    /* ── WhatsApp direct ── */
    const waBtn = document.getElementById('wa-direct');
    if (waBtn) {
      const waMsg = encodeURIComponent(
        `Bonjour Kali ! Je suis intéressé(e) par l'excursion : ${ex.titre}. Pouvez-vous me donner les tarifs et disponibilités ?`
      );
      waBtn.href = `https://wa.me/221776147634?text=${waMsg}`;
    }

    /* ── Réinitialiser formulaire ── */
    resetForm();

    /* ── Afficher modal ── */
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    /* Scroll en haut */
    setTimeout(() => {
      const mb = document.querySelector('.modal-body');
      if (mb) mb.scrollTop = 0;
    }, 60);
  }

  /* ── Fermer modal ── */
  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* Bouton fermer */
  const closeBtns = document.querySelectorAll('#close-modal, #closeModalBtn');
  closeBtns.forEach(b => b.addEventListener('click', closeModal));

  /* Clic overlay */
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  /* Touche Échap */
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ══════════════════════════════════════════════
     FORMULAIRE EMAILJS
  ══════════════════════════════════════════════ */
  const form       = document.getElementById('resa-form');
  const btn        = document.getElementById('resa-btn');
  const successBox = document.getElementById('resa-success');
  const errorBox   = document.getElementById('resa-error');

  function resetForm() {
    if (!form) return;
    form.reset();
    form.style.display = '';
    successBox?.classList.remove('show');
    errorBox?.classList.remove('show');
    if (btn) { btn.classList.remove('loading'); btn.disabled = false; }
    const dateInput = document.getElementById('r-date');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
    ['r-prenom','r-nom','r-email'].forEach(id => {
      document.getElementById(id)?.classList.remove('invalid');
      document.getElementById(`err-${id}`)?.classList.remove('show');
    });
  }

  if (form && btn) {

    ['r-prenom','r-nom','r-email'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => {
        document.getElementById(id)?.classList.remove('invalid');
        document.getElementById(`err-${id}`)?.classList.remove('show');
      });
    });

    function showErr(id) {
      document.getElementById(id)?.classList.add('invalid');
      document.getElementById(`err-${id}`)?.classList.add('show');
      return document.getElementById(id);
    }

    function validate() {
      let ok = true, first = null;
      const prenom = document.getElementById('r-prenom');
      if (!prenom?.value.trim()) { first = first || showErr('r-prenom'); ok = false; }
      const nom = document.getElementById('r-nom');
      if (!nom?.value.trim()) { first = first || showErr('r-nom'); ok = false; }
      const email = document.getElementById('r-email');
      if (!email?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        first = first || showErr('r-email'); ok = false;
      }
      if (first) setTimeout(() => { first.scrollIntoView({ behavior:'smooth', block:'center' }); first.focus(); }, 100);
      return ok;
    }

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const honey = form.querySelector('[name="_honey"]');
      if (honey?.value) return;
      if (!validate()) return;

      btn.classList.add('loading');
      btn.disabled = true;
      errorBox?.classList.remove('show');

      let dateFormatted = 'Non renseignée';
      const dateEl = document.getElementById('r-date');
      if (dateEl?.value) {
        dateFormatted = new Date(dateEl.value).toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' });
      }

      const params = {
        prenom:      document.getElementById('r-prenom').value.trim(),
        nom:         document.getElementById('r-nom').value.trim(),
        email:       document.getElementById('r-email').value.trim(),
        telephone:   document.getElementById('r-tel')?.value.trim()      || 'Non renseigné',
        excursion:   document.getElementById('r-excursion')?.value       || 'Non renseignée',
        personnes:   document.getElementById('r-personnes')?.value       || 'Non renseigné',
        date_voyage: dateFormatted,
        pays:        'Non renseigné',
        message:     document.getElementById('r-message')?.value.trim()  || 'Pas de message',
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        form.style.display = 'none';
        successBox?.classList.add('show');
        successBox?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (err) {
        console.error('EmailJS:', err);
        errorBox?.classList.add('show');
      } finally {
        btn.classList.remove('loading');
        btn.disabled = false;
      }
    });
  }

  /* ── Burger menu ── */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

});
