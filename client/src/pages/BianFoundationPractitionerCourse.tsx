import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const reasons = [
  "CC&C is a recognised member of the BIAN organization and acts as a BIAN adoption partner for several banks worldwide.",
  "As a BIAN-accredited training provider with a global footprint, CC&C brings a wealth of experience and knowledge to every course.",
  "CC&C actively contributes to BIAN working groups, keeping the training at the forefront of the latest developments and best practices within the BIAN framework.",
  "A CC&C principal consultant co-presented BIAN's 'What's New in the Foundation Certification, Version 3' webinar alongside BIAN's Lead Architect and Executive Director.",
  "CC&C has delivered BIAN training and advisory work for HSBC, ANZ, NAB, TD Bank, TDECU and OTP Group, among others.",
  "Your trainer is a banking architecture consultant with hands-on BIAN implementation experience, not a generalist reading from a slide deck.",
  "Both exam vouchers are included in the course fee, with no separate booking or cost.",
  "The Practitioner component includes a full case study applying BIAN to real banking architecture problems.",
];

const audience = [
  "Enterprise, solution, business and information architects",
  "IT and systems architects, and integration specialists working on interoperability",
  "Consultants and senior consultants guiding banking transformation programmes",
  "Developers and API designers working with BIAN-aligned systems",
  "Business analysts and functional designers working on interoperability projects",
  "Tooling providers, software solution providers, integrators and third-party service providers to the banking industry",
];

const outcomes = [
  "Explain what BIAN is, its benefits, and how the BIAN Framework achieves them",
  "Describe the BIAN Metamodel, Service Landscape, Service Domains and Business Object Model",
  "Apply BIAN's design principles and architectural elements to structure banking domains and services",
  "Use the BIAN Reference Architecture to create more transparent, modular and interoperable ICT systems",
  "Evaluate and align BIAN with other standards and frameworks used in financial services, including TOGAF",
  "Tailor and introduce BIAN within an enterprise setting, from pilot to large-scale adoption",
  "Sit and pass both the BIAN Foundation Certification exam and the BIAN Banking Architecture Practitioner Certification exam",
];

const individualBenefits = [
  "A globally recognised qualification in banking architecture, backed by BIAN itself rather than a third-party interpretation of the standard",
  "A complete certification pathway from Foundation through to applied Practitioner-level skill, rather than knowledge that stops at theory",
  "Recognition as a certified professional able to apply BIAN in real-world banking architecture and transformation work",
  "A shared vocabulary for working with BIAN-certified architects, consultants and vendors across the banking industry",
  "Both certifications completed in three days, with exam vouchers and preparation support built in rather than left to self-study",
];

const organisationBenefits = [
  "A shared architectural language connecting business and IT, reducing miscommunication in banking transformation and integration programmes",
  "Staff who can go beyond recognising BIAN concepts to designing and evolving interoperable, modular banking architectures with them",
  "Reduced integration costs and improved interoperability across platforms, vendors and ecosystems through standardised service boundaries",
  "Confidence that certified staff can work to the same standard as partners, vendors and other banks already using BIAN",
  "Training delivered by consultants trusted by major banks including HSBC, ANZ, NAB, TD Bank and OTP Group, and recognised by BIAN itself",
];

const included = [
  "Exam vouchers for both the BIAN Foundation Certification exam and the BIAN Banking Architecture Practitioner Certification exam",
  "The BIAN 2nd Edition reference book",
  "Full course materials and a practical case study",
  "Practice exams and mock exams to build exam readiness",
  "Structured exam preparation support extending beyond the classroom",
  "Post-training support as participants begin applying BIAN in practice",
  "A CC&C certificate of completion, alongside the official BIAN Foundation and Practitioner certificates and digital badges on passing",
];

const foundationExamFacts = [
  ["Duration", "60 minutes"],
  ["Format", "60 multiple-choice questions"],
  ["Conditions", "Closed book"],
  ["Pass mark", "70 percent"],
];

const practitionerExamFacts = [
  ["Duration", "60 minutes"],
  ["Format", "60 multiple-choice questions"],
  ["Conditions", "Closed book"],
  ["Pass mark", "70 percent (at least 42 of 60 correct)"],
  ["Question style", "One to many correct answers, including negative questions"],
];

const examWeights = [
  ["Architecture in depth", "36%"],
  ["Applying the standard across layers and transversal views", "27%"],
  ["General application ability", "12%"],
  ["Introducing BIAN", "12%"],
  ["Principles and approach", "10%"],
  ["BIAN's relationship to TOGAF", "3%"],
];

const testimonials = [
  {
    quote: "ANZ has discovered CC & C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation.",
    author: "ANZ Bank",
    role: "Enterprise Architect",
  },
  {
    quote: "My appreciation to CC&C for such an insightful training on BIAN.",
    author: "Alfredo Palafox",
    role: "Deputy Chief Architect LAM, HSBC",
  },
  {
    quote: "CC&C's BIAN course gave me an excellent introduction into banking standards and certifications.",
    author: "Abhishek Das",
    role: "NTT Data",
  },
];

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function ExamFacts({ items }: { items: string[][] }) {
  return <dl className="mt-6 space-y-4">{items.map(([label, value]) => <div key={label} className="flex justify-between gap-6 border-b border-border pb-3 last:border-0"><dt className="text-muted-foreground">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>)}</dl>;
}

export default function BianFoundationPractitionerCourse() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BIAN Foundation and Practitioner Certification Training | CC&C Solutions";
    return () => { document.title = "CC&C Solutions"; };
  }, []);

  const goToContact = () => setLocation("/#contact");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-[#0b1728] text-white">
          <div
            className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_48%,rgba(143,199,255,0.16),transparent_32%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]"
            aria-hidden="true"
          >
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
              <Link href="/ccandc-training">
                <a className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8fc7ff] transition-colors hover:text-white">
                  <ArrowRight
                    className="h-4 w-4 rotate-180"
                    aria-hidden="true"
                  />
                  Back to Training
                </a>
              </Link>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">
                BIAN-accredited training
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                BIAN Foundation and Practitioner Certification Training
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
                CC&amp;C's leadership position in BIAN certification training,
                adoption, and implementation is helping banks fast-track BIAN
                learning. This three-day, instructor-led programme takes
                participants from BIAN Foundation through to BIAN Banking
                Architecture Practitioner, the level at which professionals
                apply BIAN to real-world banking architecture and transformation
                work.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={goToContact}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5"
                >
                  Speak with a training consultant{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div
              className="relative flex min-h-[280px] items-center justify-center border border-white/25 bg-white/5 p-8"
              aria-label="Three-day BIAN certification pathway"
            >
              <div
                className="absolute left-1/2 top-10 bottom-10 w-px bg-[#8fc7ff]/40"
                aria-hidden="true"
              />
              <div className="relative w-full max-w-sm space-y-4 text-center">
                <div className="border border-[#8fc7ff]/40 bg-[#0b1728]/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">
                    Day 1
                  </p>
                  <p className="mt-2 text-xl font-bold">BIAN Foundation</p>
                  <p className="mt-1 text-sm text-white/65">
                    Learn the framework · sit Foundation exam
                  </p>
                </div>
                <div className="border border-[#e5bc68]/60 bg-[#0b1728]/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
                    Days 2–3
                  </p>
                  <p className="mt-2 text-xl font-bold">BIAN Practitioner</p>
                  <p className="mt-1 text-sm text-white/65">
                    Apply the standard · sit Practitioner exam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-10">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              ["Duration", "3 days · Foundation + Practitioner", Laptop],
              ["Format", "Virtual, in-person, or private in-house", Users],
              [
                "Prerequisites",
                "None to begin; Foundation before Practitioner exam",
                BookOpen,
              ],
              [
                "Exams and vouchers",
                "Both exam vouchers included",
                ClipboardCheck,
              ],
            ].map(([label, value, Icon]) => (
              <div
                key={label as string}
                className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"
              >
                <Icon
                  className="mt-1 h-6 w-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {label as string}
                  </p>
                  <p className="mt-1 font-semibold">{value as string}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Why choose CC&amp;C for BIAN training
              </p>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Learn BIAN from the people helping banks put it to work.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                BIAN training from CC&amp;C is delivered by consultants who work
                with the standard directly, not just teach it, and who are
                trusted by some of the world's largest banks to guide their BIAN
                adoption.
              </p>
              <div className="mt-10">
                <BulletList items={reasons} />
              </div>
            </div>
            <div
              className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10"
              aria-label="BIAN architecture concepts"
            >
              <div
                className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/40"
                aria-hidden="true"
              />
              <div
                className="absolute left-0 top-1/2 h-px w-full bg-[#8fc7ff]/40"
                aria-hidden="true"
              />
              <div className="relative grid h-full min-h-[325px] grid-cols-2 items-center gap-8 text-center">
                <div className="border border-primary/30 bg-background/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Architecture
                  </p>
                  <p className="mt-2 font-bold">Service Domains</p>
                </div>
                <div className="border border-[#b07d18]/40 bg-background/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">
                    Landscape
                  </p>
                  <p className="mt-2 font-bold">Business Scenarios</p>
                </div>
                <div className="border border-[#b07d18]/40 bg-background/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">
                    Information
                  </p>
                  <p className="mt-2 font-bold">Business Object Model</p>
                </div>
                <div className="border border-primary/30 bg-background/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Interoperability
                  </p>
                  <p className="mt-2 font-bold">Semantic APIs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="relative min-h-[330px] overflow-hidden border border-border bg-muted/40">
              <img src="/assets/Images/togaf-corporate-team.jpg" alt="Colleagues collaborating in a professional workplace" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-[#0b1728]/90 p-6 text-white">
                <p className="text-lg font-semibold">A pathway from shared language to practical skill</p>
                <p className="mt-2 max-w-sm text-sm text-white/75">Build BIAN foundations, then use the standard in banking architecture and transformation work.</p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Who this course is for
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                A shared starting point, followed by applied practice.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The Foundation days suit anyone who needs a shared language
                connecting business and IT in a bank. The Practitioner days are
                aimed specifically at those who will apply BIAN in architecture,
                design, or transformation work.
              </p>
              <div className="mt-8">
                <BulletList items={audience} />
              </div>
              <p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">
                There are no formal prerequisites to begin at Foundation level.
                To sit the Practitioner exam, participants must hold the BIAN
                Foundation Certification; Day 1 delivers that Foundation
                certification before the Practitioner content begins on Days 2
                and 3.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">
                  Day 1 · Foundation
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Understand BIAN, its framework and architecture.
                </h2>
                <p className="mt-6 leading-relaxed text-white/70">
                  Day 1 introduces BIAN and its framework: the BIAN
                  Association's vision, mission, goals and benefits; BIAN's
                  principles and agile approach; how BIAN delivers benefit
                  across the business, application/data and technology layers;
                  how BIAN evolves as a member-driven architecture; and the BIAN
                  Framework as a toolbox of models, papers and certifications.
                </p>
                <p className="mt-5 leading-relaxed text-white/70">
                  Participants are introduced to the BIAN Architecture itself:
                  the Metamodel, Service Landscape, Service Domains, Service
                  Operations and Semantic APIs, the Business Object Model,
                  Business Scenarios and Wireframes, and Business Capability,
                  closing with a practical activity applying BIAN.
                </p>
              </div>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
                  Days 2–3 · Practitioner
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Apply BIAN to enterprise architecture.
                </h2>
                <p className="mt-6 leading-relaxed text-white/70">
                  Practitioner days go deeper into a holistic view of the
                  enterprise; BIAN for the business layer, including business
                  architecture, business change and investment portfolio,
                  business capabilities and high-level business design; and BIAN
                  and information architecture, including the Business Object
                  Model, Control Record and Information Profile.
                </p>
                <p className="mt-5 leading-relaxed text-white/70">
                  The programme also covers Service Operations, Semantic APIs,
                  application architecture styles and future-proof APIs,
                  tailoring BIAN for the enterprise, and how BIAN relates to
                  TOGAF and other standards bodies. It closes with a case study
                  applying the full BIAN Reference Architecture to a real
                  banking scenario.
                </p>
              </div>
            </div>
            <div className="mt-14 border-t border-white/15 pt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
                Learning outcomes
              </p>
              <p className="mb-7 leading-relaxed text-white/70">
                By the end of the three days, participants will be able to:
              </p>
              <BulletList items={outcomes} light />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Benefits
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Value for individuals and organisations.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The course is designed to deliver value both to the individual
                sitting it and to the organisation sponsoring it.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="border-t-4 border-primary bg-muted/40 p-8">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  For individuals
                </h3>
                <BulletList items={individualBenefits} />
              </div>
              <div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <Users className="h-7 w-7 text-[#b07d18]" />
                  For organisations
                </h3>
                <BulletList items={organisationBenefits} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Format and delivery
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Three consecutive days, shaped for your team.
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  The course runs over three consecutive days and is available
                  as a virtual classroom, an in-person classroom session, or as
                  a private in-house programme delivered exclusively for one
                  organisation.
                </p>
                <div className="mt-8 space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      Virtual classroom:
                    </strong>{" "}
                    instructor-led, live sessions, suited to distributed teams
                  </p>
                  <p>
                    <strong className="text-foreground">
                      In-person classroom:
                    </strong>{" "}
                    full-day sessions at a fixed venue
                  </p>
                  <p>
                    <strong className="text-foreground">
                      In-house / corporate:
                    </strong>{" "}
                    private delivery for one organisation, with the case study
                    shaped around its banking architecture context
                  </p>
                </div>
                <p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">
                  Insert current public class dates and pricing here once
                  confirmed.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  What is included
                </h2>
                <div className="mt-8">
                  <BulletList items={included} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Certification
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Two exams complete the pathway.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Participants sit the BIAN Foundation Certification exam after
                Day 1 and the BIAN Banking Architecture Practitioner
                Certification exam after Day 3. Passing Foundation is required
                before the Practitioner exam.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClipboardCheck className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  After Day 1
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  BIAN Foundation Certification exam
                </h3>
                <ExamFacts items={foundationExamFacts} />
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  The Foundation Certificate does not expire.
                </p>
              </article>
              <article className="border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ClipboardCheck className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">
                  After Day 3
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  BIAN Banking Architecture Practitioner exam
                </h3>
                <ExamFacts items={practitionerExamFacts} />
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  The Practitioner certificate is valid for two years.
                </p>
                <div className="mt-7 border-t border-border pt-6">
                  <h4 className="font-bold">
                    Practitioner exam topic weighting
                  </h4>
                  <dl className="mt-4 space-y-3">
                    {examWeights.map(([topic, weight]) => (
                      <div
                        key={topic}
                        className="flex justify-between gap-4 text-sm"
                      >
                        <dt className="text-muted-foreground">{topic}</dt>
                        <dd className="shrink-0 font-semibold">{weight}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </div>
            <p className="mt-8 max-w-4xl leading-relaxed text-muted-foreground">
              Both exams are taken online and can be sat via remote proctoring
              or in person at an invigilated exam location. Both audit
              candidates at Bloom Levels 1 and 2: remembering and understanding.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What our clients say
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Trusted by teams putting BIAN into practice.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="flex h-full flex-col border border-border bg-background p-7"
                >
                  <BookOpen
                    className="mb-5 h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                  <blockquote className="flex-1 leading-relaxed text-muted-foreground">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
              Build a shared language before transformation gets busy.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              A shared architectural language across business and IT tends to
              matter most once a bank is already deep into an integration or
              transformation programme, which is precisely when there is least
              time to build it. If your team is weighing when to bring this
              training in, a conversation with CC&amp;C is a good place to
              start.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button
                onClick={goToContact}
                className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]"
              >
                Speak with a training consultant{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
        <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">
          BIAN® is a registered trademark of the Banking Industry Architecture
          Network. This page describes a course accredited under BIAN's training
          and certification programme.
        </p>
      </main>
      <Footer />
    </div>
  );
}