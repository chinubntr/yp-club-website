import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
  ogImage?: string;
}

/**
 * SEOHead manages document <head> meta tags for each page.
 * In an SPA without SSR, this uses DOM manipulation to set meta tags
 * that are picked up by Googlebot's JS renderer and social crawlers.
 */
export function SEOHead({
  title,
  description,
  canonical,
  jsonLd,
  ogImage,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", canonical);
    } else if (canonicalEl) {
      canonicalEl.remove();
    }

    // Open Graph
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:type": "website",
      "og:site_name": "YP Club",
    };
    if (canonical) ogTags["og:url"] = canonical;
    if (ogImage) ogTags["og:image"] = ogImage;

    Object.entries(ogTags).forEach(([property, content]) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });

    // Twitter Card
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
    };
    if (ogImage) twitterTags["twitter:image"] = ogImage;

    Object.entries(twitterTags).forEach(([name, content]) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });

    // JSON-LD Structured Data
    // Remove previous JSON-LD scripts added by this component
    document
      .querySelectorAll('script[data-seo-head="true"]')
      .forEach((el) => el.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-head", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      // Cleanup JSON-LD on unmount
      document
        .querySelectorAll('script[data-seo-head="true"]')
        .forEach((el) => el.remove());
    };
  }, [title, description, canonical, jsonLd, ogImage]);

  return null;
}

/* ─── Shared Structured Data ─── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YP Club",
  description:
    "YP Club is a private, application-only members club for founders in Dubai scaling businesses from AED 1M to AED 30M. Founded in 2022, over $12M in deals facilitated, 48+ private events yearly, and 30+ industries represented.",
  url: "https://ypclub.com",
  foundingDate: "2022",
  location: {
    "@type": "Place",
    name: "Dubai, UAE",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  },
  sameAs: [
    "https://www.linkedin.com/company/ypclub",
    "https://www.instagram.com/ypclub",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "YP Club",
  description:
    "Dubai's private members club for founders scaling from AED 1M to AED 30M. Over $12M in deals facilitated, 48+ private events yearly.",
  url: "https://ypclub.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  priceRange: "$$$$",
  foundingDate: "2022",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YP Club",
  url: "https://ypclub.com",
  description:
    "Dubai's private members club for founders scaling from AED 1M to AED 30M. Over $12M in deals facilitated, 48+ private events yearly, powered by PioneerOS.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ypclub.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}