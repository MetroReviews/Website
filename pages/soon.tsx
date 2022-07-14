import { MetaTags } from "../components/Header/Meta";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Static/Header";
import { NavItems } from "../utils/navItems";
import { parseUser } from "../utils/parseUser";
import { DiscordUser } from "../utils/types";
import { GetServerSideProps } from "next";

interface Props {
  user: DiscordUser;
}

const SoonPage = (props: Props) => {
  const router = useRouter();
  const $ = require("../lang/" + (router.locale || "en"));
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <MetaTags
        title="Coming Soon | Metro Reviews"
        description="This page is unavailable at this time. Please check back later."
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={false} />
      <div className="max-w-7xl text-center py-20 mx-auto">
        <h1 className="text-4xl font-extrabold text-white">COMING SOON!</h1>

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

export default SoonPage;

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  return { props: { user } };
};
