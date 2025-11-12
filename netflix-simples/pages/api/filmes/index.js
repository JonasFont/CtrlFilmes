import { conectarMongo } from "../../../lib/mongo";
import Filme from "../../../models/Filme";

export default async function handler(req, res) { //padrão de rota
    await conectarMongo(); //garate que estamos conectados ao banco
    //ERRO
    const metodo = req.method; //Obtem o metodos HTTP (GET< POST, etc...)

    if(metodo === "GET"){//Se for get: lista os filmes
        const filmes = await Filme.find().sort({ //busca todos os filmes
            createdAt: -1 //ordena do mais recente para o mais antigo
        });
        return res.status(200).json(filmes);
    } 
    if( metodo === "POST"){ //Se for POST: adiciona filme
        const dados = req.body; //Lè o corpo JSON enviado
        try{
            const criado = await Filme.create(dados) //Indrto no mongo
            return res.status(201).json(criado); //responde com o codigo 201
        }catch (erro){
            return res.status(400).json(  //Retorna 400 bad request
                {erro: "Falha ao criar o filme", 
                detalhe: erro.message
            });
        }
    }
    res.setHeader("Allow", ["GET", "POST"]); //Indica os metodos permitidos
    return res.status(405).end("Método não permitido"); //405 metodo nao permitido
}

