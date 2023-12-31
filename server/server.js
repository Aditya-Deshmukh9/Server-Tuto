const express = require("express");
const app = express();
const router = require("./routes/auth-route");

app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at port: http://localhost:${PORT}/api/auth/`);
});
