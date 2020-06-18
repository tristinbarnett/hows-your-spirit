const db = require("../models");

module.exports = {
  findUserByEmail: function (req, res) {
    db.Users
      .find({ email: req.query.email })
      .then(response => {
        console.log("req" +req.query.password);
        console.log("res" + response[0].password);
        if (req.query.password === response[0].password) {
          res.json(response)
        } else {
          res.status(422).json(err)
        }
      })
      .catch(err => res.status(422).json(err));
  },
  // findAll: function(req, res) {
  //   db.Users
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  create: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Users
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Users
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
