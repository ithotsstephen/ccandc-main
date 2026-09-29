import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const reasonsToChoose = [
  "CC&C is a recognised member of the BIAN organization and acts as a BIAN adoption partner for several banks worldwide.",
  "As a BIAN-accredited training provider with a global footprint, CC&C brings a wealth of experience and knowledge to every course.",
  "CC&C actively contributes to BIAN working groups, keeping the training at the forefront of the latest developments and best practices within the BIAN framework.",
  "A CC&C principal consultant co-presented BIAN's 'What's New in the Foundation Certification, Version 3' webinar alongside BIAN's Lead Architect and Executive Director.",
  "CC&C has delivered BIAN training and advisory work for HSBC, ANZ, NAB, TD Bank, TDECU and OTP Group, among others.",
  "Your trainer is a banking architecture consultant with hands-on BIAN implementation experience, not a generalist reading from a slide deck.",
  "The exam voucher is included in the course fee, with no separate booking or cost.",
  "A full case study helps participants apply BIAN to real banking architecture problems, not only recognise its concepts.",
];

const audience = [
  "Enterprise architects, solution architects, business and information architects",
  "IT and systems architects, and integration specialists",
  "Technology consultants and advisors in the financial sector",
  "Transformation and change managers",
  "Developers and API designers who work with BIAN-aligned systems",
  "Business analysts and functional designers working on interoperability projects",
  "Educators, trainers, or internal consultants supporting BIAN adoption within banks",
];

const outcomes = [
  "Explain the added value and intent of BIAN and translate it into architectural decisions",
  "Apply BIAN's design principles and architectural elements to structure banking domains and services",
  "Apply the BIAN Metamodel and Service Landscape in designing enterprise and solution architectures",
  "Model financial institutions using BIAN Service Domains, Business Scenarios and Capabilities",
  "Utilise BIAN artefacts such as the Control Record, Information Profile, Business Object Model and Semantic APIs",
  "Evaluate and align BIAN with other standards and frameworks used in financial services, including TOGAF and ArchiMate",
  "Tailor and introduce BIAN within an enterprise setting, from pilot to large-scale adoption",
  "Sit and pass the BIAN Banking Architecture Practitioner Certification exam",
];

const individualBenefits = [
  "Recognition as a certified professional able to apply the BIAN Standard in real-world banking architecture, not only recognise its concepts",
  "A globally recognised BIAN credential and digital badge, backed by BIAN itself",
  "Strengthened career opportunities in enterprise architecture and digital transformation",
  "Membership in the growing global community of BIAN certified professionals and practitioners",
  "Certification completed in two days, with the exam voucher and preparation support built in rather than left to self-study, which is not permitted for this certification",
];

const organisationBenefits = [
  "Staff who can go beyond recognising BIAN concepts to designing and evolving interoperable, modular banking architectures with them",
  "Reduced integration costs and improved interoperability across platforms, vendors and ecosystems through standardised service boundaries",
  "Improved enterprise manageability through modularity, clearer ownership, and controlled evolution of capabilities",
  "Confidence that certified staff can work to the same standard as partners, vendors and other banks already using BIAN",
  "Training delivered by consultants trusted by major banks including HSBC, ANZ, NAB, TD Bank and OTP Group, and recognised by BIAN itself",
];

const included = [
  "Exam voucher for the BIAN Banking Architecture Practitioner Certification exam",
  "The BIAN 2nd Edition reference book",
  "Full course materials and a practical case study",
  "Practice exams and mock exams to build exam readiness",
  "Structured exam preparation support extending beyond the classroom",
  "Post-training support as participants begin applying BIAN in practice",
  "A CC&C certificate of completion, alongside the official BIAN Banking Architecture Practitioner certificate and digital badge on passing",
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

function BulletList({ items, textClassName = "text-muted-foreground" }: { items: string[]; textClassName?: string }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${textClassName}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function BianPractitionerTraining() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BIAN Practitioner Certification Training | CC&C Solutions";
    return () => { document.title = "CC&C Solutions"; };
  }, []);

  const goToContact = () => setLocation("/#contact");

  return <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <main>
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
            <Link href="/ccandc-training"><a className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8fc7ff] transition-colors hover:text-white"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />Back to Training</a></Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">BIAN-accredited training</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">BIAN Practitioner Certification Training</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">CC&amp;C's leadership position in BIAN certification training, adoption, and implementation is helping banks fast-track their BIAN learning and your BIAN journey. This two-day, instructor-led programme takes BIAN Foundation-certified professionals from conceptual understanding to practical implementation, applying BIAN in real-world banking architecture and transformation work.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the course outline</button></div>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center border border-white/25 bg-white/5 p-8" aria-label="BIAN Practitioner certification pathway">
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-[#8fc7ff]/40" aria-hidden="true" />
            <div className="relative w-full max-w-sm space-y-5 text-center">
              <div className="border border-[#8fc7ff]/35 bg-[#0b1728]/90 p-4 text-sm font-semibold">BIAN Foundation Certification</div>
              <div className="mx-auto h-8 w-px bg-[#e5bc68]/70" aria-hidden="true" />
              <div className="border border-[#e5bc68]/60 bg-[#0b1728]/90 p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Apply the standard</p><p className="mt-2 text-xl font-bold">BIAN Banking Architecture Practitioner</p><p className="mt-2 text-sm text-white/65">Version 3 · Valid for 2 years</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">{[["Duration", "2 days · in-class only", Laptop], ["Format", "Virtual, in-person, or private in-house", Users], ["Prerequisite", "BIAN Foundation Certification", BookOpen], ["Exam voucher", "Included", ClipboardCheck], ["Certification", "BIAN Banking Architecture Practitioner, Version 3", GraduationCap]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why choose CC&amp;C for BIAN training</p><h2 className="text-3xl font-bold sm:text-5xl">Learn BIAN from the people helping banks put it to work.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">BIAN training from CC&amp;C is delivered by consultants who work with the standard directly, not just teach it, and who are trusted by some of the world's largest banks to guide their BIAN adoption.</p><div className="mt-10"><BulletList items={reasonsToChoose} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="BIAN architecture concepts"><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/40" aria-hidden="true" /><div className="absolute left-0 top-1/2 h-px w-full bg-[#8fc7ff]/40" aria-hidden="true" /><div className="relative grid h-full min-h-[325px] grid-cols-2 items-center gap-8 text-center"><div className="border border-primary/30 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Architecture</p><p className="mt-2 font-bold">Service Domains</p></div><div className="border border-[#b07d18]/40 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Landscape</p><p className="mt-2 font-bold">Business Scenarios</p></div><div className="border border-[#b07d18]/40 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Information</p><p className="mt-2 font-bold">Control Record</p></div><div className="border border-primary/30 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Interoperability</p><p className="mt-2 font-bold">Semantic APIs</p></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="flex min-h-[330px] items-center justify-center border border-dashed border-border bg-muted/40 p-8 text-center"><div><GraduationCap className="mx-auto h-12 w-12 text-primary" /><p className="mt-4 text-lg font-semibold">From shared concepts to practical architecture</p><p className="mt-2 max-w-sm text-sm text-muted-foreground">Apply BIAN across banking capabilities, information and service design.</p></div></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">For professionals ready to put BIAN into practice.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">This certification is the next level after BIAN Foundation. It is designed for professionals who want to apply the BIAN Standard in real-world banking architecture, going beyond conceptual understanding to practical implementation.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">BIAN Foundation Certification is a mandatory prerequisite. Self-study is not an accepted route to Practitioner certification; certification can only be achieved through an accredited training course. Working knowledge of business and/or application architecture is also recommended.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">Use the BIAN Reference Architecture in practice.</h2><p className="mt-6 leading-relaxed text-white/70">The course focuses on using the BIAN Reference Architecture for the Financial Industry to design, structure, and evolve interoperable and manageable banking capabilities and services. It develops a holistic view of the enterprise; covers BIAN for the business layer, including business architecture, business change and investment portfolio, business capabilities and high-level business design; and explores information architecture through the Business Object Model, Control Record and Information Profile. Participants also work with Service Operations, Semantic APIs, application architecture styles and future-proof APIs, learn to tailor BIAN for the enterprise, and examine its relationship to TOGAF and other standards bodies. The programme closes with a case study applying the full BIAN Reference Architecture to a real banking scenario.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-7 leading-relaxed text-white/70">By the end of the two days, participants will be able to:</p><BulletList items={outcomes} textClassName="text-white/70" /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Two days, delivered in-class.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Per BIAN's certification landscape, the course runs over two consecutive days and is delivered in-class only: as a virtual classroom, an in-person classroom session, or as a private in-house programme delivered exclusively for one organisation.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual classroom:</strong> instructor-led, live sessions, suited to distributed teams</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery for one organisation, with the case study shaped around its banking architecture context</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">One focused examination.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Certification is achieved by passing a single online examination, either via remote proctoring or in person at an invigilated exam location. It audits Bloom Levels 1 and 2: remembering and understanding. BIAN Foundation Certification is a mandatory prerequisite.</p><p className="mt-5 leading-relaxed text-muted-foreground">The BIAN Banking Architecture Practitioner Certificate is valid for two years.</p></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">BIAN Banking Architecture Practitioner exam</h3><div className="mt-6 grid gap-4 text-muted-foreground sm:grid-cols-3"><div><p className="text-sm">Duration</p><p className="font-semibold text-foreground">60 minutes</p></div><div><p className="text-sm">Format</p><p className="font-semibold text-foreground">60 multiple-choice questions</p></div><div><p className="text-sm">Conditions</p><p className="font-semibold text-foreground">Closed book</p></div></div><p className="mt-6 leading-relaxed text-muted-foreground">Pass mark: <strong className="text-foreground">70 percent (at least 42 of 60 correct)</strong>. Questions may have one to many correct answers, including negative questions.</p><div className="mt-8 border-t border-border pt-6"><h4 className="font-bold">Exam topic weighting</h4><dl className="mt-4 space-y-3">{examWeights.map(([topic, weight]) => <div key={topic} className="flex justify-between gap-4 text-sm"><dt className="text-muted-foreground">{topic}</dt><dd className="shrink-0 font-semibold text-foreground">{weight}</dd></div>)}</dl></div><p className="mt-7 leading-relaxed text-muted-foreground">Passing earns the official BIAN Banking Architecture Practitioner certificate and digital badge.</p></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What our clients say</p><h2 className="text-3xl font-bold sm:text-4xl">Trusted by teams putting BIAN into practice.</h2></div><div className="grid gap-6 lg:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.author} className="flex h-full flex-col border border-border bg-background p-7"><BookOpen className="mb-5 h-6 w-6 text-primary" aria-hidden="true" /><blockquote className="flex-1 leading-relaxed text-muted-foreground">“{testimonial.quote}”</blockquote><figcaption className="mt-6 border-t border-border pt-4"><p className="font-bold">{testimonial.author}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></figcaption></figure>)}</div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Build the capability before transformation gets busy.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Applying a shared architectural language in practice tends to matter most once a bank is already deep into an integration or transformation programme, which is precisely when there is least time to build the capability. If your team already holds BIAN Foundation and is weighing when to progress to Practitioner, a conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the course outline</button></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">BIAN® is a registered trademark of the Banking Industry Architecture Network. This page describes a course accredited under BIAN's training and certification programme.</p>
    </main>
    <Footer />
  </div>;
}