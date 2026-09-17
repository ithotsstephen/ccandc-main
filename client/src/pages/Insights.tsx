import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  summary: string;
  challenge: string;
  role: string;
  outcomes: string[];
  conclusion: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "OTP Group BIAN Adoption Journey: Building a Standardized and Agile Banking Ecosystem",
    client: "OTP Bank, one of Central and Eastern Europe's leading financial groups, operating across multiple countries with a diverse portfolio of member banks.",
    summary: "Co-developed a comprehensive BIAN adoption roadmap for OTP Group to strengthen technology standardization and reusability across member countries while respecting local flexibility.",
    challenge: "OTP Bank needed a common architectural framework to unify its digital landscape across diverse banking entities with unique strategies, operating models, and varying stages of digital maturity—without compromising local flexibility.",
    role: "CC&C Solutions partnered with OTP Bank to co-develop a comprehensive roadmap for BIAN adoption. Through collaborative workshops with stakeholders across OTP Group, we engaged cross-functional teams to capture business and technology drivers, mapped integration pathways respecting local autonomy while promoting standardization, identified opportunities for reusability, and designed a phased implementation strategy aligned with OTP's long-term transformation vision.",
    outcomes: [
      "Delivered structured roadmap outlining governance and alignment models for consistent adoption",
      "Defined standardized service domains across subsidiaries",
      "Created mechanisms for sharing architectural assets to accelerate delivery",
      "Established KPIs and checkpoints to measure progress and value realization",
      "Set OTP Bank on a clear path toward greater agility, standardization, and reusability"
    ],
    conclusion: "At CC&C Solutions, we are honored to support OTP Bank on this journey—helping translate its vision into a practical, scalable, and value-driven roadmap. Together, we are building the foundation for a standardized and agile banking ecosystem that drives growth and innovation across borders.",
    image: "/assets/Images/OTPBank.png"
  },
  {
    id: 2,
    title: "Empowering One of Australia's Largest Banks to Accelerate BIAN Adoption",
    client: "One of Australia's largest and most prominent banks, known for its innovation in digital transformation and enterprise architecture.",
    summary: "Trained and certified 75+ senior leaders in BIAN framework application, significantly accelerating BIAN adoption across architecture and platform engineering teams.",
    challenge: "The bank's architecture and platform engineering teams needed a structured approach to governance, education, and leadership alignment to scale BIAN adoption effectively across departments while embedding deep understanding of the BIAN Service Landscape within their enterprise ecosystem.",
    role: "CC&C Solutions delivered hands-on practical workshops covering BIAN wireframes, semantic APIs, and the Business Object Model. We also conducted a BIAN Management Overview workshop for senior executive leadership to foster buy-in and long-term strategic alignment.",
    outcomes: [
      "75+ senior leaders across business and technology divisions gained working understanding of BIAN",
      "Significantly accelerated BIAN adoption within the organization",
      "Architecture and engineering teams equipped to apply BIAN reference architecture to enterprise landscape, systems, and data models",
      "Created strong foundation for consistent architectural practice and cross-team reusability",
      "Enabled faster time-to-delivery across transformation programs"
    ],
    conclusion: "Through this partnership, CC&C Solutions empowered one of Australia's top banks to scale its BIAN capability and maturity, enabling it to lead the way in standardized, efficient, and future-ready banking architecture.",
    image: "/assets/Images/Empowering.png"
  },
  {
    id: 3,
    title: "Empowering One of the Largest Banks in Portugal to Modernize with BIAN",
    client: "One of Portugal's largest and most established banks, currently on a journey to modernize its enterprise architecture and enhance operational efficiency.",
    summary: "Designed and implemented a BIAN-aligned enterprise reference model, mapping over 200 applications to Service Domains for seamless integration into a new EAM tool.",
    challenge: "The bank needed to standardize its architecture model, improve visibility across applications, and enable enterprise-wide reuse while transitioning to a new Enterprise Architecture Management tool and modeling enterprise capabilities as Service Domains aligned with BIAN.",
    role: "CC&C Solutions designed and implemented an enterprise reference model aligned to the BIAN Service Landscape, mapping over 200 applications to BIAN Service Domains, developing BIAN-aligned enterprise reference architecture, and conducting hands-on workshops to uplift the architecture team's capabilities.",
    outcomes: [
      "Delivered BIAN-aligned architecture enabling identification of system duplication and cost reduction",
      "Enabled rationalization and ongoing management of API portfolio through standardized mapping",
      "Enhanced architecture team proficiency in applying BIAN through practical workshops",
      "Improved service domain mapping and navigation of BIAN Service Landscape"
    ],
    conclusion: "This partnership positioned the bank to leverage BIAN as a foundation for modernization, rationalization, and innovation—strengthening its enterprise architecture for the future.",
    image: "/assets/Images/Portugal.png"
  },
  {
    id: 4,
    title: "Transforming Core Banking Through BIAN at a Top Australian Bank",
    client: "One of Australia's top-tier banks, embarking on a major transformative initiative to replace one of its core platforms.",
    summary: "Trained 40+ specialists and embedded BIAN-aligned semantic API design across architecture, engineering, and integration teams for a major core platform replacement.",
    challenge: "The transformation program required a consistent approach to enterprise design and integration, embedding BIAN-aligned design principles across teams while ensuring compliance and maintaining flexibility in evolving digital ecosystems involving internal systems, partners, and fintech collaborations.",
    role: "CC&C Solutions delivered targeted training and hands-on workshops for architecture, engineering, and integration teams. Our consultants embedded within project teams to guide BIAN-aligned semantic API design and implementation, supported development of control records and business object models, and collaborated with enterprise architecture to deploy modern tooling.",
    outcomes: [
      "40+ architects, engineers, and integration specialists trained to effectively leverage BIAN artifacts",
      "BIAN-aligned semantic APIs reduced integration complexity and strengthened external connectivity",
      "BIAN-based models integrated into internal tooling, enabling model-driven service design",
      "Improved delivery governance and standardization"
    ],
    conclusion: "Through this engagement, CC&C Solutions empowered one of Australia's largest banks to realize the value of standardized architecture. By embedding BIAN best practices into both engineering culture and tooling ecosystem, the bank is now positioned for greater agility, interoperability, and innovation.",
    image: "/assets/Images/Australian Bank.png"
  },
  {
    id: 5,
    title: "Modernizing Core Banking with BIAN at a Leading New Zealand Bank",
    client: "A leading New Zealand bank embarking on a major modernization journey to rebuild its core banking platform and progressively migrate away from legacy systems.",
    summary: "Delivered expert architecture consulting and BIAN training for 100+ professionals, enabling modernization of core banking platform with composable, vendor-independent architecture.",
    challenge: "The bank sought to create a modern, composable architecture supporting evolving digital capabilities while maintaining business continuity, requiring both technical enablement and organizational alignment around BIAN principles across architecture, engineering, and integration functions.",
    role: "CC&C Solutions provided expert architecture consulting to guide new core platform design aligned with BIAN principles, ensured architectural interoperability and composability to avoid vendor dependency, and designed and delivered BIAN training for over 100 professionals including architects, engineers, and integration specialists.",
    outcomes: [
      "Architecture teams gained deep, practical understanding of BIAN through hands-on workshops",
      "Standardization of Business Information Model accelerated across the bank",
      "BIAN-aligned semantic APIs simplified integrations and strengthened external collaboration",
      "Enabled consistency and clarity in enterprise design"
    ],
    conclusion: "Through this partnership, CC&C Solutions enabled the bank to modernize its core architecture, foster standardization, and achieve greater agility across its digital ecosystem—laying the foundation for a future-ready, interoperable banking platform.",
    image: "/assets/Images/Modernizing NZ.png"
  },
  {
    id: 6,
    title: "Transforming a Leading US Credit Union with BIAN and Enterprise Architecture",
    client: "A major credit union in the United States, undergoing large-scale organizational transformation to establish a service-oriented operating model.",
    summary: "Designed new operating model and architecture-led governance process, enabling faster time-to-market and improved IT service reliability for a major US credit union.",
    challenge: "The credit union sought to reduce operational complexity and improve efficiency through architecture-led transformation, requiring a new organization structure and operating model with well-defined ownership across business and technology teams while ensuring consistent application of BIAN-aligned principles.",
    role: "CC&C Solutions collaborated with the Transformation Office to design a new operating model with clear business and technology ownership, supported the architecture team in developing initiative intake and governance processes, leveraged enterprise architecture tools to digitize workflows, and embedded BIAN-aligned artifacts into the new way of working.",
    outcomes: [
      "Faster time-to-market through streamlined processes and simplified IT systems",
      "Clear accountability across teams",
      "Improved reliability and resilience of IT-enabled business services",
      "Empowered workforce transformation through clearly defined roles and responsibilities",
      "Architecture-led skills uplift"
    ],
    conclusion: "Through this engagement, CC&C Solutions helped one of the US's largest credit unions redefine its operating model and embed architecture-led governance that enables continuous improvement, faster delivery, and sustainable digital transformation.",
    image: "/assets/Images/US Credit Union.png"
  },
  {
    id: 7,
    title: "Accelerating Digital Transformation with BIAN at a Leading Bank in the Philippines",
    client: "A large bank in the Philippines undertaking digital transformation of its mortgage business.",
    summary: "Guided design and deployment of composable, API-driven architecture for mortgage modernization using BIAN principles and semantic APIs.",
    challenge: "The mortgage division sought to transition from traditional, siloed systems to modern, API-driven architecture, needing to align business and technical design models using BIAN concepts while developing an integrated view of value streams, composable capabilities, and business objects.",
    role: "CC&C Solutions delivered customized BIAN training and consulting, conducting hands-on workshops focused on practical application within the mortgage domain, guiding design of business scenarios, wireframes, semantic APIs, and control records, and supporting rollout of new enterprise architecture tooling.",
    outcomes: [
      "Defined design artifacts using BIAN metamodel to shape conceptual architecture for mortgage modernization",
      "Developed BIAN-aligned semantic APIs simplifying integrations with external partners and fintechs",
      "Created BIAN-based models integrated into tooling environment",
      "Enabled model-driven approach to service design"
    ],
    conclusion: "Through its partnership with CC&C Solutions, the bank has accelerated its journey toward a composable, standardized, and interoperable architecture—setting a foundation for sustained innovation in the Philippine banking sector.",
    image: "/assets/Images/Phillippines.png"
  },
  {
    id: 8,
    title: "Unifying Business Architecture with BIAN at a Leading Bank in Canada",
    client: "One of Canada's largest banks, pursuing an ambitious growth strategy through acquisitions to expand its offerings and customer base.",
    summary: "Implemented BIAN-aligned Business Capability Mapping framework, enabling unified planning for transformation and acquisition initiatives across multiple business units.",
    challenge: "Rapid expansion created fragmented architecture landscapes and inconsistent capability mapping across business units. The bank needed a BIAN-aligned Business Capability Mapping framework to link business capabilities to applications and technology across the enterprise.",
    role: "CC&C Solutions designed and implemented a comprehensive BIAN-aligned Business Capability Map, mapping the bank's business capabilities to BIAN Service Domains across several business units, delivering training and certification to upskill the Business Architecture team, and enabling the bank to independently scale capability mapping enterprise-wide.",
    outcomes: [
      "Business Architecture team gained deep understanding of BIAN and became self-sufficient",
      "BIAN-aligned BCM leveraged to plan multiple transformation and acquisition initiatives",
      "Linked capabilities to strategy, identifying overlaps and dependencies",
      "Improved enterprise-wide planning quality"
    ],
    conclusion: "Through this partnership, CC&C Solutions enabled a major Canadian bank to align its business and technology landscapes, creating a unified architecture that supports scalability, transformation, and future integration efforts.",
    image: "/assets/Images/Canada.png"
  },
  {
    id: 9,
    title: "Driving Global Enterprise Alignment with BIAN — A Leading Global Bank",
    client: "A large global bank operating across Europe, the UK, the US, India, China, Hong Kong, the Middle East, Mexico, and Argentina.",
    summary: "Delivered BIAN foundational training to several hundred participants globally, establishing common architecture standards and capability models across continents.",
    challenge: "Operating across multiple geographies and business units, the bank faced fragmented architecture standards and limited alignment between business and IT, seeking to create a common architecture foundation to unify teams globally and accelerate digital transformation.",
    role: "CC&C Solutions developed and rolled out an architecture foundational curriculum including skills matrix, gap assessments, and executive workshops, designed preliminary BIAN-based use cases and deployment plan for large-scale rollout, and delivered BIAN foundational training for several hundred participants across global offices.",
    outcomes: [
      "Elevated Enterprise Architecture capability to common global standard across all business units",
      "Integrated BIAN-based models into tooling, enabling model-driven design approach",
      "Established common capability model across enterprise based on BIAN",
      "Accelerated standardization of Business Information Models",
      "Fostered greater efficiency and collaboration across geographies"
    ],
    conclusion: "Through CC&C's expertise, the client achieved a unified architecture vision spanning continents—transforming the way teams collaborate, innovate, and scale using BIAN as the foundation for enterprise excellence.",
    image: "/assets/Images/Global.png"
  }
];

const archiveEntries = [
  {
    type: "Position",
    subject: "AI readiness",
    title: "Readiness is decided in the architecture, long before the model arrives",
    description: "Why artificial intelligence readiness turns on semantics, service boundaries and decision provenance rather than on model selection, and what that means for a bank.",
    status: "Published now"
  },
  {
    type: "Article",
    subject: "BIAN",
    title: "Getting ready for BIAN",
    description: "What an institution has to have in place before adopting the Service Landscape is useful.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "IT4IT",
    title: "A CIO level view of IT4IT",
    description: "The standard read from the top of the technology function rather than from inside it.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "IT4IT",
    title: "Is IT4IT the architecture for DevOps and SAFe?",
    description: "Whether a reference architecture for managing digital delivery fits the way delivery is now organised.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "IT4IT",
    title: "Seven reasons why IT4IT is good news for enterprise IT",
    description: "The argument for architecting the technology function itself.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "IT4IT",
    title: "IT4IT and TOGAF: how do they fit together?",
    description: "Two Open Group standards that answer different questions, and how they are used together.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "IT4IT",
    title: "Why the new IT4IT reference architecture is a game changer",
    description: "What changed in the standard and why it mattered.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "TOGAF",
    title: "Why I still like TOGAF",
    description: "A defence of the method against the objection that it is too heavy to use.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "TOGAF",
    title: "TOGAF certified. Congrats. Now what next?",
    description: "What a newly certified practitioner should do with the certification.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "TOGAF",
    title: "What is TOGAF Essentials 2018 and why does it matter?",
    description: "A change to the certification path, and its consequences for practitioners.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Practice",
    title: "How do we relate to The Open Group?",
    description: "The relationship between the practice and the standards body.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Transformation",
    title: "Business transformation or digital transformation: what is the difference?",
    description: "A distinction that is usually skipped and usually matters.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Practice",
    title: "Do you really need an architecture tool?",
    description: "When a repository earns its cost and when it becomes the work.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Practice",
    title: "Enterprise architecture maturity",
    description: "What maturity means for an architecture function, and how to assess it honestly.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Transformation",
    title: "Is your organization like a layer cake?",
    description: "On organisational layering and the architecture that results from it.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Practice",
    title: "Architecture foundations for the digital age",
    description: "What holds up when the delivery model changes underneath the architecture.",
    status: "Recovered from the public archive. Being restored to its original address."
  },
  {
    type: "Article",
    subject: "Sector",
    title: "eHealth vision",
    description: "Architecture in a health context, from an earlier engagement.",
    status: "Recovered from the public archive. Being restored to its original address."
  }
];

export default function Insights() {
  const [, setLocation] = useLocation();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-page="insights"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-page', 'insights');
      jsonLdScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://ccandcsolutions.com/insights#localbusiness",
            "name": "CCandC Solutions",
            "url": "https://ccandcsolutions.com/insights",
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
            "@id": "https://ccandcsolutions.com/insights#organization",
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
            "@id": "https://ccandcsolutions.com/insights#service",
            "name": "CCandC Insights and Industry Solutions",
            "serviceType": "Business Insights, Analytics and Consulting Services",
            "url": "https://ccandcsolutions.com/insights",
            "provider": {
              "@id": "https://ccandcsolutions.com/insights#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://ccandcsolutions.com/insights#breadcrumb",
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
                "name": "Insights",
                "item": "https://ccandcsolutions.com/insights"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://ccandcsolutions.com/#website",
            "url": "https://ccandcsolutions.com/",
            "name": "CCandC Solutions",
            "publisher": {
              "@id": "https://ccandcsolutions.com/insights#organization"
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
      <section 
        className="pt-24 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/Insights.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Client <span className="text-primary">Transformations</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Real success stories from leading organizations worldwide—empowering banks and financial 
              institutions to achieve excellence through BIAN and enterprise architecture
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted/30 border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Insights</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Writing on architecture, standards and what actually changes.
            </h2>
            <p className="mx-auto max-w-4xl text-lg text-muted-foreground leading-relaxed">
              CC and C published consistently on enterprise architecture for over a decade, and seventeen of those articles survive in the public archive. They are being restored to this section, each at the address it originally held, because the arguments in them have not aged and the search history attached to them is worth recovering.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm">
            <button className="premium-button px-5 py-2.5 rounded-lg font-semibold">Read the position</button>
            <button className="border border-border bg-card px-5 py-2.5 rounded-lg font-semibold text-foreground hover:bg-muted transition-colors">Suggest a subject</button>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-12">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Archived articles</div>
              <div className="text-3xl font-bold text-foreground">17</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Subjects</div>
              <div className="text-base font-semibold text-foreground">IT4IT, TOGAF, BIAN</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Restoration</div>
              <div className="text-base font-semibold text-foreground">In progress</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Original URLs</div>
              <div className="text-base font-semibold text-foreground">Preserved</div>
            </div>
          </div>

          <div className="mb-16 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">In brief</h3>
            <ul className="space-y-3 text-base text-muted-foreground leading-relaxed">
              <li>• Seventeen CC and C articles have been recovered from the public archive and are being restored to this section.</li>
              <li>• Each will be republished at a URL that preserves its original slug, so the historic search signal transfers.</li>
              <li>• The largest group concerns IT4IT, where CC and C published repeatedly on the standard and its relationship to TOGAF and DevOps.</li>
              <li>• The current position piece on AI readiness is published and is the argument the older writing leads towards.</li>
              <li>• New writing will appear here rather than on a third party platform, so it accrues to this domain.</li>
            </ul>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why this section is thin today</h3>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                The archive is being restored, deliberately slowly. The previous site went through three platform migrations without redirects, and the article archive was among the casualties. Seventeen articles have been located in the public web archive, spanning IT4IT, TOGAF, business transformation, architecture maturity and architecture tooling.
              </p>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                Restoring them properly is slower than reposting them. Each needs its original address preserved so the historic search signal transfers, its claims checked against what has changed since publication, and a note where the argument has moved on. An article republished carelessly reads as neglect rather than as heritage.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                They will appear here as that work completes. In the meantime the position piece on AI readiness is the current argument, and it is the one the older writing was heading towards.
              </p>
            </div>
          </div>

          <div className="mb-16 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Published now</h3>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h4 className="text-2xl font-bold text-foreground mb-3">Architecture for AI readiness</h4>
              <p className="text-base text-muted-foreground mb-5">
                Why readiness is decided by semantics, service boundaries and decision provenance rather than by model selection, and what that means for a bank.
              </p>
              <button className="premium-button px-5 py-2.5 rounded-lg font-semibold">Read the position</button>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Everything in one place</h3>
            <div className="mb-6 flex flex-wrap gap-2 text-sm">
              {['All', 'Position', 'Article', 'AI readiness', 'BIAN', 'IT4IT', 'Practice', 'Sector', 'TOGAF', 'Transformation'].map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground">{tag}</span>
              ))}
            </div>

            <div className="space-y-4">
              {archiveEntries.map((entry, index) => (
                <div key={`${entry.title}-${index}`} className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{entry.type}</span>
                    <span>•</span>
                    <span>{entry.subject}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">{entry.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">{entry.description}</p>
                  <p className="text-sm text-muted-foreground">{entry.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Questions we are asked</h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-2">Why restore old articles rather than write new ones?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Both, and the old ones first because they carry a search history that new writing has to earn from nothing. An article that has been cited and linked for years is a more valuable asset than a new post, provided it is still true.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-2">Will the original URLs still work?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  That is the point of doing it this way. Each restored article keeps its original slug under this section, and the historic addresses redirect to it, so existing links and search results resolve rather than breaking.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h4 className="text-lg font-bold text-foreground mb-2">Do you publish on other platforms?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Sparingly, and not as the primary home. Writing published only on a third party platform builds that platform’s standing rather than ours, which is a lesson this rebuild exists to apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="service-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <CardContent className="p-0 flex flex-col flex-grow">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-auto object-cover" 
                    data-testid={`img-case-study-${caseStudy.id}`}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-base text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {caseStudy.summary}
                    </p>
                    <button 
                      onClick={() => setSelectedCaseStudy(caseStudy)}
                      className="text-accent font-semibold hover:underline flex items-center mt-auto"
                      data-testid={`button-read-case-study-${caseStudy.id}`}
                    >
                      Read Case Study <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Thought <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert perspectives on BIAN, enterprise architecture, and the future of banking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <i className="fab fa-linkedin text-3xl text-[#0A66C2] mr-3"></i>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-3">
                      From "Signatory" to "Agentic AI": Building Disruption-Resilient Banking with BIAN
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  An exploration of how banks can move beyond traditional signatory management toward AI-driven authority and identity verification — building disruption-resilient architectures through BIAN principles.
                </p>
                <a
                  href="https://www.linkedin.com/pulse/from-signatory-agentic-ai-building-banking-bian-mamta-sarangal-fkgyc/?trackingId=%2Blp7v25rRt6t6co%2BuEpJNA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline flex items-center"
                  data-testid="link-thought-leadership-1"
                >
                  Read on LinkedIn <i className="fab fa-linkedin ml-2"></i>
                </a>
              </CardContent>
            </Card>

            <Card className="service-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <i className="fab fa-linkedin text-3xl text-[#0A66C2] mr-3"></i>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-3">
                      The Role of Service Domain Specialization in Adopting BIAN
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  A deep dive into how banks can tailor BIAN's service domains to fit unique business models, technologies, and geographies — balancing standardization with strategic specialization for true agility.
                </p>
                <a
                  href="https://www.linkedin.com/pulse/role-service-domain-specialization-adopting-bian-banking-sarangal-xd35c/?trackingId=%2Blp7v25rRt6t6co%2BuEpJNA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline flex items-center"
                  data-testid="link-thought-leadership-2"
                >
                  Read on LinkedIn <i className="fab fa-linkedin ml-2"></i>
                </a>
              </CardContent>
            </Card>

            <Card className="service-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <i className="fab fa-linkedin text-3xl text-[#0A66C2] mr-3"></i>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-3">
                      BIAN Demystified
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Think of BIAN as the IKEA of banking—standardized building blocks that let banks assemble smarter, simpler architectures that stand the test of time.
                </p>
                <a
                  href="https://www.linkedin.com/pulse/bian-demystified-nishan-jebanasam-vhntc/?trackingId=E39BBrAxQ6KRxDcN3dFFew%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline flex items-center"
                  data-testid="link-thought-leadership-3"
                >
                  Read on LinkedIn <i className="fab fa-linkedin ml-2"></i>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={() => setSelectedCaseStudy(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCaseStudy && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground pr-8">
                  {selectedCaseStudy.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Hero Image */}
                <img 
                  src={selectedCaseStudy.image} 
                  alt={selectedCaseStudy.title}
                  className="w-full h-64 object-cover rounded-xl" 
                />

                {/* About the Client */}
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <i className="fas fa-building text-primary mr-3"></i>
                    About the Client
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.client}
                  </p>
                </div>

                {/* The Challenge */}
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <i className="fas fa-exclamation-triangle text-accent mr-3"></i>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                {/* Our Role */}
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <i className="fas fa-users text-secondary mr-3"></i>
                    Our Role
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.role}
                  </p>
                </div>

                {/* Outcomes & Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <i className="fas fa-chart-line text-primary mr-3"></i>
                    Outcomes & Benefits
                  </h3>
                  <ul className="space-y-2">
                    {selectedCaseStudy.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-3 flex-shrink-0"></i>
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conclusion */}
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <i className="fas fa-lightbulb text-primary mr-3"></i>
                    Conclusion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.conclusion}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => {
                      setSelectedCaseStudy(null);
                      setLocation("/contact");
                    }}
                    className="premium-button px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                    data-testid="button-start-your-transformation"
                  >
                    Start Your Transformation
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                  <button 
                    onClick={() => setSelectedCaseStudy(null)}
                    className="border-2 border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all"
                    data-testid="button-close-modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the leading organizations who have transformed their enterprise architecture 
            with CC&C Solutions. Let's discuss how we can help you achieve your transformation goals.
          </p>
          <button 
            onClick={() => setLocation("/contact")}
            className="premium-button px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            data-testid="button-get-started"
          >
            Get Started Today
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
