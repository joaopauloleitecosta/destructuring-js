//Sem desestruturação
console.log("-- Sem desestruturação")
const user = {
    name: "João",
    age: 44,
    country: "Brasil"
};

const name = user.name;
const age = user.age;
const country = user.country;

console.log(name);
console.log(age);
console.log(country);

//Com desestruturação
console.log("\n-- Usando desestruturação");
const usuario = {
    nome: "Maria",
    idade: 6,
    pais: "Brasil"
};
const {nome, idade, pais} = usuario;
console.log(nome);
console.log(idade);
console.log(pais);

console.log("\n-- Renomeando variáveis");
const carro = {
    marca: "Fiat",
    modelo: "Fiat 500",
    ano: 2010
};

const {marca: veiculo, modelo: chamado, ano: fabricacao} = carro;
console.log(veiculo);
console.log(chamado);
console.log(fabricacao);

//Valores padrão
console.log("\n--Valores padrão");
const arquivo = {
    download: true
};

const {download, file = "pdf"} = arquivo;
console.log(download);
console.log(file);

//Desetruturação aninhada
console.log("\n-- Desestruturação aninhada");
const cep = {
    cepi: 88720000,
    endereco: {
        cidade: "Pedras Grandes",
        estado: "SC"
    }
};

const {endereco, endereco:{cidade, estado}} = cep;
console.log(endereco);
console.log(cidade);
console.log(estado);

//Desestruturação em funções(parâmetros)
console.log("\n-- Desestruturação em Funções(parâmetros)");
function showUser({name, age}) {
    console.log(`Usuário: ${name}, Age: ${age}`);
}

const newUser = {name: "Karol", age: 40};
showUser(newUser);

//Uso real de desestruturação
console.log("\n-- Uso real");
const apiResponse = {
    id: 1,
    title: "Aprendendo JavaScript",
    author: {
        namee: "João Paulo",
        email: "joaopaulo@email.com"
    },
    likes: 1000
};

//Pegando apenas o título e o nome do autor
const {title, author: {namee}} = apiResponse;
console.log("Título: " + title);
console.log("Autor: " + namee);

//Uso real de desestruturação (2)
console.log("\n-- Uso real de desestruturação (2)");
const produto = {
    nome: "Notebook",
    preco: 3500.99,
    detalhes: {
        marca: "Dell",
        cor: "preto",
        bateriaCarregada: true
    }
};

function mostrarProduto({nome, preco, detalhes: {marca, cor, bateriaCarregada} }) {
    console.log("Produto: " + nome);
    console.log("Preço: " + preco);
    console.log(`Marca: ${marca}`);
    console.log(`Cor: ${cor}`);
    console.log(`Bateria carregada: ${bateriaCarregada}`);
};

mostrarProduto(produto);

//Desestruturação String
console.log("\n-- Desestruturando de Strings");
let frase = "W3Schools";
let [a1, a2, a3, a4, a5, a6] = frase;
console.log(a5);

//Desestruturação Array
console.log("\n-- Desestruturação de Arrays");
const frutas = ['maçã', 'uva', 'pêra', 'salada mista', 'manga'];
const [fruta1, fruta2] = frutas;
console.log(fruta1);
console.log(fruta2);

//Pulando valores
const [frutas1,,,frutas4] = frutas;
console.log(frutas4);

//Posição dos valores no Array
const {[4]:fruta4} = frutas;
console.log(fruta4);

//A propriedade REST
console.log("\n-- A propriedade REST ...");
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [a, b, ...auita] = numeros;
console.log(a);
console.log(b);
console.log(auita);

//Desestruturando Maps
console.log("\n-- Desestruturando Maps");
const motos = new Map([
    ["Hayabusa", 500],
    ["Ninja", 300],
    ["YBR", 150],
    ["CG titan", 100]
]);
let texto = "";
for (const [chave, valor] of motos) {
    texto = chave + " é " + valor + " cc.";
    console.log(texto) ;
}