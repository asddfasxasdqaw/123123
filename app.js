// SNIPER DUELS — Katana price table

const QUALITY_LABEL = {
  ALL: 'Any',
  WW: 'WW',
  SI: 'SI',
  MC: 'MC',
};
const QUALITY_HINT = {
  ALL: 'all qualities',
  WW: 'worn',
  SI: 'standard',
  MC: 'mint',
};
const FT_LABEL = {
  ANY: 'Any FT',
  YES: 'FT',
  NO:  'no FT',
};
const FT_HINT = {
  ANY: 'with or without',
  YES: 'with FragTracker',
  NO:  'no FragTracker',
};

const state = {
  mode: 'sell',          // 'sell' | 'buy'
  search: '',
  perCard: {},           // skin -> { quality: 'ALL'|'WW'|'SI'|'MC', ft: 'ANY'|'YES'|'NO' }
};

function getCardState(skin) {
  if (!state.perCard[skin]) {
    state.perCard[skin] = { quality: 'ALL', ft: 'ANY' };
  }
  return state.perCard[skin];
}

function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function searchMatches(skin, query) {
  if (!query) return true;
  const q = normalize(query);
  if (!q) return true;
  const haystack = normalize(skin + ' katana');
  // tokenize query, every token must appear in haystack (order-independent)
  const tokens = q.split(' ').filter(Boolean);
  return tokens.every(t => haystack.includes(t));
}

function aggregate(skin) {
  const cs = getCardState(skin);
  const matches = LISTINGS.filter(L =>
    L.skin === skin &&
    L.type === state.mode &&
    (cs.quality === 'ALL' || L.quality === cs.quality) &&
    (cs.ft === 'ANY' || (cs.ft === 'YES' ? L.ft : !L.ft))
  );
  if (matches.length === 0) return null;
  const prices = matches.map(m => m.price);
  const sum = prices.reduce((a,b) => a+b, 0);
  return {
    avg: Math.round(sum / prices.length),
    min: Math.min(...prices),
    max: Math.max(...prices),
    n:   prices.length,
  };
}

// --- DOM rendering ---

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'data') Object.entries(v).forEach(([dk, dv]) => node.dataset[dk] = dv);
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v !== false && v != null) node.setAttribute(k, v);
    }
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

function caretSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 12 12');
  svg.setAttribute('class', 'caret');
  svg.innerHTML = '<path d="M2.5 4.5 L6 8 L9.5 4.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  return svg;
}

function buildChip(skin, kind, value, options) {
  const labelMap = kind === 'quality' ? QUALITY_LABEL : FT_LABEL;
  const hintMap  = kind === 'quality' ? QUALITY_HINT  : FT_HINT;

  const labelText = value === 'ALL' || value === 'ANY' ? labelMap[value] : labelMap[value];

  const chip = el('div', {
    class: 'chip',
    data: { kind, value },
  }, labelText, caretSVG());

  const menu = el('div', { class: 'menu' });
  for (const opt of options) {
    const btn = el('button', {
      class: opt === value ? 'active' : '',
      onClick: (e) => {
        e.stopPropagation();
        getCardState(skin)[kind] = opt;
        closeAllMenus();
        render();
      },
    }, labelMap[opt], el('span', { class: 'hint' }, hintMap[opt]));
    menu.appendChild(btn);
  }
  chip.appendChild(menu);
  chip.addEventListener('click', (e) => {
    e.stopPropagation();
    const wasOpen = menu.classList.contains('open');
    closeAllMenus();
    if (!wasOpen) menu.classList.add('open');
  });
  return chip;
}

function closeAllMenus() {
  document.querySelectorAll('.menu.open').forEach(m => m.classList.remove('open'));
}

function buildCard(skin) {
  const cs = getCardState(skin);
  const agg = aggregate(skin);

  const qualityChip = buildChip(skin, 'quality', cs.quality, ['ALL', 'WW', 'SI', 'MC']);
  const ftChip = buildChip(skin, 'ft', cs.ft, ['ANY', 'YES', 'NO']);

  const head = el('div', { class: 'card-head' },
    el('span', { class: 'skin' }, skin),
    qualityChip,
    ftChip,
    el('span', { class: 'kat' }, 'Katana'),
  );

  let priceBlock;
  if (agg) {
    priceBlock = el('div', { class: 'price' },
      el('div', null,
        el('div', { class: 'price-label' }, state.mode === 'sell' ? 'avg sell' : 'avg buy'),
        el('div', { class: `price-main ${state.mode}` },
          el('span', { class: 'currency' }, '$'),
          String(agg.avg)
        ),
      ),
      el('div', { class: 'price-meta' },
        el('span', null, `${agg.n} listing${agg.n === 1 ? '' : 's'}`),
      ),
      el('div', { class: 'tooltip' },
        el('div', { class: 'row' }, el('span', { class: 'k' }, 'min'), el('span', { class: 'v' }, '$' + agg.min)),
        el('div', { class: 'row' }, el('span', { class: 'k' }, 'avg'), el('span', { class: 'v' }, '$' + agg.avg)),
        el('div', { class: 'row' }, el('span', { class: 'k' }, 'max'), el('span', { class: 'v' }, '$' + agg.max)),
        el('div', { class: 'row' }, el('span', { class: 'k' }, 'samples'), el('span', { class: 'v' }, String(agg.n))),
      ),
    );
  } else {
    priceBlock = el('div', { class: 'price' },
      el('div', null,
        el('div', { class: 'price-main' }, 'no data'),
      ),
      el('div', { class: 'price-meta' },
        el('span', null, 'try Quality: ALL'),
      ),
    );
  }

  return el('div', { class: 'card' + (agg ? '' : ' empty') }, head, priceBlock);
}

function render() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  const visible = SKINS.filter(s => searchMatches(s, state.search));
  if (visible.length === 0) {
    grid.appendChild(el('div', { class: 'no-results' },
      el('h3', null, 'Nothing found'),
      el('div', null, 'Try just "katana" or another skin name.'),
    ));
    return;
  }
  // Sort: skins with available data for current mode first, then alphabetical
  visible.sort((a, b) => {
    const aHas = LISTINGS.some(L => L.skin === a && L.type === state.mode) ? 0 : 1;
    const bHas = LISTINGS.some(L => L.skin === b && L.type === state.mode) ? 0 : 1;
    if (aHas !== bHas) return aHas - bHas;
    return a.localeCompare(b);
  });
  for (const skin of visible) grid.appendChild(buildCard(skin));
}

// --- Wire up ---

function init() {
  // Mode toggle
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.mode = btn.dataset.mode;
      document.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('active', b === btn));
      render();
    });
  });

  // Search
  const search = document.getElementById('search');
  search.addEventListener('input', () => {
    state.search = search.value;
    render();
  });

  // Click outside closes menus
  document.addEventListener('click', closeAllMenus);

  render();
}

document.addEventListener('DOMContentLoaded', init);
