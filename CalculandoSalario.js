/*Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. */

function CalculandoSalario (porHora,horasTrabalhadas){
    let resultado = porHora * horasTrabalhadas
    console.log(`você recebe ${porHora} R$ por hora trabalhada, e trabalha um total de ${horasTrabalhadas} horas no mês.\n Seu salário é de: ${resultado} R$.`)
}

CalculandoSalario(1,30)