import { useState } from "react";
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

const numeros = obterNumeros(array)

function ObterMaior(numeros){
    let maior1
    for (var i = 0; i < numeros.length; i++) {
        if(i === 0){
            maior1 = numeros[i]
        }    
        if ( numeros[i] > maior1 ) {
            maior1 = numeros[i]
        }
    }
    return maior1
}

let maior2
maior2 = Math.max(...numeros)

function obterLetras(array) {
    
    return array
        .filter(c => ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') )        
}

function obterNumeros(array) {
    return array
        .filter(c => ('0' <= c && c <= '999') )         
}

let letras = obterLetras(array)
console.log(letras)
console.log(numeros)
console.log(ObterMaior(numeros))
console.log(maior2)

    const Letras = (props) => {
        const [letras, setletras] = useState('')
        const [num, setNum] = useState()
        const [maior, setMaior] = useState()

        return(
            <div className='display-5'>
                
                <div>
                    <label>Obtenha uma array contendo apenas as letras</label>
                    <div>
                        <button className="btn btn-primary"
                        onClick={() => setletras(obterLetras(array))}>
                            Obter Letras
                        </button>                        
                        <p></p>
                        <h1>
                            <span className="text">{letras}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger"
                                    onClick={() => setletras()}>
                                        Limpar
                                </button> 
                            </div>
                    </div>                    
                </div>

                <div>
                    <label>Obtenha uma array contendo apenas os números</label>
                    <div>
                        <button className="btn btn-primary"
                            onClick={() => setNum(obterNumeros(array))}>
                                Obter Números
                        </button>                       
                        <p></p>
                        <h1>
                            <span className="text">{num}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger"
                                    onClick={() => setNum()}>
                                        Limpar
                                </button> 
                            </div>
                        
                    </div>                    
                </div>

                <div>
                    <label>Obtenha o maior número da array acima</label>
                    <div>
                        <button className="btn btn-primary"
                            onClick={() => setMaior(ObterMaior(numeros))}>
                                Obter maior número
                        </button>
                        <p></p>
                        <h1>
                            <span className="text">{maior}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger"
                                    onClick={() => setMaior()}>
                                        Limpar
                                </button> 
                            </div>
                    </div>                    
                </div>
            </div>
            
        )
    }
    

const Array = (props) => {
    return (
        <div>
            <Main {...headerProps}>
                <Letras />
            </Main>
        </div>
    )
}

export default Array