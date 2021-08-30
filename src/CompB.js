import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { del } from "./Redux/changeSlice";

function CompB() {
  const mystate = useSelector((state) => state.changeSlice);
  const desp = useDispatch();
  let dateCheck = "";

  let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    dateCheck = year + month + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  return (
    <div className="CompB">
      {mystate.value.map((item, index) => {
        return (
          <div className="inp">
            <div>
              <li>{item.n}</li> <li>{item.de}</li> <li>{item.d}</li>{" "}
            </div>{" "}
            <div>
              {item.d.replace(/-/g, "") === dateCheck ? (
                <p>Due Date is Today</p>
              ) : item.d.replace(/-/g, "") <= dateCheck ? (
                <p>Due Date is Passed</p>
              ) : null}
            </div>{" "}
            <div>
              {" "}
              <button
                className="delButton"
                onClick={() => {
                  desp(del({ in: index }));
                }}
              >
                Delete
              </button>
            </div>{" "}
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default CompB;
