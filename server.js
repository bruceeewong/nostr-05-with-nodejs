"use strict";

const express = require("express");
require("dotenv").config();

function env(key, fallback) {
  const val = process.env[key];
  return typeof val !== "undefined" ? val : fallback;
}

function handleNostr05(req, res) {
  const { name } = req.query;
  if (typeof name !== "string" && !Array.isArray(name)) {
    res
      .status(400)
      .send("bad request: name param should be string or string array");
    return;
  }

  const queryNames = Array.isArray(name) ? name : [name];
  const validNames = queryNames.filter((n) => env(n));
  if (validNames.length === 0) {
    res.status(403).send("no authorized user");
    return;
  }
  const names = {};
  validNames.forEach((n) => {
    names[n] = env(n);
  });
  res.json({
    names,
  });
}

const app = express();
app.get("*", (req, res) => {
  const { path } = req;
  if (path == "/.well-known/nostr.json") {
    return handleNostr05(req, res);
  }
  res.redirect(
    env("HOME_PAGE", "https://github.com/nostr-protocol/nips/blob/master/05.md")
  );
});

const HOST = env("HOST", "0.0.0.0");
const PORT = env("PORT", 8080);
app.listen(PORT, env("HOST"), () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
