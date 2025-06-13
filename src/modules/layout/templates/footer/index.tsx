import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-brand-olive/30 w-full bg-brand-olive text-brand-cream">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-brand-cream hover:text-brand-orange font-bold transition-colors duration-200"
            >
              OFAM AGRO ENTERPRISE
            </LocalizedClientLink>
            <p className="txt-small text-brand-cream/80 mt-2 max-w-sm">
              Premium palm oil producer from Nigeria, committed to quality and sustainability.
            </p>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-brand-orange font-semibold">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "text-brand-cream/80 hover:text-brand-orange transition-colors duration-200",
                            children && "txt-small-plus font-medium"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-brand-orange font-semibold">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-brand-cream/80 hover:text-brand-orange transition-colors duration-200"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-brand-orange font-semibold">Company</span>
              <ul className="grid grid-cols-1 gap-y-2 text-brand-cream/80 txt-small">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="hover:text-brand-orange transition-colors duration-200"
                  >
                    Our Story
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/process"
                    className="hover:text-brand-orange transition-colors duration-200"
                  >
                    Production Process
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/quality"
                    className="hover:text-brand-orange transition-colors duration-200"
                  >
                    Quality Standards
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="hover:text-brand-orange transition-colors duration-200"
                  >
                    Get in Touch
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-brand-cream/60 border-t border-brand-orange/30 pt-8">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} OFAM Agro Enterprise. All rights reserved.
          </Text>
          <Text className="txt-compact-small">
            Premium Palm Oil • Made in Nigeria
          </Text>
        </div>
      </div>
    </footer>
  )
}
