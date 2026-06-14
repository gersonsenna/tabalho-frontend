import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🐾 Adote seu Pet</h1>
      <p>Encontre o companheiro ideal para sua casa!</p>
      <button onClick={() => navigate("/pets")}>
        Ver Pets para Adoção
      </button>
    </div>
  );
}

export default Home;