




// "use client";

// import React, { useEffect, useState } from "react";
// import { db } from "@/module/firebaseConfig";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
// } from "firebase/firestore";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import HospitalSlider from "@/module/HospitalSlider";
// import Insurances from "@/module/Insurances";

// const HospitalDetails = ({ id }) => {
//   const [hospital, setHospital] = useState(null);
//   const [doctors, setDoctors] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchHospital = async () => {
//       if (!id) {
//         console.warn("No ID provided.");
//         return;
//       }

//       try {
//         const q = query(
//           collection(db, "AllHospital"),
//           where("uId", "==", id)
//         );
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           const doc = querySnapshot.docs[0];
//           const data = doc.data();
//           setHospital({ id: doc.id, ...data });

//           const doctorsSnapshot = await getDocs(collection(db, "AllHospital", id, "Doctors"));
//           const doctorsList = doctorsSnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setDoctors(doctorsList);

//           // Fetch branches with matching first word
//           const hospitalNameFirstWord = data.name.split(" ")[0];
//           const allHospitalsSnapshot = await getDocs(collection(db, "AllHospital"));
//           const matchingBranches = allHospitalsSnapshot.docs
//             .map(doc => ({ id: doc.id, ...doc.data() }))
//             .filter(item => item.uId !== id && item.name.split(" ")[0] === hospitalNameFirstWord);
//           setBranches(matchingBranches);

//         } else {
//           console.warn("No hospital found with uId:", id);
//         }
//       } catch (error) {
//         console.error("Error fetching hospital data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHospital();
//   }, [id]);
//   const handleEvent = (uId) => {
   

  
//     router.push(`/hospital?id=${uId}`);
//   };

//   const handleClickEvent = (uId) => {
//     router.push(`/doctor?id=${uId}`);
//   };

//   if (loading) {
//     return (
//       <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white/70 z-50">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sky-500"></div>
//     </div>
    
//     );
//   }

//   if (!hospital) {
//     return (
//       <div className="p-10 text-rose-700 text-center">
//         Hospital not found.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-12 px-6">

      
//       {/* Hospital Info */}
//       <motion.div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//         <motion.div className="w-full md:w-1/2 space-y-6" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//           <h1 className="text-5xl font-bold text-blue-400">{hospital.name}</h1>
//           <div className="flex items-center space-x-3">
//             <span className="text-yellow-500 text-3xl">★★★★☆</span>
//             <span className="text-lg text-gray-300">{hospital.rating} Rating</span>
//           </div>
//           <p className="text-gray-400 text-lg">Multi-Speciality Hospital | {hospital.city}</p>
//           <p className="text-green-400 font-semibold text-lg">🕒 Open 24/7</p>
//           <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.address)}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
//             📍 Address: {hospital.address}
//           </a>
//           <div className="flex space-x-4 mt-4">
//             {/* <motion.button className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105">Book Appointment</motion.button> */}
//             <motion.button className="border border-green-400 text-green-400 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition transform hover:scale-105" onClick={() => window.open("https://api.whatsapp.com/send/?phone=%2B919821527088&text=Hello%21")}>
//               WhatsApp Expert
//             </motion.button>
//           </div>
//         </motion.div>
//         <motion.div className="w-full md:w-1/2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//           <HospitalSlider image={hospital.imageUrls} />
//         </motion.div>
//       </motion.div>

     

     

//       {/* Doctor List */}
//       <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center">Our Doctors</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
//           {doctors.map((doctor, index) => (
//             <Link key={doctor.id} href={`/doctor/${doctor.id}`}>
//               <motion.div className="bg-gray-700 px-4 py-6 sm:px-6 sm:py-8 rounded-lg text-center hover:bg-gray-600 transition transform hover:scale-105" onClick={() => handleClickEvent(doctor.docId)}>
//                 <img src={doctor.imageUrl || "/images/noimg.webp"} alt={doctor.name} className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mb-4 object-cover" />
//                 <h3 className="text-lg sm:text-xl font-bold text-white">{doctor.name}</h3>
//                 <p className="text-sm sm:text-base text-gray-400">{doctor.speciality}</p>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Amenities Section */}
//       <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center">Amenities</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-6">
//           {hospital.amenities.map((item, index) => (
//             <motion.div key={index} className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-gray-700 px-4 py-3 sm:px-6 sm:py-4 rounded-lg hover:bg-gray-600 transition transform hover:scale-105">
//               <p className="text-sm sm:text-base font-medium text-white">{item}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Insurance Section */}
//       <div className="max-w-7xl mx-auto mt-12 p-8 bg-gray-800 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-blue-400 text-center">Insurances</h2>
//         <p className="text-gray-300 text-center mb-5 mt-5 text-lg">{hospital.name} provides flexible insurance options.</p>
//         <Insurances />
//       </div>
//        {/* Branches Section */}
//      {/* Branches Section */}
// {/* Branches Section */}
// {branches.length > 0 && (
//   <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-xl shadow-lg">
//     <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center">Other Branches</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
//       {branches.map(branch => (
//         <div
//           key={branch.id}
//           onClick={() => handleEvent(branch.uId)}
//           className="flex flex-col justify-between h-full bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105 cursor-pointer shadow-md"
//         >
//           <div className="mb-4">
//             <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{branch.name}</h3>
//             <p className="text-gray-300 text-sm flex items-center gap-2 mb-1">
//               <span>🏙️</span> {branch.city}
//             </p>
//             <p className="text-gray-400 text-sm flex items-start gap-2">
//               <span>📍</span> <span className="line-clamp-2">{branch.address}</span>
//             </p>
//           </div>
//           <div className="mt-auto pt-2">
//             <span className="text-sm text-blue-300 underline">View Details →</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}


//     </div>
//   );
// };

// export default HospitalDetails;





























"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/module/firebaseConfig";
import { useSearchParams, useRouter } from "next/navigation";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { motion } from "framer-motion";
import Link from "next/link";
import HospitalSlider from "@/module/HospitalSlider";
import Insurances from "@/module/Insurances";
import {
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle,
  Building2,
  HeartPulse,
  Users,
} from "lucide-react";

const HospitalDetails = ({ id }) => {
  const [hospital, setHospital] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchHospital = async () => {
      if (!id) {
        console.warn("No ID provided.");
        return;
      }

      try {
        const q = query(
          collection(db, "AllHospital"),
          where("uId", "==", id)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setHospital({ id: doc.id, ...data });

          const doctorsSnapshot = await getDocs(collection(db, "AllHospital", id, "Doctors"));
          const doctorsList = doctorsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDoctors(doctorsList);

          // Fetch branches with matching first word
          const hospitalNameFirstWord = data.name.split(" ")[0];
          const allHospitalsSnapshot = await getDocs(collection(db, "AllHospital"));
          const matchingBranches = allHospitalsSnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(item => item.uId !== id && item.name.split(" ")[0] === hospitalNameFirstWord);
          setBranches(matchingBranches);

        } else {
          console.warn("No hospital found with uId:", id);
        }
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospital();
  }, [id]);
  const handleEvent = (uId) => {
   

  
    router.push(`/hospital?id=${uId}`);
  };

  // const handleClickEvent = (uId) => {
  //   router.push(`/doctor?id=${uId}`);
  // };
const handleClickEvent = (uId) => {
  router.push(`/doctor/${uId}`);
};
  if (loading) {
    return (
     <div className="min-h-screen bg-[#F7FBFA] flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-[#0F766E]/20 border-t-[#0F766E] rounded-full animate-spin" />
    </div>
    
    );
  }

  if (!hospital) {
    return (
     <div className="min-h-screen bg-[#F7FBFA] flex items-center justify-center">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Hospital Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          We could not find the hospital.
        </p>

      </div>

    </div>
    );
  }

  return (
   <div className="min-h-screen bg-[#F7FBFA]">

    {/* HERO */}

<section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] border-b border-[#e6f2f0]">

  <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22C55E]/10 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 lg:px-10 py-8">

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

      {/* SLIDER */}

     <motion.div
  className="w-full"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <HospitalSlider image={hospital.imageUrls} />
</motion.div>

      {/* INFO CARD */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
      >

        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-100 text-sm font-medium">

          <ShieldCheck size={16} />

          Verified Hospital

        </div>

        <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">

          {hospital.name}

        </h1>

        <p className="mt-3 text-[#0F766E] font-semibold text-lg">

          Multi-Speciality Hospital

        </p>

        <div className="flex items-center gap-3 mt-5">

          <Star
            size={18}
            className="text-yellow-500 fill-yellow-500"
          />

          <span className="font-medium text-gray-700">

            {hospital.rating || "4.8"} Rating

          </span>

        </div>

        <div className="flex gap-3 mt-5">

          <MapPin
            size={18}
            className="text-[#0F766E] mt-1"
          />

          <span className="text-gray-600">

            {hospital.address}

          </span>

        </div>

        <div className="flex items-center gap-3 mt-5">

          <CheckCircle
            size={18}
            className="text-green-600"
          />

          <span className="text-gray-700">

            Open 24x7

          </span>

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          <button
           onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=%2B919987537993&text=Hello%21"
              )
            }
            className="
            bg-[#0F766E]
            hover:bg-[#0b5f58]
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
          "
          >
            Book Free Consultation
          </button>

          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=%2B919987537993&text=Hello%21"
              )
            }
            className="
            border
            border-[#0F766E]
            text-[#0F766E]
            px-6
            py-3
            rounded-lg
            font-semibold
          "
          >
            WhatsApp Expert
          </button>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* <section className="bg-white border-b border-gray-200">

  <div className="max-w-7xl mx-auto px-4 lg:px-10">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6">

      <div className="flex items-center gap-3">
        <CheckCircle size={20} className="text-green-600" />
        <span className="text-gray-700 font-medium">
          Verified Hospital
        </span>
      </div>

      <div className="flex items-center gap-3">
        <CheckCircle size={20} className="text-green-600" />
        <span className="text-gray-700 font-medium">
          Insurance Support
        </span>
      </div>

      <div className="flex items-center gap-3">
        <CheckCircle size={20} className="text-green-600" />
        <span className="text-gray-700 font-medium">
          Expert Doctors
        </span>
      </div>

      <div className="flex items-center gap-3">
        <CheckCircle size={20} className="text-green-600" />
        <span className="text-gray-700 font-medium">
          End-To-End Care
        </span>
      </div>

    </div>

  </div>

</section> */}

<section className="max-w-7xl mx-auto px-4 lg:px-10 -mt-8 relative z-20">

  <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
          <CheckCircle size={18} className="text-green-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">
            Verified
          </p>
          <p className="text-sm text-gray-500">
            Hospital
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <ShieldCheck size={18} className="text-blue-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">
            Insurance
          </p>
          <p className="text-sm text-gray-500">
            Support
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#0F766E]/10 flex items-center justify-center">
          <Users size={18} className="text-[#0F766E]" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">
            Specialists
          </p>
          <p className="text-sm text-gray-500">
            Doctors
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
          <HeartPulse size={18} className="text-orange-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">
            Complete
          </p>
          <p className="text-sm text-gray-500">
            Care Support
          </p>
        </div>
      </div>

    </div>

  </div>

</section>


<section className="max-w-7xl mx-auto px-4 lg:px-10 py-10">

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">

      <Users
        className="mx-auto text-[#0F766E]"
        size={30}
      />

      <h3 className="mt-3 text-3xl font-bold text-gray-900">
        {doctors.length}
      </h3>

      <p className="text-gray-500">
        Doctors
      </p>

    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">

      <Building2
        className="mx-auto text-[#0F766E]"
        size={30}
      />

      <h3 className="mt-3 text-3xl font-bold text-gray-900">
        {branches.length}
      </h3>

      <p className="text-gray-500">
        Branches
      </p>

    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">

      <HeartPulse
        className="mx-auto text-[#0F766E]"
        size={30}
      />

      <h3 className="mt-3 text-3xl font-bold text-gray-900">
        {hospital.amenities?.length || 0}
      </h3>

      <p className="text-gray-500">
        Facilities
      </p>

    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">

      <Star
        className="mx-auto text-yellow-500 fill-yellow-500"
        size={30}
      />

      <h3 className="mt-3 text-3xl font-bold text-gray-900">
        {hospital.rating || "4.8"}
      </h3>

      <p className="text-gray-500">
        Rating
      </p>

    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-4 lg:px-10 pb-12">

  <div className="bg-white border border-gray-200 rounded-lg p-8">

    <h2 className="text-3xl font-bold text-gray-900">

      About Hospital

    </h2>

    <p className="mt-5 text-gray-600 leading-relaxed">

      {hospital.about ||
        `${hospital.name} is a trusted healthcare institution providing comprehensive medical care, advanced treatment options, experienced doctors, and patient-focused healthcare services.`}

    </p>

  </div>

</section>

{/* DOCTORS SECTION */}

<section className="max-w-7xl mx-auto px-4 lg:px-10 pb-14">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

    <div>

      <h2 className="text-3xl font-bold text-gray-900">
        Our Specialists
      </h2>

      <p className="text-gray-500 mt-2">
        Meet experienced doctors associated with this hospital.
      </p>

    </div>

    <div className="mt-4 md:mt-0">

      <span className="bg-[#0F766E]/10 text-[#0F766E] px-4 py-2 rounded-lg text-sm font-medium">
        {doctors.length} Doctors Available
      </span>

    </div>

  </div>

  {doctors.length > 0 ? (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {doctors.map((doctor, index) => (

        <motion.div
          key={doctor.id}
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
            delay: index * 0.05,
          }}
          onClick={() =>
            handleClickEvent(
              doctor.docId
            )
          }
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

          <div className="h-[260px] bg-[#f8fbfb]">

            <img
              src={
                doctor.imageUrl ||
                "/images/noimg.webp"
              }
              alt={doctor.name}
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          <div className="p-5">

            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-md border border-green-100 text-xs font-medium">

              <CheckCircle
                size={14}
              />

              Verified Specialist

            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900 line-clamp-2">

              {doctor.name}

            </h3>

            <p className="text-[#0F766E] mt-2 font-medium">

              {doctor.speciality}

            </p>

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
              View Profile
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  ) : (

    <div className="bg-white border border-gray-200 rounded-lg p-10 text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        No Doctors Available
      </h3>

      <p className="text-gray-500 mt-2">
        Doctors information is currently unavailable.
      </p>

    </div>

  )}

</section>

{/* AMENITIES */}

<section className="max-w-7xl mx-auto px-4 lg:px-10 pb-14">

  <div className="mb-8">

    <h2 className="text-3xl font-bold text-gray-900">
      Hospital Facilities
    </h2>

    <p className="text-gray-500 mt-2">
      Modern facilities and patient care services.
    </p>

  </div>

  <div className="bg-white border border-gray-200 rounded-lg p-6">

    <div className="flex flex-wrap gap-3">

      {hospital.amenities?.map(
        (
          item,
          index
        ) => (

          <div
            key={index}
            className="
              bg-[#0F766E]/10
              text-[#0F766E]
              px-4
              py-3
              rounded-lg
              font-medium
              border
              border-[#0F766E]/10
            "
          >

            ✓ {item}

          </div>

        )
      )}

    </div>

  </div>

</section>

{/* INSURANCE */}

<section className="max-w-7xl mx-auto px-4 lg:px-10 pb-14">

  <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">

    <div className="text-center">

     

      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">

        {hospital.name}
        {" "}
        supports multiple insurance providers,
        helping patients receive seamless treatment
        and cashless hospitalization support.

      </p>

    </div>

    <div className="mt-8">

      <Insurances />

    </div>

  </div>

</section>


{/* OTHER BRANCHES */}

{branches.length > 0 && (

  <section className="max-w-7xl mx-auto px-4 lg:px-10 pb-14">

    <div className="mb-8">

      <h2 className="text-3xl font-bold text-gray-900">
        Other Branches
      </h2>

      <p className="text-gray-500 mt-2">
        Explore other branches from the same hospital network.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {branches.map((branch, index) => (

        <motion.div
          key={branch.id}
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
            delay: index * 0.05,
          }}
          onClick={() =>
            handleEvent(branch.uId)
          }
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

          <div className="p-6">

            <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] px-3 py-1 rounded-md text-xs font-medium">

              <Building2 size={14} />

              Hospital Branch

            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2">

              {branch.name}

            </h3>

            <div className="flex items-center gap-2 mt-4 text-gray-500">

              <MapPin size={16} />

              <span>
                {branch.city}
              </span>

            </div>

            <p className="mt-3 text-gray-500 text-sm line-clamp-2">

              {branch.address}

            </p>

            <button
              className="
                mt-5
                w-full
                border
                border-[#0F766E]
                text-[#0F766E]
                py-3
                rounded-lg
                font-medium
                hover:bg-[#0F766E]
                hover:text-white
                transition
              "
            >
              View Branch
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </section>

)}

{/* CONSULTATION CTA */}

<section className="max-w-7xl mx-auto px-4 lg:px-10 pb-20">

  <div className="bg-[#0F766E] rounded-lg overflow-hidden">

    <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">

      <div>

        <span className="inline-flex items-center bg-white/15 text-white px-4 py-2 rounded-lg text-sm font-medium">

          Jeevo Health Care Team

        </span>

        <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-white leading-tight">

          Need Help Choosing
          <br />
          The Right Hospital?

        </h2>

        <p className="mt-5 text-white/80 text-lg">

          Our healthcare advisors help you compare
          hospitals, understand treatment options,
          connect with specialists and support you
          throughout your healthcare journey.

        </p>

        <div className="flex flex-wrap gap-4 mt-8">

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
            Book Free Consultation
          </button>

          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=%2B919821527088&text=Hello%21"
              )
            }
            className="
              border
              border-white
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              hover:bg-white
              hover:text-[#0F766E]
              transition
            "
          >
            WhatsApp Expert
          </button>

        </div>

      </div>

      <div className="hidden lg:flex justify-center">

        <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">

          <HeartPulse
            size={100}
            className="text-white"
          />

        </div>

      </div>

    </div>

  </div>

</section>

{/* MOBILE STICKY CTA */}

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 lg:hidden z-50">

  <div className="grid grid-cols-2 gap-3">

    <button
      className="
        bg-[#0F766E]
        text-white
        py-3
        rounded-lg
        font-semibold
      "
    >
      Consult Now
    </button>

    <button
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send/?phone=%2B919821527088&text=Hello%21"
        )
      }
      className="
        border
        border-[#0F766E]
        text-[#0F766E]
        py-3
        rounded-lg
        font-semibold
      "
    >
      WhatsApp
    </button>

  </div>

</div>

</div>
);













      
     



  
};

export default HospitalDetails;