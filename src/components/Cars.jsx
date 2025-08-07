// src/Cars.jsx

import React, { useEffect, useState } from "react";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:1337/api/cars") // replace if needed
fetch("http://localhost:1337/api/cars?populate=*")

      .then((res) => res.json())
      .then((data) => {
        setCars(data.data);
      });
  }, []);

  // Helper: Convert nested description array into plain text
  const extractDescription = (descArray) => {
    if (!descArray || !Array.isArray(descArray)) return "";
    return descArray
      .map((block) =>
        block.children.map((child) => child.text).join(" ")
      )
      .join("\n");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🚗 Car Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            {car.image ? (
              <img
                src={`http://localhost:1337${car.image.url}`}
                alt={car.Title}
                className="w-full h-40 object-cover rounded mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
                <span>No Image</span>
              </div>
            )}
            <h2 className="text-xl font-semibold">{car.Title}</h2>
            <p className="text-gray-600">
              {extractDescription(car.description)}
            </p>
            <p className="text-green-600 font-bold mt-2">
              Rs. {car.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
