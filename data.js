// SNIPER DUELS — Katana market listings
// Parsed from trading channels. Each entry: { skin, quality, ft, price, type }
// quality: WW | SI | MC
// ft: boolean (FragTracker)
// type: 'sell' | 'buy'

const LISTINGS = [
  // ===== SELL listings =====

  // Crimson
  { skin: 'Crimson', quality: 'SI', ft: true,  price: 55,  type: 'sell' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 45,  type: 'sell' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 45,  type: 'sell' },
  { skin: 'Crimson', quality: 'SI', ft: true,  price: 100, type: 'sell' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 55,  type: 'sell' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 65,  type: 'sell' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 55,  type: 'sell' },
  { skin: 'Crimson', quality: 'WW', ft: true,  price: 35,  type: 'sell' },
  { skin: 'Crimson', quality: 'WW', ft: false, price: 30,  type: 'sell' },
  { skin: 'Crimson', quality: 'WW', ft: false, price: 40,  type: 'sell' },
  { skin: 'Crimson', quality: 'MC', ft: false, price: 100, type: 'sell' },
  { skin: 'Crimson', quality: 'MC', ft: false, price: 115, type: 'sell' },
  { skin: 'Crimson', quality: 'MC', ft: false, price: 100, type: 'sell' },
  { skin: 'Crimson', quality: 'MC', ft: true,  price: 130, type: 'sell' },

  // Dynasty
  { skin: 'Dynasty', quality: 'WW', ft: false, price: 30, type: 'sell' },
  { skin: 'Dynasty', quality: 'SI', ft: false, price: 45, type: 'sell' },
  { skin: 'Dynasty', quality: 'WW', ft: false, price: 40, type: 'sell' },
  { skin: 'Dynasty', quality: 'MC', ft: true,  price: 90, type: 'sell' },
  { skin: 'Dynasty', quality: 'MC', ft: false, price: 90, type: 'sell' },
  { skin: 'Dynasty', quality: 'MC', ft: false, price: 80, type: 'sell' },
  { skin: 'Dynasty', quality: 'SI', ft: false, price: 50, type: 'sell' },
  { skin: 'Dynasty', quality: 'WW', ft: false, price: 40, type: 'sell' },
  { skin: 'Dynasty', quality: 'MC', ft: false, price: 70, type: 'sell' },
  { skin: 'Dynasty', quality: 'WW', ft: false, price: 45, type: 'sell' },

  // Muramasa
  { skin: 'Muramasa', quality: 'SI', ft: false, price: 45,  type: 'sell' },
  { skin: 'Muramasa', quality: 'WW', ft: false, price: 30,  type: 'sell' },
  { skin: 'Muramasa', quality: 'MC', ft: false, price: 87,  type: 'sell' },
  { skin: 'Muramasa', quality: 'MC', ft: false, price: 90,  type: 'sell' },
  { skin: 'Muramasa', quality: 'WW', ft: false, price: 35,  type: 'sell' },
  { skin: 'Muramasa', quality: 'MC', ft: false, price: 130, type: 'sell' },
  { skin: 'Muramasa', quality: 'SI', ft: false, price: 70,  type: 'sell' },
  { skin: 'Muramasa', quality: 'WW', ft: true,  price: 50,  type: 'sell' },
  { skin: 'Muramasa', quality: 'WW', ft: false, price: 40,  type: 'sell' },
  { skin: 'Muramasa', quality: 'WW', ft: false, price: 35,  type: 'sell' },

  // Orochi
  { skin: 'Orochi', quality: 'SI', ft: false, price: 45,  type: 'sell' },
  { skin: 'Orochi', quality: 'SI', ft: true,  price: 70,  type: 'sell' },
  { skin: 'Orochi', quality: 'SI', ft: false, price: 45,  type: 'sell' },
  { skin: 'Orochi', quality: 'SI', ft: false, price: 40,  type: 'sell' },
  { skin: 'Orochi', quality: 'MC', ft: false, price: 75,  type: 'sell' },
  { skin: 'Orochi', quality: 'MC', ft: true,  price: 100, type: 'sell' },
  { skin: 'Orochi', quality: 'MC', ft: false, price: 85,  type: 'sell' },
  { skin: 'Orochi', quality: 'SI', ft: false, price: 55,  type: 'sell' },
  { skin: 'Orochi', quality: 'SI', ft: false, price: 55,  type: 'sell' },
  { skin: 'Orochi', quality: 'SI', ft: false, price: 40,  type: 'sell' },
  { skin: 'Orochi', quality: 'MC', ft: false, price: 75,  type: 'sell' },

  // Adurite
  { skin: 'Adurite', quality: 'WW', ft: false, price: 40,  type: 'sell' },
  { skin: 'Adurite', quality: 'MC', ft: false, price: 140, type: 'sell' },
  { skin: 'Adurite', quality: 'MC', ft: false, price: 140, type: 'sell' },
  { skin: 'Adurite', quality: 'MC', ft: false, price: 125, type: 'sell' },
  { skin: 'Adurite', quality: 'MC', ft: false, price: 110, type: 'sell' },

  // Blacksteel
  { skin: 'Blacksteel', quality: 'SI', ft: false, price: 50, type: 'sell' },
  { skin: 'Blacksteel', quality: 'MC', ft: false, price: 85, type: 'sell' },
  { skin: 'Blacksteel', quality: 'SI', ft: false, price: 60, type: 'sell' },

  // OG Bluesteel
  { skin: 'OG Bluesteel', quality: 'MC', ft: false, price: 75,  type: 'sell' },
  { skin: 'OG Bluesteel', quality: 'MC', ft: true,  price: 100, type: 'sell' },

  // Bluesteel
  { skin: 'Bluesteel', quality: 'MC', ft: false, price: 75, type: 'sell' },
  { skin: 'Bluesteel', quality: 'SI', ft: true,  price: 60, type: 'sell' },

  // Bombastic
  { skin: 'Bombastic', quality: 'MC', ft: true,  price: 100, type: 'sell' },
  { skin: 'Bombastic', quality: 'MC', ft: false, price: 70,  type: 'sell' },
  { skin: 'Bombastic', quality: 'MC', ft: false, price: 65,  type: 'sell' },
  { skin: 'Bombastic', quality: 'WW', ft: false, price: 35,  type: 'sell' },

  // Cherry
  { skin: 'Cherry', quality: 'WW', ft: true,  price: 45, type: 'sell' },
  { skin: 'Cherry', quality: 'WW', ft: true,  price: 45, type: 'sell' },
  { skin: 'Cherry', quality: 'WW', ft: true,  price: 45, type: 'sell' },
  { skin: 'Cherry', quality: 'WW', ft: true,  price: 40, type: 'sell' },
  { skin: 'Cherry', quality: 'SI', ft: false, price: 45, type: 'sell' },

  // Cookie
  { skin: 'Cookie', quality: 'MC', ft: true, price: 75, type: 'sell' },

  // Black Iron
  { skin: 'Black Iron', quality: 'WW', ft: false, price: 40, type: 'sell' },

  // Malachite
  { skin: 'Malachite', quality: 'MC', ft: false, price: 150, type: 'sell' },
  { skin: 'Malachite', quality: 'SI', ft: false, price: 90,  type: 'sell' },

  // Peppermint
  { skin: 'Peppermint', quality: 'SI', ft: false, price: 50, type: 'sell' },

  // Shogun
  { skin: 'Shogun', quality: 'MC', ft: true,  price: 60, type: 'sell' },
  { skin: 'Shogun', quality: 'MC', ft: true,  price: 65, type: 'sell' },
  { skin: 'Shogun', quality: 'MC', ft: false, price: 50, type: 'sell' },

  // Vanilla
  { skin: 'Vanilla', quality: 'MC', ft: false, price: 35, type: 'sell' },
  { skin: 'Vanilla', quality: 'MC', ft: true,  price: 50, type: 'sell' },
  { skin: 'Vanilla', quality: 'MC', ft: false, price: 45, type: 'sell' },
  { skin: 'Vanilla', quality: 'MC', ft: true,  price: 65, type: 'sell' },
  { skin: 'Vanilla', quality: 'MC', ft: false, price: 45, type: 'sell' },

  // Wanwood
  { skin: 'Wanwood', quality: 'WW', ft: false, price: 35, type: 'sell' },
  { skin: 'Wanwood', quality: 'WW', ft: false, price: 35, type: 'sell' },
  { skin: 'Wanwood', quality: 'SI', ft: false, price: 45, type: 'sell' },
  { skin: 'Wanwood', quality: 'MC', ft: false, price: 65, type: 'sell' },
  { skin: 'Wanwood', quality: 'MC', ft: true,  price: 130, type: 'sell' },
  { skin: 'Wanwood', quality: 'MC', ft: true,  price: 130, type: 'sell' },
  { skin: 'Wanwood', quality: 'SI', ft: false, price: 55, type: 'sell' },
  { skin: 'Wanwood', quality: 'SI', ft: false, price: 45, type: 'sell' },

  // ===== BUY listings (quicksell / buyer rates) =====

  // Crimson
  { skin: 'Crimson', quality: 'MC', ft: false, price: 110, type: 'buy' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 65,  type: 'buy' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 65,  type: 'buy' },
  { skin: 'Crimson', quality: 'SI', ft: false, price: 65,  type: 'buy' },

  // Malachite
  { skin: 'Malachite', quality: 'SI', ft: false, price: 65, type: 'buy' },

  // Black Iron
  { skin: 'Black Iron', quality: 'SI', ft: false, price: 45, type: 'buy' },

  // Orochi
  { skin: 'Orochi', quality: 'SI', ft: false, price: 45, type: 'buy' },
  { skin: 'Orochi', quality: 'SI', ft: false, price: 45, type: 'buy' },

  // From buying lists (knife buyer rates 70-80%)
  // Cookie (Polygraph robux buying)
  { skin: 'Cookie',     quality: 'MC', ft: true,  price: 75, type: 'buy' },
  { skin: 'Vanilla',    quality: 'MC', ft: true,  price: 50, type: 'buy' },
  { skin: 'Wanwood',    quality: 'WW', ft: false, price: 35, type: 'buy' },
  { skin: 'Crimson',    quality: 'WW', ft: false, price: 30, type: 'buy' },
  { skin: 'Black Iron', quality: 'WW', ft: false, price: 40, type: 'buy' },
];

// Canonical list of skins (used to render cards even when one filter has 0 matches)
const SKINS = [
  'Adurite',
  'Black Iron',
  'Blacksteel',
  'Bluesteel',
  'OG Bluesteel',
  'Bombastic',
  'Cherry',
  'Cookie',
  'Crimson',
  'Dynasty',
  'Malachite',
  'Muramasa',
  'Orochi',
  'Peppermint',
  'Shogun',
  'Vanilla',
  'Wanwood',
];
