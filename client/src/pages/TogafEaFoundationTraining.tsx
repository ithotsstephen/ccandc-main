import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const benefits = [
  "Senior practitioner-led: sessions are taught by architects who have applied the TOGAF Architecture Development Method inside real organisations, not simply taught the framework.",
  "Exam voucher included: the Foundation exam voucher is included in the course fee, with no separate booking or cost.",
  "Practical, hands-on delivery: case studies and scenario work throughout, so participants leave able to apply the method rather than recite it.",
  "Exclusive exam preparation support: structured revision guidance beyond the classroom, built specifically around the exam format.",
  "Post-training support: continued access to guidance as participants begin applying the method to live architecture work.",
];
const audience = [
  "Enterprise and solution architects starting to build their EA capability",
  "Business and IT strategists who need a working grasp of the TOGAF vocabulary and method",
  "Programme and change managers working alongside architecture teams",
  "Consultants advising clients on transformation, who need to work to the standard clients expect",
];
const outcomes = [
  "Explain the structure, terminology and purpose of the TOGAF Standard",
  "Describe the Architecture Development Method and the purpose of each of its phases",
  "Identify the four architecture domains and how they relate to one another",
  "Describe the TOGAF content framework and how it structures architecture work",
  "Explain the governance and compliance mechanisms used to keep architecture aligned to business objectives",
  "Sit and pass the TOGAF Foundation examination",
];
const individualBenefits = [
  "A globally recognised, vendor-neutral qualification and a natural entry point into enterprise architecture",
  "A clear grounding in the standard's structure and terminology, in place of picking it up piecemeal on the job",
  "A foundation for progressing to TOGAF Practitioner and applying the method directly, when ready",
  "A shared vocabulary for working with TOGAF-certified architects, consultants and stakeholders",
  "A certification completed in one to two days, with exam preparation support built in rather than left to self-study",
];
const organisationBenefits = [
  "A shared architecture vocabulary across teams, reducing miscommunication between business, technology and delivery functions",
  "A fast, low-commitment way to build baseline EA literacy across a wider group than a full Practitioner cohort",
  "A common reference point for staff who work alongside architects, without requiring them to apply the method directly",
  "A pipeline of staff ready to progress to TOGAF Practitioner as EA capability needs grow",
  "A cost-efficient route to building EA awareness, with the exam voucher and preparation support included rather than procured separately",
];
const included = [
  "Exam voucher for the TOGAF Foundation examination",
  "Full course materials, including reference guides for use after certification",
  "Structured exam preparation support extending beyond the classroom",
  "Post-course support as participants begin applying the standard in practice",
  "A certificate of completion and eligibility for The Open Group's professional badge on passing the exam",
];

function BulletList({ items, textClassName = items === outcomes ? "text-white/70" : "text-muted-foreground" }: { items: string[]; textClassName?: string }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${textClassName}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function TogafEaFoundationTraining() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TOGAF® Enterprise Architecture: Foundation | CC&C Solutions";
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
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">The Open Group accredited training</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">TOGAF® Enterprise Architecture: Foundation</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">A two-day, fully accredited programme covering the TOGAF® certification entry level, taught by senior practitioners who have led enterprise architecture functions themselves.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button></div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden border border-white/20 bg-white/5">
            <img src="/assets/Images/togaf-classroom.jpg" alt="Instructor leading a professional training session" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{[["Duration", "1–2 days", Laptop], ["Format", "Virtual, in-person, or private in-house", Users], ["Certification", "TOGAF® Foundation (10th Edition)", GraduationCap], ["Included", "", BookOpen]].map(([label, value, Icon]) => label === "Included" ? <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><ul className="mt-2 space-y-1 text-sm font-medium text-foreground"><li>Exam voucher</li><li>Course materials</li><li>Exam preparation support</li><li>Post-course support</li></ul></div></div> : <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why train with CC&amp;C</p><h2 className="text-3xl font-bold sm:text-5xl">Learn the standard from people who use it.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">This course is delivered under full accreditation from The Open Group, so participants can be confident the curriculum, exam preparation and certification pathway all meet the required standard.</p><div className="mt-10"><BulletList items={benefits} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="Training journey diagram"><div className="absolute left-[22%] top-0 h-full w-px bg-[#8fc7ff]/35" aria-hidden="true" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/45" aria-hidden="true" /><div className="absolute left-[78%] top-0 h-full w-px bg-[#8fc7ff]/35" aria-hidden="true" /><div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-[#8fc7ff]/45" aria-hidden="true" /><div className="relative flex h-full min-h-[325px] flex-col justify-between"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span>Experience</span><span>Method</span><span>Capability</span></div><div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#e5bc68] bg-[#0b1728] text-center text-white shadow-[0_0_0_14px_rgba(229,188,104,0.08)]"><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">CC&amp;C</div><div className="mt-2 text-lg font-bold leading-tight">TOGAF<br />Foundation</div></div><span className="absolute -right-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#e5bc68]" /></div><div className="grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground"><div className="border-t-2 border-[#8fc7ff] pt-3">Senior<br />practitioners</div><div className="border-t-2 border-[#e5bc68] pt-3">Accredited<br />curriculum</div><div className="border-t-2 border-[#8fc7ff] pt-3">Ready for<br />the exam</div></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="relative min-h-[330px] overflow-hidden border border-border bg-muted/40">
        <img src="/assets/Images/togaf-corporate-team.jpg" alt="Colleagues collaborating in a professional workplace" className="absolute inset-0 h-full w-full object-cover" />
      </div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">A practical entry point for transformation professionals.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">The programme is built for professionals who need to understand or begin applying a shared architecture framework, and for those who work alongside them.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">No prior architecture certification is required. This is the entry point to the TOGAF certification pathway, and a natural precursor to TOGAF Practitioner for those who go on to apply the method directly.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">A clear map of the standard and how it works.</h2><p className="mt-6 leading-relaxed text-white/70">The course establishes the vocabulary and structure of the standard, covering the four architecture domains, the Architecture Development Method and its phases, the content framework, and the governance and compliance mechanisms that keep architecture work aligned to organisational objectives.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-4 text-lg font-semibold leading-relaxed text-white/80">By the end of the course, participants will be able to:</p><BulletList items={outcomes} /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Choose the setting that fits your team.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The course runs over one to two days and is available as a virtual classroom, an in-person classroom session, or as a private in-house programme delivered exclusively for one organisation.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual classroom:</strong> instructor-led, live sessions, suited to distributed teams</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery for one organisation, with case studies shaped around that organisation's own architecture challenges</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">One focused examination.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Participants sit one examination to gain the certification. The exam is supervised and can be taken online or at a test centre.</p></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">TOGAF Foundation exam</h3><div className="mt-6 grid gap-4 text-muted-foreground sm:grid-cols-3"><div><p className="text-sm">Duration</p><p className="font-semibold text-foreground">60 minutes</p></div><div><p className="text-sm">Format</p><p className="font-semibold text-foreground">40 multiple-choice questions</p></div><div><p className="text-sm">Conditions</p><p className="font-semibold text-foreground">Closed book</p></div></div><p className="mt-7 leading-relaxed text-muted-foreground">Passing it earns the Open Group Certified: TOGAF® Enterprise Architecture Foundation credential, inclusion in The Open Group's directory of certified professionals, and eligibility to progress to TOGAF Practitioner.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Build the shared vocabulary before transformation gets busy.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">If your team is weighing when to bring this training in, a conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">TOGAF® is a registered trademark of The Open Group. This page describes a course accredited under The Open Group's licensing programme.</p>
    </main>
    <Footer />
  </div>;
}
