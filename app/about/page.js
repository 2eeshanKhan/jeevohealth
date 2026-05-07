import React from 'react'
import About from '@/components/about'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata  = {
  title: 'Contact Us - Jeevo Health ',
  description: 'Jeevo Health',
  keywords: 'Jeevo Health ',
  openGraph: {
  title: 'Jeevo Health ',
  description:  'Jeevo Health ',
  
  type: 'website',
  },
  

}

const AboutUs = () => {
  return (
    <div>
        <Navbar />
      <About  />
      <Footer />
    </div>
  )
}

export default AboutUs
