// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Glow Cursor
// 
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleFooter = document.getElementById('theme-toggle-footer');
function toggleTheme() {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  themeToggleFooter.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', toggleTheme);
themeToggleFooter.addEventListener('click', toggleTheme);

// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const langToggleFooter = document.getElementById('lang-toggle-footer');
let currentLang = 'en';
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': "I'm Ahmed, a Frontend Developer.",
    'hero.subtitle': "I build sleek, fast, and responsive user interfaces with clean code and modern aesthetics.",
    'hero.projects': 'View Projects',
    'hero.contact': 'Contact Me',
    'about.title': 'About Me',
    'about.text': 'Frontend developer passionate about modern web technologies, UI/UX, and building beautiful, performant interfaces. I love solving problems, learning new tools, and collaborating with creative teams. My focus is on clean code, accessibility, and pixel-perfect design.',
    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'services.title': 'Services',
    'services.uiux': 'UI/UX Design',
    'services.responsive': 'Responsive Layouts',
    'services.react': 'React Components',
    'services.performance': 'Frontend Performance',
    'contact.title': 'Contact',
    'contact.send': 'Send'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة',
    'nav.skills': 'المهارات',
    'nav.projects': 'الأعمال',
    'nav.services': 'الخدمات',
    'nav.contact': 'تواصل',
    'hero.title': "أنا أحمد، مطور واجهات أمامية.",
    'hero.subtitle': "أبني واجهات مستخدم أنيقة وسريعة ومتجاوبة بكود نظيف وتصميم عصري.",
    'hero.projects': 'عرض الأعمال',
    'hero.contact': 'تواصل معي',
    'about.title': 'نبذة عني',
    'about.text': 'مطوّر واجهات أمامية شغوف بأحدث تقنيات الويب وتصميم واجهات جميلة وعملية. أحب حل المشكلات، وتعلم الأدوات الجديدة، والعمل مع فرق إبداعية. أركز على الكود النظيف، وإمكانية الوصول، والدقة في التصميم.',
    'skills.title': 'المهارات',
    'projects.title': 'الأعمال',
    'services.title': 'الخدمات',
    'services.uiux': 'تصميم واجهات UI/UX',
    'services.responsive': 'تصميم متجاوب',
    'services.react': 'مكونات React',
    'services.performance': 'أداء الواجهات',
    'contact.title': 'تواصل',
    'contact.send': 'إرسال'
  }
};
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.style.fontFamily = lang === 'ar' ? 'Cairo, Tajawal, sans-serif' : 'Poppins, Inter, sans-serif';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key] || el.textContent;
  });
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  langToggleFooter.textContent = lang === 'ar' ? 'EN' : 'AR';
}
langToggle.addEventListener('click', () => setLang(currentLang === 'en' ? 'ar' : 'en'));
langToggleFooter.addEventListener('click', () => setLang(currentLang === 'en' ? 'ar' : 'en'));
setLang('en');

// Contact Form (Demo Only)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert(currentLang === 'ar' ? 'تم الإرسال بنجاح!' : 'Message sent successfully!');
});

// Glow Mode Toggle
const glowToggle = document.getElementById('glow-toggle');
function toggleGlow() {
  document.body.classList.toggle('glow');
  glowToggle.textContent = document.body.classList.contains('glow') ? '🌈' : '✨';
}
glowToggle.addEventListener('click', toggleGlow);

// Hamburger Menu for mobile
const nav = document.getElementById('nav');
if (window.innerWidth <= 600) {
  nav.addEventListener('click', function(e) {
    if (e.target === nav) {
      nav.classList.toggle('active');
    }
  });
}
