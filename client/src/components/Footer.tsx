import { useState } from "react";
import { useLocation } from "wouter";
import PrivacyPolicyDialog from "@/components/PrivacyPolicyDialog";
import TermsConditionsDialog from "@/components/TermsConditionsDialog";

export default function Footer() {
  const [, setLocation] = useLocation();
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  return (
    <footer className="bg-gray-800 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/Images/CC&CLogo.png"
                alt="CC&C Solutions Logo" 
                className="h-28 w-auto"
                data-testid="img-logo-footer"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Powering digital transformation through world-class architecture consulting and training for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/ccandcsolutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-primary-foreground"></i>
              </a>
              <a 
                href="https://x.com/ccandcsolutions" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter text-primary-foreground"></i>
              </a>
              <a 
                href="https://www.youtube.com/@ccandcsolutions576" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-youtube"
              >
                <i className="fab fa-youtube text-primary-foreground"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => setLocation('/ccandc-training')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-archiq-training"
                >
                  ArchIQ Training
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation('/consulting')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-adviseiq-consulting"
                >
                  AdviseIQ Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation('/viztools')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-stratiq-visualisation"
                >
                  StratIQ Visualisation Tools
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => setLocation('/banking')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-banking"
                >
                  Banking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation('/insurance')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-insurance"
                >
                  Insurance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation('/manufacturing')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-manufacturing"
                >
                  Manufacturing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => setLocation('/about')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation('/case-studies')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-case-studies"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLocation('/contact')} 
                  className="hover:text-secondary transition-colors text-left"
                  data-testid="link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2026 CC&C Solutions. All rights reserved. |{' '}
            <button 
              onClick={() => setPrivacyDialogOpen(true)}
              className="hover:text-secondary transition-colors underline"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </button>{' '}
            |{' '}
            <button 
              onClick={() => setTermsDialogOpen(true)}
              className="hover:text-secondary transition-colors underline"
              data-testid="link-terms-of-service"
            >
              Terms of Service
            </button>
          </p>
        </div>
      </div>

      <PrivacyPolicyDialog 
        open={privacyDialogOpen}
        onOpenChange={setPrivacyDialogOpen}
      />
      
      <TermsConditionsDialog 
        open={termsDialogOpen}
        onOpenChange={setTermsDialogOpen}
      />
    </footer>
  );
}
