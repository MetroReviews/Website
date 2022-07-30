module.exports = {
  overview: require("../locales.config.js")["en"],
  title: '<span class="text-amber-500 font-bold">Metro</span> Reviews',
  navbar: {
    home: "Home",
    team: "Team",
    lists: "Lists",
    partners: "Partners",
  },
  footer: {
    rights: "Alla rättigheter forbehållna.",
    description:
      "Vi forenklar Bot List Approval and Denial Process ger ditt personalteam mer tid för viktiga saker som servermoderering och support!",
    menus: {
      info: {
        title: "Info",
        items: {
          team: "Team",
          lists: "Lists",
          faq: "FAQ's",
        },
      },
      support: {
        title: "Support",
        items: {
          discord: "Discord",
          github: "Github",
          contact: "Contact",
        },
      },
      legal: {
        title: "Rattslig",
        items: {
          tos: "Användarvillkor",
          privacy: "Integritetspolicy",
          cookies: "Cookiesamtycke",
        },
      },
      misc: {
        title: "Övrigt",
        items: {
          rules: "Lista regler",
          guidelines: "Lista riktlinjer",
          howto: "Lagg till en lista",
        },
      },
    },
    footerCredits: "Gjord med❤️ by Toxic Dev#5936 & Rootspring#6701",
  },
  index: {
    title: "Metro Reviews",
    description: "Han centraliserade lösning för Discord Bot List-hantering",
    buttons: {
      support: "Support Server",
    },
    features: {
      title:
        'Varför välja <span class="text-amber-500 font-bold">Metro?</span>',
      description:
        "Vi förenklar Bot List Approval and Denial Process ger ditt personalteam mer tid för viktiga saker som servermoderering och support!",
      buttonText: "Lagg till i Discord",
      items: [
        {
          icon: "fas fa-check",
          title: "Managed Approvals",
          description:
            "We simplify and manage your Approval Process making it easier for your Staff Team to do what they do best. While providing the short queue time we all strive for.",
        },
        {
          icon: "fas fa-x",
          title: "Managed Denials",
          description:
            "Bot Denials are a tricky subject and in most cases it results in a dispute from the Bot Owner. We automate the Denial Process for you and skip the man in the middle.",
        },
        {
          icon: "fas fa-user-cog",
          title: "Managed Whitelist",
          description:
            "With the Metro Reviews Integration all necessary commands and features are limited to members of your Bot List Staff Team and monitored by our Built in Whitelist.",
        },
        {
          icon: "fas fa-book",
          title: "Managed Claims",
          description:
            "Claiming Bots has never been easier. We provide a variety of commands and options to make keep your staff team encouraged and happy. Including a interactive admin panel",
        },
      ],
    },
    list_stats: {
      chosen:
        'Stods av <span class="text-amber-500">{list_count}</span> fantastiska botlistor',
      lists: {
        name: "{list_name}",
        domain: "{list_domain}",
        states: {
          pending: "📌 Väntar på support",
          supported: "😀 Lista som stöds",
          defunction: "☠️ Nedlagd",
          blacklisted: "🧐 Svartlistad",
          unconfirmed: "👀 Obekraftad",
          err_failed: "Det gick inte att hamta status.",
        },
      },
    },
  },
  team: {
    title: "Våra gemenskapsmedlemmar",
    description:
      "Alla Bot List Community-medlemmar och ägare som stöttar oss och hjälpte till att göra detta projekt möjligt!",
    linkcordLang: "se",
    noWidget: "Ingen widget",
    roles: {
      owner: "Listägare",
      sudo: "Metro Admin",
      review: "Botrecensent",
    },
  },
};
