"use client";
import { useRouter } from "next/navigation";
import {
  FaHospital,
} from "react-icons/fa";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/module/firebaseConfig";
import React, { useEffect, useState } from "react";
import {
  CheckCircle,
} from "lucide-react";

const DoctorDetails = ({ id }) => {
  const [doctor, setDoctor] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true); // for initial doctor fetch loading

  const router = useRouter();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 
  const bookAppointment = async () => {
    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!validateEmail(email)) {
      alert("Enter a valid email");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "Bookings"), {
        name,
        phone,
        email,
        date,
        doctorId: doctor?.id,
        doctorName: doctor?.name,
        createdAt: new Date(),
      });

      alert("Appointment booked successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setDate(new Date().toISOString().split("T")[0]);
    } catch (error) {
      console.error("Failed to book appointment:", error);
      alert("Something went wrong: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDoctor = async () => {
      if (!id) return;

      try {
        const q = query(collection(db, "AllDoctors"), where("uId", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setDoctor({ id: doc.id, ...doc.data() });
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setPageLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);





  return (
  <div className="min-h-screen bg-[#F7FBFA]">

    {/* PAGE LOADER */}
    {pageLoading ? (
      <div className="flex justify-center items-center h-screen">
        <div className="w-14 h-14 border-4 border-[#0F766E]/20 border-t-[#0F766E] rounded-full animate-spin" />
      </div>
    ) : doctor ? (

      <>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] border-b border-[#e6f2f0]">

          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22C55E]/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20 relative">

            <div className="grid lg:grid-cols-3 gap-8 items-start">

              {/* LEFT */}
              <div className="lg:col-span-2">

                <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] px-4 py-2 rounded-lg border border-[#0F766E]/20 text-sm font-medium">
                  ✓ Verified Specialist
                </div>

                <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
                  {doctor?.name}
                </h1>

                <p className="mt-3 text-xl text-[#0F766E] font-semibold">
                  {doctor?.speciality || "Healthcare Specialist"}
                </p>

                <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-3xl">
                  {doctor?.about?.slice(0, 220) ||
                    "Experienced healthcare specialist providing patient-focused treatment and quality care."}
                </p>

                {/* HOSPITAL */}
                <div className="mt-6 flex items-center gap-3 text-gray-700">

                  <div className="w-10 h-10 bg-[#0F766E]/10 flex items-center justify-center rounded-lg">
                    <FaHospital className="text-[#0F766E]" />
                  </div>

                  <div>
                    <p className="font-medium">
                      {doctor?.workingHospital ||
                        "Associated Hospital"}
                    </p>

                    <p className="text-sm text-gray-500">
                      Trusted Healthcare Partner
                    </p>
                  </div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-2xl font-bold text-[#0F766E]">
                      10+
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Years Experience
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-2xl font-bold text-[#0F766E]">
                      1000+
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Patients Assisted
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-2xl font-bold text-[#0F766E]">
                      4.9
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Rating
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="text-2xl font-bold text-[#0F766E]">
                      Top
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Specialist
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">

                  <div className="bg-[#f8fbfb] p-6">

                    <img
                      src={
                        doctor?.imgUrl ||
                        "/images/noimg.webp"
                      }
                      alt={doctor?.name}
                      className="w-full h-[380px] object-contain"
                    />

                  </div>
{/* 
                  <div className="p-6">

                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-md text-sm border border-green-100">
                      ✓ Verified Doctor
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                      {doctor?.name}
                    </h2>

                    <p className="mt-2 text-[#0F766E] font-medium">
                      {doctor?.speciality}
                    </p>

                    <div className="mt-5 space-y-3">

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          Hospital
                        </span>

                        <span className="font-medium text-gray-800">
                          {doctor?.workingHospital ||
                            "N/A"}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          Experience
                        </span>

                        <span className="font-medium text-gray-800">
                          {doctor?.experience ||
                            "10+ Years"}
                        </span>
                      </div>

                    </div>

                  </div> */}


                  <div className="p-5 border-t border-gray-100">

  <div className="flex items-center justify-center gap-2 bg-green-50 text-green-700 py-3 rounded-lg border border-green-100">
    <CheckCircle size={18} />
    Verified Doctor
  </div>

</div>

                </div>

              </div>

            </div>

          </div>
        </section>

       

        {/* MAIN CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-8">
              {/* ABOUT */}
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

  <h2 className="text-2xl font-bold text-gray-900 mb-5">
    About Doctor
  </h2>

  <p className="text-gray-600 leading-8">
    {doctor?.about?.trim() ||
      "About information is currently unavailable."}
  </p>

</div>

{/* EDUCATION & EXPERIENCE */}
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Education & Experience
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-5">

      <h3 className="font-semibold text-[#0F766E] text-lg mb-3">
        Education
      </h3>

      <p className="text-gray-600 leading-7">
        {doctor?.qualification?.trim() ||
          "Qualification information not available."}
      </p>

    </div> */}
    <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-5 w-full">
  <h3 className="font-semibold text-[#0F766E] text-lg mb-3">
    Education
  </h3>

  <p className="text-gray-600 leading-7 break-words whitespace-pre-wrap">
    {doctor?.qualification?.trim() ||
      "Qualification information not available."}
  </p>
</div>

    <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-5">

      <h3 className="font-semibold text-[#0F766E] text-lg mb-3">
        Experience
      </h3>

      <p className="text-gray-600 leading-7">
        {doctor?.experience?.trim() ||
          "Experience information not available."}
      </p>

    </div>

  </div>

  <div className="mt-6 bg-[#f8fbfb] border border-gray-100 rounded-lg p-5">

    <h3 className="font-semibold text-[#0F766E] text-lg mb-3">
      Area of Expertise
    </h3>

    <p className="text-gray-600">
      {doctor?.speciality?.trim() ||
        "Speciality information not available."}
    </p>

  </div>

</div>

{/* AVAILABILITY */}
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

  <h2 className="text-2xl font-bold text-gray-900 mb-5">
    Availability
  </h2>

  <div className="bg-[#f8fbfb] border border-gray-100 rounded-lg p-5">

    <p className="text-gray-700 leading-7">
      {doctor?.availability?.trim() ||
        "Availability information not available."}
    </p>

  </div>

</div>

</div>

{/* RIGHT SIDEBAR */}
<div>

  <div className="sticky top-24">

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

      <div className="bg-[#0F766E] p-5 text-white">

        <h3 className="text-xl font-semibold">
          Book Appointment
        </h3>

        <p className="text-white/80 text-sm mt-1">
          Get a callback within 10 minutes
        </p>

      </div>

      <div className="p-5 space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0F766E] text-gray-800"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0F766E] text-gray-800"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0F766E] text-gray-800"
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0F766E] text-gray-800"
        />

        <button
          onClick={bookAppointment}
          disabled={loading}
          className="w-full bg-[#0F766E] hover:bg-[#0b5f58] text-white py-3 rounded-lg font-semibold transition"
        >
          {loading
            ? "Booking..."
            : "Book Appointment"}
        </button>

        <div className="border-t pt-4">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle
              size={16}
              className="text-[#22C55E]"
            />
            Verified Doctor
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <CheckCircle
              size={16}
              className="text-[#22C55E]"
            />
            Quick Appointment
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
            <CheckCircle
              size={16}
              className="text-[#22C55E]"
            />
            End-To-End Support
          </div>

        </div>

      </div>

    </div>

  </div>

</div>

</div>

</section>

{/* CTA */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">

  <div className="bg-[#0F766E] rounded-lg p-10 text-center text-white">

    <h2 className="text-3xl md:text-4xl font-bold">
      Need Help Choosing The Right Treatment?
    </h2>

    <p className="mt-4 text-white/80 max-w-2xl mx-auto">
      Our healthcare experts are available to
      guide you through consultations,
      hospitals, treatments, and appointments.
    </p>

    <button
      onClick={() => router.push("/contact")}
      className="mt-6 bg-white text-[#0F766E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
    >
      Talk To Expert
    </button>

  </div>

</section>

</>

) : (

<div className="flex justify-center items-center h-screen">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800">
      Doctor Not Found
    </h2>

    <p className="mt-3 text-gray-500">
      The doctor profile you are looking for
      does not exist.
    </p> 
  </div>
</div>

)}

</div>
);
            
};

export default DoctorDetails;






