const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  entries: [{ type: Schema.Types.ObjectId, ref: 'Entries' }]
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;