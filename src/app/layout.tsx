import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { CSPostHogProvider } from './_analytics/providers'

import "@uploadthing/react/styles.css";
import { AccordionDemo } from "./_components/accordian";

export const metadata: Metadata = {
  title: "React Lemon Gallery",
  description: "React Lemon is a modern, responsive, and secure web application built with Next.js, Shadcn UI, and Clerk for authentication.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body className="flex flex-col gap-4">
            <NextSSRPlugin
              /**
               * The `extractRouterConfig` will extract **only** the route configs
               * from the router to prevent additional information from being
               * leaked to the client. The data passed to the client is the same
               * as if you were to fetch `/api/uploadthing` directly.
               */
              routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <TopNav />
            {children}
            {modal}
            <div id="modal-root" />
            <AccordionDemo />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
