

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Check } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: i * 0.2 },
//   }),
// };

// export default function ServicesSection() {
//  const products = [
//     {
//       title: "Smart Plug 16A",
//       desc: "High-power smart plug with overload protection and energy tracking.",
//       image: "/123.jpeg",
//     },
//     {
//       title: "Smart Sensor Hub",
//       desc: "Central hub connecting sensors, switches, and automations.",
//       image: "/124.jpeg",
//     },
//     {
//       title: "Smart BLDC FAN",
//       desc: "3 Blade Black",
//       image: "/199.jpeg",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full py-28"
//       style={{
//         background: "radial-gradient(circle at bottom, #0a1226, #07101f 70%)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <span className="text-xs font-semibold bg-[#3592ea]/10 text-[#3592ea] px-4 py-2 rounded-full">
//             SMART HOME PRODUCTS
//           </span>

//          <motion.h2
//   initial={{ opacity: 0, x: -120 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: false }}   // plays again on scroll
//   className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight"
// >
//   Discover The Smart Solutions <br />
//   We Bring To Your Home.
// </motion.h2>

//           <p className="text-gray-300 mt-5 max-w-md text-[15px]">
//             Explore our advanced smart automation devices that enhance 
//             comfort, safety, and lifestyle effortlessly.
//           </p>

//           {/* Bullet Points */}
//           <div className="mt-8 space-y-4 text-gray-200">
//             <div className="flex items-center gap-3">
//               <Check className="text-[#ffd36b]" size={20} />
//               <span>Seamless automation and voice control</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Check className="text-[#ffd36b]" size={20} />
//               <span>Secure and energy-efficient smart homes</span>
//             </div>
//           </div>

//           <div className="w-16 h-[3px] bg-[#ffd36b] mt-8"></div>
//         </motion.div>

//         {/* RIGHT PRODUCT CARDS */}
//         <div className="space-y-8">
//           {products.map((product, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={i}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//               className="flex items-center gap-4 bg-[#0d152b] rounded-3xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer"
//             >
//               {/* IMAGE */}
//               <div className="min-w-[160px] h-[130px] rounded-xl overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={200}
//                   height={150}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               {/* TEXT SECTION */}
//               <div
//                 className="rounded-2xl p-5 text-white flex-1"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #0b1f3d 0%, #1f4e9e 70%, #63a1ff 100%)",
//                 }}
//               >
//                 <h3 className="text-lg font-semibold">{product.title}</h3>
//                 <p className="text-sm opacity-90 mt-2">{product.desc}</p>

//                 <button className="mt-4 font-semibold text-sm flex items-center gap-1">
//                   Learn More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.18,
    },
  }),
};

export default function ServicesSection() {

  const treatments = [
    {
      title: "LASIK Eye Surgery",
      desc:
        "Advanced laser treatment to remove glasses permanently with faster recovery.",
      image: "/lasik.jpg",
    },

    {
      title: "Kidney Stone Treatment",
      desc:
        "Minimally invasive procedures for safe and effective kidney stone removal.",
      image: "/kidney.jpg",
    },

    {
      title: "Bariatric Surgery",
      desc:
        "Doctor-guided weight loss treatments with complete post-surgery support.",
      image: "/bariatric.jpg",
    },
  ];

  return (
    <section
      className="
      relative w-full py-28 overflow-hidden
      bg-gradient-to-br
      from-[#f7fbfa]
      via-white
      to-[#eef9f7]
    "
    >
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* BADGE */}
          <span
            className="
            text-xs font-semibold
            bg-[#0F766E]/10
            text-[#0F766E]
            px-4 py-2
            rounded-full
          "
          >
            OUR POPULAR TREATMENTS
          </span>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="
            mt-6
            text-4xl lg:text-5xl
            font-bold
            text-gray-900
            leading-tight
          "
          >
            Advanced Treatments
            <br />
            With Expert Care.
          </motion.h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-5 max-w-md text-[15px] leading-relaxed">
            Jeevo Health connects you with experienced doctors,
            trusted hospitals, and modern surgical treatments —
            ensuring safe and stress-free healthcare support.
          </p>

          {/* BULLET POINTS */}
          <div className="mt-8 space-y-4 text-gray-700">

            <div className="flex items-center gap-3">
              <Check
                className="text-[#22C55E]"
                size={20}
              />
              <span>Experienced & verified specialist doctors</span>
            </div>

            <div className="flex items-center gap-3">
              <Check
                className="text-[#22C55E]"
                size={20}
              />
              <span>Insurance & EMI assistance available</span>
            </div>

            <div className="flex items-center gap-3">
              <Check
                className="text-[#22C55E]"
                size={20}
              />
              <span>Dedicated support from consultation to recovery</span>
            </div>
          </div>

          {/* ACCENT LINE */}
          <div className="w-20 h-[4px] bg-orange-400 rounded-full mt-8"></div>
        </motion.div>

        {/* RIGHT TREATMENT CARDS */}
        <div className="space-y-8">

          {treatments.map((treatment, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015 }}
              className="
              flex flex-col sm:flex-row items-center gap-4
              bg-white
              rounded-3xl
              border border-gray-100
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_60px_rgba(15,118,110,0.12)]
              transition-all duration-500
              p-4
              cursor-pointer
            "
            >

              {/* IMAGE */}
              <div className="min-w-[160px] h-[130px] rounded-2xl overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  width={220}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* TEXT CARD */}
              <div
                className="
                rounded-2xl
                p-6
                flex-1
                bg-gradient-to-br
                from-[#0F766E]
                to-[#115e59]
                text-white
              "
              >
                <h3 className="text-xl font-semibold">
                  {treatment.title}
                </h3>

                <p className="text-sm text-white/85 mt-3 leading-relaxed">
                  {treatment.desc}
                </p>

                <button
                  className="
                  mt-5
                  font-semibold
                  text-sm
                  flex items-center gap-2
                  hover:gap-3
                  transition-all
                "
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}