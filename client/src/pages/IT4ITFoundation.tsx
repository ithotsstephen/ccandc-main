import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const benefits = [
  "More than half of all IT4IT certified practitioners were trained by CC&C, a track record few other providers can match.",
  "We are active in the development of the standard itself, not simply licensed to teach it.",
  "Your trainer is a real architect with hands-on IT4IT experience, applying the reference architecture in practice rather than reciting it.",
  "The IT4IT certification examination voucher is included as part of the course fee, with no separate booking or cost.",
  "Course material goes beyond the official syllabus, with extra CC&C material and worked examples based on real use cases.",
  "The course prepares you to manage DevOps and digital products at scale, not just to pass an exam.",
];

const audience = [
  "Hands-on CIOs",
  "IT strategy and governance professionals",
  "IT architects, especially enterprise architects",
  "Enterprise IT business managers",
  "IT finance managers",
  "Infrastructure management leaders",
  "Consultants and IT services companies",
  "ITIL and ITSM professionals",
  "DevOps practitioners",
  "IT transformation leaders",
];

const outcomes = [
  "Understand the concept and structure of the IT4IT Reference Architecture and the Digital Product it is built around",
  "Explain the basic concepts and terminology of the IT4IT Value Streams",
  "Evaluate: understand how digital product ideas and demand are assessed for viability",
  "Explore: understand the design and architecture of a digital product before it is built",
  "Integrate: understand how a digital product's components are built and assembled",
  "Deploy: understand how a digital product is released into a production environment",
  "Release: understand how a digital product's service offers are made available to consumers",
  "Consume: understand how consumers request and use a digital product's service offers",
  "Operate: understand how a digital product is run, monitored and supported once live",
];

const individualBenefits = [
  "A globally recognised, vendor-neutral qualification and a clear entry point into IT management architecture",
  "A structured reference architecture for managing the business of IT, in place of a patchwork picked up on the job",
  "A working grasp of Digital Product and Value Stream concepts that underpin modern, product-based IT operating models",
  "A shared vocabulary for working with other IT4IT-certified professionals, architects and toolchain vendors",
  "Training from a provider that has trained more IT4IT certified practitioners than any comparable competitor, with exam preparation support built in",
];

const organisationBenefits = [
  "A common reference architecture across IT teams, reducing rework and miscommunication between strategy, delivery and operations functions",
  "A structured path toward product-based investment models, with clearer operational control and measurable value than a project-based approach",
  "A foundational, flexible reference architecture that accommodates DevOps, agile and cloud-native ways of working",
  "A body of certified staff who can work confidently with vendors, auditors and partners using the same standard",
  "A cost-efficient route to building internal IT4IT literacy, with the exam voucher and preparation support included",
];

const included = [
  "Exam voucher for the IT4IT 3 Foundation examination",
  "Full course materials, including reference guides and CC&C's own worked examples based on real use cases",
  "Structured exam preparation support extending beyond the classroom",
  "Post-course support as participants begin applying the reference architecture in practice",
  "A certificate of completion and eligibility for The Open Group's Open Badge on passing the exam",
];

function BulletList({ items, textClassName = "text-muted-foreground" }: { items: string[]; textClassName?: string }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${textClassName}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function IT4ITFoundation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IT4IT™ 3 Foundation Certification | CC&C Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute("content", "IT4IT™ 3 Foundation Certification training from CC&C: a two-day, fully accredited programme delivered by real IT4IT architects with hands-on experience.");
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
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">IT4IT™ 3 Foundation Certification</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">More than half of all IT4IT certified practitioners were trained by CC&amp;C. This two-day, fully accredited programme covers the IT4IT™ Standard, Version 3, taught by a real architect with hands-on IT4IT experience and active involvement in developing the standard itself.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></a><a href="/contact" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the course outline</a></div>
          </div>
          <div className="flex min-h-[280px] items-center justify-center border border-dashed border-white/40 bg-white/5 p-8 text-center text-sm text-white/60">Image placeholder: IT4IT architecture / practitioner classroom</div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{[["Duration", "2 days", Laptop], ["Delivery", "Virtual online, in-person, or private in-house", Users], ["Prerequisites", "None", BookOpen], ["Certification", "IT4IT™ 3 Foundation (The Open Group)", GraduationCap]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why choose CC&amp;C for IT4IT training</p><h2 className="text-3xl font-bold sm:text-5xl">Learn the standard from people who know it from the inside.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">IT4IT Foundation training from CC&amp;C is available everywhere, live over Zoom, and is delivered by people who know the standard from the inside rather than from a slide deck.</p><div className="mt-10"><BulletList items={benefits} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="IT4IT training journey diagram"><div className="absolute left-[22%] top-0 h-full w-px bg-[#8fc7ff]/35" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/45" /><div className="absolute left-[78%] top-0 h-full w-px bg-[#8fc7ff]/35" /><div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-[#8fc7ff]/45" /><div className="relative flex h-full min-h-[325px] flex-col justify-between"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span>Reference</span><span>Value</span><span>Operate</span></div><div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#e5bc68] bg-[#0b1728] text-center text-white shadow-[0_0_0_14px_rgba(229,188,104,0.08)]"><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">CC&amp;C</div><div className="mt-2 text-lg font-bold leading-tight">IT4IT™ 3<br />Foundation</div></div></div><div className="grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground"><div className="border border-[#8fc7ff]/35 bg-white/60 p-3 dark:bg-white/5">Design</div><div className="border border-[#e5bc68]/45 bg-white/60 p-3 dark:bg-white/5">Deliver</div><div className="border border-[#8fc7ff]/35 bg-white/60 p-3 dark:bg-white/5">Run</div></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="flex min-h-[330px] items-center justify-center border border-dashed border-border bg-muted/40 p-8 text-center text-sm text-muted-foreground">Image placeholder: IT4IT reference architecture or digital product workshop</div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">A practical reference architecture for IT professionals.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">IT4IT knowledge provides context and guidance for digital transformation, IT transformation, application portfolio management, DevOps adoption, cloud and service broker models, and IT tools management and rationalisation.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><BulletList items={audience.slice(0, 5)} /><BulletList items={audience.slice(5)} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">There are no formal prerequisites. Experience in IT domain management and familiarity with ITIL are helpful background but are not required.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">Course objective</p><h2 className="text-3xl font-bold sm:text-4xl">Manage the business of IT with a shared operating model.</h2><p className="mt-6 leading-relaxed text-white/70">IT4IT is an open, vendor-neutral reference architecture and value chain-based operating model for managing the business of IT. It has supported outcomes ranging from IT tool optimisation to CIO-level operating models enabling large-scale transformation.</p><p className="mt-6 leading-relaxed text-white/70">The standard describes the end-to-end functions enterprise IT performs: key functions, their relationships, information objects, the information model and data flows needed to enable effective value delivery in an agile, automated, service-based IT landscape.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-6 leading-relaxed text-white/70">This two-day, instructor-led course provides an overview of The Open Group's current reference architecture and prepares participants for the IT4IT 3 Foundation exam.</p><BulletList items={outcomes} textClassName="text-white/70" /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Choose the setting that fits your team.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The course runs over two consecutive days and is available live online over Zoom from anywhere, as an in-person classroom session, or as a private in-house programme delivered exclusively for one organisation.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual online:</strong> instructor-led, live over Zoom, available to participants anywhere</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery with examples shaped around your organisation's IT management landscape</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">One focused examination.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Certification is achieved by passing a single examination. Candidates can take it online directly after the course, later at an authorised test centre, or through an online proctored sitting.</p></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">IT4IT™ 3 Foundation exam</h3><div className="mt-6 grid gap-4 text-muted-foreground sm:grid-cols-3"><div><p className="text-sm">Duration</p><p className="font-semibold text-foreground">60 minutes</p></div><div><p className="text-sm">Format</p><p className="font-semibold text-foreground">40 multiple-choice questions</p></div><div><p className="text-sm">Pass mark</p><p className="font-semibold text-foreground">65% (26 of 40)</p></div></div><p className="mt-7 leading-relaxed text-muted-foreground">The exam is closed book and supervised. There is no prerequisite; certification is open to all applicants. Candidates who do not pass must wait one month before attempting the exam again. The certification does not expire because it applies to a given version of the Body of Knowledge.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Build the IT operating model before transformation gets busy.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">A shared reference architecture for managing the business of IT tends to matter most once digital transformation is already under way. If your team is weighing when to bring this training in, a conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></a><a href="/contact" className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the course outline</a></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">IT4IT™ is a trademark of The Open Group. This page describes a course accredited under The Open Group's licensing programme.</p>
    </main>
    <Footer />
  </div>;
}
