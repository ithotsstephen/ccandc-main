import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const benefits = [
  "Senior practitioner-led: sessions are taught by architects who have applied the TOGAF Architecture Development Method inside real organisations, not simply taught the framework.",
  "Exam voucher included: both the Foundation and Practitioner exam vouchers are included in the course fee, with no separate booking or cost.",
  "Practical, hands-on delivery: case studies and scenario work throughout, so participants leave able to apply the method rather than recite it.",
  "Exclusive exam preparation support: structured revision guidance beyond the classroom, built specifically around both exam formats.",
  "Post-training support: continued access to guidance as participants begin applying the method to live architecture work.",
];
const audience = [
  "Enterprise and solution architects building or extending their EA capability",
  "Business and IT strategists shaping the link between strategy and delivery",
  "Programme and change managers working alongside architecture teams",
  "Consultants advising clients on transformation, who need to work to the standard clients expect",
];
const outcomes = [
  "Apply a shared language and method when working with other TOGAF-trained architects and stakeholders",
  "Use the ADM to scope, develop and govern an architecture through its full lifecycle",
  "Manage stakeholder concerns and competing requirements using TOGAF's structured techniques",
  "Structure and communicate architecture decisions using the TOGAF content framework",
  "Apply governance and compliance mechanisms to keep architecture work aligned to business objectives",
  "Sit and pass both the TOGAF Foundation and TOGAF Practitioner examinations",
];
const individualBenefits = [
  "A globally recognised, vendor-neutral qualification that strengthens both credibility and career prospects in enterprise architecture",
  "A structured method for approaching architecture work, rather than an ad hoc or self-taught approach",
  "Practical experience applying the ADM to realistic scenarios, ahead of applying it to live projects",
  "A shared vocabulary for working with other TOGAF-certified architects, consultants and stakeholders",
  "A certification pathway completed in four days, with exam preparation support built in rather than left to self-study",
];
const organisationBenefits = [
  "A common architecture method across teams, reducing rework and miscommunication between business, technology and delivery functions",
  "Faster, more consistent decision-making on architecture questions, drawing on a recognised standard rather than individual preference",
  "Stronger governance over architecture change, supporting compliance and risk management as transformation programmes scale",
  "A body of certified practitioners who can work confidently with external consultants, vendors and partners who use the same standard",
  "A cost-efficient route to building internal EA capability, with exam vouchers and preparation support included rather than procured separately",
];
const included = [
  "Exam vouchers for both the TOGAF Foundation and TOGAF Practitioner examinations",
  "Full course materials, including reference guides for use after certification",
  "Structured exam preparation support extending beyond the classroom",
  "Post-course support as participants begin applying the method in practice",
  "A certificate of completion and eligibility for The Open Group's professional badges on passing both exams",
];

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function TogafFoundationPractitionerTrainingPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TOGAF® Enterprise Architecture: Foundation and Practitioner | CC&C Solutions";
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
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">TOGAF® Enterprise Architecture: Foundation and Practitioner</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">A four-day, fully accredited programme that takes participants through both TOGAF® certification levels, taught by senior practitioners who have led enterprise architecture functions themselves.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the course outline</button></div>
          </div>
          <div className="flex min-h-[280px] items-center justify-center border border-dashed border-white/40 bg-white/5 p-8 text-center text-sm text-white/60">Image placeholder: Foundation-to-Practitioner classroom / architecture workshop</div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{[["Duration", "4 days", Laptop], ["Format", "Virtual, in-person, or private in-house", Users], ["Certification", "TOGAF® Foundation and Practitioner (10th Edition)", GraduationCap]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why train with CC&amp;C</p><h2 className="text-3xl font-bold sm:text-5xl">Learn the standard, then apply it.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">This course is delivered under full accreditation from The Open Group, so participants can be confident the curriculum, exam preparation and certification pathway all meet the required standard.</p><div className="mt-10"><BulletList items={benefits} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="Foundation to Practitioner journey diagram"><div className="absolute left-[22%] top-0 h-full w-px bg-[#8fc7ff]/35" aria-hidden="true" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/45" aria-hidden="true" /><div className="absolute left-[78%] top-0 h-full w-px bg-[#8fc7ff]/35" aria-hidden="true" /><div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-[#8fc7ff]/45" aria-hidden="true" /><div className="relative flex h-full min-h-[325px] flex-col justify-between"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span>Foundation</span><span>Application</span><span>Practitioner</span></div><div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#e5bc68] bg-[#0b1728] text-center text-white shadow-[0_0_0_14px_rgba(229,188,104,0.08)]"><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">CC&amp;C</div><div className="mt-2 text-lg font-bold leading-tight">TOGAF<br />Pathway</div></div></div><div className="grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground"><div className="border-t-2 border-[#8fc7ff] pt-3">Shared<br />vocabulary</div><div className="border-t-2 border-[#e5bc68] pt-3">Applied<br />ADM</div><div className="border-t-2 border-[#8fc7ff] pt-3">Certified<br />capability</div></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="flex min-h-[330px] items-center justify-center border border-dashed border-border bg-muted/40 p-8 text-center text-sm text-muted-foreground">Image placeholder: architecture scenario work / delivery team</div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">Build capability from first principles through application.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">The programme is built for professionals who need to design, govern or communicate architecture decisions using a shared framework, and for those who work alongside them.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">No prior TOGAF certification is required. The course begins at Foundation level before progressing to Practitioner.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">A complete route from vocabulary to applied practice.</h2><p className="mt-6 leading-relaxed text-white/70"><strong className="text-white">Foundation:</strong> the vocabulary and structure of the standard, covering the four architecture domains, the Architecture Development Method and its phases, the content framework, and governance and compliance.</p><p className="mt-5 leading-relaxed text-white/70"><strong className="text-white">Practitioner:</strong> applied practice covering stakeholder management, each ADM phase from Architecture Vision through to Implementation Governance, and the techniques used to manage requirements and change once an architecture is in use.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-7 text-white/70">By the end of the four days, participants will be able to:</p><BulletList items={outcomes} /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Four days, one connected learning journey.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The course runs over four consecutive days and is available as a virtual classroom, an in-person classroom session, or as a private in-house programme delivered exclusively for one organisation.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual classroom:</strong> instructor-led, live sessions, suited to distributed teams</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery for one organisation, with case studies shaped around that organisation's own architecture challenges</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="mb-10"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">Complete both examinations.</h2><p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Participants sit two examinations to complete the certification pathway. Both exams are supervised and can be taken online or at a test centre.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">TOGAF Foundation exam</h3><div className="mt-6 space-y-4 text-muted-foreground"><p><strong className="text-foreground">60 minutes</strong> · 40 multiple-choice questions</p><p><strong className="text-foreground">Closed book</strong> · supervised online or at a test centre</p></div></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">TOGAF Practitioner exam</h3><div className="mt-6 space-y-4 text-muted-foreground"><p><strong className="text-foreground">90 minutes</strong> · scenario-based questions</p><p><strong className="text-foreground">Reference material available</strong> · supervised online or at a test centre</p></div></div></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">Passing both earns the Open Group Certified: TOGAF® Enterprise Architecture Practitioner credential and inclusion in The Open Group's directory of certified professionals.</p></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Build architecture capability before transformation gets busy.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">If your team is weighing when to bring this training in, a conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the course outline</button></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">TOGAF® is a registered trademark of The Open Group. This page describes a course accredited under The Open Group's licensing programme.</p>
    </main>
    <Footer />
  </div>;
}
