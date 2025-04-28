import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import CoursesOverview from '../components/Home/CoursesOverview';
import BenefitsSection from '../components/Home/BenefitsSection';
import PartnersSection from '../components/Home/PartnersSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import ContactSection from '../components/Home/ContactSession';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesOverview />
      <BenefitsSection />
      <PartnersSection /> 
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
