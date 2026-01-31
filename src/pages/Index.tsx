import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ChatDemo from '@/components/ChatDemoWhoopsie';
import RoadmapSection from '@/components/RoadmapSection';
import TeamSection from '@/components/TeamSection';
import FinancialsSection from '@/components/FinancialsSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Luka | AI-First Insurance</title>
        <meta name="description" content="Luka is building the leanest, fastest, and fairest insurance company in the world — powered entirely by artificial intelligence." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ChatDemo />
          <RoadmapSection />
          <TeamSection />
          <FinancialsSection />
          <WhyInvestSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
