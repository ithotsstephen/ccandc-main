import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const engagements = [
  {
    number: "01",
    category: "Banking",
    client: "A global banking group",
    title: "An application landscape that could finally answer who owns what",
    problem: "The group could not say, for a given business capability, which system was authoritative for it. That question sat underneath every integration decision, every duplication argument and every regulatory data request, and each programme was answering it locally and differently. The cost was invisible because it was distributed across projects that each absorbed a little of it.",
    work: "The estate was mapped against the BIAN Service Landscape, business area by business area rather than all at once. Contested boundaries were surfaced deliberately rather than smoothed over, then settled with owners named and the reasoning recorded so a successor could revisit each call honestly. Governance was established around the model before the mapping widened.",
    outcomes: [
      "More than 200 applications mapped to BIAN Service Domains.",
      "Authority for each mapped capability recorded against a named owner.",
      "Subsequent programmes started from the shared picture rather than rebuilding one.",
      "The vocabulary came from an industry standard, so it held up against vendors and partners.",
    ],
  },
  {
    number: "02",
    category: "Banking",
    client: "A banking group in transformation",
    title: "A leadership group that stopped arguing about definitions",
    problem: "A transformation had been funded and the leadership group responsible for it did not share a vocabulary. Meetings stalled on what terms meant rather than on what to do, and each function had arrived with its own model of the bank. Certifying individuals one at a time would not have fixed it, because the value of a shared vocabulary only appears once enough people in the same room hold it.",
    work: "A single cohort programme was designed around the transformation rather than around a syllabus. Accredited certification supplied the standard; the examples and exercises were rebuilt on the organisation's own architecture, so the systems discussed in the room were the systems in the room. The cohort was composed deliberately to put the people who would later have to agree in the same sessions.",
    outcomes: [
      "More than 75 senior leaders taken through a single programme.",
      "One vocabulary across functions that had previously each held their own.",
      "A shared reference the organisation continued to use after the programme closed.",
      "Disagreements moved from what the words meant to what the decision should be.",
    ],
  },
  {
    number: "03",
    category: "Modernisation",
    client: "A core platform programme",
    title: "Boundary decisions taken early and defensible in year four",
    problem: "A core replacement programme was setting the target service boundaries in its first months, under time pressure, with several hundred practitioners about to build against them. Boundaries drawn around the current organisation chart would have inherited its dysfunction; boundaries drawn around the incumbent platform would have tied the estate to a vendor roadmap. Either error would be paid for repeatedly and would be expensive to reverse.",
    work: "Target boundaries were drawn from an industry service model rather than invented for the programme, and each boundary decision was recorded with its reasoning. The transition was sequenced so the estate kept operating, with coexistence and data migration treated as design problems rather than as later phases. The practitioner community was supported through the change so the decisions were understood rather than merely issued.",
    outcomes: [
      "More than 100 practitioners supported through the modernisation.",
      "Target boundaries drawn from an industry standard rather than from the organisation chart.",
      "Each boundary decision recorded with its alternatives and its reasoning.",
      "Coexistence designed rather than discovered, which is where these programmes overrun.",
    ],
  },
];

export default function CaseStudies() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Studies - CC&C Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-[hsl(222,47%,11%)] py-24 text-white sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(33,119,205,0.3),transparent_38%),radial-gradient(circle_at_15%_85%,rgba(203,151,41,0.18),transparent_34%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Engagements
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Three that show the shape of the work.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
                Different problems, one underlying pattern: an estate or a function that could not answer a question it needed to answer, and a piece of architecture work that made the answer available and kept it available.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {engagements.map((engagement) => (
                <article
                  key={engagement.number}
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="grid lg:grid-cols-[180px_1fr]">
                    <div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground lg:p-10">
                      <span className="text-5xl font-bold tracking-tight text-white/90">{engagement.number}</span>
                      <div className="mt-10">
                        <div className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">{engagement.category}</div>
                        <div className="mt-2 text-lg font-semibold">{engagement.client}</div>
                      </div>
                    </div>
                    <div className="p-8 sm:p-10 lg:p-12">
                      <h2 className="max-w-4xl text-2xl font-bold leading-tight text-card-foreground md:text-4xl">
                        {engagement.title}
                      </h2>
                      <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">The problem</h3>
                          <p className="leading-relaxed text-muted-foreground">{engagement.problem}</p>
                        </div>
                        <div>
                          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">What we did</h3>
                          <p className="leading-relaxed text-muted-foreground">{engagement.work}</p>
                        </div>
                      </div>
                      <div className="mt-10 border-t border-border pt-8">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-secondary">Outcome</h3>
                        <ul className="grid gap-3 md:grid-cols-2">
                          {engagement.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 inline-flex rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
              The one we can name
            </div>
            <h2 className="max-w-3xl text-3xl font-bold text-foreground md:text-5xl">
              Caixa Geral de Depositos, written up by BIAN rather than by us.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The largest bank in Portugal held a legacy estate of more than seven hundred applications that could not say what each one was for or where its functionality was duplicated. CC and C supplied the BIAN subject matter expertise, mapping the estate against the BIAN Service Domain model in tranches sized to the bank's own goals rather than attempting it in one pass. The first tranche was delivered on time and within budget, and a second phase was planned to extend the method to interface specifications.
              </p>
              <p>
                It appears here under its own name for one reason. The Banking Industry Architecture Network published it as a success story, quoting the bank's Architecture Director, and the same body gave CC and C its Best-in-Class Partners Award for 2024. Evidence a reader can check at a source with no commercial interest in us is worth more than any account we could write, which is why the full engagement and both citations sit on the awards page.
              </p>
            </div>
            <a
              href="https://bian.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
              data-testid="link-published-engagement"
            >
              Read the published engagement
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
            <div>
              <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Why the rest are not named
              </div>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">The specificity is in the problem, not the logo.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Anonymising an engagement is standard practice in architecture consulting, and it is not a limitation. It is what allows the description to be specific about what was actually difficult, which is the only part a reader evaluating you is interested in. A named case study cleared by a client communications team usually says less.
              </p>
            </div>
            <button
              onClick={() => setLocation("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
              data-testid="button-ask-relevant-experience"
            >
              Ask about relevant experience
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section className="border-t border-border bg-primary py-14 text-center text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold md:text-3xl">The BIAN practice</h2>
            <p className="mt-3 text-primary-foreground/80">Architecture work grounded in standards, evidence, and decisions that remain useful after the programme ends.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
