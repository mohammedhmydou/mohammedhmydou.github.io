document.addEventListener('DOMContentLoaded', () => {
  // Reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Project filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      projectItems.forEach(item => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        item.classList.toggle('hidden-project', !shouldShow);
      });
    });
  });

  // Skill Modal functionality
  const skillCards = document.querySelectorAll('.skill-card');
  const skillModal = document.getElementById('skillModal');
  const skillModalOverlay = document.getElementById('skillModalOverlay');
  const skillModalClose = document.getElementById('skillModalClose');
  const skillModalIcon = document.getElementById('skillModalIcon');
  const skillModalName = document.getElementById('skillModalName');
  const skillModalLevel = document.getElementById('skillModalLevel');
  const skillModalDescription = document.getElementById('skillModalDescription');

  // Project Modal functionality
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('projectModal');
  const projectModalOverlay = document.getElementById('projectModalOverlay');
  const projectModalClose = document.getElementById('projectModalClose');
  const projectModalIcon = document.getElementById('projectModalIcon');
  const projectModalTitle = document.getElementById('projectModalTitle');
  const projectModalLevel = document.getElementById('projectModalLevel');
  const projectModalIntro = document.getElementById('projectModalIntro');
  const projectModalFeatures = document.getElementById('projectModalFeatures');
  const projectModalLearned = document.getElementById('projectModalLearned');
  const projectModalTech = document.getElementById('projectModalTech');
  const projectModalTeam = document.getElementById('projectModalTeam');

  // Helper function to get icon HTML
  function getIconHTML(element) {
    return element.querySelector('i').outerHTML;
  }

  // Open skill modal
  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      const skillName = card.getAttribute('data-skill-name');
      const skillLevel = card.getAttribute('data-skill-level') || card.getAttribute('data-skill-level');
      const description = card.getAttribute('data-description');
      const iconHTML = getIconHTML(card);

      skillModalIcon.innerHTML = iconHTML;
      skillModalName.textContent = skillName;
      skillModalLevel.textContent = skillLevel;
      skillModalDescription.textContent = description;

      skillModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Open project modal
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-project-title');
      const level = card.getAttribute('data-level');
      const intro = card.getAttribute('data-intro');
      const learned = card.getAttribute('data-learned');
      const featuresHTML = card.getAttribute('data-features');
      const techHTML = card.getAttribute('data-tech');
      const team = card.getAttribute('data-team');
      const iconHTML = getIconHTML(card);

      projectModalIcon.innerHTML = iconHTML;
      projectModalTitle.textContent = title;
      projectModalLevel.textContent = level;
      projectModalIntro.textContent = intro;
      projectModalLearned.textContent = learned;
      projectModalTeam.textContent = team;
      projectModalFeatures.innerHTML = featuresHTML;
      projectModalTech.innerHTML = techHTML;

      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close functions
  function closeSkillModal() {
    skillModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Skill modal close listeners
  skillModalClose.addEventListener('click', closeSkillModal);
  skillModalOverlay.addEventListener('click', closeSkillModal);

  // Project modal close listeners
  projectModalClose.addEventListener('click', closeProjectModal);
  projectModalOverlay.addEventListener('click', closeProjectModal);

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSkillModal();
      closeProjectModal();
    }
  });

  // Contact form demo (if exists)
  const contactButton = document.getElementById('contactButton');
  const formFeedback = document.getElementById('formFeedback');
  if (contactButton && formFeedback) {
    contactButton.addEventListener('click', () => {
      formFeedback.textContent = 'Demo portfolio: koppel dit later aan Formspree, EmailJS of PHP mail voor echte verzending.';
    });
  }

  // Navbar active on scroll
  const sections = document.querySelectorAll('header[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}` || (id === 'home' && link.getAttribute('href') === '#')) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-20% 0px -40% 0px'
  });

  sections.forEach(section => navObserver.observe(section));

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
