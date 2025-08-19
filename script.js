const pets = [
    { id: 1, nome: "Luna", 
      tipo: "Cachorro", 
      raca: "Labrador", 
      idade: "2 anos", 
      imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" 
    },
    { id: 2, 
      nome: "Mimi", 
      tipo: "Gato", 
      raca: "Persa", 
      idade: "1 ano", 
      imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" 
    },
    { id: 3, 
     nome: "Thor", 
     tipo: "Cachorro", 
     raca: "Golden Retriever", 
     idade: "3 anos", 
     imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" 
    },
    { id: 4, 
      nome: "Bolinha", 
      tipo: "Gato", 
      raca: "Siamês", 
      idade: "6 meses", 
      imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" },
    { 
        id: 5, 
        nome: "Rex", 
        tipo: "Cachorro", 
        raca: "Pastor Alemão", 
        idade: "4 anos", 
        imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" 
    },
    { id: 6, 
        nome: "Mel", 
        tipo: "Gato", 
        raca: "Maine Coon", 
        idade: "2 anos", 
        imagem: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" }
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
        <button onclick="adotar()">Quero adotar</button>
    </div>
    `
}

document.getElementById("dados").innerHTML = cards;