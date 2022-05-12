module.exports = {
    overview: require("../locales.config.js")["fr"],
    title: '<span class="text-amber-500 font-bold">Métro</span> Critiques',
    navbar: {
        home: 'Accueil',
        team: 'Équipe',
        lists: 'Listes',
        partners: 'Partenaires'
    },
    footer: {
        rights: 'Tous droits réservés.',
        description: 'Nous simplifions le processus d\'approbation et de refus de la liste des robots, ce qui permet à votre équipe de consacrer plus de temps aux tâches importantes telles que la modération et l\'assistance des serveurs.',
        menus: {
            info: {
                title: 'Info',
                items: {
                    team: 'Équipe',
                    lists: 'Listes',
                    faq: 'FAQ\'s'
                }
            },
            support: {
                title: 'Soutien',
                items: {
                    partners: 'Partenaires',
                    team: 'Équipe'
                }
            },
            legal: {
                title: 'Juridique',
                items: {
                    tos: 'Conditions d\'utilisation',
                    privacy: 'Politique de confidentialité'
                }
            },
            misc: {
                title: 'Misc',
                items: {
                    tos: 'Conditions d\'utilisation',
                    privacy: 'Politique de confidentialité'
                }
            },
        },
        footerCredits: 'Fait avec ❤️ par Toxic Dev#5936 & Rootspring#6701'
    },
    index: {
        title: 'Metro Reviews',
        description: 'La solution centralisée pour la gestion des listes de robots Discord.',
        buttons: {
            support: 'Serveur de support',
            apply: 'Postulez maintenant'
        },
        features: {
            title: 'Pourquoi choisir <span class="text-amber-500 font-bold">Métro?</span> Critiques',
            description: 'Nous simplifions le processus d\'approbation et de refus de la liste des robots, ce qui permet à votre équipe de consacrer plus de temps aux tâches importantes telles que la modération et l\'assistance des serveurs.',
            buttonText: 'Add to Discord',
            items: [
                 { icon: 'fal fa-star', title: 'Managed Approvals', description: 'We simplify and manage your Approval Process making it easier for your Staff Team to do what they do best. While providing the short queue time we all strive for.' },
                 { icon: 'fal fa-star', title: 'Managed Denials', description: 'Bot Denials are a tricky subject and in most cases it results in a dispute from the Bot Owner. We automate the Denial Process for you and skip the man in the middle.'},
                 { icon: 'fal fa-star', title: 'Managed Whitelist', description: 'With the Metro Reviews Integration all necessary commands and features are limited to members of your Bot List Staff Team and monitored by our Built in Whitelist.' },
                 { icon: 'fal fa-star', title: 'Managed Claims', description: 'Claiming Bots has never been easier. We provide a variety of commands and options to make keep your staff team encouraged and happy. Including a interactive admin panel' }
            ]
        },
        list_stats: {
            chosen: 'Supported by <span class="text-amber-500">{list_count}</span> amazing Bot Lists',
            lists: {
                name: '{list_name}',
                domain: '{list_domain}',
                states: {
                    pending: '📌 Pending Support',
                    supported: '😀 Supported List',
                    defunction: '☠️ Defunct',
                    blacklisted: '🧐 Blacklisted',
                    unconfirmed: '👀 Unconfirmed',
                    err_failed: 'Failed to fetch state.'
                }
            }
        }
    },
    team: {
        title: 'Our Community Members',
        description: 'All the Bot List Community Members and Owners that support us and helped make this project possible!',
        linkcordLang: 'en',
        noWidget: 'No Widget',
        roles: {
            owner: 'List Owner',
            sudo: 'Metro Admin',
            review: 'Bot Reviewer'
        }
    },
};
