import React, { useState, useEffect, useRef } from 'react';

import imgHouseLights from '../../assets/gallery/LC-house-LightsOn.jpg';
import imgHall from '../../assets/gallery/LC-Hall.jpg';
import imgKitchen from '../../assets/gallery/LC-Kitchen.jpg';
import imgBasement1 from '../../assets/gallery/LC-Basement1.jpg';
import imgBasement4 from '../../assets/gallery/LC-Basement4.jpg';
import imgKitchen2 from '../../assets/gallery/LC-KitchenSelves.jpg';
import imgHouse from '../../assets/gallery/LC-house-outside.jpg';
import imgBasement2 from '../../assets/gallery/LC-Basement2.jpg';
import imgWorkers from '../../assets/gallery/LC-Workers.jpg';
import imgBasement3 from '../../assets/gallery/LC-Basement3.jpg';

const SLIDE_DURATION = 3000;
const VISIBLE_COUNT = 3;

const images = [
  { src: imgHouseLights, title: 'Villa Exterior', caption: 'Completed residential villa with premium elevation finish.', tag: 'Residential' },
  { src: imgHall, title: 'Living Room', caption: 'Designer TV unit with feature wall and warm ambient lighting.', tag: 'Interior' },
  { src: imgKitchen, title: 'Modular Kitchen', caption: 'Granite countertops and LED under-cabinet lighting throughout.', tag: 'Interior' },
  { src: imgBasement1, title: 'Foundation Work', caption: 'Column framework and rebar reinforcement at foundation stage.', tag: 'Construction' },
  { src: imgBasement4, title: 'Pillar & Footing', caption: 'Deep footing with rebar cage — strength built from the ground up.', tag: 'Construction' },

  { src: imgKitchen2, title: 'Shelves Finishing', caption: 'Custom storage shelves with precision finishing and durable laminates.', tag: 'Interior' },
  { src: imgHouse, title: 'House Exterior', caption: 'Front elevation showcasing modern architecture and clean facade lines.', tag: 'Residential' },
  { src: imgBasement2, title: 'Basement Structure', caption: 'Structural framework and slab preparation in progress.', tag: 'Construction' },
  { src: imgWorkers, title: 'On-Site Team', caption: 'Skilled workforce executing construction with safety and precision.', tag: 'Construction' },
  { src: imgBasement3, title: 'Basement Progress', caption: 'Ongoing basement development with reinforced support structures.', tag: 'Construction' }
];

const tagColors = {
  Residential: { bg: 'rgba(20,184,166,0.15)', border: 'rgba(20,184,166,0.45)', text: '#0f766e' },
  Interior: { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.4)', text: '#7c3aed' },
  Construction: { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.4)', text: '#b45309' },
};

let _uid = 0;
function makeItem(imgIdx, slot) {
  return {
    uid: _uid++,
    imgIdx: ((imgIdx % images.length) + images.length) % images.length,
    slot,
  };
}

export default function Gallery() {
  // Slots: 0,1,2 = visible left→right | 3 = off-screen right (buffer) | -1 = off-screen left (exiting)
  const [items, setItems] = useState(() => [
    makeItem(0, 0),
    makeItem(1, 1),
    makeItem(2, 2),
    makeItem(3, 3), // pre-buffered
  ]);
  const nextImgRef = useRef(4);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  // ── Conveyor tick ──
  useEffect(() => {
    if (paused || lightbox !== null) return;
    const timer = setInterval(() => {
      setItems(prev => {
        const kept = prev.filter(item => item.slot > -2);
        const shifted = kept.map(item => ({ ...item, slot: item.slot - 1 }));
        const nextIdx = nextImgRef.current++;
        return [...shifted, makeItem(nextIdx, VISIBLE_COUNT)]; // new item enters at slot 3 (off-screen right)
      });
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paused, lightbox]);

  // ── Keyboard nav for lightbox ──
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % images.length);
      if (e.key === 'ArrowLeft') setLightbox(l => (l - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // ── Lock scroll when lightbox open ──
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <section id="gallery" className="py-15 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 mb-10 text-center" style={{ maxWidth: 1280 }}>
          <span className="text-primary-600 font-bold text-sm tracking-wider uppercase mb-2 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Project Gallery
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-base max-w-md mx-auto">
            From foundation to finish. Hover an image to pause · Click to view in full.
          </p>
        </div>

        {/* ── Conveyor track ── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: 260 }}>
            {items.map(item => {
              const img = images[item.imgIdx];
              const tc = tagColors[img.tag];
              const isVisible = item.slot >= 0 && item.slot < VISIBLE_COUNT;
              // Each card width = 1/3 of track, with small gaps via padding
              const slotWidth = 100 / VISIBLE_COUNT; // 33.333%

              return (
                <div
                  key={item.uid}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: `calc(${item.slot * slotWidth}% + 8px)`,
                    width: `calc(${slotWidth}% - 16px)`,
                    height: '100%',
                    transition: 'left 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isVisible ? 'pointer' : 'default',
                    zIndex: isVisible ? 2 : 1,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  onMouseEnter={() => isVisible && setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onClick={() => isVisible && setLightbox(item.imgIdx)}
                >
                  <div
                    className="g-card"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: 14,
                      overflow: 'hidden',
                      background: '#e5e7eb',
                      // Subtle shadow on light bg
                      boxShadow: isVisible
                        ? '0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)'
                        : 'none',
                      border: isVisible ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="g-img"
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                        transition: 'transform 0.5s ease',
                      }}
                    />

                    {/* Hover overlay */}
                    {isVisible && (
                      <div
                        className="g-overlay"
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex', flexDirection: 'column',
                          justifyContent: 'flex-end',
                          padding: '14px 14px 12px',
                        }}
                      >
                        {/* Tag */}
                        <span style={{
                          display: 'inline-block', alignSelf: 'flex-start',
                          background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text,
                          fontSize: '0.56rem', fontWeight: 800, letterSpacing: '0.1em',
                          textTransform: 'uppercase', padding: '2px 7px', borderRadius: 20,
                          marginBottom: 5,
                        }}>
                          {img.tag}
                        </span>
                        <p className="font-display font-bold text-white" style={{ fontSize: '0.82rem', marginBottom: 2, lineHeight: 1.3 }}>
                          {img.title}
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.68rem', lineHeight: 1.4 }}>
                          {img.caption}
                        </p>

                        {/* Expand icon */}
                        <div style={{
                          position: 'absolute', top: 10, right: 10,
                          width: 28, height: 28, borderRadius: '50%',
                          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* Paused pill */}
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
                              <rect x="0" y="0" width="2" height="9" rx="1" />
                              <rect x="5" y="0" width="2" height="9" rx="1" />
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

      {/* ══ LIGHTBOX ══ */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.93)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'lbFade 0.2s ease',
          }}
        >
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
              alt={images[lightbox].title}
              style={{ display: 'block', maxWidth: '90vw', maxHeight: '84vh', objectFit: 'contain' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
              padding: '32px 20px 16px',
            }}>
              <p className="font-display font-bold text-white" style={{ fontSize: '1rem', marginBottom: 3 }}>
                {images[lightbox].title}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem' }}>
                {images[lightbox].caption}
              </p>
            </div>

            {[
              { side: 'left', label: '←', fn: () => setLightbox(l => (l - 1 + images.length) % images.length) },
              { side: 'right', label: '→', fn: () => setLightbox(l => (l + 1) % images.length) },
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

          <button onClick={() => setLightbox(null)} style={{
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