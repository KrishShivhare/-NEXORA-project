================================================================================
                    NEXORA - STATIC EDITION (HTML5 / CSS3 / VANILLA JS)
================================================================================

1. QUICK START (DIRECT HTML EXECUTION)
--------------------------------------------------------------------------------
Simply double-click "index.html" in File Explorer, or drag and drop "index.html" 
into Google Chrome, Microsoft Edge, Brave, or any modern web browser.

- NO Node.js required.
- NO npm install required.
- NO npm run dev or Vite development server required.
- NO localhost requirement.
- NO backend server required.
- Runs 100% locally under the file:// protocol.


2. PROJECT STRUCTURE
--------------------------------------------------------------------------------
NEXORA/
  ├── index.html               # Main entrypoint supporting all 15 views & routing
  ├── css/
  │   └── style.css            # Production CSS bundle + custom animations & helpers
  ├── js/
  │   └── script.js            # Self-contained Vanilla JS engine, icons & routing
  ├── images/                  # Image assets directory
  ├── assets/
  │   └── screenshots/         # Verified Chrome rendered screenshots of all views
  ├── _backup_original/        # Complete backup of original React/TypeScript source
  └── README.txt               # User documentation and guide


3. PRESERVED FEATURES & EXPERIENCES
--------------------------------------------------------------------------------
The website preserves 100% of the original NEXORA UI/UX, styling, and logic:

• Global Navigation:
  - Sticky frosted header with responsive mobile drawer.
  - Live Prototype Demo Banner with 1-click Role Switcher (Shopper, Seller, Admin).
  - Search bar with instant marketplace query filtering.
  - "Start Your Business" company onboarding CTA.
  - Dynamic shopping cart counter badge.
  - User account dropdown with quick access to Orders, Seller Tools, and Admin area.

• Custom Animated Cursor:
  - Trailing ring with smooth lerp physics.
  - Interactive element hover expansion & glow.
  - Text input indicator.

• 15 Complete Page Views & Dashboards:
  1. Home Page (#/):
     Hero with live search & popular query pills, 6 category showcases,
     8 trending products, 3 featured merchant storefronts, How NEXORA Works
     dual shopper/merchant workflows, why brands choose NEXORA, and dark CTA banner.
  2. Global Marketplace (#/marketplace):
     Live search, category filter sidebar, condition filter (New / Pre-Owned),
     merchant atelier filter, price range slider ($0 - $6,500), sort selector,
     active filter counter, reset button, and product cards grid.
  3. Product Details Page (#/product/:id):
     Breadcrumb navigation, multi-image gallery with clickable thumbnail selector,
     condition badges, merchant card, star ratings, live stock warnings,
     quantity selector, Add to Cart (with animation & toast), Buy Now button,
     features list, and 4 interactive tabs (Overview, Specifications, Customer
     Reviews with live submission form, Shipping & Returns).
  4. Branded Merchant Storefront (#/store/:slug):
     Custom accent color theming, full-width banner, overlapping store logo,
     verified vendor badge, merchant contact & location, and store catalog.
  5. Shopping Cart (#/cart):
     Item list with quantity modifiers (- / +) and delete buttons, promotional
     coupon code input (use code "NEXORA10" for 10% discount), order summary card
     with free shipping threshold ($150+) and 8% tax calculation.
  6. Checkout Flow:
     Full express checkout modal with shipping address fields, card simulation,
     authorization spinner, and automatic order creation.
  7. Customer Orders (#/orders):
     Fulfillment status badges (Processing, Shipped, Delivered, Cancelled),
     receipt breakdown, tracking numbers, and Order Details modal.
  8. Start Your Business (#/create-company):
     Two-column company onboarding wizard with REAL-TIME storefront preview
     that updates live as the user types company name, category, custom accent color,
     description, location, and contacts.
  9. Seller Command Center (#/seller/dashboard):
     Dedicated seller layout with sidebar navigation, 4 metric cards (Gross Sales,
     Total Orders, Active Listings, Units in Stock), store inventory snapshot,
     and 1-click product status toggles.
 10. My Products (#/seller/products):
     Seller inventory management table with image, title, price, stock, condition,
     status toggles, edit links, and delete confirmation modal.
 11. Add New Product (#/seller/products/new):
     Comprehensive product listing form with title, price, retail price, stock,
     condition, condition detail notes, description, image URL, and features.
 12. Edit Product (#/seller/products/edit/:id):
     Pre-filled product updater saving directly to state.
 13. Business Profile / Branding Studio (#/seller/profile):
     Store branding editor with live header preview card and custom accent color picker.
 14. Admin Console (#/admin/dashboard):
     Superadmin overview with Platform GMV, active merchants, total products,
     system health status, merchant verification moderation toggle, and Reset Demo Data.
 15. Authentication Pages (#/login & #/register):
     1-click Prototype Quick Login for Shopper (Marcus), Seller (Elena), and Admin (David),
     plus standard credentials login form with password visibility toggle.


4. CLIENT-SIDE ROUTING & ARCHITECTURE
--------------------------------------------------------------------------------
The application uses hash-based client routing (#/, #/marketplace, #/cart, etc.)
which is natively supported by all browsers under the file:// protocol without
requiring a web server, avoiding any CORS restrictions or 404 errors.

State persistence uses the browser's localStorage API with an in-memory fallback
layer to ensure seamless operation under any security policy.


5. ORIGINAL PROJECT BACKUP
--------------------------------------------------------------------------------
The complete original React, TypeScript, and Vite source files and configurations
are safely preserved in the "_backup_original" directory for your records.


(c) 2026 NEXORA Inc. All rights reserved.
================================================================================
