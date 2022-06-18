import React, {Component} from "react";
import axios from 'axios'
import Main from "../templates/Main";

const headerProps = {
    icon: 'cubes',
    title: 'ABM Stock',
    subtitle:''
}

const baseUrl = 'https://crudcrud.com/api/4a184aaef93b46ceb7db97372b3d50a1/stock'

const initialState = {
    stock: {
        _id:'', 
        quantity: '', 
        price:'', 
        product: {
            nome_prod:'', 
            peso:'',
        },
        client: {
            nome_client:'', 
            idade:'', 
            altura:'',
        },
        active:'',
    },
    list: []
}


export default class StockCrud extends Component{

    state = {...initialState}   
    
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear(){
        this.setState({stock: initialState.stock})
        this.nome_prod = this.state.stock.product.nome_prod
    }

    save(){
        const data = this.state.stock
        console.log(this.state.stock)
        console.log(data)
        const method = data._id ? 'put' : 'post'
        const url = data._id ? `${baseUrl}/${data._id}` : baseUrl
        if (method === 'post') {
            delete data._id
        }
        delete data.nome_prod
        console.log(method)
        console.log(data._id)
        console.log(url)
        console.log(data)
        axios[method](url, data)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ stock: initialState.stock, list })
            })
    }

    getUpdatedList(stock, add = true){
        const list = this.state.list.filter(u => u.id !== stock._id)
        if(add)
            list.unshift(stock)
        return list
    }

    updateFild(event){
        const stock = { ...this.state.stock }
        stock[event.target.name] = event.target.value
        stock.product[event.target.name] = event.target.value
        this.setState({ stock })
    }


    renderForm() {        
        return (
            
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="number" className="form-control"
                            name="quantity"
                            value={this.state.stock.quantity}
                            onChange={e => this.updateFild(e)}
                            placeholder="Digite a quantidade ..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                        <label>Product Name</label>
                            <input type="text" className="form-control"
                            name="nome_prod"
                            value={this.state.stock.product.nome_prod}
                            onChange={e => this.updateFild(e)}
                            placeholder="Digite o nome do produto ..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                        <label>Price</label>
                            <input type="number" className="form-control"
                            name="price"
                            value={this.state.stock.price}
                            onChange={e => this.updateFild(e)}
                            placeholder="Digite o nome Preço do produto ..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secundary ml-2"
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(stock){
        this.setState({ stock })
    }

    remove(stock){
        axios.delete(`${baseUrl}/${stock._id}`)

        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ stock: initialState.stock, list })
        })
    }
    
    renderTable(){
        return(
            <table className="table mt4">
                <thead>
                    <tr>
                        <th>_ID</th>
                        <th>Quantity</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(stock => {
            return(
                <tr key={stock._id}>
                    <td>{stock._id}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.product.nome_prod}</td>
                    <td>{stock.price}</td>
                    <td>
                        <button className="btn btn-warnning">
                            <i className="fa fa-pencil"
                            onClick={() => this.load(stock)}></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(stock)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render(){
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}