import React from "react";

import "./styles.css";

import bronquios from "../../assets/bronquios.jpg";
import Header from "../../components/Header";

export default function Concept() {
    return (
        <section className="concept">
            <Header title="Conceito"></Header>
            <section className="concept-cont">
                <article className="concept-1">
                    <img src={bronquios} alt="" />
                    <div>
                        <p>
                            A <strong>asma</strong> é uma doença inflamatória crónica das vias respiratórias caracterizada por sintomas diversos e recorrentes, obstrução reversível das vias respiratórias e <strong>broncoespasmo</strong> (espasmos nos brônquios que impedem a passagem do ar até os pulmões).
                        </p>
                    </div>
                </article>
                <article className="concept-1">
                    
                    <div>
                        <p>
                            Cerca de um terço dos asmáticos possui um familiar (pais, avós, irmãos ou filhos) com asma ou com outra doença alérgica. Por outro lado, alguns fatores ambientais como alterações climáticas, contato com pólen, mofo, poeira, pelo de animais, fumaça, cheiros fortes, gripes e resfriados e ingestão de certos alimentos ou medicamentos podem atuar como precipitantes ou agravantes da enfermidade.
                        </p>
                    </div>
                    <img src="https://saude.novartis.com.br/asma-grave/wp-content/uploads/2019/01/4-4-asma-alergica-e-asma-nao-alergica-diferencas.jpg" alt="" />
                </article>
                
            </section>
        </section>
    );
}
