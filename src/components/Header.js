import React from "react";
import "./styles.css";
import back from "../assets/back.svg";
import { Link } from "react-router-dom";
export default function Header(props){
    return(
        <div className="concept-top">
                <Link to="/">
                    <img src={back} alt="" />
                </Link>
                <span>{props.title}</span>
        </div>
    );
}