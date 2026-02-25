import React, { useState, useEffect, useRef } from 'react';

import imgHouseLights from '../../assets/gallery/LC-house-LightsOn.jpg';
import imgHall        from '../../assets/gallery/LC-Hall.jpg';
import imgKitchen     from '../../assets/gallery/LC-Kitchen.jpg';
import imgBasement1   from '../../assets/gallery/LC-Basement1.jpg';
import imgBasement4   from '../../assets/gallery/LC-Basement4.jpg';
import imgKitchen2    from '../../assets/gallery/LC-KitchenSelves.jpg';
import imgHouse       from '../../assets/gallery/LC-house-outside.jpg';
import imgBasement2   from '../../assets/gallery/LC-Basement2.jpg';
import imgWorkers     from '../../assets/gallery/LC-Workers.jpg';
import imgBasement3   from '../../assets/gallery/LC-Basement3.jpg';

const SLIDE_DURATION = 3000;

const images = [
  { src: imgHouseLights },
  { src: imgHall        },
  { src: imgKitchen     },
  { src: imgBasement1   },
  { src: imgBasement4   },
  { src: imgKitchen2    },
  { src: imgHouse       },
  { src: imgBasement2   },
  { src: imgWorkers     },
  { src: imgBasement3   },
];

// ── Responsive breakpoint helper ──
function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 540)  return 1; // mobile
  if (window.innerWidth < 900)  return 2; // tablet
  return 3;                               // desktop
}

let _uid = 0;
function makeItem(imgIdx, visibleCount, slot) {
  return {
    uid: _uid++,
    imgIdx: ((imgIdx % images.length) + images.length) % images.length,
    slot,
  };
}

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  // ── Track screen size changes ──
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Re-initialise items whenever visibleCount changes
  const nextImgRef = useRef(visibleCount + 1);
  const [items, setItems] = useState(() => {
    const initial = [];
    for (let i = 0; i < visibleCount; i++) initial.push(makeItem(i, visibleCount, i));
    initial.push(makeItem(visibleCount, visibleCount, visibleCount)); // buffer
    nextImgRef.current = visibleCount + 1;
    return initial;
  });

  useEffect(() => {
    // Reset conveyor when screen size bucket changes
    const initial = [];
    for (let i = 0; i < visibleCount; i++) initial.push(makeItem(i, visibleCount, i));
    initial.push(makeItem(visibleCount, visibleCount, visibleCount));
    nextImgRef.current = visibleCount + 1;
    setItems(initial);
  }, [visibleCount]);

  const [paused, setPaused]           = useState(false);
  const [lightbox, setLightbox]       = useState(null);

  // ── Conveyor tick ──
  useEffect(() => {
    if (paused || lightbox !== null) return;
    const timer = setInterval(() => {
      setItems(prev => {
        const kept    = prev.filter(item => item.slot > -2);
        const shifted = kept.map(item => ({ ...item, slot: item.slot - 1 }));
        const nextIdx = nextImgRef.current++;
        return [...shifted, makeItem(nextIdx, visibleCount, visibleCount)];
      });
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paused, lightbox, visibleCount]);

  // ── Keyboard nav for lightbox ──
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape')     { setLightbox(null); }
      if (e.key === 'ArrowRight') { setLightbox(l => (l + 1) % images.length); }
      if (e.key === 'ArrowLeft')  { setLightbox(l => (l - 1 + images.length) % images.length); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // ── Lock scroll ──
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const openLightbox = (imgIdx) => {
    setLightbox(imgIdx);
  };

  const slotWidth = 100 / visibleCount;

  return (
    <>
      <section id="gallery" className="py-15 bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="container mx-auto px-4 mb-10 text-center" style={{ maxWidth: 1280 }}>
          <span className="text-primary-600 font-bold text-sm tracking-wider uppercase mb-2 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Project Gallery
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-base max-w-md mx-auto">
            From foundation to finish. Hover to pause · Click to view in full.
          </p>
        </div>

        {/* ── Conveyor track ── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: 260 }}>
            {items.map(item => {
              const img       = images[item.imgIdx];
              const isVisible = item.slot >= 0 && item.slot < visibleCount;

              return (
                <div
                  key={item.uid}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `calc(${item.slot * slotWidth}% + 8px)`,
                    width: `calc(${slotWidth}% - 16px)`,
                    height: '100%',
                    willChange: 'left',
                    transition: 'left 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isVisible ? 'pointer' : 'default',
                    zIndex: isVisible ? 2 : 1,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  onMouseEnter={() => isVisible && setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onClick={() => isVisible && openLightbox(item.imgIdx)}
                >
                  <div
                    className="g-card"
                    style={{
                      position: 'relative', width: '100%', height: '100%',
                      borderRadius: 14, overflow: 'hidden', background: '#e5e7eb',
                      boxShadow: isVisible ? '0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)' : 'none',
                      border: isVisible ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    }}
                  >
                    <img
                      src={img.src}
                      alt="Gallery image"
                      decoding="async"
                      className="g-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    />

                    {isVisible && (
                      <div className="g-overlay" style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0,0,0,0.3)',
                        opacity: 0, transition: 'opacity 0.3s ease',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                      }}>
                        {/* Expand icon */}
                        <div style={{
                          width: 40, height: 40, borderRadius: '50%',
                          background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                            <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                          </svg>
                        </div>

                        {paused && (
                          <div style={{
                            position: 'absolute', top: 10, left: 10,
                            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: 20, padding: '2px 8px',
                            color: 'rgba(255,255,255,0.8)', fontSize: '0.6rem', fontWeight: 700,
                            display: 'flex', alignItems: 'center', gap: 4,
                          }}>
                            <svg width="7" height="9" viewBox="0 0 7 9" fill="white">
                              <rect x="0" y="0" width="2" height="9" rx="1"/>
                              <rect x="5" y="0" width="2" height="9" rx="1"/>
                            </svg>
                            Paused
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          📸 More project photos coming soon
        </p>
      </section>

      {/* ══════════════════════
          LIGHTBOX
      ══════════════════════ */}
      {lightbox !== null && (
        <div
          onClick={() => { setLightbox(null); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.93)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'lbFade 0.2s ease',
          }}
        >
          {/* Image container */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw', maxHeight: '88vh',
              borderRadius: 14, overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.7)',
              animation: 'lbScale 0.22s ease',
            }}
          >
            <img
              src={images[lightbox].src}
              alt="Gallery image"
              decoding="async"
              style={{ display: 'block', maxWidth: '90vw', maxHeight: '84vh', objectFit: 'contain' }}
            />

            {/* Prev / Next */}
            {[
              { side: 'left',  label: '←', fn: (e) => { e.stopPropagation(); setLightbox(l => (l - 1 + images.length) % images.length); } },
              { side: 'right', label: '→', fn: (e) => { e.stopPropagation(); setLightbox(l => (l + 1) % images.length); } },
            ].map(({ side, label, fn }) => (
              <button key={side} onClick={fn} style={{
                position: 'absolute', top: '50%', [side]: 12, transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)',
                color: 'white', borderRadius: '50%', width: 40, height: 40,
                cursor: 'pointer', fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(15,118,110,0.6)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={() => { setLightbox(null); }}
            style={{
              position: 'fixed', top: 18, right: 20,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', borderRadius: '50%', width: 38, height: 38,
              cursor: 'pointer', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.45)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            ✕
          </button>

          {/* Counter */}
          <div style={{
            position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20, padding: '4px 16px',
            color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {lightbox + 1} / {images.length} · ← → to browse · Esc to close
          </div>
        </div>
      )}

      <style>{`
        .g-card:hover .g-overlay { opacity: 1 !important; }
        .g-card:hover .g-img     { transform: scale(1.04); }
        @keyframes lbFade  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbScale { from { transform: scale(0.95); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </>
  );
}