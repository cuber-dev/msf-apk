const app = require("express")();
const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "server is running!",
  });
});
app.get("/apk", (req, res) => {
  const apkFile = path.resolve(__dirname + "/apks/andorid-test-1.apk");
  res.sendFile(apkFile);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
