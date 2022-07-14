import Axios, { AxiosInstance, AxiosPromise } from "axios";
import * as Webhook from "./Types/Webhook";

export default class PrefontaineClient {
  protected client: AxiosInstance;

  /**
   * DISCORD WEBHOOK CONSTRUCTOR
   */
  public constructor({ id, token }) {
    this.client = Axios.create({
      baseURL: `https://discord.com/api/webhooks/${id}/${token}`,
    });
  }

  /**
   * EXECUTE THE CURRENT WEBHOOK
   */
  public execute(options: Webhook.input.POST) {
    return this.client.request({
      method: "POST",
      data: options,
    });
  }

  /**
   * MODIFY THE CURRENT WEBHOOK
   */
  public modify(options: Webhook.input.PATCH) {
    return this.client.request({
      method: "PATCH",
      data: options,
    });
  }

  /**
   * GET THE CURRENT WEBHOOK
   */
  public get(): AxiosPromise<Webhook.response.GET> {
    return this.client.request({
      method: "GET",
    });
  }

  /**
   * CHECK IF THE WEBHOOK IS VALID OR NOT
   */
  public isValid(): Promise<boolean> {
    return this.get()
      .then(() => true)
      .catch(() => false);
  }
}
