


// "use client";
// import { Mail, ChevronRight, Facebook, Twitter, Youtube, Linkedin, Phone } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0A0E19] text-white">
      
//       {/* TOP CTA SECTION */}
//       <div className="relative w-full h-[380px] bg-[url('/cta-bg.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6">
//         <div className="backdrop-blur-sm bg-black/30 p-12 rounded-3xl">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
//             Transform Your Home Into A Smarter Space.
//           </h2>
//           <p className="text-white/70 text-sm mt-3">
//             Unlock advanced automation with Trinetra Smart Solutions
//           </p>

//           <button className="mt-6 px-8 py-4 bg-gradient-to-r from-[#FFC65C] to-[#4465D5] rounded-full font-semibold text-[#0A0E19] flex items-center gap-2 mx-auto">
//             Get Free Consultation <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* FOOTER MAIN */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

//           {/* Logo + Text + Subscribe */}
//           <div>
//             <div className="flex items-center text-3xl font-extrabold tracking-wide">
//               <span>TRI</span><span className="text-[#3592ea]">NET</span><span>RA</span>
//             </div>

//             <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-xs">
//               We provide complete Smart Home & Security Automation solutions
//               designed for comfort, control and peace of mind.
//             </p>

//             {/* Subscribe */}
//             {/* <div className="mt-6 flex bg-white rounded-full overflow-hidden w-full max-w-sm">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 text-black outline-none"
//               />
//               <button className="px-6 bg-gradient-to-r from-[#FFC65C] to-[#4465D5] text-black font-semibold">
//                 Subscribe
//               </button>
//             </div> */}
//             {/* <div className="mt-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 flex items-center">
//   <Mail size={18} className="text-[#FFC65C]" />
//   <input
//     type="email"
//     placeholder="Your Email"
//     className="flex-1 bg-transparent px-3 py-2 outline-none text-sm text-white placeholder-white/50"
//   />
//   <button className="px-6 py-2 bg-gradient-to-r 
//     from-[#FFC65C] to-[#4465D5]
//     rounded-full text-[#0A0E19] text-sm font-semibold
//     hover:brightness-110 transition">
//     Join Us
//   </button>
// </div> */}

// <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1 flex items-center w-full max-w-sm">
//   <Mail size={18} className="text-[#FFC65C] ml-3" />

//   <input
//     type="email"
//     placeholder="Your Email"
//     className="flex-1 bg-transparent px-3 py-3 outline-none text-sm text-white placeholder-white/50"
//   />

//   <button
//     className="px-2 py-2 bg-gradient-to-r from-[#FFC65C] to-[#4465D5]
//     rounded-full text-[#0A0E19] text-sm font-semibold 
//     hover:brightness-110 transition whitespace-nowrap"
//   >
//     Join
//   </button>
// </div>

//             <p className="text-[11px] mt-2 text-white/50">
//               Get updates on latest automation trends
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-3 text-white/70 text-sm">
//               {["Home", "About Us", "Projects", "Contact"].map((item, i) => (
//                 <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
//                   <ChevronRight size={14} /> {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Solutions */}
//           <div>
//             <h3 className="font-semibold mb-4">Our Solutions</h3>
//             <ul className="space-y-3 text-white/70 text-sm">
//               {[
//                 "Sensor Hub(Smart)",
//                 "Red Smart Remote",
//                 "Smoke and gas sensor",
//                 "Climate Control",
//                 "Smart Lock"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
//                   <ChevronRight size={14} /> {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-semibold mb-4">Contact Us</h3>

//             <p className="text-white/70 text-sm max-w-xs leading-relaxed">
//               Trinetra Technoworld Pvt Ltd <br />
//               Plot no 129,3rd lane Darukhana,Mazgaon,Mumbai
//             </p>

//             <div className="mt-4 text-sm space-y-2 text-white/70">
//               <p className="flex gap-2 items-center">
//                 <Phone size={16} /> +91 91062 55483
//               </p>
//               <p className="flex gap-2 items-center">
//                 <Mail size={16} /> support@trinetratechno.world
//               </p>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6">
//               {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer transition"
//                 >
//                   <Icon size={18} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/10 mt-16 mb-6"></div>

//         <p className="text-center text-white/60 text-xs">
//           © {new Date().getFullYear()} Trinetra Technoworld Pvt Ltd - All Rights Reserved | Designed & Developed By : Fuerte Developers

//         </p>
//       </div>
//     </footer>
//   );
// }



"use client";

import {
  Mail,
  ChevronRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      {/* TOP CTA SECTION */}
      <div
        className="
        relative w-full h-[400px]
        bg-[url('/hospital-footer.jpg')]
        bg-cover bg-center
        flex items-center justify-center
        text-center px-6
      "
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0F172A]/70"></div>

        {/* CONTENT */}
        <div
          className="
          relative z-10
          backdrop-blur-sm
          bg-white/5
          border border-white/10
          p-12
          rounded-[32px]
          max-w-3xl
        "
        >
          <h2
            className="
            text-3xl sm:text-4xl lg:text-5xl
            font-bold
            leading-snug
          "
          >
            Ready To Begin Your
            <br />
            Treatment Journey?
          </h2>

          <p className="text-white/70 text-sm mt-4 leading-relaxed">
            Connect with experienced doctors and trusted hospitals
            for safe, stress-free, and advanced healthcare support.
          </p>

          <button
            className="
            mt-7
            px-8 py-4
            bg-gradient-to-r
            from-[#0F766E]
            to-[#14b8a6]
            rounded-full
            font-semibold
            text-white
            flex items-center gap-2
            mx-auto
            hover:scale-105
            transition
          "
          >
            Book Free Consultation
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* FOOTER MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO + ABOUT */}
          <div>

            {/* LOGO */}
            <div className="text-3xl font-extrabold tracking-wide">
              <span className="text-white">JEEVO</span>
              <span className="text-[#14b8a6]"> HEALTH</span>
            </div>

            {/* ABOUT */}
            <p
              className="
              text-white/70
              text-sm
              mt-4
              leading-relaxed
              max-w-xs
            "
            >
              Jeevo Health provides expert healthcare support,
              connecting patients with experienced doctors,
              trusted hospitals, and advanced treatments.
            </p>

            {/* EMAIL BOX */}
            <div
           className="
  mt-6
  bg-white/10
  backdrop-blur-md
  border border-white/20
  rounded-full
  pl-4 pr-2 py-2
  flex items-center
  w-full max-w-sm
  overflow-hidden
"
            >
              <Mail
                size={18}
                className="text-[#14b8a6] ml-3"
              />

             <input
  type="email"
  placeholder="Your Email"
  className="
  flex-1
  min-w-0
  bg-transparent
  px-3
  py-2
  outline-none
  text-sm
  text-white
  placeholder-white/50
"
/>

             <button
  className="
  shrink-0
  px-5 py-2.5
  bg-gradient-to-r
  from-[#0F766E]
  to-[#14b8a6]
  rounded-full
  text-white
  text-sm
  font-semibold
  hover:brightness-110
  transition
  whitespace-nowrap
"
>
  Subscribe
</button>
            </div>

            <p className="text-[11px] mt-2 text-white/50">
              Get updates on healthcare tips and treatments
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/70 text-sm">

              {[
                "Home",
                "About Us",
                "Doctors",
                "Hospitals",
                "Treatments",
              ].map((item, i) => (
                <li
                  key={i}
                  className="
                  flex items-center gap-2
                  hover:text-white
                  cursor-pointer
                  transition
                "
                >
                  <ChevronRight size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* TREATMENTS */}
          <div>

            <h3 className="font-semibold mb-4">
              Popular Treatments
            </h3>

            <ul className="space-y-3 text-white/70 text-sm">

              {[
                "LASIK Eye Surgery",
                "Kidney Stone Treatment",
                "Bariatric Surgery",
                "Orthopedic Care",
                "General Surgery",
              ].map((item, i) => (
                <li
                  key={i}
                  className="
                  flex items-center gap-2
                  hover:text-white
                  cursor-pointer
                  transition
                "
                >
                  <ChevronRight size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-semibold mb-4">
              Contact Us
            </h3>

            <p
              className="
              text-white/70
              text-sm
              max-w-xs
              leading-relaxed
            "
            >
              Jeevo Health Pvt Ltd <br />
              Delhi NCR, India
            </p>

            {/* CONTACT INFO */}
            <div
              className="
              mt-4
              text-sm
              space-y-3
              text-white/70
            "
            >

              <p className="flex gap-2 items-center">
                <Phone size={16} />
                +91 9876543210
              </p>

              <p className="flex gap-2 items-center">
                <Mail size={16} />
                support@jeevohealth.com
              </p>

              <p className="flex gap-2 items-center">
                <MapPin size={16} />
                Delhi NCR
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">

              {[
                Facebook,
                Twitter,
                Youtube,
                Linkedin,
              ].map((Icon, i) => (
                <div
                  key={i}
                  className="
                  w-9 h-9
                  bg-white/10
                  flex items-center justify-center
                  rounded-full
                  hover:bg-[#0F766E]
                  cursor-pointer
                  transition
                "
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mt-16 mb-6"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-white/60 text-xs">
          © {new Date().getFullYear()} Jeevo Health —
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
