import React from "react";
import "../grid/Grid.css";
import UserCard from "../card/UserCard";
import { BiPlus } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {AiOutlineUser} from "react-icons/ai"
import { useGlobalData } from "../../Context";



const Grid = () => {
  const {data}=useGlobalData()
  const {tickets, users}=data

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
          <AiOutlineUser
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Anoop sharma{" "}
            {(tickets?.filter((ticket) => ticket.userId === "usr-1")).length}
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
        {users?.map((user) => {
          return (
            user.name === "Anoop sharma" &&
            tickets?.map((ticket) => {
              return (
                ticket.userId === user.id && (
                  <UserCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag}
                    status={ticket.status}
                    priority={ticket.priority}
                  />
                )
              );
            })
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <AiOutlineUser
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Yogesh{" "}
            {(tickets?.filter((ticket) => ticket.userId === "usr-2")).length}
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
        {users?.map((user) => {
          return (
            user.name === "Yogesh" &&
            tickets?.map((ticket) => {
              return (
                ticket.userId === user.id && (
                  <UserCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag}
                    status={ticket.status}
                    priority={ticket.priority}
                  />
                )
              );
            })
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <AiOutlineUser
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Shankar Kumar{" "}
            {(tickets?.filter((ticket) => ticket.userId === "usr-3")).length}
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
        {users?.map((user) => {
          return (
            user.name === "Shankar Kumar" &&
            tickets?.map((ticket) => {
              return (
                ticket.userId === user.id && (
                  <UserCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag}
                    status={ticket.status}
                    priority={ticket.priority}
                  />
                )
              );
            })
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <AiOutlineUser
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Ramesh{" "}
            {(tickets?.filter((ticket) => ticket.userId === "usr-4")).length}
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
        {users?.map((user) => {
          return (
            user.name === "Ramesh" &&
            tickets?.map((ticket) => {
              return (
                ticket.userId === user.id && (
                  <UserCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag}
                    status={ticket.status}
                    priority={ticket.priority}
                  />
                )
              );
            })
          );
        })}
      </div>
      <div className="grid__item">
        <div className="grid__icon">
          <AiOutlineUser
            style={{
              backgroundColor: "transparent",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          <span style={{ color: "grey", marginTop: "-4px" }}>
            Suresh{" "}
            {(tickets?.filter((ticket) => ticket.userId === "usr-5")).length}
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
        {users?.map((user) => {
          return (
            user.name === "Suresh" &&
            tickets?.map((ticket) => {
              return (
                ticket.userId === user.id && (
                  <UserCard
                    key={ticket.id}
                    id={ticket.id}
                    title={ticket.title}
                    tag={ticket.tag}
                    status={ticket.status}
                    priority={ticket.priority}
                  />
                )
              );
            })
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
