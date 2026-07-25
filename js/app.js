/**
 * Main Application Controller
 * Handles DOM rendering, state management, event listeners, modal popups, theme switching, and form validation.
 */

import { portfolioData } from './data.js';
import { initParticleCanvas, initTypewriter } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initThemeAndAccent();
  renderHeroData();
  renderStats();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderTestimonials();
  renderContactInfo();
  
  initParticleCanvas();
  initTypewriter(portfolioData.profile.roles);
  
  initNavigation();
  initProjectModal();
  initContactForm();
  initCopyEmail();
  initYear();
}

/* Theme & Accent Color State Management */
function initThemeAndAccent() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  const savedAccent = localStorage.getItem('portfolio-accent') || 'violet';

  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-accent', savedAccent);

  // Theme toggle button
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('portfolio-theme', nextTheme);
      showToast(`Switched to ${nextTheme} theme`, 'info');
    });
  }

  // Accent picker buttons
  const accentBtns = document.querySelectorAll('.accent-btn');
  accentBtns.forEach(btn => {
    const accent = btn.getAttribute('data-accent');
    if (accent === savedAccent) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      accentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.documentElement.setAttribute('data-accent', accent);
      localStorage.setItem('portfolio-accent', accent);
      showToast(`Accent color changed to ${accent}`, 'info');
    });
  });
}

/* Render Hero Data */
function renderHeroData() {
  const bio = document.getElementById('hero-bio');
  if (bio) bio.textContent = portfolioData.profile.bio;

  const socialContainers = [
    document.getElementById('hero-social-links'),
    document.getElementById('contact-socials')
  ];

  const cvBtn = document.getElementById('download-cv-btn');
  if (cvBtn && portfolioData.profile.cvLink) {
    cvBtn.href = portfolioData.profile.cvLink;
  }

  socialContainers.forEach(container => {
    if (!container) return;
    container.innerHTML = portfolioData.profile.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.name}" title="${s.name}">
        <i class="${s.icon}"></i>
      </a>
    `).join('');
  });
}

/* Render Stats Ticker Bar */
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(st => `
    <div class="stat-item">
      <div class="stat-number gradient-text">${st.number}</div>
      <div class="stat-label">${st.label}</div>
    </div>
  `).join('');
}

/* Render Skills Matrix */
function renderSkills() {
  const categoryTabs = document.getElementById('skill-category-tabs');
  const skillsGrid = document.getElementById('skills-grid');
  if (!categoryTabs || !skillsGrid) return;

  // Render tabs
  categoryTabs.innerHTML = portfolioData.skillCategories.map((cat, idx) => `
    <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  // Render skills grid
  renderSkillItems('all');

  // Category tab event listeners
  categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    categoryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSkillItems(btn.getAttribute('data-category'));
  });
}

function renderSkillItems(categoryFilter) {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'all'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === categoryFilter);

  grid.innerHTML = filtered.map(sk => `
    <div class="skill-card glass-card">
      <div class="skill-header">
        <div class="skill-title-box">
          <div class="skill-icon-wrap"><i class="${sk.icon}"></i></div>
          <span class="skill-name">${sk.name}</span>
        </div>
        <span class="skill-percent">${sk.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width: ${sk.level}%;"></div>
      </div>
    </div>
  `).join('');
}

/* Render Featured Projects */
function renderProjects() {
  const filterTabs = document.getElementById('project-filter-tabs');
  const projectsGrid = document.getElementById('projects-grid');
  if (!filterTabs || !projectsGrid) return;

  filterTabs.innerHTML = portfolioData.projectCategories.map((cat, idx) => `
    <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-project-cat="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  renderProjectItems('all');

  filterTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    filterTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjectItems(btn.getAttribute('data-project-cat'));
  });
}

function renderProjectItems(categoryFilter) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === categoryFilter);

  grid.innerHTML = filtered.map(p => `
    <article class="project-card glass-card">
      <div class="project-thumbnail">
        <div class="project-img-placeholder">
          <i class="${p.icon}"></i>
          <span>${p.title}</span>
        </div>
        <div class="project-overlay">
          <button class="btn btn-primary view-details-trigger" data-id="${p.id}">
            <span>View Architecture</span>
            <i class="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </div>

      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        
        <div class="project-footer">
          <span class="view-details-btn view-details-trigger" data-id="${p.id}">
            Details & Features <i class="ri-arrow-right-line"></i>
          </span>
          <div class="project-links">
            <a href="${p.repoLink}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="View Source Code">
              <i class="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/* Render Work Experience Timeline */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card glass-card">
        <div class="timeline-header">
          <div>
            <h3 class="role-title">${exp.role}</h3>
            <span class="company-name">${exp.company}</span>
          </div>
          <span class="time-badge">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-achievements">
          ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* Render Testimonials */
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = portfolioData.testimonials.map(t => `
    <div class="testimonial-card glass-card">
      <div class="quote-icon"><i class="ri-double-quotes-l"></i></div>
      <p class="quote-text">"${t.quote}"</p>
      <div class="author-box">
        <div class="author-avatar">${t.author.charAt(0)}</div>
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render Contact Info */
function renderContactInfo() {
  const trigger = document.getElementById('email-copy-trigger');
  if (trigger) {
    trigger.textContent = portfolioData.profile.email;
    trigger.href = `mailto:${portfolioData.profile.email}`;
  }
}

/* Navigation Scroll Observer & Mobile Drawer */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('nav-links');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
}

/* Project Detail Modal Dialog */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;

  // Delegate click for view detail triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.view-details-trigger');
    if (trigger) {
      const projId = trigger.getAttribute('data-id');
      const project = portfolioData.projects.find(p => p.id === projId);
      if (project) openModal(project);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function openModal(proj) {
    document.getElementById('modal-tags').innerHTML = proj.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
    document.getElementById('modal-title').textContent = proj.title;
    document.getElementById('modal-subtitle').textContent = proj.subtitle;

    document.getElementById('modal-image-box').innerHTML = `
      <div style="text-align: center; color: var(--accent-primary);">
        <i class="${proj.icon}" style="font-size: 4rem;"></i>
        <div style="font-weight: 600; margin-top: 0.5rem; font-size: 1.1rem;">${proj.title} Architecture Preview</div>
      </div>
    `;

    document.getElementById('modal-description').textContent = proj.longDesc;
    document.getElementById('modal-features').innerHTML = proj.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('modal-tech-stack').innerHTML = proj.techStack.map(t => `<span class="tag-pill">${t}</span>`).join('');

    const liveLink = document.getElementById('modal-live-link');
    const repoLink = document.getElementById('modal-repo-link');
    if (liveLink) liveLink.href = proj.liveLink;
    if (repoLink) repoLink.href = proj.repoLink;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* Contact Form Handling */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const spinner = document.getElementById('form-spinner');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    // Name check
    if (!nameInput.value.trim()) {
      showFieldError('name-error', true);
      isValid = false;
    } else {
      showFieldError('name-error', false);
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError('email-error', true);
      isValid = false;
    } else {
      showFieldError('email-error', false);
    }

    // Message check
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showFieldError('message-error', true);
      isValid = false;
    } else {
      showFieldError('message-error', false);
    }

    if (!isValid) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = document.getElementById('form-subject')?.value.trim() || 'Portfolio Contact Inquiry';
    const message = messageInput.value.trim();

    // UI Feedback loading state
    submitBtn.disabled = true;
    spinner.style.display = 'block';

    // Construct mailto URL pre-filled for vitekarmayur76@gmail.com
    const mailtoUrl = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Mayur,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;

    setTimeout(() => {
      submitBtn.disabled = false;
      spinner.style.display = 'none';
      
      // Open default email client with pre-filled details
      window.location.href = mailtoUrl;

      form.reset();
      showToast('Opening email client... Thank you for your message!', 'success');
    }, 1000);
  });
}

function showFieldError(errorId, isError) {
  const el = document.getElementById(errorId);
  if (!el) return;
  const parent = el.closest('.form-group');
  if (isError) parent.classList.add('error');
  else parent.classList.remove('error');
}

/* Copy Email Trigger */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(portfolioData.profile.email).then(() => {
      showToast('Email address copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Failed to copy email', 'info');
    });
  });
}

/* Dynamic Copyright Year */
function initYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* Global Toast Notification System */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="${type === 'success' ? 'ri-checkbox-circle-fill' : 'ri-information-fill'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
