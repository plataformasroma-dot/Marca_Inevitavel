const { useState, useEffect, useMemo, useRef } = React;

// ============================================================
// PALETTES
// ============================================================
const PALETTES = {
  roma: {
    bg: '#F5F0E8', bg2: '#EDE5D8', ink: '#0B112E',
    inkSoft: '#2A3050', muted: '#6B7088',
    accent: '#F18523', accentDeep: '#C96A14', gold: '#0B112E',
    name: 'Marca'
  },
  noir: {
    bg: '#0B112E', bg2: '#141A3A', ink: '#F5F0E8',
    inkSoft: '#C9CBD8', muted: '#7A7E95',
    accent: '#F18523', accentDeep: '#C96A14', gold: '#F5F0E8',
    name: 'Noir'
  },
  bone: {
    bg: '#EFEAE0', bg2: '#E3DDCF', ink: '#0B112E',
    inkSoft: '#2A3050', muted: '#6B7088',
    accent: '#F18523', accentDeep: '#C96A14', gold: '#0B112E',
    name: 'Osso'
  }
};

// ============================================================
// TWEAKS / EDIT MODE
// ============================================================
function useTweaks() {
  const [tweaks, setTweaks] = useState(window.TWEAKS);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  return { tweaks, editMode, update };
}

// Apply palette to CSS vars
function applyPalette(p) {
  const r = document.documentElement;
  r.style.setProperty('--bg', p.bg);
  r.style.setProperty('--bg-2', p.bg2);
  r.style.setProperty('--ink', p.ink);
  r.style.setProperty('--ink-soft', p.inkSoft);
  r.style.setProperty('--muted', p.muted);
  r.style.setProperty('--granada', p.accent);
  r.style.setProperty('--granada-deep', p.accentDeep);
  r.style.setProperty('--gold', p.gold);
  r.style.setProperty('--hairline', p.ink + '26');
  document.body.style.background = p.bg;
  document.body.style.color = p.ink;
}

// ============================================================
// COUNTDOWN HOOK
// ============================================================
function useCountdown(targetISO) {
  const calc = () => {
    const t = new Date(targetISO).getTime() - Date.now();
    if (t <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(t / 86400000),
      h: Math.floor((t % 86400000) / 3600000),
      m: Math.floor((t % 3600000) / 60000),
      s: Math.floor((t % 60000) / 1000)
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const i = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(i);
  }, [targetISO]);
  return time;
}

// ============================================================
// SHARED UI
// ============================================================
const Hairline = ({ vertical, style }) => (
  <div style={{
    background: 'var(--hairline)',
    [vertical ? 'width' : 'height']: 1,
    [vertical ? 'height' : 'width']: '100%',
    ...style
  }} />
);

const SectionLabel = ({ num, children }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 32 }}>
    <span className="mono" style={{ color: 'var(--granada)' }}>{num}</span>
    <span className="mono" style={{ color: 'var(--ink-soft)' }}>— {children}</span>
  </div>
);

// ============================================================
// NAV
// ============================================================
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      padding: scrolled ? '16px 48px' : '28px 48px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'var(--granada)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)',
            width: 2, height: 6, background: 'var(--granada)', borderRadius: 1
          }} />
        </div>
        <span className="serif" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em' }}>
          Marca Inevitável
        </span>
      </div>
      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        <a href="#imersao" className="mono" style={{ color: 'var(--ink-soft)' }}>Imersão</a>
        <a href="#planos" className="mono" style={{ color: 'var(--ink-soft)' }}>Planos</a>
        <a href="#yasmin" className="mono" style={{ color: 'var(--ink-soft)' }}>Yasmin</a>
        <a href="#vaga" style={{
          padding: '10px 20px',
          border: '1px solid var(--ink)',
          borderRadius: 999,
          fontSize: 13,
          letterSpacing: '0.02em',
          transition: 'all 0.3s',
        }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)'; }}
           onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}>
          Garantir vaga
        </a>
      </div>
    </nav>
  );
}

Object.assign(window, { useTweaks, applyPalette, useCountdown, PALETTES, Hairline, SectionLabel, Nav });
