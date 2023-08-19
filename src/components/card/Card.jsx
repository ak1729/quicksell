import React from "react";
import "./Card.css";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuSignalHigh } from "react-icons/lu";
import { LuSignalMedium } from "react-icons/lu";
import { LuSignalLow } from "react-icons/lu";

const CardIcon = [
  <HiOutlineDotsHorizontal className="card__exc" />,
  <LuSignalLow className="card__exc" />,
  <LuSignalMedium className="card__exc" />,
  <LuSignalHigh className="card__exc" />,
  <BsFillExclamationSquareFill className="card__exc" />,
];

const Card = ({ id, title, tag, priority }) => {
  return (
    <div className="card__container">
      <h4 className="card__userId">{id}</h4>
      <div style={{paddingLeft: '10px', background: 'white'}}>
        <span style={{paddingLeft: '0px', marginLeft: '0px'}} className="card__title">{title}</span>
      </div>

      <div className="card__icon">
        <span style={{ backgroundColor: "white", fontSize:"20px", marginTop:"4px" }}>{CardIcon[priority]}</span>
        <span className="card__feature">
          <VscCircleLargeFilled className="card__cir" />
          <span>{tag}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
