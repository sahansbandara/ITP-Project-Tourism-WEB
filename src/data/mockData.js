export const companyInfo = {
    name: 'Ceylon Escapes',
    tagline: 'Discover the Pearl of the Indian Ocean',
    description: 'Experience the magic of Sri Lanka with our carefully curated tours. From ancient temples to pristine beaches, lush tea plantations to thrilling wildlife safaris, we make your dream vacation a reality.',
    phone: '+94 11 234 5678',
    email: 'hello@ceylonescapes.com',
    address: '42 Galle Face Terrace, Colombo 03, Sri Lanka',
    whatsapp: '+94 77 123 4567',
};

export const tourPackages = [
    {
        id: 1,
        title: 'Cultural Triangle Explorer',
        duration: '5 Days / 4 Nights',
        price: 599,
        originalPrice: 749,
        rating: 4.9,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1588598198321-9735fd99d0e2?w=800',
        highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Ancient Polonnaruwa', 'Kandy Temple'],
        description: 'Journey through Sri Lanka\'s ancient kingdoms, exploring UNESCO World Heritage sites and mystical temples.',
        fullDescription: 'Immerse yourself in the rich history of Sri Lanka with our Cultural Triangle Explorer tour. This 5-day journey takes you to the heart of the island\'s ancient civilizations. Marvel at the engineering of Sigiriya, walk through the sacred caves of Dambulla, and explore the ruins of Polonnaruwa. The tour concludes in the hill capital of Kandy, home to the sacred Temple of the Tooth Relic.',
        inclusions: ['4 Star Accommodation', 'Daily Breakfast & Dinner', 'Air-conditioned Transport', 'English Speaking Guide', 'Entrance Fees'],
        exclusions: ['Lunch', 'Personal Expenses', 'Tips', 'International Flights'],
        itinerary: [
            { day: 1, title: 'Arrival & Transfer to Sigiriya', activity: 'Welcome to Sri Lanka! Transfer to your hotel in Sigiriya. Relax and enjoy the surroundings.' },
            { day: 2, title: 'Sigiriya & Dambulla', activity: 'Morning climb of Sigiriya Lion Rock. Afternoon visit to Dambulla Cave Temple.' },
            { day: 3, title: 'Polonnaruwa Ancient City', activity: 'Explore the well-preserved ruins of Polonnaruwa. Cycle through the ancient city.' },
            { day: 4, title: 'Transfer to Kandy', activity: 'Visit a Spice Garden en route. Evening cultural show and Temple of the Tooth visit in Kandy.' },
            { day: 5, title: 'Kandy City Tour & Departure', activity: 'Visit the Royal Botanical Gardens. Shopping in Kandy before airport transfer.' }
        ]
    },
    {
        id: 2,
        title: 'Southern Coast Adventure',
        duration: '4 Days / 3 Nights',
        price: 449,
        originalPrice: 549,
        rating: 4.8,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800',
        highlights: ['Galle Fort', 'Whale Watching', 'Mirissa Beach', 'Sea Turtle Hatchery'],
        description: 'Experience the stunning southern coastline with pristine beaches, colonial architecture, and marine adventures.',
        fullDescription: 'Discover the charm of Sri Lanka\'s southern coast. From the historic ramparts of Galle Fort to the golden sands of Mirissa, this tour is a perfect blend of culture and relaxation. Witness the gentle giants of the ocean on a whale watching expedition and help conservation efforts at a sea turtle hatchery.',
        inclusions: ['Beachfront Accommodation', 'Daily Breakfast', 'Private Transport', 'Whale Watching Tickets', 'Galle Fort Tour'],
        exclusions: ['Lunch & Dinner', 'Personal Expenses', 'Drinks'],
        itinerary: [
            { day: 1, title: 'Arrival & Bentota', activity: 'Transfer to the south coast. Visit a Sea Turtle Hatchery and enjoy a river safari in Bentota.' },
            { day: 2, title: 'Galle Fort Explorer', activity: 'Walking tour of the UNESCO World Heritage Galle Fort. Sunset at the ramparts.' },
            { day: 3, title: 'Mirissa & Whales', activity: 'Early morning whale watching tour. Relax on Mirissa beach in the afternoon.' },
            { day: 4, title: 'Departure', activity: 'Morning leisure at the beach. Transfer to the airport.' }
        ]
    },
    {
        id: 3,
        title: 'Hill Country Escape',
        duration: '3 Days / 2 Nights',
        price: 349,
        originalPrice: 429,
        rating: 4.9,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800',
        highlights: ['Tea Plantations', 'Ella Nine Arch Bridge', 'Horton Plains', 'Train Journey'],
        description: 'Escape to the misty mountains, rolling tea estates, and breathtaking viewpoints of Sri Lanka\'s highlands.',
        fullDescription: 'Breathe in the fresh mountain air of Sri Lanka\'s hill country. This tour takes you on one of the most scenic train journeys in the world, through lush green tea plantations and misty valleys. Hike to the famous Nine Arch Bridge in Ella and explore the biodiversity of Horton Plains National Park.',
        inclusions: ['Boutique Accommodation', 'Daily Breakfast', 'Scenic Train Tickets', 'Tea Factory Visit', 'Guide'],
        exclusions: ['Lunch & Dinner', 'Personal Expenses', 'Hiking Gear'],
        itinerary: [
            { day: 1, title: 'Kandy to Nuwara Eliya', activity: 'Scenic drive to Nuwara Eliya, "Little England". Visit a tea factory and waterfall.' },
            { day: 2, title: 'Horton Plains & Train Ride', activity: 'Morning hike at Horton Plains (World\'s End). Iconic train ride from Nanu Oya to Ella.' },
            { day: 3, title: 'Ella & Departure', activity: 'Visit Nine Arch Bridge and Little Adam\'s Peak. Transfer to airport or next destination.' }
        ]
    },
    {
        id: 4,
        title: 'Wildlife Safari Experience',
        duration: '4 Days / 3 Nights',
        price: 499,
        originalPrice: 599,
        rating: 4.7,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
        highlights: ['Yala National Park', 'Udawalawe Elephants', 'Bird Watching', 'Leopard Spotting'],
        description: 'Encounter majestic elephants, elusive leopards, and exotic birds in Sri Lanka\'s premier wildlife parks.',
        fullDescription: 'For the nature enthusiast, this tour offers the best wildlife experiences in Sri Lanka. Go on thrilling jeep safaris in Yala, known for its leopard density, and Udawalawe, famous for its large elephant herds. Stay in eco-friendly lodges close to nature.',
        inclusions: ['Safari Lodge Stay', 'All Meals', 'Jeep Safaris (3)', 'Park Entrance Fees', 'Naturalist Guide'],
        exclusions: ['Personal Expenses', 'Tips', 'Alcoholic Beverages'],
        itinerary: [
            { day: 1, title: 'Arrival & Udawalawe', activity: 'Transfer to Udawalawe. Afternoon safari to see elephants.' },
            { day: 2, title: 'Transfer to Yala', activity: 'Morning visit to Elephant Transit Home. Transfer to Yala. Evening leisure.' },
            { day: 3, title: 'Yala Full Day Safari', activity: 'Morning and afternoon game drives in Yala National Park to spot leopards and sloth bears.' },
            { day: 4, title: 'Bird Watching & Departure', activity: 'Morning bird watching walk. Transfer to airport.' }
        ]
    },
    {
        id: 5,
        title: 'Complete Sri Lanka',
        duration: '10 Days / 9 Nights',
        price: 1199,
        originalPrice: 1499,
        rating: 5.0,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800',
        highlights: ['All Major Sites', 'Beach Stay', 'Safari', 'Cultural Shows'],
        description: 'The ultimate Sri Lankan experience covering culture, nature, wildlife, and beaches in one comprehensive tour.',
        fullDescription: 'Experience the best of everything Sri Lanka has to offer. This comprehensive 10-day tour covers the Cultural Triangle, the cool Hill Country, the wild Yala National Park, and the relaxing southern beaches. It is the perfect introduction to the island\'s diverse landscapes and heritage.',
        inclusions: ['Luxury Accommodation', 'Daily Breakfast & Dinner', 'Private Vehicle', 'All Entrance Fees', 'Cultural Shows'],
        exclusions: ['Lunch', 'Personal Expenses', 'Video/Camera Permits'],
        itinerary: [
            { day: 1, title: 'Arrival in Colombo', activity: 'Airport pickup and transfer to hotel in Negombo/Colombo.' },
            { day: 2, title: 'Sigiriya', activity: 'Transfer to Cultural Triangle. Climb Sigiriya Rock Fortress.' },
            { day: 3, title: 'Polonnaruwa', activity: 'Visit Polonnaruwa ancient city and Minneriya National Park safari.' },
            { day: 4, title: 'Dambulla & Kandy', activity: 'Visit Dambulla Cave Temple and Spice Garden. Transfer to Kandy.' },
            { day: 5, title: 'Nuwara Eliya', activity: 'Train ride to Nuwara Eliya. Tea factory visit.' },
            { day: 6, title: 'Ella', activity: 'Transfer to Ella. Visit Nine Arch Bridge.' },
            { day: 7, title: 'Yala', activity: 'Transfer to Yala. Afternoon jeep safari.' },
            { day: 8, title: 'Mirissa', activity: 'Transfer to Mirissa beach. Relax by the ocean.' },
            { day: 9, title: 'Galle', activity: 'Day trip to Galle Fort. Turtle hatchery visit.' },
            { day: 10, title: 'Departure', activity: 'Transfer to airport for departure.' }
        ]
    },
    {
        id: 6,
        title: 'Romantic Getaway',
        duration: '5 Days / 4 Nights',
        price: 699,
        originalPrice: 849,
        rating: 4.9,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
        highlights: ['Luxury Resorts', 'Candlelit Dinners', 'Spa Treatments', 'Private Tours'],
        description: 'Create unforgettable memories with your loved one in the most romantic settings across Sri Lanka.',
        fullDescription: 'Celebrate your love in paradise. This romantic getaway is designed for couples, featuring stays in luxurious boutique hotels, private candlelit dinners, and relaxing spa treatments. Enjoy the privacy and beauty of Sri Lanka\'s most romantic destinations.',
        inclusions: ['Honeymoon Suite', 'Daily Breakfast', 'Candlelit Dinner (1)', 'Couples Spa Treatment', 'Private Chauffeur'],
        exclusions: ['Lunch', 'Alcohol', 'Personal Expenses'],
        itinerary: [
            { day: 1, title: 'Arrival & Negombo', activity: 'Welcome to Sri Lanka. Relax at a luxury beach resort in Negombo.' },
            { day: 2, title: 'Kandy', activity: 'Scenic drive to Kandy. Private tour of the Botanical Gardens.' },
            { day: 3, title: 'Nuwara Eliya', activity: 'High tea at the Grand Hotel. Relaxing boat ride on Lake Gregory.' },
            { day: 4, title: 'Bentota', activity: 'Transfer to a beach resort in Bentota. Sunset river cruise.' },
            { day: 5, title: 'Departure', activity: 'Last minute shopping. Transfer to airport.' }
        ]
    },
];

export const destinations = [
    {
        id: 1,
        name: 'Sigiriya',
        image: 'https://images.unsplash.com/photo-1588598198321-9735fd99d0e2?w=600',
        description: 'Ancient rock fortress',
        longDescription: 'Dominated by a massive column of rock nearly 200 meters high, Sigiriya is one of Sri Lanka\'s most iconic landmarks. This ancient fortress features colorful frescoes, a mirror wall, and the ruins of a palace on the summit, offering panoramic views of the surrounding jungle. It is a UNESCO World Heritage site and a testament to ancient urban planning.',
    },
    {
        id: 2,
        name: 'Galle',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600',
        description: 'Colonial heritage',
        longDescription: 'Explore the historic Galle Fort, a UNESCO World Heritage site that blends European architectural styles with South Asian traditions. Wander through cobblestone streets lined with Dutch-colonial buildings, boutique shops, and cafes. The fort\'s ramparts offer stunning views of the Indian Ocean, making it a perfect spot for sunset.',
    },
    {
        id: 3,
        name: 'Ella',
        image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=600',
        description: 'Mountain paradise',
        longDescription: 'Nestled in the central highlands, Ella is a picturesque village surrounded by tea plantations, waterfalls, and misty mountains. Famous for the Nine Arch Bridge and Little Adam\'s Peak, it offers excellent hiking opportunities and a cool climate. It\'s a haven for nature lovers and backpackers seeking tranquility.',
    },
    {
        id: 4,
        name: 'Yala',
        image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600',
        description: 'Wildlife safari',
        longDescription: 'Yala National Park is Sri Lanka\'s most popular wildlife sanctuary, renowned for having one of the highest densities of leopards in the world. Embark on a safari to spot elephants, sloth bears, crocodiles, and a variety of bird species in their natural habitat. The park\'s diverse ecosystems range from moist monsoon forests to freshwater marine wetlands.',
    },
    {
        id: 5,
        name: 'Kandy',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600',
        description: 'Sacred city',
        longDescription: 'The cultural capital of Sri Lanka, Kandy is home to the Temple of the Sacred Tooth Relic, a major pilgrimage site. Surrounded by mountains and centered around a scenic lake, the city showcases rich history and tradition. Witness captivating Kandyan dance performances and explore the Royal Botanical Gardens nearby.',
    },
    {
        id: 6,
        name: 'Mirissa',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
        description: 'Beach paradise',
        longDescription: 'Mirissa is a tropical paradise famous for its stunning crescent-shaped beach and vibrant nightlife. It is one of the best places in the world for whale watching, where you can spot blue whales and dolphins. Relax on the golden sands, surf the waves, or enjoy fresh seafood at the beachside restaurants.',
    },
];

export const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        country: 'United States',
        avatar: 'SJ',
        rating: 5,
        comment: 'Absolutely incredible experience! The Cultural Triangle tour exceeded all expectations. Our guide was knowledgeable and the accommodations were top-notch.',
        tour: 'Cultural Triangle Explorer',
    },
    {
        id: 2,
        name: 'Michael Chen',
        country: 'Australia',
        avatar: 'MC',
        rating: 5,
        comment: 'The Complete Sri Lanka package was worth every penny. We saw leopards at Yala, enjoyed the beaches, and fell in love with the hill country. Highly recommended!',
        tour: 'Complete Sri Lanka',
    },
    {
        id: 3,
        name: 'Emma Williams',
        country: 'United Kingdom',
        avatar: 'EW',
        rating: 5,
        comment: 'Perfect honeymoon! The romantic getaway was beautifully planned with surprise touches. Ceylon Escapes made our special trip truly magical.',
        tour: 'Romantic Getaway',
    },
    {
        id: 4,
        name: 'Hans Mueller',
        country: 'Germany',
        avatar: 'HM',
        rating: 5,
        comment: 'Professional service from start to finish. The wildlife safari was breathtaking - we saw elephants, crocodiles, and even a leopard!',
        tour: 'Wildlife Safari Experience',
    },
];

export const stats = [
    { label: 'Happy Travelers', value: '15,000+' },
    { label: 'Tour Packages', value: '50+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Expert Guides', value: '35+' },
];

export const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tours', href: '/tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];
