import React from 'react'
import AboutSection from '@/components/main_layout/Home/About'
import CTASection from '@/components/main_layout/Home/CTASection'
import FeaturesSection from '@/components/main_layout/Home/Feature'
import HeroSection from '@/components/main_layout/Home/Hero'
import StatsCounter from '@/components/main_layout/Home/StatsCounter'
import TestimonialsSection from '@/components/main_layout/Home/Testimonial'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <StatsCounter />
    <FeaturesSection />
    <AboutSection />
    <TestimonialsSection />
    <CTASection />
    </>
  )
}

export default HomePage