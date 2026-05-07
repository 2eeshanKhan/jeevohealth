// // "use client";
// // import { useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import { Star } from "lucide-react";
// // const testimonials = [
// //   {
// //     text: "Installing the smart door lock and security cameras has made our home feel much safer. I can monitor everything right from my phone!",
// //     name: "Amit Sharma",
// //     role: "Homeowner",
// //     image: "/56.jpeg",
// //   },
// //  {
// //     text: "Now I can control my home appliances even when I’m traveling. Way better than traditional systems!",
// //     name: "Neha Agarwal",
// //     role: "Working Professional",
// //     image: "/55.jpeg",
// //   },
// //   {
// //     text: "The voice-controlled smart system has made my home futuristic. Setup was quick and smooth. Loved the experience!",
// //     name: "Rahul Mehta",
// //     role: "Business Owner",
// //     image: "/60.jpeg",
// //   },
// // ];


// // export default function ClientReviews() {
// //   const sliderRef = useRef(null);

// //   useEffect(() => {
// //     const slider = sliderRef.current;   
// //     let scrollAmount = 0;

// //     const autoScroll = () => {
// //       scrollAmount += 1;
// //       slider.scrollLeft = scrollAmount;

// //       if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
// //         scrollAmount = 0;
// //       }
// //     };

// //     const interval = setInterval(autoScroll, 15);

// //     slider.addEventListener("mouseenter", () => clearInterval(interval));

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative w-full bg-[#0A0E19] text-white py-28 overflow-hidden">
// //       {/* Background */}
// //       <div className="absolute inset-0 z-0 opacity-40 bg-[url('/tablet-bg.jpg')] bg-cover bg-center"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
// //         {/* LEFT SIDE */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //         >
// //           <span className="px-6 py-2 bg-white/10 rounded-full text-[#FFC65C] font-medium text-sm tracking-wide">
// //             CLIENT REVIEWS
// //           </span>

// //           <motion.h2
// //   initial={{ opacity: 0, x: -120 }}
// //   whileInView={{ opacity: 1, x: 0 }}
// //   transition={{ duration: 0.8, ease: "easeOut" }}
// //   viewport={{ once: false }} 
// //   className="text-5xl font-bold mt-6 leading-tight"
// // >
// //   Our Clients Say About <br /> Smart Home Services.
// // </motion.h2>


// //           <p className="mt-6 text-white/60 max-w-lg text-[16px] leading-relaxed">
// //            Our clients trust us for delivering seamless automation, reliable security, 
// //            and personalized living experiences that enhance daily comfort.
// //           </p>

// //           <div className="w-24 h-[3px] bg-[#FFC65C] mt-8 rounded-full"></div>
// //         </motion.div>

// //         {/* RIGHT SLIDER */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //           ref={sliderRef}
// //           className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth py-4"
// //         >
// //           {testimonials.concat(testimonials).map((item, idx) => (
// //             <motion.div
// //               key={idx}
// //               className="min-w-[360px] lg:min-w-[380px] max-w-[380px] 
// //               p-10 rounded-3xl flex-shrink-0
// //               bg-gradient-to-br from-[#203A8E] via-[#4566D6] to-[#FFC65C] shadow-2xl"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               {/* Stars */}
// //               <div className="flex gap-1 mb-6 text-[#FFC65C]">
// //                 {Array(5)
// //                   .fill()
// //                   .map((_, i) => (
// //                     <Star key={i} size={20} fill="#FFC65C" color="#FFC65C" />
// //                   ))}
// //               </div>

// //               {/* Quote */}
// //               <p className="text-white text-[18px] leading-relaxed font-medium mb-10">
// //                 {item.text}
// //               </p>

// //               {/* Profile */}
// //               <div className="flex items-center gap-4">
// //                 <Image
// //                   src={item.image}
// //                   width={55}
// //                   height={55}
// //                   alt={item.name}
// //                   className="rounded-full border-2 border-white"
// //                 />
// //                 <div>
// //                   <p className="font-semibold text-[18px] text-white">
// //                     {item.name}
// //                   </p>
// //                   <p className="text-sm text-[#FFC65C] tracking-wide">
// //                     {item.role}
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// // "use client";

// // import { useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import { Star } from "lucide-react";

// // const testimonials = [
// //   {
// //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
// //     name: "Mr. John Dee",
// //     role: "CLIENTS",
// //     image: "/56.jpeg",
// //   },
// //   {
// //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
// //     name: "Mr. John Dee",
// //     role: "CLIENTS",
// //     image: "/55.jpeg",
// //   },
// //   {
// //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
// //     name: "Mr. John Dee",
// //     role: "CLIENTS",
// //     image: "/60.jpeg",
// //   },
// // ];

// // export default function ClientReviews() {
// //   const sliderRef = useRef(null);
// //   const scrollTimeout = useRef(null);

// //   // Start auto-carousel after user stops scrolling
// //   useEffect(() => {
// //     const slider = sliderRef.current;

// //     const startAutoSlide = () => {
// //       scrollTimeout.current = setInterval(() => {
// //         if (slider) {
// //           slider.scrollBy({ left: 380, behavior: "smooth" });
// //           if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
// //             slider.scrollTo({ left: 0, behavior: "smooth" });
// //           }
// //         }
// //       }, 2500);
// //     };

// //     const stopAutoSlide = () => {
// //       clearInterval(scrollTimeout.current);
// //       scrollTimeout.current = null;
// //     };

// //     // Detect scroll stop
// //     slider.addEventListener("scroll", () => {
// //       stopAutoSlide();
// //       if (scrollTimeout.current) clearInterval(scrollTimeout.current);

// //       setTimeout(() => {
// //         if (!scrollTimeout.current) startAutoSlide();
// //       }, 1000);
// //     });

// //     startAutoSlide();

// //     return () => clearInterval(scrollTimeout.current);
// //   }, []);

// //   return (
// //     <section className="relative w-full bg-[#0A0E19] text-white py-28 overflow-hidden">
// //       {/* Background Image */}
// //       <div className="absolute inset-0 z-0 opacity-40 bg-[url('/6.png')] bg-cover bg-center"></div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

// //         {/* LEFT SIDE */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //         >
// //           {/* Badge */}
// //           <span className="px-6 py-2 bg-white/20 backdrop-blur-lg shadow text-[#FFC65C] font-semibold text-sm rounded-full tracking-wide">
// //             CLIENT REVIEWS
// //           </span>

// //           {/* Heading */}
// //           <h2 className="text-5xl font-bold mt-6 leading-tight">
// //             Our Clients Say About <br /> Smart Home Services.
// //           </h2>

// //           {/* Description */}
// //           <p className="mt-6 text-white/70 max-w-lg text-[17px]">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
// //             luctus nec ullamcorper mattis.
// //           </p>

// //           {/* Underline */}
// //           <div className="w-24 h-[3px] bg-[#FFC65C] mt-8 rounded-full"></div>
// //         </motion.div>

// //         {/* RIGHT SIDE — Two Cards + Carousel On Scroll Stop */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //           ref={sliderRef}
// //           className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar py-4 pr-6"
// //         >
// //           {testimonials.concat(testimonials).map((item, i) => (
// //             <div
// //               key={i}
// //               className="min-w-[380px] max-w-[380px] bg-gradient-to-br 
// //               from-[#203A8E] via-[#4566D6] to-[#FFC65C] p-10 rounded-3xl shadow-2xl"
// //             >
// //               {/* Stars */}
// //               <div className="flex gap-1 mb-6 text-[#FFC65C]">
// //                 {[1, 2, 3, 4, 5].map((n) => (
// //                   <Star key={n} size={20} fill="#FFC65C" color="#FFC65C" />
// //                 ))}
// //               </div>

// //               {/* Text */}
// //               <p className="text-white text-[18px] leading-relaxed mb-10">
// //                 {item.text}
// //               </p>

// //               {/* Profile */}
// //               <div className="flex items-center gap-4 mt-auto">
// //                 <Image
// //                   src={item.image}
// //                   width={55}
// //                   height={55}
// //                   alt={item.name}
// //                   className="rounded-full border-2 border-white"
// //                 />
// //                 <div>
// //                   <p className="font-semibold text-[18px] text-white">{item.name}</p>
// //                   <p className="text-sm text-[#FFC65C] tracking-wide">{item.role}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     text: "Installing the smart door lock and security cameras has made our home feel much safer. I can monitor everything right from my phone!",
//     name: "Amit Sharma",
//     role: "Homeowner",
//     image: "/56.jpeg",
//   },
//   {
//     text: "Now I can control my home appliances even when I’m traveling. Way better than traditional systems!",
//     name: "Neha Agarwal",
//     role: "Working Professional",
//     image: "/55.jpeg",
//   },
//   {
//     text: "The voice-controlled smart system has made my home futuristic. Setup was quick and smooth!",
//     name: "Abhishek Tiwari",
//     role: "Business Owner",
//     image: "/60.jpeg",
//   },
// ];

// export default function ClientReviews() {
//   const sliderRef = useRef(null);
//   const scrollTimeout = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;

//     const startAutoSlide = () => {
//       scrollTimeout.current = setInterval(() => {
//         slider.scrollBy({ left: 360, behavior: "smooth" });

//         if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
//           slider.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }, 2500);
//     };

//     const stopAutoSlide = () => {
//       clearInterval(scrollTimeout.current);
//       scrollTimeout.current = null;
//     };

//     slider.addEventListener("scroll", () => {
//       stopAutoSlide();
//       if (scrollTimeout.current) clearInterval(scrollTimeout.current);

//       setTimeout(() => {
//         if (!scrollTimeout.current) startAutoSlide();
//       }, 1000);
//     });

//     startAutoSlide();

//     return () => clearInterval(scrollTimeout.current);
//   }, []);

//   return (
//     <section className="relative w-full bg-[#0A0E19] text-white py-28 overflow-hidden">
//       <div className="absolute inset-0 z-0 opacity-40 bg-[url('/6.png')] bg-cover bg-center"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 
//       grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <span className="px-6 py-2 bg-white/20 backdrop-blur-lg 
//           text-[#FFC65C] font-semibold text-sm rounded-full tracking-wide">
//             CLIENT REVIEWS
//           </span>

//          <motion.h2
//   initial={{ opacity: 0, x: -120 }}      // start far left
//   whileInView={{ opacity: 1, x: 0 }}     // move to normal position
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: false }}
//   className="text-5xl font-bold mt-6 leading-tight"
// >
//   Our Clients Say About <br /> Smart Home Services.
// </motion.h2>

//           <p className="mt-6 text-white/70 max-w-lg text-[17px] leading-relaxed">
//             Our clients trust us for delivering seamless automation,
//             reliable security and personalized living experiences.
//           </p>

//           <div className="w-24 h-[3px] bg-[#FFC65C] mt-8 rounded-full"></div>
//         </motion.div>

//         {/* RIGHT SIDE — EXACT 2 CARDS ONLY */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           ref={sliderRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
//         >
//           {testimonials.concat(testimonials).map((item, i) => (
//             <div
//               key={i}
//               className="min-w-[353px] max-w-[350px]
//               bg-gradient-to-br from-[#203A8E] via-[#4566D6] to-[#FFC65C]
//               p-10 rounded-3xl shadow-2xl flex-shrink-0"
//             >
//               <div className="flex gap-1 mb-6 text-[#FFC65C]">
//                 {[1, 2, 3, 4, 5].map((n) => (
//                   <Star key={n} size={20} fill="#FFC65C" />
//                 ))}
//               </div>

//               <p className="text-white text-[18px] leading-relaxed mb-10">
//                 {item.text}
//               </p>

//               <div className="flex items-center gap-4 mt-auto">
//                 {/* <Image
//                   src={item.image}
//                   width={55}
//                   height={55}
//                   alt={item.name}
//                   className="rounded-full border-2 border-white"
//                 /> */}
//                 <div>
//                   <p className="font-semibold text-[18px] text-white">{item.name}</p>
//                   <p className="text-sm text-[#FFC65C] tracking-wide">{item.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Jeevo Health made my surgery completely stress-free. From doctor consultation to hospital coordination, everything was handled smoothly.",
    name: "Amit Sharma",
    role: "Kidney Stone Treatment",
  },

  {
    text:
      "The doctors were highly experienced and the support team guided me throughout the treatment journey. Highly recommended.",
    name: "Neha Agarwal",
    role: "LASIK Surgery",
  },

  {
    text:
      "From insurance approval to post-surgery care, Jeevo Health provided complete assistance and support at every step.",
    name: "Abhishek Tiwari",
    role: "Bariatric Treatment",
  },
];

export default function ClientReviews() {

  const sliderRef = useRef(null);

  const scrollTimeout = useRef(null);

  useEffect(() => {

    const slider = sliderRef.current;

    const startAutoSlide = () => {

      scrollTimeout.current = setInterval(() => {

        slider.scrollBy({
          left: 360,
          behavior: "smooth",
        });

        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth
        ) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }, 2500);
    };

    const stopAutoSlide = () => {
      clearInterval(scrollTimeout.current);

      scrollTimeout.current = null;
    };

    slider.addEventListener("scroll", () => {

      stopAutoSlide();

      if (scrollTimeout.current)
        clearInterval(scrollTimeout.current);

      setTimeout(() => {

        if (!scrollTimeout.current)
          startAutoSlide();

      }, 1000);
    });

    startAutoSlide();

    return () =>
      clearInterval(scrollTimeout.current);

  }, []);

  return (
    <section
      className="
      relative w-full
      bg-[#0F172A]
      text-white
      py-28
      overflow-hidden
    "
    >
      {/* BACKGROUND */}
      <div
        className="
        absolute inset-0 z-0
        opacity-20
        bg-[url('/hospital-team.jpg')]
        bg-cover bg-center
      "
      ></div>

      <div
        className="
        relative z-10
        max-w-7xl mx-auto
        px-6 lg:px-12
        grid grid-cols-1
        lg:grid-cols-[40%_60%]
        gap-20
        items-center
      "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* BADGE */}
          <span
            className="
            px-6 py-2
            bg-white/10
            backdrop-blur-lg
            text-orange-300
            font-semibold
            text-sm
            rounded-full
            tracking-wide
          "
          >
            PATIENT TESTIMONIALS
          </span>

          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              x: -120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="
            text-5xl
            font-bold
            mt-6
            leading-tight
          "
          >
            What Patients Say
            <br />
            About Jeevo Health.
          </motion.h2>

          {/* DESCRIPTION */}
          <p
            className="
            mt-6
            text-white/70
            max-w-lg
            text-[17px]
            leading-relaxed
          "
          >
            Patients trust Jeevo Health for expert doctors,
            trusted hospitals, smooth treatment experiences,
            and dedicated support from consultation to recovery.
          </p>

          {/* LINE */}
          <div
            className="
            w-24 h-[3px]
            bg-orange-300
            mt-8
            rounded-full
          "
          ></div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ref={sliderRef}
          className="
          flex gap-6
          overflow-x-auto
          scroll-smooth
          no-scrollbar
          py-4
        "
        >
          {testimonials
            .concat(testimonials)
            .map((item, i) => (

              <div
                key={i}
                className="
                min-w-[353px]
                max-w-[350px]
                bg-gradient-to-br
                from-[#0F766E]
                via-[#14b8a6]
                to-[#22C55E]
                p-10
                rounded-3xl
                shadow-2xl
                flex-shrink-0
              "
              >

                {/* STARS */}
                <div
                  className="
                  flex gap-1
                  mb-6
                  text-orange-300
                "
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={20}
                      fill="#fdba74"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p
                  className="
                  text-white
                  text-[18px]
                  leading-relaxed
                  mb-10
                "
                >
                  {item.text}
                </p>

                {/* PROFILE */}
                <div
                  className="
                  flex items-center gap-4
                  mt-auto
                "
                >
                  <div>
                    <p
                      className="
                      font-semibold
                      text-[18px]
                      text-white
                    "
                    >
                      {item.name}
                    </p>

                    <p
                      className="
                      text-sm
                      text-orange-200
                      tracking-wide
                    "
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}