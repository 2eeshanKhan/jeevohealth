// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function DiscoverBlog() {
//   const blogs = [
//     {
//       id: 1,
//       title: "Future Trends In Smart Home Technology",
//       date: "April 30, 2025",
//       image: "/1.png",
//       href: "/blog/future-smart-home",
//     },
//     {
//       id: 2,
//       title: "5 Mistakes To Avoid When Building Your Smart Home",
//       date: "April 30, 2025",
//       image: "/2.png",
//       href: "/blog/common-mistakes",
//     },
//     {
//       id: 3,
//       title: "Smart Home Security – Best Systems To Protect",
//       date: "April 30, 2025",
//       image: "/3.png",
//       href: "/blog/best-security",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#FFF8F1] py-20 px-6 lg:px-16">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
//           <div>
//             <span className="bg-[#FFF2D8] text-[#C28A2E] px-5 py-2 rounded-full text-sm font-semibold">
//               DISCOVER BLOG
//             </span>

//             {/* <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F1B2B] leading-snug max-w-xl">
//               Stay Informed With The Latest In Smart Home Technology.
//             </h2> */}

//             <motion.h2
//   initial={{ opacity: 0, x: -120 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   viewport={{ once: false }}
//   className="mt-6 text-4xl md:text-5xl font-bold text-[#0F1B2B] leading-snug max-w-xl"
// >
//   Stay Informed With The Latest In Smart Home Technology.
// </motion.h2>

//           </div>

//           {/* Right side small text + button */}
//           <div className="max-w-sm">
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Stay updated with expert insights, trends, and tips about smart
//               home automation, energy efficiency, and security systems.
//             </p>

//             <Link href="/blog">
//               <button className="mt-6 bg-gradient-to-r from-[#FFC65C] to-[#4465D5] text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 shadow-md hover:brightness-110 transition">
//                 See All Blog <ArrowRight size={18} />
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* MAIN GRID */}
//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

//           {/* LEFT COLUMN (Big Cards) */}
//           <div className="col-span-2 flex flex-col gap-10">

//             {/* SMALL LEFT CARD */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative h-[280px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
//             >
//               <Image
//                 src="/6.png"
//                 alt="Smart kitchen"
//                 fill
//                 className="object-cover"
//               />

//               {/* Category pill */}
//               <div className="absolute top-4 left-4 bg-[#294ED8] text-white px-4 py-1 text-sm rounded-full shadow">
//                 Smarthome
//               </div>

//               {/* Gradient Fade */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

//             </motion.div>

//             {/* BIG CARD */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
//             >
//               <Image
//                 src="/5.png"
//                 alt="Smart home trends"
//                 fill
//                 className="object-cover"
//               />

//               {/* Bottom Dark Gradient */}
//               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#020617]/90 to-transparent">
//                 <p className="flex items-center text-white/90 text-sm gap-2">
//                   <span className="text-lg">📅</span> April 30, 2025
//                 </p>

//                 <h3 className="text-white text-3xl mt-3 font-bold leading-snug">
//                   Future Trends In Smart Home <br /> Technology
//                 </h3>

//                 <Link href="/blog/future-smart-home">
//                   <button className="mt-5 text-[#FFC65C] flex items-center gap-2 font-semibold">
//                     Read More <ArrowRight size={18} />
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDEBAR LIST */}
//           <div className="flex flex-col gap-10">
//             {blogs.map((item) => (
//               <Link key={item.id} href={item.href}>
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="flex gap-5 items-start cursor-pointer"
//                 >
//                   <div className="relative w-[110px] h-[110px] rounded-xl overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="flex-1">
//                     <h4 className="text-[#0F1B2B] font-semibold text-[16px] leading-snug">
//                       {item.title}
//                     </h4>

//                     <p className="text-gray-500 text-sm mt-1">{item.date}</p>

//                     <span className="text-[#FF9F1C] mt-2 text-sm inline-block font-medium">
//                       Read More →
//                     </span>
//                   </div>
//                 </motion.div>
//               </Link>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function DiscoverBlog() {

  const blogs = [
    {
      id: 1,
      title: "How To Choose The Right Surgeon For Your Treatment",
      date: "April 30, 2025",
      image: "/doctor-blog.jpg",
      href: "/blog/right-surgeon",
    },

    {
      id: 2,
      title: "Things To Know Before LASIK Eye Surgery",
      date: "April 30, 2025",
      image: "/lasik-blog.jpg",
      href: "/blog/lasik-guide",
    },

    {
      id: 3,
      title: "Benefits Of Minimally Invasive Surgeries",
      date: "April 30, 2025",
      image: "/surgery-blog.jpg",
      href: "/blog/minimally-invasive",
    },
  ];

  return (
    <section className="w-full bg-[#f7fbfa] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* LEFT */}
          <div>

            <span
              className="
              bg-[#0F766E]/10
              text-[#0F766E]
              px-5 py-2
              rounded-full
              text-sm
              font-semibold
            "
            >
              HEALTHCARE INSIGHTS
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
              text-4xl md:text-5xl
              font-bold
              text-[#0F1B2B]
              leading-snug
              max-w-xl
            "
            >
              Stay Informed With
              <br />
              Expert Healthcare Guides.
            </motion.h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-sm">

            <p className="text-gray-600 text-sm leading-relaxed">
              Explore expert insights, treatment guides,
              recovery tips, and healthcare advice from
              experienced specialists and medical experts.
            </p>

            <Link href="/blog">

              <button
                className="
                mt-6
                bg-gradient-to-r
                from-[#0F766E]
                to-[#14b8a6]
                text-white
                font-medium
                px-8 py-3
                rounded-full
                flex items-center gap-2
                shadow-md
                hover:brightness-110
                transition
              "
              >
                See All Articles
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div className="col-span-2 flex flex-col gap-10">

            {/* SMALL TOP CARD */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="
              relative h-[280px]
              rounded-3xl
              overflow-hidden
              shadow-lg
              cursor-pointer
            "
            >
              <Image
                src="/hospital-care.jpg"
                alt="Healthcare"
                fill
                className="object-cover"
              />

              {/* CATEGORY */}
              <div
                className="
                absolute top-4 left-4
                bg-[#0F766E]
                text-white
                px-4 py-1
                text-sm
                rounded-full
                shadow
              "
              >
                Healthcare
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>

            {/* BIG CARD */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="
              relative h-[420px]
              rounded-3xl
              overflow-hidden
              shadow-xl
              cursor-pointer
            "
            >
              <Image
                src="/hospital-team.jpg"
                alt="Healthcare Trends"
                fill
                className="object-cover"
              />

              {/* GRADIENT */}
              <div
                className="
                absolute bottom-0 left-0 right-0
                p-8
                bg-gradient-to-t
                from-[#020617]/90
                to-transparent
              "
              >
                <p className="flex items-center text-white/90 text-sm gap-2">
                  <span className="text-lg">📅</span>
                  April 30, 2025
                </p>

                <h3
                  className="
                  text-white text-3xl
                  mt-3
                  font-bold
                  leading-snug
                "
                >
                  How Jeevo Health Makes
                  <br />
                  Surgeries Stress-Free
                </h3>

                <Link href="/blog/stress-free-surgery">

                  <button
                    className="
                    mt-5
                    text-orange-300
                    flex items-center gap-2
                    font-semibold
                  "
                  >
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-10">

            {blogs.map((item) => (
              <Link
                key={item.id}
                href={item.href}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="
                  flex gap-5 items-start
                  cursor-pointer
                "
                >

                  {/* IMAGE */}
                  <div
                    className="
                    relative w-[110px] h-[110px]
                    rounded-xl overflow-hidden
                  "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <h4
                      className="
                      text-[#0F1B2B]
                      font-semibold
                      text-[16px]
                      leading-snug
                    "
                    >
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.date}
                    </p>

                    <span
                      className="
                      text-orange-500
                      mt-2
                      text-sm
                      inline-block
                      font-medium
                    "
                    >
                      Read More →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}