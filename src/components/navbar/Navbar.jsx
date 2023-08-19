import React, { useState  } from "react";

import "./Navbar.css";
import {IoIosOptions} from 'react-icons/io';
import {BsChevronDown} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  const [drop, setDrop]=useState(false)

  const handleClick=()=>{
    setDrop(!drop)
  }

  const handleOption = (e) => {
    navigate(`${e.target.value}`);
    setDrop(!drop)
  }

  return (
    <nav className="navbar__container">

        <button className="navbar__btn" onClick={handleClick}>
          <IoIosOptions className="navbar__icon" />
          <span>Display</span>
          <BsChevronDown className="navbar__icon" />
        </button>

        {drop && (
          <div className="navbar__drop">
            <div className="navbar__option">
              <label htmlFor="group">Grouping</label>
              <select id="group" onChange={handleOption}>
                <option value="">
                  ---Select Option---
                </option>
                <option value="/">
                  Status
                </option>
                <option value="/user">
                  User
                </option>
              </select>
            </div>
            <div className="navbar__option">
              <label htmlFor="order">Ordering</label>
              <select name="" id="order" onChange={handleOption}>
                <option value="">---Select Option---</option>
                <option value="/priority">Priority</option>
              </select>
            </div>
          </div>
        ) }
      
    </nav>
  );
  
};

export default Navbar;