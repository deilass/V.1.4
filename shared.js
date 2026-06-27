// shared.js — nav, footer, scroll, fade-in

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const pages = [
  { href: 'index.html', label: 'Início' },
  { 
    href: 'quem-somos.html', label: 'Quem Somos',
    children:[
      { href: 'equipa.html', label: 'A nossa Equipa', sub: 'Conhece a nossa equipa'}
    ]
  },
  {
    href: 'participa.html', label: 'Participa',
    children: [
      { href: 'participa.html#connect', label: 'Connect', sub: 'Ministério de Jovens' },
      { href: 'participa.html#mulheres', label: 'Ministério de Mulheres', sub: 'Encontros e discipulado' },
      { href: 'participa.html#ebd', label: 'Escola Bíblica Dominical', sub: 'Ensino para todas as idades' },
      { href: 'participa.html#beneficencia', label: 'Beneficência', sub: 'Ação social' },
    ]
  },
  { href: 'congregacoes.html', label: 'Congregações' },
  { href: 'culto-online.html', label: 'Online' },
  { href: 'contacto.html', label: 'Contacto' },
  { href: 'oferta.html', label: 'Oferta', cta: true },
];
const LOGO = 'logo.png';

function buildNavItem(p) {
  const baseHref = p.href.split('#')[0];
  const active = baseHref === currentPage ? ' active' : '';

  if (p.children) {
    const sub = p.children.map(c => `
      <li>
        <a href="${c.href}">
          ${c.label}
          ${c.sub ? `<span class="sub-label">${c.sub}</span>` : ''}
        </a>
      </li>`).join('');
    return `
      <li class="has-dropdown${active}">
        <a href="${p.href}">${p.label}</a>
        <ul class="dropdown-menu">${sub}</ul>
      </li>`;
  }

  if (p.reserved) return `<li><a href="${p.href}" class="nav-reserved${active}">${p.label}</a></li>`;
  if (p.cta) return `<li><a href="${p.href}" class="nav-cta${active}">${p.label}</a></li>`;
  return `<li><a href="${p.href}" class="${active.trim()}">${p.label}</a></li>`;
}

function buildNav() {
  const links = pages.map(buildNavItem).join('');
  return `
  <nav id="site-nav">
    <a href="index.html" class="logo-wrap">
      <img src="${LOGO}" alt="AD Setúbal" class="logo-img" />
      <div class="logo-text">
        <span class="logo-text-main">AD Setúbal</span>
        <span class="logo-text-sub">Assembleia de Deus</span>
      </div>
    </a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">${links}</ul>
  </nav>`;
}

function buildFooter() {
  return `
  <footer>
    <div class="gradient-bar"></div>
    <div class="footer-top">
      <div>
        <a href="index.html" class="footer-logo-wrap">
          <img src="${LOGO}" alt="AD Setúbal" class="footer-logo-img" />
          <div>
            <div class="footer-brand-main">AD Setúbal</div>
            <div class="footer-brand-sub">Assembleia de Deus de Setúbal</div>
          </div>
        </a>
        <p class="footer-tagline">Uma comunidade cristã evangélica ao serviço do Distrito de Setúbal e Área de Missão de Beja.</p>
        <div class="footer-social">
          <a href="https://www.youtube.com/@adsetubal" target="_blank" title="YouTube">YT</a>
          <a href="https://www.instagram.com/adsetubal/" target="_blank" title="Instagram">IG</a>
          <a href="https://www.facebook.com/adsetubal" target="_blank" title="Facebook">FB</a>
        </div>
      </div>
      <div>
        <p class="footer-heading">Navegação</p>
        <ul class="footer-links">
          <li><a href="index.html">Início</a></li>
          <li><a href="quem-somos.html">Quem Somos</a></li>
          <li><a href="participa.html">Participa</a></li>
          <li><a href="congregacoes.html">Congregações</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">A Igreja</p>
        <ul class="footer-links">
          <li><a href="culto-online.html">Culto Online</a></li>
          <li><a href="oferta.html">Oferta</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Sede — Setúbal</p>
        <div class="footer-contact">
          <p>Rua Almeida Garrett, n.º 47-49</p>
          <p>Setúbal, Portugal</p>
          <p style="margin-top:0.6rem;"><a href="mailto:info@adsetubal.pt" style="color:rgba(255,255,255,0.4);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#29A8AB'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">info@adsetubal.pt</a></p>
          <p style="margin-top:0.6rem;"><a href="tel:+351961376094" style="color:rgba(255,255,255,0.4);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#29A8AB'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">961 376 094</a></p>
        </div>
      </div>
      <div>
        <p class="footer-heading">Horários — Sede</p>
        <div class="footer-contact">
          <p>Dom 15h00 — Escola Dominical</p>
          <p>Dom 16h00 — Culto de Celebração</p>
          <p>4.ª Feira 10h00 — Oração</p>
          <p>6.ª Feira 20h00 — Estudo Bíblico</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="current-year"></span> Assembleia de Deus de Setúbal</p>
      <div class="footer-bottom-links">
        <a href="#">Política de Privacidade</a>
        <a href="#">Política de Cookies</a>
        <a href="contacto.html">Contacto</a>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', buildNav());
  document.body.insertAdjacentHTML('beforeend', buildFooter());

  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.getElementById('site-nav');
  const isInner = document.body.dataset.navLight === 'true';

  if (isInner) {
    nav.classList.add('light-nav');
  }

  window.addEventListener('scroll', () => {
    if (!isInner) {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
  });

  const ham = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  ham.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Em mobile, os links com dropdown navegam diretamente (sem abrir submenu)
  // Em desktop, mantém o comportamento de dropdown ao hover
  document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        // Navegar diretamente para a página — sem dropdown em mobile
        // Não prevenir o comportamento padrão, deixar o href funcionar
        navLinks.classList.remove('open');
      }
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});