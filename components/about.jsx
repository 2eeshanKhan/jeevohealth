// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   return (
//     <main className="bg-[#f8f9fb]">
      
//       {/* HERO */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl lg:text-5xl font-semibold text-gray-900"
//           >
//             About Trinetra Technoworld
//           </motion.h1>

//           <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
//             Trinetra Technoworld is where innovation meets comfort in the realm of
//             smart home automation. We transform ordinary living spaces into
//             intelligent, secure, and energy-efficient environments.
//           </p>
//         </div>
//       </section>

//       {/* ABOUT CONTENT */}
//       <section className="py-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-900">
//               Who We Are
//             </h2>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               As pioneers in smart housing, Trinetra Technoworld designs homes
//               using cutting-edge technology and eco-friendly solutions. Our
//               approach ensures a seamless blend of future-ready automation with
//               everyday living.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
//             <Image
//               src="/about-smart-home.jpg"
//               alt="Smart Home"
//               width={600}
//               height={400}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* VISION & MISSION */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               Our vision is to build an eco-system that ranks among the top five
//               globally, driven by a strong customer-centric approach and
//               sustainable innovation.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               We focus on long-term value creation through ethical practices,
//               smart work, and best-in-class solutions delivered via globally
//               leading technology partners.
//             </p>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Image from "next/image";

import {
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import OurValueSection from "@/components/OurValueSection";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function AboutPage() {

  const coreValues = [
    "Patient First Approach",
    "Trusted Healthcare",
    "Compassionate Support",
    "Transparency",
    "Medical Excellence",
  ];

  const founders = [
    {
      name: "Dr. Rahul Sharma",
      role: "Founder & Healthcare Director",

      desc:
        "Dr. Rahul Sharma focuses on building accessible healthcare solutions with trusted doctors, advanced treatments, and patient-centric care.",

      img: "/founder1.jpg",
    },

    {
      name: "Aman Verma",
      role: "Co-Founder, Operations & Support",

      desc:
        "Aman leads healthcare operations and patient assistance, ensuring seamless treatment coordination and support throughout the healthcare journey.",

      img: "/founder2.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative h-[75vh] w-full overflow-hidden">

        <Image
          src="/jeevoban.png"
          alt="Jeevo Health"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-[#0F172A]/65
          flex items-center justify-center
          text-center px-6
        "
        >
          <div>

            {/* BADGE */}
            <span
              className="
              inline-block
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-orange-300
              px-5 py-2
              rounded-full
              text-sm font-semibold
            "
            >
              ABOUT JEEVO HEALTH
            </span>

            {/* HEADING */}
            <h1
              className="
              mt-6
              text-4xl lg:text-6xl
              font-bold
              text-white
              leading-tight
              max-w-5xl
            "
            >
              Simplifying Healthcare
              <br />

              With Trusted Medical Support
            </h1>

            {/* SUBTEXT */}
            <p
              className="
              mt-5
              text-white/75
              max-w-2xl
              mx-auto
              leading-relaxed
            "
            >
              Jeevo Health connects patients with experienced doctors,
              advanced hospitals, and dedicated healthcare support
              for stress-free treatment journeys.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}

      <WhoWeAre />

      <OurValueSection />

      <WhyChooseUs />

      {/* ======================================================
          VALUES + VISION / MISSION
      ====================================================== */}

      <section
        className="
        py-24
        max-w-7xl mx-auto
        px-6
        grid lg:grid-cols-2
        gap-20
        items-start
      "
      >

        {/* LEFT SIDE */}

        <div>

          <span
            className="
            inline-block
            bg-[#0F766E]/10
            text-[#0F766E]
            px-5 py-2
            rounded-full
            text-sm font-semibold
          "
          >
            OUR CORE VALUES
          </span>

          <h2
            className="
            mt-6
            text-4xl md:text-5xl
            font-bold
            leading-tight
            text-[#0F172A]
          "
          >
            Healthcare Built On
            <br />

            Trust & Compassion.
          </h2>

          {/* VALUES */}

          <div className="mt-10 space-y-5">

            {coreValues.map((item, i) => (

              <div
                key={i}
                className="
                flex items-center gap-4
              "
              >

                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-[#0F766E]/10
                  flex items-center justify-center
                "
                >
                  <ShieldCheck
                    className="text-[#0F766E]"
                    size={22}
                  />
                </div>

                <p
                  className="
                  text-lg
                  font-medium
                  text-gray-700
                "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-10">

          {/* VISION */}

          <div
            className="
            rounded-[28px]
            border border-gray-100
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            p-8
            bg-white
          "
          >

            <div className="flex gap-5">

              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-[#0F766E]/10
                flex items-center justify-center
              "
              >
                <HeartPulse
                  className="text-[#0F766E]"
                  size={28}
                />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Our Vision
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  To make quality healthcare accessible by connecting
                  patients with experienced specialists, advanced hospitals,
                  and seamless treatment assistance.
                </p>
              </div>
            </div>
          </div>

          {/* MISSION */}

          <div
            className="
            rounded-[28px]
            border border-gray-100
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            p-8
            bg-white
          "
          >

            <div className="flex gap-5">

              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-[#22C55E]/10
                flex items-center justify-center
              "
              >
                <ShieldCheck
                  className="text-[#22C55E]"
                  size={28}
                />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Our Mission
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  To provide stress-free healthcare journeys with
                  expert consultation, trusted hospitals, insurance
                  assistance, and dedicated patient support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOUNDERS SECTION
      ====================================================== */}

      <section className="bg-[#f7fbfa] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center max-w-3xl mx-auto">

            <span
              className="
              inline-block
              bg-[#0F766E]/10
              text-[#0F766E]
              px-5 py-2
              rounded-full
              text-sm font-semibold
            "
            >
              LEADERSHIP TEAM
            </span>

            <h2
              className="
              mt-6
              text-4xl md:text-5xl
              font-bold
              text-[#0F172A]
              leading-tight
            "
            >
              Meet The People Behind
              <br />

              Jeevo Health
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Our leadership team is committed to delivering
              trusted healthcare experiences with compassion,
              innovation, and patient-first support.
            </p>
          </div>

          {/* FOUNDERS GRID */}

          <div
            className="
            mt-16
            grid md:grid-cols-2
            gap-10
          "
          >

            {founders.map((founder, i) => (

              <div
                key={i}
                className="
                bg-white
                rounded-[32px]
                overflow-hidden
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
                border border-gray-100
              "
              >

                {/* IMAGE */}

                <div className="relative h-[380px]">

                  <Image
                    src={founder.img}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {founder.name}
                  </h3>

                  <p className="text-[#0F766E] font-medium mt-1">
                    {founder.role}
                  </p>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {founder.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}