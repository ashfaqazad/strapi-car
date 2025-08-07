// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/cars?populate=*');
        setCars(res.data.data); // Strapi v4+ returns data in data.data
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    getCars();
  }, []);

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cars.map((car) => (
    <div key={car.id} className="border p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">
        {car.attributes.name} - {car.attributes.model}
      </h3>
      <p className="mb-2">Price: Rs. {car.attributes.price}</p>
      {car.attributes.image?.data && (
        <img
          src={`http://localhost:1337${car.attributes.image.data.attributes.url}`}
          alt={car.attributes.name}
          className="w-full h-auto"
        />
      )}
    </div>
  ))}
</div>

    // <div>
    //   <h2>Available Cars</h2>
    //   <ul>
    //     {cars.map((car) => (
    //       <li key={car.id}>
    //         <h3>{car.attributes.name} - {car.attributes.model}</h3>
    //         <p>Price: ${car.attributes.price}</p>
    //         {car.attributes.image && car.attributes.image.data && (
    //           <img
    //             src={`http://localhost:1337${car.attributes.image.data.attributes.url}`}
    //             alt={car.attributes.name}
    //             width="200"
    //           />
    //         )}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default CarList;
