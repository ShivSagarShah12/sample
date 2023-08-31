const db = require("../models");
const vehicle= db.vehicle;

// Find a single Tutorial with an id
exports.all = (req, res) => {
    vehicle.find({})
    .then(data => {
    if (!data)
        res.status(404).send({ message: "Not found" + id });
    else res.send(data);
    })
    .catch(err => {
    res
        .status(500)
        .send({ message: "Error" + id });
    });
};


//Get Trip Count reduces to zero
exports.TripsToZero = (req, res) => {
    vehicle.updateMany({},{trips:0})
    .then(data => {
        if (!data)
        res.status(404).send({ message: "Not found " + id });
        else res.send(data);
    })
    .catch(err => {
    res
        .status(500)
        .send({ message: "Error" + id });
    });
};


// Find a single Tutorial with an id
exports.available = (req, res) => {
    vehicle.find({status : 1})
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
//getEngaged
exports.engaged = (req, res) => {
    vehicle.find({status : 2})
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
// getOffDuty
exports.offDuty = (req, res) => {
    vehicle.find({status : 0})
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


// Post Update Off Duty 
exports.statusChangeOffDuty = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Save Tutorial in the database
    vehicle
    .findOne({vehicle_no:req.body.item.vehicle_no})
    .then(data => {
        data.status = 0;
        data.save();
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Not Found"
        });
    });
};

// Post Update Available 
exports.statusChangeAvailable = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Save Tutorial in the database
    vehicle
    .findOne({vehicle_no:req.body.item.vehicle_no})
    .then(data => {
        data.status = 1;
        data.save();
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Not Found"
        });
    });
};



// Post Update Engage 
exports.statusChangeEngage = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Save Tutorial in the database
    vehicle
    .findOne({vehicle_no:req.body.item.vehicle_no})
    .then(data => {
        data.status = 2;
        data.save();
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Not Found"
        });
    });
};


// Post add vehicle
exports.addVehicle = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    var item = new vehicle(req.body.item);

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

//Post Trip Count Increment
exports.tripCountInc= (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Save Tutorial in the database
    vehicle
    .findOne({vehicle_no:req.body.item.vehicle_no})
    .then(data => {
        data.trips = data.trips + 1;
        data.save();
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Not Found"
        });
    });
};

//Post find the details
exports.find= (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Save Tutorial in the database
    const regex = new RegExp(req.body.item.data, 'i');
    //res.send(regex);
    vehicle
    .find({$or:[{driver_name: {$regex: regex}},{vehicle_no:{$regex: regex}}]})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Not Found"
        });
    });
};


