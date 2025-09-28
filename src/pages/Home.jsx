// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
// If you have a Navbar component, uncomment the next line and ensure the path is correct
// import Navbar from "../components/Navbar";

const sampleCars = [
  {
    id: 1,
    Title: "Toyota Corolla",
    price: 3500000,
    img: "/Images/Corolla.jpg",
    short: "A comfortable sedan",
    year: 2018,
    mileage: "80,000 km",
  },
  {
    id: 2,
    Title: "Nissan Skyline",
    price: 7200000,
    img: "/Images/Nissan.jpg",
    short: "Sporty & reliable",
    year: 2016,
    mileage: "60,000 km",
  },
  {
    id: 3,
    Title: "Honda Civic",
    price: 4200000,
    img: "/Images/Civic.avif",
    short: "Efficient city car",
    year: 2019,
    mileage: "45,000 km",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = sampleCars.filter((c) =>
    c.Title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      {/* If you use Navbar, uncomment below */}
      {/* <Navbar /> */}

      {/* --- HERO --- */}
      <header className="relative">
        <div
          className="h-[60vh] sm:h-[70vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,10,10,0.45), rgba(10,10,10,0.45)), url('https://images.unsplash.com/photo-1502873780-1cb2f3f8a6c7?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Find your dream car from Japan
              </h1>
              <p className="mt-4 text-sm sm:text-lg text-gray-200">
                Direct purchase from auctions & dealers. Transparent inspections,
                shipment support and fast documentation.
              </p>

              {/* Search box */}
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by model (e.g. Corolla, Civic)..."
                    className="w-full sm:w-2/3 px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <Link
                    to="/cars"
                    className="inline-flex items-center justify-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                  >
                    Browse Cars
                  </Link>
                </div>
                <p className="mt-2 text-sm text-green-200">
                  Showing results for: <span className="font-medium">{query || "all"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Featured Cars --- */}
      <main className="container mx-auto px-6 lg:px-8 mt-4">
        <section className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Link to="/cars" className="text-sm text-green-600 hover:underline">
              View all cars
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(query ? filtered : sampleCars).map((car) => (
              <article key={car.id} className="border rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src={car.img}
                    alt={car.Title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black bg-opacity-40 text-white px-2 py-1 rounded">
                    {car.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{car.Title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{car.short}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="text-green-600 font-bold">PKR {car.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Mileage: {car.mileage}</div>
                    </div>
                    <Link
                      to={`/cars/${car.id}`}
                      className="inline-block px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- How it works --- */}
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">1. Browse Cars</h4>
              <p className="text-sm text-gray-600">Search by make, model or price and shortlist cars you like.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">2. Inspect & Buy</h4>
              <p className="text-sm text-gray-600">We assist with inspection reports and bidding at auction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">3. Shipping & Docs</h4>
              <p className="text-sm text-gray-600">Door-to-door shipping and paperwork handled for you.</p>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="mt-8 bg-green-600 text-white rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Need help buying a car from Japan?</h3>
            <p className="mt-1 text-sm">Our experts will guide you through auctions, export and shipping.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <a href="https://wa.me/REPLACE_NUMBER" target="_blank" rel="noreferrer"
               className="px-4 py-2 bg-white text-green-600 rounded font-semibold hover:bg-gray-100">
              Contact via WhatsApp
            </a>
          </div>
        </section>

        
      </main>
    </div>
  );
}
