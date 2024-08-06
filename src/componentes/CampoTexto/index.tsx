import "./CampoTexto.css";

interface CampoTextoProps {
    placeholder: string;
    label: string;
    valor: string;
    obrigatorio?: boolean;
    aoAlterado: (valor: string) => void;
}

const CampoTexto = ({
    placeholder,
    label,
    valor,
    aoAlterado,
    obrigatorio = false,
}: CampoTextoProps) => {
    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    );
};

export default CampoTexto;
