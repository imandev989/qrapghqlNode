const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");

const app = express();

app.use("/graphql", createHandler({}));

app.get("/", (req, res) => {
  return res.json({ messgae: "Get / Message" });
});

app.listen(4005, () => {
  console.log(`Server is running on port 4005`);
});
