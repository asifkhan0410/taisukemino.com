import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import useTranslation from "next-translate/useTranslation";
import formatDate from "@/lib/utils/formatDate";
import { useRouter } from "next/router";

const editUrl = (fileName) =>
  `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`;

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PostLayout({
  frontMatter,
  availableLocales,
  children,
}) {
  const { slug, date, title } = frontMatter;
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        availableLocales={availableLocales}
        {...frontMatter}
      />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">{t("common:pub")}</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {formatDate(new Date(date), locale)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {t("common:twitter")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
