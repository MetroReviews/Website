import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItems } from "../../utils/navItems";
import { parseUser } from "../../utils/parseUser";
import { DiscordUser } from "../../utils/types";
import UserAvatar from "@/root/components/Interface/Avatar";
import { MetaTags } from "@/components/Header/Meta";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Static/Header";
import Footer from "@/components/Static/Footer";
import { useRouter } from "next/router";

import { GetServerSideProps } from "next";
import UnAuthorized from "../401";
import { fetcher } from "@/root/utils/fetcher";
import { APIResponse } from "nextkit";
import toast from "react-hot-toast";

interface Props {
  user: DiscordUser;
}

export default function (props: Props) {
  const router = useRouter();
  const $ = require("../../lang/" + (router.locale || "en"));

  const [value, setValue] = useState({
    listID: "",
    listName: "",
    listDom: "",
    listLogo: "",
    listDesc: "",
    listOwner: "",
    revSystem: "",
    listAge: "",
    listLang: "",
    forkedList: "",
    apiChanges: "",
  });

  if (!props?.user || !props?.user.id) return <UnAuthorized user={null} />;

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedValue = localStorage.getItem("value");

      if (storedValue) {
        storedValue = JSON.parse(storedValue) || {};

        // @ts-ignore
        const listID = storedValue.listID ? storedValue.listID : "";
        // @ts-ignore
        const listName = storedValue.listName ? storedValue.listName : "";
        // @ts-ignore
        const listDom = storedValue.listDom ? storedValue.listDom : "";
        // @ts-ignore
        const listLogo = storedValue.listLogo ? storedValue.listLogo : "";
        // @ts-ignore
        const listDesc = storedValue.listDesc ? storedValue.listDesc : "";
        // @ts-ignore
        const listOwner = storedValue.listOwner ? storedValue.listOwner : "";
        // @ts-ignore
        const revSystem = storedValue.revSystem ? storedValue.revSystem : "";
        // @ts-ignore
        const listAge = storedValue.listAge ? storedValue.listAge : "";
        // @ts-ignore
        const listLang = storedValue.listLang ? storedValue.listLang : "";
        // @ts-ignore
        const forkedList = storedValue.forkedList ? storedValue.forkedList : "";
        // @ts-ignore
        const apiChanges = storedValue.apiChanges ? storedValue.apiChanges : "";

        setValue({
          listID,
          listName,
          listDom,
          listLogo,
          listDesc,
          listOwner,
          revSystem,
          listAge,
          listLang,
          forkedList,
          apiChanges,
        });
      }
    }
  }, []);

  /**
   * UPDATE PERSISTENT FORM DATA AS THE USER TYPES
   */
  const onChange = (e) => {
    const listName = e.target.name;
    const persListName = { ...value, [listName]: e.target.value };

    setValue(persListName);
    localStorage.setItem("value", JSON.stringify(persListName));
  };

  const onListIDUpdate = (e) => {
    const listID = e.target.name;
    const persListID = { ...value, [listID]: e.target.value };

    setValue(persListID);
    localStorage.setItem("value", JSON.stringify(persListID));
  };

  const onListDomUpdate = (e) => {
    const listDom = e.target.name;
    const persListDom = { ...value, [listDom]: e.target.value };

    setValue(persListDom);
    localStorage.setItem("value", JSON.stringify(persListDom));
  };

  const onListLogoUpdate = (e) => {
    const listLogo = e.target.name;
    const persListLogo = { ...value, [listLogo]: e.target.value };

    setValue(persListLogo);
    localStorage.setItem("value", JSON.stringify(persListLogo));
  };

  const onListDescUpdate = (e) => {
    const listDesc = e.target.name;
    const persListDesc = { ...value, [listDesc]: e.target.value };

    setValue(persListDesc);
    localStorage.setItem("value", JSON.stringify(persListDesc));
  };

  const onListOwnerUpdate = (e) => {
    const listOwner = e.target.name;
    const persListOwner = { ...value, [listOwner]: e.target.value };

    setValue(persListOwner);
    localStorage.setItem("value", JSON.stringify(persListOwner));
  };

  const onRevSystemUpdate = (e) => {
    const revSystem = e.target.name;
    const persRevSystem = { ...value, [revSystem]: e.target.value };

    setValue(persRevSystem);
    localStorage.setItem("value", JSON.stringify(persRevSystem));
  };

  const onListAgeUpdate = (e) => {
    const listAge = e.target.name;
    const persListAge = { ...value, [listAge]: e.target.value };

    setValue(persListAge);
    localStorage.setItem("value", JSON.stringify(persListAge));
  };

  const onListLangUpdate = (e) => {
    const listLang = e.target.name;
    const persListLang = { ...value, [listLang]: e.target.value };

    setValue(persListLang);
    localStorage.setItem("value", JSON.stringify(persListLang));
  };

  const onForkedListUpdate = (e) => {
    const forkedList = e.target.name;
    const persForkedList = { ...value, [forkedList]: e.target.value };

    setValue(persForkedList);
    localStorage.setItem("value", JSON.stringify(persForkedList));
  };

  const onApiChangeUpdate = (e) => {
    const apiChanges = e.target.name;
    const persApiChanges = { ...value, [apiChanges]: e.target.value };

    setValue(persApiChanges);
    localStorage.setItem("value", JSON.stringify(persApiChanges));
  };

  return (
    <>
      <MetaTags
        title="New List | Metro Reviews"
        description="Apply to add your Bot List to Metro Reviews"
        image="/img/logo.webp"
        name="Metro Reviews"
      />
      <Header $={$} NavItems={NavItems} props={props} allowLogin={true} />
      <div className="overflow-hidden relative bg-background flex -mt-10 mx-auto items-center justify-center">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <main className="px-4 mx-auto mt-10 w-full max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <h1 className="inline text-4xl font-extrabold tracking-tight text-slate-300 sm:text-5xl md:text-6xl">
                  Submit a Bot List
                </h1>
                <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Thank you for your interest in Metro Reviews. You can submit
                  an application below.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="mb-20 mt-20 w-full h-max grid grid-cols-1 lg:grid-cols-12 lg:gap-x-4">
        <div className="h-auto w-full text-white lg:col-span-3 mb-5 lg:mb-0">
          <div className="h-auto top-20 transition-all duration-200 w-full bg-black bg-opacity-10 rounded-lg p-4 lg:sticky">
            <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg h-max">
              <br />
              <p className="text-xl font-medium text-white text-center">
                <FontAwesomeIcon
                  size="lg"
                  icon={["fas", "plus"]}
                  className="text-amber-400 mr-2"
                />
                Submit a Bot List
              </p>
              <p className="text-white text-sm text-opacity-50 mb-5 text-center">
                Things you may find useful
              </p>
              <hr />
              <h2 className="mt-4 font-extrabold">NOTE:</h2>
              <p className="text-white/70">
                <span className="text-yellow-600">*</span> - Automated Input
                Field
              </p>
              <p className="text-white/70">
                <span className="text-red-600">*</span> - Required Input Field
              </p>

              <div className="mt-6">
                <p className="text-white text-lg">Links</p>
                <div className="items-center justify-center">
                  <a
                    href="/lists/rules/eq"
                    className="flex items-center shadow-xl"
                  >
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <FontAwesomeIcon
                        size="lg"
                        icon={["fas", "info-circle"]}
                        className="text-white mr-2"
                      />
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">List Best Practice</p>
                    </div>
                  </a>
                  <a
                    href="/lists/rules/reqs"
                    className="flex items-center shadow-xl"
                  >
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <FontAwesomeIcon
                        size="lg"
                        icon={["fas", "info-circle"]}
                        className="text-white mr-2"
                      />
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">List Requirements</p>
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/49DE35a5eJ"
                    className="flex items-center shadow-xl"
                  >
                    <div className="mt-2 bg-amber-800 text-center px-4 py-2 rounded-l-lg text-white">
                      <FontAwesomeIcon
                        size="lg"
                        icon={["fab", "discord"]}
                        className="text-white mr-2"
                      />
                    </div>
                    <div className="mt-2 bg-amber-600 w-full px-4 py-2 rounded-r-lg text-white">
                      <p className="line-clamp-1">Get Support</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full col-span-9">
          <div className="w-full text-white rounded-lg">
            <div className="mt-4">
              <div className="text-center w-full h-auto bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 rounded-lg p-6 shadow-md mx-auto">
                <div className="px-4 mx-auto w-auto sm:px-6 lg:px-8 lg:text-center">
                  <form
                    method="POST"
                    onSubmit={async (event) => {
                      event.preventDefault();

                      const values = Object.fromEntries(
                        new FormData(event.target as HTMLFormElement).entries()
                      );
                      const promise = fetcher<APIResponse<{ sent: true }>>(
                        "/api/apply",
                        {
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `${process.env.API_AUTH}`,
                          },
                          body: JSON.stringify({
                            userID: props?.user.id,
                            userName: props?.user.username,
                            listID: values.listID,
                            listName: values.listName,
                            listDom: values.listDom,
                            listLogo: values.listLogo,
                            listDesc: values.listDesc,
                            listOwner: values.listOwner,
                            revSystem: values.revSystem,
                            listAge: values.listAge,
                            listLang: values.listLang,
                            forkedList: values.forkedList,
                            apiChanges: values.apiChanges,
                          }),
                          method: "POST",
                        }
                      );

                      await toast
                        .promise(promise, {
                          success: "Your Bot List has been submitted!",
                          loading: "Sending...",
                          error: (error: Error) =>
                            error?.message ?? "Something went wrong...",
                        })
                        .then(async () => {
                          router.reload();
                        })
                        .catch(() => null);
                    }}
                  >
                    <div className="col-span-9 pt-5 lg:pt-0 items-center justify-center">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "fingerprint"]}
                          className="text-white mr-2"
                        />{" "}
                        Your Username <span className="text-yellow-600">*</span>
                      </h2>
                      <input
                        name="userName"
                        placeholder={props?.user?.username}
                        value={props?.user?.username}
                        type="text"
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6 disabled"
                        disabled={true}
                      />
                    </div>
                    <div className="col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "fingerprint"]}
                          className="text-white mr-2"
                        />{" "}
                        Your ID <span className="text-yellow-600">*</span>
                      </h2>
                      <input
                        name="userID"
                        placeholder={props?.user.id}
                        value={props?.user.id}
                        type="text"
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6 disabled"
                        disabled={true}
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "id-card"]}
                          className="text-white mr-2"
                        />{" "}
                        List ID <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Server ID for your Bot List
                      </p>
                      <input
                        name="listID"
                        placeholder="969274747093397555"
                        value={value.listID}
                        onChange={onListIDUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "id-card-alt"]}
                          className="text-white mr-2"
                        />{" "}
                        List Name <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • The name of your Bot List (Ex: Infinity Bot List)
                      </p>
                      <input
                        name="listName"
                        placeholder="Infinity Bot List"
                        value={value.listName}
                        onChange={onChange}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "link"]}
                          className="text-white mr-2"
                        />{" "}
                        List Domain <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Domain for your Bot List (Ex:
                        https://infinitybotlist.com)
                      </p>
                      <input
                        name="listDom"
                        placeholder="https://infinitybotlist.com"
                        value={value.listDom}
                        onChange={onListDomUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "image"]}
                          className="text-white mr-2"
                        />{" "}
                        List Logo <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Link to a Logo for your Bot List
                      </p>
                      <input
                        name="listLogo"
                        placeholder="https://cdn.infinitybots.xyz/images/logo.png"
                        value={value.listLogo}
                        onChange={onListLogoUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "info-circle"]}
                          className="text-white mr-2"
                        />{" "}
                        List Description <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Description for your Bot List (Supports Markdown and
                        HTML)
                      </p>
                      <textarea
                        name="listDesc"
                        placeholder="My bot list is a very cool bot list with a ton of features"
                        value={value.listDesc}
                        onChange={onListDescUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "fingerprint"]}
                          className="text-white mr-2"
                        />{" "}
                        List Owner ID <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Discord User ID of the Bot List Owner
                      </p>
                      <input
                        name="listOwner"
                        placeholder="653731677851615233"
                        value={value.listOwner}
                        onChange={onListOwnerUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "fingerprint"]}
                          className="text-white mr-2"
                        />{" "}
                        Does your bot list have a review system?{" "}
                        <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Please explain with as much detail as possible.
                      </p>
                      <textarea
                        name="revSystem"
                        placeholder="My bot list has a custom review system that works by doing..."
                        value={value.revSystem}
                        onChange={onRevSystemUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "id-badge"]}
                          className="text-white mr-2"
                        />{" "}
                        How old is your Bot List?{" "}
                        <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Example: 12 Months old.
                      </p>
                      <input
                        name="listAge"
                        placeholder="My bot list is about 12 months old"
                        value={value.listAge}
                        onChange={onListAgeUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "code"]}
                          className="text-white mr-2"
                        />{" "}
                        What is your Bot List made with?{" "}
                        <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Javascript, Typescript, Python etc
                      </p>
                      <input
                        name="listLang"
                        placeholder="Javascript"
                        value={value.listLang}
                        onChange={onListLangUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "download"]}
                          className="text-white mr-2"
                        />{" "}
                        Is your Bot List a Fork/Clone?{" "}
                        <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • If yes please tell us what list and what you have
                        changed!
                      </p>
                      <textarea
                        name="forkedList"
                        placeholder="Yes its a fork of Infinity Bots but i have added......"
                        value={value.forkedList}
                        onChange={onForkedListUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="mt-8 col-span-9 pt-5 lg:pt-0 items-center justify-center mt-6">
                      <h2 className="text-white text-2xl text-left">
                        <FontAwesomeIcon
                          size="lg"
                          icon={["fas", "code"]}
                          className="text-white mr-2"
                        />{" "}
                        Are you prepared to make changes to your code?{" "}
                        <span className="text-red-600">*</span>
                      </h2>
                      <p className="mt-4 text-white/50 text-sm text-left">
                        • Changes will need to be made to your bot list to
                        support our API!
                      </p>
                      <input
                        name="apiChanges"
                        placeholder="Yes i am ready to implement the metro api."
                        value={value.apiChanges}
                        onChange={onApiChangeUpdate}
                        className="w-full mx-auto mt-4 flex transition duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6"
                      />
                    </div>
                    <div className="flex pt-2 mx-auto left-0 mt-8">
                      <button
                        type="submit"
                        className="inline-flex items-center py-2 px-8 space-x-2 text-lg bg-amber-600 hover:bg-amber-800 selection:rounded-md focus:outline-none focus:ring focus:ring-indigo-600"
                      >
                        <span>Submit List</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
