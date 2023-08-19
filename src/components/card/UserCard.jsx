import React from "react";
import "./Card.css";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { AiFillMinusCircle } from "react-icons/ai";
import { LiaCircleSolid } from "react-icons/lia";
import { PiCircleHalfFill } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuSignalHigh } from "react-icons/lu";
import { LuSignalMedium } from "react-icons/lu";
import { LuSignalLow } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";

const CardIcon = [
  <HiOutlineDotsHorizontal className="card__exc" />,
  <LuSignalLow className="card__exc" />,
  <LuSignalMedium className="card__exc" />,
  <LuSignalHigh className="card__exc" />,
  <BsFillExclamationSquareFill className="card__exc" />,
];

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

const UserCard = ({ id, title, tag, status, priority }) => {
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
        <span
          style={{
            backgroundColor: "white",
            fontSize: "20px",
            marginTop: "4px",
          }}
        >
          {CardIcon[priority]}
        </span>
        <span className="card__feature">
          <VscCircleLargeFilled className="card__cir" />
          <span>{tag}</span>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
