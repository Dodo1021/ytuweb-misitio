/* ============================================
   ¿Y Tu Web? — script.js
   Interactions, animations, demo modals
   ============================================ */

// ──── Navbar scroll effect ────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ──── Mobile menu toggle ────
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ──── Fade-in on scroll (Intersection Observer) ────
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const delay = Array.from(entry.target.parentElement.children)
        .filter(c => c.classList.contains('fade-in'))
        .indexOf(entry.target) * 100;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));

// ──── FAQ Accordion ────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    // Close all
    document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
    // Open clicked (unless it was already open)
    if (!wasActive) item.classList.add('active');
  });
});

// ──── Demo Modal ────
const demoData = {
  restaurante: {
    emoji: '🍔',
    title: 'Restaurante',
    subtitle: 'Menú digital, galería de platillos, horarios y ubicación',
    url: 'www.taqueria-elpatron.com',
    content: `
      <div class="demo-site-section">
        <h4>🍽️ Nuestro Menú</h4>
        <div class="demo-menu-grid">
          <div class="demo-menu-item">
            <h5>🌮 Tacos al Pastor</h5>
            <p>Tortilla de maíz, carne al pastor, piña, cilantro y cebolla</p>
            <span class="price">$18 c/u</span>
          </div>
          <div class="demo-menu-item">
            <h5>🥩 Arrachera</h5>
            <p>300g de arrachera a la parrilla con guarnición</p>
            <span class="price">$185</span>
          </div>
          <div class="demo-menu-item">
            <h5>🍗 Pollo en Mole</h5>
            <p>Pieza de pollo bañada en mole poblano con arroz</p>
            <span class="price">$95</span>
          </div>
          <div class="demo-menu-item">
            <h5>🫘 Frijoles Charros</h5>
            <p>Frijoles con chorizo, tocino, chile y cilantro</p>
            <span class="price">$45</span>
          </div>
        </div>
      </div>
      <div class="demo-site-section">
        <h4>📍 Información</h4>
        <div class="demo-info-row"><span>📅</span> Lun-Sáb: 8:00 AM - 10:00 PM</div>
        <div class="demo-info-row"><span>📅</span> Domingo: 9:00 AM - 6:00 PM</div>
        <div class="demo-info-row"><span>📍</span> Av. Vallarta 1234, Col. Americana, Guadalajara</div>
        <div class="demo-info-row"><span>📞</span> (33) 1234-5678</div>
      </div>
    `,
    features: [
      'Menú digital con QR',
      'Galería de platillos',
      'Horarios de servicio',
      'Mapa interactivo',
      'Formulario de reservaciones',
      'Integración con redes sociales',
      'Bot IA en Messenger',
      'Diseño responsive'
    ]
  },
  estetica: {
    emoji: '💇',
    title: 'Estética / Salón de Belleza',
    subtitle: 'Servicios, precios, galería de trabajos y reservación de citas',
    url: 'www.salon-glamour.com',
    content: `
      <div class="demo-site-section">
        <h4>✨ Nuestros Servicios</h4>
        <div class="demo-services-grid">
          <div class="demo-service-item">
            <h5>✂️ Corte de Dama</h5>
            <p>Incluye lavado, corte y secado</p>
            <span class="price">$250 - $400</span>
          </div>
          <div class="demo-service-item">
            <h5>🎨 Color Completo</h5>
            <p>Tinte profesional + tratamiento</p>
            <span class="price">$800 - $1,500</span>
          </div>
          <div class="demo-service-item">
            <h5>💅 Manicure & Pedicure</h5>
            <p>Gel semipermanente, diseños incluidos</p>
            <span class="price">$350 - $500</span>
          </div>
          <div class="demo-service-item">
            <h5>💆 Tratamiento Capilar</h5>
            <p>Keratina, botox o hidratación profunda</p>
            <span class="price">$600 - $1,200</span>
          </div>
        </div>
      </div>
      <div class="demo-site-section">
        <h4>📍 Visítanos</h4>
        <div class="demo-info-row"><span>📅</span> Lun-Sáb: 9:00 AM - 8:00 PM</div>
        <div class="demo-info-row"><span>📍</span> López Cotilla 567, Col. Lafayette, Guadalajara</div>
        <div class="demo-info-row"><span>📱</span> WhatsApp: (33) 9876-5432</div>
      </div>
    `,
    features: [
      'Catálogo de servicios con precios',
      'Galería de trabajos realizados',
      'Reservación de citas por WhatsApp',
      'Horarios de atención',
      'Perfiles de estilistas',
      'Promociones destacadas',
      'Bot IA en Messenger',
      'Diseño responsive'
    ]
  },
  consultorio: {
    emoji: '🏥',
    title: 'Consultorio Médico',
    subtitle: 'Servicios profesionales, CV del especialista y contacto',
    url: 'www.dra-martinez-dermatologa.com',
    content: `
      <div class="demo-site-section">
        <h4>👩‍⚕️ Dra. Laura Martínez — Dermatóloga</h4>
        <div class="demo-info-row"><span>🎓</span> Universidad de Guadalajara — Medicina General</div>
        <div class="demo-info-row"><span>🎓</span> UNAM — Especialidad en Dermatología</div>
        <div class="demo-info-row"><span>📋</span> Cédula Profesional: 12345678</div>
        <div class="demo-info-row"><span>⭐</span> +15 años de experiencia</div>
      </div>
      <div class="demo-site-section">
        <h4>🩺 Servicios</h4>
        <div class="demo-services-grid">
          <div class="demo-service-item">
            <h5>Consulta General</h5>
            <p>Evaluación dermatológica completa</p>
            <span class="price">$800</span>
          </div>
          <div class="demo-service-item">
            <h5>Tratamiento de Acné</h5>
            <p>Plan personalizado con seguimiento</p>
            <span class="price">$1,200</span>
          </div>
          <div class="demo-service-item">
            <h5>Dermatoscopía</h5>
            <p>Revisión de lunares y lesiones</p>
            <span class="price">$600</span>
          </div>
          <div class="demo-service-item">
            <h5>Peeling Químico</h5>
            <p>Rejuvenecimiento facial profesional</p>
            <span class="price">$2,500</span>
          </div>
        </div>
      </div>
      <div class="demo-site-section">
        <h4>📍 Consultorio</h4>
        <div class="demo-info-row"><span>📅</span> Lun-Vie: 10:00 AM - 7:00 PM</div>
        <div class="demo-info-row"><span>📅</span> Sábado: 10:00 AM - 2:00 PM</div>
        <div class="demo-info-row"><span>📍</span> Hospital Ángeles, Torre Médica, Piso 5, Consultorio 512</div>
        <div class="demo-info-row"><span>📞</span> (33) 3333-4444</div>
      </div>
    `,
    features: [
      'Perfil profesional y CV',
      'Lista de servicios y precios',
      'Cédula profesional visible',
      'Mapa de ubicación',
      'Agenda de citas por WhatsApp',
      'Formulario de contacto',
      'Bot IA en Messenger',
      'Diseño responsive'
    ]
  },
  gimnasio: {
    emoji: '🏋️',
    title: 'Gimnasio / Centro Fitness',
    subtitle: 'Clases, horarios, membresías e instalaciones',
    url: 'www.ironfit-gym.com',
    content: `
      <div class="demo-site-section">
        <h4>💪 Membresías</h4>
        <div class="demo-services-grid">
          <div class="demo-service-item">
            <h5>🥉 Básica</h5>
            <p>Acceso al área de pesas y cardio</p>
            <span class="price">$499/mes</span>
          </div>
          <div class="demo-service-item">
            <h5>🥇 Premium</h5>
            <p>Acceso total + clases grupales</p>
            <span class="price">$799/mes</span>
          </div>
          <div class="demo-service-item">
            <h5>🏆 VIP</h5>
            <p>Todo incluido + entrenador personal</p>
            <span class="price">$1,499/mes</span>
          </div>
          <div class="demo-service-item">
            <h5>📅 Pase del día</h5>
            <p>Acceso por un día a todas las áreas</p>
            <span class="price">$80</span>
          </div>
        </div>
      </div>
      <div class="demo-site-section">
        <h4>📋 Clases Grupales</h4>
        <div class="demo-info-row"><span>🧘</span> Yoga — Lun/Mié/Vie 7:00 AM</div>
        <div class="demo-info-row"><span>🥊</span> Box Fitness — Mar/Jue 6:00 PM</div>
        <div class="demo-info-row"><span>🚴</span> Spinning — Lun-Vie 8:00 PM</div>
        <div class="demo-info-row"><span>💃</span> Zumba — Lun/Mié 5:00 PM</div>
      </div>
      <div class="demo-site-section">
        <h4>📍 Ubicación</h4>
        <div class="demo-info-row"><span>📅</span> Lun-Vie: 5:00 AM - 11:00 PM</div>
        <div class="demo-info-row"><span>📅</span> Sáb-Dom: 7:00 AM - 3:00 PM</div>
        <div class="demo-info-row"><span>📍</span> Av. Patria 2020, Jardines del Bosque, Guadalajara</div>
      </div>
    `,
    features: [
      'Membresías y precios claros',
      'Horario de clases grupales',
      'Galería de instalaciones',
      'Formulario de inscripción',
      'Perfil de entrenadores',
      'Promociones activas',
      'Bot IA en Messenger',
      'Diseño responsive'
    ]
  },
  tienda: {
    emoji: '🛒',
    title: 'Tienda / Comercio',
    subtitle: 'Catálogo de productos, precios y formulario de pedidos',
    url: 'www.delicias-artesanales.com',
    content: `
      <div class="demo-site-section">
        <h4>🛍️ Nuestros Productos</h4>
        <div class="demo-products-grid">
          <div class="demo-product-item">
            <h5>🍫 Caja de Chocolates</h5>
            <p>12 piezas artesanales, sabores surtidos</p>
            <span class="price">$350</span>
          </div>
          <div class="demo-product-item">
            <h5>🍪 Kit de Galletas</h5>
            <p>24 galletas decoradas, caja premium</p>
            <span class="price">$280</span>
          </div>
          <div class="demo-product-item">
            <h5>🎂 Pastel Personalizado</h5>
            <p>Fondant, 20 personas, diseño a elegir</p>
            <span class="price">$850</span>
          </div>
          <div class="demo-product-item">
            <h5>🧁 Cupcakes x12</h5>
            <p>Sabores variados con decoración temática</p>
            <span class="price">$420</span>
          </div>
        </div>
      </div>
      <div class="demo-site-section">
        <h4>📍 Información</h4>
        <div class="demo-info-row"><span>🚚</span> Envíos a toda la ZMG — Gratis en compras +$500</div>
        <div class="demo-info-row"><span>📱</span> Pedidos por WhatsApp: (33) 5555-6666</div>
        <div class="demo-info-row"><span>📍</span> Sucursal: Av. México 1456, Col. Ladrón de Guevara</div>
        <div class="demo-info-row"><span>📅</span> Lun-Sáb: 9:00 AM - 7:00 PM</div>
      </div>
    `,
    features: [
      'Catálogo de productos con fotos',
      'Categorías organizadas',
      'Precios actualizados',
      'Pedidos por WhatsApp',
      'Info de envíos y entrega',
      'Promociones y descuentos',
      'Bot IA en Messenger',
      'Diseño responsive'
    ]
  },
  profesionista: {
    emoji: '👨‍💼',
    title: 'Profesionista Independiente',
    subtitle: 'Landing page, portafolio de trabajos y contacto directo',
    url: 'www.arq-carlos-design.com',
    content: `
      <div class="demo-site-section">
        <h4>👨‍💼 Arq. Carlos Ramírez</h4>
        <div class="demo-info-row"><span>🎓</span> ITESO — Arquitectura y Diseño</div>
        <div class="demo-info-row"><span>🏆</span> +8 años de experiencia en diseño residencial</div>
        <div class="demo-info-row"><span>📋</span> +50 proyectos completados en la ZMG</div>
        <div class="demo-info-row"><span>🌟</span> Especialista en diseño sustentable</div>
      </div>
      <div class="demo-site-section">
        <h4>🔧 Servicios</h4>
        <div class="demo-services-grid">
          <div class="demo-service-item">
            <h5>📐 Diseño Arquitectónico</h5>
            <p>Proyecto completo residencial o comercial</p>
            <span class="price">Desde $25,000</span>
          </div>
          <div class="demo-service-item">
            <h5>🏠 Remodelación</h5>
            <p>Diseño y supervisión de remodelaciones</p>
            <span class="price">Desde $15,000</span>
          </div>
          <div class="demo-service-item">
            <h5>🎨 Diseño de Interiores</h5>
            <p>Concepto, mobiliario y decoración</p>
            <span class="price">Desde $10,000</span>
          </div>
          <div class="demo-service-item">
            <h5>📊 Consultoría</h5>
            <p>Asesoría inicial y presupuesto</p>
            <span class="price">$1,500/sesión</span>
          </div>
        </div>
      </div>
      <div class="demo-site-section">
        <h4>📍 Contacto</h4>
        <div class="demo-info-row"><span>📱</span> WhatsApp: (33) 7777-8888</div>
        <div class="demo-info-row"><span>✉️</span> carlos@arq-design.com</div>
        <div class="demo-info-row"><span>📍</span> Guadalajara, Jalisco</div>
      </div>
    `,
    features: [
      'Landing page profesional',
      'Portafolio de proyectos',
      'Lista de servicios y precios',
      'Formulario de contacto',
      'CV y experiencia',
      'Testimonios de clientes',
      'Bot IA en Messenger',
      'Diseño responsive'
    ]
  }
};

function openDemo(type) {
  const data = demoData[type];
  if (!data) return;

  document.getElementById('modalEmoji').textContent = data.emoji;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle;
  document.getElementById('modalUrl').textContent = data.url;
  document.getElementById('modalContent').innerHTML = data.content;
  
  const featuresHTML = data.features.map(f => 
    `<div class="modal-feature-item"><span class="check">✓</span> ${f}</div>`
  ).join('');
  document.getElementById('modalFeatures').innerHTML = featuresHTML;

  const modal = document.getElementById('demoModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  document.getElementById('demoModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('demoModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeDemo();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDemo();
});

// ──── Smooth scroll for anchor links ────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ──── Counter animation for hero stats ────
function animateCounters() {
  const stats = document.querySelectorAll('.hero-stat h3');
  stats.forEach(stat => {
    const text = stat.textContent;
    // Only animate numeric values
    if (text.includes('$') || text.includes('h')) {
      stat.style.opacity = '0';
      setTimeout(() => {
        stat.style.transition = 'opacity 0.6s ease';
        stat.style.opacity = '1';
      }, 300);
    }
  });
}

// Run counter animation when page loads
window.addEventListener('load', animateCounters);

// ──── Active nav link highlighting ────
const sections = document.querySelectorAll('.section, .hero');
const navLinksAll = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinksAll.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#00d4ff';
    }
  });
});
