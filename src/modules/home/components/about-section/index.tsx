const AboutSection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="content-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main description */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-brand-olive/80 leading-relaxed">
              We are pioneering the future of premium palm oil production in Nigeria. 
              Our startup is dedicated to delivering exceptional quality palm oil through 
              sustainable farming practices, innovative processing methods, and 
              direct partnerships with local palm fruit farmers.
            </p>
            
            {/* Mission statement */}
            <div className="bg-brand-olive/5 border border-brand-olive/20 rounded-lg p-6">
              <p className="text-base text-brand-olive/90 leading-relaxed">
                <strong>Our Mission:</strong> To produce the finest quality palm oil while supporting 
                Nigerian agricultural communities and maintaining the highest environmental standards. 
                Every bottle represents our commitment to excellence and sustainability.
              </p>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-cream border border-brand-olive/20 rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🌴</div>
              <h3 className="text-brand-olive font-semibold mb-3 text-lg">Premium Quality</h3>
              <p className="text-brand-olive/70 leading-relaxed">
                Carefully cultivated palm fruits for the finest oil extraction
              </p>
            </div>
            <div className="bg-brand-cream border border-brand-olive/20 rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🇳🇬</div>
              <h3 className="text-brand-olive font-semibold mb-3 text-lg">Made in Nigeria</h3>
              <p className="text-brand-olive/70 leading-relaxed">
                Proudly Nigerian-owned, supporting local agricultural communities
              </p>
            </div>
            <div className="bg-brand-cream border border-brand-olive/20 rounded-xl p-8 shadow-sm">
              <div className="text-3xl mb-4">♻️</div>
              <h3 className="text-brand-olive font-semibold mb-3 text-lg">Sustainable Process</h3>
              <p className="text-brand-olive/70 leading-relaxed">
                Eco-friendly production methods that preserve our environment
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutSection 