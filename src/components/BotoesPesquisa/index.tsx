import React from 'react';
import { Link } from 'react-router-dom';

interface IButtonProps {
    url: string,
    text: string,
    classe: string,
    img: string,
    alt: string,
}

const ButtonPesquisa: React.FC<IButtonProps> = ({url, text, classe, img, alt}) => {
    return (
        <Link to={url} className={classe}>
            <img src={img} alt={alt}/>
            {text}
        </Link>
    );
}

export default ButtonPesquisa;