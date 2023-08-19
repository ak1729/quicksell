import React from "react";
import "../grid/Grid.css";
import PriorityCard from "../card/PriorityCard";
import { BiPlus } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { LuSignalHigh } from "react-icons/lu";
import { LuSignalMedium } from "react-icons/lu";
import { LuSignalLow } from "react-icons/lu";
import { AiFillMinusCircle } from "react-icons/ai";
import { LiaCircleSolid } from "react-icons/lia";
import { PiCircleHalfFill } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGlobalData } from "../../Context";

const Grid = () => {
  const { data } = useGlobalData();
  const { tickets } = data;

  tickets?.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.title < b.title ? -1 : 1;
    } else {
      return a.priority > b.priority ? -1 : 1;
    }
  });

  return (
    <div className="grid__container">
      <div className="grid__item">
        <div className="grid__icon">
          <HiOutlineDotsHorizontal
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ marginTop: "-4px" }}>
            No Priority{" "}
            {(tickets?.filter((ticket) => ticket.priority === 0)).length}
          </span>
          <BiPlus
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginLeft: "auto",
            }}
          />
          <HiOutlineDotsHorizontal
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginRight: "10px",
            }}
          />
        </div>
        {tickets?.map((ticket) => {
          return (
            ticket.priority === 0 && (
              <PriorityCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                status={ticket.status}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <BsFillExclamationSquareFill
            style={{
              color: "red",
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ marginTop: "-4px" }}>
            Urgent {(tickets?.filter((ticket) => ticket.priority === 4)).length}
          </span>
          <BiPlus
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginLeft: "auto",
            }}
          />
          <HiOutlineDotsHorizontal
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginRight: "10px",
            }}
          />
        </div>
        {tickets?.map((ticket) => {
          return (
            ticket.priority === 4 && (
              <PriorityCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                status={ticket.status}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <LuSignalHigh
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ marginTop: "-4px" }}>
            High {(tickets?.filter((ticket) => ticket.priority === 3)).length}
          </span>
          <BiPlus
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginLeft: "auto",
            }}
          />
          <HiOutlineDotsHorizontal
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginRight: "10px",
            }}
          />
        </div>
        {tickets?.map((ticket) => {
          return (
            ticket.priority === 3 && (
              <PriorityCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                status={ticket.status}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <LuSignalMedium
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ marginTop: "-4px" }}>
            Medium {(tickets?.filter((ticket) => ticket.priority === 2)).length}
          </span>
          <BiPlus
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginLeft: "auto",
            }}
          />
          <HiOutlineDotsHorizontal
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginRight: "10px",
            }}
          />
        </div>
        {tickets?.map((ticket) => {
          return (
            ticket.priority === 2 && (
              <PriorityCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                status={ticket.status}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <LuSignalLow
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ marginTop: "-4px" }}>
            Low {(tickets?.filter((ticket) => ticket.priority === 1)).length}
          </span>
          <BiPlus
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginLeft: "auto",
            }}
          />
          <HiOutlineDotsHorizontal
            style={{
              color: "grey",
              backgroundColor: "transparent",
              marginRight: "10px",
            }}
          />
        </div>
        {tickets?.map((ticket) => {
          return (
            ticket.priority === 1 && (
              <PriorityCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                status={ticket.status}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
