{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
import \{ Button \} from "./ui/button";\
import \{ Input \} from "./ui/input";\
import \{ X \} from "lucide-react";\
\
interface MoreInfoModalProps \{\
  isOpen: boolean;\
  onClose: () => void;\
\}\
\
export function MoreInfoModal(\{ isOpen, onClose \}: MoreInfoModalProps) \{\
  const [formData, setFormData] = useState(\{\
    firstName: "",\
    lastName: "",\
    email: "",\
    role: "",\
    company: "",\
    useCase: "",\
    phone: "",\
    usesJira: ""\
  \});\
\
  const [submitted, setSubmitted] = useState(false);\
\
  const handleSubmit = (e: React.FormEvent) => \{\
    e.preventDefault();\
    \
    // Basic validation\
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role) \{\
      return;\
    \}\
\
    console.log("Form submitted:", formData);\
    setSubmitted(true);\
\
    // Reset after 3 seconds\
    setTimeout(() => \{\
      setSubmitted(false);\
      onClose();\
      setFormData(\{\
        firstName: "",\
        lastName: "",\
        email: "",\
        role: "",\
        company: "",\
        useCase: "",\
        phone: "",\
        usesJira: ""\
      \});\
    \}, 3000);\
  \};\
\
  if (!isOpen) return null;\
\
  return (\
    <div className="fixed inset-0 z-[100] flex items-center justify-center">\
      \{/* Backdrop */\}\
      <div \
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"\
        onClick=\{onClose\}\
      />\
\
      \{/* Modal */\}\
      <div className="relative bg-[#0A0E14] border-2 border-primary/50 rounded-lg shadow-2xl shadow-primary/20 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">\
        \{/* Close button */\}\
        <button\
          onClick=\{onClose\}\
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"\
          aria-label="Close modal"\
        >\
          <X className="w-5 h-5" />\
        </button>\
\
        <div className="p-8">\
          \{submitted ? (\
            <div className="text-center py-12">\
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">\
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">\
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=\{2\} d="M5 13l4 4L19 7" />\
                </svg>\
              </div>\
              <h3 className="text-2xl font-medium text-foreground mb-2">Thank you!</h3>\
              <p className="text-muted-foreground">\
                We'll send you information about ScopeTraceAI shortly.\
              </p>\
            </div>\
          ) : (\
            <>\
              <h2 className="text-2xl font-medium text-foreground mb-2">\
                More information\
              </h2>\
              <p className="text-muted-foreground mb-8">\
                Share a few details and we'll send you everything you need about ScopeTraceAI.\
              </p>\
\
              <form onSubmit=\{handleSubmit\} className="space-y-6">\
                \{/* First Name */\}\
                <div>\
                  <label htmlFor="firstName" className="block text-sm text-foreground mb-2">\
                    First name <span className="text-destructive">*</span>\
                  </label>\
                  <Input\
                    id="firstName"\
                    type="text"\
                    required\
                    value=\{formData.firstName\}\
                    onChange=\{(e) => setFormData(\{ ...formData, firstName: e.target.value \})\}\
                    className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"\
                  />\
                </div>\
\
                \{/* Last Name */\}\
                <div>\
                  <label htmlFor="lastName" className="block text-sm text-foreground mb-2">\
                    Last name <span className="text-destructive">*</span>\
                  </label>\
                  <Input\
                    id="lastName"\
                    type="text"\
                    required\
                    value=\{formData.lastName\}\
                    onChange=\{(e) => setFormData(\{ ...formData, lastName: e.target.value \})\}\
                    className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"\
                  />\
                </div>\
\
                \{/* Email */\}\
                <div>\
                  <label htmlFor="email" className="block text-sm text-foreground mb-2">\
                    Work email <span className="text-destructive">*</span>\
                  </label>\
                  <Input\
                    id="email"\
                    type="email"\
                    required\
                    value=\{formData.email\}\
                    onChange=\{(e) => setFormData(\{ ...formData, email: e.target.value \})\}\
                    className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"\
                  />\
                </div>\
\
                \{/* Role */\}\
                <div>\
                  <label htmlFor="role" className="block text-sm text-foreground mb-2">\
                    Role / Job Function <span className="text-destructive">*</span>\
                  </label>\
                  <select\
                    id="role"\
                    required\
                    value=\{formData.role\}\
                    onChange=\{(e) => setFormData(\{ ...formData, role: e.target.value \})\}\
                    className="w-full h-10 bg-card/50 border border-border/50 rounded-md px-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"\
                  >\
                    <option value="">Select a role</option>\
                    <option value="engineering">Engineering / Development</option>\
                    <option value="qa">QA / Testing</option>\
                    <option value="product">Product / PM</option>\
                    <option value="it">IT / Security</option>\
                    <option value="executive">Executive / Leadership</option>\
                    <option value="other-role">Other</option>\
                  </select>\
                </div>\
\
                \{/* Company */\}\
                <div>\
                  <label htmlFor="company" className="block text-sm text-foreground mb-2">\
                    Company <span className="text-muted-foreground text-xs">(optional)</span>\
                  </label>\
                  <Input\
                    id="company"\
                    type="text"\
                    value=\{formData.company\}\
                    onChange=\{(e) => setFormData(\{ ...formData, company: e.target.value \})\}\
                    className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"\
                  />\
                </div>\
\
                \{/* Use Case */\}\
                <div>\
                  <label htmlFor="useCase" className="block text-sm text-foreground mb-2">\
                    Primary use case <span className="text-muted-foreground text-xs">(optional)</span>\
                  </label>\
                  <select\
                    id="useCase"\
                    value=\{formData.useCase\}\
                    onChange=\{(e) => setFormData(\{ ...formData, useCase: e.target.value \})\}\
                    className="w-full h-10 bg-card/50 border border-border/50 rounded-md px-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"\
                  >\
                    <option value="">Select a use case</option>\
                    <option value="requirements">Requirements clarity / scope control</option>\
                    <option value="test-gen">Test plan generation</option>\
                    <option value="jira">Jira integration / write-back</option>\
                    <option value="compliance">Compliance / audit readiness</option>\
                    <option value="evaluating">Evaluating AI testing tools</option>\
                    <option value="other-use">Other</option>\
                  </select>\
                </div>\
\
                \{/* Phone */\}\
                <div>\
                  <label htmlFor="phone" className="block text-sm text-foreground mb-2">\
                    Phone number <span className="text-muted-foreground text-xs">(optional)</span>\
                  </label>\
                  <Input\
                    id="phone"\
                    type="tel"\
                    value=\{formData.phone\}\
                    onChange=\{(e) => setFormData(\{ ...formData, phone: e.target.value \})\}\
                    className="w-full bg-card/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"\
                  />\
                </div>\
\
                \{/* Uses Jira */\}\
                <div>\
                  <label className="block text-sm text-foreground mb-2">\
                    Do you use Jira? <span className="text-muted-foreground text-xs">(optional)</span>\
                  </label>\
                  <div className="flex gap-6">\
                    <label className="flex items-center gap-2 cursor-pointer">\
                      <input\
                        type="radio"\
                        name="usesJira"\
                        value="yes"\
                        checked=\{formData.usesJira === "yes"\}\
                        onChange=\{(e) => setFormData(\{ ...formData, usesJira: e.target.value \})\}\
                        className="w-4 h-4 accent-primary cursor-pointer"\
                      />\
                      <span className="text-sm text-foreground">Yes</span>\
                    </label>\
                    <label className="flex items-center gap-2 cursor-pointer">\
                      <input\
                        type="radio"\
                        name="usesJira"\
                        value="no"\
                        checked=\{formData.usesJira === "no"\}\
                        onChange=\{(e) => setFormData(\{ ...formData, usesJira: e.target.value \})\}\
                        className="w-4 h-4 accent-primary cursor-pointer"\
                      />\
                      <span className="text-sm text-foreground">No</span>\
                    </label>\
                  </div>\
                </div>\
\
                \{/* Submit Button */\}\
                <Button\
                  type="submit"\
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base shadow-lg shadow-primary/20"\
                >\
                  Request info\
                </Button>\
\
                \{/* Footer microcopy */\}\
                <p className="text-xs text-muted-foreground text-center">\
                  We'll only use this to share information about ScopeTraceAI. No spam.\
                </p>\
              </form>\
            </>\
          )\}\
        </div>\
      </div>\
    </div>\
  );\
\}}