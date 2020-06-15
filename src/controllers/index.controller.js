const indexController = {};

indexController.inicio = (req, res) => {
    res.send("hola mundo (controller index)");
};

indexController.json = (req, res) => {
    res.json({"title": "hello world"});
};

module.exports = indexController;