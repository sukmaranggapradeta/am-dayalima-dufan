import React from "react";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "25px"
      }}
    >
      <img
        src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/Bean+Eater-1s-200px.svg"
        alt=""
      />
    </div>
  );
}

export default Loading;
