function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
      <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
        🐾 Adote um Amigo
      </h1>
      <p className="text-gray-700 mt-4 text-lg">
        Se o fundo estiver azul e este texto cinza, o Tailwind está funcionando!
      </p>
      <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
        Confirmar Setup
      </button>
    </div>
  )
}

export default App