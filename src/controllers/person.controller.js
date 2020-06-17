const personController = {};
// Model
const Person = require('../models/Person');
/**
 * @create
 */
personController.createPerson = async (req, res) => {
    // res.send("Crear una nueva persona");
    const { name, surname, telephone, email, gender } = req.body;
    const errors = [];
    if (!name) { errors.push({ text: "Please write a name" }); }
    if (!surname) { errors.push({ text: "Please write a surname" }); }
    if (!telephone) { errors.push({ text: "Please write a telephone" }); }
    if (!email) { errors.push({ text: "Please write a email" }); }
    if (!gender) { errors.push({ text: "Please write a gender" }); }
    if (errors.length > 0) {
        res.json(errors);
    } else {
        const newPerson = new Person({ name, surname, telephone, email, gender });
        await newPerson.save();
        res.json({"success":"Se registro correctamente"});
    }
};
/**
  * @read
  */
personController.readPerson = async (req, res) => {
    const persons = await Person.find();
    res.json(persons);
};
personController.readOnePerson = async (req, res) => {
    const person = await Person.findById(req.params.id);
    res.json(person);
};
/**
 * @update
 */
personController.updatePerson = async (req, res) => {
    const { name, surname, telephone, email, gender } = req.body;
    const id = req.params.id;
    if (!name) { errors.push({ text: "Please write a name" }); }
    if (!surname) { errors.push({ text: "Please write a surname" }); }
    if (!telephone) { errors.push({ text: "Please write a telephone" }); }
    if (!email) { errors.push({ text: "Please write a email" }); }
    if (!gender) { errors.push({ text: "Please write a gender" }); }
    if (errors.length > 0) {
        res.json(errors);
    } else {
        const validUpdate = await Person.findByIdAndUpdate(id, { name, surname, telephone, email, gender });
        if (validUpdate) {
            res.json({ "success": "Se actualizo correctamente" });
        } else {
            res.json({ "fail": "No se actualizo correctamente" });
        }
    }
};
/**
 * @delete
 */
personController.deletePerson = async (req, res) => {
    await Person.findByIdAndDelete(req.params.id);
    res.json({"success":"Se elimino correctamente"});
};
module.exports = personController;