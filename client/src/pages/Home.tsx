import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowRight, ArrowUpRight, Building2, Factory, GraduationCap, HeartPulse, Landmark, PackageOpen, Pill, RadioTower, ShieldCheck, ShoppingBag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const homeCapabilitySlides = [
  {
    label: "Consulting",
    headline: "Turn strategy into measurable transformation.",
    description: "Our expert consultants help organisations align business strategy, enterprise architecture, and IT delivery. We provide practical guidance that builds lasting capability and self-sufficiency.",
    href: "/consulting",
    ctaLabel: "Explore consulting",
    icon: Building2,
    accent: "text-[#8fc7ff]",
  },
  {
    label: "BIAN",
    headline: "Accelerate your journey towards modern banking architecture.",
    description: "As a BIAN-accredited partner, CC&C helps banks adopt and implement the BIAN framework. Our expertise enables standardised, modular, reusable, and agile financial services.",
    href: "/bian-training",
    ctaLabel: "View BIAN solutions",
    icon: Landmark,
    accent: "text-[#e5bc68]",
  },
  {
    label: "Products",
    headline: "Smart solutions for architecture and transformation.",
    description: "Our purpose-built products simplify architecture management, capability development, and digital transformation. They provide actionable insights that help organisations make informed decisions.",
    href: "/products",
    ctaLabel: "See products",
    icon: PackageOpen,
    accent: "text-[#79d8d1]",
  },
  {
    label: "Training",
    headline: "Build the skills required to lead transformation.",
    description: "Our practitioner-led training covers BIAN, TOGAF®, IT4IT™, enterprise architecture, and digital transformation. Teams gain practical knowledge they can confidently apply in real-world environments.",
    href: "/training",
    ctaLabel: "Explore training",
    icon: GraduationCap,
    accent: "text-[#e7a5d1]",
  },
];

export default function Home() {
  const [capabilityApi, setCapabilityApi] = useState<any>(null);

  useEffect(() => {
    if (!capabilityApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      capabilityApi.scrollNext();
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [capabilityApi]);

  useEffect(() => {
    let jsonLdScript = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"][data-page="home"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-page', 'home');
      jsonLdScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://ccandcsolutions.com/#localbusiness",
            "name": "CCandC Solutions",
            "url": "https://ccandcsolutions.com/",
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
            "@id": "https://ccandcsolutions.com/#organization",
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
            "@id": "https://ccandcsolutions.com/#service",
            "serviceType": "Digital Transformation and Consulting Services",
            "provider": {
              "@id": "https://ccandcsolutions.com/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "url": "https://ccandcsolutions.com/",
            "name": "CCandC Solutions Services"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://ccandcsolutions.com/#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ccandcsolutions.com/"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://ccandcsolutions.com/#website",
            "url": "https://ccandcsolutions.com/",
            "name": "CCandC Solutions",
            "publisher": {
              "@id": "https://ccandcsolutions.com/#organization"
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
      if (jsonLdScript) {
        jsonLdScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* <HeroSection /> */}

      {/* Capability Carousel */}
      <section className="relative w-full overflow-hidden bg-[#0b1728] pb-4 pt-10 sm:pb-6 sm:pt-12" data-testid="home-capability-carousel">
        <div className="relative mx-auto max-w-[1440px] px-3 sm:px-4 lg:px-5">
          <Carousel opts={{ align: "start", loop: true }} setApi={setCapabilityApi} className="w-full">
            <CarouselContent className="-ml-4">
              {homeCapabilitySlides.map((slide) => {
                const Icon = slide.icon;
                return (
                  <CarouselItem key={slide.label} className="pl-4 basis-full">
                    <div className="relative min-h-[380px] overflow-hidden px-12 pb-6 pt-8 sm:px-14 sm:pb-6 sm:pt-9 md:px-16 md:pb-6 md:pt-10">
                      <div className="pointer-events-none absolute right-4 top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-70 sm:block" aria-hidden="true">
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />
                        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15" />
                        <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[#8fc7ff]/50" />
                        <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-[#e5bc68]/50" />
                        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#8fc7ff] bg-[#0b1728]" />
                        <div className="absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8fc7ff]" />
                        <div className="absolute bottom-8 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#e5bc68]" />
                        <div className="absolute left-8 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8fc7ff]" />
                        <div className="absolute right-8 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#e5bc68]" />
                      </div>
                      <div className="relative z-10 flex min-h-[300px] flex-col justify-between md:pr-72">
                        <div className="flex items-start justify-between gap-6">
                          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 sm:h-20 sm:w-20 ${slide.accent}`}>
                            <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.7} />
                          </div>
                        </div>
                        <div className="mt-8 max-w-3xl">
                          <div className={`mb-5 text-2xl font-extrabold uppercase tracking-[0.18em] sm:text-3xl ${slide.accent}`}>
                            {slide.label}
                          </div>
                          <h3 className="max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                            {slide.headline}
                          </h3>
                          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                            {slide.description}
                          </p>
                          <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                              href={slide.href}
                              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1728] transition-transform duration-200 hover:scale-[1.02] hover:bg-[#dfeeff]"
                            >
                              {slide.ctaLabel}
                              <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                              href="/contact"
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
                            >
                              Talk to an expert
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 z-20 h-10 w-10 border-white/20 bg-white/90 text-[#0b1728] shadow-lg hover:bg-white hover:text-[#0b1728] md:-left-2 lg:-left-4" />
            <CarouselNext className="right-0 z-20 h-10 w-10 border-white/20 bg-white/90 text-[#0b1728] shadow-lg hover:bg-white hover:text-[#0b1728] md:-right-2 lg:-right-4" />
          </Carousel>
        </div>
      </section>

      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24" data-testid="home-about-intro">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">What We Are All About</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Turning strategy into delivery through architecture and AI.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                CC&amp;C Solutions helps banks and financial institutions turn strategy into delivery through the right architecture, strengthened by the intelligent use of AI. Our consultants work alongside leadership and delivery teams to resolve the decisions that stall change, from service boundaries and platform choices to the meaning and governance of data.
              </p>
              <p>
                We bring more than twenty years of enterprise architecture practice, combined with the pace that modern tooling and AI make possible, so that business ambition becomes working change sooner and with fewer surprises.
              </p>
              <p>
                We believe in a better way of doing consultancy. We work closely with our clients until we understand their business as well as they do, and we teach as we go. Through accredited training in AI, TOGAF, BIAN, BIZBOK and IT4IT, and through our own suite of tools &amp; skills transformation services, tailored to each organisation, we leave clients with the knowledge and capability to sustain change long after the engagement ends.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-lg bg-[#102d3d] shadow-[0_24px_64px_-32px_rgba(11,23,40,0.55)]">
            <img
              src="/assets/Images/togaf-corporate-team.jpg"
              alt="Colleagues working together in a collaborative office"
              className="aspect-[4/3] w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102d3d]/90 via-[#102d3d]/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-3 h-1 w-12 rounded-full bg-[#e5b85c]" aria-hidden="true" />
              <p className="text-xl font-semibold text-white sm:text-2xl">Better change, built together.</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
                Working alongside your teams, sharing knowledge at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions and Academy */}
      <section className="hidden relative overflow-hidden bg-background py-16 sm:py-20">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <a
            data-testid="card-solutions"
            href="/consulting"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_45px_-18px_rgba(14,49,88,0.38)] sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-45"
              aria-hidden="true"
              style={{ background: "rgb(231, 241, 254)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: "rgb(231, 241, 254)", color: "rgb(14, 49, 88)" }}
                >
                  <Building2 className="h-7 w-7" />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ background: "rgb(231, 241, 254)", color: "rgb(14, 49, 88)" }}
                >
                  For enterprises
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-bold text-foreground sm:text-3xl">CC and C Consulting</h2>
              <p className="mt-3 font-serif text-lg text-foreground/80 sm:text-xl">
                Artificial intelligence inherits the architecture beneath it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Banks, insurers and complex industrial groups are finding that the constraint on artificial intelligence is rarely the model. It is the foundation underneath: systems that disagree about what a customer is, service boundaries nobody can name, and data whose meaning lives in the heads of the people who maintain it. CC and C builds that foundation. We teach the standards that define it, we advise on their adoption, and we are building the software that automates the work.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="text-xl font-bold" style={{ color: "rgb(14, 49, 88)" }}>20+</div>
                  <div className="mt-1 text-xs text-muted-foreground">years in enterprise architecture</div>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="text-xl font-bold" style={{ color: "rgb(14, 49, 88)" }}>3</div>
                  <div className="mt-1 text-xs text-muted-foreground">disciplines: teach, advise, automate</div>
                </div>
              </div>
            </div>
            <div
              className="relative z-10 mt-8 flex items-center justify-between rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-colors"
              data-testid="button-goto-solutions"
              style={{ background: "rgb(14, 49, 88)" }}
            >
              <span>Explore CC and C Consulting</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>

          <a
            data-testid="card-academy"
            href="/training"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_45px_-18px_rgba(129,87,14,0.38)] sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-45"
              aria-hidden="true"
              style={{ background: "rgb(254, 245, 231)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: "rgb(254, 245, 231)", color: "rgb(129, 87, 14)" }}
                >
                  <GraduationCap className="h-7 w-7" />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ background: "rgb(254, 245, 231)", color: "rgb(129, 87, 14)" }}
                >
                  For practitioners
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-bold text-foreground sm:text-3xl">CC and C Training</h2>
              <p className="mt-3 font-serif text-lg text-foreground/80 sm:text-xl">
                Certification taught by the people who do the work.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                CC and C has practised enterprise architecture for more than two decades, and every course is delivered by consultants who spend the rest of their time applying the same standards inside banks and complex enterprises. The examples come from live engagements rather than from the courseware, which is the difference between passing an examination and being able to use the method on Monday.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="text-xl font-bold" style={{ color: "rgb(129, 87, 14)" }}>Live</div>
                  <div className="mt-1 text-xs text-muted-foreground">engagements, not slideware</div>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <div className="text-xl font-bold" style={{ color: "rgb(129, 87, 14)" }}>1:1</div>
                  <div className="mt-1 text-xs text-muted-foreground">practitioner-led cohorts</div>
                </div>
              </div>
            </div>
            <div
              className="relative z-10 mt-8 flex items-center justify-between rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-colors"
              data-testid="button-goto-academy"
              style={{ background: "rgb(129, 87, 14)" }}
            >
              <span>Explore CC and C Training</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>
        </div>
      </section>
      
     
      
  
      
      {/* Market Success & Recognition - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[hsl(211,86%,98%)] dark:bg-neutral-950 border-y border-[hsl(211,86%,40%)]/10 dark:border-neutral-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Header */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-4">
              <i className="fas fa-star mr-2"></i>
              Industry Leadership
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Market Success &<br />
              <span className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Proven excellence through industry-leading achievements, prestigious partnerships, 
              and global recognition that sets us apart in the enterprise architecture space
            </p>
            <img
              src="/assets/Images/homebannerimage.png"
              alt="CC&C Solutions industry achievements, partnerships, and global recognition"
              className="mx-auto mt-8 h-auto w-full max-w-6xl rounded-xl shadow-lg"
              loading="lazy"
            />
            <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-primary/15 bg-background/80 px-6 py-6 text-left shadow-sm dark:border-neutral-700 dark:bg-neutral-900/80 sm:px-8 sm:py-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <i className="fas fa-award text-xl" aria-hidden="true"></i>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We are proud to be recognised by the Banking Industry Architecture Network (BIAN) as its{" "}
                  <span className="font-semibold text-foreground">Best-in-Class Partner for 2024 and 2025</span>.
                  This recognition reflects our work helping banks adopt BIAN, our practical BIAN consulting and training, and our contribution to the BIAN framework.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Grid */}
          {false && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* BIAN Award */}
            <div className="premium-card group hover:scale-105 transition-all duration-500 p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-secondary/30 group-hover:shadow-2xl transition-all duration-500">
                  <i className="fas fa-trophy text-4xl text-secondary-foreground"></i>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium text-xs mb-4">
                  <i className="fas fa-award mr-1"></i>
                  Award Winner
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">BIAN Excellence</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                    We are proud to be recognised by the Banking Industry Architecture Network (BIAN) as its Best-in-Class Partner in both 2024 and 2025, a reflection of our BIAN adoption and consulting work with banks, our fit for purpose BIAN training and our contribution to the BIAN framework.
                </p>
                   <div className="flex items-center justify-center space-x-4 text-sm text-primary">
                  <div className="flex items-center">
                    <i className="fas fa-calendar mr-1"></i>
                    2024 & 2025
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-building mr-1"></i>
                    Banking
                  </div>
                </div>
              </div>
            </div>

            {/* Global Accreditation */}
            <div className="premium-card group hover:scale-105 transition-all duration-500 p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-accent/30 group-hover:shadow-2xl transition-all duration-500">
                  <i className="fas fa-certificate text-4xl text-accent-foreground"></i>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-xs mb-4">
                  <i className="fas fa-shield-check mr-1"></i>
                  Certified Partner
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Global Accreditation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  TOGAF® Open Group certified and BIAN accredited as the only exclusive partner 
                  serving BIAN clients globally with comprehensive architectural expertise.
                </p>
                   <div className="flex items-center justify-center space-x-4 text-sm text-primary">
                  <div className="flex items-center">
                    <i className="fas fa-globe mr-1"></i>
                    Global
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-users mr-1"></i>
                    Exclusive
                  </div>
                </div>
              </div>
            </div>

            {/* Global Reach */}
            <div className="premium-card group hover:scale-105 transition-all duration-500 p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-primary/30 group-hover:shadow-2xl transition-all duration-500">
                  <i className="fas fa-globe-americas text-4xl text-primary-foreground"></i>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-xs mb-4">
                  <i className="fas fa-map-marked-alt mr-1"></i>
                  Worldwide
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Serving clients across Australia, Asia, Europe, Americas, and Middle East 
                  with localized expertise and culturally-aware architectural solutions.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-primary">
                  <div className="flex items-center">
                    <i className="fas fa-flag mr-1"></i>
                    25+ Countries
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock mr-1"></i>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#d9e3e5] bg-[#f2f6f4] py-16 sm:py-20 lg:py-24" data-testid="home-delivery-gap">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-50 lg:block"
          aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(135deg, transparent 49.8%, rgba(43, 119, 116, 0.12) 50%, transparent 50.2%)", backgroundSize: "36px 36px" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2b7774]">What gap we fill in</p>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] text-[#102d3d] sm:text-5xl">
              Transformation fails in the space between strategy and delivery.
            </h2>
            <div className="mt-9 flex max-w-md items-center gap-3" aria-label="Strategy connects through the delivery gap to delivery">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#526c70]">Strategy</span>
              <span className="h-px flex-1 bg-[#9bb4b2]" aria-hidden="true" />
              <span className="whitespace-nowrap rounded-sm bg-[#e5b85c] px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#263746]">The gap</span>
              <span className="h-px flex-1 bg-[#9bb4b2]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#526c70]">Delivery</span>
            </div>
          </div>

          <div className="max-w-2xl space-y-6 border-l-2 border-[#2b7774]/30 pl-6 text-base leading-relaxed text-[#455e63] sm:pl-8 sm:text-lg">
            <p>
              Every programme begins with a strategy that sounds coherent in the boardroom and a delivery plan that sounds achievable in the project office. The failure point sits in between, where operating models, governance, data flows and human behaviour have to reconcile with a vision that was never designed to survive contact with operations.
            </p>
            <p className="font-semibold text-[#102d3d]">
              CC and C treats that gap as the actual work.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across critical sectors driving digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl"
              onClick={() => window.location.href = '/banking'}
              data-testid="industry-card-banking"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <Landmark className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Banking</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                Core banking modernization, BIAN alignment, and digital transformation programs that improve agility and customer value.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl"
              onClick={() => window.location.href = '/insurance'}
              data-testid="industry-card-insurance"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <ShieldCheck className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Insurance</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                Policy administration modernization, claims optimization, and digital platforms that simplify service and delivery.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl"
              onClick={() => window.location.href = '/manufacturing'}
              data-testid="industry-card-manufacturing"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <Factory className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Manufacturing</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
Smart manufacturing systems, supply chain optimization, and Industry 4.0 transformation              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl"
              data-testid="industry-card-retail"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <ShoppingBag className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Retail</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
Omnichannel retail strategies, customer experience optimization, and digital commerce transformation              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl"
              data-testid="industry-card-telecommunications"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <RadioTower className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Telecommunications</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
Network modernization, 5G implementation, and digital service delivery platforms              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl"
              data-testid="industry-card-health"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <HeartPulse className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Health</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
Healthcare IT modernization, patient care systems, and clinical workflow optimization              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* <div
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(211,86%,40%)]/40 hover:shadow-xl md:col-span-2 xl:col-span-1"
              data-testid="industry-card-pharmaceuticals"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(211,86%,40%)]/10 text-[hsl(211,86%,40%)] ring-1 ring-[hsl(211,86%,40%)]/20">
                  <Pill className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Pharmaceuticals</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                R&D and supply chain modernization that improves compliance, visibility, and operational performance across the value chain.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(211,86%,40%)]">
                Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <TestimonialsSection />
   <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">20 Years of Excellence</h2>
            <p className="text-xl text-muted-foreground">Delivering measurable results across the globe</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="metric-individuals-trained">
              <AnimatedCounter 
                end={10000} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={2500}
              />
              <div className="text-muted-foreground">Individuals Trained</div>
            </div>
            <div className="text-center" data-testid="metric-global-clients">
              <AnimatedCounter 
                end={250} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={2000}
              />
              <div className="text-muted-foreground">Global Clients</div>
            </div>
            <div className="text-center" data-testid="metric-years-experience">
              <AnimatedCounter 
                end={20} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={1500}
              />
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center" data-testid="metric-countries-served">
              <AnimatedCounter 
                end={25} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-[hsl(210,100%,60%)] mb-2"
                duration={1800}
              />
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
      <ClientLogosCarousel />
      <Footer />
    </div>
  );
}
