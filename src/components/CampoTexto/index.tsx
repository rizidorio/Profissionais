import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface CampoTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    placeholder: string,
    label: string,
    name: string
}

const CampoTexto: React.FC<CampoTextoProps> = ({ type, placeholder, label, name, ...rest }) => {
    return (
        <div className="campos">
            <input type={type} id={name} name={name} placeholder={placeholder} {...rest}/>   
            <label htmlFor={name}>{label}:</label>            
        </div>
    );
}

export default CampoTexto;