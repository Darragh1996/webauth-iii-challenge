const router = require("express").Router();

const authRouter = require("../routers/auth-router");

router.use("/auth", authRouter);

router.get("/", (req, res) => {
  res.json("SERVER IS UP AND RUNNING");
});

module.exports = router;
