const input_np1 = document.querySelector("#np1");
const input_np2 = document.querySelector("#np2");
const input_pim = document.querySelector("#pim");

const calcular = document.getElementById("calcular");
const nota_final = document.getElementById("nota_final");

const aprovado = document.getElementById("aprovado");
const reprovado = document.getElementById("reprovado");

calcular.addEventListener("click", () => {
    const nota_np1 = parseFloat(input_np1.value);
    const nota_np2 = parseFloat(input_np2.value);
    const nota_pim = parseFloat(input_pim.value);

    const result_final = nota_np1 * 0.4 + nota_np2 * 0.4 + nota_pim * 0.2;
    
    if((nota_np1 > 10) || (nota_np2 > 10) || (nota_pim > 10)){
        aprovado.innerHTML = "Por favor, digite um número entre 0 e 10";
    }
    if(result_final < 7){
        reprovado.innerHTML = "Reprovado, sua nota foi de: " + result_final.toFixed(1);
    }
    else if(result_final > 7){
        aprovado.innerHTML = "Aprovado, sua nota foi de: " + result_final.toFixed(1);
    }
    
    /* nota_final.innerHTML = "Sua nota é: " + result_final.toFixed(1); */
});
