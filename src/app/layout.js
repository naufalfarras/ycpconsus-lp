export const dynamic = "force-dynamic";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Anek_Latin } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { ReCaptchaProvider } from "next-recaptcha-v3";

import "./globals.css";

import { Toaster } from "react-hot-toast";
import StickyContact from "@/components/StickyContact";

const palladio = localFont({
  variable: "--font-palladio",
  src: [
    {
      path: "../assets/fonts/Palladio/P052-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Palladio/P052-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Palladio/P052-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Palladio/P052-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

const anek_latin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | YCP Consus",
    default: "Page", // a default is required when creating a template
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <head>
        {/* <Script strategy="afterInteractive" id="google-tag-manager">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'
https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDM6X46Z');`}
        </Script> */}
        <meta name="robots" content="noindex" />
        {/* <meta
          name="google-site-verification"
          content="Je7uFsJY4uenJBsfF4PSOR1VQiigGllMdyd5GOWbjJM"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-74S3GPJTJ9"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());gtag('config', 'G-74S3GPJTJ9');`}
        </Script> */}
      </head>
      <body className={`${anek_latin.variable} ${palladio.variable}`}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDM6X46Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          {/* <StickyContact /> */}
          {/* <Script strategy="afterInteractive" id="tawk-livechat">
            {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/660e36071ec1082f04dec0df/1hqjo63lb';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();`}
          </Script> */}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
