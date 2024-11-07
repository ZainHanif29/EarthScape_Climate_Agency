import React from 'react'
import Header from './components/main_layout/common/Header'
import Footer from './components/main_layout/common/Footer'
import HeroSection from './components/main_layout/Home/Hero'
import FeaturesSection from './components/main_layout/Home/Feature'
import AboutSection from './components/main_layout/Home/About'
import TestimonialsSection from './components/main_layout/Home/Testimonial'
import CTASection from './components/main_layout/Home/CTASection'
import StatsCounter from './components/main_layout/Home/StatsCounter'

const MainLayout = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <StatsCounter />
    <FeaturesSection />
    <AboutSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
    </>
  )
}

export default MainLayout