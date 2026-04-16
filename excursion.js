/* =========================================================
   KALIEXCURSIONS SÉNÉGAL – excursion.js
   Galerie miniature + formulaire → kalidou.kandji.senegal@gmail.com
   ========================================================= */

const EMAILJS_PUBLIC_KEY  = 'fKyFDu7LDrefmKepk';
const EMAILJS_SERVICE_ID  = 'service_9ibpj3i';
const EMAILJS_TEMPLATE_ID = 'template_0af4l2q';

/* ═══════════════════════════════════════════════════════════
   DONNÉES DE TOUTES LES EXCURSIONS
   Chaque fiche contient : titre, badge, durée, images (≥4),
   description longue, points forts, inclus, non inclus
═══════════════════════════════════════════════════════════ */
const EXCURSIONS = {

  /* ── 1. ÎLE DE GORÉE ─────────────────────────────────── */
  goree: {
    titre:      'Dakar & Île de Gorée',
    badge:      'Historique',
    duree:      'Journée complète',
    type:       '🚢 Traversée en ferry',
    groupe:     '👥 Groupe ou privé',
    depart:     'Mbour / Somone',
    groupeInfo: 'Max 15 personnes',
    inclus:     'Transport + ferry + guide',
    images: [
      '55.jpg',
      '10.jpeg',
      '5.jpeg',
      '30.jpeg',
      '35.jpeg',
    ],
    description: `
      <p>L'<strong>île de Gorée</strong>, classée au patrimoine mondial de l'UNESCO, est l'un des sites les plus émouvants et les plus riches en histoire de toute l'Afrique de l'Ouest. Accessible en 20 minutes de ferry depuis Dakar, cette petite île de 900 mètres de long constitue un témoignage unique et bouleversant de la traite négrière qui marqua profondément l'histoire de l'humanité.</p>
      <p>Au fil des ruelles pavées ornées de bougainvilliers en fleurs et de façades colorées, votre guide <strong>KALIDOU KANDJI</strong> vous emmènera à la découverte de la <strong>Maison des Esclaves</strong> et de sa célèbre <em>Porte du Voyage sans Retour</em>, du fort colonial, des musées et des galeries d'art où des artistes locaux exposent leurs créations inspirées de la culture wolof et sérère.</p>
      <p>Au-delà de la mémoire douloureuse, Gorée est aussi un village vivant, chaleureux, animé par des pêcheurs, des artisans, des restaurants servant les saveurs authentiques du Sénégal et une vue magnifique sur l'Atlantique. Une journée inoubliable qui mêle histoire, culture et beauté naturelle.</p>
    `,
    highlights: [
      'Visite de la Maison des Esclaves et la Porte du Voyage sans Retour (classée UNESCO)',
      'Promenade dans les ruelles colorées et l\'architecture coloniale portugaise du XVe siècle',
      'Rencontre avec les artistes et artisans locaux de l\'île',
      'Panorama exceptionnel sur l\'océan Atlantique depuis les remparts du fort',
      'Dégustation de plats traditionnels sénégalais dans un restaurant authentique',
      'Commentaires historiques complets par Kali, guide certifié bilingue',
    ],
    listInclus: [
      'Transport aller-retour depuis Mbour / Somone',
      'Billets de ferry Dakar ↔ Gorée inclus',
      'Guide officiel bilingue (français / anglais)',
      'Entrée à la Maison des Esclaves',
      'Eau minérale pendant le trajet',
    ],
    listExclus: [
      'Repas du midi (recommandations fournies)',
      'Achats souvenirs et artisanat',
      'Boissons alcoolisées',
      'Pourboires (laissés à votre appréciation)',
    ],
  },

  /* ── 2. SINE-SALOUM ──────────────────────────────────── */
  saloum: {
    titre:      'Îles du Sine-Saloum',
    badge:      'Nature & Aventure',
    duree:      'Journée complète',
    type:       '🚣 En pirogue traditionnelle',
    groupe:     '👥 Max 12 personnes',
    depart:     'Djifer ou Missira',
    groupeInfo: 'Max 12 personnes',
    inclus:     'Transport + pirogue + repas',
    images: [
      '47.jpeg',
      '3.jpeg',
      '14.jpeg',
      '28.jpeg',
      '35.jpeg',
    ],
    description: `
      <p>Le <strong>delta du Saloum</strong>, classé Réserve de Biosphère par l'UNESCO, est un enchevêtrement fascinant de bras de mer, de bolongs (chenaux marécageux), de <strong>mangroves luxuriantes</strong> et d'îles habitées par des communautés de pêcheurs vivant en parfaite harmonie avec leur environnement depuis des générations.</p>
      <p>Embarquez à bord d'une <strong>pirogue traditionnelle</strong> pour glisser silencieusement au cœur de cet écosystème unique. Observez les <strong>oiseaux migrateurs</strong> — hérons cendrés, pélicans blancs, aigrettes, martins-pêcheurs et cormorans — qui font de ce delta l'un des plus importants sites ornithologiques d'Afrique de l'Ouest.</p>
      <p>Une halte dans un <strong>village de pêcheurs sérère</strong> vous permettra de rencontrer des familles d'une générosité incomparable, de goûter un <em>thiéboudienne</em> préparé au feu de bois et de comprendre comment ces communautés préservent leurs traditions tout en s'adaptant au monde moderne. Une expérience de nature et d'humanité profonde.</p>
    `,
    highlights: [
      'Navigation en pirogue au cœur des mangroves classées UNESCO',
      'Observation des oiseaux : pélicans, hérons, aigrettes et martin-pêcheurs',
      'Visite d\'un village de pêcheurs sérère et immersion dans la vie quotidienne',
      'Découverte des amas coquilliers, vestiges archéologiques millénaires',
      'Baignade dans les eaux limpides des îles isolées du delta',
      'Repas traditionnel thiéboudienne (riz au poisson frais) inclus',
    ],
    listInclus: [
      'Transport aller-retour depuis Mbour / Somone',
      'Location de la pirogue traditionnelle + pilote expérimenté',
      'Guide naturaliste bilingue (Kali ou son équipe)',
      'Repas traditionnel thiéboudienne inclus',
      'Eau minérale et jus de fruits locaux',
    ],
    listExclus: [
      'Boissons alcoolisées',
      'Achats dans les villages et marchés',
      'Équipement de snorkeling (disponible sur demande)',
      'Assurance personnelle',
    ],
  },

  /* ── 3. PÊCHEURS DE M'BOUR ───────────────────────────── */
  mbour: {
    titre:      "Arrivée des Pêcheurs de M'bour",
    badge:      'Authentique',
    duree:      'Demi-journée (tôt le matin)',
    type:       '🎣 Scène de pêche artisanale',
    groupe:     '👥 Tous groupes',
    depart:     "Plage de M'bour",
    groupeInfo: 'Groupes de toutes tailles',
    inclus:     'Transport + guide + marché',
    images: [
      'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80',
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
    ],
    description: `
      <p>Chaque matin, dès l'aube, la <strong>plage de M'bour</strong> se transforme en un spectacle humain vivant, coloré et profondément authentique. Des dizaines de <strong>pirogues peintes aux couleurs vives</strong> rentrent de leur nuit en mer, lourdement chargées de thiof, de capitaines, de dorades argentées et d'autres trésors de l'Atlantique.</p>
      <p>C'est un ballet humain d'une intensité rare : les pêcheurs tirent leurs embarcations sur le sable pendant que les <strong>mareyeuses en boubous colorés</strong> négocient les prises avec une énergie communicative et joyeuse. Des enfants courent pieds nus, les mouettes plongent, l'air est chargé d'embruns salés et d'odeurs de l'Océan.</p>
      <p>Votre guide <strong>Kali</strong> vous emmènera ensuite au <strong>marché aux poissons de M'bour</strong>, l'un des plus importants de la Petite Côte, où vous découvrirez les espèces séchées, fumées, salées ou préparées pour l'export. Une immersion totale dans la vie authentique sénégalaise, loin des circuits touristiques conventionnels.</p>
    `,
    highlights: [
      'Spectacle magique de l\'arrivée des pirogues colorées au lever du soleil',
      'Rencontre directe avec les pêcheurs et les mareyeuses du marché',
      'Visite du grand marché aux poissons de M\'bour, un des plus importants du Sénégal',
      'Découverte des techniques traditionnelles de séchage et fumage du poisson',
      'Séance photo exceptionnelle dans une lumière dorée du matin',
      'Témoignages sur la vie maritime et les traditions de pêche ancestrales',
    ],
    listInclus: [
      'Transport depuis Mbour / Somone (à pied ou véhicule)',
      'Guide bilingue certifié (Kali ou son équipe)',
      'Visite commentée du marché aux poissons',
      'Eau minérale',
      'Conseils photo et meilleurs angles',
    ],
    listExclus: [
      'Achats au marché',
      'Petit-déjeuner (disponible sur demande +)',
      'Pourboires',
    ],
  },

  /* ── 4. SAFARI BANDIA ────────────────────────────────── */
  bandia: {
    titre:      'Safari Bandia & Ranch des Lions',
    badge:      'Safari',
    duree:      'Journée complète',
    type:       '🦁 Safari en 4x4 ouvert',
    groupe:     '👥 Max 8 personnes',
    depart:     'Mbour / Somone',
    groupeInfo: 'Max 8 personnes par véhicule',
    inclus:     'Transport 4x4 + entrées + pique-nique',
    images: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80',
      'https://images.unsplash.com/photo-1534470397273-64d6b9db4de5?w=900&q=80',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80',
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=900&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
    ],
    description: `
      <p>À seulement 65 km au nord de Dakar, la <strong>Réserve de Bandia</strong> est un joyau naturel de <strong>3 500 hectares</strong> qui offre l'une des expériences de safari les plus accessibles et les plus spectaculaires d'Afrique de l'Ouest. Cette réserve privée abrite une faune africaine remarquable, réintroduite avec succès dans un habitat naturel préservé.</p>
      <p>À bord de notre <strong>véhicule 4x4 ouvert</strong>, partez à la rencontre des <strong>rhinocéros blancs</strong> — une espèce rarissime — des majestueuses <strong>girafes réticulées</strong>, des troupeaux de buffles, hyènes, phacochères, singes vervet et d'une avifaune exceptionnelle de plus de 150 espèces. Puis cap sur le <strong>Ranch des Lions de Fathala</strong>, où vous approchez des lions à pied avec un guide expert — une expérience unique en Afrique de l'Ouest.</p>
      <p>Entre deux safaris, un <strong>pique-nique en pleine brousse</strong>, entouré des sons de la savane africaine, viendra ponctuer cette journée mémorable. Parfait pour les familles avec enfants : tout est sécurisé et parfaitement encadré par des professionnels.</p>
    `,
    highlights: [
      'Safari en 4x4 ouvert dans la Réserve de Bandia (3 500 hectares de savane)',
      'Observation des rhinocéros blancs, girafes, buffles, hyènes et phacochères',
      'Ranch des Lions : approche des lions à pied avec un guide expert (unique en AOF)',
      'Plus de 150 espèces d\'oiseaux dont des vautours, cigognes et rolliers',
      'Pique-nique en pleine brousse sous les acacias',
      'Idéal pour les familles : sécurisé, encadré et adapté à tous les âges',
    ],
    listInclus: [
      'Transport aller-retour en 4x4 climatisé depuis Mbour / Somone',
      'Droits d\'entrée Réserve de Bandia',
      'Droits d\'entrée Ranch des Lions de Fathala',
      'Guide safari bilingue et expérimenté (Kali ou son équipe)',
      'Pique-nique traditionnel dans la réserve',
      'Eau minérale et jus de fruits',
    ],
    listExclus: [
      'Boissons alcoolisées',
      'Photos professionnelles avec les animaux',
      'Achats en boutique souvenir',
      'Assurance annulation',
    ],
  },

  /* ── 5. DÉSERT DE LOMPOUL ────────────────────────────── */
  lompoul: {
    titre:      'Désert de Lompoul – Nuit sous les Étoiles',
    badge:      'Désert & Étoiles',
    duree:      '2 jours / 1 nuit',
    type:       '🐪 Chameau + bivouac berbère',
    groupe:     '👥 Max 10 personnes',
    depart:     'Mbour / Somone',
    groupeInfo: 'Max 10 personnes',
    inclus:     'Transport + chameau + nuit + repas',
    images: [
      'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1600&q=80',
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=900&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
      'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900&q=80',
      'https://images.unsplash.com/photo-1565452344-1b1b654ed0a0?w=900&q=80',
    ],
    description: `
      <p>Le <strong>désert de Lompoul</strong> est le secret le mieux gardé du Sénégal : le seul véritable <strong>désert de sable d'Afrique de l'Ouest</strong>, avec ses dunes dorées pouvant atteindre 30 mètres de hauteur, surgissant comme par magie au cœur de la savane verte. Un paysage lunaire d'une beauté à couper le souffle, à seulement 3 heures de route de Mbour.</p>
      <p>Arrivez au coucher du soleil pour vivre la magie des <strong>dunes incandescentes</strong>. Montez à dos de <strong>chameau</strong> pour admirer depuis les hauteurs les nuances orangées, roses et pourpres du ciel saharien. Le soir venu, installez-vous autour du <strong>feu de camp</strong> sous un ciel d'une pureté absolue, truffé d'étoiles, loin de toute pollution lumineuse. Un dîner traditionnel est servi, accompagné de musique sénégalaise.</p>
      <p>Le lendemain matin, réveillez-vous pour le spectacle incomparable du <strong>lever de soleil sur les dunes</strong>, tasse de thé à la menthe en main, dans votre <em>tente berbère</em> équipée. Une expérience hors du temps qui réconcilie avec l'essentiel et grave des images inoubliables dans la mémoire.</p>
    `,
    highlights: [
      'Arrivée au coucher du soleil : dunes dorées et ciel flamboyant de couleurs',
      'Balade à dos de chameau au crépuscule au sommet des dunes',
      'Nuit sous tente berbère traditionnelle en plein cœur du désert',
      'Ciel étoilé d\'une pureté absolue, loin de toute pollution lumineuse',
      'Feu de camp avec dîner traditionnel et musique sénégalaise',
      'Lever de soleil spectaculaire sur les dunes au petit matin',
    ],
    listInclus: [
      'Transport aller-retour en véhicule climatisé depuis Mbour / Somone',
      'Balade à dos de chameau (1 heure)',
      'Nuit en tente berbère équipée (matelas, draps, couverture)',
      'Dîner traditionnel au feu de camp',
      'Petit-déjeuner le lendemain matin',
      'Thé à la menthe et eau minérale',
      'Guide accompagnateur (Kali ou son équipe)',
    ],
    listExclus: [
      'Boissons alcoolisées',
      'Activités optionnelles : quad, sandboard (supplément)',
      'Assurance annulation',
    ],
  },

  /* ── 6. SAINT-LOUIS ──────────────────────────────────── */
  saintlouis: {
    titre:      'Saint-Louis Coloniale – Cité UNESCO',
    badge:      'Patrimoine UNESCO',
    duree:      'Journée complète',
    type:       '🏛️ Visite culturelle & historique',
    groupe:     '👥 Groupe ou privé',
    depart:     'Mbour / Somone',
    groupeInfo: 'Max 15 personnes',
    inclus:     'Transport + guide + déjeuner',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
      'https://images.unsplash.com/photo-1565452344-1b1b654ed0a0?w=900&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
      'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900&q=80',
    ],
    description: `
      <p><strong>Saint-Louis</strong>, ancienne capitale de l'Afrique Occidentale Française, est classée au <strong>patrimoine mondial de l'UNESCO depuis 2000</strong>. Construite sur une île entre le fleuve Sénégal et l'océan Atlantique, cette ville d'une élégance mélancolique dégage une atmosphère unique, mêlant grandeur coloniale du XIXe siècle et vie africaine authentique et chaleureuse.</p>
      <p>Ses <strong>maisons à balcons de fer forgé</strong>, ses rues pavées animées par le claquement des sabots des calèches, ses grandes bâtisses aux façades ocre et pastel évoquant La Havane ou Carthagène vous transporteront dans une autre époque. Traversez le célèbre <strong>Pont Faidherbe</strong> (1897), chef-d'œuvre de métal conçu par les ateliers Eiffel, pour rejoindre le quartier populaire de Sor et ses marchés animés.</p>
      <p>À l'embouchure du fleuve, la <strong>Langue de Barbarie</strong>, fine bande de sable séparant mer et fleuve, abrite une réserve ornithologique exceptionnelle où nichent des milliers de <strong>pélicans, cormorans et sternes royales</strong>. Une ville qui est à la fois musée vivant, capitale gastronomique — c'est ici que fut inventé le thiéboudienne — et concentré d'âme africaine.</p>
    `,
    highlights: [
      'Visite de l\'île de Saint-Louis et son architecture coloniale classée UNESCO',
      'Promenade sur le mythique Pont Faidherbe, chef-d\'œuvre métallique de 1897',
      'Découverte du quartier des pêcheurs de Guet-Ndar et son effervescence',
      'Visite de la Langue de Barbarie et ses colonies d\'oiseaux spectaculaires',
      'Déjeuner de thiéboudienne, plat national né à Saint-Louis',
      'Coucher de soleil sur le fleuve Sénégal en fin de journée',
    ],
    listInclus: [
      'Transport aller-retour depuis Mbour / Somone',
      'Guide historique et culturel bilingue (Kali ou équipe)',
      'Visite des principaux sites de la ville',
      'Déjeuner traditionnel thiéboudienne inclus',
      'Visite de la Langue de Barbarie',
      'Eau minérale pendant la journée',
    ],
    listExclus: [
      'Musées à entrée payante',
      'Achats souvenirs et artisanat local',
      'Boissons alcoolisées',
    ],
  },

};

/* ═══════════════════════════════════════════════════════════
   INITIALISATION AU CHARGEMENT DE LA PAGE
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Lire l'identifiant dans l'URL : Excursion.html?id=goree
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id') || 'goree';
  const data    = EXCURSIONS[id];

  // Excursion inconnue
  if (!data) {
    document.body.innerHTML = `
      <div style="padding:6rem 5%;text-align:center;font-family:sans-serif">
        <h2>Excursion introuvable</h2>
        <p><a href="index.html" style="color:#C9922B">← Retour à l'accueil</a></p>
      </div>`;
    return;
  }

  /* ── Titre de l'onglet ── */
  document.getElementById('page-title').textContent = data.titre + ' – KaliExcursions';

  /* ── Breadcrumb ── */
  document.getElementById('breadcrumb-title').textContent = data.titre;

  /* ── IMAGE PRINCIPALE ── */
  const heroImg = document.getElementById('ex-hero-img');
  heroImg.style.backgroundImage = `url('${data.images[0]}')`;

  document.getElementById('ex-badge').textContent  = data.badge;
  document.getElementById('ex-title').textContent  = data.titre;
  document.getElementById('ex-duree').textContent  = data.duree;
  document.getElementById('ex-type').textContent   = data.type;
  document.getElementById('ex-groupe').textContent = data.groupe;

  /* ── GALERIE MINIATURES ── */
  const thumbsBar = document.getElementById('thumbs-bar');

  data.images.forEach((url, i) => {
    const btn = document.createElement('button');
    btn.className = 'thumb' + (i === 0 ? ' active' : '');
    btn.style.backgroundImage = `url('${url}')`;
    btn.title = `Photo ${i + 1}`;
    btn.setAttribute('aria-label', `Voir photo ${i + 1}`);

    btn.addEventListener('click', () => {
      // Transition douce sur l'image principale
      heroImg.style.transition = 'opacity .35s ease';
      heroImg.style.opacity    = '0';
      setTimeout(() => {
        heroImg.style.backgroundImage = `url('${url}')`;
        heroImg.style.opacity = '1';
      }, 350);

      // Miniature active
      thumbsBar.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      // Scroll pour garder la miniature visible
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    thumbsBar.appendChild(btn);
  });

  /* ── DESCRIPTION ── */
  document.getElementById('desc-title').textContent  = data.titre;
  document.getElementById('desc-text').innerHTML     = data.description;

  /* ── INFOS PRATIQUES ── */
  document.getElementById('info-duree').textContent  = data.duree;
  document.getElementById('info-depart').textContent = data.depart;
  document.getElementById('info-groupe').textContent = data.groupeInfo;
  document.getElementById('info-inclus').textContent = data.inclus;

  /* ── POINTS FORTS ── */
  const hlList = document.getElementById('highlights-list');
  data.highlights.forEach(h => {
    const li = document.createElement('li');
    li.textContent = h;
    hlList.appendChild(li);
  });

  /* ── LISTE INCLUS ── */
  const listInclus = document.getElementById('list-inclus');
  data.listInclus.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span>✅</span><span>${item}</span>`;
    listInclus.appendChild(li);
  });

  /* ── LISTE EXCLUS ── */
  const listExclus = document.getElementById('list-exclus');
  data.listExclus.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span>❌</span><span>${item}</span>`;
    listExclus.appendChild(li);
  });

  /* ── Champ caché excursion ── */
  document.getElementById('r-excursion').value = data.titre;

  /* ── Lien WhatsApp personnalisé ── */
  const waTxt = encodeURIComponent(
    `Bonjour Kali ! Je suis intéressé(e) par l'excursion : ${data.titre}. Pouvez-vous me donner plus d'informations et les tarifs ?`
  );
  document.getElementById('wa-direct').href = `https://wa.me/221776147634?text=${waTxt}`;

  /* ── Date minimum = aujourd'hui ── */
  const dateInput = document.getElementById('r-date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  /* ══════════════════════════════════════════
     FORMULAIRE EMAILJS
  ══════════════════════════════════════════ */
  if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

  const form       = document.getElementById('resa-form');
  const btn        = document.getElementById('resa-btn');
  const successBox = document.getElementById('resa-success');
  const errorBox   = document.getElementById('resa-error');

  /* Afficher erreur champ */
  function showErr(id) {
    const el  = document.getElementById(id);
    const err = document.getElementById(`err-${id}`);
    el?.classList.add('invalid');
    err?.classList.add('show');
    return el;
  }
  /* Effacer erreur champ */
  function clearErr(id) {
    document.getElementById(id)?.classList.remove('invalid');
    document.getElementById(`err-${id}`)?.classList.remove('show');
  }

  /* Nettoyage en temps réel */
  ['r-prenom', 'r-nom', 'r-email'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => clearErr(id));
  });

  /* Validation */
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

    if (first) {
      setTimeout(() => {
        first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        first.focus();
      }, 150);
    }
    return ok;
  }

  /* Soumission */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Anti-spam
    const honey = form.querySelector('[name="_honey"]');
    if (honey?.value) return;

    if (!validate()) return;

    // Chargement
    btn.classList.add('loading');
    btn.disabled = true;
    errorBox.classList.remove('show');

    // Formater la date
    let dateFormatted = 'Non renseignée';
    const dateEl = document.getElementById('r-date');
    if (dateEl?.value) {
      dateFormatted = new Date(dateEl.value).toLocaleDateString('fr-FR', {
        day: '2-digit', month: 'long', year: 'numeric',
      });
    }

    const templateParams = {
      prenom:      document.getElementById('r-prenom').value.trim(),
      nom:         document.getElementById('r-nom').value.trim(),
      email:       document.getElementById('r-email').value.trim(),
      telephone:   document.getElementById('r-tel').value.trim()       || 'Non renseigné',
      excursion:   data.titre,
      personnes:   document.getElementById('r-personnes').value        || 'Non renseigné',
      date_voyage: dateFormatted,
      pays:        'Non renseigné',
      message:     document.getElementById('r-message').value.trim()   || 'Pas de message',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      // ✅ Succès
      form.style.display = 'none';
      successBox.classList.add('show');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } catch (err) {
      console.error('EmailJS error :', err);
      errorBox.classList.add('show');
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    } finally {
      btn.classList.remove('loading');
      btn.disabled = false;
    }
  });

  /* ── Burger menu ── */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

});
