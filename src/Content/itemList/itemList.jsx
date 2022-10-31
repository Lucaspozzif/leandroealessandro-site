import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/reset.css";
import "../../Style/style.css";
import { db } from "../Firebase/firebase";
import { ReadProfessional } from "../Firebase/firestoreDataReader";
import "./itemList.css";

const { time } = require("../../Data/hourCount/hourcount.json");
const { today } = require("../../Data/Today/today");

export function ItemListProf(props) {
  return (
    <Link to={"/select-service/" + props.index}>
      <div className="button scheduleButton">
        <div className="flexDiv">
          <div className="profPhoto"></div>
          <div>
            <h1 className="title">{props.msg[props.title]}</h1>
            <p className="subtitle">{props.msg[props.subtitle].join(", ")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export function ItemListProfSecret(props) {
  return (
    <Link to={"/p/" + props.index + "/" + today}>
      <div className="button scheduleButton">
        <div>
          <h1 className="title">{props.msg[props.title]}</h1>
          <p className="subtitle">{props.msg[props.subtitle].join(", ")}</p>
        </div>
      </div>
    </Link>
  );
}
export function ItemListServ(props) {
  return (
    <Link
      to={
        "/select-time/" + props.profIndex + "/" + props.servIndex + "/" + today
      }
    >
      <div className="button scheduleButton">
        <h1 className="title">{props.msg["name"]}</h1>
      </div>
    </Link>
  );
}
export function ItemListTime(props) {
  var appear = true;
  for (
    let i = props.index;
    i < parseInt(props.service) + parseInt(props.index);
    i++
  ) {
    if (!props.data[i]) return;
    if (props.data[i]["taken"] == true) {
      appear = false;
    }
  }
  if (appear == true) {
    return (
      <Link
        to={
          "/confirm/" +
          props.profIndex +
          "/" +
          props.servIndex +
          "/" +
          props.dayIndex +
          "/" +
          props.index
        }
      >
        <div className="button scheduleButton">
          <h1>{time[props.index]}</h1>
        </div>
      </Link>
    );
  }
}
export function ItemListTimeSecret(props) {
  const navigate = useNavigate();
  const [taken, setTaken] = useState(true);
  var data = ReadProfessional();
  const params = props.data;
  var prof = data[params[0]];
  if (data.length == 0) return;

  const addSchedule = async () => {
    const profRef = doc(db, "professionals", data[params[0]]["id"]);
    const update = {
      name: prof["name"],
      services: prof["services"],
      occupation: prof["occupation"],
      schedule: prof["schedule"],
    };
    await setDoc(profRef, update);
    navigate(0);
  };

  if (props.msg["taken"] == true && taken == true) {
    return (
      <div className="greyButton scheduleButton editableButton">
        <div>
          <h1>{time[props.index]}</h1>
          <p>
            {props.msg["name"]} agendou {props.msg["service"]}
          </p>
        </div>
        <img
          onClick={() => {
            data[params[0]]["schedule"][params[1]][props.index][
              "taken"
            ] = false;
            addSchedule();
            console.log(prof["schedule"]);
            setTaken(false);
          }}
          className={"deleteIcon"}
          src={require("../../Assets/Icons/delete.png")}
        />
      </div>
    );
  } else {
    return (
      <div className="button scheduleButton editableButton">
        <div>
          <h1>{time[props.index]}</h1>
        </div>
        <img
          onClick={() => {
            data[params[0]]["schedule"][params[1]][props.index]["taken"] = true;
            data[params[0]]["schedule"][params[1]][props.index]["name"] =
              "bloqueado";
            data[params[0]]["schedule"][params[1]][props.index]["service"] =
              "bloqueado";
            data[params[0]]["schedule"][params[1]][props.index]["number"] =
              "bloqueado";
            addSchedule();
            console.log(prof["schedule"]);
            setTaken(true);
          }}
          className={"deleteIcon"}
          src={require("../../Assets/Icons/lock.png")}
        />
      </div>
    );
  }
  return (
    <div className="button scheduleButton">
      <h1>{time[props.index]}</h1>
    </div>
  );
}
