const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
const { history , vehicle } = require("./vehicles.model.js")(mongoose);

db.history=history;
db.vehicle=vehicle;

module.exports = db;