import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TrainingHeroBackdrop from "@/components/TrainingHeroBackdrop";

type TrainingProps = {
  heroBadge?: string;
  heroTitle?: ReactNode;
  documentTitle?: string;
  heroBackgroundClassName?: string;
  heroAccentClassName?: string;
};

export default function Training({
  heroBadge = "Training",
  heroTitle = <>From Framework to <span className="text-[#8fc7ff]">Fluency</span></>,
  documentTitle = "ArchIQ Training Platform - BIAN, TOGAF & IT4IT Mastery | CC&C Solutions",
  heroBackgroundClassName,
  heroAccentClassName,
}: TrainingProps) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = documentTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ArchIQ delivers expert-led training on BIAN, TOGAF, and IT4IT frameworks. Cloud-based platform offering scalable, cost-effective architecture training for enterprises and individuals.");
    }
    
    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'ArchIQ Training Platform - BIAN, TOGAF & IT4IT Mastery');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Expert-powered learning platform for BIAN, TOGAF, and IT4IT training. Scalable, practical architecture training with real-world insights.');
    
    // JSON-LD Structured Data
    let jsonLdScript = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://ccandcsolutions.com/ccandc-training#localbusiness",
            "name": "CCandC Solutions",
            "url": "https://ccandcsolutions.com/ccandc-training",
            "image": "https://ccandcsolutions.com/assets/Images/CC&CLogo.png",
            "logo": "https://ccandcsolutions.com/assets/Images/CC&CLogo.png",
            "telephone": "+61 2 8448 2000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Zenith, Tower A, L9/821 Pacific Hwy",
              "addressLocality": "Chatswood",
              "addressRegion": "NSW",
              "postalCode": "2067",
              "addressCountry": "AU"
            },
            "sameAs": [
              "https://www.linkedin.com/company/ccandcsolutions/",
              "https://x.com/ccandcsolutions",
              "https://www.youtube.com/@ccandcsolutions576"
            ]
          },
          {
            "@type": "Organization",
            "@id": "https://ccandcsolutions.com/ccandc-training#organization",
            "name": "CCandC Solutions",
            "url": "https://ccandcsolutions.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ccandcsolutions.com/assets/Images/CC&CLogo.png"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+61 2 8448 2000",
              "contactType": "customer support",
              "areaServed": "AU",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.linkedin.com/company/ccandcsolutions/",
              "https://x.com/ccandcsolutions",
              "https://www.youtube.com/@ccandcsolutions576"
            ]
          },
          {
            "@type": "Service",
            "@id": "https://ccandcsolutions.com/ccandc-training#service",
            "name": "CCandC Training Services",
            "serviceType": "Professional Training and Consulting Services",
            "url": "https://ccandcsolutions.com/ccandc-training",
            "provider": {
              "@id": "https://ccandcsolutions.com/ccandc-training#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://ccandcsolutions.com/ccandc-training#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ccandcsolutions.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "CCandC Training",
                "item": "https://ccandcsolutions.com/ccandc-training"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://ccandcsolutions.com/#website",
            "url": "https://ccandcsolutions.com/",
            "name": "CCandC Solutions",
            "publisher": {
              "@id": "https://ccandcsolutions.com/ccandc-training#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ccandcsolutions.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      });
      document.head.appendChild(jsonLdScript);
    }
    
    return () => {
      document.title = "CC&C Solutions";
      if (metaDescription) {
        metaDescription.setAttribute("content", "CC&C Solutions - Enterprise Architecture & Digital Transformation");
      }
      if (ogTitle) ogTitle.remove();
      if (ogDescription) ogDescription.remove();
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [documentTitle]);

  return (
    <div className={`min-h-screen bg-background ${heroBadge === "Training" ? "training-landing" : ""}`}>
      <Navigation />
      {/* Hero Section */}
      {heroBadge === "Training" ? (
        <section className="relative overflow-hidden bg-[#0b1728] text-white">
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_48%,rgba(143,199,255,0.16),transparent_32%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]" aria-hidden="true">
            <div className="absolute -right-24 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/20" />
            <div className="hero-drift-slow absolute -right-2 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/25" />
            <div className="absolute right-[11%] top-1/2 h-[230px] w-[230px] -translate-y-1/2 rounded-full border border-[#e5bc68]/40" />
            <div className="absolute right-[11%] top-1/2 h-px w-[230px] bg-[#e5bc68]/45" />
            <div className="absolute right-[calc(11%+115px)] top-[calc(50%-115px)] h-[230px] w-px bg-[#e5bc68]/35" />
            <div className="absolute inset-y-0 right-0 w-[58%] opacity-45 [background-image:linear-gradient(rgba(143,199,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" />
            <div className="hero-drift-slow absolute right-0 top-[22%] h-px w-[52%] bg-gradient-to-l from-transparent via-[#8fc7ff]/60 to-transparent" />
            <div className="hero-drift-slow absolute right-0 top-[74%] h-px w-[45%] bg-gradient-to-l from-transparent via-[#e5bc68]/45 to-transparent" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-36">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">Expert-led architecture training</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{heroTitle}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">Expert-powered learning in BIAN, TOGAF, IT4IT and enterprise architecture, shaped by practitioners applying these frameworks in real transformation programmes.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#training-programs" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Explore training <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                <a href="/training/all-courses" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">View all courses</a>
              </div>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center border border-white/25 bg-white/5 p-8" aria-label="Architecture training pathways">
              <div className="absolute left-1/2 top-10 bottom-10 w-px bg-[#8fc7ff]/40" aria-hidden="true" />
              <div className="relative w-full max-w-sm space-y-4 text-center">
                <div className="border border-[#8fc7ff]/40 bg-[#0b1728]/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">Banking architecture</p><p className="mt-2 text-xl font-bold">BIAN</p><p className="mt-1 text-sm text-white/65">From foundation to applied practice</p></div>
                <div className="grid grid-cols-2 gap-3"><div className="border border-[#e5bc68]/50 bg-[#0b1728]/90 p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e5bc68]">Enterprise method</p><p className="mt-2 font-bold">TOGAF®</p></div><div className="border border-[#8fc7ff]/40 bg-[#0b1728]/90 p-4"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8fc7ff]">IT value chain</p><p className="mt-2 font-bold">IT4IT™</p></div></div>
                <div className="border border-white/25 bg-[#0b1728]/90 p-4 text-sm font-semibold">Practitioner-led learning · Real-world application</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <TrainingHeroBackdrop className="pt-24 pb-16" backgroundClassName={heroBackgroundClassName} accentClassName={heroAccentClassName}>
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 md:px-8 md:py-4 bg-white/20 border-2 border-white/40 rounded-full text-white font-bold text-2xl md:text-3xl mb-8 shadow-lg">{heroBadge}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{heroTitle}</h1>
            <p className="text-3xl md:text-4xl font-semibold text-white max-w-4xl mx-auto mb-6">BIAN Mastery, On Demand</p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">Expert-powered learning platform delivering practical architecture training with real-world insight</p>
          </div>
        </TrainingHeroBackdrop>
      )}
   
      {/* Training Built for Your Enterprise */}
      <section id="training-programs" className="py-20 bg-[#f5f8fc] dark:bg-[#101923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Training Built for Your Enterprise on the World's Leading Architecture Frameworks
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The ArchIQ platform delivers training on leading architecture frameworks and standards including BIAN, 
              tailored to your business needs through the power of AI and our subject matter experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Distributed Teams */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-users text-2xl text-primary-foreground"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Distributed Teams</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ArchIQ is always-on, mobile-friendly and SSO/LMS-integrated, supporting micro-learning, spaced repetition and offline access, 
                  so global teams progress consistently without scheduling friction or travel.
                </p>
              </CardContent>
            </Card>

            {/* Role Relevance */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-tag text-2xl text-accent-foreground"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Role Relevance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Role-based paths focus learning on what each role must know and produce including enterprise architects, solution designers, 
                  developers, data teams, product owners, and more.
                </p>
              </CardContent>
            </Card>

            {/* Industry Experts */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-user-graduate text-2xl text-secondary-foreground"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Industry Experts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optional 'ask-an-architect' clinics, office hours and case reviews connect learners with practitioners from successful 
                  BIAN engagements—unlocking design decisions and pragmatic trade-offs.
                </p>
              </CardContent>
            </Card>

            {/* Sustainability */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-sync-alt text-2xl text-gray-900"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Annual access with update releases keeps material aligned to current BIAN guidance and internal standards, while onboarding 
                  tracks compress time-to-competence for joiners, contractors and partners.
                </p>
              </CardContent>
            </Card>

            {/* Organizational Context */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-[#8fc7ff]">
                  <i className="fas fa-sitemap text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Organizational Context</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ArchIQ embeds your strategy, architecture principles, toolchain and exemplar projects into scenarios and assessments, 
                  so learners connect BIAN concepts to your delivery model.
                </p>
              </CardContent>
            </Card>

            {/* Target Audiences */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-[#e5bc68]">
                  <i className="fas fa-building text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Who We Serve</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Banks • Credit Unions • Product Vendors • System Integrators • Consultancies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Training Deepened by Expertise */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Training Deepened by Expertise
            </h2>
            <p className="text-2xl text-muted-foreground mb-4">
              We're Not Just Educators — We're Architects Advancing the Practice Itself
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our training is built on real-world experience, drawn from our deep work with clients advancing complex 
              architecture and powering digital transformation through world-class design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* BIAN */}
            <Card className="premium-card h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                {/* <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/Training BIAN.png"
                    alt="BIAN Training"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="image-training-bian"
                  />
                </div> */}

  <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/BIAN_Foundation.png"
                    alt="BIAN Foundation"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="BIAN Foundation"
                  />
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-4">BIAN Training</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CC&C Solutions, honored with the Banking Industry Architecture Network (BIAN) 2024 & 2025 "Best-in-Class Partner" award, 
                    stands out not just as a trainer but as a trusted authority.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We deliver BIAN®-based solutions and training grounded in real-world architecture transformations. The insights gained 
                    from this hands-on experience are continually brought back into our programs, deepening understanding and ensuring every 
                    session reflects the latest knowledge, case studies, and opportunities.
                  </p>
                  {/* <a 
                    href="bian-training"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group"
                    data-testid="link-bian-training"
                  >
                    Learn More 
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </a> */}

  <button
                      onClick={() => setLocation('bian-training')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-togaf-practitioner"
                    >
                      Learn more
                    </button>



                </div>
              </CardContent>
            </Card>


               {/* TOGAF */}
            <Card className="premium-card h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/Training TOGAF.png"
                    alt="TOGAF Training"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="image-training-togaf"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">TOGAF® EA Practitioner Certification Training</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Master enterprise architecture with TOGAF® certification. Our experts apply the framework daily in large-scale transformations, bringing real-world relevance and practical experience to every training module.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setLocation('/training/togaf-practitioner')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-togaf-practitioner"
                    >
                      Learn more
                    </button>
                    {/* <button
                      onClick={() => setLocation('/training/togaf-9-certified')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-togaf-9-certified"
                    >
                      TOGAF 9 Certified
                    </button>
                    <button
                      onClick={() => setLocation('/training/togaf-business-architecture')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-togaf-business-architecture"
                    >TOGAF Business Architecture (Level 1)</button> */}
                  </div>
                </div>
              </CardContent>
            </Card>

     

           {/* Foundation Training */}
            <Card className="premium-card h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                {/* <div className="h-64 mb-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <i className="fas fa-graduation-cap text-8xl text-primary/40"></i>
                </div> */}
                 <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/BANK_ARCHITECURE.jpg"
                    alt="BIAN Foundation"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="BIAN Foundation"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4"> Architecture Foundations</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Build your architecture career with our comprehensive foundation training programs. 
                    From core architectural concepts to specialized modeling techniques, we provide the 
                    essential skills needed to excel in modern enterprise architecture.
                  </p>
                  <div className="space-y-3">
                    {/* <button
                      onClick={() => setLocation('/training/architecting-the-ai-powered-bank')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-architecting-ai-powered-bank"
                    >
                      Architecting the AI-Powered Bank
                    </button> */}
                    <button
                      onClick={() => setLocation('/training/architecture-foundations')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-architecture-foundations"
                    >
Learn more                    </button>
                    {/* <button
                      onClick={() => setLocation('/training/archimate')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-archimate"
                    >
                      ArchiMate 3
                    </button> */}
                  
                  </div>
                </div>
              </CardContent>
            </Card>


 {/* Archimate Training */}
            <Card className="premium-card h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/Archimate3.png"
                    alt="Archimate3"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="Archimate3"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">ArchiMate®3 Practitioner Training</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                                       ArchiMate®3 Training is a structured course that teaches you how to model, visualize, and analyse enterprise architectures using The Open Group’s ArchiMate 3.2 standard, and prepares you for the ArchiMate 3 Foundation and Practitioner certifications.

                  </p>
                    <div className="space-y-3">
                   
                    <button
                      onClick={() => setLocation('/training/archimate')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-archimate"
                    >
                      Learn more
                    </button>
                  
                  </div>
                 
                 
                </div>
              </CardContent>
            </Card>


       {/* IT4IT */}
            <Card className="premium-card h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/Training IT4IT.png"
                    alt="IT4IT Training"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="image-training-it4it"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">IT4IT™ Foundation Certification Training</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At CC&C Solutions, our IT4IT™ training is led by architects who apply this value-chain reference architecture 
                    every day — not only teaching the standard, but embedding it in real enterprise transformations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our courses go beyond theory, delivering hands-on experience in how IT must operate as a business, driving 
                    efficiency, alignment and competitive advantage.
                  </p>


 <button
                    onClick={() => setLocation('training/it4it-foundation')}
                    className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                    data-testid="button-training-architecting-ai-powered-bank-card"
                  >
                    Learn More
                  </button>



                  {/* <a 
                    href="training/it4it-foundation"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors group"
                    data-testid="link-it4it-foundation"
                  >
                    Learn More 
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </a> */}
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="h-64 mb-6 flex items-center justify-center">
                  <img
                    src="/assets/Images/ai powered banking.jpg"
                    alt="Architecting the AI-Powered Bank"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="image-training-ai-powered-bank"
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Architecting the AI-Powered Bank</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
Every bank has an AI strategy. But many struggle to achieve scale and hard benefit from it. This intensive 2-day programme reveals what the world's most successful banks built before they built AI — and gives your team the frameworks, evidence, and practical tools to do the same.                  </p>
                  <button
                    onClick={() => setLocation('/training/architecting-the-ai-powered-bank')}
                    className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                    data-testid="button-training-architecting-ai-powered-bank-card"
                  >
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Archimate Training
            <Card className="premium-card h-full flex flex-col">
                              <div className="h-64 mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/Images/Archimate3.png"
                    alt="IT4IT Training"
                    className="w-full h-full object-contain rounded-lg"
                    data-testid="image-training-it4it"
                  />
                </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="h-64 mb-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <i className="fas fa-graduation-cap text-8xl text-primary/40"></i>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">ArchiMate®3 Training</h3>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    ArchiMate®3 Training is a structured course that teaches you how to model, visualize, and analyse enterprise architectures using The Open Group’s ArchiMate 3.2 standard, and prepares you for the ArchiMate 3 Foundation and Practitioner certifications.
                  </p>
                  <div className="space-y-3">
                   
                    <button
                      onClick={() => setLocation('/training/archimate')}
                      className="w-full premium-button px-4 py-3 rounded-lg font-semibold text-sm transition-all transform hover:scale-105"
                      data-testid="button-archimate"
                    >
                      ArchiMate 3
                    </button>
                  
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Learnworld Link */}
          <div className="mt-16">
            <a 
               href="https://ccandc-academy.learnworlds.com" 
             
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-all duration-300 hover:scale-105"
              data-testid="link-learnworld"
            >
              <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-2xl shadow-xl">
                <img 
                  src="/assets/Images/LeadLearnTransform.jpeg"
                  alt="Learn Lead Transform - CC&C Academy"
                  className="w-full h-auto"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>
            </a>
          </div>
        </div>
      </section>


  {/* What the ArchIQ Platform Offers */}
    <section className="py-20 bg-[#f5f8fc] dark:bg-[#101923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What the ArchIQ Platform Offers</h2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-primary">01</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      Expert-Powered Learning, Tailored for Your Business
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Delivers customised training journeys built around the industry-leading architecture frameworks and standards 
                      your organisation relies on — providing high-quality, targeted learning supported by up-to-date materials that 
                      reinforce key concepts and stay relevant in an ever-changing technological landscape, all powered by our industry experts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-accent">02</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      Practical Architecture Training with Real-World Insight
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Delivers immersive learning experiences through high-quality modules, real-world case studies, and interactive content — 
                      providing expert-led guidance that builds practical understanding and long-term capability in complex software architecture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="premium-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                      <span className="text-2xl font-bold text-secondary">03</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                      Scalable and Cost-Effective for Teams and Individuals
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Delivers a cloud-based platform designed for enterprises and individuals alike — providing depth of learning, organisational 
                      relevance, and measurable results with always-on access and real-time progress insights, all at a fraction of traditional costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>




      {/* Client Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Backed by 25 years of expertise, we help teams master the latest architecture standards to design and scale with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            {/* <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "CC and C Solutions is one of the leading industry experts on Enterprise Architecture. Their deep subject matter 
                  knowledge and extensive practical experience makes all the difference."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Tony Hudnell</p>
                    <p className="text-sm text-muted-foreground">Associate Director, Procter & Gamble</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "ANZ has discovered CC&C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation
ANZ BANK"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">ANZ BANK</p>
                    {/* <p className="text-sm text-muted-foreground">Associate Director, Procter & Gamble</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>


        

            {/* Testimonial 2 */}
            <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "Appreciation to CC&C for such an insightful training on BIAN."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">HSBC Bank</p>
                    {/* <p className="text-sm text-muted-foreground">Chief IT Architect, OTP Group</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>







            {/* Testimonial 2 */}
            {/* <Card className="premium-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary/20"></i>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic">
                  "I sincerely thank the entire CC&C team for your excellent support throughout the BIAN adoption process. 
                  I truly appreciate the professionalism, responsiveness, and quality of work you've brought to this collaboration."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-card-foreground">Domonkos Kertesz</p>
                    <p className="text-sm text-muted-foreground">Chief IT Architect, OTP Group</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>
      {/* Industries Served Section */}
      <section className="py-20 bg-[#f5f8fc] dark:bg-[#101923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized training solutions across critical sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Banking */}
            <div 
              className="premium-card p-8 text-center group hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setLocation('/banking/archiq')}
              data-testid="industry-card-banking"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-university text-3xl text-primary-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Banking</h3>
              <p className="text-muted-foreground leading-relaxed">
                TOGAF, BIAN, and IT4IT training tailored for banking transformation
              </p>
            </div>
            
            {/* Insurance - Static */}
            <div 
              className="premium-card p-8 text-center opacity-75"
              data-testid="industry-card-insurance"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-3xl text-accent-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Insurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized architecture training for insurance modernization
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Coming soon
              </p>
            </div>
            
            {/* Manufacturing - Static */}
            <div 
              className="premium-card p-8 text-center opacity-75"
              data-testid="industry-card-manufacturing"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-industry text-3xl text-secondary-foreground"></i>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Manufacturing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Training programs for Industry 4.0 and manufacturing transformation
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection 
        title="Ready to Elevate Your Team's Architecture Skills?"
        description="Discover how our expert-led training programs can help you achieve BIAN, TOGAF, and IT4IT mastery and accelerate your career growth."
        buttonText="Reserve Your Seat"
      />
      <Footer />
    </div>
  );
}