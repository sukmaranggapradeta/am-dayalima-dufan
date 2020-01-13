import React from "react";
import { Wrapper } from "./style";

function Top3(props) {
  return (
    <Wrapper className="three item">
      <div className="pos">3</div>
      <div>
        {" "}
        <img
          className="pic"
          src={props.player.pic}
          //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVKgygD3sMsOQbZBdUC1GFxEtCTDZalsqSeom52HOEdG5pzG7&s"
          //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBKI9pN_5dfcrY-UCdZz6Cikn8wD5k94e26ceJuukEMPM1GICLw&s"
          alt=""
        />
      </div>
      <div className="name">{props.player.nama}</div>
      <div className="score">{props.player.poin}</div>
    </Wrapper>
  );
}

export default Top3;
