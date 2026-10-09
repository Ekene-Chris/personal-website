import { Montserrat } from "next/font/google";

// Self-hosted at build time so Android and Windows visitors get the brand
// font instead of a system fallback. Avenir is still preferred where it's
// installed (Apple devices); see the body font stack in globals.css.
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
