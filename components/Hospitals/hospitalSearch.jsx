// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { db } from "@/module/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import { useRouter } from "next/navigation"; // ✅ Added for navigation

// const steps = [
//   { title: "Find Hospital", image: "/images/hs-1.png" },
//   { title: "Select Doctor", image: "/images/hs-2.png" },
//   { title: "Choose Date", image: "/images/hs-3.png" },
//   { title: "Book Appointment", image: "/images/hs-4.png" },
// ];

// const HospitalSearch = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("Select Location");
//   const [cities, setCities] = useState([]);
//   const router = useRouter(); // ✅ Router instance

//   // Fetch unique city names from Firestore
//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "AllHospital"));
//         const citySet = new Set();
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           if (data.city) citySet.add(data.city);
//         });
//         setCities(Array.from(citySet));
//       } catch (error) {
//         console.error("Error fetching cities:", error);
//       }
//     };

//     fetchCities();
//   }, []);

//   const filteredLocations = cities.filter((city) =>
//     city.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleSelect = (city) => {
//     setSelectedLocation(city);
//     setIsOpen(false);
//   };

//   const handleSearch = () => {
//     if (selectedLocation !== "Select Location") {
//       router.push(`/hospitals?city=${encodeURIComponent(selectedLocation)}`);
//     } else {
//       alert("Please select a city before searching.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-rose-800 to-blue-800 text-white p-6">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8"
//       >
//         <h1 className="text-4xl font-bold mb-2">Find the Best Hospitals Near You</h1>
//         <p className="text-lg text-gray-200">
//           Book appointments with top hospitals in just a few clicks.
//         </p>
//       </motion.div>

//       {/* Search Section */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative w-full max-w-lg bg-white p-4 rounded-lg shadow-lg text-black"
//       >
//         <div className="flex items-center border border-gray-300 p-3 rounded-md w-full">
//           <div
//             className="flex-grow flex items-center cursor-pointer"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <span className="truncate">{selectedLocation}</span>
//           </div>
//           <button
//             onClick={handleSearch}
//             className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//           >
//             <FaSearch />
//           </button>
//         </div>

//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-2 max-h-60 overflow-y-auto"
//           >
//             <input
//               type="text"
//               placeholder="Search City"
//               className="w-full p-2 border-b border-gray-200 focus:outline-none"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <ul className="divide-y divide-gray-200">
//               {filteredLocations.length > 0 ? (
//                 filteredLocations.map((city, index) => (
//                   <li
//                     key={index}
//                     className="p-3 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleSelect(city)}
//                   >
//                     {city}
//                   </li>
//                 ))
//               ) : (
//                 <li className="p-3 text-gray-500">No cities found</li>
//               )}
//             </ul>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Steps Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="mt-10 w-full max-w-4xl"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//               className="flex flex-col items-center text-center p-4 bg-white text-black rounded-lg shadow-md hover:scale-105 transition"
//             >
//               <Image
//                 src={step.image}
//                 alt={step.title}
//                 width={64}
//                 height={64}
//                 className="w-16 h-16 mb-2"
//               />
//               <p className="font-semibold text-sm">{step.title}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HospitalSearch;



"use client";

import { useState, useEffect } from "react";

import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { db } from "@/module/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation"; // ✅ Added for navigation

import Image from "next/image";

import {
  Search,
  MapPin,
  Building2,
  UserRound,
  CalendarDays,
  ClipboardCheck,
  CheckCircle,
  ShieldCheck,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";



const steps = [
  {
    title: "Find Hospital",
    icon: Building2,
    description:
      "Browse top hospitals in your city",
  },
  {
    title: "Choose Specialist",
    icon: UserRound,
    description:
      "Find the right doctor",
  },
  {
    title: "Select Date",
    icon: CalendarDays,
    description:
      "Choose your preferred slot",
  },
  {
    title: "Book Appointment",
    icon: ClipboardCheck,
    description:
      "Confirm instantly",
  },
];



const HospitalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [cities, setCities] = useState([]);
  const router = useRouter(); // ✅ Router instance

  // Fetch unique city names from Firestore
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "AllHospital"));
        const citySet = new Set();
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.city) citySet.add(data.city);
        });
        setCities(Array.from(citySet));
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const filteredLocations = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    setSelectedLocation(city);
    setIsOpen(false);
  };

  const handleSearch = () => {
    if (selectedLocation !== "Select Location") {
      router.push(`/hospitals?city=${encodeURIComponent(selectedLocation)}`);
    } else {
      alert("Please select a city before searching.");
    }
  };


  return (
  <div className="min-h-screen bg-[#F7FBFA]">

    {/* HERO */}
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7]">

      {/* BLURS */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22C55E]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 px-4 py-2 rounded-lg text-sm font-medium">

              <ShieldCheck size={16} />

              Trusted Hospital Network

            </div>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">

              Find Top

              <span className="block text-[#0F766E]">
                Hospitals Near You
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">

              Compare hospitals, explore
              specialists, and book appointments
              with complete healthcare assistance.

            </p>

            {/* TRUST POINTS */}
            <div className="space-y-4 mt-8">

              {[
                "Verified Hospitals",
                "NABH Accredited Partners",
                "Insurance Assistance",
                "Dedicated Care Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-[#22C55E]"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* SEARCH CARD */}
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-5 mt-10 max-w-xl">

              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-4">

                <MapPin
                  size={20}
                  className="text-[#0F766E]"
                />

                <div
                  className="flex-1 cursor-pointer"
                  onClick={() =>
                    setIsOpen(!isOpen)
                  }
                >
                  <span className="text-gray-700">
                    {selectedLocation}
                  </span>
                </div>

                <button
                  onClick={handleSearch}
                  className="bg-[#0F766E] hover:bg-[#0b5f58] text-white px-5 py-2 rounded-lg transition"
                >
                  <Search size={18} />
                </button>

              </div>

              {/* CITY DROPDOWN */}
              {isOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-3 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-lg"
                >

                  <input
                    type="text"
                    placeholder="Search city..."
                    className="w-full p-3 border-b border-gray-200 outline-none text-gray-700"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />

                  <div className="max-h-60 overflow-y-auto">

                    {filteredLocations.length >
                    0 ? (
                      filteredLocations.map(
                        (city, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-[#f7fbfa] cursor-pointer text-gray-700"
                            onClick={() =>
                              handleSelect(city)
                            }
                          >
                            {city}
                          </div>
                        )
                      )
                    ) : (
                      <div className="p-3 text-gray-500">
                        No cities found
                      </div>
                    )}

                  </div>

                </motion.div>
              )}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="hidden lg:flex justify-center relative"
          >

            {/* FLOATING CARD */}
            <div className="absolute top-8 left-0 bg-white border border-gray-100 shadow-lg rounded-lg px-5 py-4">

              <div className="text-3xl font-bold text-[#0F766E]">
                100+
              </div>

              <div className="text-sm text-gray-500">
                Partner Hospitals
              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-12 right-0 bg-white border border-gray-100 shadow-lg rounded-lg px-5 py-4">

              <div className="text-3xl font-bold text-[#0F766E]">
                50+
              </div>

              <div className="text-sm text-gray-500">
                Medical Specialties
              </div>

            </div>

            <Image
              src="/images/hospital-hero.png"
              alt="Hospital"
              width={600}
              height={700}
              priority
              className="object-contain"
            />

          </motion.div>

        </div>

      </div>

    </section>


    {/* STATS */}
<section className="py-12 bg-white border-y border-gray-200">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-[#0F766E]">
          100+
        </h3>
        <p className="text-gray-500 mt-2">
          Partner Hospitals
        </p>
      </div>

      <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-[#0F766E]">
          50+
        </h3>
        <p className="text-gray-500 mt-2">
          Specialties
        </p>
      </div>

      <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-[#0F766E]">
          1000+
        </h3>
        <p className="text-gray-500 mt-2">
          Happy Patients
        </p>
      </div>

      <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-3xl font-bold text-[#0F766E]">
          24x7
        </h3>
        <p className="text-gray-500 mt-2">
          Support Team
        </p>
      </div>

    </div>

  </div>

</section>

{/* POPULAR TREATMENTS */}
<section className="py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-gray-900">
        Popular Treatments
      </h2>

      <p className="mt-4 text-gray-600">
        Explore treatments available across our
        trusted hospital network.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">

      {[
        "Laisk Surgery",
        "Kidney Stone",
        "Bariatric Surgery",
        "Lipoma",
        "Hernia",
        "Piles",
      ].map((item) => (
        <div
          key={item}
          className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#0F766E] hover:shadow-lg transition cursor-pointer"
        >

          <HeartPulse
            className="mx-auto text-[#0F766E]"
            size={30}
          />

          <p className="mt-4 font-medium text-gray-700">
            {item}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

{/* WHY JEEVO */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-gray-900">
        Why Choose Jeevo Health
      </h2>

      <p className="mt-4 text-gray-600">
        Trusted healthcare assistance from
        consultation to treatment.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      {[
        {
          title: "Verified Hospitals",
          icon: ShieldCheck,
        },
        {
          title: "NABH Accredited",
          icon: BadgeCheck,
        },
        {
          title: "Insurance Assistance",
          icon: CheckCircle,
        },
        {
          title: "Dedicated Care Team",
          icon: HeartPulse,
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-8 text-center"
          >

            <Icon
              size={34}
              className="mx-auto text-[#0F766E]"
            />

            <h3 className="mt-5 font-semibold text-lg text-gray-900">
              {item.title}
            </h3>

          </div>
        );
      })}

    </div>

  </div>

</section>

{/* HOW IT WORKS */}
<section className="py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-gray-900">
        How It Works
      </h2>

      <p className="mt-4 text-gray-600">
        Book appointments in four simple steps.
      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      {steps.map((step, idx) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: idx * 0.1,
            }}
            className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm"
          >

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >

              <Icon
                size={40}
                className="mx-auto text-[#0F766E]"
              />

            </motion.div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="mt-3 text-gray-500 text-sm">
              {step.description}
            </p>

          </motion.div>
        );
      })}

    </div>

  </div>

</section>

{/* CTA */}
<section className="pb-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="bg-[#0F766E] rounded-lg p-10 lg:p-16 text-center text-white">

      <h2 className="text-4xl font-bold">
        Need Help Choosing The Right Hospital?
      </h2>

      <p className="mt-5 text-white/80 max-w-2xl mx-auto">
        Our healthcare experts can guide you in
        selecting the best hospital, doctor,
        and treatment for your needs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

        <button className="bg-white text-[#0F766E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Talk To Expert
        </button>

        <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F766E] transition">
          WhatsApp Us
        </button>

      </div>

    </div>

  </div>

</section>

</div>
);
};

export default HospitalSearch;