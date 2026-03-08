// ─────────────────────────────────────────────────────────
// Transfers Catalog — Single source of truth
// Categories, packages, signature routes, fleet tiers
// ─────────────────────────────────────────────────────────

import {
    Plane,
    TreePine,
    Wine,
    Route,
    Clock,
    Car,
    type LucideIcon,
} from 'lucide-react';

/* ───────── Vehicle Tiers ───────── */
export interface VehicleTier {
    name: string;
    slug: string;
    tagline: string;
    vehicles: string;
    maxGuests: number;
    maxLuggage: string;
    features: string[];
    image: string;
}

export const vehicleTiers: VehicleTier[] = [
    {
        name: 'Executive',
        slug: 'executive',
        tagline: 'Refined comfort for discerning travellers',
        vehicles: 'Mercedes E-Class / BMW 5 Series / Toyota Premio',
        maxGuests: 2,
        maxLuggage: '2 large + 1 carry-on',
        features: ['Leather interior', 'Climate control', 'Complimentary Wi-Fi', 'Bottled water', 'Phone charger'],
        image: '/images/transfers/fleet-executive.jpg',
    },
    {
        name: 'Prestige',
        slug: 'prestige',
        tagline: 'Elevated space for families & small groups',
        vehicles: 'Toyota Land Cruiser Prado / Fortuner / Lexus RX',
        maxGuests: 4,
        maxLuggage: '4 large + 2 carry-on',
        features: ['Premium leather', 'Rear climate zone', 'Wi-Fi & entertainment', 'Refreshment cooler', 'Privacy glass'],
        image: '/images/transfers/fleet-prestige.jpg',
    },
    {
        name: 'Grand',
        slug: 'grand',
        tagline: 'Spacious luxury for larger parties',
        vehicles: 'Mercedes V-Class / Toyota Alphard / KDH Luxury',
        maxGuests: 7,
        maxLuggage: '6 large + 4 carry-on',
        features: ['Captain seats', 'Full climate system', 'On-board Wi-Fi', 'Minibar', 'Ambient lighting', 'Privacy partition'],
        image: '/images/transfers/fleet-grand.jpg',
    },
];

/* ───────── Transfer Categories ───────── */
export interface TransferCategory {
    slug: string;
    title: string;
    subtitle: string;
    promise: string;
    heroDescription: string;
    icon: LucideIcon;
    image: string;
    startingFrom: string;
    typicalDuration: string;
    bestFor: string;
    quickSelectors?: string[];
    packages: TransferPackage[];
}

export interface TransferPackage {
    slug: string;
    title: string;
    tagline: string;
    image: string;
    highlights: string[];
    inclusions: string[];
    vehicleTiers: string[];
    startingFrom: string;
    duration: string;
    addOns: string[];
    itinerary: ItineraryStep[];
    faq: FAQ[];
}

export interface ItineraryStep {
    step: string;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

/* ───────── Signature Routes ───────── */
export interface SignatureRoute {
    from: string;
    to: string;
    title: string;
    slug: string;
    categorySlug: string;
    duration: string;
    distance: string;
    image: string;
}

export const signatureRoutes: SignatureRoute[] = [
    {
        from: 'CMB Airport',
        to: 'Colombo',
        title: 'Executive Arrival',
        slug: 'cmb-executive-arrival',
        categorySlug: 'airport-executive',
        duration: '45 min',
        distance: '35 km',
        image: '/images/transfers/route-cmb-colombo.jpg',
    },
    {
        from: 'CMB Airport',
        to: 'Galle Fort',
        title: 'Coastal Arrival',
        slug: 'cmb-galle-coastal',
        categorySlug: 'airport-executive',
        duration: '2.5 hrs',
        distance: '155 km',
        image: '/images/transfers/route-cmb-galle.jpg',
    },
    {
        from: 'CMB Airport',
        to: 'Kandy',
        title: 'Hill Gateway',
        slug: 'cmb-kandy-gateway',
        categorySlug: 'airport-executive',
        duration: '3.5 hrs',
        distance: '120 km',
        image: '/images/transfers/route-cmb-kandy.jpg',
    },
    {
        from: 'CMB Airport',
        to: 'Ella',
        title: 'Highland Passage',
        slug: 'cmb-ella-highland',
        categorySlug: 'intercity-executive',
        duration: '6 hrs',
        distance: '230 km',
        image: '/images/transfers/route-cmb-ella.jpg',
    },
    {
        from: 'Colombo',
        to: 'Yala',
        title: 'Wilderness Line',
        slug: 'colombo-yala-wilderness',
        categorySlug: 'wilderness-safari',
        duration: '5.5 hrs',
        distance: '305 km',
        image: '/images/transfers/route-colombo-yala.jpg',
    },
    {
        from: 'Kandy',
        to: 'Nuwara Eliya',
        title: 'Tea Country Ascent',
        slug: 'kandy-nuwaraeliya',
        categorySlug: 'intercity-executive',
        duration: '2.5 hrs',
        distance: '80 km',
        image: '/images/transfers/route-kandy-nuwaraeliya.jpg',
    },
];

/* ───────── Categories Data ───────── */
export const transferCategories: TransferCategory[] = [
    {
        slug: 'airport-executive',
        title: 'Executive Airport Passage',
        subtitle: 'Arrivals & departures, perfected',
        promise: 'Meet & greet, fast-track coordination, porter assistance, seamless arrival to vehicle.',
        heroDescription: 'From the moment you step off your flight, every detail is orchestrated — personal meet & greet at arrivals, expedited luggage handling, and a chauffeured passage to your destination in a premium vehicle.',
        icon: Plane,
        image: '/images/transfers/cat-airport.jpg',
        startingFrom: '$65',
        typicalDuration: '45 min – 3.5 hrs',
        bestFor: 'First impressions',
        quickSelectors: ['Arrival', 'Departure', 'Round-trip'],
        packages: [
            {
                slug: 'cmb-executive-arrival',
                title: 'CMB Executive Arrival',
                tagline: 'Your journey begins before you leave the terminal',
                image: '/images/transfers/pkg-cmb-arrival.jpg',
                highlights: ['Personal meet & greet at arrivals', 'Porter & luggage assistance', 'Complimentary refreshments en route'],
                inclusions: [
                    'Named greeter with welcome sign',
                    'Porter assistance to vehicle',
                    'Flight tracking & flexible timing',
                    'Chilled water & refreshment towels',
                    'Wi-Fi enabled vehicle',
                    'Up to 60 min complimentary wait',
                    'Door-to-door to any destination',
                    'Child seat on request',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$65',
                duration: '45 min – 3.5 hrs',
                addOns: ['SIM card activation', 'Welcome hamper', 'Photographer at hotel', 'Guided city introduction'],
                itinerary: [
                    { step: '01', title: 'Flight Monitored', description: 'We track your flight — if you\'re early or delayed, we adjust.' },
                    { step: '02', title: 'Personal Meet', description: 'Named greeter holds your welcome sign at international arrivals.' },
                    { step: '03', title: 'Luggage & Escort', description: 'Porter collects your luggage, escorts you to your waiting vehicle.' },
                    { step: '04', title: 'Journey Begins', description: 'Settle into your premium vehicle with refreshments, Wi-Fi, and comfort.' },
                ],
                faq: [
                    { question: 'What if my flight is delayed?', answer: 'We monitor all incoming flights. Your chauffeur adjusts arrival time automatically — no extra charge for delays.' },
                    { question: 'Can I request a specific vehicle?', answer: 'Yes — select your preferred vehicle tier during booking or let our concierge recommend based on your party size.' },
                    { question: 'Is there a luggage limit?', answer: 'Our Grand tier accommodates up to 6 large suitcases. For larger parties, we arrange additional vehicles seamlessly.' },
                ],
            },
            {
                slug: 'cmb-executive-departure',
                title: 'CMB Executive Departure',
                tagline: 'Arrive at the airport relaxed and on time',
                image: '/images/transfers/pkg-cmb-departure.jpg',
                highlights: ['Hotel lobby pickup', 'Pre-calculated timing', 'Smooth terminal handoff'],
                inclusions: [
                    'Hotel or villa pickup',
                    'Pre-calculated departure timing',
                    'Luggage handling to check-in',
                    'Chilled water & refreshments',
                    'Wi-Fi enabled vehicle',
                    'Flexible scheduling',
                    'Terminal drop-off assistance',
                    'Complimentary 30 min early standby',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$55',
                duration: '45 min – 3.5 hrs',
                addOns: ['Late checkout coordination', 'Souvenir stop en route', 'Express luggage handling'],
                itinerary: [
                    { step: '01', title: 'Pickup Confirmed', description: 'We calculate departure time based on your flight, traffic, and location.' },
                    { step: '02', title: 'Lobby Collection', description: 'Chauffeur meets you at your hotel lobby, handles all luggage.' },
                    { step: '03', title: 'Comfortable Transfer', description: 'Relax in your premium vehicle with refreshments and Wi-Fi.' },
                    { step: '04', title: 'Terminal Handoff', description: 'Drop-off at your departure terminal with porter assistance.' },
                ],
                faq: [
                    { question: 'How early will I be picked up?', answer: 'We recommend 3.5 hours before international flights. We calculate the exact pickup time based on your location and conditions.' },
                    { question: 'Can I make a stop en route?', answer: 'One brief stop (souvenirs, ATM) is complimentary. Additional stops can be arranged for a small supplement.' },
                ],
            },
            {
                slug: 'cmb-round-trip',
                title: 'CMB Round-Trip Coordination',
                tagline: 'Arrival and departure in one seamless booking',
                image: '/images/transfers/pkg-cmb-roundtrip.jpg',
                highlights: ['Both airport transfers covered', 'Single booking, consistent service', 'Priority vehicle assignment'],
                inclusions: [
                    'Arrival meet & greet',
                    'Departure hotel pickup',
                    'Flight monitoring both ways',
                    'Refreshments on both transfers',
                    'Wi-Fi enabled vehicles',
                    'Priority vehicle matching',
                    'Flexible scheduling',
                    'Dedicated concierge contact',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$110',
                duration: 'Full trip coverage',
                addOns: ['Welcome hamper', 'SIM card', 'Photographer', 'Departure souvenir stop'],
                itinerary: [
                    { step: '01', title: 'Arrival Transfer', description: 'Meet & greet at CMB, porter service, chauffeured to your destination.' },
                    { step: '02', title: 'Trip Support', description: 'Dedicated concierge available throughout your Sri Lanka stay.' },
                    { step: '03', title: 'Departure Transfer', description: 'Hotel pickup with pre-calculated timing, terminal drop-off assistance.' },
                ],
                faq: [
                    { question: 'What if my plans change mid-trip?', answer: 'Your dedicated concierge can adjust departure details up to 24 hours before your flight at no extra charge.' },
                ],
            },
            {
                slug: 'cmb-vip-family',
                title: 'CMB VIP Family Arrival',
                tagline: 'Stress-free arrivals for families with children',
                image: '/images/transfers/pkg-cmb-family.jpg',
                highlights: ['Child seats pre-installed', 'Extra luggage capacity', 'Patient, family-trained chauffeur'],
                inclusions: [
                    'Family meet & greet',
                    'Child seats (infant, toddler, booster)',
                    'Extra luggage capacity',
                    'Kids\' refreshment pack',
                    'Wi-Fi & entertainment tablet',
                    'Extended wait time (90 min)',
                    'Family-trained chauffeur',
                    'Door-to-door service',
                ],
                vehicleTiers: ['prestige', 'grand'],
                startingFrom: '$85',
                duration: '45 min – 3.5 hrs',
                addOns: ['Nanny service', 'Baby supplies kit', 'Family photographer'],
                itinerary: [
                    { step: '01', title: 'Pre-Arrival Setup', description: 'Child seats installed, refreshments prepared, entertainment ready.' },
                    { step: '02', title: 'Family Meet', description: 'Greeter assists with children and luggage from arrivals.' },
                    { step: '03', title: 'Comfortable Journey', description: 'Spacious vehicle with entertainment keeps children happy en route.' },
                ],
                faq: [
                    { question: 'What child seats do you provide?', answer: 'We carry rear-facing infant seats, forward-facing toddler seats, and booster seats — all internationally certified. Please specify ages during booking.' },
                ],
            },
        ],
    },
    {
        slug: 'wilderness-safari',
        title: 'Wilderness Chauffeur Expeditions',
        subtitle: 'Into the wild, in absolute comfort',
        promise: 'Yala, Wilpattu, Udawalawe — chauffeur-led transfer with park logistics and sunrise scheduling.',
        heroDescription: 'Navigate Sri Lanka\'s legendary national parks with a dedicated chauffeur who understands wildlife timing, park protocols, and the routes that deliver you to game drives at the perfect moment.',
        icon: TreePine,
        image: '/images/transfers/cat-wilderness.jpg',
        startingFrom: '$120',
        typicalDuration: '4 – 7 hrs',
        bestFor: 'Wildlife enthusiasts',
        packages: [
            {
                slug: 'yala-expedition',
                title: 'Yala Wilderness Transfer',
                tagline: 'Arrive at Yala gates before dawn, prepared and rested',
                image: '/images/transfers/pkg-yala.jpg',
                highlights: ['Pre-dawn timing for sunrise game drives', 'Park entry coordination', 'Comfortable overnight-ready vehicle'],
                inclusions: [
                    'Door-to-door from any origin',
                    'Pre-dawn departure scheduling',
                    'Park entry logistics coordination',
                    'Breakfast hamper on board',
                    'Chilled beverages & snacks',
                    'Wildlife briefing pack',
                    'Binoculars available on request',
                    'Return transfer included',
                ],
                vehicleTiers: ['prestige', 'grand'],
                startingFrom: '$120',
                duration: '5 – 7 hrs each way',
                addOns: ['Safari guide', 'Photography equipment', 'Luxury picnic setup', 'Overnight camp booking'],
                itinerary: [
                    { step: '01', title: 'Pre-Dawn Departure', description: 'Leave your hotel in darkness — arrive at Yala as the sun rises.' },
                    { step: '02', title: 'Scenic Route', description: 'Travel through southern Sri Lanka\'s changing landscapes.' },
                    { step: '03', title: 'Park Arrival', description: 'Chauffeur coordinates with park rangers for smooth entry.' },
                    { step: '04', title: 'Game Drive Ready', description: 'Transfer to safari jeep or continue with your expedition vehicle.' },
                ],
                faq: [
                    { question: 'Do you arrange the safari jeep as well?', answer: 'Yes — we can coordinate a certified safari jeep and naturalist guide as an add-on, or simply deliver you to the park entrance.' },
                    { question: 'What about the return journey?', answer: 'Your chauffeur waits during your game drive and drives you back in comfort. Overnight stays at nearby lodges can also be arranged.' },
                ],
            },
            {
                slug: 'wilpattu-expedition',
                title: 'Wilpattu Wilderness Transfer',
                tagline: 'Sri Lanka\'s largest park, accessed in luxury',
                image: '/images/transfers/pkg-wilpattu.jpg',
                highlights: ['Northern route through cultural sites', 'Leopard country access', 'Flexible multi-day options'],
                inclusions: [
                    'Door-to-door from any origin',
                    'Cultural stop options en route',
                    'Park coordination & entry timing',
                    'Gourmet refreshment hamper',
                    'Wi-Fi enabled vehicle',
                    'Wildlife briefing pack',
                    'Flexible return scheduling',
                    'Multi-day options available',
                ],
                vehicleTiers: ['prestige', 'grand'],
                startingFrom: '$140',
                duration: '4 – 6 hrs each way',
                addOns: ['Anuradhapura heritage stop', 'Safari guide', 'Glamping arrangement', 'Photography kit'],
                itinerary: [
                    { step: '01', title: 'Departure', description: 'Begin your journey north through Sri Lanka\'s cultural heartland.' },
                    { step: '02', title: 'Optional Heritage Stop', description: 'Visit ancient Anuradhapura if time permits.' },
                    { step: '03', title: 'Park Entry', description: 'Coordinated arrival at Wilpattu\'s main gate.' },
                    { step: '04', title: 'Wilderness Begins', description: 'Enter one of Asia\'s most pristine wildlife sanctuaries.' },
                ],
                faq: [
                    { question: 'Is the road to Wilpattu comfortable?', answer: 'The main route is well-maintained highway. Our Prestige and Grand vehicles ensure comfort even on rural stretches near the park.' },
                ],
            },
            {
                slug: 'udawalawe-expedition',
                title: 'Udawalawe Elephant Transfer',
                tagline: 'Into elephant country with curated timing',
                image: '/images/transfers/pkg-udawalawe.jpg',
                highlights: ['Elephant herds virtually guaranteed', 'Shorter, scenic journey', 'Family-friendly options'],
                inclusions: [
                    'Door-to-door from any origin',
                    'Optimal timing for elephant sightings',
                    'Park coordination',
                    'Refreshment hamper',
                    'Family-friendly vehicle options',
                    'Elephant Transit Home visit option',
                    'Return transfer included',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$95',
                duration: '3.5 – 5 hrs each way',
                addOns: ['Elephant Transit Home visit', 'Naturalist guide', 'Picnic lunch', 'Child entertainment pack'],
                itinerary: [
                    { step: '01', title: 'Morning Departure', description: 'Timed for optimal afternoon elephant activity.' },
                    { step: '02', title: 'Scenic Drive', description: 'Through hill country foothills and reservoir landscapes.' },
                    { step: '03', title: 'Park Arrival', description: 'Smooth entry coordination with local rangers.' },
                    { step: '04', title: 'Safari Experience', description: 'Witness Sri Lanka\'s largest elephant herds in their habitat.' },
                ],
                faq: [
                    { question: 'Is Udawalawe good for children?', answer: 'Absolutely — it\'s Sri Lanka\'s most family-friendly park. Elephant sightings are near-guaranteed, and the journey is shorter than Yala.' },
                ],
            },
        ],
    },
    {
        slug: 'capital-by-night',
        title: 'Capital & Coastal Evenings',
        subtitle: 'After-dark experiences, safely navigated',
        promise: 'Colombo after-dark, Galle Fort evenings, fine dining routing, safe return.',
        heroDescription: 'Experience Sri Lanka\'s vibrant evening scene with a personal chauffeur who knows every fine dining destination, rooftop bar, and cultural venue — with a guaranteed safe return, however late the evening goes.',
        icon: Wine,
        image: '/images/transfers/cat-evening.jpg',
        startingFrom: '$45',
        typicalDuration: '3 – 6 hrs',
        bestFor: 'Evening experiences',
        packages: [
            {
                slug: 'colombo-evening',
                title: 'Colombo After-Dark',
                tagline: 'The capital\'s finest, navigated for you',
                image: '/images/transfers/pkg-colombo-evening.jpg',
                highlights: ['Multi-stop dining & nightlife routing', 'Chauffeur waits at each venue', 'Safe return guaranteed'],
                inclusions: [
                    'Hotel pickup',
                    'Up to 4 venue stops',
                    'Chauffeur standby at each location',
                    'Restaurant recommendations',
                    'Late-night return (up to 2am)',
                    'Complimentary water',
                    'Phone charging',
                    'Safe, discreet service',
                ],
                vehicleTiers: ['executive', 'prestige'],
                startingFrom: '$45',
                duration: '4 – 6 hrs',
                addOns: ['Restaurant reservations', 'Rooftop bar suggestions', 'Cultural show tickets', 'Sunset cruise booking'],
                itinerary: [
                    { step: '01', title: 'Evening Pickup', description: 'Your chauffeur collects you from your hotel at your preferred time.' },
                    { step: '02', title: 'Dining & Venues', description: 'Move between Colombo\'s finest restaurants and venues seamlessly.' },
                    { step: '03', title: 'Standby Service', description: 'Your chauffeur waits discreetly at each stop — no rush.' },
                    { step: '04', title: 'Safe Return', description: 'Relax on the drive back to your hotel, however late the evening.' },
                ],
                faq: [
                    { question: 'Can the chauffeur recommend restaurants?', answer: 'Absolutely. Our chauffeurs know Colombo intimately and can suggest venues based on your cuisine preferences and budget.' },
                    { question: 'What if I want to stay out past 2am?', answer: 'Extended hours are available for a small supplement. Just let your chauffeur know.' },
                ],
            },
            {
                slug: 'galle-fort-evening',
                title: 'Galle Fort Evenings',
                tagline: 'Sunset ramparts & colonial charm',
                image: '/images/transfers/pkg-galle-evening.jpg',
                highlights: ['Sunset at the ramparts', 'Fort dining & boutiques', 'Coastal return drive'],
                inclusions: [
                    'Hotel pickup (South Coast)',
                    'Timed for sunset at the Fort',
                    'Up to 3 venue stops',
                    'Chauffeur standby',
                    'Fort navigation assistance',
                    'Complimentary refreshments',
                    'Flexible return timing',
                    'Scenic coastal drive back',
                ],
                vehicleTiers: ['executive', 'prestige'],
                startingFrom: '$55',
                duration: '3 – 5 hrs',
                addOns: ['Fort walking guide', 'Jewelry shopping guide', 'Moonlight beach stop'],
                itinerary: [
                    { step: '01', title: 'Coastal Pickup', description: 'Collected from your south coast accommodation.' },
                    { step: '02', title: 'Sunset Ramparts', description: 'Arrive at Galle Fort timed for golden hour on the ramparts.' },
                    { step: '03', title: 'Fort Exploration', description: 'Dining, boutiques, and galleries within the UNESCO World Heritage site.' },
                    { step: '04', title: 'Moonlit Return', description: 'Drive back along the coast under the stars.' },
                ],
                faq: [
                    { question: 'How far is Galle Fort from major hotels?', answer: 'Most south coast hotels are 15-45 minutes from Galle Fort. We time the journey so you arrive perfectly for sunset.' },
                ],
            },
        ],
    },
    {
        slug: 'intercity-executive',
        title: 'Intercity Executive Transfers',
        subtitle: 'Between destinations, without compromise',
        promise: 'Point-to-point luxury transfer between signature destinations with curated stops.',
        heroDescription: 'Move between Sri Lanka\'s iconic destinations in a premium vehicle with an experienced chauffeur who knows every scenic overlook, tea estate stop, and hidden temple worth a pause along the way.',
        icon: Route,
        image: '/images/transfers/cat-intercity.jpg',
        startingFrom: '$75',
        typicalDuration: '2 – 7 hrs',
        bestFor: 'Multi-destination trips',
        packages: [
            {
                slug: 'colombo-kandy',
                title: 'Colombo → Kandy Heritage Route',
                tagline: 'Through spice gardens and hill country curves',
                image: '/images/transfers/pkg-colombo-kandy.jpg',
                highlights: ['Scenic hill country ascent', 'Optional spice garden stop', 'Temple of the Tooth arrival'],
                inclusions: [
                    'Door-to-door transfer',
                    'Scenic route via Kadugannawa',
                    'One curated stop included',
                    'Refreshment hamper',
                    'Wi-Fi enabled vehicle',
                    'Local insights from chauffeur',
                    'Flexible departure timing',
                    'Luggage handling',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$75',
                duration: '3.5 – 4.5 hrs',
                addOns: ['Pinnawala Elephant Orphanage stop', 'Spice garden tour', 'Lunch at Mountbatten Bungalow', 'Tea factory visit'],
                itinerary: [
                    { step: '01', title: 'Colombo Departure', description: 'Collected from your city hotel or any Colombo address.' },
                    { step: '02', title: 'Ascending Route', description: 'Wind through rubber plantations into the hill country.' },
                    { step: '03', title: 'Curated Stop', description: 'Pause at a spice garden, viewpoint, or heritage site.' },
                    { step: '04', title: 'Kandy Arrival', description: 'Delivered to your hotel with luggage handled.' },
                ],
                faq: [
                    { question: 'Can we stop at Pinnawala?', answer: 'Yes — the Pinnawala Elephant Orphanage is available as a curated add-on stop, adding approximately 1.5 hours to the journey.' },
                ],
            },
            {
                slug: 'kandy-ella',
                title: 'Kandy → Ella Highland Passage',
                tagline: 'Through tea country\'s most breathtaking landscapes',
                image: '/images/transfers/pkg-kandy-ella.jpg',
                highlights: ['Tea estate panoramas', 'Ramboda Falls viewpoint', 'Nine Arches Bridge proximity'],
                inclusions: [
                    'Door-to-door transfer',
                    'Scenic highland route',
                    'Two curated stops included',
                    'Gourmet refreshment hamper',
                    'Wi-Fi enabled vehicle',
                    'Photography stops',
                    'Tea estate visit option',
                    'Luggage handling',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$95',
                duration: '5 – 6.5 hrs',
                addOns: ['Tea factory tour & tasting', 'Ramboda Falls walk', 'Lunch at tea estate bungalow', 'Train ticket booking (partial route)'],
                itinerary: [
                    { step: '01', title: 'Kandy Departure', description: 'Leave Kandy after breakfast, ascending into tea country.' },
                    { step: '02', title: 'Ramboda Falls', description: 'Pause at one of Sri Lanka\'s most photogenic waterfalls.' },
                    { step: '03', title: 'Tea Estates', description: 'Drive through endless tea plantations with panoramic stops.' },
                    { step: '04', title: 'Ella Arrival', description: 'Descend into Ella\'s charming valley, delivered to your accommodation.' },
                ],
                faq: [
                    { question: 'Can we combine this with the scenic train?', answer: 'A popular option — take the iconic Ella train for a portion of the journey. Your chauffeur meets you at the destination station. We handle the logistics.' },
                ],
            },
            {
                slug: 'galle-ella',
                title: 'Galle → Ella Cross-Country',
                tagline: 'Coast to highlands in a single, beautiful journey',
                image: '/images/transfers/pkg-galle-ella.jpg',
                highlights: ['Dramatic landscape transitions', 'Budget Hill Country views', 'Udawalawe reservoir scenery'],
                inclusions: [
                    'Door-to-door transfer',
                    'Cross-country scenic route',
                    'Two curated stops',
                    'Full refreshment service',
                    'Wi-Fi enabled vehicle',
                    'Photography opportunities',
                    'Luggage handling',
                    'Flexible departure time',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$120',
                duration: '6 – 7.5 hrs',
                addOns: ['Udawalawe quick safari', 'Lunch at Haputale viewpoint', 'Buduruwagala statue visit'],
                itinerary: [
                    { step: '01', title: 'Galle Departure', description: 'Leave the coast, heading inland through lush lowlands.' },
                    { step: '02', title: 'Southern Transition', description: 'Pass through paddy fields and into the foothills.' },
                    { step: '03', title: 'Mountain Ascent', description: 'Climb through stunning switchbacks into tea country.' },
                    { step: '04', title: 'Ella Valley', description: 'Arrive in Ella with panoramic views awaiting you.' },
                ],
                faq: [
                    { question: 'Is this route comfortable?', answer: 'The route includes highways and well-maintained mountain roads. Our premium vehicles with climate control make even the winding sections pleasant.' },
                ],
            },
        ],
    },
    {
        slug: 'chauffeur-reserve',
        title: 'On-Demand Chauffeur Reserve',
        subtitle: 'Your time, your schedule, your chauffeur',
        promise: 'Hourly retainers, multi-stop days, discreet driver, premium standby.',
        heroDescription: 'For travellers who want complete flexibility — a personal chauffeur on retainer, available at your schedule, for as many stops, diversions, and spontaneous discoveries as your day holds.',
        icon: Clock,
        image: '/images/transfers/cat-chauffeur.jpg',
        startingFrom: '$35/hr',
        typicalDuration: '4 – 12 hrs',
        bestFor: 'Flexible schedules',
        packages: [
            {
                slug: 'half-day-reserve',
                title: 'Half-Day Chauffeur Reserve',
                tagline: 'Four hours of premium flexibility',
                image: '/images/transfers/pkg-halfday.jpg',
                highlights: ['4-hour minimum block', 'Unlimited stops', 'Local expertise on tap'],
                inclusions: [
                    '4-hour chauffeur block',
                    'Unlimited stops & route changes',
                    'Premium vehicle of choice',
                    'Complimentary refreshments',
                    'Wi-Fi enabled vehicle',
                    'Local recommendations',
                    'Hotel pickup & return',
                    'Flexible scheduling',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$140',
                duration: '4 hrs',
                addOns: ['Extended hours', 'Restaurant booking assistance', 'Shopping guide', 'Photography stops'],
                itinerary: [
                    { step: '01', title: 'Pickup', description: 'Chauffeur arrives at your accommodation at your chosen time.' },
                    { step: '02', title: 'Your Itinerary', description: 'Visit markets, temples, restaurants — whatever you prefer.' },
                    { step: '03', title: 'Standby Service', description: 'Your chauffeur waits at each stop, ready when you are.' },
                    { step: '04', title: 'Return', description: 'Delivered back to your hotel when your exploration is complete.' },
                ],
                faq: [
                    { question: 'What if I go over 4 hours?', answer: 'Additional hours are charged at a fair hourly rate. Your chauffeur will keep you informed if you approach the time limit.' },
                ],
            },
            {
                slug: 'full-day-reserve',
                title: 'Full-Day Chauffeur Reserve',
                tagline: 'A full day of Sri Lanka, your way',
                image: '/images/transfers/pkg-fullday.jpg',
                highlights: ['Up to 10 hours', 'Complete day flexibility', 'Multi-destination capable'],
                inclusions: [
                    'Up to 10-hour chauffeur service',
                    'Unlimited stops & destinations',
                    'Premium vehicle of choice',
                    'Full refreshment service',
                    'Wi-Fi & phone charging',
                    'Local insider knowledge',
                    'Flexible itinerary changes',
                    'Door-to-door service',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$280',
                duration: 'Up to 10 hrs',
                addOns: ['Overnight extension', 'Multi-day package', 'Guide services', 'Gourmet lunch arrangement'],
                itinerary: [
                    { step: '01', title: 'Morning Pickup', description: 'Start early or at your leisure — the day is yours.' },
                    { step: '02', title: 'Explore Freely', description: 'Temples, beaches, tea estates, markets — go wherever inspiration leads.' },
                    { step: '03', title: 'Dining & Discovery', description: 'Your chauffeur knows every local favourite and hidden gem.' },
                    { step: '04', title: 'Evening Return', description: 'Returned to your accommodation after a full day of discovery.' },
                ],
                faq: [
                    { question: 'Can I use this for intercity travel?', answer: 'Yes — a full-day reserve is perfect for point-to-point transfers with multiple exploration stops along the way.' },
                ],
            },
            {
                slug: 'multi-day-retainer',
                title: 'Multi-Day Chauffeur Retainer',
                tagline: 'Your personal chauffeur for the entire trip',
                image: '/images/transfers/pkg-multiday.jpg',
                highlights: ['Same chauffeur throughout', 'Complete trip coverage', 'Ultimate flexibility'],
                inclusions: [
                    'Dedicated chauffeur for entire stay',
                    'Same vehicle throughout',
                    'Unlimited daily hours (fair use)',
                    'Full refreshment service',
                    'Wi-Fi & entertainment',
                    'Local guide capabilities',
                    'Airport transfers included',
                    '24/7 availability',
                ],
                vehicleTiers: ['executive', 'prestige', 'grand'],
                startingFrom: '$250/day',
                duration: '3+ days',
                addOns: ['Second vehicle for group', 'Interpreter services', 'Photography tours', 'Wellness retreat logistics'],
                itinerary: [
                    { step: '01', title: 'Airport Welcome', description: 'Your chauffeur meets you at arrivals — the relationship begins.' },
                    { step: '02', title: 'Daily Service', description: 'Available each day for all transfers, excursions, and discoveries.' },
                    { step: '03', title: 'Trip Companion', description: 'Your chauffeur becomes your local advisor and trusted companion.' },
                    { step: '04', title: 'Departure', description: 'Final transfer to the airport, with a farewell from your chauffeur.' },
                ],
                faq: [
                    { question: 'Will I have the same chauffeur every day?', answer: 'Yes — consistency is key to our service. Your chauffeur learns your preferences, pace, and interests throughout the trip.' },
                    { question: 'Where does the chauffeur stay overnight?', answer: 'We arrange all chauffeur accommodation and meals — this is included in the daily rate.' },
                ],
            },
        ],
    },
    {
        slug: 'signature-fleet',
        title: 'The Signature Fleet',
        subtitle: 'Every vehicle, a statement',
        promise: 'Vehicle classes, interiors, amenities, luggage capacity, privacy level.',
        heroDescription: 'Our fleet is curated, not accumulated. Every vehicle meets international luxury standards — regularly serviced, comprehensively insured, immaculately maintained, and equipped with the amenities discerning travellers expect.',
        icon: Car,
        image: '/images/transfers/cat-fleet.jpg',
        startingFrom: 'From $55',
        typicalDuration: 'All durations',
        bestFor: 'Vehicle selection',
        packages: [],
    },
];

/* ───────── Trust Signals ───────── */
export const trustSignals = [
    { label: 'Licensed Chauffeurs', value: 'SLTDA Certified' },
    { label: 'Concierge Support', value: '24/7' },
    { label: 'Premium Fleet', value: 'Fully Insured' },
    { label: 'Service Standard', value: 'Discreet & Professional' },
];

/* ───────── Helper: get category by slug ───────── */
export function getCategoryBySlug(slug: string): TransferCategory | undefined {
    return transferCategories.find((c) => c.slug === slug);
}

/* ───────── Helper: get package by slug ───────── */
export function getPackageBySlug(
    categorySlug: string,
    packageSlug: string
): { category: TransferCategory; pkg: TransferPackage } | undefined {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return undefined;
    const pkg = category.packages.find((p) => p.slug === packageSlug);
    if (!pkg) return undefined;
    return { category, pkg };
}

/* ───────── Helper: get vehicle tier by slug ───────── */
export function getVehicleTier(slug: string): VehicleTier | undefined {
    return vehicleTiers.find((v) => v.slug === slug);
}
