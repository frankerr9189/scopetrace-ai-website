{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Navigation \} from "./Navigation";\
import \{ Footer \} from "./Footer";\
\
interface PricingPageProps \{\
  onBack: () => void;\
  onMoreInfoClick: () => void;\
  onHowItWorksClick?: () => void;\
  onProductClick?: () => void;\
  onSecurityClick?: () => void;\
\}\
\
export function PricingPage(\{ onBack, onMoreInfoClick, onHowItWorksClick, onProductClick, onSecurityClick \}: PricingPageProps) \{\
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
          onSecurityClick=\{onSecurityClick\}\
          onLogoClick=\{onBack\}\
          onPricingClick=\{onBack\}\
        />\
\
        \{/* Main Content */\}\
        <section className="pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center">\
          <div className="max-w-4xl mx-auto text-center">\
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground mb-8">\
              Pricing Information\
            </h1>\
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">\
              Contact us to discuss pricing options tailored to your organization's needs.\
            </p>\
            <div className="border border-border/50 bg-card/50 rounded-lg p-12 inline-block">\
              <p className="text-lg text-muted-foreground mb-4">\
                For pricing inquiries, please contact:\
              </p>\
              <a \
                href="mailto:Hello@scopetraceai.com" \
                className="text-2xl text-primary hover:text-primary/80 transition-colors"\
              >\
                Hello@scopetraceai.com\
              </a>\
            </div>\
          </div>\
        </section>\
\
        \{/* Footer */\}\
        <Footer />\
      </div>\
    </div>\
  );\
\}\
}