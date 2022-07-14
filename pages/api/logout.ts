import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  function logoutRoute(req, res) {
    req.session.destroy();
    res.redirect("/");
  },
  {
    cookieName: "$Metro_auth",
    password: process.env.LOGOUT_PASS,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
