const { useState: useStateHero, useEffect: useEffectHero } = React;

// ============================================================
// HERO
// ============================================================
function Hero({ tweaks }) {
  const t = useCountdown(tweaks.targetDate);
  const [mounted, setMounted] = useStateHero(false);
  useEffectHero(() => { setTimeout(() => setMounted(true), 100); }, []);

  const fadeIn = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 1s ease ${delay}s, transform 1s ease ${delay}s`
  });

  return (
    <section style={{
      minHeight: '100vh',
      padding: '140px 48px 80px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* top row — date marker */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', ...fadeIn(0.1) }}>
        <div>
          <div className="mono" style={{ color: 'var(--granada)', marginBottom: 8 }}>
            ● Ao vivo · 25 + 26 de Abril
          </div>
          <div className="mono" style={{ color: 'var(--muted)' }}>Ed. 2026 / Turma Nº 4</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="mono" style={{ color: 'var(--muted)', marginBottom: 4 }}>Estúdio</div>
          <div className="serif" style={{ fontSize: 18, fontStyle: 'italic' }}>Romã</div>
        </div>
      </div>

      {/* main title */}
      <div style={{ marginTop: 80, marginBottom: 60 }}>
        <h1 className="serif" style={{
          fontSize: 'clamp(72px, 13vw, 220px)',
          lineHeight: 0.92,
          letterSpacing: '-0.04em',
          fontWeight: 400,
          ...fadeIn(0.2)
        }}>
          Marca<br />
          <span style={{ fontStyle: 'italic', color: 'var(--granada)' }}>Inevitável</span>
        </h1>

        <div style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          ...fadeIn(0.4)
        }}>
          <div>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 520 }}>
              Se você entrega excelência mas ainda não é percebido como deveria,{' '}
              <em className="serif" style={{ fontSize: 22, color: 'var(--ink)' }}>existe um desalinhamento estratégico.</em>
              {' '}Dois dias de imersão ao vivo com Yasmin Corbo para alinhar sua marca ao crescimento.
            </p>
          </div>

          {tweaks.showCountdown && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end'
            }}>
              <div className="mono" style={{ color: 'var(--muted)', marginBottom: 16 }}>
                A imersão começa em
              </div>
              <div style={{ display: 'flex', gap: 28 }}>
                {[
                  { v: t.d, label: 'dias' },
                  { v: t.h, label: 'horas' },
                  { v: t.m, label: 'min' },
                  { v: t.s, label: 'seg' }
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center', minWidth: 60 }}>
                    <div className="serif" style={{
                      fontSize: 56,
                      fontWeight: 400,
                      lineHeight: 1,
                      color: 'var(--ink)',
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      {String(item.v).padStart(2, '0')}
                    </div>
                    <div className="mono" style={{ color: 'var(--muted)', marginTop: 8, fontSize: 10 }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* bottom meta row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: 32,
        borderTop: '1px solid var(--hairline)',
        ...fadeIn(0.6)
      }}>
        <div className="mono" style={{ color: 'var(--muted)' }}>
          01 / Hero
        </div>
        <div style={{ display: 'flex', gap: 48 }}>
          <div>
            <div className="mono" style={{ color: 'var(--muted)', marginBottom: 4 }}>Formato</div>
            <div style={{ fontSize: 15 }}>100% ao vivo</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--muted)', marginBottom: 4 }}>Duração</div>
            <div style={{ fontSize: 15 }}>+ de 10 horas</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--muted)', marginBottom: 4 }}>Vagas</div>
            <div style={{ fontSize: 15 }}>Limitadas</div>
          </div>
        </div>
        <a href="#vaga" className="mono" style={{ color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
          Rolar <span style={{ fontSize: 16 }}>↓</span>
        </a>
      </div>
    </section>
  );
}

// ============================================================
// PITCH — "O que é a imersão"
// ============================================================
function Pitch() {
  return (
    <section id="imersao" style={{ padding: '120px 48px', borderTop: '1px solid var(--hairline)' }}>
      <SectionLabel num="02">O que é a imersão</SectionLabel>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 320px) 1fr', gap: 96, alignItems: 'start' }}>
        <div>
          <div style={{ position: 'sticky', top: 120 }}>
            <h3 className="serif" style={{ fontSize: 32, lineHeight: 1.15, fontStyle: 'italic', color: 'var(--granada)', marginBottom: 24 }}>
              Um encontro estratégico ao vivo.
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.65 }}>
              Dois dias intensivos para encontrar os pilares que sustentam marcas que crescem com clareza, vendem com consistência e sobrevivem a qualquer algoritmo.
            </p>
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <p className="serif" style={{ fontSize: 'clamp(32px, 3.4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 300, marginBottom: 96 }}>
            Marcas que <span style={{ fontStyle: 'italic' }}>não dependem</span> apenas do fundador.<br />
            Que <span style={{ fontStyle: 'italic' }}>não brigam</span> por preço.<br />
            Que <span style={{ fontStyle: 'italic' }}>não desaparecem</span> quando o mercado oscila.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, borderTop: '1px solid var(--hairline)', paddingTop: 40 }}>
            {[
              { n: '01', t: 'Visão', d: 'Clareza do que sua marca é e do que ela não é. Direção estratégica.' },
              { n: '02', t: 'Estrutura', d: 'O sistema que sustenta o crescimento quando o improviso já não basta.' },
              { n: '03', t: 'Direção', d: 'Decisões executáveis — passo a passo aplicável do método Marcas com Asas.' }
            ].map(p => (
              <div key={p.n} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="mono" style={{ color: 'var(--granada)', marginBottom: 20 }}>{p.n}</div>
                <h4 className="serif" style={{ fontSize: 28, fontStyle: 'italic', marginBottom: 12, fontWeight: 400, lineHeight: 1.1 }}>{p.t}</h4>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PARA QUEM É
// ============================================================
function ParaQuem() {
  const [hover, setHover] = useStateHero(null);
  const items = [
    { n: '01', t: 'Já atuam no mercado', d: 'Não é o começo — é o próximo nível.' },
    { n: '02', t: 'Sabem que podem estar em outro patamar', d: 'Sentem o teto invisível e querem romper.' },
    { n: '03', t: 'Não querem mais improvisar crescimento', d: 'Buscam estrutura em vez de sorte.' },
    { n: '04', t: 'Estão prontos para decisões estratégicas', d: 'Com coragem para organizar antes de escalar.' }
  ];

  return (
    <section style={{ padding: '120px 48px', background: 'var(--bg-2)', borderTop: '1px solid var(--hairline)' }}>
      <SectionLabel num="03">Para quem é</SectionLabel>

      <h2 className="serif" style={{
        fontSize: 'clamp(48px, 7vw, 96px)',
        lineHeight: 0.95,
        letterSpacing: '-0.03em',
        fontWeight: 400,
        marginBottom: 16
      }}>
        Empresários,<br />
        <span style={{ fontStyle: 'italic', color: 'var(--granada)' }}>médicos</span> e criadores
      </h2>
      <p style={{ fontSize: 18, color: 'var(--ink-soft)', maxWidth: 560, marginBottom: 80 }}>
        Profissionais que já construíram algo real — e querem transformar isso em marca.
      </p>

      <div style={{ borderTop: '1px solid var(--hairline)' }}>
        {items.map(item => (
          <div
            key={item.n}
            onMouseEnter={() => setHover(item.n)}
            onMouseLeave={() => setHover(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 2fr 60px',
              gap: 32,
              padding: '32px 0',
              borderBottom: '1px solid var(--hairline)',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.4s',
              background: hover === item.n ? 'color-mix(in srgb, var(--granada) 4%, transparent)' : 'transparent',
              paddingLeft: hover === item.n ? 16 : 0
            }}
          >
            <span className="mono" style={{ color: hover === item.n ? 'var(--granada)' : 'var(--muted)' }}>
              {item.n}
            </span>
            <h4 className="serif" style={{
              fontSize: 32,
              fontWeight: 400,
              fontStyle: hover === item.n ? 'italic' : 'normal',
              transition: 'all 0.3s',
              color: hover === item.n ? 'var(--granada)' : 'var(--ink)'
            }}>
              {item.t}
            </h4>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)' }}>
              {item.d}
            </p>
            <span style={{
              fontSize: 20,
              textAlign: 'right',
              transform: hover === item.n ? 'translateX(0)' : 'translateX(-8px)',
              opacity: hover === item.n ? 1 : 0.3,
              transition: 'all 0.3s',
              color: 'var(--granada)'
            }}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Pitch, ParaQuem });
