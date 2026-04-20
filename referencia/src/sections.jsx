const { useState: useStateP } = React;

// ============================================================
// PLANOS
// ============================================================
function Planos() {
  const [hover, setHover] = useStateP(null);

  return (
    <section id="planos" style={{ padding: '120px 48px', borderTop: '1px solid var(--hairline)' }}>
      <SectionLabel num="04">Planos de acesso</SectionLabel>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch', marginTop: 48 }}>

        {/* PLANO 1 — AO VIVO */}
        <div
          onMouseEnter={() => setHover('live')}
          onMouseLeave={() => setHover(null)}
          style={{
            padding: '56px 48px',
            borderTop: '1px solid var(--hairline)',
            borderBottom: '1px solid var(--hairline)',
            borderRight: '1px solid var(--hairline)',
            position: 'relative',
            background: hover === 'live' ? 'color-mix(in srgb, var(--granada) 3%, var(--bg))' : 'var(--bg)',
            transition: 'background 0.4s'
          }}
        >
          <div style={{ marginBottom: 56 }}>
            <div className="mono" style={{ color: 'var(--muted)', marginBottom: 8 }}>Plano 01</div>
            <h3 className="serif" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.1, whiteSpace: 'nowrap' }}>Acesso ao Vivo</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
            <span className="serif" style={{ fontSize: 24, color: 'var(--muted)', lineHeight: 1 }}>R$</span>
            <span className="serif" style={{ fontSize: 88, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.03em' }}>35</span>
          </div>
          <p className="mono" style={{ color: 'var(--muted)', marginBottom: 40 }}>Pagamento único</p>

          <ul style={{ listStyle: 'none', marginBottom: 40 }}>
            {[
              '2 dias de imersão intensa',
              'Método direto ao ponto',
              'Aulas 100% ao vivo',
              'Passo a passo aplicável',
              '+ de 10h de conteúdo transformador'
            ].map((f, i) => (
              <li key={i} style={{
                padding: '16px 0',
                borderBottom: '1px solid var(--hairline)',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                fontSize: 15
              }}>
                <span style={{ color: 'var(--granada)', fontSize: 12 }}>◆</span>
                {f}
              </li>
            ))}
          </ul>

          <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 32 }}>
            Este acesso não inclui gravações.
          </p>

          <a href="#" style={{
            display: 'block',
            padding: '20px 32px',
            border: '1px solid var(--ink)',
            textAlign: 'center',
            borderRadius: 4,
            fontSize: 14,
            letterSpacing: '0.04em',
            transition: 'all 0.3s'
          }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)'; }}
             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}>
            Quero garantir minha vaga
          </a>
        </div>

        {/* PLANO 2 — VIP */}
        <div
          id="vaga"
          onMouseEnter={() => setHover('vip')}
          onMouseLeave={() => setHover(null)}
          style={{
            padding: '56px 48px',
            background: 'var(--granada)',
            color: 'var(--bg)',
            position: 'relative',
            borderTop: '1px solid var(--granada)',
            borderBottom: '1px solid var(--granada)',
            transform: hover === 'vip' ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            boxShadow: hover === 'vip' ? '0 24px 60px color-mix(in srgb, var(--granada) 40%, transparent)' : 'none'
          }}
        >
          {/* badge */}
          <div style={{
            position: 'absolute',
            top: 24,
            right: 24,
            padding: '6px 12px',
            border: '1px solid color-mix(in srgb, var(--bg) 50%, transparent)',
            borderRadius: 999,
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            ★ Recomendado
          </div>

          <div style={{ marginBottom: 56 }}>
            <div className="mono" style={{ color: 'color-mix(in srgb, var(--bg) 70%, transparent)', marginBottom: 8 }}>Plano 02</div>
            <h3 className="serif" style={{ fontSize: 36, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1, whiteSpace: 'nowrap' }}>Acesso VIP</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
            <span className="serif" style={{ fontSize: 24, opacity: 0.7, lineHeight: 1 }}>R$</span>
            <span className="serif" style={{ fontSize: 88, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.03em' }}>130</span>
          </div>
          <p className="mono" style={{ color: 'color-mix(in srgb, var(--bg) 70%, transparent)', marginBottom: 40 }}>Pagamento único</p>

          <ul style={{ listStyle: 'none', marginBottom: 40 }}>
            {[
              'Acesso completo à imersão ao vivo',
              'Gravação completa das aulas',
              'Encontro em grupo com Yasmin',
              'Conteúdos exclusivos do Clube Marcas com Asas',
              'Acesso à Escola de CEO\'s'
            ].map((f, i) => (
              <li key={i} style={{
                padding: '16px 0',
                borderBottom: '1px solid color-mix(in srgb, var(--bg) 20%, transparent)',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                fontSize: 15
              }}>
                <span style={{ color: 'var(--gold)', fontSize: 12 }}>◆</span>
                {f}
              </li>
            ))}
          </ul>

          <p style={{ fontSize: 13, opacity: 0.7, fontStyle: 'italic', marginBottom: 32 }}>
            Inclui tudo do Acesso ao Vivo + extras exclusivos.
          </p>

          <a href="#" style={{
            display: 'block',
            padding: '20px 32px',
            background: 'var(--bg)',
            color: 'var(--ink)',
            textAlign: 'center',
            borderRadius: 4,
            fontSize: 14,
            letterSpacing: '0.04em',
            fontWeight: 500,
            transition: 'all 0.3s'
          }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)'; }}
             onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.color = 'var(--ink)'; }}>
            Quero garantir minha vaga VIP →
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// YASMIN BIO
// ============================================================
function Yasmin() {
  return (
    <section id="yasmin" style={{ padding: '120px 48px', background: 'var(--bg-2)', borderTop: '1px solid var(--hairline)' }}>
      <SectionLabel num="05">Quem conduz</SectionLabel>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 80, alignItems: 'start' }}>
        {/* Placeholder portrait */}
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{
            aspectRatio: '3/4',
            background: 'linear-gradient(135deg, var(--granada) 0%, var(--granada-deep) 100%)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2
          }}>
            {/* diagonal stripes placeholder */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'repeating-linear-gradient(45deg, color-mix(in srgb, var(--bg) 8%, transparent) 0 2px, transparent 2px 14px)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              color: 'var(--bg)'
            }}>
              <div className="mono" style={{ opacity: 0.6, marginBottom: 8, fontSize: 10 }}>[ retrato · placeholder ]</div>
              <div className="serif" style={{ fontSize: 28, fontStyle: 'italic' }}>Yasmin Corbo</div>
            </div>
          </div>
          <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['ESPM', 'Univ. Hebraica', 'Est. Romã', '+150 marcas'].map(t => (
              <span key={t} style={{
                padding: '6px 12px',
                border: '1px solid var(--hairline)',
                borderRadius: 999,
                fontSize: 11,
                color: 'var(--ink-soft)',
                fontFamily: 'JetBrains Mono, monospace'
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="serif" style={{
            fontSize: 'clamp(40px, 5vw, 72px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            fontWeight: 300,
            marginBottom: 40
          }}>
            <span style={{ fontStyle: 'italic' }}>Diretora de arte</span> por vocação,<br />
            estrategista de essência.
          </h2>

          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 24 }}>
            Yasmin conduziu processos estratégicos e criativos em <strong style={{ color: 'var(--ink)' }}>mais de 150 marcas</strong> no seu estúdio, <em className="serif" style={{ fontSize: 19 }}>a Romã</em> — hoje referência nacional em Growth Branding.
          </p>

          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 24 }}>
            Estrategista de marca há quase uma década. Publicitária desde 2015, especialista em inovação pela Universidade Hebraica de Jerusalém e mestre em Economia Criativa pela ESPM.
          </p>

          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 48 }}>
            Cria marcas que crescem com clareza, vendem com consistência e sobrevivem a qualquer algoritmo — unindo estética, posicionamento e inteligência de negócio através do método Marcas com Asas.
          </p>

          <div style={{
            padding: '32px 0',
            borderTop: '1px solid var(--hairline)',
            borderBottom: '1px solid var(--hairline)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32
          }}>
            <div>
              <div className="serif" style={{ fontSize: 48, fontWeight: 300, color: 'var(--granada)', lineHeight: 1 }}>150+</div>
              <div className="mono" style={{ color: 'var(--muted)', marginTop: 8 }}>Marcas conduzidas</div>
            </div>
            <div>
              <div className="serif" style={{ fontSize: 48, fontWeight: 300, color: 'var(--granada)', lineHeight: 1 }}>09</div>
              <div className="mono" style={{ color: 'var(--muted)', marginTop: 8 }}>Anos de estratégia</div>
            </div>
            <div>
              <div className="serif" style={{ fontSize: 48, fontWeight: 300, color: 'var(--granada)', lineHeight: 1 }}>R$MM</div>
              <div className="mono" style={{ color: 'var(--muted)', marginTop: 8 }}>Gerados em marcas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA FINAL
// ============================================================
function FinalCTA() {
  return (
    <section style={{
      padding: '160px 48px',
      borderTop: '1px solid var(--hairline)',
      textAlign: 'center',
      position: 'relative'
    }}>
      <SectionLabel num="06">A decisão</SectionLabel>

      <h2 className="serif" style={{
        fontSize: 'clamp(48px, 8vw, 120px)',
        lineHeight: 0.95,
        letterSpacing: '-0.03em',
        fontWeight: 300,
        maxWidth: 1200,
        margin: '0 auto 48px',
        textWrap: 'balance'
      }}>
        Você pode continuar tentando crescer <span style={{ fontStyle: 'italic', color: 'var(--muted)' }}>no improviso.</span>
        <br />
        Ou pode estruturar sua marca para se tornar{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--granada)' }}>inevitável.</span>
      </h2>

      <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 520, margin: '0 auto 56px', fontStyle: 'italic' }}>
        As vagas são limitadas. O foco é ajudar a criar uma marca que cresce, se diferencia e permanece.
      </p>

      <a href="#vaga" style={{
        display: 'inline-block',
        padding: '24px 48px',
        background: 'var(--granada)',
        color: 'var(--bg)',
        borderRadius: 999,
        fontSize: 15,
        letterSpacing: '0.03em',
        transition: 'all 0.3s'
      }} onMouseEnter={e => e.currentTarget.style.background = 'var(--granada-deep)'}
         onMouseLeave={e => e.currentTarget.style.background = 'var(--granada)'}>
        Quero garantir minha vaga →
      </a>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer style={{ padding: '48px', borderTop: '1px solid var(--hairline)', background: 'var(--bg-2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div className="mono" style={{ color: 'var(--muted)' }}>
          © 2026 — Clube Marcas com Asas
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" className="mono" style={{ color: 'var(--ink-soft)' }}>Termos</a>
          <a href="#" className="mono" style={{ color: 'var(--ink-soft)' }}>Privacidade</a>
          <a href="#" className="mono" style={{ color: 'var(--ink-soft)' }}>Contato</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Planos, Yasmin, FinalCTA, Footer });
