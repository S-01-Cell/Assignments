const mongoose = require('mongoose');
//creating a schema for the data stored in mongodb
const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "please enter first name"]

        },

        lastname: {
            type: String,
            required: [true, "please enter last name"]

        },

        username: {
            type: String,
            required: [true, "please enter username"],
            unique: true

        },

        email: {
            type: String
        },

        address1: {
            type: String
        },

        address2: {
            type: String
        },

        country: {
            type: String,
            required: [true, "choose a country"]
        },

        state: {
            type: String,
            required: [true, "choose a state"]
        },

        zip: {
            type: Number,
            required: [true, "enter zip"]

        }

    },
    {
        timestamps: true
    }
);

//exporting the model
const User = mongoose.model("User", UserSchema);
module.exports = User;