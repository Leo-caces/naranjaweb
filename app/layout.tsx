import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { getHomePage } from "@/lib/strapi";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await getHomePage();
    const title = pageData?.title;
    const description = pageData?.description;

    return {
      title: title ?? "Naranja Web",
      description: description ?? "Agencia de Marketing Digital",
    };
  } catch (error) {
    console.error('generateMetadata error:', error);
    return {
      title: "Naranja Web",
      description: "Agencia de Marketing Digital",
    };
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
