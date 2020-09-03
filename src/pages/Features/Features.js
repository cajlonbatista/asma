import React from "react";

import Header from "../../components/Header";
import "./styles.css";

export default function Feature() {
    return (
        <section className="concept">
            <Header title="Características"></Header>
            <section className="concept-cont">
                <div className="concept-1">
                        <img src="https://media.gazetadopovo.com.br/viver-bem/2019/08/asma-768x512-f2bbb990.jpg" alt="" title="Mulher com Espirômetro" />
                    <div>
                        <p>As principais características dessa doença pulmonar são dificuldade de respirar, chiado e aperto no peito, respiração curta e rápida. Os sintomas pioram à noite e nas <strong>primeiras horas da manhã </strong> ou em resposta à prática de exercícios físicos, à exposição a <strong>alérgenos</strong>, à poluição ambiental e a mudanças climáticas.</p>
                    </div>
                </div>
                <div></div>
            </section>
        </section>
    );
}
