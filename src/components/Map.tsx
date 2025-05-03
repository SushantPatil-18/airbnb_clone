
import { useState, useEffect } from 'react';
import { Listing } from '@/data/listings';

interface MapProps {
  listings: Listing[];
  selectedListing?: Listing;
}

// This component renders a simplified map view
// In a real application, you'd integrate with Google Maps, Mapbox, or similar services
const Map = ({ listings, selectedListing }: MapProps) => {
  return (
    <div className="h-full w-full bg-gray-200 rounded-xl overflow-hidden relative">
      {/* Simple map background */}
      <div className="absolute inset-0 bg-gray-200">
        <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Simple grid lines */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Simplified water */}
          <rect x="50" y="130" width="100" height="70" fill="#e0f2fe" />
          
          {/* Simplified land */}
          <path d="M 0 0 L 200 0 200 130 0 130 Z" fill="#f0fdf4" />
          <path d="M 50 130 L 150 130 150 200 50 200 Z" fill="#f0fdf4" />
          
          {/* Simplified roads */}
          <line x1="0" y1="50" x2="200" y2="50" stroke="#d1d5db" strokeWidth="2" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#d1d5db" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Map markers for listings */}
      <div className="absolute inset-0">
        {listings.map((listing) => {
          // Calculate position based on latitude and longitude
          // This is a simplified approach - real maps would use proper geo mapping
          const isSelected = selectedListing?.id === listing.id;
          const x = ((listing.longitude + 180) / 360) * 100;
          const y = ((90 - listing.latitude) / 180) * 100;
          
          return (
            <div
              key={listing.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isSelected ? 'z-10 scale-125' : 'z-0'
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div 
                className={`
                  px-2 py-1 rounded-full shadow-md text-xs font-bold
                  ${isSelected ? 'bg-airbnb-red text-white' : 'bg-white text-airbnb-dark'}
                `}
              >
                ₹{listing.pricePerNight}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Map placeholder message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500 bg-white bg-opacity-75 px-4 py-2 rounded-lg text-sm">
          Map view (simplified)
        </p>
      </div>
    </div>
  );
};

export default Map;
