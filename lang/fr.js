module.exports = {
  overview: require("../locales.config.js")["en"],
  title: '<span class="text-amber-500 font-bold">Métro</span> Critiques',
  name: "Français",
  country: "fr",

  navbar: {
    home: "Accueil",
    team: "Équipe",
    lists: "Listes",
    bots: "Bots",
    github: "GitHub",
  },

  footer: {
    rights: "Tous droits réservés.",
    description:
      "Nous simplifions le processus d’approbation et de refus de la liste des robots, ce qui permet à votre équipe de consacrer plus de temps aux tâches importantes telles que la modération et l’assistance des serveurs.",
    menus: {
      info: {
        title: "Info",
        items: {
          team: "Équipe",
          lists: "Listes",
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
    footerCredits: "Fait avec ❤️ par Toxic Dev#5936 & Rootspring#6701",
  },

  index: {
    title: "Critiques du métro",
    description: "La communauté dédiée aux listes de robots Discord.",

    buttons: {
      support: "Get Support",
      apply: "Apply Now",
    },

    features: {
      title:
        'Pourquoi choisir <span class="text-amber-500 font-bold">Metro?</span>',
      description:
        "Nous fournissons une API simple qui permet à toutes nos listes soutenues de gérer, d’approuver et de refuser facilement les bots, le tout au sein de notre communauté dédiée de personnel de la liste des bots. Ainsi, vous et votre équipe pouvez consacrer plus de temps à la gestion, au développement et à la modération des serveurs.",
      items: [
        {
          icon: "fas fa-check",
          title: "Approbations intégrées de Bot",
          description:
            "Nous simplifions et gérons votre processus d’approbation, ce qui permet à votre équipe de faire ce qu’elle fait de mieux. Tout en assurant un temps d’attente court, comme nous le souhaitons tous.",
        },
        {
          icon: "fas fa-x",
          title: "Refus intégré des robots",
          description:
            "Le refus d’un bot est un sujet délicat et, dans la plupart des cas, il donne lieu à une contestation de la part du propriétaire du bot. Nous automatisons le processus de refus pour vous et évitons l’homme au milieu.",
        },
        {
          icon: "fas fa-user-cog",
          title: "Liste blanche gérée",
          description:
            "Avec l’intégration de Metro Reviews, toutes les commandes et fonctionnalités nécessaires sont limitées aux membres de l’équipe de votre Bot List et contrôlées par notre liste blanche intégrée.",
        },
        {
          icon: "fas fa-book",
          title: "Gestion des sinistres",
          description:
            "Réclamer des bots n’a jamais été aussi facile. Nous fournissons une variété de commandes et d’options pour que votre équipe soit encouragée et heureuse. Y compris un panneau d’administration interactif",
        },
      ],
    },

    list_stats: {
      chosen:
        'Soutenu par <span class="text-amber-500">{list_count}</span> Listes de robots étonnants',
      lists: {
        name: "{list_name}",
        domain: "{list_domain}",
        states: {
          pending: "📌 Soutien en attente",
          supported: "😀 Liste des supports",
          defunction: "☠️ Défunte",
          blacklisted: "🧐 Liste noire",
          unconfirmed: "👀 Non confirmé",
          err_failed: "Échec de la récupération de l’état.",
        },
      },
    },
  },

  team: {
    title1: "Notre",
    title2: "Communauté",
    description:
      "Ce sont tous les membres extraordinaires de la communauté qui rendent ce projet possible ou qui travaillent pour les listes de robots qui nous soutiennent.",
    linkcordLang: "en",
    noWidget: "Pas de widget",
    roles: {
      owner: "Propriétaire de la liste",
      sudo: "Metro Admin",
      review: "Bot Reviewer",
    },
  },

  lists: {
    title1: "Supporté par",
    title2: "Listes",
    desc: "Toutes les incroyables Bot Lists qui utilisent nos services.",
    buttons: {
      support: "Get Support",
      home: "Apply Now",
    },
    info: {
      name: "{list_name}",
      visit: "Liste de visite",
      view: "Voir la page",
    },
  },

  bot_rules: {
    title1: "Bot",
    title2: "Règles",
    desc: "Ensemble de règles simples que tous les bots doivent suivre lorsqu’ils sont ajoutés à l’une des listes prises en charge.",
    updated: "Dernière mise à jour : 15/05/2022",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Naviguez jusqu’à la section souhaitée.",
      bp: "Meilleures pratiques",
      br: "Règles de base",
      cr: "Règles de commandement",
      us: "Sécurité des utilisateurs",
      ceq: "Étiquette commune",
    },
    sections: {
      bp: {
        title: "Meilleures pratiques",
        desc: "Toutes les règles disponibles dans cette liste de",
        link: "Meilleures pratiques pour le robot Discord",
        out: "s’appliquent. Ces règles peuvent changer en fonction du bot. Si vous êtes un Bot Reviewer, veuillez faire preuve de discernement.",
      },
      br: {
        title: "Règles de base",
        list: {
          items: {
            item1:
              "Votre robot doit être public, en ligne et pouvoir être invité pendant et tout au long des tests et doit continuer à fonctionner après l’examen initial également.",
            item2:
              "Il est parfaitement acceptable de soumettre des bots et des serveurs qui sont en concurrence avec des listes de bots (comme les bots API/managers d’autres listes de bots avec leur permission), à condition que la permission soit explicitement accordée et que le bot serve une fonction réelle.",
            item3:
              "Votre bot ne doit pas être un fork ou une instance d’un autre bot sans modifications substantielles et sans l’autorisation préalable du propriétaire du bot dont vous avez fait un fork/une instance.",
            item4:
              "Votre robot doit gérer les erreurs de manière conviviale. Un moyen de signaler les erreurs est une bonne chose, mais ce n’est pas strictement obligatoire. Le fait de donner des traces est autorisé mais déconseillé s’il n’y a pas de fuite d’informations sensibles comme les jetons du bot ou des informations privées sur un utilisateur.",
            item5:
              'Votre bot doit respecter l’API de Discord et les limites de débit. Cela signifie également que votre bot ne doit pas envoyer de messages non sollicités (spam) ni être un bot de type "rainbow role".',
            item6:
              "Votre bot doit suivre les ToS et les directives de Discord. Cela inclut également l’interdiction de récompenser les invitations (c’est-à-dire de donner des récompenses pour avoir simplement rejoint un autre serveur), l’interdiction du nuking, etc.",
            item7:
              "Les bots personnalisés basés sur/dépendants de/exécutant une instance d’un autre bot tels que les bot-makers non autorisés par discord, BotGhost, MEE6 Premium, Wick VIP sont interdits sauf s’ils ont des caractéristiques uniques que vous leur avez ajoutées et qui peuvent être configurées sur d’autres serveurs par les utilisateurs.",
            item8:
              "Pour les frameworks tels que redbot, vous devez avoir au moins 3 cogs personnalisés (ou l’équivalent pour les autres frameworks). Vous devez donner des crédits à tout framework que vous utilisez. Les fabricants de bots BDFD/BDScript/autres ne sont pas autorisés sur les listes RBC, sauf si cela est également autorisé par Discord et que votre bot est de haute qualité et possède les fonctionnalités suivantes",
            item9:
              "Les bots générateurs ne sont pas autorisés sur aucune des listes supportées par Metro Reviews.",
            item10:
              "Les bots ne peuvent pas se faire passer pour d’autres bots.",
            item11:
              'Le terme "loli" et les autres termes faisant référence à la sexualisation des jeunes enfants sont strictement interdits.',
          },
        },
      },
      cr: {
        title: "Règles de commandement",
        list: {
          items: {
            item1:
              "Votre robot doit avoir un point d’entrée évident. Il peut s’agir d’une commande d’aide ou de simples commandes de type slash.",
            item2:
              "Si votre bot comporte des messages de niveau ou des messages de bienvenue, ils doivent être facultatifs, configurables et souhaitables.",
            item3:
              "Votre robot ne doit pas envoyer de messages aux utilisateurs lorsqu’il les rejoint, sauf s’il doit envoyer au propriétaire des informations importantes ou sensibles (comme la clé de sauvetage de Wick).",
            item4:
              "Votre bot ne doit pas faire de DM aux utilisateurs lorsqu’ils rejoignent un serveur, sauf si le gestionnaire du serveur choisit d’activer cette fonction. Les bots qui ont besoin de communiquer avec les utilisateurs, comme les bots de vérification, peuvent être exemptés de cette règle au cas par cas.",
            item5:
              "Toutes les commandes d’un bot doivent vérifier les autorisations de l’utilisateur et les leurs avant d’effectuer une action. Par exemple, votre bot ne doit pas kicker les utilisateurs à moins que l’utilisateur et le bot aient la permission Kick Members. Les commandes ne peuvent pas être verrouillées par l’administrateur et les commandes NSFW doivent être verrouillées sur les canaux NSFW.",
            item6:
              "Les commandes doivent avoir un but précis (pas de commandes de remplissage). Les commandes de remplissage sont ignorées et rendent votre bot de mauvaise qualité. Un bot avec 20 commandes de purge ou des commandes qui se répètent de différentes manières ou qui ont le même but est un exemple de commandes de remplissage/commandes sans but.",
            item7:
              "Les bots doivent avoir au moins 5 à 7 commandes fonctionnelles et au moins 80 % des commandes indiquées dans l’aide fonctionnent. Si votre bot a une fonctionnalité vraiment unique, cette règle peut être reconsidérée pour votre bot.",
            item8:
              "Les commandes sensibles (telles que eval) doivent être réservées aux propriétaires des bots. RBC n’est pas responsable du code que vous exécutez ni de l’exécution arbitraire de code ou de l’escalade de privilèges sur votre robot. Cependant, nous nous soucions de savoir si cela affecte les serveurs sur lesquels se trouve votre robot.",
            item9:
              "Les bots avec des préfixes communs ( !, ?, ., ;) doivent soit avoir un préfixe personnalisable (s’ils ont des Message Content Intents), soit utiliser des mentions, soit utiliser des commandes slash. Si votre bot n’utilise pas de commandes slash, il doit avoir un moyen facile de trouver son préfixe. Les mentions et le statut du bot sont de bons endroits pour cela.",
          },
        },
      },
      us: {
        title: "Sécurité des utilisateurs",
        list: {
          items: {
            item1:
              "Les bots ne doivent pas être des DM de masse ou être malveillants de quelque manière que ce soit, comme les bots de masse, les bots d’arnaque, les bots de nitro gratuite.",
            item2:
              "Votre bot ne doit pas avoir d’avatar ou de nom d’utilisateur protégé par des droits d’auteur. Tous les éléments utilisés dans votre bot doivent vous appartenir ou avoir été autorisés par le détenteur des droits d’auteur. Votre bot doit, en résumé, respecter les droits des tiers.",
            item3:
              "L’utilisation abusive de Discord (création ou suppression massive de canaux, bots de DM/spam/nuke en masse) est strictement interdite et vous et/ou votre bot seront bannis de toutes les listes supportées par Metro Reviews.",
            item4:
              "Votre bot ne peut pas être hébergé sur le plan libre de Glitch/Repl et utiliser un logiciel pour pinger votre projet. Ceci est également contraire aux CGU de Repl/Glitch. Votre bot doit être en ligne pendant les tests",
            item5:
              "Votre robot ne doit pas récompenser les utilisateurs qui votent pour un autre robot.",
            item6:
              "Votre robot ne doit pas contenir de contenu susceptible de provoquer des crises.",
            item7:
              'Tous les bots qui fournissent des rappels de vote ou une commande "/dm" doivent fournir un moyen de les désactiver. Toutes les commandes /dm doivent indiquer qui a envoyé un DM à l’utilisateur et doivent permettre de le désactiver.',
          },
        },
      },
      ceq: {
        title: "Étiquette commune",
        list: {
          items: {
            item1:
              "Il est strictement interdit de demander à l’équipe d’approuver ou de réviser votre bot par DM ou par tout autre moyen. Votre bot sera refusé ou banni si vous le faites.",
            item2:
              "Vous ne devez pas essayer d’utiliser les listes soutenues par Metro Reviews pour distribuer des logiciels malveillants (tels que des attaques XSS, DDOS, rootkits, logiciels espions, etc.) Cela conduira à l’exclusion de votre robot de toutes les listes soutenues par Metro Reviews.",
            item3:
              "Vous pouvez toujours faire appel d’un bannissement ou soumettre à nouveau votre bot si la liste de robots à laquelle vous avez ajouté votre bot prend en charge les nouvelles soumissions. Votre liste de robots doit indiquer, avec un lien vers cette page, si elle prend en charge ou non cette...",
          },
        },
      },
    },
  },

  etiquette: {
    title1: "Liste",
    title2: "Étiquette",
    updated: "Dernière mise à jour : 14/05/2022",
    description:
      "Nous réalisons et comprenons qu’aucune Bot List n’est identique. Dans cette optique, il existe tout de même quelques directives que les listes de robots et leur équipe doivent respecter.",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Naviguez jusqu’à la section souhaitée.",
      list: {
        bp: "Meilleures pratiques",
        sr: "Règles du serveur",
        bs: "Serveurs bilingues",
        ds: "Extraction de données",
      },
    },
    sections: {
      best_practice: {
        title: "Meilleures pratiques",
        desc: "Toutes les listes de robots doivent suivre et appliquer les règles de l’UE.",
        link: "Directives de la communauté Discord",
      },
      server_rules: {
        title: "Règles du serveur",
        desc: "Toutes les listes de robots doivent avoir un point d’entrée clair et évident vers les règles de leur serveur ; ces règles doivent indiquer aux utilisateurs ce qui est autorisé ou non dans leur serveur.",
      },
      bilingual: {
        title: "Séparateurs bilingues",
        desc: "Toutes les listes de robots qui font de la publicité pour un serveur bilingue (multilingue) doivent fournir une disposition claire et évidente des canaux.",
        ex: 'Par exemple : Limiter toutes les conversations qui ne sont pas en anglais au canal "off-topic".',
      },
      scrapers: {
        title: "Extraction de données",
        desc: 'D’une manière générale, toute liste de robots qui vole ou "gratte" les données d’autres listes de robots sans le consentement direct du propriétaire de la liste ou d’un membre du personnel est mal vue par la communauté des listes de robots Discord dans son ensemble. Nous comprenons que vous essayez de simplifier et d’automatiser nos processus, mais pour cette raison, nous n’accepterons aucune liste de robots qui utilise ou possède ce type de fonctionnalité.',
      },
    },
  },

  guidelines: {
    title1: "Liste",
    title2: "Exigences",
    updated: "Dernière mise à jour : 14/05/2022",
    description:
      "Liste des exigences que tous les Bot List sont censés respecter!",
    navigation: {
      title: "Navigation",
      desc: "Naviguez jusqu’à la section souhaitée",
      new: "Nouvelles listes",
      tld: "Domaines de premier niveau",
      free: "Domaines gratuits",
      fork: "Listes en fourche",
      cross: "Support d’ajouts croisés",
    },
    buttons: {
      support: "Get Support",
      eq: "List Etiquette",
    },
    sections: {
      new: {
        title: "Nouvelles listes",
        desc: "Toutes les listes de robots doivent avoir au moins 30 jours. Nous sommes stricts sur cette règle et ne permettons aucune exception.",
      },
      tld: {
        title: "Domaines de premier niveau",
        desc: {
          text: "Toutes les listes de robots doivent être de bonne qualité et respectables.",
          link: "TLD",
        },
        list: {
          title: "Les TLD acceptés incluent, mais ne sont pas limités à:",
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
        title: "Domaines gratuits",
        desc: 'Toutes les listes de robots ne doivent pas utiliser de domaines "gratuits" ou de domaines fournis par un fournisseur d’hébergement. Ceci inclut, mais n’est pas limité à:',
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
        title: "Listes en fourche",
        desc: "Toutes les listes de robots basées sur d’autres listes de robots (comme les fourches ou les clones) doivent respecter ces exigences d’ajout:",
        list: {
          items: {
            item1:
              "Donnez les crédits à l’auteur original du code (dans le pied de page de préférence)",
            item2:
              "Fournir un hyperlien vers le code original et/ou sa licence Open-Source",
          },
        },
      },
      cross: {
        title: "Support d’ajouts croisés",
        desc: {
          text1: "Toutes les listes doivent respecter notre",
          text2: "cross_add",
          text3: "dans les conditions suivantes:",
        },
        list: {
          items: {
            item1:
              "Indiquez clairement à vos utilisateurs que votre liste de robots prend en charge l’ajout croisé de robots à d’autres listes de robots.",
            item2:
              "Prévoyez une case à cocher ou une sorte d’option permettant aux utilisateurs de décider si leur robot doit être ajouté en croix ou non.",
          },
        },
      },
    },
  },

  terms: {
    title1: "Conditions de",
    title2: "Service",
    updated: "Dernière mise à jour : 14/05/2022",
    description: "C’est ennuyeux mais tu devrais probablement lire ça.",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Naviguez jusqu’à la section souhaitée",
      terms: "Conditions",
      use: "Licence d’utilisation",
      discl: "Avis de non-responsabilité",
      limits: "Limites",
      revise: "Révisions et errata",
      third: "Liens vers des sites tiers",
      modify: "Modifications du site",
      privacy: "Votre vie privée",
      law: "Loi applicable",
    },
    sections: {
      terms: {
        title: "Conditions",
        texts:
          "En accédant à ce site Web, accessible à partir de https://metrobots.xyz, vous acceptez d’être lié par les présentes conditions d’utilisation du site Web et convenez que vous êtes responsable du respect de toute législation locale applicable. Si vous êtes en désaccord avec l’une de ces conditions, l’accès à ce site vous est interdit. Le matériel contenu dans ce site Web est protégé par le droit d’auteur et le droit des marques.",
      },
      license: {
        title: "Licence d’utilisation",
        texts:
          "L’autorisation est accordée de télécharger temporairement une copie du matériel du site Web de Metro Bots pour une visualisation transitoire personnelle et non commerciale uniquement. Il s’agit de l’octroi d’une licence, non d’un transfert de titre, et sous cette licence, vous ne pouvez pas :",
        list: {
          item_1: "modifier ou copier le matériel;",
          item_2:
            "utiliser le matériel à des fins commerciales ou pour tout affichage public;",
          item_3:
            "tenter de désosser tout logiciel contenu dans le site Web ou l’API de Metro Bots;",
          item_4:
            "supprimer tout droit d’auteur ou toute autre mention de propriété du matériel ; ou",
          item_5:
            'transférer le matériel à une autre personne ou en faire un "miroir" sur tout autre serveur.',
        },
      },
      disclaimer: {
        title: "Avis de non-responsabilité",
        texts:
          'Tous les éléments du site Web de Metro Bots sont fournis "tels quels". Metro Bots ne donne aucune garantie, qu’elle soit expresse ou implicite, et rejette donc toute autre garantie. En outre, Metro Bots ne fait aucune déclaration concernant l’exactitude ou la fiabilité de l’utilisation du matériel figurant sur son site Web ou concernant autrement ce matériel ou tout autre site lié à ce site Web.',
      },
      limitations: {
        title: "Limites",
        texts:
          "Metro Bots ou ses fournisseurs ne seront pas tenus responsables des dommages qui résulteront de l’utilisation ou de l’incapacité d’utiliser les éléments du site Web de Metro Bots, même si Metro Bots ou un représentant autorisé de ce site Web a été avisé, verbalement ou par écrit, de la possibilité de tels dommages. Certaines juridictions n’autorisent pas les limitations sur les garanties implicites ou les limitations de responsabilité pour les dommages accessoires, ces limitations peuvent ne pas s’appliquer à vous.",
      },
      revisions: {
        title: "Révisions et errata",
        texts:
          "Le matériel figurant sur le site Web de Metro Bots peut contenir des erreurs techniques, typographiques ou photographiques. Metro Bots ne peut garantir que le contenu de son site Web est exact, complet ou à jour. Metro Bots peut modifier le contenu de son site Web en tout temps sans préavis. Metro Bots ne s’engage pas à mettre à jour le matériel.",
      },
      links: {
        title: "Liens",
        texts:
          "Metro Review n’a pas examiné tous les sites liés à son site Web et n’est pas responsable du contenu de ces sites. La présence d’un lien ne signifie pas que Metro Review approuve le site en question. L’utilisation de tout site Web lié se fait aux risques de l’utilisateur.",
      },
      modifications: {
        title: "Modifications du site",
        texts:
          "Metro Reviews peut réviser les conditions d’utilisation de son site Web à tout moment sans préavis. En utilisant ce site Web, vous acceptez d’être lié par la version actuelle de ces conditions d’utilisation.",
      },
      privacy: {
        title: "Votre vie privée",
        texts: {
          base: "Veuillez lire notre",
          link: "Politique de confidentialité",
        },
      },
      laws: {
        title: "Loi applicable",
        texts:
          "Toute réclamation relative au site Web de Metro Review est régie par les lois du Canada, sans égard aux dispositions relatives aux conflits de lois.",
      },
    },
  },

  privacy: {
    title1: "Vie privée",
    title2: "Politique",
    updated: "Dernière mise à jour : 14/05/2022",
    description: "Comment nous stockons et protégeons vos données!",
    navigation: {
      consent: "Votre consentement",
      storage: "Quelles sont les données que nous stockons ?",
      usage: "Comment nous utilisons vos informations",
      logs: "Fichiers journaux",
      cookies: "Cookies et balises Web",
      ads: "Partenaires publicitaires",
      tppp: "Politiques de confidentialité des tiers",
      analytics: "Google Analytics",
      ccpa: "Droits à la vie privée de l’ACCP",
      gdpr: "Droits de protection des données GDPR",
      child: "Informations pour les enfants",
    },
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    sections: {
      base: {
        text1:
          "Chez Metro Reviews, accessible à partir de metrobots.xyz, l’une de nos principales priorités est le respect de la vie privée de nos visiteurs. Ce document sur la politique de confidentialité contient les types d’informations qui sont collectées et enregistrées par Metro Reviews et la manière dont nous les utilisons.",
        text2:
          "Si vous avez des questions supplémentaires ou si vous souhaitez obtenir plus d’informations sur notre politique de confidentialité, n’hésitez pas à nous contacter.",
        text3:
          "Cette politique de confidentialité s’applique uniquement à nos activités en ligne et est valable pour les visiteurs de notre site web en ce qui concerne les informations qu’ils ont partagées et/ou collectées dans Metro Reviews. Cette politique ne s’applique pas aux informations collectées hors ligne ou via des canaux autres que ce site web.",
      },
      consent: {
        title: "Votre consentement",
        texts:
          "En utilisant notre site web, vous consentez par la présente à notre politique de confidentialité et acceptez ses conditions.",
      },
      data_store: {
        title: "Quelles sont les données que nous stockons?",
        list: {
          items: {
            item1: "Nom d’utilisateur Discord et Avatar.",
            item2: "Rôles et informations des membres de la guilde.",
            item3: "Icône et description de votre liste de robots.",
            item4: "Informations spécifiques à votre liste de robots.",
            item5:
              "Toutes les informations de la liste de bot qui nous sont fournies.",
          },
        },
      },
      data_usage: {
        title: "Comment nous utilisons vos informations",
        description:
          "Nous utilisons les informations que nous recueillons de diverses manières, notamment pour:",
        list: {
          items: {
            item1: "Vous fournir notre API et nos services.",
            item2: "Suivre votre empreinte et améliorer nos services.",
            item3:
              "Gérer la liste blanche du personnel et la gestion des rôles.",
            item4: "Créer et fournir de nouveaux services et fonctionnalités.",
            item5:
              "Afficher les profils des listes, des utilisateurs et des robots sur notre site web.",
          },
        },
      },
      log_files: {
        title: "Fichiers journaux",
        texts:
          "Nous suivons une procédure standard d’utilisation de fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu’ils se rendent sur des sites web. Toutes les sociétés d’hébergement le font et cela fait partie de l’analyse des services d’hébergement. Les informations recueillies par les fichiers journaux comprennent les adresses de protocole Internet (IP), le type de navigateur, le fournisseur d’accès Internet (FAI), la date et l’heure, les pages de renvoi et de sortie, et éventuellement le nombre de clics. Ces données ne sont pas liées à des informations permettant d’identifier une personne. L’objectif de ces informations est d’analyser les tendances, d’administrer le site, de suivre les mouvements des utilisateurs sur le site et de recueillir des informations démographiques.",
      },
      cookies: {
        title: "Cookies et balises Web",
        texts: {
          base: 'Comme tout autre site web, Metro Reviews utilise des "cookies". Ces cookies sont utilisés pour stocker des informations, y compris les préférences des visiteurs, et les pages du site Web que le visiteur a consultées ou visitées. Ces informations sont utilisées pour optimiser l’expérience des utilisateurs en personnalisant le contenu de nos pages Web en fonction du type de navigateur des visiteurs et/ou d’autres informations.',
          intro: "Veuillez lire notre",
          link: "Avis sur les cookies",
          outro: "pour plus d’informations.",
        },
      },
      ad_partners: {
        title: "Partenaires publicitaires",
        texts: {
          base: "Vous pouvez consulter cette liste pour trouver la politique de confidentialité de chacun des partenaires publicitaires de Metro Reviews.",
          sec: "Les serveurs publicitaires ou réseaux publicitaires tiers utilisent des technologies telles que les cookies, le JavaScript ou les balises Web qui sont utilisées dans leurs publicités et liens respectifs qui apparaissent sur Metro Reviews, et qui sont envoyées directement au navigateur des utilisateurs. Ils reçoivent automatiquement votre adresse IP lorsque cela se produit. Ces technologies sont utilisées pour mesurer l’efficacité de leurs campagnes publicitaires et/ou pour personnaliser le contenu publicitaire que vous voyez sur les sites web que vous visitez.",
          out: "Notez que Metro Reviews n’a aucun accès ou contrôle sur les cookies utilisés par les annonceurs tiers.",
        },
      },
      third_party: {
        title: "Politiques de confidentialité des tiers",
        texts: {
          base: "La politique de confidentialité de Metro ne s’applique pas aux autres annonceurs ou sites Web. Nous vous conseillons donc de consulter les politiques de confidentialité respectives de ces serveurs publicitaires tiers pour obtenir des informations plus détaillées. Ces politiques peuvent comprendre leurs pratiques et des instructions sur la façon de refuser certaines options.",
          out: "Vous pouvez choisir de désactiver les cookies par le biais des options de votre navigateur individuel. Pour connaître des informations plus détaillées sur la gestion des cookies avec des navigateurs web spécifiques, vous pouvez consulter les sites web respectifs de ces navigateurs.",
        },
      },
      analytics: {
        title: "Google Analytics",
        texts: {
          base: "Nous utilisons Google Analytics comme un service de suivi tiers, mais nous ne l'utilisons pas pour vous suivre individuellement ou pour collecter vos données personnelles. Nous utilisons Google Analytics pour recueillir des informations sur les performances de notre site Web et sur la façon dont nos utilisateurs, en général, naviguent et utilisent Metro Reviews. Cela nous aide à évaluer l'utilisation de Metro Reviews par nos utilisateurs, à compiler des rapports statistiques sur l'activité et à améliorer notre contenu et les performances de notre site Web.",
          second:
            "Google Analytics recueille certaines informations au fil du temps, telles que votre adresse IP, votre type de navigateur, votre fournisseur d'accès Internet, les pages de renvoi et de sortie, l'horodatage et d'autres données similaires concernant votre utilisation de Metro Reviews. Nous ne lions pas ces informations à vos données personnelles, comme votre nom d'utilisateur.",
          third: {
            text: "Metro Reviews n'utilisera pas, et n'autorisera pas un tiers à utiliser l'outil Google Analytics pour suivre nos utilisateurs individuellement, recueillir des renseignements personnels autres que l'adresse IP, ou établir une corrélation entre votre adresse IP et votre identité. Google fournit de plus amples informations sur ses propres pratiques en matière de protection de la vie privée et sur les éléments suivants",
            link: "propose un module complémentaire de navigateur permettant de refuser le suivi par Google Analytics.",
          },
          out: "Certaines pages de notre site peuvent définir d'autres cookies tiers. Par exemple, nous pouvons intégrer du contenu, comme des vidéos, provenant d'un autre site qui définit un cookie. Bien que nous essayions de minimiser ces cookies tiers, nous ne pouvons pas toujours contrôler les cookies que ce contenu tiers définit.",
        },
      },
      ccpa: {
        title:
          "Droits à la vie privée de l’ACCP (Ne vendez pas mes informations personnelles)",
        desc: "En vertu de la CCPA, entre autres droits, les consommateurs californiens ont le droit de:",
        list: {
          items: {
            item1:
              "Demander à une entreprise qui collecte les données personnelles d’un consommateur de divulguer les catégories et les éléments spécifiques des données personnelles qu’elle a collectées sur les consommateurs.",
            item2:
              "Demander à une entreprise de supprimer toutes les données personnelles qu’elle a recueillies sur le consommateur.",
            item3:
              "Demandez qu’une entreprise qui vend les données personnelles d’un consommateur ne vende pas les données personnelles de ce dernier.",
          },
        },
        out: "Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l’un de ces droits, veuillez",
        link: "Ouvrir un numéro",
      },
      gdpr: {
        title: "Droits de protection des données GDPR",
        desc: "Nous souhaitons nous assurer que vous êtes pleinement conscient de tous vos droits en matière de protection des données. Chaque utilisateur a les droits suivants:",
        list: {
          items: {
            item1:
              "Le droit d’accès - Vous avez le droit de demander des copies de vos données personnelles. Il se peut toutefois que nous vous facturions une petite somme pour ce service.",
            item2:
              "Le droit de rectification - Vous avez le droit de nous demander de corriger toute information que vous jugez inexacte. Vous avez également le droit de nous demander de compléter les informations qui, selon vous, sont incomplètes.",
            item3:
              "Le droit à l’effacement - Vous avez le droit de nous demander d’effacer vos données personnelles, sous certaines conditions.",
            item4:
              "Le droit de restreindre le traitement - Vous avez le droit de nous demander de restreindre le traitement de vos données personnelles, sous certaines conditions.",
            item5:
              "Le droit de s’opposer au traitement - Vous avez le droit de vous opposer à notre traitement de vos données personnelles, sous certaines conditions.",
            item6:
              "Le droit à la portabilité des données - Vous avez le droit de nous demander de transférer les données que nous avons collectées à une autre organisation, ou directement à vous, sous certaines conditions.",
          },
        },
        out: "Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l’un de ces droits, veuillez",
        link: "Ouvrir un numéro",
      },
      children: {
        title: "Informations pour les enfants",
        texts: {
          desc1:
            "Une autre partie de notre priorité est d’ajouter la protection des enfants lorsqu’ils utilisent l’internet. Nous encourageons les parents et les tuteurs à observer, participer et/ou surveiller et guider leur activité en ligne.",
          desc2:
            "Metro ne recueille pas sciemment de renseignements personnels identifiables auprès d’enfants âgés de moins de 13 ans. Si vous pensez que votre enfant a fourni ce genre de renseignements sur notre site Web, nous vous encourageons vivement à nous contacter immédiatement et nous ferons tout notre possible pour retirer rapidement ces renseignements de nos dossiers.",
        },
      },
    },
  },

  cookies: {
    title1: "Cookie",
    title2: "Politique",
    updated: "Dernière mise à jour : 14/05/2022",
    description:
      "Informations sur la façon dont nous stockons et utilisons les cookies.",
    buttons: {
      support: "Get Support",
      home: "Go Home",
    },
    navigation: {
      title: "Navigation",
      desc: "Naviguez jusqu’à la section souhaitée",
    },
    texts: {
      desc1:
        "Un cookie est un petit morceau de texte que notre serveur web stocke sur votre ordinateur ou votre appareil mobile, et que votre navigateur nous envoie lorsque vous revenez sur notre site. Les cookies ne vous identifient pas nécessairement si vous ne faites que visiter Metro Reviews ; cependant, un cookie peut stocker un identifiant unique pour chaque utilisateur connecté. Les cookies que Metro Reviews définit sont essentiels pour le fonctionnement du site web, ou sont utilisés pour la performance ou la fonctionnalité. En utilisant notre site web, vous acceptez que nous puissions placer ces types de cookies sur votre ordinateur ou votre appareil.",
      desc2:
        "Si vous désactivez la capacité de votre navigateur ou de votre appareil à accepter les cookies, vous pourrez toujours naviguer sur le site web, mais vous ne pourrez pas vous connecter à votre compte Metro Reviews. D’autres fonctionnalités peuvent également être interrompues.",
    },
    sections: {
      storage: {
        title: "Stockage des cookies",
        desc: "Lorsque vous utilisez Metro Reviews, nous stockons divers cookies, notamment:",
        list: {
          items: {
            item1:
              "$Metro_cookies - Votre approbation du consentement aux cookies.",
            item2:
              "$Metro_token - Votre jeton de session (lors de la connexion)",
            item3:
              "$Metro_oauth - Votre jeton d’authentification (lors de la connexion)",
          },
        },
      },
      usage: {
        title: "Utilisation des cookies",
        desc: "Metro Reviews utilise des cookies pour vous permettre de rendre les interactions avec notre service faciles et significatives. Nous utilisons les cookies (et des technologies similaires, comme HTML5 et localStorage) pour vous permettre de rester connecté, de mémoriser vos préférences et de fournir les informations et statistiques nécessaires au développement futur de Metro Reviews.",
      },
      tracking: {
        title: "Suivi des cookies",
        texts: {
          main: {
            link1: '"Ne pas suivre"',
            desc1:
              "est une préférence de confidentialité que vous pouvez définir dans votre navigateur si vous ne souhaitez pas que les services en ligne collectent et partagent certains types d’informations sur votre activité en ligne à partir de services de suivi tiers. Nous ne suivons pas votre activité de navigation en ligne sur d’autres services en ligne au fil du temps et nous n’autorisons pas les services tiers à suivre votre activité sur notre site au-delà de notre suivi de base Google Analytics, que vous pouvez désactiver.",
            link2: "ici",
            desc2:
              "Étant donné que nous ne partageons pas ce type de données avec des services tiers et que nous n’autorisons pas la collecte de ce type de données par des tiers sur Metro Reviews pour aucun de nos utilisateurs, et que nous ne suivons pas nous-mêmes nos utilisateurs sur des sites Web tiers, nous n’avons pas besoin de répondre différemment à un navigateur individuel.",
            link3: "Ne pas suivre",
            out: "réglage",
          },
          secondary: {
            desc: "Si vous souhaitez activer les paramètres de confidentialité et de refus de suivi de votre navigateur, le site web Do Not Track propose des instructions spécifiques à chaque navigateur.",
          },
        },
      },
    },
  },
};
