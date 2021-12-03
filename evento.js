let inserirData = "2021-12-03"
let data = new Date();
console.log(data);
if(inserirData > data){
    console.log("Data indisponivel");
}else {
    console.log("Data disponivel, proceguir para o cadastro para cadastro")
}
let suaidade = "11"
console.log (suaidade);
if(suaidade >= 18) {
    console.log("Idade permitida, seguir com o dacastro");
}else {
    console.log("Idade nao permitida para cadastro");
}
let listaDeParticipantes = ["JOAO","MARCOS","FRANKLIN","PEDRO"]
if(listaDeParticipantes.length >=100) {
    console.log("Vagas esgotadas para o evento")
} else{
    console.log("Vaga disponivel");
}