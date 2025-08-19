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
    { id: 4,
      nome: "Carlos",
      tipo: "Calopsita",
      raca: "Amarelo",
      idade: "6 meses",
      imagem: "cockatiel.png"
    },
    { id: 5,
      nome: "Beto",
      tipo: "Hamster",
      raca: "Sírio",
      idade: "1 ano",
      imagem: "hamster.png"
    }

];

// Essa forma de exibir o animal selecionado no select é ruim, pois envolve modificar
// os arquivos HTML e JavaScript toda vez que um novo animal é adicionado !!!
let cards = ""
for (let i = 0; i < pets.length; i++) {
    j = i+1;
    k = i+2;
    l = i+3;
    m = i+4;
    if (j >= pets.length) {
        j -= pets.length;
    }
    if (k >= pets.length) {
        k -= pets.length;
    }
    if (l >= pets.length) {
        l -= pets.length;
    }
    if (m >= pets.length) {
        m -= pets.length;
    }
    cards += `
    <div class="card">
        <img src="${pets[i].imagem}" alt="${pets[i].nome}">
        <h3>${pets[i].nome}</h3>
        <p>Tipo: ${pets[i].tipo}</p>
        <p>Idade: ${pets[i].idade}</p>
        <p>Raça: ${pets[i].raca}</p>
        <button onclick="adotar('${pets[i].nome}', '${pets[j]?.nome}', '${pets[k]?.nome}', '${pets[l]?.nome}', '${pets[m]?.nome}')">Quero adotar</button>
    </div>
    `
}

document.getElementById("dados").innerHTML = cards;