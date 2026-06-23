

// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation"; // ✅ useRouter imported
// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db } from "@/module/firebaseConfig";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link"; // ✅ Import Link component from next/link

// const DoctorList = () => {
//   const searchParams = useSearchParams();
//   const selectedCity = searchParams.get("city");
//   const router = useRouter(); // ✅ router defined

//   const [search, setSearch] = useState("");
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       if (!selectedCity) return;
//       setLoading(true);
//       try {
//         const q = query(
//           collection(db, "AllDoctors"),
//           where("city", "==", selectedCity)
//         );
//         const querySnapshot = await getDocs(q);
//         const doctorList = [];
//         querySnapshot.forEach((doc) => {
//           doctorList.push({ id: doc.id, ...doc.data() });
//         });
//         setDoctors(doctorList);
//         setFilteredDoctors(doctorList);
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDoctors();
//   }, [selectedCity]);

//   useEffect(() => {
//     setFilteredDoctors(
//       doctors.filter((doctor) =>
//         doctor.name.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, doctors]);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-rose-700 via-purple-800 to-indigo-900 px-4 py-10 text-white">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6"
//       >
//         Doctors in {selectedCity || "your city"}
//       </motion.h1>

//       {/* Search Input */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="flex justify-center mb-10"
//       >
//         <input
//           type="text"
//           placeholder="Search doctors..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-3 w-full max-w-xl rounded-xl shadow-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
//         />
//       </motion.div>

//       {/* Doctors Cards */}
//       <motion.div
//         className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4 }}
//       >
//         {loading ? (
//          <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white/70 z-50">
//          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sky-500"></div>
//        </div>
//         ) : filteredDoctors.length > 0 ? (
//           filteredDoctors.map((doctor, index) => (
//             <Link key={doctor.id} href={`/doctor/${doctor.id}`}> {/* Use dynamic link */}
//               <motion.div
//                 className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
//                 whileHover={{ scale: 1.03 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
//                   <Image
//                     src={doctor.imgUrl || "/images/noimg.webp"}
//                     alt={doctor.name}
//                     width={180}
//                     height={180}
//                     className="object-contain max-h-full max-w-full"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold">{doctor.name}</h2>
//                   <p className="text-gray-600">{doctor.city}</p>
//                 </div>
//               </motion.div>
//             </Link>
//           ))
//         ) : (
//          <p className="text-center text-gray-200 col-span-3">
//                 {`No doctors found in "${selectedCity}"`}
// </p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default DoctorList;




"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  Search,
  MapPin,
  ChevronRight,
  Stethoscope,
} from "lucide-react";

const DoctorList = () => {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city");

  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (!selectedCity) return;

      setLoading(true);

      try {
        const q = query(
          collection(db, "AllDoctors"),
          where("city", "==", selectedCity)
        );

        const querySnapshot = await getDocs(q);

        const doctorList = [];

        querySnapshot.forEach((doc) => {
          doctorList.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setDoctors(doctorList);
        setFilteredDoctors(doctorList);
      } catch (error) {
        console.error(
          "Error fetching doctors:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [selectedCity]);

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter((doctor) =>
        doctor.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search, doctors]);

  return (
    <div className="min-h-screen bg-[#F7FBFA]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] border-b border-[#e8f2f0]">

        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22C55E]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20 relative">

          <div className="flex items-center text-sm text-gray-500 mb-6">
            Home
            <ChevronRight size={14} />
            Doctors
            <ChevronRight size={14} />
            {selectedCity}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] px-4 py-2 text-sm font-medium border border-[#0F766E]/20">
              <Stethoscope size={16} />
              Verified Healthcare Specialists
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Find Doctors in{" "}
              <span className="text-[#0F766E]">
                {selectedCity}
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Connect with trusted doctors,
              compare profiles and book
              consultations with confidence.
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-[#0F766E]">
                  {doctors.length}+
                </h3>
                <p className="text-gray-500">
                  Doctors Available
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0F766E]">
                  100%
                </h3>
                <p className="text-gray-500">
                  Verified Profiles
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">

        <div className="bg-white border border-gray-200 shadow-sm p-4">

          <div className="flex items-center gap-3">

            <Search
              size={20}
              className="text-[#0F766E]"
            />

            <input
              type="text"
              placeholder="Search doctors by name..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="flex-1 outline-none text-gray-800"
            />
          </div>

        </div>

      </section>

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-14 h-14 border-4 border-[#0F766E]/20 border-t-[#0F766E] rounded-full animate-spin" />
        </div>
      )}

      {/* DOCTORS GRID */}
      {!loading && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">

          {filteredDoctors.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {filteredDoctors.map(
                (doctor, index) => (
                  <Link
                    key={doctor.id}
                    href={`/doctor/${doctor.id}`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                    >
                      {/* IMAGE */}
                      <div className="bg-[#f8fbfb] h-64 flex items-center justify-center border-b border-gray-100">

                        <Image
                          src={
                            doctor.imgUrl ||
                            "/images/noimg.webp"
                          }
                          alt={doctor.name}
                          width={220}
                          height={220}
                          className="object-contain max-h-full max-w-full"
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="p-5">

                        <div className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 border border-green-100">
                          Verified Doctor
                        </div>

                        <h2 className="mt-3 text-lg font-bold text-gray-900 line-clamp-2">
                          {doctor.name}
                        </h2>

                        <div className="flex items-center gap-2 mt-3 text-gray-500">
                          <MapPin size={16} />
                          <span>
                            {doctor.city}
                          </span>
                        </div>

                        <button className="w-full mt-5 bg-[#0F766E] hover:bg-[#0b5f58] text-white py-3 font-medium transition">
                          View Profile
                        </button>

                      </div>
                    </motion.div>
                  </Link>
                )
              )}

            </div>

          ) : (

            <div className="bg-white border border-gray-200 text-center py-20">
              <h3 className="text-2xl font-bold text-gray-800">
                No Doctors Found
              </h3>

              <p className="mt-2 text-gray-500">
                No doctors found in{" "}
                {selectedCity}
              </p>
            </div>

          )}

        </section>
      )}

      {/* CTA */}
      {!loading && filteredDoctors.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">

          <div className="bg-[#0F766E] text-white p-10 md:p-14">

            <h2 className="text-3xl md:text-4xl font-bold">
              Need Help Choosing The Right Doctor?
            </h2>

            <p className="mt-4 text-white/80 max-w-2xl">
              Our healthcare advisors can help
              you find the best specialist for
              your condition.
            </p>

            <button className="mt-6 bg-white text-[#0F766E] px-8 py-3 font-semibold hover:bg-gray-100 transition">
              Talk To Expert
            </button>

          </div>

        </section>
      )}

    </div>
  );
};

export default DoctorList;