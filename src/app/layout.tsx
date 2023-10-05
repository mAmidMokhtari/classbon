import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";

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
    <html dir="rtl" className={`${figtree.variable} ${rooznameh.variable}`}>
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          دوره معماری ری اکت
        </header>
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <footer className="bg-gray-200 flex items-center justify-center text-3xl h-20">
          FOOTER
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
