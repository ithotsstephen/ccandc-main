import { useEffect } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  GraduationCap,
  Quote,
  Users,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const trainingDifferences = [
  {
    title: "Accredited by the bodies that own the standards.",
    description:
      "CC and C is an Accredited Education Partner of the Banking Industry Architecture Network (BIAN) and delivers training under The Open Group accreditation programme for TOGAF, ArchiMate and IT4IT. You learn the standard itself, not an interpretation of it.",
  },
  {
    title: "BIAN Best-in-Class Partner, 2024 and 2025.",
    description:
      "BIAN recognised CC and C in both years for its adoption and consulting work with banks, its fit for purpose training and its contribution to the BIAN framework.",
  },
  {
    title: "Taught by practising architects.",
    description:
      "Our trainers advise banks and enterprises on architecture every week. They bring real decisions, trade-offs and lessons into the classroom, rather than reading from a deck.",
  },
  {
    title: "More than twenty years of consulting behind every course.",
    description:
      "Teaching and advisory work feed each other. Examples come from live engagements, and the classroom keeps our consultants close to how practitioners learn.",
  },
  {
    title: "Exam vouchers included.",
    description:
      "The certification exam voucher is part of the course fee on our instructor-led programmes, with no separate booking or surprise cost.",
  },
  {
    title: "Structured exam preparation.",
    description:
      "Practice exams, mock exams and guided preparation help participants approach the exam with confidence, and support continues after the course ends.",
  },
  {
    title: "Hands-on, case study-based learning.",
    description:
      "Courses include practical case studies and, on ArchiMate programmes, modelling tool practice, so participants apply the standard instead of only memorising it.",
  },
  {
    title: "Active in the standards community.",
    description:
      "CC and C contributes to The Open Group and BIAN working groups and takes part in standards development, which keeps our material current as the standards evolve.",
  },
  {
    title: "Tailored private programmes.",
    description:
      "In-house programmes use an organisation's own context for the case study, so teams train on the problems they will face. This is how we build skills transformation services around a client rather than around a syllabus.",
  },
  {
    title: "Flexible delivery.",
    description:
      "Choose virtual classroom, in-person classroom, private in-house delivery, or self-paced ArchIQ eLearning with trainer support. The certification is the same whichever route you take.",
  },
];

const individualBenefits = [
  "Public virtual and in-person classes",
  "Exam voucher, practice exams and mock exams",
  "Official certification and digital badge",
  "Post-training support",
  "A clear pathway from Foundation to Practitioner to specialism",
];

const organisationBenefits = [
  "Private classes, virtual or on site, shaped to your goals",
  "Case studies built from your own architecture context",
  "Skills transformation services tailored to your teams",
  "ArchIQ eLearning for scalable, self-paced rollout",
  "Executive workshops for leadership alignment",
  "A single partner for training and consulting",
];

const archIqBenefits = [
  {
    title: "Learn on your own schedule.",
    description:
      "Work through short video modules and quizzes at your own pace, around project deadlines and time zones. There is no need to block consecutive days or travel to a classroom.",
  },
  {
    title: "Keep the trainer.",
    description:
      "A one hour virtual trainer session can be booked for clarification and exam preparation, so self-paced study still includes direct access to an expert when it matters most.",
  },
  {
    title: "Certify with confidence.",
    description:
      "The Certification option includes an exam voucher, unlimited mock exams through the official exam portal and one official attempt at the exam. The certification is the same as the one earned in the classroom.",
  },
  {
    title: "Scale across a team.",
    description:
      "For organisations, ArchIQ lets a wider group build baseline knowledge without losing a full working day each, and without scheduling constraints.",
  },
  {
    title: "Study with the standard in hand.",
    description:
      "The BIAN Reference Architecture Second Edition book is included, so the course and the reference material stay in step.",
  },
  {
    title: "Preview before you commit.",
    description:
      "Watch a free preview module on the ArchIQ platform before you sign up.",
  },
];

const accreditations = [
  {
    title: "BIAN Accredited Education Partner.",
    description:
      "Authorised by the Banking Industry Architecture Network to deliver BIAN certification worldwide.",
  },
  {
    title: "BIAN Best-in-Class Partner, 2024 and 2025.",
    description:
      "Recognised for adoption and consulting work with banks, fit for purpose training and contribution to the BIAN framework.",
  },
  {
    title: "TOGAF accredited training provider.",
    description: "Accredited by The Open Group to deliver TOGAF certification.",
  },
  {
    title: "ArchiMate and IT4IT training.",
    description: "Delivered under The Open Group certification programmes.",
  },
  {
    title: "Listed with Van Haren Group.",
    description: "Listed as an accredited BIAN training provider.",
  },
];

const clientNames = [
  "HSBC",
  "ANZ",
  "NAB",
  "TD Bank",
  "TDECU",
  "OTP Group",
  "Commonwealth Bank",
  "CIMB Bank",
  "Arvest",
  "UnionBank",
  "BDO",
  "Wintrust",
  "Security Bank",
  "Metro Bank",
  "ASB",
  "BECU",
];

const testimonials = [
  {
    quote: "My appreciation to CC&C for such an insightful training on BIAN.",
    author: "Alfredo Palafox",
    role: "Deputy Chief Architect LAM, HSBC",
  },
  {
    quote:
      "CC&C's BIAN course gave me an excellent introduction into banking standards and certifications.",
    author: "Abhishek Das",
    role: "NTT Data",
  },
  {
    quote:
      "Obtained more in-depth knowledge on BIAN both in methodology and in practice through CC&C Solutions training.",
    author: "Tony Huang",
    role: "National Australia Bank",
  },
  {
    quote:
      "Our partnership with CC&C Solutions has been transformative in accelerating our digital transformation journey. Their expertise in enterprise architecture, BIAN operating model, and agile methodologies has been instrumental in helping us shift to a product-oriented organization.",
    author: "Ashish Chopra",
    role: "Chief Information Officer, Texas Dow Employee Credit Union",
  },
  {
    quote:
      "I sincerely thank the entire CC&C team for your excellent support throughout the BIAN adoption process. I truly appreciate the professionalism, responsiveness, and quality of work you've brought to this collaboration.",
    author: "Domonkos Kertesz",
    role: "Chief IT Architect, OTP Group",
  },
  {
    quote:
      "ANZ has discovered CC&C Solutions to be an invaluable partner in our BIAN journey. Their extensive knowledge and collaborative approach have contributed significantly to our success.",
    author: "Arran Price",
    role: "Enterprise Architect, ANZ New Zealand",
  },
];

const basePath = import.meta.env.BASE_URL || "/";
const baseHref = (path: string) => `${basePath}${path.replace(/^\/+/, "")}`;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground">
          <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TrainingLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Architecture Training | BIAN, TOGAF, ArchiMate and IT4IT | CC&C";

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    description?.setAttribute(
      "content",
      "Accredited BIAN, TOGAF, ArchiMate and IT4IT training from practising architects. Build your architecture career or develop your organisation's capability.",
    );

    return () => {
      document.title = "CC&C Solutions";
      if (description && previousDescription) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-[#0b1728] text-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(143,199,255,0.18),transparent_34%),linear-gradient(115deg,#0b1728_0%,#12345a_100%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 hidden w-[48%] opacity-40 [background-image:linear-gradient(rgba(143,199,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.16)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,transparent,black)] lg:block" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-36">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e5bc68]">
                Accredited architecture training
              </p>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Grow your architecture career. Build your organisation&apos;s
                architecture capability.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Accredited training in BIAN, TOGAF, ArchiMate and IT4IT, taught by
                practising architects with more than twenty years of consulting
                experience. Advance your own career, or build a team that turns
                strategy into delivery.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={baseHref("/training/all-courses")}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5"
                >
                  Find a course <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={baseHref("/contact")}
                  className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Talk to us about team training
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm font-medium text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#e5bc68]" aria-hidden="true" />
                  Accredited programmes
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#8fc7ff]" aria-hidden="true" />
                  Practising architects
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#e5bc68]" aria-hidden="true" />
                  Practical case studies
                </span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl border border-[#8fc7ff]/25" aria-hidden="true" />
              <img
                src={baseHref("/assets/Images/togaf-classroom.jpg")}
                alt="Architecture professionals taking part in a classroom training session"
                className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Practical experience. Recognised credentials.
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Learn architecture from the people who practise it.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our trainers are working architects who advise banks and
                enterprises on strategy, platforms and delivery. They teach the
                standards as they apply them, using live engagements and real
                constraints, so participants leave with certification and the
                confidence to use it.
              </p>
              <p>
                We combine accreditation from the bodies that own the standards,
                trainers who practise architecture for a living, and more than
                twenty years of consulting. Individuals gain a recognised
                credential and practical skill. Organisations gain teams that
                deliver strategy more reliably.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The CC and C training difference"
              title="What sets CC and C training apart."
              description="Accredited standards, genuine practitioner experience and learning designed to transfer into the work."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trainingDifferences.map((item, index) => (
                <article
                  key={item.title}
                  className="h-full border border-border/70 bg-background p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Whether you are building a career or a team, we have a route for you."
              description="Choose the learning format and level of support that fit your goals."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="border-t-4 border-primary bg-muted/40 p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-bold">For individuals</h3>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Advance your career with expert-led training that builds
                  practical skill and leads to recognised certification. Join a
                  public class online or in person, or learn at your own pace
                  with ArchIQ eLearning. Each programme includes the exam
                  voucher, practice material and the guidance you need to
                  certify with confidence. If you are changing careers, we will
                  help you choose the shortest sensible route from your current
                  role to your target role.
                </p>
                <h4 className="mt-7 font-semibold">What individuals receive</h4>
                <BenefitList items={individualBenefits} />
                <a
                  href={baseHref("/training/all-courses")}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Find a course <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
              <article className="border-t-4 border-[#e5bc68] bg-muted/40 p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5bc68]/20 text-[#956a13]">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-bold">For organisations</h3>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Build architecture capability at scale. We run private and
                  in-house programmes tailored to your context, with case
                  studies drawn from your own estate, and we combine accredited
                  certification with skills transformation services designed
                  around your teams. For leadership, our BIAN Executive
                  Workshop translates the standard into business outcomes so
                  that sponsors can make informed decisions about adoption.
                </p>
                <h4 className="mt-7 font-semibold">What organisations receive</h4>
                <BenefitList items={organisationBenefits} />
                <a
                  href={baseHref("/contact")}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Talk to us about team training
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1728] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
                  ArchIQ eLearning
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ArchIQ: self-paced learning with a trainer by your side.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  ArchIQ is the CC and C eLearning platform, built as a hybrid
                  solution. It combines the flexibility of on-demand video
                  learning with the reassurance of direct access to a real BIAN
                  trainer and a full certification route.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="https://ccandc-academy.learnworlds.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5"
                  >
                    Enrol on ArchIQ
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://ccandc-academy.learnworlds.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Watch a free preview
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-6 text-xl font-bold">Why hybrid learning works</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {archIqBenefits.map((item, index) => (
                    <article
                      key={item.title}
                      className="border border-white/15 bg-white/[0.04] p-5"
                    >
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#8fc7ff]/15 text-sm font-bold text-[#8fc7ff]">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
                <p className="mt-7 border-l-2 border-[#e5bc68] pl-4 text-sm leading-relaxed text-white/75">
                  Today on ArchIQ: BIAN Foundation Training and BIAN Foundation
                  Certification Course. Further ArchIQ courses will be added as
                  they are released.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Accreditations and memberships"
              title="Accredited by the organisations that own the standards."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {accreditations.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-4 border border-border bg-background p-6"
                >
                  <Award
                    className="mt-1 h-6 w-6 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8fc] py-20 dark:bg-[#101923]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trusted by banks and enterprises around the world."
              description="CC and C has delivered training and advisory work for some of the world's leading financial institutions and enterprises."
            />
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {clientNames.map((name) => (
                <li
                  key={name}
                  className="flex min-h-16 items-center justify-center border border-border/70 bg-background px-4 py-3 text-center font-semibold text-muted-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What our clients say."
              description="Participants and sponsors describe the difference practical, practitioner-led training makes."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.author}
                  className="flex h-full flex-col border border-border bg-background p-6 shadow-sm"
                >
                  <Quote
                    className="mb-4 h-7 w-7 text-primary/70"
                    aria-hidden="true"
                  />
                  <blockquote className="flex-1 leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#e5bc68]">
              Take the next step
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build your architecture capability?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
              Whether you are starting a career in architecture, adding a
              specialism, or developing a whole team, we will help you find the
              right programme.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={baseHref("/training/all-courses")}
                className="inline-flex items-center gap-2 rounded-lg bg-[#e5bc68] px-5 py-3 font-semibold text-[#0b1728] transition-transform hover:-translate-y-0.5"
              >
                View our courses
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={baseHref("/contact")}
                className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>
        <p className="bg-background px-4 py-5 text-center text-xs leading-relaxed text-muted-foreground">
          TOGAF, ArchiMate and IT4IT are trademarks of The Open Group. BIAN is a
          trademark of the Banking Industry Architecture Network.
        </p>
      </main>
      <Footer />
    </div>
  );
}
