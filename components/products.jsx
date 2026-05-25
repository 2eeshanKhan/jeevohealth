"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Smart Touch Switch",
    category: "Switches",
    price: "₹4,999",
    image: "https://source.unsplash.com/800x800/?smart-switch",
    desc: "Elegant glass touch switch with app & voice control support.",
  },
  {
    id: 2,
    name: "Smart Lighting Controller",
    category: "Lighting",
    price: "₹6,499",
    image: "https://source.unsplash.com/800x800/?smart-lighting",
    desc: "Control lighting scenes, dimming, and schedules seamlessly.",
  },
  {
    id: 3,
    name: "Smart Door Lock",
    category: "Security",
    price: "₹14,999",
    image: "https://source.unsplash.com/800x800/?smart-door-lock",
    desc: "Fingerprint, PIN, RFID & mobile app-enabled smart lock.",
  },
  {
    id: 4,
    name: "Motion Sensor",
    category: "Sensors",
    price: "₹3,299",
    image: "https://source.unsplash.com/800x800/?motion-sensor",
    desc: "Detect movement and automate lights & security alerts.",
  },
  {
    id: 5,
    name: "Smart Curtain Motor",
    category: "Curtains",
    price: "₹9,999",
    image: "https://source.unsplash.com/800x800/?smart-curtains",
    desc: "Automate curtains with schedules & voice assistants.",
  },
  {
    id: 6,
    name: "Smart Home Hub",
    category: "Hub",
    price: "₹7,999",
    image: "https://source.unsplash.com/800x800/?smart-home-hub",
    desc: "Central hub to connect and control all smart devices.",
  },
  {
    id: 7,
    name: "Smart Video Doorbell",
    category: "Security",
    price: "₹8,499",
    image: "https://source.unsplash.com/800x800/?video-doorbell",
    desc: "HD video doorbell with motion alerts and night vision.",
  },
  {
    id: 8,
    name: "Smart Plug",
    category: "Switches",
    price: "₹1,999",
    image: "https://source.unsplash.com/800x800/?smart-plug",
    desc: "Control appliances remotely and monitor power usage.",
  },
  {
    id: 9,
    name: "Smart Thermostat",
    category: "Climate",
    price: "₹12,999",
    image: "https://source.unsplash.com/800x800/?smart-thermostat",
    desc: "Energy-efficient temperature control with automation.",
  },
  {
    id: 10,
    name: "Smart Smoke Detector",
    category: "Safety",
    price: "₹5,499",
    image: "https://source.unsplash.com/800x800/?smoke-detector",
    desc: "Early fire alerts with mobile notifications.",
  },
  {
    id: 11,
    name: "Smart Ceiling Fan",
    category: "Appliances",
    price: "₹10,999",
    image: "https://source.unsplash.com/800x800/?smart-fan",
    desc: "Voice-controlled fan with speed scheduling.",
  },
  {
    id: 12,
    name: "Smart RGB Light Strip",
    category: "Lighting",
    price: "₹3,999",
    image: "https://source.unsplash.com/800x800/?rgb-lighting",
    desc: "Ambient lighting with millions of color options.",
  },
  {
    id: 13,
    name: "Smart Water Leak Sensor",
    category: "Sensors",
    price: "₹2,999",
    image: "https://source.unsplash.com/800x800/?water-leak-sensor",
    desc: "Detect water leakage and prevent damage.",
  },
  {
    id: 14,
    name: "Smart Security Camera",
    category: "Security",
    price: "₹11,999",
    image: "https://source.unsplash.com/800x800/?security-camera",
    desc: "Indoor/outdoor camera with cloud recording.",
  },
  {
    id: 15,
    name: "Smart Garage Door Opener",
    category: "Security",
    price: "₹9,499",
    image: "https://source.unsplash.com/800x800/?garage-door",
    desc: "Open and close garage doors remotely.",
  },
  {
    id: 16,
    name: "Smart Air Purifier",
    category: "Appliances",
    price: "₹15,999",
    image: "https://source.unsplash.com/800x800/?air-purifier",
    desc: "Automatically cleans air based on quality levels.",
  },
  {
    id: 17,
    name: "Smart IR Blaster",
    category: "Hub",
    price: "₹2,499",
    image: "https://source.unsplash.com/800x800/?ir-blaster",
    desc: "Control AC, TV, and other IR devices via app.",
  },
  {
    id: 18,
    name: "Smart Bedside Lamp",
    category: "Lighting",
    price: "₹2,999",
    image: "https://source.unsplash.com/800x800/?smart-lamp",
    desc: "Touch & voice-controlled bedside lighting.",
  },
  {
    id: 19,
    name: "Smart Energy Meter",
    category: "Energy",
    price: "₹6,999",
    image: "https://source.unsplash.com/800x800/?energy-meter",
    desc: "Monitor real-time power consumption.",
  },
  {
    id: 20,
    name: "Smart Door Sensor",
    category: "Sensors",
    price: "₹1,799",
    image: "https://source.unsplash.com/800x800/?door-sensor",
    desc: "Instant alerts when doors or windows open.",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0E4CCF] to-[#002D9C]">
        <div className="max-w-7xl mx-auto px-6 py-35">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Smart Home Products
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Discover premium automation products for a smarter, safer home.
          </p>
        </div>
      </section>

      {/* CATEGORY BAR (UI ONLY) */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-wrap gap-3">
          {[
            "All",
            "Switches",
            "Lighting",
            "Security",
            "Sensors",
            "Curtains",
            "Hub",
            "Appliances",
            "Energy",
          ].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-700 hover:bg-[#0E4CCF] hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white  overflow-hidden border border-gray-100 hover:shadow-2xl transition"
          >
            <div className="relative h-60 bg-gray-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:text-red-500">
                <Heart size={18} />
              </button>
            </div>

            <div className="p-6 bg-white">
              <span className="text-xs uppercase tracking-wide text-[#0E4CCF] font-semibold">
                {product.category}
              </span>

              <h3 className="mt-2 text-lg font-bold">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {product.desc}
              </p>

              <div className="mt-6 flex items-center justify-between">
                {/* <span className="text-xl font-extrabold">
                  {product.price}
                </span> */}

                <button className="flex items-center gap-2 px-4 py-2 bg-[#0E4CCF] text-white rounded-lg text-sm font-medium hover:bg-[#0b3aa3] transition">
                  <ShoppingCart size={16} />
                  Enquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
