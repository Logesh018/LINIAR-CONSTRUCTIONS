import React, { useState, useEffect } from 'react';

// ✅ Color palette updated to match Liniar logo teal-green
// Teal-900: #134e4a | Teal-800: #115e59 | Teal-700: #0f766e | Teal-600: #0d9488 | Teal-500: #14b8a6

const residentialPackages = [
  {
    name: "Basic", price: "2,199", icon: "🏠",
    headerBg: "linear-gradient(160deg, #0f766e 0%, #0d9488 100%)",
    btnBg:    "linear-gradient(135deg, #0f766e, #14b8a6)",
    features: [
      { text: "CCTV Cameras", star: true },
      { text: "Standard quality materials" },
      { text: "Basic finishing work" },
      { text: "Standard flooring & tiling" },
      { text: "Basic electrical & plumbing" },
      { text: "Distemper paint finish" },
    ],
  },
  {
    name: "Standard", price: "2,499", icon: "🏡",
    headerBg: "linear-gradient(160deg, #115e59 0%, #0f766e 100%)",
    btnBg:    "linear-gradient(135deg, #115e59, #0d9488)",
    features: [
      { text: "CCTV Cameras", star: true },
      { text: "Sump with waterproofing — 6,000 L", star: true },
      { text: "Septic tank with waterproofing — 8,000 L", star: true },
      { text: "Premium quality materials" },
      { text: "Vitrified tiles & flooring" },
      { text: "Concealed electrical wiring" },
      { text: "Emulsion paint finish" },
    ],
  },
  {
    name: "Standard+", price: "2,699", icon: "🏘️",
    headerBg: "linear-gradient(160deg, #115e59 0%, #0d9488 100%)",
    btnBg:    "linear-gradient(135deg, #115e59, #14b8a6)",
    features: [
      { text: "CCTV Cameras", star: true },
      { text: "Sump with waterproofing — 8,000 L", star: true },
      { text: "Septic tank with waterproofing — 10,000 L", star: true },
      { text: "Full Color Painting", star: true },
      { text: "Premium quality materials" },
      { text: "Superior finishing work" },
      { text: "Vitrified tiles & premium flooring" },
    ],
  },
  {
    name: "Premium", price: "3,199", icon: "🏗️",
    headerBg: "linear-gradient(160deg, #0a2e2a 0%, #115e59 100%)",
    btnBg:    "linear-gradient(135deg, #0a2e2a, #0f766e)",
    features: [
      { text: "CCTV Cameras", star: true },
      { text: "Sump with waterproofing — 10,000 L", star: true },
      { text: "Septic tank with waterproofing — 12,000 L", star: true },
      { text: "Full Color Painting", star: true },
      { text: "Compound Wall Included", star: true },
      { text: "Premium materials throughout" },
      { text: "Designer finishing" },
    ],
  },
  {
    name: "Luxury", price: "4,499", icon: "🏛️",
    // Luxury keeps its amber/gold — intentional premium signal
    headerBg: "linear-gradient(160deg, #78350f 0%, #b45309 50%, #d97706 100%)",
    btnBg:    "linear-gradient(135deg, #92400e, #d97706)",
    isLuxury: true,
    features: [
      { text: "Italian marble & exotic wood flooring" },
      { text: "Fully modular kitchen & wardrobes" },
      { text: "Smart home automation ready" },
      { text: "Premium texture & designer paint" },
      { text: "Branded sanitary & CP fittings" },
      { text: "Dedicated project manager" },
      { text: "Architectural consultation" },
    ],
  },
];

const commercialPackages = [
  {
    name: "Basic", price: "1,699", icon: "🏢",
    headerBg:    "linear-gradient(160deg, #0a2e2a 0%, #115e59 100%)",
    btnBg:       "linear-gradient(135deg, #0a2e2a, #0f766e)",
    accentColor: "#2dd4bf",
    features: [
      { text: "Standard commercial materials" },
      { text: "Basic interior finishing" },
      { text: "Standard flooring & tiling" },
      { text: "Industrial electrical & plumbing" },
      { text: "Basic CCTV provision" },
      { text: "Weekly site updates" },
    ],
  },
  {
    name: "Standard", price: "1,899", icon: "🏬",
    headerBg:    "linear-gradient(160deg, #0a2e2a 0%, #115e59 60%, #0f766e 100%)",
    btnBg:       "linear-gradient(135deg, #0a2e2a, #0f766e)",
    accentColor: "#14b8a6",
    features: [
      { text: "Premium commercial materials" },
      { text: "High-quality finishing" },
      { text: "Vitrified & anti-skid flooring" },
      { text: "Concealed electrical wiring" },
      { text: "Emulsion paint finish" },
      { text: "CCTV monitoring" },
      { text: "Daily progress updates" },
    ],
  },
  {
    name: "Standard+", price: "2,199", icon: "🏙️",
    headerBg:    "linear-gradient(160deg, #0f766e 0%, #0d9488 100%)",
    btnBg:       "linear-gradient(135deg, #0a2e2a, #115e59)",
    accentColor: "#2dd4bf",
    features: [
      { text: "Imported commercial materials" },
      { text: "Designer interior finishing" },
      { text: "Premium flooring solutions" },
      { text: "Smart electrical layout" },
      { text: "Full color painting" },
      { text: "Advanced CCTV & access control" },
      { text: "Real-time app tracking" },
    ],
  },
];

export default function PackagesPricing() {
  const [activeTab, setActiveTab] = useState('residential');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPackages, setDisplayPackages] = useState(residentialPackages);

  const handleTabSwitch = (tab) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      const newPackages = tab === 'residential' ? residentialPackages : commercialPackages;
      setDisplayPackages(newPackages);
      setActiveTab(tab);
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 300);
  };

  return (
    <section
      id="packages-pricing"
      className="relative overflow-hidden"
      style={{ padding: '52px 0 48px', background: 'linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%)' }}
    >
      {/* ✅ Glow blobs updated to teal */}
      <div style={{ position:'absolute',top:'-80px',right:'-80px',width:'400px',height:'400px',background:'rgba(13,148,136,0.07)',borderRadius:'50%',filter:'blur(80px)',pointerEvents:'none' }} />
      <div style={{ position:'absolute',bottom:'-80px',left:'-80px',width:'340px',height:'340px',background:'rgba(15,118,110,0.05)',borderRadius:'50%',filter:'blur(70px)',pointerEvents:'none' }} />

      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1380 }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 22 }}>
          <span className="text-teal-700 font-bold text-sm tracking-wider uppercase mb-2 block">
            Transparent Pricing
          </span>
          <h2
            className="font-display font-black"
            style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', marginBottom: 4, letterSpacing: '-0.02em', color: '#111827' }}
          >
            Packages &amp; Pricing
          </h2>
          {/* ✅ Underline bar — teal gradient */}
          <div
            style={{
              width: 96, height: 4, margin: '0 auto 16px',
              background: 'linear-gradient(135deg, #0f766e, #14b8a6)',
              borderRadius: 9999,
            }}
          />

          {/* Toggle switch */}
          <div
            style={{
              display: 'inline-flex',
              background: '#f0fdfa',
              border: '1px solid #99f6e4',
              borderRadius: 60,
              padding: '5px 6px',
              gap: 4,
            }}
          >
            {['residential', 'commercial'].map(tab => (
              <button
                key={tab}
                onClick={() => handleTabSwitch(tab)}
                style={{
                  padding: '9px 28px',
                  borderRadius: 60,
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s ease',
                  // ✅ Active tab uses teal gradient
                  background: activeTab === tab
                    ? 'linear-gradient(135deg, #0f766e, #0d9488)'
                    : 'transparent',
                  color: activeTab === tab ? '#ffffff' : '#4b5563',
                  boxShadow: activeTab === tab ? '0 2px 16px rgba(15,118,110,0.3)' : 'none',
                }}
              >
                {tab === 'residential' ? '🏠  Residential' : '🏢  Commercial'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div
          className="pkg-grid-wrapper"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(15px)' : 'translateY(0)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            maxWidth: activeTab === 'commercial' ? 820 : '100%',
            margin: '0 auto',
          }}
        >
          <div
            className="pkg-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${displayPackages.length}, 1fr)`,
              gap: 12,
            }}
          >
            {displayPackages.map((pkg, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className="pkg-card"
                style={{
                  background: '#ffffff',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: pkg.isLuxury
                    ? '0 0 0 2.5px #d97706, 0 10px 36px rgba(0,0,0,0.22)'
                    : '0 6px 30px rgba(0,0,0,0.15)',
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                {/* ─ Card Header ─ */}
                <div
                  style={{
                    background: pkg.headerBg,
                    padding: '20px 16px 16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1, marginBottom: 8 }}>
                    {pkg.icon}
                  </div>
                  <div
                    className="font-display font-black text-white"
                    style={{ fontSize: 'clamp(0.95rem,1.6vw,1.15rem)', letterSpacing: '0.01em', marginBottom: 10 }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'baseline',
                      gap: 3,
                      background: 'rgba(255,255,255,0.15)',
                      padding: '5px 16px',
                      borderRadius: 40,
                    }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(0.72rem,1vw,0.82rem)', fontWeight: 600 }}>₹</span>
                    <span
                      className="font-display font-black text-white"
                      style={{ fontSize: 'clamp(1.2rem,2.1vw,1.55rem)', lineHeight: 1 }}
                    >
                      {pkg.price}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.62rem,0.9vw,0.72rem)', fontWeight: 500 }}>/sq.ft</span>
                  </div>
                </div>

                {/* ─ Features ─ */}
                <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {pkg.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                        {f.star ? (
                          <span style={{ color: '#f59e0b', fontSize: '0.82rem', flexShrink: 0, marginTop: 1, lineHeight: 1 }}>★</span>
                        ) : (
                          // ✅ Feature dot updated to teal
                          <span style={{ color: pkg.isLuxury ? '#d97706' : (pkg.accentColor || '#14b8a6'), fontSize: '0.72rem', flexShrink: 0, marginTop: 2, lineHeight: 1 }}>✦</span>
                        )}
                        <span
                          style={{
                            fontSize: 'clamp(0.73rem,1.05vw,0.82rem)',
                            lineHeight: 1.45,
                            fontWeight: f.star ? 700 : 400,
                            color: f.star ? '#111827' : '#4b5563',
                          }}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Stats bar — teal gradient */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            maxWidth: 600,
            margin: '28px auto 0',
            gap: 8,
            background: 'linear-gradient(135deg, #0f766e, #0d9488)',
            borderRadius: 16,
            padding: '18px 24px',
          }}
        >
          {[['500+','Projects Done'],['15+','Years Experience'],['98%','Satisfaction'],['100%','On-Time']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div
                className="font-display font-black text-white"
                style={{ fontSize: 'clamp(1.05rem,2.4vw,1.5rem)', lineHeight: 1 }}
              >
                {n}
              </div>
              <div style={{ color: 'rgba(204,251,241,0.9)', fontSize: 'clamp(0.6rem,0.9vw,0.7rem)', marginTop: 3 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .pkg-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          .pkg-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1100px) {
          .pkg-card {
            transition: transform 0.24s ease, box-shadow 0.24s ease;
          }
          .pkg-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 44px rgba(0,0,0,0.24) !important;
          }
        }

        .pkg-card {
          opacity: 0;
          animation: slideInUp 0.5s ease forwards;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .pkg-grid-wrapper {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}