/* ═══════════════════════════════════════════════════
  main.js — Insurance Company
  ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  const html = document.documentElement;

  /* ── 1. THEME ────────────────────────────────────── */
  const THEME_KEY = 'insurancecompany-theme';

  function applyTheme(t) {
    html.dataset.theme = t;
    localStorage.setItem(THEME_KEY, t);
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) applyTheme(savedTheme);

  /* ── 2. DOM READY ──────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    emailjs.init({
      publicKey: "PUBLIC_KEY_EXAMPLE",
    });

    /* ── Theme toggle ── */
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
      });
    }

    /* ── Language picker ── */
    const LOCALE_KEY = 'insurancecompany-locale';
    const DEFAULT_LOCALE = 'el';
    const translations = {
      el: {
        navServices: 'Υπηρεσίες',
        navHowItWorks: 'Πώς λειτουργεί',
        navContact: 'Επικοινωνία',
        navGetStarted: 'Ξεκινήστε',

        heroEyebrow: 'Απλοποιημένες υπηρεσίες οχημάτων',
        heroHeadlinePart1: 'Κάθε διαδρομή ξεκινά',
        heroHeadlinePart2: 'με τα σωστά έγγραφα.',
        heroParagraph: 'Μεταβιβάσεις κυριότητας, ανανεώσεις διπλωμάτων και ασφάλιση — γρήγορα, σωστά και σε ένα μέρος.',
        btnExplore: 'Εξερευνήστε τις υπηρεσίες',
        btnTalk: 'Μιλήστε μαζί μας',

        heroStat1Label: 'Μέσος χρόνος μεταβίβασης',
        heroStat2Label: 'Εγγύηση Εξυπηρέτησης',
        heroStat3Label: 'Υποστήριξη ζημιών',

        servicesEyebrow: 'Τι κάνουμε',
        servicesTitle: 'Τέσσερις υπηρεσίες, ένας προορισμός',

        // 1. Transfers
        serviceTransferTitle: 'Μεταβιβάσεις Οχημάτων',
        serviceTransferBody: 'Αγοράζετε ή πουλάτε όχημα; Αναλαμβάνουμε όλη τη γραφειοκρατία, γρήγορα και σωστά.',
        serviceTransferItem1: 'Ιδιωτικές και εμπορικές πωλήσεις',
        serviceTransferItem2: 'Μεταβιβάσεις από άλλες περιοχές',
        serviceTransferItem3: 'Αντίγραφα και διορθώσεις αδειών',
        serviceTransferCTA: 'Ξεκινήστε μεταβίβαση →',

        // 2. Licenses
        serviceLicenseTitle: 'Ανανεώσεις Διπλωμάτων',
        serviceLicenseBody: 'Ανανέωση, επανέκδοση λόγω απώλειας ή φθοράς, και μετατροπές αδειών οδήγησης χωρίς ταλαιπωρία.',
        serviceLicenseItem1: 'Κανονικές ανανεώσεις',
        serviceLicenseItem2: 'Επανέκδοση λόγω απώλειας/φθοράς',
        serviceLicenseItem3: 'Μετατροπές αδειών',
        serviceLicenseCTA: 'Ανανέωση διπλώματος →',

        // 3. Plates
        platesBadge: 'Πιο δημοφιλές',
        servicePlatesTitle: 'Ταξινομήσεις & Πινακίδες',
        servicePlatesBody: 'Αναλαμβάνουμε την έκδοση νέων πινακίδων, την άρση παρακράτησης κυριότητας και τις οριστικές διαγραφές.',
        servicePlatesItem1: 'Έκδοση νέων πινακίδων',
        servicePlatesItem2: 'Άρση παρακράτησης',
        servicePlatesItem3: 'Οριστικές διαγραφές',
        servicePlatesCTA: 'Διαχείριση πινακίδων →',

        // 4. Insurance
        serviceInsuranceTitle: 'Ασφάλιση Αυτοκινήτου',
        serviceInsuranceBody: 'Αστική ευθύνη, μικτή και πλήρης κάλυψη. Συγκρίνουμε πολλές ασφαλιστικές για να βρούμε την καλύτερη λύση.',
        serviceInsuranceItem1: 'Σύγκριση πολλαπλών παρόχων',
        serviceInsuranceItem2: 'Άμεσες προσφορές',
        serviceInsuranceItem3: 'Υποστήριξη 24/7',
        serviceInsuranceCTA: 'Ζητήστε προσφορά →',

        processEyebrow: 'Η διαδικασία',
        processTitle: 'Ολοκληρώνεται σε τρία βήματα',
        step1Title: 'Πείτε μας τι χρειάζεστε',
        step1Body: 'Συμπληρώστε τη σύντομη φόρμα επικοινωνίας ή καλέστε μας. Ένας σύμβουλος θα επικοινωνήσει μαζί σας μέσα στην ώρα.',
        step2Title: 'Αναλαμβάνουμε τα πάντα',
        step2Body: 'Συγκεντρώνουμε μόνο τα απαραίτητα έγγραφα, διαχειριζόμαστε τις διαδικασίες για λογαριασμό σας και σας ενημερώνουμε σε κάθε στάδιο.',
        step3Title: 'Ξεκινήστε χωρίς άγχος',
        step3Body: 'Η μεταβίβαση, η ανανέωση ή η ασφάλισή σας ολοκληρώνεται. Απλά και γρήγορα.',

        contactEyebrow: 'Επικοινωνήστε μαζί μας',
        contactTitle: 'Ας σας βάλουμε στον δρόμο',
        contactSub: 'Η ομάδα μας είναι διαθέσιμη Δευτέρα έως Σάββατο, 08:00–18:00.',

        phoneLabel: 'Τηλέφωνο',
        emailLabel: 'Email',
        officeLabel: 'Γραφείο',

        firstNameLabel: 'Όνομα',
        lastNameLabel: 'Επώνυμο',
        emailAddressLabel: 'Διεύθυνση Email',
        phoneFormLabel: 'Τηλέφωνο (προαιρετικό)',
        serviceLabel: 'Υπηρεσία',
        messageLabel: 'Μήνυμα',

        firstNamePlaceholder: 'Γιάννης',
        lastNamePlaceholder: 'Παπαδόπουλος',
        emailPlaceholder: 'example@email.com',
        phonePlaceholder: '+30 69X XXX XXXX',

        servicePlaceholder: 'Επιλέξτε υπηρεσία...',
        optTransfer: 'Μεταβίβαση Οχήματος',
        optLicense: 'Ανανέωση Διπλώματος',
        optPlates: 'Ταξινομήσεις / Πινακίδες',
        optInsurance: 'Ασφάλιση Αυτοκινήτου',
        optOther: 'Άλλο / Δεν είμαι σίγουρος',

        messagePlaceholder: 'Πείτε μας τι χρειάζεστε και θα επικοινωνήσουμε μαζί σας άμεσα.',
        sendButton: 'Αποστολή μηνύματος',
        formNote: 'Απαντάμε εντός 1 εργάσιμης ώρας. Χωρίς ανεπιθύμητα μηνύματα.',
        formSuccess: '✓ Το μήνυμά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε σύντομα μαζί σας.',
        formError: '✕ Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
        sending: 'Αποστολή...',

        footerTagline: 'Υπηρεσίες οχημάτων, απλά.',
        footerServices: 'Υπηρεσίες',
        footerHowItWorks: 'Πώς λειτουργεί',
        footerContact: 'Επικοινωνία',
        footerCopyright: '© 2026 Insurance Company. Με επιφύλαξη παντός δικαιώματος.',
        languageName: 'Ελληνικά'
      },

      en: {
        navServices: 'Services',
        navHowItWorks: 'How it works',
        navContact: 'Contact',
        navGetStarted: 'Get started',

        heroEyebrow: 'Vehicle services, simplified',
        heroHeadlinePart1: 'Every road starts',
        heroHeadlinePart2: 'with the right paperwork.',
        heroParagraph: 'Title transfers, license renewals, and insurance — handled fast, handled right, under one roof.',
        btnExplore: 'Explore services',
        btnTalk: 'Talk to us',

        heroStat1Label: 'Average title transfer',
        heroStat2Label: 'Service Guarantee',
        heroStat3Label: 'Claims support',

        servicesEyebrow: 'What we do',
        servicesTitle: 'Four services, one destination',

        serviceTransferTitle: 'Title Transfers',
        serviceTransferBody: 'Buying or selling a vehicle? We handle all the paperwork quickly and accurately.',
        serviceTransferItem1: 'Private-party & dealer sales',
        serviceTransferItem2: 'Out-of-state transfers',
        serviceTransferItem3: 'Duplicate & corrected titles',
        serviceTransferCTA: 'Start a transfer →',

        serviceLicenseTitle: 'License Renewals',
        serviceLicenseBody: 'Renewals, reissues due to loss or damage, and driving license conversions completely hassle-free.',
        serviceLicenseItem1: 'Standard renewals',
        serviceLicenseItem2: 'Loss/damage reissues',
        serviceLicenseItem3: 'License conversions',
        serviceLicenseCTA: 'Renew license →',

        platesBadge: 'Most popular',
        servicePlatesTitle: 'Registrations & Plates',
        servicePlatesBody: 'Issuance of new plates, lifting of title retentions/liens, and final vehicle deregistrations.',
        servicePlatesItem1: 'New plate issuance',
        servicePlatesItem2: 'Lien/retention lifting',
        servicePlatesItem3: 'Final deregistrations',
        servicePlatesCTA: 'Manage plates →',

        serviceInsuranceTitle: 'Vehicle Insurance',
        serviceInsuranceBody: 'Liability, comprehensive, and collision coverage. We compare multiple carriers for the best rates.',
        serviceInsuranceItem1: 'Multi-carrier comparison',
        serviceInsuranceItem2: 'Fast quotes',
        serviceInsuranceItem3: '24/7 support',
        serviceInsuranceCTA: 'Get a quote →',

        processEyebrow: 'The process',
        processTitle: 'Done in three steps',
        step1Title: 'Tell us what you need',
        step1Body: 'Fill out our short contact form or call us. A specialist will respond within the hour.',
        step2Title: 'We prepare everything',
        step2Body: 'We collect only what is necessary and handle all filings on your behalf.',
        step3Title: 'Drive away with peace of mind',
        step3Body: 'Your transfer, renewal or insurance is completed quickly and efficiently.',

        contactEyebrow: 'Get in touch',
        contactTitle: "Let's get you moving",
        contactSub: 'Our team is available Monday–Saturday, 8am–6pm.',

        phoneLabel: 'Phone',
        emailLabel: 'Email',
        officeLabel: 'Office',

        firstNameLabel: 'First name',
        lastNameLabel: 'Last name',
        emailAddressLabel: 'Email address',
        phoneFormLabel: 'Phone (optional)',
        serviceLabel: 'Service needed',
        messageLabel: 'Message',

        firstNamePlaceholder: 'Jane',
        lastNamePlaceholder: 'Smith',
        emailPlaceholder: 'jane@example.com',
        phonePlaceholder: '+1 (555) 000-0000',

        servicePlaceholder: 'Select a service...',
        optTransfer: 'Title Transfer',
        optLicense: 'License Renewal',
        optPlates: 'Registrations & Plates',
        optInsurance: 'Vehicle Insurance',
        optOther: 'Other / Not sure',

        messagePlaceholder: "Tell us what you need and we'll get back to you fast.",
        sendButton: 'Send message',
        formNote: 'We respond within 1 business hour. No spam, ever.',
        formSuccess: "✓ Message sent! We'll be in touch shortly.",
        formError: "✕ Something went wrong. Please try again later.",
        sending: 'Sending...',

        footerTagline: 'Vehicle services, made simple.',
        footerServices: 'Services',
        footerHowItWorks: 'How it works',
        footerContact: 'Contact',
        footerCopyright: '© 2026 Insurance Company. All rights reserved.',
        languageName: 'English'
      }
    };

    function applyLocale(locale) {
      const localeData = translations[locale] || translations[DEFAULT_LOCALE];
      html.lang = locale;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.dataset.i18n;
        if (!key) return;
        if (localeData[key]) {
          el.innerHTML = localeData[key];
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const key = el.dataset.i18nPlaceholder;
        if (!key) return;
        if (localeData[key]) {
          el.placeholder = localeData[key];
        }
      });

      const toggle = document.getElementById('languageToggle');
      if (toggle) {
        toggle.textContent = localeData.languageName || (locale === 'en' ? 'English' : 'Ελληνικά');
      }

      document.querySelectorAll('[data-locale]').forEach(function (button) {
        const isActive = button.dataset.locale === locale;
        button.setAttribute('aria-checked', String(isActive));
      });

      localStorage.setItem(LOCALE_KEY, locale);
    }

    const languageToggle = document.getElementById('languageToggle');
    const languageMenu = document.getElementById('languageMenu');
    if (languageToggle && languageMenu) {
      languageToggle.addEventListener('click', function () {
        const isOpen = languageMenu.hidden;
        languageMenu.hidden = !isOpen;
        languageToggle.setAttribute('aria-expanded', String(isOpen));
      });

      languageMenu.querySelectorAll('[data-locale]').forEach(function (button) {
        button.addEventListener('click', function () {
          applyLocale(button.dataset.locale);
          languageMenu.hidden = true;
          languageToggle.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', function (event) {
        if (!languageMenu.contains(event.target) && event.target !== languageToggle) {
          languageMenu.hidden = true;
          languageToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const savedLocale = localStorage.getItem(LOCALE_KEY) || DEFAULT_LOCALE;
    applyLocale(savedLocale);

    /* ── Navbar scroll shadow ── */
    const navbar = document.getElementById('navbar');
    function onScroll() {
      if (!navbar) return;
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── Mobile burger menu ── */
    const burger = document.getElementById('navBurger');
    const drawer = document.getElementById('navDrawer');

    if (burger && drawer) {
      burger.addEventListener('click', function () {
        const isOpen = burger.classList.toggle('open');
        drawer.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
        drawer.setAttribute('aria-hidden', String(!isOpen));
      });

      drawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          burger.classList.remove('open');
          drawer.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          drawer.setAttribute('aria-hidden', 'true');
        });
      });
    }

    /* ── Scroll-reveal via IntersectionObserver ── */
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add('visible');
      });
    }

    /* ── Set CSS index for staggered card reveals ── */
    document.querySelectorAll('[data-index]').forEach(function (el) {
      el.style.setProperty('--index', el.dataset.index);
    });

    /* ── Smooth active nav link highlight ── */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    if ('IntersectionObserver' in window && navAnchors.length) {
      const navObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              navAnchors.forEach(function (a) {
                const match = a.getAttribute('href') === '#' + entry.target.id;
                a.style.color = match ? 'var(--text)' : '';
              });
            }
          });
        },
        { threshold: 0.4 }
      );
      sections.forEach(function (s) { navObserver.observe(s); });
    }

    /* ── Contact form ── */
    const form    = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');

    if (form && success) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const required = form.querySelectorAll('[required]');
        let valid = true;
        required.forEach(function (field) {
          if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            valid = false;
          } else {
            field.style.borderColor = '';
          }
        });
        if (!valid) return;

        const submitBtn = form.querySelector('[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');

        const currentLocale = html.lang || 'el';
        const localeData = translations[currentLocale] || translations['el'];
        const textSending = localeData.sending || 'Sending...';
        const textSendButton = localeData.sendButton || 'Send message';

        submitBtn.disabled = true;
        btnText.textContent = textSending;
        
        success.hidden = true;
        if (errorEl) errorEl.hidden = true;

        const templateParams = {
          firstName: document.getElementById('firstName').value,
          lastName: document.getElementById('lastName').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          service: document.getElementById('service').value,
          message: document.getElementById('message').value
        };

        try {
          await emailjs.send('SERVICE_ID_EXAMPLE', 'TEMPLATE_ID_EXAMPLE', templateParams);
          
          form.reset();
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          setTimeout(function () {
            success.hidden = true;
          }, 5000);

        } catch (error) {
          console.error('EmailJS Error Encountered:', error);
          if (errorEl) {
            errorEl.hidden = false;
            errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } finally {
          submitBtn.disabled = false;
          btnText.textContent = textSendButton;
        }
      });

      form.querySelectorAll('input, textarea, select').forEach(function (field) {
        field.addEventListener('input', function () {
          field.style.borderColor = '';
        });
      });
    }
  }); 
})();
