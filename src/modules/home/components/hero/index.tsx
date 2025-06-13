import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HandWrittenTitle } from "@/components/ui/hand-writing-text"
import { MagnetizeButton } from "@/components/ui/magnetize-button"

const Hero = () => {
  return (
    <div className="min-h-[75vh] w-full border-b border-brand-olive/30 relative bg-gradient-to-br from-brand-cream via-brand-cream to-brand-olive/10 flex items-center">

      
      <div className="content-container relative z-10 flex flex-col items-center text-center gap-8 py-16">
        {/* Hand-written animated title */}
        <HandWrittenTitle 
          title="OFAM Agro Enterprise"
          subtitle="Premium Palm Oil from Nigeria"
        />
        
        {/* Simple tagline */}
        <div className="space-y-6 max-w-3xl">
          <p className="text-xl md:text-2xl text-brand-olive/80 leading-relaxed">
            Pioneering premium palm oil production in Nigeria
          </p>
          
          {/* Startup Status Badge */}
          <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-3 inline-block">
            <p className="text-brand-orange font-medium text-sm">
              🚀 Coming Soon • Pre-Orders Available
            </p>
          </div>
        </div>
        
        {/* Call-to-action buttons with proper spacing */}
        <div className="flex flex-col sm:flex-row gap-6 mt-16 mb-12">
          <LocalizedClientLink href="/collections">
            <MagnetizeButton 
              variant="default" 
              size="lg" 
              className="text-lg px-10 py-4 min-w-[200px]"
              particleCount={15}
            >
              Pre-Order Now
            </MagnetizeButton>
          </LocalizedClientLink>
          <LocalizedClientLink href="/about">
            <MagnetizeButton 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 min-w-[200px]"
              particleCount={12}
            >
              Our Story
            </MagnetizeButton>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
