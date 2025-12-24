export const trek = {
    id: "everest-base-camp",
    name: "kanchenjunga base camp",
    description: "A 21-day trek to the world's third highest peak.",
    duration_days: 21,
    difficulty: "Challenging",
    bestSeason: ["Mar","Apr","May","Sep","Oct","Nov"],
    images: ["img1.jpg","img2.jpg"],
    cost: 2500,
    itinerary: [
        {
            day: 1,
            title: "Arrival in Kathmandu",
            description: "Arrive in Kathmandu and transfer to your hotel. Rest and prepare for the trek.",
            overNightLocation: "Kathmandu",
            altitude: 1400,
        },
    ],
    gearLists: ["Trekking boots","Sleeping bag","Warm clothing","Rain gear","Backpack","Trekking poles"],
    viewPoint: [
        {
            id: 1,
            name: "Pangpema North Base Camp",
            description: "A stunning viewpoint offering panoramic views of Kanchenjunga and surrounding peaks.",
            altitude: 5150,
        }
    ]
};

// trek.model.ts

export interface TrekOverview {
  description: string;
  highlights: string[];
  location: {
    country: string;
    region: string;
    bordering: string[];
  };
  difficulty: string;
  durationDays: number;
  altitudeRange: string;
  bestSeason: string[];
}

export interface TripDetails {
  participants: {
    min: number;
    max: number;
  };
  tripStyle: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnight: string | null;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Pricing {
  costPerPerson: number;
  includes: string[];
  excludes: string[];
}

export interface Transport {
  toStartPoint: string;
  fromEndPoint: string;
}

export interface Trek {
  trekId: string;
  title: string;
  overview: TrekOverview;
  tripDetails: TripDetails;
  itinerary: ItineraryDay[];
  images: string[];
  reviews: Review[];
  pricing: Pricing;
  transport: Transport;
}

// Sample trek object
export const kanchenjungaTrek:Trek = {
    trekId: "one",
  title: "Kanchenjunga Base Camp Trek",
  overview: {
    durationDays: 20,
    difficulty: "Challenging",
    altitudeRange: "1,640m - 5,143m",
    location: {
      region: "Eastern Himalayas",
      country: "Nepal",
      bordering: ["Sikkim", "Tibet"]
    },
    description: "Journey to the base of the world's third-highest mountain through pristine forests, remote villages, and glacial landscapes rarely touched by tourism.",
    highlights: [
      "Kanchenjunga North & South Base Camps",
      "Pangpema viewpoint at 5,143m",
      "Remote traditional villages",
      "Diverse flora and fauna",
      "Stunning mountain vistas",
      "Restricted area trekking"
    ],
    bestSeason: ["Spring", "Autumn"]
  },
  tripDetails: {
    participants: { min: 2, max: 12 },
    tripStyle: "Guided, Grouped"
  },
  itinerary: [
    { day: 1, title: "Arrival in Kathmandu", description: "Transfer to hotel, trek briefing and permit preparation.", overnight: "Kathmandu" },
    { day: 2, title: "Fly to Bhadrapur, Drive to Ilam", description: "Scenic flight over eastern Nepal followed by drive through tea plantations.", overnight: "Ilam" },
    { day: 3, title: "Drive to Taplejung", description: "Mountain roads wind through terraced hillsides and small settlements.", overnight: "Taplejung" },
    { day: 4, title: "Trek to Mitlung", description: "Begin trekking through lush subtropical forests along the Tamor River.", overnight: "Mitlung" },
    { day: 5, title: "Trek to Chirwa", description: "Cross suspension bridges and pass through Limbu and Sherpa villages.", overnight: "Chirwa" },
    { day: 6, title: "Trek to Sukathum", description: "Follow the Tamor River through dense rhododendron and bamboo forests.", overnight: "Sukathum" },
    { day: 7, title: "Trek to Amjilosa", description: "Gradual ascent through terraced fields and traditional stone houses.", overnight: "Amjilosa" },
    { day: 8, title: "Trek to Gyabla", description: "Enter the Kanchenjunga Conservation Area with stunning valley views.", overnight: "Gyabla" },
    { day: 9, title: "Trek to Ghunsa", description: "Reach the largest settlement in the region, home to Tibetan refugees.", overnight: "Ghunsa" },
    { day: 10, title: "Acclimatization Day in Ghunsa", description: "Rest day with optional hike to nearby viewpoints for altitude adjustment.", overnight: "Ghunsa" }
  ],
  images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"],
  reviews: [
    { user: "Sarah M.", rating: 5, comment: "Life-changing experience! The remote trails and mountain views exceeded all expectations." },
    { user: "David K.", rating: 5, comment: "Our guide was exceptional. The itinerary was perfectly paced for acclimatization." },
    { user: "Priya S.", rating: 4, comment: "Challenging but rewarding. Make sure you're well-prepared physically!" }
  ],
  pricing: {
    costPerPerson: 2850,
    includes: [
      "Airport transfers",
      "3-star hotel in Kathmandu (2 nights)",
      "All meals during trek",
      "Experienced trekking guide",
      "Porter service (2 trekkers : 1 porter)",
      "Permits and conservation fees",
      "Sleeping bag and down jacket (if needed)"
    ],
    excludes: [
      "International flights",
      "Nepal visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and porter",
      "Extra nights in Kathmandu"
    ]
  },
  transport: {
    toStartPoint: "Fly from Kathmandu to Bhadrapur, then drive to Taplejung (approx. 8 hours)",
    fromEndPoint: "Drive from Taplejung to Bhadrapur, fly back to Kathmandu"
  }
};
