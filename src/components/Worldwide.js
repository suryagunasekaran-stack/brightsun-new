import React from "react";
import "../../node_modules/flag-icon-css/css/flag-icons.min.css";
import "../css/Worldwide.css"

export default function Worldwide () {
    return (
      <>
      <h1 id="followgrid">Worldwide Network</h1>
      <div className="grid-container-flag">

          <div className="grid-item-flag">EPSCO LTD <br /> <span className="flag-icon flag-icon-cy" style={{width:"100px", height: "100px"}}></span> CYPRUS</div>
          <div className="grid-item-flag">VISURGIS MARINE SERVICE  <br /> <span className="flag-icon flag-icon-de" style={{width:"100px", height: "100px"}}></span> GERMANY</div>
          <div className="grid-item-flag">TOOL BOX MARINE REPAIRS ALLIANCE LTD  <br /> <span className="flag-icon flag-icon-gr" style={{width:"100px", height: "100px"}}></span> GREECE</div>
          <div className="grid-item-flag">KATSUYA KUJIME SAN <br /> <span className="flag-icon flag-icon-jp" style={{width:"100px", height: "100px"}}></span> JAPAN</div>
          <div className="grid-item-flag">CALVEY MARINE LIMITED <br /> <span className="flag-icon flag-icon-gb" style={{width:"100px", height: "100px"}}></span> UNITED KINGDOM</div>
          <div className="grid-item-flag">GLOBAL MARINE SERVICE CO LTD  <br /> <span className="flag-icon flag-icon-tr" style={{width:"100px", height: "100px"}}></span> TURKEY</div>
          <div className="grid-item-flag">SHANGHAI SAJEE MACHINERY CO LTD  <br /> <span className="flag-icon flag-icon-cn" style={{width:"100px", height: "100px"}}></span> CHINA</div>
          <div className="grid-item-flag">AYS SHIP REPAIR B.V <br /> <span className="flag-icon flag-icon-nl" style={{width:"100px", height: "100px"}}></span> NETHERLANDS</div>
          <div className="grid-item-flag">AYS SHIP REPAIR B.V <br /> <span className="flag-icon flag-icon-be" style={{width:"100px", height: "100px"}}></span> BELGIUM</div>
      </div>
  </>
      );
}