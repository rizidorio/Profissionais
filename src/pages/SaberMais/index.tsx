import React from 'react';
import Cabecalho from '../../components/Cabecalho';

import './styles.css';

function SaberMais () {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    return(
        <div id="page-info">
            <div id="page-info-content" className="container">
                <Cabecalho 
                    titulo="Saiba mais"
                />
                <main>
                    <h4>Com uma pequena taxa mensal* você poderá divulgar sua atividade e obter diversos benefícios.</h4>
                    <section className="beneficios">
                        <p>- Desconto em diversos fornecedores</p>
                        <p>- Treinamentos exclusivos</p>
                        <p>- Criação e assessoria de redes sociais</p>
                        <p>- Divulgação em redes sociais</p>
                        <p>E muito mais...</p>
                    </section>
                    <section className="button-cad">
                        <a href="/cadastrar">Cadastrar</a>
                    </section>
                    <footer>
                        <p>
                            <a href="/" onClick={handleOpen}>Clique aqui </a> 
                            e conheça todos os planos.
                        </p>
                        <p>
                            * Planos a partir de R$ 10,00 mensais.
                        </p>
                        
                    </footer>
                </main>
                
            </div>
        </div>
    );
}

export default SaberMais;