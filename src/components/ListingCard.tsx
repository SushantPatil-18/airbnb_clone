
import { Link } from 'react-router-dom';
import { Listing } from '@/data/listings';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentImageIndex < listing.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(listing.images.length - 1);
    }
  };

  return (
    <Link to={`/listing/${listing.id}`} className="listing-card group block">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img 
          src={listing.images[currentImageIndex]} 
          alt={listing.title}
          className="listing-card-image h-full w-full object-cover"
        />
        
        {/* Image navigation dots */}
        {listing.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
            {listing.images.map((_, index) => (
              <span 
                key={index} 
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Image navigation buttons */}
        {listing.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="sr-only">Previous image</span>
              <span className="block h-2 w-2 rotate-45 border-l border-t border-gray-600"></span>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="sr-only">Next image</span>
              <span className="block h-2 w-2 rotate-45 border-r border-b border-gray-600"></span>
            </button>
          </>
        )}
      </div>
      <div className="mt-3">
        <div className="flex justify-between">
          <h3 className="font-medium text-airbnb-dark truncate pr-1">{listing.location}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-airbnb-dark" />
            <span className="ml-1">{listing.rating}</span>
          </div>
        </div>
        <p className="text-airbnb-light text-sm mt-1">{listing.type}</p>
        <p className="text-airbnb-light text-sm">{listing.dates.startDate} - {listing.dates.endDate}</p>
        <p className="mt-1">
          <span className="font-semibold">${listing.pricePerNight}</span> night
        </p>
      </div>
    </Link>
  );
};

export default ListingCard;
