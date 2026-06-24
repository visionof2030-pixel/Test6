const express = require("express");
const app = express();

const HOST = "http://amir11.bounceme.net:8080";
const USER = "YZjwcwnLjh";
const PASS = "QlXrgJTnED";

app.get("/*", async (req, res) => {
  const url = `${HOST}${req.originalUrl}`;

  const finalUrl = url.includes("?")
    ? `${url}&username=${USER}&password=${PASS}`
    : `${url}?username=${USER}&password=${PASS}`;

  try {
    const response = await fetch(finalUrl);
    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    res.status(500).send("error");
  }
});

app.listen(3000, () => console.log("running"));