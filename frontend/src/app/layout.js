import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";
import "../styles/globals.css";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const CenturyGothicFont = localFont({
  src: [
    {
      path: "../fonts/CenturyGothic/CenturyGothic.otf",
      weight: "400",
      style: "normal",
      display: "swap",
    },
    {
      path: "../fonts/CenturyGothic/CenturyGothicItalic.otf",
      weight: "400",
      style: "italic",
      display: "swap",
    },
    {
      path: "../fonts/CenturyGothic/CenturyGothicBold.otf",
      weight: "700",
      style: "normal",
      display: "swap",
    },
    {
      path: "../fonts/CenturyGothic/CenturyGothicBoldItalic.otf",
      weight: "700",
      style: "italic",
      display: "swap",
    },
  ],
});

export const metadata = {
  title: "GHack Algiers",
  description: "GHack ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={CenturyGothicFont.className} suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}