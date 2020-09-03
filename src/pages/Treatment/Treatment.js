import React from "react";
import Header from "../../components/Header";

import "./styles.css";

export default function Treatment() {
    return (
        <section className="treatment">
            <Header title="Tratamento"></Header>
            <section className="treatment-cont">
                <img src="https://saude.novartis.com.br/asma-grave/wp-content/uploads/2019/01/2-2-tratamento-da-asma-grave.jpg" alt="" />
                <div className="treatment-initial">
                    <p>A base do tratamento da asma persistente é o uso de anti-inflamatório, sendo corticosteroides inalatórios os principais deles, associados a medicamentos de alívio com efeito broncodilatador. O ajuste da terapêutica visa o uso das menores doses necessárias para a obtenção do controle da doença, com isso reduzindo o potencial de efeitos adversos e os custos. </p>
                </div>
            </section>

        </section>
    );
}
