"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function DiscoverBlog() {

  const blogs = [
    {
      id: 1,
      title: "LASIK Recovery Timeline: What Happens After Surgery?",
      date: "April 30, 2025",
      image: "/lasiksurgerytimelin.jpeg",
      href: "/blog/lasik-recovery",
    },

    {
      id: 2,
      title: "Kidney Stone Symptoms You Should Never Ignore",
      date: "April 30, 2025",
      image: "/kidneysymptom.jpeg",
      href: "/blog/kidney-stone-symptoms",
    },

    {
      id: 3,
      title: "Bariatric Surgery Benefits For Long-Term Health",
      date: "April 30, 2025",
      image: "/bariaticsurger.jpeg",
      href: "/blog/bariatric-benefits",
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
              SPECIALIZED HEALTH BLOGS
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
              Expert Insights On
              <br />
              LASIK, Kidney &
              Bariatric Care.
            </motion.h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-sm">

            <p className="text-gray-600 text-sm leading-relaxed">
              Explore treatment guides, surgery preparation,
              recovery tips, and expert healthcare advice
              from Jeevo Health specialists.
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

            {/* TOP CARD */}
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
                src="/lasiksurgerytimelin.jpeg"
                alt="LASIK Surgery"
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
                LASIK CARE
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">

                <h3 className="text-2xl font-bold max-w-md leading-snug">
                  Clear Vision Starts With
                  Advanced LASIK Treatment
                </h3>

                <p className="text-sm text-white/80 mt-2">
                  Safer procedures. Faster recovery.
                  Better lifestyle.
                </p>
              </div>
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
                src="/advanc.jpeg"
                alt="Kidney & Bariatric Care"
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
                  Advanced Kidney Stone &
                  <br />
                  Bariatric Surgery Care
                </h3>

                <p className="text-white/80 text-sm mt-4 max-w-lg">
                  Discover minimally invasive procedures,
                  expert surgeons, and faster recovery
                  solutions with Jeevo Health.
                </p>

                <Link href="/blog/advanced-surgical-care">

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
                  bg-white
                  p-4
                  rounded-2xl
                  shadow-sm
                  border border-[#e6f4f1]
                "
                >

                  {/* IMAGE */}
                  <div
                    className="
                    relative w-[110px] h-[110px]
                    rounded-xl overflow-hidden
                    shrink-0
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
                      text-[#0F766E]
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