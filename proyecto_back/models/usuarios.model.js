const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario: { type: String, required: false, max: 100 },
    pass: { type: String, required: false, max: 300 }
});

module.exports = mongoose.model("usuarios",UsuarioSchema);