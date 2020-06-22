const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const entriesController = require("../../controllers/entriesController");

router.route("/auth")
  .get(usersController.findUserByEmail)
  .post(usersController.create);

router.route("/entries")
  .post(entriesController.create)
  .get(entriesController.getUserEntries);

module.exports = router;
