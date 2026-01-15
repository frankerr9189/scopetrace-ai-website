{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
import \{ HowItWorksPage \} from "./components/HowItWorksPage";\
import \{ ProductPage \} from "./components/ProductPage";\
import \{ SecurityPage \} from "./components/SecurityPage";\
import \{ PricingPage \} from "./components/PricingPage";\
import \{ MoreInfoModal \} from "./components/MoreInfoModal";\
import \{ Navigation \} from "./components/Navigation";\
import \{ Hero \} from "./components/Hero";\
import \{ HowItWorks \} from "./components/HowItWorks";\
import \{ WalkthroughSection \} from "./components/WalkthroughSection";\
import \{ WhySection \} from "./components/WhySection";\
import \{ ProductStatus \} from "./components/ProductStatus";\
import \{ FinalCTA \} from "./components/FinalCTA";\
import \{ Footer \} from "./components/Footer";\
\
type Page = "home" | "how-it-works" | "product" | "security" | "pricing";\
\
export default function App() \{\
  const [isModalOpen, setIsModalOpen] = useState(false);\
  const [currentPage, setCurrentPage] = useState<Page>("home");\
\
  const navigateToPage = (page: Page) => \{\
    setCurrentPage(page);\
    window.scrollTo(0, 0);\
  \};\
\
  if (currentPage === "how-it-works") \{\
    return (\
      <HowItWorksPage \
        onBack=\{() => navigateToPage("home")\} \
        onMoreInfoClick=\{() => setIsModalOpen(true)\}\
        onProductClick=\{() => navigateToPage("product")\}\
        onSecurityClick=\{() => navigateToPage("security")\}\
        onPricingClick=\{() => navigateToPage("pricing")\}\
      />\
    );\
  \}\
\
  if (currentPage === "product") \{\
    return (\
      <ProductPage \
        onBack=\{() => navigateToPage("home")\} \
        onMoreInfoClick=\{() => setIsModalOpen(true)\}\
        onHowItWorksClick=\{() => navigateToPage("how-it-works")\}\
        onSecurityClick=\{() => navigateToPage("security")\}\
        onPricingClick=\{() => navigateToPage("pricing")\}\
      />\
    );\
  \}\
\
  if (currentPage === "security") \{\
    return (\
      <SecurityPage \
        onBack=\{() => navigateToPage("home")\} \
        onMoreInfoClick=\{() => setIsModalOpen(true)\}\
        onHowItWorksClick=\{() => navigateToPage("how-it-works")\}\
        onProductClick=\{() => navigateToPage("product")\}\
        onPricingClick=\{() => navigateToPage("pricing")\}\
      />\
    );\
  \}\
\
  if (currentPage === "pricing") \{\
    return (\
      <PricingPage \
        onBack=\{() => navigateToPage("home")\} \
        onMoreInfoClick=\{() => setIsModalOpen(true)\}\
        onHowItWorksClick=\{() => navigateToPage("how-it-works")\}\
        onProductClick=\{() => navigateToPage("product")\}\
        onSecurityClick=\{() => navigateToPage("security")\}\
      />\
    );\
  \}\
\
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
        <Navigation \
          onMoreInfoClick=\{() => setIsModalOpen(true)\} \
          onHowItWorksClick=\{() => navigateToPage("how-it-works")\}\
          onProductClick=\{() => navigateToPage("product")\}\
          onLogoClick=\{() => navigateToPage("home")\}\
          onSecurityClick=\{() => navigateToPage("security")\}\
          onPricingClick=\{() => navigateToPage("pricing")\}\
        />\
        <Hero />\
        <HowItWorks onLearnMore=\{() => navigateToPage("how-it-works")\} />\
        <WalkthroughSection />\
        <WhySection />\
        <ProductStatus />\
        <FinalCTA onOpenModal=\{() => setIsModalOpen(true)\} />\
        <Footer />\
      </div>\
\
      <MoreInfoModal isOpen=\{isModalOpen\} onClose=\{() => setIsModalOpen(false)\} />\
    </div>\
  );\
\}}