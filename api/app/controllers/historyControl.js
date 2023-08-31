const db = require("../models");

const history = db.history;

// Find a single Tutorial with an id
exports.history = (req, res) => {
    history.find({})
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};
// sample

// Post Add history

// Post add vehicle
exports.addHistory = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    var item = new history(req.body.item);
    // Save Tutorial in the database
    item
    .save(item)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Vehicle."
        });
    });
};

