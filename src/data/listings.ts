
export interface Listing {
  id: string;
  title: string;
  location: string;
  images: string[];
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  type: string;
  beds: number;
  bathrooms: number;
  hostName: string;
  hostImage: string;
  amenities: string[];
  description: string;
  latitude: number;
  longitude: number;
  dates: {
    startDate: string;
    endDate: string;
  };
  category: string;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Luxurious Beachfront Villa",
    location: "Miami Beach, Florida",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      "https://images.unsplash.com/photo-1581974206967-93856b25aa51"
    ],
    pricePerNight: 350,
    rating: 4.96,
    reviewCount: 124,
    type: "Entire villa",
    beds: 4,
    bathrooms: 3,
    hostName: "Sarah",
    hostImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    amenities: ["Beach access", "Pool", "Wifi", "Kitchen", "Free parking", "Air conditioning"],
    description: "Stunning beachfront villa with panoramic ocean views. Enjoy the private pool, direct beach access, and luxurious amenities.",
    latitude: 25.7617,
    longitude: -80.1918,
    dates: {
      startDate: "2023-11-15",
      endDate: "2023-11-20"
    },
    category: "Beach"
  },
  {
    id: "2",
    title: "Modern Loft in Downtown",
    location: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1"
    ],
    pricePerNight: 250,
    rating: 4.88,
    reviewCount: 87,
    type: "Entire loft",
    beds: 2,
    bathrooms: 2,
    hostName: "Michael",
    hostImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    amenities: ["Wifi", "Kitchen", "Air conditioning", "Washer", "Dryer", "Elevator"],
    description: "Stylish loft in the heart of downtown with floor-to-ceiling windows offering spectacular city views. Walking distance to restaurants, shops, and attractions.",
    latitude: 40.7128,
    longitude: -74.0060,
    dates: {
      startDate: "2023-12-05",
      endDate: "2023-12-10"
    },
    category: "City"
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    images: [
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ],
    pricePerNight: 195,
    rating: 4.92,
    reviewCount: 215,
    type: "Entire cabin",
    beds: 3,
    bathrooms: 2,
    hostName: "David",
    hostImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
    amenities: ["Mountain view", "Fireplace", "Wifi", "Kitchen", "Free parking", "Heating"],
    description: "Charming cabin nestled in the mountains with breathtaking views. Perfect for a winter getaway or summer hiking adventure.",
    latitude: 39.1911,
    longitude: -106.8175,
    dates: {
      startDate: "2024-01-08",
      endDate: "2024-01-15"
    },
    category: "Mountain"
  },
  {
    id: "4",
    title: "Rustic Farmhouse Retreat",
    location: "Sonoma, California",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1595514535115-33fdc428d263",
      "https://images.unsplash.com/photo-1574643156929-51fa098b0394"
    ],
    pricePerNight: 275,
    rating: 4.95,
    reviewCount: 68,
    type: "Entire home",
    beds: 5,
    bathrooms: 3,
    hostName: "Emily",
    hostImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    amenities: ["Vineyard views", "Wifi", "Kitchen", "Free parking", "Outdoor dining area", "Fireplace"],
    description: "Beautiful farmhouse surrounded by vineyards in the heart of Wine Country. Enjoy wine tasting, farm-to-table dining, and peaceful countryside living.",
    latitude: 38.2922,
    longitude: -122.4580,
    dates: {
      startDate: "2023-11-22",
      endDate: "2023-11-27"
    },
    category: "Countryside"
  },
  {
    id: "5",
    title: "Tropical Paradise Villa",
    location: "Kauai, Hawaii",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d"
    ],
    pricePerNight: 425,
    rating: 4.98,
    reviewCount: 143,
    type: "Entire villa",
    beds: 4,
    bathrooms: 4,
    hostName: "Jessica",
    hostImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    amenities: ["Ocean view", "Pool", "Wifi", "Kitchen", "Free parking", "Air conditioning", "Beach access"],
    description: "Spectacular villa with panoramic ocean views in a lush tropical setting. Enjoy the private pool, lush gardens, and nearby beaches.",
    latitude: 22.0964,
    longitude: -159.5261,
    dates: {
      startDate: "2024-02-10",
      endDate: "2024-02-17"
    },
    category: "Tropical"
  },
  {
    id: "6",
    title: "Chic Downtown Apartment",
    location: "San Francisco, California",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324"
    ],
    pricePerNight: 180,
    rating: 4.85,
    reviewCount: 92,
    type: "Entire apartment",
    beds: 1,
    bathrooms: 1,
    hostName: "Alex",
    hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    amenities: ["City view", "Wifi", "Kitchen", "Washer", "Dryer", "Elevator"],
    description: "Stylish apartment in a vibrant neighborhood with easy access to restaurants, cafes, and public transportation. Perfect for exploring the city.",
    latitude: 37.7749,
    longitude: -122.4194,
    dates: {
      startDate: "2023-12-15",
      endDate: "2023-12-20"
    },
    category: "City"
  },
  {
    id: "7",
    title: "Lakefront Cabin with Dock",
    location: "Lake Tahoe, California",
    images: [
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1",
      "https://images.unsplash.com/photo-1470770903302-2b08e298c34a",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ],
    pricePerNight: 320,
    rating: 4.93,
    reviewCount: 157,
    type: "Entire cabin",
    beds: 3,
    bathrooms: 2,
    hostName: "Robert",
    hostImage: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218",
    amenities: ["Lake view", "Dock", "Wifi", "Kitchen", "Free parking", "Fireplace", "Heating"],
    description: "Cozy cabin with private dock and stunning lake views. Perfect for boating, swimming, and enjoying the outdoors in all seasons.",
    latitude: 39.0968,
    longitude: -120.0324,
    dates: {
      startDate: "2024-01-20",
      endDate: "2024-01-27"
    },
    category: "Lake"
  },
  {
    id: "8",
    title: "Desert Oasis with Pool",
    location: "Scottsdale, Arizona",
    images: [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    ],
    pricePerNight: 210,
    rating: 4.89,
    reviewCount: 114,
    type: "Entire house",
    beds: 3,
    bathrooms: 2,
    hostName: "Michelle",
    hostImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    amenities: ["Pool", "Hot tub", "Wifi", "Kitchen", "Free parking", "Air conditioning"],
    description: "Modern desert retreat with private pool and mountain views. Enjoy outdoor living, desert hikes, and beautiful sunsets.",
    latitude: 33.4942,
    longitude: -111.9261,
    dates: {
      startDate: "2023-11-28",
      endDate: "2023-12-05"
    },
    category: "Desert"
  }
];

export const categories = [
  { id: "all", name: "All", icon: "home" },
  { id: "Beach", name: "Beach", icon: "umbrella" },
  { id: "Mountain", name: "Mountain", icon: "mountain" },
  { id: "Lake", name: "Lake", icon: "droplets" },
  { id: "Countryside", name: "Countryside", icon: "tree" },
  { id: "City", name: "City", icon: "building" },
  { id: "Desert", name: "Desert", icon: "sun" },
  { id: "Tropical", name: "Tropical", icon: "palm-tree" }
];
