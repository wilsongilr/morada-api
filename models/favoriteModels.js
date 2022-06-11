const mongoose = require("mongoose");
const { schema } = require("./userModel");
const { Schema} = mongoose;

const FavoriteSchema = new Schema (
    {
        propertyId: {
            type: schema.Types.ObjectId,
            ref: 'properties'
        },
        userId:{
            type: schema.Types.ObjectId,
            ref: 'users'
        }
    },
        {
            timestamps: true
        }
);

const Favorite = mongoose.model("favorites", FavoriteSchema);
mongoose.exports = Favorite;
