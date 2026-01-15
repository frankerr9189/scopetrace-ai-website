{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ CheckCircle2, FileText, Database \} from "lucide-react";\
import \{ Button \} from "./ui/button";\
\
interface HowItWorksProps \{\
  onLearnMore?: () => void;\
\}\
\
export function HowItWorks(\{ onLearnMore \}: HowItWorksProps) \{\
  const steps = [\
    \{\
      icon: CheckCircle2,\
      title: "Scope",\
      description: "Review and approve requirements before AI runs."\
    \},\
    \{\
      icon: FileText,\
      title: "Testing",\
      description: "Generate test plans, RTMs, and coverage from approved scope."\
    \},\
    \{\
      icon: Database,\
      title: "Audit + Jira",\
      description: "Publish approved outputs into Jira with an audit summary."\
    \}\
  ];\
\
  return (\
    <section id="how-it-works" className="py-24 px-6">\
      <div className="max-w-7xl mx-auto">\
        <h2 className="text-4xl font-medium tracking-tight text-center mb-16">\
          How It Works\
        </h2>\
        \
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">\
          \{steps.map((step, index) => \{\
            const Icon = step.icon;\
            return (\
              <div \
                key=\{index\}\
                className="bg-card border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-all duration-300"\
              >\
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-6">\
                  <Icon className="w-6 h-6 text-primary" />\
                </div>\
                <h3 className="text-xl font-medium text-foreground mb-3">\
                  \{step.title\}\
                </h3>\
                <p className="text-muted-foreground leading-relaxed">\
                  \{step.description\}\
                </p>\
              </div>\
            );\
          \})\}\
        </div>\
\
        \{onLearnMore && (\
          <div className="text-center">\
            <Button\
              onClick=\{onLearnMore\}\
              variant="outline"\
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"\
            >\
              See detailed workflow \uc0\u8594 \
            </Button>\
          </div>\
        )\}\
      </div>\
    </section>\
  );\
\}}