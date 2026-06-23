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