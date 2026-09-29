import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const archIqUrl = "https://ccandc-academy.learnworlds.com/";

const reasons = [
  "CC&C is a recognised member of the BIAN organization and acts as a BIAN adoption partner for several banks worldwide.",
  "Course content is built by CC&C's own accredited BIAN trainers, drawing on real BIAN adoption and implementation experience, not repackaged third-party material.",
  "Learn on your own schedule, with no need to block out consecutive days or travel to a classroom.",
  "The BIAN Reference Architecture Second Edition book is included alongside every module, keeping the course and reference material in step.",
  "The Certification track includes an examination voucher, unlimited mock exams, and one official attempt at the BIAN Foundation Certification exam.",
  "A one-hour virtual trainer session can be booked for clarification and exam preparation, giving self-paced learners direct access to a BIAN trainer.",
  "CC&C has delivered BIAN training and advisory work for HSBC, ANZ, NAB, TD Bank and TDECU, among others.",
];

const audience = [
  "Enterprise and solution architects who need a stable, vendor-neutral blueprint for banking change",
  "Consultants and senior consultants guiding transformations, target operating models, and modernisation roadmaps",
  "Tooling providers, software solution providers, integrators, and third-party service providers aligning products and services to the BIAN model",
];

const outcomes = [
  "Explain the role of the key model elements in BIAN's Reference Architecture and how they fit together to support a composable bank",
  "Understand how BIAN can be used by different disciplines and across the business, application, information, and technology layers",
  "Gain the inspiration and practical confidence to introduce and apply BIAN within their organisation's context",
  "Sit and pass the BIAN Foundation Certification exam (Certification track only)",
];

const individualBenefits = [
  "A clear baseline of BIAN knowledge, recognised across the industry, on a schedule that fits around existing work commitments",
  "Increased knowledge and general skills related to financial services architecture, supporting the creation of more transparent ICT systems",
  "A competitive advantage through standardised concepts and a shared language with other BIAN professionals",
  "A way to demonstrate professionalism as a banking architect or consultant by aligning to an international framework",
  "The same certification pathway as the instructor-led course, without needing to travel or block out a fixed day",
];

const organisationBenefits = [
  "A low-friction way to roll out baseline BIAN literacy across a wider group than a scheduled classroom session could reach",
  "Staff who can complete certification training around existing project commitments, rather than losing a full working day",
  "A shared architectural language connecting business and IT, reducing miscommunication in banking transformation and integration programmes",
  "A pipeline of staff ready to progress into role-specific BIAN Practitioner tracks as capability needs grow",
  "Training built by the same CC&C consultants trusted by major banks including HSBC, ANZ, NAB and TD Bank",
];

const included = [
  "Full self-paced video course, organised into on-demand modules",
  "The BIAN Reference Architecture Second Edition book",
  "Unlimited mock exams via the official exam portal (Certification track)",
  "One official attempt at the BIAN Foundation Certification exam (Certification track)",
  "An optional one-hour virtual trainer session, bookable for clarification and exam preparation",
  "A course completion certificate, issued by CC&C Solutions, once all videos and quizzes have been completed",
];

const testimonials = [
  {
    quote: "Our partnership with CC&C Solutions has been transformative in accelerating our digital transformation journey. Their expertise in enterprise architecture, BIAN operating model, and agile methodologies has been instrumental in helping us shift to a product-oriented organization.",
    author: "Ashish Chopra",
    role: "Chief Information Officer, Texas Dow Employee Credit Union",
  },
  {
    quote: "My appreciation to CC&C for such an insightful training on BIAN.",
    author: "Alfredo Palafox",
    role: "Deputy Chief Architect LAM, HSBC",
  },
  {
    quote: "Obtained more in-depth knowledge on BIAN both in methodology and in practice through CC&C Solutions training.",
    author: "Tony Huang",
    role: "National Australia Bank (NAB)",
  },
];

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function ArchIQBianFoundationTraining() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BIAN Foundation Certification Training | ArchIQ eLearning | CC&C Solutions";
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
            <Link href="/training"><a className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8fc7ff] transition-colors hover:text-white"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />Back to ArchIQ</a></Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">ArchIQ by CC&amp;C Solutions · Self-paced learning</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">BIAN Foundation Certification Training</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">Unlock a practical, industry-aligned introduction to the BIAN Framework, on your own schedule. ArchIQ by CC&amp;C Solutions is a self-paced online course that explains the design principles and elements of BIAN's Reference Architecture for Financial Services, and how it reduces integration costs, maximises interoperability, and improves manageability across the enterprise.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href={archIqUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Enrol on ArchIQ <ArrowRight className="h-4 w-4" /></a><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Speak with a training consultant</button><a href={archIqUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Watch a free preview module</a></div>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center border border-white/25 bg-white/5 p-8" aria-label="ArchIQ self-paced BIAN course pathway">
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-[#8fc7ff]/40" aria-hidden="true" />
            <div className="relative w-full max-w-sm space-y-4 text-center">
              <div className="border border-[#8fc7ff]/40 bg-[#0b1728]/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">Learn at your pace</p><p className="mt-2 text-xl font-bold">On-demand modules</p><p className="mt-1 text-sm text-white/65">BIAN concepts, architecture and data model</p></div>
              <div className="border border-[#e5bc68]/60 bg-[#0b1728]/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Choose your path</p><p className="mt-2 text-xl font-bold">Training or Certification</p><p className="mt-1 text-sm text-white/65">Add exam access and trainer support when ready</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">{[["Format", "100% online, self-paced video course", Laptop], ["Prerequisites", "None", BookOpen], ["Exam voucher", "Included with Certification track", ClipboardCheck], ["Trainer support", "Bookable 1-hour virtual session", Users]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why choose CC&amp;C's ArchIQ for BIAN training</p><h2 className="text-3xl font-bold sm:text-5xl">BIAN expertise, in a format that fits your schedule.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">ArchIQ brings the same expertise behind CC&amp;C's instructor-led BIAN training into a format you can work through at your own pace, anywhere.</p><div className="mt-10"><BulletList items={reasons} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="BIAN self-paced learning concepts"><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/40" aria-hidden="true" /><div className="absolute left-0 top-1/2 h-px w-full bg-[#8fc7ff]/40" aria-hidden="true" /><div className="relative grid h-full min-h-[325px] grid-cols-2 items-center gap-8 text-center"><div className="border border-primary/30 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Architecture</p><p className="mt-2 font-bold">Service Domains</p></div><div className="border border-[#b07d18]/40 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Structure</p><p className="mt-2 font-bold">Service Landscape</p></div><div className="border border-[#b07d18]/40 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Data</p><p className="mt-2 font-bold">Business Object Model</p></div><div className="border border-primary/30 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Interoperability</p><p className="mt-2 font-bold">Semantic APIs</p></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="relative min-h-[330px] overflow-hidden border border-border bg-muted/40"><img src="/assets/Images/togaf-corporate-team.jpg" alt="Colleagues collaborating in a professional workplace" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-[#0b1728]/90 p-6 text-white"><p className="text-lg font-semibold">Learn BIAN on your schedule</p><p className="mt-2 max-w-sm text-sm text-white/75">Short on-demand lessons make it easier to build knowledge alongside active work.</p></div></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">A flexible route into BIAN for banking professionals.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">This course suits professionals who want a flexible, self-directed way into BIAN, without needing to attend a scheduled class.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">There are no formal prerequisites. BIAN Foundation Certification, however it is earned, is the entry point to the BIAN certification pathway; all BIAN Practitioner tracks require it.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">Short modules, from BIAN foundations to application.</h2><p className="mt-6 leading-relaxed text-white/70">The course is organised into short, on-demand video modules covering BIAN Concepts, the BIAN Architecture, and the BIAN Data Model, before moving into applying BIAN in practice: BIAN for Enterprise, BIAN for the Business Layer, BIAN for the Application Layer, BIAN for Data, BIAN for Interoperability, and how BIAN relates to TOGAF. It also positions BIAN alongside related industry standards, helping learners understand how it complements existing methods and taxonomies within their organisation.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-7 leading-relaxed text-white/70">By the end of the course, participants will be able to:</p><BulletList items={outcomes} light /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual taking it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section id="course-options" className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Self-paced learning through ArchIQ.</h2><p className="mt-5 leading-relaxed text-muted-foreground">ArchIQ is CC&amp;C's self-paced learning platform, accessed online at <a className="font-semibold text-primary underline" href={archIqUrl} target="_blank" rel="noreferrer">ccandc-academy.learnworlds.com</a>. There is no fixed schedule: participants work through video modules and quizzes at their own pace, with two course options available.</p><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current pricing for both course options here once confirmed.</p></div><div className="space-y-5"><article className="border border-border bg-background p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Training</p><h3 className="mt-2 text-xl font-bold">BIAN Foundation Training</h3><p className="mt-3 leading-relaxed text-muted-foreground">The self-paced video course and the BIAN 2nd Edition reference book, without an exam voucher or access to the official exam portal.</p></article><article className="border border-[#b07d18]/40 bg-background p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Certification track</p><h3 className="mt-2 text-xl font-bold">BIAN Foundation Certification Course</h3><p className="mt-3 leading-relaxed text-muted-foreground">Everything in the Training option, plus an examination voucher, unlimited mock exams, one official attempt at the BIAN Foundation Certification exam, and a bookable one-hour virtual trainer session for clarification and exam preparation.</p></article></div></div><div className="mt-16 grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What is included</p><BulletList items={included} /></div><div className="border border-border bg-background p-8"><div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">BIAN Foundation Certification exam</h3><p className="mt-5 leading-relaxed text-muted-foreground">Certification is achieved by passing a single examination through the official BIAN exam portal once course videos and quizzes are complete.</p><dl className="mt-6 grid gap-5 sm:grid-cols-2"><div><dt className="text-sm text-muted-foreground">Duration</dt><dd className="font-semibold">60 minutes</dd></div><div><dt className="text-sm text-muted-foreground">Format</dt><dd className="font-semibold">60 multiple-choice questions</dd></div><div><dt className="text-sm text-muted-foreground">Conditions</dt><dd className="font-semibold">Closed book</dd></div><div><dt className="text-sm text-muted-foreground">Pass mark</dt><dd className="font-semibold">70 percent</dd></div></dl><p className="mt-6 leading-relaxed text-muted-foreground">The exam is virtual proctored and available only to participants enrolled in the Certification track. There is no prerequisite; certification is open to all applicants. Passing earns the official BIAN Foundation certificate and social badge, shareable on LinkedIn, and is the mandatory prerequisite for progressing to any BIAN Practitioner certification.</p></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What our clients say</p><h2 className="text-3xl font-bold sm:text-4xl">Trusted by teams putting BIAN into practice.</h2></div><div className="grid gap-6 lg:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.author} className="flex h-full flex-col border border-border bg-background p-7"><BookOpen className="mb-5 h-6 w-6 text-primary" aria-hidden="true" /><blockquote className="flex-1 leading-relaxed text-muted-foreground">“{testimonial.quote}”</blockquote><figcaption className="mt-6 border-t border-border pt-4"><p className="font-bold">{testimonial.author}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></figcaption></figure>)}</div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Start building a shared language now.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">A shared architectural language across business and IT tends to matter most once a bank is already deep into an integration or transformation programme, which is precisely when there is least time to build it. For teams and individuals who want to start now, without waiting for the next scheduled class, ArchIQ is a good place to begin.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href={archIqUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Enrol on ArchIQ <ArrowRight className="h-4 w-4" /></a><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Speak with a training consultant</button></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">BIAN® is a registered trademark of the Banking Industry Architecture Network. Training materials are developed using source content from publications by Van Haren Publishing and BIAN Services GmbH; original copyrights and intellectual property rights remain with the respective organisations.</p>
    </main>
    <Footer />
  </div>;
}