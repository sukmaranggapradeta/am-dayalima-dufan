import React from "react";
import { Wrapper } from "./style";

function Top4(props) {
  return (
    <Wrapper>
      <div className="item">
        <div className="pos">{props.number ? props.number : ""}</div>
        <div>
          {" "}
          <img
            className="pic"
            src={props.player.pic}
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Mif4dpVcTD-lqJKHgQs45MHszmtF-krJBQo1MvvwlOkcW3m84Q&s"
            alt=""
          />
        </div>
        <div className="name">{props.player ? props.player.nama : ""}</div>
        <div className="score">{props.player ? props.player.poin : ""}</div>
      </div>
    </Wrapper>
  );
}

export default Top4;
