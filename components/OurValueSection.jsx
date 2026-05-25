"use client";

import {
  motion,
  useInView,
  animate,
  useMotionValue,
} from "framer-motion";

import Image from "next/image";
import { useRef, useEffect } from "react";

/* -------------------------------
   ORIGINAL ANIMATION
-------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },

  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

/* -------------------------------
   ORIGINAL COUNTER
-------------------------------- */
function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
}) {
  const ref = useRef(null);

  const motionValue = useMotionValue(from);

  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [isInView]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Math.floor(latest).toLocaleString();
      }
    });
  }, []);

  return <span ref={ref}>{from}</span>;
}

/* -------------------------------
   MAIN COMPONENT
-------------------------------- */
export default function OurValueSection() {
  return (
    <section className="bg-[#f7fbfa] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block bg-[#0F766E]/10 text-[#0F766E] px-5 py-2 rounded-full text-sm font-semibold">
            WHY JEEVO HEALTH
          </span>

          {/* SAME HEADING ANIMATION */}
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="
            mt-4
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            text-[#0F1B2B]
            leading-tight
            max-w-2xl
          "
          >
            Experience Trusted Healthcare
            <br />
            With Expert Medical Support.
          </motion.h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Jeevo Health provides expert doctors,
            advanced treatments, and seamless
            healthcare assistance for every patient.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* IMAGE CARD */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="
            relative overflow-hidden
            rounded-2xl shadow-lg group
          "
          >
            <Image
              src="/healthteam.jpeg"
              alt="Healthcare"
              width={500}
              height={350}
              className="
              object-cover w-full h-56
              group-hover:scale-110
              transition-transform duration-500
            "
            />

            {/* ORIGINAL OVERLAY STYLE */}
            <div
              className="
              absolute inset-0
              bg-black/40
              group-hover:bg-black/60
              transition-colors duration-500
              flex flex-col justify-end
              p-6 rounded-2xl
            "
            >
              <h3 className="text-white text-lg font-semibold">
                Personalized Patient Care
              </h3>

              <p className="text-gray-200 text-sm mt-1">
                Dedicated healthcare support from
                consultation to recovery.
              </p>

              <a className="text-orange-300 text-sm mt-2 inline-block hover:underline">
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* CARD 1 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="
            rounded-2xl p-8
            bg-gradient-to-br
            from-[#0F766E]
            to-[#14b8a6]
            text-white
            flex flex-col justify-between
            shadow-md
          "
          >
            <span className="text-sm uppercase tracking-wider">
              Successful Treatments
            </span>

            <h3 className="text-4xl font-bold mt-6">
              <AnimatedCounter
                from={0}
                to={1275}
                duration={2}
              />
              +
            </h3>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="
            rounded-2xl p-8
            bg-gradient-to-br
            from-[#14b8a6]
            to-[#0F766E]
            text-white
            flex flex-col justify-between
            shadow-md
          "
          >
            <span className="text-sm uppercase tracking-wider">
              Happy Patients
            </span>

            <h3 className="text-4xl font-bold mt-6">
              <AnimatedCounter
                from={0}
                to={2756}
                duration={2}
              />
              +
            </h3>
          </motion.div>

          {/* SATISFACTION CARD */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="
            rounded-2xl p-8
            bg-[#0F172A]
            text-white
            flex flex-col justify-between
            shadow-md
          "
          >
            <div className="flex items-center gap-3">

              <div className="flex -space-x-2">
                <Image
                  src="/7.png"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                  alt="user1"
                />

                <Image
                  src="/8.png"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                  alt="user2"
                />

                <Image
                  src="/9.png"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                  alt="user3"
                />
              </div>

              <span className="text-sm">
                98% Satisfaction Rate
              </span>
            </div>

            <h3 className="text-5xl font-bold mt-6 text-orange-300">
              <AnimatedCounter
                from={0}
                to={98}
                duration={2}
              />
              %
            </h3>
          </motion.div>

          {/* LARGE IMAGE CARD */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            className="
            relative overflow-hidden
            rounded-2xl shadow-lg group sm:col-span-2
          "
          >
            <Image
              src="/team.jpg"
              alt="Healthcare Team"
              width={800}
              height={400}
              className="
              object-cover w-full h-56
              group-hover:scale-105
              transform duration-500
            "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}