const { useState: useStateTw } = React;

// ============================================================
// TWEAKS PANEL
// ============================================================
function TweaksPanel({ editMode, tweaks, update }) {
  if (!editMode) return null;

  const paletteOpts = ['roma', 'noir', 'bone'];

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      width: 280,
      background: 'var(--bg)',
      border: '1px solid var(--ink)',
      borderRadius: 8,
      padding: 20,
      fontFamily: 'JetBrains Mono, monospace',
      zIndex: 9999,
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
    }}>
      <div style={{
        fontSize: 11,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: 16,
        paddingBottom: 12,
        borderBottom: '1px solid var(--hairline)',
        color: 'var(--granada)'
      }}>
        Tweaks
      </div>

      {/* Palette */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Paleta
        </label>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {paletteOpts.map(p => (
            <button
              key={p}
              onClick={() => update({ palette: p })}
              style={{
                flex: 1,
                padding: '8px 4px',
                fontSize: 10,
                background: tweaks.palette === p ? 'var(--ink)' : 'transparent',
                color: tweaks.palette === p ? 'var(--bg)' : 'var(--ink)',
                border: '1px solid var(--hairline)',
                borderRadius: 4,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'inherit'
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Countdown toggle */}
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Countdown
        </label>
        <button
          onClick={() => update({ showCountdown: !tweaks.showCountdown })}
          style={{
            width: 40,
            height: 22,
            borderRadius: 11,
            border: 'none',
            background: tweaks.showCountdown ? 'var(--granada)' : 'var(--hairline)',
            position: 'relative',
            cursor: 'pointer',
            padding: 0,
            transition: 'background 0.2s'
          }}
        >
          <div style={{
            width: 16, height: 16, borderRadius: '50%',
            background: 'var(--bg)',
            position: 'absolute',
            top: 3,
            left: tweaks.showCountdown ? 21 : 3,
            transition: 'left 0.2s'
          }} />
        </button>
      </div>

      {/* Target date */}
      <div style={{ marginBottom: 4 }}>
        <label style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Data-alvo
        </label>
        <input
          type="datetime-local"
          value={tweaks.targetDate.slice(0, 16)}
          onChange={(e) => update({ targetDate: e.target.value + ':00-03:00' })}
          style={{
            width: '100%',
            marginTop: 8,
            padding: '6px 8px',
            fontSize: 11,
            border: '1px solid var(--hairline)',
            borderRadius: 4,
            background: 'var(--bg)',
            fontFamily: 'inherit'
          }}
        />
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
function App() {
  const { tweaks, editMode, update } = useTweaks();

  React.useEffect(() => {
    applyPalette(PALETTES[tweaks.palette] || PALETTES.roma);
  }, [tweaks.palette]);

  return (
    <>
      <Nav />
      <Hero tweaks={tweaks} />
      <Pitch />
      <ParaQuem />
      <Planos />
      <Yasmin />
      <FinalCTA />
      <Footer />
      <TweaksPanel editMode={editMode} tweaks={tweaks} update={update} />
    </>
  );
}

// Wait for all component scripts to load, then mount
function mount() {
  if (!window.Hero || !window.Planos || !window.TweaksPanel) {
    setTimeout(mount, 50);
    return;
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
mount();

window.TweaksPanel = TweaksPanel;
window.App = App;
