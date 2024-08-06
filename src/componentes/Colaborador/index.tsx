import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import "./Colaborador.css";

interface ColaboradorProps extends IColaborador {
    corDeFundo: string;
}

const Colaborador = ({
    nome,
    imagem,
    cargo,
    corDeFundo,
    data,
}: ColaboradorProps) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
