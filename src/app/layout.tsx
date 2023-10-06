import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const rooznameh = localFont({
  src: [
    {
      path: "../../public/fonts/rooznameh/Rooznameh.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-rooznameh",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${rooznameh.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
