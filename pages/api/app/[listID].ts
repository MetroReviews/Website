import applyHook from "@/root/lib/hooks/apply";
import callDBClient from "@/root/lib/mongo/dbClient";
import { ListApps } from "@/root/lib/mongo/schemas/appSchema";

export default async function handler(req, res) {
  const { method } = req;

  await callDBClient();

  switch (method) {
    case "GET":
      try {
        let list = await ListApps.findOne({ listID: req.query.listID });

        if (!list) res.redirect("/404?reason=APP_NOT_FOUND");
        else {
          return res.status(200).send(
            JSON.stringify({
              listID: list.listID,
              listName: list.listName,
              listDom: list.listDom,
              listLogo: list.listLogo,
              listDesc: list.listDesc,
              listOwner: list.listOwner,
              revSystem: list.revSystem,
              listAge: list.listAge,
              listLang: list.listLang,
              forkedList: list.forkedList,
              apiChanges: list.apiChanges,
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
