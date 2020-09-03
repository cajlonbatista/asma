import React from "react";

import Header from "../../components/Header";
import "./styles.css";

export default function Feature() {
    return (
        <section className="features">
            <Header title="Características"></Header>
            <section className="features-cont">
                <div className="features-initial">
                        <img src="https://media.gazetadopovo.com.br/viver-bem/2019/08/asma-768x512-f2bbb990.jpg" alt="" title="Mulher com Espirômetro" />
                    <div className="features-i2">
                        <p>As principais características dessa doença pulmonar são dificuldade de respirar, chiado e aperto no peito, respiração curta e rápida. Os sintomas pioram à noite e nas primeiras horas da manhã ou em resposta à prática de exercícios físicos, à exposição a alérgenos, à poluição ambiental e a mudanças climáticas.</p>
                    </div>
                </div>
                <div></div>
            </section>
        </section>
    );
}
