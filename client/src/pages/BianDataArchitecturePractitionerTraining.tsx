import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, Database, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import PdfDownloadForm from "@/components/PdfDownloadForm";

const DATA_ARCHITECTURE_TRAINING_PDF_URL =
  "/assets/pdf_downloads/BIAN Data Architecture Practitioner Certification Training (Trainer-Led).pdf";
const DATA_ARCHITECTURE_TRAINING_FORMSPREE = "https://formspree.io/f/mwvzgopl";

const reasonsToChoose = [
  "CC&C is a recognised member of the BIAN organization and acts as a BIAN adoption partner for several banks worldwide",
  "As a BIAN-accredited training provider with a global footprint, CC&C brings a wealth of experience and knowledge to every course",
  "CC&C actively contributes to BIAN working groups, keeping the training at the forefront of the latest developments and best practices within the BIAN framework",
  "Participants gain a strong understanding of the design principles and elements of BIAN's Reference Architecture, including how ArchiMate® and UML concepts are used to model the BIAN Object Model",
  "Trusted by major banks: CC&C has delivered BIAN training and advisory work for HSBC, ANZ, NAB, TD Bank, TDECU and OTP Group, among others",
  "Your trainer is a real banking data architecture consultant with hands-on BIAN implementation experience, not a generalist reading from a slide deck",
  "The exam voucher is included in the course fee, with no separate booking or cost",
  "Delivered through in-person and virtual training sessions, offering flexibility while maintaining a highly interactive learning experience",
];

const audience = [
  "Enterprise architects and solution architects",
  "Data architects",
  "Business and information architects",
  "IT and systems architects",
  "Integration specialists",
  "Technology consultants and advisors",
  "Transformation and change managers",
  "Developers and API designers working with BIAN-aligned systems",
  "Business analysts and functional designers",
  "Consultants supporting BIAN adoption",
];

const outcomes = [
  "Apply BIAN concepts and artefacts in enterprise architecture",
  "Use the BIAN Object Model effectively",
  "Model financial institutions using service domains and capabilities",
  "Apply BIAN modelling patterns to real data architecture problems",
  "Align business and IT using standardised architecture practices",
  "Describe the added value the BIAN Object Model provides to financial institutions and their service providers",
  "Sit and pass the BIAN Data Architecture Practitioner Certification exam",
];

const individualBenefits = [
  "The ability to leverage the benefits of BIAN and the BIAN Business Object Model directly in day-to-day data architecture work",
  "Increased knowledge and general skills regarding the BIAN BOM and Control Records, supporting the creation of more transparent ICT systems",
  "A competitive advantage as a data professional working to a recognised, vendor-neutral banking standard",
  "A hallmark of professionalism for banking architects and data professionals, backed by BIAN itself",
  "Certification completed in two days, with the exam voucher and preparation support built in rather than left to self-study",
];

const organisationBenefits = [
  "Data professionals who can model and govern banking data consistently, using a shared, standardised approach rather than ad hoc conventions",
  "More transparent ICT systems, with data architecture that other BIAN-aligned teams, vendors and partners can readily understand",
  "Stronger alignment between business and IT through a common object model spanning both",
  "Confidence that certified staff can work to the same data standard as partners, vendors and other banks already using BIAN",
  "Training delivered by consultants trusted by major banks including HSBC, ANZ, NAB, TD Bank and OTP Group, and recognised by BIAN itself",
];

const included = [
  "Trainer-led training, delivered in person or virtually",
  "Course materials in PDF",
  "A practice exam",
  "A mock exam with answers",
  "The BIAN Data Architecture Practitioner Certification exam voucher",
];

const testimonials = [
  {
    quote: "Our partnership with CC&C Solutions has been transformative in accelerating our digital transformation journey. Their expertise in enterprise architecture, BIAN operating model, and agile methodologies has been instrumental in helping us shift to a product-oriented organization. Through their training and consulting services, we've gained the tools and strategies needed to achieve our vision of becoming a leading credit union in the US.",
    author: "Ashish Chopra",
    role: "Chief Information Officer, Texas Dow Employee Credit Union",
  },
  {
    quote: "I sincerely thank the entire CC&C team for your excellent support throughout the BIAN adoption process. I truly appreciate the professionalism, responsiveness, and quality of work you've brought to this collaboration.",
    author: "Domonkos Kertesz",
    role: "Chief IT Architect, OTP Group",
  },
  {
    quote: "ANZ has discovered CC&C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success. The guidance, training, and support they provide are essential to our successful implementation.",
    author: "Arran Price",
    role: "Enterprise Architect, ANZ New Zealand",
  },
];

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function BianDataArchitecturePractitionerTraining() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BIAN Data Architecture Practitioner Certification Training | CC&C Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute("content", "BIAN Data Architecture Practitioner Certification Training. Master BIAN data modelling and architecture in this two-day, instructor-led programme.");
    return () => { document.title = "CC&C Solutions"; };
  }, []);

  const goToContact = () => setLocation("/#contact");
  const goToCourseOutline = () => document.getElementById("course-outline")?.scrollIntoView({ behavior: "smooth" });

  return <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <main>
      <section className="relative overflow-hidden bg-[#0b1728] text-white">
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_48%,rgba(143,199,255,0.16),transparent_32%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-[58%] opacity-45 [background-image:linear-gradient(rgba(143,199,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" />
          <div className="absolute right-[16%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[#8fc7ff]/25" />
          <div className="absolute right-[calc(16%+8rem)] top-1/2 h-px w-64 bg-[#e5bc68]/45" />
          <div className="absolute right-[calc(16%+8rem)] top-[calc(50%-8rem)] h-64 w-px bg-[#e5bc68]/35" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <Link href="/ccandc-training"><a className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8fc7ff] transition-colors hover:text-white"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />Back to Training</a></Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">BIAN Data Architecture</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">BIAN Data Architecture Practitioner Certification Training</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">Master BIAN data modelling and architecture. CC&amp;C's leadership position in BIAN certification training, adoption, and implementation is helping banks fast-track their BIAN learning and your BIAN journey. This two-day, instructor-led programme is an advanced training track focused on applying BIAN's Object Model and data architecture principles in real-world financial institutions.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToCourseOutline} className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the course outline</button></div>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center border border-white/25 bg-white/5 p-8" aria-label="BIAN data architecture model">
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-[#8fc7ff]/40" aria-hidden="true" />
            <div className="relative w-full max-w-sm space-y-5 text-center">
              <div className="border border-[#8fc7ff]/35 bg-[#0b1728]/90 p-4 text-sm font-semibold">BIAN Object Model</div>
              <div className="mx-auto h-8 w-px bg-[#e5bc68]/70" aria-hidden="true" />
              <div className="border border-[#e5bc68]/60 bg-[#0b1728]/90 p-6"><Database className="mx-auto h-7 w-7 text-[#e5bc68]" aria-hidden="true" /><p className="mt-2 text-xl font-bold">Data Architecture</p><p className="mt-2 text-sm text-white/65">Enterprise model · Information governance</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">{[["Duration", "2 days", Laptop], ["Format", "Virtual or in-person", Users], ["Prerequisites", "BIAN Foundation Certification is required", BookOpen], ["Exam Voucher", "Yes, included (valid 1 year)", ClipboardCheck], ["Certification", "BIAN Data Architecture Practitioner Certification", GraduationCap]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why choose CC&amp;C for BIAN training</p><h2 className="text-3xl font-bold sm:text-5xl">Why choose CC&amp;C for BIAN training</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">BIAN training from CC&amp;C is delivered by consultants who work with the standard directly, not just teach it, and who are trusted by some of the world's largest banks to guide their BIAN adoption.</p><div className="mt-10"><BulletList items={reasonsToChoose} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="BIAN data modelling concepts"><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/40" aria-hidden="true" /><div className="absolute left-0 top-1/2 h-px w-full bg-[#8fc7ff]/40" aria-hidden="true" /><div className="relative grid h-full min-h-[325px] grid-cols-2 items-center gap-8 text-center"><div className="border border-primary/30 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">BIAN</p><p className="mt-2 font-bold">Object Model</p></div><div className="border border-[#b07d18]/40 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Enterprise</p><p className="mt-2 font-bold">Data Model</p></div><div className="border border-[#b07d18]/40 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">Information</p><p className="mt-2 font-bold">Governance</p></div><div className="border border-primary/30 bg-background/90 p-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Data</p><p className="mt-2 font-bold">System Level</p></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="flex min-h-[330px] items-center justify-center border border-dashed border-border bg-muted/40 p-8 text-center"><div><Database className="mx-auto h-12 w-12 text-primary" /><p className="mt-4 text-lg font-semibold">BIAN Object Model</p><p className="mt-2 max-w-sm text-sm text-muted-foreground">Data architecture principles for financial institutions</p></div></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">Who this course is for</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">This certification is a specialised BIAN Practitioner track, aimed at data professionals who need to model and govern banking data using BIAN's Object Model, and at those who work alongside them.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">BIAN Foundation Certification is a mandatory prerequisite for this course. It is helpful, though not required, if participants already have some banking and data modelling background, such as familiarity with ArchiMate® and/or UML in a financial services context.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">What the course covers</h2><p className="mt-6 leading-relaxed text-white/75">The course gives participants a strong understanding of the design principles and elements of BIAN's Reference Architecture, including how ArchiMate® and UML concepts are used to model the BIAN Business Object Model (BOM). It works through the BOM approach itself: its content and structure patterns, how business concepts are defined and classified into building blocks, and how information requirements are completed and documented as an enterprise model. The course then turns to practical application: using the BOM approach and an enterprise data model within an organisation, covering information governance, data architecture, and data at the system level, so that participants leave able to design aligned and interoperable banking architectures rather than only recognise BIAN's data concepts.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><h2 className="mb-7 text-3xl font-bold sm:text-4xl">Learning outcomes</h2><p className="mb-7 leading-relaxed text-white/75">By the end of the two days, participants will be able to:</p><BulletList items={outcomes} light /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Benefits</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Format and delivery</h2><p className="mt-5 leading-relaxed text-muted-foreground">The course runs over two days and is delivered flexibly, either in person or virtually, while keeping the session highly interactive.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual classroom:</strong> instructor-led, live sessions, suited to distributed teams</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery for one organisation, with modelling exercises shaped around that organisation's own data architecture</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">Certification</h2><p className="mt-5 leading-relaxed text-muted-foreground">Certification is achieved by passing a single examination.</p><p className="mt-5 leading-relaxed text-muted-foreground">The exam is conducted as an online proctored examination. BIAN Foundation Certification is a mandatory prerequisite; this certification cannot be reached through self-study alone. The exam voucher is valid for one year from issue.</p></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">BIAN Data Architecture Practitioner Certification exam</h3><div className="mt-6"><BulletList items={["BIAN Data Architecture Practitioner Certification exam: 60 minutes, 60 multiple-choice questions, closed book", "Pass mark: 70 percent"]} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What our clients say</p><h2 className="text-3xl font-bold sm:text-4xl">What our clients say</h2></div><div className="grid gap-6 lg:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.author} className="flex h-full flex-col border border-border bg-background p-7"><BookOpen className="mb-5 h-6 w-6 text-primary" aria-hidden="true" /><blockquote className="flex-1 leading-relaxed text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</blockquote><figcaption className="mt-6 border-t border-border pt-4"><p className="font-bold">{testimonial.author}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></figcaption></figure>)}</div></div></section>

      <div id="course-outline"><PdfDownloadForm sectionTitle="Request the course outline" resourceTitle="BIAN Data Architecture Practitioner Certification Training" pdfUrl={DATA_ARCHITECTURE_TRAINING_PDF_URL} pdfFileName="BIAN Data Architecture Practitioner Certification Training (Trainer-Led).pdf" formspreeEndpoint={DATA_ARCHITECTURE_TRAINING_FORMSPREE} /></div>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Next steps</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Next steps</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Data that is modelled inconsistently tends to become expensive to fix only once a bank is already deep into an integration or transformation programme, which is precisely when there is least time to correct it. If your team already holds BIAN Foundation and is weighing when to build data architecture capability specifically, a conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToCourseOutline} className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the course outline</button></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">BIAN® is a registered trademark of the Banking Industry Architecture Network. ArchiMate® is a registered trademark of The Open Group. This page describes a course accredited under BIAN's training and certification programme.</p>
    </main>
    <Footer />
  </div>;
}