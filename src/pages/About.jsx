// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            We are passionate about connecting buyers with the best Japanese cars.
            Our mission is to make car buying simple, transparent, and hassle-free.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* <img
            src="https://images.unsplash.com/photo-1517940720702-083259893b49?q=80&w=1200&auto=format&fit=crop"
            alt="Our Mission"
            className="rounded-2xl shadow-lg"
          /> */}
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Our Mission"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We aim to bring the most reliable Japanese cars to our customers
              with full transparency. Whether you’re looking for a family car or
              a sports car, we provide detailed information, verified images, and
              fair prices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience in car exports, we know exactly what
              customers need — trust, quality, and smooth transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Team Member */}
            {[
              {
                name: "Hafiz Zakaria",
                role: "Founder & CEO",
                img: "/Images/ZakariyaBh.jpeg",
              },
              {
                name: "......",
                role: "Operations Manager",
                img: "#",
              },
              {
                name: "Ashfaque Ahmed",
                role: "Customer Support",
                img: "/Images/Ashfaq.jpg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition p-6 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Want to work with us?
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-6">
          We are always looking for talented people to join our mission of
          making car buying easy for everyone.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
