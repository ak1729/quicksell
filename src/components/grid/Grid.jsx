import React from "react";
import "./Grid.css";
import Card from "../card/Card";
import { AiFillMinusCircle } from "react-icons/ai";
import { LiaCircleSolid } from "react-icons/lia";
import { PiCircleHalfFill } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useGlobalData } from "../../Context";

const Grid = () => {
  const {data} = useGlobalData();
  const {tickets} = data;

  tickets?.sort((a, b)=> {
    if (a.priority === b.priority){
      return a.title < b.title ? -1 : 1
    } else {
      return a.priority > b.priority ? -1 : 1
    }
  })


  return (
    <div className="grid__container">
      <div className="grid__item">
        <div className="grid__icon">
          <AiFillMinusCircle
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Backlog{" "}
            {(tickets?.filter((ticket) => ticket.status === "Backlog")).length}
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
            ticket.status === "Backlog" && (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                priority={ticket.priority}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <LiaCircleSolid
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            ToDo{" "}
            {(tickets?.filter((ticket) => ticket.status === "Todo")).length}
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
            ticket.status === "Todo" && (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                priority={ticket.priority}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <PiCircleHalfFill
            style={{
              color: "yellow",
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            In Progress{" "}
            {
              (tickets?.filter((ticket) => ticket.status === "In progress"))
                .length
            }
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
            ticket.status === "In progress" && (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                priority={ticket.priority}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <AiFillCheckCircle
            style={{
              color: "purple",
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Done{" "}
            {(tickets?.filter((ticket) => ticket.status === "Done")).length}
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
            ticket.status === "Done" && (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                priority={ticket.priority}
              />
            )
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <AiFillCloseCircle
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Cancelled{" "}
            {
              (tickets?.filter((ticket) => ticket.status === "Cancelled"))
                .length
            }
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
            ticket.status === "Canceled" && (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                tag={ticket.tag}
                priority={ticket.priority}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
