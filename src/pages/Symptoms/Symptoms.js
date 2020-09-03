import React from "react";
import "./styles.css";

import Header from "../../components/Header";
export default function Symptoms() {
    return (
        <section className="concept">
            <Header title="Sinais e Sintomas"></Header>
            <section className="concept-cont">
                <div className="concept-1">
                    <div>
                        <p>A <strong>asma</strong> tem sintomas bem característicos, mas alguns deles podem ser confundidos com os de outras doenças. Para um diagnóstico adequado ou seguro, o ideal é procurar um profissional de saúde assim que sentir qualquer desconforto..</p>
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
                    <img src="https://www.mdsaude.com/wp-content/uploads/asma-ilustracao.jpg" alt="" />
                </div>
                <div>

                </div>
            </section>

        </section>
    );
}
