const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    username: String,
    password: String,
    target: { type: Schema.Types.ObjectId, ref: "User", default: null },
    party: { type: Schema.Types.ObjectId, ref: "Party", default: null },
    isAlive: { type: Boolean, default: true },
    isPending: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    stats: {
        elims: { type: Number, default: 0 },
        deaths: { type: Number, default: 0 },
        wins: { type: Number, default: 0 }
    }
}, { timestamps: true });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);