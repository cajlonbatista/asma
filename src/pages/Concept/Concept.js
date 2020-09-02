import React from "react";
import "./styles.css";
import back from "../../assets/back.svg";
import { Link } from "react-router-dom";
import bronquios from "../../assets/bronquios.jpg";

export default function Concept() {
    return (
        <section className="concept">
            <div className="concept-top">
                <Link to="/">
                    <img src={back} alt="" />
                </Link>
                <span>Conceito</span>
            </div>
            <section className="concept-cont">
                <article className="concept-1">
                    <img src={bronquios} alt="" />
                    <div>
                        <p>
                            A asma é uma doença inflamatória crónica das vias respiratórias caracterizada por sintomas diversos e recorrentes, obstrução reversível das vias respiratórias e broncoespasmo (espasmos nos brônquios que impedem a passagem do ar até os pulmões).
                        </p>
                    </div>
                </article>
            </section>
        </section>
    );
}
