module.exports = mongoose => {
    // History Schema
    var historySchema=mongoose.Schema({
        vehicle_id:{
            type: Number,
        },
        driver_name:{
            type: String,
        },
        trip_date_and_time:{
            type : String,
        },
        engaged_message:{
            type: String
        }
    },{
        timestamps: true
    });
    historySchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    var history = mongoose.model("history", historySchema);

    //vehicle schema
    var vehicleSchema=mongoose.Schema({
        id:{
            type: String,
        },
        driver_name:{
            type: String,
        },
        branch:{
            type : String,
        },
        vehicle_no:{
            type : String,
        },
        phone_no:{
            type : Number,
        },
        vehicle_type:{
            type : String,
        },
        status:{
            type : Number,
        },
        trips:{
            type : Number,
        },
        engaged_message:{
            type: String
        }
    },{
        timestamps: true
    });

    vehicleSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    var vehicle=mongoose.model('vehicle',vehicleSchema);

    return {history,vehicle};
};

