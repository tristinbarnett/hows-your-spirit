const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Entries
          .create(req.body.entry)
          .then(({ user }) => db.Users.findOneAndUpdate({user}, { $push: { entries: _id } }, { new: true }))
          .then(entries => {
            console.log(entries);
          })
          .catch(err => {
            res.json(err);
          });
      }
}