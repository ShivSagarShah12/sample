module.exports = app => {
    const history = require("../controllers/historyControl.js");
    const vehicle = require("../controllers/vehicleControl.js");
  
    var router = require("express").Router();

    // Create A vehicle
    //router.get('/find', vehicle.find);

    // get all available
    router.get('/all', vehicle.all);

    // get all available
    router.get('/available', vehicle.available);

    // get all engaged
    router.get('/engaged', vehicle.engaged);

    // get all offDuty
    router.get('/offDuty', vehicle.offDuty);

    // get entire history
    router.get('/history', history.history);

    //trips count reduced to zero
    router.get('/tripscount/zero', vehicle.TripsToZero);

    // change status to engage
    router.post('/change/status/engage', vehicle.statusChangeEngage);

    // change status to avaiable
    router.post('/change/status/avaiable', vehicle.statusChangeAvailable);

    // change status to offDuty
    router.post('/change/status/offDuty', vehicle.statusChangeOffDuty);

    // add vehicle
    router.post('/vehicle/add',vehicle.addVehicle);

    //trip increment
    router.post('/trip/increment',vehicle.tripCountInc);

    //find driver name and vehicle number
    router.post('/find', vehicle.find);



    // delete vehicle
    //router.post('/vehicle/remove',vehicle.remove);

    //add router
    router.post('/history/add',history.addHistory);

    app.use("/api", router);
    

  };