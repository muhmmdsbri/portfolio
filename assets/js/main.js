// ===== PORTFOLIO DATA =====
let portfolioData = {};
let currentLanguage = 'en';

// ===== LOAD DATA =====
async function loadPortfolioData() {
  try {
    const response = await fetch('data/portfolio-data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    portfolioData = await response.json();
    console.log('Portfolio data loaded successfully:', portfolioData);
    initializePortfolio();
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    // Retry after 1 second
    setTimeout(loadPortfolioData, 1000);
  }
}

// ===== INITIALIZE PORTFOLIO =====
function initializePortfolio() {
  console.log('Initializing portfolio...');
  try {
    renderCertificates();
    renderSkills();
    renderProjects();
    renderPricing();
    setupEventListeners();
    updateLanguage();
    console.log('Portfolio initialized successfully');
  } catch (error) {
    console.error('Error during portfolio initialization:', error);
  }
}

// ===== RENDER CERTIFICATES =====
function renderCertificates() {
  const certCards = document.getElementById('certCards');
  certCards.innerHTML = '';

  // Add education
  portfolioData.education.forEach(edu => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <strong>${currentLanguage === 'en' ? edu.degree : edu.degreeAr}</strong>
      <span>${currentLanguage === 'en' ? edu.institution : edu.institutionAr} • ${edu.year}</span>
    `;
    certCards.appendChild(card);
  });

  // Add certificates
  portfolioData.certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <strong>${currentLanguage === 'en' ? cert.title : cert.titleAr}</strong>
      <span>${currentLanguage === 'en' ? cert.issuer : cert.issuerAr} • ${cert.year}</span>
    `;
    certCards.appendChild(card);
  });
}

// ===== RENDER SKILLS =====
function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  
  if (!skillsGrid) {
    console.error('Skills grid element not found');
    return;
  }
  
  if (!portfolioData.skills || portfolioData.skills.length === 0) {
    console.error('No skills data available');
    return;
  }
  
  skillsGrid.innerHTML = '';

  portfolioData.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.style.borderTopColor = skill.color;
    card.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <h3 class="skill-title">${currentLanguage === 'en' ? skill.title : skill.titleAr}</h3>
      <p class="skill-desc">${currentLanguage === 'en' ? skill.description : skill.descriptionAr}</p>
    `;
    card.addEventListener('click', () => openSkillModal(skill));
    skillsGrid.appendChild(card);
  });
  
  console.log(`Rendered ${portfolioData.skills.length} skills`);
}

// ===== RENDER PROJECTS =====
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const projectsTabs = document.getElementById('projectsTabs');

  // Clear existing
  projectsGrid.innerHTML = '';

  // Setup tab listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      displayProjects(btn.getAttribute('data-category'));
    });
  });

  displayProjects('all');
}

function displayProjects(category) {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';

  let allProjects = [];

  if (category === 'all') {
    Object.keys(portfolioData.projects).forEach(key => {
      allProjects = allProjects.concat(portfolioData.projects[key]);
    });
  } else {
    allProjects = portfolioData.projects[category] || [];
  }

  if (allProjects.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <i class="fas fa-inbox" style="font-size: 60px; color: var(--border); margin-bottom: 20px;"></i>
        <p style="color: var(--text-light); font-size: 18px;">${currentLanguage === 'en' ? 'No projects yet' : 'لا توجد مشاريع حالياً'}</p>
      </div>
    `;
    return;
  }

  allProjects.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image">
        <i class="fas fa-image"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${currentLanguage === 'en' ? project.title : project.titleAr}</h3>
        <p class="project-desc">${currentLanguage === 'en' ? project.description : project.descriptionAr}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

// ===== RENDER PRICING =====
function renderPricing() {
  const pricingGrid = document.getElementById('pricingGrid');
  pricingGrid.innerHTML = '';

  portfolioData.pricing.forEach(service => {
    const card = document.createElement('div');
    card.className = 'pricing-card';
    card.innerHTML = `
      <div class="pricing-icon">${service.icon}</div>
      <h3 class="pricing-title">${currentLanguage === 'en' ? service.service : service.serviceAr}</h3>
      <div class="pricing-packages">
        ${service.packages.map(pkg => `
          <div class="package">
            <div class="package-name">${currentLanguage === 'en' ? pkg.name : pkg.nameAr}</div>
            <div class="package-price">${pkg.price}</div>
            <div class="package-desc">${currentLanguage === 'en' ? pkg.desc : pkg.descAr}</div>
          </div>
        `).join('')}
      </div>
    `;
    pricingGrid.appendChild(card);
  });
}

// ===== SKILL MODAL =====
function openSkillModal(skill) {
  const modal = document.getElementById('modalOverlay');
  const modalHeader = document.getElementById('modalHeader');
  const modalBody = document.getElementById('modalBody');

  const projects = portfolioData.projects[skill.id] || [];

  modalHeader.innerHTML = `
    <h3>${currentLanguage === 'en' ? skill.title : skill.titleAr}</h3>
    <p>${currentLanguage === 'en' ? skill.description : skill.descriptionAr}</p>
  `;

  modalBody.innerHTML = `
    <div class="modal-projects">
      ${projects.map(project => `
        <div class="modal-project">
          <h4>${currentLanguage === 'en' ? project.title : project.titleAr}</h4>
          <p>${currentLanguage === 'en' ? project.description : project.descriptionAr}</p>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
}

function closeSkillModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// ===== LANGUAGE TOGGLE =====
function updateLanguage() {
  const body = document.body;
  const langToggle = document.getElementById('langToggle');

  if (currentLanguage === 'en') {
    body.classList.remove('ar');
    body.dir = 'ltr';
    langToggle.textContent = 'AR';
  } else {
    body.classList.add('ar');
    body.dir = 'rtl';
    langToggle.textContent = 'EN';
  }

  // Update all text content
  updatePageText();
  renderCertificates();
  renderSkills();
  renderProjects();
  renderPricing();
}

function updatePageText() {
  const personal = portfolioData.personal;

  // Hero section
  document.getElementById('heroSubtitle').textContent = 
    currentLanguage === 'en' ? personal.title : personal.titleAr;
  document.getElementById('heroBio').textContent = 
    currentLanguage === 'en' ? personal.bio : personal.bioAr;

  // About section
  document.getElementById('aboutBio').textContent = 
    currentLanguage === 'en' ? personal.bio : personal.bioAr;

  // Update nav links
  const navLinks = document.querySelectorAll('.nav-link');
  const navTexts = {
    en: ['Home', 'About', 'Skills', 'Projects', 'Pricing', 'Contact'],
    ar: ['الرئيسية', 'عني', 'المهارات', 'المشاريع', 'الأسعار', 'التواصل']
  };

  navLinks.forEach((link, index) => {
    link.textContent = navTexts[currentLanguage][index];
  });
}

// ===== NAVBAR SCROLL EFFECT =====
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== SMOOTH SCROLL & ACTIVE NAV =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav();
      }
    });
  });

  window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

// ===== BACK TO TOP =====
function setupBackToTop() {
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== CONTACT FORM =====
function setupContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:muhmmdsbri@gmail.com?subject=Portfolio Inquiry - ${service}&body=Name: ${name}%0AEmail: ${email}%0AService: ${service}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
    form.reset();
  });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeSkillModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) {
      closeSkillModal();
    }
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.style.display = 'none';
    });
  });
}

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  loadPortfolioData();
  setupNavbarScroll();
  setupSmoothScroll();
  setupBackToTop();
  setupContactForm();
});
