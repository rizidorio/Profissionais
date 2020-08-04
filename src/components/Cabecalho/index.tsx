import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import Logo from '../../assets/logo1.png';
import './styles.css';

interface CabecalhoProps {
    titulo?: string;
}

const Cabecalho: React.FC<CabecalhoProps> = (props) => {
    const history = useHistory();
    return (
        <header className="page-header">
            <div className="header-container">
                <Link to="/">
                    <img src={Logo} alt="Logotipo" className="logo" />
                </Link>                    
                <div className="header-content">
                    
                    <Link to="" onClick={() => {
                        history.goBack();
                    }}>
                        <FiArrowLeftCircle />
                    </Link>
                    <strong>{props.titulo}</strong>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;