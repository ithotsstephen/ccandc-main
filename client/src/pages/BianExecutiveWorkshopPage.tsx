import { useEffect } from "react";
import { ArrowRight, Check, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const reasonsToChoose = [
  "BIAN-certified",
  "BIAN Best-in-Class Partner award winner, 2024 and 2025",
  "An active contributor to the BIAN framework itself, not simply a licensed trainer",
  "A global footprint, trusted by major banks including HSBC, ANZ, NAB, TD Bank and OTP Group",
];

const audience = [
  "C-suite executives, CIOs, CTOs and CDOs",
  "Heads of Architecture",
  "Senior business and technology leaders in banks and financial services",
];

const covered = [
  "What BIAN is and why it matters now",
  "How BIAN applies to your organisation",
  "Business value: cost, speed, risk, and AI readiness",
  "Real-world case studies from banking",
  "A decision framework for BIAN adoption",
];

const benefits = [
  "Reduced architectural complexity",
  "Faster time-to-market",
  "Better data governance",
  "A credible foundation for AI and digital transformation",
  "Informed, confident sponsorship of BIAN adoption at the leadership level",
];

const included = [
  "A facilitated executive workshop, delivered on-site or virtually, half-day or full-day",
  "Real-world banking case studies drawn from CC&C's own client experience",
  "A decision framework for BIAN adoption tailored to your organisation",
];

const testimonials = [
  {
    quote:
      "Our partnership with CC&C Solutions has been transformative in accelerating our digital transformation journey. Their expertise in enterprise architecture, BIAN operating model, and agile methodologies has been instrumental in helping us shift to a product-oriented organization. Through their training and consulting services, we've gained the tools and strategies needed to achieve our vision of becoming a leading credit union in the US.",
    author: "Ashish Chopra",
    role: "Chief Information Officer, Texas Dow Employee Credit Union",
  },
  {
    quote:
      "I sincerely thank the entire CC&C team for your excellent support throughout the BIAN adoption process. I truly appreciate the professionalism, responsiveness, and quality of work you've brought to this collaboration.",
    author: "Domonkos Kertesz",
    role: "Chief IT Architect, OTP Group",
  },
  {
    quote:
      "ANZ has discovered CC&C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation.",
    author: "Arran Price",
    role: "Enterprise Architect, ANZ New Zealand",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
          <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BianExecutiveWorkshopPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BIAN Executive Workshop | CC&C Solutions";
    return () => {
      document.title = "CC&C Solutions";
    };
  }, []);

  const goToContact = () => setLocation("/#contact");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-[#0b1728] text-white">
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_48%,rgba(143,199,255,0.16),transparent_32%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]" aria-hidden="true">
            <div className="hero-drift-slow absolute -right-2 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/25" />
            <div className="absolute right-[11%] top-1/2 h-[230px] w-[230px] -translate-y-1/2 rounded-full border border-[#e5bc68]/40" />
            <div className="absolute inset-y-0 right-0 w-[58%] opacity-45 [background-image:linear-gradient(rgba(143,199,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">BIAN Translated for the Boardroom</p>
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">BIAN Executive Workshop</h1>
              <p className="mt-7 text-lg leading-relaxed text-white/75 sm:text-xl">
                For BIAN to gain traction in any organisation, leadership needs to understand it, not as a technical standard, but as a strategic lever. CC&amp;C&apos;s BIAN Executive Workshop is purpose-built for C-suite executives, CIOs, CTOs, CDOs, and senior leaders in both technology and business. The workshop cuts through the complexity of BIAN and translates it into the language of business outcomes, giving participants a clear understanding of what BIAN is, how it applies to their organisation, and, critically, how it delivers tangible benefit: reduced complexity, faster time-to-market, better data governance, and a credible foundation for AI and digital transformation.
              </p>
              <div className="mt-8 grid gap-5 border-y border-white/20 py-5 sm:grid-cols-2">
                <p className="leading-relaxed"><strong className="text-white">Delivery Format:</strong> Half-day or full-day session, on-site or virtual</p>
                <p className="leading-relaxed"><strong className="text-white">Audience:</strong> C-suite executives, CIOs, CTOs, CDOs, Heads of Architecture, and senior business and technology leaders in banks and financial services</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button onClick={goToContact} className="inline-flex items-center gap-2 bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">
                  Speak with a training consultant <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="text-white/55" aria-hidden="true">|</span>
                <button onClick={goToContact} className="border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the workshop outline</button>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why CC&amp;C</p>
              <h2 className="text-3xl font-bold sm:text-5xl">Why CC&amp;C</h2>
              <div className="mt-8"><BulletList items={reasonsToChoose} /></div>
            </div>
            <div className="border-l-2 border-[#e5bc68] pl-8 lg:pl-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this workshop is for</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Who this workshop is for</h2>
              <div className="mt-8"><BulletList items={audience} /></div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What&apos;s covered</p>
              <h2 className="text-3xl font-bold sm:text-4xl">What&apos;s covered</h2>
              <div className="mt-8"><BulletList items={covered} /></div>
            </div>
            <div className="flex flex-col justify-center border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-lg leading-relaxed text-white/75">
                The session uses real-world banking case studies and CC&amp;C&apos;s own client experience to show how leading financial institutions are using BIAN to modernise their architecture, eliminate duplication, and unlock new capabilities, without committing to multi-year transformation programmes. Designed to be interactive and outcome-focused, the workshop equips senior leaders with the knowledge they need to sponsor, champion, and make informed decisions about BIAN adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What our clients say</p>
              <h2 className="text-3xl font-bold sm:text-4xl">What our clients say</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.author} className="flex h-full flex-col border-t-4 border-primary bg-muted/40 p-7">
                  <blockquote className="flex-1 text-lg leading-relaxed text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <figcaption className="mt-7 border-t border-border pt-5">
                    <p className="font-bold">— {testimonial.author}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold sm:text-4xl">Benefits</h2>
              </div>
              <div className="mt-8"><BulletList items={benefits} /></div>
            </div>
            <div className="border-t-2 border-[#e5bc68] pt-8 lg:border-l-2 lg:border-t-0 lg:pl-12 lg:pt-0">
              <h2 className="text-3xl font-bold sm:text-4xl">What is included</h2>
              <div className="mt-8"><BulletList items={included} /></div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Users className="mx-auto h-10 w-10 text-[#e5bc68]" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Next steps</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
              Talk to us about BIAN adoption. As your BIAN adoption partner, CC&amp;C is here to support your BIAN journey, from this first executive conversation through to full implementation.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button onClick={goToContact} className="inline-flex items-center gap-2 bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              <span className="text-white/55" aria-hidden="true">|</span>
              <button onClick={goToContact} className="border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the workshop outline</button>
            </div>
          </div>
        </section>
        <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">BIAN® is a registered trademark of the Banking Industry Architecture Network. This page describes a consulting engagement delivered by CC&amp;C, a BIAN-accredited training and adoption partner.</p>
      </main>
      <Footer />
    </div>
  );
}