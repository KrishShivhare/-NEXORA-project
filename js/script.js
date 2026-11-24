/**
 * NEXORA Multi-Vendor Commerce Platform
 * Vanilla JavaScript Static Edition (Direct HTML Execution)
 * (c) NEXORA Inc. - All rights reserved.
 */

/* ==========================================================================
   1. ICONS REGISTRY (Lucide Vector SVGs)
   ========================================================================== */
const ICONS = {
  'layers': '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  'search': '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
  'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path>',
  'shopping-cart': '<circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>',
  'store': '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path>',
  'user-check': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"></polyline>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"></polyline>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
  'arrow-left': '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
  'menu': '<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>',
  'x': '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
  'x-circle': '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path>',
  'shield-alert': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line>',
  'check': '<polyline points="20 6 9 17 4 12"></polyline>',
  'check-circle2': '<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
  'sparkles': '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>',
  'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
  'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>',
  'bar-chart3': '<line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line>',
  'package': '<path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path>',
  'eye': '<path d="2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>',
  'eye-off': '<path d="9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><line x1="2" x2="22" y1="2" y2="22"></line>',
  'tag': '<path d="12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><circle cx="7" cy="7" r=".5" fill="currentColor"></circle>',
  'clock': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="7" r="2"></circle>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path>',
  'sliders-horizontal': '<line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line>',
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect>',
  'plus-circle': '<circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path>',
  'trash-2': '<path d="3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line>',
  'edit': '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path>',
  'external-link': '<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
  'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>',
  'globe': '<circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>',
  'globe-2': '<circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line>',
  'calendar': '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>',
  'palette': '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>',
  'upload': '<path d="21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line>',
  'dollar-sign': '<line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
  'alert-circle': '<circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line>',
  'info': '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>',
  'server': '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line>',
  'logout': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line>',
  'save': '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path>',
  'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle>',
  'help-circle': '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" x2="12.01" y1="17" y2="17"></line>'
};

function icon(name, className = 'w-4 h-4', extraAttrs = '') {
  const content = ICONS[name] || ICONS['help-circle'];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}" ${extraAttrs}>${content}</svg>`;
}


/* ==========================================================================
   2. MOCK DATA & FIXTURES
   ========================================================================== */
const INITIAL_CATEGORIES = [
  { id: 'cat-1', name: 'Electronics & Computing', slug: 'electronics', itemCount: 42, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' },
  { id: 'cat-2', name: 'Pro Audio & Hi-Fi', slug: 'audio', itemCount: 28, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
  { id: 'cat-3', name: 'Minimalist Workspace', slug: 'workspace', itemCount: 35, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80' },
  { id: 'cat-4', name: 'Cameras & Optics', slug: 'cameras', itemCount: 19, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' },
  { id: 'cat-5', name: 'Horology & Timepieces', slug: 'timepieces', itemCount: 14, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80' },
  { id: 'cat-6', name: 'Everyday Carry & Bags', slug: 'bags', itemCount: 23, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' }
];

const INITIAL_STORES = [
  {
    id: 'store-1',
    name: 'Aether Soundworks',
    slug: 'aether-soundworks',
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1600&q=80',
    description: 'Precision acoustic engineering, studio-grade wireless monitoring, and bespoke headphone amplifiers built for audio purists.',
    category: 'Pro Audio & Hi-Fi',
    brandColor: '#2563EB',
    rating: 4.9,
    reviewCount: 342,
    totalProducts: 14,
    totalSales: 1840,
    verified: true,
    joinedDate: 'Jan 2024',
    location: 'Berlin, Germany',
    email: 'concierge@aethersound.io',
    website: 'https://aethersound.io'
  },
  {
    id: 'store-2',
    name: 'Luminary Gear & Optics',
    slug: 'luminary-gear',
    logo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    description: 'Curators of premium mirrorless optics, titanium everyday tools, and bespoke mechanical peripherals.',
    category: 'Electronics & Computing',
    brandColor: '#0F172A',
    rating: 4.8,
    reviewCount: 215,
    totalProducts: 18,
    totalSales: 960,
    verified: true,
    joinedDate: 'Mar 2024',
    location: 'Kyoto, Japan',
    email: 'support@luminarygear.com',
    website: 'https://luminarygear.com'
  },
  {
    id: 'store-3',
    name: 'Veloce Atelier',
    slug: 'veloce-atelier',
    logo: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    description: 'Handcrafted horological instruments, Italian vegetable-tanned leather bands, and certified pre-owned chronographs.',
    category: 'Horology & Timepieces',
    brandColor: '#B45309',
    rating: 4.95,
    reviewCount: 188,
    totalProducts: 9,
    totalSales: 430,
    verified: true,
    joinedDate: 'Nov 2023',
    location: 'Geneva, Switzerland',
    email: 'atelier@veloce-horology.ch'
  },
  {
    id: 'store-4',
    name: 'Nordic Studio Craft',
    slug: 'nordic-studio',
    logo: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80',
    description: 'Minimalist solid oak workspace elevations, cable organizers, and ergonomic wool felt desk mats.',
    category: 'Minimalist Workspace',
    brandColor: '#059669',
    rating: 4.85,
    reviewCount: 420,
    totalProducts: 16,
    totalSales: 2150,
    verified: true,
    joinedDate: 'Aug 2023',
    location: 'Copenhagen, Denmark',
    email: 'hello@nordicstudiocraft.dk'
  },
  {
    id: 'store-5',
    name: 'KROMA Technical Wear',
    slug: 'kroma-wear',
    logo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    description: 'Weatherproof ballistic nylon packs, modular techwear pouches, and bonded fleece garments engineered for urban transit.',
    category: 'Everyday Carry & Bags',
    brandColor: '#7C3AED',
    rating: 4.78,
    reviewCount: 165,
    totalProducts: 11,
    totalSales: 780,
    verified: false,
    joinedDate: 'Feb 2024',
    location: 'San Francisco, USA',
    email: 'support@kromawear.io'
  }
];

const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Aether Horizon X9 Wireless Planar Headphones',
    description: 'Ultra-low distortion open-back planar magnetic headphones engineered with aerospace aluminum frames, carbon fiber headband, and custom 90mm beryllium drivers. Supports LDAC and lossless USB-C audio streaming.',
    price: 649,
    originalPrice: 729,
    category: 'Pro Audio & Hi-Fi',
    condition: 'New',
    conditionDetail: 'Brand New Sealed in Box with 3-year Manufacturer Warranty',
    stock: 24,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 88,
    storeId: 'store-1',
    storeName: 'Aether Soundworks',
    sellerVerified: true,
    features: [
      '90mm planar magnetic drivers with sub-0.05% THD',
      'Lossless 24-bit/96kHz wireless over custom RF & LDAC',
      '45-hour playback with fast-charge over USB-C',
      'Aircraft-grade milled aluminum chassis with magnetic memory foam pads'
    ],
    createdAt: '2024-03-15'
  },
  {
    id: 'prod-2',
    title: 'Luminary M-Chassis Custom Mechanical Keyboard',
    description: 'A heavy 65% gasket-mounted keyboard carved from a single block of 6063 anodized aluminum. Equipped with lubed tactile switches, brass weight bar, and custom PBT dye-sub keycaps.',
    price: 340,
    originalPrice: 380,
    category: 'Electronics & Computing',
    condition: 'New',
    conditionDetail: 'Factory New, Pre-assembled with extra switch puller and coiled aviator cable',
    stock: 12,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.95,
    reviewCount: 64,
    storeId: 'store-2',
    storeName: 'Luminary Gear & Optics',
    sellerVerified: true,
    features: [
      'CNC milled 6063 aerospace aluminum with brass PVD weight',
      'Poron gasket dampening with hot-swappable PCB',
      'Factory lubed Gateron Oil King tactile switches',
      'QMK / VIA open-source firmware compatibility'
    ],
    createdAt: '2024-03-10'
  },
  {
    id: 'prod-3',
    title: 'Leica M10-R 40MP Digital Rangefinder (Black Chrome)',
    description: 'Exemplary certified pre-owned rangefinder camera. Handcrafted in Germany with stunning color rendition and monochrome dynamic range. Shutter count under 3,400 actuations.',
    price: 4950,
    originalPrice: 6200,
    category: 'Cameras & Optics',
    condition: 'Used',
    conditionDetail: 'Condition 9.5/10 (Mint Pre-Owned). Flawless sensor, zero body scratches, boxed with original documentation.',
    stock: 1,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502982720700-befe97b2ff83?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 5.0,
    reviewCount: 19,
    storeId: 'store-2',
    storeName: 'Luminary Gear & Optics',
    sellerVerified: true,
    features: [
      '40.89 Megapixel Full-Frame CMOS sensor',
      'ISO 100 to 50,000 with quiet mechanical shutter',
      'Iconic optical rangefinder with 0.73x magnification',
      'Original packaging, battery, charger, and certificate included'
    ],
    createdAt: '2024-03-01'
  },
  {
    id: 'prod-4',
    title: 'Veloce Chronographe Monopoussoir Heritage 1968',
    description: 'A 39mm vintage-inspired single-pusher chronograph featuring a Swiss manual-wind column wheel movement, domed sapphire crystal, and matte slate dial with cream luminescent markers.',
    price: 1850,
    originalPrice: 2100,
    category: 'Horology & Timepieces',
    condition: 'New',
    conditionDetail: 'New with Box and 5-Year International Guarantee Card',
    stock: 6,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.88,
    reviewCount: 42,
    storeId: 'store-3',
    storeName: 'Veloce Atelier',
    sellerVerified: true,
    features: [
      'Calibre V-04 manual-wind column wheel movement (48hr reserve)',
      '316L brushed stainless steel with mirror-polished bevels',
      'Domed box sapphire crystal with anti-reflective undercoating',
      'Hand-stitched Tuscan Baranil calfskin strap'
    ],
    createdAt: '2024-02-20'
  },
  {
    id: 'prod-5',
    title: 'Nordic Solid Walnut Dual-Monitor Stand & Shelf',
    description: 'Elevate your screens to ergonomic eye level while organizing your notebook, desktop audio interface, and peripherals. Hand-sanded natural American black walnut with cork dampening legs.',
    price: 195,
    category: 'Minimalist Workspace',
    condition: 'New',
    conditionDetail: 'Handmade in Copenhagen using certified FSC American Walnut',
    stock: 35,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.82,
    reviewCount: 112,
    storeId: 'store-4',
    storeName: 'Nordic Studio Craft',
    sellerVerified: true,
    features: [
      'Supports up to 45kg across 110cm wide surface',
      'Integrated underside aluminum cable management tray',
      'Zero synthetic veneers - 100% solid natural hardwood',
      'Finished with natural food-safe beeswax and organic oil'
    ],
    createdAt: '2024-02-18'
  },
  {
    id: 'prod-6',
    title: 'KROMA Transit Pack 28L Weatherproof Ballistic',
    description: 'Designed for daily urban commuting and one-bag travel. Crafted with X-Pac VX21 waterproof laminate, YKK AquaGuard zippers, magnetic Fidlock V-buckles, and suspended 16" laptop sleeve.',
    price: 260,
    originalPrice: 290,
    category: 'Everyday Carry & Bags',
    condition: 'New',
    conditionDetail: 'Brand New with Modular Utility Straps and Lifetime Guarantee',
    stock: 18,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.75,
    reviewCount: 54,
    storeId: 'store-5',
    storeName: 'KROMA Technical Wear',
    sellerVerified: false,
    features: [
      'Dimension-Polyant X-Pac VX21 waterproof exterior shell',
      'Fidlock magnetic quick-release sternum and front hardware',
      'Internal airflow back panel with luggage trolley pass-through',
      'Dedicated suspended compartment for up to 16" MacBook Pro'
    ],
    createdAt: '2024-03-02'
  },
  {
    id: 'prod-7',
    title: 'Apple Studio Display 27" 5K Retina (Tilt-Adjustable)',
    description: 'Certified refurbished Studio Display with 5K Retina resolution, 600 nits brightness, 12MP Ultra Wide camera with Center Stage, and high-fidelity six-speaker sound system.',
    price: 1290,
    originalPrice: 1599,
    category: 'Electronics & Computing',
    condition: 'Used',
    conditionDetail: 'Certified Refurbished (Grade A+). Zero dead pixels, original Apple Thunderbolt 3 cable included.',
    stock: 3,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 37,
    storeId: 'store-2',
    storeName: 'Luminary Gear & Optics',
    sellerVerified: true,
    features: [
      '27-inch 5K Retina display (5120-by-2880 resolution at 218 ppi)',
      'P3 wide color and True Tone technology',
      'Studio-quality three-mic array with directional beamforming',
      'Thunderbolt 3 upstream port with 96W host charging'
    ],
    createdAt: '2024-02-28'
  },
  {
    id: 'prod-8',
    title: 'Aether Amp One Class-A Desktop Headphone DAC/Amp',
    description: 'A pure discrete Class-A balanced headphone amplifier and ES9038PRO DAC. Delivers holographic soundstaging, pitch-black noise floor, and up to 6W of clean output power.',
    price: 890,
    category: 'Pro Audio & Hi-Fi',
    condition: 'New',
    conditionDetail: 'Sealed New In Box, Matched Pair Transistors with Certificate',
    stock: 8,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.98,
    reviewCount: 29,
    storeId: 'store-1',
    storeName: 'Aether Soundworks',
    sellerVerified: true,
    features: [
      'ESS Sabre ES9038PRO 32-bit flagship DAC chipset',
      'Pure Class-A discrete output stage with toroidal transformer',
      '4-pin XLR balanced, 4.4mm Pentaconn, and 6.35mm outputs',
      'Bespoke stepped attenuator with 0.1% matched metal film resistors'
    ],
    createdAt: '2024-01-20'
  },
  {
    id: 'prod-9',
    title: 'Vintage Omega Seamaster Automatic 1974 (Cal. 1012)',
    description: 'A striking vintage Omega timepiece in unpolished stainless steel. Original sunburst silver dial, applied baton indices, date window at 3 o’clock. Recently serviced by certified watchmaker with timing receipt.',
    price: 1150,
    originalPrice: 1400,
    category: 'Horology & Timepieces',
    condition: 'Used',
    conditionDetail: 'Condition 8.8/10 (Vintage Excellent). Running +4s/day, clean acrylic crystal with stamped logo.',
    stock: 1,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 15,
    storeId: 'store-3',
    storeName: 'Veloce Atelier',
    sellerVerified: true,
    features: [
      'In-house Omega Calibre 1012 automatic movement with hacking seconds',
      'Solid 36mm stainless steel case (wearable classic proportions)',
      'Supplied on brown French Epsom leather strap with steel pin buckle',
      '6-month mechanical movement warranty provided by Veloce Atelier'
    ],
    createdAt: '2024-02-12'
  },
  {
    id: 'prod-10',
    title: 'Nordic Ergonomic Merino Wool & Cork Desk Pad',
    description: 'Minimalist desktop foundation engineered with 100% natural Bavarian merino wool felt laminated to high-density Portuguese cork. Anti-slip, heat resistant, and provides smooth mouse gliding.',
    price: 78,
    category: 'Minimalist Workspace',
    condition: 'New',
    conditionDetail: 'Brand New in Recycled Kraft Tube (Size: 90cm x 40cm)',
    stock: 50,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.88,
    reviewCount: 92,
    storeId: 'store-4',
    storeName: 'Nordic Studio Craft',
    sellerVerified: true,
    features: [
      'Natural merino wool naturally repels water and dust',
      'Portuguese agglomerated cork base eliminates slipping without adhesives',
      'Precision laser-cut edges with subtle debossed Nordic emblem',
      'Eco-certified OEKO-TEX standard 100 material'
    ],
    createdAt: '2024-03-05'
  },
  {
    id: 'prod-11',
    title: 'Fujifilm X100V Compact Camera (Silver Finish)',
    description: 'Lightly used Fujifilm X100V with hybrid viewfinder, 26.1MP X-Trans IV sensor, and fixed 23mm F2 lens. Includes square aluminum lens hood, thumb grip, and UV filter.',
    price: 1650,
    originalPrice: 1799,
    category: 'Cameras & Optics',
    condition: 'Used',
    conditionDetail: 'Condition 9.2/10 (Pre-Owned). Shutter count only 4,100, clean glass with B+W filter applied since day one.',
    stock: 2,
    status: 'published',
    images: [
      'https://images.unsplash.com/photo-1502982720700-befe97b2ff83?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.96,
    reviewCount: 47,
    storeId: 'store-2',
    storeName: 'Luminary Gear & Optics',
    sellerVerified: true,
    features: [
      '26.1MP APS-C X-Trans CMOS 4 Sensor & X-Processor 4',
      'Fixed Fujinon 23mm f/2.0 II lens with weather resistance when filtered',
      'Advanced hybrid optical/OLED electronic viewfinder',
      'Includes premium Haoge square metal hood and extra battery'
    ],
    createdAt: '2024-03-08'
  },
  {
    id: 'prod-12',
    title: 'Aether Soundworks Reference IEM Cable (Silver/Copper Litz)',
    description: '8-core custom hand-braided OCC monocrystalline silver and oxygen-free copper litz earphone cable. Universal 0.78mm 2-pin connectors with modular 3.5mm and 4.4mm interchangeable plugs.',
    price: 180,
    category: 'Pro Audio & Hi-Fi',
    condition: 'New',
    conditionDetail: 'New in Aluminum Storage Tin with Both Plugs Included',
    stock: 15,
    status: 'draft',
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.6,
    reviewCount: 12,
    storeId: 'store-1',
    storeName: 'Aether Soundworks',
    sellerVerified: true,
    features: [
      '8-core hybrid monocrystalline copper and pure silver conductors',
      'Zero microphonic soft medical-grade PVC jacket',
      'Modular screw-lock interchangeable connector system'
    ],
    createdAt: '2024-03-12'
  }
];

const INITIAL_ORDERS = [
  {
    id: 'NX-89421',
    customerName: 'Marcus Vance',
    customerEmail: 'marcus.vance@design.co',
    items: [
      {
        productId: 'prod-1',
        productTitle: 'Aether Horizon X9 Wireless Planar Headphones',
        price: 649,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
        storeName: 'Aether Soundworks'
      },
      {
        productId: 'prod-5',
        productTitle: 'Nordic Solid Walnut Dual-Monitor Stand & Shelf',
        price: 195,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80',
        storeName: 'Nordic Studio Craft'
      }
    ],
    subtotal: 844,
    shipping: 0,
    tax: 67.52,
    total: 911.52,
    status: 'Delivered',
    date: '2024-03-12',
    shippingAddress: {
      fullName: 'Marcus Vance',
      street: '742 Evergreen Terrace, Suite 4B',
      city: 'Portland',
      state: 'OR',
      postalCode: '97201',
      country: 'United States'
    },
    trackingNumber: 'NX-FEDEX-90412849'
  },
  {
    id: 'NX-89420',
    customerName: 'Elena Rostova',
    customerEmail: 'elena.rostova@techcorp.io',
    items: [
      {
        productId: 'prod-2',
        productTitle: 'Luminary M-Chassis Custom Mechanical Keyboard',
        price: 340,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80',
        storeName: 'Luminary Gear & Optics'
      }
    ],
    subtotal: 340,
    shipping: 0,
    tax: 27.20,
    total: 367.20,
    status: 'Shipped',
    date: '2024-03-14',
    shippingAddress: {
      fullName: 'Elena Rostova',
      street: '128 King Street East',
      city: 'Toronto',
      state: 'ON',
      postalCode: 'M5C 1G5',
      country: 'Canada'
    },
    trackingNumber: 'NX-UPS-88401928'
  },
  {
    id: 'NX-89419',
    customerName: 'Kaito Tanaka',
    customerEmail: 'kaito@tanakadesign.jp',
    items: [
      {
        productId: 'prod-10',
        productTitle: 'Nordic Ergonomic Merino Wool & Cork Desk Pad',
        price: 78,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=300&q=80',
        storeName: 'Nordic Studio Craft'
      }
    ],
    subtotal: 156,
    shipping: 10,
    tax: 12.48,
    total: 178.48,
    status: 'Processing',
    date: '2024-03-15',
    shippingAddress: {
      fullName: 'Kaito Tanaka',
      street: '3-14-1 Roppongi, Minato-ku',
      city: 'Tokyo',
      state: 'Tokyo',
      postalCode: '106-0032',
      country: 'Japan'
    }
  }
];

const DEFAULT_USERS = {
  buyer: {
    id: 'user-buyer-1',
    name: 'Marcus Vance',
    email: 'marcus.vance@design.co',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  seller: {
    id: 'user-seller-1',
    name: 'Elena Rostova',
    email: 'elena@aethersound.io',
    role: 'seller',
    storeId: 'store-1',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  admin: {
    id: 'user-admin-1',
    name: 'David Mercer',
    email: 'ops@nexora.io',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
};

/* ==========================================================================
   3. STORAGE & STATE STORE
   ========================================================================== */
const Storage = {
  get(key, fallback) {
    try {
      const data = localStorage.getItem('nexora_' + key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem('nexora_' + key, JSON.stringify(value));
    } catch (e) {}
  },
  remove(key) {
    try {
      localStorage.removeItem('nexora_' + key);
    } catch (e) {}
  }
};

const AuthStore = {
  getUser() {
    return Storage.get('user', DEFAULT_USERS.seller);
  },
  setUser(user) {
    if (user) {
      Storage.set('user', user);
    } else {
      Storage.remove('user');
    }
    document.dispatchEvent(new CustomEvent('auth-changed'));
  },
  login(role, email, name, storeId) {
    const template = DEFAULT_USERS[role] || DEFAULT_USERS.buyer;
    const user = {
      ...template,
      id: `user-${Date.now()}`,
      name: name || template.name,
      email: email || template.email,
      role: role,
      storeId: storeId || (role === 'seller' ? template.storeId : undefined)
    };
    this.setUser(user);
    return user;
  },
  logout() {
    this.setUser(null);
  },
  switchRole(role) {
    const user = DEFAULT_USERS[role];
    this.setUser(user);
    return user;
  }
};

const StoreManager = {
  getProducts() {
    return Storage.get('products', INITIAL_PRODUCTS);
  },
  saveProducts(products) {
    Storage.set('products', products);
    document.dispatchEvent(new CustomEvent('products-changed'));
  },
  getProductById(id) {
    return this.getProducts().find(p => p.id === id);
  },
  addProduct(productData) {
    const products = this.getProducts();
    const newProduct = {
      ...productData,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      rating: 5.0,
      reviewCount: 0
    };
    products.unshift(newProduct);
    this.saveProducts(products);
    return newProduct;
  },
  updateProduct(id, updates) {
    const products = this.getProducts().map(p => p.id === id ? { ...p, ...updates } : p);
    this.saveProducts(products);
  },
  deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  },
  getStores() {
    return Storage.get('stores', INITIAL_STORES);
  },
  saveStores(stores) {
    Storage.set('stores', stores);
    document.dispatchEvent(new CustomEvent('stores-changed'));
  },
  getStoreById(id) {
    return this.getStores().find(s => s.id === id);
  },
  getStoreBySlug(slug) {
    return this.getStores().find(s => s.slug === slug);
  },
  addStore(storeData) {
    const stores = this.getStores();
    const newStore = {
      ...storeData,
      id: `store-${Date.now()}`,
      joinedDate: 'Just now',
      rating: 5.0,
      reviewCount: 1,
      totalProducts: 0,
      totalSales: 0,
      verified: true
    };
    stores.unshift(newStore);
    this.saveStores(stores);
    return newStore;
  },
  updateStore(id, updates) {
    const stores = this.getStores().map(s => s.id === id ? { ...s, ...updates } : s);
    this.saveStores(stores);
  },
  getOrders() {
    return Storage.get('orders', INITIAL_ORDERS);
  },
  saveOrders(orders) {
    Storage.set('orders', orders);
    document.dispatchEvent(new CustomEvent('orders-changed'));
  },
  addOrder(orderData) {
    const orders = this.getOrders();
    const newOrder = {
      ...orderData,
      id: `NX-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing'
    };
    orders.unshift(newOrder);
    this.saveOrders(orders);
    return newOrder;
  },
  resetDemoData() {
    Storage.remove('products');
    Storage.remove('stores');
    Storage.remove('orders');
    Storage.remove('cart');
    document.dispatchEvent(new CustomEvent('state-reset'));
  }
};

const CartStore = {
  getItems() {
    return Storage.get('cart', [
      { product: INITIAL_PRODUCTS[0], quantity: 1 }
    ]);
  },
  saveItems(items) {
    Storage.set('cart', items);
    document.dispatchEvent(new CustomEvent('cart-changed'));
  },
  addToCart(product, quantity = 1) {
    const items = this.getItems();
    const existing = items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, product.stock || 99);
    } else {
      items.push({ product, quantity: Math.min(quantity, product.stock || 99) });
    }
    this.saveItems(items);
  },
  removeFromCart(productId) {
    const items = this.getItems().filter(i => i.product.id !== productId);
    this.saveItems(items);
  },
  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const items = this.getItems().map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: Math.min(quantity, item.product.stock || 99) };
      }
      return item;
    });
    this.saveItems(items);
  },
  clearCart() {
    this.saveItems([]);
  },
  getTotals(discount = 0) {
    const items = this.getItems();
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
    const estimatedTax = Number((subtotal * 0.08).toFixed(2));
    const gross = subtotal + shipping + estimatedTax;
    const total = Math.max(0, Number((gross - discount).toFixed(2)));
    return { totalItems, subtotal, shipping, estimatedTax, discount, total };
  }
};


/* ==========================================================================
   4. TOASTS, MODALS & CUSTOM CURSOR
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  
  let iconName = 'check-circle2';
  if (type === 'error') iconName = 'x-circle';
  if (type === 'alert') iconName = 'alert-circle';
  
  toast.innerHTML = `
    <span class="${type === 'error' ? 'text-rose-400' : 'text-emerald-400'}">${icon(iconName, 'w-4 h-4')}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

function openModal(htmlContent, onClose) {
  const container = document.getElementById('modal-container');
  if (!container) return;
  container.innerHTML = `
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-content" onclick="event.stopPropagation()">
        ${htmlContent}
      </div>
    </div>
  `;
  const backdrop = document.getElementById('active-modal-backdrop');
  backdrop.addEventListener('click', () => {
    closeModal();
    if (onClose) onClose();
  });
}

function closeModal() {
  const container = document.getElementById('modal-container');
  if (container) container.innerHTML = '';
}

function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches || !window.matchMedia('(hover: hover)').matches) {
    return;
  }
  let cursorWrapper = document.getElementById('nexora-custom-cursor');
  if (!cursorWrapper) {
    cursorWrapper = document.createElement('div');
    cursorWrapper.id = 'nexora-custom-cursor';
    cursorWrapper.className = 'fixed inset-0 pointer-events-none z-[99999] opacity-0 transition-opacity duration-300';
    cursorWrapper.innerHTML = `
      <div id="cursor-ring" class="fixed top-0 left-0 rounded-full pointer-events-none border border-blue-500/70 bg-transparent shadow-[0_0_14px_rgba(37,99,235,0.3)] transition-[width,height,margin,border-color,background-color,box-shadow] duration-200 ease-out" style="width:32px;height:32px;margin-top:-16px;margin-left:-16px;"></div>
      <div id="cursor-dot" class="fixed top-0 left-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.9)] pointer-events-none" style="width:6px;height:6px;margin-top:-3px;margin-left:-3px;"></div>
    `;
    document.body.appendChild(cursorWrapper);
  }

  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let isHovered = false;
  let isClicked = false;
  let isVisible = false;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      cursorWrapper.classList.remove('opacity-0');
      cursorWrapper.classList.add('opacity-100');
      ringX = mouseX;
      ringY = mouseY;
    }
    const target = e.target;
    if (target && target.closest) {
      isHovered = Boolean(target.closest('a, button, input, select, textarea, [role="button"], label, .cursor-pointer'));
      if (isHovered) {
        ring.className = 'fixed top-0 left-0 rounded-full pointer-events-none border border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(37,99,235,0.45)] transition-[width,height,margin,border-color,background-color,box-shadow] duration-200 ease-out';
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.marginTop = '-24px';
        ring.style.marginLeft = '-24px';
      } else {
        ring.className = 'fixed top-0 left-0 rounded-full pointer-events-none border border-blue-500/70 bg-transparent shadow-[0_0_14px_rgba(37,99,235,0.3)] transition-[width,height,margin,border-color,background-color,box-shadow] duration-200 ease-out';
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.marginTop = '-16px';
        ring.style.marginLeft = '-16px';
      }
    }
  }, { passive: true });

  window.addEventListener('mousedown', () => { isClicked = true; ring.style.transform += ' scale(0.85)'; });
  window.addEventListener('mouseup', () => { isClicked = false; });
  document.addEventListener('mouseleave', () => { cursorWrapper.classList.add('opacity-0'); isVisible = false; });
  document.addEventListener('mouseenter', () => { cursorWrapper.classList.remove('opacity-0'); isVisible = true; });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

/* ==========================================================================
   5. COMMON UI COMPONENTS
   ========================================================================== */
function ConditionBadge(condition, detail, size = 'sm') {
  const isNew = condition === 'New';
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-xs px-3 py-1 font-medium';
  const iconStr = isNew ? icon('sparkles', 'w-3 h-3 text-blue-600') : icon('tag', 'w-3 h-3 text-amber-600');
  const colorClasses = isNew
    ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
    : 'bg-amber-50 text-amber-800 border border-amber-200/60';
  return `
    <span title="${detail || (isNew ? 'Brand new factory sealed' : 'Certified pre-owned / used')}" class="inline-flex items-center gap-1 rounded-full font-medium transition-colors ${sizeClasses} ${colorClasses}">
      ${iconStr}
      <span>${condition}</span>
    </span>
  `;
}

function StatusBadge(status) {
  const isPublished = status === 'published';
  return `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${isPublished ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'}">
      <span class="w-1.5 h-1.5 rounded-full ${isPublished ? 'bg-emerald-500' : 'bg-slate-400'}"></span>
      <span class="capitalize">${status}</span>
    </span>
  `;
}

function OrderStatusBadge(status) {
  const styles = {
    Processing: 'bg-blue-50 text-blue-700 border-blue-200',
    Shipped: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Cancelled: 'bg-rose-50 text-rose-700 border-rose-200'
  };
  const iconName = status === 'Delivered' ? 'check-circle2' : status === 'Cancelled' ? 'x-circle' : 'clock';
  return `
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status] || styles.Processing}">
      ${icon(iconName, 'w-3 h-3')}
      <span>${status}</span>
    </span>
  `;
}

function StarRating(rating, reviewCount, size = 'sm') {
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const fontSize = size === 'sm' ? 'text-xs' : 'text-sm';
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    const isFilled = rating >= i;
    const isHalf = !isFilled && rating >= i - 0.5;
    const fill = isFilled ? '#fbbf24' : isHalf ? 'url(#half-gold)' : '#e2e8f0';
    const stroke = isFilled || isHalf ? '#fbbf24' : '#cbd5e1';
    starsHtml += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="${iconSize}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  }
  return `
    <div class="inline-flex items-center gap-1.5">
      <div class="flex items-center gap-0.5">${starsHtml}</div>
      <span class="font-semibold text-slate-800 ${fontSize}">${Number(rating).toFixed(1)}</span>
      ${reviewCount !== undefined ? `<span class="text-slate-500 ${fontSize}">(${reviewCount})</span>` : ''}
    </div>
  `;
}

function ProductCard(product) {
  const stores = StoreManager.getStores();
  const store = stores.find(s => s.id === product.storeId || s.name === product.storeName);
  const storeSlug = store ? store.slug : 'aether-soundworks';
  const discountPercent = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  return `
    <div class="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      <div class="relative aspect-square w-full bg-slate-100 overflow-hidden">
        <a href="#/product/${product.id}" class="block w-full h-full">
          <img src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />
        </a>
        <div class="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          ${ConditionBadge(product.condition, product.conditionDetail)}
          ${discountPercent > 0 ? `<span class="bg-rose-500 text-white font-bold text-[11px] px-2 py-0.5 rounded-full shadow-sm">-${discountPercent}%</span>` : ''}
        </div>
        <div class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <a href="#/product/${product.id}" class="pointer-events-auto bg-white/95 text-slate-800 hover:text-blue-600 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
            ${icon('eye', 'w-3.5 h-3.5')}
            <span>Quick View</span>
          </a>
        </div>
      </div>
      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <a href="#/store/${storeSlug}" class="text-slate-600 hover:text-blue-600 font-medium inline-flex items-center gap-1 truncate max-w-[70%]">
              <span class="truncate">${product.storeName}</span>
              ${product.sellerVerified ? `<span class="text-blue-600">${icon('shield-check', 'w-3.5 h-3.5')}</span>` : ''}
            </a>
            <span class="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
              ${(product.category || '').split('&')[0]}
            </span>
          </div>
          <a href="#/product/${product.id}">
            <h3 class="font-semibold text-slate-900 text-sm leading-snug hover:text-blue-600 transition-colors line-clamp-2 mb-2">
              ${product.title}
            </h3>
          </a>
          <div class="mb-3">
            ${StarRating(product.rating, product.reviewCount, 'sm')}
          </div>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-base sm:text-lg font-bold text-slate-900 font-mono">$${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="text-xs text-slate-400 line-through">$${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <p class="text-[11px] text-slate-500">
              ${product.stock > 0 ? (product.stock < 5 ? `<span class="text-amber-600 font-medium">Only ${product.stock} left</span>` : '<span>In Stock</span>') : '<span class="text-rose-500 font-medium">Out of stock</span>'}
            </p>
          </div>
          <button onclick="handleQuickAddToCart('${product.id}')" ${product.stock <= 0 ? 'disabled' : ''} class="p-2.5 rounded-xl transition-all flex items-center justify-center shrink-0 ${product.stock <= 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-blue-600 text-white shadow-sm shadow-slate-900/10'}" title="Add to Cart">
            ${icon('shopping-bag', 'w-4 h-4')}
          </button>
        </div>
      </div>
    </div>
  `;
}

function StoreCard(store) {
  return `
    <div class="group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-subtle hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      <div class="relative h-28 w-full bg-slate-800 overflow-hidden">
        <img src="${store.banner}" alt="${store.name} banner" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
        <div class="absolute top-2.5 right-2.5">
          ${store.verified ? `<span class="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-white/95 px-2 py-0.5 rounded shadow-sm">${icon('shield-check', 'w-3.5 h-3.5 text-blue-600')}<span>Verified Vendor</span></span>` : ''}
        </div>
      </div>
      <div class="px-5 pb-5 pt-0 flex-1 flex flex-col justify-between relative">
        <div>
          <div class="-mt-8 mb-3 flex items-end justify-between">
            <img src="${store.logo}" alt="${store.name}" class="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-md bg-white" />
            <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              ${store.category}
            </span>
          </div>
          <a href="#/store/${store.slug}">
            <h3 class="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
              ${store.name}
            </h3>
          </a>
          <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            ${store.description}
          </p>
          <div class="mt-3">
            ${StarRating(store.rating, store.reviewCount, 'sm')}
          </div>
        </div>
        <div class="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-3 text-xs text-slate-500">
            <span class="flex items-center gap-1 font-medium text-slate-700">
              ${icon('package', 'w-3.5 h-3.5 text-slate-400')}
              ${store.totalProducts || 12} items
            </span>
            <span class="text-slate-300">•</span>
            <span class="flex items-center gap-1 font-medium text-slate-700">
              ${icon('shopping-cart', 'w-3.5 h-3.5 text-slate-400')}
              ${store.totalSales || 300}+ sold
            </span>
          </div>
          <a href="#/store/${store.slug}" class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all">
            <span>Visit Store</span>
            ${icon('arrow-right', 'w-3.5 h-3.5')}
          </a>
        </div>
      </div>
    </div>
  `;
}


function renderNavbar() {
  const user = AuthStore.getUser();
  const role = user ? user.role : 'buyer';
  const cartTotals = CartStore.getTotals();
  const currentHash = window.location.hash || '#/';

  return `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <!-- Live Prototype Banner -->
      <div class="bg-slate-900 text-white text-xs px-4 py-1.5 flex items-center justify-between">
        <div class="flex items-center gap-2 overflow-x-auto py-0.5">
          <span class="font-semibold text-blue-400 uppercase tracking-wider text-[11px] flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            NEXORA Live Prototype:
          </span>
          <span class="text-slate-300 hidden sm:inline">Frontend prototype with dynamic state & demo role switching</span>
        </div>
        
        <!-- Role Switcher -->
        <div class="relative flex items-center gap-2">
          <span class="text-slate-400 hidden md:inline text-[11px]">View As:</span>
          <div class="relative" id="role-switcher-container">
            <button onclick="toggleDropdown('role-dropdown')" class="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-0.5 rounded text-[11px] font-medium border border-slate-700 transition-colors">
              <span class="text-blue-400">${icon('user-check', 'w-3 h-3')}</span>
              <span class="capitalize">${role} Mode</span>
              <span class="text-slate-400">${icon('chevron-down', 'w-3 h-3')}</span>
            </button>
            <div id="role-dropdown" class="hidden absolute right-0 mt-1.5 w-44 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 animate-fade-in">
              <div class="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-100">
                Switch Demo Account
              </div>
              <button onclick="switchRole('buyer')" class="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${role === 'buyer' ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'}">
                <span>Shopper (Marcus)</span>
                ${role === 'buyer' ? '<span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>' : ''}
              </button>
              <button onclick="switchRole('seller')" class="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${role === 'seller' ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'}">
                <span>Seller (Elena)</span>
                ${role === 'seller' ? '<span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>' : ''}
              </button>
              <button onclick="switchRole('admin')" class="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${role === 'admin' ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'}">
                <span>Admin (David)</span>
                ${role === 'admin' ? '<span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>' : ''}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 gap-4">
          <!-- Logo -->
          <div class="flex items-center gap-8">
            <a href="#/" class="flex items-center gap-2.5 group">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                ${icon('layers', 'w-5 h-5')}
              </div>
              <div class="flex flex-col">
                <span class="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">NEXORA</span>
                <span class="text-[10px] font-medium text-slate-600 -mt-1 hidden sm:block tracking-wide">Your Business. Your Brand.</span>
              </div>
            </a>
            <nav class="hidden md:flex items-center gap-1">
              <a href="#/marketplace" class="px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentHash.startsWith('#/marketplace') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">Marketplace</a>
              <a href="#stores" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">Featured Stores</a>
              <a href="#how-it-works" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">How It Works</a>
            </nav>
          </div>

          <!-- Header Search -->
          <div class="hidden lg:flex flex-1 max-w-md mx-4">
            <form onsubmit="handleNavSearch(event)" class="relative w-full">
              <input type="text" id="nav-search-input" placeholder="Search products, brands, or categories..." class="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl text-sm border border-transparent focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
              <span class="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">${icon('search', 'w-4 h-4')}</span>
            </form>
          </div>

          <!-- Right Actions -->
          <div class="flex items-center gap-3">
            <a href="#/create-company" class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-blue-600 text-white transition-all shadow-sm shadow-slate-900/10">
              ${icon('store', 'w-3.5 h-3.5')}
              <span>Start Your Business</span>
            </a>
            
            <!-- Cart Icon -->
            <a href="#/cart" class="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors" aria-label="View Cart">
              ${icon('shopping-bag', 'w-5 h-5')}
              ${cartTotals.totalItems > 0 ? `<span class="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">${cartTotals.totalItems}</span>` : ''}
            </a>

            <!-- User Menu -->
            ${user ? `
              <div class="relative" id="user-menu-container">
                <button onclick="toggleDropdown('user-dropdown')" class="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-colors">
                  <img src="${user.avatar}" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%232563eb\\'><circle cx=\\'12\\' cy=\\'7\\' r=\\'4\\' fill=\\'%2393c5fd\\'/><path d=\\'M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2\\' fill=\\'%232563eb\\'/></svg>'" alt="${user.name}" class="w-8 h-8 rounded-full object-cover ring-2 ring-slate-200" />
                  <span class="text-slate-500 hidden sm:block">${icon('chevron-down', 'w-4 h-4')}</span>
                </button>
                <div id="user-dropdown" class="hidden absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-fade-in">
                  <div class="px-4 py-3 border-b border-slate-100">
                    <p class="text-sm font-semibold text-slate-900">${user.name}</p>
                    <p class="text-xs text-slate-500 truncate">${user.email}</p>
                    <div class="mt-1.5">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 capitalize border border-blue-200/50">${user.role} Account</span>
                    </div>
                  </div>
                  <div class="py-1">
                    <a href="#/orders" class="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                      ${icon('package', 'w-4 h-4')}
                      <span>Customer Orders</span>
                    </a>
                    ${(user.role === 'seller' || user.role === 'admin') ? `
                      <div class="border-t border-slate-100 my-1"></div>
                      <div class="px-4 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Seller Tools</div>
                      <a href="#/seller/dashboard" class="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">${icon('layout-dashboard', 'w-4 h-4')}<span>Seller Dashboard</span></a>
                      <a href="#/seller/products" class="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">${icon('package', 'w-4 h-4')}<span>My Products</span></a>
                      <a href="#/seller/products/new" class="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">${icon('plus-circle', 'w-4 h-4')}<span>Add Product</span></a>
                      <a href="#/seller/profile" class="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">${icon('store', 'w-4 h-4')}<span>Business Profile</span></a>
                    ` : ''}
                    ${user.role === 'admin' ? `
                      <div class="border-t border-slate-100 my-1"></div>
                      <a href="#/admin/dashboard" class="flex items-center gap-2.5 px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50 font-medium">
                        ${icon('shield-alert', 'w-4 h-4 text-indigo-600')}
                        <span>Admin Dashboard</span>
                      </a>
                    ` : ''}
                  </div>
                  <div class="border-t border-slate-100 pt-1">
                    <button onclick="handleLogout()" class="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 text-left">
                      ${icon('logout', 'w-4 h-4')}
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            ` : `
              <div class="flex items-center gap-2">
                <a href="#/login" class="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Log In</a>
                <a href="#/register" class="px-3.5 py-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm shadow-blue-500/20">Sign Up</a>
              </div>
            `}

            <!-- Mobile Menu Toggle -->
            <button onclick="toggleMobileNav()" class="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl">
              ${icon('menu', 'w-6 h-6')}
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-nav-drawer" class="hidden md:hidden border-t border-slate-200 py-4 space-y-4 animate-fade-in">
          <form onsubmit="handleNavSearch(event)" class="relative">
            <input type="text" id="mobile-search-input" placeholder="Search products..." class="w-full bg-slate-100 text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <span class="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">${icon('search', 'w-4 h-4')}</span>
          </form>
          <nav class="flex flex-col space-y-1">
            <a href="#/marketplace" onclick="toggleMobileNav()" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">Marketplace</a>
            <a href="#/cart" onclick="toggleMobileNav()" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center justify-between">
              <span>Shopping Cart</span>
              <span class="bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full text-xs">${cartTotals.totalItems}</span>
            </a>
            <a href="#/orders" onclick="toggleMobileNav()" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">My Orders</a>
            <a href="#/create-company" onclick="toggleMobileNav()" class="px-3 py-2 rounded-lg text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100">Start Your Business</a>
            ${role === 'seller' ? '<a href="#/seller/dashboard" onclick="toggleMobileNav()" class="px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100">Seller Dashboard</a>' : ''}
            ${role === 'admin' ? '<a href="#/admin/dashboard" onclick="toggleMobileNav()" class="px-3 py-2 rounded-lg text-sm font-medium text-indigo-700 hover:bg-indigo-50">Admin Portal</a>' : ''}
          </nav>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="bg-slate-900 text-slate-400 text-sm mt-auto border-t border-slate-800">
      <!-- Trust Banner -->
      <div class="border-b border-slate-800/80 bg-slate-950/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                ${icon('shield-check', 'w-5 h-5')}
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm">Verified Multi-Vendor Platform</h4>
                <p class="text-xs text-slate-400">Every merchant storefront is verified for quality and authentic goods.</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                ${icon('check', 'w-5 h-5')}
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm">New & Certified Used Quality</h4>
                <p class="text-xs text-slate-400">Clear condition transparency with warranties and return protection.</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                ${icon('server', 'w-5 h-5')}
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm">Modern Static & SaaS Architecture</h4>
                <p class="text-xs text-slate-400">Vanilla HTML5, CSS3 & JS. Direct file:// browser execution ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Links & Newsletter -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div class="lg:col-span-2 space-y-4">
            <a href="#/" class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                ${icon('layers', 'w-5 h-5')}
              </div>
              <span class="font-extrabold text-2xl tracking-tight text-white">NEXORA</span>
            </a>
            <p class="text-slate-300 text-sm max-w-sm font-medium">Your Business. Your Brand. Your Store.</p>
            <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
              NEXORA empowers modern merchants, independent brands, and collectors to launch their custom digital storefronts and reach discerning buyers worldwide through a unified multi-vendor SaaS experience.
            </p>
            <div class="pt-2" id="footer-newsletter-container">
              <h5 class="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Stay Ahead of Product Drops</h5>
              <form onsubmit="handleNewsletter(event)" class="flex gap-2 max-w-sm">
                <input type="email" id="footer-newsletter-email" required placeholder="Enter your email address" class="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500" />
                <button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 shadow-sm shadow-blue-600/30">
                  <span>Join</span>
                  ${icon('arrow-right', 'w-3.5 h-3.5')}
                </button>
              </form>
            </div>
          </div>

          <div>
            <h4 class="text-white font-semibold text-xs uppercase tracking-wider mb-4">Marketplace</h4>
            <ul class="space-y-2.5 text-xs">
              <li><a href="#/marketplace" class="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#/marketplace?category=audio" class="hover:text-white transition-colors">Pro Audio & Hi-Fi</a></li>
              <li><a href="#/marketplace?category=electronics" class="hover:text-white transition-colors">Electronics & Computing</a></li>
              <li><a href="#/marketplace?category=workspace" class="hover:text-white transition-colors">Minimalist Workspace</a></li>
              <li><a href="#/marketplace?category=timepieces" class="hover:text-white transition-colors">Timepieces & Watches</a></li>
              <li><a href="#/marketplace?condition=Used" class="hover:text-white transition-colors text-amber-400">Certified Pre-Owned (Used)</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold text-xs uppercase tracking-wider mb-4">For Entrepreneurs</h4>
            <ul class="space-y-2.5 text-xs">
              <li><a href="#/create-company" class="hover:text-white transition-colors font-semibold text-blue-400">Launch Your Storefront</a></li>
              <li><a href="#/seller/dashboard" class="hover:text-white transition-colors">Seller Dashboard</a></li>
              <li><a href="#/seller/products/new" class="hover:text-white transition-colors">List a New Product</a></li>
              <li><a href="#/seller/profile" class="hover:text-white transition-colors">Custom Branding Studio</a></li>
              <li><a href="#/admin/dashboard" class="hover:text-white transition-colors text-indigo-400">Platform Admin Area</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold text-xs uppercase tracking-wider mb-4">Platform & Engine</h4>
            <ul class="space-y-2.5 text-xs">
              <li><span class="text-slate-400">Architecture: HTML5 + CSS3 + Vanilla JS</span></li>
              <li><span class="text-slate-400">Execution: 100% Offline / file:// Ready</span></li>
              <li><span class="text-slate-400">State: Browser LocalStorage</span></li>
              <li><span class="text-slate-400">Zero Dependencies / No Node.js</span></li>
              <li><span class="text-emerald-400 font-semibold">Production Ready v1.0.0</span></li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NEXORA SaaS Inc. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <span>Built with precision & elegance</span>
            <span class="flex items-center gap-1 text-slate-400">
              Made with <span class="text-rose-500">${icon('heart', 'w-3 h-3')}</span> for modern commerce
            </span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function MainLayout(contentHtml) {
  return `
    <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      ${renderNavbar()}
      <main class="flex-1">
        ${contentHtml}
      </main>
      ${renderFooter()}
    </div>
  `;
}

function DashboardLayout(options) {
  const { title, subtitle, actions = '', mode = 'seller', contentHtml } = options;
  const user = AuthStore.getUser();
  const stores = StoreManager.getStores();
  const currentStore = stores.find(s => s.id === (user && user.storeId)) || stores[0];
  const currentHash = window.location.hash || '#/';

  const sellerNav = [
    { name: 'Overview', path: '#/seller/dashboard', iconName: 'layout-dashboard' },
    { name: 'My Products', path: '#/seller/products', iconName: 'package' },
    { name: 'Add Product', path: '#/seller/products/new', iconName: 'plus-circle' },
    { name: 'Business Profile', path: '#/seller/profile', iconName: 'settings' }
  ];

  const adminNav = [
    { name: 'Platform Metrics', path: '#/admin/dashboard', iconName: 'trending-up' },
    { name: 'Marketplace View', path: '#/marketplace', iconName: 'package' }
  ];

  const navItems = mode === 'seller' ? sellerNav : adminNav;

  return `
    <div class="min-h-screen bg-slate-50 flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800 hidden md:flex">
        <div class="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <a href="#/" class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              ${icon('store', 'w-4 h-4')}
            </div>
            <div>
              <span class="font-extrabold text-lg text-white tracking-tight">NEXORA</span>
              <span class="block text-[10px] text-blue-400 font-semibold uppercase tracking-wider -mt-1">${mode === 'seller' ? 'Seller Hub' : 'Admin Hub'}</span>
            </div>
          </a>
        </div>

        ${mode === 'seller' && currentStore ? `
          <div class="p-4 border-b border-slate-800 bg-slate-950/40">
            <div class="flex items-center gap-3">
              <img src="${currentStore.logo}" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%232563eb\\'><rect width=\\'24\\' height=\\'24\\' rx=\\'6\\'/><text x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\' dy=\\'.35em\\' fill=\\'white\\' font-size=\\'11\\' font-weight=\\'bold\\'>N</text></svg>'" alt="${currentStore.name}" class="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-800" />
              <div class="min-w-0 flex-1">
                <p class="text-xs font-semibold text-white truncate">${currentStore.name}</p>
                <a href="#/store/${currentStore.slug}" class="text-[11px] text-blue-400 hover:underline flex items-center gap-1 mt-0.5">
                  <span>View Storefront</span>
                  ${icon('external-link', 'w-3 h-3')}
                </a>
              </div>
            </div>
          </div>
        ` : ''}

        <nav class="flex-1 p-4 space-y-1">
          ${navItems.map(item => `
            <a href="${item.path}" class="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${currentHash === item.path ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
              ${icon(item.iconName, 'w-4 h-4')}
              <span>${item.name}</span>
            </a>
          `).join('')}
        </nav>

        <div class="p-4 border-t border-slate-800">
          <a href="#/" class="flex items-center gap-2 text-xs text-slate-400 hover:text-white py-2">
            ${icon('arrow-left', 'w-4 h-4')}
            <span>Back to Website</span>
          </a>
        </div>
      </aside>

      <!-- Main Panel -->
      <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header class="h-16 bg-white border-b border-slate-200/80 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 class="text-base sm:text-lg font-bold text-slate-900">${title}</h1>
            ${subtitle ? `<p class="text-xs text-slate-500">${subtitle}</p>` : ''}
          </div>
          <div class="flex items-center gap-3">
            ${actions}
            <a href="#/" class="md:hidden p-2 text-slate-600 hover:text-slate-900">${icon('arrow-left', 'w-5 h-5')}</a>
          </div>
        </header>

        <div class="p-6 sm:p-8 flex-1">
          ${contentHtml}
        </div>
      </div>
    </div>
  `;
}


/* ==========================================================================
   6. VIEWS: HOME, MARKETPLACE, PRODUCT DETAILS, STOREFRONT
   ========================================================================== */
function renderHome() {
  const products = StoreManager.getProducts();
  const stores = StoreManager.getStores();
  const categories = INITIAL_CATEGORIES;
  const trendingProducts = products.filter(p => p.status === 'published').slice(0, 8);
  const featuredStores = stores.slice(0, 3);

  const html = `
    <!-- 1. Hero Section -->
    <section class="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 border-b border-slate-200/60">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <!-- Pill Announcement -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-6 shadow-sm">
            <span class="text-blue-600 animate-spin-slow">${icon('sparkles', 'w-3.5 h-3.5')}</span>
            <span>The Next Generation Multi-Vendor Commerce Platform</span>
            <span class="hidden sm:inline text-blue-400">|</span>
            <span class="hidden sm:inline font-normal text-blue-600">Explore New & Pre-Owned</span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Your Business.
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Your Brand.
            </span>
            Your Store.
          </h1>

          <!-- Subtitle -->
          <p class="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            NEXORA unifies visionary independent makers, premium electronics brands, and discerning shoppers on an enterprise-grade multi-vendor SaaS ecosystem.
          </p>

          <!-- Search Form -->
          <form onsubmit="handleHeroSearch(event)" class="mt-8 max-w-xl mx-auto">
            <div class="relative flex items-center bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-slate-200/90 p-1.5 transition-all">
              <span class="text-slate-400 ml-3.5 shrink-0">${icon('search', 'w-5 h-5')}</span>
              <input type="text" id="hero-search-input" placeholder="Search audio gear, mechanical keyboards, timepieces, cameras..." class="w-full bg-transparent px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none" />
              <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-600/30 shrink-0">
                <span>Search</span>
                ${icon('arrow-right', 'w-3.5 h-3.5')}
              </button>
            </div>
            <div class="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 flex-wrap">
              <span class="text-slate-400">Popular:</span>
              <button type="button" onclick="navigateTo('#/marketplace?search=Planar%20Headphones')" class="hover:text-blue-600 hover:underline">Planar Headphones</button>
              <button type="button" onclick="navigateTo('#/marketplace?search=Mechanical%20Keyboards')" class="hover:text-blue-600 hover:underline">Mechanical Keyboards</button>
              <button type="button" onclick="navigateTo('#/marketplace?search=Vintage%20Watches')" class="hover:text-blue-600 hover:underline">Vintage Watches</button>
              <button type="button" onclick="navigateTo('#/marketplace?search=Minimalist%20Desk')" class="hover:text-blue-600 hover:underline">Minimalist Desk</button>
            </div>
          </form>

          <!-- Buttons -->
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href="#/marketplace" class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group">
              <span>Explore Marketplace</span>
              <span class="group-hover:translate-x-1 transition-transform">${icon('arrow-right', 'w-4 h-4')}</span>
            </a>
            <a href="#/create-company" class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2">
              <span class="text-blue-600">${icon('zap', 'w-4 h-4')}</span>
              <span>Start Your Business</span>
            </a>
          </div>

          <!-- Micro Stats -->
          <div class="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p class="text-2xl font-extrabold text-slate-900">$2.4M+</p>
              <p class="text-xs text-slate-500 font-medium">Merchant Volume</p>
            </div>
            <div>
              <p class="text-2xl font-extrabold text-slate-900">120+</p>
              <p class="text-xs text-slate-500 font-medium">Curated Brands</p>
            </div>
            <div>
              <p class="text-2xl font-extrabold text-slate-900">99.8%</p>
              <p class="text-xs text-slate-500 font-medium">Buyer Satisfaction</p>
            </div>
            <div>
              <p class="text-2xl font-extrabold text-slate-900">0%</p>
              <p class="text-xs text-slate-500 font-medium">Setup Friction</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Categories -->
    <section class="py-16 bg-white border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Discover By Category</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Curated Collections</h2>
          </div>
          <a href="#/marketplace" class="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
            <span>View all categories</span>
            <span class="group-hover:translate-x-0.5 transition-transform">${icon('arrow-right', 'w-3.5 h-3.5')}</span>
          </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          ${categories.map(cat => `
            <a href="#/marketplace?category=${cat.slug}" class="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-subtle hover:shadow-card-hover transition-all">
              <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <div class="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 class="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">${cat.name}</h3>
                <p class="text-[11px] text-slate-300 font-medium mt-0.5">${cat.itemCount} products</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 3. Trending Products -->
    <section class="py-16 bg-slate-50 border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div class="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              ${icon('trending-up', 'w-3.5 h-3.5')}
              <span>Trending Today</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Featured Marketplace Drops</h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">Explore brand-new releases and certified pre-owned treasures with verified seller backing.</p>
          </div>
          <a href="#/marketplace" class="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-blue-600 transition-colors shadow-sm self-start sm:self-auto">
            Explore All (${products.length})
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${trendingProducts.map(p => ProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- 4. Featured Stores -->
    <section id="stores" class="py-16 bg-white border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Entrepreneur Showcases</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Featured Seller Storefronts</h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-2">Independent creators and established ateliers powered by NEXORA’s multi-vendor commerce engine.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${featuredStores.map(s => StoreCard(s)).join('')}
        </div>
        <div class="mt-10 text-center">
          <a href="#/create-company" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 underline underline-offset-4">
            <span>Want to feature your brand here? Open your storefront</span>
            ${icon('arrow-up-right', 'w-4 h-4')}
          </a>
        </div>
      </div>
    </section>

    <!-- 5. How It Works -->
    <section id="how-it-works" class="py-20 bg-slate-50 border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Seamless Commerce Workflow</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">How NEXORA Works</h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-2">Engineered to make buying transparent and running an online brand effortless.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Shoppers -->
          <div class="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">01</div>
              <div>
                <h3 class="text-lg font-bold text-slate-900">For Shoppers & Collectors</h3>
                <p class="text-xs text-slate-500">Uncompromised authenticity and smooth purchasing</p>
              </div>
            </div>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">${icon('search', 'w-4 h-4')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-slate-900">1. Discover Unique Goods</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">Search across hundreds of independent brands or filter specifically by condition (Factory New or Certified Pre-Owned).</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">${icon('shield-check', 'w-4 h-4')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-slate-900">2. Verified Seller Transparency</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">Inspect seller ratings, condition breakdown, warranty details, and direct storefront policies before you buy.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">${icon('package', 'w-4 h-4')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-slate-900">3. Unified Multi-Vendor Checkout</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-relaxed">Bundle products from multiple independent stores into a single shopping cart with real-time order tracking.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Merchants -->
          <div class="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-elevated">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">02</div>
              <div>
                <h3 class="text-lg font-bold text-white">For Merchants & Brands</h3>
                <p class="text-xs text-slate-400">Launch a brand without building commerce infrastructure</p>
              </div>
            </div>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">${icon('zap', 'w-4 h-4')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-white">1. Instant Company Setup</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">Claim your unique store slug, upload your brand logo, pick your custom accent palette, and preview your storefront in minutes.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">${icon('layers', 'w-4 h-4')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-white">2. Full Inventory Control</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">Publish products with multiple photos, detailed technical specifications, condition notes (New vs. Used), and stock counts.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">${icon('bar-chart3', 'w-4 h-4')}</div>
                <div>
                  <h4 class="text-sm font-semibold text-white">3. Real-Time Analytics & Growth</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">Track revenue, manage active orders, monitor inventory health, and leverage NEXORA marketplace traffic directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Entrepreneur Benefits -->
    <section class="py-20 bg-white border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Built For Serious Growth</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Why High-Growth Brands Choose NEXORA</h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-2">The power of a standalone Shopify store combined with the distribution of a global marketplace.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-blue-100/60 text-blue-600 flex items-center justify-center mb-5">${icon('globe-2', 'w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Dedicated Brand Storefronts</h3>
            <p class="text-xs text-slate-500 leading-relaxed">Every merchant receives their own branded URL (<code>#/store/:slug</code>), custom header banner, brand accent color styling, and curated catalogue.</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-indigo-100/60 text-indigo-600 flex items-center justify-center mb-5">${icon('shield-check', 'w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Condition Transparency</h3>
            <p class="text-xs text-slate-500 leading-relaxed">First-class support for both factory new inventory and certified pre-owned/used goods with condition grading and warranty notes.</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-emerald-100/60 text-emerald-600 flex items-center justify-center mb-5">${icon('bar-chart3', 'w-6 h-6')}</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Full Seller Command Center</h3>
            <p class="text-xs text-slate-500 leading-relaxed">Manage stock levels, draft unpublished items, edit pricing in real-time, and analyze orders via a modern Linear/Stripe-style dashboard.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. High-Impact CTA -->
    <section class="py-20 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      <div class="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span class="text-xs font-semibold text-blue-400 uppercase tracking-widest">Launch Your Brand Today</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">Ready to build your digital commerce empire?</h2>
        <p class="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Create your company storefront in under 3 minutes. No technical hurdles, full brand autonomy, and immediate marketplace access.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#/create-company" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group">
            <span>Create Your Company Store</span>
            <span class="group-hover:translate-x-1 transition-transform">${icon('arrow-right', 'w-4 h-4')}</span>
          </a>
          <a href="#/marketplace" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all">
            Browse Marketplace
          </a>
        </div>
      </div>
    </section>
  `;

  return MainLayout(html);
}

function renderMarketplace(params = {}) {
  const allProducts = StoreManager.getProducts();
  const stores = StoreManager.getStores();
  const categories = INITIAL_CATEGORIES;

  const searchTerm = (params.search || '').trim().toLowerCase();
  const selectedCat = params.category || 'all';
  const selectedCond = params.condition || 'all';
  const selectedStore = params.store || 'all';
  const sortBy = params.sort || 'featured';
  const maxPrice = Number(params.maxPrice || 6500);

  const filtered = allProducts.filter(p => {
    if (p.status !== 'published') return false;
    if (searchTerm) {
      const match = p.title.toLowerCase().includes(searchTerm) ||
                    p.description.toLowerCase().includes(searchTerm) ||
                    p.storeName.toLowerCase().includes(searchTerm) ||
                    p.category.toLowerCase().includes(searchTerm);
      if (!match) return false;
    }
    if (selectedCat !== 'all') {
      const catObj = categories.find(c => c.slug === selectedCat);
      const catName = (catObj ? catObj.name : selectedCat).toLowerCase();
      if (!p.category.toLowerCase().includes(catName)) return false;
    }
    if (selectedCond !== 'all' && p.condition.toLowerCase() !== selectedCond.toLowerCase()) {
      return false;
    }
    if (selectedStore !== 'all' && p.storeId !== selectedStore) {
      return false;
    }
    if (p.price > maxPrice) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return 0;
  });

  const activeCount = (searchTerm ? 1 : 0) + (selectedCat !== 'all' ? 1 : 0) + (selectedCond !== 'all' ? 1 : 0) + (selectedStore !== 'all' ? 1 : 0) + (maxPrice < 6500 ? 1 : 0);

  const html = `
    <div class="bg-white border-b border-slate-200/80 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Global Marketplace</h1>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">Explore authentic goods, hardware, and accessories curated from verified merchants.</p>
        </div>
        <div class="relative w-full md:w-80">
          <input type="text" id="marketplace-search-input" value="${params.search || ''}" placeholder="Search products or stores..." onkeyup="if(event.key==='Enter') applyMarketplaceFilter('search', this.value)" class="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-xl text-sm border border-transparent focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
          <span class="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">${icon('search', 'w-4 h-4')}</span>
          ${params.search ? `<button onclick="applyMarketplaceFilter('search', '')" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">${icon('x', 'w-4 h-4')}</button>` : ''}
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Sidebar Filters -->
        <aside class="hidden lg:block w-64 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle shrink-0 sticky top-24">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="text-slate-700">${icon('sliders-horizontal', 'w-4 h-4')}</span>
              <h3 class="text-sm font-bold text-slate-900">Filters</h3>
              ${activeCount > 0 ? `<span class="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">${activeCount}</span>` : ''}
            </div>
            ${activeCount > 0 ? `<button onclick="resetMarketplaceFilters()" class="text-xs font-semibold text-blue-600 hover:underline">Reset</button>` : ''}
          </div>

          <!-- Category -->
          <div class="py-4 border-b border-slate-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Categories</h4>
            <div class="space-y-1 text-xs">
              <button onclick="applyMarketplaceFilter('category', 'all')" class="w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors ${selectedCat === 'all' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}">All Categories</button>
              ${categories.map(c => `
                <button onclick="applyMarketplaceFilter('category', '${c.slug}')" class="w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors ${selectedCat === c.slug ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'} flex items-center justify-between">
                  <span>${c.name}</span>
                  <span class="text-[10px] text-slate-400 font-normal">(${c.itemCount})</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Condition -->
          <div class="py-4 border-b border-slate-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Condition</h4>
            <div class="space-y-1.5 text-xs">
              <label class="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input type="radio" name="condition" onchange="applyMarketplaceFilter('condition', 'all')" ${selectedCond === 'all' ? 'checked' : ''} class="text-blue-600" />
                <span>All Conditions</span>
              </label>
              <label class="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input type="radio" name="condition" onchange="applyMarketplaceFilter('condition', 'New')" ${selectedCond === 'New' ? 'checked' : ''} class="text-blue-600" />
                <span class="font-medium">Factory New</span>
              </label>
              <label class="flex items-center gap-2 text-slate-700 cursor-pointer">
                <input type="radio" name="condition" onchange="applyMarketplaceFilter('condition', 'Used')" ${selectedCond === 'Used' ? 'checked' : ''} class="text-blue-600" />
                <span class="font-medium text-amber-800">Certified Pre-Owned</span>
              </label>
            </div>
          </div>

          <!-- Stores -->
          <div class="py-4 border-b border-slate-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Merchant Ateliers</h4>
            <div class="space-y-1 text-xs">
              <button onclick="applyMarketplaceFilter('store', 'all')" class="w-full text-left px-2 py-1 rounded text-xs ${selectedStore === 'all' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'}">All Merchants</button>
              ${stores.map(s => `
                <button onclick="applyMarketplaceFilter('store', '${s.id}')" class="w-full text-left px-2 py-1 rounded text-xs truncate ${selectedStore === s.id ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'}">${s.name}</button>
              `).join('')}
            </div>
          </div>

          <!-- Price Slider -->
          <div class="pt-4">
            <div class="flex items-center justify-between text-xs mb-2">
              <span class="font-bold uppercase tracking-wider text-slate-400">Max Price</span>
              <span class="font-bold text-slate-900 font-mono" id="price-slider-display">$${maxPrice.toLocaleString()}</span>
            </div>
            <input type="range" min="50" max="6500" step="50" value="${maxPrice}" oninput="document.getElementById('price-slider-display').innerText = '$' + Number(this.value).toLocaleString()" onchange="applyMarketplaceFilter('maxPrice', this.value)" class="w-full accent-blue-600" />
          </div>
        </aside>

        <!-- Product Grid Area -->
        <div class="flex-1 min-w-0 w-full">
          <!-- Sort & Count Row -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-subtle">
            <span class="text-xs font-semibold text-slate-600">Showing <span class="text-slate-900 font-bold">${filtered.length}</span> products</span>
            <div class="flex items-center gap-3">
              <span class="text-xs text-slate-400 font-medium hidden sm:inline">Sort by:</span>
              <select onchange="applyMarketplaceFilter('sort', this.value)" class="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="featured" ${sortBy === 'featured' ? 'selected' : ''}>Featured</option>
                <option value="price-low" ${sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-high" ${sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
                <option value="newest" ${sortBy === 'newest' ? 'selected' : ''}>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <!-- Cards or Empty State -->
          ${filtered.length > 0 ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${filtered.map(p => ProductCard(p)).join('')}
            </div>
          ` : `
            <div class="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-subtle">
              <div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">${icon('search', 'w-8 h-8')}</div>
              <h3 class="text-lg font-bold text-slate-900">No products match your criteria</h3>
              <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Try clearing selected filters, adjusting the max price slider, or searching for broader terms.</p>
              <button onclick="resetMarketplaceFilters()" class="mt-6 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm">Reset All Filters</button>
            </div>
          `}
        </div>
      </div>
    </div>
  `;

  return MainLayout(html);
}

function renderProductDetails(productId) {
  const product = StoreManager.getProductById(productId);
  if (!product) {
    return MainLayout(`
      <div class="max-w-4xl mx-auto px-4 py-24 text-center">
        <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-500">${icon('info', 'w-8 h-8')}</div>
        <h2 class="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p class="text-slate-500 text-sm mt-2">The product you are looking for may have been removed or is temporarily unavailable.</p>
        <a href="#/marketplace" class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors">Back to Marketplace</a>
      </div>
    `);
  }

  const stores = StoreManager.getStores();
  const store = stores.find(s => s.id === product.storeId || s.name === product.storeName) || stores[0];
  const allProducts = StoreManager.getProducts();
  const related = allProducts.filter(p => p.id !== product.id && (p.category === product.category || p.storeId === product.storeId)).slice(0, 4);
  const discountPercent = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  const html = `
    <!-- Breadcrumbs -->
    <div class="bg-white border-b border-slate-200/80 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" class="hover:text-blue-600">Home</a>
          <span>${icon('chevron-right', 'w-3 h-3')}</span>
          <a href="#/marketplace" class="hover:text-blue-600">Marketplace</a>
          <span>${icon('chevron-right', 'w-3 h-3')}</span>
          <span class="text-slate-800 font-medium truncate max-w-xs">${product.title}</span>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Gallery -->
        <div class="space-y-4">
          <div class="aspect-square w-full rounded-3xl bg-slate-100 overflow-hidden border border-slate-200/80 shadow-subtle relative">
            <img id="main-product-image" src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-cover object-center" />
            <div class="absolute top-4 left-4 flex gap-2">
              ${ConditionBadge(product.condition, product.conditionDetail, 'md')}
              ${discountPercent > 0 ? `<span class="bg-rose-500 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">Save ${discountPercent}%</span>` : ''}
            </div>
          </div>
          ${product.images.length > 1 ? `
            <div class="flex items-center gap-3 overflow-x-auto pb-2">
              ${product.images.map((img, idx) => `
                <button onclick="document.getElementById('main-product-image').src='${img}'" class="w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-200 hover:border-blue-600 transition-colors shrink-0">
                  <img src="${img}" alt="Thumbnail ${idx}" class="w-full h-full object-cover" />
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Product Details Panel -->
        <div class="space-y-6">
          <div>
            <!-- Storefront Badge -->
            <div class="flex items-center gap-2 mb-3">
              <a href="#/store/${store.slug}" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors">
                <img src="${store.logo}" alt="${store.name}" class="w-4 h-4 rounded-full object-cover" />
                <span>${store.name}</span>
                ${store.verified ? `<span class="text-blue-600">${icon('shield-check', 'w-3.5 h-3.5')}</span>` : ''}
              </a>
              <span class="text-xs text-slate-400">•</span>
              <span class="text-xs text-slate-500 uppercase tracking-wider font-semibold">${product.category}</span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">${product.title}</h1>
            <div class="mt-3 flex items-center gap-4">
              ${StarRating(product.rating, product.reviewCount, 'md')}
              <span class="text-xs text-emerald-600 font-semibold flex items-center gap-1">${icon('check', 'w-3.5 h-3.5')} Verified Authentic</span>
            </div>
          </div>

          <!-- Price Row -->
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div class="flex items-baseline gap-3">
              <span class="text-3xl font-black text-slate-900 font-mono">$${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="text-base text-slate-400 line-through">$${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <p class="text-xs text-slate-500 mt-1">
              ${product.conditionDetail ? `<span class="text-slate-700 font-medium">${product.conditionDetail}</span>` : 'Brand New In Box'}
            </p>
          </div>

          <p class="text-sm text-slate-600 leading-relaxed">${product.description}</p>

          <!-- Key Features Checklist -->
          ${product.features && product.features.length > 0 ? `
            <div class="space-y-2 pt-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Specifications & Highlights</h4>
              <ul class="space-y-2 text-xs text-slate-700">
                ${product.features.map(f => `
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 shrink-0 mt-0.5">${icon('check', 'w-3.5 h-3.5')}</span>
                    <span>${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Quantity & Purchase CTAs -->
          <div class="pt-4 border-t border-slate-200/80 space-y-4">
            <div class="flex items-center gap-4">
              <div class="flex items-center border border-slate-200 rounded-xl bg-white shadow-2xs">
                <button onclick="decrementDetailQty()" class="px-3.5 py-2 text-slate-600 hover:text-slate-900 font-bold text-sm">-</button>
                <span id="detail-qty-val" class="px-3 font-semibold text-sm text-slate-900">1</span>
                <button onclick="incrementDetailQty(${product.stock})" class="px-3.5 py-2 text-slate-600 hover:text-slate-900 font-bold text-sm">+</button>
              </div>
              <span class="text-xs text-slate-500">
                ${product.stock > 0 ? `<span class="text-emerald-600 font-semibold">${product.stock} units available</span>` : '<span class="text-rose-600 font-semibold">Out of stock</span>'}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <button onclick="handleDetailAddToCart('${product.id}')" ${product.stock <= 0 ? 'disabled' : ''} class="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
                ${icon('shopping-bag', 'w-4 h-4')}
                <span>Add to Cart</span>
              </button>
              <button onclick="handleDetailBuyNow('${product.id}')" ${product.stock <= 0 ? 'disabled' : ''} class="flex-1 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2">
                ${icon('zap', 'w-4 h-4 text-blue-400')}
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Tabs -->
      <div class="mt-16 bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden">
        <div class="flex border-b border-slate-100 overflow-x-auto">
          <button onclick="switchProductTab('details')" id="tab-btn-details" class="px-6 py-4 text-xs font-bold border-b-2 border-blue-600 text-blue-600 transition-colors whitespace-nowrap">Overview & Details</button>
          <button onclick="switchProductTab('specs')" id="tab-btn-specs" class="px-6 py-4 text-xs font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Technical Specifications</button>
          <button onclick="switchProductTab('reviews')" id="tab-btn-reviews" class="px-6 py-4 text-xs font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Customer Reviews (${product.reviewCount})</button>
          <button onclick="switchProductTab('shipping')" id="tab-btn-shipping" class="px-6 py-4 text-xs font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Shipping & Authenticity</button>
        </div>

        <div class="p-6 sm:p-8">
          <!-- Details Pane -->
          <div id="tab-pane-details" class="space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 class="font-bold text-slate-900 text-sm">Product Overview</h4>
            <p>${product.description}</p>
            <p>Every piece is inspected, certified, and dispatched directly from ${store.name}'s verified workshop under strict condition standards.</p>
          </div>

          <!-- Specs Pane -->
          <div id="tab-pane-specs" class="hidden space-y-4 text-xs">
            <h4 class="font-bold text-slate-900 text-sm">Technical Specifications</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span class="text-slate-400 block text-[10px] uppercase font-semibold">Condition Rating</span>
                <span class="font-bold text-slate-900 text-xs">${product.condition} (${product.conditionDetail || 'Standard'})</span>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span class="text-slate-400 block text-[10px] uppercase font-semibold">Category</span>
                <span class="font-bold text-slate-900 text-xs">${product.category}</span>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span class="text-slate-400 block text-[10px] uppercase font-semibold">Merchant Atelier</span>
                <span class="font-bold text-slate-900 text-xs">${store.name} (${store.location})</span>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span class="text-slate-400 block text-[10px] uppercase font-semibold">Warranty Policy</span>
                <span class="font-bold text-slate-900 text-xs">Full Seller Authenticity & 3-Year Protection</span>
              </div>
            </div>
          </div>

          <!-- Reviews Pane -->
          <div id="tab-pane-reviews" class="hidden space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h4 class="font-bold text-slate-900 text-sm">Customer Feedback</h4>
                <p class="text-xs text-slate-500">Real verified purchases from NEXORA shoppers.</p>
              </div>
              ${StarRating(product.rating, product.reviewCount, 'md')}
            </div>

            <!-- Review List -->
            <div class="space-y-4" id="product-reviews-list">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-xs text-slate-900">Julian Thorne</span>
                  <span class="text-[10px] text-slate-400">2 days ago</span>
                </div>
                <div class="flex">${StarRating(5, undefined, 'sm')}</div>
                <p class="text-xs text-slate-600">Build quality is absolute perfection. Exactly as described by the seller, packaged with supreme care.</p>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-xs text-slate-900">Clara Oswald</span>
                  <span class="text-[10px] text-slate-400">1 week ago</span>
                </div>
                <div class="flex">${StarRating(5, undefined, 'sm')}</div>
                <p class="text-xs text-slate-600">Super fast shipping from the merchant. Condition report was 100% accurate. Will definitely shop from this store again.</p>
              </div>
            </div>

            <!-- Add Review Form -->
            <div class="pt-4 border-t border-slate-100 space-y-3">
              <h5 class="font-bold text-xs text-slate-800">Leave a Review</h5>
              <form onsubmit="handleAddReview(event)" class="space-y-3 text-xs">
                <div class="grid grid-cols-2 gap-3">
                  <input type="text" id="review-author" required placeholder="Your Name" class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <select id="review-rating" class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="5">5 Stars (Flawless)</option>
                    <option value="4">4 Stars (Great)</option>
                    <option value="3">3 Stars (Good)</option>
                  </select>
                </div>
                <textarea id="review-comment" required rows="2" placeholder="Write your honest impressions of this piece..." class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" class="px-5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold transition-colors">Submit Review</button>
              </form>
            </div>
          </div>

          <!-- Shipping Pane -->
          <div id="tab-pane-shipping" class="hidden space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 class="font-bold text-slate-900 text-sm">Dispatched With White-Glove Care</h4>
            <p>Every product ordered through NEXORA includes tracked, signature-confirmed worldwide freight.</p>
            <ul class="space-y-2 text-slate-700">
              <li class="flex items-center gap-2"><span class="text-emerald-600">${icon('check', 'w-3.5 h-3.5')}</span> Orders dispatched within 24-48 business hours.</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600">${icon('check', 'w-3.5 h-3.5')}</span> Full 30-day money-back guarantee if not 100% as described.</li>
              <li class="flex items-center gap-2"><span class="text-emerald-600">${icon('check', 'w-3.5 h-3.5')}</span> Direct merchant communication channels for bespoke modifications.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length > 0 ? `
        <div class="mt-20 pt-12 border-t border-slate-200/80">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-xl font-extrabold text-slate-900 tracking-tight">More From This Category</h3>
            <a href="#/marketplace" class="text-xs font-semibold text-blue-600 hover:underline">Explore All</a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${related.map(r => ProductCard(r)).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  return MainLayout(html);
}

function renderStorefront(slug) {
  const store = StoreManager.getStoreBySlug(slug);
  if (!store) {
    return MainLayout(`
      <div class="max-w-4xl mx-auto px-4 py-24 text-center">
        <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-500">${icon('info', 'w-8 h-8')}</div>
        <h2 class="text-2xl font-bold text-slate-900">Storefront Not Found</h2>
        <p class="text-slate-500 text-sm mt-2">The merchant storefront you are looking for does not exist.</p>
        <a href="#/marketplace" class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors">Explore Marketplace</a>
      </div>
    `);
  }

  const allProducts = StoreManager.getProducts();
  const storeProducts = allProducts.filter(p => (p.storeId === store.id || p.storeName.toLowerCase() === store.name.toLowerCase()) && p.status === 'published');

  const html = `
    <!-- Hero Banner -->
    <div class="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
      <img src="${store.banner}" alt="${store.name} Banner" class="w-full h-full object-cover opacity-80" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
    </div>

    <!-- Store Profile Identity Card -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 relative z-10 pb-12">
      <div class="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img src="${store.logo}" alt="${store.name}" class="w-24 h-24 rounded-2xl object-cover ring-4 ring-white shadow-lg bg-white" />
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">${store.name}</h1>
                ${store.verified ? `<span class="text-blue-600">${icon('shield-check', 'w-5 h-5')}</span>` : ''}
              </div>
              <p class="text-xs text-slate-500 max-w-xl leading-relaxed">${store.description}</p>
              <div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span class="flex items-center gap-1">${icon('map-pin', 'w-3.5 h-3.5 text-slate-400')} ${store.location}</span>
                <span class="flex items-center gap-1">${icon('calendar', 'w-3.5 h-3.5 text-slate-400')} Joined ${store.joinedDate}</span>
                ${store.website ? `<a href="${store.website}" target="_blank" class="flex items-center gap-1 text-blue-600 hover:underline">${icon('globe', 'w-3.5 h-3.5')} Website</a>` : ''}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right">
              ${StarRating(store.rating, store.reviewCount, 'md')}
              <span class="text-[11px] text-slate-400 block mt-0.5">${store.totalSales || 300}+ verified sales</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Store Products Section -->
      <div class="mt-12">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">Products by ${store.name}</h2>
            <p class="text-xs text-slate-500 mt-1">Showing all authentic items curated by this merchant.</p>
          </div>
          <span class="text-xs font-semibold text-slate-600">${storeProducts.length} items</span>
        </div>
        ${storeProducts.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${storeProducts.map(p => ProductCard(p)).join('')}
          </div>
        ` : `
          <div class="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <p class="text-sm text-slate-500">No active products published by this store at the moment.</p>
          </div>
        `}
      </div>
    </div>
  `;

  return MainLayout(html);
}


/* ==========================================================================
   7. VIEWS: CART, ORDERS, CREATE COMPANY, AUTH (LOGIN/REGISTER)
   ========================================================================== */
let activeCartDiscount = 0;

function renderCart() {
  const items = CartStore.getItems();
  const totals = CartStore.getTotals(activeCartDiscount);

  if (items.length === 0) {
    return MainLayout(`
      <div class="max-w-4xl mx-auto px-4 py-24 text-center">
        <div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">${icon('shopping-bag', 'w-8 h-8')}</div>
        <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">Your Cart is Empty</h2>
        <p class="text-xs sm:text-sm text-slate-500 mt-2 max-w-sm mx-auto">Explore our curated collections of audio gear, electronics, mechanical peripherals, and timepieces.</p>
        <a href="#/marketplace" class="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/30">
          <span>Explore Marketplace</span>
          ${icon('arrow-right', 'w-4 h-4')}
        </a>
      </div>
    `);
  }

  const html = `
    <div class="bg-white border-b border-slate-200/80 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Shopping Cart</h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">Review your items across verified independent merchants.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <!-- Cart Items List -->
        <div class="lg:col-span-2 space-y-4">
          <div class="bg-white rounded-3xl border border-slate-200/80 shadow-subtle divide-y divide-slate-100 overflow-hidden">
            ${items.map(item => `
              <div class="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                  <img src="${item.product.images[0]}" alt="${item.product.title}" class="w-20 h-20 rounded-2xl object-cover bg-slate-100 shrink-0" />
                  <div>
                    <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">${item.product.storeName}</span>
                    <a href="#/product/${item.product.id}" class="font-semibold text-sm text-slate-900 hover:text-blue-600 line-clamp-1">${item.product.title}</a>
                    <div class="mt-1 flex items-center gap-2">
                      ${ConditionBadge(item.product.condition, item.product.conditionDetail)}
                      <span class="text-xs font-bold text-slate-900 font-mono">$${item.product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-6 self-end sm:self-center">
                  <div class="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                    <button onclick="updateCartItemQty('${item.product.id}', ${item.quantity - 1})" class="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-bold">-</button>
                    <span class="px-2.5 text-xs font-semibold text-slate-900">${item.quantity}</span>
                    <button onclick="updateCartItemQty('${item.product.id}', ${item.quantity + 1})" class="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-bold">+</button>
                  </div>
                  <span class="font-bold text-slate-900 font-mono text-sm w-20 text-right">$${(item.product.price * item.quantity).toLocaleString()}</span>
                  <button onclick="removeCartItem('${item.product.id}')" class="text-slate-400 hover:text-rose-600 p-1 transition-colors" title="Remove item">
                    ${icon('trash-2', 'w-4 h-4')}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Coupon Code Box -->
          <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <span class="text-blue-600">${icon('tag', 'w-4 h-4')}</span>
              <span class="text-xs font-semibold text-slate-700">Have a promotional coupon?</span>
              <span class="text-[11px] text-slate-400 hidden sm:inline">(Try "NEXORA10")</span>
            </div>
            <form onsubmit="handleApplyCoupon(event)" class="flex gap-2 w-full sm:w-auto">
              <input type="text" id="coupon-code-input" placeholder="NEXORA10" class="uppercase text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
              <button type="submit" class="bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors">Apply</button>
            </form>
          </div>
        </div>

        <!-- Order Summary Card -->
        <div class="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-card space-y-6">
          <h3 class="font-extrabold text-base text-slate-900 tracking-tight pb-3 border-b border-slate-100">Order Summary</h3>
          <div class="space-y-3 text-xs">
            <div class="flex justify-between text-slate-600">
              <span>Subtotal (${totals.totalItems} items)</span>
              <span class="font-mono font-semibold text-slate-900">$${totals.subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-slate-600">
              <span>Standard Shipping</span>
              <span class="font-mono font-semibold text-slate-900">${totals.shipping === 0 ? '<span class="text-emerald-600">FREE</span>' : '$' + totals.shipping.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-slate-600">
              <span>Estimated Sales Tax (8%)</span>
              <span class="font-mono font-semibold text-slate-900">$${totals.estimatedTax.toFixed(2)}</span>
            </div>
            ${totals.discount > 0 ? `
              <div class="flex justify-between text-emerald-600 font-semibold">
                <span>Coupon Discount (10%)</span>
                <span class="font-mono">-$${totals.discount.toFixed(2)}</span>
              </div>
            ` : ''}
            <div class="pt-3 border-t border-slate-100 flex justify-between items-baseline text-sm">
              <span class="font-extrabold text-slate-900">Total</span>
              <span class="font-black text-xl text-slate-900 font-mono">$${totals.total.toFixed(2)}</span>
            </div>
          </div>

          <button onclick="openCheckoutModal()" class="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
            ${icon('credit-card', 'w-4 h-4')}
            <span>Proceed to Checkout</span>
          </button>

          <div class="text-[11px] text-slate-400 space-y-1.5 pt-2">
            <p class="flex items-center gap-1.5">${icon('lock', 'w-3 h-3 text-slate-500')} 256-bit encrypted checkout</p>
            <p class="flex items-center gap-1.5">${icon('truck', 'w-3 h-3 text-slate-500')} Free delivery on orders over $150</p>
          </div>
        </div>
      </div>
    </div>
  `;

  return MainLayout(html);
}

function openCheckoutModal() {
  const user = AuthStore.getUser();
  const totals = CartStore.getTotals(activeCartDiscount);

  const modalHtml = `
    <div class="p-6 sm:p-8 space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h3 class="text-lg font-extrabold text-slate-900 tracking-tight">Express Checkout</h3>
          <p class="text-xs text-slate-500">Demo payment & multi-vendor order placement.</p>
        </div>
        <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600">${icon('x', 'w-5 h-5')}</button>
      </div>

      <form onsubmit="handlePlaceOrder(event)" class="space-y-4 text-xs">
        <div>
          <label class="block font-semibold text-slate-700 mb-1">Full Name</label>
          <input type="text" id="checkout-name" required value="${user ? user.name : 'Marcus Vance'}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block font-semibold text-slate-700 mb-1">Shipping Street Address</label>
          <input type="text" id="checkout-street" required value="742 Evergreen Terrace, Suite 4B" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-slate-700 mb-1">City</label>
            <input type="text" id="checkout-city" required value="Portland" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block font-semibold text-slate-700 mb-1">State / Province</label>
            <input type="text" id="checkout-state" required value="OR" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-slate-700 mb-1">Postal Code</label>
            <input type="text" id="checkout-zip" required value="97201" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block font-semibold text-slate-700 mb-1">Country</label>
            <input type="text" id="checkout-country" required value="United States" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <label class="block font-semibold text-slate-700 mb-1">Demo Card Number</label>
          <input type="text" required value="•••• •••• •••• 4242" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
          <span class="font-bold text-slate-800">Total to Charge:</span>
          <span class="font-black text-blue-600 font-mono text-lg">$${totals.total.toFixed(2)}</span>
        </div>

        <button type="submit" id="checkout-submit-btn" class="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
          ${icon('lock', 'w-4 h-4')}
          <span>Pay & Complete Order</span>
        </button>
      </form>
    </div>
  `;
  openModal(modalHtml);
}

function handlePlaceOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('checkout-submit-btn');
  if (btn) {
    btn.innerHTML = '<span>Authorizing Transaction...</span>';
    btn.disabled = true;
  }
  const fullName = document.getElementById('checkout-name').value;
  const street = document.getElementById('checkout-street').value;
  const city = document.getElementById('checkout-city').value;
  const state = document.getElementById('checkout-state').value;
  const postalCode = document.getElementById('checkout-zip').value;
  const country = document.getElementById('checkout-country').value;

  const items = CartStore.getItems();
  const totals = CartStore.getTotals(activeCartDiscount);

  const orderItems = items.map(i => ({
    productId: i.product.id,
    productTitle: i.product.title,
    price: i.product.price,
    quantity: i.quantity,
    image: i.product.images[0],
    storeName: i.product.storeName
  }));

  setTimeout(() => {
    StoreManager.addOrder({
      customerName: fullName,
      customerEmail: 'customer@design.co',
      items: orderItems,
      subtotal: totals.subtotal,
      shipping: totals.shipping,
      tax: totals.estimatedTax,
      total: totals.total,
      status: 'Processing',
      shippingAddress: { fullName, street, city, state, postalCode, country }
    });

    CartStore.clearCart();
    activeCartDiscount = 0;
    closeModal();
    showToast('Order confirmed! Receipt generated.', 'success');
    navigateTo('#/orders');
  }, 1000);
}

function renderOrders() {
  const orders = StoreManager.getOrders();

  const html = `
    <div class="bg-white border-b border-slate-200/80 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Customer Orders</h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">Track multi-vendor fulfillment, tracking numbers, and receipt history.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      ${orders.length > 0 ? `
        <div class="space-y-6">
          ${orders.map(order => `
            <div class="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden">
              <div class="bg-slate-50/80 border-b border-slate-200/70 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                  <div>
                    <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Order Placed</span>
                    <span class="font-semibold text-slate-900">${order.date}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Total Amount</span>
                    <span class="font-bold text-slate-900 font-mono text-sm">$${order.total.toFixed(2)}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">Ship To</span>
                    <span class="font-semibold text-slate-900">${order.customerName}</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  ${OrderStatusBadge(order.status)}
                  <button onclick="viewOrderDetails('${order.id}')" class="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-2xs flex items-center gap-1.5">
                    ${icon('eye', 'w-3.5 h-3.5')}
                    <span>Details</span>
                  </button>
                </div>
              </div>

              <div class="p-6 divide-y divide-slate-100">
                ${order.items.map(item => `
                  <div class="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                      <img src="${item.image}" alt="${item.productTitle}" class="w-14 h-14 rounded-xl object-cover bg-slate-100 shrink-0" />
                      <div>
                        <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">${item.storeName}</span>
                        <h4 class="font-semibold text-xs sm:text-sm text-slate-900 line-clamp-1">${item.productTitle}</h4>
                        <span class="text-xs text-slate-500">Qty: ${item.quantity}</span>
                      </div>
                    </div>
                    <span class="font-bold text-slate-900 font-mono text-sm">$${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-subtle">
          <p class="text-slate-500 text-sm">No orders recorded yet.</p>
        </div>
      `}
    </div>
  `;

  return MainLayout(html);
}

function viewOrderDetails(orderId) {
  const orders = StoreManager.getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const modalHtml = `
    <div class="p-6 sm:p-8 space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Official Receipt</span>
          <h3 class="text-lg font-extrabold text-slate-900 tracking-tight">Order ${order.id}</h3>
        </div>
        <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600">${icon('x', 'w-5 h-5')}</button>
      </div>

      <div class="space-y-4 text-xs">
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <p class="font-semibold text-slate-800">Shipping Destination:</p>
          <p class="text-slate-600">${order.shippingAddress.fullName}</p>
          <p class="text-slate-600">${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.postalCode}</p>
          <p class="text-slate-600">${order.shippingAddress.country}</p>
          ${order.trackingNumber ? `<p class="mt-2 text-blue-600 font-mono font-semibold">Tracking #: ${order.trackingNumber}</p>` : ''}
        </div>

        <div class="space-y-2">
          <h4 class="font-bold uppercase tracking-wider text-slate-400 text-[10px]">Purchased Products</h4>
          <div class="divide-y divide-slate-100">
            ${order.items.map(item => `
              <div class="py-2.5 flex items-center justify-between">
                <div>
                  <p class="font-semibold text-slate-900">${item.productTitle}</p>
                  <p class="text-slate-500">${item.storeName} • Qty ${item.quantity}</p>
                </div>
                <span class="font-mono font-bold text-slate-900">$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 flex justify-between items-baseline text-sm">
          <span class="font-bold text-slate-900">Total Paid:</span>
          <span class="font-black text-slate-900 font-mono text-base">$${order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function renderCreateCompany() {
  const html = `
    <div class="bg-white border-b border-slate-200/80 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Entrepreneur Onboarding</span>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Launch Your Brand Storefront</h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-2">Establish your digital atelier with custom color branding, inventory controls, and instant multi-vendor access.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Setup Form -->
        <div class="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-card space-y-6">
          <h2 class="text-lg font-bold text-slate-900">Store Profile Setup</h2>
          <form onsubmit="handleCreateCompany(event)" class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Company / Store Name *</label>
              <input type="text" id="cc-name" required value="Vanguard Acoustics" oninput="updateCreateCompanyPreview()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label class="block font-semibold text-slate-700 mb-1">Primary Category</label>
              <select id="cc-category" onchange="updateCreateCompanyPreview()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Pro Audio & Hi-Fi">Pro Audio & Hi-Fi</option>
                <option value="Electronics & Computing">Electronics & Computing</option>
                <option value="Minimalist Workspace">Minimalist Workspace</option>
                <option value="Cameras & Optics">Cameras & Optics</option>
                <option value="Horology & Timepieces">Horology & Timepieces</option>
                <option value="Everyday Carry & Bags">Everyday Carry & Bags</option>
              </select>
            </div>

            <div>
              <label class="block font-semibold text-slate-700 mb-1">Brand Accent Color</label>
              <div class="flex items-center gap-3">
                <input type="color" id="cc-brand-color" value="#2563EB" onchange="updateCreateCompanyPreview()" class="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white" />
                <span class="text-slate-500 text-[11px]">Select a hex color for your branded storefront highlights.</span>
              </div>
            </div>

            <div>
              <label class="block font-semibold text-slate-700 mb-1">Brand Description *</label>
              <textarea id="cc-desc" required rows="3" oninput="updateCreateCompanyPreview()" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">Bespoke electroacoustic monitoring, studio reference cables, and planar magnetic transducer innovations.</textarea>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-slate-700 mb-1">Location / HQ</label>
                <input type="text" id="cc-location" value="Stockholm, Sweden" oninput="updateCreateCompanyPreview()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="block font-semibold text-slate-700 mb-1">Business Email *</label>
                <input type="email" id="cc-email" required value="atelier@vanguard-sound.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <button type="submit" class="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 mt-4">
              <span>Launch Storefront & Enter Dashboard</span>
              ${icon('arrow-right', 'w-4 h-4')}
            </button>
          </form>
        </div>

        <!-- Live Real-Time Store Preview -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Real-Time Storefront Preview</span>
            <span class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">${icon('check-circle2', 'w-3 h-3')} Live Sync</span>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden">
            <div id="preview-banner" class="h-32 w-full bg-slate-800 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80')"></div>
            <div class="p-6 relative">
              <div class="-mt-12 mb-3 flex items-end justify-between">
                <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80" alt="Logo" class="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-md bg-white" />
                <span id="preview-cat" class="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">Pro Audio & Hi-Fi</span>
              </div>
              <h3 id="preview-name" class="font-extrabold text-xl text-slate-900 tracking-tight">Vanguard Acoustics</h3>
              <p id="preview-desc" class="text-xs text-slate-500 mt-1 leading-relaxed">Bespoke electroacoustic monitoring, studio reference cables, and planar magnetic transducer innovations.</p>
              <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span id="preview-loc" class="flex items-center gap-1">${icon('map-pin', 'w-3.5 h-3.5 text-slate-400')} Stockholm, Sweden</span>
                <span class="font-semibold text-blue-600 flex items-center gap-1">${icon('shield-check', 'w-3.5 h-3.5')} Ready to Publish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return MainLayout(html);
}

function updateCreateCompanyPreview() {
  const nameEl = document.getElementById('cc-name');
  const catEl = document.getElementById('cc-category');
  const descEl = document.getElementById('cc-desc');
  const locEl = document.getElementById('cc-location');

  if (nameEl) document.getElementById('preview-name').innerText = nameEl.value || 'Your Store';
  if (catEl) document.getElementById('preview-cat').innerText = catEl.value;
  if (descEl) document.getElementById('preview-desc').innerText = descEl.value || 'Store description...';
  if (locEl) document.getElementById('preview-loc').innerHTML = `${icon('map-pin', 'w-3.5 h-3.5 text-slate-400')} ${locEl.value || 'Worldwide'}`;
}

function handleCreateCompany(e) {
  e.preventDefault();
  const name = document.getElementById('cc-name').value;
  const category = document.getElementById('cc-category').value;
  const brandColor = document.getElementById('cc-brand-color').value;
  const description = document.getElementById('cc-desc').value;
  const location = document.getElementById('cc-location').value;
  const email = document.getElementById('cc-email').value;

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const newStore = StoreManager.addStore({
    name,
    slug,
    category,
    brandColor,
    description,
    location,
    email,
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80'
  });

  AuthStore.login('seller', email, name, newStore.id);
  showToast('Storefront successfully launched!', 'success');
  navigateTo('#/seller/dashboard');
}

function renderLogin() {
  const html = `
    <div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <a href="#/" class="inline-flex items-center gap-2.5 mb-6 group">
          <div class="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            ${icon('layers', 'w-5 h-5')}
          </div>
          <span class="font-extrabold text-2xl tracking-tight text-slate-900">NEXORA</span>
        </a>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
        <p class="mt-2 text-xs sm:text-sm text-slate-500">Sign in to manage your storefront, orders, or saved collections.</p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-card sm:rounded-3xl sm:px-10 border border-slate-200/80 space-y-6">
          <!-- 1-Click Quick Login -->
          <div class="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/60">
            <span class="text-xs font-bold text-blue-800 flex items-center gap-1.5 mb-1.5">
              ${icon('sparkles', 'w-3.5 h-3.5 text-blue-600')}
              <span>1-Click Prototype Quick Login</span>
            </span>
            <p class="text-[11px] text-blue-700/80 mb-3">Test different roles without manual credentials:</p>
            <div class="grid grid-cols-3 gap-2">
              <button onclick="quickLogin('buyer')" class="py-1.5 px-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] font-semibold border border-blue-200 transition-colors flex flex-col items-center">
                <span>Shopper</span>
              </button>
              <button onclick="quickLogin('seller')" class="py-1.5 px-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] font-semibold border border-blue-200 transition-colors flex flex-col items-center">
                <span>Seller</span>
              </button>
              <button onclick="quickLogin('admin')" class="py-1.5 px-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] font-semibold border border-blue-200 transition-colors flex flex-col items-center">
                <span>Admin</span>
              </button>
            </div>
          </div>

          <form onsubmit="handleCredentialsAuth(event, 'login')" class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Email Address</label>
              <input type="email" id="auth-email" required placeholder="you@domain.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Password</label>
              <input type="password" id="auth-password" required value="demo-password" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" class="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all">Sign In</button>
          </form>

          <p class="text-center text-xs text-slate-500">
            Don't have an account? <a href="#/register" class="text-blue-600 font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  `;
  return html;
}

function renderRegister() {
  const html = `
    <div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <a href="#/" class="inline-flex items-center gap-2.5 mb-6 group">
          <div class="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            ${icon('layers', 'w-5 h-5')}
          </div>
          <span class="font-extrabold text-2xl tracking-tight text-slate-900">NEXORA</span>
        </a>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Create your account</h2>
        <p class="mt-2 text-xs sm:text-sm text-slate-500">Join the verified multi-vendor marketplace.</p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-card sm:rounded-3xl sm:px-10 border border-slate-200/80 space-y-6">
          <form onsubmit="handleCredentialsAuth(event, 'register')" class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Full Name</label>
              <input type="text" id="reg-name" required placeholder="Marcus Vance" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Email Address</label>
              <input type="email" id="reg-email" required placeholder="you@domain.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Password</label>
              <input type="password" id="reg-password" required value="password123" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" class="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all">Create Account</button>
          </form>

          <p class="text-center text-xs text-slate-500">
            Already have an account? <a href="#/login" class="text-blue-600 font-semibold hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  `;
  return html;
}


/* ==========================================================================
   8. VIEWS: SELLER DASHBOARD, MY PRODUCTS, ADD/EDIT PRODUCT, PROFILE, ADMIN
   ========================================================================== */
function renderSellerDashboard() {
  const user = AuthStore.getUser();
  const stores = StoreManager.getStores();
  const currentStore = stores.find(s => s.id === (user && user.storeId)) || stores[0];
  const allProducts = StoreManager.getProducts();
  const sellerProducts = allProducts.filter(p => p.storeId === currentStore.id || p.storeName === currentStore.name);
  const totalStock = sellerProducts.reduce((sum, p) => sum + (p.stock || 0), 0);
  const activeCount = sellerProducts.filter(p => p.status === 'published').length;

  const contentHtml = `
    <!-- Top Stat Metric Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
        <div class="flex items-center justify-between text-slate-500 mb-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Gross Sales</span>
          <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">${icon('dollar-sign', 'w-4 h-4')}</div>
        </div>
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-black text-slate-900 font-mono">$48,620</span>
            <span class="text-xs font-bold text-emerald-600">+18.4%</span>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">$12,450 this month</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
        <div class="flex items-center justify-between text-slate-500 mb-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Orders</span>
          <div class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">${icon('shopping-cart', 'w-4 h-4')}</div>
        </div>
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-black text-slate-900 font-mono">142</span>
            <span class="text-xs font-bold text-blue-600">+12 this wk</span>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">Avg Order Value: $342</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
        <div class="flex items-center justify-between text-slate-500 mb-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Listings</span>
          <div class="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">${icon('package', 'w-4 h-4')}</div>
        </div>
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-black text-slate-900 font-mono">${activeCount}</span>
            <span class="text-xs text-slate-400">of ${sellerProducts.length} total</span>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">${sellerProducts.length - activeCount} unpublished drafts</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
        <div class="flex items-center justify-between text-slate-500 mb-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Units in Stock</span>
          <div class="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">${icon('store', 'w-4 h-4')}</div>
        </div>
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-black text-slate-900 font-mono">${totalStock}</span>
          </div>
          <p class="text-[11px] text-emerald-600 font-semibold mt-1">Healthy inventory status</p>
        </div>
      </div>
    </div>

    <!-- Recent Products Table -->
    <div class="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden">
      <div class="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 class="text-base font-extrabold text-slate-900">Store Inventory Snapshot</h2>
          <p class="text-xs text-slate-500">Live products managed under ${currentStore.name}.</p>
        </div>
        <a href="#/seller/products/new" class="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm shadow-blue-600/30">
          ${icon('plus-circle', 'w-3.5 h-3.5')}
          <span>Add Product</span>
        </a>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-100">
            <tr>
              <th class="px-6 py-3 font-semibold">Product</th>
              <th class="px-6 py-3 font-semibold">Category</th>
              <th class="px-6 py-3 font-semibold">Price</th>
              <th class="px-6 py-3 font-semibold">Condition</th>
              <th class="px-6 py-3 font-semibold">Status</th>
              <th class="px-6 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${sellerProducts.map(p => `
              <tr class="hover:bg-slate-50/50">
                <td class="px-6 py-4 flex items-center gap-3">
                  <img src="${p.images[0]}" alt="${p.title}" class="w-10 h-10 rounded-lg object-cover bg-slate-100 shrink-0" />
                  <span class="font-semibold text-slate-900 line-clamp-1 max-w-xs">${p.title}</span>
                </td>
                <td class="px-6 py-4 text-slate-600">${p.category}</td>
                <td class="px-6 py-4 font-mono font-bold text-slate-900">$${p.price.toLocaleString()}</td>
                <td class="px-6 py-4">${ConditionBadge(p.condition)}</td>
                <td class="px-6 py-4">${StatusBadge(p.status)}</td>
                <td class="px-6 py-4 text-right space-x-2">
                  <button onclick="toggleProductStatus('${p.id}', '${p.status}')" class="text-xs font-semibold text-blue-600 hover:underline">
                    ${p.status === 'published' ? 'Draft' : 'Publish'}
                  </button>
                  <a href="#/seller/products/edit/${p.id}" class="text-xs font-semibold text-slate-600 hover:text-slate-900">Edit</a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return DashboardLayout({
    title: 'Store Command Center',
    subtitle: `Managing ${currentStore.name} storefront and inventory.`,
    actions: `
      <a href="#/seller/products/new" class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors">
        ${icon('plus-circle', 'w-3.5 h-3.5')}
        <span>Add Product</span>
      </a>
      <a href="#/store/${currentStore.slug}" class="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-2xs">
        <span>Live Store</span>
        ${icon('external-link', 'w-3.5 h-3.5')}
      </a>
    `,
    mode: 'seller',
    contentHtml
  });
}

function renderSellerProducts() {
  const user = AuthStore.getUser();
  const stores = StoreManager.getStores();
  const currentStore = stores.find(s => s.id === (user && user.storeId)) || stores[0];
  const allProducts = StoreManager.getProducts();
  const sellerProducts = allProducts.filter(p => p.storeId === currentStore.id || p.storeName === currentStore.name);

  const contentHtml = `
    <div class="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden space-y-4 p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 class="text-base font-extrabold text-slate-900">My Product Catalog</h2>
          <p class="text-xs text-slate-500">Manage pricing, status, and stock units for ${sellerProducts.length} items.</p>
        </div>
        <a href="#/seller/products/new" class="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm shadow-blue-600/30 self-start sm:self-auto">
          ${icon('plus-circle', 'w-3.5 h-3.5')}
          <span>New Product</span>
        </a>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-100">
            <tr>
              <th class="px-4 py-3 font-semibold">Item</th>
              <th class="px-4 py-3 font-semibold">Category</th>
              <th class="px-4 py-3 font-semibold">Price</th>
              <th class="px-4 py-3 font-semibold">Stock</th>
              <th class="px-4 py-3 font-semibold">Condition</th>
              <th class="px-4 py-3 font-semibold">Status</th>
              <th class="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${sellerProducts.map(p => `
              <tr class="hover:bg-slate-50/50">
                <td class="px-4 py-3 flex items-center gap-3">
                  <img src="${p.images[0]}" alt="${p.title}" class="w-10 h-10 rounded-lg object-cover bg-slate-100 shrink-0" />
                  <span class="font-semibold text-slate-900 line-clamp-1 max-w-xs">${p.title}</span>
                </td>
                <td class="px-4 py-3 text-slate-600">${p.category}</td>
                <td class="px-4 py-3 font-mono font-bold text-slate-900">$${p.price.toLocaleString()}</td>
                <td class="px-4 py-3 font-medium ${p.stock < 5 ? 'text-amber-600' : 'text-slate-700'}">${p.stock}</td>
                <td class="px-4 py-3">${ConditionBadge(p.condition)}</td>
                <td class="px-4 py-3">${StatusBadge(p.status)}</td>
                <td class="px-4 py-3 text-right space-x-2">
                  <a href="#/seller/products/edit/${p.id}" class="text-xs font-semibold text-blue-600 hover:underline">Edit</a>
                  <button onclick="confirmDeleteProduct('${p.id}')" class="text-xs font-semibold text-rose-600 hover:underline">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return DashboardLayout({
    title: 'Product Catalog',
    subtitle: 'Full stock and item catalog editor.',
    mode: 'seller',
    contentHtml
  });
}

function confirmDeleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    StoreManager.deleteProduct(id);
    showToast('Product deleted from inventory', 'info');
    navigateTo('#/seller/products');
  }
}

function toggleProductStatus(id, currentStatus) {
  const newStatus = currentStatus === 'published' ? 'draft' : 'published';
  StoreManager.updateProduct(id, { status: newStatus });
  showToast(`Product ${newStatus === 'published' ? 'published to marketplace' : 'saved as draft'}!`, 'success');
  renderCurrentRoute();
}

function renderAddProduct() {
  const user = AuthStore.getUser();
  const stores = StoreManager.getStores();
  const currentStore = stores.find(s => s.id === (user && user.storeId)) || stores[0];

  const contentHtml = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-card space-y-6">
        <h2 class="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">List New Product</h2>
        <form onsubmit="handleSaveProduct(event, 'new')" class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-slate-700 mb-1">Product Title *</label>
            <input type="text" id="prod-title" required placeholder="e.g. Master Acoustics Studio Monitor" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Price ($ USD) *</label>
              <input type="number" id="prod-price" required step="1" min="1" placeholder="450" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Original / Retail Price ($ Optional)</label>
              <input type="number" id="prod-orig-price" step="1" min="1" placeholder="520" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Category</label>
              <select id="prod-cat" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Pro Audio & Hi-Fi">Pro Audio & Hi-Fi</option>
                <option value="Electronics & Computing">Electronics & Computing</option>
                <option value="Minimalist Workspace">Minimalist Workspace</option>
                <option value="Cameras & Optics">Cameras & Optics</option>
                <option value="Horology & Timepieces">Horology & Timepieces</option>
                <option value="Everyday Carry & Bags">Everyday Carry & Bags</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Condition</label>
              <select id="prod-cond" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="New">Factory New</option>
                <option value="Used">Certified Pre-Owned</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Units in Stock</label>
              <input type="number" id="prod-stock" required value="10" min="0" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
            </div>
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Condition Detail Note</label>
            <input type="text" id="prod-cond-detail" placeholder="Brand New Sealed in Box with 3-year Manufacturer Warranty" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Product Description *</label>
            <textarea id="prod-desc" required rows="3" placeholder="Full descriptive paragraph of sound characteristics, craftsmanship, materials..." class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Product Image URL</label>
            <input type="url" id="prod-img" required value="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Key Features (One line per bullet)</label>
            <textarea id="prod-features" rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">Aerospace-grade milled aluminum chassis\nCustom planar magnetic drivers\nFast-charge USB-C streaming</textarea>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <a href="#/seller/products" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">Cancel</a>
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/30">Publish Product</button>
          </div>
        </form>
      </div>
    </div>
  `;

  return DashboardLayout({
    title: 'Add New Product',
    subtitle: 'List an item in the NEXORA marketplace.',
    mode: 'seller',
    contentHtml
  });
}

function renderEditProduct(productId) {
  const product = StoreManager.getProductById(productId);
  if (!product) {
    return DashboardLayout({
      title: 'Edit Product',
      contentHtml: '<p class="text-xs text-slate-500">Product not found.</p>',
      mode: 'seller'
    });
  }

  const contentHtml = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-card space-y-6">
        <h2 class="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">Edit Product: ${product.title}</h2>
        <form onsubmit="handleSaveProduct(event, 'edit', '${product.id}')" class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-slate-700 mb-1">Product Title *</label>
            <input type="text" id="prod-title" required value="${product.title}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Price ($ USD) *</label>
              <input type="number" id="prod-price" required step="1" min="1" value="${product.price}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Original Price ($ USD)</label>
              <input type="number" id="prod-orig-price" step="1" min="1" value="${product.originalPrice || ''}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Category</label>
              <select id="prod-cat" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Pro Audio & Hi-Fi" ${product.category === 'Pro Audio & Hi-Fi' ? 'selected' : ''}>Pro Audio & Hi-Fi</option>
                <option value="Electronics & Computing" ${product.category === 'Electronics & Computing' ? 'selected' : ''}>Electronics & Computing</option>
                <option value="Minimalist Workspace" ${product.category === 'Minimalist Workspace' ? 'selected' : ''}>Minimalist Workspace</option>
                <option value="Cameras & Optics" ${product.category === 'Cameras & Optics' ? 'selected' : ''}>Cameras & Optics</option>
                <option value="Horology & Timepieces" ${product.category === 'Horology & Timepieces' ? 'selected' : ''}>Horology & Timepieces</option>
                <option value="Everyday Carry & Bags" ${product.category === 'Everyday Carry & Bags' ? 'selected' : ''}>Everyday Carry & Bags</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Condition</label>
              <select id="prod-cond" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="New" ${product.condition === 'New' ? 'selected' : ''}>Factory New</option>
                <option value="Used" ${product.condition === 'Used' ? 'selected' : ''}>Certified Pre-Owned</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Units in Stock</label>
              <input type="number" id="prod-stock" required value="${product.stock}" min="0" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" />
            </div>
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Condition Detail Note</label>
            <input type="text" id="prod-cond-detail" value="${product.conditionDetail || ''}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Product Description *</label>
            <textarea id="prod-desc" required rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">${product.description}</textarea>
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Product Image URL</label>
            <input type="url" id="prod-img" required value="${product.images[0]}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <a href="#/seller/products" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">Cancel</a>
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/30">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  `;

  return DashboardLayout({
    title: 'Edit Product',
    subtitle: 'Update pricing, condition or stock.',
    mode: 'seller',
    contentHtml
  });
}

function handleSaveProduct(e, mode, productId) {
  e.preventDefault();
  const title = document.getElementById('prod-title').value;
  const price = Number(document.getElementById('prod-price').value);
  const originalPriceVal = document.getElementById('prod-orig-price').value;
  const originalPrice = originalPriceVal ? Number(originalPriceVal) : undefined;
  const category = document.getElementById('prod-cat').value;
  const condition = document.getElementById('prod-cond').value;
  const stock = Number(document.getElementById('prod-stock').value);
  const conditionDetail = document.getElementById('prod-cond-detail').value;
  const description = document.getElementById('prod-desc').value;
  const imgUrl = document.getElementById('prod-img').value;

  const user = AuthStore.getUser();
  const stores = StoreManager.getStores();
  const store = stores.find(s => s.id === (user && user.storeId)) || stores[0];

  if (mode === 'new') {
    const featuresEl = document.getElementById('prod-features');
    const features = featuresEl ? featuresEl.value.split('\n').filter(f => f.trim()) : [];
    StoreManager.addProduct({
      title,
      price,
      originalPrice,
      category,
      condition,
      stock,
      conditionDetail,
      description,
      images: [imgUrl],
      features,
      status: 'published',
      storeId: store.id,
      storeName: store.name,
      sellerVerified: store.verified
    });
    showToast('Product successfully published to marketplace!', 'success');
  } else {
    StoreManager.updateProduct(productId, {
      title,
      price,
      originalPrice,
      category,
      condition,
      stock,
      conditionDetail,
      description,
      images: [imgUrl]
    });
    showToast('Product changes saved!', 'success');
  }
  navigateTo('#/seller/products');
}

function renderBusinessProfile() {
  const user = AuthStore.getUser();
  const stores = StoreManager.getStores();
  const store = stores.find(s => s.id === (user && user.storeId)) || stores[0];

  const contentHtml = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-card space-y-6">
        <h2 class="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">Store Profile & Custom Branding</h2>
        <form onsubmit="handleSaveStoreProfile(event, '${store.id}')" class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-slate-700 mb-1">Company / Brand Name</label>
            <input type="text" id="prof-name" required value="${store.name}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Primary Category</label>
              <input type="text" id="prof-cat" value="${store.category}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Brand Accent Color</label>
              <div class="flex items-center gap-3">
                <input type="color" id="prof-color" value="${store.brandColor || '#2563EB'}" class="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer bg-white p-0.5" />
                <span class="text-slate-500">Hex highlight for your store.</span>
              </div>
            </div>
          </div>

          <div>
            <label class="block font-semibold text-slate-700 mb-1">Store Description</label>
            <textarea id="prof-desc" rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">${store.description}</textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Location / City</label>
              <input type="text" id="prof-loc" value="${store.location}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-semibold text-slate-700 mb-1">Support Email</label>
              <input type="email" id="prof-email" value="${store.email}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex justify-end">
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/30 flex items-center gap-2">
              ${icon('save', 'w-4 h-4')}
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  return DashboardLayout({
    title: 'Business Profile',
    subtitle: 'Branding, merchant bio, and support contacts.',
    mode: 'seller',
    contentHtml
  });
}

function handleSaveStoreProfile(e, storeId) {
  e.preventDefault();
  const name = document.getElementById('prof-name').value;
  const category = document.getElementById('prof-cat').value;
  const brandColor = document.getElementById('prof-color').value;
  const description = document.getElementById('prof-desc').value;
  const location = document.getElementById('prof-loc').value;
  const email = document.getElementById('prof-email').value;

  StoreManager.updateStore(storeId, { name, category, brandColor, description, location, email });
  showToast('Store branding & profile updated!', 'success');
  renderCurrentRoute();
}

function renderAdminDashboard() {
  const stores = StoreManager.getStores();
  const allProducts = StoreManager.getProducts();

  const contentHtml = `
    <div class="space-y-8">
      <!-- Admin Metric Overview -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Total GMV</span>
          <p class="text-2xl font-black text-slate-900 font-mono mt-2">$2,842,500</p>
          <span class="text-xs font-bold text-emerald-600 mt-1 block">+24.8% Year-over-Year</span>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Merchants</span>
          <p class="text-2xl font-black text-slate-900 font-mono mt-2">${stores.length}</p>
          <span class="text-xs text-blue-600 mt-1 block">${stores.filter(s => s.verified).length} verified vendors</span>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Products</span>
          <p class="text-2xl font-black text-slate-900 font-mono mt-2">${allProducts.length}</p>
          <span class="text-xs text-slate-400 mt-1 block">Across 6 collections</span>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Platform Status</span>
          <p class="text-2xl font-black text-emerald-600 font-mono mt-2">100%</p>
          <span class="text-xs text-emerald-600 font-semibold mt-1 block">All Systems Operational</span>
        </div>
      </div>

      <!-- Storefront Moderation Table -->
      <div class="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden">
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 class="text-base font-extrabold text-slate-900">Merchant Storefront Moderation</h2>
            <p class="text-xs text-slate-500">Toggle verified trust badges for marketplace sellers.</p>
          </div>
          <button onclick="handleAdminReset()" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors">
            Reset Demo Data
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-100">
              <tr>
                <th class="px-6 py-3 font-semibold">Store</th>
                <th class="px-6 py-3 font-semibold">Category</th>
                <th class="px-6 py-3 font-semibold">Rating</th>
                <th class="px-6 py-3 font-semibold">Verified Status</th>
                <th class="px-6 py-3 font-semibold text-right">Moderation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${stores.map(s => `
                <tr class="hover:bg-slate-50/50">
                  <td class="px-6 py-4 flex items-center gap-3">
                    <img src="${s.logo}" alt="${s.name}" class="w-9 h-9 rounded-xl object-cover bg-slate-100 shrink-0" />
                    <div>
                      <p class="font-bold text-slate-900">${s.name}</p>
                      <p class="text-[11px] text-slate-400">${s.location}</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-slate-600">${s.category}</td>
                  <td class="px-6 py-4">${StarRating(s.rating, s.reviewCount, 'sm')}</td>
                  <td class="px-6 py-4">
                    ${s.verified ? `<span class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">${icon('check-circle2', 'w-3 h-3 text-emerald-600')} Verified</span>` : '<span class="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">Pending</span>'}
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button onclick="toggleStoreVerification('${s.id}', ${s.verified})" class="px-3 py-1 rounded-lg text-xs font-semibold ${s.verified ? 'bg-rose-50 text-rose-700 hover:bg-rose-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'} transition-colors">
                      ${s.verified ? 'Revoke Trust' : 'Approve & Verify'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return DashboardLayout({
    title: 'Superadmin Console',
    subtitle: 'Platform analytics, merchant moderation and data controls.',
    mode: 'admin',
    contentHtml
  });
}

function toggleStoreVerification(storeId, current) {
  StoreManager.updateStore(storeId, { verified: !current });
  showToast(`Store verification ${!current ? 'granted' : 'revoked'}`, 'info');
  renderCurrentRoute();
}

function handleAdminReset() {
  if (confirm('Reset all demo products, stores, and orders to initial defaults?')) {
    StoreManager.resetDemoData();
    showToast('Demo data reset to initial fixtures!', 'success');
    renderCurrentRoute();
  }
}


/* ==========================================================================
   9. GLOBAL INTERACTION HANDLERS & HASH ROUTER
   ========================================================================== */
function switchProductTab(tab) {
  const tabs = ['details', 'specs', 'reviews', 'shipping'];
  tabs.forEach(t => {
    const pane = document.getElementById('tab-pane-' + t);
    const btn = document.getElementById('tab-btn-' + t);
    if (pane && btn) {
      if (t === tab) {
        pane.classList.remove('hidden');
        btn.className = 'px-6 py-4 text-xs font-bold border-b-2 border-blue-600 text-blue-600 transition-colors whitespace-nowrap';
      } else {
        pane.classList.add('hidden');
        btn.className = 'px-6 py-4 text-xs font-semibold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap';
      }
    }
  });
}

function handleAddReview(e) {
  e.preventDefault();
  const authorEl = document.getElementById('review-author');
  const ratingEl = document.getElementById('review-rating');
  const commentEl = document.getElementById('review-comment');
  const listEl = document.getElementById('product-reviews-list');
  if (authorEl && commentEl && listEl) {
    const newRev = document.createElement('div');
    newRev.className = 'p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 space-y-2 animate-fade-in';
    newRev.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-bold text-xs text-slate-900">${authorEl.value}</span>
        <span class="text-[10px] text-blue-600 font-semibold">Just now</span>
      </div>
      <div class="flex">${StarRating(Number(ratingEl.value), undefined, 'sm')}</div>
      <p class="text-xs text-slate-700">${commentEl.value}</p>
    `;
    listEl.prepend(newRev);
    authorEl.value = '';
    commentEl.value = '';
    showToast('Thank you! Your review has been posted.', 'success');
  }
}

function handleQuickAddToCart(productId) {
  const product = StoreManager.getProductById(productId);
  if (!product) return;
  CartStore.addToCart(product, 1);
  showToast(`Added "${product.title}" to cart!`, 'success');
  // Re-render header to update cart count
  const badge = document.querySelector('a[href="#/cart"] span');
  const totals = CartStore.getTotals(activeCartDiscount);
  if (badge) {
    badge.innerText = totals.totalItems;
  } else {
    renderCurrentRoute();
  }
}

let detailQty = 1;
function incrementDetailQty(maxStock = 99) {
  if (detailQty < maxStock) {
    detailQty++;
    const el = document.getElementById('detail-qty-val');
    if (el) el.innerText = detailQty;
  }
}
function decrementDetailQty() {
  if (detailQty > 1) {
    detailQty--;
    const el = document.getElementById('detail-qty-val');
    if (el) el.innerText = detailQty;
  }
}

function handleDetailAddToCart(productId) {
  const product = StoreManager.getProductById(productId);
  if (!product) return;
  CartStore.addToCart(product, detailQty);
  showToast(`Added ${detailQty}x "${product.title}" to cart!`, 'success');
  detailQty = 1;
  renderCurrentRoute();
}

function handleDetailBuyNow(productId) {
  const product = StoreManager.getProductById(productId);
  if (!product) return;
  CartStore.addToCart(product, detailQty);
  detailQty = 1;
  navigateTo('#/cart');
  setTimeout(() => openCheckoutModal(), 200);
}

function updateCartItemQty(productId, qty) {
  CartStore.updateQuantity(productId, qty);
  renderCurrentRoute();
}

function removeCartItem(productId) {
  CartStore.removeFromCart(productId);
  showToast('Item removed from cart', 'info');
  renderCurrentRoute();
}

function handleApplyCoupon(e) {
  e.preventDefault();
  const input = document.getElementById('coupon-code-input');
  if (!input) return;
  const val = input.value.trim().toUpperCase();
  if (val === 'NEXORA10') {
    const rawTotals = CartStore.getTotals(0);
    activeCartDiscount = Number((rawTotals.subtotal * 0.10).toFixed(2));
    showToast('Promo code applied: 10% demo discount!', 'success');
    renderCurrentRoute();
  } else {
    showToast('Invalid coupon. Use NEXORA10 for 10% off', 'error');
  }
}

function handleNavSearch(e) {
  e.preventDefault();
  const input = document.getElementById('nav-search-input') || document.getElementById('mobile-search-input');
  if (input && input.value.trim()) {
    navigateTo(`#/marketplace?search=${encodeURIComponent(input.value.trim())}`);
  } else {
    navigateTo('#/marketplace');
  }
  const mobileNav = document.getElementById('mobile-nav-drawer');
  if (mobileNav) mobileNav.classList.add('hidden');
}

function handleHeroSearch(e) {
  e.preventDefault();
  const input = document.getElementById('hero-search-input');
  if (input && input.value.trim()) {
    navigateTo(`#/marketplace?search=${encodeURIComponent(input.value.trim())}`);
  } else {
    navigateTo('#/marketplace');
  }
}

function applyMarketplaceFilter(key, value) {
  const hash = window.location.hash || '#/marketplace';
  const urlParts = hash.split('?');
  const params = new URLSearchParams(urlParts[1] || '');

  if (!value || value === 'all') {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  const queryStr = params.toString();
  const newHash = queryStr ? `#/marketplace?${queryStr}` : '#/marketplace';
  navigateTo(newHash);
}

function resetMarketplaceFilters() {
  navigateTo('#/marketplace');
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('hidden');
  }
}

function toggleMobileNav() {
  const el = document.getElementById('mobile-nav-drawer');
  if (el) el.classList.toggle('hidden');
}

function switchRole(role) {
  AuthStore.switchRole(role);
  showToast(`Switched account to demo ${role}`, 'info');
  toggleDropdown('role-dropdown');
  if (role === 'seller') navigateTo('#/seller/dashboard');
  else if (role === 'admin') navigateTo('#/admin/dashboard');
  else renderCurrentRoute();
}

function quickLogin(role) {
  AuthStore.switchRole(role);
  showToast(`Logged in as demo ${role}`, 'success');
  if (role === 'seller') navigateTo('#/seller/dashboard');
  else if (role === 'admin') navigateTo('#/admin/dashboard');
  else navigateTo('#/marketplace');
}

function handleLogout() {
  AuthStore.logout();
  showToast('Signed out of NEXORA', 'info');
  navigateTo('#/');
}

function handleCredentialsAuth(e, type) {
  e.preventDefault();
  const email = (document.getElementById('auth-email') || document.getElementById('reg-email')).value;
  let role = 'buyer';
  if (email.includes('seller') || email.includes('aether')) role = 'seller';
  if (email.includes('admin') || email.includes('ops')) role = 'admin';

  AuthStore.login(role, email, email.split('@')[0]);
  showToast(type === 'login' ? 'Signed in successfully!' : 'Account registered!', 'success');
  if (role === 'seller') navigateTo('#/seller/dashboard');
  else if (role === 'admin') navigateTo('#/admin/dashboard');
  else navigateTo('#/marketplace');
}

function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('footer-newsletter-email');
  if (input && input.value) {
    const container = document.getElementById('footer-newsletter-container');
    if (container) {
      container.innerHTML = `
        <div class="bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-2 animate-fade-in">
          <span class="text-emerald-400">${icon('check', 'w-4 h-4')}</span>
          <span>You're subscribed! Welcome to the NEXORA network.</span>
        </div>
      `;
    }
  }
}

// Close open dropdowns when clicking outside
document.addEventListener('click', e => {
  const roleDropdown = document.getElementById('role-dropdown');
  const roleContainer = document.getElementById('role-switcher-container');
  if (roleDropdown && roleContainer && !roleContainer.contains(e.target)) {
    roleDropdown.classList.add('hidden');
  }

  const userDropdown = document.getElementById('user-dropdown');
  const userContainer = document.getElementById('user-menu-container');
  if (userDropdown && userContainer && !userContainer.contains(e.target)) {
    userDropdown.classList.add('hidden');
  }
});

/* ==========================================================================
   10. ROUTER & INITIALIZATION
   ========================================================================== */
function parseHash(hash) {
  const clean = hash ? hash.replace(/^#/, '') : '/';
  const [pathname, search] = clean.split('?');
  const params = {};
  if (search) {
    const searchParams = new URLSearchParams(search);
    for (const [key, val] of searchParams.entries()) {
      params[key] = val;
    }
  }
  return { pathname: pathname || '/', params };
}

function navigateTo(hash) {
  window.location.hash = hash;
}

function renderCurrentRoute() {
  const root = document.getElementById('root');
  if (!root) return;

  const { pathname, params } = parseHash(window.location.hash);
  window.scrollTo(0, 0);

  // Exact matching and dynamic patterns
  if (pathname === '/' || pathname === '') {
    root.innerHTML = renderHome();
  } else if (pathname === '/marketplace') {
    root.innerHTML = renderMarketplace(params);
  } else if (pathname.startsWith('/product/')) {
    const productId = pathname.replace('/product/', '');
    root.innerHTML = renderProductDetails(productId);
  } else if (pathname.startsWith('/store/')) {
    const storeSlug = pathname.replace('/store/', '');
    root.innerHTML = renderStorefront(storeSlug);
  } else if (pathname === '/cart') {
    root.innerHTML = renderCart();
  } else if (pathname === '/orders') {
    root.innerHTML = renderOrders();
  } else if (pathname === '/create-company') {
    root.innerHTML = renderCreateCompany();
  } else if (pathname === '/login') {
    root.innerHTML = renderLogin();
  } else if (pathname === '/register') {
    root.innerHTML = renderRegister();
  } else if (pathname === '/seller/dashboard') {
    root.innerHTML = renderSellerDashboard();
  } else if (pathname === '/seller/products') {
    root.innerHTML = renderSellerProducts();
  } else if (pathname === '/seller/products/new') {
    root.innerHTML = renderAddProduct();
  } else if (pathname.startsWith('/seller/products/edit/')) {
    const prodId = pathname.replace('/seller/products/edit/', '');
    root.innerHTML = renderEditProduct(prodId);
  } else if (pathname === '/seller/profile') {
    root.innerHTML = renderBusinessProfile();
  } else if (pathname === '/admin/dashboard') {
    root.innerHTML = renderAdminDashboard();
  } else {
    // Fallback to Home
    root.innerHTML = renderHome();
  }
}

// Router Event Listeners
window.addEventListener('hashchange', renderCurrentRoute);

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  renderCurrentRoute();
});
