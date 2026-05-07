// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronDown, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import useScrollHeader from "@/hooks/useScrollHeader";

// const navItems = [
//   { label: "Home", href: "/" },
//   {
//     label: "Hospitals",
  
//     href: "/about"
//   },
//   { label: "Doctors", href: "/doctors" },
//   { label: "About Us", href: "/aboutUs" },
//   { label: "Contact Us", href: "/contactUs" },
// ];

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { hidden, solid } = useScrollHeader();

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [mobileOpen]);

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-500
//       ${hidden ? "-translate-y-full" : "translate-y-0"}
//       ${solid ? "bg-white shadow-lg" : "bg-transparent"}
//     `}
//     >
//       <div className="flex items-center justify-between px-6 md:px-10 py-4">

//         {/* LOGO (Responsive) */}
//        <Link href="/" className="flex items-center">
//   <div className="relative w-36 h-14 sm:w-48 sm:h-20 md:w-60 md:h-24 lg:w-24 lg:h-24">
//     <Image
//       src={solid ? "/img4.png" : "/img4.png"}
//       alt="JeevoHealth"
//       fill
//       className="object-contain transition-opacity duration-300"
//       priority
//     />
//   </div>
// </Link>


//         {/* DESKTOP MENU */}
//         <ul
//           className={`hidden lg:flex items-center gap-10 font-medium transition-colors duration-300
//           ${solid ? "text-gray-900" : "text-white"}
//         `}
//         >
//           {navItems.map((item) => {
//   const isActive = activeMenu === item.label;

//   return (
//     <li
//       key={item.label}
//       className="relative"
//       onMouseEnter={() => setActiveMenu(item.label)}
//       onMouseLeave={() => setActiveMenu(null)}
//     >
//       {/* 🔗 NAVIGATION LINK */}
//       <Link
//         href={item.href}
//         className="flex items-center gap-1 cursor-pointer hover:text-[#3592ea]"
//       >
//         {item.label}
//         {item.submenu && <ChevronDown size={14} />}
//       </Link>

//       {/* UNDERLINE */}
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: isActive ? 1 : 0 }}
//         transition={{ duration: 0.25 }}
//         className="absolute -bottom-2 left-0 right-0 h-[3px] mx-auto rounded-lg"
//         style={{
//           backgroundColor: "#3592ea",
//           width: "80%",
//           transformOrigin: "center",
//         }}
//       />

//       {/* DROPDOWN */}
//       {item.submenu && (
//         <AnimatePresence>
//           {isActive && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               transition={{ duration: 0.25 }}
//               className="absolute top-full left-0 mt-4 bg-white min-w-[230px] shadow-lg rounded-md overflow-hidden z-50"
//             >
//               {item.submenu.map((sub) => (
//                 <Link key={sub.label} href={sub.href}>
//                   <div className="px-5 py-3 text-sm text-black font-medium hover:bg-[#3592ea] hover:text-white transition-colors">
//                     {sub.label}
//                   </div>
//                 </Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       )}
//     </li>
//   );
// })}

//         </ul>

//         {/* 🔍 SEARCH ICON WITH ANIMATION */}
//         <motion.div
//           whileHover={{ scale: 1.25 }}
//           whileTap={{ scale: 0.95 }}
//           animate={{
//             boxShadow: [
//               "0 0 0px rgba(53,146,234,0.0)",
//               "0 0 12px rgba(53,146,234,0.6)",
//               "0 0 0px rgba(53,146,234,0.0)",
//             ],
//           }}
//           transition={{ duration: 1.8, repeat: Infinity }}
//           className="hidden lg:flex items-center justify-center cursor-pointer p-3 rounded-full"
//         >
//           <Search
//             size={24}
//             className={`${solid ? "text-gray-900" : "text-white"}`}
//           />
//         </motion.div>

//         {/* MOBILE MENU BUTTON */}
//         <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
//           <Menu size={26} className={`${solid ? "text-black" : "text-white"}`} />
//         </button>
//       </div>

//       {/* MOBILE DRAWER */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setMobileOpen(false)}
//             />

//             <motion.aside
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl"
//             >
//               <div className="flex justify-between items-center p-4 border-b">
//                 <span className="font-semibold text-gray-800">Menu</span>
//                 <button onClick={() => setMobileOpen(false)}>
//                   <X />
//                 </button>
//               </div>

//               <ul className="p-4 space-y-3">
//                 {navItems.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       href={item.href || "#"}
//                       className="block py-2 text-gray-800 font-medium"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import {
//   Menu,
//   X,
//   Phone,
//   MapPin,
//   ChevronDown,
// } from "lucide-react";

// import { AnimatePresence, motion } from "framer-motion";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Treatments", href: "/treatments" },
//   { label: "Doctors", href: "/doctors" },
//   { label: "Hospitals", href: "/hospitals" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* TOP STRIP */}
//       <div className="hidden lg:block bg-[#0F766E] text-white text-sm">
//         <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-between">

//           {/* LEFT */}
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone size={15} />
//               <span>+91 9876543210</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <MapPin size={15} />
//               <span>Delhi NCR</span>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-6 text-white/90">
//             <span>24x7 Patient Support</span>
//             <span>1000+ Successful Surgeries</span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <header className="fixed top-0 lg:top-[36px] left-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
//           <div className="bg-white/90 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl px-6 py-4 flex items-center justify-between">

//             {/* LOGO */}
//             <Link href="/" className="flex items-center gap-3">
//               <div className="relative w-12 h-12 lg:w-14 lg:h-14">
//                 <Image
//                   src="/img4.png"
//                   alt="Jeevo Health"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>

//               <div>
//                 <h1 className="text-xl font-bold text-[#0F766E] leading-none">
//                   Jeevo Health
//                 </h1>

//                 <p className="text-xs text-gray-500 mt-1">
//                   Trusted Surgical Care
//                 </p>
//               </div>
//             </Link>

//             {/* DESKTOP MENU */}
//             <div className="hidden lg:flex items-center gap-10">

//               {/* NAV LINKS */}
//               <ul className="flex items-center gap-8 text-gray-700 font-medium">
//                 {navItems.map((item) => (
//                   <li
//                     key={item.label}
//                     className="relative group"
//                   >
//                     <Link
//                       href={item.href}
//                       className="flex items-center gap-1 hover:text-[#0F766E] transition"
//                     >
//                       {item.label}

//                       <ChevronDown
//                         size={15}
//                         className="opacity-60"
//                       />
//                     </Link>

//                     {/* ANIMATED UNDERLINE */}
//                     <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full rounded-full" />
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA BUTTON */}
//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 whileTap={{
//                   scale: 0.96,
//                 }}
//                 className="bg-[#0F766E] hover:bg-[#0b5f58] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300"
//               >
//                 Book Consultation
//               </motion.button>
//             </div>

//             {/* MOBILE BUTTON */}
//             <button
//               className="lg:hidden"
//               onClick={() => setMobileOpen(true)}
//             >
//               <Menu
//                 size={30}
//                 className="text-[#0F766E]"
//               />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             {/* OVERLAY */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setMobileOpen(false)}
//             />

//             {/* SIDEBAR */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.3 }}
//               className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl p-6"
//             >
//               {/* TOP */}
//               <div className="flex items-center justify-between border-b pb-5">
//                 <div>
//                   <h2 className="text-2xl font-bold text-[#0F766E]">
//                     Jeevo Health
//                   </h2>

//                   <p className="text-sm text-gray-500">
//                     Trusted Surgical Care
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   <X size={28} />
//                 </button>
//               </div>

//               {/* MENU ITEMS */}
//               <div className="mt-8 flex flex-col gap-6">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-lg font-medium text-gray-700 hover:text-[#0F766E]"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>

//               {/* CTA */}
//               <button className="mt-10 w-full bg-[#0F766E] hover:bg-[#0b5f58] text-white py-4 rounded-2xl font-semibold shadow-lg transition">
//                 Book Free Consultation
//               </button>

//               {/* ACCENT BOX */}
//               <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-4">
//                 <p className="text-orange-600 text-sm font-medium">
//                   🔥 Free consultation available today
//                 </p>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






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
  { label: "Treatments", href: "/treatments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
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
              <span>+91 9876543210</span>
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
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
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