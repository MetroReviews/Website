import applyHook from "@/root/lib/hooks/apply";
import callDBClient from "@/root/lib/mongo/dbClient";
import { ListApps } from "@/root/lib/mongo/schemas/appSchema";

export default async function handler(req, res) {
  const { method } = req;

  await callDBClient();

  switch (method) {
    case "POST":
      try {
        /**
         * THIS NEEDS TO BE IMPROVED IN THE FUTURE
         */
        const approvedLists = [
          "Test List",
          "Infinity Bot List",
          "Fates List",
          "Topic Bot List",
          "Select List",
          "Tropical Bot List ",
        ];

        let auth = req.headers.authorization;
        let listApp = await ListApps.findOne({ listID: req.body.listID });
        const listOwner = await ListApps.findOne({
          listOwner: req.body.listOwner,
          appStatus: "pending",
        });

        if (!auth || auth !== `${process.env.API_AUTH}`) {
          return res.status(500).send(
            JSON.stringify({
              message:
                "Authorization Token is missing or invalid. If this error is in a Prod Env please contact our dev team.",
            })
          );
        } else if (listApp)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "This bot list has already been submitted. If it was denied and you would like to resubmit please ask for the data to be deleted here: https://metrobots.xyz/discord.",
            })
          );
        else if (listOwner)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "You already have a bot list that is pending approval.",
            })
          );
        else if (req.body.listOwner !== req.body.userID)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "You cannot submit a bot list that you do not own.",
            })
          );
        else if (!req.body.listID)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Bot List ID is a Required Field. And should be a valid Server ID",
            })
          );
        else if (isNaN(req.body.listID))
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Bot List ID should be a valid integer representing a Server ID (ex: 969274747093397555)",
            })
          );
        else if (!req.body.listName)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "Bot List Name is a Required Field (Ex: Metro Reviews)",
            })
          );
        else if (req.body.listName === "Metro Reviews")
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "Nice try noob lol",
            })
          );
        else if (!req.body.listDesc)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "No bot list description provided.",
            })
          );
        else if (req.body.listDesc.length < 500)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Bot List Description should be more than 500 characters.",
            })
          );
        else if (!req.body.listLogo)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "No bot list logo has been provided.",
            })
          );
        else if (!req.body.listLogo.includes("https://"))
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "Bot List Logo should be a valid image link.",
            })
          );
        else if (!req.body.listDom)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "No list domain has been provided.",
            })
          );
        else if (!req.body.listDom.includes("https://"))
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                'Bot list domain should be a valid link starting with "https://"',
            })
          );
        else if (!req.body.revSystem)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "",
            })
          );
        else if (req.body.revSystem.length < 500)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Review System Description should be more than 500 characters.",
            })
          );
        else if (!req.body.listAge)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Please provide some info about how old your bot list is. (ex: 12 months old)",
            })
          );
        else if (!req.body.listLang)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Please provide some information about what your bot list is made with.",
            })
          );
        else if (!req.body.forkedList)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Please provide some information about if your bot list is a fork or not.",
            })
          );
        else if (!req.body.apiChanges)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Please tell us if you are prepared to make changes to your bot list.",
            })
          );
        else if (approvedLists.includes(req.body.listName))
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "A bot list with that name is already registered in our system.",
            })
          );
        else if (!req.body.listOwner)
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message: "Please provide a valid User ID for the Bot List Owner.",
            })
          );
        else if (isNaN(req.body.listOwner))
          return res.status(500).send(
            JSON.stringify({
              success: false,
              message:
                "Bot List Owner should be a valid integer representing a User ID (ex: 510065483693817867)",
            })
          );
        else if (!listApp) {
          listApp = await ListApps.create({
            listID: req.body.listID,
            listName: req.body.listName,
            listDom: req.body.listDom,
            listLogo: req.body.listLogo,
            listDesc: req.body.listDesc,
            listOwner: req.body.listOwner,
            revSystem: req.body.revSystem,
            listAge: req.body.listAge,
            listLang: req.body.listLang,
            forkedList: req.body.forkedList,
            apiChanges: req.body.apiChanges,
            appStatus: "pending",
          }).catch((e) => {
            return res.status(500).send(
              JSON.stringify({
                success: false,
                message: `${e.stack}`,
              })
            );
          });

          listApp.listID = req.body.listID;
          listApp.listName = req.body.listName;
          listApp.listDom = req.body.listDom;
          listApp.listLogo = req.body.listLogo;
          listApp.listDesc = req.body.listDesc;
          listApp.listOwner = req.body.listOwner;
          listApp.revSystem = req.body.revSystem;
          listApp.listAge = req.body.listAge;
          listApp.listLang = req.body.listLang;
          listApp.forkedList = req.body.forkedList;
          listApp.apiChanges = req.body.apiChanges;
          listApp.appStatus = "pending";

          await listApp.save();

          await applyHook({
            user: req.body.userName,
            id: req.body.listID,
            name: req.body.listName,
            dom: req.body.listDom,
            link: `https://metrobots.xyz/apps/${req.body.listID}`,
          });

          return res.status(200).send(
            JSON.stringify({
              success: true,
              message: "Submitted your application.",
            })
          );
        }
      } catch (err) {
        return res.status(500).send(
          JSON.stringify({
            success: false,
            message: `${err.message}`,
          })
        );
      }
    default:
      res.status(500).send(
        JSON.stringify({
          success: false,
          message: "Malformed Request",
        })
      );
      break;
  }
}
