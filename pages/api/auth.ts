import fetch from "node-fetch";
import { serialize } from "cookie";
import { config } from "../../utils/authConfig";
import { sign } from "jsonwebtoken";
import { DiscordUser } from "@/root/utils/types";
import { NextApiRequest, NextApiResponse } from "next";

const scope = ["identify"].join(" ");
const REDIRECT_URI = `${config.appUri}/api/auth`;


const OAUTH_QS = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope
}).toString();

const OAUTH_URI = `https://discord.com/api/oauth2/authorize?${OAUTH_QS}`;

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== "GET") return res.redirect('/500?error=INVALID_METHOD');

    const { code = null, error = null } = req.query;

    if (error) {
        return res.redirect(`/500?error=${req.query.error}`);
    }

    if (!code || typeof code !== "string") return res.redirect(OAUTH_URI);

    const body = new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
        code, scope
    }).toString();

    //@ts-ignore
    const { access_token = null, token_type = "Bearer" } = await fetch("https://discord.com/api/oauth2/token", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
        body,
    }).then((res) => res.json());

    if (!access_token || typeof access_token !== "string") {
        return res.redirect(OAUTH_URI);
    }

    //@ts-ignore
    const me: DiscordUser | { unauthorized: true } = await fetch('https://discord.com/api/users/@me', {
        headers: { Authorization: `${token_type} ${access_token}`},
    }).then((res) => res.json());

    if (!("id" in me)) {
        return res.redirect(OAUTH_URI);
    }

    const token = sign(me, config.jwtSecret, { expiresIn: "24h"});

    res.setHeader("Set-Cookie", serialize(config.cookieName, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "lax",
        path: '/'
    }))

    res.redirect("/")
}
