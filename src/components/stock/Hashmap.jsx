import { useState } from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: 'calculator',
    title: 'Hashmap',
    subtitle:'const numbers = [1, 2, 3, 4, 5]'
}

/*
Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções 
elementares de adição, subtração, multiplicação e divisão.
Leve em consideração que a divisão não deve permitir dividendo 0
A função sum permite um array como parâmetro de entrada e adiciona todos 
os seus elementos.
A função de subtração permite um array como parâmetro de entrada e 
subtrai todos os seus elementos.
Função de multiplicação - Idem
A função de divisão aceita dois parâmetros: a e b.

*/

const numbers = [1, 2, 3, 4, 5]

var calc = {
    somar: function (arr){
        let num = arr[0]
                for(let i = 1; i <arr.length; i++){
                    num += arr[i]
                }
                return num
            },
            diminuir: function (arr){
                let num = arr[0]
                for(let i = 1; i <arr.length; i++){
                    num -= arr[i]
                }
                return num
            },
            multiplicar: function (arr){
                let num = arr[0]
                for(let i = 1; i <arr.length; i++){
                    num *= arr[i]
                }
                return num
            },
            dividir: function ( a, b ){
                let result
                if(a === 0){
                    result = 'não pode dividir por 0'
                }
                else{
                    result = a / b
                }
            return result
        }
    }

const split = function (string) {
    string = string.split(' ')
    return string
}
let texto = ``
const Operacoes = (props) => {

    return(
        <div className='display-5'>
            <div>
                    <label>funções elementares de adição, subtração, multiplicação e divisão.</label>
                    <div>
                        <label>Somar</label>
                    </div>
                    <div>
                        <label>{calc.somar(numbers)}</label>
                    </div>
                    <div>
                        <label>Subtrair</label>
                    </div>
                    <div>
                        <label>{calc.diminuir(numbers)}</label>
                    </div>
                    <div>
                        <label>Multiplicar</label>
                    </div>
                    <div>
                        <label>{calc.multiplicar(numbers)}</label>
                    </div>
                    <div>
                        <label>Dividir</label>
                    </div>
                    <div>
                        <label>{calc.dividir(10,2)}</label>
                    </div>
                    <div>
                        <label>{calc.dividir(0,5)}</label>
                    </div>
            </div>
        </div>
                        
        
    )
}

console.log(calc.somar(numbers))

const Hasmap = (props) => {
    return (
        <div className="UseState">
            <Main {...headerProps}>
                <Operacoes />
            </Main>
        </div>
    )
}

export default Hasmap