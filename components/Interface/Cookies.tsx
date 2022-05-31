import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkCookies, setCookies } from "cookies-next";
import CookieConsent from "react-cookie-consent";
import { v4 as uuidv4 } from "uuid";

export default function Cookies() {
  return (
    <CookieConsent
      disableStyles={true}
      cookieName="$Metro_cookies"
      buttonClasses="btn btnDefault cookieBtn"
      containerClasses="cookieContainer"
      contentClasses="cookieContent"
      location="bottom"
      buttonText="Accept Cookies"
      expires={365}
      onAccept={() => {
        setCookies("$Metro_locale", "EN:english", { maxAge: 60 * 1000 * 24 });
        setCookies("$Metro_theme", "DEF:violet", { maxAge: 60 * 1000 * 24 });
        setCookies("$Metro_sess", `${uuidv4()}`, { maxAge: 60 * 1000 * 24 });
      }}
    >
      <span className="cookieHeader">Cookie Consent! 🍪</span> <br />
      <span className="cookieP">
        Hey there. We use cookies to improve our User Experience Read our{" "}
        <a className="cookiePP" href="/legal/cookies">
          Cookie Policy
        </a>
        {""} to learn more.
      </span>
    </CookieConsent>
  );
}
