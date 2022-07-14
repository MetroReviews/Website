import { MetaTags } from "../components/Header/Meta";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { DiscordUser } from "../utils/types";
import { NavItems } from "../utils/navItems";
import { parseUser } from "../utils/parseUser";
import { GetServerSideProps } from "next";
import Header from "../components/Static/Header";

interface Props {
  user: DiscordUser;
}

const UnAuthorized = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const $ = require("../lang/" + (router.locale || "en"));

  let messages = [
    "You need to login to view the requested endpoint.",
    "Seriously we need you to login to complete this request.",
  ];

  return (
    <>
      <MetaTags
        title="401 | Metro Reviews"
        description="Login is required to view this page"
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div className="max-w-7xl text-center py-20 mx-auto">
        <h1 className="text-4xl font-extrabold text-white">Unauthorized</h1>
        <p className="text-xl font-thin text-white text-opacity-75">
          {messages[Math.floor(Math.random() * messages.length)]}
        </p>
        <button
          className="w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-amber-400 hover:bg-opacity-50 transition duration-200"
          onClick={() => {
            setClicked(true);
            router.back();
          }}
        >
          {clicked ? (
            <i className="fad fa-spinner-third fa-spin text-white" />
          ) : (
            <>
              <i className="fa fa-arrow-left mr-2" />
              Go Back
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default UnAuthorized;

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  return { props: { user } };
};
