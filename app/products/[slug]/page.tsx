import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  brand, collections, contact, lookbookLabels, productBySlug, productHref, productPage, products, productsIn,
} from "@/content/site";
import { faDigits } from "@/lib/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CareLabel from "@/components/CareLabel";
import Media from "@/components/Media";
import Stitch from "@/components/Stitch";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = productBySlug((await params).slug);
  if (!p) return {};
  return { title: `${p.title} | ${brand.name}`, description: p.summary };
}


export default async function ProductPage({ params }: Params) {
  const p = productBySlug((await params).slug);
  if (!p) notFound();
  const collection = collections.find((c) => c.id === p.collection);
  const index = products.findIndex((x) => x.slug === p.slug);
  const related = productsIn(p.collection).filter((x) => x.slug !== p.slug);

  return (
    <>
      <Header home={false} />
      <main id="main">
        <article className="product" aria-labelledby="product-title">
          <div className="container">
            <nav className="breadcrumb" aria-label="مسیر صفحه">
              <ol>
                <li><a href="/">{productPage.breadcrumbHome}</a></li>
                <li><a href="/#collections">{collection?.name}</a></li>
                <li aria-current="page">{p.title}</li>
              </ol>
            </nav>

            <div className="product-grid">
              <div className="product-info" data-reveal>
                <p className="product-no latin" dir="ltr">No. {String(index + 1).padStart(2, "0")}</p>
                <CareLabel>{collection?.name}</CareLabel>
                <h1 id="product-title" className="product-title">{p.title}</h1>
                <p className="lead">{p.summary}</p>
                <dl className="garment-label">
                  <dt>{lookbookLabels.fabric}</dt><dd>{p.fabric}</dd>
                  <dt>{lookbookLabels.use}</dt><dd>{p.use}</dd>
                  <dt>{lookbookLabels.type}</dt><dd>{p.type}</dd>
                </dl>
                <div className="product-actions">
                  <a className="btn btn-primary" href={`tel:${contact.phoneTel}`}>{productPage.call}</a>
                  <a className="link" href="/#lookbook">{productPage.back}</a>
                </div>
              </div>

              <div className="product-gallery" aria-label={productPage.galleryLabel}>
                {p.images.map((img, i, all) => (
                  /* The cover is on the first screen: no reveal, so it paints without waiting for JS. */
                  <div key={img.src} className={i === 0 ? "product-shot" : "product-shot rv"} data-reveal={i === 0 ? undefined : true}>
                    {/* first: tall cover; pairs: portrait; a leftover last photo spans the row: landscape */}
                    <Media
                      src={img.src}
                      label={img.label}
                      ratio={i === 0 ? "4 / 5" : i === all.length - 1 && i % 2 === 1 ? "3 / 2" : "4 / 5"}
                      priority={i === 0}
                      parallax={i > 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-more" data-reveal>
              <div className="product-desc">
                <Stitch id="product-desc" />
                {p.description.map((para) => <p key={para} className="prose rv">{para}</p>)}
              </div>
              <div className="product-details">
                <h2 className="h3">{productPage.detailsTitle}</h2>
                <ol className="pack-list">
                  {p.details.map((d, i) => (
                    <li key={d} className="pack-item drop" style={{ ["--i" as string]: i }}>
                      <span className="pack-num" aria-hidden="true">{faDigits(i + 1)}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {related.length > 0 && (
              <section className="related" aria-labelledby="related-title" data-reveal>
                <h2 id="related-title" className="h2 rv">{productPage.related}</h2>
                <ul className="related-row">
                  {related.map((r, i) => (
                    <li key={r.slug} className="card rv" style={{ ["--i" as string]: i }}>
                      <a href={productHref(r.slug)} className="related-link">
                        <Media src={r.images[0]?.src} label={r.images[0]?.label ?? r.title} ratio="4 / 3" />
                        <span className="card-body">
                          <span className="lb-title">{r.title}</span>
                          <span className="muted card-text">{r.summary}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
        <Contact />
      </main>
      <Footer home={false} />
    </>
  );
}
