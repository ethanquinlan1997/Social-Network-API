
const router = require("express").Router();
const userRoutes = require("./usersRoute");
const thoughtsRoutes = require("./thoughtsRoute");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;