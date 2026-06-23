"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  
  { label: "Doctors", href: "/find-doctor" },
  { label: "Hospitals", href: "/find-hospital" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* TOP STRIP */}
      <div className="hidden lg:block bg-[#0F766E] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-between">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 8182837993</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Delhi NCR</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/90">
            <span>24x7 Patient Support</span>
            <span>1000+ Successful Surgeries</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      {/* <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100"> */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex items-center justify-between h-[85px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/img4.png"
                  alt="Jeevo Health"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-[#0F766E] leading-none">
                  Jeevo Health
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  Trusted Surgical Care
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">

              {/* NAV ITEMS */}
              <ul className="flex items-center gap-8 text-gray-700 font-medium">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative group"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 hover:text-[#0F766E] transition"
                    >
                      {item.label}

                      <ChevronDown
                        size={15}
                        className="opacity-50"
                      />
                    </Link>

                    {/* UNDERLINE */}
                    <span className="absolute left-0 -bottom-[31px] h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0F766E] hover:bg-[#0c615a] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
              >
                Book Consultation
              </motion.button>
            </div>

            {/* MOBILE MENU */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu
                size={30}
                className="text-[#0F766E]"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl p-6"
            >
              <div className="flex items-center justify-between border-b pb-5">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F766E]">
                    Jeevo Health
                  </h2>

                  <p className="text-sm text-gray-500">
                    Trusted Surgical Care
                  </p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              {/* LINKS */}
              <div className="mt-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-[#0F766E]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-10 w-full bg-[#0F766E] hover:bg-[#0c615a] text-white py-4 rounded-xl font-semibold">
                Book Free Consultation
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}