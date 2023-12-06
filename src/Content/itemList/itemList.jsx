import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/reset.css";
import "../../Style/style.css";
import { db } from "../Firebase/firebase";
import { ReadProfessional } from "../Firebase/firestoreDataReader";
import "./itemList.css";

const { time } = require("../../data/hourCount/hourcount.json");
const { today } = require("../../data/Today/today");

export function ItemListProf(props) {
  return (
    <Link to={"/select-service/" + props.index}>
      <div className="button scheduleButton">
        <div className="flexDiv">
          <div>
            <img className='profPhoto' src={props.msg.photo} />
          </div>
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
    if (timeChecker(i)) {
      appear = false;
    }
    if (props.data[i]["taken"] == true) {
      appear = false;
    }
  }
  function timeChecker(i) {
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const checkTime = `${h}:${m}`
    const arrayTime = time[i].split(':')
    const minutesTime = parseInt(arrayTime[0]) * 60 + parseInt(arrayTime[1])
    const minutesTimeCurrent = h * 60 + m

    const d = date.getDate()


    if (minutesTime < minutesTimeCurrent && d ==props.dayIndex.split('.')[0] ) return true

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
      photo: prof["photo"],
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
          <a className="telephoneLink" href={`https://wa.me/55${props.msg['number']}`}>
            <p className="number">
              {props.msg["number"]}
            </p>
          </a>
        </div>
        <img
          onClick={() => {
            data[params[0]]["schedule"][params[1]][props.index]["taken"] = false;
            data[params[0]]["schedule"][params[1]][props.index]["name"] = '';
            addSchedule();
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
            setTaken(true);
          }}
          className={"deleteIcon"}
          src={require("../../Assets/Icons/lock.png")}
        />
      </div>
    );
  }
}
