import Webhook from "./index";

const contentRequest: Webhook.input.POST = {
  content: "Some Message",
};

const embedRequest: Webhook.input.POST = {
  embeds: [
    {
      title: "Heyyyyo",
      description: "Welcome to our Webhook Lib",
    },
    {
      fields: [
        {
          name: "Get Support",
          value: "https://infinitybots.gg/discord",
        },
      ],
    },
  ],
};

const fileRequest: Webhook.input.POST = {
  file: "some plaintext file",
};
