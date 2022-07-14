import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import Script from "next/script";
import Document from "next/document";
import { Toaster } from "react-hot-toast";

import Header from "../components/Static/Header";
import Footer from "../components/Static/Footer";

import { checkCookies, setCookies } from "cookies-next";

import { Slide, ToastContainer } from "react-toastify";

import "../lib/icons";

import { ThemeProvider } from "next-themes";
import Cookies from "../components/Interface/Cookies";
import { useEffect } from "react";

export default function MetroApp({ Component, pageProps }) {
  const router = useRouter();
  const locale = require("../lang/" + (router.locale || "en"));

  const handleScroll = {};

  useEffect(() => {
    window.addEventListener("wheel", (evt) => {}, {
      capture: true,
      passive: false,
    });
  });

  return (
    <>
      <Script
        id="gtag"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-F6Q4SP318X"
      />
      <Script id="lazy" strategy="lazyOnload">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-F6Q4SP318X', {
           page_path: window.location.pathname,
          });
        `}
      </Script>

      <SWRConfig
        value={{
          fetcher: (url: string) =>
            fetch(`/api/${url}`).then((res) => res.json()),
        }}
      >
        <ThemeProvider defaultTheme="violet">
          <div className="h-screen relative border-t-4 border-amber-600">
            <div
              className="bg-gradient-to-br z-10 opacity-[50%] absolute top-0 w-full from-amber-600 to-transparent"
              style={{ height: "500px" }}
            />
            <main className="transition-all duration-200 z-10 absolute inset-0 h-screen w-full mx-auto">
              <div className="block px-5 md:px-0">
                <Component $={locale} {...pageProps} />
              </div>
              <ToastContainer
                theme="dark"
                position="bottom-right"
                transition={Slide}
              />
              <Toaster
                toastOptions={{
                  style: {
                    background: "#172033",
                    color: "#fff",
                  },
                }}
                position="bottom-left"
              />
              <Cookies />
              <Footer $={locale} />
            </main>
          </div>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}
