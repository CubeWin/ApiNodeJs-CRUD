const { Schema, model } = require('mongoose');

const PersonSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        telephone: {
            type: String,
            require: false
        },
        email: {
            type: String,
            required: false
        },
        gender: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = model('Person', PersonSchema);