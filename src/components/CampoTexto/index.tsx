import React from 'react';

import './styles.css';

interface CampoTextoProps {
    type: string,
    id: string,
    placeholder: string,
    label: string,
    name: string
}

const CampoTexto: React.FC<CampoTextoProps> = (props) => {
    return (
        <div className="campos">
            <input type={props.type} id={props.id} placeholder={props.placeholder} />   
            <label htmlFor={props.name}>{props.label}:</label>            
        </div>
    );
}

export default CampoTexto;