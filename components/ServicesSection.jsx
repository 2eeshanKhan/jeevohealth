// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   ShieldCheck,
//   Lightbulb,
//   Smartphone,
//   BadgeCheck,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// function ServiceCard({ icon, title, desc, index, setRef }) {
//   return (
//     <div
//       ref={setRef}
//       className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500
//                  border border-gray-100 hover:bg-[#002b4e] cursor-pointer
//                  flex flex-col items-start opacity-0 translate-y-6"
//     >
//       <div className="text-[#3592ea] group-hover:text-white transition duration-300 mb-4">
//         {icon}
//       </div>

//       <h3 className="text-lg font-semibold text-[#0a0a0a] group-hover:text-white transition duration-300">
//         {title}
//       </h3>

//       <p className="text-gray-600 group-hover:text-gray-200 text-sm mt-3 flex-1 transition duration-300">
//         {desc}
//       </p>

//       <div className="mt-6 font-semibold flex items-center gap-2 text-[#3592ea] group-hover:text-white transition">
//         Learn More →
//       </div>
//     </div>
//   );
// }

// const data = [
//   {
//     icon: <Lightbulb size={42} />,
//     title: "Smart Infrastructure",
//     desc: "Automated lighting and IoT energy systems.",
//   },
//   {
//     icon: <ShieldCheck size={42} />,
//     title: "Enhanced Security",
//     desc: "AI-powered CCTV and door-locks.",
//   },
//   {
//     icon: <Smartphone size={42} />,
//     title: "Comfort Customization",
//     desc: "Control temperature & lights with voice.",
//   },
//   {
//     icon: <BadgeCheck size={42} />,
//     title: "Fully Certified Units",
//     desc: "Certified installations with legal standards.",
//   },
// ];

// export default function FeaturedServices() {
//   const cardRefs = useRef([]);
//   const tempRefs = useRef([]);
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     cardRefs.current = tempRefs.current;

//     // ⭐ 1) SECTION OVERLAP (exact Smarto feel)
//     gsap.fromTo(
//       sectionRef.current,
//       { y: 0 },
//       {
//         y: -280, // Smarto overlap height
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "top top",
//           scrub: 1.1,
//         },
//       }
//     );

//     // ⭐ 2) HEADER FADE-UP (matching Elementor fade-up)
//     gsap.fromTo(
//       headerRef.current,
//       { opacity: 0, y: 35 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       }
//     );

//     // ⭐ 3) CARD FADE-IN (Elementor stagger style)
//     gsap.fromTo(
//       cardRefs.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.9,
//         stagger: 0.18,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardRefs.current[0],
//           start: "top 90%",
//         },
//       }
//     );

//     // ⭐ 4) CARD PARALLAX (Smarto subtle movement)
//     cardRefs.current.forEach((card, i) => {
//       gsap.to(card, {
//         y: i % 2 === 0 ? -18 : -12, // subtle movement
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1.1,
//         },
//       });
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative z-[20] py-28 bg-[#f8f7f4]"
//     >
//       {/* Header */}
//       <div
//         ref={headerRef}
//         className="text-center max-w-3xl mx-auto px-6 opacity-0"
//       >
//         <span className="inline-block text-[#3592ea] bg-[#e8f2ff] px-5 py-2 rounded-full text-xs font-semibold">
//           FEATURED SERVICES
//         </span>

//         <h2 className="text-3xl md:text-4xl font-bold mt-6 text-[#0a0a0a] leading-tight">
//           Explore Our Comprehensive Range of Smart Home Services
//         </h2>

//         <p className="text-gray-600 mt-4 text-sm md:text-base">
//           Smart tech solutions designed for comfort, efficiency, and peace of mind.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
//         {data.map((service, i) => (
//           <ServiceCard
//             key={i}
//             {...service}
//             setRef={(el) => (tempRefs.current[i] = el)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import {
//   ShieldCheck,
//   Lightbulb,
//   Smartphone,
//   BadgeCheck,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// function ServiceCard({ icon, title, desc, index, setRef }) {
//   return (
//     <div
//       ref={setRef}
//       className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500
//                  border border-gray-100 hover:bg-[#002b4e] cursor-pointer
//                  flex flex-col items-start opacity-0 translate-y-6"
//     >
//       <div className="text-[#3592ea] group-hover:text-white transition duration-300 mb-4">
//         {icon}
//       </div>

//       <h3 className="text-lg font-semibold text-[#0a0a0a] group-hover:text-white transition duration-300">
//         {title}
//       </h3>

//       <p className="text-gray-600 group-hover:text-gray-200 text-sm mt-3 flex-1 transition duration-300">
//         {desc}
//       </p>

//       <div className="mt-6 font-semibold flex items-center gap-2 text-[#3592ea] group-hover:text-white transition">
//         Learn More →
//       </div>
//     </div>
//   );
// }

// const data = [
//   {
//     icon: <Lightbulb size={42} />,
//     title: "Smart Infrastructure",
//     desc: "Automated lighting and IoT energy systems.",
//   },
//   {
//     icon: <ShieldCheck size={42} />,
//     title: "Enhanced Security",
//     desc: "AI-powered CCTV and door-locks.",
//   },
//   {
//     icon: <Smartphone size={42} />,
//     title: "Comfort Customization",
//     desc: "Control temperature & lights with voice.",
//   },
//   {
//     icon: <BadgeCheck size={42} />,
//     title: "Fully Certified Units",
//     desc: "Certified installations with legal standards.",
//   },
// ];

// export default function FeaturedServices() {
//   const cardRefs = useRef([]);
//   const tempRefs = useRef([]);
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     cardRefs.current = tempRefs.current;

//     /** -----------------------------
//      * ⭐ 1) SECTION LIFT (GAP-FREE)
//      * ----------------------------- */

//     gsap.fromTo(
//       sectionRef.current,
//       { y: 0 },
//       {
//         y: -140, // reduced to avoid large gap
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "top center",
//           scrub: 1.1,
//         },
//       }
//     );

//     /** -----------------------------
//      * ⭐ 2) HEADER FADE UP
//      * ----------------------------- */
//     gsap.fromTo(
//       headerRef.current,
//       { opacity: 0, y: 35 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       }
//     );

//     /** -----------------------------
//      * ⭐ 3) CARDS FADE-IN UP
//      * ----------------------------- */
//     gsap.fromTo(
//       cardRefs.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.9,
//         stagger: 0.18,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardRefs.current[0],
//           start: "top 90%",
//         },
//       }
//     );

//     /** -----------------------------
//      * ⭐ 4) CARD PARALLAX (SUBTLE)
//      * ----------------------------- */
//     cardRefs.current.forEach((card, i) => {
//       gsap.to(card, {
//         y: i % 2 === 0 ? -18 : -12,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1.1,
//         },
//       });
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative z-[20] py-28 bg-[#f8f7f4]"
//       style={{ marginBottom: "-140px" }} // ⭐ FIX: Removes bottom gap
//     >
//       {/* Header */}
//       <div
//         ref={headerRef}
//         className="text-center max-w-3xl mx-auto px-6 opacity-0"
//       >
//         <span className="inline-block text-[#3592ea] bg-[#e8f2ff] px-5 py-2 rounded-full text-xs font-semibold">
//           FEATURED SERVICES
//         </span>

//         <h2 className="text-3xl md:text-4xl font-bold mt-6 text-[#0a0a0a] leading-tight">
//           Explore Our Comprehensive Range of Smart Home Services
//         </h2>

//         <p className="text-gray-600 mt-4 text-sm md:text-base">
//           Smart tech solutions designed for comfort, efficiency, and peace of mind.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
//         {data.map((service, i) => (
//           <ServiceCard
//             key={i}
//             {...service}
//             setRef={(el) => (tempRefs.current[i] = el)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }





"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------
   CARD
---------------------------------------- */

function ServiceCard({ icon, title, desc, setRef }) {
  return (
    <div
      ref={setRef}
      className="
      group bg-white p-8 rounded-3xl
      border border-gray-100
      shadow-[0_10px_40px_rgba(0,0,0,0.04)]
      hover:shadow-[0_20px_60px_rgba(15,118,110,0.12)]
      transition-all duration-500
      hover:-translate-y-2
      cursor-pointer
      flex flex-col items-start
      opacity-0 translate-y-6
    "
    >
      {/* ICON */}
      <div
        className="
        w-16 h-16 rounded-2xl
        bg-[#0F766E]/10
        flex items-center justify-center
        text-[#0F766E]
        mb-6
        group-hover:bg-[#0F766E]
        group-hover:text-white
        transition-all duration-500
      "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">
        {desc}
      </p>

      {/* CTA */}
      <div className="mt-6 font-semibold text-[#0F766E] flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More →
      </div>
    </div>
  );
}

/* ---------------------------------------
   DATA
---------------------------------------- */

const data = [
  {
    icon: <Stethoscope size={34} />,
    title: "Expert Specialist Doctors",
    desc:
      "Consult highly experienced and verified surgeons across multiple specialties.",
  },

  {
    icon: <ShieldCheck size={34} />,
    title: "Insurance & EMI Support",
    desc:
      "Complete assistance with insurance approvals and flexible EMI options.",
  },

  {
    icon: <HeartPulse size={34} />,
    title: "Advanced Treatments",
    desc:
      "Modern minimally invasive procedures for faster recovery and better outcomes.",
  },

  {
    icon: <BadgeCheck size={34} />,
    title: "End-to-End Care",
    desc:
      "Dedicated care coordinators to support you from consultation to recovery.",
  },
];

/* ---------------------------------------
   COMPONENT
---------------------------------------- */

export default function FeaturedServices() {
  const cardRefs = useRef([]);
  const tempRefs = useRef([]);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    cardRefs.current = tempRefs.current;

    /* SECTION PARALLAX */
    gsap.fromTo(
      sectionRef.current,
      { y: 0 },
      {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      }
    );

    /* HEADER */
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    /* CARDS */
    gsap.fromTo(
      cardRefs.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: "top 90%",
        },
      }
    );

    /* CARD FLOAT */
    cardRefs.current.forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -14 : -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      relative z-[20]
      py-28
      bg-gradient-to-b
      from-[#f7fbfa]
      to-white
    "
      style={{
        marginBottom: "-100px",
      }}
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className="text-center max-w-3xl mx-auto px-6 opacity-0"
      >
        {/* BADGE */}
        <span
          className="
          inline-block
          text-[#0F766E]
          bg-[#0F766E]/10
          px-5 py-2
          rounded-full
          text-xs font-semibold
          tracking-wide
        "
        >
          WHY CHOOSE JEEVO HEALTH
        </span>

        {/* TITLE */}
        <h2
          className="
          text-4xl md:text-5xl
          font-bold
          mt-6
          text-gray-900
          leading-tight
        "
        >
          Complete Healthcare Support,
          <br />
          Designed Around You
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 mt-5 text-base leading-relaxed">
          From expert consultations to advanced surgeries and post-treatment care,
          Jeevo Health ensures a seamless healthcare experience.
        </p>
      </div>

      {/* CARDS */}
      <div
        className="
        mt-20
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-7
        max-w-7xl
        mx-auto
        px-6
      "
      >
        {data.map((service, i) => (
          <ServiceCard
            key={i}
            {...service}
            setRef={(el) => (tempRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}