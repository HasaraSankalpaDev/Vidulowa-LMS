import { Manrope } from "next/font/google";
import "./globals.css";

// Roboto font
const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  );
}
