import React, {Component} from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: 'lock',
    title: 'ID Aleatório',
    subtitle:''
}

export default class IdAleatorio extends Component{

    render(){
        return(
            <Main {...headerProps}>
            </Main>
        )
    }
}