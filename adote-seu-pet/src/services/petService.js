const URL = "http://localhost:3001/pets";

export const listar = async () => {
  const resposta = await fetch(URL);
  return await resposta.json();
};

export const criar = async (dados) => {
  const resposta = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });
  return await resposta.json();
};

export const remover = async (pet) => {
  await fetch(`${URL}/${pet.id}`, {
    method: "DELETE",
  });
};