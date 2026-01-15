{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Shield, GitBranch, Lock, Users \} from "lucide-react";\
\
export function WhySection() \{\
  const features = [\
    \{\
      icon: GitBranch,\
      text: "Deterministic outputs"\
    \},\
    \{\
      icon: Shield,\
      text: "Approval required"\
    \},\
    \{\
      icon: Lock,\
      text: "Idempotent Jira publishing"\
    \},\
    \{\
      icon: Users,\
      text: "Built for audit-sensitive teams"\
    \}\
  ];\
\
  return (\
    <section className="py-24 px-6">\
      <div className="max-w-5xl mx-auto">\
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-center leading-tight mb-12">\
          AI can generate test plans.\
          <br />\
          <span className="text-primary">ScopeTraceAI</span> makes them approvable,<br />\
          auditable, and safe to use.\
        </h2>\
\
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">\
          \{features.map((feature, index) => \{\
            const Icon = feature.icon;\
            return (\
              <div \
                key=\{index\}\
                className="flex items-start gap-4 p-6 rounded-lg border border-border/30 bg-card/30 hover:border-primary/20 transition-all"\
              >\
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">\
                  <Icon className="w-5 h-5 text-primary" />\
                </div>\
                <p className="text-lg text-foreground pt-2">\
                  \{feature.text\}\
                </p>\
              </div>\
            );\
          \})\}\
        </div>\
      </div>\
    </section>\
  );\
\}\
}