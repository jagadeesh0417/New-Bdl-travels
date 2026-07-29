export interface Rental {
  slug: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  seating: string;
  transmission: string;
  ac: string;
  fuel: string;
  dailyPrice: string;
  perKmPrice: string;
  desc: string;
  features: string[];
  terms: string[];
  driverAvailable: boolean;
  securityDeposit: string;
  addons: { name: string; price: string }[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; rating: number; comment: string }[];
}

export const rentals: Rental[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    category: "Hatchback Cars",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    seating: "5 Persons",
    transmission: "Manual",
    ac: "AC",
    fuel: "Petrol",
    dailyPrice: "₹1,500/day",
    perKmPrice: "₹8/km",
    desc: "Economical and fuel-efficient hatchback cars perfect for city rides, airport transfers, and short trips. Easy to drive and park in busy areas.",
    features: ["Fuel-efficient engine", "Power steering", "Central locking", "Music system", "Spare tyre & toolkit", "Floor mats"],
    terms: ["24-hour rental period starts from pickup time", "Free unlimited km within city limits", "Overnight trips allowed with prior approval", "Fuel cost not included in rental", "One-way drops available at extra cost"],
    driverAvailable: true,
    securityDeposit: "₹5,000",
    addons: [
      { name: "Child seat", price: "₹200/day" },
      { name: "GPS Navigation", price: "₹150/day" },
      { name: "Additional driver", price: "₹300/day" },
    ],
    faqs: [
      { q: "Can I take the car outstation?", a: "Yes, with prior approval. Outstation trips have a per-km charge applied." },
      { q: "Is insurance included?", a: "Third-party insurance is included. Zero-deposit coverage available at extra cost." },
      { q: "What if the car breaks down?", a: "We provide roadside assistance 24/7. Contact our support team immediately." },
    ],
    reviews: [
      { name: "Suresh R", rating: 5, comment: "Great car, well maintained. Perfect for Bangalore city driving." },
      { name: "Lakshmi P", rating: 4, comment: "Good value for money. Smooth booking process." },
    ],
  },
  {
    slug: "sedan",
    name: "Sedan",
    category: "Sedan Cars",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    ],
    seating: "5 Persons",
    transmission: "Manual / Automatic",
    ac: "AC",
    fuel: "Petrol / Diesel",
    dailyPrice: "₹2,500/day",
    perKmPrice: "₹14/km",
    desc: "Comfortable sedans with spacious boot and premium interiors. Ideal for business travel, airport transfers, and family outings.",
    features: ["Spacious boot (450L+)", "Rear AC vents", "Touchscreen infotainment", "Push-button start", "Reverse camera", "ABS with EBD"],
    terms: ["Minimum 24-hour rental", "200 km per day included", "Extra km charged at per-km rate", "Fuel excluded", "Late return fee applies"],
    driverAvailable: true,
    securityDeposit: "₹10,000",
    addons: [
      { name: "Child seat", price: "₹200/day" },
      { name: "GPS Navigation", price: "₹150/day" },
      { name: "Toll pass", price: "₹100/day" },
    ],
    faqs: [
      { q: "Can I choose automatic transmission?", a: "Yes, automatic sedans available subject to availability. Please specify at booking." },
      { q: "Is there a mileage limit?", a: "200 km per day included. Extra km charged at ₹14/km." },
    ],
    reviews: [
      { name: "Arun K", rating: 5, comment: "Excellent car, very clean. Great for long drives." },
      { name: "Priya M", rating: 5, comment: "Smooth ride, professional driver. Highly recommend." },
    ],
  },
  {
    slug: "suv",
    name: "SUV",
    category: "SUVs",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    seating: "7 Persons",
    transmission: "Manual / Automatic",
    ac: "AC",
    fuel: "Diesel",
    dailyPrice: "₹3,500/day",
    perKmPrice: "₹18/km",
    desc: "Powerful SUVs with high ground clearance for rough terrain and long-distance travel. Perfect for family road trips and hill station drives.",
    features: ["4x4 option available", "High ground clearance", "Captain seats (optional)", "Large cargo space", "Hill assist", "Alloy wheels"],
    terms: ["24-hour rental", "250 km per day included", "Extra km at ₹18/km", "Diesel fuel only", "Driver s allowance included"],
    driverAvailable: true,
    securityDeposit: "₹15,000",
    addons: [
      { name: "Roof carrier", price: "₹300/day" },
      { name: "Additional driver", price: "₹400/day" },
    ],
    faqs: [
      { q: "Is 4x4 available?", a: "Yes, select SUV models come with 4x4 option. Please inquire at booking." },
      { q: "Can I take it to Ladakh?", a: "Yes, our SUVs are suitable for Ladakh trips. Special permits may be required." },
    ],
    reviews: [
      { name: "Vikram S", rating: 5, comment: "Took it to Coorg, amazing drive. Very comfortable for 5 people." },
      { name: "Rahul D", rating: 4, comment: "Powerful vehicle, great for mountain roads." },
    ],
  },
  {
    slug: "luxury-car",
    name: "Luxury Car",
    category: "Luxury Cars",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    seating: "4-5 Persons",
    transmission: "Automatic",
    ac: "AC (Dual Zone)",
    fuel: "Petrol / Diesel",
    dailyPrice: "₹6,000/day",
    perKmPrice: "₹25/km",
    desc: "Premium luxury sedans and SUVs from top brands. Leather interiors, premium sound systems, and chauffeur service included.",
    features: ["Leather upholstery", "Premium sound system", "Sunroof", "Ambient lighting", "Ventilated seats", "Chauffeur included"],
    terms: ["Minimum 8-hour / 80 km booking", "Chauffeur included in price", "Fuel included for local trips", "Outstation at per-km rate", "Grooming fee applicable for weddings"],
    driverAvailable: true,
    securityDeposit: "₹20,000",
    addons: [
      { name: "Wedding decoration", price: "₹5,000" },
      { name: "Extended hours", price: "₹500/hour" },
    ],
    faqs: [
      { q: "Can I self-drive a luxury car?", a: "No, luxury cars come with a professional chauffeur only." },
      { q: "Are luxury cars available for airport pickup?", a: "Yes, we offer luxury airport transfers with meet-and-greet service." },
    ],
    reviews: [
      { name: "Anita R", rating: 5, comment: "Used for wedding, absolutely stunning car. Very professional service." },
      { name: "Karthik N", rating: 5, comment: "Best luxury car rental in Bangalore. Worth every rupee." },
    ],
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Tempo Traveller",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=800&q=80",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    ],
    seating: "12-16 Persons",
    transmission: "Manual",
    ac: "AC",
    fuel: "Diesel",
    dailyPrice: "₹4,000/day",
    perKmPrice: "₹22/km",
    desc: "Spacious tempo travellers with push-back seats, ideal for group trips, corporate outings, and temple tours.",
    features: ["Push-back reclining seats", "LED TV/Music system", "Large luggage space", "Reading lights", "Charging points", "First-aid kit"],
    terms: ["24-hour rental", "250 km per day included", "Driver allowance included", "Toll & parking extra", "Night halt charges apply for outstation"],
    driverAvailable: true,
    securityDeposit: "₹10,000",
    addons: [
      { name: "Extra luggage carrier", price: "₹500/trip" },
      { name: "Mini fridge", price: "₹300/day" },
    ],
    faqs: [
      { q: "How many people can sit?", a: "12-seater (9+1+2) and 16-seater (13+1+2) options available." },
      { q: "Is there a toilet on board?", a: "No, but we take scheduled breaks during long journeys." },
    ],
    reviews: [
      { name: "Srinivas G", rating: 5, comment: "Took 12-seater for Tirupati trip. Very comfortable and clean." },
      { name: "Lokesh M", rating: 4, comment: "Good for group travel. Driver was punctual and polite." },
    ],
  },
  {
    slug: "mini-bus",
    name: "Mini Bus",
    category: "Mini Bus",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    ],
    seating: "20-26 Persons",
    transmission: "Manual",
    ac: "AC / Non-AC",
    fuel: "Diesel",
    dailyPrice: "₹5,500/day",
    perKmPrice: "₹28/km",
    desc: "Perfect for wedding guests, college trips, corporate events, and large family gatherings. Comfortable seating with ample legroom.",
    features: ["Push-back seats", "Overhead AC vents", "PA system", "Luggage compartment", "Emergency exits", "Speed governor"],
    terms: ["24-hour rental", "250 km per day included", "Driver & cleaner included", "Fuel excluded", "Night halt charges extra"],
    driverAvailable: true,
    securityDeposit: "₹15,000",
    addons: [
      { name: "Decoration", price: "₹2,000" },
      { name: "Additional stops", price: "₹500/stop" },
    ],
    faqs: [
      { q: "Can we choose AC or Non-AC?", a: "Both options available. AC buses have a slightly higher rate." },
      { q: "Is there space for luggage?", a: "Yes, under-chassis luggage compartment is available." },
    ],
    reviews: [
      { name: "Rajesh K", rating: 5, comment: "Used for wedding, guests loved the comfort. Very spacious." },
      { name: "Meena S", rating: 4, comment: "Great for college trip. Driver was experienced." },
    ],
  },
  {
    slug: "luxury-bus",
    name: "Luxury Bus",
    category: "Luxury Bus",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    ],
    seating: "40-50 Persons",
    transmission: "Manual",
    ac: "AC (Multi-zone)",
    fuel: "Diesel",
    dailyPrice: "₹8,500/day",
    perKmPrice: "₹45/km",
    desc: "Premium luxury buses with push-back sleeper seats, washroom, and entertainment system. Ideal for corporate off-sites, long-distance tours, and large events.",
    features: ["Push-back sleeper seats", "Attached washroom", "GPS tracking", "LED TV & music", "Reading lights", "Charging points", "Coat hangers"],
    terms: ["24-hour rental", "300 km per day included", "Driver & cleaner included", "Toll, parking & state tax extra", "Advance booking required"],
    driverAvailable: true,
    securityDeposit: "₹25,000",
    addons: [
      { name: "Catering service", price: "₹500/person" },
      { name: "Onboard host", price: "₹1,500/day" },
    ],
    faqs: [
      { q: "Does the bus have a washroom?", a: "Yes, all our luxury buses have an attached washroom." },
      { q: "Can I book for a single day trip?", a: "Yes, but minimum 8-hour / 200 km applies." },
    ],
    reviews: [
      { name: "Anand P", rating: 5, comment: "Booked for office offsite. Very luxurious and well-maintained." },
      { name: "Sunitha R", rating: 5, comment: "Best bus for long-distance travel. Very comfortable." },
    ],
  },
  {
    slug: "airport-pickup",
    name: "Airport Pickup & Drop",
    category: "Airport Transfer",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    ],
    seating: "1-5 Persons",
    transmission: "Manual / Automatic",
    ac: "AC",
    fuel: "Petrol / Diesel",
    dailyPrice: "₹1,200/trip",
    perKmPrice: "N/A (fixed trip rate)",
    desc: "Hassle-free airport transfers with flight tracking, meet-and-greet service, and luggage assistance. Available 24/7.",
    features: ["Flight tracking", "Meet & greet at arrival", "Luggage assistance", "24/7 availability", "Cancellation flexibility", "Multiple vehicle options"],
    terms: ["Fixed rate per trip (one-way)", "Waiting time: 30 mins free (airport), 15 mins free (pickup)", "Extra waiting charged at ₹100/15 mins", "Toll & parking included", "Night charges (11 PM - 6 AM): +20%"],
    driverAvailable: true,
    securityDeposit: "None",
    addons: [
      { name: "Extra waiting time", price: "₹100/15 mins" },
      { name: "Baby seat", price: "₹200" },
    ],
    faqs: [
      { q: "Will the driver track my flight?", a: "Yes, we monitor all flights and adjust pickup time accordingly." },
      { q: "What if my flight is delayed?", a: "No extra charge for flight delays. Driver will wait with your name board." },
    ],
    reviews: [
      { name: "Naveen T", rating: 5, comment: "Driver was waiting with name board. Very professional service." },
      { name: "Divya K", rating: 5, comment: "Late night flight, no issues. Smooth pickup and drop." },
    ],
  },
];
