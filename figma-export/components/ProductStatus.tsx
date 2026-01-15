{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ CheckCircle2 \} from "lucide-react";\
\
export function ProductStatus() \{\
  const statusItems = [\
    \{\
      title: "Live in private pilot",\
      description: "Currently available to select enterprise partners"\
    \},\
    \{\
      title: "Upload Document",\
      description: "Coming soon: ability to upload Word doc or PDF and have tickets created"\
    \},\
    \{\
      title: "Jira-first",\
      description: "Native integration with your existing workflow"\
    \},\
    \{\
      title: "Non Jira Implementation on Road Map",\
      description: "Expanding beyond Jira to support additional project management platforms"\
    \}\
  ];\
\
  return (\
    <section id="product" className="py-24 px-6 bg-card/20">\
      <div className="max-w-4xl mx-auto">\
        <h2 className="text-4xl font-medium tracking-tight text-center mb-16">\
          Product Status\
        </h2>\
\
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\
          \{statusItems.map((item, index) => (\
            <div \
              key=\{index\}\
              className="flex gap-4 p-6 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-all"\
            >\
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />\
              <div>\
                <h3 className="text-lg font-medium text-foreground mb-1">\
                  \{item.title\}\
                </h3>\
                <p className="text-sm text-muted-foreground">\
                  \{item.description\}\
                </p>\
              </div>\
            </div>\
          ))\}\
        </div>\
      </div>\
    </section>\
  );\
\}}