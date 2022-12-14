const Usuario = require("../models/usuarios.model");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
    let pass = req.body.pass;

    Usuario.findOne({ usuario: req.body.usuario, pass:pass },
        function (err, usuario) {
            let response = {
                token: null,
            };

            if (usuario !== null) {
                response.token = jwt.sign(
                    {
                        id: usuario._id,
                        usuario: usuario.usuario,
                    }, "__recret__");
            }
            res.json(response);
        }
    );
};
