import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { PetContext } from "../contexts/PetContext";

function Login() {
  const { setEstaLogado } = useContext(PetContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Altera o estado global para logado!
    setEstaLogado(true);
    alert("🎉 Login realizado com sucesso!");
    navigate("/pets/novo"); // Redireciona direto para a tela de cadastro protegida
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🔑 Entrar na sua Conta
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="********"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition duration-200"
        >
          Entrar
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Não tem uma conta?{" "}
        <Link to="/registrar" className="text-orange-600 hover:underline font-medium">
          Cadastre-se aqui
        </Link>
      </p>
    </div>
  );
}

export default Login;