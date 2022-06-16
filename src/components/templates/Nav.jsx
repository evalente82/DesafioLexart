/* eslint-disable import/no-anonymous-default-export */
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>

    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className='fa fa-code'></i> Início                
            </Link>
            <Link to="/stock">
                <i className='fa fa-cubes'></i> ABM Stock
            </Link>
            <Link to="/array">
                <i className='fa fa-wrench'></i> Array
            </Link>
            <Link to="/hashmap">
                <i className='fa fa-calculator'></i> Hashmap
            </Link>
            <Link to="/idaleatorio">
                <i className='fa fa-lock'></i> ID Aleatório
            </Link>
        </nav>
    </aside>