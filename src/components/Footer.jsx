import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about-us-detailed' },
    { name: 'Our Services', id: 'what-we-build' },
    { name: 'Packages', id: 'packages-pricing' },
    { name: 'Gallery', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact Us', id: 'contact-us' },
  ];

  const contactDetails = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: '+91 8754767261',
      href: 'tel:8754767261',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      label: 'info@liniarconstructions.com',
      href: 'mailto:info@liniarconstructions.com',
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Coimbatore, Tamil Nadu, India',
      href: null,
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Mon–Sat: 9 AM – 7 PM',
      href: null,
    },
  ];

  const socials = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918754767261',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: 'linear-gradient(180deg, #0a1f1e 0%, #061413 100%)', color: '#fff' }}>

      {/* ── Top accent line ── */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #0f766e, #14b8a6, #0d9488)' }} />

      {/* ── Main footer body ── */}
      <div className="container mx-auto px-6 py-14" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{
                width: 46, height: 46, borderRadius: 10,
                background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(20,184,166,0.3)',
                flexShrink: 0,
              }}>
                {/* Building icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-display font-black text-white tracking-tight" style={{ fontSize: '1rem', lineHeight: 1.2 }}>
                  LINIAR
                </div>
                <div className="font-display font-black text-white tracking-tight" style={{ fontSize: '1rem', lineHeight: 1.2 }}>
                  CONSTRUCTIONS
                </div>
              </div>
            </div>

            <p style={{ color: '#99f6e4', fontSize: '0.82rem', fontStyle: 'italic', fontWeight: 600, marginBottom: 14 }}>
              "We Build Your Trust"
            </p>

            <p style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: 20 }}>
              Established in 2019, delivering quality residential & commercial construction across Tamil Nadu with transparency and craftsmanship.
            </p>

            {/* Established badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(15,118,110,0.2)', border: '1px solid rgba(20,184,166,0.3)',
              borderRadius: 8, padding: '6px 12px',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#14b8a6' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#5eead4', letterSpacing: '0.05em' }}>
                EST. 2019 · COIMBATORE
              </span>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4 className="font-display font-bold text-white mb-5" style={{ fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 8,
                      color: '#9ca3af', fontSize: '0.85rem',
                      transition: 'color 0.2s ease',
                      padding: 0,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#5eead4';
                      e.currentTarget.querySelector('span.arrow').style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.querySelector('span.arrow').style.transform = 'translateX(0)';
                    }}
                  >
                    <span className="arrow" style={{ color: '#0d9488', fontSize: '0.6rem', transition: 'transform 0.2s ease' }}>▶</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <h4 className="font-display font-bold text-white mb-5" style={{ fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactDetails.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{
                    width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(15,118,110,0.2)', border: '1px solid rgba(20,184,166,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#14b8a6',
                  }}>
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a href={item.href} style={{ color: '#9ca3af', fontSize: '0.83rem', lineHeight: 1.5, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#5eead4'}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ color: '#9ca3af', fontSize: '0.83rem', lineHeight: 1.5 }}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: CTA + Socials ── */}
          <div>
            <h4 className="font-display font-bold text-white mb-5" style={{ fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Start Your Project
            </h4>
            <p style={{ color: '#9ca3af', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: 16 }}>
              Ready to build? Get a free consultation and quote from our team today.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918754767261"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: '#25d366', color: '#fff',
                padding: '10px 0', borderRadius: 10, fontWeight: 700, fontSize: '0.85rem',
                textDecoration: 'none', marginBottom: 10,
                transition: 'opacity 0.2s, transform 0.2s',
                boxShadow: '0 4px 14px rgba(37,211,102,0.25)',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Call CTA */}
            <a
              href="tel:8754767261"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                border: '1px solid rgba(20,184,166,0.4)', color: '#5eead4',
                padding: '10px 0', borderRadius: 10, fontWeight: 700, fontSize: '0.85rem',
                textDecoration: 'none', marginBottom: 20,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,118,110,0.2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9ca3af', textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(15,118,110,0.3)';
                    e.currentTarget.style.color = '#5eead4';
                    e.currentTarget.style.borderColor = 'rgba(20,184,166,0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#9ca3af';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      {/* ── Bottom bar ── */}
      <div className="container mx-auto px-6 py-5" style={{ maxWidth: 1280 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: '#6b7280', fontSize: '0.78rem', textAlign: 'center' }}>
            © {new Date().getFullYear()}
            {/* <p style={{ color: '#6b7280', fontSize: '0.78rem', textAlign: 'center' }}> */}
            <span style={{ color: '#374151', margin: '0 8px' }}>|</span>
            Developed by{' '}
            <a
              href="https://benchmarksetters.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0d9488', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#5eead4'}
              onMouseLeave={e => e.currentTarget.style.color = '#0d9488'}
            >
              Benchmarksetters<span style={{ color: '#6b7280', fontSize: '0.78rem', textAlign: 'center' }}> All rights reserved.</span>
            </a>
            {/* </p> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;