const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coronaSchema = new Schema({
  datum: {
    type: Date,
    required: true,
    unique: true
  },
  testy: { type: Number, required: true },
  pozitivni: { type: Number, required: true },
  vylieceni: { type: Number, required: true },
  umrtia: { type: Number, required: true }
});

module.exports = mongoose.model("Corona", coronaSchema);
