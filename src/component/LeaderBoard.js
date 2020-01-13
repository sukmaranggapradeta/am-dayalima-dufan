import React from "react";
import { Wrapper } from "./style";
import Top1 from "./Top1";
import Top2 from "./Top2";
import Top3 from "./Top3";
import Top4 from "./Top4";

function LeaderBoard(props) {
  return (
    <Wrapper>
      <div className="">
        <div className="top3">
          {props.players.map(
            (player, index) =>
              index === 1 && <Top2 key={index} player={player}></Top2>
          )}
          {props.players.map(
            (player, index) =>
              index === 0 && <Top1 key={index} player={player}></Top1>
          )}

          {props.players.map(
            (player, index) =>
              index === 2 && <Top3 key={index} player={player}></Top3>
          )}
        </div>

        <div className="list">
          {props.players.map(
            (player, index) =>
              index > 2 && (
                <Top4 key={index} player={player} number={index + 1}></Top4>
              )
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default LeaderBoard;
