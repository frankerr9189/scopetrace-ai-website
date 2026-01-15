{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Button \} from "./ui/button";\
\
export function Hero() \{\
  return (\
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">\
      \{/* Background grid effect */\}\
      <div className="absolute inset-0 overflow-hidden">\
        <div \
          className="absolute inset-0 opacity-20"\
          style=\{\{\
            backgroundImage: `\
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),\
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)\
            `,\
            backgroundSize: '64px 64px'\
          \}\}\
        />\
        \{/* Cyan glow */\}\
        <div \
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"\
          style=\{\{\
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)'\
          \}\}\
        />\
      </div>\
\
      <div className="relative max-w-5xl mx-auto px-6 text-center">\
        <h1 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] text-foreground mb-6">\
          Audit-Ready AI for Scope,<br />Testing, and Jira\
        </h1>\
        \
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">\
          Approved requirements \uc0\u8594  deterministic tests \u8594  Jira publishing.<br />\
          AI-powered test generation built for audit-sensitive teams.\
        </p>\
\
        <div className="flex items-center justify-center gap-4 mb-12">\
          <Button \
            size="lg"\
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg shadow-primary/20"\
          >\
            Register New Account\
          </Button>\
        </div>\
\
        \{/* Trust pills */\}\
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">\
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">\
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />\
            Jira-first\
          </div>\
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">\
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />\
            Approval-gated\
          </div>\
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">\
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />\
            Immutable outputs\
          </div>\
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30">\
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />\
            Audit trail included\
          </div>\
        </div>\
      </div>\
    </section>\
  );\
\}}