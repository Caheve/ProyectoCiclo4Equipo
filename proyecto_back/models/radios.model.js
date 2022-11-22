const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const RadiosSchema = new Schema({
    id_radio:{type: String, required: true,max:60},
    nombre:{type: String, required: true,max:60},
    descripcion:{type: String, required: false, max:150},
    url_imagen:{type: String, required: true, max:150},
    url_radio:{type: String, required: true, max:150},
});

module.exports=mongoose.model("Radios",RadiosSchema);