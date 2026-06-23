// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation"; // ✅ useRouter imported
// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db } from "@/module/firebaseConfig";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const HospitalList = () => {
//   const searchParams = useSearchParams();
//   const selectedCity = searchParams.get("city");
//   const router = useRouter(); // ✅ router defined

//   const [search, setSearch] = useState("");
//   const [hospitals, setHospitals] = useState([]);
//   const [filteredHospitals, setFilteredHospitals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHospitals = async () => {
//       if (!selectedCity) return;
//       setLoading(true);
//       try {
//         const q = query(
//           collection(db, "AllHospital"),
//           where("city", "==", selectedCity)
//         );
//         const querySnapshot = await getDocs(q);
//         const hospitalList = [];
//         querySnapshot.forEach((doc) => {
//           hospitalList.push({ id: doc.id, ...doc.data() });
//         });
//         setHospitals(hospitalList);
//         setFilteredHospitals(hospitalList);
//       } catch (error) {
//         console.error("Error fetching hospitals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchHospitals();
//   }, [selectedCity]);

//   useEffect(() => {
//     setFilteredHospitals(
//       hospitals.filter((hospital) =>
//         hospital.name.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, hospitals]);

//   const handleClickEvent = (uId) => {
   

  
//     router.push(`/hospital?id=${uId}`);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-rose-700 via-purple-800 to-indigo-900 px-4 py-10 text-white">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6"
//       >
//         Hospitals in {selectedCity || "your city"}
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
//           placeholder="Search hospital..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-3 w-full max-w-xl rounded-xl shadow-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
//         />
//       </motion.div>

//       {/* Hospital Cards */}
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
       
//         ) : filteredHospitals.length > 0 ? (
//           filteredHospitals.map((hospital, index) => (
//             <motion.div
//               key={hospital.id}
//               className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
          
//             onClick={()=>handleClickEvent(hospital.uId)}
//             >
//               <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
//                 <Image
//                   src={hospital.logo}
//                   alt={hospital.name}
//                   width={180}
//                   height={180}
//                   className="object-contain max-h-full max-w-full"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-xl font-bold">{hospital.name}</h2>
//                 <p className="text-gray-600">{hospital.city}</p>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//          <p className="col-span-full text-center text-gray-200 py-4">
//   No hospitals found {selectedCity ? `in "${selectedCity}"` : ""}.
// </p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default HospitalList;


"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ useRouter imported
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Search,
  Building2,
  MapPin,
  CheckCircle,
  HeartPulse,
} from "lucide-react";








const HospitalList = () => {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city");
  const router = useRouter(); // ✅ router defined

  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      if (!selectedCity) return;
      setLoading(true);
      try {
        const q = query(
          collection(db, "AllHospital"),
          where("city", "==", selectedCity)
        );
        const querySnapshot = await getDocs(q);
        const hospitalList = [];
        querySnapshot.forEach((doc) => {
          hospitalList.push({ id: doc.id, ...doc.data() });
        });
        setHospitals(hospitalList);
        setFilteredHospitals(hospitalList);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospitals();
  }, [selectedCity]);

  useEffect(() => {
    setFilteredHospitals(
      hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, hospitals]);

  const handleClickEvent = (uId) => {
   

  
    router.push(`/hospital?id=${uId}`);
  };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-rose-700 via-purple-800 to-indigo-900 px-4 py-10 text-white">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6"
//       >
//         Hospitals in {selectedCity || "your city"}
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
//           placeholder="Search hospital..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="px-4 py-3 w-full max-w-xl rounded-xl shadow-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400"
//         />
//       </motion.div>

//       {/* Hospital Cards */}
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
       
//         ) : filteredHospitals.length > 0 ? (
//           filteredHospitals.map((hospital, index) => (
//             <motion.div
//               key={hospital.id}
//               className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
          
//             onClick={()=>handleClickEvent(hospital.uId)}
//             >
//               <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
//                 <Image
//                   src={hospital.logo}
//                   alt={hospital.name}
//                   width={180}
//                   height={180}
//                   className="object-contain max-h-full max-w-full"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="text-xl font-bold">{hospital.name}</h2>
//                 <p className="text-gray-600">{hospital.city}</p>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//          <p className="col-span-full text-center text-gray-200 py-4">
//   No hospitals found {selectedCity ? `in "${selectedCity}"` : ""}.
// </p>
//         )}
//       </motion.div>
//     </div>
//   );


return (
  <div className="min-h-screen bg-[#F7FBFA]">

    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] border-b border-[#e6f2f0]">

      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22C55E]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 relative">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] px-4 py-2 rounded-lg border border-[#0F766E]/20 text-sm font-medium">

            <Building2 size={16} />

            Trusted Hospital Network

          </div>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-gray-900">

            Hospitals in

            <span className="block text-[#0F766E]">
              {selectedCity || "Your City"}
            </span>

          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">

            Compare hospitals, discover
            specialists, and choose the right
            healthcare partner for your treatment.

          </p>

        </motion.div>

      </div>

    </section>

    {/* STATS */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">

          <h3 className="text-3xl font-bold text-[#0F766E]">
            {filteredHospitals.length}
          </h3>

          <p className="text-gray-500 mt-2">
            Hospitals Found
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">

          <h3 className="text-3xl font-bold text-[#0F766E]">
            50+
          </h3>

          <p className="text-gray-500 mt-2">
            Specialties
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">

          <h3 className="text-3xl font-bold text-[#0F766E]">
            1000+
          </h3>

          <p className="text-gray-500 mt-2">
            Happy Patients
          </p>

        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">

          <h3 className="text-3xl font-bold text-[#0F766E]">
            24x7
          </h3>

          <p className="text-gray-500 mt-2">
            Support
          </p>

        </div>

      </div>

    </section>

    {/* SEARCH */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">

          <div className="flex items-center gap-3">

            <Search
              className="text-[#0F766E]"
              size={20}
            />

            <input
              type="text"
              placeholder="Search hospital..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                flex-1
                outline-none
                text-gray-800
                placeholder:text-gray-400
              "
            />

          </div>

        </div>

      </motion.div>

    </section>

    {/* HOSPITAL GRID */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

      {loading ? (

        <div className="flex justify-center py-24">

          <div className="w-14 h-14 border-4 border-[#0F766E]/20 border-t-[#0F766E] rounded-full animate-spin" />

        </div>

      ) : (
        <motion.div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredHospitals.length > 0 ? (
  filteredHospitals.map((hospital, index) => (
    <motion.div
      key={hospital.id}
      onClick={() => handleClickEvent(hospital.uId)}
      whileHover={{
        y: -5,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.05,
      }}
      className="
        bg-white
        border
        border-gray-200
        rounded-lg
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <div className="bg-[#f8fbfb] h-56 flex items-center justify-center border-b border-gray-100 p-5">

        <Image
          src={hospital.logo}
          alt={hospital.name}
          width={180}
          height={180}
          className="object-contain max-h-full"
        />

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-md border border-green-100 text-xs font-medium">

          <CheckCircle size={14} />

          Verified Hospital

        </div>

        <h2 className="mt-4 text-lg font-bold text-gray-900 line-clamp-2 min-h-[56px]">

          {hospital.name}

        </h2>

        <div className="flex items-center gap-2 mt-3 text-gray-500">

          <MapPin size={16} />

          <span>{hospital.city}</span>

        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-500">

          <HeartPulse size={16} />

          <span>Multi-Speciality Care</span>

        </div>

        <button
          className="
            mt-5
            w-full
            bg-[#0F766E]
            hover:bg-[#0b5f58]
            text-white
            py-3
            rounded-lg
            font-medium
            transition
          "
        >
          View Details
        </button>

      </div>

    </motion.div>
  ))
) : (

  <div className="col-span-full">

    <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">

      <Building2
        size={50}
        className="mx-auto text-[#0F766E]"
      />

      <h3 className="mt-5 text-2xl font-bold text-gray-900">
        No Hospitals Found
      </h3>

      <p className="mt-3 text-gray-500">
        Try searching with a different hospital
        name or location.
      </p>

    </div>

  </div>

)}

</motion.div>
)}

</section>

{/* CTA SECTION */}
<section className="pb-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="bg-[#0F766E] rounded-lg p-10 lg:p-16 text-center text-white">

      <h2 className="text-3xl lg:text-4xl font-bold">
        Need Help Finding The Right Hospital?
      </h2>

      <p className="mt-5 text-white/80 max-w-2xl mx-auto">
        Our healthcare advisors can help you
        compare hospitals, doctors, treatments,
        and guide you throughout your healthcare
        journey.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

        <button
          className="
            bg-white
            text-[#0F766E]
            px-8
            py-3
            rounded-lg
            font-semibold
            hover:bg-gray-100
            transition
          "
        >
          Talk To Expert
        </button>

        <button
          className="
            border
            border-white
            px-8
            py-3
            rounded-lg
            font-semibold
            hover:bg-white
            hover:text-[#0F766E]
            transition
          "
        >
          WhatsApp Us
        </button>

      </div>

    </div>

  </div>

</section>

</div>
);
        
};

export default HospitalList;
