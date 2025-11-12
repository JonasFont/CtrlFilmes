// Importa o mongoose
import mongoose from "mongoose";

let conexaoCache = null;  // Cache da conexão ativa

export async function conectarMongo() {
  // Se já temos conexão, reaproveitamos
  if (conexaoCache) return conexaoCache;

  const uri = process.env.MONGODB_URI;  // Nome correto da variável
  if (!uri) {
    throw new Error("❌ ERRO: A variável MONGODB_URI não está definida no .env.local");
  }

  // Conexão
  const instancia = await mongoose.connect(uri, {
    dbName: "netflix"  // opcional, mas recomendado
  });

  conexaoCache = instancia; // Guarda no cache
  console.log("🚀 Conectado ao MongoDB!");

  return conexaoCache;
}
