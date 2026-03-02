# Task Tracker — Yatara Ceylon TOMS

## 🔴 Critical / Blocking

- [ ] Fix Vercel deployment issues (recurring build errors)
- [ ] Ensure all environment variables are set in Vercel (MongoDB, PayHere, JWT secrets)
- [ ] Fix navbar visibility/contrast across all pages (light + dark backgrounds)

## 🟠 Public Pages — Content & Polish

### Homepage
- [x] Hero section with video background
- [x] Social proof / trust stats
- [x] How It Works section
- [x] Featured Journeys carousel
- [x] Premium design (10-section funnel)
- [ ] Verify all homepage sections render correctly on mobile
- [ ] Add real testimonials (replace placeholder data if any)

### Destinations
- [ ] Populate destinations with real Sri Lanka content (images, descriptions)
- [ ] Destination detail page — verify map integration works
- [ ] Add search/filter functionality

### Packages
- [ ] Verify package listing page design consistency
- [ ] Package detail page — gallery, pricing, booking CTA
- [ ] Ensure dual-currency toggle works on all pricing displays

### Build Your Tour (Bespoke Planner)
- [ ] Test MapViewport interaction (district click → gems)
- [ ] Drag-and-drop itinerary builder — test across browsers
- [ ] Preview mode → Submit Inquiry flow end-to-end test
- [ ] Mobile responsiveness for map interactions

### Vehicle Fleet & Transfers
- [ ] Vehicle listing page — complete design
- [ ] Transfer booking flow — connect to backend
- [ ] Vehicle detail/availability view

### Other Public Pages
- [ ] About page — add content and design
- [ ] Contact page — verify form submission works
- [ ] Offers page — design and connect to backend
- [ ] Search page — verify Fuse.js search works across all content
- [ ] Guide pages — content and design

## 🟡 Dashboard — Admin Features

### Core Dashboard
- [ ] Dashboard overview page — KPI cards with real data
- [ ] Recent bookings widget
- [ ] Activity audit log display

### Booking Management
- [ ] Booking list with status filters
- [ ] Status workflow transitions (NEW → CONTACTED → CONFIRMED → COMPLETED)
- [ ] Staff assignment to bookings

### Package Management
- [ ] CRUD operations — create, edit, delete, publish/unpublish
- [ ] Multi-image upload
- [ ] Tag management

### Destination Management
- [ ] CRUD operations with coordinate picker
- [ ] Image upload/management

### Vehicle Management
- [ ] Fleet CRUD operations
- [ ] Availability calendar / date blocking

### Financial
- [ ] Revenue tracking dashboard
- [ ] Invoice PDF generation (jsPDF)
- [ ] Payment history per booking

### Users & Partners
- [ ] User management with role assignment
- [ ] Partner management (hotels, activities, transport)

### Support
- [ ] Support ticket system — view, reply, status tracking

## 🟢 API & Backend

- [ ] Verify all API routes have proper auth middleware
- [ ] Rate limiting on public-facing endpoints
- [ ] Input validation with Zod on all POST/PUT routes
- [ ] Error handling consistency across API routes
- [ ] PayHere webhook integration testing

## 🔵 Testing & Quality

- [ ] Unit tests for utility functions (currency conversion, date helpers)
- [ ] Component tests for critical UI components
- [ ] API route integration tests
- [ ] E2E test: Visitor browses → inquires → receives confirmation
- [ ] E2E test: Admin creates package → publishes → visible on frontend
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile responsive testing (iPhone, Android)
- [ ] Lighthouse audit (performance, accessibility, SEO)

## 📄 Documentation & SLIIT Deliverables

- [ ] Update README.md with latest features
- [ ] API documentation — verify docs/API.md is current
- [ ] Architecture documentation — verify docs/ARCHITECTURE.md
- [ ] User manual / walkthrough for demo
- [ ] Demo script — update docs/demo_script.md

## 🚀 Pre-Deployment Checklist

- [ ] Remove all console.log statements
- [ ] Verify SEO meta tags on every page
- [ ] Favicon and Open Graph images set
- [ ] 404 page design
- [ ] Error boundary / fallback UI
- [ ] HTTPS and security headers
- [ ] Final Vercel production deployment

---

## Completed

- [x] Homepage premium redesign (10-section funnel)
- [x] Navbar with dropdowns
- [x] Build Tour interactive map foundation
- [x] Authentication system (JWT + cookies)
- [x] Dashboard layout and routing
- [x] MongoDB integration with Mongoose
- [x] Payment integration (PayHere)
- [x] Design system (Liquid Glass)
