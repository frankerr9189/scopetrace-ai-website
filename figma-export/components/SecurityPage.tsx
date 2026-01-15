{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Navigation \} from "./Navigation";\
import \{ Footer \} from "./Footer";\
\
interface SecurityPageProps \{\
  onBack: () => void;\
  onMoreInfoClick: () => void;\
  onHowItWorksClick?: () => void;\
  onProductClick?: () => void;\
  onPricingClick?: () => void;\
\}\
\
export function SecurityPage(\{ onBack, onMoreInfoClick, onHowItWorksClick, onProductClick, onPricingClick \}: SecurityPageProps) \{\
  return (\
    <div className="min-h-screen bg-background text-foreground relative">\
      \{/* Fixed diagonal gradient pattern */\}\
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">\
        <div \
          className="absolute w-full h-full opacity-40"\
          style=\{\{\
            background: `\
              radial-gradient(circle at 0% 0%, transparent 0%, rgba(34, 211, 238, 0.08) 25%, transparent 50%),\
              radial-gradient(circle at 0% 50%, transparent 0%, rgba(59, 130, 246, 0.12) 35%, transparent 60%),\
              radial-gradient(circle at 0% 100%, transparent 0%, rgba(34, 211, 238, 0.08) 25%, transparent 50%)\
            `\
          \}\}\
        />\
      </div>\
\
      <div className="relative z-10">\
        \{/* Navigation */\}\
        <Navigation \
          onMoreInfoClick=\{onMoreInfoClick\}\
          onHowItWorksClick=\{onHowItWorksClick\}\
          onProductClick=\{onProductClick\}\
          onLogoClick=\{onBack\}\
          onSecurityClick=\{onBack\}\
          onPricingClick=\{onPricingClick\}\
        />\
\
        \{/* SECTION 1 \'97 Page Header */\}\
        <section className="pt-32 pb-20 px-6">\
          <div className="max-w-4xl mx-auto">\
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground mb-6">\
              Security & Data Protection\
            </h1>\
            <p className="text-xl text-muted-foreground leading-relaxed">\
              ScopeTraceAI is designed with security, isolation, and auditability as first-class concerns.\
            </p>\
          </div>\
        </section>\
\
        \{/* SECTION 2 \'97 Data Handling & Privacy */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <h2 className="text-3xl font-medium text-foreground mb-8">\
              Data Handling\
            </h2>\
            <div className="space-y-4">\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Customer data is processed solely to deliver the ScopeTraceAI service\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Customer data is not used to train AI models or shared with anyone\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Data is not shared with third parties beyond required infrastructure providers\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Data retention follows customer and operational requirements\
                </p>\
              </div>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 3 \'97 Tenant Isolation & Access Control */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <h2 className="text-3xl font-medium text-foreground mb-8">\
              Isolation & Access\
            </h2>\
            <div className="space-y-4">\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Tenant-isolated processing\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Logical separation between customer environments\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Role-based access controls\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Least-privilege access principles\
                </p>\
              </div>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 4 \'97 Determinism & Auditability */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <div className="border border-primary/20 bg-card/30 rounded-lg p-8">\
              <h2 className="text-3xl font-medium text-foreground mb-8">\
                Deterministic & Auditable Outputs\
              </h2>\
              <div className="space-y-4">\
                <div className="flex gap-4">\
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                  <p className="text-lg text-muted-foreground leading-relaxed">\
                    Deterministic output generation for repeatable results\
                  </p>\
                </div>\
                <div className="flex gap-4">\
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                  <p className="text-lg text-muted-foreground leading-relaxed">\
                    Identical inputs produce consistent outputs\
                  </p>\
                </div>\
                <div className="flex gap-4">\
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                  <p className="text-lg text-muted-foreground leading-relaxed">\
                    Full run metadata captured (timestamps, IDs, configuration)\
                  </p>\
                </div>\
                <div className="flex gap-4">\
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                  <p className="text-lg text-muted-foreground leading-relaxed">\
                    Traceability preserved across requirements and test artifacts\
                  </p>\
                </div>\
              </div>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 5 \'97 Infrastructure Security */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <h2 className="text-3xl font-medium text-foreground mb-8">\
              Infrastructure Security\
            </h2>\
            <div className="space-y-4">\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Encrypted data in transit (TLS)\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Encrypted data at rest\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Secure cloud infrastructure\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Regular dependency and vulnerability scanning\
                </p>\
              </div>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 6 \'97 Compliance Alignment */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <h2 className="text-3xl font-medium text-foreground mb-8">\
              Compliance Alignment\
            </h2>\
            <div className="space-y-4">\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Designed to support ISO 27001\'96aligned workflows\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Designed to support SOC 2\'96aligned workflows\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Provides audit trails, traceability, and change control support\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  No certification claims unless explicitly stated\
                </p>\
              </div>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 7 \'97 Responsible AI Use */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <h2 className="text-3xl font-medium text-foreground mb-8">\
              Responsible AI Use\
            </h2>\
            <div className="space-y-4">\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  AI outputs generated with guardrails and interpretation layers\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Human review expected prior to production use\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  ScopeTraceAI does not autonomously execute changes in production systems\
                </p>\
              </div>\
              <div className="flex gap-4">\
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />\
                <p className="text-lg text-muted-foreground leading-relaxed">\
                  Customer data is not used to train AI models or shared with anyone\
                </p>\
              </div>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 8 \'97 Security Contact */\}\
        <section className="py-16 px-6">\
          <div className="max-w-4xl mx-auto">\
            <div className="border border-border/50 bg-card/50 rounded-lg p-8">\
              <h2 className="text-3xl font-medium text-foreground mb-6">\
                Security Contact\
              </h2>\
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">\
                For security-related questions or disclosures, contact:\
              </p>\
              <a \
                href="mailto:security@scopetraceai.com" \
                className="text-xl text-primary hover:text-primary/80 transition-colors"\
              >\
                security@scopetraceai.com\
              </a>\
            </div>\
          </div>\
        </section>\
\
        \{/* SECTION 9 \'97 Footer */\}\
        <Footer />\
      </div>\
    </div>\
  );\
\}}