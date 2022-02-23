const pessoa = {
    nome: "Maria",
    idade: 28,
    email: "ela@gmail.com"
}

console.log(pessoa)

for (let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}