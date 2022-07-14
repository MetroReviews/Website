import mongoose, { Schema, Document, model } from "mongoose";

interface ListAppProps extends Document {
  listID: string;
  listName: string;
  listDom: string;
  listLogo: string;
  listDesc: string;
  listOwner: string;
  revSystem: string;
  listAge: string;
  listLang: string;
  forkedList: string;
  apiChanges: string;
  appStatus: string;
}

const ListAppSchema: Schema = new Schema<ListAppProps>({
  listID: {
    type: String,
    required: true,
  },
  listName: {
    type: String,
    required: true,
  },
  listDom: {
    type: String,
    required: true,
  },
  listLogo: {
    type: String,
    required: true,
  },
  listDesc: {
    type: String,
    required: true,
  },
  listOwner: {
    type: String,
    required: true,
  },
  revSystem: {
    type: String,
    required: true,
  },
  listAge: {
    type: String,
    required: true,
  },
  listLang: {
    type: String,
    required: true,
  },
  forkedList: {
    type: String,
    required: true,
  },
  apiChanges: {
    type: String,
    required: true,
  },
  appStatus: {
    type: String,
    default: "pending",
  },
});

const ListApps = mongoose.models.listapps || model("listapps", ListAppSchema);

export { ListApps, ListAppSchema };
