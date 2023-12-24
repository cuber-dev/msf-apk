const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "server is running!",
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
