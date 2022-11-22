const Radio = require("../models/radios.model");

let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let radio = new Radio({
        id_radio: req.body.id_radio,
        nombre: req.body.nombre,
        descripcion: req.body.apellido_p,
        url_radio: req.body.url_radio,
        url_imagen: req.body.url_imagen
    });

    radio.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar la radio."
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "La radio se guardo correctamente"
        res.json(response)
    })

}
exports.find = function (req, res) {
    Radio.find(function (err, radios) {
        res.json(radios)
    })
}

exports.findOne = function (req, res) {
    Radio.findOne({ _id: req.params.id }, function (err, radio) {
        res.json(radio)
    })
}


exports.update = function (req, res) {
    let radio = {
        id_radio: req.body.id_radio,
        nombre: req.body.nombre,
        descripcion: req.body.apellido_p,
        url_radio: req.body.url_radio,
        url_imagen: req.body.url_imagen
    }
    Radio.findByIdAndUpdate(req.params.id, { $set: radio }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar la radio"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La radio se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Radio.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar la radio"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La radio se elimino correctamente"
        res.json(response)
    })
}