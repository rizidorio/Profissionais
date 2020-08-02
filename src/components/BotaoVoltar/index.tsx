import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Voltar = () => {
    const history = useHistory();
    return(
        <div>
            <Link to="" onClick={() => {
                history.goBack();
            }}>
                Voltar
            </Link>
        </div>
    );
}

export default Voltar;