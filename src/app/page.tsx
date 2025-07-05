
'use client'
import HeroSec from "./components/HeroSec"
import AboutSec from "./components/AboutSec"
import ServicesSec from "./components/ServicesSec"
import FAQSec from "./components/FAQSec"
import ContactForm from "./components/ContactForm"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import AvailabilitySection from "./components/Avalability"

export default function Home() {
  return (
    <>
    
    <Navbar/>
     <HeroSec/>
     <AboutSec/>
     <ServicesSec/>
     <AvailabilitySection/>
     <ContactForm/>
     <FAQSec/>
     <Footer/>
    </>
  )
}




