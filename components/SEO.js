import Head from "next/head";
import { useRouter } from "next/router";
import siteMetadata from "@/data/siteMetadata";

const generateLinks = (router, availableLocales) =>
  availableLocales.map((locale) => (
    <link
      key={locale}
      rel={
        // Here we do as follow: Default langage is canonical
        // if default langage is not present, we get the first element of the langage array by default
        // Because the functions should be deterministic, it keep the same(s) link as canonical or alternante
        locale === router.defaultLocale
          ? "canonical"
          : !availableLocales.includes(router.defaultLocale) &&
            locale === availableLocales[0]
          ? "canonical"
          : "alternate"
      }
      hrefLang={locale}
      href={`${siteMetadata.siteUrl}${
        locale === router.defaultLocale ? "" : `/${locale}`
      }${router.asPath}`}
    />
  ));

// export const PageSeo = ({ title, availableLocales }) => {
//   const router = useRouter()
//   return (
//     <Head>
//       <title>{`${title}`}</title>
//       <meta name="robots" content="follow, index" />
//       <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
//       <meta property="og:type" content="website" />
//       <meta property="og:site_name" content={siteMetadata.title[router.locale]} />
//       <meta property="og:title" content={title} />
//       <meta property="og:image" content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`} />
//       <meta property="og:locale" content={router.locale} />
//       {availableLocales &&
//         availableLocales
//           .filter((locale) => locale !== router.locale)
//           .map((locale) => <meta key={locale} property="og:locale:alternate" content={locale} />)}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:image" content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`} />
//       {availableLocales && generateLinks(router, availableLocales)}
//     </Head>
//   )
// }

const CommonSEO = ({ title, ogType, ogImage, twImage, availableLocales }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta
        property="og:site_name"
        content={siteMetadata.title[router.locale]}
      />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === "Array" ? (
        ogImage.map(({ url }) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta property="og:locale" content={router.locale} />
      {availableLocales &&
        availableLocales
          .filter((locale) => locale !== router.locale)
          .map((locale) => (
            <meta
              key={locale}
              property="og:locale:alternate"
              content={locale}
            />
          ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={twImage} />
      {availableLocales && generateLinks(router, availableLocales)}
    </Head>
  );
};

// export const BlogSeo = ({
//   authorDetails,
//   title,
//   summary,
//   date,
//   lastmod,
//   url,
//   availableLocales,
//   images = [],
// }) => {
export const PageSEO = ({ title, availableLocales }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
      availableLocales={availableLocales}
    />
  );
};

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  availableLocales,
  images = [],
}) => {
  const router = useRouter();
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === "string"
      ? [images]
      : images;

  const featuredImages = imagesArr.map((img) => {
    return {
      "@type": "ImageObject",
      url: `${siteMetadata.siteUrl}${img}`,
    };
  });

  let authorList;
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        "@type": "Person",
        name: author.name,
      };
    });
  } else {
    authorList = {
      "@type": "Person",
      name: siteMetadata.author,
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      "@type": "Organization",
      name: siteMetadata.author,
    },
  };

  const twImageUrl = featuredImages[0].url;

  return (
    <>
      <CommonSEO
        title={title}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
        availableLocales={availableLocales}
      />
      <Head>
        {/* <title>{`${title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteMetadata.title[router.locale]} />
        <meta property="og:title" content={title} />
        {featuredImages.map((img) => (
          <meta property="og:image" content={img.url} key={img.url} />
        ))}
        <meta property="og:locale" content={router.locale} />
        {availableLocales &&
          availableLocales
            .filter((locale) => locale !== router.locale)
            .map((locale) => <meta key={locale} property="og:locale:alternate" content={locale} />)}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={featuredImages[0].url} /> */}
        {date && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        {lastmod && (
          <meta property="article:modified_time" content={modifiedAt} />
        )}
        {availableLocales && generateLinks(router, availableLocales)}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
