/* =========================================================
   TERANGA VOYAGES – contact.js
   Envoi du formulaire vers kalidou.kandji.senegal@gmail.com
   via EmailJS (gratuit – 200 emails/mois)
   =========================================================

   ⚙️  CONFIGURATION (à faire 1 seule fois – 5 minutes)
   ─────────────────────────────────────────────────────
   1. Créez un compte sur https://www.emailjs.com (gratuit)

   2. Allez dans "Email Services" → Add New Service
      → Choisissez "Outlook" → connectez kalidou.kandji.senegal@gmail.com
      → Copiez le SERVICE_ID (ex: service_abc123)

   3. Allez dans "Email Templates" → Create New Template
      → Dans le champ "To Email" mettez : kalidou.kandji.senegal@gmail.com
      → Subject : Nouvelle demande Teranga Voyages – {{prenom}} {{nom}}
      → Body (copiez ce texte) :

      Bonjour,

      Vous avez reçu une nouvelle demande depuis votre site.

      ─── CLIENT ────────────────────────
      Prénom   : {{prenom}}
      Nom      : {{nom}}
      Email    : {{email}}
      Tél/WA   : {{telephone}}
      Pays     : {{pays}}

      ─── EXCURSION ─────────────────────
      Excursion : {{excursion}}
      Personnes : {{personnes}}
      Date      : {{date_voyage}}

      ─── MESSAGE ───────────────────────
      {{message}}

      → Copiez le TEMPLATE_ID (ex: template_xyz789)

   4. "Account" → "General" → copiez votre Public Key

   5. Remplacez les 3 lignes ci-dessous et sauvegardez.
   ========================================================= */

const EMAILJS_PUBLIC_KEY  = 'fKyFDu7LDrefmKepk';
const EMAILJS_SERVICE_ID  = 'service_9ibpj3i';
const EMAILJS_TEMPLATE_ID = 'template_0af4l2q';

/* ─────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // Initialiser EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form        = document.getElementById('contact-form');
  const btnSend     = document.getElementById('btn-send');
  const successBox  = document.getElementById('success-box');
  const errorBox    = document.getElementById('error-box');
  const successName = document.getElementById('success-name');
  const btnNouveau  = document.getElementById('btn-nouveau');
  const charCount   = document.getElementById('char-count');
  const setupNotice = document.getElementById('setup-notice');
  const btnDismiss  = document.getElementById('btn-dismiss');

  if (!form) return;

  /* ── Notice de configuration ── */
  if (btnDismiss) {
    btnDismiss.addEventListener('click', () => {
      setupNotice.classList.add('hidden');
      localStorage.setItem('tv_setup_dismissed', '1');
    });
  }
  if (localStorage.getItem('tv_setup_dismissed') === '1' && setupNotice) {
    setupNotice.classList.add('hidden');
  }

  /* ── Compteur textarea ── */
  const textarea = document.getElementById('message');
  if (textarea && charCount) {
    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      charCount.textContent = `${len} / 800`;
      charCount.style.color = len > 750 ? '#e74c3c' : 'var(--muted)';
    });
  }

  /* ── Nettoyage erreurs en temps réel ── */
  ['prenom','nom','email','excursion','message'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    ['input','change'].forEach(evt => {
      el.addEventListener(evt, () => {
        el.classList.remove('invalid');
        const errEl = document.getElementById(`err-${id}`);
        if (errEl) errEl.classList.remove('show');
      });
    });
  });

  /* ── Afficher une erreur de champ ── */
  function showFieldError(id) {
    const el  = document.getElementById(id);
    const err = document.getElementById(`err-${id}`);
    if (el)  el.classList.add('invalid');
    if (err) err.classList.add('show');
    return el;
  }

  /* ── Validation complète ── */
  function validate() {
    let ok = true;
    let first = null;

    const prenom = document.getElementById('prenom');
    if (!prenom?.value.trim()) { first = first || showFieldError('prenom'); ok = false; }

    const nom = document.getElementById('nom');
    if (!nom?.value.trim()) { first = first || showFieldError('nom'); ok = false; }

    const email = document.getElementById('email');
    if (!email?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      first = first || showFieldError('email'); ok = false;
    }

    const excursion = document.getElementById('excursion');
    if (!excursion?.value) { first = first || showFieldError('excursion'); ok = false; }

    const msg = document.getElementById('message');
    if (!msg?.value.trim()) { first = first || showFieldError('message'); ok = false; }

    if (first) {
      first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => first.focus(), 400);
    }
    return ok;
  }

  /* ── Paramètres template EmailJS ── */
  function buildParams() {
    let dateFormatted = 'Non renseignée';
    const dateEl = document.getElementById('date_voyage');
    if (dateEl?.value) {
      dateFormatted = new Date(dateEl.value).toLocaleDateString('fr-FR', {
        day: '2-digit', month: 'long', year: 'numeric'
      });
    }
    return {
      prenom:      document.getElementById('prenom').value.trim(),
      nom:         document.getElementById('nom').value.trim(),
      email:       document.getElementById('email').value.trim(),
      telephone:   document.getElementById('telephone').value.trim() || 'Non renseigné',
      pays:        document.getElementById('pays').value            || 'Non renseigné',
      excursion:   document.getElementById('excursion').value,
      personnes:   document.getElementById('personnes').value       || 'Non renseigné',
      date_voyage: dateFormatted,
      message:     document.getElementById('message').value.trim(),
    };
  }

  /* ── Soumission ── */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Anti-spam
    const honey = form.querySelector('[name="_honey"]');
    if (honey?.value) return;

    if (!validate()) return;

    // Chargement
    btnSend.classList.add('loading');
    btnSend.disabled = true;
    errorBox.classList.remove('show');

    try {
      const params = buildParams();
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);

      // ✅ Succès
      form.style.display = 'none';
      setupNotice?.classList.add('hidden');
      successName.textContent = params.prenom;
      successBox.classList.add('show');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } catch (err) {
      console.error('EmailJS error:', err);
      errorBox.classList.add('show');
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    } finally {
      btnSend.classList.remove('loading');
      btnSend.disabled = false;
    }
  });

  /* ── Nouvelle demande ── */
  btnNouveau?.addEventListener('click', () => {
    successBox.classList.remove('show');
    form.style.display = '';
    form.reset();
    if (charCount) charCount.textContent = '0 / 800';
    window.scrollTo({ top: form.offsetTop - 120, behavior: 'smooth' });
  });

  /* ── Date minimum = aujourd'hui ── */
  const dateInput = document.getElementById('date_voyage');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

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
