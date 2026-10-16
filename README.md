# LUMINA & VEIL — Custom Event Lighting & Fabric Draping Design Company

An ambient, visual website engineered for a high-end custom event lighting and fabric draping company. Built purely with clean, semantic **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero external framework dependencies).

---

## 🌟 Project Overview

**LUMINA & VEIL** is an architectural event lighting and textile scenography design company catering to luxury weddings, charity galas, and corporate summits. The website features an obsidian velvet aesthetic with interactive ambient lighting glow effects, before/after transformation sliders, a live lighting package cost estimator, a filterable gallery with technical lighting recipes, a dedicated fabric draping home page, bidirectional RTL layout support, and a comprehensive client inquiry workflow.

---

## 📁 File Structure

```
c:\Users\L E N O V O\Downloads\Event lighting\
│
├── index.html              # Home 1 – Architectural Lighting transformations & ballroom slider
├── home-2.html             # Home 2 – Bespoke Fabric Draping, ceiling canopies & textile library
├── services.html           # Services – In-depth uplighting, ceiling draping & interactive cost calculator
├── gallery.html            # Gallery – Filterable event portfolio, marquee comparison & recipe lightbox
├── contact.html            # Contact – Comprehensive enquiry form, validation & confirmation modal
├── about.html              # About – Studio origin, 4 production pillars & rigging safety standards
├── privacy-policy.html     # Privacy Policy – VIP discretion, client NDA protocol & CAD file encryption
├── rigging-terms.html      # Venue Rigging Terms – ETCP credentials, point loads & $5M COI insurance
├── safety-certificates.html# Safety Certificates – NFPA 701 flammability tests & fire marshal packets
├── style.css               # Deep luxury ambient styling, glow engine, RTL rules & responsive design
├── script.js               # Navigation, RTL toggle, ambient theme switcher, sliders, gallery & form logic
└── README.md               # Project overview and setup instructions
```

---

## ✨ Key Interactive Features

### 1. Dual Distinct Home Pages (Zero Duplicate Content)
- **Home 1 (`index.html`) — Architectural Event Lighting**:
  - Focuses on photometric illumination, wireless RGBAW+UV perimeter uplighting, floral centerpiece pin-spotting, and dynamic DMX evening scene choreography.
  - Interactive Before & After comparison: Flat fluorescent banquet hall vs. Opulent amber candlelight ballroom with French crystal chandeliers.
  - Metrics: 3,800+ Events Illuminated, 100% Wireless DMX Fleet, 45+ Preferred Venues.
- **Home 2 (`home-2.html`) — Bespoke Fabric Draping & Ceiling Scenography**:
  - Focuses on architectural fabric softening, 8-point radial starburst canopies, 360° perimeter room wraps, tent liner swags, and acoustic softening.
  - Interactive Before & After comparison: Bare industrial rafters / exposed barn vs. Ethereal billowing chiffon palace.
  - The Certified Textile Library: Sheer Chiffon (65 GSM), Royal Plush Velour (320 GSM), Poly-Premier (190 GSM), and Shimmer Organza (45 GSM) with NFPA 701 fire certificates.
  - Metrics: 85,000+ Yards Draped, NFPA 701 Fire Certified, 32ft Maximum Rigging Height.

### 2. Single Unified Top Navigation Bar
- The old announcement top bar has been removed so only the clean, sticky glassmorphism navigation bar sits at the top of the viewport.
- Contains:
  - Brand Logo & Icon Mark
  - Primary Navigation Links with unified **Home ▾** dropdown (Home 1: Architectural Lighting & Home 2: Fabric Draping)
  - **RTL Toggle Button (`⇄ RTL`)**
  - **Light & Dark Mode Toggle (`🌙 Dark` / `☀️ Light`)**
  - **"Request Proposal"** CTA button

### 3. Bidirectional RTL (Right-to-Left) Support
- Instant one-click toggle in the navigation bar switches the entire document between **LTR** and **RTL** (`dir="rtl"`).
- Automatically flips typography alignment, flex layouts, before/after badges, lightbox arrows, and toast slide directions.
- Persists user language preference in `localStorage`.

### 4. Interactive Light & Dark Mode Engine
- Instant one-click toggle in the navbar switches between:
  - **Dark Mode (Default)**: Deep obsidian velvet (`#080a0f`), warm champagne amber glow, and glowing light cones.
  - **Light Mode**: Luxury alabaster silk (`#faf8f5`), antique polished gold accents (`#b8860b`), crisp slate obsidian typography (`#14171f`), and luminous porcelain cards.
- Dynamically updates CSS custom properties across the document and persists the preference in `localStorage` (`lumina_theme_mode`).

### 5. Rich Content-Related Hero Background Images
- Every page features an atmospheric, high-resolution photography background directly tied to its subject matter, treated with dark luxury vignette overlays for crystal-clear readability:
  - **Home 1**: Luxury ballroom gala with warm amber uplighting (`hero-home-1`)
  - **Home 2**: Ethereal chiffon ceiling draping and wedding floral arches (`hero-home-2`)
  - **Services**: Grand ballroom architecture and crystal chandeliers (`hero-services`)
  - **Gallery**: Outdoor marquee tent with warm bistro string canopy (`hero-gallery`)
  - **About**: French crystal chandelier tier ceiling and lighting crew scenography (`hero-about`)
  - **Contact**: Intimate candlelit dinner and ambient fairy lights (`hero-contact`)

### 6. Interactive Event Lighting & Draping Cost Calculator (`services.html`)
- Allows planners to select their event type, venue scale, uplight fixture count (via custom range slider), and signature accents.
- Instantly recalculates estimated fixture counts, fabric yardage, and price bracket (`$X,XXX - $X,XXX`).
- Includes a one-click button: **"Apply Estimate to Inquiry Form"**, which packages the selected quote into `sessionStorage` and pre-populates the inquiry form on `contact.html`.

### 7. Filterable Visual Portfolio & Recipe Lightbox (`gallery.html`)
- Filter categories: *All Projects*, *Weddings*, *Galas & Corporate*, *Ceiling Draping*, *Fairy & Bistro Strings*, and *Chandeliers & Pin-Spots*.
- Full-screen **Lightbox Modal** with technical lighting recipes, keyboard navigation (Left/Right arrow keys and Escape key).

### 8. Comprehensive Design Enquiry Wizard (`contact.html`)
- Validated form with custom visual service check tiles, date picker, and pre-fill integration from the estimator.
- Generates a simulated **Proposal Reference Code** (e.g. `#LUM-849201`) and triggers an animated confirmation modal.

### 9. Luxury Footer with Social Media Ecosystem
- Comprehensive 4-column footer synchronized across all 9 pages.
- Features interactive glassmorphic social media buttons for **Instagram**, **Pinterest**, **Facebook**, **YouTube**, and **LinkedIn**, with ambient hover glow and elevation effects.
- Includes direct Instagram handle link (`@lumina.veil.design`), industry accreditation badges, legal links, and full site navigation.

### 10. Dedicated Legal, Rigging & Fire Safety Compliance Pages
- **Privacy Policy (`privacy-policy.html`)**: VIP client non-disclosure protocols, crew NDA mandates, CAD vector blueprint encryption (AES-256), and GDPR/CCPA data rights with mutual NDA request triggers.
- **Venue Rigging Terms (`rigging-terms.html`)**: ETCP certified head rigger standards, hanging point load engineering schedules, rated hardware ratings table (Crosby shackles, CM Lodestars), ground-support fallback guidelines, and \$5M COI aggregate liability documentation.
- **Fire Safety Certificates (`safety-certificates.html`)**: Inherent Flame Resistance (IFR) fabric swatch vault (Sheer Chiffon, Velour, Organza) certified to NFPA 701 (Methods 1 & 2) and California Title 19, battery uplight UL 1642 BMS safety, and non-pyrotechnic Cold Spark Gerb safety protocols with downloadable fire marshal packets.

---

## 🎨 Visual & Technical Design Specs

- **Aesthetic**: Deep velvet obsidian (`#080a0f`, `#0e121a`) with luminous warm gold, champagne, and rose accents.
- **Typography**:
  - Headings: `Playfair Display` & `Cinzel` for editorial luxury.
  - Body & UI: `Plus Jakarta Sans` for crisp legibility.
- **Lighting Physics**: Radial light cones, soft drop shadows (`box-shadow: 0 0 35px var(--glow-ambient)`), glassmorphism cards with `backdrop-filter: blur(16px)`.
- **Responsive Layout**: Fluid breakpoints optimized for mobile phones (320px+), tablets (768px+), laptops, and desktop screens.

---

## 🚀 How to View Locally

Simply open [`index.html`](file:///c:/Users/L%20E%20N%20O%20V%20O/Downloads/Event%20lighting/index.html) or [`home-2.html`](file:///c:/Users/L%20E%20N%20O%20V%20O/Downloads/Event%20lighting/home-2.html) directly in any web browser (Chrome, Edge, Firefox, or Safari).

---

© 2026 LUMINA & VEIL Event Lighting & Draping Design Company. All rights reserved.
