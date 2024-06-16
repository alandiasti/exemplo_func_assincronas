const somar = async (a,b) => a + b;
const imprrimir_soma = async(a,b) => {
    let valor = await somar(a,b);
    console.log(valor);
    return "Processo Concluido";
}
imprrimir_soma(1,2).then(
    (retorno) => console.log(retorno)
)