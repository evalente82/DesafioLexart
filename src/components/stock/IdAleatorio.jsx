import { useState } from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: 'lock',
    title: 'ID Aleatório',
    subtitle:''
}

/*
Crie um algoritmo que gere o seguinte padrão de 
ID aleatório: XXXX-AAAA-BBBB-CCCC
Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
O resultado deve ser armazenado em uma variável. Por exemplo:
let id = generarId()
id vale ~ abc1-bb12-234a-bcc2
*/

function GerarIdAleatorio(){

    let primeiro = Math.random().toString(36).substr(-4).toUpperCase()
    let segundo = Math.random().toString(36).substr(-4).toUpperCase()
    let terceiro = Math.random().toString(36).substr(-4).toUpperCase()
    let quarto = Math.random().toString(36).substr(-4).toUpperCase()

    return `${primeiro}-${segundo}-${terceiro}-${quarto}`
}

// const novoId = GerarIdAleatorio()

const Id = (props) => {
    const [id, setId] = useState()
    
    return(
        <div className='display-5'>
            <div>
                    <label>Gerar um ID Aleatório</label>
                    <div>
                        <button className="btn btn-primary"
                            onClick={() => setId(GerarIdAleatorio())}>
                                Gerar
                            </button>                        
                        <p></p>
                        <h1>
                            <span className="text">{id}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger"
                                    onClick={() => setId()}>
                                        Limpar
                                </button> 
                            </div>
                    </div>                    
                </div>
        </div>
        
    )
}


const IdAleatorio = (props) => {
    return (
        <div>
            <Main {...headerProps}>
                <Id />
            </Main>
        </div>
    )
}

export default IdAleatorio