module.exports = {
  overview: require("../locales.config.js")["en"],
  title: '<span class="text-amber-500 font-bold">Metro</span> Reviews',
  name: "English",
  country: "gb",

  navbar: {
    home: "Home",
    team: "Team",
    lists: "Lists",
    bots: "Bots",
    github: "GitHub",
  },

  footer: {
    rights: "All rights reserved.",
    description:
      "We simplify the Bot List Approval and Denial Process giving your staff team more time for the important things such as server moderation and support!",
    menus: {
      info: {
        title: "Info",
        items: {
          team: "Team",
          lists: "Lists",
          bots: "Bots",
        },
      },
      support: {
        title: "Support",
        items: {
          github: "GitHub",
          issues: "Issues",
          twitter: "Twitter",
        },
      },
      legal: {
        title: "Legal",
        items: {
          terms: "Terms",
          privacy: "Privacy",
          cookies: "Cookies",
        },
      },
      misc: {
        title: "Misc",
        items: {
          reqs: "Requirements",
          eq: "Best Practice",
          apps: "Apply Now",
        },
      },
    },
    footerCredits: "© 2022 Metro Reviews & Award Development",
  },

  index: {
    title: "Metro Reviews",
    description: "The Dedicated Community for Discord Bot Lists.",

    buttons: {
      support: "Get Support",
      apply: "Apply Now",
    },

    features: {
      title: 'Why choose <span class="text-amber-500 font-bold">Metro?</span>',
      description:
        "We provide a Simple API that allows all our Supported List to easily Manage, Approve and Deny Bots all within our Dedicated Community of Bot List Staff. Thus essentially giving you and your Staff Team more time to focus on Server Management, Development and Moderation",
      items: [
        {
          icon: "fas fa-check",
          title: "Integrated Bot Approvals",
          description:
            "We simplify and manage your Approval Process making it easier for your Staff Team to do what they do best. While providing the short queue time we all strive for.",
        },
        {
          icon: "fas fa-x",
          title: "Integrated Bot Denials",
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
        'Supported by <span class="text-amber-500">{list_count}</span> amazing Bot Lists',
      lists: {
        name: "{list_name}",
        domain: "{list_domain}",
        states: {
          pending: "📌 Pending Support",
          supported: "😀 Supported List",
          defunction: "☠️ Defunct",
          blacklisted: "🧐 Blacklisted",
          unconfirmed: "👀 Unconfirmed",
          err_failed: "Failed to fetch state.",
        },
      },
    },
  },

  team: {
    title1: "Our",
    title2: "Community",
    description:
      "These are all the amazing community members that help make this project possible or work for the bot lists that support us.",
    linkcordLang: "en",
    noWidget: "No Widget",
    roles: {
      owner: "List Owner",
      sudo: "Metro Admin",
      review: "Bot Reviewer",
    },
  },

  lists: {
    title1: "Supported",
    title2: "Lists",
    desc: "All the amazing Bot Lists that use our services.",
    buttons: {
      support: "Get Support",
      home: "Apply Now",
    },
    info: {
      name: "{list_name}",
      visit: "Visit List",
      view: "View Page",
    },
  },

  bot_rules: {
    title1: "Bot",
    title2: "Rules",
    desc: "Simple set of rules that all Bots should follow when added to one of our Supported Lists.",
    updated: "Last Update: 05/15/2022",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Navigate to your desired section.",
      bp: "Best Practices",
      br: "Basic Rules",
      cr: "Command Rules",
      us: "User Safety",
      ceq: "Common Etiquette",
    },
    sections: {
      bp: {
        title: "Best Practices",
        desc: "All rules available under this list of",
        link: "Discord Bot Best Practices",
        out: "apply. These rules may change depending on the bot. If you are a Bot Reviewer please use your best judgment here.",
      },
      br: {
        title: "Basic Rules",
        list: {
          items: {
            item1:
              "Your bot must be public, online and able to be invited during and throughout testing and must continue to work after initial review as well.",
            item2:
              "It is perfectly OK to submit bots and servers that are in competition with bot lists (such as API/manager bots of other bot lists with their permission) as long as permission is explicitly granted and the bot serves a actual function.",
            item3:
              "Your bot may not be a fork or instance of another bot without substantial modifications and prior permission from the owner of the bot you have forked/made an instance of.",
            item4:
              "Your bot should handle errors in a user-friendly way. A way of reporting errors is a nice extra tidbit to have though not strictly required. Giving tracebacks is allowed however discouraged if it leaks sensitive information such as bot tokens or private information on a user.",
            item5:
              'Your bot must respect the Discord API and rate-limits. This also means that your bot should not spam messages or be a "rainbow role" bot.',
            item6:
              "Your bot must follow the Discord ToS and guidelines. This also includes no invite rewards (as in giving rewards for just joining another server), no nuking etc.",
            item7:
              "Custom bots based of/dependent on/running an instance of another bot such as bot-makers not allowed by discord, BotGhost, MEE6 Premium, Wick VIP is prohibited unless it has unique features that you have added to it and can be configured on other servers by users.",
            item8:
              "For frameworks such as redbot, you must have at least 3 custom-made cogs (or the equivalent for other frameworks). You must give credits to any framework you are using. BDFD/BDScript/other bot makers are not allowed on RBC lists unless it is also allowed by Discord and your bot is high-quality and has features",
            item9:
              "Generator bots are not allowed whatsoever on any of the Metro Reviews supported lists",
            item10: "Bots may not impersonate other bots",
            item11:
              'The term "loli" and other terms referring to the sexualization of young children is strictly probihited',
          },
        },
      },
      cr: {
        title: "Command Rules",
        list: {
          items: {
            item1:
              "Your bot must have a obvious point of entry, This could be a help command or just slash commands.",
            item2:
              "If your bot has level messages or welcome messages, it must be optional, configurable and desirable",
            item3:
              "Your bot should not DM users when it join unless it needs to DM the owner important or sensitive information (such as Wick’s rescue key)",
            item4:
              "Your bot should not DM users when they join a server unless a server manager chooses to enable such a feature. Bots that do need to DM users such as verification bots may be exempt from this rule on a case by case basis",
            item5:
              "All commands of a bot should check user and their own permissions before doing any action. For example, your bot should not kick users unless the user and the bot has the Kick Members permission. Commands may not be admin locked and NSFW commands must be locked to NSFW channels",
            item6:
              "Commands must have a purpose (no filler commands). Filler commands are ignored and will make your bot low quality. An example of filler commands/commands with no purpose is a bot with 20 purge commands or commands which are repeated in different ways or serve the same purpose",
            item7:
              "Bots should have at least 5-7 working commands and at least 80% of commands shown in its help command working. If your bot has a really unique feature however, this rule may be reconsidered for your bot.",
            item8:
              "Sensitive commands (such as eval) should be locked to bot owners only. RBC is not responsible for the code you run or for any arbitary code execution/privilege escalation on your bot however we do care if this affects servers your bot is in.",
            item9:
              "Bots with common prefixes (!, ?, ., ;) should either have a customizable prefix (if it has Message Content Intents), use mentions or use slash commands. If your bot does not use slash commands, it must have an easy way to find its prefix. Some good places for this are on bot mentions and bot status",
          },
        },
      },
      us: {
        title: "User Safety",
        list: {
          items: {
            item1:
              "Bots should not mass DM or be malicious in any way such as mass nuke, scam bots, free nitro bots.",
            item2:
              "Your bot must not have a copyrighted avatar or username. All assets used in your bot must be either owned by you or with permission from the copyright owner. Your bot must, in short, abide to third-party rights",
            item3:
              "Abusing Discord (mass creating or deleting channels, mass DM/spam/nuke bots) is strictly prohibited and doing so will get you and/or your bot banned from all Metro Reviews supported lists.",
            item4:
              "Your bot may not be hosted on Glitch/Repl Free Plan and use a software to ping your project. This is also against Repl/Glitch ToS. Your bot must be online during testing",
            item5: "Your bot must not reward users for voting for another bot",
            item6: "Your bot may not contain any seizure-inducing content",
            item7:
              'All bots that provide vote reminders or a "/dm" command must provide a way to disable it. All /dm commands must say who DM’d the user and must provide a way to disable it',
          },
        },
      },
      ceq: {
        title: "Common Etiquette",
        list: {
          items: {
            item1:
              "DMing or otherwise demanding staff to ask for your bot to be approved/reviewed is strictly prohibited. Your bot will be denied or banned if you do so.",
            item2:
              "You must not attempt to use Metro Reviews supported lists to distribute malware (such as XSS attacks, DDOS, rootkits, spyware etc). This will lead to your bot being banned from all Metro Reviews supported lists.",
            item3:
              "You can always appeal a ban or resubmit your bot if the bot list you have added your bot to has support for resubmissions. Your bot list should, along with a link to this page, state whether or not they support this..",
          },
        },
      },
    },
  },

  etiquette: {
    title1: "List",
    title2: "Etiquette",
    updated: "Last Update: 05/14/2022",
    description:
      "We realize and understand that no Bot List is the same. With that in mind there are still a few Guidelines that all Bot Lists and their Staff Team should follow",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Navigate to your desired section.",
      list: {
        bp: "Best Practices",
        sr: "Server Rules",
        bs: "Bilingual Servers",
        ds: "Data Scraping",
      },
    },
    sections: {
      best_practice: {
        title: "Best Practices",
        desc: "All Bot Lists should follow and enforce the",
        link: "Discord Community Guidelines",
      },
      server_rules: {
        title: "Server Rules",
        desc: "All Bot Lists should have a clear and obvious point of entry to their Server Rules these rules should tell their users what is and is not allowed in their Server.",
      },
      bilingual: {
        title: "Bilingual Severs",
        desc: "All Bot Lists who advertise as a Bilingual (Multi Lang)server should provide a clear and obvious channel layout.",
        ex: 'For example: Limiting all conversations not in english to the "off-topic" channel',
      },
      scrapers: {
        title: "Data Scraping",
        desc: 'Generally speaking any Bot Lists who Steal or "Scrape" data from other Bot Lists without direct consent from that Lists Owner or a Staff Member of power is frowned upon in most of the Discord Bot List Community as a whole. We understand that you are trying to simplify and automate our processes but due to this we will not be accepting any Bot List that uses or has this type of feature',
      },
    },
  },

  guidelines: {
    title1: "List",
    title2: "Requirements",
    updated: "Last Update: 05/14/2022",
    description:
      "List of requirements that all Bot Lists are expected to meet!",
    navigation: {
      title: "Navigation",
      desc: "Navigate to your desired section",
      new: "New Lists",
      tld: "Top Level Domains",
      free: "Free Domains",
      fork: "Forked Lists",
      cross: "Cross Add Support",
    },
    buttons: {
      support: "Get Support",
      eq: "List Etiquette",
    },
    sections: {
      new: {
        title: "New Lists",
        desc: "All Bot Lists are expected to be at least 30 days old. We are strict on this rule and allow no exceptions.",
      },
      tld: {
        title: "Top Level Domains",
        desc: {
          text: "All Bot Lists should have a Good Quality and Respectable",
          link: "TLD",
        },
        list: {
          title: "Acceptable TLD’s include but are not limited to:",
          items: {
            item1: "example.xyz",
            item2: "example.com",
            item3: "example.net",
            item4: "example.org",
            item5: "example.gg",
          },
        },
      },
      free: {
        title: "Free Domains",
        desc: 'All Bot Lists should not use any "free" domains or domains that are provided via a hosting provider. This includes but is not limited to:',
        list: {
          items: {
            item1: "example.glitch.me",
            item2: "example.repl.co",
            item3: "example.vercel.app",
            item4: "example.herokuapp.com",
          },
        },
      },
      fork: {
        title: "Forked Lists",
        desc: "Any Bot Lists based on other Bot Lists (such as forks or clones) should follow these additional requirements:",
        list: {
          items: {
            item1:
              "Give Credits to the Original Author of the Code (in the Footer preferably)",
            item2:
              "Provide a Hyperlink to the Original Code and/or it’s Open-Source License",
          },
        },
      },
      cross: {
        title: "Cross Add Support",
        desc: {
          text1: "All lists should respect our",
          text2: "cross_add",
          text3: "support under the following conditions:",
        },
        list: {
          items: {
            item1:
              "Provide your users with a clear and obvious notice that your bot list supports Cross Adding Bots to other bot lists",
            item2:
              "Provide a check box or some sort of option that allows users to decide if their bot should be Cross Added or not.",
          },
        },
      },
    },
  },

  terms: {
    title1: "Terms of",
    title2: "Service",
    updated: "Last Update: 05/14/2022",
    description: "Its boring but you should probably read this.",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Navigate to your desired section",
      terms: "Terms",
      use: "Use License",
      discl: "Disclaimer",
      limits: "Limitations",
      revise: "Revisions and Errata",
      third: "Third-Party Links",
      modify: "Site Modifications",
      privacy: "Your Privacy",
      law: "Governing Law",
    },
    sections: {
      terms: {
        title: "Terms",
        texts:
          "By accessing this Website, accessible from https://metrobots.xyz, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.",
      },
      license: {
        title: "Use License",
        texts:
          "Permission is granted to temporarily download one copy of the materials on Metro Reviews's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
        list: {
          item_1: "modify or copy the materials;",
          item_2:
            "use the materials for any commercial purpose or for any public display;",
          item_3:
            "attempt to reverse engineer any software contained on Metro Reviews's Website or API;",
          item_4:
            "remove any copyright or other proprietary notations from the materials; or",
          item_5:
            'transferring the materials to another person or "mirror" the materials on any other server.',
        },
      },
      disclaimer: {
        title: "Disclaimer",
        texts:
          'All the materials on Metro Reviews’s Website are provided "as is". Metro Reviews makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Metro Reviews does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.',
      },
      limitations: {
        title: "Limitations",
        texts:
          "Metro Reviews or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Metro Review’s Website, even if Metro Reviews or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.",
      },
      revisions: {
        title: "Revisions and Errata",
        texts:
          "The materials appearing on Metro Reviews’s Website may include technical, typographical, or photographic errors. Metro Reviews will not promise that any of the materials in this Website are accurate, complete, or current. Metro Reviews may change the materials contained on its Website at any time without notice. Metro Reviews does not make any commitment to update the materials.",
      },
      links: {
        title: "Links",
        texts:
          "Metro Reviews has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Metro Review of the site. The use of any linked website is at the user’s own risk.",
      },
      modifications: {
        title: "Site Modifications",
        texts:
          "Metro Reviews may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.",
      },
      privacy: {
        title: "Your Privacy",
        texts: {
          base: "Please read our",
          link: "Privacy Policy",
        },
      },
      laws: {
        title: "Governing Law",
        texts:
          "Any claim related to Metro Review’s Website shall be governed by the laws of Canada without regards to its conflict of law provisions.",
      },
    },
  },

  privacy: {
    title1: "Privacy",
    title2: "Policy",
    updated: "Last Update: 06/30/2022",
    description: "How we Store and Protect your Data!",
    navigation: {
      consent: "Your Consent",
      storage: "What data do we store?",
      usage: "How we use your information",
      logs: "Log Files",
      cookies: "Cookies and Web Beacons",
      ads: "Advertising Partners",
      tppp: "Third-Party Privacy Policies",
      analytics: "Google Analytics",
      ccpa: "CCPA Privacy Rights",
      gdpr: "GDPR Data Protection Rights",
      child: "Children’s Information",
    },
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    sections: {
      base: {
        text1:
          "At Metro Reviews, accessible from metrobots.xyz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Metro Reviews and how we use it.",
        text2:
          "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
        text3:
          "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Metro Reviews. This policy is not applicable to any information collected offline or via channels other than this website.",
      },
      consent: {
        title: "Your Consent",
        texts:
          "By using our website, you hereby consent to our Privacy Policy and agree to its terms.",
      },
      data_store: {
        title: "What data do we store?",
        list: {
          items: {
            item1: "Discord Username and Avatar.",
            item2: "Guild Member Roles and Information.",
            item3: "Your Bot List Icon and Description.",
            item4: "Bot Specific Information from your Bot List.",
            item5: "All Bot List Information that is Provided to us.",
          },
        },
      },
      data_usage: {
        title: "How we use your information",
        description:
          "We use the information we collect in various ways, including to:",
        list: {
          items: {
            item1: "Provide our API and Services to you.",
            item2: "Track your Footprint and Improve our Services.",
            item3: "Manage Staff Whitelisting and Role Management.",
            item4: "Build and Provide new Services and Features.",
            item5: "Display List, User, Bot Profiles on our Website.",
          },
        },
      },
      log_files: {
        title: "Log Files",
        texts:
          "We follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.",
      },
      cookies: {
        title: "Cookies and Web Beacons",
        texts: {
          base: 'Like any other website, Metro Reviews uses "cookies". These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.',
          intro: "Please read our",
          link: "Cookie Notice",
          outro: "for more info.",
        },
      },
      ad_partners: {
        title: "Advertising Partners",
        texts: {
          base: "You may consult this list to find the Privacy Policy for each of the Metro Reviews advertising partners.",
          sec: "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Metro Reviews, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
          out: "Note that Metro Reviews has no access to or control over cookies that are used by third-party advertisers.",
        },
      },
      third_party: {
        title: "Third-Party Privacy Policies",
        texts: {
          base: "Metro’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
          out: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.",
        },
      },
      analytics: {
        title: "Google Analytics",
        texts: {
          base: "We use Google Analytics as a third-party tracking service, but we don’t use it to track you individually or collect your User Personal Information. We use Google Analytics to collect information about how our Website performs and how our users, in general, navigate through and use Metro Reviews. This helps us evaluate our users' use of Metro Reviews; compile statistical reports on activity; and improve our content and website performance.",
          second:
            "Google Analytics gathers certain information over time, such as your IP address, browser type, internet service provider, referring and exit pages, time stamp, and similar data about your use of Metro Reviews. We do not link this information to any of your personal information such as your username.",
          third: {
            text: "Metro Reviews will not, nor will we authorize any third party to, use the Google Analytics tool to track our users individually; collect any User Personal Information other than IP address; or correlate your IP address with your identity. Google provides further information about its own privacy practices and",
            link: "offers a browser add-on to opt out of Google Analytics tracking. ",
          },
          out: "Certain pages on our site may set other third party cookies. For example, we may embed content, such as videos, from another site that sets a cookie. While we try to minimize these third party cookies, we can’t always control what cookies this third party content sets.",
        },
      },
      ccpa: {
        title: "CCPA Privacy Rights (Do Not Sell My Personal Information)",
        desc: "Under the CCPA, among other rights, California consumers have the right to:",
        list: {
          items: {
            item1:
              "Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
            item2:
              "Request that a business delete any personal data about the consumer that a business has collected.",
            item3:
              "Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.",
          },
        },
        out: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please",
        link: "Open a Issue",
      },
      gdpr: {
        title: "GDPR Data Protection Rights",
        desc: "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:",
        list: {
          items: {
            item1:
              "The right to access – You have the right to request copies of your personal data. However we may charge you a small fee for this service.",
            item2:
              "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
            item3:
              "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
            item4:
              "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
            item5:
              "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
            item6:
              "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
          },
        },
        out: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please",
        link: "Open a Issue",
      },
      children: {
        title: "Children’s Information",
        texts: {
          desc1:
            "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
          desc2:
            "Metro does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.",
        },
      },
    },
  },

  cookies: {
    title1: "Cookie",
    title2: "Policy",
    updated: "Last Update: 05/14/2022",
    description: "Information on how we Store and Use Cookies.",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Navigate to your desired section",
    },
    texts: {
      desc1:
        "A cookie is a small piece of text that our web server stores on your computer or mobile device, which your browser sends to us when you return to our site. Cookies do not necessarily identify you if you are merely visiting Metro Reviews; however, a cookie may store a unique identifier for each logged in user. The cookies Metro Reviews sets are essential for the operation of the website, or are used for performance or functionality. By using our website, you agree that we can place these types of cookies on your computer or device.",
      desc2:
        "If you disable your browser or device’s ability to accept cookies, you will still be able to browse the website, but you will not be able to log in to your Metro Reviews account. Other functionality might be broken too.",
    },
    sections: {
      storage: {
        title: "Cookie Storage",
        desc: "When you use Metro Reviews we store various cookies including:",
        list: {
          items: {
            item1: "$Metro_cookies - Your Cookie Consent Approval.",
            item2: "$Metro_token - Your Session Token (When Logged In)",
            item3: "$Metro_oauth - You Auth Token (When Logged In)",
          },
        },
      },
      usage: {
        title: "Cookie Usage",
        desc: "Metro Reviews uses cookies to allow you to make interactions with our service easy and meaningful. We use cookies (and similar technologies, like HTML5 and localStorage) to keep you logged in, Remember your preferences and provide needed information and statistics for future development of Metro Reviews.",
      },
      tracking: {
        title: "Cookie Tracking",
        texts: {
          main: {
            link1: '"Do Not Track"',
            desc1:
              "is a privacy preference you can set in your browser if you do not want online services to collect and share certain kinds of information about your online activity from third party tracking services. We do not track your online browsing activity on other online services over time and we do not authorize third-party services to track your activity on our site beyond our basic Google Analytics tracking, which you may opt out of",
            link2: "here",
            desc2:
              "Because we do not share this kind of data with third party services or permit this kind of third party data collection on Metro Reviews for any of our users, and we do not track our users on third-party websites ourselves, we do not need to respond differently to an individual browser’s",
            link3: "Do Not Track",
            out: "setting",
          },
          secondary: {
            desc: "If you are interested in turning on your browser’s privacy and Do Not Track settings, the Do Not Track website has browser-specific instructions.",
          },
        },
      },
    },
  },
};
