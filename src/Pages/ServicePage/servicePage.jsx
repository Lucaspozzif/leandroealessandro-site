import { useParams } from "react-router-dom";
import { BottomButtons } from "../../Content/bottomButtons/bottomButtons";
import { ReadProfessional } from "../../Content/Firebase/firestoreDataReader";
import { ItemListServ } from "../../Content/itemList/itemList";

import "../../Style/reset.css";
import "../../Style/style.css";
import "../../Style/selectPages.css";
import { ReturnButton } from "../../Content/ReturnButton/returnButton";
export function ServicePage() {
  var data = ReadProfessional();
  const { profIndex } = useParams();
  if (data.length == 0) return;
  return (
    <div className="body">
      <div className="backgroundColor">
        <ReturnButton link={"/select-professional"} />
        {data[profIndex]["services"].map((serv) => {
          return (
            <ItemListServ
              key={data[profIndex]["services"].indexOf(serv)}
              msg={serv}
              profIndex={profIndex}
              servIndex={data[profIndex]["services"].indexOf(serv)}
            />
          );
        })}
      </div>
    </div>
  );
}
