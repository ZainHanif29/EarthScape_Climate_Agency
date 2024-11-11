import ContactForm from '@/components/main_layout/Contact/ContactForm'
import ContactHero from '@/components/main_layout/Contact/ContactHero'
import ContactInfo from '@/components/main_layout/Contact/ContactInfo'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <ContactHero />
    <ContactInfo />
    <ContactForm />
    </>
  )
}

export default ContactPage