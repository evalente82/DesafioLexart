import React, {Component} from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: 'wrench',
    title: 'Array',
    subtitle:`array = ['a', 10, 'b', 'hola', 122, 15 ]`
}

const array = ['a', 10, 'b', 'hola', 122, 15 ]

/* Obtenha uma array contendo apenas as letras
Obtenha uma array contendo apenas os números
Obtenha o maior número da array acima */


const letras = obterLetras(array)
const numeros = obterNumeros(array)
let maior
let maior2
maior2 = Math.max(...numeros)
for (var i = 0; i < numeros.length; i++) {
    if(i === 0){
        maior = numeros[i]
    }    
    if ( numeros[i] > maior ) {
        maior = numeros[i]
    }
}

function obterLetras(array) {
    
    return array
        .filter(c => ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') )
        
}

function obterNumeros(array) {
    return array
        .filter(c => ('0' <= c && c <= '999') )         
}

console.log(letras)
console.log(numeros)
console.log(maior)
console.log(maior2)




export default class Array extends Component{

    array(){
        return(
            <div className='display-5'>
                <div>
                    <label>Obtenha uma array contendo apenas as letras</label>
                    <div>
                        <button className="btn btn-primary"
                        onClick={() => obterLetras(array)}>
                            Obter Letras
                        </button>
                        <p></p>
                        <label>{letras}</label>
                    </div>
                    
                </div>
                <div>
                    <label>Obtenha uma array contendo apenas os números</label>
                    <div>
                        <button className="btn btn-primary"
                        onClick={() => obterLetras(array)}>
                            Obter Números
                        </button>
                        <p></p>
                        <label>{numeros}</label>
                    </div>                    
                </div>
                <div>
                    <label>Obtenha o maior número da array acima</label>
                    <div>
                        <button className="btn btn-primary"
                        onClick={() => obterLetras(array)}>
                            Obter maior número
                        </button>
                        <p></p>
                        <label >{maior}</label>
                    </div>                    
                </div>
            </div>
            
        )
    }
    

    render(){
        return(
            <Main {...headerProps}>
                
                {this.array()}
            </Main>
        )
    }
}