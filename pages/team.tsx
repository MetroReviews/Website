import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { MetaTags } from "../components/Header/Meta";
import useSWR from "swr";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Static/Header";
import { NavItems } from "../utils/navItems";
import { parseUser } from "../utils/parseUser";
import { DiscordUser } from "../utils/types";
import { GetServerSideProps } from "next";

interface team {
  username: string;
  id: string;
  avatar: string;
  is_list_owner: boolean;
  sudo: boolean;
  roles: string[];
}

interface Props {
  user: DiscordUser;
}

export default function Team(props: Props) {
  const router = useRouter();
  const $ = require("../lang/" + (router.locale || "en"));
  const [enterLoading, setEnterLoading] = useState(false);
  const mainButton = useRef(null);
  const { data: team }: { data?: team[] } = useSWR("team");

  return (
    <>
      <MetaTags
        title="Team | Metro Reviews"
        description="All of the Bot List Staff and Community Members who represent Metro."
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div>
        <div className="overflow-hidden relative bg-background flex mx-auto items-center justify-center">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
              <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">{$.team.title1}</span>{" "}
                    <span className="block text-amber-500 xl:inline">
                      {$.team.title2}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    {$.team.description}
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="lg:max-w-screen-lg mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-auto">
          {!team ? (
            <div className="col-span-1 md:col-span-2 flex items-center justify-center">
              <i className="fad fa-spinner-third fa-spin text-white text-2xl" />
            </div>
          ) : (
            team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col justify-center text-white rounded w-auto"
              >
                <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-br from-neutral-900/80 to-neutral-900/20 p-3 rounded-lg w-auto h-auto border border-amber-800">
                  <img
                    className="rounded-full h-24 w-24"
                    alt={member.username}
                    src={
                      !member.avatar ? `/img/defaultUser.webp` : member.avatar
                    }
                  />
                  <div>
                    <h1 className="leading-none text-xl font-bold text-white">
                      {member.username}
                    </h1>
                    <br />
                    <h3 className="leading-none text-md bg-clip-text bg-gradient-to-br text-white">
                      <span className="text-amber-500 font-bold">
                        Position:
                      </span>{" "}
                      {member.is_list_owner
                        ? `${$.team.roles.owner}`
                        : member.sudo
                        ? `${$.team.roles.sudo}`
                        : `${$.team.roles.review}`}
                    </h3>
                    <h3>
                      <span className="text-amber-500 font-bold">
                        Staff In:
                      </span>{" "}
                      {member.roles.join(", ")}
                    </h3>
                    <h3>
                      <span className="text-amber-500 font-bold">Profile:</span>{" "}
                      <a
                        href={"https://discordapp.com/users/" + member.id}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Click Me
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const user = parseUser(ctx);

  return { props: { user } };
};
