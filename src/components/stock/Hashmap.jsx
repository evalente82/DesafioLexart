import React, {Component} from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: 'calculator',
    title: 'Hashmap',
    subtitle:''
}

export default class Hashmap extends Component{

    render(){
        return(
            <Main {...headerProps}>
            </Main>
        )
    }
}