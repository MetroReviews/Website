import PrefontaineClient from "./source";

export default async function applyHook({ user, id, name, dom, link }) {
  let toxic = "510065483693817867";
  let root = "563808552288780322";

  const Webhook = new PrefontaineClient({
    id: process.env.APPLY_HOOK_ID,
    token: process.env.APPLY_HOOK_KEY,
  });

  Webhook.execute({
    content: `<@!${toxic}> | <@!${root}>`,
    username: "List Submissions",
    avatar_url: "https://metrobots.xyz/img/logo.webp",
    embeds: [
      {
        title: "New List Submission",
        description: `${user} has submitted a new Bot List.`,
        thumbnail: { url: "https://metrobots.xyz/img/logo.webp" },
        color: 311898,
        fields: [
          {
            name: "Bot List Name",
            value: `${name}`,
            inline: true,
          },
          {
            name: "Bot List Domain",
            value: `${dom}`,
            inline: true,
          },
          {
            name: "View Application",
            value: `${link}`,
            inline: true,
          },
        ],
        footer: {
          text: "© 2022 Metro Reviews",
          icon_url: "https://metrobots.xyz/img/logo.webp",
        },
      },
    ],
  });
}
