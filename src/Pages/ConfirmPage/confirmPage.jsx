import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../Content/Firebase/firebase";
import { ReadProfessional } from "../../Content/Firebase/firestoreDataReader";
import { Link } from "react-router-dom";

import "../../Style/reset.css";
import "../../Style/style.css";
import "./confirmPage.css";
import { ReturnButton } from "../../Content/ReturnButton/returnButton";

const { time } = require("../../data/hourCount/hourcount.json");

export function ConfirmPage() {
  const [loading, setLoading] = useState(false);
  var navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  var tempNum = number;
  const numberValue = (e) => {
    tempNum = e.target.value;
    if (number.includes("(")) {
      tempNum = tempNum.replace("(", "");
      tempNum = tempNum.replace(")", "");
      setNumber(tempNum);
    }
    setNumber(tempNum);
  };
  const nameValue = (e) => {
    setName(e.target.value);
  };

  var data = ReadProfessional();
  const { profIndex } = useParams();
  const { servIndex } = useParams();
  const { dayIndex } = useParams();
  const { timeIndex } = useParams();
  if (data.length == 0) return;

  const prof = data[profIndex];
  for (let i = timeIndex; i < parseInt(prof["services"][servIndex]["time"]) + parseInt(timeIndex); i++) {
    prof["schedule"][dayIndex][i]["service"] = prof["services"][servIndex]["name"];
    prof["schedule"][dayIndex][i]["name"] = name;
    prof["schedule"][dayIndex][i]["number"] = number;
    prof["schedule"][dayIndex][i]["taken"] = true;
  }
  const addSchedule = async () => {
    if (name == "" || number == "") {
      alert("digite seu nome e número por favor");
      return;
    }
    if (number.length != 11) {
      alert("digite o número sem hífen e sem parênteses por favor");
      return;
    }

    var trollNum = true;
    for (let i = 0; i < number.length; i++) {
      if (number[i] != number[0]) trollNum = false;
    }
    if (!trollNum) {
      setLoading(true);
      const profRef = doc(db, "professionals", data[profIndex]["id"]);
      const update = {
        name: prof["name"],
        services: prof["services"],
        occupation: prof["occupation"],
        schedule: prof["schedule"],
        photo: prof["photo"],
      };
      await setDoc(profRef, update);
      setLoading(false);
    }
    navigate("/confirmed/" + profIndex + "/" + servIndex + "/" + dayIndex + "/" + timeIndex);
  };
  return loading ? (
    <div className='loading-screen'>
      <div className='loading-spinner'></div>
    </div>
  ) : (
    <div className='body'>
      <div className='backgroundColor'>
        <ReturnButton link={"/select-time/" + profIndex + "/" + servIndex + "/" + dayIndex} />
        <div className='center'>
          <h1 className='pageTitle'>Você está quase acabando</h1>
          <div className='button scheduleButton'>
            <div>
              <h1>
                {prof["services"][servIndex]["name"]}, às {time[timeIndex]}
              </h1>
              <p>Com {prof["name"]}</p>
            </div>
          </div>

          <div className='spaceBox'></div>

          <p className='inputLabel'>Digite seu nome</p>
          <input onChange={nameValue}></input>

          <div className='spaceBox'></div>

          <p className='inputLabel'>Digite seu número</p>
          <input type={number} onKeyUp={numberValue} placeholder='Digite seu telefone'></input>
        </div>
        <div className='bottomGroup'>
          <Link to='/'>
            <div className='button bottomButton left'>
              <h1>Cancelar</h1>
            </div>
          </Link>

          <div
            onClick={(e) => {
              addSchedule();
            }}
          >
            <div className='button bottomButton right'>
              <h1>Concluir</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
