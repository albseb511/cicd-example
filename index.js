const app = require("express")();

app.get("/", (req, res) => {
  value = 100;
  res.send("Success!");
});

app.listen(8000, () => {
  console.log("app is live on 8000");
});
