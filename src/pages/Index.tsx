
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import CategoryFilter from '@/components/CategoryFilter';
import Map from '@/components/Map';
import { Button } from '@/components/ui/button';
import { listings } from '@/data/listings';
import { MapPin } from 'lucide-react';

const Index = () => {
  const [showMap, setShowMap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredListings = selectedCategory === 'all' 
    ? listings 
    : listings.filter(listing => listing.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <CategoryFilter onSelectCategory={setSelectedCategory} />
        
        <div className="container mx-auto px-4 pb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">
              {selectedCategory === 'all' 
                ? 'All properties' 
                : `${selectedCategory} properties`}
            </h2>
            <Button 
              onClick={() => setShowMap(!showMap)}
              variant="outline" 
              className="rounded-full"
            >
              <MapPin className="h-4 w-4 mr-2" />
              {showMap ? 'Hide map' : 'Show map'}
            </Button>
          </div>
          
          <div className={`flex gap-6 ${showMap ? 'flex-col md:flex-row' : ''}`}>
            <div className={`${showMap ? 'md:w-1/2' : 'w-full'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>
            
            {showMap && (
              <div className="md:w-1/2 h-[500px] sticky top-20">
                <Map listings={filteredListings} />
              </div>
            )}
          </div>
          
          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-4">No properties found</h3>
              <p className="text-gray-500">
                Try changing your search criteria or browse other categories.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
