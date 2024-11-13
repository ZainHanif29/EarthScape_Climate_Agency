import CoreValuesSection from '@/components/main_layout/About/CoreValuesSection'
import HeroSection from '@/components/main_layout/About/HeroSection'
import TeamSection from '@/components/main_layout/About/TeamSection'
import AboutSection from '@/components/main_layout/Home/About'
import CTASection from '@/components/main_layout/Home/CTASection'
import React from 'react'

const AboutPage = () => {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <CoreValuesSection />
    {/* <TeamSection /> */}
    <CTASection />
    </>
  )
}

export default AboutPage