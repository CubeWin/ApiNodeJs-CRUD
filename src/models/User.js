const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
    {
        id_persona: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async (password) => {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);