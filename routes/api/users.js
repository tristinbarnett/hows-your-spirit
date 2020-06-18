const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/auth")
  .post(usersController.findUserByEmail)
  .post(usersController.create);



module.exports = router;
