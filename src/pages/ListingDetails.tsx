
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { listings } from '@/data/listings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { 
  Star, 
  Share, 
  Heart, 
  User, 
  Home, 
  MapPin, 
  Calendar,
  Check,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const ListingDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedDates, setSelectedDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(1);
  
  const listing = listings.find(l => l.id === id);
  
  if (!listing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
        <p className="mb-6">Sorry, the listing you are looking for does not exist.</p>
        <Link to="/" className="text-airbnb-red hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }
  
  const handleDatesChange = (field: 'checkIn' | 'checkOut', value: string) => {
    setSelectedDates({ ...selectedDates, [field]: value });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-2">{listing.title}</h1>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 mr-2 font-medium">{listing.rating}</span>
            </div>
            <span className="mx-1">·</span>
            <span className="mr-2 underline">{listing.reviewCount} reviews</span>
            <span className="mx-1">·</span>
            <span className="underline">{listing.location}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" className="text-sm" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
        
        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          <div className="md:col-span-1 aspect-square overflow-hidden rounded-tl-xl rounded-bl-xl">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square overflow-hidden md:rounded-tr-xl">
              <img
                src={listing.images[1] || listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={listing.images[2] || listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={listing.images[1] || listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden md:rounded-br-xl">
              <img
                src={listing.images[2] || listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {listing.type} hosted by {listing.hostName}
                </h2>
                <p className="text-gray-600">
                  {listing.beds} beds · {listing.bathrooms} baths
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={listing.hostImage}
                  alt={listing.hostName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start">
                <Home className="h-7 w-7 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Entire home</h3>
                  <p className="text-gray-600 text-sm">
                    You'll have the {listing.type.toLowerCase()} to yourself.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-7 w-7 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Great location</h3>
                  <p className="text-gray-600 text-sm">
                    95% of recent guests gave the location a 5-star rating.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-7 w-7 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Free cancellation</h3>
                  <p className="text-gray-600 text-sm">
                    Cancel before check-in for a partial refund.
                  </p>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Description */}
            <div className="mb-6">
              <p className="leading-relaxed mb-4">{listing.description}</p>
              <Button variant="ghost" className="underline font-medium px-0">
                Show more <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <Separator className="my-6" />
            
            {/* Amenities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                {listing.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-6">
                Show all amenities
              </Button>
            </div>
            
            <Separator className="my-6" />
            
            {/* Map */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Where you'll be</h2>
              <div className="h-80 rounded-xl overflow-hidden mb-2">
                <Map listings={[listing]} selectedListing={listing} />
              </div>
              <h3 className="font-medium mb-1">{listing.location}</h3>
              <p className="text-gray-600 mb-4">
                Explore this vibrant neighborhood with easy access to local attractions.
              </p>
              <Button variant="ghost" className="underline font-medium px-0">
                Show more <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Booking card */}
          <div className="lg:w-96">
            <Card className="p-6 shadow-lg sticky top-24">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xl font-semibold">${listing.pricePerNight}</span>
                  <span className="text-gray-600"> night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1">{listing.rating}</span>
                  <span className="mx-1 text-gray-400">·</span>
                  <span className="text-gray-600 underline">{listing.reviewCount} reviews</span>
                </div>
              </div>
              
              <div className="border border-gray-300 rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b border-gray-300">
                    <label className="block text-xs font-semibold mb-1">CHECK-IN</label>
                    <Input 
                      type="date" 
                      className="border-0 p-0 text-sm h-6 focus-visible:ring-0" 
                      value={selectedDates.checkIn}
                      onChange={(e) => handleDatesChange('checkIn', e.target.value)}
                    />
                  </div>
                  <div className="p-3 border-b border-gray-300">
                    <label className="block text-xs font-semibold mb-1">CHECKOUT</label>
                    <Input 
                      type="date" 
                      className="border-0 p-0 text-sm h-6 focus-visible:ring-0" 
                      value={selectedDates.checkOut}
                      onChange={(e) => handleDatesChange('checkOut', e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-xs font-semibold mb-1">GUESTS</label>
                  <div className="flex justify-between items-center">
                    <Input 
                      type="number" 
                      className="border-0 p-0 text-sm h-6 focus-visible:ring-0 w-16" 
                      value={guests}
                      min={1}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    />
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-airbnb-red hover:bg-red-600 mb-4">
                Reserve
              </Button>
              <p className="text-center text-sm mb-4">You won't be charged yet</p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="underline">${listing.pricePerNight} x 5 nights</span>
                  <span>${listing.pricePerNight * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$85</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$125</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-semibold">
                <span>Total before taxes</span>
                <span>${listing.pricePerNight * 5 + 85 + 125}</span>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ListingDetails;
