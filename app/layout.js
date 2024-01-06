import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import {
  Inter,
  Roboto_Mono,
  Poppins,
  Montserrat,
  Source_Serif_4,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const source_serif_4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
});

export const metadata = {
  title: "Dribble- Discover the World's top designers and Creative Professionals",
  description: "Join and collaborate with designers around the world.",
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable} ${source_serif_4.variable} ${montserrat.variable}`}
    >
      <link rel="icon" href="/favicon.ico" />
      <body className="">
        <main className="app">
          <Nav />
          {children}
        </main>
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
