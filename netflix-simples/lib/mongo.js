//importa o mongoose
import mongoose from "mongoose"

let conexaoCah = null  //Guarda a conexao ativa 

export async function conectarMongo(params) {
    if(conexaoCah) return conexaoCah; //Se já temos a conexao, apenas retorna 

    const uri = process.env.MONGODB_URI; //Lê a URI do banco a partir do env
    if(!uri){ //Valida se a URI e igual a do env
        throw new Error("MONGODB_URI não definida no env ")
    }
    const instancia = await mongoose.connect(uri); //Conect ao MongoDB
    conexaoCah = instancia; //Guarda no cache para reuso
    console.log("Conectado ao MongoDB");

    return conexaoCah; //Retorna a conexao
}

