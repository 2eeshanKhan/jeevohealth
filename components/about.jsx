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
      name: "Mohit Ahuja",
      role: "Founder & Healthcare Director",

      desc:
        "Mohit Ahuja focuses on building accessible healthcare solutions with trusted doctors, advanced treatments, and patient-centric care.",

      img: "/founder1.jpg",
    },

    {
      name: "Mr. Abhishek",
      role: "Co-Founder",

      desc:
        "Abhishek leads healthcare operations and patient assistance, ensuring seamless treatment coordination and support throughout the healthcare journey.",

      img: "/founder2.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}
<section className="relative overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] py-24 lg:py-32">

  {/* Background Shapes */}

  <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F766E]/10 rounded-full blur-3xl" />

  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22C55E]/10 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center max-w-4xl mx-auto">

      {/* Badge */}

      <span className="
        inline-flex
        items-center
        gap-2
        bg-[#0F766E]/10
        text-[#0F766E]
        border
        border-[#0F766E]/10
        px-5
        py-2
        rounded-full
        text-sm
        font-semibold
      ">
        About Jeevo Health
      </span>

      {/* Heading */}

      <h1 className="
        mt-8
        text-5xl
        md:text-6xl
        lg:text-7xl
        font-bold
        leading-tight
        text-gray-900
      ">
        Simplifying Healthcare
        <br />

        <span className="text-[#0F766E]">
          With Trusted Medical Support
        </span>
      </h1>

      {/* Description */}

      <p className="
        mt-8
        text-lg
        text-gray-600
        max-w-3xl
        mx-auto
        leading-relaxed
      ">
        Jeevo Health connects patients with experienced
        doctors, trusted hospitals, and dedicated care
        coordinators to ensure a seamless healthcare
        journey from consultation to recovery.
      </p>

      {/* Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <button className="
          bg-[#0F766E]
          hover:bg-[#0b5f58]
          text-white
          px-8
          py-4
          rounded-lg
          font-semibold
          transition
        ">
          Book Consultation
        </button>

        <button className="
          border
          border-[#0F766E]
          text-[#0F766E]
          px-8
          py-4
          rounded-lg
          font-semibold
          hover:bg-[#0F766E]
          hover:text-white
          transition
        ">
          Learn More
        </button>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

        <div>
          <h3 className="text-4xl font-bold text-[#0F766E]">
            1000+
          </h3>
          <p className="text-gray-500 mt-2">
            Patients Assisted
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#0F766E]">
            50+
          </h3>
          <p className="text-gray-500 mt-2">
            Specialists
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#0F766E]">
            25+
          </h3>
          <p className="text-gray-500 mt-2">
            Hospitals
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#0F766E]">
            24x7
          </h3>
          <p className="text-gray-500 mt-2">
            Patient Support
          </p>
        </div>

      </div>

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