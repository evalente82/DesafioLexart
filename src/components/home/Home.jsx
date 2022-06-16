/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Main from "../templates/Main";
import logo from '../../assets/images/cunoLexartlabs.png'

export default props =>
        <Main icon="home" title="LEXART"
            subtitle="TRANSFORMING PEOPLE TO BOOST TECHNOLOGY">
            <div className='display-4'>WELCOME</div>
            <hr/>
            <p className="mb-0">Lexart is on a mission to transform 
            people into the world of technology. To provide the best 
            technical and human skills to meet the needs of our clients 
            in the tech industry.</p>
            <img src={logo} alt="cunoLexartlabs" />
        </Main>