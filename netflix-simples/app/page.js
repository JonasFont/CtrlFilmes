//Função do lado do servidor para busvar filmes na propria API Next
async function carregarFilmes() {
  const resp = await fetch("http://localhost:3000/api/filmes", {
    cache: 'no-store' //Evita cache desatualizado
  });

  const dados = await resp.json();  //Converte a respota para JSON

  return dados; //retorna a lista dos filmes
}
//Component principal da pagina
export default async function Home(){
  const filmes = await carregarFilmes();

  return (
    <main style={{ padding: "20px" }}>
      {/* Título da página */}
      <h1>🎬 Catálogo Simples (Next.js + MongoDB)</h1>

      {/* Grade de cards de filmes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 150px)",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {/* Mapeia a lista de filmes para cards */}
        {filmes.map((filme) => (
          <div key={filme._id} style={{ textAlign: "center" }}>
            {/* Imagem de capa */}
            <img
              src={filme.capa}
              alt={filme.titulo}
              style={{ width: "150px", height: "220px", borderRadius: "8px", objectFit: "cover" }}
            />
            {/* Título abaixo da capa */}
            <p style={{ marginTop: "6px", fontWeight: "600" }}>{filme.titulo}</p>
            {/* Linha com ano e gênero, se existirem */}
            <p style={{ margin: 0, opacity: 0.8, fontSize: 12 }}>
              {filme.ano ? `Ano: ${filme.ano}` : ""} {filme.genero ? `• ${filme.genero}` : ""}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}