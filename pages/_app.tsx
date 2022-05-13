import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import Metro from "../Metro.config";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Static/Header";
import Footer from "../components/Static/Footer";

import { Slide, ToastContainer } from "react-toastify";

import '../lib/icons';

import { ThemeProvider } from 'next-themes'

export default function MetroApp({ Component, pageProps }) {
  const router = useRouter();
  const locale = require("../lang/" + (router.locale || "en"));

  if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") {
    const $function = (event) => {
      let eventName = "";
      if (event.ctrlKey == true) eventName += "ctrl+";
      if (event.altKey == true) eventName += "alt+";
      if (event.shiftKey == true) eventName += "shift+";

      if (!["Shift", "Control", "Alt"].includes(event.key)) {
        eventName += event.key.toLowerCase();
      } else {
        eventName = eventName.slice(0, eventName.length - 1);
      }

      const emitEvent = new CustomEvent("Metro", {
        detail: { key: eventName, target: event.target },
      });
      window.dispatchEvent(emitEvent);
    };
  }
  global.openTabInWindow = (url) => {
    const w = 500;
    const h = 700;
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    let $w = window.open(
      url,
      "_blank",
      `
          toolbar=no,scrollbars=yes,resizable=no,
          width=${w / systemZoom}, 
          height=${h / systemZoom}, 
          top=${top}, 
          left=${left}
          `
    );
  };
  
  const NavItems = [
    {
      link: true,
      name: locale.navbar.home,
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: locale.navbar.team,
      icon: "fa fa-user-cog",
      activeIcon: "fa fa-home",
      href: "/team",
    },
    {
      link: true,
      name: locale.navbar.lists,
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/lists",
    }
  ];

  return (
    <>
    <ThemeProvider defaultTheme='violet'>
    <div className="h-screen relative border-t-4 border-amber-600">
      <div
        className="bg-gradient-to-br z-10 opacity-[50%] absolute top-0 w-full from-amber-600 to-transparent"
        style={{ height: "500px" }}
      />
      <Head>
        <title>
          {router.pathname && Metro.titles[router.pathname]
            ? Metro.titles[router.pathname] + Metro.titleSuffix
            : "Loading..." + Metro.titleSuffix}
        </title>
      </Head>
      <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen w-full mx-auto">
        <Header $={locale} NavItems={NavItems} />
        <div className="block px-5 md:px-0">
          <Component $={locale} {...pageProps} />
        </div>
        <ToastContainer theme="dark" position="bottom-right" transition={Slide} />
        <Footer $={locale} />
      </main>
    </div>
    </ThemeProvider>
    </>
  );
}
