import SocialIcon from "@/components/social-icons";
import Image from "@/components/Image";
import { PageSEO } from "@/components/SEO";

import useTranslation from "next-translate/useTranslation";

export default function AuthorLayout({
  children,
  frontMatter,
  availableLocales,
}) {
  const { name, avatar, occupation, company, twitter, github } = frontMatter;
  const { t } = useTranslation();

  return (
    <>
      <PageSEO
        title={`${t("headerNavLinks:about")} - ${name}`}
        description={`${t("SEO:about")} - ${name}`}
        availableLocales={availableLocales}
      />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
