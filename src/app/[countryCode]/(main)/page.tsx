import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import AboutSection from "@modules/home/components/about-section"
import { Testimonials } from "@/components/ui/testimonials"
// import FeaturedProducts from "@modules/home/components/featured-products"
// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "OFAM Agro Enterprise - Premium Palm Oil from Nigeria",
  description:
    "Premium palm oil producer from Nigeria. Startup delivering exceptional quality palm oil through sustainable farming practices and innovative processing methods.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  return (
    <>
      <Hero />
      <AboutSection />
      <Testimonials />
      <div className="py-12 text-center text-brand-olive">
        <div className="content-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Products Coming Soon</h2>
          <p className="text-lg text-brand-olive/80">
            Our premium palm oil products will be available for pre-order soon. 
            Join the waitlist to be notified when we launch!
          </p>
        </div>
      </div>
    </>
  )
}
