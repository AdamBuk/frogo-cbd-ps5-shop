import cbdFlowersImg from '../assets/images/cbd-flowers.jpg';
import vapesImg from '../assets/images/vapes.jpg';
import jointsImg from '../assets/images/joints.jpg';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  specs: string;
  price: string;
  image: string;
  badges: string[];
  effects: string[];
}

export interface Category {
  id: 'flowers' | 'vapes' | 'joints' | 'ps5-zone';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentBadge: string;
  productsCount: string;
  highlights: string[];
  featuredItems: ProductItem[];
}

// Authentic real photos from the actual store & gaming lounge
export const REAL_IMAGES = {
  storeExterior: '/images/store-exterior.webp',
  ps5Room: '/images/ps5-room.webp',
  ps5RoomAmbient: '/images/ps5-room-ambient.webp',
  storeInterior: '/images/store-interior.webp',
  storeCounter: '/images/store-counter.webp',
  storeHoursSign: '/images/store-hours-sign.webp',
};

// Curated high-resolution boutique placeholders
export const LOCAL_IMAGES = {
  flowers: cbdFlowersImg,
  vapes: vapesImg,
  joints: jointsImg,
  ps5Lounge: REAL_IMAGES.ps5Room,
};

// Accurate Unsplash fallback URLs (curated high-res cannabis, authentic vapes, pre-rolls, PlayStation 5)
export const UNSPLASH_FALLBACKS = {
  flowers: 'https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=1200&q=80',
  flowersAlt1: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=1200&q=80',
  flowersAlt2: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
  vapes: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
  vapesAlt1: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
  vapesAlt2: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80',
  joints: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80',
  jointsAlt1: 'https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=1200&q=80',
  ps5: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80',
  ps5Alt1: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
  ps5Alt2: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
};

export const CATEGORIES: Category[] = [
  {
    id: 'flowers',
    title: 'CBD Květy',
    subtitle: 'Prémiové indoor & greenhouse palice',
    description: 'Aromatické paličky pěstované v certifikovaných prostorech bez chemie. Dokonalý terpenový profil, vysoké CBD a nezaměnitelný vzhled i aroma.',
    image: cbdFlowersImg,
    accentBadge: '100% Organické',
    productsCount: '15+ odrůd na skladě',
    highlights: ['THC < 1% (100% v limitu ČR)', 'Bohatý terpenový profil', 'Ručně trimované indoor paličky'],
    featuredItems: [
      {
        id: 'f1',
        name: 'Frogo Red Amnesia',
        category: 'CBD Květy',
        tagline: 'Svěží citrusové aroma s tóny zralé borovice',
        description: 'Vlajková loď obchodu. Intenzivní aroma, husté fialovo-zelené palice plné třpytivé pryskyřice a rychlý nástup relaxace bez těžké hlavy.',
        specs: 'CBD 19% | THC 0.7% | Terpeny: Limonen & Myrcen',
        price: 'od 199 Kč / g',
        image: cbdFlowersImg,
        badges: ['Bestseller', 'Indoor Ultra-Purity'],
        effects: ['Chill', 'Anti-stres', 'Čistá mysl']
      },
      {
        id: 'f2',
        name: 'Dark Cherry Kush',
        category: 'CBD Květy',
        tagline: 'Sladká vůně lesních třešní a zemitého dřeva',
        description: 'Tmavé, masivní květy s přirozeně vysokým podílem kanabinoidů. Dokonalá volba k večernímu gamingu nebo vypnutí po náročném dni.',
        specs: 'CBD 21% | THC 0.8% | Terpeny: Karyofylen',
        price: 'od 219 Kč / g',
        image: UNSPLASH_FALLBACKS.flowersAlt1,
        badges: ['High CBD', 'Top Výběr'],
        effects: ['Hluboké uvolnění', 'Svalová regenerace']
      },
      {
        id: 'f3',
        name: 'Frogo Lemon Haze',
        category: 'CBD Květy',
        tagline: 'Kyselá citrónová exploze s bylinným nádechem',
        description: 'Svěží odrůda povzbuzující náladu a kreativitu. Ideální pro denní relax a posezení s přáteli.',
        specs: 'CBD 16% | THC 0.5% | Terpeny: Terpinolen',
        price: 'od 189 Kč / g',
        image: UNSPLASH_FALLBACKS.flowersAlt2,
        badges: ['Fresh Scent', 'Greenhouse'],
        effects: ['Pozitivní flow', 'Soustředění']
      }
    ]
  },
  {
    id: 'vapes',
    title: 'Vapes',
    subtitle: 'Diskrétní vaporizéry & cartridge s terpeny',
    description: 'Moderní vaping bez zápachu a spalin. Pouze čistý destilát a živé botanické terpeny s okamžitým nástupem účinku bez kompromisů.',
    image: vapesImg,
    accentBadge: 'Okamžitý nástup',
    productsCount: 'Pera, cartridge i baterie',
    highlights: ['0% PG / 0% VG / 0% MCT oleje', 'Keramická CCELL technologie', 'Diskrétní design do kapsy'],
    featuredItems: [
      {
        id: 'v1',
        name: 'Frogo Stealth Pod Kit',
        category: 'Vapes',
        tagline: 'Matně černé hliníkové pero s magnetickým dokem',
        description: 'Kompaktní vaporizér pro cartridge se závitem 510 i magnetické pody. Haptická odezva při potahu a rychlé USB-C nabíjení.',
        specs: '380 mAh baterie | Hliníkové tělo | USB-C',
        price: '490 Kč',
        image: vapesImg,
        badges: ['Matný Černý Design', 'USB-C'],
        effects: ['Rychlý chill', 'Diskrétnost']
      },
      {
        id: 'v2',
        name: 'Cartridge Granddaddy Purple (1ml)',
        category: 'Vapes',
        tagline: '75% CBD destilát s příchutí zralého hroznového vína',
        description: 'Špičková keramická cartridge plná prémiového extraktu obohaceného o terpenový profil legendární odrůdy Granddaddy Purple.',
        specs: '1.0 ml (~350 potahů) | 750 mg kanabinoidů',
        price: '690 Kč',
        image: UNSPLASH_FALLBACKS.vapesAlt1,
        badges: ['75% CBD', 'Živé terpeny'],
        effects: ['Okamžitá úleva', 'Večerní relax']
      },
      {
        id: 'v3',
        name: 'Cartridge Gelato Red Edition (1ml)',
        category: 'Vapes',
        tagline: 'Sladce krémový profil s citrusovým zakončením',
        description: 'Extrémně oblíbená cartridge s plnou chutí a bez dráždivých příměsí. Čistý konopný extrakt.',
        specs: '1.0 ml | 70% CBD | CCELL keramika',
        price: '690 Kč',
        image: UNSPLASH_FALLBACKS.vapes,
        badges: ['Limitovaná edice'],
        effects: ['Euforie', 'Zklidnění mysli']
      }
    ]
  },
  {
    id: 'joints',
    title: 'Joints',
    subtitle: 'Ručně balené pre-rolls z čistých palic',
    description: 'Žádný prach ani ořezy ze stonků. Naše pre-rolled joints obsahují výhradně prémiové drcené indoor CBD květy v nebělených bio konopných papírcích.',
    image: jointsImg,
    accentBadge: 'Ready to Smoke',
    productsCount: 'Single & Multi packy',
    highlights: ['100% čisté květy (žádný shake/trim)', 'Nebělené RAW konopné papírky', 'Vzduchotěsné skleněné tuby'],
    featuredItems: [
      {
        id: 'j1',
        name: 'Frogo Red King Joint (1.2g)',
        category: 'Joints',
        tagline: 'Královský pre-roll z odrůdy Frogo Red Amnesia',
        description: 'Dokonale ubalený kužel v ochranné skleněné tubě, která chrání čerstvost a terpeny. Připraven k okamžitému zapálení.',
        specs: '1.2 g čistých květů | Keramický filtr | Skleněná tuba',
        price: '199 Kč',
        image: jointsImg,
        badges: ['Bestseller', 'Glass Tube'],
        effects: ['Silný relax', 'Okamžitý vibe']
      },
      {
        id: 'j2',
        name: 'Night Chill Joint (1.0g)',
        category: 'Joints',
        tagline: 'Kush směs pro absolutní vypnutí',
        description: 'Těžší večerní blend s vysokým podílem myrcenu a CBD pro dokonalé uvolnění celého těla po tréninku nebo hraní.',
        specs: '1.0 g | Nebělený papír | Aktivní uhlíkový filtr',
        price: '179 Kč',
        image: UNSPLASH_FALLBACKS.joints,
        badges: ['Aktivní uhlí'],
        effects: ['Spánek', 'Svalová úleva']
      },
      {
        id: 'j3',
        name: 'Frogo Party Pack (3x 0.8g)',
        category: 'Joints',
        tagline: 'Tři pre-rolly různých odrůd pro tebe a partu',
        description: 'Kovová plechová krabička obsahující 3 různé profily: Amnesia, Kush a Berry. Skvělé řešení na víkendový chill.',
        specs: '3x 0.8 g | Stylová černá plechovka',
        price: '449 Kč',
        image: jointsImg,
        badges: ['Výhodný set'],
        effects: ['Socializing', 'Dobrá nálada']
      }
    ]
  },
  {
    id: 'ps5-zone',
    title: 'PS5 Chill Zone',
    subtitle: 'Privátní gaming lounge & PlayStation 5 zážitek',
    description: 'Rezervuj si privátní chill-room v centru Hradce. Velká 4K OLED obrazovka, DualSense ovladače, prémiové ozvučení, luxusní gauč a naprosté soukromí pro tebe a tvou partu.',
    image: REAL_IMAGES.ps5Room,
    accentBadge: 'Private Room',
    productsCount: 'Konzole, hry & nápoje',
    highlights: ['PlayStation 5 + 4K 120Hz OLED TV', 'DualSense ovladače (až pro 4 hráče)', 'Top tituly: FC 25, Tekken 8, MK1, GTA, GT7'],
    featuredItems: [
      {
        id: 'p1',
        name: 'PS5 Quick Session (1 hodina)',
        category: 'PS5 Chill Zone',
        tagline: 'Rychlá herní pauza během dne nebo po práci',
        description: 'Privátní chill zóna na 60 minut pro 1–4 osoby. Plný přístup ke všem nainstalovaným hrám a soundbaru. Možnost dokoupit chlazené nápoje a CBD občerstvení.',
        specs: '60 minut | až 4 hráči | Privátní místnost',
        price: 'Rezervace slotu',
        image: REAL_IMAGES.ps5Room,
        badges: ['Reálný setup', 'Pro 1-4 hráče'],
        effects: ['Gaming', 'Rychlý chill']
      },
      {
        id: 'p2',
        name: 'PS5 Pro Chill Slot (2 hodiny)',
        category: 'PS5 Chill Zone',
        tagline: 'Nejpopulárnější volba na turnaj s kámoši',
        description: 'Dvě hodiny intenzivního gamingu a relaxu bez rušení. Ideální na turnaj ve fotbálku FC 25, bojovkách Tekken 8 nebo nočních jízdách v Gran Turismo 7.',
        specs: '120 minut | až 4 hráči | Privátní chill room',
        price: 'Rezervace slotu',
        image: REAL_IMAGES.ps5RoomAmbient,
        badges: ['Ambient Lounge', 'Pro 1-4 hráče'],
        effects: ['Turnaj', 'Maximální chill']
      },
      {
        id: 'p3',
        name: 'VIP Night Gaming Pass (3 hodiny)',
        category: 'PS5 Chill Zone',
        tagline: 'Celý večer pro tebe a tvůj squad',
        description: 'Exkluzivní tříhodinový blok s prioritní rezervací. Maximální soukromí, ambientní červené podsvícení místnosti a dokonalé zázemí.',
        specs: '180 minut | Neomezené přepínání her | VIP komfort',
        price: 'Rezervace slotu',
        image: REAL_IMAGES.ps5Room,
        badges: ['VIP balíček', 'Večerní slot'],
        effects: ['Squad night', 'Legendární zážitek']
      }
    ]
  }
];

export const STORE_INFO = {
  name: 'Frogo CBD Shop & PS5 chill-room',
  shortName: 'Frogo CBD & PS5',
  tagline: 'Prémiové CBD & Private PS5 Chill Zone v centru Hradce Králové. Vstup 18+.',
  address: {
    street: 'Švehlova 633/10',
    landmark: 'Masarykovo náměstí',
    zipCity: '500 02 Hradec Králové',
    region: 'Královéhradecký kraj, Česká republika',
    note: 'Přímo u Masarykova náměstí, rychlý přístup z pěší zóny'
  },
  business: {
    operator: 'Vít Pulchart',
    ico: '24911453',
    registeredAddress: 'Školská 660/3, Nové Město, 110 00 Praha 1',
  },
  openingHours: [
    { days: 'Pondělí – Čtvrtek', hours: '11:00 – 21:00', status: 'Otevřeno' },
    { days: 'Pátek – Sobota', hours: '11:00 – 23:00', status: 'Late-Night Gaming' },
    { days: 'Neděle', hours: '11:00 – 20:00', status: 'Otevřeno' },
  ],
  contacts: {
    phone: '+420 777 123 456',
    phoneFormatted: '+420 777 123 456',
    email: 'info@frogoshop.cz',
    instagram: '@frogo_cbd_hk',
    instagramUrl: 'https://instagram.com',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Švehlova+633%2F10%2C+500+02+Hradec+Králové',
  embedMapUrl: 'https://maps.google.com/maps?q=%C5%A0vehlova%20633%2F10,%20500%2002%20Hradec%20Kr%C3%A1lov%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed',
  formspreeEndpoint: 'https://formspree.io/f/YOUR_ENDPOINT_HERE',
  images: REAL_IMAGES
};

export const PS5_FEATURES = [
  {
    icon: 'Gamepad2',
    title: 'Sony PlayStation 5 Setup',
    subtitle: 'Nativní 4K & Ultra-fluid 120 FPS',
    desc: 'Užij si nejnovější generaci konzolí v plné parádě bez jakýchkoliv kompromisů.'
  },
  {
    icon: 'Tv',
    title: 'OLED Velkoformátový displej',
    subtitle: 'Hluboká černá & pohlcující barvy',
    desc: 'Obří úhlopříčka, minimální input lag a dynamické HDR pro dokonalý vizuální zážitek.'
  },
  {
    icon: 'Users',
    title: 'DualSense pro 4 hráče',
    subtitle: 'Haptická odezva & adaptivní spouště',
    desc: 'Vyzvi kámoše na lokální multiplayer split-screen nebo společný kooperační battle.'
  },
  {
    icon: 'Armchair',
    title: 'Privátní lounge zóna',
    subtitle: 'Maximální soukromí & klubový vibe',
    desc: 'Ambientní osvětlení, pohodlný kožený gauč, minibar a výběrové CBD občerstvení.'
  }
];

export const GAMES_LIBRARY = [
  'EA Sports FC 25',
  'Tekken 8',
  'Mortal Kombat 1',
  'Gran Turismo 7',
  'Grand Theft Auto V',
  'Call of Duty: Warzone',
  'NBA 2K25',
  'UFC 5',
  'Rocket League',
  'Spider-Man 2'
];

export const FAQS = [
  {
    question: 'Jak funguje rezervace PS5 Chill Roomu?',
    answer: 'Rezervaci zvládneš online přes náš rezervační formulář, na telefonu nebo rovnou osobně na prodejně ve Švehlově ulici. Vybereš si datum, čas a délku (1h, 2h nebo 3h slot). V místnosti je naprosté soukromí pro tebe a až 3 další kámoše.'
  },
  {
    question: 'Je online rezervace PS5 Roomu závazná?',
    answer: 'Rezervace přes web je nezávazná poptávka volného slotu. Po odeslání požadavku vás zkontaktujeme nebo vám zašleme potvrzení formou SMS.'
  },
  {
    question: 'Je vstup a nákup přísně 18+?',
    answer: 'Ano. Celý koncept Frogo CBD Shopu i naší PS5 Chill zóny je určen výhradně pro plnoleté osoby (18+). Při vstupu nebo nákupu můžeme požádat o předložení průkazu totožnosti.'
  },
  {
    question: 'Jsou CBD produkty a joints legální v ČR?',
    answer: 'Ano, 100% legální. Všechny naše CBD květy, vapes i pre-rolls splňují českou legislativu podle zákona č. 167/1998 Sb., s obsahem THC do 1,0 %. Veškeré zboží pochází z laboratorně testovaných šarží.'
  },
  {
    question: 'Mohu v PS5 Chill Zone konzumovat nápoje a CBD?',
    answer: 'Samozřejmě! V lounge máme minibar s prémiovými chlazenými nápoji, energetickými drinky a CBD limonádami. Na prodejně si můžeš vybrat také vapes nebo další produkty pro dokonalý odpočinek.'
  },
  {
    question: 'Kde přesně vás najdu a jak je to s parkováním?',
    answer: 'Najdeš nás na adrese Švehlova 633/10, přímo u Masarykova náměstí v centru Hradce Králové. Zastávky MHD jsou minutu pěšky a parkovat lze pohodlně přímo v ulici Švehlova.'
  }
];
