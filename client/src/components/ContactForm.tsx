import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import PrivacyPolicyDialog from "@/components/PrivacyPolicyDialog";
import TermsConditionsDialog from "@/components/TermsConditionsDialog";
import { isStaticMode } from "@/lib/staticData";
import { MessageSquareText, Send } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

// Formspree endpoint for static builds
// To set up: Sign up at formspree.io and create a form for anish@ccandcsolutions.com
// Replace this with your actual Formspree form ID
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xanavjan";


interface ContactFormProps {
  showServiceInterest?: boolean;
  trainingTheme?: boolean;
}

export default function ContactForm({ showServiceInterest = true, trainingTheme = false }: ContactFormProps) {
  const { toast } = useToast();
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    region: '',
    service: '',
    message: '',
    terms: false,
    marketing: false
  });

  // COMMENTED OUT: Fetch reCAPTCHA site key (only in dynamic mode) - will use later
  // const { data: recaptchaConfig } = useQuery<{ siteKey: string }>({
  //   queryKey: ['/api/recaptcha-site-key'],
  //   enabled: !isStaticMode,
  // });

  // COMMENTED OUT: Render reCAPTCHA widget when site key is loaded (only in dynamic mode) - will use later
  // useEffect(() => {
  //   if (!isStaticMode && recaptchaConfig?.siteKey && recaptchaRef.current && window.grecaptcha) {
  //     // Check if widget is already rendered
  //     if (!recaptchaRef.current.hasChildNodes()) {
  //       window.grecaptcha.render(recaptchaRef.current, {
  //         sitekey: recaptchaConfig.siteKey,
  //       });
  //     }
  //   }
  // }, [recaptchaConfig]);

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      // In static mode, use Formspree endpoint
      if (isStaticMode) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${data.firstName} ${data.lastName}`,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            company: data.company,
            region: data.region,
            service: data.service,
                  phone: data.phone,
            message: data.message,
            _replyto: data.email,
            _subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
          }),
        });

        if (!response.ok) {
          const error = await response.json().catch(() => ({ error: 'Unknown error' }));
          throw new Error(error.error || 'Form submission failed');
        }

        return response.json();
      }
      
      // COMMENTED OUT: In dynamic mode, use backend API with reCAPTCHA - will use later
      // const recaptchaToken = window.grecaptcha?.getResponse();
      // 
      // if (!recaptchaToken) {
      //   throw new Error('Please complete the reCAPTCHA verification');
      // }

      // return await apiRequest('POST', '/api/contact', {
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: data.email,
      //   company: data.company,
      //   region: data.region,
      //   service: data.service,
      //   message: data.message,
      //   recaptchaToken
      // });

      // For now, use Formspree even in dynamic mode (can switch back later)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          company: data.company,
          phone: data.phone,
          region: data.region,
          service: data.service,
           phone: data.phone,
          message: data.message,
          _replyto: data.email,
          _subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
        }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(error.error || 'Form submission failed');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        region: '',
        service: '',
        message: '',
        phone: '',
        terms: false,
        marketing: false
      });
      // COMMENTED OUT: Reset reCAPTCHA - will use later
      // if (window.grecaptcha) {
      //   window.grecaptcha.reset();
      // }
    },
    onError: (error: any) => {
      const errorMessage = error?.message || "Please try again later or contact us directly.";
      toast({
        title: "Error Sending Message",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message || !formData.terms) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields marked with * are required.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number (at least 7 digits)
    const phoneDigitsOnly = formData.phone.replace(/[^0-9]/g, '');
    if (phoneDigitsOnly.length < 7) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number with at least 7 digits.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className={trainingTheme ? "relative isolate overflow-hidden bg-[#0b1728] py-20" : "py-20 bg-primary"}>
      {trainingTheme && <>
        <div className="absolute inset-y-0 right-0 w-[58%] opacity-35 [background-image:linear-gradient(rgba(143,199,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(143,199,255,0.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,transparent,black_28%,black)]" aria-hidden="true" />
        <div className="absolute right-[8%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#8fc7ff]/15" aria-hidden="true" />
      </>}
      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${trainingTheme ? "text-white" : ""}`}>
        {trainingTheme && <div className="mb-10 text-center">
          <MessageSquareText className="mx-auto mb-4 h-8 w-8 text-[#e5bc68]" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc7ff]">Tell us what you are working through</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Talk with our architecture team.</h2>
        </div>}

        <Card className={`rounded-2xl shadow-2xl ${trainingTheme ? "border-[#8fc7ff]/35" : ""}`}>
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="firstName">First Name *</label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Enter your first name"
                    data-testid="input-first-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="lastName">Last Name *</label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Enter your last name"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="email">Email Address *</label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email address"
                  data-testid="input-email"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="fs-field space-y-2">
                  <label className="fs-label text-sm font-medium text-card-foreground" htmlFor="phone-number">
                    Phone Number *
                  </label>
                  <input
                    className="fs-input flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone-number"
                    name="phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const filtered = e.target.value.replace(/[^0-9()\-\s+]/g, '');
                      if (filtered.length <= 20) {
                        setFormData({...formData, phone: filtered});
                      }
                    }}
                    placeholder="(XXX) XXX-XXXX"
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="company">Company</label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Enter your company name"
                    data-testid="input-company"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="region">Region</label>
                <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
                  <SelectTrigger data-testid="select-region">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="australia-nz">Australia & New Zealand</SelectItem>
                    <SelectItem value="singapore-sea">Singapore & South East Asia</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="uk-europe">UK & Europe</SelectItem>
                    <SelectItem value="usa-americas">USA & Americas</SelectItem>
                    <SelectItem value="middle-east">Middle East</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {showServiceInterest && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground" htmlFor="service">Service Interest</label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="togaf-training">TOGAF® Training</SelectItem>
                      <SelectItem value="bian-training">BIAN Training</SelectItem>
                      {/* <SelectItem value="bian-sig">BIAN SIG</SelectItem> */}
                      <SelectItem value="it4it-training">IT4IT™ Training</SelectItem>
                      <SelectItem value="archiq">ArchiQ</SelectItem>
                      <SelectItem value="adviseiq">AdviseIQ</SelectItem>
                      <SelectItem value="stratiq">StratIQ</SelectItem>
                      <SelectItem value="enterprise-consulting">Enterprise Architecture Consulting</SelectItem>
                      <SelectItem value="business-architecture">Business Architecture</SelectItem>
                      <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                      <SelectItem value="architecting-for-ai">Architecting for AI Course</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground" htmlFor="message">Message *</label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements and how we can help..."
                  data-testid="textarea-message"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={formData.terms}
                  onCheckedChange={(checked) => setFormData({...formData, terms: checked as boolean})}
                  required
                  data-testid="checkbox-terms"
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-card-foreground cursor-pointer"
                  data-testid="label-terms"
                >
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setTermsDialogOpen(true);
                    }}
                    className="text-accent hover:underline"
                    data-testid="button-terms-conditions"
                  >
                    terms & conditions
                  </button>{' '}and{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setPrivacyDialogOpen(true);
                    }}
                    className="text-accent hover:underline"
                    data-testid="button-privacy-policy"
                  >
                    privacy policy
                  </button> *
                </label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="marketing" 
                  checked={formData.marketing}
                  onCheckedChange={(checked) => setFormData({...formData, marketing: checked as boolean})}
                  data-testid="checkbox-marketing"
                />
                <label 
                  htmlFor="marketing" 
                  className="text-sm text-card-foreground cursor-pointer"
                  data-testid="label-marketing"
                >
                  I'd like to receive exclusive offers, promotions, and updates
                </label>
              </div>
              
              {/* COMMENTED OUT: reCAPTCHA container - will use later */}
              {/* <div className="flex justify-center" data-testid="recaptcha-container">
                <div ref={recaptchaRef}></div>
              </div> */}
              
              <Button 
                type="submit" 
                className={`w-full py-4 text-lg font-semibold ${trainingTheme ? "bg-[#e5bc68] text-[#0b1728] hover:bg-[#e5bc68]/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? "Sending..." : <>{trainingTheme && <Send className="mr-2 h-4 w-4" aria-hidden="true" />}Send Message</>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <PrivacyPolicyDialog 
        open={privacyDialogOpen}
        onOpenChange={setPrivacyDialogOpen}
      />
      
      <TermsConditionsDialog 
        open={termsDialogOpen}
        onOpenChange={setTermsDialogOpen}
      />
    </section>
  );
}
