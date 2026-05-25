// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";

// export default function ServiceFaq() {
//  const [openIndex, setOpenIndex] = useState(0);


//   const faqs = [
//     {
//       question: "What is the typical installation time ?",
//       answer:
//         "A standard residential smart-home installation usually takes 3–6 hours for a single zone. Larger projects such as multi-room automation, HVAC integration, and advanced surveillance may take 1–3 days.",
//     },
//     {
//       question: "Can I upgrade my existing system in the future ?",
//       answer:
//         "Absolutely. All our systems are modular and support seamless upgrades. You can add new devices, sensors, automations, or voice-assistant integrations anytime without replacing the core system.",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#061120] text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

//         {/* LEFT COLUMN ---------- */}
//         <div className="flex flex-col gap-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="rounded-3xl overflow-hidden shadow-lg h-[190px]"
//           >
//             <Image
//               src="/1.png"
//               alt="support image"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="rounded-3xl p-7 bg-gradient-to-br from-[#2C76E2] via-[#6DA0FF] to-[#F1C37C] text-white shadow-2xl"
//           >
//             <h4 className="text-xl font-semibold leading-snug">
//               24/7 Dedicated <br /> Team Support
//             </h4>
//             <p className="text-white/90 text-sm mt-3 leading-relaxed">
//               Our experts are available round-the-clock to assist with installation,
//               troubleshooting and smart-home upgrades.
//             </p>
//           </motion.div>
//         </div>

//         {/* CENTER VIDEO PREVIEW ---------- */}
//         <div className="hidden lg:flex justify-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative w-[380px] h-[530px] rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <Image
//               src="/2.png"
//               alt="video-thumb"
//               fill
//               className="object-cover"
//             />

//             {/* <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div
//                 animate={{ scale: [1, 1.12, 1] }}
//                 transition={{ repeat: Infinity, duration: 1.6 }}
//                 className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"
//               >
//                 <span className="text-[#FFB84D] text-2xl font-semibold">►</span>
//               </motion.div>
//             </div> */}
//           </motion.div>
//         </div>

//         {/* RIGHT FAQ CONTENT ---------- */}
//         <div>
//           <span className="inline-block bg-white/10 px-5 py-2 rounded-full text-[#FFC65C] text-sm font-semibold">
//             SERVICE FAQS
//           </span>

//          <motion.h2
//   initial={{ opacity: 0, x: -120 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: false }}
//   className="mt-6 text-4xl font-bold leading-tight"
// >
//   Asked Questions About Our <br /> Smart Home Solutions.
// </motion.h2>


//           <p className="mt-4 text-white/70">
//             Here are the most common questions customers ask about installations,
//             system upgrades, device compatibility, and after-sales support.
//           </p>

//           {/* ACCORDION */}
//           <div className="mt-8 space-y-5">
//             {faqs.map((item, i) => {
//               const open = openIndex === i;
//               return (
//                 <div key={i}>
//                   {/* QUESTION BUTTON */}
//                   <motion.button
//                     layout
//                     onClick={() => setOpenIndex(open ? null : i)}
//                     className={`w-full rounded-full px-6 py-4 flex items-center justify-between
//                       transition-all duration-300
//                       ${
//                         open
//                           ? "bg-gradient-to-r from-[#FFC65C] via-[#6E8BDF] to-[#8FB1FF] text-black"
//                           : "bg-white/5 text-white hover:bg-white/10"
//                       }`}
//                   >
//                     <span className="font-medium">{item.question}</span>
//                     {open ? (
//                       <ChevronUp className="w-5 h-5" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5" />
//                     )}
//                   </motion.button>

//                   {/* ANSWER */}
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
//                     transition={{ duration: 0.35 }}
//                     className="overflow-hidden"
//                   >
//                     <p className="px-4 mt-3 text-white/70">{item.answer}</p>
//                   </motion.div>
//                 </div>
//               );
//             })}

           
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ServiceFaq() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is consultation free at Jeevo Health?",
      answer:
        "Yes, Jeevo Health provides free consultations to help patients connect with experienced specialists and choose the right treatment.",
    },

    {
      question: "Do you assist with insurance and EMI support?",
      answer:
        "Absolutely. Our dedicated care team helps patients with insurance approvals and also provides EMI support options for eligible treatments.",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT COLUMN ---------- */}
        <div className="flex flex-col gap-6">

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            rounded-3xl overflow-hidden
            shadow-lg h-[190px]
          "
          >
            <Image
              src="/support1.jpeg"
              alt="Healthcare Support"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* SUPPORT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
            rounded-3xl p-7
            bg-gradient-to-br
            from-[#0F766E]
            via-[#14b8a6]
            to-[#22C55E]
            text-white
            shadow-2xl
          "
          >
            <h4 className="text-xl font-semibold leading-snug">
              24/7 Dedicated <br />
              Patient Support
            </h4>

            <p className="text-white/90 text-sm mt-3 leading-relaxed">
              Our healthcare coordinators are available round-the-clock
              to assist with appointments, treatments, insurance,
              and recovery support.
            </p>
          </motion.div>
        </div>

        {/* CENTER IMAGE ---------- */}
        <div className="hidden lg:flex justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            relative w-[380px] h-[530px]
            rounded-3xl overflow-hidden
            shadow-2xl
          "
          >
            <Image
           src="/support1.jpeg"
              alt="Jeevo Health"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* RIGHT FAQ CONTENT ---------- */}
        <div>

          {/* BADGE */}
          <span
            className="
            inline-block
            bg-white/10
            px-5 py-2
            rounded-full
            text-orange-300
            text-sm font-semibold
          "
          >
            FREQUENTLY ASKED QUESTIONS
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
            text-4xl
            font-bold
            leading-tight
          "
          >
            Common Questions About
            <br />
            Jeevo Health Services.
          </motion.h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-white/70 leading-relaxed">
            Here are some common questions patients ask about
            consultations, treatments, insurance support,
            and post-surgery care assistance.
          </p>

          {/* ACCORDION */}
          <div className="mt-8 space-y-5">

            {faqs.map((item, i) => {

              const open = openIndex === i;

              return (
                <div key={i}>

                  {/* QUESTION BUTTON */}
                  <motion.button
                    layout
                    onClick={() =>
                      setOpenIndex(open ? null : i)
                    }
                    className={`
                      w-full rounded-full px-6 py-4
                      flex items-center justify-between
                      transition-all duration-300
                      ${
                        open
                          ? "bg-gradient-to-r from-[#0F766E] via-[#14b8a6] to-[#22C55E] text-white"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <span className="font-medium text-left">
                      {item.question}
                    </span>

                    {open ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </motion.button>

                  {/* ANSWER */}
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={
                      open
                        ? {
                            height: "auto",
                            opacity: 1,
                          }
                        : {
                            height: 0,
                            opacity: 0,
                          }
                    }
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 mt-3 text-white/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}