// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Jeevo Health",
//   description:
//     "Jeevo Health",
//   metadataBase: new URL("http://jeevohealth.com/"),
//   keywords: [
//     "Lasik",
//     "Bariatic Surgery",
//     "Best Kidney Transplant",
//     "Jeevo",
//     "Best Eye Surgery in Mumbai",
//     "Best Eye Surgery in Delhi"
   
//   ],

//   openGraph: {
//     title: "Jeevo Health",
//     description:
//       "Jeevo Health",
//     url: "http://jeevohealth.com/",
//     siteName: "Jeevo Health",
//     images: [
//       {
//         url: "/img4.png", // Replace with your actual OG banner
//         width: 1200,
//         height: 630,
//         alt: "Jeevo Health",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Jeevo Health",
//     description:
//       "Jeevo Health",
//     images: ["/img4.png"],
//   },

//   icons: {
//     icon: "/favicon.ico",
//   },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeevo Health",
  description: "Jeevo Health",
  metadataBase: new URL("https://jeevohealth.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}