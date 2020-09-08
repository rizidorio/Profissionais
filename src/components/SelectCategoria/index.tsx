import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

interface Categoria {
    id: number;
    nome: string;
}

interface Props {
    value: string
}

const SelectCategoria: React.FC<Props> = ({value, ...rest}) => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        api.get('categorias').then(response => {
            setCategorias(response.data);
        });
    }, []);
    
    return(
        <div className="select-block">
            <label htmlFor="categorias">Categorias</label>
            <select name="categorias" id="categorias" value={value} {...rest}>
                <option value="0" disabled hidden>Selecione uma Categoria</option>
                {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                ))}
            </select>
        </div>          
    )
}

export default SelectCategoria;