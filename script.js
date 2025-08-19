const pets = [
    { id: 1, nome: "Tom", 
      tipo: "Gato", 
      raca: "Laranja", 
      idade: "11 meses", 
      imagem: "cat.png" 
    },
    { id: 2, 
      nome: "Rex", 
      tipo: "Cachorro", 
      raca: "Vira-Lata", 
      idade: "2 anos", 
      imagem: "dog.png" 
    },
    { id: 3, 
    nome: "Pastel", 
    tipo: "Capivara", 
    raca: "Desconhecido", 
    idade: "Desconhecido", 
    imagem: "capybara.png" 
    },

];
let cards = ""
for (let i = 0; i < pets.length; i++) {
    cards += `
    <div class="card">
        <img src="${pets[i].imagem}" alt="${pets[i].nome}">
        <h3>${pets[i].nome}</h3>
        <p>Tipo: ${pets[i].tipo}</p>
        <p>Idade: ${pets[i].idade}</p>
        <p>Raça: ${pets[i].raca}</p>
        <button onclick="adotar('${pets[i].nome}', '${pets[i + 1]?.nome}', '${pets[i + 2]?.nome}')">Quero adotar</button>
    </div>
    `
}

document.getElementById("dados").innerHTML = cards;

function exibirAlgo(idPet) {
  document.getElementById(idPet).value = idPet;
}