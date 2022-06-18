import { useState } from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: 'calculator',
    title: 'Hashmap',
    subtitle:''
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
const Operacoes = (props) => {
    
    const [soma, setSoma] = useState()
    const [subtracao, setSubtracao] = useState()
    const [multiplicar, setMultiplicar] = useState()
    const [dividir, setDividir] = useState()

    
    return(
        <div className='display-5'>
            <div>
                    <label>funções elementares de adição, subtração, multiplicação e divisão.</label>
                    <div>
                    <label>Digite os números que deseja SOMAR</label>
                            <input type="text" className="form-control"
                            name="txtSoma"
                            onChange={e => setSoma(e.target.value)}                        
                            placeholder="Digite os números da soma ..." />
                        <p/>
                        <button className="btn btn-primary"
                        //onClick={() => setSoma(soma.value)}
                        >
                                Somar
                            </button> 
                            <span className="text">{ soma}</span>                       
                        <p></p>
                        <h1>
                            <span className="text">{}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger">
                                        Limpar
                                </button> 
                            </div>
                    </div>  
                    <p/>
                    <div>
                    <label>Digite os números que deseja SUBTRAIR</label>
                            <input type="number" className="form-control"
                            name="quantity"                            
                            placeholder="Digite os números da subtração ..." />
                        <p/>
                        <button className="btn btn-primary">
                                Subtrair
                            </button>                        
                        <p></p>
                        <h1>
                            <span className="text">{subtracao}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger">
                                        Limpar
                                </button> 
                            </div>
                    </div> 
                    <p/>
                    <div>
                    <label>Digite os números que deseja MULTIPLICAR</label>
                            <input type="number" className="form-control"
                            name="quantity"                            
                            placeholder="Digite os números da multiplicação ..." />
                            <p/>
                        <button className="btn btn-primary">
                                Multiplicar
                            </button>                        
                        <p></p>
                        <h1>
                            <span className="text">{multiplicar}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger">
                                        Limpar
                                </button> 
                            </div>
                    </div> 
                    <p/>
                    <div>
                    <label>Digite os 2 números que deseja DIVIDIR</label>
                            <input type="number" className="form-control"
                            name="quantity"                            
                            placeholder="Digite 2 números ..." />
                            <p/>
                        <button className="btn btn-primary">
                                Dividir
                            </button>                        
                        <p></p>
                        <h1>
                            <span className="text">{dividir}</span>
                        </h1>
                            <div>
                                <button className="btn btn-danger">
                                        Limpar
                                </button> 
                            </div>
                    </div>                   
                </div>
        </div>
        
    )
}


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