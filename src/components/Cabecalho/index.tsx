import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo1.png';
import './styles.css';

const Cabecalho = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <img src={Logo} alt="Logo" id="logo" />
                </Link>                    
            </header>
        </>
    );
}

export default Cabecalho;