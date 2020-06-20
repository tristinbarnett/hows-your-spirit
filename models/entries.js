const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    date: { type: String, required: true },
    emotions: { type: Array, default: [] },
    factors: { type: Array, default: [] }
});

const Entries = mongoose.model("Entries", entriesSchema);

module.exports = Entries;