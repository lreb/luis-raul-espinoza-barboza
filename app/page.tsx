import dynamic from 'next/dynamic';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
