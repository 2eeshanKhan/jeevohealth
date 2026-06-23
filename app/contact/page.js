import React from 'react'
import Contact from '@/components/contact'
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
   
       <Contact />
      
    </div>
  )
}

export default AboutUs
