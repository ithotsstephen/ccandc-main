import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrainingHeroBackdrop from "@/components/TrainingHeroBackdrop";

const courseGroups = [
  {
    category: "TOGAF",
    courses: [
      {
        title: "TOGAF® EA Foundation Certification Training",
        path: "/training/togaf-ea-foundation-certification-training",
        description: "Build foundational knowledge of the TOGAF standard and enterprise architecture concepts.",
      },
      {
        title: "TOGAF® EA Practitioner Certification Training",
        path: "/training/togaf-practitioner",
        description: "Learn to apply the TOGAF Standard, 10th Edition in practical architecture work.",
      },
      {
        title: "TOGAF® Foundation & Practitioner Training",
        path: "/training/togaf-foundation-practitioner-training",
        description: "A combined path covering both foundation knowledge and practitioner application.",
      },
      {
        title: "TOGAF® EA Bridge",
        path: "/training/togaf-ea-bridge",
        description: "Bridge existing TOGAF knowledge into the updated enterprise architecture certification path.",
      },
    ],
  },
  {
    category: "ArchiMate",
    courses: [
      {
        title: "ArchiMate®3 Foundation Training",
        path: "/training/archimate",
        description: "Learn the core ArchiMate language for communicating architecture models clearly.",
      },
      {
        title: "ArchiMate®3 Foundation & Practitioner Training",
        path: "/training/archimate",
        description: "Progress from ArchiMate foundations into practical modeling and certification preparation.",
      },
    ],
  },
  {
    category: "BIAN",
    courses: [
      {
        title: "BIAN Foundation",
        path: "/training/bian-foundation-certification-training",
        description: "Understand BIAN principles, service domains, business scenarios, and banking architecture foundations.",
      },
      {
        title: "BIAN Practitioner",
        path: "/training/bian-practitioner-certification-training",
        description: "Apply the BIAN standard to real-world modular and interoperable banking architecture.",
      },
      {
        title: "BIAN Foundation & Practitioner Training",
        path: "/training/bian-foundation-practitioner-certification-training",
        description: "A combined BIAN certification path from core concepts to practical application.",
      },
      {
        title: "BIAN Data Architecture",
        path: "/training/bian-data-architecture-practitioner-certification-training",
        description: "Explore the BIAN Object Model, data patterns, and reference architecture concepts.",
      },
      {
        title: "BIAN Integration",
        path: "/training/bian-integration",
        description: "Develop practical BIAN integration knowledge for financial services architecture teams.",
      },
    ],
  },
  {
    category: "ITforIT and ArchIQ",
    courses: [
      {
        title: "ITforIT",
        path: "/training/it4it-foundation",
        description: "Master the IT4IT reference architecture and value-stream approach to managing IT as a business.",
      },
      {
        title: "Elearning- ArchIQ",
        path: "/training",
        description: "Access ArchIQ learning experiences for architecture teams and enterprise capability development.",
      },
    ],
  },
];

export default function AllCourses() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "All Training Courses | CC&C Solutions";

    return () => {
      document.title = "CC&C Solutions";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <TrainingHeroBackdrop className="pt-24 pb-16">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 md:px-8 md:py-4 bg-white/20 border-2 border-white/40 rounded-full text-white font-bold text-2xl md:text-3xl mb-8 shadow-lg">
            Training
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            View All Courses
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Explore CC&C training across TOGAF, ArchiMate, BIAN, ITforIT, and ArchIQ learning paths.
          </p>
        </div>
      </TrainingHeroBackdrop>

      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courseGroups.map((group) => (
              <div key={group.category}>
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{group.category}</h2>
                  <div className="h-px flex-1 bg-border"></div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {group.courses.map((course) => (
                    <Card key={course.title} className="premium-card h-full group hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-8 flex h-full flex-col">
                        <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                          <i className="fas fa-graduation-cap text-xl text-primary"></i>
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                          {course.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => setLocation(course.path)}
                          className="premium-button px-5 py-3 font-semibold transition-all hover:translate-y-[-1px]"
                        >
                          Learn More
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
