const db = require("../models");

module.exports = {
    create: function ({body}, res) {
        db.Entries
          .create(body.entry)
          .then(_id => db.Users.findOneAndUpdate({}, { $push: { entries : _id } }, { new: true }))
          .then(updatedUser => {
            console.log(updatedUser);
            res.json(updatedUser);
          })
          .catch(err => {
            res.json(err);
          });
      }
}