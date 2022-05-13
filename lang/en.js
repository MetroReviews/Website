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
    terms: {
        title1: 'Terms of',
        title2: 'Service',
        buttons: {
            support: 'Get Support',
            home: 'Go Home'
        },
        sections: {
            terms: {
                title: 'Terms',
                texts: 'By accessing this Website, accessible from https://metrobots.xyz, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.' 
            },
            license: {
                title: 'Use License',
                texts: 'Permission is granted to temporarily download one copy of the materials on Metro Bots\'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
                list: {
                    item_1: 'modify or copy the materials;',
                    item_2: 'use the materials for any commercial purpose or for any public display;',
                    item_3: 'attempt to reverse engineer any software contained on Metro Bots\'s Website or API;',
                    item_4: 'remove any copyright or other proprietary notations from the materials; or',
                    item_5: 'transferring the materials to another person or "mirror" the materials on any other server.'
                }
            },
            disclaimer: {
                title: 'Disclaimer',
                texts: 'All the materials on Metro Bots’s Website are provided "as is". Metro Bots makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Metro Bots does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.',
            },
            limitations: {
                title: 'Limitations',
                texts: 'Metro Bots or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Metro Bots’s Website, even if Metro Bots or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.'
            },
            revisions: {
                title: 'Revisions and Errata',
                texts: 'The materials appearing on Metro Bots’s Website may include technical, typographical, or photographic errors. Metro Bots will not promise that any of the materials in this Website are accurate, complete, or current. Metro Bots may change the materials contained on its Website at any time without notice. Metro Bots does not make any commitment to update the materials.'
            }
        }
    }
};
