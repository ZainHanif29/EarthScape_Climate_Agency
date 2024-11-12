import React, { useEffect } from 'react'
import AboutSection from '@/components/main_layout/Home/About'
import CTASection from '@/components/main_layout/Home/CTASection'
import FeaturesSection from '@/components/main_layout/Home/Feature'
import HeroSection from '@/components/main_layout/Home/Hero'
import StatsCounter from '@/components/main_layout/Home/StatsCounter'
import TestimonialsSection from '@/components/main_layout/Home/Testimonial'
import axios from 'axios'

const HomePage = () => {

  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("http://localhost:8000/api/data/getALLData");
      console.log(data);
    };
    getdata();
  });

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