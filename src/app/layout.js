import { Geist, Geist_Mono , Roboto, Playfair_Display} from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

const playFair = Playfair_Display({
  variable: "--font-play-fair-display",
  subsets: ["latin"],
  weight: ["400", "700"], 
});


export const metadata = {
  title: "Law firm",
  description: "Law chamber justice in bangladesh bd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playFair.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
