import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tension from '@/components/Tension';
import Services from '@/components/Services';
import Process from '@/components/Process';
import SocialProof from '@/components/SocialProof';
import About from '@/components/About';
import ServiceArea from '@/components/ServiceArea';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <main>
        <Hero />
        <Tension />
        <Services />
        <Process />
        <SocialProof />
        <About />
        <ServiceArea />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
