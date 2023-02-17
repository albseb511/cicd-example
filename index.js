const app = require("express")();

app.get("/", (req, res) => {
  res.send("Success!");
});

app.listen(8000, () => {
  console.log("app is live on 8000");
});
