import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import AboutSection from "@modules/home/components/about-section"
import { Testimonials } from "@/components/ui/testimonials"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

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

  // Handle backend connection gracefully for deployment
  let region: any = null;
  let collections: any[] = [];

  try {
    region = await getRegion(countryCode)
    const collectionsResult = await listCollections({
      fields: "id, handle, title",
    })
    collections = collectionsResult?.collections || []
  } catch (error) {
    console.log("Backend connection failed during build, using fallback:", error)
    // Skip product section during build if backend unavailable
    region = null
    collections = []
  }

  return (
    <>
      <Hero />
      <AboutSection />
      <Testimonials />
      {collections && region ? (
        <div className="py-12">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      ) : (
        <div className="py-12 text-center text-brand-olive">
          <p>Products coming soon...</p>
        </div>
      )}
    </>
  )
}
