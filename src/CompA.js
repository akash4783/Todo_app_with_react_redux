import React from "react";
import "./App.css";
import { useState } from "react";
import { add } from "./Redux/changeSlice";
import { useDispatch } from "react-redux";

function CompA() {
  const [name, setName] = useState("");
  const [desp, setDesp] = useState("");
  const [dt, setDt] = useState("");
  const disp = useDispatch();

  return (
    <div className="CompA">
      <div className="heading">To Do List</div>
      <div className=" backround">
        <div>
          <input
            className="input1"
            placeholder="Task"
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
          />
          <button
            className="button"
            onClick={() => {
              disp(add({ n: name, de: desp, d: dt }));
            }}
          >
            Add
          </button>
        </div>
        <div>
          <input
            placeholder="Description"
            className="input2"
            onChange={(event) => {
              setDesp(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <input
            className="date"
            onChange={(event) => {
              setDt(event.target.value);
            }}
            type="date"
          />
        </div>
      </div>
    </div>
  );
}

export default CompA;
