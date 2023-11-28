import { useState } from "react";
import style from './Formulario.module.css'

const Formulario = () => {

    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const calculoImc = () => {
        const imc = peso / (altura * altura);
        const formatoImc = imc.toFixed(2);

        if(formatoImc <= 18.5) {
            return (
                <p>Magreza</p>
            )
        } else if(formatoImc <= 24.9) {
            return (
                <p>Normal</p>
            )
        } else if(formatoImc <= 29.9) {
            return (
                <p>Sobrepeso</p>
            )
        } else if(formatoImc <= 34.9) {
            return (
                <p>Obesidade grau I</p>
            )
        } else if(formatoImc <= 39.9) {
            return (
                <p>Obesidade grau II</p>
            )
        }  else if(formatoImc <= 40) {
            return (
                <p>Obesidade grau II</p>
            )
        } else {
            return (
                <p>Aguardando resultado!</p>
            )
        }
    }

    return (
        <form className={style.formulario}>
            <h2>Altura (m)</h2>
            <h5>Metro e Cm, separados por vírgula</h5>
            <input type="number" placeholder="DIgite a Altura (m)" onChange={evento => setAltura(evento.target.value)} />
            <h2>Peso (kg)</h2>
            <input type="number" placeholder="DIgite o Peso (kg)" onChange={evento => setPeso(evento.target.value)} />
            {calculoImc()}
        </form>
    )
}

export default Formulario;