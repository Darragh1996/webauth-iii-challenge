const router = require("express").Router();

const authRouter = require("../routers/auth-router");
const userRouter = require("../routers/users-router");

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.json("SERVER IS UP AND RUNNING");
});

module.exports = router;
