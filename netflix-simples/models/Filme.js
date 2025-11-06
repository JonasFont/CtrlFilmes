import mongoose from "mongoose";

const FilmeShema = new mongoose.Schema(
    {
        titulo: {type: String, required: true},
        capa: { type: String, required: true},
        ano:{ type: Number},
        genero: {type: String}
    },
    { timestamps: true} //Cria automaticamente o create/update
)
//Evita erro de recompilar o model
export default mongoose.models.Filme //Se já existe, reutiliza o codigo
|| mongoose.model("filme", FilmeShema); //se não, ele cria o model "Filme"