{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Button \} from "./ui/button";\
import logo from "figma:asset/d0df767a3841b68d6e0abab2c7f294073c2d4726.png";\
\
interface NavigationProps \{\
  onMoreInfoClick: () => void;\
  onHowItWorksClick?: () => void;\
  onProductClick?: () => void;\
  onLogoClick?: () => void;\
  onSecurityClick?: () => void;\
  onPricingClick?: () => void;\
\}\
\
export function Navigation(\{ onMoreInfoClick, onHowItWorksClick, onProductClick, onLogoClick, onSecurityClick, onPricingClick \}: NavigationProps) \{\
  return (\
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070A] border-b border-border/50">\
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">\
        <button \
          onClick=\{onLogoClick\}\
          className="hover:opacity-80 transition-opacity"\
        >\
          <img src=\{logo\} alt="ScopeTraceAI" className="h-16" />\
        </button>\
        \
        <div className="flex items-center gap-8">\
          <button \
            onClick=\{onProductClick\}\
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"\
          >\
            Product\
          </button>\
          <button \
            onClick=\{onHowItWorksClick\}\
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"\
          >\
            How it Works\
          </button>\
          <button \
            onClick=\{onSecurityClick\}\
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"\
          >\
            Security\
          </button>\
          <button \
            onClick=\{onPricingClick\}\
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"\
          >\
            Pricing Info\
          </button>\
          <a \
            href="https://app.scopetraceai.com/login"\
            target="_blank"\
            rel="noopener noreferrer"\
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"\
          >\
            Sign in\
          </a>\
          <Button \
            onClick=\{onMoreInfoClick\}\
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"\
          >\
            More information\
          </Button>\
        </div>\
      </div>\
    </nav>\
  );\
\}}