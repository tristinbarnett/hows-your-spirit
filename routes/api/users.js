const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/auth")
  .get(usersController.findUserByEmail)
  .post(usersController.create);



module.exports = router;
