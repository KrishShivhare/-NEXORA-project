# NEXORA – Multi-Vendor E-commerce SaaS Platform

> **"Your Business. Your Brand. Your Store."**

NEXORA is an enterprise-grade multi-vendor e-commerce SaaS platform inspired by the minimalist elegance of **Apple**, the precision and craft of **Stripe**, the merchant autonomy of **Shopify**, and the high-performance UX of **Linear**.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, NEXORA enables independent brands, creators, and ateliers to launch custom digital storefronts while empowering discerning shoppers to explore curated new and certified pre-owned collections across a unified marketplace.

---

## 🚀 Key Features

### 1. Consumer & Marketplace Experience
- **Global Multi-Vendor Marketplace**: Interactive search across products, stores, and categories with real-time URL synchronization (`/marketplace`).
- **Condition Transparency**: Dedicated badges and filtering for **Factory New** vs. **Certified Pre-Owned (Used)** with cosmetic grading notes.
- **Dynamic Filtering & Sorting**: Filter by condition, category, vendor store, price ceiling, and sort by price, rating, or recency.
- **Rich Product Showcase**: Multi-image thumbnail gallery, live stock indicators, financing breakdown, seller assurance cards, tabbed specifications, and customer review submission (`/product/:id`).
- **Dedicated Company Storefronts**: Custom branded merchant pages (`/store/:slug`) with personalized brand colors, custom headers, bio, and store catalog search.
- **Unified Multi-Vendor Cart & Checkout**: Multi-store item bundling, 10% demo promo code (`NEXORA10`), automated tax/shipping calculations, and an interactive simulated checkout flow (`/cart`).
- **Customer Order Tracking**: Real-time order status tracking (`Processing`, `Shipped`, `Delivered`), itemized summaries, carrier tracking numbers, and receipt modals (`/orders`).

### 2. Merchant & Seller Command Center
- **Seller Hub Overview**: Revenue overview charts, active inventory metrics, gross sales stats, and quick actions (`/seller/dashboard`).
- **Live Onboarding & Store Creation**: 3-step company creation wizard with a **real-time live storefront preview** as you pick colors and enter details (`/create-company`).
- **Product Management & CRUD**:
  - List new products with multi-image URLs or presets (`/seller/products/new`).
  - Edit existing products with prefilled fields (`/seller/products/edit/:id`).
  - Toggle live visibility (`Published` vs. `Draft`) with one click.
  - Delete products with safe confirmation modals.
- **Storefront Branding Studio**: Customize hex brand accent colors, storefront banners, logos, headquarters, and customer support channels (`/seller/profile`).

### 3. Platform Administration
- **Admin Command Center**: Platform-wide GMV analytics, commission take-rate tracking (5%), active store directory, and vendor verification toggle (`/admin/dashboard`).
- **1-Click Demo Role Switcher**: Quick header pill switch between **Shopper (Marcus)**, **Seller (Elena Rostova)**, and **Platform Admin (David Mercer)**.
- **State Reset Capability**: 1-click restore to pristine demo fixtures at any time.

---

## 🎨 Design System

| Element | Specification |
| :--- | :--- |
| **Primary Accents** | Electric Blue (`#2563EB`, `#1D4ED8`, `#3B82F6`) |
| **Typography** | Deep Navy (`#0F172A`, `#1E293B`, `#334155`) with Inter Font |
| **Backgrounds** | Pure White (`#FFFFFF`) and Subtle Slate (`#F8FAFC`, `#F1F5F9`) |
| **Borders & Shadows**| Subtle hairline borders (`#E2E8F0`) and soft elevation shadows (`shadow-card`, `shadow-elevated`) |
| **Condition Badges** | Blue pill with Sparkle icon for **New**; Amber pill with Tag icon for **Used** |

---

## 📁 Project Architecture

```
Project NEXORA/
├── index.html                   # HTML entry point with Inter font & favicon
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Brand colors & custom theme definitions
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite build configuration (Port 3000)
├── src/
│   ├── main.tsx                 # Application root & context providers
│   ├── App.tsx                  # React Router routes (15 pages) & ScrollToTop
│   ├── index.css                # Tailwind imports & custom scrollbar
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces (Product, Store, Order, User, etc.)
│   ├── data/
│   │   └── mockData.ts          # Seed data (5 verified stores, 12 products, demo orders)
│   ├── context/
│   │   ├── AuthContext.tsx      # User state, role switching (Buyer/Seller/Admin)
│   │   ├── CartContext.tsx      # Cart state, quantities, shipping & tax calculation
│   │   └── StoreContext.tsx     # Products CRUD, Stores, Orders & localStorage sync
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx       # Header with search, role switcher, cart badge, mobile menu
│   │   │   ├── Footer.tsx       # SaaS footer with newsletter, links & prototype disclaimer
│   │   │   ├── Badge.tsx        # Condition, status, order status & verified badges
│   │   │   └── StarRating.tsx   # Star rating indicator with review count
│   │   ├── product/
│   │   │   └── ProductCard.tsx  # Product card with hover zoom, condition pill, quick add
│   │   ├── store/
│   │   │   └── StoreCard.tsx    # Store card with banner, logo, rating & visit link
│   │   └── layout/
│   │       ├── MainLayout.tsx   # Standard page layout with Navbar & Footer
│   │       └── DashboardLayout.tsx # Collapsible sidebar layout for Seller & Admin
│   └── pages/
│       ├── Home.tsx             # 1. Landing Page (Hero, search, categories, stores, CTA)
│       ├── Marketplace.tsx      # 2. Marketplace catalog with live filtering & sorting
│       ├── ProductDetails.tsx   # 3. Product Details with gallery, specs, reviews, store info
│       ├── CompanyStore.tsx     # 4. Vendor Storefront with custom branding & store search
│       ├── Login.tsx            # 5. Login with 1-click demo role accounts
│       ├── Register.tsx         # 6. Registration for Shoppers and Merchants
│       ├── CreateCompany.tsx    # 7. Storefront Onboarding with LIVE interactive preview
│       ├── seller/
│       │   ├── SellerDashboard.tsx # 8. Seller overview metrics & revenue charts
│       │   ├── MyProducts.tsx   # 9. Inventory table with status toggle & delete
│       │   ├── AddProduct.tsx   # 10. Add product form with image presets & validation
│       │   ├── EditProduct.tsx  # 11. Edit product form with prefilled state
│       │   └── BusinessProfile.tsx # 12. Branding studio for banner, logo, colors & bio
│       ├── customer/
│       │   ├── Cart.tsx         # 13. Shopping cart with promo codes & checkout modal
│       │   └── Orders.tsx       # 14. Customer order history with tracking receipts
│       └── admin/
│           └── AdminDashboard.tsx # 15. Admin panel for GMV, take-rates & vendor verification
```

---

## 🛠️ Setup & Running Locally

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm (v9+ or v10+)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 💡 Demo Personas & Testing Guide

Use the **"View As"** dropdown in the top navigation bar to switch between user personas instantly:

1. **Shopper Mode (Marcus Vance)**:
   - Browse the **Marketplace**, filter by "Used" to inspect certified pre-owned optics or timepieces.
   - Open a product, inspect condition notes, adjust quantity, and add to cart.
   - View your **Cart**, apply promo code `NEXORA10`, and complete simulated checkout.
   - Check your newly generated receipt in **Customer Orders**.

2. **Seller Mode (Elena Rostova – Aether Soundworks)**:
   - Navigate to **Seller Dashboard** to view revenue performance and sales trajectories.
   - Go to **My Products** to manage inventory, edit prices, or toggle items between Published and Draft.
   - Click **Add Product** to list a new item with custom images and condition tags.
   - Visit **Business Profile** to change your brand color or storefront banner.

3. **Platform Admin Mode (David Mercer)**:
   - Access **Admin Dashboard** to monitor platform-wide GMV and 5% take-rate commissions.
   - Audit the **Merchant Directory** and toggle verification status for any store.
   - Click **Reset Demo State** whenever you want to restore the initial database state.

---

## 🔌 Future Backend Integration (Spring Boot + MySQL)

This application is designed as a clean, decoupled frontend ready for backend integration:
- **Authentication**: JWT Bearer token exchange (`POST /api/v1/auth/login`, `POST /api/v1/auth/register`).
- **Product Service**: Spring Boot JPA repository mapping to MySQL `products` and `product_images` tables.
- **Store Service**: Multi-tenant merchant isolation mapping to `stores` and `vendor_profiles`.
- **Order Service**: Transactional checkout handling mapping to `orders` and `order_items`.
