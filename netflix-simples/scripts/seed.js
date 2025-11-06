import "dotenv/config";
import { conectarMongo} from "../lib/mongo.js";
import Filme from "../models/Filme.js";

const exemplos = [
    {
        titulo: "Matrix",
        capa: "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
        ano: 1999,
        genero: "Ação"
    }
];

(async () => {
    await conectarMongo();  //Coencta ao mongoDB
    await Filme.deleteMany({}); //Limpa a coleção
    await Filme.insertMany(exemplos); //insere os exemplos
    console.log("Seed concluido", exemplos.length, "itens"); //Log de sucesso
    process.exit(0); //Encerra o processo
})
