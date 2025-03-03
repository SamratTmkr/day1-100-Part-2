// LatestCollection.jsx
import React from 'react';
import { products } from '../assets/assets'; // Import from assets.jsx

const LatestCollection = () => {
  // Sort products by date to get the latest ones (most recent first)
  const latestProducts = [...products]
    .sort((a, b) => b.date - a.date)
    .slice(0, 6); // Take the 6 most recent products, adjust as needed

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Latest Collections
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((product) => (
            <div 
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={product.image[0]} // Use the first image from the array
                alt={product.name}
                className=""
              />
              <div className="p-6">
                <h2 className="text-sm font-medium h-10">
                  {product.name}
                </h2>
                  <span className="text-sm font-medium">
                    Rs. {product.price.toFixed(2)}
                  </span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;