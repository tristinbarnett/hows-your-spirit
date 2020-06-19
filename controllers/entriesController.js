const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Entries
          .create(req.body)
          //.then(({ _id }) => db.Users.findOneAndUpdate({_id}, { $push: { entries: _id } }, { new: true }))
          .then(entries => {
            console.log(entries);
          })
          .catch(err => {
            res.json(err);
          });
      }
}