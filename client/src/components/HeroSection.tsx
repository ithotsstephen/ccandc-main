import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const goToWhatWeDo = () => {
    setLocation('/what-we-do');
  };

  const goToSeeItInAction = () => {
    setLocation('/insights');
  };


  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0b1728]">
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Digital Transformation Through{' '}
            <span className="text-[#2177cd]">World-Class Architecture
</span>
          </h1>
           <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
We're transformation consultants working at the intersection of business strategy, technology and architecture. Our mission is to simplify change and help you realise your vision for the future.          </p>
         
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={goToWhatWeDo}
              className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-explore-services"
            >
              Explore Consulting Services
            </button>
            <button 
              onClick={goToSeeItInAction}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all"
              data-testid="button-view-case-studies"
            >
              Explore Training
            </button>
          </div> */}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>
    </>
  );
}
