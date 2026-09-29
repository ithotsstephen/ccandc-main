import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = "Contact Us - CC&C Solutions | Enterprise Architecture Consulting & Training";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact CC&C Solutions for enterprise architecture consulting, BIAN implementation, TOGAF training, and digital transformation services. Get in touch with our team of experts today.');
    }

    let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-page="contact"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-page', 'contact');
      jsonLdScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://ccandcsolutions.com/events#localbusiness",
            "name": "CCandC Solutions",
            "url": "https://ccandcsolutions.com/events",
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
            "@id": "https://ccandcsolutions.com/events#organization",
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
            "@id": "https://ccandcsolutions.com/events#service",
            "name": "CCandC Events and Industry Engagement Services",
            "serviceType": "Corporate Events, Training and Industry Networking Services",
            "url": "https://ccandcsolutions.com/events",
            "provider": {
              "@id": "https://ccandcsolutions.com/events#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://ccandcsolutions.com/events#breadcrumb",
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
                "name": "Events",
                "item": "https://ccandcsolutions.com/events"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://ccandcsolutions.com/#website",
            "url": "https://ccandcsolutions.com/",
            "name": "CCandC Solutions",
            "publisher": {
              "@id": "https://ccandcsolutions.com/events#organization"
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
      {/* Hero Section */}
      <section className="relative isolate min-h-[420px] overflow-hidden bg-[#0b1728] py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(143,199,255,0.16),transparent_32%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-[58%] opacity-45 [background-image:linear-gradient(rgba(143,199,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" aria-hidden="true" />
        <div className="absolute right-[12%] top-1/2 h-[310px] w-[310px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/20" aria-hidden="true" />
        <div className="absolute right-[12%] top-1/2 h-[190px] w-[190px] -translate-y-1/2 rounded-full border border-[#e5bc68]/35" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#8fc7ff] hover:text-white transition-colors mb-6 group"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">Contact · Start a conversation</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Transform <span className="text-[#8fc7ff]">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto">
            Ready to accelerate your digital transformation journey? Get in touch with our team of experts.
          </p>
        </div>
      </section>

      <ContactForm trainingTheme />
      <Footer />
    </div>
  );
}
