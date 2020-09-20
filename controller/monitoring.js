const Monitor = require("../model/Monitoring");

module.exports = {
    create: (req, res) => {
        Monitor.create({
            pH: req.body.pH,
            turbidity: req.body.turbidity,
            TDS: req.body.TDS,
            termo: req.body.termo
        })
            .then((result) => res.json(result))
            .catch((err) => res.json(err));
    },

    showAll: (req, res) => {
        Monitor.find({})
            .then((result) => res.json(result))
            .catch((err) => res.json(err));
    },
};