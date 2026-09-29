import { useEffect } from "react";
import { ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap, Laptop, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const reasonsToChoose = [
  "CC&C is a recognised member of the BIAN organization and acts as a BIAN adoption partner for several banks worldwide.",
  "As a BIAN-accredited training provider with a global footprint, CC&C brings a wealth of experience and knowledge to every course.",
  "CC&C actively contributes to BIAN working groups, keeping the training current with developments and best practices within the BIAN framework.",
  "A CC&C principal consultant co-presented BIAN's 'What's New in the Foundation Certification, Version 3' webinar alongside BIAN's Lead Architect and Executive Director.",
  "CC&C has delivered BIAN training and advisory work for HSBC, ANZ, NAB, TD Bank and TDECU, among others.",
  "Your trainer is a banking architecture consultant with hands-on BIAN implementation experience, not a generalist reading from a slide deck.",
  "The BIAN Foundation examination voucher is included in the course fee, with no separate booking or cost.",
  "A practical case study helps participants recognise and apply BIAN concepts, not only recite them.",
  "Course material draws on the BIAN 2nd Edition reference and Version 3 Foundation syllabus, and is kept current as the standard evolves.",
];

const audience = [
  "Enterprise and solution architects",
  "Consultants and transformation leads guiding banking change programmes",
  "Integration and API specialists working on interoperability projects",
  "Data and application architects",
  "Business analysts and domain experts",
  "Banking technology and change professionals exploring BIAN adoption",
];

const outcomes = [
  "Explain what BIAN is and the benefits it provides to financial services providers",
  "Describe BIAN design principles and artifacts, including Service Domains and the Service Landscape",
  "Explain how Semantic APIs and the Business Object Model support interoperability and reduced integration cost",
  "Recognise how BIAN can be used across business, application, information and technology layers",
  "Explain how BIAN relates to other industry standards and existing architecture methods",
  "Sit and pass the BIAN Foundation Certification exam",
];

const individualBenefits = [
  "A globally recognised banking architecture qualification, backed by BIAN rather than a third-party interpretation of the standard",
  "A practical grounding in BIAN concepts, with a case study rather than notation learned in the abstract",
  "The mandatory entry point to BIAN Practitioner specialisations in Enterprise Architecture, Solution Architecture or Data Architecture",
  "A shared vocabulary for working with BIAN-certified architects, consultants and vendors across the banking industry",
  "Certification completed in a single day, with the exam voucher and preparation support built in rather than left to self-study",
];

const organisationBenefits = [
  "A shared architectural language connecting business and IT, reducing miscommunication in banking transformation and integration programmes",
  "A foundation for adopting a standard, service-based reference architecture that reduces integration costs and maximises interoperability",
  "A pipeline of staff ready to progress into role-specific BIAN Practitioner tracks as capability needs grow",
  "Confidence that certified staff can work to the same standard as partners, vendors and other banks already using BIAN",
  "Training delivered by consultants trusted by major banks including HSBC, ANZ, NAB and TD Bank, and recognised by BIAN itself",
];

const included = [
  "Exam voucher for the BIAN Foundation Certification exam",
  "The BIAN 2nd Edition reference book",
  "Full course materials and a practical case study",
  "Practice exams and mock exams to build exam readiness",
  "Structured exam preparation support extending beyond the classroom",
  "Post-training support as participants begin applying BIAN concepts in practice",
  "A CC&C certificate of completion, alongside the official BIAN Foundation certificate and social badge on passing the exam",
];

function BulletList({ items, textClassName = items === outcomes ? "text-white/70" : "text-muted-foreground" }: { items: string[]; textClassName?: string }) {
  return <ul className="space-y-4">{items.map((item) => <li key={item} className={`flex items-start gap-3 leading-relaxed ${textClassName}`}><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export default function BianFoundationCertificationTraining() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BIAN Foundation Certification Training | CC&C Solutions";
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
                BIAN Foundation Certification Training
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
                CC&amp;C's leadership in BIAN certification training, adoption
                and implementation helps banks fast-track BIAN learning. This
                one-day, instructor-led programme is the starting point: BIAN
                Foundation Certification, Version 3, and the mandatory first
                step before BIAN Practitioner.
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
              aria-label="BIAN Foundation learning pathway"
            >
              <div
                className="absolute left-1/2 top-10 bottom-10 w-px bg-[#8fc7ff]/40"
                aria-hidden="true"
              />
              <div className="relative flex w-full max-w-sm flex-col gap-5">
                <div className="border border-[#e5bc68]/60 bg-[#0b1728]/90 p-5 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
                    Start here
                  </span>
                  <p className="mt-2 text-xl font-bold">BIAN Foundation</p>
                  <p className="mt-1 text-sm text-white/65">
                    Version 3 certification
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#8fc7ff]/35 bg-[#0b1728]/90 p-4 text-center text-sm font-semibold">
                    Practitioner
                    <br />
                    Enterprise Architecture
                  </div>
                  <div className="border border-[#8fc7ff]/35 bg-[#0b1728]/90 p-4 text-center text-sm font-semibold">
                    Practitioner
                    <br />
                    Solution Architecture
                  </div>
                </div>
                <div className="mx-auto border border-[#8fc7ff]/35 bg-[#0b1728]/90 px-5 py-3 text-center text-sm font-semibold">
                  Practitioner · Data Architecture
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-10">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
            {[
              ["Duration", "1 day", Laptop],
              ["Format", "Virtual, in-person, or private in-house", Users],
              ["Prerequisites", "None", BookOpen],
              ["Exam voucher", "Included", ClipboardCheck],
              ["Certification", "BIAN Foundation, Version 3", GraduationCap],
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
                <BulletList items={reasonsToChoose} />
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
                  <p className="mt-2 font-bold">Service Landscape</p>
                </div>
                <div className="border border-[#b07d18]/40 bg-background/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b13]">
                    Interoperability
                  </p>
                  <p className="mt-2 font-bold">Semantic APIs</p>
                </div>
                <div className="border border-primary/30 bg-background/90 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Information
                  </p>
                  <p className="mt-2 font-bold">Business Object Model</p>
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
                <p className="text-lg font-semibold">A shared starting point for banking architecture</p>
                <p className="mt-2 max-w-sm text-sm text-white/75">Build a common language across business and IT before progressing into specialist practice.</p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Who this course is for
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                A common starting point for every architectural role in banking.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                BIAN Foundation is designed for anyone who needs a shared
                language connecting business and IT in a bank, not only for
                architects.
              </p>
              <div className="mt-8">
                <BulletList items={audience} />
              </div>
              <p className="mt-8 border-l-2 border-[#e5bc68] pl-5 leading-relaxed text-muted-foreground">
                There are no formal prerequisites. BIAN Foundation is the entry
                point to the certification pathway; Enterprise Architecture,
                Solution Architecture and Data Architecture Practitioner
                certifications all require it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">
                  What the course covers
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Understand the reference architecture and the language behind
                  it.
                </h2>
                <p className="mt-6 leading-relaxed text-white/70">
                  The course explains what BIAN is and why it matters for modern
                  financial institutions, then works through the BIAN Reference
                  Architecture: Service Domains, the Service Landscape, Semantic
                  APIs and the Business Object Model. It shows how BIAN creates
                  a shared language across business and IT, and how it relates
                  to and complements standards already in use, including TOGAF.
                </p>
              </div>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
                  Learning outcomes
                </p>
                <p className="mb-7 leading-relaxed text-white/70">
                  By the end of the day, participants will be able to:
                </p>
                <BulletList items={outcomes} />
              </div>
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
                  Choose the setting that fits your team.
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  The course runs over a single day and is available as a
                  virtual classroom, an in-person classroom session, or as a
                  private in-house programme delivered exclusively for one
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
                    a full-day session at a fixed venue
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
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Certification
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                One focused examination.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Certification is achieved by passing a single examination. It
                can be taken online through remote proctoring or in person at an
                invigilated exam location. There is no prerequisite; the exam is
                open to all applicants.
              </p>
            </div>
            <div className="border border-border bg-card p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ClipboardCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">
                BIAN Foundation Certification exam
              </h3>
              <div className="mt-6 grid gap-4 text-muted-foreground sm:grid-cols-3">
                <div>
                  <p className="text-sm">Duration</p>
                  <p className="font-semibold text-foreground">60 minutes</p>
                </div>
                <div>
                  <p className="text-sm">Format</p>
                  <p className="font-semibold text-foreground">
                    60 multiple-choice questions
                  </p>
                </div>
                <div>
                  <p className="text-sm">Conditions</p>
                  <p className="font-semibold text-foreground">Closed book</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Pass mark:{" "}
                <strong className="text-foreground">70 percent</strong>
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Passing earns the official BIAN Foundation certificate and
                social badge, and is the mandatory prerequisite for progressing
                to any BIAN Practitioner certification.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <BookOpen className="mx-auto h-10 w-10 text-[#e5bc68]" />
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
              Build a shared language before the programme gets busy.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              A shared architectural language across business and IT matters
              most once a bank is deep into an integration or transformation
              programme, when there is least time to build it. If your team is
              weighing when to bring this training in, a conversation with
              CC&amp;C is a good place to start.
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