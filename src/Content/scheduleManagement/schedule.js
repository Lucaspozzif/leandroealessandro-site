import { doc, setDoc } from "firebase/firestore";
import { currentDay, date } from "../../data/Today/today";
import { db } from "../Firebase/firebase";

const emptyDay = [];
const lockedDay = [];
for (let i = 0; i < 23; i++) {
  emptyDay.push({
    taken: false,
    name: "",
    number: "",
    service: "",
  });
  lockedDay.push({
    taken: true,
    name: "bloqueado",
    number: "bloqueado",
    service: "bloqueado",
  });
}

export function checkGenerateDay(data, dateTime, profIndex) {
  const prof = data[profIndex];
  //Limitations on specific professionals accounts
  switch (profIndex) {
    case "1": // Alessandro
      for (let i = 20; i <= 22; i++) {
        prof["schedule"][dateTime][i] = {
          taken: true,
          name: "bloqueado",
          number: "bloqueado",
          service: "bloqueado",
        };
      }
      break;
    case "3": // Marcela
      for (let i = 16; i <= 22; i++) {
        prof["schedule"][dateTime][i] = {
          taken: true,
          name: "bloqueado",
          number: "bloqueado",
          service: "bloqueado",
        };
      }
      break;

    case "4": // Flaviane
    case "7": // Leandro
      for (let i = 0; i <= 4; i++) {
        prof["schedule"][dateTime][i] = {
          taken: true,
          name: "bloqueado",
          number: "bloqueado",
          service: "bloqueado",
        };
      }
      break;

    default:
      break;
  }

  if (prof["schedule"][dateTime]) return;

  if (dateTime.split("$")[1] == -1 || dateTime.split("$")[1] == 1) {
    prof["schedule"][dateTime] = lockedDay;
  } else {
    prof["schedule"][dateTime] = emptyDay;
    // time conditions will be added
  }
  function compare(a, b) {
    if (a["name"] < b["name"]) {
      return -1;
    }
    if (a["name"] > b["name"]) {
      return 1;
    }
    return 0;
  }
  console.log(prof.schedule[dateTime]);
  const addSchedule = async () => {
    const profRef = doc(db, "professionals", data[profIndex]["id"]);
    const update = {
      name: prof["name"],
      services: prof["services"].sort(compare),
      occupation: prof["occupation"],
      schedule: prof["schedule"],
      photo: prof["photo"],
    };
    await setDoc(profRef, update);
  };
  addSchedule();
}
