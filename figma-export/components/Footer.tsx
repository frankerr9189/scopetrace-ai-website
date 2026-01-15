{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export function Footer() \{\
  return (\
    <footer className="border-t border-border/50 py-8 px-6">\
      <div className="max-w-7xl mx-auto">\
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">\
          <div className="text-sm text-muted-foreground">\
            \'a9 \{new Date().getFullYear()\} ScopeTraceAI \'b7 <a href="https://www.scopetraceai.com" className="hover:text-foreground transition-colors">www.scopetraceai.com</a> \'b7 <a href="mailto:Hello@scopetraceai.com" className="hover:text-foreground transition-colors">Hello@scopetraceai.com</a>\
          </div>\
          \
          <div className="flex items-center gap-4 text-sm text-muted-foreground">\
            <span className="flex items-center gap-2">\
              <div className="w-1 h-1 rounded-full bg-primary" />\
              Jira-first\
            </span>\
            <span className="flex items-center gap-2">\
              <div className="w-1 h-1 rounded-full bg-primary" />\
              Approval-gated\
            </span>\
            <span className="flex items-center gap-2">\
              <div className="w-1 h-1 rounded-full bg-primary" />\
              Audit-ready\
            </span>\
          </div>\
        </div>\
      </div>\
    </footer>\
  );\
\}}