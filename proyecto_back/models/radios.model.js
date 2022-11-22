const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const RadiosSchema = new Schema({
    id_radio:{type: String, required: true,max:60},
    nombre:{type: String, required: true,max:60},
    apellido_p:{type: String, required: true, max:40},
    apellido_m:{type: String, required: true, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: true, max:70},
    direccion:{type: String, required: true, max:150}
});

module.exports=mongoose.model("Radios",RadiosSchema);