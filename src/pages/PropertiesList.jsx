import React from 'react';
import ListingFilterBar from '../components/ListingFilterBar';
import ListingPropertyCard from '../components/ListingPropertyCard';

const dummyProperties = [
  {
    id: 1,
    title: "Madhav Aishvaryam",
    builder: "Madhav Realty",
    type: "3 BHK Flat",
    location: "Sargasan, Gandhinagar",
    priceRange: "₹1.02 Cr - ₹1.25 Cr",
    sizeRange: "295 SqYd - 325 SqYd",
    avgPrice: "₹34,500 / SqYd",
    possession: "Dec, 2026",
    usps: [
      "2 Road Corner Apartment",
      "Exclusive Terrace Park with 24+ Amenities",
      "Ground Floor with 50+ Lifestyle Amenities"
    ],
    developer: "Madhav Realty",
    tags: ["Featured", "Sample House Ready"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Atulyam Saral",
    builder: "Atulyam Group",
    type: "3, 4 BHK Flat",
    location: "Kudasan, Gandhinagar",
    priceRange: "₹1.14 Cr - ₹1.62 Cr",
    sizeRange: "2430 SqFt - 3438 SqFt",
    avgPrice: "Ready to Move",
    possession: "1 Acre", // Matching screenshot layout, possession box says Project Area
    usps: [
      "2 tower with limited units",
      "G+12 Residential Floors with Premium Features",
      "20 luxurious 4 BHK apartments"
    ],
    developer: "Atulyam Group",
    tags: ["Sample House Ready"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687931-5701d4fda23b?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const PropertiesList = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <ListingFilterBar />
      
      <main className="w-full px-4 md:px-8 py-6">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="hover:text-gray-800 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-[#E04F16] font-medium">Property in Gandhinagar</span>
        </div>

        {/* Results Count & Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-[#E04F16]">936 results</span>
            <span className="text-gray-300 font-light">|</span>
            <span className="text-gray-800">Properties for Sale in Gandhinagar</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Find 936+ Properties for Sale in Gandhinagar only on ONLY JAMIN. Explore ✓ Verified Listings ✓ HD Photos ✓ Locality Insights ✓ 566+ Ready to Move ✓ 15+ Owner Properties ✓ Affordable &... <button className="text-blue-600 hover:underline">more</button>
          </p>
        </div>

        {/* Property List */}
        <div className="flex flex-col gap-6">
          {dummyProperties.map(property => (
            <ListingPropertyCard key={property.id} property={property} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default PropertiesList;
