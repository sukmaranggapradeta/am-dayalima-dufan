import React from "react";
import { Wrapper } from "./style";
import { Modal } from "react-materialize";

function Top4(props) {
  const members = props.dataTeam.filter(
    (el) => el.teamName === props.player.nama
  );

  const trigger = (
    <Wrapper>
      <div className="item">
        <div className="pos">{props.number ? props.number : ""}</div>
        <div>
          {" "}
          <img className="pic" src={props.player.pic} alt="" />
        </div>
        <div className="name">{props.player ? props.player.nama : ""}</div>
        <div className="score">{props.player ? props.player.poin : ""}</div>
      </div>
    </Wrapper>
  );

  return (
    <Modal header={`Team ${props.player.nama}`} trigger={trigger}>
      {members.length > 0 &&
        members[0].member.map((item, index) => (
          <p key={index}>
            {index + 1}. {item}
          </p>
        ))}
    </Modal>
  );
}

export default Top4;
