const input_np1 = document.querySelector("#np1");
const input_np2 = document.querySelector("#np2");
const input_pim = document.querySelector("#pim");
const input_media = document.querySelector("#input_media");

const calcular = document.getElementById("calcular");
const nota_final = document.getElementById("nota_final");

const aprovado = document.getElementById("aprovado");
const reprovado = document.getElementById("reprovado");

calcular.addEventListener("click", () => {
    var valor_media = parseFloat(input_media.value);
    var nota_np1 = parseFloat(input_np1.value);
    var nota_np2 = parseFloat(input_np2.value);
    var nota_pim = parseFloat(input_pim.value);

    const result_final = nota_np1 * 0.4 + nota_np2 * 0.4 + nota_pim * 0.2;
    
    if((nota_np1 > 10) || (nota_np2 > 10) || (nota_pim > 10)){
        aprovado.innerHTML = "Por favor, digite um número entre 0 e 10";
    }
    if(result_final < valor_media){
        reprovado.innerHTML = "Reprovado, sua nota foi de: " + result_final.toFixed(1);
    }
    else if(result_final > valor_media){
        aprovado.innerHTML = "Aprovado, sua nota foi de: " + result_final.toFixed(1);
    }
    
    /* nota_final.innerHTML = "Sua nota é: " + result_final.toFixed(1); */
});
function limpar(){
    input_media.value = ' ';
    input_np1.value = ' ';
    input_np2.value = ' ';
    input_pim.value = ' ';
    reprovado.innerHTML = ' ';
    aprovado.innerHTML = ' ';
}