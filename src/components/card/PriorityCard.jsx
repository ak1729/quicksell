import React from "react";
import "./Card.css";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { AiFillMinusCircle } from "react-icons/ai";
import { LiaCircleSolid } from "react-icons/lia";
import { PiCircleHalfFill } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Icon = {
  Backlog: (
    <AiFillMinusCircle
      style={{ backgroundColor: "transparent", marginRight: "5px" }}
    />
  ),
  Todo: (
    <LiaCircleSolid
      style={{
        color: "grey",
        backgroundColor: "transparent",
        marginRight: "5px",
      }}
    />
  ),
  "In progress": (
    <PiCircleHalfFill
      style={{
        color: "#f2cf61",
        backgroundColor: "transparent",
        marginRight: "5px",
      }}
    />
  ),
  Done: (
    <AiFillCheckCircle
      style={{
        color: "purple",
        backgroundColor: "transparent",
        marginRight: "5px",
      }}
    />
  ),
  Canceled: (
    <AiFillCloseCircle
      style={{
        color: "grey",
        backgroundColor: "transparent",
        marginRight: "5px",
      }}
    />
  ),
};

const PriorityCard = ({ id, title, tag, status }) => {
  return (
    <div className="card__container">
      <span
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 className="card__userId">{id}</h4>
        <AiOutlineUser style={{ backgroundColor: "white" }} />
      </span>
      <span style={{ display: "flex", background: "white" }}>
        <span style={{ marginTop: "11px", backgroundColor: "white" }}>
          {Icon[status]}
        </span>
        <span className="card__title">{title}</span>
      </span>

      <div className="card__icon">
        <span className="card__feature">
          <VscCircleLargeFilled className="card__cir" />
          <span>{tag}</span>
        </span>
      </div>
    </div>
  );
};

export default PriorityCard;
