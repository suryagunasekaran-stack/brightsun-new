import React from "react"
import Marquee from "react-fast-marquee";
import "../css/Enginemaker.css";

import united from "../svg/united.svg"
import hanshin from "../svg/hanshin.svg"
import nakashima from "../svg/nakashima.svg"
import jpnengc from "../svg/jpnengc.png"
import akasaka from "../svg/akasaka.svg"


export default function Enginemaker() {
    return (
    <div className="ticker">
        <Marquee pauseOnHover={true}>

        <img src={united} alt="united logo"/>
        <img src={hanshin} alt="sds"/>
        <img src={nakashima} alt="asfda" />
        <img src={jpnengc} alt="sdaf" />
        <img src={akasaka} alt="sdaf" />
        </Marquee>
    </div>
    );
  }
  