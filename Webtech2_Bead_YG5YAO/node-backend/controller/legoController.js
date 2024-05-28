const Legos = require('../model/Legos');

exports.addLegos = async (req, res) => {
    try {
        let legos = new Legos({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            recomendedAge: req.body.recomendedAge
        })
        let createdLego = await legos.save();
        res.status(200).json({
            msg: "New lego created",
            data: createdLego
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }

}

exports.getAllLegos = async (req, res) => {
    try {
        let legos = await Legos.find();
        res.status(200).json({
            msg: "Get all legos",
            data: legos
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.getLegoById = async (req, res) => {
    const id = req.params.id;

    try {
        let lego = await Legos.findById({
            _id: id
        });
        res.status(200).json({
            msg: "Get lego by id",
            data: lego
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.updateLego = async (req, res) => {
    const id = req.params.id;
    const lego = req.body;

    try {
        let legoUpdate = await Legos.findByIdAndUpdate( id, {
            $set: lego
        });
        res.status(200).json({
            msg: "Update lego",
            data: legoUpdate
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.deleteLegoById = async (req, res) => {
    const id = req.params.id;

    try {
        let deleteLego = await Legos.findByIdAndRemove({
            _id: id
        });
        res.status(200).json({
            msg: "Delete lego",
            data: deleteLego
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}
