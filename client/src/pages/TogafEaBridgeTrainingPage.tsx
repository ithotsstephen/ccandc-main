import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const benefits = [
  "Senior practitioner-led: sessions are taught by architects who have applied the TOGAF Architecture Development Method inside real organisations, not simply taught the framework.",
  "Exam voucher included: the Bridge exam voucher is included in the course fee, with no separate booking or cost.",
  "Practical, hands-on delivery: the course focuses on what has changed since TOGAF 9 and how to apply it, rather than re-teaching material participants already hold.",
  "Exclusive exam preparation support: structured revision guidance beyond the classroom, built specifically around the two-part Bridge exam format.",
  "Post-training support: continued access to guidance as participants begin applying the updated standard to live architecture work.",
];
const audience = [
  "TOGAF 9 Certified architects updating their qualification to the 10th Edition",
  "Enterprise and solution architects maintaining currency with the standard as their organisation moves to TOGAF 10",
  "Consultants who need to demonstrate certification against the current edition for client-facing work",
  "Programme and change managers working alongside architecture teams making the same transition",
];
const outcomes = [
  "Identify the key changes introduced in the TOGAF 10th Edition relative to TOGAF 9",
  "Apply the TOGAF method and techniques under the current edition",
  "Manage stakeholder concerns and support ADM work using updated TOGAF techniques",
  "Apply the current content framework and governance mechanisms in practice",
  "Sit and pass the TOGAF Enterprise Architecture Bridge exam",
];
const individualBenefits = [
  "An efficient route to a current, globally recognised qualification, without repeating material already held from TOGAF 9",
  "Protection of an existing investment in TOGAF certification, rather than starting the pathway again from Foundation",
  "A clear, focused update on what has changed and how to apply it, in place of working through the full standard unassisted",
  "A shared vocabulary with peers and clients now working to the 10th Edition",
  "Certification completed in two days, with exam preparation support built in rather than left to self-study",
];
const organisationBenefits = [
  "A fast, low-disruption way to bring existing TOGAF 9 certified staff onto the current standard",
  "Continuity of architecture practice during the transition, since staff are updating rather than relearning the method",
  "Confidence that certified staff can work to the same edition as current clients, vendors and partners",
  "A cost-efficient alternative to re-running staff through the full Foundation and Practitioner pathway",
  "A practical route to keeping an existing EA capability current as the standard evolves",
];
const included = [
  "Exam voucher for the TOGAF Enterprise Architecture Bridge exam",
  "Full course materials, including reference guides for use after certification",
  "Structured exam preparation support extending beyond the classroom",
  "Post-course support as participants begin applying the updated standard in practice",
  "A certificate of completion and eligibility for The Open Group's Applied TOGAF® Enterprise Architecture Practitioner Open Badge on passing the exam and completing the learning studies",
];

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function TogafEaBridgeTrainingPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TOGAF® Enterprise Architecture Bridge | CC&C Solutions";
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
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">TOGAF® Enterprise Architecture Bridge</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">A two-day, fully accredited programme for TOGAF 9 Certified professionals to update their qualification to the TOGAF 10th Edition and gain TOGAF Enterprise Architecture Practitioner status, taught by senior practitioners who have led enterprise architecture functions themselves.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">Request the course outline</button></div>
          </div>
          <div className="flex min-h-[280px] items-center justify-center border border-dashed border-white/40 bg-white/5 p-8 text-center text-sm text-white/60">Image placeholder: TOGAF 9 to 10 update workshop</div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-10"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{[["Duration", "2 days", Laptop], ["Format", "Virtual, in-person, or private in-house", Users], ["Certification", "TOGAF® Practitioner via Bridge pathway", GraduationCap], ["Prerequisite", "TOGAF® 9 Certified", BookOpen]].map(([label, value, Icon]) => <div key={label as string} className="flex items-start gap-4 border-l-2 border-primary/30 pl-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" /><div><p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label as string}</p><p className="mt-1 font-semibold">{value as string}</p></div></div>)}</div></section>

      <section className="overflow-hidden bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why train with CC&amp;C</p><h2 className="text-3xl font-bold sm:text-5xl">Update with confidence, without starting again.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">This course is delivered under full accreditation from The Open Group, so participants can be confident the curriculum, exam preparation and certification pathway all meet the required standard.</p><div className="mt-10"><BulletList items={benefits} /></div></div><div className="relative min-h-[390px] overflow-hidden border border-[#8fc7ff]/40 bg-white/70 p-8 dark:bg-white/5 sm:p-10" aria-label="TOGAF Bridge journey diagram"><div className="absolute left-[22%] top-0 h-full w-px bg-[#8fc7ff]/35" aria-hidden="true" /><div className="absolute left-1/2 top-0 h-full w-px bg-[#e5bc68]/45" aria-hidden="true" /><div className="absolute left-[78%] top-0 h-full w-px bg-[#8fc7ff]/35" aria-hidden="true" /><div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-[#8fc7ff]/45" aria-hidden="true" /><div className="relative flex h-full min-h-[325px] flex-col justify-between"><div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><span>TOGAF 9</span><span>Update</span><span>TOGAF 10</span></div><div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#e5bc68] bg-[#0b1728] text-center text-white shadow-[0_0_0_14px_rgba(229,188,104,0.08)]"><div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">CC&amp;C</div><div className="mt-2 text-lg font-bold leading-tight">Bridge to<br />Practitioner</div></div></div><div className="grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground"><div className="border-t-2 border-[#8fc7ff] pt-3">Existing<br />certification</div><div className="border-t-2 border-[#e5bc68] pt-3">Focused<br />change</div><div className="border-t-2 border-[#8fc7ff] pt-3">Current<br />credential</div></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="flex min-h-[330px] items-center justify-center border border-dashed border-border bg-muted/40 p-8 text-center text-sm text-muted-foreground">Image placeholder: TOGAF update materials / transition workshop</div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who this course is for</p><h2 className="text-3xl font-bold sm:text-4xl">Bring existing certification up to date.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">The programme is built specifically for professionals who hold TOGAF 9 certification and want to update it to the current standard without repeating material they already know.</p><div className="mt-8"><BulletList items={audience} /></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">TOGAF 9 certification is a prerequisite. This course is not an entry point to TOGAF; those without a prior TOGAF 9 certification should instead take the Foundation and Practitioner course.</p></div></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">What the course covers</p><h2 className="text-3xl font-bold sm:text-4xl">Focus on what changed and how to apply it.</h2><p className="mt-6 leading-relaxed text-white/70">The course concentrates on what has changed between TOGAF 9 and the TOGAF 10th Edition, and on applying that updated standard in practice. It covers the revised structure and terminology, stakeholder management, the ADM phases as they now stand, and the techniques used to manage requirements and change once an architecture is in use.</p></div><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">Learning outcomes</p><p className="mb-7 text-white/70">By the end of the course, participants will be able to:</p><BulletList items={outcomes} /></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p><h2 className="text-3xl font-bold sm:text-4xl">Value for individuals and organisations.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The course is designed to deliver value both to the individual sitting it and to the organisation sponsoring it.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border-t-4 border-primary bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><GraduationCap className="h-7 w-7 text-primary" />For individuals</h3><BulletList items={individualBenefits} /></div><div className="border-t-4 border-[#e5bc68] bg-muted/40 p-8"><h3 className="mb-6 flex items-center gap-3 text-2xl font-bold"><Users className="h-7 w-7 text-[#b07d18]" />For organisations</h3><BulletList items={organisationBenefits} /></div></div></div></section>

      <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Format and delivery</p><h2 className="text-3xl font-bold sm:text-4xl">Two days to update the standard.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The course runs over two consecutive days and is available as a virtual classroom, an in-person classroom session, or as a private in-house programme delivered exclusively for one organisation.</p><div className="mt-8 space-y-4 text-muted-foreground"><p><strong className="text-foreground">Virtual classroom:</strong> instructor-led, live sessions, suited to distributed teams</p><p><strong className="text-foreground">In-person classroom:</strong> full-day sessions at a fixed venue</p><p><strong className="text-foreground">In-house / corporate:</strong> private delivery for one organisation, useful where several TOGAF 9 certified staff are updating together</p></div><p className="mt-8 border border-dashed border-[#b07d18]/50 p-4 text-sm text-muted-foreground">Insert current public class dates and pricing here once confirmed.</p></div><div><h2 className="text-3xl font-bold sm:text-4xl">What is included</h2><div className="mt-8"><BulletList items={included} /></div></div></div></div></section>

      <section className="py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="mb-10"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Certification</p><h2 className="text-3xl font-bold sm:text-4xl">One Bridge examination in two parts.</h2><p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Participants sit a single Bridge examination, taken in two parts at one sitting. A pass mark of 60 percent is required across the combined exam.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">Part 1</h3><p className="mt-5 text-lg text-muted-foreground"><strong className="text-foreground">20 minutes</strong> · closed book, multiple choice</p></div><div className="border border-border bg-card p-8 shadow-sm"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardCheck className="h-7 w-7" /></div><h3 className="text-2xl font-bold">Part 2</h3><p className="mt-5 text-lg text-muted-foreground"><strong className="text-foreground">40 minutes</strong> · open book, scenario-based multiple choice using the online TOGAF reference material</p></div></div><p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">Passing the exam, together with completion of the course's learning studies, earns the Open Group Certified: Applied TOGAF® Enterprise Architecture Practitioner credential and inclusion in The Open Group's directory of certified professionals.</p></div></section>

      <section className="bg-[#0b1728] py-20 text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" /><h2 className="mt-6 text-3xl font-bold sm:text-5xl">Keep your architecture capability current.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Standards move on, and TOGAF 9 certification alone will not remain current indefinitely. A conversation with CC&amp;C is a good place to start.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><button onClick={goToContact} className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728]">Speak with a training consultant <ArrowRight className="h-4 w-4" /></button><button onClick={goToContact} className="rounded-lg border border-white/30 px-5 py-3 font-semibold hover:bg-white/10">Request the course outline</button></div></div></section>
      <p className="mx-auto max-w-4xl px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-6 lg:px-8">TOGAF® is a registered trademark of The Open Group. This page describes a course accredited under The Open Group's licensing programme.</p>
    </main>
    <Footer />
  </div>;
}
