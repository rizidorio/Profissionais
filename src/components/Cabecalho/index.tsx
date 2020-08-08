import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import Logo from '../../assets/logo_1200.png';
import './styles.css';

interface CabecalhoProps {
    titulo: string;
}

const Cabecalho: React.FC<CabecalhoProps> = (props) => {
    const history = useHistory();
    return (
        <header id="page-header">
            <div id="page-header-content" className="container">
                <img src={Logo} alt="Logotipo" className="logo" />
                
                <div className="header-back-title">
                    <strong>{props.titulo}</strong> 
                    <Link to="" onClick={() => {
                        history.goBack();
                    }}>
                        <FiArrowLeftCircle />
                    </Link>
                </div>                   
            </div>
        </header>
    );
}

export default Cabecalho;