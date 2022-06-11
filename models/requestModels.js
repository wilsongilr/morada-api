const mongoose = require("mongoose");
const { schema } = require("./userModel");
const { Schema} = mongoose;

const RequestSchema = new Schema (
    {
        propertyId: {
            type: schema.Types.ObjectId,
            ref: 'properties'
        },
        userId:{
            type: schema.Types.ObjectId,
            ref: 'users'
        },
        comment: String
    },
        {
            timestamps: true
        }
);

const Request = mongoose.model("requests", RequestSchema);
mongoose.exports = Request;