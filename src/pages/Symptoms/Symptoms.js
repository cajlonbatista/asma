import React from "react";
import "./styles.css";

import Header from "../../components/Header";
export default function Symptoms() {
    return (
        <section className="symptoms">
            <Header title="Sinais e Sintomas"></Header>
            <section className="symptoms-cont">
                <div className="symptoms-initial">
                    <p>A asma tem sintomas bem característicos, mas alguns deles podem ser confundidos com os de outras doenças. Para um diagnóstico adequado ou seguro, o ideal é procurar um profissional de saúde assim que sentir qualquer desconforto..</p>
                    <p>Os principais sintomas são:</p>
                    <ul>
                        <li>Tosse seca.</li>
                        <li>Chiado no peito.</li>
                        <li>Dificuldade para respirar</li>
                        <li>Respiração rápida e curta.</li>
                        <li>Desconforto torácico.</li>
                        <li>Ansiedade.</li>
                    </ul>
                </div>
                <div>

                </div>
            </section>

        </section>
    );
}
