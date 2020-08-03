import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Voltar = () => {
    const history = useHistory();
    return(
        <>
            <Link to="" onClick={() => {
                history.goBack();
            }}>
                Voltar
            </Link>
        </>
    );
}

export default Voltar;