import Providers from "@/src/utils/provider";
import "../globals.css";
import { getSiteConfig, getSiteCss } from "@/sanity/sanity-utils";

export async function generateMetadata() {
  const { title, description, favicon } = await getSiteConfig();

  return {
    title,
    description,
    icons: {
      icon: favicon,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { backgroundGradient } = await getSiteCss();

  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-tr from-[${backgroundGradient[0]}] to-[${backgroundGradient[1]}]`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
