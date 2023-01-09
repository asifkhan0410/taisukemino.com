import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/style/tailwind.css";
import "@/style/prism.css";

import { ThemeProvider } from "next-themes";
import Head from "next/head";

import LayoutWrapper from "@/components/LayoutWrapper";
import RSS from "@/components/Rss";
import * as Fathom from "fathom-client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  useKBar,
} from "kbar";

const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "."),
  },
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "blog",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "about"),
  },
];

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="p-2 m-1">{item}</div>
        ) : (
          <div className="p-2 m-2">{item.name}</div>
        )
      }
    />
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   Fathom.load("RVGOXTVB", {
  //     includedDomains: ["taisukemino.com"],
  //   });

  //   function onRouteChangeComplete() {
  //     Fathom.trackPageview();
  //   }
  //   // Record a pageview when route changes
  //   router.events.on("routeChangeComplete", onRouteChangeComplete);

  //   // Unassign event listener
  //   return () => {
  //     router.events.off("routeChangeComplete", onRouteChangeComplete);
  //   };
  // }, []);

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="p-2 bg-gray-900/80 flex items-center">
          <KBarAnimator className="w-full max-w-[50%] min-h-[25%] overflow-hidden p-2 bg-white rounded-xl">
            <KBarSearch className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <ThemeProvider attribute="class">
        <Head>
          <title>Taisuke Mino</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
        <RSS />
      </ThemeProvider>
    </KBarProvider>
  );
}
