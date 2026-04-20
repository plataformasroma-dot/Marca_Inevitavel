import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';

import { pageAssets, withBasePath } from '../src/lib/asset-paths.js';
import { eventDateLabel, marqueeDateLabel, standardTicketPrice } from '../src/lib/landing-content.js';

test('withBasePath aplica BASE_URL sem quebrar os caminhos de asset', () => {
  assert.equal(withBasePath('/', 'fonts/Aileron-Bold.ttf'), '/fonts/Aileron-Bold.ttf');
  assert.equal(
    withBasePath('/pagina-roma/', 'fonts/Aileron-Bold.ttf'),
    '/pagina-roma/fonts/Aileron-Bold.ttf'
  );
  assert.equal(
    withBasePath('/pagina-roma', '/assets/marca-inevitavel-hero.webp'),
    '/pagina-roma/assets/marca-inevitavel-hero.webp'
  );
});

test('os assets publicados da landing existem dentro de public', async () => {
  await Promise.all([
    access(`public/${pageAssets.hero}`),
    access(`public/${pageAssets.portrait}`),
    access(`public/${pageAssets.fontEditorialRegular}`),
    access(`public/${pageAssets.fontEditorialItalic}`),
    access(`public/${pageAssets.fontAileronBold}`)
  ]);
});

test('a copy comercial expõe a data e o valor corretos', () => {
  assert.equal(standardTicketPrice, '35');
  assert.equal(eventDateLabel, '25 e 26 de abril');
  assert.equal(marqueeDateLabel, '25 e 26 de abril');
});
