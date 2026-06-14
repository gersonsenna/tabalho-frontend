import { useNavigate } from "react-router";

function CadastroPet() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Cadastro de Pets</h1>
      <p className="text-slate-500 mb-6">Esta tela receberá o formulário do professor na Issue 5.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 mb-4 text-center text-slate-400">
        Área reservada para o formulário de cadastro.
      </div>

      {/* Botão de Voltar para a Listagem no padrão do link "Cancelar" do seu professor */}
      <button 
        onClick={() => navigate("/pets")}
        className="text-slate-500 hover:underline font-semibold"
      >
        Cancelar e Voltar
      </button>
    </div>
  );
}

export default CadastroPet;