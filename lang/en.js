module.exports = {
    overview: require("../locales.config.js")["en"],
    title: '<span class="text-amber-500 font-bold">Metro</span> Reviews',
    navbar: {
        home: 'Home',
        team: 'Team',
        lists: 'Lists',
        partners: 'Partners'
    },
    footer: {
        rights: 'All rights reserved.',
        description: 'We simplify the Bot List Approval and Denial Process giving your staff team more time for the important things such as server moderation and support!',
        menus: {
            info: {
                title: 'Info',
                items: {
                    team: 'Team',
                    lists: 'Lists',
                    faq: 'FAQ\'s'
                }
            },
            support: {
                title: 'Support',
                items: {
                    partners: 'Partners',
                    team: 'Team'
                }
            },
            legal: {
                title: 'Legal',
                items: {
                    tos: 'Terms of Service',
                    privacy: 'Privacy Policy'
                }
            },
            misc: {
                title: 'Misc',
                items: {
                    tos: 'Terms of Service',
                    privacy: 'Privacy Policy'
                }
            },
        },
        footerCredits: 'Made with ❤️ by Toxic Dev#5936 & Rootspring#6701'
    },
    index: {
        title: 'Metro Reviews',
        description: 'The centralized solution for Discord Bot List management',
        buttons: {
            dashboard: 'Dashboard',
            support: 'Support Server',
            with_discord: 'Login with Discord'
        },
        features: {
            title: 'Why choose <span class="text-amber-500 font-bold">Metro?</span>',
            description: 'We simplify the Bot List Approval and Denial Process giving your staff team more time for the important things such as server moderation and support!',
            buttonText: 'Add to Discord',
            items: [
                 { icon: 'fas fa-check', title: 'Managed Approvals', description: 'We simplify and manage your Approval Process making it easier for your Staff Team to do what they do best. While providing the short queue time we all strive for.' },
                 { icon: 'fas fa-x', title: 'Managed Denials', description: 'Bot Denials are a tricky subject and in most cases it results in a dispute from the Bot Owner. We automate the Denial Process for you and skip the man in the middle.'},
                 { icon: 'fas fa-user-cog', title: 'Managed Whitelist', description: 'With the Metro Reviews Integration all necessary commands and features are limited to members of your Bot List Staff Team and monitored by our Built in Whitelist.' },
                 { icon: 'fas fa-book', title: 'Managed Claims', description: 'Claiming Bots has never been easier. We provide a variety of commands and options to make keep your staff team encouraged and happy. Including a interactive admin panel' }
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
        title: 'Community Members',
        description: 'These are all the amazing community members that help make this project possible or work for the bot lists that support us.',
        linkcordLang: 'en',
        noWidget: 'No Widget',
        roles: {
            owner: 'List Owner',
            sudo: 'Metro Admin',
            review: 'Bot Reviewer'
        }
    },
};
