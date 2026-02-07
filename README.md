<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/MUI-5.16.7-007FFF?style=for-the-badge&logo=mui" alt="MUI"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

<h1 align="center">🌴 Ceylon Escapes</h1>
<h3 align="center">Discover the Pearl of the Indian Ocean</h3>

<p align="center">
  <strong>A modern, responsive tourism website showcasing the beauty of Sri Lanka</strong>
</p>

---

## 📖 About The Project

**Ceylon Escapes** is a fully responsive tourism website built with Next.js 16 and Material-UI. It offers an immersive experience for travelers looking to explore Sri Lanka's rich culture, stunning landscapes, and diverse attractions.

### ✨ Key Features

- 🎬 **Cinematic Hero Section** - Full-screen video background with animated text carousel
- 🗺️ **Tour Packages** - Curated travel packages with detailed itineraries and pricing
- 📍 **Destination Showcase** - Auto-scrolling gallery of popular destinations
- 💬 **Testimonials** - Customer reviews with interactive carousel
- 📞 **Contact Form** - Integrated contact functionality with company details
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎨 **Ocean-Themed Design** - Elegant blue color palette inspired by Sri Lanka's coastline

---

## 🏗️ Architecture Overview

The application follows Next.js App Router architecture with a component-based structure:

```mermaid
graph TB
    subgraph "Next.js 16 App Router"
        A[🏠 RootLayout<br/>layout.js] --> B[ThemeRegistry]
        B --> C[Pages]
        
        subgraph "Pages"
            C --> D[🏠 Home<br/>page.js]
            C --> E[📦 Tours<br/>tours/page.js]
            C --> F[📄 Tour Details<br/>tours/id/page.js]
            C --> G[ℹ️ About<br/>about/page.js]
            C --> H[📞 Contact<br/>contact/page.js]
            C --> I[🗺️ Destinations<br/>destinations/page.js]
        end
    end
    
    subgraph "Data Layer"
        J[(mockData.js)]
    end
    
    J --> |tourPackages| E
    J --> |destinations| I
    J --> |companyInfo| D
```

---

## 🧩 Component Structure

The home page is composed of modular, reusable components:

```mermaid
graph TD
    subgraph "🏠 Home Page Component Tree"
        HP[page.js<br/>Home] --> H[Header]
        HP --> HE[Hero]
        HP --> AS[AboutSriLanka]
        HP --> TP[TourPackages]
        HP --> DE[Destinations]
        HP --> WC[WhyChooseUs]
        HP --> TE[Testimonials]
        HP --> FO[Footer]
    end
    
    subgraph "Shared Components"
        TC[TourCard]
        TR[ThemeRegistry]
    end
    
    TP --> TC
    H --> |navigation| HP
    
    style HP fill:#0284C7,color:#fff
    style H fill:#38BDF8
    style HE fill:#38BDF8
    style AS fill:#38BDF8
    style TP fill:#38BDF8
    style DE fill:#38BDF8
    style WC fill:#38BDF8
    style TE fill:#38BDF8
    style FO fill:#38BDF8
```

---

## 🔄 User Flow

How visitors navigate through the website:

```mermaid
flowchart LR
    A[🌐 Visit Website] --> B[🎬 View Hero<br/>Video & Animation]
    B --> C[📜 Scroll Down]
    C --> D{Choose Action}
    
    D --> E[📦 Browse Tours]
    D --> F[🗺️ View Destinations]
    D --> G[📞 Contact Us]
    
    E --> H[📋 Select Package]
    H --> I[📖 View Details<br/>Itinerary & Pricing]
    I --> J[💬 Book/Inquire]
    
    F --> K[🖼️ Explore Gallery]
    K --> E
    
    G --> L[📝 Submit Form]
    L --> M[✅ Confirmation]
    
    style A fill:#0369A1,color:#fff
    style J fill:#22C55E,color:#fff
    style M fill:#22C55E,color:#fff
```

---

## 📊 Data Flow

How data flows from the centralized data source to components:

```mermaid
flowchart TD
    subgraph "📂 Data Source"
        DATA[(mockData.js)]
    end
    
    subgraph "📤 Exported Data"
        DATA --> CI[companyInfo]
        DATA --> TP[tourPackages]
        DATA --> DS[destinations]
        DATA --> TM[testimonials]
        DATA --> NL[navLinks]
        DATA --> WC[whyChooseUsData]
    end
    
    subgraph "🧩 Components"
        CI --> |name, tagline| Header
        CI --> |description| Hero
        CI --> |phone, email, address| Contact
        CI --> |all info| Footer
        
        TP --> TourPackages
        TP --> TourCard
        
        DS --> Destinations
        
        TM --> Testimonials
        
        NL --> Header
        
        WC --> WhyChooseUs
    end
    
    style DATA fill:#0284C7,color:#fff
```

---

## 📂 Project Structure

```
ITP-Project-Tourism-WEB/
├── 📁 public/
│   ├── 🎬 Srilanka_Overall_Hero_1.mp4    # Hero background video
│   └── 🖼️ *.svg                          # Icon assets
├── 📁 src/
│   ├── 📁 app/                           # Next.js App Router
│   │   ├── 📁 about/                     # About page
│   │   ├── 📁 contact/                   # Contact page
│   │   ├── 📁 destinations/              # Destinations page
│   │   ├── 📁 tours/                     # Tours pages
│   │   │   ├── 📁 [id]/                  # Dynamic tour details
│   │   │   └── page.js                   # Tours listing
│   │   ├── globals.css                   # Global styles
│   │   ├── layout.js                     # Root layout
│   │   └── page.js                       # Home page
│   ├── 📁 components/                    # React components
│   │   ├── Header.js                     # Navigation header
│   │   ├── Hero.js                       # Hero section
│   │   ├── AboutSriLanka.js              # About section
│   │   ├── TourPackages.js               # Tours grid
│   │   ├── TourCard.js                   # Tour card component
│   │   ├── Destinations.js               # Destinations carousel
│   │   ├── WhyChooseUs.js                # Features section
│   │   ├── Testimonials.js               # Reviews section
│   │   ├── Contact.js                    # Contact form
│   │   ├── Footer.js                     # Site footer
│   │   └── ThemeRegistry.js              # MUI theme provider
│   ├── 📁 data/
│   │   └── mockData.js                   # Centralized data
│   └── 📁 theme/
│       └── theme.js                      # MUI theme config
├── package.json
└── README.md
```

---

## 🧩 Component Documentation

### Core Components

| Component | File | Description |
|-----------|------|-------------|
| **Header** | `Header.js` | Responsive navigation with scroll effects, mobile drawer, and smooth scrolling |
| **Hero** | `Hero.js` | Full-screen video background with rotating animated headlines |
| **AboutSriLanka** | `AboutSriLanka.js` | Introduction section with highlights about Sri Lanka |
| **TourPackages** | `TourPackages.js` | Grid layout displaying available tour packages |
| **TourCard** | `TourCard.js` | Individual tour card with pricing, ratings, and details |
| **Destinations** | `Destinations.js` | Auto-scrolling horizontal showcase of destinations |
| **WhyChooseUs** | `WhyChooseUs.js` | Value propositions with icon-based features |
| **Testimonials** | `Testimonials.js` | Customer reviews with star ratings |
| **Contact** | `Contact.js` | Contact form with company information |
| **Footer** | `Footer.js` | Site footer with navigation and social links |

### Component Interaction Flow

```mermaid
sequenceDiagram
    participant U as User
    participant H as Header
    participant HP as HomePage
    participant TP as TourPackages
    participant TD as TourDetails
    participant C as Contact
    
    U->>HP: Visit Homepage
    HP->>H: Render Navigation
    U->>H: Click "Tours"
    H->>HP: Scroll to Tours Section
    HP->>TP: Display Tour Cards
    U->>TP: Click "View Details"
    TP->>TD: Navigate to /tours/[id]
    TD->>U: Show Full Itinerary
    U->>C: Click "Book Now"
    C->>U: Display Contact Form
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.1 | React framework with App Router |
| **React** | 18.3.1 | UI library |
| **Material-UI** | 5.16.7 | Component library |
| **MUI X Data Grid** | 7.18.0 | Data table components |
| **MUI X Charts** | 7.14.0 | Chart components |
| **Emotion** | 11.14.x | CSS-in-JS styling |
| **ESLint** | 9.x | Code linting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ITP-Project-Tourism-WEB.git
   cd ITP-Project-Tourism-WEB
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Theme Configuration

The application uses a custom ocean-themed design system:

```mermaid
graph LR
    subgraph "🎨 Color Palette"
        P1[Primary<br/>#0284C7] --> P2[Light<br/>#38BDF8]
        P1 --> P3[Dark<br/>#0369A1]
        S1[Secondary<br/>#0EA5E9]
        BG[Background<br/>#F0F9FF]
        TXT[Text<br/>#0C4A6E]
    end
    
    style P1 fill:#0284C7,color:#fff
    style P2 fill:#38BDF8,color:#000
    style P3 fill:#0369A1,color:#fff
    style S1 fill:#0EA5E9,color:#fff
    style BG fill:#F0F9FF,color:#000
    style TXT fill:#0C4A6E,color:#fff
```

### Design Features
- **Typography**: Inter font family
- **Border Radius**: 12px default, 20px for cards
- **Buttons**: Gradient backgrounds with hover animations
- **Cards**: Lift effect on hover with subtle shadows

---

## 📦 Tour Packages Data Structure

```mermaid
classDiagram
    class TourPackage {
        +int id
        +string title
        +string duration
        +float price
        +float originalPrice
        +float rating
        +int reviews
        +string image
        +string description
        +string[] highlights
        +string[] inclusions
        +string[] exclusions
        +Itinerary[] itinerary
    }
    
    class Itinerary {
        +int day
        +string title
        +string activity
    }
    
    TourPackage "1" --> "*" Itinerary
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Team

**SLIIT ITP Project Team**

---

<p align="center">
  <strong>🌴 Experience the Magic of Sri Lanka with Ceylon Escapes 🌴</strong>
</p>
