import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const benefits = [
  "Senior practitioner-led: sessions are taught by architects who use the ArchiMate modeling language on live projects, not simply teach the notation.",
  "Exam voucher included: both the Foundation and Practitioner exam vouchers are included in the course fee, with no separate booking or cost.",
  "Hands-on modeling practice: participants build and critique ArchiMate models using an open source EA modelling tool and real case studies.",
  "Exclusive exam preparation support: structured revision guidance beyond the classroom, built around both exam formats.",
  "Post-training support: continued access to guidance as participants begin producing architecture artifacts in ArchiMate notation.",
];

const audience = [
  "Individuals who need a basic understanding of the ArchiMate modeling language",
  "Professionals working in roles associated with an architecture project who need to understand artifacts developed using ArchiMate notation",
  "Individuals who will be responsible for developing architecture artifacts using ArchiMate language notation",
  "Anyone wanting a recognised qualification demonstrating both knowledge of, and practical ability to apply, the ArchiMate modeling language",
];

const outcomes = [
  "Explain the notation, terminology and structure of the ArchiMate modeling language",
  "Apply the generic metamodel and the language's core relationships",
  "Model using the Motivation elements and the elements of the Strategy, Business, Application and Technology Layers",
  "Apply cross-layer modeling concepts and the Implementation and Migration Layer",
  "Apply the viewpoint mechanism and the language's customisation mechanisms to produce fit-for-purpose views",
  "Sit and pass both the ArchiMate 3 Part 1 and ArchiMate 3 Part 2 examinations",
];

const individualBenefits = [
  "A globally recognised, vendor-neutral qualification that strengthens both credibility and career prospects in enterprise architecture",
  "A structured, practical grounding in modeling notation, rather than a self-taught reading of the specification",
  "Hands-on experience producing and critiquing models against real case studies, ahead of producing them for live projects",
  "A shared visual language for working with other ArchiMate-certified architects, consultants and stakeholders",
  "A certification pathway completed in three days, with exam preparation support built in rather than left to self-study",
];

const organisationBenefits = [
  "A common modeling notation across teams, reducing ambiguity and rework in architecture documentation and reviews",
  "Faster, clearer communication of architecture decisions to technical and business stakeholders through consistent visual models",
  "Architecture artifacts that remain readable and maintainable as staff and consultants change over time",
  "A body of certified staff who can work confidently with external consultants, vendors and partners who model in ArchiMate",
  "A cost-efficient route to building internal modeling capability, with exam vouchers and preparation support included rather than procured separately",
];

const included = [
  "Exam vouchers for both the ArchiMate 3 Part 1 and ArchiMate 3 Part 2 examinations",
  "Full course materials, including reference guides for use after certification",
  "Structured exam preparation support extending beyond the classroom",
  "Post-course support as participants begin producing architecture artifacts in practice",
  "A certificate of completion and eligibility for The Open Group's professional badges on passing both exams",
];

function BulletList({ items, textClassName = "text-muted-foreground" }: { items: string[]; textClassName?: string }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${textClassName}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function ArchiMateFoundationPractitioner() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ArchiMate® 3 Foundation and Practitioner | CC&C Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute("content", "ArchiMate® 3 Foundation and Practitioner training from CC&C: a three-day, fully accredited programme with hands-on modeling, both exam vouchers and practitioner-led support.");
    return () => {
      document.title = "CC&C Solutions";
      metaDescription?.setAttribute("content", "CC&C Solutions - Enterprise Architecture Training and Consulting");
    };
  }, []);

  return <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <main>
      <section className="relative overflow-hidden bg-[#0b1728] text-white">
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_48%,rgba(143,199,255,0.16),transparent_32%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]" aria-hidden="true">
          <div className="absolute -right-24 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/20" />
          <div className="hero-drift-slow absolute -right-2 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/25" />
          <div className="absolute right-[11%] top-1/2 h-[230px] w-[230px] -translate-y-1/2 rounded-full border border-[#e5bc68]/40" />
          <div className="absolute right-[11%] top-1/2 h-px w-[230px] bg-[#e5bc68]/45" />
          <div className="absolute inset-y-0 right-0 w-[58%] opacity-45 [background-image:linear-gradient(rgba(143,199,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <Link href="/ccandc-training"><a className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8fc7ff] transition-colors hover:text-white"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />Back to Training</a></Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">The Open Group accredited training</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">ArchiMate® 3 Foundation and Practitioner</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">A three-day, fully accredited programme that takes participants through both ArchiMate® 3 certification levels, taught by senior practitioners who model enterprise architecture for a living, with hands-on modeling exercises built around real case studies.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></a><a href="/contact" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the course outline</a></div>
          </div>
          <div className="flex min-h-[280px] items-center justify-center border border-dashed border-white/40 bg-white/5 p-8 text-center text-sm text-white/60">Image placeholder: ArchiMate modeling / practitioner classroom</div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{[["Duration", "3 days", Laptop], ["Format", "Virtual, in-person, or private in-house", Users], ["Certification", "ArchiMate® 3 Foundation and Practitioner (3.2 Specification)", GraduationCap], ["Included", "Exam vouchers for both exams, course materials, exam preparation support, post-course support", BookOpen]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why train with CC&amp;C</p><h2 className="text-3xl font-bold sm:text-5xl">Learn to model from people who do it for a living.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">This course is delivered under full accreditation from The Open Group, so participants can be confident the curriculum, exam preparation and certification pathway all meet the required standard.</p><div className="mt-10"><BulletList items={benefits} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="ArchiMate Foundation and Practitioner journey diagram"><div className="absolute left-[22%] top-0 h-full w-px bg-[#8fc7ff]/35" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/45" /><div className="absolute left-[78%] top-0 h-full w-px bg-[#8fc7ff]/35" /><div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-[#8fc7ff]/45" /><div className="relative flex h-full min-h-[325px] flex-col justify-between"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span>Foundation</span><span>Practice</span><span>Practitioner</span></div><div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#e5bc68] bg-[#0b1728] text-center text-white shadow-[0_0_0_14px_rgba(229,188,104,0.08)]"><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">CC&amp;C</div><div className="mt-2 text-lg font-bold leading-tight">ArchiMate<br />Pathway</div></div></div><div className="grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground"><div className="border border-[#8fc7ff]/35 bg-white/60 p-3 dark:bg-white/5">Understand</div><div className="border border-[#e5bc68]/45 bg-white/60 p-3 dark:bg-white/5">Model</div><div className="border border-[#8fc7ff]/35 bg-white/60 p-3 dark:bg-white/5">Apply</div></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="flex min-h-[330px] items-center justify-center border border-dashed border-border bg-muted/40 p-8 text-center text-sm text-muted-foreground">Image placeholder: ArchiMate case studies or modeling workshop</div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">A practical path from reading models to producing them.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">The programme is built for professionals who need to read, produce or govern architecture artifacts in a shared modeling language, and for those who work alongside them.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">No prior ArchiMate or TOGAF certification is required. The course begins at Foundation level before progressing to Practitioner.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">From language fundamentals to applied modeling.</h2><p className="mt-6 leading-relaxed text-white/70">The Foundation component establishes the notation, terminology, structure and basic concepts of the ArchiMate modeling language: the generic metamodel, core relationships, Motivation elements, the Strategy, Business, Application and Technology Layers, cross-layer modeling, the Implementation and Migration Layer, and viewpoints.</p><p className="mt-6 leading-relaxed text-white/70">The Practitioner component builds on that base with applied practice: analyzing and applying the same structure and concepts to real modeling problems, including advanced concepts and customisation mechanisms, so participants can produce and defend architecture artifacts.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-4 text-lg font-semibold leading-relaxed text-white/80">By the end of the three days, participants will be able to:</p><BulletList items={outcomes} textClassName="text-white/70" /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Choose the setting that fits your team.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The course runs over three consecutive days and is available as a virtual classroom, an in-person classroom session, or as a private in-house programme delivered exclusively for one organisation.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual classroom:</strong> instructor-led, live sessions, suited to distributed teams</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery for one organisation, with modeling exercises shaped around that organisation's own architecture landscape</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">Two examinations, one complete pathway.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Participants sit two examinations to complete the certification pathway. Passing Part 1 alone earns ArchiMate 3 Foundation; passing both Part 1 and Part 2 earns ArchiMate 3 Practitioner.</p></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">ArchiMate 3 examinations</h3><div className="mt-6 space-y-5 text-muted-foreground"><div><p className="font-semibold text-foreground">Part 1: Foundation</p><p>60 minutes, 40 multiple-choice questions, closed book</p></div><div><p className="font-semibold text-foreground">Part 2: Practitioner</p><p>90 minutes, 8 complex multiple-choice scenario-based questions, open book</p></div></div><p className="mt-7 leading-relaxed text-muted-foreground">Both exams are supervised and can be taken at a Pearson VUE test centre or remotely via Pearson VUE OnVUE online proctored delivery. There is no prerequisite for either exam. The Open Group publishes the definitive directory of certified individuals and issues certificates and Open Badges on passing.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Build a shared modeling language before transformation gets busy.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">A shared modeling language matters most once several teams are documenting the same architecture in incompatible ways. If your team is weighing when to bring this training in, a conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></a><a href="/contact" className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the course outline</a></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">ArchiMate® is a registered trademark of The Open Group. This page describes a course accredited under The Open Group's licensing programme.</p>
    </main>
    <Footer />
  </div>;
}
