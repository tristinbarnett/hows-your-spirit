const db = require("../models");

module.exports = {
  create: function ({ body }, res) {
    db.Entries
      .create(body.entry)
      .then(_id => db.Users.findOneAndUpdate({}, { $push: { entries: _id } }, { new: true }))
      .then(updatedUser => {
        console.log(updatedUser);
        res.json(updatedUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  getUserEntries: function (req, res) {
    db.Users
      .findOne({ _id: req.params.id })
      .populate('entries') 
      .exec(function (err, entries) {
        if (err) return handleError(err);
        console.log(entries);
        res.json(entries);
      })
      .catch(err => {
        res.json(err);
      });
  }
}

