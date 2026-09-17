import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";

type TrainingMenuItem =
  | { label: string; path: string; items?: never }
  | { label: string; items: { label: string; path: string }[]; path?: never };

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isFindTrainingOpen, setIsFindTrainingOpen] = useState(false);
  const [openTrainingCategory, setOpenTrainingCategory] = useState<string | null>(null);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileFindTrainingOpen, setMobileFindTrainingOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { isAuthenticated, user } = useAuth();

  const isTrainingPage = location === "/ccandc-training" || location.startsWith("/training");
  const isConsultingPage = location === "/consulting" || location.startsWith("/consulting/");

  const trainingMenu: TrainingMenuItem[] = [
    {
      label: "TOGAF",
      items: [
        { label: "TOGAF® EA Foundation Certification Training", path: "/training/togaf-ea-foundation-certification-training" },
        { label: "TOGAF® EA Practitioner Certification Training", path: "/training/togaf-practitioner" },
        { label: "TOGAF® Foundation & Practitioner Training", path: "/training/togaf-foundation-practitioner-training" },
        { label: "TOGAF® EA Bridge", path: "/training/togaf-ea-bridge" },
      ],
    },
    {
      label: "ArchiMate",
      items: [
        { label: "ArchiMate®3 Foundation Training", path: "/training/archimate" },
        { label: "ArchiMate®3 Foundation & Practitioner Training", path: "/training/archimate" },
      ],
    },
    {
      label: "BIAN",
      items: [
        { label: "BIAN Foundation", path: "/training/bian-foundation-certification-training" },
        { label: "BIAN Practitioner", path: "/training/bian-practitioner-certification-training" },
        { label: "BIAN Foundation & Practitioner Training", path: "/training/bian-foundation-practitioner-certification-training" },
        { label: "BIAN Data Architecture", path: "/training/bian-data-architecture-practitioner-certification-training" },
        { label: "BIAN Integration", path: "/training/bian-integration" },
      ],
    },
    { label: "IT4IT", path: "/training/it4it-foundation" },
    { label: "Elearning- ArchIQ", path: "/training" },
    { label: "View All Courses", path: "/training/all-courses" },
  ];

  const mainMenuClass = "text-foreground hover:text-primary transition-colors";
  const mainMenuDropdownClass = "text-foreground hover:text-primary transition-colors flex items-center space-x-1";
  const submenuPanelClass = "bg-[#2177cd] border border-[#2177cd] shadow-lg";
  const nestedSubmenuPanelClass = "bg-[#155a9f] border border-[#155a9f] shadow-lg";
  const submenuListClass = "py-2 divide-y divide-white/20";
  const submenuItemClass = "w-full px-4 py-2 text-left text-white hover:bg-white hover:text-[#2177cd] transition-colors";
  const submenuItemFlexClass = "flex w-full items-center justify-between px-4 py-2 text-left text-white hover:bg-white hover:text-[#2177cd] transition-colors";
  const mobileSubmenuPanelClass = "ml-4 bg-[#2177cd] p-2 divide-y divide-white/20";
  const mobileNestedSubmenuPanelClass = "ml-4 mt-1 bg-[#155a9f] p-2 divide-y divide-white/20";
  const mobileSubmenuItemClass = "block w-full px-4 py-2 text-left text-white hover:bg-white hover:text-[#2177cd] transition-colors text-base";
  const mobileNestedSubmenuItemClass = "block w-full px-4 py-2 text-left text-white hover:bg-white hover:text-[#2177cd] transition-colors text-sm";

  const navigateTo = (path: string) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
    setIsWhatWeDoOpen(false);
    setIsIndustriesOpen(false);
    setIsFindTrainingOpen(false);
    setOpenTrainingCategory(null);
    setMobileFindTrainingOpen(false);
  };

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;
    setIsDarkMode(nextIsDarkMode);
    document.documentElement.classList.toggle("dark", nextIsDarkMode);
    localStorage.setItem("theme", nextIsDarkMode ? "dark" : "light");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <button onClick={() => setLocation("/")} className="flex items-center space-x-3 cursor-pointer">
                <img 
                  src="/assets/Images/CC&CLogo.png"
                  alt="CC&C Solutions Logo" 
                  className="h-20 w-auto"
                  data-testid="img-logo-header"
                />
              </button>
            </div>
            
            <div className={`hidden md:flex items-center ${isTrainingPage || isConsultingPage ? 'space-x-5' : 'space-x-8'}`}>
              {isTrainingPage && (
                <>
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsFindTrainingOpen(true)}
                    onMouseLeave={() => {
                      setIsFindTrainingOpen(false);
                      setOpenTrainingCategory(null);
                    }}
                  >
                    <button 
                      onClick={() => navigateTo('/training')}
                      className={mainMenuDropdownClass}
                      data-testid="dropdown-find-training"
                    >
                      <span>Find Training</span>
                      <i className={`fas fa-chevron-down text-xs transition-transform ${isFindTrainingOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {isFindTrainingOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className={submenuPanelClass}>
                          <div className={submenuListClass}>
                            {trainingMenu.map((item) => (
                              item.items ? (
                                <div
                                  key={item.label}
                                  className="relative"
                                  onMouseEnter={() => setOpenTrainingCategory(item.label)}
                                >
                                  <button
                                    type="button"
                                    onClick={() => setOpenTrainingCategory(openTrainingCategory === item.label ? null : item.label)}
                                    className={submenuItemFlexClass}
                                  >
                                    <span>{item.label}</span>
                                    <i className="fas fa-chevron-right text-xs"></i>
                                  </button>
                                  {openTrainingCategory === item.label && (
                                    <div className={`absolute left-full top-0 w-80 ${nestedSubmenuPanelClass}`}>
                                      <div className={submenuListClass}>
                                        {item.items.map((subItem) => (
                                          <button
                                            key={subItem.label}
                                            type="button"
                                            onClick={() => navigateTo(subItem.path)}
                                            className={submenuItemClass}
                                          >
                                            {subItem.label}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <button
                                  key={item.label}
                                  type="button"
                                  onMouseEnter={() => setOpenTrainingCategory(null)}
                                  onClick={() => navigateTo(item.path)}
                                  className={submenuItemClass}
                                >
                                  {item.label}
                                </button>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button onClick={() => navigateTo('/training')} className={mainMenuClass}>
                    Corporate Training
                  </button>
                </>
              )}
              {isConsultingPage && (
                <button onClick={() => navigateTo('/consulting')} className={mainMenuClass}>
                  Consulting
                </button>
              )}
              {/* What we do dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsWhatWeDoOpen(true)}
                onMouseLeave={() => setIsWhatWeDoOpen(false)}
              >
                <button 
                  onClick={() => setLocation('/what-we-do')}
                  className={mainMenuDropdownClass}
                  data-testid="dropdown-what-we-do"
                >
                  <span>What we do</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {/* Dropdown menu */}
                {isWhatWeDoOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                  >
                    <div className={submenuPanelClass}>
                      <div className={submenuListClass}>
                        <button 
                          onClick={() => navigateTo('/training')}
                          className={submenuItemClass}
                          data-testid="dropdown-training"
                        >
                          Training
                        </button>
                        <button 
                          onClick={() => navigateTo('/consulting')}
                          className={submenuItemClass}
                          data-testid="dropdown-consulting"
                        >
                          Consulting
                        </button>
                        <button 
                          onClick={() => navigateTo('/products')}
                          className={submenuItemClass}
                          data-testid="dropdown-viztools"
                        >
                          Products
                        </button>
                        {/* <button 
                          onClick={() => { setLocation('/bian-training'); setIsWhatWeDoOpen(false); }}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          data-testid="dropdown-bian"
                        >
                          BIANz
                        </button> */}

                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries We Serve dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                <button 
                  className={mainMenuDropdownClass}
                  data-testid="dropdown-industries"
                >
                  <span>Industries We Serve</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {/* Dropdown menu */}
                {isIndustriesOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-48 z-50"
                  >
                    <div className={submenuPanelClass}>
                      <div className={submenuListClass}>
                        <button 
                          onClick={() => { window.location.href = 'https://bian1.ccandcsolutions.com'; }}
                          className={submenuItemClass}
                          data-testid="dropdown-banking"
                        >
                          Banking & BIAN
                        </button>
                        <button 
                          onClick={() => { setLocation('/insurance'); setIsIndustriesOpen(false); }}
                          className={submenuItemClass}
                          data-testid="dropdown-insurance"
                        >
                          Insurance
                        </button>
                        <button 
                          onClick={() => { setLocation('/manufacturing'); setIsIndustriesOpen(false); }}
                          className={submenuItemClass}
                          data-testid="dropdown-manufacturing"
                        >
                          Manufacturing
                        </button>
                        <button
                          type="button"
                          disabled
                          className="w-full cursor-default px-4 py-2 text-left text-white/70 transition-colors"
                          data-testid="dropdown-health"
                        >
                          Health
                        </button>
                        <button
                          type="button"
                          disabled
                          className="w-full cursor-default px-4 py-2 text-left text-white/70 transition-colors"
                          data-testid="dropdown-retail"
                        >
                          Retail
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button onClick={() => setLocation('/insights')} className={mainMenuClass}>
                Insights
              </button>
              <button onClick={() => setLocation('/about')} className={mainMenuClass}>
                About
              </button>
              {/* <button onClick={() => setLocation('/offerings')} className="text-muted-foreground hover:text-primary transition-colors">
                Our Offerings
              </button> */}
              <button onClick={() => setLocation('/contact')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors" data-testid="link-contact">
                Contact
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                data-testid="theme-toggle"
              >
                {isDarkMode ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
              </button>
              {isAuthenticated && user?.isAdmin && (
                <a href="/admin" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
                  Admin
                </a>
              )}
            </div>
            
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <i className="fas fa-bars text-primary"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex w-full items-center justify-between px-3 py-3 text-foreground hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-theme-toggle"
              >
                <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
                {isDarkMode ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
              </button>
              {isTrainingPage && (
                <>
                  <button 
                    onClick={() => setMobileFindTrainingOpen(!mobileFindTrainingOpen)}
                    className="flex items-center justify-between w-full px-3 py-3 text-foreground font-medium text-base hover:bg-muted rounded-md transition-colors"
                    data-testid="mobile-dropdown-find-training"
                  >
                    <span>Find Training</span>
                    <i className={`fas fa-chevron-down text-sm transition-transform ${mobileFindTrainingOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {mobileFindTrainingOpen && (
                    <div className={mobileSubmenuPanelClass}>
                      {trainingMenu.map((item) => (
                        item.items ? (
                          <div key={item.label}>
                            <button
                              type="button"
                              onClick={() => setOpenTrainingCategory(openTrainingCategory === item.label ? null : item.label)}
                              className="flex w-full items-center justify-between px-4 py-2 text-left text-white hover:bg-white hover:text-[#2177cd] transition-colors text-base"
                            >
                              <span>{item.label}</span>
                              <i className={`fas fa-chevron-down text-xs transition-transform ${openTrainingCategory === item.label ? 'rotate-180' : ''}`}></i>
                            </button>
                            {openTrainingCategory === item.label && (
                              <div className={mobileNestedSubmenuPanelClass}>
                                {item.items.map((subItem) => (
                                  <button
                                    key={subItem.label}
                                    type="button"
                                    onClick={() => navigateTo(subItem.path)}
                                    className={mobileNestedSubmenuItemClass}
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => navigateTo(item.path)}
                            className={mobileSubmenuItemClass}
                          >
                            {item.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                  <button 
                    onClick={() => navigateTo('/training')} 
                    className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-corporate-training"
                  >
                    Corporate Training
                  </button>
                </>
              )}
              {/* What we do - Collapsible */}
              <button 
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-foreground font-medium text-base hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-dropdown-what-we-do"
              >
                <span>What we do</span>
                <i className={`fas fa-chevron-down text-sm transition-transform ${mobileWhatWeDoOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {mobileWhatWeDoOpen && (
                <div className={mobileSubmenuPanelClass}>
                  <button 
                    onClick={() => navigateTo('/training')} 
                    className={mobileSubmenuItemClass}
                    data-testid="mobile-link-training"
                  >
                    ArchIQ (Training)
                  </button>
                  <button 
                    onClick={() => navigateTo('/consulting')} 
                    className={mobileSubmenuItemClass}
                    data-testid="mobile-link-consulting"
                  >
                    AdviseIQ (Consulting)
                  </button>
                  <button 
                    onClick={() => navigateTo('/products')} 
                    className={mobileSubmenuItemClass}
                    data-testid="mobile-link-viztools"
                  >
                    StratIQ (Visualisation Tools)
                  </button>
                  {/* <button 
                    onClick={() => { setLocation('/bian-training'); setIsMobileMenuOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                    data-testid="mobile-link-bian"
                  >
                    BIANq
                  </button> */}

                </div>
              )}
              {isConsultingPage && (
                <button 
                  onClick={() => navigateTo('/consulting')} 
                  className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                  data-testid="mobile-link-consulting-page"
                >
                  Consulting
                </button>
              )}
              
              {/* Industries We Serve - Collapsible */}
              <button 
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-foreground font-medium text-base hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-dropdown-industries"
              >
                <span>Industries We Serve</span>
                <i className={`fas fa-chevron-down text-sm transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {mobileIndustriesOpen && (
                <div className={mobileSubmenuPanelClass}>
                  <button 
                    onClick={() => { window.location.href = 'https://bian1.ccandcsolutions.com'; }}
                    className={mobileSubmenuItemClass}
                    data-testid="mobile-link-banking"
                  >
                    Banking
                  </button>
                  <button 
                    onClick={() => { setLocation('/insurance'); setIsMobileMenuOpen(false); }} 
                    className={mobileSubmenuItemClass}
                    data-testid="mobile-link-insurance"
                  >
                    Insurance
                  </button>
                  <button 
                    onClick={() => { setLocation('/manufacturing'); setIsMobileMenuOpen(false); }} 
                    className={mobileSubmenuItemClass}
                    data-testid="mobile-link-manufacturing"
                  >
                    Manufacturing
                  </button>
                  <button
                    type="button"
                    disabled
                    className="block w-full cursor-default px-4 py-2 text-left text-white/70 transition-colors text-base"
                    data-testid="mobile-link-health"
                  >
                    Health
                  </button>
                  <button
                    type="button"
                    disabled
                    className="block w-full cursor-default px-4 py-2 text-left text-white/70 transition-colors text-base"
                    data-testid="mobile-link-retail"
                  >
                    Retail
                  </button>
                </div>
              )}
              
              {/* Other Menu Items */}
              <button 
                onClick={() => { setLocation('/insights'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-link-insights"
              >
                Insights
              </button>
              <button 
                onClick={() => { setLocation('/about'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
                data-testid="mobile-link-about"
              >
                About
              </button>
              {/* <button 
                onClick={() => { setLocation('/our-offerings'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors text-base"
              >
                Our Offerings
              </button> */}
              <button 
                onClick={() => { setLocation('/contact'); setIsMobileMenuOpen(false); }} 
                className="block w-full text-left px-3 py-3 bg-primary text-primary-foreground rounded-md mt-2 hover:bg-primary/90 transition-colors font-medium text-base"
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
              {isAuthenticated && user?.isAdmin && (
                <a 
                  href="/admin" 
                  className="block w-full text-left px-3 py-3 bg-secondary text-secondary-foreground rounded-md mt-2 hover:bg-secondary/90 transition-colors font-medium text-base"
                >
                  Admin
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
      <div id="home" className="h-16"></div> {/* Spacer for fixed nav */}
    </>
  );
}
