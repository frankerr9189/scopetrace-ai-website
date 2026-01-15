{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Button \} from "./ui/button";\
\
interface FinalCTAProps \{\
  onOpenModal: () => void;\
\}\
\
export function FinalCTA(\{ onOpenModal \}: FinalCTAProps) \{\
  return (\
    <section className="py-32 px-6">\
      <div className="max-w-4xl mx-auto text-center">\
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-8">\
          Bring AI into your SDLC \'97<br />\
          without losing control.\
        </h2>\
        \
        <Button \
          size="lg"\
          onClick=\{onOpenModal\}\
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-lg shadow-primary/20"\
        >\
          More information\
        </Button>\
      </div>\
    </section>\
  );\
\}}