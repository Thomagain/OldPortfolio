import React from "react";
import { Link } from "react-router-dom";

function Drawer() {
  return (
    <div className="w-64 ">
      <div className="mx-6">
        <button className="btn btn-5">
          <Link to="/">Home</Link>
        </button>
        <button className="btn btn-5">
          <Link to="/about">About</Link>
        </button>
        <button className="btn btn-5">
          <Link to="/work">Work</Link>
        </button>
        <button className="btn btn-5">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export default Drawer;
