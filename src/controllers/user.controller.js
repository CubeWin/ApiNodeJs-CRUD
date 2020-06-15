const userController = {};
// Models
const User = require('../models/User');
const Person = require('../models/Person');
/**
 * @create
 */
userController.createUser = async (req, res) => {
    const { id_persona, user, password, repeat_password } = req.body;
    const errors = [];
    if (!id_persona) { errors.push({ text: "Please write a id_persona" }) };
    if (!user) { errors.push({ text: "Please write a user" }) };
    if (!password) { errors.push({ text: "Please write a pasword" }) };
    if (password.length <= 4) { errors.push({ text: "Please write a pasword of min-length 4" }) };
    if (password != repeat_password) { errors.push({ text: "Please repeat password" }) };
    if (errors.length > 0) {
        res.json(errors);
    } else {
        const findPerson = await Person.findById(id_persona);
        const findUser = await User.findOne({ user: user });
        if (findPerson) {
            if (findUser) {
                res.json({ "fail": "El usuario ya esta en uso" });
            } else {
                const newUser = new User({ id_persona, user, password });
                newUser.password = await newUser.encryptPassword(password);
                await newUser.save();
                res.json({ "success": "Se registro correctamente" });
            }
        } else {
            res.json({ "fail": "No se encontro la persona" });
        }
    }
};
/**
 * @read
 */
userController.readUser = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
userController.readOneUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};
/**
 * @update
 */
userController.updateUser = async (req, res) => {
    /**
     * Falta Validar datos
     */
    const { password, repeat_password } = req.body;
    const id = req.params.id;
    const errors = [];
    // if (!id_persona) { errors.push({ text: "Please write a id_persona" }) };
    // if (!user) { errors.push({ text: "Please write a user" }) };
    if (!password) { errors.push({ text: "Please write a pasword" }) };
    if (password.length <= 4) { errors.push({ text: "Please write a pasword of min-length 4" }) };
    if (password != repeat_password) { errors.push({ text: "Please repeat password" }) };
    if (errors.length > 0) {
        res.json(errors);
    } else {
        // const findPerson = await Person.findById(id_persona);
        // const findUser = await User.findOne({ user: user });
        // if (findPerson) {
        // if (findUser) {
        //     res.json({ "fail": "El usuario ya esta en uso" });
        // } else {
        const newUser = new User({ password });
        newUser.password = await newUser.encryptPassword(password);
        const validUpdate = await User.findByIdAndUpdate(id, { $set: { "password": newUser.password } });
        if (validUpdate) {
            res.json({ "success": "Se actualizo correctamente" });
        } else {
            res.json({ "fail": "No se actualizo correctamente" });
        }
        // }
        // } else {
        //     res.json({ "fail": "No se encontro la persona" });
        // }
    }
};
/**
 * @delete
 */
userController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ "success": "Se elimino correctamente" });
};
module.exports = userController;