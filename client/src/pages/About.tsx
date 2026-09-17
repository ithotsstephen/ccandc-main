import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ImageZoom from "@/components/ImageZoom";
import { Mail, Linkedin } from "lucide-react";

const recordTimeline = [
  {
    year: "2001",
    title: "The practice on record",
    description: "The earliest public capture of ccandcsolutions.com dates to September 2001. Enterprise architecture has been the whole of the work since, which is unusual: most firms in this space arrived from somewhere else.",
  },
  {
    year: "2009",
    title: "TOGAF",
    description: "TOGAF training appears in the public record, beginning a certification practice that has run continuously ever since and still forms the spine of the Academy.",
  },
  {
    year: "2013",
    title: "ArchiMate",
    description: "ArchiMate joins the curriculum, extending the practice from method into modelling notation.",
  },
  {
    year: "2014",
    title: "Delivery at scale, across two continents",
    description: "A year of continuous certification delivery. TOGAF courses ran in Adelaide, Brisbane, Canberra, Melbourne and Sydney, and in Bangalore, Chennai, Hyderabad and Kolkata. CC and C also appeared at The Open Group Conference in Bangalore that January.",
  },
  {
    year: "2015",
    title: "Tooling",
    description: "Sparx Enterprise Architect training is added, on the view that a method without a repository decays into a folder of diagrams.",
  },
  {
    year: "2016",
    title: "Certification without a classroom",
    description: "ArchiMate 2.1 certification runs in Sydney and, for the first time, as self paced e-learning. The online delivery that the Academy portal now carries starts here.",
  },
  {
    year: "2017",
    title: "IT4IT",
    description: "IT4IT joins the curriculum, turning the practice toward the architecture of the technology function itself rather than only the business it serves.",
  },
  {
    year: "2019",
    title: "Banking architecture",
    description: "BIAN enters the practice, alongside competency transformation programmes for client functions. The banking specialisation that now defines the firm's deepest work begins here.",
  },
  {
    year: "2024",
    title: "Best-in-Class Partners Award",
    description: "The Banking Industry Architecture Network recognises CC and C with its Best-in-Class Partners Award, for refreshing the enterprise architecture strategy of a major European bank.",
  },
  {
    year: "2026",
    title: "Software",
    description: "An architecture decisioning engine and a semantic data modeller enter private beta with design partners, built on the same method the practice has taught for two decades.",
  },
];

export default function About() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-page="about"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-page', 'about');
      jsonLdScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://ccandcsolutions.com/about#localbusiness",
            "name": "CCandC Solutions",
            "url": "https://ccandcsolutions.com/about",
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
            "@id": "https://ccandcsolutions.com/about#organization",
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
            "@id": "https://ccandcsolutions.com/about#service",
            "name": "CCandC Business Consulting Services",
            "serviceType": "Digital Transformation and Enterprise Consulting Services",
            "url": "https://ccandcsolutions.com/about",
            "provider": {
              "@id": "https://ccandcsolutions.com/about#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://ccandcsolutions.com/about#breadcrumb",
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
                "name": "About",
                "item": "https://ccandcsolutions.com/about"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://ccandcsolutions.com/#website",
            "url": "https://ccandcsolutions.com/",
            "name": "CCandC Solutions",
            "publisher": {
              "@id": "https://ccandcsolutions.com/about#organization"
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

      {/* Hero Section with Background Image */}
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(assets/Images/About.jpg)' }}
        
      >
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">CC&C Solutions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Built on Architecture. Driven by Transformation.
            </p>
          </div>
        </div>
      </section>

      {false && (
      /* Our Story - Founded */
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Story Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Built on Architecture.<br />Driven by Transformation.
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Founded in the early 2000s, CC&C Solutions set out with one mission — to help organizations 
                  achieve transformation through architectural excellence. From pioneering the TOGAF certification 
                  process to advising Fortune 500 companies, we've shaped the global conversation around enterprise 
                  architecture.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-calendar text-primary mr-3"></i>
                  <span className="text-foreground">Founded in the early 2000s</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-certificate text-primary mr-3"></i>
                  <span className="text-foreground">TOGAF certification pioneers</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-building text-primary mr-3"></i>
                  <span className="text-foreground">Trusted by Fortune 500 companies</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-globe text-primary mr-3"></i>
                  <span className="text-foreground">Global enterprise architecture leaders</span>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Highlight Cards */}
            <div className="flex flex-col justify-between space-y-6">
              {/* Global Impact Card */}
              <Card className="premium-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <i className="fas fa-globe-americas text-3xl text-primary"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">Global Impact</h3>
                      <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-global-impact">20+ Years</div>
                      <p className="text-muted-foreground leading-relaxed">
                        Transforming enterprises across continents with proven architecture excellence
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transformation Highlights Card */}
              <Card className="premium-card bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 hover:border-secondary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">Transformation Highlights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Industry-leading BIAN implementation expertise</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Certified TOGAF training programs worldwide</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Trusted advisors to Fortune 500 enterprises</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-secondary text-lg mt-0.5"></i>
                      <span className="text-card-foreground">Award-winning architecture transformation services</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      )}

      <section className="border-b border-border bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">About</div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">An architecture practice that also teaches.</h2>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">CC and C has worked on enterprise architecture for more than two decades, and the unusual thing about the practice is not its longevity but its shape. The same people advise on architecture, teach the standards that define it, and are now building software that automates parts of the work. Each of the three keeps the other two honest.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setLocation("/contact")} className="premium-button rounded-lg px-5 py-3 font-semibold">Start a conversation</button>
                <button onClick={() => setLocation("/insights")} className="rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted">Read the position</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["20+", "In architecture years"],
                ["BIAN", "Accredited Education Partner"],
                ["Two sides", "Solutions and Academy"],
                ["Five", "Sectors: banking, insurance, manufacturing and more"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-2 text-2xl font-bold text-primary">{value}</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">In brief</div>
              <h3 className="text-3xl font-bold text-foreground">A practice built around shared understanding.</h3>
            </div>
            <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <li>CC and C is an enterprise architecture practice working principally with banks and complex enterprises.</li>
              <li>The firm is an Accredited Education Partner for BIAN, the Banking Industry Architecture Network.</li>
              <li>It operates as two sides: CC and C Solutions for advisory and software, CC and C Academy for accredited certification.</li>
              <li>The consultants who deliver engagements are the people who teach the courses.</li>
              <li>Two products are in private beta with design partners, both built on the practice's own method.</li>
            </ul>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our point of view</div>
              <h3 className="text-3xl font-bold text-foreground md:text-4xl">Architecture is a management capability.</h3>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Architecture is frequently treated as a technical documentation function, and where it is treated that way it becomes one. The alternative view, which this practice holds, is that architecture exists to improve a specific class of decision: the ones that are expensive to reverse and are usually taken with insufficient evidence.</p>
              <p>That framing has consequences. It means an architecture function is judged by decision quality rather than by artefact completeness. It means a model is worth building only to the level of detail some decision requires. And it means architecture has authority only where it is trusted, which has to be earned rather than assigned.</p>
              <p>It also explains why the practice teaches. A standard learned properly is a shared vocabulary, and a shared vocabulary is what lets a group of people disagree precisely enough to settle something. That is a more useful outcome than a certificate, and it is why our courses are taught by people who are using the material elsewhere.</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Structure</div>
              <h3 className="text-3xl font-bold text-foreground">Two sides, one practice</h3>
            </div>
            <div>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">CC and C Solutions covers advisory work and the software. CC and C Academy covers accredited certification and corporate learning. They address different buyers with different cycles, which is why they are presented separately.</p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">They are not separate businesses. The body of knowledge is shared and so are the people.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setLocation("/services")} className="rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted">CC and C Solutions</button>
                <button onClick={() => setLocation("/training")} className="rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted">CC and C Academy</button>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-10 text-center">
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">How we work</div>
              <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Three commitments that shape engagements.</h3>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">Each of these costs us something, which is the only reason they are worth stating.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Independence", "We do not implement", "CC and C is not a systems integrator and does not bid for the delivery work that follows an architecture. It means our recommendations carry no implementation interest, and it means we turn down revenue."],
                ["Separation", "We do not assure our own work", "Where CC and C has designed an architecture, the assurance role belongs to somebody else. We say so rather than accepting both engagements."],
                ["Handover", "Nothing requires us to stay", "Artefacts are designed to be operated by the client, and an engagement is not complete until somebody internal owns each one. Dependency is not a business model we want."],
              ].map(([label, title, description]) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{label}</div>
                  <h4 className="mb-4 text-2xl font-bold text-foreground">{title}</h4>
                  <p className="leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Record */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              The record
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
              Two decades, as a record rather than an adjective.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every entry below can be checked. The dates drawn from the public web archive mark when something first appears on the record, which is a lower bound rather than a start date, and the wording says so.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-4 left-4 top-4 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 via-primary to-secondary/50 shadow-[0_0_18px_rgba(33,119,205,0.28)] md:left-1/2" aria-hidden="true" />
            <div className="space-y-8 md:space-y-10">
              {recordTimeline.map((entry, index) => (
                <div key={entry.year} className="relative grid md:grid-cols-2 md:gap-12">
                  <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}>
                    <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 md:bg-gradient-to-br md:from-card md:to-primary/[0.03]">
                      <div className={`mb-3 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-2xl font-bold text-primary">{entry.year}</span>
                        <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-card-foreground">{entry.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                    </div>
                  </div>
                  <div
                    className={`absolute top-9 hidden h-0.5 bg-gradient-to-r from-primary/30 to-primary md:block ${index % 2 === 0 ? "right-1/2 w-6" : "left-1/2 w-6"}`}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-4 top-6 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary shadow-[0_0_0_3px_rgba(33,119,205,0.2),0_4px_12px_rgba(33,119,205,0.35)] md:left-1/2"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIAN Leadership */}
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Leading the Future of<br />Banking with <span className="text-primary">BIAN</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                As an active BIAN member since 2020, CC&C has helped major banks adopt the BIAN framework to 
                drive reusability, standardization, and agility.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise earned the 2024 & 2025 "Best in Class Partner" Award, while one of our clients received 
                the "Transformation Champion" Award — proof of our shared commitment to excellence.
              </p>

              <div className="space-y-4">
                <Card className="bg-primary/20 border-primary p-4">
                  <CardContent className="p-0 flex items-center">
                    <i className="fas fa-calendar text-3xl text-primary mr-4"></i>
                    <div>
                      <div className="font-bold text-card-foreground">BIAN Member Since 2020</div>
                      <p className="text-sm text-muted-foreground">Active member driving banking transformation</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-secondary p-4">
                  <CardContent className="p-0 flex items-center">
                    <i className="fas fa-award text-3xl text-secondary mr-4"></i>
                    <div>
                      <div className="font-bold text-card-foreground">Best in Class Partner</div>
                      <p className="text-sm text-muted-foreground">BIAN Award 2024</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-accent/20 border-accent p-4">
                  <CardContent className="p-0 flex items-center">
                    <i className="fas fa-trophy text-3xl text-accent mr-4"></i>
                    <div>
                      <div className="font-bold text-card-foreground">Transformation Champion</div>
                      <p className="text-sm text-muted-foreground">Client Award 2024</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative flex flex-col h-full">
              <img 
                src="assets/Images/BIANAward.jpeg" 
                alt="BIAN Best in Class Partner Award 2024" 
                className="rounded-xl shadow-2xl w-full h-full object-cover"
                data-testid="img-story-bian"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - hidden */}
      {false && (
      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries driving transformation excellence across the globe
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vish Viswanathan Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src="assets/Images/Vish Photo.png"
                  alt="Vish Viswanathan - Managing Principal & Global CEO"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-vish"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Vish Viswanathan</h3>
                  <p className="text-accent font-semibold mb-4">Managing Principal & Global CEO, Global Lead, Architecture Practice</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    Visionary founder and global CEO of CC&C Solutions, Vish Viswanathan is a world-renowned Enterprise Architecture thought leader, mentor, and advisor to several Fortune 500 organizations. With decades of experience across IT strategy, telecommunications, software solutions, and emerging technologies, Vish has been instrumental in shaping the evolution of Enterprise Architecture as a distinct profession.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Enterprise Architecture Leadership",
                        "IT Strategy & Transformation",
                        "Telecommunications & Emerging Technologies",
                        "Global Business Development",
                        "Mentorship & Professional Advocacy"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Enterprise Architecture Enablement",
                        "EA Maturity & Governance Frameworks",
                        "Strategic Advisory for Global Organizations",
                        "Open Group & AEA Leadership Contributions",
                        "Technology Innovation & Market Expansion"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/viviswanathan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-vish-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:vish@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-vish-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Mamta Sarangal Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src="assets/Images/Mamta photo.png"
                  alt="Mamta Sarangal - Chief Architect"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-mamta"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Mamta Sarangal</h3>
                  <p className="text-accent font-semibold mb-4">Chief Architect</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    Visionary enterprise architect and technology executive with over two decades of experience in financial services, telecommunications, and digital transformation. As Chief Architect at CC&C Solutions, she drives strategic architecture consulting, BIAN framework implementation, and IT value delivery for global clients.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Enterprise Architecture",
                        "BIAN Implementation",
                        "Digital Transformation",
                        "API Management",
                        "Architecture Practice"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIAN Adoption & Digital Journeys",
                        "Open Banking Strategies",
                        "Maturity Assessments",
                        "Technology Roadmaps",
                        "Business Architecture"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/mamta-sarangal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-mamta-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:Mamta.sarangal@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-mamta-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Nishan Jebanasam Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src={`assets/Images/Nishan.png?v=${Date.now()}`}
                  alt="Nishan Jebanasam - Global Lead – Banking & Financial Services"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-nishan"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Nishan Jebanasam</h3>
                  <p className="text-accent font-semibold mb-4">Global Lead – Banking & Financial Services</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    Banking and Technology executive with over two decades of financial services and IT experience, including product, distribution, risk, data, and digital transformation. As CC&C Solutions' global lead for Banking & Financial Services, Nishan helps banks, credit unions, fintechs, and vendors across the globe modernize their enterprise and extract value out of transformation investment.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIAN Frameworks",
                        "Core Modernization",
                        "Digital Platforms",
                        "Executive Education",
                        "Change Leadership"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "BIAN from reference to results",
                        "Cut run-costs via de-duplication",
                        "Traceability from strategy to services",
                        "Stakeholder alignment & coaching",
                        "Balanced governance frameworks"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/nishan-jebanasam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-nishan-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:nishan@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-nishan-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Ramesh Thandava Krishnan Profile */}
            <Card className="premium-card overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-white">
                <img 
                  src={`assets/Images/Ramesh.png?v=${Date.now()}`}
                  alt="Ramesh Thandava Krishnan - Head of Global Business Operations"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  data-testid="img-profile-ramesh"
                />
              </div>
              
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-1">Ramesh Thandava Krishnan</h3>
                  <p className="text-accent font-semibold mb-4">Head of Global Business Operations</p>
                  <p className="text-muted-foreground leading-relaxed min-h-[168px]">
                    As Head of Global Business Operations at CC&C Solutions, Ramesh translates the company's strategic vision into actionable plans that drive measurable results. With a focus on operational excellence and customer-centric innovation, he identifies evolving client needs and delivers superior value through collaboration and efficiency across CC&C's global business units.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Key Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Project Management",
                        "Go-to-Market Strategy",
                        "Client Relationship & Business Development",
                        "Service Delivery Management",
                        "Vendor & Partner Management"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-card-foreground mb-3 uppercase tracking-wide">Specific Value Adds</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Global Business Services (GBS) Operations",
                        "IT Transformation Training (TOGAF, IT4IT)",
                        "Train-the-Trainer Programs",
                        "Architecture Transformation Consulting",
                        "Learning & Development Collaboration"
                      ].map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-card-foreground/10 text-card-foreground text-xs font-medium rounded-full border border-card-foreground/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-auto">
                  <a
                    href="https://www.linkedin.com/in/rameshthandavakrishnan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-ramesh-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:ramesh@ccandcsolutions.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-ramesh-email"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      )}

      {/* Global Reach */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Global Reach</h2>
            <p className="text-xl text-muted-foreground">
              Delivering services to clients across the globe with personnel based in major continents
            </p>
          </div>

          {/* World Map */}
          <div className="relative bg-black rounded-2xl p-2 md:p-4 mb-12 shadow-2xl">
            <div className="relative w-full">
              <ImageZoom
                src="assets/Images/Global Reach.png" 
                alt="Global Reach Map - CC&C Solutions worldwide presence" 
                className="w-full min-h-[400px] md:min-h-[500px] h-auto object-contain rounded-lg"
                testId="img-global-reach-map"
              />
            </div>
          </div>

        </div>
      </section>

      <CTASection 
        title="Partner with CC&C Solutions"
        description="Join leading enterprises worldwide who trust us to transform their architecture practice and accelerate digital innovation."
        buttonText="Talk to Our Team"
      />

      <Footer />
    </div>
  );
}
