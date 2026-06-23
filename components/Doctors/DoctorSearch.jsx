"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";

import {
  Search,
  MapPin,
  CheckCircle,
  ArrowRight,
  UserRound,
  CalendarDays,
  ClipboardCheck,
  ShieldCheck,
  Hospital,
  Stethoscope,
} from "lucide-react";

const steps = [
  {
    title: "Choose Doctor",
    description:
      "Browse experienced specialists near your location.",
    icon: UserRound,
  },
  {
    title: "Select Date",
    description:
      "Choose a convenient appointment slot.",
    icon: CalendarDays,
  },
  {
    title: "Confirm Booking",
    description:
      "Book instantly and receive expert support.",
    icon: ClipboardCheck,
  },
];

export default function DoctorSearch() {
  const router = useRouter();

  const [cities, setCities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] =
    useState("Select Location");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "AllDoctors")
        );

        const citySet = new Set();

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          if (data.city) {
            citySet.add(data.city);
          }
        });

        setCities(Array.from(citySet));
      } catch (error) {
        console.error(
          "Error fetching cities:",
          error
        );
      }
    };

    fetchCities();
  }, []);

  const filteredLocations = cities.filter((city) =>
    city
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleSelect = (city) => {
    setSelectedLocation(city);
    setIsOpen(false);
  };

  const handleSearch = () => {
    if (
      selectedLocation !== "Select Location"
    ) {
      router.push(
        `/doctors?city=${encodeURIComponent(
          selectedLocation
        )}`
      );
    } else {
      alert(
        "Please select a city before searching."
      );
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7]">

      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#22C55E]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">

        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 rounded-full px-5 py-2 text-sm font-medium">
            👨‍⚕️ Trusted Healthcare Network
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Find The Best Doctors
            <br />
            <span className="text-[#0F766E]">
              Near You
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced doctors,
            compare specialists and book
            appointments effortlessly.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {[
              "Verified Doctors",
              "Trusted Hospitals",
              "Instant Booking",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-gray-700"
              >
                <CheckCircle
                  size={18}
                  className="text-[#22C55E]"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SEARCH CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-white/90 backdrop-blur-lg border border-white rounded-[32px] p-5 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

            <div className="flex flex-col lg:flex-row gap-4">

              {/* Location */}
              <div className="relative flex-1">

                <div
                  onClick={() =>
                    setIsOpen(!isOpen)
                  }
                  className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 cursor-pointer bg-white"
                >
                  <MapPin
                    size={20}
                    className="text-[#0F766E]"
                  />

                  <span className="text-gray-700 truncate">
                    {selectedLocation}
                  </span>
                </div>

                {isOpen && (
                  <div className="absolute left-0 right-0 top-full mt-3 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden z-50">

                    <input
                      type="text"
                      placeholder="Search city..."
                      value={search}
                      onChange={(e) =>
                        setSearch(
                          e.target.value
                        )
                      }
                      className="w-full p-4 border-b border-gray-100 outline-none text-gray-700 placeholder-gray-400"
                    />

                    <div className="max-h-64 overflow-y-auto">
                      {filteredLocations.length >
                      0 ? (
                        filteredLocations.map(
                          (
                            city,
                            index
                          ) => (
                            <div
                              key={index}
                              onClick={() =>
                                handleSelect(
                                  city
                                )
                              }
                              className="px-4 py-3 hover:bg-[#f7fbfa] cursor-pointer transition text-black"
                            >
                              {city}
                            </div>
                          )
                        )
                      ) : (
                        <div className="p-4 text-gray-500">
                          No cities found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleSearch}
                className="w-full lg:w-auto bg-[#0F766E] hover:bg-[#0b5f58] text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <Search size={18} />
                Find Doctors
              </button>
            </div>
          </div>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14">

          <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#0F766E]">
              1000+
            </h3>
            <p className="text-gray-500 mt-2">
              Patients Assisted
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#0F766E]">
              50+
            </h3>
            <p className="text-gray-500 mt-2">
              Expert Doctors
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#0F766E]">
              25+
            </h3>
            <p className="text-gray-500 mt-2">
              Partner Hospitals
            </p>
          </div>

        </div>

        {/* WHY TRUST US */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <ShieldCheck className="mx-auto text-[#0F766E]" size={40} />
            <h3 className="font-bold text-xl mt-4 text-black">
              Verified Doctors
            </h3>
            <p className="text-gray-500 mt-2">
              Consult only trusted and verified specialists.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <Hospital className="mx-auto text-[#0F766E]" size={40} />
            <h3 className="font-bold text-xl mt-4 text-black">
              Top Hospitals
            </h3>
            <p className="text-gray-500 mt-2 ">
              Access leading hospitals and treatment centers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <Stethoscope className="mx-auto text-[#0F766E]" size={40} />
            <h3 className="font-bold text-xl mt-4 text-black">
              Expert Care
            </h3>
            <p className="text-gray-500 mt-2">
              End-to-end support throughout your treatment.
            </p>
          </div>

        </div>

        {/* HOW IT WORKS */}
        <div className="mt-24">

          <div className="text-center mb-14">
            <span className="text-[#0F766E] font-semibold">
              How It Works
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-900">
              Book Appointment In
              <br />
              3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {steps.map(
              (
                step,
                index
              ) => {
                const Icon =
                  step.icon;

                return (
                  <motion.div
                    key={index}
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
                      delay:
                        index *
                        0.15,
                    }}
                    className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition duration-300"
                  >
                    <motion.div
                      animate={{
                        y: [
                          0,
                          -8,
                          0,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat:
                          Infinity,
                      }}
                      className="w-20 h-20 mx-auto bg-[#0F766E]/10 rounded-3xl flex items-center justify-center mb-6"
                    >
                      <Icon
                        size={40}
                        className="text-[#0F766E]"
                      />
                    </motion.div>

                    <div className="w-10 h-10 rounded-full bg-[#0F766E] text-white font-bold flex items-center justify-center mx-auto mb-4">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-black">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 mt-3">
                      {
                        step.description
                      }
                    </p>
                  </motion.div>
                );
              }
            )}
          </div>

        </div>

        {/* CTA */}
        {/* <div className="mt-24">

          <div className="bg-gradient-to-r from-[#0F766E] to-[#0b5f58] rounded-[32px] p-8 md:p-14 text-center text-white">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Need Help Finding
              The Right Doctor?
            </h2>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Our healthcare experts can guide
              you to the best doctor and hospital
              based on your medical needs.
            </p>

            <button className="mt-8 w-full sm:w-auto bg-white text-[#0F766E] px-8 py-4 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 hover:scale-105 transition">
              Talk To Expert
              <ArrowRight size={18} />
            </button>

          </div>

        </div> */}

      </div>
    </section>
  );
}